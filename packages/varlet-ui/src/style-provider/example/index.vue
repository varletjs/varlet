<template>
  <var-style-provider :theme-vars="styles">
    <var-cell border> test </var-cell>
    <var-cell border> test </var-cell>
  </var-style-provider>
</template>

<script>
import Cell from '../../cell'
import StyleProvider from '../index'

export default {
  name: 'StyleProviderExample',
  components: {
    [Cell.name]: Cell,
    [StyleProvider.name]: StyleProvider,
  },
  setup() {
    const styles = {
      cellFontSize: '30px',
      cellBorderColor: 'red'
    }

    return {
      styles
    }
  },
}
</script>
