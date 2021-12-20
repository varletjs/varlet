import { ExtractPropTypes, PropType } from 'vue'

export const props = {
  itemKey: {
    type: [String, Number],
    default: null,
  },
  label: {
    type: [String, Number, Function],
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: [String, Object, Function],
  },
}
//  as const

// export type _PropType = ExtractPropTypes<typeof props>
