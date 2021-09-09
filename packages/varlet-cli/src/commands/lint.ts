import execa from 'execa'
import ora from 'ora'
import { CWD, ESLINT_EXTENSIONS } from '../shared/constant'
import { isDir } from '../shared/fsUtils'
import { resolve } from 'path'
import type { Ora } from 'ora'

export async function lint() {
  let spinner: Ora
  try {
    spinner = ora('prettier starting...').start()
    await execa('prettier', ['--write', '.'])
    spinner.succeed('prettier success')

    spinner = ora('stylelint starting...').start()
    const stylelintPattern = ['./src/**/*.vue', './src/**/*.css', './src/**/*.less']
    const hasPackages = isDir(resolve(CWD, 'packages'))
    hasPackages && stylelintPattern.push('./packages/**/*.vue', './packages/**/*.css', './packages/**/*.less')
    await execa('stylelint', [...stylelintPattern, '--fix'])
    spinner.succeed('stylelint success')

    spinner = ora('eslint starting...').start()

    const eslintPatterns: string[] = [
      './src',
      './packages/varlet-cli/src',
      './packages/varlet-ui/src',
      './packages/varlet-icons/lib',
      './packages/varlet-markdown-loader',
      './packages/varlet-vscode-extension/src',
    ]

    const { stdout } = await execa('eslint', [
      ...eslintPatterns.filter((pattern) => isDir(resolve(CWD, pattern))),
      '--fix',
      '--ext',
      ESLINT_EXTENSIONS.join(','),
    ])

    const type = stdout ? 'warn' : 'succeed'

    spinner[type](stdout || 'eslint success')
  } catch (e) {
    spinner!.fail(e.toString())
    process.exit(1)
  }
}
