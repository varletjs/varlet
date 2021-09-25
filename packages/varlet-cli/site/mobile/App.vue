<template>
  <div style="position: relative">
    <header>
      <var-app-bar
        class="app-bar"
        :title="bigCamelizeComponentName"
        title-position="center"
      >
        <template #left v-if="showBackIcon">
          <var-button round @click="back" color="transparent" text-color="#fff" text>
            <var-icon name="chevron-left" :size="28" />
          </var-button>
        </template>
        <template #right>
          <var-menu
            style="background: transparent"
            :offset-y="38"
            v-model:show="showMenu"
            v-if="languages"
          >
            <var-button text color="transparent" text-color="#fff" @click="showMenu = true">
              <var-icon name="translate" :size="24" />
              <var-icon name="chevron-down" :size="24" />
            </var-button>

            <template #menu>
              <div style="background: #fff">
                <var-cell
                  v-for="(value, key) in nonEmptyLanguages"
                  :key="key"
                  class="mobile-language-cell"
                  :class="[language === key && 'mobile-language-cell--active']"
                  v-ripple
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
import { computed, ComputedRef, defineComponent, ref, Ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { bigCamelize, removeEmpty, setThemes, watchLang } from '../utils'
import { get } from 'lodash'

type Language = Record<string, string>

export default defineComponent({
  setup() {
    const bigCamelizeComponentName: Ref<string> = ref('')
    const route = useRoute()
    const showBackIcon: Ref<boolean> = ref(false)
    const showMenu: Ref<boolean> = ref(false)
    const language: Ref<string> = ref('')
    const languages: Ref<Record<string, string>> = ref(get(config, 'mobile.header.i18n'))
    const nonEmptyLanguages: ComputedRef<Record<string, string>> = computed(() => removeEmpty(languages.value))
    const redirect = get(config, 'mobile.redirect', '')

    const changeLanguage = (lang) => {
      language.value = lang
      showMenu.value = false
      window.location.href = `./mobile.html#${route.path}?language=${language.value}&replace=${route.query.replace}`
    }

    const back = () => {
      window.location.href = `./mobile.html#${redirect}?language=${language.value}&replace=${redirect.slice(1)}`
    }

    watchLang((newValue) => {
      language.value = newValue
    })

    watch(
      () => route.path,
      (to: string) => {
        bigCamelizeComponentName.value = bigCamelize(to.slice(1))
        showBackIcon.value = bigCamelizeComponentName.value !== bigCamelize(redirect.slice(1))
      }
    )

    setThemes(config)

    return {
      bigCamelizeComponentName,
      showBackIcon,
      showMenu,
      languages,
      language,
      nonEmptyLanguages,
      back,
      changeLanguage,
    }
  },
})
</script>

<style lang="less">
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

.app-bar {
  background: var(--site-color-app-bar);
}

.router-view__block {
  padding: 50px 12px 15px;
}

* {
  box-sizing: border-box;
}

.mobile-language-cell {
  color: #666;
  cursor: pointer;

  &--active {
    color: var(--site-color-mobile-language-active);
    background: var(--site-color-mobile-language-active-background);
  }
}
</style>
