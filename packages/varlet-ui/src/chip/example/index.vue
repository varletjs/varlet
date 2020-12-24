<template>
  <div class="example">
    <div>标签类型</div>
    <div class="example-inner">
      <var-chip>default chip</var-chip>
      <var-chip type="primary">primary</var-chip>
      <var-chip type="info">info</var-chip>
      <var-chip type="success">success</var-chip>
      <var-chip type="warning">warning</var-chip>
      <var-chip type="danger">danger</var-chip>
    </div>
    <div>标签大小</div>
    <div>
      <var-chip type="primary" size="large">标签</var-chip>
      <var-chip type="primary">标签</var-chip>
      <var-chip type="primary" size="small">标签</var-chip>
      <var-chip type="primary" size="mini">标签</var-chip>
    </div>
    <div>空心标签</div>
    <div>
      <var-chip hollow>标签</var-chip>
      <var-chip type="primary" hollow>标签</var-chip>
      <var-chip type="info" hollow>标签</var-chip>
      <var-chip type="success" hollow>标签</var-chip>
      <var-chip type="warning" hollow>标签</var-chip>
      <var-chip type="danger" hollow>标签</var-chip>
    </div>
    <div>圆角标签</div>
    <div>
      <var-chip round>标签</var-chip>
      <var-chip type="primary" round>标签</var-chip>
      <var-chip type="info" round>标签</var-chip>
      <var-chip type="warning" round>标签</var-chip>
      <var-chip type="success" round>标签</var-chip>
      <var-chip type="danger" round>标签</var-chip>
    </div>

    <div>可关闭标签</div>
    <div>
      <var-chip type="primary" paralyse v-if="show" @close="show=false">标签</var-chip>
      <var-chip type="primary" hollow paralyse v-if="show1" @close="show1=false">标签</var-chip>
      <var-chip type="primary" paralyse v-if="show2" @close="show2=false" round>标签</var-chip>
      <var-chip type="primary" paralyse v-if="show4" @close="show4=false" close-icon="=">标签</var-chip>
      <var-chip type="primary" paralyse size="mini" v-if="show3" @close="show3=false">标签</var-chip>
    </div>

    <div>自定义颜色标签</div>
    <div>
      <var-chip color="#7232dd">标签</var-chip>
      <var-chip color="#7232dd" hollow>标签</var-chip>
      <var-chip color="#faecd8" textcolor="#e6a23c" hollow>标签</var-chip>
      <var-chip color="#faecd8" textcolor="#e6a23c">标签</var-chip>
      <var-chip color="#faecd8" textcolor="#e6a23c" paralyse v-if="show6" @close="show6=false">标签</var-chip>
      <var-chip color="#faecd8" textcolor="#e6a23c" hollow paralyse v-if="show5" @close="show5=false"> 标签</var-chip>


    </div>
    <div>添加插槽</div>
    <div>
      <var-chip type="primary">
        <template #left>
          <span>+</span>
        </template>
        标签
      </var-chip>
      <var-chip type="primary">
        <template #right>
          <span>-</span>
        </template>
        标签
      </var-chip>
    </div>
  </div>

</template>

<script lang="ts">
	import { defineComponent, Ref, ref } from 'vue'
	import Chip from '..'

	export default defineComponent({
		name: 'ChipExample',
		components: {
			[Chip.name]: Chip
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

  .var-chip {
    margin-right: 20px;
    margin-bottom: 10px;
  }
</style>
