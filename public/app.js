// Configuración básica (Copia estos datos de tu .env a aquí para el frontend)
const supabaseUrl = 'TU_URL';
const supabaseKey = 'TU_KEY';
const supabase = libSupabase.createClient(supabaseUrl, supabaseKey);

const form = document.getElementById('formApuesta');
const tabla = document.getElementById('tablaCuerpo');
const bancoDisplay = document.getElementById('bancoVal');

let bancoActual = 0;

// Función para registrar y actualizar
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const monto = parseFloat(document.getElementById('monto').value);
    const cuota = parseFloat(document.getElementById('cuota').value);
    const status = document.getElementById('status').value;
    const gananciaPotencial = monto * cuota;

    // LÓGICA DE BANCO
    // Siempre restamos el monto apostado primero
    bancoActual -= monto;

    if (status === 'ganado') {
        bancoActual += gananciaPotencial;
    }

    // Actualizar UI
    actualizarTabla(monto, cuota, gananciaPotencial, status);
    bancoDisplay.innerText = `$${bancoActual.toFixed(2)}`;
    
    // Aquí iría el supabase.from('bets').insert(...)
    form.reset();
});

function actualizarTabla(m, c, g, s) {
    const fila = `<tr>
        <td>$${m}</td>
        <td>${c}</td>
        <td>$${g.toFixed(2)}</td>
        <td><span class="badge ${s === 'ganado' ? 'bg-success' : s === 'perdido' ? 'bg-danger' : 'bg-warning'}">${s}</span></td>
    </tr>`;
    tabla.innerHTML += fila;
}