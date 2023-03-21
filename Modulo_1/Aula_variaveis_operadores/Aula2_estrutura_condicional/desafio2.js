/* Desafio: Faça um programa para calcular o valor de uma viajem.
Você terá cinco variáveis, sendo ela:
1 – Preço do etanol;
2 – Preço da gasolina;
3 – Tipo de combustível que está no seu carro;
4 – Gasto médio do combustível do seu carro por KM
5 – Distância em KM da viajem.

Imprima no console o valor que será gasto para realizar esta viajem.
*/

let preco_etanol = 5.04;
let preco_gasolina = 5.79;
let tipo_combustivel = 'Etanol';
let gasto_medio_km = 10;
let distancia_km = 100;
let total_gasto_etanol = distancia_km / gasto_medio_km * preco_etanol;
let total_gasto_gasolina = distancia_km / gasto_medio_km * preco_gasolina;

if(tipo_combustivel === 'Gasolina'){
    console.log('Para uma viajem de', distancia_km, 'km,', 'usando o combustível', tipo_combustivel, 'você gastara o valor de R$', total_gasto_etanol.toFixed(2), 'reais.');
} else {
    console.log('Para uma viajem de', distancia_km, 'km,', 'usando o combustível', tipo_combustivel, 'você gastara o valor de R$', total_gasto_gasolina.toFixed(2), 'reais.');
}
