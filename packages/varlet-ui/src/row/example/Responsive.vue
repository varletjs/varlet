<template>
  <var-row :gutter="10">
    <var-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="item">1</div>
    </var-col>
    <var-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="item">2</div>
    </var-col>
    <var-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="item">3</div>
    </var-col>
    <var-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="item">4</div>
    </var-col>
  </var-row>
</template>

<style scoped lang="less">
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  background: var(--site-config-color-app-bar);
  color: #fff;
}
</style>
