#!/usr/bin/env node
import { Command } from 'commander'
import { getCliVersion } from './shared/fsUtils.js'
import { logDeprecated } from './shared/logger.js'

const program = new Command()

program.version(`varlet-cli ${getCliVersion()}`).usage('<command> [options]')

program
  .command('dev')
  .option('-f --force', 'Force dep pre-optimization regardless of whether deps have changed')
  .option('-d --draft', 'Start the service in draft mode')
  .description('Run varlet development environment')
  .action(async (options) => {
    const { dev } = await import('./commands/dev.js')

    return dev(options)
  })

program
  .command('build')
  .description('Build varlet site for production')
  .action(async () => {
    const { build } = await import('./commands/build.js')

    return build()
  })

program
  .command('dev:vite')
  .description('[Deprecated] Use vite start server for development. Use `vp dev` instead.')
  .action(async () => {
    logDeprecated('dev:vite', 'Use `vp dev` instead.')
    const { vite } = await import('./commands/vite.js')

    return vite('dev')
  })

program
  .command('build:vite')
  .description('[Deprecated] Use vite build app for production. Use `vp build` instead.')
  .action(async () => {
    logDeprecated('build:vite', 'Use `vp build` instead.')
    const { vite } = await import('./commands/vite.js')

    return vite('build')
  })

program
  .command('dev:extension')
  .description(
    '[Deprecated] Run VSCode extension development environment. Use `vp pack --watch` (or `tsdown --watch`) instead.',
  )
  .action(async () => {
    logDeprecated('dev:extension', 'Use `vp pack --watch` (or `tsdown --watch`) instead.')
    const { extension } = await import('./commands/extension.js')

    return extension('dev')
  })

program
  .command('build:extension')
  .description('[Deprecated] Build VSCode extension for production. Use `vp pack` (or `tsdown`) instead.')
  .action(async () => {
    logDeprecated('build:extension', 'Use `vp pack` (or `tsdown`) instead.')
    const { extension } = await import('./commands/extension.js')

    return extension('build')
  })

program
  .command('build:icons')
  .option('-w --watch', 'Watch icons for changes and rebuild')
  .description('Build icons')
  .action(async (options) => {
    const { icons } = await import('./commands/icons.js')

    return icons(options)
  })

program
  .command('preview')
  .description('Preview varlet site for production.')
  .option('-p, --port <port>', 'port number')
  .action(async (options) => {
    const { preview } = await import('./commands/preview.js')
    return preview(options)
  })

program
  .command('compile')
  .description('Compile varlet components library code')
  .action(async () => {
    const { compile } = await import('./commands/compile.js')

    return compile()
  })

program
  .command('compile:style-vars')
  .description('Compile varlet style vars')
  .action(async () => {
    const { styleVars } = await import('./commands/styleVars.js')

    return styleVars()
  })

program
  .command('create')
  .description('Create a component directory')
  .option('-i, --internal', 'varlet internal mode')
  .option('-n, --name <componentName>', 'Component name')
  .option('-s, --sfc', 'Generate files in sfc format')
  .option('-t, --tsx', 'Generate files in tsx format')
  .option('-l, --locale', 'Generator internationalized files')
  .action(async (options) => {
    const { create } = await import('./commands/create.js')

    return create(options)
  })

program
  .command('test')
  .description('Run test in work directory')
  .option('-w, --watch', 'Watch files for changes and rerun tests related to changed files')
  .option('-c, --component <componentName>', 'Test a specific component')
  .option('-cov, --coverage', 'Generate the coverage')
  .action(async (options) => {
    const { test } = await import('./commands/test.js')

    return test(options)
  })

program
  .command('gen')
  .description('Generate cli application')
  .option('-n, --name <applicationName>', 'Application name')
  .option('-s, --sfc', 'Generate files in sfc format')
  .option('-t, --tsx', 'Generate files in tsx format')
  .option('-l, --locale', 'Generator internationalized files')
  .action(async (options) => {
    const { gen } = await import('./commands/gen.js')

    return gen(options)
  })

program
  .command('changelog')
  .option('-rc --releaseCount <releaseCount>', 'Release count')
  .option('-f --file <file>', 'Changelog filename')
  .description('[Deprecated] Generate changelog. Use `rt changelog` instead.')
  .action(async (options) => {
    logDeprecated('changelog', 'Use `rt changelog` instead.')
    const { changelog } = await import('@varlet/release')

    return changelog(options)
  })

program
  .command('release')
  .option('-r --remote <remote>', 'Remote name')
  .description('[Deprecated] Release all packages and generate changelogs. Use `rt release` instead.')
  .action(async (options) => {
    logDeprecated('release', 'Use `rt release` instead.')
    const { release } = await import('@varlet/release')

    return release(options)
  })

program
  .command('commit-lint')
  .option('-p --commitMessagePath <path>', 'Git commit message path')
  .option('-r --commitMessageRe <reg>', 'Validate the regular of whether the commit message passes')
  .option('-e --errorMessage <message>', 'Validation failed to display error messages')
  .option('-w --warningMessage <message>', 'Validation failed to display warning messages')
  .description('[Deprecated] Lint commit message. Use `rt commit-lint` instead.')
  .action(async (options) => {
    logDeprecated('commit-lint', 'Use `rt commit-lint` instead.')
    const { commitLint } = await import('@varlet/release')

    return commitLint(options)
  })

program
  .command('checklist <gitParams>')
  .description(
    '[Deprecated] Display a checklist for confirmation. No direct replacement; will be removed in the next major.',
  )
  .action(async (options) => {
    logDeprecated('checklist', 'No direct replacement; will be removed in the next major.')
    const { checklist } = await import('./commands/checklist.js')

    return checklist(options)
  })

program.on('command:*', async ([cmd]) => {
  const { default: logger } = await import('./shared/logger.js')

  program.outputHelp()
  logger.error(`\nUnknown command ${cmd}.\n`)
  process.exitCode = 1
})

program.parse()
