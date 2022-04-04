<template>
  <div :class="n()">
    <div
      :class="classes(n('block'), isDisabled ? n('--disabled') : null, errorMessage ? n('--error') : null)"
      :style="{
        height: thumbSize === undefined ? thumbSize : `${3 * toNumber(thumbSize)}px`,
        margin: thumbSize === undefined ? thumbSize : `0 ${toNumber(thumbSize) / 2}px`,
      }"
      ref="sliderEl"
      @click="click"
    >
      <div :class="n('track')">
        <div
          :class="n('track-background')"
          :style="{
            background: trackColor,
            height: trackHeight + 'px',
          }"
        ></div>
        <div :class="n('track-fill')" :style="getFillStyle"></div>
      </div>
      <div
        v-for="item in thumbList"
        :class="n('thumb')"
        :key="item.enumValue"
        :style="{
          left: `${item.value}%`,
          zIndex: thumbsProps[item.enumValue].active ? 1 : undefined,
        }"
        @touchstart="start($event, item.enumValue)"
        @touchmove="move($event, item.enumValue)"
        @touchend="end(item.enumValue)"
        @touchcancel="end(item.enumValue)"
      >
        <slot name="button" :current-value="item.value">
          <div
            :class="n('thumb-block')"
            :style="{
              background: thumbColor,
              height: thumbSize + 'px',
              width: thumbSize + 'px',
            }"
          ></div>
          <div
            :class="classes(n('thumb-ripple'), thumbsProps[item.enumValue].active ? n('thumb-ripple-active') : null)"
            :style="{
              background: thumbColor,
              ...getRippleSize(item),
            }"
          ></div>
          <div
            :class="classes(n('thumb-label'), showLabel(item.enumValue) ? n('thumb-label-active') : null)"
            :style="{
              background: labelColor,
              color: labelTextColor,
              height: thumbSize === undefined ? thumbSize : `${2 * toNumber(thumbSize)}px`,
              width: thumbSize === undefined ? thumbSize : `${2 * toNumber(thumbSize)}px`,
            }"
          >
            <span>{{ item.value }}</span>
          </div>
        </slot>
      </div>
    </div>
    <var-form-details :error-message="errorMessage" :class="n('form')" var-slider-cover />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed, reactive, nextTick, watch } from 'vue'
import { useValidation, createNamespace, call } from '../utils/components'
import { useForm } from '../form/provide'
import { getLeft } from '../utils/elements'
import { isArray, isNumber, toNumber } from '../utils/shared'
import { props } from './props'
import VarFormDetails from '../form-details'
import type { Ref, ComputedRef, UnwrapRef } from 'vue'
import type { SliderProvider } from './provide'

const { n, classes } = createNamespace('slider')

enum Thumbs {
  First = '1',
  Second = '2',
}

type ThumbProps = {
  startPosition: number
  currentLeft: number
  percentValue: number
  active: boolean
}

type ThumbsProps = {
  [Thumbs.First]: ThumbProps
  [Thumbs.Second]: ThumbProps
}

type ThumbsListProps = {
  value: number | number[]
  enumValue: Thumbs
}

export default defineComponent({
  name: 'VarSlider',
  components: {
    VarFormDetails,
  },
  props,
  setup(props) {
    const { bindForm, form } = useForm()
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()

    const validate = () => v(props.rules, props.modelValue)

    const getThumbProps = (): ThumbProps => ({
      startPosition: 0,
      currentLeft: 0,
      active: false,
      percentValue: 0,
    })

    const validateWithTrigger = () => nextTick(() => vt(['onChange'], 'onChange', props.rules, props.modelValue))

    const sliderEl: Ref<HTMLDivElement | null> = ref(null)
    const maxWidth = ref(0)
    const isScroll: Ref<boolean> = ref(false)

    const thumbsProps: UnwrapRef<ThumbsProps> = reactive({
      [Thumbs.First]: getThumbProps(),
      [Thumbs.Second]: getThumbProps(),
    })

    const unitWidth: ComputedRef<number> = computed(() => (maxWidth.value / 100) * toNumber(props.step))
    const thumbList: ComputedRef<Array<ThumbsListProps>> = computed(() => {
      let list = [{ value: props.modelValue, enumValue: Thumbs.First }]

      if (props.range && isArray(props.modelValue)) {
        list = [
          { value: props.modelValue[0], enumValue: Thumbs.First },
          { value: props.modelValue[1], enumValue: Thumbs.Second },
        ]
      }

      return list
    })

    const getRippleSize = (item: ThumbsListProps) => {
      let size: string | undefined

      if (props.thumbSize !== undefined) {
        size = thumbsProps[item.enumValue].active ? `${3 * toNumber(props.thumbSize)}px` : '0px'
      }

      return {
        height: size,
        width: size,
      }
    }

    const showLabel = (type: keyof ThumbsProps): boolean => {
      if (props.labelVisible === 'always') return true
      if (props.labelVisible === 'never') return false

      return thumbsProps[type].active
    }

    const getFillStyle: ComputedRef<Record<string, string | undefined>> = computed(() => {
      const { activeColor, range, modelValue } = props

      const width = range && isArray(modelValue) ? Math.abs(modelValue[0] - modelValue[1]) : modelValue

      const left = range && isArray(modelValue) ? Math.min(modelValue[0], modelValue[1]) : 0

      return {
        width: `${width}%`,
        left: `${left}%`,
        background: activeColor,
      }
    })

    const isDisabled: ComputedRef<boolean | undefined> = computed(() => props.disabled || form?.disabled.value)

    const isReadonly: ComputedRef<boolean | undefined> = computed(() => props.readonly || form?.readonly.value)

    const setPercent = (moveDistance: number, type: keyof ThumbsProps) => {
      let rangeValue: Array<number> = []
      const { step, range, modelValue, onChange } = props
      const stepNumber = toNumber(step)
      const roundDistance = Math.round(moveDistance / unitWidth.value)
      const curValue: number = roundDistance * stepNumber
      const prevValue = thumbsProps[type].percentValue

      thumbsProps[type].percentValue = curValue / stepNumber
      if (range && isArray(modelValue)) {
        rangeValue = type === Thumbs.First ? [curValue, modelValue[1]] : [modelValue[0], curValue]
      }

      if (prevValue !== curValue) {
        const value = range ? rangeValue : curValue
        call(onChange, value)
        call(props['onUpdate:modelValue'], value)
        validateWithTrigger()
      }
    }

    const getType = (offset: number): keyof ThumbsProps => {
      if (!props.range) return Thumbs.First
      const thumb1Distance = thumbsProps[Thumbs.First].percentValue * unitWidth.value
      const thumb2Distance = thumbsProps[Thumbs.Second].percentValue * unitWidth.value
      const offsetToThumb1 = Math.abs(offset - thumb1Distance)
      const offsetToThumb2 = Math.abs(offset - thumb2Distance)

      return offsetToThumb1 <= offsetToThumb2 ? Thumbs.First : Thumbs.Second
    }

    const start = (event: TouchEvent, type: keyof ThumbsProps) => {
      if (!maxWidth.value) maxWidth.value = (sliderEl.value as HTMLDivElement).offsetWidth
      if (isDisabled.value || isReadonly.value) return
      call(props.onStart)
      isScroll.value = true
      thumbsProps[type].startPosition = event.touches[0].clientX
    }

    const move = (event: TouchEvent, type: keyof ThumbsProps) => {
      if (isDisabled.value || isReadonly.value || !isScroll.value) return
      let moveDistance = event.touches[0].clientX - thumbsProps[type].startPosition + thumbsProps[type].currentLeft
      thumbsProps[type].active = true

      if (moveDistance <= 0) moveDistance = 0
      else if (moveDistance >= maxWidth.value) moveDistance = maxWidth.value

      setPercent(moveDistance, type)
    }

    const end = (type: keyof ThumbsProps) => {
      const { range, modelValue, onEnd } = props
      if (isDisabled.value || isReadonly.value) return
      let rangeValue: Array<number> = []

      thumbsProps[type].currentLeft = thumbsProps[type].percentValue * unitWidth.value
      thumbsProps[type].active = false

      const curValue: number = thumbsProps[type].percentValue

      if (range && isArray(modelValue)) {
        rangeValue = type === Thumbs.First ? [curValue, modelValue[1]] : [modelValue[0], curValue]
      }

      call(onEnd, range ? rangeValue : curValue)
      isScroll.value = false
    }

    const click = (event: MouseEvent) => {
      if (isDisabled.value || isReadonly.value) return
      if ((event.target as HTMLDivElement).closest('.var-slider__thumb')) return
      const offset = event.clientX - getLeft(event.currentTarget as HTMLDivElement)
      const type = getType(offset)
      setPercent(offset, type)
      end(type)
    }

    const stepValidator = () => {
      const stepNumber = toNumber(props.step)
      if (isNaN(stepNumber)) {
        console.warn('[Varlet] Slider: type of prop "step" should be Number')
        return false
      }
      if (stepNumber < 1 || stepNumber > 100) {
        console.warn('[Varlet] Slider: "step" should be >= 0 and <= 100')
        return false
      }
      if (parseInt(`${props.step}`, 10) !== stepNumber) {
        console.warn('[Varlet] Slider: "step" should be an Integer')
        return false
      }
      return true
    }

    const valueValidator = () => {
      const { range, modelValue } = props
      if (range && !isArray(modelValue)) {
        console.error('[Varlet] Slider: "modelValue" should be an Array')
        return false
      }
      if (!range && isArray(modelValue)) {
        console.error('[Varlet] Slider: "modelValue" should be a Number')
        return false
      }
      if (range && isArray(modelValue) && modelValue.length < 2) {
        console.error('[Varlet] Slider: "modelValue" should have two value')
        return false
      }
      return true
    }

    const setProps = (modelValue = props.modelValue, step = toNumber(props.step)) => {
      if (props.range && isArray(modelValue)) {
        thumbsProps[Thumbs.First].percentValue = modelValue[0] / step
        thumbsProps[Thumbs.First].currentLeft = thumbsProps[Thumbs.First].percentValue * unitWidth.value

        thumbsProps[Thumbs.Second].percentValue = modelValue[1] / step
        thumbsProps[Thumbs.Second].currentLeft = thumbsProps[Thumbs.Second].percentValue * unitWidth.value
      } else if (isNumber(modelValue)) {
        thumbsProps[Thumbs.First].currentLeft = (modelValue / step) * unitWidth.value
      }
    }

    watch([() => props.modelValue, () => props.step], ([modelValue, step]) => {
      if (!stepValidator() || !valueValidator() || isScroll.value) return
      setProps(modelValue as number | number[], toNumber(step))
    })

    watch(maxWidth, () => setProps())

    onMounted(() => {
      if (!stepValidator() || !valueValidator()) return

      maxWidth.value = (sliderEl.value as HTMLDivElement).offsetWidth
    })

    const reset = () => {
      const resetValue = props.range ? [0, 0] : 0
      call(props['onUpdate:modelValue'], resetValue)
      resetValidation()
    }

    const sliderProvider: SliderProvider = {
      reset,
      validate,
      resetValidation,
    }

    call(bindForm, sliderProvider)

    return {
      n,
      classes,
      Thumbs,
      sliderEl,
      getFillStyle,
      isDisabled,
      errorMessage,
      thumbsProps,
      thumbList,
      toNumber,
      getRippleSize,
      showLabel,
      start,
      move,
      end,
      click,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../form-details/formDetails';
@import './slider';
</style>
