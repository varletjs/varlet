import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as swipeActionProps } from './props'
import SwipeAction from './SwipeAction.vue'

withInstall(SwipeAction)
withPropsDefaultsSetter(SwipeAction, swipeActionProps)

export { swipeActionProps }

export type { SwipeActionItem, SwipeActionSide } from './props'

export const _SwipeActionComponent = SwipeAction

export default SwipeAction
