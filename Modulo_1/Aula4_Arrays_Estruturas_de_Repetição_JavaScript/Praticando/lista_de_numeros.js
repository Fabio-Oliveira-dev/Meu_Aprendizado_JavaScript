/* Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado.*/

let numeros = [25, 30, 45, 78, 6, 6, 85, 96, 93, 1000];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if(numero % 2 === 0) {
        console.log('É par o: ', numero);
    }
    
}

console.log('da sua lista!');

