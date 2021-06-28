<template>
  <div class="var-slider">
    <div
      class="var-slider-block"
      :class="[isDisabled ? 'var-slider__disable' : null, errorMessage ? 'var-slider__error' : null]"
      :style="{
        height: `${3 * thumbSize}px`,
        margin: `0 ${thumbSize / 2}px`,
      }"
      ref="sliderEl"
      @click="click"
    >
      <div class="var-slider__track">
        <div
          class="var-slider__track-background"
          :style="{
            background: trackColor,
            height: trackHeight + 'px',
          }"
        ></div>
        <div class="var-slider__track-fill" :style="getFillStyle"></div>
      </div>
      <div
        class="var-slider__thumb"
        :style="{
          left: `${range ? modelValue[0] : modelValue}%`,
          zIndex: thumbProps1.active ? 1 : null,
        }"
        @touchstart="start($event, 1)"
        @touchmove="move($event, 1)"
        @touchend="end(1)"
        @touchcancel="end(1)"
      >
        <div
          class="var-slider__thumb-block"
          :style="{
            background: thumbColor,
            height: thumbSize + 'px',
            width: thumbSize + 'px',
          }"
        ></div>
        <div
          class="var-slider__thumb-ripple"
          :class="[thumbProps1.active ? 'var-slider__thumb-ripple-active' : null]"
          :style="{
            background: thumbColor,
            height: thumbSize ? (thumbProps1.active ? 3 * thumbSize + 'px' : '0px') : null,
            width: thumbSize ? (thumbProps1.active ? 3 * thumbSize + 'px' : '0px') : null,
          }"
        ></div>
        <div
          class="var-slider__thumb-label"
          :class="[showLabel1 ? 'var-slider__thumb-label-active' : null]"
          :style="{
            background: labelColor,
            color: labelTextColor,
            height: 2 * thumbSize + 'px',
            width: 2 * thumbSize + 'px',
          }"
        >
          <span>{{ range ? modelValue[0] : modelValue }}</span>
        </div>
      </div>

      <div
        class="var-slider__thumb"
        v-if="range"
        :style="{
          left: `${range && modelValue[1]}%`,
          zIndex: thumbProps2.active ? 1 : null,
        }"
        @touchstart="start($event, 2)"
        @touchmove="move($event, 2)"
        @touchend="end(2)"
        @touchcancel="end(2)"
      >
        <div
          class="var-slider__thumb-block"
          :style="{
            background: thumbColor,
            height: thumbSize + 'px',
            width: thumbSize + 'px',
          }"
        ></div>
        <div
          class="var-slider__thumb-ripple"
          :class="[thumbProps2.active ? 'var-slider__thumb-ripple-active' : null]"
          :style="{
            background: thumbColor,
            height: thumbSize ? (thumbProps2.active ? 3 * thumbSize + 'px' : '0px') : null,
            width: thumbSize ? (thumbProps2.active ? 3 * thumbSize + 'px' : '0px') : null,
          }"
        ></div>
        <div
          class="var-slider__thumb-label"
          :class="[showLabel2 ? 'var-slider__thumb-label-active' : null]"
          :style="{
            background: labelColor,
            color: labelTextColor,
            height: 2 * thumbSize + 'px',
            width: 2 * thumbSize + 'px',
          }"
        >
          <span>{{ range && modelValue[1] }}</span>
        </div>
      </div>
    </div>
    <var-form-details
      :error-message="errorMessage"
      class="var-slider__form"
      var-slider-cover
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, onMounted, computed, ComputedRef, reactive, UnwrapRef, nextTick, watch } from 'vue'
import { useValidation } from '../utils/components'
import { useForm } from '../form/provide'
import { getLeft } from '../utils/elements'
import { isArray, isNumber, toNumber } from '../utils/shared'
import { props } from './props'
import { SliderProvider } from './provide'
import FormDetails from '../form-details'

type ThumbProps = {
  startPosition: number
  currentLeft: number
  percentValue: number
  active: boolean
}

export default defineComponent({
  name: 'VarSlider',
  components: {
    [FormDetails.name]: FormDetails
  },
  props,
  setup(props) {
    const { bindForm, form } = useForm()
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()

    const validate = () => v(props.rules, props.modelValue)

    const validateWithTrigger = () => nextTick(() => vt(['onChange'], 'onChange', props.rules, props.modelValue))

    const sliderEl: Ref<HTMLDivElement | null> = ref(null)
    const maxWidth: Ref<number> = ref(0)
    const isScroll: Ref<boolean> = ref(false)
    const thumbProps1: UnwrapRef<ThumbProps> = reactive({
      startPosition: 0,
      currentLeft: 0,
      active: false,
      percentValue: 0
    })
    const thumbProps2: UnwrapRef<ThumbProps> = reactive({
      startPosition: 0,
      currentLeft: 0,
      active: false,
      percentValue: 0
    })

    const unitWidth: ComputedRef<number> = computed(() => (maxWidth.value / 100) * toNumber(props.step))

    const showLabel1: ComputedRef<boolean> = computed(() => {
      if (props.labelVisible === 'always') return true
      if (props.labelVisible === 'never') return false
      return thumbProps1.active
    })

    const showLabel2: ComputedRef<boolean> = computed(() => {
      if (props.labelVisible === 'always') return true
      if (props.labelVisible === 'never') return false
      return thumbProps2.active
    })

    const getFillStyle: ComputedRef<Record<string, string | undefined>> = computed(() => {
      const { activeColor, range, modelValue } = props

      const width = range && isArray(modelValue) ? Math.abs(modelValue[0] - modelValue[1]) : modelValue

      const left = range && isArray(modelValue) ? Math.min(modelValue[0], modelValue[1]) : 0

      return {
        width: `${width}%`,
        left: `${left}%`,
        background: activeColor
      }
    })

    const isDisabled: ComputedRef<boolean | undefined> = computed(() => props.disabled || form?.disabled.value)

    const isReadonly: ComputedRef<boolean | undefined> = computed(() => props.readonly || form?.readonly.value)

    const setPercent = (moveDistance: number, type: number) => {
      let prevValue: number
      let rangeValue: Array<number> = []
      const { step, range, modelValue, onChange } = props
      const stepNumber = toNumber(step)
      const roundDistance = Math.round(moveDistance / unitWidth.value)
      const curValue: number = roundDistance * stepNumber

      if (type === 1) {
        prevValue = thumbProps1.percentValue
        thumbProps1.percentValue = curValue / stepNumber
        if (range && isArray(modelValue)) rangeValue = [curValue, modelValue[1]]
      } else {
        prevValue = thumbProps2.percentValue
        thumbProps2.percentValue = curValue / stepNumber
        if (range && isArray(modelValue)) rangeValue = [modelValue[0], curValue]
      }

      if (prevValue !== curValue) {
        if (range) {
          onChange?.(rangeValue)
          props['onUpdate:modelValue']?.(rangeValue)
        } else {
          onChange?.(curValue)
          props['onUpdate:modelValue']?.(curValue)
        }
        validateWithTrigger()
      }
    }

    const getType = (offset: number): number => {
      if (!props.range) return 1
      const thumb1Distance = thumbProps1.percentValue * unitWidth.value
      const thumb2Distance = thumbProps2.percentValue * unitWidth.value
      const offsetToThumb1 = Math.abs(offset - thumb1Distance)
      const offsetToThumb2 = Math.abs(offset - thumb2Distance)

      return offsetToThumb1 <= offsetToThumb2 ? 1 : 2
    }

    const start = (event: TouchEvent, type: number) => {
      if (!maxWidth.value) maxWidth.value = (sliderEl.value as HTMLDivElement).offsetWidth
      if (isDisabled.value || isReadonly.value) return
      props.onStart?.()
      isScroll.value = true
      if (type === 1) {
        thumbProps1.startPosition = event.touches[0].clientX
      } else {
        thumbProps2.startPosition = event.touches[0].clientX
      }
    }

    const move = (event: TouchEvent, type: number) => {
      if (isDisabled.value || isReadonly.value || !isScroll.value) return
      let moveDistance: number

      if (type === 1) {
        thumbProps1.active = true
        moveDistance = event.touches[0].clientX - thumbProps1.startPosition + thumbProps1.currentLeft
      } else {
        thumbProps2.active = true
        moveDistance = event.touches[0].clientX - thumbProps2.startPosition + thumbProps2.currentLeft
      }

      if (moveDistance <= 0) moveDistance = 0
      else if (moveDistance >= maxWidth.value) moveDistance = maxWidth.value
      setPercent(moveDistance, type)
    }

    const end = (type: number) => {
      const { range, modelValue, onEnd } = props
      if (isDisabled.value || isReadonly.value) return
      let rangeValue: Array<number> = []
      const thumbProps = type === 1 ? thumbProps1 : thumbProps2

      thumbProps.currentLeft = thumbProps.percentValue * unitWidth.value
      thumbProps.active = false
      const curValue: number = thumbProps.percentValue
      if (range && isArray(modelValue)) rangeValue = type === 1 ? [curValue, modelValue[1]] : [modelValue[0], curValue]

      if (range) {
        onEnd?.(rangeValue)
      } else {
        onEnd?.(curValue)
      }
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
        thumbProps1.percentValue = modelValue[0] / step
        thumbProps2.percentValue = modelValue[1] / step
        thumbProps1.currentLeft = thumbProps1.percentValue * unitWidth.value
        thumbProps2.currentLeft = thumbProps2.percentValue * unitWidth.value
      } else if (isNumber(modelValue)) {
        thumbProps1.currentLeft = (modelValue / step) * unitWidth.value
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
      props['onUpdate:modelValue']?.(resetValue)
      resetValidation()
    }

    const sliderProvider: SliderProvider = {
      reset,
      validate,
      resetValidation
    }

    bindForm?.(sliderProvider)

    return {
      sliderEl,
      thumbProps1,
      thumbProps2,
      showLabel1,
      showLabel2,
      getFillStyle,
      isDisabled,
      errorMessage,
      start,
      move,
      end,
      click
    }
  }
})
</script>

<style lang="less">
@import '../form-details/formDetails';
@import './slider';
</style>
