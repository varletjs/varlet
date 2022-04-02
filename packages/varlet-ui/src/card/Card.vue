<template>
  <div
    :class="classes(n(), [elevation, `var-elevation--${elevation}`, 'var-elevation--2'])"
    v-ripple="{ disabled: !ripple }"
    @click="onClick"
  >
    <slot name="image">
      <img
        :class="n('image')"
        :style="{
          objectFit: fit,
          height: toSizeUnit(height),
        }"
        :src="src"
        :alt="alt"
        v-if="src"
      />
    </slot>
    <slot name="title">
      <div :class="n('title')" v-if="title">{{ title }}</div>
    </slot>
    <slot name="subtitle">
      <div :class="n('subtitle')" v-if="subtitle">{{ subtitle }}</div>
    </slot>
    <slot name="description">
      <div :class="n('description')" v-if="description">{{ description }}</div>
    </slot>
    <div :class="n('footer')" v-if="$slots.extra">
      <slot name="extra" />
    </div>
  </div>
</template>

<script lang="ts">
import Ripple from '../ripple'
import { defineComponent } from 'vue'
import { props } from './props'
import { toSizeUnit } from '../utils/elements'
import { createNamespace } from '../utils/components'

const { n, classes } = createNamespace('card')

export default defineComponent({
  name: 'VarCard',
  directives: { Ripple },
  props,
  setup() {
    return {
      n,
      classes,
      toSizeUnit,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../ripple/ripple';
@import './card';
</style>
