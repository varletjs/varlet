import { type PropType } from 'vue'

export type SpaceAlign = 'stretch' | 'center' | 'start' | 'end' | 'baseline' | 'flex-start' | 'flex-end'

export type SpaceDirection = 'row' | 'column'

export type SpaceJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'flex-start' | 'flex-end'

export type SpaceInternalSize = 'mini' | 'small' | 'normal' | 'large'

export type SpaceSize = SpaceInternalSize | number | string | [number | string, number | string]

export const props = {
  size: {
    type: [String, Number, Array] as PropType<SpaceSize>,
    default: 'normal',
  },
  wrap: {
    type: Boolean,
    default: true,
  },
  direction: {
    type: String as PropType<SpaceDirection>,
    default: 'row',
  },
  justify: {
    type: String as PropType<SpaceJustify>,
    default: 'flex-start',
  },
  align: String as PropType<SpaceAlign>,
  inline: Boolean,
}
