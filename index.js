import express from "express";

const App = express();

App.get("/", (req, res) => res.send("Hola"));

App.listen(3000);
