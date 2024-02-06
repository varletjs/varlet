<template>
  <var-popup
    :class="n('popup-radius')"
    position="bottom"
    :show="popupShow"
    :overlay="overlay"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    :lock-scroll="lockScroll"
    :close-on-click-overlay="closeOnClickOverlay"
    :teleport="teleport"
    :safe-area="safeArea"
    v-bind="{
      'onUpdate:show': handlePopupUpdateShow,
    }"
    @open="onOpen"
    @close="onClose"
    @closed="onClosed"
    @opened="onOpened"
    @route-change="onRouteChange"
  >
    <div :class="classes(n(), n('$--box'))" v-bind="$attrs">
      <slot name="title">
        <div :class="n('title')">{{ title ?? t('actionSheetTitle') }}</div>
      </slot>

      <slot name="actions">
        <div
          :class="classes(n('action-item'), action.className, [action.disabled, n('--disabled')])"
          v-ripple="{ disabled: action.disabled }"
          v-for="action in actions"
          :key="action.name"
          :style="{ color: action.color }"
          @click="handleSelect(action)"
        >
          <var-icon
            :class="n('action-icon')"
            var-action-sheet-cover
            :namespace="action.namespace"
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
import { t } from '../locale'
import { createNamespace } from '../utils/components'
import { type ActionItem } from './index'
import { call } from '@varlet/shared'

const { name, n, classes } = createNamespace('action-sheet')

export default defineComponent({
  name,
  directives: { Ripple },
  components: {
    VarPopup,
    VarIcon,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const popupShow = ref(false)

    watch(
      () => props.show,
      (newValue) => {
        popupShow.value = newValue
      },
      { immediate: true }
    )

    function handleSelect(action: ActionItem) {
      if (action.disabled) {
        return
      }

      const { closeOnClickAction, onSelect } = props
      call(onSelect, action)
      closeOnClickAction && call(props['onUpdate:show'], false)
    }

    function handlePopupUpdateShow(value: boolean) {
      call(props['onUpdate:show'], value)
    }

    return {
      popupShow,
      t,
      n,
      classes,
      handlePopupUpdateShow,
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
