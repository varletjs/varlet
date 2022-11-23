<template>
  <div
    :class="classes(n(), n('$--box'), [!block, n('$--inline-block')])"
    :style="{
      width: toSizeUnit(width),
      height: toSizeUnit(height),
      'border-radius': toSizeUnit(radius),
    }"
    v-ripple="{ disabled: !ripple }"
  >
    <img
      :class="n('image')"
      :alt="alt"
      :title="title"
      :lazy-error="error"
      :lazy-loading="loading"
      :style="{ objectFit: fit }"
      v-if="lazy"
      v-lazy="src"
      @load="handleLoad"
      @error="handleError"
      @click="onClick"
    />

    <img
      :class="n('image')"
      :alt="alt"
      :title="title"
      :style="{ objectFit: fit }"
      :src="src"
      v-else
      @load="handleLoad"
      @error="handleError"
      @click="onClick"
    />
  </div>
</template>

<script lang="ts">
import Ripple from '../ripple'
import Lazy from '../lazy'
import { defineComponent } from 'vue'
import { props } from './props'
import { toSizeUnit } from '../utils/elements'
import { createNamespace, call } from '../utils/components'
import type { LazyHTMLElement } from '../lazy'

const { n, classes } = createNamespace('image')

export default defineComponent({
  name: 'VarImage',
  directives: {
    Lazy,
    Ripple,
  },
  props,
  setup(props) {
    const handleLoad = (e: Event) => {
      const el: LazyHTMLElement = e.currentTarget as LazyHTMLElement
      const { lazy, onLoad, onError } = props

      if (lazy) {
        el._lazy.state === 'success' && call(onLoad, e)
        el._lazy.state === 'error' && call(onError, e)
      } else {
        call(onLoad, e)
      }
    }

    const handleError = (e: Event) => {
      const { lazy, onError } = props

      !lazy && call(onError, e)
    }

    return {
      n,
      classes,
      toSizeUnit,
      handleLoad,
      handleError,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import './image';
</style>
