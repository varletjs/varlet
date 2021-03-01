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
import Button from '../../button'

export default defineComponent({
  name: 'StepsExample',
  components: {
    [Steps.name]: Steps,
    [Step.name]: Step,
    [Button.name]: Button,
  },
  setup() {
    const active = ref(0)
    const next = () => {
      active.value = active.value === 3 ? 0 : active.value + 1
    }
    const change = (index) => {
      active.value = index
    }
    return {
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
