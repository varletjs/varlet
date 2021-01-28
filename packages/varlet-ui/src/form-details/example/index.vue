<template>
	<var-form-details />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormDetails from '..'

export default defineComponent({
  name: 'FormDetailsExample',
  components: {
    [FormDetails.name]: FormDetails,
  },
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
