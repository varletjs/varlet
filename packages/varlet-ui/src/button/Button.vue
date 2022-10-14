<template>
  <button
    v-ripple="{ disabled: disabled || !ripple }"
    :class="
      classes(
        n(),
        'var--box',
        n(`--${size}`),
        [block, `var--flex ${n('--block')}`, 'var--inline-flex'],
        [disabled, n('--disabled')],
        [text, `${n(`--text-${type}`)} ${n('--text')}`, `${n(`--${type}`)} var-elevation--2`],
        [text && disabled, n('--text-disabled')],
        [round, n('--round')],
        [outline, n('--outline')]
      )
    "
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
      :color="loadingColor"
      :type="loadingType"
      :size="loadingSize"
      :radius="loadingRadius"
      v-if="loading || pending"
    />
    <div :class="classes(n('content'), [loading || pending, n('--hidden')])">
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
import type { Ref } from 'vue'

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
    const notAvailable = computed(() => props.loading || props.disabled || pending.value)

    const attemptAutoLoading = (result: any) => {
      if (props.autoLoading) {
        pending.value = true
        Promise.resolve(result)
          .then(() => {
            pending.value = false
          })
          .catch(() => {
            pending.value = false
          })
      }
    }

    const handleClick = (e: Event) => {
      const { onClick } = props

      if (!onClick || notAvailable.value) {
        return
      }

      attemptAutoLoading(onClick(e))
    }

    const handleTouchstart = (e: Event) => {
      const { onTouchstart } = props

      if (!onTouchstart || notAvailable.value) {
        return
      }

      attemptAutoLoading(onTouchstart(e))
    }

    return {
      n,
      classes,
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
