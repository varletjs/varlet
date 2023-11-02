import { classes } from './array.js'

export const bigCamelize = (s: string): string => camelize(s).replace(s.charAt(0), s.charAt(0).toUpperCase())

export const camelize = (s: string): string => s.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase())

export const kebabCase = (s: string): string => {
  const ret = s.replace(/([A-Z])/g, ' $1').trim()
  return ret.split(' ').join('-').toLowerCase()
}

export type BEM<S extends string | undefined, N extends string, NC extends string> = S extends undefined
  ? NC
  : S extends `$--${infer CM}`
  ? `${N}--${CM}`
  : S extends `--${infer M}`
  ? `${NC}--${M}`
  : `${NC}__${S}`

export function createNamespaceFn<N extends string>(namespace: N) {
  return <C extends string>(name: C) => {
    const componentName = `${namespace}-${name}` as const

    const createBEM = <S extends string | undefined = undefined>(
      suffix?: S
    ): BEM<S, typeof namespace, typeof componentName> => {
      if (!suffix) {
        return componentName as any
      }

      if (suffix[0] === '$') {
        return suffix.replace('$', namespace) as any
      }

      return (suffix.startsWith('--') ? `${componentName}${suffix}` : `${componentName}__${suffix}`) as any
    }

    return {
      name: bigCamelize(componentName),
      n: createBEM,
      classes,
    }
  }
}
