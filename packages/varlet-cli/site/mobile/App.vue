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
          <var-site-button
            style="padding-right: 6px"
            text
            color="transparent"
            text-color="#fff"
            @click.stop="showMenu = true"
            v-if="languages || darkMode"
          >
            <var-site-icon name="cog-outline" :size="26" />
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
        style="background: #fff"
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
        <var-site-cell
          class="mobile-language-cell"
          v-if="darkMode"
          v-ripple
          @click="toggleTheme"
        >
          <var-site-icon
            size="20px"
            color="#666"
            :name="currentThemes === 'themes' ? 'white-balance-sunny' : 'weather-night'"
          />
        </var-site-cell>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import config from '@config'
import { computed, ComputedRef, defineComponent, ref, Ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { bigCamelize, getBrowserThemes, inIframe, isPhone, removeEmpty, setThemes, watchLang } from '../utils'
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
    const currentThemes = ref(getBrowserThemes())

    const changeLanguage = (lang) => {
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
        window.top.open(github.value)
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

    const toggleTheme = () => {
      currentThemes.value = currentThemes.value === 'darkThemes' ? 'themes' : 'darkThemes'
      setThemes(config, currentThemes.value)
      window.localStorage.setItem('currentThemes', currentThemes.value)

      if (!isPhone() && inIframe()) {
        (window.top as any).onMobileThemeChange(currentThemes.value)
      }
    }

    setThemes(config, currentThemes.value)

    document.body.addEventListener('click', () => {
      showMenu.value = false
    })

    window.addEventListener('message', (event) => {
      if (event.data === 'darkThemes' || event.data === 'themes') {
        currentThemes.value = event.data
        setThemes(config, currentThemes.value)
      }
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
  background: var(--site-config-color-bar);
  color: var(--site-config-color-text);
  transition: background .25s, color .25s;
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
