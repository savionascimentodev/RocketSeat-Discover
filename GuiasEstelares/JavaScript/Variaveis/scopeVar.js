// Var é global e, também local
// Hoisting (Elevação)

console.log('> existe nome antes do bloco?', nome)

{
  var nome = 'Savio'
  console.log(nome)
}

console.log('> existe nome depois do bloco?', nome)
