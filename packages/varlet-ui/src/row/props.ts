import { PropType } from 'vue'

function justifyValidator(justify: string) {
  return [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around'
  ].includes(justify)
}

function alignValidator(align: string) {
  return ['flex-start', 'flex-center', 'flex-end'].includes(align)
}

export const props = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: 'flex-start',
    validator: justifyValidator
  },
  align: {
    type: String,
    default: 'flex-start',
    validator: alignValidator
  },
  onClick: {
    type: Function as PropType<(e: Event) => void>
  }
}
