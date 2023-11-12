import IndexBar from './IndexBar.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as indexBarProps } from './props'

withInstall(IndexBar)
withPropsDefaultsSetter(IndexBar, indexBarProps)

export { indexBarProps }

export const _IndexBarComponent = IndexBar

export default IndexBar
