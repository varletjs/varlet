export interface ComponentDescriptor {
  path: string
  attrs?: string[]
  characterDelta?: number
  closeSelf?: boolean
}

export const componentsMap: Record<string, ComponentDescriptor> = {
  button: {
    path: '/button',
    attrs: ['type="primary"'],
  },
  link: {
    path: '/link',
    attrs: ['type="primary"'],
  },
  cell: {
    path: '/cell',
  },
  icon: {
    path: '/icon',
    attrs: ['name='],
    closeSelf: true,
    characterDelta: -2,
  },
  image: {
    path: '/image',
    attrs: ['src=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  input: {
    path: '/input',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  'back-top': {
    path: '/back-top',
    closeSelf: true,
    characterDelta: -2,
  },
  'app-bar': {
    path: '/app-bar',
  },
  loading: {
    path: '/loading',
    closeSelf: true,
    characterDelta: -2,
  },
  chip: {
    path: '/chip',
  },
  badge: {
    path: '/badge',
    attrs: ['type="primary"'],
  },
  skeleton: {
    path: '/skeleton',
    attrs: ['loading=""'],
    characterDelta: -2,
  },
  collapse: {
    path: '/collapse',
    attrs: ['v-model=""'],
    characterDelta: -2,
  },
  'collapse-item': {
    path: '/collapse',
    attrs: ['title=""'],
    characterDelta: -2,
  },
  row: {
    path: '/row',
  },
  col: {
    path: '/row',
    attrs: [':span=""'],
    characterDelta: -2,
  },
  sticky: {
    path: '/sticky',
  },
  progress: {
    path: '/progress',
    attrs: [':value=""'],
    characterDelta: -3,
    closeSelf: true,
  },
  list: {
    path: '/list',
    attrs: ['@load=""'],
    characterDelta: -2,
  },
  swipe: {
    path: '/swipe',
  },
  'swipe-item': {
    path: '/swipe',
  },
  steps: {
    path: '/steps',
    attrs: [':active=""'],
    characterDelta: -2,
  },
  step: {
    path: '/steps',
  },
  tabs: {
    path: '/tabs',
  },
  tab: {
    path: '/tabs',
  },
  'tabs-items': {
    path: '/tabs',
  },
  'tab-item': {
    path: '/tabs',
  },
  counter: {
    path: '/counter',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  countdown: {
    path: '/countdown',
    attrs: [':time=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  'date-picker': {
    path: '/date-picker',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  'time-picker': {
    path: '/time-picker',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  dialog: {
    path: '/dialog',
  },
  form: {
    path: '/form',
  },
  'form-details': {
    path: '/form',
    closeSelf: true,
  },
  'index-bar': {
    path: '/index-bar',
  },
  'index-anchor': {
    path: 'index-anchor',
    attrs: [':index=""'],
    characterDelta: -2,
  },
  select: {
    path: '/select',
    attrs: ['v-model=""'],
    characterDelta: -2,
  },
  option: {
    path: '/select',
    attrs: ['label=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  menu: {
    path: '/menu',
  },
  'action-sheet': {
    path: '/action-sheet',
    attrs: [':actions=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  picker: {
    path: '/picker',
    attrs: [':columns=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  overlay: {
    path: '/overlay',
  },
  popup: {
    path: '/popup',
  },
  'pull-refresh': {
    path: '/pull-refresh',
    attrs: ['v-model=""'],
    characterDelta: -2,
  },
  radio: {
    path: '/radio-group',
  },
  'radio-group': {
    path: '/radio-group',
    attrs: ['v-model=""'],
    characterDelta: -2,
  },
  checkbox: {
    path: '/checkbox-group',
  },
  'checkbox-group': {
    path: '/checkbox-group',
    attrs: ['v-model=""'],
    characterDelta: -2,
  },
  switch: {
    path: '/switch',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  rate: {
    path: '/rate',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  slider: {
    path: '/slider',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  snackbar: {
    path: '/snackbar',
    attrs: ['type=""'],
    characterDelta: -2,
  },
  uploader: {
    path: '/uploader',
    attrs: ['v-model=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  card: {
    path: '/card',
  },
  divider: {
    path: '/divider',
    closeSelf: true,
  },
  'style-provider': {
    path: '/style-provider',
    attrs: [':style-vars=""'],
    characterDelta: -2,
  },
  table: {
    path: '/table',
  },
  pagination: {
    path: '/pagination',
    closeSelf: true,
    characterDelta: -2,
  },
  'image-preview': {
    path: '/image-preview',
    attrs: [':images=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  space: {
    path: '/space',
  },
  'bottom-navigation': {
    path: '/bottom-navigation',
  },
  'bottom-navigation-item': {
    path: '/bottom-navigation',
    attrs: ['label=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  result: {
    path: '/result',
  },
  breadcrumbs: {
    path: '/breadcrumbs',
  },
  breadcrumb: {
    path: '/breadcrumbs',
  },
  tooltip: {
    path: '/tooltip',
  },
  paper: {
    path: '/paper',
  },
  ellipsis: {
    path: '/ellipsis',
  },
  avatar: {
    path: '/avatar',
    attrs: ['src=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  'avatar-group': {
    path: '/avatar',
  },
}
