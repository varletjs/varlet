import { useAtParentIndex, useParent } from '../utils/components'
import {
  BREADCRUMB_BIND_BREADCRUMB_ITEM_KEY,
  BREADCRUMB_COUNT_BREADCRUMB_ITEM_KEY,
  BreadcrumbProvider,
} from '../breadcrumb/provide'

export interface BreadcrumbItemProvider {}

export function useBreadcrumbItem() {
  const { parentProvider, bindParent } = useParent<BreadcrumbProvider, BreadcrumbItemProvider>(
    BREADCRUMB_BIND_BREADCRUMB_ITEM_KEY
  )
  const { index } = useAtParentIndex(BREADCRUMB_COUNT_BREADCRUMB_ITEM_KEY)

  if (!parentProvider || !bindParent || !index) {
    throw Error('<var-breadcrumb-item/> must in <var-breadcrumb/>')
  }

  return {
    index,
    breadcrumb: parentProvider,
    bindBreadcrumb: bindParent,
  }
}
