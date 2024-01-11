import { raf, doubleRaf } from '@varlet/shared'
import { type ComputedRef, type Ref, nextTick, watch } from 'vue'

export interface UseCollapseTransitionOptions {
  contentEl: Ref<HTMLElement | null>
  showContent: Ref<boolean>
  expand: Ref | ComputedRef
}

export function useCollapseTransition(options: UseCollapseTransitionOptions) {
  const { contentEl, showContent, expand } = options

  // ensure to trigger transitionend
  let isInitToTrigger = true

  watch(
    expand,
    (value) => {
      nextTick(() => {
        value ? open() : close()
      })
    },
    { immediate: true }
  )

  async function open() {
    if (!contentEl.value) {
      return
    }

    contentEl.value.style.height = ''
    showContent.value = true
    await raf()

    if (!contentEl.value) {
      return
    }

    const { offsetHeight } = contentEl.value
    contentEl.value.style.height = 0 + 'px'
    await raf()

    if (!contentEl.value) {
      return
    }

    contentEl.value.style.height = offsetHeight + 'px'

    if (!isInitToTrigger) {
      return
    }

    await doubleRaf()

    if (isInitToTrigger) {
      handleTransitionEnd()
    }
  }

  const close = async () => {
    if (!contentEl.value) {
      return
    }

    const { offsetHeight } = contentEl.value
    contentEl.value.style.height = offsetHeight + 'px'
    await raf()
    contentEl.value.style.height = 0 + 'px'
  }

  const handleTransitionEnd = () => {
    if (!expand.value) {
      showContent.value = false
    }

    contentEl.value!.style.height = ''
  }

  const handleTransitionStart = () => {
    isInitToTrigger = false
  }

  return {
    handleTransitionEnd,
    handleTransitionStart,
  }
}
