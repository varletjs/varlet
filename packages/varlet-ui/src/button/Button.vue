<template>
  <button
    v-ripple="{ disabled: disabled || !ripple }"
    :class="
      classes(
        n(),
        n('$--box'),
        n(`--${getStyles.size}`),
        [block, `${n('$--flex')} ${n('--block')}`, n('$--inline-flex')],
        [disabled, n('--disabled')],
        [
          getStyles.text,
          `${n(`--text-${getStyles.type}`)} ${n('--text')}`,
          `${n(`--${getStyles.type}`)} ${n(`$-elevation--${getStyles.elevation}`)}`,
        ],
        [getStyles.text && disabled, n('--text-disabled')],
        [round, n('--round')],
        [getStyles.outline, n('--outline')]
      )
    "
    :style="{
      color: textColor,
      background: getStyles.color,
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
import { computed, ComputedRef, defineComponent, reactive, ref, type Ref, unref } from 'vue'
import { props } from './props'
import { call, createNamespace } from '../utils/components'
import { useButtonGroup } from './provide'
import { isArray } from '@varlet/shared'

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
    const { buttonGroup } = useButtonGroup()
    const defaultStyles = {
      elevation: 2,
      type: 'default',
      size: 'normal',
    }

    // const getGroupMode = computed(() => {
    //   const modeArray = ['text', 'outline']
    //   return {
    //     text: props.text || modeArray.includes((buttonGroup || {}).mode || ''),
    //     outline: props.outline || (buttonGroup || {}).mode === 'outline'
    //   }
    // })

    const getStyles = computed(() => {
      const modeArray = ['text', 'outline']
      return {
        elevation: (buttonGroup || {}).elevation ? 0 : defaultStyles.elevation,
        type: props.type || (buttonGroup || {}).type || defaultStyles.type,
        size: props.size || (buttonGroup || {}).size || defaultStyles.size,
        color: props.color || (buttonGroup || {}).color,
        text: props.text || modeArray.includes((buttonGroup || {}).mode || ''),
        outline: props.outline || (buttonGroup || {}).mode === 'outline',
      }
    })

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
      getStyles,
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
