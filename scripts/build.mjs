// 功能： 构建varlet项目中各个子模块代码

// 执行命令行任务
import execa from 'execa'
// 创建运行任务时的 loading 动画。
import { createSpinner } from 'nanospinner'
// 获取指定路径的绝对路径。
import { resolve } from 'path'

// 定义了一个变量 CWD，其值为当前进程的工作目录
const CWD = process.cwd()


/**
 * 定义了一个变量 PKG_xxx，其值为 varlet-xxx 模块的绝对路径
 */
const PKG_CLI = resolve(CWD, './packages/varlet-cli')
const PKG_VITE_PLUGINS = resolve(CWD, './packages/varlet-vite-plugins')
const PKG_ICONS = resolve(CWD, './packages/varlet-icons')
const PKG_UI = resolve(CWD, './packages/varlet-ui')
const PKG_SHARED = resolve(CWD, './packages/varlet-shared')
const PKG_USE = resolve(CWD, './packages/varlet-use')

/**
 * 定义了一个名为 buildxxx 的函数，其返回值是执行 pnpm build 命令在 varlet-xxx 模块下的输出结果
 */
export const buildCli = () => execa('pnpm', ['build'], { cwd: PKG_CLI })

export const buildVitePlugins = () => execa('pnpm', ['build'], { cwd: PKG_VITE_PLUGINS })

export const buildShared = () => execa('pnpm', ['build'], { cwd: PKG_SHARED })

export const buildUse = () => execa('pnpm', ['build'], { cwd: PKG_USE })

export const buildIcons = () => execa('pnpm', ['build'], { cwd: PKG_ICONS })

export const buildUI = () => execa('pnpm', ['compile'], { cwd: PKG_UI })

export async function runTask(taskName, task) {
  // createSpinner 函数：创建一个进度条，显示正在构建的的任务名称
  const s = createSpinner(`Building ${taskName}`).start()
  try {
    await task()
    s.success({ text: `Build ${taskName} completed!` })
  } catch (e) {
    s.error({ text: `Build ${taskName} failed!` })
    console.error(e.toString())
  }
}

/**
 * 按顺序执行以下所有任务。每个任务都会调用 runTask 函数进行构建
 */
export async function runTaskQueue() {
  await runTask('shared', buildShared)
  await runTask('use', buildUse)
  await runTask('vite plugins', buildVitePlugins)
  await runTask('cli', buildCli)
  await runTask('icons', buildIcons)
  await runTask('ui', buildUI)
}
