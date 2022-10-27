<script setup lang="ts">
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
]
</script>

<template>
  <app-type>Mobile phone example code</app-type>
  <var-floating-actions-button fab-location="" :actions="actions" />
</template>
