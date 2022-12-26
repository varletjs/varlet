import type { ComputedRef } from 'vue'
import { useAtChildrenCounter, useChildren } from '../utils/components'

export interface BreadcrumbsProvider {
  length: ComputedRef<number>
  separator: ComputedRef<string>
}

export const BREADCRUMBS_BIND_BREADCRUMB_ITEM_KEY = Symbol('BREADCRUMBS_BIND_BREADCRUMB_KEY')
export const BREADCRUMBS_COUNT_BREADCRUMB_ITEM_KEY = Symbol('BREADCRUMBS_COUNT_BREADCRUMB_KEY')

export function useBreadcrumbsList() {
  const { childProviders, bindChildren } = useChildren<BreadcrumbsProvider, null>(BREADCRUMBS_BIND_BREADCRUMB_ITEM_KEY)
  const { length } = useAtChildrenCounter(BREADCRUMBS_COUNT_BREADCRUMB_ITEM_KEY)

  return {
    length,
    breadcrumbList: childProviders,
    bindBreadcrumbList: bindChildren,
  }
}
