export interface PresetVarletOptions {
  screens?: boolean | PresetVarletScreens
  fontSize?: boolean | PresetVarletFontSize
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
    'hsl-body': 'hsla(var(--hsl-body), <alpha-value>)',
    'hsl-text': 'hsla(var(--hsl-text), <alpha-value>)',
    'hsl-primary': 'hsla(var(--hsl-primary), <alpha-value>)',
    'hsl-info': 'hsla(var(--hsl-info), <alpha-value>)',
    'hsl-warning': 'hsla(var(--hsl-warning), <alpha-value>)',
    'hsl-danger': 'hsla(var(--hsl-danger), <alpha-value>)',
    'hsl-success': 'hsla(var(--hsl-success), <alpha-value>)',
    'hsl-disabled': 'hsla(var(--hsl-disabled), <alpha-value>)',
    'hsl-text-disabled': 'hsla(var(--hsl-text-disabled), <alpha-value>)',
    'hsl-on-primary': 'hsla(var(--hsl-on-primary), <alpha-value>)',
    'hsl-on-info': 'hsla(var(--hsl-on-info), <alpha-value>)',
    'hsl-on-warning': 'hsla(var(--hsl-on-warning), <alpha-value>)',
    'hsl-on-danger': 'hsla(var(--hsl-on-danger), <alpha-value>)',
    'hsl-on-success': 'hsla(var(--hsl-on-success), <alpha-value>)',
    'hsl-primary-container': 'hsla(var(--hsl-primary-container), <alpha-value>)',
    'hsl-info-container': 'hsla(var(--hsl-info-container), <alpha-value>)',
    'hsl-warning-container': 'hsla(var(--hsl-warning-container), <alpha-value>)',
    'hsl-danger-container': 'hsla(var(--hsl-danger-container), <alpha-value>)',
    'hsl-success-container': 'hsla(var(--hsl-success-container), <alpha-value>)',
    'hsl-on-primary-container': 'hsla(var(--hsl-on-primary-container), <alpha-value>)',
    'hsl-on-info-container': 'hsla(var(--hsl-on-info-container), <alpha-value>)',
    'hsl-on-warning-container': 'hsla(var(--hsl-on-warning-container), <alpha-value>)',
    'hsl-on-danger-container': 'hsla(var(--hsl-on-danger-container), <alpha-value>)',
    'hsl-on-success-container': 'hsla(var(--hsl-on-success-container), <alpha-value>)',
    'hsl-surface-container': 'hsla(var(--hsl-surface-container), <alpha-value>)',
    'hsl-surface-container-low': 'hsla(var(--hsl-surface-container-low), <alpha-value>)',
    'hsl-surface-container-high': 'hsla(var(--hsl-surface-container-high), <alpha-value>)',
    'hsl-surface-container-highest': 'hsla(var(--hsl-surface-container-highest), <alpha-value>)',
    'hsl-inverse-surface': 'hsla(var(--hsl-inverse-surface), <alpha-value>)',
    'hsl-outline': 'hsla(var(--hsl-outline), <alpha-value>)',
    'hsl-on-surface-variant': 'hsla(var(--hsl-on-surface-variant), <alpha-value>)',
  }

  if (colors === true) {
    return defaultColors
  }

  return { ...defaultColors, ...colors }
}

export function presetVarlet(options: PresetVarletOptions = {}) {
  return {
    theme: {
      extend: {
        colors: getColors(options),
        screens: getScreens(options),
        fontSize: getFontSize(options),
      },
    },
  }
}
