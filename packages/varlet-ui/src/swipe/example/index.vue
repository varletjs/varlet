<script setup>
import VarSwipe from '..'
import VarSwipeItem from '../../swipe-item'
import Snackbar from '../../snackbar'
import { ref } from 'vue'
import { AppType, watchLang } from '@varlet/cli/client'
import { use, pack } from './locale'

const swipeRef = ref(null)

watchLang(use)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-swipe class="swipe">
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
  <var-swipe class="swipe" @change="(index) => Snackbar(String(index))">
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
  <var-swipe ref="swipeRef" class="swipe">
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" />
    </var-swipe-item>
    <template #indicator="{ index, length }">
      <div
        class="swipe-indicators-left"
        :class="index === 0 ? 'swipe-active-indicator' : 'swipe-inactive-indicator'"
        @click="index !== 0 && swipeRef.prev()"
      >
        <var-icon name="chevron-left" />
      </div>
      <div
        class="swipe-indicators-right"
        :class="index === length - 1 ? 'swipe-active-indicator' : 'swipe-inactive-indicator'"
        @click="index !== length - 1 && swipeRef.next()"
      >
        <var-icon name="chevron-right" />
      </div>
    </template>
  </var-swipe>

  <div class="space"></div>
</template>

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

.swipe-indicators-left {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  text-align: center;
  padding: 4px 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
}

.swipe-indicators-right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  padding: 4px 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
}

.swipe-active-indicator {
  color: #5d5d5d;
}

.swipe-inactive-indicator {
  color: #e5e5e5;
}
</style>
