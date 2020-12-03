<template>
  <teleport :to="teleport" :disabled="disabled">
    <transition name="var-fade">
      <div
        class="var-popup"
        :style="{
          'z-index': context.zIndex
        }"
        v-show="show"
      >
        <div
          class="var-popup__overlay"
          :style="{
          'z-index': context.zIndex + 1
        }"
          @click="hidePopup"
        >
          <transition name="var-pop-center">
            <div
              class="var-popup__center"
              v-bind="$attrs"
              v-if="position === 'center'"
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
import context from '../context'
import { defineComponent, onMounted } from 'vue'
import { props } from './propsEmits'
import { useLock } from '../context/lock'
import { useTeleport } from '../context/teleport'
import { useZIndex } from '../context/zIndex'

export default defineComponent({
  name: 'VarPopup',
  props,
  setup(props, { emit }) {
    const { disabled } = useTeleport()
    useZIndex(props, 'show', 2)
    useLock(props, 'show')

    onMounted(() => console.log(123))

    const hidePopup = () => emit('update:show', false)

    return {
      context,
      disabled,
      hidePopup
    }
  }
})
</script>

<style lang="less">
@import "./popup";
</style>
