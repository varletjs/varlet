<script setup lang="ts">
import { ref } from 'vue'
import VarFloatingActionsButton from '../index'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import type { Action } from '../props'

const actions: Action[] = [{}]

const show = ref(true)

const reverseShow = () => {
  show.value = !show.value
}
</script>

<template>
  <div style="width: 100%; height: 50vh">
    <app-type>Mobile phone example code</app-type>
    <var-floating-actions-button
      v-model:show="show"
      @click="reverseShow"
      fab-location="bottom-right"
      actions-location="top"
      :actions="actions"
    />
  </div>
</template>
