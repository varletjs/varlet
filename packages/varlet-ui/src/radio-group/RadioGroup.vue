<template>
	<div class="var-radio-group" :class="[`var-radio-group--${direction}`]" v-bind="$attrs">
		<slot />
	</div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { props } from './props'
import { useAtChildrenCounter, useChildren } from '../utils/components'
import { RadioGroupProvider, RADIO_GROUP_BIND_RADIO_KEY, RADIO_GROUP_COUNT_RADIO_KEY } from './provide'
import { RadioProvider } from '../radio/provide'

export default defineComponent({
	name: 'VarRadioGroup',
	inheritAttrs: false,
	props,
	setup(props) {
		const { bindChildren, childProviders: radioProviders } = useChildren<RadioGroupProvider, RadioProvider>(
			RADIO_GROUP_BIND_RADIO_KEY
		)
		const { length } = useAtChildrenCounter(RADIO_GROUP_COUNT_RADIO_KEY)

		const syncAllRadio = () => {
			radioProviders.forEach(({ sync }) => sync(props.modelValue))
		}

		const onToggle = (changedValue: any) => {
			props['onUpdate:modelValue']?.(changedValue)
			props.onChange?.(changedValue)
		}

		watch(() => props.modelValue, syncAllRadio)

		// radio insert or remove
		watch(() => length.value, syncAllRadio)

		bindChildren({
			onToggle,
		})

		return {}
	},
})
</script>

<style lang="less">
@import './radioGroup';
</style>
