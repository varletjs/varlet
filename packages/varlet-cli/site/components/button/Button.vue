<template>
  <button
    v-ripple="{ disabled: disabled || !ripple }"
    class="var-site-button var-site--box"
    :class="[
      `var-site-button--${size}`,
      block ? 'var-site--flex var-site-button--block' : 'var-site--inline-flex',
      disabled ? 'var-site-button--disabled' : null,
      text ? `var-site-button--text-${type}` : `var-site-button--${type}`,
      text ? 'var-site-button--text' : 'var-elevation--1',
      text && disabled ? 'var-site-button--text-disabled' : null,
      round ? 'var-site-button--round' : null,
      outline ? 'var-site-button--outline' : null,
    ]"
    :style="{
      color: textColor,
      background: color,
    }"
    :disabled="disabled"
    @click="handleClick"
    @touchstart="handleTouchstart"
  >
    <var-site-loading
      class="var-site-button__loading"
      :type="loadingType"
      :size="loadingSize"
      :radius="loadingRadius"
      v-if="loading"
    />
    <div class="var-site-button__content" :class="[loading ? 'var-site-button--hidden' : null]">
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
  name: 'VarSiteButton',
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
@import '../styles/common';
@import '../styles/elevation';
@import '../ripple/ripple';
@import '../loading/loading';
@import './button';
</style>
