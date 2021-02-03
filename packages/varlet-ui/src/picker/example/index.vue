<template>
  <div class="example">
    <var-picker :columns="cascadeColumns" cascade @change="log" @confirm="log" @cancel="log" />
    <var-picker style="margin-top: 20px" :columns="columns" @change="log" @confirm="log" @cancel="log" />
    <var-button @click="picker">弹出</var-button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Picker from '..'
import Button from '../../button'

export default defineComponent({
  name: 'PickerExample',
  components: {
    [Picker.Component.name]: Picker.Component,
    [Button.name]: Button,
  },
  setup() {
    return {
      columns: ref([
        Array.from({ length: 20 }).map((_, index) => index),
        Array.from({ length: 20 }).map((_, index) => index),
        Array.from({ length: 20 }).map((_, index) => index),
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
      async picker() {
        const columns = [
          Array.from({ length: 20 }).map((_, index) => index),
          Array.from({ length: 20 }).map((_, index) => index),
          Array.from({ length: 20 }).map((_, index) => index),
        ]
        const { state, texts, indexes } = await Picker({
          columns,
          onChange(texts, indexes) {
            console.log(texts, indexes)
          },
        })
        console.log(state, texts, indexes)
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
