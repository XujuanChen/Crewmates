import { createClient } from '@supabase/supabase-js';

const URL = process.env.REACT_APP_API_URL
const KEY = process.env.REACT_APP_API_KEY

export const supabase = createClient( URL, KEY );

