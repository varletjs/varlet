<template>
  <div class="var-card" :class="[elevation ? `var-elevation--${elevation}` : 'var-elevation--3']">
    <slot name="image" v-if="src">
      <img class="var-card__image" :style="{ objectFit: fit, height: toSizeUnit(height) }" :src="src" :alt="alt" />
    </slot>
    <div class="var-card__content">
      <slot name="title" v-if="title"
        ><div class="var-card__title">{{ title }}</div></slot
      >
      <slot name="subtitle" v-if="subtitle"
        ><div class="var-card__subtitle">{{ subtitle }}</div></slot
      >
      <slot name="desc" v-if="desc">
        <div class="var-card__desc">{{ desc }}</div>
      </slot>
    </div>
    <div class="var-card__footer" v-if="$slots.extra">
      <slot name="extra" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'
import { toSizeUnit } from '../utils/elements'

export default defineComponent({
  name: 'VarCard',
  props,
  setup() {
    return {
      toSizeUnit,
    }
  },
})
</script>

<style lang="less">
@import './card';
</style>
