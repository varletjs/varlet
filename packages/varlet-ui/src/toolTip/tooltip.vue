<template>
  <div ref="host" :class="n()" @click="handleClick" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
    <slot />

    <teleport :to="teleport">
      <transition :name="n()" @after-enter="onOpened" @after-leave="onClosed">
        <div
          ref="tooltip"
          :style="{ zIndex, backgroundColor: color }"
          :class="
            classes(
              n('tooltip'),
              [defaultStyle, `${n('--tooltip-background-color')} var-elevation--3`],
              `${n(`--${type}`)}`
            )
          "
          v-show="show"
          @click.stop
          @mouseenter="handleTooltipMouseenter"
          @mouseleave="handleTooltipMouseleave"
        >
          <slot name="tooltip"> {{ content }} </slot>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script lang="ts">
import flip from '@popperjs/core/lib/modifiers/flip'
import offset from '@popperjs/core/lib/modifiers/offset'
import { createPopper } from '@popperjs/core/lib/popper-lite'
import { call, createNamespace } from '../utils/components'
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue'
import { props } from './props'
import { doubleRaf, toPxNum } from '../utils/elements'
import { useZIndex } from '../context/zIndex'
import type { Ref } from 'vue'
import type { Instance } from '@popperjs/core/lib/types'
import type { NeededPopperPlacement } from './props'

const { n, classes } = createNamespace('tooltip')

export interface HostSize {
  width: number
  height: number
}

export interface Position {
  placement: NeededPopperPlacement
  skidding: number
  distance: number
}

export default defineComponent({
  name: 'VarTooltip',
  props,
  setup(props) {
    const host: Ref<null | HTMLElement> = ref(null)
    const tooltip: Ref<null | HTMLElement> = ref(null)
    const show: Ref<boolean> = ref(false)
    const { zIndex } = useZIndex(() => show.value, 1)

    let popover: Instance | null = null
    let clickSelf = false
    let enterTooltip = false
    let enterHost = false
    let hostSize: HostSize = { width: 0, height: 0 }

    const computeHostSize = () => {
      const { width, height } = getComputedStyle(host.value!)

      hostSize = {
        width: toPxNum(width),
        height: toPxNum(height),
      }
    }

    const handleMouseenter = () => {
      if (props.trigger !== 'hover') {
        return
      }

      enterHost = true

      open()
    }

    const handleMouseleave = async () => {
      if (props.trigger !== 'hover') {
        return
      }

      enterHost = false

      await doubleRaf()

      if (enterTooltip) {
        return
      }

      close()
    }

    const handleTooltipMouseenter = () => {
      if (props.trigger !== 'hover') {
        return
      }

      enterTooltip = true
    }

    const handleTooltipMouseleave = async () => {
      if (props.trigger !== 'hover') {
        return
      }

      enterTooltip = false

      await doubleRaf()

      if (enterHost) {
        return
      }

      close()
    }

    const handleClick = () => {
      open()
      clickSelf = true
    }

    const handleTooltipClose = () => {
      if (clickSelf) {
        clickSelf = false
        return
      }

      show.value = false
      call(props['onUpdate:show'], false)
    }

    const getPosition = (): Position => {
      computeHostSize()

      const offset = {
        x: toPxNum(props.offsetX),
        y: toPxNum(props.offsetY),
      }

      switch (props.placement) {
        case 'cover-top':
          return {
            placement: 'bottom',
            skidding: offset.x,
            distance: offset.y - hostSize.height,
          }

        case 'cover-top-start':
          return {
            placement: 'bottom-start',
            skidding: offset.x,
            distance: offset.y - hostSize.height,
          }

        case 'cover-top-end':
          return {
            placement: 'bottom-end',
            skidding: offset.x,
            distance: offset.y - hostSize.height,
          }

        case 'cover-bottom':
          return {
            placement: 'top',
            skidding: offset.x,
            distance: -offset.y - hostSize.height,
          }

        case 'cover-bottom-start':
          return {
            placement: 'top-start',
            skidding: offset.x,
            distance: -offset.y - hostSize.height,
          }

        case 'cover-bottom-end':
          return {
            placement: 'top-end',
            skidding: offset.x,
            distance: -offset.y - hostSize.height,
          }

        case 'cover-left':
          return {
            placement: 'right',
            skidding: offset.y,
            distance: offset.x - hostSize.width,
          }

        case 'cover-right':
          return {
            placement: 'left',
            skidding: offset.y,
            distance: -offset.x - hostSize.width,
          }

        case 'left':
        case 'left-start':
        case 'left-end':
          return {
            placement: props.placement,
            skidding: offset.y,
            distance: -offset.x,
          }

        case 'top':
        case 'top-start':
        case 'top-end':
          return {
            placement: props.placement,
            skidding: offset.x,
            distance: -offset.y,
          }

        case 'bottom':
        case 'bottom-start':
        case 'bottom-end':
          return {
            placement: props.placement,
            skidding: offset.x,
            distance: offset.y,
          }

        case 'right':
        case 'right-start':
        case 'right-end':
          return {
            placement: props.placement,
            skidding: offset.y,
            distance: offset.x,
          }
      }
    }

    const getPopperOptions = () => {
      const { placement, skidding, distance } = getPosition()

      return {
        placement,
        modifiers: [
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
        ],
      }
    }

    // expose
    const resize = () => {
      popover!.setOptions(getPopperOptions())
    }

    // expose
    const open = () => {
      const { disabled } = props

      if (disabled) {
        return
      }

      show.value = true
      call(props['onUpdate:show'], true)
    }

    // expose
    const close = () => {
      show.value = false
      call(props['onUpdate:show'], false)
    }

    watch(
      () => props.show,
      (newValue) => {
        show.value = newValue ?? false
      },
      { immediate: true }
    )

    watch(() => props.offsetX, resize)
    watch(() => props.offsetY, resize)
    watch(() => props.placement, resize)

    watch(
      () => show.value,
      (newValue) => {
        if (newValue) {
          resize()
          call(props.onOpen)
        } else {
          call(props.onClose)
        }
      }
    )

    watch(
      () => props.trigger,
      (newValue) => {
        if (newValue === 'click') {
          document.addEventListener('click', handleTooltipClose)
        } else {
          document.removeEventListener('click', handleTooltipClose)
        }
      }
    )

    watch(() => props.disabled, close)

    onMounted(() => {
      popover = createPopper(host.value!, tooltip.value!, getPopperOptions())

      if (props.trigger === 'click') {
        document.addEventListener('click', handleTooltipClose)
      }
    })
    onUnmounted(() => {
      document.removeEventListener('click', handleTooltipClose)
      popover!.destroy()
    })

    return {
      tooltip,
      host,
      hostSize,
      show,
      zIndex,
      n,
      classes,
      handleClick,
      handleTooltipClose,
      handleMouseenter,
      handleMouseleave,
      handleTooltipMouseenter,
      handleTooltipMouseleave,
      resize,
      open,
      close,
    }
  },
})
</script>

<style lang="less">
@import './tooltip';
@import '../styles/elevation.less';
@import '../styles/common.less';
</style>
