import prompts from 'prompts'
import ora from 'ora'
import execa from 'execa'
import logger from '../shared/logger'
import semver from 'semver'
import glob from 'glob'
import { CWD } from '../shared/constant'
import { resolve } from 'path'
import { writeFileSync } from 'fs-extra'
import { changelog } from './changelog'
import type { ReleaseType } from 'semver'
import type { ExecaChildProcess, Options as ExecaOptions } from 'execa'

const pkgPath = resolve(CWD, 'package.json')
const pkg: { name: string; version: string } = require(pkgPath)
const currentVersion = pkg.version

const releaseTypes: ReleaseType[] = ['premajor', 'preminor', 'prepatch', 'prerelease', 'major', 'minor', 'patch']

type RunFun = (bin: string, args: string[], opts?: ExecaOptions<string>) => ExecaChildProcess<string>

const run: RunFun = (bin, args, opts = {}) =>
  execa(bin, args, {
    stdio: 'inherit',
    ...opts,
  })

const inc = (i: ReleaseType) => semver.inc(currentVersion, i, `alpha.${Date.now()}`)

async function isWorktreeEmpty() {
  const ret = await run('git', ['status', '--porcelain'])
  return !ret.stdout
}

async function publish(preRelease: boolean) {
  const s = ora().start('Publishing all packages\n')
  const args = ['-r', 'publish', '--no-git-checks', '--access', 'public']

  if (preRelease) {
    args.push('--tag', 'alpha')
  }

  const { stderr, stdout } = await run('pnpm', args)
  if (stderr?.includes('npm ERR!')) {
    throw new Error('\n' + stderr)
  } else {
    s.succeed('Publish all packages successfully')
    stdout && logger.info(stdout)
  }
}

async function pushGit(version: string, remote = 'origin') {
  const s = ora().start('Pushing to remote git repository')
  await run('git', ['add', '.'])
  await run('git', ['commit', '-m', `release: v${version}`])
  await run('git', ['tag', `v${version}`])
  await run('git', ['push', remote, `v${version}`])
  const ret = await run('git', ['push'])
  s.succeed('Push remote repository successfully')

  ret.stdout && logger.info(ret.stdout)
}

function updateVersion(version: string) {
  const packageJsons = glob.sync('packages/*/package.json')
  packageJsons.push('package.json')

  packageJsons.forEach((path: string) => {
    const file = resolve(CWD, path)
    const config = require(file)

    config.version = version
    writeFileSync(file, JSON.stringify(config, null, 2))
  })
}

export async function release(cmd: { remote?: string }) {
  try {
    if (!currentVersion) {
      logger.error('Your package is missing the version field')
      return
    }

    if (!(await isWorktreeEmpty())) {
      logger.error('Git worktree is not empty, please commit changed')
      return
    }

    let targetVersion = currentVersion

    const { release }: { release: string } = await prompts({
      name: 'release',
      message: 'Please select release type',
      type: 'select',
      choices: releaseTypes
        .map((i) => `${i} (${inc(i)})`)
        .concat(['custom'])
        .map((i) => ({ value: i, title: i })),
    })

    if (release === 'custom') {
      ;({ version: targetVersion } = await prompts({
        type: 'text',
        name: 'version',
        message: 'Input custom version',
        initial: currentVersion,
      }))
    } else {
      targetVersion = release.match(/\((.*)\)/)![1]
    }

    if (!semver.valid(targetVersion)) {
      logger.error(`invalid target version: ${targetVersion}`)
      return
    }

    const isPreRelease = targetVersion.includes('alpha')
    if (isPreRelease) {
      targetVersion = targetVersion.slice(0, -2)
    }

    const { yes }: { yes: boolean } = await prompts({
      type: 'confirm',
      name: 'yes',
      message: `All packages version ${currentVersion} -> ${targetVersion}, Confirm?`,
    })

    if (!yes) return

    logger.success('\nUpdating package version...')
    updateVersion(targetVersion)

    if (!isPreRelease) {
      await changelog()
      await pushGit(targetVersion, cmd.remote)
    }

    await publish(isPreRelease)

    logger.success(`Release version ${targetVersion} successfully!`)

    if (isPreRelease) {
      try {
        await run('git', ['restore', '**/package.json'])
        await run('git', ['restore', 'package.json'])
      } catch {
        logger.error('Restore package.json has failed, please restore manually')
      }
    }
  } catch (error: any) {
    logger.error(error.toString())
    process.exit(1)
  }
}
