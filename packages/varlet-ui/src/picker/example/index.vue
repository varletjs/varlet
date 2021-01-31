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
          texts: ['1', '2', '3'],
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
