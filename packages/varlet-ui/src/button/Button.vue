<template>
  <button
    v-ripple="{ disabled: disabled || !ripple }"
    class="var-button var--box"
    :class="[
      `var-button--${size}`,
      block ? 'var--flex var-button--block' : 'var--inline-flex',
      disabled ? 'var-button--disabled' : null,
      text ? `var-button--text-${type}` : `var-button--${type}`,
      text ? 'var-button--text' : 'var-elevation--2',
      text && disabled ? 'var-button--text-disabled' : null,
      round ? 'var-button--round' : null,
      outline ? 'var-button--outline' : null,
    ]"
    :style="{
      color: textColor,
      background: color,
    }"
    :disabled="disabled"
    @click="handleClick"
    @touchstart="handleTouchstart"
  >
    <var-loading
      class="var-button__loading"
      var-button-cover
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
import VarLoading from '../loading'
import { defineComponent, Ref, ref, toRef, watchEffect } from 'vue'
import { props } from './props'
import { isPromise } from '../utils/shared'

export default defineComponent({
  name: 'VarButton',
  components: {
    VarLoading,
  },
  directives: { Ripple },
  props,
  setup(props) {
    let loadingRef: Ref<boolean> = props.autoLoading ? ref(false) : toRef(props, 'loading')

    watchEffect(() => {
      if (props.autoLoading) {
        loadingRef.value = false
      } else {
        loadingRef.value = props.loading
      }
    })

    const autoChangeLoading = (returnValue: Promise<any> | undefined | void): void => {
      const { autoLoading } = props

      if (autoLoading && isPromise(returnValue)) {
        loadingRef.value = true
        returnValue.finally(() => {
          loadingRef.value = false
        })
      }
    }

    const handleClick = (e: Event) => {
      const { disabled, onClick } = props

      if (loadingRef.value || disabled) {
        return
      }

      autoChangeLoading(onClick?.(e))
    }

    const handleTouchstart = (e: Event) => {
      const { disabled, onTouchstart } = props

      if (loadingRef.value || disabled) {
        return
      }

      autoChangeLoading(onTouchstart?.(e))
    }

    return {
      handleClick,
      handleTouchstart,
      loading: loadingRef,
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
