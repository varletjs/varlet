<template>
	<div class="var--box var-loading">
		<div class="var-loading__circle" v-if="type === 'circle'">
			<span
				class="var-loading__circle-block"
				:style="{
					width: radius * 2 + 'px',
					height: radius * 2 + 'px',
				}"
			>
				<svg viewBox="25 25 50 50">
					<circle cx="50" cy="50" r="20" fill="none"></circle>
				</svg>
			</span>
		</div>

		<div :class="`var-loading__wave var-loading__wave-${size}`" v-if="type === 'wave'">
			<div :style="{ backgroundColor: color }" :class="`var-loading__wave-item var-loading__wave-item-${size}`"></div>
			<div :style="{ backgroundColor: color }" :class="`var-loading__wave-item var-loading__wave-item-${size}`"></div>
			<div :style="{ backgroundColor: color }" :class="`var-loading__wave-item var-loading__wave-item-${size}`"></div>
			<div :style="{ backgroundColor: color }" :class="`var-loading__wave-item var-loading__wave-item-${size}`"></div>
			<div :style="{ backgroundColor: color }" :class="`var-loading__wave-item var-loading__wave-item-${size}`"></div>
		</div>

		<div :class="`var-loading__cube var-loading__cube-${size}`" v-if="type === 'cube'">
			<div :style="{ backgroundColor: color }" :class="`var-loading__cube-item var-loading__cube-item-${size}`"></div>
			<div :style="{ backgroundColor: color }" :class="`var-loading__cube-item var-loading__cube-item-${size}`"></div>
			<div :style="{ backgroundColor: color }" :class="`var-loading__cube-item var-loading__cube-item-${size}`"></div>
			<div :style="{ backgroundColor: color }" :class="`var-loading__cube-item var-loading__cube-item-${size}`"></div>
		</div>

		<div :class="`var-loading__rect var-loading__rect-${size}`" v-if="type === 'rect'">
			<div :style="{ backgroundColor: color }" :class="`var-loading__rect-item var-loading__rect-item-${size}`"></div>
			<div :style="{ backgroundColor: color }" :class="`var-loading__rect-item var-loading__rect-item-${size}`"></div>
			<div :style="{ backgroundColor: color }" :class="`var-loading__rect-item var-loading__rect-item-${size}`"></div>
			<div :style="{ backgroundColor: color }" :class="`var-loading__rect-item var-loading__rect-item-${size}`"></div>
			<div :style="{ backgroundColor: color }" :class="`var-loading__rect-item var-loading__rect-item-${size}`"></div>
			<div :style="{ backgroundColor: color }" :class="`var-loading__rect-item var-loading__rect-item-${size}`"></div>
			<div :style="{ backgroundColor: color }" :class="`var-loading__rect-item var-loading__rect-item-${size}`"></div>
			<div :style="{ backgroundColor: color }" :class="`var-loading__rect-item var-loading__rect-item-${size}`"></div>
		</div>

		<div :class="`var-loading__disappear var-loading__disappear-${size}`" v-if="type === 'disappear'">
			<div
				:style="{ backgroundColor: color }"
				:class="`var-loading__disappear-item var-loading__disappear-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`var-loading__disappear-item var-loading__disappear-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`var-loading__disappear-item var-loading__disappear-item-${size}`"
			></div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'

export default defineComponent({
	name: 'VarLoading',
	props,
})
</script>

<style lang="less">
@import './loading';
</style>
