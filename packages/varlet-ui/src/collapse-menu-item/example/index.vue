<template>
  <app-type></app-type>
  <var-collapse-menu-item />
</template>

<script>
import CollapseMenuItem from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'CollapseMenuItemExample',
  components: {
    [CollapseMenuItem.name]: CollapseMenuItem,
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
