import { pathExistsSync } from 'fs-extra'

export function createPostcssOptions(path: string) {
  const defaultConfig = {
    postcssOptions: {
      plugins: ['autoprefixer']
    }
  }

  return pathExistsSync(path)
    ? {
      postcssOptions: {
        config: path,
        plugins: ['autoprefixer']
      }
    }
    : defaultConfig
}
