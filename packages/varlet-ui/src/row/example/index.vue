<template>
  <app-type>栅格系统</app-type>
  <var-row>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
  </var-row>

  <app-type>偏移</app-type>
  <var-row>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8" :offset="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
  </var-row>

  <app-type>对齐</app-type>
  <var-row>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
  </var-row>
  <var-row justify="center">
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
  </var-row>
  <var-row justify="flex-end">
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
  </var-row>
  <var-row justify="space-around">
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
  </var-row>
  <var-row justify="space-between">
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
  </var-row>

  <app-type>列间距</app-type>
  <var-row :gutter="10">
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
    <var-col class="col" :span="8">span: 8</var-col>
  </var-row>

  <app-type>测试一下动态修改span和gutter</app-type>
  <var-row :gutter="gutter">
    <var-col class="col" :span="span">span: {{ span }}</var-col>
    <var-col class="col" :span="span">span: {{ span }}</var-col>
    <var-col class="col" :span="span">span: {{ span }}</var-col>
    <var-col class="col" :span="span">span: {{ span }}</var-col>
    <var-col class="col" :span="span">span: {{ span }}</var-col>
    <var-col class="col" :span="span">span: {{ span }}</var-col>
  </var-row>

  <var-button @click="toggleGutter">toggle gutter</var-button>
  <var-button @click="toggleSpan">toggle span</var-button>

  <app-type>测试一下异步推数据</app-type>
  <var-row :gutter="20">
    <var-col class="col" v-for="c in cols" :key="c.id" :span="8">{{ c.text }}</var-col>
  </var-row>

  <var-button @click="pushCol">push col</var-button>
</template>

<script>
import Row from '..'
import Col from '../../col'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Button from '../../button'
import { ref } from 'vue'

export default {
  name: 'RowExample',
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    AppType
  },
  setup() {
    const gutter = ref(20)
    const span = ref(8)
    const cols = ref([])

    const toggleGutter = () => {
      gutter.value = gutter.value === 20 ? 10 : 20
    }

    const toggleSpan = () => {
      span.value = span.value === 8 ? 6 : 8
    }

    let id = 1

    const pushCol = () => {
      cols.value.push({
        id: id++,
        text: 'span 8'
      })
      cols.value.push({
        id: id++,
        text: 'span 8'
      })
      cols.value.push({
        id: id++,
        text: 'span 8'
      })
    }

    return {
      gutter,
      span,
      toggleGutter,
      toggleSpan,
      cols,
      pushCol
    }
  }
}
</script>

<style scoped lang="less">
.var-col {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 36px;
  background: lightblue;
  background-clip: content-box;
  margin-bottom: 10px;
}
</style>
