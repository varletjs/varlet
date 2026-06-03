import { onWindowResize, useResizeObserver } from '@varlet/use'
import { nextTick, ref, watch, type WatchSource } from 'vue'

export function useContainerScroll(sources: WatchSource[] = []) {
  const container = ref<HTMLElement>()
  const scrollLeft = ref(0)
  const maxScrollDistance = ref(0)

  watch(sources, syncContainerScrollAfterRender, { immediate: true, flush: 'post' })

  useResizeObserver(container, syncContainerScrollAfterRender)
  onWindowResize(syncContainerScrollAfterRender)

  function syncContainerScrollAfterRender() {
    nextTick(syncContainerScroll)
  }

  function syncContainerScroll() {
    if (container.value) {
      updateContainerScrollState(container.value)
    }
  }

  function updateContainerScrollState(element: HTMLElement) {
    scrollLeft.value = element.scrollLeft
    maxScrollDistance.value = Math.max(element.scrollWidth - element.clientWidth, 0)
  }

  function handleContainerScroll(event: Event) {
    updateContainerScrollState(event.currentTarget as HTMLElement)
  }

  return {
    container,
    scrollLeft,
    maxScrollDistance,
    handleContainerScroll,
    syncContainerScroll,
  }
}
