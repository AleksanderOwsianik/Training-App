import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sjiyqqkffnffxybdjrge.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqaXlxcWtmZm5mZnh5YmRqcmdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4ODY3MjIsImV4cCI6MjAyMjQ2MjcyMn0.z43ijByzOagIfrG_k41wCoJGI82hiWwf4zaYPcVT6uo';
const supabase = createClient(supabaseUrl, supabaseKey);

const AllContacts = () => {
  useEffect(() => {
    const fetchContacts = async () => {
      const { error } = await supabase.from('contact_form').select('*');

      if (error) {
        console.error('Błąd podczas pobierania danych:', error.message);
      }
    };

    fetchContacts();
  }, []);
};

export default AllContacts;
