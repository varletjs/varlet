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
        '--field-decorator-middle-offset-left': middleOffsetLeft,
        '--field-decorator-middle-offset-width': middleOffsetWidth,
        '--field-decorator-middle-offset-height': middleOffsetHeight,
      }"
    >
      <div :class="classes(n('icon'), [!hint, n('--icon-non-hint')])">
        <slot name="prepend-icon" />
      </div>

      <div ref="middleEl" :class="classes(n('middle'), [!hint, n('--middle-non-hint')])">
        <slot />
      </div>

      <label
        v-if="placeholder && hint"
        :class="
          classes(
            n('placeholder'),
            n('$--ellipsis'),
            [isFocus, n('--focus')],
            [hintCenter, n('--hint-center')],
            [formDisabled || disabled, n('--disabled')],
            [errorMessage, n('--error')],
            [transitionDisabled, n('--transition-disabled')],
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
        <slot name="clear-icon" v-if="clearable && !isEmpty(value)">
          <var-icon :class="n('clear-icon')" var-field-decorator-cover name="close-circle" @click="handleClear" />
        </slot>
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
import { defineComponent, ref, computed, nextTick, onUpdated } from 'vue'
import { props } from './props'
import { isEmpty, getStyle, call } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { onWindowResize, onSmartMounted } from '@varlet/use'

const { name, n, classes } = createNamespace('field-decorator')

export default defineComponent({
  name,
  components: { VarIcon },
  props,
  setup(props) {
    const placeholderTextEl = ref<HTMLElement | null>(null)
    const middleEl = ref<HTMLElement | null>(null)
    const legendWidth = ref('')
    const middleOffsetLeft = ref('0px')
    const middleOffsetWidth = ref('0px')
    const middleOffsetHeight = ref('0px')
    const transitionDisabled = ref(true)
    const isFloating = computed(() => props.hint && (!isEmpty(props.value) || props.isFocus))

    const color = computed<string | undefined>(() =>
      !props.errorMessage ? (props.isFocus ? props.focusColor : props.blurColor) : undefined
    )

    onWindowResize(resize)

    onSmartMounted(() => {
      resize()

      nextTick().then(() => {
        transitionDisabled.value = false
      })
    })

    onUpdated(resize)

    function computePlaceholderState() {
      const { hint, value, composing } = props

      if (!hint && (!isEmpty(value) || composing)) {
        return n('--placeholder-hidden')
      }

      if (isFloating.value) {
        return n('--placeholder-hint')
      }
    }

    function handleClear(e: Event) {
      call(props.onClear, e)
    }

    function handleClick(e: Event) {
      call(props.onClick, e)
    }

    function resize() {
      middleOffsetLeft.value = `${middleEl.value!.offsetLeft}px`
      middleOffsetWidth.value = `${middleEl.value!.offsetWidth}px`
      middleOffsetHeight.value = `${middleEl.value!.offsetHeight}px`

      if (props.variant === 'outlined' && placeholderTextEl.value) {
        const placeholderTextStyle = getStyle(placeholderTextEl.value)
        const placeholderSpace = `var(--field-decorator-outlined-${props.size}-placeholder-space)`
        legendWidth.value = `calc(${placeholderTextStyle.width} * 0.75 + ${placeholderSpace} * 2)`
      }
    }

    return {
      placeholderTextEl,
      middleEl,
      middleOffsetLeft,
      middleOffsetWidth,
      middleOffsetHeight,
      color,
      legendWidth,
      isFloating,
      transitionDisabled,
      resize,
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
