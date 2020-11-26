<template>
  <div class="example">
    <div v-varlet-ripple class="example__button">长按钮水波纹</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VarletRipple from '..'

export default defineComponent({
  name: 'RippleExample',
  directives: {
    VarletRipple
  }
})
</script>

<style scoped lang="less">
.example {

  &__button {
    width: 200px;
    height: 70px;
    border-radius: 20px;
    border: 1px solid #ddd;
    box-shadow: 0 0 0 1px #ddd;
    text-align: center;
    line-height: 70px;
    box-sizing: border-box;
  }
}
</style>
