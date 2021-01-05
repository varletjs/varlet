<template>
  <var-tabbar/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tabbar from '..'

export default defineComponent({
  name: 'TabbarExample',
  components: {
    [Tabbar.name]: Tabbar
  }
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
