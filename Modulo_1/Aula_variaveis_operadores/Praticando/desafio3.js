/* Desafio3: Faça um algoritmo que dada as três notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
Media = (nota1 + nota2 + nota3) /3
Classificação:
1 – Media menor que 5 reprovado;
2 – media entre 5 e 7 recuperação;
3 – media acima de 7, passou de semestre.
 */

let js = 4;
let python = 6.5;
let php = 4;
media  = (js + python + php) / 3;

if(media <= 5){
    console.log('O aluno tirou a nota', media.toFixed(2), 'e infelizmente foi reprovado nesse semestre!');
} else if(media <= 7) {
        console.log('O aluno tirou a nota', media.toFixed(2), 'e infelizmente esta de recuperação nesse semestre!');  
    } else {
    console.log('O aluno tirou a nota', media.toFixed(2), 'e foi aprovado no semestre! Parabéns !!!!!');
}

