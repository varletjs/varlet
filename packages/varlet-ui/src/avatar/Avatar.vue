<template>
  <div
    ref="avatarElement"
    :class="
      classes(
        n(),
        n('$--box'),
        [internalSizeValidator(size), n(`--${size}`)],
        [round, n('--round')],
        [bordered, n('--bordered')]
      )
    "
    :style="{
      width: !internalSizeValidator(size) ? toSizeUnit(size) : undefined,
      height: !internalSizeValidator(size) ? toSizeUnit(size) : undefined,
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
        :style="{ objectFit: fit }"
        :lazy-loading="loading"
        :lazy-error="error"
        @load="handleLoad"
      />

      <img v-else :class="n('image')" :src="src" :style="{ objectFit: fit }" @load="handleLoad" @error="handleError" />
    </template>

    <div
      ref="textElement"
      :class="n('text')"
      :style="{
        scale,
      }"
      v-else
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Lazy from '../lazy'
import { defineComponent, ref, onMounted, onUpdated, type Ref } from 'vue'
import { props, internalSizeValidator, sizeValidator } from './props'
import { toSizeUnit } from '../utils/elements'
import { createNamespace, call } from '../utils/components'
import type { LazyHTMLElement } from '../lazy'

const { n, classes } = createNamespace('avatar')

export default defineComponent({
  name: 'VarAvatar',
  directives: { Lazy },
  props,
  setup(props) {
    const avatarElement: Ref<HTMLDivElement | null> = ref(null)
    const textElement: Ref<HTMLDivElement | null> = ref(null)
    const scale: Ref<number> = ref(1)

    const getScale = () => {
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
      call(props.onError, e)
    }

    const handleClick = (e: Event) => {
      call(props.onClick, e)
    }

    onMounted(getScale)
    onUpdated(getScale)

    return {
      internalSizeValidator,
      sizeValidator,
      toSizeUnit,
      n,
      classes,
      avatarElement,
      textElement,
      scale,
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
