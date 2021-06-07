import { outlinedStyles } from './outlined-styles'
import { BuiltIn } from '@devpr/web-core'

@BuiltIn({
  selector: 'outlined-button',
  extends: 'button',
})
export class OutlinedButtonElement extends HTMLButtonElement {
  static observed = ['size', 'content']

  public size: ButtonSize = 'default'

  public content: ButtonContent = 'default'

  styles = outlinedStyles
}
