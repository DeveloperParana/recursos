import { containedStyles } from './contained-styles'
import { BuiltIn } from '@devpr/web-core'

@BuiltIn({
  selector: 'contained-button',
  extends: 'button',
})
export class ContainedButtonElement extends HTMLButtonElement {
  static observed = ['size', 'content']

  public size: ButtonSize = 'default'

  public content: ButtonContent = 'default'

  styles = containedStyles
}
