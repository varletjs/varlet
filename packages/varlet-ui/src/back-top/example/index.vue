<template>
  <div>
    <var-cell v-for="list in lists" :key="list">Scroll to bottom {{ list }}</var-cell>
    <var-back-top :duration="300" />
  </div>
</template>

<script>
import BackTop from '..'
import Cell from '../../cell'

const lists = [...Array(100).keys()]

export default {
  name: 'BackTopExample',
  components: {
    [BackTop.name]: BackTop,
    [Cell.name]: Cell,
  },
  setup() {
    return {
      lists,
    }
  },
}
</script>
