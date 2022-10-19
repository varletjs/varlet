## [2.0.4](https://github.com/varletjs/varlet/compare/v2.0.3...v2.0.4) (2022-10-19)



## [2.0.3](https://github.com/varletjs/varlet/compare/v2.0.2...v2.0.3) (2022-10-15)


### Bug Fixes

* **config:** fix features merge strategy ([c3a378f](https://github.com/varletjs/varlet/commit/c3a378f9b43085888f5610dc739f45b28795e7e1))



## [2.0.2](https://github.com/varletjs/varlet/compare/v2.0.1...v2.0.2) (2022-10-13)


### Features

* **ui/image:** support title prop ([48462bb](https://github.com/varletjs/varlet/commit/48462bbf81d24e7558295e86ec543e6fed0a6d04))



## [2.0.1](https://github.com/varletjs/varlet/compare/v2.0.0...v2.0.1) (2022-10-13)


### Features

* **cli:** add defineConfig for type helper ([#721](https://github.com/varletjs/varlet/issues/721)) ([84579f4](https://github.com/varletjs/varlet/commit/84579f488a7ca800e083c97019b6f6fd785b9fa3))



# [2.0.0](https://github.com/varletjs/varlet/compare/v1.27.20...v2.0.0) (2022-10-11)


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


### Reverts

* revert "fix(cli/site): support custom description" ([b23e0d2](https://github.com/varletjs/varlet/commit/b23e0d2f2f3e8c44fb770b7089cdd5aa6ceb015e))
* revert "refactor(cli/site): adjust configurable item structure" ([493803b](https://github.com/varletjs/varlet/commit/493803b06a342a1b792ce7462633590365338176))



## [1.27.16](https://github.com/varletjs/varlet/compare/v1.27.15...v1.27.16) (2022-07-01)


### Bug Fixes

* **slider:** stop propagation when touch slider ([6b4bc18](https://github.com/varletjs/varlet/commit/6b4bc181e50ffb887b8f7bae8bd161dddaa4530f))
* **ui/snackbar:** remove position absolute in leaving animation's style ([#611](https://github.com/varletjs/varlet/issues/611)) ([18d5086](https://github.com/varletjs/varlet/commit/18d5086cc176929ad4abed1d257757305ea83afd))



## [1.27.15](https://github.com/varletjs/varlet/compare/v1.27.14...v1.27.15) (2022-06-20)



## [1.27.14](https://github.com/varletjs/varlet/compare/v1.27.13...v1.27.14) (2022-06-20)


### Bug Fixes

* add side-effects for tree shaking ([4fa8559](https://github.com/varletjs/varlet/commit/4fa85597ce0c7ed7c7335c17732cfc39dc7d6abe))


### Features

* add new package varlet-shared ([939d945](https://github.com/varletjs/varlet/commit/939d945d7a7b45b01b9784d22043c302b1753b4c))



## [1.27.13](https://github.com/varletjs/varlet/compare/v1.27.12...v1.27.13) (2022-06-17)


### Bug Fixes

* **back-top:** add inheritAttrs ([cce45e2](https://github.com/varletjs/varlet/commit/cce45e269cd431593e3703e20a8ae592cf20d7a1))
* **ui/types:** icon onClick's type ([d18d0ca](https://github.com/varletjs/varlet/commit/d18d0ca1de53b0b03f10d6daffc97711912fc141))


### Features

* **ui/select:** add boundary detection in select ([#606](https://github.com/varletjs/varlet/issues/606)) ([27eb0ea](https://github.com/varletjs/varlet/commit/27eb0eaf249c7b7faa8dad0dec47fa27e2a75c49))



## [1.27.12](https://github.com/varletjs/varlet/compare/v1.27.11...v1.27.12) (2022-06-10)


### Bug Fixes

* add default width ([09fe1cc](https://github.com/varletjs/varlet/commit/09fe1cc8b560d7c05f6b8f06daca61babb6c6012))
* **space:** add width when direction is column ([9108bfa](https://github.com/varletjs/varlet/commit/9108bfadfc761b1ce66191cc8e546d3edab840c4))
* swiperItem's type ([#602](https://github.com/varletjs/varlet/issues/602)) ([33a1488](https://github.com/varletjs/varlet/commit/33a1488f9b43a6f7a073f3dccf5257ebcbc5adfe))
* **ui/ripple:** ripple cannot be removed when the updated hooks trigger ([fc2fb08](https://github.com/varletjs/varlet/commit/fc2fb086c9cbdcb36003fe12993271cc27af2f4a))



## [1.27.11](https://github.com/varletjs/varlet/compare/v1.27.10...v1.27.11) (2022-06-01)


### Bug Fixes

* **cli/gen:** gen i18n files ([e97e869](https://github.com/varletjs/varlet/commit/e97e8695f02fe3a0971d831da93630386a36f1c5))


### Features

* **cli/gen:** add i18n for template and close [#590](https://github.com/varletjs/varlet/issues/590) ([6299780](https://github.com/varletjs/varlet/commit/6299780dfabc3aae421a7d381916dab0a4bb4ad8))
* **ui/input:** add autofocus of input ([#595](https://github.com/varletjs/varlet/issues/595)) ([fb9e026](https://github.com/varletjs/varlet/commit/fb9e0269dacb01e207ce548774fe96c65433a932))



## [1.27.10](https://github.com/varletjs/varlet/compare/v1.27.9...v1.27.10) (2022-05-24)



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



## [1.27.8](https://github.com/varletjs/varlet/compare/v1.27.7...v1.27.8) (2022-05-09)


### Bug Fixes

* **compileSiteEntry:** slash path for windows ([5170997](https://github.com/varletjs/varlet/commit/51709974d5b7c77bc9c7f37b09a79348a0ff9ca6))
* **ui/col:** fix logic for span & responsive setting 0 [#529](https://github.com/varletjs/varlet/issues/529) ([80da305](https://github.com/varletjs/varlet/commit/80da3058913b5300539184c2650eb709b5bb0e10))
* **ui/col:** fix span & responsive props when equal 0 [#529](https://github.com/varletjs/varlet/issues/529) ([a0831c3](https://github.com/varletjs/varlet/commit/a0831c3410d40cf5fd8b1f5795a930ac7d6aebdc))


### Features

* cli pages and homepage ([#531](https://github.com/varletjs/varlet/issues/531)) ([d723e36](https://github.com/varletjs/varlet/commit/d723e367dd006243d7bf0b2adb0611ae49e19d5f))
* finish the floating and land && optimize home page style ([#541](https://github.com/varletjs/varlet/issues/541)) ([76d6fad](https://github.com/varletjs/varlet/commit/76d6fadfe66fb0d9c2892666c309933d3a378c0e))
* **ui/picker:** add props textFormatter ([#522](https://github.com/varletjs/varlet/issues/522)) ([f735468](https://github.com/varletjs/varlet/commit/f735468dd5879f19a3f4285ab1ddf9629ddd3849))



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



## [1.27.6](https://github.com/varletjs/varlet/compare/v1.27.5...v1.27.6) (2022-04-23)


### Bug Fixes

* **pagination:** modify css style of disabled ([273bd6f](https://github.com/varletjs/varlet/commit/273bd6f0aced4b00b49af53733daef4d3a3e9dcb))


### Features

* **cli:** code example component support playground ([6763794](https://github.com/varletjs/varlet/commit/6763794d1d2bb7bc2ed9cb478311b85dd7c2bbd1))
* **markdown-vite-plugin:** add playground flag ([06f4394](https://github.com/varletjs/varlet/commit/06f43943ddeeb142d6fecf7bcb2d3fe49ac56b84))
* **markdown-vite-plugin:** add playground-ignore flag for code block ([07008bc](https://github.com/varletjs/varlet/commit/07008bcb033a7e0b3b1d275e9b847889ed5bd525))
* **playground:** add area.json to import map ([2320f4e](https://github.com/varletjs/varlet/commit/2320f4e6033715a045e8ddb051925654085ee0c5))
* **ui/picker:** add cascadeInitialIndexes prop ([#489](https://github.com/varletjs/varlet/issues/489)) ([c6f10bd](https://github.com/varletjs/varlet/commit/c6f10bd162b50006fbf34c1580de2d530ea768e3))


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

* **bottom-navigation:** new component bottom-navigation [#866](https://github.com/varletjs/varlet/issues/866)dc6ee ([ee48111](https://github.com/varletjs/varlet/commit/ee48111afa5a6dcb548a7d790915d6101a7cd555)), closes [#866dc6](https://github.com/varletjs/varlet/issues/866dc6)
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


### Reverts

* **ui/index-bar:** revert fix scroll getter function ([1b61cdd](https://github.com/varletjs/varlet/commit/1b61cddf53ebca76ad6d86240f25e154cb462b03))



## [1.26.6](https://github.com/varletjs/varlet/compare/v1.26.5...v1.26.6) (2022-03-14)


### Bug Fixes

* **date-picker:** fix touch event not trigger when button disable ([8a99a5c](https://github.com/varletjs/varlet/commit/8a99a5c23c677da0136085f7edaa9ad863779d02))
* **site:** fix app-bar transition error ([4efd4bf](https://github.com/varletjs/varlet/commit/4efd4bf4b565181ee2e687cee293435a23d4a441))


### Features

* **ui/uploader:** add a hide-list props for uploader components ([#335](https://github.com/varletjs/varlet/issues/335)) ([70bf77a](https://github.com/varletjs/varlet/commit/70bf77a0aed937006b4a06ce100eae45fb5f7cb6))



## [1.26.5](https://github.com/varletjs/varlet/compare/v1.26.4...v1.26.5) (2022-03-13)


### Features

* **date-picker:** suport touchable ([5868a11](https://github.com/varletjs/varlet/commit/5868a115e11b2e3638475857396c95957c6728d7))
* **ui/image-preview:** add extra slot ([8dc4d2d](https://github.com/varletjs/varlet/commit/8dc4d2d800b8ee61c8c7792a907c7d9369208ddc))



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



## [1.26.2](https://github.com/varletjs/varlet/compare/v1.26.1...v1.26.2) (2022-02-22)


### Bug Fixes

* support --ripple-color ([c5ded77](https://github.com/varletjs/varlet/commit/c5ded77c7be2dd8fcfa7eae24817fb18c3a29bf3))
* **ui/space:** fix space err with comment [#319](https://github.com/varletjs/varlet/issues/319) ([f2adc98](https://github.com/varletjs/varlet/commit/f2adc981030481fb218e608342a184c4d1e07588))
* **ui/space:** fix space v-for err ([c9d10e3](https://github.com/varletjs/varlet/commit/c9d10e3c5500f4ae5064be106b73c169dff010f3))


### Performance Improvements

* remove unuseful function call ([#316](https://github.com/varletjs/varlet/issues/316)) ([263a830](https://github.com/varletjs/varlet/commit/263a8305a5e3ec24a4b3c67db6dd2ed4dc5fdcca))
* **ui/divider:** remove unuseful function call ([129e47d](https://github.com/varletjs/varlet/commit/129e47dd7df8bfea17059180cb5fd041fef0809b))



## [1.26.1](https://github.com/varletjs/varlet/compare/v1.26.0...v1.26.1) (2022-02-14)


### Bug Fixes

* **site:** fix fold animation error when defaultFold set false ([e709af0](https://github.com/varletjs/varlet/commit/e709af094343ffac2002d63c5a883005bd3f82f8))
* **ui/list:** the fractional part of the detectorBottom when bottoming out overflows ([c8e0142](https://github.com/varletjs/varlet/commit/c8e01423d98b9bdcea825be35558f299932f753d))



# [1.26.0](https://github.com/varletjs/varlet/compare/v1.25.1...v1.26.0) (2022-02-08)


### Bug Fixes

* **playground:** fix primary color ([4b80e47](https://github.com/varletjs/varlet/commit/4b80e47d42948b8e67dbd7e23184431bbe51c521))
* **playground:** fix to relative path ([73834d0](https://github.com/varletjs/varlet/commit/73834d0070c0bd8833cb4e8d0b731b884a4874f7))


### Features

* **icons:** add new icon ([49c3d5e](https://github.com/varletjs/varlet/commit/49c3d5ed790132443415b0af4ca594adfef906ed))
* **site:** add playground logic ([24c542d](https://github.com/varletjs/varlet/commit/24c542dff259f91d427c5deaa79032cda53e4597))
* **ui/col:** add responsive layout ([4e314cb](https://github.com/varletjs/varlet/commit/4e314cb0f3ea0d5ac234d5987289ee33c19cfc69))


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



# [1.25.0](https://github.com/varletjs/varlet/compare/v1.24.11...v1.25.0) (2022-01-19)


### Bug Fixes

* **date-picker:** remove error when the initial value is undefined and close [#277](https://github.com/varletjs/varlet/issues/277) ([ede1eb1](https://github.com/varletjs/varlet/commit/ede1eb12ea2d2dcd0f24819a11369b47ac8825f7))
* **swipe:** support ssr ([007c3e6](https://github.com/varletjs/varlet/commit/007c3e65b37259b68343388bd45453c46bca30ea))
* **ui/app-bar:** support ssr ([3700eef](https://github.com/varletjs/varlet/commit/3700eef03ef33c53762fc677cde22ea41d669568))
* **ui/list:** remove isHidden function ([a4634e0](https://github.com/varletjs/varlet/commit/a4634e0d468b865264381fa31acb2a4af87e2a9a))


### Features

* **button:** add autoLoading prop ([67f4b40](https://github.com/varletjs/varlet/commit/67f4b40635d3452d74be6ce0a1abc5a423611950))



## [1.24.11](https://github.com/varletjs/varlet/compare/v1.24.10...v1.24.11) (2022-01-14)


### Bug Fixes

* **button:** add css cover for loading ([5c003cc](https://github.com/varletjs/varlet/commit/5c003ccb172e773fc369fc732df40f0df3499a7e))
* **pagination:** emit event when change pageSize and close [#279](https://github.com/varletjs/varlet/issues/279) ([f9a9be4](https://github.com/varletjs/varlet/commit/f9a9be4a628c30c8886f1398182be9313ef8c587))
* **ui/select:** fix select wrapWidth and offsetY display error with ssr [#276](https://github.com/varletjs/varlet/issues/276) ([6e396a3](https://github.com/varletjs/varlet/commit/6e396a3e51de9129121ab30e096805b17c6d7083))



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


### Reverts

* revert fix mobile style ([22d9da9](https://github.com/varletjs/varlet/commit/22d9da9beaf88fa1a29394bc07141e5ec3355c42))



## [1.23.11](https://github.com/varletjs/varlet/compare/v1.23.10...v1.23.11) (2021-12-10)


### Bug Fixes

* **card:** fix image css problem in card  ([#224](https://github.com/varletjs/varlet/issues/224)) ([498cb3c](https://github.com/varletjs/varlet/commit/498cb3c41f70ca265ab407cb9d4ed4100abf6c9f))
* **fix the offset problem when the divider is vertical:** remove transformY,use align-items: center ([5b10f08](https://github.com/varletjs/varlet/commit/5b10f08ef6e2ebdbae4c3e199b23e68a319181e2))
* fix types ([2d95d4c](https://github.com/varletjs/varlet/commit/2d95d4c53a8e106ef38d23b372e7f5583d7ef0d2))
* remove unused code ([b37f258](https://github.com/varletjs/varlet/commit/b37f25809adfc0a7e3e8a3ecf3085715c531aa7f))



## [1.23.10](https://github.com/varletjs/varlet/compare/v1.23.9...v1.23.10) (2021-12-01)


### Bug Fixes

* **ui/icon:** fix vertical align to bottom ([b2c4da9](https://github.com/varletjs/varlet/commit/b2c4da9a1a4df2ee43b27b005576f3523e7a4e5f))



## [1.23.9](https://github.com/varletjs/varlet/compare/v1.23.8...v1.23.9) (2021-11-25)


### Bug Fixes

* **ui/checkbox:** add ripple depend style ([b8345fa](https://github.com/varletjs/varlet/commit/b8345fa2792f6b3b0f7b9651a5fb63590397eb5a))



## [1.23.8](https://github.com/varletjs/varlet/compare/v1.23.7...v1.23.8) (2021-11-24)


### Bug Fixes

* **cli:** add ts ignore to generate routes ([3363578](https://github.com/varletjs/varlet/commit/3363578eb2763282fd3c274ab75374cbff94c92b))
* compatible dayjs for nuxt ([0b3b540](https://github.com/varletjs/varlet/commit/0b3b540694e13130686773d9bcd3c3c4d21da496))
* **d.ts:** repair type ([b925e7e](https://github.com/varletjs/varlet/commit/b925e7ea63c4154b3c26cb711fde4a7382633c80))



## [1.23.7](https://github.com/varletjs/varlet/compare/v1.23.6...v1.23.7) (2021-11-23)


### Bug Fixes

* **loading:** add color for circle type & update doc ([3457394](https://github.com/varletjs/varlet/commit/345739466b8109e63205eee720d391a328d30ca7))
* **loading:** remove radius prop & add color for circle type & update doc ([3a9dfe0](https://github.com/varletjs/varlet/commit/3a9dfe07886b245d686b454bfa1aa975b7e223f5))
* **ui/themes, cli:** fix themes types ([f29511a](https://github.com/varletjs/varlet/commit/f29511a016edb462bdf578a6b5a19fbe10a22158))


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



## [1.23.4](https://github.com/varletjs/varlet/compare/v1.23.3...v1.23.4) (2021-11-21)


### Bug Fixes

* **ui/types:** add list.d.ts ([ab06a8f](https://github.com/varletjs/varlet/commit/ab06a8f219fcf5f4f929938f048a142a6c4b1715))



## [1.23.3](https://github.com/varletjs/varlet/compare/v1.23.2...v1.23.3) (2021-11-20)


### Bug Fixes

* **cli/jest:** add watchAll mode ([84ebb4e](https://github.com/varletjs/varlet/commit/84ebb4efe823cb9d7f22995d429b82d8fc3e05c8))



## [1.23.2](https://github.com/varletjs/varlet/compare/v1.23.0...v1.23.2) (2021-11-20)


### Bug Fixes

* **ui/space:** modify the behavior of space in space-around and space-between modes ([5abf617](https://github.com/varletjs/varlet/commit/5abf617b009fbb63409724a3394b207949cc3a2c))



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


### Reverts

* revert slider types change ([b897c3c](https://github.com/varletjs/varlet/commit/b897c3c2b58b4213f1b8dd1d2f84a1a2bdd4e67a))



## [1.22.4](https://github.com/varletjs/varlet/compare/v1.22.3...v1.22.4) (2021-10-14)


### Bug Fixes

* **ui/app-bar:** fix app-bar style ([9da67b6](https://github.com/varletjs/varlet/commit/9da67b6fa0e07a644cba6118f4a90cb8293df8be))



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



# [1.21.0](https://github.com/varletjs/varlet/compare/v1.20.0...v1.21.0) (2021-09-22)


### Bug Fixes

* **index-bar:** fix the bug of overlap ([52c1d9b](https://github.com/varletjs/varlet/commit/52c1d9be10f9ece2f70fd613a24fac6457d016a6))
* **index-bar:** fix the scrolling bug when index-bar is not 0 away from the top ([2f28954](https://github.com/varletjs/varlet/commit/2f28954d1ac4d14ffaa6d439675318dab273e0f9))
* **types:** add props type declaration ([a547cc9](https://github.com/varletjs/varlet/commit/a547cc9fa99436d82d0ae2ac2804b0b94d0d3da0))
* **ui/sticky:** remove auto check sticky support statement ([8a35d98](https://github.com/varletjs/varlet/commit/8a35d98487cc3c547d42a5c22ad32d8e2c96d19a))
* **ui/sticky:** use scroll mode as sticky default mode ([3769f8b](https://github.com/varletjs/varlet/commit/3769f8b0837bc16f9bc4d7ce3405cac61c1f79e1))


### Features

* **ui/sticky:** add disabled,css-mode props ([5dbfbca](https://github.com/varletjs/varlet/commit/5dbfbca81a04d41583827d40f2cb9b8ffe391ad3))



# [1.20.0](https://github.com/varletjs/varlet/compare/v1.19.0...v1.20.0) (2021-09-15)


### Features

* **cli:** support pc component preview ([be463ad](https://github.com/varletjs/varlet/commit/be463adf62cb7cb196e555a42c37a7d2b10cac77))



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



# [1.15.0](https://github.com/varletjs/varlet/compare/v1.14.2...v1.15.0) (2021-08-13)


### Features

* **time-picker:** add allowedTime ([b86bd84](https://github.com/varletjs/varlet/commit/b86bd8420591a0bcffcae7442f5b9b7ab2546613))



## [1.14.2](https://github.com/varletjs/varlet/compare/v1.14.1...v1.14.2) (2021-08-12)


### Bug Fixes

* **ui/input:** when the value is a number, the input type is not number ([34d750a](https://github.com/varletjs/varlet/commit/34d750ace1a2b338dde41680924534aed446d286))



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



## [1.13.3](https://github.com/varletjs/varlet/compare/v1.13.1...v1.13.3) (2021-07-31)


### Bug Fixes

* **cli:** jsx tsx is not processed as an index ([4079361](https://github.com/varletjs/varlet/commit/4079361bb4c4273199653a02b51be0df1d738274))



## [1.13.1](https://github.com/varletjs/varlet/compare/v1.13.0...v1.13.1) (2021-07-31)


### Bug Fixes

* **ui/swipe:** the screen size changes, the size of the carousel will not change ([#112](https://github.com/varletjs/varlet/issues/112)) ([7110457](https://github.com/varletjs/varlet/commit/71104570a6192af6293de894d42ca09d9b78f0c5))



# [1.13.0](https://github.com/varletjs/varlet/compare/v1.12.0...v1.13.0) (2021-07-30)


### Bug Fixes

* **cli:** add the dev command ipv4 prompt, Optimization tips ([e86313b](https://github.com/varletjs/varlet/commit/e86313b790afe7812d52dfcff11c74131bf55cdb))
* modify the style of indexbar ([ac268f1](https://github.com/varletjs/varlet/commit/ac268f10f4efd51b68d5a257822ad2c9b05a1d53))


### Features

* **cli:** support extraction of style dependencies in scripts, and optimize function definitions ([4d7d76f](https://github.com/varletjs/varlet/commit/4d7d76f3d61c351dd50a4d8b19081c7cc8b21b9f))



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



## [1.11.1](https://github.com/varletjs/varlet/compare/v1.11.0...v1.11.1) (2021-07-29)


### Bug Fixes

* **ui/sticky:** fix sticky element size error in keep-alive ([3c269a9](https://github.com/varletjs/varlet/commit/3c269a9c6a379a02c448e7a911c63048ee079e33))



# [1.11.0](https://github.com/varletjs/varlet/compare/v1.10.0...v1.11.0) (2021-07-28)


### Bug Fixes

* **index-bar:** fix the bug of trigger two times change event after click anchor ([4282788](https://github.com/varletjs/varlet/commit/4282788e4d5b0ee576144da951dc10c86fb235fc))


### Features

* **index-bar:** add duration prop ([d115f84](https://github.com/varletjs/varlet/commit/d115f84998ae1422d560b27003a869d8a31aa533))
* **index-bar:** add hide-list prop ([a433b08](https://github.com/varletjs/varlet/commit/a433b08ea13a2504e1f9d75552fd95243fed8d2f))



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



## [1.7.1](https://github.com/varletjs/varlet/compare/v1.7.0...v1.7.1) (2021-06-19)


### Bug Fixes

* **countdown:** modify style of example ([5dcf584](https://github.com/varletjs/varlet/commit/5dcf5849245817463f8fcd85d74c80abd20fbe78))
* **progress:** modify style of example ([f2469a6](https://github.com/varletjs/varlet/commit/f2469a6915c6ef4d2a264672971bfffe29adedff))
* **switch:** modify style of example ([b790736](https://github.com/varletjs/varlet/commit/b79073635295227180e79501068887c4c776c06c))



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



# [1.6.0](https://github.com/varletjs/varlet/compare/v1.5.0...v1.6.0) (2021-06-02)


### Bug Fixes

* **root:** fix lerna.json ([ea32067](https://github.com/varletjs/varlet/commit/ea320675ef03f4f7700969a200bfa69451de8820))
* **root:** fix lerna.json ([3597037](https://github.com/varletjs/varlet/commit/35970379d3eb4509420d011eb10863a143ecd9c4))


### Features

* **extension:** add varlet-code-extension package ([b276e06](https://github.com/varletjs/varlet/commit/b276e064e1cb410a17c5f51c5eae2de55e58e88c))



# [1.5.0](https://github.com/varletjs/varlet/compare/v1.4.9...v1.5.0) (2021-06-02)


### Bug Fixes

* remove error classname ([675a8da](https://github.com/varletjs/varlet/commit/675a8da866811e38c2c04398a4b8a2b761ce3c80))
* **snackbar:** modify option type ([b30e6b0](https://github.com/varletjs/varlet/commit/b30e6b082ce410270811fbbdcf137e6c364562a8))


### Features

* **ui/action-sheet:** add new component action-sheet, basic feature complete ([22f54dc](https://github.com/varletjs/varlet/commit/22f54dccd016eaee141802eaa5f5dff5b036aeab))



## [1.4.9](https://github.com/varletjs/varlet/compare/v1.4.8...v1.4.9) (2021-05-31)



## [1.4.8](https://github.com/varletjs/varlet/compare/v1.4.7...v1.4.8) (2021-05-31)



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



## [1.4.4](https://github.com/varletjs/varlet/compare/v1.4.3...v1.4.4) (2021-05-21)


### Bug Fixes

* **back-top:** replace scrollTop to scrollTo ([776803f](https://github.com/varletjs/varlet/commit/776803fe5df175f276d388be5b8be049962b018a))



## [1.4.3](https://github.com/varletjs/varlet/compare/v1.4.2...v1.4.3) (2021-05-20)



## [1.4.2](https://github.com/varletjs/varlet/compare/v1.4.1...v1.4.2) (2021-05-20)



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



## [0.12.2](https://github.com/varletjs/varlet/compare/v0.12.1...v0.12.2) (2021-04-14)


### Bug Fixes

* **ui/types:** 修复checkboxGroup steps step类型声明问题 ([706632c](https://github.com/varletjs/varlet/commit/706632ce69a04595298ae60b9024882158fdb913))



## [0.12.1](https://github.com/varletjs/varlet/compare/v0.12.0...v0.12.1) (2021-04-14)


### Bug Fixes

* **ui/types:** 修复dialog picker类型声明 ([53090e0](https://github.com/varletjs/varlet/commit/53090e063eaf1f61a80416f9a4fec5fb5aa99f1b))



# [0.12.0](https://github.com/varletjs/varlet/compare/v0.11.4...v0.12.0) (2021-04-14)


### Features

* **snackbar:** add types ([cdd48dc](https://github.com/varletjs/varlet/commit/cdd48dcc8d9cbc4fdb1b820d57e638d5a68878f2))



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



## [0.1.1](https://github.com/varletjs/varlet/compare/v0.1.0...v0.1.1) (2020-10-30)



# [0.1.0](https://github.com/varletjs/varlet/compare/5913d0b1edb1d72e6c6439af1525a692291861ba...v0.1.0) (2020-10-30)


### Features

* **初始化仓库:** 初始化规范化配置 monorepo配置 ([5913d0b](https://github.com/varletjs/varlet/commit/5913d0b1edb1d72e6c6439af1525a692291861ba))



