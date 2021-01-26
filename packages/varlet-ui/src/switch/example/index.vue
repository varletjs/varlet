<template>
	<div>
		<app-type>基本使用</app-type>
		<div class="var-switch__example-block">
			<var-switch v-model="value" />
			<var-switch v-model="value" :ripple="false" color="green" />
			<var-switch v-model="value1" disabled />
			<var-switch v-model="value3" readonly />
		</div>
	</div>
	<div>
		<app-type>不同颜色</app-type>
		<div class="var-switch__example-block">
			<var-switch v-model="value" :ripple="false" />
			<var-switch v-model="value" color="indigo" :ripple="false" />
			<var-switch v-model="value" color="red" />
			<var-switch v-model="value" color="orange" />
		</div>
	</div>

	<div>
		<app-type>不同大小</app-type>
		<div class="var-switch__example-block">
			<var-switch v-model="value" size="15" />
			<var-switch v-model="value" />
			<var-switch v-model="value" size="25" />
		</div>
	</div>
	<div>
		<app-type>加载状态</app-type>
		<div class="var-switch__example-block">
			<var-switch v-model="value" loading />
			<var-switch v-model="value" size="25" loading />
			<var-switch v-model="value" size="25" loading loading-color="#89ddff" />
		</div>
	</div>
	<div>
		<app-type>关闭状态</app-type>
		<div class="var-switch__example-block">
			<var-switch v-model="value2" size="25" />
			<var-switch v-model="value2" size="25" close-color="#89ddff" />
			<var-switch v-model="value2" size="25" close-color="#2772f5" />
		</div>
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Switch from '..'

export default defineComponent({
	name: 'SwitchExample',
	components: {
		[Switch.name]: Switch,
	},
	setup() {
		const value = ref(true)
		const value1 = ref(true)
		const value2 = ref(false)
		const value3 = ref(true)

		return {
			value,
			value1,
			value2,
			value3,
		}
	},
})
</script>

<style scoped>
.var-switch__example-block {
	display: flex;
	justify-content: space-between;
}
</style>
