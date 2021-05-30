import {
  registerDeck,
  // registerControls,
  // registerKeyHandler,
} from './app'

const loadShow = async () => {
  // registerControls()
  registerDeck()
  // registerKeyHandler()
  await import('./app/controls')
  await import('./app/key-handler')
}

document.addEventListener('DOMContentLoaded', loadShow)
