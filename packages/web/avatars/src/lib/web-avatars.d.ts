import { AvatarElement } from './avatar-base'

declare global {
  interface HTMLElementTagNameMap {
    'web-avatar': WebAvatarElement
  }

  type AvatarType = 'avatar' | 'submit' | 'reset' | 'menu'
  type AvatarSize = 'default' | 'medium' | 'small'
  type AvatarContent =
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

  type AvatarRole =
    | 'option'
    | 'button'
    | 'menuitem'
    | 'menuitemcheckbox'
    | 'menuitemradio'
    | 'spinbutton'
    | 'switch'

  interface HTMLElementEventMap {
    onClick: ElementClickEvent<AvatarElement>
  }
}
