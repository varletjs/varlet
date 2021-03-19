<template>
  <div style="position: relative">
    <header>
      <var-app-bar :title="componentName" title-position="center">
        <template #left>
          <var-button round @click="toHome" color="transparent" text-color="#ffffff" text>
            <var-icon name="chevron-left" :size="28" />
          </var-button>
        </template>
      </var-app-bar>
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
import AppBar from '@varlet/ui/es/app-bar'
import Button from '@varlet/ui/es/button'
import '@varlet/ui/es/icon/style'
import '@varlet/ui/es/app-bar/style'
import '@varlet/ui/es/button/style'

export default defineComponent({
  components: {
    [Icon.name]: Icon,
    [AppBar.name]: AppBar,
    [Button.name]: Button,
  },
  setup() {
    const componentName: Ref<string> = ref('')
    const route = useRoute()

    const isPhone: Ref<boolean> = ref(false)
    isPhone.value = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

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
      isPhone,
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
  font-family: 'Roboto', 'Noto Sans SC', sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}

header {
  position: fixed;
  z-index: 99;
  width: 100%;
  font-weight: bold;
}

.router-view__block {
  padding: 50px 15px 0;
}

* {
  box-sizing: border-box;
}
</style>
