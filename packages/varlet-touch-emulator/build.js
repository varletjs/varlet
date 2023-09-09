import fs from 'fs'
import { resolve } from 'path'

const CWD = process.cwd()
const iifeFile = resolve(CWD, './iife.js')
const globalFile = resolve(CWD, './index.global.js')

fs.existsSync(iifeFile) && fs.unlinkSync(iifeFile)
fs.existsSync(globalFile) && fs.renameSync(globalFile, iifeFile)
