import { StatusBarAlignment, window } from 'vscode'

export function registerStatusBarItems() {
  ;[
    {
      name: 'Varlet Documentation',
      priority: 0,
      command: 'varlet.open-documentation',
      tooltip: 'Open Varlet Documentation',
    },
    {
      name: 'Varlet Playground',
      priority: 0,
      command: 'varlet.open-playground',
      tooltip: 'Open Varlet Playground',
    },
  ].forEach((item) => {
    const statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right, item.priority)
    statusBarItem.command = item.command
    statusBarItem.text = item.name
    statusBarItem.tooltip = item.tooltip
    statusBarItem.show()
  })
}
