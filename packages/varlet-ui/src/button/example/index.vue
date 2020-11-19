<template>
	<varlet-button></varlet-button>
</template>

<script>
import Button from '..'

export default {
	name: 'Index',
  components: {
	  [Button.name]: Button
  }
}
</script>

<style scoped>
.button {
	background: antiquewhite;
}
</style>
