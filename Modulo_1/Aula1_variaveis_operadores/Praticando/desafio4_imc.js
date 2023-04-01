/* O IMC - Indice de massa corporal é um criterio da organização mundial de saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formulado IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e altura de um adulto moatre sua condição de acordo com a tabela abaixo:

IMC em adultos, condição:
 - Abaixo de 18.5 abaixo do peso;
 - Entre 18.5 e 25 peso normal;
 - Entre 25 e 30 acima do peso;
 - Entre 30 e 40 obeso;
 - Acima de 40 obesidade grave. */

let peso = 50;
let altura = 1.60;
imc = peso / (altura * altura);

console.log('Me diga o seu peso e altura e confira abaixo se você esta dentro do peso ou se esta obeso.\n');

if (imc < 18.5){
    console.log('Com esse peso', peso, 'kg e essa', altura, 'cm, você esta abaixo do peso. Vamos melhorar esse peso!');
} else if (imc >= 18.5 && imc <= 25){
    console.log('Com esse peso', peso.toFixed(2), 'kg e essa altura', altura.toFixed(2), 'cm, você esta com o seu peso normal. Parabéns!');
} else if (imc > 25 && imc <= 30){
    console.log('Com esse peso', peso.toFixed(2), 'kg e essa altura', altura.toFixed(2), 'cm, você esta acima do peso. Vamos melhorar esse peso fazendo alguns exercícios fisicos!');
} else if (imc > 30 && imc <= 40){
    console.log('Com esse peso', peso.toFixed(2), 'kg e essa altura', altura.toFixed(2), 'cm, você esta obeso. Você precisa fazer um regime para não serios problemas de saúde!');
} else {
    console.log('Com esse peso', peso.toFixed(2), 'kg e essa altura', altura.toFixed(2), 'cm, você esta com obesidade grave!. Você precisa urgentemente procurar um médico!');
}