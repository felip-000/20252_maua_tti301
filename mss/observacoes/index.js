const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const {v4: uuidv4} = require('uuid');
const axios = require("axios");
const observacoesPorLembreteId = {};

const funcoes = {
    ObservacaoClassificada: (observacao) => {
        const observacoes = observacoesPorLembreteId[observacao.lembreteId];
        const obsParaAtualizar = observacoes.find(o => o.id === observacao.id)
        obsParaAtualizar.status = observacao.status;
        axios.post('http://barramento-de-eventos-service:10000/eventos', {
            tipo: "ObservacaoAtualizada",
            dados: {
                id: observacao.id,
                texto: observacao.texto,
                lembreteId: observacao.lembreteId,
                status: observacao.status
            }
        });
    }
}

//id é placeholder
app.post('/lembretes/:id/observacoes', async (req,res) => {
    const idObs = uuidv4();
    const { texto } = req.body;
    const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || [];
    observacoesDoLembrete.push({id: idObs, texto, status: "Aguardando"});
    observacoesPorLembreteId[req.params.id] = observacoesDoLembrete;



    await axios.post('http://barramento-de-eventos-service:10000/eventos', {
        tipo: "ObservacaoCriada",
        dados: {
            id: idObs, texto, lembreteId: req.params.id, status: "Aguardando"
        }
    })
    res.status(201).send(observacoesDoLembrete);
});

//Tratamento da comunicação com o barramento
app.post("/eventos", (req, res) => {
    try{
        funcoes[req.body.tipo](req.body.dados);
    }
    catch (err){}
    res.status(200).send({ msg: "ok" });
});

app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembreteId[req.params.id] || []);
});

const port = 5000;
app.listen(port, () => {
    console.log(`Lembretes. Porta ${port}.`);
});
    