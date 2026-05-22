import { call, clamp, isBoolean } from '@varlet/shared'
import { computed, watch } from 'vue'
import type { ListenerProp } from '../utils/components'
import type { DataTablePagination } from './props'

const defaultPaginationOptions = {
  simple: false,
  disabled: false,
  showSizeChanger: true,
  showQuickJumper: false,
  maxPagerCount: 5,
  sizeOption: [10, 20, 50, 100],
  showTotal: undefined,
} satisfies Required<
  Pick<
    DataTablePagination,
    'simple' | 'disabled' | 'showSizeChanger' | 'showQuickJumper' | 'maxPagerCount' | 'sizeOption'
  >
> &
  Pick<DataTablePagination, 'showTotal'>

interface UsePaginationOptions<Row = Record<string, any>> {
  pagination: () => boolean | DataTablePagination
  remote: () => boolean
  page: () => number
  pageSize: () => number
  total: () => number | undefined
  data: () => Row[]
  onUpdatePage?: () => ListenerProp<(page: number) => void> | undefined
}

export function usePagination<Row = Record<string, any>>({
  pagination,
  remote,
  page,
  pageSize,
  total,
  data,
  onUpdatePage,
}: UsePaginationOptions<Row>) {
  const paginationProps = computed(() => {
    const resolvedPagination = pagination()

    if (isBoolean(resolvedPagination)) {
      return defaultPaginationOptions
    }

    return {
      ...defaultPaginationOptions,
      ...resolvedPagination,
    }
  })

  const paginationTotal = computed(() => {
    if (pagination() === false) {
      return data().length
    }

    return remote() ? (total() ?? 0) : data().length
  })

  const showPagination = computed(() => {
    return pagination() !== false && paginationTotal.value > 0
  })

  const pageCount = computed(() => {
    if (!showPagination.value) {
      return 1
    }

    return clamp(Math.ceil(paginationTotal.value / pageSize()), 1, Number.MAX_SAFE_INTEGER)
  })

  const normalizedPage = computed(() => {
    if (!showPagination.value) {
      return 1
    }

    return clamp(page(), 1, pageCount.value)
  })

  const pagedData = computed(() => {
    if (!showPagination.value || remote()) {
      return data()
    }

    const start = (normalizedPage.value - 1) * pageSize()
    return data().slice(start, start + pageSize())
  })

  watch(
    [pagination, remote, page, normalizedPage],
    ([currentPagination, currentRemote, currentPage, nextPage]) => {
      if (currentPagination === false || currentRemote || currentPage === nextPage) {
        return
      }

      call(onUpdatePage?.(), nextPage)
    },
    { immediate: true },
  )

  return {
    paginationProps,
    paginationTotal,
    showPagination,
    normalizedPage,
    pagedData,
  }
}
