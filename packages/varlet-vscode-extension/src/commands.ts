import { commands, window, Selection } from 'vscode'

export function registerCommands() {
  commands.registerCommand('move-cursor', function moveCursor(characterDelta: number) {
    const active = window.activeTextEditor!.selection.active!
    const position = active.translate({ characterDelta })
    window.activeTextEditor!.selection = new Selection(position, position)
  })
}
