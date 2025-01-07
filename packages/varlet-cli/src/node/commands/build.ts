import fse from 'fs-extra'
import { build as buildVite } from 'vite'
import { buildSiteEntry } from '../compiler/compileSiteEntry.js'
import { getVarletConfig } from '../config/varlet.config.js'
import { getBuildConfig } from '../config/vite.config.js'
import { SRC_DIR } from '../shared/constant.js'

const { ensureDirSync } = fse

export async function build() {
  process.env.NODE_ENV = 'production'

  ensureDirSync(SRC_DIR)
  await buildSiteEntry(false)
  const varletConfig = await getVarletConfig()
  const buildConfig = getBuildConfig(varletConfig)

  await buildVite(buildConfig)
}
