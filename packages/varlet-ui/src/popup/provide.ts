import { useChildren, useParent } from '@varlet/use'
import { type ComputedRef } from 'vue'

export const POPUP_BIND_POPUP_ITEM_KEY = Symbol('POPUP_BIND_POPUP_ITEM_KEY')

export interface PopupProvider {
  show: ComputedRef<boolean>
}

export function usePopup() {
  const { bindParent, parentProvider, index } = useParent<PopupProvider, null>(POPUP_BIND_POPUP_ITEM_KEY)

  return {
    index,
    popup: parentProvider,
    bindPopup: bindParent,
  }
}

export function usePopupItems() {
  const { bindChildren, childProviders, length } = useChildren<PopupProvider, null>(POPUP_BIND_POPUP_ITEM_KEY)

  return {
    length,
    popupItems: childProviders,
    bindPopupItems: bindChildren,
  }
}
