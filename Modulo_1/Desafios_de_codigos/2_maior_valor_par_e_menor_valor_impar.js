const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++) {
  const numero = parseInt(gets());

  if (numero % 2 == 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  }
  // TODO: Criar a condição e regras para identificar também o "menorNumeroImpar".
}

print('Maior número par: ' + maiorNumeroPar);
print('Menor número impar: ' + menorNumeroImpar);
// TODO: Imprima as saídas conforme o enunciado deste desafio.