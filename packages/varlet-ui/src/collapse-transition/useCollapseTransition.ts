import { raf, doubleRaf } from '@varlet/shared'
import { Ref } from 'vue'

export function useCollapseTransition(
  contentEl: Ref<HTMLDivElement | null>,
  showContent: Ref<boolean>,
  isShow: Ref<boolean>
) {
  // ensure to trigger transitionend
  let isInitToTrigger = true

  async function openPanel() {
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

  const closePanel = async () => {
    if (!contentEl.value) {
      return
    }

    const { offsetHeight } = contentEl.value
    contentEl.value.style.height = offsetHeight + 'px'
    await raf()
    contentEl.value.style.height = 0 + 'px'
  }

  const handleTransitionEnd = () => {
    if (!isShow.value) {
      showContent.value = false
    }

    contentEl.value!.style.height = ''
  }

  const handleTransitionStart = () => {
    isInitToTrigger = false
  }

  return {
    openPanel,
    closePanel,
    handleTransitionEnd,
    handleTransitionStart,
  }
}
