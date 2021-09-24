<template>
  <var-pagination current="6" total="115" :simple="false" :show-size-changer="false" />
  <var-pagination current="3" total="115" :simple="false" :size-option="[10, 20, 30, 40]" />
</template>

<script>
import Pagination from '../Pagination'

export default {
  name: 'BasicUse',
  components: {
    [Pagination.name]: Pagination,
  },
}
</script>
