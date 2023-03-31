// Crie um programa que dado um número imprima sua tabuada.

class Tabuada {
    numero = 5;
    

    constructor(numero) {
        this.numero = numero;
    }

    calculoTabuada() {
        for (let i = 1; i <= 10; i++) {
            console.log(i * this.numero);
        
        }
    }
}

let tabuada = new Tabuada(5);
return (tabuada.calculoTabuada());

