<script lang="ts" setup>
import { nextTick, onMounted, ref, watch, type Ref } from 'vue'
import config from '@config'
import { getPCLocationInfo } from '@varlet/cli/client'
import { Context } from '@varlet/ui'
import { useRoute } from 'vue-router'
import { type SiteContext } from '../types'
import { MenuTypes, type Menu } from '../utils'
import AppAd from './components/AppAd.vue'
import AppHeader from './components/AppHeader.vue'
import AppMobile from './components/AppMobile.vue'
import AppSidebar from './components/AppSidebar.vue'

const context = Context as SiteContext
const menu: Ref<Menu[]> = ref(config?.pc?.menu ?? [])
const useMobile = ref(config?.useMobile)
const mobileRedirect = config?.mobile?.redirect
const language: Ref<string> = ref('')
const componentName: Ref<string | undefined> = ref()
const menuName: Ref<string> = ref('')
const hash: Ref<string> = ref('')
const doc: Ref<HTMLElement | null> = ref(null)
const route = useRoute()

const getComponentNameByMenuName = (menuName: string) => {
  const currentMenu = menu.value.find((menu) => menu.doc === menuName)
  return currentMenu?.type === MenuTypes.COMPONENT ? menuName : mobileRedirect.slice(1)
}

const init = () => {
  const { menuName } = getPCLocationInfo()

  nextTick(() => {
    const children = document.querySelector('.varlet-site-sidebar')!.getElementsByClassName('var-cell')
    const index = menu.value.findIndex((item) => item.doc === menuName)

    if (index !== -1) {
      children[index].scrollIntoView({
        block: 'center',
        inline: 'start',
      })
    }
  })
}

const handleSidebarChange = (menu: Menu) => {
  doc.value!.scrollTop = 0
  componentName.value = getComponentNameByMenuName(menu.doc)
  menuName.value = menu.doc
  hash.value = ''
}

const confirmClose = () => {
  const key = 'VARLET_UI_PLAYGROUND_HAS_BEEN_CLOSED'

  if (
    !localStorage.getItem(key) &&
    !window.confirm('The code will no longer be saved after closing. Are you sure you want to close?')
  ) {
    return
  }

  localStorage.setItem(key, 'true')
  context.showPlayground = false
}

onMounted(() => {
  init()

  window.addEventListener('message', (event) => {
    const { data } = event

    if (data.action === 'playground-close') {
      confirmClose()
    }
  })
})

watch(
  () => route.path,
  () => {
    const { language: lang, menuName: _menuName, hash: _hash } = getPCLocationInfo()
    if (!lang || !_menuName) {
      return
    }

    componentName.value = getComponentNameByMenuName(_menuName)
    menuName.value = _menuName
    hash.value = _hash
    language.value = lang
    useMobile.value = menu.value.find((item) => item.doc === _menuName)?.useMobile ?? config?.useMobile
    document.title = config?.pc?.title[lang] as string
  },
  { immediate: true },
)
</script>

<template>
  <div class="varlet-site">
    <app-ad :language="language" />

    <app-header :language="language" />

    <div class="varlet-site-content">
      <app-sidebar :language="language" :menu="menu" :menu-name="menuName" @change="handleSidebarChange" />

      <div class="varlet-site-doc-container" ref="doc" :class="[!useMobile && 'varlet-site-doc-container--pc-only']">
        <router-view />
      </div>

      <app-mobile
        :component-name="componentName"
        :language="language"
        :replace="menuName"
        :hash="hash"
        v-show="useMobile"
      />
    </div>
  </div>

  <var-popup position="right" :show="context.showPlayground" @click-overlay="confirmClose">
    <div class="varlet-site-playground-container">
      <iframe
        v-if="context.showPlayground"
        id="playground"
        class="varlet-site-playground-iframe"
        :src="context.playgroundURL"
        allow="clipboard-write"
      >
      </iframe>
    </div>
  </var-popup>
</template>

<style lang="less">
.hljs {
  background: var(--site-config-color-hl-background) !important;
  padding: 0 !important;
  transition: all 0.25s;
}

.hljs code {
  line-height: 31px;
}

.hljs-comment,
.hljs-meta,
.hljs-quote {
  color: var(--site-config-color-hl-group-a);
}

.hljs-keyword,
.hljs-name,
.hljs-selector-tag,
.hljs-tag {
  color: var(--site-config-color-hl-group-b);
}

.hljs-attribute,
.hljs-selector-id {
  color: var(--site-config-color-hl-group-c);
}

.hljs-addition,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-string {
  color: var(--site-config-color-hl-group-d);
}

.hljs-subst {
  color: var(--site-config-color-hl-group-e);
}

.hljs-link,
.hljs-regexp {
  color: var(--site-config-color-hl-group-f);
}

.hljs-doctag,
.hljs-section,
.hljs-title,
.hljs-type {
  color: var(--site-config-color-hl-group-g);
}

.hljs-bullet,
.hljs-literal,
.hljs-symbol,
.hljs-template-variable,
.hljs-variable {
  color: var(--site-config-color-hl-group-h);
}

.hljs-deletion,
.hljs-number {
  color: var(--site-config-color-hl-group-i);
}

.var-popup__content {
  background-color: transparent;
}
</style>

<style lang="less">
@doc-active: {
  display: inline;
  font-family: inherit;
  padding: 0;
  white-space: pre-wrap;
};

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
    margin: 20px 0;
    padding: 90px 40px;
    border-top: 6px solid var(--site-config-color-introduce-border);
    border-radius: 2px;
    background: var(--site-config-color-bar);
    box-shadow:
      0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);

    &__row {
      display: flex;
      align-items: center;
    }

    &__image {
      width: 60px;
      margin-right: 20px;
    }

    &__name {
      font-size: 60px;
    }

    &__des {
      color: var(--site-config-color-sub-text);
      font-size: 16px;
      margin-top: 16px;
      -webkit-font-smoothing: antialiased;
    }
  }

  &-component-preview {
    margin-top: 20px;
  }

  &-site {
    min-width: 1200px;

    &-content {
      display: flex;
      background: var(--site-config-color-body);
      min-height: calc(100vh - 60px - var(--site-ad-height));
    }

    &-doc-container {
      flex: 1 0 0;
      min-width: 500px;
      padding: 0 32px;
      overflow-x: hidden;

      &::-webkit-scrollbar {
        display: none;
      }

      &--pc-only {
        padding: 0 90px 0 30px;
      }
    }

    &-doc {
      h3 {
        display: flex;
        align-items: center;

        .router-link-active {
          font-size: 20px;
          margin-right: 8px;
          user-select: none;
          text-decoration: none;
        }
      }

      a {
        color: var(--site-config-color-link);
        -webkit-font-smoothing: antialiased;
        word-break: keep-all;
        font-size: 15px;
        @doc-active();

        &:hover {
          opacity: 0.8;
        }
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        position: relative;
        color: var(--site-config-color-text);
        font-weight: normal;
        line-height: 1.5;
      }

      h1 {
        line-height: 40px;
        font-size: 30px;
        cursor: default;
        margin: 30px 0;
      }

      h2 {
        margin: 20px 0;
        font-size: 25px;
      }

      h3 {
        font-size: 18px;
        margin: 0;
      }

      h4 {
        margin: 18px 0 0;
      }

      p,
      ul,
      ol {
        -webkit-font-smoothing: antialiased;
        color: var(--site-config-color-text);
        font-size: 15px;
        line-height: 26px;
        border-radius: 4px;
        background: var(--site-config-color-bar);
        margin: 14px 0 0;
        padding: 0;

        li {
          margin-bottom: 4px;
        }
      }

      ul,
      ol {
        padding: 0 0 0 18px;
      }

      pre {
        margin: 0;
      }

      code {
        position: relative;
        display: block;
        padding: 10px 16px;
        overflow-x: auto;
        font-size: 13px;
        font-family: Consolas, Monaco, monospace;
        white-space: pre-wrap;
        word-wrap: break-word;
        color: var(--site-config-color-hl-code);
      }

      p code,
      li code,
      table code {
        -webkit-font-smoothing: antialiased;
        word-break: keep-all;
        color: var(--site-config-color-primary);
        font-size: 15px;
        @doc-active();
      }

      table {
        -webkit-font-smoothing: antialiased;
        width: 100%;
        margin-top: 12px;
        color: var(--site-config-color-text);
        background: var(--site-config-color-bar);
        font-size: 14px;
        line-height: 28px;
        border-collapse: collapse;
        border-radius: 4px;

        th {
          padding: 8px 16px;
          font-weight: 500;
          text-align: left;
          color: var(--site-config-color-sub-text);
          font-size: 13px;
          -webkit-font-smoothing: antialiased;
          border-bottom: 1px solid var(--site-config-color-border);
        }

        td {
          padding: 8px 16px;
          border-bottom: 1px solid var(--site-config-color-border);
          color: var(--site-config-color-text);
          font-family: Consolas, Monaco, monospace;

          code {
            white-space: pre-wrap;
            padding: 0;
            font-size: 13px;
          }

          a {
            font-size: 13px;
          }
        }

        em {
          color: var(--site-config-color-type);
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          font-size: 13px;
          @doc-active();
        }
      }

      strong {
        font-size: 12px;
        font-weight: normal;
      }

      table strong {
        border: 1px solid currentColor;
        padding: 2px 8px;
        border-radius: 12px;
      }

      .card {
        border-radius: var(--site-config-card-border-radius);
        background: var(--site-config-color-bar);
        padding: 20px;
        margin-bottom: 30px;
        box-shadow:
          0 2px 1px -1px rgba(0, 0, 0, 0.2),
          0 1px 1px 0 rgba(0, 0, 0, 0.14),
          0 1px 3px 0 rgba(0, 0, 0, 0.12);

        &:first-child {
          margin-top: 30px;
        }
      }
    }

    &-playground-container {
      width: calc(100vw - 256px);
      max-width: 1660px;
      height: 100vh;
    }

    &-playground-iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
