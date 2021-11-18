<template>
  <var-tab-item />
</template>

<script lang="ts">
import VarTabItem from '..'
import dark from '../../themes/dark'
import { defineComponent } from 'vue'
import { watchDarkMode } from '@varlet/cli/site/utils'

export default defineComponent({
  name: 'TabItemExample',
  components: {
    VarTabItem,
  },
  setup() {
    watchDarkMode(dark)
  },
})
</script>
