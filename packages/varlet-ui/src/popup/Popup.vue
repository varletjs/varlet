<template>
  <teleport :to="teleport" :disabled="disabled">
    <transition
      name="var-fade"
      @after-enter="$emit('opened')"
      @after-leave="$emit('closed')"
    >
      <div
        class="var-popup"
        :style="{
          'z-index': zIndex
        }"
        v-show="show"
      >
        <div
          class="var-popup__overlay"
          :class="[overlayClass]"
          :style="{
            'z-index': zIndex + 1,
            'background-color': !overlay ? 'transparent' : null,
            ...overlayStyle
          }"
          @click="hidePopup"
        >
          <transition name="var-pop-center">
            <div
              class="var-popup__center var-elevation--3"
              v-bind="$attrs"
              v-if="position === 'center'"
              v-show="show"
              @click.stop
            >
              <slot/>
            </div>
          </transition>

          <transition name="var-pop-up">
            <div
              class="var-popup__bottom var-elevation--3"
              v-bind="$attrs"
              v-if="position === 'bottom'"
              v-show="show"
              @click.stop
            >
              <slot/>
            </div>
          </transition>

          <transition name="var-pop-down">
            <div
              class="var-popup__top var-elevation--3"
              v-bind="$attrs"
              v-if="position === 'top'"
              v-show="show"
              @click.stop
            >
              <slot/>
            </div>
          </transition>

          <transition name="var-pop-right">
            <div
              class="var-popup__left var-elevation--3"
              v-bind="$attrs"
              v-if="position === 'left'"
              v-show="show"
              @click.stop
            >
              <slot/>
            </div>
          </transition>

          <transition name="var-pop-left">
            <div
              class="var-popup__right var-elevation--3"
              v-bind="$attrs"
              v-if="position === 'right'"
              v-show="show"
              @click.stop
            >
              <slot/>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { props, emits } from './propsEmits'
import { useLock } from '../context/lock'
import { useTeleport } from '../utils/teleport'
import { useZIndex } from '../context/zIndex'

export default defineComponent({
  name: 'VarPopup',
  inheritAttrs: false,
  props,
  emits,
  setup(props, { emit }) {
    // context
    const { disabled } = useTeleport()
    const { zIndex } = useZIndex(props, 'show', 2)
    useLock(props, 'show', 'lockScroll')
    // events open close
    watch(() => props.show, (newValue: boolean) => {
      newValue ? emit('open') : emit('close')
    })

    const hidePopup = () => {
      emit('click-overlay')
      if (props.closeOnClickOverlay === false) {
        return
      }
      emit('update:show', false)
    }

    return {
      zIndex,
      disabled,
      hidePopup
    }
  }
})
</script>

<style lang="less">
@import "./popup";
</style>
