<template>
	<var-option />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Option from '..'

export default defineComponent({
  name: 'OptionExample',
  components: {
    [Option.name]: Option,
  },
})
</script>
