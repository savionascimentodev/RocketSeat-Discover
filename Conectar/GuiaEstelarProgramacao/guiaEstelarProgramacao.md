# Fundamentos da Programação

### O que é programar

Programar é entender de **algoritimos**, que são por sua vez uma **sequência lógica**, **passos para resolver um problema**, usando a **lógica de programação**, que é **como você aplica esses passo**s, ou seja, a construção do algorotimo, porém como o computador entende? Ele pensa? A resposta é não, ele apenas processa e calcula, recebendo ordens, que é através da linguagem de programação que você irá se comunicar e dar as instruções, usando tipos de dados, introduzindo alguns, como "**strings**", que é uma sequência de caracteres, **numéricos**, **Boleano** que é um tipo de dado que diz se é **verdadeiro** ou **falso** e esses dados são bastante importantes para **computador entender as instruções**, **manipulando esses dados é possível transformar eles no seu algoritimo**, porém é necessário ser bem **detalhista** quanto as **instruções**, já que um **computador não pensa**, **programar é resolver problemas através da lógica**.

### Como funciona a WEB

A Web como as pessoas normais conhecem é somente digitar o nome do site e entrar, esse seria o caminho fácil, mas não se limita a somente isso, veremos agora o caminho avançado, onde você digita por exemplo https://rocketseat.com.br, agora temos uma **URL** e por de trás dos panos o que temos é o **http** é um **protocolo que significa "Hypertext Transfer Protocol"**, que possui como **função trocar mensagem entre computadores** essa mensagem será enviada a um computador em diversos pedaços que chamamos de "**chunks**" e então temos a **URL**, que significa "**Uniform Resource Locator**", localizador e identificador de recursos, nesse caso o site.

Após o primeiro processo é então iniciada uma **linha de comunicação**, através de um outro **protocolo chamado TCP**, entre o **cliente**, que é o **computador**, **dispositivo** **ou aplicativo** que fez o **pedido**, no nosso caso o **Browser**, e o **servidor**,**computador configurado para receber os pedidos e enviar respostas aos pedidos**, e o **TCP**, que significa "**Transmission Control Protocol**", que tem como função garantir que os **pacotes(chunks)** cheguem corretamente ao destino, já que eles vêm em diversos pedaços.

Então a linha de comunicação foi criada, fazendo esse inicio, mas quando você apenas digita rocketseat.com o **endereço precisa ser convertido em endereço de IP**, através do **DNS**. IP significando "Internet Protocol", mais um conjunto de regras, que possui como função endereçar os computadores, todos os computadores que estão conectados à internet possuem um IP, e **DNS** significando "**Domain Name Servers**", tendo a função de **converter um domínio em um endereço IP**, **domínio sendo de maneira simples**, uma forma mais fácil de lembrarmos o IP, sem precisar digita-lo, **apenas digitando o nome**.

O endereço convertido em IP e agora você quer que esse pedido seja feito, no nosso caso queremos ver o site, está percorrendo por diversos **Proxys**, **Proxy é qualquer dispositivo no meio do caminho entre o computador e o servidor**, sendo ele Modem, outros computadores, são vários, **tendo a função de encaminhar os pacotes, passando de um para o outro, até chegar ao servidor**.

O **servidor analisa seu pedido e te dá a resposta**, no caso positiva, a resposta retorna pela linha de comunicação em também diversos pedacinhos até o dispositivo, Browser, montando o site para você, e esse processo ocorre diversas vezes para um único pedido, **já que cada recurso** (html, css, javascript, imagens, etc) **é feita uma nova conexão**.

Isso foi apenas uma visão geral de como funciona a Web, neste caso o que ocorre quando digitamos um endereço de site e pressionamos o ENTER, esse processo ocorre em aplicativos de smartphone também.
