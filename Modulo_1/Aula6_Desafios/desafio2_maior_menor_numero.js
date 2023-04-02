
const { gets, print } = require('./desafio2_funcoes_codigo');

let maiorNumeroPar = null;
let menorNumeroImpar = null;
const numeros = gets();

for (let i = 0; i < numeros; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        if (maiorNumeroPar === null || numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }

}

print('O maior número: ' + maiorNumeroPar);
print('O menor número: ' + menorNumeroImpar);
