<template>
  <div class="var-button-group"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'

export default defineComponent({
  name: 'VarButtonGroup',
  props,
})
</script>

<style lang="less">
@import './buttonGroup.less';
</style>
