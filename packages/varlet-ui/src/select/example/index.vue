<template>
  <app-type>基本使用</app-type>
  <var-select placeholder="请选择一个选项" v-model="value">
    <var-option label="吃饭" />
    <var-option label="睡觉" />
  </var-select>

  <app-type>朴素模式</app-type>
  <var-select :hint="false" :line="false" placeholder="请选择一个选项" v-model="value2">
    <var-option label="吃饭" />
    <var-option label="睡觉" />
  </var-select>

  <app-type>显示文本关联值</app-type>
  <var-select placeholder="请选择一个选项" v-model="value6">
    <var-option label="吃饭" :value="1" />
    <var-option label="睡觉" :value="2" />
  </var-select>
  <div class="relation">当前选择的是: {{ value6 }}</div>

  <app-type>禁用</app-type>
  <var-select placeholder="请选择一个选项" disabled v-model="value4">
    <var-option label="吃饭" />
    <var-option label="睡觉" />
  </var-select>

  <app-type>只读</app-type>
  <var-select placeholder="请选择一个选项" readonly v-model="value3">
    <var-option label="吃饭" />
    <var-option label="睡觉" />
  </var-select>

  <app-type>可清除</app-type>
  <var-select placeholder="请选择一个选项" clearable v-model="value8">
    <var-option label="吃饭" />
    <var-option label="睡觉" />
  </var-select>

  <app-type>多选</app-type>
  <var-select placeholder="请选择多个选项" multiple v-model="value5">
    <var-option label="吃饭" />
    <var-option label="睡觉" />
    <var-option label="打游戏" />
    <var-option label="写代码" />
  </var-select>

  <app-type>纸片风格的多选</app-type>
  <var-select placeholder="请选择多个选项" chip multiple v-model="value7">
    <var-option label="吃饭" />
    <var-option label="睡觉" />
    <var-option label="打游戏" />
    <var-option label="写代码" />
  </var-select>

  <app-type>单选值校验</app-type>
  <var-select placeholder="请选择一个选项" :rules="[(v) => v === '摸鱼' || '您一定得选择摸鱼']" v-model="value9">
    <var-option label="吃饭" />
    <var-option label="睡觉" />
    <var-option label="摸鱼" />
  </var-select>

  <app-type>多选值校验</app-type>
  <var-select
    placeholder="请选择多个选项"
    multiple
    :rules="[(v) => v.length >= 2 || '您至少选择两个选项']"
    v-model="value10"
  >
    <var-option label="吃饭" />
    <var-option label="睡觉" />
    <var-option label="打游戏" />
    <var-option label="写代码" />
  </var-select>

  <div class="space"></div>
</template>

<script>
import Select from '..'
import Option from '../../option'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { ref } from 'vue'

export default {
  name: 'SelectExample',
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
    AppType,
  },
  setup() {
    const value = ref()
    const value2 = ref()
    const value3 = ref()
    const value4 = ref()
    const value6 = ref()
    const value5 = ref([])
    const value7 = ref([])
    const value8 = ref()
    const value9 = ref()
    const value10 = ref([])

    return {
      value,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      value9,
      value10,
    }
  },
}
</script>

<style scoped lang="less">
.relation {
  margin: 10px 0;
}

.space {
  height: 160px;
}
</style>
