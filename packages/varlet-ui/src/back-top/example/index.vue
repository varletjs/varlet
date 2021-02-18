<template>
  <div class="var-back-top__example">
    <div>
      <div v-for="list in lists" :key="list">Scroll to bottom {{ list }}</div>
      <var-back-top target=".var-back-top__example" visibility-height="100" :duration="300" @click="test" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import BackTop from '..'

const lists = [...Array(100).keys()]

export default defineComponent({
  name: 'BackTopExample',
  components: {
    [BackTop.name]: BackTop,
  },
  setup() {
    const test = () => {
      console.log('click')
    }

    return {
      test,
      lists,
    }
  },
})
</script>

<style scoped>
.var-back-top__example {
  height: calc(100vh - 130px);
  overflow: auto;
  margin-top: 18px;
}
</style>
