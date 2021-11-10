<template>
  <var-index-bar @change="change" duration="300" :sticky-offset-top="54">
    <div v-for="item in list" :key="item">
      <var-index-anchor :index="item" class="var-index-anchor__example" :style="{ background: bgColor, color }">
        {{ pack.title }} {{ item }}
      </var-index-anchor>
      <var-cell>{{ item }} {{ pack.text }}</var-cell>
      <var-cell>{{ item }} {{ pack.text }}</var-cell>
    </div>
  </var-index-bar>
</template>

<script>
import { ref, onMounted } from 'vue'
import VarIndexAnchor from '../../index-anchor/IndexAnchor.vue'
import VarIndexBar from '..'
import VarCell from '../../cell'
import { pack, use } from './locale'
import { watchLang } from '@varlet/cli/site/utils'
import { watchDarkMode } from '../../utils/components'

export default {
  name: 'IndexBarExample',
  components: {
    VarIndexBar,
    VarIndexAnchor,
    VarCell,
  },
  setup() {
    const list = ref([])
    const bgColor = ref('#e7edf7')
    const color = ref('#2e67ba')

    onMounted(() => {
      for (let i = 0; i < 26; i++) {
        list.value.push(String.fromCharCode(65 + i))
      }
    })

    const change = (value) => {
      console.log(value)
    }

    watchLang(use)
    watchDarkMode((themes) => {
      bgColor.value = themes === 'darkThemes' ? 'rgb(41 42 45)' : '#e7edf7'
      color.value = themes === 'darkThemes' ? '#3980e8' : '#2e67ba'
    })

    return {
      color,
      bgColor,
      list,
      pack,
      change,
    }
  },
}
</script>

<style lang="less">
.var-index-anchor__example {
  height: 42px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  transition: all 0.25s;
}
</style>
