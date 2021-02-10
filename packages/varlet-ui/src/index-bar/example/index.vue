<template>
  <var-index-bar v-model:active="active" @change="change">
    <div v-for="item in list" :key="item">
      <var-index-anchor :index="item" class="var-index-anchor__example"> Title {{ item }} </var-index-anchor>
      <var-cell>{{ item }} text</var-cell>
      <var-cell>{{ item }} text</var-cell>
      <var-cell>{{ item }} text</var-cell>
    </div>
  </var-index-bar>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from 'vue'
import IndexAnchor from '../../index-anchor/IndexAnchor.vue'
import IndexBar from '..'
import Cell from '../../cell'

export default defineComponent({
  name: 'IndexBarExample',
  components: {
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
    [Cell.name]: Cell,
  },
  setup() {
    const active = ref('A')
    const list = ref([])

    onBeforeMount(() => {
      for (let i = 0; i < 26; i++) {
        list.value.push(String.fromCharCode(65 + i))
      }
    })

    const change = (value) => {
      console.log(value)
    }

    return {
      active,
      list,
      change,
    }
  },
})
</script>

<style lang="less">
.var-index-anchor__example {
  background: #e7edf7;
  height: 42px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: #2e67ba;
}
</style>
