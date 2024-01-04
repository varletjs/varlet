<template>
  <button
    :class="
      classes(
        n(),
        n('$--box'),
        n(`--${states.size}`),
        [block, `${n('$--flex')} ${n('--block')}`, n('$--inline-flex')],
        [!states.text, states.elevation],
        [!states.iconContainer && !states.text, n(`--${states.type}`)],
        [states.text, `${n('--text')} ${n(`--text-${states.type}`)}`],
        [states.iconContainer, n(`--icon-container-${states.type}`)],
        [round, n('--round')],
        [states.outline, n('--outline')],
        [loading || pending, n('--loading')],
        [disabled, n('--disabled')],
        [states.text && disabled, n('--text-disabled')]
      )
    "
    v-ripple="{ disabled: disabled || !ripple || loading || pending }"
    v-hover:desktop="handleHovering"
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

    <var-hover-overlay :hovering="disabled || loading || pending ? false : hovering" />
  </button>
</template>

<script lang="ts">
import Ripple from '../ripple'
import VarLoading from '../loading'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import Hover from '../hover'
import { computed, defineComponent, ref } from 'vue'
import { props } from './props'
import { createNamespace, formatElevation } from '../utils/components'
import { useButtonGroup } from './provide'
import { isArray, call } from '@varlet/shared'

const { name, n, classes } = createNamespace('button')

export default defineComponent({
  name,
  components: {
    VarLoading,
    VarHoverOverlay,
  },
  directives: { Ripple, Hover },
  props,
  setup(props) {
    const pending = ref(false)
    const { buttonGroup } = useButtonGroup()
    const { hovering, handleHovering } = useHoverOverlay()
    const states = computed(() => {
      if (!buttonGroup) {
        return {
          elevation: formatElevation(props.elevation, 2),
          type: props.type != null ? props.type : 'default',
          size: props.size != null ? props.size : 'normal',
          color: props.color,
          text: props.text,
          textColor: props.textColor,
          outline: props.outline,
          iconContainer: props.iconContainer,
        }
      }

      const { type, size, color, textColor, mode } = buttonGroup

      return {
        elevation: '',
        type: props.type != null ? props.type : type.value,
        size: props.size != null ? props.size : size.value,
        color: props.color != null ? props.color : color.value,
        textColor: props.textColor != null ? props.textColor : textColor.value,
        text: mode.value === 'text' || mode.value === 'outline',
        outline: mode.value === 'outline',
        iconContainer: mode.value === 'icon-container',
      }
    })

    function attemptAutoLoading(result: any) {
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

    function handleClick(e: Event) {
      const { loading, disabled, onClick } = props

      if (!onClick || loading || disabled || pending.value) {
        return
      }

      attemptAutoLoading(call(onClick, e))
    }

    function handleTouchstart(e: Event) {
      const { loading, disabled, onTouchstart } = props

      if (!onTouchstart || loading || disabled || pending.value) {
        return
      }

      attemptAutoLoading(call(onTouchstart, e))
    }

    return {
      pending,
      states,
      hovering,
      n,
      classes,
      handleHovering,
      handleClick,
      handleTouchstart,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../hover-overlay/hoverOverlay';
@import '../ripple/ripple';
@import '../loading/loading';
@import './button';
</style>
