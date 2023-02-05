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
        [text, `${n(`--text-${type}`)} ${n('--text')}`, `${n(`--${type}`)} ${n(`$-elevation--${boxShadow ? 0 : 2}`)}`],
        [text && disabled, n('--text-disabled')],
        [round, n('--round')],
        [outline, n('--outline')]
      )
    "
    :style="{
      color: textColor,
      background: color,
    }"
    :type="nativeType"
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
import { computed, ComputedRef, defineComponent, ref, type Ref } from 'vue'
import { props } from './props'
import { call, createNamespace } from '../utils/components'
import { useButtonGroup } from './provide'
import { isArray } from '@varlet/shared'
import type { ButtonProvider } from './provide'

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
    const { buttonGroup, bindButtonGroup } = useButtonGroup()
    const boxShadow = computed(() => {
      return buttonGroup ? buttonGroup.boxShadow.value : false
    })
    // const buttonProvider: ButtonProvider = {
    //   sync: (values) => {
    //     console.log(values,22)
    //     value.value = values
    //   },
    // }
    // call(bindButtonGroup, buttonProvider)
    console.log(boxShadow.value, 111)
    const attemptAutoLoading = (result: any) => {
      if (props.autoLoading) {
        pending.value = true

        result = isArray(result) ? result : [result]

        Promise.all(result)
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

      attemptAutoLoading(call(onClick, e))
    }

    const handleTouchstart = (e: Event) => {
      const { loading, disabled, onTouchstart } = props

      if (!onTouchstart || loading || disabled || pending.value) {
        return
      }

      attemptAutoLoading(call(onTouchstart, e))
    }

    return {
      n,
      classes,
      pending,
      boxShadow,
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
