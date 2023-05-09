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
      ref="controllerEl"
      :style="{
        color,
        cursor,
        overflow: isFloating ? 'visible' : 'hidden',
      }"
    >
      <div :class="classes(n('icon'), [!hint, n('--icon-non-hint')])">
        <slot name="prepend-icon" />
      </div>

      <div ref="middleEl" :class="classes(n('middle'), [!hint, n('--middle-non-hint')])">
        <slot />
      </div>

      <label
        v-if="hint ? placeholderTransform : alwaysCustomPlaceholder"
        :class="
          classes(
            n('placeholder'),
            n('$--ellipsis'),
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
          maxWidth: placeholderMaxWidth,
        }"
        :for="id"
      >
        <span>{{ placeholder }}</span>
      </label>
      <span v-if="variant === 'outlined'" ref="placeholderTextEl" :class="[n('placeholder-text'), n('$--ellipsis')]">{{
        placeholder
      }}</span>

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
      <template v-if="variant === 'outlined'">
        <fieldset
          :class="
            classes(
              n('line'),
              [isFocus, n('--line-focus')],
              [errorMessage, n('--line-error')],
              [formDisabled || disabled, n('--line-disabled')]
            )
          "
        >
          <legend
            :class="classes(n('line-legend'), [isFloating, n('line-legend--hint')])"
            :style="{ width: legendWidth }"
          ></legend>
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
import { defineComponent, ref, watch, onBeforeUnmount, type Ref, computed, type ComputedRef } from 'vue'
import { props } from './props'
import { isEmpty } from '@varlet/shared'
import { createNamespace, call } from '../utils/components'
import { useEventListener, useMounted } from '@varlet/use'

const { n, classes } = createNamespace('field-decorator')

export default defineComponent({
  name: 'VarFieldDecorator',
  components: {
    VarIcon,
  },
  props,
  setup(props) {
    const controllerEl: Ref<HTMLElement | null> = ref(null)
    const middleEl: Ref<HTMLElement | null> = ref(null)
    const placeholderTextEl: Ref<HTMLElement | null> = ref(null)
    const legendWidth: Ref<string> = ref('')
    const placeholderTransform: Ref<string> = ref('')
    const placeholderMaxWidth: Ref<string> = ref('')

    const color: ComputedRef<string | undefined> = computed(() =>
      !props.errorMessage ? (props.isFocus ? props.focusColor : props.blurColor) : undefined
    )
    const isFloating = computed(() => props.hint && (!isEmpty(props.value) || props.isFocus))

    const computePlaceholderState = () => {
      const { hint, value, composing } = props

      if (!hint && (!isEmpty(value) || composing)) {
        return n('--placeholder-hidden')
      }
    }

    let controllerRect: DOMRect | null = null
    let middleRect: DOMRect | null = null
    let controllerComputedStyle: CSSStyleDeclaration | null = null
    let placeholderTextComputedStyle: CSSStyleDeclaration | null = null
    const updateLayoutVariables = () => {
      controllerRect = controllerEl.value!.getBoundingClientRect()
      middleRect = middleEl.value!.getBoundingClientRect()
      controllerComputedStyle = window.getComputedStyle(controllerEl.value!)
      if (props.variant === 'outlined') {
        placeholderTextComputedStyle = window.getComputedStyle(placeholderTextEl.value!)
      }
    }

    const updateLayout = () => {
      const { size, hint, placeholder, variant } = props

      if (!isFloating.value || !placeholder) {
        placeholderTransform.value = hint
          ? `translate(${
              middleRect!.left - controllerRect!.left
            }px, calc(var(--field-decorator-${variant}-${size}-placeholder-translate-y) + var(--field-decorator-middle-offset-y))) scale(1)`
          : ''
        placeholderMaxWidth.value = `${middleRect!.width}px`
        return
      }

      const translateY = variant === 'outlined' ? '-50%' : '0'
      placeholderTransform.value = `translate(${controllerComputedStyle!.paddingLeft}, ${translateY}) scale(0.75)`

      if (variant === 'outlined') {
        const placeholderSpace = `var(--field-decorator-outlined-${size}-placeholder-space)`
        legendWidth.value = `calc(${placeholderTextComputedStyle!.width} * 0.75 + ${placeholderSpace} * 2)`

        placeholderMaxWidth.value = `calc((100% - var(--field-decorator-outlined-${size}-padding-left) - var(--field-decorator-outlined-${size}-padding-right)) * 1.33)`
      } else {
        placeholderMaxWidth.value = '133%'
      }
    }

    const handleClear = (e: Event) => {
      call(props.onClear, e)
    }

    const handleClick = (e: Event) => {
      call(props.onClick, e)
    }

    const resize = () => {
      updateLayoutVariables()
      updateLayout()
    }
    watch(() => [props.size, props.placeholder, props.hint, props.value, props.variant], resize)
    useMounted(resize)
    useEventListener(() => window, 'resize', resize)

    watch(isFloating, updateLayout)

    onBeforeUnmount(() => {
      controllerRect = null
      middleRect = null
      controllerComputedStyle = null
      placeholderTextComputedStyle = null
    })

    return {
      controllerEl,
      middleEl,
      placeholderTextEl,
      placeholderTransform,
      placeholderMaxWidth,
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
