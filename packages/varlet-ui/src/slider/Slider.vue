<template>
	<div
		:class="{
			'var-slider': true,
			'var-slider-disable': disabled,
		}"
		ref="sliderEl"
		@click="click"
	>
		<div
			class="var-slider__track"
			:style="{
				background: trackColor,
			}"
		>
			<div class="var-slider__track-fill" :style="getFillStyle"></div>
		</div>
		<div
			class="var-slider__thumb"
			:style="{
				left: `${range ? modelValue[0] : modelValue}%`,
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
				}"
			></div>
			<div
				:class="{
					'var-slider__thumb-ripple': true,
					'var-slider__thumb-ripple-active': thumbProps1.active,
				}"
				:style="{
					background: thumbColor,
				}"
			></div>
			<div
				:class="{
					'var-slider__thumb-label': true,
					'var-slider__thumb-label-active': showLabel1,
				}"
				:style="{
					background: labelColor,
					color: labelTextColor,
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
				}"
			></div>
			<div
				:class="{
					'var-slider__thumb-ripple': true,
					'var-slider__thumb-ripple-active': thumbProps2.active,
				}"
				:style="{
					background: thumbColor,
				}"
			></div>
			<div
				:class="{
					'var-slider__thumb-label': true,
					'var-slider__thumb-label-active': showLabel2,
				}"
				:style="{
					background: labelColor,
					color: labelTextColor,
				}"
			>
				<span>{{ range && modelValue[1] }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, onMounted, computed, ComputedRef, reactive, UnwrapRef } from 'vue'
import { getLeft } from '../utils/elements'
import { isArray, isNumber } from '../utils/shared'
import { props } from './props'

type ThumbProps = {
	startPosition: number
	currentLeft: number
	percentValue: number
	active: boolean
}

export default defineComponent({
	name: 'VarSlider',
	props,
	setup(props) {
		const sliderEl: Ref<HTMLDivElement | null> = ref(null)
		const maxWidth: Ref<number> = ref(0)
		const thumbProps1: UnwrapRef<ThumbProps> = reactive({
			startPosition: 0,
			currentLeft: 0,
			active: false,
			percentValue: 0,
		})
		const thumbProps2: UnwrapRef<ThumbProps> = reactive({
			startPosition: 0,
			currentLeft: 0,
			active: false,
			percentValue: 0,
		})

		const unitWidth: ComputedRef<number> = computed(() => (maxWidth.value / 100) * +props.step)

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
			const width =
				props.range && isArray(props.modelValue)
					? Math.abs(props.modelValue[0] - props.modelValue[1])
					: props.modelValue

			const left = props.range && isArray(props.modelValue) ? Math.min(props.modelValue[0], props.modelValue[1]) : 0

			return {
				width: `${width}%`,
				left: `${left}%`,
				background: props.activeColor,
			}
		})

		const setPercent = (moveDistance: number, type: number) => {
			let prevValue: number
			let rangeValue: Array<number> = []
			const roundDistance = Math.round(moveDistance / unitWidth.value)
			const curValue: number = roundDistance * +props.step

			if (type === 1) {
				prevValue = thumbProps1.percentValue
				thumbProps1.percentValue = curValue / +props.step
				if (props.range && isArray(props.modelValue)) rangeValue = [curValue, props.modelValue[1]]
			} else {
				prevValue = thumbProps2.percentValue
				thumbProps2.percentValue = curValue / +props.step
				if (props.range && isArray(props.modelValue)) rangeValue = [props.modelValue[0], curValue]
			}

			if (prevValue !== curValue) {
				if (props.range) {
					props.onInput?.(rangeValue)
					props['onUpdate:modelValue']?.(rangeValue)
				} else {
					props.onInput?.(curValue)
					props['onUpdate:modelValue']?.(curValue)
				}
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
			if (props.disabled || props.readonly) return
			props.onStart?.()
			if (type === 1) {
				thumbProps1.startPosition = event.touches[0].clientX
			} else {
				thumbProps2.startPosition = event.touches[0].clientX
			}
		}

		const move = (event: TouchEvent, type: number) => {
			if (props.disabled || props.readonly) return
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
			if (props.disabled || props.readonly) return
			let curValue: number
			let rangeValue: Array<number> = []
			if (type === 1) {
				thumbProps1.currentLeft = thumbProps1.percentValue * unitWidth.value
				thumbProps1.active = false
				curValue = thumbProps1.percentValue
				if (props.range && isArray(props.modelValue)) rangeValue = [curValue, props.modelValue[1]]
			} else {
				thumbProps2.currentLeft = thumbProps2.percentValue * unitWidth.value
				thumbProps2.active = false
				curValue = thumbProps2.percentValue
				if (props.range && isArray(props.modelValue)) rangeValue = [props.modelValue[0], curValue]
			}

			if (props.range) {
				props.onChange?.(rangeValue)
			} else {
				props.onChange?.(curValue)
			}
			props.onEnd?.()
		}

		const click = (event: MouseEvent) => {
			if (props.disabled || props.readonly) return
			if ((event.target as HTMLDivElement).closest('.var-slider__thumb')) return
			const offset = event.clientX - getLeft(event.currentTarget as HTMLDivElement)
			const type = getType(offset)
			setPercent(offset, type)
			end(type)
		}

		const stepValidator = () => {
			if (isNaN(+props.step)) {
				console.warn('[Varlet] Slider: type of prop "step" should be Number')
				return false
			}
			if (+props.step < 1 || +props.step > 100) {
				console.warn('[Varlet] Slider: "step" should be >= 0 and <= 100')
				return false
			}
			if (parseInt(`${props.step}`, 10) !== +props.step) {
				console.warn('[Varlet] Slider: "step" should be an Integer')
				return false
			}
			return true
		}

		const valueValidator = () => {
			if (props.range && !isArray(props.modelValue)) {
				console.error('[Varlet] Slider: "modelValue" should be an Array')
				return false
			}
			if (!props.range && isArray(props.modelValue)) {
				console.error('[Varlet] Slider: "modelValue" should be a Number')
				return false
			}
			if (props.range && isArray(props.modelValue) && props.modelValue.length < 2) {
				console.error('[Varlet] Slider: "modelValue" should have two value')
				return false
			}
			return true
		}

		onMounted(() => {
			if (!stepValidator() || !valueValidator()) return

			maxWidth.value = (sliderEl.value as HTMLDivElement).offsetWidth
			if (props.range && isArray(props.modelValue)) {
				thumbProps1.percentValue = props.modelValue[0] / +props.step
				thumbProps2.percentValue = props.modelValue[1] / +props.step
				thumbProps1.currentLeft = thumbProps1.percentValue * unitWidth.value
				thumbProps2.currentLeft = thumbProps2.percentValue * unitWidth.value
			} else if (isNumber(props.modelValue)) {
				thumbProps1.currentLeft = (props.modelValue / +props.step) * unitWidth.value
			}
		})

		return {
			sliderEl,
			thumbProps1,
			thumbProps2,
			showLabel1,
			showLabel2,
			getFillStyle,
			start,
			move,
			end,
			click,
		}
	},
})
</script>

<style lang="less">
@import './slider';
</style>
