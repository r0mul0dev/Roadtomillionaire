require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// EL CAMBIO ESTÁ AQUÍ: Usamos (.*) en lugar de *
app.get('(.*)', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Esto es necesario para desarrollo local
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
}

// ESTA LÍNEA ES VITAL PARA VERCEL
module.exports = app;