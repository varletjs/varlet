<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { ref } from 'vue'
import { z } from 'zod'
import { t, use } from './locale'

const standardValue = ref('2021-04-08')
const standardValue2 = ref('2021-04')
const standardValue3 = ref('2021')
const standardValue4 = ref('2021-04-08')
const standardValue5 = ref('2021-04-08')
const standardValue6 = ref('2021-04-08')
const standardValue7 = ref('')
const standardValue8 = ref('')
const standardValue9 = ref('2021-04-08')
const standardValue10 = ref(['2021-04-08', '2021-04-12'])
const standardValue11 = ref(['2021-04-08', '2021-04-20'])
const standardValue12 = ref(1617811200000)
const standardValue13 = ref('2021/04/08')
const standardValue14 = ref('2021-04-08')

const outlinedValue = ref('2021-04-08')
const outlinedValue2 = ref('2021-04')
const outlinedValue3 = ref('2021')
const outlinedValue4 = ref('2021-04-08')
const outlinedValue5 = ref('2021-04-08')
const outlinedValue6 = ref('2021-04-08')
const outlinedValue7 = ref('')
const outlinedValue8 = ref('')
const outlinedValue9 = ref('2021-04-08')
const outlinedValue10 = ref(['2021-04-08', '2021-04-12'])
const outlinedValue11 = ref(['2021-04-08', '2021-04-20'])
const outlinedValue12 = ref(1617811200000)
const outlinedValue13 = ref('2021/04/08')
const outlinedValue14 = ref('2021-04-08')

const filledValue = ref('2021-04-08')
const filledValue2 = ref('2021-04')
const filledValue3 = ref('2021')
const filledValue4 = ref('2021-04-08')
const filledValue5 = ref('2021-04-08')
const filledValue6 = ref('2021-04-08')
const filledValue7 = ref('')
const filledValue8 = ref('')
const filledValue9 = ref('2021-04-08')
const filledValue10 = ref(['2021-04-08', '2021-04-12'])
const filledValue11 = ref(['2021-04-08', '2021-04-20'])
const filledValue12 = ref(1617811200000)
const filledValue13 = ref('2021/04/08')
const filledValue14 = ref('2021-04-08')

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('standard') }}</app-type>
  <var-space direction="column" :size="['3vmin', 0]">
    <var-date-input v-model="standardValue" :placeholder="t('placeholder')" />
    <var-date-input v-model="standardValue2" type="month" :placeholder="t('monthPlaceholder')" />
    <var-date-input v-model="standardValue3" type="year" :placeholder="t('yearPlaceholder')" />
    <var-date-input v-model="standardValue4" :placeholder="t('readonly')" readonly />
    <var-date-input v-model="standardValue5" :placeholder="t('disabled')" disabled />
    <var-date-input v-model="standardValue6" :placeholder="t('clearable')" clearable />
    <var-date-input
      v-model="standardValue7"
      :placeholder="t('validate')"
      :rules="[(v) => !!v || t('requiredMessage')]"
    />
    <var-date-input
      v-model="standardValue8"
      :placeholder="t('validateWithZod')"
      :rules="z.string().min(1, { message: t('requiredMessage') })"
    />
    <var-date-input v-model="standardValue9" :placeholder="t('displayIcon')">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="calendar-month" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="clock-outline" />
      </template>
    </var-date-input>
    <var-date-input v-model="standardValue10" multiple :placeholder="t('multiplePlaceholder')" />
    <var-date-input v-model="standardValue11" range :placeholder="t('rangePlaceholder')" />
    <var-date-input v-model="standardValue12" value-format="timestamp" :placeholder="t('valueFormat')" />
    <var-date-input v-model="standardValue13" value-format="YYYY/MM/DD" :placeholder="t('customValueFormat')" />
    <var-date-input v-model="standardValue14" size="small" :placeholder="t('smallSize')" />
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('outlined') }}</app-type>
  <var-space direction="column" :size="['6vmin', 0]">
    <var-date-input v-model="outlinedValue" variant="outlined" :placeholder="t('placeholder')" />
    <var-date-input v-model="outlinedValue2" variant="outlined" type="month" :placeholder="t('monthPlaceholder')" />
    <var-date-input v-model="outlinedValue3" variant="outlined" type="year" :placeholder="t('yearPlaceholder')" />
    <var-date-input v-model="outlinedValue4" variant="outlined" :placeholder="t('readonly')" readonly />
    <var-date-input v-model="outlinedValue5" variant="outlined" :placeholder="t('disabled')" disabled />
    <var-date-input v-model="outlinedValue6" variant="outlined" :placeholder="t('clearable')" clearable />
    <var-date-input
      v-model="outlinedValue7"
      variant="outlined"
      :placeholder="t('validate')"
      :rules="[(v) => !!v || t('requiredMessage')]"
    />
    <var-date-input
      v-model="outlinedValue8"
      variant="outlined"
      :placeholder="t('validateWithZod')"
      :rules="z.string().min(1, { message: t('requiredMessage') })"
    />
    <var-date-input v-model="outlinedValue9" variant="outlined" :placeholder="t('displayIcon')">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="calendar-month" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="clock-outline" />
      </template>
    </var-date-input>
    <var-date-input v-model="outlinedValue10" variant="outlined" multiple :placeholder="t('multiplePlaceholder')" />
    <var-date-input v-model="outlinedValue11" variant="outlined" range :placeholder="t('rangePlaceholder')" />
    <var-date-input
      v-model="outlinedValue12"
      variant="outlined"
      value-format="timestamp"
      :placeholder="t('valueFormat')"
    />
    <var-date-input
      v-model="outlinedValue13"
      variant="outlined"
      value-format="YYYY/MM/DD"
      :placeholder="t('customValueFormat')"
    />
    <var-date-input v-model="outlinedValue14" variant="outlined" size="small" :placeholder="t('smallSize')" />
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('filled') }}</app-type>
  <var-space direction="column" :size="['6vmin', 0]">
    <var-date-input v-model="filledValue" variant="filled" :placeholder="t('placeholder')" />
    <var-date-input v-model="filledValue2" variant="filled" type="month" :placeholder="t('monthPlaceholder')" />
    <var-date-input v-model="filledValue3" variant="filled" type="year" :placeholder="t('yearPlaceholder')" />
    <var-date-input v-model="filledValue4" variant="filled" :placeholder="t('readonly')" readonly />
    <var-date-input v-model="filledValue5" variant="filled" :placeholder="t('disabled')" disabled />
    <var-date-input v-model="filledValue6" variant="filled" :placeholder="t('clearable')" clearable />
    <var-date-input
      v-model="filledValue7"
      variant="filled"
      :placeholder="t('validate')"
      :rules="[(v) => !!v || t('requiredMessage')]"
    />
    <var-date-input
      v-model="filledValue8"
      variant="filled"
      :placeholder="t('validateWithZod')"
      :rules="z.string().min(1, { message: t('requiredMessage') })"
    />
    <var-date-input v-model="filledValue9" variant="filled" :placeholder="t('displayIcon')">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="calendar-month" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="clock-outline" />
      </template>
    </var-date-input>
    <var-date-input v-model="filledValue10" variant="filled" multiple :placeholder="t('multiplePlaceholder')" />
    <var-date-input v-model="filledValue11" variant="filled" range :placeholder="t('rangePlaceholder')" />
    <var-date-input v-model="filledValue12" variant="filled" value-format="timestamp" :placeholder="t('valueFormat')" />
    <var-date-input
      v-model="filledValue13"
      variant="filled"
      value-format="YYYY/MM/DD"
      :placeholder="t('customValueFormat')"
    />
    <var-date-input v-model="filledValue14" variant="filled" size="small" :placeholder="t('smallSize')" />
  </var-space>

  <div style="height: 20px"></div>
</template>

<style scoped lang="less">
.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}
</style>
