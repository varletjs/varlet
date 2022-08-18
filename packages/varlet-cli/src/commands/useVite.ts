import { build, createServer, type ViteDevServer } from 'vite'
import vue from '@vitejs/plugin-vue'
import { CWD } from '../shared/constant'

export async function useVite(mode: 'build' | 'dev') {
  const action = mode === 'build' ? build : createServer

  const result = await action({
    root: CWD,
    plugins: [vue()],
  })

  if (mode === 'dev') {
    await (result as ViteDevServer).listen()
    ;(result as ViteDevServer).printUrls()
  }
}
