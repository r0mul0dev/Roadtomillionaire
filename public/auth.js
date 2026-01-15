const supabase = supabase.createClient('TU_URL', 'TU_KEY');

// REGISTRO
async function signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert('Revisa tu correo para confirmar la cuenta');
}

// LOGIN
async function logIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else window.location.href = '/dashboard.html'; // Redirigir al entrar
}

// LOGOUT
async function logOut() {
    await supabase.auth.signOut();
    window.location.href = '/login.html';
}