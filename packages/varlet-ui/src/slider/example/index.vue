<template>
  <div>
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-slider v-model="value" />
  </div>
  <div>
    <app-type>{{ pack.stepSize }}</app-type>
    <var-slider v-model="value2" step="10" />
  </div>
  <div>
    <app-type>{{ pack.dualThumb }}</app-type>
    <var-slider v-model="value1" range @change="handleChange" />
  </div>
  <div>
    <app-type>{{ pack.disable }}</app-type>
    <var-slider v-model="value3" disabled />
  </div>
  <div>
    <app-type>{{ pack.readonly }}</app-type>
    <var-slider v-model="value3" readonly />
  </div>
  <div>
    <app-type>{{ pack.sliderSize }}</app-type>
    <var-slider v-model="value1" track-height="6" thumb-size="20" range />
  </div>
  <div>
    <app-type>{{ pack.customStyle }}</app-type>
    <var-slider
      v-model="value4"
      label-color="purple"
      active-color="#e0732c"
      track-color="#3a68b4"
      thumb-color="#e25241"
      label-text-color="#ededed"
    />
  </div>
  <div>
    <app-type>{{ pack.showLabel }}</app-type>
    <var-slider v-model="value5" label-visible="never" />
    <var-slider v-model="value6" />
    <var-slider v-model="value7" label-visible="always" />
  </div>
  <div>
    <app-type>{{ pack.validateValue }}</app-type>
    <var-slider v-model="value8" :rules="[(v) => v > 35 || 'error message']" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Slider from '..'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'

export default defineComponent({
  name: 'SliderExample',
  components: {
    [Slider.name]: Slider,
    AppType,
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
    const value8 = ref(20)
    const handleChange = (v) => {
      console.log(v)
    }

    watchLang(use)

    return {
      value,
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      pack,
      handleChange,
    }
  },
})
</script>
