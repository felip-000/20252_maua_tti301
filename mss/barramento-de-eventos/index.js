const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const eventos = []

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    eventos.push(evento)
    //enviar pro mss de lembretes
    axios.post('http://lembretes-clusterip-service:4000/eventos', evento).catch((err) => {})
    //enviar pro mss de observacoes
    axios.post('http://observacoes-clusterip-service:5000/eventos', evento).catch((err) => {})
    //enviar pro mss de consulta
    axios.post('http://consulta-clusterip-service:6000/eventos', evento).catch((err) => {})
    //enviar pro mss de classificação
    axios.post("http://classificacao-clusterip-service:7000/eventos", evento).catch((err) => {})
    res.status(200).send({msg: 'ok'})
})

//endpoint que devolve a lista de eventos potencialmente perdidos
app.get('/eventos', (req, res) => {
    res.json(eventos)
})

const port = 10000
app.listen(port, () => console.log(`Barramento. Porta ${port}.`))