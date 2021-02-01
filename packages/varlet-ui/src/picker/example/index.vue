<template>
  <div class="example">
    <var-picker :columns="columns" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Picker from '..'

export default defineComponent({
  name: 'PickerExample',
  components: {
    [Picker.name]: Picker,
  },
  setup() {
    return {
      columns: ref([
        {
          texts: Array.from({ length: 20 }).map((_, index) => index),
          initialIndex: 0,
        },
        {
          texts: Array.from({ length: 20 }).map((_, index) => index),
          initialIndex: 1,
        },
        {
          texts: Array.from({ length: 20 }).map((_, index) => index),
          initialIndex: 2,
        },
      ]),
    }
  },
})
</script>

<style scoped>
.example {
  background: #ddd;
  width: 100%;
  min-height: 80vh;
  padding-top: 50px;
}
</style>
