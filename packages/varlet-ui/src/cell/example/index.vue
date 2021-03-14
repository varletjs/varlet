<template>
  <div>
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-cell> {{ pack.content }} </var-cell>
    <var-cell> {{ pack.content }} </var-cell>
  </div>
  <div>
    <app-type>{{ pack.showIcon }}</app-type>
    <var-cell icon="fire" :title="pack.content">
      <template #extra>
        <var-icon name="information" />
      </template>
    </var-cell>
    <var-cell icon="fire" :title="pack.content">
      <template #extra>
        <var-icon name="information" />
      </template>
    </var-cell>
  </div>
  <div>
    <app-type>{{ pack.showDesc }}</app-type>
    <var-cell icon="fire" :title="pack.content" :desc="pack.description">
      <template #extra>
        <var-icon name="information" />
      </template>
    </var-cell>
    <var-cell :title="pack.content" :desc="pack.description" />
  </div>
  <div>
    <app-type>{{ pack.showBorder }}</app-type>
    <var-cell border> {{ pack.content }} </var-cell>
    <var-cell border> {{ pack.content }} </var-cell>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Icon from '../../icon'
import Cell from '..'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'

export default defineComponent({
  name: 'CellExample',
  components: {
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    AppType,
  },
  setup() {
    watchLang(use)

    return {
      pack,
    }
  },
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
