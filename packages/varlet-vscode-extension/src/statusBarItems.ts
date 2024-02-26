import { StatusBarAlignment, window, workspace } from 'vscode'

function getIsInWorkspace(path: string) {
  try {
    require.resolve('@varlet/ui/package.json', {
      paths: [path],
    })
    return true
  } catch {
    return false
  }
}

export function registerStatusBarItems() {
  const isInWorkspace = workspace.workspaceFolders?.some((workspaceFolder) =>
    getIsInWorkspace(workspaceFolder.uri.fsPath)
  )

  if (isInWorkspace) {
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
}
