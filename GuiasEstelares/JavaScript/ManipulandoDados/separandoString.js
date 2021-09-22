// Manipulando Strings e Números;

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _;

let text = "Eu vou ser o rei dos piratas!"

let textArray = text.split(" ")
let textUnderscore = textArray.join("_")
console.log(textUnderscore)