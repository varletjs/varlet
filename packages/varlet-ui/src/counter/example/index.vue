<template>
  <var-counter
    v-model="count"
    :min="-1"
    :max="1"
    :step="0.1"
    style="margin-right: 10px"
    @change="z"
  />
  <var-counter
    v-model="count1"
    :min="-1"
    :max="1"
    :step="0.1"
    lazy-change
    @before-change="s"
    @change="z"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import Counter from '..'
import Button from '../../button'
import Snackbar from '../../snackbar'

export default defineComponent({
  name: 'CounterExample',
  components: {
    [Counter.name]: Counter,
    [Button.name]: Button
  },
  setup() {
    const count = ref(0)
    const count1 = ref(0)

    return {
      count,
      count1,
      s(value, lazyChange) {
        Snackbar.loading('lazy change')

        setTimeout(() => {
          lazyChange(value)
          Snackbar.clear()
        }, 1000)
      },
      z(value) {
        console.log(value)
      }
    }
  }
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
