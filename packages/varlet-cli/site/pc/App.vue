<template>
  <div class="varlet-site">
    <div class="varlet-site-header var-elevation--1">
      <span class="varlet-site-header__logo">
        <img :src="header.logo" alt="" />
        <span>{{ title }}</span>
      </span>
      <span class="varlet-site-header__nav">
        <var-menu :offset-y="38" :offset-x="-20" v-model:show="offsetY">
          <var-icon name="translate" size="26px" color="#ffffff" @click="offsetY = true"></var-icon>
          <template #menu>
            <div class="language-list">
              <var-cell
                v-for="(value, key) in languageList"
                :key="key"
                :class="{ 'language-list__active': language === key }"
                @click="changeLanguage(key)"
              >
                {{ value }}
              </var-cell>
            </div>
          </template>
        </var-menu>
        <a target="_blank" href="https://github.com/haoziqaq/varlet" class="varlet-site-header__link">
          <var-icon name="github" color="#ffffff" :size="28"></var-icon>
        </a>
      </span>
    </div>
    <div class="varlet-site-content">
      <div class="varlet-site-nav" :ref="nav">
        <var-cell
          v-for="item in menu"
          class="varlet-site-nav__item"
          :class="{
            'varlet-site-nav__item--active': item.doc === componentName,
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
</template>

<script lang="ts">
// @ts-ignore
import config from '@config'
import Ripple from '@varlet/ui/es/ripple'
import Cell from '@varlet/ui/es/cell'
import Icon from '@varlet/ui/es/icon'
import Menu from '@varlet/ui/es/menu'
import '@varlet/ui/es/ripple/style'
import '@varlet/ui/es/cell/style'
import '@varlet/ui/es/icon/style'
import '@varlet/ui/es/menu/style'
import { defineComponent, ref, Ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

type Menu = {
  isTitle: boolean
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
  },
  setup() {
    const menu: Ref<Menu[]> = ref([])
    const language: Ref<string> = ref('')
    const header: Ref<Header> = ref({ i18nButton: {}, logo: '', search: {} })
    const componentName: Ref<null | string> = ref(null)
    const title: Ref<string> = ref('')
    const versionList: Ref<string[]> = ref(['2.10.14', '1.x', '3.x'])
    const isHideVersion: Ref<boolean> = ref(true)
    let refs: HTMLElement = ref(null)
    const route = useRoute()
    const { pc = {}, title: configTitle } = config
    const { header: configHeader = { i18nButton: {}, logo: '', search: {} }, menu: configMenu = [] } = pc
    const languageList: Ref<Language> = ref({})
    const offsetY: Ref<boolean> = ref(false)
    const path: Ref<string | null> = ref(null)

    const isPhone: Ref<boolean> = ref(false)
    isPhone.value = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

    languageList.value = config.pc.header.language

    const nav = (element: HTMLElement) => {
      refs = element
    }

    const judgmentType = () => {
      let componentValue = ''
      let languageValue = ''
      componentValue = window.location.hash.split('/')[2]
      languageValue = window.location.hash.split('/')[1]
      if (isPhone.value) {
        window.location.href = `/mobile.html#/${componentValue}?language=${languageValue}&platform=pc&path=${componentValue}`
      }
      let childrenElement = refs.getElementsByClassName('var-cell')
      let index = menu.value.findIndex((item) => item.doc === componentValue)
      path.value = componentValue
      if (index !== -1) {
        childrenElement[index].scrollIntoView({
          block: 'center',
          inline: 'start',
        })
      }
    }
    menu.value = configMenu
    header.value = configHeader
    title.value = configTitle

    const changeRoute = (item) => {
      if (item.isTitle) {
        return false
      }
      componentName.value = item.nonComponent ? 'home' : item.doc
      path.value = item.nonComponent ? item.doc : null
    }

    const changeLanguage = (key) => {
      language.value = key
      const pathArr = route.fullPath.split('/')
      componentName.value = pathArr[pathArr.length - 1]
      offsetY.value = false
    }

    onMounted(() => {
      judgmentType()
    })

    watch(
      () => route.path,
      (to: string) => {
        componentName.value = to.slice(to.lastIndexOf('/') + 1)
        language.value = to.slice(to.indexOf('#/') + 2, to.lastIndexOf('/'))
      },
      { immediate: true }
    )

    return {
      menu,
      language,
      header,
      componentName,
      title,
      versionList,
      isHideVersion,
      languageList,
      offsetY,
      path,
      nav,
      changeRoute,
      changeLanguage,
    }
  },
})
</script>

<style lang="less">
@import '~@varlet/ui/es/styles/var';
@import '~@varlet/ui/es/styles/elevation';

body {
  min-width: 1200px;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', 'Noto Sans SC', sans-serif;
}

iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
}

.varlet {
  &-site {
    &-mobile {
      flex: 0 0 432px;
      transform: scale(0.66);
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

    &-empty {
      height: 32px;
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

          &:hover {
            transform: scale(1.2);
          }
        }
      }

      &__link {
        i {
          display: block;
          width: 26px;
          height: 26px;
          margin-right: 24px;
          transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

          &:hover {
            transform: scale(1.2);
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
      //overflow-y: hidden;
      display: flex;
      background: #fff;
    }

    &-doc {
      flex: 1 0 0;
      min-width: 500px;
      padding-left: 30px;
      overflow-y: auto;

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
        color: #34495e;
        font-size: 15px;
        line-height: 26px;
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
        font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;
        line-height: 26px;
        white-space: pre-wrap;
        word-wrap: break-word;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 2px 2px 5px #eee;
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
        background-color: #f7f8fa;
        border-radius: 4px;
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
          font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;
          font-style: normal;
        }
      }

      .card {
        margin-bottom: 24px;
        border-radius: 8px;
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
</style>
