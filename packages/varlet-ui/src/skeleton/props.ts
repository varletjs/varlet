import { type PropType } from 'vue'

export const props = {
  loading: {
    type: Boolean,
    default: true,
  },
  title: Boolean,
  card: Boolean,
  avatar: Boolean,
  fullscreen: Boolean,
  fullscreenZIndex: {
    type: [Number, String],
    default: 100,
  },
  titleWidth: [Number, String],
  cardHeight: [Number, String],
  avatarSize: [Number, String],
  rows: {
    type: [Number, String],
    default: 3,
  },
  rowsWidth: {
    type: Array as PropType<(string | number)[]>,
    default: () => [],
  },
}
