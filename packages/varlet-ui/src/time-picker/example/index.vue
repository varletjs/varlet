<template>
  <var-time-picker
    v-model="date"
    shadow
    header-color="purple"
    color="#7bb872"
    min="2:28:38"
    format="24hr"
    max="19:40:22"
    @change="change"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import TimePicker from '..'

export default defineComponent({
  name: 'TimePickerExample',
  components: {
    [TimePicker.name]: TimePicker,
  },
  setup() {
    const date = ref('')
    const change = (time) => {
      console.log(time)
    }
    return {
      date,
      change,
    }
  },
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
