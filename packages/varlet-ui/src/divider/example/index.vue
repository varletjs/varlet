<template>
  <div>
    <app-type>{{ pack.basicUsage }}</app-type>
    <p>{{ pack.basicTextUp }}</p>
    <var-divider />
    <p>{{ pack.basicTextDown }}</p>
  </div>
  <div>
    <app-type>{{ pack.inset }}</app-type>
    <var-divider inset />
    <var-divider :inset="36" margin="36px 0" />
    <var-divider :inset="-36" />
  </div>
  <div>
    <app-type>{{ pack.verticalDivider }}</app-type>
    <div class="vertical-divider-wrapper" :style="{ height: '32px' }">
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
    <app-type>{{ pack.withDesc }}</app-type>
    <var-divider :description="pack.withDescText" />
  </div>
  <div>
    <app-type>{{ pack.custom }}</app-type>
    <var-divider>
      <span :style="{ fontSize: '16px', padding: '0 18px', color: 'red' }">{{ pack.customContent }}</span>
    </var-divider>
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
  align-items: center;
  justify-content: center;
  color: #333;
}
</style>
