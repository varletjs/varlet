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
          :class="n('tooltip')"
          :style="{ zIndex }"
          v-show="show"
          @click.stop
          @mouseenter="handlePopoverMouseenter"
          @mouseleave="handlePopoverMouseleave"
        >
          <div
            :style="{ background: color }"
            :class="classes(n('content-container'), n(`--${type}`), n(`--margin-${placement}`))"
          >
            <slot name="content">{{ content }}</slot>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script lang="ts">
import { createNamespace } from '../utils/components'
import { defineComponent } from 'vue'
import { usePopover } from '../menu/usePopover'
import { props } from './props'

const { n, classes } = createNamespace('tooltip')

export default defineComponent({
  name: 'VarTooltip',
  props,
  setup(props) {
    const {
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
@import '../styles/common.less';
@import './tooltip';
</style>
