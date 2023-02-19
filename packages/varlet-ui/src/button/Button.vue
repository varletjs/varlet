<template>
  <button
    v-ripple="{ disabled: disabled || !ripple }"
    ref="buttonEl"
    :class="
      classes(
        n(),
        n('$--box'),
        n(`--${states.size}`),
        [block, `${n('$--flex')} ${n('--block')}`, n('$--inline-flex')],
        [disabled, n('--disabled')],
        [
          states.text,
          `${n(`--text-${states.type}`)} ${n('--text')}`,
          `${n(`--${states.type}`)} ${n(`$-elevation--${states.elevation}`)}`,
        ],
        [states.text && disabled, n('--text-disabled')],
        [round, n('--round')],
        [states.outline, n('--outline')]
      )
    "
    :style="{
      color: states.textColor,
      background: states.color,
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
import { computed, defineComponent, ref, type Ref } from 'vue'
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

    const states = computed(() => {
      if (!buttonGroup) {
        return {
          elevation: 2,
          type: props.type != null ? props.type : 'default',
          size: props.size != null ? props.size : 'normal',
          color: props.color,
          text: props.text,
          textColor: props.textColor,
          outline: props.outline,
        }
      }

      const { type, size, color, textColor, mode } = buttonGroup

      return {
        elevation: 0,
        type: props.type != null ? props.type : type.value,
        size: props.size != null ? props.size : size.value,
        color: props.color != null ? props.color : color.value,
        textColor: props.textColor != null ? props.textColor : textColor.value,
        text: mode.value !== 'normal',
        outline: mode.value === 'outline',
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
      states,
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
