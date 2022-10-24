<template>
  <div style="position: relative">
    <header>
      <var-app-bar class="app-bar" title-position="left" :title="bigCamelizeComponentName">
        <template #left>
          <var-button v-if="showBackIcon" text round @click="back" color="transparent" text-color="#fff">
            <var-icon name="chevron-left" class="arrow-left" style="margin-top: 1px"/>
          </var-button>
          <var-button
            v-if="!showBackIcon && github"
            style="margin-left: 2px"
            text
            round
            @click="toGithub"
            color="transparent"
            text-color="#fff"
          >
            <var-icon name="github" class="github" style="margin-top: 1px"/>
          </var-button>
        </template>
        <template #right>
          <var-button
            text
            round
            color="transparent"
            text-color="#fff"
            :style="{
              transform: languages ? 'translateX(2px)' : 'translateX(-4px)',
            }"
            v-if="darkMode"
            @click="toggleTheme"
          >
            <var-icon
              class="theme"
              color="#fff"
              :name="currentTheme === 'lightTheme' ? 'white-balance-sunny' : 'weather-night'"
            />
          </var-button>
          <var-button
            class="i18n-button"
            text
            color="transparent"
            text-color="#fff"
            @click.stop="showMenu = true"
            v-if="languages"
          >
            <var-icon name="translate" class="i18n"/>
            <var-icon name="chevron-down" class="arrow-down"/>
          </var-button>
        </template>
      </var-app-bar>
    </header>
    <div class="router-view__block">
      <router-view/>
    </div>

    <transition name="site-menu">
      <div class="settings var-site-elevation--3" v-if="showMenu">
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
    </transition>
  </div>
</template>

<script lang="ts">
import config from '@config'
import { computed, ComputedRef, defineComponent, ref, Ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  getBrowserTheme,
  type Theme,
  watchLang,
  watchTheme
} from '@varlet/cli/client'
import { removeEmpty, setTheme, inIframe, isPhone } from '../utils'
import { bigCamelize } from '@varlet/shared'
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
    const darkMode: Ref<string> = ref(get(config, 'mobile.header.darkMode'))
    const currentTheme = ref(getBrowserTheme())

    const changeLanguage = (lang: string) => {
      language.value = lang
      showMenu.value = false
      window.location.href = `./mobile.html#${route.path}?language=${language.value}&replace=${route.query.replace}`

      if (!isPhone() && inIframe()) {
        ;(window.top as any).scrollToMenu(redirect.slice(1))
      }
    }

    const back = () => {
      window.location.href = `./mobile.html#${redirect}?language=${language.value}&replace=${redirect.slice(1)}`

      if (!isPhone() && inIframe()) {
        ;(window.top as any).scrollToMenu(redirect.slice(1))
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

    const getThemeMessage = () => ({ action: 'theme-change', from: 'mobile', data: currentTheme.value })

    const setCurrentTheme = (theme: Theme) => {
      currentTheme.value = theme
      setTheme(config, currentTheme.value)
      window.localStorage.setItem(get(config, 'themeKey'), currentTheme.value)
    }

    const toggleTheme = () => {
        setCurrentTheme(currentTheme.value === 'darkTheme' ? 'lightTheme' : 'darkTheme')
        window.postMessage(getThemeMessage(), '*')

        if (!isPhone() && inIframe()) {
          ;(window.top as any).postMessage(getThemeMessage(), '*')
        }
      }

    ;(window as any).toggleTheme = toggleTheme

    setTheme(config, currentTheme.value)
    window.postMessage(getThemeMessage(), '*')

    document.body.addEventListener('click', () => {
      showMenu.value = false
    })

    watchTheme((theme, from) => {
      from === 'pc' && setCurrentTheme(theme)
    })

    return {
      bigCamelizeComponentName,
      showBackIcon,
      github,
      showMenu,
      languages,
      language,
      nonEmptyLanguages,
      currentTheme,
      darkMode,
      toGithub,
      back,
      changeLanguage,
      toggleTheme,
    }
  },
})
</script>

<style lang="less">
* {
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: var(--site-config-color-bar);
  color: var(--site-config-color-text);
  transition: background-color 0.25s, color 0.25s;
}

header {
  position: fixed;
  z-index: 99;
  width: 100%;
  font-weight: bold;
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

.settings {
  position: fixed;
  z-index: 200;
  top: 48px;
  right: 5px;
  background: var(--site-config-color-bar);
}

.router-view__block {
  padding: 55px 15px 15px;
}

.mobile-language-cell {
  color: var(--site-config-color-text) !important;
  background: var(--site-config-color-bar) !important;
  cursor: pointer;

  &--active {
    color: var(--site-config-color-mobile-language-active) !important;
    background: var(--site-config-color-mobile-language-active-background) !important;
  }
}

.arrow-left {
  font-size: 28px !important;
}

.github {
  font-size: 28px !important;
}

.theme {
  font-size: 24px !important;
}

.i18n {
  font-size: 24px !important;
}

.arrow-down {
  font-size: 22px !important;
}

.i18n-button {
  padding-right: 6px !important;
}

.app-type {
  width: 100%;
  padding: 15px 0;
  color: var(--site-config-color-sub-text);
  font-size: 14px;
}

.app-bar {
  background: var(--site-config-color-app-bar) !important;
}
</style>
