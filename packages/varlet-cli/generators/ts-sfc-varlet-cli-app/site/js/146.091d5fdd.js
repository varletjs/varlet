'use strict'
;(self.webpackChunkbasic_ui = self.webpackChunkbasic_ui || []).push([
  [146],
  {
    564: (n, e, l) => {
      var a = l(645),
        t = l.n(a)()(function (n) {
          return n[1]
        })
      t.push([
        n.id,
        '.logo[data-v-49cd051b] {\n  height: 100px;\n  padding-top: 30px;\n  margin-bottom: 20px;\n}\n.varlet-home__title[data-v-49cd051b] {\n  margin: 0 0 16px;\n  font-size: 32px;\n}\n.varlet-home__title[data-v-49cd051b],\n.varlet-home__desc[data-v-49cd051b] {\n  padding-left: 16px;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.varlet-home__desc[data-v-49cd051b] {\n  margin: 0 0 40px;\n  color: rgba(69, 90, 100, 0.6);\n  font-size: 14px;\n}\n.varlet-home__image[data-v-49cd051b] {\n  width: 32px;\n  height: 32px;\n}\n.varlet-home__image[data-v-49cd051b],\n.varlet-home__title span[data-v-49cd051b] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.varlet-home__title span[data-v-49cd051b] {\n  margin-left: 16px;\n}\n.var-cell[data-v-49cd051b] {\n  cursor: pointer;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transition: all 0.3s;\n  color: #555;\n}\n.var-cell[data-v-49cd051b]:hover {\n  color: var(--site-color-mobile-cell-hover);\n  background: var(--site-color-mobile-cell-hover-background);\n}\n',
        '',
      ]),
        (e.Z = t)
    },
    146: (n, e, l) => {
      l.r(e), l.d(e, { default: () => _ })
      var a = l(252),
        t = l(577)
      ;(0, a.dD)('data-v-49cd051b')
      var o = { class: 'logo' },
        i = { class: 'varlet-home__title' },
        r = ['src'],
        c = { class: 'varlet-home__desc' }
      ;(0, a.Cn)()
      var d = l(473),
        v = l(810),
        s = l(262),
        u = l(357),
        p = {
          name: 'AppHome',
          setup() {
            var n,
              e,
              l,
              a,
              t,
              o,
              i = (0, s.iH)(null !== (n = null == d ? void 0 : d.title) && void 0 !== n ? n : ''),
              r = (0, s.iH)(null !== (e = null == d ? void 0 : d.logo) && void 0 !== e ? e : ''),
              c = (0, s.iH)(
                null !== (l = null == d || null === (a = d.mobile) || void 0 === a ? void 0 : a.title) && void 0 !== l
                  ? l
                  : {}
              ),
              p = (0, s.iH)(
                null !== (t = null == d || null === (o = d.pc) || void 0 === o ? void 0 : o.menu) && void 0 !== t
                  ? t
                  : []
              ).value.filter((n) => 2 === n.type),
              h = (0, s.qj)(p),
              g = (0, s.iH)('zh-CN'),
              m = (0, s.iH)('mobile'),
              _ = (0, v.tv)()
            return (
              (0, u.jS)((n) => {
                g.value = n
              }),
              (0, u.Id)((n) => {
                m.value = n
              }),
              {
                components: h,
                lang: g,
                toComponent: (n) => {
                  _.push({ path: '/'.concat(n.doc), query: { language: g.value, platform: m.value, replace: n.doc } })
                },
                logo: r,
                title: i,
                description: c,
              }
            )
          },
        },
        h = l(379),
        g = l.n(h),
        m = l(564)
      g()(m.Z, { insert: 'head', singleton: !1 }),
        m.Z.locals,
        (p.render = function (n, e, l, d, v, s) {
          var u = (0, a.up)('var-icon'),
            p = (0, a.up)('var-cell'),
            h = (0, a.Q2)('ripple')
          return (
            (0, a.wg)(),
            (0, a.iD)(
              a.HY,
              null,
              [
                (0, a._)('div', o, [
                  (0, a._)('h1', i, [
                    (0, a._)('img', { class: 'varlet-home__image', src: d.logo }, null, 8, r),
                    (0, a._)('span', null, (0, t.zw)(d.title), 1),
                  ]),
                  (0, a._)('h2', c, (0, t.zw)(d.description[d.lang]), 1),
                ]),
                ((0, a.wg)(!0),
                (0, a.iD)(
                  a.HY,
                  null,
                  (0, a.Ko)(d.components, (n) =>
                    (0, a.wy)(
                      ((0, a.wg)(),
                      (0, a.j4)(
                        p,
                        { key: n.text, onClick: (e) => d.toComponent(n) },
                        {
                          extra: (0, a.w5)(() => [(0, a.Wm)(u, { name: 'chevron-right', size: '14' })]),
                          default: (0, a.w5)(() => [(0, a.Uk)((0, t.zw)(n.text[d.lang]), 1)]),
                          _: 2,
                        },
                        1032,
                        ['onClick']
                      )),
                      [[h]]
                    )
                  ),
                  128
                )),
              ],
              64
            )
          )
        }),
        (p.__scopeId = 'data-v-49cd051b')
      var _ = p
    },
  },
])
