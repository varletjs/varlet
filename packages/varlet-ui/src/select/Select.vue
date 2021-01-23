<template>
	<div
		class="var-select var--box"
		:class="[disabled ? 'var-select--disabled' : null]"
		@click="handleClick"
		v-bind="$attrs"
	>
		<div
			class="var-select__controller"
			:class="[
				isFocus ? 'var-select--focus' : null,
				errorMessage ? 'var-select--error' : null,
				disabled ? 'var-select--disabled' : null,
			]"
			:style="{
				color: isFocus ? activeColor : inactiveColor,
			}"
		>
			<slot name="prepend-icon">
				<div class="var-select__icon" @click="handleClickPrependIcon">
					<var-icon :name="prependIcon" v-if="prependIcon" />
				</div>
			</slot>

			<var-menu class="var-select__menu" offset-y="24px" v-model:show="isFocus" @blur="handleBlur">
				<div class="var-select__wrap" ref="wrapEl" @click="handleFocus">
					<div
						class="var-select__select"
						:class="[disabled ? 'var-select--disabled' : null]"
						:style="{
							textAlign,
							color: textColor,
						}"
						@click="handleClick"
					>
						<div v-if="multiple">
							<div class="var-select__chips" v-if="chip">
								<var-chip
									class="var-select__chip"
									closable
									v-for="m in modelValue"
									:key="m"
									@click.stop
									@close="() => handleClose(m)"
								>
									{{ findLabel(m) }}
								</var-chip>
							</div>
							<div class="var-select__values" v-else>
								{{ modelValue.map((m) => findLabel(m)).join(separator) }}
							</div>
						</div>

						<span v-else>{{ findLabel(modelValue) }}</span>
					</div>
					<label class="var-select__placeholder" :class="[computePlaceholderState()]">
						{{ placeholder }}
					</label>
					<div
						class="var-select__line"
						:class="[disabled ? 'var-select--line-disabled' : null, errorMessage ? 'var-select--line-error' : null]"
						:style="{
							background: inactiveColor,
						}"
						v-if="line"
					>
						<div
							class="var-select__dot"
							:class="[
								isFocus ? 'var-select--spread' : null,
								disabled ? 'var-select--line-disabled' : null,
								errorMessage ? 'var-select--line-error' : null,
							]"
							:style="{
								background: activeColor,
							}"
						></div>
					</div>

					<transition name="var-select-footer-margin">
						<div class="var-select__footer" v-if="errorMessage">
							<div class="var-select__message">{{ errorMessage }}</div>
						</div>
					</transition>
				</div>

				<template #menu>
					<div class="var-select__scroller">
						<slot />
					</div>
				</template>
			</var-menu>

			<slot name="append-icon">
				<div class="var-select__icon" @click="handleClickAppendIcon">
					<var-icon
						:name="appendIcon || 'close-circle'"
						:size="clearable ? '14px' : null"
						v-if="appendIcon || clearable"
						@click="handleClear"
					/>
				</div>
			</slot>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, nextTick, ref, Ref, watch } from 'vue'
import { isArray, isEmpty } from '../utils/shared'
import { ValidateTriggers, props } from './props'
import { useAtChildrenCounter, useChildren } from '../utils/components'
import { SELECT_BIND_OPTION_KEY, SELECT_COUNT_OPTION_KEY, SelectProvider } from './provide'
import { OptionProvider } from '../option/provide'
import Icon from '../icon'
import Menu from '../menu'
import Chip from '../chip'

export default defineComponent({
	name: 'VarSelect',
	components: {
		[Icon.name]: Icon,
		[Menu.name]: Menu,
		[Chip.name]: Chip,
	},
	inheritAttrs: false,
	props,
	setup(props) {
		const { bindChildren, childProviders: optionProviders } = useChildren<SelectProvider, OptionProvider>(
			SELECT_BIND_OPTION_KEY
		)
		const { length } = useAtChildrenCounter(SELECT_COUNT_OPTION_KEY)

		const wrapEl: Ref<HTMLElement | null> = ref(null)
		const isFocus: Ref<boolean> = ref(false)
		const errorMessage: Ref<string> = ref('')

		const wrapWidth: ComputedRef<string> = computed(() => {
			return (wrapEl.value && window.getComputedStyle(wrapEl.value as HTMLElement).width) || '0px'
		})
		const multiple: ComputedRef<boolean> = computed(() => props.multiple)
		const activeColor: ComputedRef<string | undefined> = computed(() => props.activeColor)

		const findValue = ({ value, label }: OptionProvider) => {
			if (value.value != null) {
				return value.value
			}

			return label.value
		}

		const findLabel = (targetValue: any) => {
			let targetProvider = optionProviders.find(({ value }) => value.value === targetValue)

			!targetProvider && (targetProvider = optionProviders.find(({ label }) => label.value === targetValue))

			return targetProvider?.label.value
		}

		const computePlaceholderState = () => {
			if (!props.hint && !isEmpty(props.modelValue)) {
				return 'var-select--placeholder-hidden'
			}
			if (props.hint && (!isEmpty(props.modelValue) || isFocus.value)) {
				return 'var-select--placeholder-hint'
			}
		}

		const validate = async (): Promise<boolean> => {
			if (!isArray(props.rules)) {
				return false
			}

			const resArr = await Promise.all(props.rules.map((rule) => rule(props.modelValue)))

			return !resArr.some((res) => {
				if (res !== true) {
					errorMessage.value = res.toString()
					return true
				}

				return false
			})
		}

		const resetValidation = () => {
			errorMessage.value = ''
		}

		const validateWithTrigger = async (trigger: ValidateTriggers) => {
			await nextTick()

			if (props.validateTrigger.includes(trigger)) {
				;(await validate()) && (errorMessage.value = '')
			}
		}

		const handleFocus = (e: Event) => {
			if (props.disabled || props.readonly) {
				return
			}

			isFocus.value = true
			props.onFocus?.(e)

			validateWithTrigger('onFocus')
		}

		const handleBlur = (e: Event) => {
			if (props.disabled) {
				return
			}

			props.onBlur?.(e)

			validateWithTrigger('onBlur')
		}

		const handleChange = (optionProvider: OptionProvider) => {
			if (props.disabled || props.readonly) {
				return
			}

			let selectedValue: any = findValue(optionProvider)

			if (props.multiple) {
				selectedValue = optionProviders.filter(({ selected }) => selected.value).map(findValue)
			}

			props['onUpdate:modelValue']?.(selectedValue)
			props.onChange?.(selectedValue)

			validateWithTrigger('onChange')

			!props.multiple && (isFocus.value = false)
		}

		const handleClear = () => {
			if (props.disabled || !props.clearable) {
				return
			}

			const targetModelValue = props.multiple ? [] : undefined

			props['onUpdate:modelValue']?.(targetModelValue)
			props.onClear?.(targetModelValue)

			validateWithTrigger('onClear')
		}

		const handleClickAppendIcon = (e: Event) => {
			if (props.disabled) {
				return
			}

			props.onClickAppendIcon?.(e)
		}

		const handleClickPrependIcon = (e: Event) => {
			if (props.disabled) {
				return
			}

			props.onClickPrependIcon?.(e)
		}

		const handleClick = (e: Event) => {
			if (props.disabled) {
				return
			}

			props.onClick?.(e)

			validateWithTrigger('onClick')
		}

		const handleClose = (targetValue: any) => {
			const targetModelValue = (props.modelValue as any[]).filter((value) => value !== targetValue)

			props['onUpdate:modelValue']?.(targetModelValue)
			props.onClose?.(targetModelValue)
		}

		const focus = () => {
			isFocus.value = true
		}

		const blur = () => {
			isFocus.value = false
		}

		const syncAllOption = () => {
			if (props.multiple) {
				optionProviders.forEach(({ sync, ...rest }) => {
					sync((props.modelValue as any[]).includes(findValue({ sync, ...rest })))
				})
			} else {
				optionProviders.forEach(({ sync, ...rest }) => {
					sync(props.modelValue === findValue({ sync, ...rest }))
				})
			}
		}

		watch(
			() => props.multiple,
			() => {
				if (props.multiple && !isArray(props.modelValue)) {
					throw Error('The modelValue must be an array when multiple is true')
				}
			}
		)

		watch(() => props.modelValue, syncAllOption, { deep: true })

		watch(() => length.value, syncAllOption)

		bindChildren({
			wrapWidth,
			multiple,
			activeColor,
			onSelect: handleChange,
		})

		return {
			wrapEl,
			isFocus,
			errorMessage,
			computePlaceholderState,
			findLabel,
			handleFocus,
			handleBlur,
			handleChange,
			handleClear,
			handleClick,
			handleClose,
			handleClickAppendIcon,
			handleClickPrependIcon,
			validate,
			resetValidation,
			focus,
			blur,
		}
	},
})
</script>

<style lang="less">
@import './select';
</style>
