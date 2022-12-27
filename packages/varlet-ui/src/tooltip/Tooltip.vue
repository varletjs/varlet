<template>
  <div
    ref="host"
    :class="n()"
    @click="handleHostClick"
    @mouseenter="handleHostMouseenter"
    @mouseleave="handleHostMouseleave"
  >
    <slot />

    <teleport :to="teleport">
      <transition :name="n()" @after-enter="onOpened" @after-leave="onClosed">
        <div
          ref="popover"
          :style="{ zIndex, backgroundColor: color }"
          :class="
            classes(
              n('tooltip'),
              [defaultStyle, `${n('--tooltip-background-color')} var-elevation--3`],
              `${n(`--${type}`)}`,
              `${n(`--margin-${placement}`)}`
            )
          "
          v-show="show"
          @click.stop
          @mouseenter="handlePopoverMouseenter"
          @mouseleave="handlePopoverMouseleave"
        >
          <slot name="tooltip"> {{ content }} </slot>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script lang="ts">
import { createNamespace } from '../utils/components'
import { defineComponent } from 'vue'
import { props } from './props'
import { usePopover } from '../menu/usePopover'

const { n, classes } = createNamespace('tooltip')

export default defineComponent({
  name: 'VarTooltip',
  props,
  setup(props) {
    const {
      content,
      type,
      color,
      popover,
      host,
      hostSize,
      show,
      zIndex,
      handleHostClick,
      handleHostMouseenter,
      handleHostMouseleave,
      handlePopoverMouseenter,
      handlePopoverMouseleave,
      handlePopoverClose,
      open,
      close,
      resize,
    } = usePopover(props)

    return {
      content,
      type,
      color,
      popover,
      host,
      hostSize,
      show,
      zIndex,
      n,
      classes,
      handleHostClick,
      handlePopoverClose,
      handleHostMouseenter,
      handleHostMouseleave,
      handlePopoverMouseenter,
      handlePopoverMouseleave,
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
