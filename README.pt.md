<div align="right" >
    <a href="./README.md">
    <img src="./.github/lg-button-en.png" alt="es-en" width="180px" ></img>
  </a>
</div>
<br/>

<div align="center">
  <img src="./.github/robozin.png" alt="Robozinho" />
</div>

<br/>
<p align="center">
 <a href="#sobre">Objetivo</a>  • 
 <a href="#tecnologias">Tecnologias</a>  •  
 <a href="#pre-requisitos">Pré-requisitos</a>  •  
 <a href="#contribuic-ao">Contribuição</a>  •  
 <a href="#licenc-a">Licença</a>  •  
 <a href="#autor">Autor</a>
</p>


<br/>
<p>
  <strong>ATENÇÃO:</strong> A implementação deste projeto está em andamento.
</p>
<br/>


<br/>
<a name="sobre"/>

## :bulb: Sobre o projeto

  Um bot para discord, com comandos em português e inglês e múltiplas funcionalidades, dentre elas

 - [X] ;help || ;ajuda - mostra a lista de comandos disponíveis

 - [X] ;pool || ;enquete "`pergunta`" "`resposta1`" "`resposta2`" - cria uma enquete e permite que os usuários do servidor votem

 - [X] ;greet || ;hello || ;oi - diga "oi" para o bot

 - [X] ;fala - repetir sua mensagem (-d apaga a mensagem original | -tts habilita a função speech-to-text)

 - [X] ;grita - diz "AAAAh" em voz alta

 - [X] ;escolhe `parametro1` `parametro2` - escolher dentre argumentos passados ao comando

 - [ ] ;quote - faz uma citação ABNT da mensagem em "reply"


  O bot também manda uma mensagem de boas vinda a cada vez que alguém entra no server

<br/>
<a name="tecnologias"/>

## :rocket: Tecnologias
    
  . [Discord.js](https://discord.js.org/) <br/>

  . [Node.js](https://nodejs.org/en/) <br/>


<br/>
<a name="pre-requisitos"/>

## :computer: Como executar o projeto

ANTES DE MAIS NADA

- Você precisa ter o `node.js` instalado na sua máquina;
- Também, é necessário ter um gerenciador de pacotes, como o `npm`;

- Para rodar o bot localmente, você precisa configurar um token válido no arquivo `src/config/config.json`;

CLONE ESSE REPOSITÓRIO

```sh

$ git clone https://github.com/iaraoliveira/robozin.git

```

INSTALE AS DEPENDÊNCIAS

```sh

$ npm install

```

EXECUTE A APLICAÇÃO

```sh

$ npm start

```


<br/>
<a name="contribuic-ao"/>

## :handshake: Como contribuir

FAÇA UM FORK DESSE REPOSITÓRIO

```bash
# você pode fazer isso usando o GitHub CLI ou na própria interface do site

$ gh repo fork iaraoliveira/NOME_DO_REPO
```

SIGA OS PASSOS ABAIXO

```bash
# faça um clone do fork que você acabou de criar
$ git clone your-fork-url && cd NOME_DO_REPO

# crie uma branch
$ git checkout -b my-feature

# adicione suas modificações num commit
$ git add .
$ git commit -m 'feature: minha contribuição'

# envie seu código para a branch que você criou
$ git push origin my-feature
```

Depois que seu merge request for aceito, você pode deletar sua branch

<br/>
<a name="licenc-a"/>

## :notebook_with_decorative_cover: Licença

Este projeto está sob licença MIT, para saber mais, acesse o arquivo [LICENSE](./LICENSE)


<br/>
<a name="autor"/>

<div align='center'>
  <strong>Feito com :white_heart: por iara</strong>
  <br/>
  <a href="https://www.linkedin.com/in/iara/">entre em contato</a>
</div>
