import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zgyphnpwdjiyycrdmiwe.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpneXBobnB3ZGppeXljcmRtaXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MTU4NjAsImV4cCI6MjA2NTM5MTg2MH0.LWwAaC5hp8wUlHS0RsxFSp2Wn6YNhIVnlv4D0SgTtho';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
