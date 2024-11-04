require('dotenv').config();
console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);


const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

const cors = require('cors');
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());

// Importa tu función de sendEmail
const sendEmail = require('./api/sendEmail.js');

// Define la ruta para la API
app.post('/api/sendEmail', sendEmail);

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

