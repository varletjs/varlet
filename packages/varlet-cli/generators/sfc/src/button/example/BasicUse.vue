<template>
  <b-button>组件库从我开始</b-button>
</template>

<script>
import Button from '../Button'

export default {
  name: 'BasicUse',
  components: {
    [Button.name]: Button
  }
}
</script>
