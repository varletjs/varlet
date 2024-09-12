import fse from 'fs-extra'
import logger from '../shared/logger.js'
import { x } from 'tinyexec'
import { SITE_OUTPUT_PATH } from '../shared/constant.js'

const { pathExistsSync } = fse

export async function preview() {
  if (!pathExistsSync(SITE_OUTPUT_PATH)) {
    logger.warning('Cannot find the site folder, you must first run the build command to build the document site')
    return
  }

  try {
    await x('live-server', ['--port=5500'], { nodeOptions: { cwd: SITE_OUTPUT_PATH, stdio: 'inherit' } })
  } catch (e: any) {
    logger.error(e.toString())
  }
}
