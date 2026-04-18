# Rattail 2.x + Vite+ 迁移方案（v2.2 重写版，v2.3 修订 § 5 阶段 4，v2.4 增补阶段 5）

> 状态：**阶段 1、2、3 已在当前分支落地**。**阶段 4（§ 5.1～5.4，v2.3）**：本仓库对软废弃 `varlet-cli` 子命令**全面替代**；**`template/generators/**`** 默认 **vite-plus + rattail + `@varlet/cli`**。**阶段 5（§ 5.5，v2.4）**：在阶段 4 完成后更新 **CLI README / `cli.*.md`**——标记即将废弃命令、写明推荐三件套架构、提示 **`varlet-cli gen`** 对齐最新模板。正式删 `bin.ts` 与 cli major 仍在 **§ 5.6**。
> 分支：`feat/migrate-rattail2-viteplus-stage-a`（与 `origin/dev` 同基线）
> 上一版（v1）已完全废弃；v2 改为"全量替换、无并行命令"的路线。
> v2.1 增量：在 v2 基础上，明确"cli 子命令软废弃 + 本仓库停用"的策略（§ 0.5、§ 1.2、§ 2.5）。本次迁移**不**包含正式删除被废弃命令和 cli major 发版，这些工作推迟到后续大版本（§ 5.6）。`test` 命令**明确不在废弃名单**——它封装的 vitest 预设被 scaffold 模板复用，废弃成本高于收益（§ 0.5、§ 4.1）。
> v2.2 增量（本文件当前版本）：把 § 4 阶段 3 的目标从"仅切 vitest"扩展为"**cli 内部 vite + vitest + @varlet/release 全部升级到目标栈**"。具体：
> - `pnpm-workspace.yaml` 的 `overrides` 同时把 `vite` / `vitest` 重定向到 vite-plus-core / vite-plus-test（vite-plus 官方推荐的"激进 override"模式），全仓库类型链与运行时统一。
> - cli 7 处 `import 'vite'` 全部切到 `import 'vite-plus'`，源码即可表达"内部用 vite-plus"的意图，不再依赖 override 才跑得通。
> - `@varlet/release` 从 `^0.3.3` 升到 `^2.2.1`（cli 名 `varlet-release` → `vr`，Node API 兼容；新版纯 ESM，要求 Node `^20.19.0 || >=22.12.0`，与 vite-plus 对齐）。
> - 8 个软废弃命令在 `bin.ts` 中正式打 `[Deprecated]` description + action 内 `deprecated()` 警告（这是阶段 1 漏做的事，本阶段补齐）。`preview` 不在软废弃名单内（与 `dev`/`build`/`preview` 三件套配对，内部基于 `live-server`，与 vite/vitest 栈无关，见 § 0.5）。
> - 顶层原则 § 4 由"任何阶段都不修改 overrides"**修订**为"阶段 3 在严格条件下启用 overrides"（见下文 § 0.4）。
> v2.3 增量：**阶段 4 从「仅盘点 cli」扩展为「本仓库全面停用软废弃命令 + 生成器默认栈与主仓对齐」**。阶段 1 已做过一轮根目录与主要包的脚本替换；阶段 4 要求**二次扫仓**（grep + CI + 文档 + 边缘脚本）并**重写 `template/generators/**`**，使脚手架与主仓库在「`rt`/`vp` 替代废弃子命令、保留未废弃 `varlet-cli` 一等能力」上完全一致（详见 § 5）。
> v2.4 增量：**阶段 5（§ 5.5）** 专门处理 **CLI 对外文档与 README**——为即将废弃的子命令补齐醒目标记与替代说明；统一推荐 **「`@varlet/cli`（Varlet 一等能力）+ rattail + vite-plus」** 的最新架构叙事；并明确提示用户可通过 **`varlet-cli gen`** 将已有组件库工程**对齐到当前内置的最新模板**（在备份/版本控制前提下操作）。

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
4. **`pnpm.overrides` 的策略：阶段 1-2 不动；阶段 3 启用 vite + vitest 双 override（vite-plus 官方推荐路径）**
   - vite-plus 官方文档明确建议把 `vite` → `@voidzero-dev/vite-plus-core`、`vitest` → `@voidzero-dev/vite-plus-test`，这是 vite-plus 的"全量接管"模式（详见 https://viteplus.dev/guide/install）。
   - **阶段 3 启用 overrides 的理由**：
     - vite-plus 包本身就是 `export * from '@voidzero-dev/vite-plus-core'`，`from 'vite'` 与 `from 'vite-plus'` 经 override 后拿到**同一个**类型与运行时实例，cli 内部 + `@varlet/vite-plugins` + `@vitejs/plugin-vue` 三方的 `Plugin` / `InlineConfig` 类型链统一，消除"vite vs vite-plus 双 Plugin 类型签名"冲突（这是 v2.1 版本反复回滚的根因）。
     - `@vitejs/plugin-vue@6` 等的 peer warning 在 lockfile 中可被验证为 satisfied 同实例（与 vitest override 的处理一致），无运行时风险。
   - **对外契约保护**：`overrides` 与 `catalog:` 同样在 `pnpm publish` / `pnpm pack` 时被剥离，**不会**写入发布后的 `package.json`。`@varlet/vite-plugins` 对外 peer 仍是 `vite`，外部消费者装的是真 vite，不受任何影响。这是该方案能成立的关键前提。
   - **导入风格**：cli 内部 7 处 `from 'vite'` 全部切到 `from 'vite-plus'`，源码即表达"内部用 vite-plus"的意图，且不依赖 override 才能跑（即使将来 override 撤掉，cli 内部仍然走 vite-plus）。`@varlet/vite-plugins` 等对外发布的包**保持** `from 'vite'`，d.ts 中 Plugin 类型仍来自 `vite`，对外 contract 不变。
5. **`@varlet/cli` 部分子命令走"软废弃 + 本仓库停用"双轨**
   - 被软废弃的命令：`checklist`、`commit-lint`、`release`、`changelog`、`dev:extension`、`build:vite`（以及与之配对的 `dev:vite`、`build:extension`，见 § 1.3）。
   - **不在软废弃名单内的命令**：
     - `test`（含 `test -cov` / `test -w`）。它内部封装了一份带 `vue + jsx + jsdom + 项目惯例 coverage exclude` 的 vitest 配置，并被 `template/generators/base/package.json` 复用（scaffold 出来的项目"开箱即跑测试"）。废弃它意味着把这套预设迁回 UI 包并要求 scaffold 用户自行管理 vitest 配置 + 一堆 peer 依赖，与 cli "约定优于配置" 的设计相悖。本次迁移**保留** `test` 命令；阶段 3 仅把它内部 spawn 的子进程从 `vitest` 切到 `vp test`，对外接口完全不变。
     - `preview`。它与 `dev` / `build` 构成文档站的"开发—构建—预览"三件套，语义单一、参数稳定（仅 `--port`），内部实现基于 `live-server` 服务 `site/` 静态产物，**与 vite/vitest 栈无关**，不存在依赖升级压力。同时 `vp preview` 只能服务 vite build 产物 `dist/`，不能直接替代服务于 `site/`（varlet 文档站是 cli 自有产物目录）。保留 `preview` 作为一级命令让用户命令栈与 `dev` / `build` 对称，符合最小认知负担原则。
   - **软废弃（对 cli 用户）**：cli `bin.ts` 的命令注册**继续保留**，action 内部**继续调用原实现**；但增加 `deprecated()` 提示，文档（`README*.md` / `cli.*.md`）打"Deprecated, will be removed in next major"标记。阶段 3 起 cli 内部实现已切到 vite-plus 栈；软废弃命令仍保留以便外部旧脚本不立刻断裂。
   - **本仓库停用（对本仓库的 `package.json` / hook / CI / 文档）**：对已软废弃的 `varlet-cli` 子命令**不得**在本仓库脚本与推荐文档中调用；一律用 rattail（`rt *`）与 vite-plus（`vp *`）替代。**阶段 1** 完成主干替换；**阶段 4（§ 5.1～5.4）** 再做一轮**全面扫仓与补漏**，并同步 **CLI 生成器模板**（§ 5.2）；**阶段 5（§ 5.5）** 更新 **CLI README / 官网 cli 文档**，与模板及推荐栈叙事一致。
   - **正式移除（后续大版本，不在本次迁移内）**：在 cli 自身的 vite/vitest/`@varlet/release` 依赖也切到 rattail/vite+ 之后，再由**后续大版本**单独决策从 `bin.ts` 删除这些命令并 bump cli major。本次迁移的阶段 1-5 **不做正式删除**（详见 § 5.6）。

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
| `varlet-cli dev:extension` / `build:extension` | `packages/varlet-vscode-extension/package.json` 的 `dev` / `build` | 改用 `vp pack`（`pack` + `deps.neverBundle: ['vscode']`）或 `tsdown`，配置迁到 `packages/varlet-vscode-extension/vite.config.ts`（见 § 2.5.3） | `dev:extension`/`build:extension` **一同标 Deprecated**（用户命令单里把一对一起列） |
| `varlet-cli build:vite` / `dev:vite` | `packages/varlet-ui-playground/package.json` 的 `build` / `dev` | `vp build` / `vp dev`，playground 根目录加 `vite.config.ts`（见 § 2.5.4） | `build:vite`/`dev:vite` **一同标 Deprecated** |

> **为什么把 `dev:vite`/`build:extension` 也一起标 Deprecated**？
> 用户只点名了 `dev:extension` 和 `build:vite`，但它们与 `build:extension`/`dev:vite` 是同一对实现（同一个底层 command 文件），拆一半留一半会让 cli 用户困惑。要么整对留着，要么整对废弃。既然本仓库已经不再使用这四个里的任何一个，整对标 Deprecated 语义更干净。review 时如不同意，可回退这两条。

### 1.3 受波及但**不在阶段 1 范围内**的工具链

| 工具 | 用途 | 处理时机 |
|---|---|---|
| `tsup@7.2.0` | 7 个库包的打包 | 阶段 2（→ `vp pack` / tsdown） |
| `vite@7.1.5` (在 `varlet-cli` 的 dev/build/build:vite/dev:vite/dev:extension/build:extension) | cli 内部的文档站 + playground + 扩展构建 | **cli 自身**留到阶段 3；本仓库**不再使用**被软废弃的四个命令（阶段 1 已切走，见 § 1.2），`dev` / `build` / `preview` 三件套保留 |
| `vitest@3.2.4` (在 `varlet-cli test`) | 测试运行 | cli 内部留到阶段 3：把 `commands/test.ts` spawn 的 `vitest` 子进程切到 `vp test`；`config/vitest.config.ts` 的 `defineConfig` 切到 `vite-plus` 并适配 vitest 4 配置 schema。本阶段不动；`test` 命令本身**不废弃**（见 § 0.5） |
| `@varlet/release` (在 cli `bin.ts` 的 release/changelog/commit-lint) | cli 子命令实现 | cli 留到阶段 4 评估；本仓库阶段 1 已切到 `rt` |
| `varlet-cli` 的未废弃内部子命令 (`compile`、`build`、`gen`、`icons`、`create`、`compile:style-vars`) | UI 库自定义编译/产物生成、模板生成 | 阶段 4 |
| `esbuild@0.23.1` (在 `varlet-cli` 的 SFC compile) | SFC 脚本块编译 | 阶段 4 评估 |

---

## 2. 阶段 1：替换底层工具链 + 环境门槛 + 本仓库停用被废弃的 cli 命令

> **目标**：把"工程基础设施"（lint/format/hook/staged/clean）和"本仓库对 cli 被废弃子命令的调用"一次性切到 rattail 2.x + vite+。cli 内部实现保持不动，所有被废弃命令在 cli 中继续能跑。
> **完成后**：
> - 贡献者本地 `pnpm install && pnpm lint && pnpm format && pnpm test && pnpm build && pnpm release` 全部走新栈。
> - 本仓库的 `package.json` 脚本与 git hook 中**不再出现**对 `varlet-cli {checklist,commit-lint,release,changelog,dev:extension,build:extension,build:vite,dev:vite}` 的调用（`test` / `preview` 不在停用范围，理由见 § 0.5）。
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
- `vite.config.ts` 的 `rattail.hook`：使用 `rattail/vite-plus` 的 `hook()` 预设（默认 `commit-msg`: `rt commit-lint $1`、`post-merge`: `rt lockfile-check`）；**不再调用** `varlet-cli checklist`（详见 § 2.4.1）。
- `packages/varlet-ui/package.json`：
  - `test` / `test:coverage` / `test:watch` → **保持不变**，继续 `varlet-cli test [-cov] [-w]`（见 § 0.5：`test` 命令保留）。
  - `dev` / `build` / `preview` → **保持不变**，继续 `varlet-cli {dev,build,preview}`（见 § 0.5：`preview` 命令保留；`dev` / `build` 一直就是一级命令）。
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
- 不替换 `varlet-cli` 内部 import（`vite.ts` / `extension.ts` / `test.ts` 继续 `import { ... } from 'vite'` / 子进程调 `vitest`）。
- 不动 `__tests__/*.spec.js` 里的 `import ... from 'vitest'`（这是阶段 3 的事；本阶段只改"谁来跑 vitest"，不改测试文件内容）。
- 不删除 `@varlet/release` 依赖（cli `bin.ts` 内部仍可继续依赖它，是否移除推迟到后续大版本决策）。
- 不把 `varlet-cli checklist` / `commit-lint` / `release` / `changelog` / `dev:extension` / `build:extension` / `dev:vite` / `build:vite` 这八个命令从 `bin.ts` 删除——只打 Deprecated 标。
- 不 bump `@varlet/cli` 的 major 版本（仅 Deprecated 提示属于 minor 级别兼容改动）。

### 2.2 环境门槛升级（破坏性，但只对**贡献者**）

- **对 `@varlet/ui` 终端用户**：**无影响**。`@varlet/ui` 发布产物的 `engines` 字段不会变化，运行时只需要 vue 3 + 浏览器。
- **对贡献者**：必须升级到 pnpm 10+ 和 Node 20.19+/22.12+。需在 README 与 CONTRIBUTING（如有）注明。
- **对 `@varlet/cli` 用户**：本次迁移**不动** `varlet-cli/package.json` 的 `engines.node`（保持 `^14.18.0 || >=16.0.0`）。cli engines 的 bump 属于破坏性变更，留待**后续大版本**与命令删除一起处理（见 § 5.6）。

> **结论**：阶段 1 **只升级根 `engines.node`**（影响贡献者），`varlet-cli/package.json` 的 `engines.node` 在本次迁移的所有阶段都保持原样。这样本次迁移完全是"内部工程升级"，cli 的发版语义不变。

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

#### 2.5.1 `varlet-cli test`：**保持不变**

`varlet-cli test` 不在停用名单（见 § 0.5）。其封装的"vue + jsx + jsdom + 项目惯例 coverage exclude" 配置同时被本仓库 UI 包和 `template/generators/base/package.json` 复用，废弃后维护成本反而更高。本阶段对 `packages/varlet-ui/package.json` 的 `test*` 脚本不做改动；阶段 3 仅升级 cli 内部实现（spawn `vp test` 替代 `vitest` 子进程），对外接口完全等价。

#### 2.5.2 `varlet-cli preview`：**保持不变**

`varlet-cli preview` 不在停用名单（见 § 0.5）。其内部用 `live-server` 服务 `SITE_OUTPUT_PATH`（UI 文档站的 build 产物 `site/`），port 默认 5500，与 vite/vitest 栈无关，也没有升级压力；同时 `vp preview` 只服务 vite build 产物 `dist/`，不能无缝替代服务 `site/` 的场景。保留 `preview` 作为一级命令让 cli 用户命令栈与 `dev` / `build` 对称。

- `packages/varlet-ui/package.json`：`"preview": "varlet-cli preview"`（**保持原样**）。
- `packages/varlet-ui-playground/package.json`：playground 是 vite build，其 `preview` 继续走 `vp preview`（见 § 2.5.4），与 cli 的 `preview` 命令无关。

#### 2.5.3 `varlet-cli dev:extension` / `build:extension` → `vp pack` / `tsdown`

`varlet-cli {dev,build}:extension` 内部是 `vite build`（含 `getExtensionConfig(mode)`），主入口产物为 `packages/varlet-vscode-extension/dist/extension.js`。本仓库与阶段 2 库包一致，采用 **`vp pack`**（tsdown）：`vscode` 用 `deps.neverBundle` 排除；产物为 **ESM**（`package.json` 含 `"type": "module"`，`format: ['esm']`），需 **`engines.vscode": "^1.100.0"`** 起（VS Code 1.100 起 Node 扩展宿主才稳定支持扩展侧原生 ESM）。`@varlet/*` 等由打包器决定是否打入 `extension.js`；与旧 CJS 单文件策略体积可能不同，属预期差异。

新增 `packages/varlet-vscode-extension/vite.config.ts`：

```ts
import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: {
    entry: 'src/extension.ts',
    format: ['esm'],
    outDir: 'dist',
    hash: false,
    fixedExtension: false,
    clean: true,
    deps: {
      neverBundle: ['vscode'],
    },
  },
})
```

`package.json`（节选）：
```jsonc
{
  "type": "module",
  "main": "./dist/extension.js",
  "engines": { "vscode": "^1.100.0" },
  "scripts": {
    "build": "vp pack",
    "dev": "vp pack --watch",
    "release": "pnpm build && vsce package --no-dependencies && vsce publish --no-dependencies"
  }
}
```

> 说明：**Web 扩展宿主**仍不按此路径支持纯 ESM；本扩展仅面向 **Node 扩展宿主**。若需兼容 VS Code \<1.100，只能保留 CJS 入口或双入口策略。
>
> 待确认：
> 1. `deps.neverBundle: ['vscode']` 与旧 `rollupOptions.external: ['vscode']` 等价（API 由宿主注入）。
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

**改 `packages/varlet-cli/src/node/bin.ts`**：给 8 个被废弃命令分别加一行 deprecation 提示（`test` / `preview` 不在内）。示例：

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

其余 7 个命令同理，推荐提示文案：

| 命令 | 推荐替代提示 |
|---|---|
| `checklist` | `No direct replacement. This command is deprecated and will be removed in the next major.` |
| `commit-lint` | `Use \`rt commit-lint\` instead.` |
| `release` | `Use \`rt release\` instead.` |
| `changelog` | `Use \`rt changelog\` instead.` |
| `dev:extension` | `Use \`vp pack --watch\` (or \`tsdown --watch\`) instead.` |
| `build:extension` | `Use \`vp pack\` (or \`tsdown\`) instead.` |
| `dev:vite` | `Use \`vp dev\` instead.` |
| `build:vite` | `Use \`vp build\` instead.` |

> `test` 命令**不在废弃名单内**，无需 deprecation 文案。理由见 § 0.5。

**改文档（阶段 1 可先打补丁；完整改版在阶段 5 § 5.5）**：`packages/varlet-cli/README.{md,zh-CN.md}`、`packages/varlet-ui/docs/cli.{en-US,zh-CN}.md` 中，被废弃命令的段落头部加：

> ⚠️ **Deprecated**. Will be removed in the next major. Use `<替代命令>` instead.

阶段 5 在此基础上补齐：**推荐架构**（`@varlet/cli` + rattail + vite-plus）、**`varlet-cli gen`** 对齐最新模板说明，与 § 5.5 验收清单一致。

模板生成器 `packages/varlet-cli/template/generators/**`：阶段 1 可先按 § 2.9 做最小改动；**阶段 4（§ 5.2）** 要求与主仓完全对齐——新工程默认 **vite-plus + rattail + `@varlet/cli`**，`scripts` 中不写已软废弃子命令，测试栈与主仓阶段 3 一致。

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
- [ ] `pnpm test` / `pnpm test:coverage` / `pnpm test:watch` 仍走 `varlet-cli test`（**保留**，不在停用名单），测试通过率与 dev 基线一致。
- [ ] `pnpm dev:play` / `pnpm build:play` / `pnpm preview:play` 走 `vp`，行为与原 `varlet-cli {dev,build,preview}:vite` 等价。
- [ ] `pnpm --dir packages/varlet-vscode-extension build` 走 `vp pack`，产物 `dist/extension.js` 可加载、`vscode` 与 `@varlet/*` 解析正确（`vsce package` 成功生成 vsix；体积可与旧单文件 bundle 不同）。
- [ ] `pnpm changelog` 走 `rt changelog`，生成的 CHANGELOG 片段格式在沙箱仓库验证过。
- [ ] `pnpm release --dry-run`（如果 `rt release` 不支持 dry-run，则在沙箱仓库验证），流程中 `runTaskQueue()` 正常前置执行。
- [ ] `grep -r "varlet-cli \(checklist\|commit-lint\|release\|changelog\|dev:extension\|build:extension\|dev:vite\|build:vite\)" --include=package.json --include=*.ts --include=*.mjs .` 在**仓库根**下**零命中**（仅 `packages/varlet-cli/**` 自身的 `bin.ts`、README、docs 可命中；`preview` 不在清单内，见 § 0.5）。

**cli 侧 Deprecated 提示**
- [ ] 运行 `varlet-cli checklist xxx` / `varlet-cli commit-lint -p xxx` 等被废弃命令，会打印 deprecation 警告，但功能正常完成。
- [ ] `packages/varlet-cli/README.md` / `README.zh-CN.md` / `packages/varlet-ui/docs/cli.{en-US,zh-CN}.md` 的对应条目已加 Deprecated 注记。
- [ ] `packages/varlet-cli/template/generators/base/package.json` 已更新为 `rt`/`vp` 等（`test` 脚本继续保持 `varlet-cli test` 不变）。

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
7. `refactor(varlet-ui-playground): drop varlet-cli build:vite/dev:vite wrappers`
   - 新增 `packages/varlet-ui-playground/vite.config.ts`
   - `package.json`: `build`/`dev`/`preview` → `vp build/dev/preview`
   - `packages/varlet-ui/package.json` 的 `test*` / `preview` / `dev` / `build` 脚本**保持不变**（均为 cli 一级命令，见 § 0.5）
8. `refactor(varlet-vscode-extension): drop varlet-cli dev:extension/build:extension wrappers`
   - 新增 `packages/varlet-vscode-extension/vite.config.ts`（`pack` + `deps.neverBundle: ['vscode']`）
   - `package.json`: `build`/`dev` → `vp pack` / `vp pack --watch`
9. `refactor(cli): mark 8 commands as deprecated (no behavior change)`
    - `bin.ts` 给 8 个命令加 `[Deprecated]` description + deprecation 警告（`test` / `preview` 不在内）
    - `README.md` / `README.zh-CN.md` / `packages/varlet-ui/docs/cli.{en-US,zh-CN}.md` 加注记
    - `packages/varlet-cli/template/generators/base/package.json` 脚本改为 `rt`/`vp`（`test` 保持 `varlet-cli test`）

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

## 4. 阶段 3：cli 内部 vite + vitest + @varlet/release 全面升级到目标栈

> **目标**：把 `@varlet/cli` 的内部依赖**一次性**全部升级到本次迁移的目标栈：
> 1. `vite` → `vite-plus`（cli 7 处 `import 'vite'` 全部切到 `import 'vite-plus'`，并通过 `pnpm.overrides` 把仓库内所有 `vite` 解析也重定向到 vite-plus-core，统一类型链）。
> 2. `vitest` → `vite-plus/test`（test 命令子进程切 `vp test`，配置 schema 升级到 vitest 4，spec 文件批量 codemod；通过 overrides 把 `vitest` 重定向到 vite-plus-test）。
> 3. `@varlet/release` `^0.3.3` → `^2.2.1`（cli `varlet-release` → `vr`，纯 ESM，要求 Node `^20.19.0 || >=22.12.0`，与 vite-plus 对齐）。
> 4. `bin.ts` 给 8 个软废弃命令补上 `[Deprecated]` description + action 内 `deprecated()` 警告（阶段 1 漏做的事；`preview` 不在内，见 § 0.5）。
>
> **核心保证**：cli 对外的命令名、参数、退出码、产物**全部不变**；`@varlet/vite-plugins` 等发布包的 d.ts 中 Plugin 类型仍来自 `vite`（对外 contract 不变；overrides 在 publish 时被剥离）。本仓库内运行时与构建时类型链统一为 vite-plus。
>
> **前置**：阶段 1、2 已合入。
> **本阶段不让任何被废弃命令"复活"为推荐用法**：被废弃命令依旧标 Deprecated，本仓库依旧不调它们。

### 4.1 范围

#### A. cli 内部 vite import 切换

cli 7 处 `import { ... } from 'vite'` 全部切到 `from 'vite-plus'`（`preview.ts` 仅用 `live-server`，无 vite import，不在清单内）：

| 文件 | 当前 import |
|---|---|
| `packages/varlet-cli/src/node/commands/dev.ts` | `createServer, ViteDevServer` |
| `packages/varlet-cli/src/node/commands/build.ts` | `build as buildVite` |
| `packages/varlet-cli/src/node/commands/vite.ts` | `build, createServer, type ViteDevServer` |
| `packages/varlet-cli/src/node/commands/extension.ts` | `build` |
| `packages/varlet-cli/src/node/compiler/compileModule.ts` | `build` |
| `packages/varlet-cli/src/node/config/vite.config.ts` | `InlineConfig, Plugin` |
| `packages/varlet-cli/src/node/config/varlet.config.ts` | `Plugin, ProxyOptions` |

**类型链统一原理**：vite-plus 包本身就是 `export * from '@voidzero-dev/vite-plus-core'`。配合 § 4.1.D 的 `overrides.vite: catalog:`，仓库内 `from 'vite'` 与 `from 'vite-plus'` 拿到**同一份** vite-plus-core 类型与运行时。`@varlet/vite-plugins` peer `vite`、`@vitejs/plugin-vue` peer `vite` 也通过 override 落到 vite-plus-core，三方 Plugin 类型完全一致，消除 v2.1 反复回滚的 plugin 类型签名冲突。

#### B. cli 内部 vitest 切换

- `packages/varlet-cli/src/node/commands/test.ts`：把 spawn `vitest` 子进程改为 spawn `vp test`，flag 透传不变。
- `packages/varlet-cli/src/node/config/vitest.config.ts`：`defineConfig` 来源改为 `vite-plus`；适配 vitest 4 配置 schema（`poolOptions.vmThreads.memoryLimit` → `vmMemoryLimit`、显式 `coverage.include`）。
- 所有 `__tests__/*.spec.{js,ts}`：把 `import { describe, it, expect, vi } from 'vitest'` 批量替换为 `from 'vite-plus/test'`（约 80+ 文件）。
- `packages/varlet-ui/tsconfig.json` 的 `types: ["vitest/globals"]` → `["vite-plus/test/globals"]`。
- 本仓库 `packages/varlet-ui/package.json` 的 `test*` 脚本**保持 `varlet-cli test [-cov] [-w]` 不变**（`test` 命令保留，见 § 0.5）。

#### C. @varlet/release 升级

- `packages/varlet-cli/package.json` 的 `@varlet/release: ^0.3.3` bump 到 `^2.2.1`。
- 兼容性核对（已查 `@varlet/release@2.2.1` 的 `index.d.ts`）：
  - 仍导出：`release` / `changelog` / `commitLint` / `COMMIT_MESSAGE_RE` / `getCommitMessage` / `isVersionCommitMessage`（cli 的 `bin.ts` 与 `commands/checklist.ts` 的全部 import 项）。
  - `release({remote})`、`changelog({releaseCount, file})`、`commitLint({commitMessagePath, commitMessageRe, errorMessage, warningMessage})` 字段名兼容旧调用。
  - 新增能力（`publish` / `lockfileCheck` / `release.task` 钩子等）本阶段**不集成**到 cli，留给后续大版本评估。
- **运行时行为差异**：新版 release 内部用 `@clack/prompts` 提供更现代的交互，commit-lint 的正则与默认 message 可能微调。属于"真行为升级"，需要在沙箱仓库验证 `vr release --skip-npm-publish` 与 `vr commit-lint` 流程通顺。
- **环境门槛**：`@varlet/release@2.x` 要求 Node `^20.19.0 || >=22.12.0`、纯 ESM——这与本次迁移的根 `engines.node`（阶段 1 已 bump）一致；cli 自身的 `engines.node` **保留** `^14.18.0 || >=16.0.0` 不动（见 § 5.6，cli engines bump 留待后续大版本），但运行时若用户在 Node < 20 调用 cli 的 `release`/`changelog`/`commit-lint`，会因 `@varlet/release@2.x` 的 ESM/Node 要求直接报错——**这是预期的接口契约破裂**，符合软废弃语义（用户在 deprecation 警告下被引导直接用 `vr` 而非 cli 这层壳）。

#### D. cli 软废弃命令打 [Deprecated] 标

阶段 1 漏做的补齐项。`packages/varlet-cli/src/node/bin.ts` 中 8 个命令：`dev:vite` / `build:vite` / `dev:extension` / `build:extension` / `changelog` / `release` / `commit-lint` / `checklist`。`preview` 不在此清单（见 § 0.5）。

每个命令做两件事：
1. `.description('[Deprecated] <原描述>. <推荐替代>.')`（推荐文案见 § 2.6 的表，已与本阶段保持一致）。
2. `.action()` 函数体最开头打印一条 deprecation 警告（用 `shared/logger.ts`），`Process.exitCode` 不变；命令继续走原实现。

`test` 命令**不在内**（见 § 0.5）。

> 实现细节：建议提取一个 `logDeprecated(cmd: string, replacement: string)` helper 到 `shared/logger.ts`，避免 9 处重复 `console.warn` 字面量。

#### E. 根 catalog + overrides 调整

- `pnpm-workspace.yaml`：
  - `catalog.vite` 从 `7.1.5` 改为 `'npm:@voidzero-dev/vite-plus-core@0.1.18'`（npm alias，跟随 vite-plus 主版本锁定）。
  - `catalog.vitest` 已是 `'npm:@voidzero-dev/vite-plus-test@0.1.18'`（v2.1 已加），保持。
  - `catalog.vite-plus`、`@vitest/coverage-istanbul`、`typescript`、`@types/node`：保持 v2.1 的 bump 结果。
- 根 `package.json` 新增 `pnpm.overrides` 段（**重要：pnpm 9 不支持 `pnpm-workspace.yaml.overrides`，必须写在根 `package.json` 的 `pnpm.overrides`**——这是 pnpm 10 才下放到 workspace 文件的特性。v2.1 阶段把 `overrides.vitest` 写在 `pnpm-workspace.yaml` 是无效的，那时它能"看起来工作"是因为 catalog 本身的 npm alias 把 `vitest` 包名直接重定向了，并不是 overrides 起作用。本阶段同时启用两条 override，必须放对位置）：
  ```json
  {
    "pnpm": {
      "overrides": {
        "vite": "catalog:",
        "vitest": "catalog:"
      }
    }
  }
  ```

#### F. cli `package.json` 调整

- `dependencies.vite`：**移除**。理由：cli 源码已全部 `from 'vite-plus'`，不再直接 import `vite`；保留这条 dep 会让 pnpm 给 cli 自身建一份独立的"vite"解析实例（即使经 override 解析到 vite-plus-core，pnpm 仍会因 cli direct dep 与 vite-plus indirect 走两条不同的"虚拟 store 路径"），与 cli 通过 `vite-plus` 拿到的 vite-plus-core 实例分裂，触发 `Plugin<any> 不是 Plugin<any>` 的 TS 跨实例类型错误。`@varlet/vite-plugins` peer `vite` 由 workspace hoist 满足（不依赖 cli 本地）。
- `dependencies.vite-plus`：保留 `catalog:`（v2.1 已加）。
- `dependencies.vitest`：保留 `catalog:`（v2.1 已加，override 后实际解析到 vite-plus-test）。
- `dependencies.esbuild`：从 `0.23.1` 升到 `0.27.7`。理由：vite-plus-core@0.1.18 的 peer 要求 `esbuild@^0.27 || ^0.28`；保留 0.23.1 会导致 pnpm 给 vite-plus-core 建两份实例（一份 peer-satisfied 0.23.1，一份 0.27.7），同样触发跨实例类型分裂。这是阶段 3 实测验证的真实坑——v2.2 文档专门记录避免后人复犯。
- `dependencies['@varlet/release']`：从 `^0.3.3` 改为 `^2.2.1`。

### 4.2 关键风险

#### R1：`@vitejs/plugin-vue` 与 vite-plus 的类型/peer 冲突（**v2.1 已踩坑，本版本通过 override 化解**）

**v2.1 现象**：cli 改 `from 'vite-plus'` 后，`InlineConfig.plugins` 因 vite vs vite-plus 的 `Plugin` 类型签名差异报 TS 错。

**v2.2 解法**：通过 `pnpm-workspace.yaml` 的 `overrides.vite: 'catalog:'` 把仓库内 `vite` 全部解析到 `@voidzero-dev/vite-plus-core`。验证：
- `vite-plus/dist/index.d.ts` 实际是 `export * from '@voidzero-dev/vite-plus-core'`，`from 'vite-plus'` 与 `from 'vite'`（经 override）拿到**同一份** Plugin 类型与同一份运行时实例。
- `@varlet/vite-plugins`、`@vitejs/plugin-vue@6` 的 peer `vite` 也被 override 到 vite-plus-core，整条 plugin 类型链统一。
- 对外发布的 `@varlet/vite-plugins` package.json 的 peer 字段不受 override 影响（catalog/overrides 在 publish 时剥离），外部消费者装真 vite，行为完全一致。

**残留 peer warning**：`@vitejs/plugin-vue@6` peer 是 `vite@^5||^6||^7`，被解析到 `@voidzero-dev/vite-plus-core@0.1.x` 后版本号字面量不匹配，pnpm 会显示 `unmet peer`。lockfile 中已 satisfied 为同实例，运行时无 break。等 vite-plus 稳定版改 peer 元数据后消失。

#### R2：vitest 4 配置 schema 变更

vite-plus/test 0.1.x 内嵌 vitest 4，相对 vitest 3：
- `test.poolOptions.vmThreads.memoryLimit` 顶层化为 `test.vmMemoryLimit`。
- `test.coverage.all` 移除；`include` 默认行为收紧，必须显式声明 `coverage.include`。
- `defineConfig` 来源从 `vitest/config` → `vite-plus`。

**已适配**：`packages/varlet-cli/src/node/config/vitest.config.ts` 在阶段 3 一次性完成上述迁移。

#### R3：vite-plus alpha 期 coverage provider 加载链

`@vitest/coverage-istanbul@4.1.4` peer-depends `vitest@4.x`，但 vite-plus 内嵌的 vitest 不暴露顶层 `vitest` 包。

**官方推荐做法**：在 `pnpm-workspace.yaml` 的 `overrides` 中把 `vitest` 重定向到 `npm:@voidzero-dev/vite-plus-test@<version>`。这样 pnpm 会为 `vitest` 创建 `node_modules/vitest` 软链指向 vite-plus-test，coverage provider 通过 peer 链找到的就是同一个内嵌 vitest 实例，不会出现 dual vitest instance 问题。

**已适配**：`pnpm-workspace.yaml` catalog `vitest: 'npm:@voidzero-dev/vite-plus-test@0.1.18'` + `overrides.vitest: 'catalog:'`；cli `dependencies.vitest: 'catalog:'`。lockfile 显示 peer 已 satisfied 为同一个 vite-plus-test 实例。

#### R4：Snapshot 文件

vue-test-utils 的 snapshot 与 jsdom 渲染输出可能因为 vite-plus 内部 vitest 版本而出现 vue 编译器版本差异（`@vue/compiler-sfc` 不同小版本会导致 attr 排序差异）。**预期会有一次性 snapshot 更新提交**。

#### R5：alpha 期 coverage 报 0/0

vite-plus 0.1.x（alpha）下，外部 `@vitest/coverage-istanbul@4.1.4` 与内嵌 vitest 4 的 transformer hook 时序不完全对齐，coverage 会输出 `0/0`，但 921/921 test 全过。已在 `vitest.config.ts` 中加注释记录，待 vite-plus 稳定后回访；本次迁移**不**因此回退。

#### R6：`@varlet/release@2.x` 行为升级

- cli 名 `varlet-release` → `vr`：本仓库不直调 cli，无影响（本仓库 `pnpm release` 走 `scripts/release.mjs` 调 Node API；新版 API 兼容）。
- `release` 内部交互框架从 `prompts` → `@clack/prompts`：UI 变化，提示文案略有不同，无脚本破坏。
- commit-lint 的默认正则与错误消息：核对一下与 `vite.config.ts` 的 `rattail.hook['commit-msg']` / `rt commit-lint` 是否冲突。本仓库阶段 1 的 commit-msg hook 已切到 `rt commit-lint`，cli 的 `commit-lint` 命令仅供外部消费者调；行为差异不影响本仓库。
- 必须在沙箱仓库（或 `--skip-npm-publish` + dry-run 风格）跑一遍 `varlet-cli release` 验证流程通顺。

#### R7：`@varlet/release@2.x` 的 Node ESM/版本要求

`@varlet/release@2.x` 仅支持 ESM 且要求 Node `^20.19.0 || >=22.12.0`。cli 自身 `engines.node` 本阶段不 bump（保留 `^14.18.0 || >=16.0.0`），但 `release`/`changelog`/`commit-lint` 三个命令在 Node < 20 上**会直接报错**。这是预期的——这三个命令本身就在软废弃名单内（§ 0.5），cli deprecation 警告会引导用户用 `vr` 直调。

### 4.3 阶段 3 验收

**功能验收**

- [ ] `pnpm dev` 启动正常，HMR 工作（cli 内部 dev 命令现走 vite-plus）。
- [ ] `pnpm build` 文档站产物与阶段 2 末尾对比无运行时差异。
- [ ] `pnpm test` 走 `varlet-cli test`（内部 spawn `vp test`），通过率与 dev 基线一致（snapshot 更新除外，需独立 commit）。
- [ ] `pnpm --dir packages/varlet-cli build` 通过（typescript 5.6.3 能 parse `@vitejs/plugin-vue@6` d.ts；cli 7 处 vite import 切到 vite-plus 后类型检查通过）。
- [ ] `pnpm compile` 通过（`compileModule.ts` 走 vite-plus 的 `build`，UI 库 `es/`/`umd/` 产物与阶段 2 末尾对比无运行时差异）。
- [ ] cli 的 `release`/`changelog`/`commit-lint` 三个命令在 Node 20+ 沙箱仓库验证通过（流程能跑完，输出格式可接受）。
- [ ] 8 个软废弃命令（`dev:vite` / `build:vite` / `dev:extension` / `build:extension` / `changelog` / `release` / `commit-lint` / `checklist`）调用时打印 deprecation 警告，但功能正常完成。`preview` 不在此清单（见 § 0.5），调用时**无**警告。

**结构验收**

- [ ] cli 7 处 `import { ... } from 'vite'` **全部**改为 `from 'vite-plus'`（`grep -n "from 'vite'" packages/varlet-cli/src/` 零命中）。
- [ ] `pnpm-workspace.yaml` 的 `overrides` 段同时含 `vite: 'catalog:'`、`vitest: 'catalog:'`；`catalog.vite` 与 `catalog.vitest` 都是 `npm:@voidzero-dev/vite-plus-{core,test}@<version>` alias 形式。
- [ ] `pnpm-lock.yaml` 中 `vite` 与 `vitest` 顶层 specifier 都解析为 `@voidzero-dev/vite-plus-{core,test}@<version>`（确认两个 override 都生效、无双实例）。
- [ ] `@varlet/vite-plugins/package.json` 的 `peerDependencies.vite` **保持 `vite`**（不改成 `vite-plus`，对外 contract 不变）。
- [ ] cli `package.json` `dependencies['@varlet/release']` 为 `^2.2.1`。
- [ ] 81 个 spec 文件 `import ... from 'vitest'` 已批量改为 `from 'vite-plus/test'`，`tsconfig.json` types 已切到 `vite-plus/test/globals`。

### 4.4 阶段 3 commit 计划

1. `chore: redirect vite + vitest to vite-plus core/test via pnpm overrides`（catalog 中 `vite` 改为 vite-plus-core alias，新增 `overrides.vite: 'catalog:'`；catalog `vitest` 与 `overrides.vitest` 已在 v2.1 间随 catalog 整理一并落地，本 commit 只补 vite 这条；同时跑 `pnpm install` 重新生成 lockfile）
2. `refactor(cli): switch internal vite imports to vite-plus`（7 处 `from 'vite'` → `from 'vite-plus'`）
3. `refactor(cli): switch test command to spawn vp test`（`commands/test.ts` 把 `x('vitest', ...)` 改为 `x('vp', ['test', ...])`，flag 透传不变）
4. `refactor(cli): adapt vitest config to vitest 4 schema`（`config/vitest.config.ts` 的 `defineConfig` 来源切到 `vite-plus`、`poolOptions.vmThreads.memoryLimit` → `vmMemoryLimit`、显式 `coverage.include`）
5. `chore(cli): bump @varlet/release to ^2.2.1`（cli `dependencies.@varlet/release` 升级；`pnpm install` 验证 API 调用面兼容；沙箱跑 `varlet-cli release --skip-npm-publish` 与 `varlet-cli commit-lint` 检验运行时）
6. `refactor(cli): mark 8 soft-deprecated commands in bin.ts`（8 命令加 `[Deprecated]` description + action 内 `logDeprecated()`；新增 `shared/logger.ts` 的 helper；`preview` 不在内，见 § 0.5）
7. `chore(ui): migrate __tests__ imports from vitest to vite-plus/test`（80+ 文件，纯 codemod；同步 `tsconfig.json` types）
8. `test(ui): update snapshots after vite-plus migration`（如有）

---

## 5. 阶段 4：本仓库全面替代软废弃命令 + 生成器「vite-plus + rattail + `@varlet/cli`」架构（v2.3）

> **目标**
> 1. **本仓库**：对已软废弃的 `varlet-cli` 子命令做**全面替代与零残留核验**。除 `packages/varlet-cli` 自身实现（`bin.ts`、`commands/*`、为说明废弃而保留的 README/cli 文档段落）外，**任何** `package.json` scripts、`scripts/*.mjs`、CI workflow、贡献者文档、示例命令**不得**再调用：`checklist` / `commit-lint` / `release` / `changelog` / `dev:extension` / `build:extension` / `dev:vite` / `build:vite`。一律改为 **rattail**（`rt *`）与 **vite-plus**（`vp *`）或等价直调。`test` / `preview` 不在废弃名单（§ 0.5），本仓库可继续 `varlet-cli test` / `varlet-cli preview` 等与主流程一致写法。
> 2. **CLI 内置组件库启动模板**（`packages/varlet-cli/template/generators/**`，含 `base` 与各 `config/*` 变体）：用户通过 `varlet-cli create` / `gen` 生成的新 Varlet 组件库工程，**默认工程栈**为 **vite-plus + rattail + `@varlet/cli`**——即 **lint / format / hook / clean** 等与主仓一致走 **`vp` + `rt`**；**`@varlet/cli` 仍作为正式依赖**，承载 **未废弃** 的一等能力（如 `dev` / `build` / `preview` / `compile` / `compile:style-vars` / `build:icons` / `test` / `gen` / `create` 等 Varlet 专用工作流）；模板中的 `package.json` scripts、根 `vite.config.ts` 骨架、`engines`/`packageManager` 建议与主仓 catalog 策略对齐（含与 vite-plus 官方安装指南一致的 `pnpm.overrides` 说明，若模板需锁定 `vite`/`vitest` 到 vite-plus 分发包）。
> **前置**：阶段 1～3 已合入。
> **本阶段仍不做**：
> - **不正式删除**任何被软废弃的 `bin.ts` 注册（八条清单见 § 0.5）。正式删除与 cli major 仍属 **§ 5.6**。
> - **不 bump** `@varlet/cli` 的 major 版本。
> - **不 bump** `@varlet/cli` 的 `engines.node`（保持原 `^14.18.0 || >=16.0.0` 不变）。

### 5.1 本仓库：全面替代软废弃命令（执行清单）

- **检索**：对仓库根执行 `grep`/ripgrep，覆盖 § 2.9 与 § 1.2 所列八条废弃子命令；范围含 `.github/workflows/**`、`scripts/**`、各包 `package.json`、`*.md`（含 `CONTRIBUTING` / PR 模板）等。
- **补漏**：凡在非 `packages/varlet-cli/**` 路径命中、且非「Deprecated 说明」语境的调用，一律改为 `rt`/`vp` 或改写文档示例。
- **外部旧脚本**：软废弃命令仍可由 `bin.ts` 调用；本阶段只约束**本仓库与生成器产物**，不删命令实现。

### 5.2 生成器：默认「vite-plus + rattail + `@varlet/cli`」

- **`template/generators/base/package.json`**：显式包含 **`vite-plus`**、**`rattail`** 与 **`@varlet/cli`**；`scripts` 中**不出现**已软废弃子命令；`lint` / `format` / `clean` / `prepare` 等与主仓根 `package.json` 策略对齐（如 `vp lint`、`vp fmt`、`rt clean`、`rt hook`）。
- **`template/generators/config/**`**：各变体附带的 `package.json`、示例测试 import、README 片段与 `base` 同栈；测试栈与主仓阶段 3 对齐（如 `vite-plus/test`、`varlet-cli test`）；**禁止**在模板中推荐 `varlet-cli release` / `dev:vite` 等废弃路径。
- **模板根 `vite.config.ts`（若生成）**：提供与主仓同构的最小 `rattail` / `vite-plus` 配置（`lint`/`fmt`/`staged`/`clean`/`hook` 等），开箱体验与主仓贡献者一致。
- **生成后说明**：在模板 README 或向导输出中写明——**工程化 = rattail + vite-plus；Varlet 工作流 = `@varlet/cli`**。

### 5.3 阶段 4 验收清单

- [ ] 全仓检索（排除 `packages/varlet-cli` 内允许说明 Deprecated 的路径）对八条软废弃子命令 **零脚本级命中**；文档中仅允许「废弃说明 + 指向 `rt`/`vp`」类表述。
- [ ] `pnpm install` / `pnpm lint` / `pnpm format` / `pnpm test` / `pnpm build` / `pnpm compile` 在本分支 CI 与本地均通过。
- [ ] 在临时目录执行 `varlet-cli create`（或等价生成路径）得到默认模板：`package.json` 同时列出 **`vite-plus`**、**`rattail`**、**`@varlet/cli`**，且 scripts 不含废弃子命令；安装后可运行模板提供的 `lint`/`clean` 等脚本。
- [ ] 迁移文档、cli README、模板内叙事**一致**（无「又用 `varlet-cli release`、又要求只用 `rt release`」等矛盾）。

### 5.4 未废弃 `varlet-cli` 命令（对照表，本阶段不改行为）

| 命令 | 角色 | 备注 |
|---|---|---|
| `dev` / `build` / `preview` | 文档站与站点产物 | `preview` 非废弃；见 § 0.5 |
| `compile` / `compile:style-vars` | 库产物与样式变量 | 保留 |
| `build:icons` | 图标构建 | 保留 |
| `gen` / `create` | 模板与脚手架入口 | 阶段 4 改模板内容，不删命令 |
| `test` | 封装测试预设 | 对内 `vp test` |

> 不「顺便」大改 `gen`/`create` 交互；仅保证模板产出栈与主仓一致。

### 5.5 阶段 5：CLI 文档与 README（废弃命令标记 + 推荐架构 + `gen`）（v2.4）

> **前置**：阶段 4 已合入（本仓库脚本零残留软废弃命令、生成器默认栈已与主仓对齐）。
> **目标**：面向 **cli 用户与脚手架读者**，在**不删 `bin.ts` 命令**的前提下，把「哪些子命令即将废弃、推荐用什么替代、整体推荐栈是什么、如何一键对齐模板」写清楚，避免文档仍像官方推荐那样展示 `varlet-cli release` 等旧路径。

#### 5.5.1 覆盖文件（至少）

- `packages/varlet-cli/README.md`、`packages/varlet-cli/README.zh-CN.md`：命令总表分区——**推荐（一等）** / **即将废弃（软废弃，下一大版本移除）**；每条软废弃命令旁给 **Deprecated** 或 ⚠️ 标记 + **推荐替代**（`rt` / `vp` 等，与 `bin.ts` 的 `logDeprecated` 文案一致）。
- `packages/varlet-ui/docs/cli.en-US.md`、`packages/varlet-ui/docs/cli.zh-CN.md`：与 README **同源叙事**（中英各一份），避免官网与 npm 包 README 打架。
- 若另有 `packages/varlet-cli` 内面向消费者的 Markdown（如 `template/**` 内说明、`CHANGELOG` 指引），按同一标准补一段「推荐架构」**Callout**。

#### 5.5.2 必须写清的「推荐架构」表述

在 README / cli 文档**靠前位置**（独立小节或小节首段）写明，推荐新项目与迁移中的旧项目采用：

- **`@varlet/cli`**：Varlet 一等命令（`create` / `gen` / `dev` / `build` / `preview` / `compile` / `test` 等，以 § 0.5 未废弃清单为准）。
- **`rattail`（`rt`）**：release、changelog、commit-lint、hook、clean 等与 Varlet 无强绑定的工程能力。
- **`vite-plus`（`vp`）**：lint、format、dev/build（应用/扩展型）、`vp test` 等与 Oxlint/Oxfmt/测试链相关的统一入口。

并说明：**软废弃的 `varlet-cli` 子命令**仅为兼容旧脚本保留，**新脚本与文档示例不应再使用**。

#### 5.5.3 `varlet-cli gen` 提示（对齐最新模板）

在 README / cli 文档中增加**显式引导**：

- 已用旧模板创建过组件库的用户，可在**做好备份与版本控制**后，使用 **`varlet-cli gen`**（及文档中写明的子命令/交互路径，以当前 cli 实现为准）将工程**对齐到当前 `@varlet/cli` 内置的最新生成器输出**（与阶段 4 的 `template/generators/**` 一致）。
- 提醒：`gen` 可能覆盖用户已改动的生成文件，需先阅读 cli 帮助或仓库内说明，避免误覆盖。

#### 5.5.4 阶段 5 验收清单

- [ ] README（中/英）与 `cli.*.md` 中，八条软废弃子命令均有 **Deprecated / 即将移除** 级别标记，且**替代命令**与 `bin.ts` / § 2.6 表一致。
- [ ] 文档靠前位置有 **「`@varlet/cli` + rattail + vite-plus」** 推荐架构说明，且与阶段 4 模板实际依赖**不矛盾**。
- [ ] 文档中有 **`varlet-cli gen`** 用于对齐最新模板的说明，并含备份 / 覆盖风险提示。
- [ ] 随机抽 2～3 条软废弃命令，按文档手敲替代命令可跑通（或与 CI 文档 job 一致）。

### 5.6 后续大版本的工作（不在本次迁移计划内）

以下事项**明确推迟**到 `@varlet/cli` 的下一个大版本，由独立的 PR / 计划单独推进：

1. **正式删除 8 个被软废弃命令**：从 `bin.ts` 移除注册，删除不再被引用的源文件（`commands/{extension,vite,checklist}.ts` 等），从 `README*.md` / `cli.*.md` / `template/generators/base/package.json` 中清理对应段落。`test` / `preview` 命令**保留**，不在删除范围。
2. **评估把 `@varlet/vite-plugins` 的 peer 也切到 vite-plus**：本次迁移因对外 contract 不变要求，`@varlet/vite-plugins` 的 `peerDependencies.vite` 仍是 `vite`（外部消费者装真 vite）。后续大版本可考虑把 peer 改成 `vite-plus`，与 cli 内部用法对齐。
3. **评估删除 `@varlet/release` workspace 依赖**：若被废弃命令删除后 `@varlet/release` 不再被 cli 引用，决定是否从 cli 依赖中移除（workspace 保留与否由其它消费者决定）。
4. **bump `@varlet/cli` 的 `engines.node`**：从 `^14.18.0 || >=16.0.0` 提升到 `^20.19.0 || >=22.12.0`（与 vite-plus 对齐）。
5. **`@varlet/cli` major 发版**：CHANGELOG 用一个专章 `Breaking Changes` 列出移除的命令 + 对应替代命令，并在发版前确认社区 downstream（scaffold、模板生成器、文档引用）已迁移。

> 这些工作之所以推迟：
> - 阶段 1 已为 cli 用户打了 Deprecated 警告，**外部消费者需要观察期**（建议至少一个 minor 周期）才知道有变更。
> - 本次迁移在阶段 1～3 完成「工具链替换 + cli 内部栈升级」；**阶段 4** 补齐「本仓库零残留 + 生成器默认栈」；**阶段 5** 补齐「对外 README / cli 文档与上述事实一致」；**正式删除 `bin.ts` 注册**仍属于对外契约破坏，独立放在 **§ 5.6**。
> - 把 major 发版推迟也意味着本次迁移**不会触发 `@varlet/cli` 主版本号 bump**，对 cli 用户更友好。

---

## 6. 风险登记表（跨阶段）

| ID | 风险 | 触发阶段 | 缓解 |
|---|---|---|---|
| RK-01 | pnpm 10 升级导致 lockfile 不兼容 | 1 | 在 PR 中重生成 lockfile，CI 用 pnpm 10 |
| RK-02 | Oxlint 规则集与 ESLint 不完全等价 | 1 | 一次性 reformat commit 单独审阅 |
| RK-03 | Oxfmt 没有 package.json 排序 | 1 | 接受，文档说明 |
| RK-04 | `rt commit-lint` 与 `@varlet/release.commitLint` 行为不一致 | 1→4 | 阶段 1 已切 hook；阶段 4 全仓复核文档与模板，必要时对齐 `rt` 配置 |
| RK-05 | `rt release` 无 `--dry-run`，且会真实改 CHANGELOG | 1 | release 流程在沙箱仓库验证；`pnpm release` 加 confirm prompt |
| RK-06 | tsdown 产物与 tsup 不字节级一致 | 2 | 接受语义等价，文件名强制对齐 |
| RK-07 | tsdown d.ts 与 rollup-plugin-dts 形状不同 | 2 | 单包验证，阻塞合并 |
| RK-08 | `@vitejs/plugin-vue@6` 与 vite-plus 内部 vite 8 peer mismatch | 3 | 阶段 3 启动前先在分支上跑 dev server 验证 |
| RK-09 | vitest snapshot 因 vue 编译器版本变化大量更新 | 3 | 独立 snapshot 更新 commit |
| RK-10 | `@varlet/vite-plugins.peerDependencies.vite` 不能改 | 3 | 强约束：peer 字段在 `package.json` 中保持字面 `vite`；overrides 仅在仓库内 install 时生效，publish 时被剥离，对外消费者不受影响 |
| RK-17 | 阶段 3 启用 `overrides.vite` 后，`vite-plus-core` 与 `@vitejs/plugin-vue@6` peer 版本号字面量不匹配 | 3 | 接受 pnpm 的 unmet peer warning；lockfile 已 satisfied 为同实例，运行时无 break；等 vite-plus 稳定版改 peer 元数据后消失 |
| RK-18 | `@varlet/release` 0.3.3 → 2.2.1 跨主版本 API 变化导致 cli 命令 break | 3 | 已查 2.2.1 d.ts 确认 `release` / `changelog` / `commitLint` / `COMMIT_MESSAGE_RE` / `getCommitMessage` / `isVersionCommitMessage` 全部仍导出且字段兼容；沙箱仓库验证三命令实际流程 |
| RK-19 | `@varlet/release@2.x` 要求 Node ≥ 20.19，cli engines 未 bump，老用户调 cli release/changelog/commit-lint 直接报错 | 3 | 接受为软废弃语义的预期破裂——deprecation 警告引导用户改用 `vr` 直调；cli 内部其它命令（dev/build/compile/test）不受影响 |
| RK-11 | cli engines.node bump 是破坏性变更 | 后续大版本 | 推迟到 cli major 处理，不在本次迁移范围（见 § 5.6）|
| RK-12 | 阶段 1 删除 hook 中 `varlet-cli checklist` 调用后，贡献者漏看提醒 | 1 | 提醒条目迁到 `CONTRIBUTING.md` / PR 模板；命令本身保留供手动运行 |
| RK-13 | 软废弃期间 cli 内部仍依赖 `@varlet/release` / `vite` / `vitest`，若上游 break 会让废弃命令也 break | 1→3 | 阶段 3 把废弃命令内部实现也切到 vite-plus，提前暴露问题 |
| RK-14 | 阶段 1 把 playground 的 vite 配置从 cli 隐式继承改为 playground 本地 `vite.config.ts`，可能遗漏 alias / server 选项 | 1 | 切换后跑 dev server + build 全链路，和原 `varlet-cli build:vite` 产物做 byte-level 对比 |
| RK-15 | `vp pack` 的 `deps.neverBundle` / 依赖外置策略与扩展运行时、`vsce` 打包预期不一致 | 1 | 该包迁移作为独立 commit；若阻塞，回退到 `tsdown` 直调或改 `vp build` + `build.lib` |
| RK-16 | 后续大版本删除命令时，下游 downstream（含社区 scaffold）还在用 | 后续大版本 | 本次迁移阶段 1 已发布 Deprecated 提示，给社区留出观察期；正式删除由后续 cli major 单独决策（见 § 5.6）|
| RK-20 | 主仓已迁栈但 `template/generators/**` 仍残留旧脚本或缺 `vite-plus`/`rattail` 依赖，用户 create 出来与文档描述不一致 | 4 | 阶段 4 按 § 5.2 与 § 5.3 验收清单做生成物 diff；必要时增加 CI 对模板 `package.json` 的静态校验 |
| RK-21 | README / `cli.*.md` 仍推荐软废弃命令或漏写 `gen`，与模板、主仓脚本不一致 | 5 | 阶段 5 按 § 5.5.4 验收；中英 README 与 `cli.*.md` 交叉 diff |

---

## 7. 已废弃的 v1 方案（教训记录）

v1 方案的问题：
1. **双轨命令**（`lint:oxc` 与 `lint` 共存）：心智成本高，CI 双跑或漏跑。
2. **混合期太长**：v1 阶段 A 只做"装包 + 加新命令"，没有任何替换，本质是空操作。
3. **没有正面回应"完全替换"诉求**：用户的目标是"统一栈"，不是"两套并存"。

v2 修正：每个阶段都是**真实替换**，命令名稳定，stage 完成 = 一个工具栈被另一个完全取代。

v2.1 增量：引入"对 cli 子命令的软废弃 + 本仓库停用"策略（§ 0.5）。即：
- 本仓库**当下**就把对被废弃 cli 命令的所有调用切到 rattail / vite+ / 底层工具（阶段 1）。
- cli 内部实现**继续保留**，仅加 Deprecated 提示，确保 cli 用户（包括我们自己的回退通道）在依赖升级完成前不会 break。
- v2.1 阶段保守起见，仅把 `vitest` 切到 vite-plus-test；`vite` 因 plugin 类型链耦合**当时**不动。

v2.2 增量（本文件当前版本）：放开 v2.1 对 vite override 的保守限制，**阶段 3 一次性**把 cli 内部 vite + vitest + `@varlet/release` 全部升级到目标栈：
- `pnpm-workspace.yaml` 同时启用 `overrides.vite` 与 `overrides.vitest`，类型链统一为 vite-plus-core；通过查证 `vite-plus/dist/index.d.ts` 是 `export * from '@voidzero-dev/vite-plus-core'`，确认 plugin 类型签名冲突的根因可以通过 override 化解。
- cli 7 处 `from 'vite'` 全部切到 `from 'vite-plus'`，源码即表达"内部用 vite-plus"的意图。
- `@varlet/release` 跨主版本升级到 `^2.2.1`（API 兼容）。
- `bin.ts` 给 8 个软废弃命令补上 `[Deprecated]` description + action 内警告（v2.1 漏做的事；`preview` 不在内——它与 `dev`/`build` 三件套配对、基于 `live-server`、与 vite/vitest 栈无关，明确保留为一级命令，见 § 0.5）。
- **阶段 4（v2.3）**：本仓库对软废弃子命令**全面扫仓替代**；**`template/generators/**` 默认栈对齐为 vite-plus + rattail + `@varlet/cli`**。
- **阶段 5（v2.4）**：**README / cli 文档**与上述事实对齐（废弃标记、推荐架构、`gen` 引导），见 **§ 5.5**。
- 阶段 4～5 **不做正式删除**，**不 bump cli major**，**不 bump cli engines.node**。正式删除被废弃命令、bump `engines.node`、cli major 发版属于**后续大版本**（见 § 5.6）。

> **`test` 命令明确保留**：它内部封装的 vue + jsx + jsdom + 项目惯例 coverage exclude 配置同时被本仓库 UI 包和 `template/generators/base/package.json` 复用，废弃后 scaffold 用户需自行管理一份 vitest 配置 + 一堆 peer 依赖，与 cli "约定优于配置" 的设计相悖。阶段 3 仅把 `commands/test.ts` 内部 spawn 的子进程从 `vitest` 切到 `vp test`，对外接口完全不变。

> **对外 contract 保护机制**：catalog 与 overrides 在 `pnpm publish` / `pnpm pack` 时**自动剥离**，发布后的 `package.json` 看到的仍是普通版本号；`@varlet/vite-plugins.peerDependencies.vite` 仍是 `vite`，外部消费者装真 vite，运行行为完全不变。这是 v2.2 敢于全量启用 overrides 的关键前提。

这不是"双轨命令"：阶段 4 完成后，本仓库与 **create 生成的新工程**均不再在脚本层依赖已软废弃的 `varlet-cli` 子命令；**阶段 5** 完成后，**README / 官网 cli 文档**与模板、主仓脚本叙事一致。`bin.ts` 仍保留软废弃注册与 Deprecated 提示，供尚未迁移的外部旧脚本过渡。保留一等命令的目的仍是避免破坏 cli 对外契约。

---

## 8. Review 入口

本文档是阶段 1 启动前的最终方案。Review 重点：

1. **§ 0.5 "软废弃 + 本仓库停用"总原则**：是否同意本仓库当下就停用、cli 内部继续保留并加 Deprecated 提示，正式删除推迟到后续大版本？
2. **§ 1.2 命令替换映射表**：
   - `checklist` 在 hook 中直接移除（不替换）是否可接受？
   - `dev:vite` / `build:extension` 是否跟着 `dev:extension` / `build:vite` 一起标 Deprecated（即成对处理）？
3. **§ 2.2 环境门槛**：是否同意"阶段 1 只升根 engines.node，cli engines 完全不动（推迟到后续大版本）"？
4. **§ 2.4.1 commit-msg hook**：是否同意本阶段就把 `commit-lint` 切到 `rt commit-lint`，并把 `checklist` 从 hook 中删除（提醒条目迁到 CONTRIBUTING.md）？
5. **§ 2.4.2 `pnpm release`**：是否同意 `scripts/release.mjs` 内部从 `@varlet/cli.release` 切到 `rt release`，但保留外层包装（`runTaskQueue` 仍然先跑）？若 `rt release` 支持 `beforeRelease` hook，是否直接简化成 `"release": "rt release"`？
6. **§ 2.5.3 vscode-extension**：本仓库已采用 `vp pack`（与阶段 2 库包同一入口）；若需单文件自包含 bundle，可再评估 `vp build` + `build.lib` vs. `tsdown`。
7. **§ 2.5.4 playground vite 配置**：从 cli 隐式继承迁到 playground 本地 `vite.config.ts` 是否可行（需 `ls packages/varlet-ui-playground/` 核对 index.html / alias 等）？
8. **§ 2.6 cli Deprecated 提示文案**：推荐提示表的文案是否合适？建议保留 "will be removed in the next major" 这种**不绑定具体版本号**的措辞，因为正式移除时机由后续大版本决定。
9. **§ 2.8 oxfmt 缺失 package.json 排序**：是否可接受？
10. **§ 4.1 阶段 3 全量切目标栈（v2.2 修订）**：是否同意 cli 内部 vite import 全部切到 `vite-plus`、`pnpm.overrides` 同时启用 `vite` 与 `vitest` 双 alias、`@varlet/release` bump 到 `^2.2.1`？v2.1 因担心 plugin 类型链冲突而保守的策略，本版通过 `vite-plus = export * from vite-plus-core` 这一事实 + override 统一类型链化解，验收清单见 § 4.3。
11. **§ 0.5 / § 4.1 `test` 命令保留**：是否同意 `varlet-cli test` 不进入软废弃名单？该命令封装了 vue + jsx + jsdom + 项目 coverage exclude 等惯例配置，并被 scaffold 模板复用，废弃成本高于收益。
12. **§ 5 阶段 4（v2.3）范围**：是否同意阶段 4 承担「本仓库全面替代软废弃命令 + 生成器默认 vite-plus + rattail + `@varlet/cli`」；且仍**不删除** `bin.ts` 中被废弃命令、**不 bump** cli major、**不动** cli `engines.node`？正式删除等推迟到后续大版本（§ 5.6）。
13. **§ 5.5 阶段 5（v2.4）范围**：是否同意在阶段 4 之后单开文档 PR，更新 `packages/varlet-cli/README*`、`packages/varlet-ui/docs/cli.*.md`——为软废弃子命令加醒目标记、统一推荐 **`@varlet/cli` + rattail + vite-plus** 架构，并提示用户通过 **`varlet-cli gen`** 对齐最新模板（含备份与覆盖风险说明）？

Review 通过后再开 commit 1（pnpm/node bump）。
