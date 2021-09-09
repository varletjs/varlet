'use strict'
;(self.webpackChunkbasic_ui = self.webpackChunkbasic_ui || []).push([
  [191],
  {
    956: (n, t, e) => {
      var o = e(645),
        r = e.n(o)()(function (n) {
          return n[1]
        })
      r.push([n.id, '.app-type {\n  width: 100%;\n  padding: 15px 0;\n  color: #888;\n  font-size: 14px;\n}\n', '']),
        (t.Z = r)
    },
    478: (n, t, e) => {
      var o = e(645),
        r = e.n(o)()(function (n) {
          return n[1]
        })
      r.push([
        n.id,
        '.basic-button {\n  display: flex;\n  padding: 10px;\n  background: #009688;\n  color: #fff;\n  outline: none;\n  border: none;\n  border-radius: 2px;\n  cursor: pointer;\n}\n.basic-button:active {\n  opacity: 0.3;\n}\n',
        '',
      ]),
        (t.Z = r)
    },
    191: (n, t, e) => {
      e.r(t), e.d(t, { default: () => w })
      var o = e(252),
        r = (0, o.Uk)('基本使用'),
        u = (0, o.Uk)('组件库从我开始'),
        a = (0, o.Uk)('修改颜色'),
        l = (0, o.Uk)('组件库从我开始'),
        i = e(577),
        p = (0, o.aZ)({
          name: 'BButton',
          props: { color: { type: String }, onClick: { type: Function } },
          setup: (n) => ({
            handleClick: (t) => {
              var e
              return null === (e = n.onClick) || void 0 === e ? void 0 : e.call(n, t)
            },
          }),
        }),
        s = e(379),
        c = e.n(s),
        d = e(478)
      c()(d.Z, { insert: 'head', singleton: !1 }),
        d.Z.locals,
        (p.render = function (n, t, e, r, u, a) {
          return (
            (0, o.wg)(),
            (0, o.iD)(
              'button',
              { class: 'basic-button', style: (0, i.j5)({ background: n.color }) },
              [(0, o.WI)(n.$slots, 'default')],
              4
            )
          )
        })
      var f = p,
        b = { class: 'app-type' },
        k = (0, o.aZ)({ name: 'AppType' }),
        v = e(956)
      c()(v.Z, { insert: 'head', singleton: !1 }),
        v.Z.locals,
        (k.render = function (n, t, e, r, u, a) {
          return (0, o.wg)(), (0, o.iD)('div', b, [(0, o.WI)(n.$slots, 'default')])
        })
      var g = k,
        w = {
          components: { [f.name]: f, AppType: g },
          render: function (n, t, e, i, p, s) {
            var c = (0, o.up)('app-type'),
              d = (0, o.up)('b-button')
            return (
              (0, o.wg)(),
              (0, o.iD)(
                o.HY,
                null,
                [
                  (0, o.Wm)(c, null, { default: (0, o.w5)(() => [r]), _: 1 }),
                  (0, o.Wm)(d, null, { default: (0, o.w5)(() => [u]), _: 1 }),
                  (0, o.Wm)(c, null, { default: (0, o.w5)(() => [a]), _: 1 }),
                  (0, o.Wm)(d, { color: '#03A9F4' }, { default: (0, o.w5)(() => [l]), _: 1 }),
                ],
                64
              )
            )
          },
        }
    },
  },
])
