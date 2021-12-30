import logger from '../shared/logger'
import semver from 'semver'

function isVersion(message: string) {
  return message.startsWith('v') && semver.valid(message.slice(1))
}

export function commitLint(gitParams: string) {
  const message = require('fs').readFileSync(gitParams, 'utf-8').trim()

  const COMMIT_MESSAGE_RE =
    /^(revert|fix|feat|docs|perf|test|types|style|build|chore|release|refactor)(\(.+\))?: (.|\n)+/

  if (!isVersion(message) && !COMMIT_MESSAGE_RE.test(message)) {
    logger.error(`Commit message invalid`)
    logger.warning(`\
The rules for commit messages are as follows

Example:

feat: added a new feature
feat(ui/button): added a new feature in the ui/button scope

fix: fixed a bug
fix(ui/button): fixed a bug in the ui/button scope

docs: fixed an error in the documentation
docs(ui/button): fixed a documentation error in the ui/button scope

Allowed types:
- fix
- feat
- docs
- perf
- test
- types
- style
- build
- chore
- release
- refactor

Commit message reference: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y
参考阮一峰Commit message编写指南: https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html`)
    process.exit(1)
  }
}
