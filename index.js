import express from "express";
const App = express();

App.use(express.json())

let usuarios = [
    {id:1, nombre:'Diana'},
    {id:2, nombre:'Carlos'},
    {id:3, nombre:'Ana'}
]

App.get('/usuarios', (req, res) => {
    res.json(usuarios)
})

App.listen(3000);
