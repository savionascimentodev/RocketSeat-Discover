/*
  Function() constructor

  Expressão new;
  Criar um novo objeto;
  This keyword
*/

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + " está andando"
  }
}

const savio = new Person("Sávio")
const jonas = new Person("Jonas")
console.log(savio.walk())
console.log(jonas.walk())