import { reactive as _e, onMounted as Bo, nextTick as Ue, onActivated as Do, isRef as Yh, watch as de, onBeforeUnmount as jr, onDeactivated as mt, onUnmounted as qt, inject as hs, getCurrentInstance as Wo, computed as I, ref as $, unref as Ld, provide as gs, isVNode as jh, defineComponent as _, h as Xt, Comment as Wh, Fragment as Ne, createApp as Kh, onBeforeMount as qh, createVNode as G, Teleport as oo, Transition as Qe, withDirectives as Ae, vShow as Qn, mergeProps as He, openBlock as h, createBlock as Ce, resolveDynamicComponent as ht, normalizeClass as v, normalizeStyle as X, createElementBlock as S, resolveComponent as Q, resolveDirective as Ye, createCommentVNode as q, createElementVNode as N, toDisplayString as ie, withCtx as ce, renderSlot as A, renderList as Ke, createTextVNode as Be, onUpdated as Gt, normalizeProps as wo, guardReactiveProps as Zt, createSlots as tt, withModifiers as Wn, vModelText as Xh, withKeys as ou, TransitionGroup as Gh } from "vue";
const Fd = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, xT = _e(Fd);
var An = _e(Fd), Zh = Object.defineProperty, Jh = Object.defineProperties, Qh = Object.getOwnPropertyDescriptors, tu = Object.getOwnPropertySymbols, _h = Object.prototype.hasOwnProperty, xh = Object.prototype.propertyIsEnumerable, ru = (e, n, o) => n in e ? Zh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Hd = (e, n) => {
  for (var o in n || (n = {}))
    _h.call(n, o) && ru(e, o, n[o]);
  if (tu)
    for (var o of tu(n))
      xh.call(n, o) && ru(e, o, n[o]);
  return e;
}, Ud = (e, n) => Jh(e, Qh(n));
function Pn(e, n, o) {
  return Math.min(o, Math.max(n, e));
}
function eg(e, n) {
  return Pn(e, 0, n.length - 1);
}
function to() {
  return typeof window < "u";
}
function Wr() {
  return typeof globalThis < "u" ? globalThis : to() ? window : typeof global < "u" ? global : self;
}
var { hasOwnProperty: ng } = Object.prototype;
function Bt(e, n) {
  return ng.call(e, n);
}
function Pr() {
  return to() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function Xe(e) {
  return Array.isArray(e);
}
var og = Object.prototype.toString;
function tg(e) {
  return og.call(e);
}
function rg(e) {
  return tg(e).slice(8, -1);
}
function bs(e) {
  return typeof e == "boolean";
}
function Zn(e) {
  return e == null || e === "" || Xe(e) && !e.length;
}
function zo(e) {
  return rg(e) === "Object";
}
function ag(e) {
  return typeof e == "object" && e !== null;
}
function Dn(e) {
  return typeof e == "function";
}
function En(e) {
  return typeof e == "number";
}
function mn(e) {
  return typeof e == "string";
}
function Yd(e) {
  return En(e) || mn(e) && /^[-+]?\d+$/.test(e);
}
function jd(e) {
  return e === window;
}
function ig() {
  return to() && "ontouchstart" in window;
}
function L(e) {
  return e == null ? 0 : mn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : bs(e) ? Number(e) : e;
}
function rt(e, n) {
  if (e.length) {
    const o = e.indexOf(n);
    if (o > -1)
      return e.splice(o, 1);
  }
}
function au(e) {
  return [...new Set(e)];
}
function lg(e, n, o = "start") {
  let t = o === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && t >= 0 && t <= e.length - 1; ) {
    if (n(e[t], t, e))
      return [e[t], t];
    o === "start" ? t++ : t--;
  }
  return [null, -1];
}
function sg(e) {
  return e.filter((n) => n != null);
}
function Co(e) {
  return Xe(e) ? e : [e];
}
function zr(e) {
  const n = Wr();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function ug(...e) {
  return e.map((n) => {
    if (Xe(n)) {
      const [o, t, r = null] = n;
      return o ? t : r;
    }
    return n;
  });
}
function ys(e) {
  return e = e.replace(/-(\w)/g, (n, o) => o.toUpperCase()), e.replace(e.charAt(0), e.charAt(0).toLowerCase());
}
function Wd(e) {
  return e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
}
function cg(e) {
  return ys(e).replace(e.charAt(0), e.charAt(0).toUpperCase());
}
function dg(e) {
  return (n) => {
    const o = `${e}-${n}`, t = (r) => r ? r[0] === "$" ? r.replace("$", e) : r.startsWith("--") ? `${o}${r}` : `${o}__${r}` : o;
    return {
      name: cg(o),
      n: t,
      classes: ug
    };
  };
}
function at(e) {
  const n = Wr();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}
function kn() {
  return new Promise((e) => {
    at(() => {
      at(e);
    });
  });
}
function Ko(e) {
  return window.getComputedStyle(e);
}
function an(e) {
  if (jd(e)) {
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
    return Ud(Hd({}, t), {
      toJSON: () => t
    });
  }
  return e.getBoundingClientRect();
}
function ks(e) {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}
function Ho(e) {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}
function fg(e) {
  const { top: n, bottom: o, left: t, right: r } = an(e), { width: a, height: i } = an(window), l = t <= a && r >= 0, s = n <= i && o >= 0;
  return l && s;
}
function Ve(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function nt() {
  return new Promise((e) => {
    at(e);
  });
}
function Kd(e) {
  return Ud(Hd({}, e), {
    set(n, o) {
      o != null && (mn(o) || (o = JSON.stringify(o)), e.setItem(n, o));
    },
    get(n) {
      const o = e.getItem(n);
      try {
        return JSON.parse(o);
      } catch {
        return o;
      }
    },
    remove(n) {
      e.removeItem(n);
    }
  });
}
Kd(Wr().sessionStorage);
Kd(Wr().localStorage);
function vg(e) {
  const {
    from: n,
    to: o,
    duration: t = 300,
    frame: r = () => {
    },
    timingFunction: a = (b) => b,
    onStateChange: i = () => {
    }
  } = e;
  let l = "pending", s = n;
  const u = o - n;
  let c, d, f, p = 0;
  function g() {
    if (l === "running" || l === "finished")
      return;
    y("running");
    const b = performance.now();
    d = d ?? b, p += f != null ? b - f : 0, f = void 0, P();
    function P() {
      c = at(() => {
        const O = performance.now() - d - p, B = Pn(O / t, 0, 1);
        if (s = u * a(B) + n, B >= 1) {
          y("finished"), r({ value: o, done: !0 });
          return;
        }
        r({ value: s, done: !1 }), P();
      });
    }
  }
  function m() {
    l === "running" && (zr(c), y("paused"), f = performance.now());
  }
  function k() {
    zr(c), y("pending"), s = n, c = void 0, d = void 0, f = void 0, p = 0;
  }
  function w() {
    return l;
  }
  function y(b) {
    l = b, i(b);
  }
  return {
    start: g,
    pause: m,
    reset: k,
    getState: w
  };
}
function C(e, ...n) {
  if (Xe(e))
    return e.map((o) => o(...n));
  if (e)
    return e(...n);
}
function $s(e, n = 200) {
  let o, t = 0;
  return function r(...a) {
    const i = performance.now(), l = i - t;
    t || (t = i), o && clearTimeout(o), l >= n ? (e.apply(this, a), t = i) : o = setTimeout(() => {
      r.apply(this, a);
    }, n - l);
  };
}
function pg(e) {
  return new Promise((n) => {
    const o = new FileReader();
    o.onload = () => {
      n(o.result);
    }, o.readAsDataURL(e);
  });
}
function mg(e, n = 0, o) {
  return n = Pn(n, -292, 292), n ? +`${o(`${e}e${n}`)}e${-n}` : o(e);
}
function iu(e, n = 0) {
  return mg(e, n, Math.floor);
}
var hg = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, gg = Object.defineProperty, Or = Object.getOwnPropertySymbols, qd = Object.prototype.hasOwnProperty, Xd = Object.prototype.propertyIsEnumerable, lu = (e, n, o) => n in e ? gg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, bg = (e, n) => {
  for (var o in n || (n = {}))
    qd.call(n, o) && lu(e, o, n[o]);
  if (Or)
    for (var o of Or(n))
      Xd.call(n, o) && lu(e, o, n[o]);
  return e;
}, yg = (e, n) => {
  var o = {};
  for (var t in e)
    qd.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && Or)
    for (var t of Or(e))
      n.indexOf(t) < 0 && Xd.call(e, t) && (o[t] = e[t]);
  return o;
};
function hn(e) {
  let n = !1;
  Bo(() => {
    e(), Ue(() => {
      n = !0;
    });
  }), Do(() => {
    n && e();
  });
}
function je(e, n, o, t = {}) {
  if (!to())
    return;
  const { passive: r = !1, capture: a = !1 } = t;
  let i = !1, l = !1;
  const s = (p) => Dn(p) ? p() : Ld(p), u = (p) => {
    if (i || l)
      return;
    const g = s(p);
    g && (g.addEventListener(n, o, {
      passive: r,
      capture: a
    }), i = !0);
  }, c = (p) => {
    if (!i || l)
      return;
    const g = s(p);
    g && (g.removeEventListener(n, o, {
      capture: a
    }), i = !1);
  };
  let d;
  Yh(e) && (d = de(
    () => e.value,
    (p, g) => {
      c(g), u(p);
    }
  ));
  const f = () => {
    d == null || d(), c(e), l = !0;
  };
  return hn(() => {
    u(e);
  }), jr(() => {
    c(e);
  }), mt(() => {
    c(e);
  }), f;
}
function ws(e, n, o) {
  if (!to())
    return;
  je(document, n, (r) => {
    const a = Dn(e) ? e() : Ld(e);
    a && !a.contains(r.target) && o(r);
  });
}
function Jt(e) {
  let n = !1;
  mt(() => {
    n = !0, e();
  }), qt(() => {
    n || e();
  });
}
function Cs(e) {
  const n = Wo();
  return e in n.provides;
}
function gn(e) {
  if (!Cs(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const o = hs(e), { childInstances: t, collect: r, clear: a } = o, i = yg(o, ["childInstances", "collect", "clear"]), l = Wo();
  return {
    index: I(() => t.indexOf(l)),
    parentProvider: i,
    bindParent: (c) => {
      Bo(() => {
        Ue().then(() => {
          r(l, c);
        });
      }), jr(() => {
        Ue().then(() => {
          a(l, c);
        });
      });
    }
  };
}
function kg(e) {
  const n = [], o = (t) => {
    if (t != null && t.component) {
      o(t == null ? void 0 : t.component.subTree);
      return;
    }
    Xe(t == null ? void 0 : t.children) && t.children.forEach((r) => {
      jh(r) && (n.push(r), o(r));
    });
  };
  return o(e), n;
}
function bn(e) {
  const n = Wo(), o = _e([]), t = [], r = I(() => o.length), a = () => {
    const u = kg(n.subTree);
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
      gs(e, bg({
        childInstances: o,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function ro(e) {
  je(() => window, "resize", e, { passive: !0 }), je(() => window, "orientationchange", e, { passive: !0 });
}
function $g(e, n) {
  const o = $(!1);
  return de(
    e,
    (t) => {
      n === t && (o.value = !0);
    },
    { immediate: !0 }
  ), o;
}
function wg(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function gt() {
  const e = $(0), n = $(0), o = $(0), t = $(0), r = $(0), a = $(0), i = $(0), l = $(0), s = $(0), u = $(0), c = $(), d = $(!1), f = $(!1), p = $(0), g = $(0);
  let m = null;
  const k = () => {
    e.value = 0, n.value = 0, o.value = 0, t.value = 0, r.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, c.value = void 0, d.value = !1, f.value = !1, p.value = 0, g.value = 0;
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
    startTime: p,
    distance: g,
    resetTouch: k,
    startTouch: (O) => {
      k();
      const { clientX: B, clientY: T } = O.touches[0];
      e.value = B, n.value = T, i.value = B, l.value = T, d.value = !0, p.value = performance.now(), f.value = !1, m && window.cancelAnimationFrame(m);
    },
    moveTouch: (O) => {
      const { clientX: B, clientY: T } = O.touches[0];
      f.value = !0, o.value = B - e.value, t.value = T - n.value, r.value = Math.abs(o.value), a.value = Math.abs(t.value), g.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = B - i.value, u.value = T - l.value, c.value || (c.value = wg(r.value, a.value)), i.value = B, l.value = T;
    },
    endTouch: () => {
      d.value = !1, m = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (O) => Ho(O) === 0 && t.value > 0,
    isReachBottom: (O, B = 1) => {
      const { scrollHeight: T, clientHeight: E, scrollTop: M } = O, R = Math.abs(T - M - E);
      return t.value < 0 && R <= B;
    }
  };
}
function Gd() {
  const e = Wo(), n = Wd(e.type.name), o = $(void 0);
  return Bo(() => {
    o.value = `${n}-${e.uid}`;
  }), o;
}
function Cg(e = {}) {
  const { initialWidth: n = 0, initialHeight: o = 0 } = e, t = $(n), r = $(o), a = () => {
    to() && (t.value = window.innerWidth, r.value = window.innerHeight);
  };
  return hn(a), ro(a), {
    width: t,
    height: r
  };
}
function Kn(e, n, o = {}) {
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
        i ? i(l, d) : C(e[l], d);
      }
    });
  const u = $(s());
  let c = !0;
  return de(
    () => e[n],
    () => {
      c = !1, u.value = s(), Ue(() => {
        c = !0;
      });
    }
  ), de(
    () => u.value,
    (d) => {
      c && (i ? i(l, d) : C(e[l], d));
    }
  ), u;
}
function Sg(e) {
  const n = $(r(e.from)), o = $("pending");
  let t = s();
  function r(u) {
    return Dn(u) ? u() : u;
  }
  function a() {
    t.reset(), n.value = r(e.from), o.value = "pending", t = s();
  }
  function i() {
    t.start();
  }
  function l() {
    t.pause();
  }
  function s() {
    return vg({
      from: r(e.from),
      to: r(e.to),
      duration: e.duration ? r(e.duration) : 300,
      timingFunction: e.timingFunction,
      onStateChange(u) {
        o.value = u;
      },
      frame({ value: u, done: c }) {
        var d;
        n.value = u, c && ((d = e.onFinished) == null || d.call(e, n.value));
      }
    });
  }
  return {
    value: n,
    state: o,
    start: i,
    pause: l,
    reset: a
  };
}
var Pg = Object.defineProperty, zg = Object.defineProperties, Og = Object.getOwnPropertyDescriptors, su = Object.getOwnPropertySymbols, Tg = Object.prototype.hasOwnProperty, Eg = Object.prototype.propertyIsEnumerable, uu = (e, n, o) => n in e ? Pg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Hi = (e, n) => {
  for (var o in n || (n = {}))
    Tg.call(n, o) && uu(e, o, n[o]);
  if (su)
    for (var o of su(n))
      Eg.call(n, o) && uu(e, o, n[o]);
  return e;
}, Ig = (e, n) => zg(e, Og(n)), cu = (e, n, o) => new Promise((t, r) => {
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
function De(e, n) {
  return Xe(n) ? n.reduce((o, t) => (o[t] = e[t], o), {}) : e[n];
}
function te(e, n) {
  const o = n ?? e;
  return o.install = function(t) {
    const { name: r } = e;
    r && t.component(r, e);
  }, o;
}
function ae(e, n) {
  e.setPropsDefaults = function(o) {
    Object.entries(o).forEach(([t, r]) => {
      const a = n[t];
      if (a != null) {
        if (zo(a)) {
          n[t] = Ig(Hi({}, a), {
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
function Bg(e) {
  const n = Kh(e), o = document.createElement("div");
  return document.body.appendChild(o), {
    instance: n.mount(o),
    unmount() {
      n.unmount(), o.parentNode && document.body.removeChild(o);
    }
  };
}
function bt(e, n = {}, o = {}) {
  const t = {
    setup() {
      return () => Xt(e, Hi(Hi({}, n), o));
    }
  }, { unmount: r } = Bg(t);
  return { unmountInstance: r };
}
function Zd(e) {
  const n = [];
  return e.forEach((o) => {
    if (o.type !== Wh) {
      if (o.type === Ne && Xe(o.children)) {
        o.children.forEach((t) => {
          n.push(t);
        });
        return;
      }
      n.push(o);
    }
  }), n;
}
function du(e) {
  return zo(e) && Dn(e.safeParseAsync);
}
function Dg(e) {
  return zo(e) && Bt(e, "success");
}
function Ln() {
  const e = $(""), n = (r, a, i) => cu(this, null, function* () {
    const l = Co(r).filter((u) => du(u) || Dn(u)), s = yield Promise.all(
      l.map((u) => du(u) ? u.safeParseAsync(a) : u(a, i))
    );
    return o(), !s.some((u) => {
      if (Dg(u)) {
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
    validateWithTrigger: (r, a, i, l, s) => cu(this, null, function* () {
      r.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function Mg(e) {
  je(() => window, "hashchange", e), je(() => window, "popstate", e);
}
function qo() {
  const e = $(!1);
  return Do(() => {
    e.value = !1;
  }), mt(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
const x = dg("var");
function V(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function un(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
const Qt = _({
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
    return () => mn(e.is) ? Xt(e.tag, e.is) : e.is;
  }
});
var Ng = Object.defineProperty, Ag = Object.defineProperties, Vg = Object.getOwnPropertyDescriptors, fu = Object.getOwnPropertySymbols, Rg = Object.prototype.hasOwnProperty, Lg = Object.prototype.propertyIsEnumerable, vu = (e, n, o) => n in e ? Ng(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Jd = (e, n) => {
  for (var o in n || (n = {}))
    Rg.call(n, o) && vu(e, o, n[o]);
  if (fu)
    for (var o of fu(n))
      Lg.call(n, o) && vu(e, o, n[o]);
  return e;
}, Fg = (e, n) => Ag(e, Vg(n));
const { n: Qd } = x("ripple"), pu = 250;
function Hg(e) {
  const { zIndex: n, position: o } = Ko(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", o === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function mu(e) {
  return "touches" in e;
}
function Ug(e, n) {
  const { top: o, left: t } = an(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = mu(n) ? n.touches[0].clientX - t : r / 2, u = mu(n) ? n.touches[0].clientY - o : a / 2, c = (r - i * 2) / 2, d = (a - i * 2) / 2, f = s - i, p = u - i;
  return { x: f, y: p, centerX: c, centerY: d, size: l };
}
function Ss(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !An.enableRipple)
    return;
  const o = () => {
    n.tasker = null;
    const { x: t, y: r, centerX: a, centerY: i, size: l } = Ug(this, e), s = document.createElement("div");
    s.classList.add(Qd()), s.style.opacity = "0", s.style.transform = `translate(${t}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Hg(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(o, 30);
}
function Tr() {
  const e = this._ripple, n = () => {
    const o = this.querySelectorAll(`.${Qd()}`);
    if (!o.length)
      return;
    const t = o[o.length - 1], r = pu - performance.now() + Number(t.dataset.createdAt);
    window.setTimeout(() => {
      t.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = t.parentNode) == null ? void 0 : a.removeChild(t);
      }, pu);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function _d() {
  if (!ig() || !An.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
let Er = !1;
function Yg(e) {
  Er || !(e.key === " " || e.key === "Enter") || (Ss.call(this, e), Er = !0);
}
function hu() {
  Er && (Tr.call(this), Er = !1);
}
function jg(e, n) {
  var o;
  e._ripple = Fg(Jd({
    tasker: null
  }, (o = n.value) != null ? o : {}), {
    removeRipple: Tr.bind(e)
  }), e.addEventListener("touchstart", Ss, { passive: !0 }), e.addEventListener("touchmove", _d, { passive: !0 }), e.addEventListener("dragstart", Tr, { passive: !0 }), e.addEventListener("keydown", Yg), e.addEventListener("keyup", hu), e.addEventListener("blur", hu), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function Wg(e) {
  e.removeEventListener("touchstart", Ss), e.removeEventListener("touchmove", _d), e.removeEventListener("dragstart", Tr), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function Kg(e, n) {
  var o, t, r, a, i, l;
  const s = {
    color: (o = n.value) == null ? void 0 : o.color,
    disabled: (t = n.value) == null ? void 0 : t.disabled
  };
  (s.color !== ((r = e._ripple) == null ? void 0 : r.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = Jd({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const xd = {
  mounted: jg,
  unmounted: Wg,
  updated: Kg,
  install(e) {
    e.directive("ripple", this);
  }
}, e5 = xd;
var nn = xd;
const yt = {
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
  onOpen: V(),
  onOpened: V(),
  onClose: V(),
  onClosed: V(),
  onKeyEscape: V(),
  onClickOverlay: V(),
  "onUpdate:show": V(),
  // internal for Dialog
  onRouteChange: V()
}, { n: gu } = x("");
function ef() {
  Object.keys(An.locks).length <= 0 ? document.body.classList.remove(gu("$--lock")) : document.body.classList.add(gu("$--lock"));
}
function ar(e) {
  An.locks[e] = 1, ef();
}
function ir(e) {
  delete An.locks[e], ef();
}
function _t(e, n) {
  const { uid: o } = Wo();
  n && de(n, (t) => {
    t === !1 ? ir(o) : t === !0 && e() === !0 && ar(o);
  }), de(e, (t) => {
    n && n() === !1 || (t === !0 ? ar(o) : ir(o));
  }), qh(() => {
    n && n() === !1 || e() === !0 && ar(o);
  }), qt(() => {
    n && n() === !1 || e() === !0 && ir(o);
  }), Do(() => {
    n && n() === !1 || e() === !0 && ar(o);
  }), mt(() => {
    n && n() === !1 || e() === !0 && ir(o);
  });
}
function xt(e, n) {
  const o = $(An.zIndex);
  return de(
    e,
    (t) => {
      t && (An.zIndex += n, o.value = An.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: o };
}
const fo = [];
function Ps(e, n) {
  const { uid: o } = Wo();
  de(e, (i) => {
    i && !a(o) ? r() : setTimeout(() => {
      rt(fo, a(o));
    });
  }), hn(() => {
    e() && r();
  }), Jt(() => {
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
const nf = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function of() {
  const { bindParent: e, parentProvider: n, index: o } = gn(nf);
  return {
    index: o,
    popup: n,
    bindPopup: e
  };
}
function qg() {
  const { bindChildren: e, childProviders: n, length: o } = bn(nf);
  return {
    length: o,
    popupItems: n,
    bindPopupItems: e
  };
}
var Xg = Object.defineProperty, bu = Object.getOwnPropertySymbols, Gg = Object.prototype.hasOwnProperty, Zg = Object.prototype.propertyIsEnumerable, yu = (e, n, o) => n in e ? Xg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Jg = (e, n) => {
  for (var o in n || (n = {}))
    Gg.call(n, o) && yu(e, o, n[o]);
  if (bu)
    for (var o of bu(n))
      Zg.call(n, o) && yu(e, o, n[o]);
  return e;
};
const {
  name: Qg,
  n: Hn,
  classes: Ii
} = x("popup");
var Kr = _({
  name: Qg,
  inheritAttrs: !1,
  props: yt,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = $g(() => e.show, !0), {
      zIndex: r
    } = xt(() => e.show, 3), a = I(() => {
      var g;
      return (g = e.zIndex) != null ? g : r.value;
    }), {
      onStackTop: i
    } = Ps(() => e.show, a), {
      disabled: l
    } = qo(), {
      bindPopupItems: s
    } = qg();
    _t(() => e.show, () => e.lockScroll), de(() => e.show, (g) => {
      C(g ? e.onOpen : e.onClose);
    }), s({
      show: I(() => e.show)
    }), je(() => window, "keydown", p), Mg(() => C(e.onRouteChange));
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
      return G("div", {
        class: Ii(Hn("overlay"), g),
        style: Jg({
          zIndex: a.value - 1
        }, m),
        onClick: u
      }, null);
    }
    function d() {
      return Ae(G("div", He({
        class: Ii(Hn("content"), Hn(`--${e.position}`), [e.defaultStyle, Hn("--content-background-color")], [e.defaultStyle, Hn("$-elevation--3")], [e.safeArea, Hn("--safe-area")], [e.safeAreaTop, Hn("--safe-area-top")]),
        style: {
          zIndex: a.value
        },
        role: "dialog",
        "aria-modal": "true"
      }, o), [t.value && C(n.default)]), [[Qn, e.show]]);
    }
    function f() {
      return G(Qe, {
        name: Hn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Ae(G("div", {
          class: Ii(Hn("$--box"), Hn(), [!e.overlay, Hn("--pointer-events-none")]),
          style: {
            zIndex: a.value - 2
          }
        }, [e.overlay && c(), G(Qe, {
          name: e.transition || Hn(`$-pop-${e.position}`)
        }, {
          default: () => [d()]
        })]), [[Qn, e.show]])]
      });
    }
    function p(g) {
      !i() || g.key !== "Escape" || !e.show || (C(e.onKeyEscape), e.closeOnKeyEscape && (Ve(g), C(e["onUpdate:show"], !1)));
    }
    return () => {
      const {
        teleport: g
      } = e;
      return g ? G(oo, {
        to: g,
        disabled: l.value
      }, {
        default: () => [f()]
      }) : f();
    };
  }
});
te(Kr);
ae(Kr, yt);
const n5 = Kr;
var Oo = Kr;
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
  onClick: V()
};
function Vn(e, n) {
  throw Error(`Varlet [${e}]: ${n}`);
}
function _g(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function xg(e) {
  const { left: n } = an(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function ku(e) {
  const { top: n } = an(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Bi(e) {
  const { transform: n } = Ko(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function To(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const o = /(scroll|auto)/, { overflowY: t, overflow: r } = Ko(n);
    if (o.test(t) || o.test(r))
      return n;
  }
  return window;
}
function eb(e) {
  const n = [];
  let o = e;
  for (; !jd(o); )
    o = To(o), n.push(o);
  return n;
}
function tf(e, n) {
  if (mn(e)) {
    const o = document.querySelector(e);
    return o || Vn(n, "target element cannot found"), o;
  }
  if (ag(e)) return e;
  Vn(n, 'type of prop "target" should be a selector or an element object');
}
function nb() {
  const { width: e, height: n } = an(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const ob = (e) => mn(e) && e.endsWith("rem"), tb = (e) => mn(e) && e.endsWith("px") || En(e), rb = (e) => mn(e) && e.endsWith("vw"), ab = (e) => mn(e) && e.endsWith("vh"), ib = (e) => mn(e) && e.endsWith("vmin"), lb = (e) => mn(e) && e.endsWith("vmax"), xe = (e) => {
  if (Yd(e))
    return Number(e);
  if (tb(e))
    return +e.replace("px", "");
  if (!to())
    return 0;
  const { vw: n, vh: o, vMin: t, vMax: r } = nb();
  if (rb(e))
    return +e.replace("vw", "") * n / 100;
  if (ab(e))
    return +e.replace("vh", "") * o / 100;
  if (ib(e))
    return +e.replace("vmin", "") * t / 100;
  if (lb(e))
    return +e.replace("vmax", "") * r / 100;
  if (ob(e)) {
    const a = +e.replace("rem", ""), i = Ko(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return mn(e) ? L(e) : 0;
}, ze = (e) => {
  if (e != null)
    return Yd(e) ? `${e}px` : String(e);
}, Cn = (e, n = 1) => {
  if (e == null)
    return;
  const o = ze(e), t = o.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(o) * n}${t}`;
};
function Dt(e, { top: n = 0, left: o = 0, duration: t = 300, animation: r }) {
  const a = Date.now(), i = Ho(e), l = ks(e);
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
function rf(e) {
  return Object.entries(e ?? {}).reduce((n, [o, t]) => {
    const r = o.startsWith("--") ? o : `--${Wd(o)}`;
    return n[r] = t, n;
  }, {});
}
function Ir(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
const $u = ["button", "input", "select", "textarea", "[tabindex]", "[href]"].map((e) => `${e}:not([disabled])`).join(", ");
function af(e, n, o) {
  var t;
  const r = n.querySelectorAll($u);
  if (!r.length)
    return;
  const a = [e, ...Array.from(e.querySelectorAll($u))].findIndex(
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
var sb = (e, n, o) => new Promise((t, r) => {
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
const { name: ub, n: cb, classes: db } = x("icon");
function fb(e, n) {
  return h(), Ce(ht(e.isURL(e.name) ? "img" : "i"), {
    class: v(
      e.classes(
        e.n(),
        [e.namespace !== e.n(), e.namespace],
        `${e.namespace}--set`,
        [e.isURL(e.name), e.n("image"), `${e.namespace}-${e.nextName}`],
        [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass]
      )
    ),
    style: X({
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
const lf = _({
  name: ub,
  props: en,
  setup(e) {
    const n = $(""), o = $(!1);
    de(() => e.name, t, { immediate: !0 });
    function t(r, a) {
      return sb(this, null, function* () {
        const { transition: i } = e;
        if (a == null || L(i) === 0) {
          n.value = r;
          return;
        }
        o.value = !0, yield Ue(), setTimeout(() => {
          a != null && (n.value = r), o.value = !1;
        }, L(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: o,
      n: cb,
      classes: db,
      isURL: hg,
      toNumber: L,
      toSizeUnit: ze
    };
  }
});
lf.render = fb;
var qr = lf;
te(qr);
ae(qr, en);
const o5 = qr;
var Ze = qr;
const sf = {
  hovering: Boolean,
  focusing: Boolean
}, { name: vb, n: pb, classes: mb } = x("hover-overlay");
function hb(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), [e.hovering, e.n("--hovering")], [e.focusing && !e.inMobile(), e.n("--focusing")]))
    },
    null,
    2
    /* CLASS */
  );
}
const uf = _({
  name: vb,
  props: sf,
  setup: () => ({
    n: pb,
    classes: mb,
    inMobile: Pr
  })
});
uf.render = hb;
var Xr = uf;
te(Xr);
ae(Xr, sf);
function _n() {
  const e = $(!1);
  return {
    hovering: e,
    handleHovering: (o) => {
      e.value = o;
    }
  };
}
const t5 = Xr;
var Rn = Xr;
function cf(e) {
  return e ? !!(e === "desktop" && Pr() || e === "mobile" && !Pr()) : !1;
}
function gb(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((o, t) => {
    const [r, a] = t.split(":").map((i) => i.trim());
    return o[ys(r)] = a, o;
  }, {}) : {};
}
function bb(e) {
  const { value: n } = e._hover, o = gb(e);
  Object.keys(n).forEach((t) => {
    const r = ys(t);
    n[r] != null && o[r] && (e._hover.rawStyle[r] = o[r]);
  });
}
function zs(e, n) {
  Object.keys(n).forEach((o) => {
    const t = n[o];
    t != null && (e.style[o] = t);
  });
}
function yb(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function df(e) {
  (e == null ? void 0 : e._hover) != null && (yb(e), zs(e, e._hover.rawStyle));
}
function ff() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, Dn(e)) {
    e(this._hover.hovering);
    return;
  }
  zs(this, e);
}
function vf() {
  if (this._hover.hovering = !1, Dn(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  df(this);
}
function pf(e, n) {
  var o, t;
  const { arg: r, value: a } = n;
  cf(r) || (e._hover = {
    value: a,
    hovering: (t = (o = e._hover) == null ? void 0 : o.hovering) != null ? t : !1,
    rawStyle: {}
  }, bb(e), e.addEventListener("mouseenter", ff), e.addEventListener("mouseleave", vf));
}
function mf(e, n) {
  cf(n.arg) || (df(e), e.removeEventListener("mouseenter", ff), e.removeEventListener("mouseleave", vf));
}
function kb(e, n) {
  e._hover && mf(e, n);
}
function $b(e, n) {
  return !Dn(n.value) && e._hover.hovering;
}
function wb(e, n) {
  pf(e, n), $b(e, n) && zs(e, n.value);
}
const hf = {
  mounted: pf,
  unmounted: mf,
  beforeUpdate: kb,
  updated: wb,
  install(e) {
    e.directive("hover", this);
  }
}, r5 = hf;
var In = hf;
const { name: Cb, n: Sb, classes: Pb } = x("action-sheet");
function zb(e, n) {
  const o = Q("var-icon"), t = Q("var-hover-overlay"), r = Ye("ripple"), a = Ye("hover");
  return Ae((h(), S(
    "div",
    {
      class: v(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
      style: X({ color: e.color })
    },
    [
      e.icon ? (h(), Ce(o, {
        key: 0,
        "var-action-sheet-cover": "",
        class: v(e.n("action-icon")),
        namespace: e.namespace,
        name: e.icon,
        size: e.iconSize
      }, null, 8, ["class", "namespace", "name", "size"])) : q("v-if", !0),
      N(
        "div",
        {
          class: v(e.n("action-name"))
        },
        ie(e.name),
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
const gf = _({
  name: Cb,
  components: {
    VarHoverOverlay: Rn,
    VarIcon: Ze
  },
  directives: { Ripple: nn, Hover: In },
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
      n: Sb,
      classes: Pb,
      handleHovering: n
    };
  }
});
gf.render = zb;
var Ob = gf, Tb = Object.defineProperty, wu = Object.getOwnPropertySymbols, Eb = Object.prototype.hasOwnProperty, Ib = Object.prototype.propertyIsEnumerable, Cu = (e, n, o) => n in e ? Tb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Bb = (e, n) => {
  for (var o in n || (n = {}))
    Eb.call(n, o) && Cu(e, o, n[o]);
  if (wu)
    for (var o of wu(n))
      Ib.call(n, o) && Cu(e, o, n[o]);
  return e;
};
const bf = Bb({
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
  onSelect: V(),
  "onUpdate:show": V()
}, De(yt, [
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
var Os = {
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
}, yf = {
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
}, Ts = {
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
}, kf = Ts, $f = {
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
}, Db = Object.defineProperty, Su = Object.getOwnPropertySymbols, Mb = Object.prototype.hasOwnProperty, Nb = Object.prototype.propertyIsEnumerable, Pu = (e, n, o) => n in e ? Db(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, zu = (e, n) => {
  for (var o in n || (n = {}))
    Mb.call(n, o) && Pu(e, o, n[o]);
  if (Su)
    for (var o of Su(n))
      Nb.call(n, o) && Pu(e, o, n[o]);
  return e;
};
function Es() {
  const e = $({}), n = $({}), o = (i, l) => {
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
      e.value[i] = zu(zu({}, e.value[i]), l), t(i);
    },
    t: (i) => {
      if (Bt(n.value, i))
        return n.value[i];
    }
  };
}
const { messages: wf, currentMessage: Cf, add: Is, use: Bs, merge: Sf, t: tn } = Es();
Is("zh-CN", Os);
Bs("zh-CN");
const a5 = {
  zhCN: Os,
  enUS: yf,
  zhTW: Ts,
  zhHK: kf,
  faIR: $f,
  messages: wf,
  currentMessage: Cf,
  add: Is,
  use: Bs,
  merge: Sf,
  t: tn,
  useLocale: Es
};
var Ui = {
  zhCN: Os,
  enUS: yf,
  zhTW: Ts,
  zhHK: kf,
  faIR: $f,
  messages: wf,
  currentMessage: Cf,
  add: Is,
  use: Bs,
  merge: Sf,
  t: tn,
  useLocale: Es
};
const Yi = Symbol("LOCALE_PROVIDER_KEY");
function Ab(e) {
  gs(Yi, e);
}
function ao() {
  return Cs(Yi) ? hs(Yi) : { t: null };
}
const { name: Vb, n: Rb, classes: Lb } = x("action-sheet");
function Fb(e, n) {
  const o = Q("var-action-item"), t = Q("var-popup");
  return h(), Ce(t, {
    position: "bottom",
    class: v(e.n("popup-radius")),
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
    default: ce(() => [
      N(
        "div",
        He({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          A(e.$slots, "title", {}, () => {
            var r;
            return [
              N(
                "div",
                {
                  class: v(e.n("title"))
                },
                ie((r = e.title) != null ? r : (e.pt ? e.pt : e.t)("actionSheetTitle")),
                3
                /* TEXT, CLASS */
              )
            ];
          }),
          A(e.$slots, "actions", {}, () => [
            (h(!0), S(
              Ne,
              null,
              Ke(e.actions, (r) => (h(), Ce(o, {
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
const Pf = _({
  name: Vb,
  directives: { Ripple: nn },
  components: {
    VarPopup: Oo,
    VarActionItem: Ob
  },
  inheritAttrs: !1,
  props: bf,
  setup(e) {
    const n = Kn(e, "show"), { t: o } = ao();
    function t(r) {
      if (r.disabled)
        return;
      const { closeOnClickAction: a, onSelect: i } = e;
      C(i, r), a && (n.value = !1);
    }
    return {
      show: n,
      pt: o,
      t: tn,
      n: Rb,
      classes: Lb,
      handleSelect: t
    };
  }
});
Pf.render = Fb;
var er = Pf, Hb = Object.defineProperty, Ou = Object.getOwnPropertySymbols, Ub = Object.prototype.hasOwnProperty, Yb = Object.prototype.propertyIsEnumerable, Tu = (e, n, o) => n in e ? Hb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Eu = (e, n) => {
  for (var o in n || (n = {}))
    Ub.call(n, o) && Tu(e, o, n[o]);
  if (Ou)
    for (var o of Ou(n))
      Yb.call(n, o) && Tu(e, o, n[o]);
  return e;
};
let go, Ds = {};
function jb(e = {}) {
  return Eu(Eu({}, Ds), e);
}
function Mo(e) {
  return to() ? new Promise((n) => {
    Mo.close();
    const o = _e(jb(e));
    o.teleport = "body", go = o;
    const { unmountInstance: t } = bt(er, o, {
      onSelect: (r) => {
        C(o.onSelect, r), n(r);
      },
      onClose: () => {
        C(o.onClose), n("close");
      },
      onClosed: () => {
        C(o.onClosed), t(), go === o && (go = null);
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
Mo.setDefaultOptions = function(e) {
  Ds = e;
};
Mo.resetDefaultOptions = function() {
  Ds = {};
};
Mo.close = function() {
  if (go != null) {
    const e = go;
    go = null, Ue().then(() => {
      e.show = !1;
    });
  }
};
Mo.Component = er;
te(er);
te(er, Mo);
ae(Mo, bf);
const i5 = er;
var ji = Mo;
const zf = {
  type: {
    type: String,
    default: "info"
  },
  variant: {
    type: String,
    default: "standard"
  },
  color: String,
  title: String,
  message: String,
  closeable: Boolean,
  elevation: {
    type: [Boolean, String, Number],
    default: !1
  },
  onClose: V()
}, { name: Wb, n: Kb, classes: qb } = x("alert"), Xb = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  danger: "error"
};
function Gb(e, n) {
  const o = Q("var-icon");
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), e.n(`--${e.type}`), e.formatElevation(e.elevation, 2))),
      style: X({
        "background-color": e.color
      }),
      role: "alert"
    },
    [
      e.isInternalType || e.$slots.icon ? (h(), S(
        "div",
        {
          key: 0,
          class: v(e.n("icon"))
        },
        [
          A(e.$slots, "icon", {}, () => [
            e.isInternalType ? (h(), Ce(o, {
              key: 0,
              name: e.iconTypeMap[e.type]
            }, null, 8, ["name"])) : q("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      )) : q("v-if", !0),
      A(e.$slots, "content", {}, () => [
        N(
          "div",
          {
            class: v(e.n("content"))
          },
          [
            e.title || e.$slots.title ? (h(), S(
              "div",
              {
                key: 0,
                class: v(e.n("title"))
              },
              [
                A(e.$slots, "title", {}, () => [
                  Be(
                    ie(e.title),
                    1
                    /* TEXT */
                  )
                ])
              ],
              2
              /* CLASS */
            )) : q("v-if", !0),
            e.message || e.$slots.default ? (h(), S(
              "div",
              {
                key: 1,
                class: v(e.n("message"))
              },
              [
                A(e.$slots, "default", {}, () => [
                  Be(
                    ie(e.message),
                    1
                    /* TEXT */
                  )
                ])
              ],
              2
              /* CLASS */
            )) : q("v-if", !0)
          ],
          2
          /* CLASS */
        )
      ]),
      e.closeable ? (h(), S(
        "div",
        {
          key: 1,
          class: v(e.n("close-icon")),
          onClick: n[0] || (n[0] = (...t) => e.handleClose && e.handleClose(...t))
        },
        [
          A(e.$slots, "close-icon", {}, () => [
            G(o, { name: "close-circle" })
          ])
        ],
        2
        /* CLASS */
      )) : q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  );
}
const Of = _({
  name: Wb,
  components: {
    VarIcon: Ze
  },
  props: zf,
  setup(e) {
    const n = I(() => ["info", "success", "danger", "warning"].includes(e.type));
    function o(t) {
      C(e.onClose, t);
    }
    return {
      n: Kb,
      classes: qb,
      iconTypeMap: Xb,
      isInternalType: n,
      formatElevation: un,
      handleClose: o
    };
  }
});
Of.render = Gb;
var Gr = Of;
te(Gr);
ae(Gr, zf);
const l5 = Gr;
var Wi = Gr;
const Tf = {
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
}, { name: Zb, n: Jb, classes: Qb } = x("app-bar");
function _b(e, n) {
  return h(), S(
    Ne,
    null,
    [
      N(
        "div",
        He({
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
              class: v(e.n("toolbar"))
            },
            [
              N(
                "div",
                {
                  class: v(e.n("left"))
                },
                [
                  A(e.$slots, "left"),
                  e.titlePosition === "left" ? (h(), S(
                    "div",
                    {
                      key: 0,
                      class: v(e.n("title")),
                      style: X({ paddingLeft: e.paddingLeft })
                    },
                    [
                      A(e.$slots, "default", {}, () => [
                        Be(
                          ie(e.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : q("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              e.titlePosition === "center" ? (h(), S(
                "div",
                {
                  key: 0,
                  class: v(e.n("title"))
                },
                [
                  A(e.$slots, "default", {}, () => [
                    Be(
                      ie(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )) : q("v-if", !0),
              N(
                "div",
                {
                  class: v(e.n("right"))
                },
                [
                  e.titlePosition === "right" ? (h(), S(
                    "div",
                    {
                      key: 0,
                      class: v(e.n("title")),
                      style: X({ paddingRight: e.paddingRight })
                    },
                    [
                      A(e.$slots, "default", {}, () => [
                        Be(
                          ie(e.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : q("v-if", !0),
                  A(e.$slots, "right")
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          ),
          A(e.$slots, "content")
        ],
        16
        /* FULL_PROPS */
      ),
      e.fixed && e.placeholder ? (h(), S(
        "div",
        {
          key: 0,
          class: v(e.n("placeholder")),
          style: X({ height: e.placeholderHeight })
        },
        null,
        6
        /* CLASS, STYLE */
      )) : q("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const Ef = _({
  name: Zb,
  props: Tf,
  setup(e, { slots: n }) {
    const o = $(null), t = $(), r = $(), a = $(), i = I(() => {
      const { image: u, color: c, textColor: d, imageLinearGradient: f, zIndex: p } = e;
      return u != null ? {
        "background-image": `${f ? `linear-gradient(${f}), ` : ""}url(${u})`,
        "background-position": "center center",
        "background-size": "cover",
        "z-index": p
      } : {
        background: c,
        color: d,
        "z-index": p
      };
    });
    ro(s), hn(() => {
      l(), s();
    }), Gt(l);
    function l() {
      t.value = n.left ? 0 : void 0, r.value = n.right ? 0 : void 0;
    }
    function s() {
      if (!e.fixed || !e.placeholder)
        return;
      const { height: u } = an(o.value);
      a.value = ze(u);
    }
    return {
      rootStyles: i,
      paddingLeft: t,
      paddingRight: r,
      n: Jb,
      classes: Qb,
      formatElevation: un,
      appBar: o,
      placeholderHeight: a
    };
  }
});
Ef.render = _b;
var Zr = Ef;
te(Zr);
ae(Zr, Tf);
const s5 = Zr;
var Ki = Zr;
const If = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: xb, n: e0 } = x("form-details"), n0 = { key: 0 }, o0 = { key: 0 };
function t0(e, n) {
  return h(), Ce(Qe, {
    name: e.n()
  }, {
    default: ce(() => [
      e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (h(), S(
        "div",
        {
          key: 0,
          class: v(e.n())
        },
        [
          N(
            "div",
            {
              class: v(e.n("error-message"))
            },
            [
              G(Qe, {
                name: e.n("message")
              }, {
                default: ce(() => [
                  e.errorMessage ? (h(), S(
                    "div",
                    n0,
                    ie(e.errorMessage),
                    1
                    /* TEXT */
                  )) : q("v-if", !0)
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
              class: v(e.n("extra-message"))
            },
            [
              G(Qe, {
                name: e.n("message")
              }, {
                default: ce(() => [
                  A(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (h(), S(
                      "div",
                      o0,
                      ie(e.extraMessage),
                      1
                      /* TEXT */
                    )) : q("v-if", !0)
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
      )) : q("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const Bf = _({
  name: xb,
  props: If,
  setup: () => ({ n: e0 })
});
Bf.render = t0;
var Jr = Bf;
te(Jr);
ae(Jr, If);
const u5 = Jr;
var zn = Jr;
const Qr = {
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
  onClick: V(),
  onClear: V()
}, Df = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Mf = Symbol(
  "SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY"
);
function r0() {
  const { childProviders: e, length: n, bindChildren: o } = bn(
    Df
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: o
  };
}
function a0() {
  const { childProviders: e, bindChildren: n } = bn(
    Mf
  );
  return {
    swipeResizeListeners: e,
    bindSwipeResizeListeners: n
  };
}
function i0() {
  const { parentProvider: e, bindParent: n } = gn(
    Mf
  );
  return {
    swipeResizeDispatcher: e,
    bindSwipeResizeDispatcher: n
  };
}
var l0 = (e, n, o) => new Promise((t, r) => {
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
const { name: s0, n: Di, classes: u0 } = x("field-decorator"), c0 = ["for"];
function d0(e, n) {
  const o = Q("var-icon");
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      N(
        "div",
        {
          class: v(
            e.classes(
              e.n("controller"),
              [e.isFocusing, e.n("--focus")],
              [e.isError, e.n("--error")],
              [e.formDisabled || e.disabled, e.n("--disabled")]
            )
          ),
          style: X({
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
              class: v(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              A(e.$slots, "prepend-icon")
            ],
            2
            /* CLASS */
          ),
          N(
            "div",
            {
              ref: "middleEl",
              class: v(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
            },
            [
              A(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          e.placeholder && e.hint ? (h(), S("label", {
            key: 0,
            class: v(
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
            style: X({
              color: e.color
            }),
            for: e.id
          }, [
            N(
              "span",
              null,
              ie(e.placeholder),
              1
              /* TEXT */
            )
          ], 14, c0)) : q("v-if", !0),
          N(
            "div",
            {
              class: v(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              e.clearable && !e.isEmpty(e.value) ? A(e.$slots, "clear-icon", {
                key: 0,
                clear: e.handleClear
              }, () => [
                G(o, {
                  class: v(e.n("clear-icon")),
                  "var-field-decorator-cover": "",
                  name: "close-circle",
                  onClick: e.handleClear
                }, null, 8, ["class", "onClick"])
              ]) : q("v-if", !0),
              A(e.$slots, "append-icon")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.line ? (h(), S(
        Ne,
        { key: 0 },
        [
          e.variant === "outlined" ? (h(), S(
            "fieldset",
            {
              key: 0,
              class: v(
                e.classes(
                  e.n("line"),
                  [e.isFocusing, e.n("--line-focus")],
                  [e.isError, e.n("--line-error")],
                  [e.formDisabled || e.disabled, e.n("--line-disabled")]
                )
              ),
              style: X({ borderColor: e.color })
            },
            [
              N(
                "legend",
                {
                  class: v(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
                  style: X({ width: e.legendWidth })
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
                        class: v(
                          e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")])
                        )
                      },
                      ie(e.placeholder),
                      3
                      /* TEXT, CLASS */
                    )
                  ])) : q("v-if", !0)
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
              class: v(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
              style: X({ background: e.isError ? void 0 : e.blurColor })
            },
            [
              N(
                "div",
                {
                  class: v(
                    e.classes(
                      e.n("dot"),
                      [e.isFocusing, e.n("--line-focus")],
                      [e.formDisabled || e.disabled, e.n("--line-disabled")],
                      [e.isError, e.n("--line-error")]
                    )
                  ),
                  style: X({ background: e.isError ? void 0 : e.focusColor })
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
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Nf = _({
  name: s0,
  components: { VarIcon: Ze },
  props: Qr,
  setup(e) {
    const n = $(null), o = $(null), t = $(""), r = $("0px"), a = $("0px"), i = $("0px"), l = $(!0), s = I(() => e.hint && (!Zn(e.value) || e.isFocusing)), { popup: u, bindPopup: c } = of(), { bindSwipeResizeDispatcher: d } = i0(), f = I(
      () => e.isError ? void 0 : e.isFocusing ? e.focusColor : e.blurColor
    );
    ro(k), hn(() => {
      k(), Ue().then(() => {
        l.value = !1;
      });
    }), Gt(k), C(c, null), C(d, {
      onResize() {
        Ue().then(k);
      }
    }), u && de(
      () => u.show.value,
      (w) => l0(this, null, function* () {
        w && (yield kn(), k());
      })
    );
    function p() {
      const { hint: w, value: y, composing: b } = e;
      if (!w && (!Zn(y) || b))
        return Di("--placeholder-hidden");
      if (s.value)
        return Di("--placeholder-hint");
    }
    function g(w) {
      C(e.onClear, w);
    }
    function m(w) {
      C(e.onClick, w);
    }
    function k() {
      if (r.value = `${o.value.offsetLeft}px`, a.value = `${o.value.offsetWidth}px`, i.value = `${o.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
        const w = Ko(n.value), y = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
        t.value = `calc(${w.width} * 0.75 + ${y} * 2)`;
      }
    }
    return {
      placeholderTextEl: n,
      middleEl: o,
      middleOffsetLeft: r,
      middleOffsetWidth: a,
      middleOffsetHeight: i,
      color: f,
      legendWidth: t,
      isFloating: s,
      transitionDisabled: l,
      resize: k,
      computePlaceholderState: p,
      n: Di,
      classes: u0,
      isEmpty: Zn,
      handleClear: g,
      handleClick: m
    };
  }
});
Nf.render = d0;
var _r = Nf;
te(_r);
ae(_r, Qr);
const c5 = _r;
var Mt = _r, f0 = Object.defineProperty, v0 = Object.defineProperties, p0 = Object.getOwnPropertyDescriptors, Iu = Object.getOwnPropertySymbols, m0 = Object.prototype.hasOwnProperty, h0 = Object.prototype.propertyIsEnumerable, Bu = (e, n, o) => n in e ? f0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, g0 = (e, n) => {
  for (var o in n || (n = {}))
    m0.call(n, o) && Bu(e, o, n[o]);
  if (Iu)
    for (var o of Iu(n))
      h0.call(n, o) && Bu(e, o, n[o]);
  return e;
}, b0 = (e, n) => v0(e, p0(n));
const Ms = b0(g0({
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
  onFocus: V(),
  onBlur: V(),
  onInput: V(),
  onChange: V(),
  onClear: V(),
  "onUpdate:modelValue": V()
}, De(Qr, [
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
var y0 = Object.defineProperty, k0 = Object.defineProperties, $0 = Object.getOwnPropertyDescriptors, Du = Object.getOwnPropertySymbols, w0 = Object.prototype.hasOwnProperty, C0 = Object.prototype.propertyIsEnumerable, Mu = (e, n, o) => n in e ? y0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, S0 = (e, n) => {
  for (var o in n || (n = {}))
    w0.call(n, o) && Mu(e, o, n[o]);
  if (Du)
    for (var o of Du(n))
      C0.call(n, o) && Mu(e, o, n[o]);
  return e;
}, P0 = (e, n) => k0(e, $0(n));
const Af = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Fn() {
  const { parentProvider: e, index: n, bindParent: o } = gn(Af), t = Wo();
  return {
    index: n,
    form: e,
    bindForm: o ? (a) => {
      o(P0(S0({}, a), { instance: t }));
    } : null
  };
}
function z0() {
  const { childProviders: e, length: n, bindChildren: o } = bn(Af);
  return {
    length: n,
    formItems: e,
    bindFormItems: o
  };
}
const { name: O0, n: T0, classes: E0 } = x("input"), I0 = ["placeholder", "enterkeyhint"], B0 = ["autocomplete", "id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], D0 = ["autocomplete", "id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function M0(e, n) {
  const o = Q("var-field-decorator"), t = Q("var-form-details");
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[12] || (n[12] = (...r) => e.handleMousedown && e.handleMousedown(...r))
    },
    [
      G(
        o,
        wo(Zt({
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
        tt({
          "clear-icon": ce(({ clear: r }) => [
            A(e.$slots, "clear-icon", { clear: r })
          ]),
          "append-icon": ce(() => [
            A(e.$slots, "append-icon")
          ]),
          default: ce(() => [
            e.normalizedType === "password" ? (h(), S("input", {
              key: 0,
              tabindex: "-1",
              class: v(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: X({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, I0)) : q("v-if", !0),
            e.textarea ? (h(), S("textarea", {
              key: 1,
              class: v(
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
              style: X({
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
            }, null, 46, B0)) : (h(), S("input", {
              key: 2,
              class: v(
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
              style: X({
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
            }, null, 46, D0))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: ce(() => [
              A(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      ),
      e.isShowFormDetails ? (h(), Ce(t, {
        key: 0,
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, tt({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: ce(() => [
            A(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"])) : q("v-if", !0)
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Vf = _({
  name: O0,
  components: {
    VarFormDetails: zn,
    VarFieldDecorator: Mt
  },
  props: Ms,
  setup(e) {
    const n = Gd(), o = $(null), t = $(!1), r = $(!1), { bindForm: a, form: i } = Fn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Ln(), d = I(() => e.disabled || e.readonly ? "" : "text"), f = I(() => e.type === "number" ? "text" : e.type), p = I(() => {
      const { maxlength: ee, modelValue: pe } = e;
      return ee ? Zn(pe) ? `0 / ${ee}` : `${String(pe).length}/${ee}` : "";
    }), g = I(() => {
      const { hint: ee, blurColor: pe, focusColor: ye } = e;
      if (!ee)
        return l.value ? "var(--field-decorator-error-color)" : t.value ? ye || "var(--field-decorator-focus-color)" : pe || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    C(a, {
      reset: H,
      validate: Y,
      resetValidation: c
    }), hn(() => {
      e.autofocus && j();
    });
    function k(ee) {
      Ue(() => {
        const { validateTrigger: pe, rules: ye, modelValue: Ee } = e;
        s(pe, ee, ye, Ee);
      });
    }
    function w(ee) {
      t.value = !0, C(e.onFocus, ee), k("onFocus");
    }
    function y(ee) {
      t.value = !1, C(e.onBlur, ee), k("onBlur");
    }
    function b(ee) {
      const pe = ee.target;
      let { value: ye } = pe;
      e.type === "number" && (ye = M(ye));
      const Ee = W(ye);
      return Ee === e.modelValue && (pe.value = Ee), Ee;
    }
    function P() {
      r.value = !0;
    }
    function z(ee) {
      r.value && (r.value = !1, ee.target.dispatchEvent(new Event("input")));
    }
    function O(ee) {
      if (r.value)
        return;
      const pe = b(ee);
      C(e["onUpdate:modelValue"], pe), C(e.onInput, pe, ee), k("onInput");
    }
    function B(ee) {
      const pe = R(b(ee));
      e.modelModifiers.trim && C(e["onUpdate:modelValue"], pe), C(e.onChange, pe, ee), k("onChange");
    }
    function T() {
      const { disabled: ee, readonly: pe, clearable: ye, onClear: Ee } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || ee || pe || !ye || (C(e["onUpdate:modelValue"], ""), C(Ee, ""), k("onClear"));
    }
    function E(ee) {
      const { disabled: pe, onClick: ye } = e;
      i != null && i.disabled.value || pe || (C(ye, ee), k("onClick"));
    }
    function M(ee) {
      const pe = ee.indexOf("-"), ye = ee.indexOf(".");
      return pe > -1 && (ee = pe === 0 ? "-" + ee.replace(/-/g, "") : ee.replace(/-/g, "")), ye > -1 && (ee = ee.slice(0, ye + 1) + ee.slice(ye).replace(/\./g, "")), ee.replace(/[^-0-9.]/g, "");
    }
    function R(ee) {
      return e.modelModifiers.trim ? ee.trim() : ee;
    }
    function W(ee) {
      return e.maxlength ? ee.slice(0, L(e.maxlength)) : ee;
    }
    function U(ee) {
      const { disabled: pe } = e;
      i != null && i.disabled.value || pe || ee.target === o.value || (j(), Ve(ee));
    }
    function H() {
      C(e["onUpdate:modelValue"], ""), c();
    }
    function Y() {
      return u(e.rules, e.modelValue);
    }
    function j() {
      var ee;
      (ee = o.value) == null || ee.focus();
    }
    function le() {
      o.value.blur();
    }
    return {
      el: o,
      id: n,
      isFocusing: t,
      isComposing: r,
      errorMessage: l,
      placeholderColor: g,
      normalizedType: f,
      cursor: d,
      maxlengthText: p,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: T0,
      classes: E0,
      isEmpty: Zn,
      handleFocus: w,
      handleBlur: y,
      handleInput: O,
      handleChange: B,
      handleClear: T,
      handleClick: E,
      handleCompositionStart: P,
      handleCompositionEnd: z,
      handleMousedown: U,
      validate: Y,
      resetValidation: c,
      reset: H,
      focus: j,
      blur: le
    };
  }
});
Vf.render = M0;
var xr = Vf;
te(xr);
ae(xr, Ms);
const d5 = xr;
var Nt = xr;
const Ns = {
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
  onOpen: V(),
  onOpened: V(),
  onClose: V(),
  onClosed: V(),
  onClickOutside: V(),
  "onUpdate:show": V()
};
var N0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function $r(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return N0[n];
  });
}
var uo = "top", Eo = "bottom", Uo = "right", So = "left", As = "auto", ea = [uo, Eo, Uo, So], na = "start", At = "end", A0 = "clippingParents", Rf = "viewport", Ct = "popper", V0 = "reference", Nu = /* @__PURE__ */ ea.reduce(function(e, n) {
  return e.concat([n + "-" + na, n + "-" + At]);
}, []), Lf = /* @__PURE__ */ [].concat(ea, [As]).reduce(function(e, n) {
  return e.concat([n, n + "-" + na, n + "-" + At]);
}, []), R0 = "beforeRead", L0 = "read", F0 = "afterRead", H0 = "beforeMain", U0 = "main", Y0 = "afterMain", j0 = "beforeWrite", W0 = "write", K0 = "afterWrite", q0 = [R0, L0, F0, H0, U0, Y0, j0, W0, K0];
function Po(e) {
  return e.split("-")[0];
}
var X0 = {
  start: "end",
  end: "start"
};
function Au(e) {
  return e.replace(/start|end/g, function(n) {
    return X0[n];
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
function Yo(e) {
  var n = qn(e).Element;
  return e instanceof n || e instanceof Element;
}
function Yn(e) {
  var n = qn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Vs(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = qn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function No(e) {
  return ((Yo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var zt = Math.max, Vu = Math.min, it = Math.round;
function qi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Ff() {
  return !/^((?!chrome|android).)*safari/i.test(qi());
}
function lt(e, n, o) {
  n === void 0 && (n = !1), o === void 0 && (o = !1);
  var t = e.getBoundingClientRect(), r = 1, a = 1;
  n && Yn(e) && (r = e.offsetWidth > 0 && it(t.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && it(t.height) / e.offsetHeight || 1);
  var i = Yo(e) ? qn(e) : window, l = i.visualViewport, s = !Ff() && o, u = (t.left + (s && l ? l.offsetLeft : 0)) / r, c = (t.top + (s && l ? l.offsetTop : 0)) / a, d = t.width / r, f = t.height / a;
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
function Rs(e) {
  var n = qn(e), o = n.pageXOffset, t = n.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: t
  };
}
function Ls(e) {
  return lt(No(e)).left + Rs(e).scrollLeft;
}
function G0(e, n) {
  var o = qn(e), t = No(e), r = o.visualViewport, a = t.clientWidth, i = t.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = Ff();
    (u || !u && n === "fixed") && (l = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + Ls(e),
    y: s
  };
}
function co(e) {
  return qn(e).getComputedStyle(e);
}
function Z0(e) {
  var n, o = No(e), t = Rs(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = zt(o.scrollWidth, o.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = zt(o.scrollHeight, o.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -t.scrollLeft + Ls(e), s = -t.scrollTop;
  return co(r || o).direction === "rtl" && (l += zt(o.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function xn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function oa(e) {
  return xn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Vs(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    No(e)
  );
}
function Fs(e) {
  var n = co(e), o = n.overflow, t = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + r + t);
}
function Hf(e) {
  return ["html", "body", "#document"].indexOf(xn(e)) >= 0 ? e.ownerDocument.body : Yn(e) && Fs(e) ? e : Hf(oa(e));
}
function Ot(e, n) {
  var o;
  n === void 0 && (n = []);
  var t = Hf(e), r = t === ((o = e.ownerDocument) == null ? void 0 : o.body), a = qn(t), i = r ? [a].concat(a.visualViewport || [], Fs(t) ? t : []) : t, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Ot(oa(i)))
  );
}
function J0(e) {
  return ["table", "td", "th"].indexOf(xn(e)) >= 0;
}
function Ru(e) {
  return !Yn(e) || // https://github.com/popperjs/popper-core/issues/837
  co(e).position === "fixed" ? null : e.offsetParent;
}
function Q0(e) {
  var n = /firefox/i.test(qi()), o = /Trident/i.test(qi());
  if (o && Yn(e)) {
    var t = co(e);
    if (t.position === "fixed")
      return null;
  }
  var r = oa(e);
  for (Vs(r) && (r = r.host); Yn(r) && ["html", "body"].indexOf(xn(r)) < 0; ) {
    var a = co(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function Hs(e) {
  for (var n = qn(e), o = Ru(e); o && J0(o) && co(o).position === "static"; )
    o = Ru(o);
  return o && (xn(o) === "html" || xn(o) === "body" && co(o).position === "static") ? n : o || Q0(e) || n;
}
function _0(e, n) {
  var o = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (o && Vs(o)) {
    var t = n;
    do {
      if (t && e.isSameNode(t))
        return !0;
      t = t.parentNode || t.host;
    } while (t);
  }
  return !1;
}
function Xi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function x0(e, n) {
  var o = lt(e, !1, n === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function Lu(e, n, o) {
  return n === Rf ? Xi(G0(e, o)) : Yo(n) ? x0(n, o) : Xi(Z0(No(e)));
}
function ey(e) {
  var n = Ot(oa(e)), o = ["absolute", "fixed"].indexOf(co(e).position) >= 0, t = o && Yn(e) ? Hs(e) : e;
  return Yo(t) ? n.filter(function(r) {
    return Yo(r) && _0(r, t) && xn(r) !== "body";
  }) : [];
}
function ny(e, n, o, t) {
  var r = n === "clippingParents" ? ey(e) : [].concat(n), a = [].concat(r, [o]), i = a[0], l = a.reduce(function(s, u) {
    var c = Lu(e, u, t);
    return s.top = zt(c.top, s.top), s.right = Vu(c.right, s.right), s.bottom = Vu(c.bottom, s.bottom), s.left = zt(c.left, s.left), s;
  }, Lu(e, i, t));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Vt(e) {
  return e.split("-")[1];
}
function oy(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Uf(e) {
  var n = e.reference, o = e.element, t = e.placement, r = t ? Po(t) : null, a = t ? Vt(t) : null, i = n.x + n.width / 2 - o.width / 2, l = n.y + n.height / 2 - o.height / 2, s;
  switch (r) {
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
  var u = r ? oy(r) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case na:
        s[u] = s[u] - (n[c] / 2 - o[c] / 2);
        break;
      case At:
        s[u] = s[u] + (n[c] / 2 - o[c] / 2);
        break;
    }
  }
  return s;
}
function ty() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ry(e) {
  return Object.assign({}, ty(), e);
}
function ay(e, n) {
  return n.reduce(function(o, t) {
    return o[t] = e, o;
  }, {});
}
function Yf(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = t === void 0 ? e.placement : t, a = o.strategy, i = a === void 0 ? e.strategy : a, l = o.boundary, s = l === void 0 ? A0 : l, u = o.rootBoundary, c = u === void 0 ? Rf : u, d = o.elementContext, f = d === void 0 ? Ct : d, p = o.altBoundary, g = p === void 0 ? !1 : p, m = o.padding, k = m === void 0 ? 0 : m, w = ry(typeof k != "number" ? k : ay(k, ea)), y = f === Ct ? V0 : Ct, b = e.rects.popper, P = e.elements[g ? y : f], z = ny(Yo(P) ? P : P.contextElement || No(e.elements.popper), s, c, i), O = lt(e.elements.reference), B = Uf({
    reference: O,
    element: b,
    strategy: "absolute",
    placement: r
  }), T = Xi(Object.assign({}, b, B)), E = f === Ct ? T : O, M = {
    top: z.top - E.top + w.top,
    bottom: E.bottom - z.bottom + w.bottom,
    left: z.left - E.left + w.left,
    right: E.right - z.right + w.right
  }, R = e.modifiersData.offset;
  if (f === Ct && R) {
    var W = R[r];
    Object.keys(M).forEach(function(U) {
      var H = [Uo, Eo].indexOf(U) >= 0 ? 1 : -1, Y = [uo, Eo].indexOf(U) >= 0 ? "y" : "x";
      M[U] += W[Y] * H;
    });
  }
  return M;
}
function iy(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = o.boundary, a = o.rootBoundary, i = o.padding, l = o.flipVariations, s = o.allowedAutoPlacements, u = s === void 0 ? Lf : s, c = Vt(t), d = c ? l ? Nu : Nu.filter(function(g) {
    return Vt(g) === c;
  }) : ea, f = d.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(g, m) {
    return g[m] = Yf(e, {
      placement: m,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[Po(m)], g;
  }, {});
  return Object.keys(p).sort(function(g, m) {
    return p[g] - p[m];
  });
}
function ly(e) {
  if (Po(e) === As)
    return [];
  var n = $r(e);
  return [Au(e), n, Au(n)];
}
function sy(e) {
  var n = e.state, o = e.options, t = e.name;
  if (!n.modifiersData[t]._skip) {
    for (var r = o.mainAxis, a = r === void 0 ? !0 : r, i = o.altAxis, l = i === void 0 ? !0 : i, s = o.fallbackPlacements, u = o.padding, c = o.boundary, d = o.rootBoundary, f = o.altBoundary, p = o.flipVariations, g = p === void 0 ? !0 : p, m = o.allowedAutoPlacements, k = n.options.placement, w = Po(k), y = w === k, b = s || (y || !g ? [$r(k)] : ly(k)), P = [k].concat(b).reduce(function(oe, me) {
      return oe.concat(Po(me) === As ? iy(n, {
        placement: me,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: m
      }) : me);
    }, []), z = n.rects.reference, O = n.rects.popper, B = /* @__PURE__ */ new Map(), T = !0, E = P[0], M = 0; M < P.length; M++) {
      var R = P[M], W = Po(R), U = Vt(R) === na, H = [uo, Eo].indexOf(W) >= 0, Y = H ? "width" : "height", j = Yf(n, {
        placement: R,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), le = H ? U ? Uo : So : U ? Eo : uo;
      z[Y] > O[Y] && (le = $r(le));
      var ee = $r(le), pe = [];
      if (a && pe.push(j[W] <= 0), l && pe.push(j[le] <= 0, j[ee] <= 0), pe.every(function(oe) {
        return oe;
      })) {
        E = R, T = !1;
        break;
      }
      B.set(R, pe);
    }
    if (T)
      for (var ye = g ? 3 : 1, Ee = function(me) {
        var D = P.find(function(K) {
          var fe = B.get(K);
          if (fe)
            return fe.slice(0, me).every(function(Se) {
              return Se;
            });
        });
        if (D)
          return E = D, "break";
      }, F = ye; F > 0; F--) {
        var Z = Ee(F);
        if (Z === "break") break;
      }
    n.placement !== E && (n.modifiersData[t]._skip = !0, n.placement = E, n.reset = !0);
  }
}
const uy = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: sy,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function cy(e, n, o) {
  var t = Po(e), r = [So, uo].indexOf(t) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, n, {
    placement: e
  })) : o, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * r, [So, Uo].indexOf(t) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function dy(e) {
  var n = e.state, o = e.options, t = e.name, r = o.offset, a = r === void 0 ? [0, 0] : r, i = Lf.reduce(function(c, d) {
    return c[d] = cy(d, n.rects, a), c;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[t] = i;
}
const fy = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: dy
};
var vy = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function py(e) {
  var n = e.x, o = e.y, t = window, r = t.devicePixelRatio || 1;
  return {
    x: it(n * r) / r || 0,
    y: it(o * r) / r || 0
  };
}
function Fu(e) {
  var n, o = e.popper, t = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = i.x, p = f === void 0 ? 0 : f, g = i.y, m = g === void 0 ? 0 : g, k = typeof c == "function" ? c({
    x: p,
    y: m
  }) : {
    x: p,
    y: m
  };
  p = k.x, m = k.y;
  var w = i.hasOwnProperty("x"), y = i.hasOwnProperty("y"), b = So, P = uo, z = window;
  if (u) {
    var O = Hs(o), B = "clientHeight", T = "clientWidth";
    if (O === qn(o) && (O = No(o), co(O).position !== "static" && l === "absolute" && (B = "scrollHeight", T = "scrollWidth")), O = O, r === uo || (r === So || r === Uo) && a === At) {
      P = Eo;
      var E = d && O === z && z.visualViewport ? z.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[B]
      );
      m -= E - t.height, m *= s ? 1 : -1;
    }
    if (r === So || (r === uo || r === Eo) && a === At) {
      b = Uo;
      var M = d && O === z && z.visualViewport ? z.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[T]
      );
      p -= M - t.width, p *= s ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: l
  }, u && vy), W = c === !0 ? py({
    x: p,
    y: m
  }) : {
    x: p,
    y: m
  };
  if (p = W.x, m = W.y, s) {
    var U;
    return Object.assign({}, R, (U = {}, U[P] = y ? "0" : "", U[b] = w ? "0" : "", U.transform = (z.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", U));
  }
  return Object.assign({}, R, (n = {}, n[P] = y ? m + "px" : "", n[b] = w ? p + "px" : "", n.transform = "", n));
}
function my(e) {
  var n = e.state, o = e.options, t = o.gpuAcceleration, r = t === void 0 ? !0 : t, a = o.adaptive, i = a === void 0 ? !0 : a, l = o.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: Po(n.placement),
    variation: Vt(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: r,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Fu(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Fu(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const jf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: my,
  data: {}
};
function hy(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function gy(e) {
  return e === qn(e) || !Yn(e) ? Rs(e) : hy(e);
}
function by(e) {
  var n = e.getBoundingClientRect(), o = it(n.width) / e.offsetWidth || 1, t = it(n.height) / e.offsetHeight || 1;
  return o !== 1 || t !== 1;
}
function yy(e, n, o) {
  o === void 0 && (o = !1);
  var t = Yn(n), r = Yn(n) && by(n), a = No(n), i = lt(e, r, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (t || !t && !o) && ((xn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Fs(a)) && (l = gy(n)), Yn(n) ? (s = lt(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = Ls(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function ky(e) {
  var n = lt(e), o = e.offsetWidth, t = e.offsetHeight;
  return Math.abs(n.width - o) <= 1 && (o = n.width), Math.abs(n.height - t) <= 1 && (t = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: t
  };
}
function $y(e) {
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
function wy(e) {
  var n = $y(e);
  return q0.reduce(function(o, t) {
    return o.concat(n.filter(function(r) {
      return r.phase === t;
    }));
  }, []);
}
function Cy(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(o) {
      Promise.resolve().then(function() {
        n = void 0, o(e());
      });
    })), n;
  };
}
function Sy(e) {
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
var Hu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Uu() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  return !n.some(function(t) {
    return !(t && typeof t.getBoundingClientRect == "function");
  });
}
function Py(e) {
  e === void 0 && (e = {});
  var n = e, o = n.defaultModifiers, t = o === void 0 ? [] : o, r = n.defaultOptions, a = r === void 0 ? Hu : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Hu, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: c,
      setOptions: function(w) {
        var y = typeof w == "function" ? w(c.options) : w;
        m(), c.options = Object.assign({}, a, c.options, y), c.scrollParents = {
          reference: Yo(l) ? Ot(l) : l.contextElement ? Ot(l.contextElement) : [],
          popper: Ot(s)
        };
        var b = wy(Sy([].concat(t, c.options.modifiers)));
        return c.orderedModifiers = b.filter(function(P) {
          return P.enabled;
        }), g(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var w = c.elements, y = w.reference, b = w.popper;
          if (Uu(y, b)) {
            c.rects = {
              reference: yy(y, Hs(b), c.options.strategy === "fixed"),
              popper: ky(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(M) {
              return c.modifiersData[M.name] = Object.assign({}, M.data);
            });
            for (var P = 0; P < c.orderedModifiers.length; P++) {
              if (c.reset === !0) {
                c.reset = !1, P = -1;
                continue;
              }
              var z = c.orderedModifiers[P], O = z.fn, B = z.options, T = B === void 0 ? {} : B, E = z.name;
              typeof O == "function" && (c = O({
                state: c,
                options: T,
                name: E,
                instance: p
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Cy(function() {
        return new Promise(function(k) {
          p.forceUpdate(), k(c);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!Uu(l, s))
      return p;
    p.setOptions(u).then(function(k) {
      !f && u.onFirstUpdate && u.onFirstUpdate(k);
    });
    function g() {
      c.orderedModifiers.forEach(function(k) {
        var w = k.name, y = k.options, b = y === void 0 ? {} : y, P = k.effect;
        if (typeof P == "function") {
          var z = P({
            state: c,
            name: w,
            instance: p,
            options: b
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
    return p;
  };
}
var lr = {
  passive: !0
};
function zy(e) {
  var n = e.state, o = e.instance, t = e.options, r = t.scroll, a = r === void 0 ? !0 : r, i = t.resize, l = i === void 0 ? !0 : i, s = qn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", o.update, lr);
  }), l && s.addEventListener("resize", o.update, lr), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", o.update, lr);
    }), l && s.removeEventListener("resize", o.update, lr);
  };
}
const Oy = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: zy,
  data: {}
};
function Ty(e) {
  var n = e.state, o = e.name;
  n.modifiersData[o] = Uf({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Ey = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ty,
  data: {}
};
function Iy(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(o) {
    var t = n.styles[o] || {}, r = n.attributes[o] || {}, a = n.elements[o];
    !Yn(a) || !xn(a) || (Object.assign(a.style, t), Object.keys(r).forEach(function(i) {
      var l = r[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function By(e) {
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
      !Yn(r) || !xn(r) || (Object.assign(r.style, l), Object.keys(a).forEach(function(s) {
        r.removeAttribute(s);
      }));
    });
  };
}
const Dy = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Iy,
  effect: By,
  requires: ["computeStyles"]
};
var My = [Oy, Ey, jf, Dy], Ny = /* @__PURE__ */ Py({
  defaultModifiers: My
}), Ay = Object.defineProperty, Vy = Object.defineProperties, Ry = Object.getOwnPropertyDescriptors, Yu = Object.getOwnPropertySymbols, Ly = Object.prototype.hasOwnProperty, Fy = Object.prototype.propertyIsEnumerable, ju = (e, n, o) => n in e ? Ay(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Mi = (e, n) => {
  for (var o in n || (n = {}))
    Ly.call(n, o) && ju(e, o, n[o]);
  if (Yu)
    for (var o of Yu(n))
      Fy.call(n, o) && ju(e, o, n[o]);
  return e;
}, Ni = (e, n) => Vy(e, Ry(n)), Wu = (e, n, o) => new Promise((t, r) => {
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
function Wf(e) {
  const n = $(null), o = $(null), t = $({ width: 0, height: 0 }), r = Kn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(M, R) {
      C(R ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = xt(() => r.value, 1);
  Ps(() => r.value, a);
  let i = null, l = !1, s = !1;
  je(() => window, "keydown", O), ws(z, "click", w), ro(B), de(() => [e.offsetX, e.offsetY, e.placement, e.strategy], B), de(() => e.disabled, E), de(
    () => r.value,
    (M) => {
      M && B();
    }
  ), Bo(() => {
    var M;
    i = Ny((M = z()) != null ? M : n.value, o.value, P());
  }), qt(() => {
    i.destroy();
  });
  function u() {
    if (!n.value)
      return;
    const { width: M, height: R } = Ko(n.value);
    t.value = {
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
    return Wu(this, null, function* () {
      e.trigger === "hover" && (s = !1, yield kn(), !l && E());
    });
  }
  function p() {
    e.trigger === "hover" && (l = !0);
  }
  function g() {
    return Wu(this, null, function* () {
      e.trigger === "hover" && (l = !1, yield kn(), !s && E());
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
  function k() {
    E();
  }
  function w(M) {
    e.trigger === "click" && (k(), C(e.onClickOutside, M));
  }
  function y() {
    B(), C(e.onClosed);
  }
  function b() {
    const { offsetX: M, offsetY: R, placement: W } = e;
    u();
    const U = {
      x: xe(M),
      y: xe(R)
    };
    switch (W) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: U.x,
          distance: U.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: U.x,
          distance: U.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: U.x,
          distance: U.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: U.x,
          distance: -U.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: U.x,
          distance: -U.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: U.x,
          distance: -U.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: U.y,
          distance: U.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: U.y,
          distance: -U.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: W,
          skidding: U.y,
          distance: -U.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: W,
          skidding: U.x,
          distance: -U.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: W,
          skidding: U.x,
          distance: U.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: W,
          skidding: U.y,
          distance: U.x
        };
    }
  }
  function P() {
    const { placement: M, skidding: R, distance: W } = b(), U = [
      Ni(Mi({}, uy), {
        enabled: r.value
      }),
      Ni(Mi({}, fy), {
        options: {
          offset: [R, W]
        }
      }),
      Ni(Mi({}, jf), {
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
        fn({ state: H }) {
          H.styles.popper.transformOrigin = c();
        }
      }
    ];
    return {
      placement: M,
      modifiers: U,
      strategy: e.strategy
    };
  }
  function z() {
    return e.reference ? n.value.querySelector(e.reference) : n.value;
  }
  function O(M) {
    const { closeOnKeyEscape: R = !1 } = e;
    M.key === "Escape" && R && r.value && (Ve(M), E());
  }
  function B() {
    i.setOptions(P());
  }
  function T() {
    e.disabled || (r.value = !0, C(e["onUpdate:show"], !0));
  }
  function E() {
    r.value = !1, C(e["onUpdate:show"], !1);
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
    handlePopoverClose: k,
    handlePopoverMouseenter: p,
    handlePopoverMouseleave: g,
    handleClosed: y,
    resize: B,
    open: T,
    close: E
  };
}
const { name: Hy, n: Uy, classes: Yy } = x("menu");
function jy(e, n) {
  return h(), S(
    "div",
    {
      ref: "host",
      class: v(e.classes(e.n(), e.n("$--box"))),
      onClick: n[3] || (n[3] = (...o) => e.handleHostClick && e.handleHostClick(...o)),
      onMouseenter: n[4] || (n[4] = (...o) => e.handleHostMouseenter && e.handleHostMouseenter(...o)),
      onMouseleave: n[5] || (n[5] = (...o) => e.handleHostMouseleave && e.handleHostMouseleave(...o))
    },
    [
      A(e.$slots, "default"),
      (h(), Ce(oo, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        G(Qe, {
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
                style: X({
                  zIndex: e.zIndex,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: v(
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
                A(e.$slots, "menu")
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
const Kf = _({
  name: Hy,
  props: Ns,
  setup(e) {
    const { disabled: n } = qo(), {
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
      handleClosed: p,
      // expose
      open: g,
      // expose
      close: m,
      // expose
      resize: k
    } = Wf(e);
    return {
      popover: o,
      host: t,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: un,
      toSizeUnit: ze,
      n: Uy,
      classes: Yy,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handlePopoverClose: f,
      handleClosed: p,
      resize: k,
      open: g,
      close: m
    };
  }
});
Kf.render = jy;
var ta = Kf;
te(ta);
ae(ta, Ns);
const f5 = ta;
var Rt = ta;
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
  rules: [Array, Function, Object],
  onClick: V(),
  onChange: V(),
  "onUpdate:modelValue": V(),
  "onUpdate:indeterminate": V()
}, Xf = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Wy() {
  const { bindChildren: e, childProviders: n, length: o } = bn(
    Xf
  );
  return {
    length: o,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Ky() {
  const { bindParent: e, parentProvider: n, index: o } = gn(
    Xf
  );
  return {
    index: o,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
const { name: qy, n: Xy, classes: Gy } = x("checkbox"), Zy = ["tabindex"];
function Jy(e, n) {
  const o = Q("var-icon"), t = Q("var-hover-overlay"), r = Q("var-form-details"), a = Ye("hover"), i = Ye("ripple");
  return h(), S(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      N(
        "div",
        {
          class: v(e.n()),
          onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
        },
        [
          Ae((h(), S("div", {
            ref: "action",
            class: v(
              e.classes(
                e.n("action"),
                [e.checked || e.isIndeterminate, e.n("--checked"), e.n("--unchecked")],
                [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                [e.formDisabled || e.disabled, e.n("--disabled")]
              )
            ),
            style: X({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor }),
            tabindex: e.disabled || e.formDisabled ? void 0 : "0",
            onFocus: n[0] || (n[0] = (l) => e.isFocusing = !0),
            onBlur: n[1] || (n[1] = (l) => e.isFocusing = !1)
          }, [
            e.isIndeterminate ? A(e.$slots, "indeterminate-icon", { key: 0 }, () => [
              G(o, {
                class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "minus-box",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : q("v-if", !0),
            e.checked && !e.isIndeterminate ? A(e.$slots, "checked-icon", { key: 1 }, () => [
              G(o, {
                class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "checkbox-marked",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : q("v-if", !0),
            !e.checked && !e.isIndeterminate ? A(e.$slots, "unchecked-icon", { key: 2 }, () => [
              G(o, {
                class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "checkbox-blank-outline",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : q("v-if", !0),
            G(t, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ], 46, Zy)), [
            [a, e.handleHovering, "desktop"],
            [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]
          ]),
          e.$slots.default ? (h(), S(
            "div",
            {
              key: 0,
              class: v(
                e.classes(
                  e.n("text"),
                  [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              ),
              onClick: n[2] || (n[2] = (...l) => e.handleTextClick && e.handleTextClick(...l))
            },
            [
              A(e.$slots, "default", { checked: e.checked })
            ],
            2
            /* CLASS */
          )) : q("v-if", !0)
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
const Gf = _({
  name: qy,
  directives: { Ripple: nn, Hover: In },
  components: {
    VarIcon: Ze,
    VarFormDetails: zn,
    VarHoverOverlay: Rn
  },
  props: qf,
  setup(e) {
    const n = $(null), o = $(!1), t = Kn(e, "modelValue"), r = Kn(e, "indeterminate"), a = I(() => t.value === e.checkedValue), i = I(() => e.checkedValue), l = $(!1), { checkboxGroup: s, bindCheckboxGroup: u } = Ky(), { hovering: c, handleHovering: d } = _n(), { form: f, bindForm: p } = Fn(), {
      errorMessage: g,
      validateWithTrigger: m,
      validate: k,
      // expose
      resetValidation: w
    } = Ln(), y = {
      checkedValue: i,
      checked: a,
      sync: B,
      validate: U,
      resetValidation: w,
      reset: E,
      resetWithAnimation: T
    };
    C(u, y), C(p, y), je(() => window, "keydown", R), je(() => window, "keyup", W);
    function b(H) {
      Ue(() => {
        const { validateTrigger: Y, rules: j, modelValue: le } = e;
        m(Y, H, j, le);
      });
    }
    function P(H) {
      const { checkedValue: Y, onChange: j } = e;
      t.value = H, r.value = !1, C(j, t.value), b("onChange"), H === Y ? s == null || s.onChecked(Y) : s == null || s.onUnchecked(Y);
    }
    function z(H) {
      const { disabled: Y, readonly: j, checkedValue: le, uncheckedValue: ee, onClick: pe } = e;
      if (f != null && f.disabled.value || Y || (C(pe, H), f != null && f.readonly.value || j))
        return;
      l.value = !0;
      const ye = s ? s.checkedCount.value >= Number(s.max.value) : !1;
      !a.value && ye || P(a.value ? ee : le);
    }
    function O() {
      n.value.focus();
    }
    function B(H) {
      const { checkedValue: Y, uncheckedValue: j } = e;
      t.value = H.includes(Y) ? Y : j;
    }
    function T() {
      l.value = !1;
    }
    function E() {
      t.value = e.uncheckedValue, w();
    }
    function M(H) {
      const { checkedValue: Y, uncheckedValue: j } = e;
      ![Y, j].includes(H) && (H = a.value ? j : Y), P(H);
    }
    function R(H) {
      if (!o.value)
        return;
      const { key: Y } = H;
      (Y === "Enter" || Y === " ") && Ve(H), Y === "Enter" && n.value.click();
    }
    function W(H) {
      o.value && H.key === " " && (Ve(H), n.value.click());
    }
    function U() {
      return k(e.rules, e.modelValue);
    }
    return {
      action: n,
      isFocusing: o,
      isIndeterminate: r,
      withAnimation: l,
      checked: a,
      errorMessage: g,
      checkboxGroupErrorMessage: s == null ? void 0 : s.errorMessage,
      formDisabled: f == null ? void 0 : f.disabled,
      formReadonly: f == null ? void 0 : f.readonly,
      hovering: c,
      n: Xy,
      classes: Gy,
      handleHovering: d,
      handleClick: z,
      handleTextClick: O,
      toggle: M,
      reset: E,
      validate: U,
      resetValidation: w
    };
  }
});
Gf.render = Jy;
var ra = Gf;
te(ra);
ae(ra, qf);
const v5 = ra;
var st = ra;
const Zf = Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function Qy() {
  const { length: e, childProviders: n, bindChildren: o } = bn(
    Zf
  );
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: o
  };
}
function _y() {
  const { index: e, parentProvider: n, bindParent: o } = gn(
    Zf
  );
  return o || Vn("MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: o
  };
}
const Jf = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  // internal
  option: Object
}, { name: xy, n: e1, classes: n1 } = x("menu-option"), o1 = ["tabindex"];
function t1(e, n) {
  const o = Q("var-checkbox"), t = Q("maybe-v-node"), r = Q("var-hover-overlay"), a = Ye("ripple"), i = Ye("hover");
  return Ae((h(), S("div", {
    ref: "root",
    class: v(
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
        class: v(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")]))
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
    }, null, 8, ["modelValue", "disabled", "onChange"])) : q("v-if", !0),
    A(e.$slots, "default", {}, () => [
      N(
        "div",
        {
          class: v(e.classes(e.n("text")))
        },
        [
          G(t, {
            class: v(e.n("$--ellipsis")),
            is: e.labelVNode
          }, null, 8, ["class", "is"])
        ],
        2
        /* CLASS */
      )
    ]),
    G(r, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 42, o1)), [
    [a, { disabled: e.disabled || !e.ripple }],
    [i, e.handleHovering, "desktop"]
  ]);
}
const Qf = _({
  name: xy,
  directives: { Ripple: nn, Hover: In },
  components: {
    VarCheckbox: st,
    VarHoverOverlay: Rn,
    MaybeVNode: Qt
  },
  props: Jf,
  setup(e) {
    const n = $(), o = $(!1), t = $(!1), r = I(() => t.value), a = I(
      () => {
        var z;
        return Dn(e.label) ? e.label(
          (z = e.option) != null ? z : {
            label: e.label,
            value: e.value,
            disabled: e.disabled,
            ripple: e.ripple
          },
          t.value
        ) : e.label;
      }
    ), i = I(() => e.value), { menuSelect: l, bindMenuSelect: s } = _y(), { size: u, multiple: c, onSelect: d, computeLabel: f } = l, { hovering: p, handleHovering: g } = _n(), m = {
      label: a,
      value: i,
      selected: r,
      sync: P
    };
    de([() => e.label, () => e.value], f), s(m), je(() => window, "keydown", w), je(() => window, "keyup", y);
    function k() {
      e.disabled || b();
    }
    function w(z) {
      o.value && ((z.key === " " || z.key === "Enter") && Ve(z), z.key === "Enter" && n.value.click());
    }
    function y(z) {
      o.value && z.key === " " && (Ve(z), n.value.click());
    }
    function b() {
      c.value && (t.value = !t.value), d(m);
    }
    function P(z) {
      t.value = z;
    }
    return {
      root: n,
      optionSelected: t,
      size: u,
      multiple: c,
      hovering: p,
      isFocusing: o,
      labelVNode: a,
      n: e1,
      classes: n1,
      handleHovering: g,
      handleClick: k,
      handleSelect: b
    };
  }
});
Qf.render = t1;
var aa = Qf;
te(aa);
ae(aa, Jf);
const p5 = aa;
var ut = aa, r1 = Object.defineProperty, a1 = Object.defineProperties, i1 = Object.getOwnPropertyDescriptors, Ku = Object.getOwnPropertySymbols, l1 = Object.prototype.hasOwnProperty, s1 = Object.prototype.propertyIsEnumerable, qu = (e, n, o) => n in e ? r1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, u1 = (e, n) => {
  for (var o in n || (n = {}))
    l1.call(n, o) && qu(e, o, n[o]);
  if (Ku)
    for (var o of Ku(n))
      s1.call(n, o) && qu(e, o, n[o]);
  return e;
}, c1 = (e, n) => a1(e, i1(n));
const _f = c1(u1({
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
  "onUpdate:modelValue": V()
}, De(Ns, [
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
  onKeyEscape: V()
  // internal end
});
function xf(e) {
  const {
    multiple: n,
    modelValue: o,
    optionProviders: t,
    optionProvidersLength: r
  } = e, a = $(""), i = $([]);
  de(o, d, { deep: !0 }), de(r, d);
  function l() {
    const f = n(), p = o();
    f && (i.value = p.map(s)), !f && !Zn(p) && (a.value = s(p)), !f && Zn(p) && (a.value = "");
  }
  function s(f) {
    var p;
    const g = t();
    let m = g.find(({ value: k }) => k.value === f);
    return m || (m = g.find(({ label: k }) => k.value === f)), (p = m == null ? void 0 : m.label.value) != null ? p : "";
  }
  function u({ value: f, label: p }) {
    var g;
    return (g = f.value) != null ? g : p.value;
  }
  function c(f) {
    const p = n(), g = t();
    return p ? g.filter(({ selected: m }) => m.value).map(u) : u(f);
  }
  function d() {
    const f = n(), p = o(), g = t();
    f ? g.forEach((m) => m.sync(p.includes(u(m)))) : g.forEach((m) => m.sync(p === u(m))), l();
  }
  return {
    label: a,
    labels: i,
    computeLabel: l,
    getSelectedValue: c
  };
}
const { name: d1, n: f1, classes: v1 } = x("menu-select");
function p1(e, n) {
  const o = Q("var-menu-option"), t = Q("var-menu");
  return h(), Ce(t, {
    ref: "menu",
    tabindex: "-1",
    class: v(e.n()),
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
    menu: ce(() => [
      N(
        "div",
        {
          ref: "menuOptionsRef",
          class: v(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
        },
        [
          e.options.length ? (h(!0), S(
            Ne,
            { key: 0 },
            Ke(e.options, (r) => (h(), Ce(o, {
              key: r[e.valueKey],
              label: r[e.labelKey],
              value: r[e.valueKey],
              option: r,
              ripple: r.ripple,
              disabled: r.disabled
            }, null, 8, ["label", "value", "option", "ripple", "disabled"]))),
            128
            /* KEYED_FRAGMENT */
          )) : q("v-if", !0),
          A(e.$slots, "options")
        ],
        2
        /* CLASS */
      )
    ]),
    default: ce(() => [
      A(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "disabled", "trigger", "reference", "placement", "strategy", "offset-x", "offset-y", "teleport", "same-width", "elevation", "popover-class", "close-on-click-reference", "show", "onOpen", "onOpened", "onClose", "onClosed", "onClickOutside"]);
}
const ev = _({
  name: d1,
  components: { VarMenu: Rt, VarMenuOption: ut },
  props: _f,
  setup(e) {
    const n = $(null), o = $(null), t = Kn(e, "show"), { menuOptions: r, length: a, bindMenuOptions: i } = Qy(), { computeLabel: l, getSelectedValue: s } = xf({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => r,
      optionProvidersLength: () => a.value
    }), u = {
      size: I(() => e.size),
      multiple: I(() => e.multiple),
      computeLabel: l,
      onSelect: c
    };
    i(u), je(() => window, "keydown", d);
    function c(m) {
      const { multiple: k, closeOnSelect: w } = e;
      C(e["onUpdate:modelValue"], s(m)), !k && w && (n.value.$el.focus(), p());
    }
    function d(m) {
      if (e.disabled || !t.value)
        return;
      const { key: k } = m;
      if (["Escape", "ArrowDown", "ArrowUp"].includes(k) && Ve(m), k === "Escape") {
        n.value.$el.focus(), p(), C(e.onKeyEscape);
        return;
      }
      (k === "ArrowDown" || k === "ArrowUp") && af(n.value.$el, o.value, k);
    }
    function f() {
      var m;
      (m = n.value) == null || m.open();
    }
    function p() {
      var m;
      (m = n.value) == null || m.close();
    }
    function g() {
      var m;
      (m = n.value) == null || m.resize();
    }
    return {
      show: t,
      menu: n,
      menuOptionsRef: o,
      n: f1,
      classes: v1,
      formatElevation: un,
      open: f,
      close: p,
      resize: g
    };
  }
});
ev.render = p1;
var ia = ev;
te(ia);
ae(ia, _f);
const m5 = ia;
var Lt = ia, m1 = Object.defineProperty, Xu = Object.getOwnPropertySymbols, h1 = Object.prototype.hasOwnProperty, g1 = Object.prototype.propertyIsEnumerable, Gu = (e, n, o) => n in e ? m1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, b1 = (e, n) => {
  for (var o in n || (n = {}))
    h1.call(n, o) && Gu(e, o, n[o]);
  if (Xu)
    for (var o of Xu(n))
      g1.call(n, o) && Gu(e, o, n[o]);
  return e;
};
const nv = b1({
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
  onFocus: V(),
  onBlur: V(),
  onInput: V(),
  onChange: V(),
  onClear: V(),
  onClick: V(),
  "onUpdate:modelValue": V()
}, De(Ms, [
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
var sr = (e, n, o) => new Promise((t, r) => {
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
const { name: y1, n: k1 } = x("auto-complete"), $1 = ["tabindex"];
function w1(e, n) {
  const o = Q("var-input"), t = Q("var-menu-option"), r = Q("var-menu-select"), a = Q("var-form-details");
  return h(), S("div", {
    ref: "root",
    class: v(e.n()),
    tabindex: e.disabled || e.formDisabled ? void 0 : "0",
    onFocusin: n[2] || (n[2] = (...i) => e.focus && e.focus(...i)),
    onClick: n[3] || (n[3] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    G(r, {
      "same-width": "",
      "auto-complete-cover": "",
      scrollable: "",
      trigger: "manual",
      placement: "bottom",
      disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
      class: v(e.n("menu-select")),
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
            class: v(e.n("options"))
          },
          [
            (h(!0), S(
              Ne,
              null,
              Ke(e.viewOptions, (i) => (h(), Ce(t, {
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
        G(o, He({ ref: "input" }, {
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
        }), tt({
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: ce(() => [
              A(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots["append-icon"] ? {
            name: "append-icon",
            fn: ce(() => [
              A(e.$slots, "append-icon")
            ]),
            key: "1"
          } : void 0,
          e.$slots["clear-icon"] ? {
            name: "clear-icon",
            fn: ce(({ clear: i }) => [
              A(e.$slots, "clear-icon", { clear: i })
            ]),
            key: "2"
          } : void 0,
          e.$slots["extra-message"] ? {
            name: "extra-message",
            fn: ce(() => [
              A(e.$slots, "extra-message")
            ]),
            key: "3"
          } : void 0
        ]), 1040, ["is-force-focusing-effect", "is-force-error-effect", "onInput", "onBlur", "onClear", "onChange", "modelValue"])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["disabled", "class", "popover-class", "show", "onUpdate:modelValue", "onKeyEscape"]),
    G(a, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText
    }, null, 8, ["error-message", "extra-message"])
  ], 42, $1);
}
const ov = _({
  name: y1,
  components: {
    VarInput: Nt,
    VarMenuSelect: Lt,
    VarMenuOption: ut,
    VarFormDetails: zn
  },
  props: nv,
  setup(e) {
    const n = $(), o = $(), t = $(!1), r = Kn(e, "modelValue"), a = $([]), i = $(!1), l = I(() => {
      const { maxlength: Y } = e;
      return Y ? Zn(r.value) ? `0 / ${Y}` : `${String(r.value).length}/${Y}` : "";
    }), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: c,
      // expose
      resetValidation: d
    } = Ln(), { bindForm: f, form: p } = Fn();
    let g = !1;
    const m = {
      reset: k,
      resetValidation: d,
      validate: w
    };
    ws(
      () => n.value,
      "click",
      () => {
        if (g) {
          g = !1;
          return;
        }
        b();
      }
    ), de(() => [e.options, t.value], B), C(f, m), je(() => window, "keydown", O);
    function k() {
      C(e["onUpdate:modelValue"], ""), d();
    }
    function w() {
      return c(e.rules, e.modelValue);
    }
    function y() {
      t.value || e.disabled || p != null && p.disabled.value || (t.value = !0, o.value.focus(), C(e.onFocus), z("onFocus"));
    }
    function b() {
      t.value && (t.value = !1, i.value = !1, o.value.blur(), C(e.onBlur), z("onBlur"));
    }
    function P() {
      i.value || b();
    }
    function z(Y) {
      Ue(() => {
        const { validateTrigger: j, rules: le, modelValue: ee } = e;
        u(j, Y, le, ee);
      });
    }
    function O(Y) {
      return sr(this, null, function* () {
        var j;
        if (p != null && p.disabled.value || p != null && p.readonly.value || e.disabled || e.readonly || !t.value || !i.value)
          return;
        const { key: le } = Y;
        if (le === "Tab") {
          Ve(Y), n.value.focus(), i.value = !1;
          return;
        }
        if (!["ArrowUp", "ArrowDown", "Enter"].includes(le)) {
          o.value.focus();
          return;
        }
        le === "Enter" && (yield nt(), (j = o.value) == null || j.focus());
      });
    }
    function B() {
      return sr(this, null, function* () {
        t.value && (i.value = H(r.value)), i.value && (a.value = e.options);
      });
    }
    function T(Y, j) {
      return sr(this, null, function* () {
        B(), C(e.onInput, Y, j), z("onInput");
      });
    }
    function E() {
      g = !0, B(), C(e.onClear, r.value), z("onClear");
    }
    function M(Y) {
      e.disabled || p != null && p.disabled.value || (C(e.onClick, Y), z("onClick"));
    }
    function R(Y) {
      C(e.onChange, Y), z("onChange");
    }
    function W(Y) {
      return sr(this, null, function* () {
        var j;
        e.maxlength != null && (Y = Y.slice(0, L(e.maxlength))), Y !== r.value && (r.value = Y, C(e.onChange, Y), z("onChange")), yield nt(), (j = o.value) == null || j.focus();
      });
    }
    function U() {
      o.value.focus();
    }
    function H(Y) {
      return e.disabled || e.readonly || p != null && p.disabled.value || p != null && p.readonly.value ? !1 : e.options.length > 0 && (e.getShow != null ? e.getShow(Y) : Y.length > 0);
    }
    return {
      root: n,
      input: o,
      value: r,
      isShowMenuSelect: i,
      viewOptions: a,
      isFocusing: t,
      formDisabled: p == null ? void 0 : p.disabled,
      formReadonly: p == null ? void 0 : p.readonly,
      errorMessage: s,
      maxlengthText: l,
      n: k1,
      handleInput: T,
      handleClear: E,
      handleClick: M,
      handleChange: R,
      handleBlur: P,
      handleKeyEscape: U,
      handleAutoComplete: W,
      reset: k,
      validate: w,
      resetValidation: d,
      blur: b,
      focus: y
    };
  }
});
ov.render = w1;
var la = ov;
te(la);
ae(la, nv);
const h5 = la;
var Gi = la;
const Zu = (e) => mn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, Ju = (e) => mn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, C1 = (e) => {
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
}, Zi = (e) => e, Qu = (e) => e ** 3, tv = (e) => e < 0.5 ? Qu(e * 2) / 2 : 1 - Qu((1 - e) * 2) / 2, jo = (e, n, o = "") => {
  if (e === void 0 && (e = ""), e.length >= n)
    return e;
  const t = n - e.length, r = Math.floor(t / o.length);
  return o.repeat(r) + o.slice(0, t % o.length) + e;
};
var S1 = Object.defineProperty, _u = Object.getOwnPropertySymbols, P1 = Object.prototype.hasOwnProperty, z1 = Object.prototype.propertyIsEnumerable, xu = (e, n, o) => n in e ? S1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, O1 = (e, n) => {
  for (var o in n || (n = {}))
    P1.call(n, o) && xu(e, o, n[o]);
  if (_u)
    for (var o of _u(n))
      z1.call(n, o) && xu(e, o, n[o]);
  return e;
}, sa = (e, n, o) => new Promise((t, r) => {
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
const T1 = "background-image", E1 = "lazy-loading", I1 = "lazy-error", ec = "lazy-attempt", B1 = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Ji = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", ct = [], Br = [], rv = C1(100), dn = {
  loading: Ji,
  error: Ji,
  attempt: 3,
  throttleWait: 300,
  events: B1
};
let Us = $s(nr, dn.throttleWait);
function ua(e, n) {
  e._lazy.arg === T1 ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function D1(e) {
  e._lazy.loading && ua(e, e._lazy.loading), nr();
}
function M1(e) {
  e._lazy.error && ua(e, e._lazy.error), e._lazy.state = "error", js(e), nr();
}
function av(e, n) {
  ua(e, n), e._lazy.state = "success", js(e), nr();
}
function N1(e) {
  var n;
  Br.includes(e) || (Br.push(e), (n = dn.events) == null || n.forEach((o) => {
    e.addEventListener(o, Us, { passive: !0 });
  }));
}
function A1() {
  Br.forEach((e) => {
    var n;
    (n = dn.events) == null || n.forEach((o) => {
      e.removeEventListener(o, Us);
    });
  }), Br.length = 0;
}
function V1(e, n) {
  var o, t;
  const r = {
    loading: (o = e.getAttribute(E1)) != null ? o : dn.loading,
    error: (t = e.getAttribute(I1)) != null ? t : dn.error,
    attempt: e.getAttribute(ec) ? Number(e.getAttribute(ec)) : dn.attempt
  };
  e._lazy = O1({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), ua(e, Ji), C(dn.filter, e._lazy);
}
function R1(e, n) {
  const o = new Image();
  o.src = n, e._lazy.preloadImage = o, o.addEventListener("load", () => {
    e._lazy.attemptLock = !1, rv.add(n), av(e, n);
  }), o.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? M1(e) : iv(e);
  });
}
function iv(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (rv.has(n)) {
    av(e, n), e._lazy.attemptLock = !1;
    return;
  }
  D1(e), R1(e, n);
}
function Ys(e) {
  return sa(this, null, function* () {
    yield kn(), fg(e) && iv(e);
  });
}
function nr() {
  ct.forEach((e) => Ys(e));
}
function L1(e) {
  return sa(this, null, function* () {
    !ct.includes(e) && ct.push(e), eb(e).forEach(N1), yield Ys(e);
  });
}
function js(e) {
  rt(ct, e), ct.length === 0 && A1();
}
function F1(e, n) {
  const { src: o, arg: t } = e._lazy;
  return o !== n.value || t !== n.arg;
}
function lv(e, n) {
  return sa(this, null, function* () {
    V1(e, n), yield L1(e);
  });
}
function H1(e, n) {
  return sa(this, null, function* () {
    if (!F1(e, n)) {
      ct.includes(e) && (yield Ys(e));
      return;
    }
    yield lv(e, n);
  });
}
function U1(e = {}) {
  const { events: n, loading: o, error: t, attempt: r, throttleWait: a, filter: i } = e;
  dn.events = n ?? dn.events, dn.loading = o ?? dn.loading, dn.error = t ?? dn.error, dn.attempt = r ?? dn.attempt, dn.throttleWait = a ?? dn.throttleWait, dn.filter = i;
}
const sv = {
  mounted: lv,
  unmounted: js,
  updated: H1,
  install(e, n) {
    U1(n), Us = $s(nr, dn.throttleWait), e.directive("lazy", this);
  }
}, g5 = sv;
var Ft = sv;
const uv = {
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
  onClick: V(),
  onLoad: V(),
  onError: V()
}, Y1 = (e) => ["mini", "small", "normal", "large"].includes(e), { name: j1, n: W1, classes: K1 } = x("avatar"), q1 = ["src", "alt", "lazy-loading", "lazy-error"], X1 = ["src", "alt"];
function G1(e, n) {
  const o = Ye("lazy");
  return h(), S(
    "div",
    {
      ref: "avatarElement",
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.isInternalSize(e.size), e.n(`--${e.size}`)],
          [e.round, e.n("--round")],
          [e.bordered, e.n("--bordered")],
          [e.hoverable, e.n("--hoverable")]
        )
      ),
      style: X({
        width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      e.src ? (h(), S(
        Ne,
        { key: 0 },
        [
          e.lazy ? Ae((h(), S("img", {
            key: 0,
            role: "img",
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: X({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...t) => e.handleLoad && e.handleLoad(...t))
          }, null, 46, q1)), [
            [o, e.src]
          ]) : (h(), S("img", {
            key: 1,
            role: "img",
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: X({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...t) => e.handleLoad && e.handleLoad(...t)),
            onError: n[2] || (n[2] = (...t) => e.handleError && e.handleError(...t))
          }, null, 46, X1))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (h(), S(
        "div",
        {
          key: 1,
          ref: "textElement",
          class: v(e.n("text")),
          style: X({ transform: `scale(${e.scale})` })
        },
        [
          A(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const cv = _({
  name: j1,
  directives: { Lazy: Ft },
  props: uv,
  setup(e) {
    const n = $(null), o = $(null), t = $(1);
    hn(r), Gt(r);
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
      scale: t,
      n: W1,
      classes: K1,
      isInternalSize: Y1,
      toSizeUnit: ze,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
cv.render = G1;
var ca = cv;
te(ca);
ae(ca, uv);
const b5 = ca;
var Qi = ca;
const dv = {
  offset: [Number, String],
  vertical: Boolean
}, { name: Z1, n: J1, classes: Q1 } = x("avatar-group");
function _1(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: X(e.rootStyles)
    },
    [
      A(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const fv = _({
  name: Z1,
  props: dv,
  setup(e) {
    return {
      rootStyles: I(() => e.offset == null ? {} : {
        "--avatar-group-offset": ze(e.offset)
      }),
      n: J1,
      classes: Q1
    };
  }
});
fv.render = _1;
var da = fv;
te(da);
ae(da, dv);
const y5 = da;
var _i = da;
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
}, { name: x1, n: ek, classes: nk } = x("loading");
function ok(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      e.$slots.default ? (h(), S(
        "div",
        {
          key: 0,
          class: v(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
        },
        [
          A(e.$slots, "default"),
          e.loading ? (h(), S(
            "div",
            {
              key: 0,
              class: v(e.n("content-mask"))
            },
            null,
            2
            /* CLASS */
          )) : q("v-if", !0)
        ],
        2
        /* CLASS */
      )) : q("v-if", !0),
      e.isShow ? (h(), S(
        "div",
        {
          key: 1,
          class: v(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
        },
        [
          e.type === "circle" ? (h(), S(
            "div",
            {
              key: 0,
              class: v(e.n("circle"))
            },
            [
              N(
                "span",
                {
                  class: v(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
                  style: X({
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
          )) : q("v-if", !0),
          (h(!0), S(
            Ne,
            null,
            Ke(e.loadingTypeDict, (o, t) => (h(), S(
              Ne,
              { key: t },
              [
                e.type === t ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: v(e.classes(e.n(t), e.n(`${t}--${e.size}`)))
                  },
                  [
                    (h(!0), S(
                      Ne,
                      null,
                      Ke(o, (r) => (h(), S(
                        "div",
                        {
                          key: r + t,
                          style: X({ backgroundColor: e.color }),
                          class: v(e.classes(e.n(`${t}-item`), e.n(`${t}-item--${e.size}`)))
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
                )) : q("v-if", !0)
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
              class: v(e.classes(e.n("description"), e.n(`description--${e.size}`))),
              style: X({ color: e.color })
            },
            [
              A(e.$slots, "description", {}, () => [
                Be(
                  ie(e.description),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : q("v-if", !0)
        ],
        2
        /* CLASS */
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const vv = _({
  name: x1,
  props: lo,
  setup(e, { slots: n }) {
    const o = I(() => C(n.default) ? e.loading : !0);
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: o,
      n: ek,
      classes: nk,
      multiplySizeUnit: Cn
    };
  }
});
vv.render = ok;
var fa = vv;
te(fa);
ae(fa, lo);
const k5 = fa;
var dt = fa, tk = Object.defineProperty, rk = Object.defineProperties, ak = Object.getOwnPropertyDescriptors, nc = Object.getOwnPropertySymbols, ik = Object.prototype.hasOwnProperty, lk = Object.prototype.propertyIsEnumerable, oc = (e, n, o) => n in e ? tk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, tc = (e, n) => {
  for (var o in n || (n = {}))
    ik.call(n, o) && oc(e, o, n[o]);
  if (nc)
    for (var o of nc(n))
      lk.call(n, o) && oc(e, o, n[o]);
  return e;
}, rc = (e, n) => rk(e, ak(n));
const pv = {
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
  loadingSize: rc(tc({}, De(lo, "size")), {
    default: void 0
  }),
  loadingColor: rc(tc({}, De(lo, "color")), {
    default: "currentColor"
  }),
  onClick: V(),
  onTouchstart: V()
}, mv = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function sk() {
  const { bindChildren: e, childProviders: n, length: o } = bn(mv);
  return {
    length: o,
    buttons: n,
    bindButtons: e
  };
}
function uk() {
  const { bindParent: e, parentProvider: n, index: o } = gn(mv);
  return {
    index: o,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: ck, n: dk, classes: fk } = x("button"), vk = ["tabindex", "type", "disabled"];
function pk(e, n) {
  const o = Q("var-loading"), t = Q("var-hover-overlay"), r = Ye("ripple"), a = Ye("hover");
  return Ae((h(), S("button", {
    class: v(
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
    style: X({
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
      class: v(e.n("loading")),
      "var-button-cover": "",
      color: e.loadingColor,
      type: e.loadingType,
      size: e.loadingSize || e.states.size,
      radius: e.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : q("v-if", !0),
    N(
      "div",
      {
        class: v(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [
        A(e.$slots, "default")
      ],
      2
      /* CLASS */
    ),
    G(t, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, vk)), [
    [r, { disabled: e.disabled || !e.ripple || e.loading || e.pending }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const hv = _({
  name: ck,
  components: {
    VarLoading: dt,
    VarHoverOverlay: Rn
  },
  directives: { Ripple: nn, Hover: In },
  props: pv,
  setup(e) {
    const n = $(!1), o = $(!1), { buttonGroup: t } = uk(), { hovering: r, handleHovering: a } = _n(), i = I(() => {
      var d, f, p, g, m, k;
      if (!t)
        return {
          elevation: un(e.elevation, 2),
          type: (d = e.type) != null ? d : "default",
          size: (f = e.size) != null ? f : "normal",
          color: e.color,
          text: e.text,
          textColor: e.textColor,
          outline: e.outline,
          iconContainer: e.iconContainer
        };
      const { type: w, size: y, color: b, textColor: P, mode: z } = t;
      return {
        elevation: "",
        type: (p = e.type) != null ? p : w.value,
        size: (g = e.size) != null ? g : y.value,
        color: (m = e.color) != null ? m : b.value,
        textColor: (k = e.textColor) != null ? k : P.value,
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
      const { loading: f, disabled: p, onClick: g } = e;
      !g || f || p || o.value || l(C(g, d));
    }
    function u(d) {
      const { loading: f, disabled: p, onTouchstart: g } = e;
      !g || f || p || o.value || l(C(g, d));
    }
    function c() {
      e.focusable && (n.value = !0);
    }
    return {
      pending: o,
      states: i,
      hovering: r,
      isFocusing: n,
      n: dk,
      classes: fk,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      handleFocus: c
    };
  }
});
hv.render = pk;
var va = hv;
te(va);
ae(va, pv);
const $5 = va;
var On = va;
const gv = {
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
  onClick: V()
}, { name: mk, n: hk, classes: gk } = x("back-top");
function bk(e, n) {
  const o = Q("var-icon"), t = Q("var-button");
  return h(), Ce(oo, {
    to: "body",
    disabled: e.disabled
  }, [
    N(
      "div",
      He({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Wn((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
      }),
      [
        A(e.$slots, "default", {}, () => [
          G(t, {
            elevation: e.elevation,
            type: "primary",
            "var-back-top-cover": ""
          }, {
            default: ce(() => [
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
const bv = _({
  name: mk,
  components: {
    VarButton: On,
    VarIcon: Ze
  },
  inheritAttrs: !1,
  props: gv,
  setup(e) {
    const n = $(!1), o = $(null), t = $(!0);
    let r;
    const a = $s(() => {
      i();
    }, 200);
    Bo(() => {
      s(), u(), i(), t.value = !1;
    }), Do(u), Jt(c);
    function i() {
      n.value = Ho(r) >= xe(e.visibilityHeight);
    }
    function l(d) {
      C(e.onClick, d);
      const f = ks(r);
      Dt(r, {
        left: f,
        duration: e.duration,
        animation: tv
      });
    }
    function s() {
      r = e.target ? tf(e.target, "BackTop") : To(o.value);
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
      toSizeUnit: ze,
      n: hk,
      classes: gk,
      handleClick: l
    };
  }
});
bv.render = bk;
var pa = bv;
te(pa);
ae(pa, gv);
const w5 = pa;
var xi = pa;
const yv = {
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
var yk = Object.defineProperty, ac = Object.getOwnPropertySymbols, kk = Object.prototype.hasOwnProperty, $k = Object.prototype.propertyIsEnumerable, ic = (e, n, o) => n in e ? yk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, wk = (e, n) => {
  for (var o in n || (n = {}))
    kk.call(n, o) && ic(e, o, n[o]);
  if (ac)
    for (var o of ac(n))
      $k.call(n, o) && ic(e, o, n[o]);
  return e;
};
const { name: Ck, n: Sk, classes: Pk } = x("badge"), zk = { key: 0 };
function Ok(e, n) {
  const o = Q("var-icon");
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      A(e.$slots, "default"),
      G(Qe, {
        name: e.n("$-badge-fade"),
        persisted: ""
      }, {
        default: ce(() => [
          Ae(N(
            "span",
            He({
              class: e.classes(
                e.n("content"),
                e.n(`--${e.type}`),
                [e.$slots.default, e.n(`--${e.position}`), e.n("--offset")],
                [e.dot, e.n("--dot")],
                [e.icon, e.n("--icon")]
              ),
              style: wk({ background: e.color }, e.offsetStyle)
            }, e.$attrs),
            [
              e.icon ? (h(), Ce(o, {
                key: 0,
                class: v(e.n("icon")),
                "var-badge-cover": "",
                name: e.icon,
                namespace: e.namespace
              }, null, 8, ["class", "name", "namespace"])) : q("v-if", !0),
              A(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (h(), S(
                  "span",
                  zk,
                  ie(e.value),
                  1
                  /* TEXT */
                )) : q("v-if", !0)
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
const kv = _({
  name: Ck,
  components: { VarIcon: Ze },
  inheritAttrs: !1,
  props: yv,
  setup(e) {
    const n = I(() => {
      const { value: t, maxValue: r } = e;
      return t != null && r != null && L(t) > L(r) ? `${r}+` : t;
    }), o = I(() => ({
      "--badge-offset-y": ze(e.offsetY),
      "--badge-offset-x": ze(e.offsetX)
    }));
    return {
      value: n,
      offsetStyle: o,
      n: Sk,
      classes: Pk
    };
  }
});
kv.render = Ok;
var ma = kv;
te(ma);
ae(ma, yv);
const C5 = ma;
var Dr = ma;
const $v = {
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
  onChange: V(),
  onBeforeChange: V(),
  onFabClick: V(),
  "onUpdate:active": V()
}, wv = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function Tk() {
  const { childProviders: e, length: n, bindChildren: o } = bn(
    wv
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: o
  };
}
var Ek = Object.defineProperty, lc = Object.getOwnPropertySymbols, Ik = Object.prototype.hasOwnProperty, Bk = Object.prototype.propertyIsEnumerable, sc = (e, n, o) => n in e ? Ek(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, uc = (e, n) => {
  for (var o in n || (n = {}))
    Ik.call(n, o) && sc(e, o, n[o]);
  if (lc)
    for (var o of lc(n))
      Bk.call(n, o) && sc(e, o, n[o]);
  return e;
};
const { name: Dk, n: Mk, classes: Nk } = x("bottom-navigation"), { n: ha } = x("bottom-navigation-item"), cc = ha("--right-half-space"), dc = ha("--left-half-space"), fc = ha("--right-space"), Ak = {
  type: "primary"
};
function Vk(e, n) {
  const o = Q("var-button");
  return h(), S(
    Ne,
    null,
    [
      N(
        "div",
        He({
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
          A(e.$slots, "default"),
          e.$slots.fab ? (h(), Ce(o, He({
            key: 0,
            class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
            "var-bottom-navigation__fab": "",
            onClick: e.handleFabClick
          }, e.fabProps), {
            default: ce(() => [
              A(e.$slots, "fab")
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class", "onClick"])) : q("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      ),
      e.fixed && e.placeholder ? (h(), S(
        "div",
        {
          key: 0,
          class: v(e.n("placeholder")),
          style: X({ height: e.placeholderHeight })
        },
        null,
        6
        /* CLASS, STYLE */
      )) : q("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const Cv = _({
  name: Dk,
  components: { VarButton: On },
  props: $v,
  setup(e, { slots: n }) {
    const o = $(null), t = I(() => e.active), r = I(() => e.activeColor), a = I(() => e.inactiveColor), i = I(() => e.variant), l = $(), s = $({}), { length: u, bottomNavigationItems: c, bindBottomNavigationItem: d } = Tk();
    d({
      active: t,
      activeColor: r,
      inactiveColor: a,
      variant: i,
      onToggle: w
    }), de(() => u.value, p), de(
      () => e.fabProps,
      (M) => {
        s.value = uc(uc({}, Ak), M);
      },
      { immediate: !0, deep: !0 }
    ), ro(E), hn(() => {
      E(), n.fab && z(u.value);
    }), Gt(() => {
      P(), n.fab && z(u.value);
    });
    function p() {
      u.value === 0 || g() || m() || k();
    }
    function g() {
      return c.find(({ name: M }) => t.value === M.value);
    }
    function m() {
      return c.find(({ index: M }) => t.value === M.value);
    }
    function k() {
      En(t.value) && (t.value < 0 ? C(e["onUpdate:active"], 0) : t.value > u.value - 1 && C(e["onUpdate:active"], u.value - 1));
    }
    function w(M) {
      t.value !== M && (e.onBeforeChange ? y(M) : b(M));
    }
    function y(M) {
      const R = Co(C(e.onBeforeChange, M));
      Promise.all(R).then((W) => {
        W.every(Boolean) && b(M);
      });
    }
    function b(M) {
      C(e["onUpdate:active"], M), C(e.onChange, M);
    }
    function P() {
      B().forEach((R) => {
        R.classList.remove(cc, dc, fc);
      });
    }
    function z(M) {
      const R = B(), W = R.length, U = M % 2 === 0;
      R.forEach((H, Y) => {
        O(U, H, Y, W);
      });
    }
    function O(M, R, W, U) {
      const H = W === U - 1;
      if (!M && H) {
        R.classList.add(fc);
        return;
      }
      const Y = W === U / 2 - 1, j = W === U / 2;
      Y ? R.classList.add(cc) : j && R.classList.add(dc);
    }
    function B() {
      return Array.from(o.value.querySelectorAll(`.${ha()}`));
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
      n: Mk,
      classes: Nk,
      handleFabClick: T
    };
  }
});
Cv.render = Vk;
var ga = Cv;
te(ga);
ae(ga, $v);
const S5 = ga;
var el = ga;
const Sv = {
  name: String,
  label: String,
  icon: De(en, "name"),
  namespace: De(en, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: V()
};
function Rk() {
  const { parentProvider: e, index: n, bindParent: o } = gn(
    wv
  );
  return o || Vn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: o
  };
}
const { name: Lk, n: Fk, classes: Hk } = x("bottom-navigation-item"), Uk = {
  type: "danger",
  dot: !0
};
function Yk(e, n) {
  const o = Q("var-icon"), t = Q("var-badge"), r = Ye("ripple");
  return Ae((h(), S(
    "button",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")])),
      style: X({
        color: e.isActive ? e.activeColor : e.inactiveColor
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      N(
        "div",
        {
          class: v(
            e.classes(
              e.n("icon-container"),
              [e.variant, e.n("--variant-icon-container")],
              [e.isActive && e.variant, e.n("--variant-active")]
            )
          )
        },
        [
          e.badge ? (h(), Ce(t, He({ key: 0 }, e.badgeProps, {
            class: e.n("badge"),
            "var-bottom-navigation-item-cover": ""
          }), {
            default: ce(() => [
              A(e.$slots, "icon", { active: e.isActive }, () => [
                e.icon ? (h(), Ce(o, {
                  key: 0,
                  name: e.icon,
                  namespace: e.namespace,
                  class: v(e.n("icon")),
                  "var-bottom-navigation-item-cover": ""
                }, null, 8, ["name", "namespace", "class"])) : q("v-if", !0)
              ])
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class"])) : A(e.$slots, "icon", {
            key: 1,
            active: e.isActive
          }, () => [
            e.icon ? (h(), Ce(o, {
              key: 0,
              name: e.icon,
              namespace: e.namespace,
              class: v(e.n("icon")),
              "var-bottom-navigation-item-cover": ""
            }, null, 8, ["name", "namespace", "class"])) : q("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      N(
        "span",
        {
          class: v(e.n("label"))
        },
        [
          A(e.$slots, "default", {}, () => [
            Be(
              ie(e.label),
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
const Pv = _({
  name: Lk,
  components: {
    VarBadge: Dr,
    VarIcon: Ze
  },
  directives: { Ripple: nn },
  props: Sv,
  setup(e) {
    const n = I(() => e.name), o = I(() => [n.value, r.value].includes(l.value)), t = I(() => e.badge === !0 ? Uk : e.badge), { index: r, bottomNavigation: a, bindBottomNavigation: i } = Rk(), { active: l, activeColor: s, inactiveColor: u, variant: c } = a;
    i({
      name: n,
      index: r
    });
    function f() {
      var p;
      const g = (p = n.value) != null ? p : r.value;
      C(e.onClick, g), C(a.onToggle, g);
    }
    return {
      activeColor: s,
      inactiveColor: u,
      badgeProps: t,
      isActive: o,
      variant: c,
      n: Fk,
      classes: Hk,
      handleClick: f
    };
  }
});
Pv.render = Yk;
var ba = Pv;
te(ba);
ae(ba, Sv);
const P5 = ba;
var nl = ba;
const zv = {
  separator: String,
  onClick: V()
}, Ov = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function jk() {
  const { childProviders: e, bindChildren: n, length: o } = bn(
    Ov
  );
  return {
    length: o,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Wk() {
  const { parentProvider: e, bindParent: n, index: o } = gn(
    Ov
  );
  return n || Vn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: o,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: Kk, n: qk, classes: Xk } = x("breadcrumb");
function Gk(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      N(
        "div",
        {
          class: v(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
          onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
        },
        [
          A(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      e.isLast ? q("v-if", !0) : A(e.$slots, "separator", { key: 0 }, () => {
        var o;
        return [
          N(
            "div",
            {
              class: v(e.n("separator")),
              "aria-hidden": "true"
            },
            ie((o = e.separator) != null ? o : e.parentSeparator),
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
const Tv = _({
  name: Kk,
  props: zv,
  setup(e) {
    const { index: n, breadcrumb: o, bindBreadcrumb: t } = Wk(), r = I(() => n.value === o.length.value - 1), a = I(() => o.separator.value);
    t(null);
    function i(l) {
      r.value || C(e.onClick, l);
    }
    return {
      n: qk,
      classes: Xk,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Tv.render = Gk;
var ya = Tv;
te(ya);
ae(ya, zv);
const z5 = ya;
var ol = ya;
const Ev = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: Zk, n: Jk } = x("breadcrumbs");
function Qk(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.n()),
      role: "navigation",
      "aria-label": "Breadcrumbs"
    },
    [
      A(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Iv = _({
  name: Zk,
  props: Ev,
  setup(e) {
    const n = I(() => e.separator), { bindBreadcrumbList: o, length: t } = jk();
    return o({
      length: t,
      separator: n
    }), { n: Jk };
  }
});
Iv.render = Qk;
var ka = Iv;
te(ka);
ae(ka, Ev);
const O5 = ka;
var tl = ka;
const Bv = {
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
}, { name: _k, n: xk, classes: e$ } = x("button-group");
function n$(e, n) {
  return h(), S(
    "div",
    {
      class: v(
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
      A(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Dv = _({
  name: _k,
  props: Bv,
  setup(e) {
    const { bindButtons: n } = sk(), o = {
      elevation: I(() => e.elevation),
      type: I(() => e.type),
      size: I(() => e.size),
      color: I(() => e.color),
      textColor: I(() => e.textColor),
      mode: I(() => e.mode)
    };
    return n(o), {
      n: xk,
      classes: e$,
      formatElevation: un
    };
  }
});
Dv.render = n$;
var $a = Dv;
te($a);
ae($a, Bv);
const T5 = $a;
var rl = $a;
const Mv = {
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
  onClick: V(),
  "onUpdate:floating": V(),
  /**
   * @deprecated use outlined variant instead
   */
  outline: Boolean
};
var vc = (e, n, o) => new Promise((t, r) => {
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
const { name: o$, n: t$, classes: r$ } = x("card"), a$ = 500, i$ = ["src", "alt"];
function l$(e, n) {
  const o = Q("var-icon"), t = Q("var-button"), r = Ye("ripple");
  return Ae((h(), S(
    "div",
    {
      ref: "card",
      class: v(
        e.classes(
          e.n(),
          [e.isRow, e.n("--layout-row")],
          [e.variant === "outlined" || e.outline, e.n("--outline")],
          [e.variant === "filled", e.n("--filled")],
          [e.variant === "standard" || e.outline, e.formatElevation(e.elevation, 1)]
        )
      ),
      style: X({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      N(
        "div",
        {
          ref: "cardFloater",
          class: v(e.n("floater")),
          style: X({
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
          A(e.$slots, "image", {}, () => [
            e.src ? (h(), S("img", {
              key: 0,
              class: v(e.n("image")),
              style: X({
                objectFit: e.fit,
                height: e.toSizeUnit(e.imageHeight),
                width: e.toSizeUnit(e.imageWidth)
              }),
              src: e.src,
              alt: e.alt
            }, null, 14, i$)) : q("v-if", !0)
          ]),
          N(
            "div",
            {
              class: v(e.n("container"))
            },
            [
              A(e.$slots, "title", {
                slotClass: e.n("title")
              }, () => [
                e.title ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("title"))
                  },
                  ie(e.title),
                  3
                  /* TEXT, CLASS */
                )) : q("v-if", !0)
              ]),
              A(e.$slots, "subtitle", {
                slotClass: e.n("subtitle")
              }, () => [
                e.subtitle ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("subtitle"))
                  },
                  ie(e.subtitle),
                  3
                  /* TEXT, CLASS */
                )) : q("v-if", !0)
              ]),
              e.$slots.default ? (h(), S(
                "div",
                {
                  key: 0,
                  class: v(e.n("content"))
                },
                [
                  A(e.$slots, "default")
                ],
                2
                /* CLASS */
              )) : q("v-if", !0),
              A(e.$slots, "description", {
                slotClass: e.n("description")
              }, () => [
                e.description ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("description"))
                  },
                  ie(e.description),
                  3
                  /* TEXT, CLASS */
                )) : q("v-if", !0)
              ]),
              e.$slots.extra ? (h(), S(
                "div",
                {
                  key: 1,
                  class: v(e.n("footer"))
                },
                [
                  A(e.$slots, "extra")
                ],
                2
                /* CLASS */
              )) : q("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (h(), S(
                "div",
                {
                  key: 2,
                  class: v(e.n("floating-content")),
                  style: X({
                    height: e.contentHeight,
                    opacity: e.opacity,
                    transition: `opacity ${e.floatingDuration * 2}ms`
                  })
                },
                [
                  A(e.$slots, "floating-content")
                ],
                6
                /* CLASS, STYLE */
              )) : q("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.showFloatingButtons ? (h(), S(
            "div",
            {
              key: 0,
              class: v(e.classes(e.n("floating-buttons"), e.n("$--box"))),
              style: X({
                zIndex: e.zIndex,
                opacity: e.opacity,
                transition: `opacity ${e.floatingDuration * 2}ms`
              })
            },
            [
              A(e.$slots, "close-button", {}, () => [
                G(t, {
                  "var-card-cover": "",
                  class: v(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
                  onClick: Wn(e.close, ["stop"])
                }, {
                  default: ce(() => [
                    G(o, {
                      "var-card-cover": "",
                      name: "window-close",
                      class: v(e.n("close-button-icon"))
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "onClick"])
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : q("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      ),
      N(
        "div",
        {
          class: v(e.n("holder")),
          style: X({
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
const Nv = _({
  name: o$,
  directives: { Ripple: nn },
  components: {
    VarIcon: Ze,
    VarButton: On
  },
  props: Mv,
  setup(e) {
    const n = $(null), o = $(null), t = $("auto"), r = $("auto"), a = $("100%"), i = $("100%"), l = $("auto"), s = $("auto"), u = $(void 0), c = $("hidden"), d = $("0px"), f = $("0"), p = I(() => e.layout === "row"), g = $(!1), m = $(!1), { zIndex: k } = xt(() => e.floating, 1);
    let w = "auto", y = "auto", b = null;
    const P = $(null);
    _t(
      () => e.floating,
      () => !p.value
    ), de(
      () => e.floating,
      (E) => {
        p.value || Ue(() => {
          E ? z() : O();
        });
      },
      { immediate: !0 }
    );
    function z() {
      return vc(this, null, function* () {
        clearTimeout(P.value), clearTimeout(b), P.value = null, P.value = setTimeout(
          () => vc(this, null, function* () {
            const { width: E, height: M, left: R, top: W } = an(n.value);
            t.value = ze(E), r.value = ze(M), a.value = t.value, i.value = r.value, l.value = ze(W), s.value = ze(R), u.value = "fixed", w = l.value, y = s.value, g.value = !0, yield kn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", d.value = "auto", f.value = "1", c.value = "auto", m.value = !0;
          }),
          e.ripple ? a$ : 0
        );
      });
    }
    function O() {
      clearTimeout(b), clearTimeout(P.value), P.value = null, a.value = t.value, i.value = r.value, l.value = w, s.value = y, d.value = "0px", f.value = "0", g.value = !1, b = setTimeout(() => {
        t.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", w = "auto", y = "auto", c.value = "hidden", u.value = void 0, m.value = !1;
      }, e.floatingDuration);
    }
    function B() {
      C(e["onUpdate:floating"], !1);
    }
    function T(E) {
      C(e.onClick, E);
    }
    return {
      card: n,
      cardFloater: o,
      holderWidth: t,
      holderHeight: r,
      floater: P,
      floaterWidth: a,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: c,
      contentHeight: d,
      opacity: f,
      zIndex: k,
      isRow: p,
      showFloatingButtons: g,
      floated: m,
      n: t$,
      classes: r$,
      toSizeUnit: ze,
      close: B,
      formatElevation: un,
      handleClick: T
    };
  }
});
Nv.render = l$;
var wa = Nv;
te(wa);
ae(wa, Mv);
const E5 = wa;
var al = wa;
const Av = {
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
  onClick: V()
}, { name: s$, n: u$, classes: c$ } = x("cell");
function d$(e, n) {
  const o = Q("var-icon"), t = Ye("ripple");
  return Ae((h(), S(
    "div",
    {
      class: v(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: X(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      A(e.$slots, "icon", {}, () => [
        e.icon ? (h(), S(
          "div",
          {
            key: 0,
            class: v(e.classes(e.n("icon"), e.iconClass))
          },
          [
            G(o, {
              name: e.icon,
              namespace: e.namespace
            }, null, 8, ["name", "namespace"])
          ],
          2
          /* CLASS */
        )) : q("v-if", !0)
      ]),
      N(
        "div",
        {
          class: v(e.n("content"))
        },
        [
          A(e.$slots, "default", {}, () => [
            e.title ? (h(), S(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("title"), e.titleClass))
              },
              ie(e.title),
              3
              /* TEXT, CLASS */
            )) : q("v-if", !0)
          ]),
          A(e.$slots, "description", {}, () => [
            e.description ? (h(), S(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("description"), e.descriptionClass))
              },
              ie(e.description),
              3
              /* TEXT, CLASS */
            )) : q("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      e.$slots.extra ? (h(), S(
        "div",
        {
          key: 0,
          class: v(e.classes(e.n("extra"), e.extraClass))
        },
        [
          A(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: !e.ripple }]
  ]);
}
const Vv = _({
  name: s$,
  components: { VarIcon: Ze },
  directives: { Ripple: nn },
  props: Av,
  setup(e) {
    const n = I(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ze(e.borderOffset),
      "--cell-border-right": ze(e.borderOffset)
    });
    function o(t) {
      C(e.onClick, t);
    }
    return {
      borderOffsetStyles: n,
      n: u$,
      classes: c$,
      toSizeUnit: ze,
      handleClick: o
    };
  }
});
Vv.render = d$;
var Ca = Vv;
te(Ca);
ae(Ca, Av);
const I5 = Ca;
var il = Ca;
const Rv = {
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
  onChange: V(),
  "onUpdate:modelValue": V()
}, { name: f$, n: v$, classes: p$ } = x("checkbox-group");
function m$(e, n) {
  const o = Q("maybe-v-node"), t = Q("var-checkbox"), r = Q("var-form-details");
  return h(), S(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      N(
        "div",
        {
          class: v(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          e.options.length ? (h(!0), S(
            Ne,
            { key: 0 },
            Ke(e.options, (a) => (h(), Ce(t, {
              key: a[e.valueKey],
              "checked-value": a[e.valueKey],
              disabled: a.disabled
            }, {
              default: ce(({ checked: i }) => [
                G(o, {
                  is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey]
                }, null, 8, ["is"])
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["checked-value", "disabled"]))),
            128
            /* KEYED_FRAGMENT */
          )) : q("v-if", !0),
          A(e.$slots, "default")
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
const Lv = _({
  name: f$,
  components: { VarFormDetails: zn, VarCheckbox: st, MaybeVNode: Qt },
  props: Rv,
  setup(e) {
    const n = I(() => e.max), o = I(() => e.modelValue.length), { length: t, checkboxes: r, bindCheckboxes: a } = Wy(), { bindForm: i } = Fn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Ln(), d = I(() => l.value), f = {
      max: n,
      checkedCount: o,
      onChecked: m,
      onUnchecked: k,
      validate: O,
      resetValidation: c,
      reset: z,
      errorMessage: d
    };
    de(() => e.modelValue, w, { deep: !0 }), de(() => t.value, w), a(f), C(i, f);
    function p(B) {
      Ue(() => {
        const { validateTrigger: T, rules: E, modelValue: M } = e;
        s(T, B, E, M);
      });
    }
    function g(B) {
      C(e["onUpdate:modelValue"], B), C(e.onChange, B), p("onChange");
    }
    function m(B) {
      const { modelValue: T } = e;
      T.includes(B) || g([...T, B]);
    }
    function k(B) {
      const { modelValue: T } = e;
      T.includes(B) && g(T.filter((E) => E !== B));
    }
    function w() {
      r.forEach(({ sync: B }) => B(e.modelValue));
    }
    function y() {
      r.forEach((B) => B.resetWithAnimation());
    }
    function b() {
      const B = r.map(({ checkedValue: E }) => E.value), T = au(B);
      return y(), C(e["onUpdate:modelValue"], T), T;
    }
    function P() {
      const B = r.filter(({ checked: E }) => !E.value).map(({ checkedValue: E }) => E.value), T = au(B);
      return y(), C(e["onUpdate:modelValue"], T), T;
    }
    function z() {
      C(e["onUpdate:modelValue"], []), c();
    }
    function O() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: v$,
      classes: p$,
      checkAll: b,
      inverseAll: P,
      reset: z,
      validate: O,
      resetValidation: c,
      isFunction: Dn
    };
  }
});
Lv.render = m$;
var Sa = Lv;
te(Sa);
ae(Sa, Rv);
const B5 = Sa;
var ll = Sa;
const Fv = {
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
  onClose: V()
}, { name: h$, n: vo, classes: g$ } = x("chip");
function b$(e, n) {
  const o = Q("var-icon");
  return h(), Ce(Qe, {
    name: e.n("$-fade")
  }, {
    default: ce(() => [
      N(
        "span",
        He({
          class: e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 1), ...e.contentClass),
          style: e.chipStyle
        }, e.$attrs),
        [
          A(e.$slots, "left"),
          N(
            "span",
            {
              class: v(e.n(`text-${e.size}`))
            },
            [
              A(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          A(e.$slots, "right"),
          e.closeable ? (h(), S(
            "span",
            {
              key: 0,
              class: v(e.n("--close")),
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
          )) : q("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const Hv = _({
  name: h$,
  components: {
    VarIcon: Ze
  },
  inheritAttrs: !1,
  props: Fv,
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
      const { size: r, block: a, type: i, plain: l, round: s } = e, u = vo(a ? "$--flex" : "$--inline-flex"), c = l ? `${vo("plain")} ${vo(`plain-${i}`)}` : vo(`--${i}`), d = s ? vo("--round") : null;
      return [vo(`--${r}`), u, c, d];
    });
    function t(r) {
      C(e.onClose, r);
    }
    return {
      chipStyle: n,
      contentClass: o,
      n: vo,
      classes: g$,
      formatElevation: un,
      handleClose: t
    };
  }
});
Hv.render = b$;
var Pa = Hv;
te(Pa);
ae(Pa, Fv);
const D5 = Pa;
var Mr = Pa;
const Uv = {
  code: {
    type: String,
    default: ""
  },
  language: String,
  theme: String,
  wordWrap: Boolean,
  trim: {
    type: Boolean,
    default: !0
  }
}, sl = Symbol("HIGHLIGHTER_PROVIDER_KEY");
function y$(e) {
  gs(sl, e);
}
function k$() {
  return Cs(sl) ? hs(sl) : { highlighter: null, theme: null };
}
var $$ = (e, n, o) => new Promise((t, r) => {
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
const { name: w$, n: C$, classes: S$ } = x("code"), P$ = ["innerHTML"];
function z$(e, n) {
  return h(), S("div", {
    class: v(e.classes(e.n(), [e.wordWrap, e.n("--word-wrap")])),
    innerHTML: e.highlightedCode
  }, null, 10, P$);
}
const Yv = _({
  name: w$,
  props: Uv,
  setup(e) {
    const { highlighter: n, theme: o } = k$(), t = $(""), r = I(() => {
      var a;
      return (a = e.theme) != null ? a : o == null ? void 0 : o.value;
    });
    return n && de(
      () => [n.value, e.code, e.language, r.value, e.trim],
      (a) => $$(this, [a], function* ([i, l, s = "", u = "", c]) {
        i && (t.value = yield i.codeToHtml(c ? l.trim() : l, { lang: s, theme: u }));
      }),
      { immediate: !0 }
    ), {
      n: C$,
      classes: S$,
      highlightedCode: t
    };
  }
});
Yv.render = z$;
var za = Yv;
te(za);
ae(za, Uv);
const M5 = za;
var ul = za;
const jv = {
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
  onClick: V()
}, Wv = Symbol("ROW_BIND_COL_KEY");
function O$() {
  const { length: e, childProviders: n, bindChildren: o } = bn(Wv);
  return {
    length: e,
    cols: n,
    bindCols: o
  };
}
function T$() {
  const { index: e, bindParent: n, parentProvider: o } = gn(Wv);
  return {
    index: e,
    row: o,
    bindRow: n
  };
}
const { name: E$, n: ur, classes: I$ } = x("col");
function B$(e, n) {
  return h(), S(
    "div",
    {
      class: v(
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
      style: X({
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
      A(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Kv = _({
  name: E$,
  props: jv,
  setup(e) {
    const n = I(() => L(e.span)), o = I(() => L(e.offset)), t = I(() => {
      var s;
      const [u = 0, c = 0] = (s = r == null ? void 0 : r.average.value) != null ? s : [];
      return { left: c, right: c, top: u, bottom: u };
    }), { row: r, bindRow: a } = T$();
    C(a, null);
    function i(s, u) {
      const c = [];
      if (u == null)
        return c;
      if (zo(u)) {
        const { offset: d, span: f } = u;
        return Number(f) >= 0 && c.push(ur(`--span-${s}-${f}`)), d && c.push(ur(`--offset-${s}-${d}`)), c;
      }
      return Number(u) >= 0 && c.push(ur(`--span-${s}-${u}`)), c;
    }
    function l(s) {
      C(e.onClick, s);
    }
    return {
      span: n,
      offset: o,
      padding: t,
      n: ur,
      classes: I$,
      toNumber: L,
      toSizeUnit: ze,
      getSize: i,
      handleClick: l,
      padStartFlex: Ir
    };
  }
});
Kv.render = B$;
var Oa = Kv;
te(Oa);
ae(Oa, jv);
const N5 = Oa;
var cl = Oa;
const qv = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function D$() {
  const { childProviders: e, length: n, bindChildren: o } = bn(
    qv
  );
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: o
  };
}
const Xv = {
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
  onChange: V(),
  "onUpdate:modelValue": V()
}, { name: M$, n: N$ } = x("collapse");
function A$(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      A(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Gv = _({
  name: M$,
  props: Xv,
  setup(e) {
    const n = I(() => e.offset), o = I(() => e.divider), t = I(() => e.elevation), r = I(() => e.accordion), a = I(() => Co(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = D$(), u = {
      offset: n,
      divider: o,
      elevation: t,
      accordion: r,
      updateItem: c
    };
    de(
      () => i.value,
      () => Ue().then(p)
    ), de(
      () => e.modelValue,
      () => Ue().then(p)
    ), s(u);
    function c(m, k) {
      if (e.accordion) {
        d(k ? m : void 0);
        return;
      }
      const w = k ? [...a.value, m] : a.value.filter((y) => y !== m);
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
        const y = l.find(({ name: b }) => w === b.value);
        return y ?? l.find(({ index: b, name: P }) => P.value == null && w === b.value);
      }
      const m = l.filter(
        ({ name: w }) => w.value != null && a.value.includes(w.value)
      ), k = l.filter(
        ({ index: w, name: y }) => y.value == null && a.value.includes(w.value)
      );
      return [...m, ...k];
    }
    function p() {
      const m = sg(Co(f()));
      l.forEach((k) => {
        k.init(m.includes(k));
      });
    }
    return {
      divider: o,
      n: N$,
      toggleAll: (m) => {
        if (e.accordion) return;
        const w = l.filter((y) => {
          var b;
          const P = (b = y.name.value) != null ? b : y.index.value, z = a.value.includes(P);
          return m.skipDisabled && y.disabled.value ? z : m.expand === "inverse" ? !z : m.expand;
        }).map((y) => {
          var b;
          return (b = y.name.value) != null ? b : y.index.value;
        });
        d(w);
      }
    };
  }
});
Gv.render = A$;
var Ta = Gv;
te(Ta);
ae(Ta, Xv);
const A5 = Ta;
var dl = Ta;
function V$() {
  const { parentProvider: e, index: n, bindParent: o } = gn(
    qv
  );
  return o || Vn("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: o
  };
}
const Zv = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
var pc = (e, n, o) => new Promise((t, r) => {
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
function Jv(e) {
  const { contentEl: n, showContent: o, expand: t } = e;
  let r = !0;
  de(
    t,
    (u) => {
      Ue(() => {
        u ? a() : i();
      });
    },
    { immediate: !0 }
  );
  function a() {
    return pc(this, null, function* () {
      if (!n.value || (n.value.style.height = "", o.value = !0, yield nt(), !n.value))
        return;
      const { offsetHeight: u } = n.value;
      n.value.style.height = "0px", yield nt(), n.value && (n.value.style.height = u + "px", r && (yield kn(), r && l()));
    });
  }
  const i = () => pc(this, null, function* () {
    if (!n.value)
      return;
    const { offsetHeight: u } = n.value;
    n.value.style.height = u + "px", yield nt(), n.value.style.height = "0px";
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
const { name: R$, n: L$, classes: F$ } = x("collapse-item"), H$ = ["aria-expanded", "aria-disabled", "role"];
function U$(e, n) {
  const o = Q("var-icon");
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: X(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
    },
    [
      N(
        "div",
        {
          class: v(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
        },
        null,
        2
        /* CLASS */
      ),
      N("div", {
        class: v(e.classes(e.n("header"), [!e.disabled, e.n("header--cursor-pointer")])),
        "aria-expanded": e.isShow,
        "aria-disabled": e.disabled,
        role: e.accordion ? "tab" : "button",
        onClick: n[0] || (n[0] = (...t) => e.toggle && e.toggle(...t))
      }, [
        e.$slots.title || e.title ? (h(), S(
          "div",
          {
            key: 0,
            class: v(e.n("header-title"))
          },
          [
            A(e.$slots, "title", {}, () => [
              Be(
                ie(e.title),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : q("v-if", !0),
        N(
          "div",
          {
            class: v(e.n("header-icon"))
          },
          [
            A(e.$slots, "icon", {}, () => [
              G(o, {
                name: e.icon,
                transition: 250,
                class: v(
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
      ], 10, H$),
      Ae(N(
        "div",
        {
          class: v(e.n("content")),
          ref: "contentEl",
          onTransitionend: n[1] || (n[1] = (...t) => e.handleTransitionEnd && e.handleTransitionEnd(...t)),
          onTransitionstart: n[2] || (n[2] = (...t) => e.handleTransitionStart && e.handleTransitionStart(...t))
        },
        [
          N(
            "div",
            {
              class: v(e.n("content-wrap"))
            },
            [
              A(e.$slots, "default")
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
const Qv = _({
  name: R$,
  components: {
    VarIcon: Ze
  },
  props: Zv,
  setup(e) {
    const n = $(!1), o = $(!1), t = $(null), r = I(() => e.name), a = I(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = V$(), { offset: u, divider: c, elevation: d, accordion: f, updateItem: p } = l;
    s({
      index: i,
      name: r,
      disabled: a,
      init: w
    });
    const { handleTransitionEnd: m, handleTransitionStart: k } = Jv({
      contentEl: t,
      showContent: o,
      expand: n
    });
    function w(b) {
      n.value = b;
    }
    function y() {
      var b;
      e.disabled || p((b = e.name) != null ? b : i.value, !n.value);
    }
    return {
      isShow: n,
      showContent: o,
      offset: u,
      divider: c,
      elevation: d,
      contentEl: t,
      accordion: f,
      n: L$,
      classes: F$,
      toggle: y,
      formatElevation: un,
      handleTransitionEnd: m,
      handleTransitionStart: k
    };
  }
});
Qv.render = U$;
var Ea = Qv;
te(Ea);
ae(Ea, Zv);
const V5 = Ea;
var fl = Ea;
const _v = {
  expand: Boolean
}, { name: Y$, n: j$ } = x("collapse-transition");
function W$(e, n) {
  return Ae((h(), S(
    "div",
    {
      class: v(e.n("content")),
      ref: "contentEl",
      onTransitionend: n[0] || (n[0] = (...o) => e.handleTransitionEnd && e.handleTransitionEnd(...o)),
      onTransitionstart: n[1] || (n[1] = (...o) => e.handleTransitionStart && e.handleTransitionStart(...o))
    },
    [
      A(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  )), [
    [Qn, e.showContent]
  ]);
}
const xv = _({
  name: Y$,
  props: _v,
  setup(e) {
    const n = $(!1), o = $(null), t = I(() => e.expand), { handleTransitionEnd: r, handleTransitionStart: a } = Jv({
      contentEl: o,
      showContent: n,
      expand: t
    });
    return {
      showContent: n,
      contentEl: o,
      n: j$,
      handleTransitionEnd: r,
      handleTransitionStart: a
    };
  }
});
xv.render = W$;
var Ia = xv;
te(Ia);
ae(Ia, _v);
const R5 = Ia;
var vl = Ia;
const ep = {
  from: {
    type: [String, Number],
    default: 0
  },
  to: {
    type: [String, Number],
    default: 0
  },
  duration: {
    type: [String, Number],
    default: 2e3
  },
  precision: {
    type: [String, Number],
    default: 0
  },
  autoStart: {
    type: Boolean,
    default: !0
  },
  timingFunction: {
    type: Function
  },
  onEnd: V()
}, { name: K$, n: q$ } = x("count-to");
function X$(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      A(e.$slots, "default", { value: e.value }, () => [
        Be(
          ie(e.value),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const np = _({
  name: K$,
  props: ep,
  setup(e) {
    const {
      value: n,
      reset: o,
      // expose
      start: t,
      // expose
      pause: r
    } = Sg({
      from: () => L(e.from),
      to: () => L(e.to),
      duration: () => L(e.duration),
      timingFunction: e.timingFunction,
      onFinished() {
        C(e.onEnd);
      }
    }), a = I(() => iu(n.value, L(e.precision)));
    de(() => [e.from, e.to, e.duration], i), Bo(i);
    function i() {
      o(), e.autoStart && t();
    }
    return {
      value: a,
      n: q$,
      start: t,
      pause: r,
      reset: i,
      toNumber: L,
      floor: iu
    };
  }
});
np.render = X$;
var Ba = np;
te(Ba);
ae(Ba, ep);
const L5 = Ba;
var pl = Ba;
const op = {
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
  onEnd: V(),
  onChange: V()
}, { name: G$, n: Z$ } = x("countdown"), ml = 1e3, hl = 60 * ml, gl = 60 * hl, mc = 24 * gl;
function J$(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      A(e.$slots, "default", wo(Zt(e.timeData)), () => [
        Be(
          ie(e.showTime),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const tp = _({
  name: G$,
  props: op,
  setup(e) {
    const n = $(""), o = $({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let t = 0, r = !1, a = 0, i = 0, l;
    de(
      () => e.time,
      () => {
        p(), e.autoStart && d();
      }
    ), Bo(() => {
      c(), e.autoStart && d();
    }), Do(() => {
      l != null && (r = l, r === !0 && d(!0));
    }), mt(() => {
      l = r, f();
    }), qt(f);
    function s(g, m) {
      const k = Object.values(m), w = ["DD", "HH", "mm", "ss"], y = [24, 60, 60, 1e3];
      if (w.forEach((b, P) => {
        g.includes(b) ? g = g.replace(b, jo(`${k[P]}`, 2, "0")) : k[P + 1] += k[P] * y[P];
      }), g.includes("S")) {
        const b = jo(`${k[k.length - 1]}`, 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", b) : g.includes("SS") ? g = g.replace("SS", b.slice(0, 2)) : g = g.replace("S", b.slice(0, 1));
      }
      return g;
    }
    function u(g) {
      const m = Math.floor(g / mc), k = Math.floor(g % mc / gl), w = Math.floor(g % gl / hl), y = Math.floor(g % hl / ml), b = Math.floor(g % ml), P = {
        days: m,
        hours: k,
        minutes: w,
        seconds: y,
        milliseconds: b
      };
      o.value = P, C(e.onChange, o.value), n.value = s(e.format, P);
    }
    function c() {
      const { time: g, onEnd: m } = e, k = performance.now();
      if (t || (t = k + L(g)), i = t - k, i < 0 && (i = 0), u(i), i === 0) {
        C(m);
        return;
      }
      r && (a = at(c));
    }
    function d(g = !1) {
      r && !g || (r = !0, t = performance.now() + (i || L(e.time)), c());
    }
    function f() {
      r = !1, zr(a);
    }
    function p() {
      t = 0, r = !1, zr(a), c();
    }
    return {
      showTime: n,
      timeData: o,
      n: Z$,
      start: d,
      pause: f,
      reset: p
    };
  }
});
tp.render = J$;
var Da = tp;
te(Da);
ae(Da, op);
const F5 = Da;
var bl = Da;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Jo = 9e15, Ao = 1e9, yl = "0123456789abcdef", Nr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Ar = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", kl = {
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
}, rp, so, Te = !0, Ma = "[DecimalError] ", Io = Ma + "Invalid argument: ", ap = Ma + "Precision limit exceeded", ip = Ma + "crypto unavailable", lp = "[object Decimal]", $n = Math.floor, fn = Math.pow, Q$ = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, _$ = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, x$ = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, sp = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Jn = 1e7, Pe = 7, ew = 9007199254740991, nw = Nr.length - 1, $l = Ar.length - 1, J = { toStringTag: lp };
J.absoluteValue = J.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), we(e);
};
J.ceil = function() {
  return we(new this.constructor(this), this.e + 1, 2);
};
J.clampedTo = J.clamp = function(e, n) {
  var o, t = this, r = t.constructor;
  if (e = new r(e), n = new r(n), !e.s || !n.s) return new r(NaN);
  if (e.gt(n)) throw Error(Io + n);
  return o = t.cmp(e), o < 0 ? e : t.cmp(n) > 0 ? n : new r(t);
};
J.comparedTo = J.cmp = function(e) {
  var n, o, t, r, a = this, i = a.d, l = (e = new a.constructor(e)).d, s = a.s, u = e.s;
  if (!i || !l)
    return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0]) return i[0] ? s : l[0] ? -u : 0;
  if (s !== u) return s;
  if (a.e !== e.e) return a.e > e.e ^ s < 0 ? 1 : -1;
  for (t = i.length, r = l.length, n = 0, o = t < r ? t : r; n < o; ++n)
    if (i[n] !== l[n]) return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return t === r ? 0 : t > r ^ s < 0 ? 1 : -1;
};
J.cosine = J.cos = function() {
  var e, n, o = this, t = o.constructor;
  return o.d ? o.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + Pe, t.rounding = 1, o = ow(t, vp(t, o)), t.precision = e, t.rounding = n, we(so == 2 || so == 3 ? o.neg() : o, e, n, !0)) : new t(1) : new t(NaN);
};
J.cubeRoot = J.cbrt = function() {
  var e, n, o, t, r, a, i, l, s, u, c = this, d = c.constructor;
  if (!c.isFinite() || c.isZero()) return new d(c);
  for (Te = !1, a = c.s * fn(c.s * c, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (o = yn(c.d), e = c.e, (a = (e - o.length + 1) % 3) && (o += a == 1 || a == -2 ? "0" : "00"), a = fn(o, 1 / 3), e = $n((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? o = "5e" + e : (o = a.toExponential(), o = o.slice(0, o.indexOf("e") + 1) + e), t = new d(o), t.s = c.s) : t = new d(a.toString()), i = (e = d.precision) + 3; ; )
    if (l = t, s = l.times(l).times(l), u = s.plus(c), t = Ge(u.plus(c).times(l), u.plus(s), i + 2, 1), yn(l.d).slice(0, i) === (o = yn(t.d)).slice(0, i))
      if (o = o.slice(i - 3, i + 1), o == "9999" || !r && o == "4999") {
        if (!r && (we(l, e + 1, 0), l.times(l).times(l).eq(c))) {
          t = l;
          break;
        }
        i += 4, r = 1;
      } else {
        (!+o || !+o.slice(1) && o.charAt(0) == "5") && (we(t, e + 1, 1), n = !t.times(t).times(t).eq(c));
        break;
      }
  return Te = !0, we(t, e, d.rounding, n);
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
  var e, n, o, t, r, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite()) return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero()) return l;
  o = i.precision, t = i.rounding, i.precision = o + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / Aa(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = ft(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, c = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(c.minus(s.times(c))));
  return we(a, i.precision = o, i.rounding = t, !0);
};
J.hyperbolicSine = J.sinh = function() {
  var e, n, o, t, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero()) return new a(r);
  if (n = a.precision, o = a.rounding, a.precision = n + Math.max(r.e, r.sd()) + 4, a.rounding = 1, t = r.d.length, t < 3)
    r = ft(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(t), e = e > 16 ? 16 : e | 0, r = r.times(1 / Aa(5, e)), r = ft(a, 2, r, r, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = r.times(r), r = r.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = o, we(r, n, o, !0);
};
J.hyperbolicTangent = J.tanh = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 7, t.rounding = 1, Ge(o.sinh(), o.cosh(), t.precision = e, t.rounding = n)) : new t(o.s);
};
J.inverseCosine = J.acos = function() {
  var e, n = this, o = n.constructor, t = n.abs().cmp(1), r = o.precision, a = o.rounding;
  return t !== -1 ? t === 0 ? n.isNeg() ? Gn(o, r, a) : new o(0) : new o(NaN) : n.isZero() ? Gn(o, r + 4, a).times(0.5) : (o.precision = r + 6, o.rounding = 1, n = n.asin(), e = Gn(o, r + 4, a).times(0.5), o.precision = r, o.rounding = a, e.minus(n));
};
J.inverseHyperbolicCosine = J.acosh = function() {
  var e, n, o = this, t = o.constructor;
  return o.lte(1) ? new t(o.eq(1) ? 0 : NaN) : o.isFinite() ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(Math.abs(o.e), o.sd()) + 4, t.rounding = 1, Te = !1, o = o.times(o).minus(1).sqrt().plus(o), Te = !0, t.precision = e, t.rounding = n, o.ln()) : new t(o);
};
J.inverseHyperbolicSine = J.asinh = function() {
  var e, n, o = this, t = o.constructor;
  return !o.isFinite() || o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 2 * Math.max(Math.abs(o.e), o.sd()) + 6, t.rounding = 1, Te = !1, o = o.times(o).plus(1).sqrt().plus(o), Te = !0, t.precision = e, t.rounding = n, o.ln());
};
J.inverseHyperbolicTangent = J.atanh = function() {
  var e, n, o, t, r = this, a = r.constructor;
  return r.isFinite() ? r.e >= 0 ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = a.precision, n = a.rounding, t = r.sd(), Math.max(t, e) < 2 * -r.e - 1 ? we(new a(r), e, n, !0) : (a.precision = o = t - r.e, r = Ge(r.plus(1), new a(1).minus(r), o + e, 1), a.precision = e + 4, a.rounding = 1, r = r.ln(), a.precision = e, a.rounding = n, r.times(0.5))) : new a(NaN);
};
J.inverseSine = J.asin = function() {
  var e, n, o, t, r = this, a = r.constructor;
  return r.isZero() ? new a(r) : (n = r.abs().cmp(1), o = a.precision, t = a.rounding, n !== -1 ? n === 0 ? (e = Gn(a, o + 4, t).times(0.5), e.s = r.s, e) : new a(NaN) : (a.precision = o + 6, a.rounding = 1, r = r.div(new a(1).minus(r.times(r)).sqrt().plus(1)).atan(), a.precision = o, a.rounding = t, r.times(2)));
};
J.inverseTangent = J.atan = function() {
  var e, n, o, t, r, a, i, l, s, u = this, c = u.constructor, d = c.precision, f = c.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new c(u);
    if (u.abs().eq(1) && d + 4 <= $l)
      return i = Gn(c, d + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s) return new c(NaN);
    if (d + 4 <= $l)
      return i = Gn(c, d + 4, f).times(0.5), i.s = u.s, i;
  }
  for (c.precision = l = d + 10, c.rounding = 1, o = Math.min(28, l / Pe + 2 | 0), e = o; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (Te = !1, n = Math.ceil(l / Pe), t = 1, s = u.times(u), i = new c(u), r = u; e !== -1; )
    if (r = r.times(s), a = i.minus(r.div(t += 2)), r = r.times(s), i = a.plus(r.div(t += 2)), i.d[n] !== void 0) for (e = n; i.d[e] === a.d[e] && e--; ) ;
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
  var n, o, t, r, a, i, l, s, u = this, c = u.constructor, d = c.precision, f = c.rounding, p = 5;
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
      for (r = o[0]; r % 10 === 0; ) r /= 10;
      a = r !== 1;
    }
  if (Te = !1, l = d + p, i = ko(u, l), t = n ? Vr(c, l + 10) : ko(e, l), s = Ge(i, t, l, 1), Ht(s.d, r = d, f))
    do
      if (l += 10, i = ko(u, l), t = n ? Vr(c, l + 10) : ko(e, l), s = Ge(i, t, l, 1), !a) {
        +yn(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = we(s, d + 1, 0));
        break;
      }
    while (Ht(s.d, r += 10, f));
  return Te = !0, we(s, d, f);
};
J.minus = J.sub = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, p = this, g = p.constructor;
  if (e = new g(e), !p.d || !e.d)
    return !p.s || !e.s ? e = new g(NaN) : p.d ? e.s = -e.s : e = new g(e.d || p.s !== e.s ? p : NaN), e;
  if (p.s != e.s)
    return e.s = -e.s, p.plus(e);
  if (u = p.d, f = e.d, l = g.precision, s = g.rounding, !u[0] || !f[0]) {
    if (f[0]) e.s = -e.s;
    else if (u[0]) e = new g(p);
    else return new g(s === 3 ? -0 : 0);
    return Te ? we(e, l, s) : e;
  }
  if (o = $n(e.e / Pe), c = $n(p.e / Pe), u = u.slice(), a = c - o, a) {
    for (d = a < 0, d ? (n = u, a = -a, i = f.length) : (n = f, o = c, i = u.length), t = Math.max(Math.ceil(l / Pe), i) + 2, a > t && (a = t, n.length = 1), n.reverse(), t = a; t--; ) n.push(0);
    n.reverse();
  } else {
    for (t = u.length, i = f.length, d = t < i, d && (i = t), t = 0; t < i; t++)
      if (u[t] != f[t]) {
        d = u[t] < f[t];
        break;
      }
    a = 0;
  }
  for (d && (n = u, u = f, f = n, e.s = -e.s), i = u.length, t = f.length - i; t > 0; --t) u[i++] = 0;
  for (t = f.length; t > a; ) {
    if (u[--t] < f[t]) {
      for (r = t; r && u[--r] === 0; ) u[r] = Jn - 1;
      --u[r], u[t] += Jn;
    }
    u[t] -= f[t];
  }
  for (; u[--i] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --o;
  return u[0] ? (e.d = u, e.e = Na(u, o), Te ? we(e, l, s) : e) : new g(s === 3 ? -0 : 0);
};
J.modulo = J.mod = function(e) {
  var n, o = this, t = o.constructor;
  return e = new t(e), !o.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || o.d && !o.d[0] ? we(new t(o), t.precision, t.rounding) : (Te = !1, t.modulo == 9 ? (n = Ge(o, e.abs(), 0, 3, 1), n.s *= e.s) : n = Ge(o, e, 0, t.modulo, 1), n = n.times(e), Te = !0, o.minus(n));
};
J.naturalExponential = J.exp = function() {
  return wl(this);
};
J.naturalLogarithm = J.ln = function() {
  return ko(this);
};
J.negated = J.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, we(e);
};
J.plus = J.add = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d = this, f = d.constructor;
  if (e = new f(e), !d.d || !e.d)
    return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
  if (d.s != e.s)
    return e.s = -e.s, d.minus(e);
  if (u = d.d, c = e.d, l = f.precision, s = f.rounding, !u[0] || !c[0])
    return c[0] || (e = new f(d)), Te ? we(e, l, s) : e;
  if (a = $n(d.e / Pe), t = $n(e.e / Pe), u = u.slice(), r = a - t, r) {
    for (r < 0 ? (o = u, r = -r, i = c.length) : (o = c, t = a, i = u.length), a = Math.ceil(l / Pe), i = a > i ? a + 1 : i + 1, r > i && (r = i, o.length = 1), o.reverse(); r--; ) o.push(0);
    o.reverse();
  }
  for (i = u.length, r = c.length, i - r < 0 && (r = i, o = c, c = u, u = o), n = 0; r; )
    n = (u[--r] = u[r] + c[r] + n) / Jn | 0, u[r] %= Jn;
  for (n && (u.unshift(n), ++t), i = u.length; u[--i] == 0; ) u.pop();
  return e.d = u, e.e = Na(u, t), Te ? we(e, l, s) : e;
};
J.precision = J.sd = function(e) {
  var n, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Io + e);
  return o.d ? (n = up(o.d), e && o.e + 1 > n && (n = o.e + 1)) : n = NaN, n;
};
J.round = function() {
  var e = this, n = e.constructor;
  return we(new n(e), e.e + 1, n.rounding);
};
J.sine = J.sin = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + Pe, t.rounding = 1, o = rw(t, vp(t, o)), t.precision = e, t.rounding = n, we(so > 2 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
J.squareRoot = J.sqrt = function() {
  var e, n, o, t, r, a, i = this, l = i.d, s = i.e, u = i.s, c = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new c(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (Te = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = yn(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = $n((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), t = new c(n)) : t = new c(u.toString()), o = (s = c.precision) + 3; ; )
    if (a = t, t = a.plus(Ge(i, a, o + 2, 1)).times(0.5), yn(a.d).slice(0, o) === (n = yn(t.d)).slice(0, o))
      if (n = n.slice(o - 3, o + 1), n == "9999" || !r && n == "4999") {
        if (!r && (we(a, s + 1, 0), a.times(a).eq(i))) {
          t = a;
          break;
        }
        o += 4, r = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (we(t, s + 1, 1), e = !t.times(t).eq(i));
        break;
      }
  return Te = !0, we(t, s, c.rounding, e);
};
J.tangent = J.tan = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 10, t.rounding = 1, o = o.sin(), o.s = 1, o = Ge(o, new t(1).minus(o.times(o)).sqrt(), e + 10, 0), t.precision = e, t.rounding = n, we(so == 2 || so == 4 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
J.times = J.mul = function(e) {
  var n, o, t, r, a, i, l, s, u, c = this, d = c.constructor, f = c.d, p = (e = new d(e)).d;
  if (e.s *= c.s, !f || !f[0] || !p || !p[0])
    return new d(!e.s || f && !f[0] && !p || p && !p[0] && !f ? NaN : !f || !p ? e.s / 0 : e.s * 0);
  for (o = $n(c.e / Pe) + $n(e.e / Pe), s = f.length, u = p.length, s < u && (a = f, f = p, p = a, i = s, s = u, u = i), a = [], i = s + u, t = i; t--; ) a.push(0);
  for (t = u; --t >= 0; ) {
    for (n = 0, r = s + t; r > t; )
      l = a[r] + p[t] * f[r - t - 1] + n, a[r--] = l % Jn | 0, n = l / Jn | 0;
    a[r] = (a[r] + n) % Jn | 0;
  }
  for (; !a[--i]; ) a.pop();
  return n ? ++o : a.shift(), e.d = a, e.e = Na(a, o), Te ? we(e, d.precision, d.rounding) : e;
};
J.toBinary = function(e, n) {
  return Ws(this, 2, e, n);
};
J.toDecimalPlaces = J.toDP = function(e, n) {
  var o = this, t = o.constructor;
  return o = new t(o), e === void 0 ? o : (Bn(e, 0, Ao), n === void 0 ? n = t.rounding : Bn(n, 0, 8), we(o, e + o.e + 1, n));
};
J.toExponential = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = eo(t, !0) : (Bn(e, 0, Ao), n === void 0 ? n = r.rounding : Bn(n, 0, 8), t = we(new r(t), e + 1, n), o = eo(t, !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
J.toFixed = function(e, n) {
  var o, t, r = this, a = r.constructor;
  return e === void 0 ? o = eo(r) : (Bn(e, 0, Ao), n === void 0 ? n = a.rounding : Bn(n, 0, 8), t = we(new a(r), e + r.e + 1, n), o = eo(t, !1, e + t.e + 1)), r.isNeg() && !r.isZero() ? "-" + o : o;
};
J.toFraction = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, p = this, g = p.d, m = p.constructor;
  if (!g) return new m(p);
  if (u = o = new m(1), t = s = new m(0), n = new m(t), a = n.e = up(g) - p.e - 1, i = a % Pe, n.d[0] = fn(10, i < 0 ? Pe + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new m(e), !l.isInt() || l.lt(u)) throw Error(Io + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Te = !1, l = new m(yn(g)), c = m.precision, m.precision = a = g.length * Pe * 2; d = Ge(l, n, 0, 1, 1), r = o.plus(d.times(t)), r.cmp(e) != 1; )
    o = t, t = r, r = u, u = s.plus(d.times(r)), s = r, r = n, n = l.minus(d.times(r)), l = r;
  return r = Ge(e.minus(o), t, 0, 1, 1), s = s.plus(r.times(u)), o = o.plus(r.times(t)), s.s = u.s = p.s, f = Ge(u, t, a, 1).minus(p).abs().cmp(Ge(s, o, a, 1).minus(p).abs()) < 1 ? [u, t] : [s, o], m.precision = c, Te = !0, f;
};
J.toHexadecimal = J.toHex = function(e, n) {
  return Ws(this, 16, e, n);
};
J.toNearest = function(e, n) {
  var o = this, t = o.constructor;
  if (o = new t(o), e == null) {
    if (!o.d) return o;
    e = new t(1), n = t.rounding;
  } else {
    if (e = new t(e), n === void 0 ? n = t.rounding : Bn(n, 0, 8), !o.d) return e.s ? o : e;
    if (!e.d)
      return e.s && (e.s = o.s), e;
  }
  return e.d[0] ? (Te = !1, o = Ge(o, e, 0, n, 1).times(e), Te = !0, we(o)) : (e.s = o.s, o = e), o;
};
J.toNumber = function() {
  return +this;
};
J.toOctal = function(e, n) {
  return Ws(this, 8, e, n);
};
J.toPower = J.pow = function(e) {
  var n, o, t, r, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new s(fn(+l, u));
  if (l = new s(l), l.eq(1)) return l;
  if (t = s.precision, a = s.rounding, e.eq(1)) return we(l, t, a);
  if (n = $n(e.e / Pe), n >= e.d.length - 1 && (o = u < 0 ? -u : u) <= ew)
    return r = cp(s, l, o, t), e.s < 0 ? new s(1).div(r) : we(r, t, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1) return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return o = fn(+l, u), n = o == 0 || !isFinite(o) ? $n(u * (Math.log("0." + yn(l.d)) / Math.LN10 + l.e + 1)) : new s(o + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Te = !1, s.rounding = l.s = 1, o = Math.min(12, (n + "").length), r = wl(e.times(ko(l, t + o)), t), r.d && (r = we(r, t + 5, 1), Ht(r.d, t, a) && (n = t + 10, r = we(wl(e.times(ko(l, n + o)), n), n + 5, 1), +yn(r.d).slice(t + 1, t + 15) + 1 == 1e14 && (r = we(r, t + 1, 0)))), r.s = i, Te = !0, s.rounding = a, we(r, t, a));
};
J.toPrecision = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = eo(t, t.e <= r.toExpNeg || t.e >= r.toExpPos) : (Bn(e, 1, Ao), n === void 0 ? n = r.rounding : Bn(n, 0, 8), t = we(new r(t), e, n), o = eo(t, e <= t.e || t.e <= r.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
J.toSignificantDigits = J.toSD = function(e, n) {
  var o = this, t = o.constructor;
  return e === void 0 ? (e = t.precision, n = t.rounding) : (Bn(e, 1, Ao), n === void 0 ? n = t.rounding : Bn(n, 0, 8)), we(new t(o), e, n);
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
function yn(e) {
  var n, o, t, r = e.length - 1, a = "", i = e[0];
  if (r > 0) {
    for (a += i, n = 1; n < r; n++)
      t = e[n] + "", o = Pe - t.length, o && (a += po(o)), a += t;
    i = e[n], t = i + "", o = Pe - t.length, o && (a += po(o));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; ) i /= 10;
  return a + i;
}
function Bn(e, n, o) {
  if (e !== ~~e || e < n || e > o)
    throw Error(Io + e);
}
function Ht(e, n, o, t) {
  var r, a, i, l;
  for (a = e[0]; a >= 10; a /= 10) --n;
  return --n < 0 ? (n += Pe, r = 0) : (r = Math.ceil((n + 1) / Pe), n %= Pe), a = fn(10, Pe - n), l = e[r] % a | 0, t == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = o < 4 && l == 99999 || o > 3 && l == 49999 || l == 5e4 || l == 0) : i = (o < 4 && l + 1 == a || o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == fn(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[r + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (t || o < 4) && l == 9999 || !t && o > 3 && l == 4999) : i = ((t || o < 4) && l + 1 == a || !t && o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == fn(10, n - 3) - 1, i;
}
function wr(e, n, o) {
  for (var t, r = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = r.length; a--; ) r[a] *= n;
    for (r[0] += yl.indexOf(e.charAt(i++)), t = 0; t < r.length; t++)
      r[t] > o - 1 && (r[t + 1] === void 0 && (r[t + 1] = 0), r[t + 1] += r[t] / o | 0, r[t] %= o);
  }
  return r.reverse();
}
function ow(e, n) {
  var o, t, r;
  if (n.isZero()) return n;
  t = n.d.length, t < 32 ? (o = Math.ceil(t / 3), r = (1 / Aa(4, o)).toString()) : (o = 16, r = "2.3283064365386962890625e-10"), e.precision += o, n = ft(e, 1, n.times(r), new e(1));
  for (var a = o; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= o, n;
}
var Ge = /* @__PURE__ */ function() {
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
    for (; !t[0] && t.length > 1; ) t.shift();
  }
  return function(t, r, a, i, l, s) {
    var u, c, d, f, p, g, m, k, w, y, b, P, z, O, B, T, E, M, R, W, U = t.constructor, H = t.s == r.s ? 1 : -1, Y = t.d, j = r.d;
    if (!Y || !Y[0] || !j || !j[0])
      return new U(
        // Return NaN if either NaN, or both Infinity or 0.
        !t.s || !r.s || (Y ? j && Y[0] == j[0] : !j) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          Y && Y[0] == 0 || !j ? H * 0 : H / 0
        )
      );
    for (s ? (p = 1, c = t.e - r.e) : (s = Jn, p = Pe, c = $n(t.e / p) - $n(r.e / p)), R = j.length, E = Y.length, w = new U(H), y = w.d = [], d = 0; j[d] == (Y[d] || 0); d++) ;
    if (j[d] > (Y[d] || 0) && c--, a == null ? (O = a = U.precision, i = U.rounding) : l ? O = a + (t.e - r.e) + 1 : O = a, O < 0)
      y.push(1), g = !0;
    else {
      if (O = O / p + 2 | 0, d = 0, R == 1) {
        for (f = 0, j = j[0], O++; (d < E || f) && O--; d++)
          B = f * s + (Y[d] || 0), y[d] = B / j | 0, f = B % j | 0;
        g = f || d < E;
      } else {
        for (f = s / (j[0] + 1) | 0, f > 1 && (j = e(j, f, s), Y = e(Y, f, s), R = j.length, E = Y.length), T = R, b = Y.slice(0, R), P = b.length; P < R; ) b[P++] = 0;
        W = j.slice(), W.unshift(0), M = j[0], j[1] >= s / 2 && ++M;
        do
          f = 0, u = n(j, b, R, P), u < 0 ? (z = b[0], R != P && (z = z * s + (b[1] || 0)), f = z / M | 0, f > 1 ? (f >= s && (f = s - 1), m = e(j, f, s), k = m.length, P = b.length, u = n(m, b, k, P), u == 1 && (f--, o(m, R < k ? W : j, k, s))) : (f == 0 && (u = f = 1), m = j.slice()), k = m.length, k < P && m.unshift(0), o(b, m, P, s), u == -1 && (P = b.length, u = n(j, b, R, P), u < 1 && (f++, o(b, R < P ? W : j, P, s))), P = b.length) : u === 0 && (f++, b = [0]), y[d++] = f, u && b[0] ? b[P++] = Y[T] || 0 : (b = [Y[T]], P = 1);
        while ((T++ < E || b[0] !== void 0) && O--);
        g = b[0] !== void 0;
      }
      y[0] || y.shift();
    }
    if (p == 1)
      w.e = c, rp = g;
    else {
      for (d = 1, f = y[0]; f >= 10; f /= 10) d++;
      w.e = d + c * p - 1, we(w, l ? a + w.e + 1 : a, i, g);
    }
    return w;
  };
}();
function we(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, p = e.constructor;
  e: if (n != null) {
    if (d = e.d, !d) return e;
    for (r = 1, l = d[0]; l >= 10; l /= 10) r++;
    if (a = n - r, a < 0)
      a += Pe, i = n, c = d[f = 0], s = c / fn(10, r - i - 1) % 10 | 0;
    else if (f = Math.ceil((a + 1) / Pe), l = d.length, f >= l)
      if (t) {
        for (; l++ <= f; ) d.push(0);
        c = s = 0, r = 1, a %= Pe, i = a - Pe + 1;
      } else
        break e;
    else {
      for (c = l = d[f], r = 1; l >= 10; l /= 10) r++;
      a %= Pe, i = a - Pe + r, s = i < 0 ? 0 : c / fn(10, r - i - 1) % 10 | 0;
    }
    if (t = t || n < 0 || d[f + 1] !== void 0 || (i < 0 ? c : c % fn(10, r - i - 1)), u = o < 4 ? (s || t) && (o == 0 || o == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (o == 4 || t || o == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (a > 0 ? i > 0 ? c / fn(10, r - i) : 0 : d[f - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !d[0])
      return d.length = 0, u ? (n -= e.e + 1, d[0] = fn(10, (Pe - n % Pe) % Pe), e.e = -n || 0) : d[0] = e.e = 0, e;
    if (a == 0 ? (d.length = f, l = 1, f--) : (d.length = f + 1, l = fn(10, Pe - a), d[f] = i > 0 ? (c / fn(10, r - i) % fn(10, i) | 0) * l : 0), u)
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
  return Te && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
}
function eo(e, n, o) {
  if (!e.isFinite()) return fp(e);
  var t, r = e.e, a = yn(e.d), i = a.length;
  return n ? (o && (t = o - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + po(t) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + po(-r - 1) + a, o && (t = o - i) > 0 && (a += po(t))) : r >= i ? (a += po(r + 1 - i), o && (t = o - r - 1) > 0 && (a = a + "." + po(t))) : ((t = r + 1) < i && (a = a.slice(0, t) + "." + a.slice(t)), o && (t = o - i) > 0 && (r + 1 === i && (a += "."), a += po(t))), a;
}
function Na(e, n) {
  var o = e[0];
  for (n *= Pe; o >= 10; o /= 10) n++;
  return n;
}
function Vr(e, n, o) {
  if (n > nw)
    throw Te = !0, o && (e.precision = o), Error(ap);
  return we(new e(Nr), n, 1, !0);
}
function Gn(e, n, o) {
  if (n > $l) throw Error(ap);
  return we(new e(Ar), n, o, !0);
}
function up(e) {
  var n = e.length - 1, o = n * Pe + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10) o--;
    for (n = e[0]; n >= 10; n /= 10) o++;
  }
  return o;
}
function po(e) {
  for (var n = ""; e--; ) n += "0";
  return n;
}
function cp(e, n, o, t) {
  var r, a = new e(1), i = Math.ceil(t / Pe + 4);
  for (Te = !1; ; ) {
    if (o % 2 && (a = a.times(n), gc(a.d, i) && (r = !0)), o = $n(o / 2), o === 0) {
      o = a.d.length - 1, r && a.d[o] === 0 && ++a.d[o];
      break;
    }
    n = n.times(n), gc(n.d, i);
  }
  return Te = !0, a;
}
function hc(e) {
  return e.d[e.d.length - 1] & 1;
}
function dp(e, n, o) {
  for (var t, r = new e(n[0]), a = 0; ++a < n.length; )
    if (t = new e(n[a]), t.s)
      r[o](t) && (r = t);
    else {
      r = t;
      break;
    }
  return r;
}
function wl(e, n) {
  var o, t, r, a, i, l, s, u = 0, c = 0, d = 0, f = e.constructor, p = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (n == null ? (Te = !1, s = g) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), d += 5;
  for (t = Math.log(fn(2, d)) / Math.LN10 * 2 + 5 | 0, s += t, o = a = i = new f(1), f.precision = s; ; ) {
    if (a = we(a.times(e), s, 1), o = o.times(++c), l = i.plus(Ge(a, o, s, 1)), yn(l.d).slice(0, s) === yn(i.d).slice(0, s)) {
      for (r = d; r--; ) i = we(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Ht(i.d, s - t, p, u))
          f.precision = s += 10, o = a = l = new f(1), c = 0, u++;
        else
          return we(i, f.precision = g, p, Te = !0);
      else
        return f.precision = g, i;
    }
    i = l;
  }
}
function ko(e, n) {
  var o, t, r, a, i, l, s, u, c, d, f, p = 1, g = 10, m = e, k = m.d, w = m.constructor, y = w.rounding, b = w.precision;
  if (m.s < 0 || !k || !k[0] || !m.e && k[0] == 1 && k.length == 1)
    return new w(k && !k[0] ? -1 / 0 : m.s != 1 ? NaN : k ? 0 : m);
  if (n == null ? (Te = !1, c = b) : c = n, w.precision = c += g, o = yn(k), t = o.charAt(0), Math.abs(a = m.e) < 15e14) {
    for (; t < 7 && t != 1 || t == 1 && o.charAt(1) > 3; )
      m = m.times(e), o = yn(m.d), t = o.charAt(0), p++;
    a = m.e, t > 1 ? (m = new w("0." + o), a++) : m = new w(t + "." + o.slice(1));
  } else
    return u = Vr(w, c + 2, b).times(a + ""), m = ko(new w(t + "." + o.slice(1)), c - g).plus(u), w.precision = b, n == null ? we(m, b, y, Te = !0) : m;
  for (d = m, s = i = m = Ge(m.minus(1), m.plus(1), c, 1), f = we(m.times(m), c, 1), r = 3; ; ) {
    if (i = we(i.times(f), c, 1), u = s.plus(Ge(i, new w(r), c, 1)), yn(u.d).slice(0, c) === yn(s.d).slice(0, c))
      if (s = s.times(2), a !== 0 && (s = s.plus(Vr(w, c + 2, b).times(a + ""))), s = Ge(s, new w(p), c, 1), n == null)
        if (Ht(s.d, c - g, y, l))
          w.precision = c += g, u = i = m = Ge(d.minus(1), d.plus(1), c, 1), f = we(m.times(m), c, 1), r = l = 1;
        else
          return we(s, w.precision = b, y, Te = !0);
      else
        return w.precision = b, s;
    s = u, r += 2;
  }
}
function fp(e) {
  return String(e.s * e.s / 0);
}
function Cl(e, n) {
  var o, t, r;
  for ((o = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (t = n.search(/e/i)) > 0 ? (o < 0 && (o = t), o += +n.slice(t + 1), n = n.substring(0, t)) : o < 0 && (o = n.length), t = 0; n.charCodeAt(t) === 48; t++) ;
  for (r = n.length; n.charCodeAt(r - 1) === 48; --r) ;
  if (n = n.slice(t, r), n) {
    if (r -= t, e.e = o = o - t - 1, e.d = [], t = (o + 1) % Pe, o < 0 && (t += Pe), t < r) {
      for (t && e.d.push(+n.slice(0, t)), r -= Pe; t < r; ) e.d.push(+n.slice(t, t += Pe));
      n = n.slice(t), t = Pe - n.length;
    } else
      t -= r;
    for (; t--; ) n += "0";
    e.d.push(+n), Te && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function tw(e, n) {
  var o, t, r, a, i, l, s, u, c;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), sp.test(n)) return Cl(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (_$.test(n))
    o = 16, n = n.toLowerCase();
  else if (Q$.test(n))
    o = 2;
  else if (x$.test(n))
    o = 8;
  else
    throw Error(Io + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, t = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = cp(t, new t(o), a, a * 2)), u = wr(n, o, Jn), c = u.length - 1, a = c; u[a] === 0; --a) u.pop();
  return a < 0 ? new t(e.s * 0) : (e.e = Na(u, c), e.d = u, Te = !1, i && (e = Ge(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? fn(2, s) : $o.pow(2, s))), Te = !0, e);
}
function rw(e, n) {
  var o, t = n.d.length;
  if (t < 3)
    return n.isZero() ? n : ft(e, 2, n, n);
  o = 1.4 * Math.sqrt(t), o = o > 16 ? 16 : o | 0, n = n.times(1 / Aa(5, o)), n = ft(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), l = new e(20); o--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(l))));
  return n;
}
function ft(e, n, o, t, r) {
  var a, i, l, s, u = e.precision, c = Math.ceil(u / Pe);
  for (Te = !1, s = o.times(o), l = new e(t); ; ) {
    if (i = Ge(l.times(s), new e(n++ * n++), u, 1), l = r ? t.plus(i) : t.minus(i), t = Ge(i.times(s), new e(n++ * n++), u, 1), i = l.plus(t), i.d[c] !== void 0) {
      for (a = c; i.d[a] === l.d[a] && a--; ) ;
      if (a == -1) break;
    }
    a = l, l = t, t = i, i = a;
  }
  return Te = !0, i.d.length = c + 1, i;
}
function Aa(e, n) {
  for (var o = e; --n; ) o *= e;
  return o;
}
function vp(e, n) {
  var o, t = n.s < 0, r = Gn(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return so = t ? 4 : 1, n;
  if (o = n.divToInt(r), o.isZero())
    so = t ? 3 : 2;
  else {
    if (n = n.minus(o.times(r)), n.lte(a))
      return so = hc(o) ? t ? 2 : 3 : t ? 4 : 1, n;
    so = hc(o) ? t ? 1 : 4 : t ? 3 : 2;
  }
  return n.minus(r).abs();
}
function Ws(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, p = e.constructor, g = o !== void 0;
  if (g ? (Bn(o, 1, Ao), t === void 0 ? t = p.rounding : Bn(t, 0, 8)) : (o = p.precision, t = p.rounding), !e.isFinite())
    c = fp(e);
  else {
    for (c = eo(e), i = c.indexOf("."), g ? (r = 2, n == 16 ? o = o * 4 - 3 : n == 8 && (o = o * 3 - 2)) : r = n, i >= 0 && (c = c.replace(".", ""), f = new p(1), f.e = c.length - i, f.d = wr(eo(f), 10, r), f.e = f.d.length), d = wr(c, 10, r), a = s = d.length; d[--s] == 0; ) d.pop();
    if (!d[0])
      c = g ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new p(e), e.d = d, e.e = a, e = Ge(e, f, o, t, 0, r), d = e.d, a = e.e, u = rp), i = d[o], l = r / 2, u = u || d[o + 1] !== void 0, u = t < 4 ? (i !== void 0 || u) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : i > l || i === l && (t === 4 || u || t === 6 && d[o - 1] & 1 || t === (e.s < 0 ? 8 : 7)), d.length = o, u)
        for (; ++d[--o] > r - 1; )
          d[o] = 0, o || (++a, d.unshift(1));
      for (s = d.length; !d[s - 1]; --s) ;
      for (i = 0, c = ""; i < s; i++) c += yl.charAt(d[i]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++) c += "0";
            for (d = wr(c, r, n), s = d.length; !d[s - 1]; --s) ;
            for (i = 1, c = "1."; i < s; i++) c += yl.charAt(d[i]);
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
function gc(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function aw(e) {
  return new this(e).abs();
}
function iw(e) {
  return new this(e).acos();
}
function lw(e) {
  return new this(e).acosh();
}
function sw(e, n) {
  return new this(e).plus(n);
}
function uw(e) {
  return new this(e).asin();
}
function cw(e) {
  return new this(e).asinh();
}
function dw(e) {
  return new this(e).atan();
}
function fw(e) {
  return new this(e).atanh();
}
function vw(e, n) {
  e = new this(e), n = new this(n);
  var o, t = this.precision, r = this.rounding, a = t + 4;
  return !e.s || !n.s ? o = new this(NaN) : !e.d && !n.d ? (o = Gn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), o.s = e.s) : !n.d || e.isZero() ? (o = n.s < 0 ? Gn(this, t, r) : new this(0), o.s = e.s) : !e.d || n.isZero() ? (o = Gn(this, a, 1).times(0.5), o.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, o = this.atan(Ge(e, n, a, 1)), n = Gn(this, a, 1), this.precision = t, this.rounding = r, o = e.s < 0 ? o.minus(n) : o.plus(n)) : o = this.atan(Ge(e, n, a, 1)), o;
}
function pw(e) {
  return new this(e).cbrt();
}
function mw(e) {
  return we(e = new this(e), e.e + 1, 2);
}
function hw(e, n, o) {
  return new this(e).clamp(n, o);
}
function gw(e) {
  if (!e || typeof e != "object") throw Error(Ma + "Object expected");
  var n, o, t, r = e.defaults === !0, a = [
    "precision",
    1,
    Ao,
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
    if (o = a[n], r && (this[o] = kl[o]), (t = e[o]) !== void 0)
      if ($n(t) === t && t >= a[n + 1] && t <= a[n + 2]) this[o] = t;
      else throw Error(Io + o + ": " + t);
  if (o = "crypto", r && (this[o] = kl[o]), (t = e[o]) !== void 0)
    if (t === !0 || t === !1 || t === 0 || t === 1)
      if (t)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[o] = !0;
        else
          throw Error(ip);
      else
        this[o] = !1;
    else
      throw Error(Io + o + ": " + t);
  return this;
}
function bw(e) {
  return new this(e).cos();
}
function yw(e) {
  return new this(e).cosh();
}
function pp(e) {
  var n, o, t;
  function r(a) {
    var i, l, s, u = this;
    if (!(u instanceof r)) return new r(a);
    if (u.constructor = r, bc(a)) {
      u.s = a.s, Te ? !a.d || a.e > r.maxE ? (u.e = NaN, u.d = null) : a.e < r.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (s = typeof a, s === "number") {
      if (a === 0) {
        u.s = 1 / a < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, u.s = -1) : u.s = 1, a === ~~a && a < 1e7) {
        for (i = 0, l = a; l >= 10; l /= 10) i++;
        Te ? i > r.maxE ? (u.e = NaN, u.d = null) : i < r.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [a]) : (u.e = i, u.d = [a]);
        return;
      } else if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Cl(u, a.toString());
    } else if (s !== "string")
      throw Error(Io + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), sp.test(a) ? Cl(u, a) : tw(u, a);
  }
  if (r.prototype = J, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = gw, r.clone = pp, r.isDecimal = bc, r.abs = aw, r.acos = iw, r.acosh = lw, r.add = sw, r.asin = uw, r.asinh = cw, r.atan = dw, r.atanh = fw, r.atan2 = vw, r.cbrt = pw, r.ceil = mw, r.clamp = hw, r.cos = bw, r.cosh = yw, r.div = kw, r.exp = $w, r.floor = ww, r.hypot = Cw, r.ln = Sw, r.log = Pw, r.log10 = Ow, r.log2 = zw, r.max = Tw, r.min = Ew, r.mod = Iw, r.mul = Bw, r.pow = Dw, r.random = Mw, r.round = Nw, r.sign = Aw, r.sin = Vw, r.sinh = Rw, r.sqrt = Lw, r.sub = Fw, r.sum = Hw, r.tan = Uw, r.tanh = Yw, r.trunc = jw, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (t = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < t.length; ) e.hasOwnProperty(o = t[n++]) || (e[o] = this[o]);
  return r.config(e), r;
}
function kw(e, n) {
  return new this(e).div(n);
}
function $w(e) {
  return new this(e).exp();
}
function ww(e) {
  return we(e = new this(e), e.e + 1, 3);
}
function Cw() {
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
function bc(e) {
  return e instanceof $o || e && e.toStringTag === lp || !1;
}
function Sw(e) {
  return new this(e).ln();
}
function Pw(e, n) {
  return new this(e).log(n);
}
function zw(e) {
  return new this(e).log(2);
}
function Ow(e) {
  return new this(e).log(10);
}
function Tw() {
  return dp(this, arguments, "lt");
}
function Ew() {
  return dp(this, arguments, "gt");
}
function Iw(e, n) {
  return new this(e).mod(n);
}
function Bw(e, n) {
  return new this(e).mul(n);
}
function Dw(e, n) {
  return new this(e).pow(n);
}
function Mw(e) {
  var n, o, t, r, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : Bn(e, 1, Ao), t = Math.ceil(e / Pe), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(t)); a < t; )
        r = n[a], r >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(t *= 4); a < t; )
        r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(r % 1e7), a += 4);
      a = t / 4;
    } else
      throw Error(ip);
  else for (; a < t; ) l[a++] = Math.random() * 1e7 | 0;
  for (t = l[--a], e %= Pe, t && e && (r = fn(10, Pe - e), l[a] = (t / r | 0) * r); l[a] === 0; a--) l.pop();
  if (a < 0)
    o = 0, l = [0];
  else {
    for (o = -1; l[0] === 0; o -= Pe) l.shift();
    for (t = 1, r = l[0]; r >= 10; r /= 10) t++;
    t < Pe && (o -= Pe - t);
  }
  return i.e = o, i.d = l, i;
}
function Nw(e) {
  return we(e = new this(e), e.e + 1, this.rounding);
}
function Aw(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Vw(e) {
  return new this(e).sin();
}
function Rw(e) {
  return new this(e).sinh();
}
function Lw(e) {
  return new this(e).sqrt();
}
function Fw(e, n) {
  return new this(e).sub(n);
}
function Hw() {
  var e = 0, n = arguments, o = new this(n[e]);
  for (Te = !1; o.s && ++e < n.length; ) o = o.plus(n[e]);
  return Te = !0, we(o, this.precision, this.rounding);
}
function Uw(e) {
  return new this(e).tan();
}
function Yw(e) {
  return new this(e).tanh();
}
function jw(e) {
  return we(e = new this(e), e.e + 1, 1);
}
J[Symbol.for("nodejs.util.inspect.custom")] = J.toString;
J[Symbol.toStringTag] = "Decimal";
var $o = J.constructor = pp(kl);
Nr = new $o(Nr);
Ar = new $o(Ar);
const mp = {
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
  onBeforeChange: V(),
  onChange: V(),
  onIncrement: V(),
  onDecrement: V(),
  "onUpdate:modelValue": V()
}, yc = 100, kc = 600, { name: Ww, n: Kw, classes: qw } = x("counter"), Xw = ["inputmode", "readonly", "disabled"];
function Gw(e, n) {
  const o = Q("var-icon"), t = Q("var-button"), r = Q("var-form-details");
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      N(
        "div",
        He({
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
            class: v(
              e.classes(
                e.n("decrement-button"),
                [!e.decrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: X({
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
              G(o, { name: "minus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]),
          Ae(N("input", {
            class: v(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
            style: X({
              width: e.toSizeUnit(e.inputWidth),
              fontSize: e.toSizeUnit(e.inputTextSize)
            }),
            inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
            readonly: e.readonly || e.formReadonly,
            disabled: e.disabled || e.formDisabled || e.disableInput,
            "onUpdate:modelValue": n[0] || (n[0] = (a) => e.inputValue = a),
            onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
          }, null, 46, Xw), [
            [Xh, e.inputValue]
          ]),
          G(t, {
            class: v(
              e.classes(
                e.n("increment-button"),
                [!e.incrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: X({
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
const hp = _({
  name: Ww,
  components: {
    VarButton: On,
    VarIcon: Ze,
    VarFormDetails: zn
  },
  directives: { Ripple: nn },
  inheritAttrs: !1,
  props: mp,
  setup(e) {
    const n = $(""), { bindForm: o, form: t } = Fn(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = Ln(), { readonly: s, disabled: u } = t ?? {}, c = I(() => {
      const { max: j, modelValue: le } = e;
      return j != null && L(le) >= L(j);
    }), d = I(() => {
      const { min: j, modelValue: le } = e;
      return j != null && L(le) <= L(j);
    });
    let f, p, g, m;
    C(o, {
      reset: b,
      validate: w,
      resetValidation: l
    }), de(
      () => e.modelValue,
      (j) => {
        H(P(String(j))), C(e.onChange, L(j));
      }
    ), H(P(String(e.modelValue)));
    function w() {
      return i(e.rules, e.modelValue);
    }
    function y(j) {
      Ue(() => {
        const { validateTrigger: le, rules: ee, modelValue: pe } = e;
        a(le, j, ee, pe);
      });
    }
    function b() {
      const { min: j } = e;
      C(e["onUpdate:modelValue"], j != null ? L(j) : 0), l();
    }
    function P(j) {
      const { decimalLength: le, max: ee, min: pe } = e;
      let ye = L(j);
      return ee != null && ye > L(ee) && (ye = L(ee)), pe != null && ye < L(pe) && (ye = L(pe)), j = String(ye), le != null && (j = ye.toFixed(L(le))), j;
    }
    function z(j) {
      const { lazyChange: le, onBeforeChange: ee } = e, { value: pe } = j.target, ye = P(pe);
      le ? C(ee, L(ye), Y) : H(ye), y("onInputChange");
    }
    function O() {
      const {
        disabled: j,
        readonly: le,
        disableDecrement: ee,
        decrementButton: pe,
        lazyChange: ye,
        step: Ee,
        modelValue: F,
        onDecrement: Z,
        onBeforeChange: oe
      } = e;
      if (u != null && u.value || s != null && s.value || j || le || ee || !pe || d.value)
        return;
      const me = new $o(L(F)).minus(new $o(L(Ee))).toString(), D = P(me), K = L(D);
      C(Z, K), ye ? C(oe, K, Y) : (H(D), y("onDecrement"));
    }
    function B() {
      const {
        disabled: j,
        readonly: le,
        disableIncrement: ee,
        incrementButton: pe,
        lazyChange: ye,
        step: Ee,
        modelValue: F,
        onIncrement: Z,
        onBeforeChange: oe
      } = e;
      if (u != null && u.value || s != null && s.value || j || le || ee || !pe || c.value)
        return;
      const me = new $o(L(F)).plus(new $o(L(Ee))).toString(), D = P(me), K = L(D);
      C(Z, K), ye ? C(oe, K, Y) : (H(D), y("onIncrement"));
    }
    function T() {
      const { press: j, lazyChange: le } = e;
      !j || le || (m = window.setTimeout(() => {
        U();
      }, kc));
    }
    function E() {
      const { press: j, lazyChange: le } = e;
      !j || le || (g = window.setTimeout(() => {
        W();
      }, kc));
    }
    function M() {
      p && clearTimeout(p), m && clearTimeout(m);
    }
    function R() {
      f && clearTimeout(f), g && clearTimeout(g);
    }
    function W() {
      f = window.setTimeout(() => {
        B(), W();
      }, yc);
    }
    function U() {
      p = window.setTimeout(() => {
        O(), U();
      }, yc);
    }
    function H(j) {
      n.value = j;
      const le = L(j);
      C(e["onUpdate:modelValue"], le);
    }
    function Y(j) {
      H(P(String(j))), y("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: s,
      isMax: c,
      isMin: d,
      n: Kw,
      classes: qw,
      formatElevation: un,
      validate: w,
      reset: b,
      resetValidation: l,
      handleChange: z,
      decrement: O,
      increment: B,
      pressDecrement: T,
      pressIncrement: E,
      releaseDecrement: M,
      releaseIncrement: R,
      toSizeUnit: ze,
      toNumber: L
    };
  }
});
hp.render = Gw;
var Va = hp;
te(Va);
ae(Va, mp);
const H5 = Va;
var Sl = Va, gp = 60, bp = gp * 60, yp = bp * 24, Zw = yp * 7, vt = 1e3, Ai = gp * vt, $c = bp * vt, Jw = yp * vt, Qw = Zw * vt, Ks = "millisecond", Qo = "second", _o = "minute", xo = "hour", mo = "day", Cr = "week", Xn = "month", kp = "quarter", ho = "year", et = "date", _w = "YYYY-MM-DDTHH:mm:ssZ", wc = "Invalid Date", xw = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, eC = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const nC = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Pl = function(n, o, t) {
  var r = String(n);
  return !r || r.length >= o ? n : "" + Array(o + 1 - r.length).join(t) + n;
}, oC = function(n) {
  var o = -n.utcOffset(), t = Math.abs(o), r = Math.floor(t / 60), a = t % 60;
  return (o <= 0 ? "+" : "-") + Pl(r, 2, "0") + ":" + Pl(a, 2, "0");
}, tC = function e(n, o) {
  if (n.date() < o.date()) return -e(o, n);
  var t = (o.year() - n.year()) * 12 + (o.month() - n.month()), r = n.clone().add(t, Xn), a = o - r < 0, i = n.clone().add(t + (a ? -1 : 1), Xn);
  return +(-(t + (o - r) / (a ? r - i : i - r)) || 0);
}, rC = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, aC = function(n) {
  var o = {
    M: Xn,
    y: ho,
    w: Cr,
    d: mo,
    D: et,
    h: xo,
    m: _o,
    s: Qo,
    ms: Ks,
    Q: kp
  };
  return o[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, iC = function(n) {
  return n === void 0;
};
const lC = {
  s: Pl,
  z: oC,
  m: tC,
  a: rC,
  p: aC,
  u: iC
};
var Tt = "en", Fo = {};
Fo[Tt] = nC;
var qs = function(n) {
  return n instanceof Ra;
}, Rr = function e(n, o, t) {
  var r;
  if (!n) return Tt;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    Fo[a] && (r = a), o && (Fo[a] = o, r = a);
    var i = n.split("-");
    if (!r && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    Fo[l] = n, r = l;
  }
  return !t && r && (Tt = r), r || !t && Tt;
}, se = function(n, o) {
  if (qs(n))
    return n.clone();
  var t = typeof o == "object" ? o : {};
  return t.date = n, t.args = arguments, new Ra(t);
}, sC = function(n, o) {
  return se(n, {
    locale: o.$L,
    utc: o.$u,
    x: o.$x,
    $offset: o.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, qe = lC;
qe.l = Rr;
qe.i = qs;
qe.w = sC;
var uC = function(n) {
  var o = n.date, t = n.utc;
  if (o === null) return /* @__PURE__ */ new Date(NaN);
  if (qe.u(o)) return /* @__PURE__ */ new Date();
  if (o instanceof Date) return new Date(o);
  if (typeof o == "string" && !/Z$/i.test(o)) {
    var r = o.match(xw);
    if (r) {
      var a = r[2] - 1 || 0, i = (r[7] || "0").substring(0, 3);
      return t ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
    }
  }
  return new Date(o);
}, Ra = /* @__PURE__ */ function() {
  function e(o) {
    this.$L = Rr(o.locale, null, !0), this.parse(o);
  }
  var n = e.prototype;
  return n.parse = function(t) {
    this.$d = uC(t), this.$x = t.x || {}, this.init();
  }, n.init = function() {
    var t = this.$d;
    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
  }, n.$utils = function() {
    return qe;
  }, n.isValid = function() {
    return this.$d.toString() !== wc;
  }, n.isSame = function(t, r) {
    var a = se(t);
    return this.startOf(r) <= a && a <= this.endOf(r);
  }, n.isAfter = function(t, r) {
    return se(t) < this.startOf(r);
  }, n.isBefore = function(t, r) {
    return this.endOf(r) < se(t);
  }, n.$g = function(t, r, a) {
    return qe.u(t) ? this[r] : this.set(a, t);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(t, r) {
    var a = this, i = qe.u(r) ? !0 : r, l = qe.p(t), s = function(w, y) {
      var b = qe.w(a.$u ? Date.UTC(a.$y, y, w) : new Date(a.$y, y, w), a);
      return i ? b : b.endOf(mo);
    }, u = function(w, y) {
      var b = [0, 0, 0, 0], P = [23, 59, 59, 999];
      return qe.w(a.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? b : P).slice(y)
      ), a);
    }, c = this.$W, d = this.$M, f = this.$D, p = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case ho:
        return i ? s(1, 0) : s(31, 11);
      case Xn:
        return i ? s(1, d) : s(0, d + 1);
      case Cr: {
        var g = this.$locale().weekStart || 0, m = (c < g ? c + 7 : c) - g;
        return s(i ? f - m : f + (6 - m), d);
      }
      case mo:
      case et:
        return u(p + "Hours", 0);
      case xo:
        return u(p + "Minutes", 1);
      case _o:
        return u(p + "Seconds", 2);
      case Qo:
        return u(p + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(t) {
    return this.startOf(t, !1);
  }, n.$set = function(t, r) {
    var a, i = qe.p(t), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[mo] = l + "Date", a[et] = l + "Date", a[Xn] = l + "Month", a[ho] = l + "FullYear", a[xo] = l + "Hours", a[_o] = l + "Minutes", a[Qo] = l + "Seconds", a[Ks] = l + "Milliseconds", a)[i], u = i === mo ? this.$D + (r - this.$W) : r;
    if (i === Xn || i === ho) {
      var c = this.clone().set(et, 1);
      c.$d[s](u), c.init(), this.$d = c.set(et, Math.min(this.$D, c.daysInMonth())).$d;
    } else s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(t, r) {
    return this.clone().$set(t, r);
  }, n.get = function(t) {
    return this[qe.p(t)]();
  }, n.add = function(t, r) {
    var a = this, i;
    t = Number(t);
    var l = qe.p(r), s = function(f) {
      var p = se(a);
      return qe.w(p.date(p.date() + Math.round(f * t)), a);
    };
    if (l === Xn)
      return this.set(Xn, this.$M + t);
    if (l === ho)
      return this.set(ho, this.$y + t);
    if (l === mo)
      return s(1);
    if (l === Cr)
      return s(7);
    var u = (i = {}, i[_o] = Ai, i[xo] = $c, i[Qo] = vt, i)[l] || 1, c = this.$d.getTime() + t * u;
    return qe.w(c, this);
  }, n.subtract = function(t, r) {
    return this.add(t * -1, r);
  }, n.format = function(t) {
    var r = this, a = this.$locale();
    if (!this.isValid()) return a.invalidDate || wc;
    var i = t || _w, l = qe.z(this), s = this.$H, u = this.$m, c = this.$M, d = a.weekdays, f = a.months, p = a.meridiem, g = function(b, P, z, O) {
      return b && (b[P] || b(r, i)) || z[P].slice(0, O);
    }, m = function(b) {
      return qe.s(s % 12 || 12, b, "0");
    }, k = p || function(y, b, P) {
      var z = y < 12 ? "AM" : "PM";
      return P ? z.toLowerCase() : z;
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
    return i.replace(eC, function(y, b) {
      return b || w[y] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(t, r, a) {
    var i, l = qe.p(r), s = se(t), u = (s.utcOffset() - this.utcOffset()) * Ai, c = this - s, d = qe.m(this, s);
    return d = (i = {}, i[ho] = d / 12, i[Xn] = d, i[kp] = d / 3, i[Cr] = (c - u) / Qw, i[mo] = (c - u) / Jw, i[xo] = c / $c, i[_o] = c / Ai, i[Qo] = c / vt, i)[l] || c, a ? d : qe.a(d);
  }, n.daysInMonth = function() {
    return this.endOf(Xn).$D;
  }, n.$locale = function() {
    return Fo[this.$L];
  }, n.locale = function(t, r) {
    if (!t) return this.$L;
    var a = this.clone(), i = Rr(t, r, !0);
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
}(), $p = Ra.prototype;
se.prototype = $p;
[["$ms", Ks], ["$s", Qo], ["$m", _o], ["$H", xo], ["$W", mo], ["$M", Xn], ["$y", ho], ["$D", et]].forEach(function(e) {
  $p[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
se.extend = function(e, n) {
  return e.$i || (e(n, Ra, se), e.$i = !0), se;
};
se.locale = Rr;
se.isDayjs = qs;
se.unix = function(e) {
  return se(e * 1e3);
};
se.en = Fo[Tt];
se.Ls = Fo;
se.p = {};
const wp = function(e, n) {
  n.prototype.isSameOrBefore = function(o, t) {
    return this.isSame(o, t) || this.isBefore(o, t);
  };
}, Cp = function(e, n) {
  n.prototype.isSameOrAfter = function(o, t) {
    return this.isSame(o, t) || this.isAfter(o, t);
  };
}, Sr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], Pt = ["0", "1", "2", "3", "4", "5", "6"], Sp = {
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
  onPreview: V(),
  onChange: V(),
  "onUpdate:modelValue": V()
}, { n: cC } = x("date-picker-header");
function dC(e, n) {
  const o = Q("var-icon"), t = Q("var-button");
  return h(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      G(t, {
        class: v(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (r) => e.checkDate("prev"))
      }, {
        default: ce(() => [
          G(o, { name: "chevron-left" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class", "disabled"]),
      N(
        "div",
        {
          class: v(e.n("value")),
          onClick: n[1] || (n[1] = (r) => e.$emit("check-panel"))
        },
        [
          G(Qe, {
            name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (h(), S(
                "div",
                { key: e.showDate },
                ie(e.showDate),
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
        class: v(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (r) => e.checkDate("next"))
      }, {
        default: ce(() => [
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
const Pp = _({
  name: "PanelHeader",
  components: {
    VarButton: On,
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
    const o = $(!1), t = $(0), { t: r } = ao(), a = I(() => {
      var l;
      const { date: s, type: u } = e, { previewMonth: c, previewYear: d } = s;
      if (u === "year") return d;
      if (u === "month") return L(d) + t.value;
      const f = (l = (r || tn)("datePickerMonthDict")) == null ? void 0 : l[c].name;
      return (r || tn)("lang") === "zh-CN" ? `${d} ${f}` : `${f} ${d}`;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (n("check-date", l), o.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return de(
      () => e.date,
      () => {
        t.value = 0;
      }
    ), {
      n: cC,
      reverse: o,
      showDate: a,
      checkDate: i
    };
  }
});
Pp.render = dC;
var Xs = Pp, fC = Object.defineProperty, Cc = Object.getOwnPropertySymbols, vC = Object.prototype.hasOwnProperty, pC = Object.prototype.propertyIsEnumerable, Sc = (e, n, o) => n in e ? fC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, mC = (e, n) => {
  for (var o in n || (n = {}))
    vC.call(n, o) && Sc(e, o, n[o]);
  if (Cc)
    for (var o of Cc(n))
      pC.call(n, o) && Sc(e, o, n[o]);
  return e;
};
se.extend(wp);
se.extend(Cp);
const { n: cr, classes: hC } = x("month-picker"), { n: dr } = x("date-picker");
function gC(e, n) {
  const o = Q("panel-header"), t = Q("var-button");
  return h(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      N(
        "div",
        {
          class: v(e.n("content"))
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
          G(Qe, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (h(), S("ul", { key: e.panelKey }, [
                (h(!0), S(
                  Ne,
                  null,
                  Ke(e.MONTH_LIST, (r) => (h(), S("li", { key: r }, [
                    G(t, He({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation,
                      ref_for: !0
                    }, mC({}, e.buttonProps(r)), {
                      onClick: (a) => e.chooseMonth(r, a)
                    }), {
                      default: ce(() => [
                        Be(
                          ie(e.getMonthAbbr(r)),
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
const zp = _({
  name: "MonthPickerPanel",
  components: {
    VarButton: On,
    PanelHeader: Xs
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
    const [o, t] = e.current.split("-"), r = $(!1), a = $(0), i = $(null), l = _e({
      left: !1,
      right: !1
    }), { t: s } = ao(), u = I(() => e.choose.chooseYear === e.preview.previewYear), c = I(() => e.preview.previewYear === o), d = (y) => {
      var b, P;
      return (P = (b = (s || tn)("datePickerMonthDict")) == null ? void 0 : b[y].abbr) != null ? P : "";
    }, f = (y) => {
      const {
        preview: { previewYear: b },
        componentProps: { min: P, max: z }
      } = e;
      let O = !0, B = !0;
      const T = `${b}-${y}`;
      return z && (O = se(T).isSameOrBefore(se(z), "month")), P && (B = se(T).isSameOrAfter(se(P), "month")), O && B;
    }, p = (y) => {
      const {
        choose: { chooseMonths: b, chooseDays: P, chooseRangeMonth: z },
        componentProps: { type: O, range: B }
      } = e;
      if (B) {
        if (!z.length) return !1;
        const T = se(y).isSameOrBefore(se(z[1]), "month"), E = se(y).isSameOrAfter(se(z[0]), "month");
        return T && E;
      }
      return O === "month" ? b.includes(y) : P.some((T) => T.includes(y));
    }, g = (y) => {
      const {
        choose: { chooseMonth: b },
        preview: { previewYear: P },
        componentProps: { allowedDates: z, color: O, multiple: B, range: T }
      } = e, E = `${P}-${y}`, M = () => T || B ? p(E) : b === y && u.value, W = f(y) ? z ? !z(E) : !1 : !0, U = () => W ? !0 : T || B ? !p(E) : !u.value || b !== y, H = () => c.value && t === y && e.componentProps.showCurrent ? (T || B || u.value) && W ? !0 : T || B ? !p(E) : u.value ? b !== t : !0 : !1, Y = () => W ? "" : H() ? O ?? "" : M() ? "" : `${dr()}-color-cover`, j = Y().startsWith(dr());
      return {
        outline: H(),
        text: U(),
        color: U() ? "" : O,
        textColor: j ? "" : Y(),
        [`${dr()}-color-cover`]: j,
        class: hC(cr("button"), [W, cr("button--disabled")]),
        disabled: W
      };
    }, m = (y, b) => {
      b.currentTarget.classList.contains(cr("button--disabled")) || n("choose-month", y);
    }, k = (y) => {
      r.value = y === "prev", a.value += y === "prev" ? -1 : 1, n("check-preview", "year", y);
    }, w = (y) => {
      i.value.checkDate(y);
    };
    return de(
      () => [e.preview.previewYear, e.componentProps.max, e.componentProps.min],
      ([y, b, P]) => {
        b && (l.right = !se(`${L(y) + 1}`).isSameOrBefore(se(b), "year")), P && (l.left = !se(`${L(y) - 1}`).isSameOrAfter(se(P), "year"));
      },
      { immediate: !0 }
    ), {
      n: cr,
      nDate: dr,
      t: tn,
      MONTH_LIST: Sr,
      headerEl: i,
      reverse: r,
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
zp.render = gC;
var bC = zp;
const Et = {
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
  onScroll: V()
};
var Pc = (e, n, o) => new Promise((t, r) => {
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
const { name: yC, n: kC, classes: $C } = x("sticky");
function wC(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: X({
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
          class: v(e.n("wrapper")),
          ref: "wrapperEl",
          style: X({
            zIndex: e.toNumber(e.zIndex),
            position: e.enableFixedMode ? "fixed" : void 0,
            width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
            height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
            left: e.enableFixedMode ? e.fixedLeft : void 0,
            top: e.enableFixedMode ? e.fixedTop : void 0
          })
        },
        [
          A(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const Op = _({
  name: yC,
  props: Et,
  setup(e) {
    const n = $(null), o = $(null), t = $(!1), r = $("0px"), a = $("0px"), i = $("auto"), l = $("auto"), s = $("auto"), u = $("auto"), c = I(() => !e.disabled && e.cssMode), d = I(() => !e.disabled && !e.cssMode && t.value), f = I(() => xe(e.offsetTop));
    let p;
    de(() => e.disabled, y), hn(() => Pc(this, null, function* () {
      yield kn(), m(), k();
    })), Jt(w), ro(y), je(() => window, "scroll", k);
    function g() {
      const { cssMode: b, disabled: P } = e;
      if (P)
        return;
      let z = 0;
      if (p && p !== window) {
        const { top: R } = an(p);
        z = R;
      }
      const O = o.value, B = n.value, { top: T, left: E } = an(B), M = T - z;
      return M <= f.value ? (b || (i.value = `${B.offsetWidth}px`, l.value = `${B.offsetHeight}px`, r.value = `${z + f.value}px`, a.value = `${E}px`, s.value = `${O.offsetWidth}px`, u.value = `${O.offsetHeight}px`, t.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (t.value = !1, {
        offsetTop: M,
        isFixed: !1
      });
    }
    function m() {
      p = To(n.value), p !== window && p.addEventListener("scroll", k);
    }
    function k() {
      const b = g();
      b && C(e.onScroll, b.offsetTop, b.isFixed);
    }
    function w() {
      !p || p === window || p.removeEventListener("scroll", k);
    }
    function y() {
      return Pc(this, null, function* () {
        t.value = !1, yield nt(), g();
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
      n: kC,
      classes: $C,
      resize: y,
      toNumber: L
    };
  }
});
Op.render = wC;
var La = Op;
te(La);
ae(La, Et);
const U5 = La;
var pt = La, CC = Object.defineProperty, zc = Object.getOwnPropertySymbols, SC = Object.prototype.hasOwnProperty, PC = Object.prototype.propertyIsEnumerable, Oc = (e, n, o) => n in e ? CC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, zC = (e, n) => {
  for (var o in n || (n = {}))
    SC.call(n, o) && Oc(e, o, n[o]);
  if (zc)
    for (var o of zc(n))
      PC.call(n, o) && Oc(e, o, n[o]);
  return e;
};
const { n: fr, classes: Tc } = x("year-picker"), { n: vr } = x("date-picker");
function OC(e, n) {
  const o = Q("panel-header"), t = Q("var-sticky"), r = Q("var-button");
  return h(), S("div", null, [
    G(t, { "css-mode": "" }, {
      default: ce(() => [
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
    G(Qe, {
      name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
    }, {
      default: ce(() => [
        (h(), S(
          "ul",
          {
            ref: "panel",
            class: v(e.n()),
            key: e.panelKey
          },
          [
            (h(!0), S(
              Ne,
              null,
              Ke(e.yearList, (a) => (h(), S("li", { key: a }, [
                G(r, He({
                  type: "primary",
                  "var-year-picker-cover": "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation,
                  ref_for: !0
                }, zC({}, e.buttonProps(`${a}`)), {
                  onClick: (i) => e.chooseYear(a, i)
                }), {
                  default: ce(() => [
                    Be(
                      ie(a),
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
const Tp = _({
  name: "YearPickerPanel",
  components: {
    VarButton: On,
    VarSticky: pt,
    PanelHeader: Xs
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
    const [o] = e.current.split("-"), t = $(), r = $(null), a = $(!1), i = $(0), l = $(0), s = _e({
      left: !1,
      right: !1
    }), u = I(() => {
      if (!e.preview)
        return [];
      const w = Math.floor(L(e.preview) / 100 + l.value) * 100;
      return Array.from(Array(100), (y, b) => Math.max(0, w) + b);
    }), c = (w) => {
      const {
        choose: { chooseMonths: y, chooseDays: b, chooseYears: P, chooseRangeYear: z },
        componentProps: { type: O, range: B }
      } = e;
      if (B) {
        if (!z.length) return !1;
        const T = se(w).isSameOrBefore(se(z[1]), "year"), E = se(w).isSameOrAfter(se(z[0]), "year");
        return T && E;
      }
      return O === "year" ? P.includes(w) : O === "month" ? y.some((T) => T.includes(w)) : b.some((T) => T.includes(w));
    }, d = (w) => {
      const {
        componentProps: { min: y, max: b }
      } = e, P = b ? se(w).isSameOrBefore(se(b), "year") : !0, z = y ? se(w).isSameOrAfter(se(y), "year") : !0;
      return P && z;
    }, f = (w) => {
      const {
        choose: { chooseYear: y },
        componentProps: { allowedDates: b, color: P, multiple: z, range: O }
      } = e, B = () => O || z ? c(w) : y === w, E = d(w) ? b ? !b(w) : !1 : !0, M = () => E ? !0 : O || z ? !c(w) : y !== w, R = () => o === w && e.componentProps.showCurrent ? (O || z) && E ? !0 : O || z ? !c(w) : y !== o : !1, W = () => E ? "" : R() ? P ?? "" : B() ? "" : `${vr()}-color-cover`, U = W().startsWith(vr());
      return {
        outline: R(),
        text: M(),
        color: M() ? "" : P,
        textColor: U ? "" : W(),
        [`${vr()}-color-cover`]: U,
        class: Tc(fr("button"), [E, fr("button--disabled")]),
        disabled: E
      };
    }, p = (w, y) => {
      y.currentTarget.classList.contains(fr("button--disabled")) || n("choose-year", w);
    }, g = () => {
      var w;
      const y = (w = t.value.querySelector(".var-button--primary")) != null ? w : t.value.querySelector(".var-button--outline");
      y == null || y.scrollIntoView({
        block: "center"
      });
    }, m = (w) => {
      const y = w === "prev";
      a.value = y, i.value += y ? -1 : 1, l.value += y ? -1 : 1;
    }, k = (w) => {
      r.value.checkDate(w);
    };
    return hn(g), de(
      () => e.preview,
      () => {
        l.value = 0;
      }
    ), de(
      () => [u.value, e.componentProps.max, e.componentProps.min],
      (w) => {
        const [y, b, P] = w;
        b && (s.right = !se(`${L(y[y.length - 1])}`).isSameOrBefore(se(b), "year")), P && (s.left = !se(`${L(y[0])}`).isSameOrAfter(se(P), "year")), L(y[0] <= 0) && (s.left = !1);
      },
      {
        immediate: !0
      }
    ), {
      n: fr,
      classes: Tc,
      buttonProps: f,
      panel: t,
      headerEl: r,
      yearList: u,
      reverse: a,
      panelKey: i,
      panelBtnDisabled: s,
      nDate: vr,
      checkDate: m,
      chooseYear: p,
      forwardRef: k,
      toNumber: L
    };
  }
});
Tp.render = OC;
var TC = Tp, EC = Object.defineProperty, Ec = Object.getOwnPropertySymbols, IC = Object.prototype.hasOwnProperty, BC = Object.prototype.propertyIsEnumerable, Ic = (e, n, o) => n in e ? EC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, DC = (e, n) => {
  for (var o in n || (n = {}))
    IC.call(n, o) && Ic(e, o, n[o]);
  if (Ec)
    for (var o of Ec(n))
      BC.call(n, o) && Ic(e, o, n[o]);
  return e;
};
se.extend(wp);
se.extend(Cp);
const { n: Xo, classes: MC } = x("day-picker"), { n: pr } = x("date-picker");
function NC(e, n) {
  const o = Q("panel-header"), t = Q("var-button");
  return h(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      N(
        "div",
        {
          class: v(e.n("content"))
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
          G(Qe, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (h(), S("div", { key: e.panelKey }, [
                N(
                  "ul",
                  {
                    class: v(e.n("head"))
                  },
                  [
                    (h(!0), S(
                      Ne,
                      null,
                      Ke(e.sortWeekList, (r) => (h(), S(
                        "li",
                        { key: r },
                        ie(e.getDayAbbr(r)),
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
                    class: v(e.n("body"))
                  },
                  [
                    (h(!0), S(
                      Ne,
                      null,
                      Ke(e.days, (r, a) => (h(), S("li", { key: a }, [
                        G(t, He({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation,
                          ref_for: !0
                        }, DC({}, e.buttonProps(r)), {
                          onClick: (i) => e.chooseDay(r, i)
                        }), {
                          default: ce(() => [
                            Be(
                              ie(e.filterDay(r)),
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
const Ep = _({
  name: "DayPickerPanel",
  components: {
    VarButton: On,
    PanelHeader: Xs
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
    const [o, t, r] = e.current.split("-"), a = $([]), i = $(!1), l = $(0), s = $(null), u = _e({
      left: !1,
      right: !1
    }), { t: c } = ao(), d = I(
      () => e.preview.previewYear === o && e.preview.previewMonth === t
    ), f = I(
      () => e.choose.chooseYear === e.preview.previewYear && e.choose.chooseMonth === e.preview.previewMonth
    ), p = I(() => {
      const T = Pt.findIndex((E) => E === e.componentProps.firstDayOfWeek);
      return T === -1 || T === 0 ? Pt : [...Pt.slice(T), ...Pt.slice(0, T)];
    }), g = (T) => {
      var E, M;
      return (M = (E = (c || tn)("datePickerWeekDict")) == null ? void 0 : E[T].abbr) != null ? M : "";
    }, m = (T) => T > 0 ? T : "", k = () => {
      const {
        preview: { previewMonth: T, previewYear: E }
      } = e, M = se(`${E}-${T}`).daysInMonth(), R = se(`${E}-${T}-01`).day(), W = p.value.findIndex((U) => U === `${R}`);
      a.value = [...Array(W).fill(-1), ...Array.from(Array(M + 1).keys())].filter((U) => U);
    }, w = () => {
      const {
        preview: { previewYear: T, previewMonth: E },
        componentProps: { max: M, min: R }
      } = e;
      if (M) {
        const W = `${T}-${L(E) + 1}`;
        u.right = !se(W).isSameOrBefore(se(M), "month");
      }
      if (R) {
        const W = `${T}-${L(E) - 1}`;
        u.left = !se(W).isSameOrAfter(se(R), "month");
      }
    }, y = (T) => {
      const {
        preview: { previewYear: E, previewMonth: M },
        componentProps: { min: R, max: W }
      } = e;
      let U = !0, H = !0;
      const Y = `${E}-${M}-${T}`;
      return W && (U = se(Y).isSameOrBefore(se(W), "day")), R && (H = se(Y).isSameOrAfter(se(R), "day")), U && H;
    }, b = (T) => {
      const {
        choose: { chooseDays: E, chooseRangeDay: M },
        componentProps: { range: R }
      } = e;
      if (R) {
        if (!M.length) return !1;
        const W = se(T).isSameOrBefore(se(M[1]), "day"), U = se(T).isSameOrAfter(se(M[0]), "day");
        return W && U;
      }
      return E.includes(T);
    }, P = (T) => {
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
        componentProps: { allowedDates: W, color: U, multiple: H, range: Y }
      } = e, j = `${M}-${R}-${T}`, le = () => Y || H ? b(j) : L(E) === T && f.value, pe = y(T) ? W ? !W(j) : !1 : !0, ye = () => pe ? !0 : Y || H ? !b(j) : !f.value || L(E) !== T, Ee = () => d.value && L(r) === T && e.componentProps.showCurrent ? (Y || H || f.value) && pe ? !0 : Y || H ? !b(j) : f.value ? E !== r : !0 : !1, F = () => pe ? "" : Ee() ? U ?? "" : le() ? "" : `${pr()}-color-cover`, Z = F().startsWith(pr());
      return {
        text: ye(),
        outline: Ee(),
        textColor: Z ? "" : F(),
        [`${pr()}-color-cover`]: Z,
        class: MC(Xo("button"), Xo("button--usable"), [pe, Xo("button--disabled")]),
        disabled: pe
      };
    }, z = (T) => {
      i.value = T === "prev", l.value += T === "prev" ? -1 : 1, n("check-preview", "month", T);
    }, O = (T, E) => {
      E.currentTarget.classList.contains(Xo("button--disabled")) || n("choose-day", T);
    }, B = (T) => {
      s.value.checkDate(T);
    };
    return hn(() => {
      k(), w();
    }), de(
      () => e.preview,
      () => {
        k(), w();
      }
    ), de(() => [e.componentProps.max, e.componentProps.min], w), {
      n: Xo,
      nDate: pr,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: p,
      panelBtnDisabled: u,
      forwardRef: B,
      filterDay: m,
      getDayAbbr: g,
      checkDate: z,
      chooseDay: O,
      buttonProps: P
    };
  }
});
Ep.render = NC;
var AC = Ep, VC = (e, n, o) => new Promise((t, r) => {
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
const { name: RC, n: LC, classes: FC } = x("date-picker");
function HC(e, n) {
  var o;
  const t = Q("year-picker-panel"), r = Q("month-picker-panel"), a = Q("day-picker-panel");
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      N(
        "div",
        {
          class: v(e.n("title")),
          style: X({ background: e.titleColor || e.color })
        },
        [
          N(
            "div",
            {
              class: v(e.n("title-select"))
            },
            [
              N(
                "div",
                {
                  class: v(e.n("title-hint"))
                },
                ie((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("datePickerHint")),
                3
                /* TEXT, CLASS */
              ),
              e.type !== "year" ? (h(), S(
                "div",
                {
                  key: 0,
                  class: v(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
                  onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
                },
                [
                  A(e.$slots, "year", { year: e.chooseYear }, () => [
                    Be(
                      ie(e.chooseYear),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )) : q("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          N(
            "div",
            {
              class: v(
                e.classes(
                  e.n("title-date"),
                  [!e.isYearPanel || e.type === "year", e.n("title-date--active")],
                  [e.range, e.n("title-date--range")]
                )
              ),
              onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
            },
            [
              G(Qe, {
                name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey`
              }, {
                default: ce(() => [
                  e.type === "year" ? (h(), S("div", {
                    key: `${e.chooseYear}`
                  }, [
                    e.range ? A(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeYear
                    }, () => [
                      Be(
                        ie(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? A(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseYears
                    }, () => [
                      Be(
                        ie(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : A(e.$slots, "year", {
                      key: 2,
                      year: e.chooseYear
                    }, () => [
                      Be(
                        ie(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : e.type === "month" ? (h(), S("div", {
                    key: `${e.chooseYear}${e.chooseMonth}`
                  }, [
                    e.range ? A(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeMonth
                    }, () => [
                      Be(
                        ie(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? A(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseMonths
                    }, () => [
                      Be(
                        ie(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : A(e.$slots, "month", {
                      key: 2,
                      month: e.chooseMonth,
                      year: e.chooseYear
                    }, () => [
                      Be(
                        ie(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : (h(), S("div", {
                    key: `${e.chooseYear}${e.chooseMonth}${e.chooseDay}`
                  }, [
                    e.range ? A(e.$slots, "range", {
                      key: 0,
                      choose: e.formatRange
                    }, () => [
                      Be(
                        ie(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? A(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseDays
                    }, () => [
                      Be(
                        ie(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : A(e.$slots, "date", wo(He({ key: 2 }, e.slotProps)), () => [
                      Be(
                        ie(e.getDateTitle),
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
          class: v(e.n("body")),
          onTouchstart: n[2] || (n[2] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
          onTouchmove: n[3] || (n[3] = (...i) => e.handleTouchmove && e.handleTouchmove(...i)),
          onTouchend: n[4] || (n[4] = (...i) => e.handleTouchend && e.handleTouchend(...i))
        },
        [
          G(Qe, {
            name: `${e.n()}-panel-fade`
          }, {
            default: ce(() => [
              e.getPanelType === "year" ? (h(), Ce(t, {
                key: 0,
                ref: "yearPanelEl",
                choose: e.getChoose,
                current: e.currentDate,
                "component-props": e.componentProps,
                preview: e.previewYear,
                onChooseYear: e.getChooseYear
              }, null, 8, ["choose", "current", "component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (h(), Ce(r, {
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
              }, null, 8, ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : q("v-if", !0)
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
          class: v(e.n("actions"))
        },
        [
          A(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Ip = _({
  name: RC,
  components: {
    MonthPickerPanel: bC,
    YearPickerPanel: TC,
    DayPickerPanel: AC
  },
  props: Sp,
  setup(e) {
    const { t: n } = ao(), o = se().format("YYYY-MM-D"), [t, r] = o.split("-"), a = Sr.find((re) => re === r), i = $(!1), l = $(!1), s = $(!0), u = $(), c = $(), d = $(), f = $(a), p = $(t), g = $(!1), m = $([]), k = $([]), w = $([]), y = $([]), b = $([]), P = $([]), z = $(null), O = $(null), B = $(null), T = I(() => ({
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
    })), E = I(() => ({
      chooseMonth: u.value,
      chooseYear: c.value,
      chooseDay: d.value,
      chooseYears: m.value,
      chooseMonths: k.value,
      chooseDays: w.value,
      chooseRangeYear: y.value,
      chooseRangeMonth: b.value,
      chooseRangeDay: P.value
    })), M = I(() => ({
      previewMonth: f.value,
      previewYear: p.value
    })), R = I(() => {
      var re;
      const { multiple: $e, range: Oe } = e;
      return Oe ? y.value.length ? `${y.value[0]} ~ ${y.value[1]}` : "" : $e ? `${m.value.length}${(n || tn)("datePickerSelected")}` : (re = c.value) != null ? re : "";
    }), W = I(() => {
      var re, $e;
      const { multiple: Oe, range: Re } = e;
      if (Re)
        return b.value.length ? `${b.value[0]} ~ ${b.value[1]}` : "";
      let Le = "";
      return u.value && (Le = ($e = (re = (n || tn)("datePickerMonthDict")) == null ? void 0 : re[u.value].name) != null ? $e : ""), Oe ? `${k.value.length}${(n || tn)("datePickerSelected")}` : Le;
    }), U = I(() => {
      var re, $e, Oe, Re;
      const { multiple: Le, range: cn } = e;
      if (cn) {
        const wt = P.value.map((Uh) => se(Uh).format("YYYY-MM-DD"));
        return wt.length ? `${wt[0]} ~ ${wt[1]}` : "";
      }
      if (Le) return `${w.value.length}${(n || tn)("datePickerSelected")}`;
      if (!c.value || !u.value || !d.value) return "";
      const vn = se(`${c.value}-${u.value}-${d.value}`).day(), pn = Pt.find((wt) => wt === `${vn}`), Lo = ($e = (re = (n || tn)("datePickerWeekDict")) == null ? void 0 : re[pn].name) != null ? $e : "", Fh = (Re = (Oe = (n || tn)("datePickerMonthDict")) == null ? void 0 : Oe[u.value].name) != null ? Re : "", Hh = jo(d.value, 2, "0");
      return (n || tn)("lang") === "zh-CN" ? `${u.value}-${Hh} ${Lo.slice(0, 3)}` : `${Lo.slice(0, 3)}, ${Fh.slice(0, 3)} ${d.value}`;
    }), H = I(() => e.type === "year" || i.value ? "year" : e.type === "month" || l.value ? "month" : e.type === "date" ? "date" : ""), Y = I(() => !e.touchable || !H.value), j = I(() => {
      var re, $e;
      const Oe = se(`${c.value}-${u.value}-${d.value}`).day(), Re = d.value ? jo(d.value, 2, "0") : "";
      return {
        week: `${Oe}`,
        year: (re = c.value) != null ? re : "",
        month: ($e = u.value) != null ? $e : "",
        date: Re
      };
    }), le = I(
      () => E.value.chooseRangeDay.map((re) => se(re).format("YYYY-MM-DD"))
    ), ee = I(() => c.value === p.value), pe = I(() => u.value === f.value);
    let ye = 0, Ee = 0, F = "", Z;
    de(
      () => e.modelValue,
      (re) => {
        if (!(!We() || ne(re)))
          if (e.range) {
            if (!Xe(re)) return;
            s.value = re.length !== 1, ue(re, e.type);
          } else if (e.multiple) {
            if (!Xe(re)) return;
            ke(re, e.type);
          } else
            Ie(re);
      },
      { immediate: !0 }
    ), de(H, Je);
    function oe(re) {
      re === "year" ? i.value = !0 : re === "month" ? l.value = !0 : (i.value = !1, l.value = !1);
    }
    function me(re) {
      if (Y.value) return;
      const { clientX: $e, clientY: Oe } = re.touches[0];
      ye = $e, Ee = Oe;
    }
    function D(re, $e) {
      return re >= $e && re > 20 ? "x" : "y";
    }
    function K(re) {
      if (Y.value) return;
      const { clientX: $e, clientY: Oe } = re.touches[0], Re = $e - ye, Le = Oe - Ee;
      Z = D(Math.abs(Re), Math.abs(Le)), F = Re > 0 ? "prev" : "next";
    }
    function fe() {
      return VC(this, null, function* () {
        if (Y.value || Z !== "x") return;
        const re = H.value === "year" ? z : H.value === "month" ? O : B;
        yield kn(), re.value.forwardRef(F), Je();
      });
    }
    function Se(re, $e) {
      const Oe = $e === "year" ? y : $e === "month" ? b : P;
      if (Oe.value = s.value ? [re, re] : [Oe.value[0], re], s.value = !s.value, s.value) {
        const Le = se(Oe.value[0]).isAfter(Oe.value[1]) ? [Oe.value[1], Oe.value[0]] : [...Oe.value];
        C(e["onUpdate:modelValue"], Le), C(e.onChange, Le);
      }
    }
    function Fe(re, $e) {
      const Oe = $e === "year" ? m : $e === "month" ? k : w, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-DD", Le = Oe.value.map((vn) => se(vn).format(Re)), cn = Le.findIndex((vn) => vn === re);
      cn === -1 ? Le.push(re) : Le.splice(cn, 1), C(e["onUpdate:modelValue"], Le), C(e.onChange, Le);
    }
    function Me(re, $e) {
      return !c.value || !u.value ? !1 : ee.value ? re === "year" ? $e < L(c.value) : re === "month" ? $e < u.value : pe.value ? $e < L(d.value) : u.value > f.value : c.value > p.value;
    }
    function on(re) {
      const { readonly: $e, range: Oe, multiple: Re, onChange: Le, "onUpdate:modelValue": cn } = e;
      if (re < 0 || $e) return;
      g.value = Me("day", re);
      const vn = `${p.value}-${f.value}-${re}`, pn = se(vn).format("YYYY-MM-DD");
      Oe ? Se(pn, "day") : Re ? Fe(pn, "day") : (C(cn, pn), C(Le, pn));
    }
    function ln(re) {
      const { type: $e, readonly: Oe, range: Re, multiple: Le, onChange: cn, onPreview: vn, "onUpdate:modelValue": pn } = e;
      if (g.value = Me("month", re), $e === "month" && !Oe) {
        const Lo = `${p.value}-${re}`;
        Re ? Se(Lo, "month") : Le ? Fe(Lo, "month") : (C(pn, Lo), C(cn, Lo));
      } else
        f.value = re, C(
          vn,
          L(p.value),
          L(f.value),
          $e === "date" ? L(d.value) : void 0
        );
      l.value = !1;
    }
    function wn(re) {
      const { type: $e, readonly: Oe, range: Re, multiple: Le, onChange: cn, onPreview: vn, "onUpdate:modelValue": pn } = e;
      g.value = Me("year", re), $e === "year" && !Oe ? Re ? Se(`${re}`, "year") : Le ? Fe(`${re}`, "year") : (C(pn, `${re}`), C(cn, `${re}`)) : (p.value = `${re}`, C(
        vn,
        L(p.value),
        L(f.value),
        $e === "date" ? L(d.value) : void 0
      )), i.value = !1;
    }
    function ve(re, $e) {
      const Oe = $e === "prev" ? -1 : 1;
      if (re === "year")
        p.value = `${L(p.value) + Oe}`;
      else {
        let Re = L(f.value) + Oe;
        Re < 1 && (p.value = `${L(p.value) - 1}`, Re = 12), Re > 12 && (p.value = `${L(p.value) + 1}`, Re = 1), f.value = Sr.find((Le) => L(Le) === Re);
      }
      C(
        e.onPreview,
        L(p.value),
        L(f.value),
        e.type === "date" ? L(d.value) : void 0
      );
    }
    function We() {
      return (e.multiple || e.range) && !Xe(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Xe(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0;
    }
    function ne(re) {
      return Xe(re) ? !1 : re === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1;
    }
    function ue(re, $e) {
      const Oe = $e === "year" ? y : $e === "month" ? b : P, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = re.map((pn) => se(pn).format(Re)).slice(0, 2);
      if (Oe.value.some((pn) => ne(pn))) return;
      Oe.value = Le;
      const vn = se(Oe.value[0]).isAfter(Oe.value[1]);
      Oe.value.length === 2 && vn && (Oe.value = [Oe.value[1], Oe.value[0]]);
    }
    function ke(re, $e) {
      const Oe = $e === "year" ? m : $e === "month" ? k : w, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = Array.from(new Set(re.map((cn) => se(cn).format(Re))));
      Oe.value = Le.filter((cn) => cn !== "Invalid Date");
    }
    function Ie(re) {
      const Oe = (re ? se(re) : se()).format("YYYY-MM-D");
      if (ne(Oe)) return;
      const [Re, Le, cn] = Oe.split("-"), vn = Sr.find((pn) => pn === Le);
      u.value = vn, c.value = Re, d.value = cn, f.value = vn, p.value = Re;
    }
    function Je() {
      Ee = 0, ye = 0, F = "", Z = void 0;
    }
    return {
      yearPanelEl: z,
      monthPanelEl: O,
      dayPanelEl: B,
      reverse: g,
      currentDate: o,
      chooseMonth: u,
      chooseYear: c,
      chooseDay: d,
      previewYear: p,
      isYearPanel: i,
      isMonthPanel: l,
      getMonthTitle: W,
      getDateTitle: U,
      getYearTitle: R,
      getPanelType: H,
      getChoose: E,
      getPreview: M,
      componentProps: T,
      slotProps: j,
      formatRange: le,
      pt: n,
      t: tn,
      n: LC,
      classes: FC,
      clickEl: oe,
      handleTouchstart: me,
      handleTouchmove: K,
      handleTouchend: fe,
      getChooseDay: on,
      getChooseMonth: ln,
      getChooseYear: wn,
      checkPreview: ve,
      formatElevation: un
    };
  }
});
Ip.render = HC;
var Fa = Ip;
te(Fa);
ae(Fa, Sp);
const Y5 = Fa;
var zl = Fa, UC = Object.defineProperty, Bc = Object.getOwnPropertySymbols, YC = Object.prototype.hasOwnProperty, jC = Object.prototype.propertyIsEnumerable, Dc = (e, n, o) => n in e ? UC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, WC = (e, n) => {
  for (var o in n || (n = {}))
    YC.call(n, o) && Dc(e, o, n[o]);
  if (Bc)
    for (var o of Bc(n))
      jC.call(n, o) && Dc(e, o, n[o]);
  return e;
};
const Bp = WC({
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
  onBeforeClose: V(),
  onConfirm: V(),
  onCancel: V(),
  "onUpdate:show": V()
}, De(yt, [
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
var KC = Object.defineProperty, Mc = Object.getOwnPropertySymbols, qC = Object.prototype.hasOwnProperty, XC = Object.prototype.propertyIsEnumerable, Nc = (e, n, o) => n in e ? KC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, GC = (e, n) => {
  for (var o in n || (n = {}))
    qC.call(n, o) && Nc(e, o, n[o]);
  if (Mc)
    for (var o of Mc(n))
      XC.call(n, o) && Nc(e, o, n[o]);
  return e;
};
const { name: ZC, n: JC, classes: QC } = x("dialog");
function _C(e, n) {
  const o = Q("var-button"), t = Q("var-popup");
  return h(), Ce(t, {
    class: v(e.n("popup")),
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
        He({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: GC({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          N(
            "div",
            {
              class: v(e.n("title"))
            },
            [
              A(e.$slots, "title", {}, () => {
                var r;
                return [
                  Be(
                    ie((r = e.title) != null ? r : (e.pt ? e.pt : e.t)("dialogTitle")),
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
              class: v(e.n("message")),
              style: X({ textAlign: e.messageAlign })
            },
            [
              A(e.$slots, "default", {}, () => [
                Be(
                  ie(e.message),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          ),
          A(e.$slots, "actions", {
            slotClass: e.n("actions"),
            cancel: e.cancel,
            confirm: e.confirm
          }, () => [
            N(
              "div",
              {
                class: v(e.n("actions"))
              },
              [
                e.cancelButton ? (h(), Ce(o, {
                  key: 0,
                  class: v(e.classes(e.n("button"), e.n("cancel-button"))),
                  "var-dialog-cover": "",
                  text: "",
                  "text-color": e.cancelButtonTextColor,
                  color: e.cancelButtonColor,
                  onClick: e.cancel
                }, {
                  default: ce(() => {
                    var r;
                    return [
                      Be(
                        ie((r = e.cancelButtonText) != null ? r : (e.pt ? e.pt : e.t)("dialogCancelButtonText")),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "text-color", "color", "onClick"])) : q("v-if", !0),
                e.confirmButton ? (h(), Ce(o, {
                  key: 1,
                  class: v(e.classes(e.n("button"), e.n("confirm-button"))),
                  "var-dialog-cover": "",
                  text: "",
                  "text-color": e.confirmButtonTextColor,
                  color: e.confirmButtonColor,
                  onClick: e.confirm
                }, {
                  default: ce(() => {
                    var r;
                    return [
                      Be(
                        ie((r = e.confirmButtonText) != null ? r : (e.pt ? e.pt : e.t)("dialogConfirmButtonText")),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "text-color", "color", "onClick"])) : q("v-if", !0)
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
const Dp = _({
  name: ZC,
  components: {
    VarPopup: Oo,
    VarButton: On
  },
  inheritAttrs: !1,
  props: Bp,
  setup(e) {
    const n = $(!1), o = $(!1), { t } = ao();
    de(
      () => e.show,
      (u) => {
        n.value = u;
      },
      { immediate: !0 }
    ), de(
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
      return C(e["onUpdate:show"], !1);
    }
    function a() {
      const { closeOnClickOverlay: u, onClickOverlay: c, onBeforeClose: d } = e;
      if (C(c), !!u) {
        if (d != null) {
          C(d, "close", r);
          return;
        }
        C(e["onUpdate:show"], !1);
      }
    }
    function i() {
      const { onBeforeClose: u, onConfirm: c } = e;
      if (C(c), u != null) {
        C(u, "confirm", r);
        return;
      }
      C(e["onUpdate:show"], !1);
    }
    function l() {
      const { onBeforeClose: u, onCancel: c } = e;
      if (C(c), u != null) {
        C(u, "cancel", r);
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
      pt: t,
      t: tn,
      n: JC,
      classes: QC,
      handleClickOverlay: a,
      confirm: i,
      cancel: l,
      toSizeUnit: ze,
      handleKeyEscape: s
    };
  }
});
Dp.render = _C;
var or = Dp, xC = Object.defineProperty, eS = Object.defineProperties, nS = Object.getOwnPropertyDescriptors, Ac = Object.getOwnPropertySymbols, oS = Object.prototype.hasOwnProperty, tS = Object.prototype.propertyIsEnumerable, Vc = (e, n, o) => n in e ? xC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Vi = (e, n) => {
  for (var o in n || (n = {}))
    oS.call(n, o) && Vc(e, o, n[o]);
  if (Ac)
    for (var o of Ac(n))
      tS.call(n, o) && Vc(e, o, n[o]);
  return e;
}, rS = (e, n) => eS(e, nS(n));
let bo, Lr = {};
function aS(e = {}) {
  return mn(e) ? rS(Vi({}, Lr), { message: e }) : Vi(Vi({}, Lr), e);
}
function Vo(e) {
  return to() ? new Promise((n) => {
    Vo.close();
    const o = aS(e), t = _e(o);
    t.teleport = "body", bo = t;
    const { unmountInstance: r } = bt(or, t, {
      onConfirm: () => {
        C(t.onConfirm), n("confirm");
      },
      onCancel: () => {
        C(t.onCancel), n("cancel");
      },
      onClose: () => {
        C(t.onClose), n("close");
      },
      onClosed: () => {
        C(t.onClosed), r(), bo === t && (bo = null);
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
Vo.setDefaultOptions = function(e) {
  Lr = e;
};
Vo.resetDefaultOptions = function() {
  Lr = {};
};
Vo.close = function() {
  if (bo != null) {
    const e = bo;
    bo = null, Ue().then(() => {
      e.show = !1;
    });
  }
};
Vo.Component = or;
te(or);
te(or, Vo);
ae(Vo, Bp);
const j5 = or;
var Ol = Vo;
const Mp = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: iS, n: lS, classes: sS } = x("divider");
function uS(e, n) {
  return h(), S(
    "div",
    {
      class: v(
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
      style: X(e.style),
      role: "separator"
    },
    [
      e.vertical ? q("v-if", !0) : A(e.$slots, "default", { key: 0 }, () => [
        e.description ? (h(), S(
          "span",
          {
            key: 0,
            class: v(e.n("text"))
          },
          ie(e.description),
          3
          /* TEXT, CLASS */
        )) : q("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const Np = _({
  name: iS,
  props: Mp,
  setup(e, { slots: n }) {
    const o = $(!1), t = I(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = I(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (bs(i) || l)
        return { margin: s };
      const u = L(i), c = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${ze(c)})`,
        left: u > 0 ? ze(c) : ze(0)
      };
    });
    hn(a), Gt(a);
    function a() {
      const { description: i, vertical: l } = e;
      o.value = (n.default || i != null) && !l;
    }
    return {
      n: lS,
      classes: sS,
      withText: o,
      style: r,
      withPresetInset: t
    };
  }
});
Np.render = uS;
var Ha = Np;
te(Ha);
ae(Ha, Mp);
const W5 = Ha;
var Tl = Ha;
const Ap = {
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
  onClick: V()
};
var cS = Object.defineProperty, dS = Object.defineProperties, fS = Object.getOwnPropertyDescriptors, Rc = Object.getOwnPropertySymbols, vS = Object.prototype.hasOwnProperty, pS = Object.prototype.propertyIsEnumerable, Lc = (e, n, o) => n in e ? cS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Fc = (e, n) => {
  for (var o in n || (n = {}))
    vS.call(n, o) && Lc(e, o, n[o]);
  if (Rc)
    for (var o of Rc(n))
      pS.call(n, o) && Lc(e, o, n[o]);
  return e;
}, Hc = (e, n) => dS(e, fS(n)), mS = (e, n, o) => new Promise((t, r) => {
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
const { name: hS, n: gS, classes: bS } = x("drag");
function yS(e, n) {
  return h(), Ce(oo, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    N(
      "div",
      He({
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
        A(e.$slots, "default")
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["to", "disabled"]);
}
const Vp = _({
  name: hS,
  inheritAttrs: !1,
  props: Ap,
  setup(e, { attrs: n }) {
    const o = $(null), t = $(0), r = $(0), a = $(!1), i = $(!1), { touching: l, dragging: s, moveX: u, moveY: c, startTouch: d, moveTouch: f, endTouch: p, resetTouch: g } = gt(), { disabled: m } = qo(), k = _e({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    de(() => e.boundary, M), ro(W), hn(() => {
      M(), W();
    });
    function w(H) {
      e.disabled || (d(H), z());
    }
    function y(H) {
      return mS(this, null, function* () {
        !l.value || e.disabled || (f(H), Ve(H), i.value = !1, a.value = !0, e.direction.includes("x") && (t.value += u.value), e.direction.includes("y") && (r.value += c.value), E());
      });
    }
    function b() {
      e.disabled || (p(), i.value = !0, T());
    }
    function P(H) {
      s.value || C(e.onClick, H);
    }
    function z() {
      const { left: H, top: Y } = O();
      t.value = H, r.value = Y;
    }
    function O() {
      const H = an(o.value), Y = an(window), j = H.top - Y.top, le = Y.bottom - H.bottom, ee = H.left - Y.left, pe = Y.right - H.right, { width: ye, height: Ee } = H, { width: F, height: Z } = Y;
      return {
        top: j,
        bottom: le,
        left: ee,
        right: pe,
        width: ye,
        height: Ee,
        halfWidth: ye / 2,
        halfHeight: Ee / 2,
        windowWidth: F,
        windowHeight: Z
      };
    }
    function B() {
      const H = O(), Y = k.left, j = H.windowWidth - k.right - H.width, le = k.top, ee = H.windowHeight - k.bottom - H.height;
      return {
        minX: Y,
        minY: le,
        // fallback the drag element overflows boundary
        maxX: Y < j ? j : Y,
        maxY: le < ee ? ee : le
      };
    }
    function T() {
      if (e.attraction == null)
        return;
      const { halfWidth: H, halfHeight: Y, top: j, bottom: le, left: ee, right: pe } = O(), { minX: ye, minY: Ee, maxX: F, maxY: Z } = B(), oe = ee + H - k.left, me = pe + H - k.right, D = j + Y - k.top, K = le + Y - k.bottom, fe = oe <= me, Se = D <= K;
      e.attraction.includes("x") && (t.value = fe ? ye : F), e.attraction.includes("y") && (r.value = Se ? Ee : Z);
    }
    function E() {
      const { minX: H, minY: Y, maxX: j, maxY: le } = B();
      t.value = Pn(t.value, H, j), r.value = Pn(r.value, Y, le);
    }
    function M() {
      const { top: H = 0, bottom: Y = 0, left: j = 0, right: le = 0 } = e.boundary;
      k.top = xe(H), k.bottom = xe(Y), k.left = xe(j), k.right = xe(le);
    }
    function R() {
      var H;
      const Y = (H = n.style) != null ? H : {};
      return Hc(Fc({}, n), {
        style: Hc(Fc({}, Y), {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: a.value ? 0 : Y.top,
          left: a.value ? 0 : Y.left,
          right: a.value ? "auto" : Y.right,
          bottom: a.value ? "auto" : Y.bottom,
          transform: a.value ? `translate(${t.value}px, ${r.value}px)` : Y.transform
        })
      });
    }
    function W() {
      a.value && (z(), E());
    }
    function U() {
      g(), i.value = !1, a.value = !1, t.value = 0, r.value = 0;
    }
    return {
      drag: o,
      x: t,
      y: r,
      enableTransition: i,
      dragging: s,
      teleportDisabled: m,
      n: gS,
      classes: bS,
      getAttrs: R,
      handleTouchstart: w,
      handleTouchmove: y,
      handleTouchend: b,
      handleClick: P,
      resize: W,
      reset: U
    };
  }
});
Vp.render = yS;
var Ua = Vp;
te(Ua);
ae(Ua, Ap);
const K5 = Ua;
var Fr = Ua;
const Rp = {
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
  onOpen: V(),
  onOpened: V(),
  onClose: V(),
  onClosed: V(),
  onClickOutside: V(),
  "onUpdate:show": V()
}, { name: kS, n: $S, classes: wS } = x("tooltip");
function CS(e, n) {
  return h(), S(
    "div",
    {
      ref: "host",
      class: v(e.classes(e.n(), e.n("$--box"))),
      onClick: n[3] || (n[3] = (...o) => e.handleHostClick && e.handleHostClick(...o)),
      onMouseenter: n[4] || (n[4] = (...o) => e.handleHostMouseenter && e.handleHostMouseenter(...o)),
      onMouseleave: n[5] || (n[5] = (...o) => e.handleHostMouseleave && e.handleHostMouseleave(...o))
    },
    [
      A(e.$slots, "default"),
      (h(), Ce(oo, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        G(Qe, {
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
                class: v(e.classes(e.n("tooltip"), e.n("$--box"))),
                style: X({ zIndex: e.zIndex }),
                onClick: n[0] || (n[0] = Wn(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                N(
                  "div",
                  {
                    style: X({
                      background: e.color,
                      color: e.textColor,
                      width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                    }),
                    class: v(e.classes(e.n("content-container"), e.n(`--${e.type}`))),
                    role: "tooltip"
                  },
                  [
                    A(e.$slots, "content", {}, () => [
                      Be(
                        ie(e.content),
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
const Lp = _({
  name: kS,
  props: Rp,
  setup(e) {
    const { disabled: n } = qo(), {
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
      handleClosed: p,
      // expose
      open: g,
      // expose
      close: m,
      // expose
      resize: k
    } = Wf(e);
    return {
      popover: o,
      host: t,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: ze,
      n: $S,
      classes: wS,
      handleHostClick: l,
      handlePopoverClose: f,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handleClosed: p,
      resize: k,
      open: g,
      close: m
    };
  }
});
Lp.render = CS;
var Ya = Lp;
te(Ya);
ae(Ya, Rp);
const q5 = Ya;
var Hr = Ya;
const Fp = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": V()
};
var SS = Object.defineProperty, Uc = Object.getOwnPropertySymbols, PS = Object.prototype.hasOwnProperty, zS = Object.prototype.propertyIsEnumerable, Yc = (e, n, o) => n in e ? SS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, OS = (e, n) => {
  for (var o in n || (n = {}))
    PS.call(n, o) && Yc(e, o, n[o]);
  if (Uc)
    for (var o of Uc(n))
      zS.call(n, o) && Yc(e, o, n[o]);
  return e;
};
const { name: TS, n: ES, classes: IS } = x("ellipsis"), BS = { key: 0 };
function DS(e, n) {
  const o = Q("var-tooltip");
  return h(), Ce(
    o,
    wo(Zt(e.tooltipProps)),
    {
      content: ce(() => [
        A(e.$slots, "tooltip-content", {}, () => {
          var t;
          return [
            (t = e.tooltipProps) != null && t.content ? (h(), S(
              "span",
              BS,
              ie(e.tooltipProps.content),
              1
              /* TEXT */
            )) : A(e.$slots, "default", { key: 1 })
          ];
        })
      ]),
      default: ce(() => [
        N(
          "span",
          {
            class: v(
              e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])
            ),
            style: X(e.rootStyles),
            onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
          },
          [
            A(e.$slots, "default")
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
const Hp = _({
  name: TS,
  components: { VarTooltip: Hr },
  props: Fp,
  setup(e) {
    const n = Kn(e, "expand"), o = I(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), t = I(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : OS({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: t,
      expanding: n,
      rootStyles: o,
      n: ES,
      classes: IS,
      handleClick: r
    };
  }
});
Hp.render = DS;
var ja = Hp;
te(ja);
ae(ja, Fp);
const X5 = ja;
var El = ja;
const Up = {
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
  onClick: V(),
  onOpen: V(),
  onOpened: V(),
  onClose: V(),
  onClosed: V(),
  "onUpdate:active": V()
}, {
  name: MS,
  classes: Ri,
  n: Mn
} = x("fab");
var Wa = _({
  name: MS,
  inheritAttrs: !1,
  props: Up,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = Kn(e, "active"), r = $(null), a = $(null);
    de(() => e.trigger, () => {
      t.value = !1;
    }), de(() => e.disabled, () => {
      t.value = !1;
    }), de(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var c;
      (c = a.value) == null || c.reset();
    }), ws(r, "click", s);
    function i(c, d, f) {
      if (c.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (f === 0) {
          C(e.onClick, t.value, c);
          return;
        }
        t.value = d, C(e.onClick, t.value, c), C(t.value ? e.onOpen : e.onClose);
      }
    }
    function l(c, d) {
      e.trigger !== "hover" || e.disabled || d === 0 || (t.value = c, C(t.value ? e.onOpen : e.onClose));
    }
    function s() {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, C(e.onClose));
    }
    function u() {
      return n.trigger ? e.show ? n.trigger({
        active: t.value
      }) : null : Ae(G(On, {
        "var-fab-cover": !0,
        class: Mn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        iconContainer: !0
      }, {
        default: () => [G(Ze, {
          "var-fab-cover": !0,
          class: Ri([t.value, Mn("trigger-active-icon"), Mn("trigger-inactive-icon")]),
          name: t.value ? e.activeIcon : e.inactiveIcon,
          size: t.value ? e.activeIconSize : e.inactiveIconSize,
          namespace: t.value ? e.activeIconNamespace : e.inactiveIconNamespace,
          transition: 200,
          animationClass: Mn("--trigger-icon-animation")
        }, null)]
      }), [[Qn, e.show]]);
    }
    return () => {
      var c;
      const d = Zd((c = C(n.default)) != null ? c : []), f = bs(e.drag) ? {} : e.drag;
      return G(Fr, He({
        ref: a,
        class: Ri(Mn(`--position-${e.position}`), [!e.fixed, Mn("--absolute")]),
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
        onClick: (p) => i(p, !t.value, d.length)
      }, o), {
        default: () => [G("div", {
          class: Ri(Mn(), Mn(`--direction-${e.direction}`), [e.safeArea, Mn("--safe-area")]),
          ref: r,
          onMouseleave: () => l(!1, d.length),
          onMouseenter: () => l(!0, d.length)
        }, [G(Qe, {
          name: Mn("--active-transition")
        }, {
          default: () => [u()]
        }), G(Qe, {
          name: Mn(`--actions-transition-${e.direction}`),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Ae(G("div", {
            class: Mn("actions"),
            onClick: (p) => p.stopPropagation()
          }, [d.map((p) => {
            var g;
            return G("div", {
              class: Mn("action"),
              key: (g = p.key) != null ? g : void 0
            }, [p]);
          })]), [[Qn, e.show && t.value && d.length]])]
        })])]
      });
    };
  }
});
te(Wa);
ae(Wa, Up);
const G5 = Wa;
var Il = Wa;
const Yp = {
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
  "onUpdate:anchor": V(),
  onAnchorChange: V()
}, { name: NS, n: AS, classes: VS } = x("floating-panel"), jc = 100, Wc = 0.2;
function RS(e, n) {
  return h(), Ce(oo, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    N(
      "div",
      {
        class: v(e.classes(e.n(), [e.safeArea, e.n("--safe-area")], e.formatElevation(e.elevation, 3))),
        style: X({
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
        A(e.$slots, "header", {}, () => [
          N(
            "div",
            {
              class: v(e.n("header"))
            },
            [
              N(
                "div",
                {
                  class: v(e.n("header-toolbar"))
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
            class: v(e.n("content")),
            ref: "contentRef"
          },
          [
            A(e.$slots, "default")
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
const jp = _({
  name: NS,
  props: Yp,
  setup(e) {
    const n = $(0), o = $(null), { height: t } = Cg(), r = I(() => t.value * 0.6), a = Kn(e, "anchor", { defaultValue: jc }), i = I(() => {
      const E = [jc, r.value], { anchors: M } = e;
      return Zn(M) ? E : M;
    }), l = I(() => Math.min(...i.value)), s = I(() => Math.max(...i.value)), { disabled: u } = qo(), { deltaY: c, touching: d, startTouch: f, moveTouch: p, endTouch: g, isReachTop: m, isReachBottom: k } = gt();
    let w;
    _t(() => d.value), de(() => a.value, y, { immediate: !0 }), de(
      () => i.value,
      () => {
        y(a.value);
      },
      { immediate: !0 }
    );
    function y(E) {
      O(E ?? l.value);
    }
    function b(E) {
      f(E), w = n.value;
    }
    function P(E) {
      var M;
      p(E);
      const R = E.target, W = o.value === R || ((M = o.value) == null ? void 0 : M.contains(R));
      if (W && !e.contentDraggable)
        return;
      if (W && e.contentDraggable && n.value >= s.value && !m(o.value)) {
        k(o.value) && Ve(E);
        return;
      }
      const U = w - c.value;
      O(B(U)), Ve(E);
    }
    function z() {
      g();
      const E = a.value;
      O(n.value), a.value = n.value, a.value !== E && C(e.onAnchorChange, n.value);
    }
    function O(E) {
      n.value = d.value ? E : T(E);
    }
    function B(E) {
      if (E > s.value) {
        const M = E - s.value;
        return s.value + M * Wc;
      }
      if (E < l.value) {
        const M = l.value - E;
        return l.value - M * Wc;
      }
      return E;
    }
    function T(E) {
      if (i.value.includes(E))
        return E;
      let M = 1 / 0, R = 0;
      return i.value.forEach((W) => {
        const U = Math.abs(W - E);
        U < M && (M = U, R = W);
      }), R;
    }
    return {
      contentRef: o,
      teleportDisabled: u,
      touching: d,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: AS,
      classes: VS,
      toSizeUnit: ze,
      toNumber: L,
      formatElevation: un,
      handleTouchstart: b,
      handleTouchmove: P,
      handleTouchend: z
    };
  }
});
jp.render = RS;
var Ka = jp;
te(Ka);
ae(Ka, Yp);
const Z5 = Ka;
var Bl = Ka;
const Wp = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: V(),
  onReset: V()
};
var Kc = (e, n, o) => new Promise((t, r) => {
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
const { name: LS, n: FS } = x("form");
function HS(e, n) {
  return h(), S(
    "form",
    {
      class: v(e.n()),
      onSubmit: n[0] || (n[0] = (...o) => e.handleSubmit && e.handleSubmit(...o)),
      onReset: n[1] || (n[1] = (...o) => e.handleReset && e.handleReset(...o))
    },
    [
      A(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Kp = _({
  name: LS,
  props: Wp,
  setup(e) {
    const n = I(() => e.disabled), o = I(() => e.readonly), { formItems: t, bindFormItems: r } = z0();
    r({
      disabled: n,
      readonly: o
    });
    function i(f) {
      setTimeout(() => {
        const p = To(f), g = p === window ? 0 : ku(p), m = ku(f) - g - xe(e.scrollToErrorOffsetY);
        Dt(p, {
          top: m,
          animation: Zi
        });
      }, 300);
    }
    function l(f) {
      return Kc(this, null, function* () {
        Ve(f);
        const p = yield u();
        C(e.onSubmit, p);
      });
    }
    function s(f) {
      Ve(f), c(), C(e.onReset);
    }
    function u() {
      return Kc(this, null, function* () {
        var f;
        const p = yield Promise.all(t.map(({ validate: g }) => g()));
        if (e.scrollToError) {
          const [, g] = lg(p, (k) => k === !1, e.scrollToError), m = g > -1;
          if (m) {
            const k = (f = t[g].instance.proxy) == null ? void 0 : f.$el;
            i(k);
          }
          return !m;
        }
        return p.every((g) => g === !0);
      });
    }
    function c() {
      return t.forEach(({ reset: f }) => f());
    }
    function d() {
      return t.forEach(({ resetValidation: f }) => f());
    }
    return {
      n: FS,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: c,
      resetValidation: d
    };
  }
});
Kp.render = HS;
var kt = Kp;
kt.useValidation = Ln;
kt.useForm = Fn;
te(kt);
ae(kt, Wp);
const J5 = kt;
var Dl = kt;
const qp = {
  highlighter: Object,
  theme: String,
  tag: {
    type: String,
    default: "div"
  }
}, { name: US, n: YS } = x("highlighter-provider"), jS = _({
  name: US,
  props: qp,
  setup(e, { slots: n }) {
    const o = I(() => e.highlighter), t = I(() => e.theme);
    return y$({ highlighter: o, theme: t }), () => Xt(
      e.tag,
      {
        class: YS()
      },
      C(n.default)
    );
  }
});
var qa = jS;
te(qa);
ae(qa, qp);
const Q5 = qa;
var Ml = qa;
const Xp = {
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
  onClick: V(),
  onLoad: V(),
  onError: V()
}, { name: WS, n: KS, classes: qS } = x("image"), XS = ["alt", "title", "referrerpolicy", "lazy-loading", "lazy-error"], GS = ["alt", "title", "referrerpolicy", "src"];
function ZS(e, n) {
  var o;
  const t = Ye("lazy"), r = Ye("ripple");
  return Ae((h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: X({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [
      e.lazy && !e.showErrorSlot ? Ae((h(), S("img", {
        key: 0,
        role: "img",
        class: v(e.n("image")),
        alt: e.alt,
        title: e.title,
        referrerpolicy: e.referrerpolicy,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: X({ objectFit: e.fit, objectPosition: e.position }),
        onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, XS)), [
        [t, (o = e.src) != null ? o : ""]
      ]) : q("v-if", !0),
      !e.lazy && !e.showErrorSlot ? (h(), S("img", {
        key: 1,
        role: "img",
        class: v(e.n("image")),
        alt: e.alt,
        title: e.title,
        referrerpolicy: e.referrerpolicy,
        style: X({ objectFit: e.fit, objectPosition: e.position }),
        src: e.src,
        onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
        onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, GS)) : q("v-if", !0),
      e.showErrorSlot ? A(e.$slots, "error", { key: 2 }) : q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const Gp = _({
  name: WS,
  directives: {
    Lazy: Ft,
    Ripple: nn
  },
  props: Xp,
  setup(e, { slots: n }) {
    const o = $(!1);
    de(
      () => e.src,
      () => {
        o.value = !1;
      }
    );
    function t(i) {
      o.value = !!n.error, C(e.onError, i);
    }
    function r(i) {
      const l = i.currentTarget;
      if (e.lazy) {
        if (l._lazy.state === "success") {
          C(e.onLoad, i);
          return;
        }
        l._lazy.state === "error" && t(i);
      } else
        C(e.onLoad, i);
    }
    function a(i) {
      C(e.onClick, i);
    }
    return {
      showErrorSlot: o,
      n: KS,
      classes: qS,
      toSizeUnit: ze,
      handleLoad: r,
      handleError: t,
      handleClick: a
    };
  }
});
Gp.render = ZS;
var Xa = Gp;
te(Xa);
ae(Xa, Xp);
const _5 = Xa;
var Nl = Xa;
const Gs = {
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
  onChange: V()
};
var Go = (e, n, o) => new Promise((t, r) => {
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
const JS = 250, QS = 20, { name: _S, n: qc, classes: xS } = x("swipe"), e6 = ["onClick"];
function n6(e, n) {
  const o = Q("var-icon"), t = Q("var-button"), r = Ye("hover");
  return Ae((h(), S(
    "div",
    {
      class: v(e.n()),
      ref: "swipeEl"
    },
    [
      N(
        "div",
        {
          class: v(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
          style: X({
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
          A(e.$slots, "default")
        ],
        38
        /* CLASS, STYLE, NEED_HYDRATION */
      ),
      e.navigation ? A(e.$slots, "prev", wo(He({ key: 0 }, {
        index: e.index,
        length: e.length,
        prev: e.prev,
        next: e.next,
        to: e.to,
        hovering: e.hovering
      })), () => [
        G(Qe, {
          name: e.getNavigationAnimation("prev")
        }, {
          default: ce(() => [
            e.navigation === !0 || e.hovering ? (h(), S(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
              },
              [
                G(t, {
                  "var-swipe-cover": "",
                  disabled: !e.loop && e.index === 0,
                  class: v(e.n("navigation-prev-button")),
                  onClick: n[3] || (n[3] = (a) => e.prev())
                }, {
                  default: ce(() => [
                    G(o, {
                      "var-swipe-cover": "",
                      class: v(e.n("navigation-prev-button-icon")),
                      name: e.vertical ? "chevron-up" : "chevron-left"
                    }, null, 8, ["class", "name"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled", "class"])
              ],
              2
              /* CLASS */
            )) : q("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : q("v-if", !0),
      e.navigation ? A(e.$slots, "next", wo(He({ key: 1 }, {
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        G(Qe, {
          name: e.getNavigationAnimation("next")
        }, {
          default: ce(() => [
            e.navigation === !0 || e.hovering ? (h(), S(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
              },
              [
                G(t, {
                  "var-swipe-cover": "",
                  class: v(e.n("navigation-next-button")),
                  disabled: !e.loop && e.index === e.length - 1,
                  onClick: n[4] || (n[4] = (a) => e.next())
                }, {
                  default: ce(() => [
                    G(o, {
                      "var-swipe-cover": "",
                      class: v(e.n("navigation-next-button-icon")),
                      name: e.vertical ? "chevron-down" : "chevron-right"
                    }, null, 8, ["class", "name"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "disabled"])
              ],
              2
              /* CLASS */
            )) : q("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : q("v-if", !0),
      A(e.$slots, "indicator", wo(Zt({
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
            class: v(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
          },
          [
            (h(!0), S(
              Ne,
              null,
              Ke(e.length, (a, i) => (h(), S("div", {
                class: v(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: X({ background: e.indicatorColor }),
                key: a,
                onClick: (l) => e.to(i)
              }, null, 14, e6))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )) : q("v-if", !0)
      ])
    ],
    2
    /* CLASS */
  )), [
    [r, e.handleHovering]
  ]);
}
const Zp = _({
  name: _S,
  directives: { Hover: In },
  components: { VarButton: On, VarIcon: Ze },
  props: Gs,
  setup(e) {
    const n = $(null), o = $(0), t = I(() => e.vertical), r = $(0), a = $(0), i = $(!1), l = $(0), s = $(!1), { swipeItems: u, bindSwipeItems: c, length: d } = r0(), { swipeResizeListeners: f, bindSwipeResizeListeners: p } = a0(), { popup: g, bindPopup: m } = of(), {
      deltaX: k,
      deltaY: w,
      moveX: y,
      moveY: b,
      offsetX: P,
      offsetY: z,
      touching: O,
      direction: B,
      startTime: T,
      startTouch: E,
      moveTouch: M,
      endTouch: R
    } = gt(), W = I(() => B.value === (e.vertical ? "vertical" : "horizontal"));
    let U = !1, H = -1;
    c({
      size: o,
      currentIndex: l,
      vertical: t
    }), je(() => window, "keydown", Fe), C(m, null), C(p, null), de(
      () => d.value,
      () => Go(this, null, function* () {
        yield kn(), F(), Me();
      })
    ), g && de(
      () => g.show.value,
      (ve) => Go(this, null, function* () {
        ve ? (yield kn(), Me()) : oe();
      })
    ), Do(Me), Jt(oe), ro(Me);
    function j(ve) {
      return u.find(({ index: We }) => We.value === ve);
    }
    function le() {
      e.loop && (a.value >= 0 && j(d.value - 1).setTranslate(-r.value), a.value <= -(r.value - o.value) && j(0).setTranslate(r.value), a.value > -(r.value - o.value) && a.value < 0 && (j(d.value - 1).setTranslate(0), j(0).setTranslate(0)));
    }
    function ee(ve) {
      const We = En(ve) ? ve : Math.floor((a.value - o.value / 2) / -o.value), { loop: ne } = e;
      return We <= -1 ? ne ? -1 : 0 : We >= d.value ? ne ? d.value : d.value - 1 : We;
    }
    function pe(ve) {
      const { loop: We } = e;
      return ve === -1 ? We ? d.value - 1 : 0 : ve === d.value ? We ? 0 : d.value - 1 : ve;
    }
    function ye(ve) {
      return e.loop ? ve < 0 ? d.value + ve : ve >= d.value ? ve - d.value : ve : Pn(ve, 0, d.value - 1);
    }
    function Ee() {
      return Go(this, null, function* () {
        const ve = a.value >= o.value, We = a.value <= -r.value, ne = 0, ue = -(r.value - o.value);
        i.value = !0, (ve || We) && (i.value = !0, a.value = We ? ne : ue, j(0).setTranslate(0), j(d.value - 1).setTranslate(0)), yield kn(), i.value = !1;
      });
    }
    function F() {
      U || (l.value = ye(L(e.initialIndex)), U = !0);
    }
    function Z() {
      const { autoplay: ve } = e;
      !ve || d.value <= 1 || (oe(), H = window.setTimeout(() => {
        on(), Z();
      }, L(ve)));
    }
    function oe() {
      H && clearTimeout(H);
    }
    function me(ve) {
      return Go(this, null, function* () {
        d.value <= 1 || !e.touchable || (E(ve), oe(), yield Ee(), i.value = !0);
      });
    }
    function D(ve) {
      const { touchable: We, vertical: ne } = e;
      !O.value || !We || (M(ve), W.value && (Ve(ve), a.value += ne ? b.value : y.value, le()));
    }
    function K() {
      if (!O.value || (R(), !W.value))
        return;
      const { vertical: ve, onChange: We } = e, ne = ve ? w.value < 0 : k.value < 0, ue = ve ? z.value : P.value, Ie = performance.now() - T.value <= JS && ue >= QS ? ee(ne ? l.value + 1 : l.value - 1) : ee();
      i.value = !1, a.value = Ie * -o.value;
      const Je = l.value;
      l.value = pe(Ie), Z(), Je !== l.value && C(We, l.value);
    }
    function fe(ve) {
      e.navigation === "hover" && (s.value = ve);
    }
    function Se(ve) {
      return e.navigation !== "hover" ? "" : qc(`--navigation${e.vertical ? "-vertical" : ""}-${ve}-animation`);
    }
    function Fe(ve) {
      if (!u.length || u.findIndex(({ isFocusing: ue }) => ue.value) === -1)
        return;
      const { key: ne } = ve;
      Ve(ve), ne === "ArrowLeft" && ln(), ne === "ArrowRight" && on();
    }
    function Me() {
      n.value && (i.value = !0, o.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = o.value * d.value, a.value = l.value * -o.value, u.forEach((ve) => {
        ve.setTranslate(0);
      }), Z(), setTimeout(() => {
        i.value = !1;
      }), f.forEach(({ onResize: ve }) => {
        ve();
      }));
    }
    function on(ve) {
      return Go(this, null, function* () {
        if (d.value <= 1)
          return;
        F();
        const { loop: We, onChange: ne } = e, ue = l.value;
        if (l.value = ye(ue + 1), (ve == null ? void 0 : ve.event) !== !1 && C(ne, l.value), yield Ee(), ue === d.value - 1 && We) {
          j(0).setTranslate(r.value), a.value = d.value * -o.value;
          return;
        }
        ue !== d.value - 1 && (a.value = l.value * -o.value);
      });
    }
    function ln(ve) {
      return Go(this, null, function* () {
        if (d.value <= 1)
          return;
        F();
        const { loop: We, onChange: ne } = e, ue = l.value;
        if (l.value = ye(ue - 1), (ve == null ? void 0 : ve.event) !== !1 && C(ne, l.value), yield Ee(), ue === 0 && We) {
          j(d.value - 1).setTranslate(-r.value), a.value = o.value;
          return;
        }
        ue !== 0 && (a.value = l.value * -o.value);
      });
    }
    function wn(ve, We) {
      if (d.value <= 1 || ve === l.value)
        return;
      ve = ve < 0 ? 0 : ve, ve = ve >= d.value ? d.value : ve;
      const ne = ve > l.value ? on : ln, ue = Math.abs(ve - l.value);
      Array.from({ length: ue }).forEach((ke, Ie) => {
        ne({ event: Ie === ue - 1 ? We == null ? void 0 : We.event : !1 });
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
      n: qc,
      toSizeUnit: ze,
      classes: xS,
      handleTouchstart: me,
      handleTouchmove: D,
      handleTouchend: K,
      next: on,
      prev: ln,
      to: wn,
      resize: Me,
      toNumber: L,
      handleHovering: fe,
      getNavigationAnimation: Se
    };
  }
});
Zp.render = n6;
var Ga = Zp;
te(Ga);
ae(Ga, Gs);
const x5 = Ga;
var Ut = Ga;
function o6() {
  const { bindParent: e, index: n, parentProvider: o } = gn(Df);
  return e || Vn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: o,
    bindSwipe: e
  };
}
const { name: t6, n: r6 } = x("swipe-item"), a6 = ["aria-hidden"];
function i6(e, n) {
  return h(), S("div", {
    class: v(e.n()),
    style: X({
      width: e.vertical ? void 0 : e.toSizeUnit(e.size),
      height: e.vertical ? e.toSizeUnit(e.size) : void 0,
      transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.translate)})`
    }),
    tabindex: "-1",
    "aria-hidden": e.currentIndex !== e.index,
    onFocus: n[0] || (n[0] = (o) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (o) => e.isFocusing = !1)
  }, [
    A(e.$slots, "default")
  ], 46, a6);
}
const Jp = _({
  name: t6,
  setup() {
    const e = $(0), n = $(!1), { swipe: o, bindSwipe: t, index: r } = o6(), { size: a, currentIndex: i, vertical: l } = o, s = {
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
      n: r6,
      toSizeUnit: ze
    };
  }
});
Jp.render = i6;
var Zs = Jp;
te(Zs);
const eE = Zs;
var Yt = Zs, l6 = Object.defineProperty, Xc = Object.getOwnPropertySymbols, s6 = Object.prototype.hasOwnProperty, u6 = Object.prototype.propertyIsEnumerable, Gc = (e, n, o) => n in e ? l6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Zc = (e, n) => {
  for (var o in n || (n = {}))
    s6.call(n, o) && Gc(e, o, n[o]);
  if (Xc)
    for (var o of Xc(n))
      u6.call(n, o) && Gc(e, o, n[o]);
  return e;
};
const Qp = Zc(Zc({
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
  "onUpdate:show": V(),
  onLongPress: V()
}, De(Gs, ["loop", "indicator", "onChange"])), De(yt, [
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
])), { name: c6, n: Jc, classes: d6 } = x("image-preview"), Li = 12, Qc = 200, f6 = 350, _c = 200, v6 = 500, mr = 1, p6 = ["onTouchstart"], m6 = ["src", "alt"];
function h6(e, n) {
  const o = Q("var-swipe-item"), t = Q("var-swipe"), r = Q("var-icon"), a = Q("var-popup");
  return h(), Ce(a, {
    "var-image-preview-cover": "",
    class: v(e.n("popup")),
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
      G(t, He({
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
          (h(!0), S(
            Ne,
            null,
            Ke(e.images, (i, l) => (h(), Ce(o, {
              class: v(e.n("swipe-item")),
              "var-image-preview-cover": "",
              key: i
            }, {
              default: ce(() => [
                N("div", {
                  class: v(e.n("zoom-container")),
                  style: X({
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
                    class: v(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                    src: i,
                    alt: i
                  }, null, 10, m6)
                ], 46, p6)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        indicator: ce(({ index: i, length: l }) => [
          A(e.$slots, "indicator", {
            index: i,
            length: l
          }, () => [
            e.indicator && e.images.length > 1 ? (h(), S(
              "div",
              {
                key: 0,
                class: v(e.n("indicators"))
              },
              ie(i + 1) + " / " + ie(l),
              3
              /* TEXT, CLASS */
            )) : q("v-if", !0)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]),
      A(e.$slots, "close-icon", {}, () => [
        e.closeable ? (h(), Ce(r, {
          key: 0,
          class: v(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        }, null, 8, ["class", "onClick"])) : q("v-if", !0)
      ]),
      e.$slots.extra ? (h(), S(
        "div",
        {
          key: 0,
          class: v(e.n("extra"))
        },
        [
          A(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : q("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "transition", "close-on-key-escape", "lock-scroll", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onKeyEscape", "onRouteChange"]);
}
const _p = _({
  name: c6,
  components: {
    VarSwipe: Ut,
    VarSwipeItem: Yt,
    VarPopup: Oo,
    VarIcon: Ze
  },
  inheritAttrs: !1,
  props: Qp,
  setup(e) {
    const n = Kn(e, "show"), o = $(1), t = $(0), r = $(0), a = $(), i = $(), l = $(!0), s = $(null), { moveX: u, moveY: c, distance: d, startTime: f, startTouch: p, moveTouch: g, endTouch: m } = gt(), k = I(() => {
      const { imagePreventDefault: F, show: Z } = e;
      return Z && F;
    });
    let w = null, y = null, b = !1;
    const P = {
      start: null,
      prev: null
    };
    je(() => document, "contextmenu", le);
    function z(F) {
      o.value = L(F), l.value = !1, P.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, _c);
    }
    function O() {
      o.value = 1, t.value = 0, r.value = 0, l.value = !0, P.prev = null, a.value = void 0, i.value = void 0;
    }
    function B(F) {
      return P.prev ? d.value <= Li && performance.now() - f.value <= Qc && P.prev === F : !1;
    }
    function T(F) {
      return !F || !P.start || !P.prev ? !1 : d.value <= Li && performance.now() - f.value < f6 && (F === P.start || F.parentNode === P.start);
    }
    function E() {
      m(), window.clearTimeout(y), b = !1, P.start = null;
    }
    function M(F) {
      if (m(), window.clearTimeout(y), b) {
        b = !1;
        return;
      }
      const Z = T(F.target);
      w = window.setTimeout(() => {
        Z && j(), P.start = null;
      }, Qc);
    }
    function R(F, Z) {
      window.clearTimeout(w), window.clearTimeout(y);
      const oe = F.currentTarget;
      if (P.start = oe, y = window.setTimeout(() => {
        b = !0, C(e.onLongPress, Z);
      }, v6), B(oe)) {
        o.value > mr ? O() : z(e.zoom);
        return;
      }
      p(F), P.prev = oe;
    }
    function W(F) {
      const { offsetWidth: Z, offsetHeight: oe } = F, { naturalWidth: me, naturalHeight: D } = F.querySelector(`.${Jc("image")}`);
      return {
        width: Z,
        height: oe,
        imageRadio: D / me,
        rootRadio: oe / Z,
        zoom: L(e.zoom)
      };
    }
    function U(F) {
      const { zoom: Z, imageRadio: oe, rootRadio: me, width: D, height: K } = W(F);
      if (!oe)
        return 0;
      const fe = oe > me ? K / oe : D;
      return Math.max(0, (Z * fe - D) / 2) / Z;
    }
    function H(F) {
      const { zoom: Z, imageRadio: oe, rootRadio: me, width: D, height: K } = W(F);
      if (!oe)
        return 0;
      const fe = oe > me ? K : D * oe;
      return Math.max(0, (Z * fe - K) / 2) / Z;
    }
    function Y(F) {
      if (!P.prev)
        return;
      g(F);
      const Z = F.currentTarget;
      if (d.value > Li && window.clearTimeout(y), o.value > mr) {
        const oe = U(Z), me = H(Z);
        t.value = Pn(t.value + u.value, -oe, oe), r.value = Pn(r.value + c.value, -me, me);
      }
      P.prev = Z;
    }
    function j() {
      if (o.value > mr) {
        O(), setTimeout(() => C(e["onUpdate:show"], !1), _c);
        return;
      }
      C(e["onUpdate:show"], !1);
    }
    function le(F) {
      k.value && Ve(F);
    }
    function ee(F) {
      var Z;
      (Z = s.value) == null || Z.prev(F);
    }
    function pe(F) {
      var Z;
      (Z = s.value) == null || Z.next(F);
    }
    function ye(F, Z) {
      var oe;
      (oe = s.value) == null || oe.to(F, Z);
    }
    function Ee(F) {
      F <= mr ? O() : z(F);
    }
    return {
      swipeRef: s,
      isPreventDefault: k,
      show: n,
      scale: o,
      translateX: t,
      translateY: r,
      canSwipe: l,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: Jc,
      classes: d6,
      toNumber: L,
      handleTouchstart: R,
      handleTouchmove: Y,
      handleTouchend: M,
      handleTouchcancel: E,
      close: j,
      prev: ee,
      next: pe,
      to: ye,
      zoom: Ee
    };
  }
});
_p.render = h6;
var tr = _p, g6 = Object.defineProperty, b6 = Object.defineProperties, y6 = Object.getOwnPropertyDescriptors, xc = Object.getOwnPropertySymbols, k6 = Object.prototype.hasOwnProperty, $6 = Object.prototype.propertyIsEnumerable, ed = (e, n, o) => n in e ? g6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, hr = (e, n) => {
  for (var o in n || (n = {}))
    k6.call(n, o) && ed(e, o, n[o]);
  if (xc)
    for (var o of xc(n))
      $6.call(n, o) && ed(e, o, n[o]);
  return e;
}, nd = (e, n) => b6(e, y6(n));
let yo, It = {};
function w6(e = {}) {
  return mn(e) ? nd(hr({}, It), { images: [e] }) : Xe(e) ? nd(hr({}, It), { images: e }) : hr(hr({}, It), e);
}
function Ro(e) {
  if (!to())
    return;
  Ro.close();
  const n = w6(e), o = _e(n);
  o.teleport = "body", yo = o;
  const { unmountInstance: t } = bt(tr, o, {
    onClose: () => C(o.onClose),
    onClosed: () => {
      C(o.onClosed), t(), yo === o && (yo = null);
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
Ro.close = () => {
  if (yo != null) {
    const e = yo;
    yo = null, Ue().then(() => {
      e.show = !1;
    });
  }
};
Ro.setDefaultOptions = (e) => {
  It = e;
};
Ro.resetDefaultOptions = () => {
  It = {};
};
Ro.Component = tr;
te(tr);
te(tr, Ro);
ae(Ro, Qp);
const nE = tr;
var jt = Ro;
const xp = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function C6() {
  const { bindChildren: e, length: n, childProviders: o } = bn(
    xp
  );
  return {
    length: n,
    indexAnchors: o,
    bindIndexAnchors: e
  };
}
function S6() {
  const { parentProvider: e, index: n, bindParent: o } = gn(
    xp
  );
  return o || Vn("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: o
  };
}
const em = {
  index: [Number, String]
}, { name: P6, n: z6, classes: O6 } = x("index-anchor");
function T6(e, n) {
  return h(), Ce(ht(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: ce(() => [
      N(
        "div",
        He({
          class: e.n()
        }, e.$attrs),
        [
          A(e.$slots, "default", {}, () => [
            Be(
              ie(e.name),
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
const nm = _({
  name: P6,
  components: { VarSticky: pt },
  inheritAttrs: !1,
  props: em,
  setup(e) {
    const n = $(!1), o = I(() => e.index), t = $(null), { index: r, indexBar: a, bindIndexBar: i } = S6(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: c, zIndex: d } = a;
    i({
      index: r,
      name: o,
      setDisabled: g,
      getOffsetTop: p
    });
    function p() {
      return t.value ? t.value.$el ? t.value.$el.offsetTop : t.value.offsetTop : 0;
    }
    function g(m) {
      n.value = m;
    }
    return {
      n: z6,
      classes: O6,
      name: o,
      anchorEl: t,
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
nm.render = T6;
var Za = nm;
te(Za);
ae(Za, em);
const oE = Za;
var Al = Za;
const om = {
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
  onClick: V(),
  onChange: V()
};
var od = (e, n, o) => new Promise((t, r) => {
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
const { name: E6, n: I6, classes: B6 } = x("index-bar"), D6 = ["onClick"];
function M6(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.n()),
      ref: "barEl"
    },
    [
      A(e.$slots, "default"),
      N(
        "ul",
        {
          class: v(e.n("anchor-list")),
          style: X({ zIndex: e.toNumber(e.zIndex) + 2, display: e.hideList ? "none" : "block" })
        },
        [
          (h(!0), S(
            Ne,
            null,
            Ke(e.anchorNameList, (o) => (h(), S("li", {
              key: o,
              class: v(e.classes(e.n("anchor-item"), [e.active === o, e.n("anchor-item--active")])),
              style: X({ color: e.active === o && e.highlightColor ? e.highlightColor : void 0 }),
              onClick: (t) => e.anchorClick({ anchorName: o, manualCall: !0 })
            }, [
              A(e.$slots, "anchor-name", { anchorName: o }, () => [
                Be(
                  ie(o),
                  1
                  /* TEXT */
                )
              ])
            ], 14, D6))),
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
const tm = _({
  name: E6,
  props: om,
  setup(e) {
    const n = $(""), o = $(null), t = $([]), r = $(), a = I(() => e.sticky), i = I(() => e.stickyCssMode), l = I(() => xe(e.stickyOffsetTop)), s = I(() => e.zIndex), { length: u, indexAnchors: c, bindIndexAnchors: d } = C6();
    let f = null, p = !1;
    const g = {
      active: r,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    de(
      () => u.value,
      () => od(this, null, function* () {
        yield kn(), t.value = c.filter(({ name: O }) => O.value != null).map(({ name: O }) => O.value);
      })
    ), hn(b), jr(P), mt(() => {
      p = !0, P();
    }), Do(() => {
      !p || r.value === void 0 || (y({
        anchorName: r.value,
        options: { event: !1 }
      }), p = !1);
    }), d(g);
    function m(O, B) {
      const T = zo(O) ? O.name.value : O;
      T === r.value || T === void 0 || (r.value = T, (B == null ? void 0 : B.event) !== !1 && C(e.onChange, T));
    }
    function k() {
      const { top: O } = an(f), { top: B } = an(o.value);
      return Ho(f) - O + B;
    }
    function w() {
      const O = Ho(f), B = f === window ? document.body.scrollHeight : f.scrollHeight, T = k();
      c.forEach((E, M) => {
        const R = E.getOffsetTop(), W = O - R + l.value - T, U = M === c.length - 1 ? B : c[M + 1].getOffsetTop() - E.getOffsetTop();
        E.setDisabled(!0), W >= 0 && W < U && n.value === "" && (E.setDisabled(!1), m(E));
      });
    }
    function y(O) {
      return od(this, arguments, function* ({ anchorName: B, manualCall: T = !1, options: E }) {
        if (T && C(e.onClick, B), B === r.value && !p)
          return;
        const M = c.find(({ name: Y }) => B === Y.value);
        if (!M)
          return;
        const R = k(), U = M.getOffsetTop() - l.value + R, H = ks(f);
        n.value = B, m(B, E), yield Dt(f, {
          left: H,
          top: U,
          animation: tv,
          duration: L(e.duration)
        }), yield kn(), n.value = "";
      });
    }
    function b() {
      f = To(o.value), f.addEventListener("scroll", w);
    }
    function P() {
      f && f.removeEventListener("scroll", w);
    }
    function z(O, B) {
      at(() => y({ anchorName: O, options: B }));
    }
    return {
      barEl: o,
      active: r,
      zIndex: s,
      anchorNameList: t,
      n: I6,
      classes: B6,
      toNumber: L,
      scrollTo: z,
      anchorClick: y
    };
  }
});
tm.render = M6;
var Ja = tm;
te(Ja);
ae(Ja, om);
const tE = Ja;
var Vl = Ja;
const rm = {
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
  onClick: V()
}, { name: N6, n: A6, classes: V6 } = x("link");
function R6(e, n) {
  return h(), Ce(ht(e.tag), He(e.linkProps, {
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
      A(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const am = _({
  name: N6,
  props: rm,
  setup(e) {
    const n = $(!1), o = I(() => {
      const { disabled: a, href: i, to: l } = e;
      return a ? "span" : i ? "a" : l ? "router-link" : "a";
    }), t = I(() => {
      const { disabled: a, href: i, target: l, to: s, replace: u, rel: c } = e;
      return a ? {} : i ? { href: i, target: l, rel: c } : s ? { to: s, target: l, replace: u } : {};
    });
    function r(a) {
      e.disabled || C(e.onClick, a);
    }
    return {
      tag: o,
      linkProps: t,
      isFocusing: n,
      inMobile: Pr,
      n: A6,
      classes: V6,
      handleClick: r,
      toSizeUnit: ze
    };
  }
});
am.render = R6;
var Qa = am;
te(Qa);
ae(Qa, rm);
const rE = Qa;
var Rl = Qa;
const im = {
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
  onLoad: V(),
  "onUpdate:loading": V(),
  "onUpdate:error": V()
}, lm = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function L6() {
  const { bindChildren: e, childProviders: n, length: o } = bn(
    lm
  );
  return {
    length: o,
    tabItemList: n,
    bindTabItem: e
  };
}
const sm = Symbol("TAB_ITEM_BIND_LIST_KEY");
function F6() {
  const { parentProvider: e, bindParent: n, index: o } = gn(
    lm
  );
  return n || Vn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: o,
    tabsItems: e,
    bindTabsItems: n
  };
}
function H6() {
  const { childProviders: e, bindChildren: n, length: o } = bn(sm);
  return {
    length: o,
    lists: e,
    bindLists: n
  };
}
function U6() {
  const { parentProvider: e, bindParent: n, index: o } = gn(sm);
  return {
    index: o,
    tabItem: e,
    bindTabItem: n
  };
}
var Y6 = (e, n, o) => new Promise((t, r) => {
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
const { name: j6, n: W6, classes: K6 } = x("list");
function q6(e, n) {
  const o = Q("var-loading"), t = Ye("ripple");
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [
      A(e.$slots, "default"),
      e.loading ? A(e.$slots, "loading", { key: 0 }, () => {
        var r;
        return [
          N(
            "div",
            {
              class: v(e.n("loading"))
            },
            [
              N(
                "div",
                {
                  class: v(e.n("loading-text"))
                },
                ie((r = e.loadingText) != null ? r : (e.pt ? e.pt : e.t)("listLoadingText")),
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
      }) : q("v-if", !0),
      e.finished ? A(e.$slots, "finished", { key: 1 }, () => {
        var r;
        return [
          N(
            "div",
            {
              class: v(e.n("finished"))
            },
            ie((r = e.finishedText) != null ? r : (e.pt ? e.pt : e.t)("listFinishedText")),
            3
            /* TEXT, CLASS */
          )
        ];
      }) : q("v-if", !0),
      e.error ? A(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          Ae((h(), S(
            "div",
            {
              class: v(e.n("error")),
              onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
            },
            [
              Be(
                ie((r = e.errorText) != null ? r : (e.pt ? e.pt : e.t)("listErrorText")),
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
      }) : q("v-if", !0),
      N(
        "div",
        {
          class: v(e.n("detector")),
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
const um = _({
  name: j6,
  directives: { Ripple: nn },
  components: { VarLoading: dt },
  props: im,
  setup(e) {
    const n = $(null), o = $(null), { tabItem: t, bindTabItem: r } = U6(), { t: a } = ao();
    let i;
    C(r, {}), t && de(() => t.current.value, c), de(() => [e.loading, e.error, e.finished], c), hn(() => {
      i = To(n.value), i.addEventListener("scroll", c), e.immediateCheck && c();
    }), Jt(u);
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
      return Y6(this, null, function* () {
        yield Ue(), !(e.loading || e.finished || e.error || (t == null ? void 0 : t.current.value) === !1 || !s()) && l();
      });
    }
    return {
      listEl: n,
      detectorEl: o,
      pt: a,
      t: tn,
      isNumber: En,
      load: l,
      check: c,
      n: W6,
      classes: K6
    };
  }
});
um.render = q6;
var _a = um;
te(_a);
ae(_a, im);
const aE = _a;
var Ll = _a;
const X6 = {
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
  name: G6,
  classes: Z6,
  n: td
} = x("loading-bar");
var J6 = _({
  name: G6,
  props: X6,
  setup(e) {
    return () => G("div", {
      class: Z6(td(), [e.error, td("--error")]),
      style: {
        zIndex: An.zIndex + 10,
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
const Js = 200;
let cm, dm, fm, vm, xa, rd, pm = {};
const Q6 = {
  value: 0,
  opacity: 0,
  error: !1
}, rn = _e(Q6);
function _6(e) {
  Object.assign(rn, e), pm = e;
}
const x6 = () => {
  Object.keys(pm).forEach((e) => {
    rn[e] !== void 0 && (rn[e] = void 0);
  });
}, mm = () => {
  rd || (rd = !0, bt(J6, rn));
}, Qs = () => {
  cm = window.setTimeout(() => {
    rn.transitionDuration = void 0, !(rn.value >= 95) && (rn.value += rn.value < 70 ? Math.round(5 * Math.random()) : Math.random(), Qs());
  }, 200);
}, _s = () => {
  window.clearTimeout(cm), window.clearTimeout(xa), window.clearTimeout(fm), window.clearTimeout(dm), window.clearTimeout(vm);
}, hm = () => {
  _s(), rn.value = 100, xa = window.setTimeout(() => {
    rn.opacity = 0, vm = window.setTimeout(() => {
      rn.error = !1;
    }, 250);
  }, Js + 100);
}, e2 = () => {
  _s(), rn.error = !1, rn.value = 0, rn.transitionDuration = 0, mm(), xa = window.setTimeout(() => {
    rn.opacity = 1;
  }, Js), Qs();
}, n2 = () => {
  var e;
  fm = window.setTimeout(hm, (e = rn.finishDelay) != null ? e : 0);
}, o2 = () => {
  _s(), rn.error = !0, rn.value === 100 && (rn.value = 0, rn.transitionDuration = 0), mm(), xa = window.setTimeout(() => {
    rn.opacity = 1;
  }, Js), Qs(), dm = window.setTimeout(hm, 300);
}, gm = {
  start: e2,
  finish: n2,
  error: o2,
  setDefaultOptions: _6,
  resetDefaultOptions: x6
}, iE = gm;
var Fl = gm;
const bm = {
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
var t2 = Object.defineProperty, r2 = Object.defineProperties, a2 = Object.getOwnPropertyDescriptors, ad = Object.getOwnPropertySymbols, i2 = Object.prototype.hasOwnProperty, l2 = Object.prototype.propertyIsEnumerable, id = (e, n, o) => n in e ? t2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, s2 = (e, n) => {
  for (var o in n || (n = {}))
    i2.call(n, o) && id(e, o, n[o]);
  if (ad)
    for (var o of ad(n))
      l2.call(n, o) && id(e, o, n[o]);
  return e;
}, u2 = (e, n) => r2(e, a2(n));
const { name: c2, n: d2 } = x("locale-provider"), f2 = _({
  name: c2,
  props: bm,
  setup(e, { slots: n }) {
    const o = I(
      () => {
        var r;
        return Object.entries((r = e.messages) != null ? r : {}).reduce((a, [i, l]) => (a[i] = u2(s2({}, l), {
          lang: i
        }), a), {});
      }
    );
    Ab({
      t
    });
    function t(r) {
      if (Bt(o.value, e.locale) && Bt(o.value[e.locale], r))
        return o.value[e.locale][r];
    }
    return () => Xt(
      e.tag,
      {
        class: d2()
      },
      C(n.default)
    );
  }
});
var ei = f2;
te(ei);
ae(ei, bm);
const lE = ei;
var Hl = ei;
const ym = Symbol("SELECT_BIND_OPTION_KEY");
function v2() {
  const { length: e, childProviders: n, bindChildren: o } = bn(ym);
  return {
    length: e,
    options: n,
    bindOptions: o
  };
}
function p2() {
  const { index: e, parentProvider: n, bindParent: o } = gn(ym);
  return o || Vn("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: o
  };
}
const km = {
  label: {},
  value: {},
  disabled: Boolean,
  // internal
  option: Object
}, { name: m2, n: h2, classes: g2 } = x("option"), b2 = ["tabindex"];
function y2(e, n) {
  const o = Q("var-checkbox"), t = Q("maybe-v-node"), r = Q("var-hover-overlay"), a = Ye("ripple"), i = Ye("hover");
  return Ae((h(), S("div", {
    ref: "root",
    class: v(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
    style: X({
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
        class: v(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: X({
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
    }, null, 8, ["modelValue", "checked-color", "disabled", "onChange"])) : q("v-if", !0),
    A(e.$slots, "default", { selected: e.optionSelected }, () => [
      N(
        "div",
        {
          class: v(e.classes(e.n("text"), e.n("$--ellipsis")))
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
  ], 46, b2)), [
    [a, { disabled: e.disabled }],
    [i, e.handleHovering, "desktop"]
  ]);
}
const $m = _({
  name: m2,
  directives: { Ripple: nn, Hover: In },
  components: {
    VarCheckbox: st,
    VarHoverOverlay: Rn,
    MaybeVNode: Qt
  },
  props: km,
  setup(e) {
    const n = $(), o = $(!1), t = $(!1), r = I(() => t.value), a = I(
      () => {
        var z;
        return Dn(e.label) ? e.label(
          (z = e.option) != null ? z : {
            label: e.label,
            value: e.value,
            disabled: e.disabled
          },
          t.value
        ) : e.label;
      }
    ), i = I(() => e.value), { select: l, bindSelect: s } = p2(), { multiple: u, focusColor: c, onSelect: d, computeLabel: f } = l, { hovering: p, handleHovering: g } = _n(), m = {
      label: a,
      value: i,
      selected: r,
      sync: P
    };
    de([() => e.label, () => e.value], f), s(m), je(() => window, "keydown", w), je(() => window, "keyup", y);
    function k() {
      e.disabled || b();
    }
    function w(z) {
      o.value && ((z.key === " " || z.key === "Enter") && Ve(z), z.key === "Enter" && n.value.click());
    }
    function y(z) {
      o.value && z.key === " " && (Ve(z), n.value.click());
    }
    function b() {
      u.value && (t.value = !t.value), d(m);
    }
    function P(z) {
      t.value = z;
    }
    return {
      root: n,
      optionSelected: t,
      multiple: u,
      focusColor: c,
      hovering: p,
      isFocusing: o,
      labelVNode: a,
      n: h2,
      classes: g2,
      handleHovering: g,
      handleClick: k,
      handleSelect: b
    };
  }
});
$m.render = y2;
var ni = $m;
te(ni);
ae(ni, km);
const sE = ni;
var Ur = ni;
const wm = {
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
  onClick: V(),
  onKeyEscape: V(),
  "onUpdate:show": V()
}, {
  name: k2,
  n: ld
} = x("overlay");
var oi = _({
  name: k2,
  inheritAttrs: !1,
  props: wm,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const {
      zIndex: t
    } = xt(() => e.show, 1), {
      onStackTop: r
    } = Ps(() => e.show, t), {
      disabled: a
    } = qo();
    _t(() => e.show, () => e.lockScroll), je(() => window, "keydown", i);
    function i(c) {
      !r() || c.key !== "Escape" || !e.show || (C(e.onKeyEscape), e.closeOnKeyEscape && (Ve(c), C(e["onUpdate:show"], !1)));
    }
    function l() {
      C(e.onClick), C(e["onUpdate:show"], !1);
    }
    function s() {
      return G("div", He({
        class: ld(),
        style: {
          zIndex: t.value
        }
      }, o, {
        onClick: l
      }), [C(n.default)]);
    }
    function u() {
      return G(Qe, {
        name: ld("--fade")
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
te(oi);
ae(oi, wm);
const uE = oi;
var Ul = oi;
const Cm = {
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
  onChange: V(),
  "onUpdate:current": V(),
  "onUpdate:size": V()
}, { name: $2, n: w2, classes: C2 } = x("pagination"), S2 = ["item-mode", "onClick"];
function P2(e, n) {
  const o = Q("var-icon"), t = Q("var-input"), r = Q("var-menu-option"), a = Q("var-menu-select"), i = Ye("ripple");
  return h(), S(
    "ul",
    {
      class: v(e.n())
    },
    [
      Ae((h(), S(
        "li",
        {
          class: v(
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
          A(e.$slots, "prev", {}, () => [
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
          class: v(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
        },
        [
          G(t, {
            "var-pagination-cover": "",
            hint: !1,
            disabled: e.disabled,
            modelValue: e.simpleCurrentValue,
            "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
            onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
            onKeydown: n[3] || (n[3] = ou((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
          }, null, 8, ["disabled", "modelValue"]),
          N("span", null, [
            Be(
              " / " + ie(e.pageCount) + " ",
              1
              /* TEXT */
            ),
            N(
              "div",
              {
                class: v(e.n("simple-line"))
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
        Ne,
        { key: 1 },
        Ke(e.pageList, (l, s) => Ae((h(), S("li", {
          key: s,
          "item-mode": e.getMode(l, s),
          class: v(
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
          Be(
            ie(l),
            1
            /* TEXT */
          )
        ], 10, S2)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Ae((h(), S(
        "li",
        {
          class: v(
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
          A(e.$slots, "next", {}, () => [
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
          class: v(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
        },
        [
          G(a, {
            placement: "cover-top",
            disabled: e.disabled,
            modelValue: e.size,
            "onUpdate:modelValue": n[5] || (n[5] = (l) => e.size = l)
          }, {
            options: ce(() => [
              (h(!0), S(
                Ne,
                null,
                Ke(e.sizeOption, (l, s) => (h(), Ce(r, {
                  key: s,
                  value: l,
                  onClick: e.clickSize
                }, {
                  default: ce(() => [
                    Be(
                      ie(l) + ie((e.pt ? e.pt : e.t)("paginationItem")) + " / " + ie((e.pt ? e.pt : e.t)("paginationPage")),
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
                  class: v(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")]))
                },
                [
                  N(
                    "span",
                    null,
                    ie(e.size) + ie((e.pt ? e.pt : e.t)("paginationItem")) + " / " + ie((e.pt ? e.pt : e.t)("paginationPage")),
                    1
                    /* TEXT */
                  ),
                  G(o, {
                    class: v(e.n("size--open-icon")),
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
      )) : q("v-if", !0),
      e.showQuickJumper && !e.simple ? (h(), S(
        "li",
        {
          key: 3,
          class: v(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
        },
        [
          Be(
            ie((e.pt ? e.pt : e.t)("paginationJump")) + " ",
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
            onKeydown: n[8] || (n[8] = ou((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : q("v-if", !0),
      e.totalText ? (h(), S(
        "li",
        {
          key: 4,
          class: v(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
        },
        ie(e.totalText),
        3
        /* TEXT, CLASS */
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Sm = _({
  name: $2,
  components: {
    VarMenuSelect: Lt,
    VarMenuOption: ut,
    VarIcon: Ze,
    VarInput: Nt
  },
  directives: { Ripple: nn },
  props: Cm,
  setup(e) {
    const n = $(""), o = $("1"), t = $(!1), r = $(!1), a = $(L(e.current) || 1), i = $(L(e.size) || 10), l = $([]), s = I(() => Math.ceil(e.maxPagerCount / 2)), u = I(() => Math.ceil(L(e.total) / L(i.value))), c = I(() => {
      const b = i.value * (a.value - 1) + 1, P = Math.min(i.value * a.value, L(e.total));
      return [b, P];
    }), d = I(() => e.showTotal ? e.showTotal(L(e.total), c.value) : ""), { t: f } = ao();
    de([() => e.current, () => e.size], ([b, P]) => {
      a.value = L(b) || 1, i.value = L(P || 10);
    }), de(
      [a, i, u],
      ([b, P, z], [O, B]) => {
        let T = [];
        const { maxPagerCount: E, total: M, onChange: R } = e, W = Math.ceil(L(M) / L(B)), U = z - (E - s.value) - 1;
        if (o.value = `${b}`, z - 2 > E) {
          if (O === void 0 || z !== W)
            for (let H = 2; H < E + 2; H++) T.push(H);
          if (b <= E && b < U) {
            T = [];
            for (let H = 1; H < E + 1; H++)
              T.push(H + 1);
            t.value = !0, r.value = !1;
          }
          if (b > E && b < U) {
            T = [];
            for (let H = 1; H < E + 1; H++)
              T.push(b + H - s.value);
            t.value = b === 2 && E === 1, r.value = !1;
          }
          if (b >= U) {
            T = [];
            for (let H = 1; H < E + 1; H++)
              T.push(z - (E - H) - 1);
            t.value = !1, r.value = !0;
          }
          T = [1, "...", ...T, "...", z];
        } else
          for (let H = 1; H <= z; H++) T.push(H);
        l.value = T, O != null && z > 0 && C(R, b, P), C(e["onUpdate:current"], b), C(e["onUpdate:size"], P);
      },
      {
        immediate: !0
      }
    );
    function p(b, P) {
      return En(b) ? !1 : P === 1 ? t.value : r.value;
    }
    function g(b, P) {
      return En(b) ? "basic" : P === 1 ? "head" : "tail";
    }
    function m(b, P) {
      if (!(b === a.value || e.disabled)) {
        if (b === "...") {
          a.value = P === 1 ? Math.max(a.value - e.maxPagerCount, 1) : Math.min(a.value + e.maxPagerCount, u.value);
          return;
        }
        if (b === "prev") {
          a.value = w(a.value - 1);
          return;
        }
        if (b === "next") {
          a.value = w(a.value + 1);
          return;
        }
        En(b) && (a.value = b);
      }
    }
    function k() {
      const b = w(a.value);
      o.value = String(b), a.value = b;
    }
    function w(b) {
      return b > u.value ? u.value : b < 1 ? 1 : b;
    }
    function y(b, P, z) {
      z.target.blur();
      const O = w(L(P));
      o.value = String(O), a.value = O, b === "quick" && (n.value = "");
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
      t: tn,
      n: w2,
      classes: C2,
      getMode: g,
      isHideEllipsis: p,
      clickItem: m,
      clickSize: k,
      setPage: y,
      toNumber: L,
      formatElevation: un
    };
  }
});
Sm.render = P2;
var ti = Sm;
te(ti);
ae(ti, Cm);
const cE = ti;
var Yl = ti;
const Pm = {
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
  onClick: V()
}, { name: z2, n: O2, classes: T2 } = x("paper");
function E2(e, n) {
  const o = Ye("ripple");
  return Ae((h(), S(
    "div",
    {
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          e.formatElevation(e.elevation, 2),
          [e.onClick, e.n("--cursor")],
          [e.round, e.n("--round")],
          [e.inline, e.n("$--inline-flex")]
        )
      ),
      style: X({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      A(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: !e.ripple }]
  ]);
}
const zm = _({
  name: z2,
  directives: { Ripple: nn },
  props: Pm,
  setup(e) {
    function n(o) {
      C(e.onClick, o);
    }
    return {
      n: O2,
      classes: T2,
      formatElevation: un,
      toSizeUnit: ze,
      handleClick: n
    };
  }
});
zm.render = E2;
var ri = zm;
te(ri);
ae(ri, Pm);
const dE = ri;
var jl = ri, I2 = Object.defineProperty, sd = Object.getOwnPropertySymbols, B2 = Object.prototype.hasOwnProperty, D2 = Object.prototype.propertyIsEnumerable, ud = (e, n, o) => n in e ? I2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, M2 = (e, n) => {
  for (var o in n || (n = {}))
    B2.call(n, o) && ud(e, o, n[o]);
  if (sd)
    for (var o of sd(n))
      D2.call(n, o) && ud(e, o, n[o]);
  return e;
};
const Om = M2({
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
  onChange: V(),
  onConfirm: V(),
  onCancel: V(),
  "onUpdate:modelValue": V()
}, De(yt, [
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
])), { name: N2, n: A2, classes: V2 } = x("picker"), cd = 300, R2 = 15, dd = 200, L2 = 1e3;
let fd = 0;
const F2 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], H2 = ["onTransitionend"], U2 = ["onClick"];
function Y2(e, n) {
  const o = Q("var-button");
  return h(), Ce(
    ht(e.dynamic ? e.n("$-popup") : e.Transition),
    He(
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
          He({
            class: e.n()
          }, e.$attrs),
          [
            e.toolbar ? (h(), S(
              "div",
              {
                key: 0,
                class: v(e.n("toolbar"))
              },
              [
                A(e.$slots, "cancel", {}, () => [
                  G(o, {
                    class: v(e.n("cancel-button")),
                    "var-picker-cover": "",
                    text: "",
                    "text-color": e.cancelButtonTextColor,
                    onClick: e.cancel
                  }, {
                    default: ce(() => {
                      var t;
                      return [
                        Be(
                          ie((t = e.cancelButtonText) != null ? t : (e.pt ? e.pt : e.t)("pickerCancelButtonText")),
                          1
                          /* TEXT */
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["class", "text-color", "onClick"])
                ]),
                A(e.$slots, "title", {}, () => {
                  var t;
                  return [
                    N(
                      "div",
                      {
                        class: v(e.n("title"))
                      },
                      ie((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("pickerTitle")),
                      3
                      /* TEXT, CLASS */
                    )
                  ];
                }),
                A(e.$slots, "confirm", {}, () => [
                  G(o, {
                    class: v(e.n("confirm-button")),
                    text: "",
                    "var-picker-cover": "",
                    "text-color": e.confirmButtonTextColor,
                    onClick: e.confirm
                  }, {
                    default: ce(() => {
                      var t;
                      return [
                        Be(
                          ie((t = e.confirmButtonText) != null ? t : (e.pt ? e.pt : e.t)("pickerConfirmButtonText")),
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
            )) : q("v-if", !0),
            N(
              "div",
              {
                class: v(e.n("columns")),
                style: X({ height: `${e.columnHeight}px` })
              },
              [
                (h(!0), S(
                  Ne,
                  null,
                  Ke(e.scrollColumns, (t) => (h(), S("div", {
                    class: v(e.n("column")),
                    key: t.id,
                    onTouchstartPassive: (r) => e.handleTouchstart(r, t),
                    onTouchmove: Wn((r) => e.handleTouchmove(r, t), ["prevent"]),
                    onTouchend: (r) => e.handleTouchend(t)
                  }, [
                    N("div", {
                      class: v(e.n("scroller")),
                      ref_for: !0,
                      ref: (r) => e.setScrollEl(r, t),
                      style: X({
                        transform: `translateY(${t.translate}px)`,
                        transitionDuration: `${t.duration}ms`,
                        transitionProperty: t.duration ? "transform" : "none"
                      }),
                      onTransitionend: (r) => e.handleTransitionend(t)
                    }, [
                      (h(!0), S(
                        Ne,
                        null,
                        Ke(t.column, (r, a) => (h(), S("div", {
                          key: e.getValue(r),
                          class: v(e.classes(e.n("option"), r.className)),
                          style: X({ height: `${e.optionHeight}px` }),
                          onClick: (i) => e.handleClick(t, a)
                        }, [
                          N(
                            "div",
                            {
                              class: v(e.classes(e.n("text"), r.textClassName))
                            },
                            ie(r[e.getOptionKey("text")]),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 14, U2))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, H2)
                  ], 42, F2))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                N(
                  "div",
                  {
                    class: v(e.n("picked")),
                    style: X({
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
                    class: v(e.n("mask")),
                    style: X({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
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
const Tm = _({
  name: N2,
  components: {
    VarButton: On,
    VarPopup: Oo
  },
  inheritAttrs: !1,
  props: Om,
  setup(e) {
    const n = Kn(e, "modelValue"), o = $([]), t = I(() => L(e.columnsCount)), r = I(() => xe(e.optionHeight)), a = I(() => xe(e.optionCount)), i = I(() => a.value * r.value / 2 - r.value / 2), l = I(() => a.value * r.value), { prevY: s, moveY: u, dragging: c, startTouch: d, moveTouch: f, endTouch: p } = gt(), { t: g } = ao();
    let m = [];
    B(), de(() => e.columns, B, { deep: !0 }), de(() => n.value, B);
    function k(D) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[D];
    }
    function w(D) {
      var K;
      return (K = D[k("value")]) != null ? K : D[k("text")];
    }
    function y(D) {
      m = [...D];
    }
    function b(D) {
      return (e.columnsCount != null ? D.slice(0, t.value) : D).map((fe, Se) => {
        const Fe = {
          id: fd++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: fe,
          scrollEl: null,
          scrolling: !1
        }, Me = n.value[Se], on = Fe.column.findIndex((ln) => Me === w(ln));
        return Fe.index = on === -1 ? 0 : on, H(Fe), Fe;
      });
    }
    function P(D) {
      const K = [];
      return z(K, D), K;
    }
    function z(D, K, fe = !0, Se = 1) {
      var Fe;
      if (K.length && (e.columnsCount == null || Se <= t.value)) {
        const Me = {
          id: fd++,
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
        if (D.push(Me), fe) {
          const on = n.value[D.length - 1], ln = K.findIndex((wn) => on === w(wn));
          Me.index = ln === -1 ? 0 : ln;
        }
        H(Me), z(
          D,
          (Fe = Me.column[Me.index][k("children")]) != null ? Fe : [],
          fe,
          Se + 1
        );
      }
    }
    function O(D) {
      var K;
      o.value.splice(o.value.indexOf(D) + 1), z(
        o.value,
        (K = D.column[D.index][k("children")]) != null ? K : [],
        !1,
        o.value.length + 1
      );
    }
    function B() {
      o.value = e.cascade ? P(e.columns) : b(e.columns);
      const { indexes: D } = U();
      y(D);
    }
    function T(D, K) {
      K.scrollEl = D;
    }
    function E(D) {
      C(e["onUpdate:show"], D);
    }
    function M(D) {
      const K = i.value - D.column.length * r.value, fe = r.value + i.value;
      D.translate = Pn(D.translate, K, fe);
    }
    function R(D, K) {
      const fe = Math.round((i.value - K) / r.value);
      return eg(fe, D.column);
    }
    function W(D) {
      return D.translate = i.value - D.index * r.value, D.translate;
    }
    function U() {
      const D = [], K = [], fe = [];
      return o.value.forEach(({ column: Se, index: Fe }) => {
        const Me = Se[Fe];
        D.push(w(Me)), K.push(Fe), fe.push(Me);
      }), {
        values: D,
        indexes: K,
        options: fe
      };
    }
    function H(D, K = 0) {
      W(D), D.duration = K;
    }
    function Y(D, K, fe) {
      D.translate += Math.abs(K / fe) / 3e-3 * (K < 0 ? -1 : 1);
    }
    function j(D, K) {
      c.value || (D.index = K, H(D, dd));
    }
    function le(D, K) {
      K.touching = !0, K.translate = Bi(K.scrollEl), d(D);
    }
    function ee(D, K) {
      if (!K.touching)
        return;
      f(D), K.scrolling = !1, K.duration = 0, K.prevY = s.value, K.translate += u.value, M(K);
      const fe = performance.now();
      fe - K.momentumTime > cd && (K.momentumTime = fe, K.momentumPrevY = K.translate);
    }
    function pe(D) {
      p(), D.touching = !1, D.prevY = 0;
      const K = D.translate - D.momentumPrevY, fe = performance.now() - D.momentumTime, Se = Math.abs(K) >= R2 && fe <= cd, Fe = D.translate;
      Se && Y(D, K, fe), D.index = R(D, D.translate), H(D, Se ? L2 : dd), D.scrolling = D.translate !== Fe, D.scrolling || F(D);
    }
    function ye(D) {
      D.scrolling = !1, F(D);
    }
    function Ee() {
      const { indexes: D } = U();
      return D.every((K, fe) => K === m[fe]);
    }
    function F(D) {
      const { onChange: K, cascade: fe } = e;
      if (Ee())
        return;
      fe && O(D);
      const Se = o.value.some((wn) => wn.scrolling), Fe = o.value.some((wn) => wn.touching);
      if (Se || Fe)
        return;
      const { values: Me, indexes: on, options: ln } = U();
      y(on), C(K, Me, on, ln), n.value = Me;
    }
    function Z() {
      if (e.cascade) {
        const D = o.value.find((K) => K.scrolling);
        D && (D.index = R(D, Bi(D.scrollEl)), D.scrolling = !1, H(D), O(D));
      } else
        o.value.forEach((D) => {
          D.index = R(D, Bi(D.scrollEl)), H(D);
        });
    }
    function oe() {
      Z();
      const { values: D, indexes: K, options: fe } = U();
      y(K), C(e.onConfirm, D, K, fe);
    }
    function me() {
      Z();
      const { values: D, indexes: K, options: fe } = U();
      y(K), C(e.onCancel, D, K, fe);
    }
    return {
      optionHeight: r,
      optionCount: a,
      scrollColumns: o,
      columnHeight: l,
      center: i,
      Transition: Qe,
      pt: g,
      t: tn,
      n: A2,
      classes: V2,
      setScrollEl: T,
      getOptionKey: k,
      getValue: w,
      handlePopupUpdateShow: E,
      handleTouchstart: le,
      handleTouchmove: ee,
      handleTouchend: pe,
      handleTransitionend: ye,
      confirm: oe,
      cancel: me,
      handleClick: j
    };
  }
});
Tm.render = Y2;
var rr = Tm;
let ot;
function $t(e) {
  return new Promise((n) => {
    $t.close();
    const o = Xe(e) ? { columns: e } : e, t = _e(o);
    t.dynamic = !0, t.teleport = "body", ot = t;
    function r() {
      ot === t && (ot = null);
    }
    const { unmountInstance: a } = bt(rr, t, {
      onConfirm: (i, l, s) => {
        C(t.onConfirm, i, l, s), n({
          state: "confirm",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, r();
      },
      onCancel: (i, l, s) => {
        C(t.onCancel, i, l, s), n({
          state: "cancel",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, r();
      },
      onClose: () => {
        C(t.onClose), n({
          state: "close"
        }), r();
      },
      onClosed: () => {
        C(t.onClosed), a(), r();
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
$t.close = function() {
  if (ot == null)
    return;
  const e = ot;
  ot = null, Ue().then(() => {
    e.show = !1;
  });
};
$t.Component = rr;
te(rr);
te(rr, $t);
ae($t, Om);
const fE = rr;
var Wl = $t;
const Em = {
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
}, Zo = 100, gr = 0, io = 20, vd = 2 * Math.PI * io, { name: j2, n: W2, classes: K2 } = x("progress"), q2 = ["aria-valuenow"], X2 = ["viewBox"], G2 = { key: 0 }, Z2 = ["id"], J2 = ["offset", "stop-color"], Q2 = ["d", "stroke-width", "stroke-dasharray"], _2 = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function x2(e, n) {
  return h(), S("div", {
    class: v(e.n()),
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": e.indeterminate ? void 0 : e.mode === "linear" ? e.linearProps.value : e.circleProps.value
  }, [
    e.mode === "linear" ? (h(), S(
      "div",
      {
        key: 0,
        class: v(e.n("linear"))
      },
      [
        N(
          "div",
          {
            class: v(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
            style: X({ height: e.toSizeUnit(e.lineWidth), background: e.trackColor })
          },
          [
            e.indeterminate ? (h(), S(
              "div",
              {
                key: 0,
                class: v(e.n("linear-indeterminate"))
              },
              [
                N(
                  "div",
                  {
                    class: v(e.classes(e.n(`linear--${e.type}`))),
                    style: X({ background: e.progressColor })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                N(
                  "div",
                  {
                    class: v(e.classes(e.n(`linear--${e.type}`))),
                    style: X({ background: e.progressColor })
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
                class: v(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`))),
                style: X({ background: e.progressColor, width: e.linearProps.width })
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
            class: v(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
          },
          [
            A(e.$slots, "default", {}, () => [
              Be(
                ie(e.linearProps.roundValue),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : q("v-if", !0)
      ],
      2
      /* CLASS */
    )) : q("v-if", !0),
    e.mode === "circle" ? (h(), S(
      "div",
      {
        key: 1,
        class: v(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: X({ width: e.toSizeUnit(e.size), height: e.toSizeUnit(e.size) })
      },
      [
        (h(), S("svg", {
          class: v(e.n("circle-svg")),
          viewBox: e.circleProps.viewBox
        }, [
          e.isPlainObject(e.color) ? (h(), S("defs", G2, [
            N("linearGradient", {
              id: e.id,
              x1: "100%",
              y1: "0%",
              x2: "0%",
              y2: "0%"
            }, [
              (h(!0), S(
                Ne,
                null,
                Ke(e.linearGradientProgress, (o, t) => (h(), S("stop", {
                  key: t,
                  offset: o,
                  "stop-color": e.color[o]
                }, null, 8, J2))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, Z2)
          ])) : q("v-if", !0),
          e.track ? (h(), S("path", {
            key: 1,
            class: v(e.n("circle-background")),
            d: e.circleProps.path,
            fill: "transparent",
            "stroke-width": e.circleProps.strokeWidth,
            "stroke-dasharray": e.CIRCUMFERENCE,
            style: X({
              stroke: e.trackColor
            })
          }, null, 14, Q2)) : q("v-if", !0),
          N("path", {
            class: v(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
            d: e.circleProps.path,
            fill: "transparent",
            "stroke-width": e.circleProps.strokeWidth,
            "stroke-dasharray": e.CIRCUMFERENCE,
            "stroke-dashoffset": e.circleProps.strokeOffset,
            style: X({
              stroke: e.progressColor,
              transform: `rotateZ(${e.rotate}deg)`,
              transformOrigin: "50% 50%"
            })
          }, null, 14, _2)
        ], 10, X2)),
        e.label ? (h(), S(
          "div",
          {
            key: 0,
            class: v(e.classes(e.n("circle-label"), e.labelClass))
          },
          [
            A(e.$slots, "default", {}, () => [
              Be(
                ie(e.circleProps.roundValue),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : q("v-if", !0)
      ],
      6
      /* CLASS, STYLE */
    )) : q("v-if", !0)
  ], 10, q2);
}
const Im = _({
  name: j2,
  props: Em,
  setup(e) {
    const n = Gd(), o = I(() => {
      const i = L(e.value), l = Pn(i, gr, Zo), s = Pn(Math.round(i), gr, Zo);
      return {
        width: `${l}%`,
        roundValue: `${s}%`,
        value: l
      };
    }), t = I(() => {
      const { size: i, lineWidth: l, value: s } = e, u = io / (1 - xe(l) / xe(i)) * 2, c = `0 0 ${u} ${u}`, d = Pn(Math.round(L(s)), gr, Zo), f = `${(Zo - d) / Zo * vd}`, p = xe(l) / xe(i) * u, g = 0, m = -io, k = 0, w = -2 * io, y = `M ${u / 2} ${u / 2} m ${g} ${m} a ${io} ${io} 
        0 1 1 ${k} ${-w} a ${io} ${io} 0 1 1 ${-k} ${w}`;
      return {
        strokeWidth: p,
        viewBox: c,
        strokeOffset: f,
        roundValue: `${d}%`,
        path: y,
        value: Pn(L(s), gr, Zo)
      };
    }), r = I(() => zo(e.color) ? `url(#${n.value})` : e.color), a = I(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: o,
      CIRCUMFERENCE: vd,
      RADIUS: io,
      circleProps: t,
      progressColor: r,
      linearGradientProgress: a,
      n: W2,
      classes: K2,
      toSizeUnit: ze,
      isPlainObject: zo
    };
  }
});
Im.render = x2;
var ai = Im;
te(ai);
ae(ai, Em);
const vE = ai;
var Kl = ai;
const Bm = {
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
  onRefresh: V(),
  "onUpdate:modelValue": V()
};
var pd = (e, n, o) => new Promise((t, r) => {
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
const { name: e4, n: md, classes: n4 } = x("pull-refresh"), hd = 150;
function o4(e, n) {
  const o = Q("var-icon");
  return h(), S(
    "div",
    {
      ref: "freshNode",
      class: v(e.n()),
      onTouchstart: n[0] || (n[0] = (...t) => e.handleTouchstart && e.handleTouchstart(...t)),
      onTouchend: n[1] || (n[1] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
      onTouchcancel: n[2] || (n[2] = (...t) => e.handleTouchend && e.handleTouchend(...t))
    },
    [
      N(
        "div",
        {
          ref: "controlNode",
          class: v(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
          style: X(e.controlStyle)
        },
        [
          G(o, {
            name: e.iconName,
            transition: e.ICON_TRANSITION,
            class: v(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
            "var-pull-refresh-cover": ""
          }, null, 8, ["name", "transition", "class"])
        ],
        6
        /* CLASS, STYLE */
      ),
      A(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Dm = _({
  name: e4,
  components: { VarIcon: Ze },
  props: Bm,
  setup(e) {
    const n = $(0), o = $(null), t = $(null), r = $(0), a = $("-125%"), i = $("arrow-down"), l = $("default"), s = $(!1), u = I(() => Math.abs(2 * n.value)), c = I(() => l.value === "success"), d = I(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = I(() => ({
      transform: `translate3d(0px, ${mn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: c.value ? e.successBgColor : e.bgColor,
      color: c.value ? e.successColor : e.color
    })), { startTouch: p, moveTouch: g, endTouch: m, isReachTop: k } = gt();
    let w, y;
    de(
      () => e.modelValue,
      (M) => {
        M === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, E();
        }, L(e.successDuration)));
      }
    ), hn(T), je(o, "touchmove", O);
    function b(M) {
      return pd(this, null, function* () {
        if (i.value !== M)
          return i.value = M, new Promise((R) => {
            window.setTimeout(R, hd);
          });
      });
    }
    function P(M) {
      ("classList" in w ? w : document.body).classList[M](`${md()}--lock`);
    }
    function z(M) {
      if (p(M), n.value === 0) {
        const { width: R } = an(t.value);
        n.value = -(R + R * 0.25);
      }
      y = To(M.target);
    }
    function O(M) {
      if (g(M), !d.value || !y || y !== w && Ho(y) > 0 || Ho(w) > 0)
        return;
      k(w) && Ve(M), l.value !== "pulling" && (l.value = "pulling", r.value = M.touches[0].clientY), k(w) && En(a.value) && a.value > n.value && P("add");
      const W = (M.touches[0].clientY - r.value) / 2 + n.value;
      a.value = W >= u.value ? u.value : W, b(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function B() {
      return pd(this, null, function* () {
        m(), d.value && (s.value = !0, L(a.value) >= u.value * 0.2 ? (yield b("refresh"), l.value = "loading", a.value = u.value * 0.3, C(e["onUpdate:modelValue"], !0), Ue(() => {
          C(e.onRefresh);
        }), P("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, P("remove");
        }, L(e.animationDuration))), y = null);
      });
    }
    function T() {
      w = e.target ? tf(e.target, "PullRefresh") : To(o.value);
    }
    function E() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, L(e.animationDuration));
    }
    return {
      ICON_TRANSITION: hd,
      refreshStatus: l,
      freshNode: o,
      controlNode: t,
      iconName: i,
      controlStyle: f,
      isSuccess: c,
      n: md,
      classes: n4,
      handleTouchstart: z,
      handleTouchmove: O,
      handleTouchend: B
    };
  }
});
Dm.render = o4;
var ii = Dm;
te(ii);
ae(ii, Bm);
const pE = ii;
var ql = ii;
const Mm = {
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
  onClick: V(),
  onChange: V(),
  "onUpdate:modelValue": V()
}, Nm = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function t4() {
  const { bindChildren: e, childProviders: n, length: o } = bn(
    Nm
  );
  return {
    length: o,
    radios: n,
    bindRadios: e
  };
}
function r4() {
  const { bindParent: e, parentProvider: n, index: o } = gn(Nm);
  return {
    index: o,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: a4, n: i4, classes: l4 } = x("radio"), s4 = ["tabindex"];
function u4(e, n) {
  const o = Q("var-icon"), t = Q("var-hover-overlay"), r = Q("var-form-details"), a = Ye("ripple"), i = Ye("hover");
  return h(), S(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      N(
        "div",
        He({
          class: e.n(),
          onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
        }, e.$attrs),
        [
          Ae((h(), S("div", {
            ref: "action",
            class: v(
              e.classes(
                e.n("action"),
                [e.checked, e.n("--checked"), e.n("--unchecked")],
                [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")],
                [e.formDisabled || e.disabled, e.n("--disabled")]
              )
            ),
            tabindex: e.formDisabled || e.disabled ? void 0 : "0",
            style: X({ color: e.checked ? e.checkedColor : e.uncheckedColor }),
            onFocus: n[0] || (n[0] = (l) => e.isFocusing = !0),
            onBlur: n[1] || (n[1] = (l) => e.isFocusing = !1)
          }, [
            e.checked ? A(e.$slots, "checked-icon", { key: 0 }, () => [
              G(o, {
                class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                "var-radio-cover": "",
                name: "radio-marked",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]) : A(e.$slots, "unchecked-icon", { key: 1 }, () => [
              G(o, {
                class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                "var-radio-cover": "",
                name: "radio-blank",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]),
            G(t, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ], 46, s4)), [
            [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
            [i, e.handleHovering, "desktop"]
          ]),
          e.$slots.default ? (h(), S(
            "div",
            {
              key: 0,
              class: v(
                e.classes(
                  e.n("text"),
                  [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              ),
              onClick: n[2] || (n[2] = (...l) => e.handleTextClick && e.handleTextClick(...l))
            },
            [
              A(e.$slots, "default", { checked: e.checked })
            ],
            2
            /* CLASS */
          )) : q("v-if", !0)
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
const Am = _({
  name: a4,
  directives: { Ripple: nn, Hover: In },
  components: {
    VarIcon: Ze,
    VarFormDetails: zn,
    VarHoverOverlay: Rn
  },
  inheritAttrs: !1,
  props: Mm,
  setup(e) {
    const n = $(), o = $(!1), t = Kn(e, "modelValue"), r = I(() => t.value === e.checkedValue), a = $(!1), { radioGroup: i, bindRadioGroup: l } = r4(), { hovering: s, handleHovering: u } = _n(), { form: c, bindForm: d } = Fn(), {
      errorMessage: f,
      validateWithTrigger: p,
      validate: g,
      // expose
      resetValidation: m
    } = Ln(), k = {
      sync: B,
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
    C(l, k), C(d, k), je(() => window, "keydown", w), je(() => window, "keyup", y);
    function w(R) {
      if (!o.value)
        return;
      const { key: W } = R;
      (W === "Enter" || W === " ") && Ve(R), W === "Enter" && n.value.click();
    }
    function y(R) {
      o.value && R.key === " " && (Ve(R), n.value.click());
    }
    function b(R) {
      Ue(() => {
        const { validateTrigger: W, rules: U, modelValue: H } = e;
        p(W, R, U, H);
      });
    }
    function P(R) {
      const { checkedValue: W, onChange: U } = e;
      i && t.value === W || (t.value = R, C(U, t.value), i == null || i.onToggle(W), b("onChange"));
    }
    function z(R) {
      const { disabled: W, readonly: U, uncheckedValue: H, checkedValue: Y, onClick: j } = e;
      c != null && c.disabled.value || W || (C(j, R), !(c != null && c.readonly.value || U) && (a.value = !0, P(r.value ? H : Y)));
    }
    function O() {
      n.value.focus();
    }
    function B(R) {
      const { checkedValue: W, uncheckedValue: U } = e;
      t.value = R === W ? W : U;
    }
    function T() {
      t.value = e.uncheckedValue, m();
    }
    function E() {
      return g(e.rules, e.modelValue);
    }
    function M(R) {
      const { uncheckedValue: W, checkedValue: U } = e;
      ![W, U].includes(R) && (R = r.value ? W : U), P(R);
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
      n: i4,
      classes: l4,
      handleClick: z,
      handleTextClick: O,
      toggle: M,
      reset: T,
      validate: E,
      resetValidation: m
    };
  }
});
Am.render = u4;
var li = Am;
te(li);
ae(li, Mm);
const mE = li;
var Yr = li;
const Vm = {
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
  onChange: V(),
  "onUpdate:modelValue": V()
}, { name: c4, n: d4, classes: f4 } = x("radio-group");
function v4(e, n) {
  const o = Q("maybe-v-node"), t = Q("var-radio"), r = Q("var-form-details");
  return h(), S(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      N(
        "div",
        {
          class: v(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          e.options.length ? (h(!0), S(
            Ne,
            { key: 0 },
            Ke(e.options, (a) => (h(), Ce(t, {
              key: a[e.valueKey],
              "checked-value": a[e.valueKey],
              disabled: a.disabled
            }, {
              default: ce(({ checked: i }) => [
                G(o, {
                  is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey]
                }, null, 8, ["is"])
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["checked-value", "disabled"]))),
            128
            /* KEYED_FRAGMENT */
          )) : q("v-if", !0),
          A(e.$slots, "default")
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
const Rm = _({
  name: c4,
  components: { VarFormDetails: zn, VarRadio: Yr, MaybeVNode: Qt },
  props: Vm,
  setup(e) {
    const { length: n, radios: o, bindRadios: t } = t4(), { bindForm: r } = Fn(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = Ln(), u = I(() => a.value), c = {
      onToggle: m,
      validate: k,
      reset: w,
      resetValidation: s,
      errorMessage: u
    };
    de(() => e.modelValue, g), de(() => n.value, g), C(r, c), t(c), je(() => window, "keydown", d);
    function d(y) {
      const b = o.findIndex(({ isFocusing: z }) => z.value);
      if (!(b === -1 || !o.some(({ moveable: z }, O) => O === b ? !1 : z()))) {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(y.key) && Ve(y), y.key === "ArrowUp" || y.key === "ArrowLeft") {
          f(b, "prev");
          return;
        }
        (y.key === "ArrowDown" || y.key === "ArrowRight") && f(b, "next");
      }
    }
    function f(y, b) {
      for (; ; ) {
        b === "prev" ? y-- : y++, y < 0 && (y = o.length - 1), y > o.length - 1 && (y = 0);
        const P = o[y];
        if (P.moveable()) {
          P.move();
          break;
        }
      }
    }
    function p(y) {
      Ue(() => {
        const { validateTrigger: b, rules: P, modelValue: z } = e;
        i(b, y, P, z);
      });
    }
    function g() {
      return o.forEach(({ sync: y }) => y(e.modelValue));
    }
    function m(y) {
      C(e["onUpdate:modelValue"], y), C(e.onChange, y), p("onChange");
    }
    function k() {
      return l(e.rules, e.modelValue);
    }
    function w() {
      C(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: d4,
      classes: f4,
      reset: w,
      validate: k,
      resetValidation: s,
      isFunction: Dn
    };
  }
});
Rm.render = v4;
var si = Rm;
te(si);
ae(si, Vm);
const hE = si;
var Xl = si;
const Lm = {
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
  onChange: V(),
  "onUpdate:modelValue": V()
}, { name: p4, n: St } = x("rate"), m4 = ["onClick"];
function h4(e, n) {
  const o = Q("var-icon"), t = Q("var-hover-overlay"), r = Q("var-form-details"), a = Ye("ripple"), i = Ye("hover");
  return h(), S(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      N(
        "div",
        {
          class: v(e.n())
        },
        [
          (h(!0), S(
            Ne,
            null,
            Ke(e.toNumber(e.count), (l) => Ae((h(), S("div", {
              key: l,
              style: X(e.getStyle(l)),
              class: v(e.getClass(l)),
              onClick: (s) => e.handleClick(l, s)
            }, [
              G(o, {
                class: v(e.n("content-icon")),
                "var-rate-cover": "",
                transition: 0,
                namespace: e.getCurrentState(l).namespace,
                name: e.getCurrentState(l).name,
                style: X({ fontSize: e.toSizeUnit(e.size) })
              }, null, 8, ["class", "namespace", "name", "style"]),
              G(t, {
                hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
              }, null, 8, ["hovering"])
            ], 14, m4)), [
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
const Fm = _({
  name: p4,
  components: {
    VarIcon: Ze,
    VarFormDetails: zn,
    VarHoverOverlay: Rn
  },
  directives: { Ripple: nn, Hover: In },
  props: Lm,
  setup(e) {
    const n = $(-1), { form: o, bindForm: t } = Fn(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = Ln(), { hovering: s } = _n();
    let u = L(e.modelValue);
    C(t, {
      reset: b,
      validate: m,
      resetValidation: l
    });
    function d(P) {
      const { count: z, gap: O } = e;
      return {
        color: p(P).color,
        marginRight: P !== L(z) ? ze(O) : 0
      };
    }
    function f(P) {
      const { name: z, color: O } = p(P);
      return {
        [St("content")]: !0,
        [St("--disabled")]: (o == null ? void 0 : o.disabled.value) || e.disabled,
        [St("--error")]: r.value,
        [St("--primary")]: z !== e.emptyIcon && !O
      };
    }
    function p(P) {
      const {
        modelValue: z,
        disabled: O,
        disabledColor: B,
        color: T,
        half: E,
        emptyColor: M,
        icon: R,
        halfIcon: W,
        emptyIcon: U,
        namespace: H,
        halfIconNamespace: Y,
        emptyIconNamespace: j
      } = e;
      let le = T;
      return (O || o != null && o.disabled.value) && (le = B), P <= z ? { color: le, name: R, namespace: H } : E && P <= z + 0.5 ? { color: le, name: W, namespace: Y } : {
        color: O || o != null && o.disabled.value ? B : M,
        name: U,
        namespace: j
      };
    }
    function g(P, z) {
      const { half: O, clearable: B } = e, { offsetWidth: T } = z.target;
      O && z.offsetX <= Math.floor(T / 2) && (P -= 0.5), u === P && B && (P = 0), u !== P && (C(e["onUpdate:modelValue"], P), C(e.onChange, P)), u = P;
    }
    function m() {
      return i(e.rules, e.modelValue);
    }
    function k() {
      return Ue(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function w(P, z) {
      const { readonly: O, disabled: B } = e;
      O || B || o != null && o.disabled.value || o != null && o.readonly.value || (g(P, z), k());
    }
    function y(P) {
      return (z) => {
        n.value = P, s.value = z;
      };
    }
    function b() {
      C(e["onUpdate:modelValue"], 0), l();
    }
    return {
      errorMessage: r,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      hovering: s,
      currentHoveringValue: n,
      getStyle: d,
      getClass: f,
      getCurrentState: p,
      handleClick: w,
      createHoverHandler: y,
      reset: b,
      validate: m,
      resetValidation: l,
      toSizeUnit: ze,
      toNumber: L,
      n: St
    };
  }
});
Fm.render = h4;
var ui = Fm;
te(ui);
ae(ui, Lm);
const gE = ui;
var Gl = ui;
const g4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
};
function b4(e, n) {
  return h(), S("svg", g4, n[0] || (n[0] = [
    N(
      "path",
      { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Hm = _({});
Hm.render = b4;
var y4 = Hm;
const k4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
};
function $4(e, n) {
  return h(), S("svg", k4, n[0] || (n[0] = [
    N(
      "path",
      { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Um = _({});
Um.render = $4;
var w4 = Um;
const C4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
};
function S4(e, n) {
  return h(), S("svg", C4, n[0] || (n[0] = [
    N(
      "path",
      { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Ym = _({});
Ym.render = S4;
var P4 = Ym;
const { n: z4, classes: O4 } = x("result");
function T4(e, n) {
  return h(), S(
    Ne,
    null,
    [
      N(
        "span",
        {
          class: v(e.n("success-cover-left"))
        },
        null,
        2
        /* CLASS */
      ),
      N(
        "span",
        {
          class: v(e.classes(e.n("success-line"), e.n("success-line-tip"))),
          style: X({
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
          class: v(e.classes(e.n("success-line"), e.n("success-line-long"))),
          style: X({
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
          class: v(e.n("success-circle")),
          style: X({ left: `-${e.borderSize}`, top: `-${e.borderSize}`, borderWidth: e.borderSize })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      N(
        "span",
        {
          class: v(e.n("success-line-fix"))
        },
        null,
        2
        /* CLASS */
      ),
      N(
        "span",
        {
          class: v(e.n("success-cover-right")),
          style: X({
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
const jm = _({
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
      n: z4,
      classes: O4
    };
  }
});
jm.render = T4;
var E4 = jm;
const I4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
};
function B4(e, n) {
  return h(), S("svg", I4, n[0] || (n[0] = [
    N(
      "path",
      { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Wm = _({});
Wm.render = B4;
var D4 = Wm;
const M4 = { viewBox: "-4 -4 32 32" };
function N4(e, n) {
  return h(), S("svg", M4, n[0] || (n[0] = [
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
const Km = _({});
Km.render = N4;
var A4 = Km;
const qm = {
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
}, { name: V4, n: R4, classes: L4 } = x("result");
function F4(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      A(e.$slots, "image", {}, () => [
        e.type ? (h(), S(
          "div",
          {
            key: 0,
            class: v(e.n("image-container"))
          },
          [
            N(
              "div",
              {
                class: v(e.classes(e.n("image"), e.n(e.type))),
                style: X({
                  width: e.circleSize,
                  height: e.circleSize,
                  borderWidth: e.borderSize
                })
              },
              [
                (h(), Ce(ht(e.type), {
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
        )) : q("v-if", !0)
      ]),
      A(e.$slots, "title", {}, () => [
        e.title ? (h(), S(
          "div",
          {
            key: 0,
            class: v(e.n("title"))
          },
          ie(e.title),
          3
          /* TEXT, CLASS */
        )) : q("v-if", !0)
      ]),
      A(e.$slots, "description", {}, () => [
        e.description ? (h(), S(
          "div",
          {
            key: 0,
            class: v(e.n("description"))
          },
          ie(e.description),
          3
          /* TEXT, CLASS */
        )) : q("v-if", !0)
      ]),
      e.$slots.footer ? (h(), S(
        "div",
        {
          key: 0,
          class: v(e.n("footer"))
        },
        [
          A(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Xm = _({
  name: V4,
  components: {
    Info: y4,
    Success: E4,
    Warning: P4,
    Error: w4,
    Question: D4,
    Empty: A4
  },
  props: qm,
  setup(e) {
    const n = I(
      () => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.9)`
    ), o = I(
      () => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.05)`
    );
    return {
      circleSize: n,
      borderSize: o,
      n: R4,
      classes: L4
    };
  }
});
Xm.render = F4;
var ci = Xm;
te(ci);
ae(ci, qm);
const bE = ci;
var Zl = ci;
const Gm = {
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
  onClick: V()
}, { name: H4, n: U4, classes: Y4 } = x("row");
function j4(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      style: X({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: `${-e.average[0]}px ${-e.average[1]}px`
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      A(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Zm = _({
  name: H4,
  props: Gm,
  setup(e) {
    const n = I(
      () => Xe(e.gutter) ? e.gutter.map((r) => xe(r) / 2) : [0, xe(e.gutter) / 2]
    ), { bindCols: o } = O$();
    o({ average: n });
    function t(r) {
      C(e.onClick, r);
    }
    return {
      average: n,
      n: U4,
      classes: Y4,
      handleClick: t,
      padStartFlex: Ir
    };
  }
});
Zm.render = j4;
var di = Zm;
te(di);
ae(di, Gm);
const yE = di;
var Jl = di, W4 = Object.defineProperty, gd = Object.getOwnPropertySymbols, K4 = Object.prototype.hasOwnProperty, q4 = Object.prototype.propertyIsEnumerable, bd = (e, n, o) => n in e ? W4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, X4 = (e, n) => {
  for (var o in n || (n = {}))
    K4.call(n, o) && bd(e, o, n[o]);
  if (gd)
    for (var o of gd(n))
      q4.call(n, o) && bd(e, o, n[o]);
  return e;
};
const Jm = X4({
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
  onFocus: V(),
  onBlur: V(),
  onClose: V(),
  onChange: V(),
  onClear: V(),
  "onUpdate:modelValue": V()
}, De(Qr, [
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
])), { name: G4, n: Z4, classes: J4 } = x("select"), Q4 = ["tabindex"];
function _4(e, n) {
  const o = Q("maybe-v-node"), t = Q("var-chip"), r = Q("var-icon"), a = Q("var-field-decorator"), i = Q("var-option"), l = Q("var-menu"), s = Q("var-form-details");
  return h(), S("div", {
    ref: "root",
    class: v(e.n()),
    tabindex: e.disabled || e.formDisabled ? void 0 : "0",
    onFocus: n[3] || (n[3] = (...u) => e.handleFocus && e.handleFocus(...u)),
    onBlur: n[4] || (n[4] = (...u) => e.handleRootBlur && e.handleRootBlur(...u))
  }, [
    G(l, {
      "var-select-cover": "",
      "same-width": "",
      "close-on-click-reference": "",
      "close-on-key-escape": !1,
      class: v(e.n("menu")),
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
            class: v(e.classes(e.n("scroller"), e.n("$-elevation--3")))
          },
          [
            e.options.length ? (h(!0), S(
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
            )) : q("v-if", !0),
            A(e.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ]),
      default: ce(() => [
        G(
          a,
          wo(Zt({
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
          tt({
            "clear-icon": ce(({ clear: u }) => [
              A(e.$slots, "clear-icon", { clear: u })
            ]),
            "append-icon": ce(() => [
              A(e.$slots, "append-icon")
            ]),
            default: ce(() => [
              N(
                "div",
                {
                  class: v(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                  style: X({
                    textAlign: e.textAlign,
                    color: e.textColor
                  })
                },
                [
                  N(
                    "div",
                    {
                      class: v(e.n("label"))
                    },
                    [
                      e.isEmptyModelValue ? q("v-if", !0) : A(e.$slots, "selected", { key: 0 }, () => [
                        e.multiple ? (h(), S(
                          Ne,
                          { key: 0 },
                          [
                            e.chip ? (h(), S(
                              "div",
                              {
                                key: 0,
                                class: v(e.n("chips"))
                              },
                              [
                                (h(!0), S(
                                  Ne,
                                  null,
                                  Ke(e.labels, (u) => (h(), Ce(t, {
                                    class: v(e.n("chip")),
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
                                class: v(e.n("values"))
                              },
                              [
                                (h(!0), S(
                                  Ne,
                                  null,
                                  Ke(e.labels, (u, c) => (h(), S(
                                    Ne,
                                    { key: u },
                                    [
                                      G(o, { is: u }, null, 8, ["is"]),
                                      Be(
                                        ie(c !== e.labels.length - 1 ? e.separator : ""),
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
                  e.enableCustomPlaceholder ? (h(), S(
                    "span",
                    {
                      key: 0,
                      class: v(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                      style: X({
                        color: e.placeholderColor
                      })
                    },
                    ie(e.placeholder),
                    7
                    /* TEXT, CLASS, STYLE */
                  )) : q("v-if", !0),
                  A(e.$slots, "arrow-icon", {
                    focus: e.isFocusing,
                    menuOpen: e.showMenu
                  }, () => [
                    G(r, {
                      class: v(e.classes(e.n("arrow"), [e.showMenu, e.n("--arrow-rotate")])),
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
                A(e.$slots, "prepend-icon")
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
      onClick: n[2] || (n[2] = Wn(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])
  ], 42, Q4);
}
const Qm = _({
  name: G4,
  components: {
    VarIcon: Ze,
    VarMenu: Rt,
    VarChip: Mr,
    VarOption: Ur,
    VarFieldDecorator: Mt,
    VarFormDetails: zn,
    MaybeVNode: Qt
  },
  props: Jm,
  setup(e) {
    const n = $(!1), o = $(!1), t = $(null), r = I(() => e.multiple), a = I(() => e.focusColor), i = I(() => Zn(e.modelValue)), l = I(() => e.disabled || e.readonly ? "" : "pointer"), s = $(0), { bindForm: u, form: c } = Fn(), { length: d, options: f, bindOptions: p } = v2(), { label: g, labels: m, computeLabel: k, getSelectedValue: w } = xf({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => f,
      optionProvidersLength: () => d.value
    }), {
      errorMessage: y,
      validateWithTrigger: b,
      validate: P,
      // expose
      resetValidation: z
    } = Ln(), O = $(null), B = I(() => e.variant === "outlined" ? "bottom" : "cover-top"), T = I(() => {
      const { hint: D, blurColor: K, focusColor: fe } = e;
      if (!D)
        return y.value ? "var(--field-decorator-error-color)" : n.value ? fe || "var(--field-decorator-focus-color)" : K || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), E = I(() => !e.hint && Zn(e.modelValue)), M = {
      multiple: r,
      focusColor: a,
      computeLabel: k,
      onSelect: ee,
      reset: me,
      validate: oe,
      resetValidation: z
    };
    de(
      () => e.multiple,
      () => {
        const { multiple: D, modelValue: K } = e;
        D && !Xe(K) && Vn("Select", "The modelValue must be an array when multiple is true");
      }
    ), p(M), je(() => window, "keydown", R), je(() => window, "keyup", W), C(u, M);
    function R(D) {
      const { disabled: K, readonly: fe } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || fe || !n.value)
        return;
      const { key: Se } = D;
      if (Se === " " && !o.value) {
        Ve(D);
        return;
      }
      if (Se === "Escape" && o.value) {
        t.value.focus(), Ve(D), o.value = !1;
        return;
      }
      if (Se === "Tab" && o.value) {
        t.value.focus(), Ve(D), Y();
        return;
      }
      if (Se === "Enter" && !o.value) {
        Ve(D), o.value = !0;
        return;
      }
      (Se === "ArrowDown" || Se === "ArrowUp") && o.value && (Ve(D), af(t.value, O.value, Se));
    }
    function W(D) {
      const { disabled: K, readonly: fe } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || fe || o.value || !n.value)
        return;
      const { key: Se } = D;
      Se === " " && !o.value && (Ve(D), o.value = !0);
    }
    function U(D) {
      Ue(() => {
        const { validateTrigger: K, rules: fe, modelValue: Se } = e;
        b(K, D, fe, Se);
      });
    }
    function H() {
      const { disabled: D, readonly: K, onFocus: fe } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || D || K || (s.value = xe(e.offsetY), F(), C(fe), U("onFocus"));
    }
    function Y() {
      const { disabled: D, readonly: K, onBlur: fe } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || D || K || (Z(), C(fe), U("onBlur"));
    }
    function j() {
      o.value || Y();
    }
    function le() {
      n.value && Y();
    }
    function ee(D) {
      const { disabled: K, readonly: fe, multiple: Se, onChange: Fe } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || fe)
        return;
      const Me = w(D);
      C(e["onUpdate:modelValue"], Me), C(Fe, Me), U("onChange"), Se || (t.value.focus(), kn().then(() => {
        o.value = !1;
      }));
    }
    function pe() {
      const { disabled: D, readonly: K, multiple: fe, clearable: Se, onClear: Fe } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || D || K || !Se)
        return;
      const Me = fe ? [] : void 0;
      C(e["onUpdate:modelValue"], Me), C(Fe, Me), U("onClear");
    }
    function ye(D) {
      const { disabled: K, onClick: fe } = e;
      c != null && c.disabled.value || K || (C(fe, D), U("onClick"));
    }
    function Ee(D) {
      const { disabled: K, readonly: fe, modelValue: Se, onClose: Fe } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || fe)
        return;
      const Me = f.find(({ label: ln }) => ln.value === D), on = Se.filter(
        (ln) => {
          var wn;
          return ln !== ((wn = Me.value.value) != null ? wn : Me.label.value);
        }
      );
      C(e["onUpdate:modelValue"], on), C(Fe, on), U("onClose");
    }
    function F() {
      s.value = xe(e.offsetY), n.value = !0;
    }
    function Z() {
      n.value = !1, o.value = !1;
    }
    function oe() {
      return P(e.rules, e.modelValue);
    }
    function me() {
      C(e["onUpdate:modelValue"], e.multiple ? [] : void 0), z();
    }
    return {
      root: t,
      offsetY: s,
      isFocusing: n,
      showMenu: o,
      errorMessage: y,
      formDisabled: c == null ? void 0 : c.disabled,
      formReadonly: c == null ? void 0 : c.readonly,
      label: g,
      labels: m,
      isEmptyModelValue: i,
      menuEl: O,
      placement: B,
      cursor: l,
      placeholderColor: T,
      enableCustomPlaceholder: E,
      isFunction: Dn,
      n: Z4,
      classes: J4,
      handleFocus: H,
      handleBlur: Y,
      handleClickOutside: le,
      handleClear: pe,
      handleClick: ye,
      handleClose: Ee,
      handleRootBlur: j,
      reset: me,
      validate: oe,
      resetValidation: z,
      focus: F,
      blur: Z
    };
  }
});
Qm.render = _4;
var fi = Qm;
te(fi);
ae(fi, Jm);
const kE = fi;
var Ql = fi;
const _m = {
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
}, { name: x4, n: eP, classes: nP } = x("skeleton");
function oP(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? q("v-if", !0) : (h(), S(
        "div",
        {
          key: 0,
          class: v(e.n("data"))
        },
        [
          A(e.$slots, "default")
        ],
        2
        /* CLASS */
      )),
      e.loading && !e.fullscreen ? (h(), S(
        "div",
        {
          key: 1,
          class: v(e.n("content"))
        },
        [
          e.card ? (h(), S(
            "div",
            {
              key: 0,
              class: v(e.n("card")),
              style: X({ height: e.toSizeUnit(e.cardHeight) })
            },
            [
              N(
                "div",
                {
                  class: v(e.n("--animation"))
                },
                null,
                2
                /* CLASS */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : q("v-if", !0),
          e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), S(
            "div",
            {
              key: 1,
              class: v(e.n("article"))
            },
            [
              e.avatar ? (h(), S(
                "div",
                {
                  key: 0,
                  class: v(e.n("avatar")),
                  style: X({
                    width: e.toSizeUnit(e.avatarSize),
                    height: e.toSizeUnit(e.avatarSize)
                  })
                },
                [
                  N(
                    "div",
                    {
                      class: v(e.n("--animation"))
                    },
                    null,
                    2
                    /* CLASS */
                  )
                ],
                6
                /* CLASS, STYLE */
              )) : q("v-if", !0),
              e.title || e.toNumber(e.rows) > 0 ? (h(), S(
                "div",
                {
                  key: 1,
                  class: v(e.n("section"))
                },
                [
                  e.title ? (h(), S(
                    "div",
                    {
                      key: 0,
                      class: v(e.n("title")),
                      style: X({ width: e.toSizeUnit(e.titleWidth) })
                    },
                    [
                      N(
                        "div",
                        {
                          class: v(e.n("--animation"))
                        },
                        null,
                        2
                        /* CLASS */
                      )
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : q("v-if", !0),
                  (h(!0), S(
                    Ne,
                    null,
                    Ke(e.toNumber(e.rows), (o, t) => (h(), S(
                      "div",
                      {
                        class: v(e.n("row")),
                        key: o,
                        style: X({ width: e.toSizeUnit(e.rowsWidth[t]) })
                      },
                      [
                        N(
                          "div",
                          {
                            class: v(e.n("--animation"))
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
              )) : q("v-if", !0)
            ],
            2
            /* CLASS */
          )) : q("v-if", !0)
        ],
        2
        /* CLASS */
      )) : q("v-if", !0),
      e.loading && e.fullscreen ? (h(), S(
        "div",
        {
          key: 2,
          class: v(e.n("fullscreen")),
          style: X({ zIndex: e.toNumber(e.fullscreenZIndex) })
        },
        [
          N(
            "div",
            {
              class: v(e.n("--animation"))
            },
            null,
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const xm = _({
  name: x4,
  props: _m,
  setup: () => ({
    n: eP,
    classes: nP,
    toSizeUnit: ze,
    toNumber: L
  })
});
xm.render = oP;
var vi = xm;
te(vi);
ae(vi, _m);
const $E = vi;
var _l = vi, sn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(sn || {});
const eh = {
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
  onChange: V(),
  onStart: V(),
  onEnd: V(),
  "onUpdate:modelValue": V()
}, { name: tP, n: yd, classes: rP } = x("slider"), aP = ["tabindex", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-disabled", "aria-valuetext", "onTouchstart", "onFocusin", "onFocusout"];
function iP(e, n) {
  const o = Q("var-hover-overlay"), t = Q("var-form-details"), r = Ye("hover");
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [
      N(
        "div",
        {
          class: v(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
          ref: "sliderEl",
          onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
        },
        [
          N(
            "div",
            {
              class: v(e.n(`${e.direction}-track`))
            },
            [
              N(
                "div",
                {
                  class: v(e.n(`${e.direction}-track-background`)),
                  style: X({
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
                  class: v(e.n(`${e.direction}-track-fill`)),
                  style: X(e.getFillStyle)
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
            Ne,
            null,
            Ke(e.thumbList, (a) => (h(), S("div", {
              class: v(e.n(`${e.direction}-thumb`)),
              key: a.enumValue,
              style: X(e.thumbStyle(a)),
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
              A(e.$slots, "button", {
                currentValue: a.text
              }, () => [
                Ae(N(
                  "div",
                  {
                    class: v(e.n(`${e.direction}-thumb-block`)),
                    style: X({
                      background: e.thumbColor
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ), [
                  [r, (i) => e.hover(i, a), "desktop"]
                ]),
                N(
                  "div",
                  {
                    class: v(
                      e.classes(e.n(`${e.direction}-thumb-ripple`), [
                        e.thumbsProps[a.enumValue].active,
                        e.n(`${e.direction}-thumb-ripple--active`)
                      ])
                    ),
                    style: X({
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
                N(
                  "div",
                  {
                    class: v(
                      e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])
                    ),
                    style: X({
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
                      ie(a.text),
                      1
                      /* TEXT */
                    )
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ])
            ], 46, aP))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      G(t, {
        "error-message": e.errorMessage,
        class: v(e.n("form")),
        "var-slider-cover": ""
      }, null, 8, ["error-message", "class"])
    ],
    2
    /* CLASS */
  );
}
const nh = _({
  name: tP,
  components: {
    VarFormDetails: zn,
    VarHoverOverlay: Rn
  },
  directives: { Hover: In },
  props: eh,
  setup(e) {
    const n = $(0), o = $(null), t = $(!1), r = I(() => L(e.max) - L(e.min)), a = I(() => n.value / r.value * L(e.step)), i = I(() => e.disabled || (f == null ? void 0 : f.disabled.value)), l = I(() => e.readonly || (f == null ? void 0 : f.readonly.value)), s = I(() => e.direction === "vertical"), u = $(!1), c = $(!1), { bindForm: d, form: f } = Fn(), { errorMessage: p, validateWithTrigger: g, validate: m, resetValidation: k } = Ln(), { hovering: w, handleHovering: y } = _n(), { hovering: b, handleHovering: P } = _n(), z = I(() => {
      const { modelValue: ne, range: ue } = e;
      let ke = [];
      return ue && Xe(ne) ? ke = [
        {
          value: le(ne[0]),
          enumValue: sn.First,
          text: ee(ne[0]),
          hovering: w.value,
          focusing: u.value,
          handleHovering: y,
          handleFocusing(Ie) {
            u.value = Ie;
          }
        },
        {
          value: le(ne[1]),
          enumValue: sn.Second,
          text: ee(ne[1]),
          hovering: b.value,
          focusing: c.value,
          handleHovering: P,
          handleFocusing(Ie) {
            c.value = Ie;
          }
        }
      ] : En(ne) && (ke = [
        {
          value: le(ne),
          enumValue: sn.First,
          text: ee(ne),
          hovering: w.value,
          focusing: u.value,
          handleHovering: y,
          handleFocusing(Ie) {
            u.value = Ie;
          }
        }
      ]), ke;
    }), O = I(() => {
      const { activeColor: ne, range: ue, modelValue: ke } = e, Ie = ue && Xe(ke) ? le(Math.min(ke[0], ke[1])) : 0, Je = ue && Xe(ke) ? le(Math.max(ke[0], ke[1])) - Ie : le(ke);
      return s.value ? {
        left: "0px",
        height: `${Je}%`,
        bottom: `${Ie}%`,
        background: ne
      } : {
        top: "0px",
        width: `${Je}%`,
        left: `${Ie}%`,
        background: ne
      };
    }), B = _e({
      [sn.First]: W(),
      [sn.Second]: W()
    });
    let T;
    C(d, {
      reset: on,
      validate: R,
      resetValidation: k
    }), de([() => e.modelValue, () => e.step], ([ne, ue]) => {
      !Se() || !Fe() || t.value || Me(ne, L(ue));
    }), de(n, () => Me()), hn(() => {
      !Se() || !Fe() || M();
    }), jr(oe), je(() => window, "keydown", wn), ro(M);
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
    function U() {
      return Ue(() => g(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function H(ne) {
      const ue = ne.currentTarget;
      return ue ? s.value ? n.value - (ne.clientY - an(ue).top) : ne.clientX - xg(ue) : 0;
    }
    function Y(ne) {
      return {
        [s.value ? "bottom" : "left"]: `${ne.value}%`,
        zIndex: B[ne.enumValue].active ? 1 : void 0
      };
    }
    function j(ne) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : B[ne].active;
    }
    function le(ne) {
      const { min: ue, max: ke } = e;
      return ne < L(ue) ? 0 : ne > L(ke) ? 100 : (ne - L(ue)) / r.value * 100;
    }
    function ee(ne) {
      if (!En(ne))
        return 0;
      const ue = Pn(ne, L(e.min), L(e.max));
      return parseInt(`${ue}`, 10) === ue ? ue : L(ue.toPrecision(5));
    }
    function pe(ne, ue) {
      i.value || ue.handleHovering(ne);
    }
    function ye(ne) {
      C(e.onChange, ne), C(e["onUpdate:modelValue"], ne), U();
    }
    function Ee(ne, ue) {
      let ke = [];
      const { step: Ie, range: Je, modelValue: re, min: $e } = e, Oe = L(Ie), Re = Math.round(ne / a.value), Le = Re * Oe + L($e), cn = B[ue].percentValue * Oe + L($e);
      if (B[ue].percentValue = Re, Je && Xe(re) && (ke = ue === sn.First ? [Le, re[1]] : [re[0], Le]), cn !== Le) {
        const vn = Je ? ke.map((pn) => ee(pn)) : ee(Le);
        ye(vn);
      }
    }
    function F(ne) {
      if (!e.range)
        return sn.First;
      const ue = B[sn.First].percentValue * a.value, ke = B[sn.Second].percentValue * a.value, Ie = Math.abs(ne - ue), Je = Math.abs(ne - ke);
      return Ie <= Je ? sn.First : sn.Second;
    }
    function Z() {
      document.addEventListener("touchmove", D, { passive: !1 }), document.addEventListener("touchend", K), document.addEventListener("touchcancel", K);
    }
    function oe() {
      document.removeEventListener("touchmove", D), document.removeEventListener("touchend", K), document.removeEventListener("touchcancel", K);
    }
    function me(ne, ue) {
      if (M(), i.value || (B[ue].active = !0), T = ue, Z(), i.value || l.value)
        return;
      C(e.onStart), t.value = !0;
      const { clientX: ke, clientY: Ie } = ne.touches[0];
      B[ue].startPosition = s.value ? Ie : ke;
    }
    function D(ne) {
      if (Ve(ne), i.value || l.value || !t.value)
        return;
      const { startPosition: ue, currentOffset: ke } = B[T], { clientX: Ie, clientY: Je } = ne.touches[0];
      let re = (s.value ? ue - Je : Ie - ue) + ke;
      re <= 0 ? re = 0 : re >= n.value && (re = n.value), Ee(re, T);
    }
    function K() {
      oe();
      const { range: ne, modelValue: ue, onEnd: ke, step: Ie, min: Je } = e;
      if (i.value || (B[T].active = !1), i.value || l.value)
        return;
      let re = [];
      B[T].currentOffset = B[T].percentValue * a.value;
      const $e = B[T].percentValue * L(Ie) + L(Je);
      ne && Xe(ue) && (re = T === sn.First ? [$e, ue[1]] : [ue[0], $e]), C(ke, ne ? re : $e), t.value = !1;
    }
    function fe(ne) {
      if (i.value || l.value || ne.target.closest(`.${yd("thumb")}`))
        return;
      const ue = H(ne), ke = F(ue);
      T = ke, Ee(ue, ke), K();
    }
    function Se() {
      return L(e.step) <= 0 ? (_g("[Varlet] Slider", '"step" should be > 0'), !1) : !0;
    }
    function Fe() {
      const { range: ne, modelValue: ue } = e;
      return ne && !Xe(ue) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !ne && Xe(ue) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : ne && Xe(ue) && ue.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }
    function Me(ne = e.modelValue, ue = L(e.step)) {
      const ke = (Ie) => {
        const { min: Je, max: re } = e;
        return Ie < L(Je) ? 0 : Ie > L(re) ? r.value / ue : (Ie - L(Je)) / ue;
      };
      e.range && Xe(ne) ? (B[sn.First].percentValue = ke(ne[0]), B[sn.First].currentOffset = B[sn.First].percentValue * a.value, B[sn.Second].percentValue = ke(ne[1]), B[sn.Second].currentOffset = B[sn.Second].percentValue * a.value) : En(ne) && (B[sn.First].currentOffset = ke(ne) * a.value);
    }
    function on() {
      const ne = e.range ? [0, 0] : 0;
      C(e["onUpdate:modelValue"], ne), k();
    }
    function ln(ne, ue) {
      const ke = L(e.step);
      if (Xe(ue)) {
        const Ie = ue[0] + (u.value ? ne * ke : 0), Je = ue[1] + (c.value ? ne * ke : 0);
        return [Ie, Je].map(ee);
      }
      return ee(ue + ne * ke);
    }
    function wn(ne) {
      const ue = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: ke } = ne;
      if (!Bt(ue, ke) || l.value || i.value || e.range && !u.value && !c.value || !e.range && !u.value)
        return;
      Ve(ne);
      const Ie = ue[ke], Je = ln(Ie, e.modelValue);
      ye(Je);
    }
    function ve(ne) {
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
      errorMessage: p,
      thumbsProps: B,
      thumbList: z,
      handleFocus: ve,
      handleBlur: We,
      n: yd,
      classes: rP,
      thumbStyle: Y,
      hover: pe,
      toSizeUnit: ze,
      toNumber: L,
      showLabel: j,
      start: me,
      move: D,
      end: K,
      handleClick: fe
    };
  }
});
nh.render = iP;
var pi = nh;
te(pi);
ae(pi, eh);
const wE = pi;
var xl = pi, lP = Object.defineProperty, sP = Object.defineProperties, uP = Object.getOwnPropertyDescriptors, kd = Object.getOwnPropertySymbols, cP = Object.prototype.hasOwnProperty, dP = Object.prototype.propertyIsEnumerable, $d = (e, n, o) => n in e ? lP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, fP = (e, n) => {
  for (var o in n || (n = {}))
    cP.call(n, o) && $d(e, o, n[o]);
  if (kd)
    for (var o of kd(n))
      dP.call(n, o) && $d(e, o, n[o]);
  return e;
}, vP = (e, n) => sP(e, uP(n));
const xs = {
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
  loadingColor: vP(fP({}, De(lo, "color")), {
    default: "currentColor"
  }),
  lockScroll: Boolean,
  show: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  forbidClick: Boolean,
  onOpen: V(),
  onOpened: V(),
  onClose: V(),
  onClosed: V(),
  "onUpdate:show": V(),
  _update: String
}, { n: pP, classes: mP } = x("snackbar"), hP = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function gP(e, n) {
  const o = Q("var-icon"), t = Q("var-loading");
  return Ae((h(), S(
    "div",
    {
      class: v(e.n()),
      style: X({ pointerEvents: e.isForbidClick ? "auto" : "none", zIndex: e.zIndex })
    },
    [
      N(
        "div",
        {
          class: v(
            e.classes(
              e.n("wrapper"),
              e.n(`wrapper-${e.position}`),
              e.formatElevation(e.elevation, 4),
              [e.vertical, e.n("vertical")],
              [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n(`wrapper-${e.type}`)]
            )
          ),
          style: X({ zIndex: e.zIndex })
        },
        [
          N(
            "div",
            {
              class: v([e.n("content"), e.contentClass])
            },
            [
              A(e.$slots, "default", {}, () => [
                Be(
                  ie(e.content),
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
              class: v(e.n("icon"))
            },
            [
              e.iconName ? (h(), Ce(o, {
                key: 0,
                name: e.iconName
              }, null, 8, ["name"])) : q("v-if", !0),
              e.type === "loading" ? (h(), Ce(t, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : q("v-if", !0),
              A(e.$slots, "icon")
            ],
            2
            /* CLASS */
          )) : q("v-if", !0),
          e.$slots.action ? (h(), S(
            "div",
            {
              key: 1,
              class: v(e.n("action"))
            },
            [
              A(e.$slots, "action")
            ],
            2
            /* CLASS */
          )) : q("v-if", !0)
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
const oh = _({
  name: "VarSnackbarCore",
  components: {
    VarLoading: dt,
    VarIcon: Ze
  },
  props: xs,
  setup(e) {
    const n = $(null), { zIndex: o } = xt(() => e.show, 1);
    _t(
      () => e.show,
      () => e.lockScroll
    );
    const t = I(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), r = I(() => e.type ? hP[e.type] : "");
    function a() {
      n.value = setTimeout(() => {
        e.type !== "loading" && C(e["onUpdate:show"], !1);
      }, e.duration);
    }
    return de(
      () => e.show,
      (i) => {
        i ? (C(e.onOpen), a()) : (clearTimeout(n.value), C(e.onClose));
      }
    ), de(
      () => e._update,
      () => {
        clearTimeout(n.value), a();
      }
    ), hn(() => {
      e.show && (C(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: ah,
      zIndex: o,
      iconName: r,
      isForbidClick: t,
      n: pP,
      classes: mP,
      formatElevation: un
    };
  }
});
oh.render = gP;
var th = oh;
const { name: bP, n: yP } = x("snackbar");
function kP(e, n) {
  const o = Q("var-snackbar-core");
  return h(), Ce(oo, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [
    G(Qe, {
      name: `${e.n()}-fade`,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: ce(() => [
        G(o, He(e.$props, {
          class: e.n("transition")
        }), tt({
          default: ce(() => [
            A(e.$slots, "default")
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots.icon ? {
            name: "icon",
            fn: ce(() => [
              A(e.$slots, "icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots.action ? {
            name: "action",
            fn: ce(() => [
              A(e.$slots, "action")
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
const rh = _({
  name: bP,
  components: { VarSnackbarCore: th },
  props: xs,
  setup() {
    const { disabled: e } = qo();
    return {
      disabled: e,
      n: yP
    };
  }
});
rh.render = kP;
var mi = rh, $P = Object.defineProperty, wd = Object.getOwnPropertySymbols, wP = Object.prototype.hasOwnProperty, CP = Object.prototype.propertyIsEnumerable, Cd = (e, n, o) => n in e ? $P(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Wt = (e, n) => {
  for (var o in n || (n = {}))
    wP.call(n, o) && Cd(e, o, n[o]);
  if (wd)
    for (var o of wd(n))
      CP.call(n, o) && Cd(e, o, n[o]);
  return e;
};
const ah = ["loading", "success", "warning", "info", "error"];
let Sd = 0, es = !1, ih, Kt = !1;
const lh = {
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
let jn = _e([]), eu = lh;
const SP = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Fi = (e) => () => Dn(e) ? e() : e, PP = {
  setup() {
    return () => {
      const e = jn.map(({
        id: n,
        reactiveSnackOptions: o,
        _update: t
      }) => {
        const r = document.querySelector(".var-transition-group");
        o.forbidClick || o.type === "loading" ? r.classList.add("var-pointer-auto") : r.classList.remove("var-pointer-auto");
        const a = Wt({
          position: Kt ? "relative" : "absolute"
        }, BP(o.position)), {
          content: i,
          icon: l,
          action: s
        } = o, u = {
          default: Fi(i),
          icon: Fi(l),
          action: Fi(s)
        };
        return G(th, He(o, {
          key: n,
          style: a,
          "data-id": n,
          _update: t,
          show: o.show,
          "onUpdate:show": (c) => o.show = c
        }), u);
      });
      return G(Gh, He(SP, {
        style: {
          zIndex: An.zIndex
        },
        onAfterEnter: zP,
        onAfterLeave: OP
      }), {
        default: () => [e]
      });
    };
  }
}, no = function(e) {
  const n = EP(e), o = _e(Wt(Wt({}, eu), n));
  o.show = !0, es || (es = !0, ih = bt(PP).unmountInstance);
  const {
    length: t
  } = jn, r = {
    id: Sd++,
    reactiveSnackOptions: o
  };
  if (t === 0 || Kt)
    TP(r);
  else {
    const a = `update-${Sd}`;
    IP(o, a);
  }
  return {
    clear() {
      !Kt && jn.length ? jn[0].reactiveSnackOptions.show = !1 : o.show = !1;
    }
  };
};
ah.forEach((e) => {
  no[e] = (n) => (zo(n) ? n.type = e : n = {
    content: n,
    type: e
  }, no(n));
});
no.allowMultiple = function(e = !1) {
  e !== Kt && (jn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Kt = e);
};
no.clear = function() {
  jn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
no.setDefaultOptions = function(e) {
  eu = e;
};
no.resetDefaultOptions = function() {
  eu = lh;
};
function zP(e) {
  const n = e.getAttribute("data-id"), o = jn.find((t) => t.id === L(n));
  o && C(o.reactiveSnackOptions.onOpened);
}
function OP(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), o = jn.find((r) => r.id === L(n));
  o && (o.animationEnd = !0, C(o.reactiveSnackOptions.onClosed)), jn.every((r) => r.animationEnd) && (C(ih), jn = _e([]), es = !1);
}
function TP(e) {
  jn.push(e);
}
function EP(e = {}) {
  return mn(e) ? {
    content: e
  } : e;
}
function IP(e, n) {
  const [o] = jn;
  o.reactiveSnackOptions = Wt(Wt({}, o.reactiveSnackOptions), e), o._update = n;
}
function BP(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
no.Component = mi;
te(mi);
te(mi, no);
ae(no, xs);
const CE = mi;
var ns = no;
const sh = {
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
function Nn(e) {
  return `calc(${e} / 2)`;
}
function DP(e, n, o) {
  const { direction: t, justify: r, index: a, lastIndex: i } = o;
  let l = "0";
  return t === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? l = `${Nn(e)} ${n} ${Nn(e)} 0` : l = `${Nn(e)} 0` : r === "space-around" ? l = `${Nn(e)} ${Nn(n)}` : r === "space-between" && (a === 0 ? l = `${Nn(e)} ${Nn(n)} ${Nn(e)} 0` : a === i ? l = `${Nn(e)} 0 ${Nn(e)} ${Nn(n)}` : l = `${Nn(e)} ${Nn(n)}`)), t === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const MP = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: NP,
  n: br,
  classes: Pd
} = x("space");
function AP(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Xe(e) ? e.map(ze) : [ze(e), ze(e)];
}
var hi = _({
  name: NP,
  props: sh,
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
      } = e, u = (o = C(n.default)) != null ? o : [], [c, d] = AP(s, MP(s)), f = Zd(u), p = f.length - 1, g = f.map((m, k) => {
        var w;
        const y = DP(c, d, {
          direction: l,
          justify: r,
          index: k,
          lastIndex: p
        });
        return G("div", {
          class: Pd([l === "column", br("--auto")]),
          key: (w = m.key) != null ? w : void 0,
          style: {
            margin: y
          }
        }, [m]);
      });
      return G("div", {
        class: Pd(br(), br("$--box"), [t, br("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: Ir(r),
          alignItems: Ir(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${c} / 2) 0` : void 0
        }
      }, [g]);
    };
  }
});
te(hi);
ae(hi, sh);
const SE = hi;
var os = hi;
const uh = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: De(en, "name"),
  inactiveIcon: De(en, "name"),
  activeIconNamespace: De(en, "namespace"),
  currentIconNamespace: De(en, "namespace"),
  inactiveIconNamespace: De(en, "namespace")
}, ch = Symbol("STEPS_BIND_STEP_KEY");
function VP() {
  const { bindChildren: e, childProviders: n } = bn(ch);
  return {
    step: n,
    bindStep: e
  };
}
function RP() {
  const { parentProvider: e, index: n, bindParent: o } = gn(ch);
  return o || Vn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: o
  };
}
const { name: LP, n: FP, classes: HP } = x("step"), UP = { key: 3 };
function YP(e, n) {
  const o = Q("var-icon");
  return h(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      N(
        "div",
        {
          class: v(e.n(e.direction))
        },
        [
          N(
            "div",
            {
              class: v(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
              style: X({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
              onClick: n[0] || (n[0] = (...t) => e.click && e.click(...t))
            },
            [
              e.isActive ? (h(), Ce(o, {
                key: 0,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.activeIcon,
                namespace: e.activeIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.isCurrent && e.currentIcon ? (h(), Ce(o, {
                key: 1,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon,
                namespace: e.currentIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.inactiveIcon ? (h(), Ce(o, {
                key: 2,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon,
                namespace: e.inactiveIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : (h(), S(
                "span",
                UP,
                ie(e.index + 1),
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
              class: v(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
              onClick: n[1] || (n[1] = (...t) => e.click && e.click(...t))
            },
            [
              A(e.$slots, "default")
            ],
            2
            /* CLASS */
          )) : q("v-if", !0),
          N(
            "div",
            {
              class: v(e.n(`${e.direction}-line`))
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
const dh = _({
  name: LP,
  components: { VarIcon: Ze },
  props: uh,
  setup() {
    const { index: e, steps: n, bindSteps: o } = RP(), { active: t, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = I(() => t.value === e.value), u = I(() => e.value !== -1 && L(t.value) > e.value);
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
      n: FP,
      classes: HP,
      click: d
    };
  }
});
dh.render = YP;
var gi = dh;
te(gi);
ae(gi, uh);
const PE = gi;
var ts = gi;
const fh = {
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
  onClickStep: V()
}, { name: jP, n: WP } = x("steps");
function KP(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.n()),
      style: X({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
    },
    [
      A(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const vh = _({
  name: jP,
  props: fh,
  setup(e) {
    const n = I(() => e.active), o = I(() => e.activeColor), t = I(() => e.inactiveColor), r = I(() => e.direction), { bindStep: a } = VP();
    a({
      active: n,
      direction: r,
      activeColor: o,
      inactiveColor: t,
      clickStep: l
    });
    function l(s) {
      C(e.onClickStep, s);
    }
    return { n: WP };
  }
});
vh.render = KP;
var bi = vh;
te(bi);
ae(bi, fh);
const zE = bi;
var rs = bi;
const ph = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: qP, n: XP } = x("style-provider"), GP = _({
  name: qP,
  props: ph,
  setup(e, { slots: n }) {
    return () => Xt(
      e.tag,
      {
        class: XP(),
        style: rf(e.styleVars)
      },
      C(n.default)
    );
  }
});
var yi = GP;
const mh = "varlet-style-vars";
function zd() {
  const e = document.head.querySelector(`#${mh}`);
  e && document.head.removeChild(e);
}
function ZP(e) {
  const n = document.createElement("style");
  n.id = mh, n.innerHTML = e, document.head.appendChild(n);
}
function ki(e) {
  if (e == null) {
    zd();
    return;
  }
  const n = rf(e ?? {}), o = Object.entries(n).reduce((t, [r, a]) => (t += `${r}:${a};`, t), `:root:root {
`);
  zd(), ZP(`${o}
}`);
}
ki.Component = yi;
te(yi);
te(yi, ki);
ae(ki, ph);
const OE = yi;
var as = ki;
const hh = {
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
  onClick: V(),
  onBeforeChange: V(),
  onChange: V(),
  "onUpdate:modelValue": V()
}, { name: JP, n: QP, classes: _P } = x("switch"), xP = ["aria-checked"], ez = ["tabindex"];
function nz(e, n) {
  const o = Q("var-hover-overlay"), t = Q("var-form-details"), r = Ye("ripple"), a = Ye("hover");
  return Ae((h(), S("div", {
    class: v(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [
    N(
      "div",
      {
        ref: "switchRef",
        class: v(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
        style: X(e.styleComputed.switch),
        onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
      },
      [
        N(
          "div",
          {
            style: X(e.styleComputed.track),
            class: v(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
          },
          null,
          6
          /* CLASS, STYLE */
        ),
        Ae((h(), S("div", {
          class: v(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
          style: X(e.styleComputed.ripple),
          tabindex: e.disabled || e.formDisabled ? void 0 : "0",
          onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
          onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
        }, [
          N(
            "div",
            {
              style: X(e.styleComputed.handle),
              class: v(
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
                  class: v(e.n("loading")),
                  style: X({
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
              )) : q("v-if", !0)
            ],
            6
            /* CLASS, STYLE */
          ),
          G(o, {
            hovering: e.hovering && !e.disabled && !e.formDisabled,
            focusing: e.isFocusing && !e.disabled && !e.formDisabled
          }, null, 8, ["hovering", "focusing"])
        ], 46, ez)), [
          [r, {
            disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly
          }]
        ])
      ],
      6
      /* CLASS, STYLE */
    ),
    G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
  ], 10, xP)), [
    [a, e.hover, "desktop"]
  ]);
}
const gh = _({
  name: JP,
  components: {
    VarFormDetails: zn,
    VarHoverOverlay: Rn
  },
  directives: { Ripple: nn, Hover: In },
  props: hh,
  setup(e) {
    const n = $(null), o = $(!1), { bindForm: t, form: r } = Fn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Ln(), { hovering: u, handleHovering: c } = _n(), d = I(() => e.modelValue === e.activeValue), f = I(() => {
      const { size: O, color: B, closeColor: T, loadingColor: E, variant: M } = e;
      return {
        handle: {
          width: Cn(O),
          height: Cn(O),
          backgroundColor: d.value ? B : T,
          color: E
        },
        ripple: {
          left: d.value ? Cn(O, 0.5) : `-${Cn(O, M ? 1 / 3 : 0.5)}`,
          color: d.value ? B : T || "currentColor",
          width: Cn(O, 2),
          height: Cn(O, 2)
        },
        track: {
          width: Cn(O, M ? 13 / 6 : 1.9),
          height: Cn(O, M ? 4 / 3 : 0.72),
          borderRadius: Cn(O, 2 / 3),
          filter: d.value || a != null && a.value ? void 0 : `brightness(${M ? 1 : 0.6})`,
          backgroundColor: d.value ? B : T,
          borderWidth: M && !d.value ? Cn(O, 1 / 12) : void 0
        },
        switch: {
          width: Cn(O, M ? 13 / 6 : 2),
          height: Cn(O, M ? 4 / 3 : 1.2)
        }
      };
    }), p = I(() => Cn(e.size, 0.8));
    C(t, {
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
    function y(O) {
      Ue(() => {
        const { validateTrigger: B, rules: T, modelValue: E } = e;
        i(B, O, T, E);
      });
    }
    function b(O) {
      const {
        onClick: B,
        onChange: T,
        disabled: E,
        loading: M,
        readonly: R,
        activeValue: W,
        inactiveValue: U,
        lazyChange: H,
        "onUpdate:modelValue": Y,
        onBeforeChange: j
      } = e;
      if (E || r != null && r.disabled.value || (C(B, O), M || R || r != null && r.readonly.value))
        return;
      const le = d.value ? U : W;
      H ? C(j, le, (ee) => {
        C(Y, ee), y("onLazyChange");
      }) : (C(T, le), C(Y, le), y("onChange"));
    }
    function P(O) {
      e.disabled || r != null && r.disabled.value || c(O);
    }
    function z() {
      C(e["onUpdate:modelValue"], e.inactiveValue), s();
    }
    return {
      isActive: d,
      switchRef: n,
      hovering: u,
      isFocusing: o,
      radius: p,
      styleComputed: f,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
      n: QP,
      classes: _P,
      formatElevation: un,
      multiplySizeUnit: Cn,
      switchActive: b,
      hover: P
    };
  }
});
gh.render = nz;
var $i = gh;
te($i);
ae($i, hh);
const TE = $i;
var is = $i;
const bh = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: V()
}, yh = Symbol("TABS_BIND_TAB_KEY");
function oz() {
  const { childProviders: e, bindChildren: n, length: o } = bn(yh);
  return {
    length: o,
    tabList: e,
    bindTabList: n
  };
}
function tz() {
  const { parentProvider: e, bindParent: n, index: o } = gn(yh);
  return n || Vn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: o,
    tabs: e,
    bindTabs: n
  };
}
const { name: rz, n: yr, classes: az } = x("tab");
function iz(e, n) {
  const o = Ye("ripple");
  return Ae((h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
      ref: "tabEl",
      style: X({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      A(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: e.disabled || !e.ripple }]
  ]);
}
const kh = _({
  name: rz,
  directives: { Ripple: nn },
  props: bh,
  setup(e) {
    const n = $(null), o = I(() => n.value), t = I(() => e.name), r = I(() => e.disabled), { index: a, tabs: i, bindTabs: l } = tz(), { onTabClick: s, active: u, activeColor: c, inactiveColor: d, disabledColor: f, itemDirection: p, resize: g } = i, m = {
      name: t,
      index: a,
      disabled: r,
      element: o
    };
    l(m), de(() => [e.name, e.disabled], g);
    function k() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function w() {
      return e.disabled ? f.value : k() ? c.value : d.value;
    }
    function y() {
      return e.disabled ? yr("$-tab--disabled") : k() ? yr("$-tab--active") : yr("$-tab--inactive");
    }
    function b(P) {
      const { disabled: z, name: O, onClick: B } = e;
      z || (C(B, O ?? a.value, P), s(m));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: c,
      inactiveColor: d,
      itemDirection: p,
      n: yr,
      classes: az,
      computeColorStyle: w,
      computeColorClass: y,
      handleClick: b
    };
  }
});
kh.render = iz;
var wi = kh;
te(wi);
ae(wi, bh);
const EE = wi;
var ls = wi;
const $h = {
  name: [String, Number]
}, { name: lz, n: sz, classes: uz } = x("tab-item");
function cz(e, n) {
  const o = Q("var-swipe-item");
  return h(), Ce(o, {
    class: v(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: ce(() => [
      A(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
const wh = _({
  name: lz,
  components: { VarSwipeItem: Yt },
  props: $h,
  setup(e) {
    const n = $(!1), o = I(() => e.name), { index: t, bindTabsItems: r } = F6(), { bindLists: a } = H6(), i = {
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
      n: sz,
      classes: uz
    };
  }
});
wh.render = cz;
var Ci = wh;
te(Ci);
ae(Ci, $h);
const IE = Ci;
var ss = Ci;
const Ch = {
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
}, { name: dz, n: fz, classes: vz } = x("table");
function pz(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [
      N(
        "div",
        {
          class: v(e.n("main")),
          style: X({ height: e.toSizeUnit(e.scrollerHeight) })
        },
        [
          N(
            "table",
            {
              class: v(e.n("table")),
              style: X({ width: e.toSizeUnit(e.fullWidth) })
            },
            [
              A(e.$slots, "default")
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
          class: v(e.n("footer"))
        },
        [
          A(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Sh = _({
  name: dz,
  props: Ch,
  setup: () => ({
    toSizeUnit: ze,
    n: fz,
    classes: vz,
    formatElevation: un
  })
});
Sh.render = pz;
var Si = Sh;
te(Si);
ae(Si, Ch);
const BE = Si;
var us = Si;
const Ph = {
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
  stickyCssMode: De(Et, "cssMode"),
  stickyZIndex: De(Et, "zIndex"),
  offsetTop: De(Et, "offsetTop"),
  onClick: V(),
  onChange: V(),
  "onUpdate:active": V()
};
var Od = (e, n, o) => new Promise((t, r) => {
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
const { name: mz, n: hz, classes: gz } = x("tabs");
function bz(e, n) {
  return h(), Ce(ht(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: ce(() => [
      N(
        "div",
        He({
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
              class: v(
                e.classes(
                  e.n("tab-wrap"),
                  [e.localScrollable, e.n(`--layout-${e.layoutDirection}-scrollable`)],
                  e.n(`--layout-${e.layoutDirection}`)
                )
              )
            },
            [
              A(e.$slots, "default"),
              N(
                "div",
                {
                  class: v(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
                  style: X({
                    width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                    height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                    transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
                  })
                },
                [
                  N(
                    "div",
                    {
                      class: v(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
                      style: X({ background: e.indicatorColor || e.activeColor })
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
const zh = _({
  name: mz,
  components: { VarSticky: pt },
  inheritAttrs: !1,
  props: Ph,
  setup(e) {
    const n = $("0px"), o = $("0px"), t = $("0px"), r = $("0px"), a = $(!1), i = $(null), l = I(() => e.active), s = I(() => e.activeColor), u = I(() => e.inactiveColor), c = I(() => e.disabledColor), d = I(() => e.itemDirection), f = $(null), p = I(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: g, bindTabList: m, length: k } = oz();
    m({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: c,
      itemDirection: d,
      resize: E,
      onTabClick: y
    }), de(
      () => k.value,
      () => Od(this, null, function* () {
        yield kn(), E();
      })
    ), de(() => [e.active, e.scrollable], E), Do(E), ro(E);
    function y(R) {
      var W;
      const U = (W = R.name.value) != null ? W : R.index.value, { active: H, onChange: Y, onClick: j } = e;
      C(e["onUpdate:active"], U), C(j, U), U !== H && C(Y, U);
    }
    function b() {
      return g.find(({ name: R }) => e.active === R.value);
    }
    function P(R) {
      return g.find(({ index: W }) => (R ?? e.active) === W.value);
    }
    function z() {
      if (k.value === 0)
        return;
      const { active: R } = e;
      if (En(R)) {
        const W = Pn(R, 0, k.value - 1);
        return C(e["onUpdate:active"], W), P(W);
      }
    }
    function O() {
      a.value = e.scrollable === "always" || g.length >= 5;
    }
    function B({ element: R }) {
      const W = R.value;
      W && (e.layoutDirection === "horizontal" ? (n.value = `${W.offsetWidth}px`, t.value = `${W.offsetLeft}px`) : (o.value = `${W.offsetHeight}px`, r.value = `${W.offsetTop}px`));
    }
    function T({ element: R }) {
      if (!a.value)
        return;
      const W = i.value, U = R.value;
      if (e.layoutDirection === "horizontal") {
        const H = U.offsetLeft + U.offsetWidth / 2 - W.offsetWidth / 2;
        Dt(W, {
          left: H,
          animation: Zi
        });
      } else {
        const H = U.offsetTop + U.offsetHeight / 2 - W.offsetHeight / 2;
        Dt(W, {
          top: H,
          animation: Zi
        });
      }
    }
    function E() {
      const R = b() || P() || z();
      !R || R.disabled.value || (O(), B(R), T(R));
    }
    function M() {
      return Od(this, null, function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
    }
    return {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: o,
      indicatorX: t,
      indicatorY: r,
      indicatorPosition: p,
      localScrollable: a,
      scrollerEl: i,
      Transition: Qe,
      toSizeUnit: ze,
      n: hz,
      classes: gz,
      resize: E,
      resizeSticky: M,
      formatElevation: un
    };
  }
});
zh.render = bz;
var Pi = zh;
te(Pi);
ae(Pi, Ph);
const DE = Pi;
var cs = Pi;
const Oh = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: Boolean,
  "onUpdate:active": V()
};
var yz = (e, n, o) => new Promise((t, r) => {
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
const { name: kz, n: $z } = x("tabs-items");
function wz(e, n) {
  const o = Q("var-swipe");
  return h(), Ce(o, {
    class: v(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: ce(() => [
      A(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
const Th = _({
  name: kz,
  components: { VarSwipe: Ut },
  props: Oh,
  setup(e) {
    const n = $(null), { tabItemList: o, bindTabItem: t, length: r } = L6();
    t({}), de(() => e.active, s), de(
      () => r.value,
      () => yz(this, null, function* () {
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
      const p = l(d);
      p && (o.forEach(({ setCurrent: g }) => g(!1)), p.setCurrent(!0), (f = n.value) == null || f.to(p.index.value));
    }
    function u(d) {
      var f;
      const p = o.find(({ index: m }) => m.value === d), g = (f = p.name.value) != null ? f : p.index.value;
      C(e["onUpdate:active"], g);
    }
    function c() {
      return n.value;
    }
    return {
      swipe: n,
      n: $z,
      handleSwipeChange: u,
      getSwipe: c
    };
  }
});
Th.render = wz;
var zi = Th;
te(zi);
ae(zi, Oh);
const ME = zi;
var ds = zi, Cz = {
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
}, Sz = {
  "--alert-padding": "16px",
  "--alert-border-radius": "4px",
  "--alert-icon-size": "22px",
  "--alert-icon-margin": "0 12px 0 0",
  "--alert-close-icon-size": "22px",
  "--alert-close-icon-margin": "2px 0 0 12px",
  "--alert-standard-info-text-color": "var(--color-on-info)",
  "--alert-standard-danger-text-color": "var(--color-on-danger)",
  "--alert-standard-success-text-color": "var(--color-on-success)",
  "--alert-standard-warning-text-color": "var(--color-on-warning)",
  "--alert-danger-background": "var(--color-danger)",
  "--alert-success-background": "var(--color-success)",
  "--alert-warning-background": "var(--color-warning)",
  "--alert-info-background": "var(--color-info)",
  "--alert-tonal-danger-background": "hsla(var(--hsl-danger), 0.12)",
  "--alert-tonal-success-background": "hsla(var(--hsl-success), 0.12)",
  "--alert-tonal-warning-background": "hsla(var(--hsl-warning), 0.12)",
  "--alert-tonal-info-background": "hsla(var(--hsl-info), 0.12)",
  "--alert-tonal-danger-text-color": "var(--color-danger)",
  "--alert-tonal-success-text-color": "var(--color-success)",
  "--alert-tonal-warning-text-color": "var(--color-warning)",
  "--alert-tonal-info-text-color": "var(--color-info)",
  "--alert-message-font-size": "14px",
  "--alert-title-font-size": "16px",
  "--alert-title-font-weight": "500",
  "--alert-message-margin-top": "4px",
  "--alert-message-line-height": "1.5",
  "--alert-title-line-height": "1.5"
}, Pz = {
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
}, zz = {
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
}, Oz = {
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
}, Tz = {
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
}, Ez = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, Iz = {
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
}, Bz = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, Dz = {
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
}, Mz = {
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
}, Nz = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, Az = {
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
}, Vz = {
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
}, Rz = {
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
}, Lz = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, Fz = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, Hz = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, Uz = {
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
}, Yz = {
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
}, jz = {
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
}, Wz = {
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
}, Kz = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, qz = {
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
}, Xz = {
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
}, Gz = {
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
}, Zz = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, Jz = {
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
}, Qz = {
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
}, _z = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
}, xz = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, eO = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, nO = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, oO = {
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
}, tO = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, rO = {
  "--watermark-content-color": "#ffffff"
}, aO = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, iO = {
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
}, lO = {
  "--avatar-group-offset": "-10px"
}, sO = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, uO = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, cO = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, dO = {
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
}, fO = {
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
}, vO = {
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
}, pO = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, mO = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, hO = {
  "--icon-size": "20px"
}, gO = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, bO = {
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
}, yO = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, kO = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, $O = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, wO = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, CO = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, SO = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "4px"
}, PO = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, zO = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, OO = {
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
}, TO = {
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
}, EO = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, IO = {
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
}, BO = {
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
}, DO = {
  "--select-scroller-background": "#272727",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-scroller-border-radius": "2px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, MO = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, NO = Object.defineProperty, Td = Object.getOwnPropertySymbols, AO = Object.prototype.hasOwnProperty, VO = Object.prototype.propertyIsEnumerable, Ed = (e, n, o) => n in e ? NO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, he = (e, n) => {
  for (var o in n || (n = {}))
    AO.call(n, o) && Ed(e, o, n[o]);
  if (Td)
    for (var o of Td(n))
      VO.call(n, o) && Ed(e, o, n[o]);
  return e;
}, RO = he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he({
  "--color-scheme": "dark",
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
}, zz), Sz), Tz), Oz), Xz), Dz), Yz), Zz), Kz), Lz), Mz), Cz), Iz), Pz), Gz), Bz), Fz), Wz), jz), Vz), qz), Az), Hz), Ez), Nz), Rz), Jz), Qz), _z), Uz), xz), eO), nO), oO), tO), rO), aO), iO), lO), sO), uO), cO), dO), fO), vO), pO), mO), hO), gO), bO), yO), kO), $O), wO), CO), SO), PO), zO), OO), TO), EO), IO), BO), DO), MO), LO = {
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
}, FO = {
  "--alert-padding": "16px",
  "--alert-border-radius": "4px",
  "--alert-icon-size": "22px",
  "--alert-icon-margin": "0 12px 0 0",
  "--alert-close-icon-size": "22px",
  "--alert-close-icon-margin": "2px 0 0 12px",
  "--alert-standard-info-text-color": "var(--color-on-info)",
  "--alert-standard-danger-text-color": "var(--color-on-danger)",
  "--alert-standard-success-text-color": "var(--color-on-success)",
  "--alert-standard-warning-text-color": "var(--color-on-warning)",
  "--alert-danger-background": "var(--color-danger)",
  "--alert-success-background": "var(--color-success)",
  "--alert-warning-background": "var(--color-warning)",
  "--alert-info-background": "var(--color-info)",
  "--alert-tonal-danger-background": "hsla(var(--hsl-danger), 0.12)",
  "--alert-tonal-success-background": "hsla(var(--hsl-success), 0.12)",
  "--alert-tonal-warning-background": "hsla(var(--hsl-warning), 0.12)",
  "--alert-tonal-info-background": "hsla(var(--hsl-info), 0.12)",
  "--alert-tonal-danger-text-color": "var(--color-danger)",
  "--alert-tonal-success-text-color": "var(--color-success)",
  "--alert-tonal-warning-text-color": "var(--color-warning)",
  "--alert-tonal-info-text-color": "var(--color-info)",
  "--alert-message-font-size": "14px",
  "--alert-title-font-size": "16px",
  "--alert-title-font-weight": "500",
  "--alert-message-margin-top": "4px",
  "--alert-message-line-height": "1.5",
  "--alert-title-line-height": "1.5"
}, HO = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, UO = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, YO = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, jO = {
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
}, WO = {
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
}, KO = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, qO = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, XO = {
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
}, GO = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-border-radius": "12px"
}, ZO = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, JO = {
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
}, QO = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, _O = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, xO = {
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
}, e3 = {
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
}, n3 = {
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
}, o3 = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, t3 = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, r3 = {
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
}, a3 = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, i3 = {
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
}, l3 = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, s3 = {
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
}, u3 = {
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
}, c3 = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, d3 = {
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
}, f3 = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, v3 = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, p3 = {
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
}, m3 = {
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
}, h3 = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, g3 = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, b3 = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, y3 = {
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
}, k3 = {
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
}, $3 = {
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
}, w3 = {
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
}, C3 = {
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
}, S3 = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, P3 = {
  "--avatar-group-offset": "-10px"
}, z3 = {
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
}, O3 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, T3 = {
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
}, E3 = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, I3 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, B3 = {
  "--icon-size": "20px"
}, D3 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, M3 = {
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
}, N3 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, A3 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, V3 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, R3 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, L3 = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, F3 = {
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
}, H3 = {
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
}, U3 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, Y3 = {
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
}, j3 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, W3 = {
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
}, K3 = {
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
}, q3 = {
  "--watermark-content-color": "#808080"
}, X3 = {
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
}, G3 = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, Z3 = Object.defineProperty, Id = Object.getOwnPropertySymbols, J3 = Object.prototype.hasOwnProperty, Q3 = Object.prototype.propertyIsEnumerable, Bd = (e, n, o) => n in e ? Z3(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ge = (e, n) => {
  for (var o in n || (n = {}))
    J3.call(n, o) && Bd(e, o, n[o]);
  if (Id)
    for (var o of Id(n))
      Q3.call(n, o) && Bd(e, o, n[o]);
  return e;
}, _3 = ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge({
  "--color-scheme": "light",
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
}, LO), FO), HO), UO), YO), jO), WO), KO), qO), XO), GO), ZO), JO), QO), _O), xO), e3), n3), o3), t3), r3), a3), i3), l3), s3), u3), c3), d3), f3), v3), p3), m3), h3), g3), b3), y3), k3), $3), w3), C3), S3), P3), z3), O3), T3), E3), I3), B3), D3), M3), N3), A3), V3), R3), L3), F3), H3), U3), Y3), j3), W3), K3), q3), X3), G3), x3 = {
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
}, e8 = {
  "--alert-padding": "16px",
  "--alert-border-radius": "4px",
  "--alert-icon-size": "22px",
  "--alert-icon-margin": "0 12px 0 0",
  "--alert-close-icon-size": "22px",
  "--alert-close-icon-margin": "2px 0 0 12px",
  "--alert-standard-info-text-color": "var(--color-on-info)",
  "--alert-standard-danger-text-color": "var(--color-on-danger)",
  "--alert-standard-success-text-color": "var(--color-on-success)",
  "--alert-standard-warning-text-color": "var(--color-on-warning)",
  "--alert-danger-background": "var(--color-danger)",
  "--alert-success-background": "var(--color-success)",
  "--alert-warning-background": "var(--color-warning)",
  "--alert-info-background": "var(--color-info)",
  "--alert-tonal-danger-background": "hsla(var(--hsl-danger), 0.12)",
  "--alert-tonal-success-background": "hsla(var(--hsl-success), 0.12)",
  "--alert-tonal-warning-background": "hsla(var(--hsl-warning), 0.12)",
  "--alert-tonal-info-background": "hsla(var(--hsl-info), 0.12)",
  "--alert-tonal-danger-text-color": "var(--color-danger)",
  "--alert-tonal-success-text-color": "var(--color-success)",
  "--alert-tonal-warning-text-color": "var(--color-warning)",
  "--alert-tonal-info-text-color": "var(--color-info)",
  "--alert-message-font-size": "14px",
  "--alert-title-font-size": "16px",
  "--alert-title-font-weight": "500",
  "--alert-message-margin-top": "4px",
  "--alert-message-line-height": "1.5",
  "--alert-title-line-height": "1.5"
}, n8 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, o8 = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, t8 = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, r8 = {
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
}, a8 = {
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
}, i8 = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, l8 = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, s8 = {
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
}, u8 = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "12px"
}, c8 = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, d8 = {
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
}, f8 = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, v8 = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, p8 = {
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
}, m8 = {
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
}, h8 = {
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
}, g8 = {
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
}, b8 = {
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
}, y8 = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, k8 = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, $8 = {
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
}, w8 = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, C8 = {
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
}, S8 = {
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
}, P8 = {
  "--watermark-content-color": "#ffffff"
}, z8 = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, O8 = {
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
}, T8 = {
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
}, E8 = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, I8 = {
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
}, B8 = {
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
}, D8 = {
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
}, M8 = {
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
}, N8 = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, A8 = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, V8 = {
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
}, R8 = {
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
}, L8 = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, F8 = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, H8 = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, U8 = {
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
}, Y8 = {
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
}, j8 = {
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
}, W8 = {
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
}, K8 = {
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
}, q8 = {
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
}, X8 = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, G8 = {
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
}, Z8 = {
  "--avatar-group-offset": "-10px"
}, J8 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, Q8 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, _8 = {
  "--icon-size": "20px"
}, x8 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, eT = {
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
}, nT = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, oT = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, tT = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, rT = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, aT = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, iT = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, lT = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, sT = {
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
}, uT = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, cT = Object.defineProperty, Dd = Object.getOwnPropertySymbols, dT = Object.prototype.hasOwnProperty, fT = Object.prototype.propertyIsEnumerable, Md = (e, n, o) => n in e ? cT(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, be = (e, n) => {
  for (var o in n || (n = {}))
    dT.call(n, o) && Md(e, o, n[o]);
  if (Dd)
    for (var o of Dd(n))
      fT.call(n, o) && Md(e, o, n[o]);
  return e;
}, vT = be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be({
  "--color-scheme": "dark",
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
}, x3), e8), n8), o8), t8), r8), a8), i8), l8), s8), u8), c8), d8), f8), v8), p8), m8), h8), g8), b8), y8), k8), $8), w8), C8), S8), P8), z8), O8), T8), E8), I8), B8), D8), M8), N8), A8), V8), R8), L8), F8), H8), U8), Y8), j8), W8), K8), q8), X8), G8), Z8), J8), Q8), _8), x8), eT), nT), oT), tT), rT), aT), iT), lT), sT), uT);
function pT(e, n = {}) {
  const { viewportWidth: o = 375, viewportUnit: t = "vmin", unitPrecision: r = 6 } = n;
  return Object.entries(e).reduce((a, [i, l]) => (a[i] = l.includes("px") ? l.replace(
    /(\d+(\.\d+)?)px/g,
    (s, u) => `${Number((u / o * 100).toFixed(r))}${t}`
  ) : l, a), {});
}
const mT = { dark: RO, md3Light: _3, md3Dark: vT, toViewport: pT }, NE = null;
var fs = mT;
const Un = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Sn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Nd = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], Eh = {
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
  "onUpdate:modelValue": V(),
  onChange: V()
}, Ih = (e, n) => e === "24hr" || n === "am", nu = (e, n, o) => {
  const t = Un.findIndex((a) => L(a) === L(o)), r = Ih(e, n) ? o : Sn[t];
  return {
    hourStr: r,
    hourNum: L(r)
  };
}, Tn = (e) => {
  const [n, o, t] = e.split(":");
  return {
    hour: L(n),
    minute: L(o),
    second: L(t)
  };
}, Bh = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: c, hourNum: d } = nu(r, a, i);
  let f = !1, p = !1;
  if (u.includes(c)) return !0;
  if (l && !s) {
    const { hour: g, minute: m } = Tn(l);
    f = g === d && t > m;
  }
  if (!l && s) {
    const { hour: g, minute: m } = Tn(s);
    f = g === d && t < m;
  }
  if (l && s) {
    const { hour: g, minute: m } = Tn(l), { hour: k, minute: w } = Tn(s);
    f = k === d && t < w || g === d && t > m;
  }
  return (n = e.allowedTime) != null && n.minutes && (p = (o = e.allowedTime) == null ? void 0 : o.minutes(t)), f || p;
}, Dh = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: c } = e, { hourStr: d, hourNum: f } = nu(r, a, i);
  let p = !1, g = !1;
  if (c.includes(d)) return !0;
  if (s && !u) {
    const { hour: m, minute: k, second: w } = Tn(s);
    p = m === f && k < l || k === l && t > w;
  }
  if (!s && u) {
    const { hour: m, minute: k, second: w } = Tn(u);
    p = m === f && k > l || k === l && t > w;
  }
  if (s && u) {
    const { hour: m, minute: k, second: w } = Tn(s), { hour: y, minute: b, second: P } = Tn(u);
    p = m === f && k < l || y === f && b > l || m === f && k === l && t > w || y === f && b === l && t < P;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (o = e.allowedTime) == null ? void 0 : o.seconds(t)), p || g;
}, { n: hT, classes: gT } = x("time-picker");
function bT(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.n("clock"))
    },
    [
      N(
        "div",
        {
          class: v(e.n("clock-hand")),
          style: X(e.handStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      (h(!0), S(
        Ne,
        null,
        Ke(e.timeScales, (o, t) => (h(), S(
          "div",
          {
            class: v(
              e.classes(
                e.n("clock-item"),
                [e.isActive(t, !1), e.n("clock-item--active")],
                [e.isDisable(o), e.n("clock-item--disable")]
              )
            ),
            key: o,
            style: X(e.getStyle(t, o, !1))
          },
          ie(o),
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
          class: v(e.n("clock-inner")),
          ref: "inner"
        },
        [
          (h(!0), S(
            Ne,
            null,
            Ke(e.hours24, (o, t) => (h(), S(
              "div",
              {
                class: v(
                  e.classes(
                    e.n("clock-item"),
                    [e.isActive(t, !0), e.n("clock-item--active")],
                    [e.isDisable(o), e.n("clock-item--disable")]
                  )
                ),
                key: o,
                style: X(e.getStyle(t, o, !0))
              },
              ie(o),
              7
              /* TEXT, CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Mh = _({
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
    const o = $(null), t = $([]), r = $([]), a = I(() => ({
      transform: `rotate(${L(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = I(() => {
      if (e.rad === void 0) return;
      const m = e.rad / 30;
      return m >= 0 ? m : m + 12;
    }), l = I(() => e.type === "hour" ? Un : Nd), s = (m, k) => {
      m = m ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const w = e.type === "minute" ? Bh : Dh, y = {
        time: L(m),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: L(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return k && e.type === "minute" && Reflect.deleteProperty(y, "minute"), w(y);
    }, u = () => {
      if (i.value === void 0) return e.color;
      const m = e.isInner ? Sn[i.value] : l.value[i.value];
      return l.value === Nd ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : d(m) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, c = (m, k) => k ? i.value === m && e.isInner : i.value === m && (!e.isInner || e.type !== "hour"), d = (m) => {
      if (e.type === "hour") {
        if (Ih(e.format, e.ampm)) return t.value.includes(m);
        const k = Un.findIndex((w) => w === m);
        return r.value.includes(k);
      }
      return s(m, !0);
    }, f = (m, k, w) => {
      const y = 2 * Math.PI / 12 * m - Math.PI / 2, b = 50 * (1 + Math.cos(y)), P = 50 * (1 + Math.sin(y)), z = () => c(m, w) ? d(k) ? {
        backgroundColor: "var(--time-picker-clock-item-disable-background)",
        color: "var(--time-picker-clock-item-disable-color)"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: O, color: B } = z();
      return {
        left: `${b}%`,
        top: `${P}%`,
        backgroundColor: O,
        color: B
      };
    }, p = () => {
      const { width: m, height: k } = an(o.value);
      return {
        width: m,
        height: k
      };
    }, g = () => {
      if (i.value === void 0) return;
      const m = e.ampm === "am" ? Un : Sn;
      return jo(m[i.value], 2, "0");
    };
    return de([i, () => e.isInner], ([m, k], [w, y]) => {
      if (m === w && k === y || e.type !== "hour" || i.value === void 0) return;
      const P = k ? Sn[i.value] : g(), z = e.useSeconds ? `:${e.time.second}` : "", O = `${P}:${e.time.minute}${z}`;
      e.preventNextUpdate || n("update", O), n("change-prevent-update");
    }), de(
      () => e.rad,
      (m, k) => {
        if (e.type === "hour" || m === void 0 || k === void 0) return;
        const w = m / 6 >= 0 ? m / 6 : m / 6 + 60, y = k / 6 >= 0 ? k / 6 : k / 6 + 60;
        if (w === y) return;
        let b;
        const { hourStr: P } = nu(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const z = se().minute(w).format("mm"), O = e.useSeconds ? `:${e.time.second}` : "";
          b = `${P}:${z}${O}`;
        }
        if (e.type === "second") {
          const z = se().second(w).format("ss"), O = e.useSeconds ? `:${z}` : "";
          b = `${P}:${e.time.minute}${O}`;
        }
        n("update", b);
      }
    ), de(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([m, k, w]) => {
        if (t.value = [], m && !k) {
          const { hour: y } = Tn(m), b = Un.filter((z) => L(z) > y), P = Sn.filter((z) => L(z) > y);
          t.value = [...b, ...P];
        }
        if (!m && k) {
          const { hour: y } = Tn(k), b = Un.filter((z) => L(z) < y), P = Sn.filter((z) => L(z) < y);
          t.value = [...b, ...P];
        }
        if (m && k) {
          const { hour: y } = Tn(m), { hour: b } = Tn(k), P = Un.filter((O) => L(O) < b || L(O) > y), z = Sn.filter((O) => L(O) < b || L(O) > y);
          t.value = [...P, ...z];
        }
        if (w != null && w.hours) {
          const { hours: y } = w, b = Un.filter((z) => !y(L(z))), P = Sn.filter((z) => !y(L(z)));
          t.value = [.../* @__PURE__ */ new Set([...t.value, ...b, ...P])];
        }
        r.value = t.value.map((y) => Sn.findIndex((b) => y === b)).filter((y) => y >= 0);
      },
      { immediate: !0, deep: !0 }
    ), {
      n: hT,
      classes: gT,
      hours24: Sn,
      timeScales: l,
      inner: o,
      handStyle: a,
      disableHour: t,
      isActive: c,
      isDisable: d,
      getSize: p,
      getStyle: f,
      activeItemIndex: i
    };
  }
});
Mh.render = bT;
var yT = Mh;
const { name: kT, n: $T, classes: wT } = x("time-picker");
function CT(e, n) {
  var o;
  const t = Q("clock");
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [
      N(
        "div",
        {
          class: v(e.n("title")),
          style: X({ background: e.titleColor || e.color })
        },
        [
          N(
            "div",
            {
              class: v(e.n("title-hint"))
            },
            ie((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("timePickerHint")),
            3
            /* TEXT, CLASS */
          ),
          N(
            "div",
            {
              class: v(e.n("title-time-container"))
            },
            [
              N(
                "div",
                {
                  class: v(e.n("title-time"))
                },
                [
                  N(
                    "div",
                    {
                      class: v(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
                      onClick: n[0] || (n[0] = (r) => e.checkPanel("hour"))
                    },
                    ie(e.time.hour),
                    3
                    /* TEXT, CLASS */
                  ),
                  N(
                    "span",
                    {
                      class: v(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  ),
                  N(
                    "div",
                    {
                      class: v(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
                      onClick: n[1] || (n[1] = (r) => e.checkPanel("minute"))
                    },
                    ie(e.time.minute),
                    3
                    /* TEXT, CLASS */
                  ),
                  e.useSeconds ? (h(), S(
                    "span",
                    {
                      key: 0,
                      class: v(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  )) : q("v-if", !0),
                  e.useSeconds ? (h(), S(
                    "div",
                    {
                      key: 1,
                      class: v(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
                      onClick: n[2] || (n[2] = (r) => e.checkPanel("second"))
                    },
                    ie(e.time.second),
                    3
                    /* TEXT, CLASS */
                  )) : q("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              e.format === "ampm" ? (h(), S(
                "div",
                {
                  key: 0,
                  class: v(e.n("title-ampm"))
                },
                [
                  N(
                    "div",
                    {
                      class: v(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
                      onClick: n[3] || (n[3] = (r) => e.checkAmpm("am"))
                    },
                    " AM ",
                    2
                    /* CLASS */
                  ),
                  N(
                    "div",
                    {
                      class: v(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
                      onClick: n[4] || (n[4] = (r) => e.checkAmpm("pm"))
                    },
                    " PM ",
                    2
                    /* CLASS */
                  )
                ],
                2
                /* CLASS */
              )) : q("v-if", !0)
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
          class: v(e.n("body"))
        },
        [
          N(
            "div",
            {
              class: v(e.n("clock-container")),
              onTouchstart: n[5] || (n[5] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchmove: n[6] || (n[6] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchend: n[7] || (n[7] = (...r) => e.end && e.end(...r)),
              ref: "container"
            },
            [
              G(Qe, {
                name: `${e.n()}-panel-fade`
              }, {
                default: ce(() => [
                  (h(), Ce(t, {
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
          class: v(e.n("actions"))
        },
        [
          A(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Nh = _({
  name: kT,
  components: { Clock: yT },
  props: Eh,
  setup(e) {
    const n = $(null), o = $(null), t = $(null), r = $(!1), a = $(!1), i = $(!1), l = $(!1), s = $(!1), u = $(!1), c = $(!1), d = $(0), f = $(0), p = $(), g = $("hour"), m = $("am"), k = $({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = _e({
      x: 0,
      y: 0
    }), y = _e({
      x: [],
      y: []
    }), b = I(() => g.value === "hour" ? p.value : g.value === "minute" ? d.value : f.value), { t: P } = ao();
    de(
      () => e.modelValue,
      (F) => {
        if (F === void 0 || F === "") {
          z();
          return;
        }
        const { hour: Z, minute: oe, second: me } = Tn(F), D = se().hour(Z).format("hh"), K = se().hour(Z).format("HH"), fe = se().minute(oe).format("mm"), Se = se().second(me).format("ss");
        p.value = (D === "12" ? 0 : L(D)) * 30, d.value = L(fe) * 6, f.value = L(Se) * 6, k.value = W(F), e.format !== "24hr" && (m.value = jo(`${Z}`, 2, "0") === K && Sn.includes(K) ? "pm" : "am"), r.value = e.format === "24hr" && Sn.includes(K);
      },
      { immediate: !0 }
    );
    function z() {
      p.value = void 0, d.value = 0, f.value = 0, k.value = {
        hour: "00",
        minute: "00",
        second: "00"
      }, m.value = "am";
    }
    function O(F) {
      C(e["onUpdate:modelValue"], F), C(e.onChange, F);
    }
    function B(F) {
      return F * 57.29577951308232;
    }
    function T(F) {
      l.value = !1, c.value = !1, g.value = F;
    }
    function E(F) {
      const { disableHour: Z } = t.value, oe = Un.findIndex((K) => L(K) === L(k.value.hour)), me = F === "am" ? Un : Sn;
      return [...me.slice(oe), ...me.slice(0, oe)].find((K, fe) => (a.value = fe !== 0, !Z.includes(K)));
    }
    function M(F) {
      if (e.readonly) return;
      m.value = F;
      const Z = E(F);
      if (!Z) return;
      const oe = e.useSeconds ? `:${k.value.second}` : "", me = `${jo(Z, 2, "0")}:${k.value.minute}${oe}`;
      O(me);
    }
    function R(F, Z) {
      const oe = F >= y.x[0] && F <= y.x[1], me = Z >= y.y[0] && Z <= y.y[1];
      return oe && me;
    }
    function W(F) {
      const Z = e.format === "24hr" ? "HH" : "hh", { hour: oe, minute: me, second: D } = Tn(F);
      return {
        hour: se().hour(oe).format(Z),
        minute: se().minute(me).format("mm"),
        second: se().second(D).format("ss")
      };
    }
    function U(F) {
      const Z = F / 30;
      return Z >= 0 ? Z : Z + 12;
    }
    function H() {
      const { width: F, height: Z } = t.value.getSize(), oe = w.x - F / 2 - 8, me = w.x + F / 2 + 8, D = w.y - Z / 2 - 8, K = w.y + Z / 2 + 8;
      return {
        rangeXMin: oe,
        rangeXMax: me,
        rangeYMin: D,
        rangeYMax: K
      };
    }
    function Y(F, Z, oe) {
      const { disableHour: me } = t.value;
      i.value = R(F, Z);
      const D = Math.round(oe / 30) * 30 + 90, K = U(D), fe = r.value ? Un[K] : Sn[K];
      if (me.includes(fe) || (r.value = e.format === "24hr" ? R(F, Z) : !1), r.value !== i.value) return;
      const Se = r.value || m.value === "pm" ? Sn[K] : Un[K];
      u.value = me.includes(Se), !u.value && (p.value = D, l.value = !0);
    }
    function j(F) {
      const { disableHour: Z } = t.value, oe = Math.round(F / 6) * 6 + 90, D = {
        time: oe / 6 >= 0 ? oe / 6 : oe / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: k.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      c.value = Bh(D), !c.value && (d.value = oe, s.value = !0);
    }
    function le(F) {
      const { disableHour: Z } = t.value, oe = Math.round(F / 6) * 6 + 90, D = {
        time: oe / 6 >= 0 ? oe / 6 : oe / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: k.value.hour,
        minute: L(k.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      Dh(D) || (f.value = oe);
    }
    function ee() {
      const { left: F, top: Z, width: oe, height: me } = an(n.value);
      if (w.x = F + oe / 2, w.y = Z + me / 2, g.value === "hour" && e.format === "24hr") {
        const { rangeXMin: D, rangeXMax: K, rangeYMin: fe, rangeYMax: Se } = H();
        y.x = [D, K], y.y = [fe, Se];
      }
    }
    function pe(F) {
      if (Ve(F), e.readonly) return;
      ee();
      const { clientX: Z, clientY: oe } = F.touches[0], me = Z - w.x, D = oe - w.y, K = Math.round(B(Math.atan2(D, me)));
      g.value === "hour" ? Y(Z, oe, K) : g.value === "minute" ? j(K) : le(K);
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
      getRad: b,
      time: k,
      container: n,
      inner: t,
      picker: o,
      isInner: r,
      type: g,
      ampm: m,
      isPreventNextUpdate: a,
      n: $T,
      classes: wT,
      t: tn,
      pt: P,
      moveHand: pe,
      checkPanel: T,
      checkAmpm: M,
      end: ye,
      update: O,
      changePreventUpdate: Ee,
      formatElevation: un
    };
  }
});
Nh.render = CT;
var Oi = Nh;
te(Oi);
ae(Oi, Eh);
const AE = Oi;
var vs = Oi;
const Ah = {
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
  onClickAction: V(),
  onBeforeFilter: V(),
  onBeforeRead: V(),
  onAfterRead: V(),
  onBeforeRemove: V(),
  onRemove: V(),
  onOversize: V(),
  onPreview: V(),
  "onUpdate:modelValue": V()
};
var kr = (e, n, o) => new Promise((t, r) => {
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
const { name: ST, n: PT, classes: zT } = x("uploader");
let OT = 0;
const TT = ["onClick"], ET = ["onClick"], IT = ["src", "alt"], BT = ["tabindex"], DT = ["multiple", "accept", "capture", "disabled"], MT = ["src"];
function NT(e, n) {
  const o = Q("var-icon"), t = Q("var-hover-overlay"), r = Q("var-form-details"), a = Q("var-popup"), i = Ye("ripple"), l = Ye("hover");
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      N(
        "div",
        {
          class: v(e.n("file-list"))
        },
        [
          (h(!0), S(
            Ne,
            null,
            Ke(e.files, (s) => Ae((h(), S("div", {
              class: v(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
              key: s.id,
              onClick: (u) => e.preview(s)
            }, [
              N(
                "div",
                {
                  class: v(e.n("file-name"))
                },
                ie(s.name || s.url),
                3
                /* TEXT, CLASS */
              ),
              e.removable ? (h(), S("div", {
                key: 0,
                class: v(e.n("file-close")),
                onClick: Wn((u) => e.handleRemove(s), ["stop"])
              }, [
                G(o, {
                  class: v(e.n("file-close-icon")),
                  "var-uploader-cover": "",
                  name: "delete"
                }, null, 8, ["class"])
              ], 10, ET)) : q("v-if", !0),
              s.cover ? (h(), S("img", {
                key: 1,
                role: "img",
                class: v(e.n("file-cover")),
                style: X({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, IT)) : q("v-if", !0),
              N(
                "div",
                {
                  class: v(e.n("file-indicator"))
                },
                [
                  N(
                    "div",
                    {
                      class: v(
                        e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])
                      ),
                      style: X({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                2
                /* CLASS */
              )
            ], 10, TT)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Ae((h(), S("div", {
            key: 0,
            ref: "actionRef",
            class: v(
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
              class: v(e.n("action-input")),
              multiple: e.multiple,
              accept: e.accept,
              capture: e.capture,
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
              onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s)),
              onClick: n[1] || (n[1] = Wn(() => {
              }, ["stop"]))
            }, null, 42, DT),
            A(e.$slots, "default", {}, () => [
              G(o, {
                class: v(e.n("action-icon")),
                "var-uploader-cover": "",
                name: "plus"
              }, null, 8, ["class"]),
              G(t, {
                hovering: e.hovering && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly,
                focusing: e.isFocusing && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly
              }, null, 8, ["hovering", "focusing"])
            ])
          ], 42, BT)), [
            [i, {
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default
            }],
            [l, e.handleHovering, "desktop"]
          ]) : q("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      G(r, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, tt({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: ce(() => [
            A(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"]),
      G(a, {
        class: v(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[5] || (n[5] = (s) => e.showPreview = s),
        onClosed: n[6] || (n[6] = (s) => e.currentPreview = null)
      }, {
        default: ce(() => {
          var s, u;
          return [
            e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (h(), S("video", {
              key: 0,
              class: v(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (u = e.currentPreview) == null ? void 0 : u.url
            }, null, 10, MT)) : q("v-if", !0)
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
const Vh = _({
  name: ST,
  directives: { Ripple: nn, Hover: In },
  components: {
    VarIcon: Ze,
    VarPopup: Oo,
    VarFormDetails: zn,
    VarHoverOverlay: Rn
  },
  props: Ah,
  setup(e) {
    const n = $(!1), o = $(null), t = $(null), r = $(!1), a = $(null), i = I(() => {
      const {
        maxlength: F,
        modelValue: { length: Z }
      } = e;
      return En(F) ? `${Z} / ${F}` : "";
    }), { form: l, bindForm: s } = Fn(), {
      errorMessage: u,
      validateWithTrigger: c,
      validate: d,
      // expose
      resetValidation: f
    } = Ln(), { hovering: p, handleHovering: g } = _n(), m = I(() => {
      const { modelValue: F, hideList: Z } = e;
      return Z ? [] : F;
    });
    let k = !1;
    const w = {
      getSuccess: H,
      getError: Y,
      getLoading: j
    };
    C(s, {
      validate: ye,
      resetValidation: f,
      reset: Ee
    }), je(() => window, "keydown", b), je(() => window, "keyup", P), de(
      () => e.modelValue,
      () => {
        !k && pe("onChange"), k = !1;
      },
      { deep: !0 }
    );
    function b(F) {
      n.value && ((F.key === " " || F.key === "Enter") && F.preventDefault(), F.key === "Enter" && o.value.click());
    }
    function P(F) {
      !n.value || F.key !== " " || (F.preventDefault(), o.value.click());
    }
    function z(F) {
      const { disabled: Z, previewed: oe, preventDefaultPreview: me, onPreview: D } = e;
      if (l != null && l.disabled.value || Z || !oe || (C(D, _e(F)), me))
        return;
      const { url: K } = F;
      if (Zu(K)) {
        jt(K);
        return;
      }
      Ju(K) && (a.value = F, r.value = !0);
    }
    function O(F) {
      return {
        id: OT++,
        url: "",
        cover: "",
        name: F.name,
        file: F,
        progress: 0
      };
    }
    function B(F) {
      const Z = F.target, { files: oe } = Z;
      return Array.from(oe);
    }
    function T(F) {
      return kr(this, null, function* () {
        const Z = F.file;
        if (e.resolveType === "default" && Z.type.startsWith("image") || e.resolveType === "data-url") {
          const me = yield pg(Z);
          F.cover = me, F.url = me;
        }
        return F;
      });
    }
    function E(F) {
      return F.map(T);
    }
    function M(F) {
      const { onBeforeRead: Z } = e;
      return F.map(
        (oe) => new Promise((me) => {
          Z || me({
            valid: !0,
            varFile: oe
          });
          const D = Co(C(Z, _e(oe)));
          Promise.all(D).then((K) => {
            me({
              valid: K.every(Boolean),
              varFile: oe
            });
          });
        })
      );
    }
    function R(F) {
      return kr(this, null, function* () {
        const { maxsize: Z, maxlength: oe, modelValue: me, onOversize: D, onAfterRead: K, onBeforeFilter: fe, readonly: Se, disabled: Fe } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || Fe || Se)
          return;
        const Me = (ke) => ke.filter((Ie) => Ie.file.size > L(Z) ? (C(D, _e(Ie)), !1) : !0), on = (ke) => {
          const Ie = Math.min(ke.length, L(oe) - me.length);
          return ke.slice(0, Ie);
        }, ln = (ke) => kr(this, null, function* () {
          if (!fe)
            return ke;
          const Ie = Co(fe);
          for (const Je of Ie)
            ke = yield Je(ke);
          return ke;
        });
        let ve = B(F).map(O);
        ve = yield ln(ve), ve = Z != null ? Me(ve) : ve, ve = oe != null ? on(ve) : ve;
        const We = yield Promise.all(E(ve)), ue = (yield Promise.all(M(We))).filter(({ valid: ke }) => ke).map(({ varFile: ke }) => ke);
        C(e["onUpdate:modelValue"], [...me, ...ue]), F.target.value = "", ue.forEach((ke) => C(K, _e(ke)));
      });
    }
    function W(F) {
      return kr(this, null, function* () {
        const { disabled: Z, readonly: oe, modelValue: me, onBeforeRemove: D, onRemove: K } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || Z || oe)
          return;
        if (D) {
          const Se = Co(C(D, _e(F)));
          if ((yield Promise.all(Se)).some((Fe) => !Fe))
            return;
        }
        const fe = me.filter((Se) => Se !== F);
        C(K, _e(F)), pe("onRemove"), C(e["onUpdate:modelValue"], fe);
      });
    }
    function U(F) {
      if (!(l != null && l.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          C(e.onClickAction, le, F);
          return;
        }
        le();
      }
    }
    function H() {
      return e.modelValue.filter((F) => F.state === "success");
    }
    function Y() {
      return e.modelValue.filter((F) => F.state === "error");
    }
    function j() {
      return e.modelValue.filter((F) => F.state === "loading");
    }
    function le() {
      t.value.click();
    }
    function ee() {
      a.value = null, r.value = !1, jt.close();
    }
    function pe(F) {
      Ue(() => {
        const { validateTrigger: Z, rules: oe, modelValue: me } = e;
        c(Z, F, oe, me, w);
      });
    }
    function ye() {
      return d(e.rules, e.modelValue, w);
    }
    function Ee() {
      k = !0, C(e["onUpdate:modelValue"], []), f();
    }
    return {
      input: t,
      actionRef: o,
      files: m,
      showPreview: r,
      currentPreview: a,
      errorMessage: u,
      maxlengthText: i,
      hovering: p,
      isFocusing: n,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: PT,
      classes: zT,
      formatElevation: un,
      toNumber: L,
      handleHovering: g,
      isHTMLSupportVideo: Ju,
      isHTMLSupportImage: Zu,
      preview: z,
      handleChange: R,
      handleRemove: W,
      getSuccess: H,
      getError: Y,
      getLoading: j,
      validate: ye,
      resetValidation: f,
      reset: Ee,
      chooseFile: le,
      closePreview: ee,
      handleActionClick: U,
      toSizeUnit: ze
    };
  }
});
Vh.render = NT;
var Ti = Vh;
te(Ti);
ae(Ti, Ah);
const VE = Ti;
var ps = Ti;
const Rh = {
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
var AT = Object.defineProperty, VT = Object.defineProperties, RT = Object.getOwnPropertyDescriptors, Ad = Object.getOwnPropertySymbols, LT = Object.prototype.hasOwnProperty, FT = Object.prototype.propertyIsEnumerable, Vd = (e, n, o) => n in e ? AT(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, HT = (e, n) => {
  for (var o in n || (n = {}))
    LT.call(n, o) && Vd(e, o, n[o]);
  if (Ad)
    for (var o of Ad(n))
      FT.call(n, o) && Vd(e, o, n[o]);
  return e;
}, UT = (e, n) => VT(e, RT(n)), Rd = (e, n, o) => new Promise((t, r) => {
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
const { name: YT, n: jT, classes: WT } = x("watermark"), KT = { ref: "svgRef" }, qT = ["viewBox", "width", "height"], XT = ["width", "height"], GT = ["href", "xlink:href", "x", "y", "width", "height"];
function ZT(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      A(e.$slots, "default"),
      (h(), Ce(oo, {
        to: "body",
        disabled: !e.fullscreen
      }, [
        N(
          "div",
          {
            ref: "containerRef",
            class: v(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
            style: X({
              backgroundImage: `url(${e.watermarkUrl})`,
              zIndex: e.zIndex
            })
          },
          [
            Ae(N(
              "div",
              KT,
              [
                (h(), S("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  viewBox: `0 0 ${e.width + e.gapX} ${e.height + e.gapY}`,
                  width: `${e.width + e.gapX}`,
                  height: `${e.height + e.gapY}`,
                  style: X({
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
                    N(
                      "div",
                      {
                        xmlns: "http://www.w3.org/1999/xhtml",
                        style: X({
                          transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
                          transformOrigin: "center"
                        })
                      },
                      [
                        A(e.$slots, "content", {}, () => [
                          N(
                            "span",
                            {
                              style: X(UT(HT({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
                            },
                            ie(e.content),
                            5
                            /* TEXT, STYLE */
                          )
                        ])
                      ],
                      4
                      /* STYLE */
                    )
                  ], 8, XT)) : q("v-if", !0),
                  !e.$slots.content && e.image ? (h(), S("image", {
                    key: 1,
                    href: e.imageUrl,
                    "xlink:href": e.imageUrl,
                    x: e.offsetX,
                    y: e.offsetY,
                    width: e.width,
                    height: e.height,
                    style: X({
                      transform: `rotate(${e.rotate}deg)`,
                      transformOrigin: "center"
                    })
                  }, null, 12, GT)) : q("v-if", !0)
                ], 12, qT))
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
const Lh = _({
  name: YT,
  props: Rh,
  setup(e, { slots: n }) {
    const o = $(""), t = $(""), r = $(""), a = $(null), i = $(null);
    de(
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
    ), Bo(d), qt(c);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return Rd(this, null, function* () {
        return new Promise((f) => {
          const p = document.createElement("canvas"), g = p.getContext("2d"), m = new Image();
          m.crossOrigin = "anonymous", m.referrerPolicy = "no-referrer", m.src = e.image, m.onload = () => {
            p.width = m.width, p.height = m.height, g.drawImage(m, 0, 0), f(p.toDataURL());
          };
        });
      });
    }
    function u(f) {
      const p = new Blob([f], {
        type: "image/svg+xml"
      });
      return URL.createObjectURL(p);
    }
    function c() {
      o.value && URL.revokeObjectURL(o.value);
    }
    function d() {
      return Rd(this, null, function* () {
        r.value = Ko(i.value).color, e.image && (t.value = yield s()), yield Ue(), c(), o.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: o,
      imageUrl: t,
      textColor: r,
      n: jT,
      classes: WT,
      showContent: l,
      resize: d
    };
  }
});
Lh.render = ZT;
var Ei = Lh;
te(Ei);
ae(Ei, Rh);
const RE = Ei;
var ms = Ei;
const JT = "3.7.1";
function QT(e) {
  ji.install && e.use(ji), Wi.install && e.use(Wi), Ki.install && e.use(Ki), Gi.install && e.use(Gi), Qi.install && e.use(Qi), _i.install && e.use(_i), xi.install && e.use(xi), Dr.install && e.use(Dr), el.install && e.use(el), nl.install && e.use(nl), ol.install && e.use(ol), tl.install && e.use(tl), On.install && e.use(On), rl.install && e.use(rl), al.install && e.use(al), il.install && e.use(il), st.install && e.use(st), ll.install && e.use(ll), Mr.install && e.use(Mr), ul.install && e.use(ul), cl.install && e.use(cl), dl.install && e.use(dl), fl.install && e.use(fl), vl.install && e.use(vl), An.install && e.use(An), pl.install && e.use(pl), bl.install && e.use(bl), Sl.install && e.use(Sl), zl.install && e.use(zl), Ol.install && e.use(Ol), Tl.install && e.use(Tl), Fr.install && e.use(Fr), El.install && e.use(El), Il.install && e.use(Il), Mt.install && e.use(Mt), Bl.install && e.use(Bl), Dl.install && e.use(Dl), zn.install && e.use(zn), Ml.install && e.use(Ml), In.install && e.use(In), Rn.install && e.use(Rn), Ze.install && e.use(Ze), Nl.install && e.use(Nl), jt.install && e.use(jt), Al.install && e.use(Al), Vl.install && e.use(Vl), Nt.install && e.use(Nt), Ft.install && e.use(Ft), Rl.install && e.use(Rl), Ll.install && e.use(Ll), dt.install && e.use(dt), Fl.install && e.use(Fl), Ui.install && e.use(Ui), Hl.install && e.use(Hl), Rt.install && e.use(Rt), ut.install && e.use(ut), Lt.install && e.use(Lt), Ur.install && e.use(Ur), Ul.install && e.use(Ul), Yl.install && e.use(Yl), jl.install && e.use(jl), Wl.install && e.use(Wl), Oo.install && e.use(Oo), Kl.install && e.use(Kl), ql.install && e.use(ql), Yr.install && e.use(Yr), Xl.install && e.use(Xl), Gl.install && e.use(Gl), Zl.install && e.use(Zl), nn.install && e.use(nn), Jl.install && e.use(Jl), Ql.install && e.use(Ql), _l.install && e.use(_l), xl.install && e.use(xl), ns.install && e.use(ns), os.install && e.use(os), ts.install && e.use(ts), rs.install && e.use(rs), pt.install && e.use(pt), as.install && e.use(as), Ut.install && e.use(Ut), Yt.install && e.use(Yt), is.install && e.use(is), ls.install && e.use(ls), ss.install && e.use(ss), us.install && e.use(us), cs.install && e.use(cs), ds.install && e.use(ds), fs.install && e.use(fs), vs.install && e.use(vs), Hr.install && e.use(Hr), ps.install && e.use(ps), ms.install && e.use(ms);
}
const LE = {
  version: JT,
  install: QT,
  ActionSheet: ji,
  Alert: Wi,
  AppBar: Ki,
  AutoComplete: Gi,
  Avatar: Qi,
  AvatarGroup: _i,
  BackTop: xi,
  Badge: Dr,
  BottomNavigation: el,
  BottomNavigationItem: nl,
  Breadcrumb: ol,
  Breadcrumbs: tl,
  Button: On,
  ButtonGroup: rl,
  Card: al,
  Cell: il,
  Checkbox: st,
  CheckboxGroup: ll,
  Chip: Mr,
  Code: ul,
  Col: cl,
  Collapse: dl,
  CollapseItem: fl,
  CollapseTransition: vl,
  Context: An,
  CountTo: pl,
  Countdown: bl,
  Counter: Sl,
  DatePicker: zl,
  Dialog: Ol,
  Divider: Tl,
  Drag: Fr,
  Ellipsis: El,
  Fab: Il,
  FieldDecorator: Mt,
  FloatingPanel: Bl,
  Form: Dl,
  FormDetails: zn,
  HighlighterProvider: Ml,
  Hover: In,
  HoverOverlay: Rn,
  Icon: Ze,
  Image: Nl,
  ImagePreview: jt,
  IndexAnchor: Al,
  IndexBar: Vl,
  Input: Nt,
  Lazy: Ft,
  Link: Rl,
  List: Ll,
  Loading: dt,
  LoadingBar: Fl,
  Locale: Ui,
  LocaleProvider: Hl,
  Menu: Rt,
  MenuOption: ut,
  MenuSelect: Lt,
  Option: Ur,
  Overlay: Ul,
  Pagination: Yl,
  Paper: jl,
  Picker: Wl,
  Popup: Oo,
  Progress: Kl,
  PullRefresh: ql,
  Radio: Yr,
  RadioGroup: Xl,
  Rate: Gl,
  Result: Zl,
  Ripple: nn,
  Row: Jl,
  Select: Ql,
  Skeleton: _l,
  Slider: xl,
  Snackbar: ns,
  Space: os,
  Step: ts,
  Steps: rs,
  Sticky: pt,
  StyleProvider: as,
  Swipe: Ut,
  SwipeItem: Yt,
  Switch: is,
  Tab: ls,
  TabItem: ss,
  Table: us,
  Tabs: cs,
  TabsItems: ds,
  Themes: fs,
  TimePicker: vs,
  Tooltip: Hr,
  Uploader: ps,
  Watermark: ms
};
export {
  ji as ActionSheet,
  Wi as Alert,
  Ki as AppBar,
  Gi as AutoComplete,
  Qi as Avatar,
  _i as AvatarGroup,
  xi as BackTop,
  Dr as Badge,
  el as BottomNavigation,
  nl as BottomNavigationItem,
  ol as Breadcrumb,
  tl as Breadcrumbs,
  On as Button,
  rl as ButtonGroup,
  al as Card,
  il as Cell,
  st as Checkbox,
  ll as CheckboxGroup,
  Mr as Chip,
  ul as Code,
  cl as Col,
  dl as Collapse,
  fl as CollapseItem,
  vl as CollapseTransition,
  An as Context,
  pl as CountTo,
  bl as Countdown,
  Sl as Counter,
  zl as DatePicker,
  Ol as Dialog,
  Tl as Divider,
  Fr as Drag,
  El as Ellipsis,
  Il as Fab,
  Mt as FieldDecorator,
  Bl as FloatingPanel,
  Dl as Form,
  zn as FormDetails,
  Ml as HighlighterProvider,
  In as Hover,
  Rn as HoverOverlay,
  Ze as Icon,
  Nl as Image,
  jt as ImagePreview,
  Al as IndexAnchor,
  Vl as IndexBar,
  Nt as Input,
  Ft as Lazy,
  Rl as Link,
  Ll as List,
  dt as Loading,
  Fl as LoadingBar,
  Ui as Locale,
  Hl as LocaleProvider,
  Rt as Menu,
  ut as MenuOption,
  Lt as MenuSelect,
  Ur as Option,
  Ul as Overlay,
  Ji as PIXEL,
  Yl as Pagination,
  jl as Paper,
  Wl as Picker,
  Oo as Popup,
  Kl as Progress,
  ql as PullRefresh,
  Yr as Radio,
  Xl as RadioGroup,
  Gl as Rate,
  Zl as Result,
  nn as Ripple,
  Jl as Row,
  ah as SNACKBAR_TYPE,
  Ql as Select,
  _l as Skeleton,
  xl as Slider,
  ns as Snackbar,
  os as Space,
  ts as Step,
  rs as Steps,
  pt as Sticky,
  as as StyleProvider,
  Ut as Swipe,
  Yt as SwipeItem,
  is as Switch,
  ls as Tab,
  ss as TabItem,
  us as Table,
  cs as Tabs,
  ds as TabsItems,
  fs as Themes,
  vs as TimePicker,
  Hr as Tooltip,
  ps as Uploader,
  ms as Watermark,
  i5 as _ActionSheetComponent,
  l5 as _AlertComponent,
  s5 as _AppBarComponent,
  h5 as _AutoCompleteComponent,
  b5 as _AvatarComponent,
  y5 as _AvatarGroupComponent,
  w5 as _BackTopComponent,
  C5 as _BadgeComponent,
  S5 as _BottomNavigationComponent,
  P5 as _BottomNavigationItemComponent,
  z5 as _BreadcrumbComponent,
  O5 as _BreadcrumbsComponent,
  $5 as _ButtonComponent,
  T5 as _ButtonGroupComponent,
  E5 as _CardComponent,
  I5 as _CellComponent,
  v5 as _CheckboxComponent,
  B5 as _CheckboxGroupComponent,
  D5 as _ChipComponent,
  M5 as _CodeComponent,
  N5 as _ColComponent,
  A5 as _CollapseComponent,
  V5 as _CollapseItemComponent,
  R5 as _CollapseTransitionComponent,
  xT as _ContextComponent,
  L5 as _CountToComponent,
  F5 as _CountdownComponent,
  H5 as _CounterComponent,
  Y5 as _DatePickerComponent,
  j5 as _DialogComponent,
  W5 as _DividerComponent,
  K5 as _DragComponent,
  X5 as _EllipsisComponent,
  G5 as _FabComponent,
  c5 as _FieldDecoratorComponent,
  Z5 as _FloatingPanelComponent,
  J5 as _FormComponent,
  u5 as _FormDetailsComponent,
  Q5 as _HighlighterProviderComponent,
  r5 as _HoverComponent,
  t5 as _HoverOverlayComponent,
  o5 as _IconComponent,
  _5 as _ImageComponent,
  nE as _ImagePreviewComponent,
  oE as _IndexAnchorComponent,
  tE as _IndexBarComponent,
  d5 as _InputComponent,
  g5 as _LazyComponent,
  rE as _LinkComponent,
  aE as _ListComponent,
  iE as _LoadingBarComponent,
  k5 as _LoadingComponent,
  a5 as _LocaleComponent,
  lE as _LocaleProviderComponent,
  f5 as _MenuComponent,
  p5 as _MenuOptionComponent,
  m5 as _MenuSelectComponent,
  sE as _OptionComponent,
  uE as _OverlayComponent,
  cE as _PaginationComponent,
  dE as _PaperComponent,
  fE as _PickerComponent,
  n5 as _PopupComponent,
  vE as _ProgressComponent,
  pE as _PullRefreshComponent,
  mE as _RadioComponent,
  hE as _RadioGroupComponent,
  gE as _RateComponent,
  bE as _ResultComponent,
  e5 as _RippleComponent,
  yE as _RowComponent,
  kE as _SelectComponent,
  $E as _SkeletonComponent,
  wE as _SliderComponent,
  CE as _SnackbarComponent,
  SE as _SpaceComponent,
  PE as _StepComponent,
  zE as _StepsComponent,
  U5 as _StickyComponent,
  OE as _StyleProviderComponent,
  x5 as _SwipeComponent,
  eE as _SwipeItemComponent,
  TE as _SwitchComponent,
  EE as _TabComponent,
  IE as _TabItemComponent,
  BE as _TableComponent,
  DE as _TabsComponent,
  ME as _TabsItemsComponent,
  NE as _ThemesComponent,
  AE as _TimePickerComponent,
  q5 as _TooltipComponent,
  VE as _UploaderComponent,
  RE as _WatermarkComponent,
  bf as actionSheetProps,
  Is as add,
  zf as alertProps,
  Tf as appBarProps,
  dv as avatarGroupProps,
  uv as avatarProps,
  gv as backTopProps,
  yv as badgeProps,
  Sv as bottomNavigationItemProps,
  $v as bottomNavigationProps,
  zv as breadcrumbProps,
  Ev as breadcrumbsProps,
  Bv as buttonGroupProps,
  pv as buttonProps,
  Mv as cardProps,
  Av as cellProps,
  Rv as checkboxGroupProps,
  qf as checkboxProps,
  Fv as chipProps,
  Uv as codeProps,
  jv as colProps,
  Zv as collapseItemProps,
  Xv as collapseProps,
  _v as collapseTransitionProps,
  ep as countToProps,
  op as countdownProps,
  mp as counterProps,
  Cf as currentMessage,
  Sp as datePickerProps,
  LE as default,
  dn as defaultLazyOptions,
  Bp as dialogProps,
  Mp as dividerProps,
  Ap as dragProps,
  Fp as ellipsisProps,
  yf as enUS,
  $f as faIR,
  Up as fabProps,
  Qr as fieldDecoratorProps,
  If as formDetailsProps,
  Wp as formProps,
  sf as hoverOverlayProps,
  en as iconProps,
  rv as imageCache,
  Qp as imagePreviewProps,
  Xp as imageProps,
  em as indexAnchorProps,
  om as indexBarProps,
  Ms as inputProps,
  QT as install,
  rm as linkProps,
  im as listProps,
  X6 as loadingBarProps,
  lo as loadingProps,
  Jf as menuOptionProps,
  Ns as menuProps,
  _f as menuSelectProps,
  Sf as merge,
  wf as messages,
  km as optionProps,
  wm as overlayProps,
  Cm as paginationProps,
  Pm as paperProps,
  Om as pickerProps,
  yt as popupProps,
  Em as progressProps,
  Bm as pullRefreshProps,
  Vm as radioGroupProps,
  Mm as radioProps,
  Lm as rateProps,
  qm as resultProps,
  Gm as rowProps,
  Jm as selectProps,
  _m as skeletonProps,
  eh as sliderProps,
  xs as snackbarProps,
  sh as spaceProps,
  uh as stepProps,
  fh as stepsProps,
  Et as stickyProps,
  ph as styleProviderProps,
  Gs as swipeProps,
  hh as switchProps,
  tn as t,
  $h as tabItemProps,
  bh as tabProps,
  Ch as tableProps,
  Oh as tabsItemsProps,
  Ph as tabsProps,
  Eh as timePickerProps,
  Rp as tooltipProps,
  Ah as uploaderProps,
  Bs as use,
  _n as useHoverOverlay,
  Es as useLocale,
  JT as version,
  Rh as watermarkProps,
  Os as zhCN,
  kf as zhHK,
  Ts as zhTW
};
