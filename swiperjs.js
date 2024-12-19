const accountSid = 'ACa42b20046dbeb313e32e37359fdb1cf7';
const authToken = '554a6babd563fd5915cc2472dede86f4';

// Create a Twilio client
const client = require('twilio')(accountSid, authToken);


function sendWhatsAppMessage(mensagem) {
    client.messages
    .create({
        from: 'whatsapp:+14155238886', // Número do WhatsApp do Twilio
        body: mensagem, //'Sua consulta está agendada para 12/1 às 15h.', // Conteúdo da mensagem
        to: 'whatsapp:+258847100793' // Número do destinatário
    })
    .then(message => console.log(`Mensagem enviada com SID: ${message.sid}`))
    .catch(error => console.error(`Falha ao enviar a mensagem: ${error.message}`));
}

module.exports = { sendWhatsAppMessage }; // Exporta a função
