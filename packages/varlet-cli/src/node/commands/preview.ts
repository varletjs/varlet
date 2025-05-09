import fse from 'fs-extra'
import { x } from 'tinyexec'
import { SITE_OUTPUT_PATH } from '../shared/constant.js'
import logger from '../shared/logger.js'

const { pathExistsSync } = fse

export type PreviewCommandOptions = {
  port?: string
}

export async function preview(options: PreviewCommandOptions) {
  const { port = 5500 } = options
  if (!pathExistsSync(SITE_OUTPUT_PATH)) {
    logger.warning('Cannot find the site folder, you must first run the build command to build the document site')
    return
  }

  try {
    await x('live-server', [`--port=${Number(port)}`], { nodeOptions: { cwd: SITE_OUTPUT_PATH, stdio: 'inherit' } })
  } catch (e: any) {
    logger.error(e.toString())
  }
}
