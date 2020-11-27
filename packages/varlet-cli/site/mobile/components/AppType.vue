<template>
  <div class="app-type">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppType',
})
</script>

<style lang="less">
.app-type {
  padding: 14px;
  color: #888;
  font-size: 14px;
}
</style>
