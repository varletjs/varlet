<template>
  <var-input/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Input from '..'

export default defineComponent({
  name: 'InputExample',
  components: {
    [Input.name]: Input
  }
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
