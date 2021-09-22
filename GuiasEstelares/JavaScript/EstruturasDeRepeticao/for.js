// For do inglês, 'Para';
// Break - para a execução do Loop;
// Continue - pula a execução do momento

// Exemplo 01 - Aumentando para o I menor que 10
for (let i = 0; i < 10; i++) {
  console.log(i)
}

// Exemplo 02 - Decrementando para o I = 100 até 0
for (let i = 100; i >= 0; i--) {
  console.log(i)
}

// Exemplo 03 - Decremento para o I = 100, mas fazendo um If para para quando chegar ao 50;
for (let i = 100; i >= 0; i--) {
  if (i === 50) {
    break
  }
  console.log(i)
}

// Exemplo 04 - Ele pula com o continue o que tem na condição e continua o loop;
for (let i = 10; i >= 0; i--) {
  if (i === 5) {
    continue
  }
  console.log(i)
}