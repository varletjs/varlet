import logger from '../shared/logger'
import execa from 'execa'
import { SITE_OUTPUT_PATH } from '../shared/constant'
import { pathExistsSync } from 'fs-extra'

export async function preview() {
  if (!pathExistsSync(SITE_OUTPUT_PATH)) {
    logger.warning('Cannot find the site folder, you must first run the build command to build the document site')
    return
  }

  try {
    await execa.command('live-server --port=5500', { cwd: SITE_OUTPUT_PATH }).stdout?.pipe(process.stdout)
  } catch (e: any) {
    logger.error(e.toString())
  }
}
