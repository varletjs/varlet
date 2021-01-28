<template>
	<div
		class="var-swipe-item"
		:style="{
			width: !vertical ? `${size}px` : null,
			height: vertical ? `${size}px` : null,
			transform: `translate${vertical ? 'Y' : 'X'}(${translate}px)`,
		}"
		v-bind="$attrs"
	>
		<slot />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { useAtParentIndex, useParent } from '../utils/components'
import { SWIPE_BIND_SWIPE_ITEM_KEY, SWIPE_COUNT_SWIPE_ITEM_KEY, SwipeProvider } from '../swipe/provide'
import { SwipeItemProvider } from './provide'

export default defineComponent({
	name: 'VarSwipeItem',
	inheritAttrs: false,
	setup() {
		const { bindParent: bindSwipe, parentProvider: swipeProvider } = useParent<SwipeProvider, SwipeItemProvider>(
			SWIPE_BIND_SWIPE_ITEM_KEY
		)
		const { index } = useAtParentIndex(SWIPE_COUNT_SWIPE_ITEM_KEY)
		if (!bindSwipe || !swipeProvider || !index) {
			throw Error('<var-swipe-item/> must in <var-swipe/>')
		}

		const translate: Ref<number> = ref(0)

		const setTranslate = (x: number) => {
			translate.value = x
		}

		const { size, vertical } = swipeProvider

		const swipeItemProvider: SwipeItemProvider = {
			index,
			setTranslate,
		}

		bindSwipe(swipeItemProvider)

		return {
			size,
			vertical,
			translate,
		}
	},
})
</script>

<style lang="less">
@import './swipeItem';
</style>
