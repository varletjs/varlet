<template>
	<var-image
		width="200px"
		height="400px"
		fit="cover"
		loading="https://cn.vuejs.org/images/logo.png"
		error="https://cn.vuejs.org/images/logo.png"
		src="https://cn.vuejs.org/images/logo.png"
		:ripple="true"
	/>

	<var-image
		width="100px"
		height="400px"
		fit="cover"
		loading="https://cn.vuejs.org/images/logo.png"
		error="https://cn.vuejs.org/images/logo.png"
		src="https://cn.vuejs.org/images/logo.png"
		:ripple="true"
		:block="false"
	/>
	<var-image
		width="100px"
		height="400px"
		fit="cover"
		loading="https://cn.vuejs.org/images/logo.png"
		error="https://cn.vuejs.org/images/logo.png"
		src="https://cn.vuejs.org/images/logo.png"
		:ripple="true"
		:block="false"
	/>

	<var-image
		width="200px"
		height="400px"
		fit="cover"
		loading="https://cn.vuejs.org/images/logo2222.png"
		error="https://cn.vuejs.org/images/logo123123.png"
		src="https://cn.vuejs.org/images/logo12312.png"
		:ripple="true"
		@load="handleLoad"
		@error="handleError"
	/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Image from '..'

export default defineComponent({
  name: 'ImageExample',
  components: {
    [Image.name]: Image,
  },
  setup() {
    return {
      handleLoad(e: Event, state: string) {
        console.log(e)
        console.log(state)
      },
      handleError(e: Event, state: string) {
        console.log(e)
        console.log(state)
      },
    }
  },
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
