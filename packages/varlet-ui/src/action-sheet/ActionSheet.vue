<template>
  <var-popup
    position="bottom"
    :class="n('popup-radius')"
    :overlay="overlay"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    :lock-scroll="lockScroll"
    :close-on-click-overlay="closeOnClickOverlay"
    :close-on-key-escape="closeOnKeyEscape"
    :teleport="teleport"
    :safe-area="safeArea"
    v-model:show="show"
    @open="onOpen"
    @close="onClose"
    @closed="onClosed"
    @opened="onOpened"
    @route-change="onRouteChange"
    @key-escape="onKeyEscape"
  >
    <div :class="classes(n(), n('$--box'))" v-bind="$attrs">
      <slot name="title">
        <div :class="n('title')">{{ title ?? t('actionSheetTitle') }}</div>
      </slot>

      <slot name="actions">
        <var-action-item
          v-for="action in actions"
          :key="action.name"
          :name="action.name"
          :namespace="action.namespace"
          :icon="action.icon"
          :icon-size="action.iconSize"
          :class-name="action.className"
          :color="action.color"
          @click="handleSelect(action)"
        />
      </slot>
    </div>
  </var-popup>
</template>

<script lang="ts">
import Ripple from '../ripple'
import VarPopup from '../popup'
import VarActionItem from './ActionItem.vue'
import { defineComponent } from 'vue'
import { props } from './props'
import { t } from '../locale'
import { createNamespace } from '../utils/components'
import { call } from '@varlet/shared'
import { useVModel } from '@varlet/use'
import { type ActionItem } from './index'

const { name, n, classes } = createNamespace('action-sheet')

export default defineComponent({
  name,
  directives: { Ripple },
  components: {
    VarPopup,
    VarActionItem,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const show = useVModel(props, 'show')

    function handleSelect(action: ActionItem) {
      if (action.disabled) {
        return
      }

      const { closeOnClickAction, onSelect } = props
      call(onSelect, action)

      if (closeOnClickAction) {
        show.value = false
      }
    }

    return {
      show,
      t,
      n,
      classes,
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
