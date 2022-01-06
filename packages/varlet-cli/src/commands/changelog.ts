import ora from 'ora'
import conventionalChangelog from 'conventional-changelog'
import { createWriteStream } from 'fs-extra'
import { resolve as resolvePath } from 'path'
import { CWD } from '../shared/constant'

interface ChangelogCommandOptions {
  file?: string
  releaseCount?: number
}

export function changelog({ releaseCount = 0, file = 'CHANGELOG.md' }: ChangelogCommandOptions = {}): Promise<void> {
  const s = ora().start(`Generating changelog`)

  return new Promise((resolve) => {
    conventionalChangelog({
      preset: 'angular',
      releaseCount,
    })
      .pipe(createWriteStream(resolvePath(CWD, file)))
      .on('close', () => {
        s.succeed(`Changelog generated success!`)
        resolve()
      })
  })
}
