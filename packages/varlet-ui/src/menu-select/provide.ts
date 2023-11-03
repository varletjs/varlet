import { useChildren } from '@varlet/use'
import { type ComputedRef } from 'vue'
import { type MenuOptionProvider } from '../menu-option/provide'
import { type MenuSelectSize } from './props'

export const MENU_SELECT_BIND_MENU_OPTION_KEY = Symbol('MENU_SELECT_BIND_MENU_OPTION_KEY')

export interface MenuSelectProvider {
  size: ComputedRef<MenuSelectSize>
  multiple: ComputedRef<boolean>
  computeLabel(): void
  onSelect(menuOptionProvider: MenuOptionProvider): void
}

export function useMenuOptions() {
  const { length, childProviders, bindChildren } = useChildren<MenuSelectProvider, MenuOptionProvider>(
    MENU_SELECT_BIND_MENU_OPTION_KEY
  )

  return {
    length,
    menuOptions: childProviders,
    bindMenuOptions: bindChildren,
  }
}
