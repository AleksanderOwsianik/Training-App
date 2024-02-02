import React from 'react';
import ReactDOM from 'react-dom/client';
import TrainingApp from '@/TrainingApp';
import '@/main.scss';
//import { createClient } from '@supabase/supabase-js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrainingApp />
  </React.StrictMode>,
);
