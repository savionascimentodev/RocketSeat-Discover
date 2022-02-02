#### Conhecendo as variáveis

Para entender variáveis podemos pensar nelas como nomes simbólicos para algum valor, atalhos de código ou identificadores. Para criar uma variável, podemos usar uma das palavras reservadas: **var, let e const**, por exemplo: var clima = "quente", onde var é a palavra que simboliza a criação da variável, clima é o nome da variável, o sinal de igual denota que a variável está recebendo um valor e "quente" é a string que está sendo recebida. As variáveis declaradas com "var" e "let" podem ter seu valor mudado, já a const não.

- Nomes simbólicos para receber algum valor
- Indentificadores
- Atalhos de código
- 3 palavras reservadas para criar uma variável
  - **Var**
  - **Let**
  - **Const**

---

#### Tipos dinâmicos

O JavaScript é uma linguagem **fracamente tipada e dinâmica**, ou seja, ao declarar uma variável não é necessário estabelecer um tipo específico e o tipo do valor da variável pode mudar conforme o código.

---

### Scope ou Escopo

O escopo determina a visibilidade de alguma variável no JavaScript.

#### Scope e Var

O **Scope** ou **Escopo** determina a **visibilidade de uma variável em um código**, e para entender scope precisamos primeiramente entender block statement, que é o código presente dentro de chaves. O **escopo do var** é **global**, ou seja, uma variável declarada com var poderá ser **usada** em todo o **código**.

#### Scope let e const

Diferentemente de var, **const** e **let** são variáveis com **escopo local**, ou seja, só são visíveis no escopo onde foram **criadas** e em escopos interiores ao de criação. Em uma variável let, porém, pode-se alterar o valor em um escopo e o valor irá persistir no escopo de criação.

---

#### Nomeando variáveis

- Js é **case-sensitive** (sensível ao caso).
- Js aceita a cadeia de caracteres **Unicode**.

* **Pode**:
  - Iniciar com caracteres especiais: $ \_
  - Iniciar com letras
  - Colocar acentos
  - Letras maíusculas e minúsculas fazem diferença
* **Não pode**:

  - Iniciar com números
  - Colocar espaços vazios no nome

* **Ideal**:
  - Criar nomes que fazem sentido
  - Que explique o que a variável é ou faz
  - camelCase
  - snake_case
  - Escrever em inglês
