<template>
  <div class="varlet-site">
    <app-header :language="language" />

    <div class="varlet-site-content">
      <app-sidebar
        :language="language"
        :menu="menu"
        :menu-name="menuName"
        @change="handleSidebarChange"
      />

      <div class="varlet-site-doc-container" ref="doc">
        <router-view />
      </div>

      <app-mobile
        :component-name="componentName"
        :language="language"
        v-if="useMobile"
      />
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import config from '@config'
import Cell from '@varlet/ui/es/cell'
import AppMobile from './components/AppMobile'
import AppHeader from './components/AppHeader'
import AppSidebar from './components/AppSidebar'
import '@varlet/ui/es/cell/style'
import '@varlet/ui/es/menu/style'
import '@varlet/ui/es/loading/style'
import { defineComponent, ref, Ref, watch, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { get } from 'lodash'
import { getPCLocationInfo, isPhone, MenuTypes } from '../utils'

type Language = Record<string, string>

export interface Menu {
  doc: string
  text: Record<string, string>
  type: MenuTypes
}

export default defineComponent({
  components: {
    [Cell.name]: Cell,
    AppMobile,
    AppHeader,
    AppSidebar
  },
  setup() {
    const menu: Ref<Menu[]> = ref(get(config, 'pc.menu', []))
    const useMobile = ref(get(config, 'useMobile'))
    const language: Ref<string> = ref('')
    const componentName: Ref<null | string> = ref(null)
    const menuName: Ref<string> = ref('')
    const doc: Ref<HTMLElement | null> = ref(null)
    const route = useRoute()

    const init = () => {
      const { language, menuName } = getPCLocationInfo()

      if (isPhone()) {
        window.location.href = `./mobile.html#/${menuName}?language=${language || 'zh-CN'}&platform=mobile`
      }

      nextTick(() => {
        const children = document
          .querySelector('.varlet-site-sidebar')
          .getElementsByClassName('var-cell')
        const index = menu.value.findIndex((item) => item.doc === menuName)

        if (index !== -1) {
          children[index].scrollIntoView({
            block: 'center',
            inline: 'start',
          })
        }
      })
    }

    const handleSidebarChange = ({ doc: menuName }) => {
      doc.value.scrollTop = 0
      componentName.value = menuName
    }

    onMounted(() => init())

    watch(
      () => route.path,
      () => {
        const { language: lang, menuName: _menuName } = getPCLocationInfo()
        if (!lang || !_menuName) {
          return
        }
        componentName.value = menuName.value = _menuName
        language.value = lang
        document.title = get(config, 'pc.title')[lang]
      },
      { immediate: true }
    )

    return {
      menu,
      language,
      componentName,
      menuName,
      doc,
      useMobile,
      handleSidebarChange,
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
@import '~@varlet/ui/es/progress/progress';

@doc-active: {
  display: inline;
  color: #fff;
  font-size: 14px;
  font-family: inherit;
  padding: 3px 10px;
  border-radius: 25px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
  0 1px 3px 0 rgba(0, 0, 0, 0.12);
  white-space: nowrap;
}

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
  &-introduce {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 4px 20px;
    padding: 40px;
    border-top: 8px solid #1d92e9;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);

    &__image {
      width: 180px;
    }

    &__name {
      font-size: 32px;
      margin-top: 22px;
    }

    &__des {
      color: #888;
      font-size: 14px;
      margin-top: 10px;
    }
  }

  &-site {
    &-content {
      height: calc(100vh - 60px);
      display: flex;
      background: #fff;
    }

    &-doc-container {
      flex: 1 0 0;
      overflow-y: auto;
      min-width: 500px;
      padding: 0 30px;
      overflow-x: hidden;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &-doc {
      a {
        margin: 0 4px;
        background: @color-success;
        -webkit-font-smoothing: antialiased;
        word-break: keep-all;
        @doc-active()
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

      p,
      ul {
        color: #888;
        font-size: 15px;
        line-height: 26px;
        padding: 16px;
        border-left: 4px solid #1d92e9;
        border-radius: 4px;
        background: #fff;
        box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
        list-style: none;
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
        font-size: 13px;
        font-family: Consolas, Monaco, monospace;
        line-height: 26px;
        white-space: pre-wrap;
        word-wrap: break-word;
        background-color: #fff;
      }

      p code,
      li code,
      table code {
        -webkit-font-smoothing: antialiased;
        word-break: keep-all;
        background: #1d92e9;
        margin: 0 4px;
        @doc-active();
      }

      table {
        width: 100%;
        margin-top: 12px;
        color: #34495e;
        font-size: 14px;
        line-height: 28px;
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
            }
          }
        }

        em {
          background: @color-success;
          font-style: normal;
          @doc-active();
        }
      }

      .card {
        margin-bottom: 24px;
        padding: 0 4px;
      }
    }
  }
}
</style>
