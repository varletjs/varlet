<template>
  <div
    v-ripple="{ disabled: !ripple }"
    :class="classes(n(), [border, n('--border')], [onClick, n('--cursor')])"
    :style="borderOffsetStyles"
    @click="handleClick"
  >
    <slot name="icon">
      <div v-if="icon" :class="classes(n('icon'), iconClass)">
        <var-icon :name="icon" :namespace="namespace" />
      </div>
    </slot>

    <div :class="n('content')">
      <slot>
        <div v-if="title" :class="classes(n('title'), titleClass)">
          {{ title }}
        </div>
      </slot>

      <slot name="description">
        <div v-if="description" :class="classes(n('description'), descriptionClass)">
          {{ description }}
        </div>
      </slot>
    </div>

    <div v-if="$slots.extra" :class="classes(n('extra'), extraClass)">
      <slot name="extra" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, CSSProperties, defineComponent } from 'vue'
import { call } from '@varlet/shared'
import VarIcon from '../icon'
import Ripple from '../ripple'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props } from './props'

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
@import '../ripple/ripple';
@import './cell';
</style>
