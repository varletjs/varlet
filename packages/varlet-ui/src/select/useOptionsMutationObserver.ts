import type { Ref } from 'vue'
import { nextTick, ref, watch } from 'vue'
import { getStyle } from '@varlet/shared'
import { onSmartUnmounted } from '@varlet/use'

export interface UseOptionsMutationObserverOptions {
  onAfterUpdate?: () => void
}

export function useOptionsMutationObserver(
  container: Ref<HTMLElement | null>,
  showContainer: Ref<boolean>,
  options?: UseOptionsMutationObserverOptions,
) {
  const showEmpty = ref(false)
  let observer: MutationObserver | null = null

  watch(
    () => showContainer.value,
    async () => {
      disconnectObserver()

      if (!showContainer.value) {
        return
      }

      await nextTick()
      connectObserver()
      handler()
    },
    { immediate: true },
  )

  onSmartUnmounted(disconnectObserver)

  function handler() {
    const el = container.value
    const optionEls = el?.querySelectorAll('.var-option')

    showEmpty.value = !optionEls?.length
      ? true
      : Array.from(optionEls).every((option) => getStyle(option as HTMLElement).display === 'none')

    options?.onAfterUpdate?.()
  }

  function connectObserver() {
    if (!container.value) {
      return
    }

    observer = new MutationObserver(async () => {
      await nextTick()
      handler()
    })

    observer.observe(container.value, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class'],
    })
  }

  function disconnectObserver() {
    observer?.disconnect()
    observer = null
  }

  return {
    showEmpty,
  }
}
