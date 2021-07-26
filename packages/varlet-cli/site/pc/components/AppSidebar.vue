<template>
  <div class="varlet-site-sidebar var-elevation--3">
    <var-cell
      class="varlet-site-sidebar__item"
      :class="{
        'varlet-site-sidebar__item--active': item.doc === menuName,
        'varlet-site-sidebar__link': !item.isTitle,
        'varlet-site-sidebar__title': item.isTitle,
      }"
      :key="index"
      v-for="(item, index) in menu"
      v-ripple="{
        touchmoveForbid: false,
        disabled: !!item.isTitle,
        color: '#2979ff'
      }"
      @click="changeRoute(item)"
    >
      <span class="varlet-site-sidebar__item--title" v-if="item.isTitle">{{ item.text[language] }}</span>
      <span class="varlet-site-sidebar__item--link" v-else>{{ item.text[language] }}</span>
    </var-cell>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import config from '@config'
import Cell from '@varlet/ui/es/cell'
import Ripple from '@varlet/ui/es/ripple'
import '@varlet/ui/es/cell/style'
import '@varlet/ui/es/ripple/style'
import '@varlet/ui/es/styles/elevation.less'
import { getCurrentLocationInfo } from '../App'
import type { PropType } from 'vue'
import type { Menu } from '../App'

export default {
  name: 'AppSidebar',
  directives: { Ripple },
  components: {
    [Cell.name]: Cell
  },
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
    const changeRoute = (item) => {
      const { menuName } = getCurrentLocationInfo()
      if (item.isTitle || menuName === item.doc) {
        return
      }

      emit('change', item)
    }

    return {
      changeRoute
    }
  }
}
</script>

<style scoped lang="less">
@import '~@varlet/ui/es/styles/var';

.varlet-site-sidebar {
  padding: 5px 0 15px;
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
        color: @color-primary;
      }
    }

    &--active {
      position: relative;
      background: #2b79fc21;

      span {
        color: @color-primary;
      }

      &::before {
        display: block;
        content: '';
        background: @color-primary;
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
