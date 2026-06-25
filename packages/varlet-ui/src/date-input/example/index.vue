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
const standardValue15 = ref(['2021-04', '2021-09'])
const standardValue16 = ref(['2021', '2025'])
const standardValue17 = ref('2021-04-08')
const standardValue18 = ref(['2021-04-08', '2021-04-12'])
const standardValue19 = ref('2021-04-09')

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
const outlinedValue15 = ref(['2021-04', '2021-09'])
const outlinedValue16 = ref(['2021', '2025'])
const outlinedValue17 = ref('2021-04-08')
const outlinedValue18 = ref(['2021-04-08', '2021-04-12'])
const outlinedValue19 = ref('2021-04-09')

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
const filledValue15 = ref(['2021-04', '2021-09'])
const filledValue16 = ref(['2021', '2025'])
const filledValue17 = ref('2021-04-08')
const filledValue18 = ref(['2021-04-08', '2021-04-12'])
const filledValue19 = ref('2021-04-09')

const datetimeValue = ref('2021-04-08 12:30:45')
const datetimeNoSecondsValue = ref('2021-04-08 12:30')
const datetimeMinMaxValue = ref('2021-04-08 12:00:00')
const datetimeAllowedTimesValue = ref('2021-04-08 10:00:00')
const datetimeRangeValue = ref(['2021-04-08 09:00:00', '2021-04-12 18:30:00'])

const allowedDates = (date) => Number(date.split('-')[2]) % 2 === 1

const allowedTimes = () => ({
  hours: (hour) => hour >= 9 && hour < 18,
  minutes: (minute) => minute % 15 === 0,
  seconds: (second) => second === 0,
})

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
        <var-icon class="prepend-icon" name="calendar" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="heart-outline" />
      </template>
    </var-date-input>
    <var-date-input v-model="standardValue10" multiple :placeholder="t('multiplePlaceholder')" />
    <var-date-input v-model="standardValue11" range :placeholder="t('rangePlaceholder')" />
    <var-date-input v-model="standardValue15" type="month" range :placeholder="t('monthRangePlaceholder')" />
    <var-date-input v-model="standardValue16" type="year" range :placeholder="t('yearRangePlaceholder')" />
    <var-date-input v-model="standardValue17" min="2021-04-05" max="2021-04-20" :placeholder="t('minMax')" />
    <var-date-input v-model="standardValue18" range range-separator=" 至 " :placeholder="t('customSeparator')" />
    <var-date-input v-model="standardValue19" :allowed-dates="allowedDates" :placeholder="t('allowedDates')" />
    <var-date-input v-model="standardValue12" value-format="timestamp" :placeholder="t('valueFormat')">
      <template #extra-message>{{ t('currentValue') }}{{ standardValue12 }}</template>
    </var-date-input>
    <var-date-input v-model="standardValue13" value-format="YYYY/MM/DD" :placeholder="t('customValueFormat')">
      <template #extra-message>{{ t('currentValue') }}{{ standardValue13 }}</template>
    </var-date-input>
    <var-date-input v-model="standardValue14" size="small" :placeholder="t('smallSize')" />
    <var-date-input v-model="datetimeValue" type="datetime" :placeholder="t('datetimePlaceholder')">
      <template #extra-message>{{ t('currentValue') }}{{ datetimeValue }}</template>
    </var-date-input>
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
        <var-icon class="prepend-icon" name="calendar" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="heart-outline" />
      </template>
    </var-date-input>
    <var-date-input v-model="outlinedValue10" variant="outlined" multiple :placeholder="t('multiplePlaceholder')" />
    <var-date-input v-model="outlinedValue11" variant="outlined" range :placeholder="t('rangePlaceholder')" />
    <var-date-input
      v-model="outlinedValue15"
      variant="outlined"
      type="month"
      range
      :placeholder="t('monthRangePlaceholder')"
    />
    <var-date-input
      v-model="outlinedValue16"
      variant="outlined"
      type="year"
      range
      :placeholder="t('yearRangePlaceholder')"
    />
    <var-date-input
      v-model="outlinedValue17"
      variant="outlined"
      min="2021-04-05"
      max="2021-04-20"
      :placeholder="t('minMax')"
    />
    <var-date-input
      v-model="outlinedValue18"
      variant="outlined"
      range
      range-separator=" 至 "
      :placeholder="t('customSeparator')"
    />
    <var-date-input
      v-model="outlinedValue19"
      variant="outlined"
      :allowed-dates="allowedDates"
      :placeholder="t('allowedDates')"
    />
    <var-date-input
      v-model="outlinedValue12"
      variant="outlined"
      value-format="timestamp"
      :placeholder="t('valueFormat')"
    >
      <template #extra-message>{{ t('currentValue') }}{{ outlinedValue12 }}</template>
    </var-date-input>
    <var-date-input
      v-model="outlinedValue13"
      variant="outlined"
      value-format="YYYY/MM/DD"
      :placeholder="t('customValueFormat')"
    >
      <template #extra-message>{{ t('currentValue') }}{{ outlinedValue13 }}</template>
    </var-date-input>
    <var-date-input v-model="outlinedValue14" variant="outlined" size="small" :placeholder="t('smallSize')" />
    <var-date-input
      v-model="datetimeNoSecondsValue"
      type="datetime"
      :use-seconds="false"
      variant="outlined"
      :placeholder="t('datetimeNoSecondsPlaceholder')"
    >
      <template #extra-message>{{ t('currentValue') }}{{ datetimeNoSecondsValue }}</template>
    </var-date-input>
    <var-date-input
      v-model="datetimeAllowedTimesValue"
      type="datetime"
      variant="outlined"
      :allowed-times="allowedTimes"
      :placeholder="t('datetimeAllowedTimes')"
    >
      <template #extra-message>{{ t('currentValue') }}{{ datetimeAllowedTimesValue }}</template>
    </var-date-input>
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
        <var-icon class="prepend-icon" name="calendar" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="heart-outline" />
      </template>
    </var-date-input>
    <var-date-input v-model="filledValue10" variant="filled" multiple :placeholder="t('multiplePlaceholder')" />
    <var-date-input v-model="filledValue11" variant="filled" range :placeholder="t('rangePlaceholder')" />
    <var-date-input
      v-model="filledValue15"
      variant="filled"
      type="month"
      range
      :placeholder="t('monthRangePlaceholder')"
    />
    <var-date-input
      v-model="filledValue16"
      variant="filled"
      type="year"
      range
      :placeholder="t('yearRangePlaceholder')"
    />
    <var-date-input
      v-model="filledValue17"
      variant="filled"
      min="2021-04-05"
      max="2021-04-20"
      :placeholder="t('minMax')"
    />
    <var-date-input
      v-model="filledValue18"
      variant="filled"
      range
      range-separator=" 至 "
      :placeholder="t('customSeparator')"
    />
    <var-date-input
      v-model="filledValue19"
      variant="filled"
      :allowed-dates="allowedDates"
      :placeholder="t('allowedDates')"
    />
    <var-date-input v-model="filledValue12" variant="filled" value-format="timestamp" :placeholder="t('valueFormat')">
      <template #extra-message>{{ t('currentValue') }}{{ filledValue12 }}</template>
    </var-date-input>
    <var-date-input
      v-model="filledValue13"
      variant="filled"
      value-format="YYYY/MM/DD"
      :placeholder="t('customValueFormat')"
    >
      <template #extra-message>{{ t('currentValue') }}{{ filledValue13 }}</template>
    </var-date-input>
    <var-date-input v-model="filledValue14" variant="filled" size="small" :placeholder="t('smallSize')" />
    <var-date-input
      v-model="datetimeMinMaxValue"
      type="datetime"
      variant="filled"
      min="2021-04-08 09:30:00"
      max="2021-04-20 18:00:00"
      :placeholder="t('datetimeMinMax')"
    >
      <template #extra-message>{{ t('currentValue') }}{{ datetimeMinMaxValue }}</template>
    </var-date-input>
    <var-date-input
      v-model="datetimeRangeValue"
      type="datetime"
      range
      variant="filled"
      :placeholder="t('datetimeRange')"
    >
      <template #extra-message>{{ t('currentValue') }}{{ datetimeRangeValue.join(' ~ ') }}</template>
    </var-date-input>
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
