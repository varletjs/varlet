import { compileStyleVars } from '../compiler/compileStyleVars.js'
import logger from '../shared/logger.js'

export function styleVars() {
  compileStyleVars()
  logger.success('style vars compilation success!')
}
