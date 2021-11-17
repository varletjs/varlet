<template>
  <div>
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-time-picker v-model="date" />
  </div>
  <div>
    <app-type>{{ pack.hour24 }}</app-type>
    <var-time-picker v-model="date1" format="24hr" shadow />
  </div>
  <div>
    <app-type>{{ pack.showSecond }}</app-type>
    <var-time-picker v-model="date5" format="24hr" use-seconds />
  </div>
  <div>
    <app-type>{{ pack.readonly }}</app-type>
    <var-time-picker v-model="date2" readonly shadow />
  </div>
  <div>
    <app-type>{{ pack.timeLimit }}</app-type>
    <var-time-picker
      v-model="date3"
      format="24hr"
      use-seconds
      min="2:28:38"
      max="19:40:22"
      :allowed-time="allowedTime"
    />
  </div>
  <div style="padding-bottom: 20px">
    <app-type>{{ pack.custom }}</app-type>
    <var-time-picker
      v-model="date4"
      shadow
      header-color="purple"
      color="#7bb872"
      min="2:28:38"
      max="19:40:22"
      @change="change"
    />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarTimePicker from '..'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

export default {
  name: 'TimePickerExample',
  components: {
    VarTimePicker,
    AppType,
  },
  setup() {
    const dates = reactive({
      date: '11:20',
      date1: '15:10',
      date2: '07:10',
      date3: '07:10:12',
      date4: '05:10',
      date5: '17:36:22',
    })

    const allowedTime = {
      hours(hour) {
        return hour % 2 === 0
      },
      minutes(minute) {
        return minute % 15 !== 0
      },
      seconds(second) {
        return second % 2 !== 0
      },
    }

    const change = (time) => {
      console.log(time)
    }

    watchLang(use)
    watchDarkMode()

    return {
      ...toRefs(dates),
      change,
      pack,
      allowedTime,
    }
  },
}
</script>
