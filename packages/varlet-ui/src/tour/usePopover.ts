import { computed, ComputedRef, onUnmounted, ref, watch, type Ref } from 'vue'
import { type Placement as PopperPlacement } from '@popperjs/core'
import arrowModifier from '@popperjs/core/lib/modifiers/arrow.js'
import computeStyles from '@popperjs/core/lib/modifiers/computeStyles.js'
import flip from '@popperjs/core/lib/modifiers/flip.js'
import offset from '@popperjs/core/lib/modifiers/offset.js'
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js'
import { createPopper } from '@popperjs/core/lib/popper-lite.js'
import { type Instance, type Modifier } from '@popperjs/core/lib/types'
import { getRect, toNumber } from '@varlet/shared'
import { onWindowResize } from '@varlet/use'
import { useStack } from '../context/stack'
import { useZIndex } from '../context/zIndex'
import { TourGap } from './props'

export type NeededPopperPlacement = Exclude<PopperPlacement, 'auto' | 'auto-start' | 'auto-end'>

export type Placement = NeededPopperPlacement

export interface UsePopoverOptions {
  open: ComputedRef<boolean>
  arrow: ComputedRef<boolean>
  gap: ComputedRef<TourGap>
  placement: ComputedRef<Placement>
}

export function usePopover(options: UsePopoverOptions) {
  const { open, arrow, gap, placement } = options
  const host: Ref<null | HTMLElement> = ref(null)
  const popover: Ref<null | HTMLElement> = ref(null)
  const arrowRef: Ref<null | HTMLElement> = ref(null)
  const arrowSize = computed(() => {
    if (arrowRef.value) {
      return getRect(arrowRef.value).height / 2
    }
    return 0
  })

  const { zIndex } = useZIndex(() => open.value, 1)
  useStack(() => open.value, zIndex)

  let popoverInstance: Instance | null = null

  watch(() => [arrowRef.value, gap.value.offset, gap.value.radius, placement.value], resize)
  watch(() => [host.value, popover.value], createPopperInstance)

  onWindowResize(resize)
  onUnmounted(destroyPopperInstance)

  function createPopperInstance() {
    destroyPopperInstance()

    if (!host.value || !popover.value) {
      return
    }

    popoverInstance = createPopper(host.value!, popover.value!, getPopperOptions())
  }

  function destroyPopperInstance() {
    popoverInstance?.destroy()
    popoverInstance = null
  }

  function getPopperOptions() {
    const modifiers: Modifier<any, any>[] = [
      {
        ...flip,
        enabled: open.value,
        options: {
          fallbackPlacements: ['bottom', 'right', 'left', 'top'],
        },
      },
      {
        ...offset,
        options: {
          offset: [0, toNumber(gap.value.offset) + arrowSize.value],
        },
      },
      {
        ...computeStyles,
        options: {
          adaptive: false,
          gpuAcceleration: false,
        },
        enabled: open.value,
      },
      {
        ...preventOverflow,
        enabled: open.value,
      },
      {
        ...arrowModifier,
        options: {
          element: arrowRef.value,
          padding: gap.value.radius,
        },
        enabled: open.value && arrow.value,
      },
    ]

    return {
      placement: placement.value,
      modifiers,
    }
  }

  // expose
  function resize() {
    popoverInstance?.setOptions(getPopperOptions())
  }

  return {
    popover,
    arrowRef,
    zIndex,
    host,
    resize,
  }
}
