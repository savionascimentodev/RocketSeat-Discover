// For...in

let person = {
  name: 'Sávio',
  age: 19,
  weight: 75.5
}

for (let property in person) {
  console.log(property)
  console.log(person[property])
}