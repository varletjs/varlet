<script setup>
import VarMenuSelect from '..'
import VarMenuOption from '../../menu-option'
import VarButton from '../../button'
import VarSpace from '../../space'
import dark from '../../themes/dark'
import { ref } from 'vue'
import { watchLang, watchDarkMode, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'

const value = ref()
const valueNormal = ref()
const valueSmall = ref()
const valueMini = ref()
const valueLarge = ref()
const valueOptionDisabled = ref()
const valueMapping = ref()
const valueScrollable = ref()
const valueCloseOnSelect = ref()
const valueMultiple = ref([])
const options = ref(Array.from({ length: 30 }, (_, index) => ({ label: `Option ${index + 1}`, value: index })))

watchLang((lang) => {
  use(lang)
  value.value = undefined
  valueNormal.value = undefined
  valueSmall.value = undefined
  valueLarge.value = undefined
  valueMini.value = undefined
  valueOptionDisabled.value = undefined
  valueMapping.value = undefined
  valueScrollable.value = undefined
  valueCloseOnSelect.value = undefined
  valueMultiple.value = []
})
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-menu-select v-model="value">
    <var-button type="primary">{{ value ? value : pack.please }}</var-button>

    <template #options>
      <var-menu-option :label="pack.eat" />
      <var-menu-option :label="pack.sleep" />
      <var-menu-option :label="pack.play" />
    </template>
  </var-menu-select>

  <app-type>{{ pack.size }}</app-type>
  <var-space align="center" :size="[20, 60]">
    <var-menu-select v-model="valueNormal">
      <var-button type="primary">{{ valueNormal ? valueNormal : pack.normal }}</var-button>

      <template #options>
        <var-menu-option :label="pack.eat" />
        <var-menu-option :label="pack.sleep" />
        <var-menu-option :label="pack.play" />
      </template>
    </var-menu-select>

    <var-menu-select size="small" v-model="valueSmall">
      <var-button type="primary">{{ valueSmall ? valueSmall : pack.small }}</var-button>

      <template #options>
        <var-menu-option :label="pack.eat" />
        <var-menu-option :label="pack.sleep" />
        <var-menu-option :label="pack.play" />
      </template>
    </var-menu-select>

    <var-menu-select size="mini" v-model="valueMini">
      <var-button type="primary">{{ valueMini ? valueMini : pack.mini }}</var-button>

      <template #options>
        <var-menu-option :label="pack.eat" />
        <var-menu-option :label="pack.sleep" />
        <var-menu-option :label="pack.play" />
      </template>
    </var-menu-select>

    <var-menu-select size="large" v-model="valueLarge">
      <var-button type="primary">{{ valueLarge ? valueLarge : pack.large }}</var-button>

      <template #options>
        <var-menu-option :label="pack.eat" />
        <var-menu-option :label="pack.sleep" />
        <var-menu-option :label="pack.play" />
      </template>
    </var-menu-select>
  </var-space>

  <app-type>{{ pack.valueMapping }}</app-type>
  <var-menu-select v-model="valueMapping">
    <var-button type="primary">{{ valueMapping ? `value: ${valueMapping}` : pack.please }}</var-button>

    <template #options>
      <var-menu-option :label="pack.eat" :value="1" />
      <var-menu-option :label="pack.sleep" :value="2" />
      <var-menu-option :label="pack.play" :value="3" />
    </template>
  </var-menu-select>

  <app-type>{{ pack.scrollable }}</app-type>
  <var-menu-select scrollable v-model="valueScrollable">
    <var-button type="primary">{{ valueScrollable ? valueScrollable : pack.please }}</var-button>

    <template #options>
      <var-menu-option v-for="option in options" :key="option.value" :label="option.label" />
    </template>
  </var-menu-select>

  <app-type>{{ pack.optionDisabled }}</app-type>
  <var-menu-select v-model="valueOptionDisabled">
    <var-button type="primary">{{ valueOptionDisabled ? valueOptionDisabled : pack.please }}</var-button>

    <template #options>
      <var-menu-option :label="pack.eat" />
      <var-menu-option :label="pack.sleep" />
      <var-menu-option :label="pack.play" disabled />
    </template>
  </var-menu-select>

  <app-type>{{ pack.multiple }}</app-type>
  <var-menu-select multiple v-model="valueMultiple">
    <var-button type="primary">{{ valueMultiple.length ? valueMultiple : pack.please }}</var-button>

    <template #options>
      <var-menu-option :label="pack.eat" />
      <var-menu-option :label="pack.sleep" />
      <var-menu-option :label="pack.play" />
      <var-menu-option :label="pack.coding" />
      <var-menu-option :label="pack.rest" />
    </template>
  </var-menu-select>

  <app-type>{{ pack.closeOnSelect }}</app-type>
  <var-menu-select :close-on-select="false" v-model="valueCloseOnSelect">
    <var-button type="primary">{{ valueCloseOnSelect ? valueCloseOnSelect : pack.please }}</var-button>

    <template #options>
      <var-menu-option :label="pack.eat" />
      <var-menu-option :label="pack.sleep" />
      <var-menu-option :label="pack.play" />
    </template>
  </var-menu-select>
</template>
