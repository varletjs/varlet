<template>
  <teleport :to="teleport" :disabled="disabled">
    <transition name="var-fade" @after-enter="onOpened" @after-leave="onClosed">
      <div class="var--box var-popup" :style="{ zIndex: zIndex - 2 }" v-show="show">
        <div
          class="var-popup__overlay"
          :class="[overlayClass]"
          :style="{
            zIndex: zIndex - 1,
            ...overlayStyle,
          }"
          v-if="overlay"
          @click="hidePopup"
        ></div>
        <transition :name="`var-pop-${position}`">
          <div
            class="var-popup__content var-elevation--3"
            :class="[`var-popup--${position}`]"
            :style="{ zIndex }"
            v-bind="$attrs"
            v-show="show"
          >
            <slot />
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { props } from './props'
import { useLock } from '../context/lock'
import { useZIndex } from '../context/zIndex'
import { addRouteListener, useTeleport } from '../utils/components'

export default defineComponent({
  name: 'VarPopup',
  inheritAttrs: false,
  props,
  setup(props) {
    const { zIndex } = useZIndex(props, 'show', 3)
    const { disabled } = useTeleport()

    const hidePopup = () => {
      const { closeOnClickOverlay, onClickOverlay } = props

      onClickOverlay?.()

      if (!closeOnClickOverlay) {
        return
      }

      props['onUpdate:show']?.(false)
    }

    useLock(props, 'show', 'lockScroll')

    watch(
      () => props.show,
      (newValue: boolean) => {
        const { onOpen, onClose } = props
        newValue ? onOpen?.() : onClose?.()
      }
    )

    // internal for Dialog
    addRouteListener(() => props.onRouteChange?.())

    return {
      zIndex,
      disabled,
      hidePopup,
    }
  },
})
</script>

<style lang="less">
@import './popup';
</style>
