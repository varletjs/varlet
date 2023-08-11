import type { PropType } from 'vue'

export interface WatermarkFont {
  fontSize?: number
  fontVariant?: string
  fontWeight?: string
  fontStyle?: string
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
  fullscreen: {
    type: Boolean,
    default: false,
  },
  font: {
    type: Object as PropType<WatermarkFont>,
    default: () => ({
      fontStyle: 'normal',
      fontVariant: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
    }),
  },
}
