import { registerDeck } from './app'

const loadShow = async () => {
  registerDeck()
  import('./app/controls')
  // .then(() => import('./app/key-handler'))
}

document.addEventListener('DOMContentLoaded', loadShow)
