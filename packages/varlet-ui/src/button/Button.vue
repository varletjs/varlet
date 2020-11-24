<template>
  <div class="varlet-button lock">
    <p>Times clicked: {{ count }}</p>
    <button @click="increment">increment123</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'

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
@import '../styles/common.less';
.varlet {
  display: flex;
}
</style>
