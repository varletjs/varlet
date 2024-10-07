import { reactive as _e, onMounted as jo, nextTick as He, onActivated as Do, isRef as wh, watch as fe, onBeforeUnmount as Ht, onDeactivated as vr, onUnmounted as qr, inject as Sd, getCurrentInstance as Wo, computed as B, ref as $, unref as Pd, provide as zd, isVNode as Ch, defineComponent as x, h as Yt, Comment as Sh, Fragment as Ne, createApp as Ph, onBeforeMount as zh, createVNode as X, Teleport as oo, Transition as Qe, withDirectives as Ae, vShow as Qn, mergeProps as Ue, openBlock as h, createBlock as Ce, resolveDynamicComponent as mr, normalizeClass as p, normalizeStyle as q, createElementBlock as P, resolveComponent as Q, resolveDirective as Ye, createCommentVNode as G, createElementVNode as N, toDisplayString as le, withCtx as ce, renderSlot as V, renderList as Ke, onUpdated as Xr, createTextVNode as Ie, normalizeProps as wo, guardReactiveProps as Gr, createSlots as rr, withModifiers as Wn, vModelText as Oh, withKeys as Ys, TransitionGroup as Th } from "vue";
const Od = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, tT = _e(Od);
var Nn = _e(Od), Eh = Object.defineProperty, Bh = Object.defineProperties, Dh = Object.getOwnPropertyDescriptors, js = Object.getOwnPropertySymbols, Ih = Object.prototype.hasOwnProperty, Mh = Object.prototype.propertyIsEnumerable, Ws = (e, n, o) => n in e ? Eh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Nh = (e, n) => {
  for (var o in n || (n = {}))
    Ih.call(n, o) && Ws(e, o, n[o]);
  if (js)
    for (var o of js(n))
      Mh.call(n, o) && Ws(e, o, n[o]);
  return e;
}, Ah = (e, n) => Bh(e, Dh(n)), yn = (e) => typeof e == "string", as = (e) => typeof e == "boolean", Tn = (e) => typeof e == "number", Td = (e) => Tn(e) || yn(e) && /^[-+]?\d+$/.test(e), zo = (e) => Object.prototype.toString.call(e) === "[object Object]", Vh = (e) => typeof e == "object" && e !== null, Rn = (e) => typeof e == "function", Xe = (e) => Array.isArray(e), Rh = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Zn = (e) => e == null || e === "" || Xe(e) && !e.length, Ed = (e) => e === window, Lh = () => ro() && "ontouchstart" in window, ro = () => typeof window < "u", St = () => ro() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), { hasOwnProperty: Fh } = Object.prototype, Br = (e, n) => Fh.call(e, n), Ks = (e) => [...new Set(e)], Co = (e) => Xe(e) ? e : [e], tr = (e, n) => {
  if (e.length) {
    const o = e.indexOf(n);
    if (o > -1)
      return e.splice(o, 1);
  }
}, Uh = (e) => e.filter((n) => n != null), Hh = (e, n, o = "start") => {
  let r = o === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && r >= 0 && r <= e.length - 1; ) {
    if (n(e[r], r, e))
      return [e[r], r];
    o === "start" ? r++ : r--;
  }
  return [null, -1];
}, Yh = (...e) => e.map((n) => {
  if (Xe(n)) {
    const [o, r, t = null] = n;
    return o ? r : t;
  }
  return n;
}), Bd = () => typeof globalThis < "u" ? globalThis : ro() ? window : typeof global < "u" ? global : self, Dr = (e) => {
  const n = Bd();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}, qs = (e) => {
  const n = Bd();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}, nr = () => new Promise((e) => {
  Dr(e);
}), kn = () => new Promise((e) => {
  Dr(() => {
    Dr(e);
  });
}), Ko = (e) => window.getComputedStyle(e), an = (e) => {
  if (Ed(e)) {
    const n = e.innerWidth, o = e.innerHeight, r = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: n,
      bottom: o,
      width: n,
      height: o
    };
    return Ah(Nh({}, r), {
      toJSON: () => r
    });
  }
  return e.getBoundingClientRect();
}, jh = (e) => {
  const { top: n, bottom: o, left: r, right: t } = an(e), { width: a, height: i } = an(window), l = r <= a && t >= 0, s = n <= i && o >= 0;
  return l && s;
}, Wh = (e) => new Promise((n) => {
  const o = new FileReader();
  o.onload = () => {
    n(o.result);
  }, o.readAsDataURL(e);
}), Ve = (e) => {
  e.cancelable !== !1 && e.preventDefault();
}, Fo = (e) => {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}, is = (e) => {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}, ls = (e, n = 200) => {
  let o, r = 0;
  return function t(...a) {
    const i = Date.now(), l = i - r;
    r || (r = i), o && clearTimeout(o), l >= n ? (e.apply(this, a), r = i) : o = setTimeout(() => {
      t.apply(this, a);
    }, n - l);
  };
};
function C(e, ...n) {
  if (Xe(e))
    return e.map((o) => o(...n));
  if (e)
    return e(...n);
}
var U = (e) => e == null ? 0 : yn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : as(e) ? Number(e) : e, Mn = (e, n, o) => Math.min(o, Math.max(n, e)), Kh = (e, n) => Mn(e, 0, n.length - 1), qh = (e) => ss(e).replace(e.charAt(0), e.charAt(0).toUpperCase()), ss = (e) => e.replace(/-(\w)/g, (n, o) => o.toUpperCase()), Dd = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
function Xh(e) {
  return (n) => {
    const o = `${e}-${n}`, r = (t) => t ? t[0] === "$" ? t.replace("$", e) : t.startsWith("--") ? `${o}${t}` : `${o}__${t}` : o;
    return {
      name: qh(o),
      n: r,
      classes: Yh
    };
  };
}
var Gh = Object.defineProperty, Pt = Object.getOwnPropertySymbols, Id = Object.prototype.hasOwnProperty, Md = Object.prototype.propertyIsEnumerable, Xs = (e, n, o) => n in e ? Gh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Zh = (e, n) => {
  for (var o in n || (n = {}))
    Id.call(n, o) && Xs(e, o, n[o]);
  if (Pt)
    for (var o of Pt(n))
      Md.call(n, o) && Xs(e, o, n[o]);
  return e;
}, Jh = (e, n) => {
  var o = {};
  for (var r in e)
    Id.call(e, r) && n.indexOf(r) < 0 && (o[r] = e[r]);
  if (e != null && Pt)
    for (var r of Pt(e))
      n.indexOf(r) < 0 && Md.call(e, r) && (o[r] = e[r]);
  return o;
};
function mn(e) {
  let n = !1;
  jo(() => {
    e(), He(() => {
      n = !0;
    });
  }), Do(() => {
    n && e();
  });
}
function je(e, n, o, r = {}) {
  if (!ro())
    return;
  const { passive: t = !1, capture: a = !1 } = r;
  let i = !1, l = !1;
  const s = (v) => Rn(v) ? v() : Pd(v), u = (v) => {
    if (i || l)
      return;
    const g = s(v);
    g && (g.addEventListener(n, o, {
      passive: t,
      capture: a
    }), i = !0);
  }, c = (v) => {
    if (!i || l)
      return;
    const g = s(v);
    g && (g.removeEventListener(n, o, {
      capture: a
    }), i = !1);
  };
  let d;
  wh(e) && (d = fe(
    () => e.value,
    (v, g) => {
      c(g), u(v);
    }
  ));
  const f = () => {
    d == null || d(), c(e), l = !0;
  };
  return mn(() => {
    u(e);
  }), Ht(() => {
    c(e);
  }), vr(() => {
    c(e);
  }), f;
}
function us(e, n, o) {
  if (!ro())
    return;
  je(document, n, (t) => {
    const a = Rn(e) ? e() : Pd(e);
    a && !a.contains(t.target) && o(t);
  });
}
function Zr(e) {
  let n = !1;
  vr(() => {
    n = !0, e();
  }), qr(() => {
    n || e();
  });
}
function Nd(e) {
  const n = Wo();
  return e in n.provides;
}
function hn(e) {
  if (!Nd(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const o = Sd(e), { childInstances: r, collect: t, clear: a } = o, i = Jh(o, ["childInstances", "collect", "clear"]), l = Wo();
  return {
    index: B(() => r.indexOf(l)),
    parentProvider: i,
    bindParent: (c) => {
      jo(() => {
        He().then(() => {
          t(l, c);
        });
      }), Ht(() => {
        He().then(() => {
          a(l, c);
        });
      });
    }
  };
}
function Qh(e) {
  const n = [], o = (r) => {
    if (r != null && r.component) {
      o(r == null ? void 0 : r.component.subTree);
      return;
    }
    Xe(r == null ? void 0 : r.children) && r.children.forEach((t) => {
      Ch(t) && (n.push(t), o(t));
    });
  };
  return o(e), n;
}
function gn(e) {
  const n = Wo(), o = _e([]), r = [], t = B(() => o.length), a = () => {
    const u = Qh(n.subTree);
    o.sort((c, d) => u.indexOf(c.vnode) - u.indexOf(d.vnode));
  }, i = (u, c) => {
    o.push(u), r.push(c), a();
  }, l = (u, c) => {
    tr(o, u), tr(r, c);
  };
  return {
    length: t,
    childProviders: r,
    bindChildren: (u) => {
      zd(e, Zh({
        childInstances: o,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function to(e) {
  je(() => window, "resize", e, { passive: !0 }), je(() => window, "orientationchange", e, { passive: !0 });
}
function _h(e, n) {
  const o = $(!1);
  return fe(
    e,
    (r) => {
      n === r && (o.value = !0);
    },
    { immediate: !0 }
  ), o;
}
function xh(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function hr() {
  const e = $(0), n = $(0), o = $(0), r = $(0), t = $(0), a = $(0), i = $(0), l = $(0), s = $(0), u = $(0), c = $(), d = $(!1), f = $(!1), v = $(0), g = $(0);
  let m = null;
  const k = () => {
    e.value = 0, n.value = 0, o.value = 0, r.value = 0, t.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, c.value = void 0, d.value = !1, f.value = !1, v.value = 0, g.value = 0;
  };
  return {
    startX: e,
    startY: n,
    deltaX: o,
    deltaY: r,
    offsetX: t,
    offsetY: a,
    prevX: i,
    prevY: l,
    moveX: s,
    moveY: u,
    direction: c,
    touching: d,
    dragging: f,
    startTime: v,
    distance: g,
    resetTouch: k,
    startTouch: (O) => {
      k();
      const { clientX: D, clientY: T } = O.touches[0];
      e.value = D, n.value = T, i.value = D, l.value = T, d.value = !0, v.value = performance.now(), f.value = !1, m && window.cancelAnimationFrame(m);
    },
    moveTouch: (O) => {
      const { clientX: D, clientY: T } = O.touches[0];
      f.value = !0, o.value = D - e.value, r.value = T - n.value, t.value = Math.abs(o.value), a.value = Math.abs(r.value), g.value = Math.sqrt(t.value ** 2 + a.value ** 2), s.value = D - i.value, u.value = T - l.value, c.value || (c.value = xh(t.value, a.value)), i.value = D, l.value = T;
    },
    endTouch: () => {
      d.value = !1, m = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (O) => Fo(O) === 0 && r.value > 0,
    isReachBottom: (O, D = 1) => {
      const { scrollHeight: T, clientHeight: E, scrollTop: M } = O, R = Math.abs(T - M - E);
      return r.value < 0 && R <= D;
    }
  };
}
function Ad() {
  const e = Wo(), n = Dd(e.type.name), o = $(void 0);
  return jo(() => {
    o.value = `${n}-${e.uid}`;
  }), o;
}
function eg(e = {}) {
  const { initialWidth: n = 0, initialHeight: o = 0 } = e, r = $(n), t = $(o), a = () => {
    ro() && (r.value = window.innerWidth, t.value = window.innerHeight);
  };
  return mn(a), to(a), {
    width: r,
    height: t
  };
}
function Kn(e, n, o = {}) {
  const { passive: r = !0, eventName: t, defaultValue: a, emit: i } = o, l = t ?? `onUpdate:${n.toString()}`, s = () => {
    var d;
    return (d = e[n]) != null ? d : a;
  };
  if (!r)
    return B({
      get() {
        return s();
      },
      set(d) {
        i ? i(l, d) : C(e[l], d);
      }
    });
  const u = $(s());
  let c = !0;
  return fe(
    () => e[n],
    () => {
      c = !1, u.value = s(), He(() => {
        c = !0;
      });
    }
  ), fe(
    () => u.value,
    (d) => {
      c && (i ? i(l, d) : C(e[l], d));
    }
  ), u;
}
var ng = Object.defineProperty, og = Object.defineProperties, rg = Object.getOwnPropertyDescriptors, Gs = Object.getOwnPropertySymbols, tg = Object.prototype.hasOwnProperty, ag = Object.prototype.propertyIsEnumerable, Zs = (e, n, o) => n in e ? ng(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ni = (e, n) => {
  for (var o in n || (n = {}))
    tg.call(n, o) && Zs(e, o, n[o]);
  if (Gs)
    for (var o of Gs(n))
      ag.call(n, o) && Zs(e, o, n[o]);
  return e;
}, ig = (e, n) => og(e, rg(n)), Js = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
function De(e, n) {
  return Xe(n) ? n.reduce((o, r) => (o[r] = e[r], o), {}) : e[n];
}
function re(e, n) {
  const o = n ?? e;
  return o.install = function(r) {
    const { name: t } = e;
    t && r.component(t, e);
  }, o;
}
function se(e, n) {
  e.setPropsDefaults = function(o) {
    Object.entries(o).forEach(([r, t]) => {
      const a = n[r];
      if (a != null) {
        if (zo(a)) {
          n[r] = ig(Ni({}, a), {
            default: t
          });
          return;
        }
        n[r] = {
          type: a,
          default: t
        };
      }
    });
  };
}
function lg(e) {
  const n = Ph(e), o = document.createElement("div");
  return document.body.appendChild(o), {
    instance: n.mount(o),
    unmount() {
      n.unmount(), o.parentNode && document.body.removeChild(o);
    }
  };
}
function gr(e, n = {}, o = {}) {
  const r = {
    setup() {
      return () => Yt(e, Ni(Ni({}, n), o));
    }
  }, { unmount: t } = lg(r);
  return { unmountInstance: t };
}
function Vd(e) {
  const n = [];
  return e.forEach((o) => {
    if (o.type !== Sh) {
      if (o.type === Ne && Xe(o.children)) {
        o.children.forEach((r) => {
          n.push(r);
        });
        return;
      }
      n.push(o);
    }
  }), n;
}
function Qs(e) {
  return zo(e) && Rn(e.safeParseAsync);
}
function sg(e) {
  return zo(e) && Br(e, "success");
}
function Ln() {
  const e = $(""), n = (t, a, i) => Js(this, null, function* () {
    const l = Co(t).filter((u) => Qs(u) || Rn(u)), s = yield Promise.all(
      l.map((u) => Qs(u) ? u.safeParseAsync(a) : u(a, i))
    );
    return o(), !s.some((u) => {
      if (sg(u)) {
        if (u.success === !1)
          return e.value = u.error.issues[0].message, !0;
      } else if (u !== !0)
        return e.value = String(u), !0;
      return !1;
    });
  }), o = () => {
    e.value = "";
  };
  return {
    errorMessage: e,
    validate: n,
    resetValidation: o,
    validateWithTrigger: (t, a, i, l, s) => Js(this, null, function* () {
      t.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function ug(e) {
  je(() => window, "hashchange", e), je(() => window, "popstate", e);
}
function qo() {
  const e = $(!1);
  return Do(() => {
    e.value = !1;
  }), vr(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
const ee = Xh("var");
function A(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function fn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
const Jr = x({
  props: {
    is: {
      type: [String, Object]
    },
    tag: {
      type: String,
      default: "span"
    }
  },
  setup(e) {
    return () => yn(e.is) ? Yt(e.tag, e.is) : e.is;
  }
});
var cg = Object.defineProperty, dg = Object.defineProperties, fg = Object.getOwnPropertyDescriptors, _s = Object.getOwnPropertySymbols, pg = Object.prototype.hasOwnProperty, vg = Object.prototype.propertyIsEnumerable, xs = (e, n, o) => n in e ? cg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Rd = (e, n) => {
  for (var o in n || (n = {}))
    pg.call(n, o) && xs(e, o, n[o]);
  if (_s)
    for (var o of _s(n))
      vg.call(n, o) && xs(e, o, n[o]);
  return e;
}, mg = (e, n) => dg(e, fg(n));
const { n: Ld } = ee("ripple"), eu = 250;
function hg(e) {
  const { zIndex: n, position: o } = Ko(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", o === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function nu(e) {
  return "touches" in e;
}
function gg(e, n) {
  const { top: o, left: r } = an(e), { clientWidth: t, clientHeight: a } = e, i = Math.sqrt(t ** 2 + a ** 2) / 2, l = i * 2, s = nu(n) ? n.touches[0].clientX - r : t / 2, u = nu(n) ? n.touches[0].clientY - o : a / 2, c = (t - i * 2) / 2, d = (a - i * 2) / 2, f = s - i, v = u - i;
  return { x: f, y: v, centerX: c, centerY: d, size: l };
}
function cs(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !Nn.enableRipple)
    return;
  const o = () => {
    n.tasker = null;
    const { x: r, y: t, centerX: a, centerY: i, size: l } = gg(this, e), s = document.createElement("div");
    s.classList.add(Ld()), s.style.opacity = "0", s.style.transform = `translate(${r}px, ${t}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), hg(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(o, 30);
}
function zt() {
  const e = this._ripple, n = () => {
    const o = this.querySelectorAll(`.${Ld()}`);
    if (!o.length)
      return;
    const r = o[o.length - 1], t = eu - performance.now() + Number(r.dataset.createdAt);
    window.setTimeout(() => {
      r.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = r.parentNode) == null ? void 0 : a.removeChild(r);
      }, eu);
    }, t);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Fd() {
  if (!Lh() || !Nn.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
let Ot = !1;
function bg(e) {
  Ot || !(e.key === " " || e.key === "Enter") || (cs.call(this, e), Ot = !0);
}
function ou() {
  Ot && (zt.call(this), Ot = !1);
}
function yg(e, n) {
  var o;
  e._ripple = mg(Rd({
    tasker: null
  }, (o = n.value) != null ? o : {}), {
    removeRipple: zt.bind(e)
  }), e.addEventListener("touchstart", cs, { passive: !0 }), e.addEventListener("touchmove", Fd, { passive: !0 }), e.addEventListener("dragstart", zt, { passive: !0 }), e.addEventListener("keydown", bg), e.addEventListener("keyup", ou), e.addEventListener("blur", ou), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function kg(e) {
  e.removeEventListener("touchstart", cs), e.removeEventListener("touchmove", Fd), e.removeEventListener("dragstart", zt), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function $g(e, n) {
  var o, r, t, a, i, l;
  const s = {
    color: (o = n.value) == null ? void 0 : o.color,
    disabled: (r = n.value) == null ? void 0 : r.disabled
  };
  (s.color !== ((t = e._ripple) == null ? void 0 : t.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = Rd({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const Ud = {
  mounted: yg,
  unmounted: kg,
  updated: $g,
  install(e) {
    e.directive("ripple", this);
  }
}, aT = Ud;
var nn = Ud;
const br = {
  show: Boolean,
  position: {
    type: String,
    default: "center"
  },
  transition: String,
  overlay: {
    type: Boolean,
    default: !0
  },
  overlayClass: String,
  overlayStyle: Object,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  },
  closeOnKeyEscape: {
    type: Boolean,
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  zIndex: Number,
  safeArea: Boolean,
  safeAreaTop: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onKeyEscape: A(),
  onClickOverlay: A(),
  "onUpdate:show": A(),
  // internal for Dialog
  onRouteChange: A()
}, { n: ru } = ee("");
function Hd() {
  Object.keys(Nn.locks).length <= 0 ? document.body.classList.remove(ru("$--lock")) : document.body.classList.add(ru("$--lock"));
}
function tt(e) {
  Nn.locks[e] = 1, Hd();
}
function at(e) {
  delete Nn.locks[e], Hd();
}
function Qr(e, n) {
  const { uid: o } = Wo();
  n && fe(n, (r) => {
    r === !1 ? at(o) : r === !0 && e() === !0 && tt(o);
  }), fe(e, (r) => {
    n && n() === !1 || (r === !0 ? tt(o) : at(o));
  }), zh(() => {
    n && n() === !1 || e() === !0 && tt(o);
  }), qr(() => {
    n && n() === !1 || e() === !0 && at(o);
  }), Do(() => {
    n && n() === !1 || e() === !0 && tt(o);
  }), vr(() => {
    n && n() === !1 || e() === !0 && at(o);
  });
}
function _r(e, n) {
  const o = $(Nn.zIndex);
  return fe(
    e,
    (r) => {
      r && (Nn.zIndex += n, o.value = Nn.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: o };
}
const fo = [];
function ds(e, n) {
  const { uid: o } = Wo();
  fe(e, (i) => {
    i && !a(o) ? t() : setTimeout(() => {
      tr(fo, a(o));
    });
  }), mn(() => {
    e() && t();
  }), Zr(() => {
    tr(fo, a(o));
  });
  function r() {
    return fo.length === 0 ? !0 : (fo.sort((i, l) => i.zIndex.value - l.zIndex.value), fo[fo.length - 1].uid === o);
  }
  function t() {
    a(o) || fo.push({ uid: o, zIndex: n });
  }
  function a(i) {
    return fo.find((l) => l.uid === i);
  }
  return {
    onStackTop: r
  };
}
const Yd = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function jd() {
  const { bindParent: e, parentProvider: n, index: o } = hn(Yd);
  return {
    index: o,
    popup: n,
    bindPopup: e
  };
}
function wg() {
  const { bindChildren: e, childProviders: n, length: o } = gn(Yd);
  return {
    length: o,
    popupItems: n,
    bindPopupItems: e
  };
}
var Cg = Object.defineProperty, tu = Object.getOwnPropertySymbols, Sg = Object.prototype.hasOwnProperty, Pg = Object.prototype.propertyIsEnumerable, au = (e, n, o) => n in e ? Cg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, zg = (e, n) => {
  for (var o in n || (n = {}))
    Sg.call(n, o) && au(e, o, n[o]);
  if (tu)
    for (var o of tu(n))
      Pg.call(n, o) && au(e, o, n[o]);
  return e;
};
const {
  name: Og,
  n: Un,
  classes: Si
} = ee("popup");
var jt = x({
  name: Og,
  inheritAttrs: !1,
  props: br,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const r = _h(() => e.show, !0), {
      zIndex: t
    } = _r(() => e.show, 3), a = B(() => {
      var g;
      return (g = e.zIndex) != null ? g : t.value;
    }), {
      onStackTop: i
    } = ds(() => e.show, a), {
      disabled: l
    } = qo(), {
      bindPopupItems: s
    } = wg();
    Qr(() => e.show, () => e.lockScroll), fe(() => e.show, (g) => {
      C(g ? e.onOpen : e.onClose);
    }), s({
      show: B(() => e.show)
    }), je(() => window, "keydown", v), ug(() => C(e.onRouteChange));
    function u() {
      const {
        closeOnClickOverlay: g,
        onClickOverlay: m
      } = e;
      C(m), g && C(e["onUpdate:show"], !1);
    }
    function c() {
      const {
        overlayClass: g = "",
        overlayStyle: m
      } = e;
      return X("div", {
        class: Si(Un("overlay"), g),
        style: zg({
          zIndex: a.value - 1
        }, m),
        onClick: u
      }, null);
    }
    function d() {
      return Ae(X("div", Ue({
        class: Si(Un("content"), Un(`--${e.position}`), [e.defaultStyle, Un("--content-background-color")], [e.defaultStyle, Un("$-elevation--3")], [e.safeArea, Un("--safe-area")], [e.safeAreaTop, Un("--safe-area-top")]),
        style: {
          zIndex: a.value
        },
        role: "dialog",
        "aria-modal": "true"
      }, o), [r.value && C(n.default)]), [[Qn, e.show]]);
    }
    function f() {
      return X(Qe, {
        name: Un("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Ae(X("div", {
          class: Si(Un("$--box"), Un(), [!e.overlay, Un("--pointer-events-none")]),
          style: {
            zIndex: a.value - 2
          }
        }, [e.overlay && c(), X(Qe, {
          name: e.transition || Un(`$-pop-${e.position}`)
        }, {
          default: () => [d()]
        })]), [[Qn, e.show]])]
      });
    }
    function v(g) {
      !i() || g.key !== "Escape" || !e.show || (C(e.onKeyEscape), e.closeOnKeyEscape && (Ve(g), C(e["onUpdate:show"], !1)));
    }
    return () => {
      const {
        teleport: g
      } = e;
      return g ? X(oo, {
        to: g,
        disabled: l.value
      }, {
        default: () => [f()]
      }) : f();
    };
  }
});
re(jt);
se(jt, br);
const iT = jt;
var Oo = jt;
const en = {
  name: String,
  size: [Number, String],
  color: String,
  namespace: {
    type: String,
    default: "var-icon"
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  animationClass: String,
  onClick: A()
};
function An(e, n) {
  throw Error(`Varlet [${e}]: ${n}`);
}
function Tg(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function Eg(e) {
  const { left: n } = an(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function iu(e) {
  const { top: n } = an(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Pi(e) {
  const { transform: n } = Ko(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function To(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const o = /(scroll|auto)/, { overflowY: r, overflow: t } = Ko(n);
    if (o.test(r) || o.test(t))
      return n;
  }
  return window;
}
function Bg(e) {
  const n = [];
  let o = e;
  for (; !Ed(o); )
    o = To(o), n.push(o);
  return n;
}
function Wd(e, n) {
  if (yn(e)) {
    const o = document.querySelector(e);
    return o || An(n, "target element cannot found"), o;
  }
  if (Vh(e)) return e;
  An(n, 'type of prop "target" should be a selector or an element object');
}
function Dg() {
  const { width: e, height: n } = an(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const Ig = (e) => yn(e) && e.endsWith("rem"), Mg = (e) => yn(e) && e.endsWith("px") || Tn(e), Ng = (e) => yn(e) && e.endsWith("vw"), Ag = (e) => yn(e) && e.endsWith("vh"), Vg = (e) => yn(e) && e.endsWith("vmin"), Rg = (e) => yn(e) && e.endsWith("vmax"), xe = (e) => {
  if (Td(e))
    return Number(e);
  if (Mg(e))
    return +e.replace("px", "");
  if (!ro())
    return 0;
  const { vw: n, vh: o, vMin: r, vMax: t } = Dg();
  if (Ng(e))
    return +e.replace("vw", "") * n / 100;
  if (Ag(e))
    return +e.replace("vh", "") * o / 100;
  if (Vg(e))
    return +e.replace("vmin", "") * r / 100;
  if (Rg(e))
    return +e.replace("vmax", "") * t / 100;
  if (Ig(e)) {
    const a = +e.replace("rem", ""), i = Ko(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return yn(e) ? U(e) : 0;
}, ze = (e) => {
  if (e != null)
    return Td(e) ? `${e}px` : String(e);
}, Cn = (e, n = 1) => {
  if (e == null)
    return;
  const o = ze(e), r = o.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(o) * n}${r}`;
};
function Ir(e, { top: n = 0, left: o = 0, duration: r = 300, animation: t }) {
  const a = Date.now(), i = Fo(e), l = is(e);
  return new Promise((s) => {
    const u = () => {
      const c = (Date.now() - a) / r;
      if (c < 1) {
        const d = i + (n - i) * t(c), f = l + (o - l) * t(c);
        e.scrollTo(f, d), requestAnimationFrame(u);
      } else
        e.scrollTo(o, n), s();
    };
    requestAnimationFrame(u);
  });
}
function Kd(e) {
  return Object.entries(e ?? {}).reduce((n, [o, r]) => {
    const t = o.startsWith("--") ? o : `--${Dd(o)}`;
    return n[t] = r, n;
  }, {});
}
function Tt(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
const lu = ["button", "input", "select", "textarea", "[tabindex]", "[href]"].map((e) => `${e}:not([disabled])`).join(", ");
function qd(e, n, o) {
  var r;
  const t = n.querySelectorAll(lu);
  if (!t.length)
    return;
  const a = [e, ...Array.from(e.querySelectorAll(lu))].findIndex(
    (l) => l === document.activeElement
  ) !== -1, i = Array.from(t).findIndex((l) => l === document.activeElement);
  if (o === "ArrowDown") {
    if (a && i === -1 || i === t.length - 1) {
      t[0].focus();
      return;
    }
    if (i !== -1 && i < t.length - 1) {
      t[i + 1].focus();
      return;
    }
  }
  if (o === "ArrowUp") {
    if (a && i === -1 || i === 0) {
      (r = t[t.length - 1]) == null || r.focus();
      return;
    }
    i > 0 && t[i - 1].focus();
  }
}
var Lg = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: Fg, n: Ug, classes: Hg } = ee("icon");
function Yg(e, n) {
  return h(), Ce(mr(e.isURL(e.name) ? "img" : "i"), {
    class: p(
      e.classes(
        e.n(),
        [e.namespace !== e.n(), e.namespace],
        `${e.namespace}--set`,
        [e.isURL(e.name), e.n("image"), `${e.namespace}-${e.nextName}`],
        [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass]
      )
    ),
    style: q({
      color: e.color,
      "transition-duration": `${e.toNumber(e.transition)}ms`,
      width: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      height: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      fontSize: e.toSizeUnit(e.size)
    }),
    src: e.isURL(e.name) ? e.nextName : null,
    onClick: e.onClick
  }, null, 8, ["class", "style", "src", "onClick"]);
}
const Xd = x({
  name: Fg,
  props: en,
  setup(e) {
    const n = $(""), o = $(!1);
    fe(() => e.name, r, { immediate: !0 });
    function r(t, a) {
      return Lg(this, null, function* () {
        const { transition: i } = e;
        if (a == null || U(i) === 0) {
          n.value = t;
          return;
        }
        o.value = !0, yield He(), setTimeout(() => {
          a != null && (n.value = t), o.value = !1;
        }, U(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: o,
      n: Ug,
      classes: Hg,
      isURL: Rh,
      toNumber: U,
      toSizeUnit: ze
    };
  }
});
Xd.render = Yg;
var Wt = Xd;
re(Wt);
se(Wt, en);
const lT = Wt;
var Ze = Wt;
const Gd = {
  hovering: Boolean,
  focusing: Boolean
}, { name: jg, n: Wg, classes: Kg } = ee("hover-overlay");
function qg(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.hovering, e.n("--hovering")], [e.focusing && !e.inMobile(), e.n("--focusing")]))
    },
    null,
    2
    /* CLASS */
  );
}
const Zd = x({
  name: jg,
  props: Gd,
  setup: () => ({
    n: Wg,
    classes: Kg,
    inMobile: St
  })
});
Zd.render = qg;
var Kt = Zd;
re(Kt);
se(Kt, Gd);
function _n() {
  const e = $(!1);
  return {
    hovering: e,
    handleHovering: (o) => {
      e.value = o;
    }
  };
}
const sT = Kt;
var Vn = Kt;
function Jd(e) {
  return e ? !!(e === "desktop" && St() || e === "mobile" && !St()) : !1;
}
function Xg(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((o, r) => {
    const [t, a] = r.split(":").map((i) => i.trim());
    return o[ss(t)] = a, o;
  }, {}) : {};
}
function Gg(e) {
  const { value: n } = e._hover, o = Xg(e);
  Object.keys(n).forEach((r) => {
    const t = ss(r);
    n[t] != null && o[t] && (e._hover.rawStyle[t] = o[t]);
  });
}
function fs(e, n) {
  Object.keys(n).forEach((o) => {
    const r = n[o];
    r != null && (e.style[o] = r);
  });
}
function Zg(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function Qd(e) {
  (e == null ? void 0 : e._hover) != null && (Zg(e), fs(e, e._hover.rawStyle));
}
function _d() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, Rn(e)) {
    e(this._hover.hovering);
    return;
  }
  fs(this, e);
}
function xd() {
  if (this._hover.hovering = !1, Rn(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  Qd(this);
}
function ef(e, n) {
  var o, r;
  const { arg: t, value: a } = n;
  Jd(t) || (e._hover = {
    value: a,
    hovering: (r = (o = e._hover) == null ? void 0 : o.hovering) != null ? r : !1,
    rawStyle: {}
  }, Gg(e), e.addEventListener("mouseenter", _d), e.addEventListener("mouseleave", xd));
}
function nf(e, n) {
  Jd(n.arg) || (Qd(e), e.removeEventListener("mouseenter", _d), e.removeEventListener("mouseleave", xd));
}
function Jg(e, n) {
  e._hover && nf(e, n);
}
function Qg(e, n) {
  return !Rn(n.value) && e._hover.hovering;
}
function _g(e, n) {
  ef(e, n), Qg(e, n) && fs(e, n.value);
}
const of = {
  mounted: ef,
  unmounted: nf,
  beforeUpdate: Jg,
  updated: _g,
  install(e) {
    e.directive("hover", this);
  }
}, uT = of;
var En = of;
const { name: xg, n: eb, classes: nb } = ee("action-sheet");
function ob(e, n) {
  const o = Q("var-icon"), r = Q("var-hover-overlay"), t = Ye("ripple"), a = Ye("hover");
  return Ae((h(), P(
    "div",
    {
      class: p(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
      style: q({ color: e.color })
    },
    [
      e.icon ? (h(), Ce(o, {
        key: 0,
        "var-action-sheet-cover": "",
        class: p(e.n("action-icon")),
        namespace: e.namespace,
        name: e.icon,
        size: e.iconSize
      }, null, 8, ["class", "namespace", "name", "size"])) : G("v-if", !0),
      N(
        "div",
        {
          class: p(e.n("action-name"))
        },
        le(e.name),
        3
        /* TEXT, CLASS */
      ),
      X(r, {
        hovering: e.disabled ? !1 : e.hovering
      }, null, 8, ["hovering"])
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: e.disabled }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const rf = x({
  name: xg,
  components: {
    VarHoverOverlay: Vn,
    VarIcon: Ze
  },
  directives: { Ripple: nn, Hover: En },
  props: {
    name: String,
    className: String,
    disabled: Boolean,
    color: String,
    namespace: String,
    iconSize: [String, Number],
    icon: String
  },
  setup() {
    const { hovering: e, handleHovering: n } = _n();
    return {
      hovering: e,
      n: eb,
      classes: nb,
      handleHovering: n
    };
  }
});
rf.render = ob;
var rb = rf, tb = Object.defineProperty, su = Object.getOwnPropertySymbols, ab = Object.prototype.hasOwnProperty, ib = Object.prototype.propertyIsEnumerable, uu = (e, n, o) => n in e ? tb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, lb = (e, n) => {
  for (var o in n || (n = {}))
    ab.call(n, o) && uu(e, o, n[o]);
  if (su)
    for (var o of su(n))
      ib.call(n, o) && uu(e, o, n[o]);
  return e;
};
const tf = lb({
  show: Boolean,
  title: String,
  actions: {
    type: Array,
    default: () => []
  },
  closeOnClickAction: {
    type: Boolean,
    default: !0
  },
  onSelect: A(),
  "onUpdate:show": A()
}, De(br, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "closeOnKeyEscape",
  "safeArea",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  // internal for function call closes the dialog
  "onRouteChange",
  "onKeyEscape"
]));
var ps = {
  // Dialog
  dialogTitle: "提示",
  dialogConfirmButtonText: "确认",
  dialogCancelButtonText: "取消",
  // ActionSheet
  actionSheetTitle: "请选择",
  // List
  listLoadingText: "加载中",
  listFinishedText: "没有更多了",
  listErrorText: "加载失败",
  // Picker
  pickerTitle: "请选择",
  pickerConfirmButtonText: "确认",
  pickerCancelButtonText: "取消",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "一月",
      abbr: "一月"
    },
    "02": {
      name: "二月",
      abbr: "二月"
    },
    "03": {
      name: "三月",
      abbr: "三月"
    },
    "04": {
      name: "四月",
      abbr: "四月"
    },
    "05": {
      name: "五月",
      abbr: "五月"
    },
    "06": {
      name: "六月",
      abbr: "六月"
    },
    "07": {
      name: "七月",
      abbr: "七月"
    },
    "08": {
      name: "八月",
      abbr: "八月"
    },
    "09": {
      name: "九月",
      abbr: "九月"
    },
    10: {
      name: "十月",
      abbr: "十月"
    },
    11: {
      name: "十一月",
      abbr: "十一月"
    },
    12: {
      name: "十二月",
      abbr: "十二月"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "星期日",
      abbr: "日"
    },
    1: {
      name: "星期一",
      abbr: "一"
    },
    2: {
      name: "星期二",
      abbr: "二"
    },
    3: {
      name: "星期三",
      abbr: "三"
    },
    4: {
      name: "星期四",
      abbr: "四"
    },
    5: {
      name: "星期五",
      abbr: "五"
    },
    6: {
      name: "星期六",
      abbr: "六"
    }
  },
  datePickerSelected: "个被选择",
  datePickerHint: "选择日期",
  // pagination
  paginationItem: "条",
  paginationPage: "页",
  paginationJump: "前往",
  // time-picker
  timePickerHint: "选择时间"
}, af = {
  // Dialog
  dialogTitle: "Hint",
  dialogConfirmButtonText: "Confirm",
  dialogCancelButtonText: "Cancel",
  // ActionSheet
  actionSheetTitle: "Select One",
  // List
  listLoadingText: "Loading",
  listFinishedText: "No more",
  listErrorText: "Load fail",
  // Picker
  pickerTitle: "Pick it",
  pickerConfirmButtonText: "Confirm",
  pickerCancelButtonText: "Cancel",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "January",
      abbr: "JAN"
    },
    "02": {
      name: "February",
      abbr: "FEB"
    },
    "03": {
      name: "March",
      abbr: "MAR"
    },
    "04": {
      name: "April",
      abbr: "APR"
    },
    "05": {
      name: "May",
      abbr: "MAY"
    },
    "06": {
      name: "June",
      abbr: "JUN"
    },
    "07": {
      name: "July",
      abbr: "JUL"
    },
    "08": {
      name: "August",
      abbr: "AUG"
    },
    "09": {
      name: "September",
      abbr: "SEP"
    },
    10: {
      name: "October",
      abbr: "OCT"
    },
    11: {
      name: "November",
      abbr: "NOV"
    },
    12: {
      name: "December",
      abbr: "DEC"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "Sunday",
      abbr: "S"
    },
    1: {
      name: "Monday",
      abbr: "M"
    },
    2: {
      name: "Tuesday",
      abbr: "T"
    },
    3: {
      name: "Wednesday",
      abbr: "W"
    },
    4: {
      name: "Thursday",
      abbr: "T"
    },
    5: {
      name: "Friday",
      abbr: "F"
    },
    6: {
      name: "Saturday",
      abbr: "S"
    }
  },
  datePickerSelected: " selected",
  datePickerHint: "SELECT DATE",
  // pagination
  paginationItem: "",
  paginationPage: "page",
  paginationJump: "Go to",
  // time-picker
  timePickerHint: "SELECT TIME"
}, vs = {
  // Dialog
  dialogTitle: "提示",
  dialogConfirmButtonText: "確認",
  dialogCancelButtonText: "取消",
  // ActionSheet
  actionSheetTitle: "請選擇",
  // List
  listLoadingText: "載入中",
  listFinishedText: "沒有更多了",
  listErrorText: "載入失敗",
  // Picker
  pickerTitle: "請選擇",
  pickerConfirmButtonText: "確認",
  pickerCancelButtonText: "取消",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "一月",
      abbr: "一月"
    },
    "02": {
      name: "二月",
      abbr: "二月"
    },
    "03": {
      name: "三月",
      abbr: "三月"
    },
    "04": {
      name: "四月",
      abbr: "四月"
    },
    "05": {
      name: "五月",
      abbr: "五月"
    },
    "06": {
      name: "六月",
      abbr: "六月"
    },
    "07": {
      name: "七月",
      abbr: "七月"
    },
    "08": {
      name: "八月",
      abbr: "八月"
    },
    "09": {
      name: "九月",
      abbr: "九月"
    },
    10: {
      name: "十月",
      abbr: "十月"
    },
    11: {
      name: "十一月",
      abbr: "十一月"
    },
    12: {
      name: "十二月",
      abbr: "十二月"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "星期日",
      abbr: "日"
    },
    1: {
      name: "星期一",
      abbr: "一"
    },
    2: {
      name: "星期二",
      abbr: "二"
    },
    3: {
      name: "星期三",
      abbr: "三"
    },
    4: {
      name: "星期四",
      abbr: "四"
    },
    5: {
      name: "星期五",
      abbr: "五"
    },
    6: {
      name: "星期六",
      abbr: "六"
    }
  },
  datePickerSelected: "個被選擇",
  // pagination
  paginationItem: "條",
  paginationPage: "頁",
  paginationJump: "前往"
}, lf = vs, sf = {
  // Dialog
  dialogTitle: "اشاره",
  dialogConfirmButtonText: "تایید",
  dialogCancelButtonText: "لغو",
  // ActionSheet
  actionSheetTitle: "انتخاب یک مورد",
  // List
  listLoadingText: "در حال بارگزاری",
  listFinishedText: "مورد دیگری وجود ندارد",
  listErrorText: "بارگزاری ناموفق",
  // Picker
  pickerTitle: "انتخاب کنید",
  pickerConfirmButtonText: "تایید",
  pickerCancelButtonText: "لغو",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "ژانویه",
      abbr: "JAN"
    },
    "02": {
      name: "فوریه",
      abbr: "FEB"
    },
    "03": {
      name: "مارس",
      abbr: "MAR"
    },
    "04": {
      name: "آوریل",
      abbr: "APR"
    },
    "05": {
      name: "مه",
      abbr: "MAY"
    },
    "06": {
      name: "ژوئن",
      abbr: "JUN"
    },
    "07": {
      name: "جولای",
      abbr: "JUL"
    },
    "08": {
      name: "آگوست",
      abbr: "AUG"
    },
    "09": {
      name: "سپتامبر",
      abbr: "SEP"
    },
    10: {
      name: "اوکتبر",
      abbr: "OCT"
    },
    11: {
      name: "نوامبر",
      abbr: "NOV"
    },
    12: {
      name: "دسامبر",
      abbr: "DEC"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "یکشنبه",
      abbr: "S"
    },
    1: {
      name: "دوشنبه",
      abbr: "M"
    },
    2: {
      name: "سه‌شنبه",
      abbr: "T"
    },
    3: {
      name: "چهارشنبه",
      abbr: "W"
    },
    4: {
      name: "پنجشنبه",
      abbr: "T"
    },
    5: {
      name: "جمعه",
      abbr: "F"
    },
    6: {
      name: "شنبه",
      abbr: "S"
    }
  },
  datePickerSelected: " انتخاب شده",
  datePickerHint: "انتخاب تاریخ",
  // pagination
  paginationItem: "",
  paginationPage: "صفحه",
  paginationJump: "برو به",
  // time-picker
  timePickerHint: "انتخاب زمان"
}, sb = Object.defineProperty, cu = Object.getOwnPropertySymbols, ub = Object.prototype.hasOwnProperty, cb = Object.prototype.propertyIsEnumerable, du = (e, n, o) => n in e ? sb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, fu = (e, n) => {
  for (var o in n || (n = {}))
    ub.call(n, o) && du(e, o, n[o]);
  if (cu)
    for (var o of cu(n))
      cb.call(n, o) && du(e, o, n[o]);
  return e;
};
function ms() {
  const e = $({}), n = $({}), o = (i, l) => {
    l.lang = i, e.value[i] = l;
  }, r = (i) => {
    if (!e.value[i])
      return console.warn(`The ${i} does not exist. You can mount a language message using the add method`), {};
    n.value = e.value[i];
  };
  return {
    messages: e,
    currentMessage: n,
    add: o,
    use: r,
    merge: (i, l) => {
      if (!e.value[i]) {
        console.warn(`The ${i} does not exist. You can mount a language message using the add method`);
        return;
      }
      e.value[i] = fu(fu({}, e.value[i]), l), r(i);
    },
    t: (i) => {
      if (Br(n.value, i))
        return n.value[i];
    }
  };
}
const { messages: uf, currentMessage: cf, add: hs, use: gs, merge: df, t: rn } = ms();
hs("zh-CN", ps);
gs("zh-CN");
const cT = {
  zhCN: ps,
  enUS: af,
  zhTW: vs,
  zhHK: lf,
  faIR: sf,
  messages: uf,
  currentMessage: cf,
  add: hs,
  use: gs,
  merge: df,
  t: rn,
  useLocale: ms
};
var Ai = {
  zhCN: ps,
  enUS: af,
  zhTW: vs,
  zhHK: lf,
  faIR: sf,
  messages: uf,
  currentMessage: cf,
  add: hs,
  use: gs,
  merge: df,
  t: rn,
  useLocale: ms
};
const Vi = Symbol("LOCALE_PROVIDER_KEY");
function db(e) {
  zd(Vi, e);
}
function ao() {
  return Nd(Vi) ? Sd(Vi) : { t: null };
}
const { name: fb, n: pb, classes: vb } = ee("action-sheet");
function mb(e, n) {
  const o = Q("var-action-item"), r = Q("var-popup");
  return h(), Ce(r, {
    position: "bottom",
    class: p(e.n("popup-radius")),
    overlay: e.overlay,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    "lock-scroll": e.lockScroll,
    "close-on-click-overlay": e.closeOnClickOverlay,
    "close-on-key-escape": e.closeOnKeyEscape,
    teleport: e.teleport,
    "safe-area": e.safeArea,
    show: e.show,
    "onUpdate:show": n[0] || (n[0] = (t) => e.show = t),
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onRouteChange: e.onRouteChange,
    onKeyEscape: e.onKeyEscape
  }, {
    default: ce(() => [
      N(
        "div",
        Ue({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          V(e.$slots, "title", {}, () => {
            var t;
            return [
              N(
                "div",
                {
                  class: p(e.n("title"))
                },
                le((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("actionSheetTitle")),
                3
                /* TEXT, CLASS */
              )
            ];
          }),
          V(e.$slots, "actions", {}, () => [
            (h(!0), P(
              Ne,
              null,
              Ke(e.actions, (t) => (h(), Ce(o, {
                key: t.name,
                name: t.name,
                namespace: t.namespace,
                icon: t.icon,
                "icon-size": t.iconSize,
                "class-name": t.className,
                color: t.color,
                onClick: (a) => e.handleSelect(t)
              }, null, 8, ["name", "namespace", "icon", "icon-size", "class-name", "color", "onClick"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "close-on-key-escape", "teleport", "safe-area", "show", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onKeyEscape"]);
}
const ff = x({
  name: fb,
  directives: { Ripple: nn },
  components: {
    VarPopup: Oo,
    VarActionItem: rb
  },
  inheritAttrs: !1,
  props: tf,
  setup(e) {
    const n = Kn(e, "show"), { t: o } = ao();
    function r(t) {
      if (t.disabled)
        return;
      const { closeOnClickAction: a, onSelect: i } = e;
      C(i, t), a && (n.value = !1);
    }
    return {
      show: n,
      pt: o,
      t: rn,
      n: pb,
      classes: vb,
      handleSelect: r
    };
  }
});
ff.render = mb;
var xr = ff, hb = Object.defineProperty, pu = Object.getOwnPropertySymbols, gb = Object.prototype.hasOwnProperty, bb = Object.prototype.propertyIsEnumerable, vu = (e, n, o) => n in e ? hb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, mu = (e, n) => {
  for (var o in n || (n = {}))
    gb.call(n, o) && vu(e, o, n[o]);
  if (pu)
    for (var o of pu(n))
      bb.call(n, o) && vu(e, o, n[o]);
  return e;
};
let go, bs = {};
function yb(e = {}) {
  return mu(mu({}, bs), e);
}
function Io(e) {
  return ro() ? new Promise((n) => {
    Io.close();
    const o = _e(yb(e));
    o.teleport = "body", go = o;
    const { unmountInstance: r } = gr(xr, o, {
      onSelect: (t) => {
        C(o.onSelect, t), n(t);
      },
      onClose: () => {
        C(o.onClose), n("close");
      },
      onClosed: () => {
        C(o.onClosed), r(), go === o && (go = null);
      },
      onRouteChange: () => {
        r(), go === o && (go = null);
      },
      "onUpdate:show": (t) => {
        o.show = t;
      }
    });
    o.show = !0;
  }) : Promise.resolve();
}
Io.setDefaultOptions = function(e) {
  bs = e;
};
Io.resetDefaultOptions = function() {
  bs = {};
};
Io.close = function() {
  if (go != null) {
    const e = go;
    go = null, He().then(() => {
      e.show = !1;
    });
  }
};
Io.Component = xr;
re(xr);
re(xr, Io);
se(Io, tf);
const dT = xr;
var Ri = Io;
const pf = {
  color: String,
  textColor: String,
  title: String,
  titlePosition: {
    type: String,
    default: "left"
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  round: Boolean,
  image: String,
  imageLinearGradient: String,
  safeAreaTop: Boolean,
  border: Boolean,
  zIndex: {
    type: [Number, String],
    default: 1
  },
  fixed: Boolean,
  placeholder: Boolean
}, { name: kb, n: $b, classes: wb } = ee("app-bar");
function Cb(e, n) {
  return h(), P(
    Ne,
    null,
    [
      N(
        "div",
        Ue({
          class: e.classes(
            e.n(),
            e.n("$--box"),
            [e.safeAreaTop, e.n("--safe-area-top")],
            [e.round, e.n("--round")],
            [e.fixed, e.n("--fixed")],
            [e.border, e.n("--border")],
            e.formatElevation(e.elevation, 3)
          ),
          ref: "appBar",
          style: e.rootStyles
        }, e.$attrs),
        [
          N(
            "div",
            {
              class: p(e.n("toolbar"))
            },
            [
              N(
                "div",
                {
                  class: p(e.n("left"))
                },
                [
                  V(e.$slots, "left"),
                  e.titlePosition === "left" ? (h(), P(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: q({ paddingLeft: e.paddingLeft })
                    },
                    [
                      V(e.$slots, "default", {}, () => [
                        Ie(
                          le(e.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : G("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              e.titlePosition === "center" ? (h(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("title"))
                },
                [
                  V(e.$slots, "default", {}, () => [
                    Ie(
                      le(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )) : G("v-if", !0),
              N(
                "div",
                {
                  class: p(e.n("right"))
                },
                [
                  e.titlePosition === "right" ? (h(), P(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: q({ paddingRight: e.paddingRight })
                    },
                    [
                      V(e.$slots, "default", {}, () => [
                        Ie(
                          le(e.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : G("v-if", !0),
                  V(e.$slots, "right")
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          ),
          V(e.$slots, "content")
        ],
        16
        /* FULL_PROPS */
      ),
      e.fixed && e.placeholder ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("placeholder")),
          style: q({ height: e.placeholderHeight })
        },
        null,
        6
        /* CLASS, STYLE */
      )) : G("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const vf = x({
  name: kb,
  props: pf,
  setup(e, { slots: n }) {
    const o = $(null), r = $(), t = $(), a = $(), i = B(() => {
      const { image: u, color: c, textColor: d, imageLinearGradient: f, zIndex: v } = e;
      return u != null ? {
        "background-image": `${f ? `linear-gradient(${f}), ` : ""}url(${u})`,
        "background-position": "center center",
        "background-size": "cover",
        "z-index": v
      } : {
        background: c,
        color: d,
        "z-index": v
      };
    });
    to(s), mn(() => {
      l(), s();
    }), Xr(l);
    function l() {
      r.value = n.left ? 0 : void 0, t.value = n.right ? 0 : void 0;
    }
    function s() {
      if (!e.fixed || !e.placeholder)
        return;
      const { height: u } = an(o.value);
      a.value = ze(u);
    }
    return {
      rootStyles: i,
      paddingLeft: r,
      paddingRight: t,
      n: $b,
      classes: wb,
      formatElevation: fn,
      appBar: o,
      placeholderHeight: a
    };
  }
});
vf.render = Cb;
var qt = vf;
re(qt);
se(qt, pf);
const fT = qt;
var Li = qt;
const mf = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: Sb, n: Pb } = ee("form-details"), zb = { key: 0 }, Ob = { key: 0 };
function Tb(e, n) {
  return h(), Ce(Qe, {
    name: e.n()
  }, {
    default: ce(() => [
      e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n())
        },
        [
          N(
            "div",
            {
              class: p(e.n("error-message"))
            },
            [
              X(Qe, {
                name: e.n("message")
              }, {
                default: ce(() => [
                  e.errorMessage ? (h(), P(
                    "div",
                    zb,
                    le(e.errorMessage),
                    1
                    /* TEXT */
                  )) : G("v-if", !0)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          ),
          N(
            "div",
            {
              class: p(e.n("extra-message"))
            },
            [
              X(Qe, {
                name: e.n("message")
              }, {
                default: ce(() => [
                  V(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (h(), P(
                      "div",
                      Ob,
                      le(e.extraMessage),
                      1
                      /* TEXT */
                    )) : G("v-if", !0)
                  ])
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const hf = x({
  name: Sb,
  props: mf,
  setup: () => ({ n: Pb })
});
hf.render = Tb;
var Xt = hf;
re(Xt);
se(Xt, mf);
const pT = Xt;
var Pn = Xt;
const Gt = {
  value: {
    type: null,
    required: !0
  },
  id: {
    type: String,
    default: ""
  },
  isFocusing: Boolean,
  size: {
    type: String,
    default: "normal"
  },
  variant: {
    type: String,
    default: "standard"
  },
  placeholder: String,
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  hintCenter: {
    type: Boolean,
    default: !0
  },
  textColor: String,
  focusColor: String,
  blurColor: String,
  isError: Boolean,
  formDisabled: Boolean,
  disabled: Boolean,
  clearable: Boolean,
  cursor: String,
  composing: Boolean,
  onClick: A(),
  onClear: A()
}, gf = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), bf = Symbol(
  "SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY"
);
function Eb() {
  const { childProviders: e, length: n, bindChildren: o } = gn(
    gf
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: o
  };
}
function Bb() {
  const { childProviders: e, bindChildren: n } = gn(
    bf
  );
  return {
    swipeResizeListeners: e,
    bindSwipeResizeListeners: n
  };
}
function Db() {
  const { parentProvider: e, bindParent: n } = hn(
    bf
  );
  return {
    swipeResizeDispatcher: e,
    bindSwipeResizeDispatcher: n
  };
}
var Ib = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: Mb, n: zi, classes: Nb } = ee("field-decorator"), Ab = ["for"];
function Vb(e, n) {
  const o = Q("var-icon");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      N(
        "div",
        {
          class: p(
            e.classes(
              e.n("controller"),
              [e.isFocusing, e.n("--focus")],
              [e.isError, e.n("--error")],
              [e.formDisabled || e.disabled, e.n("--disabled")]
            )
          ),
          style: q({
            color: e.color,
            cursor: e.cursor,
            overflow: e.isFloating ? "visible" : "hidden",
            "--field-decorator-middle-offset-left": e.middleOffsetLeft,
            "--field-decorator-middle-offset-width": e.middleOffsetWidth,
            "--field-decorator-middle-offset-height": e.middleOffsetHeight
          })
        },
        [
          N(
            "div",
            {
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              V(e.$slots, "prepend-icon")
            ],
            2
            /* CLASS */
          ),
          N(
            "div",
            {
              ref: "middleEl",
              class: p(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
            },
            [
              V(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          e.placeholder && e.hint ? (h(), P("label", {
            key: 0,
            class: p(
              e.classes(
                e.n("placeholder"),
                e.n("$--ellipsis"),
                [e.isFocusing, e.n("--focus")],
                [e.hintCenter, e.n("--hint-center")],
                [e.formDisabled || e.disabled, e.n("--disabled")],
                [e.isError, e.n("--error")],
                [e.transitionDisabled, e.n("--transition-disabled")],
                e.computePlaceholderState()
              )
            ),
            style: q({
              color: e.color
            }),
            for: e.id
          }, [
            N(
              "span",
              null,
              le(e.placeholder),
              1
              /* TEXT */
            )
          ], 14, Ab)) : G("v-if", !0),
          N(
            "div",
            {
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              e.clearable && !e.isEmpty(e.value) ? V(e.$slots, "clear-icon", {
                key: 0,
                clear: e.handleClear
              }, () => [
                X(o, {
                  class: p(e.n("clear-icon")),
                  "var-field-decorator-cover": "",
                  name: "close-circle",
                  onClick: e.handleClear
                }, null, 8, ["class", "onClick"])
              ]) : G("v-if", !0),
              V(e.$slots, "append-icon")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.line ? (h(), P(
        Ne,
        { key: 0 },
        [
          e.variant === "outlined" ? (h(), P(
            "fieldset",
            {
              key: 0,
              class: p(
                e.classes(
                  e.n("line"),
                  [e.isFocusing, e.n("--line-focus")],
                  [e.isError, e.n("--line-error")],
                  [e.formDisabled || e.disabled, e.n("--line-disabled")]
                )
              ),
              style: q({ borderColor: e.color })
            },
            [
              N(
                "legend",
                {
                  class: p(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
                  style: q({ width: e.legendWidth })
                },
                [
                  e.placeholder && e.hint ? (h(), Ce(oo, {
                    key: 0,
                    to: "body"
                  }, [
                    N(
                      "span",
                      {
                        ref: "placeholderTextEl",
                        class: p(
                          e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")])
                        )
                      },
                      le(e.placeholder),
                      3
                      /* TEXT, CLASS */
                    )
                  ])) : G("v-if", !0)
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : (h(), P(
            "div",
            {
              key: 1,
              class: p(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
              style: q({ background: e.isError ? void 0 : e.blurColor })
            },
            [
              N(
                "div",
                {
                  class: p(
                    e.classes(
                      e.n("dot"),
                      [e.isFocusing, e.n("--line-focus")],
                      [e.formDisabled || e.disabled, e.n("--line-disabled")],
                      [e.isError, e.n("--line-error")]
                    )
                  ),
                  style: q({ background: e.isError ? void 0 : e.focusColor })
                },
                null,
                6
                /* CLASS, STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          ))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const yf = x({
  name: Mb,
  components: { VarIcon: Ze },
  props: Gt,
  setup(e) {
    const n = $(null), o = $(null), r = $(""), t = $("0px"), a = $("0px"), i = $("0px"), l = $(!0), s = B(() => e.hint && (!Zn(e.value) || e.isFocusing)), { popup: u, bindPopup: c } = jd(), { bindSwipeResizeDispatcher: d } = Db(), f = B(
      () => e.isError ? void 0 : e.isFocusing ? e.focusColor : e.blurColor
    );
    to(k), mn(() => {
      k(), He().then(() => {
        l.value = !1;
      });
    }), Xr(k), C(c, null), C(d, {
      onResize() {
        He().then(k);
      }
    }), u && fe(
      () => u.show.value,
      (w) => Ib(this, null, function* () {
        w && (yield kn(), k());
      })
    );
    function v() {
      const { hint: w, value: b, composing: y } = e;
      if (!w && (!Zn(b) || y))
        return zi("--placeholder-hidden");
      if (s.value)
        return zi("--placeholder-hint");
    }
    function g(w) {
      C(e.onClear, w);
    }
    function m(w) {
      C(e.onClick, w);
    }
    function k() {
      if (t.value = `${o.value.offsetLeft}px`, a.value = `${o.value.offsetWidth}px`, i.value = `${o.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
        const w = Ko(n.value), b = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
        r.value = `calc(${w.width} * 0.75 + ${b} * 2)`;
      }
    }
    return {
      placeholderTextEl: n,
      middleEl: o,
      middleOffsetLeft: t,
      middleOffsetWidth: a,
      middleOffsetHeight: i,
      color: f,
      legendWidth: r,
      isFloating: s,
      transitionDisabled: l,
      resize: k,
      computePlaceholderState: v,
      n: zi,
      classes: Nb,
      isEmpty: Zn,
      handleClear: g,
      handleClick: m
    };
  }
});
yf.render = Vb;
var Zt = yf;
re(Zt);
se(Zt, Gt);
const vT = Zt;
var Mr = Zt, Rb = Object.defineProperty, Lb = Object.defineProperties, Fb = Object.getOwnPropertyDescriptors, hu = Object.getOwnPropertySymbols, Ub = Object.prototype.hasOwnProperty, Hb = Object.prototype.propertyIsEnumerable, gu = (e, n, o) => n in e ? Rb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Yb = (e, n) => {
  for (var o in n || (n = {}))
    Ub.call(n, o) && gu(e, o, n[o]);
  if (hu)
    for (var o of hu(n))
      Hb.call(n, o) && gu(e, o, n[o]);
  return e;
}, jb = (e, n) => Lb(e, Fb(n));
const ys = jb(Yb({
  modelValue: String,
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: "text"
  },
  textarea: Boolean,
  rows: {
    type: [String, Number],
    default: 8
  },
  maxlength: [String, Number],
  readonly: Boolean,
  resize: Boolean,
  autofocus: Boolean,
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onClear"]
  },
  rules: [Array, Function, Object],
  enterkeyhint: String,
  onFocus: A(),
  onBlur: A(),
  onInput: A(),
  onChange: A(),
  onClear: A(),
  "onUpdate:modelValue": A()
}, De(Gt, [
  "size",
  "variant",
  "placeholder",
  "line",
  "hint",
  "textColor",
  "focusColor",
  "blurColor",
  "disabled",
  "clearable",
  "onClick"
])), {
  // internal start
  autocomplete: String,
  isForceFocusingEffect: {
    type: Boolean,
    default: void 0
  },
  isForceErrorEffect: {
    type: Boolean,
    default: void 0
  },
  isShowFormDetails: {
    type: Boolean,
    default: !0
  }
  // internal end
});
var Wb = Object.defineProperty, Kb = Object.defineProperties, qb = Object.getOwnPropertyDescriptors, bu = Object.getOwnPropertySymbols, Xb = Object.prototype.hasOwnProperty, Gb = Object.prototype.propertyIsEnumerable, yu = (e, n, o) => n in e ? Wb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Zb = (e, n) => {
  for (var o in n || (n = {}))
    Xb.call(n, o) && yu(e, o, n[o]);
  if (bu)
    for (var o of bu(n))
      Gb.call(n, o) && yu(e, o, n[o]);
  return e;
}, Jb = (e, n) => Kb(e, qb(n));
const kf = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Fn() {
  const { parentProvider: e, index: n, bindParent: o } = hn(kf), r = Wo();
  return {
    index: n,
    form: e,
    bindForm: o ? (a) => {
      o(Jb(Zb({}, a), { instance: r }));
    } : null
  };
}
function Qb() {
  const { childProviders: e, length: n, bindChildren: o } = gn(kf);
  return {
    length: n,
    formItems: e,
    bindFormItems: o
  };
}
const { name: _b, n: xb, classes: e0 } = ee("input"), n0 = ["placeholder", "enterkeyhint"], o0 = ["autocomplete", "id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], r0 = ["autocomplete", "id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function t0(e, n) {
  const o = Q("var-field-decorator"), r = Q("var-form-details");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[12] || (n[12] = (...t) => e.handleMousedown && e.handleMousedown(...t))
    },
    [
      X(
        o,
        wo(Gr({
          value: e.modelValue,
          id: e.id,
          size: e.size,
          variant: e.variant,
          placeholder: e.placeholder,
          line: e.line,
          hint: e.hint,
          textColor: e.textColor,
          focusColor: e.focusColor,
          blurColor: e.blurColor,
          isFocusing: e.isForceFocusingEffect != null ? e.isForceFocusingEffect : e.isFocusing,
          isError: e.isForceErrorEffect != null ? e.isForceErrorEffect : !!e.errorMessage,
          formDisabled: e.formDisabled,
          disabled: e.disabled,
          clearable: e.clearable,
          cursor: e.cursor,
          composing: e.isComposing,
          hintCenter: !e.textarea,
          onClick: e.handleClick,
          onClear: e.handleClear
        })),
        rr({
          "clear-icon": ce(({ clear: t }) => [
            V(e.$slots, "clear-icon", { clear: t })
          ]),
          "append-icon": ce(() => [
            V(e.$slots, "append-icon")
          ]),
          default: ce(() => [
            e.normalizedType === "password" ? (h(), P("input", {
              key: 0,
              tabindex: "-1",
              class: p(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: q({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, n0)) : G("v-if", !0),
            e.textarea ? (h(), P("textarea", {
              key: 1,
              class: p(
                e.classes(
                  e.n("input"),
                  e.n("--textarea"),
                  [e.formDisabled || e.disabled, e.n("--disabled")],
                  [e.errorMessage, e.n("--error")],
                  [e.errorMessage, e.n("--caret-error")]
                )
              ),
              ref: "el",
              autocomplete: e.autocomplete ? e.autocomplete : "new-password",
              id: e.id,
              disabled: e.formDisabled || e.disabled,
              readonly: e.formReadonly || e.readonly,
              type: e.normalizedType,
              value: e.modelValue,
              placeholder: e.hint ? void 0 : e.placeholder,
              maxlength: e.maxlength,
              rows: e.rows,
              enterkeyhint: e.enterkeyhint,
              inputmode: e.type === "number" ? "decimal" : void 0,
              style: q({
                color: e.errorMessage ? void 0 : e.textColor,
                caretColor: e.errorMessage ? void 0 : e.focusColor,
                resize: e.resize ? "vertical" : "none",
                "--input-placeholder-color": e.placeholderColor
              }),
              onFocus: n[0] || (n[0] = (...t) => e.handleFocus && e.handleFocus(...t)),
              onBlur: n[1] || (n[1] = (...t) => e.handleBlur && e.handleBlur(...t)),
              onInput: n[2] || (n[2] = (...t) => e.handleInput && e.handleInput(...t)),
              onChange: n[3] || (n[3] = (...t) => e.handleChange && e.handleChange(...t)),
              onCompositionstart: n[4] || (n[4] = (...t) => e.handleCompositionStart && e.handleCompositionStart(...t)),
              onCompositionend: n[5] || (n[5] = (...t) => e.handleCompositionEnd && e.handleCompositionEnd(...t))
            }, null, 46, o0)) : (h(), P("input", {
              key: 2,
              class: p(
                e.classes(
                  e.n("input"),
                  [e.formDisabled || e.disabled, e.n("--disabled")],
                  [e.errorMessage, e.n("--error")],
                  [e.errorMessage, e.n("--caret-error")]
                )
              ),
              ref: "el",
              autocomplete: e.autocomplete ? e.autocomplete : "new-password",
              id: e.id,
              disabled: e.formDisabled || e.disabled,
              readonly: e.formReadonly || e.readonly,
              type: e.normalizedType,
              value: e.modelValue,
              placeholder: e.hint ? void 0 : e.placeholder,
              maxlength: e.maxlength,
              enterkeyhint: e.enterkeyhint,
              inputmode: e.type === "number" ? "decimal" : void 0,
              style: q({
                color: e.errorMessage ? void 0 : e.textColor,
                caretColor: e.errorMessage ? void 0 : e.focusColor,
                "--input-placeholder-color": e.placeholderColor
              }),
              onFocus: n[6] || (n[6] = (...t) => e.handleFocus && e.handleFocus(...t)),
              onBlur: n[7] || (n[7] = (...t) => e.handleBlur && e.handleBlur(...t)),
              onInput: n[8] || (n[8] = (...t) => e.handleInput && e.handleInput(...t)),
              onChange: n[9] || (n[9] = (...t) => e.handleChange && e.handleChange(...t)),
              onCompositionstart: n[10] || (n[10] = (...t) => e.handleCompositionStart && e.handleCompositionStart(...t)),
              onCompositionend: n[11] || (n[11] = (...t) => e.handleCompositionEnd && e.handleCompositionEnd(...t))
            }, null, 46, r0))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: ce(() => [
              V(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      ),
      e.isShowFormDetails ? (h(), Ce(r, {
        key: 0,
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, rr({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: ce(() => [
            V(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"])) : G("v-if", !0)
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const $f = x({
  name: _b,
  components: {
    VarFormDetails: Pn,
    VarFieldDecorator: Mr
  },
  props: ys,
  setup(e) {
    const n = Ad(), o = $(null), r = $(!1), t = $(!1), { bindForm: a, form: i } = Fn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Ln(), d = B(() => e.disabled || e.readonly ? "" : "text"), f = B(() => e.type === "number" ? "text" : e.type), v = B(() => {
      const { maxlength: _, modelValue: ve } = e;
      return _ ? Zn(ve) ? `0 / ${_}` : `${String(ve).length}/${_}` : "";
    }), g = B(() => {
      const { hint: _, blurColor: ve, focusColor: ye } = e;
      if (!_)
        return l.value ? "var(--field-decorator-error-color)" : r.value ? ye || "var(--field-decorator-focus-color)" : ve || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    C(a, {
      reset: F,
      validate: Y,
      resetValidation: c
    }), mn(() => {
      e.autofocus && j();
    });
    function k(_) {
      He(() => {
        const { validateTrigger: ve, rules: ye, modelValue: Ee } = e;
        s(ve, _, ye, Ee);
      });
    }
    function w(_) {
      r.value = !0, C(e.onFocus, _), k("onFocus");
    }
    function b(_) {
      r.value = !1, C(e.onBlur, _), k("onBlur");
    }
    function y(_) {
      const ve = _.target;
      let { value: ye } = ve;
      e.type === "number" && (ye = M(ye));
      const Ee = W(ye);
      return Ee === e.modelValue && (ve.value = Ee), Ee;
    }
    function S() {
      t.value = !0;
    }
    function z(_) {
      t.value && (t.value = !1, _.target.dispatchEvent(new Event("input")));
    }
    function O(_) {
      if (t.value)
        return;
      const ve = y(_);
      C(e["onUpdate:modelValue"], ve), C(e.onInput, ve, _), k("onInput");
    }
    function D(_) {
      const ve = R(y(_));
      e.modelModifiers.trim && C(e["onUpdate:modelValue"], ve), C(e.onChange, ve, _), k("onChange");
    }
    function T() {
      const { disabled: _, readonly: ve, clearable: ye, onClear: Ee } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || _ || ve || !ye || (C(e["onUpdate:modelValue"], ""), C(Ee, ""), k("onClear"));
    }
    function E(_) {
      const { disabled: ve, onClick: ye } = e;
      i != null && i.disabled.value || ve || (C(ye, _), k("onClick"));
    }
    function M(_) {
      const ve = _.indexOf("-"), ye = _.indexOf(".");
      return ve > -1 && (_ = ve === 0 ? "-" + _.replace(/-/g, "") : _.replace(/-/g, "")), ye > -1 && (_ = _.slice(0, ye + 1) + _.slice(ye).replace(/\./g, "")), _.replace(/[^-0-9.]/g, "");
    }
    function R(_) {
      return e.modelModifiers.trim ? _.trim() : _;
    }
    function W(_) {
      return e.maxlength ? _.slice(0, U(e.maxlength)) : _;
    }
    function H(_) {
      const { disabled: ve } = e;
      i != null && i.disabled.value || ve || _.target === o.value || (j(), Ve(_));
    }
    function F() {
      C(e["onUpdate:modelValue"], ""), c();
    }
    function Y() {
      return u(e.rules, e.modelValue);
    }
    function j() {
      var _;
      (_ = o.value) == null || _.focus();
    }
    function ae() {
      o.value.blur();
    }
    return {
      el: o,
      id: n,
      isFocusing: r,
      isComposing: t,
      errorMessage: l,
      placeholderColor: g,
      normalizedType: f,
      cursor: d,
      maxlengthText: v,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: xb,
      classes: e0,
      isEmpty: Zn,
      handleFocus: w,
      handleBlur: b,
      handleInput: O,
      handleChange: D,
      handleClear: T,
      handleClick: E,
      handleCompositionStart: S,
      handleCompositionEnd: z,
      handleMousedown: H,
      validate: Y,
      resetValidation: c,
      reset: F,
      focus: j,
      blur: ae
    };
  }
});
$f.render = t0;
var Jt = $f;
re(Jt);
se(Jt, ys);
const mT = Jt;
var Nr = Jt;
const ks = {
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String,
    default: "click"
  },
  reference: String,
  placement: {
    type: String,
    default: "cover-top-start"
  },
  strategy: {
    type: String,
    default: "absolute"
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  sameWidth: Boolean,
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  popoverClass: String,
  closeOnClickReference: Boolean,
  closeOnKeyEscape: {
    type: Boolean,
    default: !0
  },
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onClickOutside: A(),
  "onUpdate:show": A()
};
var a0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function kt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return a0[n];
  });
}
var uo = "top", Eo = "bottom", Uo = "right", So = "left", $s = "auto", Qt = [uo, Eo, Uo, So], _t = "start", Ar = "end", i0 = "clippingParents", wf = "viewport", wr = "popper", l0 = "reference", ku = /* @__PURE__ */ Qt.reduce(function(e, n) {
  return e.concat([n + "-" + _t, n + "-" + Ar]);
}, []), Cf = /* @__PURE__ */ [].concat(Qt, [$s]).reduce(function(e, n) {
  return e.concat([n, n + "-" + _t, n + "-" + Ar]);
}, []), s0 = "beforeRead", u0 = "read", c0 = "afterRead", d0 = "beforeMain", f0 = "main", p0 = "afterMain", v0 = "beforeWrite", m0 = "write", h0 = "afterWrite", g0 = [s0, u0, c0, d0, f0, p0, v0, m0, h0];
function Po(e) {
  return e.split("-")[0];
}
var b0 = {
  start: "end",
  end: "start"
};
function $u(e) {
  return e.replace(/start|end/g, function(n) {
    return b0[n];
  });
}
function qn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ho(e) {
  var n = qn(e).Element;
  return e instanceof n || e instanceof Element;
}
function Yn(e) {
  var n = qn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function ws(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = qn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Mo(e) {
  return ((Ho(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var Pr = Math.max, wu = Math.min, ar = Math.round;
function Fi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Sf() {
  return !/^((?!chrome|android).)*safari/i.test(Fi());
}
function ir(e, n, o) {
  n === void 0 && (n = !1), o === void 0 && (o = !1);
  var r = e.getBoundingClientRect(), t = 1, a = 1;
  n && Yn(e) && (t = e.offsetWidth > 0 && ar(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ar(r.height) / e.offsetHeight || 1);
  var i = Ho(e) ? qn(e) : window, l = i.visualViewport, s = !Sf() && o, u = (r.left + (s && l ? l.offsetLeft : 0)) / t, c = (r.top + (s && l ? l.offsetTop : 0)) / a, d = r.width / t, f = r.height / a;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c
  };
}
function Cs(e) {
  var n = qn(e), o = n.pageXOffset, r = n.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: r
  };
}
function Ss(e) {
  return ir(Mo(e)).left + Cs(e).scrollLeft;
}
function y0(e, n) {
  var o = qn(e), r = Mo(e), t = o.visualViewport, a = r.clientWidth, i = r.clientHeight, l = 0, s = 0;
  if (t) {
    a = t.width, i = t.height;
    var u = Sf();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + Ss(e),
    y: s
  };
}
function co(e) {
  return qn(e).getComputedStyle(e);
}
function k0(e) {
  var n, o = Mo(e), r = Cs(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, a = Pr(o.scrollWidth, o.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = Pr(o.scrollHeight, o.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -r.scrollLeft + Ss(e), s = -r.scrollTop;
  return co(t || o).direction === "rtl" && (l += Pr(o.clientWidth, t ? t.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function xn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function xt(e) {
  return xn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ws(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Mo(e)
  );
}
function Ps(e) {
  var n = co(e), o = n.overflow, r = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + t + r);
}
function Pf(e) {
  return ["html", "body", "#document"].indexOf(xn(e)) >= 0 ? e.ownerDocument.body : Yn(e) && Ps(e) ? e : Pf(xt(e));
}
function zr(e, n) {
  var o;
  n === void 0 && (n = []);
  var r = Pf(e), t = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = qn(r), i = t ? [a].concat(a.visualViewport || [], Ps(r) ? r : []) : r, l = n.concat(i);
  return t ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(zr(xt(i)))
  );
}
function $0(e) {
  return ["table", "td", "th"].indexOf(xn(e)) >= 0;
}
function Cu(e) {
  return !Yn(e) || // https://github.com/popperjs/popper-core/issues/837
  co(e).position === "fixed" ? null : e.offsetParent;
}
function w0(e) {
  var n = /firefox/i.test(Fi()), o = /Trident/i.test(Fi());
  if (o && Yn(e)) {
    var r = co(e);
    if (r.position === "fixed")
      return null;
  }
  var t = xt(e);
  for (ws(t) && (t = t.host); Yn(t) && ["html", "body"].indexOf(xn(t)) < 0; ) {
    var a = co(t);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function zs(e) {
  for (var n = qn(e), o = Cu(e); o && $0(o) && co(o).position === "static"; )
    o = Cu(o);
  return o && (xn(o) === "html" || xn(o) === "body" && co(o).position === "static") ? n : o || w0(e) || n;
}
function C0(e, n) {
  var o = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (o && ws(o)) {
    var r = n;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ui(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function S0(e, n) {
  var o = ir(e, !1, n === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function Su(e, n, o) {
  return n === wf ? Ui(y0(e, o)) : Ho(n) ? S0(n, o) : Ui(k0(Mo(e)));
}
function P0(e) {
  var n = zr(xt(e)), o = ["absolute", "fixed"].indexOf(co(e).position) >= 0, r = o && Yn(e) ? zs(e) : e;
  return Ho(r) ? n.filter(function(t) {
    return Ho(t) && C0(t, r) && xn(t) !== "body";
  }) : [];
}
function z0(e, n, o, r) {
  var t = n === "clippingParents" ? P0(e) : [].concat(n), a = [].concat(t, [o]), i = a[0], l = a.reduce(function(s, u) {
    var c = Su(e, u, r);
    return s.top = Pr(c.top, s.top), s.right = wu(c.right, s.right), s.bottom = wu(c.bottom, s.bottom), s.left = Pr(c.left, s.left), s;
  }, Su(e, i, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Vr(e) {
  return e.split("-")[1];
}
function O0(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function zf(e) {
  var n = e.reference, o = e.element, r = e.placement, t = r ? Po(r) : null, a = r ? Vr(r) : null, i = n.x + n.width / 2 - o.width / 2, l = n.y + n.height / 2 - o.height / 2, s;
  switch (t) {
    case uo:
      s = {
        x: i,
        y: n.y - o.height
      };
      break;
    case Eo:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case Uo:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case So:
      s = {
        x: n.x - o.width,
        y: l
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = t ? O0(t) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case _t:
        s[u] = s[u] - (n[c] / 2 - o[c] / 2);
        break;
      case Ar:
        s[u] = s[u] + (n[c] / 2 - o[c] / 2);
        break;
    }
  }
  return s;
}
function T0() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function E0(e) {
  return Object.assign({}, T0(), e);
}
function B0(e, n) {
  return n.reduce(function(o, r) {
    return o[r] = e, o;
  }, {});
}
function Of(e, n) {
  n === void 0 && (n = {});
  var o = n, r = o.placement, t = r === void 0 ? e.placement : r, a = o.strategy, i = a === void 0 ? e.strategy : a, l = o.boundary, s = l === void 0 ? i0 : l, u = o.rootBoundary, c = u === void 0 ? wf : u, d = o.elementContext, f = d === void 0 ? wr : d, v = o.altBoundary, g = v === void 0 ? !1 : v, m = o.padding, k = m === void 0 ? 0 : m, w = E0(typeof k != "number" ? k : B0(k, Qt)), b = f === wr ? l0 : wr, y = e.rects.popper, S = e.elements[g ? b : f], z = z0(Ho(S) ? S : S.contextElement || Mo(e.elements.popper), s, c, i), O = ir(e.elements.reference), D = zf({
    reference: O,
    element: y,
    strategy: "absolute",
    placement: t
  }), T = Ui(Object.assign({}, y, D)), E = f === wr ? T : O, M = {
    top: z.top - E.top + w.top,
    bottom: E.bottom - z.bottom + w.bottom,
    left: z.left - E.left + w.left,
    right: E.right - z.right + w.right
  }, R = e.modifiersData.offset;
  if (f === wr && R) {
    var W = R[t];
    Object.keys(M).forEach(function(H) {
      var F = [Uo, Eo].indexOf(H) >= 0 ? 1 : -1, Y = [uo, Eo].indexOf(H) >= 0 ? "y" : "x";
      M[H] += W[Y] * F;
    });
  }
  return M;
}
function D0(e, n) {
  n === void 0 && (n = {});
  var o = n, r = o.placement, t = o.boundary, a = o.rootBoundary, i = o.padding, l = o.flipVariations, s = o.allowedAutoPlacements, u = s === void 0 ? Cf : s, c = Vr(r), d = c ? l ? ku : ku.filter(function(g) {
    return Vr(g) === c;
  }) : Qt, f = d.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = d);
  var v = f.reduce(function(g, m) {
    return g[m] = Of(e, {
      placement: m,
      boundary: t,
      rootBoundary: a,
      padding: i
    })[Po(m)], g;
  }, {});
  return Object.keys(v).sort(function(g, m) {
    return v[g] - v[m];
  });
}
function I0(e) {
  if (Po(e) === $s)
    return [];
  var n = kt(e);
  return [$u(e), n, $u(n)];
}
function M0(e) {
  var n = e.state, o = e.options, r = e.name;
  if (!n.modifiersData[r]._skip) {
    for (var t = o.mainAxis, a = t === void 0 ? !0 : t, i = o.altAxis, l = i === void 0 ? !0 : i, s = o.fallbackPlacements, u = o.padding, c = o.boundary, d = o.rootBoundary, f = o.altBoundary, v = o.flipVariations, g = v === void 0 ? !0 : v, m = o.allowedAutoPlacements, k = n.options.placement, w = Po(k), b = w === k, y = s || (b || !g ? [kt(k)] : I0(k)), S = [k].concat(y).reduce(function(oe, me) {
      return oe.concat(Po(me) === $s ? D0(n, {
        placement: me,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: m
      }) : me);
    }, []), z = n.rects.reference, O = n.rects.popper, D = /* @__PURE__ */ new Map(), T = !0, E = S[0], M = 0; M < S.length; M++) {
      var R = S[M], W = Po(R), H = Vr(R) === _t, F = [uo, Eo].indexOf(W) >= 0, Y = F ? "width" : "height", j = Of(n, {
        placement: R,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), ae = F ? H ? Uo : So : H ? Eo : uo;
      z[Y] > O[Y] && (ae = kt(ae));
      var _ = kt(ae), ve = [];
      if (a && ve.push(j[W] <= 0), l && ve.push(j[ae] <= 0, j[_] <= 0), ve.every(function(oe) {
        return oe;
      })) {
        E = R, T = !1;
        break;
      }
      D.set(R, ve);
    }
    if (T)
      for (var ye = g ? 3 : 1, Ee = function(me) {
        var I = S.find(function(K) {
          var de = D.get(K);
          if (de)
            return de.slice(0, me).every(function(Se) {
              return Se;
            });
        });
        if (I)
          return E = I, "break";
      }, L = ye; L > 0; L--) {
        var Z = Ee(L);
        if (Z === "break") break;
      }
    n.placement !== E && (n.modifiersData[r]._skip = !0, n.placement = E, n.reset = !0);
  }
}
const N0 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: M0,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function A0(e, n, o) {
  var r = Po(e), t = [So, uo].indexOf(r) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, n, {
    placement: e
  })) : o, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * t, [So, Uo].indexOf(r) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function V0(e) {
  var n = e.state, o = e.options, r = e.name, t = o.offset, a = t === void 0 ? [0, 0] : t, i = Cf.reduce(function(c, d) {
    return c[d] = A0(d, n.rects, a), c;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[r] = i;
}
const R0 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: V0
};
var L0 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function F0(e) {
  var n = e.x, o = e.y, r = window, t = r.devicePixelRatio || 1;
  return {
    x: ar(n * t) / t || 0,
    y: ar(o * t) / t || 0
  };
}
function Pu(e) {
  var n, o = e.popper, r = e.popperRect, t = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, g = i.y, m = g === void 0 ? 0 : g, k = typeof c == "function" ? c({
    x: v,
    y: m
  }) : {
    x: v,
    y: m
  };
  v = k.x, m = k.y;
  var w = i.hasOwnProperty("x"), b = i.hasOwnProperty("y"), y = So, S = uo, z = window;
  if (u) {
    var O = zs(o), D = "clientHeight", T = "clientWidth";
    if (O === qn(o) && (O = Mo(o), co(O).position !== "static" && l === "absolute" && (D = "scrollHeight", T = "scrollWidth")), O = O, t === uo || (t === So || t === Uo) && a === Ar) {
      S = Eo;
      var E = d && O === z && z.visualViewport ? z.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[D]
      );
      m -= E - r.height, m *= s ? 1 : -1;
    }
    if (t === So || (t === uo || t === Eo) && a === Ar) {
      y = Uo;
      var M = d && O === z && z.visualViewport ? z.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[T]
      );
      v -= M - r.width, v *= s ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: l
  }, u && L0), W = c === !0 ? F0({
    x: v,
    y: m
  }) : {
    x: v,
    y: m
  };
  if (v = W.x, m = W.y, s) {
    var H;
    return Object.assign({}, R, (H = {}, H[S] = b ? "0" : "", H[y] = w ? "0" : "", H.transform = (z.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + m + "px)" : "translate3d(" + v + "px, " + m + "px, 0)", H));
  }
  return Object.assign({}, R, (n = {}, n[S] = b ? m + "px" : "", n[y] = w ? v + "px" : "", n.transform = "", n));
}
function U0(e) {
  var n = e.state, o = e.options, r = o.gpuAcceleration, t = r === void 0 ? !0 : r, a = o.adaptive, i = a === void 0 ? !0 : a, l = o.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: Po(n.placement),
    variation: Vr(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Pu(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Pu(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Tf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: U0,
  data: {}
};
function H0(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Y0(e) {
  return e === qn(e) || !Yn(e) ? Cs(e) : H0(e);
}
function j0(e) {
  var n = e.getBoundingClientRect(), o = ar(n.width) / e.offsetWidth || 1, r = ar(n.height) / e.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function W0(e, n, o) {
  o === void 0 && (o = !1);
  var r = Yn(n), t = Yn(n) && j0(n), a = Mo(n), i = ir(e, t, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (r || !r && !o) && ((xn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ps(a)) && (l = Y0(n)), Yn(n) ? (s = ir(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = Ss(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function K0(e) {
  var n = ir(e), o = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(n.width - o) <= 1 && (o = n.width), Math.abs(n.height - r) <= 1 && (r = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: r
  };
}
function q0(e) {
  var n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    n.set(a.name, a);
  });
  function t(a) {
    o.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(l) {
      if (!o.has(l)) {
        var s = n.get(l);
        s && t(s);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    o.has(a.name) || t(a);
  }), r;
}
function X0(e) {
  var n = q0(e);
  return g0.reduce(function(o, r) {
    return o.concat(n.filter(function(t) {
      return t.phase === r;
    }));
  }, []);
}
function G0(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(o) {
      Promise.resolve().then(function() {
        n = void 0, o(e());
      });
    })), n;
  };
}
function Z0(e) {
  var n = e.reduce(function(o, r) {
    var t = o[r.name];
    return o[r.name] = t ? Object.assign({}, t, r, {
      options: Object.assign({}, t.options, r.options),
      data: Object.assign({}, t.data, r.data)
    }) : r, o;
  }, {});
  return Object.keys(n).map(function(o) {
    return n[o];
  });
}
var zu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ou() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  return !n.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function J0(e) {
  e === void 0 && (e = {});
  var n = e, o = n.defaultModifiers, r = o === void 0 ? [] : o, t = n.defaultOptions, a = t === void 0 ? zu : t;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, zu, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, v = {
      state: c,
      setOptions: function(w) {
        var b = typeof w == "function" ? w(c.options) : w;
        m(), c.options = Object.assign({}, a, c.options, b), c.scrollParents = {
          reference: Ho(l) ? zr(l) : l.contextElement ? zr(l.contextElement) : [],
          popper: zr(s)
        };
        var y = X0(Z0([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = y.filter(function(S) {
          return S.enabled;
        }), g(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var w = c.elements, b = w.reference, y = w.popper;
          if (Ou(b, y)) {
            c.rects = {
              reference: W0(b, zs(y), c.options.strategy === "fixed"),
              popper: K0(y)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(M) {
              return c.modifiersData[M.name] = Object.assign({}, M.data);
            });
            for (var S = 0; S < c.orderedModifiers.length; S++) {
              if (c.reset === !0) {
                c.reset = !1, S = -1;
                continue;
              }
              var z = c.orderedModifiers[S], O = z.fn, D = z.options, T = D === void 0 ? {} : D, E = z.name;
              typeof O == "function" && (c = O({
                state: c,
                options: T,
                name: E,
                instance: v
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: G0(function() {
        return new Promise(function(k) {
          v.forceUpdate(), k(c);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!Ou(l, s))
      return v;
    v.setOptions(u).then(function(k) {
      !f && u.onFirstUpdate && u.onFirstUpdate(k);
    });
    function g() {
      c.orderedModifiers.forEach(function(k) {
        var w = k.name, b = k.options, y = b === void 0 ? {} : b, S = k.effect;
        if (typeof S == "function") {
          var z = S({
            state: c,
            name: w,
            instance: v,
            options: y
          }), O = function() {
          };
          d.push(z || O);
        }
      });
    }
    function m() {
      d.forEach(function(k) {
        return k();
      }), d = [];
    }
    return v;
  };
}
var it = {
  passive: !0
};
function Q0(e) {
  var n = e.state, o = e.instance, r = e.options, t = r.scroll, a = t === void 0 ? !0 : t, i = r.resize, l = i === void 0 ? !0 : i, s = qn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", o.update, it);
  }), l && s.addEventListener("resize", o.update, it), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", o.update, it);
    }), l && s.removeEventListener("resize", o.update, it);
  };
}
const _0 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Q0,
  data: {}
};
function x0(e) {
  var n = e.state, o = e.name;
  n.modifiersData[o] = zf({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const ey = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: x0,
  data: {}
};
function ny(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(o) {
    var r = n.styles[o] || {}, t = n.attributes[o] || {}, a = n.elements[o];
    !Yn(a) || !xn(a) || (Object.assign(a.style, r), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function oy(e) {
  var n = e.state, o = {
    popper: {
      position: n.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(n.elements.popper.style, o.popper), n.styles = o, n.elements.arrow && Object.assign(n.elements.arrow.style, o.arrow), function() {
    Object.keys(n.elements).forEach(function(r) {
      var t = n.elements[r], a = n.attributes[r] || {}, i = Object.keys(n.styles.hasOwnProperty(r) ? n.styles[r] : o[r]), l = i.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !Yn(t) || !xn(t) || (Object.assign(t.style, l), Object.keys(a).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const ry = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ny,
  effect: oy,
  requires: ["computeStyles"]
};
var ty = [_0, ey, Tf, ry], ay = /* @__PURE__ */ J0({
  defaultModifiers: ty
}), iy = Object.defineProperty, ly = Object.defineProperties, sy = Object.getOwnPropertyDescriptors, Tu = Object.getOwnPropertySymbols, uy = Object.prototype.hasOwnProperty, cy = Object.prototype.propertyIsEnumerable, Eu = (e, n, o) => n in e ? iy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Oi = (e, n) => {
  for (var o in n || (n = {}))
    uy.call(n, o) && Eu(e, o, n[o]);
  if (Tu)
    for (var o of Tu(n))
      cy.call(n, o) && Eu(e, o, n[o]);
  return e;
}, Ti = (e, n) => ly(e, sy(n)), Bu = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
function Ef(e) {
  const n = $(null), o = $(null), r = $({ width: 0, height: 0 }), t = Kn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(M, R) {
      C(R ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = _r(() => t.value, 1);
  ds(() => t.value, a);
  let i = null, l = !1, s = !1;
  je(() => window, "keydown", O), us(z, "click", w), to(D), fe(() => [e.offsetX, e.offsetY, e.placement, e.strategy], D), fe(() => e.disabled, E), fe(
    () => t.value,
    (M) => {
      M && D();
    }
  ), jo(() => {
    var M;
    i = ay((M = z()) != null ? M : n.value, o.value, S());
  }), qr(() => {
    i.destroy();
  });
  function u() {
    if (!n.value)
      return;
    const { width: M, height: R } = Ko(n.value);
    r.value = {
      width: xe(M),
      height: xe(R)
    };
  }
  function c() {
    switch (e.placement) {
      case "top":
      case "cover-bottom":
        return "bottom";
      case "top-start":
      case "right-end":
      case "cover-bottom-start":
        return "bottom left";
      case "top-end":
      case "left-end":
      case "cover-bottom-end":
        return "bottom right";
      case "bottom":
      case "cover-top":
        return "top";
      case "bottom-start":
      case "right-start":
      case "cover-top-start":
        return "top left";
      case "bottom-end":
      case "left-start":
      case "cover-top-end":
        return "top right";
      case "left":
      case "cover-right":
        return "right";
      case "right":
      case "cover-left":
        return "left";
    }
  }
  function d() {
    e.trigger === "hover" && (s = !0, T());
  }
  function f() {
    return Bu(this, null, function* () {
      e.trigger === "hover" && (s = !1, yield kn(), !l && E());
    });
  }
  function v() {
    e.trigger === "hover" && (l = !0);
  }
  function g() {
    return Bu(this, null, function* () {
      e.trigger === "hover" && (l = !1, yield kn(), !s && E());
    });
  }
  function m() {
    if (e.trigger === "click") {
      if (e.closeOnClickReference && t.value) {
        E();
        return;
      }
      T();
    }
  }
  function k() {
    E();
  }
  function w(M) {
    e.trigger === "click" && (k(), C(e.onClickOutside, M));
  }
  function b() {
    D(), C(e.onClosed);
  }
  function y() {
    const { offsetX: M, offsetY: R, placement: W } = e;
    u();
    const H = {
      x: xe(M),
      y: xe(R)
    };
    switch (W) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: H.x,
          distance: H.y - r.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: H.x,
          distance: H.y - r.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: H.x,
          distance: H.y - r.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: H.x,
          distance: -H.y - r.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: H.x,
          distance: -H.y - r.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: H.x,
          distance: -H.y - r.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: H.y,
          distance: H.x - r.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: H.y,
          distance: -H.x - r.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: W,
          skidding: H.y,
          distance: -H.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: W,
          skidding: H.x,
          distance: -H.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: W,
          skidding: H.x,
          distance: H.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: W,
          skidding: H.y,
          distance: H.x
        };
    }
  }
  function S() {
    const { placement: M, skidding: R, distance: W } = y(), H = [
      Ti(Oi({}, N0), {
        enabled: t.value
      }),
      Ti(Oi({}, R0), {
        options: {
          offset: [R, W]
        }
      }),
      Ti(Oi({}, Tf), {
        options: {
          adaptive: !1,
          gpuAcceleration: !1
        },
        enabled: t.value
      }),
      {
        name: "applyTransformOrigin",
        enabled: t.value,
        phase: "beforeWrite",
        fn({ state: F }) {
          F.styles.popper.transformOrigin = c();
        }
      }
    ];
    return {
      placement: M,
      modifiers: H,
      strategy: e.strategy
    };
  }
  function z() {
    return e.reference ? n.value.querySelector(e.reference) : n.value;
  }
  function O(M) {
    const { closeOnKeyEscape: R = !1 } = e;
    M.key === "Escape" && R && t.value && (Ve(M), E());
  }
  function D() {
    i.setOptions(S());
  }
  function T() {
    e.disabled || (t.value = !0, C(e["onUpdate:show"], !0));
  }
  function E() {
    t.value = !1, C(e["onUpdate:show"], !1);
  }
  return {
    show: t,
    popover: o,
    zIndex: a,
    host: n,
    hostSize: r,
    handleHostClick: m,
    handleHostMouseenter: d,
    handleHostMouseleave: f,
    handlePopoverClose: k,
    handlePopoverMouseenter: v,
    handlePopoverMouseleave: g,
    handleClosed: b,
    resize: D,
    open: T,
    close: E
  };
}
const { name: dy, n: fy, classes: py } = ee("menu");
function vy(e, n) {
  return h(), P(
    "div",
    {
      ref: "host",
      class: p(e.classes(e.n(), e.n("$--box"))),
      onClick: n[3] || (n[3] = (...o) => e.handleHostClick && e.handleHostClick(...o)),
      onMouseenter: n[4] || (n[4] = (...o) => e.handleHostMouseenter && e.handleHostMouseenter(...o)),
      onMouseleave: n[5] || (n[5] = (...o) => e.handleHostMouseleave && e.handleHostMouseleave(...o))
    },
    [
      V(e.$slots, "default"),
      (h(), Ce(oo, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        X(Qe, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: ce(() => [
            Ae(N(
              "div",
              {
                ref: "popover",
                style: q({
                  zIndex: e.zIndex,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: p(
                  e.classes(
                    e.n("menu"),
                    e.n("$--box"),
                    e.popoverClass,
                    [e.defaultStyle, e.n("--menu-background-color")],
                    [e.defaultStyle, e.formatElevation(e.elevation, 3)]
                  )
                ),
                onClick: n[0] || (n[0] = Wn(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                V(e.$slots, "menu")
              ],
              38
              /* CLASS, STYLE, NEED_HYDRATION */
            ), [
              [Qn, e.show]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["name", "onAfterEnter", "onAfterLeave"])
      ], 8, ["to", "disabled"]))
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Bf = x({
  name: dy,
  props: ks,
  setup(e) {
    const { disabled: n } = qo(), {
      popover: o,
      host: r,
      hostSize: t,
      show: a,
      zIndex: i,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handlePopoverClose: f,
      handleClosed: v,
      // expose
      open: g,
      // expose
      close: m,
      // expose
      resize: k
    } = Ef(e);
    return {
      popover: o,
      host: r,
      hostSize: t,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: fn,
      toSizeUnit: ze,
      n: fy,
      classes: py,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handlePopoverClose: f,
      handleClosed: v,
      resize: k,
      open: g,
      close: m
    };
  }
});
Bf.render = vy;
var ea = Bf;
re(ea);
se(ea, ks);
const hT = ea;
var Rr = ea;
const Df = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedColor: String,
  uncheckedColor: String,
  disabled: Boolean,
  readonly: Boolean,
  indeterminate: Boolean,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: [Array, Function, Object],
  onClick: A(),
  onChange: A(),
  "onUpdate:modelValue": A(),
  "onUpdate:indeterminate": A()
}, If = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function my() {
  const { bindChildren: e, childProviders: n, length: o } = gn(
    If
  );
  return {
    length: o,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function hy() {
  const { bindParent: e, parentProvider: n, index: o } = hn(
    If
  );
  return {
    index: o,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
const { name: gy, n: by, classes: yy } = ee("checkbox"), ky = ["tabindex"];
function $y(e, n) {
  const o = Q("var-icon"), r = Q("var-hover-overlay"), t = Q("var-form-details"), a = Ye("hover"), i = Ye("ripple");
  return h(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      N(
        "div",
        {
          class: p(e.n()),
          onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
        },
        [
          Ae((h(), P("div", {
            ref: "action",
            class: p(
              e.classes(
                e.n("action"),
                [e.checked || e.isIndeterminate, e.n("--checked"), e.n("--unchecked")],
                [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                [e.formDisabled || e.disabled, e.n("--disabled")]
              )
            ),
            style: q({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor }),
            tabindex: e.disabled || e.formDisabled ? void 0 : "0",
            onFocus: n[0] || (n[0] = (l) => e.isFocusing = !0),
            onBlur: n[1] || (n[1] = (l) => e.isFocusing = !1)
          }, [
            e.isIndeterminate ? V(e.$slots, "indeterminate-icon", { key: 0 }, () => [
              X(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "minus-box",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : G("v-if", !0),
            e.checked && !e.isIndeterminate ? V(e.$slots, "checked-icon", { key: 1 }, () => [
              X(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "checkbox-marked",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : G("v-if", !0),
            !e.checked && !e.isIndeterminate ? V(e.$slots, "unchecked-icon", { key: 2 }, () => [
              X(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "checkbox-blank-outline",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : G("v-if", !0),
            X(r, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ], 46, ky)), [
            [a, e.handleHovering, "desktop"],
            [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]
          ]),
          e.$slots.default ? (h(), P(
            "div",
            {
              key: 0,
              class: p(
                e.classes(
                  e.n("text"),
                  [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              ),
              onClick: n[2] || (n[2] = (...l) => e.handleTextClick && e.handleTextClick(...l))
            },
            [
              V(e.$slots, "default", { checked: e.checked })
            ],
            2
            /* CLASS */
          )) : G("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Mf = x({
  name: gy,
  directives: { Ripple: nn, Hover: En },
  components: {
    VarIcon: Ze,
    VarFormDetails: Pn,
    VarHoverOverlay: Vn
  },
  props: Df,
  setup(e) {
    const n = $(null), o = $(!1), r = Kn(e, "modelValue"), t = Kn(e, "indeterminate"), a = B(() => r.value === e.checkedValue), i = B(() => e.checkedValue), l = $(!1), { checkboxGroup: s, bindCheckboxGroup: u } = hy(), { hovering: c, handleHovering: d } = _n(), { form: f, bindForm: v } = Fn(), {
      errorMessage: g,
      validateWithTrigger: m,
      validate: k,
      // expose
      resetValidation: w
    } = Ln(), b = {
      checkedValue: i,
      checked: a,
      sync: D,
      validate: H,
      resetValidation: w,
      reset: E,
      resetWithAnimation: T
    };
    C(u, b), C(v, b), je(() => window, "keydown", R), je(() => window, "keyup", W);
    function y(F) {
      He(() => {
        const { validateTrigger: Y, rules: j, modelValue: ae } = e;
        m(Y, F, j, ae);
      });
    }
    function S(F) {
      const { checkedValue: Y, onChange: j } = e;
      r.value = F, t.value = !1, C(j, r.value), y("onChange"), F === Y ? s == null || s.onChecked(Y) : s == null || s.onUnchecked(Y);
    }
    function z(F) {
      const { disabled: Y, readonly: j, checkedValue: ae, uncheckedValue: _, onClick: ve } = e;
      if (f != null && f.disabled.value || Y || (C(ve, F), f != null && f.readonly.value || j))
        return;
      l.value = !0;
      const ye = s ? s.checkedCount.value >= Number(s.max.value) : !1;
      !a.value && ye || S(a.value ? _ : ae);
    }
    function O() {
      n.value.focus();
    }
    function D(F) {
      const { checkedValue: Y, uncheckedValue: j } = e;
      r.value = F.includes(Y) ? Y : j;
    }
    function T() {
      l.value = !1;
    }
    function E() {
      r.value = e.uncheckedValue, w();
    }
    function M(F) {
      const { checkedValue: Y, uncheckedValue: j } = e;
      ![Y, j].includes(F) && (F = a.value ? j : Y), S(F);
    }
    function R(F) {
      if (!o.value)
        return;
      const { key: Y } = F;
      (Y === "Enter" || Y === " ") && Ve(F), Y === "Enter" && n.value.click();
    }
    function W(F) {
      o.value && F.key === " " && (Ve(F), n.value.click());
    }
    function H() {
      return k(e.rules, e.modelValue);
    }
    return {
      action: n,
      isFocusing: o,
      isIndeterminate: t,
      withAnimation: l,
      checked: a,
      errorMessage: g,
      checkboxGroupErrorMessage: s == null ? void 0 : s.errorMessage,
      formDisabled: f == null ? void 0 : f.disabled,
      formReadonly: f == null ? void 0 : f.readonly,
      hovering: c,
      n: by,
      classes: yy,
      handleHovering: d,
      handleClick: z,
      handleTextClick: O,
      toggle: M,
      reset: E,
      validate: H,
      resetValidation: w
    };
  }
});
Mf.render = $y;
var na = Mf;
re(na);
se(na, Df);
const gT = na;
var lr = na;
const Nf = Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function wy() {
  const { length: e, childProviders: n, bindChildren: o } = gn(
    Nf
  );
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: o
  };
}
function Cy() {
  const { index: e, parentProvider: n, bindParent: o } = hn(
    Nf
  );
  return o || An("MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: o
  };
}
const Af = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  // internal
  option: Object
}, { name: Sy, n: Py, classes: zy } = ee("menu-option"), Oy = ["tabindex"];
function Ty(e, n) {
  const o = Q("var-checkbox"), r = Q("maybe-v-node"), t = Q("var-hover-overlay"), a = Ye("ripple"), i = Ye("hover");
  return Ae((h(), P("div", {
    ref: "root",
    class: p(
      e.classes(e.n(), e.n("$--box"), e.n(`--${e.size}`), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])
    ),
    tabindex: e.disabled ? void 0 : "-1",
    onClick: n[2] || (n[2] = (...l) => e.handleClick && e.handleClick(...l)),
    onFocus: n[3] || (n[3] = (l) => e.isFocusing = !0),
    onBlur: n[4] || (n[4] = (l) => e.isFocusing = !1)
  }, [
    N(
      "div",
      {
        class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")]))
      },
      null,
      2
      /* CLASS */
    ),
    e.multiple ? (h(), Ce(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => e.optionSelected = l),
      disabled: e.disabled,
      onClick: n[1] || (n[1] = Wn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "disabled", "onChange"])) : G("v-if", !0),
    V(e.$slots, "default", {}, () => [
      N(
        "div",
        {
          class: p(e.classes(e.n("text")))
        },
        [
          X(r, {
            class: p(e.n("$--ellipsis")),
            is: e.labelVNode
          }, null, 8, ["class", "is"])
        ],
        2
        /* CLASS */
      )
    ]),
    X(t, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 42, Oy)), [
    [a, { disabled: e.disabled || !e.ripple }],
    [i, e.handleHovering, "desktop"]
  ]);
}
const Vf = x({
  name: Sy,
  directives: { Ripple: nn, Hover: En },
  components: {
    VarCheckbox: lr,
    VarHoverOverlay: Vn,
    MaybeVNode: Jr
  },
  props: Af,
  setup(e) {
    const n = $(), o = $(!1), r = $(!1), t = B(() => r.value), a = B(
      () => {
        var z;
        return Rn(e.label) ? e.label(
          (z = e.option) != null ? z : {
            label: e.label,
            value: e.value,
            disabled: e.disabled,
            ripple: e.ripple
          },
          r.value
        ) : e.label;
      }
    ), i = B(() => e.value), { menuSelect: l, bindMenuSelect: s } = Cy(), { size: u, multiple: c, onSelect: d, computeLabel: f } = l, { hovering: v, handleHovering: g } = _n(), m = {
      label: a,
      value: i,
      selected: t,
      sync: S
    };
    fe([() => e.label, () => e.value], f), s(m), je(() => window, "keydown", w), je(() => window, "keyup", b);
    function k() {
      e.disabled || y();
    }
    function w(z) {
      o.value && ((z.key === " " || z.key === "Enter") && Ve(z), z.key === "Enter" && n.value.click());
    }
    function b(z) {
      o.value && z.key === " " && (Ve(z), n.value.click());
    }
    function y() {
      c.value && (r.value = !r.value), d(m);
    }
    function S(z) {
      r.value = z;
    }
    return {
      root: n,
      optionSelected: r,
      size: u,
      multiple: c,
      hovering: v,
      isFocusing: o,
      labelVNode: a,
      n: Py,
      classes: zy,
      handleHovering: g,
      handleClick: k,
      handleSelect: y
    };
  }
});
Vf.render = Ty;
var oa = Vf;
re(oa);
se(oa, Af);
const bT = oa;
var sr = oa, Ey = Object.defineProperty, By = Object.defineProperties, Dy = Object.getOwnPropertyDescriptors, Du = Object.getOwnPropertySymbols, Iy = Object.prototype.hasOwnProperty, My = Object.prototype.propertyIsEnumerable, Iu = (e, n, o) => n in e ? Ey(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ny = (e, n) => {
  for (var o in n || (n = {}))
    Iy.call(n, o) && Iu(e, o, n[o]);
  if (Du)
    for (var o of Du(n))
      My.call(n, o) && Iu(e, o, n[o]);
  return e;
}, Ay = (e, n) => By(e, Dy(n));
const Rf = Ay(Ny({
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: void 0
  },
  options: {
    type: Array,
    default: () => []
  },
  labelKey: {
    type: String,
    default: "label"
  },
  valueKey: {
    type: String,
    default: "value"
  },
  size: {
    type: String,
    default: "normal"
  },
  multiple: Boolean,
  scrollable: Boolean,
  closeOnSelect: {
    type: Boolean,
    default: !0
  },
  "onUpdate:modelValue": A()
}, De(ks, [
  "show",
  "disabled",
  "trigger",
  "reference",
  "placement",
  "strategy",
  "offsetX",
  "offsetY",
  "teleport",
  "sameWidth",
  "elevation",
  "popoverClass",
  "closeOnClickReference",
  "onOpen",
  "onOpened",
  "onClose",
  "onClosed",
  "onClickOutside",
  "onUpdate:show"
])), {
  // internal start
  onKeyEscape: A()
  // internal end
});
function Lf(e) {
  const {
    multiple: n,
    modelValue: o,
    optionProviders: r,
    optionProvidersLength: t
  } = e, a = $(""), i = $([]);
  fe(o, d, { deep: !0 }), fe(t, d);
  function l() {
    const f = n(), v = o();
    f && (i.value = v.map(s)), !f && !Zn(v) && (a.value = s(v)), !f && Zn(v) && (a.value = "");
  }
  function s(f) {
    var v;
    const g = r();
    let m = g.find(({ value: k }) => k.value === f);
    return m || (m = g.find(({ label: k }) => k.value === f)), (v = m == null ? void 0 : m.label.value) != null ? v : "";
  }
  function u({ value: f, label: v }) {
    var g;
    return (g = f.value) != null ? g : v.value;
  }
  function c(f) {
    const v = n(), g = r();
    return v ? g.filter(({ selected: m }) => m.value).map(u) : u(f);
  }
  function d() {
    const f = n(), v = o(), g = r();
    f ? g.forEach((m) => m.sync(v.includes(u(m)))) : g.forEach((m) => m.sync(v === u(m))), l();
  }
  return {
    label: a,
    labels: i,
    computeLabel: l,
    getSelectedValue: c
  };
}
const { name: Vy, n: Ry, classes: Ly } = ee("menu-select");
function Fy(e, n) {
  const o = Q("var-menu-option"), r = Q("var-menu");
  return h(), Ce(r, {
    ref: "menu",
    tabindex: "-1",
    class: p(e.n()),
    disabled: e.disabled,
    trigger: e.trigger,
    reference: e.reference,
    placement: e.placement,
    strategy: e.strategy,
    "offset-x": e.offsetX,
    "offset-y": e.offsetY,
    teleport: e.teleport,
    "same-width": e.sameWidth,
    elevation: e.elevation,
    "default-style": !1,
    "popover-class": e.popoverClass,
    "close-on-click-reference": e.closeOnClickReference,
    "close-on-key-escape": !1,
    show: e.show,
    "onUpdate:show": n[0] || (n[0] = (t) => e.show = t),
    onOpen: e.onOpen,
    onOpened: e.onOpened,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onClickOutside: e.onClickOutside
  }, {
    menu: ce(() => [
      N(
        "div",
        {
          ref: "menuOptionsRef",
          class: p(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
        },
        [
          e.options.length ? (h(!0), P(
            Ne,
            { key: 0 },
            Ke(e.options, (t) => (h(), Ce(o, {
              key: t[e.valueKey],
              label: t[e.labelKey],
              value: t[e.valueKey],
              option: t,
              ripple: t.ripple,
              disabled: t.disabled
            }, null, 8, ["label", "value", "option", "ripple", "disabled"]))),
            128
            /* KEYED_FRAGMENT */
          )) : G("v-if", !0),
          V(e.$slots, "options")
        ],
        2
        /* CLASS */
      )
    ]),
    default: ce(() => [
      V(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "disabled", "trigger", "reference", "placement", "strategy", "offset-x", "offset-y", "teleport", "same-width", "elevation", "popover-class", "close-on-click-reference", "show", "onOpen", "onOpened", "onClose", "onClosed", "onClickOutside"]);
}
const Ff = x({
  name: Vy,
  components: { VarMenu: Rr, VarMenuOption: sr },
  props: Rf,
  setup(e) {
    const n = $(null), o = $(null), r = Kn(e, "show"), { menuOptions: t, length: a, bindMenuOptions: i } = wy(), { computeLabel: l, getSelectedValue: s } = Lf({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => t,
      optionProvidersLength: () => a.value
    }), u = {
      size: B(() => e.size),
      multiple: B(() => e.multiple),
      computeLabel: l,
      onSelect: c
    };
    i(u), je(() => window, "keydown", d);
    function c(m) {
      const { multiple: k, closeOnSelect: w } = e;
      C(e["onUpdate:modelValue"], s(m)), !k && w && (n.value.$el.focus(), v());
    }
    function d(m) {
      if (e.disabled || !r.value)
        return;
      const { key: k } = m;
      if (["Escape", "ArrowDown", "ArrowUp"].includes(k) && Ve(m), k === "Escape") {
        n.value.$el.focus(), v(), C(e.onKeyEscape);
        return;
      }
      (k === "ArrowDown" || k === "ArrowUp") && qd(n.value.$el, o.value, k);
    }
    function f() {
      var m;
      (m = n.value) == null || m.open();
    }
    function v() {
      var m;
      (m = n.value) == null || m.close();
    }
    function g() {
      var m;
      (m = n.value) == null || m.resize();
    }
    return {
      show: r,
      menu: n,
      menuOptionsRef: o,
      n: Ry,
      classes: Ly,
      formatElevation: fn,
      open: f,
      close: v,
      resize: g
    };
  }
});
Ff.render = Fy;
var ra = Ff;
re(ra);
se(ra, Rf);
const yT = ra;
var Lr = ra, Uy = Object.defineProperty, Mu = Object.getOwnPropertySymbols, Hy = Object.prototype.hasOwnProperty, Yy = Object.prototype.propertyIsEnumerable, Nu = (e, n, o) => n in e ? Uy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, jy = (e, n) => {
  for (var o in n || (n = {}))
    Hy.call(n, o) && Nu(e, o, n[o]);
  if (Mu)
    for (var o of Mu(n))
      Yy.call(n, o) && Nu(e, o, n[o]);
  return e;
};
const Uf = jy({
  modelValue: String,
  options: {
    type: Array,
    default: () => []
  },
  labelKey: {
    type: String,
    default: "label"
  },
  valueKey: {
    type: String,
    default: "value"
  },
  maxlength: [String, Number],
  readonly: Boolean,
  disabled: Boolean,
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onClear", "onChange"]
  },
  getShow: Function,
  rules: [Array, Function, Object],
  onFocus: A(),
  onBlur: A(),
  onInput: A(),
  onChange: A(),
  onClear: A(),
  onClick: A(),
  "onUpdate:modelValue": A()
}, De(ys, [
  "size",
  "variant",
  "placeholder",
  "enterkeyhint",
  "line",
  "hint",
  "textColor",
  "focusColor",
  "blurColor",
  "clearable"
]));
var lt = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: Wy, n: Ky } = ee("auto-complete"), qy = ["tabindex"];
function Xy(e, n) {
  const o = Q("var-input"), r = Q("var-menu-option"), t = Q("var-menu-select"), a = Q("var-form-details");
  return h(), P("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.disabled || e.formDisabled ? void 0 : "0",
    onFocusin: n[2] || (n[2] = (...i) => e.focus && e.focus(...i)),
    onClick: n[3] || (n[3] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    X(t, {
      "same-width": "",
      "auto-complete-cover": "",
      scrollable: "",
      trigger: "manual",
      placement: "bottom",
      disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
      class: p(e.n("menu-select")),
      "popover-class": e.variant === "standard" ? e.n("--standard-menu-margin") : void 0,
      show: e.isShowMenuSelect,
      "onUpdate:show": n[1] || (n[1] = (i) => e.isShowMenuSelect = i),
      "onUpdate:modelValue": e.handleAutoComplete,
      onKeyEscape: e.handleKeyEscape
    }, {
      options: ce(() => [
        N(
          "div",
          {
            class: p(e.n("options"))
          },
          [
            (h(!0), P(
              Ne,
              null,
              Ke(e.viewOptions, (i) => (h(), Ce(r, {
                key: i[e.valueKey],
                label: i[e.labelKey],
                value: i[e.valueKey],
                option: i,
                disabled: i.disabled
              }, null, 8, ["label", "value", "option", "disabled"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )
      ]),
      default: ce(() => [
        X(o, Ue({ ref: "input" }, {
          maxlength: e.maxlength,
          enterkeyhint: e.enterkeyhint,
          placeholder: e.placeholder,
          size: e.size,
          variant: e.variant,
          line: e.line,
          hint: e.hint,
          textColor: e.textColor,
          focusColor: e.focusColor,
          blurColor: e.blurColor,
          readonly: e.readonly,
          disabled: e.disabled,
          clearable: e.clearable
        }, {
          autocomplete: "off",
          "is-force-focusing-effect": e.isFocusing,
          "is-force-error-effect": !!e.errorMessage,
          "is-show-form-details": !1,
          onInput: e.handleInput,
          onBlur: e.handleBlur,
          onClear: e.handleClear,
          onChange: e.handleChange,
          modelValue: e.value,
          "onUpdate:modelValue": n[0] || (n[0] = (i) => e.value = i)
        }), rr({
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: ce(() => [
              V(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots["append-icon"] ? {
            name: "append-icon",
            fn: ce(() => [
              V(e.$slots, "append-icon")
            ]),
            key: "1"
          } : void 0,
          e.$slots["clear-icon"] ? {
            name: "clear-icon",
            fn: ce(({ clear: i }) => [
              V(e.$slots, "clear-icon", { clear: i })
            ]),
            key: "2"
          } : void 0,
          e.$slots["extra-message"] ? {
            name: "extra-message",
            fn: ce(() => [
              V(e.$slots, "extra-message")
            ]),
            key: "3"
          } : void 0
        ]), 1040, ["is-force-focusing-effect", "is-force-error-effect", "onInput", "onBlur", "onClear", "onChange", "modelValue"])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["disabled", "class", "popover-class", "show", "onUpdate:modelValue", "onKeyEscape"]),
    X(a, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText
    }, null, 8, ["error-message", "extra-message"])
  ], 42, qy);
}
const Hf = x({
  name: Wy,
  components: {
    VarInput: Nr,
    VarMenuSelect: Lr,
    VarMenuOption: sr,
    VarFormDetails: Pn
  },
  props: Uf,
  setup(e) {
    const n = $(), o = $(), r = $(!1), t = Kn(e, "modelValue"), a = $([]), i = $(!1), l = B(() => {
      const { maxlength: Y } = e;
      return Y ? Zn(t.value) ? `0 / ${Y}` : `${String(t.value).length}/${Y}` : "";
    }), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: c,
      // expose
      resetValidation: d
    } = Ln(), { bindForm: f, form: v } = Fn();
    let g = !1;
    const m = {
      reset: k,
      resetValidation: d,
      validate: w
    };
    us(
      () => n.value,
      "click",
      () => {
        if (g) {
          g = !1;
          return;
        }
        y();
      }
    ), fe(() => [e.options, r.value], D), C(f, m), je(() => window, "keydown", O);
    function k() {
      C(e["onUpdate:modelValue"], ""), d();
    }
    function w() {
      return c(e.rules, e.modelValue);
    }
    function b() {
      r.value || e.disabled || v != null && v.disabled.value || (r.value = !0, o.value.focus(), C(e.onFocus), z("onFocus"));
    }
    function y() {
      r.value && (r.value = !1, i.value = !1, o.value.blur(), C(e.onBlur), z("onBlur"));
    }
    function S() {
      i.value || y();
    }
    function z(Y) {
      He(() => {
        const { validateTrigger: j, rules: ae, modelValue: _ } = e;
        u(j, Y, ae, _);
      });
    }
    function O(Y) {
      return lt(this, null, function* () {
        var j;
        if (v != null && v.disabled.value || v != null && v.readonly.value || e.disabled || e.readonly || !r.value || !i.value)
          return;
        const { key: ae } = Y;
        if (ae === "Tab") {
          Ve(Y), n.value.focus(), i.value = !1;
          return;
        }
        if (!["ArrowUp", "ArrowDown", "Enter"].includes(ae)) {
          o.value.focus();
          return;
        }
        ae === "Enter" && (yield nr(), (j = o.value) == null || j.focus());
      });
    }
    function D() {
      return lt(this, null, function* () {
        r.value && (i.value = F(t.value)), i.value && (a.value = e.options);
      });
    }
    function T(Y, j) {
      return lt(this, null, function* () {
        D(), C(e.onInput, Y, j), z("onInput");
      });
    }
    function E() {
      g = !0, D(), C(e.onClear, t.value), z("onClear");
    }
    function M(Y) {
      e.disabled || v != null && v.disabled.value || (C(e.onClick, Y), z("onClick"));
    }
    function R(Y) {
      C(e.onChange, Y), z("onChange");
    }
    function W(Y) {
      return lt(this, null, function* () {
        var j;
        e.maxlength != null && (Y = Y.slice(0, U(e.maxlength))), Y !== t.value && (t.value = Y, C(e.onChange, Y), z("onChange")), yield nr(), (j = o.value) == null || j.focus();
      });
    }
    function H() {
      o.value.focus();
    }
    function F(Y) {
      return e.disabled || e.readonly || v != null && v.disabled.value || v != null && v.readonly.value ? !1 : e.options.length > 0 && (e.getShow != null ? e.getShow(Y) : Y.length > 0);
    }
    return {
      root: n,
      input: o,
      value: t,
      isShowMenuSelect: i,
      viewOptions: a,
      isFocusing: r,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      errorMessage: s,
      maxlengthText: l,
      n: Ky,
      handleInput: T,
      handleClear: E,
      handleClick: M,
      handleChange: R,
      handleBlur: S,
      handleKeyEscape: H,
      handleAutoComplete: W,
      reset: k,
      validate: w,
      resetValidation: d,
      blur: y,
      focus: b
    };
  }
});
Hf.render = Xy;
var ta = Hf;
re(ta);
se(ta, Uf);
const kT = ta;
var Hi = ta;
const Au = (e) => yn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, Vu = (e) => yn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, Gy = (e) => {
  const n = [];
  return {
    cache: n,
    has(o) {
      return this.cache.includes(o);
    },
    add(o) {
      this.has(o) || (this.cache.length === e && n.shift(), this.cache.push(o));
    },
    remove(o) {
      this.has(o) && tr(this.cache, o);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Yi = (e) => e, Ru = (e) => e ** 3, Yf = (e) => e < 0.5 ? Ru(e * 2) / 2 : 1 - Ru((1 - e) * 2) / 2, Yo = (e, n, o = "") => {
  if (e === void 0 && (e = ""), e.length >= n)
    return e;
  const r = n - e.length, t = Math.floor(r / o.length);
  return o.repeat(t) + o.slice(0, r % o.length) + e;
};
var Zy = Object.defineProperty, Lu = Object.getOwnPropertySymbols, Jy = Object.prototype.hasOwnProperty, Qy = Object.prototype.propertyIsEnumerable, Fu = (e, n, o) => n in e ? Zy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, _y = (e, n) => {
  for (var o in n || (n = {}))
    Jy.call(n, o) && Fu(e, o, n[o]);
  if (Lu)
    for (var o of Lu(n))
      Qy.call(n, o) && Fu(e, o, n[o]);
  return e;
}, aa = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const xy = "background-image", e1 = "lazy-loading", n1 = "lazy-error", Uu = "lazy-attempt", o1 = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], ji = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", ur = [], Et = [], jf = Gy(100), cn = {
  loading: ji,
  error: ji,
  attempt: 3,
  throttleWait: 300,
  events: o1
};
let Os = ls(et, cn.throttleWait);
function ia(e, n) {
  e._lazy.arg === xy ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function r1(e) {
  e._lazy.loading && ia(e, e._lazy.loading), et();
}
function t1(e) {
  e._lazy.error && ia(e, e._lazy.error), e._lazy.state = "error", Es(e), et();
}
function Wf(e, n) {
  ia(e, n), e._lazy.state = "success", Es(e), et();
}
function a1(e) {
  var n;
  Et.includes(e) || (Et.push(e), (n = cn.events) == null || n.forEach((o) => {
    e.addEventListener(o, Os, { passive: !0 });
  }));
}
function i1() {
  Et.forEach((e) => {
    var n;
    (n = cn.events) == null || n.forEach((o) => {
      e.removeEventListener(o, Os);
    });
  }), Et.length = 0;
}
function l1(e, n) {
  var o, r;
  const t = {
    loading: (o = e.getAttribute(e1)) != null ? o : cn.loading,
    error: (r = e.getAttribute(n1)) != null ? r : cn.error,
    attempt: e.getAttribute(Uu) ? Number(e.getAttribute(Uu)) : cn.attempt
  };
  e._lazy = _y({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), ia(e, ji), C(cn.filter, e._lazy);
}
function s1(e, n) {
  const o = new Image();
  o.src = n, e._lazy.preloadImage = o, o.addEventListener("load", () => {
    e._lazy.attemptLock = !1, jf.add(n), Wf(e, n);
  }), o.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? t1(e) : Kf(e);
  });
}
function Kf(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (jf.has(n)) {
    Wf(e, n), e._lazy.attemptLock = !1;
    return;
  }
  r1(e), s1(e, n);
}
function Ts(e) {
  return aa(this, null, function* () {
    yield kn(), jh(e) && Kf(e);
  });
}
function et() {
  ur.forEach((e) => Ts(e));
}
function u1(e) {
  return aa(this, null, function* () {
    !ur.includes(e) && ur.push(e), Bg(e).forEach(a1), yield Ts(e);
  });
}
function Es(e) {
  tr(ur, e), ur.length === 0 && i1();
}
function c1(e, n) {
  const { src: o, arg: r } = e._lazy;
  return o !== n.value || r !== n.arg;
}
function qf(e, n) {
  return aa(this, null, function* () {
    l1(e, n), yield u1(e);
  });
}
function d1(e, n) {
  return aa(this, null, function* () {
    if (!c1(e, n)) {
      ur.includes(e) && (yield Ts(e));
      return;
    }
    yield qf(e, n);
  });
}
function f1(e = {}) {
  const { events: n, loading: o, error: r, attempt: t, throttleWait: a, filter: i } = e;
  cn.events = n ?? cn.events, cn.loading = o ?? cn.loading, cn.error = r ?? cn.error, cn.attempt = t ?? cn.attempt, cn.throttleWait = a ?? cn.throttleWait, cn.filter = i;
}
const Xf = {
  mounted: qf,
  unmounted: Es,
  updated: d1,
  install(e, n) {
    f1(n), Os = ls(et, cn.throttleWait), e.directive("lazy", this);
  }
}, $T = Xf;
var Fr = Xf;
const Gf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    default: "normal"
  },
  alt: String,
  color: String,
  src: String,
  fit: {
    type: String,
    default: "cover"
  },
  bordered: Boolean,
  borderColor: String,
  loading: String,
  error: String,
  lazy: Boolean,
  hoverable: Boolean,
  onClick: A(),
  onLoad: A(),
  onError: A()
}, p1 = (e) => ["mini", "small", "normal", "large"].includes(e), { name: v1, n: m1, classes: h1 } = ee("avatar"), g1 = ["src", "alt", "lazy-loading", "lazy-error"], b1 = ["src", "alt"];
function y1(e, n) {
  const o = Ye("lazy");
  return h(), P(
    "div",
    {
      ref: "avatarElement",
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.isInternalSize(e.size), e.n(`--${e.size}`)],
          [e.round, e.n("--round")],
          [e.bordered, e.n("--bordered")],
          [e.hoverable, e.n("--hoverable")]
        )
      ),
      style: q({
        width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      e.src ? (h(), P(
        Ne,
        { key: 0 },
        [
          e.lazy ? Ae((h(), P("img", {
            key: 0,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: q({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...r) => e.handleLoad && e.handleLoad(...r))
          }, null, 46, g1)), [
            [o, e.src]
          ]) : (h(), P("img", {
            key: 1,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: q({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...r) => e.handleLoad && e.handleLoad(...r)),
            onError: n[2] || (n[2] = (...r) => e.handleError && e.handleError(...r))
          }, null, 46, b1))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (h(), P(
        "div",
        {
          key: 1,
          ref: "textElement",
          class: p(e.n("text")),
          style: q({ transform: `scale(${e.scale})` })
        },
        [
          V(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const Zf = x({
  name: v1,
  directives: { Lazy: Fr },
  props: Gf,
  setup(e) {
    const n = $(null), o = $(null), r = $(1);
    mn(t), Xr(t);
    function t() {
      if (!n.value || !o.value) {
        r.value = 1;
        return;
      }
      const s = n.value.offsetWidth, u = o.value.offsetWidth;
      s > u ? r.value = 1 : r.value = s / u;
    }
    function a(s) {
      const u = s.currentTarget, { lazy: c, onLoad: d, onError: f } = e;
      c ? (u._lazy.state === "success" && C(d, s), u._lazy.state === "error" && C(f, s)) : C(d, s);
    }
    function i(s) {
      C(e.onError, s);
    }
    function l(s) {
      C(e.onClick, s);
    }
    return {
      avatarElement: n,
      textElement: o,
      scale: r,
      n: m1,
      classes: h1,
      isInternalSize: p1,
      toSizeUnit: ze,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
Zf.render = y1;
var la = Zf;
re(la);
se(la, Gf);
const wT = la;
var Wi = la;
const Jf = {
  offset: [Number, String],
  vertical: Boolean
}, { name: k1, n: $1, classes: w1 } = ee("avatar-group");
function C1(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: q(e.rootStyles)
    },
    [
      V(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Qf = x({
  name: k1,
  props: Jf,
  setup(e) {
    return {
      rootStyles: B(() => e.offset == null ? {} : {
        "--avatar-group-offset": ze(e.offset)
      }),
      n: $1,
      classes: w1
    };
  }
});
Qf.render = C1;
var sa = Qf;
re(sa);
se(sa, Jf);
const CT = sa;
var Ki = sa;
const lo = {
  type: {
    type: String,
    default: "circle"
  },
  radius: [String, Number],
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  description: String,
  loading: Boolean
}, { name: S1, n: P1, classes: z1 } = ee("loading");
function O1(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      e.$slots.default ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
        },
        [
          V(e.$slots, "default"),
          e.loading ? (h(), P(
            "div",
            {
              key: 0,
              class: p(e.n("content-mask"))
            },
            null,
            2
            /* CLASS */
          )) : G("v-if", !0)
        ],
        2
        /* CLASS */
      )) : G("v-if", !0),
      e.isShow ? (h(), P(
        "div",
        {
          key: 1,
          class: p(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
        },
        [
          e.type === "circle" ? (h(), P(
            "div",
            {
              key: 0,
              class: p(e.n("circle"))
            },
            [
              N(
                "span",
                {
                  class: p(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
                  style: q({
                    width: e.multiplySizeUnit(e.radius, 2),
                    height: e.multiplySizeUnit(e.radius, 2),
                    color: e.color
                  })
                },
                n[0] || (n[0] = [
                  N(
                    "svg",
                    { viewBox: "25 25 50 50" },
                    [
                      N("circle", {
                        cx: "50",
                        cy: "50",
                        r: "20",
                        fill: "none"
                      })
                    ],
                    -1
                    /* HOISTED */
                  )
                ]),
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )) : G("v-if", !0),
          (h(!0), P(
            Ne,
            null,
            Ke(e.loadingTypeDict, (o, r) => (h(), P(
              Ne,
              { key: r },
              [
                e.type === r ? (h(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.classes(e.n(r), e.n(`${r}--${e.size}`)))
                  },
                  [
                    (h(!0), P(
                      Ne,
                      null,
                      Ke(o, (t) => (h(), P(
                        "div",
                        {
                          key: t + r,
                          style: q({ backgroundColor: e.color }),
                          class: p(e.classes(e.n(`${r}-item`), e.n(`${r}-item--${e.size}`)))
                        },
                        null,
                        6
                        /* CLASS, STYLE */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                )) : G("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          e.$slots.description || e.description ? (h(), P(
            "div",
            {
              key: 1,
              class: p(e.classes(e.n("description"), e.n(`description--${e.size}`))),
              style: q({ color: e.color })
            },
            [
              V(e.$slots, "description", {}, () => [
                Ie(
                  le(e.description),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : G("v-if", !0)
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const _f = x({
  name: S1,
  props: lo,
  setup(e, { slots: n }) {
    const o = B(() => C(n.default) ? e.loading : !0);
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: o,
      n: P1,
      classes: z1,
      multiplySizeUnit: Cn
    };
  }
});
_f.render = O1;
var ua = _f;
re(ua);
se(ua, lo);
const ST = ua;
var cr = ua, T1 = Object.defineProperty, E1 = Object.defineProperties, B1 = Object.getOwnPropertyDescriptors, Hu = Object.getOwnPropertySymbols, D1 = Object.prototype.hasOwnProperty, I1 = Object.prototype.propertyIsEnumerable, Yu = (e, n, o) => n in e ? T1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ju = (e, n) => {
  for (var o in n || (n = {}))
    D1.call(n, o) && Yu(e, o, n[o]);
  if (Hu)
    for (var o of Hu(n))
      I1.call(n, o) && Yu(e, o, n[o]);
  return e;
}, Wu = (e, n) => E1(e, B1(n));
const xf = {
  type: String,
  nativeType: {
    type: String,
    default: "button"
  },
  size: String,
  loading: Boolean,
  round: Boolean,
  block: Boolean,
  text: Boolean,
  outline: Boolean,
  disabled: Boolean,
  autoLoading: Boolean,
  iconContainer: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  focusable: {
    type: Boolean,
    default: !0
  },
  color: String,
  textColor: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  loadingRadius: [Number, String],
  loadingType: De(lo, "type"),
  loadingSize: Wu(ju({}, De(lo, "size")), {
    default: void 0
  }),
  loadingColor: Wu(ju({}, De(lo, "color")), {
    default: "currentColor"
  }),
  onClick: A(),
  onTouchstart: A()
}, ep = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function M1() {
  const { bindChildren: e, childProviders: n, length: o } = gn(ep);
  return {
    length: o,
    buttons: n,
    bindButtons: e
  };
}
function N1() {
  const { bindParent: e, parentProvider: n, index: o } = hn(ep);
  return {
    index: o,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: A1, n: V1, classes: R1 } = ee("button"), L1 = ["tabindex", "type", "disabled"];
function F1(e, n) {
  const o = Q("var-loading"), r = Q("var-hover-overlay"), t = Ye("ripple"), a = Ye("hover");
  return Ae((h(), P("button", {
    class: p(
      e.classes(
        e.n(),
        e.n("$--box"),
        e.n(`--${e.states.size}`),
        [e.block, `${e.n("$--flex")} ${e.n("--block")}`, e.n("$--inline-flex")],
        [!e.states.text, e.states.elevation],
        [!e.states.iconContainer && !e.states.text, e.n(`--${e.states.type}`)],
        [e.states.text, `${e.n("--text")} ${e.n(`--text-${e.states.type}`)}`],
        [e.states.iconContainer, e.n(`--icon-container-${e.states.type}`)],
        [e.round, e.n("--round")],
        [e.states.outline, e.n("--outline")],
        [e.loading || e.pending, e.n("--loading")],
        [e.disabled, e.n("--disabled")],
        [e.states.text && e.disabled, e.n("--text-disabled")]
      )
    ),
    tabindex: e.focusable ? void 0 : "-1",
    style: q({
      color: e.states.textColor,
      background: e.states.color
    }),
    type: e.nativeType,
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onTouchstart: n[1] || (n[1] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
    onFocus: n[2] || (n[2] = (...i) => e.handleFocus && e.handleFocus(...i)),
    onBlur: n[3] || (n[3] = (i) => e.isFocusing = !1)
  }, [
    e.loading || e.pending ? (h(), Ce(o, {
      key: 0,
      class: p(e.n("loading")),
      "var-button-cover": "",
      color: e.loadingColor,
      type: e.loadingType,
      size: e.loadingSize || e.states.size,
      radius: e.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : G("v-if", !0),
    N(
      "div",
      {
        class: p(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [
        V(e.$slots, "default")
      ],
      2
      /* CLASS */
    ),
    X(r, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, L1)), [
    [t, { disabled: e.disabled || !e.ripple || e.loading || e.pending }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const np = x({
  name: A1,
  components: {
    VarLoading: cr,
    VarHoverOverlay: Vn
  },
  directives: { Ripple: nn, Hover: En },
  props: xf,
  setup(e) {
    const n = $(!1), o = $(!1), { buttonGroup: r } = N1(), { hovering: t, handleHovering: a } = _n(), i = B(() => {
      var d, f, v, g, m, k;
      if (!r)
        return {
          elevation: fn(e.elevation, 2),
          type: (d = e.type) != null ? d : "default",
          size: (f = e.size) != null ? f : "normal",
          color: e.color,
          text: e.text,
          textColor: e.textColor,
          outline: e.outline,
          iconContainer: e.iconContainer
        };
      const { type: w, size: b, color: y, textColor: S, mode: z } = r;
      return {
        elevation: "",
        type: (v = e.type) != null ? v : w.value,
        size: (g = e.size) != null ? g : b.value,
        color: (m = e.color) != null ? m : y.value,
        textColor: (k = e.textColor) != null ? k : S.value,
        text: z.value === "text" || z.value === "outline",
        outline: z.value === "outline",
        iconContainer: z.value === "icon-container"
      };
    });
    function l(d) {
      e.autoLoading && (o.value = !0, Promise.all(Co(d)).then(() => {
        o.value = !1;
      }).catch(() => {
        o.value = !1;
      }));
    }
    function s(d) {
      const { loading: f, disabled: v, onClick: g } = e;
      !g || f || v || o.value || l(C(g, d));
    }
    function u(d) {
      const { loading: f, disabled: v, onTouchstart: g } = e;
      !g || f || v || o.value || l(C(g, d));
    }
    function c() {
      e.focusable && (n.value = !0);
    }
    return {
      pending: o,
      states: i,
      hovering: t,
      isFocusing: n,
      n: V1,
      classes: R1,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      handleFocus: c
    };
  }
});
np.render = F1;
var ca = np;
re(ca);
se(ca, xf);
const PT = ca;
var zn = ca;
const op = {
  visibilityHeight: {
    type: [Number, String],
    default: 200
  },
  duration: {
    type: Number,
    default: 300
  },
  right: [Number, String],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  bottom: [Number, String],
  target: [String, Object],
  onClick: A()
}, { name: U1, n: H1, classes: Y1 } = ee("back-top");
function j1(e, n) {
  const o = Q("var-icon"), r = Q("var-button");
  return h(), Ce(oo, {
    to: "body",
    disabled: e.disabled
  }, [
    N(
      "div",
      Ue({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Wn((...t) => e.handleClick && e.handleClick(...t), ["stop"]))
      }),
      [
        V(e.$slots, "default", {}, () => [
          X(r, {
            elevation: e.elevation,
            type: "primary",
            "var-back-top-cover": ""
          }, {
            default: ce(() => [
              X(o, { name: "chevron-up" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["elevation"])
        ])
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["disabled"]);
}
const rp = x({
  name: U1,
  components: {
    VarButton: zn,
    VarIcon: Ze
  },
  inheritAttrs: !1,
  props: op,
  setup(e) {
    const n = $(!1), o = $(null), r = $(!0);
    let t;
    const a = ls(() => {
      i();
    }, 200);
    jo(() => {
      s(), u(), i(), r.value = !1;
    }), Do(u), Zr(c);
    function i() {
      n.value = Fo(t) >= xe(e.visibilityHeight);
    }
    function l(d) {
      C(e.onClick, d);
      const f = is(t);
      Ir(t, {
        left: f,
        duration: e.duration,
        animation: Yf
      });
    }
    function s() {
      t = e.target ? Wd(e.target, "BackTop") : To(o.value);
    }
    function u() {
      t.addEventListener("scroll", a);
    }
    function c() {
      t && t.removeEventListener("scroll", a);
    }
    return {
      disabled: r,
      show: n,
      backTopEl: o,
      toSizeUnit: ze,
      n: H1,
      classes: Y1,
      handleClick: l
    };
  }
});
rp.render = j1;
var da = rp;
re(da);
se(da, op);
const zT = da;
var qi = da;
const tp = {
  type: {
    type: String,
    default: "default"
  },
  position: {
    type: String,
    default: "right-top"
  },
  hidden: Boolean,
  value: {
    type: [String, Number],
    default: 0
  },
  maxValue: [String, Number],
  dot: Boolean,
  icon: De(en, "name"),
  namespace: De(en, "namespace"),
  color: String,
  offsetX: {
    type: [String, Number],
    default: 0
  },
  offsetY: {
    type: [String, Number],
    default: 0
  }
};
var W1 = Object.defineProperty, Ku = Object.getOwnPropertySymbols, K1 = Object.prototype.hasOwnProperty, q1 = Object.prototype.propertyIsEnumerable, qu = (e, n, o) => n in e ? W1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, X1 = (e, n) => {
  for (var o in n || (n = {}))
    K1.call(n, o) && qu(e, o, n[o]);
  if (Ku)
    for (var o of Ku(n))
      q1.call(n, o) && qu(e, o, n[o]);
  return e;
};
const { name: G1, n: Z1, classes: J1 } = ee("badge"), Q1 = { key: 0 };
function _1(e, n) {
  const o = Q("var-icon");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      V(e.$slots, "default"),
      X(Qe, {
        name: e.n("$-badge-fade"),
        persisted: ""
      }, {
        default: ce(() => [
          Ae(N(
            "span",
            Ue({
              class: e.classes(
                e.n("content"),
                e.n(`--${e.type}`),
                [e.$slots.default, e.n(`--${e.position}`), e.n("--offset")],
                [e.dot, e.n("--dot")],
                [e.icon, e.n("--icon")]
              ),
              style: X1({ background: e.color }, e.offsetStyle)
            }, e.$attrs),
            [
              e.icon ? (h(), Ce(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-badge-cover": "",
                name: e.icon,
                namespace: e.namespace
              }, null, 8, ["class", "name", "namespace"])) : G("v-if", !0),
              V(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (h(), P(
                  "span",
                  Q1,
                  le(e.value),
                  1
                  /* TEXT */
                )) : G("v-if", !0)
              ])
            ],
            16
            /* FULL_PROPS */
          ), [
            [Qn, !e.hidden]
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["name"])
    ],
    2
    /* CLASS */
  );
}
const ap = x({
  name: G1,
  components: { VarIcon: Ze },
  inheritAttrs: !1,
  props: tp,
  setup(e) {
    const n = B(() => {
      const { value: r, maxValue: t } = e;
      return r != null && t != null && U(r) > U(t) ? `${t}+` : r;
    }), o = B(() => ({
      "--badge-offset-y": ze(e.offsetY),
      "--badge-offset-x": ze(e.offsetX)
    }));
    return {
      value: n,
      offsetStyle: o,
      n: Z1,
      classes: J1
    };
  }
});
ap.render = _1;
var fa = ap;
re(fa);
se(fa, tp);
const OT = fa;
var Bt = fa;
const ip = {
  active: {
    type: [Number, String],
    default: 0
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  fixed: Boolean,
  border: Boolean,
  variant: Boolean,
  safeArea: Boolean,
  activeColor: String,
  inactiveColor: String,
  placeholder: Boolean,
  fabProps: Object,
  onChange: A(),
  onBeforeChange: A(),
  onFabClick: A(),
  "onUpdate:active": A()
}, lp = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function x1() {
  const { childProviders: e, length: n, bindChildren: o } = gn(
    lp
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: o
  };
}
var ek = Object.defineProperty, Xu = Object.getOwnPropertySymbols, nk = Object.prototype.hasOwnProperty, ok = Object.prototype.propertyIsEnumerable, Gu = (e, n, o) => n in e ? ek(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Zu = (e, n) => {
  for (var o in n || (n = {}))
    nk.call(n, o) && Gu(e, o, n[o]);
  if (Xu)
    for (var o of Xu(n))
      ok.call(n, o) && Gu(e, o, n[o]);
  return e;
};
const { name: rk, n: tk, classes: ak } = ee("bottom-navigation"), { n: pa } = ee("bottom-navigation-item"), Ju = pa("--right-half-space"), Qu = pa("--left-half-space"), _u = pa("--right-space"), ik = {
  type: "primary"
};
function lk(e, n) {
  const o = Q("var-button");
  return h(), P(
    Ne,
    null,
    [
      N(
        "div",
        Ue({
          class: e.classes(
            e.n(),
            e.n("$--box"),
            [e.fixed, e.n("--fixed")],
            [e.border, e.n("--border")],
            [e.safeArea, e.n("--safe-area")],
            [e.variant, e.n("--variant")]
          ),
          ref: "bottomNavigationDom",
          style: `z-index:${e.zIndex}`
        }, e.$attrs),
        [
          V(e.$slots, "default"),
          e.$slots.fab ? (h(), Ce(o, Ue({
            key: 0,
            class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
            "var-bottom-navigation__fab": "",
            onClick: e.handleFabClick
          }, e.fabProps), {
            default: ce(() => [
              V(e.$slots, "fab")
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class", "onClick"])) : G("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      ),
      e.fixed && e.placeholder ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("placeholder")),
          style: q({ height: e.placeholderHeight })
        },
        null,
        6
        /* CLASS, STYLE */
      )) : G("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const sp = x({
  name: rk,
  components: { VarButton: zn },
  props: ip,
  setup(e, { slots: n }) {
    const o = $(null), r = B(() => e.active), t = B(() => e.activeColor), a = B(() => e.inactiveColor), i = B(() => e.variant), l = $(), s = $({}), { length: u, bottomNavigationItems: c, bindBottomNavigationItem: d } = x1();
    d({
      active: r,
      activeColor: t,
      inactiveColor: a,
      variant: i,
      onToggle: w
    }), fe(() => u.value, v), fe(
      () => e.fabProps,
      (M) => {
        s.value = Zu(Zu({}, ik), M);
      },
      { immediate: !0, deep: !0 }
    ), to(E), mn(() => {
      E(), n.fab && z(u.value);
    }), Xr(() => {
      S(), n.fab && z(u.value);
    });
    function v() {
      u.value === 0 || g() || m() || k();
    }
    function g() {
      return c.find(({ name: M }) => r.value === M.value);
    }
    function m() {
      return c.find(({ index: M }) => r.value === M.value);
    }
    function k() {
      Tn(r.value) && (r.value < 0 ? C(e["onUpdate:active"], 0) : r.value > u.value - 1 && C(e["onUpdate:active"], u.value - 1));
    }
    function w(M) {
      r.value !== M && (e.onBeforeChange ? b(M) : y(M));
    }
    function b(M) {
      const R = Co(C(e.onBeforeChange, M));
      Promise.all(R).then((W) => {
        W.every(Boolean) && y(M);
      });
    }
    function y(M) {
      C(e["onUpdate:active"], M), C(e.onChange, M);
    }
    function S() {
      D().forEach((R) => {
        R.classList.remove(Ju, Qu, _u);
      });
    }
    function z(M) {
      const R = D(), W = R.length, H = M % 2 === 0;
      R.forEach((F, Y) => {
        O(H, F, Y, W);
      });
    }
    function O(M, R, W, H) {
      const F = W === H - 1;
      if (!M && F) {
        R.classList.add(_u);
        return;
      }
      const Y = W === H / 2 - 1, j = W === H / 2;
      Y ? R.classList.add(Ju) : j && R.classList.add(Qu);
    }
    function D() {
      return Array.from(o.value.querySelectorAll(`.${pa()}`));
    }
    function T() {
      C(e.onFabClick);
    }
    function E() {
      if (!e.fixed || !e.placeholder)
        return;
      const { height: M } = an(o.value);
      l.value = ze(M);
    }
    return {
      length: u,
      bottomNavigationDom: o,
      fabProps: s,
      placeholderHeight: l,
      n: tk,
      classes: ak,
      handleFabClick: T
    };
  }
});
sp.render = lk;
var va = sp;
re(va);
se(va, ip);
const TT = va;
var Xi = va;
const up = {
  name: String,
  label: String,
  icon: De(en, "name"),
  namespace: De(en, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: A()
};
function sk() {
  const { parentProvider: e, index: n, bindParent: o } = hn(
    lp
  );
  return o || An("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: o
  };
}
const { name: uk, n: ck, classes: dk } = ee("bottom-navigation-item"), fk = {
  type: "danger",
  dot: !0
};
function pk(e, n) {
  const o = Q("var-icon"), r = Q("var-badge"), t = Ye("ripple");
  return Ae((h(), P(
    "button",
    {
      class: p(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")])),
      style: q({
        color: e.isActive ? e.activeColor : e.inactiveColor
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      N(
        "div",
        {
          class: p(
            e.classes(
              e.n("icon-container"),
              [e.variant, e.n("--variant-icon-container")],
              [e.isActive && e.variant, e.n("--variant-active")]
            )
          )
        },
        [
          e.badge ? (h(), Ce(r, Ue({ key: 0 }, e.badgeProps, {
            class: e.n("badge"),
            "var-bottom-navigation-item-cover": ""
          }), {
            default: ce(() => [
              V(e.$slots, "icon", { active: e.isActive }, () => [
                e.icon ? (h(), Ce(o, {
                  key: 0,
                  name: e.icon,
                  namespace: e.namespace,
                  class: p(e.n("icon")),
                  "var-bottom-navigation-item-cover": ""
                }, null, 8, ["name", "namespace", "class"])) : G("v-if", !0)
              ])
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class"])) : V(e.$slots, "icon", {
            key: 1,
            active: e.isActive
          }, () => [
            e.icon ? (h(), Ce(o, {
              key: 0,
              name: e.icon,
              namespace: e.namespace,
              class: p(e.n("icon")),
              "var-bottom-navigation-item-cover": ""
            }, null, 8, ["name", "namespace", "class"])) : G("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      N(
        "span",
        {
          class: p(e.n("label"))
        },
        [
          V(e.$slots, "default", {}, () => [
            Ie(
              le(e.label),
              1
              /* TEXT */
            )
          ])
        ],
        2
        /* CLASS */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t]
  ]);
}
const cp = x({
  name: uk,
  components: {
    VarBadge: Bt,
    VarIcon: Ze
  },
  directives: { Ripple: nn },
  props: up,
  setup(e) {
    const n = B(() => e.name), o = B(() => [n.value, t.value].includes(l.value)), r = B(() => e.badge === !0 ? fk : e.badge), { index: t, bottomNavigation: a, bindBottomNavigation: i } = sk(), { active: l, activeColor: s, inactiveColor: u, variant: c } = a;
    i({
      name: n,
      index: t
    });
    function f() {
      var v;
      const g = (v = n.value) != null ? v : t.value;
      C(e.onClick, g), C(a.onToggle, g);
    }
    return {
      activeColor: s,
      inactiveColor: u,
      badgeProps: r,
      isActive: o,
      variant: c,
      n: ck,
      classes: dk,
      handleClick: f
    };
  }
});
cp.render = pk;
var ma = cp;
re(ma);
se(ma, up);
const ET = ma;
var Gi = ma;
const dp = {
  separator: String,
  onClick: A()
}, fp = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function vk() {
  const { childProviders: e, bindChildren: n, length: o } = gn(
    fp
  );
  return {
    length: o,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function mk() {
  const { parentProvider: e, bindParent: n, index: o } = hn(
    fp
  );
  return n || An("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: o,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: hk, n: gk, classes: bk } = ee("breadcrumb");
function yk(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      N(
        "div",
        {
          class: p(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
          onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
        },
        [
          V(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      e.isLast ? G("v-if", !0) : V(e.$slots, "separator", { key: 0 }, () => {
        var o;
        return [
          N(
            "div",
            {
              class: p(e.n("separator")),
              "aria-hidden": "true"
            },
            le((o = e.separator) != null ? o : e.parentSeparator),
            3
            /* TEXT, CLASS */
          )
        ];
      })
    ],
    2
    /* CLASS */
  );
}
const pp = x({
  name: hk,
  props: dp,
  setup(e) {
    const { index: n, breadcrumb: o, bindBreadcrumb: r } = mk(), t = B(() => n.value === o.length.value - 1), a = B(() => o.separator.value);
    r(null);
    function i(l) {
      t.value || C(e.onClick, l);
    }
    return {
      n: gk,
      classes: bk,
      isLast: t,
      parentSeparator: a,
      handleClick: i
    };
  }
});
pp.render = yk;
var ha = pp;
re(ha);
se(ha, dp);
const BT = ha;
var Zi = ha;
const vp = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: kk, n: $k } = ee("breadcrumbs");
function wk(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n()),
      role: "navigation",
      "aria-label": "Breadcrumbs"
    },
    [
      V(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const mp = x({
  name: kk,
  props: vp,
  setup(e) {
    const n = B(() => e.separator), { bindBreadcrumbList: o, length: r } = vk();
    return o({
      length: r,
      separator: n
    }), { n: $k };
  }
});
mp.render = wk;
var ga = mp;
re(ga);
se(ga, vp);
const DT = ga;
var Ji = ga;
const hp = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  textColor: String,
  mode: {
    type: String,
    default: "normal"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  vertical: Boolean
}, { name: Ck, n: Sk, classes: Pk } = ee("button-group");
function zk(e, n) {
  return h(), P(
    "div",
    {
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.mode, `${e.n(`--mode-${e.mode}`)}`],
          [e.vertical, e.n("--vertical"), e.n("--horizontal")],
          [e.mode === "normal", e.formatElevation(e.elevation, 2)]
        )
      )
    },
    [
      V(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const gp = x({
  name: Ck,
  props: hp,
  setup(e) {
    const { bindButtons: n } = M1(), o = {
      elevation: B(() => e.elevation),
      type: B(() => e.type),
      size: B(() => e.size),
      color: B(() => e.color),
      textColor: B(() => e.textColor),
      mode: B(() => e.mode)
    };
    return n(o), {
      n: Sk,
      classes: Pk,
      formatElevation: fn
    };
  }
});
gp.render = zk;
var ba = gp;
re(ba);
se(ba, hp);
const IT = ba;
var Qi = ba;
const bp = {
  src: String,
  fit: {
    type: String,
    default: "cover"
  },
  imageHeight: [String, Number],
  imageWidth: [String, Number],
  variant: {
    type: String,
    default: "standard"
  },
  layout: {
    type: String,
    default: "column"
  },
  floating: Boolean,
  floatingDuration: {
    type: Number,
    default: 250
  },
  alt: String,
  title: String,
  subtitle: String,
  description: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  ripple: Boolean,
  onClick: A(),
  "onUpdate:floating": A(),
  // deprecated
  outline: Boolean
};
var xu = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: Ok, n: Tk, classes: Ek } = ee("card"), Bk = 500, Dk = ["src", "alt"];
function Ik(e, n) {
  const o = Q("var-icon"), r = Q("var-button"), t = Ye("ripple");
  return Ae((h(), P(
    "div",
    {
      ref: "card",
      class: p(
        e.classes(
          e.n(),
          [e.isRow, e.n("--layout-row")],
          [e.variant === "outlined" || e.outline, e.n("--outline")],
          [e.variant === "filled", e.n("--filled")],
          [e.variant === "standard" || e.outline, e.formatElevation(e.elevation, 1)]
        )
      ),
      style: q({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      N(
        "div",
        {
          ref: "cardFloater",
          class: p(e.n("floater")),
          style: q({
            width: e.floaterWidth,
            height: e.floaterHeight,
            top: e.floaterTop,
            left: e.floaterLeft,
            overflow: e.floaterOverflow,
            position: e.floaterPosition,
            zIndex: e.floated ? e.zIndex : void 0,
            background: e.outline && !e.floated ? "transparent" : void 0,
            transition: e.floated ? `background-color ${e.floatingDuration}ms, color ${e.floatingDuration}ms, width ${e.floatingDuration}ms, height ${e.floatingDuration}ms, top ${e.floatingDuration}ms, left ${e.floatingDuration}ms` : void 0
          })
        },
        [
          V(e.$slots, "image", {}, () => [
            e.src ? (h(), P("img", {
              key: 0,
              class: p(e.n("image")),
              style: q({
                objectFit: e.fit,
                height: e.toSizeUnit(e.imageHeight),
                width: e.toSizeUnit(e.imageWidth)
              }),
              src: e.src,
              alt: e.alt
            }, null, 14, Dk)) : G("v-if", !0)
          ]),
          N(
            "div",
            {
              class: p(e.n("container"))
            },
            [
              V(e.$slots, "title", {
                slotClass: e.n("title")
              }, () => [
                e.title ? (h(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("title"))
                  },
                  le(e.title),
                  3
                  /* TEXT, CLASS */
                )) : G("v-if", !0)
              ]),
              V(e.$slots, "subtitle", {
                slotClass: e.n("subtitle")
              }, () => [
                e.subtitle ? (h(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("subtitle"))
                  },
                  le(e.subtitle),
                  3
                  /* TEXT, CLASS */
                )) : G("v-if", !0)
              ]),
              e.$slots.default ? (h(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("content"))
                },
                [
                  V(e.$slots, "default")
                ],
                2
                /* CLASS */
              )) : G("v-if", !0),
              V(e.$slots, "description", {
                slotClass: e.n("description")
              }, () => [
                e.description ? (h(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("description"))
                  },
                  le(e.description),
                  3
                  /* TEXT, CLASS */
                )) : G("v-if", !0)
              ]),
              e.$slots.extra ? (h(), P(
                "div",
                {
                  key: 1,
                  class: p(e.n("footer"))
                },
                [
                  V(e.$slots, "extra")
                ],
                2
                /* CLASS */
              )) : G("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (h(), P(
                "div",
                {
                  key: 2,
                  class: p(e.n("floating-content")),
                  style: q({
                    height: e.contentHeight,
                    opacity: e.opacity,
                    transition: `opacity ${e.floatingDuration * 2}ms`
                  })
                },
                [
                  V(e.$slots, "floating-content")
                ],
                6
                /* CLASS, STYLE */
              )) : G("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.showFloatingButtons ? (h(), P(
            "div",
            {
              key: 0,
              class: p(e.classes(e.n("floating-buttons"), e.n("$--box"))),
              style: q({
                zIndex: e.zIndex,
                opacity: e.opacity,
                transition: `opacity ${e.floatingDuration * 2}ms`
              })
            },
            [
              V(e.$slots, "close-button", {}, () => [
                X(r, {
                  "var-card-cover": "",
                  class: p(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
                  onClick: Wn(e.close, ["stop"])
                }, {
                  default: ce(() => [
                    X(o, {
                      "var-card-cover": "",
                      name: "window-close",
                      class: p(e.n("close-button-icon"))
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "onClick"])
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : G("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      ),
      N(
        "div",
        {
          class: p(e.n("holder")),
          style: q({
            width: e.holderWidth,
            height: e.holderHeight
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: !e.ripple || e.floater }]
  ]);
}
const yp = x({
  name: Ok,
  directives: { Ripple: nn },
  components: {
    VarIcon: Ze,
    VarButton: zn
  },
  props: bp,
  setup(e) {
    const n = $(null), o = $(null), r = $("auto"), t = $("auto"), a = $("100%"), i = $("100%"), l = $("auto"), s = $("auto"), u = $(void 0), c = $("hidden"), d = $("0px"), f = $("0"), v = B(() => e.layout === "row"), g = $(!1), m = $(!1), { zIndex: k } = _r(() => e.floating, 1);
    let w = "auto", b = "auto", y = null;
    const S = $(null);
    Qr(
      () => e.floating,
      () => !v.value
    ), fe(
      () => e.floating,
      (E) => {
        v.value || He(() => {
          E ? z() : O();
        });
      },
      { immediate: !0 }
    );
    function z() {
      return xu(this, null, function* () {
        clearTimeout(S.value), clearTimeout(y), S.value = null, S.value = setTimeout(
          () => xu(this, null, function* () {
            const { width: E, height: M, left: R, top: W } = an(n.value);
            r.value = ze(E), t.value = ze(M), a.value = r.value, i.value = t.value, l.value = ze(W), s.value = ze(R), u.value = "fixed", w = l.value, b = s.value, g.value = !0, yield kn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", d.value = "auto", f.value = "1", c.value = "auto", m.value = !0;
          }),
          e.ripple ? Bk : 0
        );
      });
    }
    function O() {
      clearTimeout(y), clearTimeout(S.value), S.value = null, a.value = r.value, i.value = t.value, l.value = w, s.value = b, d.value = "0px", f.value = "0", g.value = !1, y = setTimeout(() => {
        r.value = "auto", t.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", w = "auto", b = "auto", c.value = "hidden", u.value = void 0, m.value = !1;
      }, e.floatingDuration);
    }
    function D() {
      C(e["onUpdate:floating"], !1);
    }
    function T(E) {
      C(e.onClick, E);
    }
    return {
      card: n,
      cardFloater: o,
      holderWidth: r,
      holderHeight: t,
      floater: S,
      floaterWidth: a,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: c,
      contentHeight: d,
      opacity: f,
      zIndex: k,
      isRow: v,
      showFloatingButtons: g,
      floated: m,
      n: Tk,
      classes: Ek,
      toSizeUnit: ze,
      close: D,
      formatElevation: fn,
      handleClick: T
    };
  }
});
yp.render = Ik;
var ya = yp;
re(ya);
se(ya, bp);
const MT = ya;
var _i = ya;
const kp = {
  title: String,
  icon: De(en, "name"),
  namespace: De(en, "namespace"),
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: A()
}, { name: Mk, n: Nk, classes: Ak } = ee("cell");
function Vk(e, n) {
  const o = Q("var-icon"), r = Ye("ripple");
  return Ae((h(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      V(e.$slots, "icon", {}, () => [
        e.icon ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("icon"), e.iconClass))
          },
          [
            X(o, {
              name: e.icon,
              namespace: e.namespace
            }, null, 8, ["name", "namespace"])
          ],
          2
          /* CLASS */
        )) : G("v-if", !0)
      ]),
      N(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          V(e.$slots, "default", {}, () => [
            e.title ? (h(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("title"), e.titleClass))
              },
              le(e.title),
              3
              /* TEXT, CLASS */
            )) : G("v-if", !0)
          ]),
          V(e.$slots, "description", {}, () => [
            e.description ? (h(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("description"), e.descriptionClass))
              },
              le(e.description),
              3
              /* TEXT, CLASS */
            )) : G("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      e.$slots.extra ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.classes(e.n("extra"), e.extraClass))
        },
        [
          V(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const $p = x({
  name: Mk,
  components: { VarIcon: Ze },
  directives: { Ripple: nn },
  props: kp,
  setup(e) {
    const n = B(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ze(e.borderOffset),
      "--cell-border-right": ze(e.borderOffset)
    });
    function o(r) {
      C(e.onClick, r);
    }
    return {
      borderOffsetStyles: n,
      n: Nk,
      classes: Ak,
      toSizeUnit: ze,
      handleClick: o
    };
  }
});
$p.render = Vk;
var ka = $p;
re(ka);
se(ka, kp);
const NT = ka;
var xi = ka;
const wp = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: [String, Number],
  options: {
    type: Array,
    default: () => []
  },
  labelKey: {
    type: String,
    default: "label"
  },
  valueKey: {
    type: String,
    default: "value"
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: [Array, Function, Object],
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: Rk, n: Lk, classes: Fk } = ee("checkbox-group");
function Uk(e, n) {
  const o = Q("maybe-v-node"), r = Q("var-checkbox"), t = Q("var-form-details");
  return h(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      N(
        "div",
        {
          class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          e.options.length ? (h(!0), P(
            Ne,
            { key: 0 },
            Ke(e.options, (a) => (h(), Ce(r, {
              key: a[e.valueKey],
              "checked-value": a[e.valueKey],
              disabled: a.disabled
            }, {
              default: ce(({ checked: i }) => [
                X(o, {
                  is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey]
                }, null, 8, ["is"])
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["checked-value", "disabled"]))),
            128
            /* KEYED_FRAGMENT */
          )) : G("v-if", !0),
          V(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Cp = x({
  name: Rk,
  components: { VarFormDetails: Pn, VarCheckbox: lr, MaybeVNode: Jr },
  props: wp,
  setup(e) {
    const n = B(() => e.max), o = B(() => e.modelValue.length), { length: r, checkboxes: t, bindCheckboxes: a } = my(), { bindForm: i } = Fn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Ln(), d = B(() => l.value), f = {
      max: n,
      checkedCount: o,
      onChecked: m,
      onUnchecked: k,
      validate: O,
      resetValidation: c,
      reset: z,
      errorMessage: d
    };
    fe(() => e.modelValue, w, { deep: !0 }), fe(() => r.value, w), a(f), C(i, f);
    function v(D) {
      He(() => {
        const { validateTrigger: T, rules: E, modelValue: M } = e;
        s(T, D, E, M);
      });
    }
    function g(D) {
      C(e["onUpdate:modelValue"], D), C(e.onChange, D), v("onChange");
    }
    function m(D) {
      const { modelValue: T } = e;
      T.includes(D) || g([...T, D]);
    }
    function k(D) {
      const { modelValue: T } = e;
      T.includes(D) && g(T.filter((E) => E !== D));
    }
    function w() {
      t.forEach(({ sync: D }) => D(e.modelValue));
    }
    function b() {
      t.forEach((D) => D.resetWithAnimation());
    }
    function y() {
      const D = t.map(({ checkedValue: E }) => E.value), T = Ks(D);
      return b(), C(e["onUpdate:modelValue"], T), T;
    }
    function S() {
      const D = t.filter(({ checked: E }) => !E.value).map(({ checkedValue: E }) => E.value), T = Ks(D);
      return b(), C(e["onUpdate:modelValue"], T), T;
    }
    function z() {
      C(e["onUpdate:modelValue"], []), c();
    }
    function O() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: Lk,
      classes: Fk,
      checkAll: y,
      inverseAll: S,
      reset: z,
      validate: O,
      resetValidation: c,
      isFunction: Rn
    };
  }
});
Cp.render = Uk;
var $a = Cp;
re($a);
se($a, wp);
const AT = $a;
var el = $a;
const Sp = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  textColor: String,
  iconName: De(en, "name"),
  namespace: De(en, "namespace"),
  plain: Boolean,
  round: {
    type: Boolean,
    default: !0
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  block: Boolean,
  closeable: Boolean,
  onClose: A()
}, { name: Hk, n: po, classes: Yk } = ee("chip");
function jk(e, n) {
  const o = Q("var-icon");
  return h(), Ce(Qe, {
    name: e.n("$-fade")
  }, {
    default: ce(() => [
      N(
        "span",
        Ue({
          class: e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 1), ...e.contentClass),
          style: e.chipStyle
        }, e.$attrs),
        [
          V(e.$slots, "left"),
          N(
            "span",
            {
              class: p(e.n(`text-${e.size}`))
            },
            [
              V(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          V(e.$slots, "right"),
          e.closeable ? (h(), P(
            "span",
            {
              key: 0,
              class: p(e.n("--close")),
              onClick: n[0] || (n[0] = (...r) => e.handleClose && e.handleClose(...r))
            },
            [
              X(o, {
                name: `${e.iconName ? e.iconName : "close-circle"}`,
                namespace: e.namespace
              }, null, 8, ["name", "namespace"])
            ],
            2
            /* CLASS */
          )) : G("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const Pp = x({
  name: Hk,
  components: {
    VarIcon: Ze
  },
  inheritAttrs: !1,
  props: Sp,
  setup(e) {
    const n = B(() => {
      const { plain: t, textColor: a, color: i } = e;
      return t ? {
        color: a || i,
        borderColor: i
      } : {
        color: a,
        background: i
      };
    }), o = B(() => {
      const { size: t, block: a, type: i, plain: l, round: s } = e, u = po(a ? "$--flex" : "$--inline-flex"), c = l ? `${po("plain")} ${po(`plain-${i}`)}` : po(`--${i}`), d = s ? po("--round") : null;
      return [po(`--${t}`), u, c, d];
    });
    function r(t) {
      C(e.onClose, t);
    }
    return {
      chipStyle: n,
      contentClass: o,
      n: po,
      classes: Yk,
      formatElevation: fn,
      handleClose: r
    };
  }
});
Pp.render = jk;
var wa = Pp;
re(wa);
se(wa, Sp);
const VT = wa;
var Dt = wa;
const zp = {
  span: {
    type: [String, Number],
    default: 24
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: String,
  align: String,
  xs: [Object, Number, String],
  sm: [Object, Number, String],
  md: [Object, Number, String],
  lg: [Object, Number, String],
  xl: [Object, Number, String],
  onClick: A()
}, Op = Symbol("ROW_BIND_COL_KEY");
function Wk() {
  const { length: e, childProviders: n, bindChildren: o } = gn(Op);
  return {
    length: e,
    cols: n,
    bindCols: o
  };
}
function Kk() {
  const { index: e, bindParent: n, parentProvider: o } = hn(Op);
  return {
    index: e,
    row: o,
    bindRow: n
  };
}
const { name: qk, n: st, classes: Xk } = ee("col");
function Gk(e, n) {
  return h(), P(
    "div",
    {
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.span >= 0, e.n(`--span-${e.span}`)],
          [e.offset, e.n(`--offset-${e.offset}`)],
          ...e.getSize("xs", e.xs),
          ...e.getSize("sm", e.sm),
          ...e.getSize("md", e.md),
          ...e.getSize("lg", e.lg),
          ...e.getSize("xl", e.xl)
        )
      ),
      style: q({
        flexDirection: e.direction,
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right),
        paddingTop: e.toSizeUnit(e.padding.top),
        paddingBottom: e.toSizeUnit(e.padding.bottom)
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      V(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Tp = x({
  name: qk,
  props: zp,
  setup(e) {
    const n = B(() => U(e.span)), o = B(() => U(e.offset)), r = B(() => {
      var s;
      const [u = 0, c = 0] = (s = t == null ? void 0 : t.average.value) != null ? s : [];
      return { left: c, right: c, top: u, bottom: u };
    }), { row: t, bindRow: a } = Kk();
    C(a, null);
    function i(s, u) {
      const c = [];
      if (u == null)
        return c;
      if (zo(u)) {
        const { offset: d, span: f } = u;
        return Number(f) >= 0 && c.push(st(`--span-${s}-${f}`)), d && c.push(st(`--offset-${s}-${d}`)), c;
      }
      return Number(u) >= 0 && c.push(st(`--span-${s}-${u}`)), c;
    }
    function l(s) {
      C(e.onClick, s);
    }
    return {
      span: n,
      offset: o,
      padding: r,
      n: st,
      classes: Xk,
      toNumber: U,
      toSizeUnit: ze,
      getSize: i,
      handleClick: l,
      padStartFlex: Tt
    };
  }
});
Tp.render = Gk;
var Ca = Tp;
re(Ca);
se(Ca, zp);
const RT = Ca;
var nl = Ca;
const Ep = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Zk() {
  const { childProviders: e, length: n, bindChildren: o } = gn(
    Ep
  );
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: o
  };
}
const Bp = {
  modelValue: [Array, String, Number],
  accordion: Boolean,
  offset: {
    type: Boolean,
    default: !0
  },
  divider: {
    type: Boolean,
    default: !0
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: Jk, n: Qk } = ee("collapse");
function _k(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      V(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Dp = x({
  name: Jk,
  props: Bp,
  setup(e) {
    const n = B(() => e.offset), o = B(() => e.divider), r = B(() => e.elevation), t = B(() => e.accordion), a = B(() => Co(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = Zk(), u = {
      offset: n,
      divider: o,
      elevation: r,
      accordion: t,
      updateItem: c
    };
    fe(
      () => i.value,
      () => He().then(v)
    ), fe(
      () => e.modelValue,
      () => He().then(v)
    ), s(u);
    function c(m, k) {
      if (e.accordion) {
        d(k ? m : void 0);
        return;
      }
      const w = k ? [...a.value, m] : a.value.filter((b) => b !== m);
      d(w);
    }
    function d(m) {
      C(e["onUpdate:modelValue"], m), C(e.onChange, m);
    }
    function f() {
      if (e.accordion) {
        const [w] = a.value;
        if (w == null)
          return;
        const b = l.find(({ name: y }) => w === y.value);
        return b ?? l.find(({ index: y, name: S }) => S.value == null && w === y.value);
      }
      const m = l.filter(
        ({ name: w }) => w.value != null && a.value.includes(w.value)
      ), k = l.filter(
        ({ index: w, name: b }) => b.value == null && a.value.includes(w.value)
      );
      return [...m, ...k];
    }
    function v() {
      const m = Uh(Co(f()));
      l.forEach((k) => {
        k.init(m.includes(k));
      });
    }
    return {
      divider: o,
      n: Qk,
      toggleAll: (m) => {
        if (e.accordion) return;
        const w = l.filter((b) => {
          var y;
          const S = (y = b.name.value) != null ? y : b.index.value, z = a.value.includes(S);
          return m.skipDisabled && b.disabled.value ? z : m.expand === "inverse" ? !z : m.expand;
        }).map((b) => {
          var y;
          return (y = b.name.value) != null ? y : b.index.value;
        });
        d(w);
      }
    };
  }
});
Dp.render = _k;
var Sa = Dp;
re(Sa);
se(Sa, Bp);
const LT = Sa;
var ol = Sa;
function xk() {
  const { parentProvider: e, index: n, bindParent: o } = hn(
    Ep
  );
  return o || An("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: o
  };
}
const Ip = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
var ec = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
function Mp(e) {
  const { contentEl: n, showContent: o, expand: r } = e;
  let t = !0;
  fe(
    r,
    (u) => {
      He(() => {
        u ? a() : i();
      });
    },
    { immediate: !0 }
  );
  function a() {
    return ec(this, null, function* () {
      if (!n.value || (n.value.style.height = "", o.value = !0, yield nr(), !n.value))
        return;
      const { offsetHeight: u } = n.value;
      n.value.style.height = "0px", yield nr(), n.value && (n.value.style.height = u + "px", t && (yield kn(), t && l()));
    });
  }
  const i = () => ec(this, null, function* () {
    if (!n.value)
      return;
    const { offsetHeight: u } = n.value;
    n.value.style.height = u + "px", yield nr(), n.value.style.height = "0px";
  }), l = () => {
    r.value || (o.value = !1), n.value.style.height = "";
  };
  return {
    handleTransitionEnd: l,
    handleTransitionStart: () => {
      t = !1;
    }
  };
}
const { name: e$, n: n$, classes: o$ } = ee("collapse-item"), r$ = ["aria-expanded", "aria-disabled", "role"];
function t$(e, n) {
  const o = Q("var-icon");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: q(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
    },
    [
      N(
        "div",
        {
          class: p(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
        },
        null,
        2
        /* CLASS */
      ),
      N("div", {
        class: p(e.classes(e.n("header"), [!e.disabled, e.n("header--cursor-pointer")])),
        "aria-expanded": e.isShow,
        "aria-disabled": e.disabled,
        role: e.accordion ? "tab" : "button",
        onClick: n[0] || (n[0] = (...r) => e.toggle && e.toggle(...r))
      }, [
        e.$slots.title || e.title ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.n("header-title"))
          },
          [
            V(e.$slots, "title", {}, () => [
              Ie(
                le(e.title),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : G("v-if", !0),
        N(
          "div",
          {
            class: p(e.n("header-icon"))
          },
          [
            V(e.$slots, "icon", {}, () => [
              X(o, {
                name: e.icon,
                transition: 250,
                class: p(
                  e.classes(
                    e.n("header-icon"),
                    [e.isShow && e.icon === "chevron-down", e.n("header-open")],
                    [e.disabled, e.n("header--disable")]
                  )
                )
              }, null, 8, ["name", "class"])
            ])
          ],
          2
          /* CLASS */
        )
      ], 10, r$),
      Ae(N(
        "div",
        {
          class: p(e.n("content")),
          ref: "contentEl",
          onTransitionend: n[1] || (n[1] = (...r) => e.handleTransitionEnd && e.handleTransitionEnd(...r)),
          onTransitionstart: n[2] || (n[2] = (...r) => e.handleTransitionStart && e.handleTransitionStart(...r))
        },
        [
          N(
            "div",
            {
              class: p(e.n("content-wrap"))
            },
            [
              V(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        34
        /* CLASS, NEED_HYDRATION */
      ), [
        [Qn, e.showContent]
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const Np = x({
  name: e$,
  components: {
    VarIcon: Ze
  },
  props: Ip,
  setup(e) {
    const n = $(!1), o = $(!1), r = $(null), t = B(() => e.name), a = B(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = xk(), { offset: u, divider: c, elevation: d, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: t,
      disabled: a,
      init: w
    });
    const { handleTransitionEnd: m, handleTransitionStart: k } = Mp({
      contentEl: r,
      showContent: o,
      expand: n
    });
    function w(y) {
      n.value = y;
    }
    function b() {
      var y;
      e.disabled || v((y = e.name) != null ? y : i.value, !n.value);
    }
    return {
      isShow: n,
      showContent: o,
      offset: u,
      divider: c,
      elevation: d,
      contentEl: r,
      accordion: f,
      n: n$,
      classes: o$,
      toggle: b,
      formatElevation: fn,
      handleTransitionEnd: m,
      handleTransitionStart: k
    };
  }
});
Np.render = t$;
var Pa = Np;
re(Pa);
se(Pa, Ip);
const FT = Pa;
var rl = Pa;
const Ap = {
  expand: Boolean
}, { name: a$, n: i$ } = ee("collapse-transition");
function l$(e, n) {
  return Ae((h(), P(
    "div",
    {
      class: p(e.n("content")),
      ref: "contentEl",
      onTransitionend: n[0] || (n[0] = (...o) => e.handleTransitionEnd && e.handleTransitionEnd(...o)),
      onTransitionstart: n[1] || (n[1] = (...o) => e.handleTransitionStart && e.handleTransitionStart(...o))
    },
    [
      V(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  )), [
    [Qn, e.showContent]
  ]);
}
const Vp = x({
  name: a$,
  props: Ap,
  setup(e) {
    const n = $(!1), o = $(null), r = B(() => e.expand), { handleTransitionEnd: t, handleTransitionStart: a } = Mp({
      contentEl: o,
      showContent: n,
      expand: r
    });
    return {
      showContent: n,
      contentEl: o,
      n: i$,
      handleTransitionEnd: t,
      handleTransitionStart: a
    };
  }
});
Vp.render = l$;
var za = Vp;
re(za);
se(za, Ap);
const UT = za;
var tl = za;
const Rp = {
  time: {
    type: [String, Number],
    default: 0
  },
  format: {
    type: String,
    default: "HH : mm : ss"
  },
  autoStart: {
    type: Boolean,
    default: !0
  },
  onEnd: A(),
  onChange: A()
}, { name: s$, n: u$ } = ee("countdown"), al = 1e3, il = 60 * al, ll = 60 * il, nc = 24 * ll;
function c$(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      V(e.$slots, "default", wo(Gr(e.timeData)), () => [
        Ie(
          le(e.showTime),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const Lp = x({
  name: s$,
  props: Rp,
  setup(e) {
    const n = $(""), o = $({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let r = 0, t = !1, a = 0, i = 0, l;
    fe(
      () => e.time,
      () => {
        v(), e.autoStart && d();
      }
    ), jo(() => {
      c(), e.autoStart && d();
    }), Do(() => {
      l != null && (t = l, t === !0 && d(!0));
    }), vr(() => {
      l = t, f();
    }), qr(f);
    function s(g, m) {
      const k = Object.values(m), w = ["DD", "HH", "mm", "ss"], b = [24, 60, 60, 1e3];
      if (w.forEach((y, S) => {
        g.includes(y) ? g = g.replace(y, Yo(`${k[S]}`, 2, "0")) : k[S + 1] += k[S] * b[S];
      }), g.includes("S")) {
        const y = Yo(`${k[k.length - 1]}`, 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", y) : g.includes("SS") ? g = g.replace("SS", y.slice(0, 2)) : g = g.replace("S", y.slice(0, 1));
      }
      return g;
    }
    function u(g) {
      const m = Math.floor(g / nc), k = Math.floor(g % nc / ll), w = Math.floor(g % ll / il), b = Math.floor(g % il / al), y = Math.floor(g % al), S = {
        days: m,
        hours: k,
        minutes: w,
        seconds: b,
        milliseconds: y
      };
      o.value = S, C(e.onChange, o.value), n.value = s(e.format, S);
    }
    function c() {
      const { time: g, onEnd: m } = e, k = performance.now();
      if (r || (r = k + U(g)), i = r - k, i < 0 && (i = 0), u(i), i === 0) {
        C(m);
        return;
      }
      t && (a = Dr(c));
    }
    function d(g = !1) {
      t && !g || (t = !0, r = performance.now() + (i || U(e.time)), c());
    }
    function f() {
      t = !1, qs(a);
    }
    function v() {
      r = 0, t = !1, qs(a), c();
    }
    return {
      showTime: n,
      timeData: o,
      n: u$,
      start: d,
      pause: f,
      reset: v
    };
  }
});
Lp.render = c$;
var Oa = Lp;
re(Oa);
se(Oa, Rp);
const HT = Oa;
var sl = Oa;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Jo = 9e15, No = 1e9, ul = "0123456789abcdef", It = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Mt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", cl = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -Jo,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Jo,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Fp, so, Te = !0, Ta = "[DecimalError] ", Bo = Ta + "Invalid argument: ", Up = Ta + "Precision limit exceeded", Hp = Ta + "crypto unavailable", Yp = "[object Decimal]", $n = Math.floor, dn = Math.pow, d$ = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, f$ = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, p$ = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, jp = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Jn = 1e7, Pe = 7, v$ = 9007199254740991, m$ = It.length - 1, dl = Mt.length - 1, J = { toStringTag: Yp };
J.absoluteValue = J.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), we(e);
};
J.ceil = function() {
  return we(new this.constructor(this), this.e + 1, 2);
};
J.clampedTo = J.clamp = function(e, n) {
  var o, r = this, t = r.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s) return new t(NaN);
  if (e.gt(n)) throw Error(Bo + n);
  return o = r.cmp(e), o < 0 ? e : r.cmp(n) > 0 ? n : new t(r);
};
J.comparedTo = J.cmp = function(e) {
  var n, o, r, t, a = this, i = a.d, l = (e = new a.constructor(e)).d, s = a.s, u = e.s;
  if (!i || !l)
    return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0]) return i[0] ? s : l[0] ? -u : 0;
  if (s !== u) return s;
  if (a.e !== e.e) return a.e > e.e ^ s < 0 ? 1 : -1;
  for (r = i.length, t = l.length, n = 0, o = r < t ? r : t; n < o; ++n)
    if (i[n] !== l[n]) return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return r === t ? 0 : r > t ^ s < 0 ? 1 : -1;
};
J.cosine = J.cos = function() {
  var e, n, o = this, r = o.constructor;
  return o.d ? o.d[0] ? (e = r.precision, n = r.rounding, r.precision = e + Math.max(o.e, o.sd()) + Pe, r.rounding = 1, o = h$(r, Gp(r, o)), r.precision = e, r.rounding = n, we(so == 2 || so == 3 ? o.neg() : o, e, n, !0)) : new r(1) : new r(NaN);
};
J.cubeRoot = J.cbrt = function() {
  var e, n, o, r, t, a, i, l, s, u, c = this, d = c.constructor;
  if (!c.isFinite() || c.isZero()) return new d(c);
  for (Te = !1, a = c.s * dn(c.s * c, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (o = bn(c.d), e = c.e, (a = (e - o.length + 1) % 3) && (o += a == 1 || a == -2 ? "0" : "00"), a = dn(o, 1 / 3), e = $n((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? o = "5e" + e : (o = a.toExponential(), o = o.slice(0, o.indexOf("e") + 1) + e), r = new d(o), r.s = c.s) : r = new d(a.toString()), i = (e = d.precision) + 3; ; )
    if (l = r, s = l.times(l).times(l), u = s.plus(c), r = Ge(u.plus(c).times(l), u.plus(s), i + 2, 1), bn(l.d).slice(0, i) === (o = bn(r.d)).slice(0, i))
      if (o = o.slice(i - 3, i + 1), o == "9999" || !t && o == "4999") {
        if (!t && (we(l, e + 1, 0), l.times(l).times(l).eq(c))) {
          r = l;
          break;
        }
        i += 4, t = 1;
      } else {
        (!+o || !+o.slice(1) && o.charAt(0) == "5") && (we(r, e + 1, 1), n = !r.times(r).times(r).eq(c));
        break;
      }
  return Te = !0, we(r, e, d.rounding, n);
};
J.decimalPlaces = J.dp = function() {
  var e, n = this.d, o = NaN;
  if (n) {
    if (e = n.length - 1, o = (e - $n(this.e / Pe)) * Pe, e = n[e], e) for (; e % 10 == 0; e /= 10) o--;
    o < 0 && (o = 0);
  }
  return o;
};
J.dividedBy = J.div = function(e) {
  return Ge(this, new this.constructor(e));
};
J.dividedToIntegerBy = J.divToInt = function(e) {
  var n = this, o = n.constructor;
  return we(Ge(n, new o(e), 0, 1, 1), o.precision, o.rounding);
};
J.equals = J.eq = function(e) {
  return this.cmp(e) === 0;
};
J.floor = function() {
  return we(new this.constructor(this), this.e + 1, 3);
};
J.greaterThan = J.gt = function(e) {
  return this.cmp(e) > 0;
};
J.greaterThanOrEqualTo = J.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
J.hyperbolicCosine = J.cosh = function() {
  var e, n, o, r, t, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite()) return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero()) return l;
  o = i.precision, r = i.rounding, i.precision = o + Math.max(a.e, a.sd()) + 4, i.rounding = 1, t = a.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Ba(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = dr(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, c = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(c.minus(s.times(c))));
  return we(a, i.precision = o, i.rounding = r, !0);
};
J.hyperbolicSine = J.sinh = function() {
  var e, n, o, r, t = this, a = t.constructor;
  if (!t.isFinite() || t.isZero()) return new a(t);
  if (n = a.precision, o = a.rounding, a.precision = n + Math.max(t.e, t.sd()) + 4, a.rounding = 1, r = t.d.length, r < 3)
    t = dr(a, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, t = t.times(1 / Ba(5, e)), t = dr(a, 2, t, t, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = t.times(t), t = t.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = o, we(t, n, o, !0);
};
J.hyperbolicTangent = J.tanh = function() {
  var e, n, o = this, r = o.constructor;
  return o.isFinite() ? o.isZero() ? new r(o) : (e = r.precision, n = r.rounding, r.precision = e + 7, r.rounding = 1, Ge(o.sinh(), o.cosh(), r.precision = e, r.rounding = n)) : new r(o.s);
};
J.inverseCosine = J.acos = function() {
  var e, n = this, o = n.constructor, r = n.abs().cmp(1), t = o.precision, a = o.rounding;
  return r !== -1 ? r === 0 ? n.isNeg() ? Gn(o, t, a) : new o(0) : new o(NaN) : n.isZero() ? Gn(o, t + 4, a).times(0.5) : (o.precision = t + 6, o.rounding = 1, n = n.asin(), e = Gn(o, t + 4, a).times(0.5), o.precision = t, o.rounding = a, e.minus(n));
};
J.inverseHyperbolicCosine = J.acosh = function() {
  var e, n, o = this, r = o.constructor;
  return o.lte(1) ? new r(o.eq(1) ? 0 : NaN) : o.isFinite() ? (e = r.precision, n = r.rounding, r.precision = e + Math.max(Math.abs(o.e), o.sd()) + 4, r.rounding = 1, Te = !1, o = o.times(o).minus(1).sqrt().plus(o), Te = !0, r.precision = e, r.rounding = n, o.ln()) : new r(o);
};
J.inverseHyperbolicSine = J.asinh = function() {
  var e, n, o = this, r = o.constructor;
  return !o.isFinite() || o.isZero() ? new r(o) : (e = r.precision, n = r.rounding, r.precision = e + 2 * Math.max(Math.abs(o.e), o.sd()) + 6, r.rounding = 1, Te = !1, o = o.times(o).plus(1).sqrt().plus(o), Te = !0, r.precision = e, r.rounding = n, o.ln());
};
J.inverseHyperbolicTangent = J.atanh = function() {
  var e, n, o, r, t = this, a = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new a(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = a.precision, n = a.rounding, r = t.sd(), Math.max(r, e) < 2 * -t.e - 1 ? we(new a(t), e, n, !0) : (a.precision = o = r - t.e, t = Ge(t.plus(1), new a(1).minus(t), o + e, 1), a.precision = e + 4, a.rounding = 1, t = t.ln(), a.precision = e, a.rounding = n, t.times(0.5))) : new a(NaN);
};
J.inverseSine = J.asin = function() {
  var e, n, o, r, t = this, a = t.constructor;
  return t.isZero() ? new a(t) : (n = t.abs().cmp(1), o = a.precision, r = a.rounding, n !== -1 ? n === 0 ? (e = Gn(a, o + 4, r).times(0.5), e.s = t.s, e) : new a(NaN) : (a.precision = o + 6, a.rounding = 1, t = t.div(new a(1).minus(t.times(t)).sqrt().plus(1)).atan(), a.precision = o, a.rounding = r, t.times(2)));
};
J.inverseTangent = J.atan = function() {
  var e, n, o, r, t, a, i, l, s, u = this, c = u.constructor, d = c.precision, f = c.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new c(u);
    if (u.abs().eq(1) && d + 4 <= dl)
      return i = Gn(c, d + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s) return new c(NaN);
    if (d + 4 <= dl)
      return i = Gn(c, d + 4, f).times(0.5), i.s = u.s, i;
  }
  for (c.precision = l = d + 10, c.rounding = 1, o = Math.min(28, l / Pe + 2 | 0), e = o; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (Te = !1, n = Math.ceil(l / Pe), r = 1, s = u.times(u), i = new c(u), t = u; e !== -1; )
    if (t = t.times(s), a = i.minus(t.div(r += 2)), t = t.times(s), i = a.plus(t.div(r += 2)), i.d[n] !== void 0) for (e = n; i.d[e] === a.d[e] && e--; ) ;
  return o && (i = i.times(2 << o - 1)), Te = !0, we(i, c.precision = d, c.rounding = f, !0);
};
J.isFinite = function() {
  return !!this.d;
};
J.isInteger = J.isInt = function() {
  return !!this.d && $n(this.e / Pe) > this.d.length - 2;
};
J.isNaN = function() {
  return !this.s;
};
J.isNegative = J.isNeg = function() {
  return this.s < 0;
};
J.isPositive = J.isPos = function() {
  return this.s > 0;
};
J.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
J.lessThan = J.lt = function(e) {
  return this.cmp(e) < 0;
};
J.lessThanOrEqualTo = J.lte = function(e) {
  return this.cmp(e) < 1;
};
J.logarithm = J.log = function(e) {
  var n, o, r, t, a, i, l, s, u = this, c = u.constructor, d = c.precision, f = c.rounding, v = 5;
  if (e == null)
    e = new c(10), n = !0;
  else {
    if (e = new c(e), o = e.d, e.s < 0 || !o || !o[0] || e.eq(1)) return new c(NaN);
    n = e.eq(10);
  }
  if (o = u.d, u.s < 0 || !o || !o[0] || u.eq(1))
    return new c(o && !o[0] ? -1 / 0 : u.s != 1 ? NaN : o ? 0 : 1 / 0);
  if (n)
    if (o.length > 1)
      a = !0;
    else {
      for (t = o[0]; t % 10 === 0; ) t /= 10;
      a = t !== 1;
    }
  if (Te = !1, l = d + v, i = ko(u, l), r = n ? Nt(c, l + 10) : ko(e, l), s = Ge(i, r, l, 1), Ur(s.d, t = d, f))
    do
      if (l += 10, i = ko(u, l), r = n ? Nt(c, l + 10) : ko(e, l), s = Ge(i, r, l, 1), !a) {
        +bn(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = we(s, d + 1, 0));
        break;
      }
    while (Ur(s.d, t += 10, f));
  return Te = !0, we(s, d, f);
};
J.minus = J.sub = function(e) {
  var n, o, r, t, a, i, l, s, u, c, d, f, v = this, g = v.constructor;
  if (e = new g(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new g(NaN) : v.d ? e.s = -e.s : e = new g(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s)
    return e.s = -e.s, v.plus(e);
  if (u = v.d, f = e.d, l = g.precision, s = g.rounding, !u[0] || !f[0]) {
    if (f[0]) e.s = -e.s;
    else if (u[0]) e = new g(v);
    else return new g(s === 3 ? -0 : 0);
    return Te ? we(e, l, s) : e;
  }
  if (o = $n(e.e / Pe), c = $n(v.e / Pe), u = u.slice(), a = c - o, a) {
    for (d = a < 0, d ? (n = u, a = -a, i = f.length) : (n = f, o = c, i = u.length), r = Math.max(Math.ceil(l / Pe), i) + 2, a > r && (a = r, n.length = 1), n.reverse(), r = a; r--; ) n.push(0);
    n.reverse();
  } else {
    for (r = u.length, i = f.length, d = r < i, d && (i = r), r = 0; r < i; r++)
      if (u[r] != f[r]) {
        d = u[r] < f[r];
        break;
      }
    a = 0;
  }
  for (d && (n = u, u = f, f = n, e.s = -e.s), i = u.length, r = f.length - i; r > 0; --r) u[i++] = 0;
  for (r = f.length; r > a; ) {
    if (u[--r] < f[r]) {
      for (t = r; t && u[--t] === 0; ) u[t] = Jn - 1;
      --u[t], u[r] += Jn;
    }
    u[r] -= f[r];
  }
  for (; u[--i] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --o;
  return u[0] ? (e.d = u, e.e = Ea(u, o), Te ? we(e, l, s) : e) : new g(s === 3 ? -0 : 0);
};
J.modulo = J.mod = function(e) {
  var n, o = this, r = o.constructor;
  return e = new r(e), !o.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || o.d && !o.d[0] ? we(new r(o), r.precision, r.rounding) : (Te = !1, r.modulo == 9 ? (n = Ge(o, e.abs(), 0, 3, 1), n.s *= e.s) : n = Ge(o, e, 0, r.modulo, 1), n = n.times(e), Te = !0, o.minus(n));
};
J.naturalExponential = J.exp = function() {
  return fl(this);
};
J.naturalLogarithm = J.ln = function() {
  return ko(this);
};
J.negated = J.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, we(e);
};
J.plus = J.add = function(e) {
  var n, o, r, t, a, i, l, s, u, c, d = this, f = d.constructor;
  if (e = new f(e), !d.d || !e.d)
    return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
  if (d.s != e.s)
    return e.s = -e.s, d.minus(e);
  if (u = d.d, c = e.d, l = f.precision, s = f.rounding, !u[0] || !c[0])
    return c[0] || (e = new f(d)), Te ? we(e, l, s) : e;
  if (a = $n(d.e / Pe), r = $n(e.e / Pe), u = u.slice(), t = a - r, t) {
    for (t < 0 ? (o = u, t = -t, i = c.length) : (o = c, r = a, i = u.length), a = Math.ceil(l / Pe), i = a > i ? a + 1 : i + 1, t > i && (t = i, o.length = 1), o.reverse(); t--; ) o.push(0);
    o.reverse();
  }
  for (i = u.length, t = c.length, i - t < 0 && (t = i, o = c, c = u, u = o), n = 0; t; )
    n = (u[--t] = u[t] + c[t] + n) / Jn | 0, u[t] %= Jn;
  for (n && (u.unshift(n), ++r), i = u.length; u[--i] == 0; ) u.pop();
  return e.d = u, e.e = Ea(u, r), Te ? we(e, l, s) : e;
};
J.precision = J.sd = function(e) {
  var n, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Bo + e);
  return o.d ? (n = Wp(o.d), e && o.e + 1 > n && (n = o.e + 1)) : n = NaN, n;
};
J.round = function() {
  var e = this, n = e.constructor;
  return we(new n(e), e.e + 1, n.rounding);
};
J.sine = J.sin = function() {
  var e, n, o = this, r = o.constructor;
  return o.isFinite() ? o.isZero() ? new r(o) : (e = r.precision, n = r.rounding, r.precision = e + Math.max(o.e, o.sd()) + Pe, r.rounding = 1, o = b$(r, Gp(r, o)), r.precision = e, r.rounding = n, we(so > 2 ? o.neg() : o, e, n, !0)) : new r(NaN);
};
J.squareRoot = J.sqrt = function() {
  var e, n, o, r, t, a, i = this, l = i.d, s = i.e, u = i.s, c = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new c(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (Te = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = bn(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = $n((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), r = new c(n)) : r = new c(u.toString()), o = (s = c.precision) + 3; ; )
    if (a = r, r = a.plus(Ge(i, a, o + 2, 1)).times(0.5), bn(a.d).slice(0, o) === (n = bn(r.d)).slice(0, o))
      if (n = n.slice(o - 3, o + 1), n == "9999" || !t && n == "4999") {
        if (!t && (we(a, s + 1, 0), a.times(a).eq(i))) {
          r = a;
          break;
        }
        o += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (we(r, s + 1, 1), e = !r.times(r).eq(i));
        break;
      }
  return Te = !0, we(r, s, c.rounding, e);
};
J.tangent = J.tan = function() {
  var e, n, o = this, r = o.constructor;
  return o.isFinite() ? o.isZero() ? new r(o) : (e = r.precision, n = r.rounding, r.precision = e + 10, r.rounding = 1, o = o.sin(), o.s = 1, o = Ge(o, new r(1).minus(o.times(o)).sqrt(), e + 10, 0), r.precision = e, r.rounding = n, we(so == 2 || so == 4 ? o.neg() : o, e, n, !0)) : new r(NaN);
};
J.times = J.mul = function(e) {
  var n, o, r, t, a, i, l, s, u, c = this, d = c.constructor, f = c.d, v = (e = new d(e)).d;
  if (e.s *= c.s, !f || !f[0] || !v || !v[0])
    return new d(!e.s || f && !f[0] && !v || v && !v[0] && !f ? NaN : !f || !v ? e.s / 0 : e.s * 0);
  for (o = $n(c.e / Pe) + $n(e.e / Pe), s = f.length, u = v.length, s < u && (a = f, f = v, v = a, i = s, s = u, u = i), a = [], i = s + u, r = i; r--; ) a.push(0);
  for (r = u; --r >= 0; ) {
    for (n = 0, t = s + r; t > r; )
      l = a[t] + v[r] * f[t - r - 1] + n, a[t--] = l % Jn | 0, n = l / Jn | 0;
    a[t] = (a[t] + n) % Jn | 0;
  }
  for (; !a[--i]; ) a.pop();
  return n ? ++o : a.shift(), e.d = a, e.e = Ea(a, o), Te ? we(e, d.precision, d.rounding) : e;
};
J.toBinary = function(e, n) {
  return Bs(this, 2, e, n);
};
J.toDecimalPlaces = J.toDP = function(e, n) {
  var o = this, r = o.constructor;
  return o = new r(o), e === void 0 ? o : (Bn(e, 0, No), n === void 0 ? n = r.rounding : Bn(n, 0, 8), we(o, e + o.e + 1, n));
};
J.toExponential = function(e, n) {
  var o, r = this, t = r.constructor;
  return e === void 0 ? o = eo(r, !0) : (Bn(e, 0, No), n === void 0 ? n = t.rounding : Bn(n, 0, 8), r = we(new t(r), e + 1, n), o = eo(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + o : o;
};
J.toFixed = function(e, n) {
  var o, r, t = this, a = t.constructor;
  return e === void 0 ? o = eo(t) : (Bn(e, 0, No), n === void 0 ? n = a.rounding : Bn(n, 0, 8), r = we(new a(t), e + t.e + 1, n), o = eo(r, !1, e + r.e + 1)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
J.toFraction = function(e) {
  var n, o, r, t, a, i, l, s, u, c, d, f, v = this, g = v.d, m = v.constructor;
  if (!g) return new m(v);
  if (u = o = new m(1), r = s = new m(0), n = new m(r), a = n.e = Wp(g) - v.e - 1, i = a % Pe, n.d[0] = dn(10, i < 0 ? Pe + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new m(e), !l.isInt() || l.lt(u)) throw Error(Bo + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Te = !1, l = new m(bn(g)), c = m.precision, m.precision = a = g.length * Pe * 2; d = Ge(l, n, 0, 1, 1), t = o.plus(d.times(r)), t.cmp(e) != 1; )
    o = r, r = t, t = u, u = s.plus(d.times(t)), s = t, t = n, n = l.minus(d.times(t)), l = t;
  return t = Ge(e.minus(o), r, 0, 1, 1), s = s.plus(t.times(u)), o = o.plus(t.times(r)), s.s = u.s = v.s, f = Ge(u, r, a, 1).minus(v).abs().cmp(Ge(s, o, a, 1).minus(v).abs()) < 1 ? [u, r] : [s, o], m.precision = c, Te = !0, f;
};
J.toHexadecimal = J.toHex = function(e, n) {
  return Bs(this, 16, e, n);
};
J.toNearest = function(e, n) {
  var o = this, r = o.constructor;
  if (o = new r(o), e == null) {
    if (!o.d) return o;
    e = new r(1), n = r.rounding;
  } else {
    if (e = new r(e), n === void 0 ? n = r.rounding : Bn(n, 0, 8), !o.d) return e.s ? o : e;
    if (!e.d)
      return e.s && (e.s = o.s), e;
  }
  return e.d[0] ? (Te = !1, o = Ge(o, e, 0, n, 1).times(e), Te = !0, we(o)) : (e.s = o.s, o = e), o;
};
J.toNumber = function() {
  return +this;
};
J.toOctal = function(e, n) {
  return Bs(this, 8, e, n);
};
J.toPower = J.pow = function(e) {
  var n, o, r, t, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new s(dn(+l, u));
  if (l = new s(l), l.eq(1)) return l;
  if (r = s.precision, a = s.rounding, e.eq(1)) return we(l, r, a);
  if (n = $n(e.e / Pe), n >= e.d.length - 1 && (o = u < 0 ? -u : u) <= v$)
    return t = Kp(s, l, o, r), e.s < 0 ? new s(1).div(t) : we(t, r, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1) return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return o = dn(+l, u), n = o == 0 || !isFinite(o) ? $n(u * (Math.log("0." + bn(l.d)) / Math.LN10 + l.e + 1)) : new s(o + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Te = !1, s.rounding = l.s = 1, o = Math.min(12, (n + "").length), t = fl(e.times(ko(l, r + o)), r), t.d && (t = we(t, r + 5, 1), Ur(t.d, r, a) && (n = r + 10, t = we(fl(e.times(ko(l, n + o)), n), n + 5, 1), +bn(t.d).slice(r + 1, r + 15) + 1 == 1e14 && (t = we(t, r + 1, 0)))), t.s = i, Te = !0, s.rounding = a, we(t, r, a));
};
J.toPrecision = function(e, n) {
  var o, r = this, t = r.constructor;
  return e === void 0 ? o = eo(r, r.e <= t.toExpNeg || r.e >= t.toExpPos) : (Bn(e, 1, No), n === void 0 ? n = t.rounding : Bn(n, 0, 8), r = we(new t(r), e, n), o = eo(r, e <= r.e || r.e <= t.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + o : o;
};
J.toSignificantDigits = J.toSD = function(e, n) {
  var o = this, r = o.constructor;
  return e === void 0 ? (e = r.precision, n = r.rounding) : (Bn(e, 1, No), n === void 0 ? n = r.rounding : Bn(n, 0, 8)), we(new r(o), e, n);
};
J.toString = function() {
  var e = this, n = e.constructor, o = eo(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + o : o;
};
J.truncated = J.trunc = function() {
  return we(new this.constructor(this), this.e + 1, 1);
};
J.valueOf = J.toJSON = function() {
  var e = this, n = e.constructor, o = eo(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + o : o;
};
function bn(e) {
  var n, o, r, t = e.length - 1, a = "", i = e[0];
  if (t > 0) {
    for (a += i, n = 1; n < t; n++)
      r = e[n] + "", o = Pe - r.length, o && (a += vo(o)), a += r;
    i = e[n], r = i + "", o = Pe - r.length, o && (a += vo(o));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; ) i /= 10;
  return a + i;
}
function Bn(e, n, o) {
  if (e !== ~~e || e < n || e > o)
    throw Error(Bo + e);
}
function Ur(e, n, o, r) {
  var t, a, i, l;
  for (a = e[0]; a >= 10; a /= 10) --n;
  return --n < 0 ? (n += Pe, t = 0) : (t = Math.ceil((n + 1) / Pe), n %= Pe), a = dn(10, Pe - n), l = e[t] % a | 0, r == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = o < 4 && l == 99999 || o > 3 && l == 49999 || l == 5e4 || l == 0) : i = (o < 4 && l + 1 == a || o > 3 && l + 1 == a / 2) && (e[t + 1] / a / 100 | 0) == dn(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[t + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (r || o < 4) && l == 9999 || !r && o > 3 && l == 4999) : i = ((r || o < 4) && l + 1 == a || !r && o > 3 && l + 1 == a / 2) && (e[t + 1] / a / 1e3 | 0) == dn(10, n - 3) - 1, i;
}
function $t(e, n, o) {
  for (var r, t = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = t.length; a--; ) t[a] *= n;
    for (t[0] += ul.indexOf(e.charAt(i++)), r = 0; r < t.length; r++)
      t[r] > o - 1 && (t[r + 1] === void 0 && (t[r + 1] = 0), t[r + 1] += t[r] / o | 0, t[r] %= o);
  }
  return t.reverse();
}
function h$(e, n) {
  var o, r, t;
  if (n.isZero()) return n;
  r = n.d.length, r < 32 ? (o = Math.ceil(r / 3), t = (1 / Ba(4, o)).toString()) : (o = 16, t = "2.3283064365386962890625e-10"), e.precision += o, n = dr(e, 1, n.times(t), new e(1));
  for (var a = o; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= o, n;
}
var Ge = /* @__PURE__ */ function() {
  function e(r, t, a) {
    var i, l = 0, s = r.length;
    for (r = r.slice(); s--; )
      i = r[s] * t + l, r[s] = i % a | 0, l = i / a | 0;
    return l && r.unshift(l), r;
  }
  function n(r, t, a, i) {
    var l, s;
    if (a != i)
      s = a > i ? 1 : -1;
    else
      for (l = s = 0; l < a; l++)
        if (r[l] != t[l]) {
          s = r[l] > t[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function o(r, t, a, i) {
    for (var l = 0; a--; )
      r[a] -= l, l = r[a] < t[a] ? 1 : 0, r[a] = l * i + r[a] - t[a];
    for (; !r[0] && r.length > 1; ) r.shift();
  }
  return function(r, t, a, i, l, s) {
    var u, c, d, f, v, g, m, k, w, b, y, S, z, O, D, T, E, M, R, W, H = r.constructor, F = r.s == t.s ? 1 : -1, Y = r.d, j = t.d;
    if (!Y || !Y[0] || !j || !j[0])
      return new H(
        // Return NaN if either NaN, or both Infinity or 0.
        !r.s || !t.s || (Y ? j && Y[0] == j[0] : !j) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          Y && Y[0] == 0 || !j ? F * 0 : F / 0
        )
      );
    for (s ? (v = 1, c = r.e - t.e) : (s = Jn, v = Pe, c = $n(r.e / v) - $n(t.e / v)), R = j.length, E = Y.length, w = new H(F), b = w.d = [], d = 0; j[d] == (Y[d] || 0); d++) ;
    if (j[d] > (Y[d] || 0) && c--, a == null ? (O = a = H.precision, i = H.rounding) : l ? O = a + (r.e - t.e) + 1 : O = a, O < 0)
      b.push(1), g = !0;
    else {
      if (O = O / v + 2 | 0, d = 0, R == 1) {
        for (f = 0, j = j[0], O++; (d < E || f) && O--; d++)
          D = f * s + (Y[d] || 0), b[d] = D / j | 0, f = D % j | 0;
        g = f || d < E;
      } else {
        for (f = s / (j[0] + 1) | 0, f > 1 && (j = e(j, f, s), Y = e(Y, f, s), R = j.length, E = Y.length), T = R, y = Y.slice(0, R), S = y.length; S < R; ) y[S++] = 0;
        W = j.slice(), W.unshift(0), M = j[0], j[1] >= s / 2 && ++M;
        do
          f = 0, u = n(j, y, R, S), u < 0 ? (z = y[0], R != S && (z = z * s + (y[1] || 0)), f = z / M | 0, f > 1 ? (f >= s && (f = s - 1), m = e(j, f, s), k = m.length, S = y.length, u = n(m, y, k, S), u == 1 && (f--, o(m, R < k ? W : j, k, s))) : (f == 0 && (u = f = 1), m = j.slice()), k = m.length, k < S && m.unshift(0), o(y, m, S, s), u == -1 && (S = y.length, u = n(j, y, R, S), u < 1 && (f++, o(y, R < S ? W : j, S, s))), S = y.length) : u === 0 && (f++, y = [0]), b[d++] = f, u && y[0] ? y[S++] = Y[T] || 0 : (y = [Y[T]], S = 1);
        while ((T++ < E || y[0] !== void 0) && O--);
        g = y[0] !== void 0;
      }
      b[0] || b.shift();
    }
    if (v == 1)
      w.e = c, Fp = g;
    else {
      for (d = 1, f = b[0]; f >= 10; f /= 10) d++;
      w.e = d + c * v - 1, we(w, l ? a + w.e + 1 : a, i, g);
    }
    return w;
  };
}();
function we(e, n, o, r) {
  var t, a, i, l, s, u, c, d, f, v = e.constructor;
  e: if (n != null) {
    if (d = e.d, !d) return e;
    for (t = 1, l = d[0]; l >= 10; l /= 10) t++;
    if (a = n - t, a < 0)
      a += Pe, i = n, c = d[f = 0], s = c / dn(10, t - i - 1) % 10 | 0;
    else if (f = Math.ceil((a + 1) / Pe), l = d.length, f >= l)
      if (r) {
        for (; l++ <= f; ) d.push(0);
        c = s = 0, t = 1, a %= Pe, i = a - Pe + 1;
      } else
        break e;
    else {
      for (c = l = d[f], t = 1; l >= 10; l /= 10) t++;
      a %= Pe, i = a - Pe + t, s = i < 0 ? 0 : c / dn(10, t - i - 1) % 10 | 0;
    }
    if (r = r || n < 0 || d[f + 1] !== void 0 || (i < 0 ? c : c % dn(10, t - i - 1)), u = o < 4 ? (s || r) && (o == 0 || o == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (o == 4 || r || o == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (a > 0 ? i > 0 ? c / dn(10, t - i) : 0 : d[f - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !d[0])
      return d.length = 0, u ? (n -= e.e + 1, d[0] = dn(10, (Pe - n % Pe) % Pe), e.e = -n || 0) : d[0] = e.e = 0, e;
    if (a == 0 ? (d.length = f, l = 1, f--) : (d.length = f + 1, l = dn(10, Pe - a), d[f] = i > 0 ? (c / dn(10, t - i) % dn(10, i) | 0) * l : 0), u)
      for (; ; )
        if (f == 0) {
          for (a = 1, i = d[0]; i >= 10; i /= 10) a++;
          for (i = d[0] += l, l = 1; i >= 10; i /= 10) l++;
          a != l && (e.e++, d[0] == Jn && (d[0] = 1));
          break;
        } else {
          if (d[f] += l, d[f] != Jn) break;
          d[f--] = 0, l = 1;
        }
    for (a = d.length; d[--a] === 0; ) d.pop();
  }
  return Te && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e;
}
function eo(e, n, o) {
  if (!e.isFinite()) return Xp(e);
  var r, t = e.e, a = bn(e.d), i = a.length;
  return n ? (o && (r = o - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + vo(r) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (a = "0." + vo(-t - 1) + a, o && (r = o - i) > 0 && (a += vo(r))) : t >= i ? (a += vo(t + 1 - i), o && (r = o - t - 1) > 0 && (a = a + "." + vo(r))) : ((r = t + 1) < i && (a = a.slice(0, r) + "." + a.slice(r)), o && (r = o - i) > 0 && (t + 1 === i && (a += "."), a += vo(r))), a;
}
function Ea(e, n) {
  var o = e[0];
  for (n *= Pe; o >= 10; o /= 10) n++;
  return n;
}
function Nt(e, n, o) {
  if (n > m$)
    throw Te = !0, o && (e.precision = o), Error(Up);
  return we(new e(It), n, 1, !0);
}
function Gn(e, n, o) {
  if (n > dl) throw Error(Up);
  return we(new e(Mt), n, o, !0);
}
function Wp(e) {
  var n = e.length - 1, o = n * Pe + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10) o--;
    for (n = e[0]; n >= 10; n /= 10) o++;
  }
  return o;
}
function vo(e) {
  for (var n = ""; e--; ) n += "0";
  return n;
}
function Kp(e, n, o, r) {
  var t, a = new e(1), i = Math.ceil(r / Pe + 4);
  for (Te = !1; ; ) {
    if (o % 2 && (a = a.times(n), rc(a.d, i) && (t = !0)), o = $n(o / 2), o === 0) {
      o = a.d.length - 1, t && a.d[o] === 0 && ++a.d[o];
      break;
    }
    n = n.times(n), rc(n.d, i);
  }
  return Te = !0, a;
}
function oc(e) {
  return e.d[e.d.length - 1] & 1;
}
function qp(e, n, o) {
  for (var r, t = new e(n[0]), a = 0; ++a < n.length; )
    if (r = new e(n[a]), r.s)
      t[o](r) && (t = r);
    else {
      t = r;
      break;
    }
  return t;
}
function fl(e, n) {
  var o, r, t, a, i, l, s, u = 0, c = 0, d = 0, f = e.constructor, v = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (n == null ? (Te = !1, s = g) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), d += 5;
  for (r = Math.log(dn(2, d)) / Math.LN10 * 2 + 5 | 0, s += r, o = a = i = new f(1), f.precision = s; ; ) {
    if (a = we(a.times(e), s, 1), o = o.times(++c), l = i.plus(Ge(a, o, s, 1)), bn(l.d).slice(0, s) === bn(i.d).slice(0, s)) {
      for (t = d; t--; ) i = we(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Ur(i.d, s - r, v, u))
          f.precision = s += 10, o = a = l = new f(1), c = 0, u++;
        else
          return we(i, f.precision = g, v, Te = !0);
      else
        return f.precision = g, i;
    }
    i = l;
  }
}
function ko(e, n) {
  var o, r, t, a, i, l, s, u, c, d, f, v = 1, g = 10, m = e, k = m.d, w = m.constructor, b = w.rounding, y = w.precision;
  if (m.s < 0 || !k || !k[0] || !m.e && k[0] == 1 && k.length == 1)
    return new w(k && !k[0] ? -1 / 0 : m.s != 1 ? NaN : k ? 0 : m);
  if (n == null ? (Te = !1, c = y) : c = n, w.precision = c += g, o = bn(k), r = o.charAt(0), Math.abs(a = m.e) < 15e14) {
    for (; r < 7 && r != 1 || r == 1 && o.charAt(1) > 3; )
      m = m.times(e), o = bn(m.d), r = o.charAt(0), v++;
    a = m.e, r > 1 ? (m = new w("0." + o), a++) : m = new w(r + "." + o.slice(1));
  } else
    return u = Nt(w, c + 2, y).times(a + ""), m = ko(new w(r + "." + o.slice(1)), c - g).plus(u), w.precision = y, n == null ? we(m, y, b, Te = !0) : m;
  for (d = m, s = i = m = Ge(m.minus(1), m.plus(1), c, 1), f = we(m.times(m), c, 1), t = 3; ; ) {
    if (i = we(i.times(f), c, 1), u = s.plus(Ge(i, new w(t), c, 1)), bn(u.d).slice(0, c) === bn(s.d).slice(0, c))
      if (s = s.times(2), a !== 0 && (s = s.plus(Nt(w, c + 2, y).times(a + ""))), s = Ge(s, new w(v), c, 1), n == null)
        if (Ur(s.d, c - g, b, l))
          w.precision = c += g, u = i = m = Ge(d.minus(1), d.plus(1), c, 1), f = we(m.times(m), c, 1), t = l = 1;
        else
          return we(s, w.precision = y, b, Te = !0);
      else
        return w.precision = y, s;
    s = u, t += 2;
  }
}
function Xp(e) {
  return String(e.s * e.s / 0);
}
function pl(e, n) {
  var o, r, t;
  for ((o = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (r = n.search(/e/i)) > 0 ? (o < 0 && (o = r), o += +n.slice(r + 1), n = n.substring(0, r)) : o < 0 && (o = n.length), r = 0; n.charCodeAt(r) === 48; r++) ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t) ;
  if (n = n.slice(r, t), n) {
    if (t -= r, e.e = o = o - r - 1, e.d = [], r = (o + 1) % Pe, o < 0 && (r += Pe), r < t) {
      for (r && e.d.push(+n.slice(0, r)), t -= Pe; r < t; ) e.d.push(+n.slice(r, r += Pe));
      n = n.slice(r), r = Pe - n.length;
    } else
      r -= t;
    for (; r--; ) n += "0";
    e.d.push(+n), Te && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function g$(e, n) {
  var o, r, t, a, i, l, s, u, c;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), jp.test(n)) return pl(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (f$.test(n))
    o = 16, n = n.toLowerCase();
  else if (d$.test(n))
    o = 2;
  else if (p$.test(n))
    o = 8;
  else
    throw Error(Bo + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, r = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, t = Kp(r, new r(o), a, a * 2)), u = $t(n, o, Jn), c = u.length - 1, a = c; u[a] === 0; --a) u.pop();
  return a < 0 ? new r(e.s * 0) : (e.e = Ea(u, c), e.d = u, Te = !1, i && (e = Ge(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? dn(2, s) : $o.pow(2, s))), Te = !0, e);
}
function b$(e, n) {
  var o, r = n.d.length;
  if (r < 3)
    return n.isZero() ? n : dr(e, 2, n, n);
  o = 1.4 * Math.sqrt(r), o = o > 16 ? 16 : o | 0, n = n.times(1 / Ba(5, o)), n = dr(e, 2, n, n);
  for (var t, a = new e(5), i = new e(16), l = new e(20); o--; )
    t = n.times(n), n = n.times(a.plus(t.times(i.times(t).minus(l))));
  return n;
}
function dr(e, n, o, r, t) {
  var a, i, l, s, u = e.precision, c = Math.ceil(u / Pe);
  for (Te = !1, s = o.times(o), l = new e(r); ; ) {
    if (i = Ge(l.times(s), new e(n++ * n++), u, 1), l = t ? r.plus(i) : r.minus(i), r = Ge(i.times(s), new e(n++ * n++), u, 1), i = l.plus(r), i.d[c] !== void 0) {
      for (a = c; i.d[a] === l.d[a] && a--; ) ;
      if (a == -1) break;
    }
    a = l, l = r, r = i, i = a;
  }
  return Te = !0, i.d.length = c + 1, i;
}
function Ba(e, n) {
  for (var o = e; --n; ) o *= e;
  return o;
}
function Gp(e, n) {
  var o, r = n.s < 0, t = Gn(e, e.precision, 1), a = t.times(0.5);
  if (n = n.abs(), n.lte(a))
    return so = r ? 4 : 1, n;
  if (o = n.divToInt(t), o.isZero())
    so = r ? 3 : 2;
  else {
    if (n = n.minus(o.times(t)), n.lte(a))
      return so = oc(o) ? r ? 2 : 3 : r ? 4 : 1, n;
    so = oc(o) ? r ? 1 : 4 : r ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Bs(e, n, o, r) {
  var t, a, i, l, s, u, c, d, f, v = e.constructor, g = o !== void 0;
  if (g ? (Bn(o, 1, No), r === void 0 ? r = v.rounding : Bn(r, 0, 8)) : (o = v.precision, r = v.rounding), !e.isFinite())
    c = Xp(e);
  else {
    for (c = eo(e), i = c.indexOf("."), g ? (t = 2, n == 16 ? o = o * 4 - 3 : n == 8 && (o = o * 3 - 2)) : t = n, i >= 0 && (c = c.replace(".", ""), f = new v(1), f.e = c.length - i, f.d = $t(eo(f), 10, t), f.e = f.d.length), d = $t(c, 10, t), a = s = d.length; d[--s] == 0; ) d.pop();
    if (!d[0])
      c = g ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = d, e.e = a, e = Ge(e, f, o, r, 0, t), d = e.d, a = e.e, u = Fp), i = d[o], l = t / 2, u = u || d[o + 1] !== void 0, u = r < 4 ? (i !== void 0 || u) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : i > l || i === l && (r === 4 || u || r === 6 && d[o - 1] & 1 || r === (e.s < 0 ? 8 : 7)), d.length = o, u)
        for (; ++d[--o] > t - 1; )
          d[o] = 0, o || (++a, d.unshift(1));
      for (s = d.length; !d[s - 1]; --s) ;
      for (i = 0, c = ""; i < s; i++) c += ul.charAt(d[i]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++) c += "0";
            for (d = $t(c, t, n), s = d.length; !d[s - 1]; --s) ;
            for (i = 1, c = "1."; i < s; i++) c += ul.charAt(d[i]);
          } else
            c = c.charAt(0) + "." + c.slice(1);
        c = c + (a < 0 ? "p" : "p+") + a;
      } else if (a < 0) {
        for (; ++a; ) c = "0" + c;
        c = "0." + c;
      } else if (++a > s) for (a -= s; a--; ) c += "0";
      else a < s && (c = c.slice(0, a) + "." + c.slice(a));
    }
    c = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + c;
  }
  return e.s < 0 ? "-" + c : c;
}
function rc(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function y$(e) {
  return new this(e).abs();
}
function k$(e) {
  return new this(e).acos();
}
function $$(e) {
  return new this(e).acosh();
}
function w$(e, n) {
  return new this(e).plus(n);
}
function C$(e) {
  return new this(e).asin();
}
function S$(e) {
  return new this(e).asinh();
}
function P$(e) {
  return new this(e).atan();
}
function z$(e) {
  return new this(e).atanh();
}
function O$(e, n) {
  e = new this(e), n = new this(n);
  var o, r = this.precision, t = this.rounding, a = r + 4;
  return !e.s || !n.s ? o = new this(NaN) : !e.d && !n.d ? (o = Gn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), o.s = e.s) : !n.d || e.isZero() ? (o = n.s < 0 ? Gn(this, r, t) : new this(0), o.s = e.s) : !e.d || n.isZero() ? (o = Gn(this, a, 1).times(0.5), o.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, o = this.atan(Ge(e, n, a, 1)), n = Gn(this, a, 1), this.precision = r, this.rounding = t, o = e.s < 0 ? o.minus(n) : o.plus(n)) : o = this.atan(Ge(e, n, a, 1)), o;
}
function T$(e) {
  return new this(e).cbrt();
}
function E$(e) {
  return we(e = new this(e), e.e + 1, 2);
}
function B$(e, n, o) {
  return new this(e).clamp(n, o);
}
function D$(e) {
  if (!e || typeof e != "object") throw Error(Ta + "Object expected");
  var n, o, r, t = e.defaults === !0, a = [
    "precision",
    1,
    No,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Jo,
    0,
    "toExpPos",
    0,
    Jo,
    "maxE",
    0,
    Jo,
    "minE",
    -Jo,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (o = a[n], t && (this[o] = cl[o]), (r = e[o]) !== void 0)
      if ($n(r) === r && r >= a[n + 1] && r <= a[n + 2]) this[o] = r;
      else throw Error(Bo + o + ": " + r);
  if (o = "crypto", t && (this[o] = cl[o]), (r = e[o]) !== void 0)
    if (r === !0 || r === !1 || r === 0 || r === 1)
      if (r)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[o] = !0;
        else
          throw Error(Hp);
      else
        this[o] = !1;
    else
      throw Error(Bo + o + ": " + r);
  return this;
}
function I$(e) {
  return new this(e).cos();
}
function M$(e) {
  return new this(e).cosh();
}
function Zp(e) {
  var n, o, r;
  function t(a) {
    var i, l, s, u = this;
    if (!(u instanceof t)) return new t(a);
    if (u.constructor = t, tc(a)) {
      u.s = a.s, Te ? !a.d || a.e > t.maxE ? (u.e = NaN, u.d = null) : a.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (s = typeof a, s === "number") {
      if (a === 0) {
        u.s = 1 / a < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, u.s = -1) : u.s = 1, a === ~~a && a < 1e7) {
        for (i = 0, l = a; l >= 10; l /= 10) i++;
        Te ? i > t.maxE ? (u.e = NaN, u.d = null) : i < t.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [a]) : (u.e = i, u.d = [a]);
        return;
      } else if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return pl(u, a.toString());
    } else if (s !== "string")
      throw Error(Bo + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), jp.test(a) ? pl(u, a) : g$(u, a);
  }
  if (t.prototype = J, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = D$, t.clone = Zp, t.isDecimal = tc, t.abs = y$, t.acos = k$, t.acosh = $$, t.add = w$, t.asin = C$, t.asinh = S$, t.atan = P$, t.atanh = z$, t.atan2 = O$, t.cbrt = T$, t.ceil = E$, t.clamp = B$, t.cos = I$, t.cosh = M$, t.div = N$, t.exp = A$, t.floor = V$, t.hypot = R$, t.ln = L$, t.log = F$, t.log10 = H$, t.log2 = U$, t.max = Y$, t.min = j$, t.mod = W$, t.mul = K$, t.pow = q$, t.random = X$, t.round = G$, t.sign = Z$, t.sin = J$, t.sinh = Q$, t.sqrt = _$, t.sub = x$, t.sum = ew, t.tan = nw, t.tanh = ow, t.trunc = rw, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < r.length; ) e.hasOwnProperty(o = r[n++]) || (e[o] = this[o]);
  return t.config(e), t;
}
function N$(e, n) {
  return new this(e).div(n);
}
function A$(e) {
  return new this(e).exp();
}
function V$(e) {
  return we(e = new this(e), e.e + 1, 3);
}
function R$() {
  var e, n, o = new this(0);
  for (Te = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      o.d && (o = o.plus(n.times(n)));
    else {
      if (n.s)
        return Te = !0, new this(1 / 0);
      o = n;
    }
  return Te = !0, o.sqrt();
}
function tc(e) {
  return e instanceof $o || e && e.toStringTag === Yp || !1;
}
function L$(e) {
  return new this(e).ln();
}
function F$(e, n) {
  return new this(e).log(n);
}
function U$(e) {
  return new this(e).log(2);
}
function H$(e) {
  return new this(e).log(10);
}
function Y$() {
  return qp(this, arguments, "lt");
}
function j$() {
  return qp(this, arguments, "gt");
}
function W$(e, n) {
  return new this(e).mod(n);
}
function K$(e, n) {
  return new this(e).mul(n);
}
function q$(e, n) {
  return new this(e).pow(n);
}
function X$(e) {
  var n, o, r, t, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : Bn(e, 1, No), r = Math.ceil(e / Pe), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(r)); a < r; )
        t = n[a], t >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(r *= 4); a < r; )
        t = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(t % 1e7), a += 4);
      a = r / 4;
    } else
      throw Error(Hp);
  else for (; a < r; ) l[a++] = Math.random() * 1e7 | 0;
  for (r = l[--a], e %= Pe, r && e && (t = dn(10, Pe - e), l[a] = (r / t | 0) * t); l[a] === 0; a--) l.pop();
  if (a < 0)
    o = 0, l = [0];
  else {
    for (o = -1; l[0] === 0; o -= Pe) l.shift();
    for (r = 1, t = l[0]; t >= 10; t /= 10) r++;
    r < Pe && (o -= Pe - r);
  }
  return i.e = o, i.d = l, i;
}
function G$(e) {
  return we(e = new this(e), e.e + 1, this.rounding);
}
function Z$(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function J$(e) {
  return new this(e).sin();
}
function Q$(e) {
  return new this(e).sinh();
}
function _$(e) {
  return new this(e).sqrt();
}
function x$(e, n) {
  return new this(e).sub(n);
}
function ew() {
  var e = 0, n = arguments, o = new this(n[e]);
  for (Te = !1; o.s && ++e < n.length; ) o = o.plus(n[e]);
  return Te = !0, we(o, this.precision, this.rounding);
}
function nw(e) {
  return new this(e).tan();
}
function ow(e) {
  return new this(e).tanh();
}
function rw(e) {
  return we(e = new this(e), e.e + 1, 1);
}
J[Symbol.for("nodejs.util.inspect.custom")] = J.toString;
J[Symbol.toStringTag] = "Decimal";
var $o = J.constructor = Zp(cl);
It = new $o(It);
Mt = new $o(Mt);
const Jp = {
  modelValue: {
    type: Number,
    default: 0
  },
  min: [String, Number],
  max: [String, Number],
  step: {
    type: [String, Number],
    default: 1
  },
  color: String,
  inputWidth: [String, Number],
  inputTextSize: [String, Number],
  buttonSize: [String, Number],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  decimalLength: [String, Number],
  disabled: Boolean,
  readonly: Boolean,
  disableIncrement: Boolean,
  disableDecrement: Boolean,
  disableInput: Boolean,
  lazyChange: Boolean,
  incrementButton: {
    type: Boolean,
    default: !0
  },
  decrementButton: {
    type: Boolean,
    default: !0
  },
  press: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInputChange", "onLazyChange", "onIncrement", "onDecrement"]
  },
  rules: [Array, Function, Object],
  onBeforeChange: A(),
  onChange: A(),
  onIncrement: A(),
  onDecrement: A(),
  "onUpdate:modelValue": A()
}, ac = 100, ic = 600, { name: tw, n: aw, classes: iw } = ee("counter"), lw = ["inputmode", "readonly", "disabled"];
function sw(e, n) {
  const o = Q("var-icon"), r = Q("var-button"), t = Q("var-form-details");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      N(
        "div",
        Ue({
          class: e.classes(
            e.n("controller"),
            e.formatElevation(e.elevation, 2),
            [e.disabled || e.formDisabled, e.n("--disabled")],
            [e.errorMessage, e.n("--error")]
          ),
          style: { background: e.color }
        }, e.$attrs),
        [
          X(r, {
            class: p(
              e.classes(
                e.n("decrement-button"),
                [!e.decrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: q({
              width: e.toSizeUnit(e.buttonSize),
              height: e.toSizeUnit(e.buttonSize)
            }),
            round: "",
            "var-counter-cover": "",
            ripple: e.ripple && e.decrementButton && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly && !e.disableDecrement && !e.isMin,
            onClick: e.decrement,
            onTouchstart: e.pressDecrement,
            onTouchend: e.releaseDecrement,
            onTouchcancel: e.releaseDecrement
          }, {
            default: ce(() => [
              X(o, { name: "minus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]),
          Ae(N("input", {
            class: p(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
            style: q({
              width: e.toSizeUnit(e.inputWidth),
              fontSize: e.toSizeUnit(e.inputTextSize)
            }),
            inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
            readonly: e.readonly || e.formReadonly,
            disabled: e.disabled || e.formDisabled || e.disableInput,
            "onUpdate:modelValue": n[0] || (n[0] = (a) => e.inputValue = a),
            onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
          }, null, 46, lw), [
            [Oh, e.inputValue]
          ]),
          X(r, {
            class: p(
              e.classes(
                e.n("increment-button"),
                [!e.incrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: q({
              width: e.toSizeUnit(e.buttonSize),
              height: e.toSizeUnit(e.buttonSize)
            }),
            round: "",
            "var-counter-cover": "",
            ripple: e.ripple && e.incrementButton && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly && !e.disableIncrement && !e.isMax,
            onClick: e.increment,
            onTouchstart: e.pressIncrement,
            onTouchend: e.releaseIncrement,
            onTouchcancel: e.releaseIncrement
          }, {
            default: ce(() => [
              X(o, { name: "plus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"])
        ],
        16
        /* FULL_PROPS */
      ),
      X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Qp = x({
  name: tw,
  components: {
    VarButton: zn,
    VarIcon: Ze,
    VarFormDetails: Pn
  },
  directives: { Ripple: nn },
  inheritAttrs: !1,
  props: Jp,
  setup(e) {
    const n = $(""), { bindForm: o, form: r } = Fn(), {
      errorMessage: t,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = Ln(), { readonly: s, disabled: u } = r ?? {}, c = B(() => {
      const { max: j, modelValue: ae } = e;
      return j != null && U(ae) >= U(j);
    }), d = B(() => {
      const { min: j, modelValue: ae } = e;
      return j != null && U(ae) <= U(j);
    });
    let f, v, g, m;
    C(o, {
      reset: y,
      validate: w,
      resetValidation: l
    }), fe(
      () => e.modelValue,
      (j) => {
        F(S(String(j))), C(e.onChange, U(j));
      }
    ), F(S(String(e.modelValue)));
    function w() {
      return i(e.rules, e.modelValue);
    }
    function b(j) {
      He(() => {
        const { validateTrigger: ae, rules: _, modelValue: ve } = e;
        a(ae, j, _, ve);
      });
    }
    function y() {
      const { min: j } = e;
      C(e["onUpdate:modelValue"], j != null ? U(j) : 0), l();
    }
    function S(j) {
      const { decimalLength: ae, max: _, min: ve } = e;
      let ye = U(j);
      return _ != null && ye > U(_) && (ye = U(_)), ve != null && ye < U(ve) && (ye = U(ve)), j = String(ye), ae != null && (j = ye.toFixed(U(ae))), j;
    }
    function z(j) {
      const { lazyChange: ae, onBeforeChange: _ } = e, { value: ve } = j.target, ye = S(ve);
      ae ? C(_, U(ye), Y) : F(ye), b("onInputChange");
    }
    function O() {
      const {
        disabled: j,
        readonly: ae,
        disableDecrement: _,
        decrementButton: ve,
        lazyChange: ye,
        step: Ee,
        modelValue: L,
        onDecrement: Z,
        onBeforeChange: oe
      } = e;
      if (u != null && u.value || s != null && s.value || j || ae || _ || !ve || d.value)
        return;
      const me = new $o(U(L)).minus(new $o(U(Ee))).toString(), I = S(me), K = U(I);
      C(Z, K), ye ? C(oe, K, Y) : (F(I), b("onDecrement"));
    }
    function D() {
      const {
        disabled: j,
        readonly: ae,
        disableIncrement: _,
        incrementButton: ve,
        lazyChange: ye,
        step: Ee,
        modelValue: L,
        onIncrement: Z,
        onBeforeChange: oe
      } = e;
      if (u != null && u.value || s != null && s.value || j || ae || _ || !ve || c.value)
        return;
      const me = new $o(U(L)).plus(new $o(U(Ee))).toString(), I = S(me), K = U(I);
      C(Z, K), ye ? C(oe, K, Y) : (F(I), b("onIncrement"));
    }
    function T() {
      const { press: j, lazyChange: ae } = e;
      !j || ae || (m = window.setTimeout(() => {
        H();
      }, ic));
    }
    function E() {
      const { press: j, lazyChange: ae } = e;
      !j || ae || (g = window.setTimeout(() => {
        W();
      }, ic));
    }
    function M() {
      v && clearTimeout(v), m && clearTimeout(m);
    }
    function R() {
      f && clearTimeout(f), g && clearTimeout(g);
    }
    function W() {
      f = window.setTimeout(() => {
        D(), W();
      }, ac);
    }
    function H() {
      v = window.setTimeout(() => {
        O(), H();
      }, ac);
    }
    function F(j) {
      n.value = j;
      const ae = U(j);
      C(e["onUpdate:modelValue"], ae);
    }
    function Y(j) {
      F(S(String(j))), b("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: c,
      isMin: d,
      n: aw,
      classes: iw,
      formatElevation: fn,
      validate: w,
      reset: y,
      resetValidation: l,
      handleChange: z,
      decrement: O,
      increment: D,
      pressDecrement: T,
      pressIncrement: E,
      releaseDecrement: M,
      releaseIncrement: R,
      toSizeUnit: ze,
      toNumber: U
    };
  }
});
Qp.render = sw;
var Da = Qp;
re(Da);
se(Da, Jp);
const YT = Da;
var vl = Da, _p = 60, xp = _p * 60, ev = xp * 24, uw = ev * 7, fr = 1e3, Ei = _p * fr, lc = xp * fr, cw = ev * fr, dw = uw * fr, Ds = "millisecond", Qo = "second", _o = "minute", xo = "hour", mo = "day", wt = "week", Xn = "month", nv = "quarter", ho = "year", er = "date", fw = "YYYY-MM-DDTHH:mm:ssZ", sc = "Invalid Date", pw = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, vw = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const mw = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ml = function(n, o, r) {
  var t = String(n);
  return !t || t.length >= o ? n : "" + Array(o + 1 - t.length).join(r) + n;
}, hw = function(n) {
  var o = -n.utcOffset(), r = Math.abs(o), t = Math.floor(r / 60), a = r % 60;
  return (o <= 0 ? "+" : "-") + ml(t, 2, "0") + ":" + ml(a, 2, "0");
}, gw = function e(n, o) {
  if (n.date() < o.date()) return -e(o, n);
  var r = (o.year() - n.year()) * 12 + (o.month() - n.month()), t = n.clone().add(r, Xn), a = o - t < 0, i = n.clone().add(r + (a ? -1 : 1), Xn);
  return +(-(r + (o - t) / (a ? t - i : i - t)) || 0);
}, bw = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, yw = function(n) {
  var o = {
    M: Xn,
    y: ho,
    w: wt,
    d: mo,
    D: er,
    h: xo,
    m: _o,
    s: Qo,
    ms: Ds,
    Q: nv
  };
  return o[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, kw = function(n) {
  return n === void 0;
};
const $w = {
  s: ml,
  z: hw,
  m: gw,
  a: bw,
  p: yw,
  u: kw
};
var Or = "en", Lo = {};
Lo[Or] = mw;
var Is = function(n) {
  return n instanceof Ia;
}, At = function e(n, o, r) {
  var t;
  if (!n) return Or;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    Lo[a] && (t = a), o && (Lo[a] = o, t = a);
    var i = n.split("-");
    if (!t && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    Lo[l] = n, t = l;
  }
  return !r && t && (Or = t), t || !r && Or;
}, ie = function(n, o) {
  if (Is(n))
    return n.clone();
  var r = typeof o == "object" ? o : {};
  return r.date = n, r.args = arguments, new Ia(r);
}, ww = function(n, o) {
  return ie(n, {
    locale: o.$L,
    utc: o.$u,
    x: o.$x,
    $offset: o.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, qe = $w;
qe.l = At;
qe.i = Is;
qe.w = ww;
var Cw = function(n) {
  var o = n.date, r = n.utc;
  if (o === null) return /* @__PURE__ */ new Date(NaN);
  if (qe.u(o)) return /* @__PURE__ */ new Date();
  if (o instanceof Date) return new Date(o);
  if (typeof o == "string" && !/Z$/i.test(o)) {
    var t = o.match(pw);
    if (t) {
      var a = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return r ? new Date(Date.UTC(t[1], a, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], a, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(o);
}, Ia = /* @__PURE__ */ function() {
  function e(o) {
    this.$L = At(o.locale, null, !0), this.parse(o);
  }
  var n = e.prototype;
  return n.parse = function(r) {
    this.$d = Cw(r), this.$x = r.x || {}, this.init();
  }, n.init = function() {
    var r = this.$d;
    this.$y = r.getFullYear(), this.$M = r.getMonth(), this.$D = r.getDate(), this.$W = r.getDay(), this.$H = r.getHours(), this.$m = r.getMinutes(), this.$s = r.getSeconds(), this.$ms = r.getMilliseconds();
  }, n.$utils = function() {
    return qe;
  }, n.isValid = function() {
    return this.$d.toString() !== sc;
  }, n.isSame = function(r, t) {
    var a = ie(r);
    return this.startOf(t) <= a && a <= this.endOf(t);
  }, n.isAfter = function(r, t) {
    return ie(r) < this.startOf(t);
  }, n.isBefore = function(r, t) {
    return this.endOf(t) < ie(r);
  }, n.$g = function(r, t, a) {
    return qe.u(r) ? this[t] : this.set(a, r);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(r, t) {
    var a = this, i = qe.u(t) ? !0 : t, l = qe.p(r), s = function(w, b) {
      var y = qe.w(a.$u ? Date.UTC(a.$y, b, w) : new Date(a.$y, b, w), a);
      return i ? y : y.endOf(mo);
    }, u = function(w, b) {
      var y = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return qe.w(a.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? y : S).slice(b)
      ), a);
    }, c = this.$W, d = this.$M, f = this.$D, v = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case ho:
        return i ? s(1, 0) : s(31, 11);
      case Xn:
        return i ? s(1, d) : s(0, d + 1);
      case wt: {
        var g = this.$locale().weekStart || 0, m = (c < g ? c + 7 : c) - g;
        return s(i ? f - m : f + (6 - m), d);
      }
      case mo:
      case er:
        return u(v + "Hours", 0);
      case xo:
        return u(v + "Minutes", 1);
      case _o:
        return u(v + "Seconds", 2);
      case Qo:
        return u(v + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(r) {
    return this.startOf(r, !1);
  }, n.$set = function(r, t) {
    var a, i = qe.p(r), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[mo] = l + "Date", a[er] = l + "Date", a[Xn] = l + "Month", a[ho] = l + "FullYear", a[xo] = l + "Hours", a[_o] = l + "Minutes", a[Qo] = l + "Seconds", a[Ds] = l + "Milliseconds", a)[i], u = i === mo ? this.$D + (t - this.$W) : t;
    if (i === Xn || i === ho) {
      var c = this.clone().set(er, 1);
      c.$d[s](u), c.init(), this.$d = c.set(er, Math.min(this.$D, c.daysInMonth())).$d;
    } else s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(r, t) {
    return this.clone().$set(r, t);
  }, n.get = function(r) {
    return this[qe.p(r)]();
  }, n.add = function(r, t) {
    var a = this, i;
    r = Number(r);
    var l = qe.p(t), s = function(f) {
      var v = ie(a);
      return qe.w(v.date(v.date() + Math.round(f * r)), a);
    };
    if (l === Xn)
      return this.set(Xn, this.$M + r);
    if (l === ho)
      return this.set(ho, this.$y + r);
    if (l === mo)
      return s(1);
    if (l === wt)
      return s(7);
    var u = (i = {}, i[_o] = Ei, i[xo] = lc, i[Qo] = fr, i)[l] || 1, c = this.$d.getTime() + r * u;
    return qe.w(c, this);
  }, n.subtract = function(r, t) {
    return this.add(r * -1, t);
  }, n.format = function(r) {
    var t = this, a = this.$locale();
    if (!this.isValid()) return a.invalidDate || sc;
    var i = r || fw, l = qe.z(this), s = this.$H, u = this.$m, c = this.$M, d = a.weekdays, f = a.months, v = a.meridiem, g = function(y, S, z, O) {
      return y && (y[S] || y(t, i)) || z[S].slice(0, O);
    }, m = function(y) {
      return qe.s(s % 12 || 12, y, "0");
    }, k = v || function(b, y, S) {
      var z = b < 12 ? "AM" : "PM";
      return S ? z.toLowerCase() : z;
    }, w = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: c + 1,
      MM: qe.s(c + 1, 2, "0"),
      MMM: g(a.monthsShort, c, f, 3),
      MMMM: g(f, c),
      D: this.$D,
      DD: qe.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: g(a.weekdaysMin, this.$W, d, 2),
      ddd: g(a.weekdaysShort, this.$W, d, 3),
      dddd: d[this.$W],
      H: String(s),
      HH: qe.s(s, 2, "0"),
      h: m(1),
      hh: m(2),
      a: k(s, u, !0),
      A: k(s, u, !1),
      m: String(u),
      mm: qe.s(u, 2, "0"),
      s: String(this.$s),
      ss: qe.s(this.$s, 2, "0"),
      SSS: qe.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(vw, function(b, y) {
      return y || w[b] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(r, t, a) {
    var i, l = qe.p(t), s = ie(r), u = (s.utcOffset() - this.utcOffset()) * Ei, c = this - s, d = qe.m(this, s);
    return d = (i = {}, i[ho] = d / 12, i[Xn] = d, i[nv] = d / 3, i[wt] = (c - u) / dw, i[mo] = (c - u) / cw, i[xo] = c / lc, i[_o] = c / Ei, i[Qo] = c / fr, i)[l] || c, a ? d : qe.a(d);
  }, n.daysInMonth = function() {
    return this.endOf(Xn).$D;
  }, n.$locale = function() {
    return Lo[this.$L];
  }, n.locale = function(r, t) {
    if (!r) return this.$L;
    var a = this.clone(), i = At(r, t, !0);
    return i && (a.$L = i), a;
  }, n.clone = function() {
    return qe.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), ov = Ia.prototype;
ie.prototype = ov;
[["$ms", Ds], ["$s", Qo], ["$m", _o], ["$H", xo], ["$W", mo], ["$M", Xn], ["$y", ho], ["$D", er]].forEach(function(e) {
  ov[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ie.extend = function(e, n) {
  return e.$i || (e(n, Ia, ie), e.$i = !0), ie;
};
ie.locale = At;
ie.isDayjs = Is;
ie.unix = function(e) {
  return ie(e * 1e3);
};
ie.en = Lo[Or];
ie.Ls = Lo;
ie.p = {};
const rv = function(e, n) {
  n.prototype.isSameOrBefore = function(o, r) {
    return this.isSame(o, r) || this.isBefore(o, r);
  };
}, tv = function(e, n) {
  n.prototype.isSameOrAfter = function(o, r) {
    return this.isSame(o, r) || this.isAfter(o, r);
  };
}, Ct = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], Sr = ["0", "1", "2", "3", "4", "5", "6"], av = {
  modelValue: [String, Array],
  type: {
    type: String,
    default: "date"
  },
  hint: String,
  allowedDates: Function,
  color: String,
  titleColor: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  buttonElevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  firstDayOfWeek: {
    type: [String, Number],
    default: 0
  },
  min: String,
  max: String,
  showCurrent: {
    type: Boolean,
    default: !0
  },
  readonly: Boolean,
  multiple: Boolean,
  range: Boolean,
  touchable: {
    type: Boolean,
    default: !0
  },
  onPreview: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, { n: Sw } = ee("date-picker-header");
function Pw(e, n) {
  const o = Q("var-icon"), r = Q("var-button");
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      X(r, {
        class: p(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
      }, {
        default: ce(() => [
          X(o, { name: "chevron-left" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class", "disabled"]),
      N(
        "div",
        {
          class: p(e.n("value")),
          onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
        },
        [
          X(Qe, {
            name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (h(), P(
                "div",
                { key: e.showDate },
                le(e.showDate),
                1
                /* TEXT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      ),
      X(r, {
        class: p(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (t) => e.checkDate("next"))
      }, {
        default: ce(() => [
          X(o, { name: "chevron-right" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class", "disabled"])
    ],
    2
    /* CLASS */
  );
}
const iv = x({
  name: "PanelHeader",
  components: {
    VarButton: zn,
    VarIcon: Ze
  },
  props: {
    date: {
      type: Object,
      required: !0
    },
    type: {
      type: String,
      default: "date"
    },
    disabled: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-panel", "check-date"],
  setup(e, { emit: n }) {
    const o = $(!1), r = $(0), { t } = ao(), a = B(() => {
      var l;
      const { date: s, type: u } = e, { previewMonth: c, previewYear: d } = s;
      if (u === "year") return d;
      if (u === "month") return U(d) + r.value;
      const f = (l = (t || rn)("datePickerMonthDict")) == null ? void 0 : l[c].name;
      return (t || rn)("lang") === "zh-CN" ? `${d} ${f}` : `${f} ${d}`;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (n("check-date", l), o.value = l === "prev", r.value += l === "prev" ? -1 : 1);
    };
    return fe(
      () => e.date,
      () => {
        r.value = 0;
      }
    ), {
      n: Sw,
      reverse: o,
      showDate: a,
      checkDate: i
    };
  }
});
iv.render = Pw;
var Ms = iv, zw = Object.defineProperty, uc = Object.getOwnPropertySymbols, Ow = Object.prototype.hasOwnProperty, Tw = Object.prototype.propertyIsEnumerable, cc = (e, n, o) => n in e ? zw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ew = (e, n) => {
  for (var o in n || (n = {}))
    Ow.call(n, o) && cc(e, o, n[o]);
  if (uc)
    for (var o of uc(n))
      Tw.call(n, o) && cc(e, o, n[o]);
  return e;
};
ie.extend(rv);
ie.extend(tv);
const { n: ut, classes: Bw } = ee("month-picker"), { n: ct } = ee("date-picker");
function Dw(e, n) {
  const o = Q("panel-header"), r = Q("var-button");
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      N(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          X(o, {
            ref: "headerEl",
            type: "month",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickYear,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          X(Qe, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (h(), P("ul", { key: e.panelKey }, [
                (h(!0), P(
                  Ne,
                  null,
                  Ke(e.MONTH_LIST, (t) => (h(), P("li", { key: t }, [
                    X(r, Ue({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation,
                      ref_for: !0
                    }, Ew({}, e.buttonProps(t)), {
                      onClick: (a) => e.chooseMonth(t, a)
                    }), {
                      default: ce(() => [
                        Ie(
                          le(e.getMonthAbbr(t)),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["elevation", "onClick"])
                  ]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const lv = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: zn,
    PanelHeader: Ms
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickYear: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-month"],
  setup(e, { emit: n }) {
    const [o, r] = e.current.split("-"), t = $(!1), a = $(0), i = $(null), l = _e({
      left: !1,
      right: !1
    }), { t: s } = ao(), u = B(() => e.choose.chooseYear === e.preview.previewYear), c = B(() => e.preview.previewYear === o), d = (b) => {
      var y, S;
      return (S = (y = (s || rn)("datePickerMonthDict")) == null ? void 0 : y[b].abbr) != null ? S : "";
    }, f = (b) => {
      const {
        preview: { previewYear: y },
        componentProps: { min: S, max: z }
      } = e;
      let O = !0, D = !0;
      const T = `${y}-${b}`;
      return z && (O = ie(T).isSameOrBefore(ie(z), "month")), S && (D = ie(T).isSameOrAfter(ie(S), "month")), O && D;
    }, v = (b) => {
      const {
        choose: { chooseMonths: y, chooseDays: S, chooseRangeMonth: z },
        componentProps: { type: O, range: D }
      } = e;
      if (D) {
        if (!z.length) return !1;
        const T = ie(b).isSameOrBefore(ie(z[1]), "month"), E = ie(b).isSameOrAfter(ie(z[0]), "month");
        return T && E;
      }
      return O === "month" ? y.includes(b) : S.some((T) => T.includes(b));
    }, g = (b) => {
      const {
        choose: { chooseMonth: y },
        preview: { previewYear: S },
        componentProps: { allowedDates: z, color: O, multiple: D, range: T }
      } = e, E = `${S}-${b}`, M = () => T || D ? v(E) : y === b && u.value, W = f(b) ? z ? !z(E) : !1 : !0, H = () => W ? !0 : T || D ? !v(E) : !u.value || y !== b, F = () => c.value && r === b && e.componentProps.showCurrent ? (T || D || u.value) && W ? !0 : T || D ? !v(E) : u.value ? y !== r : !0 : !1, Y = () => W ? "" : F() ? O ?? "" : M() ? "" : `${ct()}-color-cover`, j = Y().startsWith(ct());
      return {
        outline: F(),
        text: H(),
        color: H() ? "" : O,
        textColor: j ? "" : Y(),
        [`${ct()}-color-cover`]: j,
        class: Bw(ut("button"), [W, ut("button--disabled")]),
        disabled: W
      };
    }, m = (b, y) => {
      y.currentTarget.classList.contains(ut("button--disabled")) || n("choose-month", b);
    }, k = (b) => {
      t.value = b === "prev", a.value += b === "prev" ? -1 : 1, n("check-preview", "year", b);
    }, w = (b) => {
      i.value.checkDate(b);
    };
    return fe(
      () => [e.preview.previewYear, e.componentProps.max, e.componentProps.min],
      ([b, y, S]) => {
        y && (l.right = !ie(`${U(b) + 1}`).isSameOrBefore(ie(y), "year")), S && (l.left = !ie(`${U(b) - 1}`).isSameOrAfter(ie(S), "year"));
      },
      { immediate: !0 }
    ), {
      n: ut,
      nDate: ct,
      t: rn,
      MONTH_LIST: Ct,
      headerEl: i,
      reverse: t,
      panelKey: a,
      panelBtnDisabled: l,
      forwardRef: w,
      buttonProps: g,
      getMonthAbbr: d,
      chooseMonth: m,
      checkDate: k
    };
  }
});
lv.render = Dw;
var Iw = lv;
const Tr = {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 10
  },
  cssMode: Boolean,
  disabled: Boolean,
  onScroll: A()
};
var dc = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: Mw, n: Nw, classes: Aw } = ee("sticky");
function Vw(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: q({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [
      N(
        "div",
        {
          class: p(e.n("wrapper")),
          ref: "wrapperEl",
          style: q({
            zIndex: e.toNumber(e.zIndex),
            position: e.enableFixedMode ? "fixed" : void 0,
            width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
            height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
            left: e.enableFixedMode ? e.fixedLeft : void 0,
            top: e.enableFixedMode ? e.fixedTop : void 0
          })
        },
        [
          V(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const sv = x({
  name: Mw,
  props: Tr,
  setup(e) {
    const n = $(null), o = $(null), r = $(!1), t = $("0px"), a = $("0px"), i = $("auto"), l = $("auto"), s = $("auto"), u = $("auto"), c = B(() => !e.disabled && e.cssMode), d = B(() => !e.disabled && !e.cssMode && r.value), f = B(() => xe(e.offsetTop));
    let v;
    fe(() => e.disabled, b), mn(() => dc(this, null, function* () {
      yield kn(), m(), k();
    })), Zr(w), to(b), je(() => window, "scroll", k);
    function g() {
      const { cssMode: y, disabled: S } = e;
      if (S)
        return;
      let z = 0;
      if (v && v !== window) {
        const { top: R } = an(v);
        z = R;
      }
      const O = o.value, D = n.value, { top: T, left: E } = an(D), M = T - z;
      return M <= f.value ? (y || (i.value = `${D.offsetWidth}px`, l.value = `${D.offsetHeight}px`, t.value = `${z + f.value}px`, a.value = `${E}px`, s.value = `${O.offsetWidth}px`, u.value = `${O.offsetHeight}px`, r.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (r.value = !1, {
        offsetTop: M,
        isFixed: !1
      });
    }
    function m() {
      v = To(n.value), v !== window && v.addEventListener("scroll", k);
    }
    function k() {
      const y = g();
      y && C(e.onScroll, y.offsetTop, y.isFixed);
    }
    function w() {
      !v || v === window || v.removeEventListener("scroll", k);
    }
    function b() {
      return dc(this, null, function* () {
        r.value = !1, yield nr(), g();
      });
    }
    return {
      stickyEl: n,
      wrapperEl: o,
      isFixed: r,
      offsetTop: f,
      fixedTop: t,
      fixedLeft: a,
      fixedWidth: i,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: c,
      enableFixedMode: d,
      n: Nw,
      classes: Aw,
      resize: b,
      toNumber: U
    };
  }
});
sv.render = Vw;
var Ma = sv;
re(Ma);
se(Ma, Tr);
const jT = Ma;
var pr = Ma, Rw = Object.defineProperty, fc = Object.getOwnPropertySymbols, Lw = Object.prototype.hasOwnProperty, Fw = Object.prototype.propertyIsEnumerable, pc = (e, n, o) => n in e ? Rw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Uw = (e, n) => {
  for (var o in n || (n = {}))
    Lw.call(n, o) && pc(e, o, n[o]);
  if (fc)
    for (var o of fc(n))
      Fw.call(n, o) && pc(e, o, n[o]);
  return e;
};
const { n: dt, classes: vc } = ee("year-picker"), { n: ft } = ee("date-picker");
function Hw(e, n) {
  const o = Q("panel-header"), r = Q("var-sticky"), t = Q("var-button");
  return h(), P("div", null, [
    X(r, { "css-mode": "" }, {
      default: ce(() => [
        X(o, {
          ref: "headerEl",
          type: "year",
          date: {
            previewYear: `${e.yearList[0]} ~ ${e.yearList[e.yearList.length - 1]}`
          },
          disabled: e.panelBtnDisabled,
          onCheckDate: e.checkDate
        }, null, 8, ["date", "disabled", "onCheckDate"])
      ]),
      _: 1
      /* STABLE */
    }),
    X(Qe, {
      name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
    }, {
      default: ce(() => [
        (h(), P(
          "ul",
          {
            ref: "panel",
            class: p(e.n()),
            key: e.panelKey
          },
          [
            (h(!0), P(
              Ne,
              null,
              Ke(e.yearList, (a) => (h(), P("li", { key: a }, [
                X(t, Ue({
                  type: "primary",
                  "var-year-picker-cover": "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation,
                  ref_for: !0
                }, Uw({}, e.buttonProps(`${a}`)), {
                  onClick: (i) => e.chooseYear(a, i)
                }), {
                  default: ce(() => [
                    Ie(
                      le(a),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1040, ["elevation", "onClick"])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["name"])
  ]);
}
const uv = x({
  name: "YearPickerPanel",
  components: {
    VarButton: zn,
    VarSticky: pr,
    PanelHeader: Ms
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    preview: {
      type: String
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-year"],
  setup(e, { emit: n }) {
    const [o] = e.current.split("-"), r = $(), t = $(null), a = $(!1), i = $(0), l = $(0), s = _e({
      left: !1,
      right: !1
    }), u = B(() => {
      if (!e.preview)
        return [];
      const w = Math.floor(U(e.preview) / 100 + l.value) * 100;
      return Array.from(Array(100), (b, y) => Math.max(0, w) + y);
    }), c = (w) => {
      const {
        choose: { chooseMonths: b, chooseDays: y, chooseYears: S, chooseRangeYear: z },
        componentProps: { type: O, range: D }
      } = e;
      if (D) {
        if (!z.length) return !1;
        const T = ie(w).isSameOrBefore(ie(z[1]), "year"), E = ie(w).isSameOrAfter(ie(z[0]), "year");
        return T && E;
      }
      return O === "year" ? S.includes(w) : O === "month" ? b.some((T) => T.includes(w)) : y.some((T) => T.includes(w));
    }, d = (w) => {
      const {
        componentProps: { min: b, max: y }
      } = e, S = y ? ie(w).isSameOrBefore(ie(y), "year") : !0, z = b ? ie(w).isSameOrAfter(ie(b), "year") : !0;
      return S && z;
    }, f = (w) => {
      const {
        choose: { chooseYear: b },
        componentProps: { allowedDates: y, color: S, multiple: z, range: O }
      } = e, D = () => O || z ? c(w) : b === w, E = d(w) ? y ? !y(w) : !1 : !0, M = () => E ? !0 : O || z ? !c(w) : b !== w, R = () => o === w && e.componentProps.showCurrent ? (O || z) && E ? !0 : O || z ? !c(w) : b !== o : !1, W = () => E ? "" : R() ? S ?? "" : D() ? "" : `${ft()}-color-cover`, H = W().startsWith(ft());
      return {
        outline: R(),
        text: M(),
        color: M() ? "" : S,
        textColor: H ? "" : W(),
        [`${ft()}-color-cover`]: H,
        class: vc(dt("button"), [E, dt("button--disabled")]),
        disabled: E
      };
    }, v = (w, b) => {
      b.currentTarget.classList.contains(dt("button--disabled")) || n("choose-year", w);
    }, g = () => {
      var w;
      const b = (w = r.value.querySelector(".var-button--primary")) != null ? w : r.value.querySelector(".var-button--outline");
      b == null || b.scrollIntoView({
        block: "center"
      });
    }, m = (w) => {
      const b = w === "prev";
      a.value = b, i.value += b ? -1 : 1, l.value += b ? -1 : 1;
    }, k = (w) => {
      t.value.checkDate(w);
    };
    return mn(g), fe(
      () => e.preview,
      () => {
        l.value = 0;
      }
    ), fe(
      () => [u.value, e.componentProps.max, e.componentProps.min],
      (w) => {
        const [b, y, S] = w;
        y && (s.right = !ie(`${U(b[b.length - 1])}`).isSameOrBefore(ie(y), "year")), S && (s.left = !ie(`${U(b[0])}`).isSameOrAfter(ie(S), "year")), U(b[0] <= 0) && (s.left = !1);
      },
      {
        immediate: !0
      }
    ), {
      n: dt,
      classes: vc,
      buttonProps: f,
      panel: r,
      headerEl: t,
      yearList: u,
      reverse: a,
      panelKey: i,
      panelBtnDisabled: s,
      nDate: ft,
      checkDate: m,
      chooseYear: v,
      forwardRef: k,
      toNumber: U
    };
  }
});
uv.render = Hw;
var Yw = uv, jw = Object.defineProperty, mc = Object.getOwnPropertySymbols, Ww = Object.prototype.hasOwnProperty, Kw = Object.prototype.propertyIsEnumerable, hc = (e, n, o) => n in e ? jw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, qw = (e, n) => {
  for (var o in n || (n = {}))
    Ww.call(n, o) && hc(e, o, n[o]);
  if (mc)
    for (var o of mc(n))
      Kw.call(n, o) && hc(e, o, n[o]);
  return e;
};
ie.extend(rv);
ie.extend(tv);
const { n: Xo, classes: Xw } = ee("day-picker"), { n: pt } = ee("date-picker");
function Gw(e, n) {
  const o = Q("panel-header"), r = Q("var-button");
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      N(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          X(o, {
            ref: "headerEl",
            type: "day",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickMonth,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          X(Qe, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (h(), P("div", { key: e.panelKey }, [
                N(
                  "ul",
                  {
                    class: p(e.n("head"))
                  },
                  [
                    (h(!0), P(
                      Ne,
                      null,
                      Ke(e.sortWeekList, (t) => (h(), P(
                        "li",
                        { key: t },
                        le(e.getDayAbbr(t)),
                        1
                        /* TEXT */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                ),
                N(
                  "ul",
                  {
                    class: p(e.n("body"))
                  },
                  [
                    (h(!0), P(
                      Ne,
                      null,
                      Ke(e.days, (t, a) => (h(), P("li", { key: a }, [
                        X(r, Ue({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation,
                          ref_for: !0
                        }, qw({}, e.buttonProps(t)), {
                          onClick: (i) => e.chooseDay(t, i)
                        }), {
                          default: ce(() => [
                            Ie(
                              le(e.filterDay(t)),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1040, ["elevation", "onClick"])
                      ]))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                )
              ]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const cv = x({
  name: "DayPickerPanel",
  components: {
    VarButton: zn,
    PanelHeader: Ms
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickMonth: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-day"],
  setup(e, { emit: n }) {
    const [o, r, t] = e.current.split("-"), a = $([]), i = $(!1), l = $(0), s = $(null), u = _e({
      left: !1,
      right: !1
    }), { t: c } = ao(), d = B(
      () => e.preview.previewYear === o && e.preview.previewMonth === r
    ), f = B(
      () => e.choose.chooseYear === e.preview.previewYear && e.choose.chooseMonth === e.preview.previewMonth
    ), v = B(() => {
      const T = Sr.findIndex((E) => E === e.componentProps.firstDayOfWeek);
      return T === -1 || T === 0 ? Sr : [...Sr.slice(T), ...Sr.slice(0, T)];
    }), g = (T) => {
      var E, M;
      return (M = (E = (c || rn)("datePickerWeekDict")) == null ? void 0 : E[T].abbr) != null ? M : "";
    }, m = (T) => T > 0 ? T : "", k = () => {
      const {
        preview: { previewMonth: T, previewYear: E }
      } = e, M = ie(`${E}-${T}`).daysInMonth(), R = ie(`${E}-${T}-01`).day(), W = v.value.findIndex((H) => H === `${R}`);
      a.value = [...Array(W).fill(-1), ...Array.from(Array(M + 1).keys())].filter((H) => H);
    }, w = () => {
      const {
        preview: { previewYear: T, previewMonth: E },
        componentProps: { max: M, min: R }
      } = e;
      if (M) {
        const W = `${T}-${U(E) + 1}`;
        u.right = !ie(W).isSameOrBefore(ie(M), "month");
      }
      if (R) {
        const W = `${T}-${U(E) - 1}`;
        u.left = !ie(W).isSameOrAfter(ie(R), "month");
      }
    }, b = (T) => {
      const {
        preview: { previewYear: E, previewMonth: M },
        componentProps: { min: R, max: W }
      } = e;
      let H = !0, F = !0;
      const Y = `${E}-${M}-${T}`;
      return W && (H = ie(Y).isSameOrBefore(ie(W), "day")), R && (F = ie(Y).isSameOrAfter(ie(R), "day")), H && F;
    }, y = (T) => {
      const {
        choose: { chooseDays: E, chooseRangeDay: M },
        componentProps: { range: R }
      } = e;
      if (R) {
        if (!M.length) return !1;
        const W = ie(T).isSameOrBefore(ie(M[1]), "day"), H = ie(T).isSameOrAfter(ie(M[0]), "day");
        return W && H;
      }
      return E.includes(T);
    }, S = (T) => {
      if (T < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Xo("button"),
          disabled: !0
        };
      const {
        choose: { chooseDay: E },
        preview: { previewYear: M, previewMonth: R },
        componentProps: { allowedDates: W, color: H, multiple: F, range: Y }
      } = e, j = `${M}-${R}-${T}`, ae = () => Y || F ? y(j) : U(E) === T && f.value, ve = b(T) ? W ? !W(j) : !1 : !0, ye = () => ve ? !0 : Y || F ? !y(j) : !f.value || U(E) !== T, Ee = () => d.value && U(t) === T && e.componentProps.showCurrent ? (Y || F || f.value) && ve ? !0 : Y || F ? !y(j) : f.value ? E !== t : !0 : !1, L = () => ve ? "" : Ee() ? H ?? "" : ae() ? "" : `${pt()}-color-cover`, Z = L().startsWith(pt());
      return {
        text: ye(),
        outline: Ee(),
        textColor: Z ? "" : L(),
        [`${pt()}-color-cover`]: Z,
        class: Xw(Xo("button"), Xo("button--usable"), [ve, Xo("button--disabled")]),
        disabled: ve
      };
    }, z = (T) => {
      i.value = T === "prev", l.value += T === "prev" ? -1 : 1, n("check-preview", "month", T);
    }, O = (T, E) => {
      E.currentTarget.classList.contains(Xo("button--disabled")) || n("choose-day", T);
    }, D = (T) => {
      s.value.checkDate(T);
    };
    return mn(() => {
      k(), w();
    }), fe(
      () => e.preview,
      () => {
        k(), w();
      }
    ), fe(() => [e.componentProps.max, e.componentProps.min], w), {
      n: Xo,
      nDate: pt,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: v,
      panelBtnDisabled: u,
      forwardRef: D,
      filterDay: m,
      getDayAbbr: g,
      checkDate: z,
      chooseDay: O,
      buttonProps: S
    };
  }
});
cv.render = Gw;
var Zw = cv, Jw = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: Qw, n: _w, classes: xw } = ee("date-picker");
function eC(e, n) {
  var o;
  const r = Q("year-picker-panel"), t = Q("month-picker-panel"), a = Q("day-picker-panel");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      N(
        "div",
        {
          class: p(e.n("title")),
          style: q({ background: e.titleColor || e.color })
        },
        [
          N(
            "div",
            {
              class: p(e.n("title-select"))
            },
            [
              N(
                "div",
                {
                  class: p(e.n("title-hint"))
                },
                le((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("datePickerHint")),
                3
                /* TEXT, CLASS */
              ),
              e.type !== "year" ? (h(), P(
                "div",
                {
                  key: 0,
                  class: p(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
                  onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
                },
                [
                  V(e.$slots, "year", { year: e.chooseYear }, () => [
                    Ie(
                      le(e.chooseYear),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )) : G("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          N(
            "div",
            {
              class: p(
                e.classes(
                  e.n("title-date"),
                  [!e.isYearPanel || e.type === "year", e.n("title-date--active")],
                  [e.range, e.n("title-date--range")]
                )
              ),
              onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
            },
            [
              X(Qe, {
                name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey`
              }, {
                default: ce(() => [
                  e.type === "year" ? (h(), P("div", {
                    key: `${e.chooseYear}`
                  }, [
                    e.range ? V(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeYear
                    }, () => [
                      Ie(
                        le(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? V(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseYears
                    }, () => [
                      Ie(
                        le(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : V(e.$slots, "year", {
                      key: 2,
                      year: e.chooseYear
                    }, () => [
                      Ie(
                        le(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : e.type === "month" ? (h(), P("div", {
                    key: `${e.chooseYear}${e.chooseMonth}`
                  }, [
                    e.range ? V(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeMonth
                    }, () => [
                      Ie(
                        le(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? V(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseMonths
                    }, () => [
                      Ie(
                        le(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : V(e.$slots, "month", {
                      key: 2,
                      month: e.chooseMonth,
                      year: e.chooseYear
                    }, () => [
                      Ie(
                        le(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : (h(), P("div", {
                    key: `${e.chooseYear}${e.chooseMonth}${e.chooseDay}`
                  }, [
                    e.range ? V(e.$slots, "range", {
                      key: 0,
                      choose: e.formatRange
                    }, () => [
                      Ie(
                        le(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? V(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseDays
                    }, () => [
                      Ie(
                        le(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : V(e.$slots, "date", wo(Ue({ key: 2 }, e.slotProps)), () => [
                      Ie(
                        le(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ]))
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      N(
        "div",
        {
          class: p(e.n("body")),
          onTouchstart: n[2] || (n[2] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
          onTouchmove: n[3] || (n[3] = (...i) => e.handleTouchmove && e.handleTouchmove(...i)),
          onTouchend: n[4] || (n[4] = (...i) => e.handleTouchend && e.handleTouchend(...i))
        },
        [
          X(Qe, {
            name: `${e.n()}-panel-fade`
          }, {
            default: ce(() => [
              e.getPanelType === "year" ? (h(), Ce(r, {
                key: 0,
                ref: "yearPanelEl",
                choose: e.getChoose,
                current: e.currentDate,
                "component-props": e.componentProps,
                preview: e.previewYear,
                onChooseYear: e.getChooseYear
              }, null, 8, ["choose", "current", "component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (h(), Ce(t, {
                key: 1,
                ref: "monthPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "click-year": () => e.clickEl("year"),
                "component-props": e.componentProps,
                onChooseMonth: e.getChooseMonth,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (h(), Ce(a, {
                key: 2,
                ref: "dayPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "component-props": e.componentProps,
                "click-month": () => e.clickEl("month"),
                onChooseDay: e.getChooseDay,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : G("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        34
        /* CLASS, NEED_HYDRATION */
      ),
      e.$slots.actions ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("actions"))
        },
        [
          V(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const dv = x({
  name: Qw,
  components: {
    MonthPickerPanel: Iw,
    YearPickerPanel: Yw,
    DayPickerPanel: Zw
  },
  props: av,
  setup(e) {
    const { t: n } = ao(), o = ie().format("YYYY-MM-D"), [r, t] = o.split("-"), a = Ct.find((te) => te === t), i = $(!1), l = $(!1), s = $(!0), u = $(), c = $(), d = $(), f = $(a), v = $(r), g = $(!1), m = $([]), k = $([]), w = $([]), b = $([]), y = $([]), S = $([]), z = $(null), O = $(null), D = $(null), T = B(() => ({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range,
      buttonElevation: e.buttonElevation
    })), E = B(() => ({
      chooseMonth: u.value,
      chooseYear: c.value,
      chooseDay: d.value,
      chooseYears: m.value,
      chooseMonths: k.value,
      chooseDays: w.value,
      chooseRangeYear: b.value,
      chooseRangeMonth: y.value,
      chooseRangeDay: S.value
    })), M = B(() => ({
      previewMonth: f.value,
      previewYear: v.value
    })), R = B(() => {
      var te;
      const { multiple: $e, range: Oe } = e;
      return Oe ? b.value.length ? `${b.value[0]} ~ ${b.value[1]}` : "" : $e ? `${m.value.length}${(n || rn)("datePickerSelected")}` : (te = c.value) != null ? te : "";
    }), W = B(() => {
      var te, $e;
      const { multiple: Oe, range: Re } = e;
      if (Re)
        return y.value.length ? `${y.value[0]} ~ ${y.value[1]}` : "";
      let Le = "";
      return u.value && (Le = ($e = (te = (n || rn)("datePickerMonthDict")) == null ? void 0 : te[u.value].name) != null ? $e : ""), Oe ? `${k.value.length}${(n || rn)("datePickerSelected")}` : Le;
    }), H = B(() => {
      var te, $e, Oe, Re;
      const { multiple: Le, range: un } = e;
      if (un) {
        const $r = S.value.map(($h) => ie($h).format("YYYY-MM-DD"));
        return $r.length ? `${$r[0]} ~ ${$r[1]}` : "";
      }
      if (Le) return `${w.value.length}${(n || rn)("datePickerSelected")}`;
      if (!c.value || !u.value || !d.value) return "";
      const pn = ie(`${c.value}-${u.value}-${d.value}`).day(), vn = Sr.find(($r) => $r === `${pn}`), Ro = ($e = (te = (n || rn)("datePickerWeekDict")) == null ? void 0 : te[vn].name) != null ? $e : "", yh = (Re = (Oe = (n || rn)("datePickerMonthDict")) == null ? void 0 : Oe[u.value].name) != null ? Re : "", kh = Yo(d.value, 2, "0");
      return (n || rn)("lang") === "zh-CN" ? `${u.value}-${kh} ${Ro.slice(0, 3)}` : `${Ro.slice(0, 3)}, ${yh.slice(0, 3)} ${d.value}`;
    }), F = B(() => e.type === "year" || i.value ? "year" : e.type === "month" || l.value ? "month" : e.type === "date" ? "date" : ""), Y = B(() => !e.touchable || !F.value), j = B(() => {
      var te, $e;
      const Oe = ie(`${c.value}-${u.value}-${d.value}`).day(), Re = d.value ? Yo(d.value, 2, "0") : "";
      return {
        week: `${Oe}`,
        year: (te = c.value) != null ? te : "",
        month: ($e = u.value) != null ? $e : "",
        date: Re
      };
    }), ae = B(
      () => E.value.chooseRangeDay.map((te) => ie(te).format("YYYY-MM-DD"))
    ), _ = B(() => c.value === v.value), ve = B(() => u.value === f.value);
    let ye = 0, Ee = 0, L = "", Z;
    fe(
      () => e.modelValue,
      (te) => {
        if (!(!We() || ne(te)))
          if (e.range) {
            if (!Xe(te)) return;
            s.value = te.length !== 1, ue(te, e.type);
          } else if (e.multiple) {
            if (!Xe(te)) return;
            ke(te, e.type);
          } else
            Be(te);
      },
      { immediate: !0 }
    ), fe(F, Je);
    function oe(te) {
      te === "year" ? i.value = !0 : te === "month" ? l.value = !0 : (i.value = !1, l.value = !1);
    }
    function me(te) {
      if (Y.value) return;
      const { clientX: $e, clientY: Oe } = te.touches[0];
      ye = $e, Ee = Oe;
    }
    function I(te, $e) {
      return te >= $e && te > 20 ? "x" : "y";
    }
    function K(te) {
      if (Y.value) return;
      const { clientX: $e, clientY: Oe } = te.touches[0], Re = $e - ye, Le = Oe - Ee;
      Z = I(Math.abs(Re), Math.abs(Le)), L = Re > 0 ? "prev" : "next";
    }
    function de() {
      return Jw(this, null, function* () {
        if (Y.value || Z !== "x") return;
        const te = F.value === "year" ? z : F.value === "month" ? O : D;
        yield kn(), te.value.forwardRef(L), Je();
      });
    }
    function Se(te, $e) {
      const Oe = $e === "year" ? b : $e === "month" ? y : S;
      if (Oe.value = s.value ? [te, te] : [Oe.value[0], te], s.value = !s.value, s.value) {
        const Le = ie(Oe.value[0]).isAfter(Oe.value[1]) ? [Oe.value[1], Oe.value[0]] : [...Oe.value];
        C(e["onUpdate:modelValue"], Le), C(e.onChange, Le);
      }
    }
    function Fe(te, $e) {
      const Oe = $e === "year" ? m : $e === "month" ? k : w, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-DD", Le = Oe.value.map((pn) => ie(pn).format(Re)), un = Le.findIndex((pn) => pn === te);
      un === -1 ? Le.push(te) : Le.splice(un, 1), C(e["onUpdate:modelValue"], Le), C(e.onChange, Le);
    }
    function Me(te, $e) {
      return !c.value || !u.value ? !1 : _.value ? te === "year" ? $e < U(c.value) : te === "month" ? $e < u.value : ve.value ? $e < U(d.value) : u.value > f.value : c.value > v.value;
    }
    function on(te) {
      const { readonly: $e, range: Oe, multiple: Re, onChange: Le, "onUpdate:modelValue": un } = e;
      if (te < 0 || $e) return;
      g.value = Me("day", te);
      const pn = `${v.value}-${f.value}-${te}`, vn = ie(pn).format("YYYY-MM-DD");
      Oe ? Se(vn, "day") : Re ? Fe(vn, "day") : (C(un, vn), C(Le, vn));
    }
    function ln(te) {
      const { type: $e, readonly: Oe, range: Re, multiple: Le, onChange: un, onPreview: pn, "onUpdate:modelValue": vn } = e;
      if (g.value = Me("month", te), $e === "month" && !Oe) {
        const Ro = `${v.value}-${te}`;
        Re ? Se(Ro, "month") : Le ? Fe(Ro, "month") : (C(vn, Ro), C(un, Ro));
      } else
        f.value = te, C(
          pn,
          U(v.value),
          U(f.value),
          $e === "date" ? U(d.value) : void 0
        );
      l.value = !1;
    }
    function wn(te) {
      const { type: $e, readonly: Oe, range: Re, multiple: Le, onChange: un, onPreview: pn, "onUpdate:modelValue": vn } = e;
      g.value = Me("year", te), $e === "year" && !Oe ? Re ? Se(`${te}`, "year") : Le ? Fe(`${te}`, "year") : (C(vn, `${te}`), C(un, `${te}`)) : (v.value = `${te}`, C(
        pn,
        U(v.value),
        U(f.value),
        $e === "date" ? U(d.value) : void 0
      )), i.value = !1;
    }
    function pe(te, $e) {
      const Oe = $e === "prev" ? -1 : 1;
      if (te === "year")
        v.value = `${U(v.value) + Oe}`;
      else {
        let Re = U(f.value) + Oe;
        Re < 1 && (v.value = `${U(v.value) - 1}`, Re = 12), Re > 12 && (v.value = `${U(v.value) + 1}`, Re = 1), f.value = Ct.find((Le) => U(Le) === Re);
      }
      C(
        e.onPreview,
        U(v.value),
        U(f.value),
        e.type === "date" ? U(d.value) : void 0
      );
    }
    function We() {
      return (e.multiple || e.range) && !Xe(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Xe(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0;
    }
    function ne(te) {
      return Xe(te) ? !1 : te === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1;
    }
    function ue(te, $e) {
      const Oe = $e === "year" ? b : $e === "month" ? y : S, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = te.map((vn) => ie(vn).format(Re)).slice(0, 2);
      if (Oe.value.some((vn) => ne(vn))) return;
      Oe.value = Le;
      const pn = ie(Oe.value[0]).isAfter(Oe.value[1]);
      Oe.value.length === 2 && pn && (Oe.value = [Oe.value[1], Oe.value[0]]);
    }
    function ke(te, $e) {
      const Oe = $e === "year" ? m : $e === "month" ? k : w, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = Array.from(new Set(te.map((un) => ie(un).format(Re))));
      Oe.value = Le.filter((un) => un !== "Invalid Date");
    }
    function Be(te) {
      const Oe = (te ? ie(te) : ie()).format("YYYY-MM-D");
      if (ne(Oe)) return;
      const [Re, Le, un] = Oe.split("-"), pn = Ct.find((vn) => vn === Le);
      u.value = pn, c.value = Re, d.value = un, f.value = pn, v.value = Re;
    }
    function Je() {
      Ee = 0, ye = 0, L = "", Z = void 0;
    }
    return {
      yearPanelEl: z,
      monthPanelEl: O,
      dayPanelEl: D,
      reverse: g,
      currentDate: o,
      chooseMonth: u,
      chooseYear: c,
      chooseDay: d,
      previewYear: v,
      isYearPanel: i,
      isMonthPanel: l,
      getMonthTitle: W,
      getDateTitle: H,
      getYearTitle: R,
      getPanelType: F,
      getChoose: E,
      getPreview: M,
      componentProps: T,
      slotProps: j,
      formatRange: ae,
      pt: n,
      t: rn,
      n: _w,
      classes: xw,
      clickEl: oe,
      handleTouchstart: me,
      handleTouchmove: K,
      handleTouchend: de,
      getChooseDay: on,
      getChooseMonth: ln,
      getChooseYear: wn,
      checkPreview: pe,
      formatElevation: fn
    };
  }
});
dv.render = eC;
var Na = dv;
re(Na);
se(Na, av);
const WT = Na;
var hl = Na, nC = Object.defineProperty, gc = Object.getOwnPropertySymbols, oC = Object.prototype.hasOwnProperty, rC = Object.prototype.propertyIsEnumerable, bc = (e, n, o) => n in e ? nC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, tC = (e, n) => {
  for (var o in n || (n = {}))
    oC.call(n, o) && bc(e, o, n[o]);
  if (gc)
    for (var o of gc(n))
      rC.call(n, o) && bc(e, o, n[o]);
  return e;
};
const fv = tC({
  show: Boolean,
  width: [Number, String],
  title: String,
  message: String,
  messageAlign: {
    type: String,
    default: "left"
  },
  confirmButton: {
    type: Boolean,
    default: !0
  },
  cancelButton: {
    type: Boolean,
    default: !0
  },
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonTextColor: String,
  cancelButtonTextColor: String,
  confirmButtonColor: String,
  cancelButtonColor: String,
  dialogClass: String,
  dialogStyle: Object,
  onBeforeClose: A(),
  onConfirm: A(),
  onCancel: A(),
  "onUpdate:show": A()
}, De(br, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "closeOnKeyEscape",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onKeyEscape",
  // internal for function call closes the dialog
  "onRouteChange"
]));
var aC = Object.defineProperty, yc = Object.getOwnPropertySymbols, iC = Object.prototype.hasOwnProperty, lC = Object.prototype.propertyIsEnumerable, kc = (e, n, o) => n in e ? aC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, sC = (e, n) => {
  for (var o in n || (n = {}))
    iC.call(n, o) && kc(e, o, n[o]);
  if (yc)
    for (var o of yc(n))
      lC.call(n, o) && kc(e, o, n[o]);
  return e;
};
const { name: uC, n: cC, classes: dC } = ee("dialog");
function fC(e, n) {
  const o = Q("var-button"), r = Q("var-popup");
  return h(), Ce(r, {
    class: p(e.n("popup")),
    "var-dialog-cover": "",
    show: e.popupShow,
    overlay: e.overlay,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    "lock-scroll": e.lockScroll,
    "close-on-click-overlay": e.popupCloseOnClickOverlay,
    "close-on-key-escape": !1,
    teleport: e.teleport,
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onKeyEscape: e.handleKeyEscape,
    onRouteChange: e.onRouteChange,
    onClickOverlay: e.handleClickOverlay
  }, {
    default: ce(() => [
      N(
        "div",
        Ue({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: sC({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          N(
            "div",
            {
              class: p(e.n("title"))
            },
            [
              V(e.$slots, "title", {}, () => {
                var t;
                return [
                  Ie(
                    le((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("dialogTitle")),
                    1
                    /* TEXT */
                  )
                ];
              })
            ],
            2
            /* CLASS */
          ),
          N(
            "div",
            {
              class: p(e.n("message")),
              style: q({ textAlign: e.messageAlign })
            },
            [
              V(e.$slots, "default", {}, () => [
                Ie(
                  le(e.message),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          ),
          V(e.$slots, "actions", {
            slotClass: e.n("actions"),
            cancel: e.cancel,
            confirm: e.confirm
          }, () => [
            N(
              "div",
              {
                class: p(e.n("actions"))
              },
              [
                e.cancelButton ? (h(), Ce(o, {
                  key: 0,
                  class: p(e.classes(e.n("button"), e.n("cancel-button"))),
                  "var-dialog-cover": "",
                  text: "",
                  "text-color": e.cancelButtonTextColor,
                  color: e.cancelButtonColor,
                  onClick: e.cancel
                }, {
                  default: ce(() => {
                    var t;
                    return [
                      Ie(
                        le((t = e.cancelButtonText) != null ? t : (e.pt ? e.pt : e.t)("dialogCancelButtonText")),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "text-color", "color", "onClick"])) : G("v-if", !0),
                e.confirmButton ? (h(), Ce(o, {
                  key: 1,
                  class: p(e.classes(e.n("button"), e.n("confirm-button"))),
                  "var-dialog-cover": "",
                  text: "",
                  "text-color": e.confirmButtonTextColor,
                  color: e.confirmButtonColor,
                  onClick: e.confirm
                }, {
                  default: ce(() => {
                    var t;
                    return [
                      Ie(
                        le((t = e.confirmButtonText) != null ? t : (e.pt ? e.pt : e.t)("dialogConfirmButtonText")),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "text-color", "color", "onClick"])) : G("v-if", !0)
              ],
              2
              /* CLASS */
            )
          ])
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onKeyEscape", "onRouteChange", "onClickOverlay"]);
}
const pv = x({
  name: uC,
  components: {
    VarPopup: Oo,
    VarButton: zn
  },
  inheritAttrs: !1,
  props: fv,
  setup(e) {
    const n = $(!1), o = $(!1), { t: r } = ao();
    fe(
      () => e.show,
      (u) => {
        n.value = u;
      },
      { immediate: !0 }
    ), fe(
      () => e.closeOnClickOverlay,
      (u) => {
        if (e.onBeforeClose != null) {
          o.value = !1;
          return;
        }
        o.value = u;
      },
      { immediate: !0 }
    );
    function t() {
      return C(e["onUpdate:show"], !1);
    }
    function a() {
      const { closeOnClickOverlay: u, onClickOverlay: c, onBeforeClose: d } = e;
      if (C(c), !!u) {
        if (d != null) {
          C(d, "close", t);
          return;
        }
        C(e["onUpdate:show"], !1);
      }
    }
    function i() {
      const { onBeforeClose: u, onConfirm: c } = e;
      if (C(c), u != null) {
        C(u, "confirm", t);
        return;
      }
      C(e["onUpdate:show"], !1);
    }
    function l() {
      const { onBeforeClose: u, onCancel: c } = e;
      if (C(c), u != null) {
        C(u, "cancel", t);
        return;
      }
      C(e["onUpdate:show"], !1);
    }
    function s() {
      C(e.onKeyEscape), e.closeOnKeyEscape && l();
    }
    return {
      popupShow: n,
      popupCloseOnClickOverlay: o,
      pt: r,
      t: rn,
      n: cC,
      classes: dC,
      handleClickOverlay: a,
      confirm: i,
      cancel: l,
      toSizeUnit: ze,
      handleKeyEscape: s
    };
  }
});
pv.render = fC;
var nt = pv, pC = Object.defineProperty, vC = Object.defineProperties, mC = Object.getOwnPropertyDescriptors, $c = Object.getOwnPropertySymbols, hC = Object.prototype.hasOwnProperty, gC = Object.prototype.propertyIsEnumerable, wc = (e, n, o) => n in e ? pC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Bi = (e, n) => {
  for (var o in n || (n = {}))
    hC.call(n, o) && wc(e, o, n[o]);
  if ($c)
    for (var o of $c(n))
      gC.call(n, o) && wc(e, o, n[o]);
  return e;
}, bC = (e, n) => vC(e, mC(n));
let bo, Vt = {};
function yC(e = {}) {
  return yn(e) ? bC(Bi({}, Vt), { message: e }) : Bi(Bi({}, Vt), e);
}
function Ao(e) {
  return ro() ? new Promise((n) => {
    Ao.close();
    const o = yC(e), r = _e(o);
    r.teleport = "body", bo = r;
    const { unmountInstance: t } = gr(nt, r, {
      onConfirm: () => {
        C(r.onConfirm), n("confirm");
      },
      onCancel: () => {
        C(r.onCancel), n("cancel");
      },
      onClose: () => {
        C(r.onClose), n("close");
      },
      onClosed: () => {
        C(r.onClosed), t(), bo === r && (bo = null);
      },
      onRouteChange: () => {
        t(), bo === r && (bo = null);
      },
      "onUpdate:show": (a) => {
        r.show = a;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
Ao.setDefaultOptions = function(e) {
  Vt = e;
};
Ao.resetDefaultOptions = function() {
  Vt = {};
};
Ao.close = function() {
  if (bo != null) {
    const e = bo;
    bo = null, He().then(() => {
      e.show = !1;
    });
  }
};
Ao.Component = nt;
re(nt);
re(nt, Ao);
se(Ao, fv);
const KT = nt;
var gl = Ao;
const vv = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: kC, n: $C, classes: wC } = ee("divider");
function CC(e, n) {
  return h(), P(
    "div",
    {
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.vertical, e.n("--vertical")],
          [e.withText, e.n("--with-text")],
          [e.withPresetInset, e.n("--inset")],
          [e.dashed, e.n("--dashed")],
          [e.hairline, e.n("--hairline")]
        )
      ),
      style: q(e.style),
      role: "separator"
    },
    [
      e.vertical ? G("v-if", !0) : V(e.$slots, "default", { key: 0 }, () => [
        e.description ? (h(), P(
          "span",
          {
            key: 0,
            class: p(e.n("text"))
          },
          le(e.description),
          3
          /* TEXT, CLASS */
        )) : G("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const mv = x({
  name: kC,
  props: vv,
  setup(e, { slots: n }) {
    const o = $(!1), r = B(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), t = B(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (as(i) || l)
        return { margin: s };
      const u = U(i), c = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${ze(c)})`,
        left: u > 0 ? ze(c) : ze(0)
      };
    });
    mn(a), Xr(a);
    function a() {
      const { description: i, vertical: l } = e;
      o.value = (n.default || i != null) && !l;
    }
    return {
      n: $C,
      classes: wC,
      withText: o,
      style: t,
      withPresetInset: r
    };
  }
});
mv.render = CC;
var Aa = mv;
re(Aa);
se(Aa, vv);
const qT = Aa;
var bl = Aa;
const hv = {
  direction: {
    type: String,
    default: "xy"
  },
  attraction: String,
  disabled: Boolean,
  boundary: {
    type: Object,
    default: () => ({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    })
  },
  zIndex: {
    type: [Number, String],
    default: 90
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onClick: A()
};
var SC = Object.defineProperty, PC = Object.defineProperties, zC = Object.getOwnPropertyDescriptors, Cc = Object.getOwnPropertySymbols, OC = Object.prototype.hasOwnProperty, TC = Object.prototype.propertyIsEnumerable, Sc = (e, n, o) => n in e ? SC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Pc = (e, n) => {
  for (var o in n || (n = {}))
    OC.call(n, o) && Sc(e, o, n[o]);
  if (Cc)
    for (var o of Cc(n))
      TC.call(n, o) && Sc(e, o, n[o]);
  return e;
}, zc = (e, n) => PC(e, zC(n)), EC = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: BC, n: DC, classes: IC } = ee("drag");
function MC(e, n) {
  return h(), Ce(oo, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    N(
      "div",
      Ue({
        ref: "drag",
        class: e.classes(e.n(), e.n("$--box"), [e.enableTransition, e.n("--transition")]),
        style: {
          "z-index": e.zIndex
        },
        onTouchstart: n[0] || (n[0] = (...o) => e.handleTouchstart && e.handleTouchstart(...o)),
        onTouchmove: n[1] || (n[1] = (...o) => e.handleTouchmove && e.handleTouchmove(...o)),
        onTouchend: n[2] || (n[2] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
        onTouchcancel: n[3] || (n[3] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
        onClick: n[4] || (n[4] = (...o) => e.handleClick && e.handleClick(...o))
      }, e.getAttrs()),
      [
        V(e.$slots, "default")
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["to", "disabled"]);
}
const gv = x({
  name: BC,
  inheritAttrs: !1,
  props: hv,
  setup(e, { attrs: n }) {
    const o = $(null), r = $(0), t = $(0), a = $(!1), i = $(!1), { touching: l, dragging: s, moveX: u, moveY: c, startTouch: d, moveTouch: f, endTouch: v, resetTouch: g } = hr(), { disabled: m } = qo(), k = _e({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    fe(() => e.boundary, M), to(W), mn(() => {
      M(), W();
    });
    function w(F) {
      e.disabled || (d(F), z());
    }
    function b(F) {
      return EC(this, null, function* () {
        !l.value || e.disabled || (f(F), Ve(F), i.value = !1, a.value = !0, e.direction.includes("x") && (r.value += u.value), e.direction.includes("y") && (t.value += c.value), E());
      });
    }
    function y() {
      e.disabled || (v(), i.value = !0, T());
    }
    function S(F) {
      s.value || C(e.onClick, F);
    }
    function z() {
      const { left: F, top: Y } = O();
      r.value = F, t.value = Y;
    }
    function O() {
      const F = an(o.value), Y = an(window), j = F.top - Y.top, ae = Y.bottom - F.bottom, _ = F.left - Y.left, ve = Y.right - F.right, { width: ye, height: Ee } = F, { width: L, height: Z } = Y;
      return {
        top: j,
        bottom: ae,
        left: _,
        right: ve,
        width: ye,
        height: Ee,
        halfWidth: ye / 2,
        halfHeight: Ee / 2,
        windowWidth: L,
        windowHeight: Z
      };
    }
    function D() {
      const F = O(), Y = k.left, j = F.windowWidth - k.right - F.width, ae = k.top, _ = F.windowHeight - k.bottom - F.height;
      return {
        minX: Y,
        minY: ae,
        // fallback the drag element overflows boundary
        maxX: Y < j ? j : Y,
        maxY: ae < _ ? _ : ae
      };
    }
    function T() {
      if (e.attraction == null)
        return;
      const { halfWidth: F, halfHeight: Y, top: j, bottom: ae, left: _, right: ve } = O(), { minX: ye, minY: Ee, maxX: L, maxY: Z } = D(), oe = _ + F - k.left, me = ve + F - k.right, I = j + Y - k.top, K = ae + Y - k.bottom, de = oe <= me, Se = I <= K;
      e.attraction.includes("x") && (r.value = de ? ye : L), e.attraction.includes("y") && (t.value = Se ? Ee : Z);
    }
    function E() {
      const { minX: F, minY: Y, maxX: j, maxY: ae } = D();
      r.value = Mn(r.value, F, j), t.value = Mn(t.value, Y, ae);
    }
    function M() {
      const { top: F = 0, bottom: Y = 0, left: j = 0, right: ae = 0 } = e.boundary;
      k.top = xe(F), k.bottom = xe(Y), k.left = xe(j), k.right = xe(ae);
    }
    function R() {
      var F;
      const Y = (F = n.style) != null ? F : {};
      return zc(Pc({}, n), {
        style: zc(Pc({}, Y), {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: a.value ? 0 : Y.top,
          left: a.value ? 0 : Y.left,
          right: a.value ? "auto" : Y.right,
          bottom: a.value ? "auto" : Y.bottom,
          transform: a.value ? `translate(${r.value}px, ${t.value}px)` : Y.transform
        })
      });
    }
    function W() {
      a.value && (z(), E());
    }
    function H() {
      g(), i.value = !1, a.value = !1, r.value = 0, t.value = 0;
    }
    return {
      drag: o,
      x: r,
      y: t,
      enableTransition: i,
      dragging: s,
      teleportDisabled: m,
      n: DC,
      classes: IC,
      getAttrs: R,
      handleTouchstart: w,
      handleTouchmove: b,
      handleTouchend: y,
      handleClick: S,
      resize: W,
      reset: H
    };
  }
});
gv.render = MC;
var Va = gv;
re(Va);
se(Va, hv);
const XT = Va;
var Rt = Va;
const bv = {
  type: {
    type: String,
    default: "default"
  },
  color: String,
  textColor: String,
  content: String,
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String,
    default: "hover"
  },
  reference: String,
  placement: {
    type: String,
    default: "bottom"
  },
  strategy: {
    type: String,
    default: "absolute"
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  sameWidth: Boolean,
  closeOnClickReference: Boolean,
  closeOnKeyEscape: {
    type: Boolean,
    default: !0
  },
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onClickOutside: A(),
  "onUpdate:show": A()
}, { name: NC, n: AC, classes: VC } = ee("tooltip");
function RC(e, n) {
  return h(), P(
    "div",
    {
      ref: "host",
      class: p(e.classes(e.n(), e.n("$--box"))),
      onClick: n[3] || (n[3] = (...o) => e.handleHostClick && e.handleHostClick(...o)),
      onMouseenter: n[4] || (n[4] = (...o) => e.handleHostMouseenter && e.handleHostMouseenter(...o)),
      onMouseleave: n[5] || (n[5] = (...o) => e.handleHostMouseleave && e.handleHostMouseleave(...o))
    },
    [
      V(e.$slots, "default"),
      (h(), Ce(oo, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        X(Qe, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: ce(() => [
            Ae(N(
              "div",
              {
                ref: "popover",
                class: p(e.classes(e.n("tooltip"), e.n("$--box"))),
                style: q({ zIndex: e.zIndex }),
                onClick: n[0] || (n[0] = Wn(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                N(
                  "div",
                  {
                    style: q({
                      background: e.color,
                      color: e.textColor,
                      width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                    }),
                    class: p(e.classes(e.n("content-container"), e.n(`--${e.type}`))),
                    role: "tooltip"
                  },
                  [
                    V(e.$slots, "content", {}, () => [
                      Ie(
                        le(e.content),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ],
              38
              /* CLASS, STYLE, NEED_HYDRATION */
            ), [
              [Qn, e.show]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["name", "onAfterEnter", "onAfterLeave"])
      ], 8, ["to", "disabled"]))
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const yv = x({
  name: NC,
  props: bv,
  setup(e) {
    const { disabled: n } = qo(), {
      popover: o,
      host: r,
      hostSize: t,
      show: a,
      zIndex: i,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handlePopoverClose: f,
      handleClosed: v,
      // expose
      open: g,
      // expose
      close: m,
      // expose
      resize: k
    } = Ef(e);
    return {
      popover: o,
      host: r,
      hostSize: t,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: ze,
      n: AC,
      classes: VC,
      handleHostClick: l,
      handlePopoverClose: f,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handleClosed: v,
      resize: k,
      open: g,
      close: m
    };
  }
});
yv.render = RC;
var Ra = yv;
re(Ra);
se(Ra, bv);
const GT = Ra;
var Lt = Ra;
const kv = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": A()
};
var LC = Object.defineProperty, Oc = Object.getOwnPropertySymbols, FC = Object.prototype.hasOwnProperty, UC = Object.prototype.propertyIsEnumerable, Tc = (e, n, o) => n in e ? LC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, HC = (e, n) => {
  for (var o in n || (n = {}))
    FC.call(n, o) && Tc(e, o, n[o]);
  if (Oc)
    for (var o of Oc(n))
      UC.call(n, o) && Tc(e, o, n[o]);
  return e;
};
const { name: YC, n: jC, classes: WC } = ee("ellipsis"), KC = { key: 0 };
function qC(e, n) {
  const o = Q("var-tooltip");
  return h(), Ce(
    o,
    wo(Gr(e.tooltipProps)),
    {
      content: ce(() => [
        V(e.$slots, "tooltip-content", {}, () => {
          var r;
          return [
            (r = e.tooltipProps) != null && r.content ? (h(), P(
              "span",
              KC,
              le(e.tooltipProps.content),
              1
              /* TEXT */
            )) : V(e.$slots, "default", { key: 1 })
          ];
        })
      ]),
      default: ce(() => [
        N(
          "span",
          {
            class: p(
              e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])
            ),
            style: q(e.rootStyles),
            onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
          },
          [
            V(e.$slots, "default")
          ],
          6
          /* CLASS, STYLE */
        )
      ]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
const $v = x({
  name: YC,
  components: { VarTooltip: Lt },
  props: kv,
  setup(e) {
    const n = Kn(e, "expand"), o = B(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), r = B(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : HC({ sameWidth: !0 }, e.tooltip));
    function t() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: r,
      expanding: n,
      rootStyles: o,
      n: jC,
      classes: WC,
      handleClick: t
    };
  }
});
$v.render = qC;
var La = $v;
re(La);
se(La, kv);
const ZT = La;
var yl = La;
const wv = {
  active: Boolean,
  show: {
    type: Boolean,
    default: !0
  },
  drag: {
    type: [Object, Boolean],
    default: !1
  },
  type: {
    type: String,
    default: "primary"
  },
  position: {
    type: String,
    default: "right-bottom"
  },
  direction: {
    type: String,
    default: "top"
  },
  trigger: {
    type: String,
    default: "click"
  },
  disabled: Boolean,
  color: String,
  inactiveIcon: {
    type: String,
    default: "plus"
  },
  activeIcon: {
    type: String,
    default: "window-close"
  },
  inactiveIconSize: De(en, "size"),
  activeIconSize: De(en, "size"),
  inactiveIconNamespace: De(en, "namespace"),
  activeIconNamespace: De(en, "namespace"),
  fixed: {
    type: Boolean,
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 90
  },
  top: [Number, String],
  bottom: [Number, String],
  left: [Number, String],
  right: [Number, String],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  safeArea: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onClick: A(),
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  "onUpdate:active": A()
}, {
  name: XC,
  classes: Di,
  n: Dn
} = ee("fab");
var Fa = x({
  name: XC,
  inheritAttrs: !1,
  props: wv,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const r = Kn(e, "active"), t = $(null), a = $(null);
    fe(() => e.trigger, () => {
      r.value = !1;
    }), fe(() => e.disabled, () => {
      r.value = !1;
    }), fe(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var c;
      (c = a.value) == null || c.reset();
    }), us(t, "click", s);
    function i(c, d, f) {
      if (c.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (f === 0) {
          C(e.onClick, r.value, c);
          return;
        }
        r.value = d, C(e.onClick, r.value, c), C(r.value ? e.onOpen : e.onClose);
      }
    }
    function l(c, d) {
      e.trigger !== "hover" || e.disabled || d === 0 || (r.value = c, C(r.value ? e.onOpen : e.onClose));
    }
    function s() {
      e.trigger !== "click" || e.disabled || r.value !== !1 && (r.value = !1, C(e.onClose));
    }
    function u() {
      return n.trigger ? e.show ? n.trigger({
        active: r.value
      }) : null : Ae(X(zn, {
        "var-fab-cover": !0,
        class: Dn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        iconContainer: !0
      }, {
        default: () => [X(Ze, {
          "var-fab-cover": !0,
          class: Di([r.value, Dn("trigger-active-icon"), Dn("trigger-inactive-icon")]),
          name: r.value ? e.activeIcon : e.inactiveIcon,
          size: r.value ? e.activeIconSize : e.inactiveIconSize,
          namespace: r.value ? e.activeIconNamespace : e.inactiveIconNamespace,
          transition: 200,
          animationClass: Dn("--trigger-icon-animation")
        }, null)]
      }), [[Qn, e.show]]);
    }
    return () => {
      var c;
      const d = Vd((c = C(n.default)) != null ? c : []), f = as(e.drag) ? {} : e.drag;
      return X(Rt, Ue({
        ref: a,
        class: Di(Dn(`--position-${e.position}`), [!e.fixed, Dn("--absolute")]),
        style: {
          top: ze(e.top),
          bottom: ze(e.bottom),
          left: ze(e.left),
          right: ze(e.right)
        },
        zIndex: e.zIndex,
        teleport: e.teleport,
        disabled: e.disabled || !e.drag || !e.fixed,
        direction: f.direction,
        attraction: f.attraction,
        boundary: f.boundary,
        onClick: (v) => i(v, !r.value, d.length)
      }, o), {
        default: () => [X("div", {
          class: Di(Dn(), Dn(`--direction-${e.direction}`), [e.safeArea, Dn("--safe-area")]),
          ref: t,
          onMouseleave: () => l(!1, d.length),
          onMouseenter: () => l(!0, d.length)
        }, [X(Qe, {
          name: Dn("--active-transition")
        }, {
          default: () => [u()]
        }), X(Qe, {
          name: Dn(`--actions-transition-${e.direction}`),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Ae(X("div", {
            class: Dn("actions"),
            onClick: (v) => v.stopPropagation()
          }, [d.map((v) => {
            var g;
            return X("div", {
              class: Dn("action"),
              key: (g = v.key) != null ? g : void 0
            }, [v]);
          })]), [[Qn, e.show && r.value && d.length]])]
        })])]
      });
    };
  }
});
re(Fa);
se(Fa, wv);
const JT = Fa;
var kl = Fa;
const Cv = {
  anchor: Number,
  anchors: Array,
  contentDraggable: {
    type: Boolean,
    default: !0
  },
  duration: {
    type: [Number, String],
    default: 300
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  safeArea: Boolean,
  "onUpdate:anchor": A(),
  onAnchorChange: A()
}, { name: GC, n: ZC, classes: JC } = ee("floating-panel"), Ec = 100, Bc = 0.2;
function QC(e, n) {
  return h(), Ce(oo, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    N(
      "div",
      {
        class: p(e.classes(e.n(), [e.safeArea, e.n("--safe-area")], e.formatElevation(e.elevation, 3))),
        style: q({
          height: `${e.toSizeUnit(e.maxAnchor)}`,
          transform: `translateY(calc(100% - ${e.toSizeUnit(e.visibleHeight)}))`,
          transition: e.touching ? "none" : `transform ${e.toNumber(
            e.duration
          )}ms var(--floating-panel-transition-timing-function), background-color 0.25s`
        }),
        onTouchstart: n[0] || (n[0] = (...o) => e.handleTouchstart && e.handleTouchstart(...o)),
        onTouchmove: n[1] || (n[1] = (...o) => e.handleTouchmove && e.handleTouchmove(...o)),
        onTouchend: n[2] || (n[2] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
        onTouchcancel: n[3] || (n[3] = (...o) => e.handleTouchend && e.handleTouchend(...o))
      },
      [
        V(e.$slots, "header", {}, () => [
          N(
            "div",
            {
              class: p(e.n("header"))
            },
            [
              N(
                "div",
                {
                  class: p(e.n("header-toolbar"))
                },
                null,
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          )
        ]),
        N(
          "div",
          {
            class: p(e.n("content")),
            ref: "contentRef"
          },
          [
            V(e.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    )
  ], 8, ["to", "disabled"]);
}
const Sv = x({
  name: GC,
  props: Cv,
  setup(e) {
    const n = $(0), o = $(null), { height: r } = eg(), t = B(() => r.value * 0.6), a = Kn(e, "anchor", { defaultValue: Ec }), i = B(() => {
      const E = [Ec, t.value], { anchors: M } = e;
      return Zn(M) ? E : M;
    }), l = B(() => Math.min(...i.value)), s = B(() => Math.max(...i.value)), { disabled: u } = qo(), { deltaY: c, touching: d, startTouch: f, moveTouch: v, endTouch: g, isReachTop: m, isReachBottom: k } = hr();
    let w;
    Qr(() => d.value), fe(() => a.value, b, { immediate: !0 }), fe(
      () => i.value,
      () => {
        b(a.value);
      },
      { immediate: !0 }
    );
    function b(E) {
      O(E ?? l.value);
    }
    function y(E) {
      f(E), w = n.value;
    }
    function S(E) {
      var M;
      v(E);
      const R = E.target, W = o.value === R || ((M = o.value) == null ? void 0 : M.contains(R));
      if (W && !e.contentDraggable)
        return;
      if (W && e.contentDraggable && n.value >= s.value && !m(o.value)) {
        k(o.value) && Ve(E);
        return;
      }
      const H = w - c.value;
      O(D(H)), Ve(E);
    }
    function z() {
      g();
      const E = a.value;
      O(n.value), a.value = n.value, a.value !== E && C(e.onAnchorChange, n.value);
    }
    function O(E) {
      n.value = d.value ? E : T(E);
    }
    function D(E) {
      if (E > s.value) {
        const M = E - s.value;
        return s.value + M * Bc;
      }
      if (E < l.value) {
        const M = l.value - E;
        return l.value - M * Bc;
      }
      return E;
    }
    function T(E) {
      if (i.value.includes(E))
        return E;
      let M = 1 / 0, R = 0;
      return i.value.forEach((W) => {
        const H = Math.abs(W - E);
        H < M && (M = H, R = W);
      }), R;
    }
    return {
      contentRef: o,
      teleportDisabled: u,
      touching: d,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: ZC,
      classes: JC,
      toSizeUnit: ze,
      toNumber: U,
      formatElevation: fn,
      handleTouchstart: y,
      handleTouchmove: S,
      handleTouchend: z
    };
  }
});
Sv.render = QC;
var Ua = Sv;
re(Ua);
se(Ua, Cv);
const QT = Ua;
var $l = Ua;
const Pv = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: A(),
  onReset: A()
};
var Dc = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: _C, n: xC } = ee("form");
function eS(e, n) {
  return h(), P(
    "form",
    {
      class: p(e.n()),
      onSubmit: n[0] || (n[0] = (...o) => e.handleSubmit && e.handleSubmit(...o)),
      onReset: n[1] || (n[1] = (...o) => e.handleReset && e.handleReset(...o))
    },
    [
      V(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const zv = x({
  name: _C,
  props: Pv,
  setup(e) {
    const n = B(() => e.disabled), o = B(() => e.readonly), { formItems: r, bindFormItems: t } = Qb();
    t({
      disabled: n,
      readonly: o
    });
    function i(f) {
      setTimeout(() => {
        const v = To(f), g = v === window ? 0 : iu(v), m = iu(f) - g - xe(e.scrollToErrorOffsetY);
        Ir(v, {
          top: m,
          animation: Yi
        });
      }, 300);
    }
    function l(f) {
      return Dc(this, null, function* () {
        Ve(f);
        const v = yield u();
        C(e.onSubmit, v);
      });
    }
    function s(f) {
      Ve(f), c(), C(e.onReset);
    }
    function u() {
      return Dc(this, null, function* () {
        var f;
        const v = yield Promise.all(r.map(({ validate: g }) => g()));
        if (e.scrollToError) {
          const [, g] = Hh(v, (k) => k === !1, e.scrollToError), m = g > -1;
          if (m) {
            const k = (f = r[g].instance.proxy) == null ? void 0 : f.$el;
            i(k);
          }
          return !m;
        }
        return v.every((g) => g === !0);
      });
    }
    function c() {
      return r.forEach(({ reset: f }) => f());
    }
    function d() {
      return r.forEach(({ resetValidation: f }) => f());
    }
    return {
      n: xC,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: c,
      resetValidation: d
    };
  }
});
zv.render = eS;
var yr = zv;
yr.useValidation = Ln;
yr.useForm = Fn;
re(yr);
se(yr, Pv);
const _T = yr;
var wl = yr;
const Ov = {
  src: String,
  fit: {
    type: String,
    default: "fill"
  },
  position: {
    type: String,
    default: "50% 50%"
  },
  alt: String,
  title: String,
  referrerpolicy: String,
  width: [String, Number],
  height: [String, Number],
  radius: {
    type: [String, Number],
    default: 0
  },
  loading: String,
  error: String,
  lazy: Boolean,
  ripple: Boolean,
  block: {
    type: Boolean,
    default: !0
  },
  onClick: A(),
  onLoad: A(),
  onError: A()
}, { name: nS, n: oS, classes: rS } = ee("image"), tS = ["alt", "title", "referrerpolicy", "lazy-loading", "lazy-error"], aS = ["alt", "title", "referrerpolicy", "src"];
function iS(e, n) {
  var o;
  const r = Ye("lazy"), t = Ye("ripple");
  return Ae((h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [
      e.lazy && !e.showErrorSlot ? Ae((h(), P("img", {
        key: 0,
        role: "img",
        class: p(e.n("image")),
        alt: e.alt,
        title: e.title,
        referrerpolicy: e.referrerpolicy,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: q({ objectFit: e.fit, objectPosition: e.position }),
        onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, tS)), [
        [r, (o = e.src) != null ? o : ""]
      ]) : G("v-if", !0),
      !e.lazy && !e.showErrorSlot ? (h(), P("img", {
        key: 1,
        role: "img",
        class: p(e.n("image")),
        alt: e.alt,
        title: e.title,
        referrerpolicy: e.referrerpolicy,
        style: q({ objectFit: e.fit, objectPosition: e.position }),
        src: e.src,
        onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
        onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, aS)) : G("v-if", !0),
      e.showErrorSlot ? V(e.$slots, "error", { key: 2 }) : G("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: !e.ripple }]
  ]);
}
const Tv = x({
  name: nS,
  directives: {
    Lazy: Fr,
    Ripple: nn
  },
  props: Ov,
  setup(e, { slots: n }) {
    const o = $(!1);
    fe(
      () => e.src,
      () => {
        o.value = !1;
      }
    );
    function r(i) {
      o.value = !!n.error, C(e.onError, i);
    }
    function t(i) {
      const l = i.currentTarget;
      if (e.lazy) {
        if (l._lazy.state === "success") {
          C(e.onLoad, i);
          return;
        }
        l._lazy.state === "error" && r(i);
      } else
        C(e.onLoad, i);
    }
    function a(i) {
      C(e.onClick, i);
    }
    return {
      showErrorSlot: o,
      n: oS,
      classes: rS,
      toSizeUnit: ze,
      handleLoad: t,
      handleError: r,
      handleClick: a
    };
  }
});
Tv.render = iS;
var Ha = Tv;
re(Ha);
se(Ha, Ov);
const xT = Ha;
var Cl = Ha;
const Ns = {
  loop: {
    type: Boolean,
    default: !0
  },
  autoplay: [String, Number],
  duration: {
    type: [String, Number],
    default: 300
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  navigation: {
    type: [Boolean, String],
    default: !1
  },
  indicator: {
    type: Boolean,
    default: !0
  },
  indicatorColor: String,
  vertical: Boolean,
  touchable: {
    type: Boolean,
    default: !0
  },
  onChange: A()
};
var Go = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const lS = 250, sS = 20, { name: uS, n: Ic, classes: cS } = ee("swipe"), dS = ["onClick"];
function fS(e, n) {
  const o = Q("var-icon"), r = Q("var-button"), t = Ye("hover");
  return Ae((h(), P(
    "div",
    {
      class: p(e.n()),
      ref: "swipeEl"
    },
    [
      N(
        "div",
        {
          class: p(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
          style: q({
            width: e.vertical ? void 0 : e.toSizeUnit(e.trackSize),
            height: e.vertical ? e.toSizeUnit(e.trackSize) : void 0,
            transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.trackTranslate)})`,
            transitionDuration: e.lockDuration ? "0ms" : `${e.toNumber(e.duration)}ms`
          }),
          onTouchstart: n[0] || (n[0] = (...a) => e.handleTouchstart && e.handleTouchstart(...a)),
          onTouchmove: n[1] || (n[1] = (...a) => e.handleTouchmove && e.handleTouchmove(...a)),
          onTouchend: n[2] || (n[2] = (...a) => e.handleTouchend && e.handleTouchend(...a))
        },
        [
          V(e.$slots, "default")
        ],
        38
        /* CLASS, STYLE, NEED_HYDRATION */
      ),
      e.navigation ? V(e.$slots, "prev", wo(Ue({ key: 0 }, {
        index: e.index,
        length: e.length,
        prev: e.prev,
        next: e.next,
        to: e.to,
        hovering: e.hovering
      })), () => [
        X(Qe, {
          name: e.getNavigationAnimation("prev")
        }, {
          default: ce(() => [
            e.navigation === !0 || e.hovering ? (h(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
              },
              [
                X(r, {
                  "var-swipe-cover": "",
                  disabled: !e.loop && e.index === 0,
                  class: p(e.n("navigation-prev-button")),
                  onClick: n[3] || (n[3] = (a) => e.prev())
                }, {
                  default: ce(() => [
                    X(o, {
                      "var-swipe-cover": "",
                      class: p(e.n("navigation-prev-button-icon")),
                      name: e.vertical ? "chevron-up" : "chevron-left"
                    }, null, 8, ["class", "name"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled", "class"])
              ],
              2
              /* CLASS */
            )) : G("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : G("v-if", !0),
      e.navigation ? V(e.$slots, "next", wo(Ue({ key: 1 }, {
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        X(Qe, {
          name: e.getNavigationAnimation("next")
        }, {
          default: ce(() => [
            e.navigation === !0 || e.hovering ? (h(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
              },
              [
                X(r, {
                  "var-swipe-cover": "",
                  class: p(e.n("navigation-next-button")),
                  disabled: !e.loop && e.index === e.length - 1,
                  onClick: n[4] || (n[4] = (a) => e.next())
                }, {
                  default: ce(() => [
                    X(o, {
                      "var-swipe-cover": "",
                      class: p(e.n("navigation-next-button-icon")),
                      name: e.vertical ? "chevron-down" : "chevron-right"
                    }, null, 8, ["class", "name"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "disabled"])
              ],
              2
              /* CLASS */
            )) : G("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : G("v-if", !0),
      V(e.$slots, "indicator", wo(Gr({
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        e.indicator && e.length ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
          },
          [
            (h(!0), P(
              Ne,
              null,
              Ke(e.length, (a, i) => (h(), P("div", {
                class: p(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: q({ background: e.indicatorColor }),
                key: a,
                onClick: (l) => e.to(i)
              }, null, 14, dS))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )) : G("v-if", !0)
      ])
    ],
    2
    /* CLASS */
  )), [
    [t, e.handleHovering]
  ]);
}
const Ev = x({
  name: uS,
  directives: { Hover: En },
  components: { VarButton: zn, VarIcon: Ze },
  props: Ns,
  setup(e) {
    const n = $(null), o = $(0), r = B(() => e.vertical), t = $(0), a = $(0), i = $(!1), l = $(0), s = $(!1), { swipeItems: u, bindSwipeItems: c, length: d } = Eb(), { swipeResizeListeners: f, bindSwipeResizeListeners: v } = Bb(), { popup: g, bindPopup: m } = jd(), {
      deltaX: k,
      deltaY: w,
      moveX: b,
      moveY: y,
      offsetX: S,
      offsetY: z,
      touching: O,
      direction: D,
      startTime: T,
      startTouch: E,
      moveTouch: M,
      endTouch: R
    } = hr(), W = B(() => D.value === (e.vertical ? "vertical" : "horizontal"));
    let H = !1, F = -1;
    c({
      size: o,
      currentIndex: l,
      vertical: r
    }), je(() => window, "keydown", Fe), C(m, null), C(v, null), fe(
      () => d.value,
      () => Go(this, null, function* () {
        yield kn(), L(), Me();
      })
    ), g && fe(
      () => g.show.value,
      (pe) => Go(this, null, function* () {
        pe ? (yield kn(), Me()) : oe();
      })
    ), Do(Me), Zr(oe), to(Me);
    function j(pe) {
      return u.find(({ index: We }) => We.value === pe);
    }
    function ae() {
      e.loop && (a.value >= 0 && j(d.value - 1).setTranslate(-t.value), a.value <= -(t.value - o.value) && j(0).setTranslate(t.value), a.value > -(t.value - o.value) && a.value < 0 && (j(d.value - 1).setTranslate(0), j(0).setTranslate(0)));
    }
    function _(pe) {
      const We = Tn(pe) ? pe : Math.floor((a.value - o.value / 2) / -o.value), { loop: ne } = e;
      return We <= -1 ? ne ? -1 : 0 : We >= d.value ? ne ? d.value : d.value - 1 : We;
    }
    function ve(pe) {
      const { loop: We } = e;
      return pe === -1 ? We ? d.value - 1 : 0 : pe === d.value ? We ? 0 : d.value - 1 : pe;
    }
    function ye(pe) {
      return e.loop ? pe < 0 ? d.value + pe : pe >= d.value ? pe - d.value : pe : Mn(pe, 0, d.value - 1);
    }
    function Ee() {
      return Go(this, null, function* () {
        const pe = a.value >= o.value, We = a.value <= -t.value, ne = 0, ue = -(t.value - o.value);
        i.value = !0, (pe || We) && (i.value = !0, a.value = We ? ne : ue, j(0).setTranslate(0), j(d.value - 1).setTranslate(0)), yield kn(), i.value = !1;
      });
    }
    function L() {
      H || (l.value = ye(U(e.initialIndex)), H = !0);
    }
    function Z() {
      const { autoplay: pe } = e;
      !pe || d.value <= 1 || (oe(), F = window.setTimeout(() => {
        on(), Z();
      }, U(pe)));
    }
    function oe() {
      F && clearTimeout(F);
    }
    function me(pe) {
      return Go(this, null, function* () {
        d.value <= 1 || !e.touchable || (E(pe), oe(), yield Ee(), i.value = !0);
      });
    }
    function I(pe) {
      const { touchable: We, vertical: ne } = e;
      !O.value || !We || (M(pe), W.value && (Ve(pe), a.value += ne ? y.value : b.value, ae()));
    }
    function K() {
      if (!O.value || (R(), !W.value))
        return;
      const { vertical: pe, onChange: We } = e, ne = pe ? w.value < 0 : k.value < 0, ue = pe ? z.value : S.value, Be = performance.now() - T.value <= lS && ue >= sS ? _(ne ? l.value + 1 : l.value - 1) : _();
      i.value = !1, a.value = Be * -o.value;
      const Je = l.value;
      l.value = ve(Be), Z(), Je !== l.value && C(We, l.value);
    }
    function de(pe) {
      e.navigation === "hover" && (s.value = pe);
    }
    function Se(pe) {
      return e.navigation !== "hover" ? "" : Ic(`--navigation${e.vertical ? "-vertical" : ""}-${pe}-animation`);
    }
    function Fe(pe) {
      if (!u.length || u.findIndex(({ isFocusing: ue }) => ue.value) === -1)
        return;
      const { key: ne } = pe;
      Ve(pe), ne === "ArrowLeft" && ln(), ne === "ArrowRight" && on();
    }
    function Me() {
      n.value && (i.value = !0, o.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = o.value * d.value, a.value = l.value * -o.value, u.forEach((pe) => {
        pe.setTranslate(0);
      }), Z(), setTimeout(() => {
        i.value = !1;
      }), f.forEach(({ onResize: pe }) => {
        pe();
      }));
    }
    function on(pe) {
      return Go(this, null, function* () {
        if (d.value <= 1)
          return;
        L();
        const { loop: We, onChange: ne } = e, ue = l.value;
        if (l.value = ye(ue + 1), (pe == null ? void 0 : pe.event) !== !1 && C(ne, l.value), yield Ee(), ue === d.value - 1 && We) {
          j(0).setTranslate(t.value), a.value = d.value * -o.value;
          return;
        }
        ue !== d.value - 1 && (a.value = l.value * -o.value);
      });
    }
    function ln(pe) {
      return Go(this, null, function* () {
        if (d.value <= 1)
          return;
        L();
        const { loop: We, onChange: ne } = e, ue = l.value;
        if (l.value = ye(ue - 1), (pe == null ? void 0 : pe.event) !== !1 && C(ne, l.value), yield Ee(), ue === 0 && We) {
          j(d.value - 1).setTranslate(-t.value), a.value = o.value;
          return;
        }
        ue !== 0 && (a.value = l.value * -o.value);
      });
    }
    function wn(pe, We) {
      if (d.value <= 1 || pe === l.value)
        return;
      pe = pe < 0 ? 0 : pe, pe = pe >= d.value ? d.value : pe;
      const ne = pe > l.value ? on : ln, ue = Math.abs(pe - l.value);
      Array.from({ length: ue }).forEach((ke, Be) => {
        ne({ event: Be === ue - 1 ? We == null ? void 0 : We.event : !1 });
      });
    }
    return {
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      trackTranslate: a,
      lockDuration: i,
      hovering: s,
      n: Ic,
      toSizeUnit: ze,
      classes: cS,
      handleTouchstart: me,
      handleTouchmove: I,
      handleTouchend: K,
      next: on,
      prev: ln,
      to: wn,
      resize: Me,
      toNumber: U,
      handleHovering: de,
      getNavigationAnimation: Se
    };
  }
});
Ev.render = fS;
var Ya = Ev;
re(Ya);
se(Ya, Ns);
const e5 = Ya;
var Hr = Ya;
function pS() {
  const { bindParent: e, index: n, parentProvider: o } = hn(gf);
  return e || An("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: o,
    bindSwipe: e
  };
}
const { name: vS, n: mS } = ee("swipe-item"), hS = ["aria-hidden"];
function gS(e, n) {
  return h(), P("div", {
    class: p(e.n()),
    style: q({
      width: e.vertical ? void 0 : e.toSizeUnit(e.size),
      height: e.vertical ? e.toSizeUnit(e.size) : void 0,
      transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.translate)})`
    }),
    tabindex: "-1",
    "aria-hidden": e.currentIndex !== e.index,
    onFocus: n[0] || (n[0] = (o) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (o) => e.isFocusing = !1)
  }, [
    V(e.$slots, "default")
  ], 46, hS);
}
const Bv = x({
  name: vS,
  setup() {
    const e = $(0), n = $(!1), { swipe: o, bindSwipe: r, index: t } = pS(), { size: a, currentIndex: i, vertical: l } = o, s = {
      index: t,
      isFocusing: B(() => n.value),
      setTranslate: u
    };
    r(s);
    function u(c) {
      e.value = c;
    }
    return {
      isFocusing: n,
      size: a,
      index: t,
      currentIndex: i,
      vertical: l,
      translate: e,
      n: mS,
      toSizeUnit: ze
    };
  }
});
Bv.render = gS;
var As = Bv;
re(As);
const n5 = As;
var Yr = As, bS = Object.defineProperty, Mc = Object.getOwnPropertySymbols, yS = Object.prototype.hasOwnProperty, kS = Object.prototype.propertyIsEnumerable, Nc = (e, n, o) => n in e ? bS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ac = (e, n) => {
  for (var o in n || (n = {}))
    yS.call(n, o) && Nc(e, o, n[o]);
  if (Mc)
    for (var o of Mc(n))
      kS.call(n, o) && Nc(e, o, n[o]);
  return e;
};
const Dv = Ac(Ac({
  show: Boolean,
  imagePreventDefault: Boolean,
  images: {
    type: Array,
    default: () => []
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: Boolean,
  "onUpdate:show": A(),
  onLongPress: A()
}, De(Ns, ["loop", "indicator", "onChange"])), De(br, [
  "lockScroll",
  "teleport",
  "closeOnKeyEscape",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onKeyEscape",
  // internal for function call closes the dialog
  "onRouteChange"
])), { name: $S, n: Vc, classes: wS } = ee("image-preview"), Ii = 12, Rc = 200, CS = 350, Lc = 200, SS = 500, vt = 1, PS = ["onTouchstart"], zS = ["src", "alt"];
function OS(e, n) {
  const o = Q("var-swipe-item"), r = Q("var-swipe"), t = Q("var-icon"), a = Q("var-popup");
  return h(), Ce(a, {
    "var-image-preview-cover": "",
    class: p(e.n("popup")),
    transition: e.n("$-fade"),
    overlay: !1,
    "close-on-click-overlay": !1,
    "close-on-key-escape": e.closeOnKeyEscape,
    "lock-scroll": e.lockScroll,
    teleport: e.teleport,
    show: e.show,
    "onUpdate:show": n[3] || (n[3] = (i) => e.show = i),
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onKeyEscape: e.onKeyEscape,
    onRouteChange: e.onRouteChange
  }, {
    default: ce(() => [
      X(r, Ue({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.toNumber(e.initialIndex),
        loop: e.loop,
        onChange: e.onChange
      }, e.$attrs), {
        default: ce(() => [
          (h(!0), P(
            Ne,
            null,
            Ke(e.images, (i, l) => (h(), Ce(o, {
              class: p(e.n("swipe-item")),
              "var-image-preview-cover": "",
              key: i
            }, {
              default: ce(() => [
                N("div", {
                  class: p(e.n("zoom-container")),
                  style: q({
                    transform: `scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,
                    transitionTimingFunction: e.transitionTimingFunction,
                    transitionDuration: e.transitionDuration
                  }),
                  onTouchstart: (s) => e.handleTouchstart(s, l),
                  onTouchmove: n[0] || (n[0] = (...s) => e.handleTouchmove && e.handleTouchmove(...s)),
                  onTouchend: n[1] || (n[1] = (...s) => e.handleTouchend && e.handleTouchend(...s)),
                  onTouchcancel: n[2] || (n[2] = (...s) => e.handleTouchcancel && e.handleTouchcancel(...s))
                }, [
                  N("img", {
                    role: "img",
                    class: p(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                    src: i,
                    alt: i
                  }, null, 10, zS)
                ], 46, PS)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        indicator: ce(({ index: i, length: l }) => [
          V(e.$slots, "indicator", {
            index: i,
            length: l
          }, () => [
            e.indicator && e.images.length > 1 ? (h(), P(
              "div",
              {
                key: 0,
                class: p(e.n("indicators"))
              },
              le(i + 1) + " / " + le(l),
              3
              /* TEXT, CLASS */
            )) : G("v-if", !0)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]),
      V(e.$slots, "close-icon", {}, () => [
        e.closeable ? (h(), Ce(t, {
          key: 0,
          class: p(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        }, null, 8, ["class", "onClick"])) : G("v-if", !0)
      ]),
      e.$slots.extra ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("extra"))
        },
        [
          V(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "transition", "close-on-key-escape", "lock-scroll", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onKeyEscape", "onRouteChange"]);
}
const Iv = x({
  name: $S,
  components: {
    VarSwipe: Hr,
    VarSwipeItem: Yr,
    VarPopup: Oo,
    VarIcon: Ze
  },
  inheritAttrs: !1,
  props: Dv,
  setup(e) {
    const n = Kn(e, "show"), o = $(1), r = $(0), t = $(0), a = $(), i = $(), l = $(!0), s = $(null), { moveX: u, moveY: c, distance: d, startTime: f, startTouch: v, moveTouch: g, endTouch: m } = hr(), k = B(() => {
      const { imagePreventDefault: L, show: Z } = e;
      return Z && L;
    });
    let w = null, b = null, y = !1;
    const S = {
      start: null,
      prev: null
    };
    je(() => document, "contextmenu", ae);
    function z(L) {
      o.value = U(L), l.value = !1, S.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Lc);
    }
    function O() {
      o.value = 1, r.value = 0, t.value = 0, l.value = !0, S.prev = null, a.value = void 0, i.value = void 0;
    }
    function D(L) {
      return S.prev ? d.value <= Ii && performance.now() - f.value <= Rc && S.prev === L : !1;
    }
    function T(L) {
      return !L || !S.start || !S.prev ? !1 : d.value <= Ii && performance.now() - f.value < CS && (L === S.start || L.parentNode === S.start);
    }
    function E() {
      m(), window.clearTimeout(b), y = !1, S.start = null;
    }
    function M(L) {
      if (m(), window.clearTimeout(b), y) {
        y = !1;
        return;
      }
      const Z = T(L.target);
      w = window.setTimeout(() => {
        Z && j(), S.start = null;
      }, Rc);
    }
    function R(L, Z) {
      window.clearTimeout(w), window.clearTimeout(b);
      const oe = L.currentTarget;
      if (S.start = oe, b = window.setTimeout(() => {
        y = !0, C(e.onLongPress, Z);
      }, SS), D(oe)) {
        o.value > vt ? O() : z(e.zoom);
        return;
      }
      v(L), S.prev = oe;
    }
    function W(L) {
      const { offsetWidth: Z, offsetHeight: oe } = L, { naturalWidth: me, naturalHeight: I } = L.querySelector(`.${Vc("image")}`);
      return {
        width: Z,
        height: oe,
        imageRadio: I / me,
        rootRadio: oe / Z,
        zoom: U(e.zoom)
      };
    }
    function H(L) {
      const { zoom: Z, imageRadio: oe, rootRadio: me, width: I, height: K } = W(L);
      if (!oe)
        return 0;
      const de = oe > me ? K / oe : I;
      return Math.max(0, (Z * de - I) / 2) / Z;
    }
    function F(L) {
      const { zoom: Z, imageRadio: oe, rootRadio: me, width: I, height: K } = W(L);
      if (!oe)
        return 0;
      const de = oe > me ? K : I * oe;
      return Math.max(0, (Z * de - K) / 2) / Z;
    }
    function Y(L) {
      if (!S.prev)
        return;
      g(L);
      const Z = L.currentTarget;
      if (d.value > Ii && window.clearTimeout(b), o.value > vt) {
        const oe = H(Z), me = F(Z);
        r.value = Mn(r.value + u.value, -oe, oe), t.value = Mn(t.value + c.value, -me, me);
      }
      S.prev = Z;
    }
    function j() {
      if (o.value > vt) {
        O(), setTimeout(() => C(e["onUpdate:show"], !1), Lc);
        return;
      }
      C(e["onUpdate:show"], !1);
    }
    function ae(L) {
      k.value && Ve(L);
    }
    function _(L) {
      var Z;
      (Z = s.value) == null || Z.prev(L);
    }
    function ve(L) {
      var Z;
      (Z = s.value) == null || Z.next(L);
    }
    function ye(L, Z) {
      var oe;
      (oe = s.value) == null || oe.to(L, Z);
    }
    function Ee(L) {
      L <= vt ? O() : z(L);
    }
    return {
      swipeRef: s,
      isPreventDefault: k,
      show: n,
      scale: o,
      translateX: r,
      translateY: t,
      canSwipe: l,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: Vc,
      classes: wS,
      toNumber: U,
      handleTouchstart: R,
      handleTouchmove: Y,
      handleTouchend: M,
      handleTouchcancel: E,
      close: j,
      prev: _,
      next: ve,
      to: ye,
      zoom: Ee
    };
  }
});
Iv.render = OS;
var ot = Iv, TS = Object.defineProperty, ES = Object.defineProperties, BS = Object.getOwnPropertyDescriptors, Fc = Object.getOwnPropertySymbols, DS = Object.prototype.hasOwnProperty, IS = Object.prototype.propertyIsEnumerable, Uc = (e, n, o) => n in e ? TS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, mt = (e, n) => {
  for (var o in n || (n = {}))
    DS.call(n, o) && Uc(e, o, n[o]);
  if (Fc)
    for (var o of Fc(n))
      IS.call(n, o) && Uc(e, o, n[o]);
  return e;
}, Hc = (e, n) => ES(e, BS(n));
let yo, Er = {};
function MS(e = {}) {
  return yn(e) ? Hc(mt({}, Er), { images: [e] }) : Xe(e) ? Hc(mt({}, Er), { images: e }) : mt(mt({}, Er), e);
}
function Vo(e) {
  if (!ro())
    return;
  Vo.close();
  const n = MS(e), o = _e(n);
  o.teleport = "body", yo = o;
  const { unmountInstance: r } = gr(ot, o, {
    onClose: () => C(o.onClose),
    onClosed: () => {
      C(o.onClosed), r(), yo === o && (yo = null);
    },
    onRouteChange: () => {
      r(), yo === o && (yo = null);
    },
    "onUpdate:show": (t) => {
      o.show = t;
    }
  });
  o.show = !0;
}
Vo.close = () => {
  if (yo != null) {
    const e = yo;
    yo = null, He().then(() => {
      e.show = !1;
    });
  }
};
Vo.setDefaultOptions = (e) => {
  Er = e;
};
Vo.resetDefaultOptions = () => {
  Er = {};
};
Vo.Component = ot;
re(ot);
re(ot, Vo);
se(Vo, Dv);
const o5 = ot;
var jr = Vo;
const Mv = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function NS() {
  const { bindChildren: e, length: n, childProviders: o } = gn(
    Mv
  );
  return {
    length: n,
    indexAnchors: o,
    bindIndexAnchors: e
  };
}
function AS() {
  const { parentProvider: e, index: n, bindParent: o } = hn(
    Mv
  );
  return o || An("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: o
  };
}
const Nv = {
  index: [Number, String]
}, { name: VS, n: RS, classes: LS } = ee("index-anchor");
function FS(e, n) {
  return h(), Ce(mr(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: ce(() => [
      N(
        "div",
        Ue({
          class: e.n()
        }, e.$attrs),
        [
          V(e.$slots, "default", {}, () => [
            Ie(
              le(e.name),
              1
              /* TEXT */
            )
          ])
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["offset-top", "z-index", "disabled", "css-mode"]);
}
const Av = x({
  name: VS,
  components: { VarSticky: pr },
  inheritAttrs: !1,
  props: Nv,
  setup(e) {
    const n = $(!1), o = B(() => e.index), r = $(null), { index: t, indexBar: a, bindIndexBar: i } = AS(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: c, zIndex: d } = a;
    i({
      index: t,
      name: o,
      setDisabled: g,
      getOffsetTop: v
    });
    function v() {
      return r.value ? r.value.$el ? r.value.$el.offsetTop : r.value.offsetTop : 0;
    }
    function g(m) {
      n.value = m;
    }
    return {
      n: RS,
      classes: LS,
      name: o,
      anchorEl: r,
      active: l,
      sticky: s,
      zIndex: d,
      disabled: n,
      cssMode: u,
      stickyOffsetTop: c,
      Transition: Qe
    };
  }
});
Av.render = FS;
var ja = Av;
re(ja);
se(ja, Nv);
const r5 = ja;
var Sl = ja;
const Vv = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  stickyCssMode: Boolean,
  hideList: Boolean,
  zIndex: {
    type: [Number, String],
    default: 1
  },
  highlightColor: String,
  duration: {
    type: [Number, String],
    default: 0
  },
  onClick: A(),
  onChange: A()
};
var Yc = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: US, n: HS, classes: YS } = ee("index-bar"), jS = ["onClick"];
function WS(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n()),
      ref: "barEl"
    },
    [
      V(e.$slots, "default"),
      N(
        "ul",
        {
          class: p(e.n("anchor-list")),
          style: q({ zIndex: e.toNumber(e.zIndex) + 2, display: e.hideList ? "none" : "block" })
        },
        [
          (h(!0), P(
            Ne,
            null,
            Ke(e.anchorNameList, (o) => (h(), P("li", {
              key: o,
              class: p(e.classes(e.n("anchor-item"), [e.active === o, e.n("anchor-item--active")])),
              style: q({ color: e.active === o && e.highlightColor ? e.highlightColor : void 0 }),
              onClick: (r) => e.anchorClick({ anchorName: o, manualCall: !0 })
            }, [
              V(e.$slots, "anchor-name", { anchorName: o }, () => [
                Ie(
                  le(o),
                  1
                  /* TEXT */
                )
              ])
            ], 14, jS))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    2
    /* CLASS */
  );
}
const Rv = x({
  name: US,
  props: Vv,
  setup(e) {
    const n = $(""), o = $(null), r = $([]), t = $(), a = B(() => e.sticky), i = B(() => e.stickyCssMode), l = B(() => xe(e.stickyOffsetTop)), s = B(() => e.zIndex), { length: u, indexAnchors: c, bindIndexAnchors: d } = NS();
    let f = null, v = !1;
    const g = {
      active: t,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    fe(
      () => u.value,
      () => Yc(this, null, function* () {
        yield kn(), r.value = c.filter(({ name: O }) => O.value != null).map(({ name: O }) => O.value);
      })
    ), mn(y), Ht(S), vr(() => {
      v = !0, S();
    }), Do(() => {
      !v || t.value === void 0 || (b({
        anchorName: t.value,
        options: { event: !1 }
      }), v = !1);
    }), d(g);
    function m(O, D) {
      const T = zo(O) ? O.name.value : O;
      T === t.value || T === void 0 || (t.value = T, (D == null ? void 0 : D.event) !== !1 && C(e.onChange, T));
    }
    function k() {
      const { top: O } = an(f), { top: D } = an(o.value);
      return Fo(f) - O + D;
    }
    function w() {
      const O = Fo(f), D = f === window ? document.body.scrollHeight : f.scrollHeight, T = k();
      c.forEach((E, M) => {
        const R = E.getOffsetTop(), W = O - R + l.value - T, H = M === c.length - 1 ? D : c[M + 1].getOffsetTop() - E.getOffsetTop();
        E.setDisabled(!0), W >= 0 && W < H && n.value === "" && (E.setDisabled(!1), m(E));
      });
    }
    function b(O) {
      return Yc(this, arguments, function* ({ anchorName: D, manualCall: T = !1, options: E }) {
        if (T && C(e.onClick, D), D === t.value && !v)
          return;
        const M = c.find(({ name: Y }) => D === Y.value);
        if (!M)
          return;
        const R = k(), H = M.getOffsetTop() - l.value + R, F = is(f);
        n.value = D, m(D, E), yield Ir(f, {
          left: F,
          top: H,
          animation: Yf,
          duration: U(e.duration)
        }), yield kn(), n.value = "";
      });
    }
    function y() {
      f = To(o.value), f.addEventListener("scroll", w);
    }
    function S() {
      f && f.removeEventListener("scroll", w);
    }
    function z(O, D) {
      Dr(() => b({ anchorName: O, options: D }));
    }
    return {
      barEl: o,
      active: t,
      zIndex: s,
      anchorNameList: r,
      n: HS,
      classes: YS,
      toNumber: U,
      scrollTo: z,
      anchorClick: b
    };
  }
});
Rv.render = WS;
var Wa = Rv;
re(Wa);
se(Wa, Vv);
const t5 = Wa;
var Pl = Wa;
const Lv = {
  type: {
    type: String,
    default: "default"
  },
  href: String,
  target: String,
  rel: String,
  to: [String, Object],
  replace: Boolean,
  underline: {
    type: String,
    default: "always"
  },
  disabled: Boolean,
  textSize: [String, Number],
  textColor: String,
  onClick: A()
}, { name: KS, n: qS, classes: XS } = ee("link");
function GS(e, n) {
  return h(), Ce(mr(e.tag), Ue(e.linkProps, {
    class: e.classes(
      e.n(),
      e.n("$--box"),
      e.n("$--inline-flex"),
      e.n(`--${e.type}`),
      [e.underline !== "none", e.n(`--underline-${e.underline}`)],
      [e.disabled, e.n("--disabled")],
      [e.isFocusing && !e.inMobile(), e.n("--focusing")]
    ),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick,
    onFocus: n[0] || (n[0] = (o) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (o) => e.isFocusing = !1)
  }), {
    default: ce(() => [
      V(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const Fv = x({
  name: KS,
  props: Lv,
  setup(e) {
    const n = $(!1), o = B(() => {
      const { disabled: a, href: i, to: l } = e;
      return a ? "span" : i ? "a" : l ? "router-link" : "a";
    }), r = B(() => {
      const { disabled: a, href: i, target: l, to: s, replace: u, rel: c } = e;
      return a ? {} : i ? { href: i, target: l, rel: c } : s ? { to: s, target: l, replace: u } : {};
    });
    function t(a) {
      e.disabled || C(e.onClick, a);
    }
    return {
      tag: o,
      linkProps: r,
      isFocusing: n,
      inMobile: St,
      n: qS,
      classes: XS,
      handleClick: t,
      toSizeUnit: ze
    };
  }
});
Fv.render = GS;
var Ka = Fv;
re(Ka);
se(Ka, Lv);
const a5 = Ka;
var zl = Ka;
const Uv = {
  loading: Boolean,
  immediateCheck: {
    type: Boolean,
    default: !0
  },
  finished: Boolean,
  error: Boolean,
  offset: {
    type: [String, Number],
    default: 0
  },
  loadingText: String,
  finishedText: String,
  errorText: String,
  onLoad: A(),
  "onUpdate:loading": A(),
  "onUpdate:error": A()
}, Hv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function ZS() {
  const { bindChildren: e, childProviders: n, length: o } = gn(
    Hv
  );
  return {
    length: o,
    tabItemList: n,
    bindTabItem: e
  };
}
const Yv = Symbol("TAB_ITEM_BIND_LIST_KEY");
function JS() {
  const { parentProvider: e, bindParent: n, index: o } = hn(
    Hv
  );
  return n || An("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: o,
    tabsItems: e,
    bindTabsItems: n
  };
}
function QS() {
  const { childProviders: e, bindChildren: n, length: o } = gn(Yv);
  return {
    length: o,
    lists: e,
    bindLists: n
  };
}
function _S() {
  const { parentProvider: e, bindParent: n, index: o } = hn(Yv);
  return {
    index: o,
    tabItem: e,
    bindTabItem: n
  };
}
var xS = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: e6, n: n6, classes: o6 } = ee("list");
function r6(e, n) {
  const o = Q("var-loading"), r = Ye("ripple");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [
      V(e.$slots, "default"),
      e.loading ? V(e.$slots, "loading", { key: 0 }, () => {
        var t;
        return [
          N(
            "div",
            {
              class: p(e.n("loading"))
            },
            [
              N(
                "div",
                {
                  class: p(e.n("loading-text"))
                },
                le((t = e.loadingText) != null ? t : (e.pt ? e.pt : e.t)("listLoadingText")),
                3
                /* TEXT, CLASS */
              ),
              X(o, {
                size: "mini",
                radius: 10
              })
            ],
            2
            /* CLASS */
          )
        ];
      }) : G("v-if", !0),
      e.finished ? V(e.$slots, "finished", { key: 1 }, () => {
        var t;
        return [
          N(
            "div",
            {
              class: p(e.n("finished"))
            },
            le((t = e.finishedText) != null ? t : (e.pt ? e.pt : e.t)("listFinishedText")),
            3
            /* TEXT, CLASS */
          )
        ];
      }) : G("v-if", !0),
      e.error ? V(e.$slots, "error", { key: 2 }, () => {
        var t;
        return [
          Ae((h(), P(
            "div",
            {
              class: p(e.n("error")),
              onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
            },
            [
              Ie(
                le((t = e.errorText) != null ? t : (e.pt ? e.pt : e.t)("listErrorText")),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          )), [
            [r]
          ])
        ];
      }) : G("v-if", !0),
      N(
        "div",
        {
          class: p(e.n("detector")),
          ref: "detectorEl"
        },
        null,
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const jv = x({
  name: e6,
  directives: { Ripple: nn },
  components: { VarLoading: cr },
  props: Uv,
  setup(e) {
    const n = $(null), o = $(null), { tabItem: r, bindTabItem: t } = _S(), { t: a } = ao();
    let i;
    C(t, {}), r && fe(() => r.current.value, c), fe(() => [e.loading, e.error, e.finished], c), mn(() => {
      i = To(n.value), i.addEventListener("scroll", c), e.immediateCheck && c();
    }), Zr(u);
    function l() {
      C(e["onUpdate:error"], !1), C(e["onUpdate:loading"], !0), C(e.onLoad);
    }
    function s() {
      const { bottom: d } = an(i), { bottom: f } = an(o.value);
      return Math.floor(f) - xe(e.offset) <= d;
    }
    function u() {
      i && i.removeEventListener("scroll", c);
    }
    function c() {
      return xS(this, null, function* () {
        yield He(), !(e.loading || e.finished || e.error || (r == null ? void 0 : r.current.value) === !1 || !s()) && l();
      });
    }
    return {
      listEl: n,
      detectorEl: o,
      pt: a,
      t: rn,
      isNumber: Tn,
      load: l,
      check: c,
      n: n6,
      classes: o6
    };
  }
});
jv.render = r6;
var qa = jv;
re(qa);
se(qa, Uv);
const i5 = qa;
var Ol = qa;
const t6 = {
  value: {
    type: Number,
    default: 0
  },
  opacity: {
    type: Number,
    default: 0
  },
  error: Boolean,
  color: String,
  errorColor: String,
  height: [Number, String],
  top: [Number, String],
  transitionDuration: Number
}, {
  name: a6,
  classes: i6,
  n: jc
} = ee("loading-bar");
var l6 = x({
  name: a6,
  props: t6,
  setup(e) {
    return () => X("div", {
      class: i6(jc(), [e.error, jc("--error")]),
      style: {
        zIndex: Nn.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: ze(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: ze(e.top),
        transitionDuration: e.transitionDuration == null ? void 0 : `${e.transitionDuration}ms`
      }
    }, null);
  }
});
const Vs = 200;
let Wv, Kv, qv, Xv, Xa, Wc, Gv = {};
const s6 = {
  value: 0,
  opacity: 0,
  error: !1
}, tn = _e(s6);
function u6(e) {
  Object.assign(tn, e), Gv = e;
}
const c6 = () => {
  Object.keys(Gv).forEach((e) => {
    tn[e] !== void 0 && (tn[e] = void 0);
  });
}, Zv = () => {
  Wc || (Wc = !0, gr(l6, tn));
}, Rs = () => {
  Wv = window.setTimeout(() => {
    tn.transitionDuration = void 0, !(tn.value >= 95) && (tn.value += tn.value < 70 ? Math.round(5 * Math.random()) : Math.random(), Rs());
  }, 200);
}, Ls = () => {
  window.clearTimeout(Wv), window.clearTimeout(Xa), window.clearTimeout(qv), window.clearTimeout(Kv), window.clearTimeout(Xv);
}, Jv = () => {
  Ls(), tn.value = 100, Xa = window.setTimeout(() => {
    tn.opacity = 0, Xv = window.setTimeout(() => {
      tn.error = !1;
    }, 250);
  }, Vs + 100);
}, d6 = () => {
  Ls(), tn.error = !1, tn.value = 0, tn.transitionDuration = 0, Zv(), Xa = window.setTimeout(() => {
    tn.opacity = 1;
  }, Vs), Rs();
}, f6 = () => {
  var e;
  qv = window.setTimeout(Jv, (e = tn.finishDelay) != null ? e : 0);
}, p6 = () => {
  Ls(), tn.error = !0, tn.value === 100 && (tn.value = 0, tn.transitionDuration = 0), Zv(), Xa = window.setTimeout(() => {
    tn.opacity = 1;
  }, Vs), Rs(), Kv = window.setTimeout(Jv, 300);
}, Qv = {
  start: d6,
  finish: f6,
  error: p6,
  setDefaultOptions: u6,
  resetDefaultOptions: c6
}, l5 = Qv;
var Tl = Qv;
const _v = {
  tag: {
    type: String,
    default: "div"
  },
  locale: {
    type: String,
    default: "zh-CN"
  },
  messages: {
    type: Object
  }
};
var v6 = Object.defineProperty, m6 = Object.defineProperties, h6 = Object.getOwnPropertyDescriptors, Kc = Object.getOwnPropertySymbols, g6 = Object.prototype.hasOwnProperty, b6 = Object.prototype.propertyIsEnumerable, qc = (e, n, o) => n in e ? v6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, y6 = (e, n) => {
  for (var o in n || (n = {}))
    g6.call(n, o) && qc(e, o, n[o]);
  if (Kc)
    for (var o of Kc(n))
      b6.call(n, o) && qc(e, o, n[o]);
  return e;
}, k6 = (e, n) => m6(e, h6(n));
const { name: $6, n: w6 } = ee("locale-provider"), C6 = x({
  name: $6,
  props: _v,
  setup(e, { slots: n }) {
    const o = B(
      () => {
        var t;
        return Object.entries((t = e.messages) != null ? t : {}).reduce((a, [i, l]) => (a[i] = k6(y6({}, l), {
          lang: i
        }), a), {});
      }
    );
    db({
      t: r
    });
    function r(t) {
      if (Br(o.value, e.locale) && Br(o.value[e.locale], t))
        return o.value[e.locale][t];
    }
    return () => Yt(
      e.tag,
      {
        class: w6()
      },
      C(n.default)
    );
  }
});
var Ga = C6;
re(Ga);
se(Ga, _v);
const s5 = Ga;
var El = Ga;
const xv = Symbol("SELECT_BIND_OPTION_KEY");
function S6() {
  const { length: e, childProviders: n, bindChildren: o } = gn(xv);
  return {
    length: e,
    options: n,
    bindOptions: o
  };
}
function P6() {
  const { index: e, parentProvider: n, bindParent: o } = hn(xv);
  return o || An("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: o
  };
}
const em = {
  label: {},
  value: {},
  disabled: Boolean,
  // internal
  option: Object
}, { name: z6, n: O6, classes: T6 } = ee("option"), E6 = ["tabindex"];
function B6(e, n) {
  const o = Q("var-checkbox"), r = Q("maybe-v-node"), t = Q("var-hover-overlay"), a = Ye("ripple"), i = Ye("hover");
  return Ae((h(), P("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
    style: q({
      color: e.optionSelected ? e.focusColor : void 0
    }),
    tabindex: e.disabled ? void 0 : "-1",
    onFocus: n[2] || (n[2] = (l) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (l) => e.isFocusing = !1),
    onClick: n[4] || (n[4] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    N(
      "div",
      {
        class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: q({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ),
    e.multiple ? (h(), Ce(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => e.optionSelected = l),
      "checked-color": e.focusColor,
      disabled: e.disabled,
      onClick: n[1] || (n[1] = Wn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "checked-color", "disabled", "onChange"])) : G("v-if", !0),
    V(e.$slots, "default", { selected: e.optionSelected }, () => [
      N(
        "div",
        {
          class: p(e.classes(e.n("text"), e.n("$--ellipsis")))
        },
        [
          X(r, { is: e.labelVNode }, null, 8, ["is"])
        ],
        2
        /* CLASS */
      )
    ]),
    X(t, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 46, E6)), [
    [a, { disabled: e.disabled }],
    [i, e.handleHovering, "desktop"]
  ]);
}
const nm = x({
  name: z6,
  directives: { Ripple: nn, Hover: En },
  components: {
    VarCheckbox: lr,
    VarHoverOverlay: Vn,
    MaybeVNode: Jr
  },
  props: em,
  setup(e) {
    const n = $(), o = $(!1), r = $(!1), t = B(() => r.value), a = B(
      () => {
        var z;
        return Rn(e.label) ? e.label(
          (z = e.option) != null ? z : {
            label: e.label,
            value: e.value,
            disabled: e.disabled
          },
          r.value
        ) : e.label;
      }
    ), i = B(() => e.value), { select: l, bindSelect: s } = P6(), { multiple: u, focusColor: c, onSelect: d, computeLabel: f } = l, { hovering: v, handleHovering: g } = _n(), m = {
      label: a,
      value: i,
      selected: t,
      sync: S
    };
    fe([() => e.label, () => e.value], f), s(m), je(() => window, "keydown", w), je(() => window, "keyup", b);
    function k() {
      e.disabled || y();
    }
    function w(z) {
      o.value && ((z.key === " " || z.key === "Enter") && Ve(z), z.key === "Enter" && n.value.click());
    }
    function b(z) {
      o.value && z.key === " " && (Ve(z), n.value.click());
    }
    function y() {
      u.value && (r.value = !r.value), d(m);
    }
    function S(z) {
      r.value = z;
    }
    return {
      root: n,
      optionSelected: r,
      multiple: u,
      focusColor: c,
      hovering: v,
      isFocusing: o,
      labelVNode: a,
      n: O6,
      classes: T6,
      handleHovering: g,
      handleClick: k,
      handleSelect: y
    };
  }
});
nm.render = B6;
var Za = nm;
re(Za);
se(Za, em);
const u5 = Za;
var Ft = Za;
const om = {
  show: Boolean,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: [String, Object, Boolean],
  closeOnKeyEscape: {
    type: Boolean,
    default: !0
  },
  onClick: A(),
  onKeyEscape: A(),
  "onUpdate:show": A()
}, {
  name: D6,
  n: Xc
} = ee("overlay");
var Ja = x({
  name: D6,
  inheritAttrs: !1,
  props: om,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const {
      zIndex: r
    } = _r(() => e.show, 1), {
      onStackTop: t
    } = ds(() => e.show, r), {
      disabled: a
    } = qo();
    Qr(() => e.show, () => e.lockScroll), je(() => window, "keydown", i);
    function i(c) {
      !t() || c.key !== "Escape" || !e.show || (C(e.onKeyEscape), e.closeOnKeyEscape && (Ve(c), C(e["onUpdate:show"], !1)));
    }
    function l() {
      C(e.onClick), C(e["onUpdate:show"], !1);
    }
    function s() {
      return X("div", Ue({
        class: Xc(),
        style: {
          zIndex: r.value
        }
      }, o, {
        onClick: l
      }), [C(n.default)]);
    }
    function u() {
      return X(Qe, {
        name: Xc("--fade")
      }, {
        default: () => [e.show && s()]
      });
    }
    return () => {
      const {
        teleport: c
      } = e;
      return c ? X(oo, {
        to: c,
        disabled: a.value
      }, {
        default: () => [u()]
      }) : u();
    };
  }
});
re(Ja);
se(Ja, om);
const c5 = Ja;
var Bl = Ja;
const rm = {
  current: [Number, String],
  size: {
    type: [Number, String],
    default: 10
  },
  total: {
    type: [Number, String],
    default: 0
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  maxPagerCount: {
    type: Number,
    default: 3
  },
  disabled: Boolean,
  simple: {
    type: Boolean,
    default: !0
  },
  showSizeChanger: {
    type: Boolean,
    default: !0
  },
  showQuickJumper: Boolean,
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100]
  },
  showTotal: Function,
  onChange: A(),
  "onUpdate:current": A(),
  "onUpdate:size": A()
}, { name: I6, n: M6, classes: N6 } = ee("pagination"), A6 = ["item-mode", "onClick"];
function V6(e, n) {
  const o = Q("var-icon"), r = Q("var-input"), t = Q("var-menu-option"), a = Q("var-menu-select"), i = Ye("ripple");
  return h(), P(
    "ul",
    {
      class: p(e.n())
    },
    [
      Ae((h(), P(
        "li",
        {
          class: p(
            e.classes(
              e.n("item"),
              e.n("prev"),
              [e.current <= 1 || e.disabled, e.n("item--disabled")],
              [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)]
            )
          ),
          onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
        },
        [
          V(e.$slots, "prev", {}, () => [
            X(o, { name: "chevron-left" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current <= 1 || e.disabled }]
      ]),
      e.simple ? (h(), P(
        "li",
        {
          key: 0,
          class: p(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
        },
        [
          X(r, {
            "var-pagination-cover": "",
            hint: !1,
            disabled: e.disabled,
            modelValue: e.simpleCurrentValue,
            "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
            onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
            onKeydown: n[3] || (n[3] = Ys((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
          }, null, 8, ["disabled", "modelValue"]),
          N("span", null, [
            Ie(
              " / " + le(e.pageCount) + " ",
              1
              /* TEXT */
            ),
            N(
              "div",
              {
                class: p(e.n("simple-line"))
              },
              null,
              2
              /* CLASS */
            )
          ])
        ],
        2
        /* CLASS */
      )) : (h(!0), P(
        Ne,
        { key: 1 },
        Ke(e.pageList, (l, s) => Ae((h(), P("li", {
          key: s,
          "item-mode": e.getMode(l, s),
          class: p(
            e.classes(
              e.n("item"),
              e.formatElevation(e.elevation, 2),
              [l === e.current && !e.disabled, e.n("item--active")],
              [e.isHideEllipsis(l, s), e.n("item--hide")],
              [e.disabled, e.n("item--disabled")],
              [l === e.current && e.disabled, e.n("item--disabled--active")]
            )
          ),
          onClick: (u) => e.clickItem(l, s)
        }, [
          Ie(
            le(l),
            1
            /* TEXT */
          )
        ], 10, A6)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Ae((h(), P(
        "li",
        {
          class: p(
            e.classes(
              e.n("item"),
              e.n("next"),
              [e.current >= e.pageCount || e.disabled, e.n("item--disabled")],
              [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)]
            )
          ),
          onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
        },
        [
          V(e.$slots, "next", {}, () => [
            X(o, { name: "chevron-right" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current >= e.pageCount || e.disabled }]
      ]),
      e.showSizeChanger ? (h(), P(
        "li",
        {
          key: 2,
          class: p(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
        },
        [
          X(a, {
            placement: "cover-top",
            disabled: e.disabled,
            modelValue: e.size,
            "onUpdate:modelValue": n[5] || (n[5] = (l) => e.size = l)
          }, {
            options: ce(() => [
              (h(!0), P(
                Ne,
                null,
                Ke(e.sizeOption, (l, s) => (h(), Ce(t, {
                  key: s,
                  value: l,
                  onClick: e.clickSize
                }, {
                  default: ce(() => [
                    Ie(
                      le(l) + le((e.pt ? e.pt : e.t)("paginationItem")) + " / " + le((e.pt ? e.pt : e.t)("paginationPage")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["value", "onClick"]))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            default: ce(() => [
              N(
                "div",
                {
                  class: p(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")]))
                },
                [
                  N(
                    "span",
                    null,
                    le(e.size) + le((e.pt ? e.pt : e.t)("paginationItem")) + " / " + le((e.pt ? e.pt : e.t)("paginationPage")),
                    1
                    /* TEXT */
                  ),
                  X(o, {
                    class: p(e.n("size--open-icon")),
                    "var-pagination-cover": "",
                    name: "menu-down"
                  }, null, 8, ["class"])
                ],
                2
                /* CLASS */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "modelValue"])
        ],
        2
        /* CLASS */
      )) : G("v-if", !0),
      e.showQuickJumper && !e.simple ? (h(), P(
        "li",
        {
          key: 3,
          class: p(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
        },
        [
          Ie(
            le((e.pt ? e.pt : e.t)("paginationJump")) + " ",
            1
            /* TEXT */
          ),
          X(r, {
            modelValue: e.quickJumperValue,
            "onUpdate:modelValue": n[6] || (n[6] = (l) => e.quickJumperValue = l),
            disabled: e.disabled,
            hint: !1,
            "var-pagination-cover": "",
            onBlur: n[7] || (n[7] = (l) => e.setPage("quick", e.quickJumperValue, l)),
            onKeydown: n[8] || (n[8] = Ys((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : G("v-if", !0),
      e.totalText ? (h(), P(
        "li",
        {
          key: 4,
          class: p(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
        },
        le(e.totalText),
        3
        /* TEXT, CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const tm = x({
  name: I6,
  components: {
    VarMenuSelect: Lr,
    VarMenuOption: sr,
    VarIcon: Ze,
    VarInput: Nr
  },
  directives: { Ripple: nn },
  props: rm,
  setup(e) {
    const n = $(""), o = $("1"), r = $(!1), t = $(!1), a = $(U(e.current) || 1), i = $(U(e.size) || 10), l = $([]), s = B(() => Math.ceil(e.maxPagerCount / 2)), u = B(() => Math.ceil(U(e.total) / U(i.value))), c = B(() => {
      const y = i.value * (a.value - 1) + 1, S = Math.min(i.value * a.value, U(e.total));
      return [y, S];
    }), d = B(() => e.showTotal ? e.showTotal(U(e.total), c.value) : ""), { t: f } = ao();
    fe([() => e.current, () => e.size], ([y, S]) => {
      a.value = U(y) || 1, i.value = U(S || 10);
    }), fe(
      [a, i, u],
      ([y, S, z], [O, D]) => {
        let T = [];
        const { maxPagerCount: E, total: M, onChange: R } = e, W = Math.ceil(U(M) / U(D)), H = z - (E - s.value) - 1;
        if (o.value = `${y}`, z - 2 > E) {
          if (O === void 0 || z !== W)
            for (let F = 2; F < E + 2; F++) T.push(F);
          if (y <= E && y < H) {
            T = [];
            for (let F = 1; F < E + 1; F++)
              T.push(F + 1);
            r.value = !0, t.value = !1;
          }
          if (y > E && y < H) {
            T = [];
            for (let F = 1; F < E + 1; F++)
              T.push(y + F - s.value);
            r.value = y === 2 && E === 1, t.value = !1;
          }
          if (y >= H) {
            T = [];
            for (let F = 1; F < E + 1; F++)
              T.push(z - (E - F) - 1);
            r.value = !1, t.value = !0;
          }
          T = [1, "...", ...T, "...", z];
        } else
          for (let F = 1; F <= z; F++) T.push(F);
        l.value = T, O != null && z > 0 && C(R, y, S), C(e["onUpdate:current"], y), C(e["onUpdate:size"], S);
      },
      {
        immediate: !0
      }
    );
    function v(y, S) {
      return Tn(y) ? !1 : S === 1 ? r.value : t.value;
    }
    function g(y, S) {
      return Tn(y) ? "basic" : S === 1 ? "head" : "tail";
    }
    function m(y, S) {
      if (!(y === a.value || e.disabled)) {
        if (y === "...") {
          a.value = S === 1 ? Math.max(a.value - e.maxPagerCount, 1) : Math.min(a.value + e.maxPagerCount, u.value);
          return;
        }
        if (y === "prev") {
          a.value = w(a.value - 1);
          return;
        }
        if (y === "next") {
          a.value = w(a.value + 1);
          return;
        }
        Tn(y) && (a.value = y);
      }
    }
    function k() {
      const y = w(a.value);
      o.value = String(y), a.value = y;
    }
    function w(y) {
      return y > u.value ? u.value : y < 1 ? 1 : y;
    }
    function b(y, S, z) {
      z.target.blur();
      const O = w(U(S));
      o.value = String(O), a.value = O, y === "quick" && (n.value = "");
    }
    return {
      current: a,
      size: i,
      pageCount: u,
      pageList: l,
      quickJumperValue: n,
      simpleCurrentValue: o,
      totalText: d,
      pt: f,
      t: rn,
      n: M6,
      classes: N6,
      getMode: g,
      isHideEllipsis: v,
      clickItem: m,
      clickSize: k,
      setPage: b,
      toNumber: U,
      formatElevation: fn
    };
  }
});
tm.render = V6;
var Qa = tm;
re(Qa);
se(Qa, rm);
const d5 = Qa;
var Dl = Qa;
const am = {
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  ripple: Boolean,
  radius: [Number, String],
  width: [Number, String],
  height: [Number, String],
  round: Boolean,
  inline: Boolean,
  onClick: A()
}, { name: R6, n: L6, classes: F6 } = ee("paper");
function U6(e, n) {
  const o = Ye("ripple");
  return Ae((h(), P(
    "div",
    {
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          e.formatElevation(e.elevation, 2),
          [e.onClick, e.n("--cursor")],
          [e.round, e.n("--round")],
          [e.inline, e.n("$--inline-flex")]
        )
      ),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      V(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: !e.ripple }]
  ]);
}
const im = x({
  name: R6,
  directives: { Ripple: nn },
  props: am,
  setup(e) {
    function n(o) {
      C(e.onClick, o);
    }
    return {
      n: L6,
      classes: F6,
      formatElevation: fn,
      toSizeUnit: ze,
      handleClick: n
    };
  }
});
im.render = U6;
var _a = im;
re(_a);
se(_a, am);
const f5 = _a;
var Il = _a, H6 = Object.defineProperty, Gc = Object.getOwnPropertySymbols, Y6 = Object.prototype.hasOwnProperty, j6 = Object.prototype.propertyIsEnumerable, Zc = (e, n, o) => n in e ? H6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, W6 = (e, n) => {
  for (var o in n || (n = {}))
    Y6.call(n, o) && Zc(e, o, n[o]);
  if (Gc)
    for (var o of Gc(n))
      j6.call(n, o) && Zc(e, o, n[o]);
  return e;
};
const lm = W6({
  modelValue: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => []
  },
  title: String,
  textKey: {
    type: String,
    default: "text"
  },
  valueKey: {
    type: String,
    default: "value"
  },
  childrenKey: {
    type: String,
    default: "children"
  },
  toolbar: {
    type: Boolean,
    default: !0
  },
  cascade: Boolean,
  optionHeight: {
    type: [Number, String],
    default: 44
  },
  optionCount: {
    type: [Number, String],
    default: 6
  },
  columnsCount: [String, Number],
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonTextColor: String,
  cancelButtonTextColor: String,
  // dynamic internal
  dynamic: Boolean,
  onChange: A(),
  onConfirm: A(),
  onCancel: A(),
  "onUpdate:modelValue": A()
}, De(br, [
  "show",
  "onUpdate:show",
  "closeOnClickOverlay",
  "closeOnKeyEscape",
  "teleport",
  "safeArea",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onRouteChange",
  "onKeyEscape"
])), { name: K6, n: q6, classes: X6 } = ee("picker"), Jc = 300, G6 = 15, Qc = 200, Z6 = 1e3;
let _c = 0;
const J6 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], Q6 = ["onTransitionend"], _6 = ["onClick"];
function x6(e, n) {
  const o = Q("var-button");
  return h(), Ce(
    mr(e.dynamic ? e.n("$-popup") : e.Transition),
    Ue(
      e.dynamic ? {
        onOpen: e.onOpen,
        onOpened: e.onOpened,
        onClose: e.onClose,
        onClosed: e.onClosed,
        onClickOverlay: e.onClickOverlay,
        onRouteChange: e.onRouteChange,
        onKeyEscape: e.onKeyEscape,
        closeOnClickOverlay: e.closeOnClickOverlay,
        closeOnKeyEscape: e.closeOnKeyEscape,
        teleport: e.teleport,
        show: e.show,
        safeArea: e.safeArea,
        "onUpdate:show": e.handlePopupUpdateShow,
        position: "bottom",
        class: e.n("popup")
      } : null,
      { "var-picker-cover": "" }
    ),
    {
      default: ce(() => [
        N(
          "div",
          Ue({
            class: e.n()
          }, e.$attrs),
          [
            e.toolbar ? (h(), P(
              "div",
              {
                key: 0,
                class: p(e.n("toolbar"))
              },
              [
                V(e.$slots, "cancel", {}, () => [
                  X(o, {
                    class: p(e.n("cancel-button")),
                    "var-picker-cover": "",
                    text: "",
                    "text-color": e.cancelButtonTextColor,
                    onClick: e.cancel
                  }, {
                    default: ce(() => {
                      var r;
                      return [
                        Ie(
                          le((r = e.cancelButtonText) != null ? r : (e.pt ? e.pt : e.t)("pickerCancelButtonText")),
                          1
                          /* TEXT */
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["class", "text-color", "onClick"])
                ]),
                V(e.$slots, "title", {}, () => {
                  var r;
                  return [
                    N(
                      "div",
                      {
                        class: p(e.n("title"))
                      },
                      le((r = e.title) != null ? r : (e.pt ? e.pt : e.t)("pickerTitle")),
                      3
                      /* TEXT, CLASS */
                    )
                  ];
                }),
                V(e.$slots, "confirm", {}, () => [
                  X(o, {
                    class: p(e.n("confirm-button")),
                    text: "",
                    "var-picker-cover": "",
                    "text-color": e.confirmButtonTextColor,
                    onClick: e.confirm
                  }, {
                    default: ce(() => {
                      var r;
                      return [
                        Ie(
                          le((r = e.confirmButtonText) != null ? r : (e.pt ? e.pt : e.t)("pickerConfirmButtonText")),
                          1
                          /* TEXT */
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["class", "text-color", "onClick"])
                ])
              ],
              2
              /* CLASS */
            )) : G("v-if", !0),
            N(
              "div",
              {
                class: p(e.n("columns")),
                style: q({ height: `${e.columnHeight}px` })
              },
              [
                (h(!0), P(
                  Ne,
                  null,
                  Ke(e.scrollColumns, (r) => (h(), P("div", {
                    class: p(e.n("column")),
                    key: r.id,
                    onTouchstartPassive: (t) => e.handleTouchstart(t, r),
                    onTouchmove: Wn((t) => e.handleTouchmove(t, r), ["prevent"]),
                    onTouchend: (t) => e.handleTouchend(r)
                  }, [
                    N("div", {
                      class: p(e.n("scroller")),
                      ref_for: !0,
                      ref: (t) => e.setScrollEl(t, r),
                      style: q({
                        transform: `translateY(${r.translate}px)`,
                        transitionDuration: `${r.duration}ms`,
                        transitionProperty: r.duration ? "transform" : "none"
                      }),
                      onTransitionend: (t) => e.handleTransitionend(r)
                    }, [
                      (h(!0), P(
                        Ne,
                        null,
                        Ke(r.column, (t, a) => (h(), P("div", {
                          key: e.getValue(t),
                          class: p(e.classes(e.n("option"), t.className)),
                          style: q({ height: `${e.optionHeight}px` }),
                          onClick: (i) => e.handleClick(r, a)
                        }, [
                          N(
                            "div",
                            {
                              class: p(e.classes(e.n("text"), t.textClassName))
                            },
                            le(t[e.getOptionKey("text")]),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 14, _6))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, Q6)
                  ], 42, J6))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                N(
                  "div",
                  {
                    class: p(e.n("picked")),
                    style: q({
                      top: `${e.center}px`,
                      height: `${e.optionHeight}px`
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                N(
                  "div",
                  {
                    class: p(e.n("mask")),
                    style: q({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                )
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          16
          /* FULL_PROPS */
        )
      ]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
const sm = x({
  name: K6,
  components: {
    VarButton: zn,
    VarPopup: Oo
  },
  inheritAttrs: !1,
  props: lm,
  setup(e) {
    const n = Kn(e, "modelValue"), o = $([]), r = B(() => U(e.columnsCount)), t = B(() => xe(e.optionHeight)), a = B(() => xe(e.optionCount)), i = B(() => a.value * t.value / 2 - t.value / 2), l = B(() => a.value * t.value), { prevY: s, moveY: u, dragging: c, startTouch: d, moveTouch: f, endTouch: v } = hr(), { t: g } = ao();
    let m = [];
    D(), fe(() => e.columns, D, { deep: !0 }), fe(() => n.value, D);
    function k(I) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[I];
    }
    function w(I) {
      var K;
      return (K = I[k("value")]) != null ? K : I[k("text")];
    }
    function b(I) {
      m = [...I];
    }
    function y(I) {
      return (e.columnsCount != null ? I.slice(0, r.value) : I).map((de, Se) => {
        const Fe = {
          id: _c++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: de,
          scrollEl: null,
          scrolling: !1
        }, Me = n.value[Se], on = Fe.column.findIndex((ln) => Me === w(ln));
        return Fe.index = on === -1 ? 0 : on, F(Fe), Fe;
      });
    }
    function S(I) {
      const K = [];
      return z(K, I), K;
    }
    function z(I, K, de = !0, Se = 1) {
      var Fe;
      if (K.length && (e.columnsCount == null || Se <= r.value)) {
        const Me = {
          id: _c++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: K,
          scrollEl: null,
          scrolling: !1
        };
        if (I.push(Me), de) {
          const on = n.value[I.length - 1], ln = K.findIndex((wn) => on === w(wn));
          Me.index = ln === -1 ? 0 : ln;
        }
        F(Me), z(
          I,
          (Fe = Me.column[Me.index][k("children")]) != null ? Fe : [],
          de,
          Se + 1
        );
      }
    }
    function O(I) {
      var K;
      o.value.splice(o.value.indexOf(I) + 1), z(
        o.value,
        (K = I.column[I.index][k("children")]) != null ? K : [],
        !1,
        o.value.length + 1
      );
    }
    function D() {
      o.value = e.cascade ? S(e.columns) : y(e.columns);
      const { indexes: I } = H();
      b(I);
    }
    function T(I, K) {
      K.scrollEl = I;
    }
    function E(I) {
      C(e["onUpdate:show"], I);
    }
    function M(I) {
      const K = i.value - I.column.length * t.value, de = t.value + i.value;
      I.translate = Mn(I.translate, K, de);
    }
    function R(I, K) {
      const de = Math.round((i.value - K) / t.value);
      return Kh(de, I.column);
    }
    function W(I) {
      return I.translate = i.value - I.index * t.value, I.translate;
    }
    function H() {
      const I = [], K = [], de = [];
      return o.value.forEach(({ column: Se, index: Fe }) => {
        const Me = Se[Fe];
        I.push(w(Me)), K.push(Fe), de.push(Me);
      }), {
        values: I,
        indexes: K,
        options: de
      };
    }
    function F(I, K = 0) {
      W(I), I.duration = K;
    }
    function Y(I, K, de) {
      I.translate += Math.abs(K / de) / 3e-3 * (K < 0 ? -1 : 1);
    }
    function j(I, K) {
      c.value || (I.index = K, F(I, Qc));
    }
    function ae(I, K) {
      K.touching = !0, K.translate = Pi(K.scrollEl), d(I);
    }
    function _(I, K) {
      if (!K.touching)
        return;
      f(I), K.scrolling = !1, K.duration = 0, K.prevY = s.value, K.translate += u.value, M(K);
      const de = performance.now();
      de - K.momentumTime > Jc && (K.momentumTime = de, K.momentumPrevY = K.translate);
    }
    function ve(I) {
      v(), I.touching = !1, I.prevY = 0;
      const K = I.translate - I.momentumPrevY, de = performance.now() - I.momentumTime, Se = Math.abs(K) >= G6 && de <= Jc, Fe = I.translate;
      Se && Y(I, K, de), I.index = R(I, I.translate), F(I, Se ? Z6 : Qc), I.scrolling = I.translate !== Fe, I.scrolling || L(I);
    }
    function ye(I) {
      I.scrolling = !1, L(I);
    }
    function Ee() {
      const { indexes: I } = H();
      return I.every((K, de) => K === m[de]);
    }
    function L(I) {
      const { onChange: K, cascade: de } = e;
      if (Ee())
        return;
      de && O(I);
      const Se = o.value.some((wn) => wn.scrolling), Fe = o.value.some((wn) => wn.touching);
      if (Se || Fe)
        return;
      const { values: Me, indexes: on, options: ln } = H();
      b(on), C(K, Me, on, ln), n.value = Me;
    }
    function Z() {
      if (e.cascade) {
        const I = o.value.find((K) => K.scrolling);
        I && (I.index = R(I, Pi(I.scrollEl)), I.scrolling = !1, F(I), O(I));
      } else
        o.value.forEach((I) => {
          I.index = R(I, Pi(I.scrollEl)), F(I);
        });
    }
    function oe() {
      Z();
      const { values: I, indexes: K, options: de } = H();
      b(K), C(e.onConfirm, I, K, de);
    }
    function me() {
      Z();
      const { values: I, indexes: K, options: de } = H();
      b(K), C(e.onCancel, I, K, de);
    }
    return {
      optionHeight: t,
      optionCount: a,
      scrollColumns: o,
      columnHeight: l,
      center: i,
      Transition: Qe,
      pt: g,
      t: rn,
      n: q6,
      classes: X6,
      setScrollEl: T,
      getOptionKey: k,
      getValue: w,
      handlePopupUpdateShow: E,
      handleTouchstart: ae,
      handleTouchmove: _,
      handleTouchend: ve,
      handleTransitionend: ye,
      confirm: oe,
      cancel: me,
      handleClick: j
    };
  }
});
sm.render = x6;
var rt = sm;
let or;
function kr(e) {
  return new Promise((n) => {
    kr.close();
    const o = Xe(e) ? { columns: e } : e, r = _e(o);
    r.dynamic = !0, r.teleport = "body", or = r;
    function t() {
      or === r && (or = null);
    }
    const { unmountInstance: a } = gr(rt, r, {
      onConfirm: (i, l, s) => {
        C(r.onConfirm, i, l, s), n({
          state: "confirm",
          values: i,
          indexes: l,
          options: s
        }), r.show = !1, t();
      },
      onCancel: (i, l, s) => {
        C(r.onCancel, i, l, s), n({
          state: "cancel",
          values: i,
          indexes: l,
          options: s
        }), r.show = !1, t();
      },
      onClose: () => {
        C(r.onClose), n({
          state: "close"
        }), t();
      },
      onClosed: () => {
        C(r.onClosed), a(), t();
      },
      onRouteChange: () => {
        a(), t();
      },
      "onUpdate:show": (i) => {
        r.show = i;
      }
    });
    r.show = !0;
  });
}
kr.close = function() {
  if (or == null)
    return;
  const e = or;
  or = null, He().then(() => {
    e.show = !1;
  });
};
kr.Component = rt;
re(rt);
re(rt, kr);
se(kr, lm);
const p5 = rt;
var Ml = kr;
const um = {
  mode: {
    type: String,
    default: "linear"
  },
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  color: [String, Object],
  trackColor: String,
  value: {
    type: [Number, String],
    default: 0
  },
  label: Boolean,
  labelClass: String,
  size: {
    type: [Number, String],
    default: 40
  },
  rotate: {
    type: Number,
    default: 0
  },
  track: {
    type: Boolean,
    default: !0
  },
  indeterminate: Boolean,
  type: {
    type: String,
    default: "primary"
  }
}, Zo = 100, ht = 0, io = 20, xc = 2 * Math.PI * io, { name: e2, n: n2, classes: o2 } = ee("progress"), r2 = ["aria-valuenow"], t2 = ["viewBox"], a2 = { key: 0 }, i2 = ["id"], l2 = ["offset", "stop-color"], s2 = ["d", "stroke-width", "stroke-dasharray"], u2 = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function c2(e, n) {
  return h(), P("div", {
    class: p(e.n()),
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": e.indeterminate ? void 0 : e.mode === "linear" ? e.linearProps.value : e.circleProps.value
  }, [
    e.mode === "linear" ? (h(), P(
      "div",
      {
        key: 0,
        class: p(e.n("linear"))
      },
      [
        N(
          "div",
          {
            class: p(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
            style: q({ height: e.toSizeUnit(e.lineWidth), background: e.trackColor })
          },
          [
            e.indeterminate ? (h(), P(
              "div",
              {
                key: 0,
                class: p(e.n("linear-indeterminate"))
              },
              [
                N(
                  "div",
                  {
                    class: p(e.classes(e.n(`linear--${e.type}`))),
                    style: q({ background: e.progressColor })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                N(
                  "div",
                  {
                    class: p(e.classes(e.n(`linear--${e.type}`))),
                    style: q({ background: e.progressColor })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                )
              ],
              2
              /* CLASS */
            )) : (h(), P(
              "div",
              {
                key: 1,
                class: p(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`))),
                style: q({ background: e.progressColor, width: e.linearProps.width })
              },
              null,
              6
              /* CLASS, STYLE */
            ))
          ],
          6
          /* CLASS, STYLE */
        ),
        e.label ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
          },
          [
            V(e.$slots, "default", {}, () => [
              Ie(
                le(e.linearProps.roundValue),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : G("v-if", !0)
      ],
      2
      /* CLASS */
    )) : G("v-if", !0),
    e.mode === "circle" ? (h(), P(
      "div",
      {
        key: 1,
        class: p(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: q({ width: e.toSizeUnit(e.size), height: e.toSizeUnit(e.size) })
      },
      [
        (h(), P("svg", {
          class: p(e.n("circle-svg")),
          viewBox: e.circleProps.viewBox
        }, [
          e.isPlainObject(e.color) ? (h(), P("defs", a2, [
            N("linearGradient", {
              id: e.id,
              x1: "100%",
              y1: "0%",
              x2: "0%",
              y2: "0%"
            }, [
              (h(!0), P(
                Ne,
                null,
                Ke(e.linearGradientProgress, (o, r) => (h(), P("stop", {
                  key: r,
                  offset: o,
                  "stop-color": e.color[o]
                }, null, 8, l2))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, i2)
          ])) : G("v-if", !0),
          e.track ? (h(), P("path", {
            key: 1,
            class: p(e.n("circle-background")),
            d: e.circleProps.path,
            fill: "transparent",
            "stroke-width": e.circleProps.strokeWidth,
            "stroke-dasharray": e.CIRCUMFERENCE,
            style: q({
              stroke: e.trackColor
            })
          }, null, 14, s2)) : G("v-if", !0),
          N("path", {
            class: p(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
            d: e.circleProps.path,
            fill: "transparent",
            "stroke-width": e.circleProps.strokeWidth,
            "stroke-dasharray": e.CIRCUMFERENCE,
            "stroke-dashoffset": e.circleProps.strokeOffset,
            style: q({
              stroke: e.progressColor,
              transform: `rotateZ(${e.rotate}deg)`,
              transformOrigin: "50% 50%"
            })
          }, null, 14, u2)
        ], 10, t2)),
        e.label ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("circle-label"), e.labelClass))
          },
          [
            V(e.$slots, "default", {}, () => [
              Ie(
                le(e.circleProps.roundValue),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : G("v-if", !0)
      ],
      6
      /* CLASS, STYLE */
    )) : G("v-if", !0)
  ], 10, r2);
}
const cm = x({
  name: e2,
  props: um,
  setup(e) {
    const n = Ad(), o = B(() => {
      const i = U(e.value), l = Mn(i, ht, Zo), s = Mn(Math.round(i), ht, Zo);
      return {
        width: `${l}%`,
        roundValue: `${s}%`,
        value: l
      };
    }), r = B(() => {
      const { size: i, lineWidth: l, value: s } = e, u = io / (1 - xe(l) / xe(i)) * 2, c = `0 0 ${u} ${u}`, d = Mn(Math.round(U(s)), ht, Zo), f = `${(Zo - d) / Zo * xc}`, v = xe(l) / xe(i) * u, g = 0, m = -io, k = 0, w = -2 * io, b = `M ${u / 2} ${u / 2} m ${g} ${m} a ${io} ${io} 
        0 1 1 ${k} ${-w} a ${io} ${io} 0 1 1 ${-k} ${w}`;
      return {
        strokeWidth: v,
        viewBox: c,
        strokeOffset: f,
        roundValue: `${d}%`,
        path: b,
        value: Mn(U(s), ht, Zo)
      };
    }), t = B(() => zo(e.color) ? `url(#${n.value})` : e.color), a = B(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: o,
      CIRCUMFERENCE: xc,
      RADIUS: io,
      circleProps: r,
      progressColor: t,
      linearGradientProgress: a,
      n: n2,
      classes: o2,
      toSizeUnit: ze,
      isPlainObject: zo
    };
  }
});
cm.render = c2;
var xa = cm;
re(xa);
se(xa, um);
const v5 = xa;
var Nl = xa;
const dm = {
  modelValue: Boolean,
  disabled: Boolean,
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  bgColor: String,
  successBgColor: String,
  color: String,
  successColor: String,
  target: [String, Object],
  onRefresh: A(),
  "onUpdate:modelValue": A()
};
var ed = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: d2, n: nd, classes: f2 } = ee("pull-refresh"), od = 150;
function p2(e, n) {
  const o = Q("var-icon");
  return h(), P(
    "div",
    {
      ref: "freshNode",
      class: p(e.n()),
      onTouchstart: n[0] || (n[0] = (...r) => e.handleTouchstart && e.handleTouchstart(...r)),
      onTouchend: n[1] || (n[1] = (...r) => e.handleTouchend && e.handleTouchend(...r)),
      onTouchcancel: n[2] || (n[2] = (...r) => e.handleTouchend && e.handleTouchend(...r))
    },
    [
      N(
        "div",
        {
          ref: "controlNode",
          class: p(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
          style: q(e.controlStyle)
        },
        [
          X(o, {
            name: e.iconName,
            transition: e.ICON_TRANSITION,
            class: p(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
            "var-pull-refresh-cover": ""
          }, null, 8, ["name", "transition", "class"])
        ],
        6
        /* CLASS, STYLE */
      ),
      V(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const fm = x({
  name: d2,
  components: { VarIcon: Ze },
  props: dm,
  setup(e) {
    const n = $(0), o = $(null), r = $(null), t = $(0), a = $("-125%"), i = $("arrow-down"), l = $("default"), s = $(!1), u = B(() => Math.abs(2 * n.value)), c = B(() => l.value === "success"), d = B(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = B(() => ({
      transform: `translate3d(0px, ${yn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: c.value ? e.successBgColor : e.bgColor,
      color: c.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: g, endTouch: m, isReachTop: k } = hr();
    let w, b;
    fe(
      () => e.modelValue,
      (M) => {
        M === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, E();
        }, U(e.successDuration)));
      }
    ), mn(T), je(o, "touchmove", O);
    function y(M) {
      return ed(this, null, function* () {
        if (i.value !== M)
          return i.value = M, new Promise((R) => {
            window.setTimeout(R, od);
          });
      });
    }
    function S(M) {
      ("classList" in w ? w : document.body).classList[M](`${nd()}--lock`);
    }
    function z(M) {
      if (v(M), n.value === 0) {
        const { width: R } = an(r.value);
        n.value = -(R + R * 0.25);
      }
      b = To(M.target);
    }
    function O(M) {
      if (g(M), !d.value || !b || b !== w && Fo(b) > 0 || Fo(w) > 0)
        return;
      k(w) && Ve(M), l.value !== "pulling" && (l.value = "pulling", t.value = M.touches[0].clientY), k(w) && Tn(a.value) && a.value > n.value && S("add");
      const W = (M.touches[0].clientY - t.value) / 2 + n.value;
      a.value = W >= u.value ? u.value : W, y(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function D() {
      return ed(this, null, function* () {
        m(), d.value && (s.value = !0, U(a.value) >= u.value * 0.2 ? (yield y("refresh"), l.value = "loading", a.value = u.value * 0.3, C(e["onUpdate:modelValue"], !0), He(() => {
          C(e.onRefresh);
        }), S("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, S("remove");
        }, U(e.animationDuration))), b = null);
      });
    }
    function T() {
      w = e.target ? Wd(e.target, "PullRefresh") : To(o.value);
    }
    function E() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, U(e.animationDuration));
    }
    return {
      ICON_TRANSITION: od,
      refreshStatus: l,
      freshNode: o,
      controlNode: r,
      iconName: i,
      controlStyle: f,
      isSuccess: c,
      n: nd,
      classes: f2,
      handleTouchstart: z,
      handleTouchmove: O,
      handleTouchend: D
    };
  }
});
fm.render = p2;
var ei = fm;
re(ei);
se(ei, dm);
const m5 = ei;
var Al = ei;
const pm = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  disabled: Boolean,
  readonly: Boolean,
  checkedColor: String,
  uncheckedColor: String,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: [Array, Function, Object],
  onClick: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, vm = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function v2() {
  const { bindChildren: e, childProviders: n, length: o } = gn(
    vm
  );
  return {
    length: o,
    radios: n,
    bindRadios: e
  };
}
function m2() {
  const { bindParent: e, parentProvider: n, index: o } = hn(vm);
  return {
    index: o,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: h2, n: g2, classes: b2 } = ee("radio"), y2 = ["tabindex"];
function k2(e, n) {
  const o = Q("var-icon"), r = Q("var-hover-overlay"), t = Q("var-form-details"), a = Ye("ripple"), i = Ye("hover");
  return h(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      N(
        "div",
        Ue({
          class: e.n(),
          onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
        }, e.$attrs),
        [
          Ae((h(), P("div", {
            ref: "action",
            class: p(
              e.classes(
                e.n("action"),
                [e.checked, e.n("--checked"), e.n("--unchecked")],
                [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")],
                [e.formDisabled || e.disabled, e.n("--disabled")]
              )
            ),
            tabindex: e.formDisabled || e.disabled ? void 0 : "0",
            style: q({ color: e.checked ? e.checkedColor : e.uncheckedColor }),
            onFocus: n[0] || (n[0] = (l) => e.isFocusing = !0),
            onBlur: n[1] || (n[1] = (l) => e.isFocusing = !1)
          }, [
            e.checked ? V(e.$slots, "checked-icon", { key: 0 }, () => [
              X(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                "var-radio-cover": "",
                name: "radio-marked",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]) : V(e.$slots, "unchecked-icon", { key: 1 }, () => [
              X(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                "var-radio-cover": "",
                name: "radio-blank",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]),
            X(r, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ], 46, y2)), [
            [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
            [i, e.handleHovering, "desktop"]
          ]),
          e.$slots.default ? (h(), P(
            "div",
            {
              key: 0,
              class: p(
                e.classes(
                  e.n("text"),
                  [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              ),
              onClick: n[2] || (n[2] = (...l) => e.handleTextClick && e.handleTextClick(...l))
            },
            [
              V(e.$slots, "default", { checked: e.checked })
            ],
            2
            /* CLASS */
          )) : G("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      ),
      X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const mm = x({
  name: h2,
  directives: { Ripple: nn, Hover: En },
  components: {
    VarIcon: Ze,
    VarFormDetails: Pn,
    VarHoverOverlay: Vn
  },
  inheritAttrs: !1,
  props: pm,
  setup(e) {
    const n = $(), o = $(!1), r = Kn(e, "modelValue"), t = B(() => r.value === e.checkedValue), a = $(!1), { radioGroup: i, bindRadioGroup: l } = m2(), { hovering: s, handleHovering: u } = _n(), { form: c, bindForm: d } = Fn(), {
      errorMessage: f,
      validateWithTrigger: v,
      validate: g,
      // expose
      resetValidation: m
    } = Ln(), k = {
      sync: D,
      validate: E,
      resetValidation: m,
      reset: T,
      isFocusing: B(() => o.value),
      // keyboard arrow move
      move() {
        n.value.focus(), n.value.click();
      },
      moveable() {
        return !(c != null && c.disabled.value) && !e.disabled && !(c != null && c.readonly.value) && !e.readonly;
      }
    };
    C(l, k), C(d, k), je(() => window, "keydown", w), je(() => window, "keyup", b);
    function w(R) {
      if (!o.value)
        return;
      const { key: W } = R;
      (W === "Enter" || W === " ") && Ve(R), W === "Enter" && n.value.click();
    }
    function b(R) {
      o.value && R.key === " " && (Ve(R), n.value.click());
    }
    function y(R) {
      He(() => {
        const { validateTrigger: W, rules: H, modelValue: F } = e;
        v(W, R, H, F);
      });
    }
    function S(R) {
      const { checkedValue: W, onChange: H } = e;
      i && r.value === W || (r.value = R, C(H, r.value), i == null || i.onToggle(W), y("onChange"));
    }
    function z(R) {
      const { disabled: W, readonly: H, uncheckedValue: F, checkedValue: Y, onClick: j } = e;
      c != null && c.disabled.value || W || (C(j, R), !(c != null && c.readonly.value || H) && (a.value = !0, S(t.value ? F : Y)));
    }
    function O() {
      n.value.focus();
    }
    function D(R) {
      const { checkedValue: W, uncheckedValue: H } = e;
      r.value = R === W ? W : H;
    }
    function T() {
      r.value = e.uncheckedValue, m();
    }
    function E() {
      return g(e.rules, e.modelValue);
    }
    function M(R) {
      const { uncheckedValue: W, checkedValue: H } = e;
      ![W, H].includes(R) && (R = t.value ? W : H), S(R);
    }
    return {
      action: n,
      isFocusing: o,
      withAnimation: a,
      checked: t,
      errorMessage: f,
      radioGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: c == null ? void 0 : c.disabled,
      formReadonly: c == null ? void 0 : c.readonly,
      hovering: s,
      handleHovering: u,
      n: g2,
      classes: b2,
      handleClick: z,
      handleTextClick: O,
      toggle: M,
      reset: T,
      validate: E,
      resetValidation: m
    };
  }
});
mm.render = k2;
var ni = mm;
re(ni);
se(ni, pm);
const h5 = ni;
var Ut = ni;
const hm = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  options: {
    type: Array,
    default: () => []
  },
  labelKey: {
    type: String,
    default: "label"
  },
  valueKey: {
    type: String,
    default: "value"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: [Array, Function, Object],
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: $2, n: w2, classes: C2 } = ee("radio-group");
function S2(e, n) {
  const o = Q("maybe-v-node"), r = Q("var-radio"), t = Q("var-form-details");
  return h(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      N(
        "div",
        {
          class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          e.options.length ? (h(!0), P(
            Ne,
            { key: 0 },
            Ke(e.options, (a) => (h(), Ce(r, {
              key: a[e.valueKey],
              "checked-value": a[e.valueKey],
              disabled: a.disabled
            }, {
              default: ce(({ checked: i }) => [
                X(o, {
                  is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey]
                }, null, 8, ["is"])
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["checked-value", "disabled"]))),
            128
            /* KEYED_FRAGMENT */
          )) : G("v-if", !0),
          V(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const gm = x({
  name: $2,
  components: { VarFormDetails: Pn, VarRadio: Ut, MaybeVNode: Jr },
  props: hm,
  setup(e) {
    const { length: n, radios: o, bindRadios: r } = v2(), { bindForm: t } = Fn(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = Ln(), u = B(() => a.value), c = {
      onToggle: m,
      validate: k,
      reset: w,
      resetValidation: s,
      errorMessage: u
    };
    fe(() => e.modelValue, g), fe(() => n.value, g), C(t, c), r(c), je(() => window, "keydown", d);
    function d(b) {
      const y = o.findIndex(({ isFocusing: z }) => z.value);
      if (!(y === -1 || !o.some(({ moveable: z }, O) => O === y ? !1 : z()))) {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(b.key) && Ve(b), b.key === "ArrowUp" || b.key === "ArrowLeft") {
          f(y, "prev");
          return;
        }
        (b.key === "ArrowDown" || b.key === "ArrowRight") && f(y, "next");
      }
    }
    function f(b, y) {
      for (; ; ) {
        y === "prev" ? b-- : b++, b < 0 && (b = o.length - 1), b > o.length - 1 && (b = 0);
        const S = o[b];
        if (S.moveable()) {
          S.move();
          break;
        }
      }
    }
    function v(b) {
      He(() => {
        const { validateTrigger: y, rules: S, modelValue: z } = e;
        i(y, b, S, z);
      });
    }
    function g() {
      return o.forEach(({ sync: b }) => b(e.modelValue));
    }
    function m(b) {
      C(e["onUpdate:modelValue"], b), C(e.onChange, b), v("onChange");
    }
    function k() {
      return l(e.rules, e.modelValue);
    }
    function w() {
      C(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: w2,
      classes: C2,
      reset: w,
      validate: k,
      resetValidation: s,
      isFunction: Rn
    };
  }
});
gm.render = S2;
var oi = gm;
re(oi);
se(oi, hm);
const g5 = oi;
var Vl = oi;
const bm = {
  modelValue: {
    type: Number,
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  color: String,
  icon: {
    type: String,
    default: "star"
  },
  emptyIcon: {
    type: String,
    default: "star-outline"
  },
  halfIcon: {
    type: String,
    default: "star-half-full"
  },
  namespace: De(en, "namespace"),
  emptyIconNamespace: De(en, "namespace"),
  halfIconNamespace: De(en, "namespace"),
  emptyColor: String,
  size: [String, Number],
  gap: [String, Number],
  half: Boolean,
  disabled: Boolean,
  disabledColor: String,
  readonly: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  clearable: Boolean,
  rules: Array,
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: P2, n: Cr } = ee("rate"), z2 = ["onClick"];
function O2(e, n) {
  const o = Q("var-icon"), r = Q("var-hover-overlay"), t = Q("var-form-details"), a = Ye("ripple"), i = Ye("hover");
  return h(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      N(
        "div",
        {
          class: p(e.n())
        },
        [
          (h(!0), P(
            Ne,
            null,
            Ke(e.toNumber(e.count), (l) => Ae((h(), P("div", {
              key: l,
              style: q(e.getStyle(l)),
              class: p(e.getClass(l)),
              onClick: (s) => e.handleClick(l, s)
            }, [
              X(o, {
                class: p(e.n("content-icon")),
                "var-rate-cover": "",
                transition: 0,
                namespace: e.getCurrentState(l).namespace,
                name: e.getCurrentState(l).name,
                style: q({ fontSize: e.toSizeUnit(e.size) })
              }, null, 8, ["class", "namespace", "name", "style"]),
              X(r, {
                hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
              }, null, 8, ["hovering"])
            ], 14, z2)), [
              [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
              [i, e.createHoverHandler(l), "desktop"]
            ])),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const ym = x({
  name: P2,
  components: {
    VarIcon: Ze,
    VarFormDetails: Pn,
    VarHoverOverlay: Vn
  },
  directives: { Ripple: nn, Hover: En },
  props: bm,
  setup(e) {
    const n = $(-1), { form: o, bindForm: r } = Fn(), { errorMessage: t, validateWithTrigger: a, validate: i, resetValidation: l } = Ln(), { hovering: s } = _n();
    let u = U(e.modelValue);
    C(r, {
      reset: y,
      validate: m,
      resetValidation: l
    });
    function d(S) {
      const { count: z, gap: O } = e;
      return {
        color: v(S).color,
        marginRight: S !== U(z) ? ze(O) : 0
      };
    }
    function f(S) {
      const { name: z, color: O } = v(S);
      return {
        [Cr("content")]: !0,
        [Cr("--disabled")]: (o == null ? void 0 : o.disabled.value) || e.disabled,
        [Cr("--error")]: t.value,
        [Cr("--primary")]: z !== e.emptyIcon && !O
      };
    }
    function v(S) {
      const {
        modelValue: z,
        disabled: O,
        disabledColor: D,
        color: T,
        half: E,
        emptyColor: M,
        icon: R,
        halfIcon: W,
        emptyIcon: H,
        namespace: F,
        halfIconNamespace: Y,
        emptyIconNamespace: j
      } = e;
      let ae = T;
      return (O || o != null && o.disabled.value) && (ae = D), S <= z ? { color: ae, name: R, namespace: F } : E && S <= z + 0.5 ? { color: ae, name: W, namespace: Y } : {
        color: O || o != null && o.disabled.value ? D : M,
        name: H,
        namespace: j
      };
    }
    function g(S, z) {
      const { half: O, clearable: D } = e, { offsetWidth: T } = z.target;
      O && z.offsetX <= Math.floor(T / 2) && (S -= 0.5), u === S && D && (S = 0), u !== S && (C(e["onUpdate:modelValue"], S), C(e.onChange, S)), u = S;
    }
    function m() {
      return i(e.rules, e.modelValue);
    }
    function k() {
      return He(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function w(S, z) {
      const { readonly: O, disabled: D } = e;
      O || D || o != null && o.disabled.value || o != null && o.readonly.value || (g(S, z), k());
    }
    function b(S) {
      return (z) => {
        n.value = S, s.value = z;
      };
    }
    function y() {
      C(e["onUpdate:modelValue"], 0), l();
    }
    return {
      errorMessage: t,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      hovering: s,
      currentHoveringValue: n,
      getStyle: d,
      getClass: f,
      getCurrentState: v,
      handleClick: w,
      createHoverHandler: b,
      reset: y,
      validate: m,
      resetValidation: l,
      toSizeUnit: ze,
      toNumber: U,
      n: Cr
    };
  }
});
ym.render = O2;
var ri = ym;
re(ri);
se(ri, bm);
const b5 = ri;
var Rl = ri;
const T2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
};
function E2(e, n) {
  return h(), P("svg", T2, n[0] || (n[0] = [
    N(
      "path",
      { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const km = x({});
km.render = E2;
var B2 = km;
const D2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
};
function I2(e, n) {
  return h(), P("svg", D2, n[0] || (n[0] = [
    N(
      "path",
      { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const $m = x({});
$m.render = I2;
var M2 = $m;
const N2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
};
function A2(e, n) {
  return h(), P("svg", N2, n[0] || (n[0] = [
    N(
      "path",
      { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const wm = x({});
wm.render = A2;
var V2 = wm;
const { n: R2, classes: L2 } = ee("result");
function F2(e, n) {
  return h(), P(
    Ne,
    null,
    [
      N(
        "span",
        {
          class: p(e.n("success-cover-left"))
        },
        null,
        2
        /* CLASS */
      ),
      N(
        "span",
        {
          class: p(e.classes(e.n("success-line"), e.n("success-line-tip"))),
          style: q({
            animationDuration: e.animation ? "760ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      N(
        "span",
        {
          class: p(e.classes(e.n("success-line"), e.n("success-line-long"))),
          style: q({
            animationDuration: e.animation ? "770ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      N(
        "span",
        {
          ref: "circle",
          class: p(e.n("success-circle")),
          style: q({ left: `-${e.borderSize}`, top: `-${e.borderSize}`, borderWidth: e.borderSize })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      N(
        "span",
        {
          class: p(e.n("success-line-fix"))
        },
        null,
        2
        /* CLASS */
      ),
      N(
        "span",
        {
          class: p(e.n("success-cover-right")),
          style: q({
            animationDuration: e.animation ? "4250ms" : "0ms"
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const Cm = x({
  props: {
    animation: {
      type: Boolean
    },
    borderSize: {
      type: String
    }
  },
  setup() {
    return {
      n: R2,
      classes: L2
    };
  }
});
Cm.render = F2;
var U2 = Cm;
const H2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
};
function Y2(e, n) {
  return h(), P("svg", H2, n[0] || (n[0] = [
    N(
      "path",
      { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Sm = x({});
Sm.render = Y2;
var j2 = Sm;
const W2 = { viewBox: "-4 -4 32 32" };
function K2(e, n) {
  return h(), P("svg", W2, n[0] || (n[0] = [
    N(
      "path",
      {
        fill: "currentColor",
        d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
      },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Pm = x({});
Pm.render = K2;
var q2 = Pm;
const zm = {
  imageSize: [String, Number],
  type: {
    type: String,
    default: "success"
  },
  title: String,
  description: String,
  animation: {
    type: Boolean,
    default: !0
  }
}, { name: X2, n: G2, classes: Z2 } = ee("result");
function J2(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      V(e.$slots, "image", {}, () => [
        e.type ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.n("image-container"))
          },
          [
            N(
              "div",
              {
                class: p(e.classes(e.n("image"), e.n(e.type))),
                style: q({
                  width: e.circleSize,
                  height: e.circleSize,
                  borderWidth: e.borderSize
                })
              },
              [
                (h(), Ce(mr(e.type), {
                  "border-size": e.borderSize,
                  animation: e.animation
                }, null, 8, ["border-size", "animation"]))
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          2
          /* CLASS */
        )) : G("v-if", !0)
      ]),
      V(e.$slots, "title", {}, () => [
        e.title ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.n("title"))
          },
          le(e.title),
          3
          /* TEXT, CLASS */
        )) : G("v-if", !0)
      ]),
      V(e.$slots, "description", {}, () => [
        e.description ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.n("description"))
          },
          le(e.description),
          3
          /* TEXT, CLASS */
        )) : G("v-if", !0)
      ]),
      e.$slots.footer ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("footer"))
        },
        [
          V(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Om = x({
  name: X2,
  components: {
    Info: B2,
    Success: U2,
    Warning: V2,
    Error: M2,
    Question: j2,
    Empty: q2
  },
  props: zm,
  setup(e) {
    const n = B(
      () => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.9)`
    ), o = B(
      () => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.05)`
    );
    return {
      circleSize: n,
      borderSize: o,
      n: G2,
      classes: Z2
    };
  }
});
Om.render = J2;
var ti = Om;
re(ti);
se(ti, zm);
const y5 = ti;
var Ll = ti;
const Tm = {
  gutter: {
    type: [String, Number, Array],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start"
  },
  align: {
    type: String,
    default: "flex-start"
  },
  onClick: A()
}, { name: Q2, n: _2, classes: x2 } = ee("row");
function e4(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      style: q({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: `${-e.average[0]}px ${-e.average[1]}px`
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      V(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Em = x({
  name: Q2,
  props: Tm,
  setup(e) {
    const n = B(
      () => Xe(e.gutter) ? e.gutter.map((t) => xe(t) / 2) : [0, xe(e.gutter) / 2]
    ), { bindCols: o } = Wk();
    o({ average: n });
    function r(t) {
      C(e.onClick, t);
    }
    return {
      average: n,
      n: _2,
      classes: x2,
      handleClick: r,
      padStartFlex: Tt
    };
  }
});
Em.render = e4;
var ai = Em;
re(ai);
se(ai, Tm);
const k5 = ai;
var Fl = ai, n4 = Object.defineProperty, rd = Object.getOwnPropertySymbols, o4 = Object.prototype.hasOwnProperty, r4 = Object.prototype.propertyIsEnumerable, td = (e, n, o) => n in e ? n4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, t4 = (e, n) => {
  for (var o in n || (n = {}))
    o4.call(n, o) && td(e, o, n[o]);
  if (rd)
    for (var o of rd(n))
      r4.call(n, o) && td(e, o, n[o]);
  return e;
};
const Bm = t4({
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: void 0
  },
  options: {
    type: Array,
    default: () => []
  },
  labelKey: {
    type: String,
    default: "label"
  },
  valueKey: {
    type: String,
    default: "value"
  },
  multiple: Boolean,
  offsetY: {
    type: [String, Number],
    default: 0
  },
  chip: Boolean,
  readonly: Boolean,
  separator: {
    type: String,
    default: ","
  },
  textAlign: {
    type: String,
    default: "left"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: [Array, Function, Object],
  onFocus: A(),
  onBlur: A(),
  onClose: A(),
  onChange: A(),
  onClear: A(),
  "onUpdate:modelValue": A()
}, De(Gt, [
  "size",
  "variant",
  "placeholder",
  "line",
  "hint",
  "textColor",
  "focusColor",
  "blurColor",
  "disabled",
  "clearable",
  "onClick"
])), { name: a4, n: i4, classes: l4 } = ee("select"), s4 = ["tabindex"];
function u4(e, n) {
  const o = Q("maybe-v-node"), r = Q("var-chip"), t = Q("var-icon"), a = Q("var-field-decorator"), i = Q("var-option"), l = Q("var-menu"), s = Q("var-form-details");
  return h(), P("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.disabled || e.formDisabled ? void 0 : "0",
    onFocus: n[3] || (n[3] = (...u) => e.handleFocus && e.handleFocus(...u)),
    onBlur: n[4] || (n[4] = (...u) => e.handleRootBlur && e.handleRootBlur(...u))
  }, [
    X(l, {
      "var-select-cover": "",
      "same-width": "",
      "close-on-click-reference": "",
      "close-on-key-escape": !1,
      class: p(e.n("menu")),
      "popover-class": e.variant === "standard" && e.hint ? e.n("--standard-menu-margin") : void 0,
      "offset-y": e.offsetY,
      disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
      placement: e.placement,
      "default-style": !1,
      show: e.showMenu,
      "onUpdate:show": n[1] || (n[1] = (u) => e.showMenu = u),
      onClickOutside: e.handleClickOutside
    }, {
      menu: ce(() => [
        N(
          "div",
          {
            ref: "menuEl",
            class: p(e.classes(e.n("scroller"), e.n("$-elevation--3")))
          },
          [
            e.options.length ? (h(!0), P(
              Ne,
              { key: 0 },
              Ke(e.options, (u) => (h(), Ce(i, {
                key: u[e.valueKey],
                label: u[e.labelKey],
                value: u[e.valueKey],
                option: u,
                disabled: u.disabled
              }, null, 8, ["label", "value", "option", "disabled"]))),
              128
              /* KEYED_FRAGMENT */
            )) : G("v-if", !0),
            V(e.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ]),
      default: ce(() => [
        X(
          a,
          wo(Gr({
            value: e.modelValue,
            size: e.size,
            variant: e.variant,
            placeholder: e.placeholder,
            line: e.line,
            hint: e.hint,
            textColor: e.textColor,
            focusColor: e.focusColor,
            blurColor: e.blurColor,
            isFocusing: e.isFocusing,
            isError: !!e.errorMessage,
            formDisabled: e.formDisabled,
            disabled: e.disabled,
            clearable: e.clearable,
            cursor: e.cursor,
            onClick: e.handleClick,
            onClear: e.handleClear
          })),
          rr({
            "clear-icon": ce(({ clear: u }) => [
              V(e.$slots, "clear-icon", { clear: u })
            ]),
            "append-icon": ce(() => [
              V(e.$slots, "append-icon")
            ]),
            default: ce(() => [
              N(
                "div",
                {
                  class: p(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                  style: q({
                    textAlign: e.textAlign,
                    color: e.textColor
                  })
                },
                [
                  N(
                    "div",
                    {
                      class: p(e.n("label"))
                    },
                    [
                      e.isEmptyModelValue ? G("v-if", !0) : V(e.$slots, "selected", { key: 0 }, () => [
                        e.multiple ? (h(), P(
                          Ne,
                          { key: 0 },
                          [
                            e.chip ? (h(), P(
                              "div",
                              {
                                key: 0,
                                class: p(e.n("chips"))
                              },
                              [
                                (h(!0), P(
                                  Ne,
                                  null,
                                  Ke(e.labels, (u) => (h(), Ce(r, {
                                    class: p(e.n("chip")),
                                    "var-select-cover": "",
                                    closeable: "",
                                    size: "small",
                                    type: e.errorMessage ? "danger" : void 0,
                                    key: u,
                                    onClick: n[0] || (n[0] = Wn(() => {
                                    }, ["stop"])),
                                    onClose: () => e.handleClose(u)
                                  }, {
                                    default: ce(() => [
                                      X(o, { is: u }, null, 8, ["is"])
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  }, 1032, ["class", "type", "onClose"]))),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ],
                              2
                              /* CLASS */
                            )) : (h(), P(
                              "div",
                              {
                                key: 1,
                                class: p(e.n("values"))
                              },
                              [
                                (h(!0), P(
                                  Ne,
                                  null,
                                  Ke(e.labels, (u, c) => (h(), P(
                                    Ne,
                                    { key: u },
                                    [
                                      X(o, { is: u }, null, 8, ["is"]),
                                      Ie(
                                        le(c !== e.labels.length - 1 ? e.separator : ""),
                                        1
                                        /* TEXT */
                                      )
                                    ],
                                    64
                                    /* STABLE_FRAGMENT */
                                  ))),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ],
                              2
                              /* CLASS */
                            ))
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        )) : (h(), Ce(o, {
                          key: 1,
                          is: e.label
                        }, null, 8, ["is"]))
                      ])
                    ],
                    2
                    /* CLASS */
                  ),
                  e.enableCustomPlaceholder ? (h(), P(
                    "span",
                    {
                      key: 0,
                      class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                      style: q({
                        color: e.placeholderColor
                      })
                    },
                    le(e.placeholder),
                    7
                    /* TEXT, CLASS, STYLE */
                  )) : G("v-if", !0),
                  V(e.$slots, "arrow-icon", {
                    focus: e.isFocusing,
                    menuOpen: e.showMenu
                  }, () => [
                    X(t, {
                      class: p(e.classes(e.n("arrow"), [e.showMenu, e.n("--arrow-rotate")])),
                      "var-select-cover": "",
                      name: "menu-down",
                      transition: 300
                    }, null, 8, ["class"])
                  ])
                ],
                6
                /* CLASS, STYLE */
              )
            ]),
            _: 2
            /* DYNAMIC */
          }, [
            e.$slots["prepend-icon"] ? {
              name: "prepend-icon",
              fn: ce(() => [
                V(e.$slots, "prepend-icon")
              ]),
              key: "0"
            } : void 0
          ]),
          1040
          /* FULL_PROPS, DYNAMIC_SLOTS */
        )
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class", "popover-class", "offset-y", "disabled", "placement", "show", "onClickOutside"]),
    X(s, {
      "error-message": e.errorMessage,
      onClick: n[2] || (n[2] = Wn(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])
  ], 42, s4);
}
const Dm = x({
  name: a4,
  components: {
    VarIcon: Ze,
    VarMenu: Rr,
    VarChip: Dt,
    VarOption: Ft,
    VarFieldDecorator: Mr,
    VarFormDetails: Pn,
    MaybeVNode: Jr
  },
  props: Bm,
  setup(e) {
    const n = $(!1), o = $(!1), r = $(null), t = B(() => e.multiple), a = B(() => e.focusColor), i = B(() => Zn(e.modelValue)), l = B(() => e.disabled || e.readonly ? "" : "pointer"), s = $(0), { bindForm: u, form: c } = Fn(), { length: d, options: f, bindOptions: v } = S6(), { label: g, labels: m, computeLabel: k, getSelectedValue: w } = Lf({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => f,
      optionProvidersLength: () => d.value
    }), {
      errorMessage: b,
      validateWithTrigger: y,
      validate: S,
      // expose
      resetValidation: z
    } = Ln(), O = $(null), D = B(() => e.variant === "outlined" ? "bottom" : "cover-top"), T = B(() => {
      const { hint: I, blurColor: K, focusColor: de } = e;
      if (!I)
        return b.value ? "var(--field-decorator-error-color)" : n.value ? de || "var(--field-decorator-focus-color)" : K || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), E = B(() => !e.hint && Zn(e.modelValue)), M = {
      multiple: t,
      focusColor: a,
      computeLabel: k,
      onSelect: _,
      reset: me,
      validate: oe,
      resetValidation: z
    };
    fe(
      () => e.multiple,
      () => {
        const { multiple: I, modelValue: K } = e;
        I && !Xe(K) && An("Select", "The modelValue must be an array when multiple is true");
      }
    ), v(M), je(() => window, "keydown", R), je(() => window, "keyup", W), C(u, M);
    function R(I) {
      const { disabled: K, readonly: de } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || de || !n.value)
        return;
      const { key: Se } = I;
      if (Se === " " && !o.value) {
        Ve(I);
        return;
      }
      if (Se === "Escape" && o.value) {
        r.value.focus(), Ve(I), o.value = !1;
        return;
      }
      if (Se === "Tab" && o.value) {
        r.value.focus(), Ve(I), Y();
        return;
      }
      if (Se === "Enter" && !o.value) {
        Ve(I), o.value = !0;
        return;
      }
      (Se === "ArrowDown" || Se === "ArrowUp") && o.value && (Ve(I), qd(r.value, O.value, Se));
    }
    function W(I) {
      const { disabled: K, readonly: de } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || de || o.value || !n.value)
        return;
      const { key: Se } = I;
      Se === " " && !o.value && (Ve(I), o.value = !0);
    }
    function H(I) {
      He(() => {
        const { validateTrigger: K, rules: de, modelValue: Se } = e;
        y(K, I, de, Se);
      });
    }
    function F() {
      const { disabled: I, readonly: K, onFocus: de } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || I || K || (s.value = xe(e.offsetY), L(), C(de), H("onFocus"));
    }
    function Y() {
      const { disabled: I, readonly: K, onBlur: de } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || I || K || (Z(), C(de), H("onBlur"));
    }
    function j() {
      o.value || Y();
    }
    function ae() {
      n.value && Y();
    }
    function _(I) {
      const { disabled: K, readonly: de, multiple: Se, onChange: Fe } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || de)
        return;
      const Me = w(I);
      C(e["onUpdate:modelValue"], Me), C(Fe, Me), H("onChange"), Se || (r.value.focus(), kn().then(() => {
        o.value = !1;
      }));
    }
    function ve() {
      const { disabled: I, readonly: K, multiple: de, clearable: Se, onClear: Fe } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || I || K || !Se)
        return;
      const Me = de ? [] : void 0;
      C(e["onUpdate:modelValue"], Me), C(Fe, Me), H("onClear");
    }
    function ye(I) {
      const { disabled: K, onClick: de } = e;
      c != null && c.disabled.value || K || (C(de, I), H("onClick"));
    }
    function Ee(I) {
      const { disabled: K, readonly: de, modelValue: Se, onClose: Fe } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || de)
        return;
      const Me = f.find(({ label: ln }) => ln.value === I), on = Se.filter(
        (ln) => {
          var wn;
          return ln !== ((wn = Me.value.value) != null ? wn : Me.label.value);
        }
      );
      C(e["onUpdate:modelValue"], on), C(Fe, on), H("onClose");
    }
    function L() {
      s.value = xe(e.offsetY), n.value = !0;
    }
    function Z() {
      n.value = !1, o.value = !1;
    }
    function oe() {
      return S(e.rules, e.modelValue);
    }
    function me() {
      C(e["onUpdate:modelValue"], e.multiple ? [] : void 0), z();
    }
    return {
      root: r,
      offsetY: s,
      isFocusing: n,
      showMenu: o,
      errorMessage: b,
      formDisabled: c == null ? void 0 : c.disabled,
      formReadonly: c == null ? void 0 : c.readonly,
      label: g,
      labels: m,
      isEmptyModelValue: i,
      menuEl: O,
      placement: D,
      cursor: l,
      placeholderColor: T,
      enableCustomPlaceholder: E,
      isFunction: Rn,
      n: i4,
      classes: l4,
      handleFocus: F,
      handleBlur: Y,
      handleClickOutside: ae,
      handleClear: ve,
      handleClick: ye,
      handleClose: Ee,
      handleRootBlur: j,
      reset: me,
      validate: oe,
      resetValidation: z,
      focus: L,
      blur: Z
    };
  }
});
Dm.render = u4;
var ii = Dm;
re(ii);
se(ii, Bm);
const $5 = ii;
var Ul = ii;
const Im = {
  loading: {
    type: Boolean,
    default: !0
  },
  title: Boolean,
  card: Boolean,
  avatar: Boolean,
  fullscreen: Boolean,
  fullscreenZIndex: {
    type: [Number, String],
    default: 100
  },
  titleWidth: [Number, String],
  cardHeight: [Number, String],
  avatarSize: [Number, String],
  rows: {
    type: [Number, String],
    default: 3
  },
  rowsWidth: {
    type: Array,
    default: () => []
  }
}, { name: c4, n: d4, classes: f4 } = ee("skeleton");
function p4(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? G("v-if", !0) : (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("data"))
        },
        [
          V(e.$slots, "default")
        ],
        2
        /* CLASS */
      )),
      e.loading && !e.fullscreen ? (h(), P(
        "div",
        {
          key: 1,
          class: p(e.n("content"))
        },
        [
          e.card ? (h(), P(
            "div",
            {
              key: 0,
              class: p(e.n("card")),
              style: q({ height: e.toSizeUnit(e.cardHeight) })
            },
            [
              N(
                "div",
                {
                  class: p(e.n("--animation"))
                },
                null,
                2
                /* CLASS */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : G("v-if", !0),
          e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), P(
            "div",
            {
              key: 1,
              class: p(e.n("article"))
            },
            [
              e.avatar ? (h(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("avatar")),
                  style: q({
                    width: e.toSizeUnit(e.avatarSize),
                    height: e.toSizeUnit(e.avatarSize)
                  })
                },
                [
                  N(
                    "div",
                    {
                      class: p(e.n("--animation"))
                    },
                    null,
                    2
                    /* CLASS */
                  )
                ],
                6
                /* CLASS, STYLE */
              )) : G("v-if", !0),
              e.title || e.toNumber(e.rows) > 0 ? (h(), P(
                "div",
                {
                  key: 1,
                  class: p(e.n("section"))
                },
                [
                  e.title ? (h(), P(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: q({ width: e.toSizeUnit(e.titleWidth) })
                    },
                    [
                      N(
                        "div",
                        {
                          class: p(e.n("--animation"))
                        },
                        null,
                        2
                        /* CLASS */
                      )
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : G("v-if", !0),
                  (h(!0), P(
                    Ne,
                    null,
                    Ke(e.toNumber(e.rows), (o, r) => (h(), P(
                      "div",
                      {
                        class: p(e.n("row")),
                        key: o,
                        style: q({ width: e.toSizeUnit(e.rowsWidth[r]) })
                      },
                      [
                        N(
                          "div",
                          {
                            class: p(e.n("--animation"))
                          },
                          null,
                          2
                          /* CLASS */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                2
                /* CLASS */
              )) : G("v-if", !0)
            ],
            2
            /* CLASS */
          )) : G("v-if", !0)
        ],
        2
        /* CLASS */
      )) : G("v-if", !0),
      e.loading && e.fullscreen ? (h(), P(
        "div",
        {
          key: 2,
          class: p(e.n("fullscreen")),
          style: q({ zIndex: e.toNumber(e.fullscreenZIndex) })
        },
        [
          N(
            "div",
            {
              class: p(e.n("--animation"))
            },
            null,
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Mm = x({
  name: c4,
  props: Im,
  setup: () => ({
    n: d4,
    classes: f4,
    toSizeUnit: ze,
    toNumber: U
  })
});
Mm.render = p4;
var li = Mm;
re(li);
se(li, Im);
const w5 = li;
var Hl = li, sn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(sn || {});
const Nm = {
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: Boolean,
  labelVisible: {
    type: String,
    default: "normal"
  },
  activeColor: String,
  trackColor: String,
  thumbColor: String,
  labelColor: String,
  labelTextColor: String,
  trackHeight: [String, Number],
  max: {
    type: [String, Number],
    default: 100
  },
  min: {
    type: [String, Number],
    default: 0
  },
  thumbSize: [String, Number],
  disabled: Boolean,
  readonly: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  rules: [Array, Function, Object],
  onChange: A(),
  onStart: A(),
  onEnd: A(),
  "onUpdate:modelValue": A()
}, { name: v4, n: ad, classes: m4 } = ee("slider"), h4 = ["tabindex", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-disabled", "aria-valuetext", "onTouchstart", "onFocusin", "onFocusout"];
function g4(e, n) {
  const o = Q("var-hover-overlay"), r = Q("var-form-details"), t = Ye("hover");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [
      N(
        "div",
        {
          class: p(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
          ref: "sliderEl",
          onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
        },
        [
          N(
            "div",
            {
              class: p(e.n(`${e.direction}-track`))
            },
            [
              N(
                "div",
                {
                  class: p(e.n(`${e.direction}-track-background`)),
                  style: q({
                    background: e.trackColor,
                    height: e.isVertical ? "100%" : e.toSizeUnit(e.trackHeight),
                    width: e.isVertical ? e.toSizeUnit(e.trackHeight) : "100%"
                  })
                },
                null,
                6
                /* CLASS, STYLE */
              ),
              N(
                "div",
                {
                  class: p(e.n(`${e.direction}-track-fill`)),
                  style: q(e.getFillStyle)
                },
                null,
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          ),
          (h(!0), P(
            Ne,
            null,
            Ke(e.thumbList, (a) => (h(), P("div", {
              class: p(e.n(`${e.direction}-thumb`)),
              key: a.enumValue,
              style: q(e.thumbStyle(a)),
              tabindex: e.isDisabled ? void 0 : "0",
              role: "slider",
              "aria-valuemin": e.min,
              "aria-valuemax": e.max,
              "aria-valuenow": a.value,
              "aria-disabled": e.isDisabled,
              "aria-valuetext": `${a.text}`,
              onTouchstart: Wn((i) => e.start(i, a.enumValue), ["stop"]),
              onFocusin: (i) => e.handleFocus(a),
              onFocusout: (i) => e.handleBlur(a)
            }, [
              V(e.$slots, "button", {
                currentValue: a.text
              }, () => [
                Ae(N(
                  "div",
                  {
                    class: p(e.n(`${e.direction}-thumb-block`)),
                    style: q({
                      background: e.thumbColor
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ), [
                  [t, (i) => e.hover(i, a), "desktop"]
                ]),
                N(
                  "div",
                  {
                    class: p(
                      e.classes(e.n(`${e.direction}-thumb-ripple`), [
                        e.thumbsProps[a.enumValue].active,
                        e.n(`${e.direction}-thumb-ripple--active`)
                      ])
                    ),
                    style: q({
                      background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0
                    })
                  },
                  [
                    X(o, {
                      hovering: !e.isDisabled && a.hovering,
                      focusing: !e.isDisabled && a.focusing
                    }, null, 8, ["hovering", "focusing"])
                  ],
                  6
                  /* CLASS, STYLE */
                ),
                N(
                  "div",
                  {
                    class: p(
                      e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])
                    ),
                    style: q({
                      background: e.labelColor,
                      color: e.labelTextColor,
                      height: e.toSizeUnit(e.thumbSize),
                      width: e.toSizeUnit(e.thumbSize)
                    })
                  },
                  [
                    N(
                      "span",
                      null,
                      le(a.text),
                      1
                      /* TEXT */
                    )
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ])
            ], 46, h4))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      X(r, {
        "error-message": e.errorMessage,
        class: p(e.n("form")),
        "var-slider-cover": ""
      }, null, 8, ["error-message", "class"])
    ],
    2
    /* CLASS */
  );
}
const Am = x({
  name: v4,
  components: {
    VarFormDetails: Pn,
    VarHoverOverlay: Vn
  },
  directives: { Hover: En },
  props: Nm,
  setup(e) {
    const n = $(0), o = $(null), r = $(!1), t = B(() => U(e.max) - U(e.min)), a = B(() => n.value / t.value * U(e.step)), i = B(() => e.disabled || (f == null ? void 0 : f.disabled.value)), l = B(() => e.readonly || (f == null ? void 0 : f.readonly.value)), s = B(() => e.direction === "vertical"), u = $(!1), c = $(!1), { bindForm: d, form: f } = Fn(), { errorMessage: v, validateWithTrigger: g, validate: m, resetValidation: k } = Ln(), { hovering: w, handleHovering: b } = _n(), { hovering: y, handleHovering: S } = _n(), z = B(() => {
      const { modelValue: ne, range: ue } = e;
      let ke = [];
      return ue && Xe(ne) ? ke = [
        {
          value: ae(ne[0]),
          enumValue: sn.First,
          text: _(ne[0]),
          hovering: w.value,
          focusing: u.value,
          handleHovering: b,
          handleFocusing(Be) {
            u.value = Be;
          }
        },
        {
          value: ae(ne[1]),
          enumValue: sn.Second,
          text: _(ne[1]),
          hovering: y.value,
          focusing: c.value,
          handleHovering: S,
          handleFocusing(Be) {
            c.value = Be;
          }
        }
      ] : Tn(ne) && (ke = [
        {
          value: ae(ne),
          enumValue: sn.First,
          text: _(ne),
          hovering: w.value,
          focusing: u.value,
          handleHovering: b,
          handleFocusing(Be) {
            u.value = Be;
          }
        }
      ]), ke;
    }), O = B(() => {
      const { activeColor: ne, range: ue, modelValue: ke } = e, Be = ue && Xe(ke) ? ae(Math.min(ke[0], ke[1])) : 0, Je = ue && Xe(ke) ? ae(Math.max(ke[0], ke[1])) - Be : ae(ke);
      return s.value ? {
        left: "0px",
        height: `${Je}%`,
        bottom: `${Be}%`,
        background: ne
      } : {
        top: "0px",
        width: `${Je}%`,
        left: `${Be}%`,
        background: ne
      };
    }), D = _e({
      [sn.First]: W(),
      [sn.Second]: W()
    });
    let T;
    C(d, {
      reset: on,
      validate: R,
      resetValidation: k
    }), fe([() => e.modelValue, () => e.step], ([ne, ue]) => {
      !Se() || !Fe() || r.value || Me(ne, U(ue));
    }), fe(n, () => Me()), mn(() => {
      !Se() || !Fe() || M();
    }), Ht(oe), je(() => window, "keydown", wn), to(M);
    function M() {
      n.value = o.value[s.value ? "offsetHeight" : "offsetWidth"];
    }
    function R() {
      return m(e.rules, e.modelValue);
    }
    function W() {
      return {
        startPosition: 0,
        currentOffset: 0,
        active: !1,
        percentValue: 0
      };
    }
    function H() {
      return He(() => g(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function F(ne) {
      const ue = ne.currentTarget;
      return ue ? s.value ? n.value - (ne.clientY - an(ue).top) : ne.clientX - Eg(ue) : 0;
    }
    function Y(ne) {
      return {
        [s.value ? "bottom" : "left"]: `${ne.value}%`,
        zIndex: D[ne.enumValue].active ? 1 : void 0
      };
    }
    function j(ne) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : D[ne].active;
    }
    function ae(ne) {
      const { min: ue, max: ke } = e;
      return ne < U(ue) ? 0 : ne > U(ke) ? 100 : (ne - U(ue)) / t.value * 100;
    }
    function _(ne) {
      if (!Tn(ne))
        return 0;
      const ue = Mn(ne, U(e.min), U(e.max));
      return parseInt(`${ue}`, 10) === ue ? ue : U(ue.toPrecision(5));
    }
    function ve(ne, ue) {
      i.value || ue.handleHovering(ne);
    }
    function ye(ne) {
      C(e.onChange, ne), C(e["onUpdate:modelValue"], ne), H();
    }
    function Ee(ne, ue) {
      let ke = [];
      const { step: Be, range: Je, modelValue: te, min: $e } = e, Oe = U(Be), Re = Math.round(ne / a.value), Le = Re * Oe + U($e), un = D[ue].percentValue * Oe + U($e);
      if (D[ue].percentValue = Re, Je && Xe(te) && (ke = ue === sn.First ? [Le, te[1]] : [te[0], Le]), un !== Le) {
        const pn = Je ? ke.map((vn) => _(vn)) : _(Le);
        ye(pn);
      }
    }
    function L(ne) {
      if (!e.range)
        return sn.First;
      const ue = D[sn.First].percentValue * a.value, ke = D[sn.Second].percentValue * a.value, Be = Math.abs(ne - ue), Je = Math.abs(ne - ke);
      return Be <= Je ? sn.First : sn.Second;
    }
    function Z() {
      document.addEventListener("touchmove", I, { passive: !1 }), document.addEventListener("touchend", K), document.addEventListener("touchcancel", K);
    }
    function oe() {
      document.removeEventListener("touchmove", I), document.removeEventListener("touchend", K), document.removeEventListener("touchcancel", K);
    }
    function me(ne, ue) {
      if (M(), i.value || (D[ue].active = !0), T = ue, Z(), i.value || l.value)
        return;
      C(e.onStart), r.value = !0;
      const { clientX: ke, clientY: Be } = ne.touches[0];
      D[ue].startPosition = s.value ? Be : ke;
    }
    function I(ne) {
      if (Ve(ne), i.value || l.value || !r.value)
        return;
      const { startPosition: ue, currentOffset: ke } = D[T], { clientX: Be, clientY: Je } = ne.touches[0];
      let te = (s.value ? ue - Je : Be - ue) + ke;
      te <= 0 ? te = 0 : te >= n.value && (te = n.value), Ee(te, T);
    }
    function K() {
      oe();
      const { range: ne, modelValue: ue, onEnd: ke, step: Be, min: Je } = e;
      if (i.value || (D[T].active = !1), i.value || l.value)
        return;
      let te = [];
      D[T].currentOffset = D[T].percentValue * a.value;
      const $e = D[T].percentValue * U(Be) + U(Je);
      ne && Xe(ue) && (te = T === sn.First ? [$e, ue[1]] : [ue[0], $e]), C(ke, ne ? te : $e), r.value = !1;
    }
    function de(ne) {
      if (i.value || l.value || ne.target.closest(`.${ad("thumb")}`))
        return;
      const ue = F(ne), ke = L(ue);
      T = ke, Ee(ue, ke), K();
    }
    function Se() {
      return U(e.step) <= 0 ? (Tg("[Varlet] Slider", '"step" should be > 0'), !1) : !0;
    }
    function Fe() {
      const { range: ne, modelValue: ue } = e;
      return ne && !Xe(ue) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !ne && Xe(ue) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : ne && Xe(ue) && ue.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }
    function Me(ne = e.modelValue, ue = U(e.step)) {
      const ke = (Be) => {
        const { min: Je, max: te } = e;
        return Be < U(Je) ? 0 : Be > U(te) ? t.value / ue : (Be - U(Je)) / ue;
      };
      e.range && Xe(ne) ? (D[sn.First].percentValue = ke(ne[0]), D[sn.First].currentOffset = D[sn.First].percentValue * a.value, D[sn.Second].percentValue = ke(ne[1]), D[sn.Second].currentOffset = D[sn.Second].percentValue * a.value) : Tn(ne) && (D[sn.First].currentOffset = ke(ne) * a.value);
    }
    function on() {
      const ne = e.range ? [0, 0] : 0;
      C(e["onUpdate:modelValue"], ne), k();
    }
    function ln(ne, ue) {
      const ke = U(e.step);
      if (Xe(ue)) {
        const Be = ue[0] + (u.value ? ne * ke : 0), Je = ue[1] + (c.value ? ne * ke : 0);
        return [Be, Je].map(_);
      }
      return _(ue + ne * ke);
    }
    function wn(ne) {
      const ue = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: ke } = ne;
      if (!Br(ue, ke) || l.value || i.value || e.range && !u.value && !c.value || !e.range && !u.value)
        return;
      Ve(ne);
      const Be = ue[ke], Je = ln(Be, e.modelValue);
      ye(Je);
    }
    function pe(ne) {
      i.value || ne.handleFocusing(!0);
    }
    function We(ne) {
      ne.handleFocusing(!1);
    }
    return {
      sliderEl: o,
      getFillStyle: O,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: D,
      thumbList: z,
      handleFocus: pe,
      handleBlur: We,
      n: ad,
      classes: m4,
      thumbStyle: Y,
      hover: ve,
      toSizeUnit: ze,
      toNumber: U,
      showLabel: j,
      start: me,
      move: I,
      end: K,
      handleClick: de
    };
  }
});
Am.render = g4;
var si = Am;
re(si);
se(si, Nm);
const C5 = si;
var Yl = si, b4 = Object.defineProperty, y4 = Object.defineProperties, k4 = Object.getOwnPropertyDescriptors, id = Object.getOwnPropertySymbols, $4 = Object.prototype.hasOwnProperty, w4 = Object.prototype.propertyIsEnumerable, ld = (e, n, o) => n in e ? b4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, C4 = (e, n) => {
  for (var o in n || (n = {}))
    $4.call(n, o) && ld(e, o, n[o]);
  if (id)
    for (var o of id(n))
      w4.call(n, o) && ld(e, o, n[o]);
  return e;
}, S4 = (e, n) => y4(e, k4(n));
const Fs = {
  type: String,
  position: {
    type: String,
    default: "top"
  },
  content: [String, Function, Object],
  contentClass: String,
  duration: {
    type: Number,
    default: 3e3
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  vertical: Boolean,
  loadingType: De(lo, "type"),
  loadingSize: De(lo, "size"),
  loadingRadius: De(lo, "radius"),
  loadingColor: S4(C4({}, De(lo, "color")), {
    default: "currentColor"
  }),
  lockScroll: Boolean,
  show: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  forbidClick: Boolean,
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  "onUpdate:show": A(),
  _update: String
}, { n: P4, classes: z4 } = ee("snackbar"), O4 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function T4(e, n) {
  const o = Q("var-icon"), r = Q("var-loading");
  return Ae((h(), P(
    "div",
    {
      class: p(e.n()),
      style: q({ pointerEvents: e.isForbidClick ? "auto" : "none", zIndex: e.zIndex })
    },
    [
      N(
        "div",
        {
          class: p(
            e.classes(
              e.n("wrapper"),
              e.n(`wrapper-${e.position}`),
              e.formatElevation(e.elevation, 4),
              [e.vertical, e.n("vertical")],
              [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n(`wrapper-${e.type}`)]
            )
          ),
          style: q({ zIndex: e.zIndex })
        },
        [
          N(
            "div",
            {
              class: p([e.n("content"), e.contentClass])
            },
            [
              V(e.$slots, "default", {}, () => [
                Ie(
                  le(e.content),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          e.iconName || e.type === "loading" || e.$slots.icon ? (h(), P(
            "div",
            {
              key: 0,
              class: p(e.n("icon"))
            },
            [
              e.iconName ? (h(), Ce(o, {
                key: 0,
                name: e.iconName
              }, null, 8, ["name"])) : G("v-if", !0),
              e.type === "loading" ? (h(), Ce(r, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : G("v-if", !0),
              V(e.$slots, "icon")
            ],
            2
            /* CLASS */
          )) : G("v-if", !0),
          e.$slots.action ? (h(), P(
            "div",
            {
              key: 1,
              class: p(e.n("action"))
            },
            [
              V(e.$slots, "action")
            ],
            2
            /* CLASS */
          )) : G("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [Qn, e.show]
  ]);
}
const Vm = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: cr,
    VarIcon: Ze
  },
  props: Fs,
  setup(e) {
    const n = $(null), { zIndex: o } = _r(() => e.show, 1);
    Qr(
      () => e.show,
      () => e.lockScroll
    );
    const r = B(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), t = B(() => e.type ? O4[e.type] : "");
    function a() {
      n.value = setTimeout(() => {
        e.type !== "loading" && C(e["onUpdate:show"], !1);
      }, e.duration);
    }
    return fe(
      () => e.show,
      (i) => {
        i ? (C(e.onOpen), a()) : (clearTimeout(n.value), C(e.onClose));
      }
    ), fe(
      () => e._update,
      () => {
        clearTimeout(n.value), a();
      }
    ), mn(() => {
      e.show && (C(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: Fm,
      zIndex: o,
      iconName: t,
      isForbidClick: r,
      n: P4,
      classes: z4,
      formatElevation: fn
    };
  }
});
Vm.render = T4;
var Rm = Vm;
const { name: E4, n: B4 } = ee("snackbar");
function D4(e, n) {
  const o = Q("var-snackbar-core");
  return h(), Ce(oo, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [
    X(Qe, {
      name: `${e.n()}-fade`,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: ce(() => [
        X(o, Ue(e.$props, {
          class: e.n("transition")
        }), rr({
          default: ce(() => [
            V(e.$slots, "default")
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots.icon ? {
            name: "icon",
            fn: ce(() => [
              V(e.$slots, "icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots.action ? {
            name: "action",
            fn: ce(() => [
              V(e.$slots, "action")
            ]),
            key: "1"
          } : void 0
        ]), 1040, ["class"])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const Lm = x({
  name: E4,
  components: { VarSnackbarCore: Rm },
  props: Fs,
  setup() {
    const { disabled: e } = qo();
    return {
      disabled: e,
      n: B4
    };
  }
});
Lm.render = D4;
var ui = Lm, I4 = Object.defineProperty, sd = Object.getOwnPropertySymbols, M4 = Object.prototype.hasOwnProperty, N4 = Object.prototype.propertyIsEnumerable, ud = (e, n, o) => n in e ? I4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Wr = (e, n) => {
  for (var o in n || (n = {}))
    M4.call(n, o) && ud(e, o, n[o]);
  if (sd)
    for (var o of sd(n))
      N4.call(n, o) && ud(e, o, n[o]);
  return e;
};
const Fm = ["loading", "success", "warning", "info", "error"];
let cd = 0, jl = !1, Um, Kr = !1;
const Hm = {
  type: void 0,
  content: "",
  icon: "",
  action: "",
  position: "top",
  duration: 3e3,
  elevation: !0,
  vertical: !1,
  contentClass: void 0,
  loadingType: "circle",
  loadingSize: "normal",
  lockScroll: !1,
  teleport: "body",
  forbidClick: !1,
  onOpen: () => {
  },
  onOpened: () => {
  },
  onClose: () => {
  },
  onClosed: () => {
  }
};
let jn = _e([]), Us = Hm;
const A4 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Mi = (e) => () => Rn(e) ? e() : e, V4 = {
  setup() {
    return () => {
      const e = jn.map(({
        id: n,
        reactiveSnackOptions: o,
        _update: r
      }) => {
        const t = document.querySelector(".var-transition-group");
        o.forbidClick || o.type === "loading" ? t.classList.add("var-pointer-auto") : t.classList.remove("var-pointer-auto");
        const a = Wr({
          position: Kr ? "relative" : "absolute"
        }, Y4(o.position)), {
          content: i,
          icon: l,
          action: s
        } = o, u = {
          default: Mi(i),
          icon: Mi(l),
          action: Mi(s)
        };
        return X(Rm, Ue(o, {
          key: n,
          style: a,
          "data-id": n,
          _update: r,
          show: o.show,
          "onUpdate:show": (c) => o.show = c
        }), u);
      });
      return X(Th, Ue(A4, {
        style: {
          zIndex: Nn.zIndex
        },
        onAfterEnter: R4,
        onAfterLeave: L4
      }), {
        default: () => [e]
      });
    };
  }
}, no = function(e) {
  const n = U4(e), o = _e(Wr(Wr({}, Us), n));
  o.show = !0, jl || (jl = !0, Um = gr(V4).unmountInstance);
  const {
    length: r
  } = jn, t = {
    id: cd++,
    reactiveSnackOptions: o
  };
  if (r === 0 || Kr)
    F4(t);
  else {
    const a = `update-${cd}`;
    H4(o, a);
  }
  return {
    clear() {
      !Kr && jn.length ? jn[0].reactiveSnackOptions.show = !1 : o.show = !1;
    }
  };
};
Fm.forEach((e) => {
  no[e] = (n) => (zo(n) ? n.type = e : n = {
    content: n,
    type: e
  }, no(n));
});
no.allowMultiple = function(e = !1) {
  e !== Kr && (jn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Kr = e);
};
no.clear = function() {
  jn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
no.setDefaultOptions = function(e) {
  Us = e;
};
no.resetDefaultOptions = function() {
  Us = Hm;
};
function R4(e) {
  const n = e.getAttribute("data-id"), o = jn.find((r) => r.id === U(n));
  o && C(o.reactiveSnackOptions.onOpened);
}
function L4(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), o = jn.find((t) => t.id === U(n));
  o && (o.animationEnd = !0, C(o.reactiveSnackOptions.onClosed)), jn.every((t) => t.animationEnd) && (C(Um), jn = _e([]), jl = !1);
}
function F4(e) {
  jn.push(e);
}
function U4(e = {}) {
  return yn(e) ? {
    content: e
  } : e;
}
function H4(e, n) {
  const [o] = jn;
  o.reactiveSnackOptions = Wr(Wr({}, o.reactiveSnackOptions), e), o._update = n;
}
function Y4(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
no.Component = ui;
re(ui);
re(ui, no);
se(no, Fs);
const S5 = ui;
var Wl = no;
const Ym = {
  size: {
    type: [String, Number, Array],
    default: "normal"
  },
  wrap: {
    type: Boolean,
    default: !0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: {
    type: String,
    default: "flex-start"
  },
  align: String,
  inline: Boolean
};
function In(e) {
  return `calc(${e} / 2)`;
}
function j4(e, n, o) {
  const { direction: r, justify: t, index: a, lastIndex: i } = o;
  let l = "0";
  return r === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? a !== i ? l = `${In(e)} ${n} ${In(e)} 0` : l = `${In(e)} 0` : t === "space-around" ? l = `${In(e)} ${In(n)}` : t === "space-between" && (a === 0 ? l = `${In(e)} ${In(n)} ${In(e)} 0` : a === i ? l = `${In(e)} 0 ${In(e)} ${In(n)}` : l = `${In(e)} ${In(n)}`)), r === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const W4 = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: K4,
  n: gt,
  classes: dd
} = ee("space");
function q4(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Xe(e) ? e.map(ze) : [ze(e), ze(e)];
}
var ci = x({
  name: K4,
  props: Ym,
  setup(e, {
    slots: n
  }) {
    return () => {
      var o;
      const {
        inline: r,
        justify: t,
        align: a,
        wrap: i,
        direction: l,
        size: s
      } = e, u = (o = C(n.default)) != null ? o : [], [c, d] = q4(s, W4(s)), f = Vd(u), v = f.length - 1, g = f.map((m, k) => {
        var w;
        const b = j4(c, d, {
          direction: l,
          justify: t,
          index: k,
          lastIndex: v
        });
        return X("div", {
          class: dd([l === "column", gt("--auto")]),
          key: (w = m.key) != null ? w : void 0,
          style: {
            margin: b
          }
        }, [m]);
      });
      return X("div", {
        class: dd(gt(), gt("$--box"), [r, gt("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: Tt(t),
          alignItems: Tt(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${c} / 2) 0` : void 0
        }
      }, [g]);
    };
  }
});
re(ci);
se(ci, Ym);
const P5 = ci;
var Kl = ci;
const jm = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: De(en, "name"),
  inactiveIcon: De(en, "name"),
  activeIconNamespace: De(en, "namespace"),
  currentIconNamespace: De(en, "namespace"),
  inactiveIconNamespace: De(en, "namespace")
}, Wm = Symbol("STEPS_BIND_STEP_KEY");
function X4() {
  const { bindChildren: e, childProviders: n } = gn(Wm);
  return {
    step: n,
    bindStep: e
  };
}
function G4() {
  const { parentProvider: e, index: n, bindParent: o } = hn(Wm);
  return o || An("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: o
  };
}
const { name: Z4, n: J4, classes: Q4 } = ee("step"), _4 = { key: 3 };
function x4(e, n) {
  const o = Q("var-icon");
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      N(
        "div",
        {
          class: p(e.n(e.direction))
        },
        [
          N(
            "div",
            {
              class: p(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
              style: q({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
              onClick: n[0] || (n[0] = (...r) => e.click && e.click(...r))
            },
            [
              e.isActive ? (h(), Ce(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.activeIcon,
                namespace: e.activeIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.isCurrent && e.currentIcon ? (h(), Ce(o, {
                key: 1,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon,
                namespace: e.currentIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.inactiveIcon ? (h(), Ce(o, {
                key: 2,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon,
                namespace: e.inactiveIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : (h(), P(
                "span",
                _4,
                le(e.index + 1),
                1
                /* TEXT */
              ))
            ],
            6
            /* CLASS, STYLE */
          ),
          e.$slots.default ? (h(), P(
            "div",
            {
              key: 0,
              class: p(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
              onClick: n[1] || (n[1] = (...r) => e.click && e.click(...r))
            },
            [
              V(e.$slots, "default")
            ],
            2
            /* CLASS */
          )) : G("v-if", !0),
          N(
            "div",
            {
              class: p(e.n(`${e.direction}-line`))
            },
            null,
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const Km = x({
  name: Z4,
  components: { VarIcon: Ze },
  props: jm,
  setup() {
    const { index: e, steps: n, bindSteps: o } = G4(), { active: r, activeColor: t, inactiveColor: a, direction: i, clickStep: l } = n, s = B(() => r.value === e.value), u = B(() => e.value !== -1 && U(r.value) > e.value);
    o({ index: e });
    function d() {
      return l(e.value);
    }
    return {
      index: e,
      isActive: u,
      isCurrent: s,
      direction: i,
      activeColor: t,
      inactiveColor: a,
      n: J4,
      classes: Q4,
      click: d
    };
  }
});
Km.render = x4;
var di = Km;
re(di);
se(di, jm);
const z5 = di;
var ql = di;
const qm = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  activeColor: String,
  inactiveColor: String,
  onClickStep: A()
}, { name: eP, n: nP } = ee("steps");
function oP(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n()),
      style: q({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
    },
    [
      V(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Xm = x({
  name: eP,
  props: qm,
  setup(e) {
    const n = B(() => e.active), o = B(() => e.activeColor), r = B(() => e.inactiveColor), t = B(() => e.direction), { bindStep: a } = X4();
    a({
      active: n,
      direction: t,
      activeColor: o,
      inactiveColor: r,
      clickStep: l
    });
    function l(s) {
      C(e.onClickStep, s);
    }
    return { n: nP };
  }
});
Xm.render = oP;
var fi = Xm;
re(fi);
se(fi, qm);
const O5 = fi;
var Xl = fi;
const Gm = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: rP, n: tP } = ee("style-provider"), aP = x({
  name: rP,
  props: Gm,
  setup(e, { slots: n }) {
    return () => Yt(
      e.tag,
      {
        class: tP(),
        style: Kd(e.styleVars)
      },
      C(n.default)
    );
  }
});
var pi = aP;
const Zm = "varlet-style-vars";
function fd() {
  const e = document.head.querySelector(`#${Zm}`);
  e && document.head.removeChild(e);
}
function iP(e) {
  const n = document.createElement("style");
  n.id = Zm, n.innerHTML = e, document.head.appendChild(n);
}
function vi(e) {
  if (e == null) {
    fd();
    return;
  }
  const n = Kd(e ?? {}), o = Object.entries(n).reduce((r, [t, a]) => (r += `${t}:${a};`, r), `:root:root {
`);
  fd(), iP(`${o}
}`);
}
vi.Component = pi;
re(pi);
re(pi, vi);
se(vi, Gm);
const T5 = pi;
var Gl = vi;
const Jm = {
  modelValue: {
    default: !1
  },
  activeValue: {
    default: !0
  },
  inactiveValue: {
    default: !1
  },
  lazyChange: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  loading: Boolean,
  color: String,
  loadingColor: String,
  closeColor: String,
  size: [String, Number],
  variant: Boolean,
  rules: [Array, Function, Object],
  ripple: {
    type: Boolean,
    default: !0
  },
  buttonElevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onLazyChange"]
  },
  onClick: A(),
  onBeforeChange: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: lP, n: sP, classes: uP } = ee("switch"), cP = ["aria-checked"], dP = ["tabindex"];
function fP(e, n) {
  const o = Q("var-hover-overlay"), r = Q("var-form-details"), t = Ye("ripple"), a = Ye("hover");
  return Ae((h(), P("div", {
    class: p(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [
    N(
      "div",
      {
        ref: "switchRef",
        class: p(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
        style: q(e.styleComputed.switch),
        onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
      },
      [
        N(
          "div",
          {
            style: q(e.styleComputed.track),
            class: p(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
          },
          null,
          6
          /* CLASS, STYLE */
        ),
        Ae((h(), P("div", {
          class: p(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
          style: q(e.styleComputed.ripple),
          tabindex: e.disabled || e.formDisabled ? void 0 : "0",
          onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
          onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
        }, [
          N(
            "div",
            {
              style: q(e.styleComputed.handle),
              class: p(
                e.classes(
                  e.n("handle"),
                  e.formatElevation(e.buttonElevation, 2),
                  [e.isActive, e.n("handle--active")],
                  [e.errorMessage && !e.variant, e.n("handle--error")],
                  [e.hovering, e.n("handle--hover")]
                )
              )
            },
            [
              e.loading ? (h(), P(
                "span",
                {
                  key: 0,
                  class: p(e.n("loading")),
                  style: q({
                    width: e.radius,
                    height: e.radius
                  })
                },
                n[3] || (n[3] = [
                  N(
                    "svg",
                    { viewBox: "25 25 50 50" },
                    [
                      N("circle", {
                        cx: "50",
                        cy: "50",
                        r: "20",
                        fill: "none"
                      })
                    ],
                    -1
                    /* HOISTED */
                  )
                ]),
                6
                /* CLASS, STYLE */
              )) : G("v-if", !0)
            ],
            6
            /* CLASS, STYLE */
          ),
          X(o, {
            hovering: e.hovering && !e.disabled && !e.formDisabled,
            focusing: e.isFocusing && !e.disabled && !e.formDisabled
          }, null, 8, ["hovering", "focusing"])
        ], 46, dP)), [
          [t, {
            disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly
          }]
        ])
      ],
      6
      /* CLASS, STYLE */
    ),
    X(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
  ], 10, cP)), [
    [a, e.hover, "desktop"]
  ]);
}
const Qm = x({
  name: lP,
  components: {
    VarFormDetails: Pn,
    VarHoverOverlay: Vn
  },
  directives: { Ripple: nn, Hover: En },
  props: Jm,
  setup(e) {
    const n = $(null), o = $(!1), { bindForm: r, form: t } = Fn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Ln(), { hovering: u, handleHovering: c } = _n(), d = B(() => e.modelValue === e.activeValue), f = B(() => {
      const { size: O, color: D, closeColor: T, loadingColor: E, variant: M } = e;
      return {
        handle: {
          width: Cn(O),
          height: Cn(O),
          backgroundColor: d.value ? D : T,
          color: E
        },
        ripple: {
          left: d.value ? Cn(O, 0.5) : `-${Cn(O, M ? 1 / 3 : 0.5)}`,
          color: d.value ? D : T || "currentColor",
          width: Cn(O, 2),
          height: Cn(O, 2)
        },
        track: {
          width: Cn(O, M ? 13 / 6 : 1.9),
          height: Cn(O, M ? 4 / 3 : 0.72),
          borderRadius: Cn(O, 2 / 3),
          filter: d.value || a != null && a.value ? void 0 : `brightness(${M ? 1 : 0.6})`,
          backgroundColor: d.value ? D : T,
          borderWidth: M && !d.value ? Cn(O, 1 / 12) : void 0
        },
        switch: {
          width: Cn(O, M ? 13 / 6 : 2),
          height: Cn(O, M ? 4 / 3 : 1.2)
        }
      };
    }), v = B(() => Cn(e.size, 0.8));
    C(r, {
      reset: z,
      validate: w,
      resetValidation: s
    }), je(() => window, "keydown", m), je(() => window, "keyup", k);
    function m(O) {
      o.value && ((O.key === " " || O.key === "Enter") && Ve(O), O.key === "Enter" && n.value.click());
    }
    function k(O) {
      !o.value || O.key !== " " || (Ve(O), n.value.click());
    }
    function w() {
      return l(e.rules, e.modelValue);
    }
    function b(O) {
      He(() => {
        const { validateTrigger: D, rules: T, modelValue: E } = e;
        i(D, O, T, E);
      });
    }
    function y(O) {
      const {
        onClick: D,
        onChange: T,
        disabled: E,
        loading: M,
        readonly: R,
        activeValue: W,
        inactiveValue: H,
        lazyChange: F,
        "onUpdate:modelValue": Y,
        onBeforeChange: j
      } = e;
      if (E || t != null && t.disabled.value || (C(D, O), M || R || t != null && t.readonly.value))
        return;
      const ae = d.value ? H : W;
      F ? C(j, ae, (_) => {
        C(Y, _), b("onLazyChange");
      }) : (C(T, ae), C(Y, ae), b("onChange"));
    }
    function S(O) {
      e.disabled || t != null && t.disabled.value || c(O);
    }
    function z() {
      C(e["onUpdate:modelValue"], e.inactiveValue), s();
    }
    return {
      isActive: d,
      switchRef: n,
      hovering: u,
      isFocusing: o,
      radius: v,
      styleComputed: f,
      errorMessage: a,
      formDisabled: t == null ? void 0 : t.disabled,
      formReadonly: t == null ? void 0 : t.readonly,
      n: sP,
      classes: uP,
      formatElevation: fn,
      multiplySizeUnit: Cn,
      switchActive: y,
      hover: S
    };
  }
});
Qm.render = fP;
var mi = Qm;
re(mi);
se(mi, Jm);
const E5 = mi;
var Zl = mi;
const _m = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: A()
}, xm = Symbol("TABS_BIND_TAB_KEY");
function pP() {
  const { childProviders: e, bindChildren: n, length: o } = gn(xm);
  return {
    length: o,
    tabList: e,
    bindTabList: n
  };
}
function vP() {
  const { parentProvider: e, bindParent: n, index: o } = hn(xm);
  return n || An("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: o,
    tabs: e,
    bindTabs: n
  };
}
const { name: mP, n: bt, classes: hP } = ee("tab");
function gP(e, n) {
  const o = Ye("ripple");
  return Ae((h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
      ref: "tabEl",
      style: q({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      V(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: e.disabled || !e.ripple }]
  ]);
}
const eh = x({
  name: mP,
  directives: { Ripple: nn },
  props: _m,
  setup(e) {
    const n = $(null), o = B(() => n.value), r = B(() => e.name), t = B(() => e.disabled), { index: a, tabs: i, bindTabs: l } = vP(), { onTabClick: s, active: u, activeColor: c, inactiveColor: d, disabledColor: f, itemDirection: v, resize: g } = i, m = {
      name: r,
      index: a,
      disabled: t,
      element: o
    };
    l(m), fe(() => [e.name, e.disabled], g);
    function k() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function w() {
      return e.disabled ? f.value : k() ? c.value : d.value;
    }
    function b() {
      return e.disabled ? bt("$-tab--disabled") : k() ? bt("$-tab--active") : bt("$-tab--inactive");
    }
    function y(S) {
      const { disabled: z, name: O, onClick: D } = e;
      z || (C(D, O ?? a.value, S), s(m));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: c,
      inactiveColor: d,
      itemDirection: v,
      n: bt,
      classes: hP,
      computeColorStyle: w,
      computeColorClass: b,
      handleClick: y
    };
  }
});
eh.render = gP;
var hi = eh;
re(hi);
se(hi, _m);
const B5 = hi;
var Jl = hi;
const nh = {
  name: [String, Number]
}, { name: bP, n: yP, classes: kP } = ee("tab-item");
function $P(e, n) {
  const o = Q("var-swipe-item");
  return h(), Ce(o, {
    class: p(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: ce(() => [
      V(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
const oh = x({
  name: bP,
  components: { VarSwipeItem: Yr },
  props: nh,
  setup(e) {
    const n = $(!1), o = B(() => e.name), { index: r, bindTabsItems: t } = JS(), { bindLists: a } = QS(), i = {
      index: r,
      name: o,
      current: B(() => n.value),
      setCurrent: l
    };
    t(i), a(i);
    function l(s) {
      n.value = s;
    }
    return {
      current: n,
      n: yP,
      classes: kP
    };
  }
});
oh.render = $P;
var gi = oh;
re(gi);
se(gi, nh);
const D5 = gi;
var Ql = gi;
const rh = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  scrollerHeight: {
    type: [Number, String]
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, { name: wP, n: CP, classes: SP } = ee("table");
function PP(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [
      N(
        "div",
        {
          class: p(e.n("main")),
          style: q({ height: e.toSizeUnit(e.scrollerHeight) })
        },
        [
          N(
            "table",
            {
              class: p(e.n("table")),
              style: q({ width: e.toSizeUnit(e.fullWidth) })
            },
            [
              V(e.$slots, "default")
            ],
            6
            /* CLASS, STYLE */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.$slots.footer ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("footer"))
        },
        [
          V(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const th = x({
  name: wP,
  props: rh,
  setup: () => ({
    toSizeUnit: ze,
    n: CP,
    classes: SP,
    formatElevation: fn
  })
});
th.render = PP;
var bi = th;
re(bi);
se(bi, rh);
const I5 = bi;
var _l = bi;
const ah = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal"
  },
  itemDirection: {
    type: String,
    default: "horizontal"
  },
  fixedBottom: Boolean,
  activeColor: String,
  inactiveColor: String,
  disabledColor: String,
  color: String,
  indicatorColor: String,
  indicatorSize: [String, Number],
  elevation: {
    type: [Boolean, String, Number],
    default: !1
  },
  scrollable: {
    type: String,
    default: "auto"
  },
  indicatorPosition: {
    type: String,
    default: "normal"
  },
  safeArea: Boolean,
  sticky: Boolean,
  stickyCssMode: De(Tr, "cssMode"),
  stickyZIndex: De(Tr, "zIndex"),
  offsetTop: De(Tr, "offsetTop"),
  onClick: A(),
  onChange: A(),
  "onUpdate:active": A()
};
var pd = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: zP, n: OP, classes: TP } = ee("tabs");
function EP(e, n) {
  return h(), Ce(mr(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: ce(() => [
      N(
        "div",
        Ue({
          class: e.classes(
            e.n(),
            e.n("$--box"),
            e.n(`--item-${e.itemDirection}`),
            e.n(`--layout-${e.layoutDirection}-padding`),
            e.formatElevation(e.elevation, 4),
            [e.fixedBottom, e.n("--fixed-bottom")],
            [e.safeArea, e.n("--safe-area")]
          ),
          style: { background: e.color }
        }, e.$attrs),
        [
          N(
            "div",
            {
              ref: "scrollerEl",
              class: p(
                e.classes(
                  e.n("tab-wrap"),
                  [e.localScrollable, e.n(`--layout-${e.layoutDirection}-scrollable`)],
                  e.n(`--layout-${e.layoutDirection}`)
                )
              )
            },
            [
              V(e.$slots, "default"),
              N(
                "div",
                {
                  class: p(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
                  style: q({
                    width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                    height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                    transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
                  })
                },
                [
                  N(
                    "div",
                    {
                      class: p(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
                      style: q({ background: e.indicatorColor || e.activeColor })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["css-mode", "offset-top", "z-index"]);
}
const ih = x({
  name: zP,
  components: { VarSticky: pr },
  inheritAttrs: !1,
  props: ah,
  setup(e) {
    const n = $("0px"), o = $("0px"), r = $("0px"), t = $("0px"), a = $(!1), i = $(null), l = B(() => e.active), s = B(() => e.activeColor), u = B(() => e.inactiveColor), c = B(() => e.disabledColor), d = B(() => e.itemDirection), f = $(null), v = B(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: g, bindTabList: m, length: k } = pP();
    m({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: c,
      itemDirection: d,
      resize: E,
      onTabClick: b
    }), fe(
      () => k.value,
      () => pd(this, null, function* () {
        yield kn(), E();
      })
    ), fe(() => [e.active, e.scrollable], E), Do(E), to(E);
    function b(R) {
      var W;
      const H = (W = R.name.value) != null ? W : R.index.value, { active: F, onChange: Y, onClick: j } = e;
      C(e["onUpdate:active"], H), C(j, H), H !== F && C(Y, H);
    }
    function y() {
      return g.find(({ name: R }) => e.active === R.value);
    }
    function S(R) {
      return g.find(({ index: W }) => (R ?? e.active) === W.value);
    }
    function z() {
      if (k.value === 0)
        return;
      const { active: R } = e;
      if (Tn(R)) {
        const W = Mn(R, 0, k.value - 1);
        return C(e["onUpdate:active"], W), S(W);
      }
    }
    function O() {
      a.value = e.scrollable === "always" || g.length >= 5;
    }
    function D({ element: R }) {
      const W = R.value;
      W && (e.layoutDirection === "horizontal" ? (n.value = `${W.offsetWidth}px`, r.value = `${W.offsetLeft}px`) : (o.value = `${W.offsetHeight}px`, t.value = `${W.offsetTop}px`));
    }
    function T({ element: R }) {
      if (!a.value)
        return;
      const W = i.value, H = R.value;
      if (e.layoutDirection === "horizontal") {
        const F = H.offsetLeft + H.offsetWidth / 2 - W.offsetWidth / 2;
        Ir(W, {
          left: F,
          animation: Yi
        });
      } else {
        const F = H.offsetTop + H.offsetHeight / 2 - W.offsetHeight / 2;
        Ir(W, {
          top: F,
          animation: Yi
        });
      }
    }
    function E() {
      const R = y() || S() || z();
      !R || R.disabled.value || (O(), D(R), T(R));
    }
    function M() {
      return pd(this, null, function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
    }
    return {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: o,
      indicatorX: r,
      indicatorY: t,
      indicatorPosition: v,
      localScrollable: a,
      scrollerEl: i,
      Transition: Qe,
      toSizeUnit: ze,
      n: OP,
      classes: TP,
      resize: E,
      resizeSticky: M,
      formatElevation: fn
    };
  }
});
ih.render = EP;
var yi = ih;
re(yi);
se(yi, ah);
const M5 = yi;
var xl = yi;
const lh = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: Boolean,
  "onUpdate:active": A()
};
var BP = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: DP, n: IP } = ee("tabs-items");
function MP(e, n) {
  const o = Q("var-swipe");
  return h(), Ce(o, {
    class: p(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: ce(() => [
      V(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
const sh = x({
  name: DP,
  components: { VarSwipe: Hr },
  props: lh,
  setup(e) {
    const n = $(null), { tabItemList: o, bindTabItem: r, length: t } = ZS();
    r({}), fe(() => e.active, s), fe(
      () => t.value,
      () => BP(this, null, function* () {
        yield kn(), s(e.active);
      })
    );
    function a(d) {
      return o.find(({ name: f }) => d === f.value);
    }
    function i(d) {
      return o.find(({ index: f }) => d === f.value);
    }
    function l(d) {
      return a(d) || i(d);
    }
    function s(d) {
      var f;
      const v = l(d);
      v && (o.forEach(({ setCurrent: g }) => g(!1)), v.setCurrent(!0), (f = n.value) == null || f.to(v.index.value));
    }
    function u(d) {
      var f;
      const v = o.find(({ index: m }) => m.value === d), g = (f = v.name.value) != null ? f : v.index.value;
      C(e["onUpdate:active"], g);
    }
    function c() {
      return n.value;
    }
    return {
      swipe: n,
      n: IP,
      handleSwipeChange: u,
      getSwipe: c
    };
  }
});
sh.render = MP;
var ki = sh;
re(ki);
se(ki, lh);
const N5 = ki;
var es = ki, NP = {
  "--action-sheet-background": "var(--color-surface-container-low)",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff",
  "--action-sheet-border-radius": "2px",
  "--action-sheet-border-top": "none",
  "--action-sheet-title-padding": "10px 16px",
  "--action-sheet-title-font-size": "14px",
  "--action-sheet-action-item-height": "48px",
  "--action-sheet-action-item-padding": "0 18px",
  "--action-sheet-action-item-disabled-color": "var(--color-text-disabled)",
  "--action-sheet-icon-margin": "0 20px 0 0",
  "--action-sheet-icon-size": "24px"
}, AP = {
  "--badge-default-color": "#555",
  "--badge-default-text-color": "#fff",
  "--badge-content-padding": "2px 6px",
  "--badge-content-border": "none",
  "--badge-content-border-radius": "100px",
  "--badge-content-font-size": "12px",
  "--badge-icon-size": "12px",
  "--badge-primary-color": "var(--color-primary)",
  "--badge-danger-color": "var(--color-danger)",
  "--badge-success-color": "var(--color-success)",
  "--badge-warning-color": "var(--color-warning)",
  "--badge-info-color": "var(--color-info)",
  "--badge-primary-text-color": "var(--color-on-primary)",
  "--badge-danger-text-color": "var(--color-on-danger)",
  "--badge-success-text-color": "var(--color-on-success)",
  "--badge-warning-text-color": "var(--color-on-warning)",
  "--badge-info-text-color": "var(--color-on-info)",
  "--badge-dot-width": "8px",
  "--badge-dot-height": "8px"
}, VP = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff",
  "--button-default-icon-container-color": "#303030",
  "--button-default-icon-color": "#fff",
  "--button-primary-text-color": "var(--color-on-primary)",
  "--button-danger-text-color": "var(--color-on-danger)",
  "--button-success-text-color": "var(--color-on-success)",
  "--button-warning-text-color": "var(--color-on-warning)",
  "--button-info-text-color": "var(--color-on-info)",
  "--button-primary-color": "var(--color-primary)",
  "--button-danger-color": "var(--color-danger)",
  "--button-success-color": "var(--color-success)",
  "--button-warning-color": "var(--color-warning)",
  "--button-info-color": "var(--color-info)",
  "--button-primary-icon-color": "var(--color-on-primary-container)",
  "--button-danger-icon-color": "var(--color-on-danger-container)",
  "--button-success-icon-color": "var(--color-on-success-container)",
  "--button-warning-icon-color": "var(--color-on-warning-container)",
  "--button-info-icon-color": "var(--color-on-info-container)",
  "--button-primary-icon-container-color": "var(--color-primary-container)",
  "--button-danger-icon-container-color": "var(--color-danger-container)",
  "--button-success-icon-container-color": "var(--color-success-container)",
  "--button-warning-icon-container-color": "var(--color-warning-container)",
  "--button-info-icon-container-color": "var(--color-info-container)",
  "--button-disabled-color": "var(--color-disabled)",
  "--button-disabled-text-color": "var(--color-text-disabled)",
  "--button-border-radius": "4px",
  "--button-mini-padding": "0 8px",
  "--button-small-padding": "0 12px",
  "--button-normal-padding": "0 16px",
  "--button-large-padding": "0 22px",
  "--button-round-padding": "6px",
  "--button-mini-height": "20px",
  "--button-small-height": "28px",
  "--button-normal-height": "36px",
  "--button-large-height": "44px",
  "--button-mini-font-size": "var(--font-size-xs)",
  "--button-small-font-size": "var(--font-size-sm)",
  "--button-normal-font-size": "var(--font-size-md)",
  "--button-large-font-size": "var(--font-size-lg)"
}, RP = {
  "--card-title-color": "#ffffff",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa",
  "--card-padding": "0 0 15px 0",
  "--card-background": "var(--color-surface-container-highest)",
  "--card-filled-background": "var(--color-surface-container-highest)",
  "--card-outline-color": "var(--color-outline)",
  "--card-border-radius": "4px",
  "--card-image-width": "100%",
  "--card-row-image-width": "140px",
  "--card-image-height": "200px",
  "--card-row-height": "140px",
  "--card-title-font-size": "20px",
  "--card-title-padding": "0 12px",
  "--card-title-margin": "15px 0 0 0",
  "--card-title-row-margin": "12px 0",
  "--card-content-padding": "0 16px",
  "--card-content-margin": "16px 0 0 0",
  "--card-content-color": "var(--color-on-surface-variant)",
  "--card-content-font-size": "14px",
  "--card-content-row-margin": "16px 0 0 0",
  "--card-subtitle-font-size": "14px",
  "--card-subtitle-padding": "0 12px",
  "--card-subtitle-margin": "10px 0 0 0",
  "--card-subtitle-row-margin": "-8px 0 0 0",
  "--card-description-font-size": "14px",
  "--card-description-margin": "20px 0 0 0",
  "--card-description-padding": "0 13px",
  "--card-footer-padding": "0 12px",
  "--card-footer-right": "13px",
  "--card-footer-bottom": "9px",
  "--card-footer-margin": "30px 0 0 0",
  "--card-line-height": "22px",
  "--card-row-line-height": "1.5",
  "--card-floating-buttons-bottom": "16px",
  "--card-floating-buttons-right": "16px",
  "--card-floating-buttons-color": "#fff",
  "--card-close-button-icon-size": "24px",
  "--card-close-button-size": "56px",
  "--card-close-button-primary-color": "#212121",
  "--card-close-button-text-color": "#fff",
  "--card-close-button-border-radius": "50%"
}, LP = {
  "--cell-description-color": "#aaa",
  "--cell-color": "var(--color-text)",
  "--cell-font-size": "var(--font-size-md)",
  "--cell-description-font-size": "var(--font-size-sm)",
  "--cell-description-margin-top": "4px",
  "--cell-padding": "10px 12px",
  "--cell-min-height": "40px",
  "--cell-border-color": "var(--color-outline)",
  "--cell-border-left": "12px",
  "--cell-border-right": "12px",
  "--cell-icon-right": "8px",
  "--cell-extra-left": "8px"
}, FP = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, UP = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff",
  "--chip-primary-text-color": "var(--color-on-primary-container)",
  "--chip-danger-text-color": "var(--color-on-danger-container)",
  "--chip-success-text-color": "var(--color-on-success-container)",
  "--chip-warning-text-color": "var(--color-on-warning-container)",
  "--chip-info-text-color": "var(--color-on-info-container)",
  "--chip-primary-color": "var(--color-primary-container)",
  "--chip-danger-color": "var(--color-danger-container)",
  "--chip-success-color": "var(--color-success-container)",
  "--chip-warning-color": "var(--color-warning-container)",
  "--chip-info-color": "var(--color-info-container)",
  "--chip-primary-plain-color": "var(--color-primary)",
  "--chip-danger-plain-color": "var(--color-danger)",
  "--chip-success-plain-color": "var(--color-success)",
  "--chip-warning-plain-color": "var(--color-warning)",
  "--chip-info-plain-color": "var(--color-info)",
  "--chip-border-radius": "2px",
  "--chip-normal-height": "32px",
  "--chip-large-height": "40px",
  "--chip-small-height": "24px",
  "--chip-mini-height": "16px",
  "--chip-round-radius": "100px",
  "--chip-normal-padding": "0 10px",
  "--chip-large-padding": "0 17px",
  "--chip-small-padding": "0 6px",
  "--chip-mini-padding": "0 4px",
  "--chip-text-normal-margin": "0 5px",
  "--chip-text-large-margin": "0 5px",
  "--chip-text-small-margin": "0 3px",
  "--chip-text-mini-margin": "0 2px",
  "--chip-mini-font-size": "var(--font-size-xs)",
  "--chip-small-font-size": "var(--font-size-sm)",
  "--chip-normal-font-size": "var(--font-size-md)",
  "--chip-large-font-size": "var(--font-size-lg)"
}, HP = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, YP = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--date-picker-header-color": "#fff",
  "--date-picker-border-radius": "4px",
  "--date-picker-font-size": "var(--font-size-md)",
  "--date-picker-min-width": "290px",
  "--date-picker-title-hint-color": "#fff",
  "--date-picker-title-hint-font-size": "var(--font-size-md)",
  "--date-picker-title-height": "105px",
  "--date-picker-title-padding": "16px",
  "--date-picker-title-background": "var(--color-primary)",
  "--date-picker-title-color": "#fff",
  "--date-picker-title-year-font-size": "var(--font-size-md)",
  "--date-picker-title-year-font-weight": "500",
  "--date-picker-title-year-margin-bottom": "8px",
  "--date-picker-title-date-height": "48px",
  "--date-picker-title-date-font-size": "34px",
  "--date-picker-title-date-font-weight": "500",
  "--date-picker-title-date-range-font-size": "20px",
  "--date-picker-title-date-justify-content": "normal",
  "--date-picker-body-height": "280px",
  "--date-picker-body-padding": "0",
  "--date-picker-header-padding": "4px 16px",
  "--date-picker-actions-padding": "0 8px 12px 8px",
  "--date-picker-header-arrow-filter": "opacity(0.54)",
  "--month-picker-padding": "0 12px",
  "--month-picker-item-width": "33%",
  "--month-picker-item-height": "56px",
  "--month-picker-item-button-max-width": "140px",
  "--year-picker-padding": "0 12px",
  "--year-picker-item-width": "33%",
  "--year-picker-item-height": "56px",
  "--year-picker-item-button-max-width": "140px",
  "--day-picker-content-item-width": "14.28%",
  "--day-picker-content-item-font-size": "var(--font-size-sm)",
  "--day-picker-content-item-padding": "2px 0",
  "--day-picker-content-item-button-width": "32px",
  "--day-picker-content-item-button-height": "32px",
  "--day-picker-content-item-button-font-size": "var(--font-size-sm)",
  "--day-picker-head-item-padding": "8px 0",
  "--day-picker-head-item-font-weight": "600"
}, jP = {
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb",
  "--dialog-width": "280px",
  "--dialog-border-radius": "3px",
  "--dialog-title-padding": "20px 20px 0",
  "--dialog-message-padding": "12px 20px",
  "--dialog-message-line-height": "24px",
  "--dialog-message-font-size": "var(--font-size-md)",
  "--dialog-title-font-size": "var(--font-size-lg)",
  "--dialog-actions-padding": "0 12px 12px",
  "--dialog-button-margin-left": "6px",
  "--dialog-confirm-button-color": "var(--color-primary)",
  "--dialog-cancel-button-color": "var(--color-primary)",
  "--dialog-background": "var(--color-surface-container-low)"
}, WP = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, KP = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)",
  "--field-decorator-error-color": "var(--color-danger)",
  "--field-decorator-focus-color": "var(--color-primary)",
  "--field-decorator-placeholder-size": "16px",
  "--field-decorator-icon-size": "20px",
  "--field-decorator-line-size": "1px",
  "--field-decorator-line-focus-size": "2px",
  "--field-decorator-line-border-radius": "4px",
  "--field-decorator-disabled-color": "var(--color-text-disabled)",
  "--field-decorator-standard-normal-margin-top": "22px",
  "--field-decorator-standard-normal-margin-bottom": "4px",
  "--field-decorator-standard-normal-icon-margin-top": "22px",
  "--field-decorator-standard-normal-icon-margin-bottom": "4px",
  "--field-decorator-standard-normal-non-hint-margin-top": "4px",
  "--field-decorator-standard-small-margin-top": "18px",
  "--field-decorator-standard-small-margin-bottom": "4px",
  "--field-decorator-standard-small-icon-margin-top": "18px",
  "--field-decorator-standard-small-icon-margin-bottom": "4px",
  "--field-decorator-standard-small-non-hint-margin-top": "2px",
  "--field-decorator-outlined-normal-margin-top": "16px",
  "--field-decorator-outlined-normal-margin-bottom": "16px",
  "--field-decorator-outlined-normal-padding-left": "16px",
  "--field-decorator-outlined-normal-padding-right": "16px",
  "--field-decorator-outlined-normal-placeholder-space": "4px",
  "--field-decorator-outlined-normal-icon-margin-top": "16px",
  "--field-decorator-outlined-normal-icon-margin-bottom": "16px",
  "--field-decorator-outlined-small-margin-top": "8px",
  "--field-decorator-outlined-small-margin-bottom": "8px",
  "--field-decorator-outlined-small-padding-left": "12px",
  "--field-decorator-outlined-small-padding-right": "12px",
  "--field-decorator-outlined-small-placeholder-space": "2px",
  "--field-decorator-outlined-small-icon-margin-top": "8px",
  "--field-decorator-outlined-small-icon-margin-bottom": "8px"
}, qP = {
  "--pagination-text-color": "#fff",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-item-background": "#303030",
  "--pagination-font-size": "var(--font-size-md)",
  "--pagination-active-color": "var(--color-on-primary)",
  "--pagination-active-bg-color": "var(--color-primary)",
  "--pagination-total-margin": "0 12px",
  "--pagination-total-line-height": "24px",
  "--pagination-item-width": "32px",
  "--pagination-item-height": "32px",
  "--pagination-item-margin": "0 6px",
  "--pagination-item-border-radius": "4px",
  "--pagination-item-simple-border-radius": "50%",
  "--pagination-input-width": "32px",
  "--pagination-disabled-color": "var(--color-text-disabled)",
  "--pagination-bg-disabled-color": "var(--color-disabled)",
  "--pagination-size-line-height": "24px",
  "--pagination-size-padding": "0 6px"
}, XP = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))",
  "--picker-toolbar-height": "44px",
  "--picker-confirm-button-text-color": "var(--color-primary)",
  "--picker-picked-border": "1px solid var(--color-outline)",
  "--picker-title-font-size": "var(--font-size-lg)",
  "--picker-option-font-size": "var(--font-size-lg)",
  "--picker-toolbar-padding": "0 4px"
}, GP = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, ZP = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, JP = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, QP = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)",
  "--result-padding": "24px",
  "--result-border-radius": "3px",
  "--result-title-font-size": "32px",
  "--result-title-margin": "15px 0 0 0",
  "--result-image-size": "80px",
  "--result-title-font-weight": "500",
  "--result-description-margin": "10px 0 0 0",
  "--result-description-font-size": "14px",
  "--result-description-line-height": "1.6",
  "--result-info-color": "var(--color-info)",
  "--result-info-border-color": "rgba(0, 175, 239, 0.3)",
  "--result-success-color": "var(--color-success)",
  "--result-success-border-color": "rgba(0, 196, 143, 0.3)",
  "--result-error-color": "var(--color-danger)",
  "--result-error-border-color": "rgba(244, 67, 54, 0.3)",
  "--result-warning-color": "var(--color-warning)",
  "--result-warning-border-color": "rgba(255, 159, 0, 0.3)"
}, _P = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-content-padding": "16px",
  "--skeleton-card-height": "160px",
  "--skeleton-card-border-radius": "4px",
  "--skeleton-card-margin-bottom": "16px",
  "--skeleton-avatar-size": "34px",
  "--skeleton-avatar-border-radius": "50%",
  "--skeleton-avatar-margin-right": "16px",
  "--skeleton-title-width": "50%",
  "--skeleton-title-border-radius": "10px",
  "--skeleton-row-height": "12px",
  "--skeleton-row-border-radius": "10px",
  "--skeleton-row-margin-top": "10px"
}, xP = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff",
  "--step-tag-size": "20px",
  "--step-tag-background": "#9e9e9e",
  "--step-tag-font-size": "var(--font-size-md)",
  "--step-tag-color": "var(--color-on-primary)",
  "--step-tag-active-color": "var(--color-primary)",
  "--step-tag-margin": "4px 0",
  "--step-tag-icon-size": "var(--font-size-lg)",
  "--step-content-font-size": "var(--font-size-md)",
  "--step-line-gap": "8px",
  "--step-vertical-tag-margin": "0 4px",
  "--step-vertical-min-height": "50px"
}, ez = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272",
  "--switch-track-active-background": "var(--color-primary)",
  "--switch-track-error-background": "var(--color-danger)",
  "--switch-ripple-color": "var(--color-primary)",
  "--switch-handle-color": "var(--color-on-primary)",
  "--switch-handle-active-color": "var(--color-on-primary)",
  "--switch-handle-active-background": "var(--color-primary)",
  "--switch-handle-error-background": "var(--color-danger)",
  "--switch-disabled-opacity": "var(--opacity-disabled)",
  "--switch-variant-width": "52px",
  "--switch-variant-height": "32px",
  "--switch-variant-track-background": "var(--color-surface-container-highest)",
  "--switch-variant-handle-width": "24px",
  "--switch-variant-handle-height": "24px",
  "--switch-variant-track-border-color": "rgb(255, 255, 255, .7)",
  "--switch-variant-handle-background": "rgb(255, 255, 255, .7)",
  "--switch-variant-handle-color": "var(--color-primary)",
  "--switch-variant-handle-active-color": "var(--color-primary)",
  "--switch-variant-handle-active-background": "var(--color-on-primary)"
}, nz = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, oz = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-thead-th-text-align": "left",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-border-radius": "2px",
  "--table-thead-border-bottom": "thin solid var(--color-outline)",
  "--table-thead-th-font-size": "14px",
  "--table-thead-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-td-font-size": "16px",
  "--table-tbody-td-text-align": "left",
  "--table-row-height": "46px",
  "--table-row-padding": "0 16px",
  "--table-footer-border-top": "thin solid var(--color-outline)"
}, rz = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#fff",
  "--time-picker-clock-item-disable-background": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff",
  "--time-picker-border-radius": "4px",
  "--time-picker-font-size": "var(--font-size-md)",
  "--time-picker-min-width": "290px",
  "--time-picker-title-height": "105px",
  "--time-picker-title-padding": "16px",
  "--time-picker-title-margin-bottom": "8px",
  "--time-picker-title-color": "#fff",
  "--time-picker-title-background": "var(--color-primary)",
  "--time-picker-title-hint-color": "#fff",
  "--time-picker-title-hint-font-size": "14px",
  "--time-picker-title-inactive-opacity": "0.6",
  "--time-picker-title-time-font-size": "50px",
  "--time-picker-title-time-margin": "0 5px",
  "--time-picker-title-time-border-radius": "0",
  "--time-picker-title-time-padding": "0",
  "--time-picker-title-time-background": "transparent",
  "--time-picker-title-time-active-background": "transparent",
  "--time-picker-title-ampm-button-active-background": "transparent",
  "--time-picker-title-ampm-margin-left": "10px",
  "--time-picker-title-ampm-border-radius": "0",
  "--time-picker-title-ampm-border": "none",
  "--time-picker-title-ampm-button-padding": "2px",
  "--time-picker-clock-left": "27px",
  "--time-picker-clock-right": "27px",
  "--time-picker-clock-top": "27px",
  "--time-picker-clock-bottom": "27px",
  "--time-picker-clock-container-width": "256px",
  "--time-picker-clock-container-height": "256px",
  "--time-picker-clock-hand-height": "calc(50% - 4px)",
  "--time-picker-clock-hand-width": "2px",
  "--time-picker-clock-hand-bottom": "50%",
  "--time-picker-clock-hand-left": "calc(50% - 1px)",
  "--time-picker-clock-hand-background": "var(--color-primary)",
  "--time-picker-clock-hand-border-color": "var(--color-primary)",
  "--time-picker-clock-hand-before-width": "10px",
  "--time-picker-clock-hand-before-height": "10px",
  "--time-picker-clock-hand-before-border-width": "2px",
  "--time-picker-clock-hand-after-width": "4px",
  "--time-picker-clock-hand-after-height": "4px",
  "--time-picker-clock-item-height": "32px",
  "--time-picker-clock-item-width": "32px",
  "--time-picker-clock-item-active-background": "var(--color-primary)",
  "--time-picker-clock-item-active-color": "var(--color-on-primary)",
  "--time-picker-inner-left": "36px",
  "--time-picker-inner-right": "36px",
  "--time-picker-inner-top": "36px",
  "--time-picker-inner-bottom": "36px",
  "--time-picker-body-height": "288px",
  "--time-picker-actions-padding": "0 8px 12px 8px",
  "--time-picker-title-time-container-justify-content": "flex-end"
}, tz = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030",
  "--uploader-action-icon-size": "24px",
  "--uploader-action-margin": "0 10px 10px 0",
  "--uploader-file-size": "80px",
  "--uploader-file-margin": "0 10px 10px 0",
  "--uploader-file-name-font-size": "12px",
  "--uploader-file-name-padding": "10px",
  "--uploader-file-text-align": "center",
  "--uploader-file-border-radius": "0",
  "--uploader-file-close-background": "rgba(0, 0, 0, 0.3)",
  "--uploader-file-close-size": "24px",
  "--uploader-file-close-icon-font-size": "14px",
  "--uploader-file-close-icon-color": "#fff",
  "--uploader-file-cover-fit": "cover",
  "--uploader-preview-video-width": "100vw",
  "--uploader-preview-video-height": "100vw",
  "--uploader-file-indicator-height": "4px",
  "--uploader-file-indicator-normal-color": "var(--color-disabled)",
  "--uploader-file-indicator-success-color": "var(--color-success)",
  "--uploader-file-indicator-error-color": "var(--color-danger)",
  "--uploader-file-progress-color": "var(--color-primary)",
  "--uploader-disabled-color": "var(--color-disabled)",
  "--uploader-disabled-text-color": "var(--color-text-disabled)",
  "--uploader-loading-background": "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))"
}, az = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, iz = {
  "--app-bar-color": "#272727",
  "--app-bar-title-padding": "0 12px",
  "--app-bar-title-font-size": "var(--font-size-lg)",
  "--app-bar-text-color": "#fff",
  "--app-bar-height": "54px",
  "--app-bar-left-gap": "6px",
  "--app-bar-right-gap": "6px",
  "--app-bar-border-radius": "4px",
  "--app-bar-font-size": "var(--font-size-lg)",
  "--app-bar-border-bottom": "thin solid var(--color-outline)"
}, lz = {
  "--bottom-navigation-item-inactive-color": "#BFBFBF",
  "--bottom-navigation-item-font-size": "var(--font-size-sm)",
  "--bottom-navigation-item-active-color": "var(--color-primary)",
  "--bottom-navigation-item-active-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-item-variant-active-background-color": "var(--color-primary-container)",
  "--bottom-navigation-item-variant-active-color": "var(--color-on-primary-container)",
  "--bottom-navigation-fab-border-radius": "50%",
  "--bottom-navigation-item-line-height": "1",
  "--bottom-navigation-item-icon-size": "22px",
  "--bottom-navigation-item-icon-margin-bottom": "5px",
  "--bottom-navigation-item-variant-icon-container-height": "30px",
  "--bottom-navigation-item-variant-icon-container-border-radius": "100px",
  "--bottom-navigation-item-variant-icon-container-max-width": "58px"
}, sz = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
}, uz = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, cz = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, dz = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, fz = {
  "--progress-label-color": "#fff",
  "--progress-font-size": "var(--font-size-sm)",
  "--progress-track-color": "#d8d8d8",
  "--progress-background": "var(--color-primary)",
  "--progress-default-color": "#f5f5f5",
  "--progress-primary-color": "var(--color-primary)",
  "--progress-danger-color": "var(--color-danger)",
  "--progress-success-color": "var(--color-success)",
  "--progress-warning-color": "var(--color-warning)",
  "--progress-info-color": "var(--color-info)",
  "--progress-linear-border-radius": "0px"
}, pz = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, vz = {
  "--watermark-content-color": "#ffffff"
}, mz = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, hz = {
  "--menu-option-text-color": "#fff",
  "--menu-option-normal-height": "38px",
  "--menu-option-small-height": "30px",
  "--menu-option-mini-height": "24px",
  "--menu-option-large-height": "46px",
  "--menu-option-padding": "0 12px",
  "--menu-option-normal-font-size": "var(--font-size-md)",
  "--menu-option-small-font-size": "var(--font-size-sm)",
  "--menu-option-mini-font-size": "var(--font-size-xs)",
  "--menu-option-large-font-size": "var(--font-size-lg)",
  "--menu-option-selected-background": "var(--color-primary)",
  "--menu-option-disabled-color": "var(--color-text-disabled)"
}, gz = {
  "--avatar-group-offset": "-10px"
}, bz = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, yz = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, kz = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, $z = {
  "--counter-padding": "0 4px",
  "--counter-font-color": "#fff",
  "--counter-background": "var(--color-primary)",
  "--counter-input-width": "28px",
  "--counter-input-margin": "0 4px",
  "--counter-input-font-size": "14px",
  "--counter-button-size": "28px",
  "--counter-button-text-color": "#fff",
  "--counter-button-icon-size": "100%",
  "--counter-disabled-color": "var(--color-disabled)",
  "--counter-disabled-opacity": "var(--opacity-disabled)",
  "--counter-error-color": "var(--color-danger)"
}, wz = {
  "--fab-top": "70px",
  "--fab-bottom": "16px",
  "--fab-left": "16px",
  "--fab-right": "16px",
  "--fab-trigger-size": "56px",
  "--fab-trigger-border-radius": "50%",
  "--fab-trigger-inactive-icon-size": "26px",
  "--fab-trigger-active-icon-size": "22px",
  "--fab-actions-padding": "10px 0",
  "--fab-action-margin": "6px",
  "--fab-action-size": "40px",
  "--fab-action-border-radius": "50%",
  "--fab-transition-standard-easing": "cubic-bezier(0.4, 0, 0.2, 1)"
}, Cz = {
  "--floating-panel-z-index": "999",
  "--floating-panel-border-top": "none",
  "--floating-panel-border-radius": "0",
  "--floating-panel-background": "var(--color-surface-container-high)",
  "--floating-panel-header-height": "30px",
  "--floating-panel-toolbar-width": "20px",
  "--floating-panel-toolbar-height": "3px",
  "--floating-panel-toolbar-border-radius": "10px",
  "--floating-panel-toolbar-background": "#ddd",
  "--floating-panel-transition-timing-function": "cubic-bezier(0.18, 0.89, 0.32, 1.28)"
}, Sz = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, Pz = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, zz = {
  "--icon-size": "20px"
}, Oz = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, Tz = {
  "--index-bar-list-right": "0",
  "--index-bar-list-top": "50%",
  "--index-bar-list-left": "auto",
  "--index-bar-list-bottom": "auto",
  "--index-bar-list-transform": "translate(0, -50%)",
  "--index-bar-list-item-font-size": "var(--font-size-xs)",
  "--index-bar-list-item-color": "var(--color-primary)",
  "--index-bar-list-item-active-color": "var(--color-danger)",
  "--index-bar-list-item-height": "14px",
  "--index-bar-list-item-padding": "0 10px"
}, Ez = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, Bz = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, Dz = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, Iz = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, Mz = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, Nz = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "4px"
}, Az = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, Vz = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, Rz = {
  "--slider-error-color": "var(--color-danger)",
  "--slider-track-background": "#bdbdbd",
  "--slider-track-height": "2px",
  "--slider-track-border-radius": "0",
  "--slider-track-fill-border-radius": "0",
  "--slider-track-fill-background": "var(--color-primary)",
  "--slider-thumb-block-background": "var(--color-primary)",
  "--slider-thumb-ripple-background": "var(--color-primary)",
  "--slider-thumb-label-background": "var(--color-primary)",
  "--slider-thumb-label-font-size": "var(--font-size-sm)",
  "--slider-thumb-label-text-color": "var(--color-on-primary)",
  "--slider-thumb-size": "12px",
  "--slider-disabled-opacity": "var(--opacity-disabled)"
}, Lz = {
  "--snackbar-width": "256px",
  "--snackbar-color": "rgba(255, 255, 255, 0.87)",
  "--snackbar-border-radius": "4px",
  "--snackbar-background": "#333",
  "--snackbar-font-size": "var(--font-size-md)",
  "--snackbar-margin": "6px 24px",
  "--snackbar-border-color": "currentColor",
  "--snackbar-success-background": "var(--color-success)",
  "--snackbar-info-background": "var(--color-info)",
  "--snackbar-error-background": "var(--color-danger)",
  "--snackbar-warning-background": "var(--color-warning)",
  "--snackbar-content-padding": "14px 16px",
  "--snackbar-action-margin": "0 8px",
  "--snackbar-vertical-action-margin": "0 8px 8px 0",
  "--snackbar-icon-margin": "0 8px"
}, Fz = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, Uz = {
  "--swipe-indicator-color": "#fff",
  "--swipe-indicators-offset": "10px",
  "--swipe-indicator-offset": "4px",
  "--swipe-navigation-z-index": "9",
  "--swipe-navigation-button-width": "36px",
  "--swipe-navigation-button-height": "36px",
  "--swipe-navigation-button-border-radius": "50%",
  "--swipe-navigation-icon-size": "20px",
  "--swipe-navigation-prev-left": "8px",
  "--swipe-navigation-next-right": "8px",
  "--swipe-navigation-prev-top": "8px",
  "--swipe-navigation-next-bottom": "8px"
}, Hz = {
  "--tooltip-opacity": "0.9",
  "--tooltip-border-radius": "4px",
  "--tooltip-font-size": "14px",
  "--tooltip-padding": "8px 16px",
  "--tooltip-offset": "10px",
  "--tooltip-default-color": "#616161",
  "--tooltip-primary-color": "var(--color-primary)",
  "--tooltip-info-color": "var(--color-info)",
  "--tooltip-success-color": "var(--color-success)",
  "--tooltip-warning-color": "var(--color-warning)",
  "--tooltip-danger-color": "var(--color-danger)",
  "--tooltip-default-text-color": "#fff",
  "--tooltip-primary-text-color": "var(--color-on-primary)",
  "--tooltip-info-text-color": "var(--color-on-info)",
  "--tooltip-success-text-color": "var(--color-on-success)",
  "--tooltip-warning-text-color": "var(--color-on-warning)",
  "--tooltip-danger-text-color": "var(--color-on-danger)"
}, Yz = {
  "--select-scroller-background": "#272727",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-scroller-border-radius": "2px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, jz = Object.defineProperty, vd = Object.getOwnPropertySymbols, Wz = Object.prototype.hasOwnProperty, Kz = Object.prototype.propertyIsEnumerable, md = (e, n, o) => n in e ? jz(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, he = (e, n) => {
  for (var o in n || (n = {}))
    Wz.call(n, o) && md(e, o, n[o]);
  if (vd)
    for (var o of vd(n))
      Kz.call(n, o) && md(e, o, n[o]);
  return e;
}, qz = he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he({
  "--font-size-xs": "10px",
  "--font-size-sm": "12px",
  "--font-size-md": "14px",
  "--font-size-lg": "16px",
  "--icon-size-xs": "16px",
  "--icon-size-sm": "18px",
  "--icon-size-md": "20px",
  "--icon-size-lg": "22px",
  "--hsl-body": "0, 0%, 12%",
  "--color-body": "hsla(var(--hsl-body), 1)",
  "--hsl-text": "0, 0%, 100%",
  "--color-text": "hsla(var(--hsl-text), 1)",
  "--hsl-primary": "224, 99%, 64%",
  "--color-primary": "hsla(var(--hsl-primary), 1)",
  "--hsl-info": "197, 87%, 50%",
  "--color-info": "hsla(var(--hsl-info), 1)",
  "--hsl-success": "162, 85%, 42%",
  "--color-success": "hsla(var(--hsl-success), 1)",
  "--hsl-warning": "32, 100%, 50%",
  "--color-warning": "hsla(var(--hsl-warning), 1)",
  "--hsl-danger": "1, 83%, 63%",
  "--color-danger": "hsla(var(--hsl-danger), 1)",
  "--hsl-on-primary": "0, 0%, 100%",
  "--color-on-primary": "hsla(var(--hsl-on-primary), 1)",
  "--hsl-on-info": "0, 0%, 100%",
  "--color-on-info": "hsla(var(--hsl-on-info), 1)",
  "--hsl-on-success": "0, 0%, 100%",
  "--color-on-success": "hsla(var(--hsl-on-success), 1)",
  "--hsl-on-warning": "0, 0%, 100%",
  "--color-on-warning": "hsla(var(--hsl-on-warning), 1)",
  "--hsl-on-danger": "0, 0%, 100%",
  "--color-on-danger": "hsla(var(--hsl-on-danger), 1)",
  "--hsl-primary-container": "224, 99%, 64%",
  "--color-primary-container": "hsla(var(--hsl-primary-container), 1)",
  "--hsl-info-container": "197, 87%, 50%",
  "--color-info-container": "hsla(var(--hsl-info-container), 1)",
  "--hsl-success-container": "162, 85%, 42%",
  "--color-success-container": "hsla(var(--hsl-success-container), 1)",
  "--hsl-warning-container": "32, 100%, 50%",
  "--color-warning-container": "hsla(var(--hsl-warning-container), 1)",
  "--hsl-danger-container": "1, 83%, 63%",
  "--color-danger-container": "hsla(var(--hsl-danger-container), 1)",
  "--hsl-on-primary-container": "0, 0%, 100%",
  "--color-on-primary-container": "hsla(var(--hsl-on-primary-container), 1)",
  "--hsl-on-info-container": "0, 0%, 100%",
  "--color-on-info-container": "hsla(var(--hsl-on-info-container), 1)",
  "--hsl-on-success-container": "0, 0%, 100%",
  "--color-on-success-container": "hsla(var(--hsl-on-success-container), 1)",
  "--hsl-on-warning-container": "0, 0%, 100%",
  "--color-on-warning-container": "hsla(var(--hsl-on-warning-container), 1)",
  "--hsl-on-danger-container": "0, 0%, 100%",
  "--color-on-danger-container": "hsla(var(--hsl-on-danger-container), 1)",
  "--hsl-disabled": "0, 0%, 25%",
  "--color-disabled": "hsla(var(--hsl-disabled), 1)",
  "--hsl-text-disabled": "0, 0%, 46%",
  "--color-text-disabled": "hsla(var(--hsl-text-disabled), 1)",
  "--hsl-surface-container": "0, 0%, 12%",
  "--color-surface-container": "hsla(var(--hsl-surface-container), 1)",
  "--hsl-surface-container-low": "0, 0%, 12%",
  "--color-surface-container-low": "hsla(var(--hsl-surface-container-low), 1)",
  "--hsl-surface-container-high": "0, 0%, 15%",
  "--color-surface-container-high": "hsla(var(--hsl-surface-container-high), 1)",
  "--hsl-surface-container-highest": "0, 0%, 19%",
  "--color-surface-container-highest": "hsla(var(--hsl-surface-container-highest), 1)",
  "--hsl-inverse-surface": "0, 0%, 100%",
  "--color-inverse-surface": "hsla(var(--hsl-inverse-surface), 1)",
  "--hsl-outline": "0, 0%, 100%",
  "--color-outline": "hsla(var(--hsl-outline), 0.2)",
  "--hsl-on-surface-variant": "0, 0%, 100%",
  "--color-on-surface-variant": "hsla(var(--hsl-on-surface-variant), 1)",
  "--opacity-disabled": "0.6",
  "--opacity-hover": "0.15",
  "--opacity-focus": "0.2",
  "--cubic-bezier": "cubic-bezier(0.25, 0.8, 0.5, 1)",
  "--shadow-key-umbra-opacity": "rgba(0, 0, 0, 0.2)",
  "--shadow-key-penumbra-opacity": "rgba(0, 0, 0, 0.14)",
  "--shadow-key-ambient-opacity": "rgba(0, 0, 0, 0.12)"
}, VP), LP), RP), rz), YP), _P), az), nz), GP), jP), NP), UP), AP), tz), HP), ZP), ez), xP), qP), oz), KP), JP), FP), WP), XP), iz), lz), sz), QP), uz), cz), dz), fz), pz), vz), mz), hz), gz), bz), yz), kz), $z), wz), Cz), Sz), Pz), zz), Oz), Tz), Ez), Bz), Dz), Iz), Mz), Nz), Az), Vz), Rz), Lz), Fz), Uz), Hz), Yz), Xz = {
  "--button-default-color": "var(--color-surface-container-low)",
  "--button-default-text-color": "var(--color-primary)",
  "--button-default-icon-color": "var(--color-on-info-container)",
  "--button-default-icon-container-color": "var(--color-surface-container-high)",
  "--button-border-radius": "100px",
  "--button-primary-text-color": "var(--color-on-primary)",
  "--button-danger-text-color": "var(--color-on-danger)",
  "--button-success-text-color": "var(--color-on-success)",
  "--button-warning-text-color": "var(--color-on-warning)",
  "--button-info-text-color": "var(--color-on-info)",
  "--button-primary-color": "var(--color-primary)",
  "--button-danger-color": "var(--color-danger)",
  "--button-success-color": "var(--color-success)",
  "--button-warning-color": "var(--color-warning)",
  "--button-info-color": "var(--color-info)",
  "--button-primary-icon-color": "var(--color-on-primary-container)",
  "--button-danger-icon-color": "var(--color-on-danger-container)",
  "--button-success-icon-color": "var(--color-on-success-container)",
  "--button-warning-icon-color": "var(--color-on-warning-container)",
  "--button-info-icon-color": "var(--color-on-info-container)",
  "--button-primary-icon-container-color": "var(--color-primary-container)",
  "--button-danger-icon-container-color": "var(--color-danger-container)",
  "--button-success-icon-container-color": "var(--color-success-container)",
  "--button-warning-icon-container-color": "var(--color-warning-container)",
  "--button-info-icon-container-color": "var(--color-info-container)",
  "--button-disabled-color": "var(--color-disabled)",
  "--button-disabled-text-color": "var(--color-text-disabled)",
  "--button-mini-padding": "0 8px",
  "--button-small-padding": "0 12px",
  "--button-normal-padding": "0 16px",
  "--button-large-padding": "0 22px",
  "--button-round-padding": "6px",
  "--button-mini-height": "20px",
  "--button-small-height": "28px",
  "--button-normal-height": "36px",
  "--button-large-height": "44px",
  "--button-mini-font-size": "var(--font-size-xs)",
  "--button-small-font-size": "var(--font-size-sm)",
  "--button-normal-font-size": "var(--font-size-md)",
  "--button-large-font-size": "var(--font-size-lg)"
}, Gz = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, Zz = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, Jz = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, Qz = {
  "--menu-option-text-color": "#1D1B20",
  "--menu-option-normal-height": "38px",
  "--menu-option-small-height": "30px",
  "--menu-option-mini-height": "24px",
  "--menu-option-large-height": "46px",
  "--menu-option-padding": "0 12px",
  "--menu-option-normal-font-size": "var(--font-size-md)",
  "--menu-option-small-font-size": "var(--font-size-sm)",
  "--menu-option-mini-font-size": "var(--font-size-xs)",
  "--menu-option-large-font-size": "var(--font-size-lg)",
  "--menu-option-selected-background": "var(--color-primary)",
  "--menu-option-disabled-color": "var(--color-text-disabled)"
}, _z = {
  "--fab-trigger-border-radius": "16px",
  "--fab-action-size": "40px",
  "--fab-action-border-radius": "12px",
  "--fab-top": "70px",
  "--fab-bottom": "16px",
  "--fab-left": "16px",
  "--fab-right": "16px",
  "--fab-trigger-size": "56px",
  "--fab-trigger-inactive-icon-size": "26px",
  "--fab-trigger-active-icon-size": "22px",
  "--fab-actions-padding": "10px 0",
  "--fab-action-margin": "6px",
  "--fab-transition-standard-easing": "cubic-bezier(0.4, 0, 0.2, 1)"
}, xz = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, eO = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, nO = {
  "--cell-description-color": "var(--color-on-surface-variant)",
  "--cell-color": "var(--color-text)",
  "--cell-font-size": "var(--font-size-md)",
  "--cell-description-font-size": "var(--font-size-sm)",
  "--cell-description-margin-top": "4px",
  "--cell-padding": "10px 12px",
  "--cell-min-height": "40px",
  "--cell-border-color": "var(--color-outline)",
  "--cell-border-left": "12px",
  "--cell-border-right": "12px",
  "--cell-icon-right": "8px",
  "--cell-extra-left": "8px"
}, oO = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-border-radius": "12px"
}, rO = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, tO = {
  "--field-decorator-text-color": "#1D1B20",
  "--field-decorator-blur-color": "#79747E",
  "--field-decorator-error-color": "var(--color-danger)",
  "--field-decorator-focus-color": "var(--color-primary)",
  "--field-decorator-placeholder-size": "16px",
  "--field-decorator-icon-size": "20px",
  "--field-decorator-line-size": "1px",
  "--field-decorator-line-focus-size": "2px",
  "--field-decorator-line-border-radius": "4px",
  "--field-decorator-disabled-color": "var(--color-text-disabled)",
  "--field-decorator-standard-normal-margin-top": "22px",
  "--field-decorator-standard-normal-margin-bottom": "4px",
  "--field-decorator-standard-normal-icon-margin-top": "22px",
  "--field-decorator-standard-normal-icon-margin-bottom": "4px",
  "--field-decorator-standard-normal-non-hint-margin-top": "4px",
  "--field-decorator-standard-small-margin-top": "18px",
  "--field-decorator-standard-small-margin-bottom": "4px",
  "--field-decorator-standard-small-icon-margin-top": "18px",
  "--field-decorator-standard-small-icon-margin-bottom": "4px",
  "--field-decorator-standard-small-non-hint-margin-top": "2px",
  "--field-decorator-outlined-normal-margin-top": "16px",
  "--field-decorator-outlined-normal-margin-bottom": "16px",
  "--field-decorator-outlined-normal-padding-left": "16px",
  "--field-decorator-outlined-normal-padding-right": "16px",
  "--field-decorator-outlined-normal-placeholder-space": "4px",
  "--field-decorator-outlined-normal-icon-margin-top": "16px",
  "--field-decorator-outlined-normal-icon-margin-bottom": "16px",
  "--field-decorator-outlined-small-margin-top": "8px",
  "--field-decorator-outlined-small-margin-bottom": "8px",
  "--field-decorator-outlined-small-padding-left": "12px",
  "--field-decorator-outlined-small-padding-right": "12px",
  "--field-decorator-outlined-small-placeholder-space": "2px",
  "--field-decorator-outlined-small-icon-margin-top": "8px",
  "--field-decorator-outlined-small-icon-margin-bottom": "8px"
}, aO = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, iO = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, lO = {
  "--card-border-radius": "12px",
  "--card-background": "var(--color-surface-container-low)",
  "--card-filled-background": "var(--color-surface-container-highest)",
  "--card-image-height": "188px",
  "--card-title-color": "#1D1B20",
  "--card-title-font-size": "16px",
  "--card-title-padding": "0 16px",
  "--card-title-margin": "16px 0 0 0",
  "--card-content-padding": "0 16px",
  "--card-content-margin": "16px 0 0 0",
  "--card-content-color": "var(--color-on-surface-variant)",
  "--card-content-font-size": "14px",
  "--card-content-row-margin": "16px 0 0 0",
  "--card-subtitle-color": "var(--color-on-surface-variant)",
  "--card-subtitle-padding": "0 16px",
  "--card-subtitle-margin": "4px 0 0 0",
  "--card-description-margin": "32px 0 0 0",
  "--card-description-padding": "0 16px",
  "--card-description-color": "var(--color-on-surface-variant)",
  "--card-padding": "0 0 16px 0",
  "--card-footer-margin": "32px 0 0 0",
  "--card-title-row-margin": "16px 0 0 0",
  "--card-subtitle-row-margin": "4px 0 0 0",
  "--card-footer-padding": "0 16px",
  "--card-close-button-size": "56px",
  "--card-close-button-primary-color": "var(--color-primary-container)",
  "--card-close-button-text-color": "var(--color-on-primary-container)",
  "--card-close-button-border-radius": "12px",
  "--card-outline-color": "var(--color-outline)",
  "--card-image-width": "100%",
  "--card-row-image-width": "140px",
  "--card-row-height": "140px",
  "--card-subtitle-font-size": "14px",
  "--card-description-font-size": "14px",
  "--card-footer-right": "13px",
  "--card-footer-bottom": "9px",
  "--card-line-height": "22px",
  "--card-row-line-height": "1.5",
  "--card-floating-buttons-bottom": "16px",
  "--card-floating-buttons-right": "16px",
  "--card-floating-buttons-color": "#fff",
  "--card-close-button-icon-size": "24px"
}, sO = {
  "--chip-round-radius": "8px",
  "--chip-default-color": "var(--color-surface-container-high)",
  "--chip-default-text-color": "#1D192B",
  "--chip-primary-text-color": "var(--color-on-primary-container)",
  "--chip-danger-text-color": "var(--color-on-danger-container)",
  "--chip-success-text-color": "var(--color-on-success-container)",
  "--chip-warning-text-color": "var(--color-on-warning-container)",
  "--chip-info-text-color": "var(--color-on-info-container)",
  "--chip-primary-color": "var(--color-primary-container)",
  "--chip-danger-color": "var(--color-danger-container)",
  "--chip-success-color": "var(--color-success-container)",
  "--chip-warning-color": "var(--color-warning-container)",
  "--chip-info-color": "var(--color-info-container)",
  "--chip-primary-plain-color": "var(--color-primary)",
  "--chip-danger-plain-color": "var(--color-danger)",
  "--chip-success-plain-color": "var(--color-success)",
  "--chip-warning-plain-color": "var(--color-warning)",
  "--chip-info-plain-color": "var(--color-info)",
  "--chip-border-radius": "2px",
  "--chip-normal-height": "32px",
  "--chip-large-height": "40px",
  "--chip-small-height": "24px",
  "--chip-mini-height": "16px",
  "--chip-normal-padding": "0 10px",
  "--chip-large-padding": "0 17px",
  "--chip-small-padding": "0 6px",
  "--chip-mini-padding": "0 4px",
  "--chip-text-normal-margin": "0 5px",
  "--chip-text-large-margin": "0 5px",
  "--chip-text-small-margin": "0 3px",
  "--chip-text-mini-margin": "0 2px",
  "--chip-mini-font-size": "var(--font-size-xs)",
  "--chip-small-font-size": "var(--font-size-sm)",
  "--chip-normal-font-size": "var(--font-size-md)",
  "--chip-large-font-size": "var(--font-size-lg)"
}, uO = {
  "--tooltip-default-color": "var(--color-inverse-surface)",
  "--tooltip-opacity": "1",
  "--tooltip-border-radius": "4px",
  "--tooltip-font-size": "14px",
  "--tooltip-padding": "8px 16px",
  "--tooltip-offset": "10px",
  "--tooltip-primary-color": "var(--color-primary)",
  "--tooltip-info-color": "var(--color-info)",
  "--tooltip-success-color": "var(--color-success)",
  "--tooltip-warning-color": "var(--color-warning)",
  "--tooltip-danger-color": "var(--color-danger)",
  "--tooltip-default-text-color": "#fff",
  "--tooltip-primary-text-color": "var(--color-on-primary)",
  "--tooltip-info-text-color": "var(--color-on-info)",
  "--tooltip-success-text-color": "var(--color-on-success)",
  "--tooltip-warning-text-color": "var(--color-on-warning)",
  "--tooltip-danger-text-color": "var(--color-on-danger)"
}, cO = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, dO = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, fO = {
  "--table-background": "var(--color-surface-container-low)",
  "--table-tbody-tr-hover-background": "var(--color-surface-container-low)",
  "--table-border-radius": "2px",
  "--table-thead-border-bottom": "thin solid var(--color-outline)",
  "--table-thead-th-text-color": "rgba(0, 0, 0, 0.6)",
  "--table-thead-th-text-align": "left",
  "--table-thead-th-font-size": "14px",
  "--table-thead-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-td-text-color": "#555",
  "--table-tbody-td-font-size": "16px",
  "--table-tbody-td-text-align": "left",
  "--table-row-height": "46px",
  "--table-row-padding": "0 16px",
  "--table-footer-border-top": "thin solid var(--color-outline)"
}, pO = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, vO = {
  "--result-background": "var(--color-body)",
  "--result-border-radius": "12px",
  "--result-title-color": "#1D1B20",
  "--result-description-color": "var(--color-on-surface-variant)",
  "--result-info-border-color": "rgba(98, 91, 113, 0.3)",
  "--result-success-border-color": "rgba(83, 101, 37, 0.3)",
  "--result-error-border-color": "rgba(179, 38, 30, 0.3)",
  "--result-warning-border-color": "rgba(125, 82, 96, 0.3)",
  "--result-padding": "24px",
  "--result-title-font-size": "32px",
  "--result-title-margin": "15px 0 0 0",
  "--result-image-size": "80px",
  "--result-title-font-weight": "500",
  "--result-description-margin": "10px 0 0 0",
  "--result-description-font-size": "14px",
  "--result-description-line-height": "1.6",
  "--result-info-color": "var(--color-info)",
  "--result-success-color": "var(--color-success)",
  "--result-error-color": "var(--color-danger)",
  "--result-warning-color": "var(--color-warning)",
  "--result-question-color": "#607d8b",
  "--result-question-border-color": "rgba(96, 125, 139, 0.3)",
  "--result-empty-color": "#9e9e9e",
  "--result-empty-border-color": "rgba(158, 158, 158, 0.3)"
}, mO = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, hO = {
  "--bottom-navigation-item-active-background-color": "var(--color-info-container)",
  "--bottom-navigation-item-inactive-color": "var(--color-on-surface-variant)",
  "--bottom-navigation-item-variant-active-background-color": "var(--color-info-container)",
  "--bottom-navigation-item-variant-active-color": "var(--color-on-info-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-item-font-size": "var(--font-size-sm)",
  "--bottom-navigation-item-active-color": "var(--color-primary)",
  "--bottom-navigation-item-line-height": "1",
  "--bottom-navigation-item-icon-size": "22px",
  "--bottom-navigation-item-icon-margin-bottom": "5px",
  "--bottom-navigation-item-variant-icon-container-height": "30px",
  "--bottom-navigation-item-variant-icon-container-border-radius": "100px",
  "--bottom-navigation-item-variant-icon-container-max-width": "58px"
}, gO = {
  "--snackbar-color": "#F5EFF7",
  "--snackbar-background": "var(--color-inverse-surface)",
  "--snackbar-width": "256px",
  "--snackbar-border-radius": "4px",
  "--snackbar-font-size": "var(--font-size-md)",
  "--snackbar-margin": "6px 24px",
  "--snackbar-border-color": "currentColor",
  "--snackbar-success-background": "var(--color-success)",
  "--snackbar-info-background": "var(--color-info)",
  "--snackbar-error-background": "var(--color-danger)",
  "--snackbar-warning-background": "var(--color-warning)",
  "--snackbar-content-padding": "14px 16px",
  "--snackbar-action-margin": "0 8px",
  "--snackbar-vertical-action-margin": "0 8px 8px 0",
  "--snackbar-icon-margin": "0 8px"
}, bO = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, yO = {
  "--dialog-width": "312px",
  "--dialog-background": "var(--color-surface-container-high)",
  "--dialog-title-color": "#1D1B20",
  "--dialog-message-color": "var(--color-on-surface-variant)",
  "--dialog-border-radius": "28px",
  "--dialog-title-padding": "24px 24px 0",
  "--dialog-message-padding": "16px 24px 24px",
  "--dialog-actions-padding": "0 24px 24px",
  "--dialog-title-font-size": "20px",
  "--dialog-button-margin-left": "8px",
  "--dialog-message-line-height": "24px",
  "--dialog-message-font-size": "var(--font-size-md)",
  "--dialog-confirm-button-color": "var(--color-primary)",
  "--dialog-cancel-button-color": "var(--color-primary)"
}, kO = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, $O = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, wO = {
  "--picker-background": "var(--color-body)",
  "--picker-cancel-button-text-color": "var(--color-primary)",
  "--picker-mask-background-image": "linear-gradient(180deg, rgba(254, 247, 255, 0.9), rgba(254, 247, 255, 0.4)), linear-gradient(0deg, rgba(254, 247, 255, 0.9), rgba(254, 247, 255, 0.4))",
  "--picker-toolbar-height": "44px",
  "--picker-confirm-button-text-color": "var(--color-primary)",
  "--picker-picked-border": "1px solid var(--color-outline)",
  "--picker-title-font-size": "var(--font-size-lg)",
  "--picker-title-text-color": "#555",
  "--picker-option-font-size": "var(--font-size-lg)",
  "--picker-option-text-color": "#555",
  "--picker-toolbar-padding": "0 4px"
}, CO = {
  "--floating-panel-background": "var(--color-surface-container-low)",
  "--floating-panel-toolbar-background": "#79747E",
  "--floating-panel-toolbar-width": "32px",
  "--floating-panel-toolbar-height": "4px",
  "--floating-panel-header-height": "36px",
  "--floating-panel-z-index": "999",
  "--floating-panel-border-top": "none",
  "--floating-panel-border-radius": "0",
  "--floating-panel-toolbar-border-radius": "10px",
  "--floating-panel-transition-timing-function": "cubic-bezier(0.18, 0.89, 0.32, 1.28)"
}, SO = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, PO = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, zO = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, OO = {
  "--slider-thumb-size": "16px",
  "--slider-track-height": "4px",
  "--slider-track-background": "var(--color-surface-container-highest)",
  "--slider-track-fill-border-radius": "4px",
  "--slider-track-border-radius": "4px",
  "--slider-error-color": "var(--color-danger)",
  "--slider-track-fill-background": "var(--color-primary)",
  "--slider-thumb-block-background": "var(--color-primary)",
  "--slider-thumb-ripple-background": "var(--color-primary)",
  "--slider-thumb-label-background": "var(--color-primary)",
  "--slider-thumb-label-font-size": "var(--font-size-sm)",
  "--slider-thumb-label-text-color": "var(--color-on-primary)",
  "--slider-disabled-opacity": "var(--opacity-disabled)"
}, TO = {
  "--uploader-file-border-radius": "8px",
  "--uploader-action-background": "var(--color-surface-container-low)",
  "--uploader-file-name-background": "var(--color-surface-container-low)",
  "--uploader-file-cover-background": "var(--color-surface-container-low)",
  "--uploader-action-icon-color": "var(--color-on-surface-variant)",
  "--uploader-file-name-color": "var(--color-on-surface-variant)",
  "--uploader-action-icon-size": "24px",
  "--uploader-action-margin": "0 10px 10px 0",
  "--uploader-file-size": "80px",
  "--uploader-file-margin": "0 10px 10px 0",
  "--uploader-file-name-font-size": "12px",
  "--uploader-file-name-padding": "10px",
  "--uploader-file-text-align": "center",
  "--uploader-file-close-background": "rgba(0, 0, 0, 0.3)",
  "--uploader-file-close-size": "24px",
  "--uploader-file-close-icon-font-size": "14px",
  "--uploader-file-close-icon-color": "#fff",
  "--uploader-file-cover-fit": "cover",
  "--uploader-preview-video-width": "100vw",
  "--uploader-preview-video-height": "100vw",
  "--uploader-file-indicator-height": "4px",
  "--uploader-file-indicator-normal-color": "var(--color-disabled)",
  "--uploader-file-indicator-success-color": "var(--color-success)",
  "--uploader-file-indicator-error-color": "var(--color-danger)",
  "--uploader-file-progress-color": "var(--color-primary)",
  "--uploader-disabled-color": "var(--color-disabled)",
  "--uploader-disabled-text-color": "var(--color-text-disabled)",
  "--uploader-loading-background": "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))"
}, EO = {
  "--time-picker-title-color": "#1D1B20",
  "--time-picker-title-hint-color": "var(--color-on-surface-variant)",
  "--time-picker-clock-container-background": "var(--color-surface-container-highest)",
  "--time-picker-title-background": "var(--color-surface-container-high)",
  "--time-picker-body-background": "var(--color-surface-container-high)",
  "--time-picker-clock-item-text-color": "#1D1B20",
  "--time-picker-border-radius": "20px",
  "--time-picker-title-padding": "20px 20px 16px",
  "--time-picker-actions-padding": "20px",
  "--time-picker-title-margin-bottom": "20px",
  "--time-picker-title-time-font-size": "40px",
  "--time-picker-title-ampm-border-radius": "8px",
  "--time-picker-title-time-padding": "8px 12px",
  "--time-picker-title-time-border-radius": "8px",
  "--time-picker-title-ampm-border": "thin solid #79747e",
  "--time-picker-title-ampm-button-padding": "8px",
  "--time-picker-title-time-background": "var(--color-surface-container-highest)",
  "--time-picker-title-inactive-opacity": "1",
  "--time-picker-title-time-active-background": "var(--color-primary-container)",
  "--time-picker-title-ampm-button-active-background": "var(--color-warning-container)",
  "--time-picker-font-size": "var(--font-size-md)",
  "--time-picker-min-width": "290px",
  "--time-picker-title-height": "105px",
  "--time-picker-title-hint-font-size": "14px",
  "--time-picker-title-time-margin": "0 5px",
  "--time-picker-title-ampm-margin-left": "10px",
  "--time-picker-clock-left": "27px",
  "--time-picker-clock-right": "27px",
  "--time-picker-clock-top": "27px",
  "--time-picker-clock-bottom": "27px",
  "--time-picker-clock-container-width": "256px",
  "--time-picker-clock-container-height": "256px",
  "--time-picker-clock-hand-height": "calc(50% - 4px)",
  "--time-picker-clock-hand-width": "2px",
  "--time-picker-clock-hand-bottom": "50%",
  "--time-picker-clock-hand-left": "calc(50% - 1px)",
  "--time-picker-clock-hand-background": "var(--color-primary)",
  "--time-picker-clock-hand-border-color": "var(--color-primary)",
  "--time-picker-clock-hand-before-width": "10px",
  "--time-picker-clock-hand-before-height": "10px",
  "--time-picker-clock-hand-before-border-width": "2px",
  "--time-picker-clock-hand-after-width": "4px",
  "--time-picker-clock-hand-after-height": "4px",
  "--time-picker-clock-item-height": "32px",
  "--time-picker-clock-item-width": "32px",
  "--time-picker-clock-item-active-background": "var(--color-primary)",
  "--time-picker-clock-item-active-color": "var(--color-on-primary)",
  "--time-picker-clock-item-disable-color": "rgba(0, 0, 0, 0.26)",
  "--time-picker-clock-item-disable-background": "#bdbdbd",
  "--time-picker-inner-left": "36px",
  "--time-picker-inner-right": "36px",
  "--time-picker-inner-top": "36px",
  "--time-picker-inner-bottom": "36px",
  "--time-picker-body-height": "288px",
  "--time-picker-title-time-container-justify-content": "flex-end"
}, BO = {
  "--date-picker-title-background": "var(--color-surface-container-high)",
  "--date-picker-title-color": "#1D1B20",
  "--date-picker-title-hint-color": "var(--color-on-surface-variant)",
  "--date-picker-body-background-color": "var(--color-surface-container-high)",
  "--date-picker-main-color": "#1D1B20",
  "--date-picker-border-radius": "20px",
  "--date-picker-title-padding": "20px 20px 16px",
  "--date-picker-actions-padding": "20px",
  "--day-picker-head-item-color": "#1D1B20",
  "--date-picker-header-arrow-filter": "opacity(1)",
  "--date-picker-header-padding": "0 0 16px",
  "--date-picker-body-height": "300px",
  "--date-picker-body-padding": "0 14px 16px",
  "--date-picker-header-color": "var(--color-on-surface-variant)",
  "--date-picker-font-size": "var(--font-size-md)",
  "--date-picker-min-width": "290px",
  "--date-picker-title-hint-font-size": "var(--font-size-md)",
  "--date-picker-title-height": "105px",
  "--date-picker-title-year-font-size": "var(--font-size-md)",
  "--date-picker-title-year-font-weight": "500",
  "--date-picker-title-year-margin-bottom": "8px",
  "--date-picker-title-date-height": "48px",
  "--date-picker-title-date-font-size": "34px",
  "--date-picker-title-date-font-weight": "500",
  "--date-picker-title-date-range-font-size": "20px",
  "--date-picker-title-date-justify-content": "normal",
  "--month-picker-padding": "0 12px",
  "--month-picker-item-width": "33%",
  "--month-picker-item-height": "56px",
  "--month-picker-item-button-max-width": "140px",
  "--year-picker-padding": "0 12px",
  "--year-picker-item-width": "33%",
  "--year-picker-item-height": "56px",
  "--year-picker-item-button-max-width": "140px",
  "--day-picker-content-item-width": "14.28%",
  "--day-picker-content-item-font-size": "var(--font-size-sm)",
  "--day-picker-content-item-padding": "2px 0",
  "--day-picker-content-item-button-width": "32px",
  "--day-picker-content-item-button-height": "32px",
  "--day-picker-content-item-button-font-size": "var(--font-size-sm)",
  "--day-picker-head-item-padding": "8px 0",
  "--day-picker-head-item-font-weight": "600"
}, DO = {
  "--switch-track-background": "var(--color-surface-container-low)",
  "--switch-handle-background": "var(--color-surface-container-low)",
  "--switch-track-active-background": "var(--color-primary)",
  "--switch-track-error-background": "var(--color-danger)",
  "--switch-ripple-color": "var(--color-primary)",
  "--switch-handle-color": "var(--color-primary)",
  "--switch-handle-active-color": "var(--color-on-primary)",
  "--switch-handle-active-background": "var(--color-primary)",
  "--switch-handle-error-background": "var(--color-danger)",
  "--switch-disabled-opacity": "var(--opacity-disabled)",
  "--switch-variant-width": "52px",
  "--switch-variant-height": "32px",
  "--switch-variant-track-background": "var(--color-surface-container-highest)",
  "--switch-variant-handle-width": "24px",
  "--switch-variant-handle-height": "24px",
  "--switch-variant-track-border-color": "#79747E",
  "--switch-variant-handle-color": "var(--color-on-primary)",
  "--switch-variant-handle-active-color": "var(--color-primary)",
  "--switch-variant-handle-background": "#79747E",
  "--switch-variant-handle-active-background": "var(--color-on-primary)"
}, IO = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, MO = {
  "--avatar-group-offset": "-10px"
}, NO = {
  "--badge-content-padding": "2px 6px",
  "--badge-content-border": "none",
  "--badge-content-border-radius": "100px",
  "--badge-content-font-size": "12px",
  "--badge-icon-size": "12px",
  "--badge-default-color": "#e0e0e0",
  "--badge-primary-color": "var(--color-primary)",
  "--badge-danger-color": "var(--color-danger)",
  "--badge-success-color": "var(--color-success)",
  "--badge-warning-color": "var(--color-warning)",
  "--badge-info-color": "var(--color-info)",
  "--badge-default-text-color": "#1d1b20",
  "--badge-primary-text-color": "var(--color-on-primary)",
  "--badge-danger-text-color": "var(--color-on-danger)",
  "--badge-success-text-color": "var(--color-on-success)",
  "--badge-warning-text-color": "var(--color-on-warning)",
  "--badge-info-text-color": "var(--color-on-info)",
  "--badge-dot-width": "8px",
  "--badge-dot-height": "8px"
}, AO = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, VO = {
  "--counter-padding": "0 4px",
  "--counter-font-color": "#fff",
  "--counter-background": "var(--color-primary)",
  "--counter-input-width": "28px",
  "--counter-input-margin": "0 4px",
  "--counter-input-font-size": "14px",
  "--counter-button-size": "28px",
  "--counter-button-text-color": "#fff",
  "--counter-button-icon-size": "100%",
  "--counter-disabled-color": "var(--color-disabled)",
  "--counter-disabled-opacity": "var(--opacity-disabled)",
  "--counter-error-color": "var(--color-danger)"
}, RO = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, LO = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, FO = {
  "--icon-size": "20px"
}, UO = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, HO = {
  "--index-bar-list-right": "0",
  "--index-bar-list-top": "50%",
  "--index-bar-list-left": "auto",
  "--index-bar-list-bottom": "auto",
  "--index-bar-list-transform": "translate(0, -50%)",
  "--index-bar-list-item-font-size": "var(--font-size-xs)",
  "--index-bar-list-item-color": "var(--color-primary)",
  "--index-bar-list-item-active-color": "var(--color-danger)",
  "--index-bar-list-item-height": "14px",
  "--index-bar-list-item-padding": "0 10px"
}, YO = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, jO = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, WO = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, KO = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, qO = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, XO = {
  "--pagination-text-color": "#555",
  "--pagination-font-size": "var(--font-size-md)",
  "--pagination-active-color": "var(--color-on-primary)",
  "--pagination-active-bg-color": "var(--color-primary)",
  "--pagination-hover-bg-color": "rgba(85, 85, 85, 0.15)",
  "--pagination-total-margin": "0 12px",
  "--pagination-total-line-height": "24px",
  "--pagination-item-width": "32px",
  "--pagination-item-height": "32px",
  "--pagination-item-margin": "0 6px",
  "--pagination-item-background": "#fff",
  "--pagination-item-border-radius": "4px",
  "--pagination-item-simple-border-radius": "50%",
  "--pagination-input-width": "32px",
  "--pagination-disabled-color": "var(--color-text-disabled)",
  "--pagination-bg-disabled-color": "var(--color-disabled)",
  "--pagination-size-line-height": "24px",
  "--pagination-size-padding": "0 6px"
}, GO = {
  "--progress-font-size": "var(--font-size-sm)",
  "--progress-track-color": "#d8d8d8",
  "--progress-label-color": "#555",
  "--progress-background": "var(--color-primary)",
  "--progress-default-color": "#f5f5f5",
  "--progress-primary-color": "var(--color-primary)",
  "--progress-danger-color": "var(--color-danger)",
  "--progress-success-color": "var(--color-success)",
  "--progress-warning-color": "var(--color-warning)",
  "--progress-info-color": "var(--color-info)",
  "--progress-linear-border-radius": "0px"
}, ZO = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, JO = {
  "--skeleton-content-padding": "16px",
  "--skeleton-card-height": "160px",
  "--skeleton-card-border-radius": "4px",
  "--skeleton-card-margin-bottom": "16px",
  "--skeleton-card-background-color": "rgba(0, 0, 0, 0.12)",
  "--skeleton-animation-background": "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))",
  "--skeleton-avatar-size": "34px",
  "--skeleton-avatar-border-radius": "50%",
  "--skeleton-avatar-margin-right": "16px",
  "--skeleton-avatar-background-color": "rgba(0, 0, 0, 0.12)",
  "--skeleton-title-width": "50%",
  "--skeleton-title-border-radius": "10px",
  "--skeleton-title-background-color": "rgba(0, 0, 0, 0.12)",
  "--skeleton-row-height": "12px",
  "--skeleton-row-border-radius": "10px",
  "--skeleton-row-margin-top": "10px"
}, QO = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, _O = {
  "--step-tag-size": "20px",
  "--step-tag-background": "#9e9e9e",
  "--step-tag-font-size": "var(--font-size-md)",
  "--step-tag-color": "var(--color-on-primary)",
  "--step-tag-active-color": "var(--color-primary)",
  "--step-tag-margin": "4px 0",
  "--step-tag-icon-size": "var(--font-size-lg)",
  "--step-content-font-size": "var(--font-size-md)",
  "--step-content-color": "rgba(0, 0, 0, 0.38)",
  "--step-content-active-color": "#000",
  "--step-line-background": "#000",
  "--step-line-gap": "8px",
  "--step-vertical-tag-margin": "0 4px",
  "--step-vertical-min-height": "50px"
}, xO = {
  "--swipe-indicator-color": "#fff",
  "--swipe-indicators-offset": "10px",
  "--swipe-indicator-offset": "4px",
  "--swipe-navigation-z-index": "9",
  "--swipe-navigation-button-width": "36px",
  "--swipe-navigation-button-height": "36px",
  "--swipe-navigation-button-border-radius": "50%",
  "--swipe-navigation-icon-size": "20px",
  "--swipe-navigation-prev-left": "8px",
  "--swipe-navigation-next-right": "8px",
  "--swipe-navigation-prev-top": "8px",
  "--swipe-navigation-next-bottom": "8px"
}, e3 = {
  "--watermark-content-color": "#808080"
}, n3 = {
  "--app-bar-color": "var(--color-primary)",
  "--app-bar-title-padding": "0 12px",
  "--app-bar-title-font-size": "var(--font-size-lg)",
  "--app-bar-text-color": "#fff",
  "--app-bar-height": "54px",
  "--app-bar-left-gap": "6px",
  "--app-bar-right-gap": "6px",
  "--app-bar-border-radius": "4px",
  "--app-bar-font-size": "var(--font-size-lg)",
  "--app-bar-border-bottom": "thin solid var(--color-outline)"
}, o3 = Object.defineProperty, hd = Object.getOwnPropertySymbols, r3 = Object.prototype.hasOwnProperty, t3 = Object.prototype.propertyIsEnumerable, gd = (e, n, o) => n in e ? o3(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ge = (e, n) => {
  for (var o in n || (n = {}))
    r3.call(n, o) && gd(e, o, n[o]);
  if (hd)
    for (var o of hd(n))
      t3.call(n, o) && gd(e, o, n[o]);
  return e;
}, a3 = ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge({
  "--font-size-xs": "10px",
  "--font-size-sm": "12px",
  "--font-size-md": "14px",
  "--font-size-lg": "16px",
  "--icon-size-xs": "16px",
  "--icon-size-sm": "18px",
  "--icon-size-md": "20px",
  "--icon-size-lg": "22px",
  "--hsl-body": "293, 100%, 98%",
  "--color-body": "hsla(var(--hsl-body), 1)",
  "--hsl-text": "0, 0%, 0%",
  "--color-text": "hsla(var(--hsl-text), 1)",
  "--hsl-primary": "256, 34%, 48%",
  "--color-primary": "hsla(var(--hsl-primary), 1)",
  "--hsl-info": "259, 11%, 40%",
  "--color-info": "hsla(var(--hsl-info), 1)",
  "--hsl-success": "77, 46%, 27%",
  "--color-success": "hsla(var(--hsl-success), 1)",
  "--hsl-warning": "340, 21%, 41%",
  "--color-warning": "hsla(var(--hsl-warning), 1)",
  "--hsl-danger": "3, 71%, 41%",
  "--color-danger": "hsla(var(--hsl-danger), 1)",
  "--hsl-on-primary": "0, 0%, 100%",
  "--color-on-primary": "hsla(var(--hsl-on-primary), 1)",
  "--hsl-on-info": "0, 0%, 100%",
  "--color-on-info": "hsla(var(--hsl-on-info), 1)",
  "--hsl-on-success": "0, 0%, 100%",
  "--color-on-success": "hsla(var(--hsl-on-success), 1)",
  "--hsl-on-warning": "0, 0%, 100%",
  "--color-on-warning": "hsla(var(--hsl-on-warning), 1)",
  "--hsl-on-danger": "0, 0%, 100%",
  "--color-on-danger": "hsla(var(--hsl-on-danger), 1)",
  "--hsl-primary-container": "263, 100%, 93%",
  "--color-primary-container": "hsla(var(--hsl-primary-container), 1)",
  "--hsl-info-container": "263, 65%, 92%",
  "--color-info-container": "hsla(var(--hsl-info-container), 1)",
  "--hsl-success-container": "77, 68%, 77%",
  "--color-success-container": "hsla(var(--hsl-success-container), 1)",
  "--hsl-warning-container": "342, 100%, 92%",
  "--color-warning-container": "hsla(var(--hsl-warning-container), 1)",
  "--hsl-danger-container": "4, 71%, 92%",
  "--color-danger-container": "hsla(var(--hsl-danger-container), 1)",
  "--hsl-on-primary-container": "261, 100%, 18%",
  "--color-on-primary-container": "hsla(var(--hsl-on-primary-container), 1)",
  "--hsl-on-info-container": "253, 26%, 13%",
  "--color-on-info-container": "hsla(var(--hsl-on-info-container), 1)",
  "--hsl-on-success-container": "79, 100%, 6%",
  "--color-on-success-container": "hsla(var(--hsl-on-success-container), 1)",
  "--hsl-on-warning-container": "338, 48%, 13%",
  "--color-on-warning-container": "hsla(var(--hsl-on-warning-container), 1)",
  "--hsl-on-danger-container": "3, 71%, 15%",
  "--color-on-danger-container": "hsla(var(--hsl-on-danger-container), 1)",
  "--hsl-disabled": "0, 0%, 88%",
  "--color-disabled": "hsla(var(--hsl-disabled), 1)",
  "--hsl-text-disabled": "0, 0%, 67%",
  "--color-text-disabled": "hsla(var(--hsl-text-disabled), 1)",
  "--hsl-surface-container": "276, 38%, 95%",
  "--color-surface-container": "hsla(var(--hsl-surface-container), 1)",
  "--hsl-surface-container-low": "278, 44%, 96%",
  "--color-surface-container-low": "hsla(var(--hsl-surface-container-low), 1)",
  "--hsl-surface-container-high": "276, 25%, 92%",
  "--color-surface-container-high": "hsla(var(--hsl-surface-container-high), 1)",
  "--hsl-surface-container-highest": "280, 17%, 90%",
  "--color-surface-container-highest": "hsla(var(--hsl-surface-container-highest), 1)",
  "--hsl-inverse-surface": "270, 6%, 20%",
  "--color-inverse-surface": "hsla(var(--hsl-inverse-surface), 1)",
  "--hsl-outline": "270, 11%, 79%",
  "--color-outline": "hsla(var(--hsl-outline), 1)",
  "--hsl-on-surface-variant": "264, 7%, 29%",
  "--color-on-surface-variant": "hsla(var(--hsl-on-surface-variant), 1)",
  "--opacity-disabled": "0.6",
  "--opacity-hover": "0.12",
  "--opacity-focus": "0.2",
  "--cubic-bezier": "cubic-bezier(0.25, 0.8, 0.5, 1)",
  "--shadow-key-umbra-opacity": "rgba(0, 0, 0, 0.2)",
  "--shadow-key-penumbra-opacity": "rgba(0, 0, 0, 0.14)",
  "--shadow-key-ambient-opacity": "rgba(0, 0, 0, 0.12)"
}, Xz), Gz), Zz), Jz), Qz), _z), xz), eO), nO), oO), rO), tO), aO), iO), lO), sO), uO), cO), dO), fO), pO), vO), mO), hO), gO), bO), yO), kO), $O), wO), CO), SO), PO), zO), OO), TO), EO), BO), DO), IO), MO), NO), AO), VO), RO), LO), FO), UO), HO), YO), jO), WO), KO), qO), XO), GO), ZO), JO), QO), _O), xO), e3), n3), i3 = {
  "--button-default-color": "#3B383E",
  "--button-default-text-color": "var(--color-primary)",
  "--button-default-icon-color": "var(--color-on-surface-variant)",
  "--button-default-icon-container-color": "var(--color-surface-container-highest)",
  "--button-border-radius": "100px",
  "--button-primary-text-color": "var(--color-on-primary)",
  "--button-danger-text-color": "var(--color-on-danger)",
  "--button-success-text-color": "var(--color-on-success)",
  "--button-warning-text-color": "var(--color-on-warning)",
  "--button-info-text-color": "var(--color-on-info)",
  "--button-primary-color": "var(--color-primary)",
  "--button-danger-color": "var(--color-danger)",
  "--button-success-color": "var(--color-success)",
  "--button-warning-color": "var(--color-warning)",
  "--button-info-color": "var(--color-info)",
  "--button-primary-icon-color": "var(--color-on-primary-container)",
  "--button-danger-icon-color": "var(--color-on-danger-container)",
  "--button-success-icon-color": "var(--color-on-success-container)",
  "--button-warning-icon-color": "var(--color-on-warning-container)",
  "--button-info-icon-color": "var(--color-on-info-container)",
  "--button-primary-icon-container-color": "var(--color-primary-container)",
  "--button-danger-icon-container-color": "var(--color-danger-container)",
  "--button-success-icon-container-color": "var(--color-success-container)",
  "--button-warning-icon-container-color": "var(--color-warning-container)",
  "--button-info-icon-container-color": "var(--color-info-container)",
  "--button-disabled-color": "var(--color-disabled)",
  "--button-disabled-text-color": "var(--color-text-disabled)",
  "--button-mini-padding": "0 8px",
  "--button-small-padding": "0 12px",
  "--button-normal-padding": "0 16px",
  "--button-large-padding": "0 22px",
  "--button-round-padding": "6px",
  "--button-mini-height": "20px",
  "--button-small-height": "28px",
  "--button-normal-height": "36px",
  "--button-large-height": "44px",
  "--button-mini-font-size": "var(--font-size-xs)",
  "--button-small-font-size": "var(--font-size-sm)",
  "--button-normal-font-size": "var(--font-size-md)",
  "--button-large-font-size": "var(--font-size-lg)"
}, l3 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, s3 = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, u3 = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, c3 = {
  "--menu-option-text-color": "var(--color-inverse-surface)",
  "--menu-option-normal-height": "38px",
  "--menu-option-small-height": "30px",
  "--menu-option-mini-height": "24px",
  "--menu-option-large-height": "46px",
  "--menu-option-padding": "0 12px",
  "--menu-option-normal-font-size": "var(--font-size-md)",
  "--menu-option-small-font-size": "var(--font-size-sm)",
  "--menu-option-mini-font-size": "var(--font-size-xs)",
  "--menu-option-large-font-size": "var(--font-size-lg)",
  "--menu-option-selected-background": "var(--color-primary)",
  "--menu-option-disabled-color": "var(--color-text-disabled)"
}, d3 = {
  "--fab-trigger-border-radius": "16px",
  "--fab-action-size": "40px",
  "--fab-action-border-radius": "12px",
  "--fab-top": "70px",
  "--fab-bottom": "16px",
  "--fab-left": "16px",
  "--fab-right": "16px",
  "--fab-trigger-size": "56px",
  "--fab-trigger-inactive-icon-size": "26px",
  "--fab-trigger-active-icon-size": "22px",
  "--fab-actions-padding": "10px 0",
  "--fab-action-margin": "6px",
  "--fab-transition-standard-easing": "cubic-bezier(0.4, 0, 0.2, 1)"
}, f3 = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, p3 = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, v3 = {
  "--cell-description-color": "var(--color-on-surface-variant)",
  "--cell-color": "var(--color-text)",
  "--cell-font-size": "var(--font-size-md)",
  "--cell-description-font-size": "var(--font-size-sm)",
  "--cell-description-margin-top": "4px",
  "--cell-padding": "10px 12px",
  "--cell-min-height": "40px",
  "--cell-border-color": "var(--color-outline)",
  "--cell-border-left": "12px",
  "--cell-border-right": "12px",
  "--cell-icon-right": "8px",
  "--cell-extra-left": "8px"
}, m3 = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "12px"
}, h3 = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, g3 = {
  "--field-decorator-text-color": "var(--color-inverse-surface)",
  "--field-decorator-blur-color": "var(--color-on-surface-variant)",
  "--field-decorator-error-color": "var(--color-danger)",
  "--field-decorator-focus-color": "var(--color-primary)",
  "--field-decorator-placeholder-size": "16px",
  "--field-decorator-icon-size": "20px",
  "--field-decorator-line-size": "1px",
  "--field-decorator-line-focus-size": "2px",
  "--field-decorator-line-border-radius": "4px",
  "--field-decorator-disabled-color": "var(--color-text-disabled)",
  "--field-decorator-standard-normal-margin-top": "22px",
  "--field-decorator-standard-normal-margin-bottom": "4px",
  "--field-decorator-standard-normal-icon-margin-top": "22px",
  "--field-decorator-standard-normal-icon-margin-bottom": "4px",
  "--field-decorator-standard-normal-non-hint-margin-top": "4px",
  "--field-decorator-standard-small-margin-top": "18px",
  "--field-decorator-standard-small-margin-bottom": "4px",
  "--field-decorator-standard-small-icon-margin-top": "18px",
  "--field-decorator-standard-small-icon-margin-bottom": "4px",
  "--field-decorator-standard-small-non-hint-margin-top": "2px",
  "--field-decorator-outlined-normal-margin-top": "16px",
  "--field-decorator-outlined-normal-margin-bottom": "16px",
  "--field-decorator-outlined-normal-padding-left": "16px",
  "--field-decorator-outlined-normal-padding-right": "16px",
  "--field-decorator-outlined-normal-placeholder-space": "4px",
  "--field-decorator-outlined-normal-icon-margin-top": "16px",
  "--field-decorator-outlined-normal-icon-margin-bottom": "16px",
  "--field-decorator-outlined-small-margin-top": "8px",
  "--field-decorator-outlined-small-margin-bottom": "8px",
  "--field-decorator-outlined-small-padding-left": "12px",
  "--field-decorator-outlined-small-padding-right": "12px",
  "--field-decorator-outlined-small-placeholder-space": "2px",
  "--field-decorator-outlined-small-icon-margin-top": "8px",
  "--field-decorator-outlined-small-icon-margin-bottom": "8px"
}, b3 = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, y3 = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, k3 = {
  "--card-border-radius": "12px",
  "--card-background": "var(--color-surface-container-highest)",
  "--card-filled-background": "var(--color-surface-container-highest)",
  "--card-image-height": "188px",
  "--card-title-color": "var(--color-inverse-surface)",
  "--card-title-font-size": "16px",
  "--card-title-padding": "0 16px",
  "--card-title-margin": "16px 0 0 0",
  "--card-content-padding": "0 16px",
  "--card-content-margin": "16px 0 0 0",
  "--card-content-color": "var(--color-on-surface-variant)",
  "--card-content-font-size": "14px",
  "--card-content-row-margin": "16px 0 0 0",
  "--card-subtitle-color": "var(--color-on-surface-variant)",
  "--card-subtitle-padding": "0 16px",
  "--card-subtitle-margin": "4px 0 0 0",
  "--card-description-margin": "32px 0 0 0",
  "--card-description-padding": "0 16px",
  "--card-description-color": "var(--color-on-surface-variant)",
  "--card-padding": "0 0 16px 0",
  "--card-footer-margin": "32px 0 0 0",
  "--card-title-row-margin": "16px 0 0 0",
  "--card-subtitle-row-margin": "4px 0 0 0",
  "--card-footer-padding": "0 16px",
  "--card-close-button-size": "56px",
  "--card-close-button-primary-color": "var(--color-primary-container)",
  "--card-close-button-text-color": "var(--color-on-primary-container)",
  "--card-close-button-border-radius": "12px",
  "--card-outline-color": "var(--color-outline)",
  "--card-image-width": "100%",
  "--card-row-image-width": "140px",
  "--card-row-height": "140px",
  "--card-subtitle-font-size": "14px",
  "--card-description-font-size": "14px",
  "--card-footer-right": "13px",
  "--card-footer-bottom": "9px",
  "--card-line-height": "22px",
  "--card-row-line-height": "1.5",
  "--card-floating-buttons-bottom": "16px",
  "--card-floating-buttons-right": "16px",
  "--card-floating-buttons-color": "#fff",
  "--card-close-button-icon-size": "24px"
}, $3 = {
  "--chip-round-radius": "8px",
  "--chip-default-color": "var(--color-surface-container-highest)",
  "--chip-default-text-color": "var(--color-on-surface-variant)",
  "--chip-primary-text-color": "var(--color-on-primary-container)",
  "--chip-danger-text-color": "var(--color-on-danger-container)",
  "--chip-success-text-color": "var(--color-on-success-container)",
  "--chip-warning-text-color": "var(--color-on-warning-container)",
  "--chip-info-text-color": "var(--color-on-info-container)",
  "--chip-primary-color": "var(--color-primary-container)",
  "--chip-danger-color": "var(--color-danger-container)",
  "--chip-success-color": "var(--color-success-container)",
  "--chip-warning-color": "var(--color-warning-container)",
  "--chip-info-color": "var(--color-info-container)",
  "--chip-primary-plain-color": "var(--color-primary)",
  "--chip-danger-plain-color": "var(--color-danger)",
  "--chip-success-plain-color": "var(--color-success)",
  "--chip-warning-plain-color": "var(--color-warning)",
  "--chip-info-plain-color": "var(--color-info)",
  "--chip-border-radius": "2px",
  "--chip-normal-height": "32px",
  "--chip-large-height": "40px",
  "--chip-small-height": "24px",
  "--chip-mini-height": "16px",
  "--chip-normal-padding": "0 10px",
  "--chip-large-padding": "0 17px",
  "--chip-small-padding": "0 6px",
  "--chip-mini-padding": "0 4px",
  "--chip-text-normal-margin": "0 5px",
  "--chip-text-large-margin": "0 5px",
  "--chip-text-small-margin": "0 3px",
  "--chip-text-mini-margin": "0 2px",
  "--chip-mini-font-size": "var(--font-size-xs)",
  "--chip-small-font-size": "var(--font-size-sm)",
  "--chip-normal-font-size": "var(--font-size-md)",
  "--chip-large-font-size": "var(--font-size-lg)"
}, w3 = {
  "--badge-default-color": "#3B383E",
  "--badge-default-text-color": "#fff",
  "--badge-content-padding": "2px 6px",
  "--badge-content-border": "none",
  "--badge-content-border-radius": "100px",
  "--badge-content-font-size": "12px",
  "--badge-icon-size": "12px",
  "--badge-primary-color": "var(--color-primary)",
  "--badge-danger-color": "var(--color-danger)",
  "--badge-success-color": "var(--color-success)",
  "--badge-warning-color": "var(--color-warning)",
  "--badge-info-color": "var(--color-info)",
  "--badge-primary-text-color": "var(--color-on-primary)",
  "--badge-danger-text-color": "var(--color-on-danger)",
  "--badge-success-text-color": "var(--color-on-success)",
  "--badge-warning-text-color": "var(--color-on-warning)",
  "--badge-info-text-color": "var(--color-on-info)",
  "--badge-dot-width": "8px",
  "--badge-dot-height": "8px"
}, C3 = {
  "--tooltip-default-color": "var(--color-inverse-surface)",
  "--tooltip-opacity": "1",
  "--tooltip-default-text-color": "#322F35",
  "--tooltip-border-radius": "4px",
  "--tooltip-font-size": "14px",
  "--tooltip-padding": "8px 16px",
  "--tooltip-offset": "10px",
  "--tooltip-primary-color": "var(--color-primary)",
  "--tooltip-info-color": "var(--color-info)",
  "--tooltip-success-color": "var(--color-success)",
  "--tooltip-warning-color": "var(--color-warning)",
  "--tooltip-danger-color": "var(--color-danger)",
  "--tooltip-primary-text-color": "var(--color-on-primary)",
  "--tooltip-info-text-color": "var(--color-on-info)",
  "--tooltip-success-text-color": "var(--color-on-success)",
  "--tooltip-warning-text-color": "var(--color-on-warning)",
  "--tooltip-danger-text-color": "var(--color-on-danger)"
}, S3 = {
  "--progress-label-color": "#fff",
  "--progress-font-size": "var(--font-size-sm)",
  "--progress-track-color": "#d8d8d8",
  "--progress-background": "var(--color-primary)",
  "--progress-default-color": "#f5f5f5",
  "--progress-primary-color": "var(--color-primary)",
  "--progress-danger-color": "var(--color-danger)",
  "--progress-success-color": "var(--color-success)",
  "--progress-warning-color": "var(--color-warning)",
  "--progress-info-color": "var(--color-info)",
  "--progress-linear-border-radius": "0px"
}, P3 = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, z3 = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, O3 = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff",
  "--step-tag-size": "20px",
  "--step-tag-background": "#9e9e9e",
  "--step-tag-font-size": "var(--font-size-md)",
  "--step-tag-color": "var(--color-on-primary)",
  "--step-tag-active-color": "var(--color-primary)",
  "--step-tag-margin": "4px 0",
  "--step-tag-icon-size": "var(--font-size-lg)",
  "--step-content-font-size": "var(--font-size-md)",
  "--step-line-gap": "8px",
  "--step-vertical-tag-margin": "0 4px",
  "--step-vertical-min-height": "50px"
}, T3 = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, E3 = {
  "--table-background": "var(--color-surface-container-highest)",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-thead-th-text-align": "left",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "var(--color-surface-container-highest)",
  "--table-border-radius": "2px",
  "--table-thead-border-bottom": "thin solid var(--color-outline)",
  "--table-thead-th-font-size": "14px",
  "--table-thead-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-td-font-size": "16px",
  "--table-tbody-td-text-align": "left",
  "--table-row-height": "46px",
  "--table-row-padding": "0 16px",
  "--table-footer-border-top": "thin solid var(--color-outline)"
}, B3 = {
  "--pagination-text-color": "#fff",
  "--pagination-item-background": "var(--color-surface-container)",
  "--pagination-font-size": "var(--font-size-md)",
  "--pagination-active-color": "var(--color-on-primary)",
  "--pagination-active-bg-color": "var(--color-primary)",
  "--pagination-hover-bg-color": "rgba(85, 85, 85, 0.15)",
  "--pagination-total-margin": "0 12px",
  "--pagination-total-line-height": "24px",
  "--pagination-item-width": "32px",
  "--pagination-item-height": "32px",
  "--pagination-item-margin": "0 6px",
  "--pagination-item-border-radius": "4px",
  "--pagination-item-simple-border-radius": "50%",
  "--pagination-input-width": "32px",
  "--pagination-disabled-color": "var(--color-text-disabled)",
  "--pagination-bg-disabled-color": "var(--color-disabled)",
  "--pagination-size-line-height": "24px",
  "--pagination-size-padding": "0 6px"
}, D3 = {
  "--watermark-content-color": "#ffffff"
}, I3 = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, M3 = {
  "--result-background": "var(--color-surface-container-highest)",
  "--result-border-radius": "12px",
  "--result-title-color": "var(--color-inverse-surface)",
  "--result-description-color": "var(--color-on-surface-variant)",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)",
  "--result-info-border-color": "rgba(204, 194, 220, 0.3)",
  "--result-success-border-color": "rgba(186, 207, 131, 0.3)",
  "--result-error-border-color": "rgba(242, 184, 181, 0.3)",
  "--result-warning-border-color": "rgba(239, 184, 200, 0.3)",
  "--result-padding": "24px",
  "--result-title-font-size": "32px",
  "--result-title-margin": "15px 0 0 0",
  "--result-image-size": "80px",
  "--result-title-font-weight": "500",
  "--result-description-margin": "10px 0 0 0",
  "--result-description-font-size": "14px",
  "--result-description-line-height": "1.6",
  "--result-info-color": "var(--color-info)",
  "--result-success-color": "var(--color-success)",
  "--result-error-color": "var(--color-danger)",
  "--result-warning-color": "var(--color-warning)"
}, N3 = {
  "--app-bar-color": "#211F26",
  "--app-bar-text-color": "var(--color-inverse-surface)",
  "--app-bar-title-padding": "0 12px",
  "--app-bar-title-font-size": "var(--font-size-lg)",
  "--app-bar-height": "54px",
  "--app-bar-left-gap": "6px",
  "--app-bar-right-gap": "6px",
  "--app-bar-border-radius": "4px",
  "--app-bar-font-size": "var(--font-size-lg)",
  "--app-bar-border-bottom": "thin solid var(--color-outline)"
}, A3 = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, V3 = {
  "--bottom-navigation-item-active-background-color": "#4A4458",
  "--bottom-navigation-item-inactive-color": "var(--color-on-surface-variant)",
  "--bottom-navigation-item-variant-active-background-color": "var(--color-info-container)",
  "--bottom-navigation-item-variant-active-color": "var(--color-on-info-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-item-font-size": "var(--font-size-sm)",
  "--bottom-navigation-item-active-color": "var(--color-primary)",
  "--bottom-navigation-item-line-height": "1",
  "--bottom-navigation-item-icon-size": "22px",
  "--bottom-navigation-item-icon-margin-bottom": "5px",
  "--bottom-navigation-item-variant-icon-container-height": "30px",
  "--bottom-navigation-item-variant-icon-container-border-radius": "100px",
  "--bottom-navigation-item-variant-icon-container-max-width": "58px"
}, R3 = {
  "--snackbar-color": "#322F35",
  "--snackbar-background": "var(--color-inverse-surface)",
  "--snackbar-width": "256px",
  "--snackbar-border-radius": "4px",
  "--snackbar-font-size": "var(--font-size-md)",
  "--snackbar-margin": "6px 24px",
  "--snackbar-border-color": "currentColor",
  "--snackbar-success-background": "var(--color-success)",
  "--snackbar-info-background": "var(--color-info)",
  "--snackbar-error-background": "var(--color-danger)",
  "--snackbar-warning-background": "var(--color-warning)",
  "--snackbar-content-padding": "14px 16px",
  "--snackbar-action-margin": "0 8px",
  "--snackbar-vertical-action-margin": "0 8px 8px 0",
  "--snackbar-icon-margin": "0 8px"
}, L3 = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "var(--color-inverse-surface)",
  "--action-sheet-border-radius": "0px",
  "--action-sheet-border-top": "none",
  "--action-sheet-title-padding": "10px 16px",
  "--action-sheet-title-font-size": "14px",
  "--action-sheet-action-item-height": "48px",
  "--action-sheet-action-item-padding": "0 18px",
  "--action-sheet-action-item-disabled-color": "var(--color-text-disabled)",
  "--action-sheet-icon-margin": "0 20px 0 0",
  "--action-sheet-icon-size": "24px"
}, F3 = {
  "--dialog-width": "312px",
  "--dialog-background": "var(--color-surface-container-high)",
  "--dialog-title-color": "var(--color-inverse-surface)",
  "--dialog-message-color": "var(--color-on-surface-variant)",
  "--dialog-border-radius": "28px",
  "--dialog-title-padding": "24px 24px 0",
  "--dialog-message-padding": "16px 24px 24px",
  "--dialog-actions-padding": "0 24px 24px",
  "--dialog-title-font-size": "20px",
  "--dialog-button-margin-left": "8px",
  "--dialog-message-line-height": "24px",
  "--dialog-message-font-size": "var(--font-size-md)",
  "--dialog-confirm-button-color": "var(--color-primary)",
  "--dialog-cancel-button-color": "var(--color-primary)"
}, U3 = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, H3 = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, Y3 = {
  "--picker-background": "var(--color-body)",
  "--picker-cancel-button-text-color": "var(--color-primary)",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-mask-background-image": "linear-gradient(180deg, rgba(20, 18, 24, 0.9), rgba(20, 18, 24, 0.4)), linear-gradient(0deg, rgba(20, 18, 24, 0.9), rgba(20, 18, 24, 0.4))",
  "--picker-toolbar-height": "44px",
  "--picker-confirm-button-text-color": "var(--color-primary)",
  "--picker-picked-border": "1px solid var(--color-outline)",
  "--picker-title-font-size": "var(--font-size-lg)",
  "--picker-option-font-size": "var(--font-size-lg)",
  "--picker-toolbar-padding": "0 4px"
}, j3 = {
  "--floating-panel-background": "var(--color-surface-container-low)",
  "--floating-panel-toolbar-background": "#938F99",
  "--floating-panel-toolbar-width": "32px",
  "--floating-panel-toolbar-height": "4px",
  "--floating-panel-header-height": "36px",
  "--floating-panel-z-index": "999",
  "--floating-panel-border-top": "none",
  "--floating-panel-border-radius": "0",
  "--floating-panel-toolbar-border-radius": "10px",
  "--floating-panel-transition-timing-function": "cubic-bezier(0.18, 0.89, 0.32, 1.28)"
}, W3 = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, K3 = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, q3 = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, X3 = {
  "--counter-font-color": "#3B383E",
  "--counter-button-text-color": "#3B383E",
  "--counter-padding": "0 4px",
  "--counter-background": "var(--color-primary)",
  "--counter-input-width": "28px",
  "--counter-input-margin": "0 4px",
  "--counter-input-font-size": "14px",
  "--counter-button-size": "28px",
  "--counter-button-icon-size": "100%",
  "--counter-disabled-color": "var(--color-disabled)",
  "--counter-disabled-opacity": "var(--opacity-disabled)",
  "--counter-error-color": "var(--color-danger)"
}, G3 = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272",
  "--switch-track-active-background": "var(--color-primary)",
  "--switch-track-error-background": "var(--color-danger)",
  "--switch-ripple-color": "var(--color-primary)",
  "--switch-handle-color": "var(--color-primary)",
  "--switch-handle-active-color": "var(--color-on-primary)",
  "--switch-handle-active-background": "var(--color-primary)",
  "--switch-handle-error-background": "var(--color-danger)",
  "--switch-disabled-opacity": "var(--opacity-disabled)",
  "--switch-variant-width": "52px",
  "--switch-variant-height": "32px",
  "--switch-variant-track-background": "var(--color-surface-container-highest)",
  "--switch-variant-handle-width": "24px",
  "--switch-variant-handle-height": "24px",
  "--switch-variant-track-border-color": "#938F99",
  "--switch-variant-handle-color": "var(--color-on-primary)",
  "--switch-variant-handle-active-color": "var(--color-primary)",
  "--switch-variant-handle-background": "#938F99",
  "--switch-variant-handle-active-background": "var(--color-on-primary)"
}, Z3 = {
  "--slider-thumb-size": "16px",
  "--slider-track-height": "4px",
  "--slider-track-background": "var(--color-surface-container-highest)",
  "--slider-track-fill-border-radius": "4px",
  "--slider-track-border-radius": "4px",
  "--slider-error-color": "var(--color-danger)",
  "--slider-track-fill-background": "var(--color-primary)",
  "--slider-thumb-block-background": "var(--color-primary)",
  "--slider-thumb-ripple-background": "var(--color-primary)",
  "--slider-thumb-label-background": "var(--color-primary)",
  "--slider-thumb-label-font-size": "var(--font-size-sm)",
  "--slider-thumb-label-text-color": "var(--color-on-primary)",
  "--slider-disabled-opacity": "var(--opacity-disabled)"
}, J3 = {
  "--uploader-file-border-radius": "8px",
  "--uploader-action-background": "var(--color-surface-container-highest)",
  "--uploader-file-name-background": "var(--color-surface-container-highest)",
  "--uploader-file-cover-background": "var(--color-surface-container-highest)",
  "--uploader-action-icon-color": "var(--color-on-surface-variant)",
  "--uploader-file-name-color": "var(--color-on-surface-variant)",
  "--uploader-action-icon-size": "24px",
  "--uploader-action-margin": "0 10px 10px 0",
  "--uploader-file-size": "80px",
  "--uploader-file-margin": "0 10px 10px 0",
  "--uploader-file-name-font-size": "12px",
  "--uploader-file-name-padding": "10px",
  "--uploader-file-text-align": "center",
  "--uploader-file-close-background": "rgba(0, 0, 0, 0.3)",
  "--uploader-file-close-size": "24px",
  "--uploader-file-close-icon-font-size": "14px",
  "--uploader-file-close-icon-color": "#fff",
  "--uploader-file-cover-fit": "cover",
  "--uploader-preview-video-width": "100vw",
  "--uploader-preview-video-height": "100vw",
  "--uploader-file-indicator-height": "4px",
  "--uploader-file-indicator-normal-color": "var(--color-disabled)",
  "--uploader-file-indicator-success-color": "var(--color-success)",
  "--uploader-file-indicator-error-color": "var(--color-danger)",
  "--uploader-file-progress-color": "var(--color-primary)",
  "--uploader-disabled-color": "var(--color-disabled)",
  "--uploader-disabled-text-color": "var(--color-text-disabled)",
  "--uploader-loading-background": "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))"
}, Q3 = {
  "--time-picker-title-color": "var(--color-inverse-surface)",
  "--time-picker-clock-container-background": "var(--color-surface-container-highest)",
  "--time-picker-title-hint-color": "var(--color-on-surface-variant)",
  "--time-picker-title-background": "var(--color-surface-container-high)",
  "--time-picker-body-background": "var(--color-surface-container-high)",
  "--time-picker-clock-item-disable-color": "#888",
  "--time-picker-clock-item-disable-background": "#ccc",
  "--time-picker-clock-item-text-color": "var(--color-inverse-surface)",
  "--time-picker-border-radius": "20px",
  "--time-picker-title-padding": "20px 20px 16px",
  "--time-picker-actions-padding": "20px",
  "--time-picker-title-margin-bottom": "20px",
  "--time-picker-title-time-font-size": "40px",
  "--time-picker-title-ampm-border-radius": "8px",
  "--time-picker-title-time-padding": "8px 12px",
  "--time-picker-title-time-border-radius": "8px",
  "--time-picker-title-ampm-border": "thin solid #938F99",
  "--time-picker-title-ampm-button-padding": "8px",
  "--time-picker-title-time-background": "var(--color-surface-container-highest)",
  "--time-picker-title-inactive-opacity": "1",
  "--time-picker-title-time-active-background": "var(--color-primary-container)",
  "--time-picker-title-ampm-button-active-background": "var(--color-warning-container)",
  "--time-picker-font-size": "var(--font-size-md)",
  "--time-picker-min-width": "290px",
  "--time-picker-title-height": "105px",
  "--time-picker-title-hint-font-size": "14px",
  "--time-picker-title-time-margin": "0 5px",
  "--time-picker-title-ampm-margin-left": "10px",
  "--time-picker-clock-left": "27px",
  "--time-picker-clock-right": "27px",
  "--time-picker-clock-top": "27px",
  "--time-picker-clock-bottom": "27px",
  "--time-picker-clock-container-width": "256px",
  "--time-picker-clock-container-height": "256px",
  "--time-picker-clock-hand-height": "calc(50% - 4px)",
  "--time-picker-clock-hand-width": "2px",
  "--time-picker-clock-hand-bottom": "50%",
  "--time-picker-clock-hand-left": "calc(50% - 1px)",
  "--time-picker-clock-hand-background": "var(--color-primary)",
  "--time-picker-clock-hand-border-color": "var(--color-primary)",
  "--time-picker-clock-hand-before-width": "10px",
  "--time-picker-clock-hand-before-height": "10px",
  "--time-picker-clock-hand-before-border-width": "2px",
  "--time-picker-clock-hand-after-width": "4px",
  "--time-picker-clock-hand-after-height": "4px",
  "--time-picker-clock-item-height": "32px",
  "--time-picker-clock-item-width": "32px",
  "--time-picker-clock-item-active-background": "var(--color-primary)",
  "--time-picker-clock-item-active-color": "var(--color-on-primary)",
  "--time-picker-inner-left": "36px",
  "--time-picker-inner-right": "36px",
  "--time-picker-inner-top": "36px",
  "--time-picker-inner-bottom": "36px",
  "--time-picker-body-height": "288px",
  "--time-picker-title-time-container-justify-content": "flex-end"
}, _3 = {
  "--date-picker-title-background": "var(--color-surface-container-high)",
  "--date-picker-title-color": "var(--color-inverse-surface)",
  "--date-picker-title-hint-color": "var(--color-on-surface-variant)",
  "--date-picker-body-background-color": "var(--color-surface-container-high)",
  "--date-picker-main-color": "var(--color-inverse-surface)",
  "--date-picker-border-radius": "20px",
  "--date-picker-title-padding": "20px 20px 16px",
  "--date-picker-actions-padding": "20px",
  "--day-picker-head-item-color": "var(--color-inverse-surface)",
  "--date-picker-header-arrow-filter": "opacity(1)",
  "--date-picker-header-padding": "0 0 16px",
  "--date-picker-body-height": "300px",
  "--date-picker-body-padding": "0 14px 16px",
  "--date-picker-header-color": "var(--color-on-surface-variant)",
  "--date-picker-font-size": "var(--font-size-md)",
  "--date-picker-min-width": "290px",
  "--date-picker-title-hint-font-size": "var(--font-size-md)",
  "--date-picker-title-height": "105px",
  "--date-picker-title-year-font-size": "var(--font-size-md)",
  "--date-picker-title-year-font-weight": "500",
  "--date-picker-title-year-margin-bottom": "8px",
  "--date-picker-title-date-height": "48px",
  "--date-picker-title-date-font-size": "34px",
  "--date-picker-title-date-font-weight": "500",
  "--date-picker-title-date-range-font-size": "20px",
  "--date-picker-title-date-justify-content": "normal",
  "--month-picker-padding": "0 12px",
  "--month-picker-item-width": "33%",
  "--month-picker-item-height": "56px",
  "--month-picker-item-button-max-width": "140px",
  "--year-picker-padding": "0 12px",
  "--year-picker-item-width": "33%",
  "--year-picker-item-height": "56px",
  "--year-picker-item-button-max-width": "140px",
  "--day-picker-content-item-width": "14.28%",
  "--day-picker-content-item-font-size": "var(--font-size-sm)",
  "--day-picker-content-item-padding": "2px 0",
  "--day-picker-content-item-button-width": "32px",
  "--day-picker-content-item-button-height": "32px",
  "--day-picker-content-item-button-font-size": "var(--font-size-sm)",
  "--day-picker-head-item-padding": "8px 0",
  "--day-picker-head-item-font-weight": "600"
}, x3 = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, e8 = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-content-padding": "16px",
  "--skeleton-card-height": "160px",
  "--skeleton-card-border-radius": "4px",
  "--skeleton-card-margin-bottom": "16px",
  "--skeleton-avatar-size": "34px",
  "--skeleton-avatar-border-radius": "50%",
  "--skeleton-avatar-margin-right": "16px",
  "--skeleton-title-width": "50%",
  "--skeleton-title-border-radius": "10px",
  "--skeleton-row-height": "12px",
  "--skeleton-row-border-radius": "10px",
  "--skeleton-row-margin-top": "10px"
}, n8 = {
  "--avatar-group-offset": "-10px"
}, o8 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, r8 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, t8 = {
  "--icon-size": "20px"
}, a8 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, i8 = {
  "--index-bar-list-right": "0",
  "--index-bar-list-top": "50%",
  "--index-bar-list-left": "auto",
  "--index-bar-list-bottom": "auto",
  "--index-bar-list-transform": "translate(0, -50%)",
  "--index-bar-list-item-font-size": "var(--font-size-xs)",
  "--index-bar-list-item-color": "var(--color-primary)",
  "--index-bar-list-item-active-color": "var(--color-danger)",
  "--index-bar-list-item-height": "14px",
  "--index-bar-list-item-padding": "0 10px"
}, l8 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, s8 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, u8 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, c8 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, d8 = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, f8 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, p8 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, v8 = {
  "--swipe-indicator-color": "#fff",
  "--swipe-indicators-offset": "10px",
  "--swipe-indicator-offset": "4px",
  "--swipe-navigation-z-index": "9",
  "--swipe-navigation-button-width": "36px",
  "--swipe-navigation-button-height": "36px",
  "--swipe-navigation-button-border-radius": "50%",
  "--swipe-navigation-icon-size": "20px",
  "--swipe-navigation-prev-left": "8px",
  "--swipe-navigation-next-right": "8px",
  "--swipe-navigation-prev-top": "8px",
  "--swipe-navigation-next-bottom": "8px"
}, m8 = Object.defineProperty, bd = Object.getOwnPropertySymbols, h8 = Object.prototype.hasOwnProperty, g8 = Object.prototype.propertyIsEnumerable, yd = (e, n, o) => n in e ? m8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, be = (e, n) => {
  for (var o in n || (n = {}))
    h8.call(n, o) && yd(e, o, n[o]);
  if (bd)
    for (var o of bd(n))
      g8.call(n, o) && yd(e, o, n[o]);
  return e;
}, b8 = be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be({
  "--font-size-xs": "10px",
  "--font-size-sm": "12px",
  "--font-size-md": "14px",
  "--font-size-lg": "16px",
  "--icon-size-xs": "16px",
  "--icon-size-sm": "18px",
  "--icon-size-md": "20px",
  "--icon-size-lg": "22px",
  "--hsl-body": "260, 14%, 8%",
  "--color-body": "hsla(var(--hsl-body), 1)",
  "--hsl-text": "0, 0%, 100%",
  "--color-text": "hsla(var(--hsl-text), 1)",
  "--hsl-primary": "258, 100%, 87%",
  "--color-primary": "hsla(var(--hsl-primary), 1)",
  "--hsl-info": "263, 27%, 81%",
  "--color-info": "hsla(var(--hsl-info), 1)",
  "--hsl-success": "77, 44%, 66%",
  "--color-success": "hsla(var(--hsl-success), 1)",
  "--hsl-warning": "343, 63%, 83%",
  "--color-warning": "hsla(var(--hsl-warning), 1)",
  "--hsl-danger": "3, 70%, 83%",
  "--color-danger": "hsla(var(--hsl-danger), 1)",
  "--hsl-on-primary": "259, 58%, 28%",
  "--color-on-primary": "hsla(var(--hsl-on-primary), 1)",
  "--hsl-on-info": "258, 18%, 22%",
  "--color-on-info": "hsla(var(--hsl-on-info), 1)",
  "--hsl-on-success": "76, 100%, 10%",
  "--color-on-success": "hsla(var(--hsl-on-success), 1)",
  "--hsl-on-warning": "338, 33%, 22%",
  "--color-on-warning": "hsla(var(--hsl-on-warning), 1)",
  "--hsl-on-danger": "3, 71%, 22%",
  "--color-on-danger": "hsla(var(--hsl-on-danger), 1)",
  "--hsl-primary-container": "257, 37%, 42%",
  "--color-primary-container": "hsla(var(--hsl-primary-container), 1)",
  "--hsl-info-container": "260, 12%, 35%",
  "--color-info-container": "hsla(var(--hsl-info-container), 1)",
  "--hsl-success-container": "77, 57%, 23%",
  "--color-success-container": "hsla(var(--hsl-success-container), 1)",
  "--hsl-warning-container": "342, 21%, 36%",
  "--color-warning-container": "hsla(var(--hsl-warning-container), 1)",
  "--hsl-danger-container": "2, 48%, 42%",
  "--color-danger-container": "hsla(var(--hsl-danger-container), 1)",
  "--hsl-on-primary-container": "263, 100%, 93%",
  "--color-on-primary-container": "hsla(var(--hsl-on-primary-container), 1)",
  "--hsl-on-info-container": "263, 65%, 92%",
  "--color-on-info-container": "hsla(var(--hsl-on-info-container), 1)",
  "--hsl-on-success-container": "77, 68%, 77%",
  "--color-on-success-container": "hsla(var(--hsl-on-success-container), 1)",
  "--hsl-on-warning-container": "342, 100%, 92%",
  "--color-on-warning-container": "hsla(var(--hsl-on-warning-container), 1)",
  "--hsl-on-danger-container": "4, 71%, 92%",
  "--color-on-danger-container": "hsla(var(--hsl-on-danger-container), 1)",
  "--hsl-disabled": "0, 0%, 25%",
  "--color-disabled": "hsla(var(--hsl-disabled), 1)",
  "--hsl-text-disabled": "0, 0%, 46%",
  "--color-text-disabled": "hsla(var(--hsl-text-disabled), 1)",
  "--hsl-surface-container": "257, 10%, 14%",
  "--color-surface-container": "hsla(var(--hsl-surface-container), 1)",
  "--hsl-surface-container-low": "264, 8%, 12%",
  "--color-surface-container-low": "hsla(var(--hsl-surface-container-low), 1)",
  "--hsl-surface-container-high": "257, 8%, 17%",
  "--color-surface-container-high": "hsla(var(--hsl-surface-container-high), 1)",
  "--hsl-surface-container-highest": "257, 6%, 22%",
  "--color-surface-container-highest": "hsla(var(--hsl-surface-container-highest), 1)",
  "--hsl-inverse-surface": "280, 17%, 90%",
  "--color-inverse-surface": "hsla(var(--hsl-inverse-surface), 1)",
  "--hsl-outline": "264, 7%, 29%",
  "--color-outline": "hsla(var(--hsl-outline), 1)",
  "--hsl-on-surface-variant": "270, 11%, 79%",
  "--color-on-surface-variant": "hsla(var(--hsl-on-surface-variant), 1)",
  "--opacity-disabled": "0.6",
  "--opacity-hover": "0.12",
  "--opacity-focus": "0.2",
  "--cubic-bezier": "cubic-bezier(0.25, 0.8, 0.5, 1)",
  "--shadow-key-umbra-opacity": "rgba(0, 0, 0, 0.2)",
  "--shadow-key-penumbra-opacity": "rgba(0, 0, 0, 0.14)",
  "--shadow-key-ambient-opacity": "rgba(0, 0, 0, 0.12)"
}, i3), l3), s3), u3), c3), d3), f3), p3), v3), m3), h3), g3), b3), y3), k3), $3), w3), C3), S3), P3), z3), O3), T3), E3), B3), D3), I3), M3), N3), A3), V3), R3), L3), F3), U3), H3), Y3), j3), W3), K3), q3), X3), G3), Z3), J3), Q3), _3), x3), e8), n8), o8), r8), t8), a8), i8), l8), s8), u8), c8), d8), f8), p8), v8);
function y8(e, n = {}) {
  const { viewportWidth: o = 375, viewportUnit: r = "vmin", unitPrecision: t = 6 } = n;
  return Object.entries(e).reduce((a, [i, l]) => (a[i] = l.includes("px") ? l.replace(
    /(\d+(\.\d+)?)px/g,
    (s, u) => `${Number((u / o * 100).toFixed(t))}${r}`
  ) : l, a), {});
}
const k8 = { dark: qz, md3Light: a3, md3Dark: b8, toViewport: y8 }, A5 = null;
var ns = k8;
const Hn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Sn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], kd = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], uh = {
  modelValue: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  hint: String,
  color: String,
  titleColor: String,
  format: {
    type: String,
    default: "ampm"
  },
  allowedTime: Object,
  min: String,
  max: String,
  useSeconds: Boolean,
  readonly: Boolean,
  "onUpdate:modelValue": A(),
  onChange: A()
}, ch = (e, n) => e === "24hr" || n === "am", Hs = (e, n, o) => {
  const r = Hn.findIndex((a) => U(a) === U(o)), t = ch(e, n) ? o : Sn[r];
  return {
    hourStr: t,
    hourNum: U(t)
  };
}, On = (e) => {
  const [n, o, r] = e.split(":");
  return {
    hour: U(n),
    minute: U(o),
    second: U(r)
  };
}, dh = (e) => {
  var n, o;
  const { time: r, format: t, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: c, hourNum: d } = Hs(t, a, i);
  let f = !1, v = !1;
  if (u.includes(c)) return !0;
  if (l && !s) {
    const { hour: g, minute: m } = On(l);
    f = g === d && r > m;
  }
  if (!l && s) {
    const { hour: g, minute: m } = On(s);
    f = g === d && r < m;
  }
  if (l && s) {
    const { hour: g, minute: m } = On(l), { hour: k, minute: w } = On(s);
    f = k === d && r < w || g === d && r > m;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (o = e.allowedTime) == null ? void 0 : o.minutes(r)), f || v;
}, fh = (e) => {
  var n, o;
  const { time: r, format: t, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: c } = e, { hourStr: d, hourNum: f } = Hs(t, a, i);
  let v = !1, g = !1;
  if (c.includes(d)) return !0;
  if (s && !u) {
    const { hour: m, minute: k, second: w } = On(s);
    v = m === f && k < l || k === l && r > w;
  }
  if (!s && u) {
    const { hour: m, minute: k, second: w } = On(u);
    v = m === f && k > l || k === l && r > w;
  }
  if (s && u) {
    const { hour: m, minute: k, second: w } = On(s), { hour: b, minute: y, second: S } = On(u);
    v = m === f && k < l || b === f && y > l || m === f && k === l && r > w || b === f && y === l && r < S;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (o = e.allowedTime) == null ? void 0 : o.seconds(r)), v || g;
}, { n: $8, classes: w8 } = ee("time-picker");
function C8(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n("clock"))
    },
    [
      N(
        "div",
        {
          class: p(e.n("clock-hand")),
          style: q(e.handStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      (h(!0), P(
        Ne,
        null,
        Ke(e.timeScales, (o, r) => (h(), P(
          "div",
          {
            class: p(
              e.classes(
                e.n("clock-item"),
                [e.isActive(r, !1), e.n("clock-item--active")],
                [e.isDisable(o), e.n("clock-item--disable")]
              )
            ),
            key: o,
            style: q(e.getStyle(r, o, !1))
          },
          le(o),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      )),
      e.format === "24hr" && e.type === "hour" ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("clock-inner")),
          ref: "inner"
        },
        [
          (h(!0), P(
            Ne,
            null,
            Ke(e.hours24, (o, r) => (h(), P(
              "div",
              {
                class: p(
                  e.classes(
                    e.n("clock-item"),
                    [e.isActive(r, !0), e.n("clock-item--active")],
                    [e.isDisable(o), e.n("clock-item--disable")]
                  )
                ),
                key: o,
                style: q(e.getStyle(r, o, !0))
              },
              le(o),
              7
              /* TEXT, CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const ph = x({
  name: "Clock",
  props: {
    isInner: {
      type: Boolean,
      required: !0
    },
    rad: {
      type: Number
    },
    format: {
      type: String,
      default: "ampm"
    },
    allowedTime: {
      type: Object
    },
    time: {
      type: Object,
      required: !0
    },
    useSeconds: {
      type: Boolean
    },
    preventNextUpdate: {
      type: Boolean
    },
    type: {
      type: String,
      default: "hour"
    },
    ampm: {
      type: String,
      default: "am"
    },
    color: {
      type: String
    },
    min: {
      type: String
    },
    max: {
      type: String
    }
  },
  emits: ["update", "change-prevent-update"],
  setup(e, { emit: n }) {
    const o = $(null), r = $([]), t = $([]), a = B(() => ({
      transform: `rotate(${U(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = B(() => {
      if (e.rad === void 0) return;
      const m = e.rad / 30;
      return m >= 0 ? m : m + 12;
    }), l = B(() => e.type === "hour" ? Hn : kd), s = (m, k) => {
      m = m ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const w = e.type === "minute" ? dh : fh, b = {
        time: U(m),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: U(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: r.value
      };
      return k && e.type === "minute" && Reflect.deleteProperty(b, "minute"), w(b);
    }, u = () => {
      if (i.value === void 0) return e.color;
      const m = e.isInner ? Sn[i.value] : l.value[i.value];
      return l.value === kd ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : d(m) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, c = (m, k) => k ? i.value === m && e.isInner : i.value === m && (!e.isInner || e.type !== "hour"), d = (m) => {
      if (e.type === "hour") {
        if (ch(e.format, e.ampm)) return r.value.includes(m);
        const k = Hn.findIndex((w) => w === m);
        return t.value.includes(k);
      }
      return s(m, !0);
    }, f = (m, k, w) => {
      const b = 2 * Math.PI / 12 * m - Math.PI / 2, y = 50 * (1 + Math.cos(b)), S = 50 * (1 + Math.sin(b)), z = () => c(m, w) ? d(k) ? {
        backgroundColor: "var(--time-picker-clock-item-disable-background)",
        color: "var(--time-picker-clock-item-disable-color)"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: O, color: D } = z();
      return {
        left: `${y}%`,
        top: `${S}%`,
        backgroundColor: O,
        color: D
      };
    }, v = () => {
      const { width: m, height: k } = an(o.value);
      return {
        width: m,
        height: k
      };
    }, g = () => {
      if (i.value === void 0) return;
      const m = e.ampm === "am" ? Hn : Sn;
      return Yo(m[i.value], 2, "0");
    };
    return fe([i, () => e.isInner], ([m, k], [w, b]) => {
      if (m === w && k === b || e.type !== "hour" || i.value === void 0) return;
      const S = k ? Sn[i.value] : g(), z = e.useSeconds ? `:${e.time.second}` : "", O = `${S}:${e.time.minute}${z}`;
      e.preventNextUpdate || n("update", O), n("change-prevent-update");
    }), fe(
      () => e.rad,
      (m, k) => {
        if (e.type === "hour" || m === void 0 || k === void 0) return;
        const w = m / 6 >= 0 ? m / 6 : m / 6 + 60, b = k / 6 >= 0 ? k / 6 : k / 6 + 60;
        if (w === b) return;
        let y;
        const { hourStr: S } = Hs(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const z = ie().minute(w).format("mm"), O = e.useSeconds ? `:${e.time.second}` : "";
          y = `${S}:${z}${O}`;
        }
        if (e.type === "second") {
          const z = ie().second(w).format("ss"), O = e.useSeconds ? `:${z}` : "";
          y = `${S}:${e.time.minute}${O}`;
        }
        n("update", y);
      }
    ), fe(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([m, k, w]) => {
        if (r.value = [], m && !k) {
          const { hour: b } = On(m), y = Hn.filter((z) => U(z) > b), S = Sn.filter((z) => U(z) > b);
          r.value = [...y, ...S];
        }
        if (!m && k) {
          const { hour: b } = On(k), y = Hn.filter((z) => U(z) < b), S = Sn.filter((z) => U(z) < b);
          r.value = [...y, ...S];
        }
        if (m && k) {
          const { hour: b } = On(m), { hour: y } = On(k), S = Hn.filter((O) => U(O) < y || U(O) > b), z = Sn.filter((O) => U(O) < y || U(O) > b);
          r.value = [...S, ...z];
        }
        if (w != null && w.hours) {
          const { hours: b } = w, y = Hn.filter((z) => !b(U(z))), S = Sn.filter((z) => !b(U(z)));
          r.value = [.../* @__PURE__ */ new Set([...r.value, ...y, ...S])];
        }
        t.value = r.value.map((b) => Sn.findIndex((y) => b === y)).filter((b) => b >= 0);
      },
      { immediate: !0, deep: !0 }
    ), {
      n: $8,
      classes: w8,
      hours24: Sn,
      timeScales: l,
      inner: o,
      handStyle: a,
      disableHour: r,
      isActive: c,
      isDisable: d,
      getSize: v,
      getStyle: f,
      activeItemIndex: i
    };
  }
});
ph.render = C8;
var S8 = ph;
const { name: P8, n: z8, classes: O8 } = ee("time-picker");
function T8(e, n) {
  var o;
  const r = Q("clock");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [
      N(
        "div",
        {
          class: p(e.n("title")),
          style: q({ background: e.titleColor || e.color })
        },
        [
          N(
            "div",
            {
              class: p(e.n("title-hint"))
            },
            le((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("timePickerHint")),
            3
            /* TEXT, CLASS */
          ),
          N(
            "div",
            {
              class: p(e.n("title-time-container"))
            },
            [
              N(
                "div",
                {
                  class: p(e.n("title-time"))
                },
                [
                  N(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
                      onClick: n[0] || (n[0] = (t) => e.checkPanel("hour"))
                    },
                    le(e.time.hour),
                    3
                    /* TEXT, CLASS */
                  ),
                  N(
                    "span",
                    {
                      class: p(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  ),
                  N(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
                      onClick: n[1] || (n[1] = (t) => e.checkPanel("minute"))
                    },
                    le(e.time.minute),
                    3
                    /* TEXT, CLASS */
                  ),
                  e.useSeconds ? (h(), P(
                    "span",
                    {
                      key: 0,
                      class: p(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  )) : G("v-if", !0),
                  e.useSeconds ? (h(), P(
                    "div",
                    {
                      key: 1,
                      class: p(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
                      onClick: n[2] || (n[2] = (t) => e.checkPanel("second"))
                    },
                    le(e.time.second),
                    3
                    /* TEXT, CLASS */
                  )) : G("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              e.format === "ampm" ? (h(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("title-ampm"))
                },
                [
                  N(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
                      onClick: n[3] || (n[3] = (t) => e.checkAmpm("am"))
                    },
                    " AM ",
                    2
                    /* CLASS */
                  ),
                  N(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
                      onClick: n[4] || (n[4] = (t) => e.checkAmpm("pm"))
                    },
                    " PM ",
                    2
                    /* CLASS */
                  )
                ],
                2
                /* CLASS */
              )) : G("v-if", !0)
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      N(
        "div",
        {
          class: p(e.n("body"))
        },
        [
          N(
            "div",
            {
              class: p(e.n("clock-container")),
              onTouchstart: n[5] || (n[5] = (...t) => e.moveHand && e.moveHand(...t)),
              onTouchmove: n[6] || (n[6] = (...t) => e.moveHand && e.moveHand(...t)),
              onTouchend: n[7] || (n[7] = (...t) => e.end && e.end(...t)),
              ref: "container"
            },
            [
              X(Qe, {
                name: `${e.n()}-panel-fade`
              }, {
                default: ce(() => [
                  (h(), Ce(r, {
                    key: e.type,
                    ref: "inner",
                    type: e.type,
                    ampm: e.ampm,
                    color: e.color,
                    "is-inner": e.isInner,
                    format: e.format,
                    "allowed-time": e.allowedTime,
                    rad: e.getRad,
                    time: e.time,
                    "prevent-next-update": e.isPreventNextUpdate,
                    "use-seconds": e.useSeconds,
                    max: e.max,
                    min: e.min,
                    onUpdate: e.update,
                    onChangePreventUpdate: e.changePreventUpdate
                  }, null, 8, ["type", "ampm", "color", "is-inner", "format", "allowed-time", "rad", "time", "prevent-next-update", "use-seconds", "max", "min", "onUpdate", "onChangePreventUpdate"]))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            34
            /* CLASS, NEED_HYDRATION */
          )
        ],
        2
        /* CLASS */
      ),
      e.$slots.actions ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("actions"))
        },
        [
          V(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const vh = x({
  name: P8,
  components: { Clock: S8 },
  props: uh,
  setup(e) {
    const n = $(null), o = $(null), r = $(null), t = $(!1), a = $(!1), i = $(!1), l = $(!1), s = $(!1), u = $(!1), c = $(!1), d = $(0), f = $(0), v = $(), g = $("hour"), m = $("am"), k = $({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = _e({
      x: 0,
      y: 0
    }), b = _e({
      x: [],
      y: []
    }), y = B(() => g.value === "hour" ? v.value : g.value === "minute" ? d.value : f.value), { t: S } = ao();
    fe(
      () => e.modelValue,
      (L) => {
        if (L === void 0 || L === "") {
          z();
          return;
        }
        const { hour: Z, minute: oe, second: me } = On(L), I = ie().hour(Z).format("hh"), K = ie().hour(Z).format("HH"), de = ie().minute(oe).format("mm"), Se = ie().second(me).format("ss");
        v.value = (I === "12" ? 0 : U(I)) * 30, d.value = U(de) * 6, f.value = U(Se) * 6, k.value = W(L), e.format !== "24hr" && (m.value = Yo(`${Z}`, 2, "0") === K && Sn.includes(K) ? "pm" : "am"), t.value = e.format === "24hr" && Sn.includes(K);
      },
      { immediate: !0 }
    );
    function z() {
      v.value = void 0, d.value = 0, f.value = 0, k.value = {
        hour: "00",
        minute: "00",
        second: "00"
      }, m.value = "am";
    }
    function O(L) {
      C(e["onUpdate:modelValue"], L), C(e.onChange, L);
    }
    function D(L) {
      return L * 57.29577951308232;
    }
    function T(L) {
      l.value = !1, c.value = !1, g.value = L;
    }
    function E(L) {
      const { disableHour: Z } = r.value, oe = Hn.findIndex((K) => U(K) === U(k.value.hour)), me = L === "am" ? Hn : Sn;
      return [...me.slice(oe), ...me.slice(0, oe)].find((K, de) => (a.value = de !== 0, !Z.includes(K)));
    }
    function M(L) {
      if (e.readonly) return;
      m.value = L;
      const Z = E(L);
      if (!Z) return;
      const oe = e.useSeconds ? `:${k.value.second}` : "", me = `${Yo(Z, 2, "0")}:${k.value.minute}${oe}`;
      O(me);
    }
    function R(L, Z) {
      const oe = L >= b.x[0] && L <= b.x[1], me = Z >= b.y[0] && Z <= b.y[1];
      return oe && me;
    }
    function W(L) {
      const Z = e.format === "24hr" ? "HH" : "hh", { hour: oe, minute: me, second: I } = On(L);
      return {
        hour: ie().hour(oe).format(Z),
        minute: ie().minute(me).format("mm"),
        second: ie().second(I).format("ss")
      };
    }
    function H(L) {
      const Z = L / 30;
      return Z >= 0 ? Z : Z + 12;
    }
    function F() {
      const { width: L, height: Z } = r.value.getSize(), oe = w.x - L / 2 - 8, me = w.x + L / 2 + 8, I = w.y - Z / 2 - 8, K = w.y + Z / 2 + 8;
      return {
        rangeXMin: oe,
        rangeXMax: me,
        rangeYMin: I,
        rangeYMax: K
      };
    }
    function Y(L, Z, oe) {
      const { disableHour: me } = r.value;
      i.value = R(L, Z);
      const I = Math.round(oe / 30) * 30 + 90, K = H(I), de = t.value ? Hn[K] : Sn[K];
      if (me.includes(de) || (t.value = e.format === "24hr" ? R(L, Z) : !1), t.value !== i.value) return;
      const Se = t.value || m.value === "pm" ? Sn[K] : Hn[K];
      u.value = me.includes(Se), !u.value && (v.value = I, l.value = !0);
    }
    function j(L) {
      const { disableHour: Z } = r.value, oe = Math.round(L / 6) * 6 + 90, I = {
        time: oe / 6 >= 0 ? oe / 6 : oe / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: k.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      c.value = dh(I), !c.value && (d.value = oe, s.value = !0);
    }
    function ae(L) {
      const { disableHour: Z } = r.value, oe = Math.round(L / 6) * 6 + 90, I = {
        time: oe / 6 >= 0 ? oe / 6 : oe / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: k.value.hour,
        minute: U(k.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      fh(I) || (f.value = oe);
    }
    function _() {
      const { left: L, top: Z, width: oe, height: me } = an(n.value);
      if (w.x = L + oe / 2, w.y = Z + me / 2, g.value === "hour" && e.format === "24hr") {
        const { rangeXMin: I, rangeXMax: K, rangeYMin: de, rangeYMax: Se } = F();
        b.x = [I, K], b.y = [de, Se];
      }
    }
    function ve(L) {
      if (Ve(L), e.readonly) return;
      _();
      const { clientX: Z, clientY: oe } = L.touches[0], me = Z - w.x, I = oe - w.y, K = Math.round(D(Math.atan2(I, me)));
      g.value === "hour" ? Y(Z, oe, K) : g.value === "minute" ? j(K) : ae(K);
    }
    function ye() {
      if (!e.readonly) {
        if (g.value === "hour" && l.value) {
          g.value = "minute";
          return;
        }
        g.value === "minute" && e.useSeconds && s.value && (g.value = "second");
      }
    }
    function Ee() {
      a.value = !1;
    }
    return {
      getRad: y,
      time: k,
      container: n,
      inner: r,
      picker: o,
      isInner: t,
      type: g,
      ampm: m,
      isPreventNextUpdate: a,
      n: z8,
      classes: O8,
      t: rn,
      pt: S,
      moveHand: ve,
      checkPanel: T,
      checkAmpm: M,
      end: ye,
      update: O,
      changePreventUpdate: Ee,
      formatElevation: fn
    };
  }
});
vh.render = T8;
var $i = vh;
re($i);
se($i, uh);
const V5 = $i;
var os = $i;
const mh = {
  modelValue: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: "image/*"
  },
  capture: {
    type: [String, Boolean],
    default: void 0
  },
  multiple: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  resolveType: {
    type: String,
    default: "default"
  },
  removable: {
    type: Boolean,
    default: !0
  },
  maxlength: [Number, String],
  maxsize: [Number, String],
  previewed: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onRemove"]
  },
  rules: [Array, Function, Object],
  hideList: Boolean,
  preventDefaultPreview: Boolean,
  onClickAction: A(),
  onBeforeFilter: A(),
  onBeforeRead: A(),
  onAfterRead: A(),
  onBeforeRemove: A(),
  onRemove: A(),
  onOversize: A(),
  onPreview: A(),
  "onUpdate:modelValue": A()
};
var yt = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: E8, n: B8, classes: D8 } = ee("uploader");
let I8 = 0;
const M8 = ["onClick"], N8 = ["onClick"], A8 = ["src", "alt"], V8 = ["tabindex"], R8 = ["multiple", "accept", "capture", "disabled"], L8 = ["src"];
function F8(e, n) {
  const o = Q("var-icon"), r = Q("var-hover-overlay"), t = Q("var-form-details"), a = Q("var-popup"), i = Ye("ripple"), l = Ye("hover");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      N(
        "div",
        {
          class: p(e.n("file-list"))
        },
        [
          (h(!0), P(
            Ne,
            null,
            Ke(e.files, (s) => Ae((h(), P("div", {
              class: p(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
              key: s.id,
              onClick: (u) => e.preview(s)
            }, [
              N(
                "div",
                {
                  class: p(e.n("file-name"))
                },
                le(s.name || s.url),
                3
                /* TEXT, CLASS */
              ),
              e.removable ? (h(), P("div", {
                key: 0,
                class: p(e.n("file-close")),
                onClick: Wn((u) => e.handleRemove(s), ["stop"])
              }, [
                X(o, {
                  class: p(e.n("file-close-icon")),
                  "var-uploader-cover": "",
                  name: "delete"
                }, null, 8, ["class"])
              ], 10, N8)) : G("v-if", !0),
              s.cover ? (h(), P("img", {
                key: 1,
                role: "img",
                class: p(e.n("file-cover")),
                style: q({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, A8)) : G("v-if", !0),
              N(
                "div",
                {
                  class: p(e.n("file-indicator"))
                },
                [
                  N(
                    "div",
                    {
                      class: p(
                        e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])
                      ),
                      style: q({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                2
                /* CLASS */
              )
            ], 10, M8)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Ae((h(), P("div", {
            key: 0,
            ref: "actionRef",
            class: p(
              e.classes(
                e.n("--outline-none"),
                [!e.$slots.default, `${e.n("action")} ${e.formatElevation(e.elevation, 2)}`],
                [e.disabled || e.formDisabled, e.n("--disabled")]
              )
            ),
            tabindex: e.disabled || e.formDisabled ? void 0 : "0",
            onClick: n[2] || (n[2] = (...s) => e.handleActionClick && e.handleActionClick(...s)),
            onFocus: n[3] || (n[3] = (s) => e.isFocusing = !0),
            onBlur: n[4] || (n[4] = (s) => e.isFocusing = !1)
          }, [
            N("input", {
              ref: "input",
              type: "file",
              class: p(e.n("action-input")),
              multiple: e.multiple,
              accept: e.accept,
              capture: e.capture,
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
              onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s)),
              onClick: n[1] || (n[1] = Wn(() => {
              }, ["stop"]))
            }, null, 42, R8),
            V(e.$slots, "default", {}, () => [
              X(o, {
                class: p(e.n("action-icon")),
                "var-uploader-cover": "",
                name: "plus"
              }, null, 8, ["class"]),
              X(r, {
                hovering: e.hovering && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly,
                focusing: e.isFocusing && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly
              }, null, 8, ["hovering", "focusing"])
            ])
          ], 42, V8)), [
            [i, {
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default
            }],
            [l, e.handleHovering, "desktop"]
          ]) : G("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      X(t, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, rr({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: ce(() => [
            V(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"]),
      X(a, {
        class: p(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[5] || (n[5] = (s) => e.showPreview = s),
        onClosed: n[6] || (n[6] = (s) => e.currentPreview = null)
      }, {
        default: ce(() => {
          var s, u;
          return [
            e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (h(), P("video", {
              key: 0,
              class: p(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (u = e.currentPreview) == null ? void 0 : u.url
            }, null, 10, L8)) : G("v-if", !0)
          ];
        }),
        _: 1
        /* STABLE */
      }, 8, ["class", "show"])
    ],
    2
    /* CLASS */
  );
}
const hh = x({
  name: E8,
  directives: { Ripple: nn, Hover: En },
  components: {
    VarIcon: Ze,
    VarPopup: Oo,
    VarFormDetails: Pn,
    VarHoverOverlay: Vn
  },
  props: mh,
  setup(e) {
    const n = $(!1), o = $(null), r = $(null), t = $(!1), a = $(null), i = B(() => {
      const {
        maxlength: L,
        modelValue: { length: Z }
      } = e;
      return Tn(L) ? `${Z} / ${L}` : "";
    }), { form: l, bindForm: s } = Fn(), {
      errorMessage: u,
      validateWithTrigger: c,
      validate: d,
      // expose
      resetValidation: f
    } = Ln(), { hovering: v, handleHovering: g } = _n(), m = B(() => {
      const { modelValue: L, hideList: Z } = e;
      return Z ? [] : L;
    });
    let k = !1;
    const w = {
      getSuccess: F,
      getError: Y,
      getLoading: j
    };
    C(s, {
      validate: ye,
      resetValidation: f,
      reset: Ee
    }), je(() => window, "keydown", y), je(() => window, "keyup", S), fe(
      () => e.modelValue,
      () => {
        !k && ve("onChange"), k = !1;
      },
      { deep: !0 }
    );
    function y(L) {
      n.value && ((L.key === " " || L.key === "Enter") && L.preventDefault(), L.key === "Enter" && o.value.click());
    }
    function S(L) {
      !n.value || L.key !== " " || (L.preventDefault(), o.value.click());
    }
    function z(L) {
      const { disabled: Z, previewed: oe, preventDefaultPreview: me, onPreview: I } = e;
      if (l != null && l.disabled.value || Z || !oe || (C(I, _e(L)), me))
        return;
      const { url: K } = L;
      if (Au(K)) {
        jr(K);
        return;
      }
      Vu(K) && (a.value = L, t.value = !0);
    }
    function O(L) {
      return {
        id: I8++,
        url: "",
        cover: "",
        name: L.name,
        file: L,
        progress: 0
      };
    }
    function D(L) {
      const Z = L.target, { files: oe } = Z;
      return Array.from(oe);
    }
    function T(L) {
      return yt(this, null, function* () {
        const Z = L.file;
        if (e.resolveType === "default" && Z.type.startsWith("image") || e.resolveType === "data-url") {
          const me = yield Wh(Z);
          L.cover = me, L.url = me;
        }
        return L;
      });
    }
    function E(L) {
      return L.map(T);
    }
    function M(L) {
      const { onBeforeRead: Z } = e;
      return L.map(
        (oe) => new Promise((me) => {
          Z || me({
            valid: !0,
            varFile: oe
          });
          const I = Co(C(Z, _e(oe)));
          Promise.all(I).then((K) => {
            me({
              valid: K.every(Boolean),
              varFile: oe
            });
          });
        })
      );
    }
    function R(L) {
      return yt(this, null, function* () {
        const { maxsize: Z, maxlength: oe, modelValue: me, onOversize: I, onAfterRead: K, onBeforeFilter: de, readonly: Se, disabled: Fe } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || Fe || Se)
          return;
        const Me = (ke) => ke.filter((Be) => Be.file.size > U(Z) ? (C(I, _e(Be)), !1) : !0), on = (ke) => {
          const Be = Math.min(ke.length, U(oe) - me.length);
          return ke.slice(0, Be);
        }, ln = (ke) => yt(this, null, function* () {
          if (!de)
            return ke;
          const Be = Co(de);
          for (const Je of Be)
            ke = yield Je(ke);
          return ke;
        });
        let pe = D(L).map(O);
        pe = yield ln(pe), pe = Z != null ? Me(pe) : pe, pe = oe != null ? on(pe) : pe;
        const We = yield Promise.all(E(pe)), ue = (yield Promise.all(M(We))).filter(({ valid: ke }) => ke).map(({ varFile: ke }) => ke);
        C(e["onUpdate:modelValue"], [...me, ...ue]), L.target.value = "", ue.forEach((ke) => C(K, _e(ke)));
      });
    }
    function W(L) {
      return yt(this, null, function* () {
        const { disabled: Z, readonly: oe, modelValue: me, onBeforeRemove: I, onRemove: K } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || Z || oe)
          return;
        if (I) {
          const Se = Co(C(I, _e(L)));
          if ((yield Promise.all(Se)).some((Fe) => !Fe))
            return;
        }
        const de = me.filter((Se) => Se !== L);
        C(K, _e(L)), ve("onRemove"), C(e["onUpdate:modelValue"], de);
      });
    }
    function H(L) {
      if (!(l != null && l.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          C(e.onClickAction, ae, L);
          return;
        }
        ae();
      }
    }
    function F() {
      return e.modelValue.filter((L) => L.state === "success");
    }
    function Y() {
      return e.modelValue.filter((L) => L.state === "error");
    }
    function j() {
      return e.modelValue.filter((L) => L.state === "loading");
    }
    function ae() {
      r.value.click();
    }
    function _() {
      a.value = null, t.value = !1, jr.close();
    }
    function ve(L) {
      He(() => {
        const { validateTrigger: Z, rules: oe, modelValue: me } = e;
        c(Z, L, oe, me, w);
      });
    }
    function ye() {
      return d(e.rules, e.modelValue, w);
    }
    function Ee() {
      k = !0, C(e["onUpdate:modelValue"], []), f();
    }
    return {
      input: r,
      actionRef: o,
      files: m,
      showPreview: t,
      currentPreview: a,
      errorMessage: u,
      maxlengthText: i,
      hovering: v,
      isFocusing: n,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: B8,
      classes: D8,
      formatElevation: fn,
      toNumber: U,
      handleHovering: g,
      isHTMLSupportVideo: Vu,
      isHTMLSupportImage: Au,
      preview: z,
      handleChange: R,
      handleRemove: W,
      getSuccess: F,
      getError: Y,
      getLoading: j,
      validate: ye,
      resetValidation: f,
      reset: Ee,
      chooseFile: ae,
      closePreview: _,
      handleActionClick: H,
      toSizeUnit: ze
    };
  }
});
hh.render = F8;
var wi = hh;
re(wi);
se(wi, mh);
const R5 = wi;
var rs = wi;
const gh = {
  width: {
    type: Number,
    default: 100
  },
  height: {
    type: Number,
    default: 100
  },
  content: String,
  image: String,
  rotate: {
    type: Number,
    default: -22
  },
  offsetX: {
    type: Number,
    default: 0
  },
  offsetY: {
    type: Number,
    default: 0
  },
  gapX: {
    type: Number,
    default: 0
  },
  gapY: {
    type: Number,
    default: 0
  },
  zIndex: {
    type: [Number, String],
    default: 10
  },
  opacity: {
    type: [Number, String],
    default: 0.5
  },
  fullscreen: Boolean,
  font: {
    type: Object,
    default: () => ({
      fontStyle: "normal",
      fontVariant: "normal",
      fontWeight: "normal",
      fontSize: 14
    })
  }
};
var U8 = Object.defineProperty, H8 = Object.defineProperties, Y8 = Object.getOwnPropertyDescriptors, $d = Object.getOwnPropertySymbols, j8 = Object.prototype.hasOwnProperty, W8 = Object.prototype.propertyIsEnumerable, wd = (e, n, o) => n in e ? U8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, K8 = (e, n) => {
  for (var o in n || (n = {}))
    j8.call(n, o) && wd(e, o, n[o]);
  if ($d)
    for (var o of $d(n))
      W8.call(n, o) && wd(e, o, n[o]);
  return e;
}, q8 = (e, n) => H8(e, Y8(n)), Cd = (e, n, o) => new Promise((r, t) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      t(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      t(u);
    }
  }, l = (s) => s.done ? r(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: X8, n: G8, classes: Z8 } = ee("watermark"), J8 = { ref: "svgRef" }, Q8 = ["viewBox", "width", "height"], _8 = ["width", "height"], x8 = ["href", "xlink:href", "x", "y", "width", "height"];
function eT(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      V(e.$slots, "default"),
      (h(), Ce(oo, {
        to: "body",
        disabled: !e.fullscreen
      }, [
        N(
          "div",
          {
            ref: "containerRef",
            class: p(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
            style: q({
              backgroundImage: `url(${e.watermarkUrl})`,
              zIndex: e.zIndex
            })
          },
          [
            Ae(N(
              "div",
              J8,
              [
                (h(), P("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  viewBox: `0 0 ${e.width + e.gapX} ${e.height + e.gapY}`,
                  width: `${e.width + e.gapX}`,
                  height: `${e.height + e.gapY}`,
                  style: q({
                    padding: `0 ${e.gapX}px ${e.gapY}px 0`,
                    opacity: e.opacity
                  })
                }, [
                  e.showContent() ? (h(), P("foreignObject", {
                    key: 0,
                    x: "0",
                    y: "0",
                    width: e.width,
                    height: e.height
                  }, [
                    N(
                      "div",
                      {
                        xmlns: "http://www.w3.org/1999/xhtml",
                        style: q({
                          transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
                          transformOrigin: "center"
                        })
                      },
                      [
                        V(e.$slots, "content", {}, () => [
                          N(
                            "span",
                            {
                              style: q(q8(K8({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
                            },
                            le(e.content),
                            5
                            /* TEXT, STYLE */
                          )
                        ])
                      ],
                      4
                      /* STYLE */
                    )
                  ], 8, _8)) : G("v-if", !0),
                  !e.$slots.content && e.image ? (h(), P("image", {
                    key: 1,
                    href: e.imageUrl,
                    "xlink:href": e.imageUrl,
                    x: e.offsetX,
                    y: e.offsetY,
                    width: e.width,
                    height: e.height,
                    style: q({
                      transform: `rotate(${e.rotate}deg)`,
                      transformOrigin: "center"
                    })
                  }, null, 12, x8)) : G("v-if", !0)
                ], 12, Q8))
              ],
              512
              /* NEED_PATCH */
            ), [
              [Qn, !1]
            ])
          ],
          6
          /* CLASS, STYLE */
        )
      ], 8, ["disabled"]))
    ],
    2
    /* CLASS */
  );
}
const bh = x({
  name: X8,
  props: gh,
  setup(e, { slots: n }) {
    const o = $(""), r = $(""), t = $(""), a = $(null), i = $(null);
    fe(
      () => [
        e.image,
        e.font,
        e.content,
        e.height,
        e.width,
        e.rotate,
        e.gapX,
        e.gapY,
        e.offsetX,
        e.offsetY,
        e.opacity
      ],
      d,
      {
        deep: !0
      }
    ), jo(d), qr(c);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return Cd(this, null, function* () {
        return new Promise((f) => {
          const v = document.createElement("canvas"), g = v.getContext("2d"), m = new Image();
          m.crossOrigin = "anonymous", m.referrerPolicy = "no-referrer", m.src = e.image, m.onload = () => {
            v.width = m.width, v.height = m.height, g.drawImage(m, 0, 0), f(v.toDataURL());
          };
        });
      });
    }
    function u(f) {
      const v = new Blob([f], {
        type: "image/svg+xml"
      });
      return URL.createObjectURL(v);
    }
    function c() {
      o.value && URL.revokeObjectURL(o.value);
    }
    function d() {
      return Cd(this, null, function* () {
        t.value = Ko(i.value).color, e.image && (r.value = yield s()), yield He(), c(), o.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: o,
      imageUrl: r,
      textColor: t,
      n: G8,
      classes: Z8,
      showContent: l,
      resize: d
    };
  }
});
bh.render = eT;
var Ci = bh;
re(Ci);
se(Ci, gh);
const L5 = Ci;
var ts = Ci;
const nT = "3.5.4";
function oT(e) {
  Ri.install && e.use(Ri), Li.install && e.use(Li), Hi.install && e.use(Hi), Wi.install && e.use(Wi), Ki.install && e.use(Ki), qi.install && e.use(qi), Bt.install && e.use(Bt), Xi.install && e.use(Xi), Gi.install && e.use(Gi), Zi.install && e.use(Zi), Ji.install && e.use(Ji), zn.install && e.use(zn), Qi.install && e.use(Qi), _i.install && e.use(_i), xi.install && e.use(xi), lr.install && e.use(lr), el.install && e.use(el), Dt.install && e.use(Dt), nl.install && e.use(nl), ol.install && e.use(ol), rl.install && e.use(rl), tl.install && e.use(tl), Nn.install && e.use(Nn), sl.install && e.use(sl), vl.install && e.use(vl), hl.install && e.use(hl), gl.install && e.use(gl), bl.install && e.use(bl), Rt.install && e.use(Rt), yl.install && e.use(yl), kl.install && e.use(kl), Mr.install && e.use(Mr), $l.install && e.use($l), wl.install && e.use(wl), Pn.install && e.use(Pn), En.install && e.use(En), Vn.install && e.use(Vn), Ze.install && e.use(Ze), Cl.install && e.use(Cl), jr.install && e.use(jr), Sl.install && e.use(Sl), Pl.install && e.use(Pl), Nr.install && e.use(Nr), Fr.install && e.use(Fr), zl.install && e.use(zl), Ol.install && e.use(Ol), cr.install && e.use(cr), Tl.install && e.use(Tl), Ai.install && e.use(Ai), El.install && e.use(El), Rr.install && e.use(Rr), sr.install && e.use(sr), Lr.install && e.use(Lr), Ft.install && e.use(Ft), Bl.install && e.use(Bl), Dl.install && e.use(Dl), Il.install && e.use(Il), Ml.install && e.use(Ml), Oo.install && e.use(Oo), Nl.install && e.use(Nl), Al.install && e.use(Al), Ut.install && e.use(Ut), Vl.install && e.use(Vl), Rl.install && e.use(Rl), Ll.install && e.use(Ll), nn.install && e.use(nn), Fl.install && e.use(Fl), Ul.install && e.use(Ul), Hl.install && e.use(Hl), Yl.install && e.use(Yl), Wl.install && e.use(Wl), Kl.install && e.use(Kl), ql.install && e.use(ql), Xl.install && e.use(Xl), pr.install && e.use(pr), Gl.install && e.use(Gl), Hr.install && e.use(Hr), Yr.install && e.use(Yr), Zl.install && e.use(Zl), Jl.install && e.use(Jl), Ql.install && e.use(Ql), _l.install && e.use(_l), xl.install && e.use(xl), es.install && e.use(es), ns.install && e.use(ns), os.install && e.use(os), Lt.install && e.use(Lt), rs.install && e.use(rs), ts.install && e.use(ts);
}
const F5 = {
  version: nT,
  install: oT,
  ActionSheet: Ri,
  AppBar: Li,
  AutoComplete: Hi,
  Avatar: Wi,
  AvatarGroup: Ki,
  BackTop: qi,
  Badge: Bt,
  BottomNavigation: Xi,
  BottomNavigationItem: Gi,
  Breadcrumb: Zi,
  Breadcrumbs: Ji,
  Button: zn,
  ButtonGroup: Qi,
  Card: _i,
  Cell: xi,
  Checkbox: lr,
  CheckboxGroup: el,
  Chip: Dt,
  Col: nl,
  Collapse: ol,
  CollapseItem: rl,
  CollapseTransition: tl,
  Context: Nn,
  Countdown: sl,
  Counter: vl,
  DatePicker: hl,
  Dialog: gl,
  Divider: bl,
  Drag: Rt,
  Ellipsis: yl,
  Fab: kl,
  FieldDecorator: Mr,
  FloatingPanel: $l,
  Form: wl,
  FormDetails: Pn,
  Hover: En,
  HoverOverlay: Vn,
  Icon: Ze,
  Image: Cl,
  ImagePreview: jr,
  IndexAnchor: Sl,
  IndexBar: Pl,
  Input: Nr,
  Lazy: Fr,
  Link: zl,
  List: Ol,
  Loading: cr,
  LoadingBar: Tl,
  Locale: Ai,
  LocaleProvider: El,
  Menu: Rr,
  MenuOption: sr,
  MenuSelect: Lr,
  Option: Ft,
  Overlay: Bl,
  Pagination: Dl,
  Paper: Il,
  Picker: Ml,
  Popup: Oo,
  Progress: Nl,
  PullRefresh: Al,
  Radio: Ut,
  RadioGroup: Vl,
  Rate: Rl,
  Result: Ll,
  Ripple: nn,
  Row: Fl,
  Select: Ul,
  Skeleton: Hl,
  Slider: Yl,
  Snackbar: Wl,
  Space: Kl,
  Step: ql,
  Steps: Xl,
  Sticky: pr,
  StyleProvider: Gl,
  Swipe: Hr,
  SwipeItem: Yr,
  Switch: Zl,
  Tab: Jl,
  TabItem: Ql,
  Table: _l,
  Tabs: xl,
  TabsItems: es,
  Themes: ns,
  TimePicker: os,
  Tooltip: Lt,
  Uploader: rs,
  Watermark: ts
};
export {
  Ri as ActionSheet,
  Li as AppBar,
  Hi as AutoComplete,
  Wi as Avatar,
  Ki as AvatarGroup,
  qi as BackTop,
  Bt as Badge,
  Xi as BottomNavigation,
  Gi as BottomNavigationItem,
  Zi as Breadcrumb,
  Ji as Breadcrumbs,
  zn as Button,
  Qi as ButtonGroup,
  _i as Card,
  xi as Cell,
  lr as Checkbox,
  el as CheckboxGroup,
  Dt as Chip,
  nl as Col,
  ol as Collapse,
  rl as CollapseItem,
  tl as CollapseTransition,
  Nn as Context,
  sl as Countdown,
  vl as Counter,
  hl as DatePicker,
  gl as Dialog,
  bl as Divider,
  Rt as Drag,
  yl as Ellipsis,
  kl as Fab,
  Mr as FieldDecorator,
  $l as FloatingPanel,
  wl as Form,
  Pn as FormDetails,
  En as Hover,
  Vn as HoverOverlay,
  Ze as Icon,
  Cl as Image,
  jr as ImagePreview,
  Sl as IndexAnchor,
  Pl as IndexBar,
  Nr as Input,
  Fr as Lazy,
  zl as Link,
  Ol as List,
  cr as Loading,
  Tl as LoadingBar,
  Ai as Locale,
  El as LocaleProvider,
  Rr as Menu,
  sr as MenuOption,
  Lr as MenuSelect,
  Ft as Option,
  Bl as Overlay,
  ji as PIXEL,
  Dl as Pagination,
  Il as Paper,
  Ml as Picker,
  Oo as Popup,
  Nl as Progress,
  Al as PullRefresh,
  Ut as Radio,
  Vl as RadioGroup,
  Rl as Rate,
  Ll as Result,
  nn as Ripple,
  Fl as Row,
  Fm as SNACKBAR_TYPE,
  Ul as Select,
  Hl as Skeleton,
  Yl as Slider,
  Wl as Snackbar,
  Kl as Space,
  ql as Step,
  Xl as Steps,
  pr as Sticky,
  Gl as StyleProvider,
  Hr as Swipe,
  Yr as SwipeItem,
  Zl as Switch,
  Jl as Tab,
  Ql as TabItem,
  _l as Table,
  xl as Tabs,
  es as TabsItems,
  ns as Themes,
  os as TimePicker,
  Lt as Tooltip,
  rs as Uploader,
  ts as Watermark,
  dT as _ActionSheetComponent,
  fT as _AppBarComponent,
  kT as _AutoCompleteComponent,
  wT as _AvatarComponent,
  CT as _AvatarGroupComponent,
  zT as _BackTopComponent,
  OT as _BadgeComponent,
  TT as _BottomNavigationComponent,
  ET as _BottomNavigationItemComponent,
  BT as _BreadcrumbComponent,
  DT as _BreadcrumbsComponent,
  PT as _ButtonComponent,
  IT as _ButtonGroupComponent,
  MT as _CardComponent,
  NT as _CellComponent,
  gT as _CheckboxComponent,
  AT as _CheckboxGroupComponent,
  VT as _ChipComponent,
  RT as _ColComponent,
  LT as _CollapseComponent,
  FT as _CollapseItemComponent,
  UT as _CollapseTransitionComponent,
  tT as _ContextComponent,
  HT as _CountdownComponent,
  YT as _CounterComponent,
  WT as _DatePickerComponent,
  KT as _DialogComponent,
  qT as _DividerComponent,
  XT as _DragComponent,
  ZT as _EllipsisComponent,
  JT as _FabComponent,
  vT as _FieldDecoratorComponent,
  QT as _FloatingPanelComponent,
  _T as _FormComponent,
  pT as _FormDetailsComponent,
  uT as _HoverComponent,
  sT as _HoverOverlayComponent,
  lT as _IconComponent,
  xT as _ImageComponent,
  o5 as _ImagePreviewComponent,
  r5 as _IndexAnchorComponent,
  t5 as _IndexBarComponent,
  mT as _InputComponent,
  $T as _LazyComponent,
  a5 as _LinkComponent,
  i5 as _ListComponent,
  l5 as _LoadingBarComponent,
  ST as _LoadingComponent,
  cT as _LocaleComponent,
  s5 as _LocaleProviderComponent,
  hT as _MenuComponent,
  bT as _MenuOptionComponent,
  yT as _MenuSelectComponent,
  u5 as _OptionComponent,
  c5 as _OverlayComponent,
  d5 as _PaginationComponent,
  f5 as _PaperComponent,
  p5 as _PickerComponent,
  iT as _PopupComponent,
  v5 as _ProgressComponent,
  m5 as _PullRefreshComponent,
  h5 as _RadioComponent,
  g5 as _RadioGroupComponent,
  b5 as _RateComponent,
  y5 as _ResultComponent,
  aT as _RippleComponent,
  k5 as _RowComponent,
  $5 as _SelectComponent,
  w5 as _SkeletonComponent,
  C5 as _SliderComponent,
  S5 as _SnackbarComponent,
  P5 as _SpaceComponent,
  z5 as _StepComponent,
  O5 as _StepsComponent,
  jT as _StickyComponent,
  T5 as _StyleProviderComponent,
  e5 as _SwipeComponent,
  n5 as _SwipeItemComponent,
  E5 as _SwitchComponent,
  B5 as _TabComponent,
  D5 as _TabItemComponent,
  I5 as _TableComponent,
  M5 as _TabsComponent,
  N5 as _TabsItemsComponent,
  A5 as _ThemesComponent,
  V5 as _TimePickerComponent,
  GT as _TooltipComponent,
  R5 as _UploaderComponent,
  L5 as _WatermarkComponent,
  tf as actionSheetProps,
  hs as add,
  pf as appBarProps,
  Jf as avatarGroupProps,
  Gf as avatarProps,
  op as backTopProps,
  tp as badgeProps,
  up as bottomNavigationItemProps,
  ip as bottomNavigationProps,
  dp as breadcrumbProps,
  vp as breadcrumbsProps,
  hp as buttonGroupProps,
  xf as buttonProps,
  bp as cardProps,
  kp as cellProps,
  wp as checkboxGroupProps,
  Df as checkboxProps,
  Sp as chipProps,
  zp as colProps,
  Ip as collapseItemProps,
  Bp as collapseProps,
  Ap as collapseTransitionProps,
  Rp as countdownProps,
  Jp as counterProps,
  cf as currentMessage,
  av as datePickerProps,
  F5 as default,
  cn as defaultLazyOptions,
  fv as dialogProps,
  vv as dividerProps,
  hv as dragProps,
  kv as ellipsisProps,
  af as enUS,
  sf as faIR,
  wv as fabProps,
  Gt as fieldDecoratorProps,
  mf as formDetailsProps,
  Pv as formProps,
  Gd as hoverOverlayProps,
  en as iconProps,
  jf as imageCache,
  Dv as imagePreviewProps,
  Ov as imageProps,
  Nv as indexAnchorProps,
  Vv as indexBarProps,
  ys as inputProps,
  oT as install,
  Lv as linkProps,
  Uv as listProps,
  t6 as loadingBarProps,
  lo as loadingProps,
  Af as menuOptionProps,
  ks as menuProps,
  Rf as menuSelectProps,
  df as merge,
  uf as messages,
  em as optionProps,
  om as overlayProps,
  rm as paginationProps,
  am as paperProps,
  lm as pickerProps,
  br as popupProps,
  um as progressProps,
  dm as pullRefreshProps,
  hm as radioGroupProps,
  pm as radioProps,
  bm as rateProps,
  zm as resultProps,
  Tm as rowProps,
  Bm as selectProps,
  Im as skeletonProps,
  Nm as sliderProps,
  Fs as snackbarProps,
  Ym as spaceProps,
  jm as stepProps,
  qm as stepsProps,
  Tr as stickyProps,
  Gm as styleProviderProps,
  Ns as swipeProps,
  Jm as switchProps,
  rn as t,
  nh as tabItemProps,
  _m as tabProps,
  rh as tableProps,
  lh as tabsItemsProps,
  ah as tabsProps,
  uh as timePickerProps,
  bv as tooltipProps,
  mh as uploaderProps,
  gs as use,
  _n as useHoverOverlay,
  ms as useLocale,
  nT as version,
  gh as watermarkProps,
  ps as zhCN,
  lf as zhHK,
  vs as zhTW
};
