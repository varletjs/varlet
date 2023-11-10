<template>
  <tabs-items />
</template>

<script lang="ts">
import { Themes, TabsItems } from '@varlet/ui'
import { defineComponent } from 'vue'
import { watchDarkMode } from '@varlet/cli/client'

export default defineComponent({
  name: 'TabsItemsExample',
  components: {
    TabsItems,
  },
  setup() {
    watchDarkMode(Themes.dark)
  },
})
</script>
