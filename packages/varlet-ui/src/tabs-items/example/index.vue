<template>
  <var-tabs-items />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VarTabsItems from '..'
import { watchDarkMode } from '../../utils/components'

export default defineComponent({
  name: 'TabsItemsExample',
  components: {
    VarTabsItems,
  },
  setup() {
    watchDarkMode()
  },
})
</script>
