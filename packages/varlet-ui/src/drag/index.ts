import Drag from './Drag.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as dragProps } from './props'

withInstall(Drag)
withPropsDefaultsSetter(Drag, dragProps)

export { dragProps }

export const _DragComponent = Drag

export default Drag
