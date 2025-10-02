const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

app.post('/eventos', (req, res) => {
    const evento = req.body
    //enviar pro mss de lembretes
    axios.post('http://localhost:4000/eventos', evento)
    //enviar pro mss de observacoes
    axios.post('http://localhost:5000/eventos', evento)
    //enviar pro mss de consulta
    axios.post('http://localhost:6000/eventos', evento)
    //enviar pro mss de classificação
    axios.post("http://localhost:7000/eventos", evento);
    res.status(200).send({msg: 'ok'})
})
const port = 10000
app.listen(port, () => console.log(`Barramento. Porta ${port}.`))