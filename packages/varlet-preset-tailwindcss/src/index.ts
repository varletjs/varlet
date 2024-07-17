export interface PresetVarletOptions {
  screens?: boolean | PresetVarletScreens
  fontSize?: boolean | PresetVarletFontSize
  opacity?: boolean | PresetVarletOpacity
  colors?: boolean | PresetVarletColors
}

export interface PresetVarletScreens {
  sm?: string | number
  md?: string | number
  lg?: string | number
  xl?: string | number
}

export interface PresetVarletFontSize {
  xs?: string
  sm?: string
  md?: string
  lg?: string
}

export interface PresetVarletOpacity {
  disabled?: string
  hover?: string
  focus?: string
}

export interface PresetVarletColors {
  body?: string
  text?: string
  primary?: string
  info?: string
  warning?: string
  danger?: string
  success?: string
  disabled?: string
  'text-disabled'?: string
  'on-primary'?: string
  'on-info'?: string
  'on-warning'?: string
  'on-danger'?: string
  'on-success'?: string
  'primary-container'?: string
  'info-container'?: string
  'warning-container'?: string
  'danger-container'?: string
  'success-container'?: string
  'on-primary-container'?: string
  'on-info-container'?: string
  'on-warning-container'?: string
  'on-danger-container'?: string
  'on-success-container'?: string
  'surface-container'?: string
  'surface-container-low'?: string
  'surface-container-high'?: string
  'surface-container-highest'?: string
  'inverse-surface'?: string
  outline?: string
  'on-surface-variant'?: string
  'hsl-body'?: string
  'hsl-text'?: string
  'hsl-primary'?: string
  'hsl-info'?: string
  'hsl-warning'?: string
  'hsl-danger'?: string
  'hsl-success'?: string
  'hsl-disabled'?: string
  'hsl-text-disabled'?: string
  'hsl-on-primary'?: string
  'hsl-on-info'?: string
  'hsl-on-warning'?: string
  'hsl-on-danger'?: string
  'hsl-on-success'?: string
  'hsl-primary-container'?: string
  'hsl-info-container'?: string
  'hsl-warning-container'?: string
  'hsl-danger-container'?: string
  'hsl-success-container'?: string
  'hsl-on-primary-container'?: string
  'hsl-on-info-container'?: string
  'hsl-on-warning-container'?: string
  'hsl-on-danger-container'?: string
  'hsl-on-success-container'?: string
  'hsl-surface-container'?: string
  'hsl-surface-container-low'?: string
  'hsl-surface-container-high'?: string
  'hsl-surface-container-highest'?: string
  'hsl-inverse-surface'?: string
  'hsl-outline'?: string
  'hsl-on-surface-variant'?: string
}

function getScreens(options: PresetVarletOptions = {}) {
  const { screens = true } = options

  if (!screens) {
    return
  }

  const defaultScreens: PresetVarletScreens = {
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1920px',
  }

  if (screens === true) {
    return defaultScreens
  }

  return {
    ...defaultScreens,
    ...screens,
  }
}

function getFontSize(options: PresetVarletOptions = {}) {
  const { fontSize = true } = options

  if (!fontSize) {
    return
  }

  const defaultFontSize: PresetVarletFontSize = {
    xs: 'var(--font-size-xs)',
    sm: 'var(--font-size-sm)',
    md: 'var(--font-size-md)',
    lg: 'var(--font-size-lg)',
  }

  if (fontSize === true) {
    return defaultFontSize
  }

  return {
    ...defaultFontSize,
    ...fontSize,
  }
}

function getOpacity(options: PresetVarletOptions = {}) {
  const { opacity = true } = options

  if (!opacity) {
    return
  }

  const defaultOpacity: PresetVarletOpacity = {
    disabled: 'var(--font-size-disabled)',
    hover: 'var(--font-size-hover)',
    focus: 'var(--font-size-focus)',
  }

  if (opacity === true) {
    return defaultOpacity
  }

  return {
    ...defaultOpacity,
    ...opacity,
  }
}

function getColors(options: PresetVarletOptions = {}) {
  const { colors = true } = options

  if (!colors) {
    return
  }

  const defaultColors: PresetVarletColors = {
    body: 'var(--color-body)',
    text: 'var(--color-text)',
    primary: 'var(--color-primary)',
    info: 'var(--color-info)',
    warning: 'var(--color-warning)',
    danger: 'var(--color-danger)',
    success: 'var(--color-success)',
    disabled: 'var(--color-disabled)',
    'text-disabled': 'var(--color-text-disabled)',
    'on-primary': 'var(--color-on-primary)',
    'on-info': 'var(--color-on-info)',
    'on-warning': 'var(--color-on-warning)',
    'on-danger': 'var(--color-on-danger)',
    'on-success': 'var(--color-on-success)',
    'primary-container': 'var(--color-primary-container)',
    'info-container': 'var(--color-info-container)',
    'warning-container': 'var(--color-warning-container)',
    'danger-container': 'var(--color-danger-container)',
    'success-container': 'var(--color-success-container)',
    'on-primary-container': 'var(--color-on-primary-container)',
    'on-info-container': 'var(--color-on-info-container)',
    'on-warning-container': 'var(--color-on-warning-container)',
    'on-danger-container': 'var(--color-on-danger-container)',
    'on-success-container': 'var(--color-on-success-container)',
    'surface-container': 'var(--color-surface-container)',
    'surface-container-low': 'var(--color-surface-container-low)',
    'surface-container-high': 'var(--color-surface-container-high)',
    'surface-container-highest': 'var(--color-surface-container-highest)',
    'inverse-surface': 'var(--color-inverse-surface)',
    outline: 'var(--color-outline)',
    'on-surface-variant': 'var(--color-on-surface-variant)',
    'hsl-body': '0, 0%, 100%',
    'hsl-text': '0, 0%, 20%',
    'hsl-primary': '220, 99%, 61%',
    'hsl-info': '196, 100%, 47%',
    'hsl-warning': '37, 100%, 50%',
    'hsl-danger': '4, 90%, 58%',
    'hsl-success': '164, 100%, 38%',
    'hsl-disabled': '0, 0%, 88%',
    'hsl-text-disabled': '0, 0%, 67%',
    'hsl-on-primary': '0, 0%, 100%',
    'hsl-on-info': '0, 0%, 100%',
    'hsl-on-warning': '0, 0%, 100%',
    'hsl-on-danger': '0, 0%, 100%',
    'hsl-on-success': '0, 0%, 100%',
    'hsl-primary-container': '220, 99%, 61%;',
    'hsl-info-container': '196, 100%, 47%',
    'hsl-warning-container': '37, 100%, 50%',
    'hsl-danger-container': '4, 90%, 58%',
    'hsl-success-container': '164, 100%, 38%',
    'hsl-on-primary-container': '0, 0%, 100%',
    'hsl-on-info-container': '0, 0%, 100%',
    'hsl-on-warning-container': '0, 0%, 100%',
    'hsl-on-danger-container': '0, 0%, 100%',
    'hsl-on-success-container': '0, 0%, 100%',
    'hsl-surface-container': '0, 0%, 100%',
    'hsl-surface-container-low': '0, 0%, 100%',
    'hsl-surface-container-high': '0, 0%, 100%',
    'hsl-surface-container-highest': '0, 0%, 100%',
    'hsl-inverse-surface': '0, 0%, 20%',
    'hsl-outline': '0, 0%, 0%',
    'hsl-on-surface-variant': '0, 0%, 53%',
  }

  if (colors === true) {
    return defaultColors
  }

  return { ...defaultColors, ...colors }
}

export function presetVarlet(options: PresetVarletOptions = {}) {
  return {
    theme: {
      colors: getColors(options),
      screens: getScreens(options),
      fontSize: getFontSize(options),
      opacity: getOpacity(options),
    },
  }
}
