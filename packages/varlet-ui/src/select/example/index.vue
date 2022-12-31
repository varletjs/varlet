<script setup>
import VarSelect from '..'
import VarOption from '../../option'
import VarIcon from '../../icon'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import dark from '../../themes/dark'
import { reactive, toRefs } from 'vue'
import { use, pack } from './locale'

const values = reactive({
  value: undefined,
  value2: undefined,
  value3: undefined,
  value4: undefined,
  value5: [],
  value6: undefined,
  value7: [],
  value8: undefined,
  value9: undefined,
  value10: [],
  value11: undefined,
})
const { value, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11 } = toRefs(values)

watchLang((lang) => {
  use(lang)
  values.value = undefined
  values.value2 = undefined
  values.value3 = undefined
  values.value4 = undefined
  values.value6 = undefined
  values.value5 = []
  values.value7 = []
  values.value8 = undefined
  values.value9 = undefined
  values.value10 = []
  values.value11 = undefined
})

watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-select :placeholder="pack.placeholder" v-model="value">
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
  </var-select>

  <app-type>{{ pack.plainMode }}</app-type>
  <var-select :hint="false" :line="false" :placeholder="pack.placeholder" v-model="value2">
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
  </var-select>

  <app-type>{{ pack.relation }}</app-type>
  <var-select :placeholder="pack.placeholder" v-model="value6">
    <var-option :label="pack.eat" :value="1" />
    <var-option :label="pack.sleep" :value="2" />
  </var-select>
  <div class="relation">{{ pack.currentSelect }} {{ value6 }}</div>

  <app-type>{{ pack.disabled }}</app-type>
  <var-select :placeholder="pack.placeholder" disabled v-model="value4">
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
  </var-select>

  <app-type>{{ pack.readonly }}</app-type>
  <var-select :placeholder="pack.placeholder" readonly v-model="value3">
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
  </var-select>

  <app-type>{{ pack.clearable }}</app-type>
  <var-select :placeholder="pack.placeholder" clearable v-model="value8">
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
  </var-select>

  <app-type>{{ pack.customIcon }}</app-type>
  <var-select :placeholder="pack.placeholder" v-model="value11">
    <template #default>
      <var-option :label="pack.eat">
        <var-icon class="selected-icon" name="cake-variant" />
        <span>{{ pack.eat }}</span>
      </var-option>
      <var-option :label="pack.sleep">
        <var-icon class="selected-icon" name="weather-night" />
        <span>{{ pack.sleep }}</span>
      </var-option>
    </template>
    <template #selected>
      <var-icon class="selected-icon" :name="value11 === pack.eat ? 'cake-variant' : 'weather-night'" />
      <span>{{ value11 }}</span>
    </template>
    <template #prepend-icon>
      <var-icon class="prepend-icon" name="plus" />
    </template>
    <template #append-icon>
      <var-icon class="append-icon" name="minus" />
    </template>
    <template #arrow-icon="{ focus }">
      <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
    </template>
  </var-select>

  <app-type>{{ pack.multiple }}</app-type>
  <var-select :placeholder="pack.multiplePlaceholder" multiple v-model="value5">
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
    <var-option :label="pack.play" />
    <var-option :label="pack.coding" />
  </var-select>

  <app-type>{{ pack.chipMultiple }}</app-type>
  <var-select :placeholder="pack.multiplePlaceholder" chip multiple v-model="value7">
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
    <var-option :label="pack.play" />
    <var-option :label="pack.coding" />
  </var-select>

  <app-type>{{ pack.validate }}</app-type>
  <var-select :placeholder="pack.placeholder" :rules="[(v) => v === pack.rest || pack.mustSelectRest]" v-model="value9">
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
    <var-option :label="pack.rest" />
  </var-select>

  <app-type>{{ pack.multipleValidate }}</app-type>
  <var-select
    :placeholder="pack.multiplePlaceholder"
    multiple
    :rules="[(v) => v.length >= 2 || pack.mustSelectMoreThan]"
    v-model="value10"
  >
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
    <var-option :label="pack.play" />
    <var-option :label="pack.coding" />
  </var-select>

  <div class="space"></div>
</template>

<style scoped lang="less">
.relation {
  margin: 10px 0;
}

.space {
  height: 160px;
}

.selected-icon {
  margin-right: 6px;
}

.prepend-icon {
  margin-right: 2px;
}

.append-icon {
  margin-left: 2px;
}

.arrow-icon-rotate {
  transform: rotate(180deg);
}
</style>
