<template>
  <div style="position: relative">
    <header>
      <div class="mobile-header__return" v-if="isPhone" @click="toHome">
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
import { defineComponent, onMounted, ref, Ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Icon from '@varlet/ui/es/icon'

export default defineComponent({
  components: {
    [Icon.name]: Icon,
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

    const judgmentType = () => {
      let hashValue = window.location.hash.split('/')[1].split('?')
      let componentValue = hashValue[0]
      let languageValue = hashValue[1].split('=')[1].split('&')[0]
      if (!isPhone.value && window.self === window.top) {
        window.location.href = `/#/${languageValue}/${componentValue}`
      }
    }

    onMounted(() => {
      judgmentType()
    })

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
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: @color-primary;
  color: #fff;
  font-size: 18px;
  line-height: 40px;
  height: 40px;
  position: fixed;
  z-index: 99;
  width: 100%;
  font-weight: bold;

  .mobile-header__return {
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
