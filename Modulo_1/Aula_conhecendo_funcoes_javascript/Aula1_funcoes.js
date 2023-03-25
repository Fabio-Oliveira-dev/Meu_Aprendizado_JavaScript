
function sayMyName(name){
    console.log('Yor name is: ' + name);
}
sayMyName('Fábio Oliveira Programador Js');




function quadrado(valor){
    return valor * valor;
}
let quadradoNumero = quadrado(10);
console.log(quadrado(10) + quadrado(10));




function incrementarJuros(valor, percentualJuros){
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorAcrescimo;
}
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));



/* Código Calculo IMC usando funções */
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}
function classificarImc(imc) {

    console.log('Me diga o seu peso e altura e confira abaixo se você esta dentro do peso ou se esta obeso.\n');

    if (imc < 18.5) {
        return 'Com esse peso você esta abaixo do peso. Vamos melhorar esse peso!';
    } else if (imc >= 18.5 && imc <= 25){
        return 'Com esse peso e essa altura você esta com o seu peso normal. Parabéns!';
    } else if (imc > 25 && imc <= 30){
        return 'Com esse peso você esta acima do peso. Vamos melhorar esse peso fazendo alguns exercícios fisicos!';
    } else if (imc > 30 && imc <= 40){
        return 'Com esse peso você esta obeso. Você precisa fazer um regime para não serios problemas de saúde!';
    } else {
        return 'Com esse peso você esta com obesidade grave!. Você precisa urgentemente procurar um médico!';
    }
}
function main() {
    let peso = 95;
    let altura = 1.45;
    let imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));

}

main();

