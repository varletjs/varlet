import { compileStyleVars } from '../compiler/compileStyleVars.js'
import logger from '../shared/logger.js'

export async function styleVars() {
  await compileStyleVars()
  logger.success('style vars compilation success!')
}
