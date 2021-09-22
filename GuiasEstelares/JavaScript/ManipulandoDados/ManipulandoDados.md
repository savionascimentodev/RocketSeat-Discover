#### Prototype

O JavaScript possui uma característica chamada **Prototype**, que é uma série de **funcionalidades** e **atributos** que já existem **nativamente** em diversos tipos de dados, que são lidados como objetos.

```javascript
console.log((10.0).__proto__)
```

---

#### Type Conversion X Type Coersion

Type conversion se trata de uma **conversão** de tipo feita **pelo dev**, explicitamente, e pode ser feita de diversas maneiras, por exemplo com o método Number(), já type **coersion** é **uma mudança de tipos** feita pelo **próprio JavaScript**, implicitamente, por exemplo quando você tenta somar um número na forma string com um número do tipo número.

```javascript
console.log(Number('10') + 5)
```

---

#### Strings em números

É possível transformar números em formato de string através do método **Number()** e números em formato number em string usando o método **String()**.

#### Contando caracteres e digitos

Para contar a quantidade de caracteres em uma string é possível usar o método **length()**, também é possível contar a quantidade de **algarismos** em um número **transformando** o número em string e usando o mesmo método.

#### Casas decimais

Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() colocando como argumento quantas casas decimais o número terá. Para mudar a formatação do número de separado por ponto para separado por vírgula é possível usar o método replace(".", ","). O resultado final será do tipo string, e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.

#### Maiusculas e Minúsculas

Para transformar uma string em letras maiúsculas pode-se usar o método **toUpperCase()**, e ao contrário, também é possível usar o **toLowerCase()** para transformar uma string em todas letras minúsculas.

#### Separando Strings

Para separar um texto por espaços, pode-se usar o método **split(" ")**, que transforma o texto em um **array de strings** baseado no argumento, que no caso são os **espaços**. Para juntar esse array é possível usar o método **join('")**, que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um **underscore** ( join("\_") ) as palavras são juntadas com o argumento de separador.

#### Encontrando palavras em frases

Para verificar se um texto possui uma palavra específica, podemos usar o método **includes()**, passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.
