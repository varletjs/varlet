// import { proptype } from 'vue'

export const props = {
  current: {
    type: [Number, String],
    default: 1,
  },
  sizeData: {
    type: Array,
    default: () => [5, 10, 15],
  },
  total: {
    type: [Number, String],
    default: 1,
  },
}
