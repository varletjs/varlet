import type { PropType } from 'vue'

export type TableSurface = 'low'

export const props = {
  fullWidth: {
    type: [Number, String],
    default: '100%',
  },
  scrollerHeight: {
    type: [Number, String],
  },
  elevation: {
    type: [Boolean, Number, String],
    default: true,
  },
  surface: String as PropType<TableSurface>,
  plain: Boolean,
  bordered: Boolean,
}
