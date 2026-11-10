// @vitest-environment node
import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import { transform } from 'esbuild'
import { expect, test } from 'vite-plus/test'

const source = readFileSync(new URL('../environment.ts', import.meta.url), 'utf8')

async function compileEnvironment(define) {
  // Match the library's ES2015 module compilation before a consumer bundles it.
  const esm = await transform(source, { loader: 'ts', target: 'es2015', format: 'esm' })
  return (await transform(esm.code, { format: 'cjs', define })).code
}

function evaluate(code, process) {
  const context = { module: { exports: {} }, process }
  runInNewContext(code, context)
  return context.module.exports.isDevelopment()
}

test.each([
  ['development', true],
  ['test', true],
  ['production', false],
])('compiled ESM preserves %s environment diagnostics', async (mode, expected) => {
  expect(evaluate(await compileEnvironment(), { env: { NODE_ENV: mode } })).toBe(expected)
})

test('compiled ESM works without the process global', async () => {
  expect(evaluate(await compileEnvironment(), undefined)).toBe(false)
})

test.each([
  ['development', true],
  ['production', false],
])('consumer bundling supports %s without a process polyfill', async (mode, expected) => {
  const code = await compileEnvironment({ 'process.env.NODE_ENV': JSON.stringify(mode) })
  expect(evaluate(code, undefined)).toBe(expected)
})
