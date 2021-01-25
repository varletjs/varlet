<template>
	<app-type>基本用法</app-type>
	<var-checkbox v-model="v" :rules="[(v) => !!v || '必须同意哥哥!']">checkbox {{ v }}</var-checkbox>

	<app-type>改颜色</app-type>
	<var-checkbox v-model="v" unchecked-color="gray" checked-color="red">checkbox {{ v }}</var-checkbox>

	<app-type>改映射</app-type>
	<var-checkbox v-model="v1" :checked-value="1" :unchecked-value="0">checkbox {{ v1 }}</var-checkbox>

	<app-type>关波纹</app-type>
	<var-checkbox v-model="v1" :checked-value="1" :unchecked-value="0" :ripple="false">checkbox {{ v1 }}</var-checkbox>

	<app-type>禁用</app-type>
	<var-checkbox v-model="v1" disabled :checked-value="1" :unchecked-value="0" :ripple="false"
		>checkbox {{ v1 }}</var-checkbox
	>

	<app-type>icon插槽</app-type>
	<var-checkbox v-model="v1" :checked-value="1" :unchecked-value="0">
		checkbox {{ v1 }}

		<template #unchecked-icon>
			<var-icon name="star-outline" size="24px" />
		</template>
		<template #checked-icon>
			<var-icon name="star" size="24px" />
		</template>
	</var-checkbox>

	<app-type>checkbox 组 {{ v2 }}</app-type>
	<var-checkbox-group v-model="v2" ref="g" :max="4" @change="log" :rules="[(v) => v.length >= 3 || '哥哥至少选3个']">
		<var-checkbox :checked-value="1">1</var-checkbox>
		<var-checkbox :checked-value="2">2</var-checkbox>
		<var-checkbox :checked-value="3">3</var-checkbox>
		<var-checkbox :checked-value="4">4</var-checkbox>
		<var-checkbox v-for="l in list" :key="l" :checked-value="l">{{ l }}</var-checkbox>
	</var-checkbox-group>

	<var-button style="margin: 10px" @click="g.checkAll()">全选</var-button>
	<var-button style="margin: 10px" @click="g.uncheckAll()">清空</var-button>
	<var-button style="margin: 10px" @click="g.inverseAll()">反选</var-button>
	<var-button style="margin: 10px" @click="g.validate()">校验</var-button>
	<var-button style="margin: 10px" @click="g.resetValidation()">清除校验</var-button>
	<var-button style="margin: 10px" @click="g.reset()">重置</var-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Checkbox from '..'
import CheckboxGroup from '../../checkbox-group'
import Icon from '../../icon'
import Button from '../../button'

export default defineComponent({
	name: 'CheckboxExample',
	components: {
		[Checkbox.name]: Checkbox,
		[CheckboxGroup.name]: CheckboxGroup,
		[Icon.name]: Icon,
		[Button.name]: Button,
	},
	setup() {
		const g: any = ref(null)
		return {
			v: ref(false),
			v1: ref(0),
			v2: ref([1, 3]),
			list: ref([]),
			g,
			log(v: any) {
				console.log(v)
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
