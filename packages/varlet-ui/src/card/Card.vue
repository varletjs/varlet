<template>
  <div
    :class="classes(n(), [elevation, `var-elevation--${elevation}`, 'var-elevation--2'])"
    v-ripple="{ disabled: !ripple }"
    @click="onClick"
  >
    <slot name="image">
      <img
        :class="n('image-row')"
        :style="{
          objectFit: fit,
          height: toSizeUnit(height),
          width: toSizeUnit(width),
        }"
        :src="src"
        :alt="alt"
        v-if="src && direction === 'row'"
      />
    </slot>

    <div
      :class="classes(n('contain'), [direction === 'row', n('contain-row')])"
      :style="{
        width: direction === 'row' ? `calc(100% - ${toSizeUnit(width)})` : null,
        marginLeft: direction === 'row' ? toSizeUnit(width) : null,
      }"
    >
      <slot name="image">
        <img
          :class="n('image-column')"
          :style="{
            objectFit: fit,
            height: toSizeUnit(height),
            width: toSizeUnit(width),
          }"
          :src="src"
          :alt="alt"
          v-if="src && direction === 'column'"
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
