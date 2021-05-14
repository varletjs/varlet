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
    <var-slider v-model="value1" range @change="handleChange" label-visible="always" />
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
    <var-slider v-model="value1" track-height="4" thumb-size="8" range />
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
import { reactive, toRefs } from 'vue'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Slider from '..'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'

export default {
  name: 'SliderExample',
  components: {
    [Slider.name]: Slider,
    AppType,
  },
  setup() {
    const values = reactive({
      value: 3,
      value1: [24, 50],
      value2: 25,
      value3: 40,
      value4: 20,
      value5: 20,
      value6: 70,
      value7: 50,
      value8: 20,
    })

    const handleChange = (v) => {
      console.log(v)
    }

    watchLang(use)

    return {
      ...toRefs(values),
      pack,
      handleChange,
    }
  },
}
</script>
