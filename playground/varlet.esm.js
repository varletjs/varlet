import { reactive as Je, onMounted as Yo, nextTick as Ke, onActivated as To, isRef as fh, watch as de, onBeforeUnmount as Ur, onDeactivated as pt, onUnmounted as jt, inject as md, getCurrentInstance as jo, computed as B, ref as k, unref as hd, provide as gd, isVNode as ph, defineComponent as _, h as Hr, Comment as vh, Fragment as Re, createApp as mh, onBeforeMount as hh, createVNode as G, Teleport as no, Transition as Qe, withDirectives as Ie, vShow as Xn, mergeProps as He, openBlock as h, createBlock as Oe, resolveDynamicComponent as vt, normalizeClass as p, normalizeStyle as q, createElementBlock as P, resolveComponent as ne, resolveDirective as Ye, createCommentVNode as X, createElementVNode as I, toDisplayString as re, withCtx as fe, renderSlot as N, renderList as _e, onUpdated as Wt, createTextVNode as De, pushScopeId as Wo, popScopeId as Ko, withModifiers as Nn, normalizeProps as $o, guardReactiveProps as Kt, vModelText as gh, createSlots as Et, withKeys as Ls, TransitionGroup as bh } from "vue";
const bd = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, _8 = Je(bd);
var An = Je(bd), yh = Object.defineProperty, kh = Object.defineProperties, $h = Object.getOwnPropertyDescriptors, Rs = Object.getOwnPropertySymbols, wh = Object.prototype.hasOwnProperty, Ch = Object.prototype.propertyIsEnumerable, Fs = (e, n, o) => n in e ? yh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Sh = (e, n) => {
  for (var o in n || (n = {}))
    wh.call(n, o) && Fs(e, o, n[o]);
  if (Rs)
    for (var o of Rs(n))
      Ch.call(n, o) && Fs(e, o, n[o]);
  return e;
}, Ph = (e, n) => kh(e, $h(n)), hn = (e) => typeof e == "string", ts = (e) => typeof e == "boolean", On = (e) => typeof e == "number", yd = (e) => On(e) || hn(e) && /^[-+]?\d+$/.test(e), tt = (e) => Object.prototype.toString.call(e) === "[object Object]", zh = (e) => typeof e == "object" && e !== null, Eo = (e) => typeof e == "function", Ge = (e) => Array.isArray(e), Oh = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Qn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, kd = (e) => e === window, Th = () => oo() && "ontouchstart" in window, oo = () => typeof window < "u", kr = () => oo() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), { hasOwnProperty: Eh } = Object.prototype, $r = (e, n) => Eh.call(e, n), Us = (e) => [...new Set(e)], Vo = (e) => Ge(e) ? e : [e], rt = (e, n) => {
  if (e.length) {
    const o = e.indexOf(n);
    if (o > -1)
      return e.splice(o, 1);
  }
}, Dh = (e) => e.filter((n) => n != null), Bh = (e, n, o = "start") => {
  let t = o === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && t >= 0 && t <= e.length - 1; ) {
    if (n(e[t], t, e))
      return [e[t], t];
    o === "start" ? t++ : t--;
  }
  return [null, -1];
}, Ih = (...e) => e.map((n) => {
  if (Ge(n)) {
    const [o, t, r = null] = n;
    return o ? t : r;
  }
  return n;
}), $d = () => typeof globalThis < "u" ? globalThis : oo() ? window : typeof global < "u" ? global : self, Dt = (e) => {
  const n = $d();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}, Hs = (e) => {
  const n = $d();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}, mr = () => new Promise((e) => {
  Dt(e);
}), kn = () => new Promise((e) => {
  Dt(() => {
    Dt(e);
  });
}), qo = (e) => window.getComputedStyle(e), an = (e) => {
  if (kd(e)) {
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
    return Ph(Sh({}, t), {
      toJSON: () => t
    });
  }
  return e.getBoundingClientRect();
}, Mh = (e) => {
  const { top: n, bottom: o, left: t, right: r } = an(e), { width: a, height: i } = an(window), l = t <= a && r >= 0, s = n <= i && o >= 0;
  return l && s;
}, Ah = (e) => new Promise((n) => {
  const o = new FileReader();
  o.onload = () => {
    n(o.result);
  }, o.readAsDataURL(e);
}), Ne = (e) => {
  e.cancelable !== !1 && e.preventDefault();
}, Ro = (e) => {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}, rs = (e) => {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}, as = (e, n = 200) => {
  let o, t = 0;
  return function r(...a) {
    const i = Date.now(), l = i - t;
    t || (t = i), o && clearTimeout(o), l >= n ? (e.apply(this, a), t = i) : o = setTimeout(() => {
      r.apply(this, a);
    }, n - l);
  };
};
function S(e, ...n) {
  if (Ge(e))
    return e.map((o) => o(...n));
  if (e)
    return e(...n);
}
var F = (e) => e == null ? 0 : hn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : ts(e) ? Number(e) : e, Mn = (e, n, o) => Math.min(o, Math.max(n, e)), Nh = (e, n) => Mn(e, 0, n.length - 1), Vh = (e) => is(e).replace(e.charAt(0), e.charAt(0).toUpperCase()), is = (e) => e.replace(/-(\w)/g, (n, o) => o.toUpperCase()), wd = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
function Lh(e) {
  return (n) => {
    const o = `${e}-${n}`, t = (r) => r ? r[0] === "$" ? r.replace("$", e) : r.startsWith("--") ? `${o}${r}` : `${o}__${r}` : o;
    return {
      name: Vh(o),
      n: t,
      classes: Ih
    };
  };
}
var Rh = Object.defineProperty, wr = Object.getOwnPropertySymbols, Cd = Object.prototype.hasOwnProperty, Sd = Object.prototype.propertyIsEnumerable, Ys = (e, n, o) => n in e ? Rh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Fh = (e, n) => {
  for (var o in n || (n = {}))
    Cd.call(n, o) && Ys(e, o, n[o]);
  if (wr)
    for (var o of wr(n))
      Sd.call(n, o) && Ys(e, o, n[o]);
  return e;
}, Uh = (e, n) => {
  var o = {};
  for (var t in e)
    Cd.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && wr)
    for (var t of wr(e))
      n.indexOf(t) < 0 && Sd.call(e, t) && (o[t] = e[t]);
  return o;
};
function fn(e) {
  let n = !1;
  Yo(() => {
    e(), Ke(() => {
      n = !0;
    });
  }), To(() => {
    n && e();
  });
}
function We(e, n, o, t = {}) {
  if (!oo())
    return;
  const { passive: r = !1, capture: a = !1 } = t;
  let i = !1, l = !1;
  const s = (v) => Eo(v) ? v() : hd(v), u = (v) => {
    if (i || l)
      return;
    const y = s(v);
    y && (y.addEventListener(n, o, {
      passive: r,
      capture: a
    }), i = !0);
  }, c = (v) => {
    if (!i || l)
      return;
    const y = s(v);
    y && (y.removeEventListener(n, o, {
      capture: a
    }), i = !1);
  };
  let d;
  fh(e) && (d = de(
    () => e.value,
    (v, y) => {
      c(y), u(v);
    }
  ));
  const f = () => {
    d == null || d(), c(e), l = !0;
  };
  return fn(() => {
    u(e);
  }), Ur(() => {
    c(e);
  }), pt(() => {
    c(e);
  }), f;
}
function Pd(e, n, o) {
  if (!oo())
    return;
  We(document, n, (r) => {
    const a = Eo(e) ? e() : hd(e);
    a && !a.contains(r.target) && o(r);
  });
}
function qt(e) {
  let n = !1;
  pt(() => {
    n = !0, e();
  }), jt(() => {
    n || e();
  });
}
function zd(e) {
  const n = jo();
  return e in n.provides;
}
function gn(e) {
  if (!zd(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const o = md(e), { childInstances: t, collect: r, clear: a } = o, i = Uh(o, ["childInstances", "collect", "clear"]), l = jo();
  return {
    index: B(() => t.indexOf(l)),
    parentProvider: i,
    bindParent: (c) => {
      Yo(() => {
        Ke().then(() => {
          r(l, c);
        });
      }), Ur(() => {
        Ke().then(() => {
          a(l, c);
        });
      });
    }
  };
}
function Hh(e) {
  const n = [], o = (t) => {
    if (t != null && t.component) {
      o(t == null ? void 0 : t.component.subTree);
      return;
    }
    Array.isArray(t == null ? void 0 : t.children) && t.children.forEach((r) => {
      ph(r) && (n.push(r), o(r));
    });
  };
  return o(e), n;
}
function bn(e) {
  const n = jo(), o = Je([]), t = [], r = B(() => o.length), a = () => {
    const u = Hh(n.subTree);
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
      gd(e, Fh({
        childInstances: o,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function to(e) {
  We(() => window, "resize", e, { passive: !0 }), We(() => window, "orientationchange", e, { passive: !0 });
}
function Yh(e, n) {
  const o = k(!1);
  return de(
    e,
    (t) => {
      n === t && (o.value = !0);
    },
    { immediate: !0 }
  ), o;
}
function jh(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function mt() {
  const e = k(0), n = k(0), o = k(0), t = k(0), r = k(0), a = k(0), i = k(0), l = k(0), s = k(0), u = k(0), c = k(), d = k(!1), f = k(!1), v = k(0), y = k(0);
  let m = null;
  const b = () => {
    e.value = 0, n.value = 0, o.value = 0, t.value = 0, r.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, c.value = void 0, d.value = !1, f.value = !1, v.value = 0, y.value = 0;
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
    distance: y,
    resetTouch: b,
    startTouch: (z) => {
      b();
      const { clientX: L, clientY: T } = z.touches[0];
      e.value = L, n.value = T, i.value = L, l.value = T, d.value = !0, v.value = performance.now(), f.value = !1, m && window.cancelAnimationFrame(m);
    },
    moveTouch: (z) => {
      const { clientX: L, clientY: T } = z.touches[0];
      f.value = !0, o.value = L - e.value, t.value = T - n.value, r.value = Math.abs(o.value), a.value = Math.abs(t.value), y.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = L - i.value, u.value = T - l.value, c.value || (c.value = jh(r.value, a.value)), i.value = L, l.value = T;
    },
    endTouch: () => {
      d.value = !1, m = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (z) => Ro(z) === 0 && t.value > 0,
    isReachBottom: (z, L = 1) => {
      const { scrollHeight: T, clientHeight: E, scrollTop: D } = z, M = Math.abs(T - D - E);
      return t.value < 0 && M <= L;
    }
  };
}
function Od() {
  const e = jo(), n = wd(e.type.name), o = k(void 0);
  return Yo(() => {
    o.value = `${n}-${e.uid}`;
  }), o;
}
function Wh(e = {}) {
  const { initialWidth: n = 0, initialHeight: o = 0 } = e, t = k(n), r = k(o), a = () => {
    oo() && (t.value = window.innerWidth, r.value = window.innerHeight);
  };
  return fn(a), to(a), {
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
    return B({
      get() {
        return s();
      },
      set(d) {
        i ? i(l, d) : S(e[l], d);
      }
    });
  const u = k(s());
  let c = !0;
  return de(
    () => e[n],
    () => {
      c = !1, u.value = s(), Ke(() => {
        c = !0;
      });
    }
  ), de(
    () => u.value,
    (d) => {
      c && (i ? i(l, d) : S(e[l], d));
    }
  ), u;
}
var Kh = Object.defineProperty, qh = Object.defineProperties, Gh = Object.getOwnPropertyDescriptors, js = Object.getOwnPropertySymbols, Xh = Object.prototype.hasOwnProperty, Zh = Object.prototype.propertyIsEnumerable, Ws = (e, n, o) => n in e ? Kh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ii = (e, n) => {
  for (var o in n || (n = {}))
    Xh.call(n, o) && Ws(e, o, n[o]);
  if (js)
    for (var o of js(n))
      Zh.call(n, o) && Ws(e, o, n[o]);
  return e;
}, Jh = (e, n) => qh(e, Gh(n)), Ks = (e, n, o) => new Promise((t, r) => {
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
function Be(e, n) {
  return Array.isArray(n) ? n.reduce((o, t) => (o[t] = e[t], o), {}) : e[n];
}
function te(e, n) {
  const o = n ?? e;
  return o.install = function(t) {
    const { name: r } = e;
    r && t.component(r, e);
  }, o;
}
function ue(e, n) {
  e.setPropsDefaults = function(o) {
    Object.entries(o).forEach(([t, r]) => {
      const a = n[t];
      if (a != null) {
        if (tt(a)) {
          n[t] = Jh(Ii({}, a), {
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
function Qh(e) {
  const n = mh(e), o = document.createElement("div");
  return document.body.appendChild(o), {
    instance: n.mount(o),
    unmount() {
      n.unmount(), document.body.removeChild(o);
    }
  };
}
function ht(e, n = {}, o = {}) {
  const t = {
    setup() {
      return () => Hr(e, Ii(Ii({}, n), o));
    }
  }, { unmount: r } = Qh(t);
  return { unmountInstance: r };
}
function Td(e) {
  const n = [];
  return e.forEach((o) => {
    if (o.type !== vh) {
      if (o.type === Re && Ge(o.children)) {
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
  const e = k(""), n = (r, a, i) => Ks(this, null, function* () {
    return !Ge(r) || !r.length ? !0 : !(yield Promise.all(r.map((s) => s(a, i)))).some((s) => s !== !0 ? (e.value = String(s), !0) : !1);
  });
  return {
    errorMessage: e,
    validate: n,
    resetValidation: () => {
      e.value = "";
    },
    validateWithTrigger: (r, a, i, l, s) => Ks(this, null, function* () {
      r.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function _h(e) {
  We(() => window, "hashchange", e), We(() => window, "popstate", e);
}
function Go() {
  const e = k(!1);
  return To(() => {
    e.value = !1;
  }), pt(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
const x = Lh("var");
function V(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function dn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
const Ed = _({
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
    return () => hn(e.is) ? Hr(e.tag, e.is) : e.is;
  }
});
var xh = Object.defineProperty, eg = Object.defineProperties, ng = Object.getOwnPropertyDescriptors, qs = Object.getOwnPropertySymbols, og = Object.prototype.hasOwnProperty, tg = Object.prototype.propertyIsEnumerable, Gs = (e, n, o) => n in e ? xh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Dd = (e, n) => {
  for (var o in n || (n = {}))
    og.call(n, o) && Gs(e, o, n[o]);
  if (qs)
    for (var o of qs(n))
      tg.call(n, o) && Gs(e, o, n[o]);
  return e;
}, rg = (e, n) => eg(e, ng(n));
const { n: Bd } = x("ripple"), Xs = 250;
function ag(e) {
  const { zIndex: n, position: o } = qo(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", o === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Zs(e) {
  return "touches" in e;
}
function ig(e, n) {
  const { top: o, left: t } = an(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = Zs(n) ? n.touches[0].clientX - t : r / 2, u = Zs(n) ? n.touches[0].clientY - o : a / 2, c = (r - i * 2) / 2, d = (a - i * 2) / 2, f = s - i, v = u - i;
  return { x: f, y: v, centerX: c, centerY: d, size: l };
}
function ls(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !An.enableRipple)
    return;
  const o = () => {
    n.tasker = null;
    const { x: t, y: r, centerX: a, centerY: i, size: l } = ig(this, e), s = document.createElement("div");
    s.classList.add(Bd()), s.style.opacity = "0", s.style.transform = `translate(${t}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), ag(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(o, 30);
}
function Cr() {
  const e = this._ripple, n = () => {
    const o = this.querySelectorAll(`.${Bd()}`);
    if (!o.length)
      return;
    const t = o[o.length - 1], r = Xs - performance.now() + Number(t.dataset.createdAt);
    window.setTimeout(() => {
      t.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = t.parentNode) == null ? void 0 : a.removeChild(t);
      }, Xs);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Id() {
  if (!Th() || !An.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
let Sr = !1;
function lg(e) {
  Sr || !(e.key === " " || e.key === "Enter") || (ls.call(this, e), Sr = !0);
}
function Js() {
  Sr && (Cr.call(this), Sr = !1);
}
function sg(e, n) {
  var o;
  e._ripple = rg(Dd({
    tasker: null
  }, (o = n.value) != null ? o : {}), {
    removeRipple: Cr.bind(e)
  }), e.addEventListener("touchstart", ls, { passive: !0 }), e.addEventListener("touchmove", Id, { passive: !0 }), e.addEventListener("dragstart", Cr, { passive: !0 }), e.addEventListener("keydown", lg), e.addEventListener("keyup", Js), e.addEventListener("blur", Js), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function ug(e) {
  e.removeEventListener("touchstart", ls), e.removeEventListener("touchmove", Id), e.removeEventListener("dragstart", Cr), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function cg(e, n) {
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
const Md = {
  mounted: sg,
  unmounted: ug,
  updated: cg,
  install(e) {
    e.directive("ripple", this);
  }
}, x8 = Md;
var tn = Md;
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
};
function Ad() {
  Object.keys(An.locks).length <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function er(e) {
  An.locks[e] = 1, Ad();
}
function nr(e) {
  delete An.locks[e], Ad();
}
function Gt(e, n) {
  const { uid: o } = jo();
  n && de(n, (t) => {
    t === !1 ? nr(o) : t === !0 && e() === !0 && er(o);
  }), de(e, (t) => {
    n && n() === !1 || (t === !0 ? er(o) : nr(o));
  }), hh(() => {
    n && n() === !1 || e() === !0 && er(o);
  }), jt(() => {
    n && n() === !1 || e() === !0 && nr(o);
  }), To(() => {
    n && n() === !1 || e() === !0 && er(o);
  }), pt(() => {
    n && n() === !1 || e() === !0 && nr(o);
  });
}
function Xt(e, n) {
  const o = k(An.zIndex);
  return de(
    e,
    (t) => {
      t && (An.zIndex += n, o.value = An.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: o };
}
const co = [];
function ss(e, n) {
  const { uid: o } = jo();
  de(e, (i) => {
    i && !a(o) ? r() : setTimeout(() => {
      rt(co, a(o));
    });
  }), fn(() => {
    e() && r();
  }), qt(() => {
    rt(co, a(o));
  });
  function t() {
    return co.length === 0 ? !0 : (co.sort((i, l) => i.zIndex.value - l.zIndex.value), co[co.length - 1].uid === o);
  }
  function r() {
    a(o) || co.push({ uid: o, zIndex: n });
  }
  function a(i) {
    return co.find((l) => l.uid === i);
  }
  return {
    onStackTop: t
  };
}
const Nd = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Vd() {
  const { bindParent: e, parentProvider: n, index: o } = gn(Nd);
  return {
    index: o,
    popup: n,
    bindPopup: e
  };
}
function dg() {
  const { bindChildren: e, childProviders: n, length: o } = bn(Nd);
  return {
    length: o,
    popupItems: n,
    bindPopupItems: e
  };
}
var fg = Object.defineProperty, Qs = Object.getOwnPropertySymbols, pg = Object.prototype.hasOwnProperty, vg = Object.prototype.propertyIsEnumerable, _s = (e, n, o) => n in e ? fg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, mg = (e, n) => {
  for (var o in n || (n = {}))
    pg.call(n, o) && _s(e, o, n[o]);
  if (Qs)
    for (var o of Qs(n))
      vg.call(n, o) && _s(e, o, n[o]);
  return e;
};
const {
  name: hg,
  n: Rn,
  classes: wi
} = x("popup");
var Yr = _({
  name: hg,
  inheritAttrs: !1,
  props: gt,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = Yh(() => e.show, !0), {
      zIndex: r
    } = Xt(() => e.show, 3), {
      onStackTop: a
    } = ss(() => e.show, r), {
      disabled: i
    } = Go(), {
      bindPopupItems: l
    } = dg();
    Gt(() => e.show, () => e.lockScroll), de(() => e.show, (v) => {
      S(v ? e.onOpen : e.onClose);
    }), l({
      show: B(() => e.show)
    }), We(() => window, "keydown", f), _h(() => S(e.onRouteChange));
    function s() {
      const {
        closeOnClickOverlay: v,
        onClickOverlay: y
      } = e;
      S(y), v && S(e["onUpdate:show"], !1);
    }
    function u() {
      const {
        overlayClass: v = "",
        overlayStyle: y
      } = e;
      return G("div", {
        class: wi(Rn("overlay"), v),
        style: mg({
          zIndex: r.value - 1
        }, y),
        onClick: s
      }, null);
    }
    function c() {
      return Ie(G("div", He({
        class: wi(Rn("content"), Rn(`--${e.position}`), [e.defaultStyle, Rn("--content-background-color")], [e.defaultStyle, Rn("$-elevation--3")], [e.safeArea, Rn("--safe-area")], [e.safeAreaTop, Rn("--safe-area-top")]),
        style: {
          zIndex: r.value
        },
        role: "dialog",
        "aria-modal": "true"
      }, o), [t.value && S(n.default)]), [[Xn, e.show]]);
    }
    function d() {
      return G(Qe, {
        name: Rn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Ie(G("div", {
          class: wi(Rn("$--box"), Rn(), [!e.overlay, Rn("--pointer-events-none")]),
          style: {
            zIndex: r.value - 2
          }
        }, [e.overlay && u(), G(Qe, {
          name: e.transition || Rn(`$-pop-${e.position}`)
        }, {
          default: () => [c()]
        })]), [[Xn, e.show]])]
      });
    }
    function f(v) {
      !a() || v.key !== "Escape" || !e.show || (S(e.onKeyEscape), e.closeOnKeyEscape && (Ne(v), S(e["onUpdate:show"], !1)));
    }
    return () => {
      const {
        teleport: v
      } = e;
      return v ? G(no, {
        to: v,
        disabled: i.value
      }, {
        default: () => [d()]
      }) : d();
    };
  }
});
te(Yr);
ue(Yr, gt);
const e5 = Yr;
var So = Yr;
const on = {
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
function gg(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function bg(e) {
  const { left: n } = an(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function xs(e) {
  const { top: n } = an(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Ci(e) {
  const { transform: n } = qo(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Po(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const o = /(scroll|auto)/, { overflowY: t, overflow: r } = qo(n);
    if (o.test(t) || o.test(r))
      return n;
  }
  return window;
}
function yg(e) {
  const n = [];
  let o = e;
  for (; !kd(o); )
    o = Po(o), n.push(o);
  return n;
}
function Ld(e, n) {
  if (hn(e)) {
    const o = document.querySelector(e);
    return o || Vn(n, "target element cannot found"), o;
  }
  if (zh(e))
    return e;
  Vn(n, 'type of prop "target" should be a selector or an element object');
}
function kg() {
  const { width: e, height: n } = an(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const $g = (e) => hn(e) && e.endsWith("rem"), wg = (e) => hn(e) && e.endsWith("px") || On(e), Cg = (e) => hn(e) && e.endsWith("vw"), Sg = (e) => hn(e) && e.endsWith("vh"), Pg = (e) => hn(e) && e.endsWith("vmin"), zg = (e) => hn(e) && e.endsWith("vmax"), en = (e) => {
  if (yd(e))
    return Number(e);
  if (wg(e))
    return +e.replace("px", "");
  if (!oo())
    return 0;
  const { vw: n, vh: o, vMin: t, vMax: r } = kg();
  if (Cg(e))
    return +e.replace("vw", "") * n / 100;
  if (Sg(e))
    return +e.replace("vh", "") * o / 100;
  if (Pg(e))
    return +e.replace("vmin", "") * t / 100;
  if (zg(e))
    return +e.replace("vmax", "") * r / 100;
  if ($g(e)) {
    const a = +e.replace("rem", ""), i = qo(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return hn(e) ? F(e) : 0;
}, ze = (e) => {
  if (e != null)
    return yd(e) ? `${e}px` : String(e);
}, wn = (e, n = 1) => {
  if (e == null)
    return;
  const o = ze(e), t = o.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(o) * n}${t}`;
};
function Bt(e, { top: n = 0, left: o = 0, duration: t = 300, animation: r }) {
  const a = Date.now(), i = Ro(e), l = rs(e);
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
function Rd(e) {
  return Object.entries(e ?? {}).reduce((n, [o, t]) => {
    const r = o.startsWith("--") ? o : `--${wd(o)}`;
    return n[r] = t, n;
  }, {});
}
function Pr(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
const eu = ["button", "input", "select", "textarea", "[tabindex]", "[href]"].map((e) => `${e}:not([disabled])`).join(", ");
function Fd(e, n, o) {
  var t;
  const r = n.querySelectorAll(eu);
  if (!r.length)
    return;
  const a = [e, ...Array.from(e.querySelectorAll(eu))].findIndex(
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
var Og = (e, n, o) => new Promise((t, r) => {
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
const { name: Tg, n: Eg, classes: Dg } = x("icon");
function Bg(e, n) {
  return h(), Oe(vt(e.isURL(e.name) ? "img" : "i"), {
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
const Ud = _({
  name: Tg,
  props: on,
  setup(e) {
    const n = k(""), o = k(!1);
    de(() => e.name, t, { immediate: !0 });
    function t(r, a) {
      return Og(this, null, function* () {
        const { transition: i } = e;
        if (a == null || F(i) === 0) {
          n.value = r;
          return;
        }
        o.value = !0, yield Ke(), setTimeout(() => {
          a != null && (n.value = r), o.value = !1;
        }, F(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: o,
      n: Eg,
      classes: Dg,
      isURL: Oh,
      toNumber: F,
      toSizeUnit: ze
    };
  }
});
Ud.render = Bg;
var jr = Ud;
te(jr);
ue(jr, on);
const n5 = jr;
var Ze = jr;
const Hd = {
  hovering: Boolean,
  focusing: Boolean
}, { name: Ig, n: Mg, classes: Ag } = x("hover-overlay");
function Ng(e, n) {
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
const Yd = _({
  name: Ig,
  props: Hd,
  setup: () => ({
    n: Mg,
    classes: Ag,
    inMobile: kr
  })
});
Yd.render = Ng;
var Wr = Yd;
te(Wr);
ue(Wr, Hd);
function Jn() {
  const e = k(!1);
  return {
    hovering: e,
    handleHovering: (o) => {
      e.value = o;
    }
  };
}
const o5 = Wr;
var Ln = Wr;
function jd(e) {
  return e ? !!(e === "desktop" && kr() || e === "mobile" && !kr()) : !1;
}
function Vg(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((o, t) => {
    const [r, a] = t.split(":").map((i) => i.trim());
    return o[is(r)] = a, o;
  }, {}) : {};
}
function Lg(e) {
  const { value: n } = e._hover, o = Vg(e);
  Object.keys(n).forEach((t) => {
    const r = is(t);
    n[r] != null && o[r] && (e._hover.rawStyle[r] = o[r]);
  });
}
function us(e, n) {
  Object.keys(n).forEach((o) => {
    const t = n[o];
    t != null && (e.style[o] = t);
  });
}
function Rg(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function Wd(e) {
  (e == null ? void 0 : e._hover) != null && (Rg(e), us(e, e._hover.rawStyle));
}
function Kd() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, Eo(e)) {
    e(this._hover.hovering);
    return;
  }
  us(this, e);
}
function qd() {
  if (this._hover.hovering = !1, Eo(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  Wd(this);
}
function Gd(e, n) {
  var o, t;
  const { arg: r, value: a } = n;
  jd(r) || (e._hover = {
    value: a,
    hovering: (t = (o = e._hover) == null ? void 0 : o.hovering) != null ? t : !1,
    rawStyle: {}
  }, Lg(e), e.addEventListener("mouseenter", Kd), e.addEventListener("mouseleave", qd));
}
function Xd(e, n) {
  jd(n.arg) || (Wd(e), e.removeEventListener("mouseenter", Kd), e.removeEventListener("mouseleave", qd));
}
function Fg(e, n) {
  e._hover && Xd(e, n);
}
function Ug(e, n) {
  return !Eo(n.value) && e._hover.hovering;
}
function Hg(e, n) {
  Gd(e, n), Ug(e, n) && us(e, n.value);
}
const Zd = {
  mounted: Gd,
  unmounted: Xd,
  beforeUpdate: Fg,
  updated: Hg,
  install(e) {
    e.directive("hover", this);
  }
}, t5 = Zd;
var Tn = Zd;
const { name: Yg, n: jg, classes: Wg } = x("action-sheet");
function Kg(e, n) {
  const o = ne("var-icon"), t = ne("var-hover-overlay"), r = Ye("ripple"), a = Ye("hover");
  return Ie((h(), P(
    "div",
    {
      class: p(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
      style: q({ color: e.color })
    },
    [
      e.icon ? (h(), Oe(o, {
        key: 0,
        "var-action-sheet-cover": "",
        class: p(e.n("action-icon")),
        namespace: e.namespace,
        name: e.icon,
        size: e.iconSize
      }, null, 8, ["class", "namespace", "name", "size"])) : X("v-if", !0),
      I(
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
const Jd = _({
  name: Yg,
  components: {
    VarHoverOverlay: Ln,
    VarIcon: Ze
  },
  directives: { Ripple: tn, Hover: Tn },
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
      n: jg,
      classes: Wg,
      handleHovering: n
    };
  }
});
Jd.render = Kg;
var qg = Jd, Gg = Object.defineProperty, nu = Object.getOwnPropertySymbols, Xg = Object.prototype.hasOwnProperty, Zg = Object.prototype.propertyIsEnumerable, ou = (e, n, o) => n in e ? Gg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Jg = (e, n) => {
  for (var o in n || (n = {}))
    Xg.call(n, o) && ou(e, o, n[o]);
  if (nu)
    for (var o of nu(n))
      Zg.call(n, o) && ou(e, o, n[o]);
  return e;
};
const Qd = Jg({
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
}, Be(gt, [
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
var cs = {
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
}, _d = {
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
}, ds = {
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
}, xd = ds, ef = {
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
}, Qg = Object.defineProperty, tu = Object.getOwnPropertySymbols, _g = Object.prototype.hasOwnProperty, xg = Object.prototype.propertyIsEnumerable, ru = (e, n, o) => n in e ? Qg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, au = (e, n) => {
  for (var o in n || (n = {}))
    _g.call(n, o) && ru(e, o, n[o]);
  if (tu)
    for (var o of tu(n))
      xg.call(n, o) && ru(e, o, n[o]);
  return e;
};
function fs() {
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
      e.value[i] = au(au({}, e.value[i]), l), t(i);
    },
    t: (i) => {
      if ($r(n.value, i))
        return n.value[i];
    }
  };
}
const { messages: nf, currentMessage: of, add: ps, use: vs, merge: tf, t: rn } = fs();
ps("zh-CN", cs);
vs("zh-CN");
const r5 = {
  zhCN: cs,
  enUS: _d,
  zhTW: ds,
  zhHK: xd,
  faIR: ef,
  messages: nf,
  currentMessage: of,
  add: ps,
  use: vs,
  merge: tf,
  t: rn,
  useLocale: fs
};
var Mi = {
  zhCN: cs,
  enUS: _d,
  zhTW: ds,
  zhHK: xd,
  faIR: ef,
  messages: nf,
  currentMessage: of,
  add: ps,
  use: vs,
  merge: tf,
  t: rn,
  useLocale: fs
};
const Ai = Symbol("LOCALE_PROVIDER_KEY");
function eb(e) {
  gd(Ai, e);
}
function ro() {
  return zd(Ai) ? md(Ai) : { t: null };
}
const { name: nb, n: ob, classes: tb } = x("action-sheet");
function rb(e, n) {
  const o = ne("var-action-item"), t = ne("var-popup");
  return h(), Oe(t, {
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
      I(
        "div",
        He({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          N(e.$slots, "title", {}, () => {
            var r;
            return [
              I(
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
          N(e.$slots, "actions", {}, () => [
            (h(!0), P(
              Re,
              null,
              _e(e.actions, (r) => (h(), Oe(o, {
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
const rf = _({
  name: nb,
  directives: { Ripple: tn },
  components: {
    VarPopup: So,
    VarActionItem: qg
  },
  inheritAttrs: !1,
  props: Qd,
  setup(e) {
    const n = Zn(e, "show"), { t: o } = ro();
    function t(r) {
      if (r.disabled)
        return;
      const { closeOnClickAction: a, onSelect: i } = e;
      S(i, r), a && (n.value = !1);
    }
    return {
      show: n,
      pt: o,
      t: rn,
      n: ob,
      classes: tb,
      handleSelect: t
    };
  }
});
rf.render = rb;
var Zt = rf, ab = Object.defineProperty, iu = Object.getOwnPropertySymbols, ib = Object.prototype.hasOwnProperty, lb = Object.prototype.propertyIsEnumerable, lu = (e, n, o) => n in e ? ab(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, su = (e, n) => {
  for (var o in n || (n = {}))
    ib.call(n, o) && lu(e, o, n[o]);
  if (iu)
    for (var o of iu(n))
      lb.call(n, o) && lu(e, o, n[o]);
  return e;
};
let ho, ms = {};
function sb(e = {}) {
  return su(su({}, ms), e);
}
function Do(e) {
  return oo() ? new Promise((n) => {
    Do.close();
    const o = Je(sb(e));
    o.teleport = "body", ho = o;
    const { unmountInstance: t } = ht(Zt, o, {
      onSelect: (r) => {
        S(o.onSelect, r), n(r);
      },
      onClose: () => {
        S(o.onClose), n("close");
      },
      onClosed: () => {
        S(o.onClosed), t(), ho === o && (ho = null);
      },
      onRouteChange: () => {
        t(), ho === o && (ho = null);
      },
      "onUpdate:show": (r) => {
        o.show = r;
      }
    });
    o.show = !0;
  }) : Promise.resolve();
}
Do.setDefaultOptions = function(e) {
  ms = e;
};
Do.resetDefaultOptions = function() {
  ms = {};
};
Do.close = function() {
  if (ho != null) {
    const e = ho;
    ho = null, Ke().then(() => {
      e.show = !1;
    });
  }
};
Do.Component = Zt;
te(Zt);
te(Zt, Do);
ue(Do, Qd);
const a5 = Zt;
var Ni = Do;
const af = {
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
}, { name: ub, n: cb, classes: db } = x("app-bar");
function fb(e, n) {
  return h(), P(
    Re,
    null,
    [
      I(
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
          I(
            "div",
            {
              class: p(e.n("toolbar"))
            },
            [
              I(
                "div",
                {
                  class: p(e.n("left"))
                },
                [
                  N(e.$slots, "left"),
                  e.titlePosition === "left" ? (h(), P(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: q({ paddingLeft: e.paddingLeft })
                    },
                    [
                      N(e.$slots, "default", {}, () => [
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
              e.titlePosition === "center" ? (h(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("title"))
                },
                [
                  N(e.$slots, "default", {}, () => [
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
              I(
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
                      N(e.$slots, "default", {}, () => [
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
                  N(e.$slots, "right")
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          ),
          N(e.$slots, "content")
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
      )) : X("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const lf = _({
  name: ub,
  props: af,
  setup(e, { slots: n }) {
    const o = k(null), t = k(), r = k(), a = k(), i = B(() => {
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
    to(s), fn(() => {
      l(), s();
    }), Wt(l);
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
      n: cb,
      classes: db,
      formatElevation: dn,
      appBar: o,
      placeholderHeight: a
    };
  }
});
lf.render = fb;
var Kr = lf;
te(Kr);
ue(Kr, af);
const i5 = Kr;
var Vi = Kr;
const uu = (e) => hn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, cu = (e) => hn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, pb = (e) => {
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
}, Li = (e) => e, du = (e) => e ** 3, sf = (e) => e < 0.5 ? du(e * 2) / 2 : 1 - du((1 - e) * 2) / 2, Fo = (e, n, o = "") => {
  if (e === void 0 && (e = ""), e.length >= n)
    return e;
  const t = n - e.length, r = Math.floor(t / o.length);
  return o.repeat(r) + o.slice(0, t % o.length) + e;
};
var vb = Object.defineProperty, fu = Object.getOwnPropertySymbols, mb = Object.prototype.hasOwnProperty, hb = Object.prototype.propertyIsEnumerable, pu = (e, n, o) => n in e ? vb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, gb = (e, n) => {
  for (var o in n || (n = {}))
    mb.call(n, o) && pu(e, o, n[o]);
  if (fu)
    for (var o of fu(n))
      hb.call(n, o) && pu(e, o, n[o]);
  return e;
}, qr = (e, n, o) => new Promise((t, r) => {
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
const bb = "background-image", yb = "lazy-loading", kb = "lazy-error", vu = "lazy-attempt", $b = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Ri = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", at = [], zr = [], uf = pb(100), un = {
  loading: Ri,
  error: Ri,
  attempt: 3,
  throttleWait: 300,
  events: $b
};
let hs = as(Jt, un.throttleWait);
function Gr(e, n) {
  e._lazy.arg === bb ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function wb(e) {
  e._lazy.loading && Gr(e, e._lazy.loading), Jt();
}
function Cb(e) {
  e._lazy.error && Gr(e, e._lazy.error), e._lazy.state = "error", bs(e), Jt();
}
function cf(e, n) {
  Gr(e, n), e._lazy.state = "success", bs(e), Jt();
}
function Sb(e) {
  var n;
  zr.includes(e) || (zr.push(e), (n = un.events) == null || n.forEach((o) => {
    e.addEventListener(o, hs, { passive: !0 });
  }));
}
function Pb() {
  zr.forEach((e) => {
    var n;
    (n = un.events) == null || n.forEach((o) => {
      e.removeEventListener(o, hs);
    });
  }), zr.length = 0;
}
function zb(e, n) {
  var o, t;
  const r = {
    loading: (o = e.getAttribute(yb)) != null ? o : un.loading,
    error: (t = e.getAttribute(kb)) != null ? t : un.error,
    attempt: e.getAttribute(vu) ? Number(e.getAttribute(vu)) : un.attempt
  };
  e._lazy = gb({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), Gr(e, Ri), S(un.filter, e._lazy);
}
function Ob(e, n) {
  const o = new Image();
  o.src = n, e._lazy.preloadImage = o, o.addEventListener("load", () => {
    e._lazy.attemptLock = !1, uf.add(n), cf(e, n);
  }), o.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Cb(e) : df(e);
  });
}
function df(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (uf.has(n)) {
    cf(e, n), e._lazy.attemptLock = !1;
    return;
  }
  wb(e), Ob(e, n);
}
function gs(e) {
  return qr(this, null, function* () {
    yield kn(), Mh(e) && df(e);
  });
}
function Jt() {
  at.forEach((e) => gs(e));
}
function Tb(e) {
  return qr(this, null, function* () {
    !at.includes(e) && at.push(e), yg(e).forEach(Sb), yield gs(e);
  });
}
function bs(e) {
  rt(at, e), at.length === 0 && Pb();
}
function Eb(e, n) {
  const { src: o, arg: t } = e._lazy;
  return o !== n.value || t !== n.arg;
}
function ff(e, n) {
  return qr(this, null, function* () {
    zb(e, n), yield Tb(e);
  });
}
function Db(e, n) {
  return qr(this, null, function* () {
    if (!Eb(e, n)) {
      at.includes(e) && (yield gs(e));
      return;
    }
    yield ff(e, n);
  });
}
function Bb(e = {}) {
  const { events: n, loading: o, error: t, attempt: r, throttleWait: a, filter: i } = e;
  un.events = n ?? un.events, un.loading = o ?? un.loading, un.error = t ?? un.error, un.attempt = r ?? un.attempt, un.throttleWait = a ?? un.throttleWait, un.filter = i;
}
const pf = {
  mounted: ff,
  unmounted: bs,
  updated: Db,
  install(e, n) {
    Bb(n), hs = as(Jt, un.throttleWait), e.directive("lazy", this);
  }
}, l5 = pf;
var It = pf;
const vf = {
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
}, Ib = (e) => ["mini", "small", "normal", "large"].includes(e), { name: Mb, n: Ab, classes: Nb } = x("avatar"), Vb = ["src", "alt", "lazy-loading", "lazy-error"], Lb = ["src", "alt"];
function Rb(e, n) {
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
      onClick: n[3] || (n[3] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      e.src ? (h(), P(
        Re,
        { key: 0 },
        [
          e.lazy ? Ie((h(), P("img", {
            key: 0,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: q({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...t) => e.handleLoad && e.handleLoad(...t))
          }, null, 46, Vb)), [
            [o, e.src]
          ]) : (h(), P("img", {
            key: 1,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: q({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...t) => e.handleLoad && e.handleLoad(...t)),
            onError: n[2] || (n[2] = (...t) => e.handleError && e.handleError(...t))
          }, null, 46, Lb))
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
          N(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const mf = _({
  name: Mb,
  directives: { Lazy: It },
  props: vf,
  setup(e) {
    const n = k(null), o = k(null), t = k(1);
    fn(r), Wt(r);
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
      c ? (u._lazy.state === "success" && S(d, s), u._lazy.state === "error" && S(f, s)) : S(d, s);
    }
    function i(s) {
      S(e.onError, s);
    }
    function l(s) {
      S(e.onClick, s);
    }
    return {
      avatarElement: n,
      textElement: o,
      scale: t,
      n: Ab,
      classes: Nb,
      isInternalSize: Ib,
      toSizeUnit: ze,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
mf.render = Rb;
var Xr = mf;
te(Xr);
ue(Xr, vf);
const s5 = Xr;
var Fi = Xr;
const hf = {
  offset: [Number, String],
  vertical: Boolean
}, { name: Fb, n: Ub, classes: Hb } = x("avatar-group");
function Yb(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: q(e.rootStyles)
    },
    [
      N(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const gf = _({
  name: Fb,
  props: hf,
  setup(e) {
    return {
      rootStyles: B(() => e.offset == null ? {} : {
        "--avatar-group-offset": ze(e.offset)
      }),
      n: Ub,
      classes: Hb
    };
  }
});
gf.render = Yb;
var Zr = gf;
te(Zr);
ue(Zr, hf);
const u5 = Zr;
var Ui = Zr;
const io = {
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
}, { name: jb, n: Wb, classes: Kb } = x("loading"), qb = (e) => (Wo(""), e = e(), Ko(), e), Gb = /* @__PURE__ */ qb(() => /* @__PURE__ */ I(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ I("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
)), Xb = [
  Gb
];
function Zb(e, n) {
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
          N(e.$slots, "default"),
          e.loading ? (h(), P(
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
              I(
                "span",
                {
                  class: p(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
                  style: q({
                    width: e.multiplySizeUnit(e.radius, 2),
                    height: e.multiplySizeUnit(e.radius, 2),
                    color: e.color
                  })
                },
                [...Xb],
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )) : X("v-if", !0),
          (h(!0), P(
            Re,
            null,
            _e(e.loadingTypeDict, (o, t) => (h(), P(
              Re,
              { key: t },
              [
                e.type === t ? (h(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.classes(e.n(t), e.n(`${t}--${e.size}`)))
                  },
                  [
                    (h(!0), P(
                      Re,
                      null,
                      _e(o, (r) => (h(), P(
                        "div",
                        {
                          key: r + t,
                          style: q({ backgroundColor: e.color }),
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
          e.$slots.description || e.description ? (h(), P(
            "div",
            {
              key: 1,
              class: p(e.classes(e.n("description"), e.n(`description--${e.size}`))),
              style: q({ color: e.color })
            },
            [
              N(e.$slots, "description", {}, () => [
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
const bf = _({
  name: jb,
  props: io,
  setup(e, { slots: n }) {
    const o = B(() => S(n.default) ? e.loading : !0);
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: o,
      n: Wb,
      classes: Kb,
      multiplySizeUnit: wn
    };
  }
});
bf.render = Zb;
var Jr = bf;
te(Jr);
ue(Jr, io);
const c5 = Jr;
var it = Jr, Jb = Object.defineProperty, Qb = Object.defineProperties, _b = Object.getOwnPropertyDescriptors, mu = Object.getOwnPropertySymbols, xb = Object.prototype.hasOwnProperty, e0 = Object.prototype.propertyIsEnumerable, hu = (e, n, o) => n in e ? Jb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, gu = (e, n) => {
  for (var o in n || (n = {}))
    xb.call(n, o) && hu(e, o, n[o]);
  if (mu)
    for (var o of mu(n))
      e0.call(n, o) && hu(e, o, n[o]);
  return e;
}, bu = (e, n) => Qb(e, _b(n));
const yf = {
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
  color: String,
  textColor: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  loadingRadius: [Number, String],
  loadingType: Be(io, "type"),
  loadingSize: bu(gu({}, Be(io, "size")), {
    default: void 0
  }),
  loadingColor: bu(gu({}, Be(io, "color")), {
    default: "currentColor"
  }),
  onClick: V(),
  onTouchstart: V()
}, kf = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function n0() {
  const { bindChildren: e, childProviders: n, length: o } = bn(kf);
  return {
    length: o,
    buttons: n,
    bindButtons: e
  };
}
function o0() {
  const { bindParent: e, parentProvider: n, index: o } = gn(kf);
  return {
    index: o,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: t0, n: r0, classes: a0 } = x("button"), i0 = ["type", "disabled"];
function l0(e, n) {
  const o = ne("var-loading"), t = ne("var-hover-overlay"), r = Ye("ripple"), a = Ye("hover");
  return Ie((h(), P("button", {
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
    style: q({
      color: e.states.textColor,
      background: e.states.color
    }),
    type: e.nativeType,
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onTouchstart: n[1] || (n[1] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
    onFocus: n[2] || (n[2] = (i) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (i) => e.isFocusing = !1)
  }, [
    e.loading || e.pending ? (h(), Oe(o, {
      key: 0,
      class: p(e.n("loading")),
      "var-button-cover": "",
      color: e.loadingColor,
      type: e.loadingType,
      size: e.loadingSize || e.states.size,
      radius: e.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : X("v-if", !0),
    I(
      "div",
      {
        class: p(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [
        N(e.$slots, "default")
      ],
      2
      /* CLASS */
    ),
    G(t, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, i0)), [
    [r, { disabled: e.disabled || !e.ripple || e.loading || e.pending }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const $f = _({
  name: t0,
  components: {
    VarLoading: it,
    VarHoverOverlay: Ln
  },
  directives: { Ripple: tn, Hover: Tn },
  props: yf,
  setup(e) {
    const n = k(!1), o = k(!1), { buttonGroup: t } = o0(), { hovering: r, handleHovering: a } = Jn(), i = B(() => {
      var c, d, f, v, y, m;
      if (!t)
        return {
          elevation: dn(e.elevation, 2),
          type: (c = e.type) != null ? c : "default",
          size: (d = e.size) != null ? d : "normal",
          color: e.color,
          text: e.text,
          textColor: e.textColor,
          outline: e.outline,
          iconContainer: e.iconContainer
        };
      const { type: b, size: C, color: w, textColor: g, mode: $ } = t;
      return {
        elevation: "",
        type: (f = e.type) != null ? f : b.value,
        size: (v = e.size) != null ? v : C.value,
        color: (y = e.color) != null ? y : w.value,
        textColor: (m = e.textColor) != null ? m : g.value,
        text: $.value === "text" || $.value === "outline",
        outline: $.value === "outline",
        iconContainer: $.value === "icon-container"
      };
    });
    function l(c) {
      e.autoLoading && (o.value = !0, Promise.all(Vo(c)).then(() => {
        o.value = !1;
      }).catch(() => {
        o.value = !1;
      }));
    }
    function s(c) {
      const { loading: d, disabled: f, onClick: v } = e;
      !v || d || f || o.value || l(S(v, c));
    }
    function u(c) {
      const { loading: d, disabled: f, onTouchstart: v } = e;
      !v || d || f || o.value || l(S(v, c));
    }
    return {
      pending: o,
      states: i,
      hovering: r,
      n: r0,
      classes: a0,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      isFocusing: n
    };
  }
});
$f.render = l0;
var Qr = $f;
te(Qr);
ue(Qr, yf);
const d5 = Qr;
var Sn = Qr;
const wf = {
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
}, { name: s0, n: u0, classes: c0 } = x("back-top");
function d0(e, n) {
  const o = ne("var-icon"), t = ne("var-button");
  return h(), Oe(no, {
    to: "body",
    disabled: e.disabled
  }, [
    I(
      "div",
      He({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Nn((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
      }),
      [
        N(e.$slots, "default", {}, () => [
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
const Cf = _({
  name: s0,
  components: {
    VarButton: Sn,
    VarIcon: Ze
  },
  inheritAttrs: !1,
  props: wf,
  setup(e) {
    const n = k(!1), o = k(null), t = k(!0);
    let r;
    const a = as(() => {
      i();
    }, 200);
    Yo(() => {
      s(), u(), i(), t.value = !1;
    }), To(u), qt(c);
    function i() {
      n.value = Ro(r) >= en(e.visibilityHeight);
    }
    function l(d) {
      S(e.onClick, d);
      const f = rs(r);
      Bt(r, {
        left: f,
        duration: e.duration,
        animation: sf
      });
    }
    function s() {
      r = e.target ? Ld(e.target, "BackTop") : Po(o.value);
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
      n: u0,
      classes: c0,
      handleClick: l
    };
  }
});
Cf.render = d0;
var _r = Cf;
te(_r);
ue(_r, wf);
const f5 = _r;
var Hi = _r;
const Sf = {
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
  icon: Be(on, "name"),
  namespace: Be(on, "namespace"),
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
var f0 = Object.defineProperty, yu = Object.getOwnPropertySymbols, p0 = Object.prototype.hasOwnProperty, v0 = Object.prototype.propertyIsEnumerable, ku = (e, n, o) => n in e ? f0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, m0 = (e, n) => {
  for (var o in n || (n = {}))
    p0.call(n, o) && ku(e, o, n[o]);
  if (yu)
    for (var o of yu(n))
      v0.call(n, o) && ku(e, o, n[o]);
  return e;
};
const { name: h0, n: g0, classes: b0 } = x("badge"), y0 = { key: 0 };
function k0(e, n) {
  const o = ne("var-icon");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      N(e.$slots, "default"),
      G(Qe, {
        name: e.n("$-badge-fade"),
        persisted: ""
      }, {
        default: fe(() => [
          Ie(I(
            "span",
            He({
              class: e.classes(
                e.n("content"),
                e.n(`--${e.type}`),
                [e.$slots.default, e.n(`--${e.position}`), e.n("--offset")],
                [e.dot, e.n("--dot")],
                [e.icon, e.n("--icon")]
              ),
              style: m0({ background: e.color }, e.offsetStyle)
            }, e.$attrs),
            [
              e.icon ? (h(), Oe(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-badge-cover": "",
                name: e.icon,
                namespace: e.namespace
              }, null, 8, ["class", "name", "namespace"])) : X("v-if", !0),
              N(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (h(), P(
                  "span",
                  y0,
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
const Pf = _({
  name: h0,
  components: { VarIcon: Ze },
  inheritAttrs: !1,
  props: Sf,
  setup(e) {
    const n = B(() => {
      const { value: t, maxValue: r } = e;
      return t != null && r != null && F(t) > F(r) ? `${r}+` : t;
    }), o = B(() => ({
      "--badge-offset-y": ze(e.offsetY),
      "--badge-offset-x": ze(e.offsetX)
    }));
    return {
      value: n,
      offsetStyle: o,
      n: g0,
      classes: b0
    };
  }
});
Pf.render = k0;
var xr = Pf;
te(xr);
ue(xr, Sf);
const p5 = xr;
var Or = xr;
const zf = {
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
}, Of = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function $0() {
  const { childProviders: e, length: n, bindChildren: o } = bn(
    Of
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: o
  };
}
var w0 = Object.defineProperty, $u = Object.getOwnPropertySymbols, C0 = Object.prototype.hasOwnProperty, S0 = Object.prototype.propertyIsEnumerable, wu = (e, n, o) => n in e ? w0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Cu = (e, n) => {
  for (var o in n || (n = {}))
    C0.call(n, o) && wu(e, o, n[o]);
  if ($u)
    for (var o of $u(n))
      S0.call(n, o) && wu(e, o, n[o]);
  return e;
};
const { name: P0, n: z0, classes: O0 } = x("bottom-navigation"), { n: ea } = x("bottom-navigation-item"), Su = ea("--right-half-space"), Pu = ea("--left-half-space"), zu = ea("--right-space"), T0 = {
  type: "primary"
};
function E0(e, n) {
  const o = ne("var-button");
  return h(), P(
    Re,
    null,
    [
      I(
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
          N(e.$slots, "default"),
          e.$slots.fab ? (h(), Oe(o, He({
            key: 0,
            class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
            "var-bottom-navigation__fab": "",
            onClick: e.handleFabClick
          }, e.fabProps), {
            default: fe(() => [
              N(e.$slots, "fab")
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class", "onClick"])) : X("v-if", !0)
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
      )) : X("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const Tf = _({
  name: P0,
  components: { VarButton: Sn },
  props: zf,
  setup(e, { slots: n }) {
    const o = k(null), t = B(() => e.active), r = B(() => e.activeColor), a = B(() => e.inactiveColor), i = B(() => e.variant), l = k(), s = k({}), { length: u, bottomNavigationItems: c, bindBottomNavigationItem: d } = $0();
    d({
      active: t,
      activeColor: r,
      inactiveColor: a,
      variant: i,
      onToggle: C
    }), de(() => u.value, v), de(
      () => e.fabProps,
      (D) => {
        s.value = Cu(Cu({}, T0), D);
      },
      { immediate: !0, deep: !0 }
    ), to(E), fn(() => {
      E(), n.fab && O(u.value);
    }), Wt(() => {
      $(), n.fab && O(u.value);
    });
    function v() {
      u.value === 0 || y() || m() || b();
    }
    function y() {
      return c.find(({ name: D }) => t.value === D.value);
    }
    function m() {
      return c.find(({ index: D }) => t.value === D.value);
    }
    function b() {
      On(t.value) && (t.value < 0 ? S(e["onUpdate:active"], 0) : t.value > u.value - 1 && S(e["onUpdate:active"], u.value - 1));
    }
    function C(D) {
      t.value !== D && (e.onBeforeChange ? w(D) : g(D));
    }
    function w(D) {
      const M = Vo(S(e.onBeforeChange, D));
      Promise.all(M).then((Y) => {
        Y.every(Boolean) && g(D);
      });
    }
    function g(D) {
      S(e["onUpdate:active"], D), S(e.onChange, D);
    }
    function $() {
      L().forEach((M) => {
        M.classList.remove(Su, Pu, zu);
      });
    }
    function O(D) {
      const M = L(), Y = M.length, j = D % 2 === 0;
      M.forEach((R, K) => {
        z(j, R, K, Y);
      });
    }
    function z(D, M, Y, j) {
      const R = Y === j - 1;
      if (!D && R) {
        M.classList.add(zu);
        return;
      }
      const K = Y === j / 2 - 1, W = Y === j / 2;
      K ? M.classList.add(Su) : W && M.classList.add(Pu);
    }
    function L() {
      return Array.from(o.value.querySelectorAll(`.${ea()}`));
    }
    function T() {
      S(e.onFabClick);
    }
    function E() {
      if (!e.fixed || !e.placeholder)
        return;
      const { height: D } = an(o.value);
      l.value = ze(D);
    }
    return {
      length: u,
      bottomNavigationDom: o,
      fabProps: s,
      placeholderHeight: l,
      n: z0,
      classes: O0,
      handleFabClick: T
    };
  }
});
Tf.render = E0;
var na = Tf;
te(na);
ue(na, zf);
const v5 = na;
var Yi = na;
const Ef = {
  name: String,
  label: String,
  icon: Be(on, "name"),
  namespace: Be(on, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: V()
};
function D0() {
  const { parentProvider: e, index: n, bindParent: o } = gn(
    Of
  );
  return o || Vn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: o
  };
}
const { name: B0, n: I0, classes: M0 } = x("bottom-navigation-item"), A0 = {
  type: "danger",
  dot: !0
};
function N0(e, n) {
  const o = ne("var-icon"), t = ne("var-badge"), r = Ye("ripple");
  return Ie((h(), P(
    "button",
    {
      class: p(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")])),
      style: q({
        color: e.isActive ? e.activeColor : e.inactiveColor
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      I(
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
          e.badge ? (h(), Oe(t, He({ key: 0 }, e.badgeProps, {
            class: e.n("badge"),
            "var-bottom-navigation-item-cover": ""
          }), {
            default: fe(() => [
              N(e.$slots, "icon", { active: e.isActive }, () => [
                e.icon ? (h(), Oe(o, {
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
          }, 16, ["class"])) : N(e.$slots, "icon", {
            key: 1,
            active: e.isActive
          }, () => [
            e.icon ? (h(), Oe(o, {
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
      I(
        "span",
        {
          class: p(e.n("label"))
        },
        [
          N(e.$slots, "default", {}, () => [
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
const Df = _({
  name: B0,
  components: {
    VarBadge: Or,
    VarIcon: Ze
  },
  directives: { Ripple: tn },
  props: Ef,
  setup(e) {
    const n = B(() => e.name), o = B(() => [n.value, r.value].includes(l.value)), t = B(() => e.badge === !0 ? A0 : e.badge), { index: r, bottomNavigation: a, bindBottomNavigation: i } = D0(), { active: l, activeColor: s, inactiveColor: u, variant: c } = a;
    i({
      name: n,
      index: r
    });
    function f() {
      var v;
      const y = (v = n.value) != null ? v : r.value;
      S(e.onClick, y), S(a.onToggle, y);
    }
    return {
      activeColor: s,
      inactiveColor: u,
      badgeProps: t,
      isActive: o,
      variant: c,
      n: I0,
      classes: M0,
      handleClick: f
    };
  }
});
Df.render = N0;
var oa = Df;
te(oa);
ue(oa, Ef);
const m5 = oa;
var ji = oa;
const Bf = {
  separator: String,
  onClick: V()
}, If = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function V0() {
  const { childProviders: e, bindChildren: n, length: o } = bn(
    If
  );
  return {
    length: o,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function L0() {
  const { parentProvider: e, bindParent: n, index: o } = gn(
    If
  );
  return n || Vn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: o,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: R0, n: F0, classes: U0 } = x("breadcrumb");
function H0(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      I(
        "div",
        {
          class: p(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
          onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
        },
        [
          N(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      e.isLast ? X("v-if", !0) : N(e.$slots, "separator", { key: 0 }, () => {
        var o;
        return [
          I(
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
const Mf = _({
  name: R0,
  props: Bf,
  setup(e) {
    const { index: n, breadcrumb: o, bindBreadcrumb: t } = L0(), r = B(() => n.value === o.length.value - 1), a = B(() => o.separator.value);
    t(null);
    function i(l) {
      r.value || S(e.onClick, l);
    }
    return {
      n: F0,
      classes: U0,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Mf.render = H0;
var ta = Mf;
te(ta);
ue(ta, Bf);
const h5 = ta;
var Wi = ta;
const Af = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: Y0, n: j0 } = x("breadcrumbs");
function W0(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n()),
      role: "navigation",
      "aria-label": "Breadcrumbs"
    },
    [
      N(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Nf = _({
  name: Y0,
  props: Af,
  setup(e) {
    const n = B(() => e.separator), { bindBreadcrumbList: o, length: t } = V0();
    return o({
      length: t,
      separator: n
    }), { n: j0 };
  }
});
Nf.render = W0;
var ra = Nf;
te(ra);
ue(ra, Af);
const g5 = ra;
var Ki = ra;
const Vf = {
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
}, { name: K0, n: q0, classes: G0 } = x("button-group");
function X0(e, n) {
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
      N(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Lf = _({
  name: K0,
  props: Vf,
  setup(e) {
    const { bindButtons: n } = n0(), o = {
      elevation: B(() => e.elevation),
      type: B(() => e.type),
      size: B(() => e.size),
      color: B(() => e.color),
      textColor: B(() => e.textColor),
      mode: B(() => e.mode)
    };
    return n(o), {
      n: q0,
      classes: G0,
      formatElevation: dn
    };
  }
});
Lf.render = X0;
var aa = Lf;
te(aa);
ue(aa, Vf);
const b5 = aa;
var qi = aa;
const Rf = {
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
  onClick: V(),
  "onUpdate:floating": V()
};
var Ou = (e, n, o) => new Promise((t, r) => {
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
const { name: Z0, n: J0, classes: Q0 } = x("card"), _0 = 500, x0 = ["src", "alt"];
function ey(e, n) {
  const o = ne("var-icon"), t = ne("var-button"), r = Ye("ripple");
  return Ie((h(), P(
    "div",
    {
      ref: "card",
      class: p(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: q({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      I(
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
          N(e.$slots, "image", {}, () => [
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
            }, null, 14, x0)) : X("v-if", !0)
          ]),
          I(
            "div",
            {
              class: p(e.n("container"))
            },
            [
              N(e.$slots, "title", {
                slotClass: e.n("title")
              }, () => [
                e.title ? (h(), P(
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
              N(e.$slots, "subtitle", {
                slotClass: e.n("subtitle")
              }, () => [
                e.subtitle ? (h(), P(
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
              N(e.$slots, "description", {
                slotClass: e.n("description")
              }, () => [
                e.description ? (h(), P(
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
              e.$slots.extra ? (h(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("footer"))
                },
                [
                  N(e.$slots, "extra")
                ],
                2
                /* CLASS */
              )) : X("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (h(), P(
                "div",
                {
                  key: 1,
                  class: p(e.n("floating-content")),
                  style: q({
                    height: e.contentHeight,
                    opacity: e.opacity,
                    transition: `opacity ${e.floatingDuration * 2}ms`
                  })
                },
                [
                  N(e.$slots, "floating-content")
                ],
                6
                /* CLASS, STYLE */
              )) : X("v-if", !0)
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
              N(e.$slots, "close-button", {}, () => [
                G(t, {
                  "var-card-cover": "",
                  class: p(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
                  onClick: Nn(e.close, ["stop"])
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
      I(
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
    [r, { disabled: !e.ripple || e.floater }]
  ]);
}
const Ff = _({
  name: Z0,
  directives: { Ripple: tn },
  components: {
    VarIcon: Ze,
    VarButton: Sn
  },
  props: Rf,
  setup(e) {
    const n = k(null), o = k(null), t = k("auto"), r = k("auto"), a = k("100%"), i = k("100%"), l = k("auto"), s = k("auto"), u = k(void 0), c = k("hidden"), d = k("0px"), f = k("0"), v = B(() => e.layout === "row"), y = k(!1), m = k(!1), { zIndex: b } = Xt(() => e.floating, 1);
    let C = "auto", w = "auto", g = null;
    const $ = k(null);
    Gt(
      () => e.floating,
      () => !v.value
    ), de(
      () => e.floating,
      (E) => {
        v.value || Ke(() => {
          E ? O() : z();
        });
      },
      { immediate: !0 }
    );
    function O() {
      return Ou(this, null, function* () {
        clearTimeout($.value), clearTimeout(g), $.value = null, $.value = setTimeout(
          () => Ou(this, null, function* () {
            const { width: E, height: D, left: M, top: Y } = an(n.value);
            t.value = ze(E), r.value = ze(D), a.value = t.value, i.value = r.value, l.value = ze(Y), s.value = ze(M), u.value = "fixed", C = l.value, w = s.value, y.value = !0, yield kn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", d.value = "auto", f.value = "1", c.value = "auto", m.value = !0;
          }),
          e.ripple ? _0 : 0
        );
      });
    }
    function z() {
      clearTimeout(g), clearTimeout($.value), $.value = null, a.value = t.value, i.value = r.value, l.value = C, s.value = w, d.value = "0px", f.value = "0", y.value = !1, g = setTimeout(() => {
        t.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", C = "auto", w = "auto", c.value = "hidden", u.value = void 0, m.value = !1;
      }, e.floatingDuration);
    }
    function L() {
      S(e["onUpdate:floating"], !1);
    }
    function T(E) {
      S(e.onClick, E);
    }
    return {
      card: n,
      cardFloater: o,
      holderWidth: t,
      holderHeight: r,
      floater: $,
      floaterWidth: a,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: c,
      contentHeight: d,
      opacity: f,
      zIndex: b,
      isRow: v,
      showFloatingButtons: y,
      floated: m,
      n: J0,
      classes: Q0,
      toSizeUnit: ze,
      close: L,
      formatElevation: dn,
      handleClick: T
    };
  }
});
Ff.render = ey;
var ia = Ff;
te(ia);
ue(ia, Rf);
const y5 = ia;
var Gi = ia;
const Uf = {
  title: String,
  icon: Be(on, "name"),
  namespace: Be(on, "namespace"),
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: V()
}, { name: ny, n: oy, classes: ty } = x("cell");
function ry(e, n) {
  const o = ne("var-icon"), t = Ye("ripple");
  return Ie((h(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      N(e.$slots, "icon", {}, () => [
        e.icon ? (h(), P(
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
      I(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          N(e.$slots, "default", {}, () => [
            e.title ? (h(), P(
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
          N(e.$slots, "description", {}, () => [
            e.description ? (h(), P(
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
      e.$slots.extra ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.classes(e.n("extra"), e.extraClass))
        },
        [
          N(e.$slots, "extra")
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
const Hf = _({
  name: ny,
  components: { VarIcon: Ze },
  directives: { Ripple: tn },
  props: Uf,
  setup(e) {
    const n = B(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ze(e.borderOffset),
      "--cell-border-right": ze(e.borderOffset)
    });
    function o(t) {
      S(e.onClick, t);
    }
    return {
      borderOffsetStyles: n,
      n: oy,
      classes: ty,
      toSizeUnit: ze,
      handleClick: o
    };
  }
});
Hf.render = ry;
var la = Hf;
te(la);
ue(la, Uf);
const k5 = la;
var Xi = la;
const Yf = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: ay, n: iy } = x("form-details"), ly = { key: 0 }, sy = { key: 0 };
function uy(e, n) {
  return h(), Oe(Qe, {
    name: e.n()
  }, {
    default: fe(() => [
      e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n())
        },
        [
          I(
            "div",
            {
              class: p(e.n("error-message"))
            },
            [
              G(Qe, {
                name: e.n("message")
              }, {
                default: fe(() => [
                  e.errorMessage ? (h(), P(
                    "div",
                    ly,
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
          I(
            "div",
            {
              class: p(e.n("extra-message"))
            },
            [
              G(Qe, {
                name: e.n("message")
              }, {
                default: fe(() => [
                  N(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (h(), P(
                      "div",
                      sy,
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
const jf = _({
  name: ay,
  props: Yf,
  setup: () => ({ n: iy })
});
jf.render = uy;
var sa = jf;
te(sa);
ue(sa, Yf);
const $5 = sa;
var En = sa;
const Wf = {
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
  onClick: V(),
  onChange: V(),
  "onUpdate:modelValue": V(),
  "onUpdate:indeterminate": V()
}, Kf = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function cy() {
  const { bindChildren: e, childProviders: n, length: o } = bn(
    Kf
  );
  return {
    length: o,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function dy() {
  const { bindParent: e, parentProvider: n, index: o } = gn(
    Kf
  );
  return {
    index: o,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var fy = Object.defineProperty, py = Object.defineProperties, vy = Object.getOwnPropertyDescriptors, Tu = Object.getOwnPropertySymbols, my = Object.prototype.hasOwnProperty, hy = Object.prototype.propertyIsEnumerable, Eu = (e, n, o) => n in e ? fy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, gy = (e, n) => {
  for (var o in n || (n = {}))
    my.call(n, o) && Eu(e, o, n[o]);
  if (Tu)
    for (var o of Tu(n))
      hy.call(n, o) && Eu(e, o, n[o]);
  return e;
}, by = (e, n) => py(e, vy(n));
const qf = Symbol("FORM_BIND_FORM_ITEM_KEY");
function jn() {
  const { parentProvider: e, index: n, bindParent: o } = gn(qf), t = jo();
  return {
    index: n,
    form: e,
    bindForm: o ? (a) => {
      o(by(gy({}, a), { instance: t }));
    } : null
  };
}
function yy() {
  const { childProviders: e, length: n, bindChildren: o } = bn(qf);
  return {
    length: n,
    formItems: e,
    bindFormItems: o
  };
}
const { name: ky, n: $y, classes: wy } = x("checkbox"), Cy = ["tabindex"];
function Sy(e, n) {
  const o = ne("var-icon"), t = ne("var-hover-overlay"), r = ne("var-form-details"), a = Ye("hover"), i = Ye("ripple");
  return h(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      I(
        "div",
        {
          class: p(e.n()),
          onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
        },
        [
          Ie((h(), P("div", {
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
            e.isIndeterminate ? N(e.$slots, "indeterminate-icon", { key: 0 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "minus-box",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : X("v-if", !0),
            e.checked && !e.isIndeterminate ? N(e.$slots, "checked-icon", { key: 1 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "checkbox-marked",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : X("v-if", !0),
            !e.checked && !e.isIndeterminate ? N(e.$slots, "unchecked-icon", { key: 2 }, () => [
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
          ], 46, Cy)), [
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
              N(e.$slots, "default", { checked: e.checked })
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
const Gf = _({
  name: ky,
  directives: { Ripple: tn, Hover: Tn },
  components: {
    VarIcon: Ze,
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  props: Wf,
  setup(e) {
    const n = k(null), o = k(!1), t = Zn(e, "modelValue"), r = Zn(e, "indeterminate"), a = B(() => t.value === e.checkedValue), i = B(() => e.checkedValue), l = k(!1), { checkboxGroup: s, bindCheckboxGroup: u } = dy(), { hovering: c, handleHovering: d } = Jn(), { form: f, bindForm: v } = jn(), {
      errorMessage: y,
      validateWithTrigger: m,
      validate: b,
      // expose
      resetValidation: C
    } = Yn(), w = {
      checkedValue: i,
      checked: a,
      sync: L,
      validate: j,
      resetValidation: C,
      reset: E,
      resetWithAnimation: T
    };
    S(u, w), S(v, w), We(() => window, "keydown", M), We(() => window, "keyup", Y);
    function g(R) {
      Ke(() => {
        const { validateTrigger: K, rules: W, modelValue: ce } = e;
        m(K, R, W, ce);
      });
    }
    function $(R) {
      const { checkedValue: K, onChange: W } = e;
      t.value = R, r.value = !1, S(W, t.value), g("onChange"), R === K ? s == null || s.onChecked(K) : s == null || s.onUnchecked(K);
    }
    function O(R) {
      const { disabled: K, readonly: W, checkedValue: ce, uncheckedValue: Q, onClick: pe } = e;
      if (f != null && f.disabled.value || K || (S(pe, R), f != null && f.readonly.value || W))
        return;
      l.value = !0;
      const ye = s ? s.checkedCount.value >= Number(s.max.value) : !1;
      !a.value && ye || $(a.value ? Q : ce);
    }
    function z() {
      n.value.focus();
    }
    function L(R) {
      const { checkedValue: K, uncheckedValue: W } = e;
      t.value = R.includes(K) ? K : W;
    }
    function T() {
      l.value = !1;
    }
    function E() {
      t.value = e.uncheckedValue, C();
    }
    function D(R) {
      const { checkedValue: K, uncheckedValue: W } = e;
      ![K, W].includes(R) && (R = a.value ? W : K), $(R);
    }
    function M(R) {
      if (!o.value)
        return;
      const { key: K } = R;
      (K === "Enter" || K === " ") && Ne(R), K === "Enter" && n.value.click();
    }
    function Y(R) {
      o.value && R.key === " " && (Ne(R), n.value.click());
    }
    function j() {
      return b(e.rules, e.modelValue);
    }
    return {
      action: n,
      isFocusing: o,
      isIndeterminate: r,
      withAnimation: l,
      checked: a,
      errorMessage: y,
      checkboxGroupErrorMessage: s == null ? void 0 : s.errorMessage,
      formDisabled: f == null ? void 0 : f.disabled,
      formReadonly: f == null ? void 0 : f.readonly,
      hovering: c,
      n: $y,
      classes: wy,
      handleHovering: d,
      handleClick: O,
      handleTextClick: z,
      toggle: D,
      reset: E,
      validate: j,
      resetValidation: C
    };
  }
});
Gf.render = Sy;
var ua = Gf;
te(ua);
ue(ua, Wf);
const w5 = ua;
var lt = ua;
const Xf = {
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
  onChange: V(),
  "onUpdate:modelValue": V()
}, { name: Py, n: zy, classes: Oy } = x("checkbox-group");
function Ty(e, n) {
  const o = ne("maybe-v-node"), t = ne("var-checkbox"), r = ne("var-form-details");
  return h(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      I(
        "div",
        {
          class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          e.checkboxGroupOptions.length ? (h(!0), P(
            Re,
            { key: 0 },
            _e(e.checkboxGroupOptions, (a) => (h(), Oe(t, {
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
          N(e.$slots, "default")
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
const Zf = _({
  name: Py,
  components: { VarFormDetails: En, VarCheckbox: lt, MaybeVNode: Ed },
  props: Xf,
  setup(e) {
    const n = B(() => e.max), o = B(() => e.modelValue.length), t = B(() => Ge(e.options) ? e.options : []), { length: r, checkboxes: a, bindCheckboxes: i } = cy(), { bindForm: l } = jn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: c,
      // expose
      resetValidation: d
    } = Yn(), f = B(() => s.value), v = {
      max: n,
      checkedCount: o,
      onChecked: b,
      onUnchecked: C,
      validate: L,
      resetValidation: d,
      reset: z,
      errorMessage: f
    };
    de(() => e.modelValue, w, { deep: !0 }), de(() => r.value, w), i(v), S(l, v);
    function y(T) {
      Ke(() => {
        const { validateTrigger: E, rules: D, modelValue: M } = e;
        u(E, T, D, M);
      });
    }
    function m(T) {
      S(e["onUpdate:modelValue"], T), S(e.onChange, T), y("onChange");
    }
    function b(T) {
      const { modelValue: E } = e;
      E.includes(T) || m([...E, T]);
    }
    function C(T) {
      const { modelValue: E } = e;
      E.includes(T) && m(E.filter((D) => D !== T));
    }
    function w() {
      a.forEach(({ sync: T }) => T(e.modelValue));
    }
    function g() {
      a.forEach((T) => T.resetWithAnimation());
    }
    function $() {
      const T = a.map(({ checkedValue: D }) => D.value), E = Us(T);
      return g(), S(e["onUpdate:modelValue"], E), E;
    }
    function O() {
      const T = a.filter(({ checked: D }) => !D.value).map(({ checkedValue: D }) => D.value), E = Us(T);
      return g(), S(e["onUpdate:modelValue"], E), E;
    }
    function z() {
      S(e["onUpdate:modelValue"], []), d();
    }
    function L() {
      return c(e.rules, e.modelValue);
    }
    return {
      errorMessage: s,
      checkboxGroupOptions: t,
      n: zy,
      classes: Oy,
      checkAll: $,
      inverseAll: O,
      reset: z,
      validate: L,
      resetValidation: d,
      isFunction: Eo
    };
  }
});
Zf.render = Ty;
var ca = Zf;
te(ca);
ue(ca, Xf);
const C5 = ca;
var Zi = ca;
const Jf = {
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
  iconName: Be(on, "name"),
  namespace: Be(on, "namespace"),
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
}, { name: Ey, n: fo, classes: Dy } = x("chip");
function By(e, n) {
  const o = ne("var-icon");
  return h(), Oe(Qe, {
    name: e.n("$-fade")
  }, {
    default: fe(() => [
      I(
        "span",
        He({
          class: e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 1), ...e.contentClass),
          style: e.chipStyle
        }, e.$attrs),
        [
          N(e.$slots, "left"),
          I(
            "span",
            {
              class: p(e.n(`text-${e.size}`))
            },
            [
              N(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          N(e.$slots, "right"),
          e.closeable ? (h(), P(
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
const Qf = _({
  name: Ey,
  components: {
    VarIcon: Ze
  },
  inheritAttrs: !1,
  props: Jf,
  setup(e) {
    const n = B(() => {
      const { plain: r, textColor: a, color: i } = e;
      return r ? {
        color: a || i,
        borderColor: i
      } : {
        color: a,
        background: i
      };
    }), o = B(() => {
      const { size: r, block: a, type: i, plain: l, round: s } = e, u = fo(a ? "$--flex" : "$--inline-flex"), c = l ? `${fo("plain")} ${fo(`plain-${i}`)}` : fo(`--${i}`), d = s ? fo("--round") : null;
      return [fo(`--${r}`), u, c, d];
    });
    function t(r) {
      S(e.onClose, r);
    }
    return {
      chipStyle: n,
      contentClass: o,
      n: fo,
      classes: Dy,
      formatElevation: dn,
      handleClose: t
    };
  }
});
Qf.render = By;
var da = Qf;
te(da);
ue(da, Jf);
const S5 = da;
var Tr = da;
const _f = {
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
}, xf = Symbol("ROW_BIND_COL_KEY");
function Iy() {
  const { bindChildren: e, childProviders: n, length: o } = bn(xf);
  return {
    length: o,
    cols: n,
    bindCols: e
  };
}
function My() {
  const { parentProvider: e, index: n, bindParent: o } = gn(xf);
  return {
    index: n,
    row: e,
    bindRow: o
  };
}
const { name: Ay, n: or, classes: Ny } = x("col");
function Vy(e, n) {
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
      N(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const ep = _({
  name: Ay,
  props: _f,
  setup(e) {
    const n = B(() => F(e.span)), o = B(() => F(e.offset)), t = k({ left: 0, right: 0, top: 0, bottom: 0 }), { row: r, bindRow: a } = My(), i = {
      setPadding(u) {
        t.value = u;
      }
    };
    de([() => e.span, () => e.offset], () => {
      r == null || r.computePadding();
    }), S(a, i);
    function l(u, c) {
      const d = [];
      if (c == null)
        return d;
      if (tt(c)) {
        const { offset: f, span: v } = c;
        Number(v) >= 0 && d.push(or(`--span-${u}-${v}`)), f && d.push(or(`--offset-${u}-${f}`));
      } else
        Number(c) >= 0 && d.push(or(`--span-${u}-${c}`));
      return d;
    }
    function s(u) {
      S(e.onClick, u);
    }
    return {
      span: n,
      offset: o,
      padding: t,
      n: or,
      classes: Ny,
      toNumber: F,
      toSizeUnit: ze,
      getSize: l,
      handleClick: s,
      padStartFlex: Pr
    };
  }
});
ep.render = Vy;
var fa = ep;
te(fa);
ue(fa, _f);
const P5 = fa;
var Ji = fa;
const np = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Ly() {
  const { childProviders: e, length: n, bindChildren: o } = bn(
    np
  );
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: o
  };
}
const op = {
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
}, { name: Ry, n: Fy } = x("collapse");
function Uy(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      N(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const tp = _({
  name: Ry,
  props: op,
  setup(e) {
    const n = B(() => e.offset), o = B(() => e.divider), t = B(() => e.elevation), r = B(() => e.accordion), a = B(() => Vo(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = Ly(), u = {
      offset: n,
      divider: o,
      elevation: t,
      accordion: r,
      updateItem: c
    };
    de(
      () => i.value,
      () => Ke().then(v)
    ), de(
      () => e.modelValue,
      () => Ke().then(v)
    ), s(u);
    function c(m, b) {
      if (e.accordion) {
        d(b ? m : void 0);
        return;
      }
      const C = b ? [...a.value, m] : a.value.filter((w) => w !== m);
      d(C);
    }
    function d(m) {
      S(e["onUpdate:modelValue"], m), S(e.onChange, m);
    }
    function f() {
      if (e.accordion) {
        const [C] = a.value;
        if (C == null)
          return;
        const w = l.find(({ name: g }) => C === g.value);
        return w ?? l.find(({ index: g, name: $ }) => $.value == null && C === g.value);
      }
      const m = l.filter(
        ({ name: C }) => C.value != null && a.value.includes(C.value)
      ), b = l.filter(
        ({ index: C, name: w }) => w.value == null && a.value.includes(C.value)
      );
      return [...m, ...b];
    }
    function v() {
      const m = Dh(Vo(f()));
      l.forEach((b) => {
        b.init(m.includes(b));
      });
    }
    return {
      divider: o,
      n: Fy,
      toggleAll: (m) => {
        if (e.accordion)
          return;
        const C = l.filter((w) => {
          var g;
          const $ = (g = w.name.value) != null ? g : w.index.value, O = a.value.includes($);
          return m.skipDisabled && w.disabled.value ? O : m.expand === "inverse" ? !O : m.expand;
        }).map((w) => {
          var g;
          return (g = w.name.value) != null ? g : w.index.value;
        });
        d(C);
      }
    };
  }
});
tp.render = Uy;
var pa = tp;
te(pa);
ue(pa, op);
const z5 = pa;
var Qi = pa;
function Hy() {
  const { parentProvider: e, index: n, bindParent: o } = gn(
    np
  );
  return o || Vn("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: o
  };
}
const rp = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
var Du = (e, n, o) => new Promise((t, r) => {
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
function ap(e) {
  const { contentEl: n, showContent: o, expand: t } = e;
  let r = !0;
  de(
    t,
    (u) => {
      Ke(() => {
        u ? a() : i();
      });
    },
    { immediate: !0 }
  );
  function a() {
    return Du(this, null, function* () {
      if (!n.value || (n.value.style.height = "", o.value = !0, yield mr(), !n.value))
        return;
      const { offsetHeight: u } = n.value;
      n.value.style.height = "0px", yield mr(), n.value && (n.value.style.height = u + "px", r && (yield kn(), r && l()));
    });
  }
  const i = () => Du(this, null, function* () {
    if (!n.value)
      return;
    const { offsetHeight: u } = n.value;
    n.value.style.height = u + "px", yield mr(), n.value.style.height = "0px";
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
const { name: Yy, n: jy, classes: Wy } = x("collapse-item"), Ky = ["aria-expanded", "aria-disabled", "role"];
function qy(e, n) {
  const o = ne("var-icon");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: q(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
    },
    [
      I(
        "div",
        {
          class: p(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
        },
        null,
        2
        /* CLASS */
      ),
      I("div", {
        class: p(e.classes(e.n("header"), [!e.disabled, e.n("header--cursor-pointer")])),
        "aria-expanded": e.isShow,
        "aria-disabled": e.disabled,
        role: e.accordion ? "tab" : "button",
        onClick: n[0] || (n[0] = (...t) => e.toggle && e.toggle(...t))
      }, [
        e.$slots.title || e.title ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.n("header-title"))
          },
          [
            N(e.$slots, "title", {}, () => [
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
        I(
          "div",
          {
            class: p(e.n("header-icon"))
          },
          [
            N(e.$slots, "icon", {}, () => [
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
      ], 10, Ky),
      Ie(I(
        "div",
        {
          class: p(e.n("content")),
          ref: "contentEl",
          onTransitionend: n[1] || (n[1] = (...t) => e.handleTransitionEnd && e.handleTransitionEnd(...t)),
          onTransitionstart: n[2] || (n[2] = (...t) => e.handleTransitionStart && e.handleTransitionStart(...t))
        },
        [
          I(
            "div",
            {
              class: p(e.n("content-wrap"))
            },
            [
              N(e.$slots, "default")
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
const ip = _({
  name: Yy,
  components: {
    VarIcon: Ze
  },
  props: rp,
  setup(e) {
    const n = k(!1), o = k(!1), t = k(null), r = B(() => e.name), a = B(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = Hy(), { offset: u, divider: c, elevation: d, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: r,
      disabled: a,
      init: C
    });
    const { handleTransitionEnd: m, handleTransitionStart: b } = ap({
      contentEl: t,
      showContent: o,
      expand: n
    });
    function C(g) {
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
      n: jy,
      classes: Wy,
      toggle: w,
      formatElevation: dn,
      handleTransitionEnd: m,
      handleTransitionStart: b
    };
  }
});
ip.render = qy;
var va = ip;
te(va);
ue(va, rp);
const O5 = va;
var _i = va;
const lp = {
  expand: Boolean
}, { name: Gy, n: Xy } = x("collapse-transition");
function Zy(e, n) {
  return Ie((h(), P(
    "div",
    {
      class: p(e.n("content")),
      ref: "contentEl",
      onTransitionend: n[0] || (n[0] = (...o) => e.handleTransitionEnd && e.handleTransitionEnd(...o)),
      onTransitionstart: n[1] || (n[1] = (...o) => e.handleTransitionStart && e.handleTransitionStart(...o))
    },
    [
      N(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  )), [
    [Xn, e.showContent]
  ]);
}
const sp = _({
  name: Gy,
  props: lp,
  setup(e) {
    const n = k(!1), o = k(null), t = B(() => e.expand), { handleTransitionEnd: r, handleTransitionStart: a } = ap({
      contentEl: o,
      showContent: n,
      expand: t
    });
    return {
      showContent: n,
      contentEl: o,
      n: Xy,
      handleTransitionEnd: r,
      handleTransitionStart: a
    };
  }
});
sp.render = Zy;
var ma = sp;
te(ma);
ue(ma, lp);
const T5 = ma;
var xi = ma;
const up = {
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
}, { name: Jy, n: Qy } = x("countdown"), el = 1e3, nl = 60 * el, ol = 60 * nl, Bu = 24 * ol;
function _y(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      N(e.$slots, "default", $o(Kt(e.timeData)), () => [
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
const cp = _({
  name: Jy,
  props: up,
  setup(e) {
    const n = k(""), o = k({
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
        v(), e.autoStart && d();
      }
    ), Yo(() => {
      c(), e.autoStart && d();
    }), To(() => {
      l != null && (r = l, r === !0 && d(!0));
    }), pt(() => {
      l = r, f();
    }), jt(f);
    function s(y, m) {
      const b = Object.values(m), C = ["DD", "HH", "mm", "ss"], w = [24, 60, 60, 1e3];
      if (C.forEach((g, $) => {
        y.includes(g) ? y = y.replace(g, Fo(`${b[$]}`, 2, "0")) : b[$ + 1] += b[$] * w[$];
      }), y.includes("S")) {
        const g = Fo(`${b[b.length - 1]}`, 3, "0");
        y.includes("SSS") ? y = y.replace("SSS", g) : y.includes("SS") ? y = y.replace("SS", g.slice(0, 2)) : y = y.replace("S", g.slice(0, 1));
      }
      return y;
    }
    function u(y) {
      const m = Math.floor(y / Bu), b = Math.floor(y % Bu / ol), C = Math.floor(y % ol / nl), w = Math.floor(y % nl / el), g = Math.floor(y % el), $ = {
        days: m,
        hours: b,
        minutes: C,
        seconds: w,
        milliseconds: g
      };
      o.value = $, S(e.onChange, o.value), n.value = s(e.format, $);
    }
    function c() {
      const { time: y, onEnd: m } = e, b = performance.now();
      if (t || (t = b + F(y)), i = t - b, i < 0 && (i = 0), u(i), i === 0) {
        S(m);
        return;
      }
      r && (a = Dt(c));
    }
    function d(y = !1) {
      r && !y || (r = !0, t = performance.now() + (i || F(e.time)), c());
    }
    function f() {
      r = !1, Hs(a);
    }
    function v() {
      t = 0, r = !1, Hs(a), c();
    }
    return {
      showTime: n,
      timeData: o,
      n: Qy,
      start: d,
      pause: f,
      reset: v
    };
  }
});
cp.render = _y;
var ha = cp;
te(ha);
ue(ha, up);
const E5 = ha;
var tl = ha;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Qo = 9e15, Bo = 1e9, rl = "0123456789abcdef", Er = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Dr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", al = {
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
}, dp, lo, Ee = !0, ga = "[DecimalError] ", zo = ga + "Invalid argument: ", fp = ga + "Precision limit exceeded", pp = ga + "crypto unavailable", vp = "[object Decimal]", $n = Math.floor, cn = Math.pow, xy = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, e1 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, n1 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, mp = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Gn = 1e7, Pe = 7, o1 = 9007199254740991, t1 = Er.length - 1, il = Dr.length - 1, Z = { toStringTag: vp };
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
    throw Error(zo + n);
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
  return o.d ? o.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + Pe, t.rounding = 1, o = r1(t, kp(t, o)), t.precision = e, t.rounding = n, Ce(lo == 2 || lo == 3 ? o.neg() : o, e, n, !0)) : new t(1) : new t(NaN);
};
Z.cubeRoot = Z.cbrt = function() {
  var e, n, o, t, r, a, i, l, s, u, c = this, d = c.constructor;
  if (!c.isFinite() || c.isZero())
    return new d(c);
  for (Ee = !1, a = c.s * cn(c.s * c, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (o = vn(c.d), e = c.e, (a = (e - o.length + 1) % 3) && (o += a == 1 || a == -2 ? "0" : "00"), a = cn(o, 1 / 3), e = $n((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? o = "5e" + e : (o = a.toExponential(), o = o.slice(0, o.indexOf("e") + 1) + e), t = new d(o), t.s = c.s) : t = new d(a.toString()), i = (e = d.precision) + 3; ; )
    if (l = t, s = l.times(l).times(l), u = s.plus(c), t = Xe(u.plus(c).times(l), u.plus(s), i + 2, 1), vn(l.d).slice(0, i) === (o = vn(t.d)).slice(0, i))
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
  return Ee = !0, Ce(t, e, d.rounding, n);
};
Z.decimalPlaces = Z.dp = function() {
  var e, n = this.d, o = NaN;
  if (n) {
    if (e = n.length - 1, o = (e - $n(this.e / Pe)) * Pe, e = n[e], e)
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
  o = i.precision, t = i.rounding, i.precision = o + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / ya(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = st(i, 1, a.times(n), new i(1), !0);
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
    e = 1.4 * Math.sqrt(t), e = e > 16 ? 16 : e | 0, r = r.times(1 / ya(5, e)), r = st(a, 2, r, r, !0);
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
  return o.lte(1) ? new t(o.eq(1) ? 0 : NaN) : o.isFinite() ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(Math.abs(o.e), o.sd()) + 4, t.rounding = 1, Ee = !1, o = o.times(o).minus(1).sqrt().plus(o), Ee = !0, t.precision = e, t.rounding = n, o.ln()) : new t(o);
};
Z.inverseHyperbolicSine = Z.asinh = function() {
  var e, n, o = this, t = o.constructor;
  return !o.isFinite() || o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 2 * Math.max(Math.abs(o.e), o.sd()) + 6, t.rounding = 1, Ee = !1, o = o.times(o).plus(1).sqrt().plus(o), Ee = !0, t.precision = e, t.rounding = n, o.ln());
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
    if (u.abs().eq(1) && d + 4 <= il)
      return i = qn(c, d + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new c(NaN);
    if (d + 4 <= il)
      return i = qn(c, d + 4, f).times(0.5), i.s = u.s, i;
  }
  for (c.precision = l = d + 10, c.rounding = 1, o = Math.min(28, l / Pe + 2 | 0), e = o; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (Ee = !1, n = Math.ceil(l / Pe), t = 1, s = u.times(u), i = new c(u), r = u; e !== -1; )
    if (r = r.times(s), a = i.minus(r.div(t += 2)), r = r.times(s), i = a.plus(r.div(t += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === a.d[e] && e--; )
        ;
  return o && (i = i.times(2 << o - 1)), Ee = !0, Ce(i, c.precision = d, c.rounding = f, !0);
};
Z.isFinite = function() {
  return !!this.d;
};
Z.isInteger = Z.isInt = function() {
  return !!this.d && $n(this.e / Pe) > this.d.length - 2;
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
  if (Ee = !1, l = d + v, i = yo(u, l), t = n ? Br(c, l + 10) : yo(e, l), s = Xe(i, t, l, 1), Mt(s.d, r = d, f))
    do
      if (l += 10, i = yo(u, l), t = n ? Br(c, l + 10) : yo(e, l), s = Xe(i, t, l, 1), !a) {
        +vn(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = Ce(s, d + 1, 0));
        break;
      }
    while (Mt(s.d, r += 10, f));
  return Ee = !0, Ce(s, d, f);
};
Z.minus = Z.sub = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, y = v.constructor;
  if (e = new y(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new y(NaN) : v.d ? e.s = -e.s : e = new y(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s)
    return e.s = -e.s, v.plus(e);
  if (u = v.d, f = e.d, l = y.precision, s = y.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new y(v);
    else
      return new y(s === 3 ? -0 : 0);
    return Ee ? Ce(e, l, s) : e;
  }
  if (o = $n(e.e / Pe), c = $n(v.e / Pe), u = u.slice(), a = c - o, a) {
    for (d = a < 0, d ? (n = u, a = -a, i = f.length) : (n = f, o = c, i = u.length), t = Math.max(Math.ceil(l / Pe), i) + 2, a > t && (a = t, n.length = 1), n.reverse(), t = a; t--; )
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
  return u[0] ? (e.d = u, e.e = ba(u, o), Ee ? Ce(e, l, s) : e) : new y(s === 3 ? -0 : 0);
};
Z.modulo = Z.mod = function(e) {
  var n, o = this, t = o.constructor;
  return e = new t(e), !o.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || o.d && !o.d[0] ? Ce(new t(o), t.precision, t.rounding) : (Ee = !1, t.modulo == 9 ? (n = Xe(o, e.abs(), 0, 3, 1), n.s *= e.s) : n = Xe(o, e, 0, t.modulo, 1), n = n.times(e), Ee = !0, o.minus(n));
};
Z.naturalExponential = Z.exp = function() {
  return ll(this);
};
Z.naturalLogarithm = Z.ln = function() {
  return yo(this);
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
    return c[0] || (e = new f(d)), Ee ? Ce(e, l, s) : e;
  if (a = $n(d.e / Pe), t = $n(e.e / Pe), u = u.slice(), r = a - t, r) {
    for (r < 0 ? (o = u, r = -r, i = c.length) : (o = c, t = a, i = u.length), a = Math.ceil(l / Pe), i = a > i ? a + 1 : i + 1, r > i && (r = i, o.length = 1), o.reverse(); r--; )
      o.push(0);
    o.reverse();
  }
  for (i = u.length, r = c.length, i - r < 0 && (r = i, o = c, c = u, u = o), n = 0; r; )
    n = (u[--r] = u[r] + c[r] + n) / Gn | 0, u[r] %= Gn;
  for (n && (u.unshift(n), ++t), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = ba(u, t), Ee ? Ce(e, l, s) : e;
};
Z.precision = Z.sd = function(e) {
  var n, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(zo + e);
  return o.d ? (n = hp(o.d), e && o.e + 1 > n && (n = o.e + 1)) : n = NaN, n;
};
Z.round = function() {
  var e = this, n = e.constructor;
  return Ce(new n(e), e.e + 1, n.rounding);
};
Z.sine = Z.sin = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + Pe, t.rounding = 1, o = i1(t, kp(t, o)), t.precision = e, t.rounding = n, Ce(lo > 2 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
Z.squareRoot = Z.sqrt = function() {
  var e, n, o, t, r, a, i = this, l = i.d, s = i.e, u = i.s, c = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new c(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (Ee = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = vn(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = $n((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), t = new c(n)) : t = new c(u.toString()), o = (s = c.precision) + 3; ; )
    if (a = t, t = a.plus(Xe(i, a, o + 2, 1)).times(0.5), vn(a.d).slice(0, o) === (n = vn(t.d)).slice(0, o))
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
  return Ee = !0, Ce(t, s, c.rounding, e);
};
Z.tangent = Z.tan = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 10, t.rounding = 1, o = o.sin(), o.s = 1, o = Xe(o, new t(1).minus(o.times(o)).sqrt(), e + 10, 0), t.precision = e, t.rounding = n, Ce(lo == 2 || lo == 4 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
Z.times = Z.mul = function(e) {
  var n, o, t, r, a, i, l, s, u, c = this, d = c.constructor, f = c.d, v = (e = new d(e)).d;
  if (e.s *= c.s, !f || !f[0] || !v || !v[0])
    return new d(!e.s || f && !f[0] && !v || v && !v[0] && !f ? NaN : !f || !v ? e.s / 0 : e.s * 0);
  for (o = $n(c.e / Pe) + $n(e.e / Pe), s = f.length, u = v.length, s < u && (a = f, f = v, v = a, i = s, s = u, u = i), a = [], i = s + u, t = i; t--; )
    a.push(0);
  for (t = u; --t >= 0; ) {
    for (n = 0, r = s + t; r > t; )
      l = a[r] + v[t] * f[r - t - 1] + n, a[r--] = l % Gn | 0, n = l / Gn | 0;
    a[r] = (a[r] + n) % Gn | 0;
  }
  for (; !a[--i]; )
    a.pop();
  return n ? ++o : a.shift(), e.d = a, e.e = ba(a, o), Ee ? Ce(e, d.precision, d.rounding) : e;
};
Z.toBinary = function(e, n) {
  return ys(this, 2, e, n);
};
Z.toDecimalPlaces = Z.toDP = function(e, n) {
  var o = this, t = o.constructor;
  return o = new t(o), e === void 0 ? o : (Dn(e, 0, Bo), n === void 0 ? n = t.rounding : Dn(n, 0, 8), Ce(o, e + o.e + 1, n));
};
Z.toExponential = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = _n(t, !0) : (Dn(e, 0, Bo), n === void 0 ? n = r.rounding : Dn(n, 0, 8), t = Ce(new r(t), e + 1, n), o = _n(t, !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
Z.toFixed = function(e, n) {
  var o, t, r = this, a = r.constructor;
  return e === void 0 ? o = _n(r) : (Dn(e, 0, Bo), n === void 0 ? n = a.rounding : Dn(n, 0, 8), t = Ce(new a(r), e + r.e + 1, n), o = _n(t, !1, e + t.e + 1)), r.isNeg() && !r.isZero() ? "-" + o : o;
};
Z.toFraction = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, y = v.d, m = v.constructor;
  if (!y)
    return new m(v);
  if (u = o = new m(1), t = s = new m(0), n = new m(t), a = n.e = hp(y) - v.e - 1, i = a % Pe, n.d[0] = cn(10, i < 0 ? Pe + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new m(e), !l.isInt() || l.lt(u))
      throw Error(zo + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Ee = !1, l = new m(vn(y)), c = m.precision, m.precision = a = y.length * Pe * 2; d = Xe(l, n, 0, 1, 1), r = o.plus(d.times(t)), r.cmp(e) != 1; )
    o = t, t = r, r = u, u = s.plus(d.times(r)), s = r, r = n, n = l.minus(d.times(r)), l = r;
  return r = Xe(e.minus(o), t, 0, 1, 1), s = s.plus(r.times(u)), o = o.plus(r.times(t)), s.s = u.s = v.s, f = Xe(u, t, a, 1).minus(v).abs().cmp(Xe(s, o, a, 1).minus(v).abs()) < 1 ? [u, t] : [s, o], m.precision = c, Ee = !0, f;
};
Z.toHexadecimal = Z.toHex = function(e, n) {
  return ys(this, 16, e, n);
};
Z.toNearest = function(e, n) {
  var o = this, t = o.constructor;
  if (o = new t(o), e == null) {
    if (!o.d)
      return o;
    e = new t(1), n = t.rounding;
  } else {
    if (e = new t(e), n === void 0 ? n = t.rounding : Dn(n, 0, 8), !o.d)
      return e.s ? o : e;
    if (!e.d)
      return e.s && (e.s = o.s), e;
  }
  return e.d[0] ? (Ee = !1, o = Xe(o, e, 0, n, 1).times(e), Ee = !0, Ce(o)) : (e.s = o.s, o = e), o;
};
Z.toNumber = function() {
  return +this;
};
Z.toOctal = function(e, n) {
  return ys(this, 8, e, n);
};
Z.toPower = Z.pow = function(e) {
  var n, o, t, r, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(cn(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (t = s.precision, a = s.rounding, e.eq(1))
    return Ce(l, t, a);
  if (n = $n(e.e / Pe), n >= e.d.length - 1 && (o = u < 0 ? -u : u) <= o1)
    return r = gp(s, l, o, t), e.s < 0 ? new s(1).div(r) : Ce(r, t, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return o = cn(+l, u), n = o == 0 || !isFinite(o) ? $n(u * (Math.log("0." + vn(l.d)) / Math.LN10 + l.e + 1)) : new s(o + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Ee = !1, s.rounding = l.s = 1, o = Math.min(12, (n + "").length), r = ll(e.times(yo(l, t + o)), t), r.d && (r = Ce(r, t + 5, 1), Mt(r.d, t, a) && (n = t + 10, r = Ce(ll(e.times(yo(l, n + o)), n), n + 5, 1), +vn(r.d).slice(t + 1, t + 15) + 1 == 1e14 && (r = Ce(r, t + 1, 0)))), r.s = i, Ee = !0, s.rounding = a, Ce(r, t, a));
};
Z.toPrecision = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = _n(t, t.e <= r.toExpNeg || t.e >= r.toExpPos) : (Dn(e, 1, Bo), n === void 0 ? n = r.rounding : Dn(n, 0, 8), t = Ce(new r(t), e, n), o = _n(t, e <= t.e || t.e <= r.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
Z.toSignificantDigits = Z.toSD = function(e, n) {
  var o = this, t = o.constructor;
  return e === void 0 ? (e = t.precision, n = t.rounding) : (Dn(e, 1, Bo), n === void 0 ? n = t.rounding : Dn(n, 0, 8)), Ce(new t(o), e, n);
};
Z.toString = function() {
  var e = this, n = e.constructor, o = _n(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + o : o;
};
Z.truncated = Z.trunc = function() {
  return Ce(new this.constructor(this), this.e + 1, 1);
};
Z.valueOf = Z.toJSON = function() {
  var e = this, n = e.constructor, o = _n(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + o : o;
};
function vn(e) {
  var n, o, t, r = e.length - 1, a = "", i = e[0];
  if (r > 0) {
    for (a += i, n = 1; n < r; n++)
      t = e[n] + "", o = Pe - t.length, o && (a += po(o)), a += t;
    i = e[n], t = i + "", o = Pe - t.length, o && (a += po(o));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return a + i;
}
function Dn(e, n, o) {
  if (e !== ~~e || e < n || e > o)
    throw Error(zo + e);
}
function Mt(e, n, o, t) {
  var r, a, i, l;
  for (a = e[0]; a >= 10; a /= 10)
    --n;
  return --n < 0 ? (n += Pe, r = 0) : (r = Math.ceil((n + 1) / Pe), n %= Pe), a = cn(10, Pe - n), l = e[r] % a | 0, t == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = o < 4 && l == 99999 || o > 3 && l == 49999 || l == 5e4 || l == 0) : i = (o < 4 && l + 1 == a || o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == cn(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[r + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (t || o < 4) && l == 9999 || !t && o > 3 && l == 4999) : i = ((t || o < 4) && l + 1 == a || !t && o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == cn(10, n - 3) - 1, i;
}
function hr(e, n, o) {
  for (var t, r = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = r.length; a--; )
      r[a] *= n;
    for (r[0] += rl.indexOf(e.charAt(i++)), t = 0; t < r.length; t++)
      r[t] > o - 1 && (r[t + 1] === void 0 && (r[t + 1] = 0), r[t + 1] += r[t] / o | 0, r[t] %= o);
  }
  return r.reverse();
}
function r1(e, n) {
  var o, t, r;
  if (n.isZero())
    return n;
  t = n.d.length, t < 32 ? (o = Math.ceil(t / 3), r = (1 / ya(4, o)).toString()) : (o = 16, r = "2.3283064365386962890625e-10"), e.precision += o, n = st(e, 1, n.times(r), new e(1));
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
    var u, c, d, f, v, y, m, b, C, w, g, $, O, z, L, T, E, D, M, Y, j = t.constructor, R = t.s == r.s ? 1 : -1, K = t.d, W = r.d;
    if (!K || !K[0] || !W || !W[0])
      return new j(
        // Return NaN if either NaN, or both Infinity or 0.
        !t.s || !r.s || (K ? W && K[0] == W[0] : !W) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          K && K[0] == 0 || !W ? R * 0 : R / 0
        )
      );
    for (s ? (v = 1, c = t.e - r.e) : (s = Gn, v = Pe, c = $n(t.e / v) - $n(r.e / v)), M = W.length, E = K.length, C = new j(R), w = C.d = [], d = 0; W[d] == (K[d] || 0); d++)
      ;
    if (W[d] > (K[d] || 0) && c--, a == null ? (z = a = j.precision, i = j.rounding) : l ? z = a + (t.e - r.e) + 1 : z = a, z < 0)
      w.push(1), y = !0;
    else {
      if (z = z / v + 2 | 0, d = 0, M == 1) {
        for (f = 0, W = W[0], z++; (d < E || f) && z--; d++)
          L = f * s + (K[d] || 0), w[d] = L / W | 0, f = L % W | 0;
        y = f || d < E;
      } else {
        for (f = s / (W[0] + 1) | 0, f > 1 && (W = e(W, f, s), K = e(K, f, s), M = W.length, E = K.length), T = M, g = K.slice(0, M), $ = g.length; $ < M; )
          g[$++] = 0;
        Y = W.slice(), Y.unshift(0), D = W[0], W[1] >= s / 2 && ++D;
        do
          f = 0, u = n(W, g, M, $), u < 0 ? (O = g[0], M != $ && (O = O * s + (g[1] || 0)), f = O / D | 0, f > 1 ? (f >= s && (f = s - 1), m = e(W, f, s), b = m.length, $ = g.length, u = n(m, g, b, $), u == 1 && (f--, o(m, M < b ? Y : W, b, s))) : (f == 0 && (u = f = 1), m = W.slice()), b = m.length, b < $ && m.unshift(0), o(g, m, $, s), u == -1 && ($ = g.length, u = n(W, g, M, $), u < 1 && (f++, o(g, M < $ ? Y : W, $, s))), $ = g.length) : u === 0 && (f++, g = [0]), w[d++] = f, u && g[0] ? g[$++] = K[T] || 0 : (g = [K[T]], $ = 1);
        while ((T++ < E || g[0] !== void 0) && z--);
        y = g[0] !== void 0;
      }
      w[0] || w.shift();
    }
    if (v == 1)
      C.e = c, dp = y;
    else {
      for (d = 1, f = w[0]; f >= 10; f /= 10)
        d++;
      C.e = d + c * v - 1, Ce(C, l ? a + C.e + 1 : a, i, y);
    }
    return C;
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
        a += Pe, i = n, c = d[f = 0], s = c / cn(10, r - i - 1) % 10 | 0;
      else if (f = Math.ceil((a + 1) / Pe), l = d.length, f >= l)
        if (t) {
          for (; l++ <= f; )
            d.push(0);
          c = s = 0, r = 1, a %= Pe, i = a - Pe + 1;
        } else
          break e;
      else {
        for (c = l = d[f], r = 1; l >= 10; l /= 10)
          r++;
        a %= Pe, i = a - Pe + r, s = i < 0 ? 0 : c / cn(10, r - i - 1) % 10 | 0;
      }
      if (t = t || n < 0 || d[f + 1] !== void 0 || (i < 0 ? c : c % cn(10, r - i - 1)), u = o < 4 ? (s || t) && (o == 0 || o == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (o == 4 || t || o == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (a > 0 ? i > 0 ? c / cn(10, r - i) : 0 : d[f - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !d[0])
        return d.length = 0, u ? (n -= e.e + 1, d[0] = cn(10, (Pe - n % Pe) % Pe), e.e = -n || 0) : d[0] = e.e = 0, e;
      if (a == 0 ? (d.length = f, l = 1, f--) : (d.length = f + 1, l = cn(10, Pe - a), d[f] = i > 0 ? (c / cn(10, r - i) % cn(10, i) | 0) * l : 0), u)
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
  return Ee && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e;
}
function _n(e, n, o) {
  if (!e.isFinite())
    return yp(e);
  var t, r = e.e, a = vn(e.d), i = a.length;
  return n ? (o && (t = o - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + po(t) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + po(-r - 1) + a, o && (t = o - i) > 0 && (a += po(t))) : r >= i ? (a += po(r + 1 - i), o && (t = o - r - 1) > 0 && (a = a + "." + po(t))) : ((t = r + 1) < i && (a = a.slice(0, t) + "." + a.slice(t)), o && (t = o - i) > 0 && (r + 1 === i && (a += "."), a += po(t))), a;
}
function ba(e, n) {
  var o = e[0];
  for (n *= Pe; o >= 10; o /= 10)
    n++;
  return n;
}
function Br(e, n, o) {
  if (n > t1)
    throw Ee = !0, o && (e.precision = o), Error(fp);
  return Ce(new e(Er), n, 1, !0);
}
function qn(e, n, o) {
  if (n > il)
    throw Error(fp);
  return Ce(new e(Dr), n, o, !0);
}
function hp(e) {
  var n = e.length - 1, o = n * Pe + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      o--;
    for (n = e[0]; n >= 10; n /= 10)
      o++;
  }
  return o;
}
function po(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function gp(e, n, o, t) {
  var r, a = new e(1), i = Math.ceil(t / Pe + 4);
  for (Ee = !1; ; ) {
    if (o % 2 && (a = a.times(n), Mu(a.d, i) && (r = !0)), o = $n(o / 2), o === 0) {
      o = a.d.length - 1, r && a.d[o] === 0 && ++a.d[o];
      break;
    }
    n = n.times(n), Mu(n.d, i);
  }
  return Ee = !0, a;
}
function Iu(e) {
  return e.d[e.d.length - 1] & 1;
}
function bp(e, n, o) {
  for (var t, r = new e(n[0]), a = 0; ++a < n.length; )
    if (t = new e(n[a]), t.s)
      r[o](t) && (r = t);
    else {
      r = t;
      break;
    }
  return r;
}
function ll(e, n) {
  var o, t, r, a, i, l, s, u = 0, c = 0, d = 0, f = e.constructor, v = f.rounding, y = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (Ee = !1, s = y) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), d += 5;
  for (t = Math.log(cn(2, d)) / Math.LN10 * 2 + 5 | 0, s += t, o = a = i = new f(1), f.precision = s; ; ) {
    if (a = Ce(a.times(e), s, 1), o = o.times(++c), l = i.plus(Xe(a, o, s, 1)), vn(l.d).slice(0, s) === vn(i.d).slice(0, s)) {
      for (r = d; r--; )
        i = Ce(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Mt(i.d, s - t, v, u))
          f.precision = s += 10, o = a = l = new f(1), c = 0, u++;
        else
          return Ce(i, f.precision = y, v, Ee = !0);
      else
        return f.precision = y, i;
    }
    i = l;
  }
}
function yo(e, n) {
  var o, t, r, a, i, l, s, u, c, d, f, v = 1, y = 10, m = e, b = m.d, C = m.constructor, w = C.rounding, g = C.precision;
  if (m.s < 0 || !b || !b[0] || !m.e && b[0] == 1 && b.length == 1)
    return new C(b && !b[0] ? -1 / 0 : m.s != 1 ? NaN : b ? 0 : m);
  if (n == null ? (Ee = !1, c = g) : c = n, C.precision = c += y, o = vn(b), t = o.charAt(0), Math.abs(a = m.e) < 15e14) {
    for (; t < 7 && t != 1 || t == 1 && o.charAt(1) > 3; )
      m = m.times(e), o = vn(m.d), t = o.charAt(0), v++;
    a = m.e, t > 1 ? (m = new C("0." + o), a++) : m = new C(t + "." + o.slice(1));
  } else
    return u = Br(C, c + 2, g).times(a + ""), m = yo(new C(t + "." + o.slice(1)), c - y).plus(u), C.precision = g, n == null ? Ce(m, g, w, Ee = !0) : m;
  for (d = m, s = i = m = Xe(m.minus(1), m.plus(1), c, 1), f = Ce(m.times(m), c, 1), r = 3; ; ) {
    if (i = Ce(i.times(f), c, 1), u = s.plus(Xe(i, new C(r), c, 1)), vn(u.d).slice(0, c) === vn(s.d).slice(0, c))
      if (s = s.times(2), a !== 0 && (s = s.plus(Br(C, c + 2, g).times(a + ""))), s = Xe(s, new C(v), c, 1), n == null)
        if (Mt(s.d, c - y, w, l))
          C.precision = c += y, u = i = m = Xe(d.minus(1), d.plus(1), c, 1), f = Ce(m.times(m), c, 1), r = l = 1;
        else
          return Ce(s, C.precision = g, w, Ee = !0);
      else
        return C.precision = g, s;
    s = u, r += 2;
  }
}
function yp(e) {
  return String(e.s * e.s / 0);
}
function sl(e, n) {
  var o, t, r;
  for ((o = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (t = n.search(/e/i)) > 0 ? (o < 0 && (o = t), o += +n.slice(t + 1), n = n.substring(0, t)) : o < 0 && (o = n.length), t = 0; n.charCodeAt(t) === 48; t++)
    ;
  for (r = n.length; n.charCodeAt(r - 1) === 48; --r)
    ;
  if (n = n.slice(t, r), n) {
    if (r -= t, e.e = o = o - t - 1, e.d = [], t = (o + 1) % Pe, o < 0 && (t += Pe), t < r) {
      for (t && e.d.push(+n.slice(0, t)), r -= Pe; t < r; )
        e.d.push(+n.slice(t, t += Pe));
      n = n.slice(t), t = Pe - n.length;
    } else
      t -= r;
    for (; t--; )
      n += "0";
    e.d.push(+n), Ee && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function a1(e, n) {
  var o, t, r, a, i, l, s, u, c;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), mp.test(n))
      return sl(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (e1.test(n))
    o = 16, n = n.toLowerCase();
  else if (xy.test(n))
    o = 2;
  else if (n1.test(n))
    o = 8;
  else
    throw Error(zo + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, t = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = gp(t, new t(o), a, a * 2)), u = hr(n, o, Gn), c = u.length - 1, a = c; u[a] === 0; --a)
    u.pop();
  return a < 0 ? new t(e.s * 0) : (e.e = ba(u, c), e.d = u, Ee = !1, i && (e = Xe(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? cn(2, s) : ko.pow(2, s))), Ee = !0, e);
}
function i1(e, n) {
  var o, t = n.d.length;
  if (t < 3)
    return n.isZero() ? n : st(e, 2, n, n);
  o = 1.4 * Math.sqrt(t), o = o > 16 ? 16 : o | 0, n = n.times(1 / ya(5, o)), n = st(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), l = new e(20); o--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(l))));
  return n;
}
function st(e, n, o, t, r) {
  var a, i, l, s, u = e.precision, c = Math.ceil(u / Pe);
  for (Ee = !1, s = o.times(o), l = new e(t); ; ) {
    if (i = Xe(l.times(s), new e(n++ * n++), u, 1), l = r ? t.plus(i) : t.minus(i), t = Xe(i.times(s), new e(n++ * n++), u, 1), i = l.plus(t), i.d[c] !== void 0) {
      for (a = c; i.d[a] === l.d[a] && a--; )
        ;
      if (a == -1)
        break;
    }
    a = l, l = t, t = i, i = a;
  }
  return Ee = !0, i.d.length = c + 1, i;
}
function ya(e, n) {
  for (var o = e; --n; )
    o *= e;
  return o;
}
function kp(e, n) {
  var o, t = n.s < 0, r = qn(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return lo = t ? 4 : 1, n;
  if (o = n.divToInt(r), o.isZero())
    lo = t ? 3 : 2;
  else {
    if (n = n.minus(o.times(r)), n.lte(a))
      return lo = Iu(o) ? t ? 2 : 3 : t ? 4 : 1, n;
    lo = Iu(o) ? t ? 1 : 4 : t ? 3 : 2;
  }
  return n.minus(r).abs();
}
function ys(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, v = e.constructor, y = o !== void 0;
  if (y ? (Dn(o, 1, Bo), t === void 0 ? t = v.rounding : Dn(t, 0, 8)) : (o = v.precision, t = v.rounding), !e.isFinite())
    c = yp(e);
  else {
    for (c = _n(e), i = c.indexOf("."), y ? (r = 2, n == 16 ? o = o * 4 - 3 : n == 8 && (o = o * 3 - 2)) : r = n, i >= 0 && (c = c.replace(".", ""), f = new v(1), f.e = c.length - i, f.d = hr(_n(f), 10, r), f.e = f.d.length), d = hr(c, 10, r), a = s = d.length; d[--s] == 0; )
      d.pop();
    if (!d[0])
      c = y ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = d, e.e = a, e = Xe(e, f, o, t, 0, r), d = e.d, a = e.e, u = dp), i = d[o], l = r / 2, u = u || d[o + 1] !== void 0, u = t < 4 ? (i !== void 0 || u) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : i > l || i === l && (t === 4 || u || t === 6 && d[o - 1] & 1 || t === (e.s < 0 ? 8 : 7)), d.length = o, u)
        for (; ++d[--o] > r - 1; )
          d[o] = 0, o || (++a, d.unshift(1));
      for (s = d.length; !d[s - 1]; --s)
        ;
      for (i = 0, c = ""; i < s; i++)
        c += rl.charAt(d[i]);
      if (y) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              c += "0";
            for (d = hr(c, r, n), s = d.length; !d[s - 1]; --s)
              ;
            for (i = 1, c = "1."; i < s; i++)
              c += rl.charAt(d[i]);
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
function Mu(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function l1(e) {
  return new this(e).abs();
}
function s1(e) {
  return new this(e).acos();
}
function u1(e) {
  return new this(e).acosh();
}
function c1(e, n) {
  return new this(e).plus(n);
}
function d1(e) {
  return new this(e).asin();
}
function f1(e) {
  return new this(e).asinh();
}
function p1(e) {
  return new this(e).atan();
}
function v1(e) {
  return new this(e).atanh();
}
function m1(e, n) {
  e = new this(e), n = new this(n);
  var o, t = this.precision, r = this.rounding, a = t + 4;
  return !e.s || !n.s ? o = new this(NaN) : !e.d && !n.d ? (o = qn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), o.s = e.s) : !n.d || e.isZero() ? (o = n.s < 0 ? qn(this, t, r) : new this(0), o.s = e.s) : !e.d || n.isZero() ? (o = qn(this, a, 1).times(0.5), o.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, o = this.atan(Xe(e, n, a, 1)), n = qn(this, a, 1), this.precision = t, this.rounding = r, o = e.s < 0 ? o.minus(n) : o.plus(n)) : o = this.atan(Xe(e, n, a, 1)), o;
}
function h1(e) {
  return new this(e).cbrt();
}
function g1(e) {
  return Ce(e = new this(e), e.e + 1, 2);
}
function b1(e, n, o) {
  return new this(e).clamp(n, o);
}
function y1(e) {
  if (!e || typeof e != "object")
    throw Error(ga + "Object expected");
  var n, o, t, r = e.defaults === !0, a = [
    "precision",
    1,
    Bo,
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
    if (o = a[n], r && (this[o] = al[o]), (t = e[o]) !== void 0)
      if ($n(t) === t && t >= a[n + 1] && t <= a[n + 2])
        this[o] = t;
      else
        throw Error(zo + o + ": " + t);
  if (o = "crypto", r && (this[o] = al[o]), (t = e[o]) !== void 0)
    if (t === !0 || t === !1 || t === 0 || t === 1)
      if (t)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[o] = !0;
        else
          throw Error(pp);
      else
        this[o] = !1;
    else
      throw Error(zo + o + ": " + t);
  return this;
}
function k1(e) {
  return new this(e).cos();
}
function $1(e) {
  return new this(e).cosh();
}
function $p(e) {
  var n, o, t;
  function r(a) {
    var i, l, s, u = this;
    if (!(u instanceof r))
      return new r(a);
    if (u.constructor = r, Au(a)) {
      u.s = a.s, Ee ? !a.d || a.e > r.maxE ? (u.e = NaN, u.d = null) : a.e < r.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
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
        Ee ? i > r.maxE ? (u.e = NaN, u.d = null) : i < r.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [a]) : (u.e = i, u.d = [a]);
        return;
      } else if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return sl(u, a.toString());
    } else if (s !== "string")
      throw Error(zo + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), mp.test(a) ? sl(u, a) : a1(u, a);
  }
  if (r.prototype = Z, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = y1, r.clone = $p, r.isDecimal = Au, r.abs = l1, r.acos = s1, r.acosh = u1, r.add = c1, r.asin = d1, r.asinh = f1, r.atan = p1, r.atanh = v1, r.atan2 = m1, r.cbrt = h1, r.ceil = g1, r.clamp = b1, r.cos = k1, r.cosh = $1, r.div = w1, r.exp = C1, r.floor = S1, r.hypot = P1, r.ln = z1, r.log = O1, r.log10 = E1, r.log2 = T1, r.max = D1, r.min = B1, r.mod = I1, r.mul = M1, r.pow = A1, r.random = N1, r.round = V1, r.sign = L1, r.sin = R1, r.sinh = F1, r.sqrt = U1, r.sub = H1, r.sum = Y1, r.tan = j1, r.tanh = W1, r.trunc = K1, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (t = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < t.length; )
      e.hasOwnProperty(o = t[n++]) || (e[o] = this[o]);
  return r.config(e), r;
}
function w1(e, n) {
  return new this(e).div(n);
}
function C1(e) {
  return new this(e).exp();
}
function S1(e) {
  return Ce(e = new this(e), e.e + 1, 3);
}
function P1() {
  var e, n, o = new this(0);
  for (Ee = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      o.d && (o = o.plus(n.times(n)));
    else {
      if (n.s)
        return Ee = !0, new this(1 / 0);
      o = n;
    }
  return Ee = !0, o.sqrt();
}
function Au(e) {
  return e instanceof ko || e && e.toStringTag === vp || !1;
}
function z1(e) {
  return new this(e).ln();
}
function O1(e, n) {
  return new this(e).log(n);
}
function T1(e) {
  return new this(e).log(2);
}
function E1(e) {
  return new this(e).log(10);
}
function D1() {
  return bp(this, arguments, "lt");
}
function B1() {
  return bp(this, arguments, "gt");
}
function I1(e, n) {
  return new this(e).mod(n);
}
function M1(e, n) {
  return new this(e).mul(n);
}
function A1(e, n) {
  return new this(e).pow(n);
}
function N1(e) {
  var n, o, t, r, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : Dn(e, 1, Bo), t = Math.ceil(e / Pe), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(t)); a < t; )
        r = n[a], r >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(t *= 4); a < t; )
        r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(r % 1e7), a += 4);
      a = t / 4;
    } else
      throw Error(pp);
  else
    for (; a < t; )
      l[a++] = Math.random() * 1e7 | 0;
  for (t = l[--a], e %= Pe, t && e && (r = cn(10, Pe - e), l[a] = (t / r | 0) * r); l[a] === 0; a--)
    l.pop();
  if (a < 0)
    o = 0, l = [0];
  else {
    for (o = -1; l[0] === 0; o -= Pe)
      l.shift();
    for (t = 1, r = l[0]; r >= 10; r /= 10)
      t++;
    t < Pe && (o -= Pe - t);
  }
  return i.e = o, i.d = l, i;
}
function V1(e) {
  return Ce(e = new this(e), e.e + 1, this.rounding);
}
function L1(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function R1(e) {
  return new this(e).sin();
}
function F1(e) {
  return new this(e).sinh();
}
function U1(e) {
  return new this(e).sqrt();
}
function H1(e, n) {
  return new this(e).sub(n);
}
function Y1() {
  var e = 0, n = arguments, o = new this(n[e]);
  for (Ee = !1; o.s && ++e < n.length; )
    o = o.plus(n[e]);
  return Ee = !0, Ce(o, this.precision, this.rounding);
}
function j1(e) {
  return new this(e).tan();
}
function W1(e) {
  return new this(e).tanh();
}
function K1(e) {
  return Ce(e = new this(e), e.e + 1, 1);
}
Z[Symbol.for("nodejs.util.inspect.custom")] = Z.toString;
Z[Symbol.toStringTag] = "Decimal";
var ko = Z.constructor = $p(al);
Er = new ko(Er);
Dr = new ko(Dr);
const wp = {
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
  onBeforeChange: V(),
  onChange: V(),
  onIncrement: V(),
  onDecrement: V(),
  "onUpdate:modelValue": V()
}, Nu = 100, Vu = 600, { name: q1, n: G1, classes: X1 } = x("counter"), Z1 = ["inputmode", "readonly", "disabled"];
function J1(e, n) {
  const o = ne("var-icon"), t = ne("var-button"), r = ne("var-form-details");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      I(
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
            default: fe(() => [
              G(o, { name: "minus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]),
          Ie(I("input", {
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
          }, null, 46, Z1), [
            [gh, e.inputValue]
          ]),
          G(t, {
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
const Cp = _({
  name: q1,
  components: {
    VarButton: Sn,
    VarIcon: Ze,
    VarFormDetails: En
  },
  directives: { Ripple: tn },
  inheritAttrs: !1,
  props: wp,
  setup(e) {
    const n = k(""), { bindForm: o, form: t } = jn(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = Yn(), { readonly: s, disabled: u } = t ?? {}, c = B(() => {
      const { max: W, modelValue: ce } = e;
      return W != null && F(ce) >= F(W);
    }), d = B(() => {
      const { min: W, modelValue: ce } = e;
      return W != null && F(ce) <= F(W);
    });
    let f, v, y, m;
    S(o, {
      reset: g,
      validate: C,
      resetValidation: l
    }), de(
      () => e.modelValue,
      (W) => {
        R($(String(W))), S(e.onChange, F(W));
      }
    ), R($(String(e.modelValue)));
    function C() {
      return i(e.rules, e.modelValue);
    }
    function w(W) {
      Ke(() => {
        const { validateTrigger: ce, rules: Q, modelValue: pe } = e;
        a(ce, W, Q, pe);
      });
    }
    function g() {
      const { min: W } = e;
      S(e["onUpdate:modelValue"], W != null ? F(W) : 0), l();
    }
    function $(W) {
      const { decimalLength: ce, max: Q, min: pe } = e;
      let ye = F(W);
      return Q != null && ye > F(Q) && (ye = F(Q)), pe != null && ye < F(pe) && (ye = F(pe)), W = String(ye), ce != null && (W = ye.toFixed(F(ce))), W;
    }
    function O(W) {
      const { lazyChange: ce, onBeforeChange: Q } = e, { value: pe } = W.target, ye = $(pe);
      ce ? S(Q, F(ye), K) : R(ye), w("onInputChange");
    }
    function z() {
      const {
        disabled: W,
        readonly: ce,
        disableDecrement: Q,
        decrementButton: pe,
        lazyChange: ye,
        step: ie,
        modelValue: U,
        onDecrement: J,
        onBeforeChange: ae
      } = e;
      if (u != null && u.value || s != null && s.value || W || ce || Q || !pe || d.value)
        return;
      const A = new ko(F(U)).minus(new ko(F(ie))).toString(), H = $(A), ee = F(H);
      S(J, ee), ye ? S(ae, ee, K) : (R(H), w("onDecrement"));
    }
    function L() {
      const {
        disabled: W,
        readonly: ce,
        disableIncrement: Q,
        incrementButton: pe,
        lazyChange: ye,
        step: ie,
        modelValue: U,
        onIncrement: J,
        onBeforeChange: ae
      } = e;
      if (u != null && u.value || s != null && s.value || W || ce || Q || !pe || c.value)
        return;
      const A = new ko(F(U)).plus(new ko(F(ie))).toString(), H = $(A), ee = F(H);
      S(J, ee), ye ? S(ae, ee, K) : (R(H), w("onIncrement"));
    }
    function T() {
      const { press: W, lazyChange: ce } = e;
      !W || ce || (m = window.setTimeout(() => {
        j();
      }, Vu));
    }
    function E() {
      const { press: W, lazyChange: ce } = e;
      !W || ce || (y = window.setTimeout(() => {
        Y();
      }, Vu));
    }
    function D() {
      v && clearTimeout(v), m && clearTimeout(m);
    }
    function M() {
      f && clearTimeout(f), y && clearTimeout(y);
    }
    function Y() {
      f = window.setTimeout(() => {
        L(), Y();
      }, Nu);
    }
    function j() {
      v = window.setTimeout(() => {
        z(), j();
      }, Nu);
    }
    function R(W) {
      n.value = W;
      const ce = F(W);
      S(e["onUpdate:modelValue"], ce);
    }
    function K(W) {
      R($(String(W))), w("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: s,
      isMax: c,
      isMin: d,
      n: G1,
      classes: X1,
      formatElevation: dn,
      validate: C,
      reset: g,
      resetValidation: l,
      handleChange: O,
      decrement: z,
      increment: L,
      pressDecrement: T,
      pressIncrement: E,
      releaseDecrement: D,
      releaseIncrement: M,
      toSizeUnit: ze,
      toNumber: F
    };
  }
});
Cp.render = J1;
var ka = Cp;
te(ka);
ue(ka, wp);
const D5 = ka;
var ul = ka, Sp = 60, Pp = Sp * 60, zp = Pp * 24, Q1 = zp * 7, ut = 1e3, Si = Sp * ut, Lu = Pp * ut, _1 = zp * ut, x1 = Q1 * ut, ks = "millisecond", _o = "second", xo = "minute", et = "hour", vo = "day", gr = "week", Kn = "month", Op = "quarter", mo = "year", nt = "date", ek = "YYYY-MM-DDTHH:mm:ssZ", Ru = "Invalid Date", nk = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, ok = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const tk = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var cl = function(n, o, t) {
  var r = String(n);
  return !r || r.length >= o ? n : "" + Array(o + 1 - r.length).join(t) + n;
}, rk = function(n) {
  var o = -n.utcOffset(), t = Math.abs(o), r = Math.floor(t / 60), a = t % 60;
  return (o <= 0 ? "+" : "-") + cl(r, 2, "0") + ":" + cl(a, 2, "0");
}, ak = function e(n, o) {
  if (n.date() < o.date())
    return -e(o, n);
  var t = (o.year() - n.year()) * 12 + (o.month() - n.month()), r = n.clone().add(t, Kn), a = o - r < 0, i = n.clone().add(t + (a ? -1 : 1), Kn);
  return +(-(t + (o - r) / (a ? r - i : i - r)) || 0);
}, ik = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, lk = function(n) {
  var o = {
    M: Kn,
    y: mo,
    w: gr,
    d: vo,
    D: nt,
    h: et,
    m: xo,
    s: _o,
    ms: ks,
    Q: Op
  };
  return o[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, sk = function(n) {
  return n === void 0;
};
const uk = {
  s: cl,
  z: rk,
  m: ak,
  a: ik,
  p: lk,
  u: sk
};
var St = "en", Lo = {};
Lo[St] = tk;
var $s = function(n) {
  return n instanceof $a;
}, Ir = function e(n, o, t) {
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
}, se = function(n, o) {
  if ($s(n))
    return n.clone();
  var t = typeof o == "object" ? o : {};
  return t.date = n, t.args = arguments, new $a(t);
}, ck = function(n, o) {
  return se(n, {
    locale: o.$L,
    utc: o.$u,
    x: o.$x,
    $offset: o.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, qe = uk;
qe.l = Ir;
qe.i = $s;
qe.w = ck;
var dk = function(n) {
  var o = n.date, t = n.utc;
  if (o === null)
    return /* @__PURE__ */ new Date(NaN);
  if (qe.u(o))
    return /* @__PURE__ */ new Date();
  if (o instanceof Date)
    return new Date(o);
  if (typeof o == "string" && !/Z$/i.test(o)) {
    var r = o.match(nk);
    if (r) {
      var a = r[2] - 1 || 0, i = (r[7] || "0").substring(0, 3);
      return t ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
    }
  }
  return new Date(o);
}, $a = /* @__PURE__ */ function() {
  function e(o) {
    this.$L = Ir(o.locale, null, !0), this.parse(o);
  }
  var n = e.prototype;
  return n.parse = function(t) {
    this.$d = dk(t), this.$x = t.x || {}, this.init();
  }, n.init = function() {
    var t = this.$d;
    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
  }, n.$utils = function() {
    return qe;
  }, n.isValid = function() {
    return this.$d.toString() !== Ru;
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
    var a = this, i = qe.u(r) ? !0 : r, l = qe.p(t), s = function(C, w) {
      var g = qe.w(a.$u ? Date.UTC(a.$y, w, C) : new Date(a.$y, w, C), a);
      return i ? g : g.endOf(vo);
    }, u = function(C, w) {
      var g = [0, 0, 0, 0], $ = [23, 59, 59, 999];
      return qe.w(a.toDate()[C].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? g : $).slice(w)
      ), a);
    }, c = this.$W, d = this.$M, f = this.$D, v = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case mo:
        return i ? s(1, 0) : s(31, 11);
      case Kn:
        return i ? s(1, d) : s(0, d + 1);
      case gr: {
        var y = this.$locale().weekStart || 0, m = (c < y ? c + 7 : c) - y;
        return s(i ? f - m : f + (6 - m), d);
      }
      case vo:
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
    var a, i = qe.p(t), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[vo] = l + "Date", a[nt] = l + "Date", a[Kn] = l + "Month", a[mo] = l + "FullYear", a[et] = l + "Hours", a[xo] = l + "Minutes", a[_o] = l + "Seconds", a[ks] = l + "Milliseconds", a)[i], u = i === vo ? this.$D + (r - this.$W) : r;
    if (i === Kn || i === mo) {
      var c = this.clone().set(nt, 1);
      c.$d[s](u), c.init(), this.$d = c.set(nt, Math.min(this.$D, c.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(t, r) {
    return this.clone().$set(t, r);
  }, n.get = function(t) {
    return this[qe.p(t)]();
  }, n.add = function(t, r) {
    var a = this, i;
    t = Number(t);
    var l = qe.p(r), s = function(f) {
      var v = se(a);
      return qe.w(v.date(v.date() + Math.round(f * t)), a);
    };
    if (l === Kn)
      return this.set(Kn, this.$M + t);
    if (l === mo)
      return this.set(mo, this.$y + t);
    if (l === vo)
      return s(1);
    if (l === gr)
      return s(7);
    var u = (i = {}, i[xo] = Si, i[et] = Lu, i[_o] = ut, i)[l] || 1, c = this.$d.getTime() + t * u;
    return qe.w(c, this);
  }, n.subtract = function(t, r) {
    return this.add(t * -1, r);
  }, n.format = function(t) {
    var r = this, a = this.$locale();
    if (!this.isValid())
      return a.invalidDate || Ru;
    var i = t || ek, l = qe.z(this), s = this.$H, u = this.$m, c = this.$M, d = a.weekdays, f = a.months, v = a.meridiem, y = function(g, $, O, z) {
      return g && (g[$] || g(r, i)) || O[$].slice(0, z);
    }, m = function(g) {
      return qe.s(s % 12 || 12, g, "0");
    }, b = v || function(w, g, $) {
      var O = w < 12 ? "AM" : "PM";
      return $ ? O.toLowerCase() : O;
    }, C = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: c + 1,
      MM: qe.s(c + 1, 2, "0"),
      MMM: y(a.monthsShort, c, f, 3),
      MMMM: y(f, c),
      D: this.$D,
      DD: qe.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: y(a.weekdaysMin, this.$W, d, 2),
      ddd: y(a.weekdaysShort, this.$W, d, 3),
      dddd: d[this.$W],
      H: String(s),
      HH: qe.s(s, 2, "0"),
      h: m(1),
      hh: m(2),
      a: b(s, u, !0),
      A: b(s, u, !1),
      m: String(u),
      mm: qe.s(u, 2, "0"),
      s: String(this.$s),
      ss: qe.s(this.$s, 2, "0"),
      SSS: qe.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(ok, function(w, g) {
      return g || C[w] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(t, r, a) {
    var i, l = qe.p(r), s = se(t), u = (s.utcOffset() - this.utcOffset()) * Si, c = this - s, d = qe.m(this, s);
    return d = (i = {}, i[mo] = d / 12, i[Kn] = d, i[Op] = d / 3, i[gr] = (c - u) / x1, i[vo] = (c - u) / _1, i[et] = c / Lu, i[xo] = c / Si, i[_o] = c / ut, i)[l] || c, a ? d : qe.a(d);
  }, n.daysInMonth = function() {
    return this.endOf(Kn).$D;
  }, n.$locale = function() {
    return Lo[this.$L];
  }, n.locale = function(t, r) {
    if (!t)
      return this.$L;
    var a = this.clone(), i = Ir(t, r, !0);
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
}(), Tp = $a.prototype;
se.prototype = Tp;
[["$ms", ks], ["$s", _o], ["$m", xo], ["$H", et], ["$W", vo], ["$M", Kn], ["$y", mo], ["$D", nt]].forEach(function(e) {
  Tp[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
se.extend = function(e, n) {
  return e.$i || (e(n, $a, se), e.$i = !0), se;
};
se.locale = Ir;
se.isDayjs = $s;
se.unix = function(e) {
  return se(e * 1e3);
};
se.en = Lo[St];
se.Ls = Lo;
se.p = {};
const Ep = function(e, n) {
  n.prototype.isSameOrBefore = function(o, t) {
    return this.isSame(o, t) || this.isBefore(o, t);
  };
}, Dp = function(e, n) {
  n.prototype.isSameOrAfter = function(o, t) {
    return this.isSame(o, t) || this.isAfter(o, t);
  };
}, br = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], Ct = ["0", "1", "2", "3", "4", "5", "6"], Bp = {
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
}, { n: fk } = x("date-picker-header");
function pk(e, n) {
  const o = ne("var-icon"), t = ne("var-button");
  return h(), P(
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
      I(
        "div",
        {
          class: p(e.n("value")),
          onClick: n[1] || (n[1] = (r) => e.$emit("check-panel"))
        },
        [
          G(Qe, {
            name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: fe(() => [
              (h(), P(
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
const Ip = _({
  name: "PanelHeader",
  components: {
    VarButton: Sn,
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
    const o = k(!1), t = k(0), { t: r } = ro(), a = B(() => {
      var l;
      const { date: s, type: u } = e, { previewMonth: c, previewYear: d } = s;
      if (u === "year")
        return d;
      if (u === "month")
        return F(d) + t.value;
      const f = (l = (r || rn)("datePickerMonthDict")) == null ? void 0 : l[c].name;
      return (r || rn)("lang") === "zh-CN" ? `${d} ${f}` : `${f} ${d}`;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (n("check-date", l), o.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return de(
      () => e.date,
      () => {
        t.value = 0;
      }
    ), {
      n: fk,
      reverse: o,
      showDate: a,
      checkDate: i
    };
  }
});
Ip.render = pk;
var ws = Ip, vk = Object.defineProperty, Fu = Object.getOwnPropertySymbols, mk = Object.prototype.hasOwnProperty, hk = Object.prototype.propertyIsEnumerable, Uu = (e, n, o) => n in e ? vk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, gk = (e, n) => {
  for (var o in n || (n = {}))
    mk.call(n, o) && Uu(e, o, n[o]);
  if (Fu)
    for (var o of Fu(n))
      hk.call(n, o) && Uu(e, o, n[o]);
  return e;
};
se.extend(Ep);
se.extend(Dp);
const { n: tr, classes: bk } = x("month-picker"), { n: rr } = x("date-picker");
function yk(e, n) {
  const o = ne("panel-header"), t = ne("var-button");
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      I(
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
          G(Qe, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: fe(() => [
              (h(), P("ul", { key: e.panelKey }, [
                (h(!0), P(
                  Re,
                  null,
                  _e(e.MONTH_LIST, (r) => (h(), P("li", { key: r }, [
                    G(t, He({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation
                    }, gk({}, e.buttonProps(r)), {
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
const Mp = _({
  name: "MonthPickerPanel",
  components: {
    VarButton: Sn,
    PanelHeader: ws
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
    const [o, t] = e.current.split("-"), r = k(!1), a = k(0), i = k(null), l = Je({
      left: !1,
      right: !1
    }), { t: s } = ro(), u = B(() => e.choose.chooseYear === e.preview.previewYear), c = B(() => e.preview.previewYear === o), d = (w) => {
      var g, $;
      return ($ = (g = (s || rn)("datePickerMonthDict")) == null ? void 0 : g[w].abbr) != null ? $ : "";
    }, f = (w) => {
      const {
        preview: { previewYear: g },
        componentProps: { min: $, max: O }
      } = e;
      let z = !0, L = !0;
      const T = `${g}-${w}`;
      return O && (z = se(T).isSameOrBefore(se(O), "month")), $ && (L = se(T).isSameOrAfter(se($), "month")), z && L;
    }, v = (w) => {
      const {
        choose: { chooseMonths: g, chooseDays: $, chooseRangeMonth: O },
        componentProps: { type: z, range: L }
      } = e;
      if (L) {
        if (!O.length)
          return !1;
        const T = se(w).isSameOrBefore(se(O[1]), "month"), E = se(w).isSameOrAfter(se(O[0]), "month");
        return T && E;
      }
      return z === "month" ? g.includes(w) : $.some((T) => T.includes(w));
    }, y = (w) => {
      const {
        choose: { chooseMonth: g },
        preview: { previewYear: $ },
        componentProps: { allowedDates: O, color: z, multiple: L, range: T }
      } = e, E = `${$}-${w}`, D = () => T || L ? v(E) : g === w && u.value, Y = (() => f(w) ? O ? !O(E) : !1 : !0)(), j = () => Y ? !0 : T || L ? !v(E) : !u.value || g !== w, R = () => c.value && t === w && e.componentProps.showCurrent ? (T || L || u.value) && Y ? !0 : T || L ? !v(E) : u.value ? g !== t : !0 : !1, K = () => Y ? "" : R() ? z ?? "" : D() ? "" : `${rr()}-color-cover`, W = K().startsWith(rr());
      return {
        outline: R(),
        text: j(),
        color: j() ? "" : z,
        textColor: W ? "" : K(),
        [`${rr()}-color-cover`]: W,
        class: bk(tr("button"), [Y, tr("button--disabled")]),
        disabled: Y
      };
    }, m = (w, g) => {
      g.currentTarget.classList.contains(tr("button--disabled")) || n("choose-month", w);
    }, b = (w) => {
      r.value = w === "prev", a.value += w === "prev" ? -1 : 1, n("check-preview", "year", w);
    }, C = (w) => {
      i.value.checkDate(w);
    };
    return de(
      () => e.preview.previewYear,
      (w) => {
        const {
          componentProps: { min: g, max: $ }
        } = e;
        $ && (l.right = !se(`${F(w) + 1}`).isSameOrBefore(se($), "year")), g && (l.left = !se(`${F(w) - 1}`).isSameOrAfter(se(g), "year"));
      },
      { immediate: !0 }
    ), {
      n: tr,
      nDate: rr,
      t: rn,
      MONTH_LIST: br,
      headerEl: i,
      reverse: r,
      panelKey: a,
      panelBtnDisabled: l,
      forwardRef: C,
      buttonProps: y,
      getMonthAbbr: d,
      chooseMonth: m,
      checkDate: b
    };
  }
});
Mp.render = yk;
var kk = Mp;
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
  onScroll: V()
};
var Hu = (e, n, o) => new Promise((t, r) => {
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
const { name: $k, n: wk, classes: Ck } = x("sticky");
function Sk(e, n) {
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
      I(
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
          N(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const Ap = _({
  name: $k,
  props: Pt,
  setup(e) {
    const n = k(null), o = k(null), t = k(!1), r = k("0px"), a = k("0px"), i = k("auto"), l = k("auto"), s = k("auto"), u = k("auto"), c = B(() => !e.disabled && e.cssMode), d = B(() => !e.disabled && !e.cssMode && t.value), f = B(() => en(e.offsetTop));
    let v;
    de(() => e.disabled, w), fn(() => Hu(this, null, function* () {
      yield kn(), m(), b();
    })), qt(C), to(w), We(() => window, "scroll", b);
    function y() {
      const { cssMode: g, disabled: $ } = e;
      if ($)
        return;
      let O = 0;
      if (v && v !== window) {
        const { top: M } = an(v);
        O = M;
      }
      const z = o.value, L = n.value, { top: T, left: E } = an(L), D = T - O;
      return D <= f.value ? (g || (i.value = `${L.offsetWidth}px`, l.value = `${L.offsetHeight}px`, r.value = `${O + f.value}px`, a.value = `${E}px`, s.value = `${z.offsetWidth}px`, u.value = `${z.offsetHeight}px`, t.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (t.value = !1, {
        offsetTop: D,
        isFixed: !1
      });
    }
    function m() {
      v = Po(n.value), v !== window && v.addEventListener("scroll", b);
    }
    function b() {
      const g = y();
      g && S(e.onScroll, g.offsetTop, g.isFixed);
    }
    function C() {
      !v || v === window || v.removeEventListener("scroll", b);
    }
    function w() {
      return Hu(this, null, function* () {
        t.value = !1, yield mr(), y();
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
      n: wk,
      classes: Ck,
      resize: w,
      toNumber: F
    };
  }
});
Ap.render = Sk;
var wa = Ap;
te(wa);
ue(wa, Pt);
const B5 = wa;
var ct = wa, Pk = Object.defineProperty, Yu = Object.getOwnPropertySymbols, zk = Object.prototype.hasOwnProperty, Ok = Object.prototype.propertyIsEnumerable, ju = (e, n, o) => n in e ? Pk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Tk = (e, n) => {
  for (var o in n || (n = {}))
    zk.call(n, o) && ju(e, o, n[o]);
  if (Yu)
    for (var o of Yu(n))
      Ok.call(n, o) && ju(e, o, n[o]);
  return e;
};
const { n: ar, classes: Wu } = x("year-picker"), { n: ir } = x("date-picker");
function Ek(e, n) {
  const o = ne("panel-header"), t = ne("var-sticky"), r = ne("var-button");
  return h(), P("div", null, [
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
    G(Qe, {
      name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
    }, {
      default: fe(() => [
        (h(), P(
          "ul",
          {
            ref: "panel",
            class: p(e.n()),
            key: e.panelKey
          },
          [
            (h(!0), P(
              Re,
              null,
              _e(e.yearList, (a) => (h(), P("li", { key: a }, [
                G(r, He({
                  type: "primary",
                  "var-year-picker-cover": "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, Tk({}, e.buttonProps(`${a}`)), {
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
const Np = _({
  name: "YearPickerPanel",
  components: {
    VarButton: Sn,
    VarSticky: ct,
    PanelHeader: ws
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
    const [o] = e.current.split("-"), t = k(), r = k(null), a = k(!1), i = k(0), l = k(0), s = Je({
      left: !1,
      right: !1
    }), u = B(() => {
      if (!e.preview)
        return [];
      const C = Math.floor(F(e.preview) / 100 + l.value) * 100;
      return Array.from(Array(100), (w, g) => Math.max(0, C) + g);
    }), c = (C) => {
      const {
        choose: { chooseMonths: w, chooseDays: g, chooseYears: $, chooseRangeYear: O },
        componentProps: { type: z, range: L }
      } = e;
      if (L) {
        if (!O.length)
          return !1;
        const T = se(C).isSameOrBefore(se(O[1]), "year"), E = se(C).isSameOrAfter(se(O[0]), "year");
        return T && E;
      }
      return z === "year" ? $.includes(C) : z === "month" ? w.some((T) => T.includes(C)) : g.some((T) => T.includes(C));
    }, d = (C) => {
      const {
        componentProps: { min: w, max: g }
      } = e, $ = g ? se(C).isSameOrBefore(se(g), "year") : !0, O = w ? se(C).isSameOrAfter(se(w), "year") : !0;
      return $ && O;
    }, f = (C) => {
      const {
        choose: { chooseYear: w },
        componentProps: { allowedDates: g, color: $, multiple: O, range: z }
      } = e, L = () => z || O ? c(C) : w === C, E = (() => d(C) ? g ? !g(C) : !1 : !0)(), D = () => E ? !0 : z || O ? !c(C) : w !== C, M = () => o === C && e.componentProps.showCurrent ? (z || O) && E ? !0 : z || O ? !c(C) : w !== o : !1, Y = () => E ? "" : M() ? $ ?? "" : L() ? "" : `${ir()}-color-cover`, j = Y().startsWith(ir());
      return {
        outline: M(),
        text: D(),
        color: D() ? "" : $,
        textColor: j ? "" : Y(),
        [`${ir()}-color-cover`]: j,
        class: Wu(ar("button"), [E, ar("button--disabled")]),
        disabled: E
      };
    }, v = (C, w) => {
      w.currentTarget.classList.contains(ar("button--disabled")) || n("choose-year", C);
    }, y = () => {
      var C;
      const w = (C = t.value.querySelector(".var-button--primary")) != null ? C : t.value.querySelector(".var-button--outline");
      w == null || w.scrollIntoView({
        block: "center"
      });
    }, m = (C) => {
      const w = C === "prev";
      a.value = w, i.value += w ? -1 : 1, l.value += w ? -1 : 1;
    }, b = (C) => {
      r.value.checkDate(C);
    };
    return fn(y), de(
      () => e.preview,
      () => {
        l.value = 0;
      }
    ), de(
      u,
      (C) => {
        const {
          componentProps: { min: w, max: g }
        } = e;
        g && (s.right = !se(`${F(C[C.length - 1])}`).isSameOrBefore(se(g), "year")), w && (s.left = !se(`${F(C[0])}`).isSameOrAfter(se(w), "year")), F(C[0] <= 0) && (s.left = !1);
      },
      {
        immediate: !0
      }
    ), {
      n: ar,
      classes: Wu,
      buttonProps: f,
      panel: t,
      headerEl: r,
      yearList: u,
      reverse: a,
      panelKey: i,
      panelBtnDisabled: s,
      nDate: ir,
      checkDate: m,
      chooseYear: v,
      forwardRef: b,
      toNumber: F
    };
  }
});
Np.render = Ek;
var Dk = Np, Bk = Object.defineProperty, Ku = Object.getOwnPropertySymbols, Ik = Object.prototype.hasOwnProperty, Mk = Object.prototype.propertyIsEnumerable, qu = (e, n, o) => n in e ? Bk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ak = (e, n) => {
  for (var o in n || (n = {}))
    Ik.call(n, o) && qu(e, o, n[o]);
  if (Ku)
    for (var o of Ku(n))
      Mk.call(n, o) && qu(e, o, n[o]);
  return e;
};
se.extend(Ep);
se.extend(Dp);
const { n: Xo, classes: Nk } = x("day-picker"), { n: lr } = x("date-picker");
function Vk(e, n) {
  const o = ne("panel-header"), t = ne("var-button");
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      I(
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
          G(Qe, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: fe(() => [
              (h(), P("div", { key: e.panelKey }, [
                I(
                  "ul",
                  {
                    class: p(e.n("head"))
                  },
                  [
                    (h(!0), P(
                      Re,
                      null,
                      _e(e.sortWeekList, (r) => (h(), P(
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
                I(
                  "ul",
                  {
                    class: p(e.n("body"))
                  },
                  [
                    (h(!0), P(
                      Re,
                      null,
                      _e(e.days, (r, a) => (h(), P("li", { key: a }, [
                        G(t, He({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation
                        }, Ak({}, e.buttonProps(r)), {
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
const Vp = _({
  name: "DayPickerPanel",
  components: {
    VarButton: Sn,
    PanelHeader: ws
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
    const [o, t, r] = e.current.split("-"), a = k([]), i = k(!1), l = k(0), s = k(null), u = Je({
      left: !1,
      right: !1
    }), { t: c } = ro(), d = B(
      () => e.preview.previewYear === o && e.preview.previewMonth === t
    ), f = B(
      () => e.choose.chooseYear === e.preview.previewYear && e.choose.chooseMonth === e.preview.previewMonth
    ), v = B(() => {
      const T = Ct.findIndex((E) => E === e.componentProps.firstDayOfWeek);
      return T === -1 || T === 0 ? Ct : [...Ct.slice(T), ...Ct.slice(0, T)];
    }), y = (T) => {
      var E, D;
      return (D = (E = (c || rn)("datePickerWeekDict")) == null ? void 0 : E[T].abbr) != null ? D : "";
    }, m = (T) => T > 0 ? T : "", b = () => {
      const {
        preview: { previewMonth: T, previewYear: E }
      } = e, D = se(`${E}-${T}`).daysInMonth(), M = se(`${E}-${T}-01`).day(), Y = v.value.findIndex((j) => j === `${M}`);
      a.value = [...Array(Y).fill(-1), ...Array.from(Array(D + 1).keys())].filter((j) => j);
    }, C = () => {
      const {
        preview: { previewYear: T, previewMonth: E },
        componentProps: { max: D, min: M }
      } = e;
      if (D) {
        const Y = `${T}-${F(E) + 1}`;
        u.right = !se(Y).isSameOrBefore(se(D), "month");
      }
      if (M) {
        const Y = `${T}-${F(E) - 1}`;
        u.left = !se(Y).isSameOrAfter(se(M), "month");
      }
    }, w = (T) => {
      const {
        preview: { previewYear: E, previewMonth: D },
        componentProps: { min: M, max: Y }
      } = e;
      let j = !0, R = !0;
      const K = `${E}-${D}-${T}`;
      return Y && (j = se(K).isSameOrBefore(se(Y), "day")), M && (R = se(K).isSameOrAfter(se(M), "day")), j && R;
    }, g = (T) => {
      const {
        choose: { chooseDays: E, chooseRangeDay: D },
        componentProps: { range: M }
      } = e;
      if (M) {
        if (!D.length)
          return !1;
        const Y = se(T).isSameOrBefore(se(D[1]), "day"), j = se(T).isSameOrAfter(se(D[0]), "day");
        return Y && j;
      }
      return E.includes(T);
    }, $ = (T) => {
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
        preview: { previewYear: D, previewMonth: M },
        componentProps: { allowedDates: Y, color: j, multiple: R, range: K }
      } = e, W = `${D}-${M}-${T}`, ce = () => K || R ? g(W) : F(E) === T && f.value, pe = (() => w(T) ? Y ? !Y(W) : !1 : !0)(), ye = () => pe ? !0 : K || R ? !g(W) : !f.value || F(E) !== T, ie = () => d.value && F(r) === T && e.componentProps.showCurrent ? (K || R || f.value) && pe ? !0 : K || R ? !g(W) : f.value ? E !== r : !0 : !1, U = () => pe ? "" : ie() ? j ?? "" : ce() ? "" : `${lr()}-color-cover`, J = U().startsWith(lr());
      return {
        text: ye(),
        outline: ie(),
        textColor: J ? "" : U(),
        [`${lr()}-color-cover`]: J,
        class: Nk(Xo("button"), Xo("button--usable"), [pe, Xo("button--disabled")]),
        disabled: pe
      };
    }, O = (T) => {
      i.value = T === "prev", l.value += T === "prev" ? -1 : 1, n("check-preview", "month", T);
    }, z = (T, E) => {
      E.currentTarget.classList.contains(Xo("button--disabled")) || n("choose-day", T);
    }, L = (T) => {
      s.value.checkDate(T);
    };
    return fn(() => {
      b(), C();
    }), de(
      () => e.preview,
      () => {
        b(), C();
      }
    ), {
      n: Xo,
      nDate: lr,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: v,
      panelBtnDisabled: u,
      forwardRef: L,
      filterDay: m,
      getDayAbbr: y,
      checkDate: O,
      chooseDay: z,
      buttonProps: $
    };
  }
});
Vp.render = Vk;
var Lk = Vp, Rk = (e, n, o) => new Promise((t, r) => {
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
const { name: Fk, n: Uk, classes: Hk } = x("date-picker");
function Yk(e, n) {
  var o;
  const t = ne("year-picker-panel"), r = ne("month-picker-panel"), a = ne("day-picker-panel");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      I(
        "div",
        {
          class: p(e.n("title")),
          style: q({ background: e.titleColor || e.color })
        },
        [
          I(
            "div",
            {
              class: p(e.n("title-select"))
            },
            [
              I(
                "div",
                {
                  class: p(e.n("title-hint"))
                },
                re((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("datePickerHint")),
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
                  N(e.$slots, "year", { year: e.chooseYear }, () => [
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
          I(
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
              G(Qe, {
                name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey`
              }, {
                default: fe(() => [
                  e.type === "year" ? (h(), P("div", {
                    key: `${e.chooseYear}`
                  }, [
                    e.range ? N(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeYear
                    }, () => [
                      De(
                        re(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? N(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseYears
                    }, () => [
                      De(
                        re(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : N(e.$slots, "year", {
                      key: 2,
                      year: e.chooseYear
                    }, () => [
                      De(
                        re(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : e.type === "month" ? (h(), P("div", {
                    key: `${e.chooseYear}${e.chooseMonth}`
                  }, [
                    e.range ? N(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeMonth
                    }, () => [
                      De(
                        re(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? N(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseMonths
                    }, () => [
                      De(
                        re(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : N(e.$slots, "month", {
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
                  ])) : (h(), P("div", {
                    key: `${e.chooseYear}${e.chooseMonth}${e.chooseDay}`
                  }, [
                    e.range ? N(e.$slots, "range", {
                      key: 0,
                      choose: e.formatRange
                    }, () => [
                      De(
                        re(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? N(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseDays
                    }, () => [
                      De(
                        re(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : N(e.$slots, "date", $o(He({ key: 2 }, e.slotProps)), () => [
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
      I(
        "div",
        {
          class: p(e.n("body")),
          onTouchstart: n[2] || (n[2] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
          onTouchmove: n[3] || (n[3] = (...i) => e.handleTouchmove && e.handleTouchmove(...i)),
          onTouchend: n[4] || (n[4] = (...i) => e.handleTouchend && e.handleTouchend(...i))
        },
        [
          G(Qe, {
            name: `${e.n()}-panel-fade`
          }, {
            default: fe(() => [
              e.getPanelType === "year" ? (h(), Oe(t, {
                key: 0,
                ref: "yearPanelEl",
                choose: e.getChoose,
                current: e.currentDate,
                "component-props": e.componentProps,
                preview: e.previewYear,
                onChooseYear: e.getChooseYear
              }, null, 8, ["choose", "current", "component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (h(), Oe(r, {
                key: 1,
                ref: "monthPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "click-year": () => e.clickEl("year"),
                "component-props": e.componentProps,
                onChooseMonth: e.getChooseMonth,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (h(), Oe(a, {
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
      e.$slots.actions ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("actions"))
        },
        [
          N(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Lp = _({
  name: Fk,
  components: {
    MonthPickerPanel: kk,
    YearPickerPanel: Dk,
    DayPickerPanel: Lk
  },
  props: Bp,
  setup(e) {
    const { t: n } = ro(), o = se().format("YYYY-MM-D"), [t, r] = o.split("-"), a = br.find((oe) => oe === r), i = k(!1), l = k(!1), s = k(!0), u = k(), c = k(), d = k(), f = k(a), v = k(t), y = k(!1), m = k([]), b = k([]), C = k([]), w = k([]), g = k([]), $ = k([]), O = k(null), z = k(null), L = k(null), T = Je({
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
    }), E = B(() => ({
      chooseMonth: u.value,
      chooseYear: c.value,
      chooseDay: d.value,
      chooseYears: m.value,
      chooseMonths: b.value,
      chooseDays: C.value,
      chooseRangeYear: w.value,
      chooseRangeMonth: g.value,
      chooseRangeDay: $.value
    })), D = B(() => ({
      previewMonth: f.value,
      previewYear: v.value
    })), M = B(() => {
      var oe;
      const { multiple: we, range: Te } = e;
      return Te ? w.value.length ? `${w.value[0]} ~ ${w.value[1]}` : "" : we ? `${m.value.length}${(n || rn)("datePickerSelected")}` : (oe = c.value) != null ? oe : "";
    }), Y = B(() => {
      var oe, we;
      const { multiple: Te, range: Ve } = e;
      if (Ve)
        return g.value.length ? `${g.value[0]} ~ ${g.value[1]}` : "";
      let Ae = "";
      return u.value && (Ae = (we = (oe = (n || rn)("datePickerMonthDict")) == null ? void 0 : oe[u.value].name) != null ? we : ""), Te ? `${b.value.length}${(n || rn)("datePickerSelected")}` : Ae;
    }), j = B(() => {
      var oe, we, Te, Ve;
      const { multiple: Ae, range: ln } = e;
      if (ln) {
        const kt = $.value.map((dh) => se(dh).format("YYYY-MM-DD"));
        return kt.length ? `${kt[0]} ~ ${kt[1]}` : "";
      }
      if (Ae)
        return `${C.value.length}${(n || rn)("datePickerSelected")}`;
      if (!c.value || !u.value || !d.value)
        return "";
      const pn = se(`${c.value}-${u.value}-${d.value}`).day(), yn = Ct.find((kt) => kt === `${pn}`), No = (we = (oe = (n || rn)("datePickerWeekDict")) == null ? void 0 : oe[yn].name) != null ? we : "", uh = (Ve = (Te = (n || rn)("datePickerMonthDict")) == null ? void 0 : Te[u.value].name) != null ? Ve : "", ch = Fo(d.value, 2, "0");
      return (n || rn)("lang") === "zh-CN" ? `${u.value}-${ch} ${No.slice(0, 3)}` : `${No.slice(0, 3)}, ${uh.slice(0, 3)} ${d.value}`;
    }), R = B(() => e.type === "year" || i.value ? "year" : e.type === "month" || l.value ? "month" : e.type === "date" ? "date" : ""), K = B(() => !e.touchable || !R.value), W = B(() => {
      var oe, we;
      const Te = se(`${c.value}-${u.value}-${d.value}`).day(), Ve = d.value ? Fo(d.value, 2, "0") : "";
      return {
        week: `${Te}`,
        year: (oe = c.value) != null ? oe : "",
        month: (we = u.value) != null ? we : "",
        date: Ve
      };
    }), ce = B(
      () => E.value.chooseRangeDay.map((oe) => se(oe).format("YYYY-MM-DD"))
    ), Q = B(() => c.value === v.value), pe = B(() => u.value === f.value);
    let ye = 0, ie = 0, U = "", J;
    de(
      () => e.modelValue,
      (oe) => {
        if (!(!nn() || le(oe) || !oe))
          if (e.range) {
            if (!Ge(oe))
              return;
            s.value = oe.length !== 1, me(oe, e.type);
          } else if (e.multiple) {
            if (!Ge(oe))
              return;
            $e(oe, e.type);
          } else
            Me(oe);
      },
      { immediate: !0 }
    ), de(R, xe);
    function ae(oe) {
      oe === "year" ? i.value = !0 : oe === "month" ? l.value = !0 : (i.value = !1, l.value = !1);
    }
    function A(oe) {
      if (K.value)
        return;
      const { clientX: we, clientY: Te } = oe.touches[0];
      ye = we, ie = Te;
    }
    function H(oe, we) {
      return oe >= we && oe > 20 ? "x" : "y";
    }
    function ee(oe) {
      if (K.value)
        return;
      const { clientX: we, clientY: Te } = oe.touches[0], Ve = we - ye, Ae = Te - ie;
      J = H(Math.abs(Ve), Math.abs(Ae)), U = Ve > 0 ? "prev" : "next";
    }
    function ke() {
      return Rk(this, null, function* () {
        if (K.value || J !== "x")
          return;
        const oe = R.value === "year" ? O : R.value === "month" ? z : L;
        yield kn(), oe.value.forwardRef(U), xe();
      });
    }
    function Se(oe, we) {
      const Te = we === "year" ? w : we === "month" ? g : $;
      if (Te.value = s.value ? [oe, oe] : [Te.value[0], oe], s.value = !s.value, s.value) {
        const Ae = se(Te.value[0]).isAfter(Te.value[1]) ? [Te.value[1], Te.value[0]] : [...Te.value];
        S(e["onUpdate:modelValue"], Ae), S(e.onChange, Ae);
      }
    }
    function Le(oe, we) {
      const Te = we === "year" ? m : we === "month" ? b : C, Ve = we === "year" ? "YYYY" : we === "month" ? "YYYY-MM" : "YYYY-MM-DD", Ae = Te.value.map((pn) => se(pn).format(Ve)), ln = Ae.findIndex((pn) => pn === oe);
      ln === -1 ? Ae.push(oe) : Ae.splice(ln, 1), S(e["onUpdate:modelValue"], Ae), S(e.onChange, Ae);
    }
    function je(oe, we) {
      return !c.value || !u.value ? !1 : Q.value ? oe === "year" ? we < F(c.value) : oe === "month" ? we < u.value : pe.value ? we < F(d.value) : u.value > f.value : c.value > v.value;
    }
    function Pn(oe) {
      const { readonly: we, range: Te, multiple: Ve, onChange: Ae, "onUpdate:modelValue": ln } = e;
      if (oe < 0 || we)
        return;
      y.value = je("day", oe);
      const pn = `${v.value}-${f.value}-${oe}`, yn = se(pn).format("YYYY-MM-DD");
      Te ? Se(yn, "day") : Ve ? Le(yn, "day") : (S(ln, yn), S(Ae, yn));
    }
    function ve(oe) {
      const { type: we, readonly: Te, range: Ve, multiple: Ae, onChange: ln, onPreview: pn, "onUpdate:modelValue": yn } = e;
      if (y.value = je("month", oe), we === "month" && !Te) {
        const No = `${v.value}-${oe}`;
        Ve ? Se(No, "month") : Ae ? Le(No, "month") : (S(yn, No), S(ln, No));
      } else
        f.value = oe, S(
          pn,
          F(v.value),
          F(f.value),
          we === "date" ? F(d.value) : void 0
        );
      l.value = !1;
    }
    function Fe(oe) {
      const { type: we, readonly: Te, range: Ve, multiple: Ae, onChange: ln, onPreview: pn, "onUpdate:modelValue": yn } = e;
      y.value = je("year", oe), we === "year" && !Te ? Ve ? Se(`${oe}`, "year") : Ae ? Le(`${oe}`, "year") : (S(yn, `${oe}`), S(ln, `${oe}`)) : (v.value = `${oe}`, S(
        pn,
        F(v.value),
        F(f.value),
        we === "date" ? F(d.value) : void 0
      )), i.value = !1;
    }
    function Ue(oe, we) {
      const Te = we === "prev" ? -1 : 1;
      if (oe === "year")
        v.value = `${F(v.value) + Te}`;
      else {
        let Ve = F(f.value) + Te;
        Ve < 1 && (v.value = `${F(v.value) - 1}`, Ve = 12), Ve > 12 && (v.value = `${F(v.value) + 1}`, Ve = 1), f.value = br.find((Ae) => F(Ae) === Ve);
      }
      S(
        e.onPreview,
        F(v.value),
        F(f.value),
        e.type === "date" ? F(d.value) : void 0
      );
    }
    function nn() {
      return (e.multiple || e.range) && !Ge(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ge(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0;
    }
    function le(oe) {
      return Ge(oe) ? !1 : oe === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1;
    }
    function me(oe, we) {
      const Te = we === "year" ? w : we === "month" ? g : $, Ve = we === "year" ? "YYYY" : we === "month" ? "YYYY-MM" : "YYYY-MM-D", Ae = oe.map((yn) => se(yn).format(Ve)).slice(0, 2);
      if (Te.value.some((yn) => le(yn)))
        return;
      Te.value = Ae;
      const pn = se(Te.value[0]).isAfter(Te.value[1]);
      Te.value.length === 2 && pn && (Te.value = [Te.value[1], Te.value[0]]);
    }
    function $e(oe, we) {
      const Te = we === "year" ? m : we === "month" ? b : C, Ve = we === "year" ? "YYYY" : we === "month" ? "YYYY-MM" : "YYYY-MM-D", Ae = Array.from(new Set(oe.map((ln) => se(ln).format(Ve))));
      Te.value = Ae.filter((ln) => ln !== "Invalid Date");
    }
    function Me(oe) {
      const we = se(oe).format("YYYY-MM-D");
      if (le(we))
        return;
      const [Te, Ve, Ae] = we.split("-"), ln = br.find((pn) => pn === Ve);
      u.value = ln, c.value = Te, d.value = Ae, f.value = ln, v.value = Te;
    }
    function xe() {
      ie = 0, ye = 0, U = "", J = void 0;
    }
    return {
      yearPanelEl: O,
      monthPanelEl: z,
      dayPanelEl: L,
      reverse: y,
      currentDate: o,
      chooseMonth: u,
      chooseYear: c,
      chooseDay: d,
      previewYear: v,
      isYearPanel: i,
      isMonthPanel: l,
      getMonthTitle: Y,
      getDateTitle: j,
      getYearTitle: M,
      getPanelType: R,
      getChoose: E,
      getPreview: D,
      componentProps: T,
      slotProps: W,
      formatRange: ce,
      pt: n,
      t: rn,
      n: Uk,
      classes: Hk,
      clickEl: ae,
      handleTouchstart: A,
      handleTouchmove: ee,
      handleTouchend: ke,
      getChooseDay: Pn,
      getChooseMonth: ve,
      getChooseYear: Fe,
      checkPreview: Ue,
      formatElevation: dn
    };
  }
});
Lp.render = Yk;
var Ca = Lp;
te(Ca);
ue(Ca, Bp);
const I5 = Ca;
var dl = Ca, jk = Object.defineProperty, Gu = Object.getOwnPropertySymbols, Wk = Object.prototype.hasOwnProperty, Kk = Object.prototype.propertyIsEnumerable, Xu = (e, n, o) => n in e ? jk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, qk = (e, n) => {
  for (var o in n || (n = {}))
    Wk.call(n, o) && Xu(e, o, n[o]);
  if (Gu)
    for (var o of Gu(n))
      Kk.call(n, o) && Xu(e, o, n[o]);
  return e;
};
const Rp = qk({
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
}, Be(gt, [
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
var Gk = Object.defineProperty, Zu = Object.getOwnPropertySymbols, Xk = Object.prototype.hasOwnProperty, Zk = Object.prototype.propertyIsEnumerable, Ju = (e, n, o) => n in e ? Gk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Jk = (e, n) => {
  for (var o in n || (n = {}))
    Xk.call(n, o) && Ju(e, o, n[o]);
  if (Zu)
    for (var o of Zu(n))
      Zk.call(n, o) && Ju(e, o, n[o]);
  return e;
};
const { name: Qk, n: _k, classes: xk } = x("dialog");
function e$(e, n) {
  const o = ne("var-button"), t = ne("var-popup");
  return h(), Oe(t, {
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
      I(
        "div",
        He({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: Jk({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          I(
            "div",
            {
              class: p(e.n("title"))
            },
            [
              N(e.$slots, "title", {}, () => {
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
          I(
            "div",
            {
              class: p(e.n("message")),
              style: q({ textAlign: e.messageAlign })
            },
            [
              N(e.$slots, "default", {}, () => [
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
          N(e.$slots, "actions", {
            slotClass: e.n("actions"),
            cancel: e.cancel,
            confirm: e.confirm
          }, () => [
            I(
              "div",
              {
                class: p(e.n("actions"))
              },
              [
                e.cancelButton ? (h(), Oe(o, {
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
                e.confirmButton ? (h(), Oe(o, {
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
const Fp = _({
  name: Qk,
  components: {
    VarPopup: So,
    VarButton: Sn
  },
  inheritAttrs: !1,
  props: Rp,
  setup(e) {
    const n = k(!1), o = k(!1), { t } = ro();
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
      return S(e["onUpdate:show"], !1);
    }
    function a() {
      const { closeOnClickOverlay: u, onClickOverlay: c, onBeforeClose: d } = e;
      if (S(c), !!u) {
        if (d != null) {
          S(d, "close", r);
          return;
        }
        S(e["onUpdate:show"], !1);
      }
    }
    function i() {
      const { onBeforeClose: u, onConfirm: c } = e;
      if (S(c), u != null) {
        S(u, "confirm", r);
        return;
      }
      S(e["onUpdate:show"], !1);
    }
    function l() {
      const { onBeforeClose: u, onCancel: c } = e;
      if (S(c), u != null) {
        S(u, "cancel", r);
        return;
      }
      S(e["onUpdate:show"], !1);
    }
    function s() {
      S(e.onKeyEscape), e.closeOnKeyEscape && l();
    }
    return {
      popupShow: n,
      popupCloseOnClickOverlay: o,
      pt: t,
      t: rn,
      n: _k,
      classes: xk,
      handleClickOverlay: a,
      confirm: i,
      cancel: l,
      toSizeUnit: ze,
      handleKeyEscape: s
    };
  }
});
Fp.render = e$;
var Qt = Fp, n$ = Object.defineProperty, o$ = Object.defineProperties, t$ = Object.getOwnPropertyDescriptors, Qu = Object.getOwnPropertySymbols, r$ = Object.prototype.hasOwnProperty, a$ = Object.prototype.propertyIsEnumerable, _u = (e, n, o) => n in e ? n$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Pi = (e, n) => {
  for (var o in n || (n = {}))
    r$.call(n, o) && _u(e, o, n[o]);
  if (Qu)
    for (var o of Qu(n))
      a$.call(n, o) && _u(e, o, n[o]);
  return e;
}, i$ = (e, n) => o$(e, t$(n));
let go, Mr = {};
function l$(e = {}) {
  return hn(e) ? i$(Pi({}, Mr), { message: e }) : Pi(Pi({}, Mr), e);
}
function Io(e) {
  return oo() ? new Promise((n) => {
    Io.close();
    const o = l$(e), t = Je(o);
    t.teleport = "body", go = t;
    const { unmountInstance: r } = ht(Qt, t, {
      onConfirm: () => {
        S(t.onConfirm), n("confirm");
      },
      onCancel: () => {
        S(t.onCancel), n("cancel");
      },
      onClose: () => {
        S(t.onClose), n("close");
      },
      onClosed: () => {
        S(t.onClosed), r(), go === t && (go = null);
      },
      onRouteChange: () => {
        r(), go === t && (go = null);
      },
      "onUpdate:show": (a) => {
        t.show = a;
      }
    });
    t.show = !0;
  }) : Promise.resolve();
}
Io.setDefaultOptions = function(e) {
  Mr = e;
};
Io.resetDefaultOptions = function() {
  Mr = {};
};
Io.close = function() {
  if (go != null) {
    const e = go;
    go = null, Ke().then(() => {
      e.show = !1;
    });
  }
};
Io.Component = Qt;
te(Qt);
te(Qt, Io);
ue(Io, Rp);
const M5 = Qt;
var fl = Io;
const Up = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: s$, n: u$, classes: c$ } = x("divider");
function d$(e, n) {
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
      e.vertical ? X("v-if", !0) : N(e.$slots, "default", { key: 0 }, () => [
        e.description ? (h(), P(
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
const Hp = _({
  name: s$,
  props: Up,
  setup(e, { slots: n }) {
    const o = k(!1), t = B(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = B(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (ts(i) || l)
        return { margin: s };
      const u = F(i), c = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${ze(c)})`,
        left: u > 0 ? ze(c) : ze(0)
      };
    });
    fn(a), Wt(a);
    function a() {
      const { description: i, vertical: l } = e;
      o.value = (n.default || i != null) && !l;
    }
    return {
      n: u$,
      classes: c$,
      withText: o,
      style: r,
      withPresetInset: t
    };
  }
});
Hp.render = d$;
var Sa = Hp;
te(Sa);
ue(Sa, Up);
const A5 = Sa;
var pl = Sa;
const Yp = {
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
var f$ = Object.defineProperty, p$ = Object.defineProperties, v$ = Object.getOwnPropertyDescriptors, xu = Object.getOwnPropertySymbols, m$ = Object.prototype.hasOwnProperty, h$ = Object.prototype.propertyIsEnumerable, ec = (e, n, o) => n in e ? f$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, nc = (e, n) => {
  for (var o in n || (n = {}))
    m$.call(n, o) && ec(e, o, n[o]);
  if (xu)
    for (var o of xu(n))
      h$.call(n, o) && ec(e, o, n[o]);
  return e;
}, oc = (e, n) => p$(e, v$(n)), g$ = (e, n, o) => new Promise((t, r) => {
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
const { name: b$, n: y$, classes: k$ } = x("drag");
function $$(e, n) {
  return h(), Oe(no, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    I(
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
        N(e.$slots, "default")
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["to", "disabled"]);
}
const jp = _({
  name: b$,
  inheritAttrs: !1,
  props: Yp,
  setup(e, { attrs: n }) {
    const o = k(null), t = k(0), r = k(0), a = k(!1), i = k(!1), { touching: l, dragging: s, moveX: u, moveY: c, startTouch: d, moveTouch: f, endTouch: v, resetTouch: y } = mt(), { disabled: m } = Go(), b = Je({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    de(() => e.boundary, D), to(Y), fn(() => {
      D(), Y();
    });
    function C(R) {
      e.disabled || (d(R), O());
    }
    function w(R) {
      return g$(this, null, function* () {
        !l.value || e.disabled || (f(R), Ne(R), i.value = !1, a.value = !0, e.direction.includes("x") && (t.value += u.value), e.direction.includes("y") && (r.value += c.value), E());
      });
    }
    function g() {
      e.disabled || (v(), i.value = !0, T());
    }
    function $(R) {
      s.value || S(e.onClick, R);
    }
    function O() {
      const { left: R, top: K } = z();
      t.value = R, r.value = K;
    }
    function z() {
      const R = an(o.value), K = an(window), W = R.top - K.top, ce = K.bottom - R.bottom, Q = R.left - K.left, pe = K.right - R.right, { width: ye, height: ie } = R, { width: U, height: J } = K;
      return {
        top: W,
        bottom: ce,
        left: Q,
        right: pe,
        width: ye,
        height: ie,
        halfWidth: ye / 2,
        halfHeight: ie / 2,
        windowWidth: U,
        windowHeight: J
      };
    }
    function L() {
      const R = z(), K = b.left, W = R.windowWidth - b.right - R.width, ce = b.top, Q = R.windowHeight - b.bottom - R.height;
      return {
        minX: K,
        minY: ce,
        // fallback the drag element overflows boundary
        maxX: K < W ? W : K,
        maxY: ce < Q ? Q : ce
      };
    }
    function T() {
      if (e.attraction == null)
        return;
      const { halfWidth: R, halfHeight: K, top: W, bottom: ce, left: Q, right: pe } = z(), { minX: ye, minY: ie, maxX: U, maxY: J } = L(), ae = Q + R - b.left, A = pe + R - b.right, H = W + K - b.top, ee = ce + K - b.bottom, ke = ae <= A, Se = H <= ee;
      e.attraction.includes("x") && (t.value = ke ? ye : U), e.attraction.includes("y") && (r.value = Se ? ie : J);
    }
    function E() {
      const { minX: R, minY: K, maxX: W, maxY: ce } = L();
      t.value = Mn(t.value, R, W), r.value = Mn(r.value, K, ce);
    }
    function D() {
      const { top: R = 0, bottom: K = 0, left: W = 0, right: ce = 0 } = e.boundary;
      b.top = en(R), b.bottom = en(K), b.left = en(W), b.right = en(ce);
    }
    function M() {
      var R;
      const K = (R = n.style) != null ? R : {};
      return oc(nc({}, n), {
        style: oc(nc({}, K), {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: a.value ? 0 : K.top,
          left: a.value ? 0 : K.left,
          right: a.value ? "auto" : K.right,
          bottom: a.value ? "auto" : K.bottom,
          transform: a.value ? `translate(${t.value}px, ${r.value}px)` : K.transform
        })
      });
    }
    function Y() {
      a.value && (O(), E());
    }
    function j() {
      y(), i.value = !1, a.value = !1, t.value = 0, r.value = 0;
    }
    return {
      drag: o,
      x: t,
      y: r,
      enableTransition: i,
      dragging: s,
      teleportDisabled: m,
      n: y$,
      classes: k$,
      getAttrs: M,
      handleTouchstart: C,
      handleTouchmove: w,
      handleTouchend: g,
      handleClick: $,
      resize: Y,
      reset: j
    };
  }
});
jp.render = $$;
var Pa = jp;
te(Pa);
ue(Pa, Yp);
const N5 = Pa;
var Ar = Pa, w$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function yr(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return w$[n];
  });
}
var so = "top", Oo = "bottom", Uo = "right", wo = "left", Cs = "auto", za = [so, Oo, Uo, wo], Oa = "start", At = "end", C$ = "clippingParents", Wp = "viewport", $t = "popper", S$ = "reference", tc = /* @__PURE__ */ za.reduce(function(e, n) {
  return e.concat([n + "-" + Oa, n + "-" + At]);
}, []), Kp = /* @__PURE__ */ [].concat(za, [Cs]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Oa, n + "-" + At]);
}, []), P$ = "beforeRead", z$ = "read", O$ = "afterRead", T$ = "beforeMain", E$ = "main", D$ = "afterMain", B$ = "beforeWrite", I$ = "write", M$ = "afterWrite", A$ = [P$, z$, O$, T$, E$, D$, B$, I$, M$];
function Co(e) {
  return e.split("-")[0];
}
var N$ = {
  start: "end",
  end: "start"
};
function rc(e) {
  return e.replace(/start|end/g, function(n) {
    return N$[n];
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
function Ss(e) {
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
var zt = Math.max, ac = Math.min, dt = Math.round;
function vl() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function qp() {
  return !/^((?!chrome|android).)*safari/i.test(vl());
}
function ft(e, n, o) {
  n === void 0 && (n = !1), o === void 0 && (o = !1);
  var t = e.getBoundingClientRect(), r = 1, a = 1;
  n && Un(e) && (r = e.offsetWidth > 0 && dt(t.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && dt(t.height) / e.offsetHeight || 1);
  var i = Ho(e) ? Wn(e) : window, l = i.visualViewport, s = !qp() && o, u = (t.left + (s && l ? l.offsetLeft : 0)) / r, c = (t.top + (s && l ? l.offsetTop : 0)) / a, d = t.width / r, f = t.height / a;
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
function Ps(e) {
  var n = Wn(e), o = n.pageXOffset, t = n.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: t
  };
}
function zs(e) {
  return ft(Mo(e)).left + Ps(e).scrollLeft;
}
function V$(e, n) {
  var o = Wn(e), t = Mo(e), r = o.visualViewport, a = t.clientWidth, i = t.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = qp();
    (u || !u && n === "fixed") && (l = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + zs(e),
    y: s
  };
}
function uo(e) {
  return Wn(e).getComputedStyle(e);
}
function L$(e) {
  var n, o = Mo(e), t = Ps(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = zt(o.scrollWidth, o.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = zt(o.scrollHeight, o.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -t.scrollLeft + zs(e), s = -t.scrollTop;
  return uo(r || o).direction === "rtl" && (l += zt(o.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function xn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ta(e) {
  return xn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ss(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Mo(e)
  );
}
function Os(e) {
  var n = uo(e), o = n.overflow, t = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + r + t);
}
function Gp(e) {
  return ["html", "body", "#document"].indexOf(xn(e)) >= 0 ? e.ownerDocument.body : Un(e) && Os(e) ? e : Gp(Ta(e));
}
function Ot(e, n) {
  var o;
  n === void 0 && (n = []);
  var t = Gp(e), r = t === ((o = e.ownerDocument) == null ? void 0 : o.body), a = Wn(t), i = r ? [a].concat(a.visualViewport || [], Os(t) ? t : []) : t, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Ot(Ta(i)))
  );
}
function R$(e) {
  return ["table", "td", "th"].indexOf(xn(e)) >= 0;
}
function ic(e) {
  return !Un(e) || // https://github.com/popperjs/popper-core/issues/837
  uo(e).position === "fixed" ? null : e.offsetParent;
}
function F$(e) {
  var n = /firefox/i.test(vl()), o = /Trident/i.test(vl());
  if (o && Un(e)) {
    var t = uo(e);
    if (t.position === "fixed")
      return null;
  }
  var r = Ta(e);
  for (Ss(r) && (r = r.host); Un(r) && ["html", "body"].indexOf(xn(r)) < 0; ) {
    var a = uo(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function Ts(e) {
  for (var n = Wn(e), o = ic(e); o && R$(o) && uo(o).position === "static"; )
    o = ic(o);
  return o && (xn(o) === "html" || xn(o) === "body" && uo(o).position === "static") ? n : o || F$(e) || n;
}
function U$(e, n) {
  var o = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (o && Ss(o)) {
    var t = n;
    do {
      if (t && e.isSameNode(t))
        return !0;
      t = t.parentNode || t.host;
    } while (t);
  }
  return !1;
}
function ml(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function H$(e, n) {
  var o = ft(e, !1, n === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function lc(e, n, o) {
  return n === Wp ? ml(V$(e, o)) : Ho(n) ? H$(n, o) : ml(L$(Mo(e)));
}
function Y$(e) {
  var n = Ot(Ta(e)), o = ["absolute", "fixed"].indexOf(uo(e).position) >= 0, t = o && Un(e) ? Ts(e) : e;
  return Ho(t) ? n.filter(function(r) {
    return Ho(r) && U$(r, t) && xn(r) !== "body";
  }) : [];
}
function j$(e, n, o, t) {
  var r = n === "clippingParents" ? Y$(e) : [].concat(n), a = [].concat(r, [o]), i = a[0], l = a.reduce(function(s, u) {
    var c = lc(e, u, t);
    return s.top = zt(c.top, s.top), s.right = ac(c.right, s.right), s.bottom = ac(c.bottom, s.bottom), s.left = zt(c.left, s.left), s;
  }, lc(e, i, t));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Nt(e) {
  return e.split("-")[1];
}
function W$(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Xp(e) {
  var n = e.reference, o = e.element, t = e.placement, r = t ? Co(t) : null, a = t ? Nt(t) : null, i = n.x + n.width / 2 - o.width / 2, l = n.y + n.height / 2 - o.height / 2, s;
  switch (r) {
    case so:
      s = {
        x: i,
        y: n.y - o.height
      };
      break;
    case Oo:
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
    case wo:
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
  var u = r ? W$(r) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Oa:
        s[u] = s[u] - (n[c] / 2 - o[c] / 2);
        break;
      case At:
        s[u] = s[u] + (n[c] / 2 - o[c] / 2);
        break;
    }
  }
  return s;
}
function K$() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function q$(e) {
  return Object.assign({}, K$(), e);
}
function G$(e, n) {
  return n.reduce(function(o, t) {
    return o[t] = e, o;
  }, {});
}
function Zp(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = t === void 0 ? e.placement : t, a = o.strategy, i = a === void 0 ? e.strategy : a, l = o.boundary, s = l === void 0 ? C$ : l, u = o.rootBoundary, c = u === void 0 ? Wp : u, d = o.elementContext, f = d === void 0 ? $t : d, v = o.altBoundary, y = v === void 0 ? !1 : v, m = o.padding, b = m === void 0 ? 0 : m, C = q$(typeof b != "number" ? b : G$(b, za)), w = f === $t ? S$ : $t, g = e.rects.popper, $ = e.elements[y ? w : f], O = j$(Ho($) ? $ : $.contextElement || Mo(e.elements.popper), s, c, i), z = ft(e.elements.reference), L = Xp({
    reference: z,
    element: g,
    strategy: "absolute",
    placement: r
  }), T = ml(Object.assign({}, g, L)), E = f === $t ? T : z, D = {
    top: O.top - E.top + C.top,
    bottom: E.bottom - O.bottom + C.bottom,
    left: O.left - E.left + C.left,
    right: E.right - O.right + C.right
  }, M = e.modifiersData.offset;
  if (f === $t && M) {
    var Y = M[r];
    Object.keys(D).forEach(function(j) {
      var R = [Uo, Oo].indexOf(j) >= 0 ? 1 : -1, K = [so, Oo].indexOf(j) >= 0 ? "y" : "x";
      D[j] += Y[K] * R;
    });
  }
  return D;
}
function X$(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = o.boundary, a = o.rootBoundary, i = o.padding, l = o.flipVariations, s = o.allowedAutoPlacements, u = s === void 0 ? Kp : s, c = Nt(t), d = c ? l ? tc : tc.filter(function(y) {
    return Nt(y) === c;
  }) : za, f = d.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  f.length === 0 && (f = d);
  var v = f.reduce(function(y, m) {
    return y[m] = Zp(e, {
      placement: m,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[Co(m)], y;
  }, {});
  return Object.keys(v).sort(function(y, m) {
    return v[y] - v[m];
  });
}
function Z$(e) {
  if (Co(e) === Cs)
    return [];
  var n = yr(e);
  return [rc(e), n, rc(n)];
}
function J$(e) {
  var n = e.state, o = e.options, t = e.name;
  if (!n.modifiersData[t]._skip) {
    for (var r = o.mainAxis, a = r === void 0 ? !0 : r, i = o.altAxis, l = i === void 0 ? !0 : i, s = o.fallbackPlacements, u = o.padding, c = o.boundary, d = o.rootBoundary, f = o.altBoundary, v = o.flipVariations, y = v === void 0 ? !0 : v, m = o.allowedAutoPlacements, b = n.options.placement, C = Co(b), w = C === b, g = s || (w || !y ? [yr(b)] : Z$(b)), $ = [b].concat(g).reduce(function(ae, A) {
      return ae.concat(Co(A) === Cs ? X$(n, {
        placement: A,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: m
      }) : A);
    }, []), O = n.rects.reference, z = n.rects.popper, L = /* @__PURE__ */ new Map(), T = !0, E = $[0], D = 0; D < $.length; D++) {
      var M = $[D], Y = Co(M), j = Nt(M) === Oa, R = [so, Oo].indexOf(Y) >= 0, K = R ? "width" : "height", W = Zp(n, {
        placement: M,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), ce = R ? j ? Uo : wo : j ? Oo : so;
      O[K] > z[K] && (ce = yr(ce));
      var Q = yr(ce), pe = [];
      if (a && pe.push(W[Y] <= 0), l && pe.push(W[ce] <= 0, W[Q] <= 0), pe.every(function(ae) {
        return ae;
      })) {
        E = M, T = !1;
        break;
      }
      L.set(M, pe);
    }
    if (T)
      for (var ye = y ? 3 : 1, ie = function(A) {
        var H = $.find(function(ee) {
          var ke = L.get(ee);
          if (ke)
            return ke.slice(0, A).every(function(Se) {
              return Se;
            });
        });
        if (H)
          return E = H, "break";
      }, U = ye; U > 0; U--) {
        var J = ie(U);
        if (J === "break")
          break;
      }
    n.placement !== E && (n.modifiersData[t]._skip = !0, n.placement = E, n.reset = !0);
  }
}
const Q$ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: J$,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function _$(e, n, o) {
  var t = Co(e), r = [wo, so].indexOf(t) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, n, {
    placement: e
  })) : o, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * r, [wo, Uo].indexOf(t) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function x$(e) {
  var n = e.state, o = e.options, t = e.name, r = o.offset, a = r === void 0 ? [0, 0] : r, i = Kp.reduce(function(c, d) {
    return c[d] = _$(d, n.rects, a), c;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[t] = i;
}
const ew = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: x$
};
var nw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ow(e) {
  var n = e.x, o = e.y, t = window, r = t.devicePixelRatio || 1;
  return {
    x: dt(n * r) / r || 0,
    y: dt(o * r) / r || 0
  };
}
function sc(e) {
  var n, o = e.popper, t = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, y = i.y, m = y === void 0 ? 0 : y, b = typeof c == "function" ? c({
    x: v,
    y: m
  }) : {
    x: v,
    y: m
  };
  v = b.x, m = b.y;
  var C = i.hasOwnProperty("x"), w = i.hasOwnProperty("y"), g = wo, $ = so, O = window;
  if (u) {
    var z = Ts(o), L = "clientHeight", T = "clientWidth";
    if (z === Wn(o) && (z = Mo(o), uo(z).position !== "static" && l === "absolute" && (L = "scrollHeight", T = "scrollWidth")), z = z, r === so || (r === wo || r === Uo) && a === At) {
      $ = Oo;
      var E = d && z === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        z[L]
      );
      m -= E - t.height, m *= s ? 1 : -1;
    }
    if (r === wo || (r === so || r === Oo) && a === At) {
      g = Uo;
      var D = d && z === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        z[T]
      );
      v -= D - t.width, v *= s ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: l
  }, u && nw), Y = c === !0 ? ow({
    x: v,
    y: m
  }) : {
    x: v,
    y: m
  };
  if (v = Y.x, m = Y.y, s) {
    var j;
    return Object.assign({}, M, (j = {}, j[$] = w ? "0" : "", j[g] = C ? "0" : "", j.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + m + "px)" : "translate3d(" + v + "px, " + m + "px, 0)", j));
  }
  return Object.assign({}, M, (n = {}, n[$] = w ? m + "px" : "", n[g] = C ? v + "px" : "", n.transform = "", n));
}
function tw(e) {
  var n = e.state, o = e.options, t = o.gpuAcceleration, r = t === void 0 ? !0 : t, a = o.adaptive, i = a === void 0 ? !0 : a, l = o.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: Co(n.placement),
    variation: Nt(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: r,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, sc(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, sc(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Jp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: tw,
  data: {}
};
function rw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function aw(e) {
  return e === Wn(e) || !Un(e) ? Ps(e) : rw(e);
}
function iw(e) {
  var n = e.getBoundingClientRect(), o = dt(n.width) / e.offsetWidth || 1, t = dt(n.height) / e.offsetHeight || 1;
  return o !== 1 || t !== 1;
}
function lw(e, n, o) {
  o === void 0 && (o = !1);
  var t = Un(n), r = Un(n) && iw(n), a = Mo(n), i = ft(e, r, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (t || !t && !o) && ((xn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Os(a)) && (l = aw(n)), Un(n) ? (s = ft(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = zs(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function sw(e) {
  var n = ft(e), o = e.offsetWidth, t = e.offsetHeight;
  return Math.abs(n.width - o) <= 1 && (o = n.width), Math.abs(n.height - t) <= 1 && (t = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: t
  };
}
function uw(e) {
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
function cw(e) {
  var n = uw(e);
  return A$.reduce(function(o, t) {
    return o.concat(n.filter(function(r) {
      return r.phase === t;
    }));
  }, []);
}
function dw(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(o) {
      Promise.resolve().then(function() {
        n = void 0, o(e());
      });
    })), n;
  };
}
function fw(e) {
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
var uc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function cc() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  return !n.some(function(t) {
    return !(t && typeof t.getBoundingClientRect == "function");
  });
}
function pw(e) {
  e === void 0 && (e = {});
  var n = e, o = n.defaultModifiers, t = o === void 0 ? [] : o, r = n.defaultOptions, a = r === void 0 ? uc : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, uc, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, v = {
      state: c,
      setOptions: function(C) {
        var w = typeof C == "function" ? C(c.options) : C;
        m(), c.options = Object.assign({}, a, c.options, w), c.scrollParents = {
          reference: Ho(l) ? Ot(l) : l.contextElement ? Ot(l.contextElement) : [],
          popper: Ot(s)
        };
        var g = cw(fw([].concat(t, c.options.modifiers)));
        return c.orderedModifiers = g.filter(function($) {
          return $.enabled;
        }), y(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var C = c.elements, w = C.reference, g = C.popper;
          if (cc(w, g)) {
            c.rects = {
              reference: lw(w, Ts(g), c.options.strategy === "fixed"),
              popper: sw(g)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(D) {
              return c.modifiersData[D.name] = Object.assign({}, D.data);
            });
            for (var $ = 0; $ < c.orderedModifiers.length; $++) {
              if (c.reset === !0) {
                c.reset = !1, $ = -1;
                continue;
              }
              var O = c.orderedModifiers[$], z = O.fn, L = O.options, T = L === void 0 ? {} : L, E = O.name;
              typeof z == "function" && (c = z({
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
      update: dw(function() {
        return new Promise(function(b) {
          v.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!cc(l, s))
      return v;
    v.setOptions(u).then(function(b) {
      !f && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function y() {
      c.orderedModifiers.forEach(function(b) {
        var C = b.name, w = b.options, g = w === void 0 ? {} : w, $ = b.effect;
        if (typeof $ == "function") {
          var O = $({
            state: c,
            name: C,
            instance: v,
            options: g
          }), z = function() {
          };
          d.push(O || z);
        }
      });
    }
    function m() {
      d.forEach(function(b) {
        return b();
      }), d = [];
    }
    return v;
  };
}
var sr = {
  passive: !0
};
function vw(e) {
  var n = e.state, o = e.instance, t = e.options, r = t.scroll, a = r === void 0 ? !0 : r, i = t.resize, l = i === void 0 ? !0 : i, s = Wn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", o.update, sr);
  }), l && s.addEventListener("resize", o.update, sr), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", o.update, sr);
    }), l && s.removeEventListener("resize", o.update, sr);
  };
}
const mw = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: vw,
  data: {}
};
function hw(e) {
  var n = e.state, o = e.name;
  n.modifiersData[o] = Xp({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const gw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: hw,
  data: {}
};
function bw(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(o) {
    var t = n.styles[o] || {}, r = n.attributes[o] || {}, a = n.elements[o];
    !Un(a) || !xn(a) || (Object.assign(a.style, t), Object.keys(r).forEach(function(i) {
      var l = r[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function yw(e) {
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
      !Un(r) || !xn(r) || (Object.assign(r.style, l), Object.keys(a).forEach(function(s) {
        r.removeAttribute(s);
      }));
    });
  };
}
const kw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: bw,
  effect: yw,
  requires: ["computeStyles"]
};
var $w = [mw, gw, Jp, kw], ww = /* @__PURE__ */ pw({
  defaultModifiers: $w
}), Cw = Object.defineProperty, Sw = Object.defineProperties, Pw = Object.getOwnPropertyDescriptors, dc = Object.getOwnPropertySymbols, zw = Object.prototype.hasOwnProperty, Ow = Object.prototype.propertyIsEnumerable, fc = (e, n, o) => n in e ? Cw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, zi = (e, n) => {
  for (var o in n || (n = {}))
    zw.call(n, o) && fc(e, o, n[o]);
  if (dc)
    for (var o of dc(n))
      Ow.call(n, o) && fc(e, o, n[o]);
  return e;
}, Oi = (e, n) => Sw(e, Pw(n)), pc = (e, n, o) => new Promise((t, r) => {
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
function Qp(e) {
  const n = k(null), o = k(null), t = k({ width: 0, height: 0 }), r = Zn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(D, M) {
      S(M ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = Xt(() => r.value, 1);
  ss(() => r.value, a);
  let i = null, l = !1, s = !1;
  const u = () => {
    if (!n.value)
      return;
    const { width: D, height: M } = qo(n.value);
    t.value = {
      width: en(D),
      height: en(M)
    };
  }, c = () => {
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
  }, d = () => {
    e.trigger === "hover" && (s = !0, T());
  }, f = () => pc(this, null, function* () {
    e.trigger === "hover" && (s = !1, yield kn(), !l && E());
  }), v = () => {
    e.trigger === "hover" && (l = !0);
  }, y = () => pc(this, null, function* () {
    e.trigger === "hover" && (l = !1, yield kn(), !s && E());
  }), m = () => {
    e.closeOnClickReference && r.value ? E() : T();
  }, b = () => {
    E();
  }, C = (D) => {
    e.trigger === "click" && (b(), S(e.onClickOutside, D));
  }, w = () => {
    L(), S(e.onClosed);
  }, g = () => {
    const { offsetX: D, offsetY: M, placement: Y } = e;
    u();
    const j = {
      x: en(D),
      y: en(M)
    };
    switch (Y) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: j.x,
          distance: j.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: j.x,
          distance: j.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: j.x,
          distance: j.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: j.x,
          distance: -j.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: j.x,
          distance: -j.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: j.x,
          distance: -j.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: j.y,
          distance: j.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: j.y,
          distance: -j.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: Y,
          skidding: j.y,
          distance: -j.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: Y,
          skidding: j.x,
          distance: -j.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: Y,
          skidding: j.x,
          distance: j.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: Y,
          skidding: j.y,
          distance: j.x
        };
    }
  }, $ = () => {
    const { placement: D, skidding: M, distance: Y } = g(), j = [
      Oi(zi({}, Q$), {
        enabled: r.value
      }),
      Oi(zi({}, ew), {
        options: {
          offset: [M, Y]
        }
      }),
      Oi(zi({}, Jp), {
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
        fn({ state: R }) {
          R.styles.popper.transformOrigin = c();
        }
      }
    ];
    return {
      placement: D,
      modifiers: j,
      strategy: e.strategy
    };
  }, O = () => e.reference ? n.value.querySelector(e.reference) : n.value, z = (D) => {
    const { closeOnKeyEscape: M = !1 } = e;
    D.key === "Escape" && M && r.value && (Ne(D), E());
  }, L = () => {
    i.setOptions($());
  }, T = () => {
    e.disabled || (r.value = !0, S(e["onUpdate:show"], !0));
  }, E = () => {
    r.value = !1, S(e["onUpdate:show"], !1);
  };
  return We(() => window, "keydown", z), Pd(O, "click", C), to(L), de(() => [e.offsetX, e.offsetY, e.placement, e.strategy], L), de(() => e.disabled, E), de(
    () => r.value,
    (D) => {
      D && L();
    }
  ), Yo(() => {
    var D;
    i = ww((D = O()) != null ? D : n.value, o.value, $());
  }), jt(() => {
    i.destroy();
  }), {
    show: r,
    popover: o,
    zIndex: a,
    host: n,
    hostSize: t,
    handleHostClick: m,
    handleHostMouseenter: d,
    handleHostMouseleave: f,
    handlePopoverClose: b,
    handlePopoverMouseenter: v,
    handlePopoverMouseleave: y,
    handleClosed: w,
    resize: L,
    open: T,
    close: E
  };
}
const _p = {
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
  onOpen: V(),
  onOpened: V(),
  onClose: V(),
  onClosed: V(),
  onClickOutside: V(),
  "onUpdate:show": V()
}, { name: Tw, n: Ew, classes: Dw } = x("tooltip");
function Bw(e, n) {
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
      N(e.$slots, "default"),
      (h(), Oe(no, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        G(Qe, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: fe(() => [
            Ie(I(
              "div",
              {
                ref: "popover",
                class: p(e.classes(e.n("tooltip"), e.n("$--box"))),
                style: q({ zIndex: e.zIndex }),
                onClick: n[0] || (n[0] = Nn(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                I(
                  "div",
                  {
                    style: q({ background: e.color, width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0 }),
                    class: p(e.classes(e.n("content-container"), e.n(`--${e.type}`))),
                    role: "tooltip"
                  },
                  [
                    N(e.$slots, "content", {}, () => [
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
const xp = _({
  name: Tw,
  props: _p,
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
      open: y,
      // expose
      close: m,
      // expose
      resize: b
    } = Qp(e);
    return {
      popover: o,
      host: t,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: ze,
      n: Ew,
      classes: Dw,
      handleHostClick: l,
      handlePopoverClose: f,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handleClosed: v,
      resize: b,
      open: y,
      close: m
    };
  }
});
xp.render = Bw;
var Ea = xp;
te(Ea);
ue(Ea, _p);
const V5 = Ea;
var Nr = Ea;
const ev = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": V()
};
var Iw = Object.defineProperty, vc = Object.getOwnPropertySymbols, Mw = Object.prototype.hasOwnProperty, Aw = Object.prototype.propertyIsEnumerable, mc = (e, n, o) => n in e ? Iw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Nw = (e, n) => {
  for (var o in n || (n = {}))
    Mw.call(n, o) && mc(e, o, n[o]);
  if (vc)
    for (var o of vc(n))
      Aw.call(n, o) && mc(e, o, n[o]);
  return e;
};
const { name: Vw, n: Lw, classes: Rw } = x("ellipsis"), Fw = { key: 0 };
function Uw(e, n) {
  const o = ne("var-tooltip");
  return h(), Oe(
    o,
    $o(Kt(e.tooltipProps)),
    {
      content: fe(() => [
        N(e.$slots, "tooltip-content", {}, () => {
          var t;
          return [
            (t = e.tooltipProps) != null && t.content ? (h(), P(
              "span",
              Fw,
              re(e.tooltipProps.content),
              1
              /* TEXT */
            )) : N(e.$slots, "default", { key: 1 })
          ];
        })
      ]),
      default: fe(() => [
        I(
          "span",
          {
            class: p(
              e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])
            ),
            style: q(e.rootStyles),
            onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
          },
          [
            N(e.$slots, "default")
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
const nv = _({
  name: Vw,
  components: { VarTooltip: Nr },
  props: ev,
  setup(e) {
    const n = Zn(e, "expand"), o = B(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), t = B(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : Nw({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: t,
      expanding: n,
      rootStyles: o,
      n: Lw,
      classes: Rw,
      handleClick: r
    };
  }
});
nv.render = Uw;
var Da = nv;
te(Da);
ue(Da, ev);
const L5 = Da;
var hl = Da;
const ov = {
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
  inactiveIconSize: Be(on, "size"),
  activeIconSize: Be(on, "size"),
  inactiveIconNamespace: Be(on, "namespace"),
  activeIconNamespace: Be(on, "namespace"),
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
  name: Hw,
  classes: Ti,
  n: Bn
} = x("fab");
var Ba = _({
  name: Hw,
  inheritAttrs: !1,
  props: ov,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = Zn(e, "active"), r = k(null), a = k(null);
    de(() => e.trigger, () => {
      t.value = !1;
    }), de(() => e.disabled, () => {
      t.value = !1;
    }), de(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var c;
      (c = a.value) == null || c.reset();
    }), Pd(r, "click", s);
    function i(c, d, f) {
      if (c.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (f === 0) {
          S(e.onClick, t.value, c);
          return;
        }
        t.value = d, S(e.onClick, t.value, c), S(t.value ? e.onOpen : e.onClose);
      }
    }
    function l(c, d) {
      e.trigger !== "hover" || e.disabled || d === 0 || (t.value = c, S(t.value ? e.onOpen : e.onClose));
    }
    function s() {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, S(e.onClose));
    }
    function u() {
      return n.trigger ? e.show ? n.trigger({
        active: t.value
      }) : null : Ie(G(Sn, {
        "var-fab-cover": !0,
        class: Bn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        iconContainer: !0
      }, {
        default: () => [G(Ze, {
          "var-fab-cover": !0,
          class: Ti([t.value, Bn("trigger-active-icon"), Bn("trigger-inactive-icon")]),
          name: t.value ? e.activeIcon : e.inactiveIcon,
          size: t.value ? e.activeIconSize : e.inactiveIconSize,
          namespace: t.value ? e.activeIconNamespace : e.inactiveIconNamespace,
          transition: 200,
          animationClass: Bn("--trigger-icon-animation")
        }, null)]
      }), [[Xn, e.show]]);
    }
    return () => {
      var c;
      const d = Td((c = S(n.default)) != null ? c : []), f = ts(e.drag) ? {} : e.drag;
      return G(Ar, He({
        ref: a,
        class: Ti(Bn(`--position-${e.position}`), [!e.fixed, Bn("--absolute")]),
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
        onClick: (v) => i(v, !t.value, d.length)
      }, o), {
        default: () => [G("div", {
          class: Ti(Bn(), Bn(`--direction-${e.direction}`), [e.safeArea, Bn("--safe-area")]),
          ref: r,
          onMouseleave: () => l(!1, d.length),
          onMouseenter: () => l(!0, d.length)
        }, [G(Qe, {
          name: Bn("--active-transition")
        }, {
          default: () => [u()]
        }), G(Qe, {
          name: Bn(`--actions-transition-${e.direction}`),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Ie(G("div", {
            class: Bn("actions"),
            onClick: (v) => v.stopPropagation()
          }, [d.map((v) => G("div", {
            class: Bn("action")
          }, [v]))]), [[Xn, e.show && t.value && d.length]])]
        })])]
      });
    };
  }
});
te(Ba);
ue(Ba, ov);
const R5 = Ba;
var gl = Ba;
const Ia = {
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
  onClick: V(),
  onClear: V()
};
var Yw = (e, n, o) => new Promise((t, r) => {
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
const { name: jw, n: Ei, classes: Ww } = x("field-decorator"), Kw = ["for"];
function qw(e, n) {
  const o = ne("var-icon");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      I(
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
          I(
            "div",
            {
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              N(e.$slots, "prepend-icon")
            ],
            2
            /* CLASS */
          ),
          I(
            "div",
            {
              ref: "middleEl",
              class: p(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
            },
            [
              N(e.$slots, "default")
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
                [e.errorMessage, e.n("--error")],
                [e.transitionDisabled, e.n("--transition-disabled")],
                e.computePlaceholderState()
              )
            ),
            style: q({
              color: e.color
            }),
            for: e.id
          }, [
            I(
              "span",
              null,
              re(e.placeholder),
              1
              /* TEXT */
            )
          ], 14, Kw)) : X("v-if", !0),
          I(
            "div",
            {
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              e.clearable && !e.isEmpty(e.value) ? N(e.$slots, "clear-icon", {
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
              N(e.$slots, "append-icon")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.line ? (h(), P(
        Re,
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
                  [e.errorMessage, e.n("--line-error")],
                  [e.formDisabled || e.disabled, e.n("--line-disabled")]
                )
              ),
              style: q({ borderColor: e.color })
            },
            [
              I(
                "legend",
                {
                  class: p(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
                  style: q({ width: e.legendWidth })
                },
                [
                  e.placeholder && e.hint ? (h(), Oe(no, {
                    key: 0,
                    to: "body"
                  }, [
                    I(
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
          )) : (h(), P(
            "div",
            {
              key: 1,
              class: p(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
              style: q({ background: e.errorMessage ? void 0 : e.blurColor })
            },
            [
              I(
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
                  style: q({ background: e.errorMessage ? void 0 : e.focusColor })
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
const tv = _({
  name: jw,
  components: { VarIcon: Ze },
  props: Ia,
  setup(e) {
    const n = k(null), o = k(null), t = k(""), r = k("0px"), a = k("0px"), i = k("0px"), l = k(!0), s = B(() => e.hint && (!Qn(e.value) || e.isFocusing)), { popup: u, bindPopup: c } = Vd(), d = B(
      () => e.errorMessage ? void 0 : e.isFocusing ? e.focusColor : e.blurColor
    );
    to(m), fn(() => {
      m(), Ke().then(() => {
        l.value = !1;
      });
    }), Wt(m), S(c, null), u && de(
      () => u.show.value,
      (b) => Yw(this, null, function* () {
        b && (yield kn(), m());
      })
    );
    function f() {
      const { hint: b, value: C, composing: w } = e;
      if (!b && (!Qn(C) || w))
        return Ei("--placeholder-hidden");
      if (s.value)
        return Ei("--placeholder-hint");
    }
    function v(b) {
      S(e.onClear, b);
    }
    function y(b) {
      S(e.onClick, b);
    }
    function m() {
      if (r.value = `${o.value.offsetLeft}px`, a.value = `${o.value.offsetWidth}px`, i.value = `${o.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
        const b = qo(n.value), C = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
        t.value = `calc(${b.width} * 0.75 + ${C} * 2)`;
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
      n: Ei,
      classes: Ww,
      isEmpty: Qn,
      handleClear: v,
      handleClick: y
    };
  }
});
tv.render = qw;
var Ma = tv;
te(Ma);
ue(Ma, Ia);
const F5 = Ma;
var Vt = Ma;
const rv = {
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
}, { name: Gw, n: Xw, classes: Zw } = x("floating-panel"), hc = 100, gc = 0.2;
function Jw(e, n) {
  return h(), Oe(no, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    I(
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
        N(e.$slots, "header", {}, () => [
          I(
            "div",
            {
              class: p(e.n("header"))
            },
            [
              I(
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
        I(
          "div",
          {
            class: p(e.n("content")),
            ref: "contentRef"
          },
          [
            N(e.$slots, "default")
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
const av = _({
  name: Gw,
  props: rv,
  setup(e) {
    const n = k(0), o = k(null), { height: t } = Wh(), r = B(() => t.value * 0.6), a = Zn(e, "anchor", { defaultValue: hc }), i = B(() => {
      const E = [hc, r.value], { anchors: D } = e;
      return Qn(D) ? E : D;
    }), l = B(() => Math.min(...i.value)), s = B(() => Math.max(...i.value)), { disabled: u } = Go(), { deltaY: c, touching: d, startTouch: f, moveTouch: v, endTouch: y, isReachTop: m, isReachBottom: b } = mt();
    let C;
    Gt(() => d.value), de(() => a.value, w, { immediate: !0 }), de(
      () => i.value,
      () => {
        w(a.value);
      },
      { immediate: !0 }
    );
    function w(E) {
      z(E ?? l.value);
    }
    function g(E) {
      f(E), C = n.value;
    }
    function $(E) {
      var D;
      v(E);
      const M = E.target, Y = o.value === M || ((D = o.value) == null ? void 0 : D.contains(M));
      if (Y && !e.contentDraggable)
        return;
      if (Y && e.contentDraggable && n.value >= s.value && !m(o.value)) {
        b(o.value) && Ne(E);
        return;
      }
      const j = C - c.value;
      z(L(j)), Ne(E);
    }
    function O() {
      y();
      const E = a.value;
      z(n.value), a.value = n.value, a.value !== E && S(e.onAnchorChange, n.value);
    }
    function z(E) {
      n.value = d.value ? E : T(E);
    }
    function L(E) {
      if (E > s.value) {
        const D = E - s.value;
        return s.value + D * gc;
      }
      if (E < l.value) {
        const D = l.value - E;
        return l.value - D * gc;
      }
      return E;
    }
    function T(E) {
      if (i.value.includes(E))
        return E;
      let D = 1 / 0, M = 0;
      return i.value.forEach((Y) => {
        const j = Math.abs(Y - E);
        j < D && (D = j, M = Y);
      }), M;
    }
    return {
      contentRef: o,
      teleportDisabled: u,
      touching: d,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: Xw,
      classes: Zw,
      toSizeUnit: ze,
      toNumber: F,
      formatElevation: dn,
      handleTouchstart: g,
      handleTouchmove: $,
      handleTouchend: O
    };
  }
});
av.render = Jw;
var Aa = av;
te(Aa);
ue(Aa, rv);
const U5 = Aa;
var bl = Aa;
const iv = {
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
var bc = (e, n, o) => new Promise((t, r) => {
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
const { name: Qw, n: _w } = x("form");
function xw(e, n) {
  return h(), P(
    "form",
    {
      class: p(e.n()),
      onSubmit: n[0] || (n[0] = (...o) => e.handleSubmit && e.handleSubmit(...o)),
      onReset: n[1] || (n[1] = (...o) => e.handleReset && e.handleReset(...o))
    },
    [
      N(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const lv = _({
  name: Qw,
  props: iv,
  setup(e) {
    const n = B(() => e.disabled), o = B(() => e.readonly), { formItems: t, bindFormItems: r } = yy();
    r({
      disabled: n,
      readonly: o
    });
    function i(f) {
      setTimeout(() => {
        const v = Po(f), y = v === window ? 0 : xs(v), m = xs(f) - y - en(e.scrollToErrorOffsetY);
        Bt(v, {
          top: m,
          animation: Li
        });
      }, 300);
    }
    function l(f) {
      return bc(this, null, function* () {
        Ne(f);
        const v = yield u();
        S(e.onSubmit, v);
      });
    }
    function s(f) {
      Ne(f), c(), S(e.onReset);
    }
    function u() {
      return bc(this, null, function* () {
        var f;
        const v = yield Promise.all(t.map(({ validate: y }) => y()));
        if (e.scrollToError) {
          const [, y] = Bh(v, (b) => b === !1, e.scrollToError), m = y > -1;
          if (m) {
            const b = (f = t[y].instance.proxy) == null ? void 0 : f.$el;
            i(b);
          }
          return !m;
        }
        return v.every((y) => y === !0);
      });
    }
    function c() {
      return t.forEach(({ reset: f }) => f());
    }
    function d() {
      return t.forEach(({ resetValidation: f }) => f());
    }
    return {
      n: _w,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: c,
      resetValidation: d
    };
  }
});
lv.render = xw;
var bt = lv;
bt.useValidation = Yn;
bt.useForm = jn;
te(bt);
ue(bt, iv);
const H5 = bt;
var yl = bt;
const sv = {
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
}, { name: eC, n: nC, classes: oC } = x("image"), tC = ["alt", "title", "referrerpolicy", "lazy-loading", "lazy-error"], rC = ["alt", "title", "referrerpolicy", "src"];
function aC(e, n) {
  var o;
  const t = Ye("lazy"), r = Ye("ripple");
  return Ie((h(), P(
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
      e.lazy && !e.showErrorSlot ? Ie((h(), P("img", {
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
      }, null, 46, tC)), [
        [t, (o = e.src) != null ? o : ""]
      ]) : X("v-if", !0),
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
      }, null, 46, rC)) : X("v-if", !0),
      e.showErrorSlot ? N(e.$slots, "error", { key: 2 }) : X("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const uv = _({
  name: eC,
  directives: {
    Lazy: It,
    Ripple: tn
  },
  props: sv,
  setup(e, { slots: n }) {
    const o = k(!1);
    de(
      () => e.src,
      () => {
        o.value = !1;
      }
    );
    function t(i) {
      o.value = !!n.error, S(e.onError, i);
    }
    function r(i) {
      const l = i.currentTarget;
      if (e.lazy) {
        if (l._lazy.state === "success") {
          S(e.onLoad, i);
          return;
        }
        l._lazy.state === "error" && t(i);
      } else
        S(e.onLoad, i);
    }
    function a(i) {
      S(e.onClick, i);
    }
    return {
      showErrorSlot: o,
      n: nC,
      classes: oC,
      toSizeUnit: ze,
      handleLoad: r,
      handleError: t,
      handleClick: a
    };
  }
});
uv.render = aC;
var Na = uv;
te(Na);
ue(Na, sv);
const Y5 = Na;
var kl = Na;
const cv = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function iC() {
  const { childProviders: e, length: n, bindChildren: o } = bn(
    cv
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: o
  };
}
const Es = {
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
const lC = 250, sC = 20, { name: uC, n: yc, classes: cC } = x("swipe"), dC = ["onClick"];
function fC(e, n) {
  const o = ne("var-icon"), t = ne("var-button"), r = Ye("hover");
  return Ie((h(), P(
    "div",
    {
      class: p(e.n()),
      ref: "swipeEl"
    },
    [
      I(
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
          N(e.$slots, "default")
        ],
        38
        /* CLASS, STYLE, NEED_HYDRATION */
      ),
      e.navigation ? N(e.$slots, "prev", $o(He({ key: 0 }, {
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
          default: fe(() => [
            e.navigation === !0 || e.hovering ? (h(), P(
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
      e.navigation ? N(e.$slots, "next", $o(He({ key: 1 }, {
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
          default: fe(() => [
            e.navigation === !0 || e.hovering ? (h(), P(
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
      N(e.$slots, "indicator", $o(Kt({
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
              Re,
              null,
              _e(e.length, (a, i) => (h(), P("div", {
                class: p(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: q({ background: e.indicatorColor }),
                key: a,
                onClick: (l) => e.to(i)
              }, null, 14, dC))),
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
const dv = _({
  name: uC,
  directives: { Hover: Tn },
  components: { VarButton: Sn, VarIcon: Ze },
  props: Es,
  setup(e) {
    const n = k(null), o = k(0), t = B(() => e.vertical), r = k(0), a = k(0), i = k(!1), l = k(0), s = k(!1), { swipeItems: u, bindSwipeItems: c, length: d } = iC(), { popup: f, bindPopup: v } = Vd(), {
      deltaX: y,
      deltaY: m,
      moveX: b,
      moveY: C,
      offsetX: w,
      offsetY: g,
      touching: $,
      direction: O,
      startTime: z,
      startTouch: L,
      moveTouch: T,
      endTouch: E
    } = mt(), D = B(() => O.value === (e.vertical ? "vertical" : "horizontal"));
    let M = !1, Y = -1;
    c({
      size: o,
      currentIndex: l,
      vertical: t
    }), We(() => window, "keydown", ke), S(v, null), de(
      () => d.value,
      () => Zo(this, null, function* () {
        yield kn(), ye(), Se();
      })
    ), f && de(
      () => f.show.value,
      (ve) => Zo(this, null, function* () {
        ve ? (yield kn(), Se()) : U();
      })
    ), To(Se), qt(U), to(Se);
    function R(ve) {
      return u.find(({ index: Fe }) => Fe.value === ve);
    }
    function K() {
      e.loop && (a.value >= 0 && R(d.value - 1).setTranslate(-r.value), a.value <= -(r.value - o.value) && R(0).setTranslate(r.value), a.value > -(r.value - o.value) && a.value < 0 && (R(d.value - 1).setTranslate(0), R(0).setTranslate(0)));
    }
    function W(ve) {
      const Fe = On(ve) ? ve : Math.floor((a.value - o.value / 2) / -o.value), { loop: Ue } = e;
      return Fe <= -1 ? Ue ? -1 : 0 : Fe >= d.value ? Ue ? d.value : d.value - 1 : Fe;
    }
    function ce(ve) {
      const { loop: Fe } = e;
      return ve === -1 ? Fe ? d.value - 1 : 0 : ve === d.value ? Fe ? 0 : d.value - 1 : ve;
    }
    function Q(ve) {
      return e.loop ? ve < 0 ? d.value + ve : ve >= d.value ? ve - d.value : ve : Mn(ve, 0, d.value - 1);
    }
    function pe() {
      return Zo(this, null, function* () {
        const ve = a.value >= o.value, Fe = a.value <= -r.value, Ue = 0, nn = -(r.value - o.value);
        i.value = !0, (ve || Fe) && (i.value = !0, a.value = Fe ? Ue : nn, R(0).setTranslate(0), R(d.value - 1).setTranslate(0)), yield kn(), i.value = !1;
      });
    }
    function ye() {
      M || (l.value = Q(F(e.initialIndex)), M = !0);
    }
    function ie() {
      const { autoplay: ve } = e;
      !ve || d.value <= 1 || (U(), Y = window.setTimeout(() => {
        Le(), ie();
      }, F(ve)));
    }
    function U() {
      Y && clearTimeout(Y);
    }
    function J(ve) {
      return Zo(this, null, function* () {
        d.value <= 1 || !e.touchable || (L(ve), U(), yield pe(), i.value = !0);
      });
    }
    function ae(ve) {
      const { touchable: Fe, vertical: Ue } = e;
      !$.value || !Fe || (T(ve), D.value && (Ne(ve), a.value += Ue ? C.value : b.value, K()));
    }
    function A() {
      if (!$.value || (E(), !D.value))
        return;
      const { vertical: ve, onChange: Fe } = e, Ue = ve ? m.value < 0 : y.value < 0, nn = ve ? g.value : w.value, me = performance.now() - z.value <= lC && nn >= sC ? W(Ue ? l.value + 1 : l.value - 1) : W();
      i.value = !1, a.value = me * -o.value;
      const $e = l.value;
      l.value = ce(me), ie(), $e !== l.value && S(Fe, l.value);
    }
    function H(ve) {
      e.navigation === "hover" && (s.value = ve);
    }
    function ee(ve) {
      return e.navigation !== "hover" ? "" : yc(`--navigation${e.vertical ? "-vertical" : ""}-${ve}-animation`);
    }
    function ke(ve) {
      if (!u.length || u.findIndex(({ isFocusing: nn }) => nn.value) === -1)
        return;
      const { key: Ue } = ve;
      Ne(ve), Ue === "ArrowLeft" && je(), Ue === "ArrowRight" && Le();
    }
    function Se() {
      n.value && (i.value = !0, o.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = o.value * d.value, a.value = l.value * -o.value, u.forEach((ve) => {
        ve.setTranslate(0);
      }), ie(), setTimeout(() => {
        i.value = !1;
      }));
    }
    function Le(ve) {
      return Zo(this, null, function* () {
        if (d.value <= 1)
          return;
        ye();
        const { loop: Fe, onChange: Ue } = e, nn = l.value;
        if (l.value = Q(nn + 1), (ve == null ? void 0 : ve.event) !== !1 && S(Ue, l.value), yield pe(), nn === d.value - 1 && Fe) {
          R(0).setTranslate(r.value), a.value = d.value * -o.value;
          return;
        }
        nn !== d.value - 1 && (a.value = l.value * -o.value);
      });
    }
    function je(ve) {
      return Zo(this, null, function* () {
        if (d.value <= 1)
          return;
        ye();
        const { loop: Fe, onChange: Ue } = e, nn = l.value;
        if (l.value = Q(nn - 1), (ve == null ? void 0 : ve.event) !== !1 && S(Ue, l.value), yield pe(), nn === 0 && Fe) {
          R(d.value - 1).setTranslate(-r.value), a.value = o.value;
          return;
        }
        nn !== 0 && (a.value = l.value * -o.value);
      });
    }
    function Pn(ve, Fe) {
      if (d.value <= 1 || ve === l.value)
        return;
      ve = ve < 0 ? 0 : ve, ve = ve >= d.value ? d.value : ve;
      const Ue = ve > l.value ? Le : je, nn = Math.abs(ve - l.value);
      Array.from({ length: nn }).forEach((le, me) => {
        Ue({ event: me === nn - 1 ? Fe == null ? void 0 : Fe.event : !1 });
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
      n: yc,
      toSizeUnit: ze,
      classes: cC,
      handleTouchstart: J,
      handleTouchmove: ae,
      handleTouchend: A,
      next: Le,
      prev: je,
      to: Pn,
      resize: Se,
      toNumber: F,
      handleHovering: H,
      getNavigationAnimation: ee
    };
  }
});
dv.render = fC;
var Va = dv;
te(Va);
ue(Va, Es);
const j5 = Va;
var Lt = Va;
function pC() {
  const { bindParent: e, index: n, parentProvider: o } = gn(cv);
  return e || Vn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: o,
    bindSwipe: e
  };
}
const { name: vC, n: mC } = x("swipe-item"), hC = ["aria-hidden"];
function gC(e, n) {
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
    N(e.$slots, "default")
  ], 46, hC);
}
const fv = _({
  name: vC,
  setup() {
    const e = k(0), n = k(!1), { swipe: o, bindSwipe: t, index: r } = pC(), { size: a, currentIndex: i, vertical: l } = o, s = {
      index: r,
      isFocusing: B(() => n.value),
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
      n: mC,
      toSizeUnit: ze
    };
  }
});
fv.render = gC;
var Ds = fv;
te(Ds);
const W5 = Ds;
var Rt = Ds, bC = Object.defineProperty, kc = Object.getOwnPropertySymbols, yC = Object.prototype.hasOwnProperty, kC = Object.prototype.propertyIsEnumerable, $c = (e, n, o) => n in e ? bC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, wc = (e, n) => {
  for (var o in n || (n = {}))
    yC.call(n, o) && $c(e, o, n[o]);
  if (kc)
    for (var o of kc(n))
      kC.call(n, o) && $c(e, o, n[o]);
  return e;
};
const pv = wc(wc({
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
}, Be(Es, ["loop", "indicator", "onChange"])), Be(gt, [
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
])), { name: $C, n: Cc, classes: wC } = x("image-preview"), Di = 12, Sc = 200, CC = 350, Pc = 200, SC = 500, ur = 1, PC = ["onTouchstart"], zC = ["src", "alt"];
function OC(e, n) {
  const o = ne("var-swipe-item"), t = ne("var-swipe"), r = ne("var-icon"), a = ne("var-popup");
  return h(), Oe(a, {
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
        default: fe(() => [
          (h(!0), P(
            Re,
            null,
            _e(e.images, (i, l) => (h(), Oe(o, {
              class: p(e.n("swipe-item")),
              "var-image-preview-cover": "",
              key: i
            }, {
              default: fe(() => [
                I("div", {
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
                  I("img", {
                    role: "img",
                    class: p(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                    src: i,
                    alt: i
                  }, null, 10, zC)
                ], 46, PC)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        indicator: fe(({ index: i, length: l }) => [
          N(e.$slots, "indicator", {
            index: i,
            length: l
          }, () => [
            e.indicator && e.images.length > 1 ? (h(), P(
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
      N(e.$slots, "close-icon", {}, () => [
        e.closeable ? (h(), Oe(r, {
          key: 0,
          class: p(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        }, null, 8, ["class", "onClick"])) : X("v-if", !0)
      ]),
      e.$slots.extra ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("extra"))
        },
        [
          N(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "transition", "close-on-key-escape", "lock-scroll", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onKeyEscape", "onRouteChange"]);
}
const vv = _({
  name: $C,
  components: {
    VarSwipe: Lt,
    VarSwipeItem: Rt,
    VarPopup: So,
    VarIcon: Ze
  },
  inheritAttrs: !1,
  props: pv,
  setup(e) {
    const n = Zn(e, "show"), o = k(1), t = k(0), r = k(0), a = k(), i = k(), l = k(!0), s = k(null), { moveX: u, moveY: c, distance: d, startTime: f, startTouch: v, moveTouch: y, endTouch: m } = mt(), b = B(() => {
      const { imagePreventDefault: U, show: J } = e;
      return J && U;
    });
    let C = null, w = null, g = !1;
    const $ = {
      start: null,
      prev: null
    };
    We(() => document, "contextmenu", ce);
    function O(U) {
      o.value = F(U), l.value = !1, $.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Pc);
    }
    function z() {
      o.value = 1, t.value = 0, r.value = 0, l.value = !0, $.prev = null, a.value = void 0, i.value = void 0;
    }
    function L(U) {
      return $.prev ? d.value <= Di && performance.now() - f.value <= Sc && $.prev === U : !1;
    }
    function T(U) {
      return !U || !$.start || !$.prev ? !1 : d.value <= Di && performance.now() - f.value < CC && (U === $.start || U.parentNode === $.start);
    }
    function E() {
      m(), window.clearTimeout(w), g = !1, $.start = null;
    }
    function D(U) {
      if (m(), window.clearTimeout(w), g) {
        g = !1;
        return;
      }
      const J = T(U.target);
      C = window.setTimeout(() => {
        J && W(), $.start = null;
      }, Sc);
    }
    function M(U, J) {
      window.clearTimeout(C), window.clearTimeout(w);
      const ae = U.currentTarget;
      if ($.start = ae, w = window.setTimeout(() => {
        g = !0, S(e.onLongPress, J);
      }, SC), L(ae)) {
        o.value > ur ? z() : O(e.zoom);
        return;
      }
      v(U), $.prev = ae;
    }
    function Y(U) {
      const { offsetWidth: J, offsetHeight: ae } = U, { naturalWidth: A, naturalHeight: H } = U.querySelector(`.${Cc("image")}`);
      return {
        width: J,
        height: ae,
        imageRadio: H / A,
        rootRadio: ae / J,
        zoom: F(e.zoom)
      };
    }
    function j(U) {
      const { zoom: J, imageRadio: ae, rootRadio: A, width: H, height: ee } = Y(U);
      if (!ae)
        return 0;
      const ke = ae > A ? ee / ae : H;
      return Math.max(0, (J * ke - H) / 2) / J;
    }
    function R(U) {
      const { zoom: J, imageRadio: ae, rootRadio: A, width: H, height: ee } = Y(U);
      if (!ae)
        return 0;
      const ke = ae > A ? ee : H * ae;
      return Math.max(0, (J * ke - ee) / 2) / J;
    }
    function K(U) {
      if (!$.prev)
        return;
      y(U);
      const J = U.currentTarget;
      if (d.value > Di && window.clearTimeout(w), o.value > ur) {
        const ae = j(J), A = R(J);
        t.value = Mn(t.value + u.value, -ae, ae), r.value = Mn(r.value + c.value, -A, A);
      }
      $.prev = J;
    }
    function W() {
      if (o.value > ur) {
        z(), setTimeout(() => S(e["onUpdate:show"], !1), Pc);
        return;
      }
      S(e["onUpdate:show"], !1);
    }
    function ce(U) {
      b.value && Ne(U);
    }
    function Q(U) {
      var J;
      (J = s.value) == null || J.prev(U);
    }
    function pe(U) {
      var J;
      (J = s.value) == null || J.next(U);
    }
    function ye(U, J) {
      var ae;
      (ae = s.value) == null || ae.to(U, J);
    }
    function ie(U) {
      U <= ur ? z() : O(U);
    }
    return {
      swipeRef: s,
      isPreventDefault: b,
      show: n,
      scale: o,
      translateX: t,
      translateY: r,
      canSwipe: l,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: Cc,
      classes: wC,
      toNumber: F,
      handleTouchstart: M,
      handleTouchmove: K,
      handleTouchend: D,
      handleTouchcancel: E,
      close: W,
      prev: Q,
      next: pe,
      to: ye,
      zoom: ie
    };
  }
});
vv.render = OC;
var _t = vv, TC = Object.defineProperty, EC = Object.defineProperties, DC = Object.getOwnPropertyDescriptors, zc = Object.getOwnPropertySymbols, BC = Object.prototype.hasOwnProperty, IC = Object.prototype.propertyIsEnumerable, Oc = (e, n, o) => n in e ? TC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, cr = (e, n) => {
  for (var o in n || (n = {}))
    BC.call(n, o) && Oc(e, o, n[o]);
  if (zc)
    for (var o of zc(n))
      IC.call(n, o) && Oc(e, o, n[o]);
  return e;
}, Tc = (e, n) => EC(e, DC(n));
let bo, Tt = {};
function MC(e = {}) {
  return hn(e) ? Tc(cr({}, Tt), { images: [e] }) : Ge(e) ? Tc(cr({}, Tt), { images: e }) : cr(cr({}, Tt), e);
}
function Ao(e) {
  if (!oo())
    return;
  Ao.close();
  const n = MC(e), o = Je(n);
  o.teleport = "body", bo = o;
  const { unmountInstance: t } = ht(_t, o, {
    onClose: () => S(o.onClose),
    onClosed: () => {
      S(o.onClosed), t(), bo === o && (bo = null);
    },
    onRouteChange: () => {
      t(), bo === o && (bo = null);
    },
    "onUpdate:show": (r) => {
      o.show = r;
    }
  });
  o.show = !0;
}
Ao.close = () => {
  if (bo != null) {
    const e = bo;
    bo = null, Ke().then(() => {
      e.show = !1;
    });
  }
};
Ao.setDefaultOptions = (e) => {
  Tt = e;
};
Ao.resetDefaultOptions = () => {
  Tt = {};
};
Ao.Component = _t;
te(_t);
te(_t, Ao);
ue(Ao, pv);
const K5 = _t;
var Ft = Ao;
const mv = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function AC() {
  const { bindChildren: e, length: n, childProviders: o } = bn(
    mv
  );
  return {
    length: n,
    indexAnchors: o,
    bindIndexAnchors: e
  };
}
function NC() {
  const { parentProvider: e, index: n, bindParent: o } = gn(
    mv
  );
  return o || Vn("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: o
  };
}
const hv = {
  index: [Number, String]
}, { name: VC, n: LC, classes: RC } = x("index-anchor");
function FC(e, n) {
  return h(), Oe(vt(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: fe(() => [
      I(
        "div",
        He({
          class: e.n()
        }, e.$attrs),
        [
          N(e.$slots, "default", {}, () => [
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
const gv = _({
  name: VC,
  components: { VarSticky: ct },
  inheritAttrs: !1,
  props: hv,
  setup(e) {
    const n = k(!1), o = B(() => e.index), t = k(null), { index: r, indexBar: a, bindIndexBar: i } = NC(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: c, zIndex: d } = a;
    i({
      index: r,
      name: o,
      setDisabled: y,
      getOffsetTop: v
    });
    function v() {
      return t.value ? t.value.$el ? t.value.$el.offsetTop : t.value.offsetTop : 0;
    }
    function y(m) {
      n.value = m;
    }
    return {
      n: LC,
      classes: RC,
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
gv.render = FC;
var La = gv;
te(La);
ue(La, hv);
const q5 = La;
var $l = La;
const bv = {
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
var Ec = (e, n, o) => new Promise((t, r) => {
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
const { name: UC, n: HC, classes: YC } = x("index-bar"), jC = ["onClick"];
function WC(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n()),
      ref: "barEl"
    },
    [
      N(e.$slots, "default"),
      I(
        "ul",
        {
          class: p(e.n("anchor-list")),
          style: q({ zIndex: e.toNumber(e.zIndex) + 2, display: e.hideList ? "none" : "block" })
        },
        [
          (h(!0), P(
            Re,
            null,
            _e(e.anchorNameList, (o) => (h(), P("li", {
              key: o,
              class: p(e.classes(e.n("anchor-item"), [e.active === o, e.n("anchor-item--active")])),
              style: q({ color: e.active === o && e.highlightColor ? e.highlightColor : void 0 }),
              onClick: (t) => e.anchorClick({ anchorName: o, manualCall: !0 })
            }, [
              N(e.$slots, "anchor-name", { anchorName: o }, () => [
                De(
                  re(o),
                  1
                  /* TEXT */
                )
              ])
            ], 14, jC))),
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
const yv = _({
  name: UC,
  props: bv,
  setup(e) {
    const n = k(""), o = k(null), t = k([]), r = k(), a = B(() => e.sticky), i = B(() => e.stickyCssMode), l = B(() => en(e.stickyOffsetTop)), s = B(() => e.zIndex), { length: u, indexAnchors: c, bindIndexAnchors: d } = AC();
    let f = null, v = !1;
    const y = {
      active: r,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    de(
      () => u.value,
      () => Ec(this, null, function* () {
        yield kn(), t.value = c.filter(({ name: z }) => z.value != null).map(({ name: z }) => z.value);
      })
    ), fn(g), Ur($), pt(() => {
      v = !0, $();
    }), To(() => {
      !v || r.value === void 0 || (w({
        anchorName: r.value,
        options: { event: !1 }
      }), v = !1);
    }), d(y);
    function m(z, L) {
      const T = tt(z) ? z.name.value : z;
      T === r.value || T === void 0 || (r.value = T, (L == null ? void 0 : L.event) !== !1 && S(e.onChange, T));
    }
    function b() {
      const { top: z } = an(f), { top: L } = an(o.value);
      return Ro(f) - z + L;
    }
    function C() {
      const z = Ro(f), L = f === window ? document.body.scrollHeight : f.scrollHeight, T = b();
      c.forEach((E, D) => {
        const M = E.getOffsetTop(), Y = z - M + l.value - T, j = D === c.length - 1 ? L : c[D + 1].getOffsetTop() - E.getOffsetTop();
        E.setDisabled(!0), Y >= 0 && Y < j && n.value === "" && (E.setDisabled(!1), m(E));
      });
    }
    function w(z) {
      return Ec(this, arguments, function* ({ anchorName: L, manualCall: T = !1, options: E }) {
        if (T && S(e.onClick, L), L === r.value && !v)
          return;
        const D = c.find(({ name: K }) => L === K.value);
        if (!D)
          return;
        const M = b(), j = D.getOffsetTop() - l.value + M, R = rs(f);
        n.value = L, m(L, E), yield Bt(f, {
          left: R,
          top: j,
          animation: sf,
          duration: F(e.duration)
        }), yield kn(), n.value = "";
      });
    }
    function g() {
      f = Po(o.value), f.addEventListener("scroll", C);
    }
    function $() {
      f && f.removeEventListener("scroll", C);
    }
    function O(z, L) {
      Dt(() => w({ anchorName: z, options: L }));
    }
    return {
      barEl: o,
      active: r,
      zIndex: s,
      anchorNameList: t,
      n: HC,
      classes: YC,
      toNumber: F,
      scrollTo: O,
      anchorClick: w
    };
  }
});
yv.render = WC;
var Ra = yv;
te(Ra);
ue(Ra, bv);
const G5 = Ra;
var wl = Ra, KC = Object.defineProperty, Dc = Object.getOwnPropertySymbols, qC = Object.prototype.hasOwnProperty, GC = Object.prototype.propertyIsEnumerable, Bc = (e, n, o) => n in e ? KC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, XC = (e, n) => {
  for (var o in n || (n = {}))
    qC.call(n, o) && Bc(e, o, n[o]);
  if (Dc)
    for (var o of Dc(n))
      GC.call(n, o) && Bc(e, o, n[o]);
  return e;
};
const kv = XC({
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
  onFocus: V(),
  onBlur: V(),
  onInput: V(),
  onChange: V(),
  onClear: V(),
  "onUpdate:modelValue": V()
}, Be(Ia, [
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
])), { name: ZC, n: JC, classes: QC } = x("input"), _C = ["placeholder", "enterkeyhint"], xC = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], eS = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function nS(e, n) {
  const o = ne("var-field-decorator"), t = ne("var-form-details");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[13] || (n[13] = (...r) => e.handleMousedown && e.handleMousedown(...r))
    },
    [
      G(
        o,
        $o(Kt({
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
            N(e.$slots, "clear-icon", { clear: r })
          ]),
          "append-icon": fe(() => [
            N(e.$slots, "append-icon")
          ]),
          default: fe(() => [
            e.normalizedType === "password" ? (h(), P("input", {
              key: 0,
              tabindex: "-1",
              class: p(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: q({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, _C)) : X("v-if", !0),
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
              inputmode: e.type === "number" ? "numeric" : void 0,
              style: q({
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
            }, null, 46, xC)) : (h(), P("input", {
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
              inputmode: e.type === "number" ? "numeric" : void 0,
              style: q({
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
            }, null, 46, eS))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: fe(() => [
              N(e.$slots, "prepend-icon")
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
        onMousedown: n[12] || (n[12] = Nn(() => {
        }, ["stop"]))
      }, Et({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: fe(() => [
            N(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"])
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const $v = _({
  name: ZC,
  components: {
    VarFormDetails: En,
    VarFieldDecorator: Vt
  },
  props: kv,
  setup(e) {
    const n = Od(), o = k(null), t = k(!1), r = k(!1), { bindForm: a, form: i } = jn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Yn(), d = B(() => e.disabled || e.readonly ? "" : "text"), f = B(() => e.type === "number" ? "text" : e.type), v = B(() => {
      const { maxlength: Q, modelValue: pe } = e;
      return Q ? Qn(pe) ? `0 / ${Q}` : `${String(pe).length}/${Q}` : "";
    }), y = B(() => {
      const { hint: Q, blurColor: pe, focusColor: ye } = e;
      if (!Q)
        return l.value ? "var(--field-decorator-error-color)" : t.value ? ye || "var(--field-decorator-focus-color)" : pe || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    S(a, {
      reset: R,
      validate: K,
      resetValidation: c
    }), fn(() => {
      e.autofocus && W();
    });
    function b(Q) {
      Ke(() => {
        const { validateTrigger: pe, rules: ye, modelValue: ie } = e;
        s(pe, Q, ye, ie);
      });
    }
    function C(Q) {
      t.value = !0, S(e.onFocus, Q), b("onFocus");
    }
    function w(Q) {
      t.value = !1, S(e.onBlur, Q), b("onBlur");
    }
    function g(Q) {
      const pe = Q.target;
      let { value: ye } = pe;
      e.type === "number" && (ye = D(ye));
      const ie = Y(M(ye));
      return ie === e.modelValue && (pe.value = ie), ie;
    }
    function $() {
      r.value = !0;
    }
    function O(Q) {
      r.value && (r.value = !1, Q.target.dispatchEvent(new Event("input")));
    }
    function z(Q) {
      if (r.value)
        return;
      const pe = g(Q);
      S(e["onUpdate:modelValue"], pe), S(e.onInput, pe, Q), b("onInput");
    }
    function L(Q) {
      const pe = g(Q);
      S(e.onChange, pe, Q), b("onChange");
    }
    function T() {
      const { disabled: Q, readonly: pe, clearable: ye, onClear: ie } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || Q || pe || !ye || (S(e["onUpdate:modelValue"], ""), S(ie, ""), b("onClear"));
    }
    function E(Q) {
      const { disabled: pe, onClick: ye } = e;
      i != null && i.disabled.value || pe || (S(ye, Q), b("onClick"));
    }
    function D(Q) {
      const pe = Q.indexOf("-"), ye = Q.indexOf(".");
      return pe > -1 && (Q = pe === 0 ? "-" + Q.replace(/-/g, "") : Q.replace(/-/g, "")), ye > -1 && (Q = Q.slice(0, ye + 1) + Q.slice(ye).replace(/\./g, "")), Q.replace(/[^-0-9.]/g, "");
    }
    function M(Q) {
      return e.modelModifiers.trim ? Q.trim() : Q;
    }
    function Y(Q) {
      return e.maxlength ? Q.slice(0, F(e.maxlength)) : Q;
    }
    function j(Q) {
      const { disabled: pe } = e;
      i != null && i.disabled.value || pe || Q.target === o.value || (W(), Ne(Q));
    }
    function R() {
      S(e["onUpdate:modelValue"], ""), c();
    }
    function K() {
      return u(e.rules, e.modelValue);
    }
    function W() {
      var Q;
      (Q = o.value) == null || Q.focus();
    }
    function ce() {
      o.value.blur();
    }
    return {
      el: o,
      id: n,
      isFocusing: t,
      isComposing: r,
      errorMessage: l,
      placeholderColor: y,
      normalizedType: f,
      cursor: d,
      maxlengthText: v,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: JC,
      classes: QC,
      isEmpty: Qn,
      handleFocus: C,
      handleBlur: w,
      handleInput: z,
      handleChange: L,
      handleClear: T,
      handleClick: E,
      handleCompositionStart: $,
      handleCompositionEnd: O,
      handleMousedown: j,
      validate: K,
      resetValidation: c,
      reset: R,
      focus: W,
      blur: ce
    };
  }
});
$v.render = nS;
var Fa = $v;
te(Fa);
ue(Fa, kv);
const X5 = Fa;
var Vr = Fa;
const wv = {
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
}, { name: oS, n: tS, classes: rS } = x("link");
function aS(e, n) {
  return h(), Oe(vt(e.tag), He(e.linkProps, {
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
      N(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const Cv = _({
  name: oS,
  props: wv,
  setup(e) {
    const n = k(!1), o = B(() => {
      const { disabled: a, href: i, to: l } = e;
      return a ? "span" : i ? "a" : l ? "router-link" : "a";
    }), t = B(() => {
      const { disabled: a, href: i, target: l, to: s, replace: u, rel: c } = e;
      return a ? {} : i ? { href: i, target: l, rel: c } : s ? { to: s, target: l, replace: u } : {};
    });
    function r(a) {
      e.disabled || S(e.onClick, a);
    }
    return {
      tag: o,
      linkProps: t,
      isFocusing: n,
      inMobile: kr,
      n: tS,
      classes: rS,
      handleClick: r,
      toSizeUnit: ze
    };
  }
});
Cv.render = aS;
var Ua = Cv;
te(Ua);
ue(Ua, wv);
const Z5 = Ua;
var Cl = Ua;
const Sv = {
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
}, Pv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function iS() {
  const { bindChildren: e, childProviders: n, length: o } = bn(
    Pv
  );
  return {
    length: o,
    tabItemList: n,
    bindTabItem: e
  };
}
const zv = Symbol("TAB_ITEM_BIND_LIST_KEY");
function lS() {
  const { parentProvider: e, bindParent: n, index: o } = gn(
    Pv
  );
  return n || Vn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: o,
    tabsItems: e,
    bindTabsItems: n
  };
}
function sS() {
  const { childProviders: e, bindChildren: n, length: o } = bn(zv);
  return {
    length: o,
    lists: e,
    bindLists: n
  };
}
function uS() {
  const { parentProvider: e, bindParent: n, index: o } = gn(zv);
  return {
    index: o,
    tabItem: e,
    bindTabItem: n
  };
}
var cS = (e, n, o) => new Promise((t, r) => {
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
const { name: dS, n: fS, classes: pS } = x("list");
function vS(e, n) {
  const o = ne("var-loading"), t = Ye("ripple");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [
      N(e.$slots, "default"),
      e.loading ? N(e.$slots, "loading", { key: 0 }, () => {
        var r;
        return [
          I(
            "div",
            {
              class: p(e.n("loading"))
            },
            [
              I(
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
      e.finished ? N(e.$slots, "finished", { key: 1 }, () => {
        var r;
        return [
          I(
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
      e.error ? N(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          Ie((h(), P(
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
      I(
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
const Ov = _({
  name: dS,
  directives: { Ripple: tn },
  components: { VarLoading: it },
  props: Sv,
  setup(e) {
    const n = k(null), o = k(null), { tabItem: t, bindTabItem: r } = uS(), { t: a } = ro();
    let i;
    S(r, {}), t && de(() => t.current.value, c), de(() => [e.loading, e.error, e.finished], c), fn(() => {
      i = Po(n.value), i.addEventListener("scroll", c), e.immediateCheck && c();
    }), qt(u);
    function l() {
      S(e["onUpdate:error"], !1), S(e["onUpdate:loading"], !0), S(e.onLoad);
    }
    function s() {
      const { bottom: d } = an(i), { bottom: f } = an(o.value);
      return Math.floor(f) - en(e.offset) <= d;
    }
    function u() {
      i && i.removeEventListener("scroll", c);
    }
    function c() {
      return cS(this, null, function* () {
        yield Ke(), !(e.loading || e.finished || e.error || (t == null ? void 0 : t.current.value) === !1 || !s()) && l();
      });
    }
    return {
      listEl: n,
      detectorEl: o,
      pt: a,
      t: rn,
      isNumber: On,
      load: l,
      check: c,
      n: fS,
      classes: pS
    };
  }
});
Ov.render = vS;
var Ha = Ov;
te(Ha);
ue(Ha, Sv);
const J5 = Ha;
var Sl = Ha;
const mS = {
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
  top: [Number, String]
}, {
  name: hS,
  classes: gS,
  n: Ic
} = x("loading-bar");
var bS = _({
  name: hS,
  props: mS,
  setup(e) {
    return () => G("div", {
      class: gS(Ic(), [e.error, Ic("--error")]),
      style: {
        zIndex: An.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: ze(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: ze(e.top)
      }
    }, null);
  }
});
let Tv, Ev, Ya, Dv, Mc, Bv = {};
const yS = {
  value: 0,
  opacity: 0,
  error: !1
}, mn = Je(yS), kS = (e) => {
  Object.assign(mn, e), Bv = e;
}, $S = () => {
  Object.keys(Bv).forEach((e) => {
    mn[e] !== void 0 && (mn[e] = void 0);
  });
}, Iv = () => {
  Mc || (Mc = !0, ht(bS, mn));
}, Bs = () => {
  Tv = window.setTimeout(() => {
    if (mn.value >= 95)
      return;
    let e = Math.random();
    mn.value < 70 && (e = Math.round(5 * Math.random())), mn.value += e, Bs();
  }, 200);
}, Is = () => {
  window.clearTimeout(Ev), window.clearTimeout(Tv), window.clearTimeout(Ya), window.clearTimeout(Dv);
}, wS = () => {
  Is(), mn.error = !1, mn.value = 0, Iv(), Ya = window.setTimeout(() => {
    mn.opacity = 1;
  }, 200), Bs();
}, Mv = () => {
  Is(), mn.value = 100, Ya = window.setTimeout(() => {
    mn.opacity = 0, Ev = window.setTimeout(() => {
      mn.error = !1;
    }, 250);
  }, 300);
}, CS = () => {
  Is(), mn.error = !0, mn.value === 100 && (mn.value = 0), Iv(), Ya = window.setTimeout(() => {
    mn.opacity = 1;
  }, 200), Bs(), Dv = window.setTimeout(Mv, 300);
}, Av = {
  start: wS,
  finish: Mv,
  error: CS,
  setDefaultOptions: kS,
  resetDefaultOptions: $S
}, Q5 = Av;
var Pl = Av;
const Nv = {
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
var SS = Object.defineProperty, PS = Object.defineProperties, zS = Object.getOwnPropertyDescriptors, Ac = Object.getOwnPropertySymbols, OS = Object.prototype.hasOwnProperty, TS = Object.prototype.propertyIsEnumerable, Nc = (e, n, o) => n in e ? SS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ES = (e, n) => {
  for (var o in n || (n = {}))
    OS.call(n, o) && Nc(e, o, n[o]);
  if (Ac)
    for (var o of Ac(n))
      TS.call(n, o) && Nc(e, o, n[o]);
  return e;
}, DS = (e, n) => PS(e, zS(n));
const { name: BS, n: IS } = x("locale-provider"), MS = _({
  name: BS,
  props: Nv,
  setup(e, { slots: n }) {
    const o = B(
      () => {
        var r;
        return Object.entries((r = e.messages) != null ? r : {}).reduce((a, [i, l]) => (a[i] = DS(ES({}, l), {
          lang: i
        }), a), {});
      }
    );
    eb({
      t
    });
    function t(r) {
      if ($r(o.value, e.locale) && $r(o.value[e.locale], r))
        return o.value[e.locale][r];
    }
    return () => Hr(
      e.tag,
      {
        class: IS()
      },
      S(n.default)
    );
  }
});
var ja = MS;
te(ja);
ue(ja, Nv);
const _5 = ja;
var zl = ja;
const Ms = {
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
}, { name: AS, n: NS, classes: VS } = x("menu");
function LS(e, n) {
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
      N(e.$slots, "default"),
      (h(), Oe(no, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        G(Qe, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: fe(() => [
            Ie(I(
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
                onClick: n[0] || (n[0] = Nn(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                N(e.$slots, "menu")
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
const Vv = _({
  name: AS,
  props: Ms,
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
      open: y,
      // expose
      close: m,
      // expose
      resize: b
    } = Qp(e);
    return {
      popover: o,
      host: t,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: dn,
      toSizeUnit: ze,
      n: NS,
      classes: VS,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handlePopoverClose: f,
      handleClosed: v,
      resize: b,
      open: y,
      close: m
    };
  }
});
Vv.render = LS;
var Wa = Vv;
te(Wa);
ue(Wa, Ms);
const x5 = Wa;
var Ut = Wa;
const Lv = Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function RS() {
  const { length: e, childProviders: n, bindChildren: o } = bn(
    Lv
  );
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: o
  };
}
function FS() {
  const { index: e, parentProvider: n, bindParent: o } = gn(
    Lv
  );
  return o || Vn("MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: o
  };
}
const Rv = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  }
}, { name: US, n: HS, classes: YS } = x("menu-option"), jS = ["tabindex"];
function WS(e, n) {
  const o = ne("var-checkbox"), t = ne("var-hover-overlay"), r = Ye("ripple"), a = Ye("hover");
  return Ie((h(), P("div", {
    ref: "root",
    class: p(
      e.classes(e.n(), e.n("$--box"), e.n(`--${e.size}`), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])
    ),
    tabindex: e.disabled ? void 0 : "-1",
    onClick: n[2] || (n[2] = (...i) => e.handleClick && e.handleClick(...i)),
    onFocus: n[3] || (n[3] = (i) => e.isFocusing = !0),
    onBlur: n[4] || (n[4] = (i) => e.isFocusing = !1)
  }, [
    I(
      "div",
      {
        class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")]))
      },
      null,
      2
      /* CLASS */
    ),
    e.multiple ? (h(), Oe(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (i) => e.optionSelected = i),
      disabled: e.disabled,
      onClick: n[1] || (n[1] = Nn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "disabled", "onChange"])) : X("v-if", !0),
    N(e.$slots, "default", {}, () => [
      I(
        "div",
        {
          class: p(e.classes(e.n("text"), e.n("$--ellipsis")))
        },
        re(e.label),
        3
        /* TEXT, CLASS */
      )
    ]),
    G(t, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 42, jS)), [
    [r, { disabled: e.disabled || !e.ripple }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const Fv = _({
  name: US,
  directives: { Ripple: tn, Hover: Tn },
  components: {
    VarCheckbox: lt,
    VarHoverOverlay: Ln
  },
  props: Rv,
  setup(e) {
    const n = k(), o = k(!1), t = k(!1), r = B(() => t.value), a = B(() => e.label), i = B(() => e.value), { menuSelect: l, bindMenuSelect: s } = FS(), { size: u, multiple: c, onSelect: d, computeLabel: f } = l, { hovering: v, handleHovering: y } = Jn(), m = {
      label: a,
      value: i,
      selected: r,
      sync: $
    };
    de([() => e.label, () => e.value], f), s(m), We(() => window, "keydown", C), We(() => window, "keyup", w);
    function b() {
      e.disabled || g();
    }
    function C(O) {
      o.value && ((O.key === " " || O.key === "Enter") && Ne(O), O.key === "Enter" && n.value.click());
    }
    function w(O) {
      o.value && O.key === " " && (Ne(O), n.value.click());
    }
    function g() {
      c.value && (t.value = !t.value), d(m);
    }
    function $(O) {
      t.value = O;
    }
    return {
      root: n,
      optionSelected: t,
      size: u,
      multiple: c,
      hovering: v,
      isFocusing: o,
      n: HS,
      classes: YS,
      handleHovering: y,
      handleClick: b,
      handleSelect: g
    };
  }
});
Fv.render = WS;
var Ka = Fv;
te(Ka);
ue(Ka, Rv);
const eT = Ka;
var Lr = Ka, KS = Object.defineProperty, Vc = Object.getOwnPropertySymbols, qS = Object.prototype.hasOwnProperty, GS = Object.prototype.propertyIsEnumerable, Lc = (e, n, o) => n in e ? KS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, XS = (e, n) => {
  for (var o in n || (n = {}))
    qS.call(n, o) && Lc(e, o, n[o]);
  if (Vc)
    for (var o of Vc(n))
      GS.call(n, o) && Lc(e, o, n[o]);
  return e;
};
const Uv = XS({
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: void 0
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
}, Be(Ms, [
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
function Hv(e) {
  const {
    multiple: n,
    modelValue: o,
    optionProviders: t,
    optionProvidersLength: r
  } = e, a = k(""), i = k([]);
  de(o, d, { deep: !0 }), de(r, d);
  function l() {
    const f = n(), v = o();
    f && (i.value = v.map(s)), !f && !Qn(v) && (a.value = s(v)), !f && Qn(v) && (a.value = "");
  }
  function s(f) {
    var v;
    const y = t();
    let m = y.find(({ value: b }) => b.value === f);
    return m || (m = y.find(({ label: b }) => b.value === f)), (v = m == null ? void 0 : m.label.value) != null ? v : "";
  }
  function u({ value: f, label: v }) {
    var y;
    return (y = f.value) != null ? y : v.value;
  }
  function c(f) {
    const v = n(), y = t();
    return v ? y.filter(({ selected: m }) => m.value).map(u) : u(f);
  }
  function d() {
    const f = n(), v = o(), y = t();
    f ? y.forEach((m) => m.sync(v.includes(u(m)))) : y.forEach((m) => m.sync(v === u(m))), l();
  }
  return {
    label: a,
    labels: i,
    computeLabel: l,
    getSelectedValue: c
  };
}
const { name: ZS, n: JS, classes: QS } = x("menu-select");
function _S(e, n) {
  const o = ne("var-menu");
  return h(), Oe(o, {
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
    menu: fe(() => [
      I(
        "div",
        {
          ref: "menuOptionsRef",
          class: p(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
        },
        [
          N(e.$slots, "options")
        ],
        2
        /* CLASS */
      )
    ]),
    default: fe(() => [
      N(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "disabled", "trigger", "reference", "placement", "strategy", "offset-x", "offset-y", "teleport", "same-width", "elevation", "popover-class", "close-on-click-reference", "show", "onOpen", "onOpened", "onClose", "onClosed", "onClickOutside"]);
}
const Yv = _({
  name: ZS,
  components: { VarMenu: Ut },
  props: Uv,
  setup(e) {
    const n = k(null), o = k(null), t = Zn(e, "show"), { menuOptions: r, length: a, bindMenuOptions: i } = RS(), { computeLabel: l, getSelectedValue: s } = Hv({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => r,
      optionProvidersLength: () => a.value
    }), u = {
      size: B(() => e.size),
      multiple: B(() => e.multiple),
      computeLabel: l,
      onSelect: c
    };
    i(u), We(() => window, "keydown", d);
    function c(m) {
      const { multiple: b, closeOnSelect: C } = e;
      S(e["onUpdate:modelValue"], s(m)), !b && C && (n.value.$el.focus(), v());
    }
    function d(m) {
      if (e.disabled || !t.value)
        return;
      const { key: b } = m;
      if (["Escape", "ArrowDown", "ArrowUp"].includes(b) && Ne(m), b === "Escape") {
        n.value.$el.focus(), v();
        return;
      }
      (b === "ArrowDown" || b === "ArrowUp") && Fd(n.value.$el, o.value, b);
    }
    function f() {
      var m;
      (m = n.value) == null || m.open();
    }
    function v() {
      var m;
      (m = n.value) == null || m.close();
    }
    function y() {
      var m;
      (m = n.value) == null || m.resize();
    }
    return {
      show: t,
      menu: n,
      menuOptionsRef: o,
      n: JS,
      classes: QS,
      formatElevation: dn,
      open: f,
      close: v,
      resize: y
    };
  }
});
Yv.render = _S;
var qa = Yv;
te(qa);
ue(qa, Uv);
const nT = qa;
var Rr = qa;
const jv = Symbol("SELECT_BIND_OPTION_KEY");
function xS() {
  const { length: e, childProviders: n, bindChildren: o } = bn(jv);
  return {
    length: e,
    options: n,
    bindOptions: o
  };
}
function e6() {
  const { index: e, parentProvider: n, bindParent: o } = gn(jv);
  return o || Vn("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: o
  };
}
const Wv = {
  label: {},
  value: {},
  disabled: Boolean
}, { name: n6, n: o6, classes: t6 } = x("option"), r6 = ["tabindex"];
function a6(e, n) {
  const o = ne("var-checkbox"), t = ne("var-hover-overlay"), r = Ye("ripple"), a = Ye("hover");
  return Ie((h(), P("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
    style: q({
      color: e.optionSelected ? e.focusColor : void 0
    }),
    tabindex: e.disabled ? void 0 : "-1",
    onFocus: n[2] || (n[2] = (i) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (i) => e.isFocusing = !1),
    onClick: n[4] || (n[4] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    I(
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
    e.multiple ? (h(), Oe(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (i) => e.optionSelected = i),
      "checked-color": e.focusColor,
      disabled: e.disabled,
      onClick: n[1] || (n[1] = Nn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "checked-color", "disabled", "onChange"])) : X("v-if", !0),
    N(e.$slots, "default", { selected: e.optionSelected }, () => [
      I(
        "div",
        {
          class: p(e.classes(e.n("text"), e.n("$--ellipsis")))
        },
        re(e.label),
        3
        /* TEXT, CLASS */
      )
    ]),
    G(t, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 46, r6)), [
    [r, { disabled: e.disabled }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const Kv = _({
  name: n6,
  directives: { Ripple: tn, Hover: Tn },
  components: {
    VarCheckbox: lt,
    VarHoverOverlay: Ln
  },
  props: Wv,
  setup(e) {
    const n = k(), o = k(!1), t = k(!1), r = B(() => t.value), a = B(() => e.label), i = B(() => e.value), { select: l, bindSelect: s } = e6(), { multiple: u, focusColor: c, onSelect: d, computeLabel: f } = l, { hovering: v, handleHovering: y } = Jn(), m = {
      label: a,
      value: i,
      selected: r,
      sync: $
    };
    de([() => e.label, () => e.value], f), s(m), We(() => window, "keydown", C), We(() => window, "keyup", w);
    function b() {
      e.disabled || g();
    }
    function C(O) {
      o.value && ((O.key === " " || O.key === "Enter") && Ne(O), O.key === "Enter" && n.value.click());
    }
    function w(O) {
      o.value && O.key === " " && (Ne(O), n.value.click());
    }
    function g() {
      u.value && (t.value = !t.value), d(m);
    }
    function $(O) {
      t.value = O;
    }
    return {
      root: n,
      optionSelected: t,
      multiple: u,
      focusColor: c,
      hovering: v,
      isFocusing: o,
      n: o6,
      classes: t6,
      handleHovering: y,
      handleClick: b,
      handleSelect: g
    };
  }
});
Kv.render = a6;
var Ga = Kv;
te(Ga);
ue(Ga, Wv);
const oT = Ga;
var Ol = Ga;
const qv = {
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
  name: i6,
  n: Rc
} = x("overlay");
var Xa = _({
  name: i6,
  inheritAttrs: !1,
  props: qv,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const {
      zIndex: t
    } = Xt(() => e.show, 1), {
      onStackTop: r
    } = ss(() => e.show, t), {
      disabled: a
    } = Go();
    Gt(() => e.show, () => e.lockScroll), We(() => window, "keydown", i);
    function i(c) {
      !r() || c.key !== "Escape" || !e.show || (S(e.onKeyEscape), e.closeOnKeyEscape && (Ne(c), S(e["onUpdate:show"], !1)));
    }
    function l() {
      S(e.onClick), S(e["onUpdate:show"], !1);
    }
    function s() {
      return G("div", He({
        class: Rc(),
        style: {
          zIndex: t.value
        }
      }, o, {
        onClick: l
      }), [S(n.default)]);
    }
    function u() {
      return G(Qe, {
        name: Rc("--fade")
      }, {
        default: () => [e.show && s()]
      });
    }
    return () => {
      const {
        teleport: c
      } = e;
      return c ? G(no, {
        to: c,
        disabled: a.value
      }, {
        default: () => [u()]
      }) : u();
    };
  }
});
te(Xa);
ue(Xa, qv);
const tT = Xa;
var Tl = Xa;
const Gv = {
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
}, { name: l6, n: s6, classes: u6 } = x("pagination"), c6 = ["item-mode", "onClick"];
function d6(e, n) {
  const o = ne("var-icon"), t = ne("var-input"), r = ne("var-menu-option"), a = ne("var-menu-select"), i = Ye("ripple");
  return h(), P(
    "ul",
    {
      class: p(e.n())
    },
    [
      Ie((h(), P(
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
          N(e.$slots, "prev", {}, () => [
            G(o, { name: "chevron-left" })
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
          G(t, {
            "var-pagination-cover": "",
            hint: !1,
            disabled: e.disabled,
            modelValue: e.simpleCurrentValue,
            "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
            onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
            onKeydown: n[3] || (n[3] = Ls((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
          }, null, 8, ["disabled", "modelValue"]),
          I("span", null, [
            De(
              " / " + re(e.pageCount) + " ",
              1
              /* TEXT */
            ),
            I(
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
        Re,
        { key: 1 },
        _e(e.pageList, (l, s) => Ie((h(), P("li", {
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
        ], 10, c6)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Ie((h(), P(
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
          N(e.$slots, "next", {}, () => [
            G(o, { name: "chevron-right" })
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
          G(a, {
            placement: "cover-top",
            disabled: e.disabled,
            modelValue: e.size,
            "onUpdate:modelValue": n[5] || (n[5] = (l) => e.size = l)
          }, {
            options: fe(() => [
              (h(!0), P(
                Re,
                null,
                _e(e.sizeOption, (l, s) => (h(), Oe(r, {
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
              I(
                "div",
                {
                  class: p(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")]))
                },
                [
                  I(
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
      e.showQuickJumper && !e.simple ? (h(), P(
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
            onKeydown: n[8] || (n[8] = Ls((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : X("v-if", !0),
      e.totalText ? (h(), P(
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
const Xv = _({
  name: l6,
  components: {
    VarMenuSelect: Rr,
    VarMenuOption: Lr,
    VarIcon: Ze,
    VarInput: Vr
  },
  directives: { Ripple: tn },
  props: Gv,
  setup(e) {
    const n = k(""), o = k("1"), t = k(!1), r = k(!1), a = k(F(e.current) || 1), i = k(F(e.size) || 10), l = k([]), s = B(() => Math.ceil(e.maxPagerCount / 2)), u = B(() => Math.ceil(F(e.total) / F(i.value))), c = B(() => {
      const g = i.value * (a.value - 1) + 1, $ = Math.min(i.value * a.value, F(e.total));
      return [g, $];
    }), d = B(() => e.showTotal ? e.showTotal(F(e.total), c.value) : ""), { t: f } = ro();
    de([() => e.current, () => e.size], ([g, $]) => {
      a.value = F(g) || 1, i.value = F($ || 10);
    }), de(
      [a, i, u],
      ([g, $, O], [z, L]) => {
        let T = [];
        const { maxPagerCount: E, total: D, onChange: M } = e, Y = Math.ceil(F(D) / F(L)), j = O - (E - s.value) - 1;
        if (o.value = `${g}`, O - 2 > E) {
          if (z === void 0 || O !== Y)
            for (let R = 2; R < E + 2; R++)
              T.push(R);
          if (g <= E && g < j) {
            T = [];
            for (let R = 1; R < E + 1; R++)
              T.push(R + 1);
            t.value = !0, r.value = !1;
          }
          if (g > E && g < j) {
            T = [];
            for (let R = 1; R < E + 1; R++)
              T.push(g + R - s.value);
            t.value = g === 2 && E === 1, r.value = !1;
          }
          if (g >= j) {
            T = [];
            for (let R = 1; R < E + 1; R++)
              T.push(O - (E - R) - 1);
            t.value = !1, r.value = !0;
          }
          T = [1, "...", ...T, "...", O];
        } else
          for (let R = 1; R <= O; R++)
            T.push(R);
        l.value = T, z != null && O > 0 && S(M, g, $), S(e["onUpdate:current"], g), S(e["onUpdate:size"], $);
      },
      {
        immediate: !0
      }
    );
    function v(g, $) {
      return On(g) ? !1 : $ === 1 ? t.value : r.value;
    }
    function y(g, $) {
      return On(g) ? "basic" : $ === 1 ? "head" : "tail";
    }
    function m(g, $) {
      if (!(g === a.value || e.disabled)) {
        if (g === "...") {
          a.value = $ === 1 ? Math.max(a.value - e.maxPagerCount, 1) : Math.min(a.value + e.maxPagerCount, u.value);
          return;
        }
        if (g === "prev") {
          a.value = C(a.value - 1);
          return;
        }
        if (g === "next") {
          a.value = C(a.value + 1);
          return;
        }
        On(g) && (a.value = g);
      }
    }
    function b() {
      const g = C(a.value);
      o.value = String(g), a.value = g;
    }
    function C(g) {
      return g > u.value ? u.value : g < 1 ? 1 : g;
    }
    function w(g, $, O) {
      O.target.blur();
      const z = C(F($));
      o.value = String(z), a.value = z, g === "quick" && (n.value = "");
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
      n: s6,
      classes: u6,
      getMode: y,
      isHideEllipsis: v,
      clickItem: m,
      clickSize: b,
      setPage: w,
      toNumber: F,
      formatElevation: dn
    };
  }
});
Xv.render = d6;
var Za = Xv;
te(Za);
ue(Za, Gv);
const rT = Za;
var El = Za;
const Zv = {
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
}, { name: f6, n: p6, classes: v6 } = x("paper");
function m6(e, n) {
  const o = Ye("ripple");
  return Ie((h(), P(
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
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      N(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: !e.ripple }]
  ]);
}
const Jv = _({
  name: f6,
  directives: { Ripple: tn },
  props: Zv,
  setup(e) {
    function n(o) {
      S(e.onClick, o);
    }
    return {
      n: p6,
      classes: v6,
      formatElevation: dn,
      toSizeUnit: ze,
      handleClick: n
    };
  }
});
Jv.render = m6;
var Ja = Jv;
te(Ja);
ue(Ja, Zv);
const aT = Ja;
var Dl = Ja, h6 = Object.defineProperty, Fc = Object.getOwnPropertySymbols, g6 = Object.prototype.hasOwnProperty, b6 = Object.prototype.propertyIsEnumerable, Uc = (e, n, o) => n in e ? h6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, y6 = (e, n) => {
  for (var o in n || (n = {}))
    g6.call(n, o) && Uc(e, o, n[o]);
  if (Fc)
    for (var o of Fc(n))
      b6.call(n, o) && Uc(e, o, n[o]);
  return e;
};
const Qv = y6({
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
}, Be(gt, [
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
])), { name: k6, n: $6, classes: w6 } = x("picker"), Hc = 300, C6 = 15, Yc = 200, S6 = 1e3;
let jc = 0;
const P6 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], z6 = ["onTransitionend"], O6 = ["onClick"];
function T6(e, n) {
  const o = ne("var-button");
  return h(), Oe(
    vt(e.dynamic ? e.n("$-popup") : e.Transition),
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
      default: fe(() => [
        I(
          "div",
          He({
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
                N(e.$slots, "cancel", {}, () => [
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
                N(e.$slots, "title", {}, () => {
                  var t;
                  return [
                    I(
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
                N(e.$slots, "confirm", {}, () => [
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
            I(
              "div",
              {
                class: p(e.n("columns")),
                style: q({ height: `${e.columnHeight}px` })
              },
              [
                (h(!0), P(
                  Re,
                  null,
                  _e(e.scrollColumns, (t) => (h(), P("div", {
                    class: p(e.n("column")),
                    key: t.id,
                    onTouchstartPassive: (r) => e.handleTouchstart(r, t),
                    onTouchmove: Nn((r) => e.handleTouchmove(r, t), ["prevent"]),
                    onTouchend: (r) => e.handleTouchend(t)
                  }, [
                    I("div", {
                      class: p(e.n("scroller")),
                      ref_for: !0,
                      ref: (r) => e.setScrollEl(r, t),
                      style: q({
                        transform: `translateY(${t.translate}px)`,
                        transitionDuration: `${t.duration}ms`,
                        transitionProperty: t.duration ? "transform" : "none"
                      }),
                      onTransitionend: (r) => e.handleTransitionend(t)
                    }, [
                      (h(!0), P(
                        Re,
                        null,
                        _e(t.column, (r, a) => (h(), P("div", {
                          key: e.getValue(r),
                          class: p(e.classes(e.n("option"), r.className)),
                          style: q({ height: `${e.optionHeight}px` }),
                          onClick: (i) => e.handleClick(t, a)
                        }, [
                          I(
                            "div",
                            {
                              class: p(e.classes(e.n("text"), r.textClassName))
                            },
                            re(r[e.getOptionKey("text")]),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 14, O6))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, z6)
                  ], 42, P6))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                I(
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
                I(
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
const _v = _({
  name: k6,
  components: {
    VarButton: Sn,
    VarPopup: So
  },
  inheritAttrs: !1,
  props: Qv,
  setup(e) {
    const n = Zn(e, "modelValue"), o = k([]), t = B(() => en(e.optionHeight)), r = B(() => en(e.optionCount)), a = B(() => r.value * t.value / 2 - t.value / 2), i = B(() => r.value * t.value), { prevY: l, moveY: s, dragging: u, startTouch: c, moveTouch: d, endTouch: f } = mt(), { t: v } = ro();
    let y = [];
    z(), de(() => e.columns, z, { deep: !0 }), de(() => n.value, z);
    function m(A) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[A];
    }
    function b(A) {
      var H;
      return (H = A[m("value")]) != null ? H : A[m("text")];
    }
    function C(A) {
      y = [...A];
    }
    function w(A) {
      return A.map((H, ee) => {
        const ke = {
          id: jc++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: a.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: H,
          scrollEl: null,
          scrolling: !1
        }, Se = n.value[ee], Le = ke.column.findIndex((je) => Se === b(je));
        return ke.index = Le === -1 ? 0 : Le, j(ke), ke;
      });
    }
    function g(A) {
      const H = [];
      return $(H, A), H;
    }
    function $(A, H, ee = !0) {
      var ke;
      if (H.length) {
        const Se = {
          id: jc++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: a.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: H,
          scrollEl: null,
          scrolling: !1
        };
        if (A.push(Se), ee) {
          const Le = n.value[A.length - 1], je = H.findIndex((Pn) => Le === b(Pn));
          Se.index = je === -1 ? 0 : je;
        }
        j(Se), $(
          A,
          (ke = Se.column[Se.index][m("children")]) != null ? ke : [],
          ee
        );
      }
    }
    function O(A) {
      var H;
      o.value.splice(o.value.indexOf(A) + 1), $(
        o.value,
        (H = A.column[A.index][m("children")]) != null ? H : [],
        !1
      );
    }
    function z() {
      o.value = e.cascade ? g(e.columns) : w(e.columns);
      const { indexes: A } = Y();
      C(A);
    }
    function L(A, H) {
      H.scrollEl = A;
    }
    function T(A) {
      S(e["onUpdate:show"], A);
    }
    function E(A) {
      const H = a.value - A.column.length * t.value, ee = t.value + a.value;
      A.translate = Mn(A.translate, H, ee);
    }
    function D(A, H) {
      const ee = Math.round((a.value - H) / t.value);
      return Nh(ee, A.column);
    }
    function M(A) {
      return A.translate = a.value - A.index * t.value, A.translate;
    }
    function Y() {
      const A = [], H = [], ee = [];
      return o.value.forEach(({ column: ke, index: Se }) => {
        const Le = ke[Se];
        A.push(b(Le)), H.push(Se), ee.push(Le);
      }), {
        values: A,
        indexes: H,
        options: ee
      };
    }
    function j(A, H = 0) {
      M(A), A.duration = H;
    }
    function R(A, H, ee) {
      A.translate += Math.abs(H / ee) / 3e-3 * (H < 0 ? -1 : 1);
    }
    function K(A, H) {
      u.value || (A.index = H, j(A, Yc));
    }
    function W(A, H) {
      H.touching = !0, H.translate = Ci(H.scrollEl), c(A);
    }
    function ce(A, H) {
      if (!H.touching)
        return;
      d(A), H.scrolling = !1, H.duration = 0, H.prevY = l.value, H.translate += s.value, E(H);
      const ee = performance.now();
      ee - H.momentumTime > Hc && (H.momentumTime = ee, H.momentumPrevY = H.translate);
    }
    function Q(A) {
      f(), A.touching = !1, A.prevY = 0;
      const H = A.translate - A.momentumPrevY, ee = performance.now() - A.momentumTime, ke = Math.abs(H) >= C6 && ee <= Hc, Se = A.translate;
      ke && R(A, H, ee), A.index = D(A, A.translate), j(A, ke ? S6 : Yc), A.scrolling = A.translate !== Se, A.scrolling || ie(A);
    }
    function pe(A) {
      A.scrolling = !1, ie(A);
    }
    function ye() {
      const { indexes: A } = Y();
      return A.every((H, ee) => H === y[ee]);
    }
    function ie(A) {
      const { onChange: H, cascade: ee } = e;
      if (ye())
        return;
      ee && O(A);
      const ke = o.value.some((ve) => ve.scrolling), Se = o.value.some((ve) => ve.touching);
      if (ke || Se)
        return;
      const { values: Le, indexes: je, options: Pn } = Y();
      C(je), S(H, Le, je, Pn), n.value = Le;
    }
    function U() {
      if (e.cascade) {
        const A = o.value.find((H) => H.scrolling);
        A && (A.index = D(A, Ci(A.scrollEl)), A.scrolling = !1, j(A), O(A));
      } else
        o.value.forEach((A) => {
          A.index = D(A, Ci(A.scrollEl)), j(A);
        });
    }
    function J() {
      U();
      const { values: A, indexes: H, options: ee } = Y();
      C(H), S(e.onConfirm, A, H, ee);
    }
    function ae() {
      U();
      const { values: A, indexes: H, options: ee } = Y();
      C(H), S(e.onCancel, A, H, ee);
    }
    return {
      optionHeight: t,
      optionCount: r,
      scrollColumns: o,
      columnHeight: i,
      center: a,
      Transition: Qe,
      pt: v,
      t: rn,
      n: $6,
      classes: w6,
      setScrollEl: L,
      getOptionKey: m,
      getValue: b,
      handlePopupUpdateShow: T,
      handleTouchstart: W,
      handleTouchmove: ce,
      handleTouchend: Q,
      handleTransitionend: pe,
      confirm: J,
      cancel: ae,
      handleClick: K
    };
  }
});
_v.render = T6;
var xt = _v;
let ot;
function yt(e) {
  return new Promise((n) => {
    yt.close();
    const o = Ge(e) ? { columns: e } : e, t = Je(o);
    t.dynamic = !0, t.teleport = "body", ot = t;
    function r() {
      ot === t && (ot = null);
    }
    const { unmountInstance: a } = ht(xt, t, {
      onConfirm: (i, l, s) => {
        S(t.onConfirm, i, l, s), n({
          state: "confirm",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, r();
      },
      onCancel: (i, l, s) => {
        S(t.onCancel, i, l, s), n({
          state: "cancel",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, r();
      },
      onClose: () => {
        S(t.onClose), n({
          state: "close"
        }), r();
      },
      onClosed: () => {
        S(t.onClosed), a(), r();
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
  ot = null, Ke().then(() => {
    e.show = !1;
  });
};
yt.Component = xt;
te(xt);
te(xt, yt);
ue(yt, Qv);
const iT = xt;
var Bl = yt;
const xv = {
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
}, Jo = 100, dr = 0, ao = 20, Wc = 2 * Math.PI * ao, { name: E6, n: D6, classes: B6 } = x("progress"), I6 = ["aria-valuenow"], M6 = ["viewBox"], A6 = { key: 0 }, N6 = ["id"], V6 = ["offset", "stop-color"], L6 = ["d", "stroke-width", "stroke-dasharray"], R6 = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function F6(e, n) {
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
        I(
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
                I(
                  "div",
                  {
                    class: p(e.classes(e.n(`linear--${e.type}`))),
                    style: q({ background: e.progressColor })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                I(
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
            N(e.$slots, "default", {}, () => [
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
          e.isPlainObject(e.color) ? (h(), P("defs", A6, [
            I("linearGradient", {
              id: e.id,
              x1: "100%",
              y1: "0%",
              x2: "0%",
              y2: "0%"
            }, [
              (h(!0), P(
                Re,
                null,
                _e(e.linearGradientProgress, (o, t) => (h(), P("stop", {
                  key: t,
                  offset: o,
                  "stop-color": e.color[o]
                }, null, 8, V6))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, N6)
          ])) : X("v-if", !0),
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
          }, null, 14, L6)) : X("v-if", !0),
          I("path", {
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
          }, null, 14, R6)
        ], 10, M6)),
        e.label ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("circle-label"), e.labelClass))
          },
          [
            N(e.$slots, "default", {}, () => [
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
  ], 10, I6);
}
const em = _({
  name: E6,
  props: xv,
  setup(e) {
    const n = Od(), o = B(() => {
      const i = F(e.value), l = Mn(i, dr, Jo), s = Mn(Math.round(i), dr, Jo);
      return {
        width: `${l}%`,
        roundValue: `${s}%`,
        value: l
      };
    }), t = B(() => {
      const { size: i, lineWidth: l, value: s } = e, u = ao / (1 - en(l) / en(i)) * 2, c = `0 0 ${u} ${u}`, d = Mn(Math.round(F(s)), dr, Jo), f = `${(Jo - d) / Jo * Wc}`, v = en(l) / en(i) * u, y = 0, m = -ao, b = 0, C = -2 * ao, w = `M ${u / 2} ${u / 2} m ${y} ${m} a ${ao} ${ao} 
        0 1 1 ${b} ${-C} a ${ao} ${ao} 0 1 1 ${-b} ${C}`;
      return {
        strokeWidth: v,
        viewBox: c,
        strokeOffset: f,
        roundValue: `${d}%`,
        path: w,
        value: Mn(F(s), dr, Jo)
      };
    }), r = B(() => tt(e.color) ? `url(#${n.value})` : e.color), a = B(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: o,
      CIRCUMFERENCE: Wc,
      RADIUS: ao,
      circleProps: t,
      progressColor: r,
      linearGradientProgress: a,
      n: D6,
      classes: B6,
      toSizeUnit: ze,
      isPlainObject: tt
    };
  }
});
em.render = F6;
var Qa = em;
te(Qa);
ue(Qa, xv);
const lT = Qa;
var Il = Qa;
const nm = {
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
const { name: U6, n: qc, classes: H6 } = x("pull-refresh"), Gc = 150;
function Y6(e, n) {
  const o = ne("var-icon");
  return h(), P(
    "div",
    {
      ref: "freshNode",
      class: p(e.n()),
      onTouchstart: n[0] || (n[0] = (...t) => e.handleTouchstart && e.handleTouchstart(...t)),
      onTouchend: n[1] || (n[1] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
      onTouchcancel: n[2] || (n[2] = (...t) => e.handleTouchend && e.handleTouchend(...t))
    },
    [
      I(
        "div",
        {
          ref: "controlNode",
          class: p(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
          style: q(e.controlStyle)
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
      N(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const om = _({
  name: U6,
  components: { VarIcon: Ze },
  props: nm,
  setup(e) {
    const n = k(0), o = k(null), t = k(null), r = k(0), a = k("-125%"), i = k("arrow-down"), l = k("default"), s = k(!1), u = B(() => Math.abs(2 * n.value)), c = B(() => l.value === "success"), d = B(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = B(() => ({
      transform: `translate3d(0px, ${hn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: c.value ? e.successBgColor : e.bgColor,
      color: c.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: y, endTouch: m, isReachTop: b } = mt();
    let C, w;
    de(
      () => e.modelValue,
      (D) => {
        D === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, E();
        }, F(e.successDuration)));
      }
    ), fn(T), We(o, "touchmove", z);
    function g(D) {
      return Kc(this, null, function* () {
        if (i.value !== D)
          return i.value = D, new Promise((M) => {
            window.setTimeout(M, Gc);
          });
      });
    }
    function $(D) {
      ("classList" in C ? C : document.body).classList[D](`${qc()}--lock`);
    }
    function O(D) {
      if (v(D), n.value === 0) {
        const { width: M } = an(t.value);
        n.value = -(M + M * 0.25);
      }
      w = Po(D.target);
    }
    function z(D) {
      if (y(D), !d.value || !w || w !== C && Ro(w) > 0 || Ro(C) > 0)
        return;
      b(C) && Ne(D), l.value !== "pulling" && (l.value = "pulling", r.value = D.touches[0].clientY), b(C) && On(a.value) && a.value > n.value && $("add");
      const Y = (D.touches[0].clientY - r.value) / 2 + n.value;
      a.value = Y >= u.value ? u.value : Y, g(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function L() {
      return Kc(this, null, function* () {
        m(), d.value && (s.value = !0, F(a.value) >= u.value * 0.2 ? (yield g("refresh"), l.value = "loading", a.value = u.value * 0.3, S(e["onUpdate:modelValue"], !0), Ke(() => {
          S(e.onRefresh);
        }), $("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, $("remove");
        }, F(e.animationDuration))), w = null);
      });
    }
    function T() {
      C = e.target ? Ld(e.target, "PullRefresh") : Po(o.value);
    }
    function E() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, F(e.animationDuration));
    }
    return {
      ICON_TRANSITION: Gc,
      refreshStatus: l,
      freshNode: o,
      controlNode: t,
      iconName: i,
      controlStyle: f,
      isSuccess: c,
      n: qc,
      classes: H6,
      handleTouchstart: O,
      handleTouchmove: z,
      handleTouchend: L
    };
  }
});
om.render = Y6;
var _a = om;
te(_a);
ue(_a, nm);
const sT = _a;
var Ml = _a;
const tm = {
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
  onClick: V(),
  onChange: V(),
  "onUpdate:modelValue": V()
}, rm = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function j6() {
  const { bindChildren: e, childProviders: n, length: o } = bn(
    rm
  );
  return {
    length: o,
    radios: n,
    bindRadios: e
  };
}
function W6() {
  const { bindParent: e, parentProvider: n, index: o } = gn(rm);
  return {
    index: o,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: K6, n: q6, classes: G6 } = x("radio"), X6 = ["tabindex"];
function Z6(e, n) {
  const o = ne("var-icon"), t = ne("var-hover-overlay"), r = ne("var-form-details"), a = Ye("ripple"), i = Ye("hover");
  return h(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      I(
        "div",
        He({
          class: e.n(),
          onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
        }, e.$attrs),
        [
          Ie((h(), P("div", {
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
            e.checked ? N(e.$slots, "checked-icon", { key: 0 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                "var-radio-cover": "",
                name: "radio-marked",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]) : N(e.$slots, "unchecked-icon", { key: 1 }, () => [
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
          ], 46, X6)), [
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
              N(e.$slots, "default", { checked: e.checked })
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
const am = _({
  name: K6,
  directives: { Ripple: tn, Hover: Tn },
  components: {
    VarIcon: Ze,
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  inheritAttrs: !1,
  props: tm,
  setup(e) {
    const n = k(), o = k(!1), t = Zn(e, "modelValue"), r = B(() => t.value === e.checkedValue), a = k(!1), { radioGroup: i, bindRadioGroup: l } = W6(), { hovering: s, handleHovering: u } = Jn(), { form: c, bindForm: d } = jn(), {
      errorMessage: f,
      validateWithTrigger: v,
      validate: y,
      // expose
      resetValidation: m
    } = Yn(), b = {
      sync: L,
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
    S(l, b), S(d, b), We(() => window, "keydown", C), We(() => window, "keyup", w);
    function C(M) {
      if (!o.value)
        return;
      const { key: Y } = M;
      (Y === "Enter" || Y === " ") && Ne(M), Y === "Enter" && n.value.click();
    }
    function w(M) {
      o.value && M.key === " " && (Ne(M), n.value.click());
    }
    function g(M) {
      Ke(() => {
        const { validateTrigger: Y, rules: j, modelValue: R } = e;
        v(Y, M, j, R);
      });
    }
    function $(M) {
      const { checkedValue: Y, onChange: j } = e;
      i && t.value === Y || (t.value = M, S(j, t.value), i == null || i.onToggle(Y), g("onChange"));
    }
    function O(M) {
      const { disabled: Y, readonly: j, uncheckedValue: R, checkedValue: K, onClick: W } = e;
      c != null && c.disabled.value || Y || (S(W, M), !(c != null && c.readonly.value || j) && (a.value = !0, $(r.value ? R : K)));
    }
    function z() {
      n.value.focus();
    }
    function L(M) {
      const { checkedValue: Y, uncheckedValue: j } = e;
      t.value = M === Y ? Y : j;
    }
    function T() {
      t.value = e.uncheckedValue, m();
    }
    function E() {
      return y(e.rules, e.modelValue);
    }
    function D(M) {
      const { uncheckedValue: Y, checkedValue: j } = e;
      ![Y, j].includes(M) && (M = r.value ? Y : j), $(M);
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
      n: q6,
      classes: G6,
      handleClick: O,
      handleTextClick: z,
      toggle: D,
      reset: T,
      validate: E,
      resetValidation: m
    };
  }
});
am.render = Z6;
var xa = am;
te(xa);
ue(xa, tm);
const uT = xa;
var Fr = xa;
const im = {
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
  onChange: V(),
  "onUpdate:modelValue": V()
}, { name: J6, n: Q6, classes: _6 } = x("radio-group");
function x6(e, n) {
  const o = ne("maybe-v-node"), t = ne("var-radio"), r = ne("var-form-details");
  return h(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      I(
        "div",
        {
          class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          e.radioGroupOptions.length ? (h(!0), P(
            Re,
            { key: 0 },
            _e(e.radioGroupOptions, (a) => (h(), Oe(t, {
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
          N(e.$slots, "default")
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
const lm = _({
  name: J6,
  components: { VarFormDetails: En, VarRadio: Fr, MaybeVNode: Ed },
  props: im,
  setup(e) {
    const { length: n, radios: o, bindRadios: t } = j6(), { bindForm: r } = jn(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = Yn(), u = B(() => Ge(e.options) ? e.options : []), c = B(() => a.value), d = {
      onToggle: b,
      validate: C,
      reset: w,
      resetValidation: s,
      errorMessage: c
    };
    de(() => e.modelValue, m), de(() => n.value, m), S(r, d), t(d), We(() => window, "keydown", f);
    function f(g) {
      const $ = o.findIndex(({ isFocusing: z }) => z.value);
      if (!($ === -1 || !o.some(({ moveable: z }, L) => L === $ ? !1 : z()))) {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(g.key) && Ne(g), g.key === "ArrowUp" || g.key === "ArrowLeft") {
          v($, "prev");
          return;
        }
        (g.key === "ArrowDown" || g.key === "ArrowRight") && v($, "next");
      }
    }
    function v(g, $) {
      for (; ; ) {
        $ === "prev" ? g-- : g++, g < 0 && (g = o.length - 1), g > o.length - 1 && (g = 0);
        const O = o[g];
        if (O.moveable()) {
          O.move();
          break;
        }
      }
    }
    function y(g) {
      Ke(() => {
        const { validateTrigger: $, rules: O, modelValue: z } = e;
        i($, g, O, z);
      });
    }
    function m() {
      return o.forEach(({ sync: g }) => g(e.modelValue));
    }
    function b(g) {
      S(e["onUpdate:modelValue"], g), S(e.onChange, g), y("onChange");
    }
    function C() {
      return l(e.rules, e.modelValue);
    }
    function w() {
      S(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: Q6,
      classes: _6,
      reset: w,
      validate: C,
      resetValidation: s,
      isFunction: Eo,
      radioGroupOptions: u
    };
  }
});
lm.render = x6;
var ei = lm;
te(ei);
ue(ei, im);
const cT = ei;
var Al = ei;
const sm = {
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
  namespace: Be(on, "namespace"),
  emptyIconNamespace: Be(on, "namespace"),
  halfIconNamespace: Be(on, "namespace"),
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
}, { name: e2, n: wt } = x("rate"), n2 = ["onClick"];
function o2(e, n) {
  const o = ne("var-icon"), t = ne("var-hover-overlay"), r = ne("var-form-details"), a = Ye("ripple"), i = Ye("hover");
  return h(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      I(
        "div",
        {
          class: p(e.n())
        },
        [
          (h(!0), P(
            Re,
            null,
            _e(e.toNumber(e.count), (l) => Ie((h(), P("div", {
              key: l,
              style: q(e.getStyle(l)),
              class: p(e.getClass(l)),
              onClick: (s) => e.handleClick(l, s)
            }, [
              G(o, {
                class: p(e.n("content-icon")),
                "var-rate-cover": "",
                transition: 0,
                namespace: e.getCurrentState(l).namespace,
                name: e.getCurrentState(l).name,
                style: q({ fontSize: e.toSizeUnit(e.size) })
              }, null, 8, ["class", "namespace", "name", "style"]),
              G(t, {
                hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
              }, null, 8, ["hovering"])
            ], 14, n2)), [
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
const um = _({
  name: e2,
  components: {
    VarIcon: Ze,
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  directives: { Ripple: tn, Hover: Tn },
  props: sm,
  setup(e) {
    const n = k(-1), { form: o, bindForm: t } = jn(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = Yn(), { hovering: s } = Jn();
    let u = F(e.modelValue);
    S(t, {
      reset: g,
      validate: m,
      resetValidation: l
    });
    function d($) {
      const { count: O, gap: z } = e;
      return {
        color: v($).color,
        marginRight: $ !== F(O) ? ze(z) : 0
      };
    }
    function f($) {
      const { name: O, color: z } = v($);
      return {
        [wt("content")]: !0,
        [wt("--disabled")]: (o == null ? void 0 : o.disabled.value) || e.disabled,
        [wt("--error")]: r.value,
        [wt("--primary")]: O !== e.emptyIcon && !z
      };
    }
    function v($) {
      const {
        modelValue: O,
        disabled: z,
        disabledColor: L,
        color: T,
        half: E,
        emptyColor: D,
        icon: M,
        halfIcon: Y,
        emptyIcon: j,
        namespace: R,
        halfIconNamespace: K,
        emptyIconNamespace: W
      } = e;
      let ce = T;
      return (z || o != null && o.disabled.value) && (ce = L), $ <= O ? { color: ce, name: M, namespace: R } : E && $ <= O + 0.5 ? { color: ce, name: Y, namespace: K } : {
        color: z || o != null && o.disabled.value ? L : D,
        name: j,
        namespace: W
      };
    }
    function y($, O) {
      const { half: z, clearable: L } = e, { offsetWidth: T } = O.target;
      z && O.offsetX <= Math.floor(T / 2) && ($ -= 0.5), u === $ && L && ($ = 0), u !== $ && (S(e["onUpdate:modelValue"], $), S(e.onChange, $)), u = $;
    }
    function m() {
      return i(e.rules, e.modelValue);
    }
    function b() {
      return Ke(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function C($, O) {
      const { readonly: z, disabled: L } = e;
      z || L || o != null && o.disabled.value || o != null && o.readonly.value || (y($, O), b());
    }
    function w($) {
      return (O) => {
        n.value = $, s.value = O;
      };
    }
    function g() {
      S(e["onUpdate:modelValue"], 0), l();
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
      handleClick: C,
      createHoverHandler: w,
      reset: g,
      validate: m,
      resetValidation: l,
      toSizeUnit: ze,
      toNumber: F,
      n: wt
    };
  }
});
um.render = o2;
var ni = um;
te(ni);
ue(ni, sm);
const dT = ni;
var Nl = ni;
const t2 = (e) => (Wo(""), e = e(), Ko(), e), r2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, a2 = /* @__PURE__ */ t2(() => /* @__PURE__ */ I(
  "path",
  { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
  null,
  -1
  /* HOISTED */
)), i2 = [
  a2
];
function l2(e, n) {
  return h(), P("svg", r2, [...i2]);
}
const cm = _({});
cm.render = l2;
var s2 = cm;
const u2 = (e) => (Wo(""), e = e(), Ko(), e), c2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, d2 = /* @__PURE__ */ u2(() => /* @__PURE__ */ I(
  "path",
  { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
  null,
  -1
  /* HOISTED */
)), f2 = [
  d2
];
function p2(e, n) {
  return h(), P("svg", c2, [...f2]);
}
const dm = _({});
dm.render = p2;
var v2 = dm;
const m2 = (e) => (Wo(""), e = e(), Ko(), e), h2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, g2 = /* @__PURE__ */ m2(() => /* @__PURE__ */ I(
  "path",
  { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
  null,
  -1
  /* HOISTED */
)), b2 = [
  g2
];
function y2(e, n) {
  return h(), P("svg", h2, [...b2]);
}
const fm = _({});
fm.render = y2;
var k2 = fm;
const { n: $2, classes: w2 } = x("result");
function C2(e, n) {
  return h(), P(
    Re,
    null,
    [
      I(
        "span",
        {
          class: p(e.n("success-cover-left"))
        },
        null,
        2
        /* CLASS */
      ),
      I(
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
      I(
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
      I(
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
      I(
        "span",
        {
          class: p(e.n("success-line-fix"))
        },
        null,
        2
        /* CLASS */
      ),
      I(
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
const pm = _({
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
      n: $2,
      classes: w2
    };
  }
});
pm.render = C2;
var S2 = pm;
const P2 = (e) => (Wo(""), e = e(), Ko(), e), z2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, O2 = /* @__PURE__ */ P2(() => /* @__PURE__ */ I(
  "path",
  { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
  null,
  -1
  /* HOISTED */
)), T2 = [
  O2
];
function E2(e, n) {
  return h(), P("svg", z2, [...T2]);
}
const vm = _({});
vm.render = E2;
var D2 = vm;
const B2 = (e) => (Wo(""), e = e(), Ko(), e), I2 = { viewBox: "-4 -4 32 32" }, M2 = /* @__PURE__ */ B2(() => /* @__PURE__ */ I(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), A2 = [
  M2
];
function N2(e, n) {
  return h(), P("svg", I2, [...A2]);
}
const mm = _({});
mm.render = N2;
var V2 = mm;
const hm = {
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
}, { name: L2, n: R2, classes: F2 } = x("result");
function U2(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      N(e.$slots, "image", {}, () => [
        e.type ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.n("image-container"))
          },
          [
            I(
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
                (h(), Oe(vt(e.type), {
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
      N(e.$slots, "title", {}, () => [
        e.title ? (h(), P(
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
      N(e.$slots, "description", {}, () => [
        e.description ? (h(), P(
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
      e.$slots.footer ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("footer"))
        },
        [
          N(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const gm = _({
  name: L2,
  components: {
    Info: s2,
    Success: S2,
    Warning: k2,
    Error: v2,
    Question: D2,
    Empty: V2
  },
  props: hm,
  setup(e) {
    const n = B(
      () => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.9)`
    ), o = B(
      () => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.05)`
    );
    return {
      circleSize: n,
      borderSize: o,
      n: R2,
      classes: F2
    };
  }
});
gm.render = U2;
var oi = gm;
te(oi);
ue(oi, hm);
const fT = oi;
var Vl = oi;
const bm = {
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
}, { name: H2, n: Y2, classes: j2 } = x("row");
function W2(e, n) {
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
      N(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const ym = _({
  name: H2,
  props: bm,
  setup(e) {
    const n = B(
      () => Ge(e.gutter) ? e.gutter.map((s) => en(s) / 2) : [0, en(e.gutter) / 2]
    ), { cols: o, bindCols: t, length: r } = Iy(), a = { computePadding: i };
    de(() => r.value, i), de(() => e.gutter, i), t(a);
    function i() {
      o.forEach((s) => {
        const [u, c] = n.value;
        s.setPadding({ left: c, right: c, top: u, bottom: u });
      });
    }
    function l(s) {
      S(e.onClick, s);
    }
    return {
      average: n,
      n: Y2,
      classes: j2,
      handleClick: l,
      padStartFlex: Pr
    };
  }
});
ym.render = W2;
var ti = ym;
te(ti);
ue(ti, bm);
const pT = ti;
var Ll = ti, K2 = Object.defineProperty, Xc = Object.getOwnPropertySymbols, q2 = Object.prototype.hasOwnProperty, G2 = Object.prototype.propertyIsEnumerable, Zc = (e, n, o) => n in e ? K2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, X2 = (e, n) => {
  for (var o in n || (n = {}))
    q2.call(n, o) && Zc(e, o, n[o]);
  if (Xc)
    for (var o of Xc(n))
      G2.call(n, o) && Zc(e, o, n[o]);
  return e;
};
const km = X2({
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: void 0
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
  onFocus: V(),
  onBlur: V(),
  onClose: V(),
  onChange: V(),
  onClear: V(),
  "onUpdate:modelValue": V()
}, Be(Ia, [
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
])), { name: Z2, n: J2, classes: Q2 } = x("select"), _2 = ["tabindex"], x2 = { key: 1 };
function e4(e, n) {
  const o = ne("var-chip"), t = ne("var-icon"), r = ne("var-field-decorator"), a = ne("var-menu"), i = ne("var-form-details");
  return h(), P("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.disabled || e.formDisabled ? void 0 : "0",
    onFocus: n[3] || (n[3] = (...l) => e.handleFocus && e.handleFocus(...l)),
    onBlur: n[4] || (n[4] = (...l) => e.handleRootBlur && e.handleRootBlur(...l))
  }, [
    G(a, {
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
      "onUpdate:show": n[1] || (n[1] = (l) => e.showMenu = l),
      onClickOutside: e.handleClickOutside
    }, {
      menu: fe(() => [
        I(
          "div",
          {
            ref: "menuEl",
            class: p(e.classes(e.n("scroller"), e.n("$-elevation--3")))
          },
          [
            N(e.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ]),
      default: fe(() => [
        G(
          r,
          $o(Kt({
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
            "clear-icon": fe(({ clear: l }) => [
              N(e.$slots, "clear-icon", { clear: l })
            ]),
            "append-icon": fe(() => [
              N(e.$slots, "append-icon")
            ]),
            default: fe(() => [
              I(
                "div",
                {
                  class: p(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                  style: q({
                    textAlign: e.textAlign,
                    color: e.textColor
                  })
                },
                [
                  I(
                    "div",
                    {
                      class: p(e.n("label"))
                    },
                    [
                      e.isEmptyModelValue ? X("v-if", !0) : N(e.$slots, "selected", { key: 0 }, () => [
                        e.multiple ? (h(), P(
                          Re,
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
                                  Re,
                                  null,
                                  _e(e.labels, (l) => (h(), Oe(o, {
                                    class: p(e.n("chip")),
                                    "var-select-cover": "",
                                    closeable: "",
                                    size: "small",
                                    type: e.errorMessage ? "danger" : void 0,
                                    key: l,
                                    onClick: n[0] || (n[0] = Nn(() => {
                                    }, ["stop"])),
                                    onClose: () => e.handleClose(l)
                                  }, {
                                    default: fe(() => [
                                      De(
                                        re(l),
                                        1
                                        /* TEXT */
                                      )
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
                              re(e.labels.join(e.separator)),
                              3
                              /* TEXT, CLASS */
                            ))
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        )) : (h(), P(
                          "span",
                          x2,
                          re(e.label),
                          1
                          /* TEXT */
                        ))
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
                    re(e.placeholder),
                    7
                    /* TEXT, CLASS, STYLE */
                  )) : X("v-if", !0),
                  N(e.$slots, "arrow-icon", {
                    focus: e.isFocusing,
                    menuOpen: e.showMenu
                  }, () => [
                    G(t, {
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
                N(e.$slots, "prepend-icon")
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
    G(i, {
      "error-message": e.errorMessage,
      onClick: n[2] || (n[2] = Nn(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])
  ], 42, _2);
}
const $m = _({
  name: Z2,
  components: {
    VarIcon: Ze,
    VarMenu: Ut,
    VarChip: Tr,
    VarFieldDecorator: Vt,
    VarFormDetails: En
  },
  props: km,
  setup(e) {
    const n = k(!1), o = k(!1), t = k(null), r = B(() => e.multiple), a = B(() => e.focusColor), i = B(() => Qn(e.modelValue)), l = B(() => e.disabled || e.readonly ? "" : "pointer"), s = k(0), { bindForm: u, form: c } = jn(), { length: d, options: f, bindOptions: v } = xS(), { label: y, labels: m, computeLabel: b, getSelectedValue: C } = Hv({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => f,
      optionProvidersLength: () => d.value
    }), {
      errorMessage: w,
      validateWithTrigger: g,
      validate: $,
      // expose
      resetValidation: O
    } = Yn(), z = k(null), L = B(() => e.variant === "outlined" ? "bottom" : "cover-top"), T = B(() => {
      const { hint: H, blurColor: ee, focusColor: ke } = e;
      if (!H)
        return w.value ? "var(--field-decorator-error-color)" : n.value ? ke || "var(--field-decorator-focus-color)" : ee || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), E = B(() => !e.hint && Qn(e.modelValue)), D = {
      multiple: r,
      focusColor: a,
      computeLabel: b,
      onSelect: Q,
      reset: A,
      validate: ae,
      resetValidation: O
    };
    de(
      () => e.multiple,
      () => {
        const { multiple: H, modelValue: ee } = e;
        H && !Ge(ee) && Vn("Select", "The modelValue must be an array when multiple is true");
      }
    ), v(D), We(() => window, "keydown", M), We(() => window, "keyup", Y), S(u, D);
    function M(H) {
      const { disabled: ee, readonly: ke } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || ee || ke || !n.value)
        return;
      const { key: Se } = H;
      if (Se === " " && !o.value) {
        Ne(H);
        return;
      }
      if (Se === "Escape" && o.value) {
        t.value.focus(), Ne(H), o.value = !1;
        return;
      }
      if (Se === "Tab" && o.value) {
        t.value.focus(), Ne(H), K();
        return;
      }
      if (Se === "Enter" && !o.value) {
        Ne(H), o.value = !0;
        return;
      }
      (Se === "ArrowDown" || Se === "ArrowUp") && o.value && (Ne(H), Fd(t.value, z.value, Se));
    }
    function Y(H) {
      const { disabled: ee, readonly: ke } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || ee || ke || o.value || !n.value)
        return;
      const { key: Se } = H;
      Se === " " && !o.value && (Ne(H), o.value = !0);
    }
    function j(H) {
      Ke(() => {
        const { validateTrigger: ee, rules: ke, modelValue: Se } = e;
        g(ee, H, ke, Se);
      });
    }
    function R() {
      const { disabled: H, readonly: ee, onFocus: ke } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || H || ee || (s.value = en(e.offsetY), U(), S(ke), j("onFocus"));
    }
    function K() {
      const { disabled: H, readonly: ee, onBlur: ke } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || H || ee || (J(), S(ke), j("onBlur"));
    }
    function W() {
      o.value || K();
    }
    function ce() {
      n.value && K();
    }
    function Q(H) {
      const { disabled: ee, readonly: ke, multiple: Se, onChange: Le } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || ee || ke)
        return;
      const je = C(H);
      S(e["onUpdate:modelValue"], je), S(Le, je), j("onChange"), Se || (t.value.focus(), kn().then(() => {
        o.value = !1;
      }));
    }
    function pe() {
      const { disabled: H, readonly: ee, multiple: ke, clearable: Se, onClear: Le } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || H || ee || !Se)
        return;
      const je = ke ? [] : void 0;
      S(e["onUpdate:modelValue"], je), S(Le, je), j("onClear");
    }
    function ye(H) {
      const { disabled: ee, onClick: ke } = e;
      c != null && c.disabled.value || ee || (S(ke, H), j("onClick"));
    }
    function ie(H) {
      const { disabled: ee, readonly: ke, modelValue: Se, onClose: Le } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || ee || ke)
        return;
      const je = f.find(({ label: ve }) => ve.value === H), Pn = Se.filter(
        (ve) => {
          var Fe;
          return ve !== ((Fe = je.value.value) != null ? Fe : je.label.value);
        }
      );
      S(e["onUpdate:modelValue"], Pn), S(Le, Pn), j("onClose");
    }
    function U() {
      s.value = en(e.offsetY), n.value = !0;
    }
    function J() {
      n.value = !1, o.value = !1;
    }
    function ae() {
      return $(e.rules, e.modelValue);
    }
    function A() {
      S(e["onUpdate:modelValue"], e.multiple ? [] : void 0), O();
    }
    return {
      root: t,
      offsetY: s,
      isFocusing: n,
      showMenu: o,
      errorMessage: w,
      formDisabled: c == null ? void 0 : c.disabled,
      formReadonly: c == null ? void 0 : c.readonly,
      label: y,
      labels: m,
      isEmptyModelValue: i,
      menuEl: z,
      placement: L,
      cursor: l,
      placeholderColor: T,
      enableCustomPlaceholder: E,
      n: J2,
      classes: Q2,
      handleFocus: R,
      handleBlur: K,
      handleClickOutside: ce,
      handleClear: pe,
      handleClick: ye,
      handleClose: ie,
      handleRootBlur: W,
      reset: A,
      validate: ae,
      resetValidation: O,
      focus: U,
      blur: J
    };
  }
});
$m.render = e4;
var ri = $m;
te(ri);
ue(ri, km);
const vT = ri;
var Rl = ri;
const wm = {
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
}, { name: n4, n: o4, classes: t4 } = x("skeleton");
function r4(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? X("v-if", !0) : (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("data"))
        },
        [
          N(e.$slots, "default")
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
              I(
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
                  I(
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
                      I(
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
                  (h(!0), P(
                    Re,
                    null,
                    _e(e.toNumber(e.rows), (o, t) => (h(), P(
                      "div",
                      {
                        class: p(e.n("row")),
                        key: o,
                        style: q({ width: e.toSizeUnit(e.rowsWidth[t]) })
                      },
                      [
                        I(
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
      e.loading && e.fullscreen ? (h(), P(
        "div",
        {
          key: 2,
          class: p(e.n("fullscreen")),
          style: q({ zIndex: e.toNumber(e.fullscreenZIndex) })
        },
        [
          I(
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
const Cm = _({
  name: n4,
  props: wm,
  setup: () => ({
    n: o4,
    classes: t4,
    toSizeUnit: ze,
    toNumber: F
  })
});
Cm.render = r4;
var ai = Cm;
te(ai);
ue(ai, wm);
const mT = ai;
var Fl = ai, sn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(sn || {});
const Sm = {
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
  onChange: V(),
  onStart: V(),
  onEnd: V(),
  "onUpdate:modelValue": V()
}, { name: a4, n: Jc, classes: i4 } = x("slider"), l4 = ["tabindex", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-disabled", "aria-valuetext", "onTouchstart", "onFocusin", "onFocusout"];
function s4(e, n) {
  const o = ne("var-hover-overlay"), t = ne("var-form-details"), r = Ye("hover");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [
      I(
        "div",
        {
          class: p(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
          ref: "sliderEl",
          onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
        },
        [
          I(
            "div",
            {
              class: p(e.n(`${e.direction}-track`))
            },
            [
              I(
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
              I(
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
            Re,
            null,
            _e(e.thumbList, (a) => (h(), P("div", {
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
              onTouchstart: Nn((i) => e.start(i, a.enumValue), ["stop"]),
              onFocusin: (i) => e.handleFocus(a),
              onFocusout: (i) => e.handleBlur(a)
            }, [
              N(e.$slots, "button", {
                currentValue: a.text
              }, () => [
                Ie(I(
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
                  [r, (i) => e.hover(i, a), "desktop"]
                ]),
                I(
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
                    G(o, {
                      hovering: !e.isDisabled && a.hovering,
                      focusing: !e.isDisabled && a.focusing
                    }, null, 8, ["hovering", "focusing"])
                  ],
                  6
                  /* CLASS, STYLE */
                ),
                I(
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
                    I(
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
            ], 46, l4))),
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
const Pm = _({
  name: a4,
  components: {
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  directives: { Hover: Tn },
  props: Sm,
  setup(e) {
    const n = k(0), o = k(null), t = k(!1), r = B(() => F(e.max) - F(e.min)), a = B(() => n.value / r.value * F(e.step)), i = B(() => e.disabled || (f == null ? void 0 : f.disabled.value)), l = B(() => e.readonly || (f == null ? void 0 : f.readonly.value)), s = B(() => e.direction === "vertical"), u = k(!1), c = k(!1), { bindForm: d, form: f } = jn(), { errorMessage: v, validateWithTrigger: y, validate: m, resetValidation: b } = Yn(), { hovering: C, handleHovering: w } = Jn(), { hovering: g, handleHovering: $ } = Jn(), O = B(() => {
      const { modelValue: le, range: me } = e;
      let $e = [];
      return me && Ge(le) ? $e = [
        {
          value: ce(le[0]),
          enumValue: sn.First,
          text: Q(le[0]),
          hovering: C.value,
          focusing: u.value,
          handleHovering: w,
          handleFocusing(Me) {
            u.value = Me;
          }
        },
        {
          value: ce(le[1]),
          enumValue: sn.Second,
          text: Q(le[1]),
          hovering: g.value,
          focusing: c.value,
          handleHovering: $,
          handleFocusing(Me) {
            c.value = Me;
          }
        }
      ] : On(le) && ($e = [
        {
          value: ce(le),
          enumValue: sn.First,
          text: Q(le),
          hovering: C.value,
          focusing: u.value,
          handleHovering: w,
          handleFocusing(Me) {
            u.value = Me;
          }
        }
      ]), $e;
    }), z = B(() => {
      const { activeColor: le, range: me, modelValue: $e } = e, Me = me && Ge($e) ? ce(Math.min($e[0], $e[1])) : 0, xe = me && Ge($e) ? ce(Math.max($e[0], $e[1])) - Me : ce($e);
      return s.value ? {
        left: "0px",
        height: `${xe}%`,
        bottom: `${Me}%`,
        background: le
      } : {
        top: "0px",
        width: `${xe}%`,
        left: `${Me}%`,
        background: le
      };
    }), L = Je({
      [sn.First]: Y(),
      [sn.Second]: Y()
    });
    let T;
    S(d, {
      reset: Pn,
      validate: M,
      resetValidation: b
    }), de([() => e.modelValue, () => e.step], ([le, me]) => {
      !Se() || !Le() || t.value || je(le, F(me));
    }), de(n, () => je()), fn(() => {
      !Se() || !Le() || D();
    }), Ur(ae), We(() => window, "keydown", Fe), to(D);
    function D() {
      n.value = o.value[s.value ? "offsetHeight" : "offsetWidth"];
    }
    function M() {
      return m(e.rules, e.modelValue);
    }
    function Y() {
      return {
        startPosition: 0,
        currentOffset: 0,
        active: !1,
        percentValue: 0
      };
    }
    function j() {
      return Ke(() => y(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function R(le) {
      const me = le.currentTarget;
      return me ? s.value ? n.value - (le.clientY - an(me).top) : le.clientX - bg(me) : 0;
    }
    function K(le) {
      return {
        [s.value ? "bottom" : "left"]: `${le.value}%`,
        zIndex: L[le.enumValue].active ? 1 : void 0
      };
    }
    function W(le) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : L[le].active;
    }
    function ce(le) {
      const { min: me, max: $e } = e;
      return le < F(me) ? 0 : le > F($e) ? 100 : (le - F(me)) / r.value * 100;
    }
    function Q(le) {
      if (!On(le))
        return 0;
      const me = Mn(le, F(e.min), F(e.max));
      return parseInt(`${me}`, 10) === me ? me : F(me.toPrecision(5));
    }
    function pe(le, me) {
      i.value || me.handleHovering(le);
    }
    function ye(le) {
      S(e.onChange, le), S(e["onUpdate:modelValue"], le), j();
    }
    function ie(le, me) {
      let $e = [];
      const { step: Me, range: xe, modelValue: oe, min: we } = e, Te = F(Me), Ve = Math.round(le / a.value), Ae = Ve * Te + F(we), ln = L[me].percentValue * Te + F(we);
      if (L[me].percentValue = Ve, xe && Ge(oe) && ($e = me === sn.First ? [Ae, oe[1]] : [oe[0], Ae]), ln !== Ae) {
        const pn = xe ? $e.map((yn) => Q(yn)) : Q(Ae);
        ye(pn);
      }
    }
    function U(le) {
      if (!e.range)
        return sn.First;
      const me = L[sn.First].percentValue * a.value, $e = L[sn.Second].percentValue * a.value, Me = Math.abs(le - me), xe = Math.abs(le - $e);
      return Me <= xe ? sn.First : sn.Second;
    }
    function J() {
      document.addEventListener("touchmove", H, { passive: !1 }), document.addEventListener("touchend", ee), document.addEventListener("touchcancel", ee);
    }
    function ae() {
      document.removeEventListener("touchmove", H), document.removeEventListener("touchend", ee), document.removeEventListener("touchcancel", ee);
    }
    function A(le, me) {
      if (D(), i.value || (L[me].active = !0), T = me, J(), i.value || l.value)
        return;
      S(e.onStart), t.value = !0;
      const { clientX: $e, clientY: Me } = le.touches[0];
      L[me].startPosition = s.value ? Me : $e;
    }
    function H(le) {
      if (Ne(le), i.value || l.value || !t.value)
        return;
      const { startPosition: me, currentOffset: $e } = L[T], { clientX: Me, clientY: xe } = le.touches[0];
      let oe = (s.value ? me - xe : Me - me) + $e;
      oe <= 0 ? oe = 0 : oe >= n.value && (oe = n.value), ie(oe, T);
    }
    function ee() {
      ae();
      const { range: le, modelValue: me, onEnd: $e, step: Me, min: xe } = e;
      if (i.value || (L[T].active = !1), i.value || l.value)
        return;
      let oe = [];
      L[T].currentOffset = L[T].percentValue * a.value;
      const we = L[T].percentValue * F(Me) + F(xe);
      le && Ge(me) && (oe = T === sn.First ? [we, me[1]] : [me[0], we]), S($e, le ? oe : we), t.value = !1;
    }
    function ke(le) {
      if (i.value || l.value || le.target.closest(`.${Jc("thumb")}`))
        return;
      const me = R(le), $e = U(me);
      T = $e, ie(me, $e), ee();
    }
    function Se() {
      return F(e.step) <= 0 ? (gg("[Varlet] Slider", '"step" should be > 0'), !1) : !0;
    }
    function Le() {
      const { range: le, modelValue: me } = e;
      return le && !Ge(me) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !le && Ge(me) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : le && Ge(me) && me.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }
    function je(le = e.modelValue, me = F(e.step)) {
      const $e = (Me) => {
        const { min: xe, max: oe } = e;
        return Me < F(xe) ? 0 : Me > F(oe) ? r.value / me : (Me - F(xe)) / me;
      };
      e.range && Ge(le) ? (L[sn.First].percentValue = $e(le[0]), L[sn.First].currentOffset = L[sn.First].percentValue * a.value, L[sn.Second].percentValue = $e(le[1]), L[sn.Second].currentOffset = L[sn.Second].percentValue * a.value) : On(le) && (L[sn.First].currentOffset = $e(le) * a.value);
    }
    function Pn() {
      const le = e.range ? [0, 0] : 0;
      S(e["onUpdate:modelValue"], le), b();
    }
    function ve(le, me) {
      const $e = F(e.step);
      if (Ge(me)) {
        const Me = me[0] + (u.value ? le * $e : 0), xe = me[1] + (c.value ? le * $e : 0);
        return [Me, xe].map(Q);
      }
      return Q(me + le * $e);
    }
    function Fe(le) {
      const me = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: $e } = le;
      if (!$r(me, $e) || l.value || i.value || e.range && !u.value && !c.value || !e.range && !u.value)
        return;
      Ne(le);
      const Me = me[$e], xe = ve(Me, e.modelValue);
      ye(xe);
    }
    function Ue(le) {
      i.value || le.handleFocusing(!0);
    }
    function nn(le) {
      le.handleFocusing(!1);
    }
    return {
      sliderEl: o,
      getFillStyle: z,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: L,
      thumbList: O,
      handleFocus: Ue,
      handleBlur: nn,
      n: Jc,
      classes: i4,
      thumbStyle: K,
      hover: pe,
      toSizeUnit: ze,
      toNumber: F,
      showLabel: W,
      start: A,
      move: H,
      end: ee,
      handleClick: ke
    };
  }
});
Pm.render = s4;
var ii = Pm;
te(ii);
ue(ii, Sm);
const hT = ii;
var Ul = ii, u4 = Object.defineProperty, c4 = Object.defineProperties, d4 = Object.getOwnPropertyDescriptors, Qc = Object.getOwnPropertySymbols, f4 = Object.prototype.hasOwnProperty, p4 = Object.prototype.propertyIsEnumerable, _c = (e, n, o) => n in e ? u4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, v4 = (e, n) => {
  for (var o in n || (n = {}))
    f4.call(n, o) && _c(e, o, n[o]);
  if (Qc)
    for (var o of Qc(n))
      p4.call(n, o) && _c(e, o, n[o]);
  return e;
}, m4 = (e, n) => c4(e, d4(n));
const As = {
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
  loadingType: Be(io, "type"),
  loadingSize: Be(io, "size"),
  loadingRadius: Be(io, "radius"),
  loadingColor: m4(v4({}, Be(io, "color")), {
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
}, { n: h4, classes: g4 } = x("snackbar"), b4 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function y4(e, n) {
  const o = ne("var-icon"), t = ne("var-loading");
  return Ie((h(), P(
    "div",
    {
      class: p(e.n()),
      style: q({ pointerEvents: e.isForbidClick ? "auto" : "none", zIndex: e.zIndex })
    },
    [
      I(
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
          I(
            "div",
            {
              class: p([e.n("content"), e.contentClass])
            },
            [
              N(e.$slots, "default", {}, () => [
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
          e.iconName || e.type === "loading" || e.$slots.icon ? (h(), P(
            "div",
            {
              key: 0,
              class: p(e.n("icon"))
            },
            [
              e.iconName ? (h(), Oe(o, {
                key: 0,
                name: e.iconName
              }, null, 8, ["name"])) : X("v-if", !0),
              e.type === "loading" ? (h(), Oe(t, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : X("v-if", !0),
              N(e.$slots, "icon")
            ],
            2
            /* CLASS */
          )) : X("v-if", !0),
          e.$slots.action ? (h(), P(
            "div",
            {
              key: 1,
              class: p(e.n("action"))
            },
            [
              N(e.$slots, "action")
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
const zm = _({
  name: "VarSnackbarCore",
  components: {
    VarLoading: it,
    VarIcon: Ze
  },
  props: As,
  setup(e) {
    const n = k(null), { zIndex: o } = Xt(() => e.show, 1);
    Gt(
      () => e.show,
      () => e.lockScroll
    );
    const t = B(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), r = B(() => e.type ? b4[e.type] : "");
    function a() {
      n.value = setTimeout(() => {
        e.type !== "loading" && S(e["onUpdate:show"], !1);
      }, e.duration);
    }
    return de(
      () => e.show,
      (i) => {
        i ? (S(e.onOpen), a()) : (clearTimeout(n.value), S(e.onClose));
      }
    ), de(
      () => e._update,
      () => {
        clearTimeout(n.value), a();
      }
    ), fn(() => {
      e.show && (S(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: Em,
      zIndex: o,
      iconName: r,
      isForbidClick: t,
      n: h4,
      classes: g4,
      formatElevation: dn
    };
  }
});
zm.render = y4;
var Om = zm;
const { name: k4, n: $4 } = x("snackbar");
function w4(e, n) {
  const o = ne("var-snackbar-core");
  return h(), Oe(no, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [
    G(Qe, {
      name: `${e.n()}-fade`,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: fe(() => [
        G(o, He(e.$props, {
          class: e.n("transition")
        }), Et({
          default: fe(() => [
            N(e.$slots, "default")
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots.icon ? {
            name: "icon",
            fn: fe(() => [
              N(e.$slots, "icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots.action ? {
            name: "action",
            fn: fe(() => [
              N(e.$slots, "action")
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
const Tm = _({
  name: k4,
  components: { VarSnackbarCore: Om },
  props: As,
  setup() {
    const { disabled: e } = Go();
    return {
      disabled: e,
      n: $4
    };
  }
});
Tm.render = w4;
var li = Tm, C4 = Object.defineProperty, xc = Object.getOwnPropertySymbols, S4 = Object.prototype.hasOwnProperty, P4 = Object.prototype.propertyIsEnumerable, ed = (e, n, o) => n in e ? C4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ht = (e, n) => {
  for (var o in n || (n = {}))
    S4.call(n, o) && ed(e, o, n[o]);
  if (xc)
    for (var o of xc(n))
      P4.call(n, o) && ed(e, o, n[o]);
  return e;
};
const Em = ["loading", "success", "warning", "info", "error"];
let nd = 0, Hl = !1, Dm, Yt = !1;
const Bm = {
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
let Hn = Je([]), Ns = Bm;
const z4 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Bi = (e) => () => Eo(e) ? e() : e, O4 = {
  setup() {
    return () => {
      const e = Hn.map(({
        id: n,
        reactiveSnackOptions: o,
        _update: t
      }) => {
        const r = document.querySelector(".var-transition-group");
        o.forbidClick || o.type === "loading" ? r.classList.add("var-pointer-auto") : r.classList.remove("var-pointer-auto");
        const a = Ht({
          position: Yt ? "relative" : "absolute"
        }, M4(o.position)), {
          content: i,
          icon: l,
          action: s
        } = o, u = {
          default: Bi(i),
          icon: Bi(l),
          action: Bi(s)
        };
        return G(Om, He(o, {
          key: n,
          style: a,
          "data-id": n,
          _update: t,
          show: o.show,
          "onUpdate:show": (c) => o.show = c
        }), u);
      });
      return G(bh, He(z4, {
        style: {
          zIndex: An.zIndex
        },
        onAfterEnter: T4,
        onAfterLeave: E4
      }), {
        default: () => [e]
      });
    };
  }
}, eo = function(e) {
  const n = B4(e), o = Je(Ht(Ht({}, Ns), n));
  o.show = !0, Hl || (Hl = !0, Dm = ht(O4).unmountInstance);
  const {
    length: t
  } = Hn, r = {
    id: nd++,
    reactiveSnackOptions: o
  };
  if (t === 0 || Yt)
    D4(r);
  else {
    const a = `update-${nd}`;
    I4(o, a);
  }
  return {
    clear() {
      !Yt && Hn.length ? Hn[0].reactiveSnackOptions.show = !1 : o.show = !1;
    }
  };
};
Em.forEach((e) => {
  eo[e] = (n) => (tt(n) ? n.type = e : n = {
    content: n,
    type: e
  }, eo(n));
});
eo.allowMultiple = function(e = !1) {
  e !== Yt && (Hn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Yt = e);
};
eo.clear = function() {
  Hn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
eo.setDefaultOptions = function(e) {
  Ns = e;
};
eo.resetDefaultOptions = function() {
  Ns = Bm;
};
function T4(e) {
  const n = e.getAttribute("data-id"), o = Hn.find((t) => t.id === F(n));
  o && S(o.reactiveSnackOptions.onOpened);
}
function E4(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), o = Hn.find((r) => r.id === F(n));
  o && (o.animationEnd = !0, S(o.reactiveSnackOptions.onClosed)), Hn.every((r) => r.animationEnd) && (S(Dm), Hn = Je([]), Hl = !1);
}
function D4(e) {
  Hn.push(e);
}
function B4(e = {}) {
  return hn(e) ? {
    content: e
  } : e;
}
function I4(e, n) {
  const [o] = Hn;
  o.reactiveSnackOptions = Ht(Ht({}, o.reactiveSnackOptions), e), o._update = n;
}
function M4(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
eo.Component = li;
te(li);
te(li, eo);
ue(eo, As);
const gT = li;
var Yl = eo;
const Im = {
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
function A4(e, n, o) {
  const { direction: t, justify: r, index: a, lastIndex: i } = o;
  let l = "0";
  return t === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? l = `${In(e)} ${n} ${In(e)} 0` : l = `${In(e)} 0` : r === "space-around" ? l = `${In(e)} ${In(n)}` : r === "space-between" && (a === 0 ? l = `${In(e)} ${In(n)} ${In(e)} 0` : a === i ? l = `${In(e)} 0 ${In(e)} ${In(n)}` : l = `${In(e)} ${In(n)}`)), t === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const N4 = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: V4,
  n: fr,
  classes: od
} = x("space");
function L4(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Ge(e) ? e.map(ze) : [ze(e), ze(e)];
}
var si = _({
  name: V4,
  props: Im,
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
      let u = (o = S(n.default)) != null ? o : [];
      const [c, d] = L4(s, N4(s));
      u = Td(u);
      const f = u.length - 1, v = u.map((y, m) => {
        const b = A4(c, d, {
          direction: l,
          justify: r,
          index: m,
          lastIndex: f
        });
        return G("div", {
          class: od([l === "column", fr("--auto")]),
          style: {
            margin: b
          }
        }, [y]);
      });
      return G("div", {
        class: od(fr(), fr("$--box"), [t, fr("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: Pr(r),
          alignItems: Pr(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${c} / 2) 0` : void 0
        }
      }, [v]);
    };
  }
});
te(si);
ue(si, Im);
const bT = si;
var jl = si;
const Mm = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Be(on, "name"),
  inactiveIcon: Be(on, "name"),
  activeIconNamespace: Be(on, "namespace"),
  currentIconNamespace: Be(on, "namespace"),
  inactiveIconNamespace: Be(on, "namespace")
}, Am = Symbol("STEPS_BIND_STEP_KEY");
function R4() {
  const { bindChildren: e, childProviders: n } = bn(Am);
  return {
    step: n,
    bindStep: e
  };
}
function F4() {
  const { parentProvider: e, index: n, bindParent: o } = gn(Am);
  return o || Vn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: o
  };
}
const { name: U4, n: H4, classes: Y4 } = x("step"), j4 = { key: 3 };
function W4(e, n) {
  const o = ne("var-icon");
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      I(
        "div",
        {
          class: p(e.n(e.direction))
        },
        [
          I(
            "div",
            {
              class: p(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
              style: q({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
              onClick: n[0] || (n[0] = (...t) => e.click && e.click(...t))
            },
            [
              e.isActive ? (h(), Oe(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.activeIcon,
                namespace: e.activeIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.isCurrent && e.currentIcon ? (h(), Oe(o, {
                key: 1,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon,
                namespace: e.currentIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.inactiveIcon ? (h(), Oe(o, {
                key: 2,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon,
                namespace: e.inactiveIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : (h(), P(
                "span",
                j4,
                re(e.index + 1),
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
              onClick: n[1] || (n[1] = (...t) => e.click && e.click(...t))
            },
            [
              N(e.$slots, "default")
            ],
            2
            /* CLASS */
          )) : X("v-if", !0),
          I(
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
const Nm = _({
  name: U4,
  components: { VarIcon: Ze },
  props: Mm,
  setup() {
    const { index: e, steps: n, bindSteps: o } = F4(), { active: t, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = B(() => t.value === e.value), u = B(() => e.value !== -1 && F(t.value) > e.value);
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
      n: H4,
      classes: Y4,
      click: d
    };
  }
});
Nm.render = W4;
var ui = Nm;
te(ui);
ue(ui, Mm);
const yT = ui;
var Wl = ui;
const Vm = {
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
}, { name: K4, n: q4 } = x("steps");
function G4(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n()),
      style: q({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
    },
    [
      N(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Lm = _({
  name: K4,
  props: Vm,
  setup(e) {
    const n = B(() => e.active), o = B(() => e.activeColor), t = B(() => e.inactiveColor), r = B(() => e.direction), { bindStep: a } = R4();
    a({
      active: n,
      direction: r,
      activeColor: o,
      inactiveColor: t,
      clickStep: l
    });
    function l(s) {
      S(e.onClickStep, s);
    }
    return { n: q4 };
  }
});
Lm.render = G4;
var ci = Lm;
te(ci);
ue(ci, Vm);
const kT = ci;
var Kl = ci;
const Rm = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: X4, n: Z4 } = x("style-provider"), J4 = _({
  name: X4,
  props: Rm,
  setup(e, { slots: n }) {
    return () => Hr(
      e.tag,
      {
        class: Z4(),
        style: Rd(e.styleVars)
      },
      S(n.default)
    );
  }
});
var di = J4;
const Fm = "varlet-style-vars";
function td() {
  const e = document.head.querySelector(`#${Fm}`);
  e && document.head.removeChild(e);
}
function Q4(e) {
  const n = document.createElement("style");
  n.id = Fm, n.innerHTML = e, document.head.appendChild(n);
}
function fi(e) {
  if (e == null) {
    td();
    return;
  }
  const n = Rd(e ?? {}), o = Object.entries(n).reduce((t, [r, a]) => (t += `${r}:${a};`, t), `:root:root {
`);
  td(), Q4(`${o}
}`);
}
fi.Component = di;
te(di);
te(di, fi);
ue(fi, Rm);
const $T = di;
var ql = fi;
const Um = {
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
  onClick: V(),
  onBeforeChange: V(),
  onChange: V(),
  "onUpdate:modelValue": V()
}, { name: _4, n: x4, classes: eP } = x("switch"), nP = (e) => (Wo(""), e = e(), Ko(), e), oP = ["aria-checked"], tP = ["tabindex"], rP = /* @__PURE__ */ nP(() => /* @__PURE__ */ I(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ I("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
)), aP = [
  rP
];
function iP(e, n) {
  const o = ne("var-hover-overlay"), t = ne("var-form-details"), r = Ye("ripple"), a = Ye("hover");
  return Ie((h(), P("div", {
    class: p(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [
    I(
      "div",
      {
        ref: "switchRef",
        class: p(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
        style: q(e.styleComputed.switch),
        onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
      },
      [
        I(
          "div",
          {
            style: q(e.styleComputed.track),
            class: p(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
          },
          null,
          6
          /* CLASS, STYLE */
        ),
        Ie((h(), P("div", {
          class: p(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
          style: q(e.styleComputed.ripple),
          tabindex: e.disabled || e.formDisabled ? void 0 : "0",
          onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
          onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
        }, [
          I(
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
                [...aP],
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
        ], 46, tP)), [
          [r, {
            disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly
          }]
        ])
      ],
      6
      /* CLASS, STYLE */
    ),
    G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
  ], 10, oP)), [
    [a, e.hover, "desktop"]
  ]);
}
const Hm = _({
  name: _4,
  components: {
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  directives: { Ripple: tn, Hover: Tn },
  props: Um,
  setup(e) {
    const n = k(null), o = k(!1), { bindForm: t, form: r } = jn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Yn(), { hovering: u, handleHovering: c } = Jn(), d = B(() => e.modelValue === e.activeValue), f = B(() => {
      const { size: z, color: L, closeColor: T, loadingColor: E, variant: D } = e;
      return {
        handle: {
          width: wn(z),
          height: wn(z),
          backgroundColor: d.value ? L : T,
          color: E
        },
        ripple: {
          left: d.value ? wn(z, 0.5) : `-${wn(z, D ? 1 / 3 : 0.5)}`,
          color: d.value ? L : T || "currentColor",
          width: wn(z, 2),
          height: wn(z, 2)
        },
        track: {
          width: wn(z, D ? 13 / 6 : 1.9),
          height: wn(z, D ? 4 / 3 : 0.72),
          borderRadius: wn(z, 2 / 3),
          filter: d.value || a != null && a.value ? void 0 : `brightness(${D ? 1 : 0.6})`,
          backgroundColor: d.value ? L : T,
          borderWidth: D && !d.value ? wn(z, 1 / 12) : void 0
        },
        switch: {
          width: wn(z, D ? 13 / 6 : 2),
          height: wn(z, D ? 4 / 3 : 1.2)
        }
      };
    }), v = B(() => wn(e.size, 0.8));
    S(t, {
      reset: O,
      validate: C,
      resetValidation: s
    }), We(() => window, "keydown", m), We(() => window, "keyup", b);
    function m(z) {
      o.value && ((z.key === " " || z.key === "Enter") && Ne(z), z.key === "Enter" && n.value.click());
    }
    function b(z) {
      !o.value || z.key !== " " || (Ne(z), n.value.click());
    }
    function C() {
      return l(e.rules, e.modelValue);
    }
    function w(z) {
      Ke(() => {
        const { validateTrigger: L, rules: T, modelValue: E } = e;
        i(L, z, T, E);
      });
    }
    function g(z) {
      const {
        onClick: L,
        onChange: T,
        disabled: E,
        loading: D,
        readonly: M,
        activeValue: Y,
        inactiveValue: j,
        lazyChange: R,
        "onUpdate:modelValue": K,
        onBeforeChange: W
      } = e;
      if (E || r != null && r.disabled.value || (S(L, z), D || M || r != null && r.readonly.value))
        return;
      const ce = d.value ? j : Y;
      R ? S(W, ce, (Q) => {
        S(K, Q), w("onLazyChange");
      }) : (S(T, ce), S(K, ce), w("onChange"));
    }
    function $(z) {
      e.disabled || r != null && r.disabled.value || c(z);
    }
    function O() {
      S(e["onUpdate:modelValue"], e.inactiveValue), s();
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
      n: x4,
      classes: eP,
      formatElevation: dn,
      multiplySizeUnit: wn,
      switchActive: g,
      hover: $
    };
  }
});
Hm.render = iP;
var pi = Hm;
te(pi);
ue(pi, Um);
const wT = pi;
var Gl = pi;
const Ym = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: V()
}, jm = Symbol("TABS_BIND_TAB_KEY");
function lP() {
  const { childProviders: e, bindChildren: n, length: o } = bn(jm);
  return {
    length: o,
    tabList: e,
    bindTabList: n
  };
}
function sP() {
  const { parentProvider: e, bindParent: n, index: o } = gn(jm);
  return n || Vn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: o,
    tabs: e,
    bindTabs: n
  };
}
const { name: uP, n: pr, classes: cP } = x("tab");
function dP(e, n) {
  const o = Ye("ripple");
  return Ie((h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
      ref: "tabEl",
      style: q({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      N(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: e.disabled || !e.ripple }]
  ]);
}
const Wm = _({
  name: uP,
  directives: { Ripple: tn },
  props: Ym,
  setup(e) {
    const n = k(null), o = B(() => n.value), t = B(() => e.name), r = B(() => e.disabled), { index: a, tabs: i, bindTabs: l } = sP(), { onTabClick: s, active: u, activeColor: c, inactiveColor: d, disabledColor: f, itemDirection: v, resize: y } = i, m = {
      name: t,
      index: a,
      disabled: r,
      element: o
    };
    l(m), de(() => [e.name, e.disabled], y);
    function b() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function C() {
      return e.disabled ? f.value : b() ? c.value : d.value;
    }
    function w() {
      return e.disabled ? pr("$-tab--disabled") : b() ? pr("$-tab--active") : pr("$-tab--inactive");
    }
    function g($) {
      const { disabled: O, name: z, onClick: L } = e;
      O || (S(L, z ?? a.value, $), s(m));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: c,
      inactiveColor: d,
      itemDirection: v,
      n: pr,
      classes: cP,
      computeColorStyle: C,
      computeColorClass: w,
      handleClick: g
    };
  }
});
Wm.render = dP;
var vi = Wm;
te(vi);
ue(vi, Ym);
const CT = vi;
var Xl = vi;
const Km = {
  name: [String, Number]
}, { name: fP, n: pP, classes: vP } = x("tab-item");
function mP(e, n) {
  const o = ne("var-swipe-item");
  return h(), Oe(o, {
    class: p(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: fe(() => [
      N(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
const qm = _({
  name: fP,
  components: { VarSwipeItem: Rt },
  props: Km,
  setup(e) {
    const n = k(!1), o = B(() => e.name), { index: t, bindTabsItems: r } = lS(), { bindLists: a } = sS(), i = {
      index: t,
      name: o,
      current: B(() => n.value),
      setCurrent: l
    };
    r(i), a(i);
    function l(s) {
      n.value = s;
    }
    return {
      current: n,
      n: pP,
      classes: vP
    };
  }
});
qm.render = mP;
var mi = qm;
te(mi);
ue(mi, Km);
const ST = mi;
var Zl = mi;
const Gm = {
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
}, { name: hP, n: gP, classes: bP } = x("table");
function yP(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [
      I(
        "div",
        {
          class: p(e.n("main")),
          style: q({ height: e.toSizeUnit(e.scrollerHeight) })
        },
        [
          I(
            "table",
            {
              class: p(e.n("table")),
              style: q({ width: e.toSizeUnit(e.fullWidth) })
            },
            [
              N(e.$slots, "default")
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
          N(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Xm = _({
  name: hP,
  props: Gm,
  setup: () => ({
    toSizeUnit: ze,
    n: gP,
    classes: bP,
    formatElevation: dn
  })
});
Xm.render = yP;
var hi = Xm;
te(hi);
ue(hi, Gm);
const PT = hi;
var Jl = hi;
const Zm = {
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
  stickyCssMode: Be(Pt, "cssMode"),
  stickyZIndex: Be(Pt, "zIndex"),
  offsetTop: Be(Pt, "offsetTop"),
  onClick: V(),
  onChange: V(),
  "onUpdate:active": V()
};
var rd = (e, n, o) => new Promise((t, r) => {
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
const { name: kP, n: $P, classes: wP } = x("tabs");
function CP(e, n) {
  return h(), Oe(vt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: fe(() => [
      I(
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
          I(
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
              N(e.$slots, "default"),
              I(
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
                  I(
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
const Jm = _({
  name: kP,
  components: { VarSticky: ct },
  inheritAttrs: !1,
  props: Zm,
  setup(e) {
    const n = k("0px"), o = k("0px"), t = k("0px"), r = k("0px"), a = k(!1), i = k(null), l = B(() => e.active), s = B(() => e.activeColor), u = B(() => e.inactiveColor), c = B(() => e.disabledColor), d = B(() => e.itemDirection), f = k(null), v = B(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: y, bindTabList: m, length: b } = lP();
    m({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: c,
      itemDirection: d,
      resize: E,
      onTabClick: w
    }), de(
      () => b.value,
      () => rd(this, null, function* () {
        yield kn(), E();
      })
    ), de(() => [e.active, e.scrollable], E), To(E), to(E);
    function w(M) {
      var Y;
      const j = (Y = M.name.value) != null ? Y : M.index.value, { active: R, onChange: K, onClick: W } = e;
      S(e["onUpdate:active"], j), S(W, j), j !== R && S(K, j);
    }
    function g() {
      return y.find(({ name: M }) => e.active === M.value);
    }
    function $(M) {
      return y.find(({ index: Y }) => (M ?? e.active) === Y.value);
    }
    function O() {
      if (b.value === 0)
        return;
      const { active: M } = e;
      if (On(M)) {
        const Y = Mn(M, 0, b.value - 1);
        return S(e["onUpdate:active"], Y), $(Y);
      }
    }
    function z() {
      a.value = e.scrollable === "always" || y.length >= 5;
    }
    function L({ element: M }) {
      const Y = M.value;
      Y && (e.layoutDirection === "horizontal" ? (n.value = `${Y.offsetWidth}px`, t.value = `${Y.offsetLeft}px`) : (o.value = `${Y.offsetHeight}px`, r.value = `${Y.offsetTop}px`));
    }
    function T({ element: M }) {
      if (!a.value)
        return;
      const Y = i.value, j = M.value;
      if (e.layoutDirection === "horizontal") {
        const R = j.offsetLeft + j.offsetWidth / 2 - Y.offsetWidth / 2;
        Bt(Y, {
          left: R,
          animation: Li
        });
      } else {
        const R = j.offsetTop + j.offsetHeight / 2 - Y.offsetHeight / 2;
        Bt(Y, {
          top: R,
          animation: Li
        });
      }
    }
    function E() {
      const M = g() || $() || O();
      !M || M.disabled.value || (z(), L(M), T(M));
    }
    function D() {
      return rd(this, null, function* () {
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
      Transition: Qe,
      toSizeUnit: ze,
      n: $P,
      classes: wP,
      resize: E,
      resizeSticky: D,
      formatElevation: dn
    };
  }
});
Jm.render = CP;
var gi = Jm;
te(gi);
ue(gi, Zm);
const zT = gi;
var Ql = gi;
const Qm = {
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
var SP = (e, n, o) => new Promise((t, r) => {
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
const { name: PP, n: zP } = x("tabs-items");
function OP(e, n) {
  const o = ne("var-swipe");
  return h(), Oe(o, {
    class: p(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: fe(() => [
      N(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
const _m = _({
  name: PP,
  components: { VarSwipe: Lt },
  props: Qm,
  setup(e) {
    const n = k(null), { tabItemList: o, bindTabItem: t, length: r } = iS();
    t({}), de(() => e.active, s), de(
      () => r.value,
      () => SP(this, null, function* () {
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
      v && (o.forEach(({ setCurrent: y }) => y(!1)), v.setCurrent(!0), (f = n.value) == null || f.to(v.index.value));
    }
    function u(d) {
      var f;
      const v = o.find(({ index: m }) => m.value === d), y = (f = v.name.value) != null ? f : v.index.value;
      S(e["onUpdate:active"], y);
    }
    function c() {
      return n.value;
    }
    return {
      swipe: n,
      n: zP,
      handleSwipeChange: u,
      getSwipe: c
    };
  }
});
_m.render = OP;
var bi = _m;
te(bi);
ue(bi, Qm);
const OT = bi;
var _l = bi, TP = {
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
}, EP = {
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
}, DP = {
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
}, BP = {
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
}, IP = {
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
}, MP = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, AP = {
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
}, NP = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, VP = {
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
}, LP = {
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
}, RP = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, FP = {
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
}, UP = {
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
}, HP = {
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
}, YP = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, jP = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, WP = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, KP = {
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
}, qP = {
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
}, GP = {
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
}, XP = {
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
}, ZP = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, JP = {
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
}, QP = {
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
}, _P = {
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
}, xP = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, ez = {
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
}, nz = {
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
}, oz = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
}, tz = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, rz = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, az = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, iz = {
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
}, lz = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, sz = {
  "--watermark-content-color": "#ffffff"
}, uz = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, cz = {
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
}, dz = {
  "--avatar-group-offset": "-10px"
}, fz = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, pz = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, vz = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, mz = {
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
}, hz = {
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
}, gz = {
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
}, bz = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, yz = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, kz = {
  "--icon-size": "20px"
}, $z = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, wz = {
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
}, Cz = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, Sz = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, Pz = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, zz = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, Oz = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, Tz = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "4px"
}, Ez = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, Dz = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, Bz = {
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
}, Iz = {
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
}, Mz = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, Az = {
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
}, Nz = {
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
}, Vz = {
  "--select-scroller-background": "#272727",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-scroller-border-radius": "2px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, Lz = Object.defineProperty, ad = Object.getOwnPropertySymbols, Rz = Object.prototype.hasOwnProperty, Fz = Object.prototype.propertyIsEnumerable, id = (e, n, o) => n in e ? Lz(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, he = (e, n) => {
  for (var o in n || (n = {}))
    Rz.call(n, o) && id(e, o, n[o]);
  if (ad)
    for (var o of ad(n))
      Fz.call(n, o) && id(e, o, n[o]);
  return e;
}, Uz = he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he({
  "--font-size-xs": "10px",
  "--font-size-sm": "12px",
  "--font-size-md": "14px",
  "--font-size-lg": "16px",
  "--icon-size-xs": "16px",
  "--icon-size-sm": "18px",
  "--icon-size-md": "20px",
  "--icon-size-lg": "22px",
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-on-primary": "#fff",
  "--color-on-info": "#fff",
  "--color-on-success": "#fff",
  "--color-on-warning": "#fff",
  "--color-on-danger": "#fff",
  "--color-primary-container": "#4a7afe",
  "--color-info-container": "#10afef",
  "--color-success-container": "#10c48f",
  "--color-warning-container": "#ff8800",
  "--color-danger-container": "#ef5350",
  "--color-on-primary-container": "#fff",
  "--color-on-info-container": "#fff",
  "--color-on-success-container": "#fff",
  "--color-on-warning-container": "#fff",
  "--color-on-danger-container": "#fff",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575",
  "--color-surface-container": "#1e1e1e",
  "--color-surface-container-low": "#1e1e1e",
  "--color-surface-container-high": "#272727",
  "--color-surface-container-highest": "#303030",
  "--color-inverse-surface": "#fff",
  "--color-outline": "rgba(255, 255, 255, 0.2)",
  "--color-on-surface-variant": "#fff",
  "--opacity-disabled": "0.6",
  "--opacity-hover": "0.15",
  "--opacity-focus": "0.2",
  "--cubic-bezier": "cubic-bezier(0.25, 0.8, 0.5, 1)",
  "--shadow-key-umbra-opacity": "rgba(0, 0, 0, 0.2)",
  "--shadow-key-penumbra-opacity": "rgba(0, 0, 0, 0.14)",
  "--shadow-key-ambient-opacity": "rgba(0, 0, 0, 0.12)"
}, DP), IP), BP), QP), VP), qP), xP), ZP), YP), LP), TP), AP), EP), _P), NP), jP), XP), GP), UP), JP), FP), WP), MP), RP), HP), ez), nz), oz), KP), tz), rz), az), iz), lz), sz), uz), cz), dz), fz), pz), vz), mz), hz), gz), bz), yz), kz), $z), wz), Cz), Sz), Pz), zz), Oz), Tz), Ez), Dz), Bz), Iz), Mz), Az), Nz), Vz), Hz = {
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
}, Yz = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, jz = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, Wz = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, Kz = {
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
}, qz = {
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
}, Gz = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, Xz = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, Zz = {
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
}, Jz = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-border-radius": "12px"
}, Qz = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, _z = {
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
}, xz = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, eO = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, nO = {
  "--card-border-radius": "12px",
  "--card-background": "var(--color-surface-container-low)",
  "--card-image-height": "188px",
  "--card-title-color": "#1D1B20",
  "--card-title-font-size": "16px",
  "--card-title-padding": "0 16px",
  "--card-title-margin": "16px 0 0 0",
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
}, oO = {
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
}, tO = {
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
}, rO = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, aO = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, iO = {
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
}, lO = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, sO = {
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
}, uO = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, cO = {
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
}, dO = {
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
}, fO = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, pO = {
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
}, vO = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, mO = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, hO = {
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
}, gO = {
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
}, bO = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, yO = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, kO = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, $O = {
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
}, wO = {
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
}, CO = {
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
}, SO = {
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
}, PO = {
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
}, zO = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, OO = {
  "--avatar-group-offset": "-10px"
}, TO = {
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
}, EO = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, DO = {
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
}, BO = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, IO = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, MO = {
  "--icon-size": "20px"
}, AO = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, NO = {
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
}, VO = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, LO = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, RO = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, FO = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, UO = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, HO = {
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
}, YO = {
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
}, jO = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, WO = {
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
}, KO = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, qO = {
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
}, GO = {
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
}, XO = {
  "--watermark-content-color": "#808080"
}, ZO = {
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
}, JO = Object.defineProperty, ld = Object.getOwnPropertySymbols, QO = Object.prototype.hasOwnProperty, _O = Object.prototype.propertyIsEnumerable, sd = (e, n, o) => n in e ? JO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ge = (e, n) => {
  for (var o in n || (n = {}))
    QO.call(n, o) && sd(e, o, n[o]);
  if (ld)
    for (var o of ld(n))
      _O.call(n, o) && sd(e, o, n[o]);
  return e;
}, xO = ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge({
  "--font-size-xs": "10px",
  "--font-size-sm": "12px",
  "--font-size-md": "14px",
  "--font-size-lg": "16px",
  "--icon-size-xs": "16px",
  "--icon-size-sm": "18px",
  "--icon-size-md": "20px",
  "--icon-size-lg": "22px",
  "--color-body": "#fef7ff",
  "--color-text": "#000",
  "--color-primary": "#6750A4",
  "--color-info": "#625B71",
  "--color-success": "#536525",
  "--color-warning": "#7D5260",
  "--color-danger": "#B3261E",
  "--color-on-primary": "#fff",
  "--color-on-info": "#fff",
  "--color-on-success": "#fff",
  "--color-on-warning": "#fff",
  "--color-on-danger": "#fff",
  "--color-primary-container": "#EADDFF",
  "--color-info-container": "#E8DEF8",
  "--color-success-container": "#D5EC9C",
  "--color-warning-container": "#FFD8E4",
  "--color-danger-container": "#F9DEDC",
  "--color-on-primary-container": "#21005D",
  "--color-on-info-container": "#1D192B",
  "--color-on-success-container": "#151F00",
  "--color-on-warning-container": "#31111D",
  "--color-on-danger-container": "#410E0B",
  "--color-disabled": "#e0e0e0",
  "--color-text-disabled": "#aaa",
  "--color-surface-container": "#F3EDF7",
  "--color-surface-container-low": "#F7F2FA",
  "--color-surface-container-high": "#ECE6F0",
  "--color-surface-container-highest": "#E6E0E9",
  "--color-inverse-surface": "#322F35",
  "--color-outline": "#CAC4D0",
  "--color-on-surface-variant": "#49454F",
  "--opacity-disabled": "0.6",
  "--opacity-hover": "0.12",
  "--opacity-focus": "0.2",
  "--cubic-bezier": "cubic-bezier(0.25, 0.8, 0.5, 1)",
  "--shadow-key-umbra-opacity": "rgba(0, 0, 0, 0.2)",
  "--shadow-key-penumbra-opacity": "rgba(0, 0, 0, 0.14)",
  "--shadow-key-ambient-opacity": "rgba(0, 0, 0, 0.12)"
}, Hz), Yz), jz), Wz), Kz), qz), Gz), Xz), Zz), Jz), Qz), _z), xz), eO), nO), oO), tO), rO), aO), iO), lO), sO), uO), cO), dO), fO), pO), vO), mO), hO), gO), bO), yO), kO), $O), wO), CO), SO), PO), zO), OO), TO), EO), DO), BO), IO), MO), AO), NO), VO), LO), RO), FO), UO), HO), YO), jO), WO), KO), qO), GO), XO), ZO), e3 = {
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
}, n3 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, o3 = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, t3 = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, r3 = {
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
}, a3 = {
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
}, i3 = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, l3 = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, s3 = {
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
}, u3 = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "12px"
}, c3 = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, d3 = {
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
}, f3 = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, p3 = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, v3 = {
  "--card-border-radius": "12px",
  "--card-background": "var(--color-surface-container-highest)",
  "--card-image-height": "188px",
  "--card-title-color": "var(--color-inverse-surface)",
  "--card-title-font-size": "16px",
  "--card-title-padding": "0 16px",
  "--card-title-margin": "16px 0 0 0",
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
}, m3 = {
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
}, h3 = {
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
}, g3 = {
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
}, b3 = {
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
}, y3 = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, k3 = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, $3 = {
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
}, w3 = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, C3 = {
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
}, S3 = {
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
}, P3 = {
  "--watermark-content-color": "#ffffff"
}, z3 = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, O3 = {
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
}, T3 = {
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
}, E3 = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, D3 = {
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
}, B3 = {
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
}, I3 = {
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
}, M3 = {
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
}, A3 = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, N3 = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, V3 = {
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
}, L3 = {
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
}, R3 = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, F3 = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, U3 = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, H3 = {
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
}, Y3 = {
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
}, j3 = {
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
}, W3 = {
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
}, K3 = {
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
}, q3 = {
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
}, G3 = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, X3 = {
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
}, Z3 = {
  "--avatar-group-offset": "-10px"
}, J3 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, Q3 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, _3 = {
  "--icon-size": "20px"
}, x3 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, e8 = {
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
}, n8 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, o8 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, t8 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, r8 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, a8 = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, i8 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, l8 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, s8 = {
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
}, u8 = Object.defineProperty, ud = Object.getOwnPropertySymbols, c8 = Object.prototype.hasOwnProperty, d8 = Object.prototype.propertyIsEnumerable, cd = (e, n, o) => n in e ? u8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, be = (e, n) => {
  for (var o in n || (n = {}))
    c8.call(n, o) && cd(e, o, n[o]);
  if (ud)
    for (var o of ud(n))
      d8.call(n, o) && cd(e, o, n[o]);
  return e;
}, f8 = be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be({
  "--font-size-xs": "10px",
  "--font-size-sm": "12px",
  "--font-size-md": "14px",
  "--font-size-lg": "16px",
  "--icon-size-xs": "16px",
  "--icon-size-sm": "18px",
  "--icon-size-md": "20px",
  "--icon-size-lg": "22px",
  "--color-body": "#141218",
  "--color-text": "#fff",
  "--color-primary": "#D0BCFF",
  "--color-info": "#CCC2DC",
  "--color-success": "#BACF83",
  "--color-warning": "#EFB8C8",
  "--color-danger": "#F2B8B5",
  "--color-on-primary": "#381E72",
  "--color-on-info": "#332D41",
  "--color-on-success": "#273500",
  "--color-on-warning": "#492532",
  "--color-on-danger": "#601410",
  "--color-primary-container": "#5B4494",
  "--color-info-container": "#575065",
  "--color-success-container": "#485A19",
  "--color-warning-container": "#6F4854",
  "--color-danger-container": "#9D3A37",
  "--color-on-primary-container": "#EADDFF",
  "--color-on-info-container": "#E8DEF8",
  "--color-on-success-container": "#D5EC9C",
  "--color-on-warning-container": "#FFD8E4",
  "--color-on-danger-container": "#F9DEDC",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575",
  "--color-surface-container": "#211F26",
  "--color-surface-container-low": "#1D1B20",
  "--color-surface-container-high": "#2B2930",
  "--color-surface-container-highest": "#36343B",
  "--color-inverse-surface": "#e6e0e9",
  "--color-outline": "#49454F",
  "--color-on-surface-variant": "#CAC4D0",
  "--opacity-disabled": "0.6",
  "--opacity-hover": "0.12",
  "--opacity-focus": "0.2",
  "--cubic-bezier": "cubic-bezier(0.25, 0.8, 0.5, 1)",
  "--shadow-key-umbra-opacity": "rgba(0, 0, 0, 0.2)",
  "--shadow-key-penumbra-opacity": "rgba(0, 0, 0, 0.14)",
  "--shadow-key-ambient-opacity": "rgba(0, 0, 0, 0.12)"
}, e3), n3), o3), t3), r3), a3), i3), l3), s3), u3), c3), d3), f3), p3), v3), m3), h3), g3), b3), y3), k3), $3), w3), C3), S3), P3), z3), O3), T3), E3), D3), B3), I3), M3), A3), N3), V3), L3), R3), F3), U3), H3), Y3), j3), W3), K3), q3), G3), X3), Z3), J3), Q3), _3), x3), e8), n8), o8), t8), r8), a8), i8), l8), s8);
function p8(e, n = {}) {
  const { viewportWidth: o = 375, viewportUnit: t = "vmin", unitPrecision: r = 6 } = n;
  return Object.entries(e).reduce((a, [i, l]) => (a[i] = l.includes("px") ? l.replace(
    /(\d+(\.\d+)?)px/g,
    (s, u) => `${Number((u / o * 100).toFixed(r))}${t}`
  ) : l, a), {});
}
const v8 = { dark: Uz, md3Light: xO, md3Dark: f8, toViewport: p8 }, TT = null;
var xl = v8;
const Fn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Cn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], dd = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], xm = {
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
}, eh = (e, n) => e === "24hr" || n === "am", Vs = (e, n, o) => {
  const t = Fn.findIndex((a) => F(a) === F(o)), r = eh(e, n) ? o : Cn[t];
  return {
    hourStr: r,
    hourNum: F(r)
  };
}, zn = (e) => {
  const [n, o, t] = e.split(":");
  return {
    hour: F(n),
    minute: F(o),
    second: F(t)
  };
}, nh = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: c, hourNum: d } = Vs(r, a, i);
  let f = !1, v = !1;
  if (u.includes(c))
    return !0;
  if (l && !s) {
    const { hour: y, minute: m } = zn(l);
    f = y === d && t > m;
  }
  if (!l && s) {
    const { hour: y, minute: m } = zn(s);
    f = y === d && t < m;
  }
  if (l && s) {
    const { hour: y, minute: m } = zn(l), { hour: b, minute: C } = zn(s);
    f = b === d && t < C || y === d && t > m;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (o = e.allowedTime) == null ? void 0 : o.minutes(t)), f || v;
}, oh = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: c } = e, { hourStr: d, hourNum: f } = Vs(r, a, i);
  let v = !1, y = !1;
  if (c.includes(d))
    return !0;
  if (s && !u) {
    const { hour: m, minute: b, second: C } = zn(s);
    v = m === f && b < l || b === l && t > C;
  }
  if (!s && u) {
    const { hour: m, minute: b, second: C } = zn(u);
    v = m === f && b > l || b === l && t > C;
  }
  if (s && u) {
    const { hour: m, minute: b, second: C } = zn(s), { hour: w, minute: g, second: $ } = zn(u);
    v = m === f && b < l || w === f && g > l || m === f && b === l && t > C || w === f && g === l && t < $;
  }
  return (n = e.allowedTime) != null && n.seconds && (y = (o = e.allowedTime) == null ? void 0 : o.seconds(t)), v || y;
}, { n: m8, classes: h8 } = x("time-picker");
function g8(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n("clock"))
    },
    [
      I(
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
        Re,
        null,
        _e(e.timeScales, (o, t) => (h(), P(
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
            style: q(e.getStyle(t, o, !1))
          },
          re(o),
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
            Re,
            null,
            _e(e.hours24, (o, t) => (h(), P(
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
                style: q(e.getStyle(t, o, !0))
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
const th = _({
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
    const o = k(null), t = k([]), r = k([]), a = B(() => ({
      transform: `rotate(${F(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = B(() => {
      if (e.rad === void 0)
        return;
      const m = e.rad / 30;
      return m >= 0 ? m : m + 12;
    }), l = B(() => e.type === "hour" ? Fn : dd), s = (m, b) => {
      m = m ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const C = e.type === "minute" ? nh : oh, w = {
        time: F(m),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: F(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return b && e.type === "minute" && Reflect.deleteProperty(w, "minute"), C(w);
    }, u = () => {
      if (i.value === void 0)
        return e.color;
      const m = e.isInner ? Cn[i.value] : l.value[i.value];
      return l.value === dd ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : d(m) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, c = (m, b) => b ? i.value === m && e.isInner : i.value === m && (!e.isInner || e.type !== "hour"), d = (m) => {
      if (e.type === "hour") {
        if (eh(e.format, e.ampm))
          return t.value.includes(m);
        const b = Fn.findIndex((C) => C === m);
        return r.value.includes(b);
      }
      return s(m, !0);
    }, f = (m, b, C) => {
      const w = 2 * Math.PI / 12 * m - Math.PI / 2, g = 50 * (1 + Math.cos(w)), $ = 50 * (1 + Math.sin(w)), O = () => c(m, C) ? d(b) ? {
        backgroundColor: "var(--time-picker-clock-item-disable-background)",
        color: "var(--time-picker-clock-item-disable-color)"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: z, color: L } = O();
      return {
        left: `${g}%`,
        top: `${$}%`,
        backgroundColor: z,
        color: L
      };
    }, v = () => {
      const { width: m, height: b } = an(o.value);
      return {
        width: m,
        height: b
      };
    }, y = () => {
      if (i.value === void 0)
        return;
      const m = e.ampm === "am" ? Fn : Cn;
      return Fo(m[i.value], 2, "0");
    };
    return de([i, () => e.isInner], ([m, b], [C, w]) => {
      if (m === C && b === w || e.type !== "hour" || i.value === void 0)
        return;
      const $ = b ? Cn[i.value] : y(), O = e.useSeconds ? `:${e.time.second}` : "", z = `${$}:${e.time.minute}${O}`;
      e.preventNextUpdate || n("update", z), n("change-prevent-update");
    }), de(
      () => e.rad,
      (m, b) => {
        if (e.type === "hour" || m === void 0 || b === void 0)
          return;
        const C = m / 6 >= 0 ? m / 6 : m / 6 + 60, w = b / 6 >= 0 ? b / 6 : b / 6 + 60;
        if (C === w)
          return;
        let g;
        const { hourStr: $ } = Vs(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const O = se().minute(C).format("mm"), z = e.useSeconds ? `:${e.time.second}` : "";
          g = `${$}:${O}${z}`;
        }
        if (e.type === "second") {
          const O = se().second(C).format("ss"), z = e.useSeconds ? `:${O}` : "";
          g = `${$}:${e.time.minute}${z}`;
        }
        n("update", g);
      }
    ), de(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([m, b, C]) => {
        if (t.value = [], m && !b) {
          const { hour: w } = zn(m), g = Fn.filter((O) => F(O) > w), $ = Cn.filter((O) => F(O) > w);
          t.value = [...g, ...$];
        }
        if (!m && b) {
          const { hour: w } = zn(b), g = Fn.filter((O) => F(O) < w), $ = Cn.filter((O) => F(O) < w);
          t.value = [...g, ...$];
        }
        if (m && b) {
          const { hour: w } = zn(m), { hour: g } = zn(b), $ = Fn.filter((z) => F(z) < g || F(z) > w), O = Cn.filter((z) => F(z) < g || F(z) > w);
          t.value = [...$, ...O];
        }
        if (C != null && C.hours) {
          const { hours: w } = C, g = Fn.filter((O) => !w(F(O))), $ = Cn.filter((O) => !w(F(O)));
          t.value = [.../* @__PURE__ */ new Set([...t.value, ...g, ...$])];
        }
        r.value = t.value.map((w) => Cn.findIndex((g) => w === g)).filter((w) => w >= 0);
      },
      { immediate: !0, deep: !0 }
    ), {
      n: m8,
      classes: h8,
      hours24: Cn,
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
th.render = g8;
var b8 = th;
const { name: y8, n: k8, classes: $8 } = x("time-picker");
function w8(e, n) {
  var o;
  const t = ne("clock");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [
      I(
        "div",
        {
          class: p(e.n("title")),
          style: q({ background: e.titleColor || e.color })
        },
        [
          I(
            "div",
            {
              class: p(e.n("title-hint"))
            },
            re((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("timePickerHint")),
            3
            /* TEXT, CLASS */
          ),
          I(
            "div",
            {
              class: p(e.n("title-time-container"))
            },
            [
              I(
                "div",
                {
                  class: p(e.n("title-time"))
                },
                [
                  I(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
                      onClick: n[0] || (n[0] = (r) => e.checkPanel("hour"))
                    },
                    re(e.time.hour),
                    3
                    /* TEXT, CLASS */
                  ),
                  I(
                    "span",
                    {
                      class: p(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  ),
                  I(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
                      onClick: n[1] || (n[1] = (r) => e.checkPanel("minute"))
                    },
                    re(e.time.minute),
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
                  )) : X("v-if", !0),
                  e.useSeconds ? (h(), P(
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
              e.format === "ampm" ? (h(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("title-ampm"))
                },
                [
                  I(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
                      onClick: n[3] || (n[3] = (r) => e.checkAmpm("am"))
                    },
                    " AM ",
                    2
                    /* CLASS */
                  ),
                  I(
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
      I(
        "div",
        {
          class: p(e.n("body"))
        },
        [
          I(
            "div",
            {
              class: p(e.n("clock-container")),
              onTouchstart: n[5] || (n[5] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchmove: n[6] || (n[6] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchend: n[7] || (n[7] = (...r) => e.end && e.end(...r)),
              ref: "container"
            },
            [
              G(Qe, {
                name: `${e.n()}-panel-fade`
              }, {
                default: fe(() => [
                  (h(), Oe(t, {
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
          N(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const rh = _({
  name: y8,
  components: { Clock: b8 },
  props: xm,
  setup(e) {
    const n = k(null), o = k(null), t = k(null), r = k(!1), a = k(!1), i = k(!1), l = k(!1), s = k(!1), u = k(!1), c = k(!1), d = k(0), f = k(0), v = k(), y = k("hour"), m = k("am"), b = k({
      hour: "00",
      minute: "00",
      second: "00"
    }), C = Je({
      x: 0,
      y: 0
    }), w = Je({
      x: [],
      y: []
    }), g = B(() => y.value === "hour" ? v.value : y.value === "minute" ? d.value : f.value), { t: $ } = ro();
    de(
      () => e.modelValue,
      (ie) => {
        if (ie) {
          const { hour: U, minute: J, second: ae } = zn(ie), A = se().hour(U).format("hh"), H = se().hour(U).format("HH"), ee = se().minute(J).format("mm"), ke = se().second(ae).format("ss");
          v.value = (A === "12" ? 0 : F(A)) * 30, d.value = F(ee) * 6, f.value = F(ke) * 6, b.value = M(ie), e.format !== "24hr" && (m.value = Fo(`${U}`, 2, "0") === H && Cn.includes(H) ? "pm" : "am"), r.value = e.format === "24hr" && Cn.includes(H);
        }
      },
      { immediate: !0 }
    );
    function O(ie) {
      S(e["onUpdate:modelValue"], ie), S(e.onChange, ie);
    }
    function z(ie) {
      return ie * 57.29577951308232;
    }
    function L(ie) {
      l.value = !1, c.value = !1, y.value = ie;
    }
    function T(ie) {
      const { disableHour: U } = t.value, J = Fn.findIndex((H) => F(H) === F(b.value.hour)), ae = ie === "am" ? Fn : Cn;
      return [...ae.slice(J), ...ae.slice(0, J)].find((H, ee) => (a.value = ee !== 0, !U.includes(H)));
    }
    function E(ie) {
      if (e.readonly)
        return;
      m.value = ie;
      const U = T(ie);
      if (!U)
        return;
      const J = e.useSeconds ? `:${b.value.second}` : "", ae = `${Fo(U, 2, "0")}:${b.value.minute}${J}`;
      O(ae);
    }
    function D(ie, U) {
      const J = ie >= w.x[0] && ie <= w.x[1], ae = U >= w.y[0] && U <= w.y[1];
      return J && ae;
    }
    function M(ie) {
      const U = e.format === "24hr" ? "HH" : "hh", { hour: J, minute: ae, second: A } = zn(ie);
      return {
        hour: se().hour(J).format(U),
        minute: se().minute(ae).format("mm"),
        second: se().second(A).format("ss")
      };
    }
    function Y(ie) {
      const U = ie / 30;
      return U >= 0 ? U : U + 12;
    }
    function j() {
      const { width: ie, height: U } = t.value.getSize(), J = C.x - ie / 2 - 8, ae = C.x + ie / 2 + 8, A = C.y - U / 2 - 8, H = C.y + U / 2 + 8;
      return {
        rangeXMin: J,
        rangeXMax: ae,
        rangeYMin: A,
        rangeYMax: H
      };
    }
    function R(ie, U, J) {
      const { disableHour: ae } = t.value;
      i.value = D(ie, U);
      const A = Math.round(J / 30) * 30 + 90, H = Y(A), ee = r.value ? Fn[H] : Cn[H];
      if (ae.includes(ee) || (r.value = e.format === "24hr" ? D(ie, U) : !1), r.value !== i.value)
        return;
      const ke = r.value || m.value === "pm" ? Cn[H] : Fn[H];
      u.value = ae.includes(ke), !u.value && (v.value = A, l.value = !0);
    }
    function K(ie) {
      const { disableHour: U } = t.value, J = Math.round(ie / 6) * 6 + 90, A = {
        time: J / 6 >= 0 ? J / 6 : J / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: b.value.hour,
        max: e.max,
        min: e.min,
        disableHour: U,
        allowedTime: e.allowedTime
      };
      c.value = nh(A), !c.value && (d.value = J, s.value = !0);
    }
    function W(ie) {
      const { disableHour: U } = t.value, J = Math.round(ie / 6) * 6 + 90, A = {
        time: J / 6 >= 0 ? J / 6 : J / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: b.value.hour,
        minute: F(b.value.minute),
        max: e.max,
        min: e.min,
        disableHour: U,
        allowedTime: e.allowedTime
      };
      oh(A) || (f.value = J);
    }
    function ce() {
      const { left: ie, top: U, width: J, height: ae } = an(n.value);
      if (C.x = ie + J / 2, C.y = U + ae / 2, y.value === "hour" && e.format === "24hr") {
        const { rangeXMin: A, rangeXMax: H, rangeYMin: ee, rangeYMax: ke } = j();
        w.x = [A, H], w.y = [ee, ke];
      }
    }
    function Q(ie) {
      if (Ne(ie), e.readonly)
        return;
      ce();
      const { clientX: U, clientY: J } = ie.touches[0], ae = U - C.x, A = J - C.y, H = Math.round(z(Math.atan2(A, ae)));
      y.value === "hour" ? R(U, J, H) : y.value === "minute" ? K(H) : W(H);
    }
    function pe() {
      if (!e.readonly) {
        if (y.value === "hour" && l.value) {
          y.value = "minute";
          return;
        }
        y.value === "minute" && e.useSeconds && s.value && (y.value = "second");
      }
    }
    function ye() {
      a.value = !1;
    }
    return {
      getRad: g,
      time: b,
      container: n,
      inner: t,
      picker: o,
      isInner: r,
      type: y,
      ampm: m,
      isPreventNextUpdate: a,
      n: k8,
      classes: $8,
      t: rn,
      pt: $,
      moveHand: Q,
      checkPanel: L,
      checkAmpm: E,
      end: pe,
      update: O,
      changePreventUpdate: ye,
      formatElevation: dn
    };
  }
});
rh.render = w8;
var yi = rh;
te(yi);
ue(yi, xm);
const ET = yi;
var es = yi;
const ah = {
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
var vr = (e, n, o) => new Promise((t, r) => {
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
const { name: C8, n: S8, classes: P8 } = x("uploader");
let z8 = 0;
const O8 = ["onClick"], T8 = ["onClick"], E8 = ["src", "alt"], D8 = ["tabindex"], B8 = ["multiple", "accept", "capture", "disabled"], I8 = ["src"];
function M8(e, n) {
  const o = ne("var-icon"), t = ne("var-hover-overlay"), r = ne("var-form-details"), a = ne("var-popup"), i = Ye("ripple"), l = Ye("hover");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      I(
        "div",
        {
          class: p(e.n("file-list"))
        },
        [
          (h(!0), P(
            Re,
            null,
            _e(e.files, (s) => Ie((h(), P("div", {
              class: p(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
              key: s.id,
              onClick: (u) => e.preview(s)
            }, [
              I(
                "div",
                {
                  class: p(e.n("file-name"))
                },
                re(s.name || s.url),
                3
                /* TEXT, CLASS */
              ),
              e.removable ? (h(), P("div", {
                key: 0,
                class: p(e.n("file-close")),
                onClick: Nn((u) => e.handleRemove(s), ["stop"])
              }, [
                G(o, {
                  class: p(e.n("file-close-icon")),
                  "var-uploader-cover": "",
                  name: "delete"
                }, null, 8, ["class"])
              ], 10, T8)) : X("v-if", !0),
              s.cover ? (h(), P("img", {
                key: 1,
                role: "img",
                class: p(e.n("file-cover")),
                style: q({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, E8)) : X("v-if", !0),
              I(
                "div",
                {
                  class: p(e.n("file-indicator"))
                },
                [
                  I(
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
            ], 10, O8)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Ie((h(), P("div", {
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
            I("input", {
              ref: "input",
              type: "file",
              class: p(e.n("action-input")),
              multiple: e.multiple,
              accept: e.accept,
              capture: e.capture,
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
              onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s)),
              onClick: n[1] || (n[1] = Nn(() => {
              }, ["stop"]))
            }, null, 42, B8),
            N(e.$slots, "default", {}, () => [
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
          ], 42, D8)), [
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
            N(e.$slots, "extra-message")
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
            }, null, 10, I8)) : X("v-if", !0)
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
const ih = _({
  name: C8,
  directives: { Ripple: tn, Hover: Tn },
  components: {
    VarIcon: Ze,
    VarPopup: So,
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  props: ah,
  setup(e) {
    const n = k(!1), o = k(null), t = k(null), r = k(!1), a = k(null), i = B(() => {
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
    } = Yn(), { hovering: v, handleHovering: y } = Jn(), m = B(() => {
      const { modelValue: U, hideList: J } = e;
      return J ? [] : U;
    });
    let b = !1;
    const C = {
      getSuccess: R,
      getError: K,
      getLoading: W
    };
    S(s, {
      validate: ye,
      resetValidation: f,
      reset: ie
    }), We(() => window, "keydown", g), We(() => window, "keyup", $), de(
      () => e.modelValue,
      () => {
        !b && pe("onChange"), b = !1;
      },
      { deep: !0 }
    );
    function g(U) {
      n.value && ((U.key === " " || U.key === "Enter") && U.preventDefault(), U.key === "Enter" && o.value.click());
    }
    function $(U) {
      !n.value || U.key !== " " || (U.preventDefault(), o.value.click());
    }
    function O(U) {
      const { disabled: J, previewed: ae, preventDefaultPreview: A, onPreview: H } = e;
      if (l != null && l.disabled.value || J || !ae || (S(H, Je(U)), A))
        return;
      const { url: ee } = U;
      if (uu(ee)) {
        Ft(ee);
        return;
      }
      cu(ee) && (a.value = U, r.value = !0);
    }
    function z(U) {
      return {
        id: z8++,
        url: "",
        cover: "",
        name: U.name,
        file: U,
        progress: 0
      };
    }
    function L(U) {
      const J = U.target, { files: ae } = J;
      return Array.from(ae);
    }
    function T(U) {
      return vr(this, null, function* () {
        const J = U.file;
        if (e.resolveType === "default" && J.type.startsWith("image") || e.resolveType === "data-url") {
          const A = yield Ah(J);
          U.cover = A, U.url = A;
        }
        return U;
      });
    }
    function E(U) {
      return U.map(T);
    }
    function D(U) {
      const { onBeforeRead: J } = e;
      return U.map(
        (ae) => new Promise((A) => {
          J || A({
            valid: !0,
            varFile: ae
          });
          const H = Vo(S(J, Je(ae)));
          Promise.all(H).then((ee) => {
            A({
              valid: ee.every(Boolean),
              varFile: ae
            });
          });
        })
      );
    }
    function M(U) {
      return vr(this, null, function* () {
        const { maxsize: J, maxlength: ae, modelValue: A, onOversize: H, onAfterRead: ee, onBeforeFilter: ke, readonly: Se, disabled: Le } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || Le || Se)
          return;
        const je = ($e) => $e.filter((Me) => Me.file.size > F(J) ? (S(H, Je(Me)), !1) : !0), Pn = ($e) => {
          const Me = Math.min($e.length, F(ae) - A.length);
          return $e.slice(0, Me);
        }, ve = ($e) => vr(this, null, function* () {
          if (!ke)
            return $e;
          const Me = Vo(ke);
          for (const xe of Me)
            $e = yield xe($e);
          return $e;
        });
        let Ue = L(U).map(z);
        Ue = yield ve(Ue), Ue = J != null ? je(Ue) : Ue, Ue = ae != null ? Pn(Ue) : Ue;
        const nn = yield Promise.all(E(Ue)), me = (yield Promise.all(D(nn))).filter(({ valid: $e }) => $e).map(({ varFile: $e }) => $e);
        S(e["onUpdate:modelValue"], [...A, ...me]), U.target.value = "", me.forEach(($e) => S(ee, Je($e)));
      });
    }
    function Y(U) {
      return vr(this, null, function* () {
        const { disabled: J, readonly: ae, modelValue: A, onBeforeRemove: H, onRemove: ee } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || J || ae)
          return;
        if (H) {
          const Se = Vo(S(H, Je(U)));
          if ((yield Promise.all(Se)).some((Le) => !Le))
            return;
        }
        const ke = A.filter((Se) => Se !== U);
        S(ee, Je(U)), pe("onRemove"), S(e["onUpdate:modelValue"], ke);
      });
    }
    function j(U) {
      if (!(l != null && l.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          S(e.onClickAction, ce, U);
          return;
        }
        ce();
      }
    }
    function R() {
      return e.modelValue.filter((U) => U.state === "success");
    }
    function K() {
      return e.modelValue.filter((U) => U.state === "error");
    }
    function W() {
      return e.modelValue.filter((U) => U.state === "loading");
    }
    function ce() {
      t.value.click();
    }
    function Q() {
      a.value = null, r.value = !1, Ft.close();
    }
    function pe(U) {
      Ke(() => {
        const { validateTrigger: J, rules: ae, modelValue: A } = e;
        c(J, U, ae, A, C);
      });
    }
    function ye() {
      return d(e.rules, e.modelValue, C);
    }
    function ie() {
      b = !0, S(e["onUpdate:modelValue"], []), f();
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
      n: S8,
      classes: P8,
      formatElevation: dn,
      toNumber: F,
      handleHovering: y,
      isHTMLSupportVideo: cu,
      isHTMLSupportImage: uu,
      preview: O,
      handleChange: M,
      handleRemove: Y,
      getSuccess: R,
      getError: K,
      getLoading: W,
      validate: ye,
      resetValidation: f,
      reset: ie,
      chooseFile: ce,
      closePreview: Q,
      handleActionClick: j,
      toSizeUnit: ze
    };
  }
});
ih.render = M8;
var ki = ih;
te(ki);
ue(ki, ah);
const DT = ki;
var ns = ki;
const lh = {
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
var A8 = Object.defineProperty, N8 = Object.defineProperties, V8 = Object.getOwnPropertyDescriptors, fd = Object.getOwnPropertySymbols, L8 = Object.prototype.hasOwnProperty, R8 = Object.prototype.propertyIsEnumerable, pd = (e, n, o) => n in e ? A8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, F8 = (e, n) => {
  for (var o in n || (n = {}))
    L8.call(n, o) && pd(e, o, n[o]);
  if (fd)
    for (var o of fd(n))
      R8.call(n, o) && pd(e, o, n[o]);
  return e;
}, U8 = (e, n) => N8(e, V8(n)), vd = (e, n, o) => new Promise((t, r) => {
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
const { name: H8, n: Y8, classes: j8 } = x("watermark"), W8 = { ref: "svgRef" }, K8 = ["viewBox", "width", "height"], q8 = ["width", "height"], G8 = ["href", "xlink:href", "x", "y", "width", "height"];
function X8(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      N(e.$slots, "default"),
      (h(), Oe(no, {
        to: "body",
        disabled: !e.fullscreen
      }, [
        I(
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
            Ie(I(
              "div",
              W8,
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
                    I(
                      "div",
                      {
                        xmlns: "http://www.w3.org/1999/xhtml",
                        style: q({
                          transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
                          transformOrigin: "center"
                        })
                      },
                      [
                        N(e.$slots, "content", {}, () => [
                          I(
                            "span",
                            {
                              style: q(U8(F8({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
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
                  ], 8, q8)) : X("v-if", !0),
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
                  }, null, 12, G8)) : X("v-if", !0)
                ], 12, K8))
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
const sh = _({
  name: H8,
  props: lh,
  setup(e, { slots: n }) {
    const o = k(""), t = k(""), r = k(""), a = k(null), i = k(null);
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
    ), Yo(d), jt(c);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return vd(this, null, function* () {
        return new Promise((f) => {
          const v = document.createElement("canvas"), y = v.getContext("2d"), m = new Image();
          m.crossOrigin = "anonymous", m.referrerPolicy = "no-referrer", m.src = e.image, m.onload = () => {
            v.width = m.width, v.height = m.height, y.drawImage(m, 0, 0), f(v.toDataURL());
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
      return vd(this, null, function* () {
        r.value = qo(i.value).color, e.image && (t.value = yield s()), yield Ke(), c(), o.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: o,
      imageUrl: t,
      textColor: r,
      n: Y8,
      classes: j8,
      showContent: l,
      resize: d
    };
  }
});
sh.render = X8;
var $i = sh;
te($i);
ue($i, lh);
const BT = $i;
var os = $i;
const Z8 = "3.3.3";
function J8(e) {
  Ni.install && e.use(Ni), Vi.install && e.use(Vi), Fi.install && e.use(Fi), Ui.install && e.use(Ui), Hi.install && e.use(Hi), Or.install && e.use(Or), Yi.install && e.use(Yi), ji.install && e.use(ji), Wi.install && e.use(Wi), Ki.install && e.use(Ki), Sn.install && e.use(Sn), qi.install && e.use(qi), Gi.install && e.use(Gi), Xi.install && e.use(Xi), lt.install && e.use(lt), Zi.install && e.use(Zi), Tr.install && e.use(Tr), Ji.install && e.use(Ji), Qi.install && e.use(Qi), _i.install && e.use(_i), xi.install && e.use(xi), An.install && e.use(An), tl.install && e.use(tl), ul.install && e.use(ul), dl.install && e.use(dl), fl.install && e.use(fl), pl.install && e.use(pl), Ar.install && e.use(Ar), hl.install && e.use(hl), gl.install && e.use(gl), Vt.install && e.use(Vt), bl.install && e.use(bl), yl.install && e.use(yl), En.install && e.use(En), Tn.install && e.use(Tn), Ln.install && e.use(Ln), Ze.install && e.use(Ze), kl.install && e.use(kl), Ft.install && e.use(Ft), $l.install && e.use($l), wl.install && e.use(wl), Vr.install && e.use(Vr), It.install && e.use(It), Cl.install && e.use(Cl), Sl.install && e.use(Sl), it.install && e.use(it), Pl.install && e.use(Pl), Mi.install && e.use(Mi), zl.install && e.use(zl), Ut.install && e.use(Ut), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Ol.install && e.use(Ol), Tl.install && e.use(Tl), El.install && e.use(El), Dl.install && e.use(Dl), Bl.install && e.use(Bl), So.install && e.use(So), Il.install && e.use(Il), Ml.install && e.use(Ml), Fr.install && e.use(Fr), Al.install && e.use(Al), Nl.install && e.use(Nl), Vl.install && e.use(Vl), tn.install && e.use(tn), Ll.install && e.use(Ll), Rl.install && e.use(Rl), Fl.install && e.use(Fl), Ul.install && e.use(Ul), Yl.install && e.use(Yl), jl.install && e.use(jl), Wl.install && e.use(Wl), Kl.install && e.use(Kl), ct.install && e.use(ct), ql.install && e.use(ql), Lt.install && e.use(Lt), Rt.install && e.use(Rt), Gl.install && e.use(Gl), Xl.install && e.use(Xl), Zl.install && e.use(Zl), Jl.install && e.use(Jl), Ql.install && e.use(Ql), _l.install && e.use(_l), xl.install && e.use(xl), es.install && e.use(es), Nr.install && e.use(Nr), ns.install && e.use(ns), os.install && e.use(os);
}
const IT = {
  version: Z8,
  install: J8,
  ActionSheet: Ni,
  AppBar: Vi,
  Avatar: Fi,
  AvatarGroup: Ui,
  BackTop: Hi,
  Badge: Or,
  BottomNavigation: Yi,
  BottomNavigationItem: ji,
  Breadcrumb: Wi,
  Breadcrumbs: Ki,
  Button: Sn,
  ButtonGroup: qi,
  Card: Gi,
  Cell: Xi,
  Checkbox: lt,
  CheckboxGroup: Zi,
  Chip: Tr,
  Col: Ji,
  Collapse: Qi,
  CollapseItem: _i,
  CollapseTransition: xi,
  Context: An,
  Countdown: tl,
  Counter: ul,
  DatePicker: dl,
  Dialog: fl,
  Divider: pl,
  Drag: Ar,
  Ellipsis: hl,
  Fab: gl,
  FieldDecorator: Vt,
  FloatingPanel: bl,
  Form: yl,
  FormDetails: En,
  Hover: Tn,
  HoverOverlay: Ln,
  Icon: Ze,
  Image: kl,
  ImagePreview: Ft,
  IndexAnchor: $l,
  IndexBar: wl,
  Input: Vr,
  Lazy: It,
  Link: Cl,
  List: Sl,
  Loading: it,
  LoadingBar: Pl,
  Locale: Mi,
  LocaleProvider: zl,
  Menu: Ut,
  MenuOption: Lr,
  MenuSelect: Rr,
  Option: Ol,
  Overlay: Tl,
  Pagination: El,
  Paper: Dl,
  Picker: Bl,
  Popup: So,
  Progress: Il,
  PullRefresh: Ml,
  Radio: Fr,
  RadioGroup: Al,
  Rate: Nl,
  Result: Vl,
  Ripple: tn,
  Row: Ll,
  Select: Rl,
  Skeleton: Fl,
  Slider: Ul,
  Snackbar: Yl,
  Space: jl,
  Step: Wl,
  Steps: Kl,
  Sticky: ct,
  StyleProvider: ql,
  Swipe: Lt,
  SwipeItem: Rt,
  Switch: Gl,
  Tab: Xl,
  TabItem: Zl,
  Table: Jl,
  Tabs: Ql,
  TabsItems: _l,
  Themes: xl,
  TimePicker: es,
  Tooltip: Nr,
  Uploader: ns,
  Watermark: os
};
export {
  Ni as ActionSheet,
  Vi as AppBar,
  Fi as Avatar,
  Ui as AvatarGroup,
  Hi as BackTop,
  Or as Badge,
  Yi as BottomNavigation,
  ji as BottomNavigationItem,
  Wi as Breadcrumb,
  Ki as Breadcrumbs,
  Sn as Button,
  qi as ButtonGroup,
  Gi as Card,
  Xi as Cell,
  lt as Checkbox,
  Zi as CheckboxGroup,
  Tr as Chip,
  Ji as Col,
  Qi as Collapse,
  _i as CollapseItem,
  xi as CollapseTransition,
  An as Context,
  tl as Countdown,
  ul as Counter,
  dl as DatePicker,
  fl as Dialog,
  pl as Divider,
  Ar as Drag,
  hl as Ellipsis,
  gl as Fab,
  Vt as FieldDecorator,
  bl as FloatingPanel,
  yl as Form,
  En as FormDetails,
  Tn as Hover,
  Ln as HoverOverlay,
  Ze as Icon,
  kl as Image,
  Ft as ImagePreview,
  $l as IndexAnchor,
  wl as IndexBar,
  Vr as Input,
  It as Lazy,
  Cl as Link,
  Sl as List,
  it as Loading,
  Pl as LoadingBar,
  Mi as Locale,
  zl as LocaleProvider,
  Ut as Menu,
  Lr as MenuOption,
  Rr as MenuSelect,
  Ol as Option,
  Tl as Overlay,
  Ri as PIXEL,
  El as Pagination,
  Dl as Paper,
  Bl as Picker,
  So as Popup,
  Il as Progress,
  Ml as PullRefresh,
  Fr as Radio,
  Al as RadioGroup,
  Nl as Rate,
  Vl as Result,
  tn as Ripple,
  Ll as Row,
  Em as SNACKBAR_TYPE,
  Rl as Select,
  Fl as Skeleton,
  Ul as Slider,
  Yl as Snackbar,
  jl as Space,
  Wl as Step,
  Kl as Steps,
  ct as Sticky,
  ql as StyleProvider,
  Lt as Swipe,
  Rt as SwipeItem,
  Gl as Switch,
  Xl as Tab,
  Zl as TabItem,
  Jl as Table,
  Ql as Tabs,
  _l as TabsItems,
  xl as Themes,
  es as TimePicker,
  Nr as Tooltip,
  ns as Uploader,
  os as Watermark,
  a5 as _ActionSheetComponent,
  i5 as _AppBarComponent,
  s5 as _AvatarComponent,
  u5 as _AvatarGroupComponent,
  f5 as _BackTopComponent,
  p5 as _BadgeComponent,
  v5 as _BottomNavigationComponent,
  m5 as _BottomNavigationItemComponent,
  h5 as _BreadcrumbComponent,
  g5 as _BreadcrumbsComponent,
  d5 as _ButtonComponent,
  b5 as _ButtonGroupComponent,
  y5 as _CardComponent,
  k5 as _CellComponent,
  w5 as _CheckboxComponent,
  C5 as _CheckboxGroupComponent,
  S5 as _ChipComponent,
  P5 as _ColComponent,
  z5 as _CollapseComponent,
  O5 as _CollapseItemComponent,
  T5 as _CollapseTransitionComponent,
  _8 as _ContextComponent,
  E5 as _CountdownComponent,
  D5 as _CounterComponent,
  I5 as _DatePickerComponent,
  M5 as _DialogComponent,
  A5 as _DividerComponent,
  N5 as _DragComponent,
  L5 as _EllipsisComponent,
  R5 as _FabComponent,
  F5 as _FieldDecoratorComponent,
  U5 as _FloatingPanelComponent,
  H5 as _FormComponent,
  $5 as _FormDetailsComponent,
  t5 as _HoverComponent,
  o5 as _HoverOverlayComponent,
  n5 as _IconComponent,
  Y5 as _ImageComponent,
  K5 as _ImagePreviewComponent,
  q5 as _IndexAnchorComponent,
  G5 as _IndexBarComponent,
  X5 as _InputComponent,
  l5 as _LazyComponent,
  Z5 as _LinkComponent,
  J5 as _ListComponent,
  Q5 as _LoadingBarComponent,
  c5 as _LoadingComponent,
  r5 as _LocaleComponent,
  _5 as _LocaleProviderComponent,
  x5 as _MenuComponent,
  eT as _MenuOptionComponent,
  nT as _MenuSelectComponent,
  oT as _OptionComponent,
  tT as _OverlayComponent,
  rT as _PaginationComponent,
  aT as _PaperComponent,
  iT as _PickerComponent,
  e5 as _PopupComponent,
  lT as _ProgressComponent,
  sT as _PullRefreshComponent,
  uT as _RadioComponent,
  cT as _RadioGroupComponent,
  dT as _RateComponent,
  fT as _ResultComponent,
  x8 as _RippleComponent,
  pT as _RowComponent,
  vT as _SelectComponent,
  mT as _SkeletonComponent,
  hT as _SliderComponent,
  gT as _SnackbarComponent,
  bT as _SpaceComponent,
  yT as _StepComponent,
  kT as _StepsComponent,
  B5 as _StickyComponent,
  $T as _StyleProviderComponent,
  j5 as _SwipeComponent,
  W5 as _SwipeItemComponent,
  wT as _SwitchComponent,
  CT as _TabComponent,
  ST as _TabItemComponent,
  PT as _TableComponent,
  zT as _TabsComponent,
  OT as _TabsItemsComponent,
  TT as _ThemesComponent,
  ET as _TimePickerComponent,
  V5 as _TooltipComponent,
  DT as _UploaderComponent,
  BT as _WatermarkComponent,
  Qd as actionSheetProps,
  ps as add,
  af as appBarProps,
  hf as avatarGroupProps,
  vf as avatarProps,
  wf as backTopProps,
  Sf as badgeProps,
  Ef as bottomNavigationItemProps,
  zf as bottomNavigationProps,
  Bf as breadcrumbProps,
  Af as breadcrumbsProps,
  Vf as buttonGroupProps,
  yf as buttonProps,
  Rf as cardProps,
  Uf as cellProps,
  Xf as checkboxGroupProps,
  Wf as checkboxProps,
  Jf as chipProps,
  _f as colProps,
  rp as collapseItemProps,
  op as collapseProps,
  lp as collapseTransitionProps,
  up as countdownProps,
  wp as counterProps,
  of as currentMessage,
  Bp as datePickerProps,
  IT as default,
  un as defaultLazyOptions,
  Rp as dialogProps,
  Up as dividerProps,
  Yp as dragProps,
  ev as ellipsisProps,
  _d as enUS,
  ef as faIR,
  ov as fabProps,
  Ia as fieldDecoratorProps,
  Yf as formDetailsProps,
  iv as formProps,
  Hd as hoverOverlayProps,
  on as iconProps,
  uf as imageCache,
  pv as imagePreviewProps,
  sv as imageProps,
  hv as indexAnchorProps,
  bv as indexBarProps,
  kv as inputProps,
  J8 as install,
  wv as linkProps,
  Sv as listProps,
  mS as loadingBarProps,
  io as loadingProps,
  Rv as menuOptionProps,
  Ms as menuProps,
  Uv as menuSelectProps,
  tf as merge,
  nf as messages,
  Wv as optionProps,
  qv as overlayProps,
  Gv as paginationProps,
  Zv as paperProps,
  Qv as pickerProps,
  gt as popupProps,
  xv as progressProps,
  nm as pullRefreshProps,
  im as radioGroupProps,
  tm as radioProps,
  sm as rateProps,
  hm as resultProps,
  bm as rowProps,
  km as selectProps,
  wm as skeletonProps,
  Sm as sliderProps,
  As as snackbarProps,
  Im as spaceProps,
  Mm as stepProps,
  Vm as stepsProps,
  Pt as stickyProps,
  Rm as styleProviderProps,
  Es as swipeProps,
  Um as switchProps,
  rn as t,
  Km as tabItemProps,
  Ym as tabProps,
  Gm as tableProps,
  Qm as tabsItemsProps,
  Zm as tabsProps,
  xm as timePickerProps,
  _p as tooltipProps,
  ah as uploaderProps,
  vs as use,
  Jn as useHoverOverlay,
  fs as useLocale,
  Z8 as version,
  lh as watermarkProps,
  cs as zhCN,
  xd as zhHK,
  ds as zhTW
};
