import { ref, Ref } from 'vue'

type UseStickyHandleScroll = (
  stickyOffsetTop: number,
  stickyIsFixed: boolean,
  remainOffsetTop: number,
  parentScrollTop: number
) => void

export type UseStickyDefault<T> = {
  handleScroll: UseStickyHandleScroll
  isFixed: Ref<boolean>
  options: T
}

type Getter<T> = (params: GetterParams) => T

type GetterParams = {
  stickyIsFixed: boolean
  stickyOffsetTop: number
  remainOffsetTop: number
  maxRemainOffsetTop: number
  percentage: number
}

export const useSticky = function <T = any>(initialValue: T, getter: Getter<T>): UseStickyDefault<Ref<T | undefined>> {
  const isFixed = ref(false)
  const offsetTop = ref(0)
  const percentage = ref(1)
  const maxRemainOffsetTop: Ref<number | undefined> = ref(undefined)
  const options: Ref<any> = ref(initialValue)

  const handleScroll: UseStickyHandleScroll = (stickyOffsetTop, stickyIsFixed, remainOffsetTop, parentScrollTop) => {
    maxRemainOffsetTop.value = remainOffsetTop + parentScrollTop
    offsetTop.value = remainOffsetTop
    isFixed.value = stickyIsFixed
    percentage.value = remainOffsetTop / maxRemainOffsetTop.value
    options.value = getter({
      stickyIsFixed,
      stickyOffsetTop,
      remainOffsetTop,
      maxRemainOffsetTop: maxRemainOffsetTop.value,
      percentage: percentage.value,
    })
  }

  return {
    options,
    handleScroll,
    isFixed,
  }
}
