### Tipos de Dados

#### 📝 String

O tipo de dados **String** consiste em uma cadeia de caracteres, ou seja, textos. Para denotar string no JavaScript são usados **aspas duplas** ( " " ), **aspas simples** ( ' ' ) e template literals ou **template strings** ( `` ), template literals permitem textos multilinhas e expressões de linguagem com os caracteres **${ }**, por exemplo:

```javascript
console.log(`A soma de duas unidades é ${1 + 1}`) // Tmeplate Strings
console.log("Isso é um 'texto' ") // Aspas Duplas
console.log('Isso também é um texto') // Aspas Simples
```

---

#### 🔢 Number

No JavaScript temos 4 tipos de números, os **inteiros** (por exemplo: 13), os **reais** ou **float** (por exemplo: 83.1), o Not a Number (**NaN**) e o infinito (**Infinity**),por exemplo:

```javascript
console.log(7) // Inteiro
console.log(14.8) // Float
console.log(12.5 / 'savio') // Nan
console.log(Infinity) // Infinity
```

---

#### ❓ Boolean

No JavaScript, um dado boolean pode ter apenas 2 valores, verdadeiro (**true**) e falso (**false**).

```javascript
console.log(true) // Verdadeiro
console.log(5 > 0) // Verdadeiro
console.log(false) // Falso
console.log(5 < 0) // Falso
```

---

#### 🖇️ Array

O tipo de dados Array, ou vetor é estrutural, e consiste em uma lista de dados agrupados, um Array é denotado com os caracteres **[ ]** , por exemplo: [ "Leite", "Ovos", "Manteiga", 1, 2 ] .

```javascript
console.log(['Leite', 'Ovos', 'Macarrão'])
```

---

#### 📎 Obejto

O tipo de dado Object é estrutural, contendo atributos e propriedades, ou métodos, e funcionalidades. Um objeto é denotado com os caracteres **{ }**, atributos e métodos com **nome: valor** . Por exemplo { nome: "João", idade: 20 }.

```javascript
console.log({
	name: 'Savio',
	idade: 19,
	andar: true
})
```

---

#### ❌ Null VS Undefined

No JavaScript temos o tipo de dados **Undefined**, que representa valores **indefinidos**, e o tipo de dados **null**, que são muitas vezes confundidos. A diferença dos dois é que null é considerado como um **objeto vazio**, ou seja, algo indefinido não existe, já algo null **existe mas não tem valor algum**.

```javascript
console.log(null) // Obejto que não tem nada dentro
console.log(indefined) // Algo que realmente não existe
```

---

#### Conclusão

Conforme o **ECMAScript** Standard (o padrão do orgão que padroniza o JavaScript) temos 9 tipos de dados organizados em **4 categorias**:

- Primitive, Primitive Value, Structural e Structural Primitive;
- Os **primitivos** são: String, Number, Boolean, Undefined, Symbol, BigInt;
- Os **estruturais** são: Object e Function. Além destes, temos o **primitivo estrutural** que consiste apenas no dado null;
