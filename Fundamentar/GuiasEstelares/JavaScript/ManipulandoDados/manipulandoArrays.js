// Manipulando Arrays

let techs = ['html', 'css', 'js']

// Adicionar um item no fim;
techs.push('VueJs');

// Adicionar no começo;
techs.unshift('algoritmos');

// Remover do fim
techs.pop()

// Remover do começo;
techs.shift()

// Pegar somente alguns elementos do array;
// console.log(techs.slice(1, 3))

// Remover 1 ou mais items em qualquer posição do array;
// techs.splice(1, 2)

// Encontrar a posição de um elemento no array;
let index = techs.indexOf('css')
techs.splice(index, 1) // Busca e já remove o elemento;

console.log(index)