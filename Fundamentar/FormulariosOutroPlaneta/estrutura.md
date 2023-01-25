## Formulários

### Pra que serve?

- Capturar dados de entrada(input);
- Interação;
- Controle(players de videos,musicas);

---

### Form

- Elemento que definirá um formulário;
- É um container estilo <section>, <footer>;

- Atributos básicos:
  - Action;
  - Method;

```js
<form action="" method="GET/POST">
  ...
</form>
```

### Fieldset

- Agrupamento de campos;
- Mesmo propósito;
- Semântico;
- Acessibilidade;

**Atributos especiais**:

- **Disabled**:
  - desabilita todos os elementos internos;
  - não serão enviados ao submeter o formulário;
- **Form**:
  - O id de um formulário ao qual esse fieldset pertence;
  - não precisa estar dentro do formulário;
- **Name**:

  - nome do grupo;

- **Legend**;
  - Nome do agrupamento;
  - Primeiro elemento dentro do fieldset;

```js
<form action="">
  <fieldset>
    <legend>Nome</legend>

    <label for="">Nome</label>

    <input type="text">
  </fieldset>
</form>
```

### Label

- Associar e identificar uma (ou mais) tag(s) de entrada de dados;
- Acessibilidade;
- Você poderá clicar para mudar o foco da entrada de dados;

**Atributos**:

- **For**:
  - Para fazer a conexão entre esta label e a tag de entrada de dados;
  - É feita via id do input;
  - Só funciona com elementos específicos:
    - Button, Input (not hidden), meter, output, progress, select, textarea;

```js
<label>
  Nome:
  <input type="text">
</label>
```

### Button

- Representa um botão;
- Usado para enviar formulários;
- É estilizado pelo user agent (navegador);

**Atributos comuns**:

- Type:
  - Submit;
  - Reset;
  - Button;
- Autofocus;
- Disabled;
- Name;
- Value;
- Form

```js
<button type="submit">
  Enviar
</button>

<button disabled>
  Enviar
</button>
```

### DataList

- Lista de valores como sugestão a uma tag <**input**>;
- Valores sugestivos e não obrigatórios;

- **List**:
  - Recebe como valor o id de um <**datalist**> residente no mesmo documento;

#### Tipos de input suportados:

- Text, search, url, tel, email, date, month, week, time, datetime-local, number, range e color;
- Valores do datalist que não são compatíveis com o tipo do <**input**> não serão apresentados;

#### Tipos de input NÃO suportados:

- Hidden, password, checkbox, radio, file, ou qualquer tipo de button;

#### User Agent

- O próprio navegador estiliza essa tag;

````js
<input type="text" placeholder="Escolha uma fruta" list="fruitsdata" />

<!-- Datalist de frutas -->
<datalist id="fruitsdata">
  <option>Maça</option>
  <option>Banana</option>
  <option>Morango</option>
  <option>Laranja</option>
</datalist>

<!-- Datalist de cores -->
<datalist id="colorsdata">
  <option>#ff0000</option>
  <option>#00ff00</option>
</datalist>

<input type="color" list="colorsdata">

```
````
