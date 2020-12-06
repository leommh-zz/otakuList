# Otaku List - Catálogo de animes
Este é um projeto de catálogo de animes, com busca e filtros. Todo o conteúdo é adquirido utilizando a api da [Kitsu](https://kitsu.docs.apiary.io/#).

### Pré-requisitos

Para rodar o projeto é necessário:

* [npm](https://www.npmjs.com/get-npm)
* Entre dentro da pasta do projeto e execute o comando  `` npm install `` para instalar todas as dependências


#### Web

* Para iniciar o projeto web, execute no terminal do projeto
  `` npm run web ``

* Para criar uma build do projeto web, execute no terminal do projeto
  `` npm run build ``


### Estrutura do projeto

```
otakulist/
├── package.json (dependências)
├── next.config.js (webpack e outras configurações do nextJS)
├── .babelrc (configuração babel)
├── assets (arquivos internos: less, imagens, fonts...)
├── components (componentes próprios)
├── pages 
  ├── _app.js (arquivo principal do projeto)
  └── (outras páginas do projeto)
├── public
├── redux (configuração, actions e reducers)
└── services (configurações de serviços e api)
```
