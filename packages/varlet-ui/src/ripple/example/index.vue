<template>
  <div class="example">
    <app-type>基本使用</app-type>
    <div class="example__button" v-ripple>基本使用</div>

    <app-type>修改颜色</app-type>
    <div class="example__button" v-ripple="{ color: 'red' }">修改颜色</div>
  </div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import Ripple from '..'

	export default defineComponent({
		name: 'RippleExample',
		directives: {
			Ripple
		}
	})
</script>

<style scoped lang="less">
  .example {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;

    &__button {
      width: 200px;
      height: 70px;
      box-shadow: 0 0 3px 3px #ddd;
      text-align: center;
      line-height: 70px;
      box-sizing: border-box;
      margin-bottom: 20px;
    }
  }
</style>
