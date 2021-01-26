<template>
	<div class="var-slider">
		<div
			class="var-slider-block"
			:class="[disabled || formDisabled ? 'var-slider__disable' : null, errorMessage ? 'var-slider__error' : null]"
			:style="{
				height: `${3 * thumbSize}px`,
				margin: `0 ${thumbSize / 2}px`,
			}"
			ref="sliderEl"
			@click="click"
		>
			<div
				class="var-slider__track"
				:style="{
					background: trackColor,
					height: trackHeight + 'px',
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
		<var-form-details :error-message="errorMessage" :style="{ marginLeft: thumbSize / 2 + 'px', marginTop: 0 }" />
	</div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, onMounted, computed, ComputedRef, reactive, UnwrapRef, nextTick, watch } from 'vue'
import { useParent, useValidation } from '../utils/components'
import { FORM_BIND_FORM_ITEM_KEY, FormProvider } from '../form/provide'
import { getLeft } from '../utils/elements'
import { isArray, isNumber } from '../utils/shared'
import { props, ValidateTriggers } from './props'
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
		[FormDetails.name]: FormDetails,
	},
	props,
	setup(props) {
		const { bindParent: bindForm, parentProvider: formProvider } = useParent<FormProvider, SliderProvider>(
			FORM_BIND_FORM_ITEM_KEY
		)
		const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()

		const validate = () => v(props.rules, props.modelValue)
		const validateWithTrigger = (trigger: ValidateTriggers) =>
			nextTick(() => vt(props.validateTrigger, trigger, props.rules, props.modelValue))

		const sliderEl: Ref<HTMLDivElement | null> = ref(null)
		const maxWidth: Ref<number> = ref(0)
		const isScroll: Ref<boolean> = ref(false)
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
				validateWithTrigger('onInput')
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
			if (props.disabled || props.readonly || formProvider?.disabled.value || formProvider?.readonly.value) return
			props.onStart?.()
			isScroll.value = true
			if (type === 1) {
				thumbProps1.startPosition = event.touches[0].clientX
			} else {
				thumbProps2.startPosition = event.touches[0].clientX
			}
		}

		const move = (event: TouchEvent, type: number) => {
			if (
				props.disabled ||
				props.readonly ||
				formProvider?.disabled.value ||
				formProvider?.readonly.value ||
				!isScroll.value
			)
				return
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
			if (props.disabled || props.readonly || formProvider?.disabled.value || formProvider?.readonly.value) return
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
			validateWithTrigger('onChange')
			isScroll.value = false
			props.onEnd?.()
		}

		const click = (event: MouseEvent) => {
			if (props.disabled || props.readonly || formProvider?.disabled.value || formProvider?.readonly.value) return
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

		const setProps = (modelValue = props.modelValue, step = props.step) => {
			if (props.range && isArray(modelValue)) {
				thumbProps1.percentValue = modelValue[0] / +step
				thumbProps2.percentValue = modelValue[1] / +step
				thumbProps1.currentLeft = thumbProps1.percentValue * unitWidth.value
				thumbProps2.currentLeft = thumbProps2.percentValue * unitWidth.value
			} else if (isNumber(modelValue)) {
				thumbProps1.currentLeft = (modelValue / +step) * unitWidth.value
			}
		}

		watch([() => props.modelValue, () => props.step], ([modelValue, step]) => {
			if (!stepValidator() || !valueValidator() || isScroll.value) return
			setProps(modelValue as number | number[], step as string | number)
		})

		onMounted(() => {
			if (!stepValidator() || !valueValidator()) return

			maxWidth.value = (sliderEl.value as HTMLDivElement).offsetWidth
			setProps()
		})

		const reset = () => {
			const resetValue = props.range ? [0, 0] : 0
			props['onUpdate:modelValue']?.(resetValue)
			resetValidation()
		}

		const sliderProvider: SliderProvider = {
			reset,
			validate,
			resetValidation,
		}

		bindForm?.(sliderProvider)

		return {
			sliderEl,
			thumbProps1,
			thumbProps2,
			showLabel1,
			showLabel2,
			getFillStyle,
			formDisabled: formProvider?.disabled,
			formReadonly: formProvider?.readonly,
			errorMessage,
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
