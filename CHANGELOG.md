## [3.15.2](https://github.com/varletjs/varlet/compare/v3.15.1...v3.15.2) (2026-05-03)


### Bug Fixes

* **date-picker:** Fixed the issue of inconsistent years in preview mode and close [#1959](https://github.com/varletjs/varlet/issues/1959) ([54a23eb](https://github.com/varletjs/varlet/commit/54a23eb14c6ca0695c0264952de46822c74d7025))
* **release:** update import path for release function ([2e25bb0](https://github.com/varletjs/varlet/commit/2e25bb03b792b4be0e92cd0b54e1fd381794492f))
* **tsconfig:** add vite-plus/client type to tsconfig template ([9a3f541](https://github.com/varletjs/varlet/commit/9a3f541ef95ed8e30a02ce599918a6adf40b801f))


### Features

* **date-picker:** add fallbackViewDate prop to control panel view date and close [#1951](https://github.com/varletjs/varlet/issues/1951) ([686edcf](https://github.com/varletjs/varlet/commit/686edcf58f09162ecda8d062308249caf29bb01d))

# [3.15.0](https://github.com/varletjs/varlet/compare/v3.14.2...v3.15.0) (2026-04-19)


### Refactoring

* rattail + vite+ ([#1956](https://github.com/varletjs/varlet/issues/1956)) ([8e6ee00](https://github.com/varletjs/varlet/commit/8e6ee008bece4a76758fa888417a66bcc21375e9))

## [3.14.2](https://github.com/varletjs/varlet/compare/v3.14.1...v3.14.2) (2026-03-31)


### Bug Fixes

* **button:** disable button when loading or pending and close [#1952](https://github.com/varletjs/varlet/issues/1952) ([cb4bf8c](https://github.com/varletjs/varlet/commit/cb4bf8cd5df4c2cc88e245f6ae83469f1f8cf350))
* **field-decorator:** hide clear icon when readonly ([#1948](https://github.com/varletjs/varlet/issues/1948)) ([e79303b](https://github.com/varletjs/varlet/commit/e79303b473165f10af62c8435fc88ce3bf3fb4d8)), closes [#1946](https://github.com/varletjs/varlet/issues/1946)
* **snackbar:** update content styles ([#1949](https://github.com/varletjs/varlet/issues/1949)) ([9c0c7e6](https://github.com/varletjs/varlet/commit/9c0c7e60fb2bc4da776bf959502b690c71981868))

## [3.14.1](https://github.com/varletjs/varlet/compare/v3.14.0...v3.14.1) (2026-03-24)


### Bug Fixes

* **popup:** fix missing elevation styles ([00aa27d](https://github.com/varletjs/varlet/commit/00aa27da98effdae42ddc29a2e00c179590b9f05))

# [3.14.0](https://github.com/varletjs/varlet/compare/v3.13.1...v3.14.0) (2026-03-12)


### Bug Fixes

* **field-decorator:** update small margin bottom to 0 for consistency ([bfe8264](https://github.com/varletjs/varlet/commit/bfe8264fff9a812aa994e14ff81d031afcc1c852))
* **select:** add showMenu to SelectProvider and update visibility logic ([497e909](https://github.com/varletjs/varlet/commit/497e909de14902055e0a5aa6a602261797a7d655))
* **select:** adjust padding and layout for better alignment ([4d20db0](https://github.com/varletjs/varlet/commit/4d20db026534196fc275eaa77ee34146bf3e35da))
* **select:** ensure empty state updates correctly on menu visibility change ([a4fec50](https://github.com/varletjs/varlet/commit/a4fec501b1073ec99ebb2e7877a24cec76c6b1ef))
* **select:** fix filter api ([e68b397](https://github.com/varletjs/varlet/commit/e68b397fec1a5d0aa5284573b995f10b435594c9))
* **select:** remove filterable prop from multiple select examples ([20106da](https://github.com/varletjs/varlet/commit/20106da0197811dcdee91dfc11e3f8464319f3d0))
* **select:** rename showMenu to showContainer for consistency in useOptionsMutationObserver ([1525c1a](https://github.com/varletjs/varlet/commit/1525c1ade7670adf354f7922fddde1756f6f4c11))
* **select:** set default value for filterable prop in documentation ([0c97e0c](https://github.com/varletjs/varlet/commit/0c97e0cce692a8a22508ffa1c30c8b0bbd1ee5c0))
* **select:** update filter logic and improve focus handling in Select component ([ba0ea3c](https://github.com/varletjs/varlet/commit/ba0ea3c3211ad40b52f0f6a6c95b3525a740506f))
* **types:** use declare const in d.ts ([#1943](https://github.com/varletjs/varlet/issues/1943)) ([7b5ebae](https://github.com/varletjs/varlet/commit/7b5ebae182ba4ecb327e54054114845ce46efccd))


### Features

* **select:** add 'empty' slot to Select component for customizable empty state rendering ([a874893](https://github.com/varletjs/varlet/commit/a874893d4b62eb82756b61398c1fd78d1f0cd64e))
* **select:** add customizable empty state styles for dark and light themes ([ff1fcc4](https://github.com/varletjs/varlet/commit/ff1fcc466b939fbd506dfcac3fb6d7e078a3e765))
* **select:** add focus and blur event handlers for improved user interaction ([785a3cd](https://github.com/varletjs/varlet/commit/785a3cd7cc23b9e5d6e8c170223dabc04589c7c9))
* **select:** add style variables for customizable empty state in Select component ([64356ed](https://github.com/varletjs/varlet/commit/64356ed34143b54932fd5d682f46726d70851a38))
* **select:** add support for empty state in Select component with customizable text and styles ([f78bdd9](https://github.com/varletjs/varlet/commit/f78bdd9220734c65a8901d074a3718b755f75a67))
* **select:** implement SelectFilter component and update filtering logic ([6bb1141](https://github.com/varletjs/varlet/commit/6bb1141af3b8c4edfcbb7c1cfcfb90168bdbd7e4))
* **select:** implement useSelectEmptyObserver for managing empty state visibility ([70347e6](https://github.com/varletjs/varlet/commit/70347e62f6539151d3527f7e9cb731dbbcdd9df1))
* **select:** support filterable ([#1945](https://github.com/varletjs/varlet/issues/1945)) ([846a2a6](https://github.com/varletjs/varlet/commit/846a2a6a0d77133ea4851e46db9e4981308c4b2f))


### Refactoring

* **select:** replace useSelectEmptyObserver with useOptionsMutationObserver for improved empty state handling ([c276f51](https://github.com/varletjs/varlet/commit/c276f512d7a475cc8a70b57b0d883e656d18f364))

## [3.13.1](https://github.com/varletjs/varlet/compare/v3.13.0...v3.13.1) (2026-01-22)


### Features

* **bottom-navigation:** support animated ([#1939](https://github.com/varletjs/varlet/issues/1939)) ([2f2bdf1](https://github.com/varletjs/varlet/commit/2f2bdf161915e88a2c18afe1668b1e5696225208))

# [3.13.0](https://github.com/varletjs/varlet/compare/v3.12.3...v3.13.0) (2026-01-01)


### Features

* **field-decorator:** add filled variant style variables ([0b3b387](https://github.com/varletjs/varlet/commit/0b3b387c61f8a5904a79efcfd74bfaa98c069b53))
* **filled-variant:** support filled variant for field ([f530aba](https://github.com/varletjs/varlet/commit/f530aba7388c19bf85631b72f1e5ea54cf83aad0))
* **input:** add filled variant and update examples ([201a391](https://github.com/varletjs/varlet/commit/201a39133d26ddddc398d337fc0ceac503ccaf71))
* **select:** support chip css var ([92f1e12](https://github.com/varletjs/varlet/commit/92f1e12feb61fc7cc2d4e578207f1bc7a730ad4e))
* update docs ([847cdcc](https://github.com/varletjs/varlet/commit/847cdcc4145655aa10b4264533a6873895d00050))


### Refactoring

* **select:** move arrow position ([9fdfe3a](https://github.com/varletjs/varlet/commit/9fdfe3ae3e382867bd84f444725d59e7f600cb0c))

## [3.12.3](https://github.com/varletjs/varlet/compare/v3.12.2...v3.12.3) (2025-11-17)

## [3.12.2](https://github.com/varletjs/varlet/compare/v3.12.1...v3.12.2) (2025-11-17)


### Features

* **radio, checkbox, switch:** support tabindex ([2a3f86c](https://github.com/varletjs/varlet/commit/2a3f86c1cdaa1d3a43dfdf547e2bf1b25a8da4bb))

## [3.12.1](https://github.com/varletjs/varlet/compare/v3.12.0...v3.12.1) (2025-11-03)


### Features

* **field:** support tabindex ([2d0c6f4](https://github.com/varletjs/varlet/commit/2d0c6f4df00dd3fce2354e74b0f1f970faa396bf))

# [3.12.0](https://github.com/varletjs/varlet/compare/v3.11.4...v3.12.0) (2025-10-08)


### Bug Fixes

* **space:** fix comment vnode filter error ([eaf58ab](https://github.com/varletjs/varlet/commit/eaf58ab4b11e1c069728e28610e6a1858f86110a))


### Features

* **dialog:** support props of button related state ([a363f11](https://github.com/varletjs/varlet/commit/a363f11cd0171bed0ccc352bd31db6f4872c0b4a))

## [3.11.4](https://github.com/varletjs/varlet/compare/v3.11.3...v3.11.4) (2025-08-27)


### Features

* **input:** support inputmode ([9bf0121](https://github.com/varletjs/varlet/commit/9bf0121350c756de67d512a5a25ca91287d870c1))
* **ui/input:** support prevent-auto-fill ([#1920](https://github.com/varletjs/varlet/issues/1920)) ([2630894](https://github.com/varletjs/varlet/commit/2630894c9717e4c3afaee536fe6eb53b32c77a83))


### Refactoring

* cleanup code ([cb745d6](https://github.com/varletjs/varlet/commit/cb745d69ad79df6e6139dcc09a4303c59c8f994a))

## [3.11.3](https://github.com/varletjs/varlet/compare/v3.11.2...v3.11.3) (2025-08-12)


### Bug Fixes

* **skeleton:** use correct component type ([#1924](https://github.com/varletjs/varlet/issues/1924)) ([dc5fc1a](https://github.com/varletjs/varlet/commit/dc5fc1af787df53d005f63c63e99cdf1d1832d3c))

## [3.11.2](https://github.com/varletjs/varlet/compare/v3.11.1...v3.11.2) (2025-08-12)


### Features

* improve radio and checkbox a11y ([78596e0](https://github.com/varletjs/varlet/commit/78596e02922ebc6bb0ce81bb4d4cdee263e96027))

## [3.11.1](https://github.com/varletjs/varlet/compare/v3.11.0...v3.11.1) (2025-07-27)


### Features

* **input:** support select method([#1915](https://github.com/varletjs/varlet/issues/1915)) ([c9b91ef](https://github.com/varletjs/varlet/commit/c9b91effbc4d7920819f9693440158682e520309)), closes [#1905](https://github.com/varletjs/varlet/issues/1905) [#1909](https://github.com/varletjs/varlet/issues/1909) [#1912](https://github.com/varletjs/varlet/issues/1912)

# [3.11.0](https://github.com/varletjs/varlet/compare/v3.10.9...v3.11.0) (2025-06-22)


### Refactoring

* **ellipsis:** improve availability ([c30d008](https://github.com/varletjs/varlet/commit/c30d008f4f4497e9ae76a58c80721f5511de5711))

## [3.10.9](https://github.com/varletjs/varlet/compare/v3.10.8...v3.10.9) (2025-06-12)


### Features

* **theme:** support toRem and convert ([61870de](https://github.com/varletjs/varlet/commit/61870de5109fd897c359f58fca26130e2df2236e))

## [3.10.8](https://github.com/varletjs/varlet/compare/v3.10.7...v3.10.8) (2025-06-01)


### Features

* **tabs-items:** support animated ([#1892](https://github.com/varletjs/varlet/issues/1892)) ([e0da4de](https://github.com/varletjs/varlet/commit/e0da4de02fd9cf3b414283d41281a84b6ca18e06))


### Refactoring

* **tabs-items:** refactor animated logic and fix types ([d037079](https://github.com/varletjs/varlet/commit/d0370795aec3282797d3e50764b4bfa527936312))

## [3.10.7](https://github.com/varletjs/varlet/compare/v3.10.6...v3.10.7) (2025-05-21)


### Bug Fixes

* **slider:** prevent triggering the scroll event of the parent element while sliding ([#1891](https://github.com/varletjs/varlet/issues/1891)) ([6837460](https://github.com/varletjs/varlet/commit/6837460393f712aa03bfa415820b968a72ab6ad5))

## [3.10.6](https://github.com/varletjs/varlet/compare/v3.10.5...v3.10.6) (2025-05-07)

## [3.10.5](https://github.com/varletjs/varlet/compare/v3.10.4...v3.10.5) (2025-04-24)

## [3.10.4](https://github.com/varletjs/varlet/compare/v3.10.3...v3.10.4) (2025-04-10)


### Bug Fixes

* **ui/collapse-item:** use correct css variable to control `divider` ([#1877](https://github.com/varletjs/varlet/issues/1877)) ([13c165d](https://github.com/varletjs/varlet/commit/13c165d51ad3b34fc218fe6b342b1db8499c17de))

## [3.10.3](https://github.com/varletjs/varlet/compare/v3.10.2...v3.10.3) (2025-04-04)


### Bug Fixes

* now the change event is also triggered when closing and clearing, close [#1873](https://github.com/varletjs/varlet/issues/1873) ([5456120](https://github.com/varletjs/varlet/commit/54561206f6b9d9a33060ce3f27f0395d0019da19))

## [3.10.2](https://github.com/varletjs/varlet/compare/v3.10.1...v3.10.2) (2025-03-20)


### Bug Fixes

* fix playground css reference error ([c7edc92](https://github.com/varletjs/varlet/commit/c7edc92eda23f0018890503ca909de8c44b7ce41))

## [3.10.1](https://github.com/varletjs/varlet/compare/v3.10.0...v3.10.1) (2025-03-20)


### Bug Fixes

* **vscode-extension:** update componentsMap ([4f91a3e](https://github.com/varletjs/varlet/commit/4f91a3e918a312f90a0371de925c7ecfa3812dd2))

# [3.10.0](https://github.com/varletjs/varlet/compare/v3.9.1...v3.10.0) (2025-03-20)


### Features

* new component signature ([#1863](https://github.com/varletjs/varlet/issues/1863)) ([f9d8f31](https://github.com/varletjs/varlet/commit/f9d8f318909795654d80c3ba76554f19b32be8c9))


### Refactoring

* **signature:** ensure lineWidth types ([c220075](https://github.com/varletjs/varlet/commit/c2200750aa2c57a770e117d6a5dddc74cbe70173))

## [3.9.1](https://github.com/varletjs/varlet/compare/v3.9.0...v3.9.1) (2025-03-11)


### Bug Fixes

* **table:** scroll height replace with max height ([21ed93f](https://github.com/varletjs/varlet/commit/21ed93f5e577481b8d0fe84dc517245dbaa26762))


### Refactoring

* **ui/floating-panel:** update import statement for less file ([#1865](https://github.com/varletjs/varlet/issues/1865)) ([8fa0349](https://github.com/varletjs/varlet/commit/8fa03493a0f34214c6a120fb4a1d108b0545f5d5))

# [3.9.0](https://github.com/varletjs/varlet/compare/v3.8.7...v3.9.0) (2025-02-25)


### Bug Fixes

* **pagination:** ensure input variant are not affected by default customizations and close [#1857](https://github.com/varletjs/varlet/issues/1857) ([259230b](https://github.com/varletjs/varlet/commit/259230ba69ae084978457902b498105f3a0a9ee5))
* **radio:** changed tabindex to so nav works ([#1859](https://github.com/varletjs/varlet/issues/1859)) ([349f239](https://github.com/varletjs/varlet/commit/349f23945332f04eed7751f05118b671b1b7fb19))


### Features

* **locale:** support Japanese language ([#1858](https://github.com/varletjs/varlet/issues/1858)) ([2c15c05](https://github.com/varletjs/varlet/commit/2c15c059900ada3a59266d010c248b9d9b50a075)), closes [#1423](https://github.com/varletjs/varlet/issues/1423)


### Refactoring

* fix locale types and update docs for ja-JP ([0c0cd68](https://github.com/varletjs/varlet/commit/0c0cd68392bbf1a92872aba32f0810885daece73))
* **radio:** optimize keyboard navigation ([63ff38a](https://github.com/varletjs/varlet/commit/63ff38a19838fd8a7064e0e129a5ac85bee9b394))

## [3.8.7](https://github.com/varletjs/varlet/compare/v3.8.6...v3.8.7) (2025-02-15)

## [3.8.6](https://github.com/varletjs/varlet/compare/v3.8.5...v3.8.6) (2025-02-10)


### Features

* **pagination:** enhance styles ([f162978](https://github.com/varletjs/varlet/commit/f1629787621f8d0ae1bfd7e8a5b2b029a605f1c7))


### Refactoring

* **select:** optimize chips css ([2a84943](https://github.com/varletjs/varlet/commit/2a84943682040fff3effa8d4ec277f3155905a2c))

## [3.8.5](https://github.com/varletjs/varlet/compare/v3.8.4...v3.8.5) (2025-02-01)


### Features

* enhance radio group accessibility ([#1848](https://github.com/varletjs/varlet/issues/1848)) ([e3a1648](https://github.com/varletjs/varlet/commit/e3a1648bd33babc903df68c11b3c79bfcdf337dd))


### Refactoring

* **radio:** revert dom structure and cleanup code ([b5f50e9](https://github.com/varletjs/varlet/commit/b5f50e96ec39b060bfe678f9436b4b6bd777f511))

## [3.8.4](https://github.com/varletjs/varlet/compare/v3.8.3...v3.8.4) (2025-01-21)


### Features

* **input:** add aria-label prop for accessibility and update tests ([#1844](https://github.com/varletjs/varlet/issues/1844)) ([359819a](https://github.com/varletjs/varlet/commit/359819a5997c7b7848f1cac988d4081e5bb994a6))

## [3.8.3](https://github.com/varletjs/varlet/compare/v3.8.2...v3.8.3) (2025-01-12)


### BREAKING CHANGES

* Varlet CLI lint command is deprecated, please use eslint and prettier directly


### Features

* integrate configurajs/eslint and configurajs/prettier, migrate eslint to 9 and prettier to 3, deprecate cli lint command ([49c306c](https://github.com/varletjs/varlet/commit/49c306cc8c4be5940ad88bda892a24e3508feea0))


### Refactoring

* **menu-select:** improve variable naming for clarity and consistency ([#1841](https://github.com/varletjs/varlet/issues/1841)) ([b743a69](https://github.com/varletjs/varlet/commit/b743a69c9cfe57b41809617126e2c2e6b3479196))

## [3.8.2](https://github.com/varletjs/varlet/compare/v3.8.1...v3.8.2) (2025-01-02)


### Bug Fixes

* enhance menu select keyboard navigation ([839dca4](https://github.com/varletjs/varlet/commit/839dca43b9617d95c61ff5e8d1c1f7143a572657))

## [3.8.1](https://github.com/varletjs/varlet/compare/v3.8.0...v3.8.1) (2025-01-01)


### Bug Fixes

* **menu-option:** prevent keyboard event default ([dd6d5ba](https://github.com/varletjs/varlet/commit/dd6d5babb71fe59488fda252813abac818273035))

# [3.8.0](https://github.com/varletjs/varlet/compare/v3.7.4...v3.8.0) (2025-01-01)


### Bug Fixes

* **menu-option:** fix keyboard trigger conflict ([a95811f](https://github.com/varletjs/varlet/commit/a95811feafda8a1942a253432e5d5ad07236cac0))


### Features

* **cli:** add port option for preview command ([#1834](https://github.com/varletjs/varlet/issues/1834)) ([f611882](https://github.com/varletjs/varlet/commit/f6118821279cbca61335eb8fa868c9d53de81996))
* **menu-select:** support cascade mode ([#1840](https://github.com/varletjs/varlet/issues/1840)) ([f68f840](https://github.com/varletjs/varlet/commit/f68f840b553c805c71c445e585f5884f69aab97a))
* **ui/uploader:** support remove button slot ([#1835](https://github.com/varletjs/varlet/issues/1835)) ([859701d](https://github.com/varletjs/varlet/commit/859701d2d199b3435ef5bd0f0731d4839d9d22aa))


### Refactoring

* **ui:** clean tsconfig.json include filed ([#1833](https://github.com/varletjs/varlet/issues/1833)) ([9cbf3e4](https://github.com/varletjs/varlet/commit/9cbf3e4d726b1157d5d8b244b6d0d2712fc6f069))

## [3.7.4](https://github.com/varletjs/varlet/compare/v3.7.3...v3.7.4) (2024-12-22)


### Bug Fixes

* **overlay:** popover in overlay cannot be closed correctly and close [#1828](https://github.com/varletjs/varlet/issues/1828) ([4590eb1](https://github.com/varletjs/varlet/commit/4590eb101b974f6f21ca260f28a673dcdf3b981f))


### Performance Improvements

* **extension:** hidden open webview command in commandPalette ([#1829](https://github.com/varletjs/varlet/issues/1829)) ([ed08283](https://github.com/varletjs/varlet/commit/ed08283a7193e2cd1a0956351c3e1d7b3dc6296c))
* **extension:** reduce extension size ([#1830](https://github.com/varletjs/varlet/issues/1830)) ([7c90a66](https://github.com/varletjs/varlet/commit/7c90a66d026970cf24a72eb1d55c871812772d31))

## [3.7.3](https://github.com/varletjs/varlet/compare/v3.7.2...v3.7.3) (2024-12-13)


### Refactoring

* improve assert and logger ([eb2813b](https://github.com/varletjs/varlet/commit/eb2813be709d0ae19e85051bc400a5030cb2ccb1))

## [3.7.2](https://github.com/varletjs/varlet/compare/v3.7.1...v3.7.2) (2024-12-06)


### Features

* **cli:** support vite plugin ([#1825](https://github.com/varletjs/varlet/issues/1825)) ([2cbb8d4](https://github.com/varletjs/varlet/commit/2cbb8d42000cd258807e31e8e616f017f38cf74a))
* enhance popover reference ([#1826](https://github.com/varletjs/varlet/issues/1826)) ([33b6e87](https://github.com/varletjs/varlet/commit/33b6e8763f6b3800e6c8fda7b0b99f84c5b57d73))
* **switch:** support more css vars ([9cf6783](https://github.com/varletjs/varlet/commit/9cf6783cb6604d5664999b431e3727cd7925a5a5))


### Refactoring

* cleanup cli vite plugins ([3c142c7](https://github.com/varletjs/varlet/commit/3c142c7a5a03ea1c17f8a9f8d3ea2f2be5fc424f))
* **vite-plugins:** optimize markdown code ([#1823](https://github.com/varletjs/varlet/issues/1823)) ([6f6e042](https://github.com/varletjs/varlet/commit/6f6e0420cc0be97667de35a0e0cccb3ba8b5a959))

## [3.7.1](https://github.com/varletjs/varlet/compare/v3.7.0...v3.7.1) (2024-11-29)


### Features

* **themes:** support --color-scheme ([35320bb](https://github.com/varletjs/varlet/commit/35320bb55270069704f171c46b4b5573da7516bc))

# [3.7.0](https://github.com/varletjs/varlet/compare/v3.6.5...v3.7.0) (2024-11-21)


### Features

* new component CountTo ([#1815](https://github.com/varletjs/varlet/issues/1815)) ([b00508d](https://github.com/varletjs/varlet/commit/b00508de19aeb625a5638872d13d99ca8f107c6f))

## [3.6.5](https://github.com/varletjs/varlet/compare/v3.6.4...v3.6.5) (2024-11-12)

## [3.6.4](https://github.com/varletjs/varlet/compare/v3.6.3...v3.6.4) (2024-11-08)


### Refactoring

* **shared:** integrated rattail ([08a8003](https://github.com/varletjs/varlet/commit/08a8003e7245a7c57104f6d9b3c255984c5aa06a))

## [3.6.3](https://github.com/varletjs/varlet/compare/v3.6.2...v3.6.3) (2024-10-28)


### Bug Fixes

* **card:** fix CardProps types ([#1807](https://github.com/varletjs/varlet/issues/1807)) ([aa09774](https://github.com/varletjs/varlet/commit/aa09774e8404571b8692c144f4dd96d2f1c7ed2e))


### Refactoring

* **cli:** improve create command template code ([#1806](https://github.com/varletjs/varlet/issues/1806)) ([cf0be37](https://github.com/varletjs/varlet/commit/cf0be376a6f8aff4ef0c1b161bc01ab8e32a4307))

## [3.6.2](https://github.com/varletjs/varlet/compare/v3.6.1...v3.6.2) (2024-10-22)


### Bug Fixes

* **alert:** add props default setter ([#1804](https://github.com/varletjs/varlet/issues/1804)) ([7e0c887](https://github.com/varletjs/varlet/commit/7e0c8876b76a502305ff5bb1cc68f0bfc7637b14))

## [3.6.1](https://github.com/varletjs/varlet/compare/v3.6.0...v3.6.1) (2024-10-14)


### Bug Fixes

* **highlighter-provder:** fix CodeToHtmlOptions types ([dd0d2d7](https://github.com/varletjs/varlet/commit/dd0d2d7f2e860cb679f61816063d3d9f15c02243))

# [3.6.0](https://github.com/varletjs/varlet/compare/v3.5.4...v3.6.0) (2024-10-14)


### Features

* **code:** support trim ([#1794](https://github.com/varletjs/varlet/issues/1794)) ([0a2e43a](https://github.com/varletjs/varlet/commit/0a2e43a7d3a12b04357e8301564be6ec6c0321b4))
* support alert component ([#1787](https://github.com/varletjs/varlet/issues/1787)) ([8b5079f](https://github.com/varletjs/varlet/commit/8b5079fa07475ee1a011da212716eccf7e1d44b9))
* support code component ([#1791](https://github.com/varletjs/varlet/issues/1791)) ([fefbde6](https://github.com/varletjs/varlet/commit/fefbde6c9b200e36d4ebbd324ce51a3e59380963))


### Refactoring

* **alert:** refactor structure ([2c9273e](https://github.com/varletjs/varlet/commit/2c9273eb7eaa3b23d11d1503830ebb3c01bc697b))
* **cli:** improve create command template code ([#1796](https://github.com/varletjs/varlet/issues/1796)) ([47e1019](https://github.com/varletjs/varlet/commit/47e1019e3b65e7fc4bc648c3acbe88321b8a4138))
* **code:** refine component structure ([470d442](https://github.com/varletjs/varlet/commit/470d4425a95160370b1d78faa7675fadd1b0fb41))

## [3.5.4](https://github.com/varletjs/varlet/compare/v3.5.3...v3.5.4) (2024-10-07)


### Features

* **card:** support filled variant ([#1786](https://github.com/varletjs/varlet/issues/1786)) ([effd58f](https://github.com/varletjs/varlet/commit/effd58f3fc6b457751e2d9eed05757988a978b4e))
* **card:** support variant ([77bdaf2](https://github.com/varletjs/varlet/commit/77bdaf2f9efd11d591189bb71c04908a3636e16d))


### Refactoring

* **cli:** improve create command template code ([#1788](https://github.com/varletjs/varlet/issues/1788)) ([97b726e](https://github.com/varletjs/varlet/commit/97b726e4dec7ef85ac9d0d32f5db20dc6961ec53))

## [3.5.3](https://github.com/varletjs/varlet/compare/v3.5.2...v3.5.3) (2024-09-27)


### Bug Fixes

* **date-picker:** rerender date panel when max or min changes ([#1782](https://github.com/varletjs/varlet/issues/1782)) ([2df3ee2](https://github.com/varletjs/varlet/commit/2df3ee22d422e2220d47c833fce5fa264cb88968))
* **date-picker:** reset datePicker when modelValue is undefined or an empty string ([#1779](https://github.com/varletjs/varlet/issues/1779)) ([8ee1048](https://github.com/varletjs/varlet/commit/8ee1048b99150f771f19b3e3b2db1d2ad74ee97b))
* **picker:** fix page reflow caused by text size change ([f786eaf](https://github.com/varletjs/varlet/commit/f786eaf636c6fb9a583a1cb45876399db38f9adc))
* **time-picker:** reset time when modelValue is undefined or an empty string ([#1778](https://github.com/varletjs/varlet/issues/1778)) ([02058e5](https://github.com/varletjs/varlet/commit/02058e5e11f29b53703dc97af07ad12c25bd5c1d))


### Features

* **cli:** support seo options ([36c774f](https://github.com/varletjs/varlet/commit/36c774fe0de6f8189c53668a6d43ba0b24cb958e))
* support more css vars for date-picker and time-picker ([d1bc44b](https://github.com/varletjs/varlet/commit/d1bc44bc56c2e3a5b85992046fe8a6bdeb8a9b69))

## [3.5.2](https://github.com/varletjs/varlet/compare/v3.5.1...v3.5.2) (2024-09-21)

## [3.5.1](https://github.com/varletjs/varlet/compare/v3.5.0...v3.5.1) (2024-09-21)


### Refactoring

* migrate from inquirer to @inquirer/prompts ([#1767](https://github.com/varletjs/varlet/issues/1767)) ([3ffcdf7](https://github.com/varletjs/varlet/commit/3ffcdf77f4266e8e25a24480a911e1e8a6f07117))
* refactor markdown plugin hmr and  bump vite, vue version ([ec32314](https://github.com/varletjs/varlet/commit/ec32314aa5690cda7b63900041f1719b14d480d1))
* **row:** cleanup ([8f89826](https://github.com/varletjs/varlet/commit/8f89826f085d611c8fabecdc32de90633fa692eb))
* **row:** optimize component relation ([#1768](https://github.com/varletjs/varlet/issues/1768)) ([22824fa](https://github.com/varletjs/varlet/commit/22824fae60890ac591873c1aeec4a46dc6fab091))

# [3.5.0](https://github.com/varletjs/varlet/compare/v3.4.0...v3.5.0) (2024-09-15)


### Bug Fixes

* **auto-complete:** fix focus behavior ([0cb2055](https://github.com/varletjs/varlet/commit/0cb205508c1850f9f2afda6c0720917420958c1d))
* **auto-complete:** fix focus behavior ([3cb43b4](https://github.com/varletjs/varlet/commit/3cb43b46e3f306d34ae01d7f64f39998f8406636))
* **auto-complete:** fix focus not trigger when new value is not changed ([7a0960a](https://github.com/varletjs/varlet/commit/7a0960a0a24c22ec07ec3ecf3645a87b1b0a1706))
* **complier:** fix scss [@import](https://github.com/import) node_modules icons ([#1758](https://github.com/varletjs/varlet/issues/1758)) ([44c0756](https://github.com/varletjs/varlet/commit/44c07565422aaf62b4ac69304e5448440496bbe5))
* **counter:** fix v-model types ([bdb5da0](https://github.com/varletjs/varlet/commit/bdb5da03c103245e26a4323958c5447553558bda))
* **field:** fix placeholder resize failure in swipe and close [#1763](https://github.com/varletjs/varlet/issues/1763) ([23f907c](https://github.com/varletjs/varlet/commit/23f907cac477c6cc88c67a5ffd3f8d570b97d82b))


### Features

* form components support zod validation ([#1751](https://github.com/varletjs/varlet/issues/1751)) ([7eabc07](https://github.com/varletjs/varlet/commit/7eabc07dd427396dd65e1316b83aac9980294b9d))
* **input:** support zod validation ([8ff8bff](https://github.com/varletjs/varlet/commit/8ff8bffeeb0afb7c7616dc093bafb459a278f156))
* **tooltip:** support textColor ([#1756](https://github.com/varletjs/varlet/issues/1756)) ([25962ef](https://github.com/varletjs/varlet/commit/25962ef1c2b4b401f8cf2c3fe41cc46b98e24d05))
* using tinyexec ([#1752](https://github.com/varletjs/varlet/issues/1752)) ([b83ad7a](https://github.com/varletjs/varlet/commit/b83ad7a4a7bfcdb3ddb11db5d9aa688ed0429ec2))
* wip ([b5f7469](https://github.com/varletjs/varlet/commit/b5f746935934bf2965f748b226ceb9680140c965))

# [3.4.0](https://github.com/varletjs/varlet/compare/v3.3.16...v3.4.0) (2024-09-02)


### Features

* **cli:** support generate component type file for create command ([#1744](https://github.com/varletjs/varlet/issues/1744)) ([3333798](https://github.com/varletjs/varlet/commit/3333798c3db7b1786329556ebde35abc9ff04c5f))
* new component auto complete and refactor options api ([#1742](https://github.com/varletjs/varlet/issues/1742)) ([c90668d](https://github.com/varletjs/varlet/commit/c90668d7075701a2fbe66f0034099d7eb1f1820b))


### Refactoring

* **auto-complete:** remove duplicate form details style import ([#1746](https://github.com/varletjs/varlet/issues/1746)) ([90210a6](https://github.com/varletjs/varlet/commit/90210a64f8e6ce05f61538fb362a292e30d91fd4))

## [3.3.16](https://github.com/varletjs/varlet/compare/v3.3.15...v3.3.16) (2024-08-23)


### Bug Fixes

* **area:** fix area info ([#1736](https://github.com/varletjs/varlet/issues/1736)) ([b90ff66](https://github.com/varletjs/varlet/commit/b90ff6606d7add71bd3f6bc849074cd1070bf49c))

## [3.3.15](https://github.com/varletjs/varlet/compare/v3.3.14...v3.3.15) (2024-08-16)


### Refactoring

* **space:** remove unused import ([#1732](https://github.com/varletjs/varlet/issues/1732)) ([a035a56](https://github.com/varletjs/varlet/commit/a035a56fcfeb8ca2977c4a6844cb5003cc6dea81))

## [3.3.14](https://github.com/varletjs/varlet/compare/v3.3.13...v3.3.14) (2024-08-12)


### Bug Fixes

* **fab:** fix list patch error by key ([fa32b78](https://github.com/varletjs/varlet/commit/fa32b78c8868fc90e7cbef5b55a95aebed52928c))
* **space:** fix list patch error by key and close [#1731](https://github.com/varletjs/varlet/issues/1731) ([8380ad5](https://github.com/varletjs/varlet/commit/8380ad5cc0ca578771c2f35b5ce2b6f45af171aa))

## [3.3.13](https://github.com/varletjs/varlet/compare/v3.3.12...v3.3.13) (2024-08-08)


### Bug Fixes

* **card:** fix position error of the default slot ([cf3ea33](https://github.com/varletjs/varlet/commit/cf3ea3324830ec407c879ac570b4885d3fe62cdb))
* **cli:** adjust deps ([fb9c67d](https://github.com/varletjs/varlet/commit/fb9c67dfb1f22aff99719ed0ff290edf342abceb))


### Features

* **button:** support focusable ([751971a](https://github.com/varletjs/varlet/commit/751971a8d29012741f588280b236f57b0a72009a))
* **loading-bar:** support finishDelay ([8892ff4](https://github.com/varletjs/varlet/commit/8892ff43826317f1a6207385bd87d91ff0fb6d8f))


### Refactoring

* **cli:** modify config merge strategy ([a5d5f86](https://github.com/varletjs/varlet/commit/a5d5f86fc375d3a97c4ac8f4a9fb14208949ab56))
* **loading-bar:** optimize animation ([4365c72](https://github.com/varletjs/varlet/commit/4365c720dab5ba3453b05dd35b038c7a135528e2))

## [3.3.12](https://github.com/varletjs/varlet/compare/v3.3.11...v3.3.12) (2024-08-05)


### Bug Fixes

* **cli:** ad maybe emptry ([ad569f4](https://github.com/varletjs/varlet/commit/ad569f4c6464aa601538c082d4e6070e88fbbfe4))


### Features

* **usePopover:** support manual trigger and close [#1725](https://github.com/varletjs/varlet/issues/1725) ([92a80d6](https://github.com/varletjs/varlet/commit/92a80d6bba0b1b7e4dfed53fcffcc7acef6d2561))


### Refactoring

* **cli:** remove highlight default style ([0f0e46e](https://github.com/varletjs/varlet/commit/0f0e46e2185bbc87e2b2767361c797abc01e4aed))

## [3.3.11](https://github.com/varletjs/varlet/compare/v3.3.10...v3.3.11) (2024-08-02)


### Features

* **picker:** support columnsCount ([#1722](https://github.com/varletjs/varlet/issues/1722)) ([3570f05](https://github.com/varletjs/varlet/commit/3570f05a775dff3662ea5808fc5dad14dfff6b81))

## [3.3.10](https://github.com/varletjs/varlet/compare/v3.3.9...v3.3.10) (2024-07-27)


### Features

* **popup:** support zIndex ([#1721](https://github.com/varletjs/varlet/issues/1721)) ([82e4b71](https://github.com/varletjs/varlet/commit/82e4b7142847f41a9132f2387816961842e81ed5))

## [3.3.9](https://github.com/varletjs/varlet/compare/v3.3.8...v3.3.9) (2024-07-21)


### Bug Fixes

* fix vue api mission in jsx file and close [#1718](https://github.com/varletjs/varlet/issues/1718) ([1c722aa](https://github.com/varletjs/varlet/commit/1c722aaee980f350e165ade564d479e860048a68))

## [3.3.8](https://github.com/varletjs/varlet/compare/v3.3.7...v3.3.8) (2024-07-20)


### Bug Fixes

* fix table thead tr background error ([b4bd065](https://github.com/varletjs/varlet/commit/b4bd0658798d5131425a1c635f9805c2ed4abfd4))

## [3.3.7](https://github.com/varletjs/varlet/compare/v3.3.6...v3.3.7) (2024-07-19)


### Bug Fixes

* fix dialog unmount instance error ([#1711](https://github.com/varletjs/varlet/issues/1711)) ([a19c6e7](https://github.com/varletjs/varlet/commit/a19c6e743fc64ba0d79c4f23a6c87fb7d8870c6e))
* **preset-tailwindcss:** fix issue where tailwindcss default styles were overridden by varlet tailwindcss preset ([#1716](https://github.com/varletjs/varlet/issues/1716)) ([aaf1cbf](https://github.com/varletjs/varlet/commit/aaf1cbfe4deb08292ef7c30d9821e911fcd2589b))


### Features

* **card:** support default slot ([#1709](https://github.com/varletjs/varlet/issues/1709)) ([faed196](https://github.com/varletjs/varlet/commit/faed196b96cad7214822cf433bdd2e923a6a80b1))
* **menu-select:** supports options, labelKey and valueKey ([#1695](https://github.com/varletjs/varlet/issues/1695)) ([6b4bc49](https://github.com/varletjs/varlet/commit/6b4bc494b229e2bfdb7305de97da530b6cd74e07))
* support hsl css var ([#1710](https://github.com/varletjs/varlet/issues/1710)) ([f85eea5](https://github.com/varletjs/varlet/commit/f85eea5f2d41a80245bf8110d70a4cece6f50ba3))


### Refactoring

* remove opacity for preset ([#1715](https://github.com/varletjs/varlet/issues/1715)) ([51d6c59](https://github.com/varletjs/varlet/commit/51d6c59f4b6237d3e7b68597c9c99b4b1d1958c0))
* **styles:** remove useless common style ([#1714](https://github.com/varletjs/varlet/issues/1714)) ([3d99330](https://github.com/varletjs/varlet/commit/3d993301e5ee9575f4da58ae93e92f6a370a035e))

## [3.3.6](https://github.com/varletjs/varlet/compare/v3.3.5...v3.3.6) (2024-07-10)


### Bug Fixes

* **input:** fix missing dot key on ios ([2dd86cd](https://github.com/varletjs/varlet/commit/2dd86cd61d3651e8f1b34642e069f6681cef56bb))
* reset last validation before trigger validate event ([#1703](https://github.com/varletjs/varlet/issues/1703)) ([b43cfc0](https://github.com/varletjs/varlet/commit/b43cfc022f16e055972b38227899ace53582d83d))


### Refactoring

* **input:** refactor decimal keyboard ([#1704](https://github.com/varletjs/varlet/issues/1704)) ([7bc91a8](https://github.com/varletjs/varlet/commit/7bc91a87c215a433691e06e4e536989efb0fd890))
* lint code ([#1696](https://github.com/varletjs/varlet/issues/1696)) ([fbe33bf](https://github.com/varletjs/varlet/commit/fbe33bfb79d2fd0c04a660a987fb2b2cd8e95024))

## [3.3.5](https://github.com/varletjs/varlet/compare/v3.3.4...v3.3.5) (2024-07-09)


### Bug Fixes

* **cli:** fix cf site logic ([da2766e](https://github.com/varletjs/varlet/commit/da2766efbf0db52415467ea731289c301f38973e))
* **input:** trim value after blurring while setting trim modifier ([#1693](https://github.com/varletjs/varlet/issues/1693)) ([1c4f41a](https://github.com/varletjs/varlet/commit/1c4f41a3a806a2abd660d825f54fea022e1f901d))


### Refactoring

* **cli:** support _cf option ([5f9c0b5](https://github.com/varletjs/varlet/commit/5f9c0b5c9fdc9e9c7852345b23cfda82e80a5981))

## [3.3.4](https://github.com/varletjs/varlet/compare/v3.3.3...v3.3.4) (2024-07-05)


### Features

* **select:** support options, labelKey and valueKey ([#1634](https://github.com/varletjs/varlet/issues/1634)) ([4539b1b](https://github.com/varletjs/varlet/commit/4539b1b337fcffcef5f66375e8fd5adf480a83fa))


### Refactoring

* replace Array.isArray with isArray method ([e8da409](https://github.com/varletjs/varlet/commit/e8da409fcb96d0b27240a663d631c5d4a7c6947a))

## [3.3.3](https://github.com/varletjs/varlet/compare/v3.3.2...v3.3.3) (2024-06-27)


### Features

* **dialog:** support actions slot ([#1689](https://github.com/varletjs/varlet/issues/1689)) ([2d4e0e5](https://github.com/varletjs/varlet/commit/2d4e0e59c063bf6045ecf1558b77faeffad89931))


### Refactoring

* **ripple:** adjust style order ([b6d710d](https://github.com/varletjs/varlet/commit/b6d710da97a76a0bd2e8c0483e6ff45cd7a31c44))

## [3.3.2](https://github.com/varletjs/varlet/compare/v3.3.1...v3.3.2) (2024-06-23)


### Features

* **app-bar:** support props border ([367d007](https://github.com/varletjs/varlet/commit/367d0076e7d7f240885299d9ff2116765fccb806))


### Refactoring

* **checkbox:** optimized code ([#1685](https://github.com/varletjs/varlet/issues/1685)) ([6ef901a](https://github.com/varletjs/varlet/commit/6ef901a8f8e02a25e3b1ced42b62b93485cb7b5e))
* **inline-css:** reduce error level ([107e494](https://github.com/varletjs/varlet/commit/107e4947e208dcb920576df535403834ee71a1e8))
* support MaybeVNode component to utils ([10abb12](https://github.com/varletjs/varlet/commit/10abb12998f3dc0669775735e46df4effcaa08c2))

## [3.3.1](https://github.com/varletjs/varlet/compare/v3.3.0...v3.3.1) (2024-06-17)


### Bug Fixes

* fix md3 light theme format error ([ae36ea4](https://github.com/varletjs/varlet/commit/ae36ea4dedee698f7680b9db2b670fc3e8b537e0))

# [3.3.0](https://github.com/varletjs/varlet/compare/v3.2.14...v3.3.0) (2024-06-14)


### Bug Fixes

* **option:** add missing style import and remove useless import ([#1678](https://github.com/varletjs/varlet/issues/1678)) ([e38800f](https://github.com/varletjs/varlet/commit/e38800fdff629b856a13d0cec8152252c21b7ee3))


### Features

* **card:** export class for title, subtitle and description slot ([#1662](https://github.com/varletjs/varlet/issues/1662)) ([14bb35c](https://github.com/varletjs/varlet/commit/14bb35c75e977722eb538c24924a9a1069eb58f6))
* **chip:** support elevation ([#1680](https://github.com/varletjs/varlet/issues/1680)) ([4ac22dc](https://github.com/varletjs/varlet/commit/4ac22dcd5e7a6aaa8e8dc245b1fe3bf70a903774))
* **locale-provider:** support messages ([0f52452](https://github.com/varletjs/varlet/commit/0f5245215fa88db19992447b2a88d0271ba3b592))
* **menu-option:** support ripple ([#1676](https://github.com/varletjs/varlet/issues/1676)) ([ad2689b](https://github.com/varletjs/varlet/commit/ad2689bd80a8557ccaa7c9bd16cfcc39b1ef233b))
* new component locale-provider and makes locale messages reactive ([8adb4c1](https://github.com/varletjs/varlet/commit/8adb4c102b933d207e3aa0ee9d82a3b1420a05e8))
* **option:** export selected prop for default slot ([#1677](https://github.com/varletjs/varlet/issues/1677)) ([704ca37](https://github.com/varletjs/varlet/commit/704ca378a9e4ca9707572f199edcbc80ec582450))
* **snackbar:** support elevation ([#1669](https://github.com/varletjs/varlet/issues/1669)) ([04a6596](https://github.com/varletjs/varlet/commit/04a6596f2edd6f07082979019d0784bfff99fc42))


### Refactoring

* **app-bar, bottom-navigation:** optimize code ([#1667](https://github.com/varletjs/varlet/issues/1667)) ([7335f09](https://github.com/varletjs/varlet/commit/7335f09f8c4c6957b222735b45596985708d8ea2))
* cleanup and fix sass import ([021b548](https://github.com/varletjs/varlet/commit/021b548a696cc5204bf8e36f6cb02568c4e101d5))
* **cli:** optimize compile type command code ([#1668](https://github.com/varletjs/varlet/issues/1668)) ([040aa2e](https://github.com/varletjs/varlet/commit/040aa2ed6f684d49462903893ba810cfc160bb58))
* **locale-provider:** add lang ([9617468](https://github.com/varletjs/varlet/commit/961746880067608d48d03b0faa72e7a9cc9f3385))
* remove lodash-es & replace node-sass to sass ([#1656](https://github.com/varletjs/varlet/issues/1656)) ([230f46c](https://github.com/varletjs/varlet/commit/230f46c8cf93a26b92cd32b4b9c355954516e46c))
* replace rgba(0, 0, 0, 0)  with transparent ([#1665](https://github.com/varletjs/varlet/issues/1665)) ([2fdc79f](https://github.com/varletjs/varlet/commit/2fdc79f1722095bc1341021ced37674200f095c5))

## [3.2.14](https://github.com/varletjs/varlet/compare/v3.2.13...v3.2.14) (2024-06-07)


### Bug Fixes

* **avatar:** disable tap highlights on iOS ([#1657](https://github.com/varletjs/varlet/issues/1657)) ([f54684d](https://github.com/varletjs/varlet/commit/f54684d68dac99e39fc2c4691c31df4a7514b70e))
* **bottom-navigation:** improve variant active animation ([8ea13a8](https://github.com/varletjs/varlet/commit/8ea13a86254eeabcb607a6dc419d95e8b8001745))
* **checkbox-group:** add mission style import ([c1501ab](https://github.com/varletjs/varlet/commit/c1501ab5a6dea0129601408af467b4c507ec5f26))
* **checkbox:** don't trigger click event when clicking validate message ([#1654](https://github.com/varletjs/varlet/issues/1654)) ([ed21fd9](https://github.com/varletjs/varlet/commit/ed21fd99997833ee90ae3b5ac4bfdc78674dcd6e))
* **ellipsis:** disable tap highlights on iOS ([#1652](https://github.com/varletjs/varlet/issues/1652)) ([18e73fd](https://github.com/varletjs/varlet/commit/18e73fd0f793465f289f54de0a9601f49d7fc46a))
* **link:** disable tap highlights on iOS ([#1651](https://github.com/varletjs/varlet/issues/1651)) ([a9d0154](https://github.com/varletjs/varlet/commit/a9d0154e4ebae497555fd26bba56c8ed7f9726e8))
* **paper:** disable tap highlights on iOS ([#1650](https://github.com/varletjs/varlet/issues/1650)) ([25f84e3](https://github.com/varletjs/varlet/commit/25f84e3369834740a7a1a7785bf3b6e8c37f7a4e))


### Features

* **app-bar:** add placeholder prop ([#1643](https://github.com/varletjs/varlet/issues/1643)) ([f0c5afe](https://github.com/varletjs/varlet/commit/f0c5afe3235a36c550c1723ed8bad2b29faa91e9))
* **radio-group:** support options and label-key and value-key ([#1648](https://github.com/varletjs/varlet/issues/1648)) ([31413cb](https://github.com/varletjs/varlet/commit/31413cb807ef4117551777bc26ba2830cf771ad0))
* **radio:** default slot export checked ([#1649](https://github.com/varletjs/varlet/issues/1649)) ([9ba0da4](https://github.com/varletjs/varlet/commit/9ba0da4eb1a6bfdd1f8aa9c9c7eff119697d1ced))
* **swipe:** support keyboard arrowLeft and arrowRight ([#1659](https://github.com/varletjs/varlet/issues/1659)) ([581d47e](https://github.com/varletjs/varlet/commit/581d47e5c11da5e8617c54881a11907108747e04))


### Performance Improvements

* **cli:** reduce the size of styleVars type ([#1660](https://github.com/varletjs/varlet/issues/1660)) ([887206b](https://github.com/varletjs/varlet/commit/887206b7d72b59a8566abd0a2a913536ce7e686a))


### Refactoring

* **bottom-navigation:** optimize code ([#1647](https://github.com/varletjs/varlet/issues/1647)) ([9984f33](https://github.com/varletjs/varlet/commit/9984f33a6efe98ab6c416dd710026f6aa6ea290b))
* **cli:** improve compile style vars command and correct docs and types ([#1653](https://github.com/varletjs/varlet/issues/1653)) ([ce8561a](https://github.com/varletjs/varlet/commit/ce8561a8ad0978ef06cb4bfbefba6ec67b178bc7))
* **style-provider:** refactor to insert dynamic style ([8ca0b82](https://github.com/varletjs/varlet/commit/8ca0b82087a161858c16c320b1860dc9a1090516))
* **style-provider:** remove a :root ([18caa24](https://github.com/varletjs/varlet/commit/18caa240f62ceb520db5d160413571f0e89b6695))
* **swipe:** optimize code ([#1658](https://github.com/varletjs/varlet/issues/1658)) ([e4a7ee7](https://github.com/varletjs/varlet/commit/e4a7ee72de29c61459f8b3371618a8d4953e9505))

## [3.2.13](https://github.com/varletjs/varlet/compare/v3.2.12...v3.2.13) (2024-05-31)


### Bug Fixes

* **cell:** disable tap highlights on iOS ([#1646](https://github.com/varletjs/varlet/issues/1646)) ([7850af5](https://github.com/varletjs/varlet/commit/7850af5930585e4aa3e4af38f27eed0f98a0ddc7)), closes [#1645](https://github.com/varletjs/varlet/issues/1645)


### Features

* **cli:** support ai agent ([a92c840](https://github.com/varletjs/varlet/commit/a92c840266149c6c4fa10e2b52829122c5f1f46b))


### Refactoring

* **cli:** optimize seo ([6ea9cd9](https://github.com/varletjs/varlet/commit/6ea9cd9bf02a1326b4dfe369d41b5501615eb647))
* optimize add css ([54bd167](https://github.com/varletjs/varlet/commit/54bd1673ef2c268b9fc56ef23bf876d82bc2ecbc))

## [3.2.12](https://github.com/varletjs/varlet/compare/v3.2.11...v3.2.12) (2024-05-30)


### Bug Fixes

* **cell:** add missing ripple less file import ([#1642](https://github.com/varletjs/varlet/issues/1642)) ([61ed078](https://github.com/varletjs/varlet/commit/61ed078cf2c0d9edc7456503af7e1311caa21bbe))
* **checkbox-group:** set option label and value to be required ([#1635](https://github.com/varletjs/varlet/issues/1635)) ([0dbc67c](https://github.com/varletjs/varlet/commit/0dbc67cb815415d3b06e6e9bc6f913fad358da1a))
* **paper:** add missing ripple less file import ([#1637](https://github.com/varletjs/varlet/issues/1637)) ([098adfb](https://github.com/varletjs/varlet/commit/098adfb3f6b8b699987724c3b765bdc2e0b9957e))
* **uploader:** add missing ripple less file import ([#1638](https://github.com/varletjs/varlet/issues/1638)) ([6ac83ca](https://github.com/varletjs/varlet/commit/6ac83cae3a74a30a0893bfca5f4435fc8d7c40a8))


### Features

* **checkbox-group:** support label-key and value-key prop and export checked for default slot ([#1640](https://github.com/varletjs/varlet/issues/1640)) ([a18f947](https://github.com/varletjs/varlet/commit/a18f947a75a0b0a14151afa1a150b36e47c4e2cf))
* **cli:** support ad ([9726408](https://github.com/varletjs/varlet/commit/9726408c4a0be21016c941fc82645929fb5cc8c6))
* **cli:** support server.proxy ([#1636](https://github.com/varletjs/varlet/issues/1636)) ([c75300f](https://github.com/varletjs/varlet/commit/c75300f9a1320d58ddcb1ac57ee549397efa6199))
* **floating-panel:** support header slot ([#1639](https://github.com/varletjs/varlet/issues/1639)) ([1a6fbb0](https://github.com/varletjs/varlet/commit/1a6fbb0a917facf3d1741311d36bef1b45c0d6b6))


### Refactoring

* **checkbox-group-option:** cleanup ([9c70232](https://github.com/varletjs/varlet/commit/9c70232dd675d54863811ee0499f91f0b697c450))
* **checkbox-group-option:** cleanup ([1fe1ea0](https://github.com/varletjs/varlet/commit/1fe1ea07999ccc0a89631378c75bf1ecb54a7a06))
* **cli:** fix ad animation overflow ([151d355](https://github.com/varletjs/varlet/commit/151d355478de07da59c841790eb5845328003c95))
* **cli:** prevent pointer event for ad animation ([e544da3](https://github.com/varletjs/varlet/commit/e544da30c244d74dc8bd5325f1e3d37e871a6f2b))
* optimize ad css ([a04e611](https://github.com/varletjs/varlet/commit/a04e61101690c605828eaad54406afd8d858270e))
* optimize ad css ([16a2c5f](https://github.com/varletjs/varlet/commit/16a2c5fe47464e112f8c9659687cfd4b28eef986))
* optimize ad css ([ae7aa4b](https://github.com/varletjs/varlet/commit/ae7aa4b8ebaf0648d0c373d4d2bf5faa5bb38698))
* optimize mobile css ([6f74777](https://github.com/varletjs/varlet/commit/6f7477758fe9bc6f25c80866a53d7bda03b8b739))

## [3.2.11](https://github.com/varletjs/varlet/compare/v3.2.10...v3.2.11) (2024-05-24)


### Features

* **bottom-navigation:** add placeholder prop ([#1618](https://github.com/varletjs/varlet/issues/1618)) ([471a563](https://github.com/varletjs/varlet/commit/471a5634470e377920df6e7776f8869c45c5e59a))
* **checkbox-group:** support options ([#1624](https://github.com/varletjs/varlet/issues/1624)) ([e345c0a](https://github.com/varletjs/varlet/commit/e345c0aec176938c8a550526aa59a4106ba8439b))


### Refactoring

* **bottom-navigation:** remove fab height computed in resizePlaceholder ([abc5e8c](https://github.com/varletjs/varlet/commit/abc5e8cd299caeef50c52b145f7748624b46dd09))
* **shared:** debounce and throttle support nodejs ([d75a3a0](https://github.com/varletjs/varlet/commit/d75a3a02b3358f6c49741b37762cd71abca7d5d2))
* **utils:** optimize code of padStart function ([#1625](https://github.com/varletjs/varlet/issues/1625)) ([34673c1](https://github.com/varletjs/varlet/commit/34673c1939fd9b4427844635a4a02ea228f01741))

## [3.2.10](https://github.com/varletjs/varlet/compare/v3.2.9...v3.2.10) (2024-05-17)


### Bug Fixes

* **field:** resize when popup show ([865f972](https://github.com/varletjs/varlet/commit/865f9726efac941e7c437b7cbda6fd45229a848e))


### Features

* **shared:** support slash ([8ffabdc](https://github.com/varletjs/varlet/commit/8ffabdc573252b1cecaf752edd2ee9817573b23b))

## [3.2.9](https://github.com/varletjs/varlet/compare/v3.2.8...v3.2.9) (2024-05-10)


### Bug Fixes

* **cli:** compatible with cloudflare omit file suffix ([f6b9ece](https://github.com/varletjs/varlet/commit/f6b9ece27837f963f010869459e9c3d4834a01cd))


### Features

* **cli:** config of adding custom content into index.html ([#1616](https://github.com/varletjs/varlet/issues/1616)) ([31babaf](https://github.com/varletjs/varlet/commit/31babafc4cf37d04ad67f11f36aff50793e3a80a))
* **cli:** support config.bundle ([560af0c](https://github.com/varletjs/varlet/commit/560af0c31b0262b30f0d99250b7687e520634cb2))


### Refactoring

* **cli:** improve defineConfig types and refactor htmlInject api ([45e16b8](https://github.com/varletjs/varlet/commit/45e16b8f51c36867073d02ea6a9d05a89a5d5744))
* **style:** isolate mixin name ([#1620](https://github.com/varletjs/varlet/issues/1620)) ([bcc7444](https://github.com/varletjs/varlet/commit/bcc7444a9ae1e18b1a596eb5eca9cf977b226653))

## [3.2.8](https://github.com/varletjs/varlet/compare/v3.2.7...v3.2.8) (2024-05-07)


### Bug Fixes

* **extension:** fix links ([70e1bbe](https://github.com/varletjs/varlet/commit/70e1bbe2e845b3db086bcc7fc96ae88246124871))

## [3.2.7](https://github.com/varletjs/varlet/compare/v3.2.6...v3.2.7) (2024-05-02)


### Bug Fixes

* **extension:** modify prompt bug ([#1608](https://github.com/varletjs/varlet/issues/1608)) ([3c4c50b](https://github.com/varletjs/varlet/commit/3c4c50bbbc6d9e065a713aa83d237d65e53166ad))


### Features

* **switch:** support buttonElevation ([#1605](https://github.com/varletjs/varlet/issues/1605)) ([ef74261](https://github.com/varletjs/varlet/commit/ef74261c1d4139caaf14c7ffa74f1428066e2fc4))


### Refactoring

* **cli:** remove useless import ([#1606](https://github.com/varletjs/varlet/issues/1606)) ([0f62dbd](https://github.com/varletjs/varlet/commit/0f62dbd549110fee70f161a9750f7426910ad07c))

## [3.2.6](https://github.com/varletjs/varlet/compare/v3.2.5...v3.2.6) (2024-04-25)


### Bug Fixes

* **cli:** fix standalone module alias replace error ([9c8e805](https://github.com/varletjs/varlet/commit/9c8e805f872ba3c92346683e7e855ba4a0120a5c))
* fix hydration error caused by use id ([660a689](https://github.com/varletjs/varlet/commit/660a689b0397d46071488d17717315647de63be6))
* **use:** fix non unique id warning in browser ([e44b40c](https://github.com/varletjs/varlet/commit/e44b40c52b1aa0b4a55c1cc425d385d64d949504))


### Features

* **cli:** support sass ([500b4aa](https://github.com/varletjs/varlet/commit/500b4aac248de4ef7b84bea1e84c93b12f4c7507))
* **cli:** support scripts alias ([229e934](https://github.com/varletjs/varlet/commit/229e934a84fed213906d8a96abf2ded57b36adba))

## [3.2.5](https://github.com/varletjs/varlet/compare/v3.2.4...v3.2.5) (2024-04-19)


### Bug Fixes

* **progress:** reset value to 0 when the value is less than 0 ([#1586](https://github.com/varletjs/varlet/issues/1586)) ([915b287](https://github.com/varletjs/varlet/commit/915b287cb532ed83c9a8e038cb49c964ca5a14b1))


### Performance Improvements

* **breadcrumbs:** improve accessibility ([#1588](https://github.com/varletjs/varlet/issues/1588)) ([55268d8](https://github.com/varletjs/varlet/commit/55268d81bd8107d68d464e5c6c8ab68157b9b6aa))
* **collapse:** improve accessibility ([#1589](https://github.com/varletjs/varlet/issues/1589)) ([c2493b9](https://github.com/varletjs/varlet/commit/c2493b9d7bf05dfb2cfe9bbd105e3554c90d19b6))
* **popup:** improve accessibility ([#1591](https://github.com/varletjs/varlet/issues/1591)) ([2051379](https://github.com/varletjs/varlet/commit/20513798cdf0589b1dd756b05f4395a1241264da))
* **progress:** improve accessibility ([#1587](https://github.com/varletjs/varlet/issues/1587)) ([4cb3e37](https://github.com/varletjs/varlet/commit/4cb3e377cd099fa0a6a7985481b253ecd6a52f84))
* **slider:** improve accessibility ([#1584](https://github.com/varletjs/varlet/issues/1584)) ([cd21e9b](https://github.com/varletjs/varlet/commit/cd21e9bb9596585f85de1b7a34dbedf2057ed468))
* **swipe:** improve accessibility ([#1592](https://github.com/varletjs/varlet/issues/1592)) ([c66fa83](https://github.com/varletjs/varlet/commit/c66fa83bfdc48a028713758b142cbd0842002c17))
* **switch:** improve accessibility ([#1585](https://github.com/varletjs/varlet/issues/1585)) ([1b10be4](https://github.com/varletjs/varlet/commit/1b10be42fd538ed3f4255471961c741bd3d15c94))
* **tooltip:** improve accessibility ([#1583](https://github.com/varletjs/varlet/issues/1583)) ([6107c8b](https://github.com/varletjs/varlet/commit/6107c8b33be440d52bf0f5f2f708547412b87cfc))


### Refactoring

* **slider:** optimize code ([#1590](https://github.com/varletjs/varlet/issues/1590)) ([4a744d8](https://github.com/varletjs/varlet/commit/4a744d8d9a6097e5ebfb77e6160d6cd3e017e082))

## [3.2.4](https://github.com/varletjs/varlet/compare/v3.2.3...v3.2.4) (2024-04-10)


### Bug Fixes

* **time-picker:** update allow time when the value changed ([#1579](https://github.com/varletjs/varlet/issues/1579)) ([2df9378](https://github.com/varletjs/varlet/commit/2df93789f29e778518f7731991b85f2508774b72))


### Performance Improvements

* **divider:** improve accessibility ([#1582](https://github.com/varletjs/varlet/issues/1582)) ([e30c34f](https://github.com/varletjs/varlet/commit/e30c34fefb8936be6fa07d76e9db62771ab24f78))


### Refactoring

* **avatar-group:** remove useless return ([#1578](https://github.com/varletjs/varlet/issues/1578)) ([4de0643](https://github.com/varletjs/varlet/commit/4de06435d855ee92b24f44414d44050f8a08d866))
* **date-picker:** optimize code ([#1580](https://github.com/varletjs/varlet/issues/1580)) ([d0990a2](https://github.com/varletjs/varlet/commit/d0990a220297b158dce2add3f8f8d33d7abdcc35))

## [3.2.3](https://github.com/varletjs/varlet/compare/v3.2.2...v3.2.3) (2024-04-06)


### Bug Fixes

* fix emit trigger when the props initialized and close [#1566](https://github.com/varletjs/varlet/issues/1566) ([853d243](https://github.com/varletjs/varlet/commit/853d243a8b034a7b368afcf055420d9abf12676f))


### Features

* **image:** support position to set image position ([#1563](https://github.com/varletjs/varlet/issues/1563)) ([6773914](https://github.com/varletjs/varlet/commit/6773914358d09a9e85e7282ab5610abe064b9da5))
* **switch:** support variant mode ([#1552](https://github.com/varletjs/varlet/issues/1552)) ([cd82fc7](https://github.com/varletjs/varlet/commit/cd82fc7046fd1d05d218b29bdfdcab916f4b8f70))


### Refactoring

* refactor toViewport module position ([b5371f2](https://github.com/varletjs/varlet/commit/b5371f2e60162c0be1fbef00e0091c8078b7385e))
* **result:** optimize code and docs ([#1560](https://github.com/varletjs/varlet/issues/1560)) ([f3f14b1](https://github.com/varletjs/varlet/commit/f3f14b11a8c27d4e6e327e407b5c6778ddde1354))
* **switch:** optimize code ([5f942bd](https://github.com/varletjs/varlet/commit/5f942bda5a4912e984e8b122f6338c18df8fedb9))
* **switch:** optimize css var and fix loading effect ([480bfed](https://github.com/varletjs/varlet/commit/480bfedd9e0f3d8f6ab20b085f305ba5d1067764))
* **switch:** remove unused variable ([7e85e59](https://github.com/varletjs/varlet/commit/7e85e592eba1163dec197ff47cbc834576eb191d))

## [3.2.2](https://github.com/varletjs/varlet/compare/v3.2.1...v3.2.2) (2024-03-29)


### Bug Fixes

* **cell:** limit the type of title to string ([#1555](https://github.com/varletjs/varlet/issues/1555)) ([d8b5432](https://github.com/varletjs/varlet/commit/d8b543248c63d82b56829d45cf74c4389c84d9ca))
* **cli/create:** replace pack ([6bcd910](https://github.com/varletjs/varlet/commit/6bcd910f4b319813fe998fa20da9018db5b726a6))
* **cli/gen:** replace pack ([#1553](https://github.com/varletjs/varlet/issues/1553)) ([baddcc2](https://github.com/varletjs/varlet/commit/baddcc2a1c866d9abc225f0dd6b99ac34d2e067c))

## [3.2.1](https://github.com/varletjs/varlet/compare/v3.2.0...v3.2.1) (2024-03-23)


### Bug Fixes

* **preset-tailwindcss:** rename preset varlet colors ([#1548](https://github.com/varletjs/varlet/issues/1548)) ([976f3d7](https://github.com/varletjs/varlet/commit/976f3d782198ab3b45ac19a652c34732e22c051a))

# [3.2.0](https://github.com/varletjs/varlet/compare/v3.1.4...v3.2.0) (2024-03-22)


### Bug Fixes

* **ui/FloatingPanel:** remove animation if no anchor when init ([#1540](https://github.com/varletjs/varlet/issues/1540)) ([ac655c7](https://github.com/varletjs/varlet/commit/ac655c7a3c83e2e4fb55f4c955ad9491c28afe35))


### Features

* add varlet-preset-tailwindcss package ([#1539](https://github.com/varletjs/varlet/issues/1539)) ([07b550b](https://github.com/varletjs/varlet/commit/07b550b3bad40d4def7be43fe6a3c10c252e445c))
* **bottom-navigation:** support variant mode and Improve badge usability ([3cb21e7](https://github.com/varletjs/varlet/commit/3cb21e76f2fb500c279ce747fc0131279ffb9de4))
* integrated @varlet/icon-builder ([4819fc1](https://github.com/varletjs/varlet/commit/4819fc1ef741aeb52b38f8100dac78477e7b3cc6))
* support --table-tbody-td ([#1541](https://github.com/varletjs/varlet/issues/1541)) ([dd2cb9e](https://github.com/varletjs/varlet/commit/dd2cb9e7990e1e6e839f912e6ab9b7142d5fe945))
* **table:** support scroller height ([8eba468](https://github.com/varletjs/varlet/commit/8eba468a65075b8ec7ea4d9ab378b06eaf524414))


### Refactoring

* **bottom-navigation:** reset variant height ([d0f5ba5](https://github.com/varletjs/varlet/commit/d0f5ba5222bd8599f9d429b33a3ad2908cbd7bcf))
* **table:** clean useless styles ([#1543](https://github.com/varletjs/varlet/issues/1543)) ([dd97fbc](https://github.com/varletjs/varlet/commit/dd97fbcf7a5b0bb0685c2889ff56fd795eec7c84))
* **table:** remove useless style ([#1542](https://github.com/varletjs/varlet/issues/1542)) ([f34a9f4](https://github.com/varletjs/varlet/commit/f34a9f4655ce04a6a029ae332bc149dbedb5a8dd))
* **use, shared:** remove exports * matcher ([bb653a2](https://github.com/varletjs/varlet/commit/bb653a28231e6fee76172e4df7170909ee1cfc19))
* **vite-plugin/inlineCss:** remove deadcode ([#1546](https://github.com/varletjs/varlet/issues/1546)) ([fe4135a](https://github.com/varletjs/varlet/commit/fe4135ab5340d07264404b913acb44edb6a9106c))

## [3.1.4](https://github.com/varletjs/varlet/compare/v3.1.3...v3.1.4) (2024-03-18)


### Bug Fixes

* **space:** set the default width of child elements under space to auto ([#1538](https://github.com/varletjs/varlet/issues/1538)) ([bfd8af7](https://github.com/varletjs/varlet/commit/bfd8af77c5a65094ae61838b5aba3b826badc30f))


### Features

* **table:** support --table-thead-th-text-align ([#1536](https://github.com/varletjs/varlet/issues/1536)) ([467033c](https://github.com/varletjs/varlet/commit/467033ce666d212579f1bba276878e3a7b2b8fe3))

## [3.1.3](https://github.com/varletjs/varlet/compare/v3.1.2...v3.1.3) (2024-03-15)


### Bug Fixes

* **back-top:** update backTop component visibility after mounting ([#1528](https://github.com/varletjs/varlet/issues/1528)) ([10f5432](https://github.com/varletjs/varlet/commit/10f54320d602162aec2da593917d714bb4a625af))
* fix the Sticky component error on first navigation ([#1530](https://github.com/varletjs/varlet/issues/1530)) ([d568ae4](https://github.com/varletjs/varlet/commit/d568ae411fe2c7f1d13d7c2dd371c6437e5e2d94))
* **space:** set default width to 100% for each child element when direction is column ([#1527](https://github.com/varletjs/varlet/issues/1527)) ([63825ac](https://github.com/varletjs/varlet/commit/63825acf4590b5d2838ecf56b86fde279686f3b6))


### Features

* new package varlet-preset-unocss ([57f02a7](https://github.com/varletjs/varlet/commit/57f02a7d8467f48255b308fdc437eaab7ba05786))


### Refactoring

* **test:** mock performan.now ([#1532](https://github.com/varletjs/varlet/issues/1532)) ([581cf14](https://github.com/varletjs/varlet/commit/581cf1438fd82a1ea9d3a804d012f8ccfc9c76c3))

## [3.1.2](https://github.com/varletjs/varlet/compare/v3.1.1...v3.1.2) (2024-03-10)

## [3.1.1](https://github.com/varletjs/varlet/compare/v3.1.0...v3.1.1) (2024-03-10)

# [3.1.0](https://github.com/varletjs/varlet/compare/v3.0.7...v3.1.0) (2024-03-10)


### Bug Fixes

* **dialog:** hidden corners when border radius isn't empty ([#1509](https://github.com/varletjs/varlet/issues/1509)) ([61e4707](https://github.com/varletjs/varlet/commit/61e4707de55b44e069b6cb724eabf699d38f71bd))
* **hover:**  don't update style when no element for nuxt ([#1516](https://github.com/varletjs/varlet/issues/1516)) ([c31a687](https://github.com/varletjs/varlet/commit/c31a6871fb7c968c793330e16a6ed9997cbc1290))
* **hover:** don't clear style when element is empty for nuxt ([#1512](https://github.com/varletjs/varlet/issues/1512)) ([cac34b5](https://github.com/varletjs/varlet/commit/cac34b5b5cca7cf5dd079c4f8e0157486681e122))
* **input:** the clear event cannot be invoked when using the clear-ic… ([#1491](https://github.com/varletjs/varlet/issues/1491)) ([42b8bb7](https://github.com/varletjs/varlet/commit/42b8bb7a531d81a9774c01e3fc62b2e8dd2ef875))
* **overlay:** fix overlazy z-index ([16d906b](https://github.com/varletjs/varlet/commit/16d906b89c74f1e13f5b225bfdcc47ea11878a81))
* **paper:** update css var default value of  paper  ([#1505](https://github.com/varletjs/varlet/issues/1505)) ([448c4b8](https://github.com/varletjs/varlet/commit/448c4b85d2ae8df17d9062e49e49f20b3345f36e))
* **ripple:** touch event detection error ([1e4da4a](https://github.com/varletjs/varlet/commit/1e4da4a09b6bcd3990e6bcace901170a418c4f37))
* **select:** the clear event cannot be invoked when using the clear-i… ([#1506](https://github.com/varletjs/varlet/issues/1506)) ([bd46cad](https://github.com/varletjs/varlet/commit/bd46cad6d6da375572232cd7314170a6a471e85e))
* **switch:** disable ripple when in readonly state ([2a4aff7](https://github.com/varletjs/varlet/commit/2a4aff7820ee58347d72eea47212180354e97c3d))
* **ui/button:** button loading icon size follows button ([#1524](https://github.com/varletjs/varlet/issues/1524)) ([2b526d3](https://github.com/varletjs/varlet/commit/2b526d31d0a0ad1160669928797b1101c967c0d6))


### Features

* **action-sheet:** support hover effect ([18f28c2](https://github.com/varletjs/varlet/commit/18f28c251645e6dde43e742fba955505e5d7dbaa))
* **action-sheet:** support keyboard escape ([615cb73](https://github.com/varletjs/varlet/commit/615cb737bb80d3dabe9f0524f16b6732667a5200))
* **checkbox:** support keyboard navigation ([#1484](https://github.com/varletjs/varlet/issues/1484)) ([dc7c91f](https://github.com/varletjs/varlet/commit/dc7c91fc55f7825da5a21c60373f6ae6a3bee0ef))
* **cli/icons:** support build icons watch mode ([065d0e5](https://github.com/varletjs/varlet/commit/065d0e5e6946ac57063711058f9778e16299b7df))
* **image-preview:** support keyboard escape ([92a7b17](https://github.com/varletjs/varlet/commit/92a7b17eb35f10ce0595a29df6472fe30c93065f))
* **link:** support --link-focus-opacity ([b52392f](https://github.com/varletjs/varlet/commit/b52392f90b8f33d9dba8528f47147e8436b35411))
* **link:** support choose by keyboard ([#1489](https://github.com/varletjs/varlet/issues/1489)) ([f6c3d6d](https://github.com/varletjs/varlet/commit/f6c3d6d9e4f6dc5af8923493e1ffb81e950ef6aa))
* **menu-select:** support keyboard navigation ([68b23dc](https://github.com/varletjs/varlet/commit/68b23dca597f0296bc520f65f07cdc0e9c6f70c5))
* **menu:** support escape close ([c0734df](https://github.com/varletjs/varlet/commit/c0734df73f3237d2c90a24dbbb50fa68a89dd5e6))
* **overlay:** support keyboard escape close ([a12f978](https://github.com/varletjs/varlet/commit/a12f978bbfcb3055f92d66bb463250c8a58c04a4))
* **pager:** support --paper-border-radius ([#1500](https://github.com/varletjs/varlet/issues/1500)) ([1cc94cd](https://github.com/varletjs/varlet/commit/1cc94cdefa6597188902a76ba3127030b635e14b))
* **picker:** support keyboard escape for functional ([4faa3a4](https://github.com/varletjs/varlet/commit/4faa3a4c759d3eb37e6b7854643d2de7134d6b5c))
* **popup, dialog:** support keyboard close ([ccae094](https://github.com/varletjs/varlet/commit/ccae09443b0be5427450e1692c0af4d039747556))
* **radio:** support keyboard navigation ([0c17e74](https://github.com/varletjs/varlet/commit/0c17e742f3fc31e652d90f19c6235d2120098296))
* **select:** support keyboard navigation and new allow icon slots data menuOpen ([ee277ce](https://github.com/varletjs/varlet/commit/ee277ce91e0e245c8195ee403af2aaa154d66192))
* **slider:** support adjust value by keyboard ([#1493](https://github.com/varletjs/varlet/issues/1493)) ([#1508](https://github.com/varletjs/varlet/issues/1508)) ([7f5a34e](https://github.com/varletjs/varlet/commit/7f5a34e999f11cbb1765b18abbb81832fcd6460d))
* **switch:** support switch by keyboard ([#1490](https://github.com/varletjs/varlet/issues/1490)) ([b58d30f](https://github.com/varletjs/varlet/commit/b58d30fe685ae2056bb4198f25de85b75a1f2721))
* **tab:** support --tab-active-font-size and --tab-active-font-weight ([#1501](https://github.com/varletjs/varlet/issues/1501)) ([dfb66f5](https://github.com/varletjs/varlet/commit/dfb66f5e8027eaf682bece40fb79adc3d640014a))
* **ui/datePicker:** support costom title-date "justify-content" attribute ([#1523](https://github.com/varletjs/varlet/issues/1523)) ([5f3980e](https://github.com/varletjs/varlet/commit/5f3980e7a25987870ae5e4abc99ab59fb3cb7c11))
* **ui/timePicker:** support costom time container "justify-content" attribute ([#1522](https://github.com/varletjs/varlet/issues/1522)) ([0cac862](https://github.com/varletjs/varlet/commit/0cac86258945a529857164f73b8276edf08e4ad2))
* **uploader:** support chooseFile by keyboard ([4120efc](https://github.com/varletjs/varlet/commit/4120efc1b54e56edb6839e8bc2f08438ced2a25e))


### Refactoring

* **action-sheet:** remove unused import ([#1502](https://github.com/varletjs/varlet/issues/1502)) ([6cd7610](https://github.com/varletjs/varlet/commit/6cd7610bd59939ab5e3cfae40589bc86db7275e7))
* add host element for focusChildElementByKey ([0adef81](https://github.com/varletjs/varlet/commit/0adef81dae686272af59f078218f89f372d7e615))
* **checkbox:** change focus element ([8d20250](https://github.com/varletjs/varlet/commit/8d202509322de8b2f0b5da24de867be2518563dc))
* cleanup code ([57b2ba0](https://github.com/varletjs/varlet/commit/57b2ba080f0458f5c61b02e84579e9c40eff050e))
* **cli:** update create command ([#1498](https://github.com/varletjs/varlet/issues/1498)) ([e313805](https://github.com/varletjs/varlet/commit/e3138052adfc9f2ad0ef3c078d963f6b24614af8))
* **focusChildElementByKey:** exclude disabled attr ([e7bc0df](https://github.com/varletjs/varlet/commit/e7bc0dfe9f0ac296e14a4c969747d9d5424390ae))
* **focusChildElementByKey:** support ArrowLeft ArrowRight ([8e78010](https://github.com/varletjs/varlet/commit/8e78010c903566c8087b97425916862e6be13cdd))
* focusing effect depends on hover overlay ([207ceb3](https://github.com/varletjs/varlet/commit/207ceb36f69cffc9a339c3326714855977852ec6))
* **menu:** add tabindex ([dbbe468](https://github.com/varletjs/varlet/commit/dbbe4682e07da506e0d4e0152ea3a02d3d4adb49))
* optimize code ([#1526](https://github.com/varletjs/varlet/issues/1526)) ([7c391a5](https://github.com/varletjs/varlet/commit/7c391a5bc7db00e5cc85d57a05fd16112e3d72db))
* refactor context stack by z-index ([9e9a255](https://github.com/varletjs/varlet/commit/9e9a25532d0b4ea45072842be9bf0ae16ced7f57))
* refactor focusing behavior ([547c6ba](https://github.com/varletjs/varlet/commit/547c6ba18ad286368403b72ab062a0b03423cb79))
* remove arrow left and right supported ([21bd846](https://github.com/varletjs/varlet/commit/21bd84673d1b63adf6e9c736238146dfb09495cf))
* **select:** remove unuseful focus ([b254eba](https://github.com/varletjs/varlet/commit/b254ebaecb881d1f1230f8bcbc6f524a1ad965f8))
* **select:** revert showMenu value ([918e220](https://github.com/varletjs/varlet/commit/918e220d4f233e28b0f2ba2f51b1ba965e632f8c))
* **switch:** change focus element ([beebf25](https://github.com/varletjs/varlet/commit/beebf250aa85b2a1b63a8e8daa7cdf1de991fb05))
* unique uid on the stack ([8a8ae77](https://github.com/varletjs/varlet/commit/8a8ae7704f09fd0602a68dc6b2236b01f7625e45))
* **uploader:** optimize code ([933c5bd](https://github.com/varletjs/varlet/commit/933c5bddace874702775b5844e24ea45e49498a2))
* **uploader:** remove unused import ([#1492](https://github.com/varletjs/varlet/issues/1492)) ([420ded8](https://github.com/varletjs/varlet/commit/420ded80166f5b70e1b1bedfde57316728ec9cfd))

## [3.0.7](https://github.com/varletjs/varlet/compare/v3.0.6...v3.0.7) (2024-03-03)


### Bug Fixes

* **ripple:** touch event detection error ([69727fa](https://github.com/varletjs/varlet/commit/69727fa583c4418d17b7a37c0aef7d29e9b4c4ae))

## [3.0.6](https://github.com/varletjs/varlet/compare/v3.0.5...v3.0.6) (2024-02-27)


### Bug Fixes

* fix field position error ([0f675ba](https://github.com/varletjs/varlet/commit/0f675bab094be33d5a09f8ca8c8a2a3a2c91258c))

## [3.0.5](https://github.com/varletjs/varlet/compare/v3.0.4...v3.0.5) (2024-02-27)


### Bug Fixes

* fix field legend width computed error in some browser ([a7adf42](https://github.com/varletjs/varlet/commit/a7adf42195ecf6528e6f3754a5aebab6325c1739))

## [3.0.4](https://github.com/varletjs/varlet/compare/v3.0.3...v3.0.4) (2024-02-23)


### Bug Fixes

* **menu:** resize host size on window resize ([d3c0845](https://github.com/varletjs/varlet/commit/d3c084574850b0c1b1daefa82a6a775451270451))


### Features

* **app-bar:** support props.fixed and props.zIndex ([49737a2](https://github.com/varletjs/varlet/commit/49737a293fe731e5447b590b17a7e7c723c3547d))
* **image:** support referrerpolicy ([#1476](https://github.com/varletjs/varlet/issues/1476)) ([519a08e](https://github.com/varletjs/varlet/commit/519a08e28445f6c34031c03f052c644c6ff131e9))
* support new base css vars and improve ripple and button keyboard effect ([973777d](https://github.com/varletjs/varlet/commit/973777d78f4094490fe6d27454f06f52bb6ec38c))


### Refactoring

* fix typo ([2084272](https://github.com/varletjs/varlet/commit/2084272cfd1c84e9c932fddde817d373db68d327))

## [3.0.3](https://github.com/varletjs/varlet/compare/v3.0.2...v3.0.3) (2024-02-21)


### Performance Improvements

* **avatar:** improve accessibility ([#1467](https://github.com/varletjs/varlet/issues/1467)) ([48c5d0e](https://github.com/varletjs/varlet/commit/48c5d0ec5e0d85c7e42be53779d32d6a06424ca1))
* **image-preview:** improve accessibility ([#1468](https://github.com/varletjs/varlet/issues/1468)) ([a25cf4f](https://github.com/varletjs/varlet/commit/a25cf4f51ae70edcf46a3f422d811bd95e696e43))
* **image:** improve accessibility ([#1466](https://github.com/varletjs/varlet/issues/1466)) ([c0d0039](https://github.com/varletjs/varlet/commit/c0d00399103dbfb06e3c0528c8574e32cda803c1))
* **uploader:** improve accessibility ([#1469](https://github.com/varletjs/varlet/issues/1469)) ([64d543b](https://github.com/varletjs/varlet/commit/64d543b2e9ccbba159e07309bf17bcbf3c22178a))

## [3.0.2](https://github.com/varletjs/varlet/compare/v3.0.1...v3.0.2) (2024-02-20)


### Features

* **themes:** support toViewport ([ff2f7d1](https://github.com/varletjs/varlet/commit/ff2f7d12cbde8eff005966fecf764ef08b16af6e))

## [3.0.1](https://github.com/varletjs/varlet/compare/v3.0.0...v3.0.1) (2024-02-19)


### Features

* **cli:** improve release command ([28bc2e3](https://github.com/varletjs/varlet/commit/28bc2e3301c17cc233f7ab310e087e86ca51461b))

# [3.0.0](https://github.com/varletjs/varlet/compare/v2.22.5...v3.0.0) (2024-02-19)


### BREAKING CHANGES

* remove closable prop
* remove ripple prop
* deprecated prop.current
* deprecated prop.cssMode
* deprecated prop.headerColor
* deprecated props.headerColor

* feat(card): support md3

* feat(card): clear background color when use outline mode

* fix(card): fix outline style error on floating

* docs(card): improve docs

* feat: improve success color and support md3 for chip

* feat(badge): support md3

* feat(tooltip): support md3

* docs(badge): clean up docs

* docs: support md3

* docs: support md3

* feat(progress): support md3

* feat(tabs): support md3

* feat(steps): support md3

* feat(divider): support md3

* feat(table, watermark, pagination): support md3

* feat(pagination): fix cssvar

* feat(collapse): support md3

* feat(result): support md3

* docs(index-bar): support md3

* feat(app-bar): support md3

* refactor(cli): improve ui

* feat(bottom-navigation): support md3

* docs(ripple): support md3

* docs(hover): support md3

* docs(drag): support md3

* test: update snap
* deprecated --step-line-size and --step-min-size

* feat(snackbar): support md3

* feat(action-sheet): support md3

* feat(dialog): support md3

* feat(pull-refresh): support md3

* docs(overlay): support md3

* feat(popup): support md3

* feat(picker): support md3

* docs(loading-bar): support md3

* feat(countdown): support md3

* feat(floating-panel): support md3

* feat(back-top): support md3

* feat(select): support md3

* feat(counter): support md3

* refactor(date-picker): rename css var

* feat(switch): support md3

* fix(switch): fix switch ripple fallback color

* feat(slider): support md3

* docs(rate): support md3 and fix docs

* feat(uploader): support md3

* feat(time-picker): support md3

* docs: fix typo

* feat(date-picker): support md3

* refactor(cli): optimize set theme

* test: update snap and optimize docs

* docs: fix menu name

* refactor: remove unuseful file

* docs: support md3

* docs: optimize docs

* chore: fix config

* feat(css-var): support more css var

* test: update snap

* types: update styleVars

* refactor(chip): optimize css var

* refactor(rate): optimize css var

* test: update snap

* refactor(countdown): optimize css var

* refactor(chip): optimize css var

* feat(css-var): support more common css var

* feat(button): support prop.iconContainer

* feat(fab): support icon container

* docs(fab): optimize

* feat(cli): support version tag

* feat(cli): support styleVars command

* refactor(step): optimize css var

* refactor: remove unuseful css var

* feat(time-picker): support md3

* feat(css-vars): support --color-outline

* refactor: rename icon

* refactor(cli): optimize site css var

* refactor(cli): deprecated darkMode option

* fix(playground): fix vite cjs deprecated warning

* refactor(cli): modify themeKey

* docs: fix docs

* refactor(field-decorator): support hint animation when the icon existed and optimize code

* refactor: refactor i18n

* test: fix locale cases

* style: typo error

* docs: fix docs

* docs: fix docs

* docs(loading-bar): fix example

* feat: support more base css var

* feat: support more base css var

* refactor: deprecated --pagination-list-* css vars

* feat: refactor result-border-radius for md3

* test: update


### Features

* v3 ([#1465](https://github.com/varletjs/varlet/issues/1465)) ([5355778](https://github.com/varletjs/varlet/commit/5355778b914d6a92c1fa4d88c81bf4f6758809ab)), closes [#1366](https://github.com/varletjs/varlet/issues/1366) [#1364](https://github.com/varletjs/varlet/issues/1364) [#1362](https://github.com/varletjs/varlet/issues/1362) [#1369](https://github.com/varletjs/varlet/issues/1369) [#1368](https://github.com/varletjs/varlet/issues/1368) [#1367](https://github.com/varletjs/varlet/issues/1367) [#1371](https://github.com/varletjs/varlet/issues/1371) [#1370](https://github.com/varletjs/varlet/issues/1370) [#1373](https://github.com/varletjs/varlet/issues/1373) [#1464](https://github.com/varletjs/varlet/issues/1464)


### Refactoring

* improve docs and refactor switch css var ([9f7917d](https://github.com/varletjs/varlet/commit/9f7917d49d274aefa07f951738fce564a8141528))
* **themes:** refactor to fully css var ([de7512d](https://github.com/varletjs/varlet/commit/de7512d7ef024daf456f79beddb6ef8d3f1ea466))

## [2.22.5](https://github.com/varletjs/varlet/compare/v2.22.4...v2.22.5) (2024-02-19)


### Bug Fixes

* **cli:** fix latest version display ([6be329c](https://github.com/varletjs/varlet/commit/6be329c77c5f293f3437af69372166f612c5542a))

## [2.22.4](https://github.com/varletjs/varlet/compare/v2.22.3...v2.22.4) (2024-02-18)


### Bug Fixes

* fix extname for webpack fully specified resolver ([38595f9](https://github.com/varletjs/varlet/commit/38595f9e25b62739fdffe72b67853b5241a4a4b0))

## [2.22.3](https://github.com/varletjs/varlet/compare/v2.22.2...v2.22.3) (2024-02-14)


### Bug Fixes

* fix mission export ([ce64393](https://github.com/varletjs/varlet/commit/ce64393bfd05713272b41c9496d71bf50cf36397))
* **popup:** correct the value of scrollbar-width ([#1463](https://github.com/varletjs/varlet/issues/1463)) ([b71a97d](https://github.com/varletjs/varlet/commit/b71a97d71bc552edbb9832bd7356bc0903a5fb2f))
* **popup:** in firefox, the popup will have a scrollbar when it pops up ([#1462](https://github.com/varletjs/varlet/issues/1462)) ([b84fbaf](https://github.com/varletjs/varlet/commit/b84fbafca2a56fb283553ffafb8605ed382210e1))
* **ripple:** _ripple may be null in nuxt and add comment ([77c4ddc](https://github.com/varletjs/varlet/commit/77c4ddc3d2c43115e18c982c4e4c901872b9c352))
* scroller may be null in nuxt ([6f72b75](https://github.com/varletjs/varlet/commit/6f72b758001ef1691da8e52f43ed8bd137fe88c1))


### Refactoring

* **cli:** optimize compile process ([cc0c986](https://github.com/varletjs/varlet/commit/cc0c986fc380b112066c15fd06d9aaf1b41dc815))

## [2.22.2](https://github.com/varletjs/varlet/compare/v2.22.1...v2.22.2) (2024-02-03)


### Bug Fixes

* fix defineProps limited to a type literal or a reference to a local interface and close [#1458](https://github.com/varletjs/varlet/issues/1458) ([64ba155](https://github.com/varletjs/varlet/commit/64ba155a5b3e2a9e828ed60dbb38b8d30b067070))
* **index-bar:** init scroller when start to scroll for nuxt ([#1460](https://github.com/varletjs/varlet/issues/1460)) ([9b9ad8c](https://github.com/varletjs/varlet/commit/9b9ad8c35c15cc9fce14536d9f80ff14fe8592b7))
* **index-bar:** recollect anchor name that is empty from anchors when length changes ([#1459](https://github.com/varletjs/varlet/issues/1459)) ([e61d046](https://github.com/varletjs/varlet/commit/e61d046b55e4e4e84822aec352d88737c1fac544))
* **sticky:** init scroller when start scrolling to avoid the value of scroller becomes window for nuxt ([#1456](https://github.com/varletjs/varlet/issues/1456)) ([43637b9](https://github.com/varletjs/varlet/commit/43637b9d440ec7bdf601e3f0b1e89eef36ed86d5))


### Refactoring

* optimize code ([60e0e07](https://github.com/varletjs/varlet/commit/60e0e07d2c6215e0cf1d6b0abe0d5eb4f739671c))
* **sticky:** optimize code ([5e250d9](https://github.com/varletjs/varlet/commit/5e250d901f98d1c1fac896f579aec4accb55eb20))

## [2.22.1](https://github.com/varletjs/varlet/compare/v2.22.0...v2.22.1) (2024-01-29)


### Bug Fixes

* fix changedTouches patched error ([3189038](https://github.com/varletjs/varlet/commit/31890383fcae39b741e67fb751eeca5ad87a4bad))
* **index-bar:** index anchor offsetTop get timing error and close [#1436](https://github.com/varletjs/varlet/issues/1436)([#1449](https://github.com/varletjs/varlet/issues/1449)) ([f124799](https://github.com/varletjs/varlet/commit/f1247996deddb29d47998b4bc16238d700cfdf58))
* **menu:** don't compute hostSize when no host element ([#1448](https://github.com/varletjs/varlet/issues/1448)) ([469257a](https://github.com/varletjs/varlet/commit/469257ae45b935376ca07573f3a00527281f8096))
* **tabs:** hidden scrollbar for firefox ([#1454](https://github.com/varletjs/varlet/issues/1454)) ([a9aef80](https://github.com/varletjs/varlet/commit/a9aef800611c562ded0e585a34932fa98bf7800c))


### Refactoring

* **bottom-navigation-item:** optimize code ([#1437](https://github.com/varletjs/varlet/issues/1437)) ([9757eb1](https://github.com/varletjs/varlet/commit/9757eb19241ca4e11570f174ce7df4645588fe11))

# [2.22.0](https://github.com/varletjs/varlet/compare/v2.21.0...v2.22.0) (2024-01-21)


### Bug Fixes

* **cli:** add missing shared package for lint command and remove useless path ([#1413](https://github.com/varletjs/varlet/issues/1413)) ([84bff4a](https://github.com/varletjs/varlet/commit/84bff4af001ec9668e7b7fdac47b660572c15c42))
* **cli:** icons build failure in windows ([#1411](https://github.com/varletjs/varlet/issues/1411)) ([e5240b0](https://github.com/varletjs/varlet/commit/e5240b0d76af340fde860d57021811dd6a96285a))
* **picker:** changed value invalid on v-model mode and close [#1415](https://github.com/varletjs/varlet/issues/1415) ([a25411e](https://github.com/varletjs/varlet/commit/a25411edde986ac5812d571d88647fe3fa59809e))
* **popup:** allow click through when overlay is false ([#1416](https://github.com/varletjs/varlet/issues/1416)) ([cb1132f](https://github.com/varletjs/varlet/commit/cb1132f5c1bd1cc674903e02e3fd47c5302638ed))
* **snackbar:** hidden icon and action element when no related slots and remove useless code ([#1406](https://github.com/varletjs/varlet/issues/1406)) ([e2bb1bb](https://github.com/varletjs/varlet/commit/e2bb1bb8dcb8225a2edb2b6aca27e739dde5b017))


### Features

* **index-bar:** support anchor name slot ([#1400](https://github.com/varletjs/varlet/issues/1400)) ([649c11b](https://github.com/varletjs/varlet/commit/649c11b049f31de339fbb42bdb14992abe55322b))
* **locale:** support Persian language ([#1423](https://github.com/varletjs/varlet/issues/1423)) ([dc4381c](https://github.com/varletjs/varlet/commit/dc4381c4b389df15abe649b18a2e983136d4dede)), closes [#1419](https://github.com/varletjs/varlet/issues/1419)
* **snackbar:** support --snackbar-icon-margin ([#1425](https://github.com/varletjs/varlet/issues/1425)) ([5cc91be](https://github.com/varletjs/varlet/commit/5cc91be786dc6f09c27c1e1f0ee97566ec40a688))
* **switch:** support lazyChange and validateTrigger prop and onBefor… ([#1412](https://github.com/varletjs/varlet/issues/1412)) ([d109e69](https://github.com/varletjs/varlet/commit/d109e697520c8797d63d13e83b7104e52ba02b38))
* **vscode-extension:** improve to not show statusBarItem if dependencies are not install varlet/ui ([#1421](https://github.com/varletjs/varlet/issues/1421)) ([6a052d2](https://github.com/varletjs/varlet/commit/6a052d253d26761c7e9ae68e703570dd304d732f))


### Refactoring

* **ui:** use import type replace import for interface ([#1404](https://github.com/varletjs/varlet/issues/1404)) ([417ec34](https://github.com/varletjs/varlet/commit/417ec34506a3fdee28a4b8101f44db813c315763))

# [2.21.0](https://github.com/varletjs/varlet/compare/v2.20.7...v2.21.0) (2024-01-12)


### Bug Fixes

* **card:** fix card floated z-index ([71379b2](https://github.com/varletjs/varlet/commit/71379b2a3100187866ba57a1d56d47e1ac6d6420))
* **checkbox:** hidden default element when no default slot ([#1390](https://github.com/varletjs/varlet/issues/1390)) ([98d9e9c](https://github.com/varletjs/varlet/commit/98d9e9c029453cb3b08a42db88e47eecd9b7f8ea))
* **collapse-transition:** use transition height instead of the all ([e29ff54](https://github.com/varletjs/varlet/commit/e29ff54fadfa43d513c2c7f480bf918c253ca5b0))
* **image-preview:** hidden extra element when no extra slot ([#1387](https://github.com/varletjs/varlet/issues/1387)) ([44ce14e](https://github.com/varletjs/varlet/commit/44ce14e0837e09135a3b9916e41aed4eca66a957))
* **radio:** hidden default element when no default slot ([#1389](https://github.com/varletjs/varlet/issues/1389)) ([05b090d](https://github.com/varletjs/varlet/commit/05b090d90aae7a2fee07e80fc1c1527e1fdcf744))
* **step:** hidden default element when no default slot ([#1399](https://github.com/varletjs/varlet/issues/1399)) ([7a1d902](https://github.com/varletjs/varlet/commit/7a1d902973994df9d4f04d5e85a2cd400576b7bb))


### Features

* **ui:** support CollapseTransition component ([#1384](https://github.com/varletjs/varlet/issues/1384)) ([3987dd2](https://github.com/varletjs/varlet/commit/3987dd2396201a1eb7f15e7797c1b2e074bc83a6))


### Refactoring

* **collapse-transition:** clean code ([#1397](https://github.com/varletjs/varlet/issues/1397)) ([4bbbaeb](https://github.com/varletjs/varlet/commit/4bbbaeba8b6459717e808d9ba70aa05ff24f6940))

## [2.20.7](https://github.com/varletjs/varlet/compare/v2.20.6...v2.20.7) (2024-01-08)


### Bug Fixes

* **picker:** fix picker v-model value matched error in cascade mode and close [#1386](https://github.com/varletjs/varlet/issues/1386) ([ff1c0f1](https://github.com/varletjs/varlet/commit/ff1c0f15f7ea2c57845870dae757f22fa92fe633))


### Refactoring

* **ui:** replace HTMLDivElement with HTMLElement ([#1385](https://github.com/varletjs/varlet/issues/1385)) ([bd6f8c8](https://github.com/varletjs/varlet/commit/bd6f8c83fdcb07b1b84a452f224d363bf79b0e29))

## [2.20.6](https://github.com/varletjs/varlet/compare/v2.20.5...v2.20.6) (2024-01-05)


### Bug Fixes

* **bottom-navigation:** fix dark theme css var ([dfc0a0f](https://github.com/varletjs/varlet/commit/dfc0a0fbd8e6f29b461308bd325356eb5d6f9d7f))
* **cli:** fix config default value ([374f696](https://github.com/varletjs/varlet/commit/374f696190f3ec052ac35366630a6d6f4daa838f))
* **playground:** add missing import for Dialog component ([#1381](https://github.com/varletjs/varlet/issues/1381)) ([37bb6b1](https://github.com/varletjs/varlet/commit/37bb6b1f52bd0e4f48f961603190327f7a325cda))
* **rate:** fix typo ([60ec1c1](https://github.com/varletjs/varlet/commit/60ec1c1666fa939c5805d61fbe651d5d66ab1343))
* **snackbar:** hidden action element when no action slot ([#1372](https://github.com/varletjs/varlet/issues/1372)) ([7440c3d](https://github.com/varletjs/varlet/commit/7440c3db1d564826d5cde153fbbf9a22ffd0f6b9))
* **swipe:** remove unuseful dispatch to fix duration blink ([e565454](https://github.com/varletjs/varlet/commit/e565454ba2eb63a829e472e2030cbe82daec53b1))


### Features

* **icons:** support arrow up bold box icon ([#1382](https://github.com/varletjs/varlet/issues/1382)) ([4d86554](https://github.com/varletjs/varlet/commit/4d865549f612f690c710d8d642ea3f962b5d37fd))
* **input, select:** support clear icon slot ([#1378](https://github.com/varletjs/varlet/issues/1378)) ([9399a7e](https://github.com/varletjs/varlet/commit/9399a7e76433868564152617ee85ebfb2f6257fd))
* support versions ([bd12461](https://github.com/varletjs/varlet/commit/bd124619a5d0a16d4e97d8caf633272d09cf5c65))


### Refactoring

* **cli:** fix generators config ([f192ccb](https://github.com/varletjs/varlet/commit/f192ccb8d3e25ae61bf6c076126e495f7c107252))
* **cli:** rename version name ([bb8e0d5](https://github.com/varletjs/varlet/commit/bb8e0d507614c58102d326f0e81854bee5883a55))
* **swipe:** optimize code ([26e2da6](https://github.com/varletjs/varlet/commit/26e2da66b654b969e4acbf9e68758ae39b2f421a))

## [2.20.5](https://github.com/varletjs/varlet/compare/v2.20.4...v2.20.5) (2023-12-29)


### Bug Fixes

* **cli:** fix vitest coverage exclude ([c6aefa5](https://github.com/varletjs/varlet/commit/c6aefa51f719dc3c7eb6bd6d481e0b9fddbab464))
* **cli:** site error on theme change ([9b0dd9b](https://github.com/varletjs/varlet/commit/9b0dd9b6e4407d5f211cc673ed9a864519808ec7))
* **select:** fix scroller background color ([8cc85d2](https://github.com/varletjs/varlet/commit/8cc85d2fb44505e3da7adf3eae03e58cc723fed1))
* **uploader:** mission swipe style deps ([7b6f5f6](https://github.com/varletjs/varlet/commit/7b6f5f632c449b272e8c6f7df2ecca15930aec5b))


### Features

* **icons:** support bookmark icon ([#1361](https://github.com/varletjs/varlet/issues/1361)) ([1980232](https://github.com/varletjs/varlet/commit/1980232af781979b865d852059070a76c60e85a9))
* **menu:** support --menu-border-radius ([18ee52a](https://github.com/varletjs/varlet/commit/18ee52af4cac3f6336b2844981632d24a8d00d47))
* **time-picker:** support actions slot ([#1360](https://github.com/varletjs/varlet/issues/1360)) ([e400fc8](https://github.com/varletjs/varlet/commit/e400fc87f604f033f3bd64a7aa4e9048d22dd6df))


### Refactoring

* **vite-plugins:** replace transform with handler ([a183520](https://github.com/varletjs/varlet/commit/a183520826f8d58c18e479a160d2f0409b4146a7))

## [2.20.4](https://github.com/varletjs/varlet/compare/v2.20.3...v2.20.4) (2023-12-21)


### Features

* **cli/icons:** support entry output genPng options ([f551733](https://github.com/varletjs/varlet/commit/f5517336270168f08e11ea3195d33cc7768a93b2))
* **icons:** support canlendar month icon ([#1359](https://github.com/varletjs/varlet/issues/1359)) ([95fe846](https://github.com/varletjs/varlet/commit/95fe8462a90553948380c419f3556baef23a743e))

## [2.20.3](https://github.com/varletjs/varlet/compare/v2.20.2...v2.20.3) (2023-12-20)


### Bug Fixes

* **steps:** disassociate --step-tag-size, --step-line-gap, --step-min-size and --step-line-size ([#1357](https://github.com/varletjs/varlet/issues/1357)) ([a48cbc4](https://github.com/varletjs/varlet/commit/a48cbc4c488a32f5069e5f87498d21f9db12cefd))


### Features

* **shared, use:** support cjs format ([24975f0](https://github.com/varletjs/varlet/commit/24975f0f919846e6509c1d8457f24460e09eb0a7))

## [2.20.2](https://github.com/varletjs/varlet/compare/v2.20.1...v2.20.2) (2023-12-17)

## [2.20.1](https://github.com/varletjs/varlet/compare/v2.20.0...v2.20.1) (2023-12-15)


### Bug Fixes

* **site:** hide link when menu type is title ([#1351](https://github.com/varletjs/varlet/issues/1351)) ([a9a5454](https://github.com/varletjs/varlet/commit/a9a54544cbf180e64ada4274bcc885282dd4aa8a))
* **slider:** remove the logic for thumb to double in size ([#1350](https://github.com/varletjs/varlet/issues/1350)) ([5710b84](https://github.com/varletjs/varlet/commit/5710b848e3e35dc7e65e8a3e9e1899828642f008))


### Features

* **icons:** support chat icon ([#1347](https://github.com/varletjs/varlet/issues/1347)) ([d50da0d](https://github.com/varletjs/varlet/commit/d50da0d44555759d50f9e0fc7ffa66985ffd7c94))
* **icons:** support download icon and share icon ([#1344](https://github.com/varletjs/varlet/issues/1344)) ([00f2d89](https://github.com/varletjs/varlet/commit/00f2d895e1d0b87ea8b4f3b875e9fc061cdbf2a9))
* **icons:** support tag icon ([#1346](https://github.com/varletjs/varlet/issues/1346)) ([dd16d6b](https://github.com/varletjs/varlet/commit/dd16d6b1be9e65af64a35e1dc37e13a15ac628af))
* **site:** add changelog enrty in header for pc ([#1345](https://github.com/varletjs/varlet/issues/1345)) ([604685b](https://github.com/varletjs/varlet/commit/604685b3003551e98c8c4bd462a0e0b118e0431a))
* **slider:** support --slider-track-border-radius and --slider-track-fill-border-radius ([#1349](https://github.com/varletjs/varlet/issues/1349)) ([b3232a0](https://github.com/varletjs/varlet/commit/b3232a09c44d740dea52c5c0e081b365190b5fe2))

# [2.20.0](https://github.com/varletjs/varlet/compare/v2.19.3...v2.20.0) (2023-12-08)


### Bug Fixes

* **cli:** filter non-svg files ([#1338](https://github.com/varletjs/varlet/issues/1338)) ([b0acea5](https://github.com/varletjs/varlet/commit/b0acea533f7b7c42036d7b1129d0e5a0d1780a49))
* **cli:** optimize judgment condition to filter svg files ([#1339](https://github.com/varletjs/varlet/issues/1339)) ([aacedb8](https://github.com/varletjs/varlet/commit/aacedb8d2865d8b27fb96c45d07203a0552d58d8))


### Features

* **cli:** support create command internal mode and fix docs i18n error ([0d42d01](https://github.com/varletjs/varlet/commit/0d42d01fd6668eced6fd5369e442ee7c76b7b13a))
* **collapse:** support toggleAll method ([#1315](https://github.com/varletjs/varlet/issues/1315)) ([04498fc](https://github.com/varletjs/varlet/commit/04498fcf62acb38b76a53844ca8c782078d93b51))
* **date-picker:** support action slot ([#1321](https://github.com/varletjs/varlet/issues/1321)) ([8a66849](https://github.com/varletjs/varlet/commit/8a66849b7662d567d693a60ad2e72b421d186ad6))
* **icons:** support history icon ([#1336](https://github.com/varletjs/varlet/issues/1336)) ([5aefc6b](https://github.com/varletjs/varlet/commit/5aefc6bff948cbc40438d9134f256f5b359e7999))


### Refactoring

* **cli:** use varlet-release to lint commit ([#1341](https://github.com/varletjs/varlet/issues/1341)) ([17914cc](https://github.com/varletjs/varlet/commit/17914ccaa1dfcd3855ddab9de8787a2bfc27532b))
* **collapse:** clean code ([0256f8a](https://github.com/varletjs/varlet/commit/0256f8ab7a3da41445e7eca4ac22c7d77fba6eb5))
* **date-picker:** rename --picker-action-padding to --picker-actions-padding ([2fa537d](https://github.com/varletjs/varlet/commit/2fa537d5ae114750046a2cf8ca0921a0ff407041))

## [2.19.3](https://github.com/varletjs/varlet/compare/v2.19.2...v2.19.3) (2023-12-01)


### Bug Fixes

* **input:** user input display error on type is number and close [#1322](https://github.com/varletjs/varlet/issues/1322) ([8a0bb99](https://github.com/varletjs/varlet/commit/8a0bb992d4bd2cb44683f3f7b904674590e06329))


### Features

* **badge:** support offsetX and offsetY ([#1313](https://github.com/varletjs/varlet/issues/1313)) ([605a1af](https://github.com/varletjs/varlet/commit/605a1afb5408c1ea5a3bd7b473264fa371342740))
* **shared:** support removeArrayBlank ([fe3ddd2](https://github.com/varletjs/varlet/commit/fe3ddd2880e8055dff036423a41d9756f760df8f))


### Refactoring

* **collapse:** clean code ([935bfbf](https://github.com/varletjs/varlet/commit/935bfbf19e6b82610b08fee7c4e96f353a3cd7bb))
* **collapse:** don't process array when accordion is true ([#1325](https://github.com/varletjs/varlet/issues/1325)) ([2145e12](https://github.com/varletjs/varlet/commit/2145e122e853986daab1396cff60d4e993f9fb77))
* **collapse:** merge logic of matching names and indexes ([#1318](https://github.com/varletjs/varlet/issues/1318)) ([9937c20](https://github.com/varletjs/varlet/commit/9937c2050ab5413e636b3a73387eb9754bab8a17))
* **collapse:** optimize match name logic ([eea31f6](https://github.com/varletjs/varlet/commit/eea31f633e68cde2aca224bf5568c2de4b31a4e1))
* **collapse:** optimize match name logic ([e0a492b](https://github.com/varletjs/varlet/commit/e0a492b32e52b61b1a014db76da3f3c04020406f))
* **date-picker:** use spread operator to replace concat method ([#1319](https://github.com/varletjs/varlet/issues/1319)) ([77ed726](https://github.com/varletjs/varlet/commit/77ed726b766bbdca07d522b6db83214775f52f16))

## [2.19.2](https://github.com/varletjs/varlet/compare/v2.19.1...v2.19.2) (2023-11-25)


### Bug Fixes

* **index-bar:** fix scroll offset error in window scroller ([9f5483e](https://github.com/varletjs/varlet/commit/9f5483e21fee84bcd3516a2883cc7bc32db12797))
* **shared:** adapt to - and + for isNumeric function ([#1314](https://github.com/varletjs/varlet/issues/1314)) ([094206f](https://github.com/varletjs/varlet/commit/094206fed04b0079a3dffdd3305b23d2723ba466))
* **ssr/input:** fix hydration error in textarea mode ([edaee1e](https://github.com/varletjs/varlet/commit/edaee1ee02d4224b360f774049c0936572a0034f))


### Features

* **badge:** support --badge-dot-width and --badge-dot-height ([#1310](https://github.com/varletjs/varlet/issues/1310)) ([e0d7b00](https://github.com/varletjs/varlet/commit/e0d7b00cb4274acccc5da117c2f76d42d4f5b9d4))
* support extraction of style vars ([aefb12f](https://github.com/varletjs/varlet/commit/aefb12f0c8260c734043b859ae5ea622e47f7098))
* **tab:** support --tab-font-weight ([#1312](https://github.com/varletjs/varlet/issues/1312)) ([fe4fdb3](https://github.com/varletjs/varlet/commit/fe4fdb37f8cc0f06e240e5ebaedf2390424987c6))


### Refactoring

* support camelize case ([2d4c03e](https://github.com/varletjs/varlet/commit/2d4c03e7bd670b03e15ff914674ca197b83ef8dc))

## [2.19.1](https://github.com/varletjs/varlet/compare/v2.19.0...v2.19.1) (2023-11-17)

# [2.19.0](https://github.com/varletjs/varlet/compare/v2.18.4...v2.19.0) (2023-11-17)


### Bug Fixes

* **breadcrumbs:** import missing snackbar component ([#1294](https://github.com/varletjs/varlet/issues/1294)) ([7e81ac3](https://github.com/varletjs/varlet/commit/7e81ac3940e525e8a0953a0a32a3cf9b991777ac))
* **server/countdown:** ensure start function only be called in client ([4100156](https://github.com/varletjs/varlet/commit/41001567d904dd83ce52313b4b922b27b02e4bb2))


### Features

* **badge:** support --badge-content-font-size ([#1286](https://github.com/varletjs/varlet/issues/1286)) ([f2ee14f](https://github.com/varletjs/varlet/commit/f2ee14fd535c37a8ae6fb4af70f4f4367305d252))
* **rate:** support --rate-size ([#1298](https://github.com/varletjs/varlet/issues/1298)) ([157b233](https://github.com/varletjs/varlet/commit/157b233c8c7e98e3bc75e3e3e87df53064f3d9a5))
* **slider:** support custom styles by css var ([#1293](https://github.com/varletjs/varlet/issues/1293)) ([e4b2431](https://github.com/varletjs/varlet/commit/e4b2431fcc0c1eb12b051df1d21aed7855f02b59))
* support static method setPropsDefaults ([1407cef](https://github.com/varletjs/varlet/commit/1407cefeac95c1ff0770fe695413f73c636fec87))
* support static method setPropsDefaults ([#1283](https://github.com/varletjs/varlet/issues/1283)) ([e0ba0fc](https://github.com/varletjs/varlet/commit/e0ba0fc4243974ddebfc48a6fe5025f2955daa21))
* **tabs:** support --tabs-indicator-border-radius ([559e156](https://github.com/varletjs/varlet/commit/559e15603ce06d4c49228790d5ac30f606e4fc77))
* **tab:** support ripple ([#1303](https://github.com/varletjs/varlet/issues/1303)) ([17a8a1e](https://github.com/varletjs/varlet/commit/17a8a1e1bc1997f8820ddc8bf32e987b4eb70320))


### Refactoring

* **cli:** integrated @varlet/release ([03089bb](https://github.com/varletjs/varlet/commit/03089bbae0613edc6ec5473594baf576493bb4c6))
* **link:** optimize code ([#1288](https://github.com/varletjs/varlet/issues/1288)) ([76706d1](https://github.com/varletjs/varlet/commit/76706d1064bde5605fe8296e7e2a53346704235d))
* **setPropsDefaults:** optimize props set logic ([8e7a131](https://github.com/varletjs/varlet/commit/8e7a1318811b0bacec2dd32de2b1d82c1220bac3))

## [2.18.4](https://github.com/varletjs/varlet/compare/v2.18.3...v2.18.4) (2023-11-10)


### Bug Fixes

* **date-picker:** import sticky component ([6fe6ac6](https://github.com/varletjs/varlet/commit/6fe6ac67c2d34c8518b646e1aba98050f777614e))

## [2.18.3](https://github.com/varletjs/varlet/compare/v2.18.2...v2.18.3) (2023-11-09)


### BREAKING CHANGES

* **date-picker:** support year panel and close [#1242](https://github.com/varletjs/varlet/issues/1242)


### Bug Fixes

* **button:** remove hover and ripple effect while loading ([#1275](https://github.com/varletjs/varlet/issues/1275)) ([591a8b2](https://github.com/varletjs/varlet/commit/591a8b2c1a3d63e1ef723a81563c2bcef3487efc))
* **date-picker:** panel-header add sticky ([0212fee](https://github.com/varletjs/varlet/commit/0212feebb4144ad3e5d853e95baacd22241f8a2e))
* **ui:** correct the return type of toSizeUnit ([#1282](https://github.com/varletjs/varlet/issues/1282)) ([0a2b04a](https://github.com/varletjs/varlet/commit/0a2b04a5b0f7818d24d18d2faf3d3d866afb86ff))


### Features

* **date-picker:** support year panel and close [#1242](https://github.com/varletjs/varlet/issues/1242) ([80dc969](https://github.com/varletjs/varlet/commit/80dc9692bd4c822ba7b9d16765706a782607a42d))
* **image-preview:** support zoom method ([#1262](https://github.com/varletjs/varlet/issues/1262)) ([99a8369](https://github.com/varletjs/varlet/commit/99a8369a875cc74bb7ff08b7b6cded3a1954b901))
* **shared:** support isNumeric and optimize ui elements ([06cda15](https://github.com/varletjs/varlet/commit/06cda15ad3c4a286bb115b309f3a8a5406c0eab6))
* **uploader:** support props.onClickAction ([830264f](https://github.com/varletjs/varlet/commit/830264f90d244858b4c3ee285fbf69758e0bab8c))


### Refactoring

* **ui:** modify the import path of call and useVModel ([#1263](https://github.com/varletjs/varlet/issues/1263)) ([57e4439](https://github.com/varletjs/varlet/commit/57e4439a5b0ad459a1830a850665a86de5efc7d9))


### Reverts

* **date-picker:** revert month-panel modify ([75cbae8](https://github.com/varletjs/varlet/commit/75cbae889a6d534f658f102156c3243c567324e9))

## [2.18.2](https://github.com/varletjs/varlet/compare/v2.18.1...v2.18.2) (2023-11-02)


### Bug Fixes

* **loading:** add missing --loading-color &  support --loading-desc-color ([#1253](https://github.com/varletjs/varlet/issues/1253)) ([0c21498](https://github.com/varletjs/varlet/commit/0c21498ddf83aa555d8145b9685857df5d1751eb))
* **option:** ellipses are not displayed when text overflows ([#1254](https://github.com/varletjs/varlet/issues/1254)) ([8e70fd5](https://github.com/varletjs/varlet/commit/8e70fd5ae32b0ceae92149b5f0fb794abcede483))


### Features

* **cli:** support stub on dev server ([43f61a5](https://github.com/varletjs/varlet/commit/43f61a5b5bca7fe20f845b93fafd99e5e12bc242))
* **countdown:** support --countdown-text-font-size ([#1255](https://github.com/varletjs/varlet/issues/1255)) ([cd4b307](https://github.com/varletjs/varlet/commit/cd4b307238600554a97b2cd0f2da194faa5f9644))
* **shared, use:** support call createNamespaceFn useVModel classes ([daed1e2](https://github.com/varletjs/varlet/commit/daed1e27bd56e2d847394c8f3413e1c06c1cd6b0))
* **shared:** support hasOwn ([fe92b48](https://github.com/varletjs/varlet/commit/fe92b487bdc430b4ebb355847497b660524586a6))
* **swipe:** support --swipe-navigation-z-index ([#1247](https://github.com/varletjs/varlet/issues/1247)) ([1f64a13](https://github.com/varletjs/varlet/commit/1f64a13b7824abfefb166976bcf634f0bbf1657e))


### Refactoring

* **vite-plugins:** replace pinyin to pinyin-pro ([e25a2ab](https://github.com/varletjs/varlet/commit/e25a2ab8e19fb9230b7b6f1e193a478442f18fde))

## [2.18.1](https://github.com/varletjs/varlet/compare/v2.18.0...v2.18.1) (2023-10-27)


### Bug Fixes

* **back-top:** Change type of the click event from MouseEvent to Event ([#1239](https://github.com/varletjs/varlet/issues/1239)) ([4ef2e34](https://github.com/varletjs/varlet/commit/4ef2e34120aec6662ee55fb2df72a477a8ac08e5))
* **chip:** rename closable to closeable ([#1237](https://github.com/varletjs/varlet/issues/1237)) ([7cbe418](https://github.com/varletjs/varlet/commit/7cbe41890a75302924bd68e285a8dcd429703228))
* **date-picker:** fix year panel scroll error ([2ed4eb3](https://github.com/varletjs/varlet/commit/2ed4eb38e7c6d09f17ae2d8541bf348b381d07cd))
* **floating-panel:** fix scroll behavior ([6d953f7](https://github.com/varletjs/varlet/commit/6d953f725d1afac29cf0177d683157b100919ff9))
* **rate:** modify the trigger time of change event & limit the modelValue type to number ([#1243](https://github.com/varletjs/varlet/issues/1243)) ([2137984](https://github.com/varletjs/varlet/commit/21379844624f47ff968848b486b200dd63798a11))
* **switch:** change type of the click event from MouseEvent to Event ([#1241](https://github.com/varletjs/varlet/issues/1241)) ([153e007](https://github.com/varletjs/varlet/commit/153e007c7d97c968454d35a2998f7c1520f95a1b))


### Features

* **date-picker:** replace headColor with titleColor ([#1234](https://github.com/varletjs/varlet/issues/1234)) ([1c2f41a](https://github.com/varletjs/varlet/commit/1c2f41a2ebd49433175a5e49e2312518ae397d37))
* **date-picker:** suport hint ([#1233](https://github.com/varletjs/varlet/issues/1233)) ([870472e](https://github.com/varletjs/varlet/commit/870472e9ce189a5e3ae5ffa75c91de2d11230bfa))
* **time-picker, date-picker:** support custom title height ([#1227](https://github.com/varletjs/varlet/issues/1227)) ([b89ca23](https://github.com/varletjs/varlet/commit/b89ca23788fbe7f0cc7fff0e5ae982cd4a134d5f))
* **time-picker:** support hint ([#1229](https://github.com/varletjs/varlet/issues/1229)) ([65675ad](https://github.com/varletjs/varlet/commit/65675adce8e4dc88bf3cfe8ab0233f1e6eccbf59))
* **time-picker:** support titleColor ([#1230](https://github.com/varletjs/varlet/issues/1230)) ([466951f](https://github.com/varletjs/varlet/commit/466951f58d33aa29c2a24c4b252fda9141d2f5f4))


### Refactoring

* **timer-picker:** change --time-picker-title-hint-font-size to 14px ([dd80053](https://github.com/varletjs/varlet/commit/dd800539404d7121878ef25269e4827ee751f89e))

# [2.18.0](https://github.com/varletjs/varlet/compare/v2.17.1...v2.18.0) (2023-10-19)


### Bug Fixes

* fix warning when event.preventDefault and close [#1212](https://github.com/varletjs/varlet/issues/1212) ([f3955ca](https://github.com/varletjs/varlet/commit/f3955cabfbd6b01c1bfa75b96c3318eab4fc0eb7))
* **floating-panel:** cover the bottom shadow of the panel ([#1224](https://github.com/varletjs/varlet/issues/1224)) ([61e14e8](https://github.com/varletjs/varlet/commit/61e14e8fcf08048b816a50b522e67365d9ac7801))
* **ripple:** fix ripple cannot be removed when user drag end and improve menu link of the documentation  ([#1213](https://github.com/varletjs/varlet/issues/1213)) ([63faeae](https://github.com/varletjs/varlet/commit/63faeaed88d46054e3e5b807fc26833e388be697))


### Features

* **action-sheet:** support --action-sheet-border-top ([#1215](https://github.com/varletjs/varlet/issues/1215)) ([fc88fd0](https://github.com/varletjs/varlet/commit/fc88fd0c4d7c80ded247711c863312cd7865c949))
* **avatar:** support hoverable prop ([#1221](https://github.com/varletjs/varlet/issues/1221)) ([2a0397a](https://github.com/varletjs/varlet/commit/2a0397a9285de5c25cada0560dfead131d31d128))
* **card:** support --card-close-button-text-color ([668775b](https://github.com/varletjs/varlet/commit/668775b58972acb4e9551e393a72506a42d104e8))
* **floating-panel:** support new component floating panel ([#1217](https://github.com/varletjs/varlet/issues/1217)) ([5749040](https://github.com/varletjs/varlet/commit/5749040747e3ff0f16f8b53eae4d5833d29685f8))
* **index-bar:** support custom index bar position ([#1220](https://github.com/varletjs/varlet/issues/1220)) ([fed2ad3](https://github.com/varletjs/varlet/commit/fed2ad3b63dc0869e5e4f14a62e402bdb3e7abde))
* **menu-select:** support new component menu select and close [#1204](https://github.com/varletjs/varlet/issues/1204) ([df013ea](https://github.com/varletjs/varlet/commit/df013ea093d98757d41a211438da707e2084fa66))
* **use:** support isReachTop and isReachBottom ([053c659](https://github.com/varletjs/varlet/commit/053c659cd46828a1ae47117b2a060af0e91e05ba))
* **vite-plugins/markdown:** support transform hash to pinyin ([0102fdf](https://github.com/varletjs/varlet/commit/0102fdf079233f54710e9810a55e60b366bac597))


### Refactoring

* **avatar:** clean code ([529a344](https://github.com/varletjs/varlet/commit/529a3445e69c94af9fc1ca8c1471f4dab4feb061))
* **cli:** improve site css ([7030ad6](https://github.com/varletjs/varlet/commit/7030ad636e9a7d9a07baddcd6080893d0b73885f))
* **floating-panel:** change teleport default value and clean code ([e171b1f](https://github.com/varletjs/varlet/commit/e171b1f8a639f15a4b8c500cdbd8c8a4556cf5ff))
* **floating-panel:** improve css var ([825e4ab](https://github.com/varletjs/varlet/commit/825e4abc167a49c5900e3b7d54c1245654353bcd))
* **floating-panel:** modify css var ([19f1175](https://github.com/varletjs/varlet/commit/19f1175ad999f4da1952a348cde7b47aac49cc01))
* **floating-panel:** support background transition ([48ef1a4](https://github.com/varletjs/varlet/commit/48ef1a4c642e984eac5957bc78b6fa01566980d6))
* **menu-select:** remove default style ([18363f3](https://github.com/varletjs/varlet/commit/18363f38fd640938f14b17b601e4db169e2872fa))
* **menu-select:** remove padding ([e5bc689](https://github.com/varletjs/varlet/commit/e5bc6899d5d61bb8df9a94b07f76628ab02c3c57))
* **pull-refresh:** refactor by useTouch ([18c0d71](https://github.com/varletjs/varlet/commit/18c0d711f7a4bb2acd21dd5cee24e7f7e0adfd64))
* remove repeated type ([c69389e](https://github.com/varletjs/varlet/commit/c69389e0a9d7587e884a17e8d4e5057256ccaac3))
* remove unuseful code ([53ba889](https://github.com/varletjs/varlet/commit/53ba889d00888306d303cdb26d0dc81adb7aa607))
* **swipe:** optimize code ([#1219](https://github.com/varletjs/varlet/issues/1219)) ([8e26c5e](https://github.com/varletjs/varlet/commit/8e26c5e99f8bcefe9c5f30943d528b33f49d9074))
* **vite-plugins:** remove handleHotUpdate ([7259f65](https://github.com/varletjs/varlet/commit/7259f65cb869ceed15b8f5613925743314cb88f2))

## [2.17.1](https://github.com/varletjs/varlet/compare/v2.17.0...v2.17.1) (2023-10-08)


### Bug Fixes

* **dialog:** fix message word-wrap and improve uploader component tests and docs ([1c4c3d2](https://github.com/varletjs/varlet/commit/1c4c3d25ed2ec5ccf6b2f73f89875daddcac225e))
* **option:** fix selected error in multiple mode ([c9753d9](https://github.com/varletjs/varlet/commit/c9753d984696e12ae56cc119682e877c7b0289a9))
* **popup:** fixed width and height of the popup content ([b78826d](https://github.com/varletjs/varlet/commit/b78826d2839b9602b964ac0f13664f64b5198640))
* **uploader:** support ico extname of the image ([3429668](https://github.com/varletjs/varlet/commit/34296689c0218690afeaaf2217fd3612fd3987b3))


### Features

* **option:** support disabled ([802813d](https://github.com/varletjs/varlet/commit/802813d87a08bac579edcbbd0e6196b458502338))
* **uploader:** support props.PreventDefaultPreview and preview event([#1206](https://github.com/varletjs/varlet/issues/1206)) ([f5ab12b](https://github.com/varletjs/varlet/commit/f5ab12b368f00bea2b9190b39d1556a6c8c1496d))

# [2.17.0](https://github.com/varletjs/varlet/compare/v2.16.7...v2.17.0) (2023-09-28)


### BREAKING CHANGES

* **picker:** component remake and api optimization


### Bug Fixes

* **select:** hidden vertical scroll bar ([#1186](https://github.com/varletjs/varlet/issues/1186)) ([842b10c](https://github.com/varletjs/varlet/commit/842b10c92e9b6243e05fe19a7a33c92baafa59ce))
* **snackbar:** incorrect position of multiple ([4fc386c](https://github.com/varletjs/varlet/commit/4fc386c9966452aabd30291c96a1df7ac403637c))
* **uploader:** convert default slot to boolean value ([#1188](https://github.com/varletjs/varlet/issues/1188)) ([4416972](https://github.com/varletjs/varlet/commit/4416972f54d85394e60778f2cc99349925570720))
* **uploader:** readonly mode allows to preview picture ([#1184](https://github.com/varletjs/varlet/issues/1184)) ([edcf93a](https://github.com/varletjs/varlet/commit/edcf93ac0d83a6fa42cbd981669843f8294d09ec))


### Features

* **action-sheet, step:** support namespace for icon ([d62ac66](https://github.com/varletjs/varlet/commit/d62ac6611523a44a647c1a13a66e18f17fc73345))
* **badge:** support namespace for icon ([b1da5db](https://github.com/varletjs/varlet/commit/b1da5db688f1aa3a10599944923d888a12e4107d))
* **cell:** support namespace for icon ([0a6d6e8](https://github.com/varletjs/varlet/commit/0a6d6e85fcf0ffe6b366e32acae59cf9b8ecb8d6))
* **chip:** support namespace for icon ([2b31999](https://github.com/varletjs/varlet/commit/2b3199919084b0a891ebdd48a6849f86a91aaacc))
* **cli:** support esbuild compiler ([5b33789](https://github.com/varletjs/varlet/commit/5b3378901e22779eb668599791e49c059b5ff86c))
* **cli:** support esbuild option ([28195d9](https://github.com/varletjs/varlet/commit/28195d9bae41ae588e4b96d985fb93e7ca970a99))
* **cli:** support record task time ([9cbd270](https://github.com/varletjs/varlet/commit/9cbd270ada16db5aabecd101985bf8032d4a628e))
* **ellipsis:** support expand ([#1197](https://github.com/varletjs/varlet/issues/1197)) ([a781b28](https://github.com/varletjs/varlet/commit/a781b28fd3c6f66acc915fe021be2846a249f63d))
* **fab:** support namespace for icon ([6f06bd7](https://github.com/varletjs/varlet/commit/6f06bd7829c8d12a8caada60dd6e2a51b69ebbd7))
* **field:** support --field-decorator-line-border-radius ([bfaad07](https://github.com/varletjs/varlet/commit/bfaad07a32b36b0b6d133dc16ee4600ba78c51d6))
* **field:** support --field-decorator-placeholder-color ([c3edacf](https://github.com/varletjs/varlet/commit/c3edacf2224d4bfcfcc1caebfefcb42d75b874af))
* **locale:** support zh-TW zh-HK ([92976b9](https://github.com/varletjs/varlet/commit/92976b97452fa6a0dc336f7509c2effe9a1a85d0))
* **picker:** component remake and api optimization ([16729b4](https://github.com/varletjs/varlet/commit/16729b4fddbd28a90e74b78b2310b22bc343a511))
* **progress:** support linear gradient color when mode is circle ([#1180](https://github.com/varletjs/varlet/issues/1180)) ([f1cd728](https://github.com/varletjs/varlet/commit/f1cd728eb2d20f52e803a1eb4541c839e0bae063))
* **rate:** support namespace for icon ([7db258f](https://github.com/varletjs/varlet/commit/7db258f7c9c54b6877108f507df1a7b0e22ceb24))
* **uploader:** support resolve-type ([#1194](https://github.com/varletjs/varlet/issues/1194)) ([a8fbb35](https://github.com/varletjs/varlet/commit/a8fbb35eeabaf9a5e485cac8b833a550eb85b5e9))


### Refactoring

* **cli:** esm.js remove env ([6e91c94](https://github.com/varletjs/varlet/commit/6e91c944ddb9f78ee64a040dc62503757f9ee1b9))
* refactor by useId ([f7ce86e](https://github.com/varletjs/varlet/commit/f7ce86e41398b45a714cd2f7c3ba001da86abc80))
* **ui:** replace type StyleValue with CSSProperties ([#1198](https://github.com/varletjs/varlet/issues/1198)) ([cb1b3a3](https://github.com/varletjs/varlet/commit/cb1b3a302429e1c71bf39a86bce2e51c9a237b83))
* **uploader:** clean code and fix types ([0633d67](https://github.com/varletjs/varlet/commit/0633d67b3800a0ced522c74d722c54c4e989f0ad))
* **use:** clean code ([2f7ee39](https://github.com/varletjs/varlet/commit/2f7ee3924b9308816f18307bbe0e4d7f00088fdc))

## [2.16.7](https://github.com/varletjs/varlet/compare/v2.16.6...v2.16.7) (2023-09-18)


### Bug Fixes

* **input,select:** reduce the impact of text-align ([5091f35](https://github.com/varletjs/varlet/commit/5091f351a5353f03ef0a62252ecdfd38f3880a74))


### Features

* **swipe:** support navigation prop and prev and next slots ([#1177](https://github.com/varletjs/varlet/issues/1177)) ([d717f0c](https://github.com/varletjs/varlet/commit/d717f0c9aa29f7fc2bdd3b2cb744294e7d327aa9))


### Refactoring

* **swipe:** support navigation vertical mode ([dc69d24](https://github.com/varletjs/varlet/commit/dc69d245bcc7aaec66197fd7ccc9aff8163e2d76))

## [2.16.6](https://github.com/varletjs/varlet/compare/v2.16.5...v2.16.6) (2023-09-14)


### Features

* **extension:** support vercel origin ([bad29f5](https://github.com/varletjs/varlet/commit/bad29f56d4d7ba1656925eb4a7ee2449306f794a))

## [2.16.5](https://github.com/varletjs/varlet/compare/v2.16.4...v2.16.5) (2023-09-13)


### Bug Fixes

* **badge:** fix border radius error ([bc46710](https://github.com/varletjs/varlet/commit/bc467109e9b322ba5a9d04e51daccc8c2ee444a0))

## [2.16.4](https://github.com/varletjs/varlet/compare/v2.16.2...v2.16.4) (2023-09-13)


### Features

* **badge:** support custom content border ([#1178](https://github.com/varletjs/varlet/issues/1178)) ([499cd46](https://github.com/varletjs/varlet/commit/499cd466ceaa6b527b83b722c6608b2b09675fe9))
* **extension:** support webview for documentation preview ([3c77690](https://github.com/varletjs/varlet/commit/3c77690bbd04c041675970a075a833152b97df1e))


### Refactoring

* replace tsc with tsup for shared and use & vite-plugins ([1170445](https://github.com/varletjs/varlet/commit/1170445b5777301a0b64406e4ed9770f924dcc0c))

## [2.16.2](https://github.com/varletjs/varlet/compare/v2.16.1...v2.16.2) (2023-09-07)


### Features

* **layout:** support array for gutter and optimize scripts ([0a5252f](https://github.com/varletjs/varlet/commit/0a5252f0ba5ba8bfda7cd290257d3c5dd97f2b52))
* **layout:** support array for gutter and optimize scripts ([55a2e97](https://github.com/varletjs/varlet/commit/55a2e9762342bf7bc62fd3414554a4df1c7b5838))
* **swipe:** support prev next to for scoped slots data ([1031dd3](https://github.com/varletjs/varlet/commit/1031dd3a63e089303912f5e27cd51b7b763c3044))

## [2.16.1](https://github.com/varletjs/varlet/compare/v2.16.0...v2.16.1) (2023-09-05)


### Bug Fixes

* **swipe:** direction check on touchend ([11911ac](https://github.com/varletjs/varlet/commit/11911acd64e89cb476751c36226586bb14db256a))

# [2.16.0](https://github.com/varletjs/varlet/compare/v2.15.1...v2.16.0) (2023-09-05)


### Bug Fixes

* **button:** fix hover effect while the component is disabled ([bc15462](https://github.com/varletjs/varlet/commit/bc154629eaac63923449f9532f778b96f3704c68))


### Features

* remake index page and add new icon ([6adee9c](https://github.com/varletjs/varlet/commit/6adee9c5c50e097c92318eeb29ef6c7247ce7f4d))


### Refactoring

* **cli:** rename component namespace in template ([e52e701](https://github.com/varletjs/varlet/commit/e52e7010d8dc62d232a0acec467c9a573d8bb549))
* improve css ([ad158c8](https://github.com/varletjs/varlet/commit/ad158c8394b94808011ff62a49149d90b746263a))
* optimize ([353c8cf](https://github.com/varletjs/varlet/commit/353c8cf933a6312e02a587433ba585228976431a))
* refactor by varlet shared ([e4eae7f](https://github.com/varletjs/varlet/commit/e4eae7f956c69b540ea0555f0cb1054c1bd5b57a))
* **shared:** reduce delay ([d78feb2](https://github.com/varletjs/varlet/commit/d78feb21c9df8a9e4bcaa8e2ad34dc99c17887c8))

## [2.15.1](https://github.com/varletjs/varlet/compare/v2.15.0...v2.15.1) (2023-08-31)


### Bug Fixes

* **layout, table:** fix col width overflow and optimize table hover effect ([695b75d](https://github.com/varletjs/varlet/commit/695b75dae1863fa5ef0f5908691d6d3aca1230e5))

# [2.15.0](https://github.com/varletjs/varlet/compare/v2.14.2...v2.15.0) (2023-08-30)


### Bug Fixes

* **input:** fix it can't trigger click event in `readonly` ([#1170](https://github.com/varletjs/varlet/issues/1170)) ([6ba487d](https://github.com/varletjs/varlet/commit/6ba487d5904f7c7a9e58c9f1bbe32c20074a4478))
* **swipe:** fix swipe occasionally cross the boundary ([1788fd4](https://github.com/varletjs/varlet/commit/1788fd4a8cf0a71456eed5740755414d3a9fa604))


### Features

* **checkbox:** support indeterminate prop and slot ([#1159](https://github.com/varletjs/varlet/issues/1159)) ([41cd712](https://github.com/varletjs/varlet/commit/41cd7126d4787285f8a3cce2a18f903b66d16719))
* **cli:** unit testing tools migrated to vitest ([9911f4b](https://github.com/varletjs/varlet/commit/9911f4b0a157cbff84d72b4fa19e5db66ebbf9a6))
* **form:** support submit and reset events and improve test case ([55b3d62](https://github.com/varletjs/varlet/commit/55b3d62c2208204b1caac1bfb12ecfb0a550c4e2))
* **link:** support rel prop ([#1163](https://github.com/varletjs/varlet/issues/1163)) ([05baa4a](https://github.com/varletjs/varlet/commit/05baa4a0d971b2f63e952c24e92e30f4acac9036))
* **option:** support hover effect ([#1157](https://github.com/varletjs/varlet/issues/1157)) ([56cdff8](https://github.com/varletjs/varlet/commit/56cdff83e1aa610bd5d4cae1130060cfaf9b4e39))


### Refactoring

* **cli:** jest to vi ([86a3eb7](https://github.com/varletjs/varlet/commit/86a3eb721d0ba8f7dfa93d305c76d3984fdbc310))
* **drag:** refactor by useTouch ([7e11cde](https://github.com/varletjs/varlet/commit/7e11cdea7646013707881cb0dfcaf3c11291c560))
* **image-preview:** add endTouch call ([d94a831](https://github.com/varletjs/varlet/commit/d94a8318f43ca25f8faa414bbbe8757aab7b73ab))
* **image-preview:** clean ([5fc99c9](https://github.com/varletjs/varlet/commit/5fc99c999b1bdc5c8394d0ee1b8787f6e96bd8c4))
* **image-preview:** refactor by useTouch ([#1158](https://github.com/varletjs/varlet/issues/1158)) ([0e319ec](https://github.com/varletjs/varlet/commit/0e319ec593753dc74dc41f81eaf9351d838a477b))
* improve props defination ([f6055b4](https://github.com/varletjs/varlet/commit/f6055b47034ba74060ca585b9cbda15e1c36ea68))
* improve props defination ([803df55](https://github.com/varletjs/varlet/commit/803df55765a6122b73a168d0ff760dad670fd331))
* **input:** remove error code ([8ff8017](https://github.com/varletjs/varlet/commit/8ff8017145ba3a2d1d41780593c5d7a185cad7da))
* **picker:** refactor by useTouch ([#1167](https://github.com/varletjs/varlet/issues/1167)) ([37c9705](https://github.com/varletjs/varlet/commit/37c97051a349554c54a46b5b68bf0908528fddb6))
* **playground:** improve ui experience ([95153e5](https://github.com/varletjs/varlet/commit/95153e58ec151552cb80aa68a5e9f98b02a487a2))
* refactor by useVModel ([7558cf4](https://github.com/varletjs/varlet/commit/7558cf4cde20578ffac2578f9fa40ea8fb1860b6))
* refactor useTouch ([de39e50](https://github.com/varletjs/varlet/commit/de39e506106e9acf0ab04cb70306c63ae60fe170))
* remove jest config ([2f365ca](https://github.com/varletjs/varlet/commit/2f365cab8ecc2ab147a4506c8aa70318473975d3))
* simplify props definition and optimize types ([2b7641f](https://github.com/varletjs/varlet/commit/2b7641f3ee573c8841839eecf5a210af3ac56a66))
* simplify props definition and optimize types ([b452a40](https://github.com/varletjs/varlet/commit/b452a404b407acd95076970967afcb27fab8a604))
* simplify props definition and optimize types ([6957060](https://github.com/varletjs/varlet/commit/6957060029561f765fae1ecdc7aec471db12e4ed))
* simplify props definition and optimize types ([#1160](https://github.com/varletjs/varlet/issues/1160)) ([18763f6](https://github.com/varletjs/varlet/commit/18763f6163455f8f1a176725152b1ea51090d00b))
* simplify props definition and optimize types ([#1162](https://github.com/varletjs/varlet/issues/1162)) ([c84dc6c](https://github.com/varletjs/varlet/commit/c84dc6c4e3b54a6c48761dcc1fd99c04561c6f42))
* **swipe:** refactor by useTouch ([052a977](https://github.com/varletjs/varlet/commit/052a9774dc6ee4c79be972be7cce63bf254c7e7c))
* **swipe:** remove async and raf ([d9b939f](https://github.com/varletjs/varlet/commit/d9b939f3dcb0368ee51311b72173005803e75dc5))

## [2.14.2](https://github.com/varletjs/varlet/compare/v2.14.1...v2.14.2) (2023-08-18)


### Features

* **drag:** support click event ([#1150](https://github.com/varletjs/varlet/issues/1150)) ([62ad9c3](https://github.com/varletjs/varlet/commit/62ad9c312f1cfb1716a50042f27dcb7c7b1486ef))


### Refactoring

* **fab:** replace dragging status with click event ([#1152](https://github.com/varletjs/varlet/issues/1152)) ([88ad2ac](https://github.com/varletjs/varlet/commit/88ad2acac9c19371906eb156424afd56e7b34033))

## [2.14.1](https://github.com/varletjs/varlet/compare/v2.14.0...v2.14.1) (2023-08-15)


### Bug Fixes

* **watermarker:** fix missing style dependencies ([22fc711](https://github.com/varletjs/varlet/commit/22fc7112bc0cce43a8fc4813a940274e481c9222))

# [2.14.0](https://github.com/varletjs/varlet/compare/v2.13.6...v2.14.0) (2023-08-15)


### Features

* add new component watermark ([#1143](https://github.com/varletjs/varlet/issues/1143)) ([a0af434](https://github.com/varletjs/varlet/commit/a0af434296215705c8c97667df267ac6f8575e86))


### Refactoring

* **watermark:** clean and refactor fullscreen by teleport ([b69038e](https://github.com/varletjs/varlet/commit/b69038e514f07d0e2534bf640d6af3821072dcc3))

## [2.13.6](https://github.com/varletjs/varlet/compare/v2.13.5...v2.13.6) (2023-08-02)


### Bug Fixes

* **cell:** fix cell overflow hidden ([0850d94](https://github.com/varletjs/varlet/commit/0850d940eca1e61522eef48afb6d8ec7ef5e91fa))


### Features

* **icons:** support email icon ([c23c7c1](https://github.com/varletjs/varlet/commit/c23c7c12554bec087a6e58e7afda01cd25e38b7c))

## [2.13.5](https://github.com/varletjs/varlet/compare/v2.13.4...v2.13.5) (2023-07-30)


### Features

* **avatar:** support alt ([#1141](https://github.com/varletjs/varlet/issues/1141)) ([b76f84e](https://github.com/varletjs/varlet/commit/b76f84e82580d16fb5757f1d11da4a1c2218a2d1))
* **fab:** support drag props ([#1138](https://github.com/varletjs/varlet/issues/1138)) ([344fb86](https://github.com/varletjs/varlet/commit/344fb86db493c4ebaac36b81b8cf9ae2f2118fb8))
* **icons:** support lock icon ([ab406bd](https://github.com/varletjs/varlet/commit/ab406bd1da7ac568fe6d194e8483b3b0fd4febe2))
* **popover:** add position strategy ([#1137](https://github.com/varletjs/varlet/issues/1137)) ([87bed1a](https://github.com/varletjs/varlet/commit/87bed1a7d11c31fc0e9bf2c77984ecdfc21f1ba3))
* **progress:** add css variable to set border radius when the mode is linear ([#1136](https://github.com/varletjs/varlet/issues/1136)) ([83da939](https://github.com/varletjs/varlet/commit/83da939c2d2c9cae4ae53105f194994885541ba0))


### Refactoring

* **popover:** disable teleport on keepalive activated ([c4e832a](https://github.com/varletjs/varlet/commit/c4e832a03d836079e11339f0c9620ed84df21158))
* **teleport:** support false value to disabled teleport ([935a7bb](https://github.com/varletjs/varlet/commit/935a7bb7534f866f8b1b97bbb1849bb5e7f0ad46))
* **teleport:** support false value to disabled teleport ([7a9f101](https://github.com/varletjs/varlet/commit/7a9f101d7eac36c2ef094db0b3ec5ca2d5014488))
* **teleport:** support false value to disabled teleport ([854d2e8](https://github.com/varletjs/varlet/commit/854d2e8901dbddc95bd0346d3c43e89e8f0ccc7f))

## [2.13.4](https://github.com/varletjs/varlet/compare/v2.13.3...v2.13.4) (2023-07-25)


### Bug Fixes

* **fab:** drag style mission ([cc6c913](https://github.com/varletjs/varlet/commit/cc6c913e1a28c46b0325e0af9d94cc936851924b))
* **fab:** fix fab teleport defaults to body ([59de630](https://github.com/varletjs/varlet/commit/59de63096842a8804d2e8fdaf4b670b99339c2a3))


### Refactoring

* **switch:** optimize code ([#1134](https://github.com/varletjs/varlet/issues/1134)) ([c1f87b0](https://github.com/varletjs/varlet/commit/c1f87b026931192df62692b44dbd440b2f9fca53))

## [2.13.3](https://github.com/varletjs/varlet/compare/v2.13.2...v2.13.3) (2023-07-24)


### Bug Fixes

* **switch, slider:** fix props.size cannot handle vmin and vmax ([8657077](https://github.com/varletjs/varlet/commit/865707711282f9e6fa815f4d17ffaf14e85ce4ff))
* **switch, slider:** support em unit ([5d5d3ab](https://github.com/varletjs/varlet/commit/5d5d3abcd5e6d4a22a1f7d4a069a73a63d76254b))


### Features

* **fab:** support drag ([#1133](https://github.com/varletjs/varlet/issues/1133)) ([203c1a8](https://github.com/varletjs/varlet/commit/203c1a84f45bbdee13a28b7e208979c9ccae7bfd))
* **site:** support color scheme ([a03da2a](https://github.com/varletjs/varlet/commit/a03da2a3c3c7598ff459abb506b6148dd2fb0e8f))


### Refactoring

* **fab:** format code ([de37c58](https://github.com/varletjs/varlet/commit/de37c580dd0b17dbe43ffe2be0cebe7032fe2e50))

## [2.13.2](https://github.com/varletjs/varlet/compare/v2.13.1...v2.13.2) (2023-07-24)


### Bug Fixes

* **switch, slider:** fix props.size cannot handle vmin and vmax ([3a218e1](https://github.com/varletjs/varlet/commit/3a218e172ee12073a50b68197571a0aaff398e72))

## [2.13.1](https://github.com/varletjs/varlet/compare/v2.13.0...v2.13.1) (2023-07-21)


### Bug Fixes

* **select:** fix select option active error ([#1130](https://github.com/varletjs/varlet/issues/1130)) ([a3b7138](https://github.com/varletjs/varlet/commit/a3b71389962eb9c55d589682de27623fe5fd67c9))


### Features

* **menu:** support popoverClass and refactor select css and fixed [#1129](https://github.com/varletjs/varlet/issues/1129) ([417f45c](https://github.com/varletjs/varlet/commit/417f45c4ab39471cae4314e440d6430b39ae54af))
* **popover:** support animation ([4416548](https://github.com/varletjs/varlet/commit/4416548ec1593b255b993acdf6ca47d0097caf10))


### Refactoring

* **cli/gen:** refactor tpl ([4107bb2](https://github.com/varletjs/varlet/commit/4107bb2a1d6a09bf0048a744196672494bc35e88))
* **popover:** optimize performance ([203aee4](https://github.com/varletjs/varlet/commit/203aee4f6937fea16285c1b896ca1783e74dba02))
* **popover:** optimize performance ([4daad0f](https://github.com/varletjs/varlet/commit/4daad0ff3cb16958aca05357d5ba22d1aab0e498))
* refactor via withInstall ([571de27](https://github.com/varletjs/varlet/commit/571de2740ebed2ddad802ced3135f45477f45b4f))
* **select:** fix typo ([569b34e](https://github.com/varletjs/varlet/commit/569b34e03f8431b58b4959c6c382ac7f17e13809))

# [2.13.0](https://github.com/varletjs/varlet/compare/v2.12.3...v2.13.0) (2023-07-16)


### Bug Fixes

* **cli:** fix md table syntax ([c202ddf](https://github.com/varletjs/varlet/commit/c202ddfe5f27d1e850682d6216da23a4e719fb1b))
* **slider:** fix bubble size of the Slider component is abnormal ([#1120](https://github.com/varletjs/varlet/issues/1120)) ([49a0b1f](https://github.com/varletjs/varlet/commit/49a0b1f6337ede3dcd36d649b346f1e7c832fa65))


### Features

* **drag:** support reset and refactor animation ([6dddee3](https://github.com/varletjs/varlet/commit/6dddee30b0d243e1c2db464623e21e9dc2fce3c9))
* **input,uploader:** add extra message slot ([#1117](https://github.com/varletjs/varlet/issues/1117)) ([979229e](https://github.com/varletjs/varlet/commit/979229ecfcda6c3af840a0912300a9d59c96388c))
* new component drag ([#1124](https://github.com/varletjs/varlet/issues/1124)) ([d86d5a1](https://github.com/varletjs/varlet/commit/d86d5a1d491f6c84068b32e1ff0c5ac2ed95c065))
* **playground:** support preview mode ([d5101b2](https://github.com/varletjs/varlet/commit/d5101b26473a011a89cc6366a03dc8ad286bd8bd))


### Refactoring

* **divider:** refactor divider in vertical mode ([#1128](https://github.com/varletjs/varlet/issues/1128)) ([db7618c](https://github.com/varletjs/varlet/commit/db7618c33ac50a9cfb84aa83632d518bc3b03de6))
* **drag:** optimize performance and clean code ([767f922](https://github.com/varletjs/varlet/commit/767f922fb012759bec9454360eced3298ac268fd))
* **form-details, input, uploader:** refactor slots define ([5fce41c](https://github.com/varletjs/varlet/commit/5fce41c7181fd8c9f08f2fc276f846b1efb95bbf))
* **playground:** replace env variable ([90c1f24](https://github.com/varletjs/varlet/commit/90c1f246712bdce4dbe3dd4c2ea2f2b6c79bed9a))

## [2.12.3](https://github.com/varletjs/varlet/compare/v2.12.2...v2.12.3) (2023-07-07)


### Bug Fixes

* **input:** fix auto complete tab index ([#1114](https://github.com/varletjs/varlet/issues/1114)) ([fb5e3ac](https://github.com/varletjs/varlet/commit/fb5e3ac7312df0e34e987a1290b50a0e2ddfc17a))
* **pullRefresh:** ensure element is not null and fix types ([3f594f5](https://github.com/varletjs/varlet/commit/3f594f520f90796fc6cd72e345c6fc18723ce7ba))
* **switch:** fix load animation without displaying when the radius isn't setting ([#1110](https://github.com/varletjs/varlet/issues/1110)) ([f286f12](https://github.com/varletjs/varlet/commit/f286f1244d1e8e631e0e07a15c76c3aa0cbe52ab))


### Features

* **progress:** add type attribute to set different theme colors ([8ccfafd](https://github.com/varletjs/varlet/commit/8ccfafd268432a40aece12ccb3673169a70832bd))


### Refactoring

* **progress:** optimize code ([10518d1](https://github.com/varletjs/varlet/commit/10518d195de5916051b2ae59506d28f2e5aa46e6))

## [2.12.2](https://github.com/varletjs/varlet/compare/v2.12.1...v2.12.2) (2023-07-02)


### Bug Fixes

* fix layout zIndex ([0b63630](https://github.com/varletjs/varlet/commit/0b636306fb859cba809dea3d9ded3ddcc47780de))


### Refactoring

* fix teleport docs and tests ([98ef58a](https://github.com/varletjs/varlet/commit/98ef58a5f78b22de8f4557446cb6b46d3521753f))

## [2.12.1](https://github.com/varletjs/varlet/compare/v2.12.0...v2.12.1) (2023-07-01)


### Bug Fixes

* **image-preview:** fix swipe ref is not expose ([2363a31](https://github.com/varletjs/varlet/commit/2363a31788d5f80932735860cf3e70b45b144279))

# [2.12.0](https://github.com/varletjs/varlet/compare/v2.11.8...v2.12.0) (2023-07-01)


### Bug Fixes

* **cli/template:** fix tsconfig.json ([438c365](https://github.com/varletjs/varlet/commit/438c365a7751a6c422d15f121547a0d94a69566f))
* **cli:** fix less render paths ([da5bf3d](https://github.com/varletjs/varlet/commit/da5bf3d27691ae068a5329c97611898a46ee3d25))
* fix vmin vmax compute error ([2ddf751](https://github.com/varletjs/varlet/commit/2ddf7515b7f76f8c3ce912d0c927dff5075b61ec))
* **popover:** fix box sizing ([24da2a5](https://github.com/varletjs/varlet/commit/24da2a5b7a9eb599e004478f705150c964dc730a))
* **popover:** fix reference getter ([a035f10](https://github.com/varletjs/varlet/commit/a035f10392a482ac2f79f7227325a619b9db1dc9))


### Features

* **cli:** support sponsors option ([8aca9e7](https://github.com/varletjs/varlet/commit/8aca9e73338e7bff98483aa923e89286661ee271))
* **image-preview:** support initialIndex and prev, next, to methods ([#1104](https://github.com/varletjs/varlet/issues/1104)) ([12fff90](https://github.com/varletjs/varlet/commit/12fff9033c7c20ce6d2d0b770ddf168cfa23626e))
* **playground:** support light theme ([e7368db](https://github.com/varletjs/varlet/commit/e7368db5322f817afdb4b4b35b3002b1a8cdd531))
* **playground:** support monaco and select varlet and vue version ([aed4817](https://github.com/varletjs/varlet/commit/aed4817ed043eb28e274b7bd3a1f72dce729dd89))
* **ui/select:** support click reference element to collapse the menu ([#1103](https://github.com/varletjs/varlet/issues/1103)) ([159a5b4](https://github.com/varletjs/varlet/commit/159a5b4b74b9120c76415723a8d0640aa619adcd))


### Refactoring

* add cssvar for text ([#1102](https://github.com/varletjs/varlet/issues/1102)) ([346a18e](https://github.com/varletjs/varlet/commit/346a18e1d95685b86868098b12267d9a5a2e4944))
* clean code ([047429b](https://github.com/varletjs/varlet/commit/047429b7ad3795adaf5156f909eb7ef8aad00cc6))
* **playground:** filter varlet version ([f90d9b9](https://github.com/varletjs/varlet/commit/f90d9b925d9e5d287e8f20645eeb5043756e2be5))
* **playground:** optimize icons color ([2a339a1](https://github.com/varletjs/varlet/commit/2a339a1b3528762feb68da77d7f6ae5e4e5d6ffa))
* **playground:** optimize nav height ([bf6256a](https://github.com/varletjs/varlet/commit/bf6256ad51f515504f6294441c6da0e73a07a45f))
* **playground:** optimize ui ([149a7aa](https://github.com/varletjs/varlet/commit/149a7aab144517baf37a73d02aba56b57fcdeb75))
* remove unuseful css var ([e664a96](https://github.com/varletjs/varlet/commit/e664a963b8f70fb156f258fbab214638a4598774))
* support typescript5 and update deps ([42b4198](https://github.com/varletjs/varlet/commit/42b4198678c29984360a925cdd8a3676f635bf7b))

## [2.11.8](https://github.com/varletjs/varlet/compare/v2.11.7...v2.11.8) (2023-06-17)


### Bug Fixes

* patch js ext ([a56e16a](https://github.com/varletjs/varlet/commit/a56e16aa2eece4f4d6f0d9fdf023e58ac9739cc5))

## [2.11.7](https://github.com/varletjs/varlet/compare/v2.11.6...v2.11.7) (2023-06-17)


### Bug Fixes

* **ui/popup:** fix slots rerender ([4ee6487](https://github.com/varletjs/varlet/commit/4ee6487b7d7ed47e2713bccac6a06e8fdb1031ce))
* **ui/progress:** fix css color inherit ([#1096](https://github.com/varletjs/varlet/issues/1096)) ([704ffc7](https://github.com/varletjs/varlet/commit/704ffc73d31560b1bebfaf0bf12410958da1105a))


### Refactoring

* ensure popup and popup items relation ([fa463cc](https://github.com/varletjs/varlet/commit/fa463cc61ee7a2a2001c5183471dc62fa1f9ba89))

## [2.11.6](https://github.com/varletjs/varlet/compare/v2.11.5...v2.11.6) (2023-06-15)


### Bug Fixes

* **rate:** add flex to constraint icon size and close [#1090](https://github.com/varletjs/varlet/issues/1090) ([455ff1e](https://github.com/varletjs/varlet/commit/455ff1ec108809f61dc4ee9145ca34cd217ebde9))
* **switch:** remove default loading size and close [#1092](https://github.com/varletjs/varlet/issues/1092) ([ae3b562](https://github.com/varletjs/varlet/commit/ae3b562c67f0469be1229b5158e6412802caa9af))
* **ui/button,link:** fix css color inherit ([#1094](https://github.com/varletjs/varlet/issues/1094)) ([2b63723](https://github.com/varletjs/varlet/commit/2b637233897dc3ce68725d994e1587abe53a8316))
* **ui/dialog:** fix css color inherit ([#1097](https://github.com/varletjs/varlet/issues/1097)) ([97c0937](https://github.com/varletjs/varlet/commit/97c0937b69680288f02c2d58d0323127171c9e86))
* **ui/table:** fix css color inherit ([#1098](https://github.com/varletjs/varlet/issues/1098)) ([06d07a0](https://github.com/varletjs/varlet/commit/06d07a0529512fba248e26e96a0b88f515e1580e))


### Features

* **ui/counter:** support --counter-button-text-color and complete design docs ([30fd9fa](https://github.com/varletjs/varlet/commit/30fd9fa0c38508c4fbf95a387c919bd10da0efa7))


### Refactoring

* **date-picker, time-picker:** add background-color and close [#1091](https://github.com/varletjs/varlet/issues/1091) ([c9a3597](https://github.com/varletjs/varlet/commit/c9a35972a054bac35d8869cb9198a67db34fc482))
* refactor lifecycle via onSmartMounted and onSmartUnmounted ([a3ca537](https://github.com/varletjs/varlet/commit/a3ca53745157ca24f69a70c675c2c6427c83dd43))
* refactor via useWindowResize ([35ffa62](https://github.com/varletjs/varlet/commit/35ffa62950904643ecfb95b8507ababf43994a8d))

## [2.11.5](https://github.com/varletjs/varlet/compare/v2.11.4...v2.11.5) (2023-06-09)


### Bug Fixes

* **steps:** reimplement the connection line style ([#1082](https://github.com/varletjs/varlet/issues/1082)) ([132b0b8](https://github.com/varletjs/varlet/commit/132b0b8d7b234d275a6dddc60a5574b914baf8a8))


### Features

* **ui/rate:** allow to clear score ([#1080](https://github.com/varletjs/varlet/issues/1080)) ([b206b19](https://github.com/varletjs/varlet/commit/b206b19d4abd97e605321e76f7b1e691c3af2c60))


### Refactoring

* **cli:** optimize theme ([bb4c1cb](https://github.com/varletjs/varlet/commit/bb4c1cb2d31c2df646978b49084d91ee8427e912))
* **ui/pagination:** fix menu placement to cover-top ([763da6c](https://github.com/varletjs/varlet/commit/763da6cdfdfad300efe93e744a46cd6dab84b308))

## [2.11.4](https://github.com/varletjs/varlet/compare/v2.11.3...v2.11.4) (2023-06-04)


### Bug Fixes

* **ui/pagination:** fix css var error ([f4a3a9f](https://github.com/varletjs/varlet/commit/f4a3a9f6cb0c01c1ed84e821e47d621139343f90))
* **ui/pagination:** fix disabled style error and refactor css var ([2a78f52](https://github.com/varletjs/varlet/commit/2a78f527b7e2f5cb0568983f60c5dda7ebbeba86))

## [2.11.3](https://github.com/varletjs/varlet/compare/v2.11.2...v2.11.3) (2023-06-04)


### Bug Fixes

* **ui/field-decorator:** fix calculation error when the filed decorato… ([#1061](https://github.com/varletjs/varlet/issues/1061)) ([a23fa95](https://github.com/varletjs/varlet/commit/a23fa9512d4ba0107188bcbe09bdce6943f62884))
* **ui/field-decorator:** fix style error when placeholder is empty ([#1078](https://github.com/varletjs/varlet/issues/1078)) ([5040bd2](https://github.com/varletjs/varlet/commit/5040bd23452678996b3494c9d1629cc061d6aac7))
* **ui/pagination:** fix a style bug([#1077](https://github.com/varletjs/varlet/issues/1077)) ([d7d6b0d](https://github.com/varletjs/varlet/commit/d7d6b0dc8e2baaecfaf0576ba5bd6a94a5e981e5))


### Features

* **extension:** Filter component fill prompt when entering information inside an element ([#1066](https://github.com/varletjs/varlet/issues/1066)) ([1e67c51](https://github.com/varletjs/varlet/commit/1e67c510b1b921256fdc8ba2bb5aabb8bd585079))
* **extension:** show document when hover ([#1065](https://github.com/varletjs/varlet/issues/1065)) ([0294701](https://github.com/varletjs/varlet/commit/02947016752f4c685ec4f4aff577e5200ce5d883))
* **ui/image:** add generic error slot ([#1060](https://github.com/varletjs/varlet/issues/1060)) ([0cedc08](https://github.com/varletjs/varlet/commit/0cedc0811e70105ae8ea67cc0e455b323fb6c3bc))
* **ui/picker:** add more css var ([4930457](https://github.com/varletjs/varlet/commit/493045757e80081cead829f1c6010980f71d7a5c))


### Refactoring

* **extension:** refactor env and hover ([8a81d5c](https://github.com/varletjs/varlet/commit/8a81d5c8bbfc78b470918ba8efa4829eec5ee35b))
* refactor via clamp ([54b45cb](https://github.com/varletjs/varlet/commit/54b45cbbf07b91b574bea4c2d810e632e83b6540))
* replace getBoundingClientRect with getRect ([#1062](https://github.com/varletjs/varlet/issues/1062)) ([14e5ef7](https://github.com/varletjs/varlet/commit/14e5ef7790b382035f2da259468c4347b9086d05))
* **snackbar:** adjust the margin of the action area ([#1074](https://github.com/varletjs/varlet/issues/1074)) ([685cd16](https://github.com/varletjs/varlet/commit/685cd1690fd33e6c32458a7123ba39b114baaf1a))
* **ui/image:** clean code ([af03ae3](https://github.com/varletjs/varlet/commit/af03ae31dfeb3b77fd3637c91985ea3b29f3f690))
* **ui/picker:** replace font size via --font-size-lg ([5fab436](https://github.com/varletjs/varlet/commit/5fab436ebc6ef7c305c90e0ac9465b348e48fc10))
* via clamp ([cf0e1f5](https://github.com/varletjs/varlet/commit/cf0e1f55f64beaa8b927e134c2d72f86ae8443cd))

## [2.11.2](https://github.com/varletjs/varlet/compare/v2.11.1...v2.11.2) (2023-05-27)


### Bug Fixes

* **ui/tabs-items:** Fixed the tabs-items cannot match name ([#1056](https://github.com/varletjs/varlet/issues/1056)) ([4bb18d8](https://github.com/varletjs/varlet/commit/4bb18d8a0f05718e2a276745b08a86a5de1d3de0))


### Features

* **ui/image-preview:** add long press event & image-prevent-default prop ([#1049](https://github.com/varletjs/varlet/issues/1049)) ([46e8dfc](https://github.com/varletjs/varlet/commit/46e8dfc8544063e32f59f397f71b2f62e25cedfb))


### Refactoring

* **extension:** Update button link address ([#1057](https://github.com/varletjs/varlet/issues/1057)) ([578fc71](https://github.com/varletjs/varlet/commit/578fc71057b88edf8f3bcd0523b4abb96ec992c7))
* **progress:** Optimized code ([#1053](https://github.com/varletjs/varlet/issues/1053)) ([4d9ab15](https://github.com/varletjs/varlet/commit/4d9ab1592c063bd80561ec5d019f99f8c3720751))

## [2.11.1](https://github.com/varletjs/varlet/compare/v2.11.0...v2.11.1) (2023-05-20)


### Bug Fixes

* cascade column the click event doesn't work sometime ([#1047](https://github.com/varletjs/varlet/issues/1047)) ([fae3f5d](https://github.com/varletjs/varlet/commit/fae3f5dde74de11821eedfd98fcb29a0c9db0a45))
* **ui/image-preview:** click can't trigger a close event sometimes ([#1044](https://github.com/varletjs/varlet/issues/1044)) ([c0d6902](https://github.com/varletjs/varlet/commit/c0d6902b236a29ee3d9580d0ac43a1f0bffd802a))
* **ui/picker:** clicking on the parent column causes the child column to restructure when the options are unchanged ([3924744](https://github.com/varletjs/varlet/commit/3924744d63b8a93a44f9a1087d889a38a33cc80b))
* **utils:** elements utils supports ssr and close [#1045](https://github.com/varletjs/varlet/issues/1045) ([9f3da12](https://github.com/varletjs/varlet/commit/9f3da1291b63ab04b34624cff739f4692b101fd2))


### Features

* **ui/picker:** support scroll while click the option and refactor code ([#1039](https://github.com/varletjs/varlet/issues/1039)) ([59a8d4c](https://github.com/varletjs/varlet/commit/59a8d4cab0fac71a03edce9d2b2190e004ea7c72))


### Refactoring

* **ui/image-preview:** optimize code ([b9c37ef](https://github.com/varletjs/varlet/commit/b9c37efeeed98818538ebfedc4fdc04fd79e667f))
* **ui/picker:** add passive for touchstart ([17d5987](https://github.com/varletjs/varlet/commit/17d59878685881e814148586e7e6f1d412989f3c))
* **ui/picker:** change to click event ([#1048](https://github.com/varletjs/varlet/issues/1048)) ([88481ae](https://github.com/varletjs/varlet/commit/88481ae2a42e87a263ddd852f584f1d60264c8fb))
* **ui/picker:** fix changed value error ([116170c](https://github.com/varletjs/varlet/commit/116170c81b9b3cdd5262dc46a1eb6324d3a9f15d))
* **ui/picker:** refactor code style ([5170a79](https://github.com/varletjs/varlet/commit/5170a79e6fcf1dbbf844fd2c14730729a2263e57))
* **utils:** Narrow return type of createBEM function to more precise string literals ([#1046](https://github.com/varletjs/varlet/issues/1046)) ([2ef8b17](https://github.com/varletjs/varlet/commit/2ef8b171b04591b82f8a39677bb8134f13e18f50))

# [2.11.0](https://github.com/varletjs/varlet/compare/v2.10.2...v2.11.0) (2023-05-15)


### Bug Fixes

* **collapse:** remove flex layout of content ([5ae606b](https://github.com/varletjs/varlet/commit/5ae606ba59c7a891901f665a5a5075216f95415a))
* **loading:** add max-height to loading container and close [#1029](https://github.com/varletjs/varlet/issues/1029) ([2d17414](https://github.com/varletjs/varlet/commit/2d1741492d3956f942c854e1c7432eab454e6fc1))
* **ui/field-decorator:** fix fieldset color display error ([7b3ea2a](https://github.com/varletjs/varlet/commit/7b3ea2a7019def6fe61052040d73a1044561c9e8))
* **ui/fieldDecorator:** access DOM data in nextTick ([#1021](https://github.com/varletjs/varlet/issues/1021)) ([c9b0bd0](https://github.com/varletjs/varlet/commit/c9b0bd09f309aa512c68ec1d08c192405fc1a073))
* **ui/fieldDecorator:** placeholder width exceeds container size ([#1015](https://github.com/varletjs/varlet/issues/1015)) ([93ae09f](https://github.com/varletjs/varlet/commit/93ae09f418a77722788f31b8067ca979535cbfe6))
* **ui/image-preview:** fix flickering when swiping quickly and optimize swipe initialIndex behavior and close [#1020](https://github.com/varletjs/varlet/issues/1020) ([bf1fde4](https://github.com/varletjs/varlet/commit/bf1fde40091e1e3bdb1f3fac98d6388156a01b97))
* **ui/slider:** fix the style of validation fails ([#1035](https://github.com/varletjs/varlet/issues/1035)) ([4c85f88](https://github.com/varletjs/varlet/commit/4c85f883a19eef95eebf11189da31214781f2fa3))


### Features

* **cli:** support vue 3.3.x ([#1033](https://github.com/varletjs/varlet/issues/1033)) ([18fda4c](https://github.com/varletjs/varlet/commit/18fda4c7cf5ba6baecca09166eec4c6ed615f8d9))
* **ui/tabs-items:** render more content on the server side ([8b6245e](https://github.com/varletjs/varlet/commit/8b6245e73631003f5e4067b7d964ab8fc166c2af))
* **ui/uploader:** support before-filter event ([#1010](https://github.com/varletjs/varlet/issues/1010)) ([14575dc](https://github.com/varletjs/varlet/commit/14575dc1269848deb7a20cf1c635ae2193345f01))


### Refactoring

* **index-bar:** optimize code ([e29e0da](https://github.com/varletjs/varlet/commit/e29e0dafdb6618d6d0fb90c3023d4a6ae1e09352))
* **index-bar:** replace getBoundingClientRect to getRect ([0375157](https://github.com/varletjs/varlet/commit/037515729401612df7906cc7907a3eeb2c7c7db6))
* replace getComputedStyle to getStyle and close [#1030](https://github.com/varletjs/varlet/issues/1030) ([4d5a40b](https://github.com/varletjs/varlet/commit/4d5a40bd84c1cf59bdac6d35b513cd7e12c25b12))
* **slider:** remove unnecessary top ([00ae55c](https://github.com/varletjs/varlet/commit/00ae55c68b379305d786dfe58a60f3349ed2af7c))
* **ui/field-decorator:** optimize code and refactor via getRect and getStyle ([e889705](https://github.com/varletjs/varlet/commit/e8897050178578e9372b6d15abda828c54feed69))
* **ui/fieldDecorator:** refactoring placeholder animation ([#1019](https://github.com/varletjs/varlet/issues/1019)) ([7238935](https://github.com/varletjs/varlet/commit/723893571887c7b5032abb8c7f38ad92bc9e5f08))
* **ui/list:** optimize the check behavior of list in tab-item ([11ce900](https://github.com/varletjs/varlet/commit/11ce90078e5f85410480bc4a6b3eff41a27142e2))
* **ui/list:** refactor via getRect and getStyle ([f34237c](https://github.com/varletjs/varlet/commit/f34237ceb59e0d654370117e846f375591809cfd))
* **ui:** refactor via getRect and getStyle  ([#1025](https://github.com/varletjs/varlet/issues/1025)) ([fd5af00](https://github.com/varletjs/varlet/commit/fd5af009b82ba7d0cbd9c8cd16abf8d3451dae70))

## [2.10.2](https://github.com/varletjs/varlet/compare/v2.10.1...v2.10.2) (2023-05-06)


### Bug Fixes

* **ui/slider:** 修复滑块拖动时屏幕滚动 ([#1011](https://github.com/varletjs/varlet/issues/1011)) ([b9ca512](https://github.com/varletjs/varlet/commit/b9ca5122d1edf94fdf5ddb0ec6344241723b3c55))


### Features

* **ui/input:** support enterkeyhint for Input ([#1013](https://github.com/varletjs/varlet/issues/1013)) ([706014c](https://github.com/varletjs/varlet/commit/706014c264ca14ad36988d5ca9430b12509f5e29))
* **ui/popup:** support safeArea and safeAreaTop ([7306ddc](https://github.com/varletjs/varlet/commit/7306ddc1cf88bf16dc50840966f460502a2def91))


### Refactoring

* **ui/popup:** typo error ([83f5651](https://github.com/varletjs/varlet/commit/83f56514e423c775344254231930a4983a610ac8))

## [2.10.1](https://github.com/varletjs/varlet/compare/v2.10.0...v2.10.1) (2023-05-04)


### Bug Fixes

* **cli/compile:** support typescript and close [#998](https://github.com/varletjs/varlet/issues/998) ([0b83869](https://github.com/varletjs/varlet/commit/0b8386924c157aef1f8c093e2fa11d4c85cbb1da))
* **select:** fix select dropdown border radius ([22d656e](https://github.com/varletjs/varlet/commit/22d656e713a21661fc3aca33fc8231f328c97521))
* **ui/input, select:** fix text overflow error ([929765a](https://github.com/varletjs/varlet/commit/929765a94c6b86d1d28d9b86a3899cd31113c57b))
* **ui/slider:** optimize slider style and classes ([#1000](https://github.com/varletjs/varlet/issues/1000)) ([7695457](https://github.com/varletjs/varlet/commit/7695457def220ff979225e6211b4841da17a88dd))
* **ui/swipe:** to and next methods conflict with initialIndex ([140af1f](https://github.com/varletjs/varlet/commit/140af1fd84dc748fbf67e0b8928d7ccf9e95bd47))


### Features

* **cli:** support meta description and keywords ([d0ce672](https://github.com/varletjs/varlet/commit/d0ce67249903fb5223521c86a4fc9be761b246ef))
* **slider:** support vertical mode ([43acba6](https://github.com/varletjs/varlet/commit/43acba6981663ce54f2b4201d82d90328f717bf8))
* **ui/uploader:** support progress ([b991f6f](https://github.com/varletjs/varlet/commit/b991f6f0329c12cc21042174f275e6ac5396b674))


### Refactoring

* optimize code ([c5daa19](https://github.com/varletjs/varlet/commit/c5daa19b1e6b8699c60438f11ef76b13258a0704))
* optimize code ([f919623](https://github.com/varletjs/varlet/commit/f919623ea2263c04a39a8d4e1fb43f88aa7f114e))
* remove support for tsx ([1e5a606](https://github.com/varletjs/varlet/commit/1e5a6068db7bdd1a6ca79eb51758c774ff82dcf4))
* **slider:** optimize code ([6620bfd](https://github.com/varletjs/varlet/commit/6620bfd834c8e9433c9e22e58c00e5765ec4e762))
* **ui/input, select:** optimize code ([6a960f7](https://github.com/varletjs/varlet/commit/6a960f756a169d9f3c4371379df2773263ba6f9a))
* **ui/input, select:** remove width transition ([a72f253](https://github.com/varletjs/varlet/commit/a72f25380fa6bab74f822a85be2cabc7a43a6c91))

# [2.10.0](https://github.com/varletjs/varlet/compare/v2.9.6...v2.10.0) (2023-04-24)


### Bug Fixes

* **extension:** newline not parsed ([28ad42c](https://github.com/varletjs/varlet/commit/28ad42c7147c1e14de27f5d9e23cfd259e06ef01))
* **input:** placeholder style ([4a00a63](https://github.com/varletjs/varlet/commit/4a00a6352c494c59ebd73b3303c1b4e1fed61178))
* **input:** remove transition delay ([2528f60](https://github.com/varletjs/varlet/commit/2528f60a25743935bffbc0f3a853c88ae9d62d37))
* **ui/list:** clear list scroller listener on deactivated ([3640121](https://github.com/varletjs/varlet/commit/364012188a37abff256a24dadefff02e4f0f2181))
* **ui/pagination:** fix error key ([cf7793a](https://github.com/varletjs/varlet/commit/cf7793aedbaf5564d737419b7721aeeded99e974))


### Features

* **icon:** add view icons ([cebb99d](https://github.com/varletjs/varlet/commit/cebb99d8f0f9245de17319605085101637a54234))
* **markdown:** add id attribute for h3 tag & close [#976](https://github.com/varletjs/varlet/issues/976) ([#983](https://github.com/varletjs/varlet/issues/983)) ([78c1b1d](https://github.com/varletjs/varlet/commit/78c1b1d7a9ccee7de9e16ae0495102043341210b))
* new icons and refactor rate component docs ([#990](https://github.com/varletjs/varlet/issues/990)) ([62787c7](https://github.com/varletjs/varlet/commit/62787c7e08bb288daba7aede615e46a5fddf14f2))
* **ui/input, select:** new outlined variant ([#941](https://github.com/varletjs/varlet/issues/941)) ([c054e21](https://github.com/varletjs/varlet/commit/c054e2111e1f6ff1749ddca7b18282d0ba7d06e6))
* **ui/Snackbar:** support icon and action in functional mode ([1f35aeb](https://github.com/varletjs/varlet/commit/1f35aeb7c08f2f57278eec431c86280491c14d47))
* **vscode-extension:** add `varlet documentation` and  `varlet playground`  btns ([#962](https://github.com/varletjs/varlet/issues/962)) ([d36e532](https://github.com/varletjs/varlet/commit/d36e532e919a34a587e80f447b07abdf536eb756))


### Refactoring

*  useVModel move to ui package  ([#963](https://github.com/varletjs/varlet/issues/963)) ([7032f57](https://github.com/varletjs/varlet/commit/7032f57d747dee9dd6a3cd7c62b131dd6392a9b6))
* add transition delay ([e20a1ee](https://github.com/varletjs/varlet/commit/e20a1ee742c29f568a82352aa6dc53324d8c39e8))
* **extension:** rename command name and clean code ([024ddcb](https://github.com/varletjs/varlet/commit/024ddcbd6b9aea4a5e4e3046f8884721fd46ebad))
* fix location info parse error ([9c4f231](https://github.com/varletjs/varlet/commit/9c4f231a553f607899f50b8836eb98631d149d17))
* optimize code ([8a75cbe](https://github.com/varletjs/varlet/commit/8a75cbe841b1c056c4821ec71a1ac14bc6407c55))
* optimize code ([398ead5](https://github.com/varletjs/varlet/commit/398ead5e2695fcdc972b055b6a9bc58dad520a88))
* optimize code ([5e9a2dd](https://github.com/varletjs/varlet/commit/5e9a2dd57d3b9cc3f5956065629f37a90711156b))
* optimize code ([b643589](https://github.com/varletjs/varlet/commit/b643589232b27f297255763361e7551fbc377fa8))
* remove transition-delay ([25497e7](https://github.com/varletjs/varlet/commit/25497e789a8d00aaa0879217daa8addc3fc755d8))
* remove unused code ([39c5f00](https://github.com/varletjs/varlet/commit/39c5f007d473897452b6a0b7e5f5c1672f38d8ac))
* remove unuseful css ([863f68b](https://github.com/varletjs/varlet/commit/863f68b6bc8d19fa441044cd1d032159ba135c8e))
* support normalizeToArray and refactor components logic ([f19f3b6](https://github.com/varletjs/varlet/commit/f19f3b6dce78ac1e4ddae0bb5e617cfa68310ccd))
* **ui/field-decorator:**  refactor by fieldset and legend ([#979](https://github.com/varletjs/varlet/issues/979)) ([a976433](https://github.com/varletjs/varlet/commit/a976433e8b80e2f071bad1714388ff98e7e4ba94))
* **ui/field-decorator:** optimize code ([dff5f8f](https://github.com/varletjs/varlet/commit/dff5f8f72f6e38627881ea00214b4c7a277e1d26))
* **ui/field-decorator:** optimize code ([fb89cd5](https://github.com/varletjs/varlet/commit/fb89cd5c84e238afa5d4d013b55a248530880b91))
* **ui/field:** refactor css ([93a3987](https://github.com/varletjs/varlet/commit/93a3987d2c5c00ec879d6e30cae9157a6cdccd6d))
* **ui/input, select:** optimize docs and css var ([abbee53](https://github.com/varletjs/varlet/commit/abbee538e9a32b05edb91608c604bd3dd1c61fa2))
* **ui/input, select:** refactor css ([421e001](https://github.com/varletjs/varlet/commit/421e001da73e29d245b213e52e09650db5f17afc))
* **ui/pagination:** adapt new input ([6fef4be](https://github.com/varletjs/varlet/commit/6fef4bee2a90fd477ae1a4972ccbe9f6c111adc7))
* **ui/themes:** rename input to field decorator ([e9cf2eb](https://github.com/varletjs/varlet/commit/e9cf2eb69a2730b73c220c9914a493d88d3597f2))
* **use:** support event target getter ([9a24c4e](https://github.com/varletjs/varlet/commit/9a24c4edfd2c0d1faf454f1a4537e2643c7baaac))

## [2.9.6](https://github.com/varletjs/varlet/compare/v2.9.5...v2.9.6) (2023-04-14)


### Bug Fixes

* **DatePicker:** fix Fixed hover effect bug ([#956](https://github.com/varletjs/varlet/issues/956)) ([4d72694](https://github.com/varletjs/varlet/commit/4d726942a4e0ee14889bd9105f7948a694f4d262))
* **pagination:** add disabled prop & close [#950](https://github.com/varletjs/varlet/issues/950) ([fb98f46](https://github.com/varletjs/varlet/commit/fb98f46ee2b657664d416b3fc18c6a76f6bb8693))
* **pull-refresh:** fix icon name error while fast touchmove ([fe1be23](https://github.com/varletjs/varlet/commit/fe1be23e6b2ea77b99759ad7977ca99e6308c961))
* **ui/checkbox, radio:** fix shrink error and close [#952](https://github.com/varletjs/varlet/issues/952) ([fa879ad](https://github.com/varletjs/varlet/commit/fa879ad5b6a1bd72e4a64a494192387e4710e371))
* **ui/dialog:** fix onBeforeClose cannot use call ([62c7c89](https://github.com/varletjs/varlet/commit/62c7c89bf553f21421df7f1bbf74c79fc068efa0))


### Features

* **cli:** support draft mode ([569b651](https://github.com/varletjs/varlet/commit/569b651417d7dfd9b4a73cd81f4922dd93502d6f))


### Refactoring

* **cli:** optimize logger in draft mode ([40b6bae](https://github.com/varletjs/varlet/commit/40b6bae0848ca3033c8085941202e76f1239ae23))
* **extension:** optimize completion timing ([3a1aeb2](https://github.com/varletjs/varlet/commit/3a1aeb28a39ee354afb85f251fb39afd9d9591e5))
* fix types error and refactor code ([ccbf2ff](https://github.com/varletjs/varlet/commit/ccbf2ff66d29ca46e5d4d59ca3f0fb6a8a600dbc))

## [2.9.5](https://github.com/varletjs/varlet/compare/v2.9.4...v2.9.5) (2023-04-07)


### Bug Fixes

* fix useRouteListener for ssr ([6b75dd5](https://github.com/varletjs/varlet/commit/6b75dd5b0a628c673961f276a5a42b61df17abaa))
* **tabs:** fix tab active color computed error ([d6bef90](https://github.com/varletjs/varlet/commit/d6bef90b34f52572de7fe9faaa61ec7ec5f5a886))
* **ui/hover:** fix and close [#942](https://github.com/varletjs/varlet/issues/942) ([58b2ef4](https://github.com/varletjs/varlet/commit/58b2ef4825b485e2b406ba69dbe30a1a8f03501a))
* **ui/pagination:** fix pagination disabled exception ([#943](https://github.com/varletjs/varlet/issues/943)) ([4f7b046](https://github.com/varletjs/varlet/commit/4f7b0461ea5dcb6f7fbee07b1e76f2d92a67c972))
* **ui/pagination:** fix pagination not require props ([#946](https://github.com/varletjs/varlet/issues/946)) ([20885d3](https://github.com/varletjs/varlet/commit/20885d3dea8819ba8c682dab0a3a2cecbfaf905d))
* **ui/tabs:** fix tab active color error while the name's type is number ([d2bf6ad](https://github.com/varletjs/varlet/commit/d2bf6ad2b86c1ebe1db7adda1ffe64a2047cdc2e))


### Features

* **ui/context:** support enableRipple option ([8591899](https://github.com/varletjs/varlet/commit/859189930c5d8437376b9fd53afbb8cb497da833))
* **ui/tabs:** support custom indicator inner size ([83a049d](https://github.com/varletjs/varlet/commit/83a049daedde8e4f3b587d0f1ab375704b12ef9d))

## [2.9.4](https://github.com/varletjs/varlet/compare/v2.9.3...v2.9.4) (2023-03-31)


### Bug Fixes

* **cli/checklist:** empty line is shown while no matched checklist ([1ce1078](https://github.com/varletjs/varlet/commit/1ce10782e4f3e49b70c366e9c80991788befb530))
* **index-bar:** cache scroll state ([f30c6f2](https://github.com/varletjs/varlet/commit/f30c6f2efc1db25c88aed9cc69250f3b4b75c720))
* **index-bar:** index-anchor overlap and close [#936](https://github.com/varletjs/varlet/issues/936) ([969944f](https://github.com/varletjs/varlet/commit/969944f4d744585edb2bbf7f34e929c337467726))
* **pullrefresh:** trigger timing of refresh event and close [#930](https://github.com/varletjs/varlet/issues/930) ([fa2f1bf](https://github.com/varletjs/varlet/commit/fa2f1bf0280b1840a30ddadd36283d8ce214d1a1))
* **ui/bottom-navigation:** offset error while set safe-area in ios ([7783acf](https://github.com/varletjs/varlet/commit/7783acf1d8cfbeca7afb55d0f27bfbb37b8e3c50))
* **ui/sticky:** resize sticky layout offset while the window resize ([5ac6f67](https://github.com/varletjs/varlet/commit/5ac6f673a2f5784675b39ffcd59fece828566a87))


### Features

* Collapse component add property divider ([#937](https://github.com/varletjs/varlet/issues/937)) ([afca9d8](https://github.com/varletjs/varlet/commit/afca9d8df296051a33bc2ba0d6700b14a92706cc))
* support vmin and vmax and close [#931](https://github.com/varletjs/varlet/issues/931) ([3ef4f51](https://github.com/varletjs/varlet/commit/3ef4f51232433ef2e23c577f9974d8b87c166b5d))
* **ui/app-bar:** support props.safeAreaTop ([9f00d43](https://github.com/varletjs/varlet/commit/9f00d43fe5ae0219a15be4e707880154e321fc51))


### Refactoring

* encapsulation throw error ([#935](https://github.com/varletjs/varlet/issues/935)) ([5592fc9](https://github.com/varletjs/varlet/commit/5592fc9ec2a4ddf06e1ee4782e800eaba96b7f31))
* **index-bar:** rename css-mode to sticky-css-mode ([103b622](https://github.com/varletjs/varlet/commit/103b6220bc8e61be0ce1f7e00849b91c249fd25b))
* **ui/pull-refresh:** optimize touch behavior while event target is not parent scroller ([d04a2a8](https://github.com/varletjs/varlet/commit/d04a2a83350a251f02706dc621aeb9f73893f9c2))
* **ui/tabs:** trigger resize on tabs activated ([3ed11c5](https://github.com/varletjs/varlet/commit/3ed11c5e5e9ee96ea252161969798510014cab1f))

## [2.9.3](https://github.com/varletjs/varlet/compare/v2.9.2...v2.9.3) (2023-03-23)


### Bug Fixes

* **playground:** add resetFlip ([0ae8c5e](https://github.com/varletjs/varlet/commit/0ae8c5efa5d9cb51beedd4c9b800022105500fa4))
* **playground:** upgrade repl version to compatible safari ([3a11a77](https://github.com/varletjs/varlet/commit/3a11a77342a002038c104e9662fc447ad4805748))
* **pullrefresh:** control node position ([06c2dad](https://github.com/varletjs/varlet/commit/06c2dad62dfd901760a556d644cef14c758e926b))
* **ui/collapse:** fix collapse Item animation error ([#922](https://github.com/varletjs/varlet/issues/922)) ([a799438](https://github.com/varletjs/varlet/commit/a799438b36b211d23dc4058a3712fbd8971e35b8))


### Features

* **backtop:** support elevation ([80f3866](https://github.com/varletjs/varlet/commit/80f38666757123e49a79ba331f213250e224e4f2))
* **cli:** support checklist and close [#926](https://github.com/varletjs/varlet/issues/926) ([3f1bffc](https://github.com/varletjs/varlet/commit/3f1bffc47d500f59bab8ac9f24ecd3f0e0f6edaa))
* **cli:** support directive types generation for volar and close [#918](https://github.com/varletjs/varlet/issues/918) ([38f9c64](https://github.com/varletjs/varlet/commit/38f9c64148896f31b30408bacf11109b6c2430a8))
* **collapse:** support elevation ([4bfc1db](https://github.com/varletjs/varlet/commit/4bfc1db79e1a26f1f1b5c8b4cf7649b3642939e4))
* **date-picker:** support elevation and button-elevation ([f18d744](https://github.com/varletjs/varlet/commit/f18d7447e929ca6b6f804d105a07af4bfe6491e5))
* **pagination:** support elevation ([4680cdd](https://github.com/varletjs/varlet/commit/4680cdd03d2f8f10f97635364c1a7a13e847fd5c))
* suppert elevation for Table、Tabs、AppBar ([#928](https://github.com/varletjs/varlet/issues/928)) ([be24aef](https://github.com/varletjs/varlet/commit/be24aef4c719c9d4d44b457f3fd34fef994b1beb))
* support elevation for uploader and counter ([#927](https://github.com/varletjs/varlet/issues/927)) ([3a4265d](https://github.com/varletjs/varlet/commit/3a4265d08f275b362f5070089fffa5454292acd4))
* support props.elevation for button, button-group, fab, paper, card ([#925](https://github.com/varletjs/varlet/issues/925)) ([881966c](https://github.com/varletjs/varlet/commit/881966c6078f0a056c026f4182f8fca7ad93534f))
* **time-picker:** support elevation ([9e8e470](https://github.com/varletjs/varlet/commit/9e8e4709c14fbda80c7547fb79b6b3652f8c57f4))
* **ui/fab:** support props.safeArea and close [#896](https://github.com/varletjs/varlet/issues/896) ([9237379](https://github.com/varletjs/varlet/commit/92373793a8a33b15b78ffa327b1a3324e3a747a0))
* **ui/menu:** support props.elevation ([2dafcf3](https://github.com/varletjs/varlet/commit/2dafcf3c2720bbf6d8d1799e02aaf03b73f958ca))
* **ui/tabs:** support props.scrollable and props.indicatorPosition ([#921](https://github.com/varletjs/varlet/issues/921)) ([33ea0d8](https://github.com/varletjs/varlet/commit/33ea0d84e0b7b802f16aa56f36cf7310dfd06e65))
* **use:** support useVModel ([#909](https://github.com/varletjs/varlet/issues/909)) ([af323d6](https://github.com/varletjs/varlet/commit/af323d6cdfe397a945e5de05d02038297c6e6e3b))


### Refactoring

* **cli:** remove .d.ts suffix ([a67aa5a](https://github.com/varletjs/varlet/commit/a67aa5a16ef5f30f365a7e06958fdecded037d10))
* collapse animation one frame delay ([5e87208](https://github.com/varletjs/varlet/commit/5e87208aee225508308a6536b611181ab16511e6))
* optimize code ([81cdcef](https://github.com/varletjs/varlet/commit/81cdcef9ce10096ac0844d85c2801e135c4c1713))
* **use:** optimize useVModel and refactor usePopover ([643c3ed](https://github.com/varletjs/varlet/commit/643c3ed81f19ac3d2ac25aed738eba57297b501b))


### Reverts

* collapse animation one frame delay ([3630fea](https://github.com/varletjs/varlet/commit/3630fea7137fba1de86399e96dd38f3a72a45398))

## [2.9.2](https://github.com/varletjs/varlet/compare/v2.9.1...v2.9.2) (2023-03-20)


### Bug Fixes

* checkbox、radio、uploader adds a reference to the hover style ([#914](https://github.com/varletjs/varlet/issues/914)) ([844df38](https://github.com/varletjs/varlet/commit/844df38ca373168315a04fafc075ecc71741ff6b))

## [2.9.1](https://github.com/varletjs/varlet/compare/v2.9.0...v2.9.1) (2023-03-16)


### Bug Fixes

* fix input cursor error in the ios ([aad8dac](https://github.com/varletjs/varlet/commit/aad8dac160be93354382333b7738a0666dc93ec8))
* **slider:** add cursor ([dd82f92](https://github.com/varletjs/varlet/commit/dd82f92305d7d0cec01885f5bb41cf684bf0623b))
* **ui/input:** fixed placeholders not being able to hide while composing ([54a0391](https://github.com/varletjs/varlet/commit/54a0391e7948ed00fa54028bc47bc529541507ef))


### Features

* **slider:** add hover overlay ([9adfdca](https://github.com/varletjs/varlet/commit/9adfdcae23a8d0a014a99b2b06936fcde4f8a7c4))
* support hover effect and close [#902](https://github.com/varletjs/varlet/issues/902) ([53461da](https://github.com/varletjs/varlet/commit/53461dafe98cdf78e7566c4948d4ffe7152bc7d4))
* **switch:** add hover overlay ([7a3f769](https://github.com/varletjs/varlet/commit/7a3f769cf46578972201125bc96c57f66686b623))
* **ui/checkbox:** support hover effect ([#907](https://github.com/varletjs/varlet/issues/907)) ([d853427](https://github.com/varletjs/varlet/commit/d853427fa80641829f43fa3432f233ecd22b486f))
* **ui/image-preview:** add setDefaultOptions and resetDefaultOptions ([#892](https://github.com/varletjs/varlet/issues/892)) ([ec56890](https://github.com/varletjs/varlet/commit/ec56890628eed7f07d63fe092c55e7a30cc89750))
* **ui/radio:** support hover effect ([#908](https://github.com/varletjs/varlet/issues/908)) ([d0621ad](https://github.com/varletjs/varlet/commit/d0621ad084805436f83dbdecd6788974d5cd911f))
* **ui/rate:** support hover effect ([#906](https://github.com/varletjs/varlet/issues/906)) ([6a6a2d0](https://github.com/varletjs/varlet/commit/6a6a2d01f0dfd4c7a50b31ec2b98f7a6dddcd51e))
* **ui/uploader:** support hover effect and close [#901](https://github.com/varletjs/varlet/issues/901) ([ca5e63f](https://github.com/varletjs/varlet/commit/ca5e63fb7c7e401d02be14768d04f0c7df0e7de0))


### Refactoring

* fix css dep ([15718e4](https://github.com/varletjs/varlet/commit/15718e4e2bb72f572ff3f8e9bc5fb0a4e546db27))
* refactor hover overlay ([c75e3dc](https://github.com/varletjs/varlet/commit/c75e3dc7f4ac10b22636946c76446ce8b1033bdd))
* **ui/counter:** remove readonly effect ([153e9db](https://github.com/varletjs/varlet/commit/153e9db79cc3c9d97c527268bae26be8842f447f))
* **ui/rate:** optimize code ([866486e](https://github.com/varletjs/varlet/commit/866486e5e6c04504bdbe4756f07ec7f754713670))


### Reverts

* fix workflow ([cc4554c](https://github.com/varletjs/varlet/commit/cc4554cace2c89c0a6e357efe9c987e0423f0fb9))

# [2.9.0](https://github.com/varletjs/varlet/compare/v2.8.6...v2.9.0) (2023-03-12)


### Bug Fixes

* **ui/bottom-navigation:** fix css dep ([bd1303d](https://github.com/varletjs/varlet/commit/bd1303da392a3f95754e200830a7680e91a95c4c))
* **ui/button:** fix css dep ([07af3e2](https://github.com/varletjs/varlet/commit/07af3e2915f4a3f1c7c7e7533356f7e04576cc31))
* **ui/button:** fix css dep ([8bc573a](https://github.com/varletjs/varlet/commit/8bc573a9f776a16ac3cabb43a5ad0568da56a864))
* **ui/hover:** fix wrong restore style ([ca3a455](https://github.com/varletjs/varlet/commit/ca3a455bcf3b29ff0f384930df6534f7dd82baf9))
* **ui/loading-bar:** fix timer asynchronous issue ([374130b](https://github.com/varletjs/varlet/commit/374130b2155385ef23b5563a3724aaa4c6b05788))
* **ui/loading:** fix loading display error and close [#884](https://github.com/varletjs/varlet/issues/884) ([910afa8](https://github.com/varletjs/varlet/commit/910afa8a9aea1e84f5ebacdc589bee67a80a8a7f))
* **ui/select:** fix css dep ([fbb0100](https://github.com/varletjs/varlet/commit/fbb010064ab6258bcb2a6aa9ecff6cfbc0985014))


### Features

* **extension:** support fab ([cc2c039](https://github.com/varletjs/varlet/commit/cc2c03941a43c39b9241e5bde830d420e800cd9e))
* refactor fab, support popover reference, fix option label lost reactivity ([a8051f3](https://github.com/varletjs/varlet/commit/a8051f34eb26c9a8b1b4ab2f72b58363626be034))
* **ui/badge:** refactor dom structure ([f96ceda](https://github.com/varletjs/varlet/commit/f96cedac697064782a81fed0924339dfbee83fad))
* **ui/badge:** support value slot ([#883](https://github.com/varletjs/varlet/issues/883)) ([765393a](https://github.com/varletjs/varlet/commit/765393ae34db3f4c05fc9f3aa67b5d6debbfdd55))
* **ui/button:** optimize hover effect ([#881](https://github.com/varletjs/varlet/issues/881)) ([fd69f23](https://github.com/varletjs/varlet/commit/fd69f23206593ba2fa7748d4e9d8d69971f981e4))
* **ui/fab:** new component fab ([#876](https://github.com/varletjs/varlet/issues/876)) ([1ae784a](https://github.com/varletjs/varlet/commit/1ae784a4bbb74f1bcc28e0ea9d7877cd00bf558f))
* **ui/icon:** icon support animationClass ([#880](https://github.com/varletjs/varlet/issues/880)) ([c6c06d6](https://github.com/varletjs/varlet/commit/c6c06d6bd3d4ab2c4fad468bdb2f1b9215bbed2d))
* **use:** useParent and useChildren support string key, refactor layout from @varlet/use ([6d8485a](https://github.com/varletjs/varlet/commit/6d8485a66b56959a596c89a02c1fcfaeaad2c929))


### Refactoring

* optimize relation error handler ([323f0a9](https://github.com/varletjs/varlet/commit/323f0a99c115b32b5754c52528a7f8733aa7abad))
* refactor from @varlet/use ([#886](https://github.com/varletjs/varlet/issues/886)) ([9c3a7e0](https://github.com/varletjs/varlet/commit/9c3a7e0c63801ea42a6ce12fe8fe2bf791682666))
* refactor from @varlet/use ([#887](https://github.com/varletjs/varlet/issues/887)) ([b09a664](https://github.com/varletjs/varlet/commit/b09a664581eafd2bac2568353648932c88e341c8))
* refactor from @varlet/use ([#888](https://github.com/varletjs/varlet/issues/888)) ([f7a2848](https://github.com/varletjs/varlet/commit/f7a284806a55a33b60753d7b4c0e5d97c5d5ea20))
* refactor relation from @varlet/use ([c85f137](https://github.com/varletjs/varlet/commit/c85f13743b47ff518ba1d91f0e2c2f8d4fb55422))
* **ui/bottom-navigation:** refactor from @varlet/use ([#885](https://github.com/varletjs/varlet/issues/885)) ([9ebcf44](https://github.com/varletjs/varlet/commit/9ebcf44de9a7bf5fa7c6ebb58fbbdfef3b23bc81))
* **ui/button:** optimize transition ([d9111da](https://github.com/varletjs/varlet/commit/d9111da099aa13c77f88ec783477e905b954706d))
* **ui/button:** refactor from @varlet/use ([53a217a](https://github.com/varletjs/varlet/commit/53a217ac018f9e774dd536251badba7e081454fd))
* **ui/checkbox:** refactor from @varlet/use ([9961bda](https://github.com/varletjs/varlet/commit/9961bdacf585f255c0509cb716800b3da20c3605))
* **ui/collapse:** refactor from @varlet/use ([c781e5d](https://github.com/varletjs/varlet/commit/c781e5d9c700bccb46017625ec7458f688bb3ce1))
* **ui/col:** unlink scope limit ([3bb1481](https://github.com/varletjs/varlet/commit/3bb14818bb71af0c6a56e0a2df520d4aeb4fc913))
* **ui/fab:** refactor apis ([e260475](https://github.com/varletjs/varlet/commit/e260475802df3b1dd594e11f7809579937ee6ae2))
* **ui/form:** refactor from @varlet/use ([755deee](https://github.com/varletjs/varlet/commit/755deee83fa94a61ceeb2a583612ae799bb8b092))
* **ui/icon:** clean code ([20bb909](https://github.com/varletjs/varlet/commit/20bb9090d91393b58f864a9ffdc837f23d333fbe))
* **ui/radio:** refactor from @varlet/use ([04c0627](https://github.com/varletjs/varlet/commit/04c0627331673e546bfa5f90ffc3c46868e523a7))

## [2.8.6](https://github.com/varletjs/varlet/compare/v2.8.5...v2.8.6) (2023-03-05)


### Bug Fixes

* **ui/backtop:** fix effect while the component in keepalive ([195bf9b](https://github.com/varletjs/varlet/commit/195bf9b7d9c535d31b9e02a8238d781f93b5bb1f))
* **ui/coundown:** fix start method error ([f6626ea](https://github.com/varletjs/varlet/commit/f6626eac03517483f3906f6111c65dc4a8c2e83c))
* **ui/input:** value update error while the target is composingand close [#877](https://github.com/varletjs/varlet/issues/877) ([5873fdf](https://github.com/varletjs/varlet/commit/5873fdf830ff6978fdb4195cf1fafaa2e2d30f1e))


### Features

* **use:** support useEventListener useClickOutside ([cb90734](https://github.com/varletjs/varlet/commit/cb907340ae67729bfe05f0df062463d63fb43166))


### Refactoring

* optimize effect ([59c543a](https://github.com/varletjs/varlet/commit/59c543aa36b929b1ef167a21fae1a608faeb2aa4))
* optimize effect ([ff6560d](https://github.com/varletjs/varlet/commit/ff6560dfd07056d6d62089e31aec1fbb26029f06))
* refactor from use ([a6a9bad](https://github.com/varletjs/varlet/commit/a6a9bad21ccdbe3b4abb1b164d30261a34cb5082))
* refactor from useMounted ([cc82270](https://github.com/varletjs/varlet/commit/cc822701ed0b72a25b74a9b5ef049e3496acc191))
* **ui/countdown:** cache isStart ([77ec368](https://github.com/varletjs/varlet/commit/77ec368e4def86656993ee76c9c764876c84b4ed))
* **ui/countdown:** cache isStart ([a572f52](https://github.com/varletjs/varlet/commit/a572f527c8fe8a27ddb0b43a87cc26fe63f56d9d))
* **ui/countdown:** clean code ([43a2297](https://github.com/varletjs/varlet/commit/43a22974207c1a30de48387ae941757d52f7e50b))
* **ui/countdown:** clean code ([736d0d2](https://github.com/varletjs/varlet/commit/736d0d2c0ef4c4e9c212d3d2a08bfdfe7a102389))
* **ui/countdown:** optimize resume start ([2a8eab4](https://github.com/varletjs/varlet/commit/2a8eab4b9123eb9d0bd28d000da31692cc0923ac))
* **ui/countdown:** remove unuseful ref ([94eea1f](https://github.com/varletjs/varlet/commit/94eea1f94bdf690f8ff88c2beed765cf7df7bfae))
* **ui/tabs:** refactor from useEventListener ([a5aac4e](https://github.com/varletjs/varlet/commit/a5aac4e5c49c2eb25d2760a0649900964428373a))
* **use:** replace to onBeforeUnmount ([5cf8395](https://github.com/varletjs/varlet/commit/5cf8395d1cf04c4ea53f36962bc0d4ffefa7a547))

## [2.8.5](https://github.com/varletjs/varlet/compare/v2.8.4...v2.8.5) (2023-02-28)


### Bug Fixes

* **ui/steps:** fix step shrink ([eb1cff7](https://github.com/varletjs/varlet/commit/eb1cff75746005b173e3f0b75c6625ac37708320))


### Features

* consistent flex-start, start, flex-end, end ([3836f30](https://github.com/varletjs/varlet/commit/3836f3040a80635da66001965022149190f59e0e))

## [2.8.4](https://github.com/varletjs/varlet/compare/v2.8.3...v2.8.4) (2023-02-27)


### Bug Fixes

* **cli:** fix resolve ([7856e60](https://github.com/varletjs/varlet/commit/7856e6018ec884cf39fb8230cce7fabab7dbda91))
* **ui/space:** fix space inline mode className err ([bcbbcad](https://github.com/varletjs/varlet/commit/bcbbcaddef1e36903031c6d9cf079ab7a789731d))


### Features

* added hover directive ([#868](https://github.com/varletjs/varlet/issues/868)) ([44806ef](https://github.com/varletjs/varlet/commit/44806ef8c30436f62017b0250936511106226d14))
* new directive hover and fix input number type bug ([#871](https://github.com/varletjs/varlet/issues/871)) ([8cd49bf](https://github.com/varletjs/varlet/commit/8cd49bf5d24d3e9fe837e185ae15553a9bc23fba))


### Refactoring

* optimize avatar-group and button-group css and add new example for button ([3c7d24f](https://github.com/varletjs/varlet/commit/3c7d24fce4fc29073d3435f311c62adfcf3d8a8a))
* refactor hover ([de93417](https://github.com/varletjs/varlet/commit/de93417d2ef5b628f01264e5dbe9c6b4235f01fd))
* **ui/input:** optimize clear icon size ([bae0245](https://github.com/varletjs/varlet/commit/bae0245ab57d32a76b3dcebbaa0499ee9d4f42f6))
* **ui/input:** refactor type number ([8a3ce10](https://github.com/varletjs/varlet/commit/8a3ce1045513278c724a656c5a880ac30cd25e7a))

## [2.8.3](https://github.com/varletjs/varlet/compare/v2.8.2...v2.8.3) (2023-02-20)


### Bug Fixes

* fix avatar scale ([0e491ce](https://github.com/varletjs/varlet/commit/0e491ce736d6b9f4e264485f52a739a1effba4e9))


### Features

* **cli:** reduce dependencies size ([#866](https://github.com/varletjs/varlet/issues/866)) ([4965033](https://github.com/varletjs/varlet/commit/4965033bb79099d13576b08c0fdaf6c4969038fc))

## [2.8.2](https://github.com/varletjs/varlet/compare/v2.8.1...v2.8.2) (2023-02-19)


### Bug Fixes

* paper elevation maybe undefined ([c9743fc](https://github.com/varletjs/varlet/commit/c9743fcedb5414813581b6cde49013090bed4fc0))


### Features

* new component button group ([66a6bed](https://github.com/varletjs/varlet/commit/66a6bed9a1be3dbc995f4cf7d74da0b1b626ed6e))


### Refactoring

* **ui/button-group:** support props.textColor and refactor css ([fcae09c](https://github.com/varletjs/varlet/commit/fcae09cbd5279c051654d6e09aadd20f961299d2))
* **ui/button:** clean code ([dd619a3](https://github.com/varletjs/varlet/commit/dd619a3ac7143db0cf53f379fbccd3b59bf62744))

## [2.8.1](https://github.com/varletjs/varlet/compare/v2.8.0...v2.8.1) (2023-02-15)


### Bug Fixes

* **cli:** umd format set production env ([b7920de](https://github.com/varletjs/varlet/commit/b7920decb120e8a67b08dc0d81072443da387762))
* **cli:** umd format should be replace NODE_ENV ([5f45a65](https://github.com/varletjs/varlet/commit/5f45a652dc576e549732efd73129c66e0bb55423))

# [2.8.0](https://github.com/varletjs/varlet/compare/v2.7.5...v2.8.0) (2023-02-15)


### Bug Fixes

* **cli:** fix vite command NODE_ENV ([e3d84ce](https://github.com/varletjs/varlet/commit/e3d84cefc25d229c9a16cefdd0aa646ab4dbbf23))
* **extension:** fixed regex mismatch under CRLF ([#850](https://github.com/varletjs/varlet/issues/850)) ([0947726](https://github.com/varletjs/varlet/commit/0947726f2de7fd4e6088ee73b77af819d4488bbd))
* fix umd format lose css ([cd2d606](https://github.com/varletjs/varlet/commit/cd2d60639a8d9819ef828882db3fdc6761ff9222))
* **playground:** fix jump github and detect iframe ([deeb9ef](https://github.com/varletjs/varlet/commit/deeb9ef179bc4d612bebaf0322fcf1427b995872))


### Features

* added avatar component ([#857](https://github.com/varletjs/varlet/issues/857)) ([c3bc355](https://github.com/varletjs/varlet/commit/c3bc3555e4f103edfdcf71ebcda273cc5ea1e2cd))
* new component ellipsis and tooltip supports props.sameWidth ([d979181](https://github.com/varletjs/varlet/commit/d979181ba42d7a780cd26572582d330ede230615))
* new component paper and cell supports ripple, border-offset, onClick ([1626e82](https://github.com/varletjs/varlet/commit/1626e82b638e3e1469afc5ca29918ced82e4e89c))
* support useRouteMobile ([#854](https://github.com/varletjs/varlet/issues/854)) ([2df95eb](https://github.com/varletjs/varlet/commit/2df95eb3f795439baa0aada74405acaa70f60222))
* **ui/app-bar:** support props.image, props.imageLinearGradient, content slots ([2293683](https://github.com/varletjs/varlet/commit/229368393c18f10a97837016ff10604cd0d3e69e))


### Refactoring

* clean code ([d39e9a4](https://github.com/varletjs/varlet/commit/d39e9a499ecdfdfe37f8742aa739509b9257fbe0))
* **extension:** get back components map ([840fb56](https://github.com/varletjs/varlet/commit/840fb560c37e4b48514be742a74d76d8ddf196d0))
* get back paper dark themes ([dd8d297](https://github.com/varletjs/varlet/commit/dd8d29760447d7f41bbd7d6709d3a050403ab894))
* refactoring components ([#847](https://github.com/varletjs/varlet/issues/847)) ([20b7a37](https://github.com/varletjs/varlet/commit/20b7a375287c7a2d682b57073b4ffb4eb681c251))
* **ui/avatar:** optimize code ([39153ed](https://github.com/varletjs/varlet/commit/39153ed0fbf364043451f82e70e8598b948b690b))
* **ui/avatar:** registered a lazy load directive to the component ([#859](https://github.com/varletjs/varlet/issues/859)) ([17947d5](https://github.com/varletjs/varlet/commit/17947d58c6cb9a366e6cd081619fde791b90a4ec))
* **ui/paper:** add --box ([2bdf9f4](https://github.com/varletjs/varlet/commit/2bdf9f4c0d543829c2156111069da3a8536e14f9))

## [2.7.5](https://github.com/varletjs/varlet/compare/v2.7.4...v2.7.5) (2023-02-09)


### Bug Fixes

* **ui/picker:** fix props.toolbar useless ([5e57b4f](https://github.com/varletjs/varlet/commit/5e57b4ffbc6f9e2461f4d532374272611913ceba))


### Refactoring

* **snackbar:** remove show ([2ba48f9](https://github.com/varletjs/varlet/commit/2ba48f9aa5ce3db894129bda8f88a426377d9505))
* **ui/card:** fix event args error ([8155976](https://github.com/varletjs/varlet/commit/815597668ecc0f17d0ee62fe473b0178ac1a0154))
* **usePopover:** optimize click trigger order ([9585d98](https://github.com/varletjs/varlet/commit/9585d98b7ca7f056d329c062a923f3a725cf00d9))


### Reverts

* **usePopover:** revert to bubble ([5cd3f56](https://github.com/varletjs/varlet/commit/5cd3f5620293aea97a44188a2ef3fca8de2921d0))

## [2.7.4](https://github.com/varletjs/varlet/compare/v2.7.3...v2.7.4) (2023-02-08)


### Bug Fixes

* **countdown:** replace Date to performance ([b54f31c](https://github.com/varletjs/varlet/commit/b54f31c2dbd8d089da6063926982f53b20adf326))
* fix docs ([7b44984](https://github.com/varletjs/varlet/commit/7b449848e73bf9aaf09f9165a01a2efbada5689c))
* **ui/input:** fix input overflow ([6370f62](https://github.com/varletjs/varlet/commit/6370f62cd09d8c2946165a2e704bf301d11d020a))
* **ui/select:** fix select overflow ([879cdb1](https://github.com/varletjs/varlet/commit/879cdb111fd924b6a695d3baa6c16f82addba371))


### Features

* **extension:** support playground in editor context menu ([43852fb](https://github.com/varletjs/varlet/commit/43852fba2eea39355e2f3302f4e834aa41c96527))
* **extension:** support props and events completions ([13198c5](https://github.com/varletjs/varlet/commit/13198c5de38bcff03d0ca147440b994aa42adb2f))
* **extension:** support zh-CN and en-US toggle ([92abb5e](https://github.com/varletjs/varlet/commit/92abb5ea49c237b9f6fd335a8026f5d501266f73))
* **loading-bar:** support setDefaultOptions and resetDefaultOptions ([8215585](https://github.com/varletjs/varlet/commit/82155853d030e00927c343f899e0aded299d329b))
* **snackbar:** support setDefaultOptions and resetDefaultOptions ([e13c6a2](https://github.com/varletjs/varlet/commit/e13c6a29d46bab62b6034c7b038f0b75d103bba4))
* **ui/action-sheet:** support setDefaultOptions and resetDefaultOptions ([92517c9](https://github.com/varletjs/varlet/commit/92517c9387db6da058b72759eeeb7f1f7fb2d262))
* **ui/dialog:** support setDefaultOptions and resetDefaultOptions and close [#830](https://github.com/varletjs/varlet/issues/830) ([c0cd14e](https://github.com/varletjs/varlet/commit/c0cd14ea4aacf1fa41a06cae32bf8d2b1999d8f8))
* **ui/uploader:** support closePreview and chooseFile and close [#843](https://github.com/varletjs/varlet/issues/843) ([7a86662](https://github.com/varletjs/varlet/commit/7a8666288000b3df8173ee5b068fe4688a71c768))


### Refactoring

* clean code ([0ecbcd6](https://github.com/varletjs/varlet/commit/0ecbcd69578ac5dfaa3ee525ec8f016aa0316589))
* **cli:** refactor code strong size ([a14755f](https://github.com/varletjs/varlet/commit/a14755fdc84aab11c1e9fc6f48ded8a5120a3502))
* **ui/dialog:** clean code ([0a07d4f](https://github.com/varletjs/varlet/commit/0a07d4fca9d5dd4d5f2d6c12615016e690a90bba))

## [2.7.3](https://github.com/varletjs/varlet/compare/v2.7.2...v2.7.3) (2023-02-01)


### Bug Fixes

* **cli:** fix generators ([dcc3ff7](https://github.com/varletjs/varlet/commit/dcc3ff787afcee8b3288be34a4b849ac780450a6))


### Features

* **cli:** support extension development ([dbe47a9](https://github.com/varletjs/varlet/commit/dbe47a9a89bb7ee791fe0408bcd94c66d36ac1e6))
* **cli:** support icon builder ([1cf420c](https://github.com/varletjs/varlet/commit/1cf420ce0ba17d7f5a15104991c6fba2ad8755bb))
* **cli:** support script setup ([229f4e1](https://github.com/varletjs/varlet/commit/229f4e1840eee539594430b5e21c27e09c5d7cad))
* support sfc without script blocks ([44e009d](https://github.com/varletjs/varlet/commit/44e009ddd843601c2f4b1b412e4a1d8f1c59f4cc))

## [2.7.2](https://github.com/varletjs/varlet/compare/v2.7.1...v2.7.2) (2023-01-30)


### Bug Fixes

* the sfc style cannot append to style folder ([06b0360](https://github.com/varletjs/varlet/commit/06b0360f0a684ecaa5f6f095b7df3b9adbcb2a01))


### Features

* **extension:** support icon preview and completion ([adfa778](https://github.com/varletjs/varlet/commit/adfa77883844177b56664f839e174bd8002ec964))
* **icons:** support pointCodes map ([ddd2575](https://github.com/varletjs/varlet/commit/ddd2575b9db3deff92310e84f3a0bba2b6fc48c3))


### Refactoring

* **extension:** optimize code ([2f44b83](https://github.com/varletjs/varlet/commit/2f44b83afdb3f1bfcc6b2938a45914043c3eff6d))
* **icons:** optimize color ([5ceaf0a](https://github.com/varletjs/varlet/commit/5ceaf0adc46e1b4d72fcda87bfed409319723316))
* **icons:** optimize icon size ([5ec8143](https://github.com/varletjs/varlet/commit/5ec8143c7d23dd34ae1398fee205c8095c4c011b))
* **icons:** support build png ([92f40ed](https://github.com/varletjs/varlet/commit/92f40edda61be0c7e2e2f384d9d159c9e88fbfbd))
* optimize icon ([1658796](https://github.com/varletjs/varlet/commit/16587967858e610c144f84e5720ca54e1e0d1b77))

# [2.7.0](https://github.com/varletjs/varlet/compare/v2.6.3...v2.7.0) (2023-01-27)


### Features

* **cli:** compiler standardization ([#839](https://github.com/varletjs/varlet/issues/839)) ([7ea3c5c](https://github.com/varletjs/varlet/commit/7ea3c5c1da1343e219a26b58205397e85102c5e2))


### Refactoring

* remove postcss from compile command and fix docs ([181e0ee](https://github.com/varletjs/varlet/commit/181e0eebe36a5845aa81935d8c13d22401a0283b))

## [2.6.3](https://github.com/varletjs/varlet/compare/v2.6.2...v2.6.3) (2023-01-18)


### Bug Fixes

* **index-bar:** compute offsetTop ([eefdf9d](https://github.com/varletjs/varlet/commit/eefdf9d328dbe08994b6cfbbcfd5fc8f17bd76c6))
* the swipe element cannot be found in special case and close [#834](https://github.com/varletjs/varlet/issues/834) ([172b4a3](https://github.com/varletjs/varlet/commit/172b4a3e4d68286226c82fa77d754b7eaefacfa3))
* to method repeat emit change event ([52deffa](https://github.com/varletjs/varlet/commit/52deffa3b9188f1ca6330707a8c36db20020f1f4))


### Features

* **index-bar:** add scrollTo options ([b1e1a30](https://github.com/varletjs/varlet/commit/b1e1a30aee3da63b2b4d4b62bfc773e822fdbd8a))
* **ui/swipe:** support swipeToOptions ([98d7647](https://github.com/varletjs/varlet/commit/98d76472eaf5a2b3d36ef41facbdb84ab7645b09))


### Refactoring

* **index-bar:** rename scrollToOptions ([e48f28c](https://github.com/varletjs/varlet/commit/e48f28c9bfae0407c78aabda1a7b6db292ef84b0))
* **ui/app-bar:** support font size css var ([#836](https://github.com/varletjs/varlet/issues/836)) ([d669d7c](https://github.com/varletjs/varlet/commit/d669d7c4f29ba7429ff9156227a70af70907a255))

## [2.6.2](https://github.com/varletjs/varlet/compare/v2.6.1...v2.6.2) (2023-01-12)


### Bug Fixes

* **ui/pull-refresh:** fix pull-refresh touchMove ([#829](https://github.com/varletjs/varlet/issues/829)) ([1614e73](https://github.com/varletjs/varlet/commit/1614e733a0144572883a70a0f859ea95a4ad88a8))


### Refactoring

* **pull-refresh:** optimize touchmove ([70173ff](https://github.com/varletjs/varlet/commit/70173ff0c7f1f23e8c37965ed84df4dc47e37f08))

## [2.6.1](https://github.com/varletjs/varlet/compare/v2.6.0...v2.6.1) (2023-01-11)


### Features

* support native-type and fix overlay auto import error ([35097ca](https://github.com/varletjs/varlet/commit/35097ca2285f38f175934b07c5b7b117d8d1cc4d))

# [2.6.0](https://github.com/varletjs/varlet/compare/v2.5.6...v2.6.0) (2023-01-10)


### Features

* support vite4 and create a new package vite-plugins ([#824](https://github.com/varletjs/varlet/issues/824)) ([34bbb86](https://github.com/varletjs/varlet/commit/34bbb86038916a9303a57a2938a0a29727965137))

## [2.5.6](https://github.com/varletjs/varlet/compare/v2.5.5...v2.5.6) (2023-01-07)


### Bug Fixes

* **pagination:** watch page-count and close [#820](https://github.com/varletjs/varlet/issues/820) ([a4bb395](https://github.com/varletjs/varlet/commit/a4bb3952f2a7a7cddf2eb48ae8a6f44e0a120623))


### Refactoring

* **playground:** fix main file error ([0ffe807](https://github.com/varletjs/varlet/commit/0ffe80787fc9de91ef36078bc6e2b3e5136ec45c))
* **ui/pull-refresh:** optimize the behavior of touchmove prevent default ([c450a7c](https://github.com/varletjs/varlet/commit/c450a7cc62e874af8b0ed94b7fb86b698562b7bf))

## [2.5.5](https://github.com/varletjs/varlet/compare/v2.5.4...v2.5.5) (2023-01-05)


### Bug Fixes

* **back-top:** add default z-index ([f9f45fb](https://github.com/varletjs/varlet/commit/f9f45fb379a67b9a4ad671a928815ce8705a85bb))
* **pull-refresh:** add lock and close [#814](https://github.com/varletjs/varlet/issues/814) ([08b04e3](https://github.com/varletjs/varlet/commit/08b04e36d8d7e19d161034bc2c3cff4115b0d9f9))
* **ui/uploader:** before-remove event mission file params ([db0870e](https://github.com/varletjs/varlet/commit/db0870ef6e38dff59e2050e5cbf8d467ed0a7027))


### Refactoring

* **playground:** bump repl version and refactor code ([1aa1547](https://github.com/varletjs/varlet/commit/1aa1547612554c00760ddbe688d348ca9c20ada7))
* remove unused variable ([1a5caa4](https://github.com/varletjs/varlet/commit/1a5caa47c0464291676dddbac38540600550a070))

## [2.5.4](https://github.com/varletjs/varlet/compare/v2.5.3...v2.5.4) (2023-01-05)


### Features

* **pull-refresh:** add target prop and close [#811](https://github.com/varletjs/varlet/issues/811) ([47537b6](https://github.com/varletjs/varlet/commit/47537b690b48ed71e69587eac2449a0dfe636788))

## [2.5.3](https://github.com/varletjs/varlet/compare/v2.5.2...v2.5.3) (2023-01-04)


### Bug Fixes

* **ui/menu:** fix elevation display error ([91a83c4](https://github.com/varletjs/varlet/commit/91a83c4b674a790f089b514167d892f1725bd01c))

## [2.5.2](https://github.com/varletjs/varlet/compare/v2.5.1...v2.5.2) (2023-01-04)


### Features

* **ui/menu:** support sameWidth prop ([5fda8b7](https://github.com/varletjs/varlet/commit/5fda8b7cb487b6aea442e3cc6f8d27660ef98ff3))

## [2.5.1](https://github.com/varletjs/varlet/compare/v2.5.0...v2.5.1) (2023-01-02)


### Bug Fixes

* fix scroll form item error and close [#807](https://github.com/varletjs/varlet/issues/807) ([6f44de4](https://github.com/varletjs/varlet/commit/6f44de4c36b8798b141433b5f59611493cd9d6c7))


### Refactoring

* **ui/form:** clean code ([0ad6755](https://github.com/varletjs/varlet/commit/0ad6755b5f7aff7a256aea08ca6b1083ae58ab72))

# [2.5.0](https://github.com/varletjs/varlet/compare/v2.4.2...v2.5.0) (2023-01-01)


### Bug Fixes

* **cli:** fix less compile order error ([e9d8d1f](https://github.com/varletjs/varlet/commit/e9d8d1fb5e41c7f7aca383e3659a929cfc60b030))
* **ui/popup:** fixed not being able to scroll when popup content overflowed ([7867282](https://github.com/varletjs/varlet/commit/78672828c08c1a411c445f62bec5aa25585ccbce))
* **ui/space:** support ssr ([fc81fe7](https://github.com/varletjs/varlet/commit/fc81fe7048d63a58aeec41bb07a52b7d4564836b))


### Features

* new component tooltip ([08f0d52](https://github.com/varletjs/varlet/commit/08f0d52c330353008f706b503f9a5f976baf9278))
* **ui/breadcrumb:** add router ([7677275](https://github.com/varletjs/varlet/commit/7677275eeee96ea65a6b2a8302af21bb170dd3a1))
* **ui/breadcrumb:** var-breadcrumb complete ([1dc4741](https://github.com/varletjs/varlet/commit/1dc47418342b462c5ea9063cc4a424278a830dd1))
* **ui/card:** add outline ([0bb33bb](https://github.com/varletjs/varlet/commit/0bb33bb5d847a8d951eff2d6fc6b50c3e90424ba))
* **ui/form:** form support scroll to last error ([1776ec0](https://github.com/varletjs/varlet/commit/1776ec06e462d6e1dd85bc91d2e77ff2f7efe03c))
* **ui/form:** support scroll animation ([466916c](https://github.com/varletjs/varlet/commit/466916ca5224aeb1771ee8a281af286050ef46ae))
* **ui/form:** support scroll to first error ([f620514](https://github.com/varletjs/varlet/commit/f620514e29059ad7a4e9633c85b56a33beb6873b))
* **ui/icon:** optimized the way to customize the icon library ([c73531c](https://github.com/varletjs/varlet/commit/c73531cb6e1ea6aa3638608d28739953ec00d61b))
* **ui/select:** support selected slot ([6a6ebe0](https://github.com/varletjs/varlet/commit/6a6ebe0330cd972acf495b73427e033e5a23a5cd))
* **ui/space:** replace dynamically calculated margin with css var ([e55c546](https://github.com/varletjs/varlet/commit/e55c54600eb126e9e6dc98f26291d1b3caef2a9d))
* **ui/space:** use calc to handle margin ([cc80a19](https://github.com/varletjs/varlet/commit/cc80a19c691e496f5c013a7b0c26869aa40beded))
* **ui/sticky:** support resize method ([7b1db86](https://github.com/varletjs/varlet/commit/7b1db86505fecf05ce523ef17e40224ac6a3f0cb))
* **ui/tabs:** support more sticky props and sticky support resize ([d49488d](https://github.com/varletjs/varlet/commit/d49488dd051e644d1be0602eed4606256a6fa829))


### Performance Improvements

* **ui/breadcrumb:** optimize  breadcrumb docs ([2fb88fe](https://github.com/varletjs/varlet/commit/2fb88fe0f3345b4556bb95546d0e1a7fc7d43b84))
* **ui/breadcrumb:** optimize breadcrumb component ([611441a](https://github.com/varletjs/varlet/commit/611441a7274a956ae7bc3ecefb91513407f07001))
* **ui/breadcrumb:** optimize breadcrumb component ([6a68368](https://github.com/varletjs/varlet/commit/6a68368ab479b8eb85a7065a2074013f930dbb69))


### Refactoring

* add comment ([22fb2c5](https://github.com/varletjs/varlet/commit/22fb2c56cfaaa2acdff8608a76709805ce5b3721))
* clean code ([ffcfe60](https://github.com/varletjs/varlet/commit/ffcfe60c67b2852130726a81c60b52e1f4c9cb41))
* **extension:** support tooltip ([#800](https://github.com/varletjs/varlet/issues/800)) ([1e6c624](https://github.com/varletjs/varlet/commit/1e6c624e77df634d2d3d0ca676c086f09a523142))
* refactor menu and tooltip ([360bfe2](https://github.com/varletjs/varlet/commit/360bfe22b1a177ba960edae3291225ca0af40393))
* remove common import from elevation ([bc9834e](https://github.com/varletjs/varlet/commit/bc9834ec8204c77e6510967cf135cf6087d0658a))
* support array listener ([c6bc29c](https://github.com/varletjs/varlet/commit/c6bc29ce918a884df0201f70be4a8087e197782d))
* support array listener ([ae1f69d](https://github.com/varletjs/varlet/commit/ae1f69d70033a8cefc91ba70117a9e9dcb289189))
* support array listener ([ecbdffd](https://github.com/varletjs/varlet/commit/ecbdffde20d5cf9d86ac331bdf62f3a11b651940))
* **tooltip:** refactor css var ([#801](https://github.com/varletjs/varlet/issues/801)) ([0a74f2c](https://github.com/varletjs/varlet/commit/0a74f2c0a0dc04ddffd72c67414614182abfd46f))
* **tooltip:** refactor docs ([#802](https://github.com/varletjs/varlet/issues/802)) ([aa6f075](https://github.com/varletjs/varlet/commit/aa6f075c36e9b0218807019497e0e859e895e2df))
* **ui/BottomNavigation:** support array listener ([71bd68c](https://github.com/varletjs/varlet/commit/71bd68cbaa2433d32343312c118f07c53d97038e))
* **ui/breadcrumbs:** clean code ([12adaf6](https://github.com/varletjs/varlet/commit/12adaf6235208a69b3b346325557ad142e8bc463))
* **ui/breadcrumbs:** optimize code ([4a28b51](https://github.com/varletjs/varlet/commit/4a28b51f7908b2313508671075a6c36f54e23cde))
* **ui/breadcrumbs:** refactor all code ([44ee8d5](https://github.com/varletjs/varlet/commit/44ee8d5f854e4011b3e835dc7ac1a0aebabc27c5))
* **ui/card:** opt outline code ([dbdb17f](https://github.com/varletjs/varlet/commit/dbdb17f60d0b669f24536dddccdbfde829fd875a))
* **ui/checkbox, chip:** support array listener ([1e101dd](https://github.com/varletjs/varlet/commit/1e101dd2bd5522c454cb0cdb8e032cd38bf3b985))
* **ui/col, counter:** support array listener ([9ab2d67](https://github.com/varletjs/varlet/commit/9ab2d670738bb6bfad838b4a445044fa4013ea9d))
* **ui/dialog:** support array listener ([ea52fed](https://github.com/varletjs/varlet/commit/ea52fed4c2b7e17a635d4e9db97e986311a82a41))
* **ui/form:** fix scroll ([709fe49](https://github.com/varletjs/varlet/commit/709fe492f6de64cdf7a7a281dc1896a55afcebc4))
* **ui/icon:** remove unuseful namespace class mounted ([c7aef50](https://github.com/varletjs/varlet/commit/c7aef505c95689998d5c0765dc9b4a62fc2d681a))
* **ui/image-preview, input:** support array listener ([ae5e054](https://github.com/varletjs/varlet/commit/ae5e054a04a3979a5d7e133d4da7e89c79cc77d5))
* **ui/image, icon:** support array listener ([de87dd6](https://github.com/varletjs/varlet/commit/de87dd67ddd4e1401fdeb654fd071d6eaeb80d87))
* **ui/link, list:** support array listener ([7edd9d4](https://github.com/varletjs/varlet/commit/7edd9d4111bfe1421a61e969ea94824fe5c75432))
* **ui/menu:** clean code ([6d1cb9f](https://github.com/varletjs/varlet/commit/6d1cb9f8f01cc27e5d88769309a4b27701e1f4c4))
* **ui/overlay, menu, picker:** support array listener ([20aa6ea](https://github.com/varletjs/varlet/commit/20aa6ea45393ed760747eaa85ea616d116b06766))
* **ui/radio, popup:** support array listener ([4bc431f](https://github.com/varletjs/varlet/commit/4bc431fadd00345f0d214b4fec835d7fb30869c8))
* **ui/rate, row:** support array listener ([187de50](https://github.com/varletjs/varlet/commit/187de50740d371030c98fe84f8214fa34ea3be0c))
* **ui/select, sticky:** support array listener ([cd48d60](https://github.com/varletjs/varlet/commit/cd48d606c475b3d3982e04c6e51cadcff32eafb5))
* **ui/select:** optimize selected slot display ([2f03ed4](https://github.com/varletjs/varlet/commit/2f03ed48e7abc4fa486ccf0dbf7645725ef825af))
* **ui/space:** add plugin options ([10bcf66](https://github.com/varletjs/varlet/commit/10bcf66859b436c7e127c1f0ee487a5012bc3fd6))
* **ui/space:** support ssr ([414d7f1](https://github.com/varletjs/varlet/commit/414d7f1830d8c669f2647e335da1d217e25d5594))
* **ui/tooltip:** optimize code ([7bfec23](https://github.com/varletjs/varlet/commit/7bfec23bc0e6f6b5cc637dc345daaac391979112))
* **ui/tooltip:** refactor tooltip docs and styles ([8434ba4](https://github.com/varletjs/varlet/commit/8434ba40ebdc9589f6a05a8bb3e6e2a50e62c67a))
* **ui/uploader:** support array listener ([1e0c9dd](https://github.com/varletjs/varlet/commit/1e0c9dd7d4e1a0c993a73f179d3db1e5548e8d37))

## [2.4.2](https://github.com/varletjs/varlet/compare/v2.4.1...v2.4.2) (2022-12-14)


### Bug Fixes

* **ui/input:** fix maxlength invalid with number type and close [#775](https://github.com/varletjs/varlet/issues/775) ([edf4a2e](https://github.com/varletjs/varlet/commit/edf4a2efeb0d75f1f818c0e8b986cb2dcc2ac2be))

## [2.4.1](https://github.com/varletjs/varlet/compare/v2.4.0...v2.4.1) (2022-12-11)


### Bug Fixes

* **pull-refresh:** fix contorl position and close [#774](https://github.com/varletjs/varlet/issues/774) ([9dc871c](https://github.com/varletjs/varlet/commit/9dc871cc8b586751dcbe17e42dfd266e9a057cab))

# [2.4.0](https://github.com/varletjs/varlet/compare/v2.3.1...v2.4.0) (2022-12-11)


### Bug Fixes

* change overlay test className ([093cbaa](https://github.com/varletjs/varlet/commit/093cbaaaf375c771c260e0f6a9f39f691f749288))
* recover popup root style ([61bdede](https://github.com/varletjs/varlet/commit/61bdede3e5bcff80a6d1fba8c069a271fba27201))
* replace popup overlay ([d9a7e8d](https://github.com/varletjs/varlet/commit/d9a7e8dd43b112496cff1bd8fd319521598b17b6))
* reset popup ([5b710e7](https://github.com/varletjs/varlet/commit/5b710e70fcf1037a65179516a3b4a2801ab54ec0))
* **site:** replace progress to loading-bar ([d5a9b0e](https://github.com/varletjs/varlet/commit/d5a9b0e6f0c78036290fa8164e75e39dc8e8e9cf))


### Features

* add overlay click event ([4853339](https://github.com/varletjs/varlet/commit/4853339d8a29942110c58eb279b956d81d878db0))
* **extension:** support result ([d71bd13](https://github.com/varletjs/varlet/commit/d71bd1324e12e39f46f14061139b6174db46ba11))
* init overlay component ([5847685](https://github.com/varletjs/varlet/commit/58476856b5bcf3ff07a082192fcb3a214b947e02))
* loading-bar ([8290395](https://github.com/varletjs/varlet/commit/82903955a40524ccd7ce91d1b0fb8d9d443dca20))
* overlay test spec ([835b33e](https://github.com/varletjs/varlet/commit/835b33eae86e508eb011b758d05f65f20cf11e9e))
* **ui/app-bar:** support round prop ([21557ea](https://github.com/varletjs/varlet/commit/21557ea69814b5456dac806f9e98fa764b83d5f1))
* **ui/popup:** add defaultStyle prop ([7ae22f3](https://github.com/varletjs/varlet/commit/7ae22f37318ec4c4bc54b6c868dd6433224aa0ac))


### Refactoring

* **loading-bar:** add top prop ([247abf8](https://github.com/varletjs/varlet/commit/247abf802ae49c445d4fb0141c13b5f482357767))
* **loading-bar:** optimize code ([b81a642](https://github.com/varletjs/varlet/commit/b81a642a9c4c7a759d2758c64e8db76990c78b14))
* optimize animate ([a0650ff](https://github.com/varletjs/varlet/commit/a0650ff70ddd23fe1ca213ae28d45f232816e9b1))
* optimize animate ([26d4a21](https://github.com/varletjs/varlet/commit/26d4a217f91021b93a8c7aaf7f5db5c1d30cf19f))
* optimize code ([03af76a](https://github.com/varletjs/varlet/commit/03af76a9cbb00c46f1ad1dd0a1c6c70234ed70a3))
* **overlay:** optimize code ([#769](https://github.com/varletjs/varlet/issues/769)) ([1479f3a](https://github.com/varletjs/varlet/commit/1479f3a4af3c74588926c59b840698fea40ea8f4))
* refactor site hash replace ([a436929](https://github.com/varletjs/varlet/commit/a436929e6bc967ba01b50900d92bc74092147f91))
* revert router replace ([78c9ce6](https://github.com/varletjs/varlet/commit/78c9ce6fb81f2774a2d5c5f69cfdc1e45b82727b))
* **site:** fix to window.parent ([b7bfb19](https://github.com/varletjs/varlet/commit/b7bfb1936d68a4e9c7d90deec8839ecfdedb4b94))
* **ui/card:** opt code ([64d907d](https://github.com/varletjs/varlet/commit/64d907d71f1fb5fa26f5dfeaca56d36dcf6b3b3d))
* **ui/result:** add empty ([5f5de0e](https://github.com/varletjs/varlet/commit/5f5de0ead8bc467eea3226b801c891658cd0968e))
* **ui/result:** add error waring question ([4316f80](https://github.com/varletjs/varlet/commit/4316f8040583a4084d555cf4bc03f7b9beced9d0))
* **ui/result:** add examples ([60b55a0](https://github.com/varletjs/varlet/commit/60b55a0f854ad6446498c3c3bdb5fdb59d72698f))
* **ui/result:** add info error warning ([569d5db](https://github.com/varletjs/varlet/commit/569d5dbe345cde498ce5a12c7b7459dc125798bd))
* **ui/result:** add shake animation ([d3c8205](https://github.com/varletjs/varlet/commit/d3c8205ad43055a33a36dfd6a4644f66ebdb546d))
* **ui/result:** add success component ([06a0ffb](https://github.com/varletjs/varlet/commit/06a0ffb91694fceb900cff628a584c21b271fcc4))
* **ui/result:** add types ([3f60b95](https://github.com/varletjs/varlet/commit/3f60b9555fc19a25e631397b5b740c7367333f4e))
* **ui/result:** change status prop to type ([30c14a6](https://github.com/varletjs/varlet/commit/30c14a62eb7e8d6a4d40c9a78ad1e29b3d29499f))
* **ui/result:** clean code ([ee3cce0](https://github.com/varletjs/varlet/commit/ee3cce030a902864bad70d06686259c691ea654d))
* **ui/result:** fix css ([c1fd41f](https://github.com/varletjs/varlet/commit/c1fd41f059c98cb939642ac28f739ff93f7eef8b))
* **ui/result:** fix style ([d583f94](https://github.com/varletjs/varlet/commit/d583f9405bfb97bd3f0e9e270a6832b77b488cab))
* **ui/result:** fix success animation ([cc9902a](https://github.com/varletjs/varlet/commit/cc9902aaed1a5aa0bd37f9d543a42b444ec1691c))
* **ui/result:** fix success animation ([8f8bf95](https://github.com/varletjs/varlet/commit/8f8bf950f3e6fc36d638aa8a7f6cce3ffe35cf37))
* **ui/result:** opt code structure ([d1909f7](https://github.com/varletjs/varlet/commit/d1909f742e89e8d00480b13c79503af04bfa50f4))
* **ui/result:** opt dark style && docs ([caad4af](https://github.com/varletjs/varlet/commit/caad4afe421ec6dd09ccb761f0693720b5c2a1f8))
* **ui/result:** opt style code ([cb0f899](https://github.com/varletjs/varlet/commit/cb0f8990a9c6d9040a450948bc1e41c8865a2f88))
* **ui/result:** optimize animation ([5059651](https://github.com/varletjs/varlet/commit/5059651e9e0281658379be2c4b0a86aa7edc2e15))
* **ui/result:** optimize animation ([f002ca0](https://github.com/varletjs/varlet/commit/f002ca0c0ea8db2c49838417f937308283ff7135))
* **ui/result:** optimize code ([d334c87](https://github.com/varletjs/varlet/commit/d334c877fbe176e47535bb3c3b834c49b4a1eee7))
* **ui/result:** optimize code ([12c2f71](https://github.com/varletjs/varlet/commit/12c2f714f53d2ee18e09145f3eea14a678b79406))
* **ui/result:** optimize example ([6ca5488](https://github.com/varletjs/varlet/commit/6ca548895415f207109e0ced68e5f8bd7bcea632))
* **ui/result:** reset error style ([c451e4f](https://github.com/varletjs/varlet/commit/c451e4f24fc99df62abe9aee2b686ff6a9a229f0))
* **ui/result:** reset success question error style ([7d96f7a](https://github.com/varletjs/varlet/commit/7d96f7ab18ebcab331a9b856ab27daf6439ffff5))
* **ui/result:** rewrite class name ([e74cb84](https://github.com/varletjs/varlet/commit/e74cb847ec98afdf7f3915b970819426e141ddc5))

## [2.3.1](https://github.com/varletjs/varlet/compare/v2.3.0...v2.3.1) (2022-11-28)


### Refactoring

* remove unuseful prop ([b75cd46](https://github.com/varletjs/varlet/commit/b75cd46b14a5c2883f26cbefb1fe042dd0c5247a))

# [2.3.0](https://github.com/varletjs/varlet/compare/v2.2.1...v2.3.0) (2022-11-28)


### Bug Fixes

* **button:** remove default value of circle and close [#761](https://github.com/varletjs/varlet/issues/761) ([aafdb12](https://github.com/varletjs/varlet/commit/aafdb123ee87a7dff1d32b63c900ecfc110dd268))
* some unusual behavior of LOGO animation ([99d3846](https://github.com/varletjs/varlet/commit/99d38462e6dcfe8dff28aa7476dba6527cd3cc70))
* **space:** remove width ([cb92a53](https://github.com/varletjs/varlet/commit/cb92a536f2de2b44e9f28cab1f493669a526ef7c))


### Features

* **ui/link:** support link component ([c6c8b8d](https://github.com/varletjs/varlet/commit/c6c8b8d4a4a85cbe5d05442f5fe6ad3cc5e2277d))


### Refactoring

* **extension:** add link component to extension ([23f8863](https://github.com/varletjs/varlet/commit/23f8863f34ec575e456a451677fa8b1116ec497d))
* **link:** optimize code ([5cfaa95](https://github.com/varletjs/varlet/commit/5cfaa95065f24470d8efdf3b9bc5c405672e870d))
* optimize link, chip, button ([a5787a0](https://github.com/varletjs/varlet/commit/a5787a0688734718e5a385cab8a8ff3ea68446a8))
* **ui/link:** default style use dispaly: inline-flex ([9432139](https://github.com/varletjs/varlet/commit/94321391687636326003facc92efc6495da75cb0))
* **ui/link:** optimize link attrs ([f249c9e](https://github.com/varletjs/varlet/commit/f249c9e79c0dbed4e7c84a26659219bc629d23ca))
* use namespace to replace class ([904568f](https://github.com/varletjs/varlet/commit/904568f69160dad68498c4899b41ca3388622468))

## [2.2.1](https://github.com/varletjs/varlet/compare/v2.2.0...v2.2.1) (2022-11-15)


### Bug Fixes

* **ui/tabs-items:** tabs-items cannot swipe to correct position when props.active initializes ([6ec8639](https://github.com/varletjs/varlet/commit/6ec8639086fd68d27df5bab1fa844645ceac59ea))

# [2.2.0](https://github.com/varletjs/varlet/compare/v2.1.0...v2.2.0) (2022-11-11)


### Features

* **extension:** support form-details ([20e8655](https://github.com/varletjs/varlet/commit/20e86551b11dca95378010e12231acefb68ebe83))
* support custom form component and refactor form-details and refactor form styles ([00ec07b](https://github.com/varletjs/varlet/commit/00ec07b830f1c87662a074d9f1478739e15d8334))


### Refactoring

* add css variable ([de9031c](https://github.com/varletjs/varlet/commit/de9031c60a240e3ac49db7edea59581d4738e38c))
* add css variable & add rate text color ([2ce5f22](https://github.com/varletjs/varlet/commit/2ce5f2284cd31e10541efc8719936e350beeb0b9))
* add transtion ([c146cc9](https://github.com/varletjs/varlet/commit/c146cc94859a6b42f6173da8f1072df76dcb9303))
* **eslint-config:** fix rule ([4e5faf6](https://github.com/varletjs/varlet/commit/4e5faf6129b4926508ddf681ade9b857457fb1b5))
* form components style ([3ee9480](https://github.com/varletjs/varlet/commit/3ee9480eecb208c2c167bce64b499d6bc8b350bf))
* optimize transition ([5d3a7fe](https://github.com/varletjs/varlet/commit/5d3a7fe9da420f062c0aea23b72b8b4c98f9c4a2))
* **ui/counter:** refactor error style ([a2dc0d3](https://github.com/varletjs/varlet/commit/a2dc0d3d9b2f3d94da4c3faf5969537232317a51))
* **ui/counter:** refactor error style ([9361bd0](https://github.com/varletjs/varlet/commit/9361bd0da2396d6714fa55d48ba6dc443ce370d1))

# [2.1.0](https://github.com/varletjs/varlet/compare/v2.0.6...v2.1.0) (2022-10-31)


### Bug Fixes

* **cli/create:** fix path of create template ([a48e875](https://github.com/varletjs/varlet/commit/a48e875c4c1d77a1c45a17184f4d7c53cd9e9d05))
* error suffix when create tsx component ([#736](https://github.com/varletjs/varlet/issues/736)) ([dc4feac](https://github.com/varletjs/varlet/commit/dc4feacd0870c4fdeb67f302e01268185f507bcf))
* pathToFileURL ([0917537](https://github.com/varletjs/varlet/commit/0917537ac5a1f999b4b97f169feba869b5d0eb1c))
* **site:** allow playground copy url ([4cc9c61](https://github.com/varletjs/varlet/commit/4cc9c61648cd68c72cab6d2d18a078c286455b72))
* **slider:** change slotProps ([8baf42a](https://github.com/varletjs/varlet/commit/8baf42a98b4bf2d0118363fe47ac4003dd75db09))
* **ui/collapse:** fix shadow invisibility of collapse ([#734](https://github.com/varletjs/varlet/issues/734)) ([038f807](https://github.com/varletjs/varlet/commit/038f8077e8ccc754bb4f50c0e47ec579dcfd36dd))


### Features

* **icons:** migrate esm ([e6704a0](https://github.com/varletjs/varlet/commit/e6704a03e017537312ec1f039cf4b283045fce4c))
* **slider:** support max and min props and close [#732](https://github.com/varletjs/varlet/issues/732) ([48c2633](https://github.com/varletjs/varlet/commit/48c26330c2a5dee028d52da1abad4a1b114bb998))
* **ui/select:** add arrow-icon slot ([#738](https://github.com/varletjs/varlet/issues/738)) ([68ceec9](https://github.com/varletjs/varlet/commit/68ceec94c3e3e45df9565e4de3dcf5dcd774e926))


### Refactoring

* add getCurrentFile & allowJs ([6178bc2](https://github.com/varletjs/varlet/commit/6178bc23a31a4c760aea2701343c6ff802e81341))
* add js extension ([1896822](https://github.com/varletjs/varlet/commit/189682247b350867ce4698f356cba3aa26820e24))
* add js extension ([4c9ea5b](https://github.com/varletjs/varlet/commit/4c9ea5b600949b0bb1209073958649265da262ae))
* change babel preset of template and add git init hint ([4ddae49](https://github.com/varletjs/varlet/commit/4ddae4987af4e850534495f2de0e52a9d6eed613))
* change import path to cli/client ([04e058b](https://github.com/varletjs/varlet/commit/04e058b298fcc609bb2f387c9e64a458617a58ac))
* **cli:** fix package.json ([76e8102](https://github.com/varletjs/varlet/commit/76e81020a17d8714ea3a07d9badf8ecdd87cb354))
* **cli:** rename function name ([84eb20c](https://github.com/varletjs/varlet/commit/84eb20c528eb87f31ef221885b17bb896dd41c3f))
* **cli:** split client and node ([ff132f8](https://github.com/varletjs/varlet/commit/ff132f812baf7c27b1f76f0828619fb2952f1f2e))
* code style && move methods to utils ([ae13e10](https://github.com/varletjs/varlet/commit/ae13e10c755d03f223faab6f347187f766989739))
* expose watch methods and app-type by client ([5b55935](https://github.com/varletjs/varlet/commit/5b55935884ccf9115f18a89f08db948f979bb09a))
* fix package.json ([9bf46ef](https://github.com/varletjs/varlet/commit/9bf46ef2cb43a5f75770e0eb3c3b4c4babdca0d5))
* migrate to esm ([b15a0ed](https://github.com/varletjs/varlet/commit/b15a0eda67baafff42bf7ebb383f9e8379c2f53d))
* modify readJsonSync import type ([20d8ed4](https://github.com/varletjs/varlet/commit/20d8ed494079fee804876c6e548aaffd81ba1aab))
* move default.config to config folder ([9500099](https://github.com/varletjs/varlet/commit/95000999cc1a5bd87d0d09dacca0e95ea08f6a9f))
* move withSiteConfigNamespace to index ([9c67fc3](https://github.com/varletjs/varlet/commit/9c67fc36840f3a48c626c1663b17ba7fbfeb28ca))
* refactor cli client api ([f5caf3d](https://github.com/varletjs/varlet/commit/f5caf3dc641d658d37770d2aa5b43c7eb8ab3263))
* refactor client entry ([2ddd096](https://github.com/varletjs/varlet/commit/2ddd096567a303e27e7c4825ddc9ef6628eda050))
* **ui/select:** optimize select arrow icon ([583babe](https://github.com/varletjs/varlet/commit/583babec5b08a6b43c45149cee8147a442a6ef61))

## [2.0.6](https://github.com/varletjs/varlet/compare/v2.0.5...v2.0.6) (2022-10-20)


### Bug Fixes

* fix select disabled and readonly bug ([#731](https://github.com/varletjs/varlet/issues/731)) ([411d327](https://github.com/varletjs/varlet/commit/411d3272f29d0ed778f886485d2f925d56306842))


### Features

* **cli/release:** add branch confirm ([6f3c764](https://github.com/varletjs/varlet/commit/6f3c764f4b70e13b9930d1e6858dc75ada3d753b))


### Refactoring

* **release:** rename branch to refs ([587522c](https://github.com/varletjs/varlet/commit/587522cfedc953bc5372edbaf949073e62f783f0))

## [2.0.5](https://github.com/varletjs/varlet/compare/v2.0.4...v2.0.5) (2022-10-19)


### Bug Fixes

* **ui/BottomNavigation:** change repeat trigger ([#729](https://github.com/varletjs/varlet/issues/729)) ([a61147f](https://github.com/varletjs/varlet/commit/a61147fca6694196268278dd7b7f99691ca73b0b))
* **ui/divider:**  0.5px affects text display ([3e51cec](https://github.com/varletjs/varlet/commit/3e51cec5ef1533ce38bbbd23f497afea8eb956b7))


### Features

* **ui/divider:** add hairline divider ([03102d4](https://github.com/varletjs/varlet/commit/03102d4047253cbdab11861d699a50e9b3919636))

## [2.0.4](https://github.com/varletjs/varlet/compare/v2.0.3...v2.0.4) (2022-10-19)

## [2.0.3](https://github.com/varletjs/varlet/compare/v2.0.2...v2.0.3) (2022-10-15)


### Bug Fixes

* **config:** fix features merge strategy ([c3a378f](https://github.com/varletjs/varlet/commit/c3a378f9b43085888f5610dc739f45b28795e7e1))

## [2.0.2](https://github.com/varletjs/varlet/compare/v2.0.1...v2.0.2) (2022-10-13)


### Features

* **ui/image:** support title prop ([48462bb](https://github.com/varletjs/varlet/commit/48462bbf81d24e7558295e86ec543e6fed0a6d04))


### Refactoring

* **cli:** optimize comment ([ab90d4b](https://github.com/varletjs/varlet/commit/ab90d4b15f86209933d7c4eaa632f7ca727f1e02))

## [2.0.1](https://github.com/varletjs/varlet/compare/v2.0.0...v2.0.1) (2022-10-13)


### Features

* **cli:** add defineConfig for type helper ([#721](https://github.com/varletjs/varlet/issues/721)) ([84579f4](https://github.com/varletjs/varlet/commit/84579f488a7ca800e083c97019b6f6fd785b9fa3))


### Refactoring

* **cli:** remove less side effects ([d99cef8](https://github.com/varletjs/varlet/commit/d99cef890f8908b2b1a9f8c5c9cc911c61762857))

# [2.0.0](https://github.com/varletjs/varlet/compare/v1.27.20...v2.0.0) (2022-10-11)


### BREAKING CHANGES

* **time-picker&date-picker:** rename shadow to elevation
* **cli:** remove less themes support
* **ui/card:** remove props height
* **cell:** rename desc to description


### Bug Fixes

* **button&snackbar:** add loading color prop ([d4353b5](https://github.com/varletjs/varlet/commit/d4353b5fad0d9309531bc12863ddb13e3f942305))
* **cli/commitlint:** add ！for break change ([86ec583](https://github.com/varletjs/varlet/commit/86ec5839128077d668a76b910279626437ebc909))
* **cli/gen:** rename gitignore ([a60ebd0](https://github.com/varletjs/varlet/commit/a60ebd045d1809416cbfd3aa9f756bc410bdca1c))
* **jest:** ensure to generate config ([876ba35](https://github.com/varletjs/varlet/commit/876ba3531f57d08573b7a033c888c766870913db))
* **loading & pagination:** expose loading color variable and optimize style of pagination ([1f36c80](https://github.com/varletjs/varlet/commit/1f36c809540e8b1f4c9eb4d60d10930da6d6cd19))
* **playground:** remove import about vite and fix ts error ([cf261e6](https://github.com/varletjs/varlet/commit/cf261e6b6c27812bf154ed3c82734fb8289e27bd))
* **rate:** fix wrong style in form component ([4cae7e0](https://github.com/varletjs/varlet/commit/4cae7e0bf4885ee7cf6f91c12c705629f76e2807))
* **slider:** ignore slider track height ([2387b16](https://github.com/varletjs/varlet/commit/2387b16a809c9da83a8a49caa3badd4e9338f222))
* **ui/button,chip:** remove line-height ([ec72772](https://github.com/varletjs/varlet/commit/ec72772122a0ae6b6f6805261599cde94663bb92))
* **ui/card:** fix scroll lock err ([5f12819](https://github.com/varletjs/varlet/commit/5f128192582d383e2f6bd5c90db88cab9265db15))
* **ui/card:** fix the problem of ripple accidental failure ([facd510](https://github.com/varletjs/varlet/commit/facd5101fe18ef98efb0df840c7de5ecdf2fc4e4))


### Features

* **cli:** replace jest with vitest ([7ddbade](https://github.com/varletjs/varlet/commit/7ddbade1840ad93a9dadfeb1ce2a2dd914a0143b))
* export dark theme and playground support dark theme preview ([cede810](https://github.com/varletjs/varlet/commit/cede810856f756712c6bfe352d7d026c067330c6))
* **gen:** add simple-git-hooks scripts ([c1c6cd1](https://github.com/varletjs/varlet/commit/c1c6cd1b5c61701bcc6e3fd6e5cad48fe99e7cc4))
* **style-provider:** support custom tag ([ed653e6](https://github.com/varletjs/varlet/commit/ed653e6510f310265e1dad757ce008e9b587fef2))
* **ui/col:** add a direction API for col ([#716](https://github.com/varletjs/varlet/issues/716)) ([6a30c8e](https://github.com/varletjs/varlet/commit/6a30c8ed9305d0d32e42439ec5cc8cc6fb37e82b))
* **ui/dialog:** add width props ([#718](https://github.com/varletjs/varlet/issues/718)) ([916ee21](https://github.com/varletjs/varlet/commit/916ee21c6c01b12066e9126a62c50609790ed737))
* **ui/locale:** export zh-CN en-US language ([e4eecf0](https://github.com/varletjs/varlet/commit/e4eecf0f3525f7f40abcd7caf7b2721a75584f45))
* **ui/menu-v2:** new menu component to replace old menu component, temporarily named v2 ([a2d621a](https://github.com/varletjs/varlet/commit/a2d621a8885dd20626ebe3f3ab61a4fcc9c487fb))
* **ui/menu:** replace menuV2 with menu ([#690](https://github.com/varletjs/varlet/issues/690)) ([cbf117d](https://github.com/varletjs/varlet/commit/cbf117d76924644845509da09e2aed39d380710b))
* **ui/tabs-items:** support getSwipe method ([23ffad1](https://github.com/varletjs/varlet/commit/23ffad12f643e47ec1fdd8e42f669005fd4426ad))


### Performance Improvements

* Improved Menu performance and Flip bugs ([#680](https://github.com/varletjs/varlet/issues/680)) ([f582c78](https://github.com/varletjs/varlet/commit/f582c783ff1e4435f5d6f03d5ce8658df84a7f04))


### Refactoring

* add confirm when the playground close ([081f756](https://github.com/varletjs/varlet/commit/081f756101898c7c9aabbf73e22b34add071edba))
* add polyfill for globalThis and padStart ([8354c5e](https://github.com/varletjs/varlet/commit/8354c5ef113552437d5de0a89c65bb84a74e2272))
* **cell:** rename desc to description ([edaf3e4](https://github.com/varletjs/varlet/commit/edaf3e4f429d55ced2f523ea0f9472d4ebfe3caa))
* **cli/create:** optimize code ([dbe303c](https://github.com/varletjs/varlet/commit/dbe303c155f23a85eb9c6faa255ebde5c4a7df26))
* **cli/gen:** move generators folder to template folder ([c661a3c](https://github.com/varletjs/varlet/commit/c661a3cf88290d754f9e7dd80de4a4d89fd2ebc9))
* **cli/site:** optimize index page css ([1c4a4b1](https://github.com/varletjs/varlet/commit/1c4a4b18714ba32eaa86b4455be4d3b5e44909f1))
* **cli/site:** optimize indicator animation ([3439993](https://github.com/varletjs/varlet/commit/3439993e2981679793a8eab8264226ad238ec11b))
* **cli/test:** add [@config](https://github.com/config) to alias ([8d6c2b3](https://github.com/varletjs/varlet/commit/8d6c2b372e231dc40515dd55abca97a0141ff6d0))
* **cli/test:** build site entry ([4658805](https://github.com/varletjs/varlet/commit/4658805d648886dfc8ea3dcfcd4c798b71db906c))
* **cli/test:** exclude example and tests ([324574a](https://github.com/varletjs/varlet/commit/324574a4e644a87a6a7fb9c8be54e18ff28f8cff))
* **cli/vite:** support jsx ([64260c9](https://github.com/varletjs/varlet/commit/64260c970e297f47971f78675b5b59babadb9f1b))
* **cli:** optimize codegen template ([4a72e5d](https://github.com/varletjs/varlet/commit/4a72e5d955075689977a48a912084bb62c78ed79))
* **cli:** optimize generators ([66e9745](https://github.com/varletjs/varlet/commit/66e9745921065054aa772d556086d2acf4bf5266))
* **cli:** optimize generators ([6238c1d](https://github.com/varletjs/varlet/commit/6238c1d4ab2dce9016cd4e4943a733d801b2bb56))
* **cli:** optimize index page css and adjust force api ([fe662ec](https://github.com/varletjs/varlet/commit/fe662ecf319b3a0b9e6f994b7267ada786613bbd))
* **cli:** refactor create command ([#673](https://github.com/varletjs/varlet/issues/673)) ([b02685c](https://github.com/varletjs/varlet/commit/b02685c21a2979e770784bce4af6af97d130cc15))
* **cli:** remove global.d.ts ([c0ff762](https://github.com/varletjs/varlet/commit/c0ff7625cff788c4f7944b139601a6385d400bb2))
* **cli:** remove less themes support ([ae76181](https://github.com/varletjs/varlet/commit/ae76181bfa1808da93e61631295563dc9c5e6674))
* **cli:** replace c8 with istanbul ([31bd649](https://github.com/varletjs/varlet/commit/31bd6497e5225dc19cea130a34418666fd7c835d))
* **cli:** replace jest to vitest ([9a32db1](https://github.com/varletjs/varlet/commit/9a32db12f1bcf36d107ee388576734df1f14e265))
* **create:** optimize code ([07358bc](https://github.com/varletjs/varlet/commit/07358bc391dc5852a1cd5454be16e53c03b83024))
* **create:** optimize code and use inquirer to replace prompts ([a34bec7](https://github.com/varletjs/varlet/commit/a34bec75256303f94ff67532629126eb5343ab84))
* fix generator tenplate typo ([a6fcab7](https://github.com/varletjs/varlet/commit/a6fcab7a41070818b6ba3bec81a90fee7c0d1e54))
* **generators:** optimize option ([0ea6e6c](https://github.com/varletjs/varlet/commit/0ea6e6c0059e66907cfa7e869c2871cbc626597c))
* **gen:** optimize code ([111165d](https://github.com/varletjs/varlet/commit/111165d4fb53d4136501bf513bb90f83baeb08c0))
* **loading:** change default color ([3fdc9e1](https://github.com/varletjs/varlet/commit/3fdc9e18fc30b879c378cbd4bcfa9d778384428b))
* **loading:** remove less variable ([50de730](https://github.com/varletjs/varlet/commit/50de7307af1998d68ea5cf11eec5c4cb6cf6d047))
* modify style in space ([#696](https://github.com/varletjs/varlet/issues/696)) ([088d3fb](https://github.com/varletjs/varlet/commit/088d3fb02beab7f07da69f2eaa02fcdc2c039e0f))
* optimize code ([48a4e5c](https://github.com/varletjs/varlet/commit/48a4e5cd2fa989289a4d0daa58cfd48e037b6730))
* optimize code ([b7d8a7a](https://github.com/varletjs/varlet/commit/b7d8a7ac6c0e1784f9099395fd498d73339f2501))
* optimize index page ([2d2519f](https://github.com/varletjs/varlet/commit/2d2519fa220950f6201d50643d7ec2c4200d8c78))
* optimize index page ([05ef446](https://github.com/varletjs/varlet/commit/05ef4466f984f64000eb2edd6df40dba0a77404e))
* optimize index page ([3236794](https://github.com/varletjs/varlet/commit/3236794345173da50b24c4b6f648e80d65e3bbff))
* optimize index page and ripple ([ad57aca](https://github.com/varletjs/varlet/commit/ad57aca3b52ba8f6a6178647b56bda928a0ff275))
* optimize template ([60e1642](https://github.com/varletjs/varlet/commit/60e164287fe101263adce17a0d4bfc4801a9024f))
* **pagination:** remove item background when mode is simple ([4948a67](https://github.com/varletjs/varlet/commit/4948a6730bacbbc8588a4fbceb00739a689d2263))
* **playground:** use varlet-cli to dev and build app ([9af30fc](https://github.com/varletjs/varlet/commit/9af30fc95af5f7ed2a5b7a46dd9eec604ce87637))
* **progress:** add labelClass prop ([5981cc8](https://github.com/varletjs/varlet/commit/5981cc8b695eb85363f24b613486755896ff1f12))
* **rate:** optimize code ([59e9421](https://github.com/varletjs/varlet/commit/59e94218524ef63e7a7cfc37ab8f50079fda219d))
* refactor documentaion ([757a79b](https://github.com/varletjs/varlet/commit/757a79bff5fb1a9789d275f4fe69c503e56041ac))
* refactor index page ([c675b67](https://github.com/varletjs/varlet/commit/c675b67995d72a97b45b88bc650f1dc4dd04d246))
* refactor the animationBox and floating proxy, optimize style ([#678](https://github.com/varletjs/varlet/issues/678)) ([6658096](https://github.com/varletjs/varlet/commit/665809661d8f2b1907d16174803c4570b51e4f03))
* remove less side effects ([4078cec](https://github.com/varletjs/varlet/commit/4078cecfce879c06f492288b72e950c141276140))
* remove playground ([79cdc2f](https://github.com/varletjs/varlet/commit/79cdc2f7e581d55b6634ca98e2d42375a43e741f))
* replace gitee to vercel ([23554d9](https://github.com/varletjs/varlet/commit/23554d91a6996cc14a3890d79cb47cf50e9b2df8))
* replace url to dev ([1daae66](https://github.com/varletjs/varlet/commit/1daae66742a02ecd06243b31122ea07cee618593))
* **site:** add indexpage to config ([51d45c1](https://github.com/varletjs/varlet/commit/51d45c1f92453632afd3252523c9d0c7db3a5017))
* **site:** change mobile size to 350px ([e4041b9](https://github.com/varletjs/varlet/commit/e4041b989fd6ff6e765ed109163f2dca8246c85c))
* **site:** playground closed the prompt and only prompts once ([60c3a71](https://github.com/varletjs/varlet/commit/60c3a71aa783c5735869f9467541fa80f2abc2f6))
* **site:** remove layout background ([d066d12](https://github.com/varletjs/varlet/commit/d066d123a903135123a897108bbf1ed4bb328b4e))
* **site:** try catch onMobileRouteChange ([ad01e43](https://github.com/varletjs/varlet/commit/ad01e43b9ff71d69b8eaeae2a9879a7a1a040392))
* **template:** optimize code ([56da894](https://github.com/varletjs/varlet/commit/56da894d0207d664d4fddf1a083382a049c583be))
* **time-picker&date-picker:** rename shadow to elevation ([65f00d2](https://github.com/varletjs/varlet/commit/65f00d23d3be186cf91d8036e94c625db61c0a00))
* **ui/button:** button content support flex ([14ee150](https://github.com/varletjs/varlet/commit/14ee150e6969ad23b06cae763211faef497c8144))
* **ui/button:** remove promise finally ([8b73078](https://github.com/varletjs/varlet/commit/8b73078a506463e2e3687732937694cf92d4df60))
* **ui/card:** add color transition ([afbb120](https://github.com/varletjs/varlet/commit/afbb1201405adbd9329869bf5945bebfe0a78de7))
* **ui/card:** remove props height ([7619f5d](https://github.com/varletjs/varlet/commit/7619f5dfe3d87f26914fcc1a1e91179c02414204))
* **ui/card:** rename content slot to floating-content ([2c64075](https://github.com/varletjs/varlet/commit/2c640756b9f06fd0eb55b6d6f636b48113638120))
* **ui/col:** optimize col ([c25b150](https://github.com/varletjs/varlet/commit/c25b1502cdbee8cf367d240bb6e472526d08abf2))
* **ui/dialog:** optimize dialog ([bdb2b3e](https://github.com/varletjs/varlet/commit/bdb2b3e30c90197879715acba6511fac3930108e))
* **ui/image:** clean code ([a08f395](https://github.com/varletjs/varlet/commit/a08f395c9861382a8ece078a09540b32756e7a89))
* **ui/select:** optimize menu offset ([a21cb5f](https://github.com/varletjs/varlet/commit/a21cb5fc29544557e4c3fd6a050a5ecd871bb1c9))
* **ui/select:** optimize style ([1260317](https://github.com/varletjs/varlet/commit/1260317b9a6c1954bf880b3a6ea4d28b34692d76))


### Reverts

* revert test case ([c1cf24d](https://github.com/varletjs/varlet/commit/c1cf24d5c87de2f6336b065778698d5d7651d62a))

## [1.27.20](https://github.com/varletjs/varlet/compare/v1.27.19...v1.27.20) (2022-08-11)


### Bug Fixes

* add style and less to sideeffects to close [#666](https://github.com/varletjs/varlet/issues/666) ([1e542fd](https://github.com/varletjs/varlet/commit/1e542fda37adcbaebc3cdc1d20f0845f82e8b22c))
* **pagination:** judge pagecount and close [#668](https://github.com/varletjs/varlet/issues/668) ([4f8135f](https://github.com/varletjs/varlet/commit/4f8135f746a48e0cb8a3fb78ff4aa939fcad8ee7))

## [1.27.19](https://github.com/varletjs/varlet/compare/v1.27.18...v1.27.19) (2022-08-08)


### Bug Fixes

* **cli/release:** change code execution order ([6f4e75c](https://github.com/varletjs/varlet/commit/6f4e75c1a9787cdf400718d9d4ce29df948b1d12))
* **date-picker:** change preview to choose ([3fe98f9](https://github.com/varletjs/varlet/commit/3fe98f99ee213525a20ff082bd1579b7c68ed60d))
* **ui/uploader:** add webp image ext ([e49d511](https://github.com/varletjs/varlet/commit/e49d51129c8cc349bbf3540b1d84df6c8fbb03bb))


### Features

* **date-picker:** add preview to close [#654](https://github.com/varletjs/varlet/issues/654) ([ed23775](https://github.com/varletjs/varlet/commit/ed23775e7da53e71a2d5112b7b7f8133fb180336))

## [1.27.18](https://github.com/varletjs/varlet/compare/v1.27.17...v1.27.18) (2022-07-22)


### Bug Fixes

* **collapse:** ensure to trigger transitionend ([51b7710](https://github.com/varletjs/varlet/commit/51b77104d12e7a59c267921a004a429f882bcd9d))
* **date-picker&time-picker:** change background color and add ripple style for close [#651](https://github.com/varletjs/varlet/issues/651) ([c1303a0](https://github.com/varletjs/varlet/commit/c1303a0b97430c0b03d90e8f404aa8a3b2586306))
* **pull-refresh:** use success props when status is success ([189f8ab](https://github.com/varletjs/varlet/commit/189f8ab5eff8e406332cd1e4587f8a167e13d94c))


### Features

* **cli:** compatible with screens > 2560 ([6c4f161](https://github.com/varletjs/varlet/commit/6c4f1612857f1789e8c69ea63bbde24b5776c97e))

## [1.27.17](https://github.com/varletjs/varlet/compare/v1.27.16...v1.27.17) (2022-07-06)


### Bug Fixes

* **cli/gen:** add varlet/shared to dependencies ([90800e1](https://github.com/varletjs/varlet/commit/90800e14567374a5db396da7e6bdba921329f878))
* **cli/site:** support custom description ([d1b243e](https://github.com/varletjs/varlet/commit/d1b243e90ad5dad50ad3da30231b0c89caf64f45))
* **collapse:** fix content height error ([be485c4](https://github.com/varletjs/varlet/commit/be485c45e31b8eb76048191468bceefe9ef3f3c4))
* **ui/select:** select boundary detection bug fix ([#623](https://github.com/varletjs/varlet/issues/623)) ([eb2fc84](https://github.com/varletjs/varlet/commit/eb2fc8467cc25476994a68f4f7214be6936deb05))
* **ui/skeleton:** do not render the container when rows and title not exist ([b8c3b7c](https://github.com/varletjs/varlet/commit/b8c3b7cdb13a7a0f33e77679e4a02e4e0438ce9b))


### Features

* **site:** support custom index page text ([5401c1c](https://github.com/varletjs/varlet/commit/5401c1cdae2f7d787211e1d79cb718ea9644e019))
* **ui/input:** type support tel and email, touchstart event stop propagation ([c6cdcc9](https://github.com/varletjs/varlet/commit/c6cdcc902dbc4fa7ccd7f2730dfe3ff290a7358f))


### Refactoring

* **cli/site:** adjust configurable item structure ([b1db187](https://github.com/varletjs/varlet/commit/b1db1872b91fda71562cf36d488f3725a413c157))


### Reverts

* revert "fix(cli/site): support custom description" ([b23e0d2](https://github.com/varletjs/varlet/commit/b23e0d2f2f3e8c44fb770b7089cdd5aa6ceb015e))
* revert "refactor(cli/site): adjust configurable item structure" ([493803b](https://github.com/varletjs/varlet/commit/493803b06a342a1b792ce7462633590365338176))

## [1.27.16](https://github.com/varletjs/varlet/compare/v1.27.15...v1.27.16) (2022-07-01)


### Bug Fixes

* **slider:** stop propagation when touch slider ([6b4bc18](https://github.com/varletjs/varlet/commit/6b4bc181e50ffb887b8f7bae8bd161dddaa4530f))
* **ui/snackbar:** remove position absolute in leaving animation's style ([#611](https://github.com/varletjs/varlet/issues/611)) ([18d5086](https://github.com/varletjs/varlet/commit/18d5086cc176929ad4abed1d257757305ea83afd))


### Refactoring

* **cli:** replace with @varlet/shared ([3c3e44f](https://github.com/varletjs/varlet/commit/3c3e44fb6480d4ffa6d520a5edac33e1211e70bd))
* **cli:** replace with @varlet/shared ([9f3eae7](https://github.com/varletjs/varlet/commit/9f3eae77922b11364bccc2b51ce34763619a5631))
* replace with @varlet/shared ([7510cbf](https://github.com/varletjs/varlet/commit/7510cbf25dadcae4b93c3acfb2da30bdc31402c7))

## [1.27.15](https://github.com/varletjs/varlet/compare/v1.27.14...v1.27.15) (2022-06-20)

## [1.27.14](https://github.com/varletjs/varlet/compare/v1.27.13...v1.27.14) (2022-06-20)


### Bug Fixes

* add side-effects for tree shaking ([4fa8559](https://github.com/varletjs/varlet/commit/4fa85597ce0c7ed7c7335c17732cfc39dc7d6abe))


### Features

* add new package varlet-shared ([939d945](https://github.com/varletjs/varlet/commit/939d945d7a7b45b01b9784d22043c302b1753b4c))


### Refactoring

* replace with @varlet/shared ([5ac0409](https://github.com/varletjs/varlet/commit/5ac04095de24e6ede6ebb0d5f74c764d2caa52e5))
* replace with @varlet/shared ([47ab7ee](https://github.com/varletjs/varlet/commit/47ab7eeada2292b17bbb26f39f6f4ed97ed81733))
* **ui/ripple:** add update diff ([5424271](https://github.com/varletjs/varlet/commit/5424271d10c4ce68a44fc7c0f2ee4d5eb2e891bd))

## [1.27.13](https://github.com/varletjs/varlet/compare/v1.27.12...v1.27.13) (2022-06-17)


### Bug Fixes

* **back-top:** add inheritAttrs ([cce45e2](https://github.com/varletjs/varlet/commit/cce45e269cd431593e3703e20a8ae592cf20d7a1))
* **ui/types:** icon onClick's type ([d18d0ca](https://github.com/varletjs/varlet/commit/d18d0ca1de53b0b03f10d6daffc97711912fc141))


### Features

* **ui/select:** add boundary detection in select ([#606](https://github.com/varletjs/varlet/issues/606)) ([27eb0ea](https://github.com/varletjs/varlet/commit/27eb0eaf249c7b7faa8dad0dec47fa27e2a75c49))


### Refactoring

* **ui/select:** optimize bundary detection in select  ([#608](https://github.com/varletjs/varlet/issues/608)) ([52d4181](https://github.com/varletjs/varlet/commit/52d4181664fdf1e6fa787ffcef00579f0feb02c7))

## [1.27.12](https://github.com/varletjs/varlet/compare/v1.27.11...v1.27.12) (2022-06-10)


### Bug Fixes

* add default width ([09fe1cc](https://github.com/varletjs/varlet/commit/09fe1cc8b560d7c05f6b8f06daca61babb6c6012))
* **space:** add width when direction is column ([9108bfa](https://github.com/varletjs/varlet/commit/9108bfadfc761b1ce66191cc8e546d3edab840c4))
* swiperItem's type ([#602](https://github.com/varletjs/varlet/issues/602)) ([33a1488](https://github.com/varletjs/varlet/commit/33a1488f9b43a6f7a073f3dccf5257ebcbc5adfe))
* **ui/ripple:** ripple cannot be removed when the updated hooks trigger ([fc2fb08](https://github.com/varletjs/varlet/commit/fc2fb086c9cbdcb36003fe12993271cc27af2f4a))


### Refactoring

* **vscode-extension:** add language logic for component description ([a3cecdf](https://github.com/varletjs/varlet/commit/a3cecdf7eab67459a4718e30a8c7a231bb62160b))

## [1.27.11](https://github.com/varletjs/varlet/compare/v1.27.10...v1.27.11) (2022-06-01)


### Bug Fixes

* **cli/gen:** gen i18n files ([e97e869](https://github.com/varletjs/varlet/commit/e97e8695f02fe3a0971d831da93630386a36f1c5))


### Features

* **cli/gen:** add i18n for template and close [#590](https://github.com/varletjs/varlet/issues/590) ([6299780](https://github.com/varletjs/varlet/commit/6299780dfabc3aae421a7d381916dab0a4bb4ad8))
* **ui/input:** add autofocus of input ([#595](https://github.com/varletjs/varlet/issues/595)) ([fb9e026](https://github.com/varletjs/varlet/commit/fb9e0269dacb01e207ce548774fe96c65433a932))


### Refactoring

* **cli/gen:** remove useless function ([c92e248](https://github.com/varletjs/varlet/commit/c92e2480f0b776cc88a18225c6de836ddd801a7c))
* **ui/space:** adjust example ([d627190](https://github.com/varletjs/varlet/commit/d62719073fd08c18bb54f04cd191a82bc9fc5a81))

## [1.27.10](https://github.com/varletjs/varlet/compare/v1.27.9...v1.27.10) (2022-05-24)


### Refactoring

* **cli/site:** optimize version styles ([7962f99](https://github.com/varletjs/varlet/commit/7962f99608d21d6ded1838157481effcf38fc46a))

## [1.27.9](https://github.com/varletjs/varlet/compare/v1.27.8...v1.27.9) (2022-05-24)


### Bug Fixes

* animationBox is not in the DomTree. the logo will not show ([#579](https://github.com/varletjs/varlet/issues/579)) ([a50f735](https://github.com/varletjs/varlet/commit/a50f735fa19c86e67266a35adeb4617bb14d219c))
* fix select throws an error when the select does not match any of the options ([#571](https://github.com/varletjs/varlet/issues/571)) ([f180d93](https://github.com/varletjs/varlet/commit/f180d93b3ca5e635dd5263c8bf7599213afd7600))
* fix the logo fixed style && filter change ([#573](https://github.com/varletjs/varlet/issues/573)) ([37908dc](https://github.com/varletjs/varlet/commit/37908dceb75ac19db952cdc2be60a79485683d75))
* **index-bar:** fix click event to be triggered ([9fb9d90](https://github.com/varletjs/varlet/commit/9fb9d901680b96e00db443277064fbe0eb52b730))
* **index-bar:** support dimension units for sticky-offset-top and close [#554](https://github.com/varletjs/varlet/issues/554) ([e7c6304](https://github.com/varletjs/varlet/commit/e7c630433af3df5159fecde95d2a9dc456a01b13))
* **loading:** support dimension units ([7ce32cc](https://github.com/varletjs/varlet/commit/7ce32cc9ef961170cc9f9f303d0d90b201b6ee84))
* **playground:** fix safari import error ([#580](https://github.com/varletjs/varlet/issues/580)) ([a5c8c99](https://github.com/varletjs/varlet/commit/a5c8c999cfd6a7ab726a7f6c5408698e6c1b2059))
* **progress:** support dimension units [#553](https://github.com/varletjs/varlet/issues/553) ([ddb2380](https://github.com/varletjs/varlet/commit/ddb238098e28ffa8b8de28bb074f277e6b215fcd))
* **rate:** support dimension units [#553](https://github.com/varletjs/varlet/issues/553) ([b6e4d35](https://github.com/varletjs/varlet/commit/b6e4d353f445cdf136f240763c62cd5d61bd44af))
* **slider:** support dimension units [#553](https://github.com/varletjs/varlet/issues/553) ([dacab1b](https://github.com/varletjs/varlet/commit/dacab1b5cc5f3f02908e34396f83f3f74de8b85e))
* **switch:** support dimension units ([#556](https://github.com/varletjs/varlet/issues/556)) ([73bec2b](https://github.com/varletjs/varlet/commit/73bec2b810cad05a4d1a815b9ea9d1294291b547))


### Features

* **ui/picker:** Picker of colums add deep watch ([#572](https://github.com/varletjs/varlet/issues/572)) ([54d3eb7](https://github.com/varletjs/varlet/commit/54d3eb72c6be1e61c089a39e2597a22c72f6558c))
* varlet/cli site version config ([#568](https://github.com/varletjs/varlet/issues/568)) ([75d5a38](https://github.com/varletjs/varlet/commit/75d5a381926e7cbe2c4df7508c8bd34b9a433842))


### Refactoring

* **cli/site:**  logo z-index ([#575](https://github.com/varletjs/varlet/issues/575)) ([6c1e568](https://github.com/varletjs/varlet/commit/6c1e56890c2b3b13bec6e6f83f3fbfae677f6274))
* **cli/site:** optimize style ([dcddb87](https://github.com/varletjs/varlet/commit/dcddb87940f1992660ca7b7b4e2e7bb258121ad1))
* **cli/site:** optimize version styles ([e61482d](https://github.com/varletjs/varlet/commit/e61482dbd45529630b7082b72abfedc6db5381bc))
* **mobile-site:** add postcss to browser adaptation ([80107b7](https://github.com/varletjs/varlet/commit/80107b7fdcbf54a17ec7d01f8b130c6806dde4e1))
* optimize code style ([#574](https://github.com/varletjs/varlet/issues/574)) ([cb7728c](https://github.com/varletjs/varlet/commit/cb7728ca07080b2a4fa5e3e27178cbf110d7719d))
* **site:** optimize example style use vw ([f23b4fd](https://github.com/varletjs/varlet/commit/f23b4fdc7c14723f43646b47eebcee7829c7cf4f))
* **site:** optimize style ([37387f9](https://github.com/varletjs/varlet/commit/37387f9933bff110ea5cd7a81f013dc885150fd3))
* **ui/bottom-navigation:** code optimize ([7661175](https://github.com/varletjs/varlet/commit/7661175e94e5e772f01b9ddc2ee444f0b39c3705))
* **ui/card:** add floater ([576df7e](https://github.com/varletjs/varlet/commit/576df7e2a08c250a861ee563dca388accc57d8bb))
* **ui/card:** add row layout ([7276c92](https://github.com/varletjs/varlet/commit/7276c92835e5af1c8c83dcdb26e3f16233417ab6))
* **ui/card:** add toolbar ([d7a45c7](https://github.com/varletjs/varlet/commit/d7a45c7c2dd17affec0774be0a37a98fc976525d))
* **ui/card:** add toolbar gradual change when scroll ([a2b115e](https://github.com/varletjs/varlet/commit/a2b115e45513b60bdfd938c332abe9a9f9238981))
* **ui/card:** add types ([ac832b1](https://github.com/varletjs/varlet/commit/ac832b1deca08afc042983e7fe47e5e6ffa987c2))
* **ui/card:** adjust close button ([94319b2](https://github.com/varletjs/varlet/commit/94319b27f790cf24b27c9961c2eec47b8f28e069))
* **ui/card:** adjust close button and landscape picture style ([ebff435](https://github.com/varletjs/varlet/commit/ebff435fa9991b90dd89cc5a2fc7758329f5509b))
* **ui/card:** adjust close-button slot & docs ([5cf76f0](https://github.com/varletjs/varlet/commit/5cf76f039b4859b1e919aa6f7eea35bf434cc51f))
* **ui/card:** adjust img height parameters and add some test cases ([51a1190](https://github.com/varletjs/varlet/commit/51a1190f01f7268e26b61e06539ec2664dfa4d5a))
* **ui/card:** adjust row layout && close ([9a8f9b9](https://github.com/varletjs/varlet/commit/9a8f9b92e37897c4a4f8e5551758610b3dd4d021))
* **ui/card:** fix border radius transition not working ([0b475d2](https://github.com/varletjs/varlet/commit/0b475d2c0c5442fa4c4b304bc734dc9d75ec9d8c))
* **ui/card:** handle horizontal layout title & subtitle overflow ([1e5708a](https://github.com/varletjs/varlet/commit/1e5708a1599c2b6a9dd634e4f8dcb9fecc62e7c8))
* **ui/card:** modify English documents && floating buttons ([4910c2c](https://github.com/varletjs/varlet/commit/4910c2cee184e833ebf165085ec5383bb5de170f))
* **ui/card:** optimization style of title in horizontal layout ([c8028fe](https://github.com/varletjs/varlet/commit/c8028fe43b99092b5acf6833ee8066c72de62297))
* **ui/card:** optimize animation ([86f0ee1](https://github.com/varletjs/varlet/commit/86f0ee144b4705a0b40a533c7181e3d1dfa0295d))
* **ui/card:** optimize blur ([b7e7a3f](https://github.com/varletjs/varlet/commit/b7e7a3ff653ffa3148fa2eb131a3ad2dc8bc13d9))
* **ui/card:** optimize card style ([b8a296e](https://github.com/varletjs/varlet/commit/b8a296eb9c1fcc91aaa0aecb62495ff36f86b959))
* **ui/card:** optimize css ([c643c9b](https://github.com/varletjs/varlet/commit/c643c9bb840e7add096abc0a3863a5310b6e0007))
* **ui/card:** optimize image size ([a9c6f3f](https://github.com/varletjs/varlet/commit/a9c6f3ff4109f9d9c6d44e581cd6d7150fcc9168))
* **ui/card:** optimize img processing logic ([8337866](https://github.com/varletjs/varlet/commit/83378662d33ec78bbdc2663750970dcafb7d99d3))
* **ui/card:** optimize less structure ([08f8af2](https://github.com/varletjs/varlet/commit/08f8af227da961ba2559532031eb3195c7f9c41a))
* **ui/card:** optimize ripple feedback ([eb9a019](https://github.com/varletjs/varlet/commit/eb9a0191f0593efee4c3e9736d6ea4d6d546999a))
* **ui/card:** remove scale ([bd8d3f0](https://github.com/varletjs/varlet/commit/bd8d3f087eb1cbc2823c0f40771831370a275d74))
* **ui/card:** remove unuseful css var ([3807b8c](https://github.com/varletjs/varlet/commit/3807b8c514c4a6555466de07f0affc03f29de6d9))
* **ui/card:** use flex-end ([e52d0e4](https://github.com/varletjs/varlet/commit/e52d0e4425843dc3eb20843f1847ba4a979f0623))
* **ui/card:** use translate3d ([4c90728](https://github.com/varletjs/varlet/commit/4c90728b7174e3b5341fdd107643af63cd08006a))
* versions update ([#577](https://github.com/varletjs/varlet/issues/577)) ([f14e4c1](https://github.com/varletjs/varlet/commit/f14e4c188bf2f72474cfabc1d5f319064d85207b))

## [1.27.8](https://github.com/varletjs/varlet/compare/v1.27.7...v1.27.8) (2022-05-09)


### Bug Fixes

* **compileSiteEntry:** slash path for windows ([5170997](https://github.com/varletjs/varlet/commit/51709974d5b7c77bc9c7f37b09a79348a0ff9ca6))
* **ui/col:** fix logic for span & responsive setting 0 [#529](https://github.com/varletjs/varlet/issues/529) ([80da305](https://github.com/varletjs/varlet/commit/80da3058913b5300539184c2650eb709b5bb0e10))
* **ui/col:** fix span & responsive props when equal 0 [#529](https://github.com/varletjs/varlet/issues/529) ([a0831c3](https://github.com/varletjs/varlet/commit/a0831c3410d40cf5fd8b1f5795a930ac7d6aebdc))


### Features

* cli pages and homepage ([#531](https://github.com/varletjs/varlet/issues/531)) ([d723e36](https://github.com/varletjs/varlet/commit/d723e367dd006243d7bf0b2adb0611ae49e19d5f))
* finish the floating and land && optimize home page style ([#541](https://github.com/varletjs/varlet/issues/541)) ([76d6fad](https://github.com/varletjs/varlet/commit/76d6fadfe66fb0d9c2892666c309933d3a378c0e))
* **ui/picker:** add props textFormatter ([#522](https://github.com/varletjs/varlet/issues/522)) ([f735468](https://github.com/varletjs/varlet/commit/f735468dd5879f19a3f4285ab1ddf9629ddd3849))


### Refactoring

* avoid user has to create locale ([ef7de20](https://github.com/varletjs/varlet/commit/ef7de205122f865acc8e9bc5c367a1b672ea64a2))
* **cli/site:** optimize css var ([b7ecce0](https://github.com/varletjs/varlet/commit/b7ecce00909b5facd7ba9d5932926af99f80c4aa))
* **cli/site:** optimize style ([81b4d1c](https://github.com/varletjs/varlet/commit/81b4d1c58a17262b484e51d4b7732e96ed9476fd))
* fix the `docs` logo position style ([#534](https://github.com/varletjs/varlet/issues/534)) ([e0bd26d](https://github.com/varletjs/varlet/commit/e0bd26d8e04a08817cae88e440251cbfa33d5f28))
* **homepage:** use locale options to replace multi route files ([#536](https://github.com/varletjs/varlet/issues/536)) ([399d402](https://github.com/varletjs/varlet/commit/399d40251854831478a3bf908d2f36afe9716225))
* remove useless snackbar and use window.settimeout ([00856bd](https://github.com/varletjs/varlet/commit/00856bd764281d116446c46f85a284c27b05b8b9))
* **site:** optimize home page style ([3bb69e7](https://github.com/varletjs/varlet/commit/3bb69e74de64e770900ea995a06cc611333df19f))
* **site:** optimize home page style && fix the logo blink ([#539](https://github.com/varletjs/varlet/issues/539)) ([b2a3ec2](https://github.com/varletjs/varlet/commit/b2a3ec27432e4aa05143db339ed5e511c82820f3))
* **site:** optimize homepage style ([1575777](https://github.com/varletjs/varlet/commit/1575777f608389c114ebd000385499e34553ed48))

## [1.27.7](https://github.com/varletjs/varlet/compare/v1.27.6...v1.27.7) (2022-04-29)


### Bug Fixes

* **counter:** add user-select for button ([fb239f0](https://github.com/varletjs/varlet/commit/fb239f0eda6e888f404f87615c9cfa4675af5e42))
* docs(ui/steps): use the setup script for exmple and docs ([#505](https://github.com/varletjs/varlet/issues/505)) ([5c6fb67](https://github.com/varletjs/varlet/commit/5c6fb675f0b24bf643ced19238507efa80373489))
* **loading:** add mask to close [#520](https://github.com/varletjs/varlet/issues/520) ([e40d7c5](https://github.com/varletjs/varlet/commit/e40d7c5e21cadb64b8e8a4ddcbc8a9f04fe12427))
* **pull-refresh:** close [#509](https://github.com/varletjs/varlet/issues/509) ([311947a](https://github.com/varletjs/varlet/commit/311947ad5c161da11faae7a65bda41f802350a46))
* **ui/picker:** add picker missing style ([#513](https://github.com/varletjs/varlet/issues/513)) ([d2aa016](https://github.com/varletjs/varlet/commit/d2aa016b2511c561f63f837efca63525ea409600))


### Features

* **cli/release:** add npm registry confirm ([#510](https://github.com/varletjs/varlet/issues/510)) ([f463bd1](https://github.com/varletjs/varlet/commit/f463bd128d2f5aa43b1112f54d594818f9313117))
* **ui/input:** support trim modifier([#519](https://github.com/varletjs/varlet/issues/519)) ([5e9e238](https://github.com/varletjs/varlet/commit/5e9e2384140f86c96015461e68c11f7e1ddc2bba))


### Refactoring

* **playground:** fix import map ([945a4ff](https://github.com/varletjs/varlet/commit/945a4ffe24f90d17ee4660553de2716168219891))
* **pull-refresh:** optimize code ([137f96c](https://github.com/varletjs/varlet/commit/137f96c4df35bd420b3c800e6ebc00f29d8de0b8))
* **test:** use CustomEvent constructor ([bccf2e3](https://github.com/varletjs/varlet/commit/bccf2e354fa67a6a0d8e9b4dad859f59c405cdfc))

## [1.27.6](https://github.com/varletjs/varlet/compare/v1.27.5...v1.27.6) (2022-04-23)


### Bug Fixes

* **pagination:** modify css style of disabled ([273bd6f](https://github.com/varletjs/varlet/commit/273bd6f0aced4b00b49af53733daef4d3a3e9dcb))


### Features

* **cli:** code example component support playground ([6763794](https://github.com/varletjs/varlet/commit/6763794d1d2bb7bc2ed9cb478311b85dd7c2bbd1))
* **markdown-vite-plugin:** add playground flag ([06f4394](https://github.com/varletjs/varlet/commit/06f43943ddeeb142d6fecf7bcb2d3fe49ac56b84))
* **markdown-vite-plugin:** add playground-ignore flag for code block ([07008bc](https://github.com/varletjs/varlet/commit/07008bcb033a7e0b3b1d275e9b847889ed5bd525))
* **playground:** add area.json to import map ([2320f4e](https://github.com/varletjs/varlet/commit/2320f4e6033715a045e8ddb051925654085ee0c5))
* **ui/picker:** add cascadeInitialIndexes prop ([#489](https://github.com/varletjs/varlet/issues/489)) ([c6f10bd](https://github.com/varletjs/varlet/commit/c6f10bd162b50006fbf34c1580de2d530ea768e3))


### Refactoring

* **cli/compileSiteEntry:** use glob replace regexp to find component path ([#463](https://github.com/varletjs/varlet/issues/463)) ([88d217b](https://github.com/varletjs/varlet/commit/88d217b2ad4c3dbb325ca226244782b98556e67e))
* **cli:** remove unnecessary slash ([1df6eea](https://github.com/varletjs/varlet/commit/1df6eea1c32407a9a18799444f82812521f9a9dd))
* **ui/app-bar, button:** ripple import optimize ([099ac01](https://github.com/varletjs/varlet/commit/099ac0166734d15b2560d36825593a4198ac5f2d))
* **utils:** optimize useLock ([bcf49f1](https://github.com/varletjs/varlet/commit/bcf49f15a69863d80a328ee26e397f6a7beb24ee))


### Reverts

* Merge branch 'docs/script-setup' into dev ([2208334](https://github.com/varletjs/varlet/commit/220833436211f5b21aa9d8a8309a17c5b957d8b1))

## [1.27.5](https://github.com/varletjs/varlet/compare/v1.27.4...v1.27.5) (2022-04-16)

## [1.27.4](https://github.com/varletjs/varlet/compare/v1.27.3...v1.27.4) (2022-04-16)


### Bug Fixes

* **rate:** fix rate style ([79edabf](https://github.com/varletjs/varlet/commit/79edabff2fa08f44dd3b251af9a41e311a7426d6))

## [1.27.3](https://github.com/varletjs/varlet/compare/v1.27.2...v1.27.3) (2022-04-14)


### Bug Fixes

* **ui/uploader:** fix [#426](https://github.com/varletjs/varlet/issues/426) ([463e0a7](https://github.com/varletjs/varlet/commit/463e0a7aee6f6f1ca61c2e18f88e5db4b30d9c4d))
* **uploader:** use label tag to replace div ([d6832c8](https://github.com/varletjs/varlet/commit/d6832c820b4538daf264e02aba39ee5e6509090d))

## [1.27.2](https://github.com/varletjs/varlet/compare/v1.27.1...v1.27.2) (2022-04-11)


### Features

* **bottom-navigation:** add safe-area prop to avoid affect ([921775b](https://github.com/varletjs/varlet/commit/921775be50eb7f0b9b161292a43b261e40f4247b))
* **tabs:** add safe-area prop to avoid affect ([5cfe4b9](https://github.com/varletjs/varlet/commit/5cfe4b955f49b85bf11224657328855f33bbeed1))

## [1.27.1](https://github.com/varletjs/varlet/compare/v1.27.0...v1.27.1) (2022-04-09)


### Bug Fixes

* **ui/uploader:** ripple does not work when customizing the style ([8e6f0e7](https://github.com/varletjs/varlet/commit/8e6f0e753845e4a1c8c872df005166b4ee4c53a3))

# [1.27.0](https://github.com/varletjs/varlet/compare/v1.26.9...v1.27.0) (2022-04-08)


### Bug Fixes

* **icons:** use base64 src ([465b3c3](https://github.com/varletjs/varlet/commit/465b3c35db29b682997560ba63210b1347b81cbe))
* **icons:** use relative path src ([bdab3d4](https://github.com/varletjs/varlet/commit/bdab3d41aa358686385cbb382319c9e8a85c9b37))
* **ui/tabs:** fix match boundary error ([6cb05e0](https://github.com/varletjs/varlet/commit/6cb05e0c37527f1e44ac0ee6c91b209fc3fa8503))


### Features

* **bottom-navigation:** new component bottom-navigation [#866](https://github.com/varletjs/varlet/issues/866)dc6ee ([ee48111](https://github.com/varletjs/varlet/commit/ee48111afa5a6dcb548a7d790915d6101a7cd555)), closes [#866dc6ee](https://github.com/varletjs/varlet/issues/866dc6ee)
* new component BottomNavigation ([#356](https://github.com/varletjs/varlet/issues/356)) ([2fd7753](https://github.com/varletjs/varlet/commit/2fd7753cab212bef0c3da552509ecb67a7d503e3))


### Performance Improvements

* add class and call function ([da8ac80](https://github.com/varletjs/varlet/commit/da8ac80a58e10f734add8ae3d33585e73b0d1355))
* add class and call function ([469b5d0](https://github.com/varletjs/varlet/commit/469b5d0b7d07615b5460f4fd2beab2b65c212368))
* **card:** add class ([#361](https://github.com/varletjs/varlet/issues/361)) ([73426b2](https://github.com/varletjs/varlet/commit/73426b25602e433f7fa0fd7e2f975668497523b2))
* **collapse:** add class ([dc5b23e](https://github.com/varletjs/varlet/commit/dc5b23e67da1254456281f27f415f36c43d3a0e0))
* **date-picker:** add class ([7cfd233](https://github.com/varletjs/varlet/commit/7cfd233023f705bc98fcd1b865315b84e2751d84))
* **form-details:** add class ([5047156](https://github.com/varletjs/varlet/commit/50471560724b866cb501922399a922e742b1b514))
* Modify the class display method in table, tabs, ripple and lazy ([#391](https://github.com/varletjs/varlet/issues/391)) ([25ebec9](https://github.com/varletjs/varlet/commit/25ebec98855975492a051a3b64cde73c41b7a5fa))
* **option:** add class ([ea062e8](https://github.com/varletjs/varlet/commit/ea062e857a475238a975530c2d72a9291e6d971c))
* **progress:** add class ([4a878d3](https://github.com/varletjs/varlet/commit/4a878d3dc3e6c602dd26621ef0f0d186e37c9278))
* remove unuseful function define ([d372fc0](https://github.com/varletjs/varlet/commit/d372fc0cd7404e2070cc49172e1dbef7c85a7c48))
* **snackbar:** complete to replace class ([9961458](https://github.com/varletjs/varlet/commit/996145813dd8ed00b6f6ef82c1212f36f674db70))
* **step:** add class ([9c97678](https://github.com/varletjs/varlet/commit/9c97678dc4a7baa5c9a3eaca00e10c663036346e))
* **tab&swipe-item:** add class ([7807520](https://github.com/varletjs/varlet/commit/78075201606d3851b2a00da4c86f63b78e2c8b08))
* **time-picker:** add class ([b2f458e](https://github.com/varletjs/varlet/commit/b2f458e1403185ed1a5035d114cbb26418b18172))
* **ui/app-bar:** add class ([#396](https://github.com/varletjs/varlet/issues/396)) ([687d791](https://github.com/varletjs/varlet/commit/687d7918ce8f068e702e64b0a524cd1dfbad0e07))
* **ui/back-top,countdown,menu:** modify class method ([#404](https://github.com/varletjs/varlet/issues/404)) ([f9a7295](https://github.com/varletjs/varlet/commit/f9a72953114f76f58794bc5428eaeb462a96a4c4))
* **ui/badge:** add class ([de33df1](https://github.com/varletjs/varlet/commit/de33df180fae615e417fbe1c23ee65b838ad2436))
* **ui/bottom-navigation:** handle active boundary ([#411](https://github.com/varletjs/varlet/issues/411)) ([49c91b3](https://github.com/varletjs/varlet/commit/49c91b359e92ee764fb5241af614df7139053dcd))
* **ui/cell:** add class ([6b40718](https://github.com/varletjs/varlet/commit/6b40718f610e64895e62dc5183898d8f9d21410a))
* **ui/chip:** add class & canonical class name ([5b5987f](https://github.com/varletjs/varlet/commit/5b5987fe897281c58d2232367e40242648495254))
* **ui/col:** add class ([#383](https://github.com/varletjs/varlet/issues/383)) ([2d57c82](https://github.com/varletjs/varlet/commit/2d57c825898fde3b350077ae3b40eb091c5c1d5e))
* **ui/collapse:** add call ([#369](https://github.com/varletjs/varlet/issues/369)) ([cfd23a3](https://github.com/varletjs/varlet/commit/cfd23a3926e438b9dacb7ff610cb4467073cf6c5))
* **ui/counter&slider:** add class&call ([#382](https://github.com/varletjs/varlet/issues/382)) ([3277814](https://github.com/varletjs/varlet/commit/3277814bd7b1d8f0b1345a77655911d7c5eca180))
* **ui/dialog:** add class and call ([#397](https://github.com/varletjs/varlet/issues/397)) ([c1df88f](https://github.com/varletjs/varlet/commit/c1df88f9bac031c7b553bd20af51536e34623f37))
* **ui/divider:** add class ([#393](https://github.com/varletjs/varlet/issues/393)) ([520d211](https://github.com/varletjs/varlet/commit/520d21125a6d299e79c537d435eef3f385452e13))
* **ui/form:** delete call ([#392](https://github.com/varletjs/varlet/issues/392)) ([0726cb0](https://github.com/varletjs/varlet/commit/0726cb0a5c7c7eb4422e464c24e5f9a470062e94))
* **ui/icon:** add class ([1bb74a3](https://github.com/varletjs/varlet/commit/1bb74a3748316921247f96efd2b1ed51d31ef3ed))
* **ui/image-preview:** add class and call ([#387](https://github.com/varletjs/varlet/issues/387)) ([fab1856](https://github.com/varletjs/varlet/commit/fab185657d67b044ec73fcf866e497291650aed7))
* **ui/image:** add class and call function ([16a8bed](https://github.com/varletjs/varlet/commit/16a8bed4f83995a7304f897cadeb738526788bf7))
* **ui/index-bar:** add class and call function ([#395](https://github.com/varletjs/varlet/issues/395)) ([ae489da](https://github.com/varletjs/varlet/commit/ae489da0e58c1ae413a2908855928e8eebde5ab7))
* **ui/input:** add class ([#377](https://github.com/varletjs/varlet/issues/377)) ([adc8a5c](https://github.com/varletjs/varlet/commit/adc8a5ca5b212afb1122b1370c3ef0480aaf4c48))
* **ui/list:** add class and call function ([#376](https://github.com/varletjs/varlet/issues/376)) ([387af67](https://github.com/varletjs/varlet/commit/387af67e3a94877c1cc8c5a7536152a8ad311ebd))
* **ui/loading:** add class and call function ([807f07d](https://github.com/varletjs/varlet/commit/807f07d1c8627866054def13d9d778b0e77db174))
* **ui/picker:** add class ([#373](https://github.com/varletjs/varlet/issues/373)) ([eadf910](https://github.com/varletjs/varlet/commit/eadf910bc9a8b567dbfc9322267ad90b05c2f6d9))
* **ui/pull-refresh:** add class ([#399](https://github.com/varletjs/varlet/issues/399)) ([e874763](https://github.com/varletjs/varlet/commit/e8747638db35e82defcca9863219b17ce674efd7))
* **ui/radio, checkbox:** add class and call function ([#389](https://github.com/varletjs/varlet/issues/389)) ([4d399e4](https://github.com/varletjs/varlet/commit/4d399e4f606c76a695a434f7d4b21f7f943ebdca))
* **ui/rate:** add call function ([#379](https://github.com/varletjs/varlet/issues/379)) ([5982608](https://github.com/varletjs/varlet/commit/5982608d092a8eeb58b64068c7073f8418c1061d))
* **ui/row:** add class ([#384](https://github.com/varletjs/varlet/issues/384)) ([a76fdb0](https://github.com/varletjs/varlet/commit/a76fdb05aebbc5ec5406d99701deb2dadcbb6eb3))
* **ui/select:** add class and call function ([#380](https://github.com/varletjs/varlet/issues/380)) ([c0b7d07](https://github.com/varletjs/varlet/commit/c0b7d07022245dc246f4fcf8189067a5a1008151))
* **ui/skeleton:** add namespace ([#362](https://github.com/varletjs/varlet/issues/362)) ([cb97d8d](https://github.com/varletjs/varlet/commit/cb97d8dc5517953495ca3f37212686a3d1c48d4a))
* **ui/snackbar:** add class ([#371](https://github.com/varletjs/varlet/issues/371)) ([a0e6bfc](https://github.com/varletjs/varlet/commit/a0e6bfc6f4a63b8bf3b84214bbc955e09b6e9c81))
* **ui/space:** add class ([#374](https://github.com/varletjs/varlet/issues/374)) ([ceb18a7](https://github.com/varletjs/varlet/commit/ceb18a756bd7bbf39fb717839ad0b49786f716f1))
* **ui/steps:** add class ([#378](https://github.com/varletjs/varlet/issues/378)) ([e0fcbb3](https://github.com/varletjs/varlet/commit/e0fcbb3ed2699ffc87f82ce68d02591ddf9aca0a))
* **ui/sticky:** add class and call ([#385](https://github.com/varletjs/varlet/issues/385)) ([baea28d](https://github.com/varletjs/varlet/commit/baea28dd083ab59fcea34b47c3a4257b84d51c85))
* **ui/swipe:** add class and call ([#386](https://github.com/varletjs/varlet/issues/386)) ([0ec82e2](https://github.com/varletjs/varlet/commit/0ec82e2677fdc5167d82760b3b52f3504beeb570))
* **ui/switch:** add class ([#372](https://github.com/varletjs/varlet/issues/372)) ([1d5eaed](https://github.com/varletjs/varlet/commit/1d5eaed11eb11f92df83a61aee54b69e7a2ae839))
* **ui/tab-item:** add class ([#400](https://github.com/varletjs/varlet/issues/400)) ([58984b2](https://github.com/varletjs/varlet/commit/58984b242d9f787b5a3cb71c8f27e45804c74b67))
* **ui/uploader:** add namespace ([ee8e833](https://github.com/varletjs/varlet/commit/ee8e833106b98c4db5d74d5dd4539a919ad4c8ae))


### Refactoring

* code optimize ([#358](https://github.com/varletjs/varlet/issues/358)) ([eace23d](https://github.com/varletjs/varlet/commit/eace23dcf7e53c153de14b65c7733c5cad3f55ea))
* **extension:** change bottom-navigation auto complete ([798d792](https://github.com/varletjs/varlet/commit/798d792368b4e84cd15e25abb0e50a6d895b6b0e))
* fix the type of classes arguments ([5cf5ad0](https://github.com/varletjs/varlet/commit/5cf5ad05c1dd56b08f4753c6fd83b62a757e212c))
* **loading:** fix bem ([c1a702d](https://github.com/varletjs/varlet/commit/c1a702d9cf330da8c7a34d5240d67231718ad297))
* optimize code ([b70a015](https://github.com/varletjs/varlet/commit/b70a0159db5e7bad0a8de2e203f3a82f73f8f862))
* **pagination:** fix classname of modifier ([799ba2d](https://github.com/varletjs/varlet/commit/799ba2dc28c8d7ecf217b86fb05622f10545dae5))
* **pull-refresh:** remove unnecessary classes ([38a46bc](https://github.com/varletjs/varlet/commit/38a46bc1adbe0babfb3d3227f4209902c990eb8b))
* **rate:** remove useless div ([3e472dd](https://github.com/varletjs/varlet/commit/3e472dd15be3bf65bcaed75f6f4923fc3b14a35e))
* **slider:** fix bem ([26c56a3](https://github.com/varletjs/varlet/commit/26c56a3b4b961f793bd285f2af14be777c2540f1))
* **ui/action-sheet:** optimize code ([deace20](https://github.com/varletjs/varlet/commit/deace200225d3a756a6831bd9a30d8db60a1f0bf))
* **ui/bottom-navigation:** code optimize ([bdaa834](https://github.com/varletjs/varlet/commit/bdaa834355af71cb962708b80250413c0e44dfdc))
* **ui/bottom-navigation:** code optimize ([1a3dedc](https://github.com/varletjs/varlet/commit/1a3dedcbf8504806af21b10df1b6558d859f9da8))
* **ui/bottom-navigation:** code optimize ([#412](https://github.com/varletjs/varlet/issues/412)) ([ce298e7](https://github.com/varletjs/varlet/commit/ce298e7491f60f84383ca98c7eec94afe7c2aefa))
* **ui/bottom-navigation:** docs and code optimize ([#401](https://github.com/varletjs/varlet/issues/401)) ([83a5150](https://github.com/varletjs/varlet/commit/83a5150ac3ff80fe5674d56c6ea72b6f626b5012))
* **ui/bottom-navigation:** fab slot div to button ([#409](https://github.com/varletjs/varlet/issues/409)) ([dd54084](https://github.com/varletjs/varlet/commit/dd54084152e4e981df3448042e93f8f73b688398))
* **ui/bottom-navigation:** import component style ([#402](https://github.com/varletjs/varlet/issues/402)) ([1b6f747](https://github.com/varletjs/varlet/commit/1b6f7478e061cb225da30c5da60e8a563f68b02b))
* **ui/bottom-navigation:** label nowrap ([da0d384](https://github.com/varletjs/varlet/commit/da0d384333342c197732eaf37c5db61209ebfb65))
* **ui/bottom-navigation:** optimize code ([be1393d](https://github.com/varletjs/varlet/commit/be1393d9551b0ef3317361bc0389215faa260943))
* **ui/bottom-navigation:** remove animation cubic ([6faa871](https://github.com/varletjs/varlet/commit/6faa87125595c2644006d086d3d653abef694b37))
* **ui/bottom-navigation:** set tag-hightlight-color to transparent ([123d946](https://github.com/varletjs/varlet/commit/123d9467b1407286f8ba72796d47fecbf72f92da))
* **ui/BottomNavigation:** docs optimize & code optimize & add class ([#394](https://github.com/varletjs/varlet/issues/394)) ([af630c9](https://github.com/varletjs/varlet/commit/af630c90c7ed36f1f46a0ad69e470a72fd659aa0))
* **ui/pagination:** optimize class ([8c29976](https://github.com/varletjs/varlet/commit/8c29976b066308eb98075a59c21d0d89842297ae))
* **ui/swipe:** bem error ([7775332](https://github.com/varletjs/varlet/commit/77753329297fabd10da1de7fbf24b2da23bcf1c9))
* **ui/uploader:** remove repeat bindForm call ([4a57ed9](https://github.com/varletjs/varlet/commit/4a57ed993707f441a8393313d83cf4199880a249))


### Reverts

* **rate:** revert remove useless div ([95a9f25](https://github.com/varletjs/varlet/commit/95a9f252d9152caef2d0e97e705e556e84e75d7c))
* revert add class and call function ([cc70cae](https://github.com/varletjs/varlet/commit/cc70caed053eaf7659dbbdcc0822d1fd4047e386))

## [1.26.9](https://github.com/varletjs/varlet/compare/v1.26.8...v1.26.9) (2022-03-31)


### Performance Improvements

* icon font moved to jsdelivr ([4ef2eab](https://github.com/varletjs/varlet/commit/4ef2eab4fc9d0636078255ba92745547c32734bc))

## [1.26.8](https://github.com/varletjs/varlet/compare/v1.26.7...v1.26.8) (2022-03-25)


### Bug Fixes

* **cell:** add cell color to close [#353](https://github.com/varletjs/varlet/issues/353) ([24b44b9](https://github.com/varletjs/varlet/commit/24b44b932bae3f741858fa276c03136312ebe633))
* **collapse:** modify padding ([6ef1a28](https://github.com/varletjs/varlet/commit/6ef1a28486ec96825f5707d4828554675de7fe9e))
* resize offset and wrapWidth on focus function call ([e609c08](https://github.com/varletjs/varlet/commit/e609c086c82ac9c31e7c3826c26a14184b204e98))


### Features

* **ui/ripple:** determine whether to prevent ripple's fast touchmove by supporting touch events ([f859144](https://github.com/varletjs/varlet/commit/f8591445a70462d82ea19ca00ef6d1b792e62df9))


### Refactoring

* **back-top:** teleport element to body by default ([b0b28df](https://github.com/varletjs/varlet/commit/b0b28dfc8acd3d9129fec07c497d63e4fe830611))

## [1.26.7](https://github.com/varletjs/varlet/compare/v1.26.6...v1.26.7) (2022-03-18)


### Bug Fixes

* **cli/jest:** reset transformIgnorePatterns ([2ce595a](https://github.com/varletjs/varlet/commit/2ce595aab2cc45746f4da2d1e642e7e1c1aa33f6))
* **index-bar:** change scrollable target to fix cant scroll in Android web ([a0c07f6](https://github.com/varletjs/varlet/commit/a0c07f66036b0a599117f9c815c4d92ef1186dd0))
* **index-bar:** compatible scrolltop ([73fca8f](https://github.com/varletjs/varlet/commit/73fca8f89ec0342f3f897199627ddad8dbde98b5))


### Features

* **extension:** add code auto complete ([80690e4](https://github.com/varletjs/varlet/commit/80690e4125f4c5d4ba1a9eb207e1a3f4c1bb4991))
* **extension:** compatible prompt plugin to vue2 ([#337](https://github.com/varletjs/varlet/issues/337)) ([38d715a](https://github.com/varletjs/varlet/commit/38d715a614ab1a29167f9100eee46784e8feaccb))


### Performance Improvements

* **extension:** improve component description ([5bffd8a](https://github.com/varletjs/varlet/commit/5bffd8a430f1066c96fd6783ab4f4c0c970e88e6))


### Refactoring

* **extension:** add component descriptor ([818b848](https://github.com/varletjs/varlet/commit/818b84836cd0de055466bcf8613f45b56e3f65e1))
* **ui/index-bar:** fix scroll getter function ([d3dd14f](https://github.com/varletjs/varlet/commit/d3dd14f88b79c20a3ba1b2b159dca974b4d2e5fe))


### Reverts

* **ui/index-bar:** revert fix scroll getter function ([1b61cdd](https://github.com/varletjs/varlet/commit/1b61cddf53ebca76ad6d86240f25e154cb462b03))

## [1.26.6](https://github.com/varletjs/varlet/compare/v1.26.5...v1.26.6) (2022-03-14)


### Bug Fixes

* **date-picker:** fix touch event not trigger when button disable ([8a99a5c](https://github.com/varletjs/varlet/commit/8a99a5c23c677da0136085f7edaa9ad863779d02))
* **site:** fix app-bar transition error ([4efd4bf](https://github.com/varletjs/varlet/commit/4efd4bf4b565181ee2e687cee293435a23d4a441))


### Features

* **ui/uploader:** add a hide-list props for uploader components ([#335](https://github.com/varletjs/varlet/issues/335)) ([70bf77a](https://github.com/varletjs/varlet/commit/70bf77a0aed937006b4a06ce100eae45fb5f7cb6))


### Refactoring

* **site:** remove unuseful css var ([324e080](https://github.com/varletjs/varlet/commit/324e080721a97d2bf98f093882f175c8e0f23aab))
* **ui/image-preview:** add extra slot less variable ([e6c348b](https://github.com/varletjs/varlet/commit/e6c348b783b57b993a5722d6b99a5e65b44da49c))
* **ui/uploader:** format code, add types, optimize docs ([2bababd](https://github.com/varletjs/varlet/commit/2bababdb06126eb4728898bfd63bab3f45ea87b7))
* **ui/uploader:** format code, add types, optimize docs ([10867f2](https://github.com/varletjs/varlet/commit/10867f27cb58e1b25db2c14d0282b1a25e836ed8))

## [1.26.5](https://github.com/varletjs/varlet/compare/v1.26.4...v1.26.5) (2022-03-13)


### Features

* **date-picker:** suport touchable ([5868a11](https://github.com/varletjs/varlet/commit/5868a115e11b2e3638475857396c95957c6728d7))
* **ui/image-preview:** add extra slot ([8dc4d2d](https://github.com/varletjs/varlet/commit/8dc4d2d800b8ee61c8c7792a907c7d9369208ddc))


### Refactoring

* **ui/image-preview:** optimize css and fix docs ([a45896f](https://github.com/varletjs/varlet/commit/a45896f01b224a3a73ec4be1ce003a1187ee65cb))
* **ui/image-preview:** optimize slot and fix docs ([7e64374](https://github.com/varletjs/varlet/commit/7e64374fc17080cbedff0c221f12b4222e08ea01))

## [1.26.4](https://github.com/varletjs/varlet/compare/v1.26.3...v1.26.4) (2022-03-07)


### Bug Fixes

* **ui/image-preview:** fix TAP_DELAY ([c4edf69](https://github.com/varletjs/varlet/commit/c4edf695e5bf03fb715f18d335df2705173d54b6))


### Features

* **rate:** add namespace prop ([3aaa917](https://github.com/varletjs/varlet/commit/3aaa9170af649017f6c16c92bab5c44ad41fecae))

## [1.26.3](https://github.com/varletjs/varlet/compare/v1.26.2...v1.26.3) (2022-03-05)


### Bug Fixes

* **cli/site:** optimize documentation color ([c53353e](https://github.com/varletjs/varlet/commit/c53353e9e9f8fc72ccff10e277ad42b866424096))
* **date-picker:** format date of slotProps and style of doc ([67bf46c](https://github.com/varletjs/varlet/commit/67bf46ce266fb8d1e4c25e3a6cacf43c74253db5))
* **site:** add cssTarget chorme61 ([4481054](https://github.com/varletjs/varlet/commit/4481054517b817e168e0ac4a30c103affaea94d0))
* **ui/checkbox:** resolve checkbox component animation display exception ([#321](https://github.com/varletjs/varlet/issues/321)) ([9e5c078](https://github.com/varletjs/varlet/commit/9e5c07812c28ede647825119a086425366cb868e))
* **ui/image-preview:** fix isTapTouch ([f5c38f8](https://github.com/varletjs/varlet/commit/f5c38f8b454699951cde262cda7ce78b96478fc0))
* **ui/image-preview:** fixed the error that the target value is null when triggering isTapTouch ([#323](https://github.com/varletjs/varlet/issues/323)) ([ee5c559](https://github.com/varletjs/varlet/commit/ee5c559700728fa5a620bddb9a55fa05b4ecc432))


### Refactoring

* **date-picker:** optimize code ([444eb1c](https://github.com/varletjs/varlet/commit/444eb1c4024a2cce5fbd2b89d5de9302ea5930eb))
* **site:** add css var ([93da22f](https://github.com/varletjs/varlet/commit/93da22f3cbbf18f29b2cb1ecf3a12eac5bdb1e31))
* **site:** add transition for code border ([d86dc36](https://github.com/varletjs/varlet/commit/d86dc3660add530b42f3026def12a57484c61928))
* **site:** display code toolbar in mouse hover ([60eb6a0](https://github.com/varletjs/varlet/commit/60eb6a00d038e25b01ec830699fdaddbf5cdd36c))
* **site:** support dark mode of the code example ([8b29972](https://github.com/varletjs/varlet/commit/8b29972c2990ff5dde7a596f5a65e61b21fdc75d))
* **ui/image-preview:** change TAP_DELAY value ([05f2d48](https://github.com/varletjs/varlet/commit/05f2d480f358ee532f27a589a556b60558827729))

## [1.26.2](https://github.com/varletjs/varlet/compare/v1.26.1...v1.26.2) (2022-02-22)


### Bug Fixes

* support --ripple-color ([c5ded77](https://github.com/varletjs/varlet/commit/c5ded77c7be2dd8fcfa7eae24817fb18c3a29bf3))
* **ui/space:** fix space err with comment [#319](https://github.com/varletjs/varlet/issues/319) ([f2adc98](https://github.com/varletjs/varlet/commit/f2adc981030481fb218e608342a184c4d1e07588))
* **ui/space:** fix space v-for err ([c9d10e3](https://github.com/varletjs/varlet/commit/c9d10e3c5500f4ae5064be106b73c169dff010f3))


### Performance Improvements

* remove unuseful function call ([#316](https://github.com/varletjs/varlet/issues/316)) ([263a830](https://github.com/varletjs/varlet/commit/263a8305a5e3ec24a4b3c67db6dd2ed4dc5fdcca))
* **ui/divider:** remove unuseful function call ([129e47d](https://github.com/varletjs/varlet/commit/129e47dd7df8bfea17059180cb5fd041fef0809b))


### Refactoring

* **cli/site:** improve document readability ([9e15781](https://github.com/varletjs/varlet/commit/9e15781738c861787521f5f98cf2f215c13816be))
* **cli/site:** improve document readability ([b4ac06f](https://github.com/varletjs/varlet/commit/b4ac06f2453f3537da04228be8e76456375ec1d5))
* **space:** remove unused method ([21b4e26](https://github.com/varletjs/varlet/commit/21b4e261ecc44668f03218b8377adb29873aeed3))

## [1.26.1](https://github.com/varletjs/varlet/compare/v1.26.0...v1.26.1) (2022-02-14)


### Bug Fixes

* **site:** fix fold animation error when defaultFold set false ([e709af0](https://github.com/varletjs/varlet/commit/e709af094343ffac2002d63c5a883005bd3f82f8))
* **ui/list:** the fractional part of the detectorBottom when bottoming out overflows ([c8e0142](https://github.com/varletjs/varlet/commit/c8e01423d98b9bdcea825be35558f299932f753d))


### Refactoring

* **site:** unfold code block default ([6e5db49](https://github.com/varletjs/varlet/commit/6e5db496ba141c462777cdf815b7001624763d00))
* **slider:** optimize code ([e0bdc6a](https://github.com/varletjs/varlet/commit/e0bdc6a82086997947f4d6ac94faf83cde664934))

# [1.26.0](https://github.com/varletjs/varlet/compare/v1.25.1...v1.26.0) (2022-02-08)


### Bug Fixes

* **playground:** fix primary color ([4b80e47](https://github.com/varletjs/varlet/commit/4b80e47d42948b8e67dbd7e23184431bbe51c521))
* **playground:** fix to relative path ([73834d0](https://github.com/varletjs/varlet/commit/73834d0070c0bd8833cb4e8d0b731b884a4874f7))


### Features

* **icons:** add new icon ([49c3d5e](https://github.com/varletjs/varlet/commit/49c3d5ed790132443415b0af4ca594adfef906ed))
* **site:** add playground logic ([24c542d](https://github.com/varletjs/varlet/commit/24c542dff259f91d427c5deaa79032cda53e4597))
* **ui/col:** add responsive layout ([4e314cb](https://github.com/varletjs/varlet/commit/4e314cb0f3ea0d5ac234d5987289ee33c19cfc69))


### Refactoring

* **cli/release:** optimize release command ([#309](https://github.com/varletjs/varlet/issues/309)) ([bac572b](https://github.com/varletjs/varlet/commit/bac572bec6645d1ef9ab640274bf53d27328c6f5))
* **ui/col:** remove unuseful code ([ec9a182](https://github.com/varletjs/varlet/commit/ec9a1829ca7cf7b5681fa7af70e6356e346da5bc))
* **ui/col:** streamline unnecessary code ([64cc33a](https://github.com/varletjs/varlet/commit/64cc33a9c3ddf09522af4c962f99231ae0712ead))
* **ui/layout:** optimize code ([b01f306](https://github.com/varletjs/varlet/commit/b01f3061fac26528b6dfa331f18ada073ef66d30))
* **ui/layout:** optimize code & add col click unit test ([e3d1631](https://github.com/varletjs/varlet/commit/e3d16317b8ed21940f5f392ae5c07f7690bf4ec2))


### Reverts

* revert add responsive layout" ([d54e500](https://github.com/varletjs/varlet/commit/d54e500325618806adc118562fa4df9774e347b3))
* revert release command ([c2fc9df](https://github.com/varletjs/varlet/commit/c2fc9df5c6263d30d9304410b40e6140b4a53630))
* revert release command ([f910a24](https://github.com/varletjs/varlet/commit/f910a24a3fd3ee13f332ec0fd226971c80f862a2))

## [1.25.1](https://github.com/varletjs/varlet/compare/v1.25.0...v1.25.1) (2022-01-27)


### Bug Fixes

* **cli/site:** do not show the fold icon when the height is not high enough to expand the code block ([b4cd0b5](https://github.com/varletjs/varlet/commit/b4cd0b5dc9e7a19c7933d515ee83bf6666578c4f))
* **cli:** fix select scrollbar display error [#305](https://github.com/varletjs/varlet/issues/305) and add esm bundle ([f66ffb7](https://github.com/varletjs/varlet/commit/f66ffb70e197d3f508eeb07488496c6c5d3008bf))
* **collapse:** fix modelValue is undefined when close accrodion item ([0da3871](https://github.com/varletjs/varlet/commit/0da38718b58ddac463965194e4160e1541318803))
* **index-bar:** support ssr and fix top value when click anchor ([6c7df9f](https://github.com/varletjs/varlet/commit/6c7df9f4b218ca4174f610262112dbe8567fecc1))
* **ui/input,select:** fix label color error ([652ae97](https://github.com/varletjs/varlet/commit/652ae97bb594ffa6a9309ec004b8b9c5ebc8ead6))
* **ui/select:** fix word break ([95b1684](https://github.com/varletjs/varlet/commit/95b16848c6672470ea8f75328ac043525ca08057))
* **ui/sticky:** add doubleRaf for ssr [#296](https://github.com/varletjs/varlet/issues/296) ([ed1348c](https://github.com/varletjs/varlet/commit/ed1348c78805282349815d317a98d262915b98f1))
* **ui/tabs:** support nuxt3 ([9459d1d](https://github.com/varletjs/varlet/commit/9459d1d8d36264487d4a3dc29dc82fe22ccfd328))


### Features

* **backTop:** add position and default target ([86f9237](https://github.com/varletjs/varlet/commit/86f92376600578db8433ad67540d931d87bdc773))
* **ui/app-bar:** change app-bar default background color in dark mode ([a073dee](https://github.com/varletjs/varlet/commit/a073dee493408a269666ef9615789d8c446d1e76))
* **ui/dialog:** add dialog-class dialog-style props ([e7f9b5d](https://github.com/varletjs/varlet/commit/e7f9b5d791eb0a1a76d0a6c31b60430880232a2c))
* **ui/skeleton:** add fullscreen-z-index prop ([394f0a9](https://github.com/varletjs/varlet/commit/394f0a9b8dabc5b877f9b27d71e5337ca6876921))


### Performance Improvements

* optimize utils ([24c0f79](https://github.com/varletjs/varlet/commit/24c0f79d83737bf93bfd6220176edb6271250c3b))


### Refactoring

* add some icons pin & pin-outline ([#304](https://github.com/varletjs/varlet/issues/304)) ([ae07f8d](https://github.com/varletjs/varlet/commit/ae07f8d159a8b2c3176bec5341de7c2daf0deeba))
* **backTop:** use toSizeUnit to replace toPxNum ([89c0af7](https://github.com/varletjs/varlet/commit/89c0af7a65b6e4539fe7e1468f6d212af17b249a))
* **site/cli:** optimize fold display ([492ab32](https://github.com/varletjs/varlet/commit/492ab32a05b348091bc41268eadce57fae3a5fc6))
* **ui/back-top:** optimze target handler ([b5e5527](https://github.com/varletjs/varlet/commit/b5e55279debe2fe02fa197889c73dcae10befe6a))
* **ui/button:** remove unuseful code ([18d06b9](https://github.com/varletjs/varlet/commit/18d06b91c926504e75d316d3c9fd9bcabc959ef1))

# [1.25.0](https://github.com/varletjs/varlet/compare/v1.24.11...v1.25.0) (2022-01-19)


### Bug Fixes

* **date-picker:** remove error when the initial value is undefined and close [#277](https://github.com/varletjs/varlet/issues/277) ([ede1eb1](https://github.com/varletjs/varlet/commit/ede1eb12ea2d2dcd0f24819a11369b47ac8825f7))
* **swipe:** support ssr ([007c3e6](https://github.com/varletjs/varlet/commit/007c3e65b37259b68343388bd45453c46bca30ea))
* **ui/app-bar:** support ssr ([3700eef](https://github.com/varletjs/varlet/commit/3700eef03ef33c53762fc677cde22ea41d669568))
* **ui/list:** remove isHidden function ([a4634e0](https://github.com/varletjs/varlet/commit/a4634e0d468b865264381fa31acb2a4af87e2a9a))


### Features

* **button:** add autoLoading prop ([67f4b40](https://github.com/varletjs/varlet/commit/67f4b40635d3452d74be6ce0a1abc5a423611950))


### Refactoring

* **button:** refactor button for auto loading ([e3d2dfa](https://github.com/varletjs/varlet/commit/e3d2dfa1631d24df64b534c16841a97feae439e1))
* **ui/button:** refactor button for auto loading ([08b00ed](https://github.com/varletjs/varlet/commit/08b00ed6f4287dd012ab64e7957e02287abe34b9))

## [1.24.11](https://github.com/varletjs/varlet/compare/v1.24.10...v1.24.11) (2022-01-14)


### Bug Fixes

* **button:** add css cover for loading ([5c003cc](https://github.com/varletjs/varlet/commit/5c003ccb172e773fc369fc732df40f0df3499a7e))
* **pagination:** emit event when change pageSize and close [#279](https://github.com/varletjs/varlet/issues/279) ([f9a9be4](https://github.com/varletjs/varlet/commit/f9a9be4a628c30c8886f1398182be9313ef8c587))
* **ui/select:** fix select wrapWidth and offsetY display error with ssr [#276](https://github.com/varletjs/varlet/issues/276) ([6e396a3](https://github.com/varletjs/varlet/commit/6e396a3e51de9129121ab30e096805b17c6d7083))


### Refactoring

* fix site default title, allow stringlike argument for dialog and snackbar ([9785e31](https://github.com/varletjs/varlet/commit/9785e31bdb27130fae80456d956a7276041afd2e))
* **ui/list:** lazy load data when switching views ([6942652](https://github.com/varletjs/varlet/commit/69426526bf2351294a1dc577882a4ca2b3580d00))

## [1.24.10](https://github.com/varletjs/varlet/compare/v1.24.9...v1.24.10) (2022-01-10)

## [1.24.9](https://github.com/varletjs/varlet/compare/v1.24.8...v1.24.9) (2022-01-09)


### Bug Fixes

* **touch-emulator:** add module property in package.json ([866cd8d](https://github.com/varletjs/varlet/commit/866cd8d806416321e405e7b4f8bb14221f2320f3))

## [1.24.8](https://github.com/varletjs/varlet/compare/v1.24.7...v1.24.8) (2022-01-09)


### Bug Fixes

* **touch-emulator:** fix cjs to esm ([ce68ff3](https://github.com/varletjs/varlet/commit/ce68ff3ed710f3b9f5f1513659121ee21297d5e4))

## [1.24.7](https://github.com/varletjs/varlet/compare/v1.24.6...v1.24.7) (2022-01-09)


### Bug Fixes

* **touch-emulator:** rename file ([3a4cbd5](https://github.com/varletjs/varlet/commit/3a4cbd587092fb51e3401233da718b73c4b1ad35))

## [1.24.6](https://github.com/varletjs/varlet/compare/v1.24.5...v1.24.6) (2022-01-09)


### Bug Fixes

* **date-picker:** import icon.less ([48d54a6](https://github.com/varletjs/varlet/commit/48d54a6d5fe148bb8bf926e670f155da6ea77589))
* **touch-emulator:** add iife script ([ed7e28a](https://github.com/varletjs/varlet/commit/ed7e28a246612573a7558309719fb616d7e46a4f))
* **touch-emulator:** support ssr ([f5857bb](https://github.com/varletjs/varlet/commit/f5857bb93e79582dc17423d07d973d8fb590d4f6))

## [1.24.5](https://github.com/varletjs/varlet/compare/v1.24.4...v1.24.5) (2022-01-07)


### Bug Fixes

* **cli/release:** add remote option ([8c9ed7c](https://github.com/varletjs/varlet/commit/8c9ed7c1af950e6bf0094a76b7053af93d16306e))
* **ui/menu:** support ssr ([c50e26f](https://github.com/varletjs/varlet/commit/c50e26fcf285b238370822ada65a33b189214d8e))


### Refactoring

* **cli/release:** optimize release process ([f8131ee](https://github.com/varletjs/varlet/commit/f8131ee53bf63071fe2e102bedbe9b09ef546a4b))
* **ui:** adjustment menu component styles ([b5116f2](https://github.com/varletjs/varlet/commit/b5116f2ea768ea23bf7a8f90956b129e83f940a4))

## [1.24.4](https://github.com/varletjs/varlet/compare/v1.24.3...v1.24.4) (2021-12-30)


### Bug Fixes

* **cli/release:** fix tag release error ([341997a](https://github.com/varletjs/varlet/commit/341997a6b02957ee34c5d2f8619b4b8c619a06d6))

## [1.24.3](https://github.com/varletjs/varlet/compare/v1.24.1...v1.24.3) (2021-12-30)


### Bug Fixes

* **cli:** fix release tag ([5341cfc](https://github.com/varletjs/varlet/commit/5341cfc4496d5b5222a2599ee494546483dcd5a4))
* **cli:** remove unuseful import ([21e8b74](https://github.com/varletjs/varlet/commit/21e8b741ac4249d413a16d465ea5dd73e83114cd))
* **compile:** move config to entry function to aviod generate unnecessary folder ([f99b050](https://github.com/varletjs/varlet/commit/f99b050a71c605ea907f70f855850469b652ff5c))
* **config:** add parameter to control generate folder ([6a17558](https://github.com/varletjs/varlet/commit/6a175585e4f5070b0a312de403c5dbbf9e26c08d))
* **create:** move config to entry function to aviod generate unnecessary folder ([333cfae](https://github.com/varletjs/varlet/commit/333cfae36313a4c8364471e076a2d6fb3b7e1818))
* **date-picker:** fix eslint error ([5c9b12c](https://github.com/varletjs/varlet/commit/5c9b12cc4a06f7a877a3061d8f51cd6bc44c7a1f))
* modify component.spec ([9f5f022](https://github.com/varletjs/varlet/commit/9f5f02245fea94fa3e45248391ea24fd4d5c81d2))
* modify home.zh-CN ([3664a6d](https://github.com/varletjs/varlet/commit/3664a6d8d72b6545391ec7ff425ba2878bd106ee))
* modify openSourceGuide.zh-CN ([cf263ed](https://github.com/varletjs/varlet/commit/cf263ed55cfafd0d9339f7fc2697e096b6b1e3cc))
* remove yarn usage in script ([40d5fd2](https://github.com/varletjs/varlet/commit/40d5fd283de8ad598088c2d09949f979a5dfaff6))
* **ui/elevation:** resolve shadow cannot display ([f8dedba](https://github.com/varletjs/varlet/commit/f8dedbaeb5e7af080c5f91d4501747f43ca893fa))
* **ui/menu:** modify the implementation of sloving offsetHeight error ([9871022](https://github.com/varletjs/varlet/commit/987102260cf30279306914075b3f82b6083d4406))
* **ui/menu:** reslove error of getting offsetHeight when alignment is set as bottom ([d05a7f9](https://github.com/varletjs/varlet/commit/d05a7f94d5a939205ade2e7df48ba1f7e6ac2a67))
* **ui/swipe:** fix stopAutoplay function ([7cad9d5](https://github.com/varletjs/varlet/commit/7cad9d5fcb3b0eb4747423d44dc4935616181fdf))
* **ui/swipe:** fix stopAutoplay function ([b2390fb](https://github.com/varletjs/varlet/commit/b2390fb52b13e4227f0436bb8cc6b4645cc73300))


### Refactoring

* **all:** add icons to root ([b1955e4](https://github.com/varletjs/varlet/commit/b1955e478596d61a4f69e7103dd47f5246bd692a))
* **all:** fix icon snap and fix deps ([7dc756e](https://github.com/varletjs/varlet/commit/7dc756edd409fab8719c7788218cfda5fa9db2c5))
* **all:** refactor for pnpm ([2341420](https://github.com/varletjs/varlet/commit/23414209a1e9d6ced5c1c759e193011efc5a85df))
* **all:** refactor for pnpm ([73523f5](https://github.com/varletjs/varlet/commit/73523f5d41e4eb5c4e94a1aa874b407f34ebfde3))
* **all:** refactor for pnpm ([07db7d1](https://github.com/varletjs/varlet/commit/07db7d1f7f244ff8cae989b3632a3899f9b3a4e6))
* **all:** remove lerna ([eca794f](https://github.com/varletjs/varlet/commit/eca794f0d1549bf7b2b1c2a32927f9faee33d295))
* **all:** wip ([3731f3b](https://github.com/varletjs/varlet/commit/3731f3bb14110d8f4f03b76f37d2dd561fe8735a))
* **cli:** catch release error ([f7a4940](https://github.com/varletjs/varlet/commit/f7a49404d35bad4f010bb6bfed262180aba1520e))
* **cli:** change release type order and add git resotre action ([0243bd9](https://github.com/varletjs/varlet/commit/0243bd94be73d7e9f2826e22f28b0e7ab4338681))
* **cli:** fix success info ([069647f](https://github.com/varletjs/varlet/commit/069647fe6cb65e869c2dd5601ce1a94c6c60106d))
* **cli:** optimize error handle ([d9d3f7e](https://github.com/varletjs/varlet/commit/d9d3f7e69dcd26702c0762c68c5e72d3adbfd3ca))
* **cli:** refactor generators for pnpm ([8349eac](https://github.com/varletjs/varlet/commit/8349eac65029f93ba043b80e115e758bd6ddd380))
* **cli:** refactor generators for pnpm ([9cd5edd](https://github.com/varletjs/varlet/commit/9cd5edd099989516d3085caad055254a32cb7873))
* **cli:** rename getVarletConfig args ([8e6ea6d](https://github.com/varletjs/varlet/commit/8e6ea6dd75a230102f50cc44b2e8a26da59d561f))
* fix prettierignore ([bbd6b59](https://github.com/varletjs/varlet/commit/bbd6b59eeb8e3cea1602b0fefd452dc7fe8466c7))
* optimize error catch ([e137d8c](https://github.com/varletjs/varlet/commit/e137d8c97e70bc66be7d3966a00c1240dec4b576))
* optimize error info format ([a5643d6](https://github.com/varletjs/varlet/commit/a5643d6e07b564afac4792374a2c6e8915d5db27))
* optimize log info ([520bb66](https://github.com/varletjs/varlet/commit/520bb66c40b58f9adfbbebd1e6e043fe5e1a5c66))
* remove markdown-loader package ([0fdcfda](https://github.com/varletjs/varlet/commit/0fdcfdac94e4c69cd9622d743e71e2e4472031a6))
* **ui/icons:** add icons ([dcaa589](https://github.com/varletjs/varlet/commit/dcaa5893e6c52501f17e7088647cf8746fd723d4))

## [1.24.1](https://github.com/varletjs/varlet/compare/v1.24.0...v1.24.1) (2021-12-27)


### Bug Fixes

* **ui/elevation:** resolve shadow cannot display ([227b2db](https://github.com/varletjs/varlet/commit/227b2dbab2884a8914ef5a530c18dfffff010323))

# [1.24.0](https://github.com/varletjs/varlet/compare/v1.23.11...v1.24.0) (2021-12-27)


### Bug Fixes

* **card:** add word-break for description ([38d7427](https://github.com/varletjs/varlet/commit/38d74270eed5bc71b4f821f5433604b7a62eecbc))
* **cli/site:** adjust z-index of the sidebar and code toolbar for site ([5b81918](https://github.com/varletjs/varlet/commit/5b8191822305e5a485003223d3109a6554b33251))
* **cli:** fix icon vertical-align ([f015092](https://github.com/varletjs/varlet/commit/f0150923b9d33c6f61c9810887ea294015a35621))
* **d.ts:** fix pack declare lost after build ([d7df27e](https://github.com/varletjs/varlet/commit/d7df27e439a2b28fa4a9cfb867129611f2a268b3))
* fix test fail ([78f20ec](https://github.com/varletjs/varlet/commit/78f20ec46bea357fd12c1da68b02ce7dc9cc2918))
* **loading:** add transition for overlay ([2a62eaa](https://github.com/varletjs/varlet/commit/2a62eaa8eed6a5ff77222b48932b39655744ffae))
* **loading:** expose marigin css variable ([313d232](https://github.com/varletjs/varlet/commit/313d232b363981ce94c11e419ace904bfc2b246d))
* **placeholder:** text-overflow to ellipsis ([7c586d2](https://github.com/varletjs/varlet/commit/7c586d2f7e751a12993d06e46d460ac25de24b22))
* **select:** fix select's placeholder when too long ([a7e08a6](https://github.com/varletjs/varlet/commit/a7e08a60e7d2d8f49f0863fcda6814bc1fdd4fdc))
* **site:** add types ([6520984](https://github.com/varletjs/varlet/commit/6520984af6eb13b772783540aa72427cf1e4403e))
* **site:** fix mobile style ([3189225](https://github.com/varletjs/varlet/commit/31892257a3611e2c6fa39d01cd0d87d4cc2d5ebb))
* **site:** modify code example style ([bb33910](https://github.com/varletjs/varlet/commit/bb3391008bdafbf052b8485b79bb54270ca27771))
* **types:** fix prompts that could not find a declaration file when import translation file ([2637884](https://github.com/varletjs/varlet/commit/26378841f2fbafeda8bcd6fffd5eccfd50e9e559))
* **types:** fix prompts that could not find a declaration file when import translation file ([e17c6d2](https://github.com/varletjs/varlet/commit/e17c6d2c430f1b4601875e98ca92d075a1de5813))
* **ui/input, select:** fix placeholder animation and var--ellipsis class ([458ab30](https://github.com/varletjs/varlet/commit/458ab307652328ace71dc0523323422f7ebdbaac))
* **ui/swipe:** do not use initialIndex when resize ([46e997e](https://github.com/varletjs/varlet/commit/46e997e8f014432149f409e40545592757ae4484))


### Features

* **cli:** add clipboard and fold tool for site ([5298c99](https://github.com/varletjs/varlet/commit/5298c996a6ea890ee29c01c254704f06d157df4c))
* **loading:** add slots and desc prop ([db0df16](https://github.com/varletjs/varlet/commit/db0df16af2cab2de059282e9a8c15c66077b1ae2))


### Refactoring

* **cli/site:** optimize site fold style ([4a1d774](https://github.com/varletjs/varlet/commit/4a1d774686bd66a53827bfb64a8495be97f9cf33))
* **d.ts:** change pack's  import url ([016290a](https://github.com/varletjs/varlet/commit/016290ad54dadd94dc4f3bf3902fbdf5b8e4a186))
* **loading:** rename desc to description ([aebe684](https://github.com/varletjs/varlet/commit/aebe6841343931e8bc8a15bc8da012336d70c102))
* **site:** rename key of themes ([94852f5](https://github.com/varletjs/varlet/commit/94852f5b834190945bc5f9fc1469fcd684ecf541))


### Reverts

* revert fix mobile style ([22d9da9](https://github.com/varletjs/varlet/commit/22d9da9beaf88fa1a29394bc07141e5ec3355c42))

## [1.23.11](https://github.com/varletjs/varlet/compare/v1.23.10...v1.23.11) (2021-12-10)


### Bug Fixes

* **card:** fix image css problem in card  ([#224](https://github.com/varletjs/varlet/issues/224)) ([498cb3c](https://github.com/varletjs/varlet/commit/498cb3c41f70ca265ab407cb9d4ed4100abf6c9f))
* **fix the offset problem when the divider is vertical:** remove transformY,use align-items: center ([5b10f08](https://github.com/varletjs/varlet/commit/5b10f08ef6e2ebdbae4c3e199b23e68a319181e2))
* fix types ([2d95d4c](https://github.com/varletjs/varlet/commit/2d95d4c53a8e106ef38d23b372e7f5583d7ef0d2))
* remove unused code ([b37f258](https://github.com/varletjs/varlet/commit/b37f25809adfc0a7e3e8a3ecf3085715c531aa7f))


### Refactoring

* **gen:** optimize directory structure for generators ([cd2f82e](https://github.com/varletjs/varlet/commit/cd2f82e72391bc52f36c401a86890ec4ff681593))

## [1.23.10](https://github.com/varletjs/varlet/compare/v1.23.9...v1.23.10) (2021-12-01)


### Bug Fixes

* **ui/icon:** fix vertical align to bottom ([b2c4da9](https://github.com/varletjs/varlet/commit/b2c4da9a1a4df2ee43b27b005576f3523e7a4e5f))


### Refactoring

* **ui/jest:** fix types ([827cb0a](https://github.com/varletjs/varlet/commit/827cb0abda597187d548828bfbf8fd566bb71040))

## [1.23.9](https://github.com/varletjs/varlet/compare/v1.23.8...v1.23.9) (2021-11-25)


### Bug Fixes

* **ui/checkbox:** add ripple depend style ([b8345fa](https://github.com/varletjs/varlet/commit/b8345fa2792f6b3b0f7b9651a5fb63590397eb5a))

## [1.23.8](https://github.com/varletjs/varlet/compare/v1.23.7...v1.23.8) (2021-11-24)


### Bug Fixes

* **cli:** add ts ignore to generate routes ([3363578](https://github.com/varletjs/varlet/commit/3363578eb2763282fd3c274ab75374cbff94c92b))
* compatible dayjs for nuxt ([0b3b540](https://github.com/varletjs/varlet/commit/0b3b540694e13130686773d9bcd3c3c4d21da496))
* **d.ts:** repair type ([b925e7e](https://github.com/varletjs/varlet/commit/b925e7ea63c4154b3c26cb711fde4a7382633c80))


### Refactoring

* **refactor:adjustment unit test:** refactor:adjustment unit test ([a70c837](https://github.com/varletjs/varlet/commit/a70c837440d03744dc46626cf12e957a5e43f461))

## [1.23.7](https://github.com/varletjs/varlet/compare/v1.23.6...v1.23.7) (2021-11-23)


### Bug Fixes

* **loading:** add color for circle type & update doc ([3457394](https://github.com/varletjs/varlet/commit/345739466b8109e63205eee720d391a328d30ca7))
* **loading:** remove radius prop & add color for circle type & update doc ([3a9dfe0](https://github.com/varletjs/varlet/commit/3a9dfe07886b245d686b454bfa1aa975b7e223f5))
* **ui/themes, cli:** fix themes types ([f29511a](https://github.com/varletjs/varlet/commit/f29511a016edb462bdf578a6b5a19fbe10a22158))


### Refactoring

* **ui/themes:** fix types ([21c1a88](https://github.com/varletjs/varlet/commit/21c1a8859ba686314f1422afdc34e881fbcc92eb))


### Reverts

* revert fix loading ([b97b8b9](https://github.com/varletjs/varlet/commit/b97b8b96e6f5f3c5f22f0f93eedc3e39b44e5344))

## [1.23.6](https://github.com/varletjs/varlet/compare/v1.23.5...v1.23.6) (2021-11-22)


### Bug Fixes

* **date-picker:** css specificity ([565002b](https://github.com/varletjs/varlet/commit/565002bf78b0374b6b9f411df95d5e342f4ce626))

## [1.23.5](https://github.com/varletjs/varlet/compare/v1.23.4...v1.23.5) (2021-11-21)


### Bug Fixes

* **cli/compile:** add commonjs bundle ([4a424d4](https://github.com/varletjs/varlet/commit/4a424d4c066f7de69cbf561a5bc9279862739637))
* **cli/compile:** add match commonjs script extname function ([2b5b1bd](https://github.com/varletjs/varlet/commit/2b5b1bde5e1c16d4e58ce2a100ae4a1a3cc428ce))
* **cli/compile:** fix compile module readdir ([9c3ad08](https://github.com/varletjs/varlet/commit/9c3ad08410009e50b288f033b8fdbe10a8c01160))
* **cli:** add module moduleCompatible option in varlet.config.js ([0b1d95f](https://github.com/varletjs/varlet/commit/0b1d95fc740a225240ee3f28e06015f4538b2304))
* **cli:** expose lib folder ([2a8848a](https://github.com/varletjs/varlet/commit/2a8848a6f064aa91d56875ba467c46da79589a79))
* **cli:** fix commonjs compiler ([c5c2b12](https://github.com/varletjs/varlet/commit/c5c2b12f163bed130b3c6c0ee0eb805fe4a015f1))
* **cli:** fix inline css plugin ([3e8b7b4](https://github.com/varletjs/varlet/commit/3e8b7b4e5489bc67dd38f8787477f07e2a13e7ac))
* compatible nuxt ([d681176](https://github.com/varletjs/varlet/commit/d6811763867f44731544c8c218e5368896aab6b1))
* **ui/list:** support nuxt ([dd7a71e](https://github.com/varletjs/varlet/commit/dd7a71ee37e2eadbacc6febd22949ef664997cb3))
* **ui/popup,input:** support nuxt ([def81ef](https://github.com/varletjs/varlet/commit/def81ef821a8ce679287702316bd98ca363bc7f4))
* **ui/sticky:** support nuxt ([29c24d6](https://github.com/varletjs/varlet/commit/29c24d61a0e91ceb948ff5a3e1bc6eb4c52b416a))
* **ui:** dayjs compatible ([3f2289b](https://github.com/varletjs/varlet/commit/3f2289bdf39e82529df94fea6fec9dd7739a5c96))


### Refactoring

* **ui/input:** remove dynamic component ([9c8973f](https://github.com/varletjs/varlet/commit/9c8973f08160c46e95d200ca92c3cea8965dc640))
* **ui:** dayjs compatible ([3bfdedc](https://github.com/varletjs/varlet/commit/3bfdedc92225bcc6c0541db77bfc351458bd7e23))

## [1.23.4](https://github.com/varletjs/varlet/compare/v1.23.3...v1.23.4) (2021-11-21)


### Bug Fixes

* **ui/types:** add list.d.ts ([ab06a8f](https://github.com/varletjs/varlet/commit/ab06a8f219fcf5f4f929938f048a142a6c4b1715))

## [1.23.3](https://github.com/varletjs/varlet/compare/v1.23.2...v1.23.3) (2021-11-20)


### Bug Fixes

* **cli/jest:** add watchAll mode ([84ebb4e](https://github.com/varletjs/varlet/commit/84ebb4efe823cb9d7f22995d429b82d8fc3e05c8))

## [1.23.2](https://github.com/varletjs/varlet/compare/v1.23.0...v1.23.2) (2021-11-20)


### Bug Fixes

* **ui/space:** modify the behavior of space in space-around and space-between modes ([5abf617](https://github.com/varletjs/varlet/commit/5abf617b009fbb63409724a3394b207949cc3a2c))


### Refactoring

* **extension:** add space to sitemap ([551e092](https://github.com/varletjs/varlet/commit/551e092d85fcea89362092fe043e75d9fc1af5f8))

# [1.23.0](https://github.com/varletjs/varlet/compare/v1.22.10...v1.23.0) (2021-11-19)


### Bug Fixes

* add assert for example lang ([7ce8bae](https://github.com/varletjs/varlet/commit/7ce8baefeaaf0f10d2638cb4927ccbf570b28006))
* **cli:** bump typescript and commander version ([af893e9](https://github.com/varletjs/varlet/commit/af893e970b71ddc46365187c94ecba244513ef5a))
* **cli:** error when building with vite ([6e60e8f](https://github.com/varletjs/varlet/commit/6e60e8f9b225fb0978a517f120589bdc8d5026b4))
* **cli:** error when building with vite ([e786702](https://github.com/varletjs/varlet/commit/e78670201ae31d8bdfd710cfbbf9c794da0c0aa2))
* code styles ([79f48c2](https://github.com/varletjs/varlet/commit/79f48c260f0424dfeccc659b4e77b68a2cdfe09b))
* code styles ([776da40](https://github.com/varletjs/varlet/commit/776da4099f4a458cc4b19f4e80a037b8d7737086))
* **collapse:** modify border style ([9e0f2f3](https://github.com/varletjs/varlet/commit/9e0f2f3a885828757cbe1d9d2af1d21c323133ec))
* **date-picker:** add nullish coalescing ([9c3914b](https://github.com/varletjs/varlet/commit/9c3914bede52371483c05505475f67e4045570dd))
* **date-picker:** add nullish coalescing ([8644d88](https://github.com/varletjs/varlet/commit/8644d8841587e6831c8175a5e4596b92f23d08d6))
* **date-picker:** use style class to replace watch mode ([ce591de](https://github.com/varletjs/varlet/commit/ce591de2ab35be8d524da6a671357c106b8e81bb))
* **doc:** progress bar should not use unmount function ([0587103](https://github.com/varletjs/varlet/commit/05871038e42a50f38fdc2a201107d786431691cd))
* **fix(ui/space):add space.d.ts for space:** fix(ui/space):add space.d.ts for space ([29fe945](https://github.com/varletjs/varlet/commit/29fe945119a83c549ab13058343f72f07466781e))
* **fix(ui/space):add space.d.ts for space:** fix(ui/space):add space.d.ts for space ([1fd3fac](https://github.com/varletjs/varlet/commit/1fd3fac9288e78dfec2f62754773426c03f63feb))
* import dark themes of form related components ([32e6f08](https://github.com/varletjs/varlet/commit/32e6f08b9fab066be249158ef5d1c646ab536d57))
* **picker:** optimize dark mode ([c7304b3](https://github.com/varletjs/varlet/commit/c7304b37128096cc5a4b86e275a07de0015f32b7))
* **site:** modify the width of nav ([af0bfbe](https://github.com/varletjs/varlet/commit/af0bfbe8557182fa23083b8a4060625b18132c92))
* **site:** support bg-color for dark mode of nav button ([b8417fe](https://github.com/varletjs/varlet/commit/b8417fe0873b8ecea4bcef21068aa0328ec32f88))
* **slider:** modify error color of track ([64f8cf3](https://github.com/varletjs/varlet/commit/64f8cf33b32aeeeceab54f9610067f0794b0b066))
* **types:** fix eslint error ([91e181d](https://github.com/varletjs/varlet/commit/91e181da75538c78640abf7a60a31bdbc9fc8156))
* **types:** fix eslint error ([fa1d696](https://github.com/varletjs/varlet/commit/fa1d6961b20f2a3a3083b530f6629715a5099ae5))
* **ui,cli:** move dark theme import to example ([579e461](https://github.com/varletjs/varlet/commit/579e461a620c2a7e416193b43368b885ec02b862))
* **ui/icon:** transition property all to transform ([860d8ce](https://github.com/varletjs/varlet/commit/860d8cebdf4a09992080b7fa8ef599a0d47be3f8))
* **ui/select, darkmode:** fix select disabled color lose, fix darkmode color ([8cfc654](https://github.com/varletjs/varlet/commit/8cfc654df9f14724f0fd5261b0e90a2faed59b78))
* **ui/space:** add common css ([5b439a8](https://github.com/varletjs/varlet/commit/5b439a8afe0267ba9f118d205fa56e23d434d504))
* **ui/tab-item:** tab-item example style ([c4f2ba4](https://github.com/varletjs/varlet/commit/c4f2ba48f73d87012cb769bbccc93accca296985))
* **ui/tab,tab-item,tabs,tabs-items:** suppotr darkmode & remove nerver used vaiable `tab-color` ([681619d](https://github.com/varletjs/varlet/commit/681619d25d2a971ed73f6a7d16b892d6d3d751b0))


### Features

* **checkbox:** add dark mode ([cee8c2c](https://github.com/varletjs/varlet/commit/cee8c2c098c9f7cb26b232397f14d62a4bd5d311))
* **cli/generators:** support dark mode ([4795af8](https://github.com/varletjs/varlet/commit/4795af8c25cc155eb1fe7cd8d8a6b23b45379989))
* **collapse:** add dark mode ([9c9f505](https://github.com/varletjs/varlet/commit/9c9f505ed4fd909c0a7c4ab19eae27cabb9b25e3))
* darkmode for time-picker&date-picker&card ([6878326](https://github.com/varletjs/varlet/commit/6878326b4f0915eec6a1eeee1e6b93f9ad1c85af))
* darkmode for time-picker&date-picker&card ([beaefdb](https://github.com/varletjs/varlet/commit/beaefdbf6f5131e7fce8f51d5605d1309f2fa0c2))
* darkmode for time-picker&date-picker&card ([df633e9](https://github.com/varletjs/varlet/commit/df633e97c2529ddd9789c1e61a06e9b28c4cf19c))
* darkmode for time-picker&date-picker&card ([f372a92](https://github.com/varletjs/varlet/commit/f372a9235a468a1e662dfd3002d72e7e008481ac))
* **divider:** support dark mode ([fa7e5ab](https://github.com/varletjs/varlet/commit/fa7e5ab58803285bc5cd13f7bc41477c5ba2ef4f))
* **form&rate&counter:** add watchthemes ([3a2cd90](https://github.com/varletjs/varlet/commit/3a2cd9037b72d745f0616f84ae2f976817d8b8cb))
* **icons:** add new icons ([ffd80da](https://github.com/varletjs/varlet/commit/ffd80da571adcb37474f32ef4d3220307598e69c))
* **index-bar:** add dark mode ([32f30af](https://github.com/varletjs/varlet/commit/32f30af7581227a3bb622f389e965d9054bab64c))
* **input:** add dark mode ([befd63c](https://github.com/varletjs/varlet/commit/befd63cb3a8d05bfd753e32e70601ded6b47f6df))
* **locale:** add types and add optional chaining for date-picker ([654d60f](https://github.com/varletjs/varlet/commit/654d60f4bb8c70204db05e6352ec1d42619dbe90))
* **locale:** add types and add optional chaining for date-picker ([140e2ba](https://github.com/varletjs/varlet/commit/140e2bafe01bd48e07620c07264e72cef60d45f7))
* **menu:** add dark-mode ([e2807f6](https://github.com/varletjs/varlet/commit/e2807f6f45ee3331acdd3b9ba4180b16096f0114))
* merge remote ([523b9f8](https://github.com/varletjs/varlet/commit/523b9f8ec63928088a8f635c07c1014cfc148251))
* merge remote ([4abf933](https://github.com/varletjs/varlet/commit/4abf9332110db8081a21b6888fb1a7552922eb22))
* merge remote ([f50006c](https://github.com/varletjs/varlet/commit/f50006c905d9f20bd1e33301205c45a3fa027329))
* **picker:** picker support dark mode ([2d404d7](https://github.com/varletjs/varlet/commit/2d404d7c779d2df292bc6e6fe5521249740b1526))
* **pull-refresh&switch:** add dark mode ([5936817](https://github.com/varletjs/varlet/commit/5936817b80c526c724a8b0f732196f436e5d1f17))
* **radio:** add dark mode ([1a1fc57](https://github.com/varletjs/varlet/commit/1a1fc5705e7481e7c3568267b9b01ee4f83902c1))
* **select:** add dark mode ([151bfc0](https://github.com/varletjs/varlet/commit/151bfc0eb3c417794f6c8caef1954c021bf10bb1))
* **steps/pagination/table:** support dark mode ([ad04ea7](https://github.com/varletjs/varlet/commit/ad04ea7ce3ec4ebf96605ac6db297daa8b7099fd))
* **ui/skeleton:** adaptatiton darkmode for skeleton ([3ee30f6](https://github.com/varletjs/varlet/commit/3ee30f6712e881d0751cc7a0ea09f4f6e638cd61))
* **ui/space:** add new component name is space ([6f6e5e5](https://github.com/varletjs/varlet/commit/6f6e5e524cb2c13ff4ff24a5d2afa4ffe5ab759f))
* **ui/space:** var-space complete ([1d13b68](https://github.com/varletjs/varlet/commit/1d13b688aab5a6b6d9ee1339e566d5fab68adca6))
* **ui/space:** var-space complete ([9af956c](https://github.com/varletjs/varlet/commit/9af956c190733302474586d5e7f0710bd88b2a15))
* **uploader:** 添加onRemove条件删除 ([ad44d1e](https://github.com/varletjs/varlet/commit/ad44d1e2b8d6514178970e15a47e656394316756))
* **uploader:** 添加onRemove条件删除 ([e3c5fb6](https://github.com/varletjs/varlet/commit/e3c5fb62b8ece141fbf78c97519ff70b4f7c02ad))


### Performance Improvements

* **shared:** throttle节流修改 ([981183c](https://github.com/varletjs/varlet/commit/981183cba00a0d45d546e3ab3684b9c2bb137b4d))
* **shared:** throttle节流修改 ([340b2e7](https://github.com/varletjs/varlet/commit/340b2e768c5fe544597f9319747c456029418939))


### Refactoring

* **cli/site:** adjust the color of dark mode ([5c05b8d](https://github.com/varletjs/varlet/commit/5c05b8d4efb0968ed62a67b1bd8cfc5bd784216e))
* **cli/site:** darkmode prototype design ([a479375](https://github.com/varletjs/varlet/commit/a479375d49e1109cb0c0f126847259e2ad75df47))
* **cli/site:** optimize dark mode styles ([76b9d46](https://github.com/varletjs/varlet/commit/76b9d4676e467c9133f7023706dd39033bcdc7a7))
* **cli/site:** optimize mobile css style ([3f63bbb](https://github.com/varletjs/varlet/commit/3f63bbb854561d0b11eafa005f51eaecc5f3c15f))
* **cli/site:** optimize site ([e62376f](https://github.com/varletjs/varlet/commit/e62376f3252e2d3830fd95093c359a83efdf0375))
* **cli/site:** optimize site layout ([85e3f62](https://github.com/varletjs/varlet/commit/85e3f6205b345e11a41fa601ef490ae1565eea39))
* **cli/site:** optimize site styles ([f7744b3](https://github.com/varletjs/varlet/commit/f7744b3a7e873da0bcf63d793273f82990e84271))
* handle margin/2 problem ([84ff5e4](https://github.com/varletjs/varlet/commit/84ff5e48a7c62438eb46261f25eaf178009bd6fd))
* **icons:** sync feat/dark-mode branch icon ([7c2e396](https://github.com/varletjs/varlet/commit/7c2e396dcdfdf59e952bf052de1cb95517a54768))
* **icons:** sync feat/dark-mode branch icon ([8073523](https://github.com/varletjs/varlet/commit/8073523d17e59dd6424e4e24302b336ea979ce33))
* optimize date-picker ([a7eb207](https://github.com/varletjs/varlet/commit/a7eb2075aac71703e1444540c9483d43353af2c6))
* **pagination:** modify menu list item bg-color ([058b4d1](https://github.com/varletjs/varlet/commit/058b4d1a2df43a0f29f65019b07e721af42d0977))
* **refactor:adjustment unit test:** refactor:adjustment unit test ([36659a4](https://github.com/varletjs/varlet/commit/36659a48313778a2db3c28cc4342ebc43e7b18f7))
* **refactor(ui/space):add example case&&supplementary documents&&adjustment unit test:** refact ([b5d765d](https://github.com/varletjs/varlet/commit/b5d765dd3ce0805e0de191cb75bdb8bdf0eff9eb))
* **refactor(ui/space):adjustment unit test:** refactor(ui/space):adjustment unit test ([fa9706c](https://github.com/varletjs/varlet/commit/fa9706cf19c192993b2a7eaf0a624fc4a100443e))
* **refactor(ui/space):handle margin problem:** refactor(ui/space):handle margin problem ([2be789e](https://github.com/varletjs/varlet/commit/2be789e9a00efff74e25370aef3db5bcd5e92413))
* **refactor(ui/space):handle margin problem:** refactor(ui/space):handle margin problem ([cb4eaf7](https://github.com/varletjs/varlet/commit/cb4eaf7ec41ff8974a861a364eec8a7fca31c26a))
* **refactor(ui/space):handle margin/2 problem:** refactor(ui/space):handle margin/2 problem ([c8a3d45](https://github.com/varletjs/varlet/commit/c8a3d45404d2ff1a7c4ccd5eb1aec7909e8d2f12))
* **refactor(ui/space):handle margin/2 problem:** refactor(ui/space):handle margin/2 problem ([530da90](https://github.com/varletjs/varlet/commit/530da90a1c34bbc0782aedad8550b7c00d48a5db))
* **refactor(ui/space):optimize the code and add unit tests:** refactor(ui/space):optimize the c ([37fe7ce](https://github.com/varletjs/varlet/commit/37fe7cea691c80f470687263e3c8a26f829daf1c))
* **refactor(ui/space):optimize the code and add unit tests:** refactor(ui/space):optimize the c ([41d0615](https://github.com/varletjs/varlet/commit/41d061589b9a766d1bf4f3afc60f744b69c780b7))
* **site:** modify nav-item padding and elevation name ([5fee882](https://github.com/varletjs/varlet/commit/5fee882b4a99b46b900b2fd34450d4e4e041b3bd))
* **ui, cli:** move watchDarkMode function to cli ([eb929c3](https://github.com/varletjs/varlet/commit/eb929c3b3b6f4546dd7c9f770f6bf19a68554738))
* **ui/badge,chip:** support dark mode ([722fa32](https://github.com/varletjs/varlet/commit/722fa329d07926a4e30b025b6f7775608f9497a9))
* **ui/button, cell, style-provider:** support dark mode ([f580f43](https://github.com/varletjs/varlet/commit/f580f43863d1ee4e9946b27ba56381f68020a47a))
* **ui/card,list,skeleton,table,tabs,styles:** support dark mode ([0fc7991](https://github.com/varletjs/varlet/commit/0fc799171013a971e6ee7053c7d2b12275a89375))
* **ui/layout,sticky,uploader:** support dark mode ([8f9aa8e](https://github.com/varletjs/varlet/commit/8f9aa8e26bec6a84226f2ac2be1b22e20972a990))
* **ui/picker, button:** optimize for dark mode ([471d169](https://github.com/varletjs/varlet/commit/471d169605c4e48f1e62db6c7946724bff4e96c4))
* **ui/space:** enhance code readability, Use style instead of class to implement layout-related ([35c63d7](https://github.com/varletjs/varlet/commit/35c63d7fbcd21f91a86416bf307c7a74077306f4))
* **ui/tabs,tab,tab-item:** support dark mode ([82d550e](https://github.com/varletjs/varlet/commit/82d550e8b75d28281a6d993b6755683e9ae85d03))
* **ui/tabs:** fix css var for dark mode ([78099eb](https://github.com/varletjs/varlet/commit/78099eb445951898baddb4eb3eca2746f36fed57))
* **ui/types:** add space to global types ([ae0b4f6](https://github.com/varletjs/varlet/commit/ae0b4f615e4adf7930f33757dbd47bf2ffa2bb4c))
* **ui/uploader:** fix example ([af49dae](https://github.com/varletjs/varlet/commit/af49dae97f08dc4de7cb909090b64dcd31bce798))
* **ui/uploader:** fix example ([5d7bbfb](https://github.com/varletjs/varlet/commit/5d7bbfb89359d2f053e681e4d8455648c868dd22))
* **ui/uploader:** refactor before-remove ([a85020d](https://github.com/varletjs/varlet/commit/a85020d5f7faaf1c9d442ec21861ba59a1df3706))
* **ui/uploader:** refactor before-remove ([f538d3b](https://github.com/varletjs/varlet/commit/f538d3b26b9c404a9dd8aa7665bed9ee66b859b9))
* **ui/utils, uploader:** remove unuseful code ([029aba4](https://github.com/varletjs/varlet/commit/029aba4c8458cff9388c1b13939a31b01156c388))
* **ui/utils, uploader:** remove unuseful code ([69822ce](https://github.com/varletjs/varlet/commit/69822ce21b1a1f4c984c597e8f9296c415208ebe))
* **ui:** check transition property of all components ([e9ec891](https://github.com/varletjs/varlet/commit/e9ec891719a6a694c579ebe649c788299e1569a8))
* **ui:** support dark mode ([8c98941](https://github.com/varletjs/varlet/commit/8c98941873788efc01b51263de9e46cec401556d))
* **ui:** support dark mode ([d659753](https://github.com/varletjs/varlet/commit/d6597539e2987c3eb7d87875428c86ae080d304d))

## [1.22.10](https://github.com/varletjs/varlet/compare/v1.22.9...v1.22.10) (2021-11-03)


### Bug Fixes

* **cli/site:** change code block font color to white ([f38aa0e](https://github.com/varletjs/varlet/commit/f38aa0ea1a21be630e8dd0dec9e219a28a4f4567))
* **cli/site:** modify site theme update logic ([d12195a](https://github.com/varletjs/varlet/commit/d12195ae7d98f8d1e9b4cc44d71c564b2f7b2974))
* **ui/style-provider:** simplify the use of style-provider ([cbf66ce](https://github.com/varletjs/varlet/commit/cbf66ce9b2295df7be5c0de32d0969354462cff7))

## [1.22.9](https://github.com/varletjs/varlet/compare/v1.22.8...v1.22.9) (2021-10-31)


### Bug Fixes

* **cli/types:** add global.d.ts for volar ([c99e0c1](https://github.com/varletjs/varlet/commit/c99e0c16176f81dc3aa58b5512f9ec66d85156e2))

## [1.22.8](https://github.com/varletjs/varlet/compare/v1.22.7...v1.22.8) (2021-10-31)


### Bug Fixes

* **cli/highlight:** fix web-types version ([636b408](https://github.com/varletjs/varlet/commit/636b4088270857e3ada7341d707ecc63ee5c58f4))
* **cli/site:** optimize site scroll on mobile trigger route change ([536d7b1](https://github.com/varletjs/varlet/commit/536d7b1daa30b6b9a8093173f64e394d3a3e69eb))
* **ui/divider:** fix vertical divider ([edf9720](https://github.com/varletjs/varlet/commit/edf9720330adb2cadb4570847bfd1326ab3a0a2d))
* **ui/input:** fix behaviour of the input type ([5643f3c](https://github.com/varletjs/varlet/commit/5643f3c29f86396badd7da2f7a6c19fe58d75a22))


### Refactoring

* **date-picker:** modify the key of component i18n ([47c4075](https://github.com/varletjs/varlet/commit/47c40755e49c108a6d57ddc318c3ef05fe1f7fe7))

## [1.22.7](https://github.com/varletjs/varlet/compare/v1.22.6...v1.22.7) (2021-10-22)


### Bug Fixes

* **cli/dev:** add varlet config file watcher ([28b4ea9](https://github.com/varletjs/varlet/commit/28b4ea9a6b28a83dd57e12914f256634c8822297))
* **cli/dev:** fixed bug of repeat restart server ([e14f090](https://github.com/varletjs/varlet/commit/e14f090cd8a3b932680acb8871ffd8cdd562f2a0))
* **cli/site:** optimize github link style ([47db851](https://github.com/varletjs/varlet/commit/47db8511df8234a6a713d6bdbbf6f9c6f5bfd7e8))
* **cli/site:** optimize site ([40161bf](https://github.com/varletjs/varlet/commit/40161bff3776760933c3f99e6b13ab656fa456e8))
* **ui/site:** modify highlight.css color ([203432e](https://github.com/varletjs/varlet/commit/203432e12f8c9e22b92d1e00b790db708f0ac663))
* **ui/tab-item:** add var-tab-item-cover attr ([934a833](https://github.com/varletjs/varlet/commit/934a833bfa9118c0c8c25e2796a1d0e7100ce84f))

## [1.22.6](https://github.com/varletjs/varlet/compare/v1.22.4...v1.22.6) (2021-10-18)


### Bug Fixes

* **cli/jest:** add root config check ([052a338](https://github.com/varletjs/varlet/commit/052a338c9860b6d7d92e652dea0efdd8fbe41217))
* **cli/site:** optimize site style ([aaec99e](https://github.com/varletjs/varlet/commit/aaec99ee9abcf6807e5629e5f07a7475452b6b5a))
* fix types ([f9a372f](https://github.com/varletjs/varlet/commit/f9a372fb86268fa59903ef4b0c3c519cdefcf722))
* **slider/types:** fix template types ([31da191](https://github.com/varletjs/varlet/commit/31da19127549971732fb5f28289ee52060232a7c))
* **snackbar/types:** fix types of related loading props ([0e8d4f4](https://github.com/varletjs/varlet/commit/0e8d4f4230e40e5e5f431a7246cac38984b2c381))
* **ui/checkbox, radio:** fix prop types ([219cab8](https://github.com/varletjs/varlet/commit/219cab8f17d2fbedc7c186a2e61191a8676f779d))
* **ui/pagination, cli/site:** fix size and total cannot be centered vertically in the pagination, ad ([ad3eb81](https://github.com/varletjs/varlet/commit/ad3eb81269cdb005bb41a8c8127bb07bdc62ff91))
* **ui/types:** fix types ([c87784d](https://github.com/varletjs/varlet/commit/c87784d4c8e32584a7a245854365259f95849fbe))
* **ui:** fix types ([ead022f](https://github.com/varletjs/varlet/commit/ead022f620f05993229682f304060530ce856f7e))


### Refactoring

* **ui/picker,lazy:** fix lazy tests, fix picker ts types ([cdd8bc2](https://github.com/varletjs/varlet/commit/cdd8bc27487c8d1e3d119d28bce0d479e6f57dd6))


### Reverts

* revert slider types change ([b897c3c](https://github.com/varletjs/varlet/commit/b897c3c2b58b4213f1b8dd1d2f84a1a2bdd4e67a))

## [1.22.4](https://github.com/varletjs/varlet/compare/v1.22.3...v1.22.4) (2021-10-14)


### Bug Fixes

* **ui/app-bar:** fix app-bar style ([9da67b6](https://github.com/varletjs/varlet/commit/9da67b6fa0e07a644cba6118f4a90cb8293df8be))


### Refactoring

* **extension:** add table and pagination component into siteMap, can link english documentation ([951f42c](https://github.com/varletjs/varlet/commit/951f42c631060e6a6cc95954ec80684081954f82))
* **ui/app-bar:** optimize app-bar ui experience ([8beefad](https://github.com/varletjs/varlet/commit/8beefad1028ec2e0f645c2de836a22133905a828))
* **ui/types:** fix pickProps types ([e948271](https://github.com/varletjs/varlet/commit/e948271b8a684d15959ca6a1f80a32a6a4e8045d))

## [1.22.3](https://github.com/varletjs/varlet/compare/v1.22.2...v1.22.3) (2021-10-10)


### Bug Fixes

* **cli:** use vite internal printUrls instead of logger ([1b164d7](https://github.com/varletjs/varlet/commit/1b164d7f464d7c48b78cc17271a41170f61f53c6))
* **ui/pagination:** fix icon size style is not effective ([520b93d](https://github.com/varletjs/varlet/commit/520b93d806e9282d2d60605ef8b7b332a86ddebd))

## [1.22.2](https://github.com/varletjs/varlet/compare/v1.22.1...v1.22.2) (2021-10-08)


### Bug Fixes

* **cli:** fix mobile cell hover color ([ea999ed](https://github.com/varletjs/varlet/commit/ea999edcab71acca6894e1e7f2017fe8d96d787c))

## [1.22.1](https://github.com/varletjs/varlet/compare/v1.22.0...v1.22.1) (2021-10-08)


### Bug Fixes

* **cli/jest:** replace testMatch to testRegex ([5ed0a5c](https://github.com/varletjs/varlet/commit/5ed0a5c59cdfd296d3732a10387a454464c17c05))
* **pagination:** fix hover style ([1762dd8](https://github.com/varletjs/varlet/commit/1762dd8224806975c916485e40f4dc15b0fbb87a))
* **site:** remove hover style ([5ae0179](https://github.com/varletjs/varlet/commit/5ae0179f6344a822ecb69d6665b7d7512ee865d7))
* **ui/action-sheet:** fix disabled color ([ec70187](https://github.com/varletjs/varlet/commit/ec7018723815ead6f5deae85c79a5b0533a4927d))
* **ui/styles:** fix disabled color vars ([f529c30](https://github.com/varletjs/varlet/commit/f529c309d41f4ca28ff8d3c0d00e48889837222d))

# [1.22.0](https://github.com/varletjs/varlet/compare/v1.21.0...v1.22.0) (2021-10-08)


### Bug Fixes

* **back-top:** cover the style of button ([b5046ae](https://github.com/varletjs/varlet/commit/b5046ae8e2b1c90e1583718d989e9c62528eadbb))
* **cli/gen:** add default themes ([2d68e91](https://github.com/varletjs/varlet/commit/2d68e91c2fc83d1db4063ae576144815e24f17e5))
* **cli/site:** increase app-bar vars weight ([b3e8d15](https://github.com/varletjs/varlet/commit/b3e8d150b843c603b090d8e2da3ec05e02f2a32e))
* **cli:** fix dev server logger ([4e9f81d](https://github.com/varletjs/varlet/commit/4e9f81dabf854961e3bd99c445a0a8566b26db66))
* **cli:** fix dev server port log error ([2e82806](https://github.com/varletjs/varlet/commit/2e82806817f23e4da2f4d80e4200c3da5a4dc439))
* **cli:** remove unuseful code and opt dev logger ([18da4b5](https://github.com/varletjs/varlet/commit/18da4b590bf4194581d10edff8f4b1a052ff2b69))
* fix component path name ([bbd8b1f](https://github.com/varletjs/varlet/commit/bbd8b1fbd62bdc4a084eb53f63f3d896f7ca4c1a))
* **input:** text-color of disabled in safari ([dd33256](https://github.com/varletjs/varlet/commit/dd33256c87f3d708583694e12f17ea19961812a3))
* **pagination:** add keydown event to switch page ([414decb](https://github.com/varletjs/varlet/commit/414decb43bd8009776111a0bf84ad8b967ccb38e))
* **pagination:** fix current and size not update ([463d891](https://github.com/varletjs/varlet/commit/463d8916960c8c9d1a32555f0a405c4b073d0502))
* **pagination:** remove padding ([83d214a](https://github.com/varletjs/varlet/commit/83d214ad80423b67829b9cedf2f338f5ffe4ab25))
* remove console ([3ee3548](https://github.com/varletjs/varlet/commit/3ee35486f9ad760e7463a7fe981edcf29eb336be))
* **ui/button:** remove line-height ([c0d2422](https://github.com/varletjs/varlet/commit/c0d2422e1a8735f7acf0459c2c4a2d8ba20bd4e2))
* **ui/ripple, ui/menu:** opt ripple animation, fix menu left error on transition animation running ([0f714de](https://github.com/varletjs/varlet/commit/0f714de1c40af46116fd07d7717525c2c63d0470))
* **ui/ripple:** add style variables ([551a666](https://github.com/varletjs/varlet/commit/551a66696c2e87fdbc2fe9b04f89350affc64d8a))
* **ui/skeleton:** add avatar-border-radius css vars ([ddf259f](https://github.com/varletjs/varlet/commit/ddf259fab66bb0630e78c48fccd63429b87d2f0f))
* **ui/table:** add table-tbody-td-font-size variable ([861217e](https://github.com/varletjs/varlet/commit/861217e49fc1594d66182a076c648bef4d462942))


### Features

* **cli:** add preview command that can preview document site for production ([3fea1f1](https://github.com/varletjs/varlet/commit/3fea1f1fed8a2f0fdb0d2fd5e7880531335a6711))
* **cli:** migrate the build tool to vite ([c0eb94c](https://github.com/varletjs/varlet/commit/c0eb94c3c82683abb49b8561e181e75aa843aac4))
* pagination ([62b27a8](https://github.com/varletjs/varlet/commit/62b27a8fde6c647cd072093ca0398348498a56e2))
* **pagination:** add declaration file ([30fd32b](https://github.com/varletjs/varlet/commit/30fd32b9f5af842c7fd187e5aed9535d0eb5d195))
* **table:** add declaration file ([30072d3](https://github.com/varletjs/varlet/commit/30072d3ccd2f6cddcf7ddbc734d85266489d9d32))
* **ui/pagination:** ui/pagination ([3f8e24c](https://github.com/varletjs/varlet/commit/3f8e24c075c31853b2a6de94bcd02b4bb4195d2c))
* **ui/table:** ui/table ([abd3f7d](https://github.com/varletjs/varlet/commit/abd3f7da5001902870ad7a322cfa5122c41ed395))


### Refactoring

* change position of nav ([4b49c77](https://github.com/varletjs/varlet/commit/4b49c77a17ca53e527e7b518716f2d2a99cc87ff))
* **cli/gen:** upgrade vue version ([37af843](https://github.com/varletjs/varlet/commit/37af843a93daa8e66cf8a90cc7494f6f40287575))
* **cli/site:** refactor site ([824f355](https://github.com/varletjs/varlet/commit/824f355f664be17e00006982bb9918bc50e78b23))
* **cli/site:** use lodash-es replace to lodash for site ([92fc6bb](https://github.com/varletjs/varlet/commit/92fc6bb770a969a984707921b66f616d606f1d58))
* **cli:** add @varlet/markdown-vite-plugin into package.json ([019ba0c](https://github.com/varletjs/varlet/commit/019ba0c08fc8b6a7636d27b8539ac8d02affd994))
* **cli:** build mode use relative base ([2b3624b](https://github.com/varletjs/varlet/commit/2b3624bcdc918de882f930c3d084a9ef5a5b918f))
* **cli:** fix vue version ([fe44099](https://github.com/varletjs/varlet/commit/fe440994fcb56a69971897e3d8330f28b3c9784d))
* **cli:** resolve rollup build exception ([97121f3](https://github.com/varletjs/varlet/commit/97121f377fea975b88d2affc156f01d3c7dc43c1))
* **pagination:** optimize code ([1925bd0](https://github.com/varletjs/varlet/commit/1925bd0954dfaf9cb945f25c46b42192a820d10b))
* **pagination:** rename max-show-btn-count to max-pager-count ([8bc6aa7](https://github.com/varletjs/varlet/commit/8bc6aa70f5d4fe69e19c80fa63c9da413438e2ea))
* **ui,cli:** fix dayjs module to esm, cli add clear plugin ([442b86e](https://github.com/varletjs/varlet/commit/442b86ed2bb97f69d843de2246aeae2e6f00dfce))
* **ui/pagination:** fix css ([b1e4046](https://github.com/varletjs/varlet/commit/b1e40465473b38432bf570ef2087a67153821ec8))
* **ui/pagination:** optimize code ([f41ca24](https://github.com/varletjs/varlet/commit/f41ca240a6b3b7df53400003478e2dd45531123a))
* **ui/pagination:** refactor css style ([56a886a](https://github.com/varletjs/varlet/commit/56a886a3eaf389faebe9697186ab96b4ae829519))
* **ui:** remove useless code ([7fc83c1](https://github.com/varletjs/varlet/commit/7fc83c1cc97dd287510dca7d5c2390142a999034))

# [1.21.0](https://github.com/varletjs/varlet/compare/v1.20.0...v1.21.0) (2021-09-22)


### Bug Fixes

* **index-bar:** fix the bug of overlap ([52c1d9b](https://github.com/varletjs/varlet/commit/52c1d9be10f9ece2f70fd613a24fac6457d016a6))
* **index-bar:** fix the scrolling bug when index-bar is not 0 away from the top ([2f28954](https://github.com/varletjs/varlet/commit/2f28954d1ac4d14ffaa6d439675318dab273e0f9))
* **types:** add props type declaration ([a547cc9](https://github.com/varletjs/varlet/commit/a547cc9fa99436d82d0ae2ac2804b0b94d0d3da0))
* **ui/sticky:** remove auto check sticky support statement ([8a35d98](https://github.com/varletjs/varlet/commit/8a35d98487cc3c547d42a5c22ad32d8e2c96d19a))
* **ui/sticky:** use scroll mode as sticky default mode ([3769f8b](https://github.com/varletjs/varlet/commit/3769f8b0837bc16f9bc4d7ce3405cac61c1f79e1))


### Features

* **ui/sticky:** add disabled,css-mode props ([5dbfbca](https://github.com/varletjs/varlet/commit/5dbfbca81a04d41583827d40f2cb9b8ffe391ad3))


### Refactoring

* **step:** optimize code ([ae28ce2](https://github.com/varletjs/varlet/commit/ae28ce25d840e0be0faf3ab834e8d2a643eb80e9))

# [1.20.0](https://github.com/varletjs/varlet/compare/v1.19.0...v1.20.0) (2021-09-15)


### Features

* **cli:** support pc component preview ([be463ad](https://github.com/varletjs/varlet/commit/be463adf62cb7cb196e555a42c37a7d2b10cac77))


### Refactoring

* **cli:** add pc component preview to generators ([03618fd](https://github.com/varletjs/varlet/commit/03618fdf7540d02550317aee28506f5632a9d75e))

# [1.19.0](https://github.com/varletjs/varlet/compare/v1.18.1...v1.19.0) (2021-09-13)


### Bug Fixes

* **cli/gen:** localize static resources ([80f9097](https://github.com/varletjs/varlet/commit/80f9097fde3c5e18f3ac162979b45bdb0147ffe4))
* **cli:** add public folder to linter ignore ([d10a799](https://github.com/varletjs/varlet/commit/d10a7996efe9963a4f3c7247b1c5d2f2baac2502))
* **cli:** fix prepare scripts to husky ([d0ff087](https://github.com/varletjs/varlet/commit/d0ff087834a5b2c4e1cacd6cb6e7e7ad0412aeda))
* **cli:** fix the parameter passing method of webpack-dev-server ([0d88843](https://github.com/varletjs/varlet/commit/0d88843af5b15b59b27321f61f2701e562d4f8af))
* **cli:** optimize site style ([f789d77](https://github.com/varletjs/varlet/commit/f789d7795a86736ad4f67f758759a17283e7dcdb))
* **cli:** optimize site style ([9287d7b](https://github.com/varletjs/varlet/commit/9287d7b004f9b6508d065f62bb3d2e7b370499f5))
* **doc:** fix typo ([6371e4e](https://github.com/varletjs/varlet/commit/6371e4e7e53fa03589ac99247ab2abec8330e5c5))


### Features

* **cli:** add release for template ([5078838](https://github.com/varletjs/varlet/commit/5078838cfee1cd8232aaef7fafd5eec0a03f1569))
* **cli:** webpack-dev-server upgrade to 4.x version ([4d1fe95](https://github.com/varletjs/varlet/commit/4d1fe9570198b73910c0926c6f1e030753b52cda))


### Refactoring

* **site:** modify the code theme of doc ([b49f6e2](https://github.com/varletjs/varlet/commit/b49f6e2a4bc226f4e5d583ba4f3900858fa217dc))

## [1.18.1](https://github.com/varletjs/varlet/compare/v1.18.0...v1.18.1) (2021-09-10)


### Bug Fixes

* **cli:** optimize site style and compile style reg ([df5e173](https://github.com/varletjs/varlet/commit/df5e173d524879ecf542281b42c93cdc061eda91))

# [1.18.0](https://github.com/varletjs/varlet/compare/v1.17.4...v1.18.0) (2021-09-10)


### Bug Fixes

* **cli/gen:** remove unuseful config ([2085b39](https://github.com/varletjs/varlet/commit/2085b39e384b9d9a66d50591dc1ca3d784292bd8))
* **cli:** babel configuration-related path optimization ([b79db48](https://github.com/varletjs/varlet/commit/b79db48df980fb192e184239d8cf7b4fde252733))


### Features

* **cli:** add version command ([c5860c8](https://github.com/varletjs/varlet/commit/c5860c8cc8076b8a9f864a692d9a827beae16ed8))

## [1.17.4](https://github.com/varletjs/varlet/compare/v1.17.3...v1.17.4) (2021-09-09)


### Bug Fixes

* **cli:** add conventional-changelog-cli ([7708781](https://github.com/varletjs/varlet/commit/7708781331d0d788fdadce53d8655d5ac93d849c))

## [1.17.3](https://github.com/varletjs/varlet/compare/v1.17.2...v1.17.3) (2021-09-09)


### Bug Fixes

* **cli:** fix commitlint config, add changelog command ([5688425](https://github.com/varletjs/varlet/commit/5688425757e2d6d60fcaa25e9eef254f417d3180))

## [1.17.2](https://github.com/varletjs/varlet/compare/v1.17.1...v1.17.2) (2021-09-09)


### Bug Fixes

* **cli:** add eslint,stylelint ([e393ea8](https://github.com/varletjs/varlet/commit/e393ea8dab9a0e8ea0248b2ee01a232cf55bc315))

## [1.17.1](https://github.com/varletjs/varlet/compare/v1.17.0...v1.17.1) (2021-09-09)


### Bug Fixes

* **cli:** fix generators files publish error ([29c014d](https://github.com/varletjs/varlet/commit/29c014dab61cf7242dc005a3878e172a03def602))

# [1.17.0](https://github.com/varletjs/varlet/compare/v1.16.3...v1.17.0) (2021-09-09)


### Bug Fixes

* **cli:** generators add commitlint ([32dbf2a](https://github.com/varletjs/varlet/commit/32dbf2abdb2bc9f75f7447483d4ce6eaa87e5897))


### Features

* **cli:** add gen command ([abdec46](https://github.com/varletjs/varlet/commit/abdec46ac7ef39962bb3025b37b12749f767a777))

## [1.16.3](https://github.com/varletjs/varlet/compare/v1.16.2...v1.16.3) (2021-09-09)


### Bug Fixes

* **cli, markdown-loader:** optimize generators, markdown-loader lock highlight version ([9b3e3bb](https://github.com/varletjs/varlet/commit/9b3e3bba6e0c67fa53df23718fddfb8e9f09990f))
* **cli,markdown-loader:** markdown-loader add style option, linter ignore generators ([7ca8844](https://github.com/varletjs/varlet/commit/7ca884425eb94df89995ab502a491a26bbefc9d4))
* **cli/compile-types:** fix the component name of types ([4d999ee](https://github.com/varletjs/varlet/commit/4d999ee876e90b2c22dd93a0d17da8c181307378))
* **cli:** add site theme config property ([9bf4945](https://github.com/varletjs/varlet/commit/9bf49450a9b6082d5e384ae78d4f8bace568d209))
* **cli:** fix generators progress color ([7e62811](https://github.com/varletjs/varlet/commit/7e62811e5fa8fa4d87ac7d0bf98cd510f5900eb6))
* **cli:** handle sfc style block's lang non-existent ([96c8551](https://github.com/varletjs/varlet/commit/96c85513937e97eebd5c43575e96b689ae3cf3df))
* **cli:** optimized Baidu statistics, add varlet-cli-app generators template, fix cli depend version ([703517e](https://github.com/varletjs/varlet/commit/703517eddf8842093897800e4a940906bb632c5f))
* **cli:** themes add progress color config ([f804915](https://github.com/varletjs/varlet/commit/f80491508fb80bd7c15c9e014eac78f95430dc57))


### Performance Improvements

* **site:** remove useless mobile image ([c55d7cf](https://github.com/varletjs/varlet/commit/c55d7cff289ac442672cf77636f87465c763fb93))


### Refactoring

* **slider:** optimize code ([487be96](https://github.com/varletjs/varlet/commit/487be96b05d84ad1889f0c4eb6b38e97c3453668))

## [1.16.2](https://github.com/varletjs/varlet/compare/v1.16.1...v1.16.2) (2021-09-01)


### Bug Fixes

* **cli:** add depend ([74cc717](https://github.com/varletjs/varlet/commit/74cc7170064017264a32feb04b5f0868d3880ebe))
* **cli:** optimize reference ([eba1951](https://github.com/varletjs/varlet/commit/eba1951ae0b89090271126105bc44c0e91838465))

## [1.16.1](https://github.com/varletjs/varlet/compare/v1.16.0...v1.16.1) (2021-08-31)


### Bug Fixes

* **markdown-loader:** fix the bug of parse doc cause by template string ([6e35002](https://github.com/varletjs/varlet/commit/6e35002003e3197e0af74c87a4cf778e862405df))

# [1.16.0](https://github.com/varletjs/varlet/compare/v1.15.0...v1.16.0) (2021-08-30)


### Bug Fixes

* **cli/eslint:** add ext ([6fa3971](https://github.com/varletjs/varlet/commit/6fa39716015036c891aaff9cc3452b044baa0eda))
* **cli:** bump version ([3da0433](https://github.com/varletjs/varlet/commit/3da04335751955cc0596fddecdcd671add0177de))
* **compile:** remove unnecessary camelize method ([e9fd509](https://github.com/varletjs/varlet/commit/e9fd509fb07e29be47f11333e595a852bdc1971c))
* **site:** remove import ([2b6c499](https://github.com/varletjs/varlet/commit/2b6c4996275dba15ce7bc0a8a83cd7a5f1e7ba8c))


### Features

* **site:** add theme config ([1d2c04c](https://github.com/varletjs/varlet/commit/1d2c04c862e8403655ec8bf5a13b84ddf2c3a801))


### Refactoring

* **cli/compile-umd:** optimize the logic of log error ([2397b1e](https://github.com/varletjs/varlet/commit/2397b1e079ca675932020c2df6639ea536dc5d9d))
* **cli:** revert compileLibraryEntry ([faadba9](https://github.com/varletjs/varlet/commit/faadba9a6d349b335e16aed48e5799a063565aa9))
* **markdown-loader:** optimize code ([0dd413e](https://github.com/varletjs/varlet/commit/0dd413e0569613db9e263a9a3f2e6e2989e52794))
* **site:** add ts-ignore ([a3e7402](https://github.com/varletjs/varlet/commit/a3e7402178917186a0a85945c9bd0d9b45525e49))

# [1.15.0](https://github.com/varletjs/varlet/compare/v1.14.2...v1.15.0) (2021-08-13)


### Features

* **time-picker:** add allowedTime ([b86bd84](https://github.com/varletjs/varlet/commit/b86bd8420591a0bcffcae7442f5b9b7ab2546613))


### Refactoring

* **time-picker:** optimize the logic of disable ([83b08b7](https://github.com/varletjs/varlet/commit/83b08b76ad0587b82a0409cb29bf6082017bfc8d))

## [1.14.2](https://github.com/varletjs/varlet/compare/v1.14.1...v1.14.2) (2021-08-12)


### Bug Fixes

* **ui/input:** when the value is a number, the input type is not number ([34d750a](https://github.com/varletjs/varlet/commit/34d750ace1a2b338dde41680924534aed446d286))


### Refactoring

* **cli/create:** add locale template ([a0505b9](https://github.com/varletjs/varlet/commit/a0505b93401cd7b87ced8a3933a5224a076e0e35))
* remove useless code and change the way of import type ([867fdb8](https://github.com/varletjs/varlet/commit/867fdb89bbfb478a0df89f0ea7f1e1778eee0107))

## [1.14.1](https://github.com/varletjs/varlet/compare/v1.14.0...v1.14.1) (2021-08-04)


### Bug Fixes

* optimize style of slider example ([8940bb6](https://github.com/varletjs/varlet/commit/8940bb6a712c11efca2f3eb5fd5761923db62dd3))
* **ui/image-preview:** tap can't trigger close ([ecf7afe](https://github.com/varletjs/varlet/commit/ecf7afec2392678bcf65b306cdbccf23d85997c3))

# [1.14.0](https://github.com/varletjs/varlet/compare/v1.13.5...v1.14.0) (2021-08-04)


### Bug Fixes

* **ui/image-preview:** restore the default behavior of the browser picture and prohibit dragging ([4d5cbc6](https://github.com/varletjs/varlet/commit/4d5cbc68063b4aff18172ccb995ed74bf765bba5))


### Features

* **slider:** add button slot ([a912564](https://github.com/varletjs/varlet/commit/a912564752458cb8cd54f2330dba4223f5a619b1))

## [1.13.5](https://github.com/varletjs/varlet/compare/v1.13.4...v1.13.5) (2021-07-31)

## [1.13.4](https://github.com/varletjs/varlet/compare/v1.13.3...v1.13.4) (2021-07-31)


### Bug Fixes

* **cli:** fix loose error in windows ([2a3f968](https://github.com/varletjs/varlet/commit/2a3f9688fceba337bf8eef1d6977bacc75311dae))
* **ui:** fix babel config ([e5e4128](https://github.com/varletjs/varlet/commit/e5e41289791102ce5955abe19f903a6a58cc1cac))
* **ui:** fix browserlist ([3f4cfeb](https://github.com/varletjs/varlet/commit/3f4cfeb4177403ab8723b4841a3f193d3a8ffec6))


### Performance Improvements

* **cli:** perf build entry ([19f700a](https://github.com/varletjs/varlet/commit/19f700adb44532905861459d60e54f06824dd96b))


### Refactoring

* **cli:** remove babel-transform-runtime ([f21a082](https://github.com/varletjs/varlet/commit/f21a082aa0fdff6ace371d8b79c5fae8099b83a3))

## [1.13.3](https://github.com/varletjs/varlet/compare/v1.13.1...v1.13.3) (2021-07-31)


### Bug Fixes

* **cli:** jsx tsx is not processed as an index ([4079361](https://github.com/varletjs/varlet/commit/4079361bb4c4273199653a02b51be0df1d738274))

## [1.13.1](https://github.com/varletjs/varlet/compare/v1.13.0...v1.13.1) (2021-07-31)


### Bug Fixes

* **ui/swipe:** the screen size changes, the size of the carousel will not change ([#112](https://github.com/varletjs/varlet/issues/112)) ([7110457](https://github.com/varletjs/varlet/commit/71104570a6192af6293de894d42ca09d9b78f0c5))


### Refactoring

* **snackbar:** replace render to tsx ([c30a970](https://github.com/varletjs/varlet/commit/c30a970a48b1205063e13d6a8777fa147351721d))

# [1.13.0](https://github.com/varletjs/varlet/compare/v1.12.0...v1.13.0) (2021-07-30)


### Bug Fixes

* **cli:** add the dev command ipv4 prompt, Optimization tips ([e86313b](https://github.com/varletjs/varlet/commit/e86313b790afe7812d52dfcff11c74131bf55cdb))
* modify the style of indexbar ([ac268f1](https://github.com/varletjs/varlet/commit/ac268f10f4efd51b68d5a257822ad2c9b05a1d53))


### Features

* **cli:** support extraction of style dependencies in scripts, and optimize function definitions ([4d7d76f](https://github.com/varletjs/varlet/commit/4d7d76f3d61c351dd50a4d8b19081c7cc8b21b9f))


### Refactoring

* **cli/site:** the mobile homepage is included in the cli ([2c758d0](https://github.com/varletjs/varlet/commit/2c758d0d8a7b166622bbd199c59c86470beb9017))

## [1.11.1](https://github.com/varletjs/varlet/compare/v1.11.0...v1.11.1) (2021-07-29)


### Bug Fixes

* **ui/sticky:** fix sticky element size error in keep-alive ([3c269a9](https://github.com/varletjs/varlet/commit/3c269a9c6a379a02c448e7a911c63048ee079e33))

# [1.12.0](https://github.com/varletjs/varlet/compare/v1.11.1...v1.12.0) (2021-07-29)


### Bug Fixes

* **cli/lint:** fix the bug of cannot get warning message ([ba849b3](https://github.com/varletjs/varlet/commit/ba849b3152924716d2ea20c38c769607a28e48ee))
* **cli/site:** fix build site fail ([fffbb41](https://github.com/varletjs/varlet/commit/fffbb416a9bd5f3812e8529c07ae177e3d3b6e63))
* **ui/input:** fix the wrong style of input ([0cd5752](https://github.com/varletjs/varlet/commit/0cd5752f70f6d58627f9a5f7a3f5f0fa74f43619))
* **ui/sticky:** fix sticky element size error in keep-alive ([9f30544](https://github.com/varletjs/varlet/commit/9f30544764ab9f4161a20a1ee2032c10744e5a7a))


### Features

* **cli/site:** support hmr ([5ff00d6](https://github.com/varletjs/varlet/commit/5ff00d61ec0d1a332557c87142d5afb04f4a6fdb))
* **cli:** add babel-presets ([1c5825d](https://github.com/varletjs/varlet/commit/1c5825d907115b4c1b017c6fb1747cef7f72d29d))
* **cli:** support jsx tsx ([8d8c946](https://github.com/varletjs/varlet/commit/8d8c9466c80cac7820f9268ac7b257c9870e13be))
* **cli:** support jsx tsx ([132fade](https://github.com/varletjs/varlet/commit/132fade5a12de1b8c71263ee72aec364564f0f35))


### Refactoring

* **cli/site:** refactor relation of pc and mobile ([96ef860](https://github.com/varletjs/varlet/commit/96ef8600963bc14c17c290a474aa2c76f75d776f))
* **cli/site:** refactor site ([fb51037](https://github.com/varletjs/varlet/commit/fb510375da4632dfe7bce8275a4c6cb42c194b80))
* **cli/site:** refactor site ([c1696fe](https://github.com/varletjs/varlet/commit/c1696fe39895667707c901d93186556222503a42))

## [1.11.1](https://github.com/varletjs/varlet/compare/v1.11.0...v1.11.1) (2021-07-29)


### Bug Fixes

* **ui/sticky:** fix sticky element size error in keep-alive ([3c269a9](https://github.com/varletjs/varlet/commit/3c269a9c6a379a02c448e7a911c63048ee079e33))

# [1.11.0](https://github.com/varletjs/varlet/compare/v1.10.0...v1.11.0) (2021-07-28)


### Bug Fixes

* **index-bar:** fix the bug of trigger two times change event after click anchor ([4282788](https://github.com/varletjs/varlet/commit/4282788e4d5b0ee576144da951dc10c86fb235fc))


### Features

* **index-bar:** add duration prop ([d115f84](https://github.com/varletjs/varlet/commit/d115f84998ae1422d560b27003a869d8a31aa533))
* **index-bar:** add hide-list prop ([a433b08](https://github.com/varletjs/varlet/commit/a433b08ea13a2504e1f9d75552fd95243fed8d2f))


### Refactoring

* **cli/site:** refactor site ([c3cb4e5](https://github.com/varletjs/varlet/commit/c3cb4e5b5565de9206c9d6bf08f187b2e75d6b44))
* **cli:** create the config file dynamically and modify the webpack alias of config ([72de554](https://github.com/varletjs/varlet/commit/72de5542f4fb1ee041efad451b5ac7cb83ad94fb))
* **cli:** create the config file dynamically and modify the webpack alias of config ([b78c992](https://github.com/varletjs/varlet/commit/b78c992e42dd0cf13a0ae956d236fc696f4c8a5b))
* **loading:** optimize code ([b7a6653](https://github.com/varletjs/varlet/commit/b7a6653328e09ffd98fb7195cab7fe397fbb0426))
* **ui/home:** modify config import method ([a5c53ad](https://github.com/varletjs/varlet/commit/a5c53ade1fa02cf1737f28cbb69264901922d126))
* **ui/home:** modify config import method ([6277737](https://github.com/varletjs/varlet/commit/6277737c02f9f32cc58be2bccf0c3d82627efd74))

# [1.10.0](https://github.com/varletjs/varlet/compare/v1.9.7...v1.10.0) (2021-07-22)


### Bug Fixes

* **app-bar:** remove unused component ([4c70dbc](https://github.com/varletjs/varlet/commit/4c70dbc75a5ec23bdfc01e07496cfe01d5be626a))
* **style:** remove unused component ([722058d](https://github.com/varletjs/varlet/commit/722058df1a9ee2e5c769ca5325aff3b7bb65ebee))
* **ui/swipe:** fix swipe scroll error ([a0c197c](https://github.com/varletjs/varlet/commit/a0c197c9ad109a4df45fd50e97a9805656abad62))


### Features

* **ui/tabs-items:** add scrollIntoView, distance api ([a26f329](https://github.com/varletjs/varlet/commit/a26f329dd7d9018f8cc29c8f11d36a229ac8a32e))
* **ui/tabs-items:** use carousel to replace the original design ([8dd346e](https://github.com/varletjs/varlet/commit/8dd346ee2f2d6419bf7ec0d9fbdfa9acfba111b0))

## [1.9.7](https://github.com/varletjs/varlet/compare/v1.9.6...v1.9.7) (2021-07-21)


### Bug Fixes

* **ui/locale:** expose useLocale api ([2bf30e7](https://github.com/varletjs/varlet/commit/2bf30e798b1e9f43a0591ada296af3ab811efbe4))

## [1.9.6](https://github.com/varletjs/varlet/compare/v1.9.5...v1.9.6) (2021-07-20)


### Bug Fixes

* **snackbar:** add default value for options ([18e6ae1](https://github.com/varletjs/varlet/commit/18e6ae10a5e4bb8005de391fedd5a1de2388935d))
* **snackbar:** fix the wrong style of snackbar ([5b0ae93](https://github.com/varletjs/varlet/commit/5b0ae93fa3a649a7c4c1409202a865eb405c2ee1))

## [1.9.5](https://github.com/varletjs/varlet/compare/v1.9.4...v1.9.5) (2021-07-19)


### Bug Fixes

* **cli:** add ./src ([0f46b0a](https://github.com/varletjs/varlet/commit/0f46b0a908d072ca5939bd3c21b74344a9543c65))
* **cli:** fix build error ([27f1947](https://github.com/varletjs/varlet/commit/27f19477986c5979784953a2f3ef3c5e7f4fd0f1))
* **cli:** fix eslint pattern ([ae93da1](https://github.com/varletjs/varlet/commit/ae93da12af4853bcb42e746d0d89f7fddc7be792))
* **cli:** modify the logic of create route ([d60158a](https://github.com/varletjs/varlet/commit/d60158ac5b7ddc13eb9c41f1a8f27bb6f5c26d8f))
* modify the logic of create routes ([8c00955](https://github.com/varletjs/varlet/commit/8c0095573909db9cd406f8554466f153f39e98b7))
* remove unnecessary code ([578b842](https://github.com/varletjs/varlet/commit/578b842d7cdf8e1b71cf54fc3242e1bfb0d34e3d))
* **ui/button:** button add white-space nowrap ([97626e1](https://github.com/varletjs/varlet/commit/97626e19aaca9cbd6b6126901e0962727c24142e))


### Reverts

* revert the commit of modify routes ([d26c420](https://github.com/varletjs/varlet/commit/d26c4200c8a81af81ce74afc62d430d02923d603))

## [1.9.4](https://github.com/varletjs/varlet/compare/v1.9.2...v1.9.4) (2021-07-17)


### Bug Fixes

* **cli:** fix gen style error ([4f7dade](https://github.com/varletjs/varlet/commit/4f7dade4c9c18997a8151273aa8ac006cabb31c7))

## [1.9.2](https://github.com/varletjs/varlet/compare/v1.9.0...v1.9.2) (2021-07-17)

# [1.9.0](https://github.com/varletjs/varlet/compare/v1.8.0...v1.9.0) (2021-07-17)


### Bug Fixes

* adjust the execution position of the remove function ([7fc61de](https://github.com/varletjs/varlet/commit/7fc61deb9eca3bf30a4ecf1d37f531d2c1b154e8))
* enhance type import ([ae000e5](https://github.com/varletjs/varlet/commit/ae000e5755fe3e7618c96a46fa5f3cde89dcb86f))
* remove unnecessary inheritAttrs prop ([91d9503](https://github.com/varletjs/varlet/commit/91d95033ed94111c49b7af75713ec7cfd8504a58))
* remove unnecessary inheritAttrs prop and update way of import type ([72522ba](https://github.com/varletjs/varlet/commit/72522ba93c2e5c69f3a7e3cd4ee0ee6b8463e107))
* remove unnecessary less import ([a10ee49](https://github.com/varletjs/varlet/commit/a10ee49f5aa839f957268f981d156b405fed9f46))
* **ui/swipe:** fix vertical swipe indicator margin error ([a23a266](https://github.com/varletjs/varlet/commit/a23a2664462b5a785e713f29951ed8f7a31b27b8))


### Features

* **extension:** add siteMap ([a01d726](https://github.com/varletjs/varlet/commit/a01d726e922d8a9f36f79f16184bf2d474b60241))


### Refactoring

* **cli:** add copy-webpack-plugin ([5907a9f](https://github.com/varletjs/varlet/commit/5907a9f902e79bdf5748dd8677cc6c1a32fd71b7))
* **cli:** clean code ([7638540](https://github.com/varletjs/varlet/commit/7638540be5f5159578bc7a616e365f1bb6d0494f))
* **cli:** optimize compile progress ([39635e5](https://github.com/varletjs/varlet/commit/39635e5dacffa454782b52923320a072dc45542d))
* **cli:** optimize jest error handler ([b7e873a](https://github.com/varletjs/varlet/commit/b7e873abd41837074018544b74743f7420964ce6))
* **cli:** remove repeat code ([5dde79b](https://github.com/varletjs/varlet/commit/5dde79b3f614f680b69cdbab498c1da663fce955))
* **ui/checkbox-group:** fix example ([0612760](https://github.com/varletjs/varlet/commit/0612760f5507cc3bf83910e02d2a410916abc360))
* **ui/lazy:** remove io mode ([6373c01](https://github.com/varletjs/varlet/commit/6373c018542ea36cac11ddaba8f7aecec6a83be6))
* **ui/loading:** fix loading style ([8c1665c](https://github.com/varletjs/varlet/commit/8c1665ca0c1a14fbec7826b005164366e4e4831d))

# [1.8.0](https://github.com/varletjs/varlet/compare/v1.7.1...v1.8.0) (2021-07-02)


### Bug Fixes

* fix the bug of style-provider when update ([0640b4e](https://github.com/varletjs/varlet/commit/0640b4e00282edbf9495af8ebadb2a64873d4ea5))
* fix the prop name of style-provider ([36dd315](https://github.com/varletjs/varlet/commit/36dd3159581df3a98d78dd6761ed96c418dacda7))
* remove useless code and warning ([9674482](https://github.com/varletjs/varlet/commit/96744820a53dba35ef89a79e0d9c79ac7444a04a))
* support styleVars keyName ([fa2d4b5](https://github.com/varletjs/varlet/commit/fa2d4b58e2cbaec585ccca81c3721a04ffd3ae25))
* **ui/rate:** fix rate default color of props ([5bca5ea](https://github.com/varletjs/varlet/commit/5bca5ea41402960fad1e6f62f4ec42f2053e8580))
* **ui/swipe:** fix touchable bug ([1c16e5d](https://github.com/varletjs/varlet/commit/1c16e5d28803bc397a7a4d892ed057f3173078c2))
* 更新类型引入 ([b1636f3](https://github.com/varletjs/varlet/commit/b1636f3b94fd5461a4c3f150fbc39a3de0842b0d))


### Features

* add style-provider ([d4008ea](https://github.com/varletjs/varlet/commit/d4008ea8679e827f954d0dfe4aa6ec559b39f8af))
* **ui/card:** add style provider for card ([a47e7c9](https://github.com/varletjs/varlet/commit/a47e7c90ce1f7a18a1d1cd299118240d289192cd))
* **ui/image-preview:**  Add a click event to the close-icon button ([2ee89a2](https://github.com/varletjs/varlet/commit/2ee89a2ccf414321bc634f0d85cbe9330dab5534))
* **ui/image-preview:**  Add an action to determine Scale in handleCloseClick function ([c0f159b](https://github.com/varletjs/varlet/commit/c0f159b2d7f6c08915d7ad230a7906416eb97397))
* **ui/image-preview:** add new component image-preview prototype ([25a8907](https://github.com/varletjs/varlet/commit/25a8907c2173218dc011088bd5d93b8abe581e1b))


### Refactoring

* **cli:** support vite-plugin-components ([6da36a1](https://github.com/varletjs/varlet/commit/6da36a1944ffe141e26a578715e5392dd21fc326))
* **progress:** support style-provider ([f0ca92f](https://github.com/varletjs/varlet/commit/f0ca92f513c04254803b6b48eb746bb10013a082))
* **pull-refresh:** support style-provider ([aeaa74e](https://github.com/varletjs/varlet/commit/aeaa74eb3fe8231dab12815fe49ad9054aed9258))
* remove types of theme ([b95531f](https://github.com/varletjs/varlet/commit/b95531faced95824fbfaf75236d1a484a56923e1))
* rename themeVars to styleVars ([194737a](https://github.com/varletjs/varlet/commit/194737adb9c989f2cc7c713b716e98df98e8bc02))
* **slider:** add cssvar and update snapshot ([4417611](https://github.com/varletjs/varlet/commit/44176117ec0bfdab015084748ae528c93354efb2))
* **snackbar:** add props types and modify type of the snackbar options ([ad8eae9](https://github.com/varletjs/varlet/commit/ad8eae9d17029155b50d84fa551e97cf76e3bcb4))
* **ui/action-sheet,app-bar,badge,cell:** support style-provider ([e073b7f](https://github.com/varletjs/varlet/commit/e073b7f86b08650ebc0d97803fdeb4e13201c92a))
* **ui/back-top,chip:** support style-provider ([0a8e0e0](https://github.com/varletjs/varlet/commit/0a8e0e07a3e4b09a1ee363db786f8dcd36af3f59))
* **ui/button:** fix less ([75749c8](https://github.com/varletjs/varlet/commit/75749c8bd3e0dc079eed0c51cb80e600b9033366))
* **ui/button:** support style-provider ([2a10f53](https://github.com/varletjs/varlet/commit/2a10f5331542b67798b0e3c065eeb0313350e36f))
* **ui/card:** support style-provider for card ([9ea98ba](https://github.com/varletjs/varlet/commit/9ea98bafeb514c41304663355cfa5bb70e39a331))
* **ui/checkbox:** replace less-vars with css-vars ([eb731f7](https://github.com/varletjs/varlet/commit/eb731f7f1fe541de11943509cf2d505d92553dfc))
* **ui/cli:** upgrade tpl ([68b3339](https://github.com/varletjs/varlet/commit/68b3339529015d365e033fef5d32511e54bf6ba7))
* **ui/collapse:** support style-provider ([ea5f64c](https://github.com/varletjs/varlet/commit/ea5f64c290b238130797ecc02f622dfe4776d8d5))
* **ui/components:** add internal export component ([620ba66](https://github.com/varletjs/varlet/commit/620ba66c7ac46c63fc5f001fed8279329faea9cb))
* **ui/config:** fix host ([770d6d2](https://github.com/varletjs/varlet/commit/770d6d2a5c3e418b523af56e2d82c505c2997966))
* **ui/counter,date-picker,dialog:** support style-provider ([1864df6](https://github.com/varletjs/varlet/commit/1864df612fadb5a9fce2deabbba9799f578cba2c))
* **ui/divider,form,form-details,icon,index-bar:** support style-provider ([29eeb08](https://github.com/varletjs/varlet/commit/29eeb08e36c8e7d1c79a686418b9925eaa27ac31))
* **ui/image-preview:**  Delete useless variables swipe and unused watch ([8570cdb](https://github.com/varletjs/varlet/commit/8570cdb3fe8c3e35e419bc87158ca9d5c682ae9e))
* **ui/image-preview:** optimize double touch trigger ([6c8ee94](https://github.com/varletjs/varlet/commit/6c8ee94ffa08e0df47941bfe071870742a27242b))
* **ui/image-preview:** refactor image-preview ([47131ba](https://github.com/varletjs/varlet/commit/47131ba7533e2213986976672db30bced5928893))
* **ui/input:** support style-provider ([f6fd92b](https://github.com/varletjs/varlet/commit/f6fd92b4b4e000b8447c18ff59dcb5b5d8eb7047))
* **ui/list:** support style-provider ([e498378](https://github.com/varletjs/varlet/commit/e4983781842e713b1954eed43902071f08b9f3ba))
* **ui/menu:** support style-provider for menu ([b97eda5](https://github.com/varletjs/varlet/commit/b97eda530788ee40da414397099bf174f8269cc8))
* **ui/picker:** support style-provider ([c21d6c2](https://github.com/varletjs/varlet/commit/c21d6c295d9aa07cb7559475a653ceab65477021))
* **ui/popup,rate:** support style-provider ([1e09c04](https://github.com/varletjs/varlet/commit/1e09c04aae93d426caf66d3281a7fea4e5344ccf))
* **ui/radio:** add support style-provider for radio ([2433b58](https://github.com/varletjs/varlet/commit/2433b58e13cf2f7a1dd8e0484b3de40e6615f84a))
* **ui/radio:** fix less ([017d639](https://github.com/varletjs/varlet/commit/017d63958e0da1c99d0881fce9f4ff1365214956))
* **ui/select:** fix style ([5e035d5](https://github.com/varletjs/varlet/commit/5e035d52e8db362138394d5593e619d136cda9dc))
* **ui/select:** support style-provider for select ([91d7e74](https://github.com/varletjs/varlet/commit/91d7e7447f558abc6463de9f41468341c9e5da67))
* **ui/site:** optimize site ([0740817](https://github.com/varletjs/varlet/commit/07408179df370dbd3d54dcded8c2a9280d306cf9))
* **ui/skeleton, snackbar:** support style-provider ([8c0f36f](https://github.com/varletjs/varlet/commit/8c0f36f096f80fe186f69c87f7aa171c792feef2))
* **ui/slider:** support style-provider for slider ([db388bf](https://github.com/varletjs/varlet/commit/db388bf6276a4b0d460a5fa754d420d9f9718eca))
* **ui/step:** support style-provider for step ([db55174](https://github.com/varletjs/varlet/commit/db55174804b98645cba7bdb3119bb9fe7dd3a697))
* **ui/style-provider:** refactor code ([1b4534f](https://github.com/varletjs/varlet/commit/1b4534fed37e8c1b672864da86aff1e7c12614ea))
* **ui/swipe:** support style-provider for swipe ([bf6a66a](https://github.com/varletjs/varlet/commit/bf6a66ad2c70bc011779586f8c2eb5e0584fd18c))
* **ui/swipe:** support style-provider for swipe ([f6cc15b](https://github.com/varletjs/varlet/commit/f6cc15b4050e4724ab8f0d973b3355a2a815e73d))
* **ui/switch:** support style-provider for switch ([56631de](https://github.com/varletjs/varlet/commit/56631dea08e8168e49bc993314f9e7399eac90c3))
* **ui/tab-item:** support style-provider ([c9ff8d6](https://github.com/varletjs/varlet/commit/c9ff8d6dffe478449618aa64bf7449e1fe364845))
* **ui/tabs:** support style-provider for card ([851ecbf](https://github.com/varletjs/varlet/commit/851ecbff992759e652f7b77f2580a7158d9f0faf))
* **ui/tab:** support style-provider for tab ([2f4cc7c](https://github.com/varletjs/varlet/commit/2f4cc7c4e5597d3e12fd18a26c66c2eeb58d593a))
* **ui/time-picker:** support style-provider ([5e84e9f](https://github.com/varletjs/varlet/commit/5e84e9f448a636cc0b6f84b451c0e46225cd904e))
* **ui/types:** optimize types ([f526771](https://github.com/varletjs/varlet/commit/f5267711dbeb26444b85b783cfc17e0e0f1705d1))
* **ui/types:** support vite-plugin-components ([4452938](https://github.com/varletjs/varlet/commit/44529387b5450fdfc17bcae7d339ebff7cf90310))
* **ui/uploader:** format code ([0a0f896](https://github.com/varletjs/varlet/commit/0a0f8966ab2dc7c102b2017fde207085259b1e90))
* **ui/uploader:** support style-provider for uploader ([531c155](https://github.com/varletjs/varlet/commit/531c1551900bbfa0d4d33fc2440df772cdea5179))
* **ui/uploader:** support style-provider for uploader ([3814647](https://github.com/varletjs/varlet/commit/3814647658739bfde0782a123ad13cbf3f864db0))
* **ui/uploader:** use image-preview components replace popup ([d9e0895](https://github.com/varletjs/varlet/commit/d9e0895d4b0860605e672786946ba9da97395c35))

## [1.7.1](https://github.com/varletjs/varlet/compare/v1.7.0...v1.7.1) (2021-06-19)


### Bug Fixes

* **countdown:** modify style of example ([5dcf584](https://github.com/varletjs/varlet/commit/5dcf5849245817463f8fcd85d74c80abd20fbe78))
* **progress:** modify style of example ([f2469a6](https://github.com/varletjs/varlet/commit/f2469a6915c6ef4d2a264672971bfffe29adedff))
* **switch:** modify style of example ([b790736](https://github.com/varletjs/varlet/commit/b79073635295227180e79501068887c4c776c06c))


### Refactoring

* **ui/input:** format ([16ea298](https://github.com/varletjs/varlet/commit/16ea2986716d2593b3e40b1edf600f992f61e7bc))

# [1.7.0](https://github.com/varletjs/varlet/compare/v1.6.0...v1.7.0) (2021-06-14)


### Bug Fixes

* **cli/site:** add hover for lang button ([5ce2822](https://github.com/varletjs/varlet/commit/5ce2822d8e1c8c8bd0981cb55d534387e51f6403))
* **date-picker:** add hover style ([a6b4e42](https://github.com/varletjs/varlet/commit/a6b4e42bfeb0a93c8d43063ddf6efecfe2048ace))
* **divider/types:** export divider interface ([e01d452](https://github.com/varletjs/varlet/commit/e01d452f13767c732fa39ca85b2f264d15de185a))
* fix import path and progress style ([81d1651](https://github.com/varletjs/varlet/commit/81d1651ca2a036174c29e98d2aedeb963d17c31d))
* **ui/divider:** fix dynamic description ([5a47460](https://github.com/varletjs/varlet/commit/5a474608096acedbe8120368d8a3e7c9ea27890c))
* **ui/divider:** fix type declaration ([b8ff9ac](https://github.com/varletjs/varlet/commit/b8ff9ac452117e41964bda1d78d4b9a9c5d57a2f))
* **ui/divider:** fix vertical divider ([1aee499](https://github.com/varletjs/varlet/commit/1aee499556d5ad80e28a9130ca40f9ec0401db4b))
* **ui/divider:** remove unnecessary type conversion ([792a8aa](https://github.com/varletjs/varlet/commit/792a8aa8eacaa1f98e141fad5792eec2f57ccf55))
* **ui/divider:** support passing string inset with unit to divider ([5cbd457](https://github.com/varletjs/varlet/commit/5cbd45743435c3e1fcd2b1dcbd0662b92ff4240b))
* **ui/utils:** support vw vh ([b444ed0](https://github.com/varletjs/varlet/commit/b444ed0775fd2b2fea6f250b6f8698c92300b5d1))
* **vscode-extension:** add appbar to siteMap ([9595981](https://github.com/varletjs/varlet/commit/9595981e33f0554ee78b60a980a5583180ef472a))


### Features

* **site:** add progress bar ([e4590ec](https://github.com/varletjs/varlet/commit/e4590ecee5043da051593672bc23073de77b414a))
* **site:** add switch language for mobile ([60aff96](https://github.com/varletjs/varlet/commit/60aff9631a85633fb523b12757d36a2bf986adbd))
* **ui/card:** add Card component ([90b0a14](https://github.com/varletjs/varlet/commit/90b0a145f0f27ed1d5ecd278a15cd96863a9731a))
* **ui/divider:** add dashed divider ([9c6724e](https://github.com/varletjs/varlet/commit/9c6724ef4f2bb7bb6ecba432ed9070f1c7c716b2))
* **ui/divider:** add divider component ([3a7ed64](https://github.com/varletjs/varlet/commit/3a7ed648b21329a15748558391f9de8729fd9e1e))


### Performance Improvements

* optimize progress bar ([0b349db](https://github.com/varletjs/varlet/commit/0b349dbfd02c20599a106dce2e0bcef7153cc1cd))


### Refactoring

* **cli/site:** modify progress color ([5704d86](https://github.com/varletjs/varlet/commit/5704d86d1e022e55dbaa89c96d243d50907f1c71))
* **cli/site:** optimize progress hide style ([2ddacfc](https://github.com/varletjs/varlet/commit/2ddacfc6f676373fbb54a49aca5cfdc577e97152))
* **extension:** add divider and card in siteMap ([1dc3e86](https://github.com/varletjs/varlet/commit/1dc3e869dd073190eedf168fdf0cf0f5c76ce7e9))
* **extension:** support jsx tsx ([8cc50f5](https://github.com/varletjs/varlet/commit/8cc50f50b3361cd5db68caafb40e9d991bb50899))
* **home:** use default option ([88ed95d](https://github.com/varletjs/varlet/commit/88ed95d85ac3f0aafd098188deaf71fff9c6a208))
* rename useProgress method name ([2e61552](https://github.com/varletjs/varlet/commit/2e615523ee3d08037f8ed4f828254743ceef415a))
* **site:** optimize code ([51586b0](https://github.com/varletjs/varlet/commit/51586b0f7dd8b60f10f383544c31ab1c9105da0f))
* **ui/card:** fix type of title props ([adb08a0](https://github.com/varletjs/varlet/commit/adb08a08b5f861d4d6301a32d4361c2e26add70d))
* **ui/card:** optimize styles and api ([e7f8bad](https://github.com/varletjs/varlet/commit/e7f8badc6a59853e93620812e85073f88c830e0d))
* **ui/divider:** refactor divider and fix docs ([9878723](https://github.com/varletjs/varlet/commit/98787230d510aa013f83860e675c7cfd80d6b638))
* **ui/menu:** optimize menu animation ([d54fca7](https://github.com/varletjs/varlet/commit/d54fca76d8f0218135461a1a1023823b8a95e21b))
* **ui/radio checkbox:** optimize radio checkbox animation on toggle ([edbed26](https://github.com/varletjs/varlet/commit/edbed267830fda4e2d1eb8c645902b29464a9e24))
* **ui/radio,checkbox:** forbit with animation on mounted ([5030279](https://github.com/varletjs/varlet/commit/50302790c24a22bb5942284d1cb7abfd2814f44c))
* **ui/styles:** change the success color of default theme ([1e6b87f](https://github.com/varletjs/varlet/commit/1e6b87f5fb2b8802ca473ed71decbc38c18c631a))
* **ui/styles:** modify default theme color ([6828140](https://github.com/varletjs/varlet/commit/68281402ac4b68554d2fbafef3f08d483e531e76))
* **ui/types:** support all types of component ([a2ba681](https://github.com/varletjs/varlet/commit/a2ba681bac53290873137c2324737c14245e57c1))

# [1.6.0](https://github.com/varletjs/varlet/compare/v1.5.0...v1.6.0) (2021-06-02)


### Bug Fixes

* **root:** fix lerna.json ([ea32067](https://github.com/varletjs/varlet/commit/ea320675ef03f4f7700969a200bfa69451de8820))
* **root:** fix lerna.json ([3597037](https://github.com/varletjs/varlet/commit/35970379d3eb4509420d011eb10863a143ecd9c4))


### Features

* **extension:** add varlet-code-extension package ([b276e06](https://github.com/varletjs/varlet/commit/b276e064e1cb410a17c5f51c5eae2de55e58e88c))


### Refactoring

* **extension:** add icon ([37f516b](https://github.com/varletjs/varlet/commit/37f516bb08173349d851a81827195807ac6308d1))
* **extension:** remove .visx vcs ([b1d0c84](https://github.com/varletjs/varlet/commit/b1d0c841c348fdb85dc788e15e2165d39da8055e))
* **vcs:** fix .gitignore ([492e0aa](https://github.com/varletjs/varlet/commit/492e0aa51c6b9af8583dae64428ce3ece90cea13))

# [1.5.0](https://github.com/varletjs/varlet/compare/v1.4.9...v1.5.0) (2021-06-02)


### Bug Fixes

* remove error classname ([675a8da](https://github.com/varletjs/varlet/commit/675a8da866811e38c2c04398a4b8a2b761ce3c80))
* **snackbar:** modify option type ([b30e6b0](https://github.com/varletjs/varlet/commit/b30e6b082ce410270811fbbdcf137e6c364562a8))


### Features

* **ui/action-sheet:** add new component action-sheet, basic feature complete ([22f54dc](https://github.com/varletjs/varlet/commit/22f54dccd016eaee141802eaa5f5dff5b036aeab))


### Refactoring

* **ui/dialog ui/action-sheet:** add default background ([3a26dd7](https://github.com/varletjs/varlet/commit/3a26dd733410b0b3aa05951b0317427055aa9f2c))

## [1.4.9](https://github.com/varletjs/varlet/compare/v1.4.8...v1.4.9) (2021-05-31)


### Refactoring

* **ui/button:** optimize box shadow style ([5bfc8ea](https://github.com/varletjs/varlet/commit/5bfc8eae98b2287cc2156016b8d1c62b1b6362c3))

## [1.4.8](https://github.com/varletjs/varlet/compare/v1.4.7...v1.4.8) (2021-05-31)


### Refactoring

* **ui/button:** optimize button's box shadow style in active ([170cd1d](https://github.com/varletjs/varlet/commit/170cd1dfebe7e6330ebfef03603cc1a029243a47))

## [1.4.7](https://github.com/varletjs/varlet/compare/v1.4.6...v1.4.7) (2021-05-31)


### Bug Fixes

* **cle/site/pc:**  Make the left menu ([2585504](https://github.com/varletjs/varlet/commit/258550493deffc79f32bd2a60c88e7055596c6ff))
* **cli/config:**  repair header configuration ([a91cd25](https://github.com/varletjs/varlet/commit/a91cd258aed834b161f5e789b627d6cfd3595a94))
* **cli/config/dev:**  Fixed the title ([fe54e48](https://github.com/varletjs/varlet/commit/fe54e486478247864ae8edf7507e6c2337d11512))
* **cli/site/pc:**  remove unused import ([260358b](https://github.com/varletjs/varlet/commit/260358bc8d3c4d3bf5128eaf509d813c39bc6a19))
* **cli/site/pc:**  remove unused import ([c61eb4c](https://github.com/varletjs/varlet/commit/c61eb4cc7f6d71f1dabc1ff85be4596a199ea5b0))
* **cli/site/pc:**  repair where the var-cell ([dbb63f8](https://github.com/varletjs/varlet/commit/dbb63f84ece63e7f3a48a7c89bf0a8170822caa4))
* **cli/site/pc:**  repair where the var-cell ([bf91f0e](https://github.com/varletjs/varlet/commit/bf91f0e3f256dfc5f282f4f6eca9ad2fc95630ad))
* **cli/site/pc:** add browser title toggle both ([28c9745](https://github.com/varletjs/varlet/commit/28c97453752b96618ca8289cb4af5c4ceba0b25c))
* **cli/site/pc:** remove unused import reactive ([07fdd24](https://github.com/varletjs/varlet/commit/07fdd241adf3c5cf1e8c532d7151aae01986c1dc))
* **cli/site/pc:** remove unused import reactive ([14e1fa8](https://github.com/varletjs/varlet/commit/14e1fa89904ba8082eda8198e2b1b8843ff36311))
* **date-picker:** fix autoupdate of snapshot ([9ce63b7](https://github.com/varletjs/varlet/commit/9ce63b7651231b95f0a65f446a3186cb2d0e72a4))
* **home:** add headerLogo  description ([74fd8d4](https://github.com/varletjs/varlet/commit/74fd8d4693d54bdf7d50747ac9bcc88e4ce792e1))
* **home:** add headerLogo  description ([022b5a0](https://github.com/varletjs/varlet/commit/022b5a08a4ba72df2995e89e52dac286fff124e9))
* **home:** add locale ([e0b7155](https://github.com/varletjs/varlet/commit/e0b7155392fb44a01484860297c374282bb16669))
* **home:** add locale ([7e6fac9](https://github.com/varletjs/varlet/commit/7e6fac94ba0e8cef4c1d0237b5e71ade8ee2978f))
* **snackbar:** add defaultOption for snackbar ([7e05d9c](https://github.com/varletjs/varlet/commit/7e05d9ceae7e2a1c03535ea85625f600275e0b61))
* **snackbar:** close autooff when the type prop is loading ([95f7d2a](https://github.com/varletjs/varlet/commit/95f7d2a130384acbc145f6edcecc6c2b9aec9b10))
* **snackbar:** forbid click when type of snackbar is loading ([b324cfb](https://github.com/varletjs/varlet/commit/b324cfbcc02978d65e77860cabd2ca5e77b22175))
* **ui/home:**  change varletConfig import path ([298d5ba](https://github.com/varletjs/varlet/commit/298d5bab395fc4a8d87035fa75c132b6c90fb3b1))
* **ui/home:**  change varletConfig import url ([5346d3b](https://github.com/varletjs/varlet/commit/5346d3bff357c71b6da23736f9d5bb7e6b175fb6))
* **ui/home:** change varletConfig import url ([73b9f84](https://github.com/varletjs/varlet/commit/73b9f841ce5aac64284381a12dbb14e98e721244))
* **ui/tsconfig:**  add allowJs option ([c5bf05e](https://github.com/varletjs/varlet/commit/c5bf05ea04c802093acc95267f7c11aad8ed2e37))
* **varlet.default.config:**  Now ([fea3daa](https://github.com/varletjs/varlet/commit/fea3daa6fc5610a0a567668549d8c92a36c6300d))
* **varletconfig:**  Extract the public ([2fbc4b0](https://github.com/varletjs/varlet/commit/2fbc4b0d71d135d744ba635f306da6a44aa49449))

## [1.4.6](https://github.com/varletjs/varlet/compare/v1.4.5...v1.4.6) (2021-05-25)


### Bug Fixes

* **ui/image:** fix image template types ([c923ee1](https://github.com/varletjs/varlet/commit/c923ee13ccdcf45abcc095787bed95fd5f1974da))

## [1.4.5](https://github.com/varletjs/varlet/compare/v1.4.4...v1.4.5) (2021-05-21)


### Bug Fixes

* **ui/tabs:** fix bug of tabs scrolling fail in the safari ([3e96046](https://github.com/varletjs/varlet/commit/3e960460069c67a95945819fa238508b218342b1))
* use ScrollTo method to replace back-top animation ([88b6577](https://github.com/varletjs/varlet/commit/88b65773a13eff1b1764a6751fc9d7109ef95e61))


### Refactoring

* **back-top:** modify ref-value to varible ([fbe50a6](https://github.com/varletjs/varlet/commit/fbe50a63b53969882da2fe3bc4ab86270a716677))
* **ui/dialog:** optimize the style of the dialog box ([0d2f12e](https://github.com/varletjs/varlet/commit/0d2f12e552840129f6fba30b0947eff0016d0271))

## [1.4.4](https://github.com/varletjs/varlet/compare/v1.4.3...v1.4.4) (2021-05-21)


### Bug Fixes

* **back-top:** replace scrollTop to scrollTo ([776803f](https://github.com/varletjs/varlet/commit/776803fe5df175f276d388be5b8be049962b018a))

## [1.4.3](https://github.com/varletjs/varlet/compare/v1.4.2...v1.4.3) (2021-05-20)


### Refactoring

* **ui/ripple:** ripple animation duration 3s -> 2s ([6dd3557](https://github.com/varletjs/varlet/commit/6dd3557a6c6d6a833211f355ecd11fbbf1e2e5c0))

## [1.4.2](https://github.com/varletjs/varlet/compare/v1.4.1...v1.4.2) (2021-05-20)


### Refactoring

* **ui/ripple:** optimize the animation curve ([532bdc0](https://github.com/varletjs/varlet/commit/532bdc09bfda8fb9dc7777f29949cf31667920f0))

## [1.4.1](https://github.com/varletjs/varlet/compare/v1.4.0...v1.4.1) (2021-05-19)


### Bug Fixes

* **back-top:** add window as default value of target ([f293a94](https://github.com/varletjs/varlet/commit/f293a94c82c6dca108158cc7348cbd4ba9ed7526))
* **ui/uploader:** add disabled and readonly case to the handleChange method ([da82ae2](https://github.com/varletjs/varlet/commit/da82ae2cf2dab9a6801dbe695f2c65e8e4673aed))

# [1.4.0](https://github.com/varletjs/varlet/compare/v1.3.5...v1.4.0) (2021-05-19)


### Bug Fixes

* **slider:** fix error method ([6e1774f](https://github.com/varletjs/varlet/commit/6e1774fa57f805027603b2b2c3ed5be08067ea91))
* **snackbar:** add install method of snackbar component ([0b403cc](https://github.com/varletjs/varlet/commit/0b403cccfb53685488c45ecf86aedd58b96f1553))
* **type:** fix error type of snackbar ([430e382](https://github.com/varletjs/varlet/commit/430e3828a68e595f049599231a36b379dfa81a37))
* **types:** fix snackbar option type ([a04588e](https://github.com/varletjs/varlet/commit/a04588e7f1c181670681024ede8e038471185f1f))
* **ui/button:** fix button block style to class ([433633c](https://github.com/varletjs/varlet/commit/433633cf82e1adccb542b69e04ad7a458884a313))


### Features

* 添加form组件单元测试 ([93420c1](https://github.com/varletjs/varlet/commit/93420c1d344e906d5a7f5ec7a91bc4ece82d40f5))

## [1.3.5](https://github.com/varletjs/varlet/compare/v1.3.4...v1.3.5) (2021-05-14)


### Bug Fixes

* **ui/counter:** fix bug of counter no validation function exposed ([247b4c5](https://github.com/varletjs/varlet/commit/247b4c5e2b77104c532d4832b34e47831240d6b7))

## [1.3.4](https://github.com/varletjs/varlet/compare/v1.3.3...v1.3.4) (2021-05-13)


### Bug Fixes

* **ui/select ui/radio:** fix bug of select click event repeat trigger, radio unit test complete ([21e6fcb](https://github.com/varletjs/varlet/commit/21e6fcbf9335358022080d0221ad57a76b00a1a2))
* **ui/select:** fix bug of select blur event can't trigger ([b9918fc](https://github.com/varletjs/varlet/commit/b9918fcd08a6805408b18a7e0765213974bde235))

## [1.3.3](https://github.com/varletjs/varlet/compare/v1.3.2...v1.3.3) (2021-05-11)


### Bug Fixes

* **ui/picker:** 修复picker onChange事件在组件初始化结束后 选择当前选项也会触发一次事件 ([3f6458d](https://github.com/varletjs/varlet/commit/3f6458da70ffcce581a4440b350b2fed1764d8b6))

## [1.3.2](https://github.com/varletjs/varlet/compare/v1.3.1...v1.3.2) (2021-05-10)


### Bug Fixes

* **pull-refresh:** fix the bug of touchmove ([88aa3af](https://github.com/varletjs/varlet/commit/88aa3afc9d7e939e96e0ed00d572a63771fcc58d))
* **ui/tabs:** fix indicator size error on window resize ([576caf1](https://github.com/varletjs/varlet/commit/576caf1d706deee98f503a47c1e25f62d6788dfd))


### Refactoring

* **pull-refresh:** rename disable to disabled ([353a5e4](https://github.com/varletjs/varlet/commit/353a5e4b390b81bcc75938217e33ebb65ffb3989))

## [1.3.1](https://github.com/varletjs/varlet/compare/v1.3.0...v1.3.1) (2021-05-08)


### Bug Fixes

* **ui/ripple:** fix ripple repeat call remove ripple task, ripple unit test complete ([9c6b3c1](https://github.com/varletjs/varlet/commit/9c6b3c1970679248494b9928e430df26aed2ae82))

# [1.3.0](https://github.com/varletjs/varlet/compare/v1.2.3...v1.3.0) (2021-05-08)


### Bug Fixes

* fix typo ([ffc0ba8](https://github.com/varletjs/varlet/commit/ffc0ba85f1f15f8c919c411e81e41e5375500dc9))
* **index-bar:** remove useless prop and dont trigger click after call scrollTo method ([bba5152](https://github.com/varletjs/varlet/commit/bba5152dd4db1bacb1f6c62b28b8705d3c504a3a))


### Features

* **index-bar:** add highlight-color prop ([b4d38f4](https://github.com/varletjs/varlet/commit/b4d38f41f21be4a73218b9076f69c8a1e0b94332))

## [1.2.3](https://github.com/varletjs/varlet/compare/v1.2.2...v1.2.3) (2021-05-07)

## [1.2.2](https://github.com/varletjs/varlet/compare/v1.2.1...v1.2.2) (2021-05-06)


### Bug Fixes

* **badge:** optimize code and hide icon when dot prop is true ([7246fd3](https://github.com/varletjs/varlet/commit/7246fd369e379437c29c6be5c77fdfca113f6799))
* fix test example warning ([fb16f71](https://github.com/varletjs/varlet/commit/fb16f71f324920b6b40c7281d56062b28205d4e5))
* **types:** vite build typescript error ([cd1a402](https://github.com/varletjs/varlet/commit/cd1a4028900ab91bc3aa0692d1f0653ea8f0bdd5))

## [1.2.1](https://github.com/varletjs/varlet/compare/v1.2.0...v1.2.1) (2021-04-29)


### Bug Fixes

* **ui/input select:** 修复了input select的label居中问题 完成layout skeleton的单元测试 ([b9502f9](https://github.com/varletjs/varlet/commit/b9502f9052594398c12397798070589a86e5d879))

# [1.2.0](https://github.com/varletjs/varlet/compare/v1.1.0...v1.2.0) (2021-04-26)


### Bug Fixes

* **cli/site:** 添加禁止站点强缓存meta标签 ([761b991](https://github.com/varletjs/varlet/commit/761b991dd4b95ee8a3ed543e9b41a1294e1bd944))


### Features

* **switch:** add activeValue prop and inactiveValue prop ([7e56ea7](https://github.com/varletjs/varlet/commit/7e56ea71d2a61b9263a132e4d441004040715c8c))

# [1.1.0](https://github.com/varletjs/varlet/compare/v1.0.1...v1.1.0) (2021-04-26)


### Bug Fixes

* **ui/progress:** 优化progress文档, 重命名props show-active -> label, show-track -> track ([7d82141](https://github.com/varletjs/varlet/commit/7d82141aef288e03b580b6ffabc0844f8f889ba3))


### Features

* **ui/types:** uploader提供jsx,tsx类型支持 ([b156587](https://github.com/varletjs/varlet/commit/b15658715a3c64cada1c9be4d80c0ffc1df701fd))
* **ui/types:** 完善row组件jsx,tsx类型推断 ([4630be3](https://github.com/varletjs/varlet/commit/4630be3dd3678d35e8f5e9d194de84c6043797dd))
* **ui/types:** 提供jsx,tsx支持.完成以下组件button,checkbox,checkboxGroup,col,counter,dialog,form,icon,image,i ([8818998](https://github.com/varletjs/varlet/commit/8818998748945eea3acd88f88eff8d9387a9e86c))

## [1.0.1](https://github.com/varletjs/varlet/compare/v1.0.0...v1.0.1) (2021-04-24)


### Bug Fixes

* **package/varlet-touch-emulator:** package resolve entry point ([7a846e9](https://github.com/varletjs/varlet/commit/7a846e9f8422619f80c9a1849e584b19aad87066))

# [1.0.0](https://github.com/varletjs/varlet/compare/v0.13.3...v1.0.0) (2021-04-21)

## [0.13.3](https://github.com/varletjs/varlet/compare/v0.13.2...v0.13.3) (2021-04-20)


### Bug Fixes

* **cli/site:** 修改mobile全局字体颜色 ([3155bf6](https://github.com/varletjs/varlet/commit/3155bf65b86dfb5ca0244eb9b2b57fa75870c69e))
* **index-bar:** fix bug of scroll ([872bc14](https://github.com/varletjs/varlet/commit/872bc144c146293719a6f98483ed7d92a8dfc988))

## [0.13.2](https://github.com/varletjs/varlet/compare/v0.13.1...v0.13.2) (2021-04-19)


### Bug Fixes

* **badge:** fix wrong classname ([11d90b5](https://github.com/varletjs/varlet/commit/11d90b5082d800ba9baab9837a243da2faba347e))
* **ui/uploader:** 修改默认状态指示器的颜色 ([c259acd](https://github.com/varletjs/varlet/commit/c259acd73fff916a082f7985b9f53741b75e7e03))


### Refactoring

* **example:** replace ref to reactive ([285704c](https://github.com/varletjs/varlet/commit/285704c3617fc18559d24ddef61cdb50535f96bc))
* **rate:** optimize code ([9ae7ac7](https://github.com/varletjs/varlet/commit/9ae7ac74a6a21e3c572b20a751b27906e9d55c78))
* **varlet-icons:** add icon ([414c39e](https://github.com/varletjs/varlet/commit/414c39eac2e7b7248500bc222fa6e29f51ee9e08))

## [0.13.1](https://github.com/varletjs/varlet/compare/v0.13.0...v0.13.1) (2021-04-19)


### Bug Fixes

* **site:** change logo and back url of mobile ([2709c6c](https://github.com/varletjs/varlet/commit/2709c6ca8d084e0360d9014bcadecb074ae2b453))
* **site:** fix the bug of mouseenter trigger ([d2e4b6d](https://github.com/varletjs/varlet/commit/d2e4b6d5a98f04986a05296a0c272d2e6706de8d))
* **ui/counter ui/input ui/select:** 修复counter移动端长按touchend失效的问题，修复input select颜色显示的问题 ([a0e6f6a](https://github.com/varletjs/varlet/commit/a0e6f6af9889b50aa2a3ea19d6bb9b0ba28da386))
* **ui/input ui/select:** 修改input select样式 ([56cc7bf](https://github.com/varletjs/varlet/commit/56cc7bfb62fd60475a612872a4049a9308dcddcc))
* **ui/input:** 修复验证错误时光标颜色问题 ([03fc188](https://github.com/varletjs/varlet/commit/03fc188bb93c714862cc5531e26a2c23db58ca5e))

# [0.13.0](https://github.com/varletjs/varlet/compare/v0.12.2...v0.13.0) (2021-04-17)


### Bug Fixes

* **collapse:** fix wrong style ([6e778f4](https://github.com/varletjs/varlet/commit/6e778f47bf470be29c7e0bf3649b9b13e2f20ca5))
* fix some wrong style and docs error ([71cd483](https://github.com/varletjs/varlet/commit/71cd4836c2fa6c773ef999000b41bb4c4905451d))
* fix wrong z-index of snackbar and prevent touchmove event of pull-refresh example ([3be0b22](https://github.com/varletjs/varlet/commit/3be0b226291d87bba5b660d4e9ea6e2b5f3c3ca9))
* **index-bar:** fix mount error and remove active prop ([0dcb98f](https://github.com/varletjs/varlet/commit/0dcb98fbe9284c8242db8b384e8047651b4913eb))
* **rate:** add validator and import component style ([9b76d36](https://github.com/varletjs/varlet/commit/9b76d361399119431c910607592a44df837b632e))
* **rate:** fix error data ([e135560](https://github.com/varletjs/varlet/commit/e135560b55b30ce9a6363cfb019cd1f961e75745))
* **snackbar:** modify the way of transition ([eb8aada](https://github.com/varletjs/varlet/commit/eb8aadaa493b9af4b993f012d8b9874b2d6d2906))
* **ui/chip:** 修复chip样式引入问题 ([1e85fa4](https://github.com/varletjs/varlet/commit/1e85fa442e47de81021c782b4c286e4fd1f737c3))


### Features

* **cli/site markdown-loader/:** 修改文档整体风格 ([288a1f8](https://github.com/varletjs/varlet/commit/288a1f8e5a6e81e21accd1b2f18082ac2ee4b74e))
* **cli/site:** 修改手机样式 自适应高度 ([37029e2](https://github.com/varletjs/varlet/commit/37029e2a76fbf6a2995fc4e634c81defe0633fc3))


### Refactoring

* **ui/chip:** 优化chip代码,删除废弃的props ([a0933ce](https://github.com/varletjs/varlet/commit/a0933ce1160acffe1eda51c362741c3d1c48bece))

## [0.12.2](https://github.com/varletjs/varlet/compare/v0.12.1...v0.12.2) (2021-04-14)


### Bug Fixes

* **ui/types:** 修复checkboxGroup steps step类型声明问题 ([706632c](https://github.com/varletjs/varlet/commit/706632ce69a04595298ae60b9024882158fdb913))

## [0.12.1](https://github.com/varletjs/varlet/compare/v0.12.0...v0.12.1) (2021-04-14)


### Bug Fixes

* **ui/types:** 修复dialog picker类型声明 ([53090e0](https://github.com/varletjs/varlet/commit/53090e063eaf1f61a80416f9a4fec5fb5aa99f1b))


### Refactoring

* **ui/test:** 删除快照 ([20b608c](https://github.com/varletjs/varlet/commit/20b608c39032734740425e7bf023de7eda591650))

# [0.12.0](https://github.com/varletjs/varlet/compare/v0.11.4...v0.12.0) (2021-04-14)


### Features

* **snackbar:** add types ([cdd48dc](https://github.com/varletjs/varlet/commit/cdd48dcc8d9cbc4fdb1b820d57e638d5a68878f2))


### Refactoring

* **snackbar:** optimize code ([a54130c](https://github.com/varletjs/varlet/commit/a54130cacc2772a700114714cbb05a2bf8160e90))

## [0.11.4](https://github.com/varletjs/varlet/compare/v0.11.3...v0.11.4) (2021-04-11)


### Bug Fixes

* **icon/lib:** 增加base64构建模式 ([ae682cc](https://github.com/varletjs/varlet/commit/ae682cc632465642a08fe003ce44b70c9b9e30b6))
* **pull-refresh:** update modelValue when loading ([b6f892e](https://github.com/varletjs/varlet/commit/b6f892e2f9096dcee84bd556e8d0b20aaaaeac84))
* **rate:** remove useless code ([f1a4900](https://github.com/varletjs/varlet/commit/f1a4900e1bcdee096f9b0bb6b45b1b9ed1e3e267))
* **ui/docs:** 完善基本介绍中文文档 ([e92111d](https://github.com/varletjs/varlet/commit/e92111d5d628cecb2da6d3101f06c5a438e7c049))

## [0.11.3](https://github.com/varletjs/varlet/compare/v0.11.2...v0.11.3) (2021-04-09)


### Bug Fixes

* remove useless code ([7215df0](https://github.com/varletjs/varlet/commit/7215df0ab2374f9108f0642ab8211b5b518e564d))
* remove useless code and import cell component ([090da6f](https://github.com/varletjs/varlet/commit/090da6f23b8cb9e8ab31334c617ffcd30a6c9989))

## [0.11.2](https://github.com/varletjs/varlet/compare/v0.11.1...v0.11.2) (2021-04-08)


### Bug Fixes

* **icon/config:** 修改config url ([e063fbf](https://github.com/varletjs/varlet/commit/e063fbfa1c4f75932e68c82a7e01c4a30ccb71b4))

## [0.11.1](https://github.com/varletjs/varlet/compare/v0.11.0...v0.11.1) (2021-04-08)


### Bug Fixes

* **date-picker:** check value ([d57b163](https://github.com/varletjs/varlet/commit/d57b163138d1c3ec3999c4c4c5c997bbf0a662f3))
* **icon/config:** 修改打包的icon css url ([23b87b7](https://github.com/varletjs/varlet/commit/23b87b73737ed7da7f560ff98d610fbcc03c7d9a))
* **time-picker:** wrong style ([4dd6d49](https://github.com/varletjs/varlet/commit/4dd6d493d6ead6e034aa13f84a3409192e147569))

# [0.11.0](https://github.com/varletjs/varlet/compare/v0.10.7...v0.11.0) (2021-04-07)


### Bug Fixes

* **ui/locale:** 修复英文语言包字段名错误的问题 ([e26e24d](https://github.com/varletjs/varlet/commit/e26e24d9f806dbc78150d4a294fd6ed2af63f0f6))


### Features

* **site:** add Baidu statistics ([db2879b](https://github.com/varletjs/varlet/commit/db2879b4ee92fafec54e0e5e3d1dca3a78de4b20))

## [0.10.7](https://github.com/varletjs/varlet/compare/v0.10.6...v0.10.7) (2021-04-07)


### Bug Fixes

* **cli/compiler:** 编译时创建less.js cover babel-import-plugin ([3b75185](https://github.com/varletjs/varlet/commit/3b75185a6e3b25d27da7b95f0778cf70c12268f7))

## [0.10.6](https://github.com/varletjs/varlet/compare/v0.10.5...v0.10.6) (2021-04-07)


### Bug Fixes

* **ui/locale:** 将自定义的语言包名加入语言包内 ([5544b30](https://github.com/varletjs/varlet/commit/5544b30a2725a35c11034f49e524dbd567155af6))

## [0.10.5](https://github.com/varletjs/varlet/compare/v0.10.4...v0.10.5) (2021-04-07)


### Bug Fixes

* **ui/types:** 修复Locale类型声明 ([3e2f9f1](https://github.com/varletjs/varlet/commit/3e2f9f19cf5f9a8c8fe9133db5c1d18550856a9f))

## [0.10.4](https://github.com/varletjs/varlet/compare/v0.10.3...v0.10.4) (2021-04-07)

## [0.10.3](https://github.com/varletjs/varlet/compare/v0.10.2...v0.10.3) (2021-04-07)


### Bug Fixes

* fix the bug of invalid style in build ([56c85f0](https://github.com/varletjs/varlet/commit/56c85f06c911379384918faeeb9d5377f2297632))
* **ui/*:** 解决组件依赖css优先级问题 优化所有组件文档排版 ([3791438](https://github.com/varletjs/varlet/commit/3791438b9d77e381488047a0a4d74f67f4526c59))
* **ui/docs:** 完善快速开始，按需引入文档 ([0cd23c5](https://github.com/varletjs/varlet/commit/0cd23c59e2dcb9394cbdb579ed1c2754bab2426d))


### Refactoring

* **cli/site:** 优化pc文档排版 ([7ce1e94](https://github.com/varletjs/varlet/commit/7ce1e94b2520f96da30930aed26dc912dff241dc))

## [0.10.2](https://github.com/varletjs/varlet/compare/v0.10.1...v0.10.2) (2021-04-06)


### Bug Fixes

* **ui/dialog:** 修复类型声明 ([29639b8](https://github.com/varletjs/varlet/commit/29639b86c7edf7b93169f2ac8eec36febc9d2189))

## [0.10.1](https://github.com/varletjs/varlet/compare/v0.10.0...v0.10.1) (2021-04-06)


### Bug Fixes

* **ui/*:** 解决组件依赖组件less路径错误问题 ([a081d67](https://github.com/varletjs/varlet/commit/a081d67c8cb7e388c1f5a10a2c3078d9e7363a8a))

# [0.10.0](https://github.com/varletjs/varlet/compare/v0.9.6...v0.10.0) (2021-04-06)


### Bug Fixes

* **ui/*:** 解决组件依赖组件时 被依赖组件样式没有加载的问题 ([b2b18ae](https://github.com/varletjs/varlet/commit/b2b18aed2d3783dbb82904a7d31389f866825fb4))


### Features

* **varlet-ui:** write rate to form ([4a64a7e](https://github.com/varletjs/varlet/commit/4a64a7e93f9ecf58f470c2a1bccb34cec06da189))

## [0.9.6](https://github.com/varletjs/varlet/compare/v0.9.5...v0.9.6) (2021-04-06)


### Bug Fixes

* **ui/types:** 修改函数式组件类型声明 ([0309fdc](https://github.com/varletjs/varlet/commit/0309fdc180e43bdd8788214ffff68637b7450faa))

## [0.9.5](https://github.com/varletjs/varlet/compare/v0.9.4...v0.9.5) (2021-04-06)


### Bug Fixes

* **ui/package.json:** 增加@babel/runtime依赖 ([d6948b8](https://github.com/varletjs/varlet/commit/d6948b865fcdf61cc7b79bd50765f3c4b3abccf7))

## [0.9.4](https://github.com/varletjs/varlet/compare/v0.9.3...v0.9.4) (2021-04-06)


### Bug Fixes

* **ui/collapse:** 重命名组件名 ([c418cc0](https://github.com/varletjs/varlet/commit/c418cc055129197c632585c4bacfb6f842bd83cc))

## [0.9.3](https://github.com/varletjs/varlet/compare/v0.9.2...v0.9.3) (2021-04-06)


### Bug Fixes

* **ui/locale:** 修复locale导出异常 ([c5373af](https://github.com/varletjs/varlet/commit/c5373af51caaabc7e8e3889c76264e610a7ff601))

## [0.9.2](https://github.com/varletjs/varlet/compare/v0.9.1...v0.9.2) (2021-04-06)


### Bug Fixes

* **ui/*:** 所有组件阻止ios默认的点击高亮 ([78cce5f](https://github.com/varletjs/varlet/commit/78cce5f93ff4a039272e8c825b0ed78f324b6fe7))
* **ui/lazy:** 修复install报错 ([187b822](https://github.com/varletjs/varlet/commit/187b8221d186f64eb990b829e96d46e4ae55330a))

## [0.9.1](https://github.com/varletjs/varlet/compare/v0.9.0...v0.9.1) (2021-04-06)


### Bug Fixes

* **cli/site:** 修改生成umd文件名和库的全局变量名称 ([ac39eb0](https://github.com/varletjs/varlet/commit/ac39eb0bdee2e3767ec928a119af5f284d7e7649))

# [0.9.0](https://github.com/varletjs/varlet/compare/v0.8.0...v0.9.0) (2021-04-06)


### Bug Fixes

* add boolean check of toNumber method ([f5c5193](https://github.com/varletjs/varlet/commit/f5c5193866a07938fe14ebf0144f6f6e84b3e47c))
* **back-top:** modify some errors ([fbde4f2](https://github.com/varletjs/varlet/commit/fbde4f21f094e2e8add2df0798c562a408a5cf87))
* **cell:** change attr container ([a86a370](https://github.com/varletjs/varlet/commit/a86a370b1cbb644d7f69f37d3f960faf5fa1f0e5))
* **cli, ui:** 重构了 mobile和组件库的i18n设计 ([bf6c870](https://github.com/varletjs/varlet/commit/bf6c870a82c4d309f10ae555b48a13d1810e66fa))
* **cli,ui:** icon 文档和重构 ([84fac70](https://github.com/varletjs/varlet/commit/84fac70fc627c9e15620000cf34fac69ce6da628))
* **cli,ui:** 修改pc站点布局, 修改menu left获取问题 ([87d6041](https://github.com/varletjs/varlet/commit/87d6041aba6e579973da67a2d63c144b4d4aa95d))
* **cli,ui:** 完成组件库 pc文档 mobile文档的i18n设计 ([cbcd297](https://github.com/varletjs/varlet/commit/cbcd2978731f3b7f8850da702beb744fe8e77831))
* **cli/site:** 优化路由联动 ([d7bbef3](https://github.com/varletjs/varlet/commit/d7bbef370d2feb1c6298eb29b942dbbe241f7dbe))
* **cli/site:** 修复语言不同步的问题 ([3271d06](https://github.com/varletjs/varlet/commit/3271d06e37faa73e98a68b5986433d27d8be591f))
* **cli/site:** 修改手机缩放比例 ([777a38c](https://github.com/varletjs/varlet/commit/777a38c46268cf5f394d467eddb149faddc63997))
* **cli:** work in progress ([ed362c7](https://github.com/varletjs/varlet/commit/ed362c785ab6f7ab52c61c8ccb19a4eec0b1f217))
* **cli:** 优化compileRoutes正则 ([b9223c2](https://github.com/varletjs/varlet/commit/b9223c2e63c4f767b319b24c159a4a949a8a4204))
* **cli:** 优化compileRoutes的正则匹配 ([2a500dc](https://github.com/varletjs/varlet/commit/2a500dce3e22f5c725b9660c8ec01180717fc363))
* **cli:** 优化site routes ([8f11570](https://github.com/varletjs/varlet/commit/8f1157057a73fe4dbbcd4b818da3d8c661c7a293))
* **cli:** 修改了文档站点的样式 ([ac28f9f](https://github.com/varletjs/varlet/commit/ac28f9ff6094ee198bca3b2f1d46bc9548de378e))
* **index-bar:** modify scroll container ([8c70cb8](https://github.com/varletjs/varlet/commit/8c70cb8bade2c27772d3a541b6291c18acc2da3a))
* **pull-refresh:** fix error classname ([fedeff0](https://github.com/varletjs/varlet/commit/fedeff03c87656e3713f32f0f30e85a3bfd02008))
* remove unnecessary code and add example ([0505305](https://github.com/varletjs/varlet/commit/0505305540ff748beaeb1185d3f07bcc1adfc736))
* **root/scripts:** 修改bootstrap命令执行顺序 解决compile失败的问题 ([4022fec](https://github.com/varletjs/varlet/commit/4022fec95a613a1696714837e327de0218a940ce))
* **root:** bootstrap脚本增加ui的compile操作 ([f6eaa11](https://github.com/varletjs/varlet/commit/f6eaa119b83b3f607090a489b7f89e8f5a56a1ca))
* **site:** return to the previous step and display the left active menu in the visual box ([5ed5313](https://github.com/varletjs/varlet/commit/5ed53133de4763dbf360d192324d35674a4e5c52))
* **site:** solve the problem of incorrect display of mobile phone ([2a549e8](https://github.com/varletjs/varlet/commit/2a549e8eb134e94cc9196908d59b488b059ac70e))
* **slider:** make sure maxWidth exist ([052bb70](https://github.com/varletjs/varlet/commit/052bb70c58c738529610a3ae8caa251d33a85a47))
* **slider:** modify z-index when draged ([7433719](https://github.com/varletjs/varlet/commit/7433719c5f749eccbc50b9e015049f025623ab21))
* **time-picker:** duplicate calls update ([2605384](https://github.com/varletjs/varlet/commit/26053841c2e120881847903f83e9f945e918090a))
* **time-picker:** fix bug of irremovability ([b359852](https://github.com/varletjs/varlet/commit/b3598522a85a684312e07a9168dfdec5c01be034))
* **time-picker:** fix some bugs ([96d45e3](https://github.com/varletjs/varlet/commit/96d45e39c3e7fb5f8a28d3fe24a52ecc03217dce))
* **time-picker:** fix the bug of touchmove and wrong handleStyle ([7383396](https://github.com/varletjs/varlet/commit/7383396ed318e9e3be4fc3e703f4333d50a442a1))
* **ui/popup:** 重写example ([dd4efa8](https://github.com/varletjs/varlet/commit/dd4efa8cfdca28e2ac39a82ad02d2123b34a2518))
* **ui/row col:** 修复offset偏移问题 ([ebd3986](https://github.com/varletjs/varlet/commit/ebd39863f771e928390d71108eec360a24df935d))
* **ui/select,option:** 修复了v-model失效的问题 ([bf72234](https://github.com/varletjs/varlet/commit/bf72234847446816e2a7075f89a6b1f8f8b1227f))
* **ui/skeleton,button,ripple:** 完成skeleton button ripple的文档编写 ([846ffe9](https://github.com/varletjs/varlet/commit/846ffe990b8c755d033843bea3c30ccb8da7e491))
* **ui:** counter原型完成 ([d7f5a52](https://github.com/varletjs/varlet/commit/d7f5a526ff44cc49323f498836d192a75a08745c))
* **ui:** menu重构完成 文档编写完成 ([6bd43ca](https://github.com/varletjs/varlet/commit/6bd43cad39129c82ad3bbafdcda8165dc11dc7be))
* **ui:** 修复select 在multiple chips模式下 无法关闭chip的bug ([8015120](https://github.com/varletjs/varlet/commit/80151200c30ab3dc70289c78d2ca6687916f7836))
* **ui:** 修订文档 ([9827ca8](https://github.com/varletjs/varlet/commit/9827ca884333f8f3bfd8024106e65cbcead70ac8))
* **ui:** 增加parse时间格式的工具函数 ([5851cbb](https://github.com/varletjs/varlet/commit/5851cbb02e9ff8455f07db42a0f47b61110f2fa4))
* **ui:** 移除menu缩放动画 ([1566535](https://github.com/varletjs/varlet/commit/1566535a3ceb97dcb9f5fc3efdc258252e547833))
* **ui:** 重构dialog 完善文档 ([0ba2eb1](https://github.com/varletjs/varlet/commit/0ba2eb11081babfc4d48539b6661de3610c1fe77))
* **ui:** 重构menu 重写menu example ([edacc76](https://github.com/varletjs/varlet/commit/edacc762427eaf1c77614209f636f18bde5b33b8))
* **varlet-icons:** add icon ([6d5f8f2](https://github.com/varletjs/varlet/commit/6d5f8f222d5e7b7a279aa2b0c0e797b03dbcea35))
* **varlet-ui:** error report in modification ([f8b9020](https://github.com/varletjs/varlet/commit/f8b90205837ea059df2f626f4fe9fe2c25e994a7))
* **varlet-ui:** modify phone size ([9e92861](https://github.com/varletjs/varlet/commit/9e92861d4fbfd562edbdaf67dd14154e6092b01e))


### Features

* add declaration files ([a20cddb](https://github.com/varletjs/varlet/commit/a20cddb6fe173493f28f26093578cba5fb21e79b))
* add declaration files ([6eeb1a3](https://github.com/varletjs/varlet/commit/6eeb1a343b3c8bea5ced8361b454fb6e45cb7de7))
* add less variable of time-picker, date-picker ([28f6131](https://github.com/varletjs/varlet/commit/28f6131924c13c38fbfe2b97ded4254b51735247))
* add less variables of cell, back-top, pull-refresh, progress, switch, slider, index-bar ([ef9750d](https://github.com/varletjs/varlet/commit/ef9750d717a37b6b7c9ca9476a39561775c37dfd))
* add less variables of step, collapse and define cubic func ([2a8be2d](https://github.com/varletjs/varlet/commit/2a8be2d822ff137f1dd49661f76f63c4ecd68256))
* countdown ([f3fd177](https://github.com/varletjs/varlet/commit/f3fd17770fe367cdfeb41023928f90dc27a3983d))
* **countdown:** i18n and refactor the way of formatting ([7be2461](https://github.com/varletjs/varlet/commit/7be2461b6692e285c4975fd1880c145d35907e5c))
* **loading:** i18n ([9c2240d](https://github.com/varletjs/varlet/commit/9c2240d419c1c1c63379eef579426560b2be2d45))
* **slider:** docs and i18n ([3aab17b](https://github.com/varletjs/varlet/commit/3aab17b3e2163477944159d515e13be68b799dcf))
* **snackbar:** call the snackbar function directly ([7f486c8](https://github.com/varletjs/varlet/commit/7f486c8ed622346e9cd9bec0d8c57f36f2a077ef))
* steps ([4a70c31](https://github.com/varletjs/varlet/commit/4a70c31c694ee5c2365b5038df72ca5831ca31df))
* **ui/row ui/col:** 新增row col组件 ([8b0ee5f](https://github.com/varletjs/varlet/commit/8b0ee5fde3d5db33f69c9ad532e660b4293bdad5))


### Refactoring

* **badge:** optimize code ([1f5dd96](https://github.com/varletjs/varlet/commit/1f5dd969a3124f7992d68129949ca20b17fb677c))
* **cli/site:** restore ([524caa9](https://github.com/varletjs/varlet/commit/524caa922ab530c0c4480132b27a92f13e05807d))
* **cli/site:** 修改站点手机 ([e10a7d1](https://github.com/varletjs/varlet/commit/e10a7d15d1d5bd90f439b9770699e3cc8f400c19))
* **date-picker:** modify button prop and use toNumber to convert value type ([190e722](https://github.com/varletjs/varlet/commit/190e7224c08395edfd3e8789aa09876cfaa6e3a8))
* **date-picker:** optimize buttonProps ([8aa8176](https://github.com/varletjs/varlet/commit/8aa8176b4d70301b2d9633296e6b7876a9110cb0))
* **date-picker:** optimize code ([a0bc3fe](https://github.com/varletjs/varlet/commit/a0bc3fe325af6e74b666fc28687b9b633d385aa0))
* extract public code to useForm ([3e27ead](https://github.com/varletjs/varlet/commit/3e27eadd307ec16e05cb389c15185ed85f81feb5))
* **index-bar:** optimize components pass values and add scrollTo method, onClick prop ([9b795ea](https://github.com/varletjs/varlet/commit/9b795ea3d7a8f9f7e609f88a78ab67a8ce788311))
* rename expansion-panels to collapse and extract public code ([8d14e9c](https://github.com/varletjs/varlet/commit/8d14e9c581fc8af86c10ef8eadf92a82f530e1c7))
* rename isBaseObject to isPlainObject ([1b915c0](https://github.com/varletjs/varlet/commit/1b915c02d87d7531e3b6888e7c58ed66749dd543))
* **site:** add media query ([1300976](https://github.com/varletjs/varlet/commit/1300976b5883b5718934cec7db1e5df96585e901))
* **site:** how to display pages in different types ([bb9bb77](https://github.com/varletjs/varlet/commit/bb9bb773b54e0b498172dd397aa4d7c1567385ba))
* **site:** modify font style ([94a6db3](https://github.com/varletjs/varlet/commit/94a6db3b448dacfbf25f9f2878d952f685ffb113))
* **site:** modify language switch ([7f344c8](https://github.com/varletjs/varlet/commit/7f344c80d8eb9f0e06171315abb888d6df929ab6))
* **site:** modify navigation bar positioning ([29717c6](https://github.com/varletjs/varlet/commit/29717c673a26515d43e3fcba6493905b0f25f6f6))
* **site:** modify page interaction logic ([da6a6dc](https://github.com/varletjs/varlet/commit/da6a6dc1aa60fd05dbfe6783ee346a71ce827f8d))
* **site:** modify some styles ([f1cb92c](https://github.com/varletjs/varlet/commit/f1cb92ce289712713401ed7a35b1951d65371f3c))
* **site:** style site ([e47d28e](https://github.com/varletjs/varlet/commit/e47d28ea31f972cfe3ec4559b734f92399e45bdc))
* **site:** style site ([165c2e8](https://github.com/varletjs/varlet/commit/165c2e82336c19d0a2e039c215595704d96a90da))
* **site:** style site ([f15a532](https://github.com/varletjs/varlet/commit/f15a5323545ae908f9e6bcb73271d81933338b0f))
* **site:** style site ([16a535d](https://github.com/varletjs/varlet/commit/16a535d2cbbbaa7c8366374887413789417de649))
* **step:** optimize code ([c71299d](https://github.com/varletjs/varlet/commit/c71299df11265d55a99bb973f1ef68dbe3b6ed83))
* **time-picker:** optimize code ([5a7a15c](https://github.com/varletjs/varlet/commit/5a7a15c2147d2584bc63ee488e81d7a36cb5e625))
* **ui/checkbox checkbox-group:** 重构checkbox checkbox-group并完善文档 ([c6def87](https://github.com/varletjs/varlet/commit/c6def87bbea0728c98c612ac020b1cdd998e3cfc))
* **ui/counter:** 重构counter并完善文档 ([2333083](https://github.com/varletjs/varlet/commit/23330835e4361a9b3d3876ed5e9903c3b63408bd))
* **ui/select option:** 重构select option ([b2dad1f](https://github.com/varletjs/varlet/commit/b2dad1f3282143518006de96df185b966e81dacf))
* **ui/tabs tab tabs-items tab-item:** 重构tabs ([605cfcf](https://github.com/varletjs/varlet/commit/605cfcf4d02715042c85cf0b34c33615500122ce))
* **ui/uploader form:** 重构uploader form并完善文档 ([9240b7d](https://github.com/varletjs/varlet/commit/9240b7d0ee4f0bd5252ba2813e9a398d57722bb3))
* **ui/utils:** 提取useForm到form组件里 ([a8b56fc](https://github.com/varletjs/varlet/commit/a8b56fc5747460c1a0451304cebf9c98bbdb8125))
* **varlet-ui:** modify document format ([0d6f32d](https://github.com/varletjs/varlet/commit/0d6f32d8ea2618e139efa20104546ebc3e189db2))


### Reverts

* **cell:** revert attr position ([01b690f](https://github.com/varletjs/varlet/commit/01b690f21eb2823e9ec52f81ac69c35f3fb642f9))
* press wrong ([bfe9ee8](https://github.com/varletjs/varlet/commit/bfe9ee8ae7d618c7baec0ddf2c120c6b8e2eae93))

# [0.8.0](https://github.com/varletjs/varlet/compare/v0.7.0...v0.8.0) (2021-02-26)


### Bug Fixes

* add icon and modify icon style ([3080c8c](https://github.com/varletjs/varlet/commit/3080c8c8878d5606e7ee310c81caadc020092231))
* add icon for snackbar and fix snackbar clear function ([56f322e](https://github.com/varletjs/varlet/commit/56f322e7be2d594f8e8ffdcce7a3d735edb3d191))
* add removed code ([8c9ba91](https://github.com/varletjs/varlet/commit/8c9ba9112b42dd301a4387279f9017a7c78b5c5f))
* add sticky prop ([6ae504f](https://github.com/varletjs/varlet/commit/6ae504fc7f1e31c1c9bf4637bbe40f22d5ee0396))
* add url-loader and build icons ([c4c219a](https://github.com/varletjs/varlet/commit/c4c219a246722cde4d4f60f58b45b223977eba1f))
* **all package.json:** 修订版本 ([c6fc097](https://github.com/varletjs/varlet/commit/c6fc09740cda2fb121485e41d01caab082633e2e))
* **cli ui/tabs ui/tab:** cli修订依赖版本 tabs tab通信完成 切换效果完成 ([44c9495](https://github.com/varletjs/varlet/commit/44c9495469b99d49343f0a20ecf30d406d76e844))
* **cli,ui:** 支持组件库,文档i18n ([b76e664](https://github.com/varletjs/varlet/commit/b76e66474ae48fffe0722650c4d03499b127aab5))
* **cli:** webpack4.x -> 5.x ([967b63a](https://github.com/varletjs/varlet/commit/967b63a7294058e91dabe0eb27e132c0a3a33baf))
* **cli:** 修复windows template highlight 编译异常 ([babb72d](https://github.com/varletjs/varlet/commit/babb72d8169d8918bdd09c289227a60b3659f415))
* **cli:** 增加模版高亮 默认值描述 ([847ae41](https://github.com/varletjs/varlet/commit/847ae4173634cac959783d4d27c4d4a3b4a6908b))
* **date-picker:** modify varible name ([e282a91](https://github.com/varletjs/varlet/commit/e282a91df0bf5bbf9ea653bd18d961447e7d4e0f))
* **date-picker:** remove ts error of dayjs ([68e9ff5](https://github.com/varletjs/varlet/commit/68e9ff52951bb80f25dccced98072387e6491fde))
* **expansion-panels:** add matchIndex and watch modelValue to update ([cdd7584](https://github.com/varletjs/varlet/commit/cdd7584a340a18241e9995391973657101305d07))
* fix snackbar bugs ([0f05496](https://github.com/varletjs/varlet/commit/0f054960a95cbe992d39bdd87f3571bdf5f706e6))
* **merge:** merge code ([c4af410](https://github.com/varletjs/varlet/commit/c4af4102e8435663c9fafd3c0f2f3ae0678ce968))
* modify componentName ([206a3c0](https://github.com/varletjs/varlet/commit/206a3c04938cd3f21c7f495989e9c8bb7aa118b0))
* modify execution timing ([d3c66bb](https://github.com/varletjs/varlet/commit/d3c66bb68fc12988dbfd22b58f6c64ac6f9818e3))
* modify name of import loading ([0b9d7e4](https://github.com/varletjs/varlet/commit/0b9d7e48187eb7a7c49d0d6eac708f30070b5e49))
* modify some style ([ee7be71](https://github.com/varletjs/varlet/commit/ee7be710ad1ff0b3d8b9fe349726b5c271e2d21d))
* modify style ([72d28b3](https://github.com/varletjs/varlet/commit/72d28b35ecbd1b8bfa2d1a2406e566e1b346d1ea))
* modify ts to js of example ([d6d269f](https://github.com/varletjs/varlet/commit/d6d269f4d159c3cb6bea7605424ab8baf52db6a5))
* modify type ([b9dd910](https://github.com/varletjs/varlet/commit/b9dd910a3845acbd449d3d93190436273ba25070))
* **progress:** modify default track color ([a853bb1](https://github.com/varletjs/varlet/commit/a853bb1d2dd588814c1622a878cdbeec9f1d3098))
* **pull-refresh:** modify default style ([9b78580](https://github.com/varletjs/varlet/commit/9b78580080d0bfeea2bbe3d2398290bd5b3e98b5))
* rewrite emulator ([9215a83](https://github.com/varletjs/varlet/commit/9215a8343bf9d8cd6fd2c271358f53dd6d98a563))
* **root ui/utils:** 创建了项目依赖统一安装脚本 优化了父子组件通信 ([a6bba67](https://github.com/varletjs/varlet/commit/a6bba67506fc0354ff7ecc12dde34df19223e016))
* **root:** 增加less文件的prettier格式化规则 合并代码 ([e74af2c](https://github.com/varletjs/varlet/commit/e74af2cd7fc0714a1aa4e7d80a7e2d6bdefaf587))
* **root:** 移除了ui/coverage,hightlight的版本控制 ([0c5893d](https://github.com/varletjs/varlet/commit/0c5893d9f04fe35e105167a31540c9d1408ec596))
* **root:** 移除单元测试统计的stylelint ([8b86ee3](https://github.com/varletjs/varlet/commit/8b86ee303ede7f0070829f6de53c188467194bdb))
* **scripts/bootstrap:** 修复命令 兼容macos ([32f61b2](https://github.com/varletjs/varlet/commit/32f61b2352d64aafae19694da380614cc314e8e5))
* **snackbar:** fix zIndex and loading ([aaf2459](https://github.com/varletjs/varlet/commit/aaf245907ab331cbeb4c2dba3783e233745a88f6))
* **snackbar:** modify switch mode of icon ([d8c943a](https://github.com/varletjs/varlet/commit/d8c943a9a7755ddddb716856466ede707b096fdc))
* **ui/dialog picker:** 优化close方法 ([5b426ab](https://github.com/varletjs/varlet/commit/5b426abdbd2cb9fee62dd88842a865b61498f263))
* **ui/form, checkbox-group checkbox select input:** 抽离了form-details useValidation ([53f9cde](https://github.com/varletjs/varlet/commit/53f9cde793fc75ee8170baed6deb63bba25e16be))
* **ui/icon ui/image ui/lazy:** 增加lazy的处理状态 icon原型完成 增加image的load error监听 ([661b111](https://github.com/varletjs/varlet/commit/661b111d75061d434d480256b6977908a6dc8ca2))
* **ui/icon:** icon name支持图片地址 ([a5bcb49](https://github.com/varletjs/varlet/commit/a5bcb49d51c7acebf2fe4f515215cc1376fc66f4))
* **ui/icon:** icon name支持图片地址 ([0884dd7](https://github.com/varletjs/varlet/commit/0884dd7f5bf59fc8b72f363a6e42e9ac23881822))
* **ui/icon:** 增加复制icon功能 ([5282655](https://github.com/varletjs/varlet/commit/52826554b46d7121a1209a471be9e6242c8c1167))
* **ui/input:** input 原型完成 ([d945477](https://github.com/varletjs/varlet/commit/d945477086414fe6a1fb9a24c811e0ac6f8df264))
* **ui/input:** input 默认trigger方式修改为 onInput onClear ([bbaed93](https://github.com/varletjs/varlet/commit/bbaed93f93bdea3fc938afc43517c8af4c79a9a7))
* **ui/input:** input增加异步校验功能 ([da0c5f0](https://github.com/varletjs/varlet/commit/da0c5f0feb40501165369e3f51023a56f56aacb4))
* **ui/input:** 修复line在error状态下没变红色的BUG ([7f8298d](https://github.com/varletjs/varlet/commit/7f8298d2e9c5ea77d81602bced2e2789bfec5d85))
* **ui/list:** list原型完成 ([669590e](https://github.com/varletjs/varlet/commit/669590e460c82f457a73594a518e02c05a1138eb))
* **ui/picker dialog:** 优化单例模式流程 ([0c78a72](https://github.com/varletjs/varlet/commit/0c78a72f7d3190a001cad49da71064dd2c4a9862))
* **ui/picker, dialog:** 优化单例流程 ([4ca25a2](https://github.com/varletjs/varlet/commit/4ca25a2385667670267e400cddfd560191ec4670))
* **ui/picker,dialog:** 修改成统一的单例模式 增加close方法 ([095b346](https://github.com/varletjs/varlet/commit/095b346d4ae314ac0e6db50c02baaa06f008a9c8))
* **ui/picker,popup,dialog:** picker命令式原型完成 ([6c12f71](https://github.com/varletjs/varlet/commit/6c12f71834b2fdccc0b0733917151facb2ebca01))
* **ui/picker:** 优化picker api ([42ee8bf](https://github.com/varletjs/varlet/commit/42ee8bf7254b53bd362e633472c04dfaed1cdee5))
* **ui/picker:** 优化代码 ([10f27b7](https://github.com/varletjs/varlet/commit/10f27b794a54cdee20fcb0577de6c781803fe99c))
* **ui/picker:** 创建工具栏 ([2ed6e8a](https://github.com/varletjs/varlet/commit/2ed6e8a0ced451aa695012bb39a2a2b791633fe9))
* **ui/picker:** 多列picker原型完成 ([e41f497](https://github.com/varletjs/varlet/commit/e41f497861647871b5a5d072d4cee4dcf471d050))
* **ui/picker:** 完成了多列模式的基本功能 ([882c014](https://github.com/varletjs/varlet/commit/882c014328fd992e3b7ca1d624123719595c7cb8))
* **ui/picker:** 级连模式完成 ([dcd55b9](https://github.com/varletjs/varlet/commit/dcd55b9076337db5b09393d482cdf28f47159b76))
* **ui/picker:** 设计了基本的样式和基本dom结构 完成了基本的滚动 ([9d9f1b9](https://github.com/varletjs/varlet/commit/9d9f1b93f80f0c8e33819da32c0f6b49984d6ca9))
* **ui/ripple:** 优化了ripple的动画 ([f219a14](https://github.com/varletjs/varlet/commit/f219a144b53140342460ef9e75eb5eab2020a4fd))
* **ui/ripple:** 水波纹会自行设置容器的 overflow position zIndex 并在波纹结束时进行还原 ([a112796](https://github.com/varletjs/varlet/commit/a112796ec48c5bab48e918843b3336606a8d8152))
* **ui/select utils/component:** select option组件原型完成 增加了inject前的provide key判断 ([7f7795a](https://github.com/varletjs/varlet/commit/7f7795a09ea5ee53c4821aff6cdfe67675aa9e2c))
* **ui/sticky:** sticky原型完成 ([8acff00](https://github.com/varletjs/varlet/commit/8acff00e2def9c062d2e767cecd320939bf3cfdd))
* **ui/sticky:** 修复number类型offsetTop失效的bug ([e7ac6bd](https://github.com/varletjs/varlet/commit/e7ac6bd0df0f6c0ff189b1f96a221d3ff9353043))
* **ui/sticky:** 增加scroll事件监听 ([19e1447](https://github.com/varletjs/varlet/commit/19e1447055a4f3e479435a61d9593e573275068e))
* **ui/sticky:** 粘性默认使用css的sticky属性进行帧数提升 不支持的浏览器降级成fixed模式 ([f43bdd3](https://github.com/varletjs/varlet/commit/f43bdd31eb2402560d36040e3f481bc524851242))
* **ui/swipe list:** 优化swipe list ([9439763](https://github.com/varletjs/varlet/commit/9439763b798ff929be905c7f05b71167939c3025))
* **ui/swipe, swipe-item:** 原型完成 ([9e7a45b](https://github.com/varletjs/varlet/commit/9e7a45b04eab9086fc2bb7c8c26f2c777ff12c25))
* **ui/swipe:** 修复了touching状态下autoplay没禁止的bug ([40fcb2e](https://github.com/varletjs/varlet/commit/40fcb2e2e5b7690605a0f6c47e81c9d4444be695))
* **ui/swipe:** 增加resize方法 ([a453b66](https://github.com/varletjs/varlet/commit/a453b66003ed60478e2f94d0f3ab8b8488031392))
* **ui/tabs tab tabs-items tab-item:** 优化了父子之间传值 增加resize方法 ([771b156](https://github.com/varletjs/varlet/commit/771b15699c98ffb6e5ecfcb2a777b04fcf0118a7))
* **ui/tabs ui/tabs-items:** 优化视图切换 增加tabs垂直布局支持 ([1f032ae](https://github.com/varletjs/varlet/commit/1f032ae6f084ff8b60c239e2af2b6315b3b864b7))
* **ui/tabs ui/tab:** tabs tab原型完成 ([01d6330](https://github.com/varletjs/varlet/commit/01d633031a56f4d593a85613a680ed244f49fb2c))
* **ui/utils ui/tabs tab tabs-items tab-item:** 优化组件通信 ([487d751](https://github.com/varletjs/varlet/commit/487d7516862042f2abee7ea314a30f6e7d33f118))
* **ui/utils:** 修改了获取滚动容器的实现 ([9cd5a23](https://github.com/varletjs/varlet/commit/9cd5a237927cdd096b92f3388cb58ba3805e19ca))
* **ui:** ui/input,checkbox,checkbox-group,radio,radio-group原型完成 优化父子组件通信 ([3af4a62](https://github.com/varletjs/varlet/commit/3af4a6205b8a4c1a2f77decdfe4382f0fc9dc24d))
* **ui:** 增加单元测试命令 测试覆盖率统计 ide高亮支持 优化cli代码可读性 ([91882c6](https://github.com/varletjs/varlet/commit/91882c65349b83140598612fef650330bbf57d56))
* **恢复list:** 恢复被删除的ui/list ([b2fd79e](https://github.com/varletjs/varlet/commit/b2fd79ed4818cb36b76cedb36cd6b9c97124c206))
* **恢复list:** 恢复被删除的ui/list ([4e52780](https://github.com/varletjs/varlet/commit/4e527801594edba24be27fbd76b3946f182748d1))


### Features

* add indexbar option ([456095b](https://github.com/varletjs/varlet/commit/456095bb05efc9c019ceac87e1003d8450c7369b))
* add rate ([dffc1dd](https://github.com/varletjs/varlet/commit/dffc1ddb710d3630f866a4199aaee97fb2be630e))
* add rate ([bdcccc2](https://github.com/varletjs/varlet/commit/bdcccc2ae24fa17668f0a9a169e68b1d196cba12))
* backTop ([efaf596](https://github.com/varletjs/varlet/commit/efaf5962638cdc3a783ad5fbd2c6b107b0843a56))
* **button:** add forbidripple prop ([092c57d](https://github.com/varletjs/varlet/commit/092c57d4990f1ca0296c955323a6595d7003a2ce))
* cell ([c8e8a58](https://github.com/varletjs/varlet/commit/c8e8a58fe29024413bd9811d407fad7afc8332c7))
* date-picker ([bcfa3d2](https://github.com/varletjs/varlet/commit/bcfa3d2e6d1112d98d4c98d7fdd2ad5e786fc06e))
* expansion-panels ([61c2694](https://github.com/varletjs/varlet/commit/61c26946785be0ea40151ae29c62a7dc888ed317))
* **expansion-panels:** add example ([8ef77ac](https://github.com/varletjs/varlet/commit/8ef77ac9d687bb46a897deca6e497660e75538f4))
* finish indexbar ([923aa37](https://github.com/varletjs/varlet/commit/923aa37e9e80e4247b39497a65653893250649bd))
* indexbar ([650c174](https://github.com/varletjs/varlet/commit/650c174be8cce0a3213f9bb07bce89c8db0ebfcd))
* **loading:** add circle ([ee1f020](https://github.com/varletjs/varlet/commit/ee1f0201ab468e17668267d33de8414c54b06cc6))
* pull-refresh done ([152c90c](https://github.com/varletjs/varlet/commit/152c90cd94b535edf8305d6fa0b085bc75ef3a89))
* pullRefresh ([8669e0b](https://github.com/varletjs/varlet/commit/8669e0bf76395db657d50acf059fba39faac4e4b))
* slider ([d2ac037](https://github.com/varletjs/varlet/commit/d2ac037ba0f15978cceab3dfbfc4e7710a2de8e8))
* **slider:** add validation ([a6c4e60](https://github.com/varletjs/varlet/commit/a6c4e602814ad94d73fcac8c7b606c179e5996ac))
* **snackbar:** add clear ([aebe81b](https://github.com/varletjs/varlet/commit/aebe81ba23504eee0633d3aa1b6e574e3a8d3d4c))
* switch ([86729d7](https://github.com/varletjs/varlet/commit/86729d7aa5ee8b732a11582aa7cc9c59a0a81102))
* **switch:** add validation ([68aabef](https://github.com/varletjs/varlet/commit/68aabef30ae118651bde9f8313ae54f152f97bda))
* time-picker ([40048a4](https://github.com/varletjs/varlet/commit/40048a4ad7963aae926bf3f66c4ba6804e8308c7))


### Performance Improvements

* **cli:** 优化compiler编译速度 ([20df4e1](https://github.com/varletjs/varlet/commit/20df4e18819cc43010cbb3223b980dc140eb5585))


### Refactoring

* **date-picker:** modify '...' to Array.from and remove .default ([92926c8](https://github.com/varletjs/varlet/commit/92926c85eba742172922a5b21249a11b24a387ad))
* **date-picker:** optimize code readability ([1e6bcc3](https://github.com/varletjs/varlet/commit/1e6bcc32f5fd514254a0c0c2d8ed5b58b7abe3a9))
* **date-picker:** optimize code readability ([c49da55](https://github.com/varletjs/varlet/commit/c49da5588ba84bd98fe25dbbb83c2c56356e7280))
* modify the ripple of rate ([cdf9f78](https://github.com/varletjs/varlet/commit/cdf9f783ee97bc34545d62e0223db6e7f4742475))
* simplify the code ([5959bd4](https://github.com/varletjs/varlet/commit/5959bd47731bca8ceab2c1bdca493661926cf0e4))
* **site:** modify style ([c597e4d](https://github.com/varletjs/varlet/commit/c597e4d4558c8051abf5beb30486baeee24065a3))
* **slider:** remove duplicate code ([beee1ac](https://github.com/varletjs/varlet/commit/beee1acf6ea32c5f3755793f0fb2b309c05939ba))
* **snackbar:** modify the way of props are called ([59b0ca4](https://github.com/varletjs/varlet/commit/59b0ca4c0781b02f8ecab320eaf15c7d49773b3a))
* **snackbar:** move snackbar-core in snackbar ([dc7d417](https://github.com/varletjs/varlet/commit/dc7d417589c9d2cb76718fd076439af4f53940aa))
* **switch:** rename disable props ([21a9f48](https://github.com/varletjs/varlet/commit/21a9f48550a0b5a7fa3ae656c45dd043d9d4530c))

# [0.7.0](https://github.com/varletjs/varlet/compare/v0.5.13...v0.7.0) (2020-12-25)


### Bug Fixes

* add class for transition-group ([75e3df6](https://github.com/varletjs/varlet/commit/75e3df66067c26fb4eaa9c17d549a2e59501e536))
* add isDeclarative for snackbar ([a156647](https://github.com/varletjs/varlet/commit/a156647f2917e6f82b069557f851844e6647a0a5))
* add margin for loading text and detection componentName ([b42046e](https://github.com/varletjs/varlet/commit/b42046e7538d8b05b61b47085446f73c9c46a1b3))
* add typescript type(App) ([4d49a7b](https://github.com/varletjs/varlet/commit/4d49a7bde63167b93c144badc353d0004af91109))
* **cli/compiler:** 修复cjs编译bug 增加编译不同模块标准库css,less入口文件 ([226bc04](https://github.com/varletjs/varlet/commit/226bc0426f217e834512990edf78077f92fbed78))
* **cli:** 修改.vue文件编译逻辑 ([5e2e64a](https://github.com/varletjs/varlet/commit/5e2e64a48acdcf81ba446acc668ebbb32d519ce9))
* **cli:** 重构部分代码 ([e4840dc](https://github.com/varletjs/varlet/commit/e4840dc59c5087a007d819a0f8db9db795f234a9))
* **commands:** modify indexTemplate of create ([48a0687](https://github.com/varletjs/varlet/commit/48a068701253ceeaca11937a24251c5f5712d435))
* fix style of snackbar ([2858e3e](https://github.com/varletjs/varlet/commit/2858e3e972fea79a49b8efa9757235a97e385392))
* **icons:** 子包@varlet/icons完成 svg待选 ([76c8cbd](https://github.com/varletjs/varlet/commit/76c8cbd9ff7494e442e6a0edcaed4e9e603905da))
* **loading:** remove text ([86ec547](https://github.com/varletjs/varlet/commit/86ec5475af3d98e523cb1ddf81b42f830e9b4d82))
* modify loading docs and example ([66be153](https://github.com/varletjs/varlet/commit/66be153e324c1378e80ee4ab94c0c7609ddd936e))
* modify size and animation of loading ([63eb392](https://github.com/varletjs/varlet/commit/63eb392b01a46b469b1f9944f364970a64e686bb))
* remove console ([675f910](https://github.com/varletjs/varlet/commit/675f910b8639d9f985c53fd43f8804e30b101029))
* **snackbar:** add type definition ([a3283ff](https://github.com/varletjs/varlet/commit/a3283ff7f4e2f32ff55ced1a8d2b54d885df4be8))
* **snackbar:** modify default duration ([520cf47](https://github.com/varletjs/varlet/commit/520cf47bfab6effec9e4bf64baf759b82f5b0881))
* **snackbar:** modify position prop ([2862958](https://github.com/varletjs/varlet/commit/2862958021311cdd16eb3f540570a9351438b2d6))
* **ui/image:** image原型完成 ([97fcc83](https://github.com/varletjs/varlet/commit/97fcc8333ef1648dd82fe2b34ab284cc753600b8))
* **ui/lazy,skeleton:** 修改了skeleton样式 取消了lazy尝试请求的请求数参数 ([df1c8e1](https://github.com/varletjs/varlet/commit/df1c8e1ee6ef1d5db88ff2a4e50dc1a42ff224a7))
* **ui/lazy:** lazy原型完成 ([e332fa8](https://github.com/varletjs/varlet/commit/e332fa86eed8f6d1598473ba19b023a19c7ed54b))
* **ui/lazy:** 修复CacheInstance类型错误 ([1573b56](https://github.com/varletjs/varlet/commit/1573b5614099fcc2da18c440dd1d27a332076adb))
* **ui/lazy:** 修复了lazy在兼容模式下 图片从视口外操作到视口内没有进行check的bug ([8af34d0](https://github.com/varletjs/varlet/commit/8af34d0f0aa8b2f36002e43657de130095871340))
* **ui/lazy:** 修复了部分情况下图片update重复check的bug ([f8fcf78](https://github.com/varletjs/varlet/commit/f8fcf7892a9b6b37c5400d49a931fbad7cbb631b))
* **ui/lazy:** 增加1px像素占位 增加图片URL缓存 ([865a10c](https://github.com/varletjs/varlet/commit/865a10c7e51b0308c99d7387ab5740c7843e31b1))
* **ui/lazy:** 增加局部滚动的案例cover ([c24820a](https://github.com/varletjs/varlet/commit/c24820a97d59fe2a97a9902afbc8f09615e99897))
* **ui/lazy:** 增加绑定事件配置 ([64a95cb](https://github.com/varletjs/varlet/commit/64a95cb0777cbf695bfd6d0269a344af4e6ae813))
* **ui/styles:** 修改common.less中的状态名 ([8e30223](https://github.com/varletjs/varlet/commit/8e302236c8d6f90e042eaa5deffcdfb12a4958dd))
* **ui:** button原型制作中 已完成基本type size color基本交互 ([5d528ea](https://github.com/varletjs/varlet/commit/5d528ead4d3f13df3d70ee95b837cd819ef4d1e4))
* **ui:** button原型完成 ([cdf32e5](https://github.com/varletjs/varlet/commit/cdf32e5f8a1e431fa052684f828d0dbceab46f96))
* **ui:** menu组件原型完成 重构button popup dialog skeleton的props ([09a57b1](https://github.com/varletjs/varlet/commit/09a57b1d692eeab909ab0c1e2672d1095f2df12e))
* **ui:** popup dialog原型完成 ([4c3da72](https://github.com/varletjs/varlet/commit/4c3da72d776d682c4b1be1b96e445076f53012c1))
* **ui:** snackbar index.ts重构 ([a76a0be](https://github.com/varletjs/varlet/commit/a76a0be18dab5fd317d2011704764f4fe1ad4e98))
* **ui:** snackbar 解决动画问题 ([da87973](https://github.com/varletjs/varlet/commit/da87973acb1b44b194459d9cda76bb31da5227ba))
* **ui:** 修复类型问题 ([10ebe7a](https://github.com/varletjs/varlet/commit/10ebe7a90e9dfe71b5d87712f5bc55374213cff0))
* **ui:** 修改了ripple的定位 ([67fd0cc](https://github.com/varletjs/varlet/commit/67fd0cc137a0e64b9c7058477ad56d9c5ed2b6f9))
* **ui:** 增加button组件的loading参数校验 ([4d839c1](https://github.com/varletjs/varlet/commit/4d839c1297bf3069d5e8f299ff64d9eed822c853))
* **ui:** 增加ui全局上下文 适配teleport keep-alive 锁操作 ([d237750](https://github.com/varletjs/varlet/commit/d237750e8efa0ef33841239c0c2e19d745726abe))
* **ui:** 定义组件上下文对象 ([4e926c7](https://github.com/varletjs/varlet/commit/4e926c70fcbd49b848205709bcde00a93420bb98))
* **ui:** 按钮组件开发 ([4fddcbd](https://github.com/varletjs/varlet/commit/4fddcbda84737fb499e0adcc798b5a73f5cf55ea))
* **ui:** 添加@varlet/icons依赖 ([f32de8c](https://github.com/varletjs/varlet/commit/f32de8cd8936a4fee07ad4cb1506c1863730b51a))


### Features

* add button for menu ([e9e1860](https://github.com/varletjs/varlet/commit/e9e1860ccfb1f50624467c32d0ee2fba291a44f9))
* add chips ([ed1cc95](https://github.com/varletjs/varlet/commit/ed1cc95d8a41d064804ec04be43714bbb69ef9eb))
* add progress ([170d515](https://github.com/varletjs/varlet/commit/170d5150aa3dd43c2d2c13ad5c43a154f91749a2))
* add propsEmits for loading ([41bfdab](https://github.com/varletjs/varlet/commit/41bfdab7d298901cdbbcc77ae14326b765af5a8f))
* add touch emulater ([6836953](https://github.com/varletjs/varlet/commit/6836953943f38229b5b46361f30f077a00116db7))
* complete snackbar ([f7aa36b](https://github.com/varletjs/varlet/commit/f7aa36b27d232242ddc796a5550086ef2a75e94d))
* loading ([d93e481](https://github.com/varletjs/varlet/commit/d93e4812b18f8d4cb310797947416f8feeb97271))
* modify loading size ([321526c](https://github.com/varletjs/varlet/commit/321526c3290e431eb5dbd82891712acddde15839))
* snackbar ([ff3483d](https://github.com/varletjs/varlet/commit/ff3483d0a734ca822eb03b44710b20a7093f783a))


### Performance Improvements

* add validator for progress mode ([8eb9721](https://github.com/varletjs/varlet/commit/8eb9721cc4b4c7141a48efa285c2b383e8cab2e0))
* refactor snackbar ([fd58373](https://github.com/varletjs/varlet/commit/fd583733d6c85a60d2fc05f7613c59689fdabe1d))


### Refactoring

* modify site ([7ed1428](https://github.com/varletjs/varlet/commit/7ed1428d29be71b5a2c14caa57f64f65e88f6ba2))
* **snackbar:** change emits to props ([7fe8b7c](https://github.com/varletjs/varlet/commit/7fe8b7c62f3701c14836907d6677e01952f893bd))
* **snackbar:** optimize code ([ad8deec](https://github.com/varletjs/varlet/commit/ad8deecb3614dc5bdd4d4d60f5cb973af0b8ef83))

## [0.5.13](https://github.com/varletjs/varlet/compare/v0.5.10...v0.5.13) (2020-11-27)


### Bug Fixes

* **ui/package.json:** fix ([6bb1761](https://github.com/varletjs/varlet/commit/6bb1761adb7d25cd27d6ff38ffe3f483f219a4be))
* **ui/skeleton:** 修复row的迭代bug ([d1640ac](https://github.com/varletjs/varlet/commit/d1640ac6da277ef5023b0cfb136c5a0787d370cd))

## [0.5.10](https://github.com/varletjs/varlet/compare/v0.5.9...v0.5.10) (2020-11-27)


### Bug Fixes

* **cli ui:** 统一给每个包增加另一个style入口 方便babel-import-plugin解析 ([cd1ef49](https://github.com/varletjs/varlet/commit/cd1ef4957d9659c840d710bc423f44234d8340d2))

## [0.5.9](https://github.com/varletjs/varlet/compare/v0.5.8...v0.5.9) (2020-11-27)


### Bug Fixes

* **all package.json:** 修改了peer依赖 改成了依赖大于目标版本 ([294eced](https://github.com/varletjs/varlet/commit/294ecedce9e2f4bb85eea6556eac34e450818d05))

## [0.5.8](https://github.com/varletjs/varlet/compare/v0.5.7...v0.5.8) (2020-11-27)


### Bug Fixes

* **cli/site ui:** skeleton组件原型完成 文档完成 ([374100f](https://github.com/varletjs/varlet/commit/374100f2bcfaafd1ca0369b560e05ecde292de7d))

## [0.5.7](https://github.com/varletjs/varlet/compare/v0.5.6...v0.5.7) (2020-11-26)


### Bug Fixes

* **ui:** ripple指令原型完成 ([43f8665](https://github.com/varletjs/varlet/commit/43f8665e3254fe66b69ca542c9c5daa49a30cce4))

## [0.5.6](https://github.com/varletjs/varlet/compare/v0.5.5...v0.5.6) (2020-11-23)


### Bug Fixes

* **cli:** 启动生成varlet.config.js ([d8dfa5e](https://github.com/varletjs/varlet/commit/d8dfa5ef9ec48ab1c234db0a2b4e20baf3c8f934))

## [0.5.5](https://github.com/varletjs/varlet/compare/v0.5.4...v0.5.5) (2020-11-23)


### Bug Fixes

* **cli:** 修改ts-loader配置 allowTsInNodeModules ([cf65039](https://github.com/varletjs/varlet/commit/cf65039ca0da0021f52cdabecd61029e2abaf485))

## [0.5.4](https://github.com/varletjs/varlet/compare/v0.5.3...v0.5.4) (2020-11-23)


### Bug Fixes

* **cli:** tsconfig.json加入生产依赖 ([7c56dd2](https://github.com/varletjs/varlet/commit/7c56dd22f54001c503dabadd9e77392ce043ad10))

## [0.5.3](https://github.com/varletjs/varlet/compare/v0.5.2...v0.5.3) (2020-11-23)


### Bug Fixes

* **cli:** 把shim作为生产依赖 ([4e099d9](https://github.com/varletjs/varlet/commit/4e099d9c464795ddcc9047871020dfba7cfe6c85))

## [0.5.2](https://github.com/varletjs/varlet/compare/v0.5.1...v0.5.2) (2020-11-23)


### Bug Fixes

* **all changelog:** 修正版本号 ([af8f2b6](https://github.com/varletjs/varlet/commit/af8f2b65d01a436601a5ebfe076be1f75df95c5c))
* **添加tsconfig.json到cli的依赖列表:** tsconfig.json ([3e55747](https://github.com/varletjs/varlet/commit/3e55747cf3e9877ed30646d13dde35f7c6f0e0a5))

## [0.5.1](https://github.com/varletjs/varlet/compare/v0.6.0...v0.5.1) (2020-11-23)


### Bug Fixes

* **all packages/package.json:** 发包失败重新发包 ([849f9ae](https://github.com/varletjs/varlet/commit/849f9ae95f6ada7cb6e101d976826944bf1e15b3))

# [0.6.0](https://github.com/varletjs/varlet/compare/v0.5.0...v0.6.0) (2020-11-23)


### Bug Fixes

* add active style ([e23ecb2](https://github.com/varletjs/varlet/commit/e23ecb27e564ef761c3f9bd1588956dc0a0e4385))
* **cli:** 增加功能create命令生成单测模板 ([0a2cf55](https://github.com/varletjs/varlet/commit/0a2cf55042d18ed0889a2a44ac390eb8dffbf245))
* modify router path ([5451c55](https://github.com/varletjs/varlet/commit/5451c552072ad8f1693cf46e51499be0623db2f6))
* sentenced to empty ([2f21c5b](https://github.com/varletjs/varlet/commit/2f21c5b52753ac4b520c9cf8530b6b35dd2658f8))


### Features

* add config to globalProperties ([00e2ebf](https://github.com/varletjs/varlet/commit/00e2ebf5ee38e1cb2eb0638ad03d724c837eeb44))
* add example of checkbox ([6effb17](https://github.com/varletjs/varlet/commit/6effb177ade2f8e69a2756f9481829688c0f3961))
* add iframe and add style ([5086937](https://github.com/varletjs/varlet/commit/508693748e3f9ee574d4db33b9fd83bd57bd66b1))
* add markdon-loader ([7dc787b](https://github.com/varletjs/varlet/commit/7dc787bfc7719aeef3bdab263a6fffe267e2c9e7))
* add style of site ([b936468](https://github.com/varletjs/varlet/commit/b9364680cc6bd4952a2e01a62e4c897af8ff6b97))
* add test file and router ([fb6615c](https://github.com/varletjs/varlet/commit/fb6615c0d92fc086cd91824f4aa49750c0433526))
* connect nav and router ([0bc640f](https://github.com/varletjs/varlet/commit/0bc640f2cf2081abc378b5db8644d8edeb374763))
* **markdown-loader:** addcard-warpper ([38ec300](https://github.com/varletjs/varlet/commit/38ec3005e4fa523863bc853f67cc5398073f716d))


### Performance Improvements

* add .DS_Store ([a78828e](https://github.com/varletjs/varlet/commit/a78828e530f914d211213b115be3d5726225fea5))


### Refactoring

* merge config ([7ffc5b1](https://github.com/varletjs/varlet/commit/7ffc5b1743ab344074e24a0f5beaae31271e1403))
* modify the methods of automatic generated routes ([4dc7500](https://github.com/varletjs/varlet/commit/4dc750069215407a73adce4912cf8003653462ed))
* **代码重构,所有子包都有调整:** 代码重构，提升了编译效率，减轻了过度设计的部分 ([e0a6be2](https://github.com/varletjs/varlet/commit/e0a6be2b0f7ba3d7dd25a282bd50f0adc399fd30))

# [0.5.0](https://github.com/varletjs/varlet/compare/v0.4.0...v0.5.0) (2020-11-13)


### Bug Fixes

* **.gitignore:** 移除cli routes文件的依赖托管 ([1576643](https://github.com/varletjs/varlet/commit/15766436d3e9e3f16f527635b5fbc97349d39d13))
* **cli:** 移除typescript依赖 ([67cd726](https://github.com/varletjs/varlet/commit/67cd726ea0fbc72279e8c9a83b13d0bbc4803c6b))


### Features

* add auto create pc site route ([65cd41a](https://github.com/varletjs/varlet/commit/65cd41a085a22eee4c4cf0b39b3ba727939b4ed3))
* **cli:** 增加jest单测命令 一键执行所有单测文件 或是执行某一个组件的单测文件 ([b23bfee](https://github.com/varletjs/varlet/commit/b23bfeebf6be90f4e417e3210c3fc82976f59b73))


### Performance Improvements

* ignore varlet-cli/lib ([41cf49b](https://github.com/varletjs/varlet/commit/41cf49bb85aa7e620a7ce47d38d3a172d175ee24))

# [0.4.0](https://github.com/varletjs/varlet/compare/v0.3.2...v0.4.0) (2020-11-10)


### Features

* **cli:** 支持打包成umd ([af0645f](https://github.com/varletjs/varlet/commit/af0645f8bf648717bf8d616024ac612af4764a51))

## [0.3.2](https://github.com/varletjs/varlet/compare/v0.3.1...v0.3.2) (2020-11-09)

## [0.3.1](https://github.com/varletjs/varlet/compare/v0.3.0...v0.3.1) (2020-11-09)


### Bug Fixes

* **cli:** 修改.vue文件编译规则 ([71ab372](https://github.com/varletjs/varlet/commit/71ab37266132fa0771802aa57dbef1e6e3670e5a))

# [0.3.0](https://github.com/varletjs/varlet/compare/v0.2.1...v0.3.0) (2020-11-06)


### Features

* **cli:** 实现compile命令,可编译出es,commonjs规范两套发布代码|实现--watch文件监听,按需编译有改动的文件 ([a00695a](https://github.com/varletjs/varlet/commit/a00695a2f0dc66e7ee9674c6ee18e12583cf614b))

## [0.2.1](https://github.com/varletjs/varlet/compare/v0.2.0...v0.2.1) (2020-11-03)


### Bug Fixes

* **cli:** 修复了node_modules的依赖包没被webpack扫进去的bug ([128a0fa](https://github.com/varletjs/varlet/commit/128a0fa44609ef20d5a16d99a25307ccb34be927))

# [0.2.0](https://github.com/varletjs/varlet/compare/v0.1.7...v0.2.0) (2020-11-03)


### Bug Fixes

* **gitignore:** 修改gitignore ([0b51c3d](https://github.com/varletjs/varlet/commit/0b51c3d09e29bf4c54faaeac3373073982429ab7))
* **packages/varlet-cli/lib:** 移除了packages/varlet-cli/lib ([3d71b03](https://github.com/varletjs/varlet/commit/3d71b03746838a31fb8922eedda8770699fb6743))


### Features

* **packages/**:** 架构调整,实现varlet-cli dev build命令 ([1ca2cf6](https://github.com/varletjs/varlet/commit/1ca2cf636af766615d6e733d5c96ac2d2349b34f))

## [0.1.7](https://github.com/varletjs/varlet/compare/v0.1.6...v0.1.7) (2020-10-30)


### Bug Fixes

* **所有子包的package.json:** 移除了publicConfig ([1ce49db](https://github.com/varletjs/varlet/commit/1ce49db96acb99578517765b4751276d86c1c170))

## [0.1.6](https://github.com/varletjs/varlet/compare/v0.1.5...v0.1.6) (2020-10-30)


### Bug Fixes

* **lerna.json:** 修改lerna.json的publishConfig字段 ([a6ea83f](https://github.com/varletjs/varlet/commit/a6ea83fa70738d7d5d41db377f0f19671c23a755))

## [0.1.5](https://github.com/varletjs/varlet/compare/v0.1.4...v0.1.5) (2020-10-30)


### Bug Fixes

* **lerna.json:** 修改了lerna.json的public选项 ([831e521](https://github.com/varletjs/varlet/commit/831e5219eaa9628decafa53d8e97274c5900c408))

## [0.1.4](https://github.com/varletjs/varlet/compare/v0.1.3...v0.1.4) (2020-10-30)


### Bug Fixes

* **root package.json:** 修改主包package.json ([1ecfad0](https://github.com/varletjs/varlet/commit/1ecfad052da65abb7329dc5c4645717722366496))

## [0.1.3](https://github.com/varletjs/varlet/compare/v0.1.2...v0.1.3) (2020-10-30)


### Bug Fixes

* **所有子包的package.json:** 修改publicConfig字段 ([d711a57](https://github.com/varletjs/varlet/commit/d711a57f6307d8dd9b2f5b2b9a9a869a10d02f7d))

## [0.1.2](https://github.com/varletjs/varlet/compare/v0.1.1...v0.1.2) (2020-10-30)


### Refactoring

* **所有子包的package.json:** 修改private字段 ([9dc9c2a](https://github.com/varletjs/varlet/commit/9dc9c2aaa5ac389e38e788c59dffe5ec08134647))

## [0.1.1](https://github.com/varletjs/varlet/compare/v0.1.0...v0.1.1) (2020-10-30)


### Refactoring

* **所有子包的package.json:** 修改publishConfig的access字段为publish ([e8d5c32](https://github.com/varletjs/varlet/commit/e8d5c3235cbf1fa8b7476c6e6694609641188a25))

# [0.1.0](https://github.com/varletjs/varlet/compare/5913d0b1edb1d72e6c6439af1525a692291861ba...v0.1.0) (2020-10-30)


### Features

* **初始化仓库:** 初始化规范化配置 monorepo配置 ([5913d0b](https://github.com/varletjs/varlet/commit/5913d0b1edb1d72e6c6439af1525a692291861ba))


### Refactoring

* **root package.json:** 修正package.json版本号 ([35dc112](https://github.com/varletjs/varlet/commit/35dc112d00aae7d3ad7a1eaae32e36edbaea1aa0))
