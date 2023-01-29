import { registerCompletions } from './completions'
import { registerCommands } from './commands'
import { registerHover } from './hover'
import { type ExtensionContext } from 'vscode'

export function activate(context: ExtensionContext) {
  registerCommands()
  registerCompletions(context)
  registerHover(context)
}

export function deactivate() {}
