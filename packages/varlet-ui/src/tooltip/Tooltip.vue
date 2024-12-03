<template>
  <div ref="host" :class="classes(n(), n('$--box'))">
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
            :style="{
              background: color,
              color: textColor,
              width: sameWidth ? toSizeUnit(Math.ceil(referenceSize.width)) : undefined,
            }"
            :class="classes(n('content-container'), n(`--${type}`))"
            role="tooltip"
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
      referenceSize,
      show,
      zIndex,
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
      // expose
      setReference,
    } = usePopover(props)

    return {
      popover,
      host,
      referenceSize,
      show,
      zIndex,
      teleportDisabled,
      toSizeUnit,
      n,
      classes,
      handlePopoverClose,
      handlePopoverMouseenter,
      handlePopoverMouseleave,
      handleClosed,
      resize,
      open,
      close,
      setReference,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './tooltip';
</style>
