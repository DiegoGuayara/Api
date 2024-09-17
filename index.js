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

App.get('/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).send('Usuario no encontrado');
    res.json(usuario);
  });


App.listen(3000);
