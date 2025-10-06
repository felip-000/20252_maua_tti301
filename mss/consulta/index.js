const express = require('express')
const axios = require("axios");
const app = express()
app.use(express.json())

const baseConsulta = {}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.contador] = lembrete;
    },
    ObservacaoCriada: (observacao) => {
        const observacoes = baseConsulta[observacao.lembreteId]['observacoes'] || []
        observacoes.push(observacao)
        baseConsulta[observacao.lembreteId]['observacoes'] = observacoes
    },
    ObservacaoAtualizada: (observacao) => {
        const observacoes = baseConsulta[observacao.lembreteId]["observacoes"];
        const indice = observacoes.findIndex((o) => o.id === observacao.id);
        observacoes[indice] = observacao;
    },
        
}
//POST /eventos
//Acionado pelo barramento de barramento. Recebe um evento e acessa a base para cadastrá-lo para consultas
app.post("/eventos", (req, res) => {
    try {
        funcoes[req.body.tipo](req.body.dados);
    } catch (err) {}
    res.status(200).send(baseConsulta);
});

//GET /lembretes
//Chamado pelo cliente, front end. Deve devolver a base toda consolidada
app.get('/lembretes', (req, res) => {
    res.status(200).send(baseConsulta)
})


const port = 6000
app.listen(port, async () => {
    console.log(`Consulta. Porta ${port}.`)
    const resp = await axios.get('http://localhost:10000/eventos')
    resp.data.forEach((valor, indice, colecao) => {
        try{
            funcoes[valor.tipo](valor.dados)
        }
        catch(err){}
    });
    
})