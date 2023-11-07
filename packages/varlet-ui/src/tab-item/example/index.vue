<template>
  <tab-item />
</template>

<script lang="ts">
import { Themes, TabItem } from '@varlet/ui'
import { defineComponent } from 'vue'
import { watchDarkMode } from '@varlet/cli/client'

export default defineComponent({
  name: 'TabItemExample',
  components: {
    TabItem,
  },
  setup() {
    watchDarkMode(Themes.dark)
  },
})
</script>
