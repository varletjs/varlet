<template>
  <div class="varlet-site-sidebar var-elevation--3">
    <a
      class="varlet-site-sidebar__link"
      v-for="(item, index) in menu"
      :key="index"
      :href="item.type !== MenuTypes.TITLE ? `#/${language}/${item.doc}` : undefined"
      @click.prevent
    >
      <var-cell
        class="varlet-site-sidebar__item"
        :id="item.doc"
        :class="{
          'varlet-site-sidebar__item--active': item.doc === menuName,
          'varlet-site-sidebar__cell': item.type !== menuTypes.TITLE,
          'varlet-site-sidebar__title': item.type === menuTypes.TITLE,
        }"
        v-ripple="{
          disabled: item.type === menuTypes.TITLE,
        }"
        @click="changeRoute(item)"
      >
        <span class="varlet-site-sidebar__indicator"></span>
        <span class="varlet-site-sidebar__item--title" v-if="item.type === menuTypes.TITLE">{{
          item.text[language]
        }}</span>
        <span v-else>{{ item.text[language] }}</span>
      </var-cell>
    </a>
  </div>
</template>

<script setup lang="ts">
import { MenuTypes, type Menu } from '../../utils'
import { reactive } from 'vue'

const props = defineProps<{ menu: Menu[]; menuName: string; language: string }>()
const emit = defineEmits(['change'])
const menuTypes = reactive(MenuTypes)

const changeRoute = (item: Menu) => {
  if (item.type === MenuTypes.TITLE || props.menuName === item.doc) {
    return
  }

  emit('change', item)
}
</script>

<style lang="less">
@keyframes indicator-fade-in {
  from {
    transform: scaleY(0);
    opacity: 0.3;
  }

  to {
    transform: scaleY(1);
    opacity: 1;
  }
}

.varlet-site-sidebar {
  padding: 0 0 15px;
  position: fixed;
  width: 246px;
  top: 60px;
  bottom: 0;
  left: 0;
  z-index: 6;
  overflow-y: scroll;
  box-shadow: 0 8px 12px var(--site-config-color-shadow);
  background: var(--site-config-color-bar);
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &__link {
    display: block;
    color: initial;
    text-decoration: none;
    outline: none;
  }

  &__item {
    margin: 0 !important;
    user-select: none !important;
    padding: 10px 28px !important;

    &--title {
      font-size: 16px !important;
      font-weight: 600 !important;
      color: var(--site-config-color-text) !important;
      line-height: 28px !important;
      padding: 8px 0 8px !important;
    }

    &--active {
      position: relative;
      background: var(--site-config-color-side-bar-active-background);

      span {
        color: var(--site-config-color-side-bar);
      }

      &::before {
        display: block;
        content: '';
        background: var(--site-config-color-side-bar);
        width: 4px;
        height: 40px;
        position: absolute;
        left: 0;
        animation: indicator-fade-in 0.25s;
      }
    }
  }

  &__cell {
    cursor: pointer !important;
    font-size: 14px !important;
    color: var(--site-config-color-text) !important;
    transition: color 0.2s !important;

    &:hover {
      color: var(--site-config-color-side-bar) !important;
    }
  }

  &__title {
    margin-top: 10px !important;
    cursor: default;
  }
}
</style>
