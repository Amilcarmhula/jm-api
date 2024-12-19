const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {sendWhatsAppMessage} = require('./swiperjs')


const app = express();
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json());
app.use(cors());


app.get("/teste", (req, res) => {
    res.json({
        status: "API is working fine!",
        code: 200
    })
})

// POST Endpoint
app.post("/send-message", (req, res) => {
    const { nome, numero, email, descricao } = req.body;
    const mensagem = { nome:nome, numero: numero, email: email, descricao: descricao }
    console.log(mensagem)
    sendWhatsAppMessage(JSON.stringify(mensagem)) 
    
    res.json({ nome:nome, numero: numero, email: email, descricao: descricao });
  });

// Endpoint para enviar mensagens
app.post('/send-messag', (req, res) => {
    const { message } = req.body;
    console.log(message)
});
 
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
