import type { PropType } from 'vue'

export interface Font {
  fontSize?: number | string
  fontVariant?: string
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
  color: {
    type: String,
  },
  image: {
    type: String,
  },
  rotate: {
    type: Number,
    default: -22,
  },
  offsetX: {
    type: Number,
    default: 0,
  },
  offsetY: {
    type: Number,
    default: 0,
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
    default: 10,
  },
  opacity: {
    type: [Number, String],
    default: 0.5,
  },
  fullScreen: {
    type: Boolean,
    default: false,
  },
  font: {
    type: Object as PropType<Font>,
    default: {
      fontStyle: 'normal',
      fontVariant: 'normal',
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
      fontSize: 14,
    },
  },
}
