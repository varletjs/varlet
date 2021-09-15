<template>
  <b-button color="#03A9F4">组件库从我开始</b-button>
</template>

<script>
import Button from '../Button'

export default {
  name: 'ModifyColor',
  components: {
    [Button.name]: Button
  }
}
</script>
