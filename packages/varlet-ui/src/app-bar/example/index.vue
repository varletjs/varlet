<template>
  <var-app-bar :title="'标题'"> </var-app-bar>
</template>

<script>
import { defineComponent } from 'vue'
import AppBar from '..'

export default defineComponent({
  name: 'AppBarExample',
  components: {
    [AppBar.name]: AppBar,
  },
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
