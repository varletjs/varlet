import execa from 'execa'
import ora, { Ora } from 'ora'
import { ESLINT_EXTENSIONS } from '../shared/constant'

export async function lint() {
  let spinner: Ora
  try {
    spinner = ora('prettier starting...').start()
    await execa('prettier', ['--write', '.'])
    spinner.succeed('prettier success')

    spinner = ora('stylelint starting...').start()
    await execa('stylelint', ['./**/*.vue', './**/*.css', './**/*.less', '--fix'])
    spinner.succeed('stylelint success')

    spinner = ora('eslint starting...').start()
    await execa('eslint', [
      'packages/varlet-cli/src',
      'packages/varlet-ui/src',
      'packages/varlet-icons/lib',
      'packages/varlet-markdown-loader',
      'packages/varlet-vscode-extension/src',
      '--fix',
      '--ext',
      ESLINT_EXTENSIONS.join(','),
    ])
    spinner.succeed('eslint success')
  } catch (e) {
    spinner!.fail(e.toString())
    process.exit(1)
  }
}
