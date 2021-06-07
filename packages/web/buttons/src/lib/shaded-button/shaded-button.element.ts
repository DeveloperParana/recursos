import { shadedStyles } from './shaded-styles'
import { BuiltIn } from '@devpr/web-core'

@BuiltIn({
  selector: 'shaded-button',
  extends: 'button',
})
export class ShadedButtonElement extends HTMLButtonElement {
  static observed = ['size', 'content']

  public size: ButtonSize = 'default'

  public content: ButtonContent = 'default'

  styles = shadedStyles
}
