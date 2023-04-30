import logger from '../shared/logger.js'
import semver from 'semver'
import fse from 'fs-extra'

const { readFileSync } = fse

export const COMMIT_MESSAGE_RE =
  /^(revert|fix|feat|docs|perf|test|types|style|build|chore|release|refactor)(\(.+\))?!?: (.|\n)+/

export function isVersionCommitMessage(message: string) {
  return message.startsWith('v') && semver.valid(message.slice(1))
}

export function getCommitMessage(gitParams: string) {
  return readFileSync(gitParams, 'utf-8').trim()
}

export function commitLint(gitParams: string) {
  const commitMessage = getCommitMessage(gitParams)

  if (!isVersionCommitMessage(commitMessage) && !COMMIT_MESSAGE_RE.test(commitMessage)) {
    logger.error(`Commit message invalid`)
    logger.warning(`\
The rules for commit messages are as follows

Example:

feat: add a new feature
feat(ui/button): add a new feature in the ui/button scope

fix: fix a bug
fix(ui/button): fix a bug in the ui/button scope

docs: fix an error in the documentation
docs(ui/button): fix a documentation error in the ui/button scope

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
- revert

Commit message reference: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y
参考阮一峰Commit message编写指南: https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html`)
    process.exit(1)
  }
}
