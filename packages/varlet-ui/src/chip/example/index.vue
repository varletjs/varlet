<template>
  <app-type class="example">
    <app-type>主题色标签</app-type>
    <var-chip type="primary">主要标签</var-chip>
    <var-chip type="success">成功标签</var-chip>
    <var-chip type="danger">危险标签</var-chip>
    <var-chip type="warning">警告标签</var-chip>
    <var-chip type="info">信息标签</var-chip>
    <var-chip>默认标签</var-chip>
    <app-type>空心样式标签</app-type>

    <var-chip plain type="primary">空心标签</var-chip>

    <app-type>非圆角标签</app-type>
    <var-chip :round="false" type="primary">非圆角标签</var-chip>

    <app-type>标签尺寸</app-type>
    <var-chip size="large">大标签</var-chip>
    <var-chip>中等标签</var-chip>
    <var-chip size="small">小标签</var-chip>
    <var-chip size="mini">迷你标签</var-chip>
    <app-type>块级标签</app-type>
    <var-chip type="primary" block>块级标签</var-chip>
    <var-chip type="primary">块级标签</var-chip>

    <app-type>可关闭标签</app-type>
    <var-chip closable v-if="show" @close="show = false">可关闭标签</var-chip>
    <var-chip closable icon-name="delete" v-if="show1" @close="show1 = false">自定义关闭图标</var-chip>

    <app-type>自定义颜色标签</app-type>
    <var-chip color="#009688">标签</var-chip>
    <var-chip color="#009688" plain>标签</var-chip>
    <var-chip color="#faecd8" text-color="#e6a23c" plain>标签</var-chip>
    <var-chip color="#faecd8" text-color="#e6a23c">标签</var-chip>
    <app-type>添加左右插槽标签</app-type>
    <var-chip type="primary" plain>
      <template #left>
        <var-icon name="star"></var-icon>
      </template>
      左侧插槽
    </var-chip>
    <var-chip type="primary" plain>
      <template #right>
        <var-icon name="fire"></var-icon>
      </template>
      右侧插槽
    </var-chip>
    <var-chip type="primary" plain>
      <template #left>
        <var-icon name="account-circle"></var-icon>
      </template>
      <template #right>
        <var-icon name="cake-variant"></var-icon>
      </template>
      左右两侧插槽
    </var-chip>
  </app-type>

</template>

<script lang="ts">
	import { defineComponent, Ref, ref } from 'vue'
	import Chip from '..'
	import Icon from '../../icon'
	import Snackbar from '../../snackbar'

	export default defineComponent({
		name: 'ChipExample',
		components: {
			[Chip.name]: Chip,
			[Icon.name]: Icon
		},
		setup() {
			const show: Ref<boolean> = ref(true)
			const show1: Ref<boolean> = ref(true)
			const show2: Ref<boolean> = ref(true)
			const show3: Ref<boolean> = ref(true)
			const show4: Ref<boolean> = ref(true)
			const show5: Ref<boolean> = ref(true)
			const show6: Ref<boolean> = ref(true)
			return {
				show,
				show1,
				show2,
				show3,
				show4,
				show5,
				show6
			}
		}
	})
</script>

<style scoped>
  .example {
    padding: 20px;
  }

  .var-chip {
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>
