import { useParent } from '@varlet/use'
import { BUTTON_GROUP_BIND_BUTTON_KEY, ButtonGroupProvider } from '../button-group/provide'

export function useButtonGroup() {
  const { bindParent, parentProvider, index } = useParent<ButtonGroupProvider, null>(BUTTON_GROUP_BIND_BUTTON_KEY)

  return {
    index,
    buttonGroup: parentProvider,
    bindButtonGroup: bindParent,
  }
}
