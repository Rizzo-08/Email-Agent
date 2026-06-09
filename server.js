require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('.'));

const GROQ_API_KEY = process.env.GROQ_API_KEY;

app.post('/generate', async (req, res) => {
    const { message } = req.body;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            max_tokens: 1000,
            messages: [
                {
                    role: 'user',
                    content: `Sei un assistente che scrive email professionali in italiano. 
                    L'utente vuole comunicare questo: "${message}".
                    Scrivi un'email professionale completa con oggetto, corpo e saluti.
                    Rispondi solo con l'email, niente altro.`
                }
            ]
        })
    });

    const data = await response.json();
    console.log('Risposta Groq:', JSON.stringify(data));
    const email = data.choices?.[0]?.message?.content || 'Errore';
    res.json({ email });
});

app.listen(3000, () => {
    console.log('Email Agent attivo su http://localhost:3000');
});