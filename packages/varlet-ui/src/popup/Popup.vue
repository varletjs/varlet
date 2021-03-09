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

        <transition name="var-pop-center">
          <div
            class="var-popup__center var-elevation--3"
            :style="{ zIndex }"
            v-bind="$attrs"
            v-if="position === 'center'"
            v-show="show"
          >
            <slot />
          </div>
        </transition>

        <transition name="var-pop-up">
          <div
            class="var-popup__bottom var-elevation--3"
            :style="{ zIndex }"
            v-bind="$attrs"
            v-if="position === 'bottom'"
            v-show="show"
          >
            <slot />
          </div>
        </transition>

        <transition name="var-pop-down">
          <div
            class="var-popup__top var-elevation--3"
            :style="{ zIndex }"
            v-bind="$attrs"
            v-if="position === 'top'"
            v-show="show"
          >
            <slot />
          </div>
        </transition>

        <transition name="var-pop-right">
          <div
            class="var-popup__left var-elevation--3"
            :style="{ zIndex }"
            v-bind="$attrs"
            v-if="position === 'left'"
            v-show="show"
          >
            <slot />
          </div>
        </transition>

        <transition name="var-pop-left">
          <div
            class="var-popup__right var-elevation--3"
            :style="{ zIndex }"
            v-bind="$attrs"
            v-if="position === 'right'"
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
