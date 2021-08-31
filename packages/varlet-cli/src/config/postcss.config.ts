import { pathExistsSync } from 'fs-extra'

export function createPostcssOptions(path: string) {
  const rawOptions = (pathExistsSync(path) && require(path)) || {}

  const rawPlugins = Array.isArray(rawOptions.plugins) ? rawOptions.plugins : []

  return {
    ...rawOptions,
    plugins: [require.resolve('autoprefixer'), ...rawPlugins],
  }
}
