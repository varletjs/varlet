export const isString = (val: unknown): val is string => typeof val === 'string'

export const isBaseObject = (val: unknown) =>
	Object.prototype.toString.call(val) === '[object Object]'
