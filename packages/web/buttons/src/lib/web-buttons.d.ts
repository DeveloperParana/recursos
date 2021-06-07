import { ButtonElement } from './button-base'

declare global {
  interface HTMLElementTagNameMap {
    'web-button': WebButtonElement
  }

  type ButtonType = 'button' | 'submit' | 'reset' | 'menu'
  type ButtonSize = 'default' | 'medium' | 'small'
  type ButtonContent =
    | 'default'
    | 'add'
    | 'back'
    | 'calendar'
    | 'cancel'
    | 'delete'
    | 'disabled'
    | 'edit'
    | 'expand'
    | 'menu'
    | 'more'
    | 'next'
    | 'onhover'
    | 'open'
    | 'submit'

  type ButtonRole =
    | 'option'
    | 'button'
    | 'menuitem'
    | 'menuitemcheckbox'
    | 'menuitemradio'
    | 'spinbutton'
    | 'switch'

  interface HTMLElementEventMap {
    onClick: ElementClickEvent<ButtonElement>
  }
}
