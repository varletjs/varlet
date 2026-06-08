import { doubleRaf, raf } from '@varlet/shared'
import { nextTick, watch, type ComputedRef, type Ref } from 'vue'

export interface UseCollapseTransitionOptions {
  contentEl: Ref<HTMLElement | null>
  showContent: Ref<boolean>
  expand: Ref | ComputedRef
}

export function useCollapseTransition(options: UseCollapseTransitionOptions) {
  const { contentEl, showContent, expand } = options

  // ensure to trigger transitionend
  let isInitToTrigger = true
  let transitionVersion = 0
  let startedTransitionVersion = 0

  watch(
    expand,
    (value) => {
      const version = ++transitionVersion

      nextTick(() => {
        value ? open(version) : close(version)
      })
    },
    { immediate: true },
  )

  function isLatestTransition(version: number) {
    return version === transitionVersion
  }

  async function open(version: number) {
    if (!contentEl.value) {
      return
    }

    contentEl.value.style.height = ''
    showContent.value = true
    await raf()

    if (!contentEl.value || !isLatestTransition(version)) {
      return
    }

    const { offsetHeight } = contentEl.value
    contentEl.value.style.height = 0 + 'px'
    await raf()

    if (!contentEl.value || !isLatestTransition(version)) {
      return
    }

    contentEl.value.style.height = offsetHeight + 'px'

    if (!isInitToTrigger) {
      return
    }

    await doubleRaf()

    if (isInitToTrigger && isLatestTransition(version)) {
      handleTransitionEnd()
    }
  }

  const close = async (version: number) => {
    if (!contentEl.value) {
      return
    }

    const { offsetHeight } = contentEl.value
    contentEl.value.style.height = offsetHeight + 'px'
    await raf()

    if (!contentEl.value || !isLatestTransition(version)) {
      return
    }

    contentEl.value.style.height = 0 + 'px'
  }

  const handleTransitionEnd = (event?: TransitionEvent) => {
    if (event && (event.target !== contentEl.value || event.propertyName !== 'height')) {
      return
    }

    if (event && startedTransitionVersion !== transitionVersion) {
      return
    }

    if (!expand.value) {
      showContent.value = false
    }

    contentEl.value!.style.height = ''
  }

  const handleTransitionStart = (event?: TransitionEvent) => {
    if (event && (event.target !== contentEl.value || event.propertyName !== 'height')) {
      return
    }

    startedTransitionVersion = transitionVersion
    isInitToTrigger = false
  }

  return {
    handleTransitionEnd,
    handleTransitionStart,
  }
}
