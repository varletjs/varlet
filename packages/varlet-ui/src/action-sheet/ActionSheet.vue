<template>
  <var-popup
    :class="n('popup-radius')"
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
    <div :class="classes(n(), n('box', true))" v-bind="$attrs">
      <slot name="title">
        <div :class="n('title')">{{ dt(title, pack.actionSheetTitle) }}</div>
      </slot>

      <slot name="actions">
        <div
          :class="classes(n('action-item'), action.className, action.disabled && n('', 'disabled'))"
          v-ripple="{ disabled: action.disabled }"
          v-for="action in actions"
          :key="action.name"
          :style="{ color: action.color }"
          @click="handleSelect(action)"
        >
          <var-icon
            :class="n('action-icon')"
            var-action-sheet-cover
            :name="action.icon"
            :size="action.iconSize"
            v-if="action.icon"
          />
          <div :class="n('action-name')">{{ action.name }}</div>
        </div>
      </slot>
    </div>
  </var-popup>
</template>

<script lang="ts">
import Ripple from '../ripple'
import VarPopup from '../popup'
import VarIcon from '../icon'
import { defineComponent, ref, watch } from 'vue'
import { props } from './props'
import { dt } from '../utils/shared'
import { createNamespace } from '../utils/components'
import { pack } from '../locale'
import type { Ref } from 'vue'
import type { ActionItem } from './index'

export default defineComponent({
  name: 'VarActionSheet',
  directives: { Ripple },
  components: {
    VarPopup,
    VarIcon,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const { n, classes } = createNamespace('action-sheet')

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
      n,
      classes,
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
