---
title: Peer 2
styles: justify-center
nextSlide: peer-2-2
---

## Peer 2

```ts
const onCandidate = (peer) => ({ candidate }) => {
  console.log(candidate && candidate)
  console.log(JSON.stringify(peer.localDescription))
}
const onAnswer = (peer) => (o) => {
  peer.setLocalDescription(o)
}
const onDataChannel = (peer) => ({ channel }) => {
  const peerChannel = channel
  peerChannel.onmessage = console.log
  peerChannel.onopen = console.log
  peerChannel.onclose = console.log
  peer.channel = peerChannel
}
const peer = new RTCPeerConnection()
peer.onicecandidate = onCandidate(peer)
peer.ondatachannel = onDataChannel(peer)
```
