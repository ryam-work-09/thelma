import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://cfxbnbquliomdjztlxob.supabase.co";
const supabaseAnonKey = "sb_publishable_cLmWesOU5LJNG3cJvnKYXg_Qncbps6g";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
