const express = require("express")
const app = express();

app.use(express.json());

app.get('/hey-docker', (req, res) => {
    // res.send("Hello Docker!");
    res.status(200).json({mensagem: 'Hey, Docker!!!'})
});

const PORT = 5200;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})