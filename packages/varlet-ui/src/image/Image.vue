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
      :lazy-error="error"
      :style="{ objectFit: fit }"
      v-if="lazy && !showErrorSlot"
      v-lazy="src"
      @load="handleLoad"
      @click="handleClick"
    />

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
    />
    <slot v-if="showErrorSlot" name="error" />
  </div>
</template>

<script lang="ts">
import Ripple from '../ripple'
import Lazy from '../lazy'
import { watch, defineComponent, ref, type Ref } from 'vue'
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
  setup(props, { slots }) {
    const showErrorSlot: Ref<boolean> = ref(false)

    const handleLoad = (e: Event) => {
      const el: LazyHTMLElement = e.currentTarget as LazyHTMLElement
      const { lazy, onLoad, onError } = props

      if (lazy) {
        el._lazy.state === 'success' && call(onLoad, e)
        if (el._lazy.state === 'error') {
          if (slots?.error) {
            // if you set error slot, the error image will not work
            showErrorSlot.value = true
          }

          call(onError, e)
        }
      } else {
        call(onLoad, e)
      }
    }

    const handleError = (e: Event) => {
      // this event is triggered by error event in default mode(not lazy)
      // the value of showErrorSlot depends on whether there is an error slot
      showErrorSlot.value = !!slots?.error
      call(props.onError, e)
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
