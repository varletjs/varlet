<template>
	<div class="example">
		<app-type>基本使用</app-type>
		<var-skeleton v-model:loading="loading" title :rows="36"> 加载的内容 </var-skeleton>

		<app-type>自定义段落高度</app-type>
		<var-skeleton v-model:loading="loading" title :rows="3" :rows-width="['300px', '200px', '100px']">
			加载的内容
		</var-skeleton>

		<app-type>显示头像</app-type>
		<var-skeleton v-model:loading="loading" avatar title :rows="3"> 加载的内容 </var-skeleton>

		<app-type>显示卡片</app-type>
		<var-skeleton v-model:loading="loading" card avatar title :rows="3"> 加载的内容 </var-skeleton>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import Skeleton from '..'

export default defineComponent({
  name: 'SkeletonExample',
  components: {
    [Skeleton.name]: Skeleton,
  },
  setup() {
    const loading: Ref<boolean> = ref(true)

    return { loading }
  },
})
</script>

<style scoped lang="less">
.example {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 0;
}
</style>
