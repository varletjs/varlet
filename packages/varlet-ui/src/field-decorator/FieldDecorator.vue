<template>
  <div
    ref="decoratorEl"
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
      }"
    >
      <div :class="classes(n('icon'), [!hint, n('--non-hint')])" ref="prependIconEl">
        <slot name="prepend-icon" />
      </div>

      <div :class="classes(n('wrap'), [!hint, n('--wrap-non-hint')])">
        <slot />

        <label
          v-if="decoratorEl && (hint || alwaysCustomPlaceholder)"
          :class="
            classes(
              n('placeholder'),
              n('$--ellipsis'),
              [textarea, n('placeholder-textarea')],
              [isFocus, n('--focus')],
              [formDisabled || disabled, n('--disabled')],
              [errorMessage, n('--error')],
              [!hint, n('--placeholder-non-hint')],
              computePlaceholderState()
            )
          "
          :style="{
            '--field-decorator-placeholder-max-width': placeholderMaxWidth,
            transform: placeholderTransform,
            color,
          }"
          :for="id"
        >
          {{ placeholder }}
        </label>
      </div>

      <div :class="classes(n('icon'), [!hint, n('--non-hint')])">
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
      <template v-if="variant === 'outlined'">
        <fieldset
          :class="
            classes(
              n('line'),
              n('$--box'),
              [isFocus, n('--line-focus')],
              [errorMessage, n('--line-error')],
              [formDisabled || disabled, n('--line-disabled')]
            )
          "
        >
          <legend :class="classes(n('line-legend'), [hint && (!isEmpty(value) || isFocus), n('line-legend--hint')])">
            <span :class="classes(n('line-legend-placeholder'))">
              {{ placeholder }}
            </span>
          </legend>
        </fieldset>
      </template>

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
import { defineComponent, ref, watchEffect, type Ref, computed, type ComputedRef } from 'vue'
import { props } from './props'
import { isEmpty } from '@varlet/shared'
import { createNamespace, call } from '../utils/components'

const { n, classes } = createNamespace('field-decorator')

export default defineComponent({
  name: 'VarFieldDecorator',
  components: {
    VarIcon,
  },
  props,
  setup(props) {
    const prependIconEl: Ref<HTMLElement | null> = ref(null)
    const decoratorEl: Ref<HTMLElement | null> = ref(null)
    const placeholderMaxWidth: Ref<string> = ref('')
    const placeholderTransform: Ref<string> = ref('')
    const color: ComputedRef<string | undefined> = computed(() =>
      !props.errorMessage ? (props.isFocus ? props.focusColor : props.blurColor) : undefined
    )

    const computePlaceholderState = () => {
      const { hint, value, isFocus, composing } = props

      if (!hint && (!isEmpty(value) || composing)) {
        return n('--placeholder-hidden')
      }

      if (hint && (!isEmpty(value) || isFocus)) {
        return n('--placeholder-hint')
      }
    }

    const handleClear = (e: Event) => {
      call(props.onClear, e)
    }

    const handleClick = (e: Event) => {
      call(props.onClick, e)
    }

    watchEffect(() => {
      const { hint, value, isFocus, variant } = props

      if (!prependIconEl.value || !decoratorEl.value) {
        return
      }

      if (hint && (!isEmpty(value) || isFocus)) {
        const prependIconWidth = window.getComputedStyle(prependIconEl.value)?.width || 0
        placeholderTransform.value = `translate(-${prependIconWidth}, ${variant === 'outlined' ? '-50%' : 0})`
        placeholderMaxWidth.value = `${decoratorEl.value.getBoundingClientRect().width}px`
        return
      }

      placeholderMaxWidth.value = '100%'
      placeholderTransform.value = ''
    })

    return {
      prependIconEl,
      decoratorEl,
      placeholderMaxWidth,
      placeholderTransform,
      color,
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
