# apps / [presenter](../../apps/presenter)

## Slides

1. Os arquivos markdown devem estar no diretório [content](apps/presenter/src/content)
1. Você precisa referenciar qual será o primeiro slide.

   Pelo arquivo index.html
   Você consegue fazer isso no arquivo [index.html](apps/presenter/src/index.html),
   alterando o atributo `start` do elemento `slide-deck`

Cada slide possui um cabeçalho contendo os metadados do título do slide, qual classe CSS
será adicionada ao elemento do slide e qual será o próximo slide

## Exemplo de slide

````md
---
title: Peer 1
styles: justify-center
nextSlide: peer-2
---

## Peer 1

```ts
const onCandidate = (peer) => ({ candidate }) => {
  console.log(candidate && candidate)
  console.log(JSON.stringify(peer.localDescription))
}
const onOffer = (peer) => (o) => {
  peer.setLocalDescription(o)
}
const peer = new RTCPeerConnection()
peer.onicecandidate = onCandidate(peer)
const channel = peer.createDataChannel('channel')
channel.onopen = console.log
channel.onmessage = console.log
peer.createOffer().then(onOffer(peer))
```
````

## Estrutura do app

```bash
apps/presenter/src
├── app
├── assets
│ ├── images
├── content
│ ├── intro.md
│ ├── slide-1.md
│ ├── slide-a.md
│ ├── slide-x.md
│ ├── x-slide.md
│ ├── finish.md
├── core
├── environments
├── index.html
├── main.ts
├── server.ts
├── styles.scss
└── test-setup.ts

```
