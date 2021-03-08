<template>
  <div>
    <app-type>基本使用</app-type>
    <var-countdown time="108000000" />
  </div>
  <div>
    <app-type>自定义格式</app-type>
    <var-countdown time="108000000" format="DD 天 HH 时 mm 分 ss 秒" />
  </div>
  <div>
    <app-type>显示毫秒</app-type>
    <var-countdown time="108000000" format="HH : mm : ss : SS" />
  </div>
  <div>
    <app-type>自定义样式</app-type>
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
    <app-type>手动控制</app-type>
    <var-countdown :time="time" ref="countdown" :auto-start="false" format="ss : SSS" @end="end" @change="change" />
    <div style="display: flex; justify-content: space-between; margin-top: 10px">
      <var-button type="primary" @click="$refs.countdown.start()">开始</var-button>
      <var-button @click="$refs.countdown.pause()">暂停</var-button>
      <var-button @click="$refs.countdown.reset()">重置</var-button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Countdown from '..'
import Snackbar from '../../snackbar'
import Button from '../../button'

export default defineComponent({
  name: 'CountdownExample',
  components: {
    [Countdown.name]: Countdown,
    [Button.name]: Button,
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

    return {
      time,
      end,
      countdown,
      change,
    }
  },
})
</script>

<style scoped>
.block {
  background: #2e67ba;
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
