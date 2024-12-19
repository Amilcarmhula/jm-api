const express = require('express');
const dotenv = require('dotenv').config();
const twilio = require('twilio');
const cors = require('cors');
const SID = process.env.ID
const AUTH = process.env.AUTHID

const app = express();
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json());
app.use(cors());

// Credenciais do Twilio (mantenha seguras!)
const accountSid = SID
const authToken = AUTH
const client = twilio(accountSid, authToken);

app.get("/", (req, res) => {
    res.json({
        status: "API is working fine!",
        code: 200
    })
})

// Endpoint para enviar mensagens
app.post('/api/send-message', (req, res) => {
    const { message } = req.body;
    console.log("TESTE!!!! " + message)
    console.log("TESTE!!!! " + message)


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

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
