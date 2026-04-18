# Rattail 2.x + Vite+ 迁移方案（v2 重写版）

> 状态：**草案，等待 review，尚未执行**
> 分支：`feat/migrate-rattail2-viteplus-stage-a`（与 `origin/dev` 同基线）
> 上一版（v1）已完全废弃；v2 改为"全量替换、无并行命令"的路线。

---

## 0. 顶层原则（贯穿所有阶段）

1. **对外 API、产物路径、`exports` 字段、d.ts 形状零破坏**
   - `packages/varlet-ui/{es,umd,types,style.css,...}` 路径与字节级布局保持兼容（允许内容因为打包器更换而出现压缩差异、注释差异、source map 差异，但**不能**改变模块拆分粒度、CSS 文件名或 default/named export 形状）。
   - 七个 `tsup` 库（`@varlet/shared`、`@varlet/vite-plugins`、`@varlet/use`、`@varlet/preset-unocss`、`@varlet/preset-tailwindcss`、`@varlet/import-resolver`、`@varlet/touch-emulator`）的 `lib/index.{js,cjs,d.ts}` 与 IIFE 产物的运行时行为必须等价。
   - `@varlet/cli` 的 `bin`、子命令名、命令行参数、退出码、控制台输出格式保持不变。
2. **没有"双轨并行命令"**
   - v1 的 `lint:oxc` / `fmt:oxc` / `release:rattail` 这种双写脚本是反模式：增加心智负担，且 CI/钩子/贡献者文档全要双写。
   - v2 的做法是：**每个阶段一次性替换实现，命令名保持原状**（`pnpm lint`、`pnpm format`、`pnpm release` 不变，但底层从 ESLint/Prettier/`@varlet/release` 切到 Oxlint/Oxfmt/`rt`）。
   - 唯一允许"消失"的命令是 `format:cache` / `lint:cache`：`vp fmt`/`vp lint` 自带增量与并行，原生不需要 cache 命令。
3. **每个阶段完成 → 停下供 review → 通过后再开下一个阶段**
   - 阶段间不抢跑；每个阶段都包含明确的"验收清单"，CI 全绿 + 本地手测通过才算完成。
4. **任何阶段都不修改 `pnpm.overrides` 把 `vite`/`vitest` 重定向到 vite-plus 内部 fork**
   - vite-plus 文档建议 `pnpm.overrides` 把 `vite` → `vite-plus`、`vitest` → `vite-plus/test`，这是 vite-plus 的"全量接管"模式。
   - 我们**不走这条路**，原因：
     - `@vitejs/plugin-vue@6` / `@vitejs/plugin-vue-jsx@5` 的 peer 是 `vite@^5||^6||^7`，被 override 成 `vite-plus`（内部是 vite 8 alpha）后 peer 检查会全线警告/破裂。
     - `@varlet/vite-plugins` 的 `peerDependencies.vite` 是写死给消费者看的契约，不能因内部迁移而强迫消费者用 vite+。
   - 替换思路是**显式 import**：哪个文件需要 vite+ 能力，就 `from 'vite-plus'`；其它继续 `from 'vite'`。

---

## 1. 现状盘点（dev 基线，commit `c53f0dcf7`）

### 1.1 根目录工具链（本次迁移的主战场）

| 工具 | 用途 | 配置位置 | 阶段 1 替换为 |
|---|---|---|---|
| `eslint@^9.17.0` + `@configurajs/eslint` | 代码检查 | `eslint.config.js` | **Oxlint**（`vp lint` + `lint()` preset） |
| `prettier@^3.4.2` + `@configurajs/prettier` | 代码格式化 | `prettier.config.js` + `.prettierignore` | **Oxfmt**（`vp fmt` + `fmt()` preset） |
| `simple-git-hooks@^2.8.0` | git hooks 安装 | `package.json` `simple-git-hooks` 字段 + `postinstall` | **`rt hook`**（preset 写到 `vite.config.ts`，安装走 `rt hook`） |
| `nano-staged@0.8.0` | 暂存区文件检查 | `package.json` `nano-staged` 字段 | **`vp staged`**（`staged()` preset 写到 `vite.config.ts`） |
| `rimraf` (catalog `^5.0.1`) | 跨平台目录清理 | 出现在 `clean`、`varlet-cli` 的 `build` 等多处 | **`rt clean`**（preset + 命令） |
| `pnpm@9.6.0` | 包管理器 | `packageManager` + `engines.pnpm` | **`pnpm@>=10.0.0`**（rattail 2.x 硬要求） |
| Node `^14.18.0 \|\| >=16.0.0` | 运行时 | `varlet-cli/package.json` `engines.node` | **`>=20.19.0 \|\| >=22.12.0`**（vite-plus 硬要求） |
| `@varlet/release` (在 cli `bin.ts`) | release/changelog/commit-lint | `scripts/release.mjs` → `cli/bin.ts` | **`rt release` / `rt changelog` / `rt commit-lint`**（保留 `pnpm release` 命令名） |
| `varlet-cli checklist` | 提交信息 checklist | `commit-msg` hook | **保留**（rattail 不提供等价物，仍走 `varlet-cli checklist`） |

### 1.2 受波及但**不在阶段 1 范围内**的工具链

| 工具 | 用途 | 处理时机 |
|---|---|---|
| `tsup@7.2.0` | 7 个库包的打包 | 阶段 2（→ `vp pack` / tsdown） |
| `vite@7.1.5` (在 `varlet-cli` 的 dev/build/preview/build:vite/dev:vite) | UI 文档站 + playground 的 server/build | 阶段 3 |
| `vitest@3.2.4` (在 `varlet-cli test`) | 测试运行 | 阶段 3（同时迁移 import） |
| `varlet-cli` 内部子命令 (`compile`、`build`、`gen`、`icons` 等) | UI 库自定义编译/产物生成 | 阶段 4 |
| `esbuild@0.23.1` (在 `varlet-cli` 的 SFC compile) | SFC 脚本块编译 | 阶段 4 评估 |

---

## 2. 阶段 1：替换底层工具链 + 升级环境门槛

> **目标**：在不动 `@varlet/cli` 业务实现、不动 7 个 `tsup` 库、不动 vite server 的前提下，把"工程基础设施"完全切到 rattail 2.x + vite+。
> **完成后**：贡献者本地 `pnpm install && pnpm lint && pnpm format && pnpm test && pnpm build` 全部走新栈，但任何"产物"和 `varlet-cli` 命令行为都不变。

### 2.1 范围（红线）

✅ **本阶段做：**
- 升级 `pnpm` 到 `>=10.0.0`，更新 `packageManager` 与 `engines.pnpm`。
- 升级 `engines.node`（`varlet-cli/package.json` + 根 `package.json` 新增）到 `>=20.19.0 || >=22.12.0`。
- 卸载 `eslint` / `@configurajs/eslint` / `prettier` / `@configurajs/prettier` / `simple-git-hooks` / `nano-staged` / `rimraf`。
- 安装 `rattail@^2.0.3` + `vite-plus@^0.1.18`（dev 依赖，进 catalog）。
- 删除 `eslint.config.js`、`prettier.config.js`、`.prettierignore`（如有）、`.eslintignore`（如有）。
- 创建根 `vite.config.ts`，包含 `lint` / `fmt` / `staged` / `rattail.{clean,hook}` 配置。
- 重写根 `package.json` 的 `scripts`：
  - `lint`: `vp lint --fix`
  - `format`: `vp fmt`
  - `release`: 保留 `node scripts/release.mjs`，但内部从 `@varlet/cli` 的 `release` → `rt release`（见 2.4）
  - `changelog`: `rt changelog`
  - `clean`: `rt clean`
  - `postinstall`: `rt hook`（替换 `simple-git-hooks`）
  - `lint:cache` / `format:cache`：**删除**（vp 自带增量）
- `simple-git-hooks` / `nano-staged` 字段：**删除**（迁到 `vite.config.ts` 的 `staged` + `rattail.hook`）。
- 移除根 `nano-staged` 字段中"prettier 跑一遍 → eslint 再跑一遍"的双跑逻辑，改用 `staged()` preset。

❌ **本阶段不做（红线，违反则回滚）：**
- 不改任何 package 的 `build` / `dev` / `compile` / `test` / `preview` 脚本（仍走 `tsup` / `varlet-cli` / `vitest`）。
- 不修改 `pnpm.overrides` 添加 `vite` / `vitest` 重定向。
- 不替换 `varlet-cli` 内部 import（vite/vitest 仍来自 catalog）。
- 不动 `__tests__/*.spec.js` 里的 `import ... from 'vitest'`（这是阶段 3 的事）。
- 不删除 `@varlet/release` 依赖（cli `bin.ts` 内部仍可继续依赖它，直到阶段 4 决策）。

### 2.2 环境门槛升级（破坏性，但只对**贡献者**）

- **对 `@varlet/ui` 终端用户**：**无影响**。`@varlet/ui` 发布产物的 `engines` 字段不会变化，运行时只需要 vue 3 + 浏览器。
- **对贡献者**：必须升级到 pnpm 10+ 和 Node 20.19+/22.12+。需在 README 与 CONTRIBUTING（如有）注明。
- **对 `@varlet/cli` 用户**：cli 的 `engines.node` 会从 `^14.18.0 || >=16.0.0` 提升到 `>=20.19.0 || >=22.12.0`。这是阶段 1 的**已知破坏性变更**——必须在 cli 的下一个 **major** 版本中发布；如果不能 bump major，阶段 1 应当**回退**这一项，仅升级根 `engines.node` 用于贡献者环境，cli 的 engines 留到阶段 4 与内部命令迁移合并升级（推荐这种做法）。

> **建议**：阶段 1 **只升级根 `engines.node`**（影响贡献者），保留 `varlet-cli/package.json` 的 `engines.node` 不动；待阶段 4 准备 cli major 版本时再统一升 cli 的 engines。这样阶段 1 完全是"内部工程升级"，cli 的发版语义不变。

### 2.3 新的根 `vite.config.ts`

```ts
import {
  defineConfig,
  lint,
  fmt,
  staged,
  hook,
  clean,
} from 'rattail/vite-plus'

export default defineConfig({
  // Oxlint 配置：内置 TS / Vue 3 / Vitest 支持
  lint: lint({
    // 与现有 eslint.config.js 等价的忽略列表（见 2.5 迁移映射）
    // overrides 用于复刻 @configurajs/eslint 的现有定制规则
  }),

  // Oxfmt 配置：与现有 prettier.config.js + .prettierignore 等价
  fmt: fmt({
    // ignores: [...]
  }),

  // 替代 nano-staged
  staged: staged(),
  // staged() 默认行为：
  //   '*.{js,jsx,ts,tsx}': ['vp fmt --no-error-on-unmatched-pattern', 'vp lint --fix'],
  //   '*.{md,json,yaml,yml,html,css,scss,less}': 'vp fmt --no-error-on-unmatched-pattern',
  //   '*.vue': ['vp fmt --no-error-on-unmatched-pattern', 'vp lint --fix'],
  // 与现状一致（prettier 全跑 + eslint 跑代码文件）。

  rattail: {
    clean: clean({
      patterns: [
        // 默认含 **/node_modules, **/dist, **/coverage
        // 追加 varlet 特有的：
        '**/lib',
        '**/es',
        '**/umd',
        '**/site',
        '**/highlight',
        '**/.varlet',
      ],
    }),

    hook: hook(),
    // hook() 默认：
    //   'commit-msg': ['rt commit-lint $1']
    //   'post-merge': ['rt lockfile-check']
    // 但我们当前 commit-msg 还要跑 `varlet-cli checklist`，所以需要扩展，见 2.4
  },
})
```

### 2.4 git hook 与 `release` 的关键决策

#### commit-msg hook

当前 `simple-git-hooks` 的 commit-msg 是：
```
pnpm exec varlet-cli commit-lint -p $1 && pnpm exec varlet-cli checklist $1
```

`rattail` 的 `hook()` 默认只装 `rt commit-lint $1`。两边的 `commit-lint` 是不同实现：
- `varlet-cli commit-lint` → `@varlet/release.commitLint`（自定义正则 + 错误信息）
- `rt commit-lint` → rattail 自带（行为待对比）

**决策**：阶段 1 用**手写 hook 配置**（`rattail/vite-plus` 的 `hook()` 仅是配置生成器，可以传入完整 hook 对象）。即在 `vite.config.ts` 里：

```ts
rattail: {
  hook: {
    'commit-msg': [
      'rt commit-lint $1',
      'pnpm exec varlet-cli checklist $1',
    ],
    'post-merge': ['rt lockfile-check'],
  },
}
```

> 待 review：`rt commit-lint` 是否能完全等价覆盖 `@varlet/release.commitLint`？如果不能，阶段 1 仍保留 `varlet-cli commit-lint`，让 hook 调 `varlet-cli commit-lint` + `varlet-cli checklist`，仅引入 `lockfile-check` 这一项 rattail 能力。

#### `pnpm release`

`scripts/release.mjs` 当前调 `import { release } from '@varlet/cli'`，cli 内部又调 `@varlet/release`。

**阶段 1 做法**（最小改动）：
- 保留 `scripts/release.mjs` 文件名与 `pnpm release` 命令。
- 把内部实现从 `@varlet/cli.release` 改为 `rt release` 子进程调用。
- `runTaskQueue`（来自 `build.mjs`，做 `bootstrap → build → compile → ...`）继续作为 `rt release` 的前置任务（rattail 的 `rattail.release.beforeRelease` / `tasks` 钩子，具体 API 待查）。

> **悬而未决**：`rt release` 是否支持"在发包前先跑一组任务"？v1 实测里发现 `rt release` 没有 `--dry-run`。阶段 1 的执行清单里要先用 `rt release --help` 全选项确认。如果 `rt release` 没有 task hook，阶段 1 的 `release` 仍保留 `node scripts/release.mjs` 包装，里面先 `runTaskQueue()` 再 `execa('rt', ['release'])`。

### 2.5 ESLint → Oxlint 规则迁移映射

需要逐条对比：

| ESLint 现状 | Oxlint 等价 | 风险 |
|---|---|---|
| `@configurajs/eslint` 默认规则集 | `lint()` preset | preset 间规则集不完全 1:1，需要白盒对比 |
| `eslint.config.js` 里的 `ignores` | `lint({ ... })` 不直接接 ignore，oxlint 用 `.oxlintignore` 或 cli `--ignore-pattern` | 需要把 ignore 列表迁到 oxlint 的忽略机制 |
| 项目自定义规则（如有） | `lint({ rules: {...}, overrides: [...] })` | 规则名命名空间可能不同（eslint-plugin-* vs oxlint plugin） |

**验收**：`vp lint --fix` 在仓库全量跑一遍后，git diff 行数应当 ≤ ESLint 在同一基线跑出的 diff 行数 × 1.2（容忍小幅差异，但不能有结构性回退如 import 顺序差异）。

### 2.6 Prettier → Oxfmt 规则迁移映射

| Prettier 现状 | Oxfmt 等价 | 风险 |
|---|---|---|
| `printWidth: 120` | Oxfmt 默认 80，需要 `fmt({ printWidth: 120 })` | 待确认 oxfmt 是否暴露 `printWidth` 选项 |
| `singleQuote: true` | `fmt({ singleQuote: true })` | 待确认 |
| `semi: false` | `fmt({ semi: false })` | 待确认 |
| `@ianvs/prettier-plugin-sort-imports` | Oxfmt 内置 import sorting | **行为可能不一致**，需要全量跑一遍看 import 顺序 diff |
| `prettier-plugin-packagejson` | Oxfmt **没有** package.json 排序 | **缺口**：阶段 1 内不解决，package.json 字段顺序回退到"手写顺序" |

**风险点**：`@ianvs/prettier-plugin-sort-imports` 在 varlet 仓库里影响所有 `import` 语句顺序。切到 oxfmt 后会出现一次"大型一次性 reformat 提交"，必须独立成一个 commit（标题 `style: reformat with oxfmt`）以方便 review 与回滚。

### 2.7 阶段 1 验收清单

- [ ] `pnpm install` 在 pnpm 10 + Node 20.19/22.12 下成功。
- [ ] `pnpm lint` 走 oxlint，全仓库通过；与 ESLint 基线 diff 已审阅并接受。
- [ ] `pnpm format` 走 oxfmt，全仓库已 reformat，diff 已独立 commit。
- [ ] `pnpm test` 仍走 vitest，通过率与 dev 基线一致（阶段 1 不动测试栈）。
- [ ] `pnpm build` / `pnpm compile` / `pnpm build:play` 产物与 dev 基线**字节级一致**（除 sourcemap 路径）。
- [ ] `git commit` 触发 `rt hook` 装的 commit-msg hook，commit-lint + checklist 都执行。
- [ ] `git stage` 一些文件 → `vp staged` 行为等价于原 `nano-staged`。
- [ ] CI 全绿。
- [ ] `pnpm release --dry-run`（如果 `rt release` 不支持 dry-run，则在沙箱仓库验证）。

### 2.8 阶段 1 commit 计划

按下面的顺序拆分 commit，方便 review 与回滚：

1. `chore: bump pnpm to 10 and node engines for contributors`
2. `chore: add rattail 2.x and vite-plus to catalog`
3. `chore: replace eslint+prettier+simple-git-hooks+nano-staged with vite+ toolchain`
   - 删旧配置文件
   - 加 `vite.config.ts`
   - 重写 `package.json` scripts + 删 `simple-git-hooks` / `nano-staged` 字段
4. `style: reformat repo with oxfmt`（**纯格式化 diff，不可与逻辑改动混合**）
5. `chore: switch root scripts/release.mjs to rt release`
6. `chore: replace rimraf with rt clean`

---

## 3. 阶段 2：`tsup` → `vp pack`（tsdown）

> **目标**：把 7 个使用 `tsup` 的包全部切到 `vp pack`，保持产物路径与形状不变。
> **前置**：阶段 1 已合入（pnpm 10、node 20.19+、vite-plus 已装）。

### 3.1 受影响包

| 包 | 当前 tsup 命令 | 目标 vp pack 配置 |
|---|---|---|
| `@varlet/shared` | `tsup src/index.ts --format esm,cjs --out-dir=lib --dts --clean` | `pack: { entry: 'src/index.ts', format: ['esm','cjs'], outDir: 'lib', dts: true, clean: true }` |
| `@varlet/vite-plugins` | `tsup src/index.ts --format esm --out-dir=lib --dts --clean` | 同上，`format: ['esm']` |
| `@varlet/use` | esm + cjs，纯 TS | 同 shared |
| `@varlet/preset-unocss` | esm + cjs，纯 TS | 同 shared |
| `@varlet/preset-tailwindcss` | esm + cjs，纯 TS | 同 shared |
| `@varlet/import-resolver` | esm + cjs，纯 TS | 同 shared |
| `@varlet/touch-emulator` | `tsup index.js --format iife --out-dir=. --globalName=VarletTouchEmulator && node build.js` | `pack: { entry: 'index.js', format: ['iife'], outDir: '.', globalName: 'VarletTouchEmulator' }` + 保留 `node build.js` 后处理 |

### 3.2 迁移机制

每个包根目录新增 `vite.config.ts`（**不要**叫 `tsdown.config.ts`，统一走 `vp pack` 入口）：

```ts
import { defineConfig } from 'rattail/vite-plus'

export default defineConfig({
  pack: {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    outDir: 'lib',
    dts: true,
    clean: true,
  },
})
```

`package.json` scripts：

```jsonc
{
  "scripts": {
    "build": "vp pack",
    "dev": "vp pack --watch"
  }
}
```

### 3.3 关键风险与对策

#### R1：CJS 产物文件名

`tsup` 默认 CJS 输出为 `lib/index.cjs`（与 `package.json` `exports.require` 对齐）。
`tsdown` 默认行为待确认（可能是 `lib/index.cjs` 也可能是 `lib/index.js` 当 ESM/CJS 在不同目录）。

**对策**：每个包在合并前必须 `ls lib/` 对比 dev 基线产物，文件名不一致时通过 `pack.outputOptions` / `pack.fileName` 强制对齐。

#### R2：d.ts 形状

`tsup --dts` 走 `rollup-plugin-dts`，`tsdown` 走 `rolldown-plugin-dts`，两者对 type-only re-export、命名空间合并、复杂泛型的处理可能产生差异。

**对策**：每个包合并前对 `lib/index.d.ts` 做 diff，差异需要"语义等价"（如多一层 `export type {}`、单行 vs 多行重排）。任何"少了某个 export"或"类型变窄/变宽"都视为阻塞。

#### R3：`@varlet/touch-emulator` 的 iife + 后处理

`build.js`（独立脚本）会在 `tsup` 之后跑，需要确认它读什么文件、产什么文件。如果它只是给 iife 输出加 banner/wrap，`vp pack` 的 iife 模式 + `globalName` 应该可以等价；如果它做了非 banner 的内容操作，可能需要保留 `&& node build.js` 链式调用。

**对策**：阶段 2 该包**单独迁移、单独 review**，不与其它 6 个包打包一起改。

#### R4：tsdown 与 unplugin-vue 的集成

阶段 2 的 7 个包**没有 .vue 文件**，所以暂不需要 `unplugin-vue/rolldown`。该集成留到阶段 4 评估 `@varlet/cli` 的 SFC 编译时再处理。

### 3.4 阶段 2 验收清单

- [ ] 每个包 `pnpm build` 后，`lib/` 目录与 dev 基线对比：
  - 文件清单一致（文件名、数量）
  - 每个 `.js`/`.cjs` 的运行时行为等价（用 `node -e "console.log(Object.keys(require('./lib')))"` 对齐 export 列表）
  - 每个 `.d.ts` 的类型签名等价（`tsc --noEmit` 一个 sample 消费者文件）
- [ ] `@varlet/cli` 依赖 `@varlet/shared` / `@varlet/vite-plugins` 的 import 仍然能 resolve（cli 自己未变）。
- [ ] 卸载根 catalog 的 `tsup`，全仓库 `pnpm install` 干净。
- [ ] CI 全绿。

### 3.5 阶段 2 commit 计划

每个包独立 commit，标题统一格式 `chore(<pkg>): switch from tsup to vp pack`。共 7 个 commit。

---

## 4. 阶段 3：vite server + playground 切到 vite+

> **目标**：UI 文档站（`varlet-cli dev/build/preview`）和 playground（`varlet-cli dev:vite/build:vite`）的底层从原生 `vite` 切到 `vite-plus`，同时把测试栈从 `vitest` 切到 `vite-plus/test`。
> **前置**：阶段 1、2 已合入。

### 4.1 范围

- `@varlet/cli` 内部的 dev/build/preview/build:vite/dev:vite 命令实现（`packages/varlet-cli/src/node/commands/{dev,build,preview,vite}.ts`）：把 `import { createServer, build } from 'vite'` 改为 `from 'vite-plus'`。
- `@varlet/cli` 的 `test` 命令（`commands/test.ts`）：把 vitest API 调用改为 `vite-plus/test`。
- 所有 `__tests__/*.spec.{js,ts}`：把 `import { describe, it, expect, vi } from 'vitest'` 批量替换为 `from 'vite-plus/test'`（约 80+ 文件）。
- `varlet-ui-playground/package.json` 的 `build`/`dev`/`preview`：保留 `varlet-cli` 命令名（cli 内部已切到 vite-plus）。
- 根 catalog：`vite` / `vitest` / `@vitest/coverage-istanbul` 是否保留，取决于 `@varlet/vite-plugins` 的 `peerDependencies.vite`：
  - **必须保留** `vite` catalog 项，因为 `@varlet/vite-plugins` 对外的 peer 仍是 `vite`，consumer 不会装 vite-plus。
  - `vitest` catalog 项可以**删除**（迁完 import 后）。

### 4.2 关键风险

#### R1：`@vitejs/plugin-vue` peer 兼容

`@vitejs/plugin-vue@6` 的 peer 是 `vite@^5||^6||^7`。vite-plus 0.1.x 内部用的是 vite 8 alpha。这意味着：
- `@varlet/cli` 内部跑 `vite-plus` 的 dev server 时，加载 `@vitejs/plugin-vue@6` 会有 peer mismatch 警告。
- 解决方式 A：等 `@vitejs/plugin-vue@7` release（兼容 vite 8）。
- 解决方式 B：vite-plus 内部已经 vendored 了一个兼容垫片（待查证）。
- 解决方式 C：临时用 `pnpm.peerDependencyRules.allowedVersions` 屏蔽警告。

**阻塞判定**：如果 plugin-vue 在 vite-plus 下 dev server 启不来或 HMR 失效，阶段 3 暂缓，等上游兼容。

#### R2：vitest → `vite-plus/test` 的 API 差异

vite-plus 文档说 vitest API 全兼容，只换 import 来源。但：
- `defineConfig` 来源也要改（从 `defineConfig` of `vitest/config` → `vite-plus`？待确认）
- coverage provider（`@vitest/coverage-istanbul`）是否仍能用，取决于 vite-plus/test 的内部 vitest 版本是否兼容。

#### R3：Snapshot 文件

vue-test-utils 的 snapshot 与 jsdom 渲染输出可能因为 vite-plus 内部 vitest 版本而出现 vue 编译器版本差异（`@vue/compiler-sfc` 不同小版本会导致 attr 排序差异）。**预期会有一次性 snapshot 更新提交**。

### 4.3 阶段 3 验收

- [ ] `pnpm dev`、`pnpm dev:play` 启动正常，HMR 工作。
- [ ] `pnpm build`、`pnpm build:play` 产物与阶段 2 末尾对比无运行时差异。
- [ ] `pnpm test` 通过率与 dev 基线一致（snapshot 更新除外，需独立 commit）。
- [ ] `@varlet/vite-plugins` 的 peer 仍是 `vite`，对外 contract 未变。

### 4.4 阶段 3 commit 计划

1. `refactor(cli): switch internal vite server to vite-plus`
2. `refactor(cli): switch test runner to vite-plus/test`
3. `chore(ui): migrate __tests__ imports from vitest to vite-plus/test`（80+ 文件，纯 codemod）
4. `test(ui): update snapshots after vite-plus migration`（如有）
5. `chore: drop vitest from catalog`

---

## 5. 阶段 4：`@varlet/cli` 内部命令逐步迁移

> **目标**：把 `@varlet/cli` 的非 server 类命令（compile、build:icons、gen、create、checklist、release/changelog/commit-lint）评估能否复用 vite+ 或 rattail 的能力，能复用则迁移，不能复用则保留。
> **前置**：阶段 1、2、3 已合入。

### 5.1 候选清单（待详细方案）

| 命令 | 当前实现 | 候选方案 | 优先级 |
|---|---|---|---|
| `varlet-cli release` | `@varlet/release.release` | 改用 `rt release`（去掉 `@varlet/release` 依赖）| 高 |
| `varlet-cli changelog` | `@varlet/release.changelog` | 改用 `rt changelog` | 高 |
| `varlet-cli commit-lint` | `@varlet/release.commitLint` | 改用 `rt commit-lint`（如阶段 1 评估通过）| 高 |
| `varlet-cli compile` | 自定义 SFC compile（esbuild + sass + less + 自定义路径处理）| **保留**，无 vite+ 等价物 | — |
| `varlet-cli build` | UI 文档站静态构建 | 阶段 3 已迁移 | — |
| `varlet-cli build:icons` | `@varlet/icon-builder` | **保留**，专属逻辑 | — |
| `varlet-cli gen` / `create` | 模板生成 | **保留** | — |
| `varlet-cli checklist` | 提交信息交互 checklist | **保留** | — |
| `varlet-cli` 的 `engines.node` | `^14.18.0 \|\| >=16.0.0` | bump 到 `>=20.19.0 \|\| >=22.12.0`（与 vite-plus 对齐） | **此处发布 cli major 版本** |

### 5.2 阶段 4 的 cli major 发版

阶段 4 是**唯一一个会触发 `@varlet/cli` 主版本号 bump 的阶段**：
- engines.node bump（破坏性，不论是否其它改动）
- 内部 release/changelog/commit-lint 实现切换（用户不可见，但 deps 字段会动 → patch 即可，与 engines bump 合并成一个 major）

阶段 4 完成后，`@varlet/ui` 自身的 patch/minor 节奏不受影响（`@varlet/ui` 不依赖 `@varlet/cli` 的运行时，只依赖它的 build-time 命令）。

### 5.3 阶段 4 不做的事

- 不动 `varlet-cli compile`（自定义 SFC 编译），它是 varlet 独有的高度定制流程，迁到任何通用打包器都会 break 产物。
- 不动 `client.js` / `client.d.ts` / `template/` / `site/`（cli 暴露给用户的 runtime 资产）。

---

## 6. 风险登记表（跨阶段）

| ID | 风险 | 触发阶段 | 缓解 |
|---|---|---|---|
| RK-01 | pnpm 10 升级导致 lockfile 不兼容 | 1 | 在 PR 中重生成 lockfile，CI 用 pnpm 10 |
| RK-02 | Oxlint 规则集与 ESLint 不完全等价 | 1 | 一次性 reformat commit 单独审阅 |
| RK-03 | Oxfmt 没有 package.json 排序 | 1 | 接受，文档说明 |
| RK-04 | `rt commit-lint` 与 `@varlet/release.commitLint` 行为不一致 | 1 | 阶段 1 保留旧实现，阶段 4 再切 |
| RK-05 | `rt release` 无 `--dry-run`，且会真实改 CHANGELOG | 1 | release 流程在沙箱仓库验证；`pnpm release` 加 confirm prompt |
| RK-06 | tsdown 产物与 tsup 不字节级一致 | 2 | 接受语义等价，文件名强制对齐 |
| RK-07 | tsdown d.ts 与 rollup-plugin-dts 形状不同 | 2 | 单包验证，阻塞合并 |
| RK-08 | `@vitejs/plugin-vue@6` 与 vite-plus 内部 vite 8 peer mismatch | 3 | 阶段 3 启动前先在分支上跑 dev server 验证 |
| RK-09 | vitest snapshot 因 vue 编译器版本变化大量更新 | 3 | 独立 snapshot 更新 commit |
| RK-10 | `@varlet/vite-plugins.peerDependencies.vite` 不能改 | 3 | 强约束：catalog 保留 `vite`，仅在 cli 内部切 vite-plus |
| RK-11 | cli engines.node bump 是破坏性变更 | 4 | 必须发 cli major 版本，且与 `@varlet/ui` 解耦 |

---

## 7. 已废弃的 v1 方案（教训记录）

v1 方案的问题：
1. **双轨命令**（`lint:oxc` 与 `lint` 共存）：心智成本高，CI 双跑或漏跑。
2. **混合期太长**：v1 阶段 A 只做"装包 + 加新命令"，没有任何替换，本质是空操作。
3. **没有正面回应"完全替换"诉求**：用户的目标是"统一栈"，不是"两套并存"。

v2 修正：每个阶段都是**真实替换**，命令名稳定，stage 完成 = 一个工具栈被另一个完全取代。

---

## 8. Review 入口

本文档是阶段 1 启动前的最终方案。Review 重点：

1. **§ 2.2 环境门槛**：是否同意"阶段 1 只升根 engines.node，cli engines 留到阶段 4 + cli major"？
2. **§ 2.4 commit-msg hook**：是否同意阶段 1 保留 `varlet-cli commit-lint` 不替换？
3. **§ 2.4 `pnpm release`**：是否同意 `scripts/release.mjs` 内部从 `@varlet/cli.release` 切到 `rt release`，但保留外层包装（`runTaskQueue` 仍然先跑）？
4. **§ 2.6 oxfmt 缺失 package.json 排序**：是否可接受？
5. **§ 4.1 是否在阶段 3 删除 `vitest` catalog 项**？
6. **§ 5.2 cli major 版本节奏**：是否接受阶段 4 触发 cli major？

Review 通过后再开 commit 1（pnpm/node bump）。
