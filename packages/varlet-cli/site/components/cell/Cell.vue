<template>
  <div class="var-site-cell" :class="[border ? 'var-site-cell--border' : null]">
    <div class="var-site-cell__icon" :class="[iconClass ? iconClass : null]" v-if="$slots.icon || icon">
      <slot name="icon">
        <var-site-icon class="var-site--flex" :name="icon" />
      </slot>
    </div>
    <div class="var-site-cell__content">
      <div class="var-site-cell__title" :class="[titleClass ? titleClass : null]">
        <slot>{{ title }}</slot>
      </div>
      <div class="var-site-cell__desc" :class="[descClass ? descClass : null]" v-if="$slots.desc || desc">
        <slot name="desc">
          {{ desc }}
        </slot>
      </div>
    </div>
    <div class="var-site-cell__extra" :class="[extraClass ? extraClass : null]" v-if="$slots.extra">
      <slot name="extra" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'
import Icon from '../icon'

export default defineComponent({
  name: 'VarSiteCell',
  components: {
    [Icon.name]: Icon,
  },
  props,
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './cell';
</style>
