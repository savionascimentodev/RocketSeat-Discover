#### For

A instrução for **cria um loop que consiste em três expressões opcionais**, dentro de **parênteses** e separadas por **ponto e vírgula**, seguidas por uma **declaração** ou uma **sequência de declarações** executadas em sequência:

```javascript
for(inicialização de uma variável; condição de continuação para o loop; expressão final)
```

##### Inicialização

Uma expressão (incluindo expressões de atribuição) ou declarações variáveis. Geralmente usada para iniciar o contador de variáveis. Esta expressão pode, opcionalmente, declarar novas variáveis com a palavra chave var. Essas variáveis não são locais no loop, isto é, elas estão no mesmo escopo que o loop for está. Variáveis declaradas com let são locais para a declaração.
O resultado desta expressão é descartado.

##### Condição

Uma expressão para ser avaliada antes de cada iteração do loop. Se esta expressão for avaliada para true, declaração será executado. Este teste da condição é opcional. Se omitido, a condição sempre será avaliada como verdadeira. Se a expressão for avaliada como falsa, a execução irá para a primeira expressão após a construção loop for.

##### Expressão final

Uma expressão que será validada no final de cada iteração de loop. Isso ocorre antes da próxima avaliação da condição. Geralmente usado para atualizar ou incrementar a variável do contador.

##### Declaração

Uma declaração que é executada enquanto a condição for verdadeira. Para executar múltiplas condições dentro do loop, use uma instrução de bloco ({...}) para agrupar essas condições. Para não executar declarações dentro do loop, use uma instrução vazia .

---

#### While

A declaração **while cria um laço** que executa uma **rotina especifica** enquanto a condição de teste for avaliada como **verdadeira**. A **condição é avaliada antes da execução da rotina**. A estrutura de repetição While faz sentido usar quando **não se sabe o momento da parada**:

```javascript
while (condição) {
  rotina
}
```

##### Condição

Uma expressão avaliada antes de cada passagem através do laço. Se essa condição for avaliada como verdadeira, a rotina é executada. Quando a condição for avaliada como falsa, a execução continua na declaração depois do laço while.

##### Rotina

Uma declaração que é executada enquanto a condição é avaliada como verdadeira. Para executar multiplas declarações dentro de um laço, use uma declaração em bloco ({ ... }) para agrupar essas declarações.

---

#### For In

O for in cria um loop dentro das propriedades de um objeto.

---

#### For Of

O for of é uma declaração que vai criar um loop através de uma variável, que já temos.
