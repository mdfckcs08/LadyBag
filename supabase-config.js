// REEMPLAZA ESTOS VALORES CON LOS TUYOS DE SUPABASE
const SUPABASE_URL = 'https://qnkqtqdwyzevpqkxcefr.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Fppq0Cd6ghnNy1jzDSgPUQ__YH3YROc';

// Inicializar Supabase
const { createClient } = supabase;
window.supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
