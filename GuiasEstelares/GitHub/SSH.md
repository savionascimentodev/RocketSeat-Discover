### O que é uma chave SSH?

É uma espécie de conexão que temos que fazer com a máquina e o servidores do GitHub, sendo encriptada, para identificarmos que nossa máquina pode usar o GitHub.

Para criarmos, clicaremos na bolinha do usuário, ir na parte de configurações, e nela iremos até a opção SSH and GPG keys, mas antes vamos para o terminal.

Abrindo o terminal, no caso esse é o do macOS, digitamos ssh-keygen, para gerar a chave ,-t rsa, para dizer o tipo de encriptação, -b 4096, a força da encriptação, -C "savionascimentodev@gmail.com", o email que estamos criando, isso tudo na mesma linha, dando enter ele vai pedir algumas coisas que não precisamos, apenas dando enter.

No windows precisaremos do Git instalado, ao instalar você terá um terminal diferente, que podemos criar a chave da mesma forma que no macOS.

Agora com a chave precisamos pegar ela para colocarmos ela no botão verde, ainda pelo terminal, damos um cd ~/.ssh/ , teremos algumas opções como id_rsa e id_rsa.pub, que é o que queremos, mas não conseguimos navegar, fazer um cd nele, mas conseguimos dar um cat para mostrar tudo que há no arquivo, dando enter, vamos copiar tudo desde o ssh até o .com e voltar ao GitHub, clicando no botão verde de nova chave, colocar um título e colar a chave e adicionar ela.
