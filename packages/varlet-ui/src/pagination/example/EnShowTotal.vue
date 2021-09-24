<template>
  <var-pagination current="3" size="10" total="66" :simple="false" :show-total="(total) => `Total ${total} items`" />
  <var-pagination
    current="3"
    size="10"
    total="66"
    :simple="false"
    :show-total="(total, range) => `${range[0]}-${range[1]} items of ${total}`"
  />
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
