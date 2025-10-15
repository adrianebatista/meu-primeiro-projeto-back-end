const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Adriane Batista",
        imagem: "",
        minibio: "Contadora"
    },
    {
        nome: "Sônia Ribeiro",
        imagem: "",
        minibio: "Salgadeira"
    }
]
function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)
