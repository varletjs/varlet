import fs from 'fs'
import { resolve } from 'path'

const CWD = process.cwd()
const iifeFile = resolve(CWD, './iife.js')
const candidates = [resolve(CWD, './index.iife.js'), resolve(CWD, './index.global.js')]

fs.existsSync(iifeFile) && fs.unlinkSync(iifeFile)
for (const src of candidates) {
  if (fs.existsSync(src)) {
    fs.renameSync(src, iifeFile)
    break
  }
}
