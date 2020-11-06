<template>
  <div class="main-container">
    <var-button></var-button>
  </div>
</template>

<script>
import VarButton from '../../../es/button'
import '../../../es/button/style'

export default {
  name: 'Example',
  components: {
    [VarButton.name]: VarButton
  }
}
</script>

<style scoped lang="less">
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}
</style>
