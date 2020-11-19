<template>
  <varlet-cell/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cell from '..'

export default defineComponent({
  name: 'CellExample',
  components: {
    [Cell.name]: Cell
  }
})
</script>

<style scoped>
.example-container {
  background: antiquewhite;
}
</style>
