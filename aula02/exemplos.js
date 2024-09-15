// const pessoa1 = {
//     nome: "Pessoa",
//     idade: 20,
//     hobbies: ["Jogar","assistir tv","programar"]
// }

// console.log(pessoa1.nome);


// const criarPessoa = (nome, idade, hobbies)=>{
//     return{
//         nome,
//         idade,
//         hobbies
//     }
// }

// const pessoa1 = criarPessoa("Nicolas", "19", ["a","b","c"]);

// console.log(JSON.stringify(pessoa1));
// const pessoaJson = JSON.parse('{"nome":"Nicolas","idade":"19","hobbies":["a","b","c"]}');
// console.log(pessoaJson);


class Pessoa {
    constructor (nome, idade, hobbies) {
        this.nome = nome;
        this.idade = idade;
        this.hobbies = hobbies;
        this.cpf = '';
    }

    apresentacao (){
        console.log(`olá meu nome é ${this.nome}`);
    }

    anoNascimento (){
        console.log((2024-this.idade));
    }
}

const pessoa1 = new Pessoa("Pessoa1", 20, ["a","b","c"]);

console.log(pessoa1);

console.log(pessoa1.apresentacao());
console.log(pessoa1.anoNascimento());