<template>
  <button
    v-ripple="{ disabled: disabled || !ripple }"
    class="var-button var--box"
    :class="[
      `var-button--${size}`,
      block ? 'var--flex' : 'var--inline-flex',
      disabled ? 'var-button--disabled' : null,
      text ? `var-button--text-${type}` : `var-button--${type}`,
      text ? 'var-button--text' : 'var-elevation--1',
      text && disabled ? 'var-button--text-disabled' : null,
      round ? 'var-button--round' : null,
      outline ? 'var-button--outline' : null,
    ]"
    :style="{
      color: textColor,
      background: color,
      width: block ? '100%' : null,
    }"
    :disabled="disabled"
    @click="handleClick"
    @touchstart="handleTouchstart"
  >
    <var-loading
      class="var-button__loading"
      :type="loadingType"
      :size="loadingSize"
      :radius="loadingRadius"
      v-if="loading"
    />
    <div class="var-button__content" :class="[loading ? 'var-button--hidden' : null]">
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import Ripple from '../ripple'
import Loading from '../loading'
import { defineComponent } from 'vue'
import { props } from './props'

export default defineComponent({
  name: 'VarButton',
  components: {
    [Loading.name]: Loading,
  },
  directives: { Ripple },
  props,
  setup(props) {
    const handleClick = (e: Event) => {
      const { loading, disabled, onClick } = props

      if (loading || disabled) {
        return
      }

      onClick?.(e)
    }

    const handleTouchstart = (e: Event) => {
      const { loading, disabled, onTouchstart } = props

      if (loading || disabled) {
        return
      }

      onTouchstart?.(e)
    }

    return {
      handleClick,
      handleTouchstart,
    }
  },
})
</script>

<style lang="less">
@import './button';
</style>
