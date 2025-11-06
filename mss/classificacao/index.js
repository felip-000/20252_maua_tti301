const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());
const palavraChave = "importante";

const funcoes = {
    ObservacaoCriada: (observacao) => {
        observacao.status = observacao.texto.includes(palavraChave) ? "importante" : "comum";
        axios.post("http://barramento-de-eventos-service:10000/eventos", {
            tipo: "ObservacaoClassificada",
            dados: observacao, 
        });
    },
}

app.post("/eventos", (req, res) => {
    try {
        funcoes[req.body.tipo](req.body.dados);
    } catch (err) {}
    res.status(200).send({ msg: "ok" });
});

const port = 7000;
app.listen(port, async () => {
    console.log(`Classificação rodando na porta ${port}`);
    const resp = await axios.get('http://barramento-de-eventos-service:10000/eventos')
    resp.data.forEach((valor, indice, colecao) => {
        try{
            funcoes[valor.tipo](valor.dados)
        }
        catch(err){}
    });
})