
// Objetos
// let pessoa = {
//     nome: 'Fabio Oliveira',
//     profisao: 'Programador Js',
//     idade: 30,

//     descrever: function() {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// };

// let atributo = 'idade';
// console.log(pessoa['nome']);


// Classes
// class Pessoa {
//     nome;
//     idade;
//     profissao;
//     anoNascimento;

//     constructor(nome, idade, profissao) {
//         this.nome = nome;
//         this.idade = idade;
//         this.anoNascimento = 2023 - idade;
//         this.profissao = profissao
//     }

//     // descrever() {
//     //     console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} e a profissão é ${this.profissao}`);
//     // }
// };

// let fabio = new Pessoa('Fabio Oliveira da Silva', 31, 'Desenvolvedor Full-Stack');
// fabio.nome = 'Fábio Oliveira';
// fabio.idade = 30;
// fabio.profissao = 'Programador Full-Stack'


// let ivone = new Pessoa('Ivone Marinho Silva', 40, 'Domestica');
// ivone.nome = 'Ivone Marinho';
// ivone.idade = 45;
// ivone.profissao = 'Domestica'

// console.log(ivone);
// console.log(fabio);

// ivone.descrever();
// fabio.descrever();

// console.log(fabio);
// console.log(ivone);



class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade;
    }
}

function compararPessoas(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

let fabio = new Pessoa('Fabio Silva', 31);
let rodrigo = new Pessoa('Rodrigo Nuyens', 36);

compararPessoas(fabio, rodrigo);

