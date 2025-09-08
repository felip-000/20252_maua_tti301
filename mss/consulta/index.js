const express = require('express')
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
    }
}
//POST /eventos
//Acionado pelo barramento de barramento. Recebe um evento e acessa a base para cadastrá-lo para consultas
app.post('/eventos', (req, res) => {
    funcoes[req.body.tipo](req.body.dados)
    res.status(200).send(baseConsulta)
})

//GET /lembretes
//Chamado pelo cliente, front end. Deve devolver a base toda consolidada
app.get('/lembretes', (req, res) => {
    res.status(200).send(baseConsulta)
})


const port = 6000
app.listen(port, () => console.log(`Consulta. Porta ${port}.`))