<template>
  <div class="varlet-site-sidebar var-elevation--3">
    <var-cell
      class="varlet-site-sidebar__item"
      :class="{
        'varlet-site-sidebar__item--active': item.doc === menuName,
        'varlet-site-sidebar__link': item.type !== menuTypes.TITLE,
        'varlet-site-sidebar__title': item.type === menuTypes.TITLE,
      }"
      :key="index"
      v-for="(item, index) in menu"
      v-ripple="{
        touchmoveForbid: false,
        disabled: item.type === menuTypes.TITLE,
        color: themes['color-side-bar']
      }"
      @click="changeRoute(item)"
    >
      <span class="varlet-site-sidebar__item--title" v-if="item.type === menuTypes.TITLE">{{ item.text[language] }}</span>
      <span class="varlet-site-sidebar__item--link" v-else>{{ item.text[language] }}</span>
    </var-cell>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import config from '@config'
import '@varlet/ui/es/styles/elevation.less'
import { MenuTypes } from '../../utils'
import { reactive, ref } from 'vue'
import type { PropType } from 'vue'
import type { Menu } from '../App'
import { get } from 'lodash-es'

export default {
  name: 'AppSidebar',
  props: {
    menu: {
      type: Array as PropType<Menu[]>
    },
    menuName: {
      type: String
    },
    language: {
      type: String
    }
  },
  emits: ['change'],
  setup(props, { emit }) {
    const menuTypes = reactive(MenuTypes)
    const themes = ref(get(config, 'themes'))

    const changeRoute = (item) => {
      if (item.type === MenuTypes.TITLE || props.menuName === item.doc) {
        return
      }

      emit('change', item)
    }

    return {
      menuTypes,
      themes,
      changeRoute
    }
  }
}
</script>

<style scoped lang="less">
.varlet-site-sidebar {
  padding: 0 0 15px;
  position: sticky;
  flex: 0 0 220px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  overflow-y: scroll;
  box-shadow: 0 8px 12px #ebedf0;
  background: #fff;

  &::-webkit-scrollbar {
    display: none;
  }

  &__item {
    margin: 0;
    user-select: none;
    padding: 10px 28px;

    &--title {
      font-size: 16px;
      font-weight: 600;
      color: #394950;
      line-height: 28px;
      padding: 8px 0 8px;
    }

    &--link {
      font-size: 14px;
      color: #455a64;
      transition: color 0.2s;

      &:hover {
        color: var(--site-color-side-bar);
      }
    }

    &--active {
      position: relative;
      background: var(--site-color-side-bar-active-background);

      span {
        color: var(--site-color-side-bar);
      }

      &::before {
        display: block;
        content: '';
        background: var(--site-color-side-bar);
        width: 4px;
        height: 40px;
        position: absolute;
        left: 0;
      }
    }
  }

  &__link {
    cursor: pointer;
  }

  &__title {
    margin-top: 10px;
  }
}
</style>
