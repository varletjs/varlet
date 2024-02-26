import { useParent } from '@varlet/use'
import { error } from '../utils/logger'
import { MENU_SELECT_BIND_MENU_OPTION_KEY, type MenuSelectProvider } from '../menu-select/provide'
import { type OptionProvider } from '../option/provide'

export interface MenuOptionProvider extends OptionProvider {}

export function useMenuSelect() {
  const { index, parentProvider, bindParent } = useParent<MenuSelectProvider, MenuOptionProvider>(
    MENU_SELECT_BIND_MENU_OPTION_KEY
  )

  if (!bindParent) {
    error('MenuOption', '<var-menu-option/> must in <var-menu-select/>')
  }

  return {
    index,
    menuSelect: parentProvider,
    bindMenuSelect: bindParent,
  }
}
