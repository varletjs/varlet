<template>
  <div class="var-index-bar__example">
    <var-index-bar v-model:active="active" @change="change">
      <div v-for="item in list" :key="item">
        <var-index-anchor :index="item" class="var-index-anchor__example">
          {{ pack.title }} {{ item }}
        </var-index-anchor>
        <var-cell>{{ item }} {{ pack.text }}</var-cell>
        <var-cell>{{ item }} {{ pack.text }}</var-cell>
        <var-cell>{{ item }} {{ pack.text }}</var-cell>
      </div>
    </var-index-bar>
  </div>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from 'vue'
import IndexAnchor from '../../index-anchor/IndexAnchor.vue'
import IndexBar from '..'
import Cell from '../../cell'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'

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

    watchLang(use)

    return {
      active,
      list,
      pack,
      change,
    }
  },
})
</script>

<style lang="less">
.var-index-bar__example {
  overflow: auto;
  height: calc(100vh - 50px);
  margin-bottom: -20px;

  .var-index-anchor__example {
    background: #e7edf7;
    height: 42px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    color: #2e67ba;
  }
}
</style>
