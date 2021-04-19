<template>
	<var-tab />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tab from '..'

export default defineComponent({
  name: 'TabExample',
  components: {
    [Tab.name]: Tab,
  },
})
</script>
