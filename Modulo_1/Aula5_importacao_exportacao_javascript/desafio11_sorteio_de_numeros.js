/* Em uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 a 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saída
98 */

const { gets, print } = require('./desafio11_funcoes_do_desafio');

let maiorValorEncontrado = 0;

for(i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);
