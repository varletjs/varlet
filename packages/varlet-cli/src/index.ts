#!/usr/bin/env node
import { parse, command } from 'commander'
import { dev } from './commands/dev'
import { build } from './commands/build'

command('dev')
  .description('Run varlet development environment')
  .action(dev)

command('build')
  .description('Build varlet site for production')
  .action(build)

parse()
