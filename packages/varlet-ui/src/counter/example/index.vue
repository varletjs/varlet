<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-counter v-model="value" />

  <app-type>{{ pack.range }}</app-type>
  <var-counter :min="0" :max="5" v-model="value2" />

  <app-type>{{ pack.step }}</app-type>
  <var-counter :step="10" v-model="value3" />

  <app-type>{{ pack.toFixed }}</app-type>
  <var-counter :decimal-length="1" v-model="value4" />

  <app-type>{{ pack.size }}</app-type>
  <var-counter input-text-size="18px" input-width="50px" button-size="36px" v-model="value5" />

  <app-type>{{ pack.disabled }}</app-type>
  <var-counter disabled v-model="value6" />

  <app-type>{{ pack.readonly }}</app-type>
  <var-counter readonly v-model="value7" />

  <app-type>{{ pack.lazyChange }}</app-type>
  <var-counter lazy-change v-model="value8" @before-change="handleBeforeChange" />

  <app-type>{{ pack.validate }}</app-type>
  <var-counter :rules="[(v) => v > 5 || pack.validateMessage]" v-model="value9" />

  <div class="space"></div>
</template>

<script>
import Counter from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { ref } from 'vue'
import { watchLang } from '../../utils/components'
import { use, pack } from './locale'

export default {
  name: 'CounterExample',
  components: {
    [Counter.name]: Counter,
    AppType,
  },
  setup() {
    const value = ref(0)
    const value2 = ref(0)
    const value3 = ref(0)
    const value4 = ref(0)
    const value5 = ref(0)
    const value6 = ref(0)
    const value7 = ref(0)
    const value8 = ref(0)
    const value9 = ref(0)

    const handleBeforeChange = (value, change) => {
      setTimeout(() => {
        change(value)
      }, 500)
    }

    watchLang(use)

    return {
      pack,
      value,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      value9,
      handleBeforeChange,
    }
  },
}
</script>

<style scoped lang="less">
.space {
  height: 40px;
}
</style>
