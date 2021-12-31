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

const releaseTypes = ['premajor', 'preminor', 'prepatch', 'major', 'minor', 'patch']

async function isWorktreeEmpty() {
  const ret = await execa('git', ['status', '--porcelain'])
  return !ret.stdout
}

async function publish(preRelease: boolean) {
  const s = ora().start('Publishing all packages')
  const args = ['-r', 'publish', '--no-git-checks', '--access', 'public']

  preRelease && args.push('--tag', 'alpha')
  const ret = await execa('pnpm', args)
  if (ret.stderr && ret.stderr.includes('npm ERR!')) {
    throw new Error('\n' + ret.stderr)
  } else {
    s.succeed('Publish all packages successfully')
    ret.stdout && logger.info(ret.stdout)
  }
}

async function pushGit(version: string) {
  const s = ora().start('Pushing to remote git repository')
  await execa('git', ['add', '.'])
  await execa('git', ['commit', '-m', `v${version}`])
  await execa('git', ['tag', `v${version}`])
  await execa('git', ['push', 'origin', `v${version}`])
  const ret = await execa('git', ['push'])
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

export async function release() {
  try {
    const currentVersion = require(resolve(CWD, 'package.json')).version

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
    let expectVersion = semver.inc(currentVersion, type, `alpha.${Date.now()}`)
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
      await pushGit(expectVersion)
    }

    await publish(isPreRelease)

    if (isPreRelease) {
      try {
        await execa('git', ['restore', '**/package.json'])
        await execa('git', ['restore', 'package.json'])
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }

    logger.success(`Release version ${expectVersion} successfully!`)
  } catch (error: any) {
    logger.error(error.toString())
    process.exit(1)
  }
}
