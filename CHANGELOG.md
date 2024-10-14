## [3.6.1](https://github.com/varletjs/varlet/compare/v3.6.0...v3.6.1) (2024-10-14)


### Bug Fixes

* **highlighter-provder:** fix CodeToHtmlOptions types ([dd0d2d7](https://github.com/varletjs/varlet/commit/dd0d2d7f2e860cb679f61816063d3d9f15c02243))



# [3.6.0](https://github.com/varletjs/varlet/compare/v3.5.4...v3.6.0) (2024-10-14)


### Features

* **code:** support trim ([#1794](https://github.com/varletjs/varlet/issues/1794)) ([0a2e43a](https://github.com/varletjs/varlet/commit/0a2e43a7d3a12b04357e8301564be6ec6c0321b4))
* support alert component ([#1787](https://github.com/varletjs/varlet/issues/1787)) ([8b5079f](https://github.com/varletjs/varlet/commit/8b5079fa07475ee1a011da212716eccf7e1d44b9))
* support code component ([#1791](https://github.com/varletjs/varlet/issues/1791)) ([fefbde6](https://github.com/varletjs/varlet/commit/fefbde6c9b200e36d4ebbd324ce51a3e59380963))



## [3.5.4](https://github.com/varletjs/varlet/compare/v3.5.3...v3.5.4) (2024-10-07)


### Features

* **card:** support filled variant ([#1786](https://github.com/varletjs/varlet/issues/1786)) ([effd58f](https://github.com/varletjs/varlet/commit/effd58f3fc6b457751e2d9eed05757988a978b4e))
* **card:** support variant ([77bdaf2](https://github.com/varletjs/varlet/commit/77bdaf2f9efd11d591189bb71c04908a3636e16d))



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



## [3.3.16](https://github.com/varletjs/varlet/compare/v3.3.15...v3.3.16) (2024-08-23)


### Bug Fixes

* **area:** fix area info ([#1736](https://github.com/varletjs/varlet/issues/1736)) ([b90ff66](https://github.com/varletjs/varlet/commit/b90ff6606d7add71bd3f6bc849074cd1070bf49c))



## [3.3.15](https://github.com/varletjs/varlet/compare/v3.3.14...v3.3.15) (2024-08-16)



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



## [3.3.12](https://github.com/varletjs/varlet/compare/v3.3.11...v3.3.12) (2024-08-05)


### Bug Fixes

* **cli:** ad maybe emptry ([ad569f4](https://github.com/varletjs/varlet/commit/ad569f4c6464aa601538c082d4e6070e88fbbfe4))


### Features

* **usePopover:** support manual trigger and close [#1725](https://github.com/varletjs/varlet/issues/1725) ([92a80d6](https://github.com/varletjs/varlet/commit/92a80d6bba0b1b7e4dfed53fcffcc7acef6d2561))



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



## [3.3.6](https://github.com/varletjs/varlet/compare/v3.3.5...v3.3.6) (2024-07-10)


### Bug Fixes

* **input:** fix missing dot key on ios ([2dd86cd](https://github.com/varletjs/varlet/commit/2dd86cd61d3651e8f1b34642e069f6681cef56bb))
* reset last validation before trigger validate event ([#1703](https://github.com/varletjs/varlet/issues/1703)) ([b43cfc0](https://github.com/varletjs/varlet/commit/b43cfc022f16e055972b38227899ace53582d83d))



## [3.3.5](https://github.com/varletjs/varlet/compare/v3.3.4...v3.3.5) (2024-07-09)


### Bug Fixes

* **cli:** fix cf site logic ([da2766e](https://github.com/varletjs/varlet/commit/da2766efbf0db52415467ea731289c301f38973e))
* **input:** trim value after blurring while setting trim modifier ([#1693](https://github.com/varletjs/varlet/issues/1693)) ([1c4f41a](https://github.com/varletjs/varlet/commit/1c4f41a3a806a2abd660d825f54fea022e1f901d))



## [3.3.4](https://github.com/varletjs/varlet/compare/v3.3.3...v3.3.4) (2024-07-05)


### Features

* **select:** support options, labelKey and valueKey ([#1634](https://github.com/varletjs/varlet/issues/1634)) ([4539b1b](https://github.com/varletjs/varlet/commit/4539b1b337fcffcef5f66375e8fd5adf480a83fa))



## [3.3.3](https://github.com/varletjs/varlet/compare/v3.3.2...v3.3.3) (2024-06-27)


### Features

* **dialog:** support actions slot ([#1689](https://github.com/varletjs/varlet/issues/1689)) ([2d4e0e5](https://github.com/varletjs/varlet/commit/2d4e0e59c063bf6045ecf1558b77faeffad89931))



## [3.3.2](https://github.com/varletjs/varlet/compare/v3.3.1...v3.3.2) (2024-06-23)


### Features

* **app-bar:** support props border ([367d007](https://github.com/varletjs/varlet/commit/367d0076e7d7f240885299d9ff2116765fccb806))



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



## [3.2.13](https://github.com/varletjs/varlet/compare/v3.2.12...v3.2.13) (2024-05-31)


### Bug Fixes

* **cell:** disable tap highlights on iOS ([#1646](https://github.com/varletjs/varlet/issues/1646)) ([7850af5](https://github.com/varletjs/varlet/commit/7850af5930585e4aa3e4af38f27eed0f98a0ddc7)), closes [#1645](https://github.com/varletjs/varlet/issues/1645)


### Features

* **cli:** support ai agent ([a92c840](https://github.com/varletjs/varlet/commit/a92c840266149c6c4fa10e2b52829122c5f1f46b))



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



## [3.2.11](https://github.com/varletjs/varlet/compare/v3.2.10...v3.2.11) (2024-05-24)


### Features

* **bottom-navigation:** add placeholder prop ([#1618](https://github.com/varletjs/varlet/issues/1618)) ([471a563](https://github.com/varletjs/varlet/commit/471a5634470e377920df6e7776f8869c45c5e59a))
* **checkbox-group:** support options ([#1624](https://github.com/varletjs/varlet/issues/1624)) ([e345c0a](https://github.com/varletjs/varlet/commit/e345c0aec176938c8a550526aa59a4106ba8439b))



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



## [3.2.8](https://github.com/varletjs/varlet/compare/v3.2.7...v3.2.8) (2024-05-07)


### Bug Fixes

* **extension:** fix links ([70e1bbe](https://github.com/varletjs/varlet/commit/70e1bbe2e845b3db086bcc7fc96ae88246124871))



## [3.2.7](https://github.com/varletjs/varlet/compare/v3.2.6...v3.2.7) (2024-05-02)


### Bug Fixes

* **extension:** modify prompt bug ([#1608](https://github.com/varletjs/varlet/issues/1608)) ([3c4c50b](https://github.com/varletjs/varlet/commit/3c4c50bbbc6d9e065a713aa83d237d65e53166ad))


### Features

* **switch:** support buttonElevation ([#1605](https://github.com/varletjs/varlet/issues/1605)) ([ef74261](https://github.com/varletjs/varlet/commit/ef74261c1d4139caaf14c7ffa74f1428066e2fc4))



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



## [3.2.4](https://github.com/varletjs/varlet/compare/v3.2.3...v3.2.4) (2024-04-10)


### Bug Fixes

* **time-picker:** update allow time when the value changed ([#1579](https://github.com/varletjs/varlet/issues/1579)) ([2df9378](https://github.com/varletjs/varlet/commit/2df93789f29e778518f7731991b85f2508774b72))


### Performance Improvements

* **divider:** improve accessibility ([#1582](https://github.com/varletjs/varlet/issues/1582)) ([e30c34f](https://github.com/varletjs/varlet/commit/e30c34fefb8936be6fa07d76e9db62771ab24f78))



## [3.2.3](https://github.com/varletjs/varlet/compare/v3.2.2...v3.2.3) (2024-04-06)


### Bug Fixes

* fix emit trigger when the props initialized and close [#1566](https://github.com/varletjs/varlet/issues/1566) ([853d243](https://github.com/varletjs/varlet/commit/853d243a8b034a7b368afcf055420d9abf12676f))


### Features

* **image:** support position to set image position ([#1563](https://github.com/varletjs/varlet/issues/1563)) ([6773914](https://github.com/varletjs/varlet/commit/6773914358d09a9e85e7282ab5610abe064b9da5))
* **switch:** support variant mode ([#1552](https://github.com/varletjs/varlet/issues/1552)) ([cd82fc7](https://github.com/varletjs/varlet/commit/cd82fc7046fd1d05d218b29bdfdcab916f4b8f70))



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


### Features

* v3 ([#1465](https://github.com/varletjs/varlet/issues/1465)) ([5355778](https://github.com/varletjs/varlet/commit/5355778b914d6a92c1fa4d88c81bf4f6758809ab)), closes [#1366](https://github.com/varletjs/varlet/issues/1366) [#1364](https://github.com/varletjs/varlet/issues/1364) [#1362](https://github.com/varletjs/varlet/issues/1362) [#1369](https://github.com/varletjs/varlet/issues/1369) [#1368](https://github.com/varletjs/varlet/issues/1368) [#1367](https://github.com/varletjs/varlet/issues/1367) [#1371](https://github.com/varletjs/varlet/issues/1371) [#1370](https://github.com/varletjs/varlet/issues/1370) [#1373](https://github.com/varletjs/varlet/issues/1373) [#1464](https://github.com/varletjs/varlet/issues/1464)


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



## [2.22.2](https://github.com/varletjs/varlet/compare/v2.22.1...v2.22.2) (2024-02-03)


### Bug Fixes

* fix defineProps limited to a type literal or a reference to a local interface and close [#1458](https://github.com/varletjs/varlet/issues/1458) ([64ba155](https://github.com/varletjs/varlet/commit/64ba155a5b3e2a9e828ed60dbb38b8d30b067070))
* **index-bar:** init scroller when start to scroll for nuxt ([#1460](https://github.com/varletjs/varlet/issues/1460)) ([9b9ad8c](https://github.com/varletjs/varlet/commit/9b9ad8c35c15cc9fce14536d9f80ff14fe8592b7))
* **index-bar:** recollect anchor name that is empty from anchors when length changes ([#1459](https://github.com/varletjs/varlet/issues/1459)) ([e61d046](https://github.com/varletjs/varlet/commit/e61d046b55e4e4e84822aec352d88737c1fac544))
* **sticky:** init scroller when start scrolling to avoid the value of scroller becomes window for nuxt ([#1456](https://github.com/varletjs/varlet/issues/1456)) ([43637b9](https://github.com/varletjs/varlet/commit/43637b9d440ec7bdf601e3f0b1e89eef36ed86d5))



## [2.22.1](https://github.com/varletjs/varlet/compare/v2.22.0...v2.22.1) (2024-01-29)


### Bug Fixes

* fix changedTouches patched error ([3189038](https://github.com/varletjs/varlet/commit/31890383fcae39b741e67fb751eeca5ad87a4bad))
* **index-bar:** index anchor offsetTop get timing error and close [#1436](https://github.com/varletjs/varlet/issues/1436)([#1449](https://github.com/varletjs/varlet/issues/1449)) ([f124799](https://github.com/varletjs/varlet/commit/f1247996deddb29d47998b4bc16238d700cfdf58))
* **menu:** don't compute hostSize when no host element ([#1448](https://github.com/varletjs/varlet/issues/1448)) ([469257a](https://github.com/varletjs/varlet/commit/469257ae45b935376ca07573f3a00527281f8096))
* **tabs:** hidden scrollbar for firefox ([#1454](https://github.com/varletjs/varlet/issues/1454)) ([a9aef80](https://github.com/varletjs/varlet/commit/a9aef800611c562ded0e585a34932fa98bf7800c))



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



## [2.20.7](https://github.com/varletjs/varlet/compare/v2.20.6...v2.20.7) (2024-01-08)


### Bug Fixes

* **picker:** fix picker v-model value matched error in cascade mode and close [#1386](https://github.com/varletjs/varlet/issues/1386) ([ff1c0f1](https://github.com/varletjs/varlet/commit/ff1c0f15f7ea2c57845870dae757f22fa92fe633))



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



## [2.19.3](https://github.com/varletjs/varlet/compare/v2.19.2...v2.19.3) (2023-12-01)


### Bug Fixes

* **input:** user input display error on type is number and close [#1322](https://github.com/varletjs/varlet/issues/1322) ([8a0bb99](https://github.com/varletjs/varlet/commit/8a0bb992d4bd2cb44683f3f7b904674590e06329))


### Features

* **badge:** support offsetX and offsetY ([#1313](https://github.com/varletjs/varlet/issues/1313)) ([605a1af](https://github.com/varletjs/varlet/commit/605a1afb5408c1ea5a3bd7b473264fa371342740))
* **shared:** support removeArrayBlank ([fe3ddd2](https://github.com/varletjs/varlet/commit/fe3ddd2880e8055dff036423a41d9756f760df8f))



## [2.19.2](https://github.com/varletjs/varlet/compare/v2.19.1...v2.19.2) (2023-11-25)


### Bug Fixes

* **index-bar:** fix scroll offset error in window scroller ([9f5483e](https://github.com/varletjs/varlet/commit/9f5483e21fee84bcd3516a2883cc7bc32db12797))
* **shared:** adapt to - and + for isNumeric function ([#1314](https://github.com/varletjs/varlet/issues/1314)) ([094206f](https://github.com/varletjs/varlet/commit/094206fed04b0079a3dffdd3305b23d2723ba466))
* **ssr/input:** fix hydration error in textarea mode ([edaee1e](https://github.com/varletjs/varlet/commit/edaee1ee02d4224b360f774049c0936572a0034f))


### Features

* **badge:** support --badge-dot-width and --badge-dot-height ([#1310](https://github.com/varletjs/varlet/issues/1310)) ([e0d7b00](https://github.com/varletjs/varlet/commit/e0d7b00cb4274acccc5da117c2f76d42d4f5b9d4))
* support extraction of style vars ([aefb12f](https://github.com/varletjs/varlet/commit/aefb12f0c8260c734043b859ae5ea622e47f7098))
* **tab:** support --tab-font-weight ([#1312](https://github.com/varletjs/varlet/issues/1312)) ([fe4fdb3](https://github.com/varletjs/varlet/commit/fe4fdb37f8cc0f06e240e5ebaedf2390424987c6))



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



## [2.18.4](https://github.com/varletjs/varlet/compare/v2.18.3...v2.18.4) (2023-11-10)


### Bug Fixes

* **date-picker:** import sticky component ([6fe6ac6](https://github.com/varletjs/varlet/commit/6fe6ac67c2d34c8518b646e1aba98050f777614e))



## [2.18.3](https://github.com/varletjs/varlet/compare/v2.18.2...v2.18.3) (2023-11-09)


### Bug Fixes

* **button:** remove hover and ripple effect while loading ([#1275](https://github.com/varletjs/varlet/issues/1275)) ([591a8b2](https://github.com/varletjs/varlet/commit/591a8b2c1a3d63e1ef723a81563c2bcef3487efc))
* **date-picker:** panel-header add sticky ([0212fee](https://github.com/varletjs/varlet/commit/0212feebb4144ad3e5d853e95baacd22241f8a2e))
* **ui:** correct the return type of toSizeUnit ([#1282](https://github.com/varletjs/varlet/issues/1282)) ([0a2b04a](https://github.com/varletjs/varlet/commit/0a2b04a5b0f7818d24d18d2faf3d3d866afb86ff))


### Features

* **image-preview:** support zoom method ([#1262](https://github.com/varletjs/varlet/issues/1262)) ([99a8369](https://github.com/varletjs/varlet/commit/99a8369a875cc74bb7ff08b7b6cded3a1954b901))
* **shared:** support isNumeric and optimize ui elements ([06cda15](https://github.com/varletjs/varlet/commit/06cda15ad3c4a286bb115b309f3a8a5406c0eab6))
* **uploader:** support props.onClickAction ([830264f](https://github.com/varletjs/varlet/commit/830264f90d244858b4c3ee285fbf69758e0bab8c))


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
* **progress:** support linear gradient color when mode is circle ([#1180](https://github.com/varletjs/varlet/issues/1180)) ([f1cd728](https://github.com/varletjs/varlet/commit/f1cd728eb2d20f52e803a1eb4541c839e0bae063))
* **rate:** support namespace for icon ([7db258f](https://github.com/varletjs/varlet/commit/7db258f7c9c54b6877108f507df1a7b0e22ceb24))
* **uploader:** support resolve-type ([#1194](https://github.com/varletjs/varlet/issues/1194)) ([a8fbb35](https://github.com/varletjs/varlet/commit/a8fbb35eeabaf9a5e485cac8b833a550eb85b5e9))



## [2.16.7](https://github.com/varletjs/varlet/compare/v2.16.6...v2.16.7) (2023-09-18)


### Bug Fixes

* **input,select:** reduce the impact of text-align ([5091f35](https://github.com/varletjs/varlet/commit/5091f351a5353f03ef0a62252ecdfd38f3880a74))


### Features

* **swipe:** support navigation prop and prev and next slots ([#1177](https://github.com/varletjs/varlet/issues/1177)) ([d717f0c](https://github.com/varletjs/varlet/commit/d717f0c9aa29f7fc2bdd3b2cb744294e7d327aa9))



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



## [2.14.2](https://github.com/varletjs/varlet/compare/v2.14.1...v2.14.2) (2023-08-18)


### Features

* **drag:** support click event ([#1150](https://github.com/varletjs/varlet/issues/1150)) ([62ad9c3](https://github.com/varletjs/varlet/commit/62ad9c312f1cfb1716a50042f27dcb7c7b1486ef))



## [2.14.1](https://github.com/varletjs/varlet/compare/v2.14.0...v2.14.1) (2023-08-15)


### Bug Fixes

* **watermarker:** fix missing style dependencies ([22fc711](https://github.com/varletjs/varlet/commit/22fc7112bc0cce43a8fc4813a940274e481c9222))



# [2.14.0](https://github.com/varletjs/varlet/compare/v2.13.6...v2.14.0) (2023-08-15)


### Features

* add new component watermark ([#1143](https://github.com/varletjs/varlet/issues/1143)) ([a0af434](https://github.com/varletjs/varlet/commit/a0af434296215705c8c97667df267ac6f8575e86))



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



## [2.13.4](https://github.com/varletjs/varlet/compare/v2.13.3...v2.13.4) (2023-07-25)


### Bug Fixes

* **fab:** drag style mission ([cc6c913](https://github.com/varletjs/varlet/commit/cc6c913e1a28c46b0325e0af9d94cc936851924b))
* **fab:** fix fab teleport defaults to body ([59de630](https://github.com/varletjs/varlet/commit/59de63096842a8804d2e8fdaf4b670b99339c2a3))



## [2.13.3](https://github.com/varletjs/varlet/compare/v2.13.2...v2.13.3) (2023-07-24)


### Bug Fixes

* **switch, slider:** fix props.size cannot handle vmin and vmax ([8657077](https://github.com/varletjs/varlet/commit/865707711282f9e6fa815f4d17ffaf14e85ce4ff))
* **switch, slider:** support em unit ([5d5d3ab](https://github.com/varletjs/varlet/commit/5d5d3abcd5e6d4a22a1f7d4a069a73a63d76254b))


### Features

* **fab:** support drag ([#1133](https://github.com/varletjs/varlet/issues/1133)) ([203c1a8](https://github.com/varletjs/varlet/commit/203c1a84f45bbdee13a28b7e208979c9ccae7bfd))
* **site:** support color scheme ([a03da2a](https://github.com/varletjs/varlet/commit/a03da2a3c3c7598ff459abb506b6148dd2fb0e8f))



## [2.13.2](https://github.com/varletjs/varlet/compare/v2.13.1...v2.13.2) (2023-07-24)


### Bug Fixes

* **switch, slider:** fix props.size cannot handle vmin and vmax ([3a218e1](https://github.com/varletjs/varlet/commit/3a218e172ee12073a50b68197571a0aaff398e72))



## [2.13.1](https://github.com/varletjs/varlet/compare/v2.13.0...v2.13.1) (2023-07-21)


### Bug Fixes

* **select:** fix select option active error ([#1130](https://github.com/varletjs/varlet/issues/1130)) ([a3b7138](https://github.com/varletjs/varlet/commit/a3b71389962eb9c55d589682de27623fe5fd67c9))


### Features

* **menu:** support popoverClass and refactor select css and fixed [#1129](https://github.com/varletjs/varlet/issues/1129) ([417f45c](https://github.com/varletjs/varlet/commit/417f45c4ab39471cae4314e440d6430b39ae54af))
* **popover:** support animation ([4416548](https://github.com/varletjs/varlet/commit/4416548ec1593b255b993acdf6ca47d0097caf10))



# [2.13.0](https://github.com/varletjs/varlet/compare/v2.12.3...v2.13.0) (2023-07-16)


### Bug Fixes

* **cli:** fix md table syntax ([c202ddf](https://github.com/varletjs/varlet/commit/c202ddfe5f27d1e850682d6216da23a4e719fb1b))
* **slider:** fix bubble size of the Slider component is abnormal ([#1120](https://github.com/varletjs/varlet/issues/1120)) ([49a0b1f](https://github.com/varletjs/varlet/commit/49a0b1f6337ede3dcd36d649b346f1e7c832fa65))


### Features

* **drag:** support reset and refactor animation ([6dddee3](https://github.com/varletjs/varlet/commit/6dddee30b0d243e1c2db464623e21e9dc2fce3c9))
* **input,uploader:** add extra message slot ([#1117](https://github.com/varletjs/varlet/issues/1117)) ([979229e](https://github.com/varletjs/varlet/commit/979229ecfcda6c3af840a0912300a9d59c96388c))
* new component drag ([#1124](https://github.com/varletjs/varlet/issues/1124)) ([d86d5a1](https://github.com/varletjs/varlet/commit/d86d5a1d491f6c84068b32e1ff0c5ac2ed95c065))
* **playground:** support preview mode ([d5101b2](https://github.com/varletjs/varlet/commit/d5101b26473a011a89cc6366a03dc8ad286bd8bd))



## [2.12.3](https://github.com/varletjs/varlet/compare/v2.12.2...v2.12.3) (2023-07-07)


### Bug Fixes

* **input:** fix auto complete tab index ([#1114](https://github.com/varletjs/varlet/issues/1114)) ([fb5e3ac](https://github.com/varletjs/varlet/commit/fb5e3ac7312df0e34e987a1290b50a0e2ddfc17a))
* **pullRefresh:** ensure element is not null and fix types ([3f594f5](https://github.com/varletjs/varlet/commit/3f594f520f90796fc6cd72e345c6fc18723ce7ba))
* **switch:** fix load animation without displaying when the radius isn't setting ([#1110](https://github.com/varletjs/varlet/issues/1110)) ([f286f12](https://github.com/varletjs/varlet/commit/f286f1244d1e8e631e0e07a15c76c3aa0cbe52ab))


### Features

* **progress:** add type attribute to set different theme colors ([8ccfafd](https://github.com/varletjs/varlet/commit/8ccfafd268432a40aece12ccb3673169a70832bd))



## [2.12.2](https://github.com/varletjs/varlet/compare/v2.12.1...v2.12.2) (2023-07-02)


### Bug Fixes

* fix layout zIndex ([0b63630](https://github.com/varletjs/varlet/commit/0b636306fb859cba809dea3d9ded3ddcc47780de))



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



## [2.11.8](https://github.com/varletjs/varlet/compare/v2.11.7...v2.11.8) (2023-06-17)


### Bug Fixes

* patch js ext ([a56e16a](https://github.com/varletjs/varlet/commit/a56e16aa2eece4f4d6f0d9fdf023e58ac9739cc5))



## [2.11.7](https://github.com/varletjs/varlet/compare/v2.11.6...v2.11.7) (2023-06-17)


### Bug Fixes

* **ui/popup:** fix slots rerender ([4ee6487](https://github.com/varletjs/varlet/commit/4ee6487b7d7ed47e2713bccac6a06e8fdb1031ce))
* **ui/progress:** fix css color inherit ([#1096](https://github.com/varletjs/varlet/issues/1096)) ([704ffc7](https://github.com/varletjs/varlet/commit/704ffc73d31560b1bebfaf0bf12410958da1105a))



## [2.11.6](https://github.com/varletjs/varlet/compare/v2.11.5...v2.11.6) (2023-06-15)


### Bug Fixes

* **rate:** add flex to constraint icon size and close [#1090](https://github.com/varletjs/varlet/issues/1090) ([455ff1e](https://github.com/varletjs/varlet/commit/455ff1ec108809f61dc4ee9145ca34cd217ebde9))
* **switch:** remove default loading size and close [#1092](https://github.com/varletjs/varlet/issues/1092) ([ae3b562](https://github.com/varletjs/varlet/commit/ae3b562c67f0469be1229b5158e6412802caa9af))
* **ui/button,link:** fix css color inherit ([#1094](https://github.com/varletjs/varlet/issues/1094)) ([2b63723](https://github.com/varletjs/varlet/commit/2b637233897dc3ce68725d994e1587abe53a8316))
* **ui/dialog:** fix css color inherit ([#1097](https://github.com/varletjs/varlet/issues/1097)) ([97c0937](https://github.com/varletjs/varlet/commit/97c0937b69680288f02c2d58d0323127171c9e86))
* **ui/table:** fix css color inherit ([#1098](https://github.com/varletjs/varlet/issues/1098)) ([06d07a0](https://github.com/varletjs/varlet/commit/06d07a0529512fba248e26e96a0b88f515e1580e))


### Features

* **ui/counter:** support --counter-button-text-color and complete design docs ([30fd9fa](https://github.com/varletjs/varlet/commit/30fd9fa0c38508c4fbf95a387c919bd10da0efa7))



## [2.11.5](https://github.com/varletjs/varlet/compare/v2.11.4...v2.11.5) (2023-06-09)


### Bug Fixes

* **steps:** reimplement the connection line style ([#1082](https://github.com/varletjs/varlet/issues/1082)) ([132b0b8](https://github.com/varletjs/varlet/commit/132b0b8d7b234d275a6dddc60a5574b914baf8a8))


### Features

* **ui/rate:** allow to clear score ([#1080](https://github.com/varletjs/varlet/issues/1080)) ([b206b19](https://github.com/varletjs/varlet/commit/b206b19d4abd97e605321e76f7b1e691c3af2c60))



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



## [2.11.2](https://github.com/varletjs/varlet/compare/v2.11.1...v2.11.2) (2023-05-27)


### Bug Fixes

* **ui/tabs-items:** Fixed the tabs-items cannot match name ([#1056](https://github.com/varletjs/varlet/issues/1056)) ([4bb18d8](https://github.com/varletjs/varlet/commit/4bb18d8a0f05718e2a276745b08a86a5de1d3de0))


### Features

* **ui/image-preview:** add long press event & image-prevent-default prop ([#1049](https://github.com/varletjs/varlet/issues/1049)) ([46e8dfc](https://github.com/varletjs/varlet/commit/46e8dfc8544063e32f59f397f71b2f62e25cedfb))



## [2.11.1](https://github.com/varletjs/varlet/compare/v2.11.0...v2.11.1) (2023-05-20)


### Bug Fixes

* cascade column the click event doesn't work sometime ([#1047](https://github.com/varletjs/varlet/issues/1047)) ([fae3f5d](https://github.com/varletjs/varlet/commit/fae3f5dde74de11821eedfd98fcb29a0c9db0a45))
* **ui/image-preview:** click can't trigger a close event sometimes ([#1044](https://github.com/varletjs/varlet/issues/1044)) ([c0d6902](https://github.com/varletjs/varlet/commit/c0d6902b236a29ee3d9580d0ac43a1f0bffd802a))
* **ui/picker:** clicking on the parent column causes the child column to restructure when the options are unchanged ([3924744](https://github.com/varletjs/varlet/commit/3924744d63b8a93a44f9a1087d889a38a33cc80b))
* **utils:** elements utils supports ssr and close [#1045](https://github.com/varletjs/varlet/issues/1045) ([9f3da12](https://github.com/varletjs/varlet/commit/9f3da1291b63ab04b34624cff739f4692b101fd2))


### Features

* **ui/picker:** support scroll while click the option and refactor code ([#1039](https://github.com/varletjs/varlet/issues/1039)) ([59a8d4c](https://github.com/varletjs/varlet/commit/59a8d4cab0fac71a03edce9d2b2190e004ea7c72))



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



## [2.10.2](https://github.com/varletjs/varlet/compare/v2.10.1...v2.10.2) (2023-05-06)


### Bug Fixes

* **ui/slider:** 修复滑块拖动时屏幕滚动 ([#1011](https://github.com/varletjs/varlet/issues/1011)) ([b9ca512](https://github.com/varletjs/varlet/commit/b9ca5122d1edf94fdf5ddb0ec6344241723b3c55))


### Features

* **ui/input:** support enterkeyhint for Input ([#1013](https://github.com/varletjs/varlet/issues/1013)) ([706014c](https://github.com/varletjs/varlet/commit/706014c264ca14ad36988d5ca9430b12509f5e29))
* **ui/popup:** support safeArea and safeAreaTop ([7306ddc](https://github.com/varletjs/varlet/commit/7306ddc1cf88bf16dc50840966f460502a2def91))



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



## [2.9.6](https://github.com/varletjs/varlet/compare/v2.9.5...v2.9.6) (2023-04-14)


### Bug Fixes

* **DatePicker:** fix Fixed hover effect bug ([#956](https://github.com/varletjs/varlet/issues/956)) ([4d72694](https://github.com/varletjs/varlet/commit/4d726942a4e0ee14889bd9105f7948a694f4d262))
* **pagination:** add disabled prop & close [#950](https://github.com/varletjs/varlet/issues/950) ([fb98f46](https://github.com/varletjs/varlet/commit/fb98f46ee2b657664d416b3fc18c6a76f6bb8693))
* **pull-refresh:** fix icon name error while fast touchmove ([fe1be23](https://github.com/varletjs/varlet/commit/fe1be23e6b2ea77b99759ad7977ca99e6308c961))
* **ui/checkbox, radio:** fix shrink error and close [#952](https://github.com/varletjs/varlet/issues/952) ([fa879ad](https://github.com/varletjs/varlet/commit/fa879ad5b6a1bd72e4a64a494192387e4710e371))
* **ui/dialog:** fix onBeforeClose cannot use call ([62c7c89](https://github.com/varletjs/varlet/commit/62c7c89bf553f21421df7f1bbf74c79fc068efa0))


### Features

* **cli:** support draft mode ([569b651](https://github.com/varletjs/varlet/commit/569b651417d7dfd9b4a73cd81f4922dd93502d6f))



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



## [2.8.6](https://github.com/varletjs/varlet/compare/v2.8.5...v2.8.6) (2023-03-05)


### Bug Fixes

* **ui/backtop:** fix effect while the component in keepalive ([195bf9b](https://github.com/varletjs/varlet/commit/195bf9b7d9c535d31b9e02a8238d781f93b5bb1f))
* **ui/coundown:** fix start method error ([f6626ea](https://github.com/varletjs/varlet/commit/f6626eac03517483f3906f6111c65dc4a8c2e83c))
* **ui/input:** value update error while the target is composingand close [#877](https://github.com/varletjs/varlet/issues/877) ([5873fdf](https://github.com/varletjs/varlet/commit/5873fdf830ff6978fdb4195cf1fafaa2e2d30f1e))


### Features

* **use:** support useEventListener useClickOutside ([cb90734](https://github.com/varletjs/varlet/commit/cb907340ae67729bfe05f0df062463d63fb43166))



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



## [2.7.5](https://github.com/varletjs/varlet/compare/v2.7.4...v2.7.5) (2023-02-09)


### Bug Fixes

* **ui/picker:** fix props.toolbar useless ([5e57b4f](https://github.com/varletjs/varlet/commit/5e57b4ffbc6f9e2461f4d532374272611913ceba))


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



## [2.7.3](https://github.com/varletjs/varlet/compare/v2.7.2...v2.7.3) (2023-02-01)


### Bug Fixes

* **cli:** fix generators ([dcc3ff7](https://github.com/varletjs/varlet/commit/dcc3ff787afcee8b3288be34a4b849ac780450a6))


### Features

* **cli:** support extension development ([dbe47a9](https://github.com/varletjs/varlet/commit/dbe47a9a89bb7ee791fe0408bcd94c66d36ac1e6))
* **cli:** support icon builder ([1cf420c](https://github.com/varletjs/varlet/commit/1cf420ce0ba17d7f5a15104991c6fba2ad8755bb))
* **cli:** support script setup ([229f4e1](https://github.com/varletjs/varlet/commit/229f4e1840eee539594430b5e21c27e09c5d7cad))
* support sfc without script blocks ([44e009d](https://github.com/varletjs/varlet/commit/44e009ddd843601c2f4b1b412e4a1d8f1c59f4cc))



## [2.7.2](https://github.com/varletjs/varlet/compare/v2.7.1...v2.7.2) (2023-01-30)


### Features

* **extension:** support icon preview and completion ([adfa778](https://github.com/varletjs/varlet/commit/adfa77883844177b56664f839e174bd8002ec964))
* **icons:** support pointCodes map ([ddd2575](https://github.com/varletjs/varlet/commit/ddd2575b9db3deff92310e84f3a0bba2b6fc48c3))



## [2.7.1](https://github.com/varletjs/varlet/compare/v2.7.0...v2.7.1) (2023-01-28)


### Bug Fixes

* the sfc style cannot append to style folder ([06b0360](https://github.com/varletjs/varlet/commit/06b0360f0a684ecaa5f6f095b7df3b9adbcb2a01))



# [2.7.0](https://github.com/varletjs/varlet/compare/v2.6.3...v2.7.0) (2023-01-27)


### Features

* **cli:** compiler standardization ([#839](https://github.com/varletjs/varlet/issues/839)) ([7ea3c5c](https://github.com/varletjs/varlet/commit/7ea3c5c1da1343e219a26b58205397e85102c5e2))



## [2.6.3](https://github.com/varletjs/varlet/compare/v2.6.2...v2.6.3) (2023-01-18)


### Bug Fixes

* **index-bar:** compute offsetTop ([eefdf9d](https://github.com/varletjs/varlet/commit/eefdf9d328dbe08994b6cfbbcfd5fc8f17bd76c6))
* the swipe element cannot be found in special case and close [#834](https://github.com/varletjs/varlet/issues/834) ([172b4a3](https://github.com/varletjs/varlet/commit/172b4a3e4d68286226c82fa77d754b7eaefacfa3))
* to method repeat emit change event ([52deffa](https://github.com/varletjs/varlet/commit/52deffa3b9188f1ca6330707a8c36db20020f1f4))


### Features

* **index-bar:** add scrollTo options ([b1e1a30](https://github.com/varletjs/varlet/commit/b1e1a30aee3da63b2b4d4b62bfc773e822fdbd8a))
* **ui/swipe:** support swipeToOptions ([98d7647](https://github.com/varletjs/varlet/commit/98d76472eaf5a2b3d36ef41facbdb84ab7645b09))



## [2.6.2](https://github.com/varletjs/varlet/compare/v2.6.1...v2.6.2) (2023-01-12)


### Bug Fixes

* **ui/pull-refresh:** fix pull-refresh touchMove ([#829](https://github.com/varletjs/varlet/issues/829)) ([1614e73](https://github.com/varletjs/varlet/commit/1614e733a0144572883a70a0f859ea95a4ad88a8))



## [2.6.1](https://github.com/varletjs/varlet/compare/v2.6.0...v2.6.1) (2023-01-11)


### Features

* support native-type and fix overlay auto import error ([35097ca](https://github.com/varletjs/varlet/commit/35097ca2285f38f175934b07c5b7b117d8d1cc4d))



# [2.6.0](https://github.com/varletjs/varlet/compare/v2.5.6...v2.6.0) (2023-01-10)


### Features

* support vite4 and create a new package vite-plugins ([#824](https://github.com/varletjs/varlet/issues/824)) ([34bbb86](https://github.com/varletjs/varlet/commit/34bbb86038916a9303a57a2938a0a29727965137))



## [2.5.6](https://github.com/varletjs/varlet/compare/v2.5.5...v2.5.6) (2023-01-07)


### Bug Fixes

* **pagination:** watch page-count and close [#820](https://github.com/varletjs/varlet/issues/820) ([a4bb395](https://github.com/varletjs/varlet/commit/a4bb3952f2a7a7cddf2eb48ae8a6f44e0a120623))



## [2.5.5](https://github.com/varletjs/varlet/compare/v2.5.4...v2.5.5) (2023-01-05)


### Bug Fixes

* **back-top:** add default z-index ([f9f45fb](https://github.com/varletjs/varlet/commit/f9f45fb379a67b9a4ad671a928815ce8705a85bb))
* **pull-refresh:** add lock and close [#814](https://github.com/varletjs/varlet/issues/814) ([08b04e3](https://github.com/varletjs/varlet/commit/08b04e36d8d7e19d161034bc2c3cff4115b0d9f9))
* **ui/uploader:** before-remove event mission file params ([db0870e](https://github.com/varletjs/varlet/commit/db0870ef6e38dff59e2050e5cbf8d467ed0a7027))



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



## [2.3.1](https://github.com/varletjs/varlet/compare/v2.3.0...v2.3.1) (2022-11-28)



# [2.3.0](https://github.com/varletjs/varlet/compare/v2.2.1...v2.3.0) (2022-11-28)


### Bug Fixes

* **button:** remove default value of circle and close [#761](https://github.com/varletjs/varlet/issues/761) ([aafdb12](https://github.com/varletjs/varlet/commit/aafdb123ee87a7dff1d32b63c900ecfc110dd268))
* some unusual behavior of LOGO animation ([99d3846](https://github.com/varletjs/varlet/commit/99d38462e6dcfe8dff28aa7476dba6527cd3cc70))
* **space:** remove width ([cb92a53](https://github.com/varletjs/varlet/commit/cb92a536f2de2b44e9f28cab1f493669a526ef7c))


### Features

* **ui/link:** support link component ([c6c8b8d](https://github.com/varletjs/varlet/commit/c6c8b8d4a4a85cbe5d05442f5fe6ad3cc5e2277d))



## [2.2.1](https://github.com/varletjs/varlet/compare/v2.2.0...v2.2.1) (2022-11-15)


### Bug Fixes

* **ui/tabs-items:** tabs-items cannot swipe to correct position when props.active initializes ([6ec8639](https://github.com/varletjs/varlet/commit/6ec8639086fd68d27df5bab1fa844645ceac59ea))



# [2.2.0](https://github.com/varletjs/varlet/compare/v2.1.0...v2.2.0) (2022-11-11)


### Features

* **extension:** support form-details ([20e8655](https://github.com/varletjs/varlet/commit/20e86551b11dca95378010e12231acefb68ebe83))
* support custom form component and refactor form-details and refactor form styles ([00ec07b](https://github.com/varletjs/varlet/commit/00ec07b830f1c87662a074d9f1478739e15d8334))



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



## [2.0.6](https://github.com/varletjs/varlet/compare/v2.0.5...v2.0.6) (2022-10-20)


### Bug Fixes

* fix select disabled and readonly bug ([#731](https://github.com/varletjs/varlet/issues/731)) ([411d327](https://github.com/varletjs/varlet/commit/411d3272f29d0ed778f886485d2f925d56306842))


### Features

* **cli/release:** add branch confirm ([6f3c764](https://github.com/varletjs/varlet/commit/6f3c764f4b70e13b9930d1e6858dc75ada3d753b))



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



