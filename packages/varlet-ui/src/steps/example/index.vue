<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-steps :active="active">
    <var-step>{{ pack.first }}</var-step>
    <var-step>{{ pack.second }}</var-step>
    <var-step>{{ pack.third }}</var-step>
    <var-step>{{ pack.fourth }}</var-step>
  </var-steps>
  <app-type>{{ pack.customStyle }}</app-type>
  <var-steps :active="active" active-color="#f44336" inactive-color="#e99eb4">
    <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ pack.first }}</var-step>
    <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ pack.second }}</var-step>
    <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ pack.third }}</var-step>
    <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ pack.fourth }}</var-step>
  </var-steps>
  <app-type>{{ pack.vertical }}</app-type>
  <var-steps direction="vertical" :active="active">
    <var-step>{{ pack.first }}</var-step>
    <var-step>{{ pack.second }}</var-step>
    <var-step>{{ pack.third }}</var-step>
    <var-step>{{ pack.fourth }}</var-step>
  </var-steps>

  <var-button type="primary" block @click="next" style="margin-top: 20px">{{ pack.next }}</var-button>
</template>

<script>
import VarSteps from '..'
import VarStep from '../../step'
import VarButton from '../../button'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { ref } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

export default {
  name: 'StepsExample',
  components: {
    VarSteps,
    VarStep,
    VarButton,
    AppType,
  },
  setup() {
    const active = ref(0)
    const next = () => {
      active.value = (active.value + 1) % 4
    }

    watchLang(use)

    watchDarkMode()

    return {
      pack,
      next,
      active,
    }
  },
}
</script>
