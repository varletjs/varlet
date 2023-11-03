<template>
  <div :class="classes(n(), formatElevation(elevation, 2))" ref="picker">
    <var-tabs-items v-model:active="activeTab">
      <var-tab-item>
        <var-date-picker v-model="date1"> </var-date-picker>
        <div :class="n('body')">
          <var-button text @click="cancel"> {{ cancelButtonText }}</var-button>
          <var-button text type="primary" @click="nextStep"> {{ nextStepText }}</var-button>
        </div>
      </var-tab-item>
      <var-tab-item>
        <var-time-picker v-model="date2"> </var-time-picker>
        <div :class="n('body')">
          <var-button text type="primary" @click="prevStep"> {{ prevStepText }} </var-button>
          <var-button text @click="cancel"> {{ cancelButtonText }}</var-button>
          <var-button text type="primary" @click="timeConfirm"> {{ confirmButtonText }}</var-button>
        </div>
      </var-tab-item>
    </var-tabs-items>
  </div>
</template>

<script lang="ts">
import VarTimePicker from '../time-picker'
import VarDatePicker from '../date-picker'
import { defineComponent, ref } from 'vue'
import { props } from './props'
import { createNamespace, call, formatElevation } from '../utils/components'
import Snackbar from '../snackbar'
import dayjs from 'dayjs/esm'

export default defineComponent({
  name: 'VarDateTimePicker',
  components: {
    VarTimePicker,
    VarDatePicker,
  },
  props,
  setup(props) {
    const { name, n, classes } = createNamespace('date-time-picker')
    const activeTab = ref(+props.active)

    const cancel = () => {
      call(props.onCancel)
    }

    const currentDate = props.modelValue ? props.modelValue : dayjs().format('YYYY-MM-DD HH:MM')
    const [currentDay, currentTime] = currentDate.split(' ')
    const date1 = ref<string | undefined>(currentDay)
    const date2 = ref<string | undefined>(currentTime)

    const nextStep = () => {
      activeTab.value += 1
      console.log(activeTab.value)
    }
    const prevStep = () => {
      activeTab.value -= 1
    }

    const timeConfirm = () => {
      Snackbar(`${date1.value}  ${date2.value}`)
      call(props.onConfirm, `${date1.value} ${date2.value}`)
    }

    return {
      activeTab,
      cancel,
      name,
      n,
      classes,
      date1,
      date2,
      timeConfirm,
      nextStep,
      prevStep,
      formatElevation,
    }
  },
})
</script>

<style lang="less">
@import './dateTimePicker.less';
@import '../styles/elevation';
</style>
