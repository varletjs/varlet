<template>
  <app-type></app-type>
  <var-collapse-menu-group />
</template>

<script>
import CollapseMenuGroup from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'CollapseMenuGroupExample',
  components: {
    [CollapseMenuGroup.name]: CollapseMenuGroup,
    AppType,
  },
  setup() {
    watchLang(use)

    return {
      pack,
    }
  },
}
</script>
