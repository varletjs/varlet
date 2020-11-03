<template>
  <div class="varlet-button">
    <div class="varlet-button__text">
      <div class="varlet-button__span--active">{{ count }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, Ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const count: Ref<number> = ref(0)
    return {
      count
    }
  }
})
</script>

<style lang="less">
.varlet {
  &-button {
    &__text {

    }
    &__span {

    }
  }
}
</style>
