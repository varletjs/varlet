import { useAtParentIndex, useParent } from '../utils/components'
import {
  BREADCRUMB_BIND_BREADCRUMB_ITEM_KEY,
  BREADCRUMB_COUNT_BREADCRUMB_ITEM_KEY,
  BreadcrumbProvider,
} from '../breadcrumb/provide'

export interface BreadcrumbsProvider {}

export function useBreadcrumbs() {
  const { parentProvider, bindParent } = useParent<BreadcrumbProvider, BreadcrumbsProvider>(
    BREADCRUMB_BIND_BREADCRUMB_ITEM_KEY
  )
  const { index } = useAtParentIndex(BREADCRUMB_COUNT_BREADCRUMB_ITEM_KEY)

  if (!parentProvider || !bindParent || !index) {
    throw Error('<var-breadcrumbs/> must in <var-breadcrumb/>')
  }

  return {
    index,
    breadcrumb: parentProvider,
    bindBreadcrumb: bindParent,
  }
}
