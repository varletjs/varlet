<template>
  <div class="varlet-button lock">
    <p>Times clicked: {{ count }}</p>
    <button @click="increment">increment123</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import '../styles/common.less'

export default defineComponent({
  name: 'VarletButton',
  setup() {
    const count: Ref<number> = ref(0)

    return {
      count,
      increment() {
        count.value++
      }
    }
  }
})
</script>

<style lang="less">
.varlet {
  display: flex;
}
</style>
