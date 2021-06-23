<template>
  <var-style-provider :style-vars="styles">
    <var-cell border> test </var-cell>
    <var-cell border> test </var-cell>
  </var-style-provider>
</template>

<script>
import { onMounted, ref } from 'vue'
import Cell from '../../cell'
import StyleProvider from '../index'

export default {
  name: 'StyleProviderExample',
  components: {
    [Cell.name]: Cell,
    [StyleProvider.name]: StyleProvider,
  },
  setup() {
    const styles = ref({})

    onMounted(() => {
      setTimeout(() => {
        styles.value = {
          cellFontSize: '30px',
          cellBorderColor: 'red'
        }
      }, 1500)
    })

    return {
      styles
    }
  },
}
</script>
