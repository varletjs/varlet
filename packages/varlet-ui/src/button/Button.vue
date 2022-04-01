<template>
  <button
    v-ripple="{ disabled: disabled || !ripple }"
    :class="buttonClass"
    :style="{
      color: textColor,
      background: color,
    }"
    :disabled="disabled"
    @click="handleClick"
    @touchstart="handleTouchstart"
  >
    <var-loading
      :class="n('loading')"
      var-button-cover
      :type="loadingType"
      :size="loadingSize"
      :radius="loadingRadius"
      v-if="loading || pending"
    />
    <div :class="classes([n('content'), [loading || pending, n('--hidden')]])">
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import Ripple from '../ripple'
import VarLoading from '../loading'
import { defineComponent, ref, computed } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import type { Ref, ComputedRef } from 'vue'

const { n, classes } = createNamespace('button')

export default defineComponent({
  name: 'VarButton',
  components: {
    VarLoading,
  },
  directives: { Ripple },
  props,
  setup(props) {
    const pending: Ref<boolean> = ref(false)

    const buttonClass: ComputedRef<any[]> = computed(() =>
      classes([
        n(),
        'var--box',
        n(`--${props.size}`),
        [props.block, `var--flex ${n('--block')}`, 'var--inline-flex'],
        [props.disabled, n('--disabled')],
        [props.text, `${n(`--text-${props.type}`)} ${n('--text')}`, `${n(`--${props.type}`)} var-elevation--2`],
        [props.text && props.disabled, n('--text-disabled')],
        [props.round, n('--round')],
        [props.outline, n('--outline')],
      ])
    )

    const attemptAutoLoading = (result: any) => {
      if (props.autoLoading) {
        pending.value = true
        Promise.resolve(result).finally(() => {
          pending.value = false
        })
      }
    }

    const handleClick = (e: Event) => {
      const { loading, disabled, onClick } = props

      if (!onClick || loading || disabled || pending.value) {
        return
      }

      attemptAutoLoading(onClick(e))
    }

    const handleTouchstart = (e: Event) => {
      const { loading, disabled, onTouchstart } = props

      if (!onTouchstart || loading || disabled || pending.value) {
        return
      }

      attemptAutoLoading(onTouchstart(e))
    }

    return {
      n,
      classes,
      buttonClass,
      pending,
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
