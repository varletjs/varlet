<template>
  <div
    v-ripple="{ disabled: !ripple }"
    :class="classes(n(), n('$--box'), [!block, n('$--inline-block')])"
    :style="{
      width: toSizeUnit(width),
      height: toSizeUnit(height),
      borderRadius: toSizeUnit(radius),
    }"
  >
    <img
      v-if="lazy && !showErrorSlot"
      v-lazy="src ?? ''"
      role="img"
      :class="n('image')"
      :alt="alt"
      :title="title"
      :referrerpolicy="referrerpolicy"
      :lazy-loading="loading"
      :lazy-error="error"
      :style="{ objectFit: fit, objectPosition: position }"
      @load="handleLoad"
      @click="handleClick"
    />

    <img
      v-if="!lazy && !showErrorSlot"
      role="img"
      :class="n('image')"
      :alt="alt"
      :title="title"
      :referrerpolicy="referrerpolicy"
      :style="{ objectFit: fit, objectPosition: position }"
      :src="src"
      @load="handleLoad"
      @error="handleError"
      @click="handleClick"
    />

    <slot v-if="showErrorSlot" name="error" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { call } from '@varlet/shared'
import Lazy, { type LazyHTMLElement } from '../lazy'
import Ripple from '../ripple'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props } from './props'

const { name, n, classes } = createNamespace('image')

export default defineComponent({
  name,
  directives: {
    Lazy,
    Ripple,
  },
  props,
  setup(props, { slots }) {
    const showErrorSlot = ref(false)

    watch(
      () => props.src,
      () => {
        showErrorSlot.value = false
      },
    )

    function handleError(e: Event) {
      // the value of showErrorSlot depends on whether there is an error slot
      showErrorSlot.value = !!slots.error
      call(props.onError, e)
    }

    function handleLoad(e: Event) {
      const el: LazyHTMLElement = e.currentTarget as LazyHTMLElement

      if (props.lazy) {
        if (el._lazy.state === 'success') {
          call(props.onLoad, e)
          return
        }

        if (el._lazy.state === 'error') {
          handleError(e)
        }
      } else {
        call(props.onLoad, e)
      }
    }

    function handleClick(e: Event) {
      call(props.onClick, e)
    }

    return {
      showErrorSlot,
      n,
      classes,
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
