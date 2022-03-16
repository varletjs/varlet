export interface ComponentDescriptor {
  site: string
  attrs?: string[]
  characterDelta?: number
  closeSelf?: boolean
}

export const componentMap: Record<string, ComponentDescriptor> = {
  button: {
    site: '/button',
    attrs: ['type="primary"'],
  },
  cell: {
    site: '/cell',
  },
  icon: {
    site: '/icon',
    attrs: ['name=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  image: {
    site: '/image',
    attrs: ['src=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  input: {
    site: '/input',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  'back-top': {
    site: '/back-top',
    closeSelf: true,
  },
  'app-bar': {
    site: '/app-bar',
  },
  loading: {
    site: '/loading',
    closeSelf: true,
  },
  chip: {
    site: '/chip',
  },
  badge: {
    site: '/badge',
    attrs: ['type="primary"'],
  },
  skeleton: {
    site: '/skeleton',
    attrs: ['loading=""'],
    characterDelta: -2,
  },
  // collapse: '/collapse',
  // 'collapse-item': '/collapse',
  row: {
    site: '/row',
  },
  col: {
    site: '/row',
    attrs: [':span=""'],
    characterDelta: -2,
  },
  sticky: {
    site: '/sticky',
  },
  // progress: '/progress',
  list: {
    site: '/list',
    attrs: ['@load=""'],
    characterDelta: -2,
  },
  swipe: {
    site: '/swipe',
  },
  'swipe-item': {
    site: '/swipe',
  },
  // steps: '/steps',
  // step: '/steps',
  tabs: {
    site: '/tabs',
  },
  tab: {
    site: '/tabs',
  },
  'tabs-items': {
    site: '/tabs',
  },
  'tab-item': {
    site: '/tabs',
  },
  counter: {
    site: '/counter',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  // countdown: '/countdown',
  // 'date-picker': '/date-picker',
  // 'time-picker': '/time-picker',
  dialog: {
    site: '/dialog',
  },
  form: {
    site: '/form',
  },
  // 'index-anchor': '/index-bar',
  // 'index-bar': '/index-bar',
  select: {
    site: '/select',
    attrs: ['v-model=""'],
    characterDelta: -2,
  },
  option: {
    site: '/select',
    attrs: ['label=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  menu: {
    site: '/menu',
  },
  'action-sheet': {
    site: '/action-sheet',
    attrs: [':actions=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  picker: {
    site: '/picker',
    attrs: [':columns=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  popup: {
    site: '/popup',
  },
  // 'pull-refresh': '/pull-refresh',
  radio: {
    site: '/radio-group',
  },
  'radio-group': {
    site: '/radio-group',
    attrs: ['v-model=""'],
    characterDelta: -2,
  },
  checkbox: {
    site: '/checkbox-group',
  },
  'checkbox-group': {
    site: '/checkbox-group',
    attrs: ['v-model=""'],
    characterDelta: -2,
  },
  // switch: '/switch',
  rate: {
    site: '/rate',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  // slider: '/slider',
  // snackbar: '/snackbar',
  uploader: {
    site: '/uploader',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  card: {
    site: '/card',
  },
  divider: {
    site: '/divider',
    closeSelf: true,
  },
  'style-provider': {
    site: '/style-provider',
    attrs: [':style-vars=""'],
    characterDelta: -2,
  },
  table: {
    site: '/table',
  },
  // pagination: '/pagination',
  'image-preview': {
    site: '/image-preview',
    attrs: [':images=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  space: {
    site: '/space',
  },
}
