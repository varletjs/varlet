<template>
  <div>
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-date-picker v-model="date1" />
  </div>
  <div>
    <app-type>{{ pack.monthPicker }}</app-type>
    <var-date-picker type="month" v-model="date" shadow />
  </div>
  <div>
    <app-type>{{ pack.multiple }}</app-type>
    <var-date-picker type="date" v-model="date2" multiple />
  </div>
  <div>
    <app-type>{{ pack.range }}</app-type>
    <var-date-picker type="date" v-model="date3" range />
  </div>
  <div>
    <app-type>{{ pack.dateLimit }}</app-type>
    <var-date-picker type="date" v-model="date4" min="2020-10-15" max="2021-01-15" :allowed-dates="allowedDates1" />
  </div>
  <div style="padding-bottom: 20px">
    <app-type>{{ pack.custom }}</app-type>
    <var-date-picker
      type="month"
      :allowed-dates="allowedDates"
      v-model="date5"
      max="2022-01"
      min="2016-07"
      shadow
      header-color="purple"
      color="#7bb872"
      first-day-of-week="1"
      @change="change"
    >
      <template #year="{ year }">
        <span>{{ year }}{{ pack.year }}</span>
      </template>
      <template #month="{ year, month }">
        <span>{{ year }}{{ pack.divider }}{{ month }}{{ pack.month }}</span>
      </template>
    </var-date-picker>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import DatePicker from '..'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'

export default defineComponent({
  name: 'DatePickerExample',
  components: {
    AppType,
    [DatePicker.name]: DatePicker,
  },
  setup() {
    const date = ref('2021-01')
    const date1 = ref()
    const date2 = ref(['2021-02-02', ' 2021-02-07'])
    const date3 = ref(['2021-02-01', ' 2021-02-15'])
    const date4 = ref('2020-11-11')
    const date5 = ref('2021-02')
    const allowedDates = (val) => {
      return parseInt(val.split('-')[1], 10) % 2 === 1
    }
    const allowedDates1 = (val) => {
      return parseInt(val.split('-')[2], 10) % 2 === 1
    }
    const change = (date) => {
      console.log(date)
    }

    watchLang(use)

    return {
      pack,
      date,
      date1,
      date2,
      date3,
      date4,
      date5,
      change,
      allowedDates,
      allowedDates1,
    }
  },
})
</script>
