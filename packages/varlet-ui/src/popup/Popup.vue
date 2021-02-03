<template>
  <teleport :to="teleport" :disabled="disabled">
    <transition name="var-fade" @after-enter="onOpened" @after-leave="onClosed">
      <div
        class="var--box var-popup"
        :style="{
          'z-index': zIndex,
        }"
        v-show="show"
      >
        <div
          class="var-popup__overlay"
          :class="[overlayClass]"
          :style="{
            'z-index': zIndex + 1,
            ...overlayStyle,
          }"
          v-if="overlay"
          @click="hidePopup"
        ></div>

        <transition name="var-pop-center">
          <div
            class="var-popup__center var-elevation--3"
            :style="{
              'z-index': zIndex + 2,
            }"
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
            :style="{
              'z-index': zIndex + 2,
            }"
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
            :style="{
              'z-index': zIndex + 2,
            }"
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
            :style="{
              'z-index': zIndex + 2,
            }"
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
            :style="{
              'z-index': zIndex + 2,
            }"
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
import { useTeleport } from '../utils/teleport'
import { useZIndex } from '../context/zIndex'
import { addRouteListener } from '../utils/components'

export default defineComponent({
  name: 'VarPopup',
  inheritAttrs: false,
  props,
  setup(props) {
    // context
    const { disabled } = useTeleport()
    const { zIndex } = useZIndex(props, 'show', 3)
    useLock(props, 'show', 'lockScroll')
    // events open close
    watch(
      () => props.show,
      (newValue: boolean) => {
        newValue ? props.onOpen?.() : props.onClose?.()
      }
    )

    const hidePopup = () => {
      props.onClickOverlay?.()
      if (props.closeOnClickOverlay === false) {
        return
      }
      props['onUpdate:show']?.(false)
    }

    addRouteListener(() => {
      props.onRouteChange?.()
    })

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
