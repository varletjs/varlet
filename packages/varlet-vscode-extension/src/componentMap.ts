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
  link: {
    site: '/link',
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
    characterDelta: -2,
  },
  'app-bar': {
    site: '/app-bar',
  },
  loading: {
    site: '/loading',
    closeSelf: true,
    characterDelta: -2,
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
  collapse: {
    site: '/collapse',
    attrs: ['v-model=""'],
    characterDelta: -2,
  },
  'collapse-item': {
    site: '/collapse',
    attrs: ['title=""'],
    characterDelta: -2,
  },
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
  progress: {
    site: '/progress',
    attrs: [':value=""'],
    characterDelta: -3,
    closeSelf: true,
  },
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
  steps: {
    site: '/steps',
    attrs: [':active=""'],
    characterDelta: -2,
  },
  step: {
    site: '/steps',
  },
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
  countdown: {
    site: '/countdown',
    attrs: [':time=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  'date-picker': {
    site: '/date-picker',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  'time-picker': {
    site: '/time-picker',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  dialog: {
    site: '/dialog',
  },
  form: {
    site: '/form',
  },
  'form-details': {
    site: '/form',
    closeSelf: true,
  },
  'index-bar': {
    site: '/index-bar',
  },
  'index-anchor': {
    site: 'index-anchor',
    attrs: [':index=""'],
    characterDelta: -2,
  },
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
  overlay: {
    site: '/overlay',
  },
  popup: {
    site: '/popup',
  },
  'pull-refresh': {
    site: '/pull-refresh',
    attrs: ['v-model=""'],
    characterDelta: -2,
  },
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
  switch: {
    site: '/switch',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  rate: {
    site: '/rate',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  slider: {
    site: '/slider',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  snackbar: {
    site: '/snackbar',
    attrs: ['type=""'],
    characterDelta: -2,
  },
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
  pagination: {
    site: '/pagination',
    closeSelf: true,
    characterDelta: -2,
  },
  'image-preview': {
    site: '/image-preview',
    attrs: [':images=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  space: {
    site: '/space',
  },
  'bottom-navigation': {
    site: '/bottom-navigation',
  },
  'bottom-navigation-item': {
    site: '/bottom-navigation',
    attrs: ['label=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  result: {
    site: '/result',
  },
  breadcrumbs: {
    site: '/breadcrumbs',
  },
  breadcrumb: {
    site: '/breadcrumbs',
  },
  tooltip: {
    site: '/tooltip',
  },
}
