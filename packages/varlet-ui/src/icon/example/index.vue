<script setup>
import Clipboard from 'clipboard'
import icons from '@varlet/icons'
import { Snackbar } from '@varlet/ui'
import { reactive, onMounted, ref, computed } from 'vue'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { use, t } from './locale'

const iconNames = reactive(icons)
const iconName = ref('information')
const searchText = ref('')
const searchIcons = computed(() =>
  searchText.value ? iconNames.filter((name) => name.includes(searchText.value)) : iconNames
)

onMounted(() => {
  const clipboard = new Clipboard('.icon-example__icon', {
    text: (trigger) => `<var-icon name="${trigger.getAttribute('data-clipboard-text')}" />`,
  })

  clipboard.on('success', (e) => {
    Snackbar.success(`${t('copySuccess')} ${e.text}!`)
  })
})

watchLang(use)
onThemeChange()

function toggle() {
  iconName.value = iconName.value === 'information' ? 'checkbox-marked-circle' : 'information'
}
</script>

<template>
  <app-type>{{ t('iconSize') }}</app-type>
  <var-icon class="icon-example__animation-icon" name="checkbox-marked-circle" />
  <var-icon class="icon-example__animation-icon" name="checkbox-marked-circle" :size="26" />

  <app-type>{{ t('iconColor') }}</app-type>
  <var-icon class="icon-example__animation-icon" name="checkbox-marked-circle" color="var(--color-primary)" />
  <var-icon class="icon-example__animation-icon" name="checkbox-marked-circle" color="var(--color-success)" />

  <app-type>{{ t('useImage') }}</app-type>
  <var-icon class="icon-example__animation-icon" name="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="32" />

  <app-type>{{ t('clickEvent') }}</app-type>
  <var-icon
    class="icon-example__animation-icon"
    name="checkbox-marked-circle"
    color="var(--color-primary)"
    @click="() => Snackbar.success(t('clickSuccess'))"
  />

  <app-type>{{ t('iconAnimation') }}</app-type>
  <var-icon
    class="icon-example__animation-icon"
    color="var(--color-primary)"
    :size="30"
    :transition="300"
    :name="iconName"
    @click="toggle"
  />
  <var-icon
    class="icon-example__animation-icon"
    color="var(--color-primary)"
    :size="30"
    :transition="300"
    animation-class="fade"
    :name="iconName"
    @click="toggle"
  />

  <app-type>{{ t('iconList') }}</app-type>

  <var-input
    class="icon-example__search"
    size="small"
    variant="outlined"
    :placeholder="t('searchIcon')"
    v-model.trim="searchText"
    clearable
  >
    <template #append-icon>
      <var-icon class="search-icon" name="magnify" />
    </template>
  </var-input>

  <div class="icon-example__icons">
    <div
      class="icon-example__icon var-elevation--2"
      :style="{ background: 'var(--paper-background)' }"
      :data-clipboard-text="name"
      :key="name"
      v-for="name in searchIcons"
      v-ripple
    >
      <var-icon :name="name" />
      <div class="icon-example__icon-name">{{ name }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../styles/elevation';

.icon-example {
  &__animation {
    display: flex;
    align-items: center;
    padding-left: 8px;
  }

  &__animation-icon {
    margin-left: 5px;
  }

  &__icons {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  &__icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 29%;
    padding: 6% 5%;
    margin: 0 2% 4%;
    border-radius: 10px;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    user-select: none;
    transition: background-color 0.25s;
  }

  &__search {
    margin: 6px 8px 22px;
  }

  &__icon-name {
    width: 100%;
    font-size: 12px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 8px;
  }
}

.search-icon {
  margin-left: 6px;
}

.fade {
  opacity: 0;
  transition-property: opacity;
}
</style>
