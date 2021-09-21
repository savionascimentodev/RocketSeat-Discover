//  Callback function

function myName(name) {
  console.log('antes de executar a função callback')
  name()

  console.log('depois de executar a callback')
}

myName(
  () => {
    console.log('estou em uma callback')
  }
)