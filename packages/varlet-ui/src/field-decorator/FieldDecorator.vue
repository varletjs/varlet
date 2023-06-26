<template>
  <div
    :class="classes(n(), n('$--box'), n(`--${variant}`), [size === 'small', n('--small')], [disabled, n('--disabled')])"
    @click="handleClick"
  >
    <div
      :class="
        classes(
          n('controller'),
          [isFocus, n('--focus')],
          [errorMessage, n('--error')],
          [formDisabled || disabled, n('--disabled')]
        )
      "
      :style="{
        color,
        cursor,
        overflow: isFloating ? 'visible' : 'hidden',
      }"
    >
      <div :class="classes(n('icon'), [!hint, n('--icon-non-hint')])">
        <slot name="prepend-icon" />
      </div>

      <div :class="classes(n('middle'), [!hint, n('--middle-non-hint')])">
        <slot />
      </div>

      <label
        v-if="placeholder && hint"
        :class="
          classes(
            n('placeholder'),
            n('$--ellipsis'),
            [isFocus, n('--focus')],
            [formDisabled || disabled, n('--disabled')],
            [errorMessage, n('--error')],
            computePlaceholderState()
          )
        "
        :style="{
          color,
        }"
        :for="id"
      >
        <span>{{ placeholder }}</span>
      </label>

      <div :class="classes(n('icon'), [!hint, n('--icon-non-hint')])">
        <var-icon
          :class="n('clear-icon')"
          var-field-decorator-cover
          name="close-circle"
          v-if="clearable && !isEmpty(value)"
          @click="handleClear"
        />
        <slot name="append-icon" />
      </div>
    </div>

    <template v-if="line">
      <fieldset
        v-if="variant === 'outlined'"
        :class="
          classes(
            n('line'),
            [isFocus, n('--line-focus')],
            [errorMessage, n('--line-error')],
            [formDisabled || disabled, n('--line-disabled')]
          )
        "
        :style="{ borderColor: color }"
      >
        <legend
          :class="classes(n('line-legend'), [isFloating, n('line-legend--hint')])"
          :style="{ width: legendWidth }"
        >
          <teleport to="body" v-if="placeholder && hint">
            <span
              ref="placeholderTextEl"
              style="font-size: var(--field-decorator-placeholder-size)"
              :class="
                classes(n('placeholder-text'), n('$--ellipsis'), [size === 'small', n('placeholder-text--small')])
              "
              >{{ placeholder }}</span
            >
          </teleport>
        </legend>
      </fieldset>

      <div
        :class="classes(n('line'), [formDisabled || disabled, n('--line-disabled')], [errorMessage, n('--line-error')])"
        :style="{ background: !errorMessage ? blurColor : undefined }"
        v-else
      >
        <div
          :class="
            classes(
              n('dot'),
              [isFocus, n('--line-focus')],
              [formDisabled || disabled, n('--line-disabled')],
              [errorMessage, n('--line-error')]
            )
          "
          :style="{ background: !errorMessage ? focusColor : undefined }"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { defineComponent, ref, type Ref, computed, type ComputedRef, onUpdated } from 'vue'
import { props } from './props'
import { isEmpty } from '@varlet/shared'
import { createNamespace, call } from '../utils/components'
import { onWindowResize, onSmartMounted } from '@varlet/use'
import { getStyle } from '../utils/elements'

const { n, classes } = createNamespace('field-decorator')

export default defineComponent({
  name: 'VarFieldDecorator',
  components: {
    VarIcon,
  },
  props,
  setup(props, { slots }) {
    const placeholderTextEl: Ref<HTMLElement | null> = ref(null)
    const legendWidth: Ref<string> = ref('')
    const color: ComputedRef<string | undefined> = computed(() =>
      !props.errorMessage ? (props.isFocus ? props.focusColor : props.blurColor) : undefined
    )
    const isFloating = computed(() => props.hint && (!isEmpty(props.value) || props.isFocus || slots['prepend-icon']))

    const computePlaceholderState = () => {
      const { hint, value, composing } = props

      if (!hint && (!isEmpty(value) || composing)) {
        return n('--placeholder-hidden')
      }

      if (isFloating.value) {
        return n('--placeholder-hint')
      }
    }

    const resize = () => {
      const { size, hint, variant, placeholder } = props
      if (!placeholder || !hint || variant !== 'outlined') {
        legendWidth.value = ''
        return
      }

      const placeholderTextStyle = getStyle(placeholderTextEl.value!)
      const placeholderSpace = `var(--field-decorator-outlined-${size}-placeholder-space)`
      legendWidth.value = `calc(${placeholderTextStyle!.width} * 0.75 + ${placeholderSpace} * 2)`
    }

    const handleClear = (e: Event) => {
      call(props.onClear, e)
    }

    const handleClick = (e: Event) => {
      call(props.onClick, e)
    }

    onWindowResize(resize)
    onSmartMounted(resize)
    onUpdated(resize)

    return {
      placeholderTextEl,
      color,
      legendWidth,
      isFloating,
      computePlaceholderState,
      n,
      classes,
      isEmpty,
      handleClear,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './fieldDecorator';
</style>
