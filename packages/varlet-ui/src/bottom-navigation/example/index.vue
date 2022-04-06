<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-bottom-navigation v-model="basicUsage">
    <var-bottom-navigation-item :label="pack.label" icon="home" />
    <var-bottom-navigation-item :label="pack.label" icon="magnify" />
    <var-bottom-navigation-item :label="pack.label" icon="heart" />
    <var-bottom-navigation-item :label="pack.label" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ pack.matchByName }}</app-type>
  <var-bottom-navigation v-model="matchByName">
    <var-bottom-navigation-item name="home" :label="pack.label" icon="home" />
    <var-bottom-navigation-item name="search" :label="pack.label" icon="magnify" />
    <var-bottom-navigation-item name="heart" :label="pack.label" icon="heart" />
    <var-bottom-navigation-item name="user" :label="pack.label" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ pack.showBadge }}</app-type>
  <var-bottom-navigation v-model="showBadge">
    <var-bottom-navigation-item :label="pack.label" icon="home" />
    <var-bottom-navigation-item :label="pack.label" icon="magnify" badge />
    <var-bottom-navigation-item :label="pack.label" icon="heart" :badge="badgeProps" />
    <var-bottom-navigation-item :label="pack.label" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ pack.customColor }}</app-type>
  <var-bottom-navigation active-color="#ba68c8" v-model="customColor">
    <var-bottom-navigation-item :label="pack.label" icon="home" />
    <var-bottom-navigation-item :label="pack.label" icon="magnify" />
    <var-bottom-navigation-item :label="pack.label" icon="heart" />
    <var-bottom-navigation-item :label="pack.label" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ pack.changeEvent }}</app-type>
  <var-bottom-navigation v-model="changeEvent" @change="handleChange">
    <var-bottom-navigation-item :label="pack.label" icon="home" />
    <var-bottom-navigation-item :label="pack.label" icon="magnify" />
    <var-bottom-navigation-item :label="pack.label" icon="heart" />
    <var-bottom-navigation-item :label="pack.label" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ pack.clickEvent }}</app-type>
  <var-bottom-navigation border v-model="clickEvent">
    <var-bottom-navigation-item @click="handleClick" :label="pack.label" icon="home" />
    <var-bottom-navigation-item @click="handleClick" :label="pack.label" icon="magnify" />
    <var-bottom-navigation-item @click="handleClick" :label="pack.label" icon="heart" />
    <var-bottom-navigation-item @click="handleClick" :label="pack.label" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ pack.fab }}</app-type>
  <var-bottom-navigation v-model="fab" @fabClick="isEven = !isEven" :fab-props="fabProps" style="margin-top: 10px">
    <template #fab>
      <var-icon name="plus" color="#fff" size="24" />
    </template>
    <var-bottom-navigation-item :label="pack.label" icon="home" />
    <var-bottom-navigation-item :label="pack.label" icon="magnify" />
    <var-bottom-navigation-item :label="pack.label" icon="heart" />
    <var-bottom-navigation-item :label="pack.label" icon="bell" />
    <var-bottom-navigation-item v-if="!isEven" :label="pack.label" icon="account-circle" />
  </var-bottom-navigation>
</template>

<script>
import { ref } from 'vue'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarBottomNavigation from '..'
import VarBottomNavigationItem from '../../bottom-navigation-item'
import VarIcon from '../../icon'
import Snackbar from '../../snackbar'
import dark from '../../themes/dark'
import { use, pack } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

export default {
  name: 'BottomNavigationExample',
  components: {
    AppType,
    VarBottomNavigation,
    VarBottomNavigationItem,
    VarIcon,
  },
  setup() {
    const basicUsage = ref(0)

    const matchByName = ref('home')

    const showBadge = ref(0)
    const badgeProps = {
      type: 'primary',
      value: '66',
    }

    const customColor = ref(0)

    const changeEvent = ref(0)

    function handleChange(active) {
      Snackbar.info(`changed to ${active}`)
    }

    const clickEvent = ref(0)

    function handleClick(active) {
      Snackbar.success(`clicked ${active}`)
    }

    const fab = ref(0)
    const isEven = ref(true)
    const fabProps = ref({ type: 'success', loading: true })

    watchLang(use)
    watchDarkMode(dark)

    return {
      pack,
      basicUsage,
      matchByName,
      showBadge,
      badgeProps,
      customColor,
      changeEvent,
      handleChange,
      clickEvent,
      handleClick,
      fab,
      isEven,
      fabProps,
    }
  },
}
</script>
