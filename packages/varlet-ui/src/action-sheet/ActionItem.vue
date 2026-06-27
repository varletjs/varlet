<template>
  <div
    v-ripple="{ disabled }"
    v-hover:desktop="handleHovering"
    :class="classes(n('action-item'), className, [disabled, n('--disabled')])"
    :style="{ color }"
  >
    <var-icon v-if="isString(icon)" :class="n('action-icon')" :namespace="namespace" :name="icon" :size="iconSize" />
    <span v-else-if="icon" :class="n('action-icon')">
      <maybe-v-node :is="renderIcon()" />
    </span>
    <div :class="n('action-name')">{{ name }}</div>

    <var-hover-overlay :hovering="disabled ? false : hovering" />
  </div>
</template>

<script lang="ts">
import { callOrReturn, isString } from '@varlet/shared'
import { defineComponent, type PropType, type VNode } from 'vue'
import Hover from '../hover'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import VarIcon from '../icon'
import Ripple from '../ripple'
import { createNamespace, MaybeVNode } from '../utils/components'

const { name, n, classes } = createNamespace('action-sheet')

export default defineComponent({
  name,
  components: {
    MaybeVNode,
    VarHoverOverlay,
    VarIcon,
  },
  directives: { Ripple, Hover },
  props: {
    name: String,
    className: String,
    disabled: Boolean,
    color: String,
    namespace: String,
    iconSize: [String, Number],
    icon: [String, Object, Function] as PropType<string | VNode | (() => VNode)>,
  },
  setup(props) {
    const { hovering, handleHovering } = useHoverOverlay()

    function renderIcon() {
      return callOrReturn(props.icon)
    }

    return {
      hovering,
      isString,
      n,
      classes,
      handleHovering,
      renderIcon,
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
