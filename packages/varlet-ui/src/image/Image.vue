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
      :lazy-loading="loading"
      :style="{ objectFit: fit }"
      v-if="lazy && !isError"
      v-lazy="src"
      @load="handleLoad"
      @error="handleError"
      @click="handleClick"
    />

    <img
      :class="n('image')"
      :alt="alt"
      :title="title"
      :style="{ objectFit: fit }"
      :src="src"
      v-if="!lazy && !isError"
      @load="handleLoad"
      @error="handleError"
      @click="handleClick"
    />
    <slot v-if="isError" name="error">
      <img :class="n('image')" :alt="alt" :title="title" :style="{ objectFit: fit }" :src="src" />
    </slot>
  </div>
</template>

<script lang="ts">
import Ripple from '../ripple'
import Lazy from '../lazy'
import { type Ref, defineComponent, ref } from 'vue'
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
    const isError: Ref<boolean> = ref(false)

    const handleLoad = (e: Event) => {
      const el: LazyHTMLElement = e.currentTarget as LazyHTMLElement
      const { lazy, onLoad, onError } = props

      if (lazy) {
        if (el._lazy.state === 'success') {
          isError.value = false
          call(onLoad, e)
        }
        if (el._lazy.state === 'error') {
          isError.value = true
          call(onError, e)
        }
      } else {
        isError.value = false
        call(onLoad, e)
      }
    }

    const handleError = (e: Event) => {
      isError.value = true
      call(props.onError, e)
    }

    const handleClick = (e: Event) => {
      call(props.onClick, e)
    }

    return {
      n,
      classes,
      isError,
      toSizeUnit,
      handleLoad,
      handleError,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import './image';
</style>
