<template>
  <div
    :class="
      classes(n(), n(`--${variant}`), [size === 'small', n('--small')], n('$--decorator'), [disabled, n('--disabled')])
    "
    @click="handleClick"
  >
    <label :class="classes(n('label'), n('$--relative'), n('$--block'))" :for="id">
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
          color: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
        }"
      >
        <div :class="classes(n('icon'), [!hint, n('--non-hint')])" ref="prependIconEl">
          <slot name="prepend-icon" />
        </div>

        <div :class="classes(n('wrap'), [!hint, n('--wrap-non-hint')])">
          <slot />
          <div
            ref="placeholderEl"
            :class="
              classes(
                n('$--ellipsis'),
                [isFocus, n('--focus')],
                [formDisabled || disabled, n('--disabled')],
                [errorMessage, n('--error')],
                n('placeholder'),
                computePlaceholderState(),
                [textarea, n('placeholder-textarea')],
                [!hint, n('--placeholder-non-hint')]
              )
            "
            :style="{
              color: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
            }"
          >
            {{ placeholder }}
          </div>
        </div>

        <div :class="classes(n('icon'), [!hint, n('--non-hint')])">
          <slot name="append-icon">
            <var-icon
              :class="n('clear-icon')"
              var-input-decorator-cover
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
                borderColor: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
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
                borderColor: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
              }"
            >
              <div :class="classes(n('$--ellipsis'), n('line-placeholder'))">{{ placeholder }}</div>
            </div>
            <div
              :class="classes(n('line-end'), [errorMessage, n('--line-error')])"
              :style="{
                borderColor: !errorMessage ? (isFocus ? focusColor : blurColor) : undefined,
              }"
            />
          </template>
        </div>

        <div
          :class="
            classes(n('line'), [formDisabled || disabled, n('--line-disabled')], [errorMessage, n('--line-error')])
          "
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
    </label>

    <slot name="form-details" />
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { defineComponent, ref, watchEffect, type Ref } from 'vue'
import { props } from './inputDecoratorProps'
import { isEmpty } from '@varlet/shared'
import { createNamespace, call } from '../utils/components'

const { n, classes } = createNamespace('input-decorator')

export default defineComponent({
  name: 'VarInputDecorator',
  components: {
    VarIcon,
  },
  props,
  setup(props, { slots }) {
    const prependIconEl: Ref<HTMLElement | null> = ref(null)
    const placeholderEl: Ref<HTMLElement | null> = ref(null)

    const computePlaceholderState = () => {
      const { hint, value, isFocus, hintPlaceholderState, noHintPlaceholderState } = props
      if (!hint && (!isEmpty(value) || noHintPlaceholderState)) {
        return n('--placeholder-hidden')
      }
      if (hint && (!isEmpty(value) || isFocus || hintPlaceholderState)) {
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
      if (!placeholderEl.value || variant !== 'outlined' || !slots['prepend-icon']) {
        return
      }
      if (hint && (!isEmpty(value) || isFocus)) {
        placeholderEl.value.style.transform = `translate(-${
          window.getComputedStyle(prependIconEl.value!)?.width || 0
        }, -50%)`
      } else {
        placeholderEl.value.style.transform = ''
      }
    })

    return {
      prependIconEl,
      placeholderEl,
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
@import './inputDecorator.less';
</style>
