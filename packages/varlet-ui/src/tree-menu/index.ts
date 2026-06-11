import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as treeMenuProps } from './props'
import TreeMenu from './TreeMenu.vue'

withInstall(TreeMenu)
withPropsDefaultsSetter(TreeMenu, treeMenuProps)

export { treeMenuProps }
export type { TreeMenuOption, TreeMenuOptionIconRender, TreeMenuOptionLabelRender, TreeMenuOptionValue } from './props'

export const _TreeMenuComponent = TreeMenu

export default TreeMenu
