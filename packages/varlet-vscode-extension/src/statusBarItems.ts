import { StatusBarAlignment, window, commands, env, Uri, type ExtensionContext } from 'vscode'
import { DOCUMENTATION_EN, DOCUMENTATION_ZH, PLAYGROUND } from './constant'
import { getLanguage } from './env'

export function registerStatusBarItems(context: ExtensionContext) {
  const language = getLanguage()
  const statusBarList = [
    {
      name: 'Varlet Documentation',
      url: language === 'en-US' ? DOCUMENTATION_EN : DOCUMENTATION_ZH,
      priority: 0,
      command: 'varlet.open-documentation',
      tooltip: 'Open Varlet Documentation',
    },
    {
      name: 'Varlet Playground',
      url: PLAYGROUND,
      priority: 0,
      command: 'varlet.open-playground',
      tooltip: 'Open Varlet Playground',
    },
  ]
  statusBarList.forEach((item) => {
    const statusBar = window.createStatusBarItem(StatusBarAlignment.Left, item.priority)
    statusBar.command = item.command
    statusBar.text = item.name
    statusBar.tooltip = item.tooltip
    statusBar.show()
    const disposable = commands.registerCommand(item.command, () => {
      env.openExternal(Uri.parse(item.url))
    })
    context.subscriptions.push(disposable)
  })
}
