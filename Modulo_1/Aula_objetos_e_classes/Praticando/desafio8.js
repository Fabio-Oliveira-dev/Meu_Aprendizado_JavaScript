/* 
__Desafio__
Crie uma classe para representar pessoa.
Para cada pessoa teremos os atributos:
1 - Nome;
2 - Peso;
3 - Altura.

As pessoas devem ter a capacidade de dizer o valor d seu IMC (imc = peso / (altura * altura));
Instancie uma pessoa chamada Jose que tenha o peso de 70kg e 1,75 de altura e peça ao Jose para dizer o valor do seu IMC. */

class Pessoa {
    nome;
    peso;
    altura;
    

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        let imc = this.imc();
        if (imc < 18.5){
            return ('Abaixo do peso. Vamos melhorar esse peso!');
        } else if (imc >= 18.5 && imc <= 25){
            return ('Peso normal. Parabéns!');
        } else if (imc > 25 && imc <= 30){
            return ('Acima do peso. Vamos melhorar esse peso!');
        } else if (imc > 30 && imc <= 40){
            return ('Você esta obeso. Você precisa fazer um regime!');
        } else {
            return ('Você esta com obesidade grave!. Você precisa urgentemente procurar um médico!');
        }

    }
}

let fabio = new Pessoa('Fabio', 70, 1.55);
console.log(fabio.classificarImc());

