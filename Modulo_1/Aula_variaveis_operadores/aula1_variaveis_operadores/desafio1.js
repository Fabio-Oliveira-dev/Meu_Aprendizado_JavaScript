/* Desafio: Faça um programa para calcular o valor gasto de combustível em uma viajem. Você terar que declarar 3 variáveis para resolver o problema, sendo: 
1 – Preço do combustível x reais.
2 – Gasto médio de combustível do carro por KM x litros/km.
3 – Distância em KM da viajem x km.
Imprima o valor que será gasto para realizar a viajem. */

const PRECO_COMBUSTIVEL = 5.79;
const CONSUMO_KM = 1;
let distancia_km = 100;


let consumo_total_litros = distancia_km / CONSUMO_KM;
let total_gasto_reais = consumo_total_litros * PRECO_COMBUSTIVEL;

console.log('O valor gasto para realizar a viajem de', distancia_km, 'foi de R$', total_gasto_reais, 'Reais!');