<template>
  <div class="varlet-site" v-if="!isLoading">
    <div class="varlet-site-header">
      <div class="varlet-site-header__logo">
        <img :src="header.logo" alt="" />
        <span>{{ title }}</span>
      </div>
      <div class="varlet-site-header__nav">
        <div class="varlet-site-header__nav-style" @mouseenter="isOpenMenu = true" @mouseleave="isOpenMenu = false">
          <var-icon name="translate" size="26px" color="#666" />

          <var-icon name="chevron-down" color="#666" />

          <transition name="fade">
            <div
              class="language-list var-elevation--5"
              v-show="isOpenMenu"
              :style="{ pointerEvents: isOpenMenu ? 'auto' : 'none' }"
            >
              <var-cell
                v-for="(value, key) in languageList"
                :key="key"
                :class="{ 'language-list__active': language === key }"
                @click="changeLanguage(key)"
              >
                {{ value }}
              </var-cell>
            </div>
          </transition>
        </div>
        <a target="_blank" href="https://github.com/haoziqaq/varlet" class="varlet-site-header__nav-link">
          <var-icon name="github" color="#666" :size="28" />
        </a>
      </div>
    </div>
    <div class="varlet-site-content">
      <div class="varlet-site-nav var-elevation--3" ref="refs">
        <var-cell
          v-for="(item, index) in menu"
          class="varlet-site-nav__item"
          :class="{
            'varlet-site-nav__item--active': item.doc === currentMenuName,
            'varlet-site-nav__link': !item.isTitle,
            'varlet-site-nav__title': item.isTitle,
          }"
          v-ripple="{ touchmoveForbid: false, disabled: !!item.isTitle, color: '#2979ff' }"
          @click="changeRoute(item)"
          :key="index"
        >
          <span v-if="item.isTitle" class="varlet-site-nav__item--title">{{ item.text[language] }}</span>
          <span v-else class="varlet-site-nav__item--link">
            {{ item.text[language] }}
          </span>
        </var-cell>
      </div>
      <div class="varlet-site-code" ref="codeRefs">
        <router-view />
      </div>
      <div class="varlet-site-mobile var-elevation--3">
        <div class="varlet-site-mobile-content">
          <iframe :src="`./mobile.html#/${componentName}?language=${language}&platform=pc&path=${path}`"></iframe>
        </div>
      </div>
    </div>
  </div>
  <var-loading class="varlet-pc__loading" style="color: #2979ff" v-else />
</template>

<script lang="ts">
// @ts-ignore
import config from '@config'
import Ripple from '@varlet/ui/es/ripple'
import Cell from '@varlet/ui/es/cell'
import Icon from '@varlet/ui/es/icon'
import Menu from '@varlet/ui/es/menu'
import Loading from '@varlet/ui/es/loading'
import '@varlet/ui/es/ripple/style'
import '@varlet/ui/es/cell/style'
import '@varlet/ui/es/icon/style'
import '@varlet/ui/es/menu/style'
import '@varlet/ui/es/loading/style'
import { defineComponent, ref, Ref, watch, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'

type Menu = {
  isTitle: boolean
  nonComponent: boolean
  doc: string
  text: Record<string, string>
}

type Header = {
  i18nButton: Record<string, string>
  logo: string
  search: Record<string, string>
}

type Language = Record<string, string>

export default defineComponent({
  directives: { Ripple },
  components: {
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    [Menu.name]: Menu,
    [Loading.name]: Loading,
  },

  setup() {
    const { pc = {}, title: configTitle } = config
    const { header: configHeader = { i18nButton: {}, logo: '', search: {} }, menu: configMenu = [] } = pc
    const menu: Ref<Menu[]> = ref(configMenu)
    const language: Ref<string> = ref('')
    const header: Ref<Header> = ref(configHeader)
    const componentName: Ref<null | string> = ref(null)
    const title: Ref<string> = ref(configTitle)
    const currentMenuName: Ref<string> = ref('')
    const refs: Ref<HTMLElement | null> = ref(null)
    const codeRefs: Ref<HTMLElement | null> = ref(null)
    const route = useRoute()
    const languageList: Ref<Language> = ref(config.pc.header.language)
    const isOpenMenu: Ref<boolean> = ref(false)
    const path: Ref<string | null> = ref(null)
    const isBack: Ref<boolean> = ref(false)
    const isPhone: Ref<boolean> = ref(false)
    const isLoading: Ref<boolean> = ref(true)

    isPhone.value = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

    const judgmentType = (type: string) => {
      const [, languageValue, componentValue] = window.location.hash.split('/')

      isLoading.value = false

      path.value = componentValue || 'home'

      if (type && isPhone.value) {
        window.location.href = `./mobile.html#/${path.value}?language=${
          languageValue || 'zh-CN'
        }&platform=mobile&path=${path.value}`
      }

      nextTick(() => {
        const childrenElement = refs.value.getElementsByClassName('var-cell')
        const index = menu.value.findIndex((item) => item.doc === componentValue)

        if (index !== -1) {
          childrenElement[index].scrollIntoView({
            block: 'center',
            inline: 'start',
          })
        }
      })
    }

    const changeRoute = (item) => {
      const [, , componentValue] = window.location.hash.split('/')
      if (item.isTitle || componentValue === item.doc) {
        return false
      }

      codeRefs.value.scrollTop = 0
      isBack.value = false
      componentName.value = item.doc
      path.value = item.doc
    }

    const changeLanguage = (key) => {
      language.value = key
      componentName.value = route.fullPath.split('/')[2]
      isOpenMenu.value = false
    }

    onMounted(() => {
      judgmentType('mounted')
    })

    watch(
      () => route.path,
      (to: string) => {
        if (to === '/') return

        const [, languageValue, name] = to.split('/')
        currentMenuName.value = name
        language.value = languageValue
        document.title = config.pc.title[languageValue]

        const currentNonComponent = menu.value.find((c) => c.doc === currentMenuName.value)?.nonComponent ?? false
        componentName.value = currentNonComponent ? 'home' : currentMenuName.value

        isBack.value ? judgmentType('') : (isBack.value = true)
      },
      { immediate: true }
    )

    return {
      menu,
      language,
      header,
      componentName,
      currentMenuName,
      title,
      languageList,
      isOpenMenu,
      isLoading,
      path,
      codeRefs,
      refs,
      changeRoute,
      changeLanguage,
    }
  },
})
</script>

<style>
.hljs {
  background: transparent !important;
  padding: 0 !important;
  border-radius: 4px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
}
</style>

<style lang="less">
@import './App.less';
</style>
