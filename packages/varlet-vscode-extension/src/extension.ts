import { registerCompletions } from './completions'
import { registerCommands } from './commands'
import { registerHover } from './hover'
import type { ExtensionContext } from 'vscode'
import { window, StatusBarAlignment, commands, env, Uri } from 'vscode'

export function activate(context: ExtensionContext) {
  // registerCommands()
  // registerCompletions(context)
  // registerHover(context)

  const statusBar = window.createStatusBarItem(StatusBarAlignment.Left, 0)
  statusBar.command = 'varlet.open-doc'
  statusBar.text = '$(rocket) Click Me'
  statusBar.tooltip = 'Open 456461231'
  statusBar.show()
  const disposable = commands.registerCommand('varlet.open-doc', () => {
    env.openExternal(Uri.parse('https://www.baidu123456.com'))
  })
  context.subscriptions.push(disposable)
}

export function deactivate() {}
