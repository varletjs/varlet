<template>
  <div>
    <app-type>基本使用</app-type>
    <var-cell> This is Cell </var-cell>
    <var-cell> This is Cell </var-cell>
  </div>
  <div>
    <app-type>显示icon</app-type>
    <var-cell icon="fire" title="This is Cell">
      <template #extra>
        <var-icon name="information" />
      </template>
    </var-cell>
    <var-cell icon="fire" title="This is Cell">
      <template #extra>
        <var-icon name="information" />
      </template>
    </var-cell>
  </div>
  <div>
    <app-type>显示副标题</app-type>
    <var-cell icon="fire" title="This is Cell" label="description">
      <template #extra>
        <var-icon name="information" />
      </template>
    </var-cell>
    <var-cell title="This is Cell" label="description" />
  </div>
  <div>
    <app-type>显示分割线</app-type>
    <var-cell border> This is Cell </var-cell>
    <var-cell border> This is Cell </var-cell>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Icon from '../../icon'
import Cell from '..'

export default defineComponent({
  name: 'CellExample',
  components: {
    [Cell.name]: Cell,
    [Icon.name]: Icon,
  },
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
