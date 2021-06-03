<template>
  <div>
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-divider />
    <var-divider inset />
    <var-divider :inset="24" />
  </div>
  <div>
    <app-type>{{ pack.verticalDivider }}</app-type>
    <div class="vertical-divider-wrapper">
      <var-button text disabled>
        {{ pack.btnText }}
      </var-button>
      <var-divider vertical />
      <var-button text type="primary">
        {{ pack.btnLinkText }}
      </var-button>
      <var-divider vertical />
      <var-button text>
        <var-icon name="github" />
      </var-button>
    </div>
  </div>
  <div>
    <app-type>{{ pack.dividerWithDesc }}</app-type>
    <var-divider>{{ pack.dividerWithDescText }}</var-divider>
  </div>
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'
import Divider from '..'
import AppBar from '../../app-bar'
import Icon from '../../icon'
import Button from '../../button'

export default {
  name: 'DividerExample',
  components: {
    [Icon.name]: Icon,
    [Image.name]: Image,
    [AppBar.name]: AppBar,
    [Button.name]: Button,
    [Divider.name]: Divider,
    AppType,
  },
  setup() {
    watchLang(use)

    const handleClick = () => {
      window.open('https://github.com/haoziqaq/varlet')
    }

    return {
      pack,
      handleClick,
    }
  },
}
</script>

<style lang="less" scoped>
.vertical-divider-wrapper {
  display: flex;
  justify-content: center;
}
</style>
