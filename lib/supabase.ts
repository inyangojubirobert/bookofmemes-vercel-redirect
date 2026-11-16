import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zgyphnpwdjiyycrdmiwe.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_w--9g27g9g80Lzdfh8XOLg_QMaFNdPG';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
