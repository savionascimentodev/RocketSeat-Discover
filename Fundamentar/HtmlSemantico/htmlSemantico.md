## Web Semântica

- Adiciona significado a linguagem;
- No caso do **HTML** para dar significado ao conteúdo;

> Ao usar uma marcação semântica consistente para identificar os elementos da página, nós ajudamos o **user agents**(navegador), a identificar corretamente os elementos e apresentá-los aos visitantes da página.

Isso se torna extremamente relevante para **acessibilidade**, ou seja, para visitantes que precisam usar leitores de página, por exemplo. Com uma página desorganizada, fica complexo para o visitante com necessidades especiais, fazer um bom uso da página.

Além disso, os motores de busca dão preferências para sites que estão com sua semântica em dia. **Um site bem estruturado e organizado é um site melhor encontrado na web**.

### As tags

Elas que irão ajudar a criar um HTML semântico, pois algumas tags tem significados especificos e orientações claras sobre onde devem fica na página e o motivo dela existir.

```js
<p>Um exemplo de parágrafo... - Sávio Nascimento</p>
```

**Com uma melhor semântica**

```js
<blockquote>
  Um exemplo de parágrafo...
  <cite>- Sávio Nascimento</cite>
</blockquote>
```

### Entendendo os significados

- Como autor da página, é sua responsabilidade entender os significados, dos elementos;
- Muitas vezes é simples, pois o HTML não possui um leque gigante de elementos;
- Algumas vezes é complexo de se entender alguns elementos;

> Saiba que:
> Alguns elementos, você irá usar em todos os documentos que você criar, e alguns talvez você nunca precise utilizar.
>
> Em muitos casos, a marcação do conteúdo é uma questão de gosto pessoal e será diferente de autor para autor.

### Seções comuns em documentos HTML

- Cabeçalho <**header**>;
- Navegação <**nav**>;
- Conteúdo principal <**main**>;
- Barra lateral <**aside**>;
- Rodapé <**footer**>;

### Header

- Onde utilizar?
  - Quando no início da página, é visto como global;
  - Pode ser usado em outros elementos semânticos como article, section;
- Múltiplos headers;
- Não possui atributos epecíficos;

```js
<body>
  <header>Logo</header>
</body>
```

### Nav

- Onde utilizar?
  - Geralmente usada abaixo do header;
  - Representa uma seção de uma página que aponta para outras páginas ou para outras áreas da página;

```js
<body>
  <header>
    <nav>
      <ul>
        <li>Teste</li>
      </ul>
    </nav>
  </header>
</body>
```

### Main

- Onde utilizar?
  - Geralmente usado apenas uma vez na página, logo após o body;
  - Define o conteúdo principal da página;

```js
<body>
  <main>
    <h1>Receitas</h1>
    <p>Página teste de receitas.</p>
  </main>
</body>
```

### Article

- Onde utilizar?
  - Representa uma composição independente em um documento, página, aplicação, ou site;
  - A tag article vai criar blocos de conteúdo que estejam relacionados

```js
<body>
  <main>
    <h1>Receitas</h1>
    <p>Página teste de receitas.</p>

    <article>
      <h2>Receita Torta</h2>
    </article>
  </main>
</body>
```

### Aside

- Conteúdos levemente relacionados ao conteúdo principal:
  - Explicações;
  - Glossários;
  - Links extras;
  - Biografia do autor;
  - Informações de perfil;
- **Atributos:** apenas globais;
- É uma tag fácil de se entender, porém fácil de se confundir, então evite atribuir a tag **aside** ao **lado da página**.

```js
<body>
  <main>
    <h1>Receitas</h1>
    <p>Página teste de receitas.</p>
    <article>
      <h2>Receita Torta</h2>
    </article>
    /* Glossário */
    <aside>
      <h3>Glossário</h3>
      <p>...</p>
    </aside>
  </main>
</body>
```

### Footer

- Geralmente no final da página
  - Informações do autor, copyright, contato, sitemap, voltar ao topo;
- **Atributos:** apenas globais;

```js
<footer>
  <p>© 2020 Cabeleleila Leila</p>
</footer>
```

### Section

- A tag section serve para colocar seções na nossa página HTML;
- Geralmente se coloca um título e conteúdo na tag section;
- Antigamente usava-se uma div para fazer essas divisões e seções de conteúdos, mas semanticamente é mais apropriado usar uma tag section;
- **Atributos:** apenas globais;

```js
<main>
  <h1>Receita 1</h1>
  <p>descrição da receita</p>

  <section>
    <h2> Modo de preparo</h2>
    <p>Modo de preparo</p>
  </section>
</main>
```

### Elementos genéricos não semânticos

> Escrever HTML semântico é algo que leva tempo, e precisa de muita prática para fazer com que o HTML tenha maior significado. Temos dois elementos não semânticos para uso genérico, um para bloco e outro para texto, sendo esses o div e o span.

> Em ambas as situações nós usaremos atributos globais como id e class para entregar um maior significado.

> O span é usado quando não se acha um elemento de texto semântico, já o div, quando não se acha um elemento de bloco semântico.

Um exemplo de uso do span é caso queira dar um destaque no texto, mas não queira usar a tag strong, algo parecido com:

```js
<h1>
  Título <span class="destaque">destacado</span>
</h1>
```

Um exemplo do uso de div semântico:

```js
<div class="cart">
  <h2>Carrinho de compras</h2>
</div>
```
