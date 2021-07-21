<template>
  <div class="logo">
    <h1 class="varlet-home__title">
      <img class="varlet-home__image" :src="logo" />
      <span>{{ title }}</span>
    </h1>
    <h2 class="varlet-home__desc">{{ desc[lang] }}</h2>
  </div>
  <var-cell v-for="component in components" :key="component.text" @click="toComponent(component)">
    <template #extra>
      <var-icon name="chevron-right" size="14" />
    </template>
    <template #default>
      {{ component.text[lang] }}
    </template>
  </var-cell>
</template>

<script>
import Cell from '../../cell'
import Icon from '../../icon'
import Ripple from '../../ripple'
import varletConfig from '@config'
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import { watchLang, watchPlatform } from '../../utils/components'

export default {
  name: 'HomeExample',
  directives: { Ripple },
  components: {
    [Cell.name]: Cell,
    [Icon.name]: Icon,
  },
  setup() {
    const {
      title,
      pc: { menu, logo, title: desc },
    } = varletConfig
    const configComponents = menu.filter((item) => !item.isTitle && !item.nonComponent)
    const components = reactive(configComponents)
    const lang = ref('zh-CN')
    const platform = ref('mobile')
    const router = useRouter()

    watchLang((newValue) => {
      lang.value = newValue
    })

    watchPlatform((newValue) => {
      platform.value = newValue
    })

    const toComponent = (component) => {
      router.push({
        path: `/${component.doc}`,
        query: {
          language: lang.value,
          platform: platform.value,
          path: component.doc,
        },
      })
    }

    return {
      components,
      lang,
      toComponent,
      logo,
      title,
      desc,
    }
  },
}
</script>

<style scoped lang="less">
@import '../../styles/var';
.logo {
  height: 100px;
  padding-top: 30px;
  margin-bottom: 20px;
}

.varlet-home__title {
  margin: 0 0 16px;
  font-size: 32px;
}

.varlet-home__title,
.varlet-home__desc {
  padding-left: 16px;
  font-weight: normal;
  line-height: 1;
  user-select: none;
}

.varlet-home__desc {
  margin: 0 0 40px;
  color: rgba(69, 90, 100, 0.6);
  font-size: 14px;
}

.varlet-home__image {
  width: 32px;
  height: 32px;
}

.varlet-home__image,
.varlet-home__title span {
  display: inline-block;
  vertical-align: middle;
}

.varlet-home__title span {
  margin-left: 16px;
}

.var-cell {
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: all 0.3s;
  color: #555;

  &:hover {
    background: #edf5ff;
    color: @color-primary;
  }
}
</style>
