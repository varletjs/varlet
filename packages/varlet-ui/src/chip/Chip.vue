<template>
	<transition name="var-fade">
		<span
			v-ripple="{ disabled }"
			class="var-chip var--box var-elevation--2"
			:style="{
				color: textcolor ? textcolor : hollow ? color : '#fff',
				background: hollow ? '#fff' : color,
				borderColor: hollow ? color : color ? color : 'none',
			}"
			:class="[
				`var-chip--${type}`,
				`var-chip--${size}`,
				block ? 'var--flex' : 'var--inline-flex',
				round ? 'var-chip--round' : null,
				hollow ? 'var-chip--hollow' : null,
			]"
		>
			<slot name="left"></slot>
			<slot />
			<slot name="right"></slot>
			<span v-if="paralyse && !closeIcon" class="var-chip--close" @click="$props.onClose">x</span>
			<span v-else-if="paralyse && closeIcon" class="var-chip--close" @click="$props.onClose">{{ closeIcon }}</span>
		</span>
	</transition>
</template>

<script lang="ts">
import Ripple from '../ripple'
import { defineComponent } from 'vue'
import { props } from './props'

export default defineComponent({
	name: 'VarChip',
	components: {},
	directives: { Ripple },
	props,
})
</script>

<style lang="less">
@import './chip';
</style>
