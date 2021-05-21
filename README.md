# Comunidade DevParaná

- [Repositório](#repositorio)

  - [Objetivo](#repositorio-objetivo)

- [Aplicativos](#aplicativos)

  - [Gravação da tela](#aplicativos-gravacao-da-tela)

- [DevParaná](#devparana)

  - [Ideia](#devparana-ideia)
  - [Iniciativa](#devparana-iniciativa)
  - [Onde nos encontrar](#devparana-onde-nos-encontrar)

<a id="devparana"></a>

## Bem vindo ao `DevPR MX`, esperamos que você tenha a melhor experiência como membro da nossa comunidade

<a id="devparana-ideia"></a>

### A ideia deste movimento

Dar o empurrão que faltava para muito dos desenvolvedores paranaenses começar a compartilhar conhecimentos, através de MeetUps, Coding Dojo, Conferências e tudo mais que pudermos fazer.

<a id="devparana-iniciativa"></a>

### Nossa iniciativa

Auxiliar nas comunidades e movimentos nas suas ações, não competindo com os mesmos.

---

<a id="repositorio"></a>

## Repositório

<a id="repositorio-objetivo"></a>

### Objetivo do repositório

Este repositório contém alguns facilitadores para organização de eventos e preparações de talks, caso tenha algo a colaborar, sinta-se a vontade para enviar um pull request contribuindo.

<a id="repositorio-serve-website"></a>

### website

![website](docs/serve-website.gif)

---

<a id="aplicativos"></a>

## Aplicativos

<a id="aplicativos-gravacao-da-tela"></a>

### Gravação da tela

Temos uma aplicação para gravação da tela, caso precise mostrar algo durante sua apresentação, você pode clonar o repositório e executar localmente ou acessar a versão web.

<!-- Alterar sub-domínio rec.devparana.org -->

[Link Web](https://devpr-recorder.surge.sh/)

[Link do Código](./packages/apps/recorder/src/app/app.element.ts)

### Para desenvolvimento

```bash
npm run recorder
```

### Para servidor web

Faça o build

```bash
npm run recorder:build
```

Execute com algum servidor web de preferência, neste exemplo usarei http-server

```bash
http-server dist/packages/apps/recorder -o
```

---

### Para simular um deploy execute

```bash
npm run simulate:deploy
```

---

<a id="devparana-onde-nos-encontrar"></a>

### Onde nos encontrar

## - [Github](https://github.com/DeveloperParana/)

## - [Facebook](https://facebook.com/DeveloperParana/)

## - [Instagram](https://www.instagram.com/devparana/)

## - [Twitter](https://www.instagram.com/devparana/)

## - [Meetups](https://www.meetup.com/pt-BR/developerparana/)

![Comunidade DevParaná](design/assets/logo.svg 'Comunidade DevParaná')

---

Este projeto usa [Nx](https://nx.dev) workspaces.
