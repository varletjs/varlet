<script setup>
import { computed, ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { Snackbar } from '@varlet/ui'
import { t, use } from './locale'

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
const valueSelectOptions = ref()
const valueKeyedSelectOptions = ref()
const options = ref(Array.from({ length: 30 }, (_, index) => ({ label: `Option ${index + 1}`, value: index })))
const selectOptions = computed(() => [
  {
    label: t('eat'),
    value: 1,
  },
  {
    label: t('sleep'),
    value: 2,
  },
  {
    label: t('play'),
    value: 3,
    disabled: true,
  },
])
const keyedSelectOptions = computed(() => [
  {
    name: t('eat'),
    id: 1,
  },
  {
    name: t('sleep'),
    id: 2,
  },
  {
    name: t('play'),
    id: 3,
    disabled: true,
  },
])

const cascadeValue = ref()
const cascadeMultipleValue = ref([])
const cascadeOptions = ref([
  {
    label: '1',
    value: 1,
  },
  {
    label: '2',
    value: 2,
    children: [
      {
        label: '2-1',
        value: 21,
        children: [
          {
            label: '2-1-1',
            value: 211,
          },
          {
            label: '2-1-2',
            value: 212,
          },
        ],
      },
      {
        label: '2-2',
        value: 22,
      },
    ],
  },
  {
    label: '3',
    value: 3,
  },
])

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
  cascadeValue.value = undefined
  cascadeMultipleValue.value = []
})

onThemeChange()

function handleSelect(value) {
  Snackbar(`Select: ${value}`)
}
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

  <app-type>{{ t('onSelect') }}</app-type>
  <var-menu-select @select="handleSelect">
    <var-button type="primary">{{ t('please') }}</var-button>

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

    <var-menu-select v-model="valueSmall" size="small">
      <var-button type="primary">{{ valueSmall ? valueSmall : t('small') }}</var-button>

      <template #options>
        <var-menu-option :label="t('eat')" />
        <var-menu-option :label="t('sleep')" />
        <var-menu-option :label="t('play')" />
      </template>
    </var-menu-select>

    <var-menu-select v-model="valueMini" size="mini">
      <var-button type="primary">{{ valueMini ? valueMini : t('mini') }}</var-button>

      <template #options>
        <var-menu-option :label="t('eat')" />
        <var-menu-option :label="t('sleep')" />
        <var-menu-option :label="t('play')" />
      </template>
    </var-menu-select>

    <var-menu-select v-model="valueLarge" size="large">
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
  <var-menu-select v-model="valueScrollable" scrollable>
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
  <var-menu-select v-model="valueMultiple" multiple>
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
  <var-menu-select v-model="valueCloseOnSelect" :close-on-select="false">
    <var-button type="primary">{{ valueCloseOnSelect ? valueCloseOnSelect : t('please') }}</var-button>

    <template #options>
      <var-menu-option :label="t('eat')" />
      <var-menu-option :label="t('sleep')" />
      <var-menu-option :label="t('play')" />
    </template>
  </var-menu-select>

  <app-type>{{ t('selectOptions') }}</app-type>
  <var-menu-select v-model="valueSelectOptions" :options="selectOptions">
    <var-button type="primary">{{ valueSelectOptions ? valueSelectOptions : t('please') }}</var-button>
  </var-menu-select>

  <app-type>{{ t('cascade') }}</app-type>
  <var-menu-select v-model="cascadeValue" :options="cascadeOptions">
    <var-button type="primary">{{ cascadeValue ? cascadeValue : t('please') }}</var-button>
  </var-menu-select>

  <app-type>{{ t('multipleCascade') }}</app-type>
  <var-menu-select v-model="cascadeMultipleValue" multiple :options="cascadeOptions">
    <var-button type="primary">{{ cascadeMultipleValue.length ? cascadeMultipleValue : t('please') }}</var-button>
  </var-menu-select>

  <app-type>{{ t('selectOptionsWithCustomizedKey') }}</app-type>
  <var-menu-select v-model="valueKeyedSelectOptions" :options="keyedSelectOptions" label-key="name" value-key="id">
    <var-button type="primary">{{ valueKeyedSelectOptions ? valueKeyedSelectOptions : t('please') }}</var-button>
  </var-menu-select>
</template>
