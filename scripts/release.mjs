import { runTaskQueue } from './build.mjs'
import { release } from '@varlet/cli'

await release({ task: runTaskQueue })
