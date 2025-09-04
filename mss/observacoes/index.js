const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const {v4: uuidv4} = require('uuid');
const axios = require("axios");
const observacoesPorLembreteId = {};


//id é placeholder
app.post('/lembretes/:id/observacoes', async (req,res) => {
    const idObs = uuidv4();
    const texto = req.body;
    const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || [];
    observacoesDoLembrete.push({id: idObs, texto});
    observacoesPorLembreteId[req.params.id] = observacoesDoLembrete;
    await axios.post('http://localhost:10000/eventos', {
        tipo: "ObservacaoCriada",
        dados: {
            id: idObs, texto, lembreteId: req.params.id
        }
    })
    res.status(201).send(observacoesDoLembrete);
});

//Tratamento da comunicação com o barramento
app.post("/eventos", (req, res) => {
    console.log(req.body);
    res.status(200).send({ msg: "ok" });
});

app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembreteId[req.params.id] || []);
});

const port = 5000;
app.listen(port, () => {
    console.log(`Lembretes. Porta ${port}.`);
});
    