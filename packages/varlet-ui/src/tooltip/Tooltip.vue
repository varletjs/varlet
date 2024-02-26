<template>
  <div
    ref="host"
    :class="classes(n(), n('$--box'))"
    @click="handleHostClick"
    @mouseenter="handleHostMouseenter"
    @mouseleave="handleHostMouseleave"
  >
    <slot />

    <Teleport :to="teleport === false ? undefined : teleport" :disabled="teleportDisabled || teleport === false">
      <transition :name="n()" @after-enter="onOpened" @after-leave="handleClosed">
        <div
          ref="popover"
          :class="classes(n('tooltip'), n('$--box'))"
          :style="{ zIndex }"
          v-show="show"
          @click.stop
          @mouseenter="handlePopoverMouseenter"
          @mouseleave="handlePopoverMouseleave"
        >
          <div
            :style="{ background: color, width: sameWidth ? toSizeUnit(Math.ceil(hostSize.width)) : undefined }"
            :class="classes(n('content-container'), n(`--${type}`))"
          >
            <slot name="content">{{ content }}</slot>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { createNamespace, useTeleport } from '../utils/components'
import { defineComponent } from 'vue'
import { toSizeUnit } from '../utils/elements'
import { usePopover } from '../menu/usePopover'
import { props } from './props'

const { name, n, classes } = createNamespace('tooltip')

export default defineComponent({
  name,
  props,
  setup(props) {
    const { disabled: teleportDisabled } = useTeleport()
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
      handleClosed,
      // expose
      open,
      // expose
      close,
      // expose
      resize,
    } = usePopover(props)

    return {
      popover,
      host,
      hostSize,
      show,
      zIndex,
      teleportDisabled,
      toSizeUnit,
      n,
      classes,
      handleHostClick,
      handlePopoverClose,
      handleHostMouseenter,
      handleHostMouseleave,
      handlePopoverMouseenter,
      handlePopoverMouseleave,
      handleClosed,
      resize,
      open,
      close,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './tooltip';
</style>
