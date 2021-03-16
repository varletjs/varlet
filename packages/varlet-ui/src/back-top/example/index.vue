<template>
  <div class="var-back-top__example">
    <var-cell v-for="list in lists" :key="list">Scroll to bottom {{ list }}</var-cell>
    <var-back-top target=".var-back-top__example" :duration="300" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import BackTop from '..'
import Cell from '../../cell'

const lists = [...Array(100).keys()]

export default defineComponent({
  name: 'BackTopExample',
  components: {
    [BackTop.name]: BackTop,
    [Cell.name]: Cell,
  },
  setup() {
    return {
      lists,
    }
  },
})
</script>

<style scoped>
.var-back-top__example {
  height: calc(100vh - 40px);
  overflow: auto;
}
</style>
