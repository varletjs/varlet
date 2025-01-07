import { type ExtensionContext } from 'vscode'
import { registerCommands } from './commands'
import { registerCompletions } from './completions'
import { registerHover } from './hover'
import { registerStatusBarItems } from './statusBarItems'

export function activate(context: ExtensionContext) {
  registerCommands(context)
  registerCompletions(context)
  registerHover(context)
  registerStatusBarItems()
}

export function deactivate() {}
