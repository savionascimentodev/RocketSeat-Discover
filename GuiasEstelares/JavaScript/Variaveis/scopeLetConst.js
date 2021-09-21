// Const e Let são locais e só funcionam no escopo onde foi criada

let idade = 40 // Global

{
  let idade = 20 // Escopo
  console.log('> existe idade?', idade)
}

console.log('> existe idade depois do bloco?', idade)
// Escopo global

const carro = 'Pálio' // Global

{
  const carro = 'Uno' // Escopo
  console.log('> existe carro?', carro)
}

console.log('> existe idade depois do bloco?', carro)
