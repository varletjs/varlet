import execa from 'execa'
import { createSpinner } from 'nanospinner'
import { CWD, ESLINT_EXTENSIONS } from '../shared/constant.js'
import { isDir } from '../shared/fsUtils.js'
import { resolve } from 'path'

export async function lint() {
  const spinner = createSpinner()
  try {
    spinner.start({ text: 'prettier starting...' })
    await execa('prettier', ['--write', '--cache', '.'])
    spinner.success({ text: 'prettier success' })

    spinner.start({ text: 'eslint starting...' })

    const eslintPatterns: string[] = [
      './src',
      './packages/varlet-cli/src',
      './packages/varlet-ui/src',
      './packages/varlet-shared/src',
      './packages/varlet-vite-plugins/src',
      './packages/varlet-use/src',
      './packages/varlet-touch-emulator',
      './packages/varlet-vscode-extension/src',
      './packages/varlet-ui-playground/src',
      './packages/varlet-import-resolver/src',
    ]
    const { stdout } = await execa('eslint', [
      ...eslintPatterns.filter((pattern) => isDir(resolve(CWD, pattern))),
      '--fix',
      '--cache',
      '--ext',
      ESLINT_EXTENSIONS.join(),
    ])

    const type = stdout ? 'warn' : 'success'

    spinner[type]({ text: stdout || 'eslint success' })
  } catch (e: any) {
    spinner!.error({ text: e.toString() })
    process.exit(1)
  }
}
