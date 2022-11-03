<script setup>
import { reactive } from 'vue'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import VarSlider from '..'
import dark from '../../themes/dark'
import { pack, use } from './locale'

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
  value9: [5, 38],
  value10: [7, 64],
  value11: 0,
})

const handleChange = (v) => {
  console.log(v)
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-slider v-model="values.value" />

  <app-type>{{ pack.stepSize }}</app-type>
  <var-slider v-model="values.value2" step="10" />

  <app-type>{{ pack.dualThumb }}</app-type>
  <var-slider v-model="values.value1" range @change="handleChange" label-visible="always" />

  <app-type>{{ pack.range }}</app-type>
  <var-slider v-model="values.value11" max="210" min="-50" label-visible="always" />

  <app-type>{{ pack.disable }}</app-type>
  <var-slider v-model="values.value3" disabled />

  <app-type>{{ pack.readonly }}</app-type>
  <var-slider v-model="values.value3" readonly />

  <app-type>{{ pack.sliderSize }}</app-type>
  <var-slider v-model="values.value10" track-height="1.5vw" range />

  <app-type>{{ pack.customStyle }}</app-type>
  <var-slider
    v-model="values.value4"
    label-color="purple"
    active-color="#e0732c"
    track-color="#3a68b4"
    thumb-color="#e25241"
    label-text-color="#ededed"
  />

  <app-type>{{ pack.customBtn }}</app-type>
  <var-slider v-model="values.value9" range active-color="#52af77">
    <template #button="{ currentValue }">
      <div class="slider-example__block">{{ currentValue }}</div>
    </template>
  </var-slider>

  <app-type>{{ pack.showLabel }}</app-type>
  <var-slider v-model="values.value5" label-visible="never" />
  <var-slider v-model="values.value6" />
  <var-slider v-model="values.value7" label-visible="always" />

  <app-type>{{ pack.validateValue }}</app-type>
  <var-slider v-model="values.value8" :rules="[(v) => v > 35 || 'error message']" />
</template>

<style>
.slider-example__block {
  width: 24px;
  border: 1px solid #52af77;
  color: #52af77;
  height: 24px;
  margin: 0 -12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 12px;
  background-color: #fff;
}
</style>
