import inquirer from 'inquirer'
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

const releaseTypes: ReleaseType[] = ['premajor', 'preminor', 'prepatch', 'prerelease', 'major', 'minor', 'patch']

type RunFun = (bin: string, args: string[], opts?: ExecaOptions<string>) => ExecaChildProcess<string>

const run: RunFun = (bin, args, opts = {}) =>
  execa(bin, args, {
    stdio: 'inherit',
    ...opts,
  })

async function isWorktreeEmpty() {
  const ret = await run('git', ['status', '--porcelain'])
  return !ret.stdout
}

async function publish(preRelease: boolean) {
  const s = ora().start('Publishing all packages')
  const args = ['-r', 'publish', '--no-git-checks', '--access', 'public']

  preRelease && args.push('--tag', 'alpha')
  const ret = await run('pnpm', args)
  if (ret.stderr && ret.stderr.includes('npm ERR!')) {
    throw new Error('\n' + ret.stderr)
  } else {
    s.succeed('Publish all packages successfully')
    ret.stdout && logger.info(ret.stdout)
  }
}

async function pushGit(version: string, remote = 'origin') {
  const s = ora().start('Pushing to remote git repository')
  await run('git', ['add', '.'])
  await run('git', ['commit', '-m', `v${version}`])
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
    const currentVersion: string | undefined = require(resolve(CWD, 'package.json')).version

    if (!currentVersion) {
      logger.error('Your package is missing the version field')
      return
    }

    if (!(await isWorktreeEmpty())) {
      logger.error('Git worktree is not empty, please commit changed')
      return
    }

    let name = 'Please select release type'
    const ret = await inquirer.prompt([
      {
        name,
        type: 'list',
        choices: releaseTypes,
      },
    ])

    const type = ret[name]
    const isPreRelease = type.startsWith('pre')
    let expectVersion = semver.inc(currentVersion, type, `alpha.${Date.now()}`) as string
    expectVersion = isPreRelease ? expectVersion.slice(0, -2) : expectVersion

    name = 'version confirm'
    const confirm = await inquirer.prompt([
      {
        name,
        type: 'confirm',
        message: `All packages version ${currentVersion} -> ${expectVersion}:`,
      },
    ])
    if (!confirm[name]) {
      return
    }

    updateVersion(expectVersion)

    if (!isPreRelease) {
      await changelog()
      await pushGit(expectVersion, cmd.remote)
    }

    await publish(isPreRelease)

    logger.success(`Release version ${expectVersion} successfully!`)

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
