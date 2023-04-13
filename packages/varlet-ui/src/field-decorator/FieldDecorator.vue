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
      }"
    >
      <div :class="classes(n('icon'), [!hint, n('--non-hint')])" ref="prependIconEl">
        <slot name="prepend-icon" />
      </div>

      <div :class="classes(n('wrap'), [!hint, n('--wrap-non-hint')])">
        <slot />

        <label
          v-if="hint || alwaysCustomPlaceholder"
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
            color,
            transform: placeholderTransform,
          }"
          :for="id"
        >
          {{ placeholder }}
        </label>
      </div>

      <div :class="classes(n('icon'), [!hint, n('--non-hint')])">
        <slot name="append-icon">
          <var-icon
            :class="n('clear-icon')"
            var-field-decorator-cover
            name="close-circle"
            v-if="clearable && !isEmpty(value)"
            @click="handleClear"
          />
        </slot>
      </div>
    </div>

    <template v-if="line">
      <div
        v-if="variant === 'outlined'"
        :class="classes(n('line'), [isFocus, n('--line-focus')], [formDisabled || disabled, n('--line-disabled')])"
      >
        <template v-if="!(formDisabled || disabled)">
          <div
            :class="classes(n('line-start'), [errorMessage, n('--line-error')])"
            :style="{
              borderColor: color,
            }"
          />
          <div
            :class="
              classes(
                n('line-notch'),
                [hint && (!isEmpty(value) || isFocus), n('line-notch--hint')],
                [errorMessage, n('--line-error')]
              )
            "
            :style="{
              borderColor: color,
            }"
          >
            <div :class="classes(n('line-placeholder'), n('$--ellipsis'))">{{ placeholder }}</div>
          </div>
          <div
            :class="classes(n('line-end'), [errorMessage, n('--line-error')])"
            :style="{
              borderColor: color,
            }"
          />
        </template>
      </div>

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

      if (!prependIconEl.value) {
        return
      }

      if (hint && (!isEmpty(value) || isFocus)) {
        const prependIconWidth = window.getComputedStyle(prependIconEl.value)?.width || 0
        placeholderTransform.value = `translate(-${prependIconWidth}, ${variant === 'outlined' ? '-50%' : 0})`
        return
      }

      placeholderTransform.value = ''
    })

    return {
      prependIconEl,
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
