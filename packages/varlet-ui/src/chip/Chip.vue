<template>
	<transition name="var-fade">
		<span
			v-ripple="{ disabled }"
			class="var-chip var--box"
			:class="[
				`var-chip--${size}`,
				block ? 'var--flex' : 'var--inline-flex',
				plain ? `var-chip--plain-${type}` : `var-chip--${type}`,
				{ 'var-chip--round': round, 'var-chip--plain': plain },
			]"
			:style="controlStyle()"
			v-bind="$attrs"
		>
			<slot name="left"></slot>
			<span :class="[`var-chip--text-${size}`]">
				<slot />
			</span>
			<slot name="right"></slot>
			<span v-if="closable" class="var-chip--close" @click="$props.onClose">
				<var-icon :name="`${iconName ? iconName : 'close-circle'}`"></var-icon>
			</span>
		</span>
	</transition>
</template>

<script lang="ts">
import Ripple from '../ripple'
import { defineComponent, Ref, ref } from 'vue'
import { props } from './props'
import Icon from '../icon'

export default defineComponent({
	name: 'VarChip',
	components: {
		[Icon.name]: Icon,
	},
	directives: { Ripple },
	inheritAttrs: false,
	props,
	setup(props) {
		const color: Ref<string | null> = ref(null)
		if (props.textColor) {
			// eslint-disable-next-line vue/no-setup-props-destructure
			color.value = props.textColor
		} else if (props.plain) {
			color.value = props.color || null
		} else if (props.color) {
			color.value = '#fff'
		} else {
			color.value = null
		}
		const controlStyle = () => {
			return {
				color: color.value,
				background: !props.plain ? props.color || null : null,
				borderColor: props.plain ? props.color || null : null,
			}
		}
		return {
			controlStyle,
		}
	},
})
</script>

<style lang="less">
@import './chip';
</style>
