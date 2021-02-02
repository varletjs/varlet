<template>
  <div class="example">
    <var-picker :columns="cascadeColumns" cascade @change="log" />
    <var-picker style="margin-top: 20px" :columns="columns" @change="log" />
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
      cascadeColumns: [
        {
          text: '四川省',
          children: [
            {
              text: '成都市',
              children: [
                {
                  text: '温江区',
                },
              ],
            },
            {
              text: '乐山市',
              children: [],
            },
          ],
        },
        {
          text: '江苏省',
          children: [
            {
              text: '无锡市',
              children: [],
            },
            {
              text: '常州市',
              children: [],
            },
          ],
        },
      ],
      log(texts, indexes) {
        console.log(texts)
        console.log(indexes)
      },
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
