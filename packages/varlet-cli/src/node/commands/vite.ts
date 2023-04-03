import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import { build, createServer, type ViteDevServer } from 'vite'

export type ViteCommandMode = 'dev' | 'build'

export async function vite(mode: ViteCommandMode) {
  process.env.NODE_ENV = mode === 'dev' ? 'development' : 'production'

  const run = mode === 'build' ? build : createServer

  const result = await run({
    plugins: [vue(), jsx()],
  })

  if (mode === 'dev') {
    await (result as ViteDevServer).listen()
    ;(result as ViteDevServer).printUrls()
  }
}
