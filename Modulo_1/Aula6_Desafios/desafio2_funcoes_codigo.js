
let numeros = [5, 20, 3, 4, 1, 10, 8];
i = 0;

function gets(){
    let valor = numeros[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}
module.exports = {gets, print};

