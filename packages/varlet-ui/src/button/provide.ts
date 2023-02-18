import { useAtParentIndex, useParent } from '../utils/components'
import {
  BUTTON_GROUP_BIND_BUTTON_KEY,
  BUTTON_GROUP_COUNT_BUTTON_KEY,
  ButtonGroupProvider,
} from '../button-group/provide'

export function useButtonGroup() {
  const { bindParent, parentProvider } = useParent<ButtonGroupProvider, null>(BUTTON_GROUP_BIND_BUTTON_KEY)
  const { index } = useAtParentIndex(BUTTON_GROUP_COUNT_BUTTON_KEY)

  return {
    index,
    buttonGroup: parentProvider,
    bindButtonGroup: bindParent,
  }
}
