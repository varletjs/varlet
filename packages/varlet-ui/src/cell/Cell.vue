<template>
  <div class="var-cell" :class="[border ? 'var-cell--border' : null]">
    <div class="var-cell__icon" :class="[iconClass ? iconClass : null]" v-if="$slots.icon || icon">
      <slot name="icon">
        <var-icon class="var--flex" :name="icon" />
      </slot>
    </div>
    <div class="var-cell__content">
      <div class="var-cell__title" :class="[titleClass ? titleClass : null]">
        <slot>{{ title }}</slot>
      </div>
      <div class="var-cell__label" :class="[labelClass ? labelClass : null]" v-if="$slots.label || label">
        <slot name="label">
          {{ label }}
        </slot>
      </div>
    </div>
    <div class="var-cell__extra" :class="[extraClass ? extraClass : null]" v-if="$slots.extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'
import Icon from '../icon'

export default defineComponent({
  name: 'VarCell',
  components: {
    [Icon.name]: Icon,
  },
  props,
})
</script>

<style lang="less">
@import './cell';
</style>
