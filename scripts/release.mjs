import { release } from '@varlet/cli'
import { runTaskQueue } from './build.mjs'

await release({ task: runTaskQueue })
