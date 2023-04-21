import { ref, Ref } from 'vue'

type ScrollData = {
  scrollTop: number
  scrollRatio: number
}
type HandleScroll = (offsetTop: number, isFixed: boolean, scrollData: ScrollData) => void

export type UseStickyDefault<T> = {
  handleScroll: HandleScroll
  isFixed: Ref<boolean>
  options: T
}

type Getter<T> = (params: GetterParams & ScrollData) => T

type GetterParams = {
  stickyIsFixed: boolean
  stickyOffsetTop: number
}

export const useSticky = function <T = any>(initialValue: T, getter: Getter<T>): UseStickyDefault<Ref<T | undefined>> {
  const isFixed = ref(false)
  const options: Ref<any> = ref(initialValue)

  const handleScroll: HandleScroll = (stickyOffsetTop, stickyIsFixed, scrollData) => {
    console.log(stickyOffsetTop, stickyIsFixed, scrollData)

    isFixed.value = stickyIsFixed
    options.value = getter({
      stickyIsFixed,
      stickyOffsetTop,
      ...scrollData,
    })
  }

  return {
    options,
    handleScroll,
    isFixed,
  }
}
