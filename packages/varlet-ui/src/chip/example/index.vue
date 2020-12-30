<template>
  <div class="example">
    <div>标签类型</div>
    <div class="example-inner">
      <var-chip>默认标签</var-chip>
      <var-chip type="primary">主要标签</var-chip>
      <var-chip type="info">信息标签</var-chip>
      <var-chip type="success">成功标签</var-chip>
      <var-chip type="warning">警告标签</var-chip>
      <var-chip type="danger">危险标签</var-chip>
    </div>
    <div>标签大小</div>
    <div>
      <var-chip type="primary" size="large">大型标签</var-chip>
      <var-chip type="primary">常规标签</var-chip>
      <var-chip type="primary" size="small">小型标签</var-chip>
      <var-chip type="primary" size="mini">迷你标签</var-chip>
    </div>
    <div>空心标签</div>
    <div>
      <var-chip plain>标签</var-chip>
      <var-chip type="primary" plain>标签</var-chip>
      <var-chip type="info" plain>标签</var-chip>
      <var-chip type="success" plain>标签</var-chip>
      <var-chip type="warning" plain>标签</var-chip>
      <var-chip type="danger" plain>标签</var-chip>
    </div>
    <div>不使用圆角标签</div>
    <div>
      <var-chip :round="false">标签</var-chip>
      <var-chip type="primary" :round="false">标签</var-chip>
      <var-chip type="info" :round="false">标签</var-chip>
      <var-chip type="warning" :round="false">标签</var-chip>
      <var-chip type="success" :round="false">标签</var-chip>
      <var-chip type="danger" :round="false">标签</var-chip>
    </div>

    <div>可关闭标签</div>
    <div>
      <var-chip type="info" closable plain v-if="show" @close="show=false">标签</var-chip>
      <var-chip type="primary" plain closable v-if="show1" @close="show1=false"  icon-name="delete">标签
      </var-chip>
      <var-chip type="primary" closable v-if="show2" @close="show2=false">标签</var-chip>
      <var-chip type="info" closable v-if="show4" @close="show4=false" :round="false">标签</var-chip>
      <var-chip type="success" closable size="mini" v-if="show3" @close="show3=false">标签</var-chip>
    </div>

    <div>自定义颜色标签</div>
    <div>
      <var-chip color="#7232dd">标签</var-chip>
      <var-chip color="#7232dd" plain>标签</var-chip>
      <var-chip color="#faecd8" text-color="#e6a23c" plain>标签</var-chip>
      <var-chip color="#faecd8" text-color="#e6a23c">标签</var-chip>
      <var-chip color="#faecd8" text-color="#e6a23c" closable v-if="show6" @close="show6=false">标签</var-chip>
      <var-chip color="#faecd8" text-color="#e6a23c" plain closable v-if="show5" @close="show5=false"> 标签</var-chip>
    </div>
    <div>添加插槽</div>
    <div>
      <var-chip type="primary" plain closable>
        <template #left>
          <var-icon name="star"></var-icon>
        </template>
        标签
      </var-chip>

      <var-chip type="info" plain closable icon-name="delete">
        <template #left>
          <var-icon name="fire"></var-icon>
        </template>
        标签
      </var-chip>

      <var-chip type="primary">
        <template #right>
          <var-icon name="cake-variant"></var-icon>
        </template>
        标签
      </var-chip>
    </div>
  </div>

</template>

<script lang="ts">
	import { defineComponent, Ref, ref } from 'vue'
	import Chip from '..'
	import Icon from '../../icon'

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
  }

  .var-chip {
    margin-right: 20px;
    margin-bottom: 10px;
  }
</style>
