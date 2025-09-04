const axios = require("axios");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const lembretes = {};
contador = 0;

//para obter todos os lembretes
//GET /lembretes
app.get('/lembretes', (req, res) => {
    res.send(lembretes);
})

//para cadastrar como lembretes
//POST /lembretes ("texto": "Fazer café")
app.post('/lembretes', async (req, res) => {
    contador++;
    const { texto } = req.body;
    lembretes[contador] = {
        contador, texto
    };
    await axios.post("http://localhost:10000/eventos", {
        tipo: "LembreteCriado",
        dados: {
            contador,
            texto,
        },
    });
    res.status(201).send(lembretes[contador]);
})
const port = 4000
app.listen(port, () => {
    console.log(`Lembretes. Porta ${port}.`)
})