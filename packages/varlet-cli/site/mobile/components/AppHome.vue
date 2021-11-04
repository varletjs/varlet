<template>
  <div class="logo">
    <h1 class="varlet-home__title">
      <img class="varlet-home__image" :src="logo" />
      <span>{{ title }}</span>
    </h1>
    <h2 class="varlet-home__desc">{{ description[lang] }}</h2>
  </div>
  <var-site-cell
    v-for="component in components"
    :key="component.text"
    @click="toComponent(component)"
    v-ripple
  >
    <template #extra>
      <var-site-icon name="chevron-right" size="14" />
    </template>
    <template #default>
      {{ component.text[lang] }}
    </template>
  </var-site-cell>
</template>

<script>
import config from '@config'
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import { inIframe, isPhone, watchLang, watchPlatform } from '../../utils'

export default {
  name: 'AppHome',
  setup() {
    const title = ref(config?.title ?? '')
    const logo = ref(config?.logo ?? '')
    const description = ref(config?.mobile?.title ?? {})
    const menu = ref(config?.pc?.menu ?? [])
    const configComponents = menu.value.filter((item) => item.type === 2)
    const components = reactive(configComponents)
    const lang = ref('zh-CN')
    const platform = ref('mobile')
    const router = useRouter()

    watchLang((newValue) => {
      lang.value = newValue
    })

    watchPlatform((newValue) => {
      platform.value = newValue
    })

    const toComponent = (component) => {
      router.push({
        path: `/${component.doc}`,
        query: {
          language: lang.value,
          platform: platform.value,
          replace: component.doc
        },
      })

      if (!isPhone() && inIframe()) {
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

<style scoped lang="less">
.logo {
  height: 100px;
  padding-top: 30px;
  margin-bottom: 20px;
}

.varlet-home__title {
  margin: 0 0 16px;
  font-size: 32px;
}

.varlet-home__title,
.varlet-home__desc {
  padding-left: 16px;
  font-weight: normal;
  line-height: 1;
  user-select: none;
}

.varlet-home__desc {
  margin: 0 0 40px;
  color: var(--site-config-color-sub-text);
  font-size: 14px;
}

.varlet-home__image {
  width: 32px;
  height: 32px;
}

.varlet-home__image,
.varlet-home__title span {
  display: inline-block;
  vertical-align: middle;
}

.varlet-home__title span {
  margin-left: 16px;
}

.var-site-cell {
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: all 0.3s;
  color: var(--site-config-color-text);

  &:hover {
    color: var(--site-config-color-mobile-cell-hover);
  }
}
</style>
