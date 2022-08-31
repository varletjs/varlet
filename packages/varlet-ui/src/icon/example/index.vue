<script setup>
import VarIcon from '..'
import vRipple from '../../ripple'
import Snackbar from '../../snackbar'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Clipboard from 'clipboard'
import icons from '@varlet/icons'
import dark from '../../themes/dark'
import { reactive, onMounted, ref } from 'vue'
import { use, pack } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

const iconNames = reactive(icons)
const iconName = ref('information')
const background = ref('#fff')

const toggle = () => {
  iconName.value = iconName.value === 'information' ? 'checkbox-marked-circle' : 'information'
}

onMounted(() => {
  const clipboard = new Clipboard('.icon-example__icon', {
    text: (trigger) => `<var-icon name="${trigger.getAttribute('data-clipboard-text')}" />`,
  })

  clipboard.on('success', (e) => {
    Snackbar.success(`${e.text}${pack.value.copySuccess}!`)
  })
})

watchLang(use)
watchDarkMode(dark, (themes) => {
  background.value = themes === 'darkThemes' ? '#303030' : '#fff'
})
</script>

<template>
  <app-type>{{ pack.iconSize }}</app-type>
  <var-icon class="icon-example__animation-icon" name="checkbox-marked-circle" />
  <var-icon class="icon-example__animation-icon" name="checkbox-marked-circle" :size="26" />

  <app-type>{{ pack.iconColor }}</app-type>
  <var-icon class="icon-example__animation-icon" name="checkbox-marked-circle" color="#2979ff" />
  <var-icon class="icon-example__animation-icon" name="checkbox-marked-circle" color="#2979ff" :size="26" />

  <app-type>{{ pack.useImage }}</app-type>
  <var-icon class="icon-example__animation-icon" name="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="32" />

  <app-type>{{ pack.events }}</app-type>
  <var-icon
    class="icon-example__animation-icon"
    name="checkbox-marked-circle"
    color="#2979ff"
    @click="() => Snackbar.success(pack.clickSuccess)"
  />

  <app-type>{{ pack.iconAnimation }}</app-type>
  <var-icon
    class="icon-example__animation-icon"
    color="#2979ff"
    :size="30"
    :transition="300"
    :name="iconName"
    @click="toggle"
  />

  <app-type>{{ pack.iconList }}</app-type>
  <div class="icon-example__icons">
    <div
      class="icon-example__icon var-elevation--2"
      :style="{ background }"
      :data-clipboard-text="name"
      :key="name"
      v-for="name in iconNames"
      v-ripple
    >
      <var-icon :name="name" />
      <div class="icon-example__icon-name">{{ name }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../styles/var';
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
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    user-select: none;
    border-bottom: 2px solid var(--color-primary);
    transition: background-color 0.25s;
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
</style>
