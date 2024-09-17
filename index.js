import express from "express";

const App = express();

App.get("/", (req, res) => res.send("Hola como estan"));

App.listen(3000);
