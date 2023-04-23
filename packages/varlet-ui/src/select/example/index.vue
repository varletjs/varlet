<script setup>
import VarSelect from '..'
import VarOption from '../../option'
import VarSpace from '../../space'
import VarIcon from '../../icon'
import dark from '../../themes/dark'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { ref } from 'vue'
import { use, pack } from './locale'

const standardValue = ref(undefined)
const standardValue2 = ref(undefined)
const standardValue3 = ref(undefined)
const standardValue4 = ref(undefined)
const standardValue5 = ref(undefined)
const standardValue6 = ref(undefined)
const standardValue7 = ref([])
const standardValue8 = ref([])
const standardValue9 = ref([])
const standardValue10 = ref(undefined)
const standardValue11 = ref(undefined)

const outlinedValue = ref(undefined)
const outlinedValue2 = ref(undefined)
const outlinedValue3 = ref(undefined)
const outlinedValue4 = ref(undefined)
const outlinedValue5 = ref(undefined)
const outlinedValue6 = ref(undefined)
const outlinedValue7 = ref([])
const outlinedValue8 = ref([])
const outlinedValue9 = ref([])
const outlinedValue10 = ref(undefined)
const outlinedValue11 = ref(undefined)

watchDarkMode(dark)
watchLang((lang) => {
  standardValue.value = undefined
  standardValue2.value = undefined
  standardValue3.value = undefined
  standardValue4.value = undefined
  standardValue5.value = undefined
  standardValue6.value = undefined
  standardValue7.value = []
  standardValue8.value = []
  standardValue9.value = []
  standardValue10.value = undefined
  standardValue11.value = undefined

  outlinedValue.value = undefined
  outlinedValue2.value = undefined
  outlinedValue3.value = undefined
  outlinedValue4.value = undefined
  outlinedValue5.value = undefined
  outlinedValue6.value = undefined
  outlinedValue7.value = []
  outlinedValue8.value = []
  outlinedValue9.value = []
  outlinedValue10.value = undefined
  outlinedValue11.value = undefined

  use(lang)
})
</script>

<template>
  <app-type>{{ pack.standard }}</app-type>
  <var-space direction="column" :size="['3vw', 0]">
    <var-select :placeholder="pack.placeholder" v-model="standardValue">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
    </var-select>
    <var-select :placeholder="pack.relation" v-model="standardValue10">
      <var-option :label="pack.eat" :value="1" />
      <var-option :label="pack.sleep" :value="2" />
    </var-select>
    <div class="relation">{{ pack.currentSelect }} {{ standardValue10 }}</div>
    <var-select :placeholder="pack.readonly" readonly v-model="standardValue2">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
    </var-select>
    <var-select :placeholder="pack.disabled" disabled v-model="standardValue3">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
    </var-select>
    <var-select :placeholder="pack.clearable" clearable v-model="standardValue4">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
    </var-select>
    <var-select :placeholder="pack.customIcon" v-model="standardValue6">
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
        <var-icon class="selected-icon" :name="standardValue6 === pack.eat ? 'cake-variant' : 'weather-night'" />
        <span>{{ standardValue6 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>
    <var-select :placeholder="pack.multiple" multiple v-model="standardValue7">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
      <var-option :label="pack.play" />
      <var-option :label="pack.coding" />
    </var-select>
    <var-select :placeholder="pack.chipMultiple" chip multiple v-model="standardValue8">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
      <var-option :label="pack.play" />
      <var-option :label="pack.coding" />
    </var-select>
    <var-select
      :placeholder="pack.validate"
      :rules="[(v) => v === pack.rest || pack.mustSelectRest]"
      v-model="standardValue5"
    >
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
      <var-option :label="pack.rest" />
    </var-select>
    <var-select
      multiple
      :placeholder="pack.multipleValidate"
      :rules="[(v) => v.length >= 2 || pack.mustSelectMoreThan]"
      v-model="standardValue9"
    >
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
      <var-option :label="pack.play" />
      <var-option :label="pack.coding" />
    </var-select>
    <var-select :placeholder="pack.smallSize" v-model="standardValue11">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
    </var-select>
  </var-space>

  <app-type style="margin-top: 10vw">{{ pack.outlined }}</app-type>
  <var-space direction="column" :size="['6vw', 0]">
    <var-select variant="outlined" :placeholder="pack.placeholder" v-model="outlinedValue">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
    </var-select>
    <var-select variant="outlined" :placeholder="pack.relation" v-model="outlinedValue10">
      <var-option :label="pack.eat" :value="1" />
      <var-option :label="pack.sleep" :value="2" />
    </var-select>
    <div class="relation">{{ pack.currentSelect }} {{ outlinedValue10 }}</div>
    <var-select variant="outlined" :placeholder="pack.readonly" readonly v-model="outlinedValue2">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
    </var-select>
    <var-select variant="outlined" :placeholder="pack.disabled" disabled v-model="outlinedValue3">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
    </var-select>
    <var-select variant="outlined" :placeholder="pack.clearable" clearable v-model="outlinedValue4">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
    </var-select>
    <var-select variant="outlined" :placeholder="pack.customIcon" v-model="outlinedValue6">
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
        <var-icon class="selected-icon" :name="outlinedValue6 === pack.eat ? 'cake-variant' : 'weather-night'" />
        <span>{{ outlinedValue6 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>
    <var-select variant="outlined" :placeholder="pack.multiple" multiple v-model="outlinedValue7">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
      <var-option :label="pack.play" />
      <var-option :label="pack.coding" />
    </var-select>
    <var-select variant="outlined" :placeholder="pack.chipMultiple" chip multiple v-model="outlinedValue8">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
      <var-option :label="pack.play" />
      <var-option :label="pack.coding" />
    </var-select>
    <var-select
      variant="outlined"
      :placeholder="pack.validate"
      :rules="[(v) => v === pack.rest || pack.mustSelectRest]"
      v-model="outlinedValue5"
    >
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
      <var-option :label="pack.rest" />
    </var-select>
    <var-select
      multiple
      variant="outlined"
      :placeholder="pack.multipleValidate"
      :rules="[(v) => v.length >= 2 || pack.mustSelectMoreThan]"
      v-model="outlinedValue9"
    >
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
      <var-option :label="pack.play" />
      <var-option :label="pack.coding" />
    </var-select>
    <var-select variant="outlined" size="small" :placeholder="pack.smallSize" v-model="outlinedValue11">
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
    </var-select>
  </var-space>

  <div class="space"></div>
</template>

<style scoped lang="less">
.space {
  height: 200px;
}

.selected-icon {
  margin-right: 6px;
}

.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}

.arrow-icon-rotate {
  transform: rotate(180deg);
}
</style>
