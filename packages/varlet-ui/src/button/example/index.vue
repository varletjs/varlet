<template>
	<div class="example">
		<var-button class="example__button" round>
			<img
				style="width: 40px; height: 40px"
				src="https://img.yzcdn.cn/vant/logo.png"
			/>
		</var-button>

		<var-button
			class="example__button"
			block
			type="warning"
			size="large"
			background="rgb(114, 50, 221)"
			color="rgb(255,192,0)"
		>
			修改颜色
		</var-button>

		<var-button class="example__button" type="primary" @click="trigger"
			>切换状态</var-button
		>
		<var-button
			class="example__button"
			type="plain"
			size="large"
			:disabled="disabled"
			>{{ disabled ? '禁用' : '启用' }}</var-button
		>

		<var-button
			class="example__button"
			type="primary"
			size="large"
			v-model:loading="loading"
			@click="trigger"
		>
			Large
		</var-button>
		<var-button
			class="example__button"
			type="primary"
			size="normal"
			v-model:loading="loading"
			@click="trigger"
		>
			Normal
		</var-button>
		<var-button
			class="example__button"
			type="primary"
			size="small"
			v-model:loading="loading"
			@click="trigger"
		>
			Small
		</var-button>
		<var-button
			class="example__button"
			type="primary"
			size="mini"
			v-model:loading="loading"
			@click="trigger"
		>
			Mini
		</var-button>

		<var-button
			class="example__button"
			type="danger"
			loading-type="cube"
			size="large"
			v-model:loading="loading"
			@click="trigger"
		>
			Large
		</var-button>
		<var-button
			class="example__button"
			type="danger"
			loading-type="cube"
			size="normal"
			v-model:loading="loading"
			@click="trigger"
		>
			Normal
		</var-button>
		<var-button
			class="example__button"
			type="danger"
			loading-type="cube"
			size="small"
			v-model:loading="loading"
			@click="trigger"
		>
			Small
		</var-button>
		<var-button
			class="example__button"
			type="danger"
			loading-type="cube"
			size="mini"
			v-model:loading="loading"
			@click="trigger"
		>
			Mini
		</var-button>

		<var-button
			class="example__button"
			type="warning"
			loading-type="rect"
			size="large"
			v-model:loading="loading"
			@click="trigger"
		>
			Large
		</var-button>
		<var-button
			class="example__button"
			type="warning"
			loading-type="rect"
			size="normal"
			v-model:loading="loading"
			@click="trigger"
		>
			Normal
		</var-button>
		<var-button
			class="example__button"
			type="warning"
			loading-type="rect"
			size="small"
			v-model:loading="loading"
			@click="trigger"
		>
			Small
		</var-button>
		<var-button
			class="example__button"
			type="warning"
			loading-type="rect"
			size="mini"
			v-model:loading="loading"
			@click="trigger"
		>
			Mini
		</var-button>

		<var-button
			class="example__button"
			type="success"
			loading-type="disappear"
			size="large"
			v-model:loading="loading"
			@click="trigger"
		>
			Large
		</var-button>
		<var-button
			class="example__button"
			type="success"
			loading-type="disappear"
			size="normal"
			v-model:loading="loading"
			@click="trigger"
		>
			Normal
		</var-button>
		<var-button
			class="example__button"
			type="success"
			loading-type="disappear"
			size="small"
			v-model:loading="loading"
			@click="trigger"
		>
			Small
		</var-button>
		<var-button
			class="example__button"
			type="success"
			loading-type="disappear"
			size="mini"
			v-model:loading="loading"
			@click="trigger"
		>
			Mini
		</var-button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import Button from '..'

export default defineComponent({
	name: 'ButtonExample',
	components: {
		[Button.name]: Button,
	},
	setup() {
		const disabled: Ref<boolean> = ref(true)
		const loading: Ref<boolean> = ref(true)

		return {
			disabled,
			loading,
			trigger() {
				disabled.value = !disabled.value
				loading.value = !loading.value
			},
		}
	},
})
</script>

<style lang="less">
.example {
	padding: 20px;

	&__button {
		margin-bottom: 20px;
		margin-right: 20px;
	}
}
</style>
