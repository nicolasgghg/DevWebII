// npm init -y
// npm i -D typescript
// npx tsc --init

export default class Pessoa{
    nome:string;
    idade:number;
    hobbies:string[];

    constructor(nome:string,idade:number,hobbies:string[]){
        this.nome = nome;
        this.idade = idade;
        this.hobbies = hobbies;
    };
}

// npx tsc 