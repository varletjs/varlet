<script setup lang="ts">
import { ref } from 'vue'
import VarFloatingActionsButton from '../index'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import type { Action } from '../props'

const actions: Action[] = [
  {
    icon: 'wrench',
    iconColor: 'rgb(85, 85, 85)',
    iconSize: '20px',
    iconNamespace: '',
    buttonColor: 'rgb(88, 193, 147)',
    buttonSize: '20px',
  },
  {
    icon: 'error',
    iconColor: 'red',
    iconSize: '20px',
    iconNamespace: '',
    buttonColor: 'rgb(88, 193, 147)',
    buttonSize: '20px',
  },
]

const show = ref(true)

const reverseShow = () => {
  show.value = !show.value
}
</script>

<template>
  <app-type>Mobile phone example code</app-type>
  <var-floating-actions-button
    v-model:show="show"
    @click="reverseShow"
    fab-location="bottom-right"
    actions-location="left"
    :actions="actions"
  />
</template>
