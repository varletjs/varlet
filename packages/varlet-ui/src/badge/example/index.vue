<template>
  <div class="example">
    <app-type>主题色徽标</app-type>
    <var-badge :value="data1"></var-badge>
    <var-badge :value="data1" type="primary"></var-badge>
    <var-badge :value="data1" type="info"></var-badge>
    <var-badge :value="data1" type="warning"></var-badge>
    <var-badge :value="data1" type="success"></var-badge>
    <var-badge :value="data1" type="danger"></var-badge>
    <var-badge type="danger"></var-badge>
    <app-type>圆点徽标</app-type>
    <var-badge dot type="danger"></var-badge>
    <app-type>其他dom一起用</app-type>
    <div>
      <span class="example-span">我是其他dom</span>
      <var-badge dot type="danger">
      </var-badge>
    </div>

    <app-type>不同徽标定位</app-type>

    <var-badge type="danger" position="right-top">
      <var-chip plain :round="false" color="#009688">右上</var-chip>
    </var-badge>
    <var-badge type="danger" position="right-bottom">
      <var-chip plain :round="false" color="#009688">右下</var-chip>
    </var-badge>
    <var-badge type="danger" position="left-top">
      <var-chip plain :round="false" color="#009688">左上</var-chip>
    </var-badge>
    <var-badge type="danger" position="left-bottom">
      <var-chip plain :round="false" color="#009688">左下</var-chip>
    </var-badge>

    <app-type>是否显示徽标</app-type>

    <var-button @click="handleChange">
      点击改变状态
    </var-button>
    <var-badge type="danger" position="right-top" :hidden="hidden">
      <var-chip plain :round="false" color="#009688">徽标</var-chip>
    </var-badge>
    <app-type>自定义徽标颜色</app-type>
    <var-badge color="#6200ea" position="right-top">
      <var-chip plain :round="false" color="#009688">徽标</var-chip>
    </var-badge>
    <app-type>添加图标</app-type>
    <var-badge color="#6200ea" position="right-top" icon="account-circle">
      <var-chip plain :round="false" color="#009688">徽标</var-chip>
    </var-badge>
  </div>


</template>

<script lang="ts">
	import { defineComponent, Ref, ref } from 'vue'
	import Badge from '..'
	import Button from '../../button'
  import Chip from '../../chip'

	export default defineComponent({
		name: 'BadgeExample',
		components: {
			[Badge.name]: Badge,
			[Button.name]: Button,
      [Chip.name]:Chip
		},
		setup() {
			const data1: Ref<string | number> = ref(1)
			const hidden: Ref<boolean> = ref(false)
			const handleChange = () => {
				hidden.value = !hidden.value
			}
			return {
				data1,
				hidden,
				handleChange
			}
		}
	})
</script>

<style scoped>
  .var-badge {
    margin-right: 20px;
    margin-bottom: 8px;
  }
  .example-span{
    font-size: 14px;
    margin-right: 10px;
  }
</style>
