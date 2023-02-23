<script setup>
import { ref } from 'vue'
import vHover from '../../hover'
import VarCard from '../../card'
import VarPaper from '../../paper'
import { pack, use } from './locale'
import { watchLang, AppType } from '@varlet/cli/client'

const translateY = ref('100%')

function handleHover(hovering) {
  translateY.value = hovering ? '0' : Math.random() > 0.5 ? '100%' : '-100%'
}

watchLang(use)
</script>

<template>
  <app-type>{{ pack.styleBinding }}</app-type>
  <var-paper
    :elevation="2"
    :width="100"
    :height="100"
    class="var-hover-example-paper"
    v-hover="{ color: '#fff', background: ' var(--color-primary)' }"
  >
    HOVER
  </var-paper>

  <app-type>{{ pack.functionBinding }}</app-type>
  <var-card
    :title="pack.title"
    :subtitle="pack.subtitle"
    :description="pack.description"
    class="var-hover-example-card"
    v-hover="handleHover"
  >
    <template #image>
      <div class="var-hover-example-card__image">
        <img src="https://varlet.gitee.io/varlet-ui/tree.jpeg" />
        <div
          class="var-hover-example-card__image__mask"
          :style="{
            transform: `translateY(${translateY})`,
          }"
        >
          HOVER
        </div>
      </div>
    </template>
  </var-card>
</template>

<style scoped lang="less">
.var-hover-example-paper {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.var-hover-example-card {
  cursor: pointer;

  &__image {
    position: relative;
    overflow: hidden;
    width: 100%;
    font-size: 0;
    line-height: 1;

    img {
      width: 100%;
    }

    &__mask {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      transition: all 0.3s;
      color: #fff;
      background-color: var(--color-primary);
      font-size: 50px;
    }
  }
}
</style>
