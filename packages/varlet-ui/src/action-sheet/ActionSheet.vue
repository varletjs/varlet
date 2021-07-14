<template>
  <var-popup
    class="var-action-sheet__popup-radius"
    position="bottom"
    :overlay="overlay"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    :lock-scroll="lockScroll"
    :close-on-click-overlay="closeOnClickOverlay"
    :teleport="teleport"
    :show="popupShow"
    v-bind="{
      'onUpdate:show': (value) => $props['onUpdate:show']?.(value),
    }"
    @open="onOpen"
    @close="onClose"
    @closed="onClosed"
    @opened="onOpened"
    @route-change="onRouteChange"
  >
    <div class="var-action-sheet var--box" v-bind="$attrs">
      <slot name="title">
        <div class="var-action-sheet__title">{{ dt(title, pack.actionSheetTitle) }}</div>
      </slot>

      <slot name="actions">
        <div
          class="var-action-sheet__action-item"
          :class="[action.className, action.disabled ? 'var-action-sheet--disabled' : null]"
          v-ripple="{ disabled: action.disabled }"
          v-for="action in actions"
          :key="action.name"
          :style="{ color: action.color }"
          @click="handleSelect(action)"
        >
          <var-icon
            class="var-action-sheet__action-icon"
            var-action-sheet-cover
            :name="action.icon"
            :size="action.iconSize"
            v-if="action.icon"
          />
          <div class="var-action-sheet__action-name">{{ action.name }}</div>
        </div>
      </slot>
    </div>
  </var-popup>
</template>

<script lang="ts">
import Ripple from '../ripple'
import Popup from '../popup'
import Icon from '../icon'
import { defineComponent, ref, watch } from 'vue'
import { props } from './props'
import { dt } from '../utils/shared'
import { pack } from '../locale'
import type { Ref } from 'vue'
import type { ActionItem } from './index'

export default defineComponent({
  name: 'VarActionSheet',
  directives: { Ripple },
  components: {
    [Popup.name]: Popup,
    [Icon.name]: Icon,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const popupShow: Ref<boolean> = ref(false)

    const handleSelect = (action: ActionItem) => {
      if (action.disabled) {
        return
      }

      const { closeOnClickAction, onSelect } = props
      onSelect?.(action)
      closeOnClickAction && props['onUpdate:show']?.(false)
    }

    watch(
      () => props.show,
      (newValue) => {
        popupShow.value = newValue
      },
      { immediate: true }
    )

    return {
      popupShow,
      pack,
      dt,
      handleSelect,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import '../ripple/ripple';
@import '../popup/popup';
@import './actionSheet';
</style>
