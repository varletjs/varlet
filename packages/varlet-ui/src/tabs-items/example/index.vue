<template>
  <var-tabs-items />
</template>

<script lang="ts">
import VarTabsItems from '..'
import dark from '../../themes/dark'
import { defineComponent } from 'vue'
import { watchDarkMode } from '@varlet/cli/client'

export default defineComponent({
  name: 'TabsItemsExample',
  components: {
    VarTabsItems,
  },
  setup() {
    watchDarkMode(dark)
  },
})
</script>
