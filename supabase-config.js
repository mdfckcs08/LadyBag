// REEMPLAZA ESTOS VALORES CON LOS TUYOS DE SUPABASE
const SUPABASE_URL = 'https://qnkqtqdwyzevpqkxcefr.supabase.co';
const SUPABASE_KEY = 'ElCsActivo0121';

// Inicializar Supabase
const { createClient } = supabase;
window.supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
