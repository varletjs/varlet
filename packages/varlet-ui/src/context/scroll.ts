import { watch, ref, onMounted, onBeforeUnmount } from 'vue'
import type { Ref } from 'vue'

export function useScroll(node: any, floating: any) {
  const top: Ref<number> = ref(0)
  const left: Ref<number> = ref(0)

  let listening = false

  const scrollHandler = () => {
    top.value = node().scrollTop
    left.value = node().scrollLeft
  }

  watch(node, (newValue) => {
    if (!newValue || !floating) return

    if (listening) return

    listening = true

    newValue.addEventListener('scroll', scrollHandler)
  })

  watch(floating, (newValue) => {
    if (!node()) return

    if (newValue) {
      if (listening) return

      listening = true
      node().addEventListener('scroll', scrollHandler)
      return
    }

    listening = false
    node().removeEventListener('scroll', scrollHandler)
  })

  onMounted(() => {
    if (node() && floating) {
      listening = true
      node().addEventListener('scroll', scrollHandler)
    }
  })

  return { top, left }
}
