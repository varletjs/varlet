import type { ComputedRef } from 'vue'
import { useAtChildrenCounter, useChildren } from '../utils/components'
import type { BreadcrumbItemProvider } from '../breadcrumb-item/provide'

export interface BreadcrumbProvider {
  length: ComputedRef<number>
  separator: ComputedRef<string>
}

export const BREADCRUMB_BIND_BREADCRUMB_ITEM_KEY = Symbol('BREADCRUMB_BIND_BREADCRUMB_ITEM_KEY')
export const BREADCRUMB_COUNT_BREADCRUMB_ITEM_KEY = Symbol('BREADCRUMB_COUNT_BREADCRUMB_ITEM_KEY')

export function useBreadcrumbList() {
  const { childProviders, bindChildren } = useChildren<BreadcrumbProvider, BreadcrumbItemProvider>(
    BREADCRUMB_BIND_BREADCRUMB_ITEM_KEY
  )
  const { length } = useAtChildrenCounter(BREADCRUMB_COUNT_BREADCRUMB_ITEM_KEY)

  return {
    length,
    breadcrumbList: childProviders,
    bindBreadcrumbList: bindChildren,
  }
}
