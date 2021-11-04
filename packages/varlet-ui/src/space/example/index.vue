<template>
  <app-type>{{ pack.baseUse }}</app-type>
  <var-space>
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
  </var-space>

  <app-type>{{ pack.vertical }}</app-type>
  <var-space direction="column">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
  </var-space>

  <app-type>{{ pack.space }}</app-type>
  <var-space :size="['30px', '10px']">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
  </var-space>

  <app-type>{{ pack.rightAlign }}</app-type>
  <var-space justify="end">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>
</template>
<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarSpace from '..'
import VarButton from '../../button'
import { pack, use } from './locale'
import { watchLang } from '@varlet/cli/site/utils'

export default {
  components: { VarSpace, VarButton, AppType },
  setup() {
    watchLang(use)
    return {
      pack,
    }
  },
}
</script>
