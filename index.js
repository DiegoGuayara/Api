import express from "express";
const app = express()
const port = 3000
app.use(express.json())

let usuarios = [
    {id:1 , nombre: 'ana' , edad : 21},
    {id:2 , nombre: 'laura', edad: 18}
]

let miembros = [
    {id:1 , nombre:'Samuel Andres Marín'},
    {id:2 , nombre:'Diego Fernando Guayara'}
]

app.get("/usuarios" , (req,res) =>{
    res.json(usuarios)
})
app.get('/usuarios/:id',(req,res) =>{
    const verificar = parseInt(req.params.id)
    const verificar2 = usuarios.find(u => u.id === verificar)
    return verificar2 ? res.json(verificar2) :  res.status(404).send('Usuario no encontrado')
})
app.post('/usuarios',(req,res) =>{
    const nuevoUsuario = req.body
    nuevoUsuario.id = usuarios.length ? Math.max(...usuarios.map(u => u.id)) + 1 : 1
    usuarios.push(nuevoUsuario)
    res.status(201).send(JSON.stringify(nuevoUsuario))
})
app.put('/usuarios/:id',(req,res) =>{
    const nuevo = parseInt(req.params.id)
    const cuerpo = req.body
    let user = usuarios.find(u => u.id === nuevo)
    if(user){
        user.nombre = cuerpo.nombre
        res.json(user)
    }else{
        res.status(404).send('Usuario no encontrado')
    }
})
app.get('/miembros', (req, res) => {
    res.json(miembros)
})
app.listen(port,() =>{console.log("escuchando en el puerto 3000")})