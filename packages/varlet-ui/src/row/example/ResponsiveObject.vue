<template>
  <var-row :gutter="10">
    <var-col
      class="col"
      :xs="{ span: 12, offset: 6 }"
      :sm="{ span: 6 }"
      :md="{ span: 4, offset: 4 }"
      :lg="{ span: 3, offset: 3 }"
      :xl="{ span: 2, offset: 2 }"
    >
      1
    </var-col>
    <var-col
      class="col"
      :xs="{ span: 12, offset: 6 }"
      :sm="{ span: 6 }"
      :md="{ span: 4, offset: 4 }"
      :lg="{ span: 3, offset: 3 }"
      :xl="{ span: 2, offset: 2 }"
    >
      2
    </var-col>
    <var-col
      class="col"
      :xs="{ span: 12, offset: 6 }"
      :sm="{ span: 6 }"
      :md="{ span: 4, offset: 4 }"
      :lg="{ span: 3, offset: 3 }"
      :xl="{ span: 2, offset: 2 }"
    >
      3
    </var-col>
    <var-col
      class="col"
      :xs="{ span: 12, offset: 6 }"
      :sm="{ span: 6 }"
      :md="{ span: 4, offset: 4 }"
      :lg="{ span: 3, offset: 3 }"
      :xl="{ span: 2, offset: 2 }"
    >
      4
    </var-col>
  </var-row>
</template>

<script>
import { defineComponent } from 'vue'
import VarRow from '../../row'
import VarCol from '../../col'

export default defineComponent({
  components: {
    VarRow,
    VarCol,
  },
})
</script>

<style scoped lang="less">
.var-col {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 36px;
  background: var(--site-config-color-app-bar);
  background-clip: content-box;
  margin-bottom: 10px;
  color: #fff;
}
</style>
