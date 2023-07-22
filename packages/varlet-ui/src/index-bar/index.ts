import IndexBar from './IndexBar.vue'
import { withInstall } from '../utils/components'

withInstall(IndexBar)

export { props as indexBarProps } from './props'

export const _IndexBarComponent = IndexBar

export default IndexBar
