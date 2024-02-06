<script setup>
import { ref } from 'vue'
import { watchLang, onThemeChange, AppType } from '@varlet/cli/client'
import { use, t } from './locale'

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
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-menu-select v-model="value">
    <var-button type="primary">{{ value ? value : t('please') }}</var-button>

    <template #options>
      <var-menu-option :label="t('eat')" />
      <var-menu-option :label="t('sleep')" />
      <var-menu-option :label="t('play')" />
    </template>
  </var-menu-select>

  <app-type>{{ t('size') }}</app-type>
  <var-space align="center" :size="[20, 60]">
    <var-menu-select v-model="valueNormal">
      <var-button type="primary">{{ valueNormal ? valueNormal : t('normal') }}</var-button>

      <template #options>
        <var-menu-option :label="t('eat')" />
        <var-menu-option :label="t('sleep')" />
        <var-menu-option :label="t('play')" />
      </template>
    </var-menu-select>

    <var-menu-select size="small" v-model="valueSmall">
      <var-button type="primary">{{ valueSmall ? valueSmall : t('small') }}</var-button>

      <template #options>
        <var-menu-option :label="t('eat')" />
        <var-menu-option :label="t('sleep')" />
        <var-menu-option :label="t('play')" />
      </template>
    </var-menu-select>

    <var-menu-select size="mini" v-model="valueMini">
      <var-button type="primary">{{ valueMini ? valueMini : t('mini') }}</var-button>

      <template #options>
        <var-menu-option :label="t('eat')" />
        <var-menu-option :label="t('sleep')" />
        <var-menu-option :label="t('play')" />
      </template>
    </var-menu-select>

    <var-menu-select size="large" v-model="valueLarge">
      <var-button type="primary">{{ valueLarge ? valueLarge : t('large') }}</var-button>

      <template #options>
        <var-menu-option :label="t('eat')" />
        <var-menu-option :label="t('sleep')" />
        <var-menu-option :label="t('play')" />
      </template>
    </var-menu-select>
  </var-space>

  <app-type>{{ t('valueMapping') }}</app-type>
  <var-menu-select v-model="valueMapping">
    <var-button type="primary">{{ valueMapping ? `value: ${valueMapping}` : t('please') }}</var-button>

    <template #options>
      <var-menu-option :label="t('eat')" :value="1" />
      <var-menu-option :label="t('sleep')" :value="2" />
      <var-menu-option :label="t('play')" :value="3" />
    </template>
  </var-menu-select>

  <app-type>{{ t('scrollable') }}</app-type>
  <var-menu-select scrollable v-model="valueScrollable">
    <var-button type="primary">{{ valueScrollable ? valueScrollable : t('please') }}</var-button>

    <template #options>
      <var-menu-option v-for="option in options" :key="option.value" :label="option.label" />
    </template>
  </var-menu-select>

  <app-type>{{ t('optionDisabled') }}</app-type>
  <var-menu-select v-model="valueOptionDisabled">
    <var-button type="primary">{{ valueOptionDisabled ? valueOptionDisabled : t('please') }}</var-button>

    <template #options>
      <var-menu-option :label="t('eat')" />
      <var-menu-option :label="t('sleep')" />
      <var-menu-option :label="t('play')" disabled />
    </template>
  </var-menu-select>

  <app-type>{{ t('multiple') }}</app-type>
  <var-menu-select multiple v-model="valueMultiple">
    <var-button type="primary">{{ valueMultiple.length ? valueMultiple : t('please') }}</var-button>

    <template #options>
      <var-menu-option :label="t('eat')" />
      <var-menu-option :label="t('sleep')" />
      <var-menu-option :label="t('play')" />
      <var-menu-option :label="t('coding')" />
      <var-menu-option :label="t('rest')" />
    </template>
  </var-menu-select>

  <app-type>{{ t('closeOnSelect') }}</app-type>
  <var-menu-select :close-on-select="false" v-model="valueCloseOnSelect">
    <var-button type="primary">{{ valueCloseOnSelect ? valueCloseOnSelect : t('please') }}</var-button>

    <template #options>
      <var-menu-option :label="t('eat')" />
      <var-menu-option :label="t('sleep')" />
      <var-menu-option :label="t('play')" />
    </template>
  </var-menu-select>
</template>
