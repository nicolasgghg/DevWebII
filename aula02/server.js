"use strict";
// npm i express
// npm i -D @types/express @types/node
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/pessoas', (req, res) => {
    const pessoa1 = new Pessoa_1.default("Nome", 20, ["Programar"]);
    const pessoa2 = new Pessoa_1.default("Nome2", 22, ["a", "b"]);
    const listaPessoas = [pessoa1, pessoa2];
    res.json(listaPessoas);
});
app.get('*', (req, res) => {
    res.redirect("/pessoas");
});
app.listen(port, () => {
    console.log(`API rodando em  http://localhost:${port}`);
});
