<template>
  <div>
    <app-type>{{ pack.basicUsage }}</app-type>
    <div class="var-switch__example-block">
      <var-switch v-model="value" />
    </div>
  </div>
  <div>
    <app-type>{{ pack.notAvailable }}</app-type>
    <div class="var-switch__example-block">
      <var-switch v-model="value1" disabled />
      <var-switch v-model="value1" readonly />
    </div>
  </div>
  <div>
    <app-type>{{ pack.customColor }}</app-type>
    <div class="var-switch__example-block">
      <var-switch v-model="value2" :ripple="false" />
      <var-switch v-model="value2" color="indigo" close-color="#89ddff" />
      <var-switch v-model="value2" color="orange" close-color="#2772f5" />
    </div>
  </div>
  <div>
    <app-type>{{ pack.size }}</app-type>
    <div class="var-switch__example-block">
      <var-switch v-model="value3" size="15" />
      <var-switch v-model="value3" />
      <var-switch v-model="value3" size="25" />
    </div>
  </div>
  <div>
    <app-type>{{ pack.loading }}</app-type>
    <div class="var-switch__example-block">
      <var-switch :model-value="true" loading />
      <var-switch :model-value="true" size="25" loading />
      <var-switch :model-value="true" size="25" loading loading-color="#ff9800" />
    </div>
  </div>
  <div>
    <app-type>{{ pack.validateValue }}</app-type>
    <var-cell style="padding: 0; align-items: flex-start">
      <div>{{ pack.text }}</div>
      <template #extra>
        <var-switch v-model="value4" :rules="[(v) => v === true || pack.state]" />
      </template>
    </var-cell>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Switch from '..'
import Cell from '../../cell'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'

export default defineComponent({
  name: 'SwitchExample',
  components: {
    [Switch.name]: Switch,
    [Cell.name]: Cell,
    AppType,
  },
  setup() {
    const values = reactive({
      value: true,
      value1: true,
      value2: false,
      value3: true,
      value4: true,
    })

    watchLang(use)

    return {
      ...toRefs(values),
      pack,
    }
  },
})
</script>

<style scoped>
.var-switch__example-block {
  display: flex;
  justify-content: space-between;
}
</style>
