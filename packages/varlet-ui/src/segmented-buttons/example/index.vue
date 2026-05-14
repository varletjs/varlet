<script setup lang="ts">
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { computed, h, reactive, toRefs } from 'vue'
import { t, use } from './locale'

watchLang(use)
onThemeChange()

const values = reactive({
  view: 'day',
  styles: ['day'],
  disabledValue: 'day',
  readonlyValue: 'week',
  noCheckmarkValue: 'day',
  customCheckmarkValue: 'day',
  largeSizeValue: 'day',
  normalSizeValue: 'day',
  smallSizeValue: 'day',
  miniSizeValue: 'day',
  period: 'week',
  status: 'day',
})

const {
  view,
  styles,
  disabledValue,
  readonlyValue,
  noCheckmarkValue,
  customCheckmarkValue,
  largeSizeValue,
  normalSizeValue,
  smallSizeValue,
  miniSizeValue,
  period,
  status,
} = toRefs(values)

const periodOptions = computed(() => [
  { label: t('day'), value: 'day' },
  { label: t('week'), value: 'week' },
  { label: t('month'), value: 'month' },
])

function renderStatusLabel(option: { value: string }, checked: boolean) {
  const text = option.value === 'day' ? t('day') : option.value === 'week' ? t('week') : t('month')

  return h(
    'span',
    {
      style: {
        color: checked ? 'var(--color-primary)' : 'inherit',
        fontWeight: checked ? '600' : '500',
      },
    },
    text,
  )
}

const statusOptions = computed(() => [
  { label: renderStatusLabel, value: 'day' },
  { label: renderStatusLabel, value: 'week' },
  { label: renderStatusLabel, value: 'month' },
])

function renderOptionCheckmark() {
  return h(
    'span',
    {
      class: 'custom-checkmark',
    },
    '✓',
  )
}

const checkmarkOptions = computed(() => [
  { label: t('day'), value: 'day', checkmark: renderOptionCheckmark },
  { label: t('week'), value: 'week', checkmark: renderOptionCheckmark },
  { label: t('month'), value: 'month', checkmark: renderOptionCheckmark },
])
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

  <app-type>{{ t('customCheckmark') }}</app-type>
  <var-segmented-buttons v-model="customCheckmarkValue" :options="checkmarkOptions" />

  <app-type>{{ t('disabled') }}</app-type>
  <var-segmented-buttons v-model="disabledValue">
    <var-segmented-button checked-value="day">{{ t('day') }}</var-segmented-button>
    <var-segmented-button checked-value="week" disabled>{{ t('week') }}</var-segmented-button>
    <var-segmented-button checked-value="month">{{ t('month') }}</var-segmented-button>
  </var-segmented-buttons>

  <app-type>{{ t('readonly') }}</app-type>
  <var-segmented-buttons v-model="readonlyValue" readonly>
    <var-segmented-button checked-value="day">{{ t('day') }}</var-segmented-button>
    <var-segmented-button checked-value="week">{{ t('week') }}</var-segmented-button>
    <var-segmented-button checked-value="month">{{ t('month') }}</var-segmented-button>
  </var-segmented-buttons>

  <app-type>{{ t('size') }}</app-type>
  <div class="size-block">
    <var-segmented-buttons v-model="largeSizeValue" size="large">
      <var-segmented-button checked-value="day">{{ t('day') }}</var-segmented-button>
      <var-segmented-button checked-value="week">{{ t('week') }}</var-segmented-button>
      <var-segmented-button checked-value="month">{{ t('month') }}</var-segmented-button>
    </var-segmented-buttons>
  </div>

  <div class="size-block">
    <var-segmented-buttons v-model="normalSizeValue">
      <var-segmented-button checked-value="day">{{ t('day') }}</var-segmented-button>
      <var-segmented-button checked-value="week">{{ t('week') }}</var-segmented-button>
      <var-segmented-button checked-value="month">{{ t('month') }}</var-segmented-button>
    </var-segmented-buttons>
  </div>

  <div class="size-block">
    <var-segmented-buttons v-model="smallSizeValue" size="small">
      <var-segmented-button checked-value="day">{{ t('day') }}</var-segmented-button>
      <var-segmented-button checked-value="week">{{ t('week') }}</var-segmented-button>
      <var-segmented-button checked-value="month">{{ t('month') }}</var-segmented-button>
    </var-segmented-buttons>
  </div>

  <div class="size-block">
    <var-segmented-buttons v-model="miniSizeValue" size="mini">
      <var-segmented-button checked-value="day">{{ t('day') }}</var-segmented-button>
      <var-segmented-button checked-value="week">{{ t('week') }}</var-segmented-button>
      <var-segmented-button checked-value="month">{{ t('month') }}</var-segmented-button>
    </var-segmented-buttons>
  </div>

  <app-type>{{ t('options') }}</app-type>
  <var-segmented-buttons v-model="period" :options="periodOptions" />

  <app-type>{{ t('renderLabel') }}</app-type>
  <var-segmented-buttons v-model="status" :options="statusOptions" />

  <div class="space" />
</template>

<style scoped lang="less">
.custom-checkmark {
  display: inline-flex;
  align-items: center;
  margin-right: 6px;
  font-weight: 700;
}

.size-block {
  margin-bottom: 24px;
}

.space {
  height: 24px;
}
</style>
