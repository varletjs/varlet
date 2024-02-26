<template>
  <div
    :class="classes(n(), [border, n('--border')], [onClick, n('--cursor')])"
    :style="borderOffsetStyles"
    v-ripple="{ disabled: !ripple }"
    @click="handleClick"
  >
    <slot name="icon">
      <div :class="classes(n('icon'), iconClass)" v-if="icon">
        <var-icon :name="icon" :namespace="namespace" />
      </div>
    </slot>

    <div :class="n('content')">
      <slot>
        <div :class="classes(n('title'), titleClass)" v-if="title">
          {{ title }}
        </div>
      </slot>

      <slot name="description">
        <div :class="classes(n('description'), descriptionClass)" v-if="description">
          {{ description }}
        </div>
      </slot>
    </div>

    <div :class="classes(n('extra'), extraClass)" v-if="$slots.extra">
      <slot name="extra" />
    </div>
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import Ripple from '../ripple'
import { computed, defineComponent, CSSProperties } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { call } from '@varlet/shared'

const { name, n, classes } = createNamespace('cell')

export default defineComponent({
  name,
  components: { VarIcon },
  directives: { Ripple },
  props,
  setup(props) {
    const borderOffsetStyles = computed<CSSProperties>(() => {
      if (props.borderOffset == null) {
        return {}
      }

      return {
        '--cell-border-left': toSizeUnit(props.borderOffset),
        '--cell-border-right': toSizeUnit(props.borderOffset),
      }
    })

    function handleClick(e: Event) {
      call(props.onClick, e)
    }

    return {
      borderOffsetStyles,
      n,
      classes,
      toSizeUnit,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './cell';
</style>
