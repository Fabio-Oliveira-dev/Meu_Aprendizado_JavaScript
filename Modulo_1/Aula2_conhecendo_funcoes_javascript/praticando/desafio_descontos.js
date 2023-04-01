function menu() {
    console.log('=== MENU DE OPÇÕES === \n');
    console.log('1 = Debito, 10% de desconto');
    console.log('2 = Dinheiro ou Pix, 15% de desconto');
    console.log('3 = Duas vezes, preço normal e sem juros');
    console.log('4 = Acima de duas vezes, com juros de 10% \n');
}

function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
    
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}

function main() {
    let valor_produto = 100;
    let pagamento = 4;

    if(pagamento === 1){
        console.log('O pagamento foi efetuado!. Com esse pagamento você pagará R$',aplicarDesconto(valor_produto, 10),'reais com 10% de desconto!.');
    } else if (pagamento === 2){
        console.log('O pagamento foi efetuado!. Com esse pagamento você pagará R$', aplicarDesconto(valor_produto, 15), 'reais com 15% de desconto!.');
    } else if(pagamento === 3){
        console.log('O pagamento foi efetuado!. Com esse pagamento você pagará R$', valor_produto, 'reais e sem juros!.');
    } else {
        console.log('O pagamento foi efetuado!. Com esse pagamento você pagará R$',aplicarJuros(valor_produto, 10), 'reais com 10% de juros!.');
    }
}

menu();

