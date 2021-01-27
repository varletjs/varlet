<template>
	<var-radio-group />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RadioGroup from '..'

export default defineComponent({
  name: 'RadioGroupExample',
  components: {
    [RadioGroup.name]: RadioGroup,
  },
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
