# varlet-cli-app

### Reference

[@varlet/cli 中文文档](https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/README.md)
[@varlet/cli documentation](https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/README.en-US.md)

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
or
pnpm test:watchAll 
```

#### Mount Git Hooks

```shell
npx simple-git-hooks
```

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

