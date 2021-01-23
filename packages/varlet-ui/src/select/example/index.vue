<template>
	<var-select
		placeholder="请选择分类"
		chip
		:rules="[(v) => !!v || '不能为空']"
		v-model="v1"
		clearable
		style="margin-top: 20px"
		active-color="rgb(98,0,234)"
	>
		<var-option label="选项1" :value="1">插槽选项1</var-option>
		<var-option label="选项2" :value="2" />
		<var-option label="选项3" :value="3" />
		<var-option label="选项4" :value="4" />
		<var-option label="选项5" :value="5" />
		<var-option label="选项6" :value="6" />
		<var-option label="选项7" :value="7" />
		<var-option label="选项8" :value="8" />
		<var-option label="选项9" :value="9" />
		<var-option label="选项10" :value="10" />
	</var-select>

	<var-select
		placeholder="请选择分类"
		multiple
		separator="/"
		:rules="[(v) => v.length >= 3 || '请至少选3个']"
		v-model="v2"
		clearable
		style="margin-top: 20px"
	>
		<var-option label="选项1" :value="1">插槽选项1</var-option>
		<var-option label="选项2" :value="2" />
		<var-option label="选项3" :value="3" />
		<var-option label="选项4" :value="4" />
		<var-option label="选项5" :value="5" />
		<var-option label="选项6" :value="6" />
		<var-option label="选项7" :value="7" />
		<var-option label="选项8" :value="8" />
		<var-option label="选项9" :value="9" />
		<var-option label="选项10" :value="10" />
	</var-select>

	<var-select
		placeholder="请选择分类"
		multiple
		chip
		:rules="[(v) => v.length >= 3 || '请至少选3个']"
		v-model="v"
		clearable
		style="margin-top: 20px"
		@close="log"
		@clear="log"
	>
		<var-option label="选项1" :value="1">插槽选项1</var-option>
		<var-option label="选项2" :value="2" />
		<var-option label="选项3" :value="3" />
		<var-option label="选项4" :value="4" />
		<var-option label="选项5" :value="5" />
		<var-option label="选项6" :value="6" />
		<var-option label="选项7" :value="7" />
		<var-option label="选项8" :value="8" />
		<var-option label="选项9" :value="9" />
		<var-option label="选项10" :value="10" />
	</var-select>

	<div style="margin-top: 20px">
		<var-button @click="v.push(9, 10)">动态选择9, 10</var-button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Select from '..'
import Option from '../../option'
import Button from '../../button'

export default defineComponent({
	name: 'SelectExample',
	components: {
		[Select.name]: Select,
		[Option.name]: Option,
		[Button.name]: Button,
	},
	setup() {
		return {
			v: ref([]),
			v1: ref(),
			v2: ref([]),
			log(...rest: any[]) {
				console.log(...rest)
			},
		}
	},
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
