import { useChildren } from '@varlet/use'
import type { ComputedRef } from 'vue'

export interface BreadcrumbsProvider {
  length: ComputedRef<number>
  separator: ComputedRef<string>
}

export const BREADCRUMBS_BIND_BREADCRUMB_ITEM_KEY = Symbol('BREADCRUMBS_BIND_BREADCRUMB_KEY')

export function useBreadcrumbsList() {
  const { childProviders, bindChildren, length } = useChildren<BreadcrumbsProvider, null>(
    BREADCRUMBS_BIND_BREADCRUMB_ITEM_KEY
  )

  return {
    length,
    breadcrumbList: childProviders,
    bindBreadcrumbList: bindChildren,
  }
}
