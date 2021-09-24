<template>
  <var-pagination current="3" size="10" total="66" :simple="false" :show-total="(total) => `共 ${total} 条`" />
  <var-pagination
    current="3"
    size="10"
    total="66"
    :simple="false"
    :show-total="(total, range) => `${total} 条中的 ${range[0]}-${range[1]}`"
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
