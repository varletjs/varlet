import { inputProps } from '../input'
import { pickProps } from '../utils/components'

export const props = {
  ...pickProps(inputProps, ['variant', 'size', 'autofocus', 'textColor', 'focusColor', 'blurColor']),
}
