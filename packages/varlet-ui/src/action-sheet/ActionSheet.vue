<template>
  <var-popup
    v-model:show="show"
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
    @open="onOpen"
    @close="onClose"
    @closed="onClosed"
    @opened="onOpened"
    @route-change="onRouteChange"
    @key-escape="onKeyEscape"
  >
    <div :class="classes(n(), n('$--box'))" v-bind="$attrs">
      <slot name="title">
        <div :class="n('title')">{{ title ?? (pt ? pt : t)('actionSheetTitle') }}</div>
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
import { defineComponent } from 'vue'
import { call } from '@varlet/shared'
import { useVModel } from '@varlet/use'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import VarPopup from '../popup'
import Ripple from '../ripple'
import { createNamespace } from '../utils/components'
import VarActionItem from './ActionItem.vue'
import { type ActionItem } from './index'
import { props } from './props'

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
    const { t: pt } = injectLocaleProvider()

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
      pt,
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
