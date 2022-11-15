<script setup lang="ts">
import { reactive, ref } from 'vue'
import VarFloatingActionsButton from '../index'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import type { Action, ActionsLocation, FabLocation, Trigger } from '../props'

const fab = reactive({
  location: 'bottom-right' as FabLocation,
  actions: {
    location: 'top' as ActionsLocation,
    data: [{}, {}, {}] as Action[],
  },
  show: false,
  trigger: 'click' as Trigger,
  useTeleport: false,
  overlay: true,
  open: () => {
    console.log('open')
  },
  opened: () => {
    console.log('opened')
  },
  close: () => {
    console.log('close')
  },
  closed: () => {
    console.log('closed')
  },
  actionClick: (action: Action) => {
    console.log('actionClick', action)
  },
  overlayClick: () => {
    console.log('overlayClick')
  },
})
</script>

<template>
  <div style="width: 100%; height: 50vh">
    <app-type>Mobile phone example code</app-type>
    <var-floating-actions-button
      v-model:show="fab.show"
      :actions="fab.actions.data"
      :actions-location="fab.actions.location"
      :fab-location="fab.location"
      :use-teleport="fab.useTeleport"
      :trigger="fab.trigger"
      :overlay="fab.overlay"
      @open="fab.open"
      @opened="fab.opened"
      @close="fab.close"
      @closed="fab.closed"
      @actionClick="fab.actionClick"
      @overlayClick="fab.overlayClick"
    >
      <!--      <template #active-icon>-->
      <!--      <span>1</span>-->
      <!--      </template>-->
    </var-floating-actions-button>
  </div>
</template>
