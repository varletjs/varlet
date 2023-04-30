import { build } from 'vite'
import { getExtensionConfig, type ExtensionMode } from '../config/vite.config.js'

export type ExtensionCommandMode = ExtensionMode

export async function extension(mode: ExtensionCommandMode) {
  await build(getExtensionConfig(mode))
}
