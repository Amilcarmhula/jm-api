const express = require('express');
// const dotenv = require('dotenv').config();
const twilio = require('twilio');
const cors = require('cors');

const app = express();
const port = 3010; // Porta do servidor

// Middleware
app.use(express.json());
app.use(cors());

// Credenciais do Twilio (mantenha seguras!)
const accountSid = 'ACa42b20046dbeb313e32e37359fdb1cf7';
const authToken = '51eda397ae976d20b3d0c89ed13ddba4';
const client = twilio(accountSid, authToken);

// Endpoint para enviar mensagens
app.post('/api/send-message', (req, res) => {
    const { message } = req.body;
    console.log("TESTE!!!! "+message)
    console.log("TESTE!!!! "+message)


    // client.messages
    //     .create({
    //         from: 'whatsapp:+14155238886',
    //         body: message,
    //         to: 'whatsapp:+258847100793',
    //     })
    //     .then((response) => {
    //         res.status(200).json({ success: true, sid: response.sid });
    //     })
    //     .catch((error) => {
    //         res.status(500).json({ success: false, error: error.message });
    //     });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
