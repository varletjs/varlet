<template>
  <button @click="push">push</button>
  <button @click="move">move</button>

  <img
    style="width: 200px; height: 200px"
    v-for="i in images"
    :key="i.id"
    v-lazy="i.url"
    lazy-loading="https://himg.bdimg.com/sys/portraitn/item/47a3bac4d7d3befd5141515061"
    lazy-error="https://himg.bdimg.com/sys/portraitn/item/47a3bac4d7d3befd5141515061"
    lazy-attempt="1"
  >

  <button @click="fix">reset</button>
  <button @click="pop">pop</button>
  <button @click="unshift">unshift</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Lazy from '..'

export default defineComponent({
  name: 'LazyExample',
  directives: { Lazy },
  setup() {
    const images = reactive([
      {
        id: 1,
        url: 'https://cn.vuejs.org/images/logo.png',
      },
      {
        id: 2,
        url: 'https://cn.vuejs.org/imagessss/logo.png',
      },
      {
        id: 3,
        url: 'https://cn.vuejs.org/images/logo.png',
      },
      {
        id: 4,
        url: 'https://cn.vuejs.org/images/logo.png',
      },{
        id: 5,
        url: 'https://cn.vuejs.org/images/logo.png',
      }
    ])

    return {
      images,
      fix() {
        images[1].url = 'https://cn.vuejs.org/images/logo.png'
      },
      push() {
        images.push({
          id: Date.now(),
          url: 'https://cn.vuejs.org/images/logo.png'
        })
      },
      pop() {
        images.pop()
      },
      unshift() {
        images.unshift({
          id: Date.now(),
          url: 'https://cn.vuejs.org/images/logo.png'
        })
      },
      move() {
        images.unshift(images.pop() as any)
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
