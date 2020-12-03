<template>
  <var-dialog/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dialog from '..'

export default defineComponent({
  name: 'DialogExample',
  components: {
    [Dialog.name]: Dialog
  }
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
