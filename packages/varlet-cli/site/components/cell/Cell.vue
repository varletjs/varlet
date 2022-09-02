<template>
  <div :class="classes(n(), [border, n('--border')])">
    <div :class="classes(n('icon'), [iconClass, iconClass])" v-if="$slots.icon || icon">
      <slot name="icon">
        <var-icon class="var--flex" :name="icon" />
      </slot>
    </div>
    <div :class="n('content')">
      <div :class="classes(n('title'), [titleClass, titleClass])">
        <slot>{{ title }}</slot>
      </div>
      <div
        :class="classes(n('description'), [descriptionClass, descriptionClass])"
        v-if="$slots.description || description"
      >
        <slot name="description">
          {{ description }}
        </slot>
      </div>
    </div>
    <div :class="classes(n('extra'), [extraClass, extraClass])" v-if="$slots.extra">
      <slot name="extra" />
    </div>
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { defineComponent } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'

const { n, classes } = createNamespace('cell')

export default defineComponent({
  name: 'VarCell',
  components: {
    VarIcon,
  },
  props,
  setup() {
    return {
      n,
      classes,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './cell';
</style>
