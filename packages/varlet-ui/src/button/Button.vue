<template>
  <button
    v-ripple="{ disabled: disabled || !ripple }"
    :class="
      classes(
        n(),
        n('$--box'),
        n(`--${size}`),
        [block, `${n('$--flex')} ${n('--block')}`, n('$--inline-flex')],
        [disabled, n('--disabled')],
        [text, `${n(`--text-${type}`)} ${n('--text')}`, `${n(`--${type}`)} ${n('$-elevation--2')}`],
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
import { defineComponent, ref } from 'vue'
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
