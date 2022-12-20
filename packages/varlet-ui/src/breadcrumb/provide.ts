import { useAtParentIndex, useParent } from '../utils/components'
import {
  BREADCRUMBS_BIND_BREADCRUMB_ITEM_KEY,
  BREADCRUMBS_COUNT_BREADCRUMB_ITEM_KEY,
  BreadcrumbsProvider,
} from '../breadcrumbs/provide'

export interface BreadcrumbProvider {}

export function useBreadcrumb() {
  const { parentProvider, bindParent } = useParent<BreadcrumbsProvider, BreadcrumbProvider>(
    BREADCRUMBS_BIND_BREADCRUMB_ITEM_KEY
  )
  const { index } = useAtParentIndex(BREADCRUMBS_COUNT_BREADCRUMB_ITEM_KEY)

  if (!parentProvider || !bindParent || !index) {
    throw Error('<var-breadcrumb/> must in <var-breadcrumbs/>')
  }

  return {
    index,
    breadcrumb: parentProvider,
    bindBreadcrumb: bindParent,
  }
}
