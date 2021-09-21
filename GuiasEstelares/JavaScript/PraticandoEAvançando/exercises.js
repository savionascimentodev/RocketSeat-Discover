// 1 - Declare uma variável de nome weight;
// const star
// 2 - Que tipo de dado é a variável acima?
console.log(typeof star)
undefined

/* 3 - Declare uma variável e atribua valores para cada um dos dados:
  name: String
  age: Number (integer)
  stars: Number (float)
  isHuman: Boolean
*/
let name = 'Sávio'
let age = 18
let stars = 5.5
const isHuman = true

/* 4 - A variável student abaixo é de que tipo de dado?

 4.1 - Atribua a ela as mesmas propriedades e valores do exercicio 3;

 4.2 - Mostre no console a seguinte mensagem:
 <name>de idade <age> pesa <weight> pelos calores de cada propriedade do objeto.
 */

let student = {
  name: 'Sávio',
  age: 19,
  weight: 94.5,
  isHuman: true,
}
console.log(student)

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/* 5 - Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, somente o array vazio.
*/
let frutas = []

/* 6 - Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4, não copiar e colar o objeto mas usar o objeto criado e inserir ele no array. */

let students = [
  student
]

//  7 - Coloque no console o valor da posição zero do array acima.
console.log(students[0])

// 8 - Crie um novo student e coloque na posição 1 do Array students
const studentTwo = {
  name: 'Jonas',
  age: 20,
  weight: 55.5,
  isHuman: true,
}

let students = [
  student,
  studentTwo
]

console.log(students[1])

/* 9 - Sem rodar o código reponda qual é a reposta do código abaixo e porque? Após a resposta, rode o código e veja o resultado */

console.log(a)
var a = 1

// Vai imprimir um UNDEFINED por que ela ainda não foi criada, vai fazer o hoisting;