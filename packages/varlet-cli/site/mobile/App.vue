<template>
  <div style="position: relative">
    <header>
      <var-app-bar :title="componentName" title-position="center">
        <template #left v-if="isReturnIcon">
          <var-button round @click="toHome" color="transparent" text-color="#fff" text>
            <var-icon name="chevron-left" :size="28" />
          </var-button>
        </template>
        <template #right>
          <var-menu :offset-y="38" v-model:show="showMenu" style="background: transparent">
            <var-button text color="transparent" text-color="#fff" @click="showMenu = true">
              <var-icon name="translate" :size="24" />
              <var-icon name="chevron-down" :size="24" />
            </var-button>

            <template #menu>
              <div style="background: #fff">
                <var-cell
                  v-for="(value, key) in languageList"
                  :key="key"
                  v-ripple
                  :style="{ color: language === key ? '#2979ff' : '#666' }"
                  @click="changeLanguage(key)"
                >
                  {{ value }}
                </var-cell>
              </div>
            </template>
          </var-menu>
        </template>
      </var-app-bar>
    </header>
    <div class="router-view__block">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import config from '@config'
import { defineComponent, ref, Ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Icon from '@varlet/ui/es/icon'
import AppBar from '@varlet/ui/es/app-bar'
import Button from '@varlet/ui/es/button'
import Menu from '@varlet/ui/es/menu'
import Cell from '@varlet/ui/es/cell'
import Ripple from '@varlet/ui/es/ripple'
import '@varlet/ui/es/icon/style'
import '@varlet/ui/es/app-bar/style'
import '@varlet/ui/es/button/style'
import '@varlet/ui/es/menu/style'
import '@varlet/ui/es/cell/style'
import { watchLang, getHashSearch } from '@varlet/ui/src/utils/components'

type Language = Record<string, string>

export default defineComponent({
  directives: { Ripple },
  components: {
    [Icon.name]: Icon,
    [AppBar.name]: AppBar,
    [Button.name]: Button,
    [Menu.name]: Menu,
    [Cell.name]: Cell,
  },
  setup() {
    const componentName: Ref<string> = ref('')
    const route = useRoute()
    const isReturnIcon: Ref<boolean> = ref(false)
    const showMenu: Ref<boolean> = ref(false)
    const language: Ref<string> = ref('')
    const languageList: Ref<Language> = ref(config.pc.header.language)

    const isPhone: Ref<boolean> = ref(false)
    isPhone.value = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

    const changeLanguage = (key) => {
      const CName = getHashSearch().get('path')
      language.value = key
      showMenu.value = false

      window.location.href = `./mobile.html#/${CName}?language=${key}&platform=mobile&path=${CName}`
    }

    watchLang((newValue) => {
      language.value = newValue
    })

    const toHome = () => {
      window.location.href = `./mobile.html#/home?language=${language.value}&platform=mobile&path=home`
    }

    const getCName = (name: string) => {
      const noComponentList = ['Quickstart', 'ImportOnDemand', 'BrowserAdaptation', 'CustomTheme', 'Locale', 'Highlight', 'DeveloperGuide']
      if (noComponentList.includes(name)) return 'Home'

      return name
    }

    watch(
      () => route.path,
      (to: string) => {
        const index = to.lastIndexOf('/')
        const componentNameInner = to.slice(index + 1).replace(/-([a-z])/g, (all: string, i: string) => i.toUpperCase())
        const name = componentNameInner[0]?.toUpperCase() + componentNameInner.slice(1)

        componentName.value = getCName(name)
        isReturnIcon.value = !(componentName.value.toLowerCase() === 'home')
      }
    )

    return {
      componentName,
      isPhone,
      isReturnIcon,
      toHome,
      showMenu,
      languageList,
      language,
      changeLanguage
    }
  },
})
</script>

<style lang="less">
@import '~@varlet/ui/es/styles/var';

body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: 'Roboto', sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #333;
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
  padding: 50px 12px 15px;
}

* {
  box-sizing: border-box;
}
</style>
