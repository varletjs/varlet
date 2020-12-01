<template>
	<div
		class="varlet-loading"
		:style="{ flexDirection: vertical ? 'column' : 'row' }"
	>
		<div
			:class="`varlet-loading__wave varlet-loading__wave-${size}`"
			v-if="type === 'wave'"
		>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__wave-item varlet-loading__wave-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__wave-item varlet-loading__wave-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__wave-item varlet-loading__wave-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__wave-item varlet-loading__wave-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__wave-item varlet-loading__wave-item-${size}`"
			></div>
		</div>

		<div
			:class="`varlet-loading__cube varlet-loading__cube-${size}`"
			v-if="type === 'cube'"
		>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__cube-item varlet-loading__cube-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__cube-item varlet-loading__cube-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__cube-item varlet-loading__cube-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__cube-item varlet-loading__cube-item-${size}`"
			></div>
		</div>

		<div
			:class="`varlet-loading__rect varlet-loading__rect-${size}`"
			v-if="type === 'rect'"
		>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__rect-item varlet-loading__rect-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__rect-item varlet-loading__rect-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__rect-item varlet-loading__rect-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__rect-item varlet-loading__rect-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__rect-item varlet-loading__rect-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__rect-item varlet-loading__rect-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__rect-item varlet-loading__rect-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__rect-item varlet-loading__rect-item-${size}`"
			></div>
		</div>

		<div
			:class="`varlet-loading__disappear varlet-loading__disappear-${size}`"
			v-if="type === 'disappear'"
		>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__disappear-item varlet-loading__disappear-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__disappear-item varlet-loading__disappear-item-${size}`"
			></div>
			<div
				:style="{ backgroundColor: color }"
				:class="`varlet-loading__disappear-item varlet-loading__disappear-item-${size}`"
			></div>
		</div>
		<span
			class="varlet-loading__text"
			:style="{ fontSize: fontSize + 'px', color: fontColor }"
		>
			<slot></slot>
		</span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './propsEmits'

export default defineComponent({
	name: 'VarletLoading',
	props,
})
</script>

<style lang="less">
@import './loading';
</style>
