// Função anonima | function anonymous
// Função expressa | function expression 


// Parâmetros (parameters)
const sum = function (number1, number2) {
  total = number1 + number2
  return total
}

let number11 = 34
let number22 = 35

sum(number11, number22) // Argumentos (arguments)

console.log(`O número 1 é ${number11}`)
console.log(`O número 2 é ${number22}`)
console.log(`A soma é ${sum(number11, number22)}`)