import { PropType } from 'vue'
import { Message } from '../locale'

export const props = {
  tag: {
    type: String,
    default: 'div',
  },
  locale: {
    type: String,
    default: 'zh-CN',
  },
  messages: {
    type: Object as PropType<Record<string, Partial<Message>>>,
  },
}
