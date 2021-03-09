<template>
  <div style="position: relative">
    <header>
      <div class="mobile-header--return" v-if="isIphone" @click="toHome">
        <var-icon name="chevron-left" size="30px" color="#ffffff"></var-icon>
      </div>
      {{ componentName }}
    </header>
    <div class="router-view__block">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Icon from '@varlet/ui/es/icon'

export default defineComponent({
  components: {
    [Icon.name]: Icon,
  },
  setup() {
    const componentName: Ref<string> = ref('')
    const route = useRoute()
    const isIphone: Ref<boolean> = ref(false)
    isIphone.value = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
    const toHome = () => {
      // todo 返回首页
      alert('返回首页')
    }
    watch(
      () => route.path,
      (to: string) => {
        const index = to.lastIndexOf('/')
        const componentNameInner = to.slice(index + 1).replace(/-([a-z])/g, (all: string, i: string) => i.toUpperCase())
        componentName.value = componentNameInner[0]?.toUpperCase() + componentNameInner.slice(1)
      }
    )

    return {
      componentName,
      isIphone,
      toHome,
    }
  },
})
</script>

<style lang="less">
@import '~@varlet/ui/es/styles/var';

body {
  margin: 0;
  padding: 0;
  background: white;
  min-height: 100%;
  font-family: 'Roboto', 'Noto Sans SC', serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}

header {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: @color-primary;
  color: #fff;
  font-size: 18px;
  line-height: 40px;
  height: 40px;
  position: fixed;
  z-index: 1;
  width: 100%;
  font-weight: bold;

  .mobile-header--return {
    position: absolute;
    height: 40px;
    line-height: 40px;
    width: 40px;
    text-align: center;
    top: 0;
    left: 4px;

    i {
      height: 40px;
      line-height: 40px;
    }
  }
}

.router-view__block {
  padding: 45px 15px 30px;
}

* {
  box-sizing: border-box;
}
</style>
