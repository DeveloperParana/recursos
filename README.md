# Comunidade DevParaná

- [Aplicativos](#aplicativos)

  - [Gravação da tela](#aplicativos-gravacao-da-tela)

- [Banco de imagens](./IMAGES.md)

- [Repositório](#repositorio)

  - [Objetivo](#repositorio-objetivo)
  - [Mantendo](#repositorio-mantendo)
    - [Serve](#repositorio-serve)
    - [Build](#repositorio-build)
    - [Simule](#repositorio-simulate)
    - [Commit](#repositorio-commit)

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

<a id="aplicativos"></a>

## Aplicativos

<a id="aplicativos-gravacao-da-tela"></a>

### Gravação da tela

Temos uma aplicação para gravação da tela, caso precise mostrar algo durante sua apresentação, você pode clonar o repositório e executar localmente ou acessar a versão web.

<!-- Alterar sub-domínio rec.devparana.org -->

[Link Web](https://devpr-recorder.surge.sh/)

[Link do Código](./packages/apps/recorder/src/app/app.element.ts)

---

<a id="repositorio"></a>

## Repositório

<a id="repositorio-objetivo"></a>

### Objetivo do repositório

Este repositório contém alguns facilitadores para organização de eventos e preparações de talks, caso tenha algo a colaborar, sinta-se a vontade para enviar um pull request contribuindo.

<a id="repositorio-mantendo"></a>

### Mantendo o repositório

Aqui estão alguns exemplos de como podemos usar, alterar e submeter alterações para o repositório.

> **Importante!**
>
> Abaixo estão alguns exemplos, mas antes de submeter uma grande mudança, por favor, leia atentamente nosso [guia de contribuição](./CONTRIBUTING.md).

<a id="repositorio-serve"></a>

#### Para desenvolvimento

```bash
npm run recorder
```

![](docs/run-recorder.gif)

### Para servidor web

<a id="repositorio-build"></a>

Faça o build

```bash
npm run recorder:build
```

![npm run recorder build](docs/run-recorder-build.gif)

Execute com algum servidor web de preferência, neste exemplo usarei http-server

```bash
http-server dist/packages/apps/recorder -o
```

<a id="repositorio-simulate"></a>

### Para simular um deploy execute

```bash
npm run simulate:deploy
```

![npm run simulate:deploy](docs/run-simulate-deploy.gif)

---

<a id="repositorio-commit"></a>

### Escrevendo mensagem de commit

```bash
npm run commit
```

## ![npm run commit](docs/run-commit.gif)

[Saiba mais sobre como contribuir](./CONTRIBUTING.md)

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
