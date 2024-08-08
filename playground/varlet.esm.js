import { reactive as Qe, onMounted as Yo, nextTick as qe, onActivated as Eo, isRef as mh, watch as ce, onBeforeUnmount as Yr, onDeactivated as pt, onUnmounted as Wt, inject as bd, getCurrentInstance as jo, computed as I, ref as k, unref as yd, provide as kd, isVNode as hh, defineComponent as x, h as jr, Comment as gh, Fragment as Ve, createApp as bh, onBeforeMount as yh, createVNode as G, Teleport as oo, Transition as _e, withDirectives as Ne, vShow as Xn, mergeProps as je, openBlock as h, createBlock as Pe, resolveDynamicComponent as vt, normalizeClass as p, normalizeStyle as K, createElementBlock as S, resolveComponent as _, resolveDirective as We, createCommentVNode as X, createElementVNode as D, toDisplayString as re, withCtx as fe, renderSlot as V, renderList as Ze, onUpdated as Kt, createTextVNode as De, pushScopeId as Wo, popScopeId as Ko, withModifiers as An, normalizeProps as wo, guardReactiveProps as qt, vModelText as kh, createSlots as Et, withKeys as Fs, TransitionGroup as $h } from "vue";
const $d = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, n5 = Qe($d);
var Nn = Qe($d), wh = Object.defineProperty, Ch = Object.defineProperties, Sh = Object.getOwnPropertyDescriptors, Us = Object.getOwnPropertySymbols, Ph = Object.prototype.hasOwnProperty, zh = Object.prototype.propertyIsEnumerable, Hs = (e, n, o) => n in e ? wh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Oh = (e, n) => {
  for (var o in n || (n = {}))
    Ph.call(n, o) && Hs(e, o, n[o]);
  if (Us)
    for (var o of Us(n))
      zh.call(n, o) && Hs(e, o, n[o]);
  return e;
}, Th = (e, n) => Ch(e, Sh(n)), gn = (e) => typeof e == "string", rs = (e) => typeof e == "boolean", On = (e) => typeof e == "number", wd = (e) => On(e) || gn(e) && /^[-+]?\d+$/.test(e), tt = (e) => Object.prototype.toString.call(e) === "[object Object]", Eh = (e) => typeof e == "object" && e !== null, Qn = (e) => typeof e == "function", Ye = (e) => Array.isArray(e), Bh = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, _n = (e) => e == null || e === "" || Ye(e) && !e.length, Cd = (e) => e === window, Ih = () => to() && "ontouchstart" in window, to = () => typeof window < "u", wr = () => to() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), { hasOwnProperty: Dh } = Object.prototype, Cr = (e, n) => Dh.call(e, n), Ys = (e) => [...new Set(e)], Vo = (e) => Ye(e) ? e : [e], rt = (e, n) => {
  if (e.length) {
    const o = e.indexOf(n);
    if (o > -1)
      return e.splice(o, 1);
  }
}, Mh = (e) => e.filter((n) => n != null), Nh = (e, n, o = "start") => {
  let t = o === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && t >= 0 && t <= e.length - 1; ) {
    if (n(e[t], t, e))
      return [e[t], t];
    o === "start" ? t++ : t--;
  }
  return [null, -1];
}, Ah = (...e) => e.map((n) => {
  if (Ye(n)) {
    const [o, t, r = null] = n;
    return o ? t : r;
  }
  return n;
}), Sd = () => typeof globalThis < "u" ? globalThis : to() ? window : typeof global < "u" ? global : self, Bt = (e) => {
  const n = Sd();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}, js = (e) => {
  const n = Sd();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}, gr = () => new Promise((e) => {
  Bt(e);
}), $n = () => new Promise((e) => {
  Bt(() => {
    Bt(e);
  });
}), qo = (e) => window.getComputedStyle(e), sn = (e) => {
  if (Cd(e)) {
    const n = e.innerWidth, o = e.innerHeight, t = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: n,
      bottom: o,
      width: n,
      height: o
    };
    return Th(Oh({}, t), {
      toJSON: () => t
    });
  }
  return e.getBoundingClientRect();
}, Vh = (e) => {
  const { top: n, bottom: o, left: t, right: r } = sn(e), { width: a, height: i } = sn(window), l = t <= a && r >= 0, s = n <= i && o >= 0;
  return l && s;
}, Lh = (e) => new Promise((n) => {
  const o = new FileReader();
  o.onload = () => {
    n(o.result);
  }, o.readAsDataURL(e);
}), Fe = (e) => {
  e.cancelable !== !1 && e.preventDefault();
}, Ro = (e) => {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}, as = (e) => {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}, is = (e, n = 200) => {
  let o, t = 0;
  return function r(...a) {
    const i = Date.now(), l = i - t;
    t || (t = i), o && clearTimeout(o), l >= n ? (e.apply(this, a), t = i) : o = setTimeout(() => {
      r.apply(this, a);
    }, n - l);
  };
};
function P(e, ...n) {
  if (Ye(e))
    return e.map((o) => o(...n));
  if (e)
    return e(...n);
}
var R = (e) => e == null ? 0 : gn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : rs(e) ? Number(e) : e, Mn = (e, n, o) => Math.min(o, Math.max(n, e)), Rh = (e, n) => Mn(e, 0, n.length - 1), Fh = (e) => ls(e).replace(e.charAt(0), e.charAt(0).toUpperCase()), ls = (e) => e.replace(/-(\w)/g, (n, o) => o.toUpperCase()), Pd = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
function Uh(e) {
  return (n) => {
    const o = `${e}-${n}`, t = (r) => r ? r[0] === "$" ? r.replace("$", e) : r.startsWith("--") ? `${o}${r}` : `${o}__${r}` : o;
    return {
      name: Fh(o),
      n: t,
      classes: Ah
    };
  };
}
var Hh = Object.defineProperty, Sr = Object.getOwnPropertySymbols, zd = Object.prototype.hasOwnProperty, Od = Object.prototype.propertyIsEnumerable, Ws = (e, n, o) => n in e ? Hh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Yh = (e, n) => {
  for (var o in n || (n = {}))
    zd.call(n, o) && Ws(e, o, n[o]);
  if (Sr)
    for (var o of Sr(n))
      Od.call(n, o) && Ws(e, o, n[o]);
  return e;
}, jh = (e, n) => {
  var o = {};
  for (var t in e)
    zd.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && Sr)
    for (var t of Sr(e))
      n.indexOf(t) < 0 && Od.call(e, t) && (o[t] = e[t]);
  return o;
};
function vn(e) {
  let n = !1;
  Yo(() => {
    e(), qe(() => {
      n = !0;
    });
  }), Eo(() => {
    n && e();
  });
}
function Ke(e, n, o, t = {}) {
  if (!to())
    return;
  const { passive: r = !1, capture: a = !1 } = t;
  let i = !1, l = !1;
  const s = (v) => Qn(v) ? v() : yd(v), u = (v) => {
    if (i || l)
      return;
    const b = s(v);
    b && (b.addEventListener(n, o, {
      passive: r,
      capture: a
    }), i = !0);
  }, c = (v) => {
    if (!i || l)
      return;
    const b = s(v);
    b && (b.removeEventListener(n, o, {
      capture: a
    }), i = !1);
  };
  let d;
  mh(e) && (d = ce(
    () => e.value,
    (v, b) => {
      c(b), u(v);
    }
  ));
  const f = () => {
    d == null || d(), c(e), l = !0;
  };
  return vn(() => {
    u(e);
  }), Yr(() => {
    c(e);
  }), pt(() => {
    c(e);
  }), f;
}
function Td(e, n, o) {
  if (!to())
    return;
  Ke(document, n, (r) => {
    const a = Qn(e) ? e() : yd(e);
    a && !a.contains(r.target) && o(r);
  });
}
function Gt(e) {
  let n = !1;
  pt(() => {
    n = !0, e();
  }), Wt(() => {
    n || e();
  });
}
function Ed(e) {
  const n = jo();
  return e in n.provides;
}
function bn(e) {
  if (!Ed(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const o = bd(e), { childInstances: t, collect: r, clear: a } = o, i = jh(o, ["childInstances", "collect", "clear"]), l = jo();
  return {
    index: I(() => t.indexOf(l)),
    parentProvider: i,
    bindParent: (c) => {
      Yo(() => {
        qe().then(() => {
          r(l, c);
        });
      }), Yr(() => {
        qe().then(() => {
          a(l, c);
        });
      });
    }
  };
}
function Wh(e) {
  const n = [], o = (t) => {
    if (t != null && t.component) {
      o(t == null ? void 0 : t.component.subTree);
      return;
    }
    Ye(t == null ? void 0 : t.children) && t.children.forEach((r) => {
      hh(r) && (n.push(r), o(r));
    });
  };
  return o(e), n;
}
function yn(e) {
  const n = jo(), o = Qe([]), t = [], r = I(() => o.length), a = () => {
    const u = Wh(n.subTree);
    o.sort((c, d) => u.indexOf(c.vnode) - u.indexOf(d.vnode));
  }, i = (u, c) => {
    o.push(u), t.push(c), a();
  }, l = (u, c) => {
    rt(o, u), rt(t, c);
  };
  return {
    length: r,
    childProviders: t,
    bindChildren: (u) => {
      kd(e, Yh({
        childInstances: o,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function ro(e) {
  Ke(() => window, "resize", e, { passive: !0 }), Ke(() => window, "orientationchange", e, { passive: !0 });
}
function Kh(e, n) {
  const o = k(!1);
  return ce(
    e,
    (t) => {
      n === t && (o.value = !0);
    },
    { immediate: !0 }
  ), o;
}
function qh(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function mt() {
  const e = k(0), n = k(0), o = k(0), t = k(0), r = k(0), a = k(0), i = k(0), l = k(0), s = k(0), u = k(0), c = k(), d = k(!1), f = k(!1), v = k(0), b = k(0);
  let m = null;
  const y = () => {
    e.value = 0, n.value = 0, o.value = 0, t.value = 0, r.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, c.value = void 0, d.value = !1, f.value = !1, v.value = 0, b.value = 0;
  };
  return {
    startX: e,
    startY: n,
    deltaX: o,
    deltaY: t,
    offsetX: r,
    offsetY: a,
    prevX: i,
    prevY: l,
    moveX: s,
    moveY: u,
    direction: c,
    touching: d,
    dragging: f,
    startTime: v,
    distance: b,
    resetTouch: y,
    startTouch: (O) => {
      y();
      const { clientX: A, clientY: T } = O.touches[0];
      e.value = A, n.value = T, i.value = A, l.value = T, d.value = !0, v.value = performance.now(), f.value = !1, m && window.cancelAnimationFrame(m);
    },
    moveTouch: (O) => {
      const { clientX: A, clientY: T } = O.touches[0];
      f.value = !0, o.value = A - e.value, t.value = T - n.value, r.value = Math.abs(o.value), a.value = Math.abs(t.value), b.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = A - i.value, u.value = T - l.value, c.value || (c.value = qh(r.value, a.value)), i.value = A, l.value = T;
    },
    endTouch: () => {
      d.value = !1, m = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (O) => Ro(O) === 0 && t.value > 0,
    isReachBottom: (O, A = 1) => {
      const { scrollHeight: T, clientHeight: E, scrollTop: B } = O, N = Math.abs(T - B - E);
      return t.value < 0 && N <= A;
    }
  };
}
function Bd() {
  const e = jo(), n = Pd(e.type.name), o = k(void 0);
  return Yo(() => {
    o.value = `${n}-${e.uid}`;
  }), o;
}
function Gh(e = {}) {
  const { initialWidth: n = 0, initialHeight: o = 0 } = e, t = k(n), r = k(o), a = () => {
    to() && (t.value = window.innerWidth, r.value = window.innerHeight);
  };
  return vn(a), ro(a), {
    width: t,
    height: r
  };
}
function Zn(e, n, o = {}) {
  const { passive: t = !0, eventName: r, defaultValue: a, emit: i } = o, l = r ?? `onUpdate:${n.toString()}`, s = () => {
    var d;
    return (d = e[n]) != null ? d : a;
  };
  if (!t)
    return I({
      get() {
        return s();
      },
      set(d) {
        i ? i(l, d) : P(e[l], d);
      }
    });
  const u = k(s());
  let c = !0;
  return ce(
    () => e[n],
    () => {
      c = !1, u.value = s(), qe(() => {
        c = !0;
      });
    }
  ), ce(
    () => u.value,
    (d) => {
      c && (i ? i(l, d) : P(e[l], d));
    }
  ), u;
}
var Xh = Object.defineProperty, Zh = Object.defineProperties, Jh = Object.getOwnPropertyDescriptors, Ks = Object.getOwnPropertySymbols, Qh = Object.prototype.hasOwnProperty, _h = Object.prototype.propertyIsEnumerable, qs = (e, n, o) => n in e ? Xh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ni = (e, n) => {
  for (var o in n || (n = {}))
    Qh.call(n, o) && qs(e, o, n[o]);
  if (Ks)
    for (var o of Ks(n))
      _h.call(n, o) && qs(e, o, n[o]);
  return e;
}, xh = (e, n) => Zh(e, Jh(n)), Gs = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
function Me(e, n) {
  return Ye(n) ? n.reduce((o, t) => (o[t] = e[t], o), {}) : e[n];
}
function oe(e, n) {
  const o = n ?? e;
  return o.install = function(t) {
    const { name: r } = e;
    r && t.component(r, e);
  }, o;
}
function le(e, n) {
  e.setPropsDefaults = function(o) {
    Object.entries(o).forEach(([t, r]) => {
      const a = n[t];
      if (a != null) {
        if (tt(a)) {
          n[t] = xh(Ni({}, a), {
            default: r
          });
          return;
        }
        n[t] = {
          type: a,
          default: r
        };
      }
    });
  };
}
function eg(e) {
  const n = bh(e), o = document.createElement("div");
  return document.body.appendChild(o), {
    instance: n.mount(o),
    unmount() {
      n.unmount(), o.parentNode && document.body.removeChild(o);
    }
  };
}
function ht(e, n = {}, o = {}) {
  const t = {
    setup() {
      return () => jr(e, Ni(Ni({}, n), o));
    }
  }, { unmount: r } = eg(t);
  return { unmountInstance: r };
}
function Id(e) {
  const n = [];
  return e.forEach((o) => {
    if (o.type !== gh) {
      if (o.type === Ve && Ye(o.children)) {
        o.children.forEach((t) => {
          n.push(t);
        });
        return;
      }
      n.push(o);
    }
  }), n;
}
function Yn() {
  const e = k(""), n = (r, a, i) => Gs(this, null, function* () {
    if (!Ye(r) || !r.length)
      return !0;
    const l = yield Promise.all(r.map((s) => s(a, i)));
    return o(), !l.some((s) => s !== !0 ? (e.value = String(s), !0) : !1);
  }), o = () => {
    e.value = "";
  };
  return {
    errorMessage: e,
    validate: n,
    resetValidation: o,
    validateWithTrigger: (r, a, i, l, s) => Gs(this, null, function* () {
      r.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function ng(e) {
  Ke(() => window, "hashchange", e), Ke(() => window, "popstate", e);
}
function Go() {
  const e = k(!1);
  return Eo(() => {
    e.value = !1;
  }), pt(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
const ee = Uh("var");
function L(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function pn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
const Xt = x({
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
    return () => gn(e.is) ? jr(e.tag, e.is) : e.is;
  }
});
var og = Object.defineProperty, tg = Object.defineProperties, rg = Object.getOwnPropertyDescriptors, Xs = Object.getOwnPropertySymbols, ag = Object.prototype.hasOwnProperty, ig = Object.prototype.propertyIsEnumerable, Zs = (e, n, o) => n in e ? og(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Dd = (e, n) => {
  for (var o in n || (n = {}))
    ag.call(n, o) && Zs(e, o, n[o]);
  if (Xs)
    for (var o of Xs(n))
      ig.call(n, o) && Zs(e, o, n[o]);
  return e;
}, lg = (e, n) => tg(e, rg(n));
const { n: Md } = ee("ripple"), Js = 250;
function sg(e) {
  const { zIndex: n, position: o } = qo(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", o === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Qs(e) {
  return "touches" in e;
}
function ug(e, n) {
  const { top: o, left: t } = sn(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = Qs(n) ? n.touches[0].clientX - t : r / 2, u = Qs(n) ? n.touches[0].clientY - o : a / 2, c = (r - i * 2) / 2, d = (a - i * 2) / 2, f = s - i, v = u - i;
  return { x: f, y: v, centerX: c, centerY: d, size: l };
}
function ss(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !Nn.enableRipple)
    return;
  const o = () => {
    n.tasker = null;
    const { x: t, y: r, centerX: a, centerY: i, size: l } = ug(this, e), s = document.createElement("div");
    s.classList.add(Md()), s.style.opacity = "0", s.style.transform = `translate(${t}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), sg(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(o, 30);
}
function Pr() {
  const e = this._ripple, n = () => {
    const o = this.querySelectorAll(`.${Md()}`);
    if (!o.length)
      return;
    const t = o[o.length - 1], r = Js - performance.now() + Number(t.dataset.createdAt);
    window.setTimeout(() => {
      t.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = t.parentNode) == null ? void 0 : a.removeChild(t);
      }, Js);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Nd() {
  if (!Ih() || !Nn.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
let zr = !1;
function cg(e) {
  zr || !(e.key === " " || e.key === "Enter") || (ss.call(this, e), zr = !0);
}
function _s() {
  zr && (Pr.call(this), zr = !1);
}
function dg(e, n) {
  var o;
  e._ripple = lg(Dd({
    tasker: null
  }, (o = n.value) != null ? o : {}), {
    removeRipple: Pr.bind(e)
  }), e.addEventListener("touchstart", ss, { passive: !0 }), e.addEventListener("touchmove", Nd, { passive: !0 }), e.addEventListener("dragstart", Pr, { passive: !0 }), e.addEventListener("keydown", cg), e.addEventListener("keyup", _s), e.addEventListener("blur", _s), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function fg(e) {
  e.removeEventListener("touchstart", ss), e.removeEventListener("touchmove", Nd), e.removeEventListener("dragstart", Pr), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function pg(e, n) {
  var o, t, r, a, i, l;
  const s = {
    color: (o = n.value) == null ? void 0 : o.color,
    disabled: (t = n.value) == null ? void 0 : t.disabled
  };
  (s.color !== ((r = e._ripple) == null ? void 0 : r.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = Dd({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const Ad = {
  mounted: dg,
  unmounted: fg,
  updated: pg,
  install(e) {
    e.directive("ripple", this);
  }
}, o5 = Ad;
var rn = Ad;
const gt = {
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
  onOpen: L(),
  onOpened: L(),
  onClose: L(),
  onClosed: L(),
  onKeyEscape: L(),
  onClickOverlay: L(),
  "onUpdate:show": L(),
  // internal for Dialog
  onRouteChange: L()
}, { n: xs } = ee("");
function Vd() {
  Object.keys(Nn.locks).length <= 0 ? document.body.classList.remove(xs("$--lock")) : document.body.classList.add(xs("$--lock"));
}
function or(e) {
  Nn.locks[e] = 1, Vd();
}
function tr(e) {
  delete Nn.locks[e], Vd();
}
function Zt(e, n) {
  const { uid: o } = jo();
  n && ce(n, (t) => {
    t === !1 ? tr(o) : t === !0 && e() === !0 && or(o);
  }), ce(e, (t) => {
    n && n() === !1 || (t === !0 ? or(o) : tr(o));
  }), yh(() => {
    n && n() === !1 || e() === !0 && or(o);
  }), Wt(() => {
    n && n() === !1 || e() === !0 && tr(o);
  }), Eo(() => {
    n && n() === !1 || e() === !0 && or(o);
  }), pt(() => {
    n && n() === !1 || e() === !0 && tr(o);
  });
}
function Jt(e, n) {
  const o = k(Nn.zIndex);
  return ce(
    e,
    (t) => {
      t && (Nn.zIndex += n, o.value = Nn.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: o };
}
const fo = [];
function us(e, n) {
  const { uid: o } = jo();
  ce(e, (i) => {
    i && !a(o) ? r() : setTimeout(() => {
      rt(fo, a(o));
    });
  }), vn(() => {
    e() && r();
  }), Gt(() => {
    rt(fo, a(o));
  });
  function t() {
    return fo.length === 0 ? !0 : (fo.sort((i, l) => i.zIndex.value - l.zIndex.value), fo[fo.length - 1].uid === o);
  }
  function r() {
    a(o) || fo.push({ uid: o, zIndex: n });
  }
  function a(i) {
    return fo.find((l) => l.uid === i);
  }
  return {
    onStackTop: t
  };
}
const Ld = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Rd() {
  const { bindParent: e, parentProvider: n, index: o } = bn(Ld);
  return {
    index: o,
    popup: n,
    bindPopup: e
  };
}
function vg() {
  const { bindChildren: e, childProviders: n, length: o } = yn(Ld);
  return {
    length: o,
    popupItems: n,
    bindPopupItems: e
  };
}
var mg = Object.defineProperty, eu = Object.getOwnPropertySymbols, hg = Object.prototype.hasOwnProperty, gg = Object.prototype.propertyIsEnumerable, nu = (e, n, o) => n in e ? mg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, bg = (e, n) => {
  for (var o in n || (n = {}))
    hg.call(n, o) && nu(e, o, n[o]);
  if (eu)
    for (var o of eu(n))
      gg.call(n, o) && nu(e, o, n[o]);
  return e;
};
const {
  name: yg,
  n: Rn,
  classes: Si
} = ee("popup");
var Wr = x({
  name: yg,
  inheritAttrs: !1,
  props: gt,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = Kh(() => e.show, !0), {
      zIndex: r
    } = Jt(() => e.show, 3), a = I(() => {
      var b;
      return (b = e.zIndex) != null ? b : r.value;
    }), {
      onStackTop: i
    } = us(() => e.show, a), {
      disabled: l
    } = Go(), {
      bindPopupItems: s
    } = vg();
    Zt(() => e.show, () => e.lockScroll), ce(() => e.show, (b) => {
      P(b ? e.onOpen : e.onClose);
    }), s({
      show: I(() => e.show)
    }), Ke(() => window, "keydown", v), ng(() => P(e.onRouteChange));
    function u() {
      const {
        closeOnClickOverlay: b,
        onClickOverlay: m
      } = e;
      P(m), b && P(e["onUpdate:show"], !1);
    }
    function c() {
      const {
        overlayClass: b = "",
        overlayStyle: m
      } = e;
      return G("div", {
        class: Si(Rn("overlay"), b),
        style: bg({
          zIndex: a.value - 1
        }, m),
        onClick: u
      }, null);
    }
    function d() {
      return Ne(G("div", je({
        class: Si(Rn("content"), Rn(`--${e.position}`), [e.defaultStyle, Rn("--content-background-color")], [e.defaultStyle, Rn("$-elevation--3")], [e.safeArea, Rn("--safe-area")], [e.safeAreaTop, Rn("--safe-area-top")]),
        style: {
          zIndex: a.value
        },
        role: "dialog",
        "aria-modal": "true"
      }, o), [t.value && P(n.default)]), [[Xn, e.show]]);
    }
    function f() {
      return G(_e, {
        name: Rn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Ne(G("div", {
          class: Si(Rn("$--box"), Rn(), [!e.overlay, Rn("--pointer-events-none")]),
          style: {
            zIndex: a.value - 2
          }
        }, [e.overlay && c(), G(_e, {
          name: e.transition || Rn(`$-pop-${e.position}`)
        }, {
          default: () => [d()]
        })]), [[Xn, e.show]])]
      });
    }
    function v(b) {
      !i() || b.key !== "Escape" || !e.show || (P(e.onKeyEscape), e.closeOnKeyEscape && (Fe(b), P(e["onUpdate:show"], !1)));
    }
    return () => {
      const {
        teleport: b
      } = e;
      return b ? G(oo, {
        to: b,
        disabled: l.value
      }, {
        default: () => [f()]
      }) : f();
    };
  }
});
oe(Wr);
le(Wr, gt);
const t5 = Wr;
var Po = Wr;
const tn = {
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
  onClick: L()
};
function Vn(e, n) {
  throw Error(`Varlet [${e}]: ${n}`);
}
function kg(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function $g(e) {
  const { left: n } = sn(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function ou(e) {
  const { top: n } = sn(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Pi(e) {
  const { transform: n } = qo(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function zo(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const o = /(scroll|auto)/, { overflowY: t, overflow: r } = qo(n);
    if (o.test(t) || o.test(r))
      return n;
  }
  return window;
}
function wg(e) {
  const n = [];
  let o = e;
  for (; !Cd(o); )
    o = zo(o), n.push(o);
  return n;
}
function Fd(e, n) {
  if (gn(e)) {
    const o = document.querySelector(e);
    return o || Vn(n, "target element cannot found"), o;
  }
  if (Eh(e))
    return e;
  Vn(n, 'type of prop "target" should be a selector or an element object');
}
function Cg() {
  const { width: e, height: n } = sn(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const Sg = (e) => gn(e) && e.endsWith("rem"), Pg = (e) => gn(e) && e.endsWith("px") || On(e), zg = (e) => gn(e) && e.endsWith("vw"), Og = (e) => gn(e) && e.endsWith("vh"), Tg = (e) => gn(e) && e.endsWith("vmin"), Eg = (e) => gn(e) && e.endsWith("vmax"), nn = (e) => {
  if (wd(e))
    return Number(e);
  if (Pg(e))
    return +e.replace("px", "");
  if (!to())
    return 0;
  const { vw: n, vh: o, vMin: t, vMax: r } = Cg();
  if (zg(e))
    return +e.replace("vw", "") * n / 100;
  if (Og(e))
    return +e.replace("vh", "") * o / 100;
  if (Tg(e))
    return +e.replace("vmin", "") * t / 100;
  if (Eg(e))
    return +e.replace("vmax", "") * r / 100;
  if (Sg(e)) {
    const a = +e.replace("rem", ""), i = qo(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return gn(e) ? R(e) : 0;
}, Oe = (e) => {
  if (e != null)
    return wd(e) ? `${e}px` : String(e);
}, Cn = (e, n = 1) => {
  if (e == null)
    return;
  const o = Oe(e), t = o.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(o) * n}${t}`;
};
function It(e, { top: n = 0, left: o = 0, duration: t = 300, animation: r }) {
  const a = Date.now(), i = Ro(e), l = as(e);
  return new Promise((s) => {
    const u = () => {
      const c = (Date.now() - a) / t;
      if (c < 1) {
        const d = i + (n - i) * r(c), f = l + (o - l) * r(c);
        e.scrollTo(f, d), requestAnimationFrame(u);
      } else
        e.scrollTo(o, n), s();
    };
    requestAnimationFrame(u);
  });
}
function Ud(e) {
  return Object.entries(e ?? {}).reduce((n, [o, t]) => {
    const r = o.startsWith("--") ? o : `--${Pd(o)}`;
    return n[r] = t, n;
  }, {});
}
function Or(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
const tu = ["button", "input", "select", "textarea", "[tabindex]", "[href]"].map((e) => `${e}:not([disabled])`).join(", ");
function Hd(e, n, o) {
  var t;
  const r = n.querySelectorAll(tu);
  if (!r.length)
    return;
  const a = [e, ...Array.from(e.querySelectorAll(tu))].findIndex(
    (l) => l === document.activeElement
  ) !== -1, i = Array.from(r).findIndex((l) => l === document.activeElement);
  if (o === "ArrowDown") {
    if (a && i === -1 || i === r.length - 1) {
      r[0].focus();
      return;
    }
    if (i !== -1 && i < r.length - 1) {
      r[i + 1].focus();
      return;
    }
  }
  if (o === "ArrowUp") {
    if (a && i === -1 || i === 0) {
      (t = r[r.length - 1]) == null || t.focus();
      return;
    }
    i > 0 && r[i - 1].focus();
  }
}
var Bg = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: Ig, n: Dg, classes: Mg } = ee("icon");
function Ng(e, n) {
  return h(), Pe(vt(e.isURL(e.name) ? "img" : "i"), {
    class: p(
      e.classes(
        e.n(),
        [e.namespace !== e.n(), e.namespace],
        `${e.namespace}--set`,
        [e.isURL(e.name), e.n("image"), `${e.namespace}-${e.nextName}`],
        [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass]
      )
    ),
    style: K({
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
const Yd = x({
  name: Ig,
  props: tn,
  setup(e) {
    const n = k(""), o = k(!1);
    ce(() => e.name, t, { immediate: !0 });
    function t(r, a) {
      return Bg(this, null, function* () {
        const { transition: i } = e;
        if (a == null || R(i) === 0) {
          n.value = r;
          return;
        }
        o.value = !0, yield qe(), setTimeout(() => {
          a != null && (n.value = r), o.value = !1;
        }, R(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: o,
      n: Dg,
      classes: Mg,
      isURL: Bh,
      toNumber: R,
      toSizeUnit: Oe
    };
  }
});
Yd.render = Ng;
var Kr = Yd;
oe(Kr);
le(Kr, tn);
const r5 = Kr;
var Je = Kr;
const jd = {
  hovering: Boolean,
  focusing: Boolean
}, { name: Ag, n: Vg, classes: Lg } = ee("hover-overlay");
function Rg(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), [e.hovering, e.n("--hovering")], [e.focusing && !e.inMobile(), e.n("--focusing")]))
    },
    null,
    2
    /* CLASS */
  );
}
const Wd = x({
  name: Ag,
  props: jd,
  setup: () => ({
    n: Vg,
    classes: Lg,
    inMobile: wr
  })
});
Wd.render = Rg;
var qr = Wd;
oe(qr);
le(qr, jd);
function Jn() {
  const e = k(!1);
  return {
    hovering: e,
    handleHovering: (o) => {
      e.value = o;
    }
  };
}
const a5 = qr;
var Ln = qr;
function Kd(e) {
  return e ? !!(e === "desktop" && wr() || e === "mobile" && !wr()) : !1;
}
function Fg(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((o, t) => {
    const [r, a] = t.split(":").map((i) => i.trim());
    return o[ls(r)] = a, o;
  }, {}) : {};
}
function Ug(e) {
  const { value: n } = e._hover, o = Fg(e);
  Object.keys(n).forEach((t) => {
    const r = ls(t);
    n[r] != null && o[r] && (e._hover.rawStyle[r] = o[r]);
  });
}
function cs(e, n) {
  Object.keys(n).forEach((o) => {
    const t = n[o];
    t != null && (e.style[o] = t);
  });
}
function Hg(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function qd(e) {
  (e == null ? void 0 : e._hover) != null && (Hg(e), cs(e, e._hover.rawStyle));
}
function Gd() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, Qn(e)) {
    e(this._hover.hovering);
    return;
  }
  cs(this, e);
}
function Xd() {
  if (this._hover.hovering = !1, Qn(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  qd(this);
}
function Zd(e, n) {
  var o, t;
  const { arg: r, value: a } = n;
  Kd(r) || (e._hover = {
    value: a,
    hovering: (t = (o = e._hover) == null ? void 0 : o.hovering) != null ? t : !1,
    rawStyle: {}
  }, Ug(e), e.addEventListener("mouseenter", Gd), e.addEventListener("mouseleave", Xd));
}
function Jd(e, n) {
  Kd(n.arg) || (qd(e), e.removeEventListener("mouseenter", Gd), e.removeEventListener("mouseleave", Xd));
}
function Yg(e, n) {
  e._hover && Jd(e, n);
}
function jg(e, n) {
  return !Qn(n.value) && e._hover.hovering;
}
function Wg(e, n) {
  Zd(e, n), jg(e, n) && cs(e, n.value);
}
const Qd = {
  mounted: Zd,
  unmounted: Jd,
  beforeUpdate: Yg,
  updated: Wg,
  install(e) {
    e.directive("hover", this);
  }
}, i5 = Qd;
var Tn = Qd;
const { name: Kg, n: qg, classes: Gg } = ee("action-sheet");
function Xg(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = We("ripple"), a = We("hover");
  return Ne((h(), S(
    "div",
    {
      class: p(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
      style: K({ color: e.color })
    },
    [
      e.icon ? (h(), Pe(o, {
        key: 0,
        "var-action-sheet-cover": "",
        class: p(e.n("action-icon")),
        namespace: e.namespace,
        name: e.icon,
        size: e.iconSize
      }, null, 8, ["class", "namespace", "name", "size"])) : X("v-if", !0),
      D(
        "div",
        {
          class: p(e.n("action-name"))
        },
        re(e.name),
        3
        /* TEXT, CLASS */
      ),
      G(t, {
        hovering: e.disabled ? !1 : e.hovering
      }, null, 8, ["hovering"])
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: e.disabled }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const _d = x({
  name: Kg,
  components: {
    VarHoverOverlay: Ln,
    VarIcon: Je
  },
  directives: { Ripple: rn, Hover: Tn },
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
    const { hovering: e, handleHovering: n } = Jn();
    return {
      hovering: e,
      n: qg,
      classes: Gg,
      handleHovering: n
    };
  }
});
_d.render = Xg;
var Zg = _d, Jg = Object.defineProperty, ru = Object.getOwnPropertySymbols, Qg = Object.prototype.hasOwnProperty, _g = Object.prototype.propertyIsEnumerable, au = (e, n, o) => n in e ? Jg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, xg = (e, n) => {
  for (var o in n || (n = {}))
    Qg.call(n, o) && au(e, o, n[o]);
  if (ru)
    for (var o of ru(n))
      _g.call(n, o) && au(e, o, n[o]);
  return e;
};
const xd = xg({
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
  onSelect: L(),
  "onUpdate:show": L()
}, Me(gt, [
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
var ds = {
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
}, ef = {
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
}, fs = {
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
}, nf = fs, of = {
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
}, eb = Object.defineProperty, iu = Object.getOwnPropertySymbols, nb = Object.prototype.hasOwnProperty, ob = Object.prototype.propertyIsEnumerable, lu = (e, n, o) => n in e ? eb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, su = (e, n) => {
  for (var o in n || (n = {}))
    nb.call(n, o) && lu(e, o, n[o]);
  if (iu)
    for (var o of iu(n))
      ob.call(n, o) && lu(e, o, n[o]);
  return e;
};
function ps() {
  const e = k({}), n = k({}), o = (i, l) => {
    l.lang = i, e.value[i] = l;
  }, t = (i) => {
    if (!e.value[i])
      return console.warn(`The ${i} does not exist. You can mount a language message using the add method`), {};
    n.value = e.value[i];
  };
  return {
    messages: e,
    currentMessage: n,
    add: o,
    use: t,
    merge: (i, l) => {
      if (!e.value[i]) {
        console.warn(`The ${i} does not exist. You can mount a language message using the add method`);
        return;
      }
      e.value[i] = su(su({}, e.value[i]), l), t(i);
    },
    t: (i) => {
      if (Cr(n.value, i))
        return n.value[i];
    }
  };
}
const { messages: tf, currentMessage: rf, add: vs, use: ms, merge: af, t: an } = ps();
vs("zh-CN", ds);
ms("zh-CN");
const l5 = {
  zhCN: ds,
  enUS: ef,
  zhTW: fs,
  zhHK: nf,
  faIR: of,
  messages: tf,
  currentMessage: rf,
  add: vs,
  use: ms,
  merge: af,
  t: an,
  useLocale: ps
};
var Ai = {
  zhCN: ds,
  enUS: ef,
  zhTW: fs,
  zhHK: nf,
  faIR: of,
  messages: tf,
  currentMessage: rf,
  add: vs,
  use: ms,
  merge: af,
  t: an,
  useLocale: ps
};
const Vi = Symbol("LOCALE_PROVIDER_KEY");
function tb(e) {
  kd(Vi, e);
}
function ao() {
  return Ed(Vi) ? bd(Vi) : { t: null };
}
const { name: rb, n: ab, classes: ib } = ee("action-sheet");
function lb(e, n) {
  const o = _("var-action-item"), t = _("var-popup");
  return h(), Pe(t, {
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
    "onUpdate:show": n[0] || (n[0] = (r) => e.show = r),
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onRouteChange: e.onRouteChange,
    onKeyEscape: e.onKeyEscape
  }, {
    default: fe(() => [
      D(
        "div",
        je({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          V(e.$slots, "title", {}, () => {
            var r;
            return [
              D(
                "div",
                {
                  class: p(e.n("title"))
                },
                re((r = e.title) != null ? r : (e.pt ? e.pt : e.t)("actionSheetTitle")),
                3
                /* TEXT, CLASS */
              )
            ];
          }),
          V(e.$slots, "actions", {}, () => [
            (h(!0), S(
              Ve,
              null,
              Ze(e.actions, (r) => (h(), Pe(o, {
                key: r.name,
                name: r.name,
                namespace: r.namespace,
                icon: r.icon,
                "icon-size": r.iconSize,
                "class-name": r.className,
                color: r.color,
                onClick: (a) => e.handleSelect(r)
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
const lf = x({
  name: rb,
  directives: { Ripple: rn },
  components: {
    VarPopup: Po,
    VarActionItem: Zg
  },
  inheritAttrs: !1,
  props: xd,
  setup(e) {
    const n = Zn(e, "show"), { t: o } = ao();
    function t(r) {
      if (r.disabled)
        return;
      const { closeOnClickAction: a, onSelect: i } = e;
      P(i, r), a && (n.value = !1);
    }
    return {
      show: n,
      pt: o,
      t: an,
      n: ab,
      classes: ib,
      handleSelect: t
    };
  }
});
lf.render = lb;
var Qt = lf, sb = Object.defineProperty, uu = Object.getOwnPropertySymbols, ub = Object.prototype.hasOwnProperty, cb = Object.prototype.propertyIsEnumerable, cu = (e, n, o) => n in e ? sb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, du = (e, n) => {
  for (var o in n || (n = {}))
    ub.call(n, o) && cu(e, o, n[o]);
  if (uu)
    for (var o of uu(n))
      cb.call(n, o) && cu(e, o, n[o]);
  return e;
};
let go, hs = {};
function db(e = {}) {
  return du(du({}, hs), e);
}
function Bo(e) {
  return to() ? new Promise((n) => {
    Bo.close();
    const o = Qe(db(e));
    o.teleport = "body", go = o;
    const { unmountInstance: t } = ht(Qt, o, {
      onSelect: (r) => {
        P(o.onSelect, r), n(r);
      },
      onClose: () => {
        P(o.onClose), n("close");
      },
      onClosed: () => {
        P(o.onClosed), t(), go === o && (go = null);
      },
      onRouteChange: () => {
        t(), go === o && (go = null);
      },
      "onUpdate:show": (r) => {
        o.show = r;
      }
    });
    o.show = !0;
  }) : Promise.resolve();
}
Bo.setDefaultOptions = function(e) {
  hs = e;
};
Bo.resetDefaultOptions = function() {
  hs = {};
};
Bo.close = function() {
  if (go != null) {
    const e = go;
    go = null, qe().then(() => {
      e.show = !1;
    });
  }
};
Bo.Component = Qt;
oe(Qt);
oe(Qt, Bo);
le(Bo, xd);
const s5 = Qt;
var Li = Bo;
const sf = {
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
}, { name: fb, n: pb, classes: vb } = ee("app-bar");
function mb(e, n) {
  return h(), S(
    Ve,
    null,
    [
      D(
        "div",
        je({
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
          D(
            "div",
            {
              class: p(e.n("toolbar"))
            },
            [
              D(
                "div",
                {
                  class: p(e.n("left"))
                },
                [
                  V(e.$slots, "left"),
                  e.titlePosition === "left" ? (h(), S(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: K({ paddingLeft: e.paddingLeft })
                    },
                    [
                      V(e.$slots, "default", {}, () => [
                        De(
                          re(e.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : X("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              e.titlePosition === "center" ? (h(), S(
                "div",
                {
                  key: 0,
                  class: p(e.n("title"))
                },
                [
                  V(e.$slots, "default", {}, () => [
                    De(
                      re(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )) : X("v-if", !0),
              D(
                "div",
                {
                  class: p(e.n("right"))
                },
                [
                  e.titlePosition === "right" ? (h(), S(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: K({ paddingRight: e.paddingRight })
                    },
                    [
                      V(e.$slots, "default", {}, () => [
                        De(
                          re(e.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : X("v-if", !0),
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
      e.fixed && e.placeholder ? (h(), S(
        "div",
        {
          key: 0,
          class: p(e.n("placeholder")),
          style: K({ height: e.placeholderHeight })
        },
        null,
        6
        /* CLASS, STYLE */
      )) : X("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const uf = x({
  name: fb,
  props: sf,
  setup(e, { slots: n }) {
    const o = k(null), t = k(), r = k(), a = k(), i = I(() => {
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
    ro(s), vn(() => {
      l(), s();
    }), Kt(l);
    function l() {
      t.value = n.left ? 0 : void 0, r.value = n.right ? 0 : void 0;
    }
    function s() {
      if (!e.fixed || !e.placeholder)
        return;
      const { height: u } = sn(o.value);
      a.value = Oe(u);
    }
    return {
      rootStyles: i,
      paddingLeft: t,
      paddingRight: r,
      n: pb,
      classes: vb,
      formatElevation: pn,
      appBar: o,
      placeholderHeight: a
    };
  }
});
uf.render = mb;
var Gr = uf;
oe(Gr);
le(Gr, sf);
const u5 = Gr;
var Ri = Gr;
const fu = (e) => gn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, pu = (e) => gn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, hb = (e) => {
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
      this.has(o) && rt(this.cache, o);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Fi = (e) => e, vu = (e) => e ** 3, cf = (e) => e < 0.5 ? vu(e * 2) / 2 : 1 - vu((1 - e) * 2) / 2, Fo = (e, n, o = "") => {
  if (e === void 0 && (e = ""), e.length >= n)
    return e;
  const t = n - e.length, r = Math.floor(t / o.length);
  return o.repeat(r) + o.slice(0, t % o.length) + e;
};
var gb = Object.defineProperty, mu = Object.getOwnPropertySymbols, bb = Object.prototype.hasOwnProperty, yb = Object.prototype.propertyIsEnumerable, hu = (e, n, o) => n in e ? gb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, kb = (e, n) => {
  for (var o in n || (n = {}))
    bb.call(n, o) && hu(e, o, n[o]);
  if (mu)
    for (var o of mu(n))
      yb.call(n, o) && hu(e, o, n[o]);
  return e;
}, Xr = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const $b = "background-image", wb = "lazy-loading", Cb = "lazy-error", gu = "lazy-attempt", Sb = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Ui = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", at = [], Tr = [], df = hb(100), dn = {
  loading: Ui,
  error: Ui,
  attempt: 3,
  throttleWait: 300,
  events: Sb
};
let gs = is(_t, dn.throttleWait);
function Zr(e, n) {
  e._lazy.arg === $b ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function Pb(e) {
  e._lazy.loading && Zr(e, e._lazy.loading), _t();
}
function zb(e) {
  e._lazy.error && Zr(e, e._lazy.error), e._lazy.state = "error", ys(e), _t();
}
function ff(e, n) {
  Zr(e, n), e._lazy.state = "success", ys(e), _t();
}
function Ob(e) {
  var n;
  Tr.includes(e) || (Tr.push(e), (n = dn.events) == null || n.forEach((o) => {
    e.addEventListener(o, gs, { passive: !0 });
  }));
}
function Tb() {
  Tr.forEach((e) => {
    var n;
    (n = dn.events) == null || n.forEach((o) => {
      e.removeEventListener(o, gs);
    });
  }), Tr.length = 0;
}
function Eb(e, n) {
  var o, t;
  const r = {
    loading: (o = e.getAttribute(wb)) != null ? o : dn.loading,
    error: (t = e.getAttribute(Cb)) != null ? t : dn.error,
    attempt: e.getAttribute(gu) ? Number(e.getAttribute(gu)) : dn.attempt
  };
  e._lazy = kb({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), Zr(e, Ui), P(dn.filter, e._lazy);
}
function Bb(e, n) {
  const o = new Image();
  o.src = n, e._lazy.preloadImage = o, o.addEventListener("load", () => {
    e._lazy.attemptLock = !1, df.add(n), ff(e, n);
  }), o.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? zb(e) : pf(e);
  });
}
function pf(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (df.has(n)) {
    ff(e, n), e._lazy.attemptLock = !1;
    return;
  }
  Pb(e), Bb(e, n);
}
function bs(e) {
  return Xr(this, null, function* () {
    yield $n(), Vh(e) && pf(e);
  });
}
function _t() {
  at.forEach((e) => bs(e));
}
function Ib(e) {
  return Xr(this, null, function* () {
    !at.includes(e) && at.push(e), wg(e).forEach(Ob), yield bs(e);
  });
}
function ys(e) {
  rt(at, e), at.length === 0 && Tb();
}
function Db(e, n) {
  const { src: o, arg: t } = e._lazy;
  return o !== n.value || t !== n.arg;
}
function vf(e, n) {
  return Xr(this, null, function* () {
    Eb(e, n), yield Ib(e);
  });
}
function Mb(e, n) {
  return Xr(this, null, function* () {
    if (!Db(e, n)) {
      at.includes(e) && (yield bs(e));
      return;
    }
    yield vf(e, n);
  });
}
function Nb(e = {}) {
  const { events: n, loading: o, error: t, attempt: r, throttleWait: a, filter: i } = e;
  dn.events = n ?? dn.events, dn.loading = o ?? dn.loading, dn.error = t ?? dn.error, dn.attempt = r ?? dn.attempt, dn.throttleWait = a ?? dn.throttleWait, dn.filter = i;
}
const mf = {
  mounted: vf,
  unmounted: ys,
  updated: Mb,
  install(e, n) {
    Nb(n), gs = is(_t, dn.throttleWait), e.directive("lazy", this);
  }
}, c5 = mf;
var Dt = mf;
const hf = {
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
  onClick: L(),
  onLoad: L(),
  onError: L()
}, Ab = (e) => ["mini", "small", "normal", "large"].includes(e), { name: Vb, n: Lb, classes: Rb } = ee("avatar"), Fb = ["src", "alt", "lazy-loading", "lazy-error"], Ub = ["src", "alt"];
function Hb(e, n) {
  const o = We("lazy");
  return h(), S(
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
      style: K({
        width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      e.src ? (h(), S(
        Ve,
        { key: 0 },
        [
          e.lazy ? Ne((h(), S("img", {
            key: 0,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: K({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...t) => e.handleLoad && e.handleLoad(...t))
          }, null, 46, Fb)), [
            [o, e.src]
          ]) : (h(), S("img", {
            key: 1,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: K({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...t) => e.handleLoad && e.handleLoad(...t)),
            onError: n[2] || (n[2] = (...t) => e.handleError && e.handleError(...t))
          }, null, 46, Ub))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (h(), S(
        "div",
        {
          key: 1,
          ref: "textElement",
          class: p(e.n("text")),
          style: K({ transform: `scale(${e.scale})` })
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
const gf = x({
  name: Vb,
  directives: { Lazy: Dt },
  props: hf,
  setup(e) {
    const n = k(null), o = k(null), t = k(1);
    vn(r), Kt(r);
    function r() {
      if (!n.value || !o.value) {
        t.value = 1;
        return;
      }
      const s = n.value.offsetWidth, u = o.value.offsetWidth;
      s > u ? t.value = 1 : t.value = s / u;
    }
    function a(s) {
      const u = s.currentTarget, { lazy: c, onLoad: d, onError: f } = e;
      c ? (u._lazy.state === "success" && P(d, s), u._lazy.state === "error" && P(f, s)) : P(d, s);
    }
    function i(s) {
      P(e.onError, s);
    }
    function l(s) {
      P(e.onClick, s);
    }
    return {
      avatarElement: n,
      textElement: o,
      scale: t,
      n: Lb,
      classes: Rb,
      isInternalSize: Ab,
      toSizeUnit: Oe,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
gf.render = Hb;
var Jr = gf;
oe(Jr);
le(Jr, hf);
const d5 = Jr;
var Hi = Jr;
const bf = {
  offset: [Number, String],
  vertical: Boolean
}, { name: Yb, n: jb, classes: Wb } = ee("avatar-group");
function Kb(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: K(e.rootStyles)
    },
    [
      V(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const yf = x({
  name: Yb,
  props: bf,
  setup(e) {
    return {
      rootStyles: I(() => e.offset == null ? {} : {
        "--avatar-group-offset": Oe(e.offset)
      }),
      n: jb,
      classes: Wb
    };
  }
});
yf.render = Kb;
var Qr = yf;
oe(Qr);
le(Qr, bf);
const f5 = Qr;
var Yi = Qr;
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
}, { name: qb, n: Gb, classes: Xb } = ee("loading"), Zb = (e) => (Wo(""), e = e(), Ko(), e), Jb = /* @__PURE__ */ Zb(() => /* @__PURE__ */ D(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ D("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
)), Qb = [
  Jb
];
function _b(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      e.$slots.default ? (h(), S(
        "div",
        {
          key: 0,
          class: p(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
        },
        [
          V(e.$slots, "default"),
          e.loading ? (h(), S(
            "div",
            {
              key: 0,
              class: p(e.n("content-mask"))
            },
            null,
            2
            /* CLASS */
          )) : X("v-if", !0)
        ],
        2
        /* CLASS */
      )) : X("v-if", !0),
      e.isShow ? (h(), S(
        "div",
        {
          key: 1,
          class: p(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
        },
        [
          e.type === "circle" ? (h(), S(
            "div",
            {
              key: 0,
              class: p(e.n("circle"))
            },
            [
              D(
                "span",
                {
                  class: p(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
                  style: K({
                    width: e.multiplySizeUnit(e.radius, 2),
                    height: e.multiplySizeUnit(e.radius, 2),
                    color: e.color
                  })
                },
                [...Qb],
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )) : X("v-if", !0),
          (h(!0), S(
            Ve,
            null,
            Ze(e.loadingTypeDict, (o, t) => (h(), S(
              Ve,
              { key: t },
              [
                e.type === t ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: p(e.classes(e.n(t), e.n(`${t}--${e.size}`)))
                  },
                  [
                    (h(!0), S(
                      Ve,
                      null,
                      Ze(o, (r) => (h(), S(
                        "div",
                        {
                          key: r + t,
                          style: K({ backgroundColor: e.color }),
                          class: p(e.classes(e.n(`${t}-item`), e.n(`${t}-item--${e.size}`)))
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
                )) : X("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          e.$slots.description || e.description ? (h(), S(
            "div",
            {
              key: 1,
              class: p(e.classes(e.n("description"), e.n(`description--${e.size}`))),
              style: K({ color: e.color })
            },
            [
              V(e.$slots, "description", {}, () => [
                De(
                  re(e.description),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : X("v-if", !0)
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const kf = x({
  name: qb,
  props: lo,
  setup(e, { slots: n }) {
    const o = I(() => P(n.default) ? e.loading : !0);
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: o,
      n: Gb,
      classes: Xb,
      multiplySizeUnit: Cn
    };
  }
});
kf.render = _b;
var _r = kf;
oe(_r);
le(_r, lo);
const p5 = _r;
var it = _r, xb = Object.defineProperty, e0 = Object.defineProperties, n0 = Object.getOwnPropertyDescriptors, bu = Object.getOwnPropertySymbols, o0 = Object.prototype.hasOwnProperty, t0 = Object.prototype.propertyIsEnumerable, yu = (e, n, o) => n in e ? xb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ku = (e, n) => {
  for (var o in n || (n = {}))
    o0.call(n, o) && yu(e, o, n[o]);
  if (bu)
    for (var o of bu(n))
      t0.call(n, o) && yu(e, o, n[o]);
  return e;
}, $u = (e, n) => e0(e, n0(n));
const $f = {
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
  loadingType: Me(lo, "type"),
  loadingSize: $u(ku({}, Me(lo, "size")), {
    default: void 0
  }),
  loadingColor: $u(ku({}, Me(lo, "color")), {
    default: "currentColor"
  }),
  onClick: L(),
  onTouchstart: L()
}, wf = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function r0() {
  const { bindChildren: e, childProviders: n, length: o } = yn(wf);
  return {
    length: o,
    buttons: n,
    bindButtons: e
  };
}
function a0() {
  const { bindParent: e, parentProvider: n, index: o } = bn(wf);
  return {
    index: o,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: i0, n: l0, classes: s0 } = ee("button"), u0 = ["tabindex", "type", "disabled"];
function c0(e, n) {
  const o = _("var-loading"), t = _("var-hover-overlay"), r = We("ripple"), a = We("hover");
  return Ne((h(), S("button", {
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
    style: K({
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
    e.loading || e.pending ? (h(), Pe(o, {
      key: 0,
      class: p(e.n("loading")),
      "var-button-cover": "",
      color: e.loadingColor,
      type: e.loadingType,
      size: e.loadingSize || e.states.size,
      radius: e.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : X("v-if", !0),
    D(
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
    G(t, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, u0)), [
    [r, { disabled: e.disabled || !e.ripple || e.loading || e.pending }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const Cf = x({
  name: i0,
  components: {
    VarLoading: it,
    VarHoverOverlay: Ln
  },
  directives: { Ripple: rn, Hover: Tn },
  props: $f,
  setup(e) {
    const n = k(!1), o = k(!1), { buttonGroup: t } = a0(), { hovering: r, handleHovering: a } = Jn(), i = I(() => {
      var d, f, v, b, m, y;
      if (!t)
        return {
          elevation: pn(e.elevation, 2),
          type: (d = e.type) != null ? d : "default",
          size: (f = e.size) != null ? f : "normal",
          color: e.color,
          text: e.text,
          textColor: e.textColor,
          outline: e.outline,
          iconContainer: e.iconContainer
        };
      const { type: $, size: w, color: g, textColor: C, mode: z } = t;
      return {
        elevation: "",
        type: (v = e.type) != null ? v : $.value,
        size: (b = e.size) != null ? b : w.value,
        color: (m = e.color) != null ? m : g.value,
        textColor: (y = e.textColor) != null ? y : C.value,
        text: z.value === "text" || z.value === "outline",
        outline: z.value === "outline",
        iconContainer: z.value === "icon-container"
      };
    });
    function l(d) {
      e.autoLoading && (o.value = !0, Promise.all(Vo(d)).then(() => {
        o.value = !1;
      }).catch(() => {
        o.value = !1;
      }));
    }
    function s(d) {
      const { loading: f, disabled: v, onClick: b } = e;
      !b || f || v || o.value || l(P(b, d));
    }
    function u(d) {
      const { loading: f, disabled: v, onTouchstart: b } = e;
      !b || f || v || o.value || l(P(b, d));
    }
    function c() {
      e.focusable && (n.value = !0);
    }
    return {
      pending: o,
      states: i,
      hovering: r,
      isFocusing: n,
      n: l0,
      classes: s0,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      handleFocus: c
    };
  }
});
Cf.render = c0;
var xr = Cf;
oe(xr);
le(xr, $f);
const v5 = xr;
var Pn = xr;
const Sf = {
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
  onClick: L()
}, { name: d0, n: f0, classes: p0 } = ee("back-top");
function v0(e, n) {
  const o = _("var-icon"), t = _("var-button");
  return h(), Pe(oo, {
    to: "body",
    disabled: e.disabled
  }, [
    D(
      "div",
      je({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = An((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
      }),
      [
        V(e.$slots, "default", {}, () => [
          G(t, {
            elevation: e.elevation,
            type: "primary",
            "var-back-top-cover": ""
          }, {
            default: fe(() => [
              G(o, { name: "chevron-up" })
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
const Pf = x({
  name: d0,
  components: {
    VarButton: Pn,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: Sf,
  setup(e) {
    const n = k(!1), o = k(null), t = k(!0);
    let r;
    const a = is(() => {
      i();
    }, 200);
    Yo(() => {
      s(), u(), i(), t.value = !1;
    }), Eo(u), Gt(c);
    function i() {
      n.value = Ro(r) >= nn(e.visibilityHeight);
    }
    function l(d) {
      P(e.onClick, d);
      const f = as(r);
      It(r, {
        left: f,
        duration: e.duration,
        animation: cf
      });
    }
    function s() {
      r = e.target ? Fd(e.target, "BackTop") : zo(o.value);
    }
    function u() {
      r.addEventListener("scroll", a);
    }
    function c() {
      r && r.removeEventListener("scroll", a);
    }
    return {
      disabled: t,
      show: n,
      backTopEl: o,
      toSizeUnit: Oe,
      n: f0,
      classes: p0,
      handleClick: l
    };
  }
});
Pf.render = v0;
var ea = Pf;
oe(ea);
le(ea, Sf);
const m5 = ea;
var ji = ea;
const zf = {
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
  icon: Me(tn, "name"),
  namespace: Me(tn, "namespace"),
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
var m0 = Object.defineProperty, wu = Object.getOwnPropertySymbols, h0 = Object.prototype.hasOwnProperty, g0 = Object.prototype.propertyIsEnumerable, Cu = (e, n, o) => n in e ? m0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, b0 = (e, n) => {
  for (var o in n || (n = {}))
    h0.call(n, o) && Cu(e, o, n[o]);
  if (wu)
    for (var o of wu(n))
      g0.call(n, o) && Cu(e, o, n[o]);
  return e;
};
const { name: y0, n: k0, classes: $0 } = ee("badge"), w0 = { key: 0 };
function C0(e, n) {
  const o = _("var-icon");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      V(e.$slots, "default"),
      G(_e, {
        name: e.n("$-badge-fade"),
        persisted: ""
      }, {
        default: fe(() => [
          Ne(D(
            "span",
            je({
              class: e.classes(
                e.n("content"),
                e.n(`--${e.type}`),
                [e.$slots.default, e.n(`--${e.position}`), e.n("--offset")],
                [e.dot, e.n("--dot")],
                [e.icon, e.n("--icon")]
              ),
              style: b0({ background: e.color }, e.offsetStyle)
            }, e.$attrs),
            [
              e.icon ? (h(), Pe(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-badge-cover": "",
                name: e.icon,
                namespace: e.namespace
              }, null, 8, ["class", "name", "namespace"])) : X("v-if", !0),
              V(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (h(), S(
                  "span",
                  w0,
                  re(e.value),
                  1
                  /* TEXT */
                )) : X("v-if", !0)
              ])
            ],
            16
            /* FULL_PROPS */
          ), [
            [Xn, !e.hidden]
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
const Of = x({
  name: y0,
  components: { VarIcon: Je },
  inheritAttrs: !1,
  props: zf,
  setup(e) {
    const n = I(() => {
      const { value: t, maxValue: r } = e;
      return t != null && r != null && R(t) > R(r) ? `${r}+` : t;
    }), o = I(() => ({
      "--badge-offset-y": Oe(e.offsetY),
      "--badge-offset-x": Oe(e.offsetX)
    }));
    return {
      value: n,
      offsetStyle: o,
      n: k0,
      classes: $0
    };
  }
});
Of.render = C0;
var na = Of;
oe(na);
le(na, zf);
const h5 = na;
var Er = na;
const Tf = {
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
  onChange: L(),
  onBeforeChange: L(),
  onFabClick: L(),
  "onUpdate:active": L()
}, Ef = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function S0() {
  const { childProviders: e, length: n, bindChildren: o } = yn(
    Ef
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: o
  };
}
var P0 = Object.defineProperty, Su = Object.getOwnPropertySymbols, z0 = Object.prototype.hasOwnProperty, O0 = Object.prototype.propertyIsEnumerable, Pu = (e, n, o) => n in e ? P0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, zu = (e, n) => {
  for (var o in n || (n = {}))
    z0.call(n, o) && Pu(e, o, n[o]);
  if (Su)
    for (var o of Su(n))
      O0.call(n, o) && Pu(e, o, n[o]);
  return e;
};
const { name: T0, n: E0, classes: B0 } = ee("bottom-navigation"), { n: oa } = ee("bottom-navigation-item"), Ou = oa("--right-half-space"), Tu = oa("--left-half-space"), Eu = oa("--right-space"), I0 = {
  type: "primary"
};
function D0(e, n) {
  const o = _("var-button");
  return h(), S(
    Ve,
    null,
    [
      D(
        "div",
        je({
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
          e.$slots.fab ? (h(), Pe(o, je({
            key: 0,
            class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
            "var-bottom-navigation__fab": "",
            onClick: e.handleFabClick
          }, e.fabProps), {
            default: fe(() => [
              V(e.$slots, "fab")
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class", "onClick"])) : X("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      ),
      e.fixed && e.placeholder ? (h(), S(
        "div",
        {
          key: 0,
          class: p(e.n("placeholder")),
          style: K({ height: e.placeholderHeight })
        },
        null,
        6
        /* CLASS, STYLE */
      )) : X("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const Bf = x({
  name: T0,
  components: { VarButton: Pn },
  props: Tf,
  setup(e, { slots: n }) {
    const o = k(null), t = I(() => e.active), r = I(() => e.activeColor), a = I(() => e.inactiveColor), i = I(() => e.variant), l = k(), s = k({}), { length: u, bottomNavigationItems: c, bindBottomNavigationItem: d } = S0();
    d({
      active: t,
      activeColor: r,
      inactiveColor: a,
      variant: i,
      onToggle: $
    }), ce(() => u.value, v), ce(
      () => e.fabProps,
      (B) => {
        s.value = zu(zu({}, I0), B);
      },
      { immediate: !0, deep: !0 }
    ), ro(E), vn(() => {
      E(), n.fab && z(u.value);
    }), Kt(() => {
      C(), n.fab && z(u.value);
    });
    function v() {
      u.value === 0 || b() || m() || y();
    }
    function b() {
      return c.find(({ name: B }) => t.value === B.value);
    }
    function m() {
      return c.find(({ index: B }) => t.value === B.value);
    }
    function y() {
      On(t.value) && (t.value < 0 ? P(e["onUpdate:active"], 0) : t.value > u.value - 1 && P(e["onUpdate:active"], u.value - 1));
    }
    function $(B) {
      t.value !== B && (e.onBeforeChange ? w(B) : g(B));
    }
    function w(B) {
      const N = Vo(P(e.onBeforeChange, B));
      Promise.all(N).then((H) => {
        H.every(Boolean) && g(B);
      });
    }
    function g(B) {
      P(e["onUpdate:active"], B), P(e.onChange, B);
    }
    function C() {
      A().forEach((N) => {
        N.classList.remove(Ou, Tu, Eu);
      });
    }
    function z(B) {
      const N = A(), H = N.length, Y = B % 2 === 0;
      N.forEach((M, q) => {
        O(Y, M, q, H);
      });
    }
    function O(B, N, H, Y) {
      const M = H === Y - 1;
      if (!B && M) {
        N.classList.add(Eu);
        return;
      }
      const q = H === Y / 2 - 1, W = H === Y / 2;
      q ? N.classList.add(Ou) : W && N.classList.add(Tu);
    }
    function A() {
      return Array.from(o.value.querySelectorAll(`.${oa()}`));
    }
    function T() {
      P(e.onFabClick);
    }
    function E() {
      if (!e.fixed || !e.placeholder)
        return;
      const { height: B } = sn(o.value);
      l.value = Oe(B);
    }
    return {
      length: u,
      bottomNavigationDom: o,
      fabProps: s,
      placeholderHeight: l,
      n: E0,
      classes: B0,
      handleFabClick: T
    };
  }
});
Bf.render = D0;
var ta = Bf;
oe(ta);
le(ta, Tf);
const g5 = ta;
var Wi = ta;
const If = {
  name: String,
  label: String,
  icon: Me(tn, "name"),
  namespace: Me(tn, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: L()
};
function M0() {
  const { parentProvider: e, index: n, bindParent: o } = bn(
    Ef
  );
  return o || Vn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: o
  };
}
const { name: N0, n: A0, classes: V0 } = ee("bottom-navigation-item"), L0 = {
  type: "danger",
  dot: !0
};
function R0(e, n) {
  const o = _("var-icon"), t = _("var-badge"), r = We("ripple");
  return Ne((h(), S(
    "button",
    {
      class: p(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")])),
      style: K({
        color: e.isActive ? e.activeColor : e.inactiveColor
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      D(
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
          e.badge ? (h(), Pe(t, je({ key: 0 }, e.badgeProps, {
            class: e.n("badge"),
            "var-bottom-navigation-item-cover": ""
          }), {
            default: fe(() => [
              V(e.$slots, "icon", { active: e.isActive }, () => [
                e.icon ? (h(), Pe(o, {
                  key: 0,
                  name: e.icon,
                  namespace: e.namespace,
                  class: p(e.n("icon")),
                  "var-bottom-navigation-item-cover": ""
                }, null, 8, ["name", "namespace", "class"])) : X("v-if", !0)
              ])
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class"])) : V(e.$slots, "icon", {
            key: 1,
            active: e.isActive
          }, () => [
            e.icon ? (h(), Pe(o, {
              key: 0,
              name: e.icon,
              namespace: e.namespace,
              class: p(e.n("icon")),
              "var-bottom-navigation-item-cover": ""
            }, null, 8, ["name", "namespace", "class"])) : X("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      D(
        "span",
        {
          class: p(e.n("label"))
        },
        [
          V(e.$slots, "default", {}, () => [
            De(
              re(e.label),
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
    [r]
  ]);
}
const Df = x({
  name: N0,
  components: {
    VarBadge: Er,
    VarIcon: Je
  },
  directives: { Ripple: rn },
  props: If,
  setup(e) {
    const n = I(() => e.name), o = I(() => [n.value, r.value].includes(l.value)), t = I(() => e.badge === !0 ? L0 : e.badge), { index: r, bottomNavigation: a, bindBottomNavigation: i } = M0(), { active: l, activeColor: s, inactiveColor: u, variant: c } = a;
    i({
      name: n,
      index: r
    });
    function f() {
      var v;
      const b = (v = n.value) != null ? v : r.value;
      P(e.onClick, b), P(a.onToggle, b);
    }
    return {
      activeColor: s,
      inactiveColor: u,
      badgeProps: t,
      isActive: o,
      variant: c,
      n: A0,
      classes: V0,
      handleClick: f
    };
  }
});
Df.render = R0;
var ra = Df;
oe(ra);
le(ra, If);
const b5 = ra;
var Ki = ra;
const Mf = {
  separator: String,
  onClick: L()
}, Nf = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function F0() {
  const { childProviders: e, bindChildren: n, length: o } = yn(
    Nf
  );
  return {
    length: o,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function U0() {
  const { parentProvider: e, bindParent: n, index: o } = bn(
    Nf
  );
  return n || Vn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: o,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: H0, n: Y0, classes: j0 } = ee("breadcrumb");
function W0(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      D(
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
      e.isLast ? X("v-if", !0) : V(e.$slots, "separator", { key: 0 }, () => {
        var o;
        return [
          D(
            "div",
            {
              class: p(e.n("separator")),
              "aria-hidden": "true"
            },
            re((o = e.separator) != null ? o : e.parentSeparator),
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
const Af = x({
  name: H0,
  props: Mf,
  setup(e) {
    const { index: n, breadcrumb: o, bindBreadcrumb: t } = U0(), r = I(() => n.value === o.length.value - 1), a = I(() => o.separator.value);
    t(null);
    function i(l) {
      r.value || P(e.onClick, l);
    }
    return {
      n: Y0,
      classes: j0,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Af.render = W0;
var aa = Af;
oe(aa);
le(aa, Mf);
const y5 = aa;
var qi = aa;
const Vf = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: K0, n: q0 } = ee("breadcrumbs");
function G0(e, n) {
  return h(), S(
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
const Lf = x({
  name: K0,
  props: Vf,
  setup(e) {
    const n = I(() => e.separator), { bindBreadcrumbList: o, length: t } = F0();
    return o({
      length: t,
      separator: n
    }), { n: q0 };
  }
});
Lf.render = G0;
var ia = Lf;
oe(ia);
le(ia, Vf);
const k5 = ia;
var Gi = ia;
const Rf = {
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
}, { name: X0, n: Z0, classes: J0 } = ee("button-group");
function Q0(e, n) {
  return h(), S(
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
const Ff = x({
  name: X0,
  props: Rf,
  setup(e) {
    const { bindButtons: n } = r0(), o = {
      elevation: I(() => e.elevation),
      type: I(() => e.type),
      size: I(() => e.size),
      color: I(() => e.color),
      textColor: I(() => e.textColor),
      mode: I(() => e.mode)
    };
    return n(o), {
      n: Z0,
      classes: J0,
      formatElevation: pn
    };
  }
});
Ff.render = Q0;
var la = Ff;
oe(la);
le(la, Rf);
const $5 = la;
var Xi = la;
const Uf = {
  src: String,
  fit: {
    type: String,
    default: "cover"
  },
  imageHeight: [String, Number],
  imageWidth: [String, Number],
  outline: Boolean,
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
  onClick: L(),
  "onUpdate:floating": L()
};
var Bu = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: _0, n: x0, classes: ey } = ee("card"), ny = 500, oy = ["src", "alt"];
function ty(e, n) {
  const o = _("var-icon"), t = _("var-button"), r = We("ripple");
  return Ne((h(), S(
    "div",
    {
      ref: "card",
      class: p(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: K({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      D(
        "div",
        {
          ref: "cardFloater",
          class: p(e.n("floater")),
          style: K({
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
            e.src ? (h(), S("img", {
              key: 0,
              class: p(e.n("image")),
              style: K({
                objectFit: e.fit,
                height: e.toSizeUnit(e.imageHeight),
                width: e.toSizeUnit(e.imageWidth)
              }),
              src: e.src,
              alt: e.alt
            }, null, 14, oy)) : X("v-if", !0)
          ]),
          D(
            "div",
            {
              class: p(e.n("container"))
            },
            [
              V(e.$slots, "title", {
                slotClass: e.n("title")
              }, () => [
                e.title ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("title"))
                  },
                  re(e.title),
                  3
                  /* TEXT, CLASS */
                )) : X("v-if", !0)
              ]),
              V(e.$slots, "subtitle", {
                slotClass: e.n("subtitle")
              }, () => [
                e.subtitle ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("subtitle"))
                  },
                  re(e.subtitle),
                  3
                  /* TEXT, CLASS */
                )) : X("v-if", !0)
              ]),
              e.$slots.default ? (h(), S(
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
              )) : X("v-if", !0),
              V(e.$slots, "description", {
                slotClass: e.n("description")
              }, () => [
                e.description ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("description"))
                  },
                  re(e.description),
                  3
                  /* TEXT, CLASS */
                )) : X("v-if", !0)
              ]),
              e.$slots.extra ? (h(), S(
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
              )) : X("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (h(), S(
                "div",
                {
                  key: 2,
                  class: p(e.n("floating-content")),
                  style: K({
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
              )) : X("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.showFloatingButtons ? (h(), S(
            "div",
            {
              key: 0,
              class: p(e.classes(e.n("floating-buttons"), e.n("$--box"))),
              style: K({
                zIndex: e.zIndex,
                opacity: e.opacity,
                transition: `opacity ${e.floatingDuration * 2}ms`
              })
            },
            [
              V(e.$slots, "close-button", {}, () => [
                G(t, {
                  "var-card-cover": "",
                  class: p(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
                  onClick: An(e.close, ["stop"])
                }, {
                  default: fe(() => [
                    G(o, {
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
          )) : X("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      ),
      D(
        "div",
        {
          class: p(e.n("holder")),
          style: K({
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
    [r, { disabled: !e.ripple || e.floater }]
  ]);
}
const Hf = x({
  name: _0,
  directives: { Ripple: rn },
  components: {
    VarIcon: Je,
    VarButton: Pn
  },
  props: Uf,
  setup(e) {
    const n = k(null), o = k(null), t = k("auto"), r = k("auto"), a = k("100%"), i = k("100%"), l = k("auto"), s = k("auto"), u = k(void 0), c = k("hidden"), d = k("0px"), f = k("0"), v = I(() => e.layout === "row"), b = k(!1), m = k(!1), { zIndex: y } = Jt(() => e.floating, 1);
    let $ = "auto", w = "auto", g = null;
    const C = k(null);
    Zt(
      () => e.floating,
      () => !v.value
    ), ce(
      () => e.floating,
      (E) => {
        v.value || qe(() => {
          E ? z() : O();
        });
      },
      { immediate: !0 }
    );
    function z() {
      return Bu(this, null, function* () {
        clearTimeout(C.value), clearTimeout(g), C.value = null, C.value = setTimeout(
          () => Bu(this, null, function* () {
            const { width: E, height: B, left: N, top: H } = sn(n.value);
            t.value = Oe(E), r.value = Oe(B), a.value = t.value, i.value = r.value, l.value = Oe(H), s.value = Oe(N), u.value = "fixed", $ = l.value, w = s.value, b.value = !0, yield $n(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", d.value = "auto", f.value = "1", c.value = "auto", m.value = !0;
          }),
          e.ripple ? ny : 0
        );
      });
    }
    function O() {
      clearTimeout(g), clearTimeout(C.value), C.value = null, a.value = t.value, i.value = r.value, l.value = $, s.value = w, d.value = "0px", f.value = "0", b.value = !1, g = setTimeout(() => {
        t.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", $ = "auto", w = "auto", c.value = "hidden", u.value = void 0, m.value = !1;
      }, e.floatingDuration);
    }
    function A() {
      P(e["onUpdate:floating"], !1);
    }
    function T(E) {
      P(e.onClick, E);
    }
    return {
      card: n,
      cardFloater: o,
      holderWidth: t,
      holderHeight: r,
      floater: C,
      floaterWidth: a,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: c,
      contentHeight: d,
      opacity: f,
      zIndex: y,
      isRow: v,
      showFloatingButtons: b,
      floated: m,
      n: x0,
      classes: ey,
      toSizeUnit: Oe,
      close: A,
      formatElevation: pn,
      handleClick: T
    };
  }
});
Hf.render = ty;
var sa = Hf;
oe(sa);
le(sa, Uf);
const w5 = sa;
var Zi = sa;
const Yf = {
  title: String,
  icon: Me(tn, "name"),
  namespace: Me(tn, "namespace"),
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: L()
}, { name: ry, n: ay, classes: iy } = ee("cell");
function ly(e, n) {
  const o = _("var-icon"), t = We("ripple");
  return Ne((h(), S(
    "div",
    {
      class: p(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: K(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      V(e.$slots, "icon", {}, () => [
        e.icon ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("icon"), e.iconClass))
          },
          [
            G(o, {
              name: e.icon,
              namespace: e.namespace
            }, null, 8, ["name", "namespace"])
          ],
          2
          /* CLASS */
        )) : X("v-if", !0)
      ]),
      D(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          V(e.$slots, "default", {}, () => [
            e.title ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("title"), e.titleClass))
              },
              re(e.title),
              3
              /* TEXT, CLASS */
            )) : X("v-if", !0)
          ]),
          V(e.$slots, "description", {}, () => [
            e.description ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("description"), e.descriptionClass))
              },
              re(e.description),
              3
              /* TEXT, CLASS */
            )) : X("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      e.$slots.extra ? (h(), S(
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
      )) : X("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: !e.ripple }]
  ]);
}
const jf = x({
  name: ry,
  components: { VarIcon: Je },
  directives: { Ripple: rn },
  props: Yf,
  setup(e) {
    const n = I(() => e.borderOffset == null ? {} : {
      "--cell-border-left": Oe(e.borderOffset),
      "--cell-border-right": Oe(e.borderOffset)
    });
    function o(t) {
      P(e.onClick, t);
    }
    return {
      borderOffsetStyles: n,
      n: ay,
      classes: iy,
      toSizeUnit: Oe,
      handleClick: o
    };
  }
});
jf.render = ly;
var ua = jf;
oe(ua);
le(ua, Yf);
const C5 = ua;
var Ji = ua;
const Wf = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: sy, n: uy } = ee("form-details"), cy = { key: 0 }, dy = { key: 0 };
function fy(e, n) {
  return h(), Pe(_e, {
    name: e.n()
  }, {
    default: fe(() => [
      e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (h(), S(
        "div",
        {
          key: 0,
          class: p(e.n())
        },
        [
          D(
            "div",
            {
              class: p(e.n("error-message"))
            },
            [
              G(_e, {
                name: e.n("message")
              }, {
                default: fe(() => [
                  e.errorMessage ? (h(), S(
                    "div",
                    cy,
                    re(e.errorMessage),
                    1
                    /* TEXT */
                  )) : X("v-if", !0)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          ),
          D(
            "div",
            {
              class: p(e.n("extra-message"))
            },
            [
              G(_e, {
                name: e.n("message")
              }, {
                default: fe(() => [
                  V(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (h(), S(
                      "div",
                      dy,
                      re(e.extraMessage),
                      1
                      /* TEXT */
                    )) : X("v-if", !0)
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
      )) : X("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const Kf = x({
  name: sy,
  props: Wf,
  setup: () => ({ n: uy })
});
Kf.render = fy;
var ca = Kf;
oe(ca);
le(ca, Wf);
const S5 = ca;
var En = ca;
const qf = {
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
  rules: Array,
  onClick: L(),
  onChange: L(),
  "onUpdate:modelValue": L(),
  "onUpdate:indeterminate": L()
}, Gf = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function py() {
  const { bindChildren: e, childProviders: n, length: o } = yn(
    Gf
  );
  return {
    length: o,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function vy() {
  const { bindParent: e, parentProvider: n, index: o } = bn(
    Gf
  );
  return {
    index: o,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var my = Object.defineProperty, hy = Object.defineProperties, gy = Object.getOwnPropertyDescriptors, Iu = Object.getOwnPropertySymbols, by = Object.prototype.hasOwnProperty, yy = Object.prototype.propertyIsEnumerable, Du = (e, n, o) => n in e ? my(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ky = (e, n) => {
  for (var o in n || (n = {}))
    by.call(n, o) && Du(e, o, n[o]);
  if (Iu)
    for (var o of Iu(n))
      yy.call(n, o) && Du(e, o, n[o]);
  return e;
}, $y = (e, n) => hy(e, gy(n));
const Xf = Symbol("FORM_BIND_FORM_ITEM_KEY");
function jn() {
  const { parentProvider: e, index: n, bindParent: o } = bn(Xf), t = jo();
  return {
    index: n,
    form: e,
    bindForm: o ? (a) => {
      o($y(ky({}, a), { instance: t }));
    } : null
  };
}
function wy() {
  const { childProviders: e, length: n, bindChildren: o } = yn(Xf);
  return {
    length: n,
    formItems: e,
    bindFormItems: o
  };
}
const { name: Cy, n: Sy, classes: Py } = ee("checkbox"), zy = ["tabindex"];
function Oy(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = We("hover"), i = We("ripple");
  return h(), S(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      D(
        "div",
        {
          class: p(e.n()),
          onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
        },
        [
          Ne((h(), S("div", {
            ref: "action",
            class: p(
              e.classes(
                e.n("action"),
                [e.checked || e.isIndeterminate, e.n("--checked"), e.n("--unchecked")],
                [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                [e.formDisabled || e.disabled, e.n("--disabled")]
              )
            ),
            style: K({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor }),
            tabindex: e.disabled || e.formDisabled ? void 0 : "0",
            onFocus: n[0] || (n[0] = (l) => e.isFocusing = !0),
            onBlur: n[1] || (n[1] = (l) => e.isFocusing = !1)
          }, [
            e.isIndeterminate ? V(e.$slots, "indeterminate-icon", { key: 0 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "minus-box",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : X("v-if", !0),
            e.checked && !e.isIndeterminate ? V(e.$slots, "checked-icon", { key: 1 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "checkbox-marked",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : X("v-if", !0),
            !e.checked && !e.isIndeterminate ? V(e.$slots, "unchecked-icon", { key: 2 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "checkbox-blank-outline",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : X("v-if", !0),
            G(t, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ], 46, zy)), [
            [a, e.handleHovering, "desktop"],
            [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]
          ]),
          e.$slots.default ? (h(), S(
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
          )) : X("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Zf = x({
  name: Cy,
  directives: { Ripple: rn, Hover: Tn },
  components: {
    VarIcon: Je,
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  props: qf,
  setup(e) {
    const n = k(null), o = k(!1), t = Zn(e, "modelValue"), r = Zn(e, "indeterminate"), a = I(() => t.value === e.checkedValue), i = I(() => e.checkedValue), l = k(!1), { checkboxGroup: s, bindCheckboxGroup: u } = vy(), { hovering: c, handleHovering: d } = Jn(), { form: f, bindForm: v } = jn(), {
      errorMessage: b,
      validateWithTrigger: m,
      validate: y,
      // expose
      resetValidation: $
    } = Yn(), w = {
      checkedValue: i,
      checked: a,
      sync: A,
      validate: Y,
      resetValidation: $,
      reset: E,
      resetWithAnimation: T
    };
    P(u, w), P(v, w), Ke(() => window, "keydown", N), Ke(() => window, "keyup", H);
    function g(M) {
      qe(() => {
        const { validateTrigger: q, rules: W, modelValue: ue } = e;
        m(q, M, W, ue);
      });
    }
    function C(M) {
      const { checkedValue: q, onChange: W } = e;
      t.value = M, r.value = !1, P(W, t.value), g("onChange"), M === q ? s == null || s.onChecked(q) : s == null || s.onUnchecked(q);
    }
    function z(M) {
      const { disabled: q, readonly: W, checkedValue: ue, uncheckedValue: Q, onClick: pe } = e;
      if (f != null && f.disabled.value || q || (P(pe, M), f != null && f.readonly.value || W))
        return;
      l.value = !0;
      const ke = s ? s.checkedCount.value >= Number(s.max.value) : !1;
      !a.value && ke || C(a.value ? Q : ue);
    }
    function O() {
      n.value.focus();
    }
    function A(M) {
      const { checkedValue: q, uncheckedValue: W } = e;
      t.value = M.includes(q) ? q : W;
    }
    function T() {
      l.value = !1;
    }
    function E() {
      t.value = e.uncheckedValue, $();
    }
    function B(M) {
      const { checkedValue: q, uncheckedValue: W } = e;
      ![q, W].includes(M) && (M = a.value ? W : q), C(M);
    }
    function N(M) {
      if (!o.value)
        return;
      const { key: q } = M;
      (q === "Enter" || q === " ") && Fe(M), q === "Enter" && n.value.click();
    }
    function H(M) {
      o.value && M.key === " " && (Fe(M), n.value.click());
    }
    function Y() {
      return y(e.rules, e.modelValue);
    }
    return {
      action: n,
      isFocusing: o,
      isIndeterminate: r,
      withAnimation: l,
      checked: a,
      errorMessage: b,
      checkboxGroupErrorMessage: s == null ? void 0 : s.errorMessage,
      formDisabled: f == null ? void 0 : f.disabled,
      formReadonly: f == null ? void 0 : f.readonly,
      hovering: c,
      n: Sy,
      classes: Py,
      handleHovering: d,
      handleClick: z,
      handleTextClick: O,
      toggle: B,
      reset: E,
      validate: Y,
      resetValidation: $
    };
  }
});
Zf.render = Oy;
var da = Zf;
oe(da);
le(da, qf);
const P5 = da;
var lt = da;
const Jf = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: [String, Number],
  options: Array,
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
  rules: Array,
  onChange: L(),
  "onUpdate:modelValue": L()
}, { name: Ty, n: Ey, classes: By } = ee("checkbox-group");
function Iy(e, n) {
  const o = _("maybe-v-node"), t = _("var-checkbox"), r = _("var-form-details");
  return h(), S(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      D(
        "div",
        {
          class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          e.checkboxGroupOptions.length ? (h(!0), S(
            Ve,
            { key: 0 },
            Ze(e.checkboxGroupOptions, (a) => (h(), Pe(t, {
              key: a[e.valueKey],
              "checked-value": a[e.valueKey],
              disabled: a.disabled
            }, {
              default: fe(({ checked: i }) => [
                G(o, {
                  is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey]
                }, null, 8, ["is"])
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["checked-value", "disabled"]))),
            128
            /* KEYED_FRAGMENT */
          )) : X("v-if", !0),
          V(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Qf = x({
  name: Ty,
  components: { VarFormDetails: En, VarCheckbox: lt, MaybeVNode: Xt },
  props: Jf,
  setup(e) {
    const n = I(() => e.max), o = I(() => e.modelValue.length), t = I(() => Ye(e.options) ? e.options : []), { length: r, checkboxes: a, bindCheckboxes: i } = py(), { bindForm: l } = jn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: c,
      // expose
      resetValidation: d
    } = Yn(), f = I(() => s.value), v = {
      max: n,
      checkedCount: o,
      onChecked: y,
      onUnchecked: $,
      validate: A,
      resetValidation: d,
      reset: O,
      errorMessage: f
    };
    ce(() => e.modelValue, w, { deep: !0 }), ce(() => r.value, w), i(v), P(l, v);
    function b(T) {
      qe(() => {
        const { validateTrigger: E, rules: B, modelValue: N } = e;
        u(E, T, B, N);
      });
    }
    function m(T) {
      P(e["onUpdate:modelValue"], T), P(e.onChange, T), b("onChange");
    }
    function y(T) {
      const { modelValue: E } = e;
      E.includes(T) || m([...E, T]);
    }
    function $(T) {
      const { modelValue: E } = e;
      E.includes(T) && m(E.filter((B) => B !== T));
    }
    function w() {
      a.forEach(({ sync: T }) => T(e.modelValue));
    }
    function g() {
      a.forEach((T) => T.resetWithAnimation());
    }
    function C() {
      const T = a.map(({ checkedValue: B }) => B.value), E = Ys(T);
      return g(), P(e["onUpdate:modelValue"], E), E;
    }
    function z() {
      const T = a.filter(({ checked: B }) => !B.value).map(({ checkedValue: B }) => B.value), E = Ys(T);
      return g(), P(e["onUpdate:modelValue"], E), E;
    }
    function O() {
      P(e["onUpdate:modelValue"], []), d();
    }
    function A() {
      return c(e.rules, e.modelValue);
    }
    return {
      errorMessage: s,
      checkboxGroupOptions: t,
      n: Ey,
      classes: By,
      checkAll: C,
      inverseAll: z,
      reset: O,
      validate: A,
      resetValidation: d,
      isFunction: Qn
    };
  }
});
Qf.render = Iy;
var fa = Qf;
oe(fa);
le(fa, Jf);
const z5 = fa;
var Qi = fa;
const _f = {
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
  iconName: Me(tn, "name"),
  namespace: Me(tn, "namespace"),
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
  onClose: L()
}, { name: Dy, n: po, classes: My } = ee("chip");
function Ny(e, n) {
  const o = _("var-icon");
  return h(), Pe(_e, {
    name: e.n("$-fade")
  }, {
    default: fe(() => [
      D(
        "span",
        je({
          class: e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 1), ...e.contentClass),
          style: e.chipStyle
        }, e.$attrs),
        [
          V(e.$slots, "left"),
          D(
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
          e.closeable ? (h(), S(
            "span",
            {
              key: 0,
              class: p(e.n("--close")),
              onClick: n[0] || (n[0] = (...t) => e.handleClose && e.handleClose(...t))
            },
            [
              G(o, {
                name: `${e.iconName ? e.iconName : "close-circle"}`,
                namespace: e.namespace
              }, null, 8, ["name", "namespace"])
            ],
            2
            /* CLASS */
          )) : X("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const xf = x({
  name: Dy,
  components: {
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: _f,
  setup(e) {
    const n = I(() => {
      const { plain: r, textColor: a, color: i } = e;
      return r ? {
        color: a || i,
        borderColor: i
      } : {
        color: a,
        background: i
      };
    }), o = I(() => {
      const { size: r, block: a, type: i, plain: l, round: s } = e, u = po(a ? "$--flex" : "$--inline-flex"), c = l ? `${po("plain")} ${po(`plain-${i}`)}` : po(`--${i}`), d = s ? po("--round") : null;
      return [po(`--${r}`), u, c, d];
    });
    function t(r) {
      P(e.onClose, r);
    }
    return {
      chipStyle: n,
      contentClass: o,
      n: po,
      classes: My,
      formatElevation: pn,
      handleClose: t
    };
  }
});
xf.render = Ny;
var pa = xf;
oe(pa);
le(pa, _f);
const O5 = pa;
var Br = pa;
const ep = {
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
  onClick: L()
}, np = Symbol("ROW_BIND_COL_KEY");
function Ay() {
  const { bindChildren: e, childProviders: n, length: o } = yn(np);
  return {
    length: o,
    cols: n,
    bindCols: e
  };
}
function Vy() {
  const { parentProvider: e, index: n, bindParent: o } = bn(np);
  return {
    index: n,
    row: e,
    bindRow: o
  };
}
const { name: Ly, n: rr, classes: Ry } = ee("col");
function Fy(e, n) {
  return h(), S(
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
      style: K({
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
const op = x({
  name: Ly,
  props: ep,
  setup(e) {
    const n = I(() => R(e.span)), o = I(() => R(e.offset)), t = k({ left: 0, right: 0, top: 0, bottom: 0 }), { row: r, bindRow: a } = Vy(), i = {
      setPadding(u) {
        t.value = u;
      }
    };
    ce([() => e.span, () => e.offset], () => {
      r == null || r.computePadding();
    }), P(a, i);
    function l(u, c) {
      const d = [];
      if (c == null)
        return d;
      if (tt(c)) {
        const { offset: f, span: v } = c;
        Number(v) >= 0 && d.push(rr(`--span-${u}-${v}`)), f && d.push(rr(`--offset-${u}-${f}`));
      } else
        Number(c) >= 0 && d.push(rr(`--span-${u}-${c}`));
      return d;
    }
    function s(u) {
      P(e.onClick, u);
    }
    return {
      span: n,
      offset: o,
      padding: t,
      n: rr,
      classes: Ry,
      toNumber: R,
      toSizeUnit: Oe,
      getSize: l,
      handleClick: s,
      padStartFlex: Or
    };
  }
});
op.render = Fy;
var va = op;
oe(va);
le(va, ep);
const T5 = va;
var _i = va;
const tp = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Uy() {
  const { childProviders: e, length: n, bindChildren: o } = yn(
    tp
  );
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: o
  };
}
const rp = {
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
  onChange: L(),
  "onUpdate:modelValue": L()
}, { name: Hy, n: Yy } = ee("collapse");
function jy(e, n) {
  return h(), S(
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
const ap = x({
  name: Hy,
  props: rp,
  setup(e) {
    const n = I(() => e.offset), o = I(() => e.divider), t = I(() => e.elevation), r = I(() => e.accordion), a = I(() => Vo(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = Uy(), u = {
      offset: n,
      divider: o,
      elevation: t,
      accordion: r,
      updateItem: c
    };
    ce(
      () => i.value,
      () => qe().then(v)
    ), ce(
      () => e.modelValue,
      () => qe().then(v)
    ), s(u);
    function c(m, y) {
      if (e.accordion) {
        d(y ? m : void 0);
        return;
      }
      const $ = y ? [...a.value, m] : a.value.filter((w) => w !== m);
      d($);
    }
    function d(m) {
      P(e["onUpdate:modelValue"], m), P(e.onChange, m);
    }
    function f() {
      if (e.accordion) {
        const [$] = a.value;
        if ($ == null)
          return;
        const w = l.find(({ name: g }) => $ === g.value);
        return w ?? l.find(({ index: g, name: C }) => C.value == null && $ === g.value);
      }
      const m = l.filter(
        ({ name: $ }) => $.value != null && a.value.includes($.value)
      ), y = l.filter(
        ({ index: $, name: w }) => w.value == null && a.value.includes($.value)
      );
      return [...m, ...y];
    }
    function v() {
      const m = Mh(Vo(f()));
      l.forEach((y) => {
        y.init(m.includes(y));
      });
    }
    return {
      divider: o,
      n: Yy,
      toggleAll: (m) => {
        if (e.accordion)
          return;
        const $ = l.filter((w) => {
          var g;
          const C = (g = w.name.value) != null ? g : w.index.value, z = a.value.includes(C);
          return m.skipDisabled && w.disabled.value ? z : m.expand === "inverse" ? !z : m.expand;
        }).map((w) => {
          var g;
          return (g = w.name.value) != null ? g : w.index.value;
        });
        d($);
      }
    };
  }
});
ap.render = jy;
var ma = ap;
oe(ma);
le(ma, rp);
const E5 = ma;
var xi = ma;
function Wy() {
  const { parentProvider: e, index: n, bindParent: o } = bn(
    tp
  );
  return o || Vn("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: o
  };
}
const ip = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
var Mu = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
function lp(e) {
  const { contentEl: n, showContent: o, expand: t } = e;
  let r = !0;
  ce(
    t,
    (u) => {
      qe(() => {
        u ? a() : i();
      });
    },
    { immediate: !0 }
  );
  function a() {
    return Mu(this, null, function* () {
      if (!n.value || (n.value.style.height = "", o.value = !0, yield gr(), !n.value))
        return;
      const { offsetHeight: u } = n.value;
      n.value.style.height = "0px", yield gr(), n.value && (n.value.style.height = u + "px", r && (yield $n(), r && l()));
    });
  }
  const i = () => Mu(this, null, function* () {
    if (!n.value)
      return;
    const { offsetHeight: u } = n.value;
    n.value.style.height = u + "px", yield gr(), n.value.style.height = "0px";
  }), l = () => {
    t.value || (o.value = !1), n.value.style.height = "";
  };
  return {
    handleTransitionEnd: l,
    handleTransitionStart: () => {
      r = !1;
    }
  };
}
const { name: Ky, n: qy, classes: Gy } = ee("collapse-item"), Xy = ["aria-expanded", "aria-disabled", "role"];
function Zy(e, n) {
  const o = _("var-icon");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: K(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
    },
    [
      D(
        "div",
        {
          class: p(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
        },
        null,
        2
        /* CLASS */
      ),
      D("div", {
        class: p(e.classes(e.n("header"), [!e.disabled, e.n("header--cursor-pointer")])),
        "aria-expanded": e.isShow,
        "aria-disabled": e.disabled,
        role: e.accordion ? "tab" : "button",
        onClick: n[0] || (n[0] = (...t) => e.toggle && e.toggle(...t))
      }, [
        e.$slots.title || e.title ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.n("header-title"))
          },
          [
            V(e.$slots, "title", {}, () => [
              De(
                re(e.title),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : X("v-if", !0),
        D(
          "div",
          {
            class: p(e.n("header-icon"))
          },
          [
            V(e.$slots, "icon", {}, () => [
              G(o, {
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
      ], 10, Xy),
      Ne(D(
        "div",
        {
          class: p(e.n("content")),
          ref: "contentEl",
          onTransitionend: n[1] || (n[1] = (...t) => e.handleTransitionEnd && e.handleTransitionEnd(...t)),
          onTransitionstart: n[2] || (n[2] = (...t) => e.handleTransitionStart && e.handleTransitionStart(...t))
        },
        [
          D(
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
        [Xn, e.showContent]
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const sp = x({
  name: Ky,
  components: {
    VarIcon: Je
  },
  props: ip,
  setup(e) {
    const n = k(!1), o = k(!1), t = k(null), r = I(() => e.name), a = I(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = Wy(), { offset: u, divider: c, elevation: d, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: r,
      disabled: a,
      init: $
    });
    const { handleTransitionEnd: m, handleTransitionStart: y } = lp({
      contentEl: t,
      showContent: o,
      expand: n
    });
    function $(g) {
      n.value = g;
    }
    function w() {
      var g;
      e.disabled || v((g = e.name) != null ? g : i.value, !n.value);
    }
    return {
      isShow: n,
      showContent: o,
      offset: u,
      divider: c,
      elevation: d,
      contentEl: t,
      accordion: f,
      n: qy,
      classes: Gy,
      toggle: w,
      formatElevation: pn,
      handleTransitionEnd: m,
      handleTransitionStart: y
    };
  }
});
sp.render = Zy;
var ha = sp;
oe(ha);
le(ha, ip);
const B5 = ha;
var el = ha;
const up = {
  expand: Boolean
}, { name: Jy, n: Qy } = ee("collapse-transition");
function _y(e, n) {
  return Ne((h(), S(
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
    [Xn, e.showContent]
  ]);
}
const cp = x({
  name: Jy,
  props: up,
  setup(e) {
    const n = k(!1), o = k(null), t = I(() => e.expand), { handleTransitionEnd: r, handleTransitionStart: a } = lp({
      contentEl: o,
      showContent: n,
      expand: t
    });
    return {
      showContent: n,
      contentEl: o,
      n: Qy,
      handleTransitionEnd: r,
      handleTransitionStart: a
    };
  }
});
cp.render = _y;
var ga = cp;
oe(ga);
le(ga, up);
const I5 = ga;
var nl = ga;
const dp = {
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
  onEnd: L(),
  onChange: L()
}, { name: xy, n: e1 } = ee("countdown"), ol = 1e3, tl = 60 * ol, rl = 60 * tl, Nu = 24 * rl;
function n1(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      V(e.$slots, "default", wo(qt(e.timeData)), () => [
        De(
          re(e.showTime),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const fp = x({
  name: xy,
  props: dp,
  setup(e) {
    const n = k(""), o = k({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let t = 0, r = !1, a = 0, i = 0, l;
    ce(
      () => e.time,
      () => {
        v(), e.autoStart && d();
      }
    ), Yo(() => {
      c(), e.autoStart && d();
    }), Eo(() => {
      l != null && (r = l, r === !0 && d(!0));
    }), pt(() => {
      l = r, f();
    }), Wt(f);
    function s(b, m) {
      const y = Object.values(m), $ = ["DD", "HH", "mm", "ss"], w = [24, 60, 60, 1e3];
      if ($.forEach((g, C) => {
        b.includes(g) ? b = b.replace(g, Fo(`${y[C]}`, 2, "0")) : y[C + 1] += y[C] * w[C];
      }), b.includes("S")) {
        const g = Fo(`${y[y.length - 1]}`, 3, "0");
        b.includes("SSS") ? b = b.replace("SSS", g) : b.includes("SS") ? b = b.replace("SS", g.slice(0, 2)) : b = b.replace("S", g.slice(0, 1));
      }
      return b;
    }
    function u(b) {
      const m = Math.floor(b / Nu), y = Math.floor(b % Nu / rl), $ = Math.floor(b % rl / tl), w = Math.floor(b % tl / ol), g = Math.floor(b % ol), C = {
        days: m,
        hours: y,
        minutes: $,
        seconds: w,
        milliseconds: g
      };
      o.value = C, P(e.onChange, o.value), n.value = s(e.format, C);
    }
    function c() {
      const { time: b, onEnd: m } = e, y = performance.now();
      if (t || (t = y + R(b)), i = t - y, i < 0 && (i = 0), u(i), i === 0) {
        P(m);
        return;
      }
      r && (a = Bt(c));
    }
    function d(b = !1) {
      r && !b || (r = !0, t = performance.now() + (i || R(e.time)), c());
    }
    function f() {
      r = !1, js(a);
    }
    function v() {
      t = 0, r = !1, js(a), c();
    }
    return {
      showTime: n,
      timeData: o,
      n: e1,
      start: d,
      pause: f,
      reset: v
    };
  }
});
fp.render = n1;
var ba = fp;
oe(ba);
le(ba, dp);
const D5 = ba;
var al = ba;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Qo = 9e15, Io = 1e9, il = "0123456789abcdef", Ir = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Dr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ll = {
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
  minE: -Qo,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Qo,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, pp, so, Be = !0, ya = "[DecimalError] ", Oo = ya + "Invalid argument: ", vp = ya + "Precision limit exceeded", mp = ya + "crypto unavailable", hp = "[object Decimal]", wn = Math.floor, fn = Math.pow, o1 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, t1 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, r1 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, gp = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Gn = 1e7, ze = 7, a1 = 9007199254740991, i1 = Ir.length - 1, sl = Dr.length - 1, Z = { toStringTag: hp };
Z.absoluteValue = Z.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), Ce(e);
};
Z.ceil = function() {
  return Ce(new this.constructor(this), this.e + 1, 2);
};
Z.clampedTo = Z.clamp = function(e, n) {
  var o, t = this, r = t.constructor;
  if (e = new r(e), n = new r(n), !e.s || !n.s)
    return new r(NaN);
  if (e.gt(n))
    throw Error(Oo + n);
  return o = t.cmp(e), o < 0 ? e : t.cmp(n) > 0 ? n : new r(t);
};
Z.comparedTo = Z.cmp = function(e) {
  var n, o, t, r, a = this, i = a.d, l = (e = new a.constructor(e)).d, s = a.s, u = e.s;
  if (!i || !l)
    return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0])
    return i[0] ? s : l[0] ? -u : 0;
  if (s !== u)
    return s;
  if (a.e !== e.e)
    return a.e > e.e ^ s < 0 ? 1 : -1;
  for (t = i.length, r = l.length, n = 0, o = t < r ? t : r; n < o; ++n)
    if (i[n] !== l[n])
      return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return t === r ? 0 : t > r ^ s < 0 ? 1 : -1;
};
Z.cosine = Z.cos = function() {
  var e, n, o = this, t = o.constructor;
  return o.d ? o.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + ze, t.rounding = 1, o = l1(t, wp(t, o)), t.precision = e, t.rounding = n, Ce(so == 2 || so == 3 ? o.neg() : o, e, n, !0)) : new t(1) : new t(NaN);
};
Z.cubeRoot = Z.cbrt = function() {
  var e, n, o, t, r, a, i, l, s, u, c = this, d = c.constructor;
  if (!c.isFinite() || c.isZero())
    return new d(c);
  for (Be = !1, a = c.s * fn(c.s * c, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (o = hn(c.d), e = c.e, (a = (e - o.length + 1) % 3) && (o += a == 1 || a == -2 ? "0" : "00"), a = fn(o, 1 / 3), e = wn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? o = "5e" + e : (o = a.toExponential(), o = o.slice(0, o.indexOf("e") + 1) + e), t = new d(o), t.s = c.s) : t = new d(a.toString()), i = (e = d.precision) + 3; ; )
    if (l = t, s = l.times(l).times(l), u = s.plus(c), t = Xe(u.plus(c).times(l), u.plus(s), i + 2, 1), hn(l.d).slice(0, i) === (o = hn(t.d)).slice(0, i))
      if (o = o.slice(i - 3, i + 1), o == "9999" || !r && o == "4999") {
        if (!r && (Ce(l, e + 1, 0), l.times(l).times(l).eq(c))) {
          t = l;
          break;
        }
        i += 4, r = 1;
      } else {
        (!+o || !+o.slice(1) && o.charAt(0) == "5") && (Ce(t, e + 1, 1), n = !t.times(t).times(t).eq(c));
        break;
      }
  return Be = !0, Ce(t, e, d.rounding, n);
};
Z.decimalPlaces = Z.dp = function() {
  var e, n = this.d, o = NaN;
  if (n) {
    if (e = n.length - 1, o = (e - wn(this.e / ze)) * ze, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        o--;
    o < 0 && (o = 0);
  }
  return o;
};
Z.dividedBy = Z.div = function(e) {
  return Xe(this, new this.constructor(e));
};
Z.dividedToIntegerBy = Z.divToInt = function(e) {
  var n = this, o = n.constructor;
  return Ce(Xe(n, new o(e), 0, 1, 1), o.precision, o.rounding);
};
Z.equals = Z.eq = function(e) {
  return this.cmp(e) === 0;
};
Z.floor = function() {
  return Ce(new this.constructor(this), this.e + 1, 3);
};
Z.greaterThan = Z.gt = function(e) {
  return this.cmp(e) > 0;
};
Z.greaterThanOrEqualTo = Z.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
Z.hyperbolicCosine = Z.cosh = function() {
  var e, n, o, t, r, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite())
    return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero())
    return l;
  o = i.precision, t = i.rounding, i.precision = o + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / $a(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = st(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, c = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(c.minus(s.times(c))));
  return Ce(a, i.precision = o, i.rounding = t, !0);
};
Z.hyperbolicSine = Z.sinh = function() {
  var e, n, o, t, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero())
    return new a(r);
  if (n = a.precision, o = a.rounding, a.precision = n + Math.max(r.e, r.sd()) + 4, a.rounding = 1, t = r.d.length, t < 3)
    r = st(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(t), e = e > 16 ? 16 : e | 0, r = r.times(1 / $a(5, e)), r = st(a, 2, r, r, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = r.times(r), r = r.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = o, Ce(r, n, o, !0);
};
Z.hyperbolicTangent = Z.tanh = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 7, t.rounding = 1, Xe(o.sinh(), o.cosh(), t.precision = e, t.rounding = n)) : new t(o.s);
};
Z.inverseCosine = Z.acos = function() {
  var e, n = this, o = n.constructor, t = n.abs().cmp(1), r = o.precision, a = o.rounding;
  return t !== -1 ? t === 0 ? n.isNeg() ? qn(o, r, a) : new o(0) : new o(NaN) : n.isZero() ? qn(o, r + 4, a).times(0.5) : (o.precision = r + 6, o.rounding = 1, n = n.asin(), e = qn(o, r + 4, a).times(0.5), o.precision = r, o.rounding = a, e.minus(n));
};
Z.inverseHyperbolicCosine = Z.acosh = function() {
  var e, n, o = this, t = o.constructor;
  return o.lte(1) ? new t(o.eq(1) ? 0 : NaN) : o.isFinite() ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(Math.abs(o.e), o.sd()) + 4, t.rounding = 1, Be = !1, o = o.times(o).minus(1).sqrt().plus(o), Be = !0, t.precision = e, t.rounding = n, o.ln()) : new t(o);
};
Z.inverseHyperbolicSine = Z.asinh = function() {
  var e, n, o = this, t = o.constructor;
  return !o.isFinite() || o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 2 * Math.max(Math.abs(o.e), o.sd()) + 6, t.rounding = 1, Be = !1, o = o.times(o).plus(1).sqrt().plus(o), Be = !0, t.precision = e, t.rounding = n, o.ln());
};
Z.inverseHyperbolicTangent = Z.atanh = function() {
  var e, n, o, t, r = this, a = r.constructor;
  return r.isFinite() ? r.e >= 0 ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = a.precision, n = a.rounding, t = r.sd(), Math.max(t, e) < 2 * -r.e - 1 ? Ce(new a(r), e, n, !0) : (a.precision = o = t - r.e, r = Xe(r.plus(1), new a(1).minus(r), o + e, 1), a.precision = e + 4, a.rounding = 1, r = r.ln(), a.precision = e, a.rounding = n, r.times(0.5))) : new a(NaN);
};
Z.inverseSine = Z.asin = function() {
  var e, n, o, t, r = this, a = r.constructor;
  return r.isZero() ? new a(r) : (n = r.abs().cmp(1), o = a.precision, t = a.rounding, n !== -1 ? n === 0 ? (e = qn(a, o + 4, t).times(0.5), e.s = r.s, e) : new a(NaN) : (a.precision = o + 6, a.rounding = 1, r = r.div(new a(1).minus(r.times(r)).sqrt().plus(1)).atan(), a.precision = o, a.rounding = t, r.times(2)));
};
Z.inverseTangent = Z.atan = function() {
  var e, n, o, t, r, a, i, l, s, u = this, c = u.constructor, d = c.precision, f = c.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new c(u);
    if (u.abs().eq(1) && d + 4 <= sl)
      return i = qn(c, d + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new c(NaN);
    if (d + 4 <= sl)
      return i = qn(c, d + 4, f).times(0.5), i.s = u.s, i;
  }
  for (c.precision = l = d + 10, c.rounding = 1, o = Math.min(28, l / ze + 2 | 0), e = o; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (Be = !1, n = Math.ceil(l / ze), t = 1, s = u.times(u), i = new c(u), r = u; e !== -1; )
    if (r = r.times(s), a = i.minus(r.div(t += 2)), r = r.times(s), i = a.plus(r.div(t += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === a.d[e] && e--; )
        ;
  return o && (i = i.times(2 << o - 1)), Be = !0, Ce(i, c.precision = d, c.rounding = f, !0);
};
Z.isFinite = function() {
  return !!this.d;
};
Z.isInteger = Z.isInt = function() {
  return !!this.d && wn(this.e / ze) > this.d.length - 2;
};
Z.isNaN = function() {
  return !this.s;
};
Z.isNegative = Z.isNeg = function() {
  return this.s < 0;
};
Z.isPositive = Z.isPos = function() {
  return this.s > 0;
};
Z.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
Z.lessThan = Z.lt = function(e) {
  return this.cmp(e) < 0;
};
Z.lessThanOrEqualTo = Z.lte = function(e) {
  return this.cmp(e) < 1;
};
Z.logarithm = Z.log = function(e) {
  var n, o, t, r, a, i, l, s, u = this, c = u.constructor, d = c.precision, f = c.rounding, v = 5;
  if (e == null)
    e = new c(10), n = !0;
  else {
    if (e = new c(e), o = e.d, e.s < 0 || !o || !o[0] || e.eq(1))
      return new c(NaN);
    n = e.eq(10);
  }
  if (o = u.d, u.s < 0 || !o || !o[0] || u.eq(1))
    return new c(o && !o[0] ? -1 / 0 : u.s != 1 ? NaN : o ? 0 : 1 / 0);
  if (n)
    if (o.length > 1)
      a = !0;
    else {
      for (r = o[0]; r % 10 === 0; )
        r /= 10;
      a = r !== 1;
    }
  if (Be = !1, l = d + v, i = ko(u, l), t = n ? Mr(c, l + 10) : ko(e, l), s = Xe(i, t, l, 1), Mt(s.d, r = d, f))
    do
      if (l += 10, i = ko(u, l), t = n ? Mr(c, l + 10) : ko(e, l), s = Xe(i, t, l, 1), !a) {
        +hn(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = Ce(s, d + 1, 0));
        break;
      }
    while (Mt(s.d, r += 10, f));
  return Be = !0, Ce(s, d, f);
};
Z.minus = Z.sub = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, b = v.constructor;
  if (e = new b(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new b(NaN) : v.d ? e.s = -e.s : e = new b(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s)
    return e.s = -e.s, v.plus(e);
  if (u = v.d, f = e.d, l = b.precision, s = b.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new b(v);
    else
      return new b(s === 3 ? -0 : 0);
    return Be ? Ce(e, l, s) : e;
  }
  if (o = wn(e.e / ze), c = wn(v.e / ze), u = u.slice(), a = c - o, a) {
    for (d = a < 0, d ? (n = u, a = -a, i = f.length) : (n = f, o = c, i = u.length), t = Math.max(Math.ceil(l / ze), i) + 2, a > t && (a = t, n.length = 1), n.reverse(), t = a; t--; )
      n.push(0);
    n.reverse();
  } else {
    for (t = u.length, i = f.length, d = t < i, d && (i = t), t = 0; t < i; t++)
      if (u[t] != f[t]) {
        d = u[t] < f[t];
        break;
      }
    a = 0;
  }
  for (d && (n = u, u = f, f = n, e.s = -e.s), i = u.length, t = f.length - i; t > 0; --t)
    u[i++] = 0;
  for (t = f.length; t > a; ) {
    if (u[--t] < f[t]) {
      for (r = t; r && u[--r] === 0; )
        u[r] = Gn - 1;
      --u[r], u[t] += Gn;
    }
    u[t] -= f[t];
  }
  for (; u[--i] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --o;
  return u[0] ? (e.d = u, e.e = ka(u, o), Be ? Ce(e, l, s) : e) : new b(s === 3 ? -0 : 0);
};
Z.modulo = Z.mod = function(e) {
  var n, o = this, t = o.constructor;
  return e = new t(e), !o.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || o.d && !o.d[0] ? Ce(new t(o), t.precision, t.rounding) : (Be = !1, t.modulo == 9 ? (n = Xe(o, e.abs(), 0, 3, 1), n.s *= e.s) : n = Xe(o, e, 0, t.modulo, 1), n = n.times(e), Be = !0, o.minus(n));
};
Z.naturalExponential = Z.exp = function() {
  return ul(this);
};
Z.naturalLogarithm = Z.ln = function() {
  return ko(this);
};
Z.negated = Z.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, Ce(e);
};
Z.plus = Z.add = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d = this, f = d.constructor;
  if (e = new f(e), !d.d || !e.d)
    return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
  if (d.s != e.s)
    return e.s = -e.s, d.minus(e);
  if (u = d.d, c = e.d, l = f.precision, s = f.rounding, !u[0] || !c[0])
    return c[0] || (e = new f(d)), Be ? Ce(e, l, s) : e;
  if (a = wn(d.e / ze), t = wn(e.e / ze), u = u.slice(), r = a - t, r) {
    for (r < 0 ? (o = u, r = -r, i = c.length) : (o = c, t = a, i = u.length), a = Math.ceil(l / ze), i = a > i ? a + 1 : i + 1, r > i && (r = i, o.length = 1), o.reverse(); r--; )
      o.push(0);
    o.reverse();
  }
  for (i = u.length, r = c.length, i - r < 0 && (r = i, o = c, c = u, u = o), n = 0; r; )
    n = (u[--r] = u[r] + c[r] + n) / Gn | 0, u[r] %= Gn;
  for (n && (u.unshift(n), ++t), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = ka(u, t), Be ? Ce(e, l, s) : e;
};
Z.precision = Z.sd = function(e) {
  var n, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Oo + e);
  return o.d ? (n = bp(o.d), e && o.e + 1 > n && (n = o.e + 1)) : n = NaN, n;
};
Z.round = function() {
  var e = this, n = e.constructor;
  return Ce(new n(e), e.e + 1, n.rounding);
};
Z.sine = Z.sin = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + ze, t.rounding = 1, o = u1(t, wp(t, o)), t.precision = e, t.rounding = n, Ce(so > 2 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
Z.squareRoot = Z.sqrt = function() {
  var e, n, o, t, r, a, i = this, l = i.d, s = i.e, u = i.s, c = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new c(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (Be = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = hn(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = wn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), t = new c(n)) : t = new c(u.toString()), o = (s = c.precision) + 3; ; )
    if (a = t, t = a.plus(Xe(i, a, o + 2, 1)).times(0.5), hn(a.d).slice(0, o) === (n = hn(t.d)).slice(0, o))
      if (n = n.slice(o - 3, o + 1), n == "9999" || !r && n == "4999") {
        if (!r && (Ce(a, s + 1, 0), a.times(a).eq(i))) {
          t = a;
          break;
        }
        o += 4, r = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (Ce(t, s + 1, 1), e = !t.times(t).eq(i));
        break;
      }
  return Be = !0, Ce(t, s, c.rounding, e);
};
Z.tangent = Z.tan = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 10, t.rounding = 1, o = o.sin(), o.s = 1, o = Xe(o, new t(1).minus(o.times(o)).sqrt(), e + 10, 0), t.precision = e, t.rounding = n, Ce(so == 2 || so == 4 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
Z.times = Z.mul = function(e) {
  var n, o, t, r, a, i, l, s, u, c = this, d = c.constructor, f = c.d, v = (e = new d(e)).d;
  if (e.s *= c.s, !f || !f[0] || !v || !v[0])
    return new d(!e.s || f && !f[0] && !v || v && !v[0] && !f ? NaN : !f || !v ? e.s / 0 : e.s * 0);
  for (o = wn(c.e / ze) + wn(e.e / ze), s = f.length, u = v.length, s < u && (a = f, f = v, v = a, i = s, s = u, u = i), a = [], i = s + u, t = i; t--; )
    a.push(0);
  for (t = u; --t >= 0; ) {
    for (n = 0, r = s + t; r > t; )
      l = a[r] + v[t] * f[r - t - 1] + n, a[r--] = l % Gn | 0, n = l / Gn | 0;
    a[r] = (a[r] + n) % Gn | 0;
  }
  for (; !a[--i]; )
    a.pop();
  return n ? ++o : a.shift(), e.d = a, e.e = ka(a, o), Be ? Ce(e, d.precision, d.rounding) : e;
};
Z.toBinary = function(e, n) {
  return ks(this, 2, e, n);
};
Z.toDecimalPlaces = Z.toDP = function(e, n) {
  var o = this, t = o.constructor;
  return o = new t(o), e === void 0 ? o : (Bn(e, 0, Io), n === void 0 ? n = t.rounding : Bn(n, 0, 8), Ce(o, e + o.e + 1, n));
};
Z.toExponential = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = xn(t, !0) : (Bn(e, 0, Io), n === void 0 ? n = r.rounding : Bn(n, 0, 8), t = Ce(new r(t), e + 1, n), o = xn(t, !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
Z.toFixed = function(e, n) {
  var o, t, r = this, a = r.constructor;
  return e === void 0 ? o = xn(r) : (Bn(e, 0, Io), n === void 0 ? n = a.rounding : Bn(n, 0, 8), t = Ce(new a(r), e + r.e + 1, n), o = xn(t, !1, e + t.e + 1)), r.isNeg() && !r.isZero() ? "-" + o : o;
};
Z.toFraction = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, b = v.d, m = v.constructor;
  if (!b)
    return new m(v);
  if (u = o = new m(1), t = s = new m(0), n = new m(t), a = n.e = bp(b) - v.e - 1, i = a % ze, n.d[0] = fn(10, i < 0 ? ze + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new m(e), !l.isInt() || l.lt(u))
      throw Error(Oo + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Be = !1, l = new m(hn(b)), c = m.precision, m.precision = a = b.length * ze * 2; d = Xe(l, n, 0, 1, 1), r = o.plus(d.times(t)), r.cmp(e) != 1; )
    o = t, t = r, r = u, u = s.plus(d.times(r)), s = r, r = n, n = l.minus(d.times(r)), l = r;
  return r = Xe(e.minus(o), t, 0, 1, 1), s = s.plus(r.times(u)), o = o.plus(r.times(t)), s.s = u.s = v.s, f = Xe(u, t, a, 1).minus(v).abs().cmp(Xe(s, o, a, 1).minus(v).abs()) < 1 ? [u, t] : [s, o], m.precision = c, Be = !0, f;
};
Z.toHexadecimal = Z.toHex = function(e, n) {
  return ks(this, 16, e, n);
};
Z.toNearest = function(e, n) {
  var o = this, t = o.constructor;
  if (o = new t(o), e == null) {
    if (!o.d)
      return o;
    e = new t(1), n = t.rounding;
  } else {
    if (e = new t(e), n === void 0 ? n = t.rounding : Bn(n, 0, 8), !o.d)
      return e.s ? o : e;
    if (!e.d)
      return e.s && (e.s = o.s), e;
  }
  return e.d[0] ? (Be = !1, o = Xe(o, e, 0, n, 1).times(e), Be = !0, Ce(o)) : (e.s = o.s, o = e), o;
};
Z.toNumber = function() {
  return +this;
};
Z.toOctal = function(e, n) {
  return ks(this, 8, e, n);
};
Z.toPower = Z.pow = function(e) {
  var n, o, t, r, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(fn(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (t = s.precision, a = s.rounding, e.eq(1))
    return Ce(l, t, a);
  if (n = wn(e.e / ze), n >= e.d.length - 1 && (o = u < 0 ? -u : u) <= a1)
    return r = yp(s, l, o, t), e.s < 0 ? new s(1).div(r) : Ce(r, t, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return o = fn(+l, u), n = o == 0 || !isFinite(o) ? wn(u * (Math.log("0." + hn(l.d)) / Math.LN10 + l.e + 1)) : new s(o + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Be = !1, s.rounding = l.s = 1, o = Math.min(12, (n + "").length), r = ul(e.times(ko(l, t + o)), t), r.d && (r = Ce(r, t + 5, 1), Mt(r.d, t, a) && (n = t + 10, r = Ce(ul(e.times(ko(l, n + o)), n), n + 5, 1), +hn(r.d).slice(t + 1, t + 15) + 1 == 1e14 && (r = Ce(r, t + 1, 0)))), r.s = i, Be = !0, s.rounding = a, Ce(r, t, a));
};
Z.toPrecision = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = xn(t, t.e <= r.toExpNeg || t.e >= r.toExpPos) : (Bn(e, 1, Io), n === void 0 ? n = r.rounding : Bn(n, 0, 8), t = Ce(new r(t), e, n), o = xn(t, e <= t.e || t.e <= r.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
Z.toSignificantDigits = Z.toSD = function(e, n) {
  var o = this, t = o.constructor;
  return e === void 0 ? (e = t.precision, n = t.rounding) : (Bn(e, 1, Io), n === void 0 ? n = t.rounding : Bn(n, 0, 8)), Ce(new t(o), e, n);
};
Z.toString = function() {
  var e = this, n = e.constructor, o = xn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + o : o;
};
Z.truncated = Z.trunc = function() {
  return Ce(new this.constructor(this), this.e + 1, 1);
};
Z.valueOf = Z.toJSON = function() {
  var e = this, n = e.constructor, o = xn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + o : o;
};
function hn(e) {
  var n, o, t, r = e.length - 1, a = "", i = e[0];
  if (r > 0) {
    for (a += i, n = 1; n < r; n++)
      t = e[n] + "", o = ze - t.length, o && (a += vo(o)), a += t;
    i = e[n], t = i + "", o = ze - t.length, o && (a += vo(o));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return a + i;
}
function Bn(e, n, o) {
  if (e !== ~~e || e < n || e > o)
    throw Error(Oo + e);
}
function Mt(e, n, o, t) {
  var r, a, i, l;
  for (a = e[0]; a >= 10; a /= 10)
    --n;
  return --n < 0 ? (n += ze, r = 0) : (r = Math.ceil((n + 1) / ze), n %= ze), a = fn(10, ze - n), l = e[r] % a | 0, t == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = o < 4 && l == 99999 || o > 3 && l == 49999 || l == 5e4 || l == 0) : i = (o < 4 && l + 1 == a || o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == fn(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[r + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (t || o < 4) && l == 9999 || !t && o > 3 && l == 4999) : i = ((t || o < 4) && l + 1 == a || !t && o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == fn(10, n - 3) - 1, i;
}
function br(e, n, o) {
  for (var t, r = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = r.length; a--; )
      r[a] *= n;
    for (r[0] += il.indexOf(e.charAt(i++)), t = 0; t < r.length; t++)
      r[t] > o - 1 && (r[t + 1] === void 0 && (r[t + 1] = 0), r[t + 1] += r[t] / o | 0, r[t] %= o);
  }
  return r.reverse();
}
function l1(e, n) {
  var o, t, r;
  if (n.isZero())
    return n;
  t = n.d.length, t < 32 ? (o = Math.ceil(t / 3), r = (1 / $a(4, o)).toString()) : (o = 16, r = "2.3283064365386962890625e-10"), e.precision += o, n = st(e, 1, n.times(r), new e(1));
  for (var a = o; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= o, n;
}
var Xe = function() {
  function e(t, r, a) {
    var i, l = 0, s = t.length;
    for (t = t.slice(); s--; )
      i = t[s] * r + l, t[s] = i % a | 0, l = i / a | 0;
    return l && t.unshift(l), t;
  }
  function n(t, r, a, i) {
    var l, s;
    if (a != i)
      s = a > i ? 1 : -1;
    else
      for (l = s = 0; l < a; l++)
        if (t[l] != r[l]) {
          s = t[l] > r[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function o(t, r, a, i) {
    for (var l = 0; a--; )
      t[a] -= l, l = t[a] < r[a] ? 1 : 0, t[a] = l * i + t[a] - r[a];
    for (; !t[0] && t.length > 1; )
      t.shift();
  }
  return function(t, r, a, i, l, s) {
    var u, c, d, f, v, b, m, y, $, w, g, C, z, O, A, T, E, B, N, H, Y = t.constructor, M = t.s == r.s ? 1 : -1, q = t.d, W = r.d;
    if (!q || !q[0] || !W || !W[0])
      return new Y(
        // Return NaN if either NaN, or both Infinity or 0.
        !t.s || !r.s || (q ? W && q[0] == W[0] : !W) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          q && q[0] == 0 || !W ? M * 0 : M / 0
        )
      );
    for (s ? (v = 1, c = t.e - r.e) : (s = Gn, v = ze, c = wn(t.e / v) - wn(r.e / v)), N = W.length, E = q.length, $ = new Y(M), w = $.d = [], d = 0; W[d] == (q[d] || 0); d++)
      ;
    if (W[d] > (q[d] || 0) && c--, a == null ? (O = a = Y.precision, i = Y.rounding) : l ? O = a + (t.e - r.e) + 1 : O = a, O < 0)
      w.push(1), b = !0;
    else {
      if (O = O / v + 2 | 0, d = 0, N == 1) {
        for (f = 0, W = W[0], O++; (d < E || f) && O--; d++)
          A = f * s + (q[d] || 0), w[d] = A / W | 0, f = A % W | 0;
        b = f || d < E;
      } else {
        for (f = s / (W[0] + 1) | 0, f > 1 && (W = e(W, f, s), q = e(q, f, s), N = W.length, E = q.length), T = N, g = q.slice(0, N), C = g.length; C < N; )
          g[C++] = 0;
        H = W.slice(), H.unshift(0), B = W[0], W[1] >= s / 2 && ++B;
        do
          f = 0, u = n(W, g, N, C), u < 0 ? (z = g[0], N != C && (z = z * s + (g[1] || 0)), f = z / B | 0, f > 1 ? (f >= s && (f = s - 1), m = e(W, f, s), y = m.length, C = g.length, u = n(m, g, y, C), u == 1 && (f--, o(m, N < y ? H : W, y, s))) : (f == 0 && (u = f = 1), m = W.slice()), y = m.length, y < C && m.unshift(0), o(g, m, C, s), u == -1 && (C = g.length, u = n(W, g, N, C), u < 1 && (f++, o(g, N < C ? H : W, C, s))), C = g.length) : u === 0 && (f++, g = [0]), w[d++] = f, u && g[0] ? g[C++] = q[T] || 0 : (g = [q[T]], C = 1);
        while ((T++ < E || g[0] !== void 0) && O--);
        b = g[0] !== void 0;
      }
      w[0] || w.shift();
    }
    if (v == 1)
      $.e = c, pp = b;
    else {
      for (d = 1, f = w[0]; f >= 10; f /= 10)
        d++;
      $.e = d + c * v - 1, Ce($, l ? a + $.e + 1 : a, i, b);
    }
    return $;
  };
}();
function Ce(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, v = e.constructor;
  e:
    if (n != null) {
      if (d = e.d, !d)
        return e;
      for (r = 1, l = d[0]; l >= 10; l /= 10)
        r++;
      if (a = n - r, a < 0)
        a += ze, i = n, c = d[f = 0], s = c / fn(10, r - i - 1) % 10 | 0;
      else if (f = Math.ceil((a + 1) / ze), l = d.length, f >= l)
        if (t) {
          for (; l++ <= f; )
            d.push(0);
          c = s = 0, r = 1, a %= ze, i = a - ze + 1;
        } else
          break e;
      else {
        for (c = l = d[f], r = 1; l >= 10; l /= 10)
          r++;
        a %= ze, i = a - ze + r, s = i < 0 ? 0 : c / fn(10, r - i - 1) % 10 | 0;
      }
      if (t = t || n < 0 || d[f + 1] !== void 0 || (i < 0 ? c : c % fn(10, r - i - 1)), u = o < 4 ? (s || t) && (o == 0 || o == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (o == 4 || t || o == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (a > 0 ? i > 0 ? c / fn(10, r - i) : 0 : d[f - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !d[0])
        return d.length = 0, u ? (n -= e.e + 1, d[0] = fn(10, (ze - n % ze) % ze), e.e = -n || 0) : d[0] = e.e = 0, e;
      if (a == 0 ? (d.length = f, l = 1, f--) : (d.length = f + 1, l = fn(10, ze - a), d[f] = i > 0 ? (c / fn(10, r - i) % fn(10, i) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (a = 1, i = d[0]; i >= 10; i /= 10)
              a++;
            for (i = d[0] += l, l = 1; i >= 10; i /= 10)
              l++;
            a != l && (e.e++, d[0] == Gn && (d[0] = 1));
            break;
          } else {
            if (d[f] += l, d[f] != Gn)
              break;
            d[f--] = 0, l = 1;
          }
      for (a = d.length; d[--a] === 0; )
        d.pop();
    }
  return Be && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e;
}
function xn(e, n, o) {
  if (!e.isFinite())
    return $p(e);
  var t, r = e.e, a = hn(e.d), i = a.length;
  return n ? (o && (t = o - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + vo(t) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + vo(-r - 1) + a, o && (t = o - i) > 0 && (a += vo(t))) : r >= i ? (a += vo(r + 1 - i), o && (t = o - r - 1) > 0 && (a = a + "." + vo(t))) : ((t = r + 1) < i && (a = a.slice(0, t) + "." + a.slice(t)), o && (t = o - i) > 0 && (r + 1 === i && (a += "."), a += vo(t))), a;
}
function ka(e, n) {
  var o = e[0];
  for (n *= ze; o >= 10; o /= 10)
    n++;
  return n;
}
function Mr(e, n, o) {
  if (n > i1)
    throw Be = !0, o && (e.precision = o), Error(vp);
  return Ce(new e(Ir), n, 1, !0);
}
function qn(e, n, o) {
  if (n > sl)
    throw Error(vp);
  return Ce(new e(Dr), n, o, !0);
}
function bp(e) {
  var n = e.length - 1, o = n * ze + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      o--;
    for (n = e[0]; n >= 10; n /= 10)
      o++;
  }
  return o;
}
function vo(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function yp(e, n, o, t) {
  var r, a = new e(1), i = Math.ceil(t / ze + 4);
  for (Be = !1; ; ) {
    if (o % 2 && (a = a.times(n), Vu(a.d, i) && (r = !0)), o = wn(o / 2), o === 0) {
      o = a.d.length - 1, r && a.d[o] === 0 && ++a.d[o];
      break;
    }
    n = n.times(n), Vu(n.d, i);
  }
  return Be = !0, a;
}
function Au(e) {
  return e.d[e.d.length - 1] & 1;
}
function kp(e, n, o) {
  for (var t, r = new e(n[0]), a = 0; ++a < n.length; )
    if (t = new e(n[a]), t.s)
      r[o](t) && (r = t);
    else {
      r = t;
      break;
    }
  return r;
}
function ul(e, n) {
  var o, t, r, a, i, l, s, u = 0, c = 0, d = 0, f = e.constructor, v = f.rounding, b = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (Be = !1, s = b) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), d += 5;
  for (t = Math.log(fn(2, d)) / Math.LN10 * 2 + 5 | 0, s += t, o = a = i = new f(1), f.precision = s; ; ) {
    if (a = Ce(a.times(e), s, 1), o = o.times(++c), l = i.plus(Xe(a, o, s, 1)), hn(l.d).slice(0, s) === hn(i.d).slice(0, s)) {
      for (r = d; r--; )
        i = Ce(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Mt(i.d, s - t, v, u))
          f.precision = s += 10, o = a = l = new f(1), c = 0, u++;
        else
          return Ce(i, f.precision = b, v, Be = !0);
      else
        return f.precision = b, i;
    }
    i = l;
  }
}
function ko(e, n) {
  var o, t, r, a, i, l, s, u, c, d, f, v = 1, b = 10, m = e, y = m.d, $ = m.constructor, w = $.rounding, g = $.precision;
  if (m.s < 0 || !y || !y[0] || !m.e && y[0] == 1 && y.length == 1)
    return new $(y && !y[0] ? -1 / 0 : m.s != 1 ? NaN : y ? 0 : m);
  if (n == null ? (Be = !1, c = g) : c = n, $.precision = c += b, o = hn(y), t = o.charAt(0), Math.abs(a = m.e) < 15e14) {
    for (; t < 7 && t != 1 || t == 1 && o.charAt(1) > 3; )
      m = m.times(e), o = hn(m.d), t = o.charAt(0), v++;
    a = m.e, t > 1 ? (m = new $("0." + o), a++) : m = new $(t + "." + o.slice(1));
  } else
    return u = Mr($, c + 2, g).times(a + ""), m = ko(new $(t + "." + o.slice(1)), c - b).plus(u), $.precision = g, n == null ? Ce(m, g, w, Be = !0) : m;
  for (d = m, s = i = m = Xe(m.minus(1), m.plus(1), c, 1), f = Ce(m.times(m), c, 1), r = 3; ; ) {
    if (i = Ce(i.times(f), c, 1), u = s.plus(Xe(i, new $(r), c, 1)), hn(u.d).slice(0, c) === hn(s.d).slice(0, c))
      if (s = s.times(2), a !== 0 && (s = s.plus(Mr($, c + 2, g).times(a + ""))), s = Xe(s, new $(v), c, 1), n == null)
        if (Mt(s.d, c - b, w, l))
          $.precision = c += b, u = i = m = Xe(d.minus(1), d.plus(1), c, 1), f = Ce(m.times(m), c, 1), r = l = 1;
        else
          return Ce(s, $.precision = g, w, Be = !0);
      else
        return $.precision = g, s;
    s = u, r += 2;
  }
}
function $p(e) {
  return String(e.s * e.s / 0);
}
function cl(e, n) {
  var o, t, r;
  for ((o = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (t = n.search(/e/i)) > 0 ? (o < 0 && (o = t), o += +n.slice(t + 1), n = n.substring(0, t)) : o < 0 && (o = n.length), t = 0; n.charCodeAt(t) === 48; t++)
    ;
  for (r = n.length; n.charCodeAt(r - 1) === 48; --r)
    ;
  if (n = n.slice(t, r), n) {
    if (r -= t, e.e = o = o - t - 1, e.d = [], t = (o + 1) % ze, o < 0 && (t += ze), t < r) {
      for (t && e.d.push(+n.slice(0, t)), r -= ze; t < r; )
        e.d.push(+n.slice(t, t += ze));
      n = n.slice(t), t = ze - n.length;
    } else
      t -= r;
    for (; t--; )
      n += "0";
    e.d.push(+n), Be && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function s1(e, n) {
  var o, t, r, a, i, l, s, u, c;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), gp.test(n))
      return cl(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (t1.test(n))
    o = 16, n = n.toLowerCase();
  else if (o1.test(n))
    o = 2;
  else if (r1.test(n))
    o = 8;
  else
    throw Error(Oo + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, t = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = yp(t, new t(o), a, a * 2)), u = br(n, o, Gn), c = u.length - 1, a = c; u[a] === 0; --a)
    u.pop();
  return a < 0 ? new t(e.s * 0) : (e.e = ka(u, c), e.d = u, Be = !1, i && (e = Xe(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? fn(2, s) : $o.pow(2, s))), Be = !0, e);
}
function u1(e, n) {
  var o, t = n.d.length;
  if (t < 3)
    return n.isZero() ? n : st(e, 2, n, n);
  o = 1.4 * Math.sqrt(t), o = o > 16 ? 16 : o | 0, n = n.times(1 / $a(5, o)), n = st(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), l = new e(20); o--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(l))));
  return n;
}
function st(e, n, o, t, r) {
  var a, i, l, s, u = e.precision, c = Math.ceil(u / ze);
  for (Be = !1, s = o.times(o), l = new e(t); ; ) {
    if (i = Xe(l.times(s), new e(n++ * n++), u, 1), l = r ? t.plus(i) : t.minus(i), t = Xe(i.times(s), new e(n++ * n++), u, 1), i = l.plus(t), i.d[c] !== void 0) {
      for (a = c; i.d[a] === l.d[a] && a--; )
        ;
      if (a == -1)
        break;
    }
    a = l, l = t, t = i, i = a;
  }
  return Be = !0, i.d.length = c + 1, i;
}
function $a(e, n) {
  for (var o = e; --n; )
    o *= e;
  return o;
}
function wp(e, n) {
  var o, t = n.s < 0, r = qn(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return so = t ? 4 : 1, n;
  if (o = n.divToInt(r), o.isZero())
    so = t ? 3 : 2;
  else {
    if (n = n.minus(o.times(r)), n.lte(a))
      return so = Au(o) ? t ? 2 : 3 : t ? 4 : 1, n;
    so = Au(o) ? t ? 1 : 4 : t ? 3 : 2;
  }
  return n.minus(r).abs();
}
function ks(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, v = e.constructor, b = o !== void 0;
  if (b ? (Bn(o, 1, Io), t === void 0 ? t = v.rounding : Bn(t, 0, 8)) : (o = v.precision, t = v.rounding), !e.isFinite())
    c = $p(e);
  else {
    for (c = xn(e), i = c.indexOf("."), b ? (r = 2, n == 16 ? o = o * 4 - 3 : n == 8 && (o = o * 3 - 2)) : r = n, i >= 0 && (c = c.replace(".", ""), f = new v(1), f.e = c.length - i, f.d = br(xn(f), 10, r), f.e = f.d.length), d = br(c, 10, r), a = s = d.length; d[--s] == 0; )
      d.pop();
    if (!d[0])
      c = b ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = d, e.e = a, e = Xe(e, f, o, t, 0, r), d = e.d, a = e.e, u = pp), i = d[o], l = r / 2, u = u || d[o + 1] !== void 0, u = t < 4 ? (i !== void 0 || u) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : i > l || i === l && (t === 4 || u || t === 6 && d[o - 1] & 1 || t === (e.s < 0 ? 8 : 7)), d.length = o, u)
        for (; ++d[--o] > r - 1; )
          d[o] = 0, o || (++a, d.unshift(1));
      for (s = d.length; !d[s - 1]; --s)
        ;
      for (i = 0, c = ""; i < s; i++)
        c += il.charAt(d[i]);
      if (b) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              c += "0";
            for (d = br(c, r, n), s = d.length; !d[s - 1]; --s)
              ;
            for (i = 1, c = "1."; i < s; i++)
              c += il.charAt(d[i]);
          } else
            c = c.charAt(0) + "." + c.slice(1);
        c = c + (a < 0 ? "p" : "p+") + a;
      } else if (a < 0) {
        for (; ++a; )
          c = "0" + c;
        c = "0." + c;
      } else if (++a > s)
        for (a -= s; a--; )
          c += "0";
      else
        a < s && (c = c.slice(0, a) + "." + c.slice(a));
    }
    c = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + c;
  }
  return e.s < 0 ? "-" + c : c;
}
function Vu(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function c1(e) {
  return new this(e).abs();
}
function d1(e) {
  return new this(e).acos();
}
function f1(e) {
  return new this(e).acosh();
}
function p1(e, n) {
  return new this(e).plus(n);
}
function v1(e) {
  return new this(e).asin();
}
function m1(e) {
  return new this(e).asinh();
}
function h1(e) {
  return new this(e).atan();
}
function g1(e) {
  return new this(e).atanh();
}
function b1(e, n) {
  e = new this(e), n = new this(n);
  var o, t = this.precision, r = this.rounding, a = t + 4;
  return !e.s || !n.s ? o = new this(NaN) : !e.d && !n.d ? (o = qn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), o.s = e.s) : !n.d || e.isZero() ? (o = n.s < 0 ? qn(this, t, r) : new this(0), o.s = e.s) : !e.d || n.isZero() ? (o = qn(this, a, 1).times(0.5), o.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, o = this.atan(Xe(e, n, a, 1)), n = qn(this, a, 1), this.precision = t, this.rounding = r, o = e.s < 0 ? o.minus(n) : o.plus(n)) : o = this.atan(Xe(e, n, a, 1)), o;
}
function y1(e) {
  return new this(e).cbrt();
}
function k1(e) {
  return Ce(e = new this(e), e.e + 1, 2);
}
function $1(e, n, o) {
  return new this(e).clamp(n, o);
}
function w1(e) {
  if (!e || typeof e != "object")
    throw Error(ya + "Object expected");
  var n, o, t, r = e.defaults === !0, a = [
    "precision",
    1,
    Io,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Qo,
    0,
    "toExpPos",
    0,
    Qo,
    "maxE",
    0,
    Qo,
    "minE",
    -Qo,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (o = a[n], r && (this[o] = ll[o]), (t = e[o]) !== void 0)
      if (wn(t) === t && t >= a[n + 1] && t <= a[n + 2])
        this[o] = t;
      else
        throw Error(Oo + o + ": " + t);
  if (o = "crypto", r && (this[o] = ll[o]), (t = e[o]) !== void 0)
    if (t === !0 || t === !1 || t === 0 || t === 1)
      if (t)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[o] = !0;
        else
          throw Error(mp);
      else
        this[o] = !1;
    else
      throw Error(Oo + o + ": " + t);
  return this;
}
function C1(e) {
  return new this(e).cos();
}
function S1(e) {
  return new this(e).cosh();
}
function Cp(e) {
  var n, o, t;
  function r(a) {
    var i, l, s, u = this;
    if (!(u instanceof r))
      return new r(a);
    if (u.constructor = r, Lu(a)) {
      u.s = a.s, Be ? !a.d || a.e > r.maxE ? (u.e = NaN, u.d = null) : a.e < r.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (s = typeof a, s === "number") {
      if (a === 0) {
        u.s = 1 / a < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, u.s = -1) : u.s = 1, a === ~~a && a < 1e7) {
        for (i = 0, l = a; l >= 10; l /= 10)
          i++;
        Be ? i > r.maxE ? (u.e = NaN, u.d = null) : i < r.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [a]) : (u.e = i, u.d = [a]);
        return;
      } else if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return cl(u, a.toString());
    } else if (s !== "string")
      throw Error(Oo + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), gp.test(a) ? cl(u, a) : s1(u, a);
  }
  if (r.prototype = Z, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = w1, r.clone = Cp, r.isDecimal = Lu, r.abs = c1, r.acos = d1, r.acosh = f1, r.add = p1, r.asin = v1, r.asinh = m1, r.atan = h1, r.atanh = g1, r.atan2 = b1, r.cbrt = y1, r.ceil = k1, r.clamp = $1, r.cos = C1, r.cosh = S1, r.div = P1, r.exp = z1, r.floor = O1, r.hypot = T1, r.ln = E1, r.log = B1, r.log10 = D1, r.log2 = I1, r.max = M1, r.min = N1, r.mod = A1, r.mul = V1, r.pow = L1, r.random = R1, r.round = F1, r.sign = U1, r.sin = H1, r.sinh = Y1, r.sqrt = j1, r.sub = W1, r.sum = K1, r.tan = q1, r.tanh = G1, r.trunc = X1, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (t = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < t.length; )
      e.hasOwnProperty(o = t[n++]) || (e[o] = this[o]);
  return r.config(e), r;
}
function P1(e, n) {
  return new this(e).div(n);
}
function z1(e) {
  return new this(e).exp();
}
function O1(e) {
  return Ce(e = new this(e), e.e + 1, 3);
}
function T1() {
  var e, n, o = new this(0);
  for (Be = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      o.d && (o = o.plus(n.times(n)));
    else {
      if (n.s)
        return Be = !0, new this(1 / 0);
      o = n;
    }
  return Be = !0, o.sqrt();
}
function Lu(e) {
  return e instanceof $o || e && e.toStringTag === hp || !1;
}
function E1(e) {
  return new this(e).ln();
}
function B1(e, n) {
  return new this(e).log(n);
}
function I1(e) {
  return new this(e).log(2);
}
function D1(e) {
  return new this(e).log(10);
}
function M1() {
  return kp(this, arguments, "lt");
}
function N1() {
  return kp(this, arguments, "gt");
}
function A1(e, n) {
  return new this(e).mod(n);
}
function V1(e, n) {
  return new this(e).mul(n);
}
function L1(e, n) {
  return new this(e).pow(n);
}
function R1(e) {
  var n, o, t, r, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : Bn(e, 1, Io), t = Math.ceil(e / ze), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(t)); a < t; )
        r = n[a], r >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(t *= 4); a < t; )
        r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(r % 1e7), a += 4);
      a = t / 4;
    } else
      throw Error(mp);
  else
    for (; a < t; )
      l[a++] = Math.random() * 1e7 | 0;
  for (t = l[--a], e %= ze, t && e && (r = fn(10, ze - e), l[a] = (t / r | 0) * r); l[a] === 0; a--)
    l.pop();
  if (a < 0)
    o = 0, l = [0];
  else {
    for (o = -1; l[0] === 0; o -= ze)
      l.shift();
    for (t = 1, r = l[0]; r >= 10; r /= 10)
      t++;
    t < ze && (o -= ze - t);
  }
  return i.e = o, i.d = l, i;
}
function F1(e) {
  return Ce(e = new this(e), e.e + 1, this.rounding);
}
function U1(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function H1(e) {
  return new this(e).sin();
}
function Y1(e) {
  return new this(e).sinh();
}
function j1(e) {
  return new this(e).sqrt();
}
function W1(e, n) {
  return new this(e).sub(n);
}
function K1() {
  var e = 0, n = arguments, o = new this(n[e]);
  for (Be = !1; o.s && ++e < n.length; )
    o = o.plus(n[e]);
  return Be = !0, Ce(o, this.precision, this.rounding);
}
function q1(e) {
  return new this(e).tan();
}
function G1(e) {
  return new this(e).tanh();
}
function X1(e) {
  return Ce(e = new this(e), e.e + 1, 1);
}
Z[Symbol.for("nodejs.util.inspect.custom")] = Z.toString;
Z[Symbol.toStringTag] = "Decimal";
var $o = Z.constructor = Cp(ll);
Ir = new $o(Ir);
Dr = new $o(Dr);
const Sp = {
  modelValue: {
    type: [String, Number],
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
  rules: Array,
  onBeforeChange: L(),
  onChange: L(),
  onIncrement: L(),
  onDecrement: L(),
  "onUpdate:modelValue": L()
}, Ru = 100, Fu = 600, { name: Z1, n: J1, classes: Q1 } = ee("counter"), _1 = ["inputmode", "readonly", "disabled"];
function x1(e, n) {
  const o = _("var-icon"), t = _("var-button"), r = _("var-form-details");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      D(
        "div",
        je({
          class: e.classes(
            e.n("controller"),
            e.formatElevation(e.elevation, 2),
            [e.disabled || e.formDisabled, e.n("--disabled")],
            [e.errorMessage, e.n("--error")]
          ),
          style: { background: e.color }
        }, e.$attrs),
        [
          G(t, {
            class: p(
              e.classes(
                e.n("decrement-button"),
                [!e.decrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: K({
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
            default: fe(() => [
              G(o, { name: "minus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]),
          Ne(D("input", {
            class: p(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
            style: K({
              width: e.toSizeUnit(e.inputWidth),
              fontSize: e.toSizeUnit(e.inputTextSize)
            }),
            inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
            readonly: e.readonly || e.formReadonly,
            disabled: e.disabled || e.formDisabled || e.disableInput,
            "onUpdate:modelValue": n[0] || (n[0] = (a) => e.inputValue = a),
            onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
          }, null, 46, _1), [
            [kh, e.inputValue]
          ]),
          G(t, {
            class: p(
              e.classes(
                e.n("increment-button"),
                [!e.incrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: K({
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
            default: fe(() => [
              G(o, { name: "plus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"])
        ],
        16
        /* FULL_PROPS */
      ),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Pp = x({
  name: Z1,
  components: {
    VarButton: Pn,
    VarIcon: Je,
    VarFormDetails: En
  },
  directives: { Ripple: rn },
  inheritAttrs: !1,
  props: Sp,
  setup(e) {
    const n = k(""), { bindForm: o, form: t } = jn(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = Yn(), { readonly: s, disabled: u } = t ?? {}, c = I(() => {
      const { max: W, modelValue: ue } = e;
      return W != null && R(ue) >= R(W);
    }), d = I(() => {
      const { min: W, modelValue: ue } = e;
      return W != null && R(ue) <= R(W);
    });
    let f, v, b, m;
    P(o, {
      reset: g,
      validate: $,
      resetValidation: l
    }), ce(
      () => e.modelValue,
      (W) => {
        M(C(String(W))), P(e.onChange, R(W));
      }
    ), M(C(String(e.modelValue)));
    function $() {
      return i(e.rules, e.modelValue);
    }
    function w(W) {
      qe(() => {
        const { validateTrigger: ue, rules: Q, modelValue: pe } = e;
        a(ue, W, Q, pe);
      });
    }
    function g() {
      const { min: W } = e;
      P(e["onUpdate:modelValue"], W != null ? R(W) : 0), l();
    }
    function C(W) {
      const { decimalLength: ue, max: Q, min: pe } = e;
      let ke = R(W);
      return Q != null && ke > R(Q) && (ke = R(Q)), pe != null && ke < R(pe) && (ke = R(pe)), W = String(ke), ue != null && (W = ke.toFixed(R(ue))), W;
    }
    function z(W) {
      const { lazyChange: ue, onBeforeChange: Q } = e, { value: pe } = W.target, ke = C(pe);
      ue ? P(Q, R(ke), q) : M(ke), w("onInputChange");
    }
    function O() {
      const {
        disabled: W,
        readonly: ue,
        disableDecrement: Q,
        decrementButton: pe,
        lazyChange: ke,
        step: se,
        modelValue: U,
        onDecrement: J,
        onBeforeChange: te
      } = e;
      if (u != null && u.value || s != null && s.value || W || ue || Q || !pe || d.value)
        return;
      const he = new $o(R(U)).minus(new $o(R(se))).toString(), F = C(he), j = R(F);
      P(J, j), ke ? P(te, j, q) : (M(F), w("onDecrement"));
    }
    function A() {
      const {
        disabled: W,
        readonly: ue,
        disableIncrement: Q,
        incrementButton: pe,
        lazyChange: ke,
        step: se,
        modelValue: U,
        onIncrement: J,
        onBeforeChange: te
      } = e;
      if (u != null && u.value || s != null && s.value || W || ue || Q || !pe || c.value)
        return;
      const he = new $o(R(U)).plus(new $o(R(se))).toString(), F = C(he), j = R(F);
      P(J, j), ke ? P(te, j, q) : (M(F), w("onIncrement"));
    }
    function T() {
      const { press: W, lazyChange: ue } = e;
      !W || ue || (m = window.setTimeout(() => {
        Y();
      }, Fu));
    }
    function E() {
      const { press: W, lazyChange: ue } = e;
      !W || ue || (b = window.setTimeout(() => {
        H();
      }, Fu));
    }
    function B() {
      v && clearTimeout(v), m && clearTimeout(m);
    }
    function N() {
      f && clearTimeout(f), b && clearTimeout(b);
    }
    function H() {
      f = window.setTimeout(() => {
        A(), H();
      }, Ru);
    }
    function Y() {
      v = window.setTimeout(() => {
        O(), Y();
      }, Ru);
    }
    function M(W) {
      n.value = W;
      const ue = R(W);
      P(e["onUpdate:modelValue"], ue);
    }
    function q(W) {
      M(C(String(W))), w("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: s,
      isMax: c,
      isMin: d,
      n: J1,
      classes: Q1,
      formatElevation: pn,
      validate: $,
      reset: g,
      resetValidation: l,
      handleChange: z,
      decrement: O,
      increment: A,
      pressDecrement: T,
      pressIncrement: E,
      releaseDecrement: B,
      releaseIncrement: N,
      toSizeUnit: Oe,
      toNumber: R
    };
  }
});
Pp.render = x1;
var wa = Pp;
oe(wa);
le(wa, Sp);
const M5 = wa;
var dl = wa, zp = 60, Op = zp * 60, Tp = Op * 24, ek = Tp * 7, ut = 1e3, zi = zp * ut, Uu = Op * ut, nk = Tp * ut, ok = ek * ut, $s = "millisecond", _o = "second", xo = "minute", et = "hour", mo = "day", yr = "week", Kn = "month", Ep = "quarter", ho = "year", nt = "date", tk = "YYYY-MM-DDTHH:mm:ssZ", Hu = "Invalid Date", rk = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, ak = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const ik = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var fl = function(n, o, t) {
  var r = String(n);
  return !r || r.length >= o ? n : "" + Array(o + 1 - r.length).join(t) + n;
}, lk = function(n) {
  var o = -n.utcOffset(), t = Math.abs(o), r = Math.floor(t / 60), a = t % 60;
  return (o <= 0 ? "+" : "-") + fl(r, 2, "0") + ":" + fl(a, 2, "0");
}, sk = function e(n, o) {
  if (n.date() < o.date())
    return -e(o, n);
  var t = (o.year() - n.year()) * 12 + (o.month() - n.month()), r = n.clone().add(t, Kn), a = o - r < 0, i = n.clone().add(t + (a ? -1 : 1), Kn);
  return +(-(t + (o - r) / (a ? r - i : i - r)) || 0);
}, uk = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, ck = function(n) {
  var o = {
    M: Kn,
    y: ho,
    w: yr,
    d: mo,
    D: nt,
    h: et,
    m: xo,
    s: _o,
    ms: $s,
    Q: Ep
  };
  return o[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, dk = function(n) {
  return n === void 0;
};
const fk = {
  s: fl,
  z: lk,
  m: sk,
  a: uk,
  p: ck,
  u: dk
};
var St = "en", Lo = {};
Lo[St] = ik;
var ws = function(n) {
  return n instanceof Ca;
}, Nr = function e(n, o, t) {
  var r;
  if (!n)
    return St;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    Lo[a] && (r = a), o && (Lo[a] = o, r = a);
    var i = n.split("-");
    if (!r && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    Lo[l] = n, r = l;
  }
  return !t && r && (St = r), r || !t && St;
}, ie = function(n, o) {
  if (ws(n))
    return n.clone();
  var t = typeof o == "object" ? o : {};
  return t.date = n, t.args = arguments, new Ca(t);
}, pk = function(n, o) {
  return ie(n, {
    locale: o.$L,
    utc: o.$u,
    x: o.$x,
    $offset: o.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ge = fk;
Ge.l = Nr;
Ge.i = ws;
Ge.w = pk;
var vk = function(n) {
  var o = n.date, t = n.utc;
  if (o === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Ge.u(o))
    return /* @__PURE__ */ new Date();
  if (o instanceof Date)
    return new Date(o);
  if (typeof o == "string" && !/Z$/i.test(o)) {
    var r = o.match(rk);
    if (r) {
      var a = r[2] - 1 || 0, i = (r[7] || "0").substring(0, 3);
      return t ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
    }
  }
  return new Date(o);
}, Ca = /* @__PURE__ */ function() {
  function e(o) {
    this.$L = Nr(o.locale, null, !0), this.parse(o);
  }
  var n = e.prototype;
  return n.parse = function(t) {
    this.$d = vk(t), this.$x = t.x || {}, this.init();
  }, n.init = function() {
    var t = this.$d;
    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
  }, n.$utils = function() {
    return Ge;
  }, n.isValid = function() {
    return this.$d.toString() !== Hu;
  }, n.isSame = function(t, r) {
    var a = ie(t);
    return this.startOf(r) <= a && a <= this.endOf(r);
  }, n.isAfter = function(t, r) {
    return ie(t) < this.startOf(r);
  }, n.isBefore = function(t, r) {
    return this.endOf(r) < ie(t);
  }, n.$g = function(t, r, a) {
    return Ge.u(t) ? this[r] : this.set(a, t);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(t, r) {
    var a = this, i = Ge.u(r) ? !0 : r, l = Ge.p(t), s = function($, w) {
      var g = Ge.w(a.$u ? Date.UTC(a.$y, w, $) : new Date(a.$y, w, $), a);
      return i ? g : g.endOf(mo);
    }, u = function($, w) {
      var g = [0, 0, 0, 0], C = [23, 59, 59, 999];
      return Ge.w(a.toDate()[$].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? g : C).slice(w)
      ), a);
    }, c = this.$W, d = this.$M, f = this.$D, v = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case ho:
        return i ? s(1, 0) : s(31, 11);
      case Kn:
        return i ? s(1, d) : s(0, d + 1);
      case yr: {
        var b = this.$locale().weekStart || 0, m = (c < b ? c + 7 : c) - b;
        return s(i ? f - m : f + (6 - m), d);
      }
      case mo:
      case nt:
        return u(v + "Hours", 0);
      case et:
        return u(v + "Minutes", 1);
      case xo:
        return u(v + "Seconds", 2);
      case _o:
        return u(v + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(t) {
    return this.startOf(t, !1);
  }, n.$set = function(t, r) {
    var a, i = Ge.p(t), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[mo] = l + "Date", a[nt] = l + "Date", a[Kn] = l + "Month", a[ho] = l + "FullYear", a[et] = l + "Hours", a[xo] = l + "Minutes", a[_o] = l + "Seconds", a[$s] = l + "Milliseconds", a)[i], u = i === mo ? this.$D + (r - this.$W) : r;
    if (i === Kn || i === ho) {
      var c = this.clone().set(nt, 1);
      c.$d[s](u), c.init(), this.$d = c.set(nt, Math.min(this.$D, c.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(t, r) {
    return this.clone().$set(t, r);
  }, n.get = function(t) {
    return this[Ge.p(t)]();
  }, n.add = function(t, r) {
    var a = this, i;
    t = Number(t);
    var l = Ge.p(r), s = function(f) {
      var v = ie(a);
      return Ge.w(v.date(v.date() + Math.round(f * t)), a);
    };
    if (l === Kn)
      return this.set(Kn, this.$M + t);
    if (l === ho)
      return this.set(ho, this.$y + t);
    if (l === mo)
      return s(1);
    if (l === yr)
      return s(7);
    var u = (i = {}, i[xo] = zi, i[et] = Uu, i[_o] = ut, i)[l] || 1, c = this.$d.getTime() + t * u;
    return Ge.w(c, this);
  }, n.subtract = function(t, r) {
    return this.add(t * -1, r);
  }, n.format = function(t) {
    var r = this, a = this.$locale();
    if (!this.isValid())
      return a.invalidDate || Hu;
    var i = t || tk, l = Ge.z(this), s = this.$H, u = this.$m, c = this.$M, d = a.weekdays, f = a.months, v = a.meridiem, b = function(g, C, z, O) {
      return g && (g[C] || g(r, i)) || z[C].slice(0, O);
    }, m = function(g) {
      return Ge.s(s % 12 || 12, g, "0");
    }, y = v || function(w, g, C) {
      var z = w < 12 ? "AM" : "PM";
      return C ? z.toLowerCase() : z;
    }, $ = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: c + 1,
      MM: Ge.s(c + 1, 2, "0"),
      MMM: b(a.monthsShort, c, f, 3),
      MMMM: b(f, c),
      D: this.$D,
      DD: Ge.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: b(a.weekdaysMin, this.$W, d, 2),
      ddd: b(a.weekdaysShort, this.$W, d, 3),
      dddd: d[this.$W],
      H: String(s),
      HH: Ge.s(s, 2, "0"),
      h: m(1),
      hh: m(2),
      a: y(s, u, !0),
      A: y(s, u, !1),
      m: String(u),
      mm: Ge.s(u, 2, "0"),
      s: String(this.$s),
      ss: Ge.s(this.$s, 2, "0"),
      SSS: Ge.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(ak, function(w, g) {
      return g || $[w] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(t, r, a) {
    var i, l = Ge.p(r), s = ie(t), u = (s.utcOffset() - this.utcOffset()) * zi, c = this - s, d = Ge.m(this, s);
    return d = (i = {}, i[ho] = d / 12, i[Kn] = d, i[Ep] = d / 3, i[yr] = (c - u) / ok, i[mo] = (c - u) / nk, i[et] = c / Uu, i[xo] = c / zi, i[_o] = c / ut, i)[l] || c, a ? d : Ge.a(d);
  }, n.daysInMonth = function() {
    return this.endOf(Kn).$D;
  }, n.$locale = function() {
    return Lo[this.$L];
  }, n.locale = function(t, r) {
    if (!t)
      return this.$L;
    var a = this.clone(), i = Nr(t, r, !0);
    return i && (a.$L = i), a;
  }, n.clone = function() {
    return Ge.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), Bp = Ca.prototype;
ie.prototype = Bp;
[["$ms", $s], ["$s", _o], ["$m", xo], ["$H", et], ["$W", mo], ["$M", Kn], ["$y", ho], ["$D", nt]].forEach(function(e) {
  Bp[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ie.extend = function(e, n) {
  return e.$i || (e(n, Ca, ie), e.$i = !0), ie;
};
ie.locale = Nr;
ie.isDayjs = ws;
ie.unix = function(e) {
  return ie(e * 1e3);
};
ie.en = Lo[St];
ie.Ls = Lo;
ie.p = {};
const Ip = function(e, n) {
  n.prototype.isSameOrBefore = function(o, t) {
    return this.isSame(o, t) || this.isBefore(o, t);
  };
}, Dp = function(e, n) {
  n.prototype.isSameOrAfter = function(o, t) {
    return this.isSame(o, t) || this.isAfter(o, t);
  };
}, kr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], Ct = ["0", "1", "2", "3", "4", "5", "6"], Mp = {
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
  onPreview: L(),
  onChange: L(),
  "onUpdate:modelValue": L()
}, { n: mk } = ee("date-picker-header");
function hk(e, n) {
  const o = _("var-icon"), t = _("var-button");
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      G(t, {
        class: p(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (r) => e.checkDate("prev"))
      }, {
        default: fe(() => [
          G(o, { name: "chevron-left" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class", "disabled"]),
      D(
        "div",
        {
          class: p(e.n("value")),
          onClick: n[1] || (n[1] = (r) => e.$emit("check-panel"))
        },
        [
          G(_e, {
            name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: fe(() => [
              (h(), S(
                "div",
                { key: e.showDate },
                re(e.showDate),
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
      G(t, {
        class: p(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (r) => e.checkDate("next"))
      }, {
        default: fe(() => [
          G(o, { name: "chevron-right" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class", "disabled"])
    ],
    2
    /* CLASS */
  );
}
const Np = x({
  name: "PanelHeader",
  components: {
    VarButton: Pn,
    VarIcon: Je
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
    const o = k(!1), t = k(0), { t: r } = ao(), a = I(() => {
      var l;
      const { date: s, type: u } = e, { previewMonth: c, previewYear: d } = s;
      if (u === "year")
        return d;
      if (u === "month")
        return R(d) + t.value;
      const f = (l = (r || an)("datePickerMonthDict")) == null ? void 0 : l[c].name;
      return (r || an)("lang") === "zh-CN" ? `${d} ${f}` : `${f} ${d}`;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (n("check-date", l), o.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return ce(
      () => e.date,
      () => {
        t.value = 0;
      }
    ), {
      n: mk,
      reverse: o,
      showDate: a,
      checkDate: i
    };
  }
});
Np.render = hk;
var Cs = Np, gk = Object.defineProperty, Yu = Object.getOwnPropertySymbols, bk = Object.prototype.hasOwnProperty, yk = Object.prototype.propertyIsEnumerable, ju = (e, n, o) => n in e ? gk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, kk = (e, n) => {
  for (var o in n || (n = {}))
    bk.call(n, o) && ju(e, o, n[o]);
  if (Yu)
    for (var o of Yu(n))
      yk.call(n, o) && ju(e, o, n[o]);
  return e;
};
ie.extend(Ip);
ie.extend(Dp);
const { n: ar, classes: $k } = ee("month-picker"), { n: ir } = ee("date-picker");
function wk(e, n) {
  const o = _("panel-header"), t = _("var-button");
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      D(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          G(o, {
            ref: "headerEl",
            type: "month",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickYear,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          G(_e, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: fe(() => [
              (h(), S("ul", { key: e.panelKey }, [
                (h(!0), S(
                  Ve,
                  null,
                  Ze(e.MONTH_LIST, (r) => (h(), S("li", { key: r }, [
                    G(t, je({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation
                    }, kk({}, e.buttonProps(r)), {
                      onClick: (a) => e.chooseMonth(r, a)
                    }), {
                      default: fe(() => [
                        De(
                          re(e.getMonthAbbr(r)),
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
const Ap = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: Pn,
    PanelHeader: Cs
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
    const [o, t] = e.current.split("-"), r = k(!1), a = k(0), i = k(null), l = Qe({
      left: !1,
      right: !1
    }), { t: s } = ao(), u = I(() => e.choose.chooseYear === e.preview.previewYear), c = I(() => e.preview.previewYear === o), d = (w) => {
      var g, C;
      return (C = (g = (s || an)("datePickerMonthDict")) == null ? void 0 : g[w].abbr) != null ? C : "";
    }, f = (w) => {
      const {
        preview: { previewYear: g },
        componentProps: { min: C, max: z }
      } = e;
      let O = !0, A = !0;
      const T = `${g}-${w}`;
      return z && (O = ie(T).isSameOrBefore(ie(z), "month")), C && (A = ie(T).isSameOrAfter(ie(C), "month")), O && A;
    }, v = (w) => {
      const {
        choose: { chooseMonths: g, chooseDays: C, chooseRangeMonth: z },
        componentProps: { type: O, range: A }
      } = e;
      if (A) {
        if (!z.length)
          return !1;
        const T = ie(w).isSameOrBefore(ie(z[1]), "month"), E = ie(w).isSameOrAfter(ie(z[0]), "month");
        return T && E;
      }
      return O === "month" ? g.includes(w) : C.some((T) => T.includes(w));
    }, b = (w) => {
      const {
        choose: { chooseMonth: g },
        preview: { previewYear: C },
        componentProps: { allowedDates: z, color: O, multiple: A, range: T }
      } = e, E = `${C}-${w}`, B = () => T || A ? v(E) : g === w && u.value, H = (() => f(w) ? z ? !z(E) : !1 : !0)(), Y = () => H ? !0 : T || A ? !v(E) : !u.value || g !== w, M = () => c.value && t === w && e.componentProps.showCurrent ? (T || A || u.value) && H ? !0 : T || A ? !v(E) : u.value ? g !== t : !0 : !1, q = () => H ? "" : M() ? O ?? "" : B() ? "" : `${ir()}-color-cover`, W = q().startsWith(ir());
      return {
        outline: M(),
        text: Y(),
        color: Y() ? "" : O,
        textColor: W ? "" : q(),
        [`${ir()}-color-cover`]: W,
        class: $k(ar("button"), [H, ar("button--disabled")]),
        disabled: H
      };
    }, m = (w, g) => {
      g.currentTarget.classList.contains(ar("button--disabled")) || n("choose-month", w);
    }, y = (w) => {
      r.value = w === "prev", a.value += w === "prev" ? -1 : 1, n("check-preview", "year", w);
    }, $ = (w) => {
      i.value.checkDate(w);
    };
    return ce(
      () => e.preview.previewYear,
      (w) => {
        const {
          componentProps: { min: g, max: C }
        } = e;
        C && (l.right = !ie(`${R(w) + 1}`).isSameOrBefore(ie(C), "year")), g && (l.left = !ie(`${R(w) - 1}`).isSameOrAfter(ie(g), "year"));
      },
      { immediate: !0 }
    ), {
      n: ar,
      nDate: ir,
      t: an,
      MONTH_LIST: kr,
      headerEl: i,
      reverse: r,
      panelKey: a,
      panelBtnDisabled: l,
      forwardRef: $,
      buttonProps: b,
      getMonthAbbr: d,
      chooseMonth: m,
      checkDate: y
    };
  }
});
Ap.render = wk;
var Ck = Ap;
const Pt = {
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
  onScroll: L()
};
var Wu = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: Sk, n: Pk, classes: zk } = ee("sticky");
function Ok(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: K({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [
      D(
        "div",
        {
          class: p(e.n("wrapper")),
          ref: "wrapperEl",
          style: K({
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
const Vp = x({
  name: Sk,
  props: Pt,
  setup(e) {
    const n = k(null), o = k(null), t = k(!1), r = k("0px"), a = k("0px"), i = k("auto"), l = k("auto"), s = k("auto"), u = k("auto"), c = I(() => !e.disabled && e.cssMode), d = I(() => !e.disabled && !e.cssMode && t.value), f = I(() => nn(e.offsetTop));
    let v;
    ce(() => e.disabled, w), vn(() => Wu(this, null, function* () {
      yield $n(), m(), y();
    })), Gt($), ro(w), Ke(() => window, "scroll", y);
    function b() {
      const { cssMode: g, disabled: C } = e;
      if (C)
        return;
      let z = 0;
      if (v && v !== window) {
        const { top: N } = sn(v);
        z = N;
      }
      const O = o.value, A = n.value, { top: T, left: E } = sn(A), B = T - z;
      return B <= f.value ? (g || (i.value = `${A.offsetWidth}px`, l.value = `${A.offsetHeight}px`, r.value = `${z + f.value}px`, a.value = `${E}px`, s.value = `${O.offsetWidth}px`, u.value = `${O.offsetHeight}px`, t.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (t.value = !1, {
        offsetTop: B,
        isFixed: !1
      });
    }
    function m() {
      v = zo(n.value), v !== window && v.addEventListener("scroll", y);
    }
    function y() {
      const g = b();
      g && P(e.onScroll, g.offsetTop, g.isFixed);
    }
    function $() {
      !v || v === window || v.removeEventListener("scroll", y);
    }
    function w() {
      return Wu(this, null, function* () {
        t.value = !1, yield gr(), b();
      });
    }
    return {
      stickyEl: n,
      wrapperEl: o,
      isFixed: t,
      offsetTop: f,
      fixedTop: r,
      fixedLeft: a,
      fixedWidth: i,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: c,
      enableFixedMode: d,
      n: Pk,
      classes: zk,
      resize: w,
      toNumber: R
    };
  }
});
Vp.render = Ok;
var Sa = Vp;
oe(Sa);
le(Sa, Pt);
const N5 = Sa;
var ct = Sa, Tk = Object.defineProperty, Ku = Object.getOwnPropertySymbols, Ek = Object.prototype.hasOwnProperty, Bk = Object.prototype.propertyIsEnumerable, qu = (e, n, o) => n in e ? Tk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ik = (e, n) => {
  for (var o in n || (n = {}))
    Ek.call(n, o) && qu(e, o, n[o]);
  if (Ku)
    for (var o of Ku(n))
      Bk.call(n, o) && qu(e, o, n[o]);
  return e;
};
const { n: lr, classes: Gu } = ee("year-picker"), { n: sr } = ee("date-picker");
function Dk(e, n) {
  const o = _("panel-header"), t = _("var-sticky"), r = _("var-button");
  return h(), S("div", null, [
    G(t, { "css-mode": "" }, {
      default: fe(() => [
        G(o, {
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
    G(_e, {
      name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
    }, {
      default: fe(() => [
        (h(), S(
          "ul",
          {
            ref: "panel",
            class: p(e.n()),
            key: e.panelKey
          },
          [
            (h(!0), S(
              Ve,
              null,
              Ze(e.yearList, (a) => (h(), S("li", { key: a }, [
                G(r, je({
                  type: "primary",
                  "var-year-picker-cover": "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, Ik({}, e.buttonProps(`${a}`)), {
                  onClick: (i) => e.chooseYear(a, i)
                }), {
                  default: fe(() => [
                    De(
                      re(a),
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
const Lp = x({
  name: "YearPickerPanel",
  components: {
    VarButton: Pn,
    VarSticky: ct,
    PanelHeader: Cs
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
    const [o] = e.current.split("-"), t = k(), r = k(null), a = k(!1), i = k(0), l = k(0), s = Qe({
      left: !1,
      right: !1
    }), u = I(() => {
      if (!e.preview)
        return [];
      const $ = Math.floor(R(e.preview) / 100 + l.value) * 100;
      return Array.from(Array(100), (w, g) => Math.max(0, $) + g);
    }), c = ($) => {
      const {
        choose: { chooseMonths: w, chooseDays: g, chooseYears: C, chooseRangeYear: z },
        componentProps: { type: O, range: A }
      } = e;
      if (A) {
        if (!z.length)
          return !1;
        const T = ie($).isSameOrBefore(ie(z[1]), "year"), E = ie($).isSameOrAfter(ie(z[0]), "year");
        return T && E;
      }
      return O === "year" ? C.includes($) : O === "month" ? w.some((T) => T.includes($)) : g.some((T) => T.includes($));
    }, d = ($) => {
      const {
        componentProps: { min: w, max: g }
      } = e, C = g ? ie($).isSameOrBefore(ie(g), "year") : !0, z = w ? ie($).isSameOrAfter(ie(w), "year") : !0;
      return C && z;
    }, f = ($) => {
      const {
        choose: { chooseYear: w },
        componentProps: { allowedDates: g, color: C, multiple: z, range: O }
      } = e, A = () => O || z ? c($) : w === $, E = (() => d($) ? g ? !g($) : !1 : !0)(), B = () => E ? !0 : O || z ? !c($) : w !== $, N = () => o === $ && e.componentProps.showCurrent ? (O || z) && E ? !0 : O || z ? !c($) : w !== o : !1, H = () => E ? "" : N() ? C ?? "" : A() ? "" : `${sr()}-color-cover`, Y = H().startsWith(sr());
      return {
        outline: N(),
        text: B(),
        color: B() ? "" : C,
        textColor: Y ? "" : H(),
        [`${sr()}-color-cover`]: Y,
        class: Gu(lr("button"), [E, lr("button--disabled")]),
        disabled: E
      };
    }, v = ($, w) => {
      w.currentTarget.classList.contains(lr("button--disabled")) || n("choose-year", $);
    }, b = () => {
      var $;
      const w = ($ = t.value.querySelector(".var-button--primary")) != null ? $ : t.value.querySelector(".var-button--outline");
      w == null || w.scrollIntoView({
        block: "center"
      });
    }, m = ($) => {
      const w = $ === "prev";
      a.value = w, i.value += w ? -1 : 1, l.value += w ? -1 : 1;
    }, y = ($) => {
      r.value.checkDate($);
    };
    return vn(b), ce(
      () => e.preview,
      () => {
        l.value = 0;
      }
    ), ce(
      u,
      ($) => {
        const {
          componentProps: { min: w, max: g }
        } = e;
        g && (s.right = !ie(`${R($[$.length - 1])}`).isSameOrBefore(ie(g), "year")), w && (s.left = !ie(`${R($[0])}`).isSameOrAfter(ie(w), "year")), R($[0] <= 0) && (s.left = !1);
      },
      {
        immediate: !0
      }
    ), {
      n: lr,
      classes: Gu,
      buttonProps: f,
      panel: t,
      headerEl: r,
      yearList: u,
      reverse: a,
      panelKey: i,
      panelBtnDisabled: s,
      nDate: sr,
      checkDate: m,
      chooseYear: v,
      forwardRef: y,
      toNumber: R
    };
  }
});
Lp.render = Dk;
var Mk = Lp, Nk = Object.defineProperty, Xu = Object.getOwnPropertySymbols, Ak = Object.prototype.hasOwnProperty, Vk = Object.prototype.propertyIsEnumerable, Zu = (e, n, o) => n in e ? Nk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Lk = (e, n) => {
  for (var o in n || (n = {}))
    Ak.call(n, o) && Zu(e, o, n[o]);
  if (Xu)
    for (var o of Xu(n))
      Vk.call(n, o) && Zu(e, o, n[o]);
  return e;
};
ie.extend(Ip);
ie.extend(Dp);
const { n: Xo, classes: Rk } = ee("day-picker"), { n: ur } = ee("date-picker");
function Fk(e, n) {
  const o = _("panel-header"), t = _("var-button");
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      D(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          G(o, {
            ref: "headerEl",
            type: "day",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickMonth,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          G(_e, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: fe(() => [
              (h(), S("div", { key: e.panelKey }, [
                D(
                  "ul",
                  {
                    class: p(e.n("head"))
                  },
                  [
                    (h(!0), S(
                      Ve,
                      null,
                      Ze(e.sortWeekList, (r) => (h(), S(
                        "li",
                        { key: r },
                        re(e.getDayAbbr(r)),
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
                D(
                  "ul",
                  {
                    class: p(e.n("body"))
                  },
                  [
                    (h(!0), S(
                      Ve,
                      null,
                      Ze(e.days, (r, a) => (h(), S("li", { key: a }, [
                        G(t, je({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation
                        }, Lk({}, e.buttonProps(r)), {
                          onClick: (i) => e.chooseDay(r, i)
                        }), {
                          default: fe(() => [
                            De(
                              re(e.filterDay(r)),
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
const Rp = x({
  name: "DayPickerPanel",
  components: {
    VarButton: Pn,
    PanelHeader: Cs
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
    const [o, t, r] = e.current.split("-"), a = k([]), i = k(!1), l = k(0), s = k(null), u = Qe({
      left: !1,
      right: !1
    }), { t: c } = ao(), d = I(
      () => e.preview.previewYear === o && e.preview.previewMonth === t
    ), f = I(
      () => e.choose.chooseYear === e.preview.previewYear && e.choose.chooseMonth === e.preview.previewMonth
    ), v = I(() => {
      const T = Ct.findIndex((E) => E === e.componentProps.firstDayOfWeek);
      return T === -1 || T === 0 ? Ct : [...Ct.slice(T), ...Ct.slice(0, T)];
    }), b = (T) => {
      var E, B;
      return (B = (E = (c || an)("datePickerWeekDict")) == null ? void 0 : E[T].abbr) != null ? B : "";
    }, m = (T) => T > 0 ? T : "", y = () => {
      const {
        preview: { previewMonth: T, previewYear: E }
      } = e, B = ie(`${E}-${T}`).daysInMonth(), N = ie(`${E}-${T}-01`).day(), H = v.value.findIndex((Y) => Y === `${N}`);
      a.value = [...Array(H).fill(-1), ...Array.from(Array(B + 1).keys())].filter((Y) => Y);
    }, $ = () => {
      const {
        preview: { previewYear: T, previewMonth: E },
        componentProps: { max: B, min: N }
      } = e;
      if (B) {
        const H = `${T}-${R(E) + 1}`;
        u.right = !ie(H).isSameOrBefore(ie(B), "month");
      }
      if (N) {
        const H = `${T}-${R(E) - 1}`;
        u.left = !ie(H).isSameOrAfter(ie(N), "month");
      }
    }, w = (T) => {
      const {
        preview: { previewYear: E, previewMonth: B },
        componentProps: { min: N, max: H }
      } = e;
      let Y = !0, M = !0;
      const q = `${E}-${B}-${T}`;
      return H && (Y = ie(q).isSameOrBefore(ie(H), "day")), N && (M = ie(q).isSameOrAfter(ie(N), "day")), Y && M;
    }, g = (T) => {
      const {
        choose: { chooseDays: E, chooseRangeDay: B },
        componentProps: { range: N }
      } = e;
      if (N) {
        if (!B.length)
          return !1;
        const H = ie(T).isSameOrBefore(ie(B[1]), "day"), Y = ie(T).isSameOrAfter(ie(B[0]), "day");
        return H && Y;
      }
      return E.includes(T);
    }, C = (T) => {
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
        preview: { previewYear: B, previewMonth: N },
        componentProps: { allowedDates: H, color: Y, multiple: M, range: q }
      } = e, W = `${B}-${N}-${T}`, ue = () => q || M ? g(W) : R(E) === T && f.value, pe = (() => w(T) ? H ? !H(W) : !1 : !0)(), ke = () => pe ? !0 : q || M ? !g(W) : !f.value || R(E) !== T, se = () => d.value && R(r) === T && e.componentProps.showCurrent ? (q || M || f.value) && pe ? !0 : q || M ? !g(W) : f.value ? E !== r : !0 : !1, U = () => pe ? "" : se() ? Y ?? "" : ue() ? "" : `${ur()}-color-cover`, J = U().startsWith(ur());
      return {
        text: ke(),
        outline: se(),
        textColor: J ? "" : U(),
        [`${ur()}-color-cover`]: J,
        class: Rk(Xo("button"), Xo("button--usable"), [pe, Xo("button--disabled")]),
        disabled: pe
      };
    }, z = (T) => {
      i.value = T === "prev", l.value += T === "prev" ? -1 : 1, n("check-preview", "month", T);
    }, O = (T, E) => {
      E.currentTarget.classList.contains(Xo("button--disabled")) || n("choose-day", T);
    }, A = (T) => {
      s.value.checkDate(T);
    };
    return vn(() => {
      y(), $();
    }), ce(
      () => e.preview,
      () => {
        y(), $();
      }
    ), {
      n: Xo,
      nDate: ur,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: v,
      panelBtnDisabled: u,
      forwardRef: A,
      filterDay: m,
      getDayAbbr: b,
      checkDate: z,
      chooseDay: O,
      buttonProps: C
    };
  }
});
Rp.render = Fk;
var Uk = Rp, Hk = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: Yk, n: jk, classes: Wk } = ee("date-picker");
function Kk(e, n) {
  var o;
  const t = _("year-picker-panel"), r = _("month-picker-panel"), a = _("day-picker-panel");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      D(
        "div",
        {
          class: p(e.n("title")),
          style: K({ background: e.titleColor || e.color })
        },
        [
          D(
            "div",
            {
              class: p(e.n("title-select"))
            },
            [
              D(
                "div",
                {
                  class: p(e.n("title-hint"))
                },
                re((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("datePickerHint")),
                3
                /* TEXT, CLASS */
              ),
              e.type !== "year" ? (h(), S(
                "div",
                {
                  key: 0,
                  class: p(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
                  onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
                },
                [
                  V(e.$slots, "year", { year: e.chooseYear }, () => [
                    De(
                      re(e.chooseYear),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )) : X("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          D(
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
              G(_e, {
                name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey`
              }, {
                default: fe(() => [
                  e.type === "year" ? (h(), S("div", {
                    key: `${e.chooseYear}`
                  }, [
                    e.range ? V(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeYear
                    }, () => [
                      De(
                        re(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? V(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseYears
                    }, () => [
                      De(
                        re(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : V(e.$slots, "year", {
                      key: 2,
                      year: e.chooseYear
                    }, () => [
                      De(
                        re(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : e.type === "month" ? (h(), S("div", {
                    key: `${e.chooseYear}${e.chooseMonth}`
                  }, [
                    e.range ? V(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeMonth
                    }, () => [
                      De(
                        re(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? V(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseMonths
                    }, () => [
                      De(
                        re(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : V(e.$slots, "month", {
                      key: 2,
                      month: e.chooseMonth,
                      year: e.chooseYear
                    }, () => [
                      De(
                        re(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : (h(), S("div", {
                    key: `${e.chooseYear}${e.chooseMonth}${e.chooseDay}`
                  }, [
                    e.range ? V(e.$slots, "range", {
                      key: 0,
                      choose: e.formatRange
                    }, () => [
                      De(
                        re(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? V(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseDays
                    }, () => [
                      De(
                        re(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : V(e.$slots, "date", wo(je({ key: 2 }, e.slotProps)), () => [
                      De(
                        re(e.getDateTitle),
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
      D(
        "div",
        {
          class: p(e.n("body")),
          onTouchstart: n[2] || (n[2] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
          onTouchmove: n[3] || (n[3] = (...i) => e.handleTouchmove && e.handleTouchmove(...i)),
          onTouchend: n[4] || (n[4] = (...i) => e.handleTouchend && e.handleTouchend(...i))
        },
        [
          G(_e, {
            name: `${e.n()}-panel-fade`
          }, {
            default: fe(() => [
              e.getPanelType === "year" ? (h(), Pe(t, {
                key: 0,
                ref: "yearPanelEl",
                choose: e.getChoose,
                current: e.currentDate,
                "component-props": e.componentProps,
                preview: e.previewYear,
                onChooseYear: e.getChooseYear
              }, null, 8, ["choose", "current", "component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (h(), Pe(r, {
                key: 1,
                ref: "monthPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "click-year": () => e.clickEl("year"),
                "component-props": e.componentProps,
                onChooseMonth: e.getChooseMonth,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (h(), Pe(a, {
                key: 2,
                ref: "dayPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "component-props": e.componentProps,
                "click-month": () => e.clickEl("month"),
                onChooseDay: e.getChooseDay,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : X("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        34
        /* CLASS, NEED_HYDRATION */
      ),
      e.$slots.actions ? (h(), S(
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
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Fp = x({
  name: Yk,
  components: {
    MonthPickerPanel: Ck,
    YearPickerPanel: Mk,
    DayPickerPanel: Uk
  },
  props: Mp,
  setup(e) {
    const { t: n } = ao(), o = ie().format("YYYY-MM-D"), [t, r] = o.split("-"), a = kr.find((ne) => ne === r), i = k(!1), l = k(!1), s = k(!0), u = k(), c = k(), d = k(), f = k(a), v = k(t), b = k(!1), m = k([]), y = k([]), $ = k([]), w = k([]), g = k([]), C = k([]), z = k(null), O = k(null), A = k(null), T = Qe({
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
    }), E = I(() => ({
      chooseMonth: u.value,
      chooseYear: c.value,
      chooseDay: d.value,
      chooseYears: m.value,
      chooseMonths: y.value,
      chooseDays: $.value,
      chooseRangeYear: w.value,
      chooseRangeMonth: g.value,
      chooseRangeDay: C.value
    })), B = I(() => ({
      previewMonth: f.value,
      previewYear: v.value
    })), N = I(() => {
      var ne;
      const { multiple: we, range: Ee } = e;
      return Ee ? w.value.length ? `${w.value[0]} ~ ${w.value[1]}` : "" : we ? `${m.value.length}${(n || an)("datePickerSelected")}` : (ne = c.value) != null ? ne : "";
    }), H = I(() => {
      var ne, we;
      const { multiple: Ee, range: Ue } = e;
      if (Ue)
        return g.value.length ? `${g.value[0]} ~ ${g.value[1]}` : "";
      let Re = "";
      return u.value && (Re = (we = (ne = (n || an)("datePickerMonthDict")) == null ? void 0 : ne[u.value].name) != null ? we : ""), Ee ? `${y.value.length}${(n || an)("datePickerSelected")}` : Re;
    }), Y = I(() => {
      var ne, we, Ee, Ue;
      const { multiple: Re, range: un } = e;
      if (un) {
        const kt = C.value.map((vh) => ie(vh).format("YYYY-MM-DD"));
        return kt.length ? `${kt[0]} ~ ${kt[1]}` : "";
      }
      if (Re)
        return `${$.value.length}${(n || an)("datePickerSelected")}`;
      if (!c.value || !u.value || !d.value)
        return "";
      const mn = ie(`${c.value}-${u.value}-${d.value}`).day(), kn = Ct.find((kt) => kt === `${mn}`), Ao = (we = (ne = (n || an)("datePickerWeekDict")) == null ? void 0 : ne[kn].name) != null ? we : "", fh = (Ue = (Ee = (n || an)("datePickerMonthDict")) == null ? void 0 : Ee[u.value].name) != null ? Ue : "", ph = Fo(d.value, 2, "0");
      return (n || an)("lang") === "zh-CN" ? `${u.value}-${ph} ${Ao.slice(0, 3)}` : `${Ao.slice(0, 3)}, ${fh.slice(0, 3)} ${d.value}`;
    }), M = I(() => e.type === "year" || i.value ? "year" : e.type === "month" || l.value ? "month" : e.type === "date" ? "date" : ""), q = I(() => !e.touchable || !M.value), W = I(() => {
      var ne, we;
      const Ee = ie(`${c.value}-${u.value}-${d.value}`).day(), Ue = d.value ? Fo(d.value, 2, "0") : "";
      return {
        week: `${Ee}`,
        year: (ne = c.value) != null ? ne : "",
        month: (we = u.value) != null ? we : "",
        date: Ue
      };
    }), ue = I(
      () => E.value.chooseRangeDay.map((ne) => ie(ne).format("YYYY-MM-DD"))
    ), Q = I(() => c.value === v.value), pe = I(() => u.value === f.value);
    let ke = 0, se = 0, U = "", J;
    ce(
      () => e.modelValue,
      (ne) => {
        if (!(!on() || ae(ne) || !ne))
          if (e.range) {
            if (!Ye(ne))
              return;
            s.value = ne.length !== 1, me(ne, e.type);
          } else if (e.multiple) {
            if (!Ye(ne))
              return;
            $e(ne, e.type);
          } else
            Ae(ne);
      },
      { immediate: !0 }
    ), ce(M, en);
    function te(ne) {
      ne === "year" ? i.value = !0 : ne === "month" ? l.value = !0 : (i.value = !1, l.value = !1);
    }
    function he(ne) {
      if (q.value)
        return;
      const { clientX: we, clientY: Ee } = ne.touches[0];
      ke = we, se = Ee;
    }
    function F(ne, we) {
      return ne >= we && ne > 20 ? "x" : "y";
    }
    function j(ne) {
      if (q.value)
        return;
      const { clientX: we, clientY: Ee } = ne.touches[0], Ue = we - ke, Re = Ee - se;
      J = F(Math.abs(Ue), Math.abs(Re)), U = Ue > 0 ? "prev" : "next";
    }
    function de() {
      return Hk(this, null, function* () {
        if (q.value || J !== "x")
          return;
        const ne = M.value === "year" ? z : M.value === "month" ? O : A;
        yield $n(), ne.value.forwardRef(U), en();
      });
    }
    function Se(ne, we) {
      const Ee = we === "year" ? w : we === "month" ? g : C;
      if (Ee.value = s.value ? [ne, ne] : [Ee.value[0], ne], s.value = !s.value, s.value) {
        const Re = ie(Ee.value[0]).isAfter(Ee.value[1]) ? [Ee.value[1], Ee.value[0]] : [...Ee.value];
        P(e["onUpdate:modelValue"], Re), P(e.onChange, Re);
      }
    }
    function Te(ne, we) {
      const Ee = we === "year" ? m : we === "month" ? y : $, Ue = we === "year" ? "YYYY" : we === "month" ? "YYYY-MM" : "YYYY-MM-DD", Re = Ee.value.map((mn) => ie(mn).format(Ue)), un = Re.findIndex((mn) => mn === ne);
      un === -1 ? Re.push(ne) : Re.splice(un, 1), P(e["onUpdate:modelValue"], Re), P(e.onChange, Re);
    }
    function He(ne, we) {
      return !c.value || !u.value ? !1 : Q.value ? ne === "year" ? we < R(c.value) : ne === "month" ? we < u.value : pe.value ? we < R(d.value) : u.value > f.value : c.value > v.value;
    }
    function xe(ne) {
      const { readonly: we, range: Ee, multiple: Ue, onChange: Re, "onUpdate:modelValue": un } = e;
      if (ne < 0 || we)
        return;
      b.value = He("day", ne);
      const mn = `${v.value}-${f.value}-${ne}`, kn = ie(mn).format("YYYY-MM-DD");
      Ee ? Se(kn, "day") : Ue ? Te(kn, "day") : (P(un, kn), P(Re, kn));
    }
    function ve(ne) {
      const { type: we, readonly: Ee, range: Ue, multiple: Re, onChange: un, onPreview: mn, "onUpdate:modelValue": kn } = e;
      if (b.value = He("month", ne), we === "month" && !Ee) {
        const Ao = `${v.value}-${ne}`;
        Ue ? Se(Ao, "month") : Re ? Te(Ao, "month") : (P(kn, Ao), P(un, Ao));
      } else
        f.value = ne, P(
          mn,
          R(v.value),
          R(f.value),
          we === "date" ? R(d.value) : void 0
        );
      l.value = !1;
    }
    function Ie(ne) {
      const { type: we, readonly: Ee, range: Ue, multiple: Re, onChange: un, onPreview: mn, "onUpdate:modelValue": kn } = e;
      b.value = He("year", ne), we === "year" && !Ee ? Ue ? Se(`${ne}`, "year") : Re ? Te(`${ne}`, "year") : (P(kn, `${ne}`), P(un, `${ne}`)) : (v.value = `${ne}`, P(
        mn,
        R(v.value),
        R(f.value),
        we === "date" ? R(d.value) : void 0
      )), i.value = !1;
    }
    function Le(ne, we) {
      const Ee = we === "prev" ? -1 : 1;
      if (ne === "year")
        v.value = `${R(v.value) + Ee}`;
      else {
        let Ue = R(f.value) + Ee;
        Ue < 1 && (v.value = `${R(v.value) - 1}`, Ue = 12), Ue > 12 && (v.value = `${R(v.value) + 1}`, Ue = 1), f.value = kr.find((Re) => R(Re) === Ue);
      }
      P(
        e.onPreview,
        R(v.value),
        R(f.value),
        e.type === "date" ? R(d.value) : void 0
      );
    }
    function on() {
      return (e.multiple || e.range) && !Ye(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ye(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0;
    }
    function ae(ne) {
      return Ye(ne) ? !1 : ne === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1;
    }
    function me(ne, we) {
      const Ee = we === "year" ? w : we === "month" ? g : C, Ue = we === "year" ? "YYYY" : we === "month" ? "YYYY-MM" : "YYYY-MM-D", Re = ne.map((kn) => ie(kn).format(Ue)).slice(0, 2);
      if (Ee.value.some((kn) => ae(kn)))
        return;
      Ee.value = Re;
      const mn = ie(Ee.value[0]).isAfter(Ee.value[1]);
      Ee.value.length === 2 && mn && (Ee.value = [Ee.value[1], Ee.value[0]]);
    }
    function $e(ne, we) {
      const Ee = we === "year" ? m : we === "month" ? y : $, Ue = we === "year" ? "YYYY" : we === "month" ? "YYYY-MM" : "YYYY-MM-D", Re = Array.from(new Set(ne.map((un) => ie(un).format(Ue))));
      Ee.value = Re.filter((un) => un !== "Invalid Date");
    }
    function Ae(ne) {
      const we = ie(ne).format("YYYY-MM-D");
      if (ae(we))
        return;
      const [Ee, Ue, Re] = we.split("-"), un = kr.find((mn) => mn === Ue);
      u.value = un, c.value = Ee, d.value = Re, f.value = un, v.value = Ee;
    }
    function en() {
      se = 0, ke = 0, U = "", J = void 0;
    }
    return {
      yearPanelEl: z,
      monthPanelEl: O,
      dayPanelEl: A,
      reverse: b,
      currentDate: o,
      chooseMonth: u,
      chooseYear: c,
      chooseDay: d,
      previewYear: v,
      isYearPanel: i,
      isMonthPanel: l,
      getMonthTitle: H,
      getDateTitle: Y,
      getYearTitle: N,
      getPanelType: M,
      getChoose: E,
      getPreview: B,
      componentProps: T,
      slotProps: W,
      formatRange: ue,
      pt: n,
      t: an,
      n: jk,
      classes: Wk,
      clickEl: te,
      handleTouchstart: he,
      handleTouchmove: j,
      handleTouchend: de,
      getChooseDay: xe,
      getChooseMonth: ve,
      getChooseYear: Ie,
      checkPreview: Le,
      formatElevation: pn
    };
  }
});
Fp.render = Kk;
var Pa = Fp;
oe(Pa);
le(Pa, Mp);
const A5 = Pa;
var pl = Pa, qk = Object.defineProperty, Ju = Object.getOwnPropertySymbols, Gk = Object.prototype.hasOwnProperty, Xk = Object.prototype.propertyIsEnumerable, Qu = (e, n, o) => n in e ? qk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Zk = (e, n) => {
  for (var o in n || (n = {}))
    Gk.call(n, o) && Qu(e, o, n[o]);
  if (Ju)
    for (var o of Ju(n))
      Xk.call(n, o) && Qu(e, o, n[o]);
  return e;
};
const Up = Zk({
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
  onBeforeClose: L(),
  onConfirm: L(),
  onCancel: L(),
  "onUpdate:show": L()
}, Me(gt, [
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
var Jk = Object.defineProperty, _u = Object.getOwnPropertySymbols, Qk = Object.prototype.hasOwnProperty, _k = Object.prototype.propertyIsEnumerable, xu = (e, n, o) => n in e ? Jk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, xk = (e, n) => {
  for (var o in n || (n = {}))
    Qk.call(n, o) && xu(e, o, n[o]);
  if (_u)
    for (var o of _u(n))
      _k.call(n, o) && xu(e, o, n[o]);
  return e;
};
const { name: e$, n: n$, classes: o$ } = ee("dialog");
function t$(e, n) {
  const o = _("var-button"), t = _("var-popup");
  return h(), Pe(t, {
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
    default: fe(() => [
      D(
        "div",
        je({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: xk({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          D(
            "div",
            {
              class: p(e.n("title"))
            },
            [
              V(e.$slots, "title", {}, () => {
                var r;
                return [
                  De(
                    re((r = e.title) != null ? r : (e.pt ? e.pt : e.t)("dialogTitle")),
                    1
                    /* TEXT */
                  )
                ];
              })
            ],
            2
            /* CLASS */
          ),
          D(
            "div",
            {
              class: p(e.n("message")),
              style: K({ textAlign: e.messageAlign })
            },
            [
              V(e.$slots, "default", {}, () => [
                De(
                  re(e.message),
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
            D(
              "div",
              {
                class: p(e.n("actions"))
              },
              [
                e.cancelButton ? (h(), Pe(o, {
                  key: 0,
                  class: p(e.classes(e.n("button"), e.n("cancel-button"))),
                  "var-dialog-cover": "",
                  text: "",
                  "text-color": e.cancelButtonTextColor,
                  color: e.cancelButtonColor,
                  onClick: e.cancel
                }, {
                  default: fe(() => {
                    var r;
                    return [
                      De(
                        re((r = e.cancelButtonText) != null ? r : (e.pt ? e.pt : e.t)("dialogCancelButtonText")),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "text-color", "color", "onClick"])) : X("v-if", !0),
                e.confirmButton ? (h(), Pe(o, {
                  key: 1,
                  class: p(e.classes(e.n("button"), e.n("confirm-button"))),
                  "var-dialog-cover": "",
                  text: "",
                  "text-color": e.confirmButtonTextColor,
                  color: e.confirmButtonColor,
                  onClick: e.confirm
                }, {
                  default: fe(() => {
                    var r;
                    return [
                      De(
                        re((r = e.confirmButtonText) != null ? r : (e.pt ? e.pt : e.t)("dialogConfirmButtonText")),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "text-color", "color", "onClick"])) : X("v-if", !0)
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
const Hp = x({
  name: e$,
  components: {
    VarPopup: Po,
    VarButton: Pn
  },
  inheritAttrs: !1,
  props: Up,
  setup(e) {
    const n = k(!1), o = k(!1), { t } = ao();
    ce(
      () => e.show,
      (u) => {
        n.value = u;
      },
      { immediate: !0 }
    ), ce(
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
    function r() {
      return P(e["onUpdate:show"], !1);
    }
    function a() {
      const { closeOnClickOverlay: u, onClickOverlay: c, onBeforeClose: d } = e;
      if (P(c), !!u) {
        if (d != null) {
          P(d, "close", r);
          return;
        }
        P(e["onUpdate:show"], !1);
      }
    }
    function i() {
      const { onBeforeClose: u, onConfirm: c } = e;
      if (P(c), u != null) {
        P(u, "confirm", r);
        return;
      }
      P(e["onUpdate:show"], !1);
    }
    function l() {
      const { onBeforeClose: u, onCancel: c } = e;
      if (P(c), u != null) {
        P(u, "cancel", r);
        return;
      }
      P(e["onUpdate:show"], !1);
    }
    function s() {
      P(e.onKeyEscape), e.closeOnKeyEscape && l();
    }
    return {
      popupShow: n,
      popupCloseOnClickOverlay: o,
      pt: t,
      t: an,
      n: n$,
      classes: o$,
      handleClickOverlay: a,
      confirm: i,
      cancel: l,
      toSizeUnit: Oe,
      handleKeyEscape: s
    };
  }
});
Hp.render = t$;
var xt = Hp, r$ = Object.defineProperty, a$ = Object.defineProperties, i$ = Object.getOwnPropertyDescriptors, ec = Object.getOwnPropertySymbols, l$ = Object.prototype.hasOwnProperty, s$ = Object.prototype.propertyIsEnumerable, nc = (e, n, o) => n in e ? r$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Oi = (e, n) => {
  for (var o in n || (n = {}))
    l$.call(n, o) && nc(e, o, n[o]);
  if (ec)
    for (var o of ec(n))
      s$.call(n, o) && nc(e, o, n[o]);
  return e;
}, u$ = (e, n) => a$(e, i$(n));
let bo, Ar = {};
function c$(e = {}) {
  return gn(e) ? u$(Oi({}, Ar), { message: e }) : Oi(Oi({}, Ar), e);
}
function Do(e) {
  return to() ? new Promise((n) => {
    Do.close();
    const o = c$(e), t = Qe(o);
    t.teleport = "body", bo = t;
    const { unmountInstance: r } = ht(xt, t, {
      onConfirm: () => {
        P(t.onConfirm), n("confirm");
      },
      onCancel: () => {
        P(t.onCancel), n("cancel");
      },
      onClose: () => {
        P(t.onClose), n("close");
      },
      onClosed: () => {
        P(t.onClosed), r(), bo === t && (bo = null);
      },
      onRouteChange: () => {
        r(), bo === t && (bo = null);
      },
      "onUpdate:show": (a) => {
        t.show = a;
      }
    });
    t.show = !0;
  }) : Promise.resolve();
}
Do.setDefaultOptions = function(e) {
  Ar = e;
};
Do.resetDefaultOptions = function() {
  Ar = {};
};
Do.close = function() {
  if (bo != null) {
    const e = bo;
    bo = null, qe().then(() => {
      e.show = !1;
    });
  }
};
Do.Component = xt;
oe(xt);
oe(xt, Do);
le(Do, Up);
const V5 = xt;
var vl = Do;
const Yp = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: d$, n: f$, classes: p$ } = ee("divider");
function v$(e, n) {
  return h(), S(
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
      style: K(e.style),
      role: "separator"
    },
    [
      e.vertical ? X("v-if", !0) : V(e.$slots, "default", { key: 0 }, () => [
        e.description ? (h(), S(
          "span",
          {
            key: 0,
            class: p(e.n("text"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : X("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const jp = x({
  name: d$,
  props: Yp,
  setup(e, { slots: n }) {
    const o = k(!1), t = I(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = I(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (rs(i) || l)
        return { margin: s };
      const u = R(i), c = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${Oe(c)})`,
        left: u > 0 ? Oe(c) : Oe(0)
      };
    });
    vn(a), Kt(a);
    function a() {
      const { description: i, vertical: l } = e;
      o.value = (n.default || i != null) && !l;
    }
    return {
      n: f$,
      classes: p$,
      withText: o,
      style: r,
      withPresetInset: t
    };
  }
});
jp.render = v$;
var za = jp;
oe(za);
le(za, Yp);
const L5 = za;
var ml = za;
const Wp = {
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
  onClick: L()
};
var m$ = Object.defineProperty, h$ = Object.defineProperties, g$ = Object.getOwnPropertyDescriptors, oc = Object.getOwnPropertySymbols, b$ = Object.prototype.hasOwnProperty, y$ = Object.prototype.propertyIsEnumerable, tc = (e, n, o) => n in e ? m$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, rc = (e, n) => {
  for (var o in n || (n = {}))
    b$.call(n, o) && tc(e, o, n[o]);
  if (oc)
    for (var o of oc(n))
      y$.call(n, o) && tc(e, o, n[o]);
  return e;
}, ac = (e, n) => h$(e, g$(n)), k$ = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: $$, n: w$, classes: C$ } = ee("drag");
function S$(e, n) {
  return h(), Pe(oo, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    D(
      "div",
      je({
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
const Kp = x({
  name: $$,
  inheritAttrs: !1,
  props: Wp,
  setup(e, { attrs: n }) {
    const o = k(null), t = k(0), r = k(0), a = k(!1), i = k(!1), { touching: l, dragging: s, moveX: u, moveY: c, startTouch: d, moveTouch: f, endTouch: v, resetTouch: b } = mt(), { disabled: m } = Go(), y = Qe({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    ce(() => e.boundary, B), ro(H), vn(() => {
      B(), H();
    });
    function $(M) {
      e.disabled || (d(M), z());
    }
    function w(M) {
      return k$(this, null, function* () {
        !l.value || e.disabled || (f(M), Fe(M), i.value = !1, a.value = !0, e.direction.includes("x") && (t.value += u.value), e.direction.includes("y") && (r.value += c.value), E());
      });
    }
    function g() {
      e.disabled || (v(), i.value = !0, T());
    }
    function C(M) {
      s.value || P(e.onClick, M);
    }
    function z() {
      const { left: M, top: q } = O();
      t.value = M, r.value = q;
    }
    function O() {
      const M = sn(o.value), q = sn(window), W = M.top - q.top, ue = q.bottom - M.bottom, Q = M.left - q.left, pe = q.right - M.right, { width: ke, height: se } = M, { width: U, height: J } = q;
      return {
        top: W,
        bottom: ue,
        left: Q,
        right: pe,
        width: ke,
        height: se,
        halfWidth: ke / 2,
        halfHeight: se / 2,
        windowWidth: U,
        windowHeight: J
      };
    }
    function A() {
      const M = O(), q = y.left, W = M.windowWidth - y.right - M.width, ue = y.top, Q = M.windowHeight - y.bottom - M.height;
      return {
        minX: q,
        minY: ue,
        // fallback the drag element overflows boundary
        maxX: q < W ? W : q,
        maxY: ue < Q ? Q : ue
      };
    }
    function T() {
      if (e.attraction == null)
        return;
      const { halfWidth: M, halfHeight: q, top: W, bottom: ue, left: Q, right: pe } = O(), { minX: ke, minY: se, maxX: U, maxY: J } = A(), te = Q + M - y.left, he = pe + M - y.right, F = W + q - y.top, j = ue + q - y.bottom, de = te <= he, Se = F <= j;
      e.attraction.includes("x") && (t.value = de ? ke : U), e.attraction.includes("y") && (r.value = Se ? se : J);
    }
    function E() {
      const { minX: M, minY: q, maxX: W, maxY: ue } = A();
      t.value = Mn(t.value, M, W), r.value = Mn(r.value, q, ue);
    }
    function B() {
      const { top: M = 0, bottom: q = 0, left: W = 0, right: ue = 0 } = e.boundary;
      y.top = nn(M), y.bottom = nn(q), y.left = nn(W), y.right = nn(ue);
    }
    function N() {
      var M;
      const q = (M = n.style) != null ? M : {};
      return ac(rc({}, n), {
        style: ac(rc({}, q), {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: a.value ? 0 : q.top,
          left: a.value ? 0 : q.left,
          right: a.value ? "auto" : q.right,
          bottom: a.value ? "auto" : q.bottom,
          transform: a.value ? `translate(${t.value}px, ${r.value}px)` : q.transform
        })
      });
    }
    function H() {
      a.value && (z(), E());
    }
    function Y() {
      b(), i.value = !1, a.value = !1, t.value = 0, r.value = 0;
    }
    return {
      drag: o,
      x: t,
      y: r,
      enableTransition: i,
      dragging: s,
      teleportDisabled: m,
      n: w$,
      classes: C$,
      getAttrs: N,
      handleTouchstart: $,
      handleTouchmove: w,
      handleTouchend: g,
      handleClick: C,
      resize: H,
      reset: Y
    };
  }
});
Kp.render = S$;
var Oa = Kp;
oe(Oa);
le(Oa, Wp);
const R5 = Oa;
var Vr = Oa, P$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function $r(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return P$[n];
  });
}
var uo = "top", To = "bottom", Uo = "right", Co = "left", Ss = "auto", Ta = [uo, To, Uo, Co], Ea = "start", Nt = "end", z$ = "clippingParents", qp = "viewport", $t = "popper", O$ = "reference", ic = /* @__PURE__ */ Ta.reduce(function(e, n) {
  return e.concat([n + "-" + Ea, n + "-" + Nt]);
}, []), Gp = /* @__PURE__ */ [].concat(Ta, [Ss]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Ea, n + "-" + Nt]);
}, []), T$ = "beforeRead", E$ = "read", B$ = "afterRead", I$ = "beforeMain", D$ = "main", M$ = "afterMain", N$ = "beforeWrite", A$ = "write", V$ = "afterWrite", L$ = [T$, E$, B$, I$, D$, M$, N$, A$, V$];
function So(e) {
  return e.split("-")[0];
}
var R$ = {
  start: "end",
  end: "start"
};
function lc(e) {
  return e.replace(/start|end/g, function(n) {
    return R$[n];
  });
}
function Wn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ho(e) {
  var n = Wn(e).Element;
  return e instanceof n || e instanceof Element;
}
function Un(e) {
  var n = Wn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Ps(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Wn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Mo(e) {
  return ((Ho(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var zt = Math.max, sc = Math.min, dt = Math.round;
function hl() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Xp() {
  return !/^((?!chrome|android).)*safari/i.test(hl());
}
function ft(e, n, o) {
  n === void 0 && (n = !1), o === void 0 && (o = !1);
  var t = e.getBoundingClientRect(), r = 1, a = 1;
  n && Un(e) && (r = e.offsetWidth > 0 && dt(t.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && dt(t.height) / e.offsetHeight || 1);
  var i = Ho(e) ? Wn(e) : window, l = i.visualViewport, s = !Xp() && o, u = (t.left + (s && l ? l.offsetLeft : 0)) / r, c = (t.top + (s && l ? l.offsetTop : 0)) / a, d = t.width / r, f = t.height / a;
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
function zs(e) {
  var n = Wn(e), o = n.pageXOffset, t = n.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: t
  };
}
function Os(e) {
  return ft(Mo(e)).left + zs(e).scrollLeft;
}
function F$(e, n) {
  var o = Wn(e), t = Mo(e), r = o.visualViewport, a = t.clientWidth, i = t.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = Xp();
    (u || !u && n === "fixed") && (l = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + Os(e),
    y: s
  };
}
function co(e) {
  return Wn(e).getComputedStyle(e);
}
function U$(e) {
  var n, o = Mo(e), t = zs(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = zt(o.scrollWidth, o.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = zt(o.scrollHeight, o.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -t.scrollLeft + Os(e), s = -t.scrollTop;
  return co(r || o).direction === "rtl" && (l += zt(o.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function eo(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ba(e) {
  return eo(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ps(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Mo(e)
  );
}
function Ts(e) {
  var n = co(e), o = n.overflow, t = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + r + t);
}
function Zp(e) {
  return ["html", "body", "#document"].indexOf(eo(e)) >= 0 ? e.ownerDocument.body : Un(e) && Ts(e) ? e : Zp(Ba(e));
}
function Ot(e, n) {
  var o;
  n === void 0 && (n = []);
  var t = Zp(e), r = t === ((o = e.ownerDocument) == null ? void 0 : o.body), a = Wn(t), i = r ? [a].concat(a.visualViewport || [], Ts(t) ? t : []) : t, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Ot(Ba(i)))
  );
}
function H$(e) {
  return ["table", "td", "th"].indexOf(eo(e)) >= 0;
}
function uc(e) {
  return !Un(e) || // https://github.com/popperjs/popper-core/issues/837
  co(e).position === "fixed" ? null : e.offsetParent;
}
function Y$(e) {
  var n = /firefox/i.test(hl()), o = /Trident/i.test(hl());
  if (o && Un(e)) {
    var t = co(e);
    if (t.position === "fixed")
      return null;
  }
  var r = Ba(e);
  for (Ps(r) && (r = r.host); Un(r) && ["html", "body"].indexOf(eo(r)) < 0; ) {
    var a = co(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function Es(e) {
  for (var n = Wn(e), o = uc(e); o && H$(o) && co(o).position === "static"; )
    o = uc(o);
  return o && (eo(o) === "html" || eo(o) === "body" && co(o).position === "static") ? n : o || Y$(e) || n;
}
function j$(e, n) {
  var o = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (o && Ps(o)) {
    var t = n;
    do {
      if (t && e.isSameNode(t))
        return !0;
      t = t.parentNode || t.host;
    } while (t);
  }
  return !1;
}
function gl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function W$(e, n) {
  var o = ft(e, !1, n === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function cc(e, n, o) {
  return n === qp ? gl(F$(e, o)) : Ho(n) ? W$(n, o) : gl(U$(Mo(e)));
}
function K$(e) {
  var n = Ot(Ba(e)), o = ["absolute", "fixed"].indexOf(co(e).position) >= 0, t = o && Un(e) ? Es(e) : e;
  return Ho(t) ? n.filter(function(r) {
    return Ho(r) && j$(r, t) && eo(r) !== "body";
  }) : [];
}
function q$(e, n, o, t) {
  var r = n === "clippingParents" ? K$(e) : [].concat(n), a = [].concat(r, [o]), i = a[0], l = a.reduce(function(s, u) {
    var c = cc(e, u, t);
    return s.top = zt(c.top, s.top), s.right = sc(c.right, s.right), s.bottom = sc(c.bottom, s.bottom), s.left = zt(c.left, s.left), s;
  }, cc(e, i, t));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function At(e) {
  return e.split("-")[1];
}
function G$(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Jp(e) {
  var n = e.reference, o = e.element, t = e.placement, r = t ? So(t) : null, a = t ? At(t) : null, i = n.x + n.width / 2 - o.width / 2, l = n.y + n.height / 2 - o.height / 2, s;
  switch (r) {
    case uo:
      s = {
        x: i,
        y: n.y - o.height
      };
      break;
    case To:
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
    case Co:
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
  var u = r ? G$(r) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Ea:
        s[u] = s[u] - (n[c] / 2 - o[c] / 2);
        break;
      case Nt:
        s[u] = s[u] + (n[c] / 2 - o[c] / 2);
        break;
    }
  }
  return s;
}
function X$() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Z$(e) {
  return Object.assign({}, X$(), e);
}
function J$(e, n) {
  return n.reduce(function(o, t) {
    return o[t] = e, o;
  }, {});
}
function Qp(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = t === void 0 ? e.placement : t, a = o.strategy, i = a === void 0 ? e.strategy : a, l = o.boundary, s = l === void 0 ? z$ : l, u = o.rootBoundary, c = u === void 0 ? qp : u, d = o.elementContext, f = d === void 0 ? $t : d, v = o.altBoundary, b = v === void 0 ? !1 : v, m = o.padding, y = m === void 0 ? 0 : m, $ = Z$(typeof y != "number" ? y : J$(y, Ta)), w = f === $t ? O$ : $t, g = e.rects.popper, C = e.elements[b ? w : f], z = q$(Ho(C) ? C : C.contextElement || Mo(e.elements.popper), s, c, i), O = ft(e.elements.reference), A = Jp({
    reference: O,
    element: g,
    strategy: "absolute",
    placement: r
  }), T = gl(Object.assign({}, g, A)), E = f === $t ? T : O, B = {
    top: z.top - E.top + $.top,
    bottom: E.bottom - z.bottom + $.bottom,
    left: z.left - E.left + $.left,
    right: E.right - z.right + $.right
  }, N = e.modifiersData.offset;
  if (f === $t && N) {
    var H = N[r];
    Object.keys(B).forEach(function(Y) {
      var M = [Uo, To].indexOf(Y) >= 0 ? 1 : -1, q = [uo, To].indexOf(Y) >= 0 ? "y" : "x";
      B[Y] += H[q] * M;
    });
  }
  return B;
}
function Q$(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = o.boundary, a = o.rootBoundary, i = o.padding, l = o.flipVariations, s = o.allowedAutoPlacements, u = s === void 0 ? Gp : s, c = At(t), d = c ? l ? ic : ic.filter(function(b) {
    return At(b) === c;
  }) : Ta, f = d.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  f.length === 0 && (f = d);
  var v = f.reduce(function(b, m) {
    return b[m] = Qp(e, {
      placement: m,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[So(m)], b;
  }, {});
  return Object.keys(v).sort(function(b, m) {
    return v[b] - v[m];
  });
}
function _$(e) {
  if (So(e) === Ss)
    return [];
  var n = $r(e);
  return [lc(e), n, lc(n)];
}
function x$(e) {
  var n = e.state, o = e.options, t = e.name;
  if (!n.modifiersData[t]._skip) {
    for (var r = o.mainAxis, a = r === void 0 ? !0 : r, i = o.altAxis, l = i === void 0 ? !0 : i, s = o.fallbackPlacements, u = o.padding, c = o.boundary, d = o.rootBoundary, f = o.altBoundary, v = o.flipVariations, b = v === void 0 ? !0 : v, m = o.allowedAutoPlacements, y = n.options.placement, $ = So(y), w = $ === y, g = s || (w || !b ? [$r(y)] : _$(y)), C = [y].concat(g).reduce(function(te, he) {
      return te.concat(So(he) === Ss ? Q$(n, {
        placement: he,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: m
      }) : he);
    }, []), z = n.rects.reference, O = n.rects.popper, A = /* @__PURE__ */ new Map(), T = !0, E = C[0], B = 0; B < C.length; B++) {
      var N = C[B], H = So(N), Y = At(N) === Ea, M = [uo, To].indexOf(H) >= 0, q = M ? "width" : "height", W = Qp(n, {
        placement: N,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), ue = M ? Y ? Uo : Co : Y ? To : uo;
      z[q] > O[q] && (ue = $r(ue));
      var Q = $r(ue), pe = [];
      if (a && pe.push(W[H] <= 0), l && pe.push(W[ue] <= 0, W[Q] <= 0), pe.every(function(te) {
        return te;
      })) {
        E = N, T = !1;
        break;
      }
      A.set(N, pe);
    }
    if (T)
      for (var ke = b ? 3 : 1, se = function(he) {
        var F = C.find(function(j) {
          var de = A.get(j);
          if (de)
            return de.slice(0, he).every(function(Se) {
              return Se;
            });
        });
        if (F)
          return E = F, "break";
      }, U = ke; U > 0; U--) {
        var J = se(U);
        if (J === "break")
          break;
      }
    n.placement !== E && (n.modifiersData[t]._skip = !0, n.placement = E, n.reset = !0);
  }
}
const ew = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: x$,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function nw(e, n, o) {
  var t = So(e), r = [Co, uo].indexOf(t) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, n, {
    placement: e
  })) : o, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * r, [Co, Uo].indexOf(t) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function ow(e) {
  var n = e.state, o = e.options, t = e.name, r = o.offset, a = r === void 0 ? [0, 0] : r, i = Gp.reduce(function(c, d) {
    return c[d] = nw(d, n.rects, a), c;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[t] = i;
}
const tw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ow
};
var rw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function aw(e) {
  var n = e.x, o = e.y, t = window, r = t.devicePixelRatio || 1;
  return {
    x: dt(n * r) / r || 0,
    y: dt(o * r) / r || 0
  };
}
function dc(e) {
  var n, o = e.popper, t = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, b = i.y, m = b === void 0 ? 0 : b, y = typeof c == "function" ? c({
    x: v,
    y: m
  }) : {
    x: v,
    y: m
  };
  v = y.x, m = y.y;
  var $ = i.hasOwnProperty("x"), w = i.hasOwnProperty("y"), g = Co, C = uo, z = window;
  if (u) {
    var O = Es(o), A = "clientHeight", T = "clientWidth";
    if (O === Wn(o) && (O = Mo(o), co(O).position !== "static" && l === "absolute" && (A = "scrollHeight", T = "scrollWidth")), O = O, r === uo || (r === Co || r === Uo) && a === Nt) {
      C = To;
      var E = d && O === z && z.visualViewport ? z.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[A]
      );
      m -= E - t.height, m *= s ? 1 : -1;
    }
    if (r === Co || (r === uo || r === To) && a === Nt) {
      g = Uo;
      var B = d && O === z && z.visualViewport ? z.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[T]
      );
      v -= B - t.width, v *= s ? 1 : -1;
    }
  }
  var N = Object.assign({
    position: l
  }, u && rw), H = c === !0 ? aw({
    x: v,
    y: m
  }) : {
    x: v,
    y: m
  };
  if (v = H.x, m = H.y, s) {
    var Y;
    return Object.assign({}, N, (Y = {}, Y[C] = w ? "0" : "", Y[g] = $ ? "0" : "", Y.transform = (z.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + m + "px)" : "translate3d(" + v + "px, " + m + "px, 0)", Y));
  }
  return Object.assign({}, N, (n = {}, n[C] = w ? m + "px" : "", n[g] = $ ? v + "px" : "", n.transform = "", n));
}
function iw(e) {
  var n = e.state, o = e.options, t = o.gpuAcceleration, r = t === void 0 ? !0 : t, a = o.adaptive, i = a === void 0 ? !0 : a, l = o.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: So(n.placement),
    variation: At(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: r,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, dc(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, dc(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const _p = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: iw,
  data: {}
};
function lw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function sw(e) {
  return e === Wn(e) || !Un(e) ? zs(e) : lw(e);
}
function uw(e) {
  var n = e.getBoundingClientRect(), o = dt(n.width) / e.offsetWidth || 1, t = dt(n.height) / e.offsetHeight || 1;
  return o !== 1 || t !== 1;
}
function cw(e, n, o) {
  o === void 0 && (o = !1);
  var t = Un(n), r = Un(n) && uw(n), a = Mo(n), i = ft(e, r, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (t || !t && !o) && ((eo(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ts(a)) && (l = sw(n)), Un(n) ? (s = ft(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = Os(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function dw(e) {
  var n = ft(e), o = e.offsetWidth, t = e.offsetHeight;
  return Math.abs(n.width - o) <= 1 && (o = n.width), Math.abs(n.height - t) <= 1 && (t = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: t
  };
}
function fw(e) {
  var n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), t = [];
  e.forEach(function(a) {
    n.set(a.name, a);
  });
  function r(a) {
    o.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(l) {
      if (!o.has(l)) {
        var s = n.get(l);
        s && r(s);
      }
    }), t.push(a);
  }
  return e.forEach(function(a) {
    o.has(a.name) || r(a);
  }), t;
}
function pw(e) {
  var n = fw(e);
  return L$.reduce(function(o, t) {
    return o.concat(n.filter(function(r) {
      return r.phase === t;
    }));
  }, []);
}
function vw(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(o) {
      Promise.resolve().then(function() {
        n = void 0, o(e());
      });
    })), n;
  };
}
function mw(e) {
  var n = e.reduce(function(o, t) {
    var r = o[t.name];
    return o[t.name] = r ? Object.assign({}, r, t, {
      options: Object.assign({}, r.options, t.options),
      data: Object.assign({}, r.data, t.data)
    }) : t, o;
  }, {});
  return Object.keys(n).map(function(o) {
    return n[o];
  });
}
var fc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function pc() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  return !n.some(function(t) {
    return !(t && typeof t.getBoundingClientRect == "function");
  });
}
function hw(e) {
  e === void 0 && (e = {});
  var n = e, o = n.defaultModifiers, t = o === void 0 ? [] : o, r = n.defaultOptions, a = r === void 0 ? fc : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, fc, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, v = {
      state: c,
      setOptions: function($) {
        var w = typeof $ == "function" ? $(c.options) : $;
        m(), c.options = Object.assign({}, a, c.options, w), c.scrollParents = {
          reference: Ho(l) ? Ot(l) : l.contextElement ? Ot(l.contextElement) : [],
          popper: Ot(s)
        };
        var g = pw(mw([].concat(t, c.options.modifiers)));
        return c.orderedModifiers = g.filter(function(C) {
          return C.enabled;
        }), b(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var $ = c.elements, w = $.reference, g = $.popper;
          if (pc(w, g)) {
            c.rects = {
              reference: cw(w, Es(g), c.options.strategy === "fixed"),
              popper: dw(g)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(B) {
              return c.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var C = 0; C < c.orderedModifiers.length; C++) {
              if (c.reset === !0) {
                c.reset = !1, C = -1;
                continue;
              }
              var z = c.orderedModifiers[C], O = z.fn, A = z.options, T = A === void 0 ? {} : A, E = z.name;
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
      update: vw(function() {
        return new Promise(function(y) {
          v.forceUpdate(), y(c);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!pc(l, s))
      return v;
    v.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function b() {
      c.orderedModifiers.forEach(function(y) {
        var $ = y.name, w = y.options, g = w === void 0 ? {} : w, C = y.effect;
        if (typeof C == "function") {
          var z = C({
            state: c,
            name: $,
            instance: v,
            options: g
          }), O = function() {
          };
          d.push(z || O);
        }
      });
    }
    function m() {
      d.forEach(function(y) {
        return y();
      }), d = [];
    }
    return v;
  };
}
var cr = {
  passive: !0
};
function gw(e) {
  var n = e.state, o = e.instance, t = e.options, r = t.scroll, a = r === void 0 ? !0 : r, i = t.resize, l = i === void 0 ? !0 : i, s = Wn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", o.update, cr);
  }), l && s.addEventListener("resize", o.update, cr), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", o.update, cr);
    }), l && s.removeEventListener("resize", o.update, cr);
  };
}
const bw = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: gw,
  data: {}
};
function yw(e) {
  var n = e.state, o = e.name;
  n.modifiersData[o] = Jp({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const kw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: yw,
  data: {}
};
function $w(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(o) {
    var t = n.styles[o] || {}, r = n.attributes[o] || {}, a = n.elements[o];
    !Un(a) || !eo(a) || (Object.assign(a.style, t), Object.keys(r).forEach(function(i) {
      var l = r[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function ww(e) {
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
    Object.keys(n.elements).forEach(function(t) {
      var r = n.elements[t], a = n.attributes[t] || {}, i = Object.keys(n.styles.hasOwnProperty(t) ? n.styles[t] : o[t]), l = i.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !Un(r) || !eo(r) || (Object.assign(r.style, l), Object.keys(a).forEach(function(s) {
        r.removeAttribute(s);
      }));
    });
  };
}
const Cw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: $w,
  effect: ww,
  requires: ["computeStyles"]
};
var Sw = [bw, kw, _p, Cw], Pw = /* @__PURE__ */ hw({
  defaultModifiers: Sw
}), zw = Object.defineProperty, Ow = Object.defineProperties, Tw = Object.getOwnPropertyDescriptors, vc = Object.getOwnPropertySymbols, Ew = Object.prototype.hasOwnProperty, Bw = Object.prototype.propertyIsEnumerable, mc = (e, n, o) => n in e ? zw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ti = (e, n) => {
  for (var o in n || (n = {}))
    Ew.call(n, o) && mc(e, o, n[o]);
  if (vc)
    for (var o of vc(n))
      Bw.call(n, o) && mc(e, o, n[o]);
  return e;
}, Ei = (e, n) => Ow(e, Tw(n)), hc = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
function xp(e) {
  const n = k(null), o = k(null), t = k({ width: 0, height: 0 }), r = Zn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(B, N) {
      P(N ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = Jt(() => r.value, 1);
  us(() => r.value, a);
  let i = null, l = !1, s = !1;
  Ke(() => window, "keydown", O), Td(z, "click", $), ro(A), ce(() => [e.offsetX, e.offsetY, e.placement, e.strategy], A), ce(() => e.disabled, E), ce(
    () => r.value,
    (B) => {
      B && A();
    }
  ), Yo(() => {
    var B;
    i = Pw((B = z()) != null ? B : n.value, o.value, C());
  }), Wt(() => {
    i.destroy();
  });
  function u() {
    if (!n.value)
      return;
    const { width: B, height: N } = qo(n.value);
    t.value = {
      width: nn(B),
      height: nn(N)
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
    return hc(this, null, function* () {
      e.trigger === "hover" && (s = !1, yield $n(), !l && E());
    });
  }
  function v() {
    e.trigger === "hover" && (l = !0);
  }
  function b() {
    return hc(this, null, function* () {
      e.trigger === "hover" && (l = !1, yield $n(), !s && E());
    });
  }
  function m() {
    if (e.trigger === "click") {
      if (e.closeOnClickReference && r.value) {
        E();
        return;
      }
      T();
    }
  }
  function y() {
    E();
  }
  function $(B) {
    e.trigger === "click" && (y(), P(e.onClickOutside, B));
  }
  function w() {
    A(), P(e.onClosed);
  }
  function g() {
    const { offsetX: B, offsetY: N, placement: H } = e;
    u();
    const Y = {
      x: nn(B),
      y: nn(N)
    };
    switch (H) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: Y.x,
          distance: Y.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: Y.x,
          distance: Y.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: Y.x,
          distance: Y.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: Y.x,
          distance: -Y.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: Y.x,
          distance: -Y.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: Y.x,
          distance: -Y.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: Y.y,
          distance: Y.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: Y.y,
          distance: -Y.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: H,
          skidding: Y.y,
          distance: -Y.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: H,
          skidding: Y.x,
          distance: -Y.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: H,
          skidding: Y.x,
          distance: Y.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: H,
          skidding: Y.y,
          distance: Y.x
        };
    }
  }
  function C() {
    const { placement: B, skidding: N, distance: H } = g(), Y = [
      Ei(Ti({}, ew), {
        enabled: r.value
      }),
      Ei(Ti({}, tw), {
        options: {
          offset: [N, H]
        }
      }),
      Ei(Ti({}, _p), {
        options: {
          adaptive: !1,
          gpuAcceleration: !1
        },
        enabled: r.value
      }),
      {
        name: "applyTransformOrigin",
        enabled: r.value,
        phase: "beforeWrite",
        fn({ state: M }) {
          M.styles.popper.transformOrigin = c();
        }
      }
    ];
    return {
      placement: B,
      modifiers: Y,
      strategy: e.strategy
    };
  }
  function z() {
    return e.reference ? n.value.querySelector(e.reference) : n.value;
  }
  function O(B) {
    const { closeOnKeyEscape: N = !1 } = e;
    B.key === "Escape" && N && r.value && (Fe(B), E());
  }
  function A() {
    i.setOptions(C());
  }
  function T() {
    e.disabled || (r.value = !0, P(e["onUpdate:show"], !0));
  }
  function E() {
    r.value = !1, P(e["onUpdate:show"], !1);
  }
  return {
    show: r,
    popover: o,
    zIndex: a,
    host: n,
    hostSize: t,
    handleHostClick: m,
    handleHostMouseenter: d,
    handleHostMouseleave: f,
    handlePopoverClose: y,
    handlePopoverMouseenter: v,
    handlePopoverMouseleave: b,
    handleClosed: w,
    resize: A,
    open: T,
    close: E
  };
}
const ev = {
  type: {
    type: String,
    default: "default"
  },
  color: String,
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
  onOpen: L(),
  onOpened: L(),
  onClose: L(),
  onClosed: L(),
  onClickOutside: L(),
  "onUpdate:show": L()
}, { name: Iw, n: Dw, classes: Mw } = ee("tooltip");
function Nw(e, n) {
  return h(), S(
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
      (h(), Pe(oo, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        G(_e, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: fe(() => [
            Ne(D(
              "div",
              {
                ref: "popover",
                class: p(e.classes(e.n("tooltip"), e.n("$--box"))),
                style: K({ zIndex: e.zIndex }),
                onClick: n[0] || (n[0] = An(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                D(
                  "div",
                  {
                    style: K({ background: e.color, width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0 }),
                    class: p(e.classes(e.n("content-container"), e.n(`--${e.type}`))),
                    role: "tooltip"
                  },
                  [
                    V(e.$slots, "content", {}, () => [
                      De(
                        re(e.content),
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
              [Xn, e.show]
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
const nv = x({
  name: Iw,
  props: ev,
  setup(e) {
    const { disabled: n } = Go(), {
      popover: o,
      host: t,
      hostSize: r,
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
      open: b,
      // expose
      close: m,
      // expose
      resize: y
    } = xp(e);
    return {
      popover: o,
      host: t,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: Oe,
      n: Dw,
      classes: Mw,
      handleHostClick: l,
      handlePopoverClose: f,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handleClosed: v,
      resize: y,
      open: b,
      close: m
    };
  }
});
nv.render = Nw;
var Ia = nv;
oe(Ia);
le(Ia, ev);
const F5 = Ia;
var Lr = Ia;
const ov = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": L()
};
var Aw = Object.defineProperty, gc = Object.getOwnPropertySymbols, Vw = Object.prototype.hasOwnProperty, Lw = Object.prototype.propertyIsEnumerable, bc = (e, n, o) => n in e ? Aw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Rw = (e, n) => {
  for (var o in n || (n = {}))
    Vw.call(n, o) && bc(e, o, n[o]);
  if (gc)
    for (var o of gc(n))
      Lw.call(n, o) && bc(e, o, n[o]);
  return e;
};
const { name: Fw, n: Uw, classes: Hw } = ee("ellipsis"), Yw = { key: 0 };
function jw(e, n) {
  const o = _("var-tooltip");
  return h(), Pe(
    o,
    wo(qt(e.tooltipProps)),
    {
      content: fe(() => [
        V(e.$slots, "tooltip-content", {}, () => {
          var t;
          return [
            (t = e.tooltipProps) != null && t.content ? (h(), S(
              "span",
              Yw,
              re(e.tooltipProps.content),
              1
              /* TEXT */
            )) : V(e.$slots, "default", { key: 1 })
          ];
        })
      ]),
      default: fe(() => [
        D(
          "span",
          {
            class: p(
              e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])
            ),
            style: K(e.rootStyles),
            onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
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
const tv = x({
  name: Fw,
  components: { VarTooltip: Lr },
  props: ov,
  setup(e) {
    const n = Zn(e, "expand"), o = I(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), t = I(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : Rw({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: t,
      expanding: n,
      rootStyles: o,
      n: Uw,
      classes: Hw,
      handleClick: r
    };
  }
});
tv.render = jw;
var Da = tv;
oe(Da);
le(Da, ov);
const U5 = Da;
var bl = Da;
const rv = {
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
  inactiveIconSize: Me(tn, "size"),
  activeIconSize: Me(tn, "size"),
  inactiveIconNamespace: Me(tn, "namespace"),
  activeIconNamespace: Me(tn, "namespace"),
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
  onClick: L(),
  onOpen: L(),
  onOpened: L(),
  onClose: L(),
  onClosed: L(),
  "onUpdate:active": L()
}, {
  name: Ww,
  classes: Bi,
  n: In
} = ee("fab");
var Ma = x({
  name: Ww,
  inheritAttrs: !1,
  props: rv,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = Zn(e, "active"), r = k(null), a = k(null);
    ce(() => e.trigger, () => {
      t.value = !1;
    }), ce(() => e.disabled, () => {
      t.value = !1;
    }), ce(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var c;
      (c = a.value) == null || c.reset();
    }), Td(r, "click", s);
    function i(c, d, f) {
      if (c.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (f === 0) {
          P(e.onClick, t.value, c);
          return;
        }
        t.value = d, P(e.onClick, t.value, c), P(t.value ? e.onOpen : e.onClose);
      }
    }
    function l(c, d) {
      e.trigger !== "hover" || e.disabled || d === 0 || (t.value = c, P(t.value ? e.onOpen : e.onClose));
    }
    function s() {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, P(e.onClose));
    }
    function u() {
      return n.trigger ? e.show ? n.trigger({
        active: t.value
      }) : null : Ne(G(Pn, {
        "var-fab-cover": !0,
        class: In("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        iconContainer: !0
      }, {
        default: () => [G(Je, {
          "var-fab-cover": !0,
          class: Bi([t.value, In("trigger-active-icon"), In("trigger-inactive-icon")]),
          name: t.value ? e.activeIcon : e.inactiveIcon,
          size: t.value ? e.activeIconSize : e.inactiveIconSize,
          namespace: t.value ? e.activeIconNamespace : e.inactiveIconNamespace,
          transition: 200,
          animationClass: In("--trigger-icon-animation")
        }, null)]
      }), [[Xn, e.show]]);
    }
    return () => {
      var c;
      const d = Id((c = P(n.default)) != null ? c : []), f = rs(e.drag) ? {} : e.drag;
      return G(Vr, je({
        ref: a,
        class: Bi(In(`--position-${e.position}`), [!e.fixed, In("--absolute")]),
        style: {
          top: Oe(e.top),
          bottom: Oe(e.bottom),
          left: Oe(e.left),
          right: Oe(e.right)
        },
        zIndex: e.zIndex,
        teleport: e.teleport,
        disabled: e.disabled || !e.drag || !e.fixed,
        direction: f.direction,
        attraction: f.attraction,
        boundary: f.boundary,
        onClick: (v) => i(v, !t.value, d.length)
      }, o), {
        default: () => [G("div", {
          class: Bi(In(), In(`--direction-${e.direction}`), [e.safeArea, In("--safe-area")]),
          ref: r,
          onMouseleave: () => l(!1, d.length),
          onMouseenter: () => l(!0, d.length)
        }, [G(_e, {
          name: In("--active-transition")
        }, {
          default: () => [u()]
        }), G(_e, {
          name: In(`--actions-transition-${e.direction}`),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Ne(G("div", {
            class: In("actions"),
            onClick: (v) => v.stopPropagation()
          }, [d.map((v) => G("div", {
            class: In("action")
          }, [v]))]), [[Xn, e.show && t.value && d.length]])]
        })])]
      });
    };
  }
});
oe(Ma);
le(Ma, rv);
const H5 = Ma;
var yl = Ma;
const Na = {
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
  errorMessage: String,
  formDisabled: Boolean,
  disabled: Boolean,
  clearable: Boolean,
  cursor: String,
  composing: Boolean,
  onClick: L(),
  onClear: L()
};
var Kw = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: qw, n: Ii, classes: Gw } = ee("field-decorator"), Xw = ["for"];
function Zw(e, n) {
  const o = _("var-icon");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      D(
        "div",
        {
          class: p(
            e.classes(
              e.n("controller"),
              [e.isFocusing, e.n("--focus")],
              [e.errorMessage, e.n("--error")],
              [e.formDisabled || e.disabled, e.n("--disabled")]
            )
          ),
          style: K({
            color: e.color,
            cursor: e.cursor,
            overflow: e.isFloating ? "visible" : "hidden",
            "--field-decorator-middle-offset-left": e.middleOffsetLeft,
            "--field-decorator-middle-offset-width": e.middleOffsetWidth,
            "--field-decorator-middle-offset-height": e.middleOffsetHeight
          })
        },
        [
          D(
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
          D(
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
          e.placeholder && e.hint ? (h(), S("label", {
            key: 0,
            class: p(
              e.classes(
                e.n("placeholder"),
                e.n("$--ellipsis"),
                [e.isFocusing, e.n("--focus")],
                [e.hintCenter, e.n("--hint-center")],
                [e.formDisabled || e.disabled, e.n("--disabled")],
                [e.errorMessage, e.n("--error")],
                [e.transitionDisabled, e.n("--transition-disabled")],
                e.computePlaceholderState()
              )
            ),
            style: K({
              color: e.color
            }),
            for: e.id
          }, [
            D(
              "span",
              null,
              re(e.placeholder),
              1
              /* TEXT */
            )
          ], 14, Xw)) : X("v-if", !0),
          D(
            "div",
            {
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              e.clearable && !e.isEmpty(e.value) ? V(e.$slots, "clear-icon", {
                key: 0,
                clear: e.handleClear
              }, () => [
                G(o, {
                  class: p(e.n("clear-icon")),
                  "var-field-decorator-cover": "",
                  name: "close-circle",
                  onClick: e.handleClear
                }, null, 8, ["class", "onClick"])
              ]) : X("v-if", !0),
              V(e.$slots, "append-icon")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.line ? (h(), S(
        Ve,
        { key: 0 },
        [
          e.variant === "outlined" ? (h(), S(
            "fieldset",
            {
              key: 0,
              class: p(
                e.classes(
                  e.n("line"),
                  [e.isFocusing, e.n("--line-focus")],
                  [e.errorMessage, e.n("--line-error")],
                  [e.formDisabled || e.disabled, e.n("--line-disabled")]
                )
              ),
              style: K({ borderColor: e.color })
            },
            [
              D(
                "legend",
                {
                  class: p(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
                  style: K({ width: e.legendWidth })
                },
                [
                  e.placeholder && e.hint ? (h(), Pe(oo, {
                    key: 0,
                    to: "body"
                  }, [
                    D(
                      "span",
                      {
                        ref: "placeholderTextEl",
                        class: p(
                          e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")])
                        )
                      },
                      re(e.placeholder),
                      3
                      /* TEXT, CLASS */
                    )
                  ])) : X("v-if", !0)
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : (h(), S(
            "div",
            {
              key: 1,
              class: p(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
              style: K({ background: e.errorMessage ? void 0 : e.blurColor })
            },
            [
              D(
                "div",
                {
                  class: p(
                    e.classes(
                      e.n("dot"),
                      [e.isFocusing, e.n("--line-focus")],
                      [e.formDisabled || e.disabled, e.n("--line-disabled")],
                      [e.errorMessage, e.n("--line-error")]
                    )
                  ),
                  style: K({ background: e.errorMessage ? void 0 : e.focusColor })
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
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const av = x({
  name: qw,
  components: { VarIcon: Je },
  props: Na,
  setup(e) {
    const n = k(null), o = k(null), t = k(""), r = k("0px"), a = k("0px"), i = k("0px"), l = k(!0), s = I(() => e.hint && (!_n(e.value) || e.isFocusing)), { popup: u, bindPopup: c } = Rd(), d = I(
      () => e.errorMessage ? void 0 : e.isFocusing ? e.focusColor : e.blurColor
    );
    ro(m), vn(() => {
      m(), qe().then(() => {
        l.value = !1;
      });
    }), Kt(m), P(c, null), u && ce(
      () => u.show.value,
      (y) => Kw(this, null, function* () {
        y && (yield $n(), m());
      })
    );
    function f() {
      const { hint: y, value: $, composing: w } = e;
      if (!y && (!_n($) || w))
        return Ii("--placeholder-hidden");
      if (s.value)
        return Ii("--placeholder-hint");
    }
    function v(y) {
      P(e.onClear, y);
    }
    function b(y) {
      P(e.onClick, y);
    }
    function m() {
      if (r.value = `${o.value.offsetLeft}px`, a.value = `${o.value.offsetWidth}px`, i.value = `${o.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
        const y = qo(n.value), $ = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
        t.value = `calc(${y.width} * 0.75 + ${$} * 2)`;
      }
    }
    return {
      placeholderTextEl: n,
      middleEl: o,
      middleOffsetLeft: r,
      middleOffsetWidth: a,
      middleOffsetHeight: i,
      color: d,
      legendWidth: t,
      isFloating: s,
      transitionDisabled: l,
      resize: m,
      computePlaceholderState: f,
      n: Ii,
      classes: Gw,
      isEmpty: _n,
      handleClear: v,
      handleClick: b
    };
  }
});
av.render = Zw;
var Aa = av;
oe(Aa);
le(Aa, Na);
const Y5 = Aa;
var Vt = Aa;
const iv = {
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
  "onUpdate:anchor": L(),
  onAnchorChange: L()
}, { name: Jw, n: Qw, classes: _w } = ee("floating-panel"), yc = 100, kc = 0.2;
function xw(e, n) {
  return h(), Pe(oo, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    D(
      "div",
      {
        class: p(e.classes(e.n(), [e.safeArea, e.n("--safe-area")], e.formatElevation(e.elevation, 3))),
        style: K({
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
          D(
            "div",
            {
              class: p(e.n("header"))
            },
            [
              D(
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
        D(
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
const lv = x({
  name: Jw,
  props: iv,
  setup(e) {
    const n = k(0), o = k(null), { height: t } = Gh(), r = I(() => t.value * 0.6), a = Zn(e, "anchor", { defaultValue: yc }), i = I(() => {
      const E = [yc, r.value], { anchors: B } = e;
      return _n(B) ? E : B;
    }), l = I(() => Math.min(...i.value)), s = I(() => Math.max(...i.value)), { disabled: u } = Go(), { deltaY: c, touching: d, startTouch: f, moveTouch: v, endTouch: b, isReachTop: m, isReachBottom: y } = mt();
    let $;
    Zt(() => d.value), ce(() => a.value, w, { immediate: !0 }), ce(
      () => i.value,
      () => {
        w(a.value);
      },
      { immediate: !0 }
    );
    function w(E) {
      O(E ?? l.value);
    }
    function g(E) {
      f(E), $ = n.value;
    }
    function C(E) {
      var B;
      v(E);
      const N = E.target, H = o.value === N || ((B = o.value) == null ? void 0 : B.contains(N));
      if (H && !e.contentDraggable)
        return;
      if (H && e.contentDraggable && n.value >= s.value && !m(o.value)) {
        y(o.value) && Fe(E);
        return;
      }
      const Y = $ - c.value;
      O(A(Y)), Fe(E);
    }
    function z() {
      b();
      const E = a.value;
      O(n.value), a.value = n.value, a.value !== E && P(e.onAnchorChange, n.value);
    }
    function O(E) {
      n.value = d.value ? E : T(E);
    }
    function A(E) {
      if (E > s.value) {
        const B = E - s.value;
        return s.value + B * kc;
      }
      if (E < l.value) {
        const B = l.value - E;
        return l.value - B * kc;
      }
      return E;
    }
    function T(E) {
      if (i.value.includes(E))
        return E;
      let B = 1 / 0, N = 0;
      return i.value.forEach((H) => {
        const Y = Math.abs(H - E);
        Y < B && (B = Y, N = H);
      }), N;
    }
    return {
      contentRef: o,
      teleportDisabled: u,
      touching: d,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: Qw,
      classes: _w,
      toSizeUnit: Oe,
      toNumber: R,
      formatElevation: pn,
      handleTouchstart: g,
      handleTouchmove: C,
      handleTouchend: z
    };
  }
});
lv.render = xw;
var Va = lv;
oe(Va);
le(Va, iv);
const j5 = Va;
var kl = Va;
const sv = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: L(),
  onReset: L()
};
var $c = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: eC, n: nC } = ee("form");
function oC(e, n) {
  return h(), S(
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
const uv = x({
  name: eC,
  props: sv,
  setup(e) {
    const n = I(() => e.disabled), o = I(() => e.readonly), { formItems: t, bindFormItems: r } = wy();
    r({
      disabled: n,
      readonly: o
    });
    function i(f) {
      setTimeout(() => {
        const v = zo(f), b = v === window ? 0 : ou(v), m = ou(f) - b - nn(e.scrollToErrorOffsetY);
        It(v, {
          top: m,
          animation: Fi
        });
      }, 300);
    }
    function l(f) {
      return $c(this, null, function* () {
        Fe(f);
        const v = yield u();
        P(e.onSubmit, v);
      });
    }
    function s(f) {
      Fe(f), c(), P(e.onReset);
    }
    function u() {
      return $c(this, null, function* () {
        var f;
        const v = yield Promise.all(t.map(({ validate: b }) => b()));
        if (e.scrollToError) {
          const [, b] = Nh(v, (y) => y === !1, e.scrollToError), m = b > -1;
          if (m) {
            const y = (f = t[b].instance.proxy) == null ? void 0 : f.$el;
            i(y);
          }
          return !m;
        }
        return v.every((b) => b === !0);
      });
    }
    function c() {
      return t.forEach(({ reset: f }) => f());
    }
    function d() {
      return t.forEach(({ resetValidation: f }) => f());
    }
    return {
      n: nC,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: c,
      resetValidation: d
    };
  }
});
uv.render = oC;
var bt = uv;
bt.useValidation = Yn;
bt.useForm = jn;
oe(bt);
le(bt, sv);
const W5 = bt;
var $l = bt;
const cv = {
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
  onClick: L(),
  onLoad: L(),
  onError: L()
}, { name: tC, n: rC, classes: aC } = ee("image"), iC = ["alt", "title", "referrerpolicy", "lazy-loading", "lazy-error"], lC = ["alt", "title", "referrerpolicy", "src"];
function sC(e, n) {
  var o;
  const t = We("lazy"), r = We("ripple");
  return Ne((h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: K({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [
      e.lazy && !e.showErrorSlot ? Ne((h(), S("img", {
        key: 0,
        role: "img",
        class: p(e.n("image")),
        alt: e.alt,
        title: e.title,
        referrerpolicy: e.referrerpolicy,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: K({ objectFit: e.fit, objectPosition: e.position }),
        onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, iC)), [
        [t, (o = e.src) != null ? o : ""]
      ]) : X("v-if", !0),
      !e.lazy && !e.showErrorSlot ? (h(), S("img", {
        key: 1,
        role: "img",
        class: p(e.n("image")),
        alt: e.alt,
        title: e.title,
        referrerpolicy: e.referrerpolicy,
        style: K({ objectFit: e.fit, objectPosition: e.position }),
        src: e.src,
        onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
        onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, lC)) : X("v-if", !0),
      e.showErrorSlot ? V(e.$slots, "error", { key: 2 }) : X("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const dv = x({
  name: tC,
  directives: {
    Lazy: Dt,
    Ripple: rn
  },
  props: cv,
  setup(e, { slots: n }) {
    const o = k(!1);
    ce(
      () => e.src,
      () => {
        o.value = !1;
      }
    );
    function t(i) {
      o.value = !!n.error, P(e.onError, i);
    }
    function r(i) {
      const l = i.currentTarget;
      if (e.lazy) {
        if (l._lazy.state === "success") {
          P(e.onLoad, i);
          return;
        }
        l._lazy.state === "error" && t(i);
      } else
        P(e.onLoad, i);
    }
    function a(i) {
      P(e.onClick, i);
    }
    return {
      showErrorSlot: o,
      n: rC,
      classes: aC,
      toSizeUnit: Oe,
      handleLoad: r,
      handleError: t,
      handleClick: a
    };
  }
});
dv.render = sC;
var La = dv;
oe(La);
le(La, cv);
const K5 = La;
var wl = La;
const fv = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function uC() {
  const { childProviders: e, length: n, bindChildren: o } = yn(
    fv
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: o
  };
}
const Bs = {
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
  onChange: L()
};
var Zo = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const cC = 250, dC = 20, { name: fC, n: wc, classes: pC } = ee("swipe"), vC = ["onClick"];
function mC(e, n) {
  const o = _("var-icon"), t = _("var-button"), r = We("hover");
  return Ne((h(), S(
    "div",
    {
      class: p(e.n()),
      ref: "swipeEl"
    },
    [
      D(
        "div",
        {
          class: p(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
          style: K({
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
      e.navigation ? V(e.$slots, "prev", wo(je({ key: 0 }, {
        index: e.index,
        length: e.length,
        prev: e.prev,
        next: e.next,
        to: e.to,
        hovering: e.hovering
      })), () => [
        G(_e, {
          name: e.getNavigationAnimation("prev")
        }, {
          default: fe(() => [
            e.navigation === !0 || e.hovering ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
              },
              [
                G(t, {
                  "var-swipe-cover": "",
                  disabled: !e.loop && e.index === 0,
                  class: p(e.n("navigation-prev-button")),
                  onClick: n[3] || (n[3] = (a) => e.prev())
                }, {
                  default: fe(() => [
                    G(o, {
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
            )) : X("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : X("v-if", !0),
      e.navigation ? V(e.$slots, "next", wo(je({ key: 1 }, {
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        G(_e, {
          name: e.getNavigationAnimation("next")
        }, {
          default: fe(() => [
            e.navigation === !0 || e.hovering ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
              },
              [
                G(t, {
                  "var-swipe-cover": "",
                  class: p(e.n("navigation-next-button")),
                  disabled: !e.loop && e.index === e.length - 1,
                  onClick: n[4] || (n[4] = (a) => e.next())
                }, {
                  default: fe(() => [
                    G(o, {
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
            )) : X("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : X("v-if", !0),
      V(e.$slots, "indicator", wo(qt({
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        e.indicator && e.length ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
          },
          [
            (h(!0), S(
              Ve,
              null,
              Ze(e.length, (a, i) => (h(), S("div", {
                class: p(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: K({ background: e.indicatorColor }),
                key: a,
                onClick: (l) => e.to(i)
              }, null, 14, vC))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )) : X("v-if", !0)
      ])
    ],
    2
    /* CLASS */
  )), [
    [r, e.handleHovering]
  ]);
}
const pv = x({
  name: fC,
  directives: { Hover: Tn },
  components: { VarButton: Pn, VarIcon: Je },
  props: Bs,
  setup(e) {
    const n = k(null), o = k(0), t = I(() => e.vertical), r = k(0), a = k(0), i = k(!1), l = k(0), s = k(!1), { swipeItems: u, bindSwipeItems: c, length: d } = uC(), { popup: f, bindPopup: v } = Rd(), {
      deltaX: b,
      deltaY: m,
      moveX: y,
      moveY: $,
      offsetX: w,
      offsetY: g,
      touching: C,
      direction: z,
      startTime: O,
      startTouch: A,
      moveTouch: T,
      endTouch: E
    } = mt(), B = I(() => z.value === (e.vertical ? "vertical" : "horizontal"));
    let N = !1, H = -1;
    c({
      size: o,
      currentIndex: l,
      vertical: t
    }), Ke(() => window, "keydown", de), P(v, null), ce(
      () => d.value,
      () => Zo(this, null, function* () {
        yield $n(), ke(), Se();
      })
    ), f && ce(
      () => f.show.value,
      (ve) => Zo(this, null, function* () {
        ve ? (yield $n(), Se()) : U();
      })
    ), Eo(Se), Gt(U), ro(Se);
    function M(ve) {
      return u.find(({ index: Ie }) => Ie.value === ve);
    }
    function q() {
      e.loop && (a.value >= 0 && M(d.value - 1).setTranslate(-r.value), a.value <= -(r.value - o.value) && M(0).setTranslate(r.value), a.value > -(r.value - o.value) && a.value < 0 && (M(d.value - 1).setTranslate(0), M(0).setTranslate(0)));
    }
    function W(ve) {
      const Ie = On(ve) ? ve : Math.floor((a.value - o.value / 2) / -o.value), { loop: Le } = e;
      return Ie <= -1 ? Le ? -1 : 0 : Ie >= d.value ? Le ? d.value : d.value - 1 : Ie;
    }
    function ue(ve) {
      const { loop: Ie } = e;
      return ve === -1 ? Ie ? d.value - 1 : 0 : ve === d.value ? Ie ? 0 : d.value - 1 : ve;
    }
    function Q(ve) {
      return e.loop ? ve < 0 ? d.value + ve : ve >= d.value ? ve - d.value : ve : Mn(ve, 0, d.value - 1);
    }
    function pe() {
      return Zo(this, null, function* () {
        const ve = a.value >= o.value, Ie = a.value <= -r.value, Le = 0, on = -(r.value - o.value);
        i.value = !0, (ve || Ie) && (i.value = !0, a.value = Ie ? Le : on, M(0).setTranslate(0), M(d.value - 1).setTranslate(0)), yield $n(), i.value = !1;
      });
    }
    function ke() {
      N || (l.value = Q(R(e.initialIndex)), N = !0);
    }
    function se() {
      const { autoplay: ve } = e;
      !ve || d.value <= 1 || (U(), H = window.setTimeout(() => {
        Te(), se();
      }, R(ve)));
    }
    function U() {
      H && clearTimeout(H);
    }
    function J(ve) {
      return Zo(this, null, function* () {
        d.value <= 1 || !e.touchable || (A(ve), U(), yield pe(), i.value = !0);
      });
    }
    function te(ve) {
      const { touchable: Ie, vertical: Le } = e;
      !C.value || !Ie || (T(ve), B.value && (Fe(ve), a.value += Le ? $.value : y.value, q()));
    }
    function he() {
      if (!C.value || (E(), !B.value))
        return;
      const { vertical: ve, onChange: Ie } = e, Le = ve ? m.value < 0 : b.value < 0, on = ve ? g.value : w.value, me = performance.now() - O.value <= cC && on >= dC ? W(Le ? l.value + 1 : l.value - 1) : W();
      i.value = !1, a.value = me * -o.value;
      const $e = l.value;
      l.value = ue(me), se(), $e !== l.value && P(Ie, l.value);
    }
    function F(ve) {
      e.navigation === "hover" && (s.value = ve);
    }
    function j(ve) {
      return e.navigation !== "hover" ? "" : wc(`--navigation${e.vertical ? "-vertical" : ""}-${ve}-animation`);
    }
    function de(ve) {
      if (!u.length || u.findIndex(({ isFocusing: on }) => on.value) === -1)
        return;
      const { key: Le } = ve;
      Fe(ve), Le === "ArrowLeft" && He(), Le === "ArrowRight" && Te();
    }
    function Se() {
      n.value && (i.value = !0, o.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = o.value * d.value, a.value = l.value * -o.value, u.forEach((ve) => {
        ve.setTranslate(0);
      }), se(), setTimeout(() => {
        i.value = !1;
      }));
    }
    function Te(ve) {
      return Zo(this, null, function* () {
        if (d.value <= 1)
          return;
        ke();
        const { loop: Ie, onChange: Le } = e, on = l.value;
        if (l.value = Q(on + 1), (ve == null ? void 0 : ve.event) !== !1 && P(Le, l.value), yield pe(), on === d.value - 1 && Ie) {
          M(0).setTranslate(r.value), a.value = d.value * -o.value;
          return;
        }
        on !== d.value - 1 && (a.value = l.value * -o.value);
      });
    }
    function He(ve) {
      return Zo(this, null, function* () {
        if (d.value <= 1)
          return;
        ke();
        const { loop: Ie, onChange: Le } = e, on = l.value;
        if (l.value = Q(on - 1), (ve == null ? void 0 : ve.event) !== !1 && P(Le, l.value), yield pe(), on === 0 && Ie) {
          M(d.value - 1).setTranslate(-r.value), a.value = o.value;
          return;
        }
        on !== 0 && (a.value = l.value * -o.value);
      });
    }
    function xe(ve, Ie) {
      if (d.value <= 1 || ve === l.value)
        return;
      ve = ve < 0 ? 0 : ve, ve = ve >= d.value ? d.value : ve;
      const Le = ve > l.value ? Te : He, on = Math.abs(ve - l.value);
      Array.from({ length: on }).forEach((ae, me) => {
        Le({ event: me === on - 1 ? Ie == null ? void 0 : Ie.event : !1 });
      });
    }
    return {
      length: d,
      index: l,
      swipeEl: n,
      trackSize: r,
      trackTranslate: a,
      lockDuration: i,
      hovering: s,
      n: wc,
      toSizeUnit: Oe,
      classes: pC,
      handleTouchstart: J,
      handleTouchmove: te,
      handleTouchend: he,
      next: Te,
      prev: He,
      to: xe,
      resize: Se,
      toNumber: R,
      handleHovering: F,
      getNavigationAnimation: j
    };
  }
});
pv.render = mC;
var Ra = pv;
oe(Ra);
le(Ra, Bs);
const q5 = Ra;
var Lt = Ra;
function hC() {
  const { bindParent: e, index: n, parentProvider: o } = bn(fv);
  return e || Vn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: o,
    bindSwipe: e
  };
}
const { name: gC, n: bC } = ee("swipe-item"), yC = ["aria-hidden"];
function kC(e, n) {
  return h(), S("div", {
    class: p(e.n()),
    style: K({
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
  ], 46, yC);
}
const vv = x({
  name: gC,
  setup() {
    const e = k(0), n = k(!1), { swipe: o, bindSwipe: t, index: r } = hC(), { size: a, currentIndex: i, vertical: l } = o, s = {
      index: r,
      isFocusing: I(() => n.value),
      setTranslate: u
    };
    t(s);
    function u(c) {
      e.value = c;
    }
    return {
      isFocusing: n,
      size: a,
      index: r,
      currentIndex: i,
      vertical: l,
      translate: e,
      n: bC,
      toSizeUnit: Oe
    };
  }
});
vv.render = kC;
var Is = vv;
oe(Is);
const G5 = Is;
var Rt = Is, $C = Object.defineProperty, Cc = Object.getOwnPropertySymbols, wC = Object.prototype.hasOwnProperty, CC = Object.prototype.propertyIsEnumerable, Sc = (e, n, o) => n in e ? $C(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Pc = (e, n) => {
  for (var o in n || (n = {}))
    wC.call(n, o) && Sc(e, o, n[o]);
  if (Cc)
    for (var o of Cc(n))
      CC.call(n, o) && Sc(e, o, n[o]);
  return e;
};
const mv = Pc(Pc({
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
  "onUpdate:show": L(),
  onLongPress: L()
}, Me(Bs, ["loop", "indicator", "onChange"])), Me(gt, [
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
])), { name: SC, n: zc, classes: PC } = ee("image-preview"), Di = 12, Oc = 200, zC = 350, Tc = 200, OC = 500, dr = 1, TC = ["onTouchstart"], EC = ["src", "alt"];
function BC(e, n) {
  const o = _("var-swipe-item"), t = _("var-swipe"), r = _("var-icon"), a = _("var-popup");
  return h(), Pe(a, {
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
    default: fe(() => [
      G(t, je({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.toNumber(e.initialIndex),
        loop: e.loop,
        onChange: e.onChange
      }, e.$attrs), {
        default: fe(() => [
          (h(!0), S(
            Ve,
            null,
            Ze(e.images, (i, l) => (h(), Pe(o, {
              class: p(e.n("swipe-item")),
              "var-image-preview-cover": "",
              key: i
            }, {
              default: fe(() => [
                D("div", {
                  class: p(e.n("zoom-container")),
                  style: K({
                    transform: `scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,
                    transitionTimingFunction: e.transitionTimingFunction,
                    transitionDuration: e.transitionDuration
                  }),
                  onTouchstart: (s) => e.handleTouchstart(s, l),
                  onTouchmove: n[0] || (n[0] = (...s) => e.handleTouchmove && e.handleTouchmove(...s)),
                  onTouchend: n[1] || (n[1] = (...s) => e.handleTouchend && e.handleTouchend(...s)),
                  onTouchcancel: n[2] || (n[2] = (...s) => e.handleTouchcancel && e.handleTouchcancel(...s))
                }, [
                  D("img", {
                    role: "img",
                    class: p(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                    src: i,
                    alt: i
                  }, null, 10, EC)
                ], 46, TC)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        indicator: fe(({ index: i, length: l }) => [
          V(e.$slots, "indicator", {
            index: i,
            length: l
          }, () => [
            e.indicator && e.images.length > 1 ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.n("indicators"))
              },
              re(i + 1) + " / " + re(l),
              3
              /* TEXT, CLASS */
            )) : X("v-if", !0)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]),
      V(e.$slots, "close-icon", {}, () => [
        e.closeable ? (h(), Pe(r, {
          key: 0,
          class: p(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        }, null, 8, ["class", "onClick"])) : X("v-if", !0)
      ]),
      e.$slots.extra ? (h(), S(
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
      )) : X("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "transition", "close-on-key-escape", "lock-scroll", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onKeyEscape", "onRouteChange"]);
}
const hv = x({
  name: SC,
  components: {
    VarSwipe: Lt,
    VarSwipeItem: Rt,
    VarPopup: Po,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: mv,
  setup(e) {
    const n = Zn(e, "show"), o = k(1), t = k(0), r = k(0), a = k(), i = k(), l = k(!0), s = k(null), { moveX: u, moveY: c, distance: d, startTime: f, startTouch: v, moveTouch: b, endTouch: m } = mt(), y = I(() => {
      const { imagePreventDefault: U, show: J } = e;
      return J && U;
    });
    let $ = null, w = null, g = !1;
    const C = {
      start: null,
      prev: null
    };
    Ke(() => document, "contextmenu", ue);
    function z(U) {
      o.value = R(U), l.value = !1, C.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Tc);
    }
    function O() {
      o.value = 1, t.value = 0, r.value = 0, l.value = !0, C.prev = null, a.value = void 0, i.value = void 0;
    }
    function A(U) {
      return C.prev ? d.value <= Di && performance.now() - f.value <= Oc && C.prev === U : !1;
    }
    function T(U) {
      return !U || !C.start || !C.prev ? !1 : d.value <= Di && performance.now() - f.value < zC && (U === C.start || U.parentNode === C.start);
    }
    function E() {
      m(), window.clearTimeout(w), g = !1, C.start = null;
    }
    function B(U) {
      if (m(), window.clearTimeout(w), g) {
        g = !1;
        return;
      }
      const J = T(U.target);
      $ = window.setTimeout(() => {
        J && W(), C.start = null;
      }, Oc);
    }
    function N(U, J) {
      window.clearTimeout($), window.clearTimeout(w);
      const te = U.currentTarget;
      if (C.start = te, w = window.setTimeout(() => {
        g = !0, P(e.onLongPress, J);
      }, OC), A(te)) {
        o.value > dr ? O() : z(e.zoom);
        return;
      }
      v(U), C.prev = te;
    }
    function H(U) {
      const { offsetWidth: J, offsetHeight: te } = U, { naturalWidth: he, naturalHeight: F } = U.querySelector(`.${zc("image")}`);
      return {
        width: J,
        height: te,
        imageRadio: F / he,
        rootRadio: te / J,
        zoom: R(e.zoom)
      };
    }
    function Y(U) {
      const { zoom: J, imageRadio: te, rootRadio: he, width: F, height: j } = H(U);
      if (!te)
        return 0;
      const de = te > he ? j / te : F;
      return Math.max(0, (J * de - F) / 2) / J;
    }
    function M(U) {
      const { zoom: J, imageRadio: te, rootRadio: he, width: F, height: j } = H(U);
      if (!te)
        return 0;
      const de = te > he ? j : F * te;
      return Math.max(0, (J * de - j) / 2) / J;
    }
    function q(U) {
      if (!C.prev)
        return;
      b(U);
      const J = U.currentTarget;
      if (d.value > Di && window.clearTimeout(w), o.value > dr) {
        const te = Y(J), he = M(J);
        t.value = Mn(t.value + u.value, -te, te), r.value = Mn(r.value + c.value, -he, he);
      }
      C.prev = J;
    }
    function W() {
      if (o.value > dr) {
        O(), setTimeout(() => P(e["onUpdate:show"], !1), Tc);
        return;
      }
      P(e["onUpdate:show"], !1);
    }
    function ue(U) {
      y.value && Fe(U);
    }
    function Q(U) {
      var J;
      (J = s.value) == null || J.prev(U);
    }
    function pe(U) {
      var J;
      (J = s.value) == null || J.next(U);
    }
    function ke(U, J) {
      var te;
      (te = s.value) == null || te.to(U, J);
    }
    function se(U) {
      U <= dr ? O() : z(U);
    }
    return {
      swipeRef: s,
      isPreventDefault: y,
      show: n,
      scale: o,
      translateX: t,
      translateY: r,
      canSwipe: l,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: zc,
      classes: PC,
      toNumber: R,
      handleTouchstart: N,
      handleTouchmove: q,
      handleTouchend: B,
      handleTouchcancel: E,
      close: W,
      prev: Q,
      next: pe,
      to: ke,
      zoom: se
    };
  }
});
hv.render = BC;
var er = hv, IC = Object.defineProperty, DC = Object.defineProperties, MC = Object.getOwnPropertyDescriptors, Ec = Object.getOwnPropertySymbols, NC = Object.prototype.hasOwnProperty, AC = Object.prototype.propertyIsEnumerable, Bc = (e, n, o) => n in e ? IC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, fr = (e, n) => {
  for (var o in n || (n = {}))
    NC.call(n, o) && Bc(e, o, n[o]);
  if (Ec)
    for (var o of Ec(n))
      AC.call(n, o) && Bc(e, o, n[o]);
  return e;
}, Ic = (e, n) => DC(e, MC(n));
let yo, Tt = {};
function VC(e = {}) {
  return gn(e) ? Ic(fr({}, Tt), { images: [e] }) : Ye(e) ? Ic(fr({}, Tt), { images: e }) : fr(fr({}, Tt), e);
}
function No(e) {
  if (!to())
    return;
  No.close();
  const n = VC(e), o = Qe(n);
  o.teleport = "body", yo = o;
  const { unmountInstance: t } = ht(er, o, {
    onClose: () => P(o.onClose),
    onClosed: () => {
      P(o.onClosed), t(), yo === o && (yo = null);
    },
    onRouteChange: () => {
      t(), yo === o && (yo = null);
    },
    "onUpdate:show": (r) => {
      o.show = r;
    }
  });
  o.show = !0;
}
No.close = () => {
  if (yo != null) {
    const e = yo;
    yo = null, qe().then(() => {
      e.show = !1;
    });
  }
};
No.setDefaultOptions = (e) => {
  Tt = e;
};
No.resetDefaultOptions = () => {
  Tt = {};
};
No.Component = er;
oe(er);
oe(er, No);
le(No, mv);
const X5 = er;
var Ft = No;
const gv = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function LC() {
  const { bindChildren: e, length: n, childProviders: o } = yn(
    gv
  );
  return {
    length: n,
    indexAnchors: o,
    bindIndexAnchors: e
  };
}
function RC() {
  const { parentProvider: e, index: n, bindParent: o } = bn(
    gv
  );
  return o || Vn("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: o
  };
}
const bv = {
  index: [Number, String]
}, { name: FC, n: UC, classes: HC } = ee("index-anchor");
function YC(e, n) {
  return h(), Pe(vt(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: fe(() => [
      D(
        "div",
        je({
          class: e.n()
        }, e.$attrs),
        [
          V(e.$slots, "default", {}, () => [
            De(
              re(e.name),
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
const yv = x({
  name: FC,
  components: { VarSticky: ct },
  inheritAttrs: !1,
  props: bv,
  setup(e) {
    const n = k(!1), o = I(() => e.index), t = k(null), { index: r, indexBar: a, bindIndexBar: i } = RC(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: c, zIndex: d } = a;
    i({
      index: r,
      name: o,
      setDisabled: b,
      getOffsetTop: v
    });
    function v() {
      return t.value ? t.value.$el ? t.value.$el.offsetTop : t.value.offsetTop : 0;
    }
    function b(m) {
      n.value = m;
    }
    return {
      n: UC,
      classes: HC,
      name: o,
      anchorEl: t,
      active: l,
      sticky: s,
      zIndex: d,
      disabled: n,
      cssMode: u,
      stickyOffsetTop: c,
      Transition: _e
    };
  }
});
yv.render = YC;
var Fa = yv;
oe(Fa);
le(Fa, bv);
const Z5 = Fa;
var Cl = Fa;
const kv = {
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
  onClick: L(),
  onChange: L()
};
var Dc = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: jC, n: WC, classes: KC } = ee("index-bar"), qC = ["onClick"];
function GC(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n()),
      ref: "barEl"
    },
    [
      V(e.$slots, "default"),
      D(
        "ul",
        {
          class: p(e.n("anchor-list")),
          style: K({ zIndex: e.toNumber(e.zIndex) + 2, display: e.hideList ? "none" : "block" })
        },
        [
          (h(!0), S(
            Ve,
            null,
            Ze(e.anchorNameList, (o) => (h(), S("li", {
              key: o,
              class: p(e.classes(e.n("anchor-item"), [e.active === o, e.n("anchor-item--active")])),
              style: K({ color: e.active === o && e.highlightColor ? e.highlightColor : void 0 }),
              onClick: (t) => e.anchorClick({ anchorName: o, manualCall: !0 })
            }, [
              V(e.$slots, "anchor-name", { anchorName: o }, () => [
                De(
                  re(o),
                  1
                  /* TEXT */
                )
              ])
            ], 14, qC))),
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
const $v = x({
  name: jC,
  props: kv,
  setup(e) {
    const n = k(""), o = k(null), t = k([]), r = k(), a = I(() => e.sticky), i = I(() => e.stickyCssMode), l = I(() => nn(e.stickyOffsetTop)), s = I(() => e.zIndex), { length: u, indexAnchors: c, bindIndexAnchors: d } = LC();
    let f = null, v = !1;
    const b = {
      active: r,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    ce(
      () => u.value,
      () => Dc(this, null, function* () {
        yield $n(), t.value = c.filter(({ name: O }) => O.value != null).map(({ name: O }) => O.value);
      })
    ), vn(g), Yr(C), pt(() => {
      v = !0, C();
    }), Eo(() => {
      !v || r.value === void 0 || (w({
        anchorName: r.value,
        options: { event: !1 }
      }), v = !1);
    }), d(b);
    function m(O, A) {
      const T = tt(O) ? O.name.value : O;
      T === r.value || T === void 0 || (r.value = T, (A == null ? void 0 : A.event) !== !1 && P(e.onChange, T));
    }
    function y() {
      const { top: O } = sn(f), { top: A } = sn(o.value);
      return Ro(f) - O + A;
    }
    function $() {
      const O = Ro(f), A = f === window ? document.body.scrollHeight : f.scrollHeight, T = y();
      c.forEach((E, B) => {
        const N = E.getOffsetTop(), H = O - N + l.value - T, Y = B === c.length - 1 ? A : c[B + 1].getOffsetTop() - E.getOffsetTop();
        E.setDisabled(!0), H >= 0 && H < Y && n.value === "" && (E.setDisabled(!1), m(E));
      });
    }
    function w(O) {
      return Dc(this, arguments, function* ({ anchorName: A, manualCall: T = !1, options: E }) {
        if (T && P(e.onClick, A), A === r.value && !v)
          return;
        const B = c.find(({ name: q }) => A === q.value);
        if (!B)
          return;
        const N = y(), Y = B.getOffsetTop() - l.value + N, M = as(f);
        n.value = A, m(A, E), yield It(f, {
          left: M,
          top: Y,
          animation: cf,
          duration: R(e.duration)
        }), yield $n(), n.value = "";
      });
    }
    function g() {
      f = zo(o.value), f.addEventListener("scroll", $);
    }
    function C() {
      f && f.removeEventListener("scroll", $);
    }
    function z(O, A) {
      Bt(() => w({ anchorName: O, options: A }));
    }
    return {
      barEl: o,
      active: r,
      zIndex: s,
      anchorNameList: t,
      n: WC,
      classes: KC,
      toNumber: R,
      scrollTo: z,
      anchorClick: w
    };
  }
});
$v.render = GC;
var Ua = $v;
oe(Ua);
le(Ua, kv);
const J5 = Ua;
var Sl = Ua, XC = Object.defineProperty, Mc = Object.getOwnPropertySymbols, ZC = Object.prototype.hasOwnProperty, JC = Object.prototype.propertyIsEnumerable, Nc = (e, n, o) => n in e ? XC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, QC = (e, n) => {
  for (var o in n || (n = {}))
    ZC.call(n, o) && Nc(e, o, n[o]);
  if (Mc)
    for (var o of Mc(n))
      JC.call(n, o) && Nc(e, o, n[o]);
  return e;
};
const wv = QC({
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
  rules: Array,
  enterkeyhint: String,
  onFocus: L(),
  onBlur: L(),
  onInput: L(),
  onChange: L(),
  onClear: L(),
  "onUpdate:modelValue": L()
}, Me(Na, [
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
])), { name: _C, n: xC, classes: eS } = ee("input"), nS = ["placeholder", "enterkeyhint"], oS = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], tS = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function rS(e, n) {
  const o = _("var-field-decorator"), t = _("var-form-details");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[13] || (n[13] = (...r) => e.handleMousedown && e.handleMousedown(...r))
    },
    [
      G(
        o,
        wo(qt({
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
          isFocusing: e.isFocusing,
          errorMessage: e.errorMessage,
          formDisabled: e.formDisabled,
          disabled: e.disabled,
          clearable: e.clearable,
          cursor: e.cursor,
          composing: e.isComposing,
          hintCenter: !e.textarea,
          onClick: e.handleClick,
          onClear: e.handleClear
        })),
        Et({
          "clear-icon": fe(({ clear: r }) => [
            V(e.$slots, "clear-icon", { clear: r })
          ]),
          "append-icon": fe(() => [
            V(e.$slots, "append-icon")
          ]),
          default: fe(() => [
            e.normalizedType === "password" ? (h(), S("input", {
              key: 0,
              tabindex: "-1",
              class: p(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: K({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, nS)) : X("v-if", !0),
            e.textarea ? (h(), S("textarea", {
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
              autocomplete: "new-password",
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
              style: K({
                color: e.errorMessage ? void 0 : e.textColor,
                caretColor: e.errorMessage ? void 0 : e.focusColor,
                resize: e.resize ? "vertical" : "none",
                "--input-placeholder-color": e.placeholderColor
              }),
              onFocus: n[0] || (n[0] = (...r) => e.handleFocus && e.handleFocus(...r)),
              onBlur: n[1] || (n[1] = (...r) => e.handleBlur && e.handleBlur(...r)),
              onInput: n[2] || (n[2] = (...r) => e.handleInput && e.handleInput(...r)),
              onChange: n[3] || (n[3] = (...r) => e.handleChange && e.handleChange(...r)),
              onCompositionstart: n[4] || (n[4] = (...r) => e.handleCompositionStart && e.handleCompositionStart(...r)),
              onCompositionend: n[5] || (n[5] = (...r) => e.handleCompositionEnd && e.handleCompositionEnd(...r))
            }, null, 46, oS)) : (h(), S("input", {
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
              autocomplete: "new-password",
              id: e.id,
              disabled: e.formDisabled || e.disabled,
              readonly: e.formReadonly || e.readonly,
              type: e.normalizedType,
              value: e.modelValue,
              placeholder: e.hint ? void 0 : e.placeholder,
              maxlength: e.maxlength,
              enterkeyhint: e.enterkeyhint,
              inputmode: e.type === "number" ? "decimal" : void 0,
              style: K({
                color: e.errorMessage ? void 0 : e.textColor,
                caretColor: e.errorMessage ? void 0 : e.focusColor,
                "--input-placeholder-color": e.placeholderColor
              }),
              onFocus: n[6] || (n[6] = (...r) => e.handleFocus && e.handleFocus(...r)),
              onBlur: n[7] || (n[7] = (...r) => e.handleBlur && e.handleBlur(...r)),
              onInput: n[8] || (n[8] = (...r) => e.handleInput && e.handleInput(...r)),
              onChange: n[9] || (n[9] = (...r) => e.handleChange && e.handleChange(...r)),
              onCompositionstart: n[10] || (n[10] = (...r) => e.handleCompositionStart && e.handleCompositionStart(...r)),
              onCompositionend: n[11] || (n[11] = (...r) => e.handleCompositionEnd && e.handleCompositionEnd(...r))
            }, null, 46, tS))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: fe(() => [
              V(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      ),
      G(t, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText,
        onMousedown: n[12] || (n[12] = An(() => {
        }, ["stop"]))
      }, Et({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: fe(() => [
            V(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"])
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Cv = x({
  name: _C,
  components: {
    VarFormDetails: En,
    VarFieldDecorator: Vt
  },
  props: wv,
  setup(e) {
    const n = Bd(), o = k(null), t = k(!1), r = k(!1), { bindForm: a, form: i } = jn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Yn(), d = I(() => e.disabled || e.readonly ? "" : "text"), f = I(() => e.type === "number" ? "text" : e.type), v = I(() => {
      const { maxlength: Q, modelValue: pe } = e;
      return Q ? _n(pe) ? `0 / ${Q}` : `${String(pe).length}/${Q}` : "";
    }), b = I(() => {
      const { hint: Q, blurColor: pe, focusColor: ke } = e;
      if (!Q)
        return l.value ? "var(--field-decorator-error-color)" : t.value ? ke || "var(--field-decorator-focus-color)" : pe || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    P(a, {
      reset: M,
      validate: q,
      resetValidation: c
    }), vn(() => {
      e.autofocus && W();
    });
    function y(Q) {
      qe(() => {
        const { validateTrigger: pe, rules: ke, modelValue: se } = e;
        s(pe, Q, ke, se);
      });
    }
    function $(Q) {
      t.value = !0, P(e.onFocus, Q), y("onFocus");
    }
    function w(Q) {
      t.value = !1, P(e.onBlur, Q), y("onBlur");
    }
    function g(Q) {
      const pe = Q.target;
      let { value: ke } = pe;
      e.type === "number" && (ke = B(ke));
      const se = H(ke);
      return se === e.modelValue && (pe.value = se), se;
    }
    function C() {
      r.value = !0;
    }
    function z(Q) {
      r.value && (r.value = !1, Q.target.dispatchEvent(new Event("input")));
    }
    function O(Q) {
      if (r.value)
        return;
      const pe = g(Q);
      P(e["onUpdate:modelValue"], pe), P(e.onInput, pe, Q), y("onInput");
    }
    function A(Q) {
      const pe = N(g(Q));
      e.modelModifiers.trim && P(e["onUpdate:modelValue"], pe), P(e.onChange, pe, Q), y("onChange");
    }
    function T() {
      const { disabled: Q, readonly: pe, clearable: ke, onClear: se } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || Q || pe || !ke || (P(e["onUpdate:modelValue"], ""), P(se, ""), y("onClear"));
    }
    function E(Q) {
      const { disabled: pe, onClick: ke } = e;
      i != null && i.disabled.value || pe || (P(ke, Q), y("onClick"));
    }
    function B(Q) {
      const pe = Q.indexOf("-"), ke = Q.indexOf(".");
      return pe > -1 && (Q = pe === 0 ? "-" + Q.replace(/-/g, "") : Q.replace(/-/g, "")), ke > -1 && (Q = Q.slice(0, ke + 1) + Q.slice(ke).replace(/\./g, "")), Q.replace(/[^-0-9.]/g, "");
    }
    function N(Q) {
      return e.modelModifiers.trim ? Q.trim() : Q;
    }
    function H(Q) {
      return e.maxlength ? Q.slice(0, R(e.maxlength)) : Q;
    }
    function Y(Q) {
      const { disabled: pe } = e;
      i != null && i.disabled.value || pe || Q.target === o.value || (W(), Fe(Q));
    }
    function M() {
      P(e["onUpdate:modelValue"], ""), c();
    }
    function q() {
      return u(e.rules, e.modelValue);
    }
    function W() {
      var Q;
      (Q = o.value) == null || Q.focus();
    }
    function ue() {
      o.value.blur();
    }
    return {
      el: o,
      id: n,
      isFocusing: t,
      isComposing: r,
      errorMessage: l,
      placeholderColor: b,
      normalizedType: f,
      cursor: d,
      maxlengthText: v,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: xC,
      classes: eS,
      isEmpty: _n,
      handleFocus: $,
      handleBlur: w,
      handleInput: O,
      handleChange: A,
      handleClear: T,
      handleClick: E,
      handleCompositionStart: C,
      handleCompositionEnd: z,
      handleMousedown: Y,
      validate: q,
      resetValidation: c,
      reset: M,
      focus: W,
      blur: ue
    };
  }
});
Cv.render = rS;
var Ha = Cv;
oe(Ha);
le(Ha, wv);
const Q5 = Ha;
var Rr = Ha;
const Sv = {
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
  onClick: L()
}, { name: aS, n: iS, classes: lS } = ee("link");
function sS(e, n) {
  return h(), Pe(vt(e.tag), je(e.linkProps, {
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
    default: fe(() => [
      V(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const Pv = x({
  name: aS,
  props: Sv,
  setup(e) {
    const n = k(!1), o = I(() => {
      const { disabled: a, href: i, to: l } = e;
      return a ? "span" : i ? "a" : l ? "router-link" : "a";
    }), t = I(() => {
      const { disabled: a, href: i, target: l, to: s, replace: u, rel: c } = e;
      return a ? {} : i ? { href: i, target: l, rel: c } : s ? { to: s, target: l, replace: u } : {};
    });
    function r(a) {
      e.disabled || P(e.onClick, a);
    }
    return {
      tag: o,
      linkProps: t,
      isFocusing: n,
      inMobile: wr,
      n: iS,
      classes: lS,
      handleClick: r,
      toSizeUnit: Oe
    };
  }
});
Pv.render = sS;
var Ya = Pv;
oe(Ya);
le(Ya, Sv);
const _5 = Ya;
var Pl = Ya;
const zv = {
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
  onLoad: L(),
  "onUpdate:loading": L(),
  "onUpdate:error": L()
}, Ov = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function uS() {
  const { bindChildren: e, childProviders: n, length: o } = yn(
    Ov
  );
  return {
    length: o,
    tabItemList: n,
    bindTabItem: e
  };
}
const Tv = Symbol("TAB_ITEM_BIND_LIST_KEY");
function cS() {
  const { parentProvider: e, bindParent: n, index: o } = bn(
    Ov
  );
  return n || Vn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: o,
    tabsItems: e,
    bindTabsItems: n
  };
}
function dS() {
  const { childProviders: e, bindChildren: n, length: o } = yn(Tv);
  return {
    length: o,
    lists: e,
    bindLists: n
  };
}
function fS() {
  const { parentProvider: e, bindParent: n, index: o } = bn(Tv);
  return {
    index: o,
    tabItem: e,
    bindTabItem: n
  };
}
var pS = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: vS, n: mS, classes: hS } = ee("list");
function gS(e, n) {
  const o = _("var-loading"), t = We("ripple");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [
      V(e.$slots, "default"),
      e.loading ? V(e.$slots, "loading", { key: 0 }, () => {
        var r;
        return [
          D(
            "div",
            {
              class: p(e.n("loading"))
            },
            [
              D(
                "div",
                {
                  class: p(e.n("loading-text"))
                },
                re((r = e.loadingText) != null ? r : (e.pt ? e.pt : e.t)("listLoadingText")),
                3
                /* TEXT, CLASS */
              ),
              G(o, {
                size: "mini",
                radius: 10
              })
            ],
            2
            /* CLASS */
          )
        ];
      }) : X("v-if", !0),
      e.finished ? V(e.$slots, "finished", { key: 1 }, () => {
        var r;
        return [
          D(
            "div",
            {
              class: p(e.n("finished"))
            },
            re((r = e.finishedText) != null ? r : (e.pt ? e.pt : e.t)("listFinishedText")),
            3
            /* TEXT, CLASS */
          )
        ];
      }) : X("v-if", !0),
      e.error ? V(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          Ne((h(), S(
            "div",
            {
              class: p(e.n("error")),
              onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
            },
            [
              De(
                re((r = e.errorText) != null ? r : (e.pt ? e.pt : e.t)("listErrorText")),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          )), [
            [t]
          ])
        ];
      }) : X("v-if", !0),
      D(
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
const Ev = x({
  name: vS,
  directives: { Ripple: rn },
  components: { VarLoading: it },
  props: zv,
  setup(e) {
    const n = k(null), o = k(null), { tabItem: t, bindTabItem: r } = fS(), { t: a } = ao();
    let i;
    P(r, {}), t && ce(() => t.current.value, c), ce(() => [e.loading, e.error, e.finished], c), vn(() => {
      i = zo(n.value), i.addEventListener("scroll", c), e.immediateCheck && c();
    }), Gt(u);
    function l() {
      P(e["onUpdate:error"], !1), P(e["onUpdate:loading"], !0), P(e.onLoad);
    }
    function s() {
      const { bottom: d } = sn(i), { bottom: f } = sn(o.value);
      return Math.floor(f) - nn(e.offset) <= d;
    }
    function u() {
      i && i.removeEventListener("scroll", c);
    }
    function c() {
      return pS(this, null, function* () {
        yield qe(), !(e.loading || e.finished || e.error || (t == null ? void 0 : t.current.value) === !1 || !s()) && l();
      });
    }
    return {
      listEl: n,
      detectorEl: o,
      pt: a,
      t: an,
      isNumber: On,
      load: l,
      check: c,
      n: mS,
      classes: hS
    };
  }
});
Ev.render = gS;
var ja = Ev;
oe(ja);
le(ja, zv);
const x5 = ja;
var zl = ja;
const bS = {
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
  name: yS,
  classes: kS,
  n: Ac
} = ee("loading-bar");
var $S = x({
  name: yS,
  props: bS,
  setup(e) {
    return () => G("div", {
      class: kS(Ac(), [e.error, Ac("--error")]),
      style: {
        zIndex: Nn.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: Oe(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: Oe(e.top),
        transitionDuration: e.transitionDuration == null ? void 0 : `${e.transitionDuration}ms`
      }
    }, null);
  }
});
const Ds = 200;
let Bv, Iv, Dv, Mv, Wa, Vc, Nv = {};
const wS = {
  value: 0,
  opacity: 0,
  error: !1
}, ln = Qe(wS);
function CS(e) {
  Object.assign(ln, e), Nv = e;
}
const SS = () => {
  Object.keys(Nv).forEach((e) => {
    ln[e] !== void 0 && (ln[e] = void 0);
  });
}, Av = () => {
  Vc || (Vc = !0, ht($S, ln));
}, Ms = () => {
  Bv = window.setTimeout(() => {
    ln.transitionDuration = void 0, !(ln.value >= 95) && (ln.value += ln.value < 70 ? Math.round(5 * Math.random()) : Math.random(), Ms());
  }, 200);
}, Ns = () => {
  window.clearTimeout(Bv), window.clearTimeout(Wa), window.clearTimeout(Dv), window.clearTimeout(Iv), window.clearTimeout(Mv);
}, Vv = () => {
  Ns(), ln.value = 100, Wa = window.setTimeout(() => {
    ln.opacity = 0, Mv = window.setTimeout(() => {
      ln.error = !1;
    }, 250);
  }, Ds + 100);
}, PS = () => {
  Ns(), ln.error = !1, ln.value = 0, ln.transitionDuration = 0, Av(), Wa = window.setTimeout(() => {
    ln.opacity = 1;
  }, Ds), Ms();
}, zS = () => {
  var e;
  Dv = window.setTimeout(Vv, (e = ln.finishDelay) != null ? e : 0);
}, OS = () => {
  Ns(), ln.error = !0, ln.value === 100 && (ln.value = 0, ln.transitionDuration = 0), Av(), Wa = window.setTimeout(() => {
    ln.opacity = 1;
  }, Ds), Ms(), Iv = window.setTimeout(Vv, 300);
}, Lv = {
  start: PS,
  finish: zS,
  error: OS,
  setDefaultOptions: CS,
  resetDefaultOptions: SS
}, eT = Lv;
var Ol = Lv;
const Rv = {
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
var TS = Object.defineProperty, ES = Object.defineProperties, BS = Object.getOwnPropertyDescriptors, Lc = Object.getOwnPropertySymbols, IS = Object.prototype.hasOwnProperty, DS = Object.prototype.propertyIsEnumerable, Rc = (e, n, o) => n in e ? TS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, MS = (e, n) => {
  for (var o in n || (n = {}))
    IS.call(n, o) && Rc(e, o, n[o]);
  if (Lc)
    for (var o of Lc(n))
      DS.call(n, o) && Rc(e, o, n[o]);
  return e;
}, NS = (e, n) => ES(e, BS(n));
const { name: AS, n: VS } = ee("locale-provider"), LS = x({
  name: AS,
  props: Rv,
  setup(e, { slots: n }) {
    const o = I(
      () => {
        var r;
        return Object.entries((r = e.messages) != null ? r : {}).reduce((a, [i, l]) => (a[i] = NS(MS({}, l), {
          lang: i
        }), a), {});
      }
    );
    tb({
      t
    });
    function t(r) {
      if (Cr(o.value, e.locale) && Cr(o.value[e.locale], r))
        return o.value[e.locale][r];
    }
    return () => jr(
      e.tag,
      {
        class: VS()
      },
      P(n.default)
    );
  }
});
var Ka = LS;
oe(Ka);
le(Ka, Rv);
const nT = Ka;
var Tl = Ka;
const As = {
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
  onOpen: L(),
  onOpened: L(),
  onClose: L(),
  onClosed: L(),
  onClickOutside: L(),
  "onUpdate:show": L()
}, { name: RS, n: FS, classes: US } = ee("menu");
function HS(e, n) {
  return h(), S(
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
      (h(), Pe(oo, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        G(_e, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: fe(() => [
            Ne(D(
              "div",
              {
                ref: "popover",
                style: K({
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
                onClick: n[0] || (n[0] = An(() => {
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
              [Xn, e.show]
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
const Fv = x({
  name: RS,
  props: As,
  setup(e) {
    const { disabled: n } = Go(), {
      popover: o,
      host: t,
      hostSize: r,
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
      open: b,
      // expose
      close: m,
      // expose
      resize: y
    } = xp(e);
    return {
      popover: o,
      host: t,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: pn,
      toSizeUnit: Oe,
      n: FS,
      classes: US,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handlePopoverClose: f,
      handleClosed: v,
      resize: y,
      open: b,
      close: m
    };
  }
});
Fv.render = HS;
var qa = Fv;
oe(qa);
le(qa, As);
const oT = qa;
var Ut = qa;
const Uv = Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function YS() {
  const { length: e, childProviders: n, bindChildren: o } = yn(
    Uv
  );
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: o
  };
}
function jS() {
  const { index: e, parentProvider: n, bindParent: o } = bn(
    Uv
  );
  return o || Vn("MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: o
  };
}
const Hv = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  // internal
  option: Object
}, { name: WS, n: KS, classes: qS } = ee("menu-option"), GS = ["tabindex"];
function XS(e, n) {
  const o = _("var-checkbox"), t = _("maybe-v-node"), r = _("var-hover-overlay"), a = We("ripple"), i = We("hover");
  return Ne((h(), S("div", {
    ref: "root",
    class: p(
      e.classes(e.n(), e.n("$--box"), e.n(`--${e.size}`), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])
    ),
    tabindex: e.disabled ? void 0 : "-1",
    onClick: n[2] || (n[2] = (...l) => e.handleClick && e.handleClick(...l)),
    onFocus: n[3] || (n[3] = (l) => e.isFocusing = !0),
    onBlur: n[4] || (n[4] = (l) => e.isFocusing = !1)
  }, [
    D(
      "div",
      {
        class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")]))
      },
      null,
      2
      /* CLASS */
    ),
    e.multiple ? (h(), Pe(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => e.optionSelected = l),
      disabled: e.disabled,
      onClick: n[1] || (n[1] = An(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "disabled", "onChange"])) : X("v-if", !0),
    V(e.$slots, "default", {}, () => [
      D(
        "div",
        {
          class: p(e.classes(e.n("text"), e.n("$--ellipsis")))
        },
        [
          G(t, { is: e.labelVNode }, null, 8, ["is"])
        ],
        2
        /* CLASS */
      )
    ]),
    G(r, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 42, GS)), [
    [a, { disabled: e.disabled || !e.ripple }],
    [i, e.handleHovering, "desktop"]
  ]);
}
const Yv = x({
  name: WS,
  directives: { Ripple: rn, Hover: Tn },
  components: {
    VarCheckbox: lt,
    VarHoverOverlay: Ln,
    MaybeVNode: Xt
  },
  props: Hv,
  setup(e) {
    const n = k(), o = k(!1), t = k(!1), r = I(() => t.value), a = I(
      () => {
        var z;
        return Qn(e.label) ? e.label(
          (z = e.option) != null ? z : {
            label: e.label,
            value: e.value,
            disabled: e.disabled,
            ripple: e.ripple
          },
          t.value
        ) : e.label;
      }
    ), i = I(() => e.value), { menuSelect: l, bindMenuSelect: s } = jS(), { size: u, multiple: c, onSelect: d, computeLabel: f } = l, { hovering: v, handleHovering: b } = Jn(), m = {
      label: a,
      value: i,
      selected: r,
      sync: C
    };
    ce([() => e.label, () => e.value], f), s(m), Ke(() => window, "keydown", $), Ke(() => window, "keyup", w);
    function y() {
      e.disabled || g();
    }
    function $(z) {
      o.value && ((z.key === " " || z.key === "Enter") && Fe(z), z.key === "Enter" && n.value.click());
    }
    function w(z) {
      o.value && z.key === " " && (Fe(z), n.value.click());
    }
    function g() {
      c.value && (t.value = !t.value), d(m);
    }
    function C(z) {
      t.value = z;
    }
    return {
      root: n,
      optionSelected: t,
      size: u,
      multiple: c,
      hovering: v,
      isFocusing: o,
      labelVNode: a,
      n: KS,
      classes: qS,
      handleHovering: b,
      handleClick: y,
      handleSelect: g
    };
  }
});
Yv.render = XS;
var Ga = Yv;
oe(Ga);
le(Ga, Hv);
const tT = Ga;
var Ht = Ga, ZS = Object.defineProperty, Fc = Object.getOwnPropertySymbols, JS = Object.prototype.hasOwnProperty, QS = Object.prototype.propertyIsEnumerable, Uc = (e, n, o) => n in e ? ZS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, _S = (e, n) => {
  for (var o in n || (n = {}))
    JS.call(n, o) && Uc(e, o, n[o]);
  if (Fc)
    for (var o of Fc(n))
      QS.call(n, o) && Uc(e, o, n[o]);
  return e;
};
const jv = _S({
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: void 0
  },
  options: Array,
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
  "onUpdate:modelValue": L()
}, Me(As, [
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
]));
function Wv(e) {
  const {
    multiple: n,
    modelValue: o,
    optionProviders: t,
    optionProvidersLength: r
  } = e, a = k(""), i = k([]);
  ce(o, d, { deep: !0 }), ce(r, d);
  function l() {
    const f = n(), v = o();
    f && (i.value = v.map(s)), !f && !_n(v) && (a.value = s(v)), !f && _n(v) && (a.value = "");
  }
  function s(f) {
    var v;
    const b = t();
    let m = b.find(({ value: y }) => y.value === f);
    return m || (m = b.find(({ label: y }) => y.value === f)), (v = m == null ? void 0 : m.label.value) != null ? v : "";
  }
  function u({ value: f, label: v }) {
    var b;
    return (b = f.value) != null ? b : v.value;
  }
  function c(f) {
    const v = n(), b = t();
    return v ? b.filter(({ selected: m }) => m.value).map(u) : u(f);
  }
  function d() {
    const f = n(), v = o(), b = t();
    f ? b.forEach((m) => m.sync(v.includes(u(m)))) : b.forEach((m) => m.sync(v === u(m))), l();
  }
  return {
    label: a,
    labels: i,
    computeLabel: l,
    getSelectedValue: c
  };
}
const { name: xS, n: e6, classes: n6 } = ee("menu-select");
function o6(e, n) {
  const o = _("var-menu-option"), t = _("var-menu");
  return h(), Pe(t, {
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
    "onUpdate:show": n[0] || (n[0] = (r) => e.show = r),
    onOpen: e.onOpen,
    onOpened: e.onOpened,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onClickOutside: e.onClickOutside
  }, {
    menu: fe(() => [
      D(
        "div",
        {
          ref: "menuOptionsRef",
          class: p(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
        },
        [
          e.menuSelectOptions.length ? (h(!0), S(
            Ve,
            { key: 0 },
            Ze(e.menuSelectOptions, (r) => (h(), Pe(o, {
              key: r[e.valueKey],
              label: r[e.labelKey],
              value: r[e.valueKey],
              option: r,
              ripple: r.ripple,
              disabled: r.disabled
            }, null, 8, ["label", "value", "option", "ripple", "disabled"]))),
            128
            /* KEYED_FRAGMENT */
          )) : X("v-if", !0),
          V(e.$slots, "options")
        ],
        2
        /* CLASS */
      )
    ]),
    default: fe(() => [
      V(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "disabled", "trigger", "reference", "placement", "strategy", "offset-x", "offset-y", "teleport", "same-width", "elevation", "popover-class", "close-on-click-reference", "show", "onOpen", "onOpened", "onClose", "onClosed", "onClickOutside"]);
}
const Kv = x({
  name: xS,
  components: { VarMenu: Ut, VarMenuOption: Ht },
  props: jv,
  setup(e) {
    const n = k(null), o = k(null), t = Zn(e, "show"), r = I(() => Ye(e.options) ? e.options : []), { menuOptions: a, length: i, bindMenuOptions: l } = YS(), { computeLabel: s, getSelectedValue: u } = Wv({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => a,
      optionProvidersLength: () => i.value
    }), c = {
      size: I(() => e.size),
      multiple: I(() => e.multiple),
      computeLabel: s,
      onSelect: d
    };
    l(c), Ke(() => window, "keydown", f);
    function d(y) {
      const { multiple: $, closeOnSelect: w } = e;
      P(e["onUpdate:modelValue"], u(y)), !$ && w && (n.value.$el.focus(), b());
    }
    function f(y) {
      if (e.disabled || !t.value)
        return;
      const { key: $ } = y;
      if (["Escape", "ArrowDown", "ArrowUp"].includes($) && Fe(y), $ === "Escape") {
        n.value.$el.focus(), b();
        return;
      }
      ($ === "ArrowDown" || $ === "ArrowUp") && Hd(n.value.$el, o.value, $);
    }
    function v() {
      var y;
      (y = n.value) == null || y.open();
    }
    function b() {
      var y;
      (y = n.value) == null || y.close();
    }
    function m() {
      var y;
      (y = n.value) == null || y.resize();
    }
    return {
      show: t,
      menu: n,
      menuOptionsRef: o,
      menuSelectOptions: r,
      n: e6,
      classes: n6,
      formatElevation: pn,
      open: v,
      close: b,
      resize: m
    };
  }
});
Kv.render = o6;
var Xa = Kv;
oe(Xa);
le(Xa, jv);
const rT = Xa;
var Fr = Xa;
const qv = Symbol("SELECT_BIND_OPTION_KEY");
function t6() {
  const { length: e, childProviders: n, bindChildren: o } = yn(qv);
  return {
    length: e,
    options: n,
    bindOptions: o
  };
}
function r6() {
  const { index: e, parentProvider: n, bindParent: o } = bn(qv);
  return o || Vn("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: o
  };
}
const Gv = {
  label: {},
  value: {},
  disabled: Boolean,
  // internal
  option: Object
}, { name: a6, n: i6, classes: l6 } = ee("option"), s6 = ["tabindex"];
function u6(e, n) {
  const o = _("var-checkbox"), t = _("maybe-v-node"), r = _("var-hover-overlay"), a = We("ripple"), i = We("hover");
  return Ne((h(), S("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
    style: K({
      color: e.optionSelected ? e.focusColor : void 0
    }),
    tabindex: e.disabled ? void 0 : "-1",
    onFocus: n[2] || (n[2] = (l) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (l) => e.isFocusing = !1),
    onClick: n[4] || (n[4] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    D(
      "div",
      {
        class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: K({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ),
    e.multiple ? (h(), Pe(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => e.optionSelected = l),
      "checked-color": e.focusColor,
      disabled: e.disabled,
      onClick: n[1] || (n[1] = An(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "checked-color", "disabled", "onChange"])) : X("v-if", !0),
    V(e.$slots, "default", { selected: e.optionSelected }, () => [
      D(
        "div",
        {
          class: p(e.classes(e.n("text"), e.n("$--ellipsis")))
        },
        [
          G(t, { is: e.labelVNode }, null, 8, ["is"])
        ],
        2
        /* CLASS */
      )
    ]),
    G(r, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 46, s6)), [
    [a, { disabled: e.disabled }],
    [i, e.handleHovering, "desktop"]
  ]);
}
const Xv = x({
  name: a6,
  directives: { Ripple: rn, Hover: Tn },
  components: {
    VarCheckbox: lt,
    VarHoverOverlay: Ln,
    MaybeVNode: Xt
  },
  props: Gv,
  setup(e) {
    const n = k(), o = k(!1), t = k(!1), r = I(() => t.value), a = I(
      () => {
        var z;
        return Qn(e.label) ? e.label(
          (z = e.option) != null ? z : {
            label: e.label,
            value: e.value,
            disabled: e.disabled
          },
          t.value
        ) : e.label;
      }
    ), i = I(() => e.value), { select: l, bindSelect: s } = r6(), { multiple: u, focusColor: c, onSelect: d, computeLabel: f } = l, { hovering: v, handleHovering: b } = Jn(), m = {
      label: a,
      value: i,
      selected: r,
      sync: C
    };
    ce([() => e.label, () => e.value], f), s(m), Ke(() => window, "keydown", $), Ke(() => window, "keyup", w);
    function y() {
      e.disabled || g();
    }
    function $(z) {
      o.value && ((z.key === " " || z.key === "Enter") && Fe(z), z.key === "Enter" && n.value.click());
    }
    function w(z) {
      o.value && z.key === " " && (Fe(z), n.value.click());
    }
    function g() {
      u.value && (t.value = !t.value), d(m);
    }
    function C(z) {
      t.value = z;
    }
    return {
      root: n,
      optionSelected: t,
      multiple: u,
      focusColor: c,
      hovering: v,
      isFocusing: o,
      labelVNode: a,
      n: i6,
      classes: l6,
      handleHovering: b,
      handleClick: y,
      handleSelect: g
    };
  }
});
Xv.render = u6;
var Za = Xv;
oe(Za);
le(Za, Gv);
const aT = Za;
var Ur = Za;
const Zv = {
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
  onClick: L(),
  onKeyEscape: L(),
  "onUpdate:show": L()
}, {
  name: c6,
  n: Hc
} = ee("overlay");
var Ja = x({
  name: c6,
  inheritAttrs: !1,
  props: Zv,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const {
      zIndex: t
    } = Jt(() => e.show, 1), {
      onStackTop: r
    } = us(() => e.show, t), {
      disabled: a
    } = Go();
    Zt(() => e.show, () => e.lockScroll), Ke(() => window, "keydown", i);
    function i(c) {
      !r() || c.key !== "Escape" || !e.show || (P(e.onKeyEscape), e.closeOnKeyEscape && (Fe(c), P(e["onUpdate:show"], !1)));
    }
    function l() {
      P(e.onClick), P(e["onUpdate:show"], !1);
    }
    function s() {
      return G("div", je({
        class: Hc(),
        style: {
          zIndex: t.value
        }
      }, o, {
        onClick: l
      }), [P(n.default)]);
    }
    function u() {
      return G(_e, {
        name: Hc("--fade")
      }, {
        default: () => [e.show && s()]
      });
    }
    return () => {
      const {
        teleport: c
      } = e;
      return c ? G(oo, {
        to: c,
        disabled: a.value
      }, {
        default: () => [u()]
      }) : u();
    };
  }
});
oe(Ja);
le(Ja, Zv);
const iT = Ja;
var El = Ja;
const Jv = {
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
  onChange: L(),
  "onUpdate:current": L(),
  "onUpdate:size": L()
}, { name: d6, n: f6, classes: p6 } = ee("pagination"), v6 = ["item-mode", "onClick"];
function m6(e, n) {
  const o = _("var-icon"), t = _("var-input"), r = _("var-menu-option"), a = _("var-menu-select"), i = We("ripple");
  return h(), S(
    "ul",
    {
      class: p(e.n())
    },
    [
      Ne((h(), S(
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
            G(o, { name: "chevron-left" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current <= 1 || e.disabled }]
      ]),
      e.simple ? (h(), S(
        "li",
        {
          key: 0,
          class: p(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
        },
        [
          G(t, {
            "var-pagination-cover": "",
            hint: !1,
            disabled: e.disabled,
            modelValue: e.simpleCurrentValue,
            "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
            onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
            onKeydown: n[3] || (n[3] = Fs((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
          }, null, 8, ["disabled", "modelValue"]),
          D("span", null, [
            De(
              " / " + re(e.pageCount) + " ",
              1
              /* TEXT */
            ),
            D(
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
      )) : (h(!0), S(
        Ve,
        { key: 1 },
        Ze(e.pageList, (l, s) => Ne((h(), S("li", {
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
          De(
            re(l),
            1
            /* TEXT */
          )
        ], 10, v6)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Ne((h(), S(
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
            G(o, { name: "chevron-right" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current >= e.pageCount || e.disabled }]
      ]),
      e.showSizeChanger ? (h(), S(
        "li",
        {
          key: 2,
          class: p(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
        },
        [
          G(a, {
            placement: "cover-top",
            disabled: e.disabled,
            modelValue: e.size,
            "onUpdate:modelValue": n[5] || (n[5] = (l) => e.size = l)
          }, {
            options: fe(() => [
              (h(!0), S(
                Ve,
                null,
                Ze(e.sizeOption, (l, s) => (h(), Pe(r, {
                  key: s,
                  value: l,
                  onClick: e.clickSize
                }, {
                  default: fe(() => [
                    De(
                      re(l) + re((e.pt ? e.pt : e.t)("paginationItem")) + " / " + re((e.pt ? e.pt : e.t)("paginationPage")),
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
            default: fe(() => [
              D(
                "div",
                {
                  class: p(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")]))
                },
                [
                  D(
                    "span",
                    null,
                    re(e.size) + re((e.pt ? e.pt : e.t)("paginationItem")) + " / " + re((e.pt ? e.pt : e.t)("paginationPage")),
                    1
                    /* TEXT */
                  ),
                  G(o, {
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
      )) : X("v-if", !0),
      e.showQuickJumper && !e.simple ? (h(), S(
        "li",
        {
          key: 3,
          class: p(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
        },
        [
          De(
            re((e.pt ? e.pt : e.t)("paginationJump")) + " ",
            1
            /* TEXT */
          ),
          G(t, {
            modelValue: e.quickJumperValue,
            "onUpdate:modelValue": n[6] || (n[6] = (l) => e.quickJumperValue = l),
            disabled: e.disabled,
            hint: !1,
            "var-pagination-cover": "",
            onBlur: n[7] || (n[7] = (l) => e.setPage("quick", e.quickJumperValue, l)),
            onKeydown: n[8] || (n[8] = Fs((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : X("v-if", !0),
      e.totalText ? (h(), S(
        "li",
        {
          key: 4,
          class: p(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
        },
        re(e.totalText),
        3
        /* TEXT, CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Qv = x({
  name: d6,
  components: {
    VarMenuSelect: Fr,
    VarMenuOption: Ht,
    VarIcon: Je,
    VarInput: Rr
  },
  directives: { Ripple: rn },
  props: Jv,
  setup(e) {
    const n = k(""), o = k("1"), t = k(!1), r = k(!1), a = k(R(e.current) || 1), i = k(R(e.size) || 10), l = k([]), s = I(() => Math.ceil(e.maxPagerCount / 2)), u = I(() => Math.ceil(R(e.total) / R(i.value))), c = I(() => {
      const g = i.value * (a.value - 1) + 1, C = Math.min(i.value * a.value, R(e.total));
      return [g, C];
    }), d = I(() => e.showTotal ? e.showTotal(R(e.total), c.value) : ""), { t: f } = ao();
    ce([() => e.current, () => e.size], ([g, C]) => {
      a.value = R(g) || 1, i.value = R(C || 10);
    }), ce(
      [a, i, u],
      ([g, C, z], [O, A]) => {
        let T = [];
        const { maxPagerCount: E, total: B, onChange: N } = e, H = Math.ceil(R(B) / R(A)), Y = z - (E - s.value) - 1;
        if (o.value = `${g}`, z - 2 > E) {
          if (O === void 0 || z !== H)
            for (let M = 2; M < E + 2; M++)
              T.push(M);
          if (g <= E && g < Y) {
            T = [];
            for (let M = 1; M < E + 1; M++)
              T.push(M + 1);
            t.value = !0, r.value = !1;
          }
          if (g > E && g < Y) {
            T = [];
            for (let M = 1; M < E + 1; M++)
              T.push(g + M - s.value);
            t.value = g === 2 && E === 1, r.value = !1;
          }
          if (g >= Y) {
            T = [];
            for (let M = 1; M < E + 1; M++)
              T.push(z - (E - M) - 1);
            t.value = !1, r.value = !0;
          }
          T = [1, "...", ...T, "...", z];
        } else
          for (let M = 1; M <= z; M++)
            T.push(M);
        l.value = T, O != null && z > 0 && P(N, g, C), P(e["onUpdate:current"], g), P(e["onUpdate:size"], C);
      },
      {
        immediate: !0
      }
    );
    function v(g, C) {
      return On(g) ? !1 : C === 1 ? t.value : r.value;
    }
    function b(g, C) {
      return On(g) ? "basic" : C === 1 ? "head" : "tail";
    }
    function m(g, C) {
      if (!(g === a.value || e.disabled)) {
        if (g === "...") {
          a.value = C === 1 ? Math.max(a.value - e.maxPagerCount, 1) : Math.min(a.value + e.maxPagerCount, u.value);
          return;
        }
        if (g === "prev") {
          a.value = $(a.value - 1);
          return;
        }
        if (g === "next") {
          a.value = $(a.value + 1);
          return;
        }
        On(g) && (a.value = g);
      }
    }
    function y() {
      const g = $(a.value);
      o.value = String(g), a.value = g;
    }
    function $(g) {
      return g > u.value ? u.value : g < 1 ? 1 : g;
    }
    function w(g, C, z) {
      z.target.blur();
      const O = $(R(C));
      o.value = String(O), a.value = O, g === "quick" && (n.value = "");
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
      t: an,
      n: f6,
      classes: p6,
      getMode: b,
      isHideEllipsis: v,
      clickItem: m,
      clickSize: y,
      setPage: w,
      toNumber: R,
      formatElevation: pn
    };
  }
});
Qv.render = m6;
var Qa = Qv;
oe(Qa);
le(Qa, Jv);
const lT = Qa;
var Bl = Qa;
const _v = {
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
  onClick: L()
}, { name: h6, n: g6, classes: b6 } = ee("paper");
function y6(e, n) {
  const o = We("ripple");
  return Ne((h(), S(
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
      style: K({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
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
const xv = x({
  name: h6,
  directives: { Ripple: rn },
  props: _v,
  setup(e) {
    function n(o) {
      P(e.onClick, o);
    }
    return {
      n: g6,
      classes: b6,
      formatElevation: pn,
      toSizeUnit: Oe,
      handleClick: n
    };
  }
});
xv.render = y6;
var _a = xv;
oe(_a);
le(_a, _v);
const sT = _a;
var Il = _a, k6 = Object.defineProperty, Yc = Object.getOwnPropertySymbols, $6 = Object.prototype.hasOwnProperty, w6 = Object.prototype.propertyIsEnumerable, jc = (e, n, o) => n in e ? k6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, C6 = (e, n) => {
  for (var o in n || (n = {}))
    $6.call(n, o) && jc(e, o, n[o]);
  if (Yc)
    for (var o of Yc(n))
      w6.call(n, o) && jc(e, o, n[o]);
  return e;
};
const em = C6({
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
  onChange: L(),
  onConfirm: L(),
  onCancel: L(),
  "onUpdate:modelValue": L()
}, Me(gt, [
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
])), { name: S6, n: P6, classes: z6 } = ee("picker"), Wc = 300, O6 = 15, Kc = 200, T6 = 1e3;
let qc = 0;
const E6 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], B6 = ["onTransitionend"], I6 = ["onClick"];
function D6(e, n) {
  const o = _("var-button");
  return h(), Pe(
    vt(e.dynamic ? e.n("$-popup") : e.Transition),
    je(
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
      default: fe(() => [
        D(
          "div",
          je({
            class: e.n()
          }, e.$attrs),
          [
            e.toolbar ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.n("toolbar"))
              },
              [
                V(e.$slots, "cancel", {}, () => [
                  G(o, {
                    class: p(e.n("cancel-button")),
                    "var-picker-cover": "",
                    text: "",
                    "text-color": e.cancelButtonTextColor,
                    onClick: e.cancel
                  }, {
                    default: fe(() => {
                      var t;
                      return [
                        De(
                          re((t = e.cancelButtonText) != null ? t : (e.pt ? e.pt : e.t)("pickerCancelButtonText")),
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
                  var t;
                  return [
                    D(
                      "div",
                      {
                        class: p(e.n("title"))
                      },
                      re((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("pickerTitle")),
                      3
                      /* TEXT, CLASS */
                    )
                  ];
                }),
                V(e.$slots, "confirm", {}, () => [
                  G(o, {
                    class: p(e.n("confirm-button")),
                    text: "",
                    "var-picker-cover": "",
                    "text-color": e.confirmButtonTextColor,
                    onClick: e.confirm
                  }, {
                    default: fe(() => {
                      var t;
                      return [
                        De(
                          re((t = e.confirmButtonText) != null ? t : (e.pt ? e.pt : e.t)("pickerConfirmButtonText")),
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
            )) : X("v-if", !0),
            D(
              "div",
              {
                class: p(e.n("columns")),
                style: K({ height: `${e.columnHeight}px` })
              },
              [
                (h(!0), S(
                  Ve,
                  null,
                  Ze(e.scrollColumns, (t) => (h(), S("div", {
                    class: p(e.n("column")),
                    key: t.id,
                    onTouchstartPassive: (r) => e.handleTouchstart(r, t),
                    onTouchmove: An((r) => e.handleTouchmove(r, t), ["prevent"]),
                    onTouchend: (r) => e.handleTouchend(t)
                  }, [
                    D("div", {
                      class: p(e.n("scroller")),
                      ref_for: !0,
                      ref: (r) => e.setScrollEl(r, t),
                      style: K({
                        transform: `translateY(${t.translate}px)`,
                        transitionDuration: `${t.duration}ms`,
                        transitionProperty: t.duration ? "transform" : "none"
                      }),
                      onTransitionend: (r) => e.handleTransitionend(t)
                    }, [
                      (h(!0), S(
                        Ve,
                        null,
                        Ze(t.column, (r, a) => (h(), S("div", {
                          key: e.getValue(r),
                          class: p(e.classes(e.n("option"), r.className)),
                          style: K({ height: `${e.optionHeight}px` }),
                          onClick: (i) => e.handleClick(t, a)
                        }, [
                          D(
                            "div",
                            {
                              class: p(e.classes(e.n("text"), r.textClassName))
                            },
                            re(r[e.getOptionKey("text")]),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 14, I6))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, B6)
                  ], 42, E6))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                D(
                  "div",
                  {
                    class: p(e.n("picked")),
                    style: K({
                      top: `${e.center}px`,
                      height: `${e.optionHeight}px`
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                D(
                  "div",
                  {
                    class: p(e.n("mask")),
                    style: K({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
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
const nm = x({
  name: S6,
  components: {
    VarButton: Pn,
    VarPopup: Po
  },
  inheritAttrs: !1,
  props: em,
  setup(e) {
    const n = Zn(e, "modelValue"), o = k([]), t = I(() => R(e.columnsCount)), r = I(() => nn(e.optionHeight)), a = I(() => nn(e.optionCount)), i = I(() => a.value * r.value / 2 - r.value / 2), l = I(() => a.value * r.value), { prevY: s, moveY: u, dragging: c, startTouch: d, moveTouch: f, endTouch: v } = mt(), { t: b } = ao();
    let m = [];
    A(), ce(() => e.columns, A, { deep: !0 }), ce(() => n.value, A);
    function y(F) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[F];
    }
    function $(F) {
      var j;
      return (j = F[y("value")]) != null ? j : F[y("text")];
    }
    function w(F) {
      m = [...F];
    }
    function g(F) {
      return (e.columnsCount != null ? F.slice(0, t.value) : F).map((de, Se) => {
        const Te = {
          id: qc++,
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
        }, He = n.value[Se], xe = Te.column.findIndex((ve) => He === $(ve));
        return Te.index = xe === -1 ? 0 : xe, M(Te), Te;
      });
    }
    function C(F) {
      const j = [];
      return z(j, F), j;
    }
    function z(F, j, de = !0, Se = 1) {
      var Te;
      if (j.length && (e.columnsCount == null || Se <= t.value)) {
        const He = {
          id: qc++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: j,
          scrollEl: null,
          scrolling: !1
        };
        if (F.push(He), de) {
          const xe = n.value[F.length - 1], ve = j.findIndex((Ie) => xe === $(Ie));
          He.index = ve === -1 ? 0 : ve;
        }
        M(He), z(
          F,
          (Te = He.column[He.index][y("children")]) != null ? Te : [],
          de,
          Se + 1
        );
      }
    }
    function O(F) {
      var j;
      o.value.splice(o.value.indexOf(F) + 1), z(
        o.value,
        (j = F.column[F.index][y("children")]) != null ? j : [],
        !1,
        o.value.length + 1
      );
    }
    function A() {
      o.value = e.cascade ? C(e.columns) : g(e.columns);
      const { indexes: F } = Y();
      w(F);
    }
    function T(F, j) {
      j.scrollEl = F;
    }
    function E(F) {
      P(e["onUpdate:show"], F);
    }
    function B(F) {
      const j = i.value - F.column.length * r.value, de = r.value + i.value;
      F.translate = Mn(F.translate, j, de);
    }
    function N(F, j) {
      const de = Math.round((i.value - j) / r.value);
      return Rh(de, F.column);
    }
    function H(F) {
      return F.translate = i.value - F.index * r.value, F.translate;
    }
    function Y() {
      const F = [], j = [], de = [];
      return o.value.forEach(({ column: Se, index: Te }) => {
        const He = Se[Te];
        F.push($(He)), j.push(Te), de.push(He);
      }), {
        values: F,
        indexes: j,
        options: de
      };
    }
    function M(F, j = 0) {
      H(F), F.duration = j;
    }
    function q(F, j, de) {
      F.translate += Math.abs(j / de) / 3e-3 * (j < 0 ? -1 : 1);
    }
    function W(F, j) {
      c.value || (F.index = j, M(F, Kc));
    }
    function ue(F, j) {
      j.touching = !0, j.translate = Pi(j.scrollEl), d(F);
    }
    function Q(F, j) {
      if (!j.touching)
        return;
      f(F), j.scrolling = !1, j.duration = 0, j.prevY = s.value, j.translate += u.value, B(j);
      const de = performance.now();
      de - j.momentumTime > Wc && (j.momentumTime = de, j.momentumPrevY = j.translate);
    }
    function pe(F) {
      v(), F.touching = !1, F.prevY = 0;
      const j = F.translate - F.momentumPrevY, de = performance.now() - F.momentumTime, Se = Math.abs(j) >= O6 && de <= Wc, Te = F.translate;
      Se && q(F, j, de), F.index = N(F, F.translate), M(F, Se ? T6 : Kc), F.scrolling = F.translate !== Te, F.scrolling || U(F);
    }
    function ke(F) {
      F.scrolling = !1, U(F);
    }
    function se() {
      const { indexes: F } = Y();
      return F.every((j, de) => j === m[de]);
    }
    function U(F) {
      const { onChange: j, cascade: de } = e;
      if (se())
        return;
      de && O(F);
      const Se = o.value.some((Ie) => Ie.scrolling), Te = o.value.some((Ie) => Ie.touching);
      if (Se || Te)
        return;
      const { values: He, indexes: xe, options: ve } = Y();
      w(xe), P(j, He, xe, ve), n.value = He;
    }
    function J() {
      if (e.cascade) {
        const F = o.value.find((j) => j.scrolling);
        F && (F.index = N(F, Pi(F.scrollEl)), F.scrolling = !1, M(F), O(F));
      } else
        o.value.forEach((F) => {
          F.index = N(F, Pi(F.scrollEl)), M(F);
        });
    }
    function te() {
      J();
      const { values: F, indexes: j, options: de } = Y();
      w(j), P(e.onConfirm, F, j, de);
    }
    function he() {
      J();
      const { values: F, indexes: j, options: de } = Y();
      w(j), P(e.onCancel, F, j, de);
    }
    return {
      optionHeight: r,
      optionCount: a,
      scrollColumns: o,
      columnHeight: l,
      center: i,
      Transition: _e,
      pt: b,
      t: an,
      n: P6,
      classes: z6,
      setScrollEl: T,
      getOptionKey: y,
      getValue: $,
      handlePopupUpdateShow: E,
      handleTouchstart: ue,
      handleTouchmove: Q,
      handleTouchend: pe,
      handleTransitionend: ke,
      confirm: te,
      cancel: he,
      handleClick: W
    };
  }
});
nm.render = D6;
var nr = nm;
let ot;
function yt(e) {
  return new Promise((n) => {
    yt.close();
    const o = Ye(e) ? { columns: e } : e, t = Qe(o);
    t.dynamic = !0, t.teleport = "body", ot = t;
    function r() {
      ot === t && (ot = null);
    }
    const { unmountInstance: a } = ht(nr, t, {
      onConfirm: (i, l, s) => {
        P(t.onConfirm, i, l, s), n({
          state: "confirm",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, r();
      },
      onCancel: (i, l, s) => {
        P(t.onCancel, i, l, s), n({
          state: "cancel",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, r();
      },
      onClose: () => {
        P(t.onClose), n({
          state: "close"
        }), r();
      },
      onClosed: () => {
        P(t.onClosed), a(), r();
      },
      onRouteChange: () => {
        a(), r();
      },
      "onUpdate:show": (i) => {
        t.show = i;
      }
    });
    t.show = !0;
  });
}
yt.close = function() {
  if (ot == null)
    return;
  const e = ot;
  ot = null, qe().then(() => {
    e.show = !1;
  });
};
yt.Component = nr;
oe(nr);
oe(nr, yt);
le(yt, em);
const uT = nr;
var Dl = yt;
const om = {
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
}, Jo = 100, pr = 0, io = 20, Gc = 2 * Math.PI * io, { name: M6, n: N6, classes: A6 } = ee("progress"), V6 = ["aria-valuenow"], L6 = ["viewBox"], R6 = { key: 0 }, F6 = ["id"], U6 = ["offset", "stop-color"], H6 = ["d", "stroke-width", "stroke-dasharray"], Y6 = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function j6(e, n) {
  return h(), S("div", {
    class: p(e.n()),
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": e.indeterminate ? void 0 : e.mode === "linear" ? e.linearProps.value : e.circleProps.value
  }, [
    e.mode === "linear" ? (h(), S(
      "div",
      {
        key: 0,
        class: p(e.n("linear"))
      },
      [
        D(
          "div",
          {
            class: p(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
            style: K({ height: e.toSizeUnit(e.lineWidth), background: e.trackColor })
          },
          [
            e.indeterminate ? (h(), S(
              "div",
              {
                key: 0,
                class: p(e.n("linear-indeterminate"))
              },
              [
                D(
                  "div",
                  {
                    class: p(e.classes(e.n(`linear--${e.type}`))),
                    style: K({ background: e.progressColor })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                D(
                  "div",
                  {
                    class: p(e.classes(e.n(`linear--${e.type}`))),
                    style: K({ background: e.progressColor })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                )
              ],
              2
              /* CLASS */
            )) : (h(), S(
              "div",
              {
                key: 1,
                class: p(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`))),
                style: K({ background: e.progressColor, width: e.linearProps.width })
              },
              null,
              6
              /* CLASS, STYLE */
            ))
          ],
          6
          /* CLASS, STYLE */
        ),
        e.label ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
          },
          [
            V(e.$slots, "default", {}, () => [
              De(
                re(e.linearProps.roundValue),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : X("v-if", !0)
      ],
      2
      /* CLASS */
    )) : X("v-if", !0),
    e.mode === "circle" ? (h(), S(
      "div",
      {
        key: 1,
        class: p(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: K({ width: e.toSizeUnit(e.size), height: e.toSizeUnit(e.size) })
      },
      [
        (h(), S("svg", {
          class: p(e.n("circle-svg")),
          viewBox: e.circleProps.viewBox
        }, [
          e.isPlainObject(e.color) ? (h(), S("defs", R6, [
            D("linearGradient", {
              id: e.id,
              x1: "100%",
              y1: "0%",
              x2: "0%",
              y2: "0%"
            }, [
              (h(!0), S(
                Ve,
                null,
                Ze(e.linearGradientProgress, (o, t) => (h(), S("stop", {
                  key: t,
                  offset: o,
                  "stop-color": e.color[o]
                }, null, 8, U6))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, F6)
          ])) : X("v-if", !0),
          e.track ? (h(), S("path", {
            key: 1,
            class: p(e.n("circle-background")),
            d: e.circleProps.path,
            fill: "transparent",
            "stroke-width": e.circleProps.strokeWidth,
            "stroke-dasharray": e.CIRCUMFERENCE,
            style: K({
              stroke: e.trackColor
            })
          }, null, 14, H6)) : X("v-if", !0),
          D("path", {
            class: p(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
            d: e.circleProps.path,
            fill: "transparent",
            "stroke-width": e.circleProps.strokeWidth,
            "stroke-dasharray": e.CIRCUMFERENCE,
            "stroke-dashoffset": e.circleProps.strokeOffset,
            style: K({
              stroke: e.progressColor,
              transform: `rotateZ(${e.rotate}deg)`,
              transformOrigin: "50% 50%"
            })
          }, null, 14, Y6)
        ], 10, L6)),
        e.label ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("circle-label"), e.labelClass))
          },
          [
            V(e.$slots, "default", {}, () => [
              De(
                re(e.circleProps.roundValue),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : X("v-if", !0)
      ],
      6
      /* CLASS, STYLE */
    )) : X("v-if", !0)
  ], 10, V6);
}
const tm = x({
  name: M6,
  props: om,
  setup(e) {
    const n = Bd(), o = I(() => {
      const i = R(e.value), l = Mn(i, pr, Jo), s = Mn(Math.round(i), pr, Jo);
      return {
        width: `${l}%`,
        roundValue: `${s}%`,
        value: l
      };
    }), t = I(() => {
      const { size: i, lineWidth: l, value: s } = e, u = io / (1 - nn(l) / nn(i)) * 2, c = `0 0 ${u} ${u}`, d = Mn(Math.round(R(s)), pr, Jo), f = `${(Jo - d) / Jo * Gc}`, v = nn(l) / nn(i) * u, b = 0, m = -io, y = 0, $ = -2 * io, w = `M ${u / 2} ${u / 2} m ${b} ${m} a ${io} ${io} 
        0 1 1 ${y} ${-$} a ${io} ${io} 0 1 1 ${-y} ${$}`;
      return {
        strokeWidth: v,
        viewBox: c,
        strokeOffset: f,
        roundValue: `${d}%`,
        path: w,
        value: Mn(R(s), pr, Jo)
      };
    }), r = I(() => tt(e.color) ? `url(#${n.value})` : e.color), a = I(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: o,
      CIRCUMFERENCE: Gc,
      RADIUS: io,
      circleProps: t,
      progressColor: r,
      linearGradientProgress: a,
      n: N6,
      classes: A6,
      toSizeUnit: Oe,
      isPlainObject: tt
    };
  }
});
tm.render = j6;
var xa = tm;
oe(xa);
le(xa, om);
const cT = xa;
var Ml = xa;
const rm = {
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
  onRefresh: L(),
  "onUpdate:modelValue": L()
};
var Xc = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: W6, n: Zc, classes: K6 } = ee("pull-refresh"), Jc = 150;
function q6(e, n) {
  const o = _("var-icon");
  return h(), S(
    "div",
    {
      ref: "freshNode",
      class: p(e.n()),
      onTouchstart: n[0] || (n[0] = (...t) => e.handleTouchstart && e.handleTouchstart(...t)),
      onTouchend: n[1] || (n[1] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
      onTouchcancel: n[2] || (n[2] = (...t) => e.handleTouchend && e.handleTouchend(...t))
    },
    [
      D(
        "div",
        {
          ref: "controlNode",
          class: p(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
          style: K(e.controlStyle)
        },
        [
          G(o, {
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
const am = x({
  name: W6,
  components: { VarIcon: Je },
  props: rm,
  setup(e) {
    const n = k(0), o = k(null), t = k(null), r = k(0), a = k("-125%"), i = k("arrow-down"), l = k("default"), s = k(!1), u = I(() => Math.abs(2 * n.value)), c = I(() => l.value === "success"), d = I(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = I(() => ({
      transform: `translate3d(0px, ${gn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: c.value ? e.successBgColor : e.bgColor,
      color: c.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: b, endTouch: m, isReachTop: y } = mt();
    let $, w;
    ce(
      () => e.modelValue,
      (B) => {
        B === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, E();
        }, R(e.successDuration)));
      }
    ), vn(T), Ke(o, "touchmove", O);
    function g(B) {
      return Xc(this, null, function* () {
        if (i.value !== B)
          return i.value = B, new Promise((N) => {
            window.setTimeout(N, Jc);
          });
      });
    }
    function C(B) {
      ("classList" in $ ? $ : document.body).classList[B](`${Zc()}--lock`);
    }
    function z(B) {
      if (v(B), n.value === 0) {
        const { width: N } = sn(t.value);
        n.value = -(N + N * 0.25);
      }
      w = zo(B.target);
    }
    function O(B) {
      if (b(B), !d.value || !w || w !== $ && Ro(w) > 0 || Ro($) > 0)
        return;
      y($) && Fe(B), l.value !== "pulling" && (l.value = "pulling", r.value = B.touches[0].clientY), y($) && On(a.value) && a.value > n.value && C("add");
      const H = (B.touches[0].clientY - r.value) / 2 + n.value;
      a.value = H >= u.value ? u.value : H, g(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function A() {
      return Xc(this, null, function* () {
        m(), d.value && (s.value = !0, R(a.value) >= u.value * 0.2 ? (yield g("refresh"), l.value = "loading", a.value = u.value * 0.3, P(e["onUpdate:modelValue"], !0), qe(() => {
          P(e.onRefresh);
        }), C("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, C("remove");
        }, R(e.animationDuration))), w = null);
      });
    }
    function T() {
      $ = e.target ? Fd(e.target, "PullRefresh") : zo(o.value);
    }
    function E() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, R(e.animationDuration));
    }
    return {
      ICON_TRANSITION: Jc,
      refreshStatus: l,
      freshNode: o,
      controlNode: t,
      iconName: i,
      controlStyle: f,
      isSuccess: c,
      n: Zc,
      classes: K6,
      handleTouchstart: z,
      handleTouchmove: O,
      handleTouchend: A
    };
  }
});
am.render = q6;
var ei = am;
oe(ei);
le(ei, rm);
const dT = ei;
var Nl = ei;
const im = {
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
  rules: Array,
  onClick: L(),
  onChange: L(),
  "onUpdate:modelValue": L()
}, lm = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function G6() {
  const { bindChildren: e, childProviders: n, length: o } = yn(
    lm
  );
  return {
    length: o,
    radios: n,
    bindRadios: e
  };
}
function X6() {
  const { bindParent: e, parentProvider: n, index: o } = bn(lm);
  return {
    index: o,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: Z6, n: J6, classes: Q6 } = ee("radio"), _6 = ["tabindex"];
function x6(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = We("ripple"), i = We("hover");
  return h(), S(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      D(
        "div",
        je({
          class: e.n(),
          onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
        }, e.$attrs),
        [
          Ne((h(), S("div", {
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
            style: K({ color: e.checked ? e.checkedColor : e.uncheckedColor }),
            onFocus: n[0] || (n[0] = (l) => e.isFocusing = !0),
            onBlur: n[1] || (n[1] = (l) => e.isFocusing = !1)
          }, [
            e.checked ? V(e.$slots, "checked-icon", { key: 0 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                "var-radio-cover": "",
                name: "radio-marked",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]) : V(e.$slots, "unchecked-icon", { key: 1 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                "var-radio-cover": "",
                name: "radio-blank",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]),
            G(t, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ], 46, _6)), [
            [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
            [i, e.handleHovering, "desktop"]
          ]),
          e.$slots.default ? (h(), S(
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
          )) : X("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      ),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const sm = x({
  name: Z6,
  directives: { Ripple: rn, Hover: Tn },
  components: {
    VarIcon: Je,
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  inheritAttrs: !1,
  props: im,
  setup(e) {
    const n = k(), o = k(!1), t = Zn(e, "modelValue"), r = I(() => t.value === e.checkedValue), a = k(!1), { radioGroup: i, bindRadioGroup: l } = X6(), { hovering: s, handleHovering: u } = Jn(), { form: c, bindForm: d } = jn(), {
      errorMessage: f,
      validateWithTrigger: v,
      validate: b,
      // expose
      resetValidation: m
    } = Yn(), y = {
      sync: A,
      validate: E,
      resetValidation: m,
      reset: T,
      isFocusing: I(() => o.value),
      // keyboard arrow move
      move() {
        n.value.focus(), n.value.click();
      },
      moveable() {
        return !(c != null && c.disabled.value) && !e.disabled && !(c != null && c.readonly.value) && !e.readonly;
      }
    };
    P(l, y), P(d, y), Ke(() => window, "keydown", $), Ke(() => window, "keyup", w);
    function $(N) {
      if (!o.value)
        return;
      const { key: H } = N;
      (H === "Enter" || H === " ") && Fe(N), H === "Enter" && n.value.click();
    }
    function w(N) {
      o.value && N.key === " " && (Fe(N), n.value.click());
    }
    function g(N) {
      qe(() => {
        const { validateTrigger: H, rules: Y, modelValue: M } = e;
        v(H, N, Y, M);
      });
    }
    function C(N) {
      const { checkedValue: H, onChange: Y } = e;
      i && t.value === H || (t.value = N, P(Y, t.value), i == null || i.onToggle(H), g("onChange"));
    }
    function z(N) {
      const { disabled: H, readonly: Y, uncheckedValue: M, checkedValue: q, onClick: W } = e;
      c != null && c.disabled.value || H || (P(W, N), !(c != null && c.readonly.value || Y) && (a.value = !0, C(r.value ? M : q)));
    }
    function O() {
      n.value.focus();
    }
    function A(N) {
      const { checkedValue: H, uncheckedValue: Y } = e;
      t.value = N === H ? H : Y;
    }
    function T() {
      t.value = e.uncheckedValue, m();
    }
    function E() {
      return b(e.rules, e.modelValue);
    }
    function B(N) {
      const { uncheckedValue: H, checkedValue: Y } = e;
      ![H, Y].includes(N) && (N = r.value ? H : Y), C(N);
    }
    return {
      action: n,
      isFocusing: o,
      withAnimation: a,
      checked: r,
      errorMessage: f,
      radioGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: c == null ? void 0 : c.disabled,
      formReadonly: c == null ? void 0 : c.readonly,
      hovering: s,
      handleHovering: u,
      n: J6,
      classes: Q6,
      handleClick: z,
      handleTextClick: O,
      toggle: B,
      reset: T,
      validate: E,
      resetValidation: m
    };
  }
});
sm.render = x6;
var ni = sm;
oe(ni);
le(ni, im);
const fT = ni;
var Hr = ni;
const um = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  options: Array,
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
  rules: Array,
  onChange: L(),
  "onUpdate:modelValue": L()
}, { name: e2, n: n2, classes: o2 } = ee("radio-group");
function t2(e, n) {
  const o = _("maybe-v-node"), t = _("var-radio"), r = _("var-form-details");
  return h(), S(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      D(
        "div",
        {
          class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          e.radioGroupOptions.length ? (h(!0), S(
            Ve,
            { key: 0 },
            Ze(e.radioGroupOptions, (a) => (h(), Pe(t, {
              key: a[e.valueKey],
              "checked-value": a[e.valueKey],
              disabled: a.disabled
            }, {
              default: fe(({ checked: i }) => [
                G(o, {
                  is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey]
                }, null, 8, ["is"])
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["checked-value", "disabled"]))),
            128
            /* KEYED_FRAGMENT */
          )) : X("v-if", !0),
          V(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const cm = x({
  name: e2,
  components: { VarFormDetails: En, VarRadio: Hr, MaybeVNode: Xt },
  props: um,
  setup(e) {
    const { length: n, radios: o, bindRadios: t } = G6(), { bindForm: r } = jn(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = Yn(), u = I(() => Ye(e.options) ? e.options : []), c = I(() => a.value), d = {
      onToggle: y,
      validate: $,
      reset: w,
      resetValidation: s,
      errorMessage: c
    };
    ce(() => e.modelValue, m), ce(() => n.value, m), P(r, d), t(d), Ke(() => window, "keydown", f);
    function f(g) {
      const C = o.findIndex(({ isFocusing: O }) => O.value);
      if (!(C === -1 || !o.some(({ moveable: O }, A) => A === C ? !1 : O()))) {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(g.key) && Fe(g), g.key === "ArrowUp" || g.key === "ArrowLeft") {
          v(C, "prev");
          return;
        }
        (g.key === "ArrowDown" || g.key === "ArrowRight") && v(C, "next");
      }
    }
    function v(g, C) {
      for (; ; ) {
        C === "prev" ? g-- : g++, g < 0 && (g = o.length - 1), g > o.length - 1 && (g = 0);
        const z = o[g];
        if (z.moveable()) {
          z.move();
          break;
        }
      }
    }
    function b(g) {
      qe(() => {
        const { validateTrigger: C, rules: z, modelValue: O } = e;
        i(C, g, z, O);
      });
    }
    function m() {
      return o.forEach(({ sync: g }) => g(e.modelValue));
    }
    function y(g) {
      P(e["onUpdate:modelValue"], g), P(e.onChange, g), b("onChange");
    }
    function $() {
      return l(e.rules, e.modelValue);
    }
    function w() {
      P(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: n2,
      classes: o2,
      reset: w,
      validate: $,
      resetValidation: s,
      isFunction: Qn,
      radioGroupOptions: u
    };
  }
});
cm.render = t2;
var oi = cm;
oe(oi);
le(oi, um);
const pT = oi;
var Al = oi;
const dm = {
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
  namespace: Me(tn, "namespace"),
  emptyIconNamespace: Me(tn, "namespace"),
  halfIconNamespace: Me(tn, "namespace"),
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
  onChange: L(),
  "onUpdate:modelValue": L()
}, { name: r2, n: wt } = ee("rate"), a2 = ["onClick"];
function i2(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = We("ripple"), i = We("hover");
  return h(), S(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      D(
        "div",
        {
          class: p(e.n())
        },
        [
          (h(!0), S(
            Ve,
            null,
            Ze(e.toNumber(e.count), (l) => Ne((h(), S("div", {
              key: l,
              style: K(e.getStyle(l)),
              class: p(e.getClass(l)),
              onClick: (s) => e.handleClick(l, s)
            }, [
              G(o, {
                class: p(e.n("content-icon")),
                "var-rate-cover": "",
                transition: 0,
                namespace: e.getCurrentState(l).namespace,
                name: e.getCurrentState(l).name,
                style: K({ fontSize: e.toSizeUnit(e.size) })
              }, null, 8, ["class", "namespace", "name", "style"]),
              G(t, {
                hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
              }, null, 8, ["hovering"])
            ], 14, a2)), [
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
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const fm = x({
  name: r2,
  components: {
    VarIcon: Je,
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  directives: { Ripple: rn, Hover: Tn },
  props: dm,
  setup(e) {
    const n = k(-1), { form: o, bindForm: t } = jn(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = Yn(), { hovering: s } = Jn();
    let u = R(e.modelValue);
    P(t, {
      reset: g,
      validate: m,
      resetValidation: l
    });
    function d(C) {
      const { count: z, gap: O } = e;
      return {
        color: v(C).color,
        marginRight: C !== R(z) ? Oe(O) : 0
      };
    }
    function f(C) {
      const { name: z, color: O } = v(C);
      return {
        [wt("content")]: !0,
        [wt("--disabled")]: (o == null ? void 0 : o.disabled.value) || e.disabled,
        [wt("--error")]: r.value,
        [wt("--primary")]: z !== e.emptyIcon && !O
      };
    }
    function v(C) {
      const {
        modelValue: z,
        disabled: O,
        disabledColor: A,
        color: T,
        half: E,
        emptyColor: B,
        icon: N,
        halfIcon: H,
        emptyIcon: Y,
        namespace: M,
        halfIconNamespace: q,
        emptyIconNamespace: W
      } = e;
      let ue = T;
      return (O || o != null && o.disabled.value) && (ue = A), C <= z ? { color: ue, name: N, namespace: M } : E && C <= z + 0.5 ? { color: ue, name: H, namespace: q } : {
        color: O || o != null && o.disabled.value ? A : B,
        name: Y,
        namespace: W
      };
    }
    function b(C, z) {
      const { half: O, clearable: A } = e, { offsetWidth: T } = z.target;
      O && z.offsetX <= Math.floor(T / 2) && (C -= 0.5), u === C && A && (C = 0), u !== C && (P(e["onUpdate:modelValue"], C), P(e.onChange, C)), u = C;
    }
    function m() {
      return i(e.rules, e.modelValue);
    }
    function y() {
      return qe(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function $(C, z) {
      const { readonly: O, disabled: A } = e;
      O || A || o != null && o.disabled.value || o != null && o.readonly.value || (b(C, z), y());
    }
    function w(C) {
      return (z) => {
        n.value = C, s.value = z;
      };
    }
    function g() {
      P(e["onUpdate:modelValue"], 0), l();
    }
    return {
      errorMessage: r,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      hovering: s,
      currentHoveringValue: n,
      getStyle: d,
      getClass: f,
      getCurrentState: v,
      handleClick: $,
      createHoverHandler: w,
      reset: g,
      validate: m,
      resetValidation: l,
      toSizeUnit: Oe,
      toNumber: R,
      n: wt
    };
  }
});
fm.render = i2;
var ti = fm;
oe(ti);
le(ti, dm);
const vT = ti;
var Vl = ti;
const l2 = (e) => (Wo(""), e = e(), Ko(), e), s2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, u2 = /* @__PURE__ */ l2(() => /* @__PURE__ */ D(
  "path",
  { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
  null,
  -1
  /* HOISTED */
)), c2 = [
  u2
];
function d2(e, n) {
  return h(), S("svg", s2, [...c2]);
}
const pm = x({});
pm.render = d2;
var f2 = pm;
const p2 = (e) => (Wo(""), e = e(), Ko(), e), v2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, m2 = /* @__PURE__ */ p2(() => /* @__PURE__ */ D(
  "path",
  { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
  null,
  -1
  /* HOISTED */
)), h2 = [
  m2
];
function g2(e, n) {
  return h(), S("svg", v2, [...h2]);
}
const vm = x({});
vm.render = g2;
var b2 = vm;
const y2 = (e) => (Wo(""), e = e(), Ko(), e), k2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, $2 = /* @__PURE__ */ y2(() => /* @__PURE__ */ D(
  "path",
  { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
  null,
  -1
  /* HOISTED */
)), w2 = [
  $2
];
function C2(e, n) {
  return h(), S("svg", k2, [...w2]);
}
const mm = x({});
mm.render = C2;
var S2 = mm;
const { n: P2, classes: z2 } = ee("result");
function O2(e, n) {
  return h(), S(
    Ve,
    null,
    [
      D(
        "span",
        {
          class: p(e.n("success-cover-left"))
        },
        null,
        2
        /* CLASS */
      ),
      D(
        "span",
        {
          class: p(e.classes(e.n("success-line"), e.n("success-line-tip"))),
          style: K({
            animationDuration: e.animation ? "760ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      D(
        "span",
        {
          class: p(e.classes(e.n("success-line"), e.n("success-line-long"))),
          style: K({
            animationDuration: e.animation ? "770ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      D(
        "span",
        {
          ref: "circle",
          class: p(e.n("success-circle")),
          style: K({ left: `-${e.borderSize}`, top: `-${e.borderSize}`, borderWidth: e.borderSize })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      D(
        "span",
        {
          class: p(e.n("success-line-fix"))
        },
        null,
        2
        /* CLASS */
      ),
      D(
        "span",
        {
          class: p(e.n("success-cover-right")),
          style: K({
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
const hm = x({
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
      n: P2,
      classes: z2
    };
  }
});
hm.render = O2;
var T2 = hm;
const E2 = (e) => (Wo(""), e = e(), Ko(), e), B2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, I2 = /* @__PURE__ */ E2(() => /* @__PURE__ */ D(
  "path",
  { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
  null,
  -1
  /* HOISTED */
)), D2 = [
  I2
];
function M2(e, n) {
  return h(), S("svg", B2, [...D2]);
}
const gm = x({});
gm.render = M2;
var N2 = gm;
const A2 = (e) => (Wo(""), e = e(), Ko(), e), V2 = { viewBox: "-4 -4 32 32" }, L2 = /* @__PURE__ */ A2(() => /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), R2 = [
  L2
];
function F2(e, n) {
  return h(), S("svg", V2, [...R2]);
}
const bm = x({});
bm.render = F2;
var U2 = bm;
const ym = {
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
}, { name: H2, n: Y2, classes: j2 } = ee("result");
function W2(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      V(e.$slots, "image", {}, () => [
        e.type ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.n("image-container"))
          },
          [
            D(
              "div",
              {
                class: p(e.classes(e.n("image"), e.n(e.type))),
                style: K({
                  width: e.circleSize,
                  height: e.circleSize,
                  borderWidth: e.borderSize
                })
              },
              [
                (h(), Pe(vt(e.type), {
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
        )) : X("v-if", !0)
      ]),
      V(e.$slots, "title", {}, () => [
        e.title ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.n("title"))
          },
          re(e.title),
          3
          /* TEXT, CLASS */
        )) : X("v-if", !0)
      ]),
      V(e.$slots, "description", {}, () => [
        e.description ? (h(), S(
          "div",
          {
            key: 0,
            class: p(e.n("description"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : X("v-if", !0)
      ]),
      e.$slots.footer ? (h(), S(
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
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const km = x({
  name: H2,
  components: {
    Info: f2,
    Success: T2,
    Warning: S2,
    Error: b2,
    Question: N2,
    Empty: U2
  },
  props: ym,
  setup(e) {
    const n = I(
      () => `calc(${e.imageSize ? Oe(e.imageSize) : "var(--result-image-size)"} * 0.9)`
    ), o = I(
      () => `calc(${e.imageSize ? Oe(e.imageSize) : "var(--result-image-size)"} * 0.05)`
    );
    return {
      circleSize: n,
      borderSize: o,
      n: Y2,
      classes: j2
    };
  }
});
km.render = W2;
var ri = km;
oe(ri);
le(ri, ym);
const mT = ri;
var Ll = ri;
const $m = {
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
  onClick: L()
}, { name: K2, n: q2, classes: G2 } = ee("row");
function X2(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      style: K({
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
const wm = x({
  name: K2,
  props: $m,
  setup(e) {
    const n = I(
      () => Ye(e.gutter) ? e.gutter.map((s) => nn(s) / 2) : [0, nn(e.gutter) / 2]
    ), { cols: o, bindCols: t, length: r } = Ay(), a = { computePadding: i };
    ce(() => r.value, i), ce(() => e.gutter, i), t(a);
    function i() {
      o.forEach((s) => {
        const [u, c] = n.value;
        s.setPadding({ left: c, right: c, top: u, bottom: u });
      });
    }
    function l(s) {
      P(e.onClick, s);
    }
    return {
      average: n,
      n: q2,
      classes: G2,
      handleClick: l,
      padStartFlex: Or
    };
  }
});
wm.render = X2;
var ai = wm;
oe(ai);
le(ai, $m);
const hT = ai;
var Rl = ai, Z2 = Object.defineProperty, Qc = Object.getOwnPropertySymbols, J2 = Object.prototype.hasOwnProperty, Q2 = Object.prototype.propertyIsEnumerable, _c = (e, n, o) => n in e ? Z2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, _2 = (e, n) => {
  for (var o in n || (n = {}))
    J2.call(n, o) && _c(e, o, n[o]);
  if (Qc)
    for (var o of Qc(n))
      Q2.call(n, o) && _c(e, o, n[o]);
  return e;
};
const Cm = _2({
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: void 0
  },
  options: Array,
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
  rules: Array,
  onFocus: L(),
  onBlur: L(),
  onClose: L(),
  onChange: L(),
  onClear: L(),
  "onUpdate:modelValue": L()
}, Me(Na, [
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
])), { name: x2, n: e4, classes: n4 } = ee("select"), o4 = ["tabindex"];
function t4(e, n) {
  const o = _("maybe-v-node"), t = _("var-chip"), r = _("var-icon"), a = _("var-field-decorator"), i = _("var-option"), l = _("var-menu"), s = _("var-form-details");
  return h(), S("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.disabled || e.formDisabled ? void 0 : "0",
    onFocus: n[3] || (n[3] = (...u) => e.handleFocus && e.handleFocus(...u)),
    onBlur: n[4] || (n[4] = (...u) => e.handleRootBlur && e.handleRootBlur(...u))
  }, [
    G(l, {
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
      menu: fe(() => [
        D(
          "div",
          {
            ref: "menuEl",
            class: p(e.classes(e.n("scroller"), e.n("$-elevation--3")))
          },
          [
            e.selectOptions.length ? (h(!0), S(
              Ve,
              { key: 0 },
              Ze(e.selectOptions, (u) => (h(), Pe(i, {
                key: u[e.valueKey],
                label: u[e.labelKey],
                value: u[e.valueKey],
                option: u,
                disabled: u.disabled
              }, null, 8, ["label", "value", "option", "disabled"]))),
              128
              /* KEYED_FRAGMENT */
            )) : X("v-if", !0),
            V(e.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ]),
      default: fe(() => [
        G(
          a,
          wo(qt({
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
            errorMessage: e.errorMessage,
            formDisabled: e.formDisabled,
            disabled: e.disabled,
            clearable: e.clearable,
            cursor: e.cursor,
            onClick: e.handleClick,
            onClear: e.handleClear
          })),
          Et({
            "clear-icon": fe(({ clear: u }) => [
              V(e.$slots, "clear-icon", { clear: u })
            ]),
            "append-icon": fe(() => [
              V(e.$slots, "append-icon")
            ]),
            default: fe(() => [
              D(
                "div",
                {
                  class: p(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                  style: K({
                    textAlign: e.textAlign,
                    color: e.textColor
                  })
                },
                [
                  D(
                    "div",
                    {
                      class: p(e.n("label"))
                    },
                    [
                      e.isEmptyModelValue ? X("v-if", !0) : V(e.$slots, "selected", { key: 0 }, () => [
                        e.multiple ? (h(), S(
                          Ve,
                          { key: 0 },
                          [
                            e.chip ? (h(), S(
                              "div",
                              {
                                key: 0,
                                class: p(e.n("chips"))
                              },
                              [
                                (h(!0), S(
                                  Ve,
                                  null,
                                  Ze(e.labels, (u) => (h(), Pe(t, {
                                    class: p(e.n("chip")),
                                    "var-select-cover": "",
                                    closeable: "",
                                    size: "small",
                                    type: e.errorMessage ? "danger" : void 0,
                                    key: u,
                                    onClick: n[0] || (n[0] = An(() => {
                                    }, ["stop"])),
                                    onClose: () => e.handleClose(u)
                                  }, {
                                    default: fe(() => [
                                      G(o, { is: u }, null, 8, ["is"])
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
                            )) : (h(), S(
                              "div",
                              {
                                key: 1,
                                class: p(e.n("values"))
                              },
                              [
                                (h(!0), S(
                                  Ve,
                                  null,
                                  Ze(e.labels, (u, c) => (h(), S(
                                    Ve,
                                    { key: u },
                                    [
                                      G(o, { is: u }, null, 8, ["is"]),
                                      De(
                                        re(c !== e.labels.length - 1 ? e.separator : ""),
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
                        )) : (h(), Pe(o, {
                          key: 1,
                          is: e.label
                        }, null, 8, ["is"]))
                      ])
                    ],
                    2
                    /* CLASS */
                  ),
                  e.enableCustomPlaceholder ? (h(), S(
                    "span",
                    {
                      key: 0,
                      class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                      style: K({
                        color: e.placeholderColor
                      })
                    },
                    re(e.placeholder),
                    7
                    /* TEXT, CLASS, STYLE */
                  )) : X("v-if", !0),
                  V(e.$slots, "arrow-icon", {
                    focus: e.isFocusing,
                    menuOpen: e.showMenu
                  }, () => [
                    G(r, {
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
              fn: fe(() => [
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
    G(s, {
      "error-message": e.errorMessage,
      onClick: n[2] || (n[2] = An(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])
  ], 42, o4);
}
const Sm = x({
  name: x2,
  components: {
    VarIcon: Je,
    VarMenu: Ut,
    VarChip: Br,
    VarOption: Ur,
    VarFieldDecorator: Vt,
    VarFormDetails: En,
    MaybeVNode: Xt
  },
  props: Cm,
  setup(e) {
    const n = k(!1), o = k(!1), t = k(null), r = I(() => e.multiple), a = I(() => e.focusColor), i = I(() => _n(e.modelValue)), l = I(() => e.disabled || e.readonly ? "" : "pointer"), s = I(() => Ye(e.options) ? e.options : []), u = k(0), { bindForm: c, form: d } = jn(), { length: f, options: v, bindOptions: b } = t6(), { label: m, labels: y, computeLabel: $, getSelectedValue: w } = Wv({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => v,
      optionProvidersLength: () => f.value
    }), {
      errorMessage: g,
      validateWithTrigger: C,
      validate: z,
      // expose
      resetValidation: O
    } = Yn(), A = k(null), T = I(() => e.variant === "outlined" ? "bottom" : "cover-top"), E = I(() => {
      const { hint: j, blurColor: de, focusColor: Se } = e;
      if (!j)
        return g.value ? "var(--field-decorator-error-color)" : n.value ? Se || "var(--field-decorator-focus-color)" : de || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), B = I(() => !e.hint && _n(e.modelValue)), N = {
      multiple: r,
      focusColor: a,
      computeLabel: $,
      onSelect: pe,
      reset: F,
      validate: he,
      resetValidation: O
    };
    ce(
      () => e.multiple,
      () => {
        const { multiple: j, modelValue: de } = e;
        j && !Ye(de) && Vn("Select", "The modelValue must be an array when multiple is true");
      }
    ), b(N), Ke(() => window, "keydown", H), Ke(() => window, "keyup", Y), P(c, N);
    function H(j) {
      const { disabled: de, readonly: Se } = e;
      if (d != null && d.disabled.value || d != null && d.readonly.value || de || Se || !n.value)
        return;
      const { key: Te } = j;
      if (Te === " " && !o.value) {
        Fe(j);
        return;
      }
      if (Te === "Escape" && o.value) {
        t.value.focus(), Fe(j), o.value = !1;
        return;
      }
      if (Te === "Tab" && o.value) {
        t.value.focus(), Fe(j), W();
        return;
      }
      if (Te === "Enter" && !o.value) {
        Fe(j), o.value = !0;
        return;
      }
      (Te === "ArrowDown" || Te === "ArrowUp") && o.value && (Fe(j), Hd(t.value, A.value, Te));
    }
    function Y(j) {
      const { disabled: de, readonly: Se } = e;
      if (d != null && d.disabled.value || d != null && d.readonly.value || de || Se || o.value || !n.value)
        return;
      const { key: Te } = j;
      Te === " " && !o.value && (Fe(j), o.value = !0);
    }
    function M(j) {
      qe(() => {
        const { validateTrigger: de, rules: Se, modelValue: Te } = e;
        C(de, j, Se, Te);
      });
    }
    function q() {
      const { disabled: j, readonly: de, onFocus: Se } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || j || de || (u.value = nn(e.offsetY), J(), P(Se), M("onFocus"));
    }
    function W() {
      const { disabled: j, readonly: de, onBlur: Se } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || j || de || (te(), P(Se), M("onBlur"));
    }
    function ue() {
      o.value || W();
    }
    function Q() {
      n.value && W();
    }
    function pe(j) {
      const { disabled: de, readonly: Se, multiple: Te, onChange: He } = e;
      if (d != null && d.disabled.value || d != null && d.readonly.value || de || Se)
        return;
      const xe = w(j);
      P(e["onUpdate:modelValue"], xe), P(He, xe), M("onChange"), Te || (t.value.focus(), $n().then(() => {
        o.value = !1;
      }));
    }
    function ke() {
      const { disabled: j, readonly: de, multiple: Se, clearable: Te, onClear: He } = e;
      if (d != null && d.disabled.value || d != null && d.readonly.value || j || de || !Te)
        return;
      const xe = Se ? [] : void 0;
      P(e["onUpdate:modelValue"], xe), P(He, xe), M("onClear");
    }
    function se(j) {
      const { disabled: de, onClick: Se } = e;
      d != null && d.disabled.value || de || (P(Se, j), M("onClick"));
    }
    function U(j) {
      const { disabled: de, readonly: Se, modelValue: Te, onClose: He } = e;
      if (d != null && d.disabled.value || d != null && d.readonly.value || de || Se)
        return;
      const xe = v.find(({ label: Ie }) => Ie.value === j), ve = Te.filter(
        (Ie) => {
          var Le;
          return Ie !== ((Le = xe.value.value) != null ? Le : xe.label.value);
        }
      );
      P(e["onUpdate:modelValue"], ve), P(He, ve), M("onClose");
    }
    function J() {
      u.value = nn(e.offsetY), n.value = !0;
    }
    function te() {
      n.value = !1, o.value = !1;
    }
    function he() {
      return z(e.rules, e.modelValue);
    }
    function F() {
      P(e["onUpdate:modelValue"], e.multiple ? [] : void 0), O();
    }
    return {
      root: t,
      offsetY: u,
      isFocusing: n,
      showMenu: o,
      errorMessage: g,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: m,
      labels: y,
      isEmptyModelValue: i,
      menuEl: A,
      placement: T,
      cursor: l,
      placeholderColor: E,
      enableCustomPlaceholder: B,
      selectOptions: s,
      isFunction: Qn,
      n: e4,
      classes: n4,
      handleFocus: q,
      handleBlur: W,
      handleClickOutside: Q,
      handleClear: ke,
      handleClick: se,
      handleClose: U,
      handleRootBlur: ue,
      reset: F,
      validate: he,
      resetValidation: O,
      focus: J,
      blur: te
    };
  }
});
Sm.render = t4;
var ii = Sm;
oe(ii);
le(ii, Cm);
const gT = ii;
var Fl = ii;
const Pm = {
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
}, { name: r4, n: a4, classes: i4 } = ee("skeleton");
function l4(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? X("v-if", !0) : (h(), S(
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
      e.loading && !e.fullscreen ? (h(), S(
        "div",
        {
          key: 1,
          class: p(e.n("content"))
        },
        [
          e.card ? (h(), S(
            "div",
            {
              key: 0,
              class: p(e.n("card")),
              style: K({ height: e.toSizeUnit(e.cardHeight) })
            },
            [
              D(
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
          )) : X("v-if", !0),
          e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), S(
            "div",
            {
              key: 1,
              class: p(e.n("article"))
            },
            [
              e.avatar ? (h(), S(
                "div",
                {
                  key: 0,
                  class: p(e.n("avatar")),
                  style: K({
                    width: e.toSizeUnit(e.avatarSize),
                    height: e.toSizeUnit(e.avatarSize)
                  })
                },
                [
                  D(
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
              )) : X("v-if", !0),
              e.title || e.toNumber(e.rows) > 0 ? (h(), S(
                "div",
                {
                  key: 1,
                  class: p(e.n("section"))
                },
                [
                  e.title ? (h(), S(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: K({ width: e.toSizeUnit(e.titleWidth) })
                    },
                    [
                      D(
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
                  )) : X("v-if", !0),
                  (h(!0), S(
                    Ve,
                    null,
                    Ze(e.toNumber(e.rows), (o, t) => (h(), S(
                      "div",
                      {
                        class: p(e.n("row")),
                        key: o,
                        style: K({ width: e.toSizeUnit(e.rowsWidth[t]) })
                      },
                      [
                        D(
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
              )) : X("v-if", !0)
            ],
            2
            /* CLASS */
          )) : X("v-if", !0)
        ],
        2
        /* CLASS */
      )) : X("v-if", !0),
      e.loading && e.fullscreen ? (h(), S(
        "div",
        {
          key: 2,
          class: p(e.n("fullscreen")),
          style: K({ zIndex: e.toNumber(e.fullscreenZIndex) })
        },
        [
          D(
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
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const zm = x({
  name: r4,
  props: Pm,
  setup: () => ({
    n: a4,
    classes: i4,
    toSizeUnit: Oe,
    toNumber: R
  })
});
zm.render = l4;
var li = zm;
oe(li);
le(li, Pm);
const bT = li;
var Ul = li, cn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(cn || {});
const Om = {
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
  rules: Array,
  onChange: L(),
  onStart: L(),
  onEnd: L(),
  "onUpdate:modelValue": L()
}, { name: s4, n: xc, classes: u4 } = ee("slider"), c4 = ["tabindex", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-disabled", "aria-valuetext", "onTouchstart", "onFocusin", "onFocusout"];
function d4(e, n) {
  const o = _("var-hover-overlay"), t = _("var-form-details"), r = We("hover");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [
      D(
        "div",
        {
          class: p(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
          ref: "sliderEl",
          onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
        },
        [
          D(
            "div",
            {
              class: p(e.n(`${e.direction}-track`))
            },
            [
              D(
                "div",
                {
                  class: p(e.n(`${e.direction}-track-background`)),
                  style: K({
                    background: e.trackColor,
                    height: e.isVertical ? "100%" : e.toSizeUnit(e.trackHeight),
                    width: e.isVertical ? e.toSizeUnit(e.trackHeight) : "100%"
                  })
                },
                null,
                6
                /* CLASS, STYLE */
              ),
              D(
                "div",
                {
                  class: p(e.n(`${e.direction}-track-fill`)),
                  style: K(e.getFillStyle)
                },
                null,
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          ),
          (h(!0), S(
            Ve,
            null,
            Ze(e.thumbList, (a) => (h(), S("div", {
              class: p(e.n(`${e.direction}-thumb`)),
              key: a.enumValue,
              style: K(e.thumbStyle(a)),
              tabindex: e.isDisabled ? void 0 : "0",
              role: "slider",
              "aria-valuemin": e.min,
              "aria-valuemax": e.max,
              "aria-valuenow": a.value,
              "aria-disabled": e.isDisabled,
              "aria-valuetext": `${a.text}`,
              onTouchstart: An((i) => e.start(i, a.enumValue), ["stop"]),
              onFocusin: (i) => e.handleFocus(a),
              onFocusout: (i) => e.handleBlur(a)
            }, [
              V(e.$slots, "button", {
                currentValue: a.text
              }, () => [
                Ne(D(
                  "div",
                  {
                    class: p(e.n(`${e.direction}-thumb-block`)),
                    style: K({
                      background: e.thumbColor
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ), [
                  [r, (i) => e.hover(i, a), "desktop"]
                ]),
                D(
                  "div",
                  {
                    class: p(
                      e.classes(e.n(`${e.direction}-thumb-ripple`), [
                        e.thumbsProps[a.enumValue].active,
                        e.n(`${e.direction}-thumb-ripple--active`)
                      ])
                    ),
                    style: K({
                      background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0
                    })
                  },
                  [
                    G(o, {
                      hovering: !e.isDisabled && a.hovering,
                      focusing: !e.isDisabled && a.focusing
                    }, null, 8, ["hovering", "focusing"])
                  ],
                  6
                  /* CLASS, STYLE */
                ),
                D(
                  "div",
                  {
                    class: p(
                      e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])
                    ),
                    style: K({
                      background: e.labelColor,
                      color: e.labelTextColor,
                      height: e.toSizeUnit(e.thumbSize),
                      width: e.toSizeUnit(e.thumbSize)
                    })
                  },
                  [
                    D(
                      "span",
                      null,
                      re(a.text),
                      1
                      /* TEXT */
                    )
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ])
            ], 46, c4))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      G(t, {
        "error-message": e.errorMessage,
        class: p(e.n("form")),
        "var-slider-cover": ""
      }, null, 8, ["error-message", "class"])
    ],
    2
    /* CLASS */
  );
}
const Tm = x({
  name: s4,
  components: {
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  directives: { Hover: Tn },
  props: Om,
  setup(e) {
    const n = k(0), o = k(null), t = k(!1), r = I(() => R(e.max) - R(e.min)), a = I(() => n.value / r.value * R(e.step)), i = I(() => e.disabled || (f == null ? void 0 : f.disabled.value)), l = I(() => e.readonly || (f == null ? void 0 : f.readonly.value)), s = I(() => e.direction === "vertical"), u = k(!1), c = k(!1), { bindForm: d, form: f } = jn(), { errorMessage: v, validateWithTrigger: b, validate: m, resetValidation: y } = Yn(), { hovering: $, handleHovering: w } = Jn(), { hovering: g, handleHovering: C } = Jn(), z = I(() => {
      const { modelValue: ae, range: me } = e;
      let $e = [];
      return me && Ye(ae) ? $e = [
        {
          value: ue(ae[0]),
          enumValue: cn.First,
          text: Q(ae[0]),
          hovering: $.value,
          focusing: u.value,
          handleHovering: w,
          handleFocusing(Ae) {
            u.value = Ae;
          }
        },
        {
          value: ue(ae[1]),
          enumValue: cn.Second,
          text: Q(ae[1]),
          hovering: g.value,
          focusing: c.value,
          handleHovering: C,
          handleFocusing(Ae) {
            c.value = Ae;
          }
        }
      ] : On(ae) && ($e = [
        {
          value: ue(ae),
          enumValue: cn.First,
          text: Q(ae),
          hovering: $.value,
          focusing: u.value,
          handleHovering: w,
          handleFocusing(Ae) {
            u.value = Ae;
          }
        }
      ]), $e;
    }), O = I(() => {
      const { activeColor: ae, range: me, modelValue: $e } = e, Ae = me && Ye($e) ? ue(Math.min($e[0], $e[1])) : 0, en = me && Ye($e) ? ue(Math.max($e[0], $e[1])) - Ae : ue($e);
      return s.value ? {
        left: "0px",
        height: `${en}%`,
        bottom: `${Ae}%`,
        background: ae
      } : {
        top: "0px",
        width: `${en}%`,
        left: `${Ae}%`,
        background: ae
      };
    }), A = Qe({
      [cn.First]: H(),
      [cn.Second]: H()
    });
    let T;
    P(d, {
      reset: xe,
      validate: N,
      resetValidation: y
    }), ce([() => e.modelValue, () => e.step], ([ae, me]) => {
      !Se() || !Te() || t.value || He(ae, R(me));
    }), ce(n, () => He()), vn(() => {
      !Se() || !Te() || B();
    }), Yr(te), Ke(() => window, "keydown", Ie), ro(B);
    function B() {
      n.value = o.value[s.value ? "offsetHeight" : "offsetWidth"];
    }
    function N() {
      return m(e.rules, e.modelValue);
    }
    function H() {
      return {
        startPosition: 0,
        currentOffset: 0,
        active: !1,
        percentValue: 0
      };
    }
    function Y() {
      return qe(() => b(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function M(ae) {
      const me = ae.currentTarget;
      return me ? s.value ? n.value - (ae.clientY - sn(me).top) : ae.clientX - $g(me) : 0;
    }
    function q(ae) {
      return {
        [s.value ? "bottom" : "left"]: `${ae.value}%`,
        zIndex: A[ae.enumValue].active ? 1 : void 0
      };
    }
    function W(ae) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : A[ae].active;
    }
    function ue(ae) {
      const { min: me, max: $e } = e;
      return ae < R(me) ? 0 : ae > R($e) ? 100 : (ae - R(me)) / r.value * 100;
    }
    function Q(ae) {
      if (!On(ae))
        return 0;
      const me = Mn(ae, R(e.min), R(e.max));
      return parseInt(`${me}`, 10) === me ? me : R(me.toPrecision(5));
    }
    function pe(ae, me) {
      i.value || me.handleHovering(ae);
    }
    function ke(ae) {
      P(e.onChange, ae), P(e["onUpdate:modelValue"], ae), Y();
    }
    function se(ae, me) {
      let $e = [];
      const { step: Ae, range: en, modelValue: ne, min: we } = e, Ee = R(Ae), Ue = Math.round(ae / a.value), Re = Ue * Ee + R(we), un = A[me].percentValue * Ee + R(we);
      if (A[me].percentValue = Ue, en && Ye(ne) && ($e = me === cn.First ? [Re, ne[1]] : [ne[0], Re]), un !== Re) {
        const mn = en ? $e.map((kn) => Q(kn)) : Q(Re);
        ke(mn);
      }
    }
    function U(ae) {
      if (!e.range)
        return cn.First;
      const me = A[cn.First].percentValue * a.value, $e = A[cn.Second].percentValue * a.value, Ae = Math.abs(ae - me), en = Math.abs(ae - $e);
      return Ae <= en ? cn.First : cn.Second;
    }
    function J() {
      document.addEventListener("touchmove", F, { passive: !1 }), document.addEventListener("touchend", j), document.addEventListener("touchcancel", j);
    }
    function te() {
      document.removeEventListener("touchmove", F), document.removeEventListener("touchend", j), document.removeEventListener("touchcancel", j);
    }
    function he(ae, me) {
      if (B(), i.value || (A[me].active = !0), T = me, J(), i.value || l.value)
        return;
      P(e.onStart), t.value = !0;
      const { clientX: $e, clientY: Ae } = ae.touches[0];
      A[me].startPosition = s.value ? Ae : $e;
    }
    function F(ae) {
      if (Fe(ae), i.value || l.value || !t.value)
        return;
      const { startPosition: me, currentOffset: $e } = A[T], { clientX: Ae, clientY: en } = ae.touches[0];
      let ne = (s.value ? me - en : Ae - me) + $e;
      ne <= 0 ? ne = 0 : ne >= n.value && (ne = n.value), se(ne, T);
    }
    function j() {
      te();
      const { range: ae, modelValue: me, onEnd: $e, step: Ae, min: en } = e;
      if (i.value || (A[T].active = !1), i.value || l.value)
        return;
      let ne = [];
      A[T].currentOffset = A[T].percentValue * a.value;
      const we = A[T].percentValue * R(Ae) + R(en);
      ae && Ye(me) && (ne = T === cn.First ? [we, me[1]] : [me[0], we]), P($e, ae ? ne : we), t.value = !1;
    }
    function de(ae) {
      if (i.value || l.value || ae.target.closest(`.${xc("thumb")}`))
        return;
      const me = M(ae), $e = U(me);
      T = $e, se(me, $e), j();
    }
    function Se() {
      return R(e.step) <= 0 ? (kg("[Varlet] Slider", '"step" should be > 0'), !1) : !0;
    }
    function Te() {
      const { range: ae, modelValue: me } = e;
      return ae && !Ye(me) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !ae && Ye(me) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : ae && Ye(me) && me.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }
    function He(ae = e.modelValue, me = R(e.step)) {
      const $e = (Ae) => {
        const { min: en, max: ne } = e;
        return Ae < R(en) ? 0 : Ae > R(ne) ? r.value / me : (Ae - R(en)) / me;
      };
      e.range && Ye(ae) ? (A[cn.First].percentValue = $e(ae[0]), A[cn.First].currentOffset = A[cn.First].percentValue * a.value, A[cn.Second].percentValue = $e(ae[1]), A[cn.Second].currentOffset = A[cn.Second].percentValue * a.value) : On(ae) && (A[cn.First].currentOffset = $e(ae) * a.value);
    }
    function xe() {
      const ae = e.range ? [0, 0] : 0;
      P(e["onUpdate:modelValue"], ae), y();
    }
    function ve(ae, me) {
      const $e = R(e.step);
      if (Ye(me)) {
        const Ae = me[0] + (u.value ? ae * $e : 0), en = me[1] + (c.value ? ae * $e : 0);
        return [Ae, en].map(Q);
      }
      return Q(me + ae * $e);
    }
    function Ie(ae) {
      const me = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: $e } = ae;
      if (!Cr(me, $e) || l.value || i.value || e.range && !u.value && !c.value || !e.range && !u.value)
        return;
      Fe(ae);
      const Ae = me[$e], en = ve(Ae, e.modelValue);
      ke(en);
    }
    function Le(ae) {
      i.value || ae.handleFocusing(!0);
    }
    function on(ae) {
      ae.handleFocusing(!1);
    }
    return {
      sliderEl: o,
      getFillStyle: O,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: A,
      thumbList: z,
      handleFocus: Le,
      handleBlur: on,
      n: xc,
      classes: u4,
      thumbStyle: q,
      hover: pe,
      toSizeUnit: Oe,
      toNumber: R,
      showLabel: W,
      start: he,
      move: F,
      end: j,
      handleClick: de
    };
  }
});
Tm.render = d4;
var si = Tm;
oe(si);
le(si, Om);
const yT = si;
var Hl = si, f4 = Object.defineProperty, p4 = Object.defineProperties, v4 = Object.getOwnPropertyDescriptors, ed = Object.getOwnPropertySymbols, m4 = Object.prototype.hasOwnProperty, h4 = Object.prototype.propertyIsEnumerable, nd = (e, n, o) => n in e ? f4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, g4 = (e, n) => {
  for (var o in n || (n = {}))
    m4.call(n, o) && nd(e, o, n[o]);
  if (ed)
    for (var o of ed(n))
      h4.call(n, o) && nd(e, o, n[o]);
  return e;
}, b4 = (e, n) => p4(e, v4(n));
const Vs = {
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
  loadingType: Me(lo, "type"),
  loadingSize: Me(lo, "size"),
  loadingRadius: Me(lo, "radius"),
  loadingColor: b4(g4({}, Me(lo, "color")), {
    default: "currentColor"
  }),
  lockScroll: Boolean,
  show: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  forbidClick: Boolean,
  onOpen: L(),
  onOpened: L(),
  onClose: L(),
  onClosed: L(),
  "onUpdate:show": L(),
  _update: String
}, { n: y4, classes: k4 } = ee("snackbar"), $4 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function w4(e, n) {
  const o = _("var-icon"), t = _("var-loading");
  return Ne((h(), S(
    "div",
    {
      class: p(e.n()),
      style: K({ pointerEvents: e.isForbidClick ? "auto" : "none", zIndex: e.zIndex })
    },
    [
      D(
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
          style: K({ zIndex: e.zIndex })
        },
        [
          D(
            "div",
            {
              class: p([e.n("content"), e.contentClass])
            },
            [
              V(e.$slots, "default", {}, () => [
                De(
                  re(e.content),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          e.iconName || e.type === "loading" || e.$slots.icon ? (h(), S(
            "div",
            {
              key: 0,
              class: p(e.n("icon"))
            },
            [
              e.iconName ? (h(), Pe(o, {
                key: 0,
                name: e.iconName
              }, null, 8, ["name"])) : X("v-if", !0),
              e.type === "loading" ? (h(), Pe(t, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : X("v-if", !0),
              V(e.$slots, "icon")
            ],
            2
            /* CLASS */
          )) : X("v-if", !0),
          e.$slots.action ? (h(), S(
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
          )) : X("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [Xn, e.show]
  ]);
}
const Em = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: it,
    VarIcon: Je
  },
  props: Vs,
  setup(e) {
    const n = k(null), { zIndex: o } = Jt(() => e.show, 1);
    Zt(
      () => e.show,
      () => e.lockScroll
    );
    const t = I(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), r = I(() => e.type ? $4[e.type] : "");
    function a() {
      n.value = setTimeout(() => {
        e.type !== "loading" && P(e["onUpdate:show"], !1);
      }, e.duration);
    }
    return ce(
      () => e.show,
      (i) => {
        i ? (P(e.onOpen), a()) : (clearTimeout(n.value), P(e.onClose));
      }
    ), ce(
      () => e._update,
      () => {
        clearTimeout(n.value), a();
      }
    ), vn(() => {
      e.show && (P(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: Dm,
      zIndex: o,
      iconName: r,
      isForbidClick: t,
      n: y4,
      classes: k4,
      formatElevation: pn
    };
  }
});
Em.render = w4;
var Bm = Em;
const { name: C4, n: S4 } = ee("snackbar");
function P4(e, n) {
  const o = _("var-snackbar-core");
  return h(), Pe(oo, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [
    G(_e, {
      name: `${e.n()}-fade`,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: fe(() => [
        G(o, je(e.$props, {
          class: e.n("transition")
        }), Et({
          default: fe(() => [
            V(e.$slots, "default")
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots.icon ? {
            name: "icon",
            fn: fe(() => [
              V(e.$slots, "icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots.action ? {
            name: "action",
            fn: fe(() => [
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
const Im = x({
  name: C4,
  components: { VarSnackbarCore: Bm },
  props: Vs,
  setup() {
    const { disabled: e } = Go();
    return {
      disabled: e,
      n: S4
    };
  }
});
Im.render = P4;
var ui = Im, z4 = Object.defineProperty, od = Object.getOwnPropertySymbols, O4 = Object.prototype.hasOwnProperty, T4 = Object.prototype.propertyIsEnumerable, td = (e, n, o) => n in e ? z4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Yt = (e, n) => {
  for (var o in n || (n = {}))
    O4.call(n, o) && td(e, o, n[o]);
  if (od)
    for (var o of od(n))
      T4.call(n, o) && td(e, o, n[o]);
  return e;
};
const Dm = ["loading", "success", "warning", "info", "error"];
let rd = 0, Yl = !1, Mm, jt = !1;
const Nm = {
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
let Hn = Qe([]), Ls = Nm;
const E4 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Mi = (e) => () => Qn(e) ? e() : e, B4 = {
  setup() {
    return () => {
      const e = Hn.map(({
        id: n,
        reactiveSnackOptions: o,
        _update: t
      }) => {
        const r = document.querySelector(".var-transition-group");
        o.forbidClick || o.type === "loading" ? r.classList.add("var-pointer-auto") : r.classList.remove("var-pointer-auto");
        const a = Yt({
          position: jt ? "relative" : "absolute"
        }, V4(o.position)), {
          content: i,
          icon: l,
          action: s
        } = o, u = {
          default: Mi(i),
          icon: Mi(l),
          action: Mi(s)
        };
        return G(Bm, je(o, {
          key: n,
          style: a,
          "data-id": n,
          _update: t,
          show: o.show,
          "onUpdate:show": (c) => o.show = c
        }), u);
      });
      return G($h, je(E4, {
        style: {
          zIndex: Nn.zIndex
        },
        onAfterEnter: I4,
        onAfterLeave: D4
      }), {
        default: () => [e]
      });
    };
  }
}, no = function(e) {
  const n = N4(e), o = Qe(Yt(Yt({}, Ls), n));
  o.show = !0, Yl || (Yl = !0, Mm = ht(B4).unmountInstance);
  const {
    length: t
  } = Hn, r = {
    id: rd++,
    reactiveSnackOptions: o
  };
  if (t === 0 || jt)
    M4(r);
  else {
    const a = `update-${rd}`;
    A4(o, a);
  }
  return {
    clear() {
      !jt && Hn.length ? Hn[0].reactiveSnackOptions.show = !1 : o.show = !1;
    }
  };
};
Dm.forEach((e) => {
  no[e] = (n) => (tt(n) ? n.type = e : n = {
    content: n,
    type: e
  }, no(n));
});
no.allowMultiple = function(e = !1) {
  e !== jt && (Hn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), jt = e);
};
no.clear = function() {
  Hn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
no.setDefaultOptions = function(e) {
  Ls = e;
};
no.resetDefaultOptions = function() {
  Ls = Nm;
};
function I4(e) {
  const n = e.getAttribute("data-id"), o = Hn.find((t) => t.id === R(n));
  o && P(o.reactiveSnackOptions.onOpened);
}
function D4(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), o = Hn.find((r) => r.id === R(n));
  o && (o.animationEnd = !0, P(o.reactiveSnackOptions.onClosed)), Hn.every((r) => r.animationEnd) && (P(Mm), Hn = Qe([]), Yl = !1);
}
function M4(e) {
  Hn.push(e);
}
function N4(e = {}) {
  return gn(e) ? {
    content: e
  } : e;
}
function A4(e, n) {
  const [o] = Hn;
  o.reactiveSnackOptions = Yt(Yt({}, o.reactiveSnackOptions), e), o._update = n;
}
function V4(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
no.Component = ui;
oe(ui);
oe(ui, no);
le(no, Vs);
const kT = ui;
var jl = no;
const Am = {
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
function Dn(e) {
  return `calc(${e} / 2)`;
}
function L4(e, n, o) {
  const { direction: t, justify: r, index: a, lastIndex: i } = o;
  let l = "0";
  return t === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? l = `${Dn(e)} ${n} ${Dn(e)} 0` : l = `${Dn(e)} 0` : r === "space-around" ? l = `${Dn(e)} ${Dn(n)}` : r === "space-between" && (a === 0 ? l = `${Dn(e)} ${Dn(n)} ${Dn(e)} 0` : a === i ? l = `${Dn(e)} 0 ${Dn(e)} ${Dn(n)}` : l = `${Dn(e)} ${Dn(n)}`)), t === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const R4 = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: F4,
  n: vr,
  classes: ad
} = ee("space");
function U4(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Ye(e) ? e.map(Oe) : [Oe(e), Oe(e)];
}
var ci = x({
  name: F4,
  props: Am,
  setup(e, {
    slots: n
  }) {
    return () => {
      var o;
      const {
        inline: t,
        justify: r,
        align: a,
        wrap: i,
        direction: l,
        size: s
      } = e;
      let u = (o = P(n.default)) != null ? o : [];
      const [c, d] = U4(s, R4(s));
      u = Id(u);
      const f = u.length - 1, v = u.map((b, m) => {
        const y = L4(c, d, {
          direction: l,
          justify: r,
          index: m,
          lastIndex: f
        });
        return G("div", {
          class: ad([l === "column", vr("--auto")]),
          style: {
            margin: y
          }
        }, [b]);
      });
      return G("div", {
        class: ad(vr(), vr("$--box"), [t, vr("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: Or(r),
          alignItems: Or(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${c} / 2) 0` : void 0
        }
      }, [v]);
    };
  }
});
oe(ci);
le(ci, Am);
const $T = ci;
var Wl = ci;
const Vm = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Me(tn, "name"),
  inactiveIcon: Me(tn, "name"),
  activeIconNamespace: Me(tn, "namespace"),
  currentIconNamespace: Me(tn, "namespace"),
  inactiveIconNamespace: Me(tn, "namespace")
}, Lm = Symbol("STEPS_BIND_STEP_KEY");
function H4() {
  const { bindChildren: e, childProviders: n } = yn(Lm);
  return {
    step: n,
    bindStep: e
  };
}
function Y4() {
  const { parentProvider: e, index: n, bindParent: o } = bn(Lm);
  return o || Vn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: o
  };
}
const { name: j4, n: W4, classes: K4 } = ee("step"), q4 = { key: 3 };
function G4(e, n) {
  const o = _("var-icon");
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      D(
        "div",
        {
          class: p(e.n(e.direction))
        },
        [
          D(
            "div",
            {
              class: p(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
              style: K({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
              onClick: n[0] || (n[0] = (...t) => e.click && e.click(...t))
            },
            [
              e.isActive ? (h(), Pe(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.activeIcon,
                namespace: e.activeIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.isCurrent && e.currentIcon ? (h(), Pe(o, {
                key: 1,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon,
                namespace: e.currentIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.inactiveIcon ? (h(), Pe(o, {
                key: 2,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon,
                namespace: e.inactiveIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : (h(), S(
                "span",
                q4,
                re(e.index + 1),
                1
                /* TEXT */
              ))
            ],
            6
            /* CLASS, STYLE */
          ),
          e.$slots.default ? (h(), S(
            "div",
            {
              key: 0,
              class: p(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
              onClick: n[1] || (n[1] = (...t) => e.click && e.click(...t))
            },
            [
              V(e.$slots, "default")
            ],
            2
            /* CLASS */
          )) : X("v-if", !0),
          D(
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
const Rm = x({
  name: j4,
  components: { VarIcon: Je },
  props: Vm,
  setup() {
    const { index: e, steps: n, bindSteps: o } = Y4(), { active: t, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = I(() => t.value === e.value), u = I(() => e.value !== -1 && R(t.value) > e.value);
    o({ index: e });
    function d() {
      return l(e.value);
    }
    return {
      index: e,
      isActive: u,
      isCurrent: s,
      direction: i,
      activeColor: r,
      inactiveColor: a,
      n: W4,
      classes: K4,
      click: d
    };
  }
});
Rm.render = G4;
var di = Rm;
oe(di);
le(di, Vm);
const wT = di;
var Kl = di;
const Fm = {
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
  onClickStep: L()
}, { name: X4, n: Z4 } = ee("steps");
function J4(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n()),
      style: K({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
    },
    [
      V(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Um = x({
  name: X4,
  props: Fm,
  setup(e) {
    const n = I(() => e.active), o = I(() => e.activeColor), t = I(() => e.inactiveColor), r = I(() => e.direction), { bindStep: a } = H4();
    a({
      active: n,
      direction: r,
      activeColor: o,
      inactiveColor: t,
      clickStep: l
    });
    function l(s) {
      P(e.onClickStep, s);
    }
    return { n: Z4 };
  }
});
Um.render = J4;
var fi = Um;
oe(fi);
le(fi, Fm);
const CT = fi;
var ql = fi;
const Hm = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: Q4, n: _4 } = ee("style-provider"), x4 = x({
  name: Q4,
  props: Hm,
  setup(e, { slots: n }) {
    return () => jr(
      e.tag,
      {
        class: _4(),
        style: Ud(e.styleVars)
      },
      P(n.default)
    );
  }
});
var pi = x4;
const Ym = "varlet-style-vars";
function id() {
  const e = document.head.querySelector(`#${Ym}`);
  e && document.head.removeChild(e);
}
function eP(e) {
  const n = document.createElement("style");
  n.id = Ym, n.innerHTML = e, document.head.appendChild(n);
}
function vi(e) {
  if (e == null) {
    id();
    return;
  }
  const n = Ud(e ?? {}), o = Object.entries(n).reduce((t, [r, a]) => (t += `${r}:${a};`, t), `:root:root {
`);
  id(), eP(`${o}
}`);
}
vi.Component = pi;
oe(pi);
oe(pi, vi);
le(vi, Hm);
const ST = pi;
var Gl = vi;
const jm = {
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
  rules: Array,
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
  onClick: L(),
  onBeforeChange: L(),
  onChange: L(),
  "onUpdate:modelValue": L()
}, { name: nP, n: oP, classes: tP } = ee("switch"), rP = (e) => (Wo(""), e = e(), Ko(), e), aP = ["aria-checked"], iP = ["tabindex"], lP = /* @__PURE__ */ rP(() => /* @__PURE__ */ D(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ D("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
)), sP = [
  lP
];
function uP(e, n) {
  const o = _("var-hover-overlay"), t = _("var-form-details"), r = We("ripple"), a = We("hover");
  return Ne((h(), S("div", {
    class: p(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [
    D(
      "div",
      {
        ref: "switchRef",
        class: p(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
        style: K(e.styleComputed.switch),
        onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
      },
      [
        D(
          "div",
          {
            style: K(e.styleComputed.track),
            class: p(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
          },
          null,
          6
          /* CLASS, STYLE */
        ),
        Ne((h(), S("div", {
          class: p(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
          style: K(e.styleComputed.ripple),
          tabindex: e.disabled || e.formDisabled ? void 0 : "0",
          onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
          onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
        }, [
          D(
            "div",
            {
              style: K(e.styleComputed.handle),
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
              e.loading ? (h(), S(
                "span",
                {
                  key: 0,
                  class: p(e.n("loading")),
                  style: K({
                    width: e.radius,
                    height: e.radius
                  })
                },
                [...sP],
                6
                /* CLASS, STYLE */
              )) : X("v-if", !0)
            ],
            6
            /* CLASS, STYLE */
          ),
          G(o, {
            hovering: e.hovering && !e.disabled && !e.formDisabled,
            focusing: e.isFocusing && !e.disabled && !e.formDisabled
          }, null, 8, ["hovering", "focusing"])
        ], 46, iP)), [
          [r, {
            disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly
          }]
        ])
      ],
      6
      /* CLASS, STYLE */
    ),
    G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
  ], 10, aP)), [
    [a, e.hover, "desktop"]
  ]);
}
const Wm = x({
  name: nP,
  components: {
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  directives: { Ripple: rn, Hover: Tn },
  props: jm,
  setup(e) {
    const n = k(null), o = k(!1), { bindForm: t, form: r } = jn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Yn(), { hovering: u, handleHovering: c } = Jn(), d = I(() => e.modelValue === e.activeValue), f = I(() => {
      const { size: O, color: A, closeColor: T, loadingColor: E, variant: B } = e;
      return {
        handle: {
          width: Cn(O),
          height: Cn(O),
          backgroundColor: d.value ? A : T,
          color: E
        },
        ripple: {
          left: d.value ? Cn(O, 0.5) : `-${Cn(O, B ? 1 / 3 : 0.5)}`,
          color: d.value ? A : T || "currentColor",
          width: Cn(O, 2),
          height: Cn(O, 2)
        },
        track: {
          width: Cn(O, B ? 13 / 6 : 1.9),
          height: Cn(O, B ? 4 / 3 : 0.72),
          borderRadius: Cn(O, 2 / 3),
          filter: d.value || a != null && a.value ? void 0 : `brightness(${B ? 1 : 0.6})`,
          backgroundColor: d.value ? A : T,
          borderWidth: B && !d.value ? Cn(O, 1 / 12) : void 0
        },
        switch: {
          width: Cn(O, B ? 13 / 6 : 2),
          height: Cn(O, B ? 4 / 3 : 1.2)
        }
      };
    }), v = I(() => Cn(e.size, 0.8));
    P(t, {
      reset: z,
      validate: $,
      resetValidation: s
    }), Ke(() => window, "keydown", m), Ke(() => window, "keyup", y);
    function m(O) {
      o.value && ((O.key === " " || O.key === "Enter") && Fe(O), O.key === "Enter" && n.value.click());
    }
    function y(O) {
      !o.value || O.key !== " " || (Fe(O), n.value.click());
    }
    function $() {
      return l(e.rules, e.modelValue);
    }
    function w(O) {
      qe(() => {
        const { validateTrigger: A, rules: T, modelValue: E } = e;
        i(A, O, T, E);
      });
    }
    function g(O) {
      const {
        onClick: A,
        onChange: T,
        disabled: E,
        loading: B,
        readonly: N,
        activeValue: H,
        inactiveValue: Y,
        lazyChange: M,
        "onUpdate:modelValue": q,
        onBeforeChange: W
      } = e;
      if (E || r != null && r.disabled.value || (P(A, O), B || N || r != null && r.readonly.value))
        return;
      const ue = d.value ? Y : H;
      M ? P(W, ue, (Q) => {
        P(q, Q), w("onLazyChange");
      }) : (P(T, ue), P(q, ue), w("onChange"));
    }
    function C(O) {
      e.disabled || r != null && r.disabled.value || c(O);
    }
    function z() {
      P(e["onUpdate:modelValue"], e.inactiveValue), s();
    }
    return {
      isActive: d,
      switchRef: n,
      hovering: u,
      isFocusing: o,
      radius: v,
      styleComputed: f,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
      n: oP,
      classes: tP,
      formatElevation: pn,
      multiplySizeUnit: Cn,
      switchActive: g,
      hover: C
    };
  }
});
Wm.render = uP;
var mi = Wm;
oe(mi);
le(mi, jm);
const PT = mi;
var Xl = mi;
const Km = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: L()
}, qm = Symbol("TABS_BIND_TAB_KEY");
function cP() {
  const { childProviders: e, bindChildren: n, length: o } = yn(qm);
  return {
    length: o,
    tabList: e,
    bindTabList: n
  };
}
function dP() {
  const { parentProvider: e, bindParent: n, index: o } = bn(qm);
  return n || Vn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: o,
    tabs: e,
    bindTabs: n
  };
}
const { name: fP, n: mr, classes: pP } = ee("tab");
function vP(e, n) {
  const o = We("ripple");
  return Ne((h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
      ref: "tabEl",
      style: K({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
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
const Gm = x({
  name: fP,
  directives: { Ripple: rn },
  props: Km,
  setup(e) {
    const n = k(null), o = I(() => n.value), t = I(() => e.name), r = I(() => e.disabled), { index: a, tabs: i, bindTabs: l } = dP(), { onTabClick: s, active: u, activeColor: c, inactiveColor: d, disabledColor: f, itemDirection: v, resize: b } = i, m = {
      name: t,
      index: a,
      disabled: r,
      element: o
    };
    l(m), ce(() => [e.name, e.disabled], b);
    function y() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function $() {
      return e.disabled ? f.value : y() ? c.value : d.value;
    }
    function w() {
      return e.disabled ? mr("$-tab--disabled") : y() ? mr("$-tab--active") : mr("$-tab--inactive");
    }
    function g(C) {
      const { disabled: z, name: O, onClick: A } = e;
      z || (P(A, O ?? a.value, C), s(m));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: c,
      inactiveColor: d,
      itemDirection: v,
      n: mr,
      classes: pP,
      computeColorStyle: $,
      computeColorClass: w,
      handleClick: g
    };
  }
});
Gm.render = vP;
var hi = Gm;
oe(hi);
le(hi, Km);
const zT = hi;
var Zl = hi;
const Xm = {
  name: [String, Number]
}, { name: mP, n: hP, classes: gP } = ee("tab-item");
function bP(e, n) {
  const o = _("var-swipe-item");
  return h(), Pe(o, {
    class: p(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: fe(() => [
      V(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
const Zm = x({
  name: mP,
  components: { VarSwipeItem: Rt },
  props: Xm,
  setup(e) {
    const n = k(!1), o = I(() => e.name), { index: t, bindTabsItems: r } = cS(), { bindLists: a } = dS(), i = {
      index: t,
      name: o,
      current: I(() => n.value),
      setCurrent: l
    };
    r(i), a(i);
    function l(s) {
      n.value = s;
    }
    return {
      current: n,
      n: hP,
      classes: gP
    };
  }
});
Zm.render = bP;
var gi = Zm;
oe(gi);
le(gi, Xm);
const OT = gi;
var Jl = gi;
const Jm = {
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
}, { name: yP, n: kP, classes: $P } = ee("table");
function wP(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [
      D(
        "div",
        {
          class: p(e.n("main")),
          style: K({ height: e.toSizeUnit(e.scrollerHeight) })
        },
        [
          D(
            "table",
            {
              class: p(e.n("table")),
              style: K({ width: e.toSizeUnit(e.fullWidth) })
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
      e.$slots.footer ? (h(), S(
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
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Qm = x({
  name: yP,
  props: Jm,
  setup: () => ({
    toSizeUnit: Oe,
    n: kP,
    classes: $P,
    formatElevation: pn
  })
});
Qm.render = wP;
var bi = Qm;
oe(bi);
le(bi, Jm);
const TT = bi;
var Ql = bi;
const _m = {
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
  stickyCssMode: Me(Pt, "cssMode"),
  stickyZIndex: Me(Pt, "zIndex"),
  offsetTop: Me(Pt, "offsetTop"),
  onClick: L(),
  onChange: L(),
  "onUpdate:active": L()
};
var ld = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: CP, n: SP, classes: PP } = ee("tabs");
function zP(e, n) {
  return h(), Pe(vt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: fe(() => [
      D(
        "div",
        je({
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
          D(
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
              D(
                "div",
                {
                  class: p(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
                  style: K({
                    width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                    height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                    transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
                  })
                },
                [
                  D(
                    "div",
                    {
                      class: p(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
                      style: K({ background: e.indicatorColor || e.activeColor })
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
const xm = x({
  name: CP,
  components: { VarSticky: ct },
  inheritAttrs: !1,
  props: _m,
  setup(e) {
    const n = k("0px"), o = k("0px"), t = k("0px"), r = k("0px"), a = k(!1), i = k(null), l = I(() => e.active), s = I(() => e.activeColor), u = I(() => e.inactiveColor), c = I(() => e.disabledColor), d = I(() => e.itemDirection), f = k(null), v = I(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: b, bindTabList: m, length: y } = cP();
    m({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: c,
      itemDirection: d,
      resize: E,
      onTabClick: w
    }), ce(
      () => y.value,
      () => ld(this, null, function* () {
        yield $n(), E();
      })
    ), ce(() => [e.active, e.scrollable], E), Eo(E), ro(E);
    function w(N) {
      var H;
      const Y = (H = N.name.value) != null ? H : N.index.value, { active: M, onChange: q, onClick: W } = e;
      P(e["onUpdate:active"], Y), P(W, Y), Y !== M && P(q, Y);
    }
    function g() {
      return b.find(({ name: N }) => e.active === N.value);
    }
    function C(N) {
      return b.find(({ index: H }) => (N ?? e.active) === H.value);
    }
    function z() {
      if (y.value === 0)
        return;
      const { active: N } = e;
      if (On(N)) {
        const H = Mn(N, 0, y.value - 1);
        return P(e["onUpdate:active"], H), C(H);
      }
    }
    function O() {
      a.value = e.scrollable === "always" || b.length >= 5;
    }
    function A({ element: N }) {
      const H = N.value;
      H && (e.layoutDirection === "horizontal" ? (n.value = `${H.offsetWidth}px`, t.value = `${H.offsetLeft}px`) : (o.value = `${H.offsetHeight}px`, r.value = `${H.offsetTop}px`));
    }
    function T({ element: N }) {
      if (!a.value)
        return;
      const H = i.value, Y = N.value;
      if (e.layoutDirection === "horizontal") {
        const M = Y.offsetLeft + Y.offsetWidth / 2 - H.offsetWidth / 2;
        It(H, {
          left: M,
          animation: Fi
        });
      } else {
        const M = Y.offsetTop + Y.offsetHeight / 2 - H.offsetHeight / 2;
        It(H, {
          top: M,
          animation: Fi
        });
      }
    }
    function E() {
      const N = g() || C() || z();
      !N || N.disabled.value || (O(), A(N), T(N));
    }
    function B() {
      return ld(this, null, function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
    }
    return {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: o,
      indicatorX: t,
      indicatorY: r,
      indicatorPosition: v,
      localScrollable: a,
      scrollerEl: i,
      Transition: _e,
      toSizeUnit: Oe,
      n: SP,
      classes: PP,
      resize: E,
      resizeSticky: B,
      formatElevation: pn
    };
  }
});
xm.render = zP;
var yi = xm;
oe(yi);
le(yi, _m);
const ET = yi;
var _l = yi;
const eh = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: Boolean,
  "onUpdate:active": L()
};
var OP = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: TP, n: EP } = ee("tabs-items");
function BP(e, n) {
  const o = _("var-swipe");
  return h(), Pe(o, {
    class: p(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: fe(() => [
      V(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
const nh = x({
  name: TP,
  components: { VarSwipe: Lt },
  props: eh,
  setup(e) {
    const n = k(null), { tabItemList: o, bindTabItem: t, length: r } = uS();
    t({}), ce(() => e.active, s), ce(
      () => r.value,
      () => OP(this, null, function* () {
        yield $n(), s(e.active);
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
      v && (o.forEach(({ setCurrent: b }) => b(!1)), v.setCurrent(!0), (f = n.value) == null || f.to(v.index.value));
    }
    function u(d) {
      var f;
      const v = o.find(({ index: m }) => m.value === d), b = (f = v.name.value) != null ? f : v.index.value;
      P(e["onUpdate:active"], b);
    }
    function c() {
      return n.value;
    }
    return {
      swipe: n,
      n: EP,
      handleSwipeChange: u,
      getSwipe: c
    };
  }
});
nh.render = BP;
var ki = nh;
oe(ki);
le(ki, eh);
const BT = ki;
var xl = ki, IP = {
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
}, DP = {
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
}, MP = {
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
}, NP = {
  "--card-title-color": "#ffffff",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa",
  "--card-padding": "0 0 15px 0",
  "--card-background": "var(--color-surface-container-highest)",
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
}, AP = {
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
}, VP = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, LP = {
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
}, RP = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, FP = {
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
}, UP = {
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
}, HP = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, YP = {
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
}, jP = {
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
}, WP = {
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
}, KP = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, qP = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, GP = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, XP = {
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
}, ZP = {
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
}, JP = {
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
}, QP = {
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
}, _P = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, xP = {
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
}, ez = {
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
}, nz = {
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
}, oz = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, tz = {
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
}, rz = {
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
}, az = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
}, iz = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, lz = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, sz = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, uz = {
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
}, cz = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, dz = {
  "--watermark-content-color": "#ffffff"
}, fz = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, pz = {
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
}, vz = {
  "--avatar-group-offset": "-10px"
}, mz = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, hz = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, gz = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, bz = {
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
}, yz = {
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
}, kz = {
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
}, $z = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, wz = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, Cz = {
  "--icon-size": "20px"
}, Sz = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, Pz = {
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
}, zz = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, Oz = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, Tz = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, Ez = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, Bz = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, Iz = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "4px"
}, Dz = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, Mz = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, Nz = {
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
}, Az = {
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
}, Vz = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, Lz = {
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
}, Rz = {
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
}, Fz = {
  "--select-scroller-background": "#272727",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-scroller-border-radius": "2px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, Uz = Object.defineProperty, sd = Object.getOwnPropertySymbols, Hz = Object.prototype.hasOwnProperty, Yz = Object.prototype.propertyIsEnumerable, ud = (e, n, o) => n in e ? Uz(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ge = (e, n) => {
  for (var o in n || (n = {}))
    Hz.call(n, o) && ud(e, o, n[o]);
  if (sd)
    for (var o of sd(n))
      Yz.call(n, o) && ud(e, o, n[o]);
  return e;
}, jz = ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge({
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
}, MP), AP), NP), ez), FP), ZP), oz), _P), KP), UP), IP), LP), DP), nz), RP), qP), QP), JP), jP), xP), YP), GP), VP), HP), WP), tz), rz), az), XP), iz), lz), sz), uz), cz), dz), fz), pz), vz), mz), hz), gz), bz), yz), kz), $z), wz), Cz), Sz), Pz), zz), Oz), Tz), Ez), Bz), Iz), Dz), Mz), Nz), Az), Vz), Lz), Rz), Fz), Wz = {
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
}, Kz = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, qz = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, Gz = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, Xz = {
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
}, Zz = {
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
}, Jz = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, Qz = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, _z = {
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
}, xz = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-border-radius": "12px"
}, eO = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, nO = {
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
}, oO = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, tO = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, rO = {
  "--card-border-radius": "12px",
  "--card-background": "var(--color-surface-container-low)",
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
}, aO = {
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
}, iO = {
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
}, lO = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, sO = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, uO = {
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
}, cO = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, dO = {
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
}, fO = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, pO = {
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
}, vO = {
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
}, mO = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, hO = {
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
}, gO = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, bO = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, yO = {
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
}, kO = {
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
}, $O = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, wO = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, CO = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, SO = {
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
}, PO = {
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
}, zO = {
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
}, OO = {
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
}, TO = {
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
}, EO = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, BO = {
  "--avatar-group-offset": "-10px"
}, IO = {
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
}, DO = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, MO = {
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
}, NO = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, AO = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, VO = {
  "--icon-size": "20px"
}, LO = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, RO = {
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
}, FO = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, UO = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, HO = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, YO = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, jO = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, WO = {
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
}, KO = {
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
}, qO = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, GO = {
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
}, XO = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, ZO = {
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
}, JO = {
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
}, QO = {
  "--watermark-content-color": "#808080"
}, _O = {
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
}, xO = Object.defineProperty, cd = Object.getOwnPropertySymbols, e3 = Object.prototype.hasOwnProperty, n3 = Object.prototype.propertyIsEnumerable, dd = (e, n, o) => n in e ? xO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, be = (e, n) => {
  for (var o in n || (n = {}))
    e3.call(n, o) && dd(e, o, n[o]);
  if (cd)
    for (var o of cd(n))
      n3.call(n, o) && dd(e, o, n[o]);
  return e;
}, o3 = be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be({
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
}, Wz), Kz), qz), Gz), Xz), Zz), Jz), Qz), _z), xz), eO), nO), oO), tO), rO), aO), iO), lO), sO), uO), cO), dO), fO), pO), vO), mO), hO), gO), bO), yO), kO), $O), wO), CO), SO), PO), zO), OO), TO), EO), BO), IO), DO), MO), NO), AO), VO), LO), RO), FO), UO), HO), YO), jO), WO), KO), qO), GO), XO), ZO), JO), QO), _O), t3 = {
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
}, r3 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, a3 = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, i3 = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, l3 = {
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
}, s3 = {
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
}, u3 = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, c3 = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, d3 = {
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
}, f3 = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "12px"
}, p3 = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, v3 = {
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
}, m3 = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, h3 = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, g3 = {
  "--card-border-radius": "12px",
  "--card-background": "var(--color-surface-container-highest)",
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
}, b3 = {
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
}, y3 = {
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
}, k3 = {
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
}, $3 = {
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
}, w3 = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, C3 = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, S3 = {
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
}, P3 = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, z3 = {
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
}, O3 = {
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
}, T3 = {
  "--watermark-content-color": "#ffffff"
}, E3 = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, B3 = {
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
}, I3 = {
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
}, D3 = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, M3 = {
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
}, N3 = {
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
}, A3 = {
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
}, V3 = {
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
}, L3 = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, R3 = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, F3 = {
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
}, U3 = {
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
}, H3 = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, Y3 = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, j3 = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, W3 = {
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
}, K3 = {
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
}, q3 = {
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
}, G3 = {
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
}, X3 = {
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
}, Z3 = {
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
}, J3 = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, Q3 = {
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
}, _3 = {
  "--avatar-group-offset": "-10px"
}, x3 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, e8 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, n8 = {
  "--icon-size": "20px"
}, o8 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, t8 = {
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
}, r8 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, a8 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, i8 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, l8 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, s8 = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, u8 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, c8 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, d8 = {
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
}, f8 = Object.defineProperty, fd = Object.getOwnPropertySymbols, p8 = Object.prototype.hasOwnProperty, v8 = Object.prototype.propertyIsEnumerable, pd = (e, n, o) => n in e ? f8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ye = (e, n) => {
  for (var o in n || (n = {}))
    p8.call(n, o) && pd(e, o, n[o]);
  if (fd)
    for (var o of fd(n))
      v8.call(n, o) && pd(e, o, n[o]);
  return e;
}, m8 = ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye({
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
}, t3), r3), a3), i3), l3), s3), u3), c3), d3), f3), p3), v3), m3), h3), g3), b3), y3), k3), $3), w3), C3), S3), P3), z3), O3), T3), E3), B3), I3), D3), M3), N3), A3), V3), L3), R3), F3), U3), H3), Y3), j3), W3), K3), q3), G3), X3), Z3), J3), Q3), _3), x3), e8), n8), o8), t8), r8), a8), i8), l8), s8), u8), c8), d8);
function h8(e, n = {}) {
  const { viewportWidth: o = 375, viewportUnit: t = "vmin", unitPrecision: r = 6 } = n;
  return Object.entries(e).reduce((a, [i, l]) => (a[i] = l.includes("px") ? l.replace(
    /(\d+(\.\d+)?)px/g,
    (s, u) => `${Number((u / o * 100).toFixed(r))}${t}`
  ) : l, a), {});
}
const g8 = { dark: jz, md3Light: o3, md3Dark: m8, toViewport: h8 }, IT = null;
var es = g8;
const Fn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Sn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], vd = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], oh = {
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
  "onUpdate:modelValue": L(),
  onChange: L()
}, th = (e, n) => e === "24hr" || n === "am", Rs = (e, n, o) => {
  const t = Fn.findIndex((a) => R(a) === R(o)), r = th(e, n) ? o : Sn[t];
  return {
    hourStr: r,
    hourNum: R(r)
  };
}, zn = (e) => {
  const [n, o, t] = e.split(":");
  return {
    hour: R(n),
    minute: R(o),
    second: R(t)
  };
}, rh = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: c, hourNum: d } = Rs(r, a, i);
  let f = !1, v = !1;
  if (u.includes(c))
    return !0;
  if (l && !s) {
    const { hour: b, minute: m } = zn(l);
    f = b === d && t > m;
  }
  if (!l && s) {
    const { hour: b, minute: m } = zn(s);
    f = b === d && t < m;
  }
  if (l && s) {
    const { hour: b, minute: m } = zn(l), { hour: y, minute: $ } = zn(s);
    f = y === d && t < $ || b === d && t > m;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (o = e.allowedTime) == null ? void 0 : o.minutes(t)), f || v;
}, ah = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: c } = e, { hourStr: d, hourNum: f } = Rs(r, a, i);
  let v = !1, b = !1;
  if (c.includes(d))
    return !0;
  if (s && !u) {
    const { hour: m, minute: y, second: $ } = zn(s);
    v = m === f && y < l || y === l && t > $;
  }
  if (!s && u) {
    const { hour: m, minute: y, second: $ } = zn(u);
    v = m === f && y > l || y === l && t > $;
  }
  if (s && u) {
    const { hour: m, minute: y, second: $ } = zn(s), { hour: w, minute: g, second: C } = zn(u);
    v = m === f && y < l || w === f && g > l || m === f && y === l && t > $ || w === f && g === l && t < C;
  }
  return (n = e.allowedTime) != null && n.seconds && (b = (o = e.allowedTime) == null ? void 0 : o.seconds(t)), v || b;
}, { n: b8, classes: y8 } = ee("time-picker");
function k8(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n("clock"))
    },
    [
      D(
        "div",
        {
          class: p(e.n("clock-hand")),
          style: K(e.handStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      (h(!0), S(
        Ve,
        null,
        Ze(e.timeScales, (o, t) => (h(), S(
          "div",
          {
            class: p(
              e.classes(
                e.n("clock-item"),
                [e.isActive(t, !1), e.n("clock-item--active")],
                [e.isDisable(o), e.n("clock-item--disable")]
              )
            ),
            key: o,
            style: K(e.getStyle(t, o, !1))
          },
          re(o),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      )),
      e.format === "24hr" && e.type === "hour" ? (h(), S(
        "div",
        {
          key: 0,
          class: p(e.n("clock-inner")),
          ref: "inner"
        },
        [
          (h(!0), S(
            Ve,
            null,
            Ze(e.hours24, (o, t) => (h(), S(
              "div",
              {
                class: p(
                  e.classes(
                    e.n("clock-item"),
                    [e.isActive(t, !0), e.n("clock-item--active")],
                    [e.isDisable(o), e.n("clock-item--disable")]
                  )
                ),
                key: o,
                style: K(e.getStyle(t, o, !0))
              },
              re(o),
              7
              /* TEXT, CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const ih = x({
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
    const o = k(null), t = k([]), r = k([]), a = I(() => ({
      transform: `rotate(${R(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = I(() => {
      if (e.rad === void 0)
        return;
      const m = e.rad / 30;
      return m >= 0 ? m : m + 12;
    }), l = I(() => e.type === "hour" ? Fn : vd), s = (m, y) => {
      m = m ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const $ = e.type === "minute" ? rh : ah, w = {
        time: R(m),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: R(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return y && e.type === "minute" && Reflect.deleteProperty(w, "minute"), $(w);
    }, u = () => {
      if (i.value === void 0)
        return e.color;
      const m = e.isInner ? Sn[i.value] : l.value[i.value];
      return l.value === vd ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : d(m) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, c = (m, y) => y ? i.value === m && e.isInner : i.value === m && (!e.isInner || e.type !== "hour"), d = (m) => {
      if (e.type === "hour") {
        if (th(e.format, e.ampm))
          return t.value.includes(m);
        const y = Fn.findIndex(($) => $ === m);
        return r.value.includes(y);
      }
      return s(m, !0);
    }, f = (m, y, $) => {
      const w = 2 * Math.PI / 12 * m - Math.PI / 2, g = 50 * (1 + Math.cos(w)), C = 50 * (1 + Math.sin(w)), z = () => c(m, $) ? d(y) ? {
        backgroundColor: "var(--time-picker-clock-item-disable-background)",
        color: "var(--time-picker-clock-item-disable-color)"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: O, color: A } = z();
      return {
        left: `${g}%`,
        top: `${C}%`,
        backgroundColor: O,
        color: A
      };
    }, v = () => {
      const { width: m, height: y } = sn(o.value);
      return {
        width: m,
        height: y
      };
    }, b = () => {
      if (i.value === void 0)
        return;
      const m = e.ampm === "am" ? Fn : Sn;
      return Fo(m[i.value], 2, "0");
    };
    return ce([i, () => e.isInner], ([m, y], [$, w]) => {
      if (m === $ && y === w || e.type !== "hour" || i.value === void 0)
        return;
      const C = y ? Sn[i.value] : b(), z = e.useSeconds ? `:${e.time.second}` : "", O = `${C}:${e.time.minute}${z}`;
      e.preventNextUpdate || n("update", O), n("change-prevent-update");
    }), ce(
      () => e.rad,
      (m, y) => {
        if (e.type === "hour" || m === void 0 || y === void 0)
          return;
        const $ = m / 6 >= 0 ? m / 6 : m / 6 + 60, w = y / 6 >= 0 ? y / 6 : y / 6 + 60;
        if ($ === w)
          return;
        let g;
        const { hourStr: C } = Rs(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const z = ie().minute($).format("mm"), O = e.useSeconds ? `:${e.time.second}` : "";
          g = `${C}:${z}${O}`;
        }
        if (e.type === "second") {
          const z = ie().second($).format("ss"), O = e.useSeconds ? `:${z}` : "";
          g = `${C}:${e.time.minute}${O}`;
        }
        n("update", g);
      }
    ), ce(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([m, y, $]) => {
        if (t.value = [], m && !y) {
          const { hour: w } = zn(m), g = Fn.filter((z) => R(z) > w), C = Sn.filter((z) => R(z) > w);
          t.value = [...g, ...C];
        }
        if (!m && y) {
          const { hour: w } = zn(y), g = Fn.filter((z) => R(z) < w), C = Sn.filter((z) => R(z) < w);
          t.value = [...g, ...C];
        }
        if (m && y) {
          const { hour: w } = zn(m), { hour: g } = zn(y), C = Fn.filter((O) => R(O) < g || R(O) > w), z = Sn.filter((O) => R(O) < g || R(O) > w);
          t.value = [...C, ...z];
        }
        if ($ != null && $.hours) {
          const { hours: w } = $, g = Fn.filter((z) => !w(R(z))), C = Sn.filter((z) => !w(R(z)));
          t.value = [.../* @__PURE__ */ new Set([...t.value, ...g, ...C])];
        }
        r.value = t.value.map((w) => Sn.findIndex((g) => w === g)).filter((w) => w >= 0);
      },
      { immediate: !0, deep: !0 }
    ), {
      n: b8,
      classes: y8,
      hours24: Sn,
      timeScales: l,
      inner: o,
      handStyle: a,
      disableHour: t,
      isActive: c,
      isDisable: d,
      getSize: v,
      getStyle: f,
      activeItemIndex: i
    };
  }
});
ih.render = k8;
var $8 = ih;
const { name: w8, n: C8, classes: S8 } = ee("time-picker");
function P8(e, n) {
  var o;
  const t = _("clock");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [
      D(
        "div",
        {
          class: p(e.n("title")),
          style: K({ background: e.titleColor || e.color })
        },
        [
          D(
            "div",
            {
              class: p(e.n("title-hint"))
            },
            re((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("timePickerHint")),
            3
            /* TEXT, CLASS */
          ),
          D(
            "div",
            {
              class: p(e.n("title-time-container"))
            },
            [
              D(
                "div",
                {
                  class: p(e.n("title-time"))
                },
                [
                  D(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
                      onClick: n[0] || (n[0] = (r) => e.checkPanel("hour"))
                    },
                    re(e.time.hour),
                    3
                    /* TEXT, CLASS */
                  ),
                  D(
                    "span",
                    {
                      class: p(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  ),
                  D(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
                      onClick: n[1] || (n[1] = (r) => e.checkPanel("minute"))
                    },
                    re(e.time.minute),
                    3
                    /* TEXT, CLASS */
                  ),
                  e.useSeconds ? (h(), S(
                    "span",
                    {
                      key: 0,
                      class: p(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  )) : X("v-if", !0),
                  e.useSeconds ? (h(), S(
                    "div",
                    {
                      key: 1,
                      class: p(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
                      onClick: n[2] || (n[2] = (r) => e.checkPanel("second"))
                    },
                    re(e.time.second),
                    3
                    /* TEXT, CLASS */
                  )) : X("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              e.format === "ampm" ? (h(), S(
                "div",
                {
                  key: 0,
                  class: p(e.n("title-ampm"))
                },
                [
                  D(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
                      onClick: n[3] || (n[3] = (r) => e.checkAmpm("am"))
                    },
                    " AM ",
                    2
                    /* CLASS */
                  ),
                  D(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
                      onClick: n[4] || (n[4] = (r) => e.checkAmpm("pm"))
                    },
                    " PM ",
                    2
                    /* CLASS */
                  )
                ],
                2
                /* CLASS */
              )) : X("v-if", !0)
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      D(
        "div",
        {
          class: p(e.n("body"))
        },
        [
          D(
            "div",
            {
              class: p(e.n("clock-container")),
              onTouchstart: n[5] || (n[5] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchmove: n[6] || (n[6] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchend: n[7] || (n[7] = (...r) => e.end && e.end(...r)),
              ref: "container"
            },
            [
              G(_e, {
                name: `${e.n()}-panel-fade`
              }, {
                default: fe(() => [
                  (h(), Pe(t, {
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
      e.$slots.actions ? (h(), S(
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
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const lh = x({
  name: w8,
  components: { Clock: $8 },
  props: oh,
  setup(e) {
    const n = k(null), o = k(null), t = k(null), r = k(!1), a = k(!1), i = k(!1), l = k(!1), s = k(!1), u = k(!1), c = k(!1), d = k(0), f = k(0), v = k(), b = k("hour"), m = k("am"), y = k({
      hour: "00",
      minute: "00",
      second: "00"
    }), $ = Qe({
      x: 0,
      y: 0
    }), w = Qe({
      x: [],
      y: []
    }), g = I(() => b.value === "hour" ? v.value : b.value === "minute" ? d.value : f.value), { t: C } = ao();
    ce(
      () => e.modelValue,
      (se) => {
        if (se) {
          const { hour: U, minute: J, second: te } = zn(se), he = ie().hour(U).format("hh"), F = ie().hour(U).format("HH"), j = ie().minute(J).format("mm"), de = ie().second(te).format("ss");
          v.value = (he === "12" ? 0 : R(he)) * 30, d.value = R(j) * 6, f.value = R(de) * 6, y.value = N(se), e.format !== "24hr" && (m.value = Fo(`${U}`, 2, "0") === F && Sn.includes(F) ? "pm" : "am"), r.value = e.format === "24hr" && Sn.includes(F);
        }
      },
      { immediate: !0 }
    );
    function z(se) {
      P(e["onUpdate:modelValue"], se), P(e.onChange, se);
    }
    function O(se) {
      return se * 57.29577951308232;
    }
    function A(se) {
      l.value = !1, c.value = !1, b.value = se;
    }
    function T(se) {
      const { disableHour: U } = t.value, J = Fn.findIndex((F) => R(F) === R(y.value.hour)), te = se === "am" ? Fn : Sn;
      return [...te.slice(J), ...te.slice(0, J)].find((F, j) => (a.value = j !== 0, !U.includes(F)));
    }
    function E(se) {
      if (e.readonly)
        return;
      m.value = se;
      const U = T(se);
      if (!U)
        return;
      const J = e.useSeconds ? `:${y.value.second}` : "", te = `${Fo(U, 2, "0")}:${y.value.minute}${J}`;
      z(te);
    }
    function B(se, U) {
      const J = se >= w.x[0] && se <= w.x[1], te = U >= w.y[0] && U <= w.y[1];
      return J && te;
    }
    function N(se) {
      const U = e.format === "24hr" ? "HH" : "hh", { hour: J, minute: te, second: he } = zn(se);
      return {
        hour: ie().hour(J).format(U),
        minute: ie().minute(te).format("mm"),
        second: ie().second(he).format("ss")
      };
    }
    function H(se) {
      const U = se / 30;
      return U >= 0 ? U : U + 12;
    }
    function Y() {
      const { width: se, height: U } = t.value.getSize(), J = $.x - se / 2 - 8, te = $.x + se / 2 + 8, he = $.y - U / 2 - 8, F = $.y + U / 2 + 8;
      return {
        rangeXMin: J,
        rangeXMax: te,
        rangeYMin: he,
        rangeYMax: F
      };
    }
    function M(se, U, J) {
      const { disableHour: te } = t.value;
      i.value = B(se, U);
      const he = Math.round(J / 30) * 30 + 90, F = H(he), j = r.value ? Fn[F] : Sn[F];
      if (te.includes(j) || (r.value = e.format === "24hr" ? B(se, U) : !1), r.value !== i.value)
        return;
      const de = r.value || m.value === "pm" ? Sn[F] : Fn[F];
      u.value = te.includes(de), !u.value && (v.value = he, l.value = !0);
    }
    function q(se) {
      const { disableHour: U } = t.value, J = Math.round(se / 6) * 6 + 90, he = {
        time: J / 6 >= 0 ? J / 6 : J / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: U,
        allowedTime: e.allowedTime
      };
      c.value = rh(he), !c.value && (d.value = J, s.value = !0);
    }
    function W(se) {
      const { disableHour: U } = t.value, J = Math.round(se / 6) * 6 + 90, he = {
        time: J / 6 >= 0 ? J / 6 : J / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        minute: R(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: U,
        allowedTime: e.allowedTime
      };
      ah(he) || (f.value = J);
    }
    function ue() {
      const { left: se, top: U, width: J, height: te } = sn(n.value);
      if ($.x = se + J / 2, $.y = U + te / 2, b.value === "hour" && e.format === "24hr") {
        const { rangeXMin: he, rangeXMax: F, rangeYMin: j, rangeYMax: de } = Y();
        w.x = [he, F], w.y = [j, de];
      }
    }
    function Q(se) {
      if (Fe(se), e.readonly)
        return;
      ue();
      const { clientX: U, clientY: J } = se.touches[0], te = U - $.x, he = J - $.y, F = Math.round(O(Math.atan2(he, te)));
      b.value === "hour" ? M(U, J, F) : b.value === "minute" ? q(F) : W(F);
    }
    function pe() {
      if (!e.readonly) {
        if (b.value === "hour" && l.value) {
          b.value = "minute";
          return;
        }
        b.value === "minute" && e.useSeconds && s.value && (b.value = "second");
      }
    }
    function ke() {
      a.value = !1;
    }
    return {
      getRad: g,
      time: y,
      container: n,
      inner: t,
      picker: o,
      isInner: r,
      type: b,
      ampm: m,
      isPreventNextUpdate: a,
      n: C8,
      classes: S8,
      t: an,
      pt: C,
      moveHand: Q,
      checkPanel: A,
      checkAmpm: E,
      end: pe,
      update: z,
      changePreventUpdate: ke,
      formatElevation: pn
    };
  }
});
lh.render = P8;
var $i = lh;
oe($i);
le($i, oh);
const DT = $i;
var ns = $i;
const sh = {
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
  rules: Array,
  hideList: Boolean,
  preventDefaultPreview: Boolean,
  onClickAction: L(),
  onBeforeFilter: L(),
  onBeforeRead: L(),
  onAfterRead: L(),
  onBeforeRemove: L(),
  onRemove: L(),
  onOversize: L(),
  onPreview: L(),
  "onUpdate:modelValue": L()
};
var hr = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: z8, n: O8, classes: T8 } = ee("uploader");
let E8 = 0;
const B8 = ["onClick"], I8 = ["onClick"], D8 = ["src", "alt"], M8 = ["tabindex"], N8 = ["multiple", "accept", "capture", "disabled"], A8 = ["src"];
function V8(e, n) {
  const o = _("var-icon"), t = _("var-hover-overlay"), r = _("var-form-details"), a = _("var-popup"), i = We("ripple"), l = We("hover");
  return h(), S(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      D(
        "div",
        {
          class: p(e.n("file-list"))
        },
        [
          (h(!0), S(
            Ve,
            null,
            Ze(e.files, (s) => Ne((h(), S("div", {
              class: p(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
              key: s.id,
              onClick: (u) => e.preview(s)
            }, [
              D(
                "div",
                {
                  class: p(e.n("file-name"))
                },
                re(s.name || s.url),
                3
                /* TEXT, CLASS */
              ),
              e.removable ? (h(), S("div", {
                key: 0,
                class: p(e.n("file-close")),
                onClick: An((u) => e.handleRemove(s), ["stop"])
              }, [
                G(o, {
                  class: p(e.n("file-close-icon")),
                  "var-uploader-cover": "",
                  name: "delete"
                }, null, 8, ["class"])
              ], 10, I8)) : X("v-if", !0),
              s.cover ? (h(), S("img", {
                key: 1,
                role: "img",
                class: p(e.n("file-cover")),
                style: K({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, D8)) : X("v-if", !0),
              D(
                "div",
                {
                  class: p(e.n("file-indicator"))
                },
                [
                  D(
                    "div",
                    {
                      class: p(
                        e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])
                      ),
                      style: K({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                2
                /* CLASS */
              )
            ], 10, B8)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Ne((h(), S("div", {
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
            D("input", {
              ref: "input",
              type: "file",
              class: p(e.n("action-input")),
              multiple: e.multiple,
              accept: e.accept,
              capture: e.capture,
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
              onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s)),
              onClick: n[1] || (n[1] = An(() => {
              }, ["stop"]))
            }, null, 42, N8),
            V(e.$slots, "default", {}, () => [
              G(o, {
                class: p(e.n("action-icon")),
                "var-uploader-cover": "",
                name: "plus"
              }, null, 8, ["class"]),
              G(t, {
                hovering: e.hovering && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly,
                focusing: e.isFocusing && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly
              }, null, 8, ["hovering", "focusing"])
            ])
          ], 42, M8)), [
            [i, {
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default
            }],
            [l, e.handleHovering, "desktop"]
          ]) : X("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      G(r, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, Et({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: fe(() => [
            V(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"]),
      G(a, {
        class: p(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[5] || (n[5] = (s) => e.showPreview = s),
        onClosed: n[6] || (n[6] = (s) => e.currentPreview = null)
      }, {
        default: fe(() => {
          var s, u;
          return [
            e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (h(), S("video", {
              key: 0,
              class: p(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (u = e.currentPreview) == null ? void 0 : u.url
            }, null, 10, A8)) : X("v-if", !0)
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
const uh = x({
  name: z8,
  directives: { Ripple: rn, Hover: Tn },
  components: {
    VarIcon: Je,
    VarPopup: Po,
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  props: sh,
  setup(e) {
    const n = k(!1), o = k(null), t = k(null), r = k(!1), a = k(null), i = I(() => {
      const {
        maxlength: U,
        modelValue: { length: J }
      } = e;
      return On(U) ? `${J} / ${U}` : "";
    }), { form: l, bindForm: s } = jn(), {
      errorMessage: u,
      validateWithTrigger: c,
      validate: d,
      // expose
      resetValidation: f
    } = Yn(), { hovering: v, handleHovering: b } = Jn(), m = I(() => {
      const { modelValue: U, hideList: J } = e;
      return J ? [] : U;
    });
    let y = !1;
    const $ = {
      getSuccess: M,
      getError: q,
      getLoading: W
    };
    P(s, {
      validate: ke,
      resetValidation: f,
      reset: se
    }), Ke(() => window, "keydown", g), Ke(() => window, "keyup", C), ce(
      () => e.modelValue,
      () => {
        !y && pe("onChange"), y = !1;
      },
      { deep: !0 }
    );
    function g(U) {
      n.value && ((U.key === " " || U.key === "Enter") && U.preventDefault(), U.key === "Enter" && o.value.click());
    }
    function C(U) {
      !n.value || U.key !== " " || (U.preventDefault(), o.value.click());
    }
    function z(U) {
      const { disabled: J, previewed: te, preventDefaultPreview: he, onPreview: F } = e;
      if (l != null && l.disabled.value || J || !te || (P(F, Qe(U)), he))
        return;
      const { url: j } = U;
      if (fu(j)) {
        Ft(j);
        return;
      }
      pu(j) && (a.value = U, r.value = !0);
    }
    function O(U) {
      return {
        id: E8++,
        url: "",
        cover: "",
        name: U.name,
        file: U,
        progress: 0
      };
    }
    function A(U) {
      const J = U.target, { files: te } = J;
      return Array.from(te);
    }
    function T(U) {
      return hr(this, null, function* () {
        const J = U.file;
        if (e.resolveType === "default" && J.type.startsWith("image") || e.resolveType === "data-url") {
          const he = yield Lh(J);
          U.cover = he, U.url = he;
        }
        return U;
      });
    }
    function E(U) {
      return U.map(T);
    }
    function B(U) {
      const { onBeforeRead: J } = e;
      return U.map(
        (te) => new Promise((he) => {
          J || he({
            valid: !0,
            varFile: te
          });
          const F = Vo(P(J, Qe(te)));
          Promise.all(F).then((j) => {
            he({
              valid: j.every(Boolean),
              varFile: te
            });
          });
        })
      );
    }
    function N(U) {
      return hr(this, null, function* () {
        const { maxsize: J, maxlength: te, modelValue: he, onOversize: F, onAfterRead: j, onBeforeFilter: de, readonly: Se, disabled: Te } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || Te || Se)
          return;
        const He = ($e) => $e.filter((Ae) => Ae.file.size > R(J) ? (P(F, Qe(Ae)), !1) : !0), xe = ($e) => {
          const Ae = Math.min($e.length, R(te) - he.length);
          return $e.slice(0, Ae);
        }, ve = ($e) => hr(this, null, function* () {
          if (!de)
            return $e;
          const Ae = Vo(de);
          for (const en of Ae)
            $e = yield en($e);
          return $e;
        });
        let Le = A(U).map(O);
        Le = yield ve(Le), Le = J != null ? He(Le) : Le, Le = te != null ? xe(Le) : Le;
        const on = yield Promise.all(E(Le)), me = (yield Promise.all(B(on))).filter(({ valid: $e }) => $e).map(({ varFile: $e }) => $e);
        P(e["onUpdate:modelValue"], [...he, ...me]), U.target.value = "", me.forEach(($e) => P(j, Qe($e)));
      });
    }
    function H(U) {
      return hr(this, null, function* () {
        const { disabled: J, readonly: te, modelValue: he, onBeforeRemove: F, onRemove: j } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || J || te)
          return;
        if (F) {
          const Se = Vo(P(F, Qe(U)));
          if ((yield Promise.all(Se)).some((Te) => !Te))
            return;
        }
        const de = he.filter((Se) => Se !== U);
        P(j, Qe(U)), pe("onRemove"), P(e["onUpdate:modelValue"], de);
      });
    }
    function Y(U) {
      if (!(l != null && l.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          P(e.onClickAction, ue, U);
          return;
        }
        ue();
      }
    }
    function M() {
      return e.modelValue.filter((U) => U.state === "success");
    }
    function q() {
      return e.modelValue.filter((U) => U.state === "error");
    }
    function W() {
      return e.modelValue.filter((U) => U.state === "loading");
    }
    function ue() {
      t.value.click();
    }
    function Q() {
      a.value = null, r.value = !1, Ft.close();
    }
    function pe(U) {
      qe(() => {
        const { validateTrigger: J, rules: te, modelValue: he } = e;
        c(J, U, te, he, $);
      });
    }
    function ke() {
      return d(e.rules, e.modelValue, $);
    }
    function se() {
      y = !0, P(e["onUpdate:modelValue"], []), f();
    }
    return {
      input: t,
      actionRef: o,
      files: m,
      showPreview: r,
      currentPreview: a,
      errorMessage: u,
      maxlengthText: i,
      hovering: v,
      isFocusing: n,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: O8,
      classes: T8,
      formatElevation: pn,
      toNumber: R,
      handleHovering: b,
      isHTMLSupportVideo: pu,
      isHTMLSupportImage: fu,
      preview: z,
      handleChange: N,
      handleRemove: H,
      getSuccess: M,
      getError: q,
      getLoading: W,
      validate: ke,
      resetValidation: f,
      reset: se,
      chooseFile: ue,
      closePreview: Q,
      handleActionClick: Y,
      toSizeUnit: Oe
    };
  }
});
uh.render = V8;
var wi = uh;
oe(wi);
le(wi, sh);
const MT = wi;
var os = wi;
const ch = {
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
var L8 = Object.defineProperty, R8 = Object.defineProperties, F8 = Object.getOwnPropertyDescriptors, md = Object.getOwnPropertySymbols, U8 = Object.prototype.hasOwnProperty, H8 = Object.prototype.propertyIsEnumerable, hd = (e, n, o) => n in e ? L8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Y8 = (e, n) => {
  for (var o in n || (n = {}))
    U8.call(n, o) && hd(e, o, n[o]);
  if (md)
    for (var o of md(n))
      H8.call(n, o) && hd(e, o, n[o]);
  return e;
}, j8 = (e, n) => R8(e, F8(n)), gd = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: W8, n: K8, classes: q8 } = ee("watermark"), G8 = { ref: "svgRef" }, X8 = ["viewBox", "width", "height"], Z8 = ["width", "height"], J8 = ["href", "xlink:href", "x", "y", "width", "height"];
function Q8(e, n) {
  return h(), S(
    "div",
    {
      class: p(e.n())
    },
    [
      V(e.$slots, "default"),
      (h(), Pe(oo, {
        to: "body",
        disabled: !e.fullscreen
      }, [
        D(
          "div",
          {
            ref: "containerRef",
            class: p(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
            style: K({
              backgroundImage: `url(${e.watermarkUrl})`,
              zIndex: e.zIndex
            })
          },
          [
            Ne(D(
              "div",
              G8,
              [
                (h(), S("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  viewBox: `0 0 ${e.width + e.gapX} ${e.height + e.gapY}`,
                  width: `${e.width + e.gapX}`,
                  height: `${e.height + e.gapY}`,
                  style: K({
                    padding: `0 ${e.gapX}px ${e.gapY}px 0`,
                    opacity: e.opacity
                  })
                }, [
                  e.showContent() ? (h(), S("foreignObject", {
                    key: 0,
                    x: "0",
                    y: "0",
                    width: e.width,
                    height: e.height
                  }, [
                    D(
                      "div",
                      {
                        xmlns: "http://www.w3.org/1999/xhtml",
                        style: K({
                          transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
                          transformOrigin: "center"
                        })
                      },
                      [
                        V(e.$slots, "content", {}, () => [
                          D(
                            "span",
                            {
                              style: K(j8(Y8({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
                            },
                            re(e.content),
                            5
                            /* TEXT, STYLE */
                          )
                        ])
                      ],
                      4
                      /* STYLE */
                    )
                  ], 8, Z8)) : X("v-if", !0),
                  !e.$slots.content && e.image ? (h(), S("image", {
                    key: 1,
                    href: e.imageUrl,
                    "xlink:href": e.imageUrl,
                    x: e.offsetX,
                    y: e.offsetY,
                    width: e.width,
                    height: e.height,
                    style: K({
                      transform: `rotate(${e.rotate}deg)`,
                      transformOrigin: "center"
                    })
                  }, null, 12, J8)) : X("v-if", !0)
                ], 12, X8))
              ],
              512
              /* NEED_PATCH */
            ), [
              [Xn, !1]
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
const dh = x({
  name: W8,
  props: ch,
  setup(e, { slots: n }) {
    const o = k(""), t = k(""), r = k(""), a = k(null), i = k(null);
    ce(
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
    ), Yo(d), Wt(c);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return gd(this, null, function* () {
        return new Promise((f) => {
          const v = document.createElement("canvas"), b = v.getContext("2d"), m = new Image();
          m.crossOrigin = "anonymous", m.referrerPolicy = "no-referrer", m.src = e.image, m.onload = () => {
            v.width = m.width, v.height = m.height, b.drawImage(m, 0, 0), f(v.toDataURL());
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
      return gd(this, null, function* () {
        r.value = qo(i.value).color, e.image && (t.value = yield s()), yield qe(), c(), o.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: o,
      imageUrl: t,
      textColor: r,
      n: K8,
      classes: q8,
      showContent: l,
      resize: d
    };
  }
});
dh.render = Q8;
var Ci = dh;
oe(Ci);
le(Ci, ch);
const NT = Ci;
var ts = Ci;
const _8 = "3.3.13";
function x8(e) {
  Li.install && e.use(Li), Ri.install && e.use(Ri), Hi.install && e.use(Hi), Yi.install && e.use(Yi), ji.install && e.use(ji), Er.install && e.use(Er), Wi.install && e.use(Wi), Ki.install && e.use(Ki), qi.install && e.use(qi), Gi.install && e.use(Gi), Pn.install && e.use(Pn), Xi.install && e.use(Xi), Zi.install && e.use(Zi), Ji.install && e.use(Ji), lt.install && e.use(lt), Qi.install && e.use(Qi), Br.install && e.use(Br), _i.install && e.use(_i), xi.install && e.use(xi), el.install && e.use(el), nl.install && e.use(nl), Nn.install && e.use(Nn), al.install && e.use(al), dl.install && e.use(dl), pl.install && e.use(pl), vl.install && e.use(vl), ml.install && e.use(ml), Vr.install && e.use(Vr), bl.install && e.use(bl), yl.install && e.use(yl), Vt.install && e.use(Vt), kl.install && e.use(kl), $l.install && e.use($l), En.install && e.use(En), Tn.install && e.use(Tn), Ln.install && e.use(Ln), Je.install && e.use(Je), wl.install && e.use(wl), Ft.install && e.use(Ft), Cl.install && e.use(Cl), Sl.install && e.use(Sl), Rr.install && e.use(Rr), Dt.install && e.use(Dt), Pl.install && e.use(Pl), zl.install && e.use(zl), it.install && e.use(it), Ol.install && e.use(Ol), Ai.install && e.use(Ai), Tl.install && e.use(Tl), Ut.install && e.use(Ut), Ht.install && e.use(Ht), Fr.install && e.use(Fr), Ur.install && e.use(Ur), El.install && e.use(El), Bl.install && e.use(Bl), Il.install && e.use(Il), Dl.install && e.use(Dl), Po.install && e.use(Po), Ml.install && e.use(Ml), Nl.install && e.use(Nl), Hr.install && e.use(Hr), Al.install && e.use(Al), Vl.install && e.use(Vl), Ll.install && e.use(Ll), rn.install && e.use(rn), Rl.install && e.use(Rl), Fl.install && e.use(Fl), Ul.install && e.use(Ul), Hl.install && e.use(Hl), jl.install && e.use(jl), Wl.install && e.use(Wl), Kl.install && e.use(Kl), ql.install && e.use(ql), ct.install && e.use(ct), Gl.install && e.use(Gl), Lt.install && e.use(Lt), Rt.install && e.use(Rt), Xl.install && e.use(Xl), Zl.install && e.use(Zl), Jl.install && e.use(Jl), Ql.install && e.use(Ql), _l.install && e.use(_l), xl.install && e.use(xl), es.install && e.use(es), ns.install && e.use(ns), Lr.install && e.use(Lr), os.install && e.use(os), ts.install && e.use(ts);
}
const AT = {
  version: _8,
  install: x8,
  ActionSheet: Li,
  AppBar: Ri,
  Avatar: Hi,
  AvatarGroup: Yi,
  BackTop: ji,
  Badge: Er,
  BottomNavigation: Wi,
  BottomNavigationItem: Ki,
  Breadcrumb: qi,
  Breadcrumbs: Gi,
  Button: Pn,
  ButtonGroup: Xi,
  Card: Zi,
  Cell: Ji,
  Checkbox: lt,
  CheckboxGroup: Qi,
  Chip: Br,
  Col: _i,
  Collapse: xi,
  CollapseItem: el,
  CollapseTransition: nl,
  Context: Nn,
  Countdown: al,
  Counter: dl,
  DatePicker: pl,
  Dialog: vl,
  Divider: ml,
  Drag: Vr,
  Ellipsis: bl,
  Fab: yl,
  FieldDecorator: Vt,
  FloatingPanel: kl,
  Form: $l,
  FormDetails: En,
  Hover: Tn,
  HoverOverlay: Ln,
  Icon: Je,
  Image: wl,
  ImagePreview: Ft,
  IndexAnchor: Cl,
  IndexBar: Sl,
  Input: Rr,
  Lazy: Dt,
  Link: Pl,
  List: zl,
  Loading: it,
  LoadingBar: Ol,
  Locale: Ai,
  LocaleProvider: Tl,
  Menu: Ut,
  MenuOption: Ht,
  MenuSelect: Fr,
  Option: Ur,
  Overlay: El,
  Pagination: Bl,
  Paper: Il,
  Picker: Dl,
  Popup: Po,
  Progress: Ml,
  PullRefresh: Nl,
  Radio: Hr,
  RadioGroup: Al,
  Rate: Vl,
  Result: Ll,
  Ripple: rn,
  Row: Rl,
  Select: Fl,
  Skeleton: Ul,
  Slider: Hl,
  Snackbar: jl,
  Space: Wl,
  Step: Kl,
  Steps: ql,
  Sticky: ct,
  StyleProvider: Gl,
  Swipe: Lt,
  SwipeItem: Rt,
  Switch: Xl,
  Tab: Zl,
  TabItem: Jl,
  Table: Ql,
  Tabs: _l,
  TabsItems: xl,
  Themes: es,
  TimePicker: ns,
  Tooltip: Lr,
  Uploader: os,
  Watermark: ts
};
export {
  Li as ActionSheet,
  Ri as AppBar,
  Hi as Avatar,
  Yi as AvatarGroup,
  ji as BackTop,
  Er as Badge,
  Wi as BottomNavigation,
  Ki as BottomNavigationItem,
  qi as Breadcrumb,
  Gi as Breadcrumbs,
  Pn as Button,
  Xi as ButtonGroup,
  Zi as Card,
  Ji as Cell,
  lt as Checkbox,
  Qi as CheckboxGroup,
  Br as Chip,
  _i as Col,
  xi as Collapse,
  el as CollapseItem,
  nl as CollapseTransition,
  Nn as Context,
  al as Countdown,
  dl as Counter,
  pl as DatePicker,
  vl as Dialog,
  ml as Divider,
  Vr as Drag,
  bl as Ellipsis,
  yl as Fab,
  Vt as FieldDecorator,
  kl as FloatingPanel,
  $l as Form,
  En as FormDetails,
  Tn as Hover,
  Ln as HoverOverlay,
  Je as Icon,
  wl as Image,
  Ft as ImagePreview,
  Cl as IndexAnchor,
  Sl as IndexBar,
  Rr as Input,
  Dt as Lazy,
  Pl as Link,
  zl as List,
  it as Loading,
  Ol as LoadingBar,
  Ai as Locale,
  Tl as LocaleProvider,
  Ut as Menu,
  Ht as MenuOption,
  Fr as MenuSelect,
  Ur as Option,
  El as Overlay,
  Ui as PIXEL,
  Bl as Pagination,
  Il as Paper,
  Dl as Picker,
  Po as Popup,
  Ml as Progress,
  Nl as PullRefresh,
  Hr as Radio,
  Al as RadioGroup,
  Vl as Rate,
  Ll as Result,
  rn as Ripple,
  Rl as Row,
  Dm as SNACKBAR_TYPE,
  Fl as Select,
  Ul as Skeleton,
  Hl as Slider,
  jl as Snackbar,
  Wl as Space,
  Kl as Step,
  ql as Steps,
  ct as Sticky,
  Gl as StyleProvider,
  Lt as Swipe,
  Rt as SwipeItem,
  Xl as Switch,
  Zl as Tab,
  Jl as TabItem,
  Ql as Table,
  _l as Tabs,
  xl as TabsItems,
  es as Themes,
  ns as TimePicker,
  Lr as Tooltip,
  os as Uploader,
  ts as Watermark,
  s5 as _ActionSheetComponent,
  u5 as _AppBarComponent,
  d5 as _AvatarComponent,
  f5 as _AvatarGroupComponent,
  m5 as _BackTopComponent,
  h5 as _BadgeComponent,
  g5 as _BottomNavigationComponent,
  b5 as _BottomNavigationItemComponent,
  y5 as _BreadcrumbComponent,
  k5 as _BreadcrumbsComponent,
  v5 as _ButtonComponent,
  $5 as _ButtonGroupComponent,
  w5 as _CardComponent,
  C5 as _CellComponent,
  P5 as _CheckboxComponent,
  z5 as _CheckboxGroupComponent,
  O5 as _ChipComponent,
  T5 as _ColComponent,
  E5 as _CollapseComponent,
  B5 as _CollapseItemComponent,
  I5 as _CollapseTransitionComponent,
  n5 as _ContextComponent,
  D5 as _CountdownComponent,
  M5 as _CounterComponent,
  A5 as _DatePickerComponent,
  V5 as _DialogComponent,
  L5 as _DividerComponent,
  R5 as _DragComponent,
  U5 as _EllipsisComponent,
  H5 as _FabComponent,
  Y5 as _FieldDecoratorComponent,
  j5 as _FloatingPanelComponent,
  W5 as _FormComponent,
  S5 as _FormDetailsComponent,
  i5 as _HoverComponent,
  a5 as _HoverOverlayComponent,
  r5 as _IconComponent,
  K5 as _ImageComponent,
  X5 as _ImagePreviewComponent,
  Z5 as _IndexAnchorComponent,
  J5 as _IndexBarComponent,
  Q5 as _InputComponent,
  c5 as _LazyComponent,
  _5 as _LinkComponent,
  x5 as _ListComponent,
  eT as _LoadingBarComponent,
  p5 as _LoadingComponent,
  l5 as _LocaleComponent,
  nT as _LocaleProviderComponent,
  oT as _MenuComponent,
  tT as _MenuOptionComponent,
  rT as _MenuSelectComponent,
  aT as _OptionComponent,
  iT as _OverlayComponent,
  lT as _PaginationComponent,
  sT as _PaperComponent,
  uT as _PickerComponent,
  t5 as _PopupComponent,
  cT as _ProgressComponent,
  dT as _PullRefreshComponent,
  fT as _RadioComponent,
  pT as _RadioGroupComponent,
  vT as _RateComponent,
  mT as _ResultComponent,
  o5 as _RippleComponent,
  hT as _RowComponent,
  gT as _SelectComponent,
  bT as _SkeletonComponent,
  yT as _SliderComponent,
  kT as _SnackbarComponent,
  $T as _SpaceComponent,
  wT as _StepComponent,
  CT as _StepsComponent,
  N5 as _StickyComponent,
  ST as _StyleProviderComponent,
  q5 as _SwipeComponent,
  G5 as _SwipeItemComponent,
  PT as _SwitchComponent,
  zT as _TabComponent,
  OT as _TabItemComponent,
  TT as _TableComponent,
  ET as _TabsComponent,
  BT as _TabsItemsComponent,
  IT as _ThemesComponent,
  DT as _TimePickerComponent,
  F5 as _TooltipComponent,
  MT as _UploaderComponent,
  NT as _WatermarkComponent,
  xd as actionSheetProps,
  vs as add,
  sf as appBarProps,
  bf as avatarGroupProps,
  hf as avatarProps,
  Sf as backTopProps,
  zf as badgeProps,
  If as bottomNavigationItemProps,
  Tf as bottomNavigationProps,
  Mf as breadcrumbProps,
  Vf as breadcrumbsProps,
  Rf as buttonGroupProps,
  $f as buttonProps,
  Uf as cardProps,
  Yf as cellProps,
  Jf as checkboxGroupProps,
  qf as checkboxProps,
  _f as chipProps,
  ep as colProps,
  ip as collapseItemProps,
  rp as collapseProps,
  up as collapseTransitionProps,
  dp as countdownProps,
  Sp as counterProps,
  rf as currentMessage,
  Mp as datePickerProps,
  AT as default,
  dn as defaultLazyOptions,
  Up as dialogProps,
  Yp as dividerProps,
  Wp as dragProps,
  ov as ellipsisProps,
  ef as enUS,
  of as faIR,
  rv as fabProps,
  Na as fieldDecoratorProps,
  Wf as formDetailsProps,
  sv as formProps,
  jd as hoverOverlayProps,
  tn as iconProps,
  df as imageCache,
  mv as imagePreviewProps,
  cv as imageProps,
  bv as indexAnchorProps,
  kv as indexBarProps,
  wv as inputProps,
  x8 as install,
  Sv as linkProps,
  zv as listProps,
  bS as loadingBarProps,
  lo as loadingProps,
  Hv as menuOptionProps,
  As as menuProps,
  jv as menuSelectProps,
  af as merge,
  tf as messages,
  Gv as optionProps,
  Zv as overlayProps,
  Jv as paginationProps,
  _v as paperProps,
  em as pickerProps,
  gt as popupProps,
  om as progressProps,
  rm as pullRefreshProps,
  um as radioGroupProps,
  im as radioProps,
  dm as rateProps,
  ym as resultProps,
  $m as rowProps,
  Cm as selectProps,
  Pm as skeletonProps,
  Om as sliderProps,
  Vs as snackbarProps,
  Am as spaceProps,
  Vm as stepProps,
  Fm as stepsProps,
  Pt as stickyProps,
  Hm as styleProviderProps,
  Bs as swipeProps,
  jm as switchProps,
  an as t,
  Xm as tabItemProps,
  Km as tabProps,
  Jm as tableProps,
  eh as tabsItemsProps,
  _m as tabsProps,
  oh as timePickerProps,
  ev as tooltipProps,
  sh as uploaderProps,
  ms as use,
  Jn as useHoverOverlay,
  ps as useLocale,
  _8 as version,
  ch as watermarkProps,
  ds as zhCN,
  nf as zhHK,
  fs as zhTW
};
