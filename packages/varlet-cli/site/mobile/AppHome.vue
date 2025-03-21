<template>
  <div class="varlet-logo">
    <h1 class="varlet-home__title">
      <img class="varlet-home__image" :src="logo" />
      <span>{{ title }}</span>
    </h1>
    <h2 class="varlet-home__desc">{{ description[lang] }}</h2>
  </div>

  <div
    class="varlet-home__cell"
    v-for="component in components"
    :key="component.text"
    v-ripple
    @click="toComponent(component)"
  >
    <span>{{ component.text[lang] }}</span>
    <var-icon name="chevron-right" size="14" />
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import config from '@config'
import { watchLang, watchPlatform } from '@varlet/cli/client'
import { useRouter } from 'vue-router'
import { inIframe, isPhone } from '../utils'

export default {
  name: 'AppHome',
  setup() {
    const title = ref(config?.title ?? '')
    const logo = ref(config?.logo ?? '')
    const description = ref(config?.mobile?.title ?? {})
    const menu = ref(config?.pc?.menu ?? [])
    const configComponents = menu.value.filter((item: any) => item.type === 2)
    const components = reactive<any>(configComponents)
    const lang = ref('zh-CN')
    const platform = ref('mobile')
    const router = useRouter()

    watchLang((newValue) => {
      lang.value = newValue
    })

    watchPlatform((newValue) => {
      platform.value = newValue
    })

    const toComponent = (component: any) => {
      router.push({
        path: `/${component.doc}`,
        query: {
          language: lang.value,
          platform: platform.value,
          replace: component.doc,
        },
      })

      if (!isPhone() && inIframe()) {
        // @ts-ignore
        window.top.scrollToMenu(component.doc)
      }
    }

    return {
      components,
      lang,
      toComponent,
      logo,
      title,
      description,
    }
  },
}
</script>

<style lang="less">
.varlet-logo {
  padding-top: 30px;
}

.varlet-home__title {
  margin: 0 0 16px;
  font-size: 34px;
}

.varlet-home__title,
.varlet-home__desc {
  padding: 0 12px;
  font-weight: normal;
  line-height: 1;
  user-select: none;
}

.varlet-home__desc {
  color: var(--site-config-color-sub-text);
  font-size: 14px;
  line-height: 22px;
}

.varlet-home__image {
  width: 36px;
  height: 36px;
}

.varlet-home__image,
.varlet-home__title span {
  display: inline-block;
  vertical-align: middle;
}

.varlet-home__title span {
  margin-left: 16px;
}

.varlet-home__cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 40px;
  padding: 10px 12px;
  font-size: 15px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.3s;
  color: var(--site-config-color-text);

  &:hover {
    color: var(--site-config-color-mobile-cell-hover);
  }
}
</style>
