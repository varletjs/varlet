<template>
  <div class="varlet-site-header">
    <div class="varlet-site-header__lead">
      <img class="varlet-site-header__logo" :src="config.logo" @click="backRoot" />
      <div class="varlet-site-header__title" v-if="title" @click="backRoot">{{ title }}</div>
    </div>

    <div class="varlet-site-header__tail">
      <div
        class="varlet-site-header__versions"
        @mouseenter="isOpenVersionsMenu = true"
        @mouseleave="isOpenVersionsMenu = false"
        v-if="isShowVersion"
      >
        <span style="font-size: 16px">{{ currentVersion }}</span>
        <var-icon name="chevron-down" />
        <transition name="fade">
          <div
            class="varlet-site-header__animation-list varlet-site-header__animation-versions var-elevation--5"
            v-show="isOpenVersionsMenu"
            :style="{ pointerEvents: isOpenVersionsMenu ? 'auto' : 'none' }"
          >
            <var-cell
              v-for="(i, key) in versionItems"
              v-ripple
              :key="key"
              :class="{ 'varlet-site-header__animation-list--active': currentVersion === i.label }"
              @click="open(i.link)"
            >
              {{ i.label }}
            </var-cell>
          </div>
        </transition>
      </div>

      <a
        class="varlet-site-header__link"
        style="width: auto; border-radius: 3px; padding: 0 12px; height: 40px"
        target="_blank"
        :href="ai"
        v-ripple
        v-if="ai"
      >
        <span>AI Agent</span>
      </a>
      <a
        class="varlet-site-header__link"
        style="margin-right: 8px"
        target="_blank"
        :href="changelog"
        v-ripple
        v-if="changelog"
      >
        <var-icon name="history" :size="28" />
      </a>
      <a class="varlet-site-header__link" target="_blank" :href="playground" v-ripple v-if="playground">
        <var-icon name="code-json" :size="24" />
      </a>
      <a class="varlet-site-header__link" target="_blank" :href="github" v-ripple v-if="github">
        <var-icon name="github" :size="28" />
      </a>
      <div
        class="varlet-site-header__theme"
        @mouseenter="isOpenThemeMenu = true"
        @mouseleave="isOpenThemeMenu = false"
        v-if="themes.length > 1"
      >
        <var-icon name="palette" :size="28" />
        <var-icon name="chevron-down" />
        <transition name="fade">
          <div
            class="varlet-site-header__animation-list var-elevation--5"
            v-show="isOpenThemeMenu"
            :style="{ pointerEvents: isOpenThemeMenu ? 'auto' : 'none' }"
          >
            <var-cell
              v-for="t in themes"
              v-ripple
              :key="t.value"
              :class="{ 'varlet-site-header__animation-list--active': currentTheme === t.value }"
              @click="() => toggleTheme(t.value as Theme)"
              >{{ t[language as keyof typeof t] }}
            </var-cell>
          </div>
        </transition>
      </div>
      <div
        class="varlet-site-header__language"
        @mouseenter="isOpenLanguageMenu = true"
        @mouseleave="isOpenLanguageMenu = false"
        v-if="languages"
      >
        <var-icon name="translate" :size="26" />
        <var-icon name="chevron-down" />
        <transition name="fade">
          <div
            class="varlet-site-header__animation-list var-elevation--5"
            v-show="isOpenLanguageMenu"
            :style="{ pointerEvents: isOpenLanguageMenu ? 'auto' : 'none' }"
          >
            <var-cell
              v-for="(value, key) in nonEmptyLanguages"
              v-ripple
              :key="key"
              :class="{ 'varlet-site-header__animation-list--active': language === key }"
              @click="handleLanguageChange(key)"
              >{{ value }}
            </var-cell>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import config from '@config'
import { ref, computed, defineComponent } from 'vue'
import { getBrowserTheme, getPCLocationInfo, Theme, watchTheme, setTheme } from '@varlet/cli/client'
import { removeEmpty } from '../../utils'
import { useRouter } from 'vue-router'
import type { Ref, ComputedRef } from 'vue'

export default defineComponent({
  name: 'AppHeader',
  props: {
    language: {
      type: String,
    },
  },
  setup() {
    const title: Ref<string> = ref(config?.title)
    const logo: Ref<string> = ref(config?.pc?.logo)
    const languages: Ref<Record<string, string>> = ref(config?.pc?.header?.i18n ?? {})
    const currentVersion: Ref<string> = ref(config?.pc?.header?.currentVersion ?? '')
    const versions = config?.pc?.header?.versions
    const isShowVersion: Ref<boolean> = ref(!!versions)
    const versionItems: Ref<Array<Record<string, any>>> = ref(
      (versions ?? []).find((i: any) => window.location.host.includes(i.name))?.items ?? versions?.[0]?.items ?? []
    )
    const playground: Ref<string> = ref(config?.pc?.header?.playground)
    const github: Ref<string> = ref(config?.pc?.header?.github)
    const themes: Ref<Record<string, any>> = ref(config?.pc?.header?.themes ?? {})
    const changelog: Ref<string> = ref(config?.pc?.header?.changelog)
    const ai: Ref<string> = ref(config?.pc?.header?.ai)
    const redirect = config?.pc?.redirect ?? ''
    const darkMode: Ref<boolean> = ref(config?.pc?.header?.darkMode ?? false)
    const currentTheme = ref(getBrowserTheme())

    const isOpenLanguageMenu: Ref<boolean> = ref(false)
    const isOpenThemeMenu: Ref<boolean> = ref(false)
    const isOpenVersionsMenu: Ref<boolean> = ref(false)
    const router = useRouter()
    const nonEmptyLanguages: ComputedRef<Record<string, string>> = computed(() => removeEmpty(languages.value))

    const backRoot = () => {
      const { language: lang } = getPCLocationInfo()
      router.replace(`/${lang}${redirect}`)
    }

    const handleLanguageChange = (language: string) => {
      const { menuName } = getPCLocationInfo()
      router.replace(`/${language}/${menuName}`)
      isOpenLanguageMenu.value = false
    }

    const setCurrentTheme = (theme: Theme) => {
      currentTheme.value = theme
      setTheme(currentTheme.value)
      window.localStorage.setItem(config?.themeKey, currentTheme.value)
    }

    const getThemeMessage = () => ({ action: 'theme-change', from: 'pc', data: currentTheme.value })

    const toggleTheme = (value: Theme) => {
      setCurrentTheme(value)

      window.postMessage(getThemeMessage(), '*')
      notifyThemeChange('mobile')
      isOpenThemeMenu.value = false
    }

    const notifyThemeChange = (target: 'mobile' | 'window') => {
      const contentWindow =
        target === 'window' ? window : (document.getElementById(target) as HTMLIFrameElement | undefined)?.contentWindow
      if (!contentWindow) {
        return
      }

      contentWindow.postMessage(getThemeMessage(), '*')
    }

    const open = (value: string) => {
      window.location.href = value
    }

    watchTheme((theme, from) => {
      if (from === 'mobile') {
        setCurrentTheme(theme)
      }

      if (from === 'playground') {
        setCurrentTheme(theme)
        notifyThemeChange('mobile')
      }
    })

    setTheme(currentTheme.value)
    notifyThemeChange('window')

    return {
      logo,
      config,
      title,
      currentVersion,
      languages,
      isShowVersion,
      versionItems,
      themes,
      nonEmptyLanguages,
      playground,
      changelog,
      ai,
      github,
      isOpenLanguageMenu,
      isOpenVersionsMenu,
      isOpenThemeMenu,
      darkMode,
      currentTheme,
      open,
      backRoot,
      handleLanguageChange,
      toggleTheme,
    }
  },
})
</script>

<style lang="less">
.varlet-site-header {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 30px;
  justify-content: space-between;
  user-select: none;
  z-index: 9;
  background: var(--site-config-color-bar);
  border-bottom: 1px solid var(--site-config-color-border);
  box-sizing: border-box;

  &__lead {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__logo {
    width: 32px;
    height: 32px;
    margin-right: 12px;
    flex-shrink: 0;
    transition: 0.3s all ease-in-out;
  }

  &__title {
    font-size: 22px;
    margin-right: 12px;
  }

  &__tail {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 562px) {
    &__tail {
      display: none;
    }
  }

  &__versions {
    border-radius: 3px;
    height: 40px;
    display: flex;
    align-items: center;
    padding-right: 10px;
    padding-left: 18px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.25s;
    margin-right: 4px;

    &:hover {
      background: var(--site-config-color-nav-button-hover-background);
    }
  }

  &__link {
    border-radius: 50%;
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: var(--site-config-color-text);
    transition: background-color 0.25s;
    margin-right: 6px;

    a {
      text-decoration: none;
    }

    &:hover {
      background: var(--site-config-color-nav-button-hover-background);
    }
  }

  &__language {
    border-radius: 3px;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.25s;

    &:hover {
      background: var(--site-config-color-nav-button-hover-background);
    }
  }

  &__theme {
    border-radius: 3px;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.25s;
    margin-right: 6px;

    &:hover {
      background: var(--site-config-color-nav-button-hover-background);
    }
  }

  &__animation-list {
    background: var(--site-config-color-bar);
    cursor: pointer;
    color: var(--site-config-color-text);
    border-radius: 2px;
    position: absolute;
    top: 40px;
    left: -20px;

    .var-cell {
      width: 100px !important;
      color: var(--site-config-color-text);

      &__content {
        color: inherit !important;
      }
    }

    &--active {
      background: var(--site-config-color-pc-language-active-background) !important;
      color: var(--site-config-color-pc-language-active) !important;
    }
  }

  &__theme-animation-list {
    background: var(--site-config-color-bar);
    cursor: pointer;
    color: var(--site-config-color-text);
    border-radius: 2px;
    position: absolute;
    top: 40px;
    left: -20px;

    .var-cell {
      width: 100px !important;
      color: var(--site-config-color-text);

      &__content {
        color: inherit !important;
      }
    }

    &--active {
      background: var(--site-config-color-pc-theme-active-background) !important;
      color: var(--site-config-color-pc-theme-active) !important;
    }
  }

  &__animation-versions {
    left: -7px;
  }
}
</style>

<style lang="less" scoped>
.fade-enter-active {
  animation-name: fade-in;
  animation-duration: 0.3s;
}

.fade-leave-active {
  animation-name: fade-leave;
  animation-duration: 0.3s;
}

@keyframes fade-in {
  0% {
    top: 30px;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}

@keyframes fade-leave {
  0% {
    top: 40px;
    opacity: 1;
  }
  100% {
    top: 30px;
    opacity: 0;
  }
}
</style>
