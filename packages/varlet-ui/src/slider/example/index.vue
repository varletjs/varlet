<template>
	<div>
		<app-type>基本使用</app-type>
		<var-slider v-model="value" @start="start" @end="end" />
	</div>
	<div>
		<app-type>不同步长</app-type>
		<var-slider v-model="value2" :step="10" />
	</div>
	<div>
		<app-type>双滑块</app-type>
		<var-slider :step="1" v-model="value1" range />
	</div>
	<div>
		<app-type>禁用</app-type>
		<var-slider :step="1" v-model="value3" disabled />
	</div>
	<div>
		<app-type>只读</app-type>
		<var-slider :step="1" v-model="value3" readonly />
	</div>
	<div>
		<app-type>不同大小</app-type>
		<var-slider v-model="value1" track-height="6" thumb-size="20" range />
	</div>
	<div>
		<app-type>不同样式</app-type>
		<var-slider
			v-model="value4"
			label-color="purple"
			active-color="#e0732c"
			track-color="#3a68b4"
			thumb-color="#e25241"
		/>
	</div>
	<div>
		<app-type>显示标签</app-type>
		<var-slider v-model="value5" label-visible="never" />
		<var-slider v-model="value6" />
		<var-slider v-model="value7" label-visible="always" />
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Slider from '..'

export default defineComponent({
  name: 'SliderExample',
  components: {
    [Slider.name]: Slider,
  },
  setup() {
    const value = ref(3)
    const value1 = ref([3, 50])
    const value2 = ref(25)
    const value3 = ref(40)
    const value4 = ref(20)
    const value5 = ref(20)
    const value6 = ref(70)
    const value7 = ref(50)
    const change = (v) => {
      console.log(v)
    }
    const start = () => {
      console.log('start')
    }
    const end = () => {
      console.log('end')
    }
    return {
      value,
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      change,
      start,
      end,
    }
  },
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
