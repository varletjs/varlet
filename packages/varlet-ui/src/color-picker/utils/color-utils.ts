// Utilities
import { ref } from 'vue'
import { chunk, padEnd, has, keepDecimal } from './helpers'
import {
  ColorPickerColor,
  InitialColor,
  position,
  ColorInt,
  HSV,
  HSVA,
  RGB,
  RGBA,
  HSL,
  HSLA,
  Hex,
  Hexa,
  Color,
} from './color-utils-types'

export const nullColor = { h: 0, s: 0, v: 1, a: 1 }

export function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, fields: K[]): Omit<T, K> {
  const shallowCopy = Object.assign({}, obj)
  for (let i = 0; i < fields.length; i += 1) {
    const key = fields[i]
    delete shallowCopy[key]
  }
  return shallowCopy
}
export function isCssColor(color?: string | false): boolean {
  return !!color && !!color.match(/^(#|var\(--|(rgb|hsl)a?\()/)
}

export function colorToInt(color: Color): ColorInt {
  let rgb

  if (typeof color === 'number') {
    rgb = color
  } else if (typeof color === 'string') {
    let c = color[0] === '#' ? color.substring(1) : color
    if (c.length === 3) {
      c = c
        .split('')
        .map((char) => char + char)
        .join('')
    }
    if (c.length !== 6) {
      // consoleWarn(`'${color}' is not a valid rgb color`)
    }
    rgb = parseInt(c, 16)
  } else {
    throw new TypeError(
      `Colors can only be numbers or strings, recieved ${color == null ? color : color.constructor.name} instead`
    )
  }

  if (rgb < 0) {
    // consoleWarn(`Colors cannot be negative: '${color}'`)
    rgb = 0
  } else if (rgb > 0xffffff || isNaN(rgb)) {
    // consoleWarn(`'${color}' is not a valid rgb color`)
    rgb = 0xffffff
  }

  return rgb
}
export function intToHex(color: ColorInt): string {
  let hexColor: string = color.toString(16)

  if (hexColor.length < 6) {
    hexColor = '0'.repeat(6 - hexColor.length) + hexColor
  }

  return '#' + hexColor
}

export function colorToHex(color: Color): string {
  return intToHex(colorToInt(color))
}

/**
 * Converts HSVA to RGBA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param color HSVA color as an array [0-360, 0-1, 0-1, 0-1]
 */
export function HSVAtoRGBA(hsva: HSVA): RGBA {
  const { h, s, v, a } = hsva
  const f = (n: number) => {
    const k = (n + h / 60) % 6
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0)
  }

  const rgb = [f(5), f(3), f(1)].map((cv) => Math.round(cv * 255))

  return { r: rgb[0], g: rgb[1], b: rgb[2], a }
}

/**
 * Converts RGBA to HSVA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param color RGBA color as an array [0-255, 0-255, 0-255, 0-1]
 */
export function RGBAtoHSVA(rgba: RGBA): HSVA {
  if (!rgba) {
    return { h: 0, s: 1, v: 1, a: 1 }
  }

  const r = rgba.r / 255
  const g = rgba.g / 255
  const b = rgba.b / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  let h = 0
  if (max !== min) {
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min))
    } else if (max === g) {
      h = 60 * (2 + (b - r) / (max - min))
    } else if (max === b) {
      h = 60 * (4 + (r - g) / (max - min))
    }
  }

  if (h < 0) {
    h += 360
  }

  const s = max === 0 ? 0 : (max - min) / max
  const hsv = [h, s, max]

  return { h: Math.round(hsv[0]), s: hsv[1], v: hsv[2], a: rgba.a }
}

export function HSVAtoHSLA(hsva: HSVA): HSLA {
  const { h, s, v, a } = hsva

  const l = v - (v * s) / 2

  const sprime = l === 1 || l === 0 ? 0 : (v - l) / Math.min(l, 1 - l)

  return { h: Math.round(h), s: sprime, l, a }
}

export function HSLAtoHSVA(hsl: HSLA): HSVA {
  const { h, s, l, a } = hsl

  const v = l + s * Math.min(l, 1 - l)

  const sprime = v === 0 ? 0 : 2 - (2 * l) / v

  return { h: Math.round(h), s: sprime, v, a }
}

export function RGBAtoCSS(rgba: RGBA): string {
  return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
}

export function RGBAtoHex(rgba: RGBA): Hex {
  const toHex = (v: number) => {
    const h = Math.round(v).toString(16)
    // return ('00'.substring(0, 2 - h.length) + h).toUpperCase()
    return '00'.substring(0, 2 - h.length) + h
  }
  return `#${[toHex(rgba.r), toHex(rgba.g), toHex(rgba.b), toHex(Math.round(rgba.a * 255))].join('')}`
}

export function HexToRGBA(hex: Hex): RGBA {
  const rgba = chunk(hex.slice(1), 2).map((c: string) => parseInt(c, 16))

  return {
    r: rgba[0],
    g: rgba[1],
    b: rgba[2],
    a: Math.round((rgba[3] / 255) * 100) / 100,
  }
}

export function HexToHSVA(hex: Hex): HSVA {
  const rgb = HexToRGBA(hex)
  return RGBAtoHSVA(rgb)
}

export function HSVAtoHex(hsva: HSVA): Hex {
  return RGBAtoHex(HSVAtoRGBA(hsva!))
}

export function parseHex(hex: string): Hex {
  if (hex.startsWith('#')) {
    hex = hex.slice(1)
  }

  hex = hex.replace(/([^0-9a-f])/gi, 'F')

  if (hex.length === 3 || hex.length === 4) {
    hex = hex
      .split('')
      .map((x) => x + x)
      .join('')
  }

  if (hex.length === 6) {
    hex = padEnd(hex, 8, 'F')
  } else {
    hex = padEnd(padEnd(hex, 6), 8, 'F')
  }

  return hex as Hex
}

export function RGBtoInt(rgba: RGBA): ColorInt {
  return (rgba.r << 16) + (rgba.g << 8) + rgba.b
}

export function fromHSVA(hsva: HSVA): Partial<ColorPickerColor> {
  hsva = { ...hsva }
  const hexa = HSVAtoHex(hsva)
  const hsla = HSVAtoHSLA(hsva)
  const rgba = HSVAtoRGBA(hsva)
  return {
    alpha: hsva.a,
    hex: hexa.substring(0, 7),
    hexa,
    hsla,
    hsva,
    hue: hsva.h,
    rgba,
  }
}
export function fromRGBA(rgba: RGBA): Partial<ColorPickerColor> {
  const hsva = RGBtoHSV(rgba)

  const hexa = RGBAtoHex(rgba)
  const hsla = HSVtoHSL(hsva)
  const hsv = { h: hsva.h, s: hsva.s, v: hsva.v }
  const hsl = { h: hsla.h, s: hsla.s, l: hsla.l }
  return {
    alpha: hsva.a,
    hex: hexa.substring(0, 7),
    hexa,
    hsla,
    hsva,
    hsv,
    hsl,
    hue: hsva.h,
    rgba,
  }
}
export function fromHexa(hexa: Hexa): Partial<ColorPickerColor> {
  const hsva = HexToHSVA(hexa)
  const hsla = HSVAtoHSLA(hsva)
  const rgba = HSVAtoRGBA(hsva)
  return {
    alpha: hsva.a,
    hex: hexa.substring(0, 7),
    hexa,
    hsla,
    hsva,
    hue: hsva.h,
    rgba,
  }
}
export function fromHSLA(hsla: HSLA): Partial<ColorPickerColor> {
  const hsva = HSLAtoHSVA(hsla)
  const hexa = HSVAtoHex(hsva)
  const rgba = HSVAtoRGBA(hsva)
  return {
    alpha: hsva.a,
    hex: hexa.substring(0, 7),
    hexa,
    hsla,
    hsva,
    hue: hsva.h,
    rgba,
  }
}
export function fromHex(hex: Hex): Partial<ColorPickerColor> {
  return fromHexa(parseHex(hex))
}

export function parseColor(color: Color, oldColor?: Partial<ColorPickerColor>): Partial<ColorPickerColor> {
  if (!color) {
    return fromRGBA({ r: 0, g: 0, b: 0, a: 1 })
  }
  if (typeof color === 'string') {
    if (color.indexOf('#') !== -1) {
      const hex = color.replace('#', '').trim()
      return fromHexa(hex)
    }
    if (color.indexOf('hsl') !== -1) {
      let alpha = 0
      const parts = color
        .replace(/hsla|hsl|\(|\)/gm, '')
        .split(/\s|,/g)
        .filter((val) => val !== '')
        .map((val) => parseFloat(val))
      if (parts.length === 4) {
        alpha = parts[3]
      } else if (parts.length === 3) {
        alpha = 1
      }
      return fromHSLA({ h: parts[0], s: parts[1], l: parts[2], a: alpha })
    }
    if (color.indexOf('rgb') !== -1) {
      let alpha = 0
      const parts = color
        .replace(/rgba|rgb|\(|\)/gm, '')
        .split(/\s|,/g)
        .filter((val) => val !== '')
        .map((val) => parseFloat(val))

      if (parts.length === 4) {
        alpha = parts[3]
      } else if (parts.length === 3) {
        alpha = 1
      }
      return fromRGBA({ r: parts[0], g: parts[1], b: parts[2], a: alpha })
    }
    if (color.indexOf('hsv') !== -1) {
      let alpha = 0
      const parts = color
        .replace(/hsva|hsv|\(|\)/gm, '')
        .split(/\s|,/g)
        .filter((val) => val !== '')
        .map((val) => parseFloat(val))

      if (parts.length === 4) {
        alpha = parts[3]
      } else if (parts.length === 3) {
        alpha = 1
      }
      return fromHSVA({ h: parts[0], s: parts[1], v: parts[2], a: alpha })
    }
    if (color === 'transparent') {
      return fromHexa('#00000000')
    }
    const hex = parseHex(color)
    if (oldColor && hex === oldColor.hexa) {
      return oldColor
    }
    return fromHexa(hex)
  }

  if (typeof color === 'object') {
    // eslint-disable-next-line no-prototype-builtins
    if (color.hasOwnProperty('alpha')) {
      return color
    }

    // eslint-disable-next-line no-prototype-builtins
    const a = color.hasOwnProperty('a') ? parseFloat((color as { a: string }).a) : 1

    if (has(color, ['r', 'g', 'b'])) {
      if (oldColor && color === oldColor.rgba) {
        return oldColor
      }
      return fromRGBA({ ...color, a } as RGBA)
    }
    if (has(color, ['h', 's', 'l'])) {
      if (oldColor && color === oldColor.hsla) {
        return oldColor
      }
      return fromHSLA({ ...color, a } as HSLA)
    }
    if (has(color, ['h', 's', 'v'])) {
      if (oldColor && color === oldColor.hsva) {
        return oldColor
      }
      return fromHSVA({ ...color, a } as HSVA)
    }
  }

  return fromRGBA({ r: 255, g: 0, b: 0, a: 1 })
}
function stripAlpha(color: Record<string, unknown>, curStripAlpha: boolean) {
  if (curStripAlpha) {
    return omit(color, ['a'])
  }

  return color
}
export function extractColor(
  color: ColorPickerColor,
  input: Color,
  mode: string,
  showAlpha: boolean
): string | ColorPickerColor | Record<string, unknown> | undefined {
  // 色相
  const hue = keepDecimal(color.hsla.h, 2)

  // 饱和度
  const hslSaturation = keepDecimal(color.hsla.s, 2)
  // 亮度
  const lightness = keepDecimal(color.hsla.l, 2)
  // red
  const red = keepDecimal(color.rgba.r)
  // green
  const green = keepDecimal(color.rgba.g)
  // blue
  const blue = keepDecimal(color.rgba.b)
  // HSV饱和度
  const hsvSaturation = keepDecimal(color.hsva.s, 2)
  // value
  const value = keepDecimal(color.hsva.v, 2)
  if (input == null) {
    return color
  }
  function isShowAlpha(curMode: string) {
    return showAlpha ? curMode + 'a' : curMode
  }
  if (typeof input === 'string') {
    if (mode === 'hex') {
      return color.hex
    }
    if (mode === 'hexa') {
      return color.hexa
    }
    if (mode === 'hsl') {
      return `${mode}(${hue}, ${hslSaturation}, ${lightness})`
    }
    if (mode === 'hsla') {
      return `${mode}(${hue}, ${hslSaturation}, ${lightness}, ${color.alpha})`
    }
    if (mode === 'rgb') {
      return `${mode}(${red}, ${green}, ${blue})`
    }
    if (mode === 'rgba') {
      return `${mode}(${red}, ${green}, ${blue}, ${color.alpha})`
    }
    if (mode === 'hsv') {
      return `${mode}(${hue}, ${hsvSaturation}, ${value})`
    }
    if (mode === 'hsva') {
      return `${mode}(${hue}, ${hsvSaturation}, ${value}, ${color.alpha})`
    }
    return input.length === 7 ? color.hex : color.hexa
  }

  if (typeof input === 'object') {
    const shouldStrip = typeof input.a === 'number' && input.a === 0 ? !!input.a : !input.a
    if (has(input, ['r', 'g', 'b'])) {
      return stripAlpha(color.rgba, shouldStrip)
    }
    if (has(input, ['h', 's', 'l'])) {
      return stripAlpha(color.hsla, shouldStrip)
    }
    if (has(input, ['h', 's', 'v'])) {
      return stripAlpha(color.hsva, shouldStrip)
    }
  }
}

export function hasAlpha(color: Color): boolean {
  if (!color) {
    return false
  }

  if (typeof color === 'string') {
    return color.length > 7
  }

  if (typeof color === 'object') {
    return has(color, ['a']) || has(color, ['alpha'])
  }

  return false
}
export const elementResize = (parentElement: HTMLElement): position => {
  const left = ref(0)
  const top = ref(0)
  window.addEventListener('resize', () => {
    left.value = parentElement?.getBoundingClientRect().left
    top.value = parentElement?.getBoundingClientRect().top + parentElement?.getBoundingClientRect().height
  })
  return {
    left,
    top,
  }
}
export function extractBaseColor(color: any, input: any) {
  if (input == null || typeof input === 'string') {
    const hex = HSVtoHex(color)

    if (color.a === 1) return hex.slice(0, 7)
    return hex
  }

  if (typeof input === 'object') {
    let converted

    if (has(input, ['r', 'g', 'b'])) converted = HSVtoRGB(color)
    else if (has(input, ['h', 's', 'l'])) converted = HSVtoHSL(color)
    else if (has(input, ['h', 's', 'v'])) converted = color

    return stripAlpha(converted, !has(input, ['a']))
  }

  return color
}
export function parseBaseColor(color: any): HSVA | null {
  if (!color) return null

  let hsva: HSVA | null = null

  if (typeof color === 'string') {
    const hex = parseHex(color)
    hsva = HexToHSV(`#${hex}`)
  }

  if (typeof color === 'object') {
    if (has(color, ['r', 'g', 'b'])) {
      hsva = RGBtoHSV(color)
    } else if (has(color, ['h', 's', 'l'])) {
      hsva = HSLtoHSV(color)
    } else if (has(color, ['h', 's', 'v'])) {
      hsva = color
    }
  }

  return hsva != null ? { ...hsva, a: hsva.a ?? 1 } : null
}
export function RGBtoRGBA(rgba: RGBA): RGBA {
  if (typeof rgba === 'string') {
    const strRgba = (/rgba?\((.*?)\)/.exec(rgba) || ['', '0,0,0,1'])[1].split(',')
    return {
      r: Number(strRgba[0]) || 0,
      g: Number(strRgba[1]) || 0,
      b: Number(strRgba[2]) || 0,
      a: Number(strRgba[3] ? strRgba[3] : 1), // Avoid the case of 0
    }
  }
  return rgba
}
export function RGBtoHSV(rgba: RGB): HSVA {
  if (!rgba) return { h: 0, s: 1, v: 1, a: 1 }

  const r = rgba.r / 255
  const g = rgba.g / 255
  const b = rgba.b / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  let h = 0

  if (max !== min) {
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min))
    } else if (max === g) {
      h = 60 * (2 + (b - r) / (max - min))
    } else if (max === b) {
      h = 60 * (4 + (r - g) / (max - min))
    }
  }

  if (h < 0) h += 360

  const s = max === 0 ? 0 : (max - min) / max
  const hsv = [h, s, max]

  return { h: hsv[0], s: hsv[1], v: hsv[2], a: rgba.a ?? 1 }
}

export type ColorPickerMode = {
  inputProps: Record<string, unknown>
  inputs: {
    [key: string]: any
    getValue: (color: any) => number | string
    getColor: (color: any, v: string) => any
  }[]
  from: (color: any) => HSV
  to: (color: HSV) => any
}

const rgba: ColorPickerMode = {
  inputProps: {
    type: 'number',
    min: 0,
  },
  inputs: [
    {
      label: 'R',
      max: 255,
      step: 1,
      getValue: (c: RGB) => Math.round(c.r),
      getColor: (c: RGB, v: string): RGB => ({ ...c, r: Number(v) }),
    },
    {
      label: 'G',
      max: 255,
      step: 1,
      getValue: (c: RGBtoHSVRGB) => Math.round(c.g),
      getColor: (c: RGB, v: string): RGB => ({ ...c, g: Number(v) }),
    },
    {
      label: 'B',
      max: 255,
      step: 1,
      getValue: (c: RGB) => Math.round(c.b),
      getColor: (c: RGB, v: string): RGB => ({ ...c, b: Number(v) }),
    },
    {
      label: 'A',
      max: 1,
      step: 0.01,
      getValue: ({ a }: RGB) => (a ? Math.round(a * 100) / 100 : 1),
      getColor: (c: RGB, v: string): RGB => ({ ...c, a: Number(v) }),
    },
  ],
  to: HSVtoRGB,
  from: RGBtoHSV,
}

const rgb = {
  ...rgba,
  inputs: rgba.inputs?.slice(0, 3),
}

const hsla: ColorPickerMode = {
  inputProps: {
    type: 'number',
    min: 0,
  },
  inputs: [
    {
      label: 'H',
      max: 360,
      step: 1,
      getValue: (c: HSL) => Math.round(c.h),
      getColor: (c: HSL, v: string): HSL => ({ ...c, h: Number(v) }),
    },
    {
      label: 'S',
      max: 1,
      step: 0.01,
      getValue: (c: HSL) => Math.round(c.s * 100) / 100,
      getColor: (c: HSL, v: string): HSL => ({ ...c, s: Number(v) }),
    },
    {
      label: 'L',
      max: 1,
      step: 0.01,
      getValue: (c: HSL) => Math.round(c.l * 100) / 100,
      getColor: (c: HSL, v: string): HSL => ({ ...c, l: Number(v) }),
    },
    {
      label: 'A',
      max: 1,
      step: 0.01,
      getValue: ({ a }: HSL) => (a ? Math.round(a * 100) / 100 : 1),
      getColor: (c: HSL, v: string): HSL => ({ ...c, a: Number(v) }),
    },
  ],
  to: HSVtoHSL,
  from: HSLtoHSV,
}

const hsl = {
  ...hsla,
  inputs: hsla.inputs.slice(0, 3),
}

const hexa: ColorPickerMode = {
  inputProps: {
    type: 'text',
  },
  inputs: [
    {
      label: 'HEXA',
      getValue: (c: string) => c,
      getColor: (c: string, v: string) => v,
    },
  ],
  to: HSVtoHex,
  from: HexToHSV,
}

const hex = {
  ...hexa,
  inputs: [
    {
      label: 'HEX',
      getValue: (c: string) => c.slice(0, 7),
      getColor: (c: string, v: string) => v,
    },
  ],
}

export const modes: Record<string, ColorPickerMode> = {
  rgb,
  rgba,
  hsl,
  hsla,
  hex,
  hexa,
}
export function HexToHSV(hex: Hex): HSV {
  const rgb = HexToRGB(hex)
  return RGBtoHSV(rgb)
}

export function HSVtoHex(hsva: HSV): Hex {
  return RGBtoHex(HSVtoRGB(hsva))
}
export function HexToRGB(hex: Hex): RGB {
  // eslint-disable-next-line prefer-const
  let [r, g, b, a] = chunk(hex.slice(1), 2).map((c: string) => parseInt(c, 16))
  a = a === undefined ? a : Math.round((a / 255) * 100) / 100
  return { r, g, b, a }
}
export function RGBtoHex({ r, g, b, a }: RGB): Hex {
  return `#${[toHex(r), toHex(g), toHex(b), a !== undefined ? toHex(Math.round(a * 255)) : 'FF'].join('')}` as Hex
}
function toHex(v: number) {
  const h = Math.round(v).toString(16)
  return ('00'.substr(0, 2 - h.length) + h).toUpperCase()
}
export function HSVtoRGB(hsva: HSVA): RGB {
  const { h, s, v, a } = hsva
  const f = (n: number) => {
    const k = (n + h / 60) % 6
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0)
  }

  const rgb = [f(5), f(3), f(1)].map((v) => Math.round(v * 255))

  return { r: rgb[0], g: rgb[1], b: rgb[2], a }
}
export function HSVtoHSL(hsva: HSVA): HSL {
  const { h, s, v, a } = hsva

  const l = v - (v * s) / 2

  const sprime = l === 1 || l === 0 ? 0 : (v - l) / Math.min(l, 1 - l)

  return { h, s: sprime, l, a }
}

export function HSLtoHSV(hsl: HSL): HSV {
  const { h, s, l, a } = hsl

  const v = l + s * Math.min(l, 1 - l)

  const sprime = v === 0 ? 0 : 2 - (2 * l) / v

  return { h, s: sprime, v, a }
}

export function RGBtoCSS({ r, g, b, a }: RGB): string {
  return a === undefined ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`
}

export function HSVtoCSS(hsva: HSV): string {
  return RGBtoCSS(HSVtoRGB(hsva))
}

export function parseDefaultColors(colors: Record<string, Record<string, string>>) {
  return Object.keys(colors).map((key) => {
    const color = colors[key]
    return color.base
      ? [
          color.base,
          color.darken4,
          color.darken3,
          color.darken2,
          color.darken1,
          color.lighten1,
          color.lighten2,
          color.lighten3,
          color.lighten4,
          color.lighten5,
        ]
      : [color.black, color.white, color.transparent]
  })
}
