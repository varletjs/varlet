import { registerCompletions } from './completions'
import { registerCommands } from './commands'
import { registerHover } from './hover'
import { registerStatusBarItems } from './statusBarItems'
import type { ExtensionContext } from 'vscode'

export function activate(context: ExtensionContext) {
  registerCommands()
  registerCompletions(context)
  registerHover(context)
  registerStatusBarItems(context)
}

export function deactivate() {}
