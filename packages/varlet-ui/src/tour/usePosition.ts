import { computed, ComputedRef, ref, watch, type Ref } from 'vue'
import { getRect, inViewport, toNumber } from '@varlet/shared'
import { onWindowResize } from '@varlet/use'
import { TourGap } from './props'

export interface PosInfo {
  top: number
  left: number
  width: number
  height: number
  radius: number
}

export function usePosition(target: Ref<HTMLElement | null>, open: ComputedRef<boolean>, gap: ComputedRef<TourGap>) {
  const innerPosInfo: Ref<PosInfo | null> = ref(null)
  const targetEl = computed(() => target.value)

  const posInfo: ComputedRef<PosInfo | null> = computed(() => {
    if (!innerPosInfo.value) {
      return null
    }

    const { top, left, width, height } = innerPosInfo.value
    const { offset, radius } = gap.value
    const gapOffset = toNumber(offset)
    const gapRadius = toNumber(radius)

    return {
      left: left - gapOffset,
      top: top - gapOffset,
      width: width + gapOffset * 2,
      height: height + gapOffset * 2,
      radius: gapRadius,
    }
  })

  watch([targetEl, open], updatePosInfo, { immediate: true })
  onWindowResize(updatePosInfo)

  function updatePosInfo() {
    if (!open.value || !targetEl.value) {
      innerPosInfo.value = null
      return
    }
    if (!inViewport(targetEl.value)) {
      targetEl.value.scrollIntoView({ block: 'center' })
    }

    const { top, left, width, height } = getRect(targetEl.value)
    innerPosInfo.value = {
      top,
      left,
      width,
      height,
      radius: 0,
    }
  }

  return {
    posInfo,
  }
}
