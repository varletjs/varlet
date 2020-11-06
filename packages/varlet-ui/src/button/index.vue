<template>
  <button class="varlet-button">按钮</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import context from '../common/context.ts'

export default defineComponent({
  name: 'VarButton',
  setup() {
    console.log(context.zIndex)
    console.log(444224442)
  }
})
</script>

<style scoped lang="less">
@import "../common/var";

.varlet-button {
  color: @color-primary;
}
</style>
