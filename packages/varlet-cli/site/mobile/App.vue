<template>
  <div style="position: relative">
    <header>
      <var-site-app-bar
        class="app-bar"
        title-position="left"
        :title="bigCamelizeComponentName"
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
            style="margin-left: 2px;"
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
          <var-site-button
            text
            round
            color="transparent"
            text-color="#fff"
            :style="{
              transform: languages ? 'translateX(2px)' : 'translateX(-4px)'
            }"
            v-if="darkMode"
            @click="toggleTheme"
          >
            <var-site-icon
              size="24px"
              color="#fff"
              :name="currentThemes === 'themes' ? 'white-balance-sunny' : 'weather-night'"
            />
          </var-site-button>
          <var-site-button
            style="padding-right: 6px"
            text
            color="transparent"
            text-color="#fff"
            @click.stop="showMenu = true"
            v-if="languages"
          >
            <var-site-icon name="translate" :size="24" />
            <var-site-icon name="chevron-down" :size="22" />
          </var-site-button>
        </template>
      </var-site-app-bar>
    </header>
    <div class="router-view__block">
      <router-view />
    </div>

    <transition name="site-menu">
      <div
        class="settings var-site-elevation--3"
        v-if="showMenu"
      >
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
    </transition>
  </div>
</template>

<script lang="ts">
import config from '@config'
import { computed, ComputedRef, defineComponent, ref, Ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  bigCamelize,
  getBrowserThemes,
  inIframe,
  isPhone,
  removeEmpty,
  setThemes,
  watchLang,
  watchThemes,
  getThemesKey
} from '../utils'
import { get } from 'lodash-es'

export default defineComponent({
  setup: function() {
    const bigCamelizeComponentName: Ref<string> = ref('')
    const route = useRoute()
    const showBackIcon: Ref<boolean> = ref(false)
    const showMenu: Ref<boolean> = ref(false)
    const language: Ref<string> = ref('')
    const languages: Ref<Record<string, string>> = ref(get(config, 'mobile.header.i18n'))
    const nonEmptyLanguages: ComputedRef<Record<string, string>> = computed(() => removeEmpty(languages.value))
    const redirect = get(config, 'mobile.redirect', '')
    const github: Ref<string> = ref(get(config, 'mobile.header.github'))
    const darkMode: Ref<string> = ref(get(config, 'mobile.header.darkMode'))
    const currentThemes = ref(getBrowserThemes())

    const changeLanguage = (lang: string) => {
      language.value = lang
      showMenu.value = false
      window.location.href = `./mobile.html#${route.path}?language=${language.value}&replace=${route.query.replace}`

      if (!isPhone() && inIframe()) {
        (window.top as any).scrollToMenu(redirect.slice(1))
      }
    }

    const back = () => {
      window.location.href = `./mobile.html#${redirect}?language=${language.value}&replace=${redirect.slice(1)}`

      if (!isPhone() && inIframe()) {
        (window.top as any).scrollToMenu(redirect.slice(1))
      }
    }

    const toGithub = () => {
      if (inIframe() && !isPhone()) {
        window.top!.open(github.value)
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
        const componentName = bigCamelize(to.slice(1))
        const redirectName = bigCamelize(redirect.slice(1))
        bigCamelizeComponentName.value = componentName === redirectName ? '' : componentName
        showBackIcon.value = componentName !== redirectName
      }
    )

    const getThemesMessage = () => ({ action: 'themesChange', from: 'mobile', data: currentThemes.value })

    const setCurrentThemes = (themes: 'themes' | 'darkThemes') => {
      currentThemes.value = themes
      setThemes(config, currentThemes.value)
      window.localStorage.setItem(getThemesKey(), currentThemes.value)
    }

    const toggleTheme = () => {
      setCurrentThemes(currentThemes.value === 'darkThemes' ? 'themes' : 'darkThemes')
      window.postMessage(getThemesMessage(), '*')

      if (!isPhone() && inIframe()) {
        ;(window.top as any).postMessage(getThemesMessage(), '*')
      }
    }

    (window as any).toggleTheme = toggleTheme

    setThemes(config, currentThemes.value)
    window.postMessage(getThemesMessage(), '*')

    document.body.addEventListener('click', () => {
      showMenu.value = false
    })

    watchThemes((themes, from) => {
      from === 'pc' && setCurrentThemes(themes)
    })

    return {
      bigCamelizeComponentName,
      showBackIcon,
      github,
      showMenu,
      languages,
      language,
      nonEmptyLanguages,
      currentThemes,
      darkMode,
      toGithub,
      back,
      changeLanguage,
      toggleTheme
    }
  }
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
  background: var(--site-config-color-bar);
  color: var(--site-config-color-text);
  transition: background-color .25s, color .25s;
}

::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}

.site {
  &-menu-enter-from,
  &-menu-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
  &-menu-enter-active,
  &-menu-leave-active {
    transition-property: opacity, transform;
    transition-duration: 0.25s;
  }
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

.settings {
  position: fixed;
  z-index: 200;
  top: 48px;
  right: 5px;
  background: var(--site-config-color-bar);
}

.router-view__block {
  padding: 54px 12px 15px;
}

* {
  box-sizing: border-box;
}

.mobile-language-cell {
  color: var(--site-config-color-text);
  background: var(--site-config-color-bar);
  cursor: pointer;

  &--active {
    color: var(--site-config-color-mobile-language-active);
    background: var(--site-config-color-mobile-language-active-background);
  }
}
</style>
