<template>
  <var-style-provider />
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import StyleProvider from '../index'

export default {
  name: 'StyleProviderExample',
  components: {
    [StyleProvider.Component.name]: StyleProvider.Component,
    AppType,
  },
  setup() {
    return {}
  },
}
</script>
