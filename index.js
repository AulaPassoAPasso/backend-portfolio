const express = require("express");
const cors = require("cors");
const Controller = require("./controller/controller");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/", Controller.get);
app.post("/", Controller.post);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})
