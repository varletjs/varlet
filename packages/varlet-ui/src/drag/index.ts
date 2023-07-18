import Drag from './Drag.vue'
import { withInstall } from '../utils/components'

withInstall(Drag)

export { props as dragProps } from './props'

export const _DragComponent = Drag

export default Drag
