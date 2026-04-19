import { release } from 'rattail/cli'
import { runTaskQueue } from './build.mjs'

await release({ task: runTaskQueue })
