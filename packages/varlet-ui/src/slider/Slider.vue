<template>
  <div :class="n()">
    <div
      :class="classes(n('block'), [isDisabled, n('--disabled')], [errorMessage, n('--error')])"
      ref="sliderEl"
      @click="click"
    >
      <div :class="n('track')">
        <div
          :class="n('track-background')"
          :style="{
            background: trackColor,
            height: multiplySizeUnit(trackHeight),
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
        @touchstart.stop="start($event, item.enumValue)"
        @touchmove.stop="move($event, item.enumValue)"
        @touchend="end(item.enumValue)"
        @touchcancel="end(item.enumValue)"
      >
        <slot name="button" :current-value="item.text">
          <div
            :class="n('thumb-block')"
            :style="{
              background: thumbColor,
            }"
            v-hover:desktop="(value) => hover(value, item)"
          ></div>
          <div
            :class="classes(n('thumb-ripple'), [thumbsProps[item.enumValue].active, n('thumb-ripple--active')])"
            :style="{
              background: thumbsProps[item.enumValue].active ? thumbColor : undefined,
            }"
          >
            <var-hover-overlay :hovering="item.hovering" />
          </div>
          <div
            :class="classes(n('thumb-label'), [showLabel(item.enumValue), n('thumb-label--active')])"
            :style="{
              background: labelColor,
              color: labelTextColor,
              height: thumbSize === undefined ? thumbSize : multiplySizeUnit(thumbSize, 2),
              width: thumbSize === undefined ? thumbSize : multiplySizeUnit(thumbSize, 2),
            }"
          >
            <span>{{ item.text }}</span>
          </div>
        </slot>
      </div>
    </div>
    <var-form-details :error-message="errorMessage" :class="n('form')" var-slider-cover />
  </div>
</template>

<script lang="ts">
import VarFormDetails from '../form-details'
import {
  defineComponent,
  ref,
  computed,
  reactive,
  nextTick,
  watch,
  unref,
  type Ref,
  type ComputedRef,
  type UnwrapRef,
} from 'vue'
import { useValidation, createNamespace, call } from '../utils/components'
import { useForm } from '../form/provide'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import Hover from '../hover'
import { getLeft, multiplySizeUnit } from '../utils/elements'
import { isArray, isNumber, toNumber } from '@varlet/shared'
import { props, Thumbs, type ThumbProps, type ThumbsProps, type ThumbsListProps } from './props'
import { useMounted } from '@varlet/use'
import { type SliderProvider } from './provide'

const { n, classes } = createNamespace('slider')

export default defineComponent({
  name: 'VarSlider',
  components: {
    VarFormDetails,
    VarHoverOverlay,
  },
  directives: { Hover },
  props,
  setup(props) {
    const { bindForm, form } = useForm()
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()
    const { hovering: hoveringFirst, handleHovering: handleHoveringFirst } = useHoverOverlay()
    const { hovering: hoveringSecond, handleHovering: handleHoveringSecond } = useHoverOverlay()

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

    const scope: ComputedRef<number> = computed(() => toNumber(props.max) - toNumber(props.min))
    const unitWidth: ComputedRef<number> = computed(() => (maxWidth.value / scope.value) * toNumber(props.step))
    const thumbList: ComputedRef<Array<ThumbsListProps>> = computed(() => {
      const { modelValue, range } = props
      let list: ThumbsListProps[] = []

      if (range && isArray(modelValue)) {
        list = [
          {
            value: getValue(modelValue[0]),
            enumValue: Thumbs.First,
            text: toPrecision(modelValue[0]),
            hovering: unref(hoveringFirst),
            handleHovering: handleHoveringFirst,
          },
          {
            value: getValue(modelValue[1]),
            enumValue: Thumbs.Second,
            text: toPrecision(modelValue[1]),
            hovering: unref(hoveringSecond),
            handleHovering: handleHoveringSecond,
          },
        ]
      } else if (isNumber(modelValue)) {
        list = [
          {
            value: getValue(modelValue),
            enumValue: Thumbs.First,
            text: toPrecision(modelValue),
            hovering: unref(hoveringFirst),
            handleHovering: handleHoveringFirst,
          },
        ]
      }

      return list
    })

    const getFillStyle: ComputedRef<Record<string, string | undefined>> = computed(() => {
      const { activeColor, range, modelValue } = props

      const left = range && isArray(modelValue) ? getValue(Math.min(modelValue[0], modelValue[1])) : 0

      const width =
        range && isArray(modelValue)
          ? getValue(Math.max(modelValue[0], modelValue[1])) - left
          : getValue(modelValue as number)

      return {
        width: `${width}%`,
        left: `${left}%`,
        background: activeColor,
      }
    })

    const isDisabled: ComputedRef<boolean | undefined> = computed(() => props.disabled || form?.disabled.value)

    const isReadonly: ComputedRef<boolean | undefined> = computed(() => props.readonly || form?.readonly.value)

    const showLabel = (type: keyof ThumbsProps): boolean => {
      if (props.labelVisible === 'always') return true
      if (props.labelVisible === 'never') return false

      return thumbsProps[type].active
    }

    const getValue = (value: number) => {
      const { min, max } = props

      if (value < toNumber(min)) return 0
      if (value > toNumber(max)) return 100

      return ((value - toNumber(min)) / scope.value) * 100
    }

    const toPrecision = (value: number) => {
      if (!isNumber(value)) return 0
      let num = value
      if (num < Number(props.min)) num = Number(props.min)
      if (num > Number(props.max)) num = Number(props.max)

      const isInteger = parseInt(`${num}`, 10) === num

      return isInteger ? num : toNumber(num.toPrecision(5))
    }

    const hover = (value: boolean, item: ThumbsListProps) => {
      if (isDisabled.value) return

      item.handleHovering(value)
    }

    const setPercent = (moveDistance: number, type: keyof ThumbsProps) => {
      let rangeValue: Array<number> = []
      const { step, range, modelValue, onChange, min } = props
      const stepNumber = toNumber(step)
      const roundDistance = Math.round(moveDistance / unitWidth.value)
      const curValue = roundDistance * stepNumber + toNumber(min)
      const prevValue = thumbsProps[type].percentValue * stepNumber + toNumber(min)

      thumbsProps[type].percentValue = roundDistance
      if (range && isArray(modelValue)) {
        rangeValue = type === Thumbs.First ? [curValue, modelValue[1]] : [modelValue[0], curValue]
      }

      if (prevValue !== curValue) {
        const value = range ? rangeValue.map((value) => toPrecision(value)) : toPrecision(curValue)
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
      if (!isDisabled.value) {
        thumbsProps[type].active = true
      }
      if (isDisabled.value || isReadonly.value) return
      call(props.onStart)
      isScroll.value = true
      thumbsProps[type].startPosition = event.touches[0].clientX
    }

    const move = (event: TouchEvent, type: keyof ThumbsProps) => {
      if (isDisabled.value || isReadonly.value || !isScroll.value) return
      let moveDistance = event.touches[0].clientX - thumbsProps[type].startPosition + thumbsProps[type].currentLeft

      if (moveDistance <= 0) moveDistance = 0
      else if (moveDistance >= maxWidth.value) moveDistance = maxWidth.value

      setPercent(moveDistance, type)
    }

    const end = (type: keyof ThumbsProps) => {
      const { range, modelValue, onEnd, step, min } = props
      if (!isDisabled.value) {
        thumbsProps[type].active = false
      }
      if (isDisabled.value || isReadonly.value) return
      let rangeValue: Array<number> = []

      thumbsProps[type].currentLeft = thumbsProps[type].percentValue * unitWidth.value

      const curValue = thumbsProps[type].percentValue * toNumber(step) + toNumber(min)

      if (range && isArray(modelValue)) {
        rangeValue = type === Thumbs.First ? [curValue, modelValue[1]] : [modelValue[0], curValue]
      }

      call(onEnd, range ? rangeValue : curValue)
      isScroll.value = false
    }

    const click = (event: MouseEvent) => {
      if (isDisabled.value || isReadonly.value) return
      if ((event.target as HTMLDivElement).closest(`.${n('thumb')}`)) return
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
      if (stepNumber < 0) {
        console.warn('[Varlet] Slider: "step" should be > 0')
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
      const getPercent = (value: number) => {
        const { min, max } = props

        if (value < toNumber(min)) return 0
        if (value > toNumber(max)) return scope.value / step

        return (value - toNumber(min)) / step
      }

      if (props.range && isArray(modelValue)) {
        thumbsProps[Thumbs.First].percentValue = getPercent(modelValue[0])
        thumbsProps[Thumbs.First].currentLeft = thumbsProps[Thumbs.First].percentValue * unitWidth.value

        thumbsProps[Thumbs.Second].percentValue = getPercent(modelValue[1])
        thumbsProps[Thumbs.Second].currentLeft = thumbsProps[Thumbs.Second].percentValue * unitWidth.value
      } else if (isNumber(modelValue)) {
        thumbsProps[Thumbs.First].currentLeft = getPercent(modelValue) * unitWidth.value
      }
    }

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

    watch([() => props.modelValue, () => props.step], ([modelValue, step]) => {
      if (!stepValidator() || !valueValidator() || isScroll.value) return
      setProps(modelValue as number | number[], toNumber(step))
    })

    watch(maxWidth, () => setProps())

    useMounted(() => {
      if (!stepValidator() || !valueValidator()) return

      maxWidth.value = (sliderEl.value as HTMLDivElement).offsetWidth
    })

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
      hover,
      multiplySizeUnit,
      toNumber,
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
@import '../hover-overlay/hoverOverlay';
@import './slider';
</style>
