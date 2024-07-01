import { isArray } from './is.js'

export function mergeWith<TObject extends Record<string, any>, TSource extends Record<string, any>>(
  object: TObject,
  source: TSource,
  customizer: (
    objValue: any,
    srcValue: any,
    key: string | number | symbol,
    object?: TObject,
    source?: TSource
  ) => any | void
): TObject & TSource {
  type AnyObject = Record<string | number | symbol, any>

  const isObject = (obj: any): obj is AnyObject => obj !== null && typeof obj === 'object'

  function baseMerge(target: AnyObject, src: AnyObject): AnyObject {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in src) {
      if (Object.prototype.hasOwnProperty.call(src, key)) {
        const srcValue = src[key]
        const targetValue = target[key]

        const customResult = customizer(targetValue, srcValue, key, object, source)

        if (customResult !== undefined) {
          target[key] = customResult
        } else if (isObject(srcValue)) {
          if (isObject(targetValue)) {
            target[key] = baseMerge(targetValue, srcValue)
          } else {
            target[key] = baseMerge(isArray(srcValue) ? [] : {}, srcValue)
          }
        } else {
          target[key] = srcValue
        }
      }
    }
    return target
  }

  return baseMerge(object as AnyObject, source as AnyObject) as TObject & TSource
}
