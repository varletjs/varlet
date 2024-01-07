<template>
  <div
    ref="avatarElement"
    :class="
      classes(
        n(),
        n('$--box'),
        [isInternalSize(size), n(`--${size}`)],
        [round, n('--round')],
        [bordered, n('--bordered')],
        [hoverable, n('--hoverable')]
      )
    "
    :style="{
      width: !isInternalSize(size) ? toSizeUnit(size) : undefined,
      height: !isInternalSize(size) ? toSizeUnit(size) : undefined,
      borderColor,
      backgroundColor: color,
    }"
    @click="handleClick"
  >
    <template v-if="src">
      <img
        v-if="lazy"
        v-lazy="src"
        :class="n('image')"
        :src="src"
        :alt="alt"
        :style="{ objectFit: fit }"
        :lazy-loading="loading"
        :lazy-error="error"
        @load="handleLoad"
      />

      <img
        v-else
        :class="n('image')"
        :src="src"
        :alt="alt"
        :style="{ objectFit: fit }"
        @load="handleLoad"
        @error="handleError"
      />
    </template>

    <div ref="textElement" :class="n('text')" :style="{ transform: `scale(${scale})` }" v-else>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Lazy, { type LazyHTMLElement } from '../lazy'
import { defineComponent, ref, onUpdated, type Ref } from 'vue'
import { props } from './props'
import { toSizeUnit } from '../utils/elements'
import { createNamespace } from '../utils/components'
import { call } from '@varlet/shared'
import { onSmartMounted } from '@varlet/use'

const isInternalSize = (size: any) => ['mini', 'small', 'normal', 'large'].includes(size)

const { name, n, classes } = createNamespace('avatar')

export default defineComponent({
  name,
  directives: { Lazy },
  props,
  setup(props) {
    const avatarElement: Ref<HTMLElement | null> = ref(null)
    const textElement: Ref<HTMLElement | null> = ref(null)
    const scale: Ref<number> = ref(1)

    onSmartMounted(getScale)
    onUpdated(getScale)

    function getScale() {
      if (!avatarElement.value || !textElement.value) {
        scale.value = 1
        return
      }

      const avatarElementWidth = avatarElement.value.offsetWidth
      const textElementWidth = textElement.value.offsetWidth

      if (avatarElementWidth > textElementWidth) {
        scale.value = 1
      } else {
        scale.value = avatarElementWidth / textElementWidth
      }
    }

    function handleLoad(e: Event) {
      const el: LazyHTMLElement = e.currentTarget as LazyHTMLElement
      const { lazy, onLoad, onError } = props

      if (lazy) {
        el._lazy.state === 'success' && call(onLoad, e)
        el._lazy.state === 'error' && call(onError, e)
      } else {
        call(onLoad, e)
      }
    }

    function handleError(e: Event) {
      call(props.onError, e)
    }

    function handleClick(e: Event) {
      call(props.onClick, e)
    }

    return {
      avatarElement,
      textElement,
      scale,
      n,
      classes,
      isInternalSize,
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
@import './avatar';
</style>
