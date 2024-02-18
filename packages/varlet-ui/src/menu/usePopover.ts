import flip from '@popperjs/core/lib/modifiers/flip.js'
import offset from '@popperjs/core/lib/modifiers/offset.js'
import computeStyles from '@popperjs/core/lib/modifiers/computeStyles.js'
import { useClickOutside, useVModel } from '@varlet/use'
import { doubleRaf, getStyle, call } from '@varlet/shared'
import { toPxNum } from '../utils/elements'
import { type ListenerProp } from '../utils/components'
import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue'
import { createPopper } from '@popperjs/core/lib/popper-lite.js'
import { useZIndex } from '../context/zIndex'
import { type Instance, type Modifier } from '@popperjs/core/lib/types'
import { type Placement as PopperPlacement, type PositioningStrategy } from '@popperjs/core'

export type NeededPopperPlacement = Exclude<PopperPlacement, 'auto' | 'auto-start' | 'auto-end'>

export interface Position {
  placement: NeededPopperPlacement
  skidding: number
  distance: number
}

export interface HostSize {
  width: number
  height: number
}

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

export interface UsePopoverOptions {
  show: boolean
  trigger: 'hover' | 'click'
  placement: Placement
  strategy: PositioningStrategy
  disabled: boolean
  offsetX: string | number
  offsetY: string | number
  reference?: string
  closeOnClickReference?: boolean
  onOpen?: ListenerProp<() => void>
  onClose?: ListenerProp<() => void>
  onClosed?: ListenerProp<() => void>
  onClickOutside?: ListenerProp<(event: Event) => void>
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>
}

export function usePopover(options: UsePopoverOptions) {
  const host: Ref<null | HTMLElement> = ref(null)
  const popover: Ref<null | HTMLElement> = ref(null)
  const hostSize: Ref<HostSize> = ref({ width: 0, height: 0 })
  const show = useVModel(options, 'show', {
    passive: true,
    defaultValue: false,
    emit(event, value) {
      if (value) {
        resize()
        call(options.onOpen)
      } else {
        call(options.onClose)
      }
    },
  })
  const { zIndex } = useZIndex(() => show.value, 1)

  let popoverInstance: Instance | null = null
  let enterPopover = false
  let enterHost = false

  const computeHostSize = () => {
    if (!host.value) {
      return
    }

    const { width, height } = getStyle(host.value)

    hostSize.value = {
      width: toPxNum(width),
      height: toPxNum(height),
    }
  }

  const getTransformOrigin = () => {
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

  const handleHostMouseenter = () => {
    if (options.trigger !== 'hover') {
      return
    }

    enterHost = true

    open()
  }

  const handleHostMouseleave = async () => {
    if (options.trigger !== 'hover') {
      return
    }

    enterHost = false

    await doubleRaf()

    if (enterPopover) {
      return
    }

    close()
  }

  const handlePopoverMouseenter = () => {
    if (options.trigger !== 'hover') {
      return
    }

    enterPopover = true
  }

  const handlePopoverMouseleave = async () => {
    if (options.trigger !== 'hover') {
      return
    }

    enterPopover = false

    await doubleRaf()

    if (enterHost) {
      return
    }

    close()
  }

  const handleHostClick = () => {
    if (options.closeOnClickReference && show.value) {
      close()
    } else {
      open()
    }
  }

  const handlePopoverClose = () => {
    close()
  }

  const handleClickOutside = (e: Event) => {
    if (options.trigger !== 'click') {
      return
    }

    handlePopoverClose()
    call(options.onClickOutside, e)
  }

  const handleClosed = () => {
    resize()
    call(options.onClosed)
  }

  const getPosition = (): Position => {
    const { offsetX, offsetY, placement } = options

    computeHostSize()

    const offset = {
      x: toPxNum(offsetX),
      y: toPxNum(offsetY),
    }

    switch (placement) {
      case 'cover-top':
        return {
          placement: 'bottom',
          skidding: offset.x,
          distance: offset.y - hostSize.value.height,
        }

      case 'cover-top-start':
        return {
          placement: 'bottom-start',
          skidding: offset.x,
          distance: offset.y - hostSize.value.height,
        }

      case 'cover-top-end':
        return {
          placement: 'bottom-end',
          skidding: offset.x,
          distance: offset.y - hostSize.value.height,
        }

      case 'cover-bottom':
        return {
          placement: 'top',
          skidding: offset.x,
          distance: -offset.y - hostSize.value.height,
        }

      case 'cover-bottom-start':
        return {
          placement: 'top-start',
          skidding: offset.x,
          distance: -offset.y - hostSize.value.height,
        }

      case 'cover-bottom-end':
        return {
          placement: 'top-end',
          skidding: offset.x,
          distance: -offset.y - hostSize.value.height,
        }

      case 'cover-left':
        return {
          placement: 'right',
          skidding: offset.y,
          distance: offset.x - hostSize.value.width,
        }

      case 'cover-right':
        return {
          placement: 'left',
          skidding: offset.y,
          distance: -offset.x - hostSize.value.width,
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

  const getPopperOptions = () => {
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

  const getReference = () => (options.reference ? host.value!.querySelector(options.reference)! : host.value!)

  // expose
  const resize = () => {
    popoverInstance!.setOptions(getPopperOptions())
  }

  // expose
  const open = () => {
    const { disabled } = options

    if (disabled) {
      return
    }

    show.value = true
    call(options['onUpdate:show'], true)
  }

  // expose
  const close = () => {
    show.value = false
    call(options['onUpdate:show'], false)
  }

  useClickOutside(getReference, 'click', handleClickOutside)

  watch(() => [options.offsetX, options.offsetY, options.placement, options.strategy], resize)
  watch(() => options.disabled, close)

  onMounted(() => {
    popoverInstance = createPopper(getReference() ?? host.value!, popover.value!, getPopperOptions())
  })
  onUnmounted(() => {
    popoverInstance!.destroy()
  })

  return {
    show,
    popover,
    zIndex,
    host,
    hostSize,
    handleHostClick,
    handleHostMouseenter,
    handleHostMouseleave,
    handlePopoverClose,
    handlePopoverMouseenter,
    handlePopoverMouseleave,
    handleClosed,
    resize,
    open,
    close,
  }
}
