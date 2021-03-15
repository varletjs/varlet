<template>
	<div
		class="var-image var--box"
		:style="{
			width: toSizeUnit(width),
			height: toSizeUnit(height),
			'border-radius': toSizeUnit(radius),
		}"
		:class="[!block ? 'var--inline-block' : null]"
    v-ripple="{ disabled: !ripple }"
    v-bind="$attrs"
  >
		<img
			class="var-image__image"
			:alt="alt"
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
      class="var-image__image"
      :alt="alt"
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
import Lazy, { LazyHTMLElement } from '../lazy'
import { defineComponent } from 'vue'
import { props } from './props'
import { toSizeUnit } from '../utils/elements'

export default defineComponent({
  name: 'VarImage',
  directives: {
    Lazy,
    Ripple,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const handleLoad = (e: Event) => {
      const el: LazyHTMLElement = e.currentTarget as LazyHTMLElement
      const { lazy, onLoad, onError } = props

      if (lazy) {
        el._lazy.state === 'success' && onLoad?.(e)
        el._lazy.state === 'error' && onError?.(e)
      } else {
        onLoad?.(e)
      }
    }

    const handleError = (e: Event) => {
      const { lazy, onError } = props

      !lazy && onError?.(e)
    }

    return {
      toSizeUnit,
      handleLoad,
      handleError,
    }
  },
})
</script>

<style lang="less">
@import './image';
</style>
