import { registerDeck, registerControls, registerKeyHandler } from './app'

const loadShow = async () => {
  registerDeck()
  registerControls()
  registerKeyHandler()
}

document.addEventListener('DOMContentLoaded', loadShow)
