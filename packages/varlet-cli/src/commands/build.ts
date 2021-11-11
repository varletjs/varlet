import { ensureDirSync } from 'fs-extra'
import { SRC_DIR } from '../shared/constant'
import { build as buildVite } from 'vite'
import { getBuildConfig } from '../config/vite.config'
import { getVarletConfig } from '../config/varlet.config'
import { buildSiteEntry } from '../compiler/compileSiteEntry'

export async function build() {
  process.env.NODE_ENV = 'production'

  ensureDirSync(SRC_DIR)
  await buildSiteEntry()
  const varletConfig = getVarletConfig()
  const buildConfig = getBuildConfig(varletConfig)

  await buildVite(buildConfig)
}
