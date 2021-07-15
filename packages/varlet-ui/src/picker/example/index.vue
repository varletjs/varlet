<template>
  <app-type>{{ pack.functionCall }}</app-type>
  <var-button type="primary" style="margin-bottom: 10px" block @click="picker">{{ pack.singlePicker }}</var-button>
  <var-button type="primary" style="margin-bottom: 10px" block @click="picker2">{{ pack.multiplePicker }}</var-button>
  <var-button type="primary" style="margin-bottom: 10px" block @click="picker3">{{ pack.cascadePicker }}</var-button>

  <app-type>{{ pack.componentCall }}</app-type>
  <var-picker style="margin-bottom: 14px" :columns="columns" />
  <var-picker style="margin-bottom: 14px" :columns="columns2" />
  <var-picker style="margin-bottom: 14px" cascade :columns="columns3" />
</template>

<script>
import Picker from '../index'
import Button from '../../button'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import area from '../../../json/area.json'
import { onUnmounted, ref } from 'vue'
import { use, pack } from './locale'
import { watchLang, watchPlatform } from '../../utils/components'
import context from '../../context'

export default {
  name: 'PickerExample',
  components: {
    [Picker.Component.name]: Picker.Component,
    [Button.name]: Button,
    AppType,
  },
  setup() {
    const columns = ref([Array.from({ length: 20 }).map((_, index) => index)])

    const columns2 = ref([
      Array.from({ length: 20 }).map((_, index) => index),
      Array.from({ length: 20 }).map((_, index) => index),
      Array.from({ length: 20 }).map((_, index) => index),
    ])

    const columns3 = ref(area)

    const picker = async () => {
      await Picker(columns.value)
    }

    const picker2 = async () => {
      await Picker(columns2.value)
    }

    const picker3 = async () => {
      await Picker({
        cascade: true,
        columns: columns3.value,
      })
    }

    watchLang(use)

    const prevTouchmoveForbid = context.touchmoveForbid
    watchPlatform((platform) => {
      if (platform === 'pc') {
        context.touchmoveForbid = false
      }
    })
    onUnmounted(() => {
      context.touchmoveForbid = prevTouchmoveForbid
    })

    return {
      pack,
      columns,
      columns2,
      columns3,
      picker,
      picker2,
      picker3,
    }
  },
}
</script>
