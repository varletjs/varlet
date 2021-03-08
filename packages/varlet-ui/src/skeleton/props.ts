import { PropType } from 'vue'

export const props = {
  loading: {
    type: Boolean,
    default: true,
  },
  title: {
    type: Boolean,
    default: false,
  },
  card: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: Boolean,
    default: false,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  titleWidth: {
    type: [Number, String],
  },
  cardHeight: {
    type: [Number, String],
  },
  avatarSize: {
    type: [Number, String],
  },
  rows: {
    type: [Number, String],
    default: 3,
  },
  rowsWidth: {
    type: Array as PropType<(string | number)[]>,
    default: () => [],
  },
}
