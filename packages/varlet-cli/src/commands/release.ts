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

async function pushGit(version: string, remote = 'origin') {
  const s = ora().start('Pushing to remote git repository')
  await execa('git', ['add', '.'])
  await execa('git', ['commit', '-m', `v${version}`])
  await execa('git', ['tag', `v${version}`])
  await execa('git', ['push', remote, `v${version}`])
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

async function confirmRegistry() {
  const registry = (await execa('npm', ['config', 'get', 'registry'])).stdout
  const name = 'Registry confirm'
  const ret = await inquirer.prompt([
    {
      name,
      type: 'confirm',
      message: `Current registry is: ${registry}`,
    },
  ])

  return ret[name]
}

async function confirmVersion(currentVersion: string, expectVersion: string) {
  const name = 'Version confirm'
  const ret = await inquirer.prompt([
    {
      name,
      type: 'confirm',
      message: `All packages version ${currentVersion} -> ${expectVersion}:`,
    },
  ])

  return ret[name]
}

async function getReleaseType() {
  const name = 'Please select release type'
  const ret = await inquirer.prompt([
    {
      name,
      type: 'list',
      choices: releaseTypes,
    },
  ])

  return ret[name]
}

export async function release(cmd: { remote?: string }) {
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

    if (!(await confirmRegistry())) {
      return
    }

    const type = await getReleaseType()
    const isPreRelease = type.startsWith('pre')
    let expectVersion = semver.inc(currentVersion, type, `alpha.${Date.now()}`) as string
    expectVersion = isPreRelease ? expectVersion.slice(0, -2) : expectVersion

    if (!(await confirmVersion(currentVersion, expectVersion))) {
      return
    }

    updateVersion(expectVersion)

    await publish(isPreRelease)

    if (!isPreRelease) {
      await changelog()
      await pushGit(expectVersion, cmd.remote)
    }

    logger.success(`Release version ${expectVersion} successfully!`)

    if (isPreRelease) {
      try {
        await execa('git', ['restore', '**/package.json'])
        await execa('git', ['restore', 'package.json'])
      } catch {
        logger.error('Restore package.json has failed, please restore manually')
      }
    }
  } catch (error: any) {
    logger.error(error.toString())
    process.exit(1)
  }
}
