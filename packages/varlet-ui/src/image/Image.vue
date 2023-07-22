<template>
  <div
    :class="classes(n(), n('$--box'), [!block, n('$--inline-block')])"
    :style="{
      width: toSizeUnit(width),
      height: toSizeUnit(height),
      borderRadius: toSizeUnit(radius),
    }"
    v-ripple="{ disabled: !ripple }"
  >
    <img
      :class="n('image')"
      :alt="alt"
      :title="title"
      :lazy-loading="loading"
      :lazy-error="error"
      :style="{ objectFit: fit }"
      v-if="lazy && !showErrorSlot"
      v-lazy="src"
      @load="handleLoad"
      @click="handleClick"
    >

    <img
      :class="n('image')"
      :alt="alt"
      :title="title"
      :style="{ objectFit: fit }"
      :src="src"
      v-if="!lazy && !showErrorSlot"
      @load="handleLoad"
      @error="handleError"
      @click="handleClick"
    >

    <slot
      name="error"
      v-if="showErrorSlot"
    />
  </div>
</template>

<script lang="ts">
import Ripple from '../ripple'
import Lazy, { type LazyHTMLElement } from '../lazy'
import { watch, defineComponent, ref, type Ref } from 'vue'
import { props } from './props'
import { toSizeUnit } from '../utils/elements'
import { createNamespace, call } from '../utils/components'

const { n, classes } = createNamespace('image')

export default defineComponent({
  name: 'VarImage',
  directives: {
    Lazy,
    Ripple,
  },
  props,
  setup(props, { slots }) {
    const showErrorSlot: Ref<boolean> = ref(false)

    const handleError = (e: Event) => {
      // the value of showErrorSlot depends on whether there is an error slot
      showErrorSlot.value = !!slots.error
      call(props.onError, e)
    }

    const handleLoad = (e: Event) => {
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

    const handleClick = (e: Event) => {
      call(props.onClick, e)
    }

    watch(
      () => props.src,
      () => {
        showErrorSlot.value = false
      }
    )

    return {
      n,
      classes,
      showErrorSlot,
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
