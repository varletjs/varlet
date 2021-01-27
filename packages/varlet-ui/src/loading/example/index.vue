<template>
	<div class="loading-demo">
		<div class="loading-demo__type">
			<app-type>Type</app-type>
			<div class="loading-demo__type-block">
				<var-loading type="circle" />
				<var-loading type="cube" />
				<var-loading type="wave" />
				<var-loading type="rect" />
				<var-loading type="disappear" />
			</div>
		</div>
		<div class="loading-demo__size">
			<app-type>Size</app-type>
			<div class="loading-demo__size-block">
				<var-loading type="circle" radius="12" />
				<var-loading type="cube" size="small" />
				<var-loading type="wave" size="small" />
				<var-loading type="rect" size="small" />
				<var-loading type="disappear" size="small" />
			</div>
		</div>
	</div>
</template>

<script>
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
		.var-loading {
			padding: 8px 0;
		}
	}
}
</style>
