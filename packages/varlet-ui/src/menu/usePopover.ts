import flip from '@popperjs/core/lib/modifiers/flip'
import offset from '@popperjs/core/lib/modifiers/offset'
import { useClickOutside, useVModel } from '@varlet/use'
import { doubleRaf, toPxNum } from '../utils/elements'
import { call } from '../utils/components'
import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue'
import { createPopper } from '@popperjs/core/lib/popper-lite'
import { useZIndex } from '../context/zIndex'
import { type Instance, type Modifier } from '@popperjs/core/lib/types'
import { type Placement as PopperPlacement } from '@popperjs/core'

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
  disabled: boolean
  offsetX: string | number
  offsetY: string | number
  reference?: string
  onOpen?(): void
  onClose?(): void
  'onUpdate:show'?(show: boolean): void
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
    const { width, height } = window.getComputedStyle(host.value!)

    hostSize.value = {
      width: toPxNum(width),
      height: toPxNum(height),
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
    open()
  }

  const handlePopoverClose = () => {
    show.value = false
    call(options['onUpdate:show'], false)
  }

  const handleClickOutside = () => {
    if (options.trigger !== 'click') {
      return
    }

    handlePopoverClose()
  }

  const getPosition = (): Position => {
    computeHostSize()

    const offset = {
      x: toPxNum(options.offsetX),
      y: toPxNum(options.offsetY),
    }

    switch (options.placement) {
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
          placement: options.placement,
          skidding: offset.y,
          distance: -offset.x,
        }

      case 'top':
      case 'top-start':
      case 'top-end':
        return {
          placement: options.placement,
          skidding: offset.x,
          distance: -offset.y,
        }

      case 'bottom':
      case 'bottom-start':
      case 'bottom-end':
        return {
          placement: options.placement,
          skidding: offset.x,
          distance: offset.y,
        }

      case 'right':
      case 'right-start':
      case 'right-end':
        return {
          placement: options.placement,
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
    ]

    return {
      placement,
      modifiers,
    }
  }

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

  useClickOutside(host, 'click', handleClickOutside)

  watch(() => options.offsetX, resize)
  watch(() => options.offsetY, resize)
  watch(() => options.placement, resize)
  watch(() => options.disabled, close)

  onMounted(() => {
    const reference = options.reference ? host.value?.querySelector(options.reference) : host.value

    popoverInstance = createPopper(reference ?? host.value!, popover.value!, getPopperOptions())
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
    resize,
    open,
    close,
  }
}
