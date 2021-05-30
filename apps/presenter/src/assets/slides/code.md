---
title: Code
nextSlide: lorem
---

```ts
import { registerDeck, registerControls, registerKeyHandler } from './show'
import './app/app.element'

const loadShow = async () => {
  registerDeck()
  registerControls()
  registerKeyHandler()
}

document.addEventListener('DOMContentLoaded', loadShow)
```
