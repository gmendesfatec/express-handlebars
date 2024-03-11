import express from 'express'
import { engine } from 'express-handlebars'

// Express app
const app = express();

// Define arquivo .handlebars que será renderizado primeir
// Então, nesse caso, será ./views/layouts/main.handlebars
app.engine("handlebars", engine({defaultLayout: "main"}));

// Definindo o handlebars como view engine
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
    res.render("primeira_pagina");
})

app.listen(3000, () => {
    console.log("Rodando na porta 3000")
})