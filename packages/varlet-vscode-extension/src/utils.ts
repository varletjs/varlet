export function kebabCase(str: string) {
  str = str.replace(str.charAt(0), str.charAt(0).toLowerCase())
  return str.replace(/([a-z])([A-Z])/g, (_, p1, p2) => p1 + '-' + p2.toLowerCase())
}

export function camelize(str: string): string {
  return str.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase())
}

export function bigCamelize(str: string): string {
  return camelize(str).replace(str.charAt(0), str.charAt(0).toUpperCase())
}
