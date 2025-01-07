import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue'
import { type Placement as PopperPlacement, type PositioningStrategy } from '@popperjs/core'
import computeStyles from '@popperjs/core/lib/modifiers/computeStyles.js'
import flip from '@popperjs/core/lib/modifiers/flip.js'
import offset from '@popperjs/core/lib/modifiers/offset.js'
import { createPopper } from '@popperjs/core/lib/popper-lite.js'
import { type Instance, type Modifier } from '@popperjs/core/lib/types'
import { call, doubleRaf, getStyle, isString, preventDefault } from '@varlet/shared'
import { onWindowResize, useEventListener, useVModel } from '@varlet/use'
import { useStack } from '../context/stack'
import { useZIndex } from '../context/zIndex'
import { type ListenerProp } from '../utils/components'
import { toPxNum } from '../utils/elements'

export type NeededPopperPlacement = Exclude<PopperPlacement, 'auto' | 'auto-start' | 'auto-end'>

export interface Position {
  placement: NeededPopperPlacement
  skidding: number
  distance: number
}

export interface ReferenceSize {
  width: number
  height: number
}

export type Reference = string | HTMLElement

export type Placement =
  | NeededPopperPlacement
  | 'cover-top'
  | 'cover-top-start'
  | 'cover-top-end'
  | 'cover-bottom'
  | 'cover-bottom-start'
  | 'cover-bottom-end'
  | 'cover-left'
  | 'cover-right'

export type Trigger = 'hover' | 'click' | 'manual'

export interface UsePopoverOptions {
  show: boolean
  trigger: Trigger
  placement: Placement
  strategy: PositioningStrategy
  disabled: boolean
  offsetX: string | number
  offsetY: string | number
  reference?: string | HTMLElement
  closeOnClickReference?: boolean
  closeOnKeyEscape?: boolean
  onOpen?: ListenerProp<() => void>
  onClose?: ListenerProp<() => void>
  onClosed?: ListenerProp<() => void>
  onClickOutside?: ListenerProp<(event: Event) => void>
  cascadeOptimization?: boolean
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>
}

export function usePopover(options: UsePopoverOptions) {
  const host: Ref<null | HTMLElement> = ref(null)
  const popover: Ref<null | HTMLElement> = ref(null)
  const referenceSize: Ref<ReferenceSize> = ref({ width: 0, height: 0 })
  const show = useVModel(options, 'show', {
    passive: true,
    defaultValue: false,
    emit(_event, value) {
      if (value) {
        call(options.onOpen)
      } else {
        call(options.onClose)
      }
    },
  })

  const { zIndex } = useZIndex(() => show.value, 1)
  useStack(() => show.value, zIndex)

  let popoverInstance: Instance | null = null
  let reference: Reference | undefined = undefined
  let enterPopover = false
  let enterReference = false
  let allowClose = true

  useEventListener(() => window, 'keydown', handleKeydown)
  watch(() => [options.offsetX, options.offsetY, options.placement, options.strategy], resize)
  watch(() => options.disabled, close)
  watch(
    () => show.value,
    (newValue) => {
      if (newValue) {
        resize()
      }
    },
  )

  onWindowResize(resize)
  onMounted(createPopperInstance)
  onUnmounted(destroyPopperInstance)

  function createPopperInstance() {
    const reference = getReference()!

    popoverInstance = createPopper(reference, popover.value!, getPopperOptions())
    reference.addEventListener('mouseenter', handleReferenceMouseenter)
    reference.addEventListener('mouseleave', handleReferenceMouseleave)
    reference.addEventListener('click', handleReferenceClick)
    document.addEventListener('click', handleClickOutside)
  }

  function destroyPopperInstance() {
    const reference = getReference()

    if (reference) {
      reference.removeEventListener('mouseenter', handleReferenceMouseenter)
      reference.removeEventListener('mouseleave', handleReferenceMouseleave)
      reference.removeEventListener('click', handleReferenceClick)
    }

    popoverInstance!.destroy()
    document.removeEventListener('click', handleClickOutside)
  }

  function computeReferenceSize() {
    const reference = getReference()
    if (!reference) {
      return
    }

    const { width, height } = getStyle(reference)

    referenceSize.value = {
      width: toPxNum(width),
      height: toPxNum(height),
    }
  }

  function getTransformOrigin() {
    switch (options.placement) {
      case 'top':
      case 'cover-bottom':
        return 'bottom'

      case 'top-start':
      case 'right-end':
      case 'cover-bottom-start':
        return 'bottom left'

      case 'top-end':
      case 'left-end':
      case 'cover-bottom-end':
        return 'bottom right'

      case 'bottom':
      case 'cover-top':
        return 'top'

      case 'bottom-start':
      case 'right-start':
      case 'cover-top-start':
        return 'top left'

      case 'bottom-end':
      case 'left-start':
      case 'cover-top-end':
        return 'top right'

      case 'left':
      case 'cover-right':
        return 'right'

      case 'right':
      case 'cover-left':
        return 'left'
    }
  }

  function handleReferenceMouseenter() {
    if (options.trigger !== 'hover') {
      return
    }

    enterReference = true

    open()
  }

  async function handleReferenceMouseleave() {
    if (options.trigger !== 'hover') {
      return
    }

    enterReference = false

    await doubleRaf()

    if (enterPopover) {
      return
    }

    close()
  }

  function handlePopoverMouseenter() {
    if (options.trigger !== 'hover') {
      return
    }

    enterPopover = true

    if (options.cascadeOptimization) {
      allowClose = false
    }
  }

  async function handlePopoverMouseleave() {
    if (options.trigger !== 'hover') {
      return
    }

    enterPopover = false

    await doubleRaf()

    if (enterReference) {
      return
    }

    close()
  }

  function handleReferenceClick() {
    if (options.trigger !== 'click') {
      return
    }

    if (options.closeOnClickReference && show.value) {
      close()
      return
    }

    open()
  }

  function handleClickOutside(e: Event) {
    const reference = getReference()

    if (reference && !reference.contains(e.target as Node)) {
      if (options.trigger !== 'click') {
        return
      }

      handlePopoverClose()
      call(options.onClickOutside, e)
    }
  }

  function handlePopoverClose() {
    close()
  }

  function handleClosed() {
    resize()
    call(options.onClosed)
  }

  function getPosition(): Position {
    const { offsetX, offsetY, placement } = options

    computeReferenceSize()

    const offset = {
      x: toPxNum(offsetX),
      y: toPxNum(offsetY),
    }

    switch (placement) {
      case 'cover-top':
        return {
          placement: 'bottom',
          skidding: offset.x,
          distance: offset.y - referenceSize.value.height,
        }

      case 'cover-top-start':
        return {
          placement: 'bottom-start',
          skidding: offset.x,
          distance: offset.y - referenceSize.value.height,
        }

      case 'cover-top-end':
        return {
          placement: 'bottom-end',
          skidding: offset.x,
          distance: offset.y - referenceSize.value.height,
        }

      case 'cover-bottom':
        return {
          placement: 'top',
          skidding: offset.x,
          distance: -offset.y - referenceSize.value.height,
        }

      case 'cover-bottom-start':
        return {
          placement: 'top-start',
          skidding: offset.x,
          distance: -offset.y - referenceSize.value.height,
        }

      case 'cover-bottom-end':
        return {
          placement: 'top-end',
          skidding: offset.x,
          distance: -offset.y - referenceSize.value.height,
        }

      case 'cover-left':
        return {
          placement: 'right',
          skidding: offset.y,
          distance: offset.x - referenceSize.value.width,
        }

      case 'cover-right':
        return {
          placement: 'left',
          skidding: offset.y,
          distance: -offset.x - referenceSize.value.width,
        }

      case 'left':
      case 'left-start':
      case 'left-end':
        return {
          placement,
          skidding: offset.y,
          distance: -offset.x,
        }

      case 'top':
      case 'top-start':
      case 'top-end':
        return {
          placement,
          skidding: offset.x,
          distance: -offset.y,
        }

      case 'bottom':
      case 'bottom-start':
      case 'bottom-end':
        return {
          placement,
          skidding: offset.x,
          distance: offset.y,
        }

      case 'right':
      case 'right-start':
      case 'right-end':
        return {
          placement,
          skidding: offset.y,
          distance: offset.x,
        }
    }
  }

  function getPopperOptions() {
    const { placement, skidding, distance } = getPosition()
    const modifiers: Modifier<any, any>[] = [
      {
        ...flip,
        enabled: show.value,
      },
      {
        ...offset,
        options: {
          offset: [skidding, distance],
        },
      },
      {
        ...computeStyles,
        options: {
          adaptive: false,
          gpuAcceleration: false,
        },
        enabled: show.value,
      },
      {
        name: 'applyTransformOrigin',
        enabled: show.value,
        phase: 'beforeWrite',
        fn({ state }) {
          state.styles.popper.transformOrigin = getTransformOrigin()
        },
      },
    ]

    return {
      placement,
      modifiers,
      strategy: options.strategy,
    }
  }

  function getReference() {
    const targetReference = reference ?? options.reference ?? host.value

    if (isString(targetReference)) {
      return host.value?.querySelector(targetReference)
    }

    return targetReference
  }

  function setAllowClose(value: boolean) {
    allowClose = value
  }

  function setReference(newReference: Reference) {
    destroyPopperInstance()
    reference = newReference
    createPopperInstance()
  }

  function handleKeydown(event: KeyboardEvent) {
    const { closeOnKeyEscape = false } = options
    if (event.key === 'Escape' && closeOnKeyEscape && show.value) {
      preventDefault(event)
      close()
    }
  }

  // expose
  function resize() {
    popoverInstance!.setOptions(getPopperOptions())
  }

  // expose
  function open() {
    if (options.disabled) {
      return
    }

    show.value = true
    call(options['onUpdate:show'], true)
  }

  // expose
  function close() {
    if (!allowClose) {
      return
    }

    show.value = false
    call(options['onUpdate:show'], false)
  }

  return {
    show,
    popover,
    zIndex,
    host,
    referenceSize,
    handlePopoverClose,
    handlePopoverMouseenter,
    handlePopoverMouseleave,
    handleClosed,
    setReference,
    setAllowClose,
    resize,
    open,
    close,
  }
}
