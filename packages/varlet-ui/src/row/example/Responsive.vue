<template>
  <var-row :gutter="10">
    <var-col class="col" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">1</var-col>
    <var-col class="col" :xs="4" :sm="6" :md="8" :lg="9" :xl="11">2</var-col>
    <var-col class="col" :xs="4" :sm="6" :md="8" :lg="9" :xl="11">3</var-col>
    <var-col class="col" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">4</var-col>
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
