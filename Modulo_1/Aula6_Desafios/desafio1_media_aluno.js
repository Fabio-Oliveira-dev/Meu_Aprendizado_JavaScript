/*Faça um programa que receba a média de um aluno.
- Media < 5 'reprovado';
- Media >= 5 e < 7 'recuperação';
- Media => 7 'aprovado'.

Exemplo:
Entrada
5.5

Saída
recuperação*/

const { gets, print } = require('./desafio1_funcoes_codigo')
let media = gets();

if (media < 5) {
    print('Reprovado');
} else if (media >= 5 && media < 7) {
    print('Recuperação');
} else {
    print('Aprovado');
}

