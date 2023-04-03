import type { Plugin } from 'vite'
import fse from 'fs-extra'

const { copySync, copyFileSync } = fse

export interface CopyPath {
  from: string
  to: string
  type: 'folder' | 'file'
}

export interface CopyOptions {
  paths: CopyPath[]
}

export function copy(options: CopyOptions): Plugin {
  return {
    name: 'vite-plugin-varlet-copy',

    buildStart() {
      options.paths.forEach((copyPath) => {
        try {
          ;(copyPath.type === 'folder' ? copySync : copyFileSync)(copyPath.from, copyPath.to)
        } catch (e: any) {
          this.warn(e)
        }
      })
    },
  }
}
