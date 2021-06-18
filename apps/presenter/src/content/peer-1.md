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
