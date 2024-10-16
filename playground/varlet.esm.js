import { reactive as xe, onMounted as jo, nextTick as Ue, onActivated as Bo, isRef as Mh, watch as de, onBeforeUnmount as Yt, onDeactivated as pr, onUnmounted as qr, inject as ds, getCurrentInstance as Wo, computed as I, ref as $, unref as Nd, provide as fs, isVNode as Nh, defineComponent as x, h as Xr, Comment as Ah, Fragment as Ne, createApp as Vh, onBeforeMount as Rh, createVNode as G, Teleport as oo, Transition as Qe, withDirectives as Ae, vShow as Qn, mergeProps as He, openBlock as h, createBlock as Ce, resolveDynamicComponent as mr, normalizeClass as v, normalizeStyle as X, createElementBlock as S, resolveComponent as Q, resolveDirective as Ye, createCommentVNode as q, createElementVNode as N, toDisplayString as ie, withCtx as ce, renderSlot as A, renderList as Ke, createTextVNode as Be, onUpdated as Gr, normalizeProps as wo, guardReactiveProps as Zr, createSlots as rr, withModifiers as Wn, vModelText as Lh, withKeys as xs, TransitionGroup as Fh } from "vue";
const Ad = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, LT = xe(Ad);
var Nn = xe(Ad), Hh = Object.defineProperty, Uh = Object.defineProperties, Yh = Object.getOwnPropertyDescriptors, _s = Object.getOwnPropertySymbols, jh = Object.prototype.hasOwnProperty, Wh = Object.prototype.propertyIsEnumerable, eu = (e, n, o) => n in e ? Hh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Kh = (e, n) => {
  for (var o in n || (n = {}))
    jh.call(n, o) && eu(e, o, n[o]);
  if (_s)
    for (var o of _s(n))
      Wh.call(n, o) && eu(e, o, n[o]);
  return e;
}, qh = (e, n) => Uh(e, Yh(n)), yn = (e) => typeof e == "string", vs = (e) => typeof e == "boolean", Tn = (e) => typeof e == "number", Vd = (e) => Tn(e) || yn(e) && /^[-+]?\d+$/.test(e), zo = (e) => Object.prototype.toString.call(e) === "[object Object]", Xh = (e) => typeof e == "object" && e !== null, Rn = (e) => typeof e == "function", Xe = (e) => Array.isArray(e), Gh = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Zn = (e) => e == null || e === "" || Xe(e) && !e.length, Rd = (e) => e === window, Zh = () => ro() && "ontouchstart" in window, ro = () => typeof window < "u", Pt = () => ro() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), { hasOwnProperty: Jh } = Object.prototype, Ir = (e, n) => Jh.call(e, n), nu = (e) => [...new Set(e)], Co = (e) => Xe(e) ? e : [e], tr = (e, n) => {
  if (e.length) {
    const o = e.indexOf(n);
    if (o > -1)
      return e.splice(o, 1);
  }
}, Qh = (e) => e.filter((n) => n != null), xh = (e, n, o = "start") => {
  let r = o === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && r >= 0 && r <= e.length - 1; ) {
    if (n(e[r], r, e))
      return [e[r], r];
    o === "start" ? r++ : r--;
  }
  return [null, -1];
}, _h = (...e) => e.map((n) => {
  if (Xe(n)) {
    const [o, r, t = null] = n;
    return o ? r : t;
  }
  return n;
}), Ld = () => typeof globalThis < "u" ? globalThis : ro() ? window : typeof global < "u" ? global : self, Br = (e) => {
  const n = Ld();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}, ou = (e) => {
  const n = Ld();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}, nr = () => new Promise((e) => {
  Br(e);
}), kn = () => new Promise((e) => {
  Br(() => {
    Br(e);
  });
}), Ko = (e) => window.getComputedStyle(e), an = (e) => {
  if (Rd(e)) {
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
    return qh(Kh({}, r), {
      toJSON: () => r
    });
  }
  return e.getBoundingClientRect();
}, eg = (e) => {
  const { top: n, bottom: o, left: r, right: t } = an(e), { width: a, height: i } = an(window), l = r <= a && t >= 0, s = n <= i && o >= 0;
  return l && s;
}, ng = (e) => new Promise((n) => {
  const o = new FileReader();
  o.onload = () => {
    n(o.result);
  }, o.readAsDataURL(e);
}), Ve = (e) => {
  e.cancelable !== !1 && e.preventDefault();
}, Fo = (e) => {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}, ps = (e) => {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}, ms = (e, n = 200) => {
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
var H = (e) => e == null ? 0 : yn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : vs(e) ? Number(e) : e, Mn = (e, n, o) => Math.min(o, Math.max(n, e)), og = (e, n) => Mn(e, 0, n.length - 1), rg = (e) => hs(e).replace(e.charAt(0), e.charAt(0).toUpperCase()), hs = (e) => e.replace(/-(\w)/g, (n, o) => o.toUpperCase()), Fd = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
function tg(e) {
  return (n) => {
    const o = `${e}-${n}`, r = (t) => t ? t[0] === "$" ? t.replace("$", e) : t.startsWith("--") ? `${o}${t}` : `${o}__${t}` : o;
    return {
      name: rg(o),
      n: r,
      classes: _h
    };
  };
}
var ag = Object.defineProperty, zt = Object.getOwnPropertySymbols, Hd = Object.prototype.hasOwnProperty, Ud = Object.prototype.propertyIsEnumerable, ru = (e, n, o) => n in e ? ag(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ig = (e, n) => {
  for (var o in n || (n = {}))
    Hd.call(n, o) && ru(e, o, n[o]);
  if (zt)
    for (var o of zt(n))
      Ud.call(n, o) && ru(e, o, n[o]);
  return e;
}, lg = (e, n) => {
  var o = {};
  for (var r in e)
    Hd.call(e, r) && n.indexOf(r) < 0 && (o[r] = e[r]);
  if (e != null && zt)
    for (var r of zt(e))
      n.indexOf(r) < 0 && Ud.call(e, r) && (o[r] = e[r]);
  return o;
};
function mn(e) {
  let n = !1;
  jo(() => {
    e(), Ue(() => {
      n = !0;
    });
  }), Bo(() => {
    n && e();
  });
}
function je(e, n, o, r = {}) {
  if (!ro())
    return;
  const { passive: t = !1, capture: a = !1 } = r;
  let i = !1, l = !1;
  const s = (p) => Rn(p) ? p() : Nd(p), u = (p) => {
    if (i || l)
      return;
    const g = s(p);
    g && (g.addEventListener(n, o, {
      passive: t,
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
  Mh(e) && (d = de(
    () => e.value,
    (p, g) => {
      c(g), u(p);
    }
  ));
  const f = () => {
    d == null || d(), c(e), l = !0;
  };
  return mn(() => {
    u(e);
  }), Yt(() => {
    c(e);
  }), pr(() => {
    c(e);
  }), f;
}
function gs(e, n, o) {
  if (!ro())
    return;
  je(document, n, (t) => {
    const a = Rn(e) ? e() : Nd(e);
    a && !a.contains(t.target) && o(t);
  });
}
function Jr(e) {
  let n = !1;
  pr(() => {
    n = !0, e();
  }), qr(() => {
    n || e();
  });
}
function bs(e) {
  const n = Wo();
  return e in n.provides;
}
function hn(e) {
  if (!bs(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const o = ds(e), { childInstances: r, collect: t, clear: a } = o, i = lg(o, ["childInstances", "collect", "clear"]), l = Wo();
  return {
    index: I(() => r.indexOf(l)),
    parentProvider: i,
    bindParent: (c) => {
      jo(() => {
        Ue().then(() => {
          t(l, c);
        });
      }), Yt(() => {
        Ue().then(() => {
          a(l, c);
        });
      });
    }
  };
}
function sg(e) {
  const n = [], o = (r) => {
    if (r != null && r.component) {
      o(r == null ? void 0 : r.component.subTree);
      return;
    }
    Xe(r == null ? void 0 : r.children) && r.children.forEach((t) => {
      Nh(t) && (n.push(t), o(t));
    });
  };
  return o(e), n;
}
function gn(e) {
  const n = Wo(), o = xe([]), r = [], t = I(() => o.length), a = () => {
    const u = sg(n.subTree);
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
      fs(e, ig({
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
function ug(e, n) {
  const o = $(!1);
  return de(
    e,
    (r) => {
      n === r && (o.value = !0);
    },
    { immediate: !0 }
  ), o;
}
function cg(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function hr() {
  const e = $(0), n = $(0), o = $(0), r = $(0), t = $(0), a = $(0), i = $(0), l = $(0), s = $(0), u = $(0), c = $(), d = $(!1), f = $(!1), p = $(0), g = $(0);
  let m = null;
  const k = () => {
    e.value = 0, n.value = 0, o.value = 0, r.value = 0, t.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, c.value = void 0, d.value = !1, f.value = !1, p.value = 0, g.value = 0;
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
      f.value = !0, o.value = B - e.value, r.value = T - n.value, t.value = Math.abs(o.value), a.value = Math.abs(r.value), g.value = Math.sqrt(t.value ** 2 + a.value ** 2), s.value = B - i.value, u.value = T - l.value, c.value || (c.value = cg(t.value, a.value)), i.value = B, l.value = T;
    },
    endTouch: () => {
      d.value = !1, m = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (O) => Fo(O) === 0 && r.value > 0,
    isReachBottom: (O, B = 1) => {
      const { scrollHeight: T, clientHeight: E, scrollTop: M } = O, R = Math.abs(T - M - E);
      return r.value < 0 && R <= B;
    }
  };
}
function Yd() {
  const e = Wo(), n = Fd(e.type.name), o = $(void 0);
  return jo(() => {
    o.value = `${n}-${e.uid}`;
  }), o;
}
function dg(e = {}) {
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
var fg = Object.defineProperty, vg = Object.defineProperties, pg = Object.getOwnPropertyDescriptors, tu = Object.getOwnPropertySymbols, mg = Object.prototype.hasOwnProperty, hg = Object.prototype.propertyIsEnumerable, au = (e, n, o) => n in e ? fg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Vi = (e, n) => {
  for (var o in n || (n = {}))
    mg.call(n, o) && au(e, o, n[o]);
  if (tu)
    for (var o of tu(n))
      hg.call(n, o) && au(e, o, n[o]);
  return e;
}, gg = (e, n) => vg(e, pg(n)), iu = (e, n, o) => new Promise((r, t) => {
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
function le(e, n) {
  e.setPropsDefaults = function(o) {
    Object.entries(o).forEach(([r, t]) => {
      const a = n[r];
      if (a != null) {
        if (zo(a)) {
          n[r] = gg(Vi({}, a), {
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
function bg(e) {
  const n = Vh(e), o = document.createElement("div");
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
      return () => Xr(e, Vi(Vi({}, n), o));
    }
  }, { unmount: t } = bg(r);
  return { unmountInstance: t };
}
function jd(e) {
  const n = [];
  return e.forEach((o) => {
    if (o.type !== Ah) {
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
function lu(e) {
  return zo(e) && Rn(e.safeParseAsync);
}
function yg(e) {
  return zo(e) && Ir(e, "success");
}
function Ln() {
  const e = $(""), n = (t, a, i) => iu(this, null, function* () {
    const l = Co(t).filter((u) => lu(u) || Rn(u)), s = yield Promise.all(
      l.map((u) => lu(u) ? u.safeParseAsync(a) : u(a, i))
    );
    return o(), !s.some((u) => {
      if (yg(u)) {
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
    validateWithTrigger: (t, a, i, l, s) => iu(this, null, function* () {
      t.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function kg(e) {
  je(() => window, "hashchange", e), je(() => window, "popstate", e);
}
function qo() {
  const e = $(!1);
  return Bo(() => {
    e.value = !1;
  }), pr(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
const _ = tg("var");
function V(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function un(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
const Qr = x({
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
    return () => yn(e.is) ? Xr(e.tag, e.is) : e.is;
  }
});
var $g = Object.defineProperty, wg = Object.defineProperties, Cg = Object.getOwnPropertyDescriptors, su = Object.getOwnPropertySymbols, Sg = Object.prototype.hasOwnProperty, Pg = Object.prototype.propertyIsEnumerable, uu = (e, n, o) => n in e ? $g(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Wd = (e, n) => {
  for (var o in n || (n = {}))
    Sg.call(n, o) && uu(e, o, n[o]);
  if (su)
    for (var o of su(n))
      Pg.call(n, o) && uu(e, o, n[o]);
  return e;
}, zg = (e, n) => wg(e, Cg(n));
const { n: Kd } = _("ripple"), cu = 250;
function Og(e) {
  const { zIndex: n, position: o } = Ko(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", o === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function du(e) {
  return "touches" in e;
}
function Tg(e, n) {
  const { top: o, left: r } = an(e), { clientWidth: t, clientHeight: a } = e, i = Math.sqrt(t ** 2 + a ** 2) / 2, l = i * 2, s = du(n) ? n.touches[0].clientX - r : t / 2, u = du(n) ? n.touches[0].clientY - o : a / 2, c = (t - i * 2) / 2, d = (a - i * 2) / 2, f = s - i, p = u - i;
  return { x: f, y: p, centerX: c, centerY: d, size: l };
}
function ys(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !Nn.enableRipple)
    return;
  const o = () => {
    n.tasker = null;
    const { x: r, y: t, centerX: a, centerY: i, size: l } = Tg(this, e), s = document.createElement("div");
    s.classList.add(Kd()), s.style.opacity = "0", s.style.transform = `translate(${r}px, ${t}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Og(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(o, 30);
}
function Ot() {
  const e = this._ripple, n = () => {
    const o = this.querySelectorAll(`.${Kd()}`);
    if (!o.length)
      return;
    const r = o[o.length - 1], t = cu - performance.now() + Number(r.dataset.createdAt);
    window.setTimeout(() => {
      r.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = r.parentNode) == null ? void 0 : a.removeChild(r);
      }, cu);
    }, t);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function qd() {
  if (!Zh() || !Nn.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
let Tt = !1;
function Eg(e) {
  Tt || !(e.key === " " || e.key === "Enter") || (ys.call(this, e), Tt = !0);
}
function fu() {
  Tt && (Ot.call(this), Tt = !1);
}
function Ig(e, n) {
  var o;
  e._ripple = zg(Wd({
    tasker: null
  }, (o = n.value) != null ? o : {}), {
    removeRipple: Ot.bind(e)
  }), e.addEventListener("touchstart", ys, { passive: !0 }), e.addEventListener("touchmove", qd, { passive: !0 }), e.addEventListener("dragstart", Ot, { passive: !0 }), e.addEventListener("keydown", Eg), e.addEventListener("keyup", fu), e.addEventListener("blur", fu), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function Bg(e) {
  e.removeEventListener("touchstart", ys), e.removeEventListener("touchmove", qd), e.removeEventListener("dragstart", Ot), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function Dg(e, n) {
  var o, r, t, a, i, l;
  const s = {
    color: (o = n.value) == null ? void 0 : o.color,
    disabled: (r = n.value) == null ? void 0 : r.disabled
  };
  (s.color !== ((t = e._ripple) == null ? void 0 : t.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = Wd({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const Xd = {
  mounted: Ig,
  unmounted: Bg,
  updated: Dg,
  install(e) {
    e.directive("ripple", this);
  }
}, FT = Xd;
var nn = Xd;
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
  onOpen: V(),
  onOpened: V(),
  onClose: V(),
  onClosed: V(),
  onKeyEscape: V(),
  onClickOverlay: V(),
  "onUpdate:show": V(),
  // internal for Dialog
  onRouteChange: V()
}, { n: vu } = _("");
function Gd() {
  Object.keys(Nn.locks).length <= 0 ? document.body.classList.remove(vu("$--lock")) : document.body.classList.add(vu("$--lock"));
}
function at(e) {
  Nn.locks[e] = 1, Gd();
}
function it(e) {
  delete Nn.locks[e], Gd();
}
function xr(e, n) {
  const { uid: o } = Wo();
  n && de(n, (r) => {
    r === !1 ? it(o) : r === !0 && e() === !0 && at(o);
  }), de(e, (r) => {
    n && n() === !1 || (r === !0 ? at(o) : it(o));
  }), Rh(() => {
    n && n() === !1 || e() === !0 && at(o);
  }), qr(() => {
    n && n() === !1 || e() === !0 && it(o);
  }), Bo(() => {
    n && n() === !1 || e() === !0 && at(o);
  }), pr(() => {
    n && n() === !1 || e() === !0 && it(o);
  });
}
function _r(e, n) {
  const o = $(Nn.zIndex);
  return de(
    e,
    (r) => {
      r && (Nn.zIndex += n, o.value = Nn.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: o };
}
const fo = [];
function ks(e, n) {
  const { uid: o } = Wo();
  de(e, (i) => {
    i && !a(o) ? t() : setTimeout(() => {
      tr(fo, a(o));
    });
  }), mn(() => {
    e() && t();
  }), Jr(() => {
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
const Zd = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Jd() {
  const { bindParent: e, parentProvider: n, index: o } = hn(Zd);
  return {
    index: o,
    popup: n,
    bindPopup: e
  };
}
function Mg() {
  const { bindChildren: e, childProviders: n, length: o } = gn(Zd);
  return {
    length: o,
    popupItems: n,
    bindPopupItems: e
  };
}
var Ng = Object.defineProperty, pu = Object.getOwnPropertySymbols, Ag = Object.prototype.hasOwnProperty, Vg = Object.prototype.propertyIsEnumerable, mu = (e, n, o) => n in e ? Ng(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Rg = (e, n) => {
  for (var o in n || (n = {}))
    Ag.call(n, o) && mu(e, o, n[o]);
  if (pu)
    for (var o of pu(n))
      Vg.call(n, o) && mu(e, o, n[o]);
  return e;
};
const {
  name: Lg,
  n: Hn,
  classes: zi
} = _("popup");
var jt = x({
  name: Lg,
  inheritAttrs: !1,
  props: br,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const r = ug(() => e.show, !0), {
      zIndex: t
    } = _r(() => e.show, 3), a = I(() => {
      var g;
      return (g = e.zIndex) != null ? g : t.value;
    }), {
      onStackTop: i
    } = ks(() => e.show, a), {
      disabled: l
    } = qo(), {
      bindPopupItems: s
    } = Mg();
    xr(() => e.show, () => e.lockScroll), de(() => e.show, (g) => {
      C(g ? e.onOpen : e.onClose);
    }), s({
      show: I(() => e.show)
    }), je(() => window, "keydown", p), kg(() => C(e.onRouteChange));
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
        class: zi(Hn("overlay"), g),
        style: Rg({
          zIndex: a.value - 1
        }, m),
        onClick: u
      }, null);
    }
    function d() {
      return Ae(G("div", He({
        class: zi(Hn("content"), Hn(`--${e.position}`), [e.defaultStyle, Hn("--content-background-color")], [e.defaultStyle, Hn("$-elevation--3")], [e.safeArea, Hn("--safe-area")], [e.safeAreaTop, Hn("--safe-area-top")]),
        style: {
          zIndex: a.value
        },
        role: "dialog",
        "aria-modal": "true"
      }, o), [r.value && C(n.default)]), [[Qn, e.show]]);
    }
    function f() {
      return G(Qe, {
        name: Hn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Ae(G("div", {
          class: zi(Hn("$--box"), Hn(), [!e.overlay, Hn("--pointer-events-none")]),
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
re(jt);
le(jt, br);
const HT = jt;
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
  onClick: V()
};
function An(e, n) {
  throw Error(`Varlet [${e}]: ${n}`);
}
function Fg(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function Hg(e) {
  const { left: n } = an(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function hu(e) {
  const { top: n } = an(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Oi(e) {
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
function Ug(e) {
  const n = [];
  let o = e;
  for (; !Rd(o); )
    o = To(o), n.push(o);
  return n;
}
function Qd(e, n) {
  if (yn(e)) {
    const o = document.querySelector(e);
    return o || An(n, "target element cannot found"), o;
  }
  if (Xh(e)) return e;
  An(n, 'type of prop "target" should be a selector or an element object');
}
function Yg() {
  const { width: e, height: n } = an(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const jg = (e) => yn(e) && e.endsWith("rem"), Wg = (e) => yn(e) && e.endsWith("px") || Tn(e), Kg = (e) => yn(e) && e.endsWith("vw"), qg = (e) => yn(e) && e.endsWith("vh"), Xg = (e) => yn(e) && e.endsWith("vmin"), Gg = (e) => yn(e) && e.endsWith("vmax"), _e = (e) => {
  if (Vd(e))
    return Number(e);
  if (Wg(e))
    return +e.replace("px", "");
  if (!ro())
    return 0;
  const { vw: n, vh: o, vMin: r, vMax: t } = Yg();
  if (Kg(e))
    return +e.replace("vw", "") * n / 100;
  if (qg(e))
    return +e.replace("vh", "") * o / 100;
  if (Xg(e))
    return +e.replace("vmin", "") * r / 100;
  if (Gg(e))
    return +e.replace("vmax", "") * t / 100;
  if (jg(e)) {
    const a = +e.replace("rem", ""), i = Ko(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return yn(e) ? H(e) : 0;
}, ze = (e) => {
  if (e != null)
    return Vd(e) ? `${e}px` : String(e);
}, Cn = (e, n = 1) => {
  if (e == null)
    return;
  const o = ze(e), r = o.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(o) * n}${r}`;
};
function Dr(e, { top: n = 0, left: o = 0, duration: r = 300, animation: t }) {
  const a = Date.now(), i = Fo(e), l = ps(e);
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
function xd(e) {
  return Object.entries(e ?? {}).reduce((n, [o, r]) => {
    const t = o.startsWith("--") ? o : `--${Fd(o)}`;
    return n[t] = r, n;
  }, {});
}
function Et(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
const gu = ["button", "input", "select", "textarea", "[tabindex]", "[href]"].map((e) => `${e}:not([disabled])`).join(", ");
function _d(e, n, o) {
  var r;
  const t = n.querySelectorAll(gu);
  if (!t.length)
    return;
  const a = [e, ...Array.from(e.querySelectorAll(gu))].findIndex(
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
var Zg = (e, n, o) => new Promise((r, t) => {
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
const { name: Jg, n: Qg, classes: xg } = _("icon");
function _g(e, n) {
  return h(), Ce(mr(e.isURL(e.name) ? "img" : "i"), {
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
const ef = x({
  name: Jg,
  props: en,
  setup(e) {
    const n = $(""), o = $(!1);
    de(() => e.name, r, { immediate: !0 });
    function r(t, a) {
      return Zg(this, null, function* () {
        const { transition: i } = e;
        if (a == null || H(i) === 0) {
          n.value = t;
          return;
        }
        o.value = !0, yield Ue(), setTimeout(() => {
          a != null && (n.value = t), o.value = !1;
        }, H(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: o,
      n: Qg,
      classes: xg,
      isURL: Gh,
      toNumber: H,
      toSizeUnit: ze
    };
  }
});
ef.render = _g;
var Wt = ef;
re(Wt);
le(Wt, en);
const UT = Wt;
var Ze = Wt;
const nf = {
  hovering: Boolean,
  focusing: Boolean
}, { name: eb, n: nb, classes: ob } = _("hover-overlay");
function rb(e, n) {
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
const of = x({
  name: eb,
  props: nf,
  setup: () => ({
    n: nb,
    classes: ob,
    inMobile: Pt
  })
});
of.render = rb;
var Kt = of;
re(Kt);
le(Kt, nf);
function xn() {
  const e = $(!1);
  return {
    hovering: e,
    handleHovering: (o) => {
      e.value = o;
    }
  };
}
const YT = Kt;
var Vn = Kt;
function rf(e) {
  return e ? !!(e === "desktop" && Pt() || e === "mobile" && !Pt()) : !1;
}
function tb(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((o, r) => {
    const [t, a] = r.split(":").map((i) => i.trim());
    return o[hs(t)] = a, o;
  }, {}) : {};
}
function ab(e) {
  const { value: n } = e._hover, o = tb(e);
  Object.keys(n).forEach((r) => {
    const t = hs(r);
    n[t] != null && o[t] && (e._hover.rawStyle[t] = o[t]);
  });
}
function $s(e, n) {
  Object.keys(n).forEach((o) => {
    const r = n[o];
    r != null && (e.style[o] = r);
  });
}
function ib(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function tf(e) {
  (e == null ? void 0 : e._hover) != null && (ib(e), $s(e, e._hover.rawStyle));
}
function af() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, Rn(e)) {
    e(this._hover.hovering);
    return;
  }
  $s(this, e);
}
function lf() {
  if (this._hover.hovering = !1, Rn(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  tf(this);
}
function sf(e, n) {
  var o, r;
  const { arg: t, value: a } = n;
  rf(t) || (e._hover = {
    value: a,
    hovering: (r = (o = e._hover) == null ? void 0 : o.hovering) != null ? r : !1,
    rawStyle: {}
  }, ab(e), e.addEventListener("mouseenter", af), e.addEventListener("mouseleave", lf));
}
function uf(e, n) {
  rf(n.arg) || (tf(e), e.removeEventListener("mouseenter", af), e.removeEventListener("mouseleave", lf));
}
function lb(e, n) {
  e._hover && uf(e, n);
}
function sb(e, n) {
  return !Rn(n.value) && e._hover.hovering;
}
function ub(e, n) {
  sf(e, n), sb(e, n) && $s(e, n.value);
}
const cf = {
  mounted: sf,
  unmounted: uf,
  beforeUpdate: lb,
  updated: ub,
  install(e) {
    e.directive("hover", this);
  }
}, jT = cf;
var En = cf;
const { name: cb, n: db, classes: fb } = _("action-sheet");
function vb(e, n) {
  const o = Q("var-icon"), r = Q("var-hover-overlay"), t = Ye("ripple"), a = Ye("hover");
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
      G(r, {
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
const df = x({
  name: cb,
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
    const { hovering: e, handleHovering: n } = xn();
    return {
      hovering: e,
      n: db,
      classes: fb,
      handleHovering: n
    };
  }
});
df.render = vb;
var pb = df, mb = Object.defineProperty, bu = Object.getOwnPropertySymbols, hb = Object.prototype.hasOwnProperty, gb = Object.prototype.propertyIsEnumerable, yu = (e, n, o) => n in e ? mb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, bb = (e, n) => {
  for (var o in n || (n = {}))
    hb.call(n, o) && yu(e, o, n[o]);
  if (bu)
    for (var o of bu(n))
      gb.call(n, o) && yu(e, o, n[o]);
  return e;
};
const ff = bb({
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
var ws = {
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
}, vf = {
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
}, Cs = {
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
}, pf = Cs, mf = {
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
}, yb = Object.defineProperty, ku = Object.getOwnPropertySymbols, kb = Object.prototype.hasOwnProperty, $b = Object.prototype.propertyIsEnumerable, $u = (e, n, o) => n in e ? yb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, wu = (e, n) => {
  for (var o in n || (n = {}))
    kb.call(n, o) && $u(e, o, n[o]);
  if (ku)
    for (var o of ku(n))
      $b.call(n, o) && $u(e, o, n[o]);
  return e;
};
function Ss() {
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
      e.value[i] = wu(wu({}, e.value[i]), l), r(i);
    },
    t: (i) => {
      if (Ir(n.value, i))
        return n.value[i];
    }
  };
}
const { messages: hf, currentMessage: gf, add: Ps, use: zs, merge: bf, t: rn } = Ss();
Ps("zh-CN", ws);
zs("zh-CN");
const WT = {
  zhCN: ws,
  enUS: vf,
  zhTW: Cs,
  zhHK: pf,
  faIR: mf,
  messages: hf,
  currentMessage: gf,
  add: Ps,
  use: zs,
  merge: bf,
  t: rn,
  useLocale: Ss
};
var Ri = {
  zhCN: ws,
  enUS: vf,
  zhTW: Cs,
  zhHK: pf,
  faIR: mf,
  messages: hf,
  currentMessage: gf,
  add: Ps,
  use: zs,
  merge: bf,
  t: rn,
  useLocale: Ss
};
const Li = Symbol("LOCALE_PROVIDER_KEY");
function wb(e) {
  fs(Li, e);
}
function ao() {
  return bs(Li) ? ds(Li) : { t: null };
}
const { name: Cb, n: Sb, classes: Pb } = _("action-sheet");
function zb(e, n) {
  const o = Q("var-action-item"), r = Q("var-popup");
  return h(), Ce(r, {
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
        He({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          A(e.$slots, "title", {}, () => {
            var t;
            return [
              N(
                "div",
                {
                  class: v(e.n("title"))
                },
                ie((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("actionSheetTitle")),
                3
                /* TEXT, CLASS */
              )
            ];
          }),
          A(e.$slots, "actions", {}, () => [
            (h(!0), S(
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
const yf = x({
  name: Cb,
  directives: { Ripple: nn },
  components: {
    VarPopup: Oo,
    VarActionItem: pb
  },
  inheritAttrs: !1,
  props: ff,
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
      n: Sb,
      classes: Pb,
      handleSelect: r
    };
  }
});
yf.render = zb;
var et = yf, Ob = Object.defineProperty, Cu = Object.getOwnPropertySymbols, Tb = Object.prototype.hasOwnProperty, Eb = Object.prototype.propertyIsEnumerable, Su = (e, n, o) => n in e ? Ob(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Pu = (e, n) => {
  for (var o in n || (n = {}))
    Tb.call(n, o) && Su(e, o, n[o]);
  if (Cu)
    for (var o of Cu(n))
      Eb.call(n, o) && Su(e, o, n[o]);
  return e;
};
let go, Os = {};
function Ib(e = {}) {
  return Pu(Pu({}, Os), e);
}
function Do(e) {
  return ro() ? new Promise((n) => {
    Do.close();
    const o = xe(Ib(e));
    o.teleport = "body", go = o;
    const { unmountInstance: r } = gr(et, o, {
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
Do.setDefaultOptions = function(e) {
  Os = e;
};
Do.resetDefaultOptions = function() {
  Os = {};
};
Do.close = function() {
  if (go != null) {
    const e = go;
    go = null, Ue().then(() => {
      e.show = !1;
    });
  }
};
Do.Component = et;
re(et);
re(et, Do);
le(Do, ff);
const KT = et;
var Fi = Do;
const Bb = {
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
}, { name: Db, n: Mb, classes: Nb } = _("alert"), Ab = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  danger: "error"
};
function Vb(e, n) {
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
          onClick: n[0] || (n[0] = (...r) => e.handleClose && e.handleClose(...r))
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
const kf = x({
  name: Db,
  components: {
    VarIcon: Ze
  },
  props: Bb,
  setup(e) {
    const n = I(() => ["info", "success", "danger", "warning"].includes(e.type));
    function o(r) {
      C(e.onClose, r);
    }
    return {
      n: Mb,
      classes: Nb,
      iconTypeMap: Ab,
      isInternalType: n,
      formatElevation: un,
      handleClose: o
    };
  }
});
kf.render = Vb;
var Ts = kf;
re(Ts);
const qT = Ts;
var Hi = Ts;
const $f = {
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
}, { name: Rb, n: Lb, classes: Fb } = _("app-bar");
function Hb(e, n) {
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
const wf = x({
  name: Rb,
  props: $f,
  setup(e, { slots: n }) {
    const o = $(null), r = $(), t = $(), a = $(), i = I(() => {
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
    to(s), mn(() => {
      l(), s();
    }), Gr(l);
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
      n: Lb,
      classes: Fb,
      formatElevation: un,
      appBar: o,
      placeholderHeight: a
    };
  }
});
wf.render = Hb;
var qt = wf;
re(qt);
le(qt, $f);
const XT = qt;
var Ui = qt;
const Cf = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: Ub, n: Yb } = _("form-details"), jb = { key: 0 }, Wb = { key: 0 };
function Kb(e, n) {
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
                    jb,
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
                      Wb,
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
const Sf = x({
  name: Ub,
  props: Cf,
  setup: () => ({ n: Yb })
});
Sf.render = Kb;
var Xt = Sf;
re(Xt);
le(Xt, Cf);
const GT = Xt;
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
  onClick: V(),
  onClear: V()
}, Pf = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), zf = Symbol(
  "SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY"
);
function qb() {
  const { childProviders: e, length: n, bindChildren: o } = gn(
    Pf
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: o
  };
}
function Xb() {
  const { childProviders: e, bindChildren: n } = gn(
    zf
  );
  return {
    swipeResizeListeners: e,
    bindSwipeResizeListeners: n
  };
}
function Gb() {
  const { parentProvider: e, bindParent: n } = hn(
    zf
  );
  return {
    swipeResizeDispatcher: e,
    bindSwipeResizeDispatcher: n
  };
}
var Zb = (e, n, o) => new Promise((r, t) => {
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
const { name: Jb, n: Ti, classes: Qb } = _("field-decorator"), xb = ["for"];
function _b(e, n) {
  const o = Q("var-icon");
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
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
          ], 14, xb)) : q("v-if", !0),
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
const Of = x({
  name: Jb,
  components: { VarIcon: Ze },
  props: Gt,
  setup(e) {
    const n = $(null), o = $(null), r = $(""), t = $("0px"), a = $("0px"), i = $("0px"), l = $(!0), s = I(() => e.hint && (!Zn(e.value) || e.isFocusing)), { popup: u, bindPopup: c } = Jd(), { bindSwipeResizeDispatcher: d } = Gb(), f = I(
      () => e.isError ? void 0 : e.isFocusing ? e.focusColor : e.blurColor
    );
    to(k), mn(() => {
      k(), Ue().then(() => {
        l.value = !1;
      });
    }), Gr(k), C(c, null), C(d, {
      onResize() {
        Ue().then(k);
      }
    }), u && de(
      () => u.show.value,
      (w) => Zb(this, null, function* () {
        w && (yield kn(), k());
      })
    );
    function p() {
      const { hint: w, value: b, composing: y } = e;
      if (!w && (!Zn(b) || y))
        return Ti("--placeholder-hidden");
      if (s.value)
        return Ti("--placeholder-hint");
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
      computePlaceholderState: p,
      n: Ti,
      classes: Qb,
      isEmpty: Zn,
      handleClear: g,
      handleClick: m
    };
  }
});
Of.render = _b;
var Zt = Of;
re(Zt);
le(Zt, Gt);
const ZT = Zt;
var Mr = Zt, e0 = Object.defineProperty, n0 = Object.defineProperties, o0 = Object.getOwnPropertyDescriptors, zu = Object.getOwnPropertySymbols, r0 = Object.prototype.hasOwnProperty, t0 = Object.prototype.propertyIsEnumerable, Ou = (e, n, o) => n in e ? e0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, a0 = (e, n) => {
  for (var o in n || (n = {}))
    r0.call(n, o) && Ou(e, o, n[o]);
  if (zu)
    for (var o of zu(n))
      t0.call(n, o) && Ou(e, o, n[o]);
  return e;
}, i0 = (e, n) => n0(e, o0(n));
const Es = i0(a0({
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
var l0 = Object.defineProperty, s0 = Object.defineProperties, u0 = Object.getOwnPropertyDescriptors, Tu = Object.getOwnPropertySymbols, c0 = Object.prototype.hasOwnProperty, d0 = Object.prototype.propertyIsEnumerable, Eu = (e, n, o) => n in e ? l0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, f0 = (e, n) => {
  for (var o in n || (n = {}))
    c0.call(n, o) && Eu(e, o, n[o]);
  if (Tu)
    for (var o of Tu(n))
      d0.call(n, o) && Eu(e, o, n[o]);
  return e;
}, v0 = (e, n) => s0(e, u0(n));
const Tf = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Fn() {
  const { parentProvider: e, index: n, bindParent: o } = hn(Tf), r = Wo();
  return {
    index: n,
    form: e,
    bindForm: o ? (a) => {
      o(v0(f0({}, a), { instance: r }));
    } : null
  };
}
function p0() {
  const { childProviders: e, length: n, bindChildren: o } = gn(Tf);
  return {
    length: n,
    formItems: e,
    bindFormItems: o
  };
}
const { name: m0, n: h0, classes: g0 } = _("input"), b0 = ["placeholder", "enterkeyhint"], y0 = ["autocomplete", "id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], k0 = ["autocomplete", "id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function $0(e, n) {
  const o = Q("var-field-decorator"), r = Q("var-form-details");
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[12] || (n[12] = (...t) => e.handleMousedown && e.handleMousedown(...t))
    },
    [
      G(
        o,
        wo(Zr({
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
            A(e.$slots, "clear-icon", { clear: t })
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
            }, null, 14, b0)) : q("v-if", !0),
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
              onFocus: n[0] || (n[0] = (...t) => e.handleFocus && e.handleFocus(...t)),
              onBlur: n[1] || (n[1] = (...t) => e.handleBlur && e.handleBlur(...t)),
              onInput: n[2] || (n[2] = (...t) => e.handleInput && e.handleInput(...t)),
              onChange: n[3] || (n[3] = (...t) => e.handleChange && e.handleChange(...t)),
              onCompositionstart: n[4] || (n[4] = (...t) => e.handleCompositionStart && e.handleCompositionStart(...t)),
              onCompositionend: n[5] || (n[5] = (...t) => e.handleCompositionEnd && e.handleCompositionEnd(...t))
            }, null, 46, y0)) : (h(), S("input", {
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
              onFocus: n[6] || (n[6] = (...t) => e.handleFocus && e.handleFocus(...t)),
              onBlur: n[7] || (n[7] = (...t) => e.handleBlur && e.handleBlur(...t)),
              onInput: n[8] || (n[8] = (...t) => e.handleInput && e.handleInput(...t)),
              onChange: n[9] || (n[9] = (...t) => e.handleChange && e.handleChange(...t)),
              onCompositionstart: n[10] || (n[10] = (...t) => e.handleCompositionStart && e.handleCompositionStart(...t)),
              onCompositionend: n[11] || (n[11] = (...t) => e.handleCompositionEnd && e.handleCompositionEnd(...t))
            }, null, 46, k0))
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
const Ef = x({
  name: m0,
  components: {
    VarFormDetails: Pn,
    VarFieldDecorator: Mr
  },
  props: Es,
  setup(e) {
    const n = Yd(), o = $(null), r = $(!1), t = $(!1), { bindForm: a, form: i } = Fn(), {
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
        return l.value ? "var(--field-decorator-error-color)" : r.value ? ye || "var(--field-decorator-focus-color)" : pe || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    C(a, {
      reset: F,
      validate: Y,
      resetValidation: c
    }), mn(() => {
      e.autofocus && j();
    });
    function k(ee) {
      Ue(() => {
        const { validateTrigger: pe, rules: ye, modelValue: Ee } = e;
        s(pe, ee, ye, Ee);
      });
    }
    function w(ee) {
      r.value = !0, C(e.onFocus, ee), k("onFocus");
    }
    function b(ee) {
      r.value = !1, C(e.onBlur, ee), k("onBlur");
    }
    function y(ee) {
      const pe = ee.target;
      let { value: ye } = pe;
      e.type === "number" && (ye = M(ye));
      const Ee = W(ye);
      return Ee === e.modelValue && (pe.value = Ee), Ee;
    }
    function P() {
      t.value = !0;
    }
    function z(ee) {
      t.value && (t.value = !1, ee.target.dispatchEvent(new Event("input")));
    }
    function O(ee) {
      if (t.value)
        return;
      const pe = y(ee);
      C(e["onUpdate:modelValue"], pe), C(e.onInput, pe, ee), k("onInput");
    }
    function B(ee) {
      const pe = R(y(ee));
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
      return e.maxlength ? ee.slice(0, H(e.maxlength)) : ee;
    }
    function U(ee) {
      const { disabled: pe } = e;
      i != null && i.disabled.value || pe || ee.target === o.value || (j(), Ve(ee));
    }
    function F() {
      C(e["onUpdate:modelValue"], ""), c();
    }
    function Y() {
      return u(e.rules, e.modelValue);
    }
    function j() {
      var ee;
      (ee = o.value) == null || ee.focus();
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
      maxlengthText: p,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: h0,
      classes: g0,
      isEmpty: Zn,
      handleFocus: w,
      handleBlur: b,
      handleInput: O,
      handleChange: B,
      handleClear: T,
      handleClick: E,
      handleCompositionStart: P,
      handleCompositionEnd: z,
      handleMousedown: U,
      validate: Y,
      resetValidation: c,
      reset: F,
      focus: j,
      blur: ae
    };
  }
});
Ef.render = $0;
var Jt = Ef;
re(Jt);
le(Jt, Es);
const JT = Jt;
var Nr = Jt;
const Is = {
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
var w0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function $t(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return w0[n];
  });
}
var uo = "top", Eo = "bottom", Ho = "right", So = "left", Bs = "auto", Qt = [uo, Eo, Ho, So], xt = "start", Ar = "end", C0 = "clippingParents", If = "viewport", wr = "popper", S0 = "reference", Iu = /* @__PURE__ */ Qt.reduce(function(e, n) {
  return e.concat([n + "-" + xt, n + "-" + Ar]);
}, []), Bf = /* @__PURE__ */ [].concat(Qt, [Bs]).reduce(function(e, n) {
  return e.concat([n, n + "-" + xt, n + "-" + Ar]);
}, []), P0 = "beforeRead", z0 = "read", O0 = "afterRead", T0 = "beforeMain", E0 = "main", I0 = "afterMain", B0 = "beforeWrite", D0 = "write", M0 = "afterWrite", N0 = [P0, z0, O0, T0, E0, I0, B0, D0, M0];
function Po(e) {
  return e.split("-")[0];
}
var A0 = {
  start: "end",
  end: "start"
};
function Bu(e) {
  return e.replace(/start|end/g, function(n) {
    return A0[n];
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
function Uo(e) {
  var n = qn(e).Element;
  return e instanceof n || e instanceof Element;
}
function Yn(e) {
  var n = qn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Ds(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = qn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Mo(e) {
  return ((Uo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var Pr = Math.max, Du = Math.min, ar = Math.round;
function Yi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Df() {
  return !/^((?!chrome|android).)*safari/i.test(Yi());
}
function ir(e, n, o) {
  n === void 0 && (n = !1), o === void 0 && (o = !1);
  var r = e.getBoundingClientRect(), t = 1, a = 1;
  n && Yn(e) && (t = e.offsetWidth > 0 && ar(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ar(r.height) / e.offsetHeight || 1);
  var i = Uo(e) ? qn(e) : window, l = i.visualViewport, s = !Df() && o, u = (r.left + (s && l ? l.offsetLeft : 0)) / t, c = (r.top + (s && l ? l.offsetTop : 0)) / a, d = r.width / t, f = r.height / a;
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
function Ms(e) {
  var n = qn(e), o = n.pageXOffset, r = n.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: r
  };
}
function Ns(e) {
  return ir(Mo(e)).left + Ms(e).scrollLeft;
}
function V0(e, n) {
  var o = qn(e), r = Mo(e), t = o.visualViewport, a = r.clientWidth, i = r.clientHeight, l = 0, s = 0;
  if (t) {
    a = t.width, i = t.height;
    var u = Df();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + Ns(e),
    y: s
  };
}
function co(e) {
  return qn(e).getComputedStyle(e);
}
function R0(e) {
  var n, o = Mo(e), r = Ms(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, a = Pr(o.scrollWidth, o.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = Pr(o.scrollHeight, o.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -r.scrollLeft + Ns(e), s = -r.scrollTop;
  return co(t || o).direction === "rtl" && (l += Pr(o.clientWidth, t ? t.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function _n(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function _t(e) {
  return _n(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ds(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Mo(e)
  );
}
function As(e) {
  var n = co(e), o = n.overflow, r = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + t + r);
}
function Mf(e) {
  return ["html", "body", "#document"].indexOf(_n(e)) >= 0 ? e.ownerDocument.body : Yn(e) && As(e) ? e : Mf(_t(e));
}
function zr(e, n) {
  var o;
  n === void 0 && (n = []);
  var r = Mf(e), t = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = qn(r), i = t ? [a].concat(a.visualViewport || [], As(r) ? r : []) : r, l = n.concat(i);
  return t ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(zr(_t(i)))
  );
}
function L0(e) {
  return ["table", "td", "th"].indexOf(_n(e)) >= 0;
}
function Mu(e) {
  return !Yn(e) || // https://github.com/popperjs/popper-core/issues/837
  co(e).position === "fixed" ? null : e.offsetParent;
}
function F0(e) {
  var n = /firefox/i.test(Yi()), o = /Trident/i.test(Yi());
  if (o && Yn(e)) {
    var r = co(e);
    if (r.position === "fixed")
      return null;
  }
  var t = _t(e);
  for (Ds(t) && (t = t.host); Yn(t) && ["html", "body"].indexOf(_n(t)) < 0; ) {
    var a = co(t);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Vs(e) {
  for (var n = qn(e), o = Mu(e); o && L0(o) && co(o).position === "static"; )
    o = Mu(o);
  return o && (_n(o) === "html" || _n(o) === "body" && co(o).position === "static") ? n : o || F0(e) || n;
}
function H0(e, n) {
  var o = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (o && Ds(o)) {
    var r = n;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ji(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function U0(e, n) {
  var o = ir(e, !1, n === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function Nu(e, n, o) {
  return n === If ? ji(V0(e, o)) : Uo(n) ? U0(n, o) : ji(R0(Mo(e)));
}
function Y0(e) {
  var n = zr(_t(e)), o = ["absolute", "fixed"].indexOf(co(e).position) >= 0, r = o && Yn(e) ? Vs(e) : e;
  return Uo(r) ? n.filter(function(t) {
    return Uo(t) && H0(t, r) && _n(t) !== "body";
  }) : [];
}
function j0(e, n, o, r) {
  var t = n === "clippingParents" ? Y0(e) : [].concat(n), a = [].concat(t, [o]), i = a[0], l = a.reduce(function(s, u) {
    var c = Nu(e, u, r);
    return s.top = Pr(c.top, s.top), s.right = Du(c.right, s.right), s.bottom = Du(c.bottom, s.bottom), s.left = Pr(c.left, s.left), s;
  }, Nu(e, i, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Vr(e) {
  return e.split("-")[1];
}
function W0(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Nf(e) {
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
    case Ho:
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
  var u = t ? W0(t) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case xt:
        s[u] = s[u] - (n[c] / 2 - o[c] / 2);
        break;
      case Ar:
        s[u] = s[u] + (n[c] / 2 - o[c] / 2);
        break;
    }
  }
  return s;
}
function K0() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function q0(e) {
  return Object.assign({}, K0(), e);
}
function X0(e, n) {
  return n.reduce(function(o, r) {
    return o[r] = e, o;
  }, {});
}
function Af(e, n) {
  n === void 0 && (n = {});
  var o = n, r = o.placement, t = r === void 0 ? e.placement : r, a = o.strategy, i = a === void 0 ? e.strategy : a, l = o.boundary, s = l === void 0 ? C0 : l, u = o.rootBoundary, c = u === void 0 ? If : u, d = o.elementContext, f = d === void 0 ? wr : d, p = o.altBoundary, g = p === void 0 ? !1 : p, m = o.padding, k = m === void 0 ? 0 : m, w = q0(typeof k != "number" ? k : X0(k, Qt)), b = f === wr ? S0 : wr, y = e.rects.popper, P = e.elements[g ? b : f], z = j0(Uo(P) ? P : P.contextElement || Mo(e.elements.popper), s, c, i), O = ir(e.elements.reference), B = Nf({
    reference: O,
    element: y,
    strategy: "absolute",
    placement: t
  }), T = ji(Object.assign({}, y, B)), E = f === wr ? T : O, M = {
    top: z.top - E.top + w.top,
    bottom: E.bottom - z.bottom + w.bottom,
    left: z.left - E.left + w.left,
    right: E.right - z.right + w.right
  }, R = e.modifiersData.offset;
  if (f === wr && R) {
    var W = R[t];
    Object.keys(M).forEach(function(U) {
      var F = [Ho, Eo].indexOf(U) >= 0 ? 1 : -1, Y = [uo, Eo].indexOf(U) >= 0 ? "y" : "x";
      M[U] += W[Y] * F;
    });
  }
  return M;
}
function G0(e, n) {
  n === void 0 && (n = {});
  var o = n, r = o.placement, t = o.boundary, a = o.rootBoundary, i = o.padding, l = o.flipVariations, s = o.allowedAutoPlacements, u = s === void 0 ? Bf : s, c = Vr(r), d = c ? l ? Iu : Iu.filter(function(g) {
    return Vr(g) === c;
  }) : Qt, f = d.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(g, m) {
    return g[m] = Af(e, {
      placement: m,
      boundary: t,
      rootBoundary: a,
      padding: i
    })[Po(m)], g;
  }, {});
  return Object.keys(p).sort(function(g, m) {
    return p[g] - p[m];
  });
}
function Z0(e) {
  if (Po(e) === Bs)
    return [];
  var n = $t(e);
  return [Bu(e), n, Bu(n)];
}
function J0(e) {
  var n = e.state, o = e.options, r = e.name;
  if (!n.modifiersData[r]._skip) {
    for (var t = o.mainAxis, a = t === void 0 ? !0 : t, i = o.altAxis, l = i === void 0 ? !0 : i, s = o.fallbackPlacements, u = o.padding, c = o.boundary, d = o.rootBoundary, f = o.altBoundary, p = o.flipVariations, g = p === void 0 ? !0 : p, m = o.allowedAutoPlacements, k = n.options.placement, w = Po(k), b = w === k, y = s || (b || !g ? [$t(k)] : Z0(k)), P = [k].concat(y).reduce(function(oe, me) {
      return oe.concat(Po(me) === Bs ? G0(n, {
        placement: me,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: m
      }) : me);
    }, []), z = n.rects.reference, O = n.rects.popper, B = /* @__PURE__ */ new Map(), T = !0, E = P[0], M = 0; M < P.length; M++) {
      var R = P[M], W = Po(R), U = Vr(R) === xt, F = [uo, Eo].indexOf(W) >= 0, Y = F ? "width" : "height", j = Af(n, {
        placement: R,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), ae = F ? U ? Ho : So : U ? Eo : uo;
      z[Y] > O[Y] && (ae = $t(ae));
      var ee = $t(ae), pe = [];
      if (a && pe.push(j[W] <= 0), l && pe.push(j[ae] <= 0, j[ee] <= 0), pe.every(function(oe) {
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
      }, L = ye; L > 0; L--) {
        var Z = Ee(L);
        if (Z === "break") break;
      }
    n.placement !== E && (n.modifiersData[r]._skip = !0, n.placement = E, n.reset = !0);
  }
}
const Q0 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: J0,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function x0(e, n, o) {
  var r = Po(e), t = [So, uo].indexOf(r) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, n, {
    placement: e
  })) : o, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * t, [So, Ho].indexOf(r) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function _0(e) {
  var n = e.state, o = e.options, r = e.name, t = o.offset, a = t === void 0 ? [0, 0] : t, i = Bf.reduce(function(c, d) {
    return c[d] = x0(d, n.rects, a), c;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[r] = i;
}
const ey = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: _0
};
var ny = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function oy(e) {
  var n = e.x, o = e.y, r = window, t = r.devicePixelRatio || 1;
  return {
    x: ar(n * t) / t || 0,
    y: ar(o * t) / t || 0
  };
}
function Au(e) {
  var n, o = e.popper, r = e.popperRect, t = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = i.x, p = f === void 0 ? 0 : f, g = i.y, m = g === void 0 ? 0 : g, k = typeof c == "function" ? c({
    x: p,
    y: m
  }) : {
    x: p,
    y: m
  };
  p = k.x, m = k.y;
  var w = i.hasOwnProperty("x"), b = i.hasOwnProperty("y"), y = So, P = uo, z = window;
  if (u) {
    var O = Vs(o), B = "clientHeight", T = "clientWidth";
    if (O === qn(o) && (O = Mo(o), co(O).position !== "static" && l === "absolute" && (B = "scrollHeight", T = "scrollWidth")), O = O, t === uo || (t === So || t === Ho) && a === Ar) {
      P = Eo;
      var E = d && O === z && z.visualViewport ? z.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[B]
      );
      m -= E - r.height, m *= s ? 1 : -1;
    }
    if (t === So || (t === uo || t === Eo) && a === Ar) {
      y = Ho;
      var M = d && O === z && z.visualViewport ? z.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[T]
      );
      p -= M - r.width, p *= s ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: l
  }, u && ny), W = c === !0 ? oy({
    x: p,
    y: m
  }) : {
    x: p,
    y: m
  };
  if (p = W.x, m = W.y, s) {
    var U;
    return Object.assign({}, R, (U = {}, U[P] = b ? "0" : "", U[y] = w ? "0" : "", U.transform = (z.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", U));
  }
  return Object.assign({}, R, (n = {}, n[P] = b ? m + "px" : "", n[y] = w ? p + "px" : "", n.transform = "", n));
}
function ry(e) {
  var n = e.state, o = e.options, r = o.gpuAcceleration, t = r === void 0 ? !0 : r, a = o.adaptive, i = a === void 0 ? !0 : a, l = o.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: Po(n.placement),
    variation: Vr(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Au(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Au(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Vf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ry,
  data: {}
};
function ty(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ay(e) {
  return e === qn(e) || !Yn(e) ? Ms(e) : ty(e);
}
function iy(e) {
  var n = e.getBoundingClientRect(), o = ar(n.width) / e.offsetWidth || 1, r = ar(n.height) / e.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function ly(e, n, o) {
  o === void 0 && (o = !1);
  var r = Yn(n), t = Yn(n) && iy(n), a = Mo(n), i = ir(e, t, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (r || !r && !o) && ((_n(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  As(a)) && (l = ay(n)), Yn(n) ? (s = ir(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = Ns(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function sy(e) {
  var n = ir(e), o = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(n.width - o) <= 1 && (o = n.width), Math.abs(n.height - r) <= 1 && (r = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: r
  };
}
function uy(e) {
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
function cy(e) {
  var n = uy(e);
  return N0.reduce(function(o, r) {
    return o.concat(n.filter(function(t) {
      return t.phase === r;
    }));
  }, []);
}
function dy(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(o) {
      Promise.resolve().then(function() {
        n = void 0, o(e());
      });
    })), n;
  };
}
function fy(e) {
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
var Vu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ru() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  return !n.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function vy(e) {
  e === void 0 && (e = {});
  var n = e, o = n.defaultModifiers, r = o === void 0 ? [] : o, t = n.defaultOptions, a = t === void 0 ? Vu : t;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Vu, a),
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
        var b = typeof w == "function" ? w(c.options) : w;
        m(), c.options = Object.assign({}, a, c.options, b), c.scrollParents = {
          reference: Uo(l) ? zr(l) : l.contextElement ? zr(l.contextElement) : [],
          popper: zr(s)
        };
        var y = cy(fy([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = y.filter(function(P) {
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
          var w = c.elements, b = w.reference, y = w.popper;
          if (Ru(b, y)) {
            c.rects = {
              reference: ly(b, Vs(y), c.options.strategy === "fixed"),
              popper: sy(y)
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
      update: dy(function() {
        return new Promise(function(k) {
          p.forceUpdate(), k(c);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!Ru(l, s))
      return p;
    p.setOptions(u).then(function(k) {
      !f && u.onFirstUpdate && u.onFirstUpdate(k);
    });
    function g() {
      c.orderedModifiers.forEach(function(k) {
        var w = k.name, b = k.options, y = b === void 0 ? {} : b, P = k.effect;
        if (typeof P == "function") {
          var z = P({
            state: c,
            name: w,
            instance: p,
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
    return p;
  };
}
var lt = {
  passive: !0
};
function py(e) {
  var n = e.state, o = e.instance, r = e.options, t = r.scroll, a = t === void 0 ? !0 : t, i = r.resize, l = i === void 0 ? !0 : i, s = qn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", o.update, lt);
  }), l && s.addEventListener("resize", o.update, lt), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", o.update, lt);
    }), l && s.removeEventListener("resize", o.update, lt);
  };
}
const my = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: py,
  data: {}
};
function hy(e) {
  var n = e.state, o = e.name;
  n.modifiersData[o] = Nf({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const gy = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: hy,
  data: {}
};
function by(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(o) {
    var r = n.styles[o] || {}, t = n.attributes[o] || {}, a = n.elements[o];
    !Yn(a) || !_n(a) || (Object.assign(a.style, r), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function yy(e) {
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
      !Yn(t) || !_n(t) || (Object.assign(t.style, l), Object.keys(a).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const ky = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: by,
  effect: yy,
  requires: ["computeStyles"]
};
var $y = [my, gy, Vf, ky], wy = /* @__PURE__ */ vy({
  defaultModifiers: $y
}), Cy = Object.defineProperty, Sy = Object.defineProperties, Py = Object.getOwnPropertyDescriptors, Lu = Object.getOwnPropertySymbols, zy = Object.prototype.hasOwnProperty, Oy = Object.prototype.propertyIsEnumerable, Fu = (e, n, o) => n in e ? Cy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ei = (e, n) => {
  for (var o in n || (n = {}))
    zy.call(n, o) && Fu(e, o, n[o]);
  if (Lu)
    for (var o of Lu(n))
      Oy.call(n, o) && Fu(e, o, n[o]);
  return e;
}, Ii = (e, n) => Sy(e, Py(n)), Hu = (e, n, o) => new Promise((r, t) => {
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
function Rf(e) {
  const n = $(null), o = $(null), r = $({ width: 0, height: 0 }), t = Kn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(M, R) {
      C(R ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = _r(() => t.value, 1);
  ks(() => t.value, a);
  let i = null, l = !1, s = !1;
  je(() => window, "keydown", O), gs(z, "click", w), to(B), de(() => [e.offsetX, e.offsetY, e.placement, e.strategy], B), de(() => e.disabled, E), de(
    () => t.value,
    (M) => {
      M && B();
    }
  ), jo(() => {
    var M;
    i = wy((M = z()) != null ? M : n.value, o.value, P());
  }), qr(() => {
    i.destroy();
  });
  function u() {
    if (!n.value)
      return;
    const { width: M, height: R } = Ko(n.value);
    r.value = {
      width: _e(M),
      height: _e(R)
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
    return Hu(this, null, function* () {
      e.trigger === "hover" && (s = !1, yield kn(), !l && E());
    });
  }
  function p() {
    e.trigger === "hover" && (l = !0);
  }
  function g() {
    return Hu(this, null, function* () {
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
    B(), C(e.onClosed);
  }
  function y() {
    const { offsetX: M, offsetY: R, placement: W } = e;
    u();
    const U = {
      x: _e(M),
      y: _e(R)
    };
    switch (W) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: U.x,
          distance: U.y - r.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: U.x,
          distance: U.y - r.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: U.x,
          distance: U.y - r.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: U.x,
          distance: -U.y - r.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: U.x,
          distance: -U.y - r.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: U.x,
          distance: -U.y - r.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: U.y,
          distance: U.x - r.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: U.y,
          distance: -U.x - r.value.width
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
    const { placement: M, skidding: R, distance: W } = y(), U = [
      Ii(Ei({}, Q0), {
        enabled: t.value
      }),
      Ii(Ei({}, ey), {
        options: {
          offset: [R, W]
        }
      }),
      Ii(Ei({}, Vf), {
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
      modifiers: U,
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
  function B() {
    i.setOptions(P());
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
    handlePopoverMouseenter: p,
    handlePopoverMouseleave: g,
    handleClosed: b,
    resize: B,
    open: T,
    close: E
  };
}
const { name: Ty, n: Ey, classes: Iy } = _("menu");
function By(e, n) {
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
const Lf = x({
  name: Ty,
  props: Is,
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
      handleClosed: p,
      // expose
      open: g,
      // expose
      close: m,
      // expose
      resize: k
    } = Rf(e);
    return {
      popover: o,
      host: r,
      hostSize: t,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: un,
      toSizeUnit: ze,
      n: Ey,
      classes: Iy,
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
Lf.render = By;
var ea = Lf;
re(ea);
le(ea, Is);
const QT = ea;
var Rr = ea;
const Ff = {
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
}, Hf = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Dy() {
  const { bindChildren: e, childProviders: n, length: o } = gn(
    Hf
  );
  return {
    length: o,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function My() {
  const { bindParent: e, parentProvider: n, index: o } = hn(
    Hf
  );
  return {
    index: o,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
const { name: Ny, n: Ay, classes: Vy } = _("checkbox"), Ry = ["tabindex"];
function Ly(e, n) {
  const o = Q("var-icon"), r = Q("var-hover-overlay"), t = Q("var-form-details"), a = Ye("hover"), i = Ye("ripple");
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
            G(r, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ], 46, Ry)), [
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
      G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Uf = x({
  name: Ny,
  directives: { Ripple: nn, Hover: En },
  components: {
    VarIcon: Ze,
    VarFormDetails: Pn,
    VarHoverOverlay: Vn
  },
  props: Ff,
  setup(e) {
    const n = $(null), o = $(!1), r = Kn(e, "modelValue"), t = Kn(e, "indeterminate"), a = I(() => r.value === e.checkedValue), i = I(() => e.checkedValue), l = $(!1), { checkboxGroup: s, bindCheckboxGroup: u } = My(), { hovering: c, handleHovering: d } = xn(), { form: f, bindForm: p } = Fn(), {
      errorMessage: g,
      validateWithTrigger: m,
      validate: k,
      // expose
      resetValidation: w
    } = Ln(), b = {
      checkedValue: i,
      checked: a,
      sync: B,
      validate: U,
      resetValidation: w,
      reset: E,
      resetWithAnimation: T
    };
    C(u, b), C(p, b), je(() => window, "keydown", R), je(() => window, "keyup", W);
    function y(F) {
      Ue(() => {
        const { validateTrigger: Y, rules: j, modelValue: ae } = e;
        m(Y, F, j, ae);
      });
    }
    function P(F) {
      const { checkedValue: Y, onChange: j } = e;
      r.value = F, t.value = !1, C(j, r.value), y("onChange"), F === Y ? s == null || s.onChecked(Y) : s == null || s.onUnchecked(Y);
    }
    function z(F) {
      const { disabled: Y, readonly: j, checkedValue: ae, uncheckedValue: ee, onClick: pe } = e;
      if (f != null && f.disabled.value || Y || (C(pe, F), f != null && f.readonly.value || j))
        return;
      l.value = !0;
      const ye = s ? s.checkedCount.value >= Number(s.max.value) : !1;
      !a.value && ye || P(a.value ? ee : ae);
    }
    function O() {
      n.value.focus();
    }
    function B(F) {
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
      ![Y, j].includes(F) && (F = a.value ? j : Y), P(F);
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
    function U() {
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
      n: Ay,
      classes: Vy,
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
Uf.render = Ly;
var na = Uf;
re(na);
le(na, Ff);
const xT = na;
var lr = na;
const Yf = Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function Fy() {
  const { length: e, childProviders: n, bindChildren: o } = gn(
    Yf
  );
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: o
  };
}
function Hy() {
  const { index: e, parentProvider: n, bindParent: o } = hn(
    Yf
  );
  return o || An("MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: o
  };
}
const jf = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  // internal
  option: Object
}, { name: Uy, n: Yy, classes: jy } = _("menu-option"), Wy = ["tabindex"];
function Ky(e, n) {
  const o = Q("var-checkbox"), r = Q("maybe-v-node"), t = Q("var-hover-overlay"), a = Ye("ripple"), i = Ye("hover");
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
          G(r, {
            class: v(e.n("$--ellipsis")),
            is: e.labelVNode
          }, null, 8, ["class", "is"])
        ],
        2
        /* CLASS */
      )
    ]),
    G(t, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 42, Wy)), [
    [a, { disabled: e.disabled || !e.ripple }],
    [i, e.handleHovering, "desktop"]
  ]);
}
const Wf = x({
  name: Uy,
  directives: { Ripple: nn, Hover: En },
  components: {
    VarCheckbox: lr,
    VarHoverOverlay: Vn,
    MaybeVNode: Qr
  },
  props: jf,
  setup(e) {
    const n = $(), o = $(!1), r = $(!1), t = I(() => r.value), a = I(
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
    ), i = I(() => e.value), { menuSelect: l, bindMenuSelect: s } = Hy(), { size: u, multiple: c, onSelect: d, computeLabel: f } = l, { hovering: p, handleHovering: g } = xn(), m = {
      label: a,
      value: i,
      selected: t,
      sync: P
    };
    de([() => e.label, () => e.value], f), s(m), je(() => window, "keydown", w), je(() => window, "keyup", b);
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
    function P(z) {
      r.value = z;
    }
    return {
      root: n,
      optionSelected: r,
      size: u,
      multiple: c,
      hovering: p,
      isFocusing: o,
      labelVNode: a,
      n: Yy,
      classes: jy,
      handleHovering: g,
      handleClick: k,
      handleSelect: y
    };
  }
});
Wf.render = Ky;
var oa = Wf;
re(oa);
le(oa, jf);
const _T = oa;
var sr = oa, qy = Object.defineProperty, Xy = Object.defineProperties, Gy = Object.getOwnPropertyDescriptors, Uu = Object.getOwnPropertySymbols, Zy = Object.prototype.hasOwnProperty, Jy = Object.prototype.propertyIsEnumerable, Yu = (e, n, o) => n in e ? qy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Qy = (e, n) => {
  for (var o in n || (n = {}))
    Zy.call(n, o) && Yu(e, o, n[o]);
  if (Uu)
    for (var o of Uu(n))
      Jy.call(n, o) && Yu(e, o, n[o]);
  return e;
}, xy = (e, n) => Xy(e, Gy(n));
const Kf = xy(Qy({
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
}, De(Is, [
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
function qf(e) {
  const {
    multiple: n,
    modelValue: o,
    optionProviders: r,
    optionProvidersLength: t
  } = e, a = $(""), i = $([]);
  de(o, d, { deep: !0 }), de(t, d);
  function l() {
    const f = n(), p = o();
    f && (i.value = p.map(s)), !f && !Zn(p) && (a.value = s(p)), !f && Zn(p) && (a.value = "");
  }
  function s(f) {
    var p;
    const g = r();
    let m = g.find(({ value: k }) => k.value === f);
    return m || (m = g.find(({ label: k }) => k.value === f)), (p = m == null ? void 0 : m.label.value) != null ? p : "";
  }
  function u({ value: f, label: p }) {
    var g;
    return (g = f.value) != null ? g : p.value;
  }
  function c(f) {
    const p = n(), g = r();
    return p ? g.filter(({ selected: m }) => m.value).map(u) : u(f);
  }
  function d() {
    const f = n(), p = o(), g = r();
    f ? g.forEach((m) => m.sync(p.includes(u(m)))) : g.forEach((m) => m.sync(p === u(m))), l();
  }
  return {
    label: a,
    labels: i,
    computeLabel: l,
    getSelectedValue: c
  };
}
const { name: _y, n: e1, classes: n1 } = _("menu-select");
function o1(e, n) {
  const o = Q("var-menu-option"), r = Q("var-menu");
  return h(), Ce(r, {
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
          class: v(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
        },
        [
          e.options.length ? (h(!0), S(
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
const Xf = x({
  name: _y,
  components: { VarMenu: Rr, VarMenuOption: sr },
  props: Kf,
  setup(e) {
    const n = $(null), o = $(null), r = Kn(e, "show"), { menuOptions: t, length: a, bindMenuOptions: i } = Fy(), { computeLabel: l, getSelectedValue: s } = qf({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => t,
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
      if (e.disabled || !r.value)
        return;
      const { key: k } = m;
      if (["Escape", "ArrowDown", "ArrowUp"].includes(k) && Ve(m), k === "Escape") {
        n.value.$el.focus(), p(), C(e.onKeyEscape);
        return;
      }
      (k === "ArrowDown" || k === "ArrowUp") && _d(n.value.$el, o.value, k);
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
      show: r,
      menu: n,
      menuOptionsRef: o,
      n: e1,
      classes: n1,
      formatElevation: un,
      open: f,
      close: p,
      resize: g
    };
  }
});
Xf.render = o1;
var ra = Xf;
re(ra);
le(ra, Kf);
const e5 = ra;
var Lr = ra, r1 = Object.defineProperty, ju = Object.getOwnPropertySymbols, t1 = Object.prototype.hasOwnProperty, a1 = Object.prototype.propertyIsEnumerable, Wu = (e, n, o) => n in e ? r1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, i1 = (e, n) => {
  for (var o in n || (n = {}))
    t1.call(n, o) && Wu(e, o, n[o]);
  if (ju)
    for (var o of ju(n))
      a1.call(n, o) && Wu(e, o, n[o]);
  return e;
};
const Gf = i1({
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
}, De(Es, [
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
var st = (e, n, o) => new Promise((r, t) => {
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
const { name: l1, n: s1 } = _("auto-complete"), u1 = ["tabindex"];
function c1(e, n) {
  const o = Q("var-input"), r = Q("var-menu-option"), t = Q("var-menu-select"), a = Q("var-form-details");
  return h(), S("div", {
    ref: "root",
    class: v(e.n()),
    tabindex: e.disabled || e.formDisabled ? void 0 : "0",
    onFocusin: n[2] || (n[2] = (...i) => e.focus && e.focus(...i)),
    onClick: n[3] || (n[3] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    G(t, {
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
        }), rr({
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
  ], 42, u1);
}
const Zf = x({
  name: l1,
  components: {
    VarInput: Nr,
    VarMenuSelect: Lr,
    VarMenuOption: sr,
    VarFormDetails: Pn
  },
  props: Gf,
  setup(e) {
    const n = $(), o = $(), r = $(!1), t = Kn(e, "modelValue"), a = $([]), i = $(!1), l = I(() => {
      const { maxlength: Y } = e;
      return Y ? Zn(t.value) ? `0 / ${Y}` : `${String(t.value).length}/${Y}` : "";
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
    gs(
      () => n.value,
      "click",
      () => {
        if (g) {
          g = !1;
          return;
        }
        y();
      }
    ), de(() => [e.options, r.value], B), C(f, m), je(() => window, "keydown", O);
    function k() {
      C(e["onUpdate:modelValue"], ""), d();
    }
    function w() {
      return c(e.rules, e.modelValue);
    }
    function b() {
      r.value || e.disabled || p != null && p.disabled.value || (r.value = !0, o.value.focus(), C(e.onFocus), z("onFocus"));
    }
    function y() {
      r.value && (r.value = !1, i.value = !1, o.value.blur(), C(e.onBlur), z("onBlur"));
    }
    function P() {
      i.value || y();
    }
    function z(Y) {
      Ue(() => {
        const { validateTrigger: j, rules: ae, modelValue: ee } = e;
        u(j, Y, ae, ee);
      });
    }
    function O(Y) {
      return st(this, null, function* () {
        var j;
        if (p != null && p.disabled.value || p != null && p.readonly.value || e.disabled || e.readonly || !r.value || !i.value)
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
    function B() {
      return st(this, null, function* () {
        r.value && (i.value = F(t.value)), i.value && (a.value = e.options);
      });
    }
    function T(Y, j) {
      return st(this, null, function* () {
        B(), C(e.onInput, Y, j), z("onInput");
      });
    }
    function E() {
      g = !0, B(), C(e.onClear, t.value), z("onClear");
    }
    function M(Y) {
      e.disabled || p != null && p.disabled.value || (C(e.onClick, Y), z("onClick"));
    }
    function R(Y) {
      C(e.onChange, Y), z("onChange");
    }
    function W(Y) {
      return st(this, null, function* () {
        var j;
        e.maxlength != null && (Y = Y.slice(0, H(e.maxlength))), Y !== t.value && (t.value = Y, C(e.onChange, Y), z("onChange")), yield nr(), (j = o.value) == null || j.focus();
      });
    }
    function U() {
      o.value.focus();
    }
    function F(Y) {
      return e.disabled || e.readonly || p != null && p.disabled.value || p != null && p.readonly.value ? !1 : e.options.length > 0 && (e.getShow != null ? e.getShow(Y) : Y.length > 0);
    }
    return {
      root: n,
      input: o,
      value: t,
      isShowMenuSelect: i,
      viewOptions: a,
      isFocusing: r,
      formDisabled: p == null ? void 0 : p.disabled,
      formReadonly: p == null ? void 0 : p.readonly,
      errorMessage: s,
      maxlengthText: l,
      n: s1,
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
      blur: y,
      focus: b
    };
  }
});
Zf.render = c1;
var ta = Zf;
re(ta);
le(ta, Gf);
const n5 = ta;
var Wi = ta;
const Ku = (e) => yn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, qu = (e) => yn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, d1 = (e) => {
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
}, Ki = (e) => e, Xu = (e) => e ** 3, Jf = (e) => e < 0.5 ? Xu(e * 2) / 2 : 1 - Xu((1 - e) * 2) / 2, Yo = (e, n, o = "") => {
  if (e === void 0 && (e = ""), e.length >= n)
    return e;
  const r = n - e.length, t = Math.floor(r / o.length);
  return o.repeat(t) + o.slice(0, r % o.length) + e;
};
var f1 = Object.defineProperty, Gu = Object.getOwnPropertySymbols, v1 = Object.prototype.hasOwnProperty, p1 = Object.prototype.propertyIsEnumerable, Zu = (e, n, o) => n in e ? f1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, m1 = (e, n) => {
  for (var o in n || (n = {}))
    v1.call(n, o) && Zu(e, o, n[o]);
  if (Gu)
    for (var o of Gu(n))
      p1.call(n, o) && Zu(e, o, n[o]);
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
const h1 = "background-image", g1 = "lazy-loading", b1 = "lazy-error", Ju = "lazy-attempt", y1 = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], qi = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", ur = [], It = [], Qf = d1(100), dn = {
  loading: qi,
  error: qi,
  attempt: 3,
  throttleWait: 300,
  events: y1
};
let Rs = ms(nt, dn.throttleWait);
function ia(e, n) {
  e._lazy.arg === h1 ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function k1(e) {
  e._lazy.loading && ia(e, e._lazy.loading), nt();
}
function $1(e) {
  e._lazy.error && ia(e, e._lazy.error), e._lazy.state = "error", Fs(e), nt();
}
function xf(e, n) {
  ia(e, n), e._lazy.state = "success", Fs(e), nt();
}
function w1(e) {
  var n;
  It.includes(e) || (It.push(e), (n = dn.events) == null || n.forEach((o) => {
    e.addEventListener(o, Rs, { passive: !0 });
  }));
}
function C1() {
  It.forEach((e) => {
    var n;
    (n = dn.events) == null || n.forEach((o) => {
      e.removeEventListener(o, Rs);
    });
  }), It.length = 0;
}
function S1(e, n) {
  var o, r;
  const t = {
    loading: (o = e.getAttribute(g1)) != null ? o : dn.loading,
    error: (r = e.getAttribute(b1)) != null ? r : dn.error,
    attempt: e.getAttribute(Ju) ? Number(e.getAttribute(Ju)) : dn.attempt
  };
  e._lazy = m1({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), ia(e, qi), C(dn.filter, e._lazy);
}
function P1(e, n) {
  const o = new Image();
  o.src = n, e._lazy.preloadImage = o, o.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Qf.add(n), xf(e, n);
  }), o.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? $1(e) : _f(e);
  });
}
function _f(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (Qf.has(n)) {
    xf(e, n), e._lazy.attemptLock = !1;
    return;
  }
  k1(e), P1(e, n);
}
function Ls(e) {
  return aa(this, null, function* () {
    yield kn(), eg(e) && _f(e);
  });
}
function nt() {
  ur.forEach((e) => Ls(e));
}
function z1(e) {
  return aa(this, null, function* () {
    !ur.includes(e) && ur.push(e), Ug(e).forEach(w1), yield Ls(e);
  });
}
function Fs(e) {
  tr(ur, e), ur.length === 0 && C1();
}
function O1(e, n) {
  const { src: o, arg: r } = e._lazy;
  return o !== n.value || r !== n.arg;
}
function ev(e, n) {
  return aa(this, null, function* () {
    S1(e, n), yield z1(e);
  });
}
function T1(e, n) {
  return aa(this, null, function* () {
    if (!O1(e, n)) {
      ur.includes(e) && (yield Ls(e));
      return;
    }
    yield ev(e, n);
  });
}
function E1(e = {}) {
  const { events: n, loading: o, error: r, attempt: t, throttleWait: a, filter: i } = e;
  dn.events = n ?? dn.events, dn.loading = o ?? dn.loading, dn.error = r ?? dn.error, dn.attempt = t ?? dn.attempt, dn.throttleWait = a ?? dn.throttleWait, dn.filter = i;
}
const nv = {
  mounted: ev,
  unmounted: Fs,
  updated: T1,
  install(e, n) {
    E1(n), Rs = ms(nt, dn.throttleWait), e.directive("lazy", this);
  }
}, o5 = nv;
var Fr = nv;
const ov = {
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
}, I1 = (e) => ["mini", "small", "normal", "large"].includes(e), { name: B1, n: D1, classes: M1 } = _("avatar"), N1 = ["src", "alt", "lazy-loading", "lazy-error"], A1 = ["src", "alt"];
function V1(e, n) {
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
      onClick: n[3] || (n[3] = (...r) => e.handleClick && e.handleClick(...r))
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
            onLoad: n[0] || (n[0] = (...r) => e.handleLoad && e.handleLoad(...r))
          }, null, 46, N1)), [
            [o, e.src]
          ]) : (h(), S("img", {
            key: 1,
            role: "img",
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: X({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...r) => e.handleLoad && e.handleLoad(...r)),
            onError: n[2] || (n[2] = (...r) => e.handleError && e.handleError(...r))
          }, null, 46, A1))
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
const rv = x({
  name: B1,
  directives: { Lazy: Fr },
  props: ov,
  setup(e) {
    const n = $(null), o = $(null), r = $(1);
    mn(t), Gr(t);
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
      n: D1,
      classes: M1,
      isInternalSize: I1,
      toSizeUnit: ze,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
rv.render = V1;
var la = rv;
re(la);
le(la, ov);
const r5 = la;
var Xi = la;
const tv = {
  offset: [Number, String],
  vertical: Boolean
}, { name: R1, n: L1, classes: F1 } = _("avatar-group");
function H1(e, n) {
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
const av = x({
  name: R1,
  props: tv,
  setup(e) {
    return {
      rootStyles: I(() => e.offset == null ? {} : {
        "--avatar-group-offset": ze(e.offset)
      }),
      n: L1,
      classes: F1
    };
  }
});
av.render = H1;
var sa = av;
re(sa);
le(sa, tv);
const t5 = sa;
var Gi = sa;
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
}, { name: U1, n: Y1, classes: j1 } = _("loading");
function W1(e, n) {
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
            Ke(e.loadingTypeDict, (o, r) => (h(), S(
              Ne,
              { key: r },
              [
                e.type === r ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: v(e.classes(e.n(r), e.n(`${r}--${e.size}`)))
                  },
                  [
                    (h(!0), S(
                      Ne,
                      null,
                      Ke(o, (t) => (h(), S(
                        "div",
                        {
                          key: t + r,
                          style: X({ backgroundColor: e.color }),
                          class: v(e.classes(e.n(`${r}-item`), e.n(`${r}-item--${e.size}`)))
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
const iv = x({
  name: U1,
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
      n: Y1,
      classes: j1,
      multiplySizeUnit: Cn
    };
  }
});
iv.render = W1;
var ua = iv;
re(ua);
le(ua, lo);
const a5 = ua;
var cr = ua, K1 = Object.defineProperty, q1 = Object.defineProperties, X1 = Object.getOwnPropertyDescriptors, Qu = Object.getOwnPropertySymbols, G1 = Object.prototype.hasOwnProperty, Z1 = Object.prototype.propertyIsEnumerable, xu = (e, n, o) => n in e ? K1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, _u = (e, n) => {
  for (var o in n || (n = {}))
    G1.call(n, o) && xu(e, o, n[o]);
  if (Qu)
    for (var o of Qu(n))
      Z1.call(n, o) && xu(e, o, n[o]);
  return e;
}, ec = (e, n) => q1(e, X1(n));
const lv = {
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
  loadingSize: ec(_u({}, De(lo, "size")), {
    default: void 0
  }),
  loadingColor: ec(_u({}, De(lo, "color")), {
    default: "currentColor"
  }),
  onClick: V(),
  onTouchstart: V()
}, sv = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function J1() {
  const { bindChildren: e, childProviders: n, length: o } = gn(sv);
  return {
    length: o,
    buttons: n,
    bindButtons: e
  };
}
function Q1() {
  const { bindParent: e, parentProvider: n, index: o } = hn(sv);
  return {
    index: o,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: x1, n: _1, classes: ek } = _("button"), nk = ["tabindex", "type", "disabled"];
function ok(e, n) {
  const o = Q("var-loading"), r = Q("var-hover-overlay"), t = Ye("ripple"), a = Ye("hover");
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
    G(r, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, nk)), [
    [t, { disabled: e.disabled || !e.ripple || e.loading || e.pending }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const uv = x({
  name: x1,
  components: {
    VarLoading: cr,
    VarHoverOverlay: Vn
  },
  directives: { Ripple: nn, Hover: En },
  props: lv,
  setup(e) {
    const n = $(!1), o = $(!1), { buttonGroup: r } = Q1(), { hovering: t, handleHovering: a } = xn(), i = I(() => {
      var d, f, p, g, m, k;
      if (!r)
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
      const { type: w, size: b, color: y, textColor: P, mode: z } = r;
      return {
        elevation: "",
        type: (p = e.type) != null ? p : w.value,
        size: (g = e.size) != null ? g : b.value,
        color: (m = e.color) != null ? m : y.value,
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
      hovering: t,
      isFocusing: n,
      n: _1,
      classes: ek,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      handleFocus: c
    };
  }
});
uv.render = ok;
var ca = uv;
re(ca);
le(ca, lv);
const i5 = ca;
var zn = ca;
const cv = {
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
}, { name: rk, n: tk, classes: ak } = _("back-top");
function ik(e, n) {
  const o = Q("var-icon"), r = Q("var-button");
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
        onClick: n[0] || (n[0] = Wn((...t) => e.handleClick && e.handleClick(...t), ["stop"]))
      }),
      [
        A(e.$slots, "default", {}, () => [
          G(r, {
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
const dv = x({
  name: rk,
  components: {
    VarButton: zn,
    VarIcon: Ze
  },
  inheritAttrs: !1,
  props: cv,
  setup(e) {
    const n = $(!1), o = $(null), r = $(!0);
    let t;
    const a = ms(() => {
      i();
    }, 200);
    jo(() => {
      s(), u(), i(), r.value = !1;
    }), Bo(u), Jr(c);
    function i() {
      n.value = Fo(t) >= _e(e.visibilityHeight);
    }
    function l(d) {
      C(e.onClick, d);
      const f = ps(t);
      Dr(t, {
        left: f,
        duration: e.duration,
        animation: Jf
      });
    }
    function s() {
      t = e.target ? Qd(e.target, "BackTop") : To(o.value);
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
      n: tk,
      classes: ak,
      handleClick: l
    };
  }
});
dv.render = ik;
var da = dv;
re(da);
le(da, cv);
const l5 = da;
var Zi = da;
const fv = {
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
var lk = Object.defineProperty, nc = Object.getOwnPropertySymbols, sk = Object.prototype.hasOwnProperty, uk = Object.prototype.propertyIsEnumerable, oc = (e, n, o) => n in e ? lk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ck = (e, n) => {
  for (var o in n || (n = {}))
    sk.call(n, o) && oc(e, o, n[o]);
  if (nc)
    for (var o of nc(n))
      uk.call(n, o) && oc(e, o, n[o]);
  return e;
};
const { name: dk, n: fk, classes: vk } = _("badge"), pk = { key: 0 };
function mk(e, n) {
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
              style: ck({ background: e.color }, e.offsetStyle)
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
                  pk,
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
const vv = x({
  name: dk,
  components: { VarIcon: Ze },
  inheritAttrs: !1,
  props: fv,
  setup(e) {
    const n = I(() => {
      const { value: r, maxValue: t } = e;
      return r != null && t != null && H(r) > H(t) ? `${t}+` : r;
    }), o = I(() => ({
      "--badge-offset-y": ze(e.offsetY),
      "--badge-offset-x": ze(e.offsetX)
    }));
    return {
      value: n,
      offsetStyle: o,
      n: fk,
      classes: vk
    };
  }
});
vv.render = mk;
var fa = vv;
re(fa);
le(fa, fv);
const s5 = fa;
var Bt = fa;
const pv = {
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
}, mv = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function hk() {
  const { childProviders: e, length: n, bindChildren: o } = gn(
    mv
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: o
  };
}
var gk = Object.defineProperty, rc = Object.getOwnPropertySymbols, bk = Object.prototype.hasOwnProperty, yk = Object.prototype.propertyIsEnumerable, tc = (e, n, o) => n in e ? gk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ac = (e, n) => {
  for (var o in n || (n = {}))
    bk.call(n, o) && tc(e, o, n[o]);
  if (rc)
    for (var o of rc(n))
      yk.call(n, o) && tc(e, o, n[o]);
  return e;
};
const { name: kk, n: $k, classes: wk } = _("bottom-navigation"), { n: va } = _("bottom-navigation-item"), ic = va("--right-half-space"), lc = va("--left-half-space"), sc = va("--right-space"), Ck = {
  type: "primary"
};
function Sk(e, n) {
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
const hv = x({
  name: kk,
  components: { VarButton: zn },
  props: pv,
  setup(e, { slots: n }) {
    const o = $(null), r = I(() => e.active), t = I(() => e.activeColor), a = I(() => e.inactiveColor), i = I(() => e.variant), l = $(), s = $({}), { length: u, bottomNavigationItems: c, bindBottomNavigationItem: d } = hk();
    d({
      active: r,
      activeColor: t,
      inactiveColor: a,
      variant: i,
      onToggle: w
    }), de(() => u.value, p), de(
      () => e.fabProps,
      (M) => {
        s.value = ac(ac({}, Ck), M);
      },
      { immediate: !0, deep: !0 }
    ), to(E), mn(() => {
      E(), n.fab && z(u.value);
    }), Gr(() => {
      P(), n.fab && z(u.value);
    });
    function p() {
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
    function P() {
      B().forEach((R) => {
        R.classList.remove(ic, lc, sc);
      });
    }
    function z(M) {
      const R = B(), W = R.length, U = M % 2 === 0;
      R.forEach((F, Y) => {
        O(U, F, Y, W);
      });
    }
    function O(M, R, W, U) {
      const F = W === U - 1;
      if (!M && F) {
        R.classList.add(sc);
        return;
      }
      const Y = W === U / 2 - 1, j = W === U / 2;
      Y ? R.classList.add(ic) : j && R.classList.add(lc);
    }
    function B() {
      return Array.from(o.value.querySelectorAll(`.${va()}`));
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
      n: $k,
      classes: wk,
      handleFabClick: T
    };
  }
});
hv.render = Sk;
var pa = hv;
re(pa);
le(pa, pv);
const u5 = pa;
var Ji = pa;
const gv = {
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
function Pk() {
  const { parentProvider: e, index: n, bindParent: o } = hn(
    mv
  );
  return o || An("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: o
  };
}
const { name: zk, n: Ok, classes: Tk } = _("bottom-navigation-item"), Ek = {
  type: "danger",
  dot: !0
};
function Ik(e, n) {
  const o = Q("var-icon"), r = Q("var-badge"), t = Ye("ripple");
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
          e.badge ? (h(), Ce(r, He({ key: 0 }, e.badgeProps, {
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
    [t]
  ]);
}
const bv = x({
  name: zk,
  components: {
    VarBadge: Bt,
    VarIcon: Ze
  },
  directives: { Ripple: nn },
  props: gv,
  setup(e) {
    const n = I(() => e.name), o = I(() => [n.value, t.value].includes(l.value)), r = I(() => e.badge === !0 ? Ek : e.badge), { index: t, bottomNavigation: a, bindBottomNavigation: i } = Pk(), { active: l, activeColor: s, inactiveColor: u, variant: c } = a;
    i({
      name: n,
      index: t
    });
    function f() {
      var p;
      const g = (p = n.value) != null ? p : t.value;
      C(e.onClick, g), C(a.onToggle, g);
    }
    return {
      activeColor: s,
      inactiveColor: u,
      badgeProps: r,
      isActive: o,
      variant: c,
      n: Ok,
      classes: Tk,
      handleClick: f
    };
  }
});
bv.render = Ik;
var ma = bv;
re(ma);
le(ma, gv);
const c5 = ma;
var Qi = ma;
const yv = {
  separator: String,
  onClick: V()
}, kv = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Bk() {
  const { childProviders: e, bindChildren: n, length: o } = gn(
    kv
  );
  return {
    length: o,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Dk() {
  const { parentProvider: e, bindParent: n, index: o } = hn(
    kv
  );
  return n || An("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: o,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: Mk, n: Nk, classes: Ak } = _("breadcrumb");
function Vk(e, n) {
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
const $v = x({
  name: Mk,
  props: yv,
  setup(e) {
    const { index: n, breadcrumb: o, bindBreadcrumb: r } = Dk(), t = I(() => n.value === o.length.value - 1), a = I(() => o.separator.value);
    r(null);
    function i(l) {
      t.value || C(e.onClick, l);
    }
    return {
      n: Nk,
      classes: Ak,
      isLast: t,
      parentSeparator: a,
      handleClick: i
    };
  }
});
$v.render = Vk;
var ha = $v;
re(ha);
le(ha, yv);
const d5 = ha;
var xi = ha;
const wv = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: Rk, n: Lk } = _("breadcrumbs");
function Fk(e, n) {
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
const Cv = x({
  name: Rk,
  props: wv,
  setup(e) {
    const n = I(() => e.separator), { bindBreadcrumbList: o, length: r } = Bk();
    return o({
      length: r,
      separator: n
    }), { n: Lk };
  }
});
Cv.render = Fk;
var ga = Cv;
re(ga);
le(ga, wv);
const f5 = ga;
var _i = ga;
const Sv = {
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
}, { name: Hk, n: Uk, classes: Yk } = _("button-group");
function jk(e, n) {
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
const Pv = x({
  name: Hk,
  props: Sv,
  setup(e) {
    const { bindButtons: n } = J1(), o = {
      elevation: I(() => e.elevation),
      type: I(() => e.type),
      size: I(() => e.size),
      color: I(() => e.color),
      textColor: I(() => e.textColor),
      mode: I(() => e.mode)
    };
    return n(o), {
      n: Uk,
      classes: Yk,
      formatElevation: un
    };
  }
});
Pv.render = jk;
var ba = Pv;
re(ba);
le(ba, Sv);
const v5 = ba;
var el = ba;
const zv = {
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
  // deprecated
  outline: Boolean
};
var uc = (e, n, o) => new Promise((r, t) => {
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
const { name: Wk, n: Kk, classes: qk } = _("card"), Xk = 500, Gk = ["src", "alt"];
function Zk(e, n) {
  const o = Q("var-icon"), r = Q("var-button"), t = Ye("ripple");
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
            }, null, 14, Gk)) : q("v-if", !0)
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
                G(r, {
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
    [t, { disabled: !e.ripple || e.floater }]
  ]);
}
const Ov = x({
  name: Wk,
  directives: { Ripple: nn },
  components: {
    VarIcon: Ze,
    VarButton: zn
  },
  props: zv,
  setup(e) {
    const n = $(null), o = $(null), r = $("auto"), t = $("auto"), a = $("100%"), i = $("100%"), l = $("auto"), s = $("auto"), u = $(void 0), c = $("hidden"), d = $("0px"), f = $("0"), p = I(() => e.layout === "row"), g = $(!1), m = $(!1), { zIndex: k } = _r(() => e.floating, 1);
    let w = "auto", b = "auto", y = null;
    const P = $(null);
    xr(
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
      return uc(this, null, function* () {
        clearTimeout(P.value), clearTimeout(y), P.value = null, P.value = setTimeout(
          () => uc(this, null, function* () {
            const { width: E, height: M, left: R, top: W } = an(n.value);
            r.value = ze(E), t.value = ze(M), a.value = r.value, i.value = t.value, l.value = ze(W), s.value = ze(R), u.value = "fixed", w = l.value, b = s.value, g.value = !0, yield kn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", d.value = "auto", f.value = "1", c.value = "auto", m.value = !0;
          }),
          e.ripple ? Xk : 0
        );
      });
    }
    function O() {
      clearTimeout(y), clearTimeout(P.value), P.value = null, a.value = r.value, i.value = t.value, l.value = w, s.value = b, d.value = "0px", f.value = "0", g.value = !1, y = setTimeout(() => {
        r.value = "auto", t.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", w = "auto", b = "auto", c.value = "hidden", u.value = void 0, m.value = !1;
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
      holderWidth: r,
      holderHeight: t,
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
      n: Kk,
      classes: qk,
      toSizeUnit: ze,
      close: B,
      formatElevation: un,
      handleClick: T
    };
  }
});
Ov.render = Zk;
var ya = Ov;
re(ya);
le(ya, zv);
const p5 = ya;
var nl = ya;
const Tv = {
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
}, { name: Jk, n: Qk, classes: xk } = _("cell");
function _k(e, n) {
  const o = Q("var-icon"), r = Ye("ripple");
  return Ae((h(), S(
    "div",
    {
      class: v(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: X(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
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
    [r, { disabled: !e.ripple }]
  ]);
}
const Ev = x({
  name: Jk,
  components: { VarIcon: Ze },
  directives: { Ripple: nn },
  props: Tv,
  setup(e) {
    const n = I(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ze(e.borderOffset),
      "--cell-border-right": ze(e.borderOffset)
    });
    function o(r) {
      C(e.onClick, r);
    }
    return {
      borderOffsetStyles: n,
      n: Qk,
      classes: xk,
      toSizeUnit: ze,
      handleClick: o
    };
  }
});
Ev.render = _k;
var ka = Ev;
re(ka);
le(ka, Tv);
const m5 = ka;
var ol = ka;
const Iv = {
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
}, { name: e$, n: n$, classes: o$ } = _("checkbox-group");
function r$(e, n) {
  const o = Q("maybe-v-node"), r = Q("var-checkbox"), t = Q("var-form-details");
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
            Ke(e.options, (a) => (h(), Ce(r, {
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
      G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Bv = x({
  name: e$,
  components: { VarFormDetails: Pn, VarCheckbox: lr, MaybeVNode: Qr },
  props: Iv,
  setup(e) {
    const n = I(() => e.max), o = I(() => e.modelValue.length), { length: r, checkboxes: t, bindCheckboxes: a } = Dy(), { bindForm: i } = Fn(), {
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
    de(() => e.modelValue, w, { deep: !0 }), de(() => r.value, w), a(f), C(i, f);
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
      t.forEach(({ sync: B }) => B(e.modelValue));
    }
    function b() {
      t.forEach((B) => B.resetWithAnimation());
    }
    function y() {
      const B = t.map(({ checkedValue: E }) => E.value), T = nu(B);
      return b(), C(e["onUpdate:modelValue"], T), T;
    }
    function P() {
      const B = t.filter(({ checked: E }) => !E.value).map(({ checkedValue: E }) => E.value), T = nu(B);
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
      n: n$,
      classes: o$,
      checkAll: y,
      inverseAll: P,
      reset: z,
      validate: O,
      resetValidation: c,
      isFunction: Rn
    };
  }
});
Bv.render = r$;
var $a = Bv;
re($a);
le($a, Iv);
const h5 = $a;
var rl = $a;
const Dv = {
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
}, { name: t$, n: vo, classes: a$ } = _("chip");
function i$(e, n) {
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
              onClick: n[0] || (n[0] = (...r) => e.handleClose && e.handleClose(...r))
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
const Mv = x({
  name: t$,
  components: {
    VarIcon: Ze
  },
  inheritAttrs: !1,
  props: Dv,
  setup(e) {
    const n = I(() => {
      const { plain: t, textColor: a, color: i } = e;
      return t ? {
        color: a || i,
        borderColor: i
      } : {
        color: a,
        background: i
      };
    }), o = I(() => {
      const { size: t, block: a, type: i, plain: l, round: s } = e, u = vo(a ? "$--flex" : "$--inline-flex"), c = l ? `${vo("plain")} ${vo(`plain-${i}`)}` : vo(`--${i}`), d = s ? vo("--round") : null;
      return [vo(`--${t}`), u, c, d];
    });
    function r(t) {
      C(e.onClose, t);
    }
    return {
      chipStyle: n,
      contentClass: o,
      n: vo,
      classes: a$,
      formatElevation: un,
      handleClose: r
    };
  }
});
Mv.render = i$;
var wa = Mv;
re(wa);
le(wa, Dv);
const g5 = wa;
var Dt = wa;
const Nv = {
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
}, tl = Symbol("HIGHLIGHTER_PROVIDER_KEY");
function l$(e) {
  fs(tl, e);
}
function s$() {
  return bs(tl) ? ds(tl) : { highlighter: null, theme: null };
}
var u$ = (e, n, o) => new Promise((r, t) => {
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
const { name: c$, n: d$, classes: f$ } = _("code"), v$ = ["innerHTML"];
function p$(e, n) {
  return h(), S("div", {
    class: v(e.classes(e.n(), [e.wordWrap, e.n("--word-wrap")])),
    innerHTML: e.highlightedCode
  }, null, 10, v$);
}
const Av = x({
  name: c$,
  props: Nv,
  setup(e) {
    const { highlighter: n, theme: o } = s$(), r = $(""), t = I(() => {
      var a;
      return (a = e.theme) != null ? a : o == null ? void 0 : o.value;
    });
    return n && de(
      () => [n.value, e.code, e.language, t.value, e.trim],
      (a) => u$(this, [a], function* ([i, l, s = "", u = "", c]) {
        i && (r.value = yield i.codeToHtml(c ? l.trim() : l, { lang: s, theme: u }));
      }),
      { immediate: !0 }
    ), {
      n: d$,
      classes: f$,
      highlightedCode: r
    };
  }
});
Av.render = p$;
var Ca = Av;
re(Ca);
le(Ca, Nv);
const b5 = Ca;
var al = Ca;
const Vv = {
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
}, Rv = Symbol("ROW_BIND_COL_KEY");
function m$() {
  const { length: e, childProviders: n, bindChildren: o } = gn(Rv);
  return {
    length: e,
    cols: n,
    bindCols: o
  };
}
function h$() {
  const { index: e, bindParent: n, parentProvider: o } = hn(Rv);
  return {
    index: e,
    row: o,
    bindRow: n
  };
}
const { name: g$, n: ut, classes: b$ } = _("col");
function y$(e, n) {
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
const Lv = x({
  name: g$,
  props: Vv,
  setup(e) {
    const n = I(() => H(e.span)), o = I(() => H(e.offset)), r = I(() => {
      var s;
      const [u = 0, c = 0] = (s = t == null ? void 0 : t.average.value) != null ? s : [];
      return { left: c, right: c, top: u, bottom: u };
    }), { row: t, bindRow: a } = h$();
    C(a, null);
    function i(s, u) {
      const c = [];
      if (u == null)
        return c;
      if (zo(u)) {
        const { offset: d, span: f } = u;
        return Number(f) >= 0 && c.push(ut(`--span-${s}-${f}`)), d && c.push(ut(`--offset-${s}-${d}`)), c;
      }
      return Number(u) >= 0 && c.push(ut(`--span-${s}-${u}`)), c;
    }
    function l(s) {
      C(e.onClick, s);
    }
    return {
      span: n,
      offset: o,
      padding: r,
      n: ut,
      classes: b$,
      toNumber: H,
      toSizeUnit: ze,
      getSize: i,
      handleClick: l,
      padStartFlex: Et
    };
  }
});
Lv.render = y$;
var Sa = Lv;
re(Sa);
le(Sa, Vv);
const y5 = Sa;
var il = Sa;
const Fv = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function k$() {
  const { childProviders: e, length: n, bindChildren: o } = gn(
    Fv
  );
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: o
  };
}
const Hv = {
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
}, { name: $$, n: w$ } = _("collapse");
function C$(e, n) {
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
const Uv = x({
  name: $$,
  props: Hv,
  setup(e) {
    const n = I(() => e.offset), o = I(() => e.divider), r = I(() => e.elevation), t = I(() => e.accordion), a = I(() => Co(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = k$(), u = {
      offset: n,
      divider: o,
      elevation: r,
      accordion: t,
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
        return b ?? l.find(({ index: y, name: P }) => P.value == null && w === y.value);
      }
      const m = l.filter(
        ({ name: w }) => w.value != null && a.value.includes(w.value)
      ), k = l.filter(
        ({ index: w, name: b }) => b.value == null && a.value.includes(w.value)
      );
      return [...m, ...k];
    }
    function p() {
      const m = Qh(Co(f()));
      l.forEach((k) => {
        k.init(m.includes(k));
      });
    }
    return {
      divider: o,
      n: w$,
      toggleAll: (m) => {
        if (e.accordion) return;
        const w = l.filter((b) => {
          var y;
          const P = (y = b.name.value) != null ? y : b.index.value, z = a.value.includes(P);
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
Uv.render = C$;
var Pa = Uv;
re(Pa);
le(Pa, Hv);
const k5 = Pa;
var ll = Pa;
function S$() {
  const { parentProvider: e, index: n, bindParent: o } = hn(
    Fv
  );
  return o || An("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: o
  };
}
const Yv = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
var cc = (e, n, o) => new Promise((r, t) => {
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
function jv(e) {
  const { contentEl: n, showContent: o, expand: r } = e;
  let t = !0;
  de(
    r,
    (u) => {
      Ue(() => {
        u ? a() : i();
      });
    },
    { immediate: !0 }
  );
  function a() {
    return cc(this, null, function* () {
      if (!n.value || (n.value.style.height = "", o.value = !0, yield nr(), !n.value))
        return;
      const { offsetHeight: u } = n.value;
      n.value.style.height = "0px", yield nr(), n.value && (n.value.style.height = u + "px", t && (yield kn(), t && l()));
    });
  }
  const i = () => cc(this, null, function* () {
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
const { name: P$, n: z$, classes: O$ } = _("collapse-item"), T$ = ["aria-expanded", "aria-disabled", "role"];
function E$(e, n) {
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
        onClick: n[0] || (n[0] = (...r) => e.toggle && e.toggle(...r))
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
      ], 10, T$),
      Ae(N(
        "div",
        {
          class: v(e.n("content")),
          ref: "contentEl",
          onTransitionend: n[1] || (n[1] = (...r) => e.handleTransitionEnd && e.handleTransitionEnd(...r)),
          onTransitionstart: n[2] || (n[2] = (...r) => e.handleTransitionStart && e.handleTransitionStart(...r))
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
const Wv = x({
  name: P$,
  components: {
    VarIcon: Ze
  },
  props: Yv,
  setup(e) {
    const n = $(!1), o = $(!1), r = $(null), t = I(() => e.name), a = I(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = S$(), { offset: u, divider: c, elevation: d, accordion: f, updateItem: p } = l;
    s({
      index: i,
      name: t,
      disabled: a,
      init: w
    });
    const { handleTransitionEnd: m, handleTransitionStart: k } = jv({
      contentEl: r,
      showContent: o,
      expand: n
    });
    function w(y) {
      n.value = y;
    }
    function b() {
      var y;
      e.disabled || p((y = e.name) != null ? y : i.value, !n.value);
    }
    return {
      isShow: n,
      showContent: o,
      offset: u,
      divider: c,
      elevation: d,
      contentEl: r,
      accordion: f,
      n: z$,
      classes: O$,
      toggle: b,
      formatElevation: un,
      handleTransitionEnd: m,
      handleTransitionStart: k
    };
  }
});
Wv.render = E$;
var za = Wv;
re(za);
le(za, Yv);
const $5 = za;
var sl = za;
const Kv = {
  expand: Boolean
}, { name: I$, n: B$ } = _("collapse-transition");
function D$(e, n) {
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
const qv = x({
  name: I$,
  props: Kv,
  setup(e) {
    const n = $(!1), o = $(null), r = I(() => e.expand), { handleTransitionEnd: t, handleTransitionStart: a } = jv({
      contentEl: o,
      showContent: n,
      expand: r
    });
    return {
      showContent: n,
      contentEl: o,
      n: B$,
      handleTransitionEnd: t,
      handleTransitionStart: a
    };
  }
});
qv.render = D$;
var Oa = qv;
re(Oa);
le(Oa, Kv);
const w5 = Oa;
var ul = Oa;
const Xv = {
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
}, { name: M$, n: N$ } = _("countdown"), cl = 1e3, dl = 60 * cl, fl = 60 * dl, dc = 24 * fl;
function A$(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      A(e.$slots, "default", wo(Zr(e.timeData)), () => [
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
const Gv = x({
  name: M$,
  props: Xv,
  setup(e) {
    const n = $(""), o = $({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let r = 0, t = !1, a = 0, i = 0, l;
    de(
      () => e.time,
      () => {
        p(), e.autoStart && d();
      }
    ), jo(() => {
      c(), e.autoStart && d();
    }), Bo(() => {
      l != null && (t = l, t === !0 && d(!0));
    }), pr(() => {
      l = t, f();
    }), qr(f);
    function s(g, m) {
      const k = Object.values(m), w = ["DD", "HH", "mm", "ss"], b = [24, 60, 60, 1e3];
      if (w.forEach((y, P) => {
        g.includes(y) ? g = g.replace(y, Yo(`${k[P]}`, 2, "0")) : k[P + 1] += k[P] * b[P];
      }), g.includes("S")) {
        const y = Yo(`${k[k.length - 1]}`, 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", y) : g.includes("SS") ? g = g.replace("SS", y.slice(0, 2)) : g = g.replace("S", y.slice(0, 1));
      }
      return g;
    }
    function u(g) {
      const m = Math.floor(g / dc), k = Math.floor(g % dc / fl), w = Math.floor(g % fl / dl), b = Math.floor(g % dl / cl), y = Math.floor(g % cl), P = {
        days: m,
        hours: k,
        minutes: w,
        seconds: b,
        milliseconds: y
      };
      o.value = P, C(e.onChange, o.value), n.value = s(e.format, P);
    }
    function c() {
      const { time: g, onEnd: m } = e, k = performance.now();
      if (r || (r = k + H(g)), i = r - k, i < 0 && (i = 0), u(i), i === 0) {
        C(m);
        return;
      }
      t && (a = Br(c));
    }
    function d(g = !1) {
      t && !g || (t = !0, r = performance.now() + (i || H(e.time)), c());
    }
    function f() {
      t = !1, ou(a);
    }
    function p() {
      r = 0, t = !1, ou(a), c();
    }
    return {
      showTime: n,
      timeData: o,
      n: N$,
      start: d,
      pause: f,
      reset: p
    };
  }
});
Gv.render = A$;
var Ta = Gv;
re(Ta);
le(Ta, Xv);
const C5 = Ta;
var vl = Ta;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Jo = 9e15, No = 1e9, pl = "0123456789abcdef", Mt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Nt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ml = {
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
}, Zv, so, Te = !0, Ea = "[DecimalError] ", Io = Ea + "Invalid argument: ", Jv = Ea + "Precision limit exceeded", Qv = Ea + "crypto unavailable", xv = "[object Decimal]", $n = Math.floor, fn = Math.pow, V$ = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, R$ = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, L$ = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, _v = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Jn = 1e7, Pe = 7, F$ = 9007199254740991, H$ = Mt.length - 1, hl = Nt.length - 1, J = { toStringTag: xv };
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
  if (e.gt(n)) throw Error(Io + n);
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
  return o.d ? o.d[0] ? (e = r.precision, n = r.rounding, r.precision = e + Math.max(o.e, o.sd()) + Pe, r.rounding = 1, o = U$(r, tp(r, o)), r.precision = e, r.rounding = n, we(so == 2 || so == 3 ? o.neg() : o, e, n, !0)) : new r(1) : new r(NaN);
};
J.cubeRoot = J.cbrt = function() {
  var e, n, o, r, t, a, i, l, s, u, c = this, d = c.constructor;
  if (!c.isFinite() || c.isZero()) return new d(c);
  for (Te = !1, a = c.s * fn(c.s * c, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (o = bn(c.d), e = c.e, (a = (e - o.length + 1) % 3) && (o += a == 1 || a == -2 ? "0" : "00"), a = fn(o, 1 / 3), e = $n((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? o = "5e" + e : (o = a.toExponential(), o = o.slice(0, o.indexOf("e") + 1) + e), r = new d(o), r.s = c.s) : r = new d(a.toString()), i = (e = d.precision) + 3; ; )
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
    if (u.abs().eq(1) && d + 4 <= hl)
      return i = Gn(c, d + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s) return new c(NaN);
    if (d + 4 <= hl)
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
  var n, o, r, t, a, i, l, s, u = this, c = u.constructor, d = c.precision, f = c.rounding, p = 5;
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
  if (Te = !1, l = d + p, i = ko(u, l), r = n ? At(c, l + 10) : ko(e, l), s = Ge(i, r, l, 1), Hr(s.d, t = d, f))
    do
      if (l += 10, i = ko(u, l), r = n ? At(c, l + 10) : ko(e, l), s = Ge(i, r, l, 1), !a) {
        +bn(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = we(s, d + 1, 0));
        break;
      }
    while (Hr(s.d, t += 10, f));
  return Te = !0, we(s, d, f);
};
J.minus = J.sub = function(e) {
  var n, o, r, t, a, i, l, s, u, c, d, f, p = this, g = p.constructor;
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
  return u[0] ? (e.d = u, e.e = Ia(u, o), Te ? we(e, l, s) : e) : new g(s === 3 ? -0 : 0);
};
J.modulo = J.mod = function(e) {
  var n, o = this, r = o.constructor;
  return e = new r(e), !o.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || o.d && !o.d[0] ? we(new r(o), r.precision, r.rounding) : (Te = !1, r.modulo == 9 ? (n = Ge(o, e.abs(), 0, 3, 1), n.s *= e.s) : n = Ge(o, e, 0, r.modulo, 1), n = n.times(e), Te = !0, o.minus(n));
};
J.naturalExponential = J.exp = function() {
  return gl(this);
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
  return e.d = u, e.e = Ia(u, r), Te ? we(e, l, s) : e;
};
J.precision = J.sd = function(e) {
  var n, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Io + e);
  return o.d ? (n = ep(o.d), e && o.e + 1 > n && (n = o.e + 1)) : n = NaN, n;
};
J.round = function() {
  var e = this, n = e.constructor;
  return we(new n(e), e.e + 1, n.rounding);
};
J.sine = J.sin = function() {
  var e, n, o = this, r = o.constructor;
  return o.isFinite() ? o.isZero() ? new r(o) : (e = r.precision, n = r.rounding, r.precision = e + Math.max(o.e, o.sd()) + Pe, r.rounding = 1, o = j$(r, tp(r, o)), r.precision = e, r.rounding = n, we(so > 2 ? o.neg() : o, e, n, !0)) : new r(NaN);
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
  var n, o, r, t, a, i, l, s, u, c = this, d = c.constructor, f = c.d, p = (e = new d(e)).d;
  if (e.s *= c.s, !f || !f[0] || !p || !p[0])
    return new d(!e.s || f && !f[0] && !p || p && !p[0] && !f ? NaN : !f || !p ? e.s / 0 : e.s * 0);
  for (o = $n(c.e / Pe) + $n(e.e / Pe), s = f.length, u = p.length, s < u && (a = f, f = p, p = a, i = s, s = u, u = i), a = [], i = s + u, r = i; r--; ) a.push(0);
  for (r = u; --r >= 0; ) {
    for (n = 0, t = s + r; t > r; )
      l = a[t] + p[r] * f[t - r - 1] + n, a[t--] = l % Jn | 0, n = l / Jn | 0;
    a[t] = (a[t] + n) % Jn | 0;
  }
  for (; !a[--i]; ) a.pop();
  return n ? ++o : a.shift(), e.d = a, e.e = Ia(a, o), Te ? we(e, d.precision, d.rounding) : e;
};
J.toBinary = function(e, n) {
  return Hs(this, 2, e, n);
};
J.toDecimalPlaces = J.toDP = function(e, n) {
  var o = this, r = o.constructor;
  return o = new r(o), e === void 0 ? o : (In(e, 0, No), n === void 0 ? n = r.rounding : In(n, 0, 8), we(o, e + o.e + 1, n));
};
J.toExponential = function(e, n) {
  var o, r = this, t = r.constructor;
  return e === void 0 ? o = eo(r, !0) : (In(e, 0, No), n === void 0 ? n = t.rounding : In(n, 0, 8), r = we(new t(r), e + 1, n), o = eo(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + o : o;
};
J.toFixed = function(e, n) {
  var o, r, t = this, a = t.constructor;
  return e === void 0 ? o = eo(t) : (In(e, 0, No), n === void 0 ? n = a.rounding : In(n, 0, 8), r = we(new a(t), e + t.e + 1, n), o = eo(r, !1, e + r.e + 1)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
J.toFraction = function(e) {
  var n, o, r, t, a, i, l, s, u, c, d, f, p = this, g = p.d, m = p.constructor;
  if (!g) return new m(p);
  if (u = o = new m(1), r = s = new m(0), n = new m(r), a = n.e = ep(g) - p.e - 1, i = a % Pe, n.d[0] = fn(10, i < 0 ? Pe + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new m(e), !l.isInt() || l.lt(u)) throw Error(Io + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Te = !1, l = new m(bn(g)), c = m.precision, m.precision = a = g.length * Pe * 2; d = Ge(l, n, 0, 1, 1), t = o.plus(d.times(r)), t.cmp(e) != 1; )
    o = r, r = t, t = u, u = s.plus(d.times(t)), s = t, t = n, n = l.minus(d.times(t)), l = t;
  return t = Ge(e.minus(o), r, 0, 1, 1), s = s.plus(t.times(u)), o = o.plus(t.times(r)), s.s = u.s = p.s, f = Ge(u, r, a, 1).minus(p).abs().cmp(Ge(s, o, a, 1).minus(p).abs()) < 1 ? [u, r] : [s, o], m.precision = c, Te = !0, f;
};
J.toHexadecimal = J.toHex = function(e, n) {
  return Hs(this, 16, e, n);
};
J.toNearest = function(e, n) {
  var o = this, r = o.constructor;
  if (o = new r(o), e == null) {
    if (!o.d) return o;
    e = new r(1), n = r.rounding;
  } else {
    if (e = new r(e), n === void 0 ? n = r.rounding : In(n, 0, 8), !o.d) return e.s ? o : e;
    if (!e.d)
      return e.s && (e.s = o.s), e;
  }
  return e.d[0] ? (Te = !1, o = Ge(o, e, 0, n, 1).times(e), Te = !0, we(o)) : (e.s = o.s, o = e), o;
};
J.toNumber = function() {
  return +this;
};
J.toOctal = function(e, n) {
  return Hs(this, 8, e, n);
};
J.toPower = J.pow = function(e) {
  var n, o, r, t, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new s(fn(+l, u));
  if (l = new s(l), l.eq(1)) return l;
  if (r = s.precision, a = s.rounding, e.eq(1)) return we(l, r, a);
  if (n = $n(e.e / Pe), n >= e.d.length - 1 && (o = u < 0 ? -u : u) <= F$)
    return t = np(s, l, o, r), e.s < 0 ? new s(1).div(t) : we(t, r, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1) return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return o = fn(+l, u), n = o == 0 || !isFinite(o) ? $n(u * (Math.log("0." + bn(l.d)) / Math.LN10 + l.e + 1)) : new s(o + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Te = !1, s.rounding = l.s = 1, o = Math.min(12, (n + "").length), t = gl(e.times(ko(l, r + o)), r), t.d && (t = we(t, r + 5, 1), Hr(t.d, r, a) && (n = r + 10, t = we(gl(e.times(ko(l, n + o)), n), n + 5, 1), +bn(t.d).slice(r + 1, r + 15) + 1 == 1e14 && (t = we(t, r + 1, 0)))), t.s = i, Te = !0, s.rounding = a, we(t, r, a));
};
J.toPrecision = function(e, n) {
  var o, r = this, t = r.constructor;
  return e === void 0 ? o = eo(r, r.e <= t.toExpNeg || r.e >= t.toExpPos) : (In(e, 1, No), n === void 0 ? n = t.rounding : In(n, 0, 8), r = we(new t(r), e, n), o = eo(r, e <= r.e || r.e <= t.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + o : o;
};
J.toSignificantDigits = J.toSD = function(e, n) {
  var o = this, r = o.constructor;
  return e === void 0 ? (e = r.precision, n = r.rounding) : (In(e, 1, No), n === void 0 ? n = r.rounding : In(n, 0, 8)), we(new r(o), e, n);
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
      r = e[n] + "", o = Pe - r.length, o && (a += po(o)), a += r;
    i = e[n], r = i + "", o = Pe - r.length, o && (a += po(o));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; ) i /= 10;
  return a + i;
}
function In(e, n, o) {
  if (e !== ~~e || e < n || e > o)
    throw Error(Io + e);
}
function Hr(e, n, o, r) {
  var t, a, i, l;
  for (a = e[0]; a >= 10; a /= 10) --n;
  return --n < 0 ? (n += Pe, t = 0) : (t = Math.ceil((n + 1) / Pe), n %= Pe), a = fn(10, Pe - n), l = e[t] % a | 0, r == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = o < 4 && l == 99999 || o > 3 && l == 49999 || l == 5e4 || l == 0) : i = (o < 4 && l + 1 == a || o > 3 && l + 1 == a / 2) && (e[t + 1] / a / 100 | 0) == fn(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[t + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (r || o < 4) && l == 9999 || !r && o > 3 && l == 4999) : i = ((r || o < 4) && l + 1 == a || !r && o > 3 && l + 1 == a / 2) && (e[t + 1] / a / 1e3 | 0) == fn(10, n - 3) - 1, i;
}
function wt(e, n, o) {
  for (var r, t = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = t.length; a--; ) t[a] *= n;
    for (t[0] += pl.indexOf(e.charAt(i++)), r = 0; r < t.length; r++)
      t[r] > o - 1 && (t[r + 1] === void 0 && (t[r + 1] = 0), t[r + 1] += t[r] / o | 0, t[r] %= o);
  }
  return t.reverse();
}
function U$(e, n) {
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
    var u, c, d, f, p, g, m, k, w, b, y, P, z, O, B, T, E, M, R, W, U = r.constructor, F = r.s == t.s ? 1 : -1, Y = r.d, j = t.d;
    if (!Y || !Y[0] || !j || !j[0])
      return new U(
        // Return NaN if either NaN, or both Infinity or 0.
        !r.s || !t.s || (Y ? j && Y[0] == j[0] : !j) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          Y && Y[0] == 0 || !j ? F * 0 : F / 0
        )
      );
    for (s ? (p = 1, c = r.e - t.e) : (s = Jn, p = Pe, c = $n(r.e / p) - $n(t.e / p)), R = j.length, E = Y.length, w = new U(F), b = w.d = [], d = 0; j[d] == (Y[d] || 0); d++) ;
    if (j[d] > (Y[d] || 0) && c--, a == null ? (O = a = U.precision, i = U.rounding) : l ? O = a + (r.e - t.e) + 1 : O = a, O < 0)
      b.push(1), g = !0;
    else {
      if (O = O / p + 2 | 0, d = 0, R == 1) {
        for (f = 0, j = j[0], O++; (d < E || f) && O--; d++)
          B = f * s + (Y[d] || 0), b[d] = B / j | 0, f = B % j | 0;
        g = f || d < E;
      } else {
        for (f = s / (j[0] + 1) | 0, f > 1 && (j = e(j, f, s), Y = e(Y, f, s), R = j.length, E = Y.length), T = R, y = Y.slice(0, R), P = y.length; P < R; ) y[P++] = 0;
        W = j.slice(), W.unshift(0), M = j[0], j[1] >= s / 2 && ++M;
        do
          f = 0, u = n(j, y, R, P), u < 0 ? (z = y[0], R != P && (z = z * s + (y[1] || 0)), f = z / M | 0, f > 1 ? (f >= s && (f = s - 1), m = e(j, f, s), k = m.length, P = y.length, u = n(m, y, k, P), u == 1 && (f--, o(m, R < k ? W : j, k, s))) : (f == 0 && (u = f = 1), m = j.slice()), k = m.length, k < P && m.unshift(0), o(y, m, P, s), u == -1 && (P = y.length, u = n(j, y, R, P), u < 1 && (f++, o(y, R < P ? W : j, P, s))), P = y.length) : u === 0 && (f++, y = [0]), b[d++] = f, u && y[0] ? y[P++] = Y[T] || 0 : (y = [Y[T]], P = 1);
        while ((T++ < E || y[0] !== void 0) && O--);
        g = y[0] !== void 0;
      }
      b[0] || b.shift();
    }
    if (p == 1)
      w.e = c, Zv = g;
    else {
      for (d = 1, f = b[0]; f >= 10; f /= 10) d++;
      w.e = d + c * p - 1, we(w, l ? a + w.e + 1 : a, i, g);
    }
    return w;
  };
}();
function we(e, n, o, r) {
  var t, a, i, l, s, u, c, d, f, p = e.constructor;
  e: if (n != null) {
    if (d = e.d, !d) return e;
    for (t = 1, l = d[0]; l >= 10; l /= 10) t++;
    if (a = n - t, a < 0)
      a += Pe, i = n, c = d[f = 0], s = c / fn(10, t - i - 1) % 10 | 0;
    else if (f = Math.ceil((a + 1) / Pe), l = d.length, f >= l)
      if (r) {
        for (; l++ <= f; ) d.push(0);
        c = s = 0, t = 1, a %= Pe, i = a - Pe + 1;
      } else
        break e;
    else {
      for (c = l = d[f], t = 1; l >= 10; l /= 10) t++;
      a %= Pe, i = a - Pe + t, s = i < 0 ? 0 : c / fn(10, t - i - 1) % 10 | 0;
    }
    if (r = r || n < 0 || d[f + 1] !== void 0 || (i < 0 ? c : c % fn(10, t - i - 1)), u = o < 4 ? (s || r) && (o == 0 || o == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (o == 4 || r || o == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (a > 0 ? i > 0 ? c / fn(10, t - i) : 0 : d[f - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !d[0])
      return d.length = 0, u ? (n -= e.e + 1, d[0] = fn(10, (Pe - n % Pe) % Pe), e.e = -n || 0) : d[0] = e.e = 0, e;
    if (a == 0 ? (d.length = f, l = 1, f--) : (d.length = f + 1, l = fn(10, Pe - a), d[f] = i > 0 ? (c / fn(10, t - i) % fn(10, i) | 0) * l : 0), u)
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
  if (!e.isFinite()) return rp(e);
  var r, t = e.e, a = bn(e.d), i = a.length;
  return n ? (o && (r = o - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + po(r) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (a = "0." + po(-t - 1) + a, o && (r = o - i) > 0 && (a += po(r))) : t >= i ? (a += po(t + 1 - i), o && (r = o - t - 1) > 0 && (a = a + "." + po(r))) : ((r = t + 1) < i && (a = a.slice(0, r) + "." + a.slice(r)), o && (r = o - i) > 0 && (t + 1 === i && (a += "."), a += po(r))), a;
}
function Ia(e, n) {
  var o = e[0];
  for (n *= Pe; o >= 10; o /= 10) n++;
  return n;
}
function At(e, n, o) {
  if (n > H$)
    throw Te = !0, o && (e.precision = o), Error(Jv);
  return we(new e(Mt), n, 1, !0);
}
function Gn(e, n, o) {
  if (n > hl) throw Error(Jv);
  return we(new e(Nt), n, o, !0);
}
function ep(e) {
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
function np(e, n, o, r) {
  var t, a = new e(1), i = Math.ceil(r / Pe + 4);
  for (Te = !1; ; ) {
    if (o % 2 && (a = a.times(n), vc(a.d, i) && (t = !0)), o = $n(o / 2), o === 0) {
      o = a.d.length - 1, t && a.d[o] === 0 && ++a.d[o];
      break;
    }
    n = n.times(n), vc(n.d, i);
  }
  return Te = !0, a;
}
function fc(e) {
  return e.d[e.d.length - 1] & 1;
}
function op(e, n, o) {
  for (var r, t = new e(n[0]), a = 0; ++a < n.length; )
    if (r = new e(n[a]), r.s)
      t[o](r) && (t = r);
    else {
      t = r;
      break;
    }
  return t;
}
function gl(e, n) {
  var o, r, t, a, i, l, s, u = 0, c = 0, d = 0, f = e.constructor, p = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (n == null ? (Te = !1, s = g) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), d += 5;
  for (r = Math.log(fn(2, d)) / Math.LN10 * 2 + 5 | 0, s += r, o = a = i = new f(1), f.precision = s; ; ) {
    if (a = we(a.times(e), s, 1), o = o.times(++c), l = i.plus(Ge(a, o, s, 1)), bn(l.d).slice(0, s) === bn(i.d).slice(0, s)) {
      for (t = d; t--; ) i = we(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Hr(i.d, s - r, p, u))
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
  var o, r, t, a, i, l, s, u, c, d, f, p = 1, g = 10, m = e, k = m.d, w = m.constructor, b = w.rounding, y = w.precision;
  if (m.s < 0 || !k || !k[0] || !m.e && k[0] == 1 && k.length == 1)
    return new w(k && !k[0] ? -1 / 0 : m.s != 1 ? NaN : k ? 0 : m);
  if (n == null ? (Te = !1, c = y) : c = n, w.precision = c += g, o = bn(k), r = o.charAt(0), Math.abs(a = m.e) < 15e14) {
    for (; r < 7 && r != 1 || r == 1 && o.charAt(1) > 3; )
      m = m.times(e), o = bn(m.d), r = o.charAt(0), p++;
    a = m.e, r > 1 ? (m = new w("0." + o), a++) : m = new w(r + "." + o.slice(1));
  } else
    return u = At(w, c + 2, y).times(a + ""), m = ko(new w(r + "." + o.slice(1)), c - g).plus(u), w.precision = y, n == null ? we(m, y, b, Te = !0) : m;
  for (d = m, s = i = m = Ge(m.minus(1), m.plus(1), c, 1), f = we(m.times(m), c, 1), t = 3; ; ) {
    if (i = we(i.times(f), c, 1), u = s.plus(Ge(i, new w(t), c, 1)), bn(u.d).slice(0, c) === bn(s.d).slice(0, c))
      if (s = s.times(2), a !== 0 && (s = s.plus(At(w, c + 2, y).times(a + ""))), s = Ge(s, new w(p), c, 1), n == null)
        if (Hr(s.d, c - g, b, l))
          w.precision = c += g, u = i = m = Ge(d.minus(1), d.plus(1), c, 1), f = we(m.times(m), c, 1), t = l = 1;
        else
          return we(s, w.precision = y, b, Te = !0);
      else
        return w.precision = y, s;
    s = u, t += 2;
  }
}
function rp(e) {
  return String(e.s * e.s / 0);
}
function bl(e, n) {
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
function Y$(e, n) {
  var o, r, t, a, i, l, s, u, c;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), _v.test(n)) return bl(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (R$.test(n))
    o = 16, n = n.toLowerCase();
  else if (V$.test(n))
    o = 2;
  else if (L$.test(n))
    o = 8;
  else
    throw Error(Io + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, r = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, t = np(r, new r(o), a, a * 2)), u = wt(n, o, Jn), c = u.length - 1, a = c; u[a] === 0; --a) u.pop();
  return a < 0 ? new r(e.s * 0) : (e.e = Ia(u, c), e.d = u, Te = !1, i && (e = Ge(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? fn(2, s) : $o.pow(2, s))), Te = !0, e);
}
function j$(e, n) {
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
function tp(e, n) {
  var o, r = n.s < 0, t = Gn(e, e.precision, 1), a = t.times(0.5);
  if (n = n.abs(), n.lte(a))
    return so = r ? 4 : 1, n;
  if (o = n.divToInt(t), o.isZero())
    so = r ? 3 : 2;
  else {
    if (n = n.minus(o.times(t)), n.lte(a))
      return so = fc(o) ? r ? 2 : 3 : r ? 4 : 1, n;
    so = fc(o) ? r ? 1 : 4 : r ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Hs(e, n, o, r) {
  var t, a, i, l, s, u, c, d, f, p = e.constructor, g = o !== void 0;
  if (g ? (In(o, 1, No), r === void 0 ? r = p.rounding : In(r, 0, 8)) : (o = p.precision, r = p.rounding), !e.isFinite())
    c = rp(e);
  else {
    for (c = eo(e), i = c.indexOf("."), g ? (t = 2, n == 16 ? o = o * 4 - 3 : n == 8 && (o = o * 3 - 2)) : t = n, i >= 0 && (c = c.replace(".", ""), f = new p(1), f.e = c.length - i, f.d = wt(eo(f), 10, t), f.e = f.d.length), d = wt(c, 10, t), a = s = d.length; d[--s] == 0; ) d.pop();
    if (!d[0])
      c = g ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new p(e), e.d = d, e.e = a, e = Ge(e, f, o, r, 0, t), d = e.d, a = e.e, u = Zv), i = d[o], l = t / 2, u = u || d[o + 1] !== void 0, u = r < 4 ? (i !== void 0 || u) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : i > l || i === l && (r === 4 || u || r === 6 && d[o - 1] & 1 || r === (e.s < 0 ? 8 : 7)), d.length = o, u)
        for (; ++d[--o] > t - 1; )
          d[o] = 0, o || (++a, d.unshift(1));
      for (s = d.length; !d[s - 1]; --s) ;
      for (i = 0, c = ""; i < s; i++) c += pl.charAt(d[i]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++) c += "0";
            for (d = wt(c, t, n), s = d.length; !d[s - 1]; --s) ;
            for (i = 1, c = "1."; i < s; i++) c += pl.charAt(d[i]);
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
function vc(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function W$(e) {
  return new this(e).abs();
}
function K$(e) {
  return new this(e).acos();
}
function q$(e) {
  return new this(e).acosh();
}
function X$(e, n) {
  return new this(e).plus(n);
}
function G$(e) {
  return new this(e).asin();
}
function Z$(e) {
  return new this(e).asinh();
}
function J$(e) {
  return new this(e).atan();
}
function Q$(e) {
  return new this(e).atanh();
}
function x$(e, n) {
  e = new this(e), n = new this(n);
  var o, r = this.precision, t = this.rounding, a = r + 4;
  return !e.s || !n.s ? o = new this(NaN) : !e.d && !n.d ? (o = Gn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), o.s = e.s) : !n.d || e.isZero() ? (o = n.s < 0 ? Gn(this, r, t) : new this(0), o.s = e.s) : !e.d || n.isZero() ? (o = Gn(this, a, 1).times(0.5), o.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, o = this.atan(Ge(e, n, a, 1)), n = Gn(this, a, 1), this.precision = r, this.rounding = t, o = e.s < 0 ? o.minus(n) : o.plus(n)) : o = this.atan(Ge(e, n, a, 1)), o;
}
function _$(e) {
  return new this(e).cbrt();
}
function ew(e) {
  return we(e = new this(e), e.e + 1, 2);
}
function nw(e, n, o) {
  return new this(e).clamp(n, o);
}
function ow(e) {
  if (!e || typeof e != "object") throw Error(Ea + "Object expected");
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
    if (o = a[n], t && (this[o] = ml[o]), (r = e[o]) !== void 0)
      if ($n(r) === r && r >= a[n + 1] && r <= a[n + 2]) this[o] = r;
      else throw Error(Io + o + ": " + r);
  if (o = "crypto", t && (this[o] = ml[o]), (r = e[o]) !== void 0)
    if (r === !0 || r === !1 || r === 0 || r === 1)
      if (r)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[o] = !0;
        else
          throw Error(Qv);
      else
        this[o] = !1;
    else
      throw Error(Io + o + ": " + r);
  return this;
}
function rw(e) {
  return new this(e).cos();
}
function tw(e) {
  return new this(e).cosh();
}
function ap(e) {
  var n, o, r;
  function t(a) {
    var i, l, s, u = this;
    if (!(u instanceof t)) return new t(a);
    if (u.constructor = t, pc(a)) {
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
      return bl(u, a.toString());
    } else if (s !== "string")
      throw Error(Io + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), _v.test(a) ? bl(u, a) : Y$(u, a);
  }
  if (t.prototype = J, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = ow, t.clone = ap, t.isDecimal = pc, t.abs = W$, t.acos = K$, t.acosh = q$, t.add = X$, t.asin = G$, t.asinh = Z$, t.atan = J$, t.atanh = Q$, t.atan2 = x$, t.cbrt = _$, t.ceil = ew, t.clamp = nw, t.cos = rw, t.cosh = tw, t.div = aw, t.exp = iw, t.floor = lw, t.hypot = sw, t.ln = uw, t.log = cw, t.log10 = fw, t.log2 = dw, t.max = vw, t.min = pw, t.mod = mw, t.mul = hw, t.pow = gw, t.random = bw, t.round = yw, t.sign = kw, t.sin = $w, t.sinh = ww, t.sqrt = Cw, t.sub = Sw, t.sum = Pw, t.tan = zw, t.tanh = Ow, t.trunc = Tw, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < r.length; ) e.hasOwnProperty(o = r[n++]) || (e[o] = this[o]);
  return t.config(e), t;
}
function aw(e, n) {
  return new this(e).div(n);
}
function iw(e) {
  return new this(e).exp();
}
function lw(e) {
  return we(e = new this(e), e.e + 1, 3);
}
function sw() {
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
function pc(e) {
  return e instanceof $o || e && e.toStringTag === xv || !1;
}
function uw(e) {
  return new this(e).ln();
}
function cw(e, n) {
  return new this(e).log(n);
}
function dw(e) {
  return new this(e).log(2);
}
function fw(e) {
  return new this(e).log(10);
}
function vw() {
  return op(this, arguments, "lt");
}
function pw() {
  return op(this, arguments, "gt");
}
function mw(e, n) {
  return new this(e).mod(n);
}
function hw(e, n) {
  return new this(e).mul(n);
}
function gw(e, n) {
  return new this(e).pow(n);
}
function bw(e) {
  var n, o, r, t, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : In(e, 1, No), r = Math.ceil(e / Pe), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(r)); a < r; )
        t = n[a], t >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(r *= 4); a < r; )
        t = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(t % 1e7), a += 4);
      a = r / 4;
    } else
      throw Error(Qv);
  else for (; a < r; ) l[a++] = Math.random() * 1e7 | 0;
  for (r = l[--a], e %= Pe, r && e && (t = fn(10, Pe - e), l[a] = (r / t | 0) * t); l[a] === 0; a--) l.pop();
  if (a < 0)
    o = 0, l = [0];
  else {
    for (o = -1; l[0] === 0; o -= Pe) l.shift();
    for (r = 1, t = l[0]; t >= 10; t /= 10) r++;
    r < Pe && (o -= Pe - r);
  }
  return i.e = o, i.d = l, i;
}
function yw(e) {
  return we(e = new this(e), e.e + 1, this.rounding);
}
function kw(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function $w(e) {
  return new this(e).sin();
}
function ww(e) {
  return new this(e).sinh();
}
function Cw(e) {
  return new this(e).sqrt();
}
function Sw(e, n) {
  return new this(e).sub(n);
}
function Pw() {
  var e = 0, n = arguments, o = new this(n[e]);
  for (Te = !1; o.s && ++e < n.length; ) o = o.plus(n[e]);
  return Te = !0, we(o, this.precision, this.rounding);
}
function zw(e) {
  return new this(e).tan();
}
function Ow(e) {
  return new this(e).tanh();
}
function Tw(e) {
  return we(e = new this(e), e.e + 1, 1);
}
J[Symbol.for("nodejs.util.inspect.custom")] = J.toString;
J[Symbol.toStringTag] = "Decimal";
var $o = J.constructor = ap(ml);
Mt = new $o(Mt);
Nt = new $o(Nt);
const ip = {
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
}, mc = 100, hc = 600, { name: Ew, n: Iw, classes: Bw } = _("counter"), Dw = ["inputmode", "readonly", "disabled"];
function Mw(e, n) {
  const o = Q("var-icon"), r = Q("var-button"), t = Q("var-form-details");
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
          G(r, {
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
          }, null, 46, Dw), [
            [Lh, e.inputValue]
          ]),
          G(r, {
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
      G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const lp = x({
  name: Ew,
  components: {
    VarButton: zn,
    VarIcon: Ze,
    VarFormDetails: Pn
  },
  directives: { Ripple: nn },
  inheritAttrs: !1,
  props: ip,
  setup(e) {
    const n = $(""), { bindForm: o, form: r } = Fn(), {
      errorMessage: t,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = Ln(), { readonly: s, disabled: u } = r ?? {}, c = I(() => {
      const { max: j, modelValue: ae } = e;
      return j != null && H(ae) >= H(j);
    }), d = I(() => {
      const { min: j, modelValue: ae } = e;
      return j != null && H(ae) <= H(j);
    });
    let f, p, g, m;
    C(o, {
      reset: y,
      validate: w,
      resetValidation: l
    }), de(
      () => e.modelValue,
      (j) => {
        F(P(String(j))), C(e.onChange, H(j));
      }
    ), F(P(String(e.modelValue)));
    function w() {
      return i(e.rules, e.modelValue);
    }
    function b(j) {
      Ue(() => {
        const { validateTrigger: ae, rules: ee, modelValue: pe } = e;
        a(ae, j, ee, pe);
      });
    }
    function y() {
      const { min: j } = e;
      C(e["onUpdate:modelValue"], j != null ? H(j) : 0), l();
    }
    function P(j) {
      const { decimalLength: ae, max: ee, min: pe } = e;
      let ye = H(j);
      return ee != null && ye > H(ee) && (ye = H(ee)), pe != null && ye < H(pe) && (ye = H(pe)), j = String(ye), ae != null && (j = ye.toFixed(H(ae))), j;
    }
    function z(j) {
      const { lazyChange: ae, onBeforeChange: ee } = e, { value: pe } = j.target, ye = P(pe);
      ae ? C(ee, H(ye), Y) : F(ye), b("onInputChange");
    }
    function O() {
      const {
        disabled: j,
        readonly: ae,
        disableDecrement: ee,
        decrementButton: pe,
        lazyChange: ye,
        step: Ee,
        modelValue: L,
        onDecrement: Z,
        onBeforeChange: oe
      } = e;
      if (u != null && u.value || s != null && s.value || j || ae || ee || !pe || d.value)
        return;
      const me = new $o(H(L)).minus(new $o(H(Ee))).toString(), D = P(me), K = H(D);
      C(Z, K), ye ? C(oe, K, Y) : (F(D), b("onDecrement"));
    }
    function B() {
      const {
        disabled: j,
        readonly: ae,
        disableIncrement: ee,
        incrementButton: pe,
        lazyChange: ye,
        step: Ee,
        modelValue: L,
        onIncrement: Z,
        onBeforeChange: oe
      } = e;
      if (u != null && u.value || s != null && s.value || j || ae || ee || !pe || c.value)
        return;
      const me = new $o(H(L)).plus(new $o(H(Ee))).toString(), D = P(me), K = H(D);
      C(Z, K), ye ? C(oe, K, Y) : (F(D), b("onIncrement"));
    }
    function T() {
      const { press: j, lazyChange: ae } = e;
      !j || ae || (m = window.setTimeout(() => {
        U();
      }, hc));
    }
    function E() {
      const { press: j, lazyChange: ae } = e;
      !j || ae || (g = window.setTimeout(() => {
        W();
      }, hc));
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
      }, mc);
    }
    function U() {
      p = window.setTimeout(() => {
        O(), U();
      }, mc);
    }
    function F(j) {
      n.value = j;
      const ae = H(j);
      C(e["onUpdate:modelValue"], ae);
    }
    function Y(j) {
      F(P(String(j))), b("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: c,
      isMin: d,
      n: Iw,
      classes: Bw,
      formatElevation: un,
      validate: w,
      reset: y,
      resetValidation: l,
      handleChange: z,
      decrement: O,
      increment: B,
      pressDecrement: T,
      pressIncrement: E,
      releaseDecrement: M,
      releaseIncrement: R,
      toSizeUnit: ze,
      toNumber: H
    };
  }
});
lp.render = Mw;
var Da = lp;
re(Da);
le(Da, ip);
const S5 = Da;
var yl = Da, sp = 60, up = sp * 60, cp = up * 24, Nw = cp * 7, fr = 1e3, Bi = sp * fr, gc = up * fr, Aw = cp * fr, Vw = Nw * fr, Us = "millisecond", Qo = "second", xo = "minute", _o = "hour", mo = "day", Ct = "week", Xn = "month", dp = "quarter", ho = "year", er = "date", Rw = "YYYY-MM-DDTHH:mm:ssZ", bc = "Invalid Date", Lw = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Fw = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Hw = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var kl = function(n, o, r) {
  var t = String(n);
  return !t || t.length >= o ? n : "" + Array(o + 1 - t.length).join(r) + n;
}, Uw = function(n) {
  var o = -n.utcOffset(), r = Math.abs(o), t = Math.floor(r / 60), a = r % 60;
  return (o <= 0 ? "+" : "-") + kl(t, 2, "0") + ":" + kl(a, 2, "0");
}, Yw = function e(n, o) {
  if (n.date() < o.date()) return -e(o, n);
  var r = (o.year() - n.year()) * 12 + (o.month() - n.month()), t = n.clone().add(r, Xn), a = o - t < 0, i = n.clone().add(r + (a ? -1 : 1), Xn);
  return +(-(r + (o - t) / (a ? t - i : i - t)) || 0);
}, jw = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Ww = function(n) {
  var o = {
    M: Xn,
    y: ho,
    w: Ct,
    d: mo,
    D: er,
    h: _o,
    m: xo,
    s: Qo,
    ms: Us,
    Q: dp
  };
  return o[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Kw = function(n) {
  return n === void 0;
};
const qw = {
  s: kl,
  z: Uw,
  m: Yw,
  a: jw,
  p: Ww,
  u: Kw
};
var Or = "en", Lo = {};
Lo[Or] = Hw;
var Ys = function(n) {
  return n instanceof Ma;
}, Vt = function e(n, o, r) {
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
}, se = function(n, o) {
  if (Ys(n))
    return n.clone();
  var r = typeof o == "object" ? o : {};
  return r.date = n, r.args = arguments, new Ma(r);
}, Xw = function(n, o) {
  return se(n, {
    locale: o.$L,
    utc: o.$u,
    x: o.$x,
    $offset: o.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, qe = qw;
qe.l = Vt;
qe.i = Ys;
qe.w = Xw;
var Gw = function(n) {
  var o = n.date, r = n.utc;
  if (o === null) return /* @__PURE__ */ new Date(NaN);
  if (qe.u(o)) return /* @__PURE__ */ new Date();
  if (o instanceof Date) return new Date(o);
  if (typeof o == "string" && !/Z$/i.test(o)) {
    var t = o.match(Lw);
    if (t) {
      var a = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return r ? new Date(Date.UTC(t[1], a, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], a, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(o);
}, Ma = /* @__PURE__ */ function() {
  function e(o) {
    this.$L = Vt(o.locale, null, !0), this.parse(o);
  }
  var n = e.prototype;
  return n.parse = function(r) {
    this.$d = Gw(r), this.$x = r.x || {}, this.init();
  }, n.init = function() {
    var r = this.$d;
    this.$y = r.getFullYear(), this.$M = r.getMonth(), this.$D = r.getDate(), this.$W = r.getDay(), this.$H = r.getHours(), this.$m = r.getMinutes(), this.$s = r.getSeconds(), this.$ms = r.getMilliseconds();
  }, n.$utils = function() {
    return qe;
  }, n.isValid = function() {
    return this.$d.toString() !== bc;
  }, n.isSame = function(r, t) {
    var a = se(r);
    return this.startOf(t) <= a && a <= this.endOf(t);
  }, n.isAfter = function(r, t) {
    return se(r) < this.startOf(t);
  }, n.isBefore = function(r, t) {
    return this.endOf(t) < se(r);
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
      var y = [0, 0, 0, 0], P = [23, 59, 59, 999];
      return qe.w(a.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? y : P).slice(b)
      ), a);
    }, c = this.$W, d = this.$M, f = this.$D, p = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case ho:
        return i ? s(1, 0) : s(31, 11);
      case Xn:
        return i ? s(1, d) : s(0, d + 1);
      case Ct: {
        var g = this.$locale().weekStart || 0, m = (c < g ? c + 7 : c) - g;
        return s(i ? f - m : f + (6 - m), d);
      }
      case mo:
      case er:
        return u(p + "Hours", 0);
      case _o:
        return u(p + "Minutes", 1);
      case xo:
        return u(p + "Seconds", 2);
      case Qo:
        return u(p + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(r) {
    return this.startOf(r, !1);
  }, n.$set = function(r, t) {
    var a, i = qe.p(r), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[mo] = l + "Date", a[er] = l + "Date", a[Xn] = l + "Month", a[ho] = l + "FullYear", a[_o] = l + "Hours", a[xo] = l + "Minutes", a[Qo] = l + "Seconds", a[Us] = l + "Milliseconds", a)[i], u = i === mo ? this.$D + (t - this.$W) : t;
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
      var p = se(a);
      return qe.w(p.date(p.date() + Math.round(f * r)), a);
    };
    if (l === Xn)
      return this.set(Xn, this.$M + r);
    if (l === ho)
      return this.set(ho, this.$y + r);
    if (l === mo)
      return s(1);
    if (l === Ct)
      return s(7);
    var u = (i = {}, i[xo] = Bi, i[_o] = gc, i[Qo] = fr, i)[l] || 1, c = this.$d.getTime() + r * u;
    return qe.w(c, this);
  }, n.subtract = function(r, t) {
    return this.add(r * -1, t);
  }, n.format = function(r) {
    var t = this, a = this.$locale();
    if (!this.isValid()) return a.invalidDate || bc;
    var i = r || Rw, l = qe.z(this), s = this.$H, u = this.$m, c = this.$M, d = a.weekdays, f = a.months, p = a.meridiem, g = function(y, P, z, O) {
      return y && (y[P] || y(t, i)) || z[P].slice(0, O);
    }, m = function(y) {
      return qe.s(s % 12 || 12, y, "0");
    }, k = p || function(b, y, P) {
      var z = b < 12 ? "AM" : "PM";
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
    return i.replace(Fw, function(b, y) {
      return y || w[b] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(r, t, a) {
    var i, l = qe.p(t), s = se(r), u = (s.utcOffset() - this.utcOffset()) * Bi, c = this - s, d = qe.m(this, s);
    return d = (i = {}, i[ho] = d / 12, i[Xn] = d, i[dp] = d / 3, i[Ct] = (c - u) / Vw, i[mo] = (c - u) / Aw, i[_o] = c / gc, i[xo] = c / Bi, i[Qo] = c / fr, i)[l] || c, a ? d : qe.a(d);
  }, n.daysInMonth = function() {
    return this.endOf(Xn).$D;
  }, n.$locale = function() {
    return Lo[this.$L];
  }, n.locale = function(r, t) {
    if (!r) return this.$L;
    var a = this.clone(), i = Vt(r, t, !0);
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
}(), fp = Ma.prototype;
se.prototype = fp;
[["$ms", Us], ["$s", Qo], ["$m", xo], ["$H", _o], ["$W", mo], ["$M", Xn], ["$y", ho], ["$D", er]].forEach(function(e) {
  fp[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
se.extend = function(e, n) {
  return e.$i || (e(n, Ma, se), e.$i = !0), se;
};
se.locale = Vt;
se.isDayjs = Ys;
se.unix = function(e) {
  return se(e * 1e3);
};
se.en = Lo[Or];
se.Ls = Lo;
se.p = {};
const vp = function(e, n) {
  n.prototype.isSameOrBefore = function(o, r) {
    return this.isSame(o, r) || this.isBefore(o, r);
  };
}, pp = function(e, n) {
  n.prototype.isSameOrAfter = function(o, r) {
    return this.isSame(o, r) || this.isAfter(o, r);
  };
}, St = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], Sr = ["0", "1", "2", "3", "4", "5", "6"], mp = {
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
}, { n: Zw } = _("date-picker-header");
function Jw(e, n) {
  const o = Q("var-icon"), r = Q("var-button");
  return h(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      G(r, {
        class: v(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
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
          onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
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
      G(r, {
        class: v(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (t) => e.checkDate("next"))
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
const hp = x({
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
    const o = $(!1), r = $(0), { t } = ao(), a = I(() => {
      var l;
      const { date: s, type: u } = e, { previewMonth: c, previewYear: d } = s;
      if (u === "year") return d;
      if (u === "month") return H(d) + r.value;
      const f = (l = (t || rn)("datePickerMonthDict")) == null ? void 0 : l[c].name;
      return (t || rn)("lang") === "zh-CN" ? `${d} ${f}` : `${f} ${d}`;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (n("check-date", l), o.value = l === "prev", r.value += l === "prev" ? -1 : 1);
    };
    return de(
      () => e.date,
      () => {
        r.value = 0;
      }
    ), {
      n: Zw,
      reverse: o,
      showDate: a,
      checkDate: i
    };
  }
});
hp.render = Jw;
var js = hp, Qw = Object.defineProperty, yc = Object.getOwnPropertySymbols, xw = Object.prototype.hasOwnProperty, _w = Object.prototype.propertyIsEnumerable, kc = (e, n, o) => n in e ? Qw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, eC = (e, n) => {
  for (var o in n || (n = {}))
    xw.call(n, o) && kc(e, o, n[o]);
  if (yc)
    for (var o of yc(n))
      _w.call(n, o) && kc(e, o, n[o]);
  return e;
};
se.extend(vp);
se.extend(pp);
const { n: ct, classes: nC } = _("month-picker"), { n: dt } = _("date-picker");
function oC(e, n) {
  const o = Q("panel-header"), r = Q("var-button");
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
                  Ke(e.MONTH_LIST, (t) => (h(), S("li", { key: t }, [
                    G(r, He({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation,
                      ref_for: !0
                    }, eC({}, e.buttonProps(t)), {
                      onClick: (a) => e.chooseMonth(t, a)
                    }), {
                      default: ce(() => [
                        Be(
                          ie(e.getMonthAbbr(t)),
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
const gp = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: zn,
    PanelHeader: js
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
    const [o, r] = e.current.split("-"), t = $(!1), a = $(0), i = $(null), l = xe({
      left: !1,
      right: !1
    }), { t: s } = ao(), u = I(() => e.choose.chooseYear === e.preview.previewYear), c = I(() => e.preview.previewYear === o), d = (b) => {
      var y, P;
      return (P = (y = (s || rn)("datePickerMonthDict")) == null ? void 0 : y[b].abbr) != null ? P : "";
    }, f = (b) => {
      const {
        preview: { previewYear: y },
        componentProps: { min: P, max: z }
      } = e;
      let O = !0, B = !0;
      const T = `${y}-${b}`;
      return z && (O = se(T).isSameOrBefore(se(z), "month")), P && (B = se(T).isSameOrAfter(se(P), "month")), O && B;
    }, p = (b) => {
      const {
        choose: { chooseMonths: y, chooseDays: P, chooseRangeMonth: z },
        componentProps: { type: O, range: B }
      } = e;
      if (B) {
        if (!z.length) return !1;
        const T = se(b).isSameOrBefore(se(z[1]), "month"), E = se(b).isSameOrAfter(se(z[0]), "month");
        return T && E;
      }
      return O === "month" ? y.includes(b) : P.some((T) => T.includes(b));
    }, g = (b) => {
      const {
        choose: { chooseMonth: y },
        preview: { previewYear: P },
        componentProps: { allowedDates: z, color: O, multiple: B, range: T }
      } = e, E = `${P}-${b}`, M = () => T || B ? p(E) : y === b && u.value, W = f(b) ? z ? !z(E) : !1 : !0, U = () => W ? !0 : T || B ? !p(E) : !u.value || y !== b, F = () => c.value && r === b && e.componentProps.showCurrent ? (T || B || u.value) && W ? !0 : T || B ? !p(E) : u.value ? y !== r : !0 : !1, Y = () => W ? "" : F() ? O ?? "" : M() ? "" : `${dt()}-color-cover`, j = Y().startsWith(dt());
      return {
        outline: F(),
        text: U(),
        color: U() ? "" : O,
        textColor: j ? "" : Y(),
        [`${dt()}-color-cover`]: j,
        class: nC(ct("button"), [W, ct("button--disabled")]),
        disabled: W
      };
    }, m = (b, y) => {
      y.currentTarget.classList.contains(ct("button--disabled")) || n("choose-month", b);
    }, k = (b) => {
      t.value = b === "prev", a.value += b === "prev" ? -1 : 1, n("check-preview", "year", b);
    }, w = (b) => {
      i.value.checkDate(b);
    };
    return de(
      () => [e.preview.previewYear, e.componentProps.max, e.componentProps.min],
      ([b, y, P]) => {
        y && (l.right = !se(`${H(b) + 1}`).isSameOrBefore(se(y), "year")), P && (l.left = !se(`${H(b) - 1}`).isSameOrAfter(se(P), "year"));
      },
      { immediate: !0 }
    ), {
      n: ct,
      nDate: dt,
      t: rn,
      MONTH_LIST: St,
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
gp.render = oC;
var rC = gp;
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
  onScroll: V()
};
var $c = (e, n, o) => new Promise((r, t) => {
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
const { name: tC, n: aC, classes: iC } = _("sticky");
function lC(e, n) {
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
const bp = x({
  name: tC,
  props: Tr,
  setup(e) {
    const n = $(null), o = $(null), r = $(!1), t = $("0px"), a = $("0px"), i = $("auto"), l = $("auto"), s = $("auto"), u = $("auto"), c = I(() => !e.disabled && e.cssMode), d = I(() => !e.disabled && !e.cssMode && r.value), f = I(() => _e(e.offsetTop));
    let p;
    de(() => e.disabled, b), mn(() => $c(this, null, function* () {
      yield kn(), m(), k();
    })), Jr(w), to(b), je(() => window, "scroll", k);
    function g() {
      const { cssMode: y, disabled: P } = e;
      if (P)
        return;
      let z = 0;
      if (p && p !== window) {
        const { top: R } = an(p);
        z = R;
      }
      const O = o.value, B = n.value, { top: T, left: E } = an(B), M = T - z;
      return M <= f.value ? (y || (i.value = `${B.offsetWidth}px`, l.value = `${B.offsetHeight}px`, t.value = `${z + f.value}px`, a.value = `${E}px`, s.value = `${O.offsetWidth}px`, u.value = `${O.offsetHeight}px`, r.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (r.value = !1, {
        offsetTop: M,
        isFixed: !1
      });
    }
    function m() {
      p = To(n.value), p !== window && p.addEventListener("scroll", k);
    }
    function k() {
      const y = g();
      y && C(e.onScroll, y.offsetTop, y.isFixed);
    }
    function w() {
      !p || p === window || p.removeEventListener("scroll", k);
    }
    function b() {
      return $c(this, null, function* () {
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
      n: aC,
      classes: iC,
      resize: b,
      toNumber: H
    };
  }
});
bp.render = lC;
var Na = bp;
re(Na);
le(Na, Tr);
const P5 = Na;
var vr = Na, sC = Object.defineProperty, wc = Object.getOwnPropertySymbols, uC = Object.prototype.hasOwnProperty, cC = Object.prototype.propertyIsEnumerable, Cc = (e, n, o) => n in e ? sC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, dC = (e, n) => {
  for (var o in n || (n = {}))
    uC.call(n, o) && Cc(e, o, n[o]);
  if (wc)
    for (var o of wc(n))
      cC.call(n, o) && Cc(e, o, n[o]);
  return e;
};
const { n: ft, classes: Sc } = _("year-picker"), { n: vt } = _("date-picker");
function fC(e, n) {
  const o = Q("panel-header"), r = Q("var-sticky"), t = Q("var-button");
  return h(), S("div", null, [
    G(r, { "css-mode": "" }, {
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
                G(t, He({
                  type: "primary",
                  "var-year-picker-cover": "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation,
                  ref_for: !0
                }, dC({}, e.buttonProps(`${a}`)), {
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
const yp = x({
  name: "YearPickerPanel",
  components: {
    VarButton: zn,
    VarSticky: vr,
    PanelHeader: js
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
    const [o] = e.current.split("-"), r = $(), t = $(null), a = $(!1), i = $(0), l = $(0), s = xe({
      left: !1,
      right: !1
    }), u = I(() => {
      if (!e.preview)
        return [];
      const w = Math.floor(H(e.preview) / 100 + l.value) * 100;
      return Array.from(Array(100), (b, y) => Math.max(0, w) + y);
    }), c = (w) => {
      const {
        choose: { chooseMonths: b, chooseDays: y, chooseYears: P, chooseRangeYear: z },
        componentProps: { type: O, range: B }
      } = e;
      if (B) {
        if (!z.length) return !1;
        const T = se(w).isSameOrBefore(se(z[1]), "year"), E = se(w).isSameOrAfter(se(z[0]), "year");
        return T && E;
      }
      return O === "year" ? P.includes(w) : O === "month" ? b.some((T) => T.includes(w)) : y.some((T) => T.includes(w));
    }, d = (w) => {
      const {
        componentProps: { min: b, max: y }
      } = e, P = y ? se(w).isSameOrBefore(se(y), "year") : !0, z = b ? se(w).isSameOrAfter(se(b), "year") : !0;
      return P && z;
    }, f = (w) => {
      const {
        choose: { chooseYear: b },
        componentProps: { allowedDates: y, color: P, multiple: z, range: O }
      } = e, B = () => O || z ? c(w) : b === w, E = d(w) ? y ? !y(w) : !1 : !0, M = () => E ? !0 : O || z ? !c(w) : b !== w, R = () => o === w && e.componentProps.showCurrent ? (O || z) && E ? !0 : O || z ? !c(w) : b !== o : !1, W = () => E ? "" : R() ? P ?? "" : B() ? "" : `${vt()}-color-cover`, U = W().startsWith(vt());
      return {
        outline: R(),
        text: M(),
        color: M() ? "" : P,
        textColor: U ? "" : W(),
        [`${vt()}-color-cover`]: U,
        class: Sc(ft("button"), [E, ft("button--disabled")]),
        disabled: E
      };
    }, p = (w, b) => {
      b.currentTarget.classList.contains(ft("button--disabled")) || n("choose-year", w);
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
    return mn(g), de(
      () => e.preview,
      () => {
        l.value = 0;
      }
    ), de(
      () => [u.value, e.componentProps.max, e.componentProps.min],
      (w) => {
        const [b, y, P] = w;
        y && (s.right = !se(`${H(b[b.length - 1])}`).isSameOrBefore(se(y), "year")), P && (s.left = !se(`${H(b[0])}`).isSameOrAfter(se(P), "year")), H(b[0] <= 0) && (s.left = !1);
      },
      {
        immediate: !0
      }
    ), {
      n: ft,
      classes: Sc,
      buttonProps: f,
      panel: r,
      headerEl: t,
      yearList: u,
      reverse: a,
      panelKey: i,
      panelBtnDisabled: s,
      nDate: vt,
      checkDate: m,
      chooseYear: p,
      forwardRef: k,
      toNumber: H
    };
  }
});
yp.render = fC;
var vC = yp, pC = Object.defineProperty, Pc = Object.getOwnPropertySymbols, mC = Object.prototype.hasOwnProperty, hC = Object.prototype.propertyIsEnumerable, zc = (e, n, o) => n in e ? pC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, gC = (e, n) => {
  for (var o in n || (n = {}))
    mC.call(n, o) && zc(e, o, n[o]);
  if (Pc)
    for (var o of Pc(n))
      hC.call(n, o) && zc(e, o, n[o]);
  return e;
};
se.extend(vp);
se.extend(pp);
const { n: Xo, classes: bC } = _("day-picker"), { n: pt } = _("date-picker");
function yC(e, n) {
  const o = Q("panel-header"), r = Q("var-button");
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
                      Ke(e.sortWeekList, (t) => (h(), S(
                        "li",
                        { key: t },
                        ie(e.getDayAbbr(t)),
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
                      Ke(e.days, (t, a) => (h(), S("li", { key: a }, [
                        G(r, He({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation,
                          ref_for: !0
                        }, gC({}, e.buttonProps(t)), {
                          onClick: (i) => e.chooseDay(t, i)
                        }), {
                          default: ce(() => [
                            Be(
                              ie(e.filterDay(t)),
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
const kp = x({
  name: "DayPickerPanel",
  components: {
    VarButton: zn,
    PanelHeader: js
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
    const [o, r, t] = e.current.split("-"), a = $([]), i = $(!1), l = $(0), s = $(null), u = xe({
      left: !1,
      right: !1
    }), { t: c } = ao(), d = I(
      () => e.preview.previewYear === o && e.preview.previewMonth === r
    ), f = I(
      () => e.choose.chooseYear === e.preview.previewYear && e.choose.chooseMonth === e.preview.previewMonth
    ), p = I(() => {
      const T = Sr.findIndex((E) => E === e.componentProps.firstDayOfWeek);
      return T === -1 || T === 0 ? Sr : [...Sr.slice(T), ...Sr.slice(0, T)];
    }), g = (T) => {
      var E, M;
      return (M = (E = (c || rn)("datePickerWeekDict")) == null ? void 0 : E[T].abbr) != null ? M : "";
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
        const W = `${T}-${H(E) + 1}`;
        u.right = !se(W).isSameOrBefore(se(M), "month");
      }
      if (R) {
        const W = `${T}-${H(E) - 1}`;
        u.left = !se(W).isSameOrAfter(se(R), "month");
      }
    }, b = (T) => {
      const {
        preview: { previewYear: E, previewMonth: M },
        componentProps: { min: R, max: W }
      } = e;
      let U = !0, F = !0;
      const Y = `${E}-${M}-${T}`;
      return W && (U = se(Y).isSameOrBefore(se(W), "day")), R && (F = se(Y).isSameOrAfter(se(R), "day")), U && F;
    }, y = (T) => {
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
        componentProps: { allowedDates: W, color: U, multiple: F, range: Y }
      } = e, j = `${M}-${R}-${T}`, ae = () => Y || F ? y(j) : H(E) === T && f.value, pe = b(T) ? W ? !W(j) : !1 : !0, ye = () => pe ? !0 : Y || F ? !y(j) : !f.value || H(E) !== T, Ee = () => d.value && H(t) === T && e.componentProps.showCurrent ? (Y || F || f.value) && pe ? !0 : Y || F ? !y(j) : f.value ? E !== t : !0 : !1, L = () => pe ? "" : Ee() ? U ?? "" : ae() ? "" : `${pt()}-color-cover`, Z = L().startsWith(pt());
      return {
        text: ye(),
        outline: Ee(),
        textColor: Z ? "" : L(),
        [`${pt()}-color-cover`]: Z,
        class: bC(Xo("button"), Xo("button--usable"), [pe, Xo("button--disabled")]),
        disabled: pe
      };
    }, z = (T) => {
      i.value = T === "prev", l.value += T === "prev" ? -1 : 1, n("check-preview", "month", T);
    }, O = (T, E) => {
      E.currentTarget.classList.contains(Xo("button--disabled")) || n("choose-day", T);
    }, B = (T) => {
      s.value.checkDate(T);
    };
    return mn(() => {
      k(), w();
    }), de(
      () => e.preview,
      () => {
        k(), w();
      }
    ), de(() => [e.componentProps.max, e.componentProps.min], w), {
      n: Xo,
      nDate: pt,
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
kp.render = yC;
var kC = kp, $C = (e, n, o) => new Promise((r, t) => {
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
const { name: wC, n: CC, classes: SC } = _("date-picker");
function PC(e, n) {
  var o;
  const r = Q("year-picker-panel"), t = Q("month-picker-panel"), a = Q("day-picker-panel");
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
const $p = x({
  name: wC,
  components: {
    MonthPickerPanel: rC,
    YearPickerPanel: vC,
    DayPickerPanel: kC
  },
  props: mp,
  setup(e) {
    const { t: n } = ao(), o = se().format("YYYY-MM-D"), [r, t] = o.split("-"), a = St.find((te) => te === t), i = $(!1), l = $(!1), s = $(!0), u = $(), c = $(), d = $(), f = $(a), p = $(r), g = $(!1), m = $([]), k = $([]), w = $([]), b = $([]), y = $([]), P = $([]), z = $(null), O = $(null), B = $(null), T = I(() => ({
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
      chooseRangeYear: b.value,
      chooseRangeMonth: y.value,
      chooseRangeDay: P.value
    })), M = I(() => ({
      previewMonth: f.value,
      previewYear: p.value
    })), R = I(() => {
      var te;
      const { multiple: $e, range: Oe } = e;
      return Oe ? b.value.length ? `${b.value[0]} ~ ${b.value[1]}` : "" : $e ? `${m.value.length}${(n || rn)("datePickerSelected")}` : (te = c.value) != null ? te : "";
    }), W = I(() => {
      var te, $e;
      const { multiple: Oe, range: Re } = e;
      if (Re)
        return y.value.length ? `${y.value[0]} ~ ${y.value[1]}` : "";
      let Le = "";
      return u.value && (Le = ($e = (te = (n || rn)("datePickerMonthDict")) == null ? void 0 : te[u.value].name) != null ? $e : ""), Oe ? `${k.value.length}${(n || rn)("datePickerSelected")}` : Le;
    }), U = I(() => {
      var te, $e, Oe, Re;
      const { multiple: Le, range: cn } = e;
      if (cn) {
        const $r = P.value.map((Dh) => se(Dh).format("YYYY-MM-DD"));
        return $r.length ? `${$r[0]} ~ ${$r[1]}` : "";
      }
      if (Le) return `${w.value.length}${(n || rn)("datePickerSelected")}`;
      if (!c.value || !u.value || !d.value) return "";
      const vn = se(`${c.value}-${u.value}-${d.value}`).day(), pn = Sr.find(($r) => $r === `${vn}`), Ro = ($e = (te = (n || rn)("datePickerWeekDict")) == null ? void 0 : te[pn].name) != null ? $e : "", Ih = (Re = (Oe = (n || rn)("datePickerMonthDict")) == null ? void 0 : Oe[u.value].name) != null ? Re : "", Bh = Yo(d.value, 2, "0");
      return (n || rn)("lang") === "zh-CN" ? `${u.value}-${Bh} ${Ro.slice(0, 3)}` : `${Ro.slice(0, 3)}, ${Ih.slice(0, 3)} ${d.value}`;
    }), F = I(() => e.type === "year" || i.value ? "year" : e.type === "month" || l.value ? "month" : e.type === "date" ? "date" : ""), Y = I(() => !e.touchable || !F.value), j = I(() => {
      var te, $e;
      const Oe = se(`${c.value}-${u.value}-${d.value}`).day(), Re = d.value ? Yo(d.value, 2, "0") : "";
      return {
        week: `${Oe}`,
        year: (te = c.value) != null ? te : "",
        month: ($e = u.value) != null ? $e : "",
        date: Re
      };
    }), ae = I(
      () => E.value.chooseRangeDay.map((te) => se(te).format("YYYY-MM-DD"))
    ), ee = I(() => c.value === p.value), pe = I(() => u.value === f.value);
    let ye = 0, Ee = 0, L = "", Z;
    de(
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
            Ie(te);
      },
      { immediate: !0 }
    ), de(F, Je);
    function oe(te) {
      te === "year" ? i.value = !0 : te === "month" ? l.value = !0 : (i.value = !1, l.value = !1);
    }
    function me(te) {
      if (Y.value) return;
      const { clientX: $e, clientY: Oe } = te.touches[0];
      ye = $e, Ee = Oe;
    }
    function D(te, $e) {
      return te >= $e && te > 20 ? "x" : "y";
    }
    function K(te) {
      if (Y.value) return;
      const { clientX: $e, clientY: Oe } = te.touches[0], Re = $e - ye, Le = Oe - Ee;
      Z = D(Math.abs(Re), Math.abs(Le)), L = Re > 0 ? "prev" : "next";
    }
    function fe() {
      return $C(this, null, function* () {
        if (Y.value || Z !== "x") return;
        const te = F.value === "year" ? z : F.value === "month" ? O : B;
        yield kn(), te.value.forwardRef(L), Je();
      });
    }
    function Se(te, $e) {
      const Oe = $e === "year" ? b : $e === "month" ? y : P;
      if (Oe.value = s.value ? [te, te] : [Oe.value[0], te], s.value = !s.value, s.value) {
        const Le = se(Oe.value[0]).isAfter(Oe.value[1]) ? [Oe.value[1], Oe.value[0]] : [...Oe.value];
        C(e["onUpdate:modelValue"], Le), C(e.onChange, Le);
      }
    }
    function Fe(te, $e) {
      const Oe = $e === "year" ? m : $e === "month" ? k : w, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-DD", Le = Oe.value.map((vn) => se(vn).format(Re)), cn = Le.findIndex((vn) => vn === te);
      cn === -1 ? Le.push(te) : Le.splice(cn, 1), C(e["onUpdate:modelValue"], Le), C(e.onChange, Le);
    }
    function Me(te, $e) {
      return !c.value || !u.value ? !1 : ee.value ? te === "year" ? $e < H(c.value) : te === "month" ? $e < u.value : pe.value ? $e < H(d.value) : u.value > f.value : c.value > p.value;
    }
    function on(te) {
      const { readonly: $e, range: Oe, multiple: Re, onChange: Le, "onUpdate:modelValue": cn } = e;
      if (te < 0 || $e) return;
      g.value = Me("day", te);
      const vn = `${p.value}-${f.value}-${te}`, pn = se(vn).format("YYYY-MM-DD");
      Oe ? Se(pn, "day") : Re ? Fe(pn, "day") : (C(cn, pn), C(Le, pn));
    }
    function ln(te) {
      const { type: $e, readonly: Oe, range: Re, multiple: Le, onChange: cn, onPreview: vn, "onUpdate:modelValue": pn } = e;
      if (g.value = Me("month", te), $e === "month" && !Oe) {
        const Ro = `${p.value}-${te}`;
        Re ? Se(Ro, "month") : Le ? Fe(Ro, "month") : (C(pn, Ro), C(cn, Ro));
      } else
        f.value = te, C(
          vn,
          H(p.value),
          H(f.value),
          $e === "date" ? H(d.value) : void 0
        );
      l.value = !1;
    }
    function wn(te) {
      const { type: $e, readonly: Oe, range: Re, multiple: Le, onChange: cn, onPreview: vn, "onUpdate:modelValue": pn } = e;
      g.value = Me("year", te), $e === "year" && !Oe ? Re ? Se(`${te}`, "year") : Le ? Fe(`${te}`, "year") : (C(pn, `${te}`), C(cn, `${te}`)) : (p.value = `${te}`, C(
        vn,
        H(p.value),
        H(f.value),
        $e === "date" ? H(d.value) : void 0
      )), i.value = !1;
    }
    function ve(te, $e) {
      const Oe = $e === "prev" ? -1 : 1;
      if (te === "year")
        p.value = `${H(p.value) + Oe}`;
      else {
        let Re = H(f.value) + Oe;
        Re < 1 && (p.value = `${H(p.value) - 1}`, Re = 12), Re > 12 && (p.value = `${H(p.value) + 1}`, Re = 1), f.value = St.find((Le) => H(Le) === Re);
      }
      C(
        e.onPreview,
        H(p.value),
        H(f.value),
        e.type === "date" ? H(d.value) : void 0
      );
    }
    function We() {
      return (e.multiple || e.range) && !Xe(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Xe(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0;
    }
    function ne(te) {
      return Xe(te) ? !1 : te === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1;
    }
    function ue(te, $e) {
      const Oe = $e === "year" ? b : $e === "month" ? y : P, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = te.map((pn) => se(pn).format(Re)).slice(0, 2);
      if (Oe.value.some((pn) => ne(pn))) return;
      Oe.value = Le;
      const vn = se(Oe.value[0]).isAfter(Oe.value[1]);
      Oe.value.length === 2 && vn && (Oe.value = [Oe.value[1], Oe.value[0]]);
    }
    function ke(te, $e) {
      const Oe = $e === "year" ? m : $e === "month" ? k : w, Re = $e === "year" ? "YYYY" : $e === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = Array.from(new Set(te.map((cn) => se(cn).format(Re))));
      Oe.value = Le.filter((cn) => cn !== "Invalid Date");
    }
    function Ie(te) {
      const Oe = (te ? se(te) : se()).format("YYYY-MM-D");
      if (ne(Oe)) return;
      const [Re, Le, cn] = Oe.split("-"), vn = St.find((pn) => pn === Le);
      u.value = vn, c.value = Re, d.value = cn, f.value = vn, p.value = Re;
    }
    function Je() {
      Ee = 0, ye = 0, L = "", Z = void 0;
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
      getPanelType: F,
      getChoose: E,
      getPreview: M,
      componentProps: T,
      slotProps: j,
      formatRange: ae,
      pt: n,
      t: rn,
      n: CC,
      classes: SC,
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
$p.render = PC;
var Aa = $p;
re(Aa);
le(Aa, mp);
const z5 = Aa;
var $l = Aa, zC = Object.defineProperty, Oc = Object.getOwnPropertySymbols, OC = Object.prototype.hasOwnProperty, TC = Object.prototype.propertyIsEnumerable, Tc = (e, n, o) => n in e ? zC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, EC = (e, n) => {
  for (var o in n || (n = {}))
    OC.call(n, o) && Tc(e, o, n[o]);
  if (Oc)
    for (var o of Oc(n))
      TC.call(n, o) && Tc(e, o, n[o]);
  return e;
};
const wp = EC({
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
var IC = Object.defineProperty, Ec = Object.getOwnPropertySymbols, BC = Object.prototype.hasOwnProperty, DC = Object.prototype.propertyIsEnumerable, Ic = (e, n, o) => n in e ? IC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, MC = (e, n) => {
  for (var o in n || (n = {}))
    BC.call(n, o) && Ic(e, o, n[o]);
  if (Ec)
    for (var o of Ec(n))
      DC.call(n, o) && Ic(e, o, n[o]);
  return e;
};
const { name: NC, n: AC, classes: VC } = _("dialog");
function RC(e, n) {
  const o = Q("var-button"), r = Q("var-popup");
  return h(), Ce(r, {
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
          style: MC({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          N(
            "div",
            {
              class: v(e.n("title"))
            },
            [
              A(e.$slots, "title", {}, () => {
                var t;
                return [
                  Be(
                    ie((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("dialogTitle")),
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
                    var t;
                    return [
                      Be(
                        ie((t = e.cancelButtonText) != null ? t : (e.pt ? e.pt : e.t)("dialogCancelButtonText")),
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
                    var t;
                    return [
                      Be(
                        ie((t = e.confirmButtonText) != null ? t : (e.pt ? e.pt : e.t)("dialogConfirmButtonText")),
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
const Cp = x({
  name: NC,
  components: {
    VarPopup: Oo,
    VarButton: zn
  },
  inheritAttrs: !1,
  props: wp,
  setup(e) {
    const n = $(!1), o = $(!1), { t: r } = ao();
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
      n: AC,
      classes: VC,
      handleClickOverlay: a,
      confirm: i,
      cancel: l,
      toSizeUnit: ze,
      handleKeyEscape: s
    };
  }
});
Cp.render = RC;
var ot = Cp, LC = Object.defineProperty, FC = Object.defineProperties, HC = Object.getOwnPropertyDescriptors, Bc = Object.getOwnPropertySymbols, UC = Object.prototype.hasOwnProperty, YC = Object.prototype.propertyIsEnumerable, Dc = (e, n, o) => n in e ? LC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Di = (e, n) => {
  for (var o in n || (n = {}))
    UC.call(n, o) && Dc(e, o, n[o]);
  if (Bc)
    for (var o of Bc(n))
      YC.call(n, o) && Dc(e, o, n[o]);
  return e;
}, jC = (e, n) => FC(e, HC(n));
let bo, Rt = {};
function WC(e = {}) {
  return yn(e) ? jC(Di({}, Rt), { message: e }) : Di(Di({}, Rt), e);
}
function Ao(e) {
  return ro() ? new Promise((n) => {
    Ao.close();
    const o = WC(e), r = xe(o);
    r.teleport = "body", bo = r;
    const { unmountInstance: t } = gr(ot, r, {
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
  Rt = e;
};
Ao.resetDefaultOptions = function() {
  Rt = {};
};
Ao.close = function() {
  if (bo != null) {
    const e = bo;
    bo = null, Ue().then(() => {
      e.show = !1;
    });
  }
};
Ao.Component = ot;
re(ot);
re(ot, Ao);
le(Ao, wp);
const O5 = ot;
var wl = Ao;
const Sp = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: KC, n: qC, classes: XC } = _("divider");
function GC(e, n) {
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
const Pp = x({
  name: KC,
  props: Sp,
  setup(e, { slots: n }) {
    const o = $(!1), r = I(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), t = I(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (vs(i) || l)
        return { margin: s };
      const u = H(i), c = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${ze(c)})`,
        left: u > 0 ? ze(c) : ze(0)
      };
    });
    mn(a), Gr(a);
    function a() {
      const { description: i, vertical: l } = e;
      o.value = (n.default || i != null) && !l;
    }
    return {
      n: qC,
      classes: XC,
      withText: o,
      style: t,
      withPresetInset: r
    };
  }
});
Pp.render = GC;
var Va = Pp;
re(Va);
le(Va, Sp);
const T5 = Va;
var Cl = Va;
const zp = {
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
var ZC = Object.defineProperty, JC = Object.defineProperties, QC = Object.getOwnPropertyDescriptors, Mc = Object.getOwnPropertySymbols, xC = Object.prototype.hasOwnProperty, _C = Object.prototype.propertyIsEnumerable, Nc = (e, n, o) => n in e ? ZC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ac = (e, n) => {
  for (var o in n || (n = {}))
    xC.call(n, o) && Nc(e, o, n[o]);
  if (Mc)
    for (var o of Mc(n))
      _C.call(n, o) && Nc(e, o, n[o]);
  return e;
}, Vc = (e, n) => JC(e, QC(n)), eS = (e, n, o) => new Promise((r, t) => {
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
const { name: nS, n: oS, classes: rS } = _("drag");
function tS(e, n) {
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
const Op = x({
  name: nS,
  inheritAttrs: !1,
  props: zp,
  setup(e, { attrs: n }) {
    const o = $(null), r = $(0), t = $(0), a = $(!1), i = $(!1), { touching: l, dragging: s, moveX: u, moveY: c, startTouch: d, moveTouch: f, endTouch: p, resetTouch: g } = hr(), { disabled: m } = qo(), k = xe({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    de(() => e.boundary, M), to(W), mn(() => {
      M(), W();
    });
    function w(F) {
      e.disabled || (d(F), z());
    }
    function b(F) {
      return eS(this, null, function* () {
        !l.value || e.disabled || (f(F), Ve(F), i.value = !1, a.value = !0, e.direction.includes("x") && (r.value += u.value), e.direction.includes("y") && (t.value += c.value), E());
      });
    }
    function y() {
      e.disabled || (p(), i.value = !0, T());
    }
    function P(F) {
      s.value || C(e.onClick, F);
    }
    function z() {
      const { left: F, top: Y } = O();
      r.value = F, t.value = Y;
    }
    function O() {
      const F = an(o.value), Y = an(window), j = F.top - Y.top, ae = Y.bottom - F.bottom, ee = F.left - Y.left, pe = Y.right - F.right, { width: ye, height: Ee } = F, { width: L, height: Z } = Y;
      return {
        top: j,
        bottom: ae,
        left: ee,
        right: pe,
        width: ye,
        height: Ee,
        halfWidth: ye / 2,
        halfHeight: Ee / 2,
        windowWidth: L,
        windowHeight: Z
      };
    }
    function B() {
      const F = O(), Y = k.left, j = F.windowWidth - k.right - F.width, ae = k.top, ee = F.windowHeight - k.bottom - F.height;
      return {
        minX: Y,
        minY: ae,
        // fallback the drag element overflows boundary
        maxX: Y < j ? j : Y,
        maxY: ae < ee ? ee : ae
      };
    }
    function T() {
      if (e.attraction == null)
        return;
      const { halfWidth: F, halfHeight: Y, top: j, bottom: ae, left: ee, right: pe } = O(), { minX: ye, minY: Ee, maxX: L, maxY: Z } = B(), oe = ee + F - k.left, me = pe + F - k.right, D = j + Y - k.top, K = ae + Y - k.bottom, fe = oe <= me, Se = D <= K;
      e.attraction.includes("x") && (r.value = fe ? ye : L), e.attraction.includes("y") && (t.value = Se ? Ee : Z);
    }
    function E() {
      const { minX: F, minY: Y, maxX: j, maxY: ae } = B();
      r.value = Mn(r.value, F, j), t.value = Mn(t.value, Y, ae);
    }
    function M() {
      const { top: F = 0, bottom: Y = 0, left: j = 0, right: ae = 0 } = e.boundary;
      k.top = _e(F), k.bottom = _e(Y), k.left = _e(j), k.right = _e(ae);
    }
    function R() {
      var F;
      const Y = (F = n.style) != null ? F : {};
      return Vc(Ac({}, n), {
        style: Vc(Ac({}, Y), {
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
    function U() {
      g(), i.value = !1, a.value = !1, r.value = 0, t.value = 0;
    }
    return {
      drag: o,
      x: r,
      y: t,
      enableTransition: i,
      dragging: s,
      teleportDisabled: m,
      n: oS,
      classes: rS,
      getAttrs: R,
      handleTouchstart: w,
      handleTouchmove: b,
      handleTouchend: y,
      handleClick: P,
      resize: W,
      reset: U
    };
  }
});
Op.render = tS;
var Ra = Op;
re(Ra);
le(Ra, zp);
const E5 = Ra;
var Lt = Ra;
const Tp = {
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
}, { name: aS, n: iS, classes: lS } = _("tooltip");
function sS(e, n) {
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
const Ep = x({
  name: aS,
  props: Tp,
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
      handleClosed: p,
      // expose
      open: g,
      // expose
      close: m,
      // expose
      resize: k
    } = Rf(e);
    return {
      popover: o,
      host: r,
      hostSize: t,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: ze,
      n: iS,
      classes: lS,
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
Ep.render = sS;
var La = Ep;
re(La);
le(La, Tp);
const I5 = La;
var Ft = La;
const Ip = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": V()
};
var uS = Object.defineProperty, Rc = Object.getOwnPropertySymbols, cS = Object.prototype.hasOwnProperty, dS = Object.prototype.propertyIsEnumerable, Lc = (e, n, o) => n in e ? uS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, fS = (e, n) => {
  for (var o in n || (n = {}))
    cS.call(n, o) && Lc(e, o, n[o]);
  if (Rc)
    for (var o of Rc(n))
      dS.call(n, o) && Lc(e, o, n[o]);
  return e;
};
const { name: vS, n: pS, classes: mS } = _("ellipsis"), hS = { key: 0 };
function gS(e, n) {
  const o = Q("var-tooltip");
  return h(), Ce(
    o,
    wo(Zr(e.tooltipProps)),
    {
      content: ce(() => [
        A(e.$slots, "tooltip-content", {}, () => {
          var r;
          return [
            (r = e.tooltipProps) != null && r.content ? (h(), S(
              "span",
              hS,
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
            onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
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
const Bp = x({
  name: vS,
  components: { VarTooltip: Ft },
  props: Ip,
  setup(e) {
    const n = Kn(e, "expand"), o = I(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), r = I(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : fS({ sameWidth: !0 }, e.tooltip));
    function t() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: r,
      expanding: n,
      rootStyles: o,
      n: pS,
      classes: mS,
      handleClick: t
    };
  }
});
Bp.render = gS;
var Fa = Bp;
re(Fa);
le(Fa, Ip);
const B5 = Fa;
var Sl = Fa;
const Dp = {
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
  name: bS,
  classes: Mi,
  n: Bn
} = _("fab");
var Ha = x({
  name: bS,
  inheritAttrs: !1,
  props: Dp,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const r = Kn(e, "active"), t = $(null), a = $(null);
    de(() => e.trigger, () => {
      r.value = !1;
    }), de(() => e.disabled, () => {
      r.value = !1;
    }), de(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var c;
      (c = a.value) == null || c.reset();
    }), gs(t, "click", s);
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
      }) : null : Ae(G(zn, {
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
          class: Mi([r.value, Bn("trigger-active-icon"), Bn("trigger-inactive-icon")]),
          name: r.value ? e.activeIcon : e.inactiveIcon,
          size: r.value ? e.activeIconSize : e.inactiveIconSize,
          namespace: r.value ? e.activeIconNamespace : e.inactiveIconNamespace,
          transition: 200,
          animationClass: Bn("--trigger-icon-animation")
        }, null)]
      }), [[Qn, e.show]]);
    }
    return () => {
      var c;
      const d = jd((c = C(n.default)) != null ? c : []), f = vs(e.drag) ? {} : e.drag;
      return G(Lt, He({
        ref: a,
        class: Mi(Bn(`--position-${e.position}`), [!e.fixed, Bn("--absolute")]),
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
        onClick: (p) => i(p, !r.value, d.length)
      }, o), {
        default: () => [G("div", {
          class: Mi(Bn(), Bn(`--direction-${e.direction}`), [e.safeArea, Bn("--safe-area")]),
          ref: t,
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
          default: () => [Ae(G("div", {
            class: Bn("actions"),
            onClick: (p) => p.stopPropagation()
          }, [d.map((p) => {
            var g;
            return G("div", {
              class: Bn("action"),
              key: (g = p.key) != null ? g : void 0
            }, [p]);
          })]), [[Qn, e.show && r.value && d.length]])]
        })])]
      });
    };
  }
});
re(Ha);
le(Ha, Dp);
const D5 = Ha;
var Pl = Ha;
const Mp = {
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
}, { name: yS, n: kS, classes: $S } = _("floating-panel"), Fc = 100, Hc = 0.2;
function wS(e, n) {
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
const Np = x({
  name: yS,
  props: Mp,
  setup(e) {
    const n = $(0), o = $(null), { height: r } = dg(), t = I(() => r.value * 0.6), a = Kn(e, "anchor", { defaultValue: Fc }), i = I(() => {
      const E = [Fc, t.value], { anchors: M } = e;
      return Zn(M) ? E : M;
    }), l = I(() => Math.min(...i.value)), s = I(() => Math.max(...i.value)), { disabled: u } = qo(), { deltaY: c, touching: d, startTouch: f, moveTouch: p, endTouch: g, isReachTop: m, isReachBottom: k } = hr();
    let w;
    xr(() => d.value), de(() => a.value, b, { immediate: !0 }), de(
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
        return s.value + M * Hc;
      }
      if (E < l.value) {
        const M = l.value - E;
        return l.value - M * Hc;
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
      n: kS,
      classes: $S,
      toSizeUnit: ze,
      toNumber: H,
      formatElevation: un,
      handleTouchstart: y,
      handleTouchmove: P,
      handleTouchend: z
    };
  }
});
Np.render = wS;
var Ua = Np;
re(Ua);
le(Ua, Mp);
const M5 = Ua;
var zl = Ua;
const Ap = {
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
var Uc = (e, n, o) => new Promise((r, t) => {
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
const { name: CS, n: SS } = _("form");
function PS(e, n) {
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
const Vp = x({
  name: CS,
  props: Ap,
  setup(e) {
    const n = I(() => e.disabled), o = I(() => e.readonly), { formItems: r, bindFormItems: t } = p0();
    t({
      disabled: n,
      readonly: o
    });
    function i(f) {
      setTimeout(() => {
        const p = To(f), g = p === window ? 0 : hu(p), m = hu(f) - g - _e(e.scrollToErrorOffsetY);
        Dr(p, {
          top: m,
          animation: Ki
        });
      }, 300);
    }
    function l(f) {
      return Uc(this, null, function* () {
        Ve(f);
        const p = yield u();
        C(e.onSubmit, p);
      });
    }
    function s(f) {
      Ve(f), c(), C(e.onReset);
    }
    function u() {
      return Uc(this, null, function* () {
        var f;
        const p = yield Promise.all(r.map(({ validate: g }) => g()));
        if (e.scrollToError) {
          const [, g] = xh(p, (k) => k === !1, e.scrollToError), m = g > -1;
          if (m) {
            const k = (f = r[g].instance.proxy) == null ? void 0 : f.$el;
            i(k);
          }
          return !m;
        }
        return p.every((g) => g === !0);
      });
    }
    function c() {
      return r.forEach(({ reset: f }) => f());
    }
    function d() {
      return r.forEach(({ resetValidation: f }) => f());
    }
    return {
      n: SS,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: c,
      resetValidation: d
    };
  }
});
Vp.render = PS;
var yr = Vp;
yr.useValidation = Ln;
yr.useForm = Fn;
re(yr);
le(yr, Ap);
const N5 = yr;
var Ol = yr;
const Rp = {
  highlighter: Object,
  theme: String,
  tag: {
    type: String,
    default: "div"
  }
}, { name: zS, n: OS } = _("highlighter-provider"), TS = x({
  name: zS,
  props: Rp,
  setup(e, { slots: n }) {
    const o = I(() => e.highlighter), r = I(() => e.theme);
    return l$({ highlighter: o, theme: r }), () => Xr(
      e.tag,
      {
        class: OS()
      },
      C(n.default)
    );
  }
});
var Ya = TS;
re(Ya);
le(Ya, Rp);
const A5 = Ya;
var Tl = Ya;
const Lp = {
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
}, { name: ES, n: IS, classes: BS } = _("image"), DS = ["alt", "title", "referrerpolicy", "lazy-loading", "lazy-error"], MS = ["alt", "title", "referrerpolicy", "src"];
function NS(e, n) {
  var o;
  const r = Ye("lazy"), t = Ye("ripple");
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
      }, null, 46, DS)), [
        [r, (o = e.src) != null ? o : ""]
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
      }, null, 46, MS)) : q("v-if", !0),
      e.showErrorSlot ? A(e.$slots, "error", { key: 2 }) : q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: !e.ripple }]
  ]);
}
const Fp = x({
  name: ES,
  directives: {
    Lazy: Fr,
    Ripple: nn
  },
  props: Lp,
  setup(e, { slots: n }) {
    const o = $(!1);
    de(
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
      n: IS,
      classes: BS,
      toSizeUnit: ze,
      handleLoad: t,
      handleError: r,
      handleClick: a
    };
  }
});
Fp.render = NS;
var ja = Fp;
re(ja);
le(ja, Lp);
const V5 = ja;
var El = ja;
const Ws = {
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
const AS = 250, VS = 20, { name: RS, n: Yc, classes: LS } = _("swipe"), FS = ["onClick"];
function HS(e, n) {
  const o = Q("var-icon"), r = Q("var-button"), t = Ye("hover");
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
                G(r, {
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
                G(r, {
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
      A(e.$slots, "indicator", wo(Zr({
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
              }, null, 14, FS))),
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
    [t, e.handleHovering]
  ]);
}
const Hp = x({
  name: RS,
  directives: { Hover: En },
  components: { VarButton: zn, VarIcon: Ze },
  props: Ws,
  setup(e) {
    const n = $(null), o = $(0), r = I(() => e.vertical), t = $(0), a = $(0), i = $(!1), l = $(0), s = $(!1), { swipeItems: u, bindSwipeItems: c, length: d } = qb(), { swipeResizeListeners: f, bindSwipeResizeListeners: p } = Xb(), { popup: g, bindPopup: m } = Jd(), {
      deltaX: k,
      deltaY: w,
      moveX: b,
      moveY: y,
      offsetX: P,
      offsetY: z,
      touching: O,
      direction: B,
      startTime: T,
      startTouch: E,
      moveTouch: M,
      endTouch: R
    } = hr(), W = I(() => B.value === (e.vertical ? "vertical" : "horizontal"));
    let U = !1, F = -1;
    c({
      size: o,
      currentIndex: l,
      vertical: r
    }), je(() => window, "keydown", Fe), C(m, null), C(p, null), de(
      () => d.value,
      () => Go(this, null, function* () {
        yield kn(), L(), Me();
      })
    ), g && de(
      () => g.show.value,
      (ve) => Go(this, null, function* () {
        ve ? (yield kn(), Me()) : oe();
      })
    ), Bo(Me), Jr(oe), to(Me);
    function j(ve) {
      return u.find(({ index: We }) => We.value === ve);
    }
    function ae() {
      e.loop && (a.value >= 0 && j(d.value - 1).setTranslate(-t.value), a.value <= -(t.value - o.value) && j(0).setTranslate(t.value), a.value > -(t.value - o.value) && a.value < 0 && (j(d.value - 1).setTranslate(0), j(0).setTranslate(0)));
    }
    function ee(ve) {
      const We = Tn(ve) ? ve : Math.floor((a.value - o.value / 2) / -o.value), { loop: ne } = e;
      return We <= -1 ? ne ? -1 : 0 : We >= d.value ? ne ? d.value : d.value - 1 : We;
    }
    function pe(ve) {
      const { loop: We } = e;
      return ve === -1 ? We ? d.value - 1 : 0 : ve === d.value ? We ? 0 : d.value - 1 : ve;
    }
    function ye(ve) {
      return e.loop ? ve < 0 ? d.value + ve : ve >= d.value ? ve - d.value : ve : Mn(ve, 0, d.value - 1);
    }
    function Ee() {
      return Go(this, null, function* () {
        const ve = a.value >= o.value, We = a.value <= -t.value, ne = 0, ue = -(t.value - o.value);
        i.value = !0, (ve || We) && (i.value = !0, a.value = We ? ne : ue, j(0).setTranslate(0), j(d.value - 1).setTranslate(0)), yield kn(), i.value = !1;
      });
    }
    function L() {
      U || (l.value = ye(H(e.initialIndex)), U = !0);
    }
    function Z() {
      const { autoplay: ve } = e;
      !ve || d.value <= 1 || (oe(), F = window.setTimeout(() => {
        on(), Z();
      }, H(ve)));
    }
    function oe() {
      F && clearTimeout(F);
    }
    function me(ve) {
      return Go(this, null, function* () {
        d.value <= 1 || !e.touchable || (E(ve), oe(), yield Ee(), i.value = !0);
      });
    }
    function D(ve) {
      const { touchable: We, vertical: ne } = e;
      !O.value || !We || (M(ve), W.value && (Ve(ve), a.value += ne ? y.value : b.value, ae()));
    }
    function K() {
      if (!O.value || (R(), !W.value))
        return;
      const { vertical: ve, onChange: We } = e, ne = ve ? w.value < 0 : k.value < 0, ue = ve ? z.value : P.value, Ie = performance.now() - T.value <= AS && ue >= VS ? ee(ne ? l.value + 1 : l.value - 1) : ee();
      i.value = !1, a.value = Ie * -o.value;
      const Je = l.value;
      l.value = pe(Ie), Z(), Je !== l.value && C(We, l.value);
    }
    function fe(ve) {
      e.navigation === "hover" && (s.value = ve);
    }
    function Se(ve) {
      return e.navigation !== "hover" ? "" : Yc(`--navigation${e.vertical ? "-vertical" : ""}-${ve}-animation`);
    }
    function Fe(ve) {
      if (!u.length || u.findIndex(({ isFocusing: ue }) => ue.value) === -1)
        return;
      const { key: ne } = ve;
      Ve(ve), ne === "ArrowLeft" && ln(), ne === "ArrowRight" && on();
    }
    function Me() {
      n.value && (i.value = !0, o.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = o.value * d.value, a.value = l.value * -o.value, u.forEach((ve) => {
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
        L();
        const { loop: We, onChange: ne } = e, ue = l.value;
        if (l.value = ye(ue + 1), (ve == null ? void 0 : ve.event) !== !1 && C(ne, l.value), yield Ee(), ue === d.value - 1 && We) {
          j(0).setTranslate(t.value), a.value = d.value * -o.value;
          return;
        }
        ue !== d.value - 1 && (a.value = l.value * -o.value);
      });
    }
    function ln(ve) {
      return Go(this, null, function* () {
        if (d.value <= 1)
          return;
        L();
        const { loop: We, onChange: ne } = e, ue = l.value;
        if (l.value = ye(ue - 1), (ve == null ? void 0 : ve.event) !== !1 && C(ne, l.value), yield Ee(), ue === 0 && We) {
          j(d.value - 1).setTranslate(-t.value), a.value = o.value;
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
      trackSize: t,
      trackTranslate: a,
      lockDuration: i,
      hovering: s,
      n: Yc,
      toSizeUnit: ze,
      classes: LS,
      handleTouchstart: me,
      handleTouchmove: D,
      handleTouchend: K,
      next: on,
      prev: ln,
      to: wn,
      resize: Me,
      toNumber: H,
      handleHovering: fe,
      getNavigationAnimation: Se
    };
  }
});
Hp.render = HS;
var Wa = Hp;
re(Wa);
le(Wa, Ws);
const R5 = Wa;
var Ur = Wa;
function US() {
  const { bindParent: e, index: n, parentProvider: o } = hn(Pf);
  return e || An("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: o,
    bindSwipe: e
  };
}
const { name: YS, n: jS } = _("swipe-item"), WS = ["aria-hidden"];
function KS(e, n) {
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
  ], 46, WS);
}
const Up = x({
  name: YS,
  setup() {
    const e = $(0), n = $(!1), { swipe: o, bindSwipe: r, index: t } = US(), { size: a, currentIndex: i, vertical: l } = o, s = {
      index: t,
      isFocusing: I(() => n.value),
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
      n: jS,
      toSizeUnit: ze
    };
  }
});
Up.render = KS;
var Ks = Up;
re(Ks);
const L5 = Ks;
var Yr = Ks, qS = Object.defineProperty, jc = Object.getOwnPropertySymbols, XS = Object.prototype.hasOwnProperty, GS = Object.prototype.propertyIsEnumerable, Wc = (e, n, o) => n in e ? qS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Kc = (e, n) => {
  for (var o in n || (n = {}))
    XS.call(n, o) && Wc(e, o, n[o]);
  if (jc)
    for (var o of jc(n))
      GS.call(n, o) && Wc(e, o, n[o]);
  return e;
};
const Yp = Kc(Kc({
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
}, De(Ws, ["loop", "indicator", "onChange"])), De(br, [
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
])), { name: ZS, n: qc, classes: JS } = _("image-preview"), Ni = 12, Xc = 200, QS = 350, Gc = 200, xS = 500, mt = 1, _S = ["onTouchstart"], e6 = ["src", "alt"];
function n6(e, n) {
  const o = Q("var-swipe-item"), r = Q("var-swipe"), t = Q("var-icon"), a = Q("var-popup");
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
      G(r, He({
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
                  }, null, 10, e6)
                ], 46, _S)
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
        e.closeable ? (h(), Ce(t, {
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
const jp = x({
  name: ZS,
  components: {
    VarSwipe: Ur,
    VarSwipeItem: Yr,
    VarPopup: Oo,
    VarIcon: Ze
  },
  inheritAttrs: !1,
  props: Yp,
  setup(e) {
    const n = Kn(e, "show"), o = $(1), r = $(0), t = $(0), a = $(), i = $(), l = $(!0), s = $(null), { moveX: u, moveY: c, distance: d, startTime: f, startTouch: p, moveTouch: g, endTouch: m } = hr(), k = I(() => {
      const { imagePreventDefault: L, show: Z } = e;
      return Z && L;
    });
    let w = null, b = null, y = !1;
    const P = {
      start: null,
      prev: null
    };
    je(() => document, "contextmenu", ae);
    function z(L) {
      o.value = H(L), l.value = !1, P.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Gc);
    }
    function O() {
      o.value = 1, r.value = 0, t.value = 0, l.value = !0, P.prev = null, a.value = void 0, i.value = void 0;
    }
    function B(L) {
      return P.prev ? d.value <= Ni && performance.now() - f.value <= Xc && P.prev === L : !1;
    }
    function T(L) {
      return !L || !P.start || !P.prev ? !1 : d.value <= Ni && performance.now() - f.value < QS && (L === P.start || L.parentNode === P.start);
    }
    function E() {
      m(), window.clearTimeout(b), y = !1, P.start = null;
    }
    function M(L) {
      if (m(), window.clearTimeout(b), y) {
        y = !1;
        return;
      }
      const Z = T(L.target);
      w = window.setTimeout(() => {
        Z && j(), P.start = null;
      }, Xc);
    }
    function R(L, Z) {
      window.clearTimeout(w), window.clearTimeout(b);
      const oe = L.currentTarget;
      if (P.start = oe, b = window.setTimeout(() => {
        y = !0, C(e.onLongPress, Z);
      }, xS), B(oe)) {
        o.value > mt ? O() : z(e.zoom);
        return;
      }
      p(L), P.prev = oe;
    }
    function W(L) {
      const { offsetWidth: Z, offsetHeight: oe } = L, { naturalWidth: me, naturalHeight: D } = L.querySelector(`.${qc("image")}`);
      return {
        width: Z,
        height: oe,
        imageRadio: D / me,
        rootRadio: oe / Z,
        zoom: H(e.zoom)
      };
    }
    function U(L) {
      const { zoom: Z, imageRadio: oe, rootRadio: me, width: D, height: K } = W(L);
      if (!oe)
        return 0;
      const fe = oe > me ? K / oe : D;
      return Math.max(0, (Z * fe - D) / 2) / Z;
    }
    function F(L) {
      const { zoom: Z, imageRadio: oe, rootRadio: me, width: D, height: K } = W(L);
      if (!oe)
        return 0;
      const fe = oe > me ? K : D * oe;
      return Math.max(0, (Z * fe - K) / 2) / Z;
    }
    function Y(L) {
      if (!P.prev)
        return;
      g(L);
      const Z = L.currentTarget;
      if (d.value > Ni && window.clearTimeout(b), o.value > mt) {
        const oe = U(Z), me = F(Z);
        r.value = Mn(r.value + u.value, -oe, oe), t.value = Mn(t.value + c.value, -me, me);
      }
      P.prev = Z;
    }
    function j() {
      if (o.value > mt) {
        O(), setTimeout(() => C(e["onUpdate:show"], !1), Gc);
        return;
      }
      C(e["onUpdate:show"], !1);
    }
    function ae(L) {
      k.value && Ve(L);
    }
    function ee(L) {
      var Z;
      (Z = s.value) == null || Z.prev(L);
    }
    function pe(L) {
      var Z;
      (Z = s.value) == null || Z.next(L);
    }
    function ye(L, Z) {
      var oe;
      (oe = s.value) == null || oe.to(L, Z);
    }
    function Ee(L) {
      L <= mt ? O() : z(L);
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
      n: qc,
      classes: JS,
      toNumber: H,
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
jp.render = n6;
var rt = jp, o6 = Object.defineProperty, r6 = Object.defineProperties, t6 = Object.getOwnPropertyDescriptors, Zc = Object.getOwnPropertySymbols, a6 = Object.prototype.hasOwnProperty, i6 = Object.prototype.propertyIsEnumerable, Jc = (e, n, o) => n in e ? o6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ht = (e, n) => {
  for (var o in n || (n = {}))
    a6.call(n, o) && Jc(e, o, n[o]);
  if (Zc)
    for (var o of Zc(n))
      i6.call(n, o) && Jc(e, o, n[o]);
  return e;
}, Qc = (e, n) => r6(e, t6(n));
let yo, Er = {};
function l6(e = {}) {
  return yn(e) ? Qc(ht({}, Er), { images: [e] }) : Xe(e) ? Qc(ht({}, Er), { images: e }) : ht(ht({}, Er), e);
}
function Vo(e) {
  if (!ro())
    return;
  Vo.close();
  const n = l6(e), o = xe(n);
  o.teleport = "body", yo = o;
  const { unmountInstance: r } = gr(rt, o, {
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
    yo = null, Ue().then(() => {
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
Vo.Component = rt;
re(rt);
re(rt, Vo);
le(Vo, Yp);
const F5 = rt;
var jr = Vo;
const Wp = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function s6() {
  const { bindChildren: e, length: n, childProviders: o } = gn(
    Wp
  );
  return {
    length: n,
    indexAnchors: o,
    bindIndexAnchors: e
  };
}
function u6() {
  const { parentProvider: e, index: n, bindParent: o } = hn(
    Wp
  );
  return o || An("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: o
  };
}
const Kp = {
  index: [Number, String]
}, { name: c6, n: d6, classes: f6 } = _("index-anchor");
function v6(e, n) {
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
const qp = x({
  name: c6,
  components: { VarSticky: vr },
  inheritAttrs: !1,
  props: Kp,
  setup(e) {
    const n = $(!1), o = I(() => e.index), r = $(null), { index: t, indexBar: a, bindIndexBar: i } = u6(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: c, zIndex: d } = a;
    i({
      index: t,
      name: o,
      setDisabled: g,
      getOffsetTop: p
    });
    function p() {
      return r.value ? r.value.$el ? r.value.$el.offsetTop : r.value.offsetTop : 0;
    }
    function g(m) {
      n.value = m;
    }
    return {
      n: d6,
      classes: f6,
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
qp.render = v6;
var Ka = qp;
re(Ka);
le(Ka, Kp);
const H5 = Ka;
var Il = Ka;
const Xp = {
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
var xc = (e, n, o) => new Promise((r, t) => {
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
const { name: p6, n: m6, classes: h6 } = _("index-bar"), g6 = ["onClick"];
function b6(e, n) {
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
              onClick: (r) => e.anchorClick({ anchorName: o, manualCall: !0 })
            }, [
              A(e.$slots, "anchor-name", { anchorName: o }, () => [
                Be(
                  ie(o),
                  1
                  /* TEXT */
                )
              ])
            ], 14, g6))),
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
const Gp = x({
  name: p6,
  props: Xp,
  setup(e) {
    const n = $(""), o = $(null), r = $([]), t = $(), a = I(() => e.sticky), i = I(() => e.stickyCssMode), l = I(() => _e(e.stickyOffsetTop)), s = I(() => e.zIndex), { length: u, indexAnchors: c, bindIndexAnchors: d } = s6();
    let f = null, p = !1;
    const g = {
      active: t,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    de(
      () => u.value,
      () => xc(this, null, function* () {
        yield kn(), r.value = c.filter(({ name: O }) => O.value != null).map(({ name: O }) => O.value);
      })
    ), mn(y), Yt(P), pr(() => {
      p = !0, P();
    }), Bo(() => {
      !p || t.value === void 0 || (b({
        anchorName: t.value,
        options: { event: !1 }
      }), p = !1);
    }), d(g);
    function m(O, B) {
      const T = zo(O) ? O.name.value : O;
      T === t.value || T === void 0 || (t.value = T, (B == null ? void 0 : B.event) !== !1 && C(e.onChange, T));
    }
    function k() {
      const { top: O } = an(f), { top: B } = an(o.value);
      return Fo(f) - O + B;
    }
    function w() {
      const O = Fo(f), B = f === window ? document.body.scrollHeight : f.scrollHeight, T = k();
      c.forEach((E, M) => {
        const R = E.getOffsetTop(), W = O - R + l.value - T, U = M === c.length - 1 ? B : c[M + 1].getOffsetTop() - E.getOffsetTop();
        E.setDisabled(!0), W >= 0 && W < U && n.value === "" && (E.setDisabled(!1), m(E));
      });
    }
    function b(O) {
      return xc(this, arguments, function* ({ anchorName: B, manualCall: T = !1, options: E }) {
        if (T && C(e.onClick, B), B === t.value && !p)
          return;
        const M = c.find(({ name: Y }) => B === Y.value);
        if (!M)
          return;
        const R = k(), U = M.getOffsetTop() - l.value + R, F = ps(f);
        n.value = B, m(B, E), yield Dr(f, {
          left: F,
          top: U,
          animation: Jf,
          duration: H(e.duration)
        }), yield kn(), n.value = "";
      });
    }
    function y() {
      f = To(o.value), f.addEventListener("scroll", w);
    }
    function P() {
      f && f.removeEventListener("scroll", w);
    }
    function z(O, B) {
      Br(() => b({ anchorName: O, options: B }));
    }
    return {
      barEl: o,
      active: t,
      zIndex: s,
      anchorNameList: r,
      n: m6,
      classes: h6,
      toNumber: H,
      scrollTo: z,
      anchorClick: b
    };
  }
});
Gp.render = b6;
var qa = Gp;
re(qa);
le(qa, Xp);
const U5 = qa;
var Bl = qa;
const Zp = {
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
}, { name: y6, n: k6, classes: $6 } = _("link");
function w6(e, n) {
  return h(), Ce(mr(e.tag), He(e.linkProps, {
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
const Jp = x({
  name: y6,
  props: Zp,
  setup(e) {
    const n = $(!1), o = I(() => {
      const { disabled: a, href: i, to: l } = e;
      return a ? "span" : i ? "a" : l ? "router-link" : "a";
    }), r = I(() => {
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
      inMobile: Pt,
      n: k6,
      classes: $6,
      handleClick: t,
      toSizeUnit: ze
    };
  }
});
Jp.render = w6;
var Xa = Jp;
re(Xa);
le(Xa, Zp);
const Y5 = Xa;
var Dl = Xa;
const Qp = {
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
}, xp = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function C6() {
  const { bindChildren: e, childProviders: n, length: o } = gn(
    xp
  );
  return {
    length: o,
    tabItemList: n,
    bindTabItem: e
  };
}
const _p = Symbol("TAB_ITEM_BIND_LIST_KEY");
function S6() {
  const { parentProvider: e, bindParent: n, index: o } = hn(
    xp
  );
  return n || An("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: o,
    tabsItems: e,
    bindTabsItems: n
  };
}
function P6() {
  const { childProviders: e, bindChildren: n, length: o } = gn(_p);
  return {
    length: o,
    lists: e,
    bindLists: n
  };
}
function z6() {
  const { parentProvider: e, bindParent: n, index: o } = hn(_p);
  return {
    index: o,
    tabItem: e,
    bindTabItem: n
  };
}
var O6 = (e, n, o) => new Promise((r, t) => {
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
const { name: T6, n: E6, classes: I6 } = _("list");
function B6(e, n) {
  const o = Q("var-loading"), r = Ye("ripple");
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [
      A(e.$slots, "default"),
      e.loading ? A(e.$slots, "loading", { key: 0 }, () => {
        var t;
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
                ie((t = e.loadingText) != null ? t : (e.pt ? e.pt : e.t)("listLoadingText")),
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
        var t;
        return [
          N(
            "div",
            {
              class: v(e.n("finished"))
            },
            ie((t = e.finishedText) != null ? t : (e.pt ? e.pt : e.t)("listFinishedText")),
            3
            /* TEXT, CLASS */
          )
        ];
      }) : q("v-if", !0),
      e.error ? A(e.$slots, "error", { key: 2 }, () => {
        var t;
        return [
          Ae((h(), S(
            "div",
            {
              class: v(e.n("error")),
              onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
            },
            [
              Be(
                ie((t = e.errorText) != null ? t : (e.pt ? e.pt : e.t)("listErrorText")),
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
const em = x({
  name: T6,
  directives: { Ripple: nn },
  components: { VarLoading: cr },
  props: Qp,
  setup(e) {
    const n = $(null), o = $(null), { tabItem: r, bindTabItem: t } = z6(), { t: a } = ao();
    let i;
    C(t, {}), r && de(() => r.current.value, c), de(() => [e.loading, e.error, e.finished], c), mn(() => {
      i = To(n.value), i.addEventListener("scroll", c), e.immediateCheck && c();
    }), Jr(u);
    function l() {
      C(e["onUpdate:error"], !1), C(e["onUpdate:loading"], !0), C(e.onLoad);
    }
    function s() {
      const { bottom: d } = an(i), { bottom: f } = an(o.value);
      return Math.floor(f) - _e(e.offset) <= d;
    }
    function u() {
      i && i.removeEventListener("scroll", c);
    }
    function c() {
      return O6(this, null, function* () {
        yield Ue(), !(e.loading || e.finished || e.error || (r == null ? void 0 : r.current.value) === !1 || !s()) && l();
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
      n: E6,
      classes: I6
    };
  }
});
em.render = B6;
var Ga = em;
re(Ga);
le(Ga, Qp);
const j5 = Ga;
var Ml = Ga;
const D6 = {
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
  name: M6,
  classes: N6,
  n: _c
} = _("loading-bar");
var A6 = x({
  name: M6,
  props: D6,
  setup(e) {
    return () => G("div", {
      class: N6(_c(), [e.error, _c("--error")]),
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
const qs = 200;
let nm, om, rm, tm, Za, ed, am = {};
const V6 = {
  value: 0,
  opacity: 0,
  error: !1
}, tn = xe(V6);
function R6(e) {
  Object.assign(tn, e), am = e;
}
const L6 = () => {
  Object.keys(am).forEach((e) => {
    tn[e] !== void 0 && (tn[e] = void 0);
  });
}, im = () => {
  ed || (ed = !0, gr(A6, tn));
}, Xs = () => {
  nm = window.setTimeout(() => {
    tn.transitionDuration = void 0, !(tn.value >= 95) && (tn.value += tn.value < 70 ? Math.round(5 * Math.random()) : Math.random(), Xs());
  }, 200);
}, Gs = () => {
  window.clearTimeout(nm), window.clearTimeout(Za), window.clearTimeout(rm), window.clearTimeout(om), window.clearTimeout(tm);
}, lm = () => {
  Gs(), tn.value = 100, Za = window.setTimeout(() => {
    tn.opacity = 0, tm = window.setTimeout(() => {
      tn.error = !1;
    }, 250);
  }, qs + 100);
}, F6 = () => {
  Gs(), tn.error = !1, tn.value = 0, tn.transitionDuration = 0, im(), Za = window.setTimeout(() => {
    tn.opacity = 1;
  }, qs), Xs();
}, H6 = () => {
  var e;
  rm = window.setTimeout(lm, (e = tn.finishDelay) != null ? e : 0);
}, U6 = () => {
  Gs(), tn.error = !0, tn.value === 100 && (tn.value = 0, tn.transitionDuration = 0), im(), Za = window.setTimeout(() => {
    tn.opacity = 1;
  }, qs), Xs(), om = window.setTimeout(lm, 300);
}, sm = {
  start: F6,
  finish: H6,
  error: U6,
  setDefaultOptions: R6,
  resetDefaultOptions: L6
}, W5 = sm;
var Nl = sm;
const um = {
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
var Y6 = Object.defineProperty, j6 = Object.defineProperties, W6 = Object.getOwnPropertyDescriptors, nd = Object.getOwnPropertySymbols, K6 = Object.prototype.hasOwnProperty, q6 = Object.prototype.propertyIsEnumerable, od = (e, n, o) => n in e ? Y6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, X6 = (e, n) => {
  for (var o in n || (n = {}))
    K6.call(n, o) && od(e, o, n[o]);
  if (nd)
    for (var o of nd(n))
      q6.call(n, o) && od(e, o, n[o]);
  return e;
}, G6 = (e, n) => j6(e, W6(n));
const { name: Z6, n: J6 } = _("locale-provider"), Q6 = x({
  name: Z6,
  props: um,
  setup(e, { slots: n }) {
    const o = I(
      () => {
        var t;
        return Object.entries((t = e.messages) != null ? t : {}).reduce((a, [i, l]) => (a[i] = G6(X6({}, l), {
          lang: i
        }), a), {});
      }
    );
    wb({
      t: r
    });
    function r(t) {
      if (Ir(o.value, e.locale) && Ir(o.value[e.locale], t))
        return o.value[e.locale][t];
    }
    return () => Xr(
      e.tag,
      {
        class: J6()
      },
      C(n.default)
    );
  }
});
var Ja = Q6;
re(Ja);
le(Ja, um);
const K5 = Ja;
var Al = Ja;
const cm = Symbol("SELECT_BIND_OPTION_KEY");
function x6() {
  const { length: e, childProviders: n, bindChildren: o } = gn(cm);
  return {
    length: e,
    options: n,
    bindOptions: o
  };
}
function _6() {
  const { index: e, parentProvider: n, bindParent: o } = hn(cm);
  return o || An("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: o
  };
}
const dm = {
  label: {},
  value: {},
  disabled: Boolean,
  // internal
  option: Object
}, { name: e2, n: n2, classes: o2 } = _("option"), r2 = ["tabindex"];
function t2(e, n) {
  const o = Q("var-checkbox"), r = Q("maybe-v-node"), t = Q("var-hover-overlay"), a = Ye("ripple"), i = Ye("hover");
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
          G(r, { is: e.labelVNode }, null, 8, ["is"])
        ],
        2
        /* CLASS */
      )
    ]),
    G(t, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 46, r2)), [
    [a, { disabled: e.disabled }],
    [i, e.handleHovering, "desktop"]
  ]);
}
const fm = x({
  name: e2,
  directives: { Ripple: nn, Hover: En },
  components: {
    VarCheckbox: lr,
    VarHoverOverlay: Vn,
    MaybeVNode: Qr
  },
  props: dm,
  setup(e) {
    const n = $(), o = $(!1), r = $(!1), t = I(() => r.value), a = I(
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
    ), i = I(() => e.value), { select: l, bindSelect: s } = _6(), { multiple: u, focusColor: c, onSelect: d, computeLabel: f } = l, { hovering: p, handleHovering: g } = xn(), m = {
      label: a,
      value: i,
      selected: t,
      sync: P
    };
    de([() => e.label, () => e.value], f), s(m), je(() => window, "keydown", w), je(() => window, "keyup", b);
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
    function P(z) {
      r.value = z;
    }
    return {
      root: n,
      optionSelected: r,
      multiple: u,
      focusColor: c,
      hovering: p,
      isFocusing: o,
      labelVNode: a,
      n: n2,
      classes: o2,
      handleHovering: g,
      handleClick: k,
      handleSelect: y
    };
  }
});
fm.render = t2;
var Qa = fm;
re(Qa);
le(Qa, dm);
const q5 = Qa;
var Ht = Qa;
const vm = {
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
  name: a2,
  n: rd
} = _("overlay");
var xa = x({
  name: a2,
  inheritAttrs: !1,
  props: vm,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const {
      zIndex: r
    } = _r(() => e.show, 1), {
      onStackTop: t
    } = ks(() => e.show, r), {
      disabled: a
    } = qo();
    xr(() => e.show, () => e.lockScroll), je(() => window, "keydown", i);
    function i(c) {
      !t() || c.key !== "Escape" || !e.show || (C(e.onKeyEscape), e.closeOnKeyEscape && (Ve(c), C(e["onUpdate:show"], !1)));
    }
    function l() {
      C(e.onClick), C(e["onUpdate:show"], !1);
    }
    function s() {
      return G("div", He({
        class: rd(),
        style: {
          zIndex: r.value
        }
      }, o, {
        onClick: l
      }), [C(n.default)]);
    }
    function u() {
      return G(Qe, {
        name: rd("--fade")
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
re(xa);
le(xa, vm);
const X5 = xa;
var Vl = xa;
const pm = {
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
}, { name: i2, n: l2, classes: s2 } = _("pagination"), u2 = ["item-mode", "onClick"];
function c2(e, n) {
  const o = Q("var-icon"), r = Q("var-input"), t = Q("var-menu-option"), a = Q("var-menu-select"), i = Ye("ripple");
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
          G(r, {
            "var-pagination-cover": "",
            hint: !1,
            disabled: e.disabled,
            modelValue: e.simpleCurrentValue,
            "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
            onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
            onKeydown: n[3] || (n[3] = xs((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
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
        ], 10, u2)), [
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
                Ke(e.sizeOption, (l, s) => (h(), Ce(t, {
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
          G(r, {
            modelValue: e.quickJumperValue,
            "onUpdate:modelValue": n[6] || (n[6] = (l) => e.quickJumperValue = l),
            disabled: e.disabled,
            hint: !1,
            "var-pagination-cover": "",
            onBlur: n[7] || (n[7] = (l) => e.setPage("quick", e.quickJumperValue, l)),
            onKeydown: n[8] || (n[8] = xs((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
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
const mm = x({
  name: i2,
  components: {
    VarMenuSelect: Lr,
    VarMenuOption: sr,
    VarIcon: Ze,
    VarInput: Nr
  },
  directives: { Ripple: nn },
  props: pm,
  setup(e) {
    const n = $(""), o = $("1"), r = $(!1), t = $(!1), a = $(H(e.current) || 1), i = $(H(e.size) || 10), l = $([]), s = I(() => Math.ceil(e.maxPagerCount / 2)), u = I(() => Math.ceil(H(e.total) / H(i.value))), c = I(() => {
      const y = i.value * (a.value - 1) + 1, P = Math.min(i.value * a.value, H(e.total));
      return [y, P];
    }), d = I(() => e.showTotal ? e.showTotal(H(e.total), c.value) : ""), { t: f } = ao();
    de([() => e.current, () => e.size], ([y, P]) => {
      a.value = H(y) || 1, i.value = H(P || 10);
    }), de(
      [a, i, u],
      ([y, P, z], [O, B]) => {
        let T = [];
        const { maxPagerCount: E, total: M, onChange: R } = e, W = Math.ceil(H(M) / H(B)), U = z - (E - s.value) - 1;
        if (o.value = `${y}`, z - 2 > E) {
          if (O === void 0 || z !== W)
            for (let F = 2; F < E + 2; F++) T.push(F);
          if (y <= E && y < U) {
            T = [];
            for (let F = 1; F < E + 1; F++)
              T.push(F + 1);
            r.value = !0, t.value = !1;
          }
          if (y > E && y < U) {
            T = [];
            for (let F = 1; F < E + 1; F++)
              T.push(y + F - s.value);
            r.value = y === 2 && E === 1, t.value = !1;
          }
          if (y >= U) {
            T = [];
            for (let F = 1; F < E + 1; F++)
              T.push(z - (E - F) - 1);
            r.value = !1, t.value = !0;
          }
          T = [1, "...", ...T, "...", z];
        } else
          for (let F = 1; F <= z; F++) T.push(F);
        l.value = T, O != null && z > 0 && C(R, y, P), C(e["onUpdate:current"], y), C(e["onUpdate:size"], P);
      },
      {
        immediate: !0
      }
    );
    function p(y, P) {
      return Tn(y) ? !1 : P === 1 ? r.value : t.value;
    }
    function g(y, P) {
      return Tn(y) ? "basic" : P === 1 ? "head" : "tail";
    }
    function m(y, P) {
      if (!(y === a.value || e.disabled)) {
        if (y === "...") {
          a.value = P === 1 ? Math.max(a.value - e.maxPagerCount, 1) : Math.min(a.value + e.maxPagerCount, u.value);
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
    function b(y, P, z) {
      z.target.blur();
      const O = w(H(P));
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
      n: l2,
      classes: s2,
      getMode: g,
      isHideEllipsis: p,
      clickItem: m,
      clickSize: k,
      setPage: b,
      toNumber: H,
      formatElevation: un
    };
  }
});
mm.render = c2;
var _a = mm;
re(_a);
le(_a, pm);
const G5 = _a;
var Rl = _a;
const hm = {
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
}, { name: d2, n: f2, classes: v2 } = _("paper");
function p2(e, n) {
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
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
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
const gm = x({
  name: d2,
  directives: { Ripple: nn },
  props: hm,
  setup(e) {
    function n(o) {
      C(e.onClick, o);
    }
    return {
      n: f2,
      classes: v2,
      formatElevation: un,
      toSizeUnit: ze,
      handleClick: n
    };
  }
});
gm.render = p2;
var ei = gm;
re(ei);
le(ei, hm);
const Z5 = ei;
var Ll = ei, m2 = Object.defineProperty, td = Object.getOwnPropertySymbols, h2 = Object.prototype.hasOwnProperty, g2 = Object.prototype.propertyIsEnumerable, ad = (e, n, o) => n in e ? m2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, b2 = (e, n) => {
  for (var o in n || (n = {}))
    h2.call(n, o) && ad(e, o, n[o]);
  if (td)
    for (var o of td(n))
      g2.call(n, o) && ad(e, o, n[o]);
  return e;
};
const bm = b2({
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
])), { name: y2, n: k2, classes: $2 } = _("picker"), id = 300, w2 = 15, ld = 200, C2 = 1e3;
let sd = 0;
const S2 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], P2 = ["onTransitionend"], z2 = ["onClick"];
function O2(e, n) {
  const o = Q("var-button");
  return h(), Ce(
    mr(e.dynamic ? e.n("$-popup") : e.Transition),
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
                      var r;
                      return [
                        Be(
                          ie((r = e.cancelButtonText) != null ? r : (e.pt ? e.pt : e.t)("pickerCancelButtonText")),
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
                  var r;
                  return [
                    N(
                      "div",
                      {
                        class: v(e.n("title"))
                      },
                      ie((r = e.title) != null ? r : (e.pt ? e.pt : e.t)("pickerTitle")),
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
                      var r;
                      return [
                        Be(
                          ie((r = e.confirmButtonText) != null ? r : (e.pt ? e.pt : e.t)("pickerConfirmButtonText")),
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
                  Ke(e.scrollColumns, (r) => (h(), S("div", {
                    class: v(e.n("column")),
                    key: r.id,
                    onTouchstartPassive: (t) => e.handleTouchstart(t, r),
                    onTouchmove: Wn((t) => e.handleTouchmove(t, r), ["prevent"]),
                    onTouchend: (t) => e.handleTouchend(r)
                  }, [
                    N("div", {
                      class: v(e.n("scroller")),
                      ref_for: !0,
                      ref: (t) => e.setScrollEl(t, r),
                      style: X({
                        transform: `translateY(${r.translate}px)`,
                        transitionDuration: `${r.duration}ms`,
                        transitionProperty: r.duration ? "transform" : "none"
                      }),
                      onTransitionend: (t) => e.handleTransitionend(r)
                    }, [
                      (h(!0), S(
                        Ne,
                        null,
                        Ke(r.column, (t, a) => (h(), S("div", {
                          key: e.getValue(t),
                          class: v(e.classes(e.n("option"), t.className)),
                          style: X({ height: `${e.optionHeight}px` }),
                          onClick: (i) => e.handleClick(r, a)
                        }, [
                          N(
                            "div",
                            {
                              class: v(e.classes(e.n("text"), t.textClassName))
                            },
                            ie(t[e.getOptionKey("text")]),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 14, z2))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, P2)
                  ], 42, S2))),
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
const ym = x({
  name: y2,
  components: {
    VarButton: zn,
    VarPopup: Oo
  },
  inheritAttrs: !1,
  props: bm,
  setup(e) {
    const n = Kn(e, "modelValue"), o = $([]), r = I(() => H(e.columnsCount)), t = I(() => _e(e.optionHeight)), a = I(() => _e(e.optionCount)), i = I(() => a.value * t.value / 2 - t.value / 2), l = I(() => a.value * t.value), { prevY: s, moveY: u, dragging: c, startTouch: d, moveTouch: f, endTouch: p } = hr(), { t: g } = ao();
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
    function b(D) {
      m = [...D];
    }
    function y(D) {
      return (e.columnsCount != null ? D.slice(0, r.value) : D).map((fe, Se) => {
        const Fe = {
          id: sd++,
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
        return Fe.index = on === -1 ? 0 : on, F(Fe), Fe;
      });
    }
    function P(D) {
      const K = [];
      return z(K, D), K;
    }
    function z(D, K, fe = !0, Se = 1) {
      var Fe;
      if (K.length && (e.columnsCount == null || Se <= r.value)) {
        const Me = {
          id: sd++,
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
        F(Me), z(
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
      o.value = e.cascade ? P(e.columns) : y(e.columns);
      const { indexes: D } = U();
      b(D);
    }
    function T(D, K) {
      K.scrollEl = D;
    }
    function E(D) {
      C(e["onUpdate:show"], D);
    }
    function M(D) {
      const K = i.value - D.column.length * t.value, fe = t.value + i.value;
      D.translate = Mn(D.translate, K, fe);
    }
    function R(D, K) {
      const fe = Math.round((i.value - K) / t.value);
      return og(fe, D.column);
    }
    function W(D) {
      return D.translate = i.value - D.index * t.value, D.translate;
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
    function F(D, K = 0) {
      W(D), D.duration = K;
    }
    function Y(D, K, fe) {
      D.translate += Math.abs(K / fe) / 3e-3 * (K < 0 ? -1 : 1);
    }
    function j(D, K) {
      c.value || (D.index = K, F(D, ld));
    }
    function ae(D, K) {
      K.touching = !0, K.translate = Oi(K.scrollEl), d(D);
    }
    function ee(D, K) {
      if (!K.touching)
        return;
      f(D), K.scrolling = !1, K.duration = 0, K.prevY = s.value, K.translate += u.value, M(K);
      const fe = performance.now();
      fe - K.momentumTime > id && (K.momentumTime = fe, K.momentumPrevY = K.translate);
    }
    function pe(D) {
      p(), D.touching = !1, D.prevY = 0;
      const K = D.translate - D.momentumPrevY, fe = performance.now() - D.momentumTime, Se = Math.abs(K) >= w2 && fe <= id, Fe = D.translate;
      Se && Y(D, K, fe), D.index = R(D, D.translate), F(D, Se ? C2 : ld), D.scrolling = D.translate !== Fe, D.scrolling || L(D);
    }
    function ye(D) {
      D.scrolling = !1, L(D);
    }
    function Ee() {
      const { indexes: D } = U();
      return D.every((K, fe) => K === m[fe]);
    }
    function L(D) {
      const { onChange: K, cascade: fe } = e;
      if (Ee())
        return;
      fe && O(D);
      const Se = o.value.some((wn) => wn.scrolling), Fe = o.value.some((wn) => wn.touching);
      if (Se || Fe)
        return;
      const { values: Me, indexes: on, options: ln } = U();
      b(on), C(K, Me, on, ln), n.value = Me;
    }
    function Z() {
      if (e.cascade) {
        const D = o.value.find((K) => K.scrolling);
        D && (D.index = R(D, Oi(D.scrollEl)), D.scrolling = !1, F(D), O(D));
      } else
        o.value.forEach((D) => {
          D.index = R(D, Oi(D.scrollEl)), F(D);
        });
    }
    function oe() {
      Z();
      const { values: D, indexes: K, options: fe } = U();
      b(K), C(e.onConfirm, D, K, fe);
    }
    function me() {
      Z();
      const { values: D, indexes: K, options: fe } = U();
      b(K), C(e.onCancel, D, K, fe);
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
      n: k2,
      classes: $2,
      setScrollEl: T,
      getOptionKey: k,
      getValue: w,
      handlePopupUpdateShow: E,
      handleTouchstart: ae,
      handleTouchmove: ee,
      handleTouchend: pe,
      handleTransitionend: ye,
      confirm: oe,
      cancel: me,
      handleClick: j
    };
  }
});
ym.render = O2;
var tt = ym;
let or;
function kr(e) {
  return new Promise((n) => {
    kr.close();
    const o = Xe(e) ? { columns: e } : e, r = xe(o);
    r.dynamic = !0, r.teleport = "body", or = r;
    function t() {
      or === r && (or = null);
    }
    const { unmountInstance: a } = gr(tt, r, {
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
  or = null, Ue().then(() => {
    e.show = !1;
  });
};
kr.Component = tt;
re(tt);
re(tt, kr);
le(kr, bm);
const J5 = tt;
var Fl = kr;
const km = {
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
}, Zo = 100, gt = 0, io = 20, ud = 2 * Math.PI * io, { name: T2, n: E2, classes: I2 } = _("progress"), B2 = ["aria-valuenow"], D2 = ["viewBox"], M2 = { key: 0 }, N2 = ["id"], A2 = ["offset", "stop-color"], V2 = ["d", "stroke-width", "stroke-dasharray"], R2 = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function L2(e, n) {
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
          e.isPlainObject(e.color) ? (h(), S("defs", M2, [
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
                Ke(e.linearGradientProgress, (o, r) => (h(), S("stop", {
                  key: r,
                  offset: o,
                  "stop-color": e.color[o]
                }, null, 8, A2))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, N2)
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
          }, null, 14, V2)) : q("v-if", !0),
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
          }, null, 14, R2)
        ], 10, D2)),
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
  ], 10, B2);
}
const $m = x({
  name: T2,
  props: km,
  setup(e) {
    const n = Yd(), o = I(() => {
      const i = H(e.value), l = Mn(i, gt, Zo), s = Mn(Math.round(i), gt, Zo);
      return {
        width: `${l}%`,
        roundValue: `${s}%`,
        value: l
      };
    }), r = I(() => {
      const { size: i, lineWidth: l, value: s } = e, u = io / (1 - _e(l) / _e(i)) * 2, c = `0 0 ${u} ${u}`, d = Mn(Math.round(H(s)), gt, Zo), f = `${(Zo - d) / Zo * ud}`, p = _e(l) / _e(i) * u, g = 0, m = -io, k = 0, w = -2 * io, b = `M ${u / 2} ${u / 2} m ${g} ${m} a ${io} ${io} 
        0 1 1 ${k} ${-w} a ${io} ${io} 0 1 1 ${-k} ${w}`;
      return {
        strokeWidth: p,
        viewBox: c,
        strokeOffset: f,
        roundValue: `${d}%`,
        path: b,
        value: Mn(H(s), gt, Zo)
      };
    }), t = I(() => zo(e.color) ? `url(#${n.value})` : e.color), a = I(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: o,
      CIRCUMFERENCE: ud,
      RADIUS: io,
      circleProps: r,
      progressColor: t,
      linearGradientProgress: a,
      n: E2,
      classes: I2,
      toSizeUnit: ze,
      isPlainObject: zo
    };
  }
});
$m.render = L2;
var ni = $m;
re(ni);
le(ni, km);
const Q5 = ni;
var Hl = ni;
const wm = {
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
var cd = (e, n, o) => new Promise((r, t) => {
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
const { name: F2, n: dd, classes: H2 } = _("pull-refresh"), fd = 150;
function U2(e, n) {
  const o = Q("var-icon");
  return h(), S(
    "div",
    {
      ref: "freshNode",
      class: v(e.n()),
      onTouchstart: n[0] || (n[0] = (...r) => e.handleTouchstart && e.handleTouchstart(...r)),
      onTouchend: n[1] || (n[1] = (...r) => e.handleTouchend && e.handleTouchend(...r)),
      onTouchcancel: n[2] || (n[2] = (...r) => e.handleTouchend && e.handleTouchend(...r))
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
const Cm = x({
  name: F2,
  components: { VarIcon: Ze },
  props: wm,
  setup(e) {
    const n = $(0), o = $(null), r = $(null), t = $(0), a = $("-125%"), i = $("arrow-down"), l = $("default"), s = $(!1), u = I(() => Math.abs(2 * n.value)), c = I(() => l.value === "success"), d = I(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = I(() => ({
      transform: `translate3d(0px, ${yn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: c.value ? e.successBgColor : e.bgColor,
      color: c.value ? e.successColor : e.color
    })), { startTouch: p, moveTouch: g, endTouch: m, isReachTop: k } = hr();
    let w, b;
    de(
      () => e.modelValue,
      (M) => {
        M === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, E();
        }, H(e.successDuration)));
      }
    ), mn(T), je(o, "touchmove", O);
    function y(M) {
      return cd(this, null, function* () {
        if (i.value !== M)
          return i.value = M, new Promise((R) => {
            window.setTimeout(R, fd);
          });
      });
    }
    function P(M) {
      ("classList" in w ? w : document.body).classList[M](`${dd()}--lock`);
    }
    function z(M) {
      if (p(M), n.value === 0) {
        const { width: R } = an(r.value);
        n.value = -(R + R * 0.25);
      }
      b = To(M.target);
    }
    function O(M) {
      if (g(M), !d.value || !b || b !== w && Fo(b) > 0 || Fo(w) > 0)
        return;
      k(w) && Ve(M), l.value !== "pulling" && (l.value = "pulling", t.value = M.touches[0].clientY), k(w) && Tn(a.value) && a.value > n.value && P("add");
      const W = (M.touches[0].clientY - t.value) / 2 + n.value;
      a.value = W >= u.value ? u.value : W, y(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function B() {
      return cd(this, null, function* () {
        m(), d.value && (s.value = !0, H(a.value) >= u.value * 0.2 ? (yield y("refresh"), l.value = "loading", a.value = u.value * 0.3, C(e["onUpdate:modelValue"], !0), Ue(() => {
          C(e.onRefresh);
        }), P("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, P("remove");
        }, H(e.animationDuration))), b = null);
      });
    }
    function T() {
      w = e.target ? Qd(e.target, "PullRefresh") : To(o.value);
    }
    function E() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, H(e.animationDuration));
    }
    return {
      ICON_TRANSITION: fd,
      refreshStatus: l,
      freshNode: o,
      controlNode: r,
      iconName: i,
      controlStyle: f,
      isSuccess: c,
      n: dd,
      classes: H2,
      handleTouchstart: z,
      handleTouchmove: O,
      handleTouchend: B
    };
  }
});
Cm.render = U2;
var oi = Cm;
re(oi);
le(oi, wm);
const x5 = oi;
var Ul = oi;
const Sm = {
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
}, Pm = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function Y2() {
  const { bindChildren: e, childProviders: n, length: o } = gn(
    Pm
  );
  return {
    length: o,
    radios: n,
    bindRadios: e
  };
}
function j2() {
  const { bindParent: e, parentProvider: n, index: o } = hn(Pm);
  return {
    index: o,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: W2, n: K2, classes: q2 } = _("radio"), X2 = ["tabindex"];
function G2(e, n) {
  const o = Q("var-icon"), r = Q("var-hover-overlay"), t = Q("var-form-details"), a = Ye("ripple"), i = Ye("hover");
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
            G(r, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ], 46, X2)), [
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
      G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const zm = x({
  name: W2,
  directives: { Ripple: nn, Hover: En },
  components: {
    VarIcon: Ze,
    VarFormDetails: Pn,
    VarHoverOverlay: Vn
  },
  inheritAttrs: !1,
  props: Sm,
  setup(e) {
    const n = $(), o = $(!1), r = Kn(e, "modelValue"), t = I(() => r.value === e.checkedValue), a = $(!1), { radioGroup: i, bindRadioGroup: l } = j2(), { hovering: s, handleHovering: u } = xn(), { form: c, bindForm: d } = Fn(), {
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
      Ue(() => {
        const { validateTrigger: W, rules: U, modelValue: F } = e;
        p(W, R, U, F);
      });
    }
    function P(R) {
      const { checkedValue: W, onChange: U } = e;
      i && r.value === W || (r.value = R, C(U, r.value), i == null || i.onToggle(W), y("onChange"));
    }
    function z(R) {
      const { disabled: W, readonly: U, uncheckedValue: F, checkedValue: Y, onClick: j } = e;
      c != null && c.disabled.value || W || (C(j, R), !(c != null && c.readonly.value || U) && (a.value = !0, P(t.value ? F : Y)));
    }
    function O() {
      n.value.focus();
    }
    function B(R) {
      const { checkedValue: W, uncheckedValue: U } = e;
      r.value = R === W ? W : U;
    }
    function T() {
      r.value = e.uncheckedValue, m();
    }
    function E() {
      return g(e.rules, e.modelValue);
    }
    function M(R) {
      const { uncheckedValue: W, checkedValue: U } = e;
      ![W, U].includes(R) && (R = t.value ? W : U), P(R);
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
      n: K2,
      classes: q2,
      handleClick: z,
      handleTextClick: O,
      toggle: M,
      reset: T,
      validate: E,
      resetValidation: m
    };
  }
});
zm.render = G2;
var ri = zm;
re(ri);
le(ri, Sm);
const _5 = ri;
var Ut = ri;
const Om = {
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
}, { name: Z2, n: J2, classes: Q2 } = _("radio-group");
function x2(e, n) {
  const o = Q("maybe-v-node"), r = Q("var-radio"), t = Q("var-form-details");
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
            Ke(e.options, (a) => (h(), Ce(r, {
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
      G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Tm = x({
  name: Z2,
  components: { VarFormDetails: Pn, VarRadio: Ut, MaybeVNode: Qr },
  props: Om,
  setup(e) {
    const { length: n, radios: o, bindRadios: r } = Y2(), { bindForm: t } = Fn(), {
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
    de(() => e.modelValue, g), de(() => n.value, g), C(t, c), r(c), je(() => window, "keydown", d);
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
        const P = o[b];
        if (P.moveable()) {
          P.move();
          break;
        }
      }
    }
    function p(b) {
      Ue(() => {
        const { validateTrigger: y, rules: P, modelValue: z } = e;
        i(y, b, P, z);
      });
    }
    function g() {
      return o.forEach(({ sync: b }) => b(e.modelValue));
    }
    function m(b) {
      C(e["onUpdate:modelValue"], b), C(e.onChange, b), p("onChange");
    }
    function k() {
      return l(e.rules, e.modelValue);
    }
    function w() {
      C(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: J2,
      classes: Q2,
      reset: w,
      validate: k,
      resetValidation: s,
      isFunction: Rn
    };
  }
});
Tm.render = x2;
var ti = Tm;
re(ti);
le(ti, Om);
const eE = ti;
var Yl = ti;
const Em = {
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
}, { name: _2, n: Cr } = _("rate"), e4 = ["onClick"];
function n4(e, n) {
  const o = Q("var-icon"), r = Q("var-hover-overlay"), t = Q("var-form-details"), a = Ye("ripple"), i = Ye("hover");
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
              G(r, {
                hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
              }, null, 8, ["hovering"])
            ], 14, e4)), [
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
      G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Im = x({
  name: _2,
  components: {
    VarIcon: Ze,
    VarFormDetails: Pn,
    VarHoverOverlay: Vn
  },
  directives: { Ripple: nn, Hover: En },
  props: Em,
  setup(e) {
    const n = $(-1), { form: o, bindForm: r } = Fn(), { errorMessage: t, validateWithTrigger: a, validate: i, resetValidation: l } = Ln(), { hovering: s } = xn();
    let u = H(e.modelValue);
    C(r, {
      reset: y,
      validate: m,
      resetValidation: l
    });
    function d(P) {
      const { count: z, gap: O } = e;
      return {
        color: p(P).color,
        marginRight: P !== H(z) ? ze(O) : 0
      };
    }
    function f(P) {
      const { name: z, color: O } = p(P);
      return {
        [Cr("content")]: !0,
        [Cr("--disabled")]: (o == null ? void 0 : o.disabled.value) || e.disabled,
        [Cr("--error")]: t.value,
        [Cr("--primary")]: z !== e.emptyIcon && !O
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
        namespace: F,
        halfIconNamespace: Y,
        emptyIconNamespace: j
      } = e;
      let ae = T;
      return (O || o != null && o.disabled.value) && (ae = B), P <= z ? { color: ae, name: R, namespace: F } : E && P <= z + 0.5 ? { color: ae, name: W, namespace: Y } : {
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
    function b(P) {
      return (z) => {
        n.value = P, s.value = z;
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
      getCurrentState: p,
      handleClick: w,
      createHoverHandler: b,
      reset: y,
      validate: m,
      resetValidation: l,
      toSizeUnit: ze,
      toNumber: H,
      n: Cr
    };
  }
});
Im.render = n4;
var ai = Im;
re(ai);
le(ai, Em);
const nE = ai;
var jl = ai;
const o4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
};
function r4(e, n) {
  return h(), S("svg", o4, n[0] || (n[0] = [
    N(
      "path",
      { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Bm = x({});
Bm.render = r4;
var t4 = Bm;
const a4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
};
function i4(e, n) {
  return h(), S("svg", a4, n[0] || (n[0] = [
    N(
      "path",
      { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Dm = x({});
Dm.render = i4;
var l4 = Dm;
const s4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
};
function u4(e, n) {
  return h(), S("svg", s4, n[0] || (n[0] = [
    N(
      "path",
      { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Mm = x({});
Mm.render = u4;
var c4 = Mm;
const { n: d4, classes: f4 } = _("result");
function v4(e, n) {
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
const Nm = x({
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
      n: d4,
      classes: f4
    };
  }
});
Nm.render = v4;
var p4 = Nm;
const m4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
};
function h4(e, n) {
  return h(), S("svg", m4, n[0] || (n[0] = [
    N(
      "path",
      { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
const Am = x({});
Am.render = h4;
var g4 = Am;
const b4 = { viewBox: "-4 -4 32 32" };
function y4(e, n) {
  return h(), S("svg", b4, n[0] || (n[0] = [
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
const Vm = x({});
Vm.render = y4;
var k4 = Vm;
const Rm = {
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
}, { name: $4, n: w4, classes: C4 } = _("result");
function S4(e, n) {
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
const Lm = x({
  name: $4,
  components: {
    Info: t4,
    Success: p4,
    Warning: c4,
    Error: l4,
    Question: g4,
    Empty: k4
  },
  props: Rm,
  setup(e) {
    const n = I(
      () => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.9)`
    ), o = I(
      () => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.05)`
    );
    return {
      circleSize: n,
      borderSize: o,
      n: w4,
      classes: C4
    };
  }
});
Lm.render = S4;
var ii = Lm;
re(ii);
le(ii, Rm);
const oE = ii;
var Wl = ii;
const Fm = {
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
}, { name: P4, n: z4, classes: O4 } = _("row");
function T4(e, n) {
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
const Hm = x({
  name: P4,
  props: Fm,
  setup(e) {
    const n = I(
      () => Xe(e.gutter) ? e.gutter.map((t) => _e(t) / 2) : [0, _e(e.gutter) / 2]
    ), { bindCols: o } = m$();
    o({ average: n });
    function r(t) {
      C(e.onClick, t);
    }
    return {
      average: n,
      n: z4,
      classes: O4,
      handleClick: r,
      padStartFlex: Et
    };
  }
});
Hm.render = T4;
var li = Hm;
re(li);
le(li, Fm);
const rE = li;
var Kl = li, E4 = Object.defineProperty, vd = Object.getOwnPropertySymbols, I4 = Object.prototype.hasOwnProperty, B4 = Object.prototype.propertyIsEnumerable, pd = (e, n, o) => n in e ? E4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, D4 = (e, n) => {
  for (var o in n || (n = {}))
    I4.call(n, o) && pd(e, o, n[o]);
  if (vd)
    for (var o of vd(n))
      B4.call(n, o) && pd(e, o, n[o]);
  return e;
};
const Um = D4({
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
])), { name: M4, n: N4, classes: A4 } = _("select"), V4 = ["tabindex"];
function R4(e, n) {
  const o = Q("maybe-v-node"), r = Q("var-chip"), t = Q("var-icon"), a = Q("var-field-decorator"), i = Q("var-option"), l = Q("var-menu"), s = Q("var-form-details");
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
          wo(Zr({
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
                                  Ke(e.labels, (u) => (h(), Ce(r, {
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
                    G(t, {
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
  ], 42, V4);
}
const Ym = x({
  name: M4,
  components: {
    VarIcon: Ze,
    VarMenu: Rr,
    VarChip: Dt,
    VarOption: Ht,
    VarFieldDecorator: Mr,
    VarFormDetails: Pn,
    MaybeVNode: Qr
  },
  props: Um,
  setup(e) {
    const n = $(!1), o = $(!1), r = $(null), t = I(() => e.multiple), a = I(() => e.focusColor), i = I(() => Zn(e.modelValue)), l = I(() => e.disabled || e.readonly ? "" : "pointer"), s = $(0), { bindForm: u, form: c } = Fn(), { length: d, options: f, bindOptions: p } = x6(), { label: g, labels: m, computeLabel: k, getSelectedValue: w } = qf({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => f,
      optionProvidersLength: () => d.value
    }), {
      errorMessage: b,
      validateWithTrigger: y,
      validate: P,
      // expose
      resetValidation: z
    } = Ln(), O = $(null), B = I(() => e.variant === "outlined" ? "bottom" : "cover-top"), T = I(() => {
      const { hint: D, blurColor: K, focusColor: fe } = e;
      if (!D)
        return b.value ? "var(--field-decorator-error-color)" : n.value ? fe || "var(--field-decorator-focus-color)" : K || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), E = I(() => !e.hint && Zn(e.modelValue)), M = {
      multiple: t,
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
        D && !Xe(K) && An("Select", "The modelValue must be an array when multiple is true");
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
        r.value.focus(), Ve(D), o.value = !1;
        return;
      }
      if (Se === "Tab" && o.value) {
        r.value.focus(), Ve(D), Y();
        return;
      }
      if (Se === "Enter" && !o.value) {
        Ve(D), o.value = !0;
        return;
      }
      (Se === "ArrowDown" || Se === "ArrowUp") && o.value && (Ve(D), _d(r.value, O.value, Se));
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
        y(K, D, fe, Se);
      });
    }
    function F() {
      const { disabled: D, readonly: K, onFocus: fe } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || D || K || (s.value = _e(e.offsetY), L(), C(fe), U("onFocus"));
    }
    function Y() {
      const { disabled: D, readonly: K, onBlur: fe } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || D || K || (Z(), C(fe), U("onBlur"));
    }
    function j() {
      o.value || Y();
    }
    function ae() {
      n.value && Y();
    }
    function ee(D) {
      const { disabled: K, readonly: fe, multiple: Se, onChange: Fe } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || K || fe)
        return;
      const Me = w(D);
      C(e["onUpdate:modelValue"], Me), C(Fe, Me), U("onChange"), Se || (r.value.focus(), kn().then(() => {
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
    function L() {
      s.value = _e(e.offsetY), n.value = !0;
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
      placement: B,
      cursor: l,
      placeholderColor: T,
      enableCustomPlaceholder: E,
      isFunction: Rn,
      n: N4,
      classes: A4,
      handleFocus: F,
      handleBlur: Y,
      handleClickOutside: ae,
      handleClear: pe,
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
Ym.render = R4;
var si = Ym;
re(si);
le(si, Um);
const tE = si;
var ql = si;
const jm = {
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
}, { name: L4, n: F4, classes: H4 } = _("skeleton");
function U4(e, n) {
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
                    Ke(e.toNumber(e.rows), (o, r) => (h(), S(
                      "div",
                      {
                        class: v(e.n("row")),
                        key: o,
                        style: X({ width: e.toSizeUnit(e.rowsWidth[r]) })
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
const Wm = x({
  name: L4,
  props: jm,
  setup: () => ({
    n: F4,
    classes: H4,
    toSizeUnit: ze,
    toNumber: H
  })
});
Wm.render = U4;
var ui = Wm;
re(ui);
le(ui, jm);
const aE = ui;
var Xl = ui, sn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(sn || {});
const Km = {
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
}, { name: Y4, n: md, classes: j4 } = _("slider"), W4 = ["tabindex", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-disabled", "aria-valuetext", "onTouchstart", "onFocusin", "onFocusout"];
function K4(e, n) {
  const o = Q("var-hover-overlay"), r = Q("var-form-details"), t = Ye("hover");
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
                  [t, (i) => e.hover(i, a), "desktop"]
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
            ], 46, W4))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      G(r, {
        "error-message": e.errorMessage,
        class: v(e.n("form")),
        "var-slider-cover": ""
      }, null, 8, ["error-message", "class"])
    ],
    2
    /* CLASS */
  );
}
const qm = x({
  name: Y4,
  components: {
    VarFormDetails: Pn,
    VarHoverOverlay: Vn
  },
  directives: { Hover: En },
  props: Km,
  setup(e) {
    const n = $(0), o = $(null), r = $(!1), t = I(() => H(e.max) - H(e.min)), a = I(() => n.value / t.value * H(e.step)), i = I(() => e.disabled || (f == null ? void 0 : f.disabled.value)), l = I(() => e.readonly || (f == null ? void 0 : f.readonly.value)), s = I(() => e.direction === "vertical"), u = $(!1), c = $(!1), { bindForm: d, form: f } = Fn(), { errorMessage: p, validateWithTrigger: g, validate: m, resetValidation: k } = Ln(), { hovering: w, handleHovering: b } = xn(), { hovering: y, handleHovering: P } = xn(), z = I(() => {
      const { modelValue: ne, range: ue } = e;
      let ke = [];
      return ue && Xe(ne) ? ke = [
        {
          value: ae(ne[0]),
          enumValue: sn.First,
          text: ee(ne[0]),
          hovering: w.value,
          focusing: u.value,
          handleHovering: b,
          handleFocusing(Ie) {
            u.value = Ie;
          }
        },
        {
          value: ae(ne[1]),
          enumValue: sn.Second,
          text: ee(ne[1]),
          hovering: y.value,
          focusing: c.value,
          handleHovering: P,
          handleFocusing(Ie) {
            c.value = Ie;
          }
        }
      ] : Tn(ne) && (ke = [
        {
          value: ae(ne),
          enumValue: sn.First,
          text: ee(ne),
          hovering: w.value,
          focusing: u.value,
          handleHovering: b,
          handleFocusing(Ie) {
            u.value = Ie;
          }
        }
      ]), ke;
    }), O = I(() => {
      const { activeColor: ne, range: ue, modelValue: ke } = e, Ie = ue && Xe(ke) ? ae(Math.min(ke[0], ke[1])) : 0, Je = ue && Xe(ke) ? ae(Math.max(ke[0], ke[1])) - Ie : ae(ke);
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
    }), B = xe({
      [sn.First]: W(),
      [sn.Second]: W()
    });
    let T;
    C(d, {
      reset: on,
      validate: R,
      resetValidation: k
    }), de([() => e.modelValue, () => e.step], ([ne, ue]) => {
      !Se() || !Fe() || r.value || Me(ne, H(ue));
    }), de(n, () => Me()), mn(() => {
      !Se() || !Fe() || M();
    }), Yt(oe), je(() => window, "keydown", wn), to(M);
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
    function F(ne) {
      const ue = ne.currentTarget;
      return ue ? s.value ? n.value - (ne.clientY - an(ue).top) : ne.clientX - Hg(ue) : 0;
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
    function ae(ne) {
      const { min: ue, max: ke } = e;
      return ne < H(ue) ? 0 : ne > H(ke) ? 100 : (ne - H(ue)) / t.value * 100;
    }
    function ee(ne) {
      if (!Tn(ne))
        return 0;
      const ue = Mn(ne, H(e.min), H(e.max));
      return parseInt(`${ue}`, 10) === ue ? ue : H(ue.toPrecision(5));
    }
    function pe(ne, ue) {
      i.value || ue.handleHovering(ne);
    }
    function ye(ne) {
      C(e.onChange, ne), C(e["onUpdate:modelValue"], ne), U();
    }
    function Ee(ne, ue) {
      let ke = [];
      const { step: Ie, range: Je, modelValue: te, min: $e } = e, Oe = H(Ie), Re = Math.round(ne / a.value), Le = Re * Oe + H($e), cn = B[ue].percentValue * Oe + H($e);
      if (B[ue].percentValue = Re, Je && Xe(te) && (ke = ue === sn.First ? [Le, te[1]] : [te[0], Le]), cn !== Le) {
        const vn = Je ? ke.map((pn) => ee(pn)) : ee(Le);
        ye(vn);
      }
    }
    function L(ne) {
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
      C(e.onStart), r.value = !0;
      const { clientX: ke, clientY: Ie } = ne.touches[0];
      B[ue].startPosition = s.value ? Ie : ke;
    }
    function D(ne) {
      if (Ve(ne), i.value || l.value || !r.value)
        return;
      const { startPosition: ue, currentOffset: ke } = B[T], { clientX: Ie, clientY: Je } = ne.touches[0];
      let te = (s.value ? ue - Je : Ie - ue) + ke;
      te <= 0 ? te = 0 : te >= n.value && (te = n.value), Ee(te, T);
    }
    function K() {
      oe();
      const { range: ne, modelValue: ue, onEnd: ke, step: Ie, min: Je } = e;
      if (i.value || (B[T].active = !1), i.value || l.value)
        return;
      let te = [];
      B[T].currentOffset = B[T].percentValue * a.value;
      const $e = B[T].percentValue * H(Ie) + H(Je);
      ne && Xe(ue) && (te = T === sn.First ? [$e, ue[1]] : [ue[0], $e]), C(ke, ne ? te : $e), r.value = !1;
    }
    function fe(ne) {
      if (i.value || l.value || ne.target.closest(`.${md("thumb")}`))
        return;
      const ue = F(ne), ke = L(ue);
      T = ke, Ee(ue, ke), K();
    }
    function Se() {
      return H(e.step) <= 0 ? (Fg("[Varlet] Slider", '"step" should be > 0'), !1) : !0;
    }
    function Fe() {
      const { range: ne, modelValue: ue } = e;
      return ne && !Xe(ue) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !ne && Xe(ue) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : ne && Xe(ue) && ue.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }
    function Me(ne = e.modelValue, ue = H(e.step)) {
      const ke = (Ie) => {
        const { min: Je, max: te } = e;
        return Ie < H(Je) ? 0 : Ie > H(te) ? t.value / ue : (Ie - H(Je)) / ue;
      };
      e.range && Xe(ne) ? (B[sn.First].percentValue = ke(ne[0]), B[sn.First].currentOffset = B[sn.First].percentValue * a.value, B[sn.Second].percentValue = ke(ne[1]), B[sn.Second].currentOffset = B[sn.Second].percentValue * a.value) : Tn(ne) && (B[sn.First].currentOffset = ke(ne) * a.value);
    }
    function on() {
      const ne = e.range ? [0, 0] : 0;
      C(e["onUpdate:modelValue"], ne), k();
    }
    function ln(ne, ue) {
      const ke = H(e.step);
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
      if (!Ir(ue, ke) || l.value || i.value || e.range && !u.value && !c.value || !e.range && !u.value)
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
      n: md,
      classes: j4,
      thumbStyle: Y,
      hover: pe,
      toSizeUnit: ze,
      toNumber: H,
      showLabel: j,
      start: me,
      move: D,
      end: K,
      handleClick: fe
    };
  }
});
qm.render = K4;
var ci = qm;
re(ci);
le(ci, Km);
const iE = ci;
var Gl = ci, q4 = Object.defineProperty, X4 = Object.defineProperties, G4 = Object.getOwnPropertyDescriptors, hd = Object.getOwnPropertySymbols, Z4 = Object.prototype.hasOwnProperty, J4 = Object.prototype.propertyIsEnumerable, gd = (e, n, o) => n in e ? q4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Q4 = (e, n) => {
  for (var o in n || (n = {}))
    Z4.call(n, o) && gd(e, o, n[o]);
  if (hd)
    for (var o of hd(n))
      J4.call(n, o) && gd(e, o, n[o]);
  return e;
}, x4 = (e, n) => X4(e, G4(n));
const Zs = {
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
  loadingColor: x4(Q4({}, De(lo, "color")), {
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
}, { n: _4, classes: eP } = _("snackbar"), nP = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function oP(e, n) {
  const o = Q("var-icon"), r = Q("var-loading");
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
              e.type === "loading" ? (h(), Ce(r, {
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
const Xm = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: cr,
    VarIcon: Ze
  },
  props: Zs,
  setup(e) {
    const n = $(null), { zIndex: o } = _r(() => e.show, 1);
    xr(
      () => e.show,
      () => e.lockScroll
    );
    const r = I(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), t = I(() => e.type ? nP[e.type] : "");
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
    ), mn(() => {
      e.show && (C(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: Jm,
      zIndex: o,
      iconName: t,
      isForbidClick: r,
      n: _4,
      classes: eP,
      formatElevation: un
    };
  }
});
Xm.render = oP;
var Gm = Xm;
const { name: rP, n: tP } = _("snackbar");
function aP(e, n) {
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
        }), rr({
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
const Zm = x({
  name: rP,
  components: { VarSnackbarCore: Gm },
  props: Zs,
  setup() {
    const { disabled: e } = qo();
    return {
      disabled: e,
      n: tP
    };
  }
});
Zm.render = aP;
var di = Zm, iP = Object.defineProperty, bd = Object.getOwnPropertySymbols, lP = Object.prototype.hasOwnProperty, sP = Object.prototype.propertyIsEnumerable, yd = (e, n, o) => n in e ? iP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Wr = (e, n) => {
  for (var o in n || (n = {}))
    lP.call(n, o) && yd(e, o, n[o]);
  if (bd)
    for (var o of bd(n))
      sP.call(n, o) && yd(e, o, n[o]);
  return e;
};
const Jm = ["loading", "success", "warning", "info", "error"];
let kd = 0, Zl = !1, Qm, Kr = !1;
const xm = {
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
let jn = xe([]), Js = xm;
const uP = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Ai = (e) => () => Rn(e) ? e() : e, cP = {
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
        }, hP(o.position)), {
          content: i,
          icon: l,
          action: s
        } = o, u = {
          default: Ai(i),
          icon: Ai(l),
          action: Ai(s)
        };
        return G(Gm, He(o, {
          key: n,
          style: a,
          "data-id": n,
          _update: r,
          show: o.show,
          "onUpdate:show": (c) => o.show = c
        }), u);
      });
      return G(Fh, He(uP, {
        style: {
          zIndex: Nn.zIndex
        },
        onAfterEnter: dP,
        onAfterLeave: fP
      }), {
        default: () => [e]
      });
    };
  }
}, no = function(e) {
  const n = pP(e), o = xe(Wr(Wr({}, Js), n));
  o.show = !0, Zl || (Zl = !0, Qm = gr(cP).unmountInstance);
  const {
    length: r
  } = jn, t = {
    id: kd++,
    reactiveSnackOptions: o
  };
  if (r === 0 || Kr)
    vP(t);
  else {
    const a = `update-${kd}`;
    mP(o, a);
  }
  return {
    clear() {
      !Kr && jn.length ? jn[0].reactiveSnackOptions.show = !1 : o.show = !1;
    }
  };
};
Jm.forEach((e) => {
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
  Js = e;
};
no.resetDefaultOptions = function() {
  Js = xm;
};
function dP(e) {
  const n = e.getAttribute("data-id"), o = jn.find((r) => r.id === H(n));
  o && C(o.reactiveSnackOptions.onOpened);
}
function fP(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), o = jn.find((t) => t.id === H(n));
  o && (o.animationEnd = !0, C(o.reactiveSnackOptions.onClosed)), jn.every((t) => t.animationEnd) && (C(Qm), jn = xe([]), Zl = !1);
}
function vP(e) {
  jn.push(e);
}
function pP(e = {}) {
  return yn(e) ? {
    content: e
  } : e;
}
function mP(e, n) {
  const [o] = jn;
  o.reactiveSnackOptions = Wr(Wr({}, o.reactiveSnackOptions), e), o._update = n;
}
function hP(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
no.Component = di;
re(di);
re(di, no);
le(no, Zs);
const lE = di;
var Jl = no;
const _m = {
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
function gP(e, n, o) {
  const { direction: r, justify: t, index: a, lastIndex: i } = o;
  let l = "0";
  return r === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? a !== i ? l = `${Dn(e)} ${n} ${Dn(e)} 0` : l = `${Dn(e)} 0` : t === "space-around" ? l = `${Dn(e)} ${Dn(n)}` : t === "space-between" && (a === 0 ? l = `${Dn(e)} ${Dn(n)} ${Dn(e)} 0` : a === i ? l = `${Dn(e)} 0 ${Dn(e)} ${Dn(n)}` : l = `${Dn(e)} ${Dn(n)}`)), r === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const bP = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: yP,
  n: bt,
  classes: $d
} = _("space");
function kP(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Xe(e) ? e.map(ze) : [ze(e), ze(e)];
}
var fi = x({
  name: yP,
  props: _m,
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
      } = e, u = (o = C(n.default)) != null ? o : [], [c, d] = kP(s, bP(s)), f = jd(u), p = f.length - 1, g = f.map((m, k) => {
        var w;
        const b = gP(c, d, {
          direction: l,
          justify: t,
          index: k,
          lastIndex: p
        });
        return G("div", {
          class: $d([l === "column", bt("--auto")]),
          key: (w = m.key) != null ? w : void 0,
          style: {
            margin: b
          }
        }, [m]);
      });
      return G("div", {
        class: $d(bt(), bt("$--box"), [r, bt("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: Et(t),
          alignItems: Et(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${c} / 2) 0` : void 0
        }
      }, [g]);
    };
  }
});
re(fi);
le(fi, _m);
const sE = fi;
var Ql = fi;
const eh = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: De(en, "name"),
  inactiveIcon: De(en, "name"),
  activeIconNamespace: De(en, "namespace"),
  currentIconNamespace: De(en, "namespace"),
  inactiveIconNamespace: De(en, "namespace")
}, nh = Symbol("STEPS_BIND_STEP_KEY");
function $P() {
  const { bindChildren: e, childProviders: n } = gn(nh);
  return {
    step: n,
    bindStep: e
  };
}
function wP() {
  const { parentProvider: e, index: n, bindParent: o } = hn(nh);
  return o || An("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: o
  };
}
const { name: CP, n: SP, classes: PP } = _("step"), zP = { key: 3 };
function OP(e, n) {
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
              onClick: n[0] || (n[0] = (...r) => e.click && e.click(...r))
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
                zP,
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
              onClick: n[1] || (n[1] = (...r) => e.click && e.click(...r))
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
const oh = x({
  name: CP,
  components: { VarIcon: Ze },
  props: eh,
  setup() {
    const { index: e, steps: n, bindSteps: o } = wP(), { active: r, activeColor: t, inactiveColor: a, direction: i, clickStep: l } = n, s = I(() => r.value === e.value), u = I(() => e.value !== -1 && H(r.value) > e.value);
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
      n: SP,
      classes: PP,
      click: d
    };
  }
});
oh.render = OP;
var vi = oh;
re(vi);
le(vi, eh);
const uE = vi;
var xl = vi;
const rh = {
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
}, { name: TP, n: EP } = _("steps");
function IP(e, n) {
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
const th = x({
  name: TP,
  props: rh,
  setup(e) {
    const n = I(() => e.active), o = I(() => e.activeColor), r = I(() => e.inactiveColor), t = I(() => e.direction), { bindStep: a } = $P();
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
    return { n: EP };
  }
});
th.render = IP;
var pi = th;
re(pi);
le(pi, rh);
const cE = pi;
var _l = pi;
const ah = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: BP, n: DP } = _("style-provider"), MP = x({
  name: BP,
  props: ah,
  setup(e, { slots: n }) {
    return () => Xr(
      e.tag,
      {
        class: DP(),
        style: xd(e.styleVars)
      },
      C(n.default)
    );
  }
});
var mi = MP;
const ih = "varlet-style-vars";
function wd() {
  const e = document.head.querySelector(`#${ih}`);
  e && document.head.removeChild(e);
}
function NP(e) {
  const n = document.createElement("style");
  n.id = ih, n.innerHTML = e, document.head.appendChild(n);
}
function hi(e) {
  if (e == null) {
    wd();
    return;
  }
  const n = xd(e ?? {}), o = Object.entries(n).reduce((r, [t, a]) => (r += `${t}:${a};`, r), `:root:root {
`);
  wd(), NP(`${o}
}`);
}
hi.Component = mi;
re(mi);
re(mi, hi);
le(hi, ah);
const dE = mi;
var es = hi;
const lh = {
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
}, { name: AP, n: VP, classes: RP } = _("switch"), LP = ["aria-checked"], FP = ["tabindex"];
function HP(e, n) {
  const o = Q("var-hover-overlay"), r = Q("var-form-details"), t = Ye("ripple"), a = Ye("hover");
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
        ], 46, FP)), [
          [t, {
            disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly
          }]
        ])
      ],
      6
      /* CLASS, STYLE */
    ),
    G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
  ], 10, LP)), [
    [a, e.hover, "desktop"]
  ]);
}
const sh = x({
  name: AP,
  components: {
    VarFormDetails: Pn,
    VarHoverOverlay: Vn
  },
  directives: { Ripple: nn, Hover: En },
  props: lh,
  setup(e) {
    const n = $(null), o = $(!1), { bindForm: r, form: t } = Fn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Ln(), { hovering: u, handleHovering: c } = xn(), d = I(() => e.modelValue === e.activeValue), f = I(() => {
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
      Ue(() => {
        const { validateTrigger: B, rules: T, modelValue: E } = e;
        i(B, O, T, E);
      });
    }
    function y(O) {
      const {
        onClick: B,
        onChange: T,
        disabled: E,
        loading: M,
        readonly: R,
        activeValue: W,
        inactiveValue: U,
        lazyChange: F,
        "onUpdate:modelValue": Y,
        onBeforeChange: j
      } = e;
      if (E || t != null && t.disabled.value || (C(B, O), M || R || t != null && t.readonly.value))
        return;
      const ae = d.value ? U : W;
      F ? C(j, ae, (ee) => {
        C(Y, ee), b("onLazyChange");
      }) : (C(T, ae), C(Y, ae), b("onChange"));
    }
    function P(O) {
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
      radius: p,
      styleComputed: f,
      errorMessage: a,
      formDisabled: t == null ? void 0 : t.disabled,
      formReadonly: t == null ? void 0 : t.readonly,
      n: VP,
      classes: RP,
      formatElevation: un,
      multiplySizeUnit: Cn,
      switchActive: y,
      hover: P
    };
  }
});
sh.render = HP;
var gi = sh;
re(gi);
le(gi, lh);
const fE = gi;
var ns = gi;
const uh = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: V()
}, ch = Symbol("TABS_BIND_TAB_KEY");
function UP() {
  const { childProviders: e, bindChildren: n, length: o } = gn(ch);
  return {
    length: o,
    tabList: e,
    bindTabList: n
  };
}
function YP() {
  const { parentProvider: e, bindParent: n, index: o } = hn(ch);
  return n || An("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: o,
    tabs: e,
    bindTabs: n
  };
}
const { name: jP, n: yt, classes: WP } = _("tab");
function KP(e, n) {
  const o = Ye("ripple");
  return Ae((h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
      ref: "tabEl",
      style: X({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
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
const dh = x({
  name: jP,
  directives: { Ripple: nn },
  props: uh,
  setup(e) {
    const n = $(null), o = I(() => n.value), r = I(() => e.name), t = I(() => e.disabled), { index: a, tabs: i, bindTabs: l } = YP(), { onTabClick: s, active: u, activeColor: c, inactiveColor: d, disabledColor: f, itemDirection: p, resize: g } = i, m = {
      name: r,
      index: a,
      disabled: t,
      element: o
    };
    l(m), de(() => [e.name, e.disabled], g);
    function k() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function w() {
      return e.disabled ? f.value : k() ? c.value : d.value;
    }
    function b() {
      return e.disabled ? yt("$-tab--disabled") : k() ? yt("$-tab--active") : yt("$-tab--inactive");
    }
    function y(P) {
      const { disabled: z, name: O, onClick: B } = e;
      z || (C(B, O ?? a.value, P), s(m));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: c,
      inactiveColor: d,
      itemDirection: p,
      n: yt,
      classes: WP,
      computeColorStyle: w,
      computeColorClass: b,
      handleClick: y
    };
  }
});
dh.render = KP;
var bi = dh;
re(bi);
le(bi, uh);
const vE = bi;
var os = bi;
const fh = {
  name: [String, Number]
}, { name: qP, n: XP, classes: GP } = _("tab-item");
function ZP(e, n) {
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
const vh = x({
  name: qP,
  components: { VarSwipeItem: Yr },
  props: fh,
  setup(e) {
    const n = $(!1), o = I(() => e.name), { index: r, bindTabsItems: t } = S6(), { bindLists: a } = P6(), i = {
      index: r,
      name: o,
      current: I(() => n.value),
      setCurrent: l
    };
    t(i), a(i);
    function l(s) {
      n.value = s;
    }
    return {
      current: n,
      n: XP,
      classes: GP
    };
  }
});
vh.render = ZP;
var yi = vh;
re(yi);
le(yi, fh);
const pE = yi;
var rs = yi;
const ph = {
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
}, { name: JP, n: QP, classes: xP } = _("table");
function _P(e, n) {
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
const mh = x({
  name: JP,
  props: ph,
  setup: () => ({
    toSizeUnit: ze,
    n: QP,
    classes: xP,
    formatElevation: un
  })
});
mh.render = _P;
var ki = mh;
re(ki);
le(ki, ph);
const mE = ki;
var ts = ki;
const hh = {
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
  onClick: V(),
  onChange: V(),
  "onUpdate:active": V()
};
var Cd = (e, n, o) => new Promise((r, t) => {
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
const { name: ez, n: nz, classes: oz } = _("tabs");
function rz(e, n) {
  return h(), Ce(mr(e.sticky ? e.n("$-sticky") : e.Transition), {
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
const gh = x({
  name: ez,
  components: { VarSticky: vr },
  inheritAttrs: !1,
  props: hh,
  setup(e) {
    const n = $("0px"), o = $("0px"), r = $("0px"), t = $("0px"), a = $(!1), i = $(null), l = I(() => e.active), s = I(() => e.activeColor), u = I(() => e.inactiveColor), c = I(() => e.disabledColor), d = I(() => e.itemDirection), f = $(null), p = I(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: g, bindTabList: m, length: k } = UP();
    m({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: c,
      itemDirection: d,
      resize: E,
      onTabClick: b
    }), de(
      () => k.value,
      () => Cd(this, null, function* () {
        yield kn(), E();
      })
    ), de(() => [e.active, e.scrollable], E), Bo(E), to(E);
    function b(R) {
      var W;
      const U = (W = R.name.value) != null ? W : R.index.value, { active: F, onChange: Y, onClick: j } = e;
      C(e["onUpdate:active"], U), C(j, U), U !== F && C(Y, U);
    }
    function y() {
      return g.find(({ name: R }) => e.active === R.value);
    }
    function P(R) {
      return g.find(({ index: W }) => (R ?? e.active) === W.value);
    }
    function z() {
      if (k.value === 0)
        return;
      const { active: R } = e;
      if (Tn(R)) {
        const W = Mn(R, 0, k.value - 1);
        return C(e["onUpdate:active"], W), P(W);
      }
    }
    function O() {
      a.value = e.scrollable === "always" || g.length >= 5;
    }
    function B({ element: R }) {
      const W = R.value;
      W && (e.layoutDirection === "horizontal" ? (n.value = `${W.offsetWidth}px`, r.value = `${W.offsetLeft}px`) : (o.value = `${W.offsetHeight}px`, t.value = `${W.offsetTop}px`));
    }
    function T({ element: R }) {
      if (!a.value)
        return;
      const W = i.value, U = R.value;
      if (e.layoutDirection === "horizontal") {
        const F = U.offsetLeft + U.offsetWidth / 2 - W.offsetWidth / 2;
        Dr(W, {
          left: F,
          animation: Ki
        });
      } else {
        const F = U.offsetTop + U.offsetHeight / 2 - W.offsetHeight / 2;
        Dr(W, {
          top: F,
          animation: Ki
        });
      }
    }
    function E() {
      const R = y() || P() || z();
      !R || R.disabled.value || (O(), B(R), T(R));
    }
    function M() {
      return Cd(this, null, function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
    }
    return {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: o,
      indicatorX: r,
      indicatorY: t,
      indicatorPosition: p,
      localScrollable: a,
      scrollerEl: i,
      Transition: Qe,
      toSizeUnit: ze,
      n: nz,
      classes: oz,
      resize: E,
      resizeSticky: M,
      formatElevation: un
    };
  }
});
gh.render = rz;
var $i = gh;
re($i);
le($i, hh);
const hE = $i;
var as = $i;
const bh = {
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
var tz = (e, n, o) => new Promise((r, t) => {
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
const { name: az, n: iz } = _("tabs-items");
function lz(e, n) {
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
const yh = x({
  name: az,
  components: { VarSwipe: Ur },
  props: bh,
  setup(e) {
    const n = $(null), { tabItemList: o, bindTabItem: r, length: t } = C6();
    r({}), de(() => e.active, s), de(
      () => t.value,
      () => tz(this, null, function* () {
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
      n: iz,
      handleSwipeChange: u,
      getSwipe: c
    };
  }
});
yh.render = lz;
var wi = yh;
re(wi);
le(wi, bh);
const gE = wi;
var is = wi, sz = {
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
}, uz = {
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
}, cz = {
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
}, dz = {
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
}, fz = {
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
}, vz = {
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
}, pz = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, mz = {
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
}, hz = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, gz = {
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
}, bz = {
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
}, yz = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, kz = {
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
}, $z = {
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
}, wz = {
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
}, Cz = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, Sz = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, Pz = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, zz = {
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
}, Oz = {
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
}, Tz = {
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
}, Ez = {
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
}, Iz = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, Bz = {
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
}, Dz = {
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
}, Mz = {
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
}, Nz = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, Az = {
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
}, Vz = {
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
}, Rz = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
}, Lz = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, Fz = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, Hz = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, Uz = {
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
}, Yz = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, jz = {
  "--watermark-content-color": "#ffffff"
}, Wz = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, Kz = {
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
}, qz = {
  "--avatar-group-offset": "-10px"
}, Xz = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, Gz = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, Zz = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, Jz = {
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
}, Qz = {
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
}, xz = {
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
}, _z = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, eO = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, nO = {
  "--icon-size": "20px"
}, oO = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, rO = {
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
}, tO = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, aO = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, iO = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, lO = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, sO = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, uO = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "4px"
}, cO = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, dO = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, fO = {
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
}, vO = {
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
}, pO = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, mO = {
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
}, hO = {
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
}, gO = {
  "--select-scroller-background": "#272727",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-scroller-border-radius": "2px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, bO = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, yO = Object.defineProperty, Sd = Object.getOwnPropertySymbols, kO = Object.prototype.hasOwnProperty, $O = Object.prototype.propertyIsEnumerable, Pd = (e, n, o) => n in e ? yO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, he = (e, n) => {
  for (var o in n || (n = {}))
    kO.call(n, o) && Pd(e, o, n[o]);
  if (Sd)
    for (var o of Sd(n))
      $O.call(n, o) && Pd(e, o, n[o]);
  return e;
}, wO = he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he({
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
}, dz), uz), vz), fz), Dz), gz), Oz), Nz), Iz), Cz), bz), sz), mz), cz), Mz), hz), Sz), Ez), Tz), $z), Bz), kz), Pz), pz), yz), wz), Az), Vz), Rz), zz), Lz), Fz), Hz), Uz), Yz), jz), Wz), Kz), qz), Xz), Gz), Zz), Jz), Qz), xz), _z), eO), nO), oO), rO), tO), aO), iO), lO), sO), uO), cO), dO), fO), vO), pO), mO), hO), gO), bO), CO = {
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
}, SO = {
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
}, PO = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, zO = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, OO = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, TO = {
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
}, EO = {
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
}, IO = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, BO = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, DO = {
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
}, MO = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-border-radius": "12px"
}, NO = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, AO = {
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
}, VO = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, RO = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, LO = {
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
}, FO = {
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
}, HO = {
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
}, UO = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, YO = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, jO = {
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
}, WO = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, KO = {
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
}, qO = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, XO = {
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
}, GO = {
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
}, ZO = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, JO = {
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
}, QO = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, xO = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, _O = {
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
}, e3 = {
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
}, n3 = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, o3 = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, r3 = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, t3 = {
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
}, a3 = {
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
}, i3 = {
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
}, l3 = {
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
}, s3 = {
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
}, u3 = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, c3 = {
  "--avatar-group-offset": "-10px"
}, d3 = {
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
}, f3 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, v3 = {
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
}, p3 = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, m3 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, h3 = {
  "--icon-size": "20px"
}, g3 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, b3 = {
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
}, y3 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, k3 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, $3 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, w3 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, C3 = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, S3 = {
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
}, P3 = {
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
}, z3 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, O3 = {
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
}, T3 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, E3 = {
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
}, I3 = {
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
}, B3 = {
  "--watermark-content-color": "#808080"
}, D3 = {
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
}, M3 = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, N3 = Object.defineProperty, zd = Object.getOwnPropertySymbols, A3 = Object.prototype.hasOwnProperty, V3 = Object.prototype.propertyIsEnumerable, Od = (e, n, o) => n in e ? N3(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ge = (e, n) => {
  for (var o in n || (n = {}))
    A3.call(n, o) && Od(e, o, n[o]);
  if (zd)
    for (var o of zd(n))
      V3.call(n, o) && Od(e, o, n[o]);
  return e;
}, R3 = ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge({
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
}, CO), SO), PO), zO), OO), TO), EO), IO), BO), DO), MO), NO), AO), VO), RO), LO), FO), HO), UO), YO), jO), WO), KO), qO), XO), GO), ZO), JO), QO), xO), _O), e3), n3), o3), r3), t3), a3), i3), l3), s3), u3), c3), d3), f3), v3), p3), m3), h3), g3), b3), y3), k3), $3), w3), C3), S3), P3), z3), O3), T3), E3), I3), B3), D3), M3), L3 = {
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
}, F3 = {
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
}, H3 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, U3 = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, Y3 = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, j3 = {
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
}, W3 = {
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
}, K3 = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, q3 = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, X3 = {
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
}, G3 = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "12px"
}, Z3 = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, J3 = {
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
}, Q3 = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, x3 = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, _3 = {
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
}, e8 = {
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
}, n8 = {
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
}, o8 = {
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
}, r8 = {
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
}, t8 = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, a8 = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, i8 = {
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
}, l8 = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, s8 = {
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
}, u8 = {
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
}, c8 = {
  "--watermark-content-color": "#ffffff"
}, d8 = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, f8 = {
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
}, v8 = {
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
}, p8 = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, m8 = {
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
}, h8 = {
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
}, g8 = {
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
}, b8 = {
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
}, y8 = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, k8 = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, $8 = {
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
}, w8 = {
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
}, C8 = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, S8 = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, P8 = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, z8 = {
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
}, O8 = {
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
}, T8 = {
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
}, E8 = {
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
}, I8 = {
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
}, B8 = {
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
}, D8 = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, M8 = {
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
}, N8 = {
  "--avatar-group-offset": "-10px"
}, A8 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, V8 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, R8 = {
  "--icon-size": "20px"
}, L8 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, F8 = {
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
}, H8 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, U8 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, Y8 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, j8 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, W8 = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, K8 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, q8 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, X8 = {
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
}, G8 = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, Z8 = Object.defineProperty, Td = Object.getOwnPropertySymbols, J8 = Object.prototype.hasOwnProperty, Q8 = Object.prototype.propertyIsEnumerable, Ed = (e, n, o) => n in e ? Z8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, be = (e, n) => {
  for (var o in n || (n = {}))
    J8.call(n, o) && Ed(e, o, n[o]);
  if (Td)
    for (var o of Td(n))
      Q8.call(n, o) && Ed(e, o, n[o]);
  return e;
}, x8 = be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be({
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
}, L3), F3), H3), U3), Y3), j3), W3), K3), q3), X3), G3), Z3), J3), Q3), x3), _3), e8), n8), o8), r8), t8), a8), i8), l8), s8), u8), c8), d8), f8), v8), p8), m8), h8), g8), b8), y8), k8), $8), w8), C8), S8), P8), z8), O8), T8), E8), I8), B8), D8), M8), N8), A8), V8), R8), L8), F8), H8), U8), Y8), j8), W8), K8), q8), X8), G8);
function _8(e, n = {}) {
  const { viewportWidth: o = 375, viewportUnit: r = "vmin", unitPrecision: t = 6 } = n;
  return Object.entries(e).reduce((a, [i, l]) => (a[i] = l.includes("px") ? l.replace(
    /(\d+(\.\d+)?)px/g,
    (s, u) => `${Number((u / o * 100).toFixed(t))}${r}`
  ) : l, a), {});
}
const eT = { dark: wO, md3Light: R3, md3Dark: x8, toViewport: _8 }, bE = null;
var ls = eT;
const Un = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Sn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Id = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], kh = {
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
}, $h = (e, n) => e === "24hr" || n === "am", Qs = (e, n, o) => {
  const r = Un.findIndex((a) => H(a) === H(o)), t = $h(e, n) ? o : Sn[r];
  return {
    hourStr: t,
    hourNum: H(t)
  };
}, On = (e) => {
  const [n, o, r] = e.split(":");
  return {
    hour: H(n),
    minute: H(o),
    second: H(r)
  };
}, wh = (e) => {
  var n, o;
  const { time: r, format: t, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: c, hourNum: d } = Qs(t, a, i);
  let f = !1, p = !1;
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
  return (n = e.allowedTime) != null && n.minutes && (p = (o = e.allowedTime) == null ? void 0 : o.minutes(r)), f || p;
}, Ch = (e) => {
  var n, o;
  const { time: r, format: t, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: c } = e, { hourStr: d, hourNum: f } = Qs(t, a, i);
  let p = !1, g = !1;
  if (c.includes(d)) return !0;
  if (s && !u) {
    const { hour: m, minute: k, second: w } = On(s);
    p = m === f && k < l || k === l && r > w;
  }
  if (!s && u) {
    const { hour: m, minute: k, second: w } = On(u);
    p = m === f && k > l || k === l && r > w;
  }
  if (s && u) {
    const { hour: m, minute: k, second: w } = On(s), { hour: b, minute: y, second: P } = On(u);
    p = m === f && k < l || b === f && y > l || m === f && k === l && r > w || b === f && y === l && r < P;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (o = e.allowedTime) == null ? void 0 : o.seconds(r)), p || g;
}, { n: nT, classes: oT } = _("time-picker");
function rT(e, n) {
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
        Ke(e.timeScales, (o, r) => (h(), S(
          "div",
          {
            class: v(
              e.classes(
                e.n("clock-item"),
                [e.isActive(r, !1), e.n("clock-item--active")],
                [e.isDisable(o), e.n("clock-item--disable")]
              )
            ),
            key: o,
            style: X(e.getStyle(r, o, !1))
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
            Ke(e.hours24, (o, r) => (h(), S(
              "div",
              {
                class: v(
                  e.classes(
                    e.n("clock-item"),
                    [e.isActive(r, !0), e.n("clock-item--active")],
                    [e.isDisable(o), e.n("clock-item--disable")]
                  )
                ),
                key: o,
                style: X(e.getStyle(r, o, !0))
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
const Sh = x({
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
    const o = $(null), r = $([]), t = $([]), a = I(() => ({
      transform: `rotate(${H(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = I(() => {
      if (e.rad === void 0) return;
      const m = e.rad / 30;
      return m >= 0 ? m : m + 12;
    }), l = I(() => e.type === "hour" ? Un : Id), s = (m, k) => {
      m = m ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const w = e.type === "minute" ? wh : Ch, b = {
        time: H(m),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: H(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: r.value
      };
      return k && e.type === "minute" && Reflect.deleteProperty(b, "minute"), w(b);
    }, u = () => {
      if (i.value === void 0) return e.color;
      const m = e.isInner ? Sn[i.value] : l.value[i.value];
      return l.value === Id ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : d(m) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, c = (m, k) => k ? i.value === m && e.isInner : i.value === m && (!e.isInner || e.type !== "hour"), d = (m) => {
      if (e.type === "hour") {
        if ($h(e.format, e.ampm)) return r.value.includes(m);
        const k = Un.findIndex((w) => w === m);
        return t.value.includes(k);
      }
      return s(m, !0);
    }, f = (m, k, w) => {
      const b = 2 * Math.PI / 12 * m - Math.PI / 2, y = 50 * (1 + Math.cos(b)), P = 50 * (1 + Math.sin(b)), z = () => c(m, w) ? d(k) ? {
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
        left: `${y}%`,
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
      return Yo(m[i.value], 2, "0");
    };
    return de([i, () => e.isInner], ([m, k], [w, b]) => {
      if (m === w && k === b || e.type !== "hour" || i.value === void 0) return;
      const P = k ? Sn[i.value] : g(), z = e.useSeconds ? `:${e.time.second}` : "", O = `${P}:${e.time.minute}${z}`;
      e.preventNextUpdate || n("update", O), n("change-prevent-update");
    }), de(
      () => e.rad,
      (m, k) => {
        if (e.type === "hour" || m === void 0 || k === void 0) return;
        const w = m / 6 >= 0 ? m / 6 : m / 6 + 60, b = k / 6 >= 0 ? k / 6 : k / 6 + 60;
        if (w === b) return;
        let y;
        const { hourStr: P } = Qs(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const z = se().minute(w).format("mm"), O = e.useSeconds ? `:${e.time.second}` : "";
          y = `${P}:${z}${O}`;
        }
        if (e.type === "second") {
          const z = se().second(w).format("ss"), O = e.useSeconds ? `:${z}` : "";
          y = `${P}:${e.time.minute}${O}`;
        }
        n("update", y);
      }
    ), de(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([m, k, w]) => {
        if (r.value = [], m && !k) {
          const { hour: b } = On(m), y = Un.filter((z) => H(z) > b), P = Sn.filter((z) => H(z) > b);
          r.value = [...y, ...P];
        }
        if (!m && k) {
          const { hour: b } = On(k), y = Un.filter((z) => H(z) < b), P = Sn.filter((z) => H(z) < b);
          r.value = [...y, ...P];
        }
        if (m && k) {
          const { hour: b } = On(m), { hour: y } = On(k), P = Un.filter((O) => H(O) < y || H(O) > b), z = Sn.filter((O) => H(O) < y || H(O) > b);
          r.value = [...P, ...z];
        }
        if (w != null && w.hours) {
          const { hours: b } = w, y = Un.filter((z) => !b(H(z))), P = Sn.filter((z) => !b(H(z)));
          r.value = [.../* @__PURE__ */ new Set([...r.value, ...y, ...P])];
        }
        t.value = r.value.map((b) => Sn.findIndex((y) => b === y)).filter((b) => b >= 0);
      },
      { immediate: !0, deep: !0 }
    ), {
      n: nT,
      classes: oT,
      hours24: Sn,
      timeScales: l,
      inner: o,
      handStyle: a,
      disableHour: r,
      isActive: c,
      isDisable: d,
      getSize: p,
      getStyle: f,
      activeItemIndex: i
    };
  }
});
Sh.render = rT;
var tT = Sh;
const { name: aT, n: iT, classes: lT } = _("time-picker");
function sT(e, n) {
  var o;
  const r = Q("clock");
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
                      onClick: n[0] || (n[0] = (t) => e.checkPanel("hour"))
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
                      onClick: n[1] || (n[1] = (t) => e.checkPanel("minute"))
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
                      onClick: n[2] || (n[2] = (t) => e.checkPanel("second"))
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
                      onClick: n[3] || (n[3] = (t) => e.checkAmpm("am"))
                    },
                    " AM ",
                    2
                    /* CLASS */
                  ),
                  N(
                    "div",
                    {
                      class: v(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
                      onClick: n[4] || (n[4] = (t) => e.checkAmpm("pm"))
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
              onTouchstart: n[5] || (n[5] = (...t) => e.moveHand && e.moveHand(...t)),
              onTouchmove: n[6] || (n[6] = (...t) => e.moveHand && e.moveHand(...t)),
              onTouchend: n[7] || (n[7] = (...t) => e.end && e.end(...t)),
              ref: "container"
            },
            [
              G(Qe, {
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
const Ph = x({
  name: aT,
  components: { Clock: tT },
  props: kh,
  setup(e) {
    const n = $(null), o = $(null), r = $(null), t = $(!1), a = $(!1), i = $(!1), l = $(!1), s = $(!1), u = $(!1), c = $(!1), d = $(0), f = $(0), p = $(), g = $("hour"), m = $("am"), k = $({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = xe({
      x: 0,
      y: 0
    }), b = xe({
      x: [],
      y: []
    }), y = I(() => g.value === "hour" ? p.value : g.value === "minute" ? d.value : f.value), { t: P } = ao();
    de(
      () => e.modelValue,
      (L) => {
        if (L === void 0 || L === "") {
          z();
          return;
        }
        const { hour: Z, minute: oe, second: me } = On(L), D = se().hour(Z).format("hh"), K = se().hour(Z).format("HH"), fe = se().minute(oe).format("mm"), Se = se().second(me).format("ss");
        p.value = (D === "12" ? 0 : H(D)) * 30, d.value = H(fe) * 6, f.value = H(Se) * 6, k.value = W(L), e.format !== "24hr" && (m.value = Yo(`${Z}`, 2, "0") === K && Sn.includes(K) ? "pm" : "am"), t.value = e.format === "24hr" && Sn.includes(K);
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
    function O(L) {
      C(e["onUpdate:modelValue"], L), C(e.onChange, L);
    }
    function B(L) {
      return L * 57.29577951308232;
    }
    function T(L) {
      l.value = !1, c.value = !1, g.value = L;
    }
    function E(L) {
      const { disableHour: Z } = r.value, oe = Un.findIndex((K) => H(K) === H(k.value.hour)), me = L === "am" ? Un : Sn;
      return [...me.slice(oe), ...me.slice(0, oe)].find((K, fe) => (a.value = fe !== 0, !Z.includes(K)));
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
      const Z = e.format === "24hr" ? "HH" : "hh", { hour: oe, minute: me, second: D } = On(L);
      return {
        hour: se().hour(oe).format(Z),
        minute: se().minute(me).format("mm"),
        second: se().second(D).format("ss")
      };
    }
    function U(L) {
      const Z = L / 30;
      return Z >= 0 ? Z : Z + 12;
    }
    function F() {
      const { width: L, height: Z } = r.value.getSize(), oe = w.x - L / 2 - 8, me = w.x + L / 2 + 8, D = w.y - Z / 2 - 8, K = w.y + Z / 2 + 8;
      return {
        rangeXMin: oe,
        rangeXMax: me,
        rangeYMin: D,
        rangeYMax: K
      };
    }
    function Y(L, Z, oe) {
      const { disableHour: me } = r.value;
      i.value = R(L, Z);
      const D = Math.round(oe / 30) * 30 + 90, K = U(D), fe = t.value ? Un[K] : Sn[K];
      if (me.includes(fe) || (t.value = e.format === "24hr" ? R(L, Z) : !1), t.value !== i.value) return;
      const Se = t.value || m.value === "pm" ? Sn[K] : Un[K];
      u.value = me.includes(Se), !u.value && (p.value = D, l.value = !0);
    }
    function j(L) {
      const { disableHour: Z } = r.value, oe = Math.round(L / 6) * 6 + 90, D = {
        time: oe / 6 >= 0 ? oe / 6 : oe / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: k.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      c.value = wh(D), !c.value && (d.value = oe, s.value = !0);
    }
    function ae(L) {
      const { disableHour: Z } = r.value, oe = Math.round(L / 6) * 6 + 90, D = {
        time: oe / 6 >= 0 ? oe / 6 : oe / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: k.value.hour,
        minute: H(k.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      Ch(D) || (f.value = oe);
    }
    function ee() {
      const { left: L, top: Z, width: oe, height: me } = an(n.value);
      if (w.x = L + oe / 2, w.y = Z + me / 2, g.value === "hour" && e.format === "24hr") {
        const { rangeXMin: D, rangeXMax: K, rangeYMin: fe, rangeYMax: Se } = F();
        b.x = [D, K], b.y = [fe, Se];
      }
    }
    function pe(L) {
      if (Ve(L), e.readonly) return;
      ee();
      const { clientX: Z, clientY: oe } = L.touches[0], me = Z - w.x, D = oe - w.y, K = Math.round(B(Math.atan2(D, me)));
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
      n: iT,
      classes: lT,
      t: rn,
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
Ph.render = sT;
var Ci = Ph;
re(Ci);
le(Ci, kh);
const yE = Ci;
var ss = Ci;
const zh = {
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
var kt = (e, n, o) => new Promise((r, t) => {
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
const { name: uT, n: cT, classes: dT } = _("uploader");
let fT = 0;
const vT = ["onClick"], pT = ["onClick"], mT = ["src", "alt"], hT = ["tabindex"], gT = ["multiple", "accept", "capture", "disabled"], bT = ["src"];
function yT(e, n) {
  const o = Q("var-icon"), r = Q("var-hover-overlay"), t = Q("var-form-details"), a = Q("var-popup"), i = Ye("ripple"), l = Ye("hover");
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
              ], 10, pT)) : q("v-if", !0),
              s.cover ? (h(), S("img", {
                key: 1,
                role: "img",
                class: v(e.n("file-cover")),
                style: X({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, mT)) : q("v-if", !0),
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
            ], 10, vT)), [
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
            }, null, 42, gT),
            A(e.$slots, "default", {}, () => [
              G(o, {
                class: v(e.n("action-icon")),
                "var-uploader-cover": "",
                name: "plus"
              }, null, 8, ["class"]),
              G(r, {
                hovering: e.hovering && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly,
                focusing: e.isFocusing && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly
              }, null, 8, ["hovering", "focusing"])
            ])
          ], 42, hT)), [
            [i, {
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default
            }],
            [l, e.handleHovering, "desktop"]
          ]) : q("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      G(t, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, rr({
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
            }, null, 10, bT)) : q("v-if", !0)
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
const Oh = x({
  name: uT,
  directives: { Ripple: nn, Hover: En },
  components: {
    VarIcon: Ze,
    VarPopup: Oo,
    VarFormDetails: Pn,
    VarHoverOverlay: Vn
  },
  props: zh,
  setup(e) {
    const n = $(!1), o = $(null), r = $(null), t = $(!1), a = $(null), i = I(() => {
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
    } = Ln(), { hovering: p, handleHovering: g } = xn(), m = I(() => {
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
    }), je(() => window, "keydown", y), je(() => window, "keyup", P), de(
      () => e.modelValue,
      () => {
        !k && pe("onChange"), k = !1;
      },
      { deep: !0 }
    );
    function y(L) {
      n.value && ((L.key === " " || L.key === "Enter") && L.preventDefault(), L.key === "Enter" && o.value.click());
    }
    function P(L) {
      !n.value || L.key !== " " || (L.preventDefault(), o.value.click());
    }
    function z(L) {
      const { disabled: Z, previewed: oe, preventDefaultPreview: me, onPreview: D } = e;
      if (l != null && l.disabled.value || Z || !oe || (C(D, xe(L)), me))
        return;
      const { url: K } = L;
      if (Ku(K)) {
        jr(K);
        return;
      }
      qu(K) && (a.value = L, t.value = !0);
    }
    function O(L) {
      return {
        id: fT++,
        url: "",
        cover: "",
        name: L.name,
        file: L,
        progress: 0
      };
    }
    function B(L) {
      const Z = L.target, { files: oe } = Z;
      return Array.from(oe);
    }
    function T(L) {
      return kt(this, null, function* () {
        const Z = L.file;
        if (e.resolveType === "default" && Z.type.startsWith("image") || e.resolveType === "data-url") {
          const me = yield ng(Z);
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
          const D = Co(C(Z, xe(oe)));
          Promise.all(D).then((K) => {
            me({
              valid: K.every(Boolean),
              varFile: oe
            });
          });
        })
      );
    }
    function R(L) {
      return kt(this, null, function* () {
        const { maxsize: Z, maxlength: oe, modelValue: me, onOversize: D, onAfterRead: K, onBeforeFilter: fe, readonly: Se, disabled: Fe } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || Fe || Se)
          return;
        const Me = (ke) => ke.filter((Ie) => Ie.file.size > H(Z) ? (C(D, xe(Ie)), !1) : !0), on = (ke) => {
          const Ie = Math.min(ke.length, H(oe) - me.length);
          return ke.slice(0, Ie);
        }, ln = (ke) => kt(this, null, function* () {
          if (!fe)
            return ke;
          const Ie = Co(fe);
          for (const Je of Ie)
            ke = yield Je(ke);
          return ke;
        });
        let ve = B(L).map(O);
        ve = yield ln(ve), ve = Z != null ? Me(ve) : ve, ve = oe != null ? on(ve) : ve;
        const We = yield Promise.all(E(ve)), ue = (yield Promise.all(M(We))).filter(({ valid: ke }) => ke).map(({ varFile: ke }) => ke);
        C(e["onUpdate:modelValue"], [...me, ...ue]), L.target.value = "", ue.forEach((ke) => C(K, xe(ke)));
      });
    }
    function W(L) {
      return kt(this, null, function* () {
        const { disabled: Z, readonly: oe, modelValue: me, onBeforeRemove: D, onRemove: K } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || Z || oe)
          return;
        if (D) {
          const Se = Co(C(D, xe(L)));
          if ((yield Promise.all(Se)).some((Fe) => !Fe))
            return;
        }
        const fe = me.filter((Se) => Se !== L);
        C(K, xe(L)), pe("onRemove"), C(e["onUpdate:modelValue"], fe);
      });
    }
    function U(L) {
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
    function ee() {
      a.value = null, t.value = !1, jr.close();
    }
    function pe(L) {
      Ue(() => {
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
      hovering: p,
      isFocusing: n,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: cT,
      classes: dT,
      formatElevation: un,
      toNumber: H,
      handleHovering: g,
      isHTMLSupportVideo: qu,
      isHTMLSupportImage: Ku,
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
      closePreview: ee,
      handleActionClick: U,
      toSizeUnit: ze
    };
  }
});
Oh.render = yT;
var Si = Oh;
re(Si);
le(Si, zh);
const kE = Si;
var us = Si;
const Th = {
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
var kT = Object.defineProperty, $T = Object.defineProperties, wT = Object.getOwnPropertyDescriptors, Bd = Object.getOwnPropertySymbols, CT = Object.prototype.hasOwnProperty, ST = Object.prototype.propertyIsEnumerable, Dd = (e, n, o) => n in e ? kT(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, PT = (e, n) => {
  for (var o in n || (n = {}))
    CT.call(n, o) && Dd(e, o, n[o]);
  if (Bd)
    for (var o of Bd(n))
      ST.call(n, o) && Dd(e, o, n[o]);
  return e;
}, zT = (e, n) => $T(e, wT(n)), Md = (e, n, o) => new Promise((r, t) => {
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
const { name: OT, n: TT, classes: ET } = _("watermark"), IT = { ref: "svgRef" }, BT = ["viewBox", "width", "height"], DT = ["width", "height"], MT = ["href", "xlink:href", "x", "y", "width", "height"];
function NT(e, n) {
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
              IT,
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
                              style: X(zT(PT({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
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
                  ], 8, DT)) : q("v-if", !0),
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
                  }, null, 12, MT)) : q("v-if", !0)
                ], 12, BT))
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
const Eh = x({
  name: OT,
  props: Th,
  setup(e, { slots: n }) {
    const o = $(""), r = $(""), t = $(""), a = $(null), i = $(null);
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
    ), jo(d), qr(c);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return Md(this, null, function* () {
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
      return Md(this, null, function* () {
        t.value = Ko(i.value).color, e.image && (r.value = yield s()), yield Ue(), c(), o.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: o,
      imageUrl: r,
      textColor: t,
      n: TT,
      classes: ET,
      showContent: l,
      resize: d
    };
  }
});
Eh.render = NT;
var Pi = Eh;
re(Pi);
le(Pi, Th);
const $E = Pi;
var cs = Pi;
const AT = "3.6.1";
function VT(e) {
  Fi.install && e.use(Fi), Hi.install && e.use(Hi), Ui.install && e.use(Ui), Wi.install && e.use(Wi), Xi.install && e.use(Xi), Gi.install && e.use(Gi), Zi.install && e.use(Zi), Bt.install && e.use(Bt), Ji.install && e.use(Ji), Qi.install && e.use(Qi), xi.install && e.use(xi), _i.install && e.use(_i), zn.install && e.use(zn), el.install && e.use(el), nl.install && e.use(nl), ol.install && e.use(ol), lr.install && e.use(lr), rl.install && e.use(rl), Dt.install && e.use(Dt), al.install && e.use(al), il.install && e.use(il), ll.install && e.use(ll), sl.install && e.use(sl), ul.install && e.use(ul), Nn.install && e.use(Nn), vl.install && e.use(vl), yl.install && e.use(yl), $l.install && e.use($l), wl.install && e.use(wl), Cl.install && e.use(Cl), Lt.install && e.use(Lt), Sl.install && e.use(Sl), Pl.install && e.use(Pl), Mr.install && e.use(Mr), zl.install && e.use(zl), Ol.install && e.use(Ol), Pn.install && e.use(Pn), Tl.install && e.use(Tl), En.install && e.use(En), Vn.install && e.use(Vn), Ze.install && e.use(Ze), El.install && e.use(El), jr.install && e.use(jr), Il.install && e.use(Il), Bl.install && e.use(Bl), Nr.install && e.use(Nr), Fr.install && e.use(Fr), Dl.install && e.use(Dl), Ml.install && e.use(Ml), cr.install && e.use(cr), Nl.install && e.use(Nl), Ri.install && e.use(Ri), Al.install && e.use(Al), Rr.install && e.use(Rr), sr.install && e.use(sr), Lr.install && e.use(Lr), Ht.install && e.use(Ht), Vl.install && e.use(Vl), Rl.install && e.use(Rl), Ll.install && e.use(Ll), Fl.install && e.use(Fl), Oo.install && e.use(Oo), Hl.install && e.use(Hl), Ul.install && e.use(Ul), Ut.install && e.use(Ut), Yl.install && e.use(Yl), jl.install && e.use(jl), Wl.install && e.use(Wl), nn.install && e.use(nn), Kl.install && e.use(Kl), ql.install && e.use(ql), Xl.install && e.use(Xl), Gl.install && e.use(Gl), Jl.install && e.use(Jl), Ql.install && e.use(Ql), xl.install && e.use(xl), _l.install && e.use(_l), vr.install && e.use(vr), es.install && e.use(es), Ur.install && e.use(Ur), Yr.install && e.use(Yr), ns.install && e.use(ns), os.install && e.use(os), rs.install && e.use(rs), ts.install && e.use(ts), as.install && e.use(as), is.install && e.use(is), ls.install && e.use(ls), ss.install && e.use(ss), Ft.install && e.use(Ft), us.install && e.use(us), cs.install && e.use(cs);
}
const wE = {
  version: AT,
  install: VT,
  ActionSheet: Fi,
  Alert: Hi,
  AppBar: Ui,
  AutoComplete: Wi,
  Avatar: Xi,
  AvatarGroup: Gi,
  BackTop: Zi,
  Badge: Bt,
  BottomNavigation: Ji,
  BottomNavigationItem: Qi,
  Breadcrumb: xi,
  Breadcrumbs: _i,
  Button: zn,
  ButtonGroup: el,
  Card: nl,
  Cell: ol,
  Checkbox: lr,
  CheckboxGroup: rl,
  Chip: Dt,
  Code: al,
  Col: il,
  Collapse: ll,
  CollapseItem: sl,
  CollapseTransition: ul,
  Context: Nn,
  Countdown: vl,
  Counter: yl,
  DatePicker: $l,
  Dialog: wl,
  Divider: Cl,
  Drag: Lt,
  Ellipsis: Sl,
  Fab: Pl,
  FieldDecorator: Mr,
  FloatingPanel: zl,
  Form: Ol,
  FormDetails: Pn,
  HighlighterProvider: Tl,
  Hover: En,
  HoverOverlay: Vn,
  Icon: Ze,
  Image: El,
  ImagePreview: jr,
  IndexAnchor: Il,
  IndexBar: Bl,
  Input: Nr,
  Lazy: Fr,
  Link: Dl,
  List: Ml,
  Loading: cr,
  LoadingBar: Nl,
  Locale: Ri,
  LocaleProvider: Al,
  Menu: Rr,
  MenuOption: sr,
  MenuSelect: Lr,
  Option: Ht,
  Overlay: Vl,
  Pagination: Rl,
  Paper: Ll,
  Picker: Fl,
  Popup: Oo,
  Progress: Hl,
  PullRefresh: Ul,
  Radio: Ut,
  RadioGroup: Yl,
  Rate: jl,
  Result: Wl,
  Ripple: nn,
  Row: Kl,
  Select: ql,
  Skeleton: Xl,
  Slider: Gl,
  Snackbar: Jl,
  Space: Ql,
  Step: xl,
  Steps: _l,
  Sticky: vr,
  StyleProvider: es,
  Swipe: Ur,
  SwipeItem: Yr,
  Switch: ns,
  Tab: os,
  TabItem: rs,
  Table: ts,
  Tabs: as,
  TabsItems: is,
  Themes: ls,
  TimePicker: ss,
  Tooltip: Ft,
  Uploader: us,
  Watermark: cs
};
export {
  Fi as ActionSheet,
  Hi as Alert,
  Ui as AppBar,
  Wi as AutoComplete,
  Xi as Avatar,
  Gi as AvatarGroup,
  Zi as BackTop,
  Bt as Badge,
  Ji as BottomNavigation,
  Qi as BottomNavigationItem,
  xi as Breadcrumb,
  _i as Breadcrumbs,
  zn as Button,
  el as ButtonGroup,
  nl as Card,
  ol as Cell,
  lr as Checkbox,
  rl as CheckboxGroup,
  Dt as Chip,
  al as Code,
  il as Col,
  ll as Collapse,
  sl as CollapseItem,
  ul as CollapseTransition,
  Nn as Context,
  vl as Countdown,
  yl as Counter,
  $l as DatePicker,
  wl as Dialog,
  Cl as Divider,
  Lt as Drag,
  Sl as Ellipsis,
  Pl as Fab,
  Mr as FieldDecorator,
  zl as FloatingPanel,
  Ol as Form,
  Pn as FormDetails,
  Tl as HighlighterProvider,
  En as Hover,
  Vn as HoverOverlay,
  Ze as Icon,
  El as Image,
  jr as ImagePreview,
  Il as IndexAnchor,
  Bl as IndexBar,
  Nr as Input,
  Fr as Lazy,
  Dl as Link,
  Ml as List,
  cr as Loading,
  Nl as LoadingBar,
  Ri as Locale,
  Al as LocaleProvider,
  Rr as Menu,
  sr as MenuOption,
  Lr as MenuSelect,
  Ht as Option,
  Vl as Overlay,
  qi as PIXEL,
  Rl as Pagination,
  Ll as Paper,
  Fl as Picker,
  Oo as Popup,
  Hl as Progress,
  Ul as PullRefresh,
  Ut as Radio,
  Yl as RadioGroup,
  jl as Rate,
  Wl as Result,
  nn as Ripple,
  Kl as Row,
  Jm as SNACKBAR_TYPE,
  ql as Select,
  Xl as Skeleton,
  Gl as Slider,
  Jl as Snackbar,
  Ql as Space,
  xl as Step,
  _l as Steps,
  vr as Sticky,
  es as StyleProvider,
  Ur as Swipe,
  Yr as SwipeItem,
  ns as Switch,
  os as Tab,
  rs as TabItem,
  ts as Table,
  as as Tabs,
  is as TabsItems,
  ls as Themes,
  ss as TimePicker,
  Ft as Tooltip,
  us as Uploader,
  cs as Watermark,
  KT as _ActionSheetComponent,
  qT as _AlertComponent,
  XT as _AppBarComponent,
  n5 as _AutoCompleteComponent,
  r5 as _AvatarComponent,
  t5 as _AvatarGroupComponent,
  l5 as _BackTopComponent,
  s5 as _BadgeComponent,
  u5 as _BottomNavigationComponent,
  c5 as _BottomNavigationItemComponent,
  d5 as _BreadcrumbComponent,
  f5 as _BreadcrumbsComponent,
  i5 as _ButtonComponent,
  v5 as _ButtonGroupComponent,
  p5 as _CardComponent,
  m5 as _CellComponent,
  xT as _CheckboxComponent,
  h5 as _CheckboxGroupComponent,
  g5 as _ChipComponent,
  b5 as _CodeComponent,
  y5 as _ColComponent,
  k5 as _CollapseComponent,
  $5 as _CollapseItemComponent,
  w5 as _CollapseTransitionComponent,
  LT as _ContextComponent,
  C5 as _CountdownComponent,
  S5 as _CounterComponent,
  z5 as _DatePickerComponent,
  O5 as _DialogComponent,
  T5 as _DividerComponent,
  E5 as _DragComponent,
  B5 as _EllipsisComponent,
  D5 as _FabComponent,
  ZT as _FieldDecoratorComponent,
  M5 as _FloatingPanelComponent,
  N5 as _FormComponent,
  GT as _FormDetailsComponent,
  A5 as _HighlighterProviderComponent,
  jT as _HoverComponent,
  YT as _HoverOverlayComponent,
  UT as _IconComponent,
  V5 as _ImageComponent,
  F5 as _ImagePreviewComponent,
  H5 as _IndexAnchorComponent,
  U5 as _IndexBarComponent,
  JT as _InputComponent,
  o5 as _LazyComponent,
  Y5 as _LinkComponent,
  j5 as _ListComponent,
  W5 as _LoadingBarComponent,
  a5 as _LoadingComponent,
  WT as _LocaleComponent,
  K5 as _LocaleProviderComponent,
  QT as _MenuComponent,
  _T as _MenuOptionComponent,
  e5 as _MenuSelectComponent,
  q5 as _OptionComponent,
  X5 as _OverlayComponent,
  G5 as _PaginationComponent,
  Z5 as _PaperComponent,
  J5 as _PickerComponent,
  HT as _PopupComponent,
  Q5 as _ProgressComponent,
  x5 as _PullRefreshComponent,
  _5 as _RadioComponent,
  eE as _RadioGroupComponent,
  nE as _RateComponent,
  oE as _ResultComponent,
  FT as _RippleComponent,
  rE as _RowComponent,
  tE as _SelectComponent,
  aE as _SkeletonComponent,
  iE as _SliderComponent,
  lE as _SnackbarComponent,
  sE as _SpaceComponent,
  uE as _StepComponent,
  cE as _StepsComponent,
  P5 as _StickyComponent,
  dE as _StyleProviderComponent,
  R5 as _SwipeComponent,
  L5 as _SwipeItemComponent,
  fE as _SwitchComponent,
  vE as _TabComponent,
  pE as _TabItemComponent,
  mE as _TableComponent,
  hE as _TabsComponent,
  gE as _TabsItemsComponent,
  bE as _ThemesComponent,
  yE as _TimePickerComponent,
  I5 as _TooltipComponent,
  kE as _UploaderComponent,
  $E as _WatermarkComponent,
  ff as actionSheetProps,
  Ps as add,
  $f as appBarProps,
  tv as avatarGroupProps,
  ov as avatarProps,
  cv as backTopProps,
  fv as badgeProps,
  gv as bottomNavigationItemProps,
  pv as bottomNavigationProps,
  yv as breadcrumbProps,
  wv as breadcrumbsProps,
  Sv as buttonGroupProps,
  lv as buttonProps,
  zv as cardProps,
  Tv as cellProps,
  Iv as checkboxGroupProps,
  Ff as checkboxProps,
  Dv as chipProps,
  Nv as codeProps,
  Vv as colProps,
  Yv as collapseItemProps,
  Hv as collapseProps,
  Kv as collapseTransitionProps,
  Xv as countdownProps,
  ip as counterProps,
  gf as currentMessage,
  mp as datePickerProps,
  wE as default,
  dn as defaultLazyOptions,
  wp as dialogProps,
  Sp as dividerProps,
  zp as dragProps,
  Ip as ellipsisProps,
  vf as enUS,
  mf as faIR,
  Dp as fabProps,
  Gt as fieldDecoratorProps,
  Cf as formDetailsProps,
  Ap as formProps,
  nf as hoverOverlayProps,
  en as iconProps,
  Qf as imageCache,
  Yp as imagePreviewProps,
  Lp as imageProps,
  Kp as indexAnchorProps,
  Xp as indexBarProps,
  Es as inputProps,
  VT as install,
  Zp as linkProps,
  Qp as listProps,
  D6 as loadingBarProps,
  lo as loadingProps,
  jf as menuOptionProps,
  Is as menuProps,
  Kf as menuSelectProps,
  bf as merge,
  hf as messages,
  dm as optionProps,
  vm as overlayProps,
  pm as paginationProps,
  hm as paperProps,
  bm as pickerProps,
  br as popupProps,
  km as progressProps,
  wm as pullRefreshProps,
  Om as radioGroupProps,
  Sm as radioProps,
  Em as rateProps,
  Rm as resultProps,
  Fm as rowProps,
  Um as selectProps,
  jm as skeletonProps,
  Km as sliderProps,
  Zs as snackbarProps,
  _m as spaceProps,
  eh as stepProps,
  rh as stepsProps,
  Tr as stickyProps,
  ah as styleProviderProps,
  Ws as swipeProps,
  lh as switchProps,
  rn as t,
  fh as tabItemProps,
  uh as tabProps,
  ph as tableProps,
  bh as tabsItemsProps,
  hh as tabsProps,
  kh as timePickerProps,
  Tp as tooltipProps,
  zh as uploaderProps,
  zs as use,
  xn as useHoverOverlay,
  Ss as useLocale,
  AT as version,
  Th as watermarkProps,
  ws as zhCN,
  pf as zhHK,
  Cs as zhTW
};
