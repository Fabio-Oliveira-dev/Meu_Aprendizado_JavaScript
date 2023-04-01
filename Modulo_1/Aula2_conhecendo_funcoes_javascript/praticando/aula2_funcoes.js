function escreverNome(nome) {
    return 'Meu nome é ' + nome;
}


function maiorIdade(idade) {
    if (idade >= 18) {
        console.log(escreverNome('Fábio Oliveira') + ' Você é maior de idade!.');
    } else {
        console.log(' Você é menor de idade.');
    }
}

maiorIdade(18);