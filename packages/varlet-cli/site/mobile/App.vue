<template>
  <div style="position: relative">
    <header>
      <var-site-app-bar
        class="app-bar"
        :title="bigCamelizeComponentName"
        title-position="center"
      >
        <template #left>
          <var-site-button
            v-if="showBackIcon"
            text
            round
            @click="back"
            color="transparent"
            text-color="#fff"
          >
            <var-site-icon name="chevron-left" :size="28" style="margin-top: 1px;" />
          </var-site-button>
          <var-site-button
            v-if="!showBackIcon && github"
            style="margin-left: 6px; "
            text
            round
            @click="toGithub"
            color="transparent"
            text-color="#fff"
          >
            <var-site-icon name="github" :size="28" style="margin-top: 1px;" />
          </var-site-button>
        </template>
        <template #right>
          <var-site-menu
            style="background: transparent"
            :offset-x="1"
            :offset-y="38"
            v-model:show="showMenu"
            v-if="languages"
          >
            <var-site-button
              style="padding-right: 6px"
              text
              color="transparent"
              text-color="#fff"
              @click="showMenu = true"
            >
              <var-site-icon name="translate" :size="24" />
              <var-site-icon name="chevron-down" :size="24" />
            </var-site-button>

            <template #menu>
              <div style="background: #fff">
                <var-site-cell
                  v-for="(value, key) in nonEmptyLanguages"
                  :key="key"
                  class="mobile-language-cell"
                  :class="[language === key && 'mobile-language-cell--active']"
                  v-ripple
                  @click="changeLanguage(key)"
                >
                  {{ value }}
                </var-site-cell>
              </div>
            </template>
          </var-site-menu>
        </template>
      </var-site-app-bar>
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
import { get } from 'lodash-es'

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
    const github: Ref<string> = ref(get(config, 'mobile.header.github'))

    const changeLanguage = (lang) => {
      language.value = lang
      showMenu.value = false
      window.location.href = `./mobile.html#${route.path}?language=${language.value}&replace=${route.query.replace}`
    }

    const back = () => {
      window.location.href = `./mobile.html#${redirect}?language=${language.value}&replace=${redirect.slice(1)}`
    }

    const toGithub = () => {
      if (window.parent !== window) {
        window.parent.open(github.value)
      } else {
        window.location.href = github.value
      }
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
      github,
      showMenu,
      languages,
      language,
      nonEmptyLanguages,
      toGithub,
      back,
      changeLanguage,
    }
  },
})
</script>

<style lang="less">
* {
  -webkit-font-smoothing: antialiased;
}

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
  background: var(--site-config-color-app-bar) !important;
}

.router-view__block {
  padding: 54px 12px 15px;
}

* {
  box-sizing: border-box;
}

.mobile-language-cell {
  color: #666;
  cursor: pointer;

  &--active {
    color: var(--site-config-color-mobile-language-active);
    background: var(--site-config-color-mobile-language-active-background);
  }
}
</style>
