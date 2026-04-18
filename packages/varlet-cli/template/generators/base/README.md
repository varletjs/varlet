# varlet-cli-app

### Reference

[@varlet/cli 中文文档](https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/README.zh-CN.md)
[@varlet/cli documentation](https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/README.md)

### Recommended stack

This template is aligned with the **Varlet + vite-plus + rattail** setup:

- **`@varlet/cli`** — first-party Varlet workflows (`dev`, `build`, `preview`, `compile`, `test`, `create`, …).
- **`vite-plus` (`vp`)** — lint, format, and other toolchain entrypoints (see root `vite.config.ts`).
- **`rattail` (`rt`)** — hooks, `clean`, `changelog`, `release`, etc.

To refresh generated files from the latest built-in template after upgrading `@varlet/cli`, run **`varlet-cli gen`** from the parent directory (use git or a backup first; `gen` may overwrite generated scaffolding).

### Quickstart

```shell
pnpm install
pnpm dev
```

### Commands

#### Start the development server

```shell
pnpm dev
```

#### Build documentation site

```shell
pnpm build
```

#### Building component libraries

```shell
pnpm compile
```

#### Lint code

```shell
pnpm lint
```

#### Run unit test

```shell
pnpm test
```

#### Run unit test in watch mode

```shell
pnpm test:watch 
```

#### Run unit test and report coverage

```shell
pnpm test:coverage 
```

#### Git hooks

Hooks are installed via `pnpm install` (`prepare` runs `vp config` + `rt hook`). Use `rt commit-lint` through the configured `commit-msg` hook.

#### Generate changelog

```shell
pnpm changelog
```

#### Release

tips:
- 1.The registry of npm must be the official source of npm
- 2.The npm must be logged in

```shell
pnpm release
```

#### Create component template files

```shell
pnpm run create
```

