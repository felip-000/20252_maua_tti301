const express = require("express");
const app = express();
app.use(express.json());
const palavraChave = "importante";

const funcoes = {
    observacaoCriada: (observacao) => {
        observacao.status = observacao.texto.includes(palavraChave) ? "importante" : "comum";
        axios.post("http://localhost:10000/eventos", {
            tipo: "ObservacaoClassificada",
            dados: observacao, 
        });
    }
}

app.post("/eventos", (req, res) => {
    try {
        funcoes[req.body.tipo](req.body.dados);
    } catch (err) {}
    res.status(200).send({ msg: "ok" });
});

app.listen(7000, () => {
    console.log("Classificação rodando na porta 7000")
})