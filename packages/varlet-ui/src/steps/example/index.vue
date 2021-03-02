<template>
  <div>
    <app-type>基本使用</app-type>
    <var-steps :active="active">
      <var-step>第一步</var-step>
      <var-step>第二步</var-step>
      <var-step>第三步</var-step>
      <var-step>第四步</var-step>
    </var-steps>
    <var-button type="primary" @click="next">next</var-button>
  </div>
  <div>
    <app-type>自定义样式</app-type>
    <var-steps :active="active" @change="change" active-color="purple" inactive-color="#afcf7f">
      <var-step active-icon="fire" current-icon="heart" in-active-icon="delete">第一步</var-step>
      <var-step active-icon="fire" current-icon="heart" in-active-icon="delete">第二步</var-step>
      <var-step active-icon="fire" current-icon="heart" in-active-icon="delete">第三步</var-step>
      <var-step active-icon="fire" current-icon="heart" in-active-icon="delete">第四步</var-step>
    </var-steps>
  </div>
  <div>
    <app-type>动态步骤</app-type>
    <var-select placeholder="请选择分类" :rules="[(v) => !!v || '不能为空']" v-model="count" style="margin-top: 20px">
      <var-option v-for="item in list" :key="item" :label="item" :value="item" />
    </var-select>
    <var-steps>
      <var-step>第一步</var-step>
    </var-steps>
  </div>
  <div>
    <app-type>垂直模式</app-type>
    <var-steps direction="vertical" :active="5">
      <var-step active-icon="notebook">
        <div>
          <h3 style="margin: 0">2021-02-13</h3>
          <span>do something...</span>
        </div>
      </var-step>
      <var-step active-icon="notebook">
        <h3 style="margin: 0">2021-02-14</h3>
        <span>do something...</span>
      </var-step>
      <var-step active-icon="notebook">
        <h3 style="margin: 0">2021-02-15</h3>
        <span>do something...</span>
      </var-step>
      <var-step active-icon="notebook">
        <h3 style="margin: 0">2021-02-16</h3>
        <span>do something...</span>
      </var-step>
    </var-steps>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Steps from '..'
import Step from '../../step'
import Select from '../../select'
import Option from '../../option'
import Button from '../../button'

export default defineComponent({
  name: 'StepsExample',
  components: {
    [Steps.name]: Steps,
    [Step.name]: Step,
    [Select.name]: Select,
    [Option.name]: Option,
    [Button.name]: Button,
  },
  setup() {
    const active = ref(0)
    const list = ref([2, 3, 4, 5])
    const count = ref(2)
    const next = () => {
      active.value = active.value === 3 ? 0 : active.value + 1
    }
    const change = (index) => {
      active.value = index
    }
    return {
      list,
      count,
      next,
      change,
      active,
    }
  },
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
