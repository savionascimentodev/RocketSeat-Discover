### Controle de Versão

- Registro de alterações em um ou mais arquivos;
- Lembrar versões específicas mais tarde;
- Reverter para estado anterior determinado arquivo ou um projeto inteiro;
- Compare as mudanças ao longo do tempo;
- Ver que modificou pela ultima vez;

---

### O que é Git

- Sistema de controle de versão distribuido;
- Open-source;
- Pontos na história: commit (viagem no tempo);
  - Histórico de alteração no código;
  - Voltar para qualquer ponto da história;
- Controlar o fluxo de novas funcionalidades;
  - Ramificações: _branch_;
  - Vários devs no mesmo projeto;
  - Análise e resolução de conflitos;

---

### Configurações iniciais

Primeiramente, abra o seu terminal e digite:

```cs
git config --global user.name "Seu nome completo entre aspas"
git config --global user.email "seuemailaqui@dominio.com"
```

Isso é importante porque em cada commit essa informação será utilizada, e é carimbada de forma imutável nos commits que você começa a criar.

Caso você queira substituir essa informação para um projeto específico, apenas rode o comando sem a opção --global dentro daquele projeto.

Caso queira trocar o editor padrão, que é o vim, pelo VS Code, rode o comando abaixo:

```cs
git config --global core.editor "code -w"
```

Por fim, caso queira verificar as suas configurações, apenas rode o comando abaixo:

```cs
git config --list
```

<div style="text-align:center"><strong>Git Help</strong></div>

Para termos ajuda com o git, podemos usar o comando **git help**, onde você vai obeter informações sobre praticamente tudo no git, basta colocar git help + a área (exibida com o comando git help) na qual sua dúvida se encaixa e procurar sua resposta.

Para sair do menu de ajuda, use o comando **:q**.

---

### Iniciando um Repositório

**Rode o comando a seguir:**

```cs
git init
```

Pronto agora foi adicionado um arquivo **.git** no projeto ele é um diretório escondido, uma vez que tem esse arquivo no diretório já podemos considerar que o git está funcionando.

---

### Histórico do Projeto

**Rode o comando a seguir:**

```cs
ls - al.git
```

Verá que há alguns arquivos nessa pasta, e são exatamente esses arquivos que nos trazem as informações do Git.

**Atenção:** Nunca delete a pasta git caso não esteja na nuvem, ela é seu repositório, no caso de você deletá-la, perderá todo o histórico do seu projeto.

---

### Primeiro Commit

Primeiro iremos preparar nosso arquivo para isso, através do comando add, usado da seguinte forma:

```cs
git add .
```

O **.** nesse caso serve para **selecionarmos** todos os **arquivos** dentro do diretório.

Assim que tivermos executado esse comando, podemos criar nosso commit, da seguinte forma:

```cs
git commit -m "mensagem do commit"
```

A **mensagem** do commit é obrigatória, então não se esqueça!
E assim é criado o primeiro ponto na história!

---

### Estágios do Arquivo

Para podermos iniciar um projeto, colocamos o **git init** (ou **git clone**, caso optarmos por copiar os arquivos de outro repositório, após isso, o git vai iniciar um repositório local, fazendo com que nosso arquivos fiquem no **Working Directory**, a primeira etapa do processo.

Após isso, faremos o git add, que nos coloca na **Stage Area**, a segunda etapa do processo, e finalmente faremos um commit, para levar nossos arquivos até o repositório local.

O **Working Directory** é o diretório no qual se encontra nosso projeto, então os arquivos são preparados para serem commitados, a **Stage Area**, onde nosso arquivos ficam preparados, para podermos enfim criarmos o nosso commit, e é a partir desse ponto em que nosso arquivo fica salvo como um ponto na história.

---

### Nome que é dado para cada commit

A cada commit que criamos, o git vai gerar um checksum, que converte os dados da nossa operação em um número, o que garante a integridade dos nossos dados. Essa **hash** é uma linha de **40 caracteres hexadecimais**.

Dentro dessa string existe uma **snapshot**, que mostra o autor, o pai e a mensagem do nosso commit.

O pai do commit é o commit do qual ele foi criado, então o nosso primeiro commit sempre terá um valor nulo, enquanto os próximos terão o valor do commit anterior a ele.

<div style="text-align:center"><strong>HEAD</strong></div>

> No git, a HEAD é um ponteiro, que nos aponta em que ponto da história estamos, em qual commit nós estamos, e nas próximas aulas veremos como fazer para irmos em outros pontos na história, outros commits.

---

#### Adicionando arquivos com git add

Vamos usar o comando git add + o nome do arquivo que queremos adicionar ao nosso Stage Area, mas também podemos fazer isso de outra forma, que é o comando **git add .(ponto)** , que vai levar todos os arquivos e pastas do nosso working directory ao stage area, o que não é recomendado, já que é melhor fazer uma série de pequenos commits, mas ainda é possível realizar um commit com quantos arquivos quisermos.

Uma outra maneira de adicionar múltiplos arquivos além do git add .(ponto), é possível adicionar arquivos por sua extensão, através do comando git add.(extensão do arquivo).

---

#### Modificações com git diff

Ao usar o comando **git diff**, ele mostra um registro das modificações feitas nos arquivos que já tinham sido guardados no nosso repositório, porém, em arquivos não rastreados pelo git, não será possível ver as alterações.

A ferramenta git diff é muito poderosa para ver a diferença entre os arquivos que temos no repositório e no working directory.

##### Modificações stage area

O **git diff staged**, que é basicamente a mesma coisa, funciona da mesma forma, porém vai comparar as **modificações** dos arquivos na **stage area** e no **repositório**, ao invés dos arquivos do working directory e do repositório.

---

#### Renomeando Arquivos

Para renomear basta apenas, usar o comando **git mv**, cuja sintaxe é:

```javascript
git mv nomeatual.txt novonome.txt
```

Ao rodar novamente o comando git status veremos que consta como renamed: nomeatual.txt → novonome.txt.

---

#### Movendo Arquivos

Para mover arquivos através do git, usando o comando **git mv**, usado da seguinte forma:

```javascript
git mv arquivoquevaimover nomedodiretório/arquivoquevaimover
```

---

#### Revertendo um commit

O primeiro passo é ter um diretório limpo, sem nenhum arquivo não rastreado, sem nada na stage area.

Então o comando git log, e onde nossa HEAD estiver, a cada commit subtrairemos 1, então, considere o commit atual como 0, o abaixo desse -1, o abaixo desse -2 e por aí vai.

Use o comando git revert, mas ao invés de um sinal de menos(-), use um **til (~)**, da seguinte maneira:

```javascript
git revert HEAD~5

```

Também há outra forma de fazer isso, que é usando a hash de onde exatamente você deseja reverter, hash que pode ser obtida facilmente através do comando **git log --oneline**, ficaria parecido com:

```javascript
git revert 7f121d7
```
