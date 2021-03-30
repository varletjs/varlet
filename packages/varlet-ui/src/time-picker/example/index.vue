<template>
  <var-time-picker
    v-model="date"
    shadow
    header-color="purple"
    color="#7bb872"
    min="2:28:38"
    max="19:40:22"
    @change="change"
  />
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
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
    // onMounted(() => {
    //   setTimeout(() => {
    //     date.value = '18:01:11'
    //   }, 2000)
    // })
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
