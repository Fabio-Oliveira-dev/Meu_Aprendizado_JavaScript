/* Desafio5: Elabora um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o calculo adequado.

código condição de pagamento:
1 - À vista debito, recebe 10% de desconto;
2 - À vista no dinheiro ou pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
 */
console.log('=== MENU DE OPÇÕES ===');
console.log('1 = Debito, 10% de desconto');
console.log('2 - Dinheiro ou Pix, 15% de desconto');
console.log('3 - Duas vezes, preço normal e sem juros');
console.log('4 - Acima de duas vezes, com juros de 10% \n');

valor_produto = 100;
let pagamento = 4;


if(pagamento === 1){
    console.log('O pagamento foi efetuado!. Com esse pagamento você pagará R$',valor_produto - (valor_produto * 0.1),'reais com 10% de desconto!.');
} else if (pagamento === 2){
     console.log('O pagamento foi efetuado!. Com esse pagamento você pagará R$', valor_produto - (valor_produto * 0.15), 'reais com 15% de desconto!.');
} else if(pagamento === 3){
     console.log('O pagamento foi efetuado!. Com esse pagamento você pagará R$', valor_produto, 'reais e sem juros!.');
} else {
     console.log('O pagamento foi efetuado!. Com esse pagamento você pagará R$',valor_produto + (valor_produto * 0.1), 'reais com 10% de juros!.');
}