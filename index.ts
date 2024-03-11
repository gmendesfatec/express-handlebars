import express from 'express'
import { engine } from 'express-handlebars'

const app = express()

app.engine("handlebars", engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")