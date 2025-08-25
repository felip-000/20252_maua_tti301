const express = require('express')
const app = express()

//para obter todos os lembretes
//GET /lembretes
app.get('/lembretes', (req, res) => {

})

//para cadastrar como lembretes
//POST /lembretes ("texto": "Fazer café")
app.post('/lembretes', (req, res) => {

})
const port = 4000
app.listen(port, () => {
    console.log(`Lembretes. Porta ${port}.`)
})