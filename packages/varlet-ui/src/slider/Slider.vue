<template>
  <div :class="classes(n(direction), n('$--box'))">
    <div
      ref="sliderEl"
      :class="classes(n(`${direction}-block`), [isDisabled, n('--disabled')], [errorMessage, n(`${direction}--error`)])"
      @click="handleClick"
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
        :key="item.enumValue"
        :class="n(`${direction}-thumb`)"
        :style="thumbStyle(item)"
        :tabindex="isDisabled ? undefined : '0'"
        role="slider"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-valuenow="item.value"
        :aria-disabled="isDisabled"
        :aria-valuetext="`${item.text}`"
        @touchstart.stop="start($event, item.enumValue)"
        @touchmove.stop="move"
        @focusin="handleFocus(item)"
        @focusout="handleBlur(item)"
      >
        <slot name="button" :current-value="item.text">
          <div
            v-hover:desktop="(value: boolean) => hover(value, item)"
            :class="n(`${direction}-thumb-block`)"
            :style="{
              background: thumbColor,
            }"
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
            <var-hover-overlay :hovering="!isDisabled && item.hovering" :focusing="!isDisabled && item.focusing" />
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
import { computed, defineComponent, nextTick, onBeforeUnmount, reactive, ref, watch, type CSSProperties } from 'vue'
import { call, clamp, error, getRect, hasOwn, isArray, isNumber, preventDefault, toNumber, warn } from '@varlet/shared'
import { onSmartMounted, onWindowResize, useEventListener } from '@varlet/use'
import VarFormDetails from '../form-details'
import { useForm } from '../form/provide'
import Hover from '../hover'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import { createNamespace, useValidation } from '../utils/components'
import { getLeft, toSizeUnit } from '../utils/elements'
import { props, Thumbs, type ThumbProps, type ThumbsListProps, type ThumbsProps } from './props'
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
    const focusingFirst = ref(false)
    const focusingSecond = ref(false)
    const { bindForm, form } = useForm()
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()
    const { hovering: hoveringFirst, handleHovering: handleHoveringFirst } = useHoverOverlay()
    const { hovering: hoveringSecond, handleHovering: handleHoveringSecond } = useHoverOverlay()

    const thumbList = computed(() => {
      const { modelValue, range } = props
      let list: ThumbsListProps[] = []

      if (range && isArray(modelValue)) {
        list = [
          {
            value: getValue(modelValue[0]),
            enumValue: Thumbs.First,
            text: toPrecision(modelValue[0]),
            hovering: hoveringFirst.value,
            focusing: focusingFirst.value,
            handleHovering: handleHoveringFirst,
            handleFocusing(value: boolean) {
              focusingFirst.value = value
            },
          },
          {
            value: getValue(modelValue[1]),
            enumValue: Thumbs.Second,
            text: toPrecision(modelValue[1]),
            hovering: hoveringSecond.value,
            focusing: focusingSecond.value,
            handleHovering: handleHoveringSecond,
            handleFocusing(value: boolean) {
              focusingSecond.value = value
            },
          },
        ]
      } else if (isNumber(modelValue)) {
        list = [
          {
            value: getValue(modelValue),
            enumValue: Thumbs.First,
            text: toPrecision(modelValue),
            hovering: hoveringFirst.value,
            focusing: focusingFirst.value,
            handleHovering: handleHoveringFirst,
            handleFocusing(value: boolean) {
              focusingFirst.value = value
            },
          },
        ]
      }

      return list
    })

    const getFillStyle = computed<CSSProperties>(() => {
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
      if (!stepValidator() || !valueValidator() || isScroll.value) {
        return
      }

      setProps(modelValue as number | number[], toNumber(step))
    })

    watch(maxDistance, () => setProps())

    onSmartMounted(() => {
      if (!stepValidator() || !valueValidator()) {
        return
      }

      resizeMaxDistance()
    })

    onBeforeUnmount(removeDocumentEvents)
    useEventListener(() => window, 'keydown', handleKeydown)
    onWindowResize(resizeMaxDistance)

    function resizeMaxDistance() {
      maxDistance.value = (sliderEl.value as HTMLElement)[isVertical.value ? 'offsetHeight' : 'offsetWidth']
    }

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
      nextTick(() => vt(['onChange'], 'onChange', props.rules, props.modelValue))
    }

    function getOffset(e: MouseEvent) {
      const currentTarget = e.currentTarget as HTMLElement

      if (!currentTarget) {
        return 0
      }

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

    function showLabel(type: keyof ThumbsProps) {
      if (props.labelVisible === 'always') {
        return true
      }

      if (props.labelVisible === 'never') {
        return false
      }

      return thumbsProps[type].active
    }

    function getValue(value: number) {
      const { min, max } = props

      if (value < toNumber(min)) {
        return 0
      }

      if (value > toNumber(max)) {
        return 100
      }

      return ((value - toNumber(min)) / scope.value) * 100
    }

    function toPrecision(value: number) {
      if (!isNumber(value)) {
        return 0
      }

      const num = clamp(value, toNumber(props.min), toNumber(props.max))
      const isInteger = parseInt(`${num}`, 10) === num

      return isInteger ? num : toNumber(num.toPrecision(5))
    }

    function hover(value: boolean, item: ThumbsListProps) {
      if (isDisabled.value) {
        return
      }

      item.handleHovering(value)
    }

    function emitChange(value: number | number[]) {
      call(props.onChange, value)
      call(props['onUpdate:modelValue'], value)
      validateWithTrigger()
    }

    function setPercent(moveDistance: number, type: keyof ThumbsProps) {
      let rangeValue: Array<number> = []
      const { step, range, modelValue, min } = props
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
        emitChange(value)
      }
    }

    function getType(offset: number): keyof ThumbsProps {
      if (!props.range) {
        return Thumbs.First
      }

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
      resizeMaxDistance()

      if (!isDisabled.value) {
        thumbsProps[type].active = true
      }

      activeThumb = type
      addDocumentEvents()

      if (isDisabled.value || isReadonly.value) {
        return
      }

      call(props.onStart)
      isScroll.value = true
      const { clientX, clientY } = event.touches[0]
      thumbsProps[type].startPosition = isVertical.value ? clientY : clientX
    }

    function move(event: TouchEvent) {
      preventDefault(event)

      if (isDisabled.value || isReadonly.value || !isScroll.value) {
        return
      }

      const { startPosition, currentOffset } = thumbsProps[activeThumb]
      const { clientX, clientY } = event.touches[0]

      let moveDistance = (isVertical.value ? startPosition - clientY : clientX - startPosition) + currentOffset

      if (moveDistance <= 0) {
        moveDistance = 0
      } else if (moveDistance >= maxDistance.value) {
        moveDistance = maxDistance.value
      }

      setPercent(moveDistance, activeThumb)
    }

    function end() {
      removeDocumentEvents()

      const { range, modelValue, onEnd, step, min } = props

      if (!isDisabled.value) {
        thumbsProps[activeThumb].active = false
      }

      if (isDisabled.value || isReadonly.value) {
        return
      }

      let rangeValue: Array<number> = []

      thumbsProps[activeThumb].currentOffset = thumbsProps[activeThumb].percentValue * unitWidth.value

      const curValue = thumbsProps[activeThumb].percentValue * toNumber(step) + toNumber(min)

      if (range && isArray(modelValue)) {
        rangeValue = activeThumb === Thumbs.First ? [curValue, modelValue[1]] : [modelValue[0], curValue]
      }

      call(onEnd, range ? rangeValue : curValue)
      isScroll.value = false
    }

    function handleClick(event: MouseEvent) {
      if (isDisabled.value || isReadonly.value) {
        return
      }

      if ((event.target as HTMLElement).closest(`.${n('thumb')}`)) {
        return
      }

      const offset = getOffset(event)
      const type = getType(offset)
      activeThumb = type
      setPercent(offset, type)
      end()
    }

    function stepValidator() {
      if (toNumber(props.step) <= 0) {
        warn('Slider', '"step" should be > 0')
        return false
      }

      return true
    }

    function valueValidator() {
      const { range, modelValue } = props

      if (range && !isArray(modelValue)) {
        error('Slider', '"modelValue" should be an Array')
        return false
      }

      if (!range && isArray(modelValue)) {
        error('Slider', '"modelValue" should be a Number')
        return false
      }

      if (range && isArray(modelValue) && modelValue.length < 2) {
        error('Slider', '"modelValue" should have two value')
        return false
      }

      return true
    }

    function setProps(modelValue = props.modelValue, step = toNumber(props.step)) {
      const getPercent = (value: number) => {
        const { min, max } = props

        if (value < toNumber(min)) {
          return 0
        }

        if (value > toNumber(max)) {
          return scope.value / step
        }

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

    function moveFocusingThumb(offset: 1 | -1, value: number | number[]) {
      const stepValue = toNumber(props.step)

      if (isArray(value)) {
        const updatedFirstValue = value[0] + (focusingFirst.value ? offset * stepValue : 0)
        const updatedSecondValue = value[1] + (focusingSecond.value ? offset * stepValue : 0)
        return [updatedFirstValue, updatedSecondValue].map(toPrecision)
      }

      return toPrecision(value + offset * stepValue)
    }

    function handleKeydown(event: KeyboardEvent) {
      type ArrowKey = 'ArrowRight' | 'ArrowUp' | 'ArrowLeft' | 'ArrowDown'

      const keyToOffset: Record<ArrowKey, 1 | -1> = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1,
      }

      const { key } = event

      if (!hasOwn(keyToOffset, key) || isReadonly.value || isDisabled.value) {
        return
      }

      if (props.range && !focusingFirst.value && !focusingSecond.value) {
        return
      }

      if (!props.range && !focusingFirst.value) {
        return
      }

      preventDefault(event)
      const offset = keyToOffset[key as ArrowKey]
      const value = moveFocusingThumb(offset, props.modelValue)
      emitChange(value)
    }

    function handleFocus(item: ThumbsListProps) {
      if (isDisabled.value) {
        return
      }

      item.handleFocusing(true)
    }

    function handleBlur(item: ThumbsListProps) {
      item.handleFocusing(false)
    }

    return {
      sliderEl,
      getFillStyle,
      isDisabled,
      isVertical,
      errorMessage,
      thumbsProps,
      thumbList,
      handleFocus,
      handleBlur,
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
      handleClick,
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
