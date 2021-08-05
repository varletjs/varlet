<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-swipe class="swipe" ref="swipe">
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
    </var-swipe-item>
  </var-swipe>

  <app-type>{{ pack.forbidLoop }}</app-type>
  <var-swipe class="swipe" :loop="false">
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
    </var-swipe-item>
  </var-swipe>

  <app-type>{{ pack.autoplay }}</app-type>
  <var-swipe class="swipe" :autoplay="2000">
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
    </var-swipe-item>
  </var-swipe>

  <app-type>{{ pack.vertical }}</app-type>
  <var-swipe class="swipe" vertical>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
    </var-swipe-item>
  </var-swipe>

  <app-type>{{ pack.handleChange }}</app-type>
  <var-swipe class="swipe" @change="Snackbar">
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
    </var-swipe-item>
  </var-swipe>

  <app-type>{{ pack.customIndicator }}</app-type>
  <var-swipe class="swipe">
    <template #default>
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
      </var-swipe-item>
    </template>

    <template #indicator="{ index, length }">
      <div class="indicators">{{ index + 1 }} / {{ length }}</div>
    </template>
  </var-swipe>

  <div class="space"></div>
</template>

<script>
import Swipe from '..'
import SwipeItem from '../../swipe-item'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Snackbar from '../../snackbar'
import { use, pack } from './locale'
import { watchLang } from '@varlet/cli/site/utils'

export default {
  name: 'SwipeExample',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    AppType,
  },
  setup() {
    watchLang(use)

    return {
      pack,
      Snackbar,
    }
  },
}
</script>

<style scoped lang="less">
.swipe {
  height: 160px;
}

.swipe-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.space {
  height: 20px;
}

.indicators {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 4px 0;
  color: #fff;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.6);
}
</style>
