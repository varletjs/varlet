import type { PropType } from 'vue'

export interface Font {
  fontColor?: string
  fontSize?: string
  fontWeight?: 'normal' | 'light' | 'weight' | number
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique'
  fontFamily?: string
}

export const props = {
  width: {
    type: Number,
    default: 100,
  },
  height: {
    type: Number,
    default: 100,
  },
  content: {
    type: String,
  },
  image: {
    type: String,
  },
  rotate: {
    type: [Number, String],
    default: -22,
  },
  gapX: {
    type: Number,
    default: 0,
  },
  gapY: {
    type: Number,
    default: 0,
  },
  zIndex: {
    type: [Number, String],
    default: 100,
  },
  opacity: {
    type: [Number, String],
    default: 1,
  },
  fullScreen: {
    type: Boolean,
    default: false,
  },
  font: {
    type: Object as PropType<Font>,
  },
}
