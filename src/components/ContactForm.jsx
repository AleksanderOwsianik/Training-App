import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sjiyqqkffnffxybdjrge.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqaXlxcWtmZm5mZnh5YmRqcmdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4ODY3MjIsImV4cCI6MjAyMjQ2MjcyMn0.z43ijByzOagIfrG_k41wCoJGI82hiWwf4zaYPcVT6uo';
const supabase = createClient(supabaseUrl, supabaseKey);

const ContactForm = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = {
      id: Date.now(),
      nickname,
      email,
      message,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    try {
      const { data, error } = await supabase
        .from('contact_form')
        .insert([newContact]);

      if (error) {
        throw new Error(`Błąd podczas zapisywania danych: ${error.message}`);
      }

      console.log('Dane zostały pomyślnie zapisane:', data);
      setThankYouMessage('Thank you for your message');
    } catch (error) {
      console.error('Błąd podczas zapisywania danych:', error.message);
    }

    setNickname('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='form'>
      <h2 className='title text-center mb-4' style={{ fontSize: '20px' }}>
        Talk to Us
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group position-relative'>
          <label htmlFor='formName' className='d-block'>
            <input
              id='formName'
              className='form-control form-control-lg thick'
              placeholder='Nickame'
              type='text'
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </label>
        </div>

        <br />

        <div className='form-group position-relative'>
          <label htmlFor='forMail' className='d-block'>
            <input
              type='email'
              id='forEmail'
              className='form-control form-control-lg thick'
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>

        <br />

        <div className='form-group message'>
          <label>
            <textarea
              id='formMessage'
              className='form-control form-control-lg'
              rows='1'
              placeholder='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>

        <br />

        <div className='text-center'>
          <button type='submit' className='btn btn-primary' tabIndex='-1'>
            Send message
          </button>
        </div>

        <p>{thankYouMessage}</p>
      </form>
    </div>
  );
};

export default ContactForm;
