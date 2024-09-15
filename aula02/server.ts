// npm i express
// npm i -D @types/express @types/node

import express from 'express'
import Pessoa from './Pessoa'


const app = express()
const port = 3000

app.get('/pessoas',(req, res)=>{
    const pessoa1 = new Pessoa("Nome",20,["Programar"]);
    const pessoa2 = new Pessoa("Nome2",22,["a","b"]);
    const listaPessoas = [pessoa1,pessoa2];
    res.json(listaPessoas);
})

app.get('*', (req, res)=>{
    res.redirect("/pessoas");
})


app.listen(port,()=>{
    console.log(`API rodando em  http://localhost:${port}`);
    
})