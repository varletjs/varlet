<script setup lang="ts">
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { computed, reactive, ref, toRefs } from 'vue'
import { t, use } from './locale'

watchLang(use)
onThemeChange()

const values = reactive({
  view: 'day',
  styles: ['day'],
  disabledValue: 'day',
  readonlyValue: 'day',
  noCheckmarkValue: 'day',
  largeSizeValue: 'day',
  normalSizeValue: 'day',
  smallSizeValue: 'day',
  miniSizeValue: 'day',
  period: 'day',
  fieldValue: 'day',
  validationValue: undefined,
})

const {
  view,
  styles,
  disabledValue,
  readonlyValue,
  noCheckmarkValue,
  largeSizeValue,
  normalSizeValue,
  smallSizeValue,
  miniSizeValue,
  period,
  fieldValue,
  validationValue,
} = toRefs(values)

const form = ref()

const periodOptions = computed(() => [
  { label: t('day'), value: 'day' },
  { label: t('week'), value: 'week' },
  { label: t('month'), value: 'month' },
])

const fieldOptions = computed(() => [
  { name: t('day'), id: 'day' },
  { name: t('week'), id: 'week' },
  { name: t('month'), id: 'month' },
])

function validate() {
  form.value.validate()
}
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-segmented-buttons v-model="view">
    <var-segmented-button checked-value="day">{{ t('day') }}</var-segmented-button>
    <var-segmented-button checked-value="week">{{ t('week') }}</var-segmented-button>
    <var-segmented-button checked-value="month">{{ t('month') }}</var-segmented-button>
  </var-segmented-buttons>

  <app-type>{{ t('multipleSelection') }}</app-type>
  <var-segmented-buttons v-model="styles" multiple>
    <var-segmented-button checked-value="day">{{ t('day') }}</var-segmented-button>
    <var-segmented-button checked-value="week">{{ t('week') }}</var-segmented-button>
    <var-segmented-button checked-value="month">{{ t('month') }}</var-segmented-button>
  </var-segmented-buttons>

  <app-type>{{ t('disableCheckmark') }}</app-type>
  <var-segmented-buttons v-model="noCheckmarkValue" :checkmark="false">
    <var-segmented-button checked-value="day">{{ t('day') }}</var-segmented-button>
    <var-segmented-button checked-value="week">{{ t('week') }}</var-segmented-button>
    <var-segmented-button checked-value="month">{{ t('month') }}</var-segmented-button>
  </var-segmented-buttons>

  <app-type>{{ t('disabled') }}</app-type>
  <var-segmented-buttons v-model="disabledValue">
    <var-segmented-button checked-value="day" disabled>{{ t('day') }}</var-segmented-button>
    <var-segmented-button checked-value="week" disabled>{{ t('week') }}</var-segmented-button>
    <var-segmented-button checked-value="month" disabled>{{ t('month') }}</var-segmented-button>
  </var-segmented-buttons>

  <app-type>{{ t('readonly') }}</app-type>
  <var-segmented-buttons v-model="readonlyValue">
    <var-segmented-button checked-value="day" readonly>{{ t('day') }}</var-segmented-button>
    <var-segmented-button checked-value="week" readonly>{{ t('week') }}</var-segmented-button>
    <var-segmented-button checked-value="month" readonly>{{ t('month') }}</var-segmented-button>
  </var-segmented-buttons>

  <app-type>{{ t('size') }}</app-type>
  <div class="size-blocks">
    <var-segmented-buttons v-model="largeSizeValue" size="large">
      <var-segmented-button checked-value="day">{{ t('day') }}</var-segmented-button>
      <var-segmented-button checked-value="week">{{ t('week') }}</var-segmented-button>
      <var-segmented-button checked-value="month">{{ t('month') }}</var-segmented-button>
    </var-segmented-buttons>

    <var-segmented-buttons v-model="normalSizeValue">
      <var-segmented-button checked-value="day">{{ t('day') }}</var-segmented-button>
      <var-segmented-button checked-value="week">{{ t('week') }}</var-segmented-button>
      <var-segmented-button checked-value="month">{{ t('month') }}</var-segmented-button>
    </var-segmented-buttons>

    <var-segmented-buttons v-model="smallSizeValue" size="small">
      <var-segmented-button checked-value="day">{{ t('day') }}</var-segmented-button>
      <var-segmented-button checked-value="week">{{ t('week') }}</var-segmented-button>
      <var-segmented-button checked-value="month">{{ t('month') }}</var-segmented-button>
    </var-segmented-buttons>

    <var-segmented-buttons v-model="miniSizeValue" size="mini">
      <var-segmented-button checked-value="day">{{ t('day') }}</var-segmented-button>
      <var-segmented-button checked-value="week">{{ t('week') }}</var-segmented-button>
      <var-segmented-button checked-value="month">{{ t('month') }}</var-segmented-button>
    </var-segmented-buttons>
  </div>

  <app-type>{{ t('options') }}</app-type>
  <var-segmented-buttons v-model="period" :options="periodOptions" />

  <app-type>{{ t('customFields') }}</app-type>
  <var-segmented-buttons v-model="fieldValue" :options="fieldOptions" label-key="name" value-key="id" />

  <app-type>{{ t('formValidation') }}</app-type>
  <var-form ref="form">
    <var-segmented-buttons v-model="validationValue" :rules="[(v) => v === 'day' || t('chooseDay')]">
      <var-segmented-button checked-value="day">{{ t('day') }}</var-segmented-button>
      <var-segmented-button checked-value="week">{{ t('week') }}</var-segmented-button>
      <var-segmented-button checked-value="month">{{ t('month') }}</var-segmented-button>
    </var-segmented-buttons>
  </var-form>
  <var-button class="validate-button" type="primary" block @click="validate">{{ t('validate') }}</var-button>

  <div class="space" />
</template>

<style scoped lang="less">
.size-blocks {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.validate-button {
  margin-top: 12px;
}

.space {
  height: 24px;
}
</style>
