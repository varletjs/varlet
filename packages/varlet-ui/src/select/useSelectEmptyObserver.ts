import type { Ref } from 'vue'
import { nextTick, ref, watch } from 'vue'
import { getStyle } from '@varlet/shared'
import { onSmartUnmounted } from '@varlet/use'

export interface UseSelectEmptyObserverOptions {
  onAfterUpdate?: () => void
}

export function useSelectEmptyObserver(
  menuEl: Ref<HTMLElement | null>,
  showMenu: Ref<boolean>,
  options?: UseSelectEmptyObserverOptions,
) {
  const showEmpty = ref(false)
  let observer: MutationObserver | null = null

  watch(
    () => showMenu.value,
    async () => {
      disconnectObserver()

      if (!showMenu.value) {
        return
      }

      await nextTick()
      connectObserver()
      updateShowEmpty()
    },
    { immediate: true },
  )

  onSmartUnmounted(disconnectObserver)

  function updateShowEmpty() {
    const el = menuEl.value
    const optionEls = el?.querySelectorAll('.var-option')

    showEmpty.value = !optionEls?.length
      ? true
      : Array.from(optionEls).every((option) => getStyle(option as HTMLElement).display === 'none')

    options?.onAfterUpdate?.()
  }

  function connectObserver() {
    if (!menuEl.value) {
      return
    }

    observer = new MutationObserver(async () => {
      await nextTick()
      updateShowEmpty()
    })

    observer.observe(menuEl.value, {
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
    updateShowEmpty,
  }
}
