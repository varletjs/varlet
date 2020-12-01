<template>
	<div class="loading-demo">
		<div class="loading-demo__type">
			<app-type>Type</app-type>
			<div class="loading-demo__type-block">
				<varlet-loading type="cube" />
				<varlet-loading type="wave" />
				<varlet-loading type="rect" />
				<varlet-loading type="disappear" />
			</div>
		</div>
		<div class="loading-demo__size">
			<app-type>Size</app-type>
			<div class="loading-demo__size-block">
				<varlet-loading type="cube" size="small" />
				<varlet-loading type="wave" size="small" />
				<varlet-loading type="rect" size="small" />
				<varlet-loading type="disappear" size="small" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Loading from '..'

export default defineComponent({
	name: 'LoadingExample',
	components: {
		[Loading.name]: Loading,
	},
})
</script>

<style lang="less" scoped>
.loading-demo {
	&__type,
	&__size,
	&__text {
		display: flex;
		flex-direction: column;
	}

	&__type-block,
	&__size-block,
	&__text-block {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.varlet-loading {
			padding: 8px 0;
		}
	}
}
</style>
