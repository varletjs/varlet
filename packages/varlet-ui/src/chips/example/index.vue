<template>
  <div class="example">
    <div>标签类型</div>
    <div class="example-inner">
      <var-chips>标签</var-chips>
      <var-chips type="primary">标签</var-chips>
      <var-chips type="info">标签</var-chips>
      <var-chips type="success">标签</var-chips>
      <var-chips type="warning">标签</var-chips>
      <var-chips type="danger">标签</var-chips>
    </div>
    <div>标签大小</div>
    <div>
      <var-chips type="primary" size="large">标签</var-chips>
      <var-chips type="primary">标签</var-chips>
      <var-chips type="primary" size="small">标签</var-chips>
      <var-chips type="primary" size="mini">标签</var-chips>
    </div>
    <div>空心标签</div>
    <div>
      <var-chips hollow>标签</var-chips>
      <var-chips type="primary" hollow>标签</var-chips>
      <var-chips type="info" hollow>标签</var-chips>
      <var-chips type="success" hollow>标签</var-chips>
      <var-chips type="warning" hollow>标签</var-chips>
      <var-chips type="danger" hollow>标签</var-chips>
    </div>
    <div>圆角标签</div>
    <div>
      <var-chips round>标签</var-chips>
      <var-chips type="primary" round>标签</var-chips>
      <var-chips type="info" round>标签</var-chips>
      <var-chips type="warning" round>标签</var-chips>
      <var-chips type="success" round>标签</var-chips>
      <var-chips type="danger" round>标签</var-chips>
    </div>

    <div>可关闭标签</div>
    <div>
      <var-chips type="primary" paralyse v-if="show" @close="show=false">标签</var-chips>
      <var-chips type="primary" hollow paralyse v-if="show1" @close="show1=false">标签</var-chips>
      <var-chips type="primary" paralyse v-if="show2" @close="show2=false" round>标签</var-chips>
      <var-chips type="primary" paralyse v-if="show4" @close="show4=false" close-icon="=">标签</var-chips>
      <var-chips type="primary" paralyse size="mini" v-if="show3" @close="show3=false">标签</var-chips>
    </div>

    <div>自定义颜色标签</div>
    <div>
      <var-chips color="#7232dd">标签</var-chips>
      <var-chips color="#7232dd" hollow>标签</var-chips>
      <var-chips color="#faecd8" textcolor="#e6a23c" hollow>标签</var-chips>
      <var-chips color="#faecd8" textcolor="#e6a23c">标签</var-chips>
      <var-chips color="#faecd8" textcolor="#e6a23c" paralyse v-if="show6" @close="show6=false">标签</var-chips>
      <var-chips color="#faecd8" textcolor="#e6a23c" hollow paralyse v-if="show5" @close="show5=false"> 标签</var-chips>


    </div>
    <div>添加插槽</div>
    <div>
      <var-chips type="primary">
        <template #left>
          <span>+</span>
        </template>
        标签
      </var-chips>
      <var-chips type="primary">
        <template #right>
          <span>-</span>
        </template>
        标签
      </var-chips>
    </div>
  </div>

</template>

<script lang="ts">
	import { defineComponent, Ref, ref } from 'vue'
	import Chips from '..'

	export default defineComponent({
		name: 'ChipsExample',
		components: {
			[Chips.name]: Chips
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
  }

  .var-chips {
    margin-right: 20px;
    margin-bottom: 10px;
  }
</style>
