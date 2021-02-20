<template>
  <div>
    <app-type>月份选择器</app-type>
    <var-date-picker type="month" v-model="date" />
  </div>
  <div>
    <app-type>日期选择器</app-type>
    <var-date-picker type="date" v-model="date1" shadow />
  </div>
  <div>
    <app-type>选择多个日期</app-type>
    <var-date-picker type="date" v-model="date2" multiple />
  </div>
  <div>
    <app-type>选择范围</app-type>
    <var-date-picker type="date" v-model="date3" range>
      <!--      <template #range="{ choose }">-->
      <!--        <span v-for="item in choose" :key="item">{{ item }}</span>-->
      <!--      </template>-->
    </var-date-picker>
  </div>
  <div>
    <app-type>选择限制</app-type>
    <var-date-picker type="date" v-model="date4" max="2021-02-15" min="2021-01-15" />
  </div>
  <div>
    <app-type>自定义</app-type>
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
    >
      <template #year="{ year }">
        <span>{{ year }}年</span>
      </template>
      <template #month="{ year, month }">
        <span>{{ year }}年{{ month }}月</span>
      </template>
    </var-date-picker>
  </div>
  <!--  <var-date-picker-->
  <!--    :allowed-dates="allowedDates"-->
  <!--    type="date"-->
  <!--    color="#7bb872"-->
  <!--    header-color="purple"-->
  <!--    first-day-of-week="1"-->
  <!--    v-model="date"-->
  <!--    max="2022-01-18T"-->
  <!--    min="2016-07-12T"-->
  <!--    shadow-->
  <!--    multiple-->
  <!--    range-->
  <!--    @change="change"-->
  <!--  >-->
  <!--    <template #multiple="{ choose }">-->
  <!--      <span v-for="item in choose" :key="item">{{ item }}</span>-->
  <!--    </template>-->
  <!--    <template #date="{ year, month, date, week }">-->
  <!--      <span>{{ year }}年{{ month }}月{{ date }}日</span>-->
  <!--    </template>-->
  <!--    <template #range="{ choose }">-->
  <!--      <span v-for="item in choose" :key="item">{{ item }}</span>-->
  <!--    </template>-->
  <!--  </var-date-picker>-->
</template>

<script>
import { defineComponent, ref } from 'vue'
import DatePicker from '..'

export default defineComponent({
  name: 'DatePickerExample',
  components: {
    [DatePicker.name]: DatePicker,
  },
  setup() {
    const date = ref('2020-08')
    const date1 = ref()
    const date2 = ref(['2021-02-02', ' 2021-02-07'])
    const date3 = ref(['2021-02-01', ' 2021-02-15'])
    const date4 = ref('2021-02-02')
    const date5 = ref('2021-02')
    const allowedDates = (val) => {
      return parseInt(val.split('-')[1], 10) % 2 === 1
    }
    const change = (date) => {
      console.log(date)
    }
    return {
      date,
      date1,
      date2,
      date3,
      date4,
      date5,
      change,
      allowedDates,
    }
  },
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
