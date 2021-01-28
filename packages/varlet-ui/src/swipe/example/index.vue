<template>
	<app-type>横着的</app-type>
	<var-swipe class="swipe" ref="swipe" :initial-index="2" @change="log">
		<var-swipe-item style="background: red">0</var-swipe-item>
		<var-swipe-item style="background: yellow">1</var-swipe-item>
		<var-swipe-item style="background: grey">2</var-swipe-item>
	</var-swipe>

	<app-type>竖着的</app-type>
	<var-swipe class="swipe" ref="swipe" vertical indicator-color="rgb(33,150,243)">
		<var-swipe-item style="background: red">0</var-swipe-item>
		<var-swipe-item style="background: yellow">1</var-swipe-item>
		<var-swipe-item style="background: grey">2</var-swipe-item>
	</var-swipe>

	<var-button @click="swipe.next()">下一页</var-button>
	<var-button @click="swipe.prev()">上一页</var-button>
	<var-button @click="swipe.to(2)">跳转下标2</var-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Swipe from '..'
import SwipeItem from '../../swipe-item'
import Button from '../../button'

export default defineComponent({
	name: 'SwipeExample',
	components: {
		[Swipe.name]: Swipe,
		[SwipeItem.name]: SwipeItem,
		[Button.name]: Button,
	},
	setup() {
		return {
			swipe: ref(null),
			log(index: number) {
				console.log(index)
			},
		}
	},
})
</script>

<style scoped lang="less">
.swipe {
	width: 100%;
	height: 200px;
	margin-bottom: 20px;
}
</style>
