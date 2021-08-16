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
    await execa('stylelint', [
      './packages/**/*.vue',
      './packages/**/*.css',
      './packages/**/*.less',
      './src/**/*.vue',
      './src/**/*.css',
      './src/**/*.less',
      '--fix',
    ])
    spinner.succeed('stylelint success')

    spinner = ora('eslint starting...').start()

    const patterns: string[] = [
      './src',
      './packages/varlet-cli/src',
      './packages/varlet-ui/src',
      './packages/varlet-icons/lib',
      './packages/varlet-markdown-loader',
      './packages/varlet-vscode-extension/src',
    ]

    const { stdout } = await execa('eslint', [
      ...patterns.filter((pattern) => isDir(resolve(CWD, pattern))),
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
