<template>
  <div class="varlet-site" v-if="!isLoading">
    <div class="varlet-site-header var-elevation--1">
      <span class="varlet-site-header__logo">
        <img :src="header.logo" alt="" />
        <span>{{ title }}</span>
      </span>
      <div class="varlet-site-header__nav">
        <div class="varlet-site-header__nav-style" @mouseenter="isOpenMenu = true" @mouseleave="isOpenMenu = false">
          <var-icon name="translate" size="26px" color="#ffffff" />

          <var-icon name="chevron-down" color="#ffffff" />

          <transition name="fade">
            <div class="language-list" v-if="isOpenMenu">
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
        <div class="varlet-site-header__nav-link">
          <a target="_blank" href="https://github.com/haoziqaq/varlet" class="varlet-site-header__link">
            <var-icon name="github" color="#ffffff" :size="28"></var-icon>
          </a>
        </div>
      </div>
    </div>
    <div class="varlet-site-content">
      <div class="varlet-site-nav" :ref="nav">
        <var-cell
          v-for="item in menu"
          class="varlet-site-nav__item"
          :class="{
            'varlet-site-nav__item--active': item.doc === currentMenuName,
            'varlet-site-nav__link': !item.isTitle,
          }"
          v-ripple="{ touchmoveForbid: false, disabled: !!item.isTitle, color: '#2979ff' }"
          @click="changeRoute(item)"
        >
          <span v-if="item.isTitle" class="varlet-site-nav__item--title">{{ item.text[language] }}</span>
          <span v-else class="varlet-site-nav__item--link">
            {{ item.text[language] }}
          </span>
        </var-cell>
      </div>
      <router-view />
      <div class="varlet-site-mobile">
        <div class="varlet-site-empty"></div>
        <div class="varlet-site-mobile-content">
          <iframe :src="`./mobile.html#/${componentName}?language=${language}&platform=pc&path=${path}`"></iframe>
        </div>
        <div class="varlet-site-mobile-image">
          <img src="./assets/images/mobile.png" />
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
    const menu: Ref<Menu[]> = ref([])
    const language: Ref<string> = ref('')
    const header: Ref<Header> = ref({ i18nButton: {}, logo: '', search: {} })
    const componentName: Ref<null | string> = ref(null)
    const title: Ref<string> = ref('')
    const currentMenuName: Ref<string> = ref('')
    const isHideVersion: Ref<boolean> = ref(true)
    let refs: HTMLElement = ref(null)
    const route = useRoute()
    const { pc = {}, title: configTitle } = config
    const { header: configHeader = { i18nButton: {}, logo: '', search: {} }, menu: configMenu = [] } = pc
    const languageList: Ref<Language> = ref({})
    const isOpenMenu: Ref<boolean> = ref(false)
    const path: Ref<string | null> = ref(null)
    const isBack: Ref<boolean> = ref(false)
    const isPhone: Ref<boolean> = ref(false)
    const isLoading: Ref<boolean> = ref(true)

    isPhone.value = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
    languageList.value = config.pc.header.language

    const nav = (element: HTMLElement) => {
      refs = element
    }

    const judgmentType = (type) => {
      let [, languageValue, componentValue] = window.location.hash.split('/')

      isLoading.value = false

      if (type) {
        path.value = componentValue || 'home'

        if (isPhone.value) {
          window.location.href = `./mobile.html#/${componentValue || 'home'}?language=${
            languageValue || 'zh-CN'
          }&platform=mobile&path=${componentValue || 'home'}`
        }
      }

      nextTick(() => {
        let childrenElement = refs.getElementsByClassName('var-cell')
        let index = menu.value.findIndex((item) => item.doc === componentValue)

        if (index !== -1) {
          childrenElement[index].scrollIntoView({
            block: 'center',
            inline: 'start',
          })
        }
      })
    }

    menu.value = configMenu
    header.value = configHeader
    title.value = configTitle

    const changeRoute = (item) => {
      if (item.isTitle) {
        return false
      }

      isBack.value = false
      componentName.value = item.nonComponent ? 'home' : item.doc
      path.value = item.nonComponent ? item.doc : null
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
        if (to === '/') {
          return
        }

        let [, languageValue, name] = to.split('/')
        currentMenuName.value = name
        language.value = languageValue

        isBack.value ? judgmentType('') : (isBack.value = true)

        if (!window['enableWatchURL']) {
          window['enableWatchURL'] = true
          return
        }

        const currentNonComponent = menu.value.find((c) => c.doc === currentMenuName.value)?.nonComponent ?? false
        componentName.value = currentNonComponent ? 'home' : currentMenuName.value
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
      isHideVersion,
      languageList,
      isOpenMenu,
      isLoading,
      path,
      nav,
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
@import '~@varlet/ui/es/styles/var';
@import '~@varlet/ui/es/styles/elevation';

body {
  min-width: 1200px;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
}

.varlet {
  &-pc__loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &-site {
    &-mobile {
      flex: 0 0 432px;
      transform: scale(0.88) translateZ(0);
      position: relative;
      height: 863px;
      align-self: center;

      &-content {
        height: 780px;
        position: absolute;
        z-index: -2;
        top: 57px;
        width: calc(100% - 57px);
        margin-left: 28px;
      }

      &-image {
        width: 100%;
        pointer-events: none;
        height: 100%;
        top: 0;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    @media screen and (max-width: 1280px) {
      &-mobile {
        transform: scale(0.66) translateZ(0);
      }
    }

    @media screen and (min-width: 1281px) and (max-width: 1600px) {
      &-mobile {
        transform: scale(0.7) translateZ(0);
      }
    }

    &-empty {
      height: 33px;
      width: calc(100% - 40px);
      margin-left: 20px;
      background-color: @color-primary;
      position: absolute;
      top: 26px;
      z-index: -1;
    }

    &-header {
      background-color: @color-primary;
      display: flex;
      align-items: center;
      color: white;
      height: 60px;
      padding: 0 30px;
      justify-content: space-between;
      user-select: none;
      position: relative;
      z-index: 2;

      &__logo {
        display: flex;
        align-items: center;

        img {
          width: 24px;
          margin-right: 10px;
        }

        span {
          font-size: 22px;
        }
      }

      &__nav {
        display: flex;
        align-items: center;

        .var-menu {
          background: transparent;
          margin-right: 20px;
          cursor: pointer;
        }

        &-style {
          border-radius: 3px;
          height: 40px;
          display: flex;
          align-items: center;
          padding: 0 10px;
          position: relative;
          cursor: pointer;

          &:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        }

        &-link {
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;

          a {
            text-decoration: none;
          }

          &:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        }
      }

      &__cube {
        display: inline-block;
        padding: 0 12px;
        color: #fff;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 20px;
        outline: none;
        cursor: pointer;
        background: transparent;
        transition: 0.3s ease-in-out;
      }

      &__version {
        margin-right: 24px;
        position: relative;
        padding-right: 20px;

        &::after {
          position: absolute;
          top: 7px;
          right: 7px;
          width: 5px;
          height: 5px;
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid;
          border-color: transparent transparent currentColor currentColor;
          transform: rotate(-45deg);
          content: '';
        }
      }

      &__version-pop {
        position: absolute;
        top: 30px;
        right: 0;
        left: 0;
        z-index: 99;
        color: #333;
        line-height: 36px;
        text-align: left;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 12px #ebedf0;
        transform-origin: top;
        transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      &__version-pop-hidden {
        transform: scaleY(0);
        opacity: 0;
      }

      &__version-pop-item {
        padding-left: 12px;
        display: inline-block;
        width: 100%;
        transition: 0.2s;

        &:hover {
          color: #1989fa;
        }
      }
    }

    &-content {
      height: calc(100vh - 60px);
      display: flex;
      background: #fff;
      //overflow: hidden;
    }

    &-doc {
      flex: 1 0 0;
      min-width: 500px;
      padding-left: 30px;
      overflow-y: auto;
      overflow-x: hidden;

      &::-webkit-scrollbar {
        display: none;
      }

      a {
        margin: 0 1px;
        color: #1989fa;
        text-decoration: none;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: #323233;
        font-weight: normal;
        line-height: 1.5;
      }

      h1 {
        //margin: 0 0 30px;
        line-height: 40px;
        font-size: 30px;
        cursor: default;
      }

      h2 {
        margin: 30px 0 20px;
        font-size: 25px;
      }

      h3 {
        margin-bottom: 16px;
        font-size: 18px;
      }

      p {
        color: #888;
        font-size: 15px;
        line-height: 26px;
        padding: 16px;
        border-left: 4px solid #1d92e9;
        border-radius: 4px;
        background: #fff;
        box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
      }

      pre {
        margin: 20px 0 0;
      }

      code {
        position: relative;
        display: block;
        padding: 16px;
        overflow-x: auto;
        color: #58727e;
        font-weight: 400;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        line-height: 26px;
        white-space: pre-wrap;
        word-wrap: break-word;
        background-color: #fff;
      }

      p code,
      li code,
      table code {
        display: inline;
        margin: 0 2px;
        padding: 2px 5px;
        font-size: 14px;
        font-family: inherit;
        word-break: keep-all;
        color: @color-primary;
        -webkit-font-smoothing: antialiased;
      }

      table {
        width: 100%;
        margin-top: 12px;
        color: #34495e;
        font-size: 14px;
        line-height: 1.5;
        border-collapse: collapse;

        th {
          padding: 8px 10px;
          font-weight: 600;
          text-align: left;

          &:first-child {
            padding-left: 0;
          }
        }

        td {
          padding: 8px;
          border-top: 1px solid #f1f4f8;

          code {
            white-space: nowrap;
          }

          &:first-child {
            padding-left: 0;

            code {
              margin: 0;
              padding: 2px 6px;
              color: #1989fa;
              font-weight: 600;
              font-size: 11px;
              background-color: rgba(25, 137, 250, 0.1);
              border-radius: 20px;
            }
          }
        }

        em {
          color: #4fc08d;
          font-size: 14px;
          font-family: 'Roboto', sans-serif;
          font-style: normal;
        }
      }

      .card {
        margin-bottom: 24px;
        padding: 0 4px;
      }
    }

    &-nav {
      padding: 10px 0;
      position: sticky;
      flex: 0 0 220px;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      overflow-y: scroll;
      box-shadow: 0 8px 12px #ebedf0;
      background: #fff;

      &::-webkit-scrollbar {
        display: none;
      }

      &__item {
        margin: 0;
        user-select: none;

        &--title {
          font-weight: 500;
          font-size: 16px;
        }

        &--link {
          font-size: 14px;
          color: #455a64;
          transition: color 0.2s;

          &:hover {
            color: @color-primary;
          }
        }

        &--active {
          position: relative;
          background: #2b79fc21;

          span {
            color: @color-primary;
          }

          &::before {
            display: block;
            content: '';
            background: @color-primary;
            width: 4px;
            height: 40px;
            position: absolute;
            left: 0;
          }
        }
      }

      &__link {
        cursor: pointer;
      }
    }
  }
}

.language-list {
  background: #fff;
  cursor: pointer;
  color: #666;
  border-radius: 2px;
  position: absolute;
  top: 40px;
  left: 0;

  &__active {
    background: #2b79fc21;
    color: @color-primary;
  }

  .var-cell {
    &:hover {
      background: #2b79fc21;
      color: @color-primary;
    }
  }
}

.fade-enter-active {
  animation-name: fade-in;
  animation-duration: 0.5s;
}

.fade-leave-active {
  animation-name: fade-leave;
  animation-duration: 0.5s;
}

@keyframes fade-in {
  0% {
    top: 30px;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}

@keyframes fade-leave {
  0% {
    top: 40px;
    opacity: 1;
  }
  100% {
    top: 30px;
    opacity: 0;
  }
}
</style>
