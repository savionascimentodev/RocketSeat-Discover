#### Controle de Fluxo da Aplicação

O fluxo padrão vai linha a linha executando todas as linhas, mas se pode alterar isso com os **controles de fluxos**.

---

#### If e Else

Vamos falar sobre o if e o else, que ajudam nossa aplicação a tomar diferentes caminhos, ou seja, **alteram** o **fluxo da nossa aplicação**.

Sua sintaxe é simples, como pode ver a seguir:

```javascript
if (condição) {
  //apenas será executado o bloco de código caso condição seja true
} else {
  // apenas será executado o bloco de código caso condição do if seja false
}
```

---

#### Switch

Existe uma declaração chamada switch, que tem um papel muito similar ao if e ao else if, vistos na anteriormente, porém a estrutura é bem diferente, e aqui veremos essa estrutura:

```javascript
let expression = ''

// puxa a expressão para o switch
switch (expression) {
  case 'a': // confere se o valor da expressão é o correto
    console.log('a')
    break // para a execução do switch apenas se verdadeiro
  case 'b':
    console.log('b')
    break
  default:
    // caso nenhum valor seja o correto, realizará o default
    console.log('default')
    break
}
```

#### Throw e Try/Catch

**Throw** em inglês significa lançar, disparar, **catch** quer dizer pegar e **try** tentar.

Isso significa que vamos **tentar executar** um bloco de código, e se der algum **erro**, será disparado e **capturado** na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.

```javascript
function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }

  console.log(name)
}
```

Nesse caso, se o nome vier **vazio**, será **disparada** uma **mensagem**.

Precisamos agora usar o **try/catch** para **capturarmos** esse **erro**, caso contrário, ele irá **encerrar toda a aplicação**, e o faremos da seguinte maneira:

```javascript
try {
  sayMyName()
} catch (e) {
  console.log(e)
}

console.log('após ao try/catch')
```

O try irá **executar** a função, enquanto o catch vai **capturar** o erro e **atribuir** à variável, que só existe **dentro do catch**. Após isso, mesmo com o erro, nossa aplicação **não será interrompida** por completo.
