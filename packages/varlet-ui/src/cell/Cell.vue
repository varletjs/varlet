<template>
  <div
    :class="classes(n(), [border, n('--border')], [onClick, n('--cursor')])"
    :style="borderOffsetStyles"
    v-ripple="{ disabled: !ripple }"
    @click="handleClick"
  >
    <slot name="icon">
      <div :class="classes(n('icon'), iconClass)" v-if="icon">
        <var-icon :name="icon" />
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
import { computed, defineComponent, type StyleValue, type ComputedRef } from 'vue'
import { props } from './props'
import { call, createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'

const { n, classes } = createNamespace('cell')

export default defineComponent({
  name: 'VarCell',
  components: { VarIcon },
  directives: { Ripple },
  props,
  setup(props) {
    const borderOffsetStyles: ComputedRef<StyleValue> = computed(() => {
      if (props.borderOffset == null) {
        return {}
      }

      return {
        '--cell-border-left': toSizeUnit(props.borderOffset),
        '--cell-border-right': toSizeUnit(props.borderOffset),
      } as StyleValue
    })

    const handleClick = (e: Event) => {
      call(props.onClick, e)
    }

    return {
      n,
      classes,
      toSizeUnit,
      borderOffsetStyles,
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
