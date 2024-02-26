<template>
  <div :class="classes(n(direction), n('$--box'))">
    <div
      :class="classes(n(`${direction}-block`), [isDisabled, n('--disabled')], [errorMessage, n(`${direction}--error`)])"
      ref="sliderEl"
      @click="click"
    >
      <div :class="n(`${direction}-track`)">
        <div
          :class="n(`${direction}-track-background`)"
          :style="{
            background: trackColor,
            height: isVertical ? '100%' : toSizeUnit(trackHeight),
            width: isVertical ? toSizeUnit(trackHeight) : '100%',
          }"
        ></div>
        <div :class="n(`${direction}-track-fill`)" :style="getFillStyle"></div>
      </div>
      <div
        v-for="item in thumbList"
        :class="n(`${direction}-thumb`)"
        :key="item.enumValue"
        :style="thumbStyle(item)"
        @touchstart.stop="start($event, item.enumValue)"
      >
        <slot name="button" :current-value="item.text">
          <div
            :class="n(`${direction}-thumb-block`)"
            :style="{
              background: thumbColor,
            }"
            v-hover:desktop="(value: boolean) => hover(value, item)"
          ></div>
          <div
            :class="
              classes(n(`${direction}-thumb-ripple`), [
                thumbsProps[item.enumValue].active,
                n(`${direction}-thumb-ripple--active`),
              ])
            "
            :style="{
              background: thumbsProps[item.enumValue].active ? thumbColor : undefined,
            }"
          >
            <var-hover-overlay :hovering="item.hovering" />
          </div>
          <div
            :class="
              classes(n(`${direction}-thumb-label`), [showLabel(item.enumValue), n(`${direction}-thumb-label--active`)])
            "
            :style="{
              background: labelColor,
              color: labelTextColor,
              height: toSizeUnit(thumbSize),
              width: toSizeUnit(thumbSize),
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
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import Hover from '../hover'
import { defineComponent, ref, onBeforeUnmount, computed, reactive, nextTick, watch, unref } from 'vue'
import { useValidation, createNamespace } from '../utils/components'
import { useForm } from '../form/provide'
import { getLeft, toSizeUnit } from '../utils/elements'
import { warn } from '../utils/logger'
import { isArray, isNumber, toNumber, getRect, preventDefault, call } from '@varlet/shared'
import { props, Thumbs, type ThumbProps, type ThumbsProps, type ThumbsListProps } from './props'
import { onSmartMounted } from '@varlet/use'
import { type SliderProvider } from './provide'

const { name, n, classes } = createNamespace('slider')

export default defineComponent({
  name,
  components: {
    VarFormDetails,
    VarHoverOverlay,
  },
  directives: { Hover },
  props,
  setup(props) {
    const maxDistance = ref(0)
    const sliderEl = ref<HTMLElement | null>(null)
    const isScroll = ref(false)
    const scope = computed(() => toNumber(props.max) - toNumber(props.min))
    const unitWidth = computed(() => (maxDistance.value / scope.value) * toNumber(props.step))
    const isDisabled = computed(() => props.disabled || form?.disabled.value)
    const isReadonly = computed(() => props.readonly || form?.readonly.value)
    const isVertical = computed(() => props.direction === 'vertical')
    const { bindForm, form } = useForm()
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()
    const { hovering: hoveringFirst, handleHovering: handleHoveringFirst } = useHoverOverlay()
    const { hovering: hoveringSecond, handleHovering: handleHoveringSecond } = useHoverOverlay()
    const thumbList = computed<ThumbsListProps[]>(() => {
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
    const getFillStyle = computed<Record<string, string | undefined>>(() => {
      const { activeColor, range, modelValue } = props

      const gap = range && isArray(modelValue) ? getValue(Math.min(modelValue[0], modelValue[1])) : 0

      const fillLength =
        range && isArray(modelValue)
          ? getValue(Math.max(modelValue[0], modelValue[1])) - gap
          : getValue(modelValue as number)

      return isVertical.value
        ? {
            left: '0px',
            height: `${fillLength}%`,
            bottom: `${gap}%`,
            background: activeColor,
          }
        : {
            top: '0px',
            width: `${fillLength}%`,
            left: `${gap}%`,
            background: activeColor,
          }
    })
    const thumbsProps = reactive<ThumbsProps>({
      [Thumbs.First]: getThumbProps(),
      [Thumbs.Second]: getThumbProps(),
    })

    let activeThumb: Thumbs

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

    watch(maxDistance, () => setProps())

    onSmartMounted(() => {
      if (!stepValidator() || !valueValidator()) return

      maxDistance.value = (sliderEl.value as HTMLElement)[isVertical.value ? 'offsetHeight' : 'offsetWidth']
    })

    onBeforeUnmount(() => {
      removeDocumentEvents()
    })

    function validate() {
      return v(props.rules, props.modelValue)
    }

    function getThumbProps(): ThumbProps {
      return {
        startPosition: 0,
        currentOffset: 0,
        active: false,
        percentValue: 0,
      }
    }

    function validateWithTrigger() {
      return nextTick(() => vt(['onChange'], 'onChange', props.rules, props.modelValue))
    }

    function getOffset(e: MouseEvent) {
      const currentTarget = e.currentTarget as HTMLElement

      if (!currentTarget) return 0

      if (!isVertical.value) {
        return e.clientX - getLeft(currentTarget)
      }

      return maxDistance.value - (e.clientY - getRect(currentTarget).top)
    }

    function thumbStyle(thumb: ThumbsListProps) {
      const key = isVertical.value ? 'bottom' : 'left'

      return {
        [key]: `${thumb.value}%`,
        zIndex: thumbsProps[thumb.enumValue].active ? 1 : undefined,
      }
    }

    function showLabel(type: keyof ThumbsProps): boolean {
      if (props.labelVisible === 'always') return true
      if (props.labelVisible === 'never') return false

      return thumbsProps[type].active
    }

    function getValue(value: number) {
      const { min, max } = props

      if (value < toNumber(min)) return 0
      if (value > toNumber(max)) return 100

      return ((value - toNumber(min)) / scope.value) * 100
    }

    function toPrecision(value: number) {
      if (!isNumber(value)) return 0
      let num = value
      if (num < Number(props.min)) num = Number(props.min)
      if (num > Number(props.max)) num = Number(props.max)

      const isInteger = parseInt(`${num}`, 10) === num

      return isInteger ? num : toNumber(num.toPrecision(5))
    }

    function hover(value: boolean, item: ThumbsListProps) {
      if (isDisabled.value) return

      item.handleHovering(value)
    }

    function setPercent(moveDistance: number, type: keyof ThumbsProps) {
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

    function getType(offset: number): keyof ThumbsProps {
      if (!props.range) return Thumbs.First
      const thumb1Distance = thumbsProps[Thumbs.First].percentValue * unitWidth.value
      const thumb2Distance = thumbsProps[Thumbs.Second].percentValue * unitWidth.value
      const offsetToThumb1 = Math.abs(offset - thumb1Distance)
      const offsetToThumb2 = Math.abs(offset - thumb2Distance)

      return offsetToThumb1 <= offsetToThumb2 ? Thumbs.First : Thumbs.Second
    }

    function addDocumentEvents() {
      document.addEventListener('touchmove', move, { passive: false })
      document.addEventListener('touchend', end)
      document.addEventListener('touchcancel', end)
    }

    function removeDocumentEvents() {
      document.removeEventListener('touchmove', move)
      document.removeEventListener('touchend', end)
      document.removeEventListener('touchcancel', end)
    }

    function start(event: TouchEvent, type: keyof ThumbsProps) {
      if (!maxDistance.value) maxDistance.value = (sliderEl.value as HTMLElement).offsetWidth
      if (!isDisabled.value) {
        thumbsProps[type].active = true
      }

      activeThumb = type
      addDocumentEvents()

      if (isDisabled.value || isReadonly.value) return
      call(props.onStart)
      isScroll.value = true
      const { clientX, clientY } = event.touches[0]
      thumbsProps[type].startPosition = isVertical.value ? clientY : clientX
    }

    function move(event: TouchEvent) {
      preventDefault(event)

      if (isDisabled.value || isReadonly.value || !isScroll.value) return

      const { startPosition, currentOffset } = thumbsProps[activeThumb]
      const { clientX, clientY } = event.touches[0]

      let moveDistance = (isVertical.value ? startPosition - clientY : clientX - startPosition) + currentOffset

      if (moveDistance <= 0) moveDistance = 0
      else if (moveDistance >= maxDistance.value) moveDistance = maxDistance.value

      setPercent(moveDistance, activeThumb)
    }

    function end() {
      removeDocumentEvents()

      const { range, modelValue, onEnd, step, min } = props
      if (!isDisabled.value) {
        thumbsProps[activeThumb].active = false
      }
      if (isDisabled.value || isReadonly.value) return
      let rangeValue: Array<number> = []

      thumbsProps[activeThumb].currentOffset = thumbsProps[activeThumb].percentValue * unitWidth.value

      const curValue = thumbsProps[activeThumb].percentValue * toNumber(step) + toNumber(min)

      if (range && isArray(modelValue)) {
        rangeValue = activeThumb === Thumbs.First ? [curValue, modelValue[1]] : [modelValue[0], curValue]
      }

      call(onEnd, range ? rangeValue : curValue)
      isScroll.value = false
    }

    function click(event: MouseEvent) {
      if (isDisabled.value || isReadonly.value) return
      if ((event.target as HTMLElement).closest(`.${n('thumb')}`)) return
      const offset = getOffset(event)
      const type = getType(offset)
      activeThumb = type
      setPercent(offset, type)
      end()
    }

    function stepValidator() {
      const stepNumber = toNumber(props.step)
      if (isNaN(stepNumber)) {
        warn('Slider', 'type of prop "step" should be Number')
        return false
      }
      if (stepNumber < 0) {
        warn('Slider', '"step" should be > 0')
        return false
      }
      return true
    }

    function valueValidator() {
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

    function setProps(modelValue = props.modelValue, step = toNumber(props.step)) {
      const getPercent = (value: number) => {
        const { min, max } = props

        if (value < toNumber(min)) return 0
        if (value > toNumber(max)) return scope.value / step

        return (value - toNumber(min)) / step
      }

      if (props.range && isArray(modelValue)) {
        thumbsProps[Thumbs.First].percentValue = getPercent(modelValue[0])
        thumbsProps[Thumbs.First].currentOffset = thumbsProps[Thumbs.First].percentValue * unitWidth.value

        thumbsProps[Thumbs.Second].percentValue = getPercent(modelValue[1])
        thumbsProps[Thumbs.Second].currentOffset = thumbsProps[Thumbs.Second].percentValue * unitWidth.value
      } else if (isNumber(modelValue)) {
        thumbsProps[Thumbs.First].currentOffset = getPercent(modelValue) * unitWidth.value
      }
    }

    function reset() {
      const resetValue = props.range ? [0, 0] : 0
      call(props['onUpdate:modelValue'], resetValue)
      resetValidation()
    }

    return {
      Thumbs,
      sliderEl,
      getFillStyle,
      isDisabled,
      isVertical,
      errorMessage,
      thumbsProps,
      thumbList,
      n,
      classes,
      thumbStyle,
      hover,
      toSizeUnit,
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
