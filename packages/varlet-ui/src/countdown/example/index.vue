<template>
  <div>
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-countdown time="108000000" />
  </div>
  <div>
    <app-type>{{ pack.customFormat }}</app-type>
    <var-countdown time="108000000" :format="pack.format" />
  </div>
  <div>
    <app-type>{{ pack.showMillisecond }}</app-type>
    <var-countdown time="108000000" format="HH : mm : ss : SS" />
  </div>
  <div>
    <app-type>{{ pack.customStyle }}</app-type>
    <var-countdown time="108000000">
      <template #default="timeData">
        <span class="block">{{ timeData.hours }}</span>
        <span class="colon">:</span>
        <span class="block">{{ timeData.minutes }}</span>
        <span class="colon">:</span>
        <span class="block">{{ timeData.seconds }}</span>
      </template>
    </var-countdown>
  </div>
  <div>
    <app-type>{{ pack.manualControl }}</app-type>
    <var-countdown :time="time" ref="countdown" :auto-start="false" format="ss : SSS" @end="end" @change="change" />
    <div class="btn-container">
      <var-button type="primary" @click="$refs.countdown.start()">{{ pack.startText }}</var-button>
      <var-button @click="$refs.countdown.pause()">{{ pack.pauseText }}</var-button>
      <var-button @click="$refs.countdown.reset()">{{ pack.resetText }}</var-button>
    </div>
  </div>
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarCountdown from '..'
import Snackbar from '../../snackbar'
import VarButton from '../../button'
import { ref } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

export default {
  name: 'CountdownExample',
  components: {
    VarCountdown,
    VarButton,
    AppType,
  },
  setup() {
    const countdown = ref(null)
    const time = ref(3000)

    const end = () => {
      Snackbar.info('end!')
    }

    const change = () => {
      console.log('change')
    }

    watchLang(use)
    watchDarkMode()

    return {
      time,
      pack,
      end,
      countdown,
      change,
    }
  },
}
</script>

<style scoped>
.btn-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}

.block {
  background: #ff9f00;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.colon {
  margin: 0 5px;
  font-size: 18px;
  font-weight: 500;
}
</style>
