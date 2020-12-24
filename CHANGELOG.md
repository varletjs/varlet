# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.6.0](https://user/haoziqaq/varlet/compare/v0.5.13...v0.6.0) (2020-12-24)


### Bug Fixes

* **cli:** 修改.vue文件编译逻辑 ([5e2e64a](https://user/haoziqaq/varlet/commits/5e2e64a48acdcf81ba446acc668ebbb32d519ce9))
* **cli:** 重构部分代码 ([e4840dc](https://user/haoziqaq/varlet/commits/e4840dc59c5087a007d819a0f8db9db795f234a9))
* **commands:** modify indexTemplate of create ([48a0687](https://user/haoziqaq/varlet/commits/48a068701253ceeaca11937a24251c5f5712d435))
* **loading:** remove text ([86ec547](https://user/haoziqaq/varlet/commits/86ec5475af3d98e523cb1ddf81b42f830e9b4d82))
* **snackbar:** add type definition ([a3283ff](https://user/haoziqaq/varlet/commits/a3283ff7f4e2f32ff55ced1a8d2b54d885df4be8))
* **snackbar:** modify default duration ([520cf47](https://user/haoziqaq/varlet/commits/520cf47bfab6effec9e4bf64baf759b82f5b0881))
* **snackbar:** modify position prop ([2862958](https://user/haoziqaq/varlet/commits/2862958021311cdd16eb3f540570a9351438b2d6))
* **ui:** button原型制作中 已完成基本type size color基本交互 ([5d528ea](https://user/haoziqaq/varlet/commits/5d528ead4d3f13df3d70ee95b837cd819ef4d1e4))
* **ui:** button原型完成 ([cdf32e5](https://user/haoziqaq/varlet/commits/cdf32e5f8a1e431fa052684f828d0dbceab46f96))
* **ui:** menu组件原型完成 重构button popup dialog skeleton的props ([09a57b1](https://user/haoziqaq/varlet/commits/09a57b1d692eeab909ab0c1e2672d1095f2df12e))
* **ui:** popup dialog原型完成 ([4c3da72](https://user/haoziqaq/varlet/commits/4c3da72d776d682c4b1be1b96e445076f53012c1))
* **ui:** snackbar index.ts重构 ([a76a0be](https://user/haoziqaq/varlet/commits/a76a0be18dab5fd317d2011704764f4fe1ad4e98))
* **ui:** snackbar 解决动画问题 ([da87973](https://user/haoziqaq/varlet/commits/da87973acb1b44b194459d9cda76bb31da5227ba))
* **ui:** 修复类型问题 ([10ebe7a](https://user/haoziqaq/varlet/commits/10ebe7a90e9dfe71b5d87712f5bc55374213cff0))
* **ui:** 修改了ripple的定位 ([67fd0cc](https://user/haoziqaq/varlet/commits/67fd0cc137a0e64b9c7058477ad56d9c5ed2b6f9))
* **ui:** 增加button组件的loading参数校验 ([4d839c1](https://user/haoziqaq/varlet/commits/4d839c1297bf3069d5e8f299ff64d9eed822c853))
* **ui:** 增加ui全局上下文 适配teleport keep-alive 锁操作 ([d237750](https://user/haoziqaq/varlet/commits/d237750e8efa0ef33841239c0c2e19d745726abe))
* **ui:** 定义组件上下文对象 ([4e926c7](https://user/haoziqaq/varlet/commits/4e926c70fcbd49b848205709bcde00a93420bb98))
* **ui:** 按钮组件开发 ([4fddcbd](https://user/haoziqaq/varlet/commits/4fddcbda84737fb499e0adcc798b5a73f5cf55ea))
* **ui/image:** image原型完成 ([97fcc83](https://user/haoziqaq/varlet/commits/97fcc8333ef1648dd82fe2b34ab284cc753600b8))
* **ui/lazy:** lazy原型完成 ([e332fa8](https://user/haoziqaq/varlet/commits/e332fa86eed8f6d1598473ba19b023a19c7ed54b))
* **ui/lazy:** 修复CacheInstance类型错误 ([1573b56](https://user/haoziqaq/varlet/commits/1573b5614099fcc2da18c440dd1d27a332076adb))
* **ui/lazy:** 修复了lazy在兼容模式下 图片从视口外操作到视口内没有进行check的bug ([8af34d0](https://user/haoziqaq/varlet/commits/8af34d0f0aa8b2f36002e43657de130095871340))
* **ui/lazy:** 修复了部分情况下图片update重复check的bug ([f8fcf78](https://user/haoziqaq/varlet/commits/f8fcf7892a9b6b37c5400d49a931fbad7cbb631b))
* **ui/lazy:** 增加1px像素占位 增加图片URL缓存 ([865a10c](https://user/haoziqaq/varlet/commits/865a10c7e51b0308c99d7387ab5740c7843e31b1))
* **ui/lazy:** 增加局部滚动的案例cover ([c24820a](https://user/haoziqaq/varlet/commits/c24820a97d59fe2a97a9902afbc8f09615e99897))
* **ui/lazy:** 增加绑定事件配置 ([64a95cb](https://user/haoziqaq/varlet/commits/64a95cb0777cbf695bfd6d0269a344af4e6ae813))
* **ui/styles:** 修改common.less中的状态名 ([8e30223](https://user/haoziqaq/varlet/commits/8e302236c8d6f90e042eaa5deffcdfb12a4958dd))
* add class for transition-group ([75e3df6](https://user/haoziqaq/varlet/commits/75e3df66067c26fb4eaa9c17d549a2e59501e536))
* add isDeclarative for snackbar ([a156647](https://user/haoziqaq/varlet/commits/a156647f2917e6f82b069557f851844e6647a0a5))
* add margin for loading text and detection componentName ([b42046e](https://user/haoziqaq/varlet/commits/b42046e7538d8b05b61b47085446f73c9c46a1b3))
* add typescript type(App) ([4d49a7b](https://user/haoziqaq/varlet/commits/4d49a7bde63167b93c144badc353d0004af91109))
* modify loading docs and example ([66be153](https://user/haoziqaq/varlet/commits/66be153e324c1378e80ee4ab94c0c7609ddd936e))
* modify size and animation of loading ([63eb392](https://user/haoziqaq/varlet/commits/63eb392b01a46b469b1f9944f364970a64e686bb))
* remove console ([675f910](https://user/haoziqaq/varlet/commits/675f910b8639d9f985c53fd43f8804e30b101029))


### Features

* add button for menu ([e9e1860](https://user/haoziqaq/varlet/commits/e9e1860ccfb1f50624467c32d0ee2fba291a44f9))
* add chips ([ed1cc95](https://user/haoziqaq/varlet/commits/ed1cc95d8a41d064804ec04be43714bbb69ef9eb))
* add progress ([170d515](https://user/haoziqaq/varlet/commits/170d5150aa3dd43c2d2c13ad5c43a154f91749a2))
* add propsEmits for loading ([41bfdab](https://user/haoziqaq/varlet/commits/41bfdab7d298901cdbbcc77ae14326b765af5a8f))
* complete snackbar ([f7aa36b](https://user/haoziqaq/varlet/commits/f7aa36b27d232242ddc796a5550086ef2a75e94d))
* loading ([d93e481](https://user/haoziqaq/varlet/commits/d93e4812b18f8d4cb310797947416f8feeb97271))
* modify loading size ([321526c](https://user/haoziqaq/varlet/commits/321526c3290e431eb5dbd82891712acddde15839))
* snackbar ([ff3483d](https://user/haoziqaq/varlet/commits/ff3483d0a734ca822eb03b44710b20a7093f783a))


### Performance Improvements

* add validator for progress mode ([8eb9721](https://user/haoziqaq/varlet/commits/8eb9721cc4b4c7141a48efa285c2b383e8cab2e0))
* refactor snackbar ([fd58373](https://user/haoziqaq/varlet/commits/fd583733d6c85a60d2fc05f7613c59689fdabe1d))





## [0.5.13](https://user/haoziqaq/varlet/compare/v0.5.10...v0.5.13) (2020-11-27)


### Bug Fixes

* **ui/package.json:** fix ([6bb1761](https://user/haoziqaq/varlet/commits/6bb1761adb7d25cd27d6ff38ffe3f483f219a4be))
* **ui/skeleton:** 修复row的迭代bug ([d1640ac](https://user/haoziqaq/varlet/commits/d1640ac6da277ef5023b0cfb136c5a0787d370cd))





## [0.5.10](https://user/haoziqaq/varlet/compare/v0.5.9...v0.5.10) (2020-11-27)


### Bug Fixes

* **cli ui:** 统一给每个包增加另一个style入口 方便babel-import-plugin解析 ([cd1ef49](https://user/haoziqaq/varlet/commits/cd1ef4957d9659c840d710bc423f44234d8340d2))





## [0.5.9](https://user/haoziqaq/varlet/compare/v0.5.8...v0.5.9) (2020-11-27)


### Bug Fixes

* **all package.json:** 修改了peer依赖 改成了依赖大于目标版本 ([294eced](https://user/haoziqaq/varlet/commits/294ecedce9e2f4bb85eea6556eac34e450818d05))





## [0.5.8](https://user/haoziqaq/varlet/compare/v0.5.7...v0.5.8) (2020-11-27)


### Bug Fixes

* **cli/site ui:** skeleton组件原型完成 文档完成 ([374100f](https://user/haoziqaq/varlet/commits/374100f2bcfaafd1ca0369b560e05ecde292de7d))





## [0.5.7](https://user/haoziqaq/varlet/compare/v0.5.6...v0.5.7) (2020-11-26)


### Bug Fixes

* **ui:** ripple指令原型完成 ([43f8665](https://user/haoziqaq/varlet/commits/43f8665e3254fe66b69ca542c9c5daa49a30cce4))





## [0.5.6](https://user/haoziqaq/varlet/compare/v0.5.5...v0.5.6) (2020-11-23)


### Bug Fixes

* **cli:** 启动生成varlet.config.js ([d8dfa5e](https://user/haoziqaq/varlet/commits/d8dfa5ef9ec48ab1c234db0a2b4e20baf3c8f934))





## [0.5.5](https://user/haoziqaq/varlet/compare/v0.5.4...v0.5.5) (2020-11-23)


### Bug Fixes

* **cli:** 修改ts-loader配置 allowTsInNodeModules ([cf65039](https://user/haoziqaq/varlet/commits/cf65039ca0da0021f52cdabecd61029e2abaf485))





## [0.5.4](https://user/haoziqaq/varlet/compare/v0.5.3...v0.5.4) (2020-11-23)


### Bug Fixes

* **cli:** tsconfig.json加入生产依赖 ([7c56dd2](https://user/haoziqaq/varlet/commits/7c56dd22f54001c503dabadd9e77392ce043ad10))





## [0.5.3](https://user/haoziqaq/varlet/compare/v0.5.2...v0.5.3) (2020-11-23)


### Bug Fixes

* **cli:** 把shim作为生产依赖 ([4e099d9](https://user/haoziqaq/varlet/commits/4e099d9c464795ddcc9047871020dfba7cfe6c85))





## [0.5.2](https://user/haoziqaq/varlet/compare/v0.5.1...v0.5.2) (2020-11-23)


### Bug Fixes

* **all changelog:** 修正版本号 ([af8f2b6](https://user/haoziqaq/varlet/commits/af8f2b65d01a436601a5ebfe076be1f75df95c5c))
* **添加tsconfig.json到cli的依赖列表:** tsconfig.json ([3e55747](https://user/haoziqaq/varlet/commits/3e55747cf3e9877ed30646d13dde35f7c6f0e0a5))





## [0.5.1](https://user/haoziqaq/varlet/compare/v0.6.0...v0.5.1) (2020-11-23)


### Bug Fixes

* **all packages/package.json:** 发包失败重新发包 ([849f9ae](https://user/haoziqaq/varlet/commits/849f9ae95f6ada7cb6e101d976826944bf1e15b3))





# [0.5.1](https://user/haoziqaq/varlet/compare/v0.5.0...v0.6.0) (2020-11-23)


### Bug Fixes

* add active style ([e23ecb2](https://user/haoziqaq/varlet/commits/e23ecb27e564ef761c3f9bd1588956dc0a0e4385))
* modify router path ([5451c55](https://user/haoziqaq/varlet/commits/5451c552072ad8f1693cf46e51499be0623db2f6))
* sentenced to empty ([2f21c5b](https://user/haoziqaq/varlet/commits/2f21c5b52753ac4b520c9cf8530b6b35dd2658f8))
* **cli:** 增加功能create命令生成单测模板 ([0a2cf55](https://user/haoziqaq/varlet/commits/0a2cf55042d18ed0889a2a44ac390eb8dffbf245))


### Features

* add style of site ([b936468](https://user/haoziqaq/varlet/commits/b9364680cc6bd4952a2e01a62e4c897af8ff6b97))
* **markdown-loader:** addcard-warpper ([38ec300](https://user/haoziqaq/varlet/commits/38ec3005e4fa523863bc853f67cc5398073f716d))
* add config to globalProperties ([00e2ebf](https://user/haoziqaq/varlet/commits/00e2ebf5ee38e1cb2eb0638ad03d724c837eeb44))
* add example of checkbox ([6effb17](https://user/haoziqaq/varlet/commits/6effb177ade2f8e69a2756f9481829688c0f3961))
* add iframe and add style ([5086937](https://user/haoziqaq/varlet/commits/508693748e3f9ee574d4db33b9fd83bd57bd66b1))
* add markdon-loader ([7dc787b](https://user/haoziqaq/varlet/commits/7dc787bfc7719aeef3bdab263a6fffe267e2c9e7))
* add test file and router ([fb6615c](https://user/haoziqaq/varlet/commits/fb6615c0d92fc086cd91824f4aa49750c0433526))
* connect nav and router ([0bc640f](https://user/haoziqaq/varlet/commits/0bc640f2cf2081abc378b5db8644d8edeb374763))


### Performance Improvements

* add .DS_Store ([a78828e](https://user/haoziqaq/varlet/commits/a78828e530f914d211213b115be3d5726225fea5))





# [0.5.0](https://user/haoziqaq/varlet/compare/v0.4.0...v0.5.0) (2020-11-13)


### Bug Fixes

* **.gitignore:** 移除cli routes文件的依赖托管 ([1576643](https://user/haoziqaq/varlet/commits/15766436d3e9e3f16f527635b5fbc97349d39d13))
* **cli:** 移除typescript依赖 ([67cd726](https://user/haoziqaq/varlet/commits/67cd726ea0fbc72279e8c9a83b13d0bbc4803c6b))


### Features

* **cli:** 增加jest单测命令 一键执行所有单测文件 或是执行某一个组件的单测文件 ([b23bfee](https://user/haoziqaq/varlet/commits/b23bfeebf6be90f4e417e3210c3fc82976f59b73))
* add auto create pc site route ([65cd41a](https://user/haoziqaq/varlet/commits/65cd41a085a22eee4c4cf0b39b3ba727939b4ed3))


### Performance Improvements

* ignore varlet-cli/lib ([41cf49b](https://user/haoziqaq/varlet/commits/41cf49bb85aa7e620a7ce47d38d3a172d175ee24))





# [0.4.0](https://user/haoziqaq/varlet/compare/v0.3.2...v0.4.0) (2020-11-10)


### Features

* **cli:** 支持打包成umd ([af0645f](https://user/haoziqaq/varlet/commits/af0645f8bf648717bf8d616024ac612af4764a51))





## [0.3.2](https://user/haoziqaq/varlet/compare/v0.3.1...v0.3.2) (2020-11-09)

**Note:** Version bump only for package root





## [0.3.1](https://user/haoziqaq/varlet/compare/v0.3.0...v0.3.1) (2020-11-09)


### Bug Fixes

* **cli:** 修改.vue文件编译规则 ([71ab372](https://user/haoziqaq/varlet/commits/71ab37266132fa0771802aa57dbef1e6e3670e5a))





# [0.3.0](https://user/haoziqaq/varlet/compare/v0.2.1...v0.3.0) (2020-11-06)


### Features

* **cli:** 实现compile命令,可编译出es,commonjs规范两套发布代码|实现--watch文件监听,按需编译有改动的文件 ([a00695a](https://user/haoziqaq/varlet/commits/a00695a2f0dc66e7ee9674c6ee18e12583cf614b))





## [0.2.1](https://user/haoziqaq/varlet/compare/v0.2.0...v0.2.1) (2020-11-03)


### Bug Fixes

* **cli:** 修复了node_modules的依赖包没被webpack扫进去的bug ([128a0fa](https://user/haoziqaq/varlet/commits/128a0fa44609ef20d5a16d99a25307ccb34be927))





# [0.2.0](https://user/haoziqaq/varlet/compare/v0.1.7...v0.2.0) (2020-11-03)


### Bug Fixes

* **gitignore:** 修改gitignore ([0b51c3d](https://user/haoziqaq/varlet/commits/0b51c3d09e29bf4c54faaeac3373073982429ab7))
* **packages/varlet-cli/lib:** 移除了packages/varlet-cli/lib ([3d71b03](https://user/haoziqaq/varlet/commits/3d71b03746838a31fb8922eedda8770699fb6743))


### Features

* **packages/**:** 架构调整,实现varlet-cli dev build命令 ([1ca2cf6](https://user/haoziqaq/varlet/commits/1ca2cf636af766615d6e733d5c96ac2d2349b34f))





## [0.1.7](https://user/haoziqaq/varlet/compare/v0.1.6...v0.1.7) (2020-10-30)


### Bug Fixes

* **所有子包的package.json:** 移除了publicConfig ([1ce49db](https://user/haoziqaq/varlet/commits/1ce49db96acb99578517765b4751276d86c1c170))





## [0.1.6](https://user/haoziqaq/varlet/compare/v0.1.5...v0.1.6) (2020-10-30)


### Bug Fixes

* **lerna.json:** 修改lerna.json的publishConfig字段 ([a6ea83f](https://user/haoziqaq/varlet/commits/a6ea83fa70738d7d5d41db377f0f19671c23a755))





## [0.1.5](https://user/haoziqaq/varlet/compare/v0.1.4...v0.1.5) (2020-10-30)


### Bug Fixes

* **lerna.json:** 修改了lerna.json的public选项 ([831e521](https://user/haoziqaq/varlet/commits/831e5219eaa9628decafa53d8e97274c5900c408))





## [0.1.4](https://user/haoziqaq/varlet/compare/v0.1.3...v0.1.4) (2020-10-30)


### Bug Fixes

* **root package.json:** 修改主包package.json ([1ecfad0](https://user/haoziqaq/varlet/commits/1ecfad052da65abb7329dc5c4645717722366496))





## [0.1.3](https://user/haoziqaq/varlet/compare/v0.1.2...v0.1.3) (2020-10-30)


### Bug Fixes

* **所有子包的package.json:** 修改publicConfig字段 ([d711a57](https://user/haoziqaq/varlet/commits/d711a57f6307d8dd9b2f5b2b9a9a869a10d02f7d))





## [0.1.2](https://user/haoziqaq/varlet/compare/v0.1.1...v0.1.2) (2020-10-30)

**Note:** Version bump only for package root





## [0.1.1](https://user/haoziqaq/varlet/compare/v0.1.0...v0.1.1) (2020-10-30)

**Note:** Version bump only for package root





# 0.1.0 (2020-10-30)


### Features

* **初始化仓库:** 初始化规范化配置 monorepo配置 ([5913d0b](https://user/haoziqaq/varlet/commits/5913d0b1edb1d72e6c6439af1525a692291861ba))
