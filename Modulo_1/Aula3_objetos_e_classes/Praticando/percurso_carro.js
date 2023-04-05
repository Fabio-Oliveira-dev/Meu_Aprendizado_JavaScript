
/* 
__Desafio__
Crie uma classe para representar carros.

Os carros possuem:
1 - Marca;
2 - Cor;
3 - Gasto médio de combustível por km;

Crie um metodo que dado a quantidade de quilometros e o preço do combustível nos dê o valor gasto em reais para realizar o percurso. */


class Carro {
    marca;
    cor;
    
    constructor(marca, cor, calculoCombustivel_km) {
        this.marca = marca;
        this.cor = cor;
        this.calculoCombustivel_km = calculoCombustivel_km;
    }

    calculoGastoViagem(precoCombustivel, percursoKm) {
        return percursoKm * this.calculoCombustivel_km * precoCombustivel;
    }
}

let Celta = new Carro('checrolet', 'vermelho', 1 / 10);
let Palio = new Carro('Fiat', 'Preto', 1 / 10);
console.log(Celta.calculoGastoViagem(100,4.70).toFixed(2));
console.log(Celta.calculoGastoViagem(70,5).toFixed(2));

