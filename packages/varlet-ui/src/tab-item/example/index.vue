<template>
  <var-tab-item />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VarTabItem from '..'
import { watchDarkMode } from '../../utils/components'

export default defineComponent({
  name: 'TabItemExample',
  components: {
    VarTabItem,
  },
  setup() {
    watchDarkMode()
  },
})
</script>
