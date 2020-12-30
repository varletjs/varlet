<template>
	<div class="example">
		<var-sticky style="margin-top: 100px" offset-top="20px">
			<var-button>20px</var-button>
		</var-sticky>

		<var-sticky style="margin-top: 100px" offset-top="6rem">
			<var-button>6rem</var-button>
		</var-sticky>

		<div class="scroller">
			<var-sticky style="margin-top: 100px" offset-top="50px" @scroll="handleScroll">
				<var-button>50px</var-button>
			</var-sticky>
			<div class="i"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sticky from '..'
import Button from '../../button'

export default defineComponent({
	name: 'StickyExample',
	components: {
		[Sticky.name]: Sticky,
		[Button.name]: Button,
	},
	setup() {
		return {
			handleScroll(top, isFixed) {
				console.log(top)
				console.log(isFixed)
			},
		}
	},
})
</script>

<style scoped lang="less">
.example {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 200vh;

	.scroller {
		width: 100%;
		height: 400px;
		overflow: auto;
		background: #000;
		margin-top: 20px;

		.i {
			width: 100%;
			height: 500px;
			background: yellow;
		}
	}
}
</style>
