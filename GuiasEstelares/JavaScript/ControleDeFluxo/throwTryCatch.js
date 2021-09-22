// Throw

function sayMyName(name = '') {
  if (name === '') {
    throw ('Nome é obrigatório')
  }
}

// Try...catch
try {
  sayMyName()
} catch (e) {
  console.log(e)
}

console.log('após o try/catch')
