import { ButtonBase } from '../button-base'
import { textStyles } from './text-styles'
import { BuiltIn } from '@devpr/web-core'

@BuiltIn({
  selector: 'text-button',
  extends: 'button',
})
export class TextButtonElement extends ButtonBase {
  static observed = ['size', 'content']

  public size: ButtonSize = 'default'

  public content: ButtonContent = 'default'

  styles = textStyles
}
