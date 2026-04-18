# Rattail 2.x + Vite+ 迁移方案（v2.1 重写版）

> 状态：**草案，等待 review，尚未执行**
> 分支：`feat/migrate-rattail2-viteplus-stage-a`（与 `origin/dev` 同基线）
> 上一版（v1）已完全废弃；v2 改为"全量替换、无并行命令"的路线。
> v2.1 增量：在 v2 基础上，明确"cli 子命令软废弃 + 本仓库停用 + cli major 移除"的三段式策略（§ 0.5、§ 1.2、§ 2.5、§ 5.1）。

---

## 0. 顶层原则（贯穿所有阶段）

1. **对外 API、产物路径、`exports` 字段、d.ts 形状零破坏**
   - `packages/varlet-ui/{es,umd,types,style.css,...}` 路径与字节级布局保持兼容（允许内容因为打包器更换而出现压缩差异、注释差异、source map 差异，但**不能**改变模块拆分粒度、CSS 文件名或 default/named export 形状）。
   - 七个 `tsup` 库（`@varlet/shared`、`@varlet/vite-plugins`、`@varlet/use`、`@varlet/preset-unocss`、`@varlet/preset-tailwindcss`、`@varlet/import-resolver`、`@varlet/touch-emulator`）的 `lib/index.{js,cjs,d.ts}` 与 IIFE 产物的运行时行为必须等价。
   - `@varlet/cli` 的 `bin`、子命令名、命令行参数、退出码保持不变；**控制台输出**仅允许新增 deprecation 警告行（见 § 0.5），不改变退出码或成功后的主要输出。
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
5. **`@varlet/cli` 部分子命令走"软废弃 + 本仓库停用"双轨**
   - 被软废弃的命令：`checklist`、`commit-lint`、`release`、`changelog`、`test`、`preview`、`dev:extension`、`build:vite`（以及与之配对的 `dev:vite`、`build:extension`，见 § 1.3）。
   - **软废弃（对 cli 用户）**：cli `bin.ts` 的命令注册**继续保留**，action 内部**继续调用原实现**；但增加 `deprecated()` 提示，文档（`README*.md` / `cli.*.md`）打"Deprecated, will be removed in next major"标记。原因是 cli 的内部实现目前仍依赖 `vite`/`vitest`/`@varlet/release`，这几个底层依赖自身的替换要留到后续阶段（见阶段 3、阶段 4），在那之前必须保证命令能跑通，否则 cli 用户（外部消费者）会立刻 break。
   - **本仓库停用（对本仓库的 `package.json` / hook）**：所有 `varlet-cli <被废弃命令>` 的引用**本阶段就替换**为 rattail 2.x / vite+ 原生命令或直接调底层工具。本仓库不再通过 cli 这层壳使用这些命令。
   - **正式移除（cli major）**：在 cli 自身的 vite/vitest/`@varlet/release` 依赖也切到 rattail/vite+ 之后（阶段 4 或之后的 major 版本），才把这些命令从 `bin.ts` 彻底删除，同时 bump cli major 并在 CHANGELOG 中列出替代方案。

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

### 1.2 `@varlet/cli` 子命令在本仓库的使用场景（阶段 1 要替换掉的）

以下命令在本仓库的 `package.json` / `vite.config.ts` / `scripts/*.mjs` 中仍被直接调用。按 § 0.5 "软废弃 + 本仓库停用" 原则，**本阶段把调用位点全部切走**，命令本身留在 cli 中继续能跑（等后续 cli 内部依赖更新完再正式移除）。

| 命令 | 现在被调的位置 | 本阶段改为 | cli 侧动作 |
|---|---|---|---|
| `varlet-cli checklist` | `vite.config.ts` 的 `rattail.hook['commit-msg']` | **从 hook 中删除**（rattail 无等价；push 前如需 checklist，改为可选的手动命令 `pnpm exec rt ...` 或文档说明，详见 § 2.4） | 保留 `bin.ts` 注册，action 加 `logDeprecated('checklist')`；doc 标 Deprecated |
| `varlet-cli commit-lint` | `vite.config.ts` 的 `rattail.hook['commit-msg']` | `rt commit-lint $1`（hook 数组第一项）| 同上 |
| `varlet-cli release` | `scripts/release.mjs` 通过 `import { release } from '@varlet/cli'` | 改为 `execa('rt', ['release', ...])`，外层仍是 `scripts/release.mjs`，前置 `runTaskQueue()` 保留 | 同上 |
| `varlet-cli changelog` | 根 `package.json` 的 `"changelog"` 脚本 | `rt changelog` | 同上 |
| `varlet-cli test` | `packages/varlet-ui/package.json` 的 `test` / `test:coverage` / `test:watch` | 直接调 `vitest`（或阶段 3 切到 `vp test`，本阶段先直调 vitest，见 § 2.5.1）| 同上 |
| `varlet-cli preview` | `packages/varlet-ui/package.json`、`packages/varlet-ui-playground/package.json` | `vp preview`（vite-plus 的 static preview 能力；见 § 2.5.2） | 同上 |
| `varlet-cli dev:extension` / `build:extension` | `packages/varlet-vscode-extension/package.json` 的 `dev` / `build` | 改用 `vp pack` 或 `tsdown` 直接打包扩展入口，配置迁到 `packages/varlet-vscode-extension/vite.config.ts`（见 § 2.5.3） | `dev:extension`/`build:extension` **一同标 Deprecated**（用户命令单里把一对一起列） |
| `varlet-cli build:vite` / `dev:vite` | `packages/varlet-ui-playground/package.json` 的 `build` / `dev` | `vp build` / `vp dev`，playground 根目录加 `vite.config.ts`（见 § 2.5.4） | `build:vite`/`dev:vite` **一同标 Deprecated** |

> **为什么把 `dev:vite`/`build:extension` 也一起标 Deprecated**？
> 用户只点名了 `dev:extension` 和 `build:vite`，但它们与 `build:extension`/`dev:vite` 是同一对实现（同一个底层 command 文件），拆一半留一半会让 cli 用户困惑。要么整对留着，要么整对废弃。既然本仓库已经不再使用这四个里的任何一个，整对标 Deprecated 语义更干净。review 时如不同意，可回退这两条。

### 1.3 受波及但**不在阶段 1 范围内**的工具链

| 工具 | 用途 | 处理时机 |
|---|---|---|
| `tsup@7.2.0` | 7 个库包的打包 | 阶段 2（→ `vp pack` / tsdown） |
| `vite@7.1.5` (在 `varlet-cli` 的 dev/build/preview/build:vite/dev:vite/dev:extension/build:extension) | cli 内部的文档站 + playground + 扩展构建 | **cli 自身**留到阶段 3；本仓库**不再使用**这些命令（阶段 1 已切走，见 § 1.2） |
| `vitest@3.2.4` (在 `varlet-cli test`) | 测试运行 | 同上：cli 内部留到阶段 3；本仓库阶段 1 直接调 vitest（保留 `vitest` catalog 项） |
| `@varlet/release` (在 cli `bin.ts` 的 release/changelog/commit-lint) | cli 子命令实现 | cli 留到阶段 4 评估；本仓库阶段 1 已切到 `rt` |
| `varlet-cli` 的未废弃内部子命令 (`compile`、`build`、`gen`、`icons`、`create`、`compile:style-vars`) | UI 库自定义编译/产物生成、模板生成 | 阶段 4 |
| `esbuild@0.23.1` (在 `varlet-cli` 的 SFC compile) | SFC 脚本块编译 | 阶段 4 评估 |

---

## 2. 阶段 1：替换底层工具链 + 环境门槛 + 本仓库停用被废弃的 cli 命令

> **目标**：把"工程基础设施"（lint/format/hook/staged/clean）和"本仓库对 cli 被废弃子命令的调用"一次性切到 rattail 2.x + vite+。cli 内部实现保持不动，所有被废弃命令在 cli 中继续能跑。
> **完成后**：
> - 贡献者本地 `pnpm install && pnpm lint && pnpm format && pnpm test && pnpm build && pnpm release` 全部走新栈。
> - 本仓库的 `package.json` 脚本与 git hook 中**不再出现**对 `varlet-cli {checklist,commit-lint,release,changelog,test,preview,dev:extension,build:extension,build:vite,dev:vite}` 的调用。
> - cli 用户（外部消费者）跑这些命令行为不变，但会看到 Deprecated 提示。

### 2.1 范围（红线）

✅ **本阶段做：**

**A. 底层工具链切换**

- 升级 `pnpm` 到 `>=10.0.0`，更新 `packageManager` 与 `engines.pnpm`。
- 升级**根** `engines.node` 到 `^20.19.0 || >=22.12.0`（仅影响贡献者）。`varlet-cli/package.json` 的 `engines.node` **本阶段不动**（见 § 2.2）。
- 卸载 `eslint` / `@configurajs/eslint` / `prettier` / `@configurajs/prettier` / `simple-git-hooks` / `nano-staged` / `rimraf`。
- 安装 `rattail@^2.0.3` + `vite-plus@^0.1.18`（dev 依赖，进 catalog）。
- 删除 `eslint.config.js`、`prettier.config.js`、`.prettierignore`（如有）、`.eslintignore`（如有）。
- 创建根 `vite.config.ts`，包含 `lint` / `fmt` / `staged` / `rattail.{clean,hook}` 配置。
- `simple-git-hooks` / `nano-staged` 字段：**删除**（迁到 `vite.config.ts` 的 `staged` + `rattail.hook`）。

**B. 本仓库停用被废弃的 cli 命令（见 § 2.5 详细映射）**

- 根 `package.json`：`changelog` → `rt changelog`。
- `scripts/release.mjs`：内部从 `@varlet/cli.release` → `rt release` 子进程调用，外层 `runTaskQueue()` 包装保留。
- `vite.config.ts` 的 `rattail.hook['commit-msg']`：
  - `varlet-cli commit-lint` → `rt commit-lint $1`
  - `varlet-cli checklist $1` → **从 hook 中移除**（详见 § 2.4.1）。
- `packages/varlet-ui/package.json`：
  - `test` / `test:coverage` / `test:watch` → 直接调 `vitest`（或 `vitest run` / `vitest -w --coverage` 等）。
  - `preview` → `vp preview`（或直接 `vite preview`，见 § 2.5.2）。
- `packages/varlet-ui-playground/package.json`：
  - `dev` / `build` / `preview` → `vp dev` / `vp build` / `vp preview`，配套加 `packages/varlet-ui-playground/vite.config.ts`。
- `packages/varlet-vscode-extension/package.json`：
  - `dev` / `build` → `vp pack --watch` / `vp pack`（或直接 `tsdown`），配套加 `packages/varlet-vscode-extension/vite.config.ts`（见 § 2.5.3）。

**C. 根 `package.json` scripts 清单**

- `lint`: `vp lint --fix`
- `format`: `vp fmt`
- `release`: `node scripts/release.mjs`（内部已切）
- `changelog`: `rt changelog`
- `clean`: `rt clean`
- `postinstall` / `prepare`: `rt hook`（或现状的 `vp config --hooks-dir .vite-hooks && rt hook`）
- `lint:cache` / `format:cache`：**删除**（vp 自带增量）

**D. cli 侧"软废弃"标记（不动实现）**

- 在 `packages/varlet-cli/src/node/bin.ts` 中，给被废弃命令的 `.description()` 加上 `[Deprecated]` 前缀，并在 `action` 最开头打印一条 deprecation 警告（通过 `shared/logger.ts`），说明将在下一个 major 移除以及推荐替代命令。实现函数**不动**。
- 在 `packages/varlet-cli/README.md`、`README.zh-CN.md`，以及 `packages/varlet-ui/docs/cli.{en-US,zh-CN}.md` 相应条目前加 `> ⚠️ Deprecated. Will be removed in the next major. Use `rt <cmd>` / `vp <cmd>` / `vitest` / `tsdown` instead.` 注记。
- 具体清单见 § 2.6。

❌ **本阶段不做（红线，违反则回滚）：**
- 不修改 `pnpm.overrides` 添加 `vite` / `vitest` 重定向。
- 不替换 `varlet-cli` 内部 import（`vite.ts` / `extension.ts` / `test.ts` / `preview.ts` 继续 `import { ... } from 'vite'` / 子进程调 `vitest`）。
- 不动 `__tests__/*.spec.js` 里的 `import ... from 'vitest'`（这是阶段 3 的事；本阶段只改"谁来跑 vitest"，不改测试文件内容）。
- 不删除 `@varlet/release` 依赖（cli `bin.ts` 内部仍可继续依赖它，直到阶段 4 决策）。
- 不把 `varlet-cli checklist` / `commit-lint` / `release` / `changelog` / `test` / `preview` / `dev:extension` / `build:extension` / `dev:vite` / `build:vite` 这十个命令从 `bin.ts` 删除——只打 Deprecated 标。
- 不 bump `@varlet/cli` 的 major 版本（仅 Deprecated 提示属于 minor 级别兼容改动）。

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
    // 阶段 1 直接采用默认：`varlet-cli commit-lint` 切到 `rt commit-lint`，
    // `varlet-cli checklist` 从 hook 中移除（提醒条目迁到 CONTRIBUTING.md / PR 模板），详见 § 2.4.1
  },
})
```

### 2.4 git hook 与 `release` 的关键决策

#### 2.4.1 commit-msg hook

当前 `vite.config.ts` 的 hook 是：
```ts
'commit-msg': ['pnpm exec varlet-cli commit-lint -p $1', 'pnpm exec varlet-cli checklist $1'],
```

本阶段两条都改：

- `varlet-cli commit-lint -p $1` → `rt commit-lint $1`
- `varlet-cli checklist $1` → **从 hook 中删除**

对 `checklist` 的处理说明：
- `varlet-cli checklist` 是 varlet 独有的"根据 commit 类型展示提交前提醒列表"的功能，rattail **没有**等价物。
- 按 § 0.5 的软废弃策略，该命令在 cli 中保留并打 Deprecated 标，但**本仓库不再通过 commit-msg hook 调用它**。原因有二：
  1. 如果 hook 里继续调 `varlet-cli checklist`，等于本仓库自己的 CI / 本地贡献流仍深度依赖这个被标 Deprecated 的命令，与"本仓库停用"矛盾。
  2. `checklist` 只打印提醒，不阻断提交（不会 `exit 1`），删除后不会影响提交流程的正确性；提醒信息可改由 PR 模板 / `CONTRIBUTING.md` 承接。
- **迁移补偿**：在 `CONTRIBUTING.md`（如无则新建）和 PR 模板中，把 `CHECKLIST.md` 里常用的提醒条目复制过去，供贡献者 push 前手动对照。

切换后的 `vite.config.ts` hook 配置：

```ts
rattail: {
  hook: {
    'commit-msg': ['rt commit-lint $1'],
    'post-merge': ['rt lockfile-check'],
  },
}
```

> 待 review：
> 1. `rt commit-lint` 的正则与错误信息是否能覆盖 `@varlet/release.commitLint` 的 `COMMIT_MESSAGE_RE`。如需要自定义，用 `rt commit-lint` 的配置选项（具体 API 在执行清单中 `rt commit-lint --help` 确认）补齐；如 rattail 不暴露该能力，本阶段回退——hook 仍调 `pnpm exec varlet-cli commit-lint -p $1`，但在 cli 的该命令 action 里打 Deprecated 警告（命令本身不动）。
> 2. 是否同意直接从 hook 删除 `checklist` 调用，并把提醒条目迁到文档。

#### 2.4.2 `pnpm release`

`scripts/release.mjs` 当前：
```js
import { release } from '@varlet/cli'
import { runTaskQueue } from './build.mjs'
await release({ task: runTaskQueue })
```

cli 的 `release` 命令又转调 `@varlet/release.release`。

**阶段 1 做法**（本仓库停用 `varlet-cli release`，但不删 cli 命令）：

- 保留 `scripts/release.mjs` 文件名与 `pnpm release` 命令。
- 文件内容改为：先跑 `runTaskQueue()`，再通过 `tinyexec` 启子进程调 `rt release`（带上原本 `release` options 需要透传的参数，如 `--remote`）。
- `@varlet/cli` 的 `release` 命令在 `bin.ts` 中保留，仅对 `action` 增加 deprecation 警告并继续调 `@varlet/release.release`（与 § 2.1.D 一致）。

预期 `scripts/release.mjs`：

```js
import { x } from 'tinyexec'
import { runTaskQueue } from './build.mjs'

await runTaskQueue()
await x('rt', ['release', ...process.argv.slice(2)], {
  nodeOptions: { stdio: 'inherit' },
  throwOnError: true,
})
```

> **悬而未决（执行清单强制项）**：`rt release` 是否支持"发包前先跑一组任务"（内置 beforeRelease hook）和 `--dry-run`。**阶段 1 第一步** `rt release --help` 全选项核对：
> - 如支持 `beforeRelease` hook → 把 `runTaskQueue` 挪进 `vite.config.ts` 的 `rattail.release.beforeRelease`，`scripts/release.mjs` 可以更薄（甚至删掉，直接 `"release": "rt release"`）。
> - 如不支持 → 保留上面的 `scripts/release.mjs` 包装方案。
> - 如不支持 `--dry-run` → `pnpm release` 加 confirm prompt，或在沙箱仓库做一次完整演练再正式发包（RK-05）。

### 2.5 本仓库停用被废弃 cli 命令的替换细节

以下是 § 1.2 表格的执行细节。原则：本阶段"一次性替换"对 cli 被废弃命令的所有调用点位，替换后回归跑一遍，确保产物/行为与切换前等价。cli 侧的命令实现**不动**。

#### 2.5.1 `varlet-cli test` → 直接调 `vitest`

当前 `packages/varlet-ui/package.json`：
```jsonc
{
  "test": "varlet-cli test",
  "test:coverage": "varlet-cli test -cov",
  "test:watch": "varlet-cli test -w -cov"
}
```

`varlet-cli test` 内部就是 `x('vitest', [...])`（见 `packages/varlet-cli/src/node/commands/test.ts`），只多做两件事：
1. 塞 `--config <VITEST_CONFIG>`（`packages/varlet-cli/src/node/config/vitest.config.ts`）。
2. 支持 `-c <componentName>` → `--dir src/<componentName>`（varlet 专用，但本仓库 `package.json` 的 `test*` 没用到这个 flag）。

替换为：

```jsonc
{
  "test": "vitest run --config ../varlet-cli/lib/node/config/vitest.config.js",
  "test:coverage": "vitest run --coverage --config ../varlet-cli/lib/node/config/vitest.config.js",
  "test:watch": "vitest --coverage --config ../varlet-cli/lib/node/config/vitest.config.js"
}
```

> 待确认：
> 1. `vitest.config.ts` 在 cli build 产物里的路径是否稳定（上面假定了 `lib/node/config/vitest.config.js`）。
> 2. 是否直接把 `vitest.config.ts` 复制一份到 `packages/varlet-ui/` 下，彻底脱离 cli。**推荐此方案**——阶段 4 要删 cli 的 `test` 命令时，配置必然要迁回 UI 包；本阶段一起做。
> 3. `vp test` 是 vite-plus 对 vitest 的包装，阶段 3 再评估是否切到 `vp test`；本阶段只脱离 cli，底层仍 vitest。

#### 2.5.2 `varlet-cli preview` → `vp preview`

当前 `varlet-cli preview` 内部用 `live-server` 服务 `SITE_OUTPUT_PATH`（UI 文档站的 build 产物 `site/`），port 默认 5500。

替换：

- `packages/varlet-ui/package.json`：`"preview": "vp preview site --port 5500"`（待确认 `vp preview` 是否接受 `--port` 和指定目录）。
- `packages/varlet-ui-playground/package.json`：`"preview": "vp preview"`（playground 是 vite build，vp preview 会自动找 `dist/`）。
- 如果 `vp preview` 不能直接服务静态目录（只能服务 vite build 产物），UI 文档站的 `preview` 改为直接 `live-server ./site --port=5500`（保留 `live-server` 作为轻量依赖），或评估把文档站也迁到 vite build，这事留到阶段 3。

> 待 review：`vp preview` 的 CLI 选项。在执行清单中 `vp preview --help` 核对后定稿。

#### 2.5.3 `varlet-cli dev:extension` / `build:extension` → `vp pack` / `tsdown`

`varlet-cli {dev,build}:extension` 内部是 `vite build`（含 `getExtensionConfig(mode)`），产物放到 `packages/varlet-vscode-extension/dist/extension.js`。VSCode 扩展打包严格来说不适合 vite（vite 的强项是带 HTML 的 web 应用），阶段 1 同时改成直接用 `tsdown`（或 `vp pack`）会更简洁，产物仍是单文件 `dist/extension.js`。

新增 `packages/varlet-vscode-extension/vite.config.ts`：

```ts
import { defineConfig } from 'rattail/vite-plus'

export default defineConfig({
  pack: {
    entry: ['src/extension.ts'],
    format: ['cjs'],
    outDir: 'dist',
    fileName: 'extension',
    external: ['vscode'],
    clean: true,
  },
})
```

`package.json` scripts：
```jsonc
{
  "scripts": {
    "build": "vp pack",
    "dev": "vp pack --watch",
    "release": "pnpm build && vsce package --no-dependencies && vsce publish --no-dependencies"
  }
}
```

> 待确认：
> 1. `vp pack` 对 `external: ['vscode']` 的支持（vscode API 是运行时由宿主注入，不能被打包进去）。
> 2. 扩展的 entry 文件名（`src/extension.ts` 是 convention，需 `ls packages/varlet-vscode-extension/src/` 核对）。
> 3. 本阶段该包的迁移**单独一个 commit**（见 § 2.10），便于回滚。

#### 2.5.4 `varlet-cli build:vite` / `dev:vite` → `vp build` / `vp dev`（playground）

`varlet-cli {dev,build}:vite` 内部就是 `createServer / build` with `[vue(), jsx()]`，没有定制 config（见 `packages/varlet-cli/src/node/commands/vite.ts`）。

新增 `packages/varlet-ui-playground/vite.config.ts`：

```ts
import { defineConfig } from 'rattail/vite-plus'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), jsx()],
})
```

`package.json` scripts：
```jsonc
{
  "scripts": {
    "build": "vp build",
    "dev": "vp dev",
    "preview": "vp preview"
  }
}
```

> 待确认：
> 1. playground 现状是否有隐式的 index.html / 入口配置继承自 `varlet-cli` 的 `getViteConfig`。当前 `vite.ts` 没传 `root`，默认用 cwd。`packages/varlet-ui-playground/` 根下有 `index.html`（需 `ls` 核对）。如果有额外的 alias / server 端口，需一并迁入。
> 2. `vp dev` / `vp build` 是否接受所有 vite 的 config 选项（vite-plus 文档说 100% 超集兼容，但 peer mismatch 警告要先在阶段 3 消化）。阶段 1 本变更**放到 § 2.10 commit 计划里独立成一个 commit**，便于对比产物。

#### 2.5.5 `varlet-cli changelog` / `release` / `commit-lint` → `rt *`

已在 § 2.1.B、§ 2.4 中给出。汇总：

- 根 `package.json` `"changelog"`: `rt changelog`
- `scripts/release.mjs`: 切到 `rt release`（保留 `runTaskQueue` 包装）
- `vite.config.ts` hook `commit-msg`: `rt commit-lint $1`

### 2.6 cli 侧的 Deprecated 标记实现

**改 `packages/varlet-cli/src/node/bin.ts`**：给 10 个被废弃命令分别加一行 deprecation 提示。示例：

```ts
program
  .command('release')
  .option('-r --remote <remote>', 'Remote name')
  .description('[Deprecated] Release all packages and generate changelogs')
  .action(async (options) => {
    const { default: logger } = await import('./shared/logger.js')
    logger.warning(
      '`varlet-cli release` is deprecated and will be removed in the next major. Use `rt release` instead.',
    )
    const { release } = await import('@varlet/release')
    return release(options)
  })
```

其余 9 个命令同理，推荐提示文案：

| 命令 | 推荐替代提示 |
|---|---|
| `checklist` | `No direct replacement. This command is deprecated and will be removed in the next major.` |
| `commit-lint` | `Use \`rt commit-lint\` instead.` |
| `release` | `Use \`rt release\` instead.` |
| `changelog` | `Use \`rt changelog\` instead.` |
| `test` | `Use \`vitest\` (or \`vp test\`) directly.` |
| `preview` | `Use \`vp preview\` instead.` |
| `dev:extension` | `Use \`vp pack --watch\` (or \`tsdown --watch\`) instead.` |
| `build:extension` | `Use \`vp pack\` (or \`tsdown\`) instead.` |
| `dev:vite` | `Use \`vp dev\` instead.` |
| `build:vite` | `Use \`vp build\` instead.` |

**改文档**：`packages/varlet-cli/README.{md,zh-CN.md}`、`packages/varlet-ui/docs/cli.{en-US,zh-CN}.md` 中，被废弃命令的段落头部加：

> ⚠️ **Deprecated**. Will be removed in the next major. Use `<替代命令>` instead.

模板生成器 `packages/varlet-cli/template/generators/base/package.json` 本阶段**也跟着改**，使新模板生成的脚手架项目直接写 `rt *` / `vitest` / `vp *`，不再通过被废弃的 cli 命令。

### 2.7 ESLint → Oxlint 规则迁移映射

需要逐条对比：

| ESLint 现状 | Oxlint 等价 | 风险 |
|---|---|---|
| `@configurajs/eslint` 默认规则集 | `lint()` preset | preset 间规则集不完全 1:1，需要白盒对比 |
| `eslint.config.js` 里的 `ignores` | `lint({ ... })` 不直接接 ignore，oxlint 用 `.oxlintignore` 或 cli `--ignore-pattern` | 需要把 ignore 列表迁到 oxlint 的忽略机制 |
| 项目自定义规则（如有） | `lint({ rules: {...}, overrides: [...] })` | 规则名命名空间可能不同（eslint-plugin-* vs oxlint plugin） |

**验收**：`vp lint --fix` 在仓库全量跑一遍后，git diff 行数应当 ≤ ESLint 在同一基线跑出的 diff 行数 × 1.2（容忍小幅差异，但不能有结构性回退如 import 顺序差异）。

### 2.8 Prettier → Oxfmt 规则迁移映射

| Prettier 现状 | Oxfmt 等价 | 风险 |
|---|---|---|
| `printWidth: 120` | Oxfmt 默认 80，需要 `fmt({ printWidth: 120 })` | 待确认 oxfmt 是否暴露 `printWidth` 选项 |
| `singleQuote: true` | `fmt({ singleQuote: true })` | 待确认 |
| `semi: false` | `fmt({ semi: false })` | 待确认 |
| `@ianvs/prettier-plugin-sort-imports` | Oxfmt 内置 import sorting | **行为可能不一致**，需要全量跑一遍看 import 顺序 diff |
| `prettier-plugin-packagejson` | Oxfmt **没有** package.json 排序 | **缺口**：阶段 1 内不解决，package.json 字段顺序回退到"手写顺序" |

**风险点**：`@ianvs/prettier-plugin-sort-imports` 在 varlet 仓库里影响所有 `import` 语句顺序。切到 oxfmt 后会出现一次"大型一次性 reformat 提交"，必须独立成一个 commit（标题 `style: reformat with oxfmt`）以方便 review 与回滚。

### 2.9 阶段 1 验收清单

**底层工具链**
- [ ] `pnpm install` 在 pnpm 10 + Node 20.19/22.12 下成功。
- [ ] `pnpm lint` 走 oxlint，全仓库通过；与 ESLint 基线 diff 已审阅并接受。
- [ ] `pnpm format` 走 oxfmt，全仓库已 reformat，diff 已独立 commit。
- [ ] `git stage` 一些文件 → `vp staged` 行为等价于原 `nano-staged`。
- [ ] `git commit` 触发 `rt hook` 装的 commit-msg hook，`rt commit-lint` 对常见 conventional commits 行为与 `@varlet/release.commitLint` 等价（或至少覆盖现有 CONTRIBUTING 规范）。

**本仓库停用被废弃 cli 命令**
- [ ] `pnpm test` / `pnpm test:coverage` / `pnpm test:watch` 走 `vitest` 直调，测试通过率与 dev 基线一致。
- [ ] `pnpm dev:play` / `pnpm build:play` / `pnpm preview:play` 走 `vp`，行为与原 `varlet-cli {dev,build,preview}:vite` 等价。
- [ ] `pnpm --dir packages/varlet-vscode-extension build` 走 `vp pack`，产物 `dist/extension.js` 大小/入口与 `varlet-cli build:extension` 产物等价（`vsce package` 成功生成 vsix）。
- [ ] `pnpm changelog` 走 `rt changelog`，生成的 CHANGELOG 片段格式在沙箱仓库验证过。
- [ ] `pnpm release --dry-run`（如果 `rt release` 不支持 dry-run，则在沙箱仓库验证），流程中 `runTaskQueue()` 正常前置执行。
- [ ] `grep -r "varlet-cli \(checklist\|commit-lint\|release\|changelog\|test\|preview\|dev:extension\|build:extension\|dev:vite\|build:vite\)" --include=package.json --include=*.ts --include=*.mjs .` 在**仓库根**下**零命中**（仅 `packages/varlet-cli/**` 自身的 `bin.ts`、README、docs 可命中）。

**cli 侧 Deprecated 提示**
- [ ] 运行 `varlet-cli checklist xxx` / `varlet-cli commit-lint -p xxx` 等被废弃命令，会打印 deprecation 警告，但功能正常完成。
- [ ] `packages/varlet-cli/README.md` / `README.zh-CN.md` / `packages/varlet-ui/docs/cli.{en-US,zh-CN}.md` 的对应条目已加 Deprecated 注记。
- [ ] `packages/varlet-cli/template/generators/base/package.json` 已更新为 `rt`/`vitest`/`vp` 等。

**产物与 CI**
- [ ] `pnpm build` / `pnpm compile` / `pnpm build:play` 产物与 dev 基线**字节级一致**（除 sourcemap 路径、playground 因换 vp 可能产生的可接受差异）。
- [ ] `@varlet/cli` 自身 `pnpm build`（cli 的 `tsup` 构建）通过，lib 产物未改变。
- [ ] CI 全绿。

### 2.10 阶段 1 commit 计划

按下面的顺序拆分 commit，方便 review 与回滚：

1. `chore: bump pnpm to 10 and node engines for contributors`
2. `chore: add rattail 2.x and vite-plus to catalog`
3. `chore: replace eslint+prettier+simple-git-hooks+nano-staged with vite+ toolchain`
   - 删旧配置文件
   - 加根 `vite.config.ts`（含 `lint` / `fmt` / `staged` / `rattail.{clean,hook}`，hook 已去掉 checklist 调用）
   - 重写根 `package.json` scripts + 删 `simple-git-hooks` / `nano-staged` 字段
4. `style: reformat repo with oxfmt`（**纯格式化 diff，不可与逻辑改动混合**）
5. `chore: replace rimraf with rt clean`
6. `chore(root): switch changelog/release to rt`
   - 根 `package.json` `"changelog"`: `rt changelog`
   - `scripts/release.mjs`: 内部切到 `rt release` 子进程
7. `refactor(varlet-ui): drop varlet-cli test/preview wrappers`
   - `packages/varlet-ui/package.json`: `test` → `vitest run`（或 `vp test`，待定）；`preview` → `vp preview`（或 `live-server`）
   - 如决定把 `vitest.config.ts` 从 cli 迁到 UI 包，本 commit 一起做
8. `refactor(varlet-ui-playground): drop varlet-cli build:vite/dev:vite wrappers`
   - 新增 `packages/varlet-ui-playground/vite.config.ts`
   - `package.json`: `build`/`dev`/`preview` → `vp build/dev/preview`
9. `refactor(varlet-vscode-extension): drop varlet-cli dev:extension/build:extension wrappers`
   - 新增 `packages/varlet-vscode-extension/vite.config.ts`（`pack` 配置 + `external: ['vscode']`）
   - `package.json`: `build`/`dev` → `vp pack` / `vp pack --watch`
10. `refactor(cli): mark 10 commands as deprecated (no behavior change)`
    - `bin.ts` 给 10 个命令加 `[Deprecated]` description + deprecation 警告
    - `README.md` / `README.zh-CN.md` / `packages/varlet-ui/docs/cli.{en-US,zh-CN}.md` 加注记
    - `packages/varlet-cli/template/generators/base/package.json` 脚本改为 `rt`/`vitest`/`vp`

> 7 / 8 / 9 三个 commit 独立，方便单独回滚某个包的替换。
> 10 号 commit 是"cli 只加警告不改行为"，与 1-9 完全解耦，可单独 revert 而不影响本仓库的停用结果。

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

## 4. 阶段 3：cli 内部 vite + vitest 切到 vite+（文档站仍保留 cli 命令）

> **目标**：让 `@varlet/cli` **仍然保留**的命令（`dev` / `build` / `compile` 等 UI 文档站链路，以及 `dev:extension`/`build:extension`/`dev:vite`/`build:vite`/`test`/`preview` 这些**已软废弃但仍须能跑**的命令）内部从原生 `vite` / `vitest` 切到 `vite-plus` / `vite-plus/test`。同时把测试文件 import 批量迁到 `vite-plus/test`。
> **前置**：阶段 1、2 已合入。
> **本阶段不会让任何被废弃命令"复活"为推荐用法**：它们依旧标 Deprecated，本仓库依旧不调它们；本阶段只是**确保它们在 cli 内部的实现升级后仍行为等价**，以免等到阶段 4 准备删除时发现 cli 内部已经坏掉。

### 4.1 范围

- `@varlet/cli` 内部的**未废弃**命令实现（`packages/varlet-cli/src/node/commands/{dev,build}.ts`）：把 `import { createServer, build } from 'vite'` 改为 `from 'vite-plus'`。
- `@varlet/cli` 内部的**已软废弃**命令实现（`preview.ts` / `vite.ts` / `extension.ts` / `test.ts`）：同样切到 `vite-plus` / `vitest → vite-plus/test`，**但保留 Deprecated 警告和命令注册**。理由见阶段开头"本阶段不会让被废弃命令复活"。
  - 如果切换成本过高（例如 vite-plus 对 `live-server` preview 场景支持不足），该命令可以在本阶段**直接删实现内部 import，仅保留 bin 注册 + deprecation 警告 + `process.exit(1)`**，对等于"命令仍存在但主动告错"。此为阶段 4 正式删除的前奏；需在 § 4.3 验收清单中明确选择。
- 所有 `__tests__/*.spec.{js,ts}`：把 `import { describe, it, expect, vi } from 'vitest'` 批量替换为 `from 'vite-plus/test'`（约 80+ 文件）。
- 本仓库 `packages/varlet-ui/package.json` 的 `test*` 脚本：从阶段 1 的 `vitest run ...` → `vp test ...`（或保留 vitest 直调，由 vite-plus/test 与 vitest 的 CLI 兼容度决定）。
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

- [ ] `pnpm dev` 启动正常，HMR 工作（UI 文档站，走 cli 内部切换到 vite-plus 后的实现）。
- [ ] `pnpm dev:play` / `pnpm build:play` 在阶段 1 已脱离 cli 后仍稳定（与 vite-plus 升级无关），CI 跑通。
- [ ] `pnpm build` 文档站产物与阶段 2 末尾对比无运行时差异。
- [ ] `pnpm test` 走 vite-plus/test，通过率与 dev 基线一致（snapshot 更新除外，需独立 commit）。
- [ ] `@varlet/vite-plugins` 的 peer 仍是 `vite`，对外 contract 未变。
- [ ] cli 内部被废弃命令（`preview` / `dev:vite` / `build:vite` / `dev:extension` / `build:extension` / `test`）在切到 vite-plus 后仍能跑通（或已降级为"主动告错"，在 § 4.1 明确标注）。

### 4.4 阶段 3 commit 计划

1. `refactor(cli): switch internal vite server to vite-plus`（`dev.ts` / `build.ts` / 可选 `preview.ts`）
2. `refactor(cli): switch deprecated vite/extension commands to vite-plus`（`vite.ts` / `extension.ts`；仅维持工作，保留 Deprecated 警告）
3. `refactor(cli): switch test runner to vite-plus/test`
4. `chore(ui): migrate __tests__ imports from vitest to vite-plus/test`（80+ 文件，纯 codemod）
5. `test(ui): update snapshots after vite-plus migration`（如有）
6. `refactor(varlet-ui): switch test scripts from vitest to vp test`（阶段 1 的 `vitest run` → `vp test`）
7. `chore: drop vitest from catalog`

---

## 5. 阶段 4：`@varlet/cli` 正式移除被废弃命令 + 内部命令继续精简

> **目标**：在 cli 的下一个 **major** 版本中，把 § 0.5 列出的 10 个被软废弃命令（`checklist`、`commit-lint`、`release`、`changelog`、`test`、`preview`、`dev:extension`、`build:extension`、`dev:vite`、`build:vite`）从 `bin.ts` 中**真正删除**，同时评估剩余命令（`compile`、`build`、`build:icons`、`gen`、`create`、`compile:style-vars`）是否还有进一步简化空间。
> **前置**：阶段 1、2、3 已合入，且阶段 1 的 deprecation 提示已在 cli 至少一个 minor 版本中发布过，给外部消费者留出迁移期。

### 5.1 被废弃命令的处理

| 命令 | 当前实现（阶段 3 末态）| 阶段 4 处理 |
|---|---|---|
| `varlet-cli release` | `@varlet/release.release` + Deprecated 警告 | **删 `bin.ts` 注册**；删 `@varlet/release` 依赖（若仅此命令用）|
| `varlet-cli changelog` | `@varlet/release.changelog` + Deprecated 警告 | 删 |
| `varlet-cli commit-lint` | `@varlet/release.commitLint` + Deprecated 警告 | 删 |
| `varlet-cli checklist` | 自定义 markdown 解析 + Deprecated 警告 | 删（无替代，退出生态）|
| `varlet-cli test` | `vitest`（或 vite-plus/test）子进程 + Deprecated 警告 | 删 |
| `varlet-cli preview` | `live-server` 或 `vp preview` + Deprecated 警告 | 删 |
| `varlet-cli dev:extension` / `build:extension` | `vite-plus build` + Deprecated 警告 | 删 |
| `varlet-cli dev:vite` / `build:vite` | `vite-plus createServer/build` + Deprecated 警告 | 删 |

删除后需要：
- 删除不再被引用的源文件：`commands/{extension,vite,preview,test,checklist}.ts`（`release`/`changelog`/`commit-lint` 原本就是直接 `import { x } from '@varlet/release'`，只需改 `bin.ts`）。
- 评估删除 `@varlet/release` workspace 依赖（若 `@varlet/release` 不再被 cli 引用，workspace 保留与否由其它消费者决定，本迁移不越界）。
- 更新 `README*.md` / `cli.*.md` / `template/generators/base/package.json`，把"已删除命令"段落也删除（阶段 1 的 Deprecated 注记可以去掉）。

### 5.2 剩余命令的评估

| 命令 | 当前实现 | 候选方案 | 优先级 |
|---|---|---|---|
| `varlet-cli dev` / `varlet-cli build` | UI 文档站 vite server/build（阶段 3 已切 vite-plus） | **保留**，varlet 独有配置链路 | — |
| `varlet-cli compile` | 自定义 SFC compile（esbuild + sass + less + 自定义路径处理）| **保留**，无 vite+ 等价物 | — |
| `varlet-cli build:icons` | `@varlet/icon-builder` | **保留**，专属逻辑 | — |
| `varlet-cli gen` / `create` | 模板生成 | **保留** | — |
| `varlet-cli compile:style-vars` | 样式变量 JSON 生成 | **保留** | — |
| `varlet-cli` 的 `engines.node` | `^14.18.0 \|\| >=16.0.0` | bump 到 `>=20.19.0 \|\| >=22.12.0`（与 vite-plus 对齐） | **与本阶段的 bin.ts 大删除合并为一次 cli major** |

### 5.3 阶段 4 的 cli major 发版

阶段 4 是**唯一一个会触发 `@varlet/cli` 主版本号 bump 的阶段**。本版本包含两类破坏性变更：
1. 10 个子命令被移除（外部消费者若有使用，需按 § 0.5 列出的替代命令迁移）。
2. `engines.node` bump 到 `^20.19.0 || >=22.12.0`。

发版前置工作：
- CHANGELOG 中用一个专章 `Breaking Changes` 列出移除的命令 + 对应替代命令。
- 检查 downstream：`create-varlet`（如果 varlet 有 scaffold 项目）、template 生成器、社区公开文档中对这些命令的引用全部更新。
- 阶段 4 合并前应**距离阶段 1 发布至少一个 minor 周期**，确保用户看到过 Deprecated 警告。

阶段 4 完成后，`@varlet/ui` 自身的 patch/minor 节奏不受影响（`@varlet/ui` 不依赖 `@varlet/cli` 的运行时，只依赖它的 build-time 命令，而这些命令在本阶段都没被删除）。

### 5.4 阶段 4 不做的事

- 不动 `varlet-cli compile`（自定义 SFC 编译），它是 varlet 独有的高度定制流程，迁到任何通用打包器都会 break 产物。
- 不动 `client.js` / `client.d.ts` / `site/`（cli 暴露给用户的 runtime 资产）。
- 不"顺便"改任何未被废弃命令的行为（如 `gen`、`create` 的交互），major 版本聚焦在"删除 + engines"两件事，便于 downstream 评估迁移成本。

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
| RK-12 | 阶段 1 删除 hook 中 `varlet-cli checklist` 调用后，贡献者漏看提醒 | 1 | 提醒条目迁到 `CONTRIBUTING.md` / PR 模板；命令本身保留供手动运行 |
| RK-13 | 软废弃期间 cli 内部仍依赖 `@varlet/release` / `vite` / `vitest`，若上游 break 会让废弃命令也 break | 1→3 | 阶段 3 把废弃命令内部实现也切到 vite-plus，提前暴露问题 |
| RK-14 | 阶段 1 把 playground 的 vite 配置从 cli 隐式继承改为 playground 本地 `vite.config.ts`，可能遗漏 alias / server 选项 | 1 | 切换后跑 dev server + build 全链路，和原 `varlet-cli build:vite` 产物做 byte-level 对比 |
| RK-15 | `vp pack` 对 VSCode 扩展的 `external: ['vscode']` 支持不充分 | 1 | 阶段 1 该包迁移作为独立 commit；若阻塞，回退到 `tsdown` 直调，`package.json` 写 `"build": "tsdown"` |
| RK-16 | 阶段 4 删除命令时，下游 downstream（含社区 scaffold）还在用 | 4 | 至少提前一个 minor 周期发布带 Deprecated 提示的 cli；CHANGELOG 的 Breaking Changes 专章列替代方案 |

---

## 7. 已废弃的 v1 方案（教训记录）

v1 方案的问题：
1. **双轨命令**（`lint:oxc` 与 `lint` 共存）：心智成本高，CI 双跑或漏跑。
2. **混合期太长**：v1 阶段 A 只做"装包 + 加新命令"，没有任何替换，本质是空操作。
3. **没有正面回应"完全替换"诉求**：用户的目标是"统一栈"，不是"两套并存"。

v2 修正：每个阶段都是**真实替换**，命令名稳定，stage 完成 = 一个工具栈被另一个完全取代。

v2.1 增量（本文件当前版本）：引入"对 cli 子命令的软废弃 + 本仓库停用"策略（§ 0.5）。即：
- 本仓库**当下**就把对被废弃 cli 命令的所有调用切到 rattail / vite+ / 底层工具（阶段 1）。
- cli 内部实现**继续保留**，仅加 Deprecated 提示，确保 cli 用户（包括我们自己的回退通道）在依赖升级完成前不会 break。
- cli 内部的底层依赖（`vite` / `vitest` / `@varlet/release`）在阶段 3 升级，与命令行为解耦。
- 最终在阶段 4 的 cli major 中一次性删除这些命令，Breaking Changes 在 CHANGELOG 中集中声明。

这不是"双轨命令"：本仓库从不主动调用被废弃命令，没有任何脚本/hook 既有新又有旧。保留命令的目的仅是避免破坏 cli 对外契约。

---

## 8. Review 入口

本文档是阶段 1 启动前的最终方案。Review 重点：

1. **§ 0.5 "软废弃 + 本仓库停用"总原则**：是否同意本仓库当下就停用、cli 内部继续保留并加 Deprecated 提示、在阶段 4 的 cli major 中正式移除？
2. **§ 1.2 命令替换映射表**：
   - `checklist` 在 hook 中直接移除（不替换）是否可接受？
   - `dev:vite` / `build:extension` 是否跟着 `dev:extension` / `build:vite` 一起标 Deprecated（即成对处理）？
3. **§ 2.2 环境门槛**：是否同意"阶段 1 只升根 engines.node，cli engines 留到阶段 4 + cli major"？
4. **§ 2.4.1 commit-msg hook**：是否同意本阶段就把 `commit-lint` 切到 `rt commit-lint`，并把 `checklist` 从 hook 中删除（提醒条目迁到 CONTRIBUTING.md）？
5. **§ 2.4.2 `pnpm release`**：是否同意 `scripts/release.mjs` 内部从 `@varlet/cli.release` 切到 `rt release`，但保留外层包装（`runTaskQueue` 仍然先跑）？若 `rt release` 支持 `beforeRelease` hook，是否直接简化成 `"release": "rt release"`？
6. **§ 2.5.3 vscode-extension 改 `vp pack`**：vs. 直接用 `tsdown`，哪个更稳？是否同意本阶段一步到位？
7. **§ 2.5.4 playground vite 配置**：从 cli 隐式继承迁到 playground 本地 `vite.config.ts` 是否可行（需 `ls packages/varlet-ui-playground/` 核对 index.html / alias 等）？
8. **§ 2.6 cli Deprecated 提示文案**：推荐提示表的文案是否合适？是否需要加 "will be removed in v4.0.0"（具体版本号）而不是 "next major"？
9. **§ 2.8 oxfmt 缺失 package.json 排序**：是否可接受？
10. **§ 4.1 是否在阶段 3 删除 `vitest` catalog 项**，以及是否在阶段 3 把被废弃的 cli 命令（`preview`/`test`/`vite`/`extension`）内部实现也切到 vite-plus（避免"删除时发现已坏"）？
11. **§ 5.3 cli major 版本节奏**：是否接受阶段 4 触发 cli major，且至少距离阶段 1 发布一个 minor 周期？

Review 通过后再开 commit 1（pnpm/node bump）。
