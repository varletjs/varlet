<template>
  <div>
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-steps :active="active">
      <var-step>{{ pack.first }}</var-step>
      <var-step>{{ pack.second }}</var-step>
      <var-step>{{ pack.third }}</var-step>
      <var-step>{{ pack.fourth }}</var-step>
    </var-steps>
    <div style="padding: 15px 25px">
      <var-button type="primary" @click="next">{{ pack.next }}</var-button>
    </div>
  </div>
  <div>
    <app-type>{{ pack.customStyle }}</app-type>
    <var-steps :active="active" @click-step="click" active-color="purple" inactive-color="#afcf7f">
      <var-step active-icon="fire" current-icon="heart" inactive-icon="delete">{{ pack.first }}</var-step>
      <var-step active-icon="fire" current-icon="heart" inactive-icon="delete">{{ pack.second }}</var-step>
      <var-step active-icon="fire" current-icon="heart" inactive-icon="delete">{{ pack.third }}</var-step>
      <var-step active-icon="fire" current-icon="heart" inactive-icon="delete">{{ pack.fourth }}</var-step>
    </var-steps>
  </div>
  <div>
    <app-type>{{ pack.dynamicSteps }}</app-type>
    <div style="padding: 0 25px">
      <var-select :placeholder="pack.placeholder" v-model="count" style="margin-bottom: 20px">
        <var-option v-for="item in list" :key="item" :label="item" :value="item" />
      </var-select>
    </div>
    <var-steps>
      <var-step v-for="i in count" :key="i">{{ pack.step }}{{ i }}</var-step>
    </var-steps>
  </div>
  <div>
    <app-type>{{ pack.vertical }}</app-type>
    <div style="margin: 0 20px">
      <var-steps direction="vertical" :active="5">
        <var-step active-icon="notebook">
          <h3 style="margin: 0">2021-02-13</h3>
          <span>{{ pack.text }}</span>
        </var-step>
        <var-step active-icon="notebook">
          <h3 style="margin: 0">2021-02-14</h3>
          <span>{{ pack.text }}</span>
        </var-step>
        <var-step active-icon="notebook">
          <h3 style="margin: 0">2021-02-15</h3>
          <span>{{ pack.text }}</span>
        </var-step>
        <var-step active-icon="notebook">
          <h3 style="margin: 0">2021-02-16</h3>
          <span>{{ pack.text }}</span>
        </var-step>
      </var-steps>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Steps from '..'
import Step from '../../step'
import Select from '../../select'
import Option from '../../option'
import Button from '../../button'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'

export default defineComponent({
  name: 'StepsExample',
  components: {
    [Steps.name]: Steps,
    [Step.name]: Step,
    [Select.name]: Select,
    [Option.name]: Option,
    [Button.name]: Button,
    AppType,
  },
  setup() {
    const active = ref(0)
    const list = ref([2, 3, 4, 5])
    const count = ref(4)
    const next = () => {
      active.value = active.value === 4 ? 0 : active.value + 1
    }
    const click = (index) => {
      active.value = index
    }

    watchLang(use)

    return {
      pack,
      list,
      count,
      next,
      click,
      active,
    }
  },
})
</script>
