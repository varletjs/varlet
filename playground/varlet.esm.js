import { Comment as v0, Fragment as Be, Teleport as Hr, Transition as bn, TransitionGroup as p0, computed as C, createApp as m0, createBlock as we, createCommentVNode as q, createElementBlock as k, createElementVNode as L, createSlots as Pr, createTextVNode as Le, createVNode as j, defineComponent as te, getCurrentInstance as St, guardReactiveProps as Aa, h as Fn, inject as Mu, isRef as Kv, isVNode as g0, mergeProps as Xe, nextTick as Ne, normalizeClass as g, normalizeProps as yt, normalizeStyle as J, onActivated as vt, onBeforeMount as h0, onBeforeUnmount as Pt, onDeactivated as Ot, onMounted as Tr, onUnmounted as Bo, onUpdated as qt, openBlock as b, provide as Au, reactive as $n, ref as P, renderList as Ye, renderSlot as H, resolveComponent as x, resolveDirective as _e, resolveDynamicComponent as Xt, shallowReactive as b0, shallowRef as y0, toDisplayString as ve, unref as Na, useSlots as w0, vModelText as Wv, vShow as yr, watch as me, withCtx as ue, withDirectives as Ke, withKeys as yd, withModifiers as Rn } from "vue";
function We(e) {
  return Array.isArray(e);
}
function Sn(e) {
  return typeof e == "string";
}
function Yn(e) {
  return typeof e == "function";
}
function ir(e, ...n) {
  return Yn(e) ? e(...n) : e;
}
function Xo(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n];
    for (var t in r) e[t] = r[t];
  }
  return e;
}
var k0 = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  }
};
function Xl(e, n) {
  function r(o, a, i) {
    if (!(typeof document > "u")) {
      i = Xo({}, n, i), typeof i.expires == "number" && (i.expires = new Date(Date.now() + i.expires * 864e5)), i.expires && (i.expires = i.expires.toUTCString()), o = encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var l = "";
      for (var s in i)
        i[s] && (l += "; " + s, i[s] !== !0 && (l += "=" + i[s].split(";")[0]));
      return document.cookie = o + "=" + e.write(a, o) + l;
    }
  }
  function t(o) {
    if (!(typeof document > "u" || arguments.length && !o)) {
      for (var a = document.cookie ? document.cookie.split("; ") : [], i = {}, l = 0; l < a.length; l++) {
        var s = a[l].split("="), u = s.slice(1).join("=");
        try {
          var d = decodeURIComponent(s[0]);
          if (i[d] = e.read(u, d), o === d) break;
        } catch {
        }
      }
      return o ? i[o] : i;
    }
  }
  return Object.create({
    set: r,
    get: t,
    remove: function(o, a) {
      r(o, "", Xo({}, a, { expires: -1 }));
    },
    withAttributes: function(o) {
      return Xl(this.converter, Xo({}, this.attributes, o));
    },
    withConverter: function(o) {
      return Xl(Xo({}, this.converter, o), this.attributes);
    }
  }, {
    attributes: { value: Object.freeze(n) },
    converter: { value: Object.freeze(e) }
  });
}
var fA = Xl(k0, { path: "/" });
function hn(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
function $0(e, n) {
  return hn(e, 0, n.length - 1);
}
function so(e, n) {
  return Array.from({ length: e }, (r, t) => n(t));
}
function Er() {
  return typeof window < "u";
}
function Ra() {
  return typeof globalThis < "u" ? globalThis : Er() ? window : typeof global < "u" ? global : self;
}
var { hasOwnProperty: C0 } = Object.prototype;
function mo(e, n) {
  return C0.call(e, n);
}
function pa() {
  return Er() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
var S0 = Object.prototype.toString;
function P0(e) {
  return S0.call(e);
}
function zn(e) {
  return P0(e).slice(8, -1);
}
function wd(e) {
  return zn(e) === "ArrayBuffer";
}
function Do(e) {
  return typeof e == "boolean";
}
function kd(e) {
  return zn(e) === "DataView";
}
function Gl(e) {
  return zn(e) === "Date";
}
function $d(e) {
  return zn(e) === "DOMException";
}
function Or(e) {
  return e == null || e === "" || We(e) && !e.length;
}
function Cd(e) {
  return zn(e) === "Error";
}
function Sd(e) {
  return zn(e) === "Map";
}
function Zl(e) {
  return typeof e == "object" && e !== null;
}
function Tn(e) {
  return zn(e) === "Object";
}
function Pd(e) {
  return zn(e) === "RegExp";
}
function Od(e) {
  return zn(e) === "Set";
}
function zd(e) {
  return [
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array"
  ].includes(zn(e));
}
function O0(e, n, r) {
  const t = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  function a(i, l, s, u) {
    if (r(i, l) === !0 || i === l || i !== i && l !== l) return !0;
    if (!Zl(i) || !Zl(l)) return i === l;
    if (i.constructor !== l.constructor) return !1;
    if (zn(i) === "String" && zn(l) === "String" || zn(i) === "Number" && zn(l) === "Number" || zn(i) === "Boolean" && zn(l) === "Boolean" || zn(i) === "BigInt" && zn(l) === "BigInt" || zn(i) === "Symbol" && zn(l) === "Symbol") return i.valueOf() === l.valueOf();
    if (Gl(i) && Gl(l)) return i.getTime() === l.getTime();
    if (Pd(i) && Pd(l)) return i.source === l.source && i.flags === l.flags;
    if (Cd(i) && Cd(l)) return i.name === l.name && i.message === l.message && i.cause === l.cause;
    if ($d(i) && $d(l)) return i.name === l.name && i.message === l.message;
    if (zd(i) && zd(l) || kd(i) && kd(l)) {
      if (i.byteLength !== l.byteLength) return !1;
      const d = new Uint8Array(i.buffer), c = new Uint8Array(l.buffer);
      return d.every((f, v) => f === c[v]);
    }
    if (wd(i) && wd(l)) {
      if (i.byteLength !== l.byteLength) return !1;
      const d = new Uint8Array(i), c = new Uint8Array(l);
      return d.every((f, v) => f === c[v]);
    }
    if (s.get(i) === l && u.get(l) === i) return !0;
    if (s.set(i, l), u.set(l, i), Sd(i) && Sd(l) || Od(i) && Od(l)) {
      if (i.size !== l.size) return !1;
      const d = [...i], c = [...l], f = d.every((v, p) => a(v, c[p], s, u));
      return s.delete(i), u.delete(l), f;
    }
    if (We(i) && We(l)) {
      if (i.length !== l.length) return !1;
      const d = i.every((c, f) => a(c, l[f], s, u));
      return s.delete(i), u.delete(l), d;
    }
    if (Tn(i) && Tn(l)) {
      const d = [...Object.keys(i), ...Object.getOwnPropertySymbols(i)], c = [...Object.keys(l), ...Object.getOwnPropertySymbols(l)];
      if (d.length !== c.length) return !1;
      const f = d.every((v) => a(i[v], l[v], s, u));
      return s.delete(i), u.delete(l), f;
    }
    return !1;
  }
  return a(e, n, t, o);
}
function Td(e, n) {
  return O0(e, n, () => {
  });
}
function nr(e) {
  return typeof e == "number";
}
function qv(e) {
  return nr(e) || Sn(e) && /^[-+]?\d+$/.test(e);
}
function It(e) {
  return !!e;
}
function Xv(e) {
  return e === window;
}
function z0() {
  return Er() && "ontouchstart" in window;
}
function T0(e, n) {
  if (!e) throw new Error(n);
}
function Z(e) {
  return e == null ? 0 : Sn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Do(e) ? Number(e) : e;
}
function Rt(e, n) {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1) return e.splice(r, 1);
  }
}
function Jl(e) {
  return [...new Set(e)];
}
function E0(e, n, r = "start") {
  let t = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && t >= 0 && t <= e.length - 1; ) {
    if (n(e[t], t, e)) return [e[t], t];
    r === "start" ? t++ : t--;
  }
  return [null, -1];
}
function I0(e) {
  return e.filter((n) => n != null);
}
function qr(e) {
  return We(e) ? e : [e];
}
function ma(e) {
  const n = Ra();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function B0(...e) {
  return e.map((n) => {
    if (We(n)) {
      const [r, t, o = null] = n;
      return r ? t : o;
    }
    return n;
  });
}
function Nu(e) {
  return e = e.replace(/[-_](\w)/g, (n, r) => r.toUpperCase()), e.replace(e.charAt(0), e.charAt(0).toLowerCase());
}
function Gv(e) {
  return e.replace(/([A-Z])/g, " $1").replace(/[_\s]+/g, "-").trim().replace(/^-/, "").toLowerCase();
}
function D0(e) {
  const n = Nu(e);
  return n.replace(n.charAt(0), n.charAt(0).toUpperCase());
}
function M0(e) {
  return (n) => {
    const r = `${e}-${n}`, t = (o) => o ? o[0] === "$" ? o.replace("$", e) : o.startsWith("--") ? `${r}${o}` : `${r}__${o}` : r;
    return {
      name: D0(r),
      n: t,
      classes: B0
    };
  };
}
function Vt(e) {
  const n = Ra();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}
function Xn() {
  return new Promise((e) => {
    Vt(() => {
      Vt(e);
    });
  });
}
function Ur(e) {
  return window.getComputedStyle(e);
}
function kn(e) {
  if (Xv(e)) {
    const n = e.innerWidth, r = e.innerHeight, t = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: n,
      bottom: r,
      width: n,
      height: r
    };
    return {
      ...t,
      toJSON: () => t
    };
  }
  return e.getBoundingClientRect();
}
function Ru(e) {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}
function kt(e) {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}
function A0(e) {
  const { top: n, bottom: r, left: t, right: o } = kn(e), { width: a, height: i } = kn(window);
  return t <= a && o >= 0 && n <= i && r >= 0;
}
function Ze(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function it() {
  return new Promise((e) => {
    Vt(e);
  });
}
function Zv(e) {
  return {
    ...e,
    set(n, r) {
      r != null && (Sn(r) || (r = JSON.stringify(r)), e.setItem(n, r));
    },
    get(n) {
      const r = e.getItem(n);
      try {
        return JSON.parse(r);
      } catch {
        return r;
      }
    },
    remove(n) {
      e.removeItem(n);
    }
  };
}
var vA = Zv(Ra().sessionStorage), pA = Zv(Ra().localStorage);
function S(e, ...n) {
  if (We(e)) return e.map((r) => r(...n));
  if (e) return e(...n);
}
function Vu(e, n = 200) {
  let r, t = 0;
  return function o(...a) {
    const i = performance.now(), l = i - t;
    t || (t = i), r && clearTimeout(r), l >= n ? (e.apply(this, a), t = i) : r = setTimeout(() => {
      o.apply(this, a);
    }, n - l);
  };
}
function Lu(e) {
  const n = Object.entries(e).reduce((f, [v, p]) => (f[v] = Tn(p) ? p.value : p, f), {}), r = Object.values(e);
  function t(f) {
    const v = c(f);
    return v?.label ? ir(v.label) : "";
  }
  function o(f) {
    const v = c(f);
    return v?.description ? ir(v.description) : "";
  }
  function a() {
    return r.map((f) => Tn(f) ? f.value : f);
  }
  function i() {
    return r.map((f) => Tn(f) && f.label ? ir(f.label) : "");
  }
  function l() {
    return r.map((f) => Tn(f) && f.description ? ir(f.description) : "");
  }
  function s(f) {
    const v = {};
    for (const p of Object.keys(f)) v[p] = ir(f[p]);
    return v;
  }
  function u(f) {
    const v = c(f);
    return v ? s(v) : {
      value: f,
      label: "",
      description: ""
    };
  }
  function d() {
    return r.map((f) => Tn(f) ? s(f) : {
      value: f,
      label: "",
      description: ""
    });
  }
  function c(f) {
    return r.find((v) => Tn(v) && v.value === f);
  }
  return {
    ...n,
    values: a,
    label: t,
    description: o,
    labels: i,
    descriptions: l,
    option: u,
    options: d
  };
}
function N0(e) {
  const { from: n, to: r, duration: t = 300, frame: o = () => {
  }, timingFunction: a = (w) => w, onStateChange: i = () => {
  } } = e;
  let l = "pending", s = n;
  const u = r - n;
  let d, c, f, v = 0;
  function p() {
    if (l === "running" || l === "finished") return;
    $("running");
    const w = performance.now();
    c = c ?? w, v += f != null ? w - f : 0, f = void 0, z();
    function z() {
      d = Vt(() => {
        const T = hn((performance.now() - c - v) / t, 0, 1);
        if (s = u * a(T) + n, T >= 1) {
          $("finished"), o({
            value: r,
            done: !0
          });
          return;
        }
        o({
          value: s,
          done: !1
        }), z();
      });
    }
  }
  function h() {
    l === "running" && (ma(d), $("paused"), f = performance.now());
  }
  function m() {
    ma(d), $("pending"), s = n, d = void 0, c = void 0, f = void 0, v = 0;
  }
  function y() {
    return l;
  }
  function $(w) {
    l = w, i(w);
  }
  return {
    start: p,
    pause: h,
    reset: m,
    getState: y
  };
}
function R0(e) {
  return new Promise((n) => {
    const r = new FileReader();
    r.onload = () => {
      n(r.result);
    }, r.readAsDataURL(e);
  });
}
function V0(e, n, r) {
  return n = hn(n ?? 0, -292, 292), n ? +`${r(`${e}e${n}`)}e${-n}` : r(e);
}
function Ql(e, n = 0) {
  return V0(e, n, Math.floor);
}
function rr(e, n, r) {
  return T0(e, `Varlet [${n}]: ${r}`);
}
function L0(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function At(e, n) {
  console.error(`Varlet [${e}]: ${n}`);
}
var F0 = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1;
function En(e) {
  let n = !1;
  Tr(() => {
    e(), Ne(() => {
      n = !0;
    });
  }), vt(() => {
    n && e();
  });
}
function xe(e, n, r, t = {}) {
  if (!Er()) return;
  const { passive: o = !1, capture: a = !1 } = t;
  let i = !1, l = !1;
  const s = (v) => Yn(v) ? v() : Na(v), u = (v) => {
    if (i || l) return;
    const p = s(v);
    p && (p.addEventListener(n, r, {
      passive: o,
      capture: a
    }), i = !0);
  }, d = (v) => {
    if (!i || l) return;
    const p = s(v);
    p && (p.removeEventListener(n, r, { capture: a }), i = !1);
  };
  let c;
  Kv(e) && (c = me(() => e.value, (v, p) => {
    d(p), u(v);
  }));
  const f = () => {
    c?.(), d(e), l = !0;
  };
  return En(() => {
    u(e);
  }), Pt(() => {
    d(e);
  }), Ot(() => {
    d(e);
  }), f;
}
function Jv(e, n, r) {
  if (!Er()) return;
  xe(document, n, (o) => {
    const a = Yn(e) ? e() : Na(e);
    a && !a.contains(o.target) && r(o);
  });
}
function Gt(e) {
  let n = !1;
  Ot(() => {
    n = !0, e();
  }), Bo(() => {
    n || e();
  });
}
function Fu(e) {
  return e in St().provides;
}
function In(e) {
  if (!Fu(e)) return {
    index: null,
    parentProvider: null,
    bindParent: null
  };
  const { childInstances: n, collect: r, clear: t, ...o } = Mu(e), a = St();
  return {
    index: C(() => n.indexOf(a)),
    parentProvider: o,
    bindParent: (s) => {
      Tr(() => {
        Ne().then(() => {
          r(a, s);
        });
      }), Pt(() => {
        Ne().then(() => {
          t(a, s);
        });
      });
    }
  };
}
function H0(e) {
  const n = [], r = (t) => {
    if (t?.component) {
      r(t?.component.subTree);
      return;
    }
    We(t?.children) && t.children.forEach((o) => {
      g0(o) && (n.push(o), r(o));
    });
  };
  return r(e), n;
}
function Bn(e) {
  const n = St(), r = $n([]), t = [], o = C(() => r.length), a = () => {
    const u = H0(n.subTree), d = r.map((f, v) => ({
      instance: f,
      provider: t[v]
    })), c = (f) => {
      const v = u.indexOf(f.vnode);
      return v === -1 ? Number.MAX_SAFE_INTEGER : v;
    };
    d.sort((f, v) => c(f.instance) - c(v.instance)), r.splice(0, r.length, ...d.map(({ instance: f }) => f)), t.splice(0, t.length, ...d.map(({ provider: f }) => f));
  }, i = (u, d) => {
    r.push(u), t.push(d), a();
  }, l = (u, d) => {
    Rt(r, u), Rt(t, d);
  }, s = (u) => {
    Au(e, {
      childInstances: r,
      collect: i,
      clear: l,
      ...u
    });
  };
  return qt(a), {
    length: o,
    childInstances: r,
    childProviders: t,
    bindChildren: s
  };
}
function wr(e) {
  xe(() => window, "resize", e, { passive: !0 }), xe(() => window, "orientationchange", e, { passive: !0 });
}
function U0(e, n) {
  const r = P(!1);
  return me(e, (t) => {
    n === t && (r.value = !0);
  }, { immediate: !0 }), r;
}
function j0(e, n) {
  if (e > n) return "horizontal";
  if (n > e) return "vertical";
}
function Zt() {
  const e = P(0), n = P(0), r = P(0), t = P(0), o = P(0), a = P(0), i = P(0), l = P(0), s = P(0), u = P(0), d = P(), c = P(!1), f = P(!1), v = P(0), p = P(0);
  let h = null;
  const m = () => {
    e.value = 0, n.value = 0, r.value = 0, t.value = 0, o.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, d.value = void 0, c.value = !1, f.value = !1, v.value = 0, p.value = 0;
  };
  return {
    startX: e,
    startY: n,
    deltaX: r,
    deltaY: t,
    offsetX: o,
    offsetY: a,
    prevX: i,
    prevY: l,
    moveX: s,
    moveY: u,
    direction: d,
    touching: c,
    dragging: f,
    startTime: v,
    distance: p,
    resetTouch: m,
    startTouch: (O) => {
      m();
      const { clientX: R, clientY: U } = O.touches[0];
      e.value = R, n.value = U, i.value = R, l.value = U, c.value = !0, v.value = performance.now(), f.value = !1, h && window.cancelAnimationFrame(h);
    },
    moveTouch: (O) => {
      const { clientX: R, clientY: U } = O.touches[0];
      f.value = !0, r.value = R - e.value, t.value = U - n.value, o.value = Math.abs(r.value), a.value = Math.abs(t.value), p.value = Math.sqrt(o.value ** 2 + a.value ** 2), s.value = R - i.value, u.value = U - l.value, d.value || (d.value = j0(o.value, a.value)), i.value = R, l.value = U;
    },
    endTouch: () => {
      c.value = !1, h = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (O) => kt(O) === 0 && t.value > 0,
    isReachBottom: (O, R = 1) => {
      const { scrollHeight: U, clientHeight: M, scrollTop: D } = O, E = Math.abs(U - D - M);
      return t.value < 0 && E <= R;
    }
  };
}
function Qv() {
  const e = St(), n = Gv(e.type.name), r = P(void 0);
  return Tr(() => {
    r.value = `${n}-${e.uid}`;
  }), r;
}
function Y0(e = {}) {
  const { initialWidth: n = 0, initialHeight: r = 0 } = e, t = P(n), o = P(r), a = () => {
    Er() && (t.value = window.innerWidth, o.value = window.innerHeight);
  };
  return En(a), wr(a), {
    width: t,
    height: o
  };
}
function wn(e, n, r = {}) {
  const { passive: t = !0, eventName: o, defaultValue: a, emit: i } = r, l = o ?? `onUpdate:${n.toString()}`, s = () => e[n] ?? a;
  if (!t) return C({
    get() {
      return s();
    },
    set(c) {
      i ? i(l, c) : S(e[l], c);
    }
  });
  const u = P(s());
  let d = !0;
  return me(() => e[n], () => {
    d = !1, u.value = s(), Ne(() => {
      d = !0;
    });
  }), me(() => u.value, (c) => {
    d && (i ? i(l, c) : S(e[l], c));
  }), u;
}
function K0(e) {
  const n = P(o(e.from)), r = P("pending");
  let t = s();
  function o(u) {
    return Yn(u) ? u() : u;
  }
  function a() {
    t.reset(), n.value = o(e.from), r.value = "pending", t = s();
  }
  function i() {
    t.start();
  }
  function l() {
    t.pause();
  }
  function s() {
    return N0({
      from: o(e.from),
      to: o(e.to),
      duration: e.duration ? o(e.duration) : 300,
      timingFunction: e.timingFunction,
      onStateChange(u) {
        r.value = u;
      },
      frame({ value: u, done: d }) {
        n.value = u, d && e.onFinished?.(n.value);
      }
    });
  }
  return {
    value: n,
    state: r,
    start: i,
    pause: l,
    reset: a
  };
}
function W0(e, n) {
  if (!Er() || typeof ResizeObserver > "u") return;
  let r, t, o = !1;
  const a = (d) => Yn(d) ? d() : Na(d), i = (d) => {
    if (o) return;
    const c = a(d);
    !c || c === t || (l(), r = new ResizeObserver(n), r.observe(c), t = c);
  }, l = () => {
    r?.disconnect(), r = void 0, t = void 0;
  };
  let s;
  Kv(e) && (s = me(() => e.value, () => i(e)));
  const u = () => {
    s?.(), l(), o = !0;
  };
  return En(() => i(e)), Pt(l), Ot(l), u;
}
var q0 = Object.defineProperty, X0 = Object.defineProperties, G0 = Object.getOwnPropertyDescriptors, Ed = Object.getOwnPropertySymbols, Z0 = Object.prototype.hasOwnProperty, J0 = Object.prototype.propertyIsEnumerable, Id = (e, n, r) => n in e ? q0(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, xl = (e, n) => {
  for (var r in n || (n = {})) Z0.call(n, r) && Id(e, r, n[r]);
  if (Ed)
    for (var r of Ed(n)) J0.call(n, r) && Id(e, r, n[r]);
  return e;
}, Q0 = (e, n) => X0(e, G0(n)), Bd = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
});
function Fe(e, n) {
  return We(n) ? n.reduce((r, t) => (r[t] = e[t], r), {}) : e[n];
}
function de(e, n) {
  const r = n ?? e;
  return r.install = function(t) {
    const { name: o } = e;
    o && t.component(o, e);
  }, r;
}
function fe(e, n) {
  e.setPropsDefaults = function(r) {
    Object.entries(r).forEach(([t, o]) => {
      const a = n[t];
      if (a != null) {
        if (Tn(a)) {
          n[t] = Q0(xl({}, a), { default: o });
          return;
        }
        n[t] = {
          type: a,
          default: o
        };
      }
    });
  };
}
function x0(e) {
  const n = m0(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), r.parentNode && document.body.removeChild(r);
    }
  };
}
function Jt(e, n = {}, r = {}) {
  const { unmount: t } = x0({ setup() {
    return () => Fn(e, xl(xl({}, n), r));
  } });
  return { unmountInstance: t };
}
function Va(e) {
  const n = [];
  return e.forEach((r) => {
    if (r.type !== v0) {
      if (r.type === Be && We(r.children)) {
        n.push(...Va(r.children));
        return;
      }
      n.push(r);
    }
  }), n;
}
function Dd(e) {
  return Tn(e) && Yn(e.safeParseAsync);
}
function _0(e) {
  return Tn(e) && mo(e, "success");
}
function Jn() {
  const e = P(""), n = (o, a, i) => Bd(null, null, function* () {
    const l = qr(o).filter((u) => Dd(u) || Yn(u)), s = yield Promise.all(l.map((u) => Dd(u) ? u.safeParseAsync(a) : u(a, i)));
    return r(), !s.some((u) => {
      if (_0(u)) {
        if (u.success === !1)
          return e.value = u.error.issues[0].message, !0;
      } else if (u !== !0)
        return e.value = String(u), !0;
      return !1;
    });
  }), r = () => {
    e.value = "";
  };
  return {
    errorMessage: e,
    validate: n,
    resetValidation: r,
    validateWithTrigger: (o, a, i, l, s) => Bd(null, null, function* () {
      o.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function ey(e) {
  xe(() => window, "hashchange", e), xe(() => window, "popstate", e);
}
function zt() {
  const e = P(!1);
  return vt(() => {
    e.value = !1;
  }), Ot(() => {
    e.value = !0;
  }), { disabled: e };
}
var oe = M0("var");
function V(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function Pn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
var lr = te({
  props: {
    is: { type: [
      String,
      Number,
      Boolean,
      Object,
      Array
    ] },
    tag: {
      type: String,
      default: "span"
    }
  },
  setup(e) {
    return () => Sn(e.is) ? Fn(e.tag, e.is) : e.is;
  }
}), xv = {
  dialogTitle: "Hint",
  dialogConfirmButtonText: "Confirm",
  dialogCancelButtonText: "Cancel",
  actionSheetTitle: "Select One",
  listLoadingText: "Loading",
  listFinishedText: "No more",
  listErrorText: "Load fail",
  pickerTitle: "Pick it",
  pickerConfirmButtonText: "Confirm",
  pickerCancelButtonText: "Cancel",
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
  datePickerYearHint: "SELECT YEAR",
  datePickerMonthHint: "SELECT MONTH",
  paginationItem: "",
  paginationPage: "page",
  paginationJump: "Go to",
  timePickerHint: "SELECT TIME",
  selectEmptyText: "No Data",
  dataTableEmptyText: "No Data"
}, _v = {
  dialogTitle: "اشاره",
  dialogConfirmButtonText: "تایید",
  dialogCancelButtonText: "لغو",
  actionSheetTitle: "انتخاب یک مورد",
  listLoadingText: "در حال بارگزاری",
  listFinishedText: "مورد دیگری وجود ندارد",
  listErrorText: "بارگزاری ناموفق",
  pickerTitle: "انتخاب کنید",
  pickerConfirmButtonText: "تایید",
  pickerCancelButtonText: "لغو",
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
  datePickerYearHint: "انتخاب سال",
  datePickerMonthHint: "انتخاب ماه",
  paginationItem: "",
  paginationPage: "صفحه",
  paginationJump: "برو به",
  timePickerHint: "انتخاب زمان",
  selectEmptyText: "داده‌ای وجود ندارد",
  dataTableEmptyText: "داده‌ای وجود ندارد"
}, ep = {
  dialogTitle: "確認",
  dialogConfirmButtonText: "確認",
  dialogCancelButtonText: "キャンセル",
  actionSheetTitle: "いずれかを選択",
  listLoadingText: "読み込み中",
  listFinishedText: "以上です",
  listErrorText: "読み込み失敗",
  pickerTitle: "選択してください",
  pickerConfirmButtonText: "確認",
  pickerCancelButtonText: "キャンセル",
  datePickerMonthDict: {
    "01": {
      name: "1月",
      abbr: "1月"
    },
    "02": {
      name: "2月",
      abbr: "2月"
    },
    "03": {
      name: "3月",
      abbr: "3月"
    },
    "04": {
      name: "4月",
      abbr: "4月"
    },
    "05": {
      name: "5月",
      abbr: "5月"
    },
    "06": {
      name: "6月",
      abbr: "6月"
    },
    "07": {
      name: "7月",
      abbr: "7月"
    },
    "08": {
      name: "8月",
      abbr: "8月"
    },
    "09": {
      name: "9月",
      abbr: "9月"
    },
    10: {
      name: "10月",
      abbr: "10月"
    },
    11: {
      name: "11月",
      abbr: "11月"
    },
    12: {
      name: "12月",
      abbr: "12月"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "日曜日",
      abbr: "日"
    },
    1: {
      name: "月曜日",
      abbr: "月"
    },
    2: {
      name: "火曜日",
      abbr: "火"
    },
    3: {
      name: "水曜日",
      abbr: "水"
    },
    4: {
      name: "木曜日",
      abbr: "木"
    },
    5: {
      name: "金曜日",
      abbr: "金"
    },
    6: {
      name: "土曜日",
      abbr: "土"
    }
  },
  datePickerSelected: "件選択済み",
  datePickerHint: "日付を選択",
  datePickerYearHint: "年を選択",
  datePickerMonthHint: "月を選択",
  paginationItem: "件",
  paginationPage: "ページ",
  paginationJump: "ジャンプ",
  timePickerHint: "時間を選択",
  selectEmptyText: "データがありません",
  dataTableEmptyText: "データがありません"
}, Hu = {
  dialogTitle: "提示",
  dialogConfirmButtonText: "确认",
  dialogCancelButtonText: "取消",
  actionSheetTitle: "请选择",
  listLoadingText: "加载中",
  listFinishedText: "没有更多了",
  listErrorText: "加载失败",
  pickerTitle: "请选择",
  pickerConfirmButtonText: "确认",
  pickerCancelButtonText: "取消",
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
  datePickerYearHint: "选择年份",
  datePickerMonthHint: "选择月份",
  paginationItem: "条",
  paginationPage: "页",
  paginationJump: "前往",
  timePickerHint: "选择时间",
  selectEmptyText: "暂无数据",
  dataTableEmptyText: "暂无数据"
}, Uu = {
  dialogTitle: "提示",
  dialogConfirmButtonText: "確認",
  dialogCancelButtonText: "取消",
  actionSheetTitle: "請選擇",
  listLoadingText: "載入中",
  listFinishedText: "沒有更多了",
  listErrorText: "載入失敗",
  pickerTitle: "請選擇",
  pickerConfirmButtonText: "確認",
  pickerCancelButtonText: "取消",
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
  datePickerHint: "選擇日期",
  datePickerYearHint: "選擇年份",
  datePickerMonthHint: "選擇月份",
  paginationItem: "條",
  paginationPage: "頁",
  paginationJump: "前往",
  timePickerHint: "選擇時間",
  selectEmptyText: "暫無數據",
  dataTableEmptyText: "暫無數據"
}, np = Uu, ny = Object.defineProperty, Md = Object.getOwnPropertySymbols, ry = Object.prototype.hasOwnProperty, ty = Object.prototype.propertyIsEnumerable, Ad = (e, n, r) => n in e ? ny(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Nd = (e, n) => {
  for (var r in n || (n = {})) ry.call(n, r) && Ad(e, r, n[r]);
  if (Md)
    for (var r of Md(n)) ty.call(n, r) && Ad(e, r, n[r]);
  return e;
};
function ju() {
  const e = P({}), n = P({}), r = (i, l) => {
    l.lang = i, e.value[i] = l;
  }, t = (i) => {
    if (!e.value[i])
      return console.warn(`The ${i} does not exist. You can mount a language message using the add method`), {};
    n.value = e.value[i];
  };
  return {
    messages: e,
    currentMessage: n,
    add: r,
    use: t,
    merge: (i, l) => {
      if (!e.value[i]) {
        console.warn(`The ${i} does not exist. You can mount a language message using the add method`);
        return;
      }
      e.value[i] = Nd(Nd({}, e.value[i]), l), t(i);
    },
    t: (i) => {
      if (mo(n.value, i)) return n.value[i];
    }
  };
}
var { messages: rp, currentMessage: tp, add: Yu, use: Ku, merge: op, t: gn } = ju();
Yu("zh-CN", Hu);
Ku("zh-CN");
var mA = {
  zhCN: Hu,
  enUS: xv,
  zhTW: Uu,
  zhHK: np,
  faIR: _v,
  jaJP: ep,
  messages: rp,
  currentMessage: tp,
  add: Yu,
  use: Ku,
  merge: op,
  t: gn,
  useLocale: ju
}, _l = {
  zhCN: Hu,
  enUS: xv,
  zhTW: Uu,
  zhHK: np,
  faIR: _v,
  jaJP: ep,
  messages: rp,
  currentMessage: tp,
  add: Yu,
  use: Ku,
  merge: op,
  t: gn,
  useLocale: ju
}, es = /* @__PURE__ */ Symbol("LOCALE_PROVIDER_KEY");
function oy(e) {
  Au(es, e);
}
function kr() {
  return Fu(es) ? Mu(es) : { t: null };
}
var ap = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, gA = $n(ap), vr = $n(ap), { n: Rd } = oe("");
function ip() {
  Object.keys(vr.locks).length <= 0 ? document.body.classList.remove(Rd("$--lock")) : document.body.classList.add(Rd("$--lock"));
}
function Go(e) {
  vr.locks[e] = 1, ip();
}
function Zo(e) {
  delete vr.locks[e], ip();
}
function Mo(e, n) {
  const { uid: r } = St();
  n && me(n, (t) => {
    t === !1 ? Zo(r) : t === !0 && e() === !0 && Go(r);
  }), me(e, (t) => {
    n && n() === !1 || (t === !0 ? Go(r) : Zo(r));
  }), h0(() => {
    n && n() === !1 || e() === !0 && Go(r);
  }), Bo(() => {
    n && n() === !1 || e() === !0 && Zo(r);
  }), vt(() => {
    n && n() === !1 || e() === !0 && Go(r);
  }), Ot(() => {
    n && n() === !1 || e() === !0 && Zo(r);
  });
}
var Qr = [];
function Wu(e, n) {
  const { uid: r } = St();
  me(e, (i) => {
    i && !a(r) ? o() : setTimeout(() => {
      Rt(Qr, a(r));
    });
  }), En(() => {
    e() && o();
  }), Gt(() => {
    Rt(Qr, a(r));
  });
  function t() {
    return Qr.length === 0 ? !0 : (Qr.sort((i, l) => i.zIndex.value - l.zIndex.value), Qr[Qr.length - 1].uid === r);
  }
  function o() {
    a(r) || Qr.push({
      uid: r,
      zIndex: n
    });
  }
  function a(i) {
    return Qr.find((l) => l.uid === i);
  }
  return { onStackTop: t };
}
function Ao(e, n) {
  const r = P(vr.zIndex);
  return me(e, (t) => {
    t && (vr.zIndex += n, r.value = vr.zIndex);
  }, { immediate: !0 }), { zIndex: r };
}
var Qt = {
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
    type: [
      String,
      Object,
      Boolean
    ],
    default: "body"
  },
  onOpen: V(),
  onOpened: V(),
  onClose: V(),
  onClosed: V(),
  onKeyEscape: V(),
  onClickOverlay: V(),
  "onUpdate:show": V(),
  onRouteChange: V()
}, lp = /* @__PURE__ */ Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function sp() {
  const { bindParent: e, parentProvider: n, index: r } = In(lp);
  return {
    index: r,
    popup: n,
    bindPopup: e
  };
}
function ay() {
  const { bindChildren: e, childProviders: n, length: r } = Bn(lp);
  return {
    length: r,
    popupItems: n,
    bindPopupItems: e
  };
}
var iy = Object.defineProperty, Vd = Object.getOwnPropertySymbols, ly = Object.prototype.hasOwnProperty, sy = Object.prototype.propertyIsEnumerable, Ld = (e, n, r) => n in e ? iy(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, uy = (e, n) => {
  for (var r in n || (n = {})) ly.call(n, r) && Ld(e, r, n[r]);
  if (Vd)
    for (var r of Vd(n)) sy.call(n, r) && Ld(e, r, n[r]);
  return e;
}, { name: dy, n: mr, classes: Al } = oe("popup"), La = te({
  name: dy,
  inheritAttrs: !1,
  props: Qt,
  setup(e, { slots: n, attrs: r }) {
    const t = U0(() => e.show, !0), { zIndex: o } = Ao(() => e.show, 3), a = C(() => {
      var p;
      return (p = e.zIndex) != null ? p : o.value;
    }), { onStackTop: i } = Wu(() => e.show, a), { disabled: l } = zt(), { bindPopupItems: s } = ay();
    Mo(() => e.show, () => e.lockScroll), me(() => e.show, (p) => {
      S(p ? e.onOpen : e.onClose);
    }), s({ show: C(() => e.show) }), xe(() => window, "keydown", v), ey(() => S(e.onRouteChange));
    function u() {
      const { closeOnClickOverlay: p, onClickOverlay: h } = e;
      S(h), p && S(e["onUpdate:show"], !1);
    }
    function d() {
      const { overlayClass: p = "", overlayStyle: h } = e;
      return j("div", {
        class: Al(mr("overlay"), p),
        style: uy({ zIndex: a.value - 1 }, h),
        onClick: u
      }, null);
    }
    function c() {
      return Ke(j("div", Xe({
        class: Al(mr("content"), mr(`--${e.position}`), [e.defaultStyle, mr("--content-background-color")], [e.defaultStyle, mr("$-elevation--3")], [e.safeArea, mr("--safe-area")], [e.safeAreaTop, mr("--safe-area-top")]),
        style: { zIndex: a.value },
        role: "dialog",
        "aria-modal": "true"
      }, r), [t.value && S(n.default)]), [[yr, e.show]]);
    }
    function f() {
      return j(bn, {
        name: mr("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, { default: () => [Ke(j("div", {
        class: Al(mr("$--box"), mr(), [!e.overlay, mr("--pointer-events-none")]),
        style: { zIndex: a.value - 2 }
      }, [e.overlay && d(), j(bn, { name: e.transition || mr(`$-pop-${e.position}`) }, { default: () => [c()] })]), [[yr, e.show]])] });
    }
    function v(p) {
      !i() || p.key !== "Escape" || !e.show || (S(e.onKeyEscape), e.closeOnKeyEscape && (Ze(p), S(e["onUpdate:show"], !1)));
    }
    return () => {
      const { teleport: p } = e;
      return p ? j(Hr, {
        to: p,
        disabled: l.value
      }, { default: () => [f()] }) : f();
    };
  }
});
de(La);
fe(La, Qt);
var hA = La, ut = La, cy = Object.defineProperty, fy = Object.defineProperties, vy = Object.getOwnPropertyDescriptors, Fd = Object.getOwnPropertySymbols, py = Object.prototype.hasOwnProperty, my = Object.prototype.propertyIsEnumerable, Hd = (e, n, r) => n in e ? cy(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, up = (e, n) => {
  for (var r in n || (n = {})) py.call(n, r) && Hd(e, r, n[r]);
  if (Fd)
    for (var r of Fd(n)) my.call(n, r) && Hd(e, r, n[r]);
  return e;
}, gy = (e, n) => fy(e, vy(n)), { n: dp } = oe("ripple"), Ud = 250;
function hy(e) {
  const { zIndex: n, position: r } = Ur(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function jd(e) {
  return "touches" in e;
}
function by(e, n) {
  const { top: r, left: t } = kn(e), { clientWidth: o, clientHeight: a } = e, i = Math.sqrt(o ** 2 + a ** 2) / 2, l = i * 2, s = jd(n) ? n.touches[0].clientX - t : o / 2, u = jd(n) ? n.touches[0].clientY - r : a / 2, d = (o - i * 2) / 2, c = (a - i * 2) / 2;
  return {
    x: s - i,
    y: u - i,
    centerX: d,
    centerY: c,
    size: l
  };
}
function qu(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !vr.enableRipple) return;
  const r = () => {
    n.tasker = null;
    const { x: t, y: o, centerX: a, centerY: i, size: l } = by(this, e), s = document.createElement("div");
    s.classList.add(dp()), s.style.opacity = "0", s.style.transform = `translate(${t}px, ${o}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), hy(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(r, 30);
}
function ga() {
  const e = this._ripple, n = () => {
    const r = this.querySelectorAll(`.${dp()}`);
    if (!r.length) return;
    const t = r[r.length - 1], o = Ud - performance.now() + Number(t.dataset.createdAt);
    window.setTimeout(() => {
      t.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = t.parentNode) == null ? void 0 : a.removeChild(t);
      }, Ud);
    }, o);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function cp() {
  if (!z0() || !vr.enableRipple) return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
var ha = !1;
function yy(e) {
  ha || !(e.key === " " || e.key === "Enter") || (qu.call(this, e), ha = !0);
}
function Yd() {
  ha && (ga.call(this), ha = !1);
}
function wy(e, n) {
  var r;
  e._ripple = gy(up({ tasker: null }, (r = n.value) != null ? r : {}), { removeRipple: ga.bind(e) }), e.addEventListener("touchstart", qu, { passive: !0 }), e.addEventListener("touchmove", cp, { passive: !0 }), e.addEventListener("dragstart", ga, { passive: !0 }), e.addEventListener("keydown", yy), e.addEventListener("keyup", Yd), e.addEventListener("blur", Yd), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function ky(e) {
  e.removeEventListener("touchstart", qu), e.removeEventListener("touchmove", cp), e.removeEventListener("dragstart", ga), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function $y(e, n) {
  var r, t, o, a, i, l;
  const s = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (t = n.value) == null ? void 0 : t.disabled
  };
  (s.color !== ((o = e._ripple) == null ? void 0 : o.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = up({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
var fp = {
  mounted: wy,
  unmounted: ky,
  updated: $y,
  install(e) {
    e.directive("ripple", this);
  }
}, bA = fp, vn = fp;
function vp(e) {
  return e ? !!(e === "desktop" && pa() || e === "mobile" && !pa()) : !1;
}
function Cy(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, t) => {
    const [o, a] = t.split(":").map((i) => i.trim());
    return r[Nu(o)] = a, r;
  }, {}) : {};
}
function Sy(e) {
  const { value: n } = e._hover, r = Cy(e);
  Object.keys(n).forEach((t) => {
    const o = Nu(t);
    n[o] != null && r[o] && (e._hover.rawStyle[o] = r[o]);
  });
}
function Xu(e, n) {
  Object.keys(n).forEach((r) => {
    const t = n[r];
    t != null && (e.style[r] = t);
  });
}
function Py(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function pp(e) {
  e?._hover != null && (Py(e), Xu(e, e._hover.rawStyle));
}
function mp() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, Yn(e)) {
    e(this._hover.hovering);
    return;
  }
  Xu(this, e);
}
function gp() {
  if (this._hover.hovering = !1, Yn(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  pp(this);
}
function hp(e, n) {
  var r, t;
  const { arg: o, value: a } = n;
  vp(o) || (e._hover = {
    value: a,
    hovering: (t = (r = e._hover) == null ? void 0 : r.hovering) != null ? t : !1,
    rawStyle: {}
  }, Sy(e), e.addEventListener("mouseenter", mp), e.addEventListener("mouseleave", gp));
}
function bp(e, n) {
  vp(n.arg) || (pp(e), e.removeEventListener("mouseenter", mp), e.removeEventListener("mouseleave", gp));
}
function Oy(e, n) {
  e._hover && bp(e, n);
}
function zy(e, n) {
  return !Yn(n.value) && e._hover.hovering;
}
function Ty(e, n) {
  hp(e, n), zy(e, n) && Xu(e, n.value);
}
var yp = {
  mounted: hp,
  unmounted: bp,
  beforeUpdate: Oy,
  updated: Ty,
  install(e) {
    e.directive("hover", this);
  }
}, yA = yp, jn = yp, wp = {
  hovering: Boolean,
  focusing: Boolean,
  color: String
}, { name: Ey, n: Iy, classes: By } = oe("hover-overlay");
function Dy(e, n) {
  return b(), k("div", {
    class: g(e.classes(e.n(), [e.hovering, e.n("--hovering")], [e.focusing && !e.inMobile(), e.n("--focusing")])),
    style: J({ color: e.color })
  }, null, 6);
}
var kp = te({
  name: Ey,
  props: wp,
  setup: () => ({
    n: Iy,
    classes: By,
    inMobile: pa
  })
});
kp.render = Dy;
var Fa = kp;
de(Fa);
fe(Fa, wp);
function ur() {
  const e = P(!1);
  return {
    hovering: e,
    handleHovering: (r) => {
      e.value = r;
    }
  };
}
var wA = Fa, Gn = Fa;
function My(e) {
  const { left: n } = kn(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Kd(e) {
  const { top: n } = kn(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Nl(e) {
  const { transform: n } = Ur(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function dt(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const r = /(scroll|auto)/, { overflowY: t, overflow: o } = Ur(n);
    if (r.test(t) || r.test(o)) return n;
  }
  return window;
}
function Ay(e) {
  const n = [];
  let r = e;
  for (; !Xv(r); )
    r = dt(r), n.push(r);
  return n;
}
function $p(e, n) {
  if (Sn(e)) {
    const r = document.querySelector(e);
    return rr(!!r, n, "target element cannot found"), r;
  }
  return rr(Zl(e), n, 'type of prop "target" should be an element object'), e;
}
function Ny() {
  const { width: e, height: n } = kn(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
var Ry = (e) => Sn(e) && e.endsWith("rem"), Vy = (e) => Sn(e) && e.endsWith("px") || nr(e), Ly = (e) => Sn(e) && e.endsWith("vw"), Fy = (e) => Sn(e) && e.endsWith("vh"), Hy = (e) => Sn(e) && e.endsWith("vmin"), Uy = (e) => Sn(e) && e.endsWith("vmax"), fn = (e) => {
  if (qv(e)) return Number(e);
  if (Vy(e)) return +e.replace("px", "");
  if (!Er()) return 0;
  const { vw: n, vh: r, vMin: t, vMax: o } = Ny();
  if (Ly(e)) return +e.replace("vw", "") * n / 100;
  if (Fy(e)) return +e.replace("vh", "") * r / 100;
  if (Hy(e)) return +e.replace("vmin", "") * t / 100;
  if (Uy(e)) return +e.replace("vmax", "") * o / 100;
  if (Ry(e)) {
    const a = +e.replace("rem", ""), i = Ur(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return Sn(e) ? Z(e) : 0;
}, ze = (e) => {
  if (e != null)
    return qv(e) ? `${e}px` : String(e);
}, _n = (e, n = 1) => {
  if (e == null) return;
  const r = ze(e), t = r.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(r) * n}${t}`;
};
function go(e, { top: n = 0, left: r = 0, duration: t = 300, animation: o }) {
  const a = Date.now(), i = kt(e), l = Ru(e);
  return new Promise((s) => {
    const u = () => {
      const d = (Date.now() - a) / t;
      if (d < 1) {
        const c = i + (n - i) * o(d), f = l + (r - l) * o(d);
        e.scrollTo(f, c), requestAnimationFrame(u);
      } else
        e.scrollTo(r, n), s();
    };
    requestAnimationFrame(u);
  });
}
function Cp(e) {
  return Object.entries(e ?? {}).reduce((n, [r, t]) => {
    const o = r.startsWith("--") ? r : `--${Gv(r)}`;
    return n[o] = t, n;
  }, {});
}
function ba(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
function jy(e) {
  let n = e;
  for (; n && n !== document.documentElement; ) {
    if (Ur(n).display === "none") return !0;
    n = n.parentNode;
  }
  return !1;
}
function Sp(e, n) {
  !e || !n || (e.scrollTop = n.offsetTop - e.clientHeight / 2 + n.offsetHeight / 2);
}
var Wd = [
  "button",
  "input",
  "select",
  "textarea",
  "[tabindex]",
  "[href]"
].map((e) => `${e}:not([disabled])`).join(", ");
function Gu(e, n, r, t) {
  const o = Array.from(n.querySelectorAll(Wd)).filter((s) => !jy(s));
  if (!o.length) return;
  const a = [e, ...Array.from(e.querySelectorAll(Wd))].findIndex((s) => s === document.activeElement) !== -1, i = Array.from(o).findIndex((s) => s === document.activeElement);
  if (r === "ArrowDown") {
    if (a && i === -1 || i === o.length - 1) {
      l(o[0]);
      return;
    }
    if (i !== -1 && i < o.length - 1) {
      l(o[i + 1]);
      return;
    }
  }
  if (r === "ArrowUp") {
    if (a && i === -1 || i === 0) {
      l(o[o.length - 1]);
      return;
    }
    i > 0 && l(o[i - 1]);
  }
  function l(s) {
    t && !t(document.activeElement, s, a) || s.focus();
  }
}
var pn = {
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
}, Yy = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: Ky, n: Wy, classes: qy } = oe("icon");
function Xy(e, n) {
  return b(), we(Xt(e.isURL(e.name) ? "img" : "i"), {
    class: g(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], `${e.namespace}--set`, [
      e.isURL(e.name),
      e.n("image"),
      `${e.namespace}-${e.nextName}`
    ], [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass])),
    style: J({
      color: e.color,
      "transition-duration": `${e.toNumber(e.transition)}ms`,
      width: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      height: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      fontSize: e.toSizeUnit(e.size)
    }),
    src: e.isURL(e.name) ? e.nextName : null,
    onClick: e.onClick
  }, null, 8, [
    "class",
    "style",
    "src",
    "onClick"
  ]);
}
var Pp = te({
  name: Ky,
  props: pn,
  setup(e) {
    const n = P(""), r = P(!1);
    me(() => e.name, t, { immediate: !0 });
    function t(o, a) {
      return Yy(this, null, function* () {
        const { transition: i } = e;
        if (a == null || Z(i) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Ne(), setTimeout(() => {
          a != null && (n.value = o), r.value = !1;
        }, Z(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: r,
      n: Wy,
      classes: qy,
      isURL: F0,
      toNumber: Z,
      toSizeUnit: ze
    };
  }
});
Pp.render = Xy;
var Ha = Pp;
de(Ha);
fe(Ha, pn);
var kA = Ha, Je = Ha, { name: Gy, n: Zy, classes: Jy } = oe("action-sheet");
function Qy(e, n) {
  const r = x("var-icon"), t = x("maybe-v-node"), o = x("var-hover-overlay"), a = _e("ripple"), i = _e("hover");
  return Ke((b(), k("div", {
    class: g(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
    style: J({ color: e.color })
  }, [
    e.isString(e.icon) ? (b(), we(r, {
      key: 0,
      class: g(e.n("action-icon")),
      namespace: e.namespace,
      name: e.icon,
      size: e.iconSize
    }, null, 8, [
      "class",
      "namespace",
      "name",
      "size"
    ])) : e.icon ? (b(), k("span", {
      key: 1,
      class: g(e.n("action-icon"))
    }, [j(t, { is: e.renderIcon() }, null, 8, ["is"])], 2)) : q("v-if", !0),
    L("div", { class: g(e.n("action-name")) }, ve(e.name), 3),
    j(o, { hovering: e.disabled ? !1 : e.hovering }, null, 8, ["hovering"])
  ], 6)), [[a, { disabled: e.disabled }], [
    i,
    e.handleHovering,
    "desktop"
  ]]);
}
var Op = te({
  name: Gy,
  components: {
    MaybeVNode: lr,
    VarHoverOverlay: Gn,
    VarIcon: Je
  },
  directives: {
    Ripple: vn,
    Hover: jn
  },
  props: {
    name: String,
    className: String,
    disabled: Boolean,
    color: String,
    namespace: String,
    iconSize: [String, Number],
    icon: [
      String,
      Object,
      Function
    ]
  },
  setup(e) {
    const { hovering: n, handleHovering: r } = ur();
    function t() {
      return ir(e.icon);
    }
    return {
      hovering: n,
      isString: Sn,
      n: Zy,
      classes: Jy,
      handleHovering: r,
      renderIcon: t
    };
  }
});
Op.render = Qy;
var xy = Op, _y = Object.defineProperty, qd = Object.getOwnPropertySymbols, e1 = Object.prototype.hasOwnProperty, n1 = Object.prototype.propertyIsEnumerable, Xd = (e, n, r) => n in e ? _y(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, r1 = (e, n) => {
  for (var r in n || (n = {})) e1.call(n, r) && Xd(e, r, n[r]);
  if (qd)
    for (var r of qd(n)) n1.call(n, r) && Xd(e, r, n[r]);
  return e;
}, zp = r1({
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
}, Fe(Qt, [
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
  "onRouteChange",
  "onKeyEscape"
])), { name: t1, n: o1, classes: a1 } = oe("action-sheet");
function i1(e, n) {
  const r = x("var-action-item"), t = x("var-popup");
  return b(), we(t, {
    show: e.show,
    "onUpdate:show": n[0] || (n[0] = (o) => e.show = o),
    position: "bottom",
    class: g(e.n("popup-radius")),
    overlay: e.overlay,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    "lock-scroll": e.lockScroll,
    "close-on-click-overlay": e.closeOnClickOverlay,
    "close-on-key-escape": e.closeOnKeyEscape,
    teleport: e.teleport,
    "safe-area": e.safeArea,
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onRouteChange: e.onRouteChange,
    onKeyEscape: e.onKeyEscape
  }, {
    default: ue(() => [L("div", Xe({ class: e.classes(e.n(), e.n("$--box")) }, e.$attrs), [H(e.$slots, "title", {}, () => {
      var o;
      return [L("div", { class: g(e.n("title")) }, ve((o = e.title) != null ? o : (e.pt ? e.pt : e.t)("actionSheetTitle")), 3)];
    }), H(e.$slots, "actions", {}, () => [(b(!0), k(Be, null, Ye(e.actions, (o) => (b(), we(r, {
      key: o.name,
      name: o.name,
      namespace: o.namespace,
      icon: o.icon,
      "icon-size": o.iconSize,
      "class-name": o.className,
      color: o.color,
      onClick: (a) => e.handleSelect(o)
    }, null, 8, [
      "name",
      "namespace",
      "icon",
      "icon-size",
      "class-name",
      "color",
      "onClick"
    ]))), 128))])], 16)]),
    _: 3
  }, 8, [
    "show",
    "class",
    "overlay",
    "overlay-class",
    "overlay-style",
    "lock-scroll",
    "close-on-click-overlay",
    "close-on-key-escape",
    "teleport",
    "safe-area",
    "onOpen",
    "onClose",
    "onClosed",
    "onOpened",
    "onRouteChange",
    "onKeyEscape"
  ]);
}
var Tp = te({
  name: t1,
  directives: { Ripple: vn },
  components: {
    VarPopup: ut,
    VarActionItem: xy
  },
  inheritAttrs: !1,
  props: zp,
  setup(e) {
    const n = wn(e, "show"), { t: r } = kr();
    function t(o) {
      if (o.disabled) return;
      const { closeOnClickAction: a, onSelect: i } = e;
      S(i, o), a && (n.value = !1);
    }
    return {
      show: n,
      pt: r,
      t: gn,
      n: o1,
      classes: a1,
      handleSelect: t
    };
  }
});
Tp.render = i1;
var No = Tp, l1 = Object.defineProperty, Gd = Object.getOwnPropertySymbols, s1 = Object.prototype.hasOwnProperty, u1 = Object.prototype.propertyIsEnumerable, Zd = (e, n, r) => n in e ? l1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Jd = (e, n) => {
  for (var r in n || (n = {})) s1.call(n, r) && Zd(e, r, n[r]);
  if (Gd)
    for (var r of Gd(n)) u1.call(n, r) && Zd(e, r, n[r]);
  return e;
}, et, Zu = {};
function d1(e = {}) {
  return Jd(Jd({}, Zu), e);
}
function pt(e) {
  return Er() ? new Promise((n) => {
    pt.close();
    const r = b0(d1(e));
    r.teleport = "body", et = r;
    const { unmountInstance: t } = Jt(No, r, {
      onSelect: (o) => {
        S(r.onSelect, o), n(o);
      },
      onClose: () => {
        S(r.onClose), n("close");
      },
      onClosed: () => {
        S(r.onClosed), t(), et === r && (et = null);
      },
      onRouteChange: () => {
        t(), et === r && (et = null);
      },
      "onUpdate:show": (o) => {
        r.show = o;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
pt.setDefaultOptions = function(e) {
  Zu = e;
};
pt.resetDefaultOptions = function() {
  Zu = {};
};
pt.close = function() {
  if (et != null) {
    const e = et;
    et = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
pt.Component = No;
de(No);
de(No, pt);
fe(pt, zp);
var $A = No, ns = pt, Ep = {
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
    type: [
      Boolean,
      String,
      Number
    ],
    default: !1
  },
  onClose: V()
}, { name: c1, n: f1, classes: v1 } = oe("alert"), p1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  danger: "error"
};
function m1(e, n) {
  const r = x("var-icon");
  return b(), k("div", {
    class: g(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), e.n(`--${e.type}`), e.formatElevation(e.elevation, 2))),
    style: J({ "background-color": e.color }),
    role: "alert"
  }, [
    e.isInternalType || e.$slots.icon ? (b(), k("div", {
      key: 0,
      class: g(e.n("icon"))
    }, [H(e.$slots, "icon", {}, () => [e.isInternalType ? (b(), we(r, {
      key: 0,
      name: e.iconTypeMap[e.type]
    }, null, 8, ["name"])) : q("v-if", !0)])], 2)) : q("v-if", !0),
    H(e.$slots, "content", {}, () => [L("div", { class: g(e.n("content")) }, [e.title || e.$slots.title ? (b(), k("div", {
      key: 0,
      class: g(e.n("title"))
    }, [H(e.$slots, "title", {}, () => [Le(ve(e.title), 1)])], 2)) : q("v-if", !0), e.message || e.$slots.default ? (b(), k("div", {
      key: 1,
      class: g(e.n("message"))
    }, [H(e.$slots, "default", {}, () => [Le(ve(e.message), 1)])], 2)) : q("v-if", !0)], 2)]),
    e.closeable ? (b(), k("div", {
      key: 1,
      class: g(e.n("close-icon")),
      onClick: n[0] || (n[0] = (...t) => e.handleClose && e.handleClose(...t))
    }, [H(e.$slots, "close-icon", {}, () => [j(r, { name: "close-circle" })])], 2)) : q("v-if", !0)
  ], 6);
}
var Ip = te({
  name: c1,
  components: { VarIcon: Je },
  props: Ep,
  setup(e) {
    const n = C(() => [
      "info",
      "success",
      "danger",
      "warning"
    ].includes(e.type));
    function r(t) {
      S(e.onClose, t);
    }
    return {
      n: f1,
      classes: v1,
      iconTypeMap: p1,
      isInternalType: n,
      formatElevation: Pn,
      handleClose: r
    };
  }
});
Ip.render = m1;
var Ua = Ip;
de(Ua);
fe(Ua, Ep);
var CA = Ua, rs = Ua, Bp = {
  type: {
    type: String,
    default: "primary"
  },
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  textColor: String,
  title: String,
  titlePosition: {
    type: String,
    default: "left"
  },
  elevation: {
    type: [
      Boolean,
      String,
      Number
    ],
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
}, { name: g1, n: h1, classes: b1 } = oe("app-bar");
function y1(e, n) {
  return b(), k(Be, null, [L("div", Xe({
    ref: "appBar",
    class: e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.type === "surface", e.n("--surface")], [e.size === "large", e.n("--large")], [e.round, e.n("--round")], [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], e.formatElevation(e.elevation, 3)),
    style: e.rootStyles
  }, e.$attrs), [L("div", { class: g(e.n("toolbar")) }, [
    L("div", { class: g(e.n("left")) }, [H(e.$slots, "left"), e.titlePosition === "left" ? (b(), k("div", {
      key: 0,
      class: g(e.n("title")),
      style: J({ paddingLeft: e.paddingLeft })
    }, [H(e.$slots, "default", {}, () => [Le(ve(e.title), 1)])], 6)) : q("v-if", !0)], 2),
    e.titlePosition === "center" ? (b(), k("div", {
      key: 0,
      class: g(e.n("title"))
    }, [H(e.$slots, "default", {}, () => [Le(ve(e.title), 1)])], 2)) : q("v-if", !0),
    L("div", { class: g(e.n("right")) }, [e.titlePosition === "right" ? (b(), k("div", {
      key: 0,
      class: g(e.n("title")),
      style: J({ paddingRight: e.paddingRight })
    }, [H(e.$slots, "default", {}, () => [Le(ve(e.title), 1)])], 6)) : q("v-if", !0), H(e.$slots, "right")], 2)
  ], 2), H(e.$slots, "content")], 16), e.fixed && e.placeholder ? (b(), k("div", {
    key: 0,
    class: g(e.n("placeholder")),
    style: J({ height: e.placeholderHeight })
  }, null, 6)) : q("v-if", !0)], 64);
}
var Dp = te({
  name: g1,
  props: Bp,
  setup(e, { slots: n }) {
    const r = P(null), t = P(), o = P(), a = P(), i = C(() => {
      const { image: u, color: d, textColor: c, imageLinearGradient: f, zIndex: v } = e;
      return u != null ? {
        "background-image": `${f ? `linear-gradient(${f}), ` : ""}url(${u})`,
        "background-position": "center center",
        "background-size": "cover",
        "z-index": v
      } : {
        background: d,
        color: c,
        "z-index": v
      };
    });
    wr(s), En(() => {
      l(), s();
    }), qt(l);
    function l() {
      t.value = n.left ? 0 : void 0, o.value = n.right ? 0 : void 0;
    }
    function s() {
      if (!e.fixed || !e.placeholder) return;
      const { height: u } = kn(r.value);
      a.value = ze(u);
    }
    return {
      rootStyles: i,
      paddingLeft: t,
      paddingRight: o,
      n: h1,
      classes: b1,
      formatElevation: Pn,
      appBar: r,
      placeholderHeight: a
    };
  }
});
Dp.render = y1;
var ja = Dp;
de(ja);
fe(ja, Bp);
var SA = ja, ts = ja, Mp = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: w1, n: k1 } = oe("form-details"), $1 = { key: 0 }, C1 = { key: 0 };
function S1(e, n) {
  return b(), we(bn, { name: e.n() }, {
    default: ue(() => [e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (b(), k("div", {
      key: 0,
      class: g(e.n())
    }, [L("div", { class: g(e.n("error-message")) }, [j(bn, { name: e.n("message") }, {
      default: ue(() => [e.errorMessage ? (b(), k("div", $1, ve(e.errorMessage), 1)) : q("v-if", !0)]),
      _: 1
    }, 8, ["name"])], 2), L("div", { class: g(e.n("extra-message")) }, [j(bn, { name: e.n("message") }, {
      default: ue(() => [H(e.$slots, "extra-message", {}, () => [e.extraMessage ? (b(), k("div", C1, ve(e.extraMessage), 1)) : q("v-if", !0)])]),
      _: 3
    }, 8, ["name"])], 2)], 2)) : q("v-if", !0)]),
    _: 3
  }, 8, ["name"]);
}
var Ap = te({
  name: w1,
  props: Mp,
  setup: () => ({ n: k1 })
});
Ap.render = S1;
var Ya = Ap;
de(Ya);
fe(Ya, Mp);
var PA = Ya, Hn = Ya, P1 = Object.defineProperty, O1 = Object.defineProperties, z1 = Object.getOwnPropertyDescriptors, Qd = Object.getOwnPropertySymbols, T1 = Object.prototype.hasOwnProperty, E1 = Object.prototype.propertyIsEnumerable, xd = (e, n, r) => n in e ? P1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, I1 = (e, n) => {
  for (var r in n || (n = {})) T1.call(n, r) && xd(e, r, n[r]);
  if (Qd)
    for (var r of Qd(n)) E1.call(n, r) && xd(e, r, n[r]);
  return e;
}, B1 = (e, n) => O1(e, z1(n)), Np = /* @__PURE__ */ Symbol("FORM_BIND_FORM_ITEM_KEY");
function Kn() {
  const { parentProvider: e, index: n, bindParent: r } = In(Np), t = St();
  return {
    index: n,
    form: e,
    bindForm: r ? (o) => {
      r(B1(I1({}, o), { instance: t }));
    } : null
  };
}
function D1() {
  const { childProviders: e, length: n, bindChildren: r } = Bn(Np);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var Rp = /* @__PURE__ */ Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Vp = /* @__PURE__ */ Symbol("SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY");
function M1() {
  const { childProviders: e, length: n, bindChildren: r } = Bn(Rp);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
function A1() {
  const { childProviders: e, bindChildren: n } = Bn(Vp);
  return {
    swipeResizeListeners: e,
    bindSwipeResizeListeners: n
  };
}
function N1() {
  const { parentProvider: e, bindParent: n } = In(Vp);
  return {
    swipeResizeDispatcher: e,
    bindSwipeResizeDispatcher: n
  };
}
var Ro = {
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
  textarea: Boolean,
  textColor: String,
  focusColor: String,
  blurColor: String,
  isError: Boolean,
  formDisabled: Boolean,
  formReadonly: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  clearable: Boolean,
  cursor: String,
  composing: Boolean,
  onClick: V(),
  onClear: V()
}, R1 = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: V1, n: Rl, classes: L1 } = oe("field-decorator"), F1 = ["for"];
function H1(e, n) {
  const r = x("var-icon");
  return b(), k("div", {
    class: g(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
  }, [L("div", {
    class: g(e.classes(e.n("controller"), [e.isFocusing, e.n("--focus")], [e.isError, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], [!e.line, e.n("--bottom-border-radius")])),
    style: J({
      color: e.color,
      cursor: e.cursor,
      overflow: e.isFloating ? "visible" : "hidden",
      "--field-decorator-middle-offset-left": e.middleOffsetLeft,
      "--field-decorator-middle-offset-width": e.middleOffsetWidth,
      "--field-decorator-middle-offset-height": e.middleOffsetHeight
    })
  }, [
    L("div", { class: g(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")])) }, [H(e.$slots, "prepend-icon")], 2),
    L("div", {
      ref: "middleEl",
      class: g(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
    }, [H(e.$slots, "default")], 2),
    e.placeholder && e.hint ? (b(), k("label", {
      key: 0,
      class: g(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocusing, e.n("--focus")], [e.hintCenter, e.n("--hint-center")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.isError, e.n("--error")], [e.transitionDisabled, e.n("--transition-disabled")], e.computePlaceholderState())),
      style: J({ color: e.color }),
      for: e.id
    }, [L("span", null, ve(e.placeholder), 1)], 14, F1)) : q("v-if", !0),
    L("div", { class: g(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")])) }, [e.clearable && !e.isEmpty(e.value) && !e.readonly && !e.formReadonly ? H(e.$slots, "clear-icon", {
      key: 0,
      clear: e.handleClear
    }, () => [j(r, {
      class: g(e.n("clear-icon")),
      "var-field-decorator-cover": "",
      name: "close-circle",
      onClick: e.handleClear
    }, null, 8, ["class", "onClick"])]) : q("v-if", !0), H(e.$slots, "append-icon")], 2)
  ], 6), e.line ? (b(), k(Be, { key: 0 }, [e.variant === "outlined" ? (b(), k("fieldset", {
    key: 0,
    class: g(e.classes(e.n("line"), [e.isFocusing, e.n("--line-focus")], [e.isError, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
    style: J({ borderColor: e.color })
  }, [L("legend", {
    class: g(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
    style: J({ width: e.legendWidth })
  }, [e.placeholder && e.hint ? (b(), we(Hr, {
    key: 0,
    to: "body"
  }, [L("span", {
    ref: "placeholderTextEl",
    class: g(e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")]))
  }, ve(e.placeholder), 3)])) : q("v-if", !0)], 6)], 6)) : (b(), k("div", {
    key: 1,
    class: g(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
    style: J({ background: e.isError ? void 0 : e.blurColor })
  }, [L("div", {
    class: g(e.classes(e.n("dot"), [e.isFocusing, e.n("--line-focus")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
    style: J({ background: e.isError ? void 0 : e.focusColor })
  }, null, 6)], 6))], 64)) : q("v-if", !0)], 2);
}
var Lp = te({
  name: V1,
  components: { VarIcon: Je },
  props: Ro,
  setup(e) {
    const n = P(null), r = P(null), t = P(""), o = P("0px"), a = P("0px"), i = P("0px"), l = P(!0), s = C(() => e.hint && (!Or(e.value) || e.isFocusing)), { popup: u, bindPopup: d } = sp(), { bindSwipeResizeDispatcher: c } = N1(), f = C(() => e.isError ? void 0 : e.isFocusing ? e.focusColor : e.blurColor);
    wr(m), En(() => {
      m(), Ne().then(() => {
        l.value = !1;
      });
    }), qt(m), S(d, null), S(c, { onResize() {
      Ne().then(m);
    } }), u && me(() => u.show.value, (y) => R1(null, null, function* () {
      y && (yield Xn(), m());
    }));
    function v() {
      const { hint: y, value: $, composing: w } = e;
      if (!y && (!Or($) || w)) return Rl("--placeholder-hidden");
      if (s.value) return Rl("--placeholder-hint");
    }
    function p(y) {
      S(e.onClear, y);
    }
    function h(y) {
      S(e.onClick, y);
    }
    function m() {
      if (o.value = `${r.value.offsetLeft}px`, a.value = `${r.value.offsetWidth}px`, i.value = `${r.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
        const y = Ur(n.value), $ = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
        t.value = `calc(${y.width} * 0.75 + ${$} * 2)`;
      }
    }
    return {
      placeholderTextEl: n,
      middleEl: r,
      middleOffsetLeft: o,
      middleOffsetWidth: a,
      middleOffsetHeight: i,
      color: f,
      legendWidth: t,
      isFloating: s,
      transitionDisabled: l,
      resize: m,
      computePlaceholderState: v,
      n: Rl,
      classes: L1,
      isEmpty: Or,
      handleClear: p,
      handleClick: h
    };
  }
});
Lp.render = H1;
var Ka = Lp;
de(Ka);
fe(Ka, Ro);
var OA = Ka, ho = Ka, U1 = Object.defineProperty, j1 = Object.defineProperties, Y1 = Object.getOwnPropertyDescriptors, _d = Object.getOwnPropertySymbols, K1 = Object.prototype.hasOwnProperty, W1 = Object.prototype.propertyIsEnumerable, ec = (e, n, r) => n in e ? U1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, q1 = (e, n) => {
  for (var r in n || (n = {})) K1.call(n, r) && ec(e, r, n[r]);
  if (_d)
    for (var r of _d(n)) W1.call(n, r) && ec(e, r, n[r]);
  return e;
}, X1 = (e, n) => j1(e, Y1(n)), Wa = X1(q1({
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
  ariaLabel: String,
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
  rules: [
    Array,
    Function,
    Object
  ],
  enterkeyhint: String,
  preventAutoFill: {
    type: Boolean,
    default: !0
  },
  inputmode: String,
  tabindex: String,
  onFocus: V(),
  onBlur: V(),
  onInput: V(),
  onChange: V(),
  onClear: V(),
  "onUpdate:modelValue": V()
}, Fe(Ro, [
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
}), { name: G1, n: Z1, classes: J1 } = oe("input"), Q1 = [
  "aria-label",
  "placeholder",
  "enterkeyhint"
], x1 = [
  "id",
  "aria-label",
  "autocomplete",
  "disabled",
  "readonly",
  "type",
  "value",
  "placeholder",
  "maxlength",
  "rows",
  "enterkeyhint",
  "inputmode",
  "tabindex"
], _1 = [
  "id",
  "aria-label",
  "autocomplete",
  "disabled",
  "readonly",
  "type",
  "value",
  "placeholder",
  "maxlength",
  "enterkeyhint",
  "tabindex",
  "inputmode"
];
function ew(e, n) {
  const r = x("var-field-decorator"), t = x("var-form-details");
  return b(), k("div", {
    class: g(e.classes(e.n(), e.n("$--box"))),
    onMousedown: n[12] || (n[12] = (...o) => e.handleMousedown && e.handleMousedown(...o))
  }, [j(r, yt(Aa({
    value: e.modelValue,
    id: e.id,
    size: e.size,
    variant: e.variant,
    placeholder: e.placeholder,
    ariaLabel: e.ariaLabel,
    line: e.line,
    hint: e.hint,
    textColor: e.textColor,
    focusColor: e.focusColor,
    blurColor: e.blurColor,
    isFocusing: e.isForceFocusingEffect != null ? e.isForceFocusingEffect : e.isFocusing,
    isError: e.isForceErrorEffect != null ? e.isForceErrorEffect : !!e.errorMessage,
    formDisabled: e.formDisabled,
    formReadonly: e.formReadonly,
    disabled: e.disabled,
    readonly: e.readonly,
    clearable: e.clearable,
    cursor: e.cursor,
    composing: e.isComposing,
    hintCenter: !e.textarea,
    onClick: e.handleClick,
    onClear: e.handleClear
  })), Pr({
    "clear-icon": ue(({ clear: o }) => [H(e.$slots, "clear-icon", { clear: o })]),
    "append-icon": ue(() => [H(e.$slots, "append-icon")]),
    default: ue(() => [e.normalizedType === "password" && e.preventAutoFill ? (b(), k("input", {
      key: 0,
      tabindex: "-1",
      "aria-label": e.ariaLabel,
      class: g(e.n("autocomplete")),
      placeholder: e.hint ? void 0 : e.placeholder,
      style: J({ "--input-placeholder-color": e.placeholderColor }),
      enterkeyhint: e.enterkeyhint
    }, null, 14, Q1)) : q("v-if", !0), e.textarea ? (b(), k("textarea", {
      key: 1,
      id: e.id,
      ref: "el",
      "aria-label": e.ariaLabel,
      class: g(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.errorMessage, e.n("--caret-error")])),
      autocomplete: e.autocomplete ? e.autocomplete : "new-password",
      disabled: e.formDisabled || e.disabled,
      readonly: e.formReadonly || e.readonly,
      type: e.normalizedType,
      value: e.modelValue,
      placeholder: e.hint ? void 0 : e.placeholder,
      maxlength: e.maxlength,
      rows: e.rows,
      enterkeyhint: e.enterkeyhint,
      inputmode: e.inputmode != null ? e.inputmode : e.type === "number" ? "decimal" : void 0,
      tabindex: e.tabindex,
      style: J({
        color: e.errorMessage ? void 0 : e.textColor,
        caretColor: e.errorMessage ? void 0 : e.focusColor,
        resize: e.resize ? "vertical" : "none",
        "--input-placeholder-color": e.placeholderColor
      }),
      onFocus: n[0] || (n[0] = (...o) => e.handleFocus && e.handleFocus(...o)),
      onBlur: n[1] || (n[1] = (...o) => e.handleBlur && e.handleBlur(...o)),
      onInput: n[2] || (n[2] = (...o) => e.handleInput && e.handleInput(...o)),
      onChange: n[3] || (n[3] = (...o) => e.handleChange && e.handleChange(...o)),
      onCompositionstart: n[4] || (n[4] = (...o) => e.handleCompositionStart && e.handleCompositionStart(...o)),
      onCompositionend: n[5] || (n[5] = (...o) => e.handleCompositionEnd && e.handleCompositionEnd(...o))
    }, null, 46, x1)) : (b(), k("input", {
      key: 2,
      id: e.id,
      ref: "el",
      "aria-label": e.ariaLabel,
      class: g(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.errorMessage, e.n("--caret-error")])),
      autocomplete: e.autocomplete ? e.autocomplete : "new-password",
      disabled: e.formDisabled || e.disabled,
      readonly: e.formReadonly || e.readonly,
      type: e.normalizedType,
      value: e.modelValue,
      placeholder: e.hint ? void 0 : e.placeholder,
      maxlength: e.maxlength,
      enterkeyhint: e.enterkeyhint,
      tabindex: e.tabindex,
      inputmode: e.inputmode != null ? e.inputmode : e.type === "number" ? "decimal" : void 0,
      style: J({
        color: e.errorMessage ? void 0 : e.textColor,
        caretColor: e.errorMessage ? void 0 : e.focusColor,
        "--input-placeholder-color": e.placeholderColor
      }),
      onFocus: n[6] || (n[6] = (...o) => e.handleFocus && e.handleFocus(...o)),
      onBlur: n[7] || (n[7] = (...o) => e.handleBlur && e.handleBlur(...o)),
      onInput: n[8] || (n[8] = (...o) => e.handleInput && e.handleInput(...o)),
      onChange: n[9] || (n[9] = (...o) => e.handleChange && e.handleChange(...o)),
      onCompositionstart: n[10] || (n[10] = (...o) => e.handleCompositionStart && e.handleCompositionStart(...o)),
      onCompositionend: n[11] || (n[11] = (...o) => e.handleCompositionEnd && e.handleCompositionEnd(...o))
    }, null, 46, _1))]),
    _: 2
  }, [e.$slots["prepend-icon"] ? {
    name: "prepend-icon",
    fn: ue(() => [H(e.$slots, "prepend-icon")]),
    key: "0"
  } : void 0]), 1040), e.isShowFormDetails ? (b(), we(t, {
    key: 0,
    "error-message": e.errorMessage,
    "extra-message": e.maxlengthText
  }, Pr({ _: 2 }, [e.$slots["extra-message"] ? {
    name: "extra-message",
    fn: ue(() => [H(e.$slots, "extra-message")]),
    key: "0"
  } : void 0]), 1032, ["error-message", "extra-message"])) : q("v-if", !0)], 34);
}
var Fp = te({
  name: G1,
  components: {
    VarFormDetails: Hn,
    VarFieldDecorator: ho
  },
  props: Wa,
  setup(e) {
    const n = Qv(), r = P(null), t = P(!1), o = P(!1), { bindForm: a, form: i } = Kn(), { errorMessage: l, validateWithTrigger: s, validate: u, resetValidation: d } = Jn(), c = C(() => e.disabled || e.readonly ? "" : "text"), f = C(() => e.type === "number" ? "text" : e.type), v = C(() => {
      const { maxlength: X, modelValue: ae } = e;
      return X ? Or(ae) ? `0 / ${X}` : `${String(ae).length}/${X}` : "";
    }), p = C(() => {
      const { hint: X, blurColor: ae, focusColor: Te } = e;
      if (!X)
        return l.value ? "var(--field-decorator-error-color)" : t.value ? Te || "var(--field-decorator-focus-color)" : ae || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    S(a, {
      reset: N,
      validate: A,
      resetValidation: d
    }), En(() => {
      e.autofocus && I();
    });
    function h(X) {
      Ne(() => {
        const { validateTrigger: ae, rules: Te, modelValue: ce } = e;
        s(ae, X, Te, ce);
      });
    }
    function m(X) {
      t.value = !0, S(e.onFocus, X), h("onFocus");
    }
    function y(X) {
      t.value = !1, S(e.onBlur, X), h("onBlur");
    }
    function $(X) {
      const ae = X.target;
      let { value: Te } = ae;
      e.type === "number" && (Te = M(Te));
      const ce = E(Te);
      return ce === e.modelValue && (ae.value = ce), ce;
    }
    function w() {
      o.value = !0;
    }
    function z(X) {
      o.value && (o.value = !1, X.target.dispatchEvent(new Event("input")));
    }
    function T(X) {
      if (o.value) return;
      const ae = $(X);
      S(e["onUpdate:modelValue"], ae), S(e.onInput, ae, X), h("onInput");
    }
    function O(X) {
      const ae = D($(X));
      e.modelModifiers.trim && S(e["onUpdate:modelValue"], ae), S(e.onChange, ae, X), h("onChange");
    }
    function R() {
      const { disabled: X, readonly: ae, clearable: Te, onClear: ce } = e;
      i?.disabled.value || i?.readonly.value || X || ae || !Te || (S(e["onUpdate:modelValue"], ""), S(ce, ""), h("onClear"));
    }
    function U(X) {
      const { disabled: ae, onClick: Te } = e;
      i?.disabled.value || ae || (S(Te, X), h("onClick"));
    }
    function M(X) {
      const ae = X.indexOf("-"), Te = X.indexOf(".");
      return ae > -1 && (X = ae === 0 ? "-" + X.replace(/-/g, "") : X.replace(/-/g, "")), Te > -1 && (X = X.slice(0, Te + 1) + X.slice(Te).replace(/\./g, "")), X.replace(/[^-0-9.]/g, "");
    }
    function D(X) {
      return e.modelModifiers.trim ? X.trim() : X;
    }
    function E(X) {
      return e.maxlength ? X.slice(0, Z(e.maxlength)) : X;
    }
    function B(X) {
      const { disabled: ae } = e;
      i?.disabled.value || ae || X.target === r.value || (I(), Ze(X));
    }
    function N() {
      S(e["onUpdate:modelValue"], ""), d();
    }
    function A() {
      return u(e.rules, e.modelValue);
    }
    function I() {
      var X;
      (X = r.value) == null || X.focus();
    }
    function F() {
      r.value.blur();
    }
    function Q() {
      r.value.select();
    }
    return {
      el: r,
      id: n,
      isFocusing: t,
      isComposing: o,
      errorMessage: l,
      placeholderColor: p,
      normalizedType: f,
      cursor: c,
      maxlengthText: v,
      formDisabled: i?.disabled,
      formReadonly: i?.readonly,
      n: Z1,
      classes: J1,
      isEmpty: Or,
      handleFocus: m,
      handleBlur: y,
      handleInput: T,
      handleChange: O,
      handleClear: R,
      handleClick: U,
      handleCompositionStart: w,
      handleCompositionEnd: z,
      handleMousedown: B,
      validate: A,
      resetValidation: d,
      reset: N,
      focus: I,
      blur: F,
      select: Q
    };
  }
});
Fp.render = ew;
var Vo = Fp;
de(Vo);
fe(Vo, Wa);
var zA = Vo, Lt = Vo, Hp = {
  modelValue: {
    type: [
      String,
      Number,
      Boolean,
      Object,
      Array
    ],
    default: !1
  },
  checkedValue: {
    type: [
      String,
      Number,
      Boolean,
      Object,
      Array
    ],
    default: !0
  },
  uncheckedValue: {
    type: [
      String,
      Number,
      Boolean,
      Object,
      Array
    ],
    default: !1
  },
  checkedColor: String,
  uncheckedColor: String,
  disabled: Boolean,
  readonly: Boolean,
  indeterminate: Boolean,
  tabindex: String,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: [
    Array,
    Function,
    Object
  ],
  onClick: V(),
  onChange: V(),
  "onUpdate:modelValue": V(),
  "onUpdate:indeterminate": V()
}, Up = /* @__PURE__ */ Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function nw() {
  const { bindChildren: e, childProviders: n, length: r } = Bn(Up);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function rw() {
  const { bindParent: e, parentProvider: n, index: r } = In(Up);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var nc = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: tw, n: ow, classes: aw } = oe("checkbox"), iw = [
  "aria-checked",
  "aria-disabled",
  "tabindex"
];
function lw(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), o = x("var-form-details"), a = _e("hover"), i = _e("ripple");
  return b(), k("div", { class: g(e.n("wrap")) }, [L("div", {
    ref: "checkbox",
    role: "checkbox",
    "aria-checked": e.isIndeterminate ? "mixed" : e.checked,
    "aria-disabled": e.formDisabled || e.disabled,
    class: g(e.n()),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocus: n[1] || (n[1] = (l) => e.isFocusing = !0),
    onBlur: n[2] || (n[2] = (l) => e.isFocusing = !1),
    onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
  }, [Ke((b(), k("div", {
    class: g(e.classes(e.n("action"), [
      e.checked || e.isIndeterminate,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: J({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor })
  }, [
    e.isIndeterminate ? (b(), k("span", {
      key: 0,
      class: g(e.n("icon")),
      style: J({ fontSize: e.toSizeUnit(e.iconSize) })
    }, [H(e.$slots, "indeterminate-icon", {}, () => [j(r, { name: "minus-box" })])], 6)) : q("v-if", !0),
    e.checked && !e.isIndeterminate ? (b(), k("span", {
      key: 1,
      class: g(e.n("icon")),
      style: J({ fontSize: e.toSizeUnit(e.iconSize) })
    }, [H(e.$slots, "checked-icon", {}, () => [j(r, { name: "checkbox-marked" })])], 6)) : q("v-if", !0),
    !e.checked && !e.isIndeterminate ? (b(), k("span", {
      key: 2,
      class: g(e.n("icon")),
      style: J({ fontSize: e.toSizeUnit(e.iconSize) })
    }, [H(e.$slots, "unchecked-icon", {}, () => [j(r, { name: "checkbox-blank-outline" })])], 6)) : q("v-if", !0),
    j(t, {
      hovering: !e.disabled && !e.formDisabled && e.hovering,
      focusing: !e.disabled && !e.formDisabled && e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 6)), [[
    a,
    e.handleHovering,
    "desktop"
  ], [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]]), e.$slots.default ? (b(), k("div", {
    key: 0,
    class: g(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...l) => e.handleTextClick && e.handleTextClick(...l))
  }, [H(e.$slots, "default", { checked: e.checked })], 2)) : q("v-if", !0)], 42, iw), j(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var jp = te({
  name: tw,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarIcon: Je,
    VarFormDetails: Hn,
    VarHoverOverlay: Gn
  },
  props: Hp,
  setup(e) {
    const n = P(null), r = P(!1), t = wn(e, "modelValue"), o = wn(e, "indeterminate"), a = C(() => t.value === e.checkedValue), i = C(() => e.checkedValue), { checkboxGroup: l, bindCheckboxGroup: s } = rw(), { hovering: u, handleHovering: d } = ur(), { form: c, bindForm: f } = Kn(), { errorMessage: v, validateWithTrigger: p, validate: h, resetValidation: m } = Jn(), y = {
      checkedValue: i,
      checked: a,
      sync: O,
      validate: E,
      resetValidation: m,
      reset: R
    };
    S(s, y), S(f, y), xe(() => window, "keydown", M), xe(() => window, "keyup", D);
    function $(B) {
      Ne(() => {
        const { validateTrigger: N, rules: A, modelValue: I } = e;
        p(N, B, A, I);
      });
    }
    function w(B) {
      return nc(this, null, function* () {
        const { checkedValue: N, onChange: A } = e;
        t.value = B, B === N ? l?.onChecked(N) : l?.onUnchecked(N), yield Ne(), S(A, B, o.value), $("onChange");
      });
    }
    function z(B) {
      return nc(this, null, function* () {
        const { disabled: N, readonly: A, checkedValue: I, uncheckedValue: F, onClick: Q } = e;
        if (c?.disabled.value || N || (S(Q, B), c?.readonly.value || A)) return;
        if (o.value === !0) {
          o.value = !1, yield Ne(), S(e.onChange, t.value, o.value), $("onChange");
          return;
        }
        const X = l ? l.checkedCount.value >= Number(l.max.value) : !1;
        !a.value && X || w(a.value ? F : I);
      });
    }
    function T() {
      n.value.focus();
    }
    function O(B) {
      const { checkedValue: N, uncheckedValue: A } = e;
      t.value = B.includes(N) ? N : A;
    }
    function R() {
      t.value = e.uncheckedValue, m();
    }
    function U(B) {
      const { checkedValue: N, uncheckedValue: A } = e;
      [N, A].includes(B) || (B = a.value ? A : N), w(B);
    }
    function M(B) {
      if (!r.value) return;
      const { key: N } = B;
      (N === "Enter" || N === " ") && Ze(B), N === "Enter" && n.value.click();
    }
    function D(B) {
      r.value && B.key === " " && (Ze(B), n.value.click());
    }
    function E() {
      return h(e.rules, e.modelValue);
    }
    return {
      checkbox: n,
      isFocusing: r,
      isIndeterminate: o,
      checked: a,
      errorMessage: v,
      checkboxGroupErrorMessage: l?.errorMessage,
      formDisabled: c?.disabled,
      formReadonly: c?.readonly,
      hovering: u,
      n: ow,
      classes: aw,
      handleHovering: d,
      handleClick: z,
      handleTextClick: T,
      toSizeUnit: ze,
      toggle: U,
      reset: R,
      validate: E,
      resetValidation: m
    };
  }
});
jp.render = lw;
var qa = jp;
de(qa);
fe(qa, Hp);
var TA = qa, ct = qa, Yp = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  option: Object,
  childrenTrigger: Boolean,
  highlight: Boolean,
  onKeyArrowX: V()
}, Kp = /* @__PURE__ */ Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function sw() {
  const { length: e, childProviders: n, bindChildren: r } = Bn(Kp);
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: r
  };
}
function uw() {
  const { index: e, parentProvider: n, bindParent: r } = In(Kp);
  return rr(!!r, "MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: r
  };
}
var dw = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: cw, n: fw, classes: vw } = oe("menu-option"), pw = ["tabindex"];
function mw(e, n) {
  const r = x("var-checkbox"), t = x("maybe-v-node"), o = x("var-icon"), a = x("var-hover-overlay"), i = _e("ripple"), l = _e("hover");
  return Ke((b(), k("div", {
    ref: "root",
    class: g(e.classes(e.n(), e.n("$--box"), e.n(`--${e.size}`), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")], [e.childrenTrigger, e.n("--children-trigger")])),
    tabindex: e.disabled ? void 0 : "-1",
    onClick: n[3] || (n[3] = (...s) => e.handleClick && e.handleClick(...s)),
    onFocus: n[4] || (n[4] = (s) => e.isFocusing = !0),
    onBlur: n[5] || (n[5] = (s) => e.isFocusing = !1)
  }, [
    L("div", { class: g(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])) }, null, 2),
    e.multiple ? (b(), we(r, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (s) => e.optionSelected = s),
      indeterminate: e.optionIndeterminate,
      "onUpdate:indeterminate": n[1] || (n[1] = (s) => e.optionIndeterminate = s),
      disabled: e.disabled,
      onClick: n[2] || (n[2] = Rn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, [
      "modelValue",
      "indeterminate",
      "disabled",
      "onChange"
    ])) : q("v-if", !0),
    H(e.$slots, "default", {}, () => [L("div", { class: g(e.classes(e.n("text"))) }, [j(t, {
      is: e.labelVNode,
      class: g(e.n("$--ellipsis"))
    }, null, 8, ["is", "class"])], 2)]),
    e.childrenTrigger ? (b(), k("div", {
      key: 1,
      class: g(e.n("arrow"))
    }, [j(o, {
      "var-menu-option-cover": "",
      class: g(e.n("arrow-icon")),
      name: "chevron-right"
    }, null, 8, ["class"])], 2)) : q("v-if", !0),
    j(a, {
      hovering: (e.hovering || e.highlight) && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 42, pw)), [[i, { disabled: e.disabled || !e.ripple }], [
    l,
    e.handleHovering,
    "desktop"
  ]]);
}
var Wp = te({
  name: cw,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarCheckbox: ct,
    VarHoverOverlay: Gn,
    VarIcon: Je,
    MaybeVNode: lr
  },
  props: Yp,
  setup(e) {
    const n = P(), r = P(), t = P(!1), o = P(!1), a = P(!1), i = C(() => o.value), l = C(() => a.value), s = C(() => e.value), u = C(() => e.disabled), d = C(() => e.ripple), { menuSelect: c, bindMenuSelect: f } = uw(), { size: v, multiple: p, onSelect: h, computeLabel: m } = c, { hovering: y, handleHovering: $ } = ur(), w = C(() => {
      var D;
      return Yn(e.label) ? e.label((D = e.option) != null ? D : {
        label: e.label,
        value: e.value,
        disabled: e.disabled,
        ripple: e.ripple
      }, o.value) : e.label;
    }), z = {
      label: w,
      value: s,
      selected: i,
      disabled: u,
      ripple: d,
      indeterminate: l,
      sync: M
    };
    me([() => e.label, () => e.value], m), f(z), xe(() => window, "keydown", O), xe(() => window, "keyup", R);
    function T() {
      if (!e.disabled && !(!p.value && e.childrenTrigger)) {
        if (p.value && a.value) {
          a.value = !1, o.value = !1, h(z);
          return;
        }
        p.value && !a.value && (o.value = !o.value), h(z);
      }
    }
    function O(D) {
      var E;
      !t.value && !((E = r.value) != null && E.isFocusing) || ((D.key === "ArrowRight" || D.key === "ArrowLeft") && (Ze(D), S(e.onKeyArrowX, D.key)), t.value && ((D.key === " " || D.key === "Enter") && Ze(D), D.key === "Enter" && n.value.click()));
    }
    function R(D) {
      t.value && D.key === " " && (Ze(D), n.value.click());
    }
    function U() {
      return dw(this, null, function* () {
        yield Ne(), h(z);
      });
    }
    function M(D, E) {
      o.value = D, Do(E) && (a.value = E);
    }
    return {
      root: n,
      checkbox: r,
      optionSelected: o,
      optionIndeterminate: a,
      size: v,
      multiple: p,
      hovering: y,
      isFocusing: t,
      labelVNode: w,
      n: fw,
      classes: vw,
      handleHovering: $,
      handleClick: T,
      handleSelect: U
    };
  }
});
Wp.render = mw;
var Lo = Wp;
de(Lo);
fe(Lo, Yp);
var EA = Lo, Ft = Lo, Ju = {
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String,
    default: "click"
  },
  reference: [String, Object],
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
    type: [
      String,
      Object,
      Boolean
    ],
    default: "body"
  },
  sameWidth: Boolean,
  elevation: {
    type: [
      Boolean,
      String,
      Number
    ],
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
  "onUpdate:show": V(),
  cascadeOptimization: Boolean
};
var bo = "bottom", Xa = "right", Ga = "left", gw = "auto", Za = [
  "top",
  bo,
  Xa,
  Ga
], Ja = "start";
var hw = "clippingParents", bw = "viewport", rc = "popper", yw = "reference", tc = /* @__PURE__ */ Za.reduce(function(e, n) {
  return e.concat([n + "-" + Ja, n + "-end"]);
}, []), qp = /* @__PURE__ */ [].concat(Za, [gw]).reduce(function(e, n) {
  return e.concat([
    n,
    n + "-" + Ja,
    n + "-end"
  ]);
}, []), ww = "beforeRead", kw = "read", $w = "afterRead", Cw = "beforeMain", Sw = "main", Pw = "afterMain", Ow = "beforeWrite", zw = "write", Tw = "afterWrite", Ew = [
  ww,
  kw,
  $w,
  Cw,
  Sw,
  Pw,
  Ow,
  zw,
  Tw
];
function pr(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Vr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Xr(e) {
  return pr(e).getComputedStyle(e);
}
function $t(e) {
  return e instanceof pr(e).Element || e instanceof Element;
}
function hr(e) {
  return e instanceof pr(e).HTMLElement || e instanceof HTMLElement;
}
function Qu(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof pr(e).ShadowRoot || e instanceof ShadowRoot;
}
function Iw(e) {
  return [
    "table",
    "td",
    "th"
  ].indexOf(Vr(e)) >= 0;
}
function mt(e) {
  return (($t(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Qa(e) {
  return Vr(e) === "html" ? e : e.assignedSlot || e.parentNode || (Qu(e) ? e.host : null) || mt(e);
}
function os() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function oc(e) {
  return !hr(e) || Xr(e).position === "fixed" ? null : e.offsetParent;
}
function Bw(e) {
  var n = /firefox/i.test(os());
  if (/Trident/i.test(os()) && hr(e) && Xr(e).position === "fixed")
    return null;
  var r = Qa(e);
  for (Qu(r) && (r = r.host); hr(r) && ["html", "body"].indexOf(Vr(r)) < 0; ) {
    var t = Xr(r);
    if (t.transform !== "none" || t.perspective !== "none" || t.contain === "paint" || ["transform", "perspective"].indexOf(t.willChange) !== -1 || n && t.willChange === "filter" || n && t.filter && t.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function xu(e) {
  for (var n = pr(e), r = oc(e); r && Iw(r) && Xr(r).position === "static"; ) r = oc(r);
  return r && (Vr(r) === "html" || Vr(r) === "body" && Xr(r).position === "static") ? n : r || Bw(e) || n;
}
function lt(e) {
  return e.split("-")[0];
}
function yo(e) {
  return e.split("-")[1];
}
var uo = Math.max, ac = Math.min, Ht = Math.round, Dw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Mw(e, n) {
  var r = e.x, t = e.y, o = n.devicePixelRatio || 1;
  return {
    x: Ht(r * o) / o || 0,
    y: Ht(t * o) / o || 0
  };
}
function ic(e) {
  var n, r = e.popper, t = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, c = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, p = i.y, h = p === void 0 ? 0 : p, m = typeof d == "function" ? d({
    x: v,
    y: h
  }) : {
    x: v,
    y: h
  };
  v = m.x, h = m.y;
  var y = i.hasOwnProperty("x"), $ = i.hasOwnProperty("y"), w = Ga, z = "top", T = window;
  if (u) {
    var O = xu(r), R = "clientHeight", U = "clientWidth";
    if (O === pr(r) && (O = mt(r), Xr(O).position !== "static" && l === "absolute" && (R = "scrollHeight", U = "scrollWidth")), O = O, o === "top" || (o === "left" || o === "right") && a === "end") {
      z = bo;
      var M = c && O === T && T.visualViewport ? T.visualViewport.height : O[R];
      h -= M - t.height, h *= s ? 1 : -1;
    }
    if (o === "left" || (o === "top" || o === "bottom") && a === "end") {
      w = Xa;
      var D = c && O === T && T.visualViewport ? T.visualViewport.width : O[U];
      v -= D - t.width, v *= s ? 1 : -1;
    }
  }
  var E = Object.assign({ position: l }, u && Dw), B = d === !0 ? Mw({
    x: v,
    y: h
  }, pr(r)) : {
    x: v,
    y: h
  };
  if (v = B.x, h = B.y, s) {
    var N;
    return Object.assign({}, E, (N = {}, N[z] = $ ? "0" : "", N[w] = y ? "0" : "", N.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + h + "px)" : "translate3d(" + v + "px, " + h + "px, 0)", N));
  }
  return Object.assign({}, E, (n = {}, n[z] = $ ? h + "px" : "", n[w] = y ? v + "px" : "", n.transform = "", n));
}
function Aw(e) {
  var n = e.state, r = e.options, t = r.gpuAcceleration, o = t === void 0 ? !0 : t, a = r.adaptive, i = a === void 0 ? !0 : a, l = r.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: lt(n.placement),
    variation: yo(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: o,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, ic(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, ic(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-placement": n.placement });
}
var Xp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Aw,
  data: {}
}, Nw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function sa(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Nw[n];
  });
}
var Rw = {
  start: "end",
  end: "start"
};
function lc(e) {
  return e.replace(/start|end/g, function(n) {
    return Rw[n];
  });
}
function Gp() {
  return !/^((?!chrome|android).)*safari/i.test(os());
}
function Ut(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var t = e.getBoundingClientRect(), o = 1, a = 1;
  n && hr(e) && (o = e.offsetWidth > 0 && Ht(t.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ht(t.height) / e.offsetHeight || 1);
  var i = ($t(e) ? pr(e) : window).visualViewport, l = !Gp() && r, s = (t.left + (l && i ? i.offsetLeft : 0)) / o, u = (t.top + (l && i ? i.offsetTop : 0)) / a, d = t.width / o, c = t.height / a;
  return {
    width: d,
    height: c,
    top: u,
    right: s + d,
    bottom: u + c,
    left: s,
    x: s,
    y: u
  };
}
function _u(e) {
  var n = pr(e);
  return {
    scrollLeft: n.pageXOffset,
    scrollTop: n.pageYOffset
  };
}
function ed(e) {
  return Ut(mt(e)).left + _u(e).scrollLeft;
}
function Vw(e, n) {
  var r = pr(e), t = mt(e), o = r.visualViewport, a = t.clientWidth, i = t.clientHeight, l = 0, s = 0;
  if (o) {
    a = o.width, i = o.height;
    var u = Gp();
    (u || !u && n === "fixed") && (l = o.offsetLeft, s = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + ed(e),
    y: s
  };
}
function Lw(e) {
  var n, r = mt(e), t = _u(e), o = (n = e.ownerDocument) == null ? void 0 : n.body, a = uo(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = uo(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -t.scrollLeft + ed(e), s = -t.scrollTop;
  return Xr(o || r).direction === "rtl" && (l += uo(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function nd(e) {
  var n = Xr(e), r = n.overflow, t = n.overflowX, o = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + t);
}
function Zp(e) {
  return [
    "html",
    "body",
    "#document"
  ].indexOf(Vr(e)) >= 0 ? e.ownerDocument.body : hr(e) && nd(e) ? e : Zp(Qa(e));
}
function co(e, n) {
  var r;
  n === void 0 && (n = []);
  var t = Zp(e), o = t === ((r = e.ownerDocument) == null ? void 0 : r.body), a = pr(t), i = o ? [a].concat(a.visualViewport || [], nd(t) ? t : []) : t, l = n.concat(i);
  return o ? l : l.concat(co(Qa(i)));
}
function Fw(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n)) return !0;
  if (r && Qu(r)) {
    var t = n;
    do {
      if (t && e.isSameNode(t)) return !0;
      t = t.parentNode || t.host;
    } while (t);
  }
  return !1;
}
function as(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Hw(e, n) {
  var r = Ut(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function sc(e, n, r) {
  return n === "viewport" ? as(Vw(e, r)) : $t(n) ? Hw(n, r) : as(Lw(mt(e)));
}
function Uw(e) {
  var n = co(Qa(e)), r = ["absolute", "fixed"].indexOf(Xr(e).position) >= 0 && hr(e) ? xu(e) : e;
  return $t(r) ? n.filter(function(t) {
    return $t(t) && Fw(t, r) && Vr(t) !== "body";
  }) : [];
}
function jw(e, n, r, t) {
  var o = n === "clippingParents" ? Uw(e) : [].concat(n), a = [].concat(o, [r]), i = a[0], l = a.reduce(function(s, u) {
    var d = sc(e, u, t);
    return s.top = uo(d.top, s.top), s.right = ac(d.right, s.right), s.bottom = ac(d.bottom, s.bottom), s.left = uo(d.left, s.left), s;
  }, sc(e, i, t));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Yw(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Jp(e) {
  var n = e.reference, r = e.element, t = e.placement, o = t ? lt(t) : null, a = t ? yo(t) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (o) {
    case "top":
      s = {
        x: i,
        y: n.y - r.height
      };
      break;
    case bo:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case Xa:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case Ga:
      s = {
        x: n.x - r.width,
        y: l
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = o ? Yw(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Ja:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case "end":
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
      default:
    }
  }
  return s;
}
function Kw() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ww(e) {
  return Object.assign({}, Kw(), e);
}
function qw(e, n) {
  return n.reduce(function(r, t) {
    return r[t] = e, r;
  }, {});
}
function Qp(e, n) {
  n === void 0 && (n = {});
  var r = n, t = r.placement, o = t === void 0 ? e.placement : t, a = r.strategy, i = a === void 0 ? e.strategy : a, l = r.boundary, s = l === void 0 ? hw : l, u = r.rootBoundary, d = u === void 0 ? bw : u, c = r.elementContext, f = c === void 0 ? rc : c, v = r.altBoundary, p = v === void 0 ? !1 : v, h = r.padding, m = h === void 0 ? 0 : h, y = Ww(typeof m != "number" ? m : qw(m, Za)), $ = f === "popper" ? yw : rc, w = e.rects.popper, z = e.elements[p ? $ : f], T = jw($t(z) ? z : z.contextElement || mt(e.elements.popper), s, d, i), O = Ut(e.elements.reference), R = Jp({
    reference: O,
    element: w,
    strategy: "absolute",
    placement: o
  }), U = as(Object.assign({}, w, R)), M = f === "popper" ? U : O, D = {
    top: T.top - M.top + y.top,
    bottom: M.bottom - T.bottom + y.bottom,
    left: T.left - M.left + y.left,
    right: M.right - T.right + y.right
  }, E = e.modifiersData.offset;
  if (f === "popper" && E) {
    var B = E[o];
    Object.keys(D).forEach(function(N) {
      var A = ["right", "bottom"].indexOf(N) >= 0 ? 1 : -1, I = ["top", "bottom"].indexOf(N) >= 0 ? "y" : "x";
      D[N] += B[I] * A;
    });
  }
  return D;
}
function Xw(e, n) {
  n === void 0 && (n = {});
  var r = n, t = r.placement, o = r.boundary, a = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? qp : s, d = yo(t), c = d ? l ? tc : tc.filter(function(p) {
    return yo(p) === d;
  }) : Za, f = c.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = c);
  var v = f.reduce(function(p, h) {
    return p[h] = Qp(e, {
      placement: h,
      boundary: o,
      rootBoundary: a,
      padding: i
    })[lt(h)], p;
  }, {});
  return Object.keys(v).sort(function(p, h) {
    return v[p] - v[h];
  });
}
function Gw(e) {
  if (lt(e) === "auto") return [];
  var n = sa(e);
  return [
    lc(e),
    n,
    lc(n)
  ];
}
function Zw(e) {
  var n = e.state, r = e.options, t = e.name;
  if (!n.modifiersData[t]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, c = r.rootBoundary, f = r.altBoundary, v = r.flipVariations, p = v === void 0 ? !0 : v, h = r.allowedAutoPlacements, m = n.options.placement, y = lt(m) === m, $ = s || (y || !p ? [sa(m)] : Gw(m)), w = [m].concat($).reduce(function(G, ne) {
      return G.concat(lt(ne) === "auto" ? Xw(n, {
        placement: ne,
        boundary: d,
        rootBoundary: c,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: h
      }) : ne);
    }, []), z = n.rects.reference, T = n.rects.popper, O = /* @__PURE__ */ new Map(), R = !0, U = w[0], M = 0; M < w.length; M++) {
      var D = w[M], E = lt(D), B = yo(D) === Ja, N = ["top", bo].indexOf(E) >= 0, A = N ? "width" : "height", I = Qp(n, {
        placement: D,
        boundary: d,
        rootBoundary: c,
        altBoundary: f,
        padding: u
      }), F = N ? B ? Xa : Ga : B ? bo : "top";
      z[A] > T[A] && (F = sa(F));
      var Q = sa(F), X = [];
      if (a && X.push(I[E] <= 0), l && X.push(I[F] <= 0, I[Q] <= 0), X.every(function(G) {
        return G;
      })) {
        U = D, R = !1;
        break;
      }
      O.set(D, X);
    }
    if (R)
      for (var ae = p ? 3 : 1, Te = function(ne) {
        var pe = w.find(function(Oe) {
          var Y = O.get(Oe);
          if (Y) return Y.slice(0, ne).every(function(ie) {
            return ie;
          });
        });
        if (pe)
          return U = pe, "break";
      }, ce = ae; ce > 0 && Te(ce) !== "break"; ce--) ;
    n.placement !== U && (n.modifiersData[t]._skip = !0, n.placement = U, n.reset = !0);
  }
}
var Jw = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Zw,
  requiresIfExists: ["offset"],
  data: { _skip: !1 }
};
function Qw(e, n, r) {
  var t = lt(e), o = ["left", "top"].indexOf(t) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, n, { placement: e })) : r, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * o, ["left", "right"].indexOf(t) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function xw(e) {
  var n = e.state, r = e.options, t = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, i = qp.reduce(function(d, c) {
    return d[c] = Qw(c, n.rects, a), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[t] = i;
}
var _w = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: xw
};
function ek(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function nk(e) {
  return e === pr(e) || !hr(e) ? _u(e) : ek(e);
}
function rk(e) {
  var n = e.getBoundingClientRect(), r = Ht(n.width) / e.offsetWidth || 1, t = Ht(n.height) / e.offsetHeight || 1;
  return r !== 1 || t !== 1;
}
function tk(e, n, r) {
  r === void 0 && (r = !1);
  var t = hr(n), o = hr(n) && rk(n), a = mt(n), i = Ut(e, o, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (t || !t && !r) && ((Vr(n) !== "body" || nd(a)) && (l = nk(n)), hr(n) ? (s = Ut(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = ed(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function ok(e) {
  var n = Ut(e), r = e.offsetWidth, t = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - t) <= 1 && (t = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: t
  };
}
function ak(e) {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), t = [];
  e.forEach(function(a) {
    n.set(a.name, a);
  });
  function o(a) {
    r.add(a.name), [].concat(a.requires || [], a.requiresIfExists || []).forEach(function(i) {
      if (!r.has(i)) {
        var l = n.get(i);
        l && o(l);
      }
    }), t.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || o(a);
  }), t;
}
function ik(e) {
  var n = ak(e);
  return Ew.reduce(function(r, t) {
    return r.concat(n.filter(function(o) {
      return o.phase === t;
    }));
  }, []);
}
function lk(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function sk(e) {
  var n = e.reduce(function(r, t) {
    var o = r[t.name];
    return r[t.name] = o ? Object.assign({}, o, t, {
      options: Object.assign({}, o.options, t.options),
      data: Object.assign({}, o.data, t.data)
    }) : t, r;
  }, {});
  return Object.keys(n).map(function(r) {
    return n[r];
  });
}
var uc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function dc() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
  return !n.some(function(t) {
    return !(t && typeof t.getBoundingClientRect == "function");
  });
}
function uk(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, t = r === void 0 ? [] : r, o = n.defaultOptions, a = o === void 0 ? uc : o;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var d = {
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
    }, c = [], f = !1, v = {
      state: d,
      setOptions: function(y) {
        var $ = typeof y == "function" ? y(d.options) : y;
        h(), d.options = Object.assign({}, a, d.options, $), d.scrollParents = {
          reference: $t(l) ? co(l) : l.contextElement ? co(l.contextElement) : [],
          popper: co(s)
        };
        var w = ik(sk([].concat(t, d.options.modifiers)));
        return d.orderedModifiers = w.filter(function(z) {
          return z.enabled;
        }), p(), v.update();
      },
      forceUpdate: function() {
        if (!f) {
          var y = d.elements, $ = y.reference, w = y.popper;
          if (dc($, w)) {
            d.rects = {
              reference: tk($, xu(w), d.options.strategy === "fixed"),
              popper: ok(w)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(D) {
              return d.modifiersData[D.name] = Object.assign({}, D.data);
            });
            for (var z = 0; z < d.orderedModifiers.length; z++) {
              if (d.reset === !0) {
                d.reset = !1, z = -1;
                continue;
              }
              var T = d.orderedModifiers[z], O = T.fn, R = T.options, U = R === void 0 ? {} : R, M = T.name;
              typeof O == "function" && (d = O({
                state: d,
                options: U,
                name: M,
                instance: v
              }) || d);
            }
          }
        }
      },
      update: lk(function() {
        return new Promise(function(m) {
          v.forceUpdate(), m(d);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!dc(l, s)) return v;
    v.setOptions(u).then(function(m) {
      !f && u.onFirstUpdate && u.onFirstUpdate(m);
    });
    function p() {
      d.orderedModifiers.forEach(function(m) {
        var y = m.name, $ = m.options, w = $ === void 0 ? {} : $, z = m.effect;
        if (typeof z == "function") {
          var T = z({
            state: d,
            name: y,
            instance: v,
            options: w
          });
          c.push(T || function() {
          });
        }
      });
    }
    function h() {
      c.forEach(function(m) {
        return m();
      }), c = [];
    }
    return v;
  };
}
var Jo = { passive: !0 };
function dk(e) {
  var n = e.state, r = e.instance, t = e.options, o = t.scroll, a = o === void 0 ? !0 : o, i = t.resize, l = i === void 0 ? !0 : i, s = pr(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Jo);
  }), l && s.addEventListener("resize", r.update, Jo), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Jo);
    }), l && s.removeEventListener("resize", r.update, Jo);
  };
}
var ck = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: dk,
  data: {}
};
function fk(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Jp({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
var vk = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: fk,
  data: {}
};
function pk(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var t = n.styles[r] || {}, o = n.attributes[r] || {}, a = n.elements[r];
    !hr(a) || !Vr(a) || (Object.assign(a.style, t), Object.keys(o).forEach(function(i) {
      var l = o[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function mk(e) {
  var n = e.state, r = {
    popper: {
      position: n.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: { position: "absolute" },
    reference: {}
  };
  return Object.assign(n.elements.popper.style, r.popper), n.styles = r, n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow), function() {
    Object.keys(n.elements).forEach(function(t) {
      var o = n.elements[t], a = n.attributes[t] || {}, i = Object.keys(n.styles.hasOwnProperty(t) ? n.styles[t] : r[t]).reduce(function(l, s) {
        return l[s] = "", l;
      }, {});
      !hr(o) || !Vr(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var gk = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: pk,
  effect: mk,
  requires: ["computeStyles"]
}, hk = [
  ck,
  vk,
  Xp,
  gk
], bk = /* @__PURE__ */ uk({ defaultModifiers: hk }), yk = Object.defineProperty, wk = Object.defineProperties, kk = Object.getOwnPropertyDescriptors, cc = Object.getOwnPropertySymbols, $k = Object.prototype.hasOwnProperty, Ck = Object.prototype.propertyIsEnumerable, fc = (e, n, r) => n in e ? yk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Vl = (e, n) => {
  for (var r in n || (n = {})) $k.call(n, r) && fc(e, r, n[r]);
  if (cc)
    for (var r of cc(n)) Ck.call(n, r) && fc(e, r, n[r]);
  return e;
}, Ll = (e, n) => wk(e, kk(n)), vc = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
});
function xp(e) {
  const n = P(null), r = P(null), t = P({
    width: 0,
    height: 0
  }), o = wn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(F, Q) {
      S(Q ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = Ao(() => o.value, 1);
  Wu(() => o.value, a);
  let i = null, l, s = !1, u = !1, d = !0;
  xe(() => window, "keydown", B), me(() => [
    e.offsetX,
    e.offsetY,
    e.placement,
    e.strategy
  ], N), me(() => e.disabled, I), me(() => o.value, (F) => {
    F && N();
  }), wr(N), Tr(c), Bo(f);
  function c() {
    const F = M();
    i = bk(F, r.value, U()), F.addEventListener("mouseenter", h), F.addEventListener("mouseleave", m), F.addEventListener("click", w), document.addEventListener("click", z);
  }
  function f() {
    const F = M();
    F && (F.removeEventListener("mouseenter", h), F.removeEventListener("mouseleave", m), F.removeEventListener("click", w)), i.destroy(), document.removeEventListener("click", z);
  }
  function v() {
    const F = M();
    if (!F) return;
    const { width: Q, height: X } = Ur(F);
    t.value = {
      width: fn(Q),
      height: fn(X)
    };
  }
  function p() {
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
  function h() {
    e.trigger === "hover" && (u = !0, A());
  }
  function m() {
    return vc(this, null, function* () {
      e.trigger === "hover" && (u = !1, yield Xn(), !s && I());
    });
  }
  function y() {
    e.trigger === "hover" && (s = !0, e.cascadeOptimization && (d = !1));
  }
  function $() {
    return vc(this, null, function* () {
      e.trigger === "hover" && (s = !1, yield Xn(), !u && I());
    });
  }
  function w() {
    if (e.trigger === "click") {
      if (e.closeOnClickReference && o.value) {
        I();
        return;
      }
      A();
    }
  }
  function z(F) {
    const Q = M();
    if (Q && !Q.contains(F.target)) {
      if (e.trigger !== "click") return;
      T(), S(e.onClickOutside, F);
    }
  }
  function T() {
    I();
  }
  function O() {
    N(), S(e.onClosed);
  }
  function R() {
    const { offsetX: F, offsetY: Q, placement: X } = e;
    v();
    const ae = {
      x: fn(F),
      y: fn(Q)
    };
    switch (X) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: ae.x,
          distance: ae.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: ae.x,
          distance: ae.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: ae.x,
          distance: ae.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: ae.x,
          distance: -ae.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: ae.x,
          distance: -ae.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: ae.x,
          distance: -ae.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: ae.y,
          distance: ae.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: ae.y,
          distance: -ae.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: X,
          skidding: ae.y,
          distance: -ae.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: X,
          skidding: ae.x,
          distance: -ae.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: X,
          skidding: ae.x,
          distance: ae.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: X,
          skidding: ae.y,
          distance: ae.x
        };
    }
  }
  function U() {
    const { placement: F, skidding: Q, distance: X } = R();
    return {
      placement: F,
      modifiers: [
        Ll(Vl({}, Jw), { enabled: o.value }),
        Ll(Vl({}, _w), { options: { offset: [Q, X] } }),
        Ll(Vl({}, Xp), {
          options: {
            adaptive: !1,
            gpuAcceleration: !1
          },
          enabled: o.value
        }),
        {
          name: "applyTransformOrigin",
          enabled: o.value,
          phase: "beforeWrite",
          fn({ state: ae }) {
            ae.styles.popper.transformOrigin = p();
          }
        }
      ],
      strategy: e.strategy
    };
  }
  function M() {
    var F, Q;
    const X = (F = l ?? e.reference) != null ? F : n.value;
    return Sn(X) ? (Q = n.value) == null ? void 0 : Q.querySelector(X) : X;
  }
  function D(F) {
    d = F;
  }
  function E(F) {
    f(), l = F, c();
  }
  function B(F) {
    const { closeOnKeyEscape: Q = !1 } = e;
    F.key === "Escape" && Q && o.value && (Ze(F), I());
  }
  function N() {
    i.setOptions(U());
  }
  function A() {
    e.disabled || (o.value = !0, S(e["onUpdate:show"], !0));
  }
  function I() {
    d && (o.value = !1, S(e["onUpdate:show"], !1));
  }
  return {
    show: o,
    popover: r,
    zIndex: a,
    host: n,
    referenceSize: t,
    handlePopoverClose: T,
    handlePopoverMouseenter: y,
    handlePopoverMouseleave: $,
    handleClosed: O,
    setReference: E,
    setAllowClose: D,
    resize: N,
    open: A,
    close: I
  };
}
var { name: Sk, n: Pk, classes: Ok } = oe("menu");
function zk(e, n) {
  return b(), k("div", {
    ref: "host",
    class: g(e.classes(e.n(), e.n("$--box")))
  }, [H(e.$slots, "default"), (b(), we(Hr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [j(bn, {
    name: e.n(),
    onAfterEnter: e.onOpened,
    onAfterLeave: e.handleClosed,
    persisted: ""
  }, {
    default: ue(() => [Ke(L("div", {
      ref: "popover",
      style: J({
        zIndex: e.zIndex,
        width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.referenceSize.width)) : void 0
      }),
      class: g(e.classes(e.n("menu"), e.n("$--box"), e.n("$--scrollbar"), e.popoverClass, [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
      onClick: n[0] || (n[0] = Rn(() => {
      }, ["stop"])),
      onMouseenter: n[1] || (n[1] = (...r) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...r)),
      onMouseleave: n[2] || (n[2] = (...r) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...r))
    }, [H(e.$slots, "menu")], 38), [[yr, e.show]])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]))], 2);
}
var _p = te({
  name: Sk,
  props: Ju,
  setup(e) {
    const { disabled: n } = zt(), { popover: r, host: t, referenceSize: o, show: a, zIndex: i, handlePopoverMouseenter: l, handlePopoverMouseleave: s, handlePopoverClose: u, handleClosed: d, setAllowClose: c, open: f, close: v, resize: p, setReference: h } = xp(e);
    function m() {
      c(!0);
    }
    return {
      popover: r,
      host: t,
      referenceSize: o,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      allowClose: m,
      formatElevation: Pn,
      toSizeUnit: ze,
      n: Pk,
      classes: Ok,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: s,
      handlePopoverClose: u,
      handleClosed: d,
      resize: p,
      open: f,
      close: v,
      setReference: h
    };
  }
});
_p.render = zk;
var Fo = _p;
de(Fo);
fe(Fo, Ju);
var IA = Fo, jt = Fo;
function em(e) {
  const { multiple: n, modelValue: r, optionProviders: t, optionProvidersLength: o, optionIsIndeterminate: a } = e, i = P(""), l = P([]);
  me(r, f, { deep: !0 }), me(o, f);
  function s() {
    const v = n(), p = r();
    v && (l.value = p.map(u)), !v && !Or(p) && (i.value = u(p)), !v && Or(p) && (i.value = "");
  }
  function u(v) {
    var p;
    const h = t();
    let m = h.find(({ value: y }) => y.value === v);
    return m || (m = h.find(({ label: y }) => y.value === v)), (p = m?.label.value) != null ? p : "";
  }
  function d({ value: v, label: p }) {
    var h;
    return (h = v.value) != null ? h : p.value;
  }
  function c(v) {
    const p = n(), h = t();
    return p ? h.filter(({ selected: m }) => m.value).map(d) : d(v);
  }
  function f() {
    const v = n(), p = r(), h = t();
    v ? h.forEach((m) => m.sync(p.includes(d(m)), a ? a(m) : void 0)) : h.forEach((m) => m.sync(p === d(m))), s();
  }
  return {
    label: i,
    labels: l,
    getOptionProviderKey: d,
    computeLabel: s,
    getSelectedValue: c
  };
}
var Tk = Object.defineProperty, Ek = Object.defineProperties, Ik = Object.getOwnPropertyDescriptors, pc = Object.getOwnPropertySymbols, Bk = Object.prototype.hasOwnProperty, Dk = Object.prototype.propertyIsEnumerable, mc = (e, n, r) => n in e ? Tk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Mk = (e, n) => {
  for (var r in n || (n = {})) Bk.call(n, r) && mc(e, r, n[r]);
  if (pc)
    for (var r of pc(n)) Dk.call(n, r) && mc(e, r, n[r]);
  return e;
}, Ak = (e, n) => Ek(e, Ik(n)), ya = Ak(Mk({
  modelValue: {
    type: [
      String,
      Number,
      Boolean,
      Array
    ],
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
  childrenKey: {
    type: String,
    default: "children"
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
  "onUpdate:modelValue": V(),
  onSelect: V()
}, Fe(Ju, [
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
])), { onKeyEscape: V() }), Nk = Object.defineProperty, gc = Object.getOwnPropertySymbols, Rk = Object.prototype.hasOwnProperty, Vk = Object.prototype.propertyIsEnumerable, hc = (e, n, r) => n in e ? Nk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Lk = (e, n) => {
  for (var r in n || (n = {})) Rk.call(n, r) && hc(e, r, n[r]);
  if (gc)
    for (var r of gc(n)) Vk.call(n, r) && hc(e, r, n[r]);
  return e;
}, Fk = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: Hk, n: Uk } = oe("menu-children"), jk = { ref: "menuOptions" };
function Yk(e, n) {
  const r = x("var-menu-option"), t = x("var-menu-children"), o = x("var-menu");
  return b(), we(o, {
    ref: "menu",
    show: e.show,
    "onUpdate:show": n[1] || (n[1] = (a) => e.show = a),
    trigger: "hover",
    placement: "right-start",
    "cascade-optimization": "",
    "var-menu-children-cover": "",
    class: g(e.n()),
    disabled: e.disabled,
    teleport: !1,
    "close-on-click-reference": !1
  }, Pr({
    default: ue(() => [j(r, {
      ref: "trigger",
      "children-trigger": "",
      label: e.option[e.labelKey],
      value: e.option[e.valueKey],
      option: e.option,
      ripple: e.option.ripple,
      disabled: e.option.disabled,
      highlight: e.highlightOptions.some((a) => a.value === e.option.value),
      onKeyArrowX: e.handleArrowRight,
      onMouseenter: e.handleMouseenter
    }, null, 8, [
      "label",
      "value",
      "option",
      "ripple",
      "disabled",
      "highlight",
      "onKeyArrowX",
      "onMouseenter"
    ])]),
    _: 2
  }, [e.options.length ? {
    name: "menu",
    fn: ue(() => [L("div", jk, [(b(!0), k(Be, null, Ye(e.options, (a) => (b(), k(Be, { key: a[e.valueKey] }, [a[e.childrenKey] ? (b(), we(t, {
      key: 0,
      ref_for: !0,
      ref: "menuChildren",
      "parent-show": e.show,
      option: a,
      options: a[e.childrenKey],
      "highlight-options": e.highlightOptions,
      disabled: a.disabled,
      onKeyArrowX: e.handleArrowLeft,
      onKeyArrowRightOpen: (i) => e.allowChildrenClose(a),
      onMouseenter: (i) => e.allowChildrenClose(a)
    }, null, 8, [
      "parent-show",
      "option",
      "options",
      "highlight-options",
      "disabled",
      "onKeyArrowX",
      "onKeyArrowRightOpen",
      "onMouseenter"
    ])) : (b(), we(r, {
      key: 1,
      label: a[e.labelKey],
      value: a[e.valueKey],
      option: a,
      ripple: a.ripple,
      disabled: a.disabled,
      onKeyArrowX: e.handleArrowLeft,
      onMouseenter: n[0] || (n[0] = (i) => e.allowChildrenClose())
    }, null, 8, [
      "label",
      "value",
      "option",
      "ripple",
      "disabled",
      "onKeyArrowX"
    ]))], 64))), 128))], 512)]),
    key: "0"
  } : void 0]), 1032, [
    "show",
    "class",
    "disabled"
  ]);
}
var nm = te({
  name: Hk,
  components: {
    VarMenu: Fo,
    VarMenuOption: Lo
  },
  props: Lk({
    parentShow: Boolean,
    disabled: Boolean,
    option: {
      type: Object,
      required: !0
    },
    highlightOptions: Fe(ya, "options"),
    onKeyArrowX: V(),
    onKeyArrowRightOpen: V(),
    onMouseenter: V()
  }, Fe(ya, [
    "options",
    "valueKey",
    "labelKey",
    "childrenKey"
  ])),
  setup(e) {
    const n = P(!1), r = P(), t = P(), o = P(), a = P();
    me(() => e.parentShow, (f) => {
      f || (n.value = !1);
    }, { immediate: !0 });
    function i(f) {
      return Fk(this, null, function* () {
        var v;
        S(e.onKeyArrowX, f), f === "ArrowRight" && (S(e.onKeyArrowRightOpen), (v = r.value) == null || v.open(), yield it(), Gu(r.value.$el, o.value, "ArrowDown"));
      });
    }
    function l(f) {
      var v;
      f === "ArrowLeft" && (u(), s(), (v = t.value) == null || v.$el.focus());
    }
    function s() {
      var f;
      (f = r.value) == null || f.close();
    }
    function u() {
      var f;
      (f = r.value) == null || f.allowClose();
    }
    function d(f) {
      var v;
      (v = a.value) == null || v.forEach((p) => {
        if (p.allowClose(), f == null) {
          p.close();
          return;
        }
        p.option.value !== f.value && p.close();
      });
    }
    function c() {
      S(e.onMouseenter);
    }
    return {
      show: n,
      menu: r,
      trigger: t,
      menuOptions: o,
      menuChildren: a,
      n: Uk,
      close: s,
      handleArrowLeft: l,
      handleArrowRight: i,
      handleMouseenter: c,
      allowClose: u,
      allowChildrenClose: d
    };
  }
});
nm.render = Yk;
var Kk = nm, Wk = Object.defineProperty, qk = Object.defineProperties, Xk = Object.getOwnPropertyDescriptors, bc = Object.getOwnPropertySymbols, Gk = Object.prototype.hasOwnProperty, Zk = Object.prototype.propertyIsEnumerable, yc = (e, n, r) => n in e ? Wk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Jk = (e, n) => {
  for (var r in n || (n = {})) Gk.call(n, r) && yc(e, r, n[r]);
  if (bc)
    for (var r of bc(n)) Zk.call(n, r) && yc(e, r, n[r]);
  return e;
}, Qk = (e, n) => qk(e, Xk(n)), { name: xk, n: _k, classes: e$ } = oe("menu-select");
function n$(e, n) {
  const r = x("var-menu-children"), t = x("var-menu-option"), o = x("var-menu");
  return b(), we(o, {
    ref: "menu",
    show: e.show,
    "onUpdate:show": n[1] || (n[1] = (a) => e.show = a),
    tabindex: "-1",
    class: g(e.n()),
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
    onOpen: e.onOpen,
    onOpened: e.onOpened,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onClickOutside: e.onClickOutside
  }, {
    menu: ue(() => [L("div", {
      ref: "menuOptionsRef",
      class: g(e.classes(e.n("menu"), e.n("$--scrollbar"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
    }, [(b(!0), k(Be, null, Ye(e.options, (a) => (b(), k(Be, { key: a[e.valueKey] }, [a[e.childrenKey] ? (b(), we(r, {
      key: 0,
      ref_for: !0,
      ref: "menuChildren",
      "parent-show": e.show,
      option: a,
      options: a[e.childrenKey],
      "highlight-options": e.highlightOptions,
      disabled: a.disabled,
      onKeyArrowRightOpen: (i) => e.allowChildrenClose(a),
      onMouseenter: (i) => e.allowChildrenClose(a)
    }, null, 8, [
      "parent-show",
      "option",
      "options",
      "highlight-options",
      "disabled",
      "onKeyArrowRightOpen",
      "onMouseenter"
    ])) : (b(), we(t, {
      key: 1,
      label: a[e.labelKey],
      value: a[e.valueKey],
      option: a,
      ripple: a.ripple,
      disabled: a.disabled,
      onMouseenter: n[0] || (n[0] = (i) => e.allowChildrenClose())
    }, null, 8, [
      "label",
      "value",
      "option",
      "ripple",
      "disabled"
    ]))], 64))), 128)), H(e.$slots, "options")], 2)]),
    default: ue(() => [H(e.$slots, "default")]),
    _: 3
  }, 8, [
    "show",
    "class",
    "disabled",
    "trigger",
    "reference",
    "placement",
    "strategy",
    "offset-x",
    "offset-y",
    "teleport",
    "same-width",
    "elevation",
    "popover-class",
    "close-on-click-reference",
    "onOpen",
    "onOpened",
    "onClose",
    "onClosed",
    "onClickOutside"
  ]);
}
var rm = te({
  name: xk,
  components: {
    VarMenu: jt,
    VarMenuOption: Ft,
    VarMenuChildren: Kk
  },
  props: ya,
  setup(e) {
    const n = wn(e, "show"), r = P(), t = P(), o = P(), a = C(() => $(e.options)), { menuOptions: i, length: l, bindMenuOptions: s } = sw(), { computeLabel: u, getSelectedValue: d, getOptionProviderKey: c } = em({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => i,
      optionProvidersLength: () => l.value,
      optionIsIndeterminate(B) {
        var N;
        const A = p(B.value.value);
        if (!A) return !1;
        const I = ((N = A._children) != null ? N : []).filter((Q) => !Q.disabled), F = I.filter((Q) => e.modelValue.includes(Q.value));
        return F.length > 0 && F.length < I.length;
      }
    }), f = C(() => {
      const { multiple: B, modelValue: N } = e;
      if (B) return [];
      const A = a.value.find((Q) => Q.value === N), I = [];
      let F = A?._parent;
      for (; F; )
        I.push(F), F = F._parent;
      return I;
    });
    s({
      size: C(() => e.size),
      multiple: C(() => e.multiple),
      computeLabel: u,
      onSelect: w
    }), me(n, (B) => {
      B && Ne(v);
    }), xe(() => window, "keydown", T);
    function v() {
      const B = t.value;
      Sp(B, B?.querySelector(".var-menu-option--selected-color"));
    }
    function p(B) {
      return a.value.find((N) => N.value === B);
    }
    function h(B) {
      return i.find((N) => N.value.value === B);
    }
    function m(B) {
      return B[e.childrenKey];
    }
    function y(B) {
      const N = [];
      A(B);
      function A(I) {
        I.forEach((F) => {
          N.push(F);
          const Q = m(F);
          Q && A(Q);
        });
      }
      return N;
    }
    function $(B) {
      function N(A, I) {
        return A.map((F) => {
          F = Qk(Jk({}, F), { _rawOption: F }), I && (F._parent = I);
          const Q = m(F);
          if (Q) {
            const X = N(Q, F);
            F[e.childrenKey] = X, F._children = y(X);
          }
          return F;
        });
      }
      return y(N(B));
    }
    function w(B) {
      var N, A;
      const { multiple: I, closeOnSelect: F } = e, { value: Q, label: X, selected: ae, disabled: Te, ripple: ce } = B, G = p(Q.value);
      if (G) {
        const Oe = ((N = G._children) != null ? N : []).filter((Y) => !Y.disabled).map((Y) => Y.value);
        I && ae.value && (i.forEach((Y) => {
          Oe.includes(Y.value.value) && Y.sync(!0, !1);
        }), z(G)), I && !ae.value && (i.forEach((Y) => {
          Oe.includes(Y.value.value) && Y.sync(!1, !1);
        }), z(G));
      }
      const ne = d(B), pe = (A = G?._rawOption) != null ? A : {
        value: Q.value,
        label: X.value,
        disabled: Te.value,
        ripple: ce.value
      };
      S(e.onSelect, c(B), pe), S(e["onUpdate:modelValue"], ne), !I && F && (r.value.$el.focus(), M());
    }
    function z(B) {
      let N = B._parent;
      for (; N; ) {
        const A = h(N.value), I = m(N).filter((X) => !X.disabled), F = I.every((X) => !h(X.value).selected.value), Q = I.every((X) => h(X.value).selected.value);
        F ? A.sync(!1, !1) : Q ? A.sync(!0, !1) : A.sync(!1, !0), N = N._parent;
      }
    }
    function T(B) {
      if (e.disabled || !n.value) return;
      const { key: N } = B;
      if ([
        "Escape",
        "ArrowDown",
        "ArrowUp"
      ].includes(N) && Ze(B), N === "Escape") {
        r.value.$el.focus(), M(), S(e.onKeyEscape);
        return;
      }
      (N === "ArrowDown" || N === "ArrowUp") && Gu(r.value.$el, t.value, N, (A, I, F) => F ? !0 : O(A) === O(I));
    }
    function O(B) {
      var N, A;
      if (B.classList.contains("var-menu-option--children-trigger")) return (N = B.parentNode) == null ? void 0 : N.parentNode;
      if (B.classList.contains("var-checkbox")) {
        const I = (A = B.parentNode) == null ? void 0 : A.parentNode;
        if (I) return O(I);
      }
      return B.parentNode;
    }
    function R(B) {
      var N;
      (N = o.value) == null || N.forEach((A) => {
        if (A.allowClose(), B == null) {
          A.close();
          return;
        }
        A.option.value !== B.value && A.close();
      });
    }
    function U() {
      var B;
      (B = r.value) == null || B.open();
    }
    function M() {
      var B;
      (B = r.value) == null || B.close();
    }
    function D() {
      var B;
      (B = r.value) == null || B.resize();
    }
    function E(B) {
      var N;
      (N = r.value) == null || N.setReference(B);
    }
    return {
      show: n,
      menu: r,
      menuOptionsRef: t,
      menuChildren: o,
      highlightOptions: f,
      n: _k,
      classes: e$,
      allowChildrenClose: R,
      formatElevation: Pn,
      open: U,
      close: M,
      resize: D,
      setReference: E
    };
  }
});
rm.render = n$;
var xa = rm;
de(xa);
fe(xa, ya);
var BA = xa, Yt = xa, r$ = Object.defineProperty, wc = Object.getOwnPropertySymbols, t$ = Object.prototype.hasOwnProperty, o$ = Object.prototype.propertyIsEnumerable, kc = (e, n, r) => n in e ? r$(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, a$ = (e, n) => {
  for (var r in n || (n = {})) t$.call(n, r) && kc(e, r, n[r]);
  if (wc)
    for (var r of wc(n)) o$.call(n, r) && kc(e, r, n[r]);
  return e;
}, tm = a$({
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
    default: () => [
      "onInput",
      "onClear",
      "onChange"
    ]
  },
  getShow: Function,
  rules: [
    Array,
    Function,
    Object
  ],
  onFocus: V(),
  onBlur: V(),
  onInput: V(),
  onChange: V(),
  onClear: V(),
  onClick: V(),
  "onUpdate:modelValue": V()
}, Fe(Wa, [
  "size",
  "variant",
  "placeholder",
  "enterkeyhint",
  "tabindex",
  "line",
  "hint",
  "textColor",
  "focusColor",
  "blurColor",
  "clearable"
])), $c = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: i$, n: l$ } = oe("auto-complete"), s$ = ["tabindex"];
function u$(e, n) {
  const r = x("var-input"), t = x("var-menu-option"), o = x("var-menu-select"), a = x("var-form-details");
  return b(), k("div", {
    ref: "root",
    class: g(e.n()),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocusin: n[2] || (n[2] = (...i) => e.focus && e.focus(...i)),
    onClick: n[3] || (n[3] = (...i) => e.handleClick && e.handleClick(...i))
  }, [j(o, {
    show: e.isShowMenuSelect,
    "onUpdate:show": n[1] || (n[1] = (i) => e.isShowMenuSelect = i),
    "same-width": "",
    "auto-complete-cover": "",
    scrollable: "",
    trigger: "manual",
    placement: "bottom",
    disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
    class: g(e.n("menu-select")),
    "popover-class": e.variant === "standard" ? e.n("--standard-menu-margin") : e.variant === "filled" ? e.n("--filled-menu-margin") : "",
    "onUpdate:modelValue": e.handleAutoComplete,
    onKeyEscape: e.handleKeyEscape
  }, {
    options: ue(() => [L("div", { class: g(e.n("options")) }, [(b(!0), k(Be, null, Ye(e.viewOptions, (i) => (b(), we(t, {
      key: i[e.valueKey],
      label: i[e.labelKey],
      value: i[e.valueKey],
      option: i,
      disabled: i.disabled
    }, null, 8, [
      "label",
      "value",
      "option",
      "disabled"
    ]))), 128))], 2)]),
    default: ue(() => [j(r, Xe({ ref: "input" }, {
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
      modelValue: e.value,
      "onUpdate:modelValue": n[0] || (n[0] = (i) => e.value = i),
      autocomplete: "off",
      "is-force-focusing-effect": e.isFocusing,
      "is-force-error-effect": !!e.errorMessage,
      "is-show-form-details": !1,
      tabindex: e.tabindex,
      onInput: e.handleInput,
      onBlur: e.handleBlur,
      onClear: e.handleClear,
      onChange: e.handleChange
    }), Pr({ _: 2 }, [
      e.$slots["prepend-icon"] ? {
        name: "prepend-icon",
        fn: ue(() => [H(e.$slots, "prepend-icon")]),
        key: "0"
      } : void 0,
      e.$slots["append-icon"] ? {
        name: "append-icon",
        fn: ue(() => [H(e.$slots, "append-icon")]),
        key: "1"
      } : void 0,
      e.$slots["clear-icon"] ? {
        name: "clear-icon",
        fn: ue(({ clear: i }) => [H(e.$slots, "clear-icon", { clear: i })]),
        key: "2"
      } : void 0,
      e.$slots["extra-message"] ? {
        name: "extra-message",
        fn: ue(() => [H(e.$slots, "extra-message")]),
        key: "3"
      } : void 0
    ]), 1040, [
      "modelValue",
      "is-force-focusing-effect",
      "is-force-error-effect",
      "tabindex",
      "onInput",
      "onBlur",
      "onClear",
      "onChange"
    ])]),
    _: 3
  }, 8, [
    "show",
    "disabled",
    "class",
    "popover-class",
    "onUpdate:modelValue",
    "onKeyEscape"
  ]), j(a, {
    "error-message": e.errorMessage,
    "extra-message": e.maxlengthText
  }, null, 8, ["error-message", "extra-message"])], 42, s$);
}
var om = te({
  name: i$,
  components: {
    VarInput: Lt,
    VarMenuSelect: Yt,
    VarMenuOption: Ft,
    VarFormDetails: Hn
  },
  props: tm,
  setup(e) {
    const n = P(), r = P(), t = P(!1), o = wn(e, "modelValue"), a = P([]), i = P(!1), l = C(() => {
      const { maxlength: I } = e;
      return I ? Or(o.value) ? `0 / ${I}` : `${String(o.value).length}/${I}` : "";
    }), { errorMessage: s, validateWithTrigger: u, validate: d, resetValidation: c } = Jn(), { bindForm: f, form: v } = Kn();
    let p = !1;
    const h = {
      reset: m,
      resetValidation: c,
      validate: y
    };
    Jv(() => n.value, "click", () => {
      if (p) {
        p = !1;
        return;
      }
      w();
    }), me(() => [e.options, t.value], R), S(f, h), xe(() => window, "keydown", O);
    function m() {
      S(e["onUpdate:modelValue"], ""), c();
    }
    function y() {
      return d(e.rules, e.modelValue);
    }
    function $() {
      t.value || e.disabled || v?.disabled.value || (t.value = !0, r.value.focus(), S(e.onFocus), T("onFocus"));
    }
    function w() {
      t.value && (t.value = !1, i.value = !1, r.value.blur(), S(e.onBlur), T("onBlur"));
    }
    function z() {
      i.value || w();
    }
    function T(I) {
      Ne(() => {
        const { validateTrigger: F, rules: Q, modelValue: X } = e;
        u(F, I, Q, X);
      });
    }
    function O(I) {
      return $c(this, null, function* () {
        var F;
        if (v?.disabled.value || v?.readonly.value || e.disabled || e.readonly || !t.value || !i.value) return;
        const { key: Q } = I;
        if (Q === "Tab") {
          Ze(I), n.value.focus(), i.value = !1;
          return;
        }
        if (![
          "ArrowUp",
          "ArrowDown",
          "Enter"
        ].includes(Q)) {
          r.value.focus();
          return;
        }
        Q === "Enter" && (yield it(), (F = r.value) == null || F.focus());
      });
    }
    function R() {
      t.value && (i.value = A(o.value)), i.value && (a.value = e.options);
    }
    function U(I, F) {
      R(), S(e.onInput, I, F), T("onInput");
    }
    function M() {
      p = !0, R(), S(e.onClear, o.value), T("onClear");
    }
    function D(I) {
      e.disabled || v?.disabled.value || (S(e.onClick, I), T("onClick"));
    }
    function E(I) {
      S(e.onChange, I), T("onChange");
    }
    function B(I) {
      return $c(this, null, function* () {
        var F;
        e.maxlength != null && (I = I.slice(0, Z(e.maxlength))), I !== o.value && (o.value = I, S(e.onChange, I), T("onChange")), yield it(), (F = r.value) == null || F.focus();
      });
    }
    function N() {
      r.value.focus();
    }
    function A(I) {
      return e.disabled || e.readonly || v?.disabled.value || v?.readonly.value ? !1 : e.options.length > 0 && (e.getShow != null ? e.getShow(I) : I.length > 0);
    }
    return {
      root: n,
      input: r,
      value: o,
      isShowMenuSelect: i,
      viewOptions: a,
      isFocusing: t,
      formDisabled: v?.disabled,
      formReadonly: v?.readonly,
      errorMessage: s,
      maxlengthText: l,
      n: l$,
      handleInput: U,
      handleClear: M,
      handleClick: D,
      handleChange: E,
      handleBlur: z,
      handleKeyEscape: N,
      handleAutoComplete: B,
      reset: m,
      validate: y,
      resetValidation: c,
      blur: w,
      focus: $
    };
  }
});
om.render = u$;
var _a = om;
de(_a);
fe(_a, tm);
var DA = _a, is = _a;
var am = 3600, im = am * 24, d$ = im * 7, Ho = 1e3, Cc = 60 * Ho, c$ = am * Ho, f$ = im * Ho, v$ = d$ * Ho, lm = "millisecond", ua = "second", da = "minute", ca = "hour";
var Sc = "week", nt = "month", p$ = "quarter", oo = "year", ao = "date";
var m$ = "Invalid Date", g$ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, h$ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b$ = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
  ordinal: function(n) {
    var r = [
      "th",
      "st",
      "nd",
      "rd"
    ], t = n % 100;
    return "[" + n + (r[(t - 20) % 10] || r[t] || r[0]) + "]";
  }
}, ls = function(n, r, t) {
  var o = String(n);
  return !o || o.length >= r ? n : "" + Array(r + 1 - o.length).join(t) + n;
}, y$ = function(n) {
  var r = -n.utcOffset(), t = Math.abs(r), o = Math.floor(t / 60), a = t % 60;
  return (r <= 0 ? "+" : "-") + ls(o, 2, "0") + ":" + ls(a, 2, "0");
}, w$ = function e(n, r) {
  if (n.date() < r.date()) return -e(r, n);
  var t = (r.year() - n.year()) * 12 + (r.month() - n.month()), o = n.clone().add(t, nt), a = r - o < 0, i = n.clone().add(t + (a ? -1 : 1), nt);
  return +(-(t + (r - o) / (a ? o - i : i - o)) || 0);
}, k$ = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, $$ = function(n) {
  return {
    M: "month",
    y: "year",
    w: "week",
    d: "day",
    D: "date",
    h: "hour",
    m: "minute",
    s: "second",
    ms: "millisecond",
    Q: "quarter"
  }[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, C$ = function(n) {
  return n === void 0;
}, S$ = {
  s: ls,
  z: y$,
  m: w$,
  a: k$,
  p: $$,
  u: C$
}, fo = "en", wt = {};
wt[fo] = b$;
var sm = "$isDayjsObject", rd = function(n) {
  return n instanceof ei || !!(n && n[sm]);
}, wa = function e(n, r, t) {
  var o;
  if (!n) return fo;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    wt[a] && (o = a), r && (wt[a] = r, o = a);
    var i = n.split("-");
    if (!o && i.length > 1) return e(i[0]);
  } else {
    var l = n.name;
    wt[l] = n, o = l;
  }
  return !t && o && (fo = o), o || !t && fo;
}, ln = function(n, r) {
  if (rd(n)) return n.clone();
  var t = typeof r == "object" ? r : {};
  return t.date = n, t.args = arguments, new ei(t);
}, P$ = function(n, r) {
  return ln(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, un = S$;
un.l = wa;
un.i = rd;
un.w = P$;
var O$ = function(n) {
  var r = n.date, t = n.utc;
  if (r === null) return /* @__PURE__ */ new Date(NaN);
  if (un.u(r)) return /* @__PURE__ */ new Date();
  if (r instanceof Date) return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var o = r.match(g$);
    if (o) {
      var a = o[2] - 1 || 0, i = (o[7] || "0").substring(0, 3);
      return t ? new Date(Date.UTC(o[1], a, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, i)) : new Date(o[1], a, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, i);
    }
  }
  return new Date(r);
}, ei = /* @__PURE__ */ (function() {
  function e(r) {
    this.$L = wa(r.locale, null, !0), this.parse(r), this.$x = this.$x || r.x || {}, this[sm] = !0;
  }
  var n = e.prototype;
  return n.parse = function(t) {
    this.$d = O$(t), this.init();
  }, n.init = function() {
    var t = this.$d;
    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
  }, n.$utils = function() {
    return un;
  }, n.isValid = function() {
    return this.$d.toString() !== m$;
  }, n.isSame = function(t, o) {
    var a = ln(t);
    return this.startOf(o) <= a && a <= this.endOf(o);
  }, n.isAfter = function(t, o) {
    return ln(t) < this.startOf(o);
  }, n.isBefore = function(t, o) {
    return this.endOf(o) < ln(t);
  }, n.$g = function(t, o, a) {
    return un.u(t) ? this[o] : this.set(a, t);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(t, o) {
    var a = this, i = un.u(o) ? !0 : o, l = un.p(t), s = function(y, $) {
      var w = un.w(a.$u ? Date.UTC(a.$y, $, y) : new Date(a.$y, $, y), a);
      return i ? w : w.endOf("day");
    }, u = function(y, $) {
      return un.w(a.toDate()[y].apply(a.toDate("s"), (i ? [
        0,
        0,
        0,
        0
      ] : [
        23,
        59,
        59,
        999
      ]).slice($)), a);
    }, d = this.$W, c = this.$M, f = this.$D, v = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case oo:
        return i ? s(1, 0) : s(31, 11);
      case nt:
        return i ? s(1, c) : s(0, c + 1);
      case Sc:
        var p = this.$locale().weekStart || 0, h = (d < p ? d + 7 : d) - p;
        return s(i ? f - h : f + (6 - h), c);
      case "day":
      case ao:
        return u(v + "Hours", 0);
      case ca:
        return u(v + "Minutes", 1);
      case da:
        return u(v + "Seconds", 2);
      case ua:
        return u(v + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(t) {
    return this.startOf(t, !1);
  }, n.$set = function(t, o) {
    var a, i = un.p(t), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a.day = l + "Date", a[ao] = l + "Date", a[nt] = l + "Month", a[oo] = l + "FullYear", a[ca] = l + "Hours", a[da] = l + "Minutes", a[ua] = l + "Seconds", a[lm] = l + "Milliseconds", a)[i], u = i === "day" ? this.$D + (o - this.$W) : o;
    if (i === "month" || i === "year") {
      var d = this.clone().set(ao, 1);
      d.$d[s](u), d.init(), this.$d = d.set(ao, Math.min(this.$D, d.daysInMonth())).$d;
    } else s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(t, o) {
    return this.clone().$set(t, o);
  }, n.get = function(t) {
    return this[un.p(t)]();
  }, n.add = function(t, o) {
    var a = this, i;
    t = Number(t);
    var l = un.p(o), s = function(f) {
      var v = ln(a);
      return un.w(v.date(v.date() + Math.round(f * t)), a);
    };
    if (l === "month") return this.set(nt, this.$M + t);
    if (l === "year") return this.set(oo, this.$y + t);
    if (l === "day") return s(1);
    if (l === "week") return s(7);
    var u = (i = {}, i.minute = 6e4, i.hour = 36e5, i.second = 1e3, i)[l] || 1, d = this.$d.getTime() + t * u;
    return un.w(d, this);
  }, n.subtract = function(t, o) {
    return this.add(t * -1, o);
  }, n.format = function(t) {
    var o = this, a = this.$locale();
    if (!this.isValid()) return a.invalidDate || "Invalid Date";
    var i = t || "YYYY-MM-DDTHH:mm:ssZ", l = un.z(this), s = this.$H, u = this.$m, d = this.$M, c = a.weekdays, f = a.months, v = a.meridiem, p = function(w, z, T, O) {
      return w && (w[z] || w(o, i)) || T[z].slice(0, O);
    }, h = function(w) {
      return un.s(s % 12 || 12, w, "0");
    }, m = v || function($, w, z) {
      var T = $ < 12 ? "AM" : "PM";
      return z ? T.toLowerCase() : T;
    }, y = function(w) {
      switch (w) {
        case "YY":
          return String(o.$y).slice(-2);
        case "YYYY":
          return un.s(o.$y, 4, "0");
        case "M":
          return d + 1;
        case "MM":
          return un.s(d + 1, 2, "0");
        case "MMM":
          return p(a.monthsShort, d, f, 3);
        case "MMMM":
          return p(f, d);
        case "D":
          return o.$D;
        case "DD":
          return un.s(o.$D, 2, "0");
        case "d":
          return String(o.$W);
        case "dd":
          return p(a.weekdaysMin, o.$W, c, 2);
        case "ddd":
          return p(a.weekdaysShort, o.$W, c, 3);
        case "dddd":
          return c[o.$W];
        case "H":
          return String(s);
        case "HH":
          return un.s(s, 2, "0");
        case "h":
          return h(1);
        case "hh":
          return h(2);
        case "a":
          return m(s, u, !0);
        case "A":
          return m(s, u, !1);
        case "m":
          return String(u);
        case "mm":
          return un.s(u, 2, "0");
        case "s":
          return String(o.$s);
        case "ss":
          return un.s(o.$s, 2, "0");
        case "SSS":
          return un.s(o.$ms, 3, "0");
        case "Z":
          return l;
        default:
          break;
      }
      return null;
    };
    return i.replace(h$, function($, w) {
      return w || y($) || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(t, o, a) {
    var i = this, l = un.p(o), s = ln(t), u = (s.utcOffset() - this.utcOffset()) * Cc, d = this - s, c = function() {
      return un.m(i, s);
    }, f;
    switch (l) {
      case oo:
        f = c() / 12;
        break;
      case nt:
        f = c();
        break;
      case p$:
        f = c() / 3;
        break;
      case Sc:
        f = (d - u) / v$;
        break;
      case "day":
        f = (d - u) / f$;
        break;
      case ca:
        f = d / c$;
        break;
      case da:
        f = d / Cc;
        break;
      case ua:
        f = d / Ho;
        break;
      default:
        f = d;
        break;
    }
    return a ? f : un.a(f);
  }, n.daysInMonth = function() {
    return this.endOf(nt).$D;
  }, n.$locale = function() {
    return wt[this.$L];
  }, n.locale = function(t, o) {
    if (!t) return this.$L;
    var a = this.clone(), i = wa(t, o, !0);
    return i && (a.$L = i), a;
  }, n.clone = function() {
    return un.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
})(), um = ei.prototype;
ln.prototype = um;
[
  ["$ms", lm],
  ["$s", ua],
  ["$m", da],
  ["$H", ca],
  ["$W", "day"],
  ["$M", nt],
  ["$y", oo],
  ["$D", ao]
].forEach(function(e) {
  um[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ln.extend = function(e, n) {
  return e.$i || (e(n, ei, ln), e.$i = !0), ln;
};
ln.locale = wa;
ln.isDayjs = rd;
ln.unix = function(e) {
  return ln(e * 1e3);
};
ln.en = wt[fo];
ln.Ls = wt;
ln.p = {};
var z$ = function(n) {
  return n.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(r, t, o) {
    return t || o.slice(1);
  });
}, T$ = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
}, E$ = function(n, r) {
  return n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t, o, a) {
    var i = a && a.toUpperCase();
    return o || r[a] || T$[a] || z$(r[i]);
  });
}, I$ = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, Pc = /\d/, no = /\d\d/, B$ = /\d{3}/, D$ = /\d{4}/, Sr = /\d\d?/, M$ = /[+-]?\d+/, A$ = /[+-]\d\d:?(\d\d)?|Z/, ro = /\d*[^-_:/,()\s\d]+/, st = {}, dm = function(n) {
  return n = +n, n + (n > 68 ? 1900 : 2e3);
};
function N$(e) {
  if (!e || e === "Z") return 0;
  var n = e.match(/([+-]|\d\d)/g), r = +(n[1] * 60) + (+n[2] || 0);
  return r === 0 ? 0 : n[0] === "+" ? -r : r;
}
var Wn = function(n) {
  return function(r) {
    this[n] = +r;
  };
}, Oc = [A$, function(e) {
  var n = this.zone || (this.zone = {});
  n.offset = N$(e);
}], Fl = function(n) {
  var r = st[n];
  return r && (r.indexOf ? r : r.s.concat(r.f));
}, zc = function(n, r) {
  var t, o = st.meridiem;
  if (!o) t = n === (r ? "pm" : "PM");
  else for (var a = 1; a <= 24; a += 1) if (n.indexOf(o(a, 0, r)) > -1) {
    t = a > 12;
    break;
  }
  return t;
}, R$ = {
  A: [ro, function(e) {
    this.afternoon = zc(e, !1);
  }],
  a: [ro, function(e) {
    this.afternoon = zc(e, !0);
  }],
  Q: [Pc, function(e) {
    this.month = (e - 1) * 3 + 1;
  }],
  S: [Pc, function(e) {
    this.milliseconds = +e * 100;
  }],
  SS: [no, function(e) {
    this.milliseconds = +e * 10;
  }],
  SSS: [B$, function(e) {
    this.milliseconds = +e;
  }],
  s: [Sr, Wn("seconds")],
  ss: [Sr, Wn("seconds")],
  m: [Sr, Wn("minutes")],
  mm: [Sr, Wn("minutes")],
  H: [Sr, Wn("hours")],
  h: [Sr, Wn("hours")],
  HH: [Sr, Wn("hours")],
  hh: [Sr, Wn("hours")],
  D: [Sr, Wn("day")],
  DD: [no, Wn("day")],
  Do: [ro, function(e) {
    var n = st.ordinal;
    if (this.day = e.match(/\d+/)[0], !!n)
      for (var r = 1; r <= 31; r += 1) n(r).replace(/\[|\]/g, "") === e && (this.day = r);
  }],
  w: [Sr, Wn("week")],
  ww: [no, Wn("week")],
  M: [Sr, Wn("month")],
  MM: [no, Wn("month")],
  MMM: [ro, function(e) {
    var n = Fl("months"), r = (Fl("monthsShort") || n.map(function(t) {
      return t.slice(0, 3);
    })).indexOf(e) + 1;
    if (r < 1) throw new Error();
    this.month = r % 12 || r;
  }],
  MMMM: [ro, function(e) {
    var n = Fl("months").indexOf(e) + 1;
    if (n < 1) throw new Error();
    this.month = n % 12 || n;
  }],
  Y: [M$, Wn("year")],
  YY: [no, function(e) {
    this.year = dm(e);
  }],
  YYYY: [D$, Wn("year")],
  Z: Oc,
  ZZ: Oc
};
function V$(e) {
  var n = e.afternoon;
  if (n !== void 0) {
    var r = e.hours;
    n ? r < 12 && (e.hours += 12) : r === 12 && (e.hours = 0), delete e.afternoon;
  }
}
function L$(e) {
  e = E$(e, st && st.formats);
  for (var n = e.match(I$), r = n.length, t = 0; t < r; t += 1) {
    var o = n[t], a = R$[o], i = a && a[0], l = a && a[1];
    l ? n[t] = {
      regex: i,
      parser: l
    } : n[t] = o.replace(/^\[|\]$/g, "");
  }
  return function(s) {
    for (var u = {}, d = 0, c = 0; d < r; d += 1) {
      var f = n[d];
      if (typeof f == "string") c += f.length;
      else {
        var v = f.regex, p = f.parser, h = s.slice(c), m = v.exec(h)[0];
        p.call(u, m), s = s.replace(m, "");
      }
    }
    return V$(u), u;
  };
}
var F$ = function(n, r, t, o) {
  try {
    if (["x", "X"].indexOf(r) > -1) return /* @__PURE__ */ new Date((r === "X" ? 1e3 : 1) * n);
    var a = L$(r)(n), i = a.year, l = a.month, s = a.day, u = a.hours, d = a.minutes, c = a.seconds, f = a.milliseconds, v = a.zone, p = a.week, h = /* @__PURE__ */ new Date(), m = s || (!i && !l ? h.getDate() : 1), y = i || h.getFullYear(), $ = 0;
    i && !l || ($ = l > 0 ? l - 1 : h.getMonth());
    var w = u || 0, z = d || 0, T = c || 0, O = f || 0;
    if (v) return new Date(Date.UTC(y, $, m, w, z, T, O + v.offset * 60 * 1e3));
    if (t) return new Date(Date.UTC(y, $, m, w, z, T, O));
    var R = new Date(y, $, m, w, z, T, O);
    return p && (R = o(R).week(p).toDate()), R;
  } catch {
    return /* @__PURE__ */ new Date("");
  }
}, H$ = (function(e, n, r) {
  r.p.customParseFormat = !0, e && e.parseTwoDigitYear && (dm = e.parseTwoDigitYear);
  var t = n.prototype, o = t.parse;
  t.parse = function(a) {
    var i = a.date, l = a.utc, s = a.args;
    this.$u = l;
    var u = s[1];
    if (typeof u == "string") {
      var d = s[2] === !0, c = s[3] === !0, f = d || c, v = s[2];
      c && (v = s[2]), st = this.$locale(), !d && v && (st = r.Ls[v]), this.$d = F$(i, u, l, r), this.init(), v && v !== !0 && (this.$L = this.locale(v).$L), f && i != this.format(u) && (this.$d = /* @__PURE__ */ new Date("")), st = {};
    } else if (u instanceof Array)
      for (var p = u.length, h = 1; h <= p; h += 1) {
        s[1] = u[h - 1];
        var m = r.apply(this, s);
        if (m.isValid()) {
          this.$d = m.$d, this.$L = m.$L, this.init();
          break;
        }
        h === p && (this.$d = /* @__PURE__ */ new Date(""));
      }
    else o.call(this, a);
  };
}), U$ = (function(e, n) {
  n.prototype.isSameOrAfter = function(r, t) {
    return this.isSame(r, t) || this.isAfter(r, t);
  };
}), j$ = (function(e, n) {
  n.prototype.isSameOrBefore = function(r, t) {
    return this.isSame(r, t) || this.isBefore(r, t);
  };
}), Tc = (e) => Sn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, Ec = (e) => Sn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, Y$ = (e) => {
  const n = [];
  return {
    cache: n,
    has(r) {
      return this.cache.includes(r);
    },
    add(r) {
      this.has(r) || (this.cache.length === e && n.shift(), this.cache.push(r));
    },
    remove(r) {
      this.has(r) && Rt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Ic = !1, Uo = () => (Ic || (ln.extend(H$), ln.extend(U$), ln.extend(j$), Ic = !0), ln), ss = (e) => e, Bc = (e) => e ** 3, cm = (e) => e < 0.5 ? Bc(e * 2) / 2 : 1 - Bc((1 - e) * 2) / 2, Gr = (e, n, r = "") => {
  if (e === void 0 && (e = ""), e.length >= n) return e;
  const t = n - e.length, o = Math.floor(t / r.length);
  return r.repeat(o) + r.slice(0, t % r.length) + e;
}, K$ = Object.defineProperty, Dc = Object.getOwnPropertySymbols, W$ = Object.prototype.hasOwnProperty, q$ = Object.prototype.propertyIsEnumerable, Mc = (e, n, r) => n in e ? K$(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, X$ = (e, n) => {
  for (var r in n || (n = {})) W$.call(n, r) && Mc(e, r, n[r]);
  if (Dc)
    for (var r of Dc(n)) q$.call(n, r) && Mc(e, r, n[r]);
  return e;
}, ni = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), G$ = "background-image", Z$ = "lazy-loading", J$ = "lazy-error", Ac = "lazy-attempt", Q$ = [
  "scroll",
  "wheel",
  "mousewheel",
  "resize",
  "animationend",
  "transitionend",
  "touchmove"
], us = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Kt = [], ka = [], fm = Y$(100), An = {
  loading: us,
  error: us,
  attempt: 3,
  throttleWait: 300,
  events: Q$
}, td = Vu(jo, An.throttleWait);
function ri(e, n) {
  e._lazy.arg === G$ ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function x$(e) {
  e._lazy.loading && ri(e, e._lazy.loading), jo();
}
function _$(e) {
  e._lazy.error && ri(e, e._lazy.error), e._lazy.state = "error", ad(e), jo();
}
function vm(e, n) {
  ri(e, n), e._lazy.state = "success", ad(e), jo();
}
function eC(e) {
  var n;
  ka.includes(e) || (ka.push(e), (n = An.events) == null || n.forEach((r) => {
    e.addEventListener(r, td, { passive: !0 });
  }));
}
function nC() {
  ka.forEach((e) => {
    var n;
    (n = An.events) == null || n.forEach((r) => {
      e.removeEventListener(r, td);
    });
  }), ka.length = 0;
}
function rC(e, n) {
  var r, t;
  const o = {
    loading: (r = e.getAttribute(Z$)) != null ? r : An.loading,
    error: (t = e.getAttribute(J$)) != null ? t : An.error,
    attempt: e.getAttribute(Ac) ? Number(e.getAttribute(Ac)) : An.attempt
  };
  e._lazy = X$({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, o), ri(e, us), S(An.filter, e._lazy);
}
function tC(e, n) {
  const r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, fm.add(n), vm(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? _$(e) : pm(e);
  });
}
function pm(e) {
  if (e._lazy.attemptLock) return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (fm.has(n)) {
    vm(e, n), e._lazy.attemptLock = !1;
    return;
  }
  x$(e), tC(e, n);
}
function od(e) {
  return ni(this, null, function* () {
    yield Xn(), A0(e) && pm(e);
  });
}
function jo() {
  Kt.forEach((e) => od(e));
}
function oC(e) {
  return ni(this, null, function* () {
    !Kt.includes(e) && Kt.push(e), Ay(e).forEach(eC), yield od(e);
  });
}
function ad(e) {
  Rt(Kt, e), Kt.length === 0 && nC();
}
function aC(e, n) {
  const { src: r, arg: t } = e._lazy;
  return r !== n.value || t !== n.arg;
}
function mm(e, n) {
  return ni(this, null, function* () {
    rC(e, n), yield oC(e);
  });
}
function iC(e, n) {
  return ni(this, null, function* () {
    if (!aC(e, n)) {
      Kt.includes(e) && (yield od(e));
      return;
    }
    yield mm(e, n);
  });
}
function lC(e = {}) {
  const { events: n, loading: r, error: t, attempt: o, throttleWait: a, filter: i } = e;
  An.events = n ?? An.events, An.loading = r ?? An.loading, An.error = t ?? An.error, An.attempt = o ?? An.attempt, An.throttleWait = a ?? An.throttleWait, An.filter = i;
}
var gm = {
  mounted: mm,
  unmounted: ad,
  updated: iC,
  install(e, n) {
    lC(n), td = Vu(jo, An.throttleWait), e.directive("lazy", this);
  }
}, MA = gm, wo = gm, hm = {
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
}, sC = (e) => [
  "mini",
  "small",
  "normal",
  "large"
].includes(e), { name: uC, n: dC, classes: cC } = oe("avatar"), fC = [
  "src",
  "alt",
  "lazy-loading",
  "lazy-error"
], vC = ["src", "alt"];
function pC(e, n) {
  const r = _e("lazy");
  return b(), k("div", {
    ref: "avatarElement",
    class: g(e.classes(e.n(), e.n("$--box"), [e.isInternalSize(e.size), e.n(`--${e.size}`)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")], [e.hoverable, e.n("--hoverable")])),
    style: J({
      width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
      height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
      borderColor: e.borderColor,
      backgroundColor: e.color
    }),
    onClick: n[3] || (n[3] = (...t) => e.handleClick && e.handleClick(...t))
  }, [e.src ? (b(), k(Be, { key: 0 }, [e.lazy ? Ke((b(), k("img", {
    key: 0,
    role: "img",
    class: g(e.n("image")),
    src: e.src,
    alt: e.alt,
    style: J({ objectFit: e.fit }),
    "lazy-loading": e.loading,
    "lazy-error": e.error,
    onLoad: n[0] || (n[0] = (...t) => e.handleLoad && e.handleLoad(...t))
  }, null, 46, fC)), [[r, e.src]]) : (b(), k("img", {
    key: 1,
    role: "img",
    class: g(e.n("image")),
    src: e.src,
    alt: e.alt,
    style: J({ objectFit: e.fit }),
    onLoad: n[1] || (n[1] = (...t) => e.handleLoad && e.handleLoad(...t)),
    onError: n[2] || (n[2] = (...t) => e.handleError && e.handleError(...t))
  }, null, 46, vC))], 64)) : (b(), k("div", {
    key: 1,
    ref: "textElement",
    class: g(e.n("text")),
    style: J({ transform: `scale(${e.scale})` })
  }, [H(e.$slots, "default")], 6))], 6);
}
var bm = te({
  name: uC,
  directives: { Lazy: wo },
  props: hm,
  setup(e) {
    const n = P(null), r = P(null), t = P(1);
    En(o), qt(o);
    function o() {
      if (!n.value || !r.value) {
        t.value = 1;
        return;
      }
      const s = n.value.offsetWidth, u = r.value.offsetWidth;
      s > u ? t.value = 1 : t.value = s / u;
    }
    function a(s) {
      const u = s.currentTarget, { lazy: d, onLoad: c, onError: f } = e;
      d ? (u._lazy.state === "success" && S(c, s), u._lazy.state === "error" && S(f, s)) : S(c, s);
    }
    function i(s) {
      S(e.onError, s);
    }
    function l(s) {
      S(e.onClick, s);
    }
    return {
      avatarElement: n,
      textElement: r,
      scale: t,
      n: dC,
      classes: cC,
      isInternalSize: sC,
      toSizeUnit: ze,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
bm.render = pC;
var ti = bm;
de(ti);
fe(ti, hm);
var AA = ti, ds = ti, ym = {
  offset: [Number, String],
  vertical: Boolean
}, { name: mC, n: gC, classes: hC } = oe("avatar-group");
function bC(e, n) {
  return b(), k("div", {
    class: g(e.classes(e.n(), [
      e.vertical,
      e.n("--column"),
      e.n("--row")
    ])),
    style: J(e.rootStyles)
  }, [H(e.$slots, "default")], 6);
}
var wm = te({
  name: mC,
  props: ym,
  setup(e) {
    return {
      rootStyles: C(() => e.offset == null ? {} : { "--avatar-group-offset": ze(e.offset) }),
      n: gC,
      classes: hC
    };
  }
});
wm.render = bC;
var oi = wm;
de(oi);
fe(oi, ym);
var NA = oi, cs = oi, Yr = {
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
}, { name: yC, n: wC, classes: kC } = oe("loading");
function $C(e, n) {
  return b(), k("div", { class: g(e.n()) }, [e.$slots.default ? (b(), k("div", {
    key: 0,
    class: g(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
  }, [H(e.$slots, "default"), e.loading ? (b(), k("div", {
    key: 0,
    class: g(e.n("content-mask"))
  }, null, 2)) : q("v-if", !0)], 2)) : q("v-if", !0), e.isShow ? (b(), k("div", {
    key: 1,
    class: g(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
  }, [
    e.type === "circle" ? (b(), k("div", {
      key: 0,
      class: g(e.n("circle"))
    }, [L("span", {
      class: g(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
      style: J({
        width: e.multiplySizeUnit(e.radius, 2),
        height: e.multiplySizeUnit(e.radius, 2),
        color: e.color
      })
    }, [...n[0] || (n[0] = [L("svg", { viewBox: "25 25 50 50" }, [L("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })], -1)])], 6)], 2)) : q("v-if", !0),
    (b(!0), k(Be, null, Ye(e.loadingTypeDict, (r, t) => (b(), k(Be, { key: t }, [e.type === t ? (b(), k("div", {
      key: 0,
      class: g(e.classes(e.n(t), e.n(`${t}--${e.size}`)))
    }, [(b(!0), k(Be, null, Ye(r, (o) => (b(), k("div", {
      key: o + t,
      style: J({ backgroundColor: e.color }),
      class: g(e.classes(e.n(`${t}-item`), e.n(`${t}-item--${e.size}`)))
    }, null, 6))), 128))], 2)) : q("v-if", !0)], 64))), 128)),
    e.$slots.description || e.description ? (b(), k("div", {
      key: 1,
      class: g(e.classes(e.n("description"), e.n(`description--${e.size}`))),
      style: J({ color: e.color })
    }, [H(e.$slots, "description", {}, () => [Le(ve(e.description), 1)])], 6)) : q("v-if", !0)
  ], 2)) : q("v-if", !0)], 2);
}
var km = te({
  name: yC,
  props: Yr,
  setup(e, { slots: n }) {
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: C(() => S(n.default) ? e.loading : !0),
      n: wC,
      classes: kC,
      multiplySizeUnit: _n
    };
  }
});
km.render = $C;
var ai = km;
de(ai);
fe(ai, Yr);
var RA = ai, Ct = ai, CC = Object.defineProperty, SC = Object.defineProperties, PC = Object.getOwnPropertyDescriptors, Nc = Object.getOwnPropertySymbols, OC = Object.prototype.hasOwnProperty, zC = Object.prototype.propertyIsEnumerable, Rc = (e, n, r) => n in e ? CC(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Vc = (e, n) => {
  for (var r in n || (n = {})) OC.call(n, r) && Rc(e, r, n[r]);
  if (Nc)
    for (var r of Nc(n)) zC.call(n, r) && Rc(e, r, n[r]);
  return e;
}, Lc = (e, n) => SC(e, PC(n)), $m = {
  type: String,
  nativeType: {
    type: String,
    default: "button"
  },
  size: String,
  loading: Boolean,
  round: Boolean,
  fab: Boolean,
  block: Boolean,
  text: Boolean,
  outline: Boolean,
  disabled: Boolean,
  autoLoading: Boolean,
  tonal: Boolean,
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
    type: [
      Boolean,
      Number,
      String
    ],
    default: !0
  },
  loadingRadius: [Number, String],
  loadingType: Fe(Yr, "type"),
  loadingSize: Lc(Vc({}, Fe(Yr, "size")), { default: void 0 }),
  loadingColor: Lc(Vc({}, Fe(Yr, "color")), { default: "currentColor" }),
  onClick: V(),
  onTouchstart: V()
}, Cm = /* @__PURE__ */ Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function TC() {
  const { bindChildren: e, childProviders: n, length: r } = Bn(Cm);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function EC() {
  const { bindParent: e, parentProvider: n, index: r } = In(Cm);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var { name: IC, n: BC, classes: DC } = oe("button"), MC = [
  "tabindex",
  "type",
  "disabled"
];
function AC(e, n) {
  const r = x("var-loading"), t = x("var-hover-overlay"), o = _e("ripple"), a = _e("hover");
  return Ke((b(), k("button", {
    class: g(e.classes(e.n(), e.n("$--box"), e.n(`--${e.states.size}`), [
      e.block,
      `${e.n("$--flex")} ${e.n("--block")}`,
      e.n("$--inline-flex")
    ], [!e.states.text, e.states.elevation], [!e.states.iconContainer && !e.states.text, e.n(`--${e.states.type}`)], [e.states.text, `${e.n("--text")} ${e.n(`--text-${e.states.type}`)}`], [e.states.iconContainer, e.n(`--icon-container-${e.states.type}`)], [e.states.filledDefault, e.n("--filled-default")], [e.round, e.n("--round")], [e.fab, e.n("--fab")], [e.states.outline, e.n("--outline")], [e.loading || e.pending, e.n("--loading")], [e.disabled, e.n("--disabled")], [e.states.text && e.disabled, e.n("--text-disabled")])),
    tabindex: e.focusable ? void 0 : "-1",
    style: J({
      color: e.states.textColor,
      background: e.states.color
    }),
    type: e.nativeType,
    disabled: e.disabled || e.loading || e.pending,
    onClick: n[0] || (n[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onTouchstart: n[1] || (n[1] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
    onFocus: n[2] || (n[2] = (...i) => e.handleFocus && e.handleFocus(...i)),
    onBlur: n[3] || (n[3] = (i) => e.isFocusing = !1)
  }, [
    e.loading || e.pending ? (b(), we(r, {
      key: 0,
      class: g(e.n("loading")),
      "var-button-cover": "",
      color: e.loadingColor,
      type: e.loadingType,
      size: e.loadingSize || e.states.size,
      radius: e.loadingRadius
    }, null, 8, [
      "class",
      "color",
      "type",
      "size",
      "radius"
    ])) : q("v-if", !0),
    L("div", { class: g(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")])) }, [H(e.$slots, "default")], 2),
    j(t, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, MC)), [[o, { disabled: e.disabled || !e.ripple || e.loading || e.pending }], [
    a,
    e.handleHovering,
    "desktop"
  ]]);
}
var Sm = te({
  name: IC,
  components: {
    VarLoading: Ct,
    VarHoverOverlay: Gn
  },
  directives: {
    Ripple: vn,
    Hover: jn
  },
  props: $m,
  setup(e) {
    const n = P(!1), r = P(!1), { buttonGroup: t } = EC(), { hovering: o, handleHovering: a } = ur(), i = C(() => {
      var f, v, p, h, m, y, $;
      if (!t) return {
        elevation: e.tonal ? "" : Pn(e.elevation, 2),
        type: (f = e.type) != null ? f : "default",
        size: (v = e.size) != null ? v : "normal",
        color: e.color,
        text: e.text,
        textColor: e.textColor,
        outline: e.outline,
        iconContainer: e.tonal || e.iconContainer,
        filledDefault: (e.type == null || e.type === "default") && c(e.elevation) && !e.text && !e.outline && !e.tonal && !e.iconContainer
      };
      const { type: w, size: z, color: T, textColor: O, mode: R, elevation: U } = t;
      return {
        elevation: "",
        type: (p = e.type) != null ? p : w.value,
        size: (h = e.size) != null ? h : z.value,
        color: (m = e.color) != null ? m : T.value,
        textColor: (y = e.textColor) != null ? y : O.value,
        text: R.value === "text" || R.value === "outline",
        outline: R.value === "outline",
        iconContainer: R.value === "tonal" || R.value === "icon-container",
        filledDefault: R.value === "normal" && (($ = e.type) != null ? $ : w.value) === "default" && c(U.value)
      };
    });
    function l(f) {
      e.autoLoading && (r.value = !0, Promise.all(qr(f)).then(() => {
        r.value = !1;
      }).catch(() => {
        r.value = !1;
      }));
    }
    function s(f) {
      const { loading: v, disabled: p, onClick: h } = e;
      !h || v || p || r.value || l(S(h, f));
    }
    function u(f) {
      const { loading: v, disabled: p, onTouchstart: h } = e;
      !h || v || p || r.value || l(S(h, f));
    }
    function d() {
      e.focusable && (n.value = !0);
    }
    function c(f) {
      return f === !1 || Z(f) === 0;
    }
    return {
      pending: r,
      states: i,
      hovering: o,
      isFocusing: n,
      n: BC,
      classes: DC,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      handleFocus: d
    };
  }
});
Sm.render = AC;
var ii = Sm;
de(ii);
fe(ii, $m);
var VA = ii, tr = ii, Pm = {
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
    type: [
      Boolean,
      Number,
      String
    ],
    default: !0
  },
  bottom: [Number, String],
  target: [String, Object],
  onClick: V()
}, { name: NC, n: RC, classes: VC } = oe("back-top");
function LC(e, n) {
  const r = x("var-icon"), t = x("var-button");
  return b(), we(Hr, {
    to: "body",
    disabled: e.disabled
  }, [L("div", Xe({
    ref: "backTopEl",
    class: e.classes(e.n(), [e.show, e.n("--active")]),
    style: {
      right: e.toSizeUnit(e.right),
      bottom: e.toSizeUnit(e.bottom)
    }
  }, e.$attrs, { onClick: n[0] || (n[0] = Rn((...o) => e.handleClick && e.handleClick(...o), ["stop"])) }), [H(e.$slots, "default", {}, () => [j(t, {
    elevation: e.elevation,
    type: "primary",
    "var-back-top-cover": ""
  }, {
    default: ue(() => [j(r, { name: "chevron-up" })]),
    _: 1
  }, 8, ["elevation"])])], 16)], 8, ["disabled"]);
}
var Om = te({
  name: NC,
  components: {
    VarButton: tr,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: Pm,
  setup(e) {
    const n = P(!1), r = P(null), t = P(!0);
    let o;
    const a = Vu(() => {
      i();
    }, 200);
    Tr(() => {
      s(), u(), i(), t.value = !1;
    }), vt(u), Gt(d);
    function i() {
      n.value = kt(o) >= fn(e.visibilityHeight);
    }
    function l(c) {
      S(e.onClick, c);
      const f = Ru(o);
      go(o, {
        left: f,
        duration: e.duration,
        animation: cm
      });
    }
    function s() {
      o = e.target ? $p(e.target, "BackTop") : dt(r.value);
    }
    function u() {
      o.addEventListener("scroll", a);
    }
    function d() {
      o && o.removeEventListener("scroll", a);
    }
    return {
      disabled: t,
      show: n,
      backTopEl: r,
      toSizeUnit: ze,
      n: RC,
      classes: VC,
      handleClick: l
    };
  }
});
Om.render = LC;
var li = Om;
de(li);
fe(li, Pm);
var LA = li, fs = li, zm = {
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
  icon: Fe(pn, "name"),
  namespace: Fe(pn, "namespace"),
  color: String,
  offsetX: {
    type: [String, Number],
    default: 0
  },
  offsetY: {
    type: [String, Number],
    default: 0
  }
}, FC = Object.defineProperty, Fc = Object.getOwnPropertySymbols, HC = Object.prototype.hasOwnProperty, UC = Object.prototype.propertyIsEnumerable, Hc = (e, n, r) => n in e ? FC(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, jC = (e, n) => {
  for (var r in n || (n = {})) HC.call(n, r) && Hc(e, r, n[r]);
  if (Fc)
    for (var r of Fc(n)) UC.call(n, r) && Hc(e, r, n[r]);
  return e;
}, { name: YC, n: KC, classes: WC } = oe("badge"), qC = { key: 0 };
function XC(e, n) {
  const r = x("var-icon");
  return b(), k("div", { class: g(e.classes(e.n(), e.n("$--box"))) }, [H(e.$slots, "default"), j(bn, {
    name: e.n("$-badge-fade"),
    persisted: ""
  }, {
    default: ue(() => [Ke(L("span", Xe({
      class: e.classes(e.n("content"), e.n(`--${e.type}`), [
        e.$slots.default,
        e.n(`--${e.position}`),
        e.n("--offset")
      ], [e.dot, e.n("--dot")], [e.icon || e.$slots.icon, e.n("--icon")]),
      style: jC({ background: e.color }, e.offsetStyle)
    }, e.$attrs), [e.$slots.icon || e.icon ? (b(), k("span", {
      key: 0,
      class: g(e.n("icon"))
    }, [H(e.$slots, "icon", {}, () => [j(r, {
      name: e.icon,
      namespace: e.namespace
    }, null, 8, ["name", "namespace"])])], 2)) : q("v-if", !0), H(e.$slots, "value", {}, () => [!e.$slots.icon && !e.icon && !e.dot ? (b(), k("span", qC, ve(e.value), 1)) : q("v-if", !0)])], 16), [[yr, !e.hidden]])]),
    _: 3
  }, 8, ["name"])], 2);
}
var Tm = te({
  name: YC,
  components: { VarIcon: Je },
  inheritAttrs: !1,
  props: zm,
  setup(e) {
    return {
      value: C(() => {
        const { value: n, maxValue: r } = e;
        return n != null && r != null && Z(n) > Z(r) ? `${r}+` : n;
      }),
      offsetStyle: C(() => ({
        "--badge-offset-y": ze(e.offsetY),
        "--badge-offset-x": ze(e.offsetX)
      })),
      n: KC,
      classes: WC
    };
  }
});
Tm.render = XC;
var si = Tm;
de(si);
fe(si, zm);
var FA = si, ko = si, Em = {
  active: {
    type: [Number, String],
    default: 0
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  animated: {
    type: Boolean,
    default: !0
  },
  fixed: Boolean,
  border: Boolean,
  bordered: Boolean,
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
}, Im = /* @__PURE__ */ Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function GC() {
  const { childProviders: e, length: n, bindChildren: r } = Bn(Im);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
  };
}
var ZC = Object.defineProperty, Uc = Object.getOwnPropertySymbols, JC = Object.prototype.hasOwnProperty, QC = Object.prototype.propertyIsEnumerable, jc = (e, n, r) => n in e ? ZC(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Yc = (e, n) => {
  for (var r in n || (n = {})) JC.call(n, r) && jc(e, r, n[r]);
  if (Uc)
    for (var r of Uc(n)) QC.call(n, r) && jc(e, r, n[r]);
  return e;
}, { name: xC, n: _C, classes: eS } = oe("bottom-navigation"), { n: ui } = oe("bottom-navigation-item"), Kc = ui("--right-half-space"), Wc = ui("--left-half-space"), qc = ui("--right-space"), nS = { type: "primary" };
function rS(e, n) {
  const r = x("var-button");
  return b(), k(Be, null, [L("div", Xe({
    ref: "bottomNavigationDom",
    class: e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.bordered || e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")], [e.variant, e.n("--variant")]),
    style: `z-index:${e.zIndex}`
  }, e.$attrs), [H(e.$slots, "default"), e.$slots.fab ? (b(), we(r, Xe({
    key: 0,
    class: e.classes(e.n("fab"), [
      e.length % 2,
      e.n("--fab-right"),
      e.n("--fab-center")
    ]),
    "var-bottom-navigation__fab": ""
  }, e.fabProps, { onClick: e.handleFabClick }), {
    default: ue(() => [H(e.$slots, "fab")]),
    _: 3
  }, 16, ["class", "onClick"])) : q("v-if", !0)], 16), e.fixed && e.placeholder ? (b(), k("div", {
    key: 0,
    class: g(e.n("placeholder")),
    style: J({ height: e.placeholderHeight })
  }, null, 6)) : q("v-if", !0)], 64);
}
var Bm = te({
  name: xC,
  components: { VarButton: tr },
  props: Em,
  setup(e, { slots: n }) {
    const r = P(null), t = C(() => e.animated), o = C(() => e.active), a = C(() => e.activeColor), i = C(() => e.inactiveColor), l = C(() => e.variant), s = P(), u = P({}), { length: d, bottomNavigationItems: c, bindBottomNavigationItem: f } = GC();
    f({
      animated: t,
      active: o,
      activeColor: a,
      inactiveColor: i,
      variant: l,
      onToggle: y
    }), me(() => d.value, v), me(() => e.fabProps, (D) => {
      u.value = Yc(Yc({}, nS), D);
    }, {
      immediate: !0,
      deep: !0
    }), wr(M), En(() => {
      M(), n.fab && T(d.value);
    }), qt(() => {
      z(), n.fab && T(d.value);
    });
    function v() {
      d.value === 0 || p() || h() || m();
    }
    function p() {
      return c.find(({ name: D }) => o.value === D.value);
    }
    function h() {
      return c.find(({ index: D }) => o.value === D.value);
    }
    function m() {
      nr(o.value) && (o.value < 0 ? S(e["onUpdate:active"], 0) : o.value > d.value - 1 && S(e["onUpdate:active"], d.value - 1));
    }
    function y(D) {
      o.value !== D && (e.onBeforeChange ? $(D) : w(D));
    }
    function $(D) {
      const E = qr(S(e.onBeforeChange, D));
      Promise.all(E).then((B) => {
        B.every(Boolean) && w(D);
      });
    }
    function w(D) {
      S(e["onUpdate:active"], D), S(e.onChange, D);
    }
    function z() {
      R().forEach((D) => {
        D.classList.remove(Kc, Wc, qc);
      });
    }
    function T(D) {
      const E = R(), B = E.length, N = D % 2 === 0;
      E.forEach((A, I) => {
        O(N, A, I, B);
      });
    }
    function O(D, E, B, N) {
      const A = B === N - 1;
      if (!D && A) {
        E.classList.add(qc);
        return;
      }
      const I = B === N / 2 - 1, F = B === N / 2;
      I ? E.classList.add(Kc) : F && E.classList.add(Wc);
    }
    function R() {
      return Array.from(r.value.querySelectorAll(`.${ui()}`));
    }
    function U() {
      S(e.onFabClick);
    }
    function M() {
      if (!e.fixed || !e.placeholder) return;
      const { height: D } = kn(r.value);
      s.value = ze(D);
    }
    return {
      length: d,
      bottomNavigationDom: r,
      fabProps: u,
      placeholderHeight: s,
      n: _C,
      classes: eS,
      handleFabClick: U
    };
  }
});
Bm.render = rS;
var di = Bm;
de(di);
fe(di, Em);
var HA = di, vs = di, Dm = {
  name: String,
  label: String,
  icon: Fe(pn, "name"),
  namespace: Fe(pn, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: V()
};
function tS() {
  const { parentProvider: e, index: n, bindParent: r } = In(Im);
  return rr(!!r, "BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var { name: oS, n: aS, classes: iS } = oe("bottom-navigation-item"), lS = {
  type: "danger",
  dot: !0
};
function sS(e, n) {
  const r = x("var-icon"), t = x("var-badge"), o = _e("ripple");
  return Ke((b(), k("button", {
    class: g(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")], [e.animated, e.n("--animated")])),
    style: J({ color: e.isActive ? e.activeColor : e.inactiveColor }),
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [L("div", { class: g(e.classes(e.n("icon-container"), [e.variant, e.n("--variant-icon-container")], [e.isActive && e.variant, e.n("--variant-active")])) }, [e.badge ? (b(), we(t, Xe({ key: 0 }, e.badgeProps, {
    class: e.n("badge"),
    "var-bottom-navigation-item-cover": ""
  }), {
    default: ue(() => [L("span", { class: g(e.n("icon")) }, [H(e.$slots, "icon", { active: e.isActive }, () => [e.icon ? (b(), we(r, {
      key: 0,
      name: e.icon,
      namespace: e.namespace
    }, null, 8, ["name", "namespace"])) : q("v-if", !0)])], 2)]),
    _: 3
  }, 16, ["class"])) : e.$slots.icon || e.icon ? (b(), k("span", {
    key: 1,
    class: g(e.n("icon"))
  }, [H(e.$slots, "icon", { active: e.isActive }, () => [e.icon ? (b(), we(r, {
    key: 0,
    name: e.icon,
    namespace: e.namespace
  }, null, 8, ["name", "namespace"])) : q("v-if", !0)])], 2)) : q("v-if", !0)], 2), L("span", { class: g(e.n("label")) }, [H(e.$slots, "default", {}, () => [Le(ve(e.label), 1)])], 2)], 6)), [[o]]);
}
var Mm = te({
  name: oS,
  components: {
    VarBadge: ko,
    VarIcon: Je
  },
  directives: { Ripple: vn },
  props: Dm,
  setup(e) {
    const { index: n, bottomNavigation: r, bindBottomNavigation: t } = tS(), o = C(() => e.name), a = C(() => [o.value, n.value].includes(s.value)), i = C(() => e.badge === !0 ? lS : e.badge), { animated: l, active: s, activeColor: u, inactiveColor: d, variant: c } = r;
    t({
      name: o,
      index: n
    });
    function f() {
      var v;
      const p = (v = o.value) != null ? v : n.value;
      S(e.onClick, p), S(r.onToggle, p);
    }
    return {
      animated: l,
      activeColor: u,
      inactiveColor: d,
      badgeProps: i,
      isActive: a,
      variant: c,
      n: aS,
      classes: iS,
      handleClick: f
    };
  }
});
Mm.render = sS;
var ci = Mm;
de(ci);
fe(ci, Dm);
var UA = ci, ps = ci, Am = {
  separator: String,
  onClick: V()
}, Nm = /* @__PURE__ */ Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function uS() {
  const { childProviders: e, bindChildren: n, length: r } = Bn(Nm);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function dS() {
  const { parentProvider: e, bindParent: n, index: r } = In(Nm);
  return rr(!!n, "Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var { name: cS, n: fS, classes: vS } = oe("breadcrumb");
function pS(e, n) {
  return b(), k("div", { class: g(e.n()) }, [L("div", {
    class: g(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
    onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [H(e.$slots, "default")], 2), e.isLast ? q("v-if", !0) : H(e.$slots, "separator", { key: 0 }, () => {
    var r;
    return [L("div", {
      class: g(e.n("separator")),
      "aria-hidden": "true"
    }, ve((r = e.separator) != null ? r : e.parentSeparator), 3)];
  })], 2);
}
var Rm = te({
  name: cS,
  props: Am,
  setup(e) {
    const { index: n, breadcrumb: r, bindBreadcrumb: t } = dS(), o = C(() => n.value === r.length.value - 1), a = C(() => r.separator.value);
    t(null);
    function i(l) {
      o.value || S(e.onClick, l);
    }
    return {
      n: fS,
      classes: vS,
      isLast: o,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Rm.render = pS;
var fi = Rm;
de(fi);
fe(fi, Am);
var jA = fi, ms = fi, Vm = { separator: {
  type: String,
  default: "/"
} }, { name: mS, n: gS } = oe("breadcrumbs");
function hS(e, n) {
  return b(), k("div", {
    class: g(e.n()),
    role: "navigation",
    "aria-label": "Breadcrumbs"
  }, [H(e.$slots, "default")], 2);
}
var Lm = te({
  name: mS,
  props: Vm,
  setup(e) {
    const n = C(() => e.separator), { bindBreadcrumbList: r, length: t } = uS();
    return r({
      length: t,
      separator: n
    }), { n: gS };
  }
});
Lm.render = hS;
var vi = Lm;
de(vi);
fe(vi, Vm);
var YA = vi, gs = vi, Fm = {
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
    type: [
      Boolean,
      Number,
      String
    ],
    default: !0
  },
  vertical: Boolean
}, { name: bS, n: yS, classes: wS } = oe("button-group");
function kS(e, n) {
  return b(), k("div", { class: g(e.classes(e.n(), e.n("$--box"), [e.mode, `${e.n(`--mode-${e.mode}`)}`], [
    e.vertical,
    e.n("--vertical"),
    e.n("--horizontal")
  ], [e.mode === "normal", e.formatElevation(e.elevation, 2)])) }, [H(e.$slots, "default")], 2);
}
var Hm = te({
  name: bS,
  props: Fm,
  setup(e) {
    const { bindButtons: n } = TC();
    return n({
      elevation: C(() => e.elevation),
      type: C(() => e.type),
      size: C(() => e.size),
      color: C(() => e.color),
      textColor: C(() => e.textColor),
      mode: C(() => e.mode)
    }), {
      n: yS,
      classes: wS,
      formatElevation: Pn
    };
  }
});
Hm.render = kS;
var pi = Hm;
de(pi);
fe(pi, Fm);
var KA = pi, hs = pi, Um = {
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
  surface: String,
  hoverable: {
    type: [Boolean, Object],
    default: !1
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
    type: [
      Boolean,
      Number,
      String
    ],
    default: !0
  },
  ripple: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: V(),
  "onUpdate:floating": V(),
  outline: Boolean
}, $S = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: CS, n: SS, classes: PS } = oe("card"), OS = 500, zS = ["src", "alt"];
function TS(e, n) {
  const r = x("var-hover-overlay"), t = x("var-icon"), o = x("var-button"), a = _e("ripple"), i = _e("hover");
  return Ke((b(), k("div", {
    ref: "card",
    class: g(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.variant === "outlined" || e.outline, e.n("--outline")], [e.variant === "filled", e.n("--filled")], [e.surfaceLow, e.n("--surface-low")], [!e.normalizedHoverable.disabled, e.n("--cursor")], [e.variant === "standard" || e.outline, e.formatElevation(e.elevation, 1)])),
    style: J({ zIndex: e.floated ? e.zIndex : void 0 }),
    onClick: n[0] || (n[0] = (...l) => e.handleClick && e.handleClick(...l))
  }, [L("div", {
    ref: "cardFloater",
    class: g(e.n("floater")),
    style: J({
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
  }, [
    H(e.$slots, "image", {}, () => [e.src ? (b(), k("img", {
      key: 0,
      class: g(e.n("image")),
      style: J({
        objectFit: e.fit,
        height: e.toSizeUnit(e.imageHeight),
        width: e.toSizeUnit(e.imageWidth)
      }),
      src: e.src,
      alt: e.alt
    }, null, 14, zS)) : q("v-if", !0)]),
    L("div", { class: g(e.n("container")) }, [
      H(e.$slots, "title", { slotClass: e.n("title") }, () => [e.title ? (b(), k("div", {
        key: 0,
        class: g(e.n("title"))
      }, ve(e.title), 3)) : q("v-if", !0)]),
      H(e.$slots, "subtitle", { slotClass: e.n("subtitle") }, () => [e.subtitle ? (b(), k("div", {
        key: 0,
        class: g(e.n("subtitle"))
      }, ve(e.subtitle), 3)) : q("v-if", !0)]),
      e.$slots.default ? (b(), k("div", {
        key: 0,
        class: g(e.n("content"))
      }, [H(e.$slots, "default")], 2)) : q("v-if", !0),
      H(e.$slots, "description", { slotClass: e.n("description") }, () => [e.description ? (b(), k("div", {
        key: 0,
        class: g(e.n("description"))
      }, ve(e.description), 3)) : q("v-if", !0)]),
      e.$slots.extra ? (b(), k("div", {
        key: 1,
        class: g(e.n("footer"))
      }, [H(e.$slots, "extra")], 2)) : q("v-if", !0),
      e.$slots["floating-content"] && !e.isRow ? (b(), k("div", {
        key: 2,
        class: g(e.n("floating-content")),
        style: J({
          height: e.contentHeight,
          opacity: e.opacity,
          transition: `opacity ${e.floatingDuration * 2}ms`
        })
      }, [H(e.$slots, "floating-content")], 6)) : q("v-if", !0)
    ], 2),
    j(r, {
      hovering: !e.normalizedHoverable.disabled && !e.floated ? e.hovering : !1,
      color: e.normalizedHoverable.color
    }, null, 8, ["hovering", "color"]),
    e.showFloatingButtons ? (b(), k("div", {
      key: 0,
      class: g(e.classes(e.n("floating-buttons"), e.n("$--box"))),
      style: J({
        zIndex: e.zIndex,
        opacity: e.opacity,
        transition: `opacity ${e.floatingDuration * 2}ms`
      })
    }, [H(e.$slots, "close-button", {}, () => [j(o, {
      "var-card-cover": "",
      class: g(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
      onClick: Rn(e.close, ["stop"])
    }, {
      default: ue(() => [j(t, {
        "var-card-cover": "",
        name: "window-close",
        class: g(e.n("close-button-icon"))
      }, null, 8, ["class"])]),
      _: 1
    }, 8, ["class", "onClick"])])], 6)) : q("v-if", !0)
  ], 6), L("div", {
    class: g(e.n("holder")),
    style: J({
      width: e.holderWidth,
      height: e.holderHeight
    })
  }, null, 6)], 6)), [[a, {
    disabled: e.normalizedRipple.disabled || e.floater,
    color: e.normalizedRipple.color
  }], [
    i,
    e.handleHovering,
    "desktop"
  ]]);
}
var jm = te({
  name: CS,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarIcon: Je,
    VarButton: tr,
    VarHoverOverlay: Gn
  },
  props: Um,
  setup(e) {
    const n = P(null), r = P(null), t = P("auto"), o = P("auto"), a = P("100%"), i = P("100%"), l = P("auto"), s = P("auto"), u = P(void 0), d = P("hidden"), c = P("0px"), f = P("0"), v = C(() => e.layout === "row"), p = C(() => e.surface === "low" && e.variant !== "filled"), { hovering: h, handleHovering: m } = ur(), y = P(!1), $ = P(!1), { zIndex: w } = Ao(() => e.floating, 1), z = C(() => B(e.ripple)), T = C(() => N(e.hoverable));
    let O = "auto", R = "auto", U = null;
    const M = P(null);
    let D = !1;
    Mo(() => e.floating, () => !v.value), me(() => e.floating, (Q) => {
      v.value || Ne(() => {
        Q ? (D = !0, E()) : D && A();
      });
    }, { immediate: !0 });
    function E() {
      clearTimeout(M.value), clearTimeout(U), M.value = null, M.value = setTimeout(() => $S(null, null, function* () {
        const { width: Q, height: X, left: ae, top: Te } = kn(n.value);
        t.value = ze(Q), o.value = ze(X), a.value = t.value, i.value = o.value, l.value = ze(Te), s.value = ze(ae), u.value = "fixed", O = l.value, R = s.value, y.value = !0, yield Xn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", c.value = "auto", f.value = "1", d.value = "auto", $.value = !0;
      }), z.value.disabled ? 0 : OS);
    }
    function B(Q) {
      return Tn(Q) ? {
        disabled: !!Q.disabled,
        color: Q.color
      } : {
        disabled: !Q,
        color: void 0
      };
    }
    function N(Q) {
      return Tn(Q) ? {
        disabled: !!Q.disabled,
        color: Q.color
      } : {
        disabled: !Q,
        color: void 0
      };
    }
    function A() {
      clearTimeout(U), clearTimeout(M.value), M.value = null, a.value = t.value, i.value = o.value, l.value = O, s.value = R, c.value = "0px", f.value = "0", y.value = !1, U = setTimeout(() => {
        t.value = "auto", o.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", O = "auto", R = "auto", d.value = "hidden", u.value = void 0, $.value = !1;
      }, e.floatingDuration);
    }
    function I() {
      S(e["onUpdate:floating"], !1);
    }
    function F(Q) {
      S(e.onClick, Q);
    }
    return {
      card: n,
      cardFloater: r,
      holderWidth: t,
      holderHeight: o,
      floater: M,
      floaterWidth: a,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: c,
      opacity: f,
      zIndex: w,
      isRow: v,
      surfaceLow: p,
      normalizedRipple: z,
      normalizedHoverable: T,
      hovering: h,
      handleHovering: m,
      showFloatingButtons: y,
      floated: $,
      n: SS,
      classes: PS,
      toSizeUnit: ze,
      close: I,
      formatElevation: Pn,
      handleClick: F
    };
  }
});
jm.render = TS;
var mi = jm;
de(mi);
fe(mi, Um);
var WA = mi, bs = mi, Ym = {
  title: String,
  icon: Fe(pn, "name"),
  namespace: Fe(pn, "namespace"),
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: V()
}, { name: ES, n: IS, classes: BS } = oe("cell");
function DS(e, n) {
  const r = x("var-icon"), t = _e("ripple");
  return Ke((b(), k("div", {
    class: g(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
    style: J(e.borderOffsetStyles),
    onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
  }, [
    H(e.$slots, "icon", {}, () => [e.icon ? (b(), k("div", {
      key: 0,
      class: g(e.classes(e.n("icon"), e.iconClass))
    }, [j(r, {
      name: e.icon,
      namespace: e.namespace
    }, null, 8, ["name", "namespace"])], 2)) : q("v-if", !0)]),
    L("div", { class: g(e.n("content")) }, [H(e.$slots, "default", {}, () => [e.title ? (b(), k("div", {
      key: 0,
      class: g(e.classes(e.n("title"), e.titleClass))
    }, ve(e.title), 3)) : q("v-if", !0)]), H(e.$slots, "description", {}, () => [e.description ? (b(), k("div", {
      key: 0,
      class: g(e.classes(e.n("description"), e.descriptionClass))
    }, ve(e.description), 3)) : q("v-if", !0)])], 2),
    e.$slots.extra ? (b(), k("div", {
      key: 0,
      class: g(e.classes(e.n("extra"), e.extraClass))
    }, [H(e.$slots, "extra")], 2)) : q("v-if", !0)
  ], 6)), [[t, { disabled: !e.ripple }]]);
}
var Km = te({
  name: ES,
  components: { VarIcon: Je },
  directives: { Ripple: vn },
  props: Ym,
  setup(e) {
    const n = C(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ze(e.borderOffset),
      "--cell-border-right": ze(e.borderOffset)
    });
    function r(t) {
      S(e.onClick, t);
    }
    return {
      borderOffsetStyles: n,
      n: IS,
      classes: BS,
      toSizeUnit: ze,
      handleClick: r
    };
  }
});
Km.render = DS;
var gi = Km;
de(gi);
fe(gi, Ym);
var qA = gi, ys = gi, Wm = {
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
  rules: [
    Array,
    Function,
    Object
  ],
  onChange: V(),
  "onUpdate:modelValue": V()
}, { name: MS, n: AS, classes: NS } = oe("checkbox-group");
function RS(e, n) {
  const r = x("maybe-v-node"), t = x("var-checkbox"), o = x("var-form-details");
  return b(), k("div", { class: g(e.n("wrap")) }, [L("div", { class: g(e.classes(e.n(), e.n(`--${e.direction}`))) }, [e.options.length ? (b(!0), k(Be, { key: 0 }, Ye(e.options, (a) => (b(), we(t, {
    key: a[e.valueKey],
    "checked-value": a[e.valueKey],
    disabled: a.disabled
  }, {
    default: ue(({ checked: i }) => [j(r, { is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey] }, null, 8, ["is"])]),
    _: 2
  }, 1032, ["checked-value", "disabled"]))), 128)) : q("v-if", !0), H(e.$slots, "default")], 2), j(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var qm = te({
  name: MS,
  components: {
    VarFormDetails: Hn,
    VarCheckbox: ct,
    MaybeVNode: lr
  },
  props: Wm,
  setup(e) {
    const n = C(() => e.max), r = C(() => e.modelValue.length), { length: t, checkboxes: o, bindCheckboxes: a } = nw(), { bindForm: i } = Kn(), { errorMessage: l, validateWithTrigger: s, validate: u, resetValidation: d } = Jn(), c = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: h,
      validate: z,
      resetValidation: d,
      reset: w,
      errorMessage: C(() => l.value)
    };
    me(() => e.modelValue, m, { deep: !0 }), me(() => t.value, m), a(c), S(i, c);
    function f(T) {
      Ne(() => {
        const { validateTrigger: O, rules: R, modelValue: U } = e;
        s(O, T, R, U);
      });
    }
    function v(T) {
      S(e["onUpdate:modelValue"], T), S(e.onChange, T), f("onChange");
    }
    function p(T) {
      const { modelValue: O } = e;
      O.includes(T) || v([...O, T]);
    }
    function h(T) {
      const { modelValue: O } = e;
      O.includes(T) && v(O.filter((R) => R !== T));
    }
    function m() {
      o.forEach(({ sync: T }) => T(e.modelValue));
    }
    function y() {
      const T = Jl(o.map(({ checkedValue: O }) => O.value));
      return S(e["onUpdate:modelValue"], T), T;
    }
    function $() {
      const T = Jl(o.filter(({ checked: O }) => !O.value).map(({ checkedValue: O }) => O.value));
      return S(e["onUpdate:modelValue"], T), T;
    }
    function w() {
      S(e["onUpdate:modelValue"], []), d();
    }
    function z() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: AS,
      classes: NS,
      checkAll: y,
      inverseAll: $,
      reset: w,
      validate: z,
      resetValidation: d,
      isFunction: Yn
    };
  }
});
qm.render = RS;
var hi = qm;
de(hi);
fe(hi, Wm);
var XA = hi, ws = hi, Xm = {
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
  icon: Fe(pn, "name"),
  iconName: Fe(pn, "name"),
  namespace: Fe(pn, "namespace"),
  plain: Boolean,
  round: {
    type: Boolean,
    default: !0
  },
  elevation: {
    type: [
      Boolean,
      Number,
      String
    ],
    default: !1
  },
  block: Boolean,
  closeable: Boolean,
  onClose: V()
}, { name: VS, n: xr, classes: LS } = oe("chip");
function FS(e, n) {
  const r = x("var-icon");
  return b(), we(bn, { name: e.n("$-fade") }, {
    default: ue(() => [L("span", Xe({
      class: e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 1), ...e.contentClass),
      style: e.chipStyle
    }, e.$attrs), [
      H(e.$slots, "left"),
      L("span", { class: g(e.n(`text-${e.size}`)) }, [H(e.$slots, "default")], 2),
      H(e.$slots, "right"),
      e.closeable ? (b(), k("span", {
        key: 0,
        class: g(e.n("--close")),
        onClick: n[0] || (n[0] = (...t) => e.handleClose && e.handleClose(...t))
      }, [H(e.$slots, "icon", {}, () => [j(r, {
        name: e.closeIconName,
        namespace: e.namespace
      }, null, 8, ["name", "namespace"])])], 2)) : q("v-if", !0)
    ], 16)]),
    _: 3
  }, 8, ["name"]);
}
var Gm = te({
  name: VS,
  components: { VarIcon: Je },
  inheritAttrs: !1,
  props: Xm,
  setup(e) {
    const n = C(() => {
      const { plain: a, textColor: i, color: l } = e;
      return a ? {
        color: i || l,
        borderColor: l
      } : {
        color: i,
        background: l
      };
    }), r = C(() => {
      const { size: a, block: i, type: l, plain: s, round: u } = e, d = xr(i ? "$--flex" : "$--inline-flex"), c = s ? `${xr("plain")} ${xr(`plain-${l}`)}` : xr(`--${l}`), f = u ? xr("--round") : null;
      return [
        xr(`--${a}`),
        d,
        c,
        f
      ];
    }), t = C(() => {
      var a, i;
      return (i = (a = e.icon) != null ? a : e.iconName) != null ? i : "close-circle";
    });
    function o(a) {
      S(e.onClose, a);
    }
    return {
      chipStyle: n,
      contentClass: r,
      closeIconName: t,
      n: xr,
      classes: LS,
      formatElevation: Pn,
      handleClose: o
    };
  }
});
Gm.render = FS;
var bi = Gm;
de(bi);
fe(bi, Xm);
var GA = bi, $a = bi, ks = /* @__PURE__ */ Symbol("HIGHLIGHTER_PROVIDER_KEY");
function HS(e) {
  Au(ks, e);
}
function US() {
  return Fu(ks) ? Mu(ks) : {
    highlighter: null,
    theme: null
  };
}
var Zm = {
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
}, jS = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: YS, n: KS, classes: WS } = oe("code"), qS = ["innerHTML"];
function XS(e, n) {
  return b(), k("div", {
    class: g(e.classes(e.n(), [e.wordWrap, e.n("--word-wrap")])),
    innerHTML: e.highlightedCode
  }, null, 10, qS);
}
var Jm = te({
  name: YS,
  props: Zm,
  setup(e) {
    const { highlighter: n, theme: r } = US(), t = P(""), o = C(() => {
      var a;
      return (a = e.theme) != null ? a : r?.value;
    });
    return n && me(() => [
      n.value,
      e.code,
      e.language,
      o.value,
      e.trim
    ], (a) => jS(null, [a], function* ([i, l, s = "", u = "", d]) {
      i && (t.value = yield i.codeToHtml(d ? l.trim() : l, {
        lang: s,
        theme: u
      }));
    }), { immediate: !0 }), {
      n: KS,
      classes: WS,
      highlightedCode: t
    };
  }
});
Jm.render = XS;
var yi = Jm;
de(yi);
fe(yi, Zm);
var ZA = yi, $s = yi, Qm = {
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
  xs: [
    Object,
    Number,
    String
  ],
  sm: [
    Object,
    Number,
    String
  ],
  md: [
    Object,
    Number,
    String
  ],
  lg: [
    Object,
    Number,
    String
  ],
  xl: [
    Object,
    Number,
    String
  ],
  onClick: V()
}, xm = /* @__PURE__ */ Symbol("ROW_BIND_COL_KEY");
function GS() {
  const { length: e, childProviders: n, bindChildren: r } = Bn(xm);
  return {
    length: e,
    cols: n,
    bindCols: r
  };
}
function ZS() {
  const { index: e, bindParent: n, parentProvider: r } = In(xm);
  return {
    index: e,
    row: r,
    bindRow: n
  };
}
var { name: JS, n: Qo, classes: QS } = oe("col");
function xS(e, n) {
  return b(), k("div", {
    class: g(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n(`--span-${e.span}`)], [e.offset, e.n(`--offset-${e.offset}`)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
    style: J({
      flexDirection: e.direction,
      justifyContent: e.padStartFlex(e.justify),
      alignItems: e.padStartFlex(e.align),
      paddingLeft: e.toSizeUnit(e.padding.left),
      paddingRight: e.toSizeUnit(e.padding.right),
      paddingTop: e.toSizeUnit(e.padding.top),
      paddingBottom: e.toSizeUnit(e.padding.bottom)
    }),
    onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [H(e.$slots, "default")], 6);
}
var _m = te({
  name: JS,
  props: Qm,
  setup(e) {
    const n = C(() => Z(e.span)), r = C(() => Z(e.offset)), t = C(() => {
      var s;
      const [u = 0, d = 0] = (s = o?.average.value) != null ? s : [];
      return {
        left: d,
        right: d,
        top: u,
        bottom: u
      };
    }), { row: o, bindRow: a } = ZS();
    S(a, null);
    function i(s, u) {
      const d = [];
      if (u == null) return d;
      if (Tn(u)) {
        const { offset: c, span: f } = u;
        return Number(f) >= 0 && d.push(Qo(`--span-${s}-${f}`)), c && d.push(Qo(`--offset-${s}-${c}`)), d;
      }
      return Number(u) >= 0 && d.push(Qo(`--span-${s}-${u}`)), d;
    }
    function l(s) {
      S(e.onClick, s);
    }
    return {
      span: n,
      offset: r,
      padding: t,
      n: Qo,
      classes: QS,
      toNumber: Z,
      toSizeUnit: ze,
      getSize: i,
      handleClick: l,
      padStartFlex: ba
    };
  }
});
_m.render = xS;
var wi = _m;
de(wi);
fe(wi, Qm);
var JA = wi, Cs = wi, eg = {
  modelValue: [
    Array,
    String,
    Number
  ],
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
    type: [
      Boolean,
      String,
      Number
    ],
    default: !0
  },
  onChange: V(),
  "onUpdate:modelValue": V()
}, ng = /* @__PURE__ */ Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function _S() {
  const { childProviders: e, length: n, bindChildren: r } = Bn(ng);
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: r
  };
}
var { name: e2, n: n2 } = oe("collapse");
function r2(e, n) {
  return b(), k("div", { class: g(e.n()) }, [H(e.$slots, "default")], 2);
}
var rg = te({
  name: e2,
  props: eg,
  setup(e) {
    const n = C(() => e.offset), r = C(() => e.divider), t = C(() => e.elevation), o = C(() => e.accordion), a = C(() => qr(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = _S(), u = {
      offset: n,
      divider: r,
      elevation: t,
      accordion: o,
      updateItem: d
    };
    me(() => i.value, () => Ne().then(v)), me(() => e.modelValue, () => Ne().then(v)), s(u);
    function d(h, m) {
      if (e.accordion) {
        c(m ? h : void 0);
        return;
      }
      c(m ? [...a.value, h] : a.value.filter((y) => y !== h));
    }
    function c(h) {
      S(e["onUpdate:modelValue"], h), S(e.onChange, h);
    }
    function f() {
      if (e.accordion) {
        const [y] = a.value;
        if (y == null) return;
        const $ = l.find(({ name: w }) => y === w.value);
        return $ ?? l.find(({ index: w, name: z }) => z.value == null && y === w.value);
      }
      const h = l.filter(({ name: y }) => y.value != null && a.value.includes(y.value)), m = l.filter(({ index: y, name: $ }) => $.value == null && a.value.includes(y.value));
      return [...h, ...m];
    }
    function v() {
      const h = I0(qr(f()));
      l.forEach((m) => {
        m.init(h.includes(m));
      });
    }
    return {
      divider: r,
      n: n2,
      toggleAll: (h) => {
        e.accordion || c(l.filter((m) => {
          var y;
          const $ = (y = m.name.value) != null ? y : m.index.value, w = a.value.includes($);
          return h.skipDisabled && m.disabled.value ? w : h.expand === "inverse" ? !w : h.expand;
        }).map((m) => {
          var y;
          return (y = m.name.value) != null ? y : m.index.value;
        }));
      }
    };
  }
});
rg.render = r2;
var ki = rg;
de(ki);
fe(ki, eg);
var QA = ki, Ss = ki, Xc = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
});
function tg(e) {
  const { contentEl: n, showContent: r, expand: t } = e;
  let o = !0, a = 0, i = 0;
  me(t, (f) => {
    const v = ++a;
    Ne(() => {
      f ? s(v) : u(v);
    });
  }, { immediate: !0 });
  function l(f) {
    return f === a;
  }
  function s(f) {
    return Xc(this, null, function* () {
      if (!n.value || (n.value.style.height = "", r.value = !0, yield it(), !n.value || !l(f))) return;
      const { offsetHeight: v } = n.value;
      n.value.style.height = "0px", yield it(), !(!n.value || !l(f)) && (n.value.style.height = v + "px", o && (yield Xn(), o && l(f) && d()));
    });
  }
  const u = (f) => Xc(null, null, function* () {
    if (!n.value) return;
    const { offsetHeight: v } = n.value;
    n.value.style.height = v + "px", yield it(), !(!n.value || !l(f)) && (n.value.style.height = "0px");
  }), d = (f) => {
    f && (f.target !== n.value || f.propertyName !== "height") || f && i !== a || (t.value || (r.value = !1), n.value.style.height = "");
  };
  return {
    handleTransitionEnd: d,
    handleTransitionStart: (f) => {
      f && (f.target !== n.value || f.propertyName !== "height") || (i = a, o = !1);
    }
  };
}
var og = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
function t2() {
  const { parentProvider: e, index: n, bindParent: r } = In(ng);
  return rr(!!r, "Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var { name: o2, n: a2, classes: i2 } = oe("collapse-item"), l2 = [
  "aria-expanded",
  "aria-disabled",
  "role"
];
function s2(e, n) {
  const r = x("var-icon");
  return b(), k("div", {
    class: g(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
    style: J(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
  }, [
    L("div", { class: g(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2))) }, null, 2),
    L("div", {
      class: g(e.classes(e.n("header"), [!e.disabled, e.n("header--cursor-pointer")])),
      "aria-expanded": e.isShow,
      "aria-disabled": e.disabled,
      role: e.accordion ? "tab" : "button",
      onClick: n[0] || (n[0] = (...t) => e.toggle && e.toggle(...t))
    }, [e.$slots.title || e.title ? (b(), k("div", {
      key: 0,
      class: g(e.n("header-title"))
    }, [H(e.$slots, "title", {}, () => [Le(ve(e.title), 1)])], 2)) : q("v-if", !0), L("div", { class: g(e.n("header-icon")) }, [H(e.$slots, "icon", {}, () => [j(r, {
      name: e.icon,
      transition: 250,
      class: g(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
    }, null, 8, ["name", "class"])])], 2)], 10, l2),
    Ke(L("div", {
      ref: "contentEl",
      class: g(e.n("content")),
      onTransitionend: n[1] || (n[1] = (...t) => e.handleTransitionEnd && e.handleTransitionEnd(...t)),
      onTransitionstart: n[2] || (n[2] = (...t) => e.handleTransitionStart && e.handleTransitionStart(...t))
    }, [L("div", { class: g(e.n("content-wrap")) }, [H(e.$slots, "default")], 2)], 34), [[yr, e.showContent]])
  ], 6);
}
var ag = te({
  name: o2,
  components: { VarIcon: Je },
  props: og,
  setup(e) {
    const n = P(!1), r = P(!1), t = P(null), o = C(() => e.name), a = C(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = t2(), { offset: u, divider: d, elevation: c, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: o,
      disabled: a,
      init: m
    });
    const { handleTransitionEnd: p, handleTransitionStart: h } = tg({
      contentEl: t,
      showContent: r,
      expand: n
    });
    function m($) {
      n.value = $;
    }
    function y() {
      var $;
      e.disabled || v(($ = e.name) != null ? $ : i.value, !n.value);
    }
    return {
      isShow: n,
      showContent: r,
      offset: u,
      divider: d,
      elevation: c,
      contentEl: t,
      accordion: f,
      n: a2,
      classes: i2,
      toggle: y,
      formatElevation: Pn,
      handleTransitionEnd: p,
      handleTransitionStart: h
    };
  }
});
ag.render = s2;
var $i = ag;
de($i);
fe($i, og);
var xA = $i, Ps = $i, ig = { expand: Boolean }, { name: u2, n: d2 } = oe("collapse-transition");
function c2(e, n) {
  return Ke((b(), k("div", {
    ref: "contentEl",
    class: g(e.n("content")),
    onTransitionend: n[0] || (n[0] = (...r) => e.handleTransitionEnd && e.handleTransitionEnd(...r)),
    onTransitionstart: n[1] || (n[1] = (...r) => e.handleTransitionStart && e.handleTransitionStart(...r))
  }, [H(e.$slots, "default")], 34)), [[yr, e.showContent]]);
}
var lg = te({
  name: u2,
  props: ig,
  setup(e) {
    const n = P(!1), r = P(null), { handleTransitionEnd: t, handleTransitionStart: o } = tg({
      contentEl: r,
      showContent: n,
      expand: C(() => e.expand)
    });
    return {
      showContent: n,
      contentEl: r,
      n: d2,
      handleTransitionEnd: t,
      handleTransitionStart: o
    };
  }
});
lg.render = c2;
var Ci = lg;
de(Ci);
fe(Ci, ig);
var _A = Ci, Ca = Ci, sg = {
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
  timingFunction: { type: Function },
  onEnd: V()
}, { name: f2, n: v2 } = oe("count-to");
function p2(e, n) {
  return b(), k("div", { class: g(e.n()) }, [H(e.$slots, "default", { value: e.value }, () => [Le(ve(e.value), 1)])], 2);
}
var ug = te({
  name: f2,
  props: sg,
  setup(e) {
    const { value: n, reset: r, start: t, pause: o } = K0({
      from: () => Z(e.from),
      to: () => Z(e.to),
      duration: () => Z(e.duration),
      timingFunction: e.timingFunction,
      onFinished() {
        S(e.onEnd);
      }
    }), a = C(() => Ql(n.value, Z(e.precision)));
    me(() => [
      e.from,
      e.to,
      e.duration
    ], i), Tr(i);
    function i() {
      r(), e.autoStart && t();
    }
    return {
      value: a,
      n: v2,
      start: t,
      pause: o,
      reset: i,
      toNumber: Z,
      floor: Ql
    };
  }
});
ug.render = p2;
var Si = ug;
de(Si);
fe(Si, sg);
var eN = Si, Os = Si, dg = {
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
}, { name: m2, n: g2 } = oe("countdown"), zs = 1e3, Ts = 60 * zs, Es = 60 * Ts, Gc = 24 * Es;
function h2(e, n) {
  return b(), k("div", { class: g(e.n()) }, [H(e.$slots, "default", yt(Aa(e.timeData)), () => [Le(ve(e.showTime), 1)])], 2);
}
var cg = te({
  name: m2,
  props: dg,
  setup(e) {
    const n = P(""), r = P({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let t = 0, o = !1, a = 0, i = 0, l;
    me(() => e.time, () => {
      v(), e.autoStart && c();
    }), Tr(() => {
      d(), e.autoStart && c();
    }), vt(() => {
      l != null && (o = l, o === !0 && c(!0));
    }), Ot(() => {
      l = o, f();
    }), Bo(f);
    function s(p, h) {
      const m = Object.values(h), y = [
        "DD",
        "HH",
        "mm",
        "ss"
      ], $ = [
        24,
        60,
        60,
        1e3
      ];
      if (y.forEach((w, z) => {
        p.includes(w) ? p = p.replace(w, Gr(`${m[z]}`, 2, "0")) : m[z + 1] += m[z] * $[z];
      }), p.includes("S")) {
        const w = Gr(`${m[m.length - 1]}`, 3, "0");
        p.includes("SSS") ? p = p.replace("SSS", w) : p.includes("SS") ? p = p.replace("SS", w.slice(0, 2)) : p = p.replace("S", w.slice(0, 1));
      }
      return p;
    }
    function u(p) {
      const h = {
        days: Math.floor(p / Gc),
        hours: Math.floor(p % Gc / Es),
        minutes: Math.floor(p % Es / Ts),
        seconds: Math.floor(p % Ts / zs),
        milliseconds: Math.floor(p % zs)
      };
      r.value = h, S(e.onChange, r.value), n.value = s(e.format, h);
    }
    function d() {
      const { time: p, onEnd: h } = e, m = performance.now();
      if (t || (t = m + Z(p)), i = t - m, i < 0 && (i = 0), u(i), i === 0) {
        S(h);
        return;
      }
      o && (a = Vt(d));
    }
    function c(p = !1) {
      o && !p || (o = !0, t = performance.now() + (i || Z(e.time)), d());
    }
    function f() {
      o = !1, ma(a);
    }
    function v() {
      t = 0, o = !1, ma(a), d();
    }
    return {
      showTime: n,
      timeData: r,
      n: g2,
      start: c,
      pause: f,
      reset: v
    };
  }
});
cg.render = h2;
var Pi = cg;
de(Pi);
fe(Pi, dg);
var nN = Pi, Is = Pi, Mt = 9e15, gt = 1e9, Bs = "0123456789abcdef", Sa = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Pa = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Ds = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Mt,
  maxE: Mt,
  crypto: !1
}, fg, Kr, He = !0, Oi = "[DecimalError] ", ft = Oi + "Invalid argument: ", vg = Oi + "Precision limit exceeded", pg = Oi + "crypto unavailable", mg = "[object Decimal]", Zn = Math.floor, Nn = Math.pow, b2 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, y2 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, w2 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, gg = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, zr = 1e7, Me = 7, k2 = 9007199254740991, $2 = Sa.length - 1, Ms = Pa.length - 1, le = { toStringTag: mg };
le.absoluteValue = le.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), De(e);
};
le.ceil = function() {
  return De(new this.constructor(this), this.e + 1, 2);
};
le.clampedTo = le.clamp = function(e, n) {
  var r, t = this, o = t.constructor;
  if (e = new o(e), n = new o(n), !e.s || !n.s) return new o(NaN);
  if (e.gt(n)) throw Error(ft + n);
  return r = t.cmp(e), r < 0 ? e : t.cmp(n) > 0 ? n : new o(t);
};
le.comparedTo = le.cmp = function(e) {
  var n, r, t, o, a = this, i = a.d, l = (e = new a.constructor(e)).d, s = a.s, u = e.s;
  if (!i || !l) return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0]) return i[0] ? s : l[0] ? -u : 0;
  if (s !== u) return s;
  if (a.e !== e.e) return a.e > e.e ^ s < 0 ? 1 : -1;
  for (t = i.length, o = l.length, n = 0, r = t < o ? t : o; n < r; ++n) if (i[n] !== l[n]) return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return t === o ? 0 : t > o ^ s < 0 ? 1 : -1;
};
le.cosine = le.cos = function() {
  var e, n, r = this, t = r.constructor;
  return r.d ? r.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(r.e, r.sd()) + Me, t.rounding = 1, r = C2(t, kg(t, r)), t.precision = e, t.rounding = n, De(Kr == 2 || Kr == 3 ? r.neg() : r, e, n, !0)) : new t(1) : new t(NaN);
};
le.cubeRoot = le.cbrt = function() {
  var e, n, r, t, o, a, i, l, s, u, d = this, c = d.constructor;
  if (!d.isFinite() || d.isZero()) return new c(d);
  for (He = !1, a = d.s * Nn(d.s * d, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (r = Un(d.d), e = d.e, (a = (e - r.length + 1) % 3) && (r += a == 1 || a == -2 ? "0" : "00"), a = Nn(r, 1 / 3), e = Zn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? r = "5e" + e : (r = a.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), t = new c(r), t.s = d.s) : t = new c(a.toString()), i = (e = c.precision) + 3; ; )
    if (l = t, s = l.times(l).times(l), u = s.plus(d), t = dn(u.plus(d).times(l), u.plus(s), i + 2, 1), Un(l.d).slice(0, i) === (r = Un(t.d)).slice(0, i))
      if (r = r.slice(i - 3, i + 1), r == "9999" || !o && r == "4999") {
        if (!o && (De(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          t = l;
          break;
        }
        i += 4, o = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (De(t, e + 1, 1), n = !t.times(t).times(t).eq(d));
        break;
      }
  return He = !0, De(t, e, c.rounding, n);
};
le.decimalPlaces = le.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Zn(this.e / Me)) * Me, e = n[e], e) for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
le.dividedBy = le.div = function(e) {
  return dn(this, new this.constructor(e));
};
le.dividedToIntegerBy = le.divToInt = function(e) {
  var n = this, r = n.constructor;
  return De(dn(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
le.equals = le.eq = function(e) {
  return this.cmp(e) === 0;
};
le.floor = function() {
  return De(new this.constructor(this), this.e + 1, 3);
};
le.greaterThan = le.gt = function(e) {
  return this.cmp(e) > 0;
};
le.greaterThanOrEqualTo = le.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
le.hyperbolicCosine = le.cosh = function() {
  var e, n, r, t, o, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite()) return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero()) return l;
  r = i.precision, t = i.rounding, i.precision = r + Math.max(a.e, a.sd()) + 4, i.rounding = 1, o = a.d.length, o < 32 ? (e = Math.ceil(o / 3), n = (1 / Ti(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = Wt(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(d.minus(s.times(d))));
  return De(a, i.precision = r, i.rounding = t, !0);
};
le.hyperbolicSine = le.sinh = function() {
  var e, n, r, t, o = this, a = o.constructor;
  if (!o.isFinite() || o.isZero()) return new a(o);
  if (n = a.precision, r = a.rounding, a.precision = n + Math.max(o.e, o.sd()) + 4, a.rounding = 1, t = o.d.length, t < 3) o = Wt(a, 2, o, o, !0);
  else {
    e = 1.4 * Math.sqrt(t), e = e > 16 ? 16 : e | 0, o = o.times(1 / Ti(5, e)), o = Wt(a, 2, o, o, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = o.times(o), o = o.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = r, De(o, n, r, !0);
};
le.hyperbolicTangent = le.tanh = function() {
  var e, n, r = this, t = r.constructor;
  return r.isFinite() ? r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + 7, t.rounding = 1, dn(r.sinh(), r.cosh(), t.precision = e, t.rounding = n)) : new t(r.s);
};
le.inverseCosine = le.acos = function() {
  var e = this, n = e.constructor, r = e.abs().cmp(1), t = n.precision, o = n.rounding;
  return r !== -1 ? r === 0 ? e.isNeg() ? Rr(n, t, o) : new n(0) : new n(NaN) : e.isZero() ? Rr(n, t + 4, o).times(0.5) : (n.precision = t + 6, n.rounding = 1, e = new n(1).minus(e).div(e.plus(1)).sqrt().atan(), n.precision = t, n.rounding = o, e.times(2));
};
le.inverseHyperbolicCosine = le.acosh = function() {
  var e, n, r = this, t = r.constructor;
  return r.lte(1) ? new t(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, t.rounding = 1, He = !1, r = r.times(r).minus(1).sqrt().plus(r), He = !0, t.precision = e, t.rounding = n, r.ln()) : new t(r);
};
le.inverseHyperbolicSine = le.asinh = function() {
  var e, n, r = this, t = r.constructor;
  return !r.isFinite() || r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, t.rounding = 1, He = !1, r = r.times(r).plus(1).sqrt().plus(r), He = !0, t.precision = e, t.rounding = n, r.ln());
};
le.inverseHyperbolicTangent = le.atanh = function() {
  var e, n, r, t, o = this, a = o.constructor;
  return o.isFinite() ? o.e >= 0 ? new a(o.abs().eq(1) ? o.s / 0 : o.isZero() ? o : NaN) : (e = a.precision, n = a.rounding, t = o.sd(), Math.max(t, e) < 2 * -o.e - 1 ? De(new a(o), e, n, !0) : (a.precision = r = t - o.e, o = dn(o.plus(1), new a(1).minus(o), r + e, 1), a.precision = e + 4, a.rounding = 1, o = o.ln(), a.precision = e, a.rounding = n, o.times(0.5))) : new a(NaN);
};
le.inverseSine = le.asin = function() {
  var e, n, r, t, o = this, a = o.constructor;
  return o.isZero() ? new a(o) : (n = o.abs().cmp(1), r = a.precision, t = a.rounding, n !== -1 ? n === 0 ? (e = Rr(a, r + 4, t).times(0.5), e.s = o.s, e) : new a(NaN) : (a.precision = r + 6, a.rounding = 1, o = o.div(new a(1).minus(o.times(o)).sqrt().plus(1)).atan(), a.precision = r, a.rounding = t, o.times(2)));
};
le.inverseTangent = le.atan = function() {
  var e, n, r, t, o, a, i, l, s, u = this, d = u.constructor, c = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new d(u);
    if (u.abs().eq(1) && c + 4 <= Ms)
      return i = Rr(d, c + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s) return new d(NaN);
    if (c + 4 <= Ms)
      return i = Rr(d, c + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = c + 10, d.rounding = 1, r = Math.min(28, l / Me + 2 | 0), e = r; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (He = !1, n = Math.ceil(l / Me), t = 1, s = u.times(u), i = new d(u), o = u; e !== -1; )
    if (o = o.times(s), a = i.minus(o.div(t += 2)), o = o.times(s), i = a.plus(o.div(t += 2)), i.d[n] !== void 0) for (e = n; i.d[e] === a.d[e] && e--; ) ;
  return r && (i = i.times(2 << r - 1)), He = !0, De(i, d.precision = c, d.rounding = f, !0);
};
le.isFinite = function() {
  return !!this.d;
};
le.isInteger = le.isInt = function() {
  return !!this.d && Zn(this.e / Me) > this.d.length - 2;
};
le.isNaN = function() {
  return !this.s;
};
le.isNegative = le.isNeg = function() {
  return this.s < 0;
};
le.isPositive = le.isPos = function() {
  return this.s > 0;
};
le.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
le.lessThan = le.lt = function(e) {
  return this.cmp(e) < 0;
};
le.lessThanOrEqualTo = le.lte = function(e) {
  return this.cmp(e) < 1;
};
le.logarithm = le.log = function(e) {
  var n, r, t, o, a, i, l, s, u = this, d = u.constructor, c = d.precision, f = d.rounding, v = 5;
  if (e == null)
    e = new d(10), n = !0;
  else {
    if (e = new d(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1)) return new d(NaN);
    n = e.eq(10);
  }
  if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1)) return new d(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (n) if (r.length > 1) a = !0;
  else {
    for (o = r[0]; o % 10 === 0; ) o /= 10;
    a = o !== 1;
  }
  if (He = !1, l = c + v, i = ot(u, l), t = n ? Oa(d, l + 10) : ot(e, l), s = dn(i, t, l, 1), $o(s.d, o = c, f)) do
    if (l += 10, i = ot(u, l), t = n ? Oa(d, l + 10) : ot(e, l), s = dn(i, t, l, 1), !a) {
      +Un(s.d).slice(o + 1, o + 15) + 1 == 1e14 && (s = De(s, c + 1, 0));
      break;
    }
  while ($o(s.d, o += 10, f));
  return He = !0, De(s, c, f);
};
le.minus = le.sub = function(e) {
  var n, r, t, o, a, i, l, s, u, d, c, f, v = this, p = v.constructor;
  if (e = new p(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new p(NaN) : v.d ? e.s = -e.s : e = new p(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s)
    return e.s = -e.s, v.plus(e);
  if (u = v.d, f = e.d, l = p.precision, s = p.rounding, !u[0] || !f[0]) {
    if (f[0]) e.s = -e.s;
    else if (u[0]) e = new p(v);
    else return new p(s === 3 ? -0 : 0);
    return He ? De(e, l, s) : e;
  }
  if (r = Zn(e.e / Me), d = Zn(v.e / Me), u = u.slice(), a = d - r, a) {
    for (c = a < 0, c ? (n = u, a = -a, i = f.length) : (n = f, r = d, i = u.length), t = Math.max(Math.ceil(l / Me), i) + 2, a > t && (a = t, n.length = 1), n.reverse(), t = a; t--; ) n.push(0);
    n.reverse();
  } else {
    for (t = u.length, i = f.length, c = t < i, c && (i = t), t = 0; t < i; t++) if (u[t] != f[t]) {
      c = u[t] < f[t];
      break;
    }
    a = 0;
  }
  for (c && (n = u, u = f, f = n, e.s = -e.s), i = u.length, t = f.length - i; t > 0; --t) u[i++] = 0;
  for (t = f.length; t > a; ) {
    if (u[--t] < f[t]) {
      for (o = t; o && u[--o] === 0; ) u[o] = zr - 1;
      --u[o], u[t] += zr;
    }
    u[t] -= f[t];
  }
  for (; u[--i] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --r;
  return u[0] ? (e.d = u, e.e = zi(u, r), He ? De(e, l, s) : e) : new p(s === 3 ? -0 : 0);
};
le.modulo = le.mod = function(e) {
  var n, r = this, t = r.constructor;
  return e = new t(e), !r.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || r.d && !r.d[0] ? De(new t(r), t.precision, t.rounding) : (He = !1, t.modulo == 9 ? (n = dn(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = dn(r, e, 0, t.modulo, 1), n = n.times(e), He = !0, r.minus(n));
};
le.naturalExponential = le.exp = function() {
  return As(this);
};
le.naturalLogarithm = le.ln = function() {
  return ot(this);
};
le.negated = le.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, De(e);
};
le.plus = le.add = function(e) {
  var n, r, t, o, a, i, l, s, u, d, c = this, f = c.constructor;
  if (e = new f(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new f(NaN) : c.d || (e = new f(e.d || c.s === e.s ? c : NaN)), e;
  if (c.s != e.s)
    return e.s = -e.s, c.minus(e);
  if (u = c.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(c)), He ? De(e, l, s) : e;
  if (a = Zn(c.e / Me), t = Zn(e.e / Me), u = u.slice(), o = a - t, o) {
    for (o < 0 ? (r = u, o = -o, i = d.length) : (r = d, t = a, i = u.length), a = Math.ceil(l / Me), i = a > i ? a + 1 : i + 1, o > i && (o = i, r.length = 1), r.reverse(); o--; ) r.push(0);
    r.reverse();
  }
  for (i = u.length, o = d.length, i - o < 0 && (o = i, r = d, d = u, u = r), n = 0; o; )
    n = (u[--o] = u[o] + d[o] + n) / zr | 0, u[o] %= zr;
  for (n && (u.unshift(n), ++t), i = u.length; u[--i] == 0; ) u.pop();
  return e.d = u, e.e = zi(u, t), He ? De(e, l, s) : e;
};
le.precision = le.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(ft + e);
  return r.d ? (n = hg(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
le.round = function() {
  var e = this, n = e.constructor;
  return De(new n(e), e.e + 1, n.rounding);
};
le.sine = le.sin = function() {
  var e, n, r = this, t = r.constructor;
  return r.isFinite() ? r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(r.e, r.sd()) + Me, t.rounding = 1, r = P2(t, kg(t, r)), t.precision = e, t.rounding = n, De(Kr > 2 ? r.neg() : r, e, n, !0)) : new t(NaN);
};
le.squareRoot = le.sqrt = function() {
  var e, n, r, t, o, a, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0]) return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (He = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = Un(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Zn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), t = new d(n)) : t = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (a = t, t = a.plus(dn(i, a, r + 2, 1)).times(0.5), Un(a.d).slice(0, r) === (n = Un(t.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !o && n == "4999") {
        if (!o && (De(a, s + 1, 0), a.times(a).eq(i))) {
          t = a;
          break;
        }
        r += 4, o = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (De(t, s + 1, 1), e = !t.times(t).eq(i));
        break;
      }
  return He = !0, De(t, s, d.rounding, e);
};
le.tangent = le.tan = function() {
  var e, n, r = this, t = r.constructor;
  return r.isFinite() ? r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + 10, t.rounding = 1, r = r.sin(), r.s = 1, r = dn(r, new t(1).minus(r.times(r)).sqrt(), e + 10, 0), t.precision = e, t.rounding = n, De(Kr == 2 || Kr == 4 ? r.neg() : r, e, n, !0)) : new t(NaN);
};
le.times = le.mul = function(e) {
  var n, r, t, o, a, i, l, s, u, d = this, c = d.constructor, f = d.d, v = (e = new c(e)).d;
  if (e.s *= d.s, !f || !f[0] || !v || !v[0]) return new c(!e.s || f && !f[0] && !v || v && !v[0] && !f ? NaN : !f || !v ? e.s / 0 : e.s * 0);
  for (r = Zn(d.e / Me) + Zn(e.e / Me), s = f.length, u = v.length, s < u && (a = f, f = v, v = a, i = s, s = u, u = i), a = [], i = s + u, t = i; t--; ) a.push(0);
  for (t = u; --t >= 0; ) {
    for (n = 0, o = s + t; o > t; )
      l = a[o] + v[t] * f[o - t - 1] + n, a[o--] = l % zr | 0, n = l / zr | 0;
    a[o] = (a[o] + n) % zr | 0;
  }
  for (; !a[--i]; ) a.pop();
  return n ? ++r : a.shift(), e.d = a, e.e = zi(a, r), He ? De(e, c.precision, c.rounding) : e;
};
le.toBinary = function(e, n) {
  return id(this, 2, e, n);
};
le.toDecimalPlaces = le.toDP = function(e, n) {
  var r = this, t = r.constructor;
  return r = new t(r), e === void 0 ? r : (dr(e, 0, gt), n === void 0 ? n = t.rounding : dr(n, 0, 8), De(r, e + r.e + 1, n));
};
le.toExponential = function(e, n) {
  var r, t = this, o = t.constructor;
  return e === void 0 ? r = Lr(t, !0) : (dr(e, 0, gt), n === void 0 ? n = o.rounding : dr(n, 0, 8), t = De(new o(t), e + 1, n), r = Lr(t, !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
le.toFixed = function(e, n) {
  var r, t, o = this, a = o.constructor;
  return e === void 0 ? r = Lr(o) : (dr(e, 0, gt), n === void 0 ? n = a.rounding : dr(n, 0, 8), t = De(new a(o), e + o.e + 1, n), r = Lr(t, !1, e + t.e + 1)), o.isNeg() && !o.isZero() ? "-" + r : r;
};
le.toFraction = function(e) {
  var n, r, t, o, a, i, l, s, u, d, c, f, v = this, p = v.d, h = v.constructor;
  if (!p) return new h(v);
  if (u = r = new h(1), t = s = new h(0), n = new h(t), a = n.e = hg(p) - v.e - 1, i = a % Me, n.d[0] = Nn(10, i < 0 ? Me + i : i), e == null) e = a > 0 ? n : u;
  else {
    if (l = new h(e), !l.isInt() || l.lt(u)) throw Error(ft + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (He = !1, l = new h(Un(p)), d = h.precision, h.precision = a = p.length * Me * 2; c = dn(l, n, 0, 1, 1), o = r.plus(c.times(t)), o.cmp(e) != 1; )
    r = t, t = o, o = u, u = s.plus(c.times(o)), s = o, o = n, n = l.minus(c.times(o)), l = o;
  return o = dn(e.minus(r), t, 0, 1, 1), s = s.plus(o.times(u)), r = r.plus(o.times(t)), s.s = u.s = v.s, f = dn(u, t, a, 1).minus(v).abs().cmp(dn(s, r, a, 1).minus(v).abs()) < 1 ? [u, t] : [s, r], h.precision = d, He = !0, f;
};
le.toHexadecimal = le.toHex = function(e, n) {
  return id(this, 16, e, n);
};
le.toNearest = function(e, n) {
  var r = this, t = r.constructor;
  if (r = new t(r), e == null) {
    if (!r.d) return r;
    e = new t(1), n = t.rounding;
  } else {
    if (e = new t(e), n === void 0 ? n = t.rounding : dr(n, 0, 8), !r.d) return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (He = !1, r = dn(r, e, 0, n, 1).times(e), He = !0, De(r)) : (e.s = r.s, r = e), r;
};
le.toNumber = function() {
  return +this;
};
le.toOctal = function(e, n) {
  return id(this, 8, e, n);
};
le.toPower = le.pow = function(e) {
  var n, r, t, o, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new s(Nn(+l, u));
  if (l = new s(l), l.eq(1)) return l;
  if (t = s.precision, a = s.rounding, e.eq(1)) return De(l, t, a);
  if (n = Zn(e.e / Me), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= k2)
    return o = bg(s, l, r, t), e.s < 0 ? new s(1).div(o) : De(o, t, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1) return new s(NaN);
    if ((e.d[n] & 1) == 0 && (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = Nn(+l, u), n = r == 0 || !isFinite(r) ? Zn(u * (Math.log("0." + Un(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (He = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), o = As(e.times(ot(l, t + r)), t), o.d && (o = De(o, t + 5, 1), $o(o.d, t, a) && (n = t + 10, o = De(As(e.times(ot(l, n + r)), n), n + 5, 1), +Un(o.d).slice(t + 1, t + 15) + 1 == 1e14 && (o = De(o, t + 1, 0)))), o.s = i, He = !0, s.rounding = a, De(o, t, a));
};
le.toPrecision = function(e, n) {
  var r, t = this, o = t.constructor;
  return e === void 0 ? r = Lr(t, t.e <= o.toExpNeg || t.e >= o.toExpPos) : (dr(e, 1, gt), n === void 0 ? n = o.rounding : dr(n, 0, 8), t = De(new o(t), e, n), r = Lr(t, e <= t.e || t.e <= o.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
le.toSignificantDigits = le.toSD = function(e, n) {
  var r = this, t = r.constructor;
  return e === void 0 ? (e = t.precision, n = t.rounding) : (dr(e, 1, gt), n === void 0 ? n = t.rounding : dr(n, 0, 8)), De(new t(r), e, n);
};
le.toString = function() {
  var e = this, n = e.constructor, r = Lr(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
le.truncated = le.trunc = function() {
  return De(new this.constructor(this), this.e + 1, 1);
};
le.valueOf = le.toJSON = function() {
  var e = this, n = e.constructor, r = Lr(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Un(e) {
  var n, r, t, o = e.length - 1, a = "", i = e[0];
  if (o > 0) {
    for (a += i, n = 1; n < o; n++)
      t = e[n] + "", r = Me - t.length, r && (a += _r(r)), a += t;
    i = e[n], t = i + "", r = Me - t.length, r && (a += _r(r));
  } else if (i === 0) return "0";
  for (; i % 10 === 0; ) i /= 10;
  return a + i;
}
function dr(e, n, r) {
  if (e !== ~~e || e < n || e > r) throw Error(ft + e);
}
function $o(e, n, r, t) {
  var o, a, i, l;
  for (a = e[0]; a >= 10; a /= 10) --n;
  return --n < 0 ? (n += Me, o = 0) : (o = Math.ceil((n + 1) / Me), n %= Me), a = Nn(10, Me - n), l = e[o] % a | 0, t == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == a || r > 3 && l + 1 == a / 2) && (e[o + 1] / a / 100 | 0) == Nn(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[o + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (t || r < 4) && l == 9999 || !t && r > 3 && l == 4999) : i = ((t || r < 4) && l + 1 == a || !t && r > 3 && l + 1 == a / 2) && (e[o + 1] / a / 1e3 | 0) == Nn(10, n - 3) - 1, i;
}
function fa(e, n, r) {
  for (var t, o = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = o.length; a--; ) o[a] *= n;
    for (o[0] += Bs.indexOf(e.charAt(i++)), t = 0; t < o.length; t++) o[t] > r - 1 && (o[t + 1] === void 0 && (o[t + 1] = 0), o[t + 1] += o[t] / r | 0, o[t] %= r);
  }
  return o.reverse();
}
function C2(e, n) {
  var r, t, o;
  if (n.isZero()) return n;
  t = n.d.length, t < 32 ? (r = Math.ceil(t / 3), o = (1 / Ti(4, r)).toString()) : (r = 16, o = "2.3283064365386962890625e-10"), e.precision += r, n = Wt(e, 1, n.times(o), new e(1));
  for (var a = r; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var dn = /* @__PURE__ */ (function() {
  function e(t, o, a) {
    var i, l = 0, s = t.length;
    for (t = t.slice(); s--; )
      i = t[s] * o + l, t[s] = i % a | 0, l = i / a | 0;
    return l && t.unshift(l), t;
  }
  function n(t, o, a, i) {
    var l, s;
    if (a != i) s = a > i ? 1 : -1;
    else for (l = s = 0; l < a; l++) if (t[l] != o[l]) {
      s = t[l] > o[l] ? 1 : -1;
      break;
    }
    return s;
  }
  function r(t, o, a, i) {
    for (var l = 0; a--; )
      t[a] -= l, l = t[a] < o[a] ? 1 : 0, t[a] = l * i + t[a] - o[a];
    for (; !t[0] && t.length > 1; ) t.shift();
  }
  return function(t, o, a, i, l, s) {
    var u, d, c, f, v, p, h, m, y, $, w, z, T, O, R, U, M, D, E, B, N = t.constructor, A = t.s == o.s ? 1 : -1, I = t.d, F = o.d;
    if (!I || !I[0] || !F || !F[0]) return new N(!t.s || !o.s || (I ? F && I[0] == F[0] : !F) ? NaN : I && I[0] == 0 || !F ? A * 0 : A / 0);
    for (s ? (v = 1, d = t.e - o.e) : (s = zr, v = Me, d = Zn(t.e / v) - Zn(o.e / v)), E = F.length, M = I.length, y = new N(A), $ = y.d = [], c = 0; F[c] == (I[c] || 0); c++) ;
    if (F[c] > (I[c] || 0) && d--, a == null ? (O = a = N.precision, i = N.rounding) : l ? O = a + (t.e - o.e) + 1 : O = a, O < 0)
      $.push(1), p = !0;
    else {
      if (O = O / v + 2 | 0, c = 0, E == 1) {
        for (f = 0, F = F[0], O++; (c < M || f) && O--; c++)
          R = f * s + (I[c] || 0), $[c] = R / F | 0, f = R % F | 0;
        p = f || c < M;
      } else {
        for (f = s / (F[0] + 1) | 0, f > 1 && (F = e(F, f, s), I = e(I, f, s), E = F.length, M = I.length), U = E, w = I.slice(0, E), z = w.length; z < E; ) w[z++] = 0;
        B = F.slice(), B.unshift(0), D = F[0], F[1] >= s / 2 && ++D;
        do
          f = 0, u = n(F, w, E, z), u < 0 ? (T = w[0], E != z && (T = T * s + (w[1] || 0)), f = T / D | 0, f > 1 ? (f >= s && (f = s - 1), h = e(F, f, s), m = h.length, z = w.length, u = n(h, w, m, z), u == 1 && (f--, r(h, E < m ? B : F, m, s))) : (f == 0 && (u = f = 1), h = F.slice()), m = h.length, m < z && h.unshift(0), r(w, h, z, s), u == -1 && (z = w.length, u = n(F, w, E, z), u < 1 && (f++, r(w, E < z ? B : F, z, s))), z = w.length) : u === 0 && (f++, w = [0]), $[c++] = f, u && w[0] ? w[z++] = I[U] || 0 : (w = [I[U]], z = 1);
        while ((U++ < M || w[0] !== void 0) && O--);
        p = w[0] !== void 0;
      }
      $[0] || $.shift();
    }
    if (v == 1)
      y.e = d, fg = p;
    else {
      for (c = 1, f = $[0]; f >= 10; f /= 10) c++;
      y.e = c + d * v - 1, De(y, l ? a + y.e + 1 : a, i, p);
    }
    return y;
  };
})();
function De(e, n, r, t) {
  var o, a, i, l, s, u, d, c, f, v = e.constructor;
  e: if (n != null) {
    if (c = e.d, !c) return e;
    for (o = 1, l = c[0]; l >= 10; l /= 10) o++;
    if (a = n - o, a < 0)
      a += Me, i = n, d = c[f = 0], s = d / Nn(10, o - i - 1) % 10 | 0;
    else if (f = Math.ceil((a + 1) / Me), l = c.length, f >= l) if (t) {
      for (; l++ <= f; ) c.push(0);
      d = s = 0, o = 1, a %= Me, i = a - Me + 1;
    } else break e;
    else {
      for (d = l = c[f], o = 1; l >= 10; l /= 10) o++;
      a %= Me, i = a - Me + o, s = i < 0 ? 0 : d / Nn(10, o - i - 1) % 10 | 0;
    }
    if (t = t || n < 0 || c[f + 1] !== void 0 || (i < 0 ? d : d % Nn(10, o - i - 1)), u = r < 4 ? (s || t) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || t || r == 6 && (a > 0 ? i > 0 ? d / Nn(10, o - i) : 0 : c[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !c[0])
      return c.length = 0, u ? (n -= e.e + 1, c[0] = Nn(10, (Me - n % Me) % Me), e.e = -n || 0) : c[0] = e.e = 0, e;
    if (a == 0 ? (c.length = f, l = 1, f--) : (c.length = f + 1, l = Nn(10, Me - a), c[f] = i > 0 ? (d / Nn(10, o - i) % Nn(10, i) | 0) * l : 0), u) for (; ; ) if (f == 0) {
      for (a = 1, i = c[0]; i >= 10; i /= 10) a++;
      for (i = c[0] += l, l = 1; i >= 10; i /= 10) l++;
      a != l && (e.e++, c[0] == zr && (c[0] = 1));
      break;
    } else {
      if (c[f] += l, c[f] != zr) break;
      c[f--] = 0, l = 1;
    }
    for (a = c.length; c[--a] === 0; ) c.pop();
  }
  return He && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e;
}
function Lr(e, n, r) {
  if (!e.isFinite()) return wg(e);
  var t, o = e.e, a = Un(e.d), i = a.length;
  return n ? (r && (t = r - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + _r(t) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : o < 0 ? (a = "0." + _r(-o - 1) + a, r && (t = r - i) > 0 && (a += _r(t))) : o >= i ? (a += _r(o + 1 - i), r && (t = r - o - 1) > 0 && (a = a + "." + _r(t))) : ((t = o + 1) < i && (a = a.slice(0, t) + "." + a.slice(t)), r && (t = r - i) > 0 && (o + 1 === i && (a += "."), a += _r(t))), a;
}
function zi(e, n) {
  var r = e[0];
  for (n *= Me; r >= 10; r /= 10) n++;
  return n;
}
function Oa(e, n, r) {
  if (n > $2)
    throw He = !0, r && (e.precision = r), Error(vg);
  return De(new e(Sa), n, 1, !0);
}
function Rr(e, n, r) {
  if (n > Ms) throw Error(vg);
  return De(new e(Pa), n, r, !0);
}
function hg(e) {
  var n = e.length - 1, r = n * Me + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = e[0]; n >= 10; n /= 10) r++;
  }
  return r;
}
function _r(e) {
  for (var n = ""; e--; ) n += "0";
  return n;
}
function bg(e, n, r, t) {
  var o, a = new e(1), i = Math.ceil(t / Me + 4);
  for (He = !1; ; ) {
    if (r % 2 && (a = a.times(n), Jc(a.d, i) && (o = !0)), r = Zn(r / 2), r === 0) {
      r = a.d.length - 1, o && a.d[r] === 0 && ++a.d[r];
      break;
    }
    n = n.times(n), Jc(n.d, i);
  }
  return He = !0, a;
}
function Zc(e) {
  return e.d[e.d.length - 1] & 1;
}
function yg(e, n, r) {
  for (var t, o, a = new e(n[0]), i = 0; ++i < n.length; ) {
    if (o = new e(n[i]), !o.s) {
      a = o;
      break;
    }
    t = a.cmp(o), (t === r || t === 0 && a.s === r) && (a = o);
  }
  return a;
}
function As(e, n) {
  var r, t, o, a, i, l, s, u = 0, d = 0, c = 0, f = e.constructor, v = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (n == null ? (He = !1, s = p) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), c += 5;
  for (t = Math.log(Nn(2, c)) / Math.LN10 * 2 + 5 | 0, s += t, r = a = i = new f(1), f.precision = s; ; ) {
    if (a = De(a.times(e), s, 1), r = r.times(++d), l = i.plus(dn(a, r, s, 1)), Un(l.d).slice(0, s) === Un(i.d).slice(0, s)) {
      for (o = c; o--; ) i = De(i.times(i), s, 1);
      if (n == null) if (u < 3 && $o(i.d, s - t, v, u))
        f.precision = s += 10, r = a = l = new f(1), d = 0, u++;
      else return De(i, f.precision = p, v, He = !0);
      else
        return f.precision = p, i;
    }
    i = l;
  }
}
function ot(e, n) {
  var r, t, o, a, i, l, s, u, d, c, f, v = 1, p = 10, h = e, m = h.d, y = h.constructor, $ = y.rounding, w = y.precision;
  if (h.s < 0 || !m || !m[0] || !h.e && m[0] == 1 && m.length == 1) return new y(m && !m[0] ? -1 / 0 : h.s != 1 ? NaN : m ? 0 : h);
  if (n == null ? (He = !1, d = w) : d = n, y.precision = d += p, r = Un(m), t = r.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; t < 7 && t != 1 || t == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = Un(h.d), t = r.charAt(0), v++;
    a = h.e, t > 1 ? (h = new y("0." + r), a++) : h = new y(t + "." + r.slice(1));
  } else
    return u = Oa(y, d + 2, w).times(a + ""), h = ot(new y(t + "." + r.slice(1)), d - p).plus(u), y.precision = w, n == null ? De(h, w, $, He = !0) : h;
  for (c = h, s = i = h = dn(h.minus(1), h.plus(1), d, 1), f = De(h.times(h), d, 1), o = 3; ; ) {
    if (i = De(i.times(f), d, 1), u = s.plus(dn(i, new y(o), d, 1)), Un(u.d).slice(0, d) === Un(s.d).slice(0, d))
      if (s = s.times(2), a !== 0 && (s = s.plus(Oa(y, d + 2, w).times(a + ""))), s = dn(s, new y(v), d, 1), n == null) if ($o(s.d, d - p, $, l))
        y.precision = d += p, u = i = h = dn(c.minus(1), c.plus(1), d, 1), f = De(h.times(h), d, 1), o = l = 1;
      else return De(s, y.precision = w, $, He = !0);
      else
        return y.precision = w, s;
    s = u, o += 2;
  }
}
function wg(e) {
  return String(e.s * e.s / 0);
}
function va(e, n) {
  var r, t, o;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (t = n.search(/e/i)) > 0 ? (r < 0 && (r = t), r += +n.slice(t + 1), n = n.substring(0, t)) : r < 0 && (r = n.length), t = 0; n.charCodeAt(t) === 48; t++) ;
  for (o = n.length; n.charCodeAt(o - 1) === 48; --o) ;
  if (n = n.slice(t, o), n) {
    if (o -= t, e.e = r = r - t - 1, e.d = [], t = (r + 1) % Me, r < 0 && (t += Me), t < o) {
      for (t && e.d.push(+n.slice(0, t)), o -= Me; t < o; ) e.d.push(+n.slice(t, t += Me));
      n = n.slice(t), t = Me - n.length;
    } else t -= o;
    for (; t--; ) n += "0";
    e.d.push(+n), He && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function S2(e, n) {
  var r, t, o, a, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), gg.test(n)) return va(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (y2.test(n))
    r = 16, n = n.toLowerCase();
  else if (b2.test(n)) r = 2;
  else if (w2.test(n)) r = 8;
  else throw Error(ft + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, t = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, o = bg(t, new t(r), a, a * 2)), u = fa(n, r, zr), d = u.length - 1, a = d; u[a] === 0; --a) u.pop();
  return a < 0 ? new t(e.s * 0) : (e.e = zi(u, d), e.d = u, He = !1, i && (e = dn(e, o, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Nn(2, s) : at.pow(2, s))), He = !0, e);
}
function P2(e, n) {
  var r, t = n.d.length;
  if (t < 3) return n.isZero() ? n : Wt(e, 2, n, n);
  r = 1.4 * Math.sqrt(t), r = r > 16 ? 16 : r | 0, n = n.times(1 / Ti(5, r)), n = Wt(e, 2, n, n);
  for (var o, a = new e(5), i = new e(16), l = new e(20); r--; )
    o = n.times(n), n = n.times(a.plus(o.times(i.times(o).minus(l))));
  return n;
}
function Wt(e, n, r, t, o) {
  var a, i, l, s, u = 1, d = e.precision, c = Math.ceil(d / Me);
  for (He = !1, s = r.times(r), l = new e(t); ; ) {
    if (i = dn(l.times(s), new e(n++ * n++), d, 1), l = o ? t.plus(i) : t.minus(i), t = dn(i.times(s), new e(n++ * n++), d, 1), i = l.plus(t), i.d[c] !== void 0) {
      for (a = c; i.d[a] === l.d[a] && a--; ) ;
      if (a == -1) break;
    }
    a = l, l = t, t = i, i = a, u++;
  }
  return He = !0, i.d.length = c + 1, i;
}
function Ti(e, n) {
  for (var r = e; --n; ) r *= e;
  return r;
}
function kg(e, n) {
  var r, t = n.s < 0, o = Rr(e, e.precision, 1), a = o.times(0.5);
  if (n = n.abs(), n.lte(a))
    return Kr = t ? 4 : 1, n;
  if (r = n.divToInt(o), r.isZero()) Kr = t ? 3 : 2;
  else {
    if (n = n.minus(r.times(o)), n.lte(a))
      return Kr = Zc(r) ? t ? 2 : 3 : t ? 4 : 1, n;
    Kr = Zc(r) ? t ? 1 : 4 : t ? 3 : 2;
  }
  return n.minus(o).abs();
}
function id(e, n, r, t) {
  var o, a, i, l, s, u, d, c, f, v = e.constructor, p = r !== void 0;
  if (p ? (dr(r, 1, gt), t === void 0 ? t = v.rounding : dr(t, 0, 8)) : (r = v.precision, t = v.rounding), !e.isFinite()) d = wg(e);
  else {
    for (d = Lr(e), i = d.indexOf("."), p ? (o = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : o = n, i >= 0 && (d = d.replace(".", ""), f = new v(1), f.e = d.length - i, f.d = fa(Lr(f), 10, o), f.e = f.d.length), c = fa(d, 10, o), a = s = c.length; c[--s] == 0; ) c.pop();
    if (!c[0]) d = p ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = c, e.e = a, e = dn(e, f, r, t, 0, o), c = e.d, a = e.e, u = fg), i = c[r], l = o / 2, u = u || c[r + 1] !== void 0, u = t < 4 ? (i !== void 0 || u) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : i > l || i === l && (t === 4 || u || t === 6 && c[r - 1] & 1 || t === (e.s < 0 ? 8 : 7)), c.length = r, u) for (; ++c[--r] > o - 1; )
        c[r] = 0, r || (++a, c.unshift(1));
      for (s = c.length; !c[s - 1]; --s) ;
      for (i = 0, d = ""; i < s; i++) d += Bs.charAt(c[i]);
      if (p) {
        if (s > 1) if (n == 16 || n == 8) {
          for (i = n == 16 ? 4 : 3, --s; s % i; s++) d += "0";
          for (c = fa(d, o, n), s = c.length; !c[s - 1]; --s) ;
          for (i = 1, d = "1."; i < s; i++) d += Bs.charAt(c[i]);
        } else d = d.charAt(0) + "." + d.slice(1);
        d = d + (a < 0 ? "p" : "p+") + a;
      } else if (a < 0) {
        for (; ++a; ) d = "0" + d;
        d = "0." + d;
      } else if (++a > s) for (a -= s; a--; ) d += "0";
      else a < s && (d = d.slice(0, a) + "." + d.slice(a));
    }
    d = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function Jc(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function O2(e) {
  return new this(e).abs();
}
function z2(e) {
  return new this(e).acos();
}
function T2(e) {
  return new this(e).acosh();
}
function E2(e, n) {
  return new this(e).plus(n);
}
function I2(e) {
  return new this(e).asin();
}
function B2(e) {
  return new this(e).asinh();
}
function D2(e) {
  return new this(e).atan();
}
function M2(e) {
  return new this(e).atanh();
}
function A2(e, n) {
  e = new this(e), n = new this(n);
  var r, t = this.precision, o = this.rounding, a = t + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Rr(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Rr(this, t, o) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Rr(this, a, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, r = this.atan(dn(e, n, a, 1)), n = Rr(this, a, 1), this.precision = t, this.rounding = o, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(dn(e, n, a, 1)), r;
}
function N2(e) {
  return new this(e).cbrt();
}
function R2(e) {
  return De(e = new this(e), e.e + 1, 2);
}
function V2(e, n, r) {
  return new this(e).clamp(n, r);
}
function L2(e) {
  if (!e || typeof e != "object") throw Error(Oi + "Object expected");
  var n, r, t, o = e.defaults === !0, a = [
    "precision",
    1,
    gt,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Mt,
    0,
    "toExpPos",
    0,
    Mt,
    "maxE",
    0,
    Mt,
    "minE",
    -Mt,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (r = a[n], o && (this[r] = Ds[r]), (t = e[r]) !== void 0) if (Zn(t) === t && t >= a[n + 1] && t <= a[n + 2]) this[r] = t;
    else throw Error(ft + r + ": " + t);
  if (r = "crypto", o && (this[r] = Ds[r]), (t = e[r]) !== void 0) if (t === !0 || t === !1 || t === 0 || t === 1) if (t) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[r] = !0;
  else throw Error(pg);
  else this[r] = !1;
  else throw Error(ft + r + ": " + t);
  return this;
}
function F2(e) {
  return new this(e).cos();
}
function H2(e) {
  return new this(e).cosh();
}
function $g(e) {
  var n, r, t;
  function o(a) {
    var i, l, s, u = this;
    if (!(u instanceof o)) return new o(a);
    if (u.constructor = o, Qc(a)) {
      u.s = a.s, He ? !a.d || a.e > o.maxE ? (u.e = NaN, u.d = null) : a.e < o.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (s = typeof a, s === "number") {
      if (a === 0) {
        u.s = 1 / a < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, u.s = -1) : u.s = 1, a === ~~a && a < 1e7) {
        for (i = 0, l = a; l >= 10; l /= 10) i++;
        He ? i > o.maxE ? (u.e = NaN, u.d = null) : i < o.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [a]) : (u.e = i, u.d = [a]);
        return;
      }
      if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return va(u, a.toString());
    }
    if (s === "string")
      return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), gg.test(a) ? va(u, a) : S2(u, a);
    if (s === "bigint")
      return a < 0 ? (a = -a, u.s = -1) : u.s = 1, va(u, a.toString());
    throw Error(ft + a);
  }
  if (o.prototype = le, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.EUCLID = 9, o.config = o.set = L2, o.clone = $g, o.isDecimal = Qc, o.abs = O2, o.acos = z2, o.acosh = T2, o.add = E2, o.asin = I2, o.asinh = B2, o.atan = D2, o.atanh = M2, o.atan2 = A2, o.cbrt = N2, o.ceil = R2, o.clamp = V2, o.cos = F2, o.cosh = H2, o.div = U2, o.exp = j2, o.floor = Y2, o.hypot = K2, o.ln = W2, o.log = q2, o.log10 = G2, o.log2 = X2, o.max = Z2, o.min = J2, o.mod = Q2, o.mul = x2, o.pow = _2, o.random = eP, o.round = nP, o.sign = rP, o.sin = tP, o.sinh = oP, o.sqrt = aP, o.sub = iP, o.sum = lP, o.tan = sP, o.tanh = uP, o.trunc = dP, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (t = [
      "precision",
      "rounding",
      "toExpNeg",
      "toExpPos",
      "maxE",
      "minE",
      "modulo",
      "crypto"
    ], n = 0; n < t.length; ) e.hasOwnProperty(r = t[n++]) || (e[r] = this[r]);
  return o.config(e), o;
}
function U2(e, n) {
  return new this(e).div(n);
}
function j2(e) {
  return new this(e).exp();
}
function Y2(e) {
  return De(e = new this(e), e.e + 1, 3);
}
function K2() {
  var e, n, r = new this(0);
  for (He = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return He = !0, new this(1 / 0);
      r = n;
    }
  return He = !0, r.sqrt();
}
function Qc(e) {
  return e instanceof at || e && e.toStringTag === mg || !1;
}
function W2(e) {
  return new this(e).ln();
}
function q2(e, n) {
  return new this(e).log(n);
}
function X2(e) {
  return new this(e).log(2);
}
function G2(e) {
  return new this(e).log(10);
}
function Z2() {
  return yg(this, arguments, -1);
}
function J2() {
  return yg(this, arguments, 1);
}
function Q2(e, n) {
  return new this(e).mod(n);
}
function x2(e, n) {
  return new this(e).mul(n);
}
function _2(e, n) {
  return new this(e).pow(n);
}
function eP(e) {
  var n, r, t, o, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : dr(e, 1, gt), t = Math.ceil(e / Me), this.crypto) if (crypto.getRandomValues)
    for (n = crypto.getRandomValues(new Uint32Array(t)); a < t; )
      o = n[a], o >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = o % 1e7;
  else if (crypto.randomBytes) {
    for (n = crypto.randomBytes(t *= 4); a < t; )
      o = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), o >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(o % 1e7), a += 4);
    a = t / 4;
  } else throw Error(pg);
  else for (; a < t; ) l[a++] = Math.random() * 1e7 | 0;
  for (t = l[--a], e %= Me, t && e && (o = Nn(10, Me - e), l[a] = (t / o | 0) * o); l[a] === 0; a--) l.pop();
  if (a < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= Me) l.shift();
    for (t = 1, o = l[0]; o >= 10; o /= 10) t++;
    t < Me && (r -= Me - t);
  }
  return i.e = r, i.d = l, i;
}
function nP(e) {
  return De(e = new this(e), e.e + 1, this.rounding);
}
function rP(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function tP(e) {
  return new this(e).sin();
}
function oP(e) {
  return new this(e).sinh();
}
function aP(e) {
  return new this(e).sqrt();
}
function iP(e, n) {
  return new this(e).sub(n);
}
function lP() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (He = !1; r.s && ++e < n.length; ) r = r.plus(n[e]);
  return He = !0, De(r, this.precision, this.rounding);
}
function sP(e) {
  return new this(e).tan();
}
function uP(e) {
  return new this(e).tanh();
}
function dP(e) {
  return De(e = new this(e), e.e + 1, 1);
}
le[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = le.toString;
le[Symbol.toStringTag] = "Decimal";
var at = le.constructor = $g(Ds);
Sa = new at(Sa);
Pa = new at(Pa);
var Cg = {
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
    type: [
      Boolean,
      Number,
      String
    ],
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
    default: () => [
      "onInputChange",
      "onLazyChange",
      "onIncrement",
      "onDecrement"
    ]
  },
  rules: [
    Array,
    Function,
    Object
  ],
  onBeforeChange: V(),
  onChange: V(),
  onIncrement: V(),
  onDecrement: V(),
  "onUpdate:modelValue": V()
}, xc = 100, _c = 600, { name: cP, n: fP, classes: vP } = oe("counter"), pP = [
  "inputmode",
  "readonly",
  "disabled"
];
function mP(e, n) {
  const r = x("var-icon"), t = x("var-button"), o = x("var-form-details");
  return b(), k("div", { class: g(e.classes(e.n(), e.n("$--box"))) }, [L("div", Xe({
    class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
    style: { background: e.color }
  }, e.$attrs), [
    j(t, {
      class: g(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
      style: J({
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
      default: ue(() => [j(r, { name: "minus" })]),
      _: 1
    }, 8, [
      "class",
      "style",
      "ripple",
      "onClick",
      "onTouchstart",
      "onTouchend",
      "onTouchcancel"
    ]),
    Ke(L("input", {
      "onUpdate:modelValue": n[0] || (n[0] = (a) => e.inputValue = a),
      class: g(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
      style: J({
        width: e.toSizeUnit(e.inputWidth),
        fontSize: e.toSizeUnit(e.inputTextSize)
      }),
      inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
      readonly: e.readonly || e.formReadonly,
      disabled: e.disabled || e.formDisabled || e.disableInput,
      onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
    }, null, 46, pP), [[Wv, e.inputValue]]),
    j(t, {
      class: g(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
      style: J({
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
      default: ue(() => [j(r, { name: "plus" })]),
      _: 1
    }, 8, [
      "class",
      "style",
      "ripple",
      "onClick",
      "onTouchstart",
      "onTouchend",
      "onTouchcancel"
    ])
  ], 16), j(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Sg = te({
  name: cP,
  components: {
    VarButton: tr,
    VarIcon: Je,
    VarFormDetails: Hn
  },
  directives: { Ripple: vn },
  inheritAttrs: !1,
  props: Cg,
  setup(e) {
    const n = P(""), { bindForm: r, form: t } = Kn(), { errorMessage: o, validateWithTrigger: a, validate: i, resetValidation: l } = Jn(), { readonly: s, disabled: u } = t ?? {}, d = C(() => {
      const { max: I, modelValue: F } = e;
      return I != null && Z(F) >= Z(I);
    }), c = C(() => {
      const { min: I, modelValue: F } = e;
      return I != null && Z(F) <= Z(I);
    });
    let f, v, p, h;
    S(r, {
      reset: $,
      validate: m,
      resetValidation: l
    }), me(() => e.modelValue, (I) => {
      N(w(String(I))), S(e.onChange, Z(I));
    }), N(w(String(e.modelValue)));
    function m() {
      return i(e.rules, e.modelValue);
    }
    function y(I) {
      Ne(() => {
        const { validateTrigger: F, rules: Q, modelValue: X } = e;
        a(F, I, Q, X);
      });
    }
    function $() {
      const { min: I } = e;
      S(e["onUpdate:modelValue"], I != null ? Z(I) : 0), l();
    }
    function w(I) {
      const { decimalLength: F, max: Q, min: X } = e;
      let ae = Z(I);
      return Q != null && ae > Z(Q) && (ae = Z(Q)), X != null && ae < Z(X) && (ae = Z(X)), I = String(ae), F != null && (I = ae.toFixed(Z(F))), I;
    }
    function z(I) {
      const { lazyChange: F, onBeforeChange: Q } = e, { value: X } = I.target, ae = w(X);
      F ? S(Q, Z(ae), A) : N(ae), y("onInputChange");
    }
    function T() {
      const { disabled: I, readonly: F, disableDecrement: Q, decrementButton: X, lazyChange: ae, step: Te, modelValue: ce, onDecrement: G, onBeforeChange: ne } = e;
      if (u?.value || s?.value || I || F || Q || !X || c.value) return;
      const pe = w(new at(Z(ce)).minus(new at(Z(Te))).toString()), Oe = Z(pe);
      S(G, Oe), ae ? S(ne, Oe, A) : (N(pe), y("onDecrement"));
    }
    function O() {
      const { disabled: I, readonly: F, disableIncrement: Q, incrementButton: X, lazyChange: ae, step: Te, modelValue: ce, onIncrement: G, onBeforeChange: ne } = e;
      if (u?.value || s?.value || I || F || Q || !X || d.value) return;
      const pe = w(new at(Z(ce)).plus(new at(Z(Te))).toString()), Oe = Z(pe);
      S(G, Oe), ae ? S(ne, Oe, A) : (N(pe), y("onIncrement"));
    }
    function R() {
      const { press: I, lazyChange: F } = e;
      !I || F || (h = window.setTimeout(() => {
        B();
      }, _c));
    }
    function U() {
      const { press: I, lazyChange: F } = e;
      !I || F || (p = window.setTimeout(() => {
        E();
      }, _c));
    }
    function M() {
      v && clearTimeout(v), h && clearTimeout(h);
    }
    function D() {
      f && clearTimeout(f), p && clearTimeout(p);
    }
    function E() {
      f = window.setTimeout(() => {
        O(), E();
      }, xc);
    }
    function B() {
      v = window.setTimeout(() => {
        T(), B();
      }, xc);
    }
    function N(I) {
      n.value = I;
      const F = Z(I);
      S(e["onUpdate:modelValue"], F);
    }
    function A(I) {
      N(w(String(I))), y("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: o,
      formDisabled: u,
      formReadonly: s,
      isMax: d,
      isMin: c,
      n: fP,
      classes: vP,
      formatElevation: Pn,
      validate: m,
      reset: $,
      resetValidation: l,
      handleChange: z,
      decrement: T,
      increment: O,
      pressDecrement: R,
      pressIncrement: U,
      releaseDecrement: M,
      releaseIncrement: D,
      toSizeUnit: ze,
      toNumber: Z
    };
  }
});
Sg.render = mP;
var Ei = Sg;
de(Ei);
fe(Ei, Cg);
var rN = Ei, Ns = Ei, Pg = {
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
    type: [
      Boolean,
      Number,
      String
    ],
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
    default: () => [
      10,
      20,
      50,
      100
    ]
  },
  showTotal: Function,
  onChange: V(),
  "onUpdate:current": V(),
  "onUpdate:size": V()
}, { name: gP, n: hP, classes: bP } = oe("pagination"), yP = ["item-mode", "onClick"];
function wP(e, n) {
  const r = x("var-icon"), t = x("var-input"), o = x("var-menu-option"), a = x("var-menu-select"), i = _e("ripple");
  return b(), k("ul", { class: g(e.n()) }, [
    Ke((b(), k("li", {
      class: g(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [
        e.simple,
        e.n("item--simple"),
        e.formatElevation(e.elevation, 2)
      ])),
      onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
    }, [H(e.$slots, "prev", {}, () => [j(r, { name: "chevron-left" })])], 2)), [[i, { disabled: e.current <= 1 || e.disabled }]]),
    e.simple ? (b(), k("li", {
      key: 0,
      class: g(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
    }, [j(t, {
      modelValue: e.simpleCurrentValue,
      "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
      "var-pagination-cover": "",
      variant: "standard",
      hint: !1,
      disabled: e.disabled,
      onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
      onKeydown: n[3] || (n[3] = yd((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
    }, null, 8, ["modelValue", "disabled"]), L("span", null, [Le(" / " + ve(e.pageCount) + " ", 1), L("div", { class: g(e.n("simple-line")) }, null, 2)])], 2)) : (b(!0), k(Be, { key: 1 }, Ye(e.pageList, (l, s) => Ke((b(), k("li", {
      key: s,
      "item-mode": e.getMode(l, s),
      class: g(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
      onClick: (u) => e.clickItem(l, s)
    }, [Le(ve(l), 1)], 10, yP)), [[i, { disabled: e.disabled }]])), 128)),
    Ke((b(), k("li", {
      class: g(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [
        e.simple,
        e.n("item--simple"),
        e.formatElevation(e.elevation, 2)
      ])),
      onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
    }, [H(e.$slots, "next", {}, () => [j(r, { name: "chevron-right" })])], 2)), [[i, { disabled: e.current >= e.pageCount || e.disabled }]]),
    e.showSizeChanger ? (b(), we(a, {
      key: 2,
      modelValue: e.size,
      "onUpdate:modelValue": n[5] || (n[5] = (l) => e.size = l),
      placement: "cover-top",
      disabled: e.disabled
    }, {
      options: ue(() => [(b(!0), k(Be, null, Ye(e.sizeOption, (l, s) => (b(), we(o, {
        key: s,
        value: l,
        onClick: e.clickSize
      }, {
        default: ue(() => [Le(ve(l) + ve((e.pt ? e.pt : e.t)("paginationItem")) + " / " + ve((e.pt ? e.pt : e.t)("paginationPage")), 1)]),
        _: 2
      }, 1032, ["value", "onClick"]))), 128))]),
      default: ue(() => [L("li", { class: g(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")])) }, [L("div", { class: g(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])) }, [L("span", null, ve(e.size) + ve((e.pt ? e.pt : e.t)("paginationItem")) + " / " + ve((e.pt ? e.pt : e.t)("paginationPage")), 1), j(r, {
        class: g(e.n("size--open-icon")),
        "var-pagination-cover": "",
        name: "menu-down"
      }, null, 8, ["class"])], 2)], 2)]),
      _: 1
    }, 8, ["modelValue", "disabled"])) : q("v-if", !0),
    e.showQuickJumper && !e.simple ? (b(), k("li", {
      key: 3,
      class: g(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
    }, [Le(ve((e.pt ? e.pt : e.t)("paginationJump")) + " ", 1), j(t, {
      modelValue: e.quickJumperValue,
      "onUpdate:modelValue": n[6] || (n[6] = (l) => e.quickJumperValue = l),
      disabled: e.disabled,
      hint: !1,
      variant: "standard",
      "var-pagination-cover": "",
      onBlur: n[7] || (n[7] = (l) => e.setPage("quick", e.quickJumperValue, l)),
      onKeydown: n[8] || (n[8] = yd((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
    }, null, 8, ["modelValue", "disabled"])], 2)) : q("v-if", !0),
    e.totalText ? (b(), k("li", {
      key: 4,
      class: g(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
    }, ve(e.totalText), 3)) : q("v-if", !0)
  ], 2);
}
var Og = te({
  name: gP,
  components: {
    VarMenuSelect: Yt,
    VarMenuOption: Ft,
    VarIcon: Je,
    VarInput: Lt
  },
  directives: { Ripple: vn },
  props: Pg,
  setup(e) {
    const n = P(""), r = P("1"), t = P(!1), o = P(!1), a = P(Z(e.current) || 1), i = P(Z(e.size) || 10), l = P([]), s = C(() => Math.ceil(e.maxPagerCount / 2)), u = C(() => Math.ceil(Z(e.total) / Z(i.value))), d = C(() => [i.value * (a.value - 1) + 1, Math.min(i.value * a.value, Z(e.total))]), c = C(() => e.showTotal ? e.showTotal(Z(e.total), d.value) : ""), { t: f } = kr();
    me([() => e.current, () => e.size], ([w, z]) => {
      a.value = Z(w) || 1, i.value = Z(z || 10);
    }), me([
      a,
      i,
      u
    ], ([w, z, T], [O, R]) => {
      let U = [];
      const { maxPagerCount: M, total: D, onChange: E } = e, B = Math.ceil(Z(D) / Z(R)), N = T - (M - s.value) - 1;
      if (r.value = `${w}`, T - 2 > M) {
        if (O === void 0 || T !== B) for (let A = 2; A < M + 2; A++) U.push(A);
        if (w <= M && w < N) {
          U = [];
          for (let A = 1; A < M + 1; A++) U.push(A + 1);
          t.value = !0, o.value = !1;
        }
        if (w > M && w < N) {
          U = [];
          for (let A = 1; A < M + 1; A++) U.push(w + A - s.value);
          t.value = w === 2 && M === 1, o.value = !1;
        }
        if (w >= N) {
          U = [];
          for (let A = 1; A < M + 1; A++) U.push(T - (M - A) - 1);
          t.value = !1, o.value = !0;
        }
        U = [
          1,
          "...",
          ...U,
          "...",
          T
        ];
      } else for (let A = 1; A <= T; A++) U.push(A);
      l.value = U, O != null && T > 0 && S(E, w, z), S(e["onUpdate:current"], w), S(e["onUpdate:size"], z);
    }, { immediate: !0 });
    function v(w, z) {
      return nr(w) ? !1 : z === 1 ? t.value : o.value;
    }
    function p(w, z) {
      return nr(w) ? "basic" : z === 1 ? "head" : "tail";
    }
    function h(w, z) {
      if (!(w === a.value || e.disabled)) {
        if (w === "...") {
          a.value = z === 1 ? Math.max(a.value - e.maxPagerCount, 1) : Math.min(a.value + e.maxPagerCount, u.value);
          return;
        }
        if (w === "prev") {
          a.value = y(a.value - 1);
          return;
        }
        if (w === "next") {
          a.value = y(a.value + 1);
          return;
        }
        nr(w) && (a.value = w);
      }
    }
    function m() {
      const w = y(a.value);
      r.value = String(w), a.value = w;
    }
    function y(w) {
      return w > u.value ? u.value : w < 1 ? 1 : w;
    }
    function $(w, z, T) {
      T.target.blur();
      const O = y(Z(z));
      r.value = String(O), a.value = O, w === "quick" && (n.value = "");
    }
    return {
      current: a,
      size: i,
      pageCount: u,
      pageList: l,
      quickJumperValue: n,
      simpleCurrentValue: r,
      totalText: c,
      pt: f,
      t: gn,
      n: hP,
      classes: bP,
      getMode: p,
      isHideEllipsis: v,
      clickItem: h,
      clickSize: m,
      setPage: $,
      toNumber: Z,
      formatElevation: Pn
    };
  }
});
Og.render = wP;
var Ii = Og;
de(Ii);
fe(Ii, Pg);
var tN = Ii, za = Ii, zg = {
  modelValue: {
    type: [
      String,
      Number,
      Boolean,
      Object,
      Array
    ],
    default: !1
  },
  checkedValue: {
    type: [
      String,
      Number,
      Boolean,
      Object,
      Array
    ],
    default: !0
  },
  uncheckedValue: {
    type: [
      String,
      Number,
      Boolean,
      Object,
      Array
    ],
    default: !1
  },
  disabled: Boolean,
  readonly: Boolean,
  checkedColor: String,
  uncheckedColor: String,
  tabindex: String,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: [
    Array,
    Function,
    Object
  ],
  onClick: V(),
  onChange: V(),
  "onUpdate:modelValue": V()
}, Tg = /* @__PURE__ */ Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function kP() {
  const { bindChildren: e, childProviders: n, length: r } = Bn(Tg);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function $P() {
  const { bindParent: e, parentProvider: n, index: r } = In(Tg);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var CP = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: SP, n: PP, classes: OP } = oe("radio"), zP = [
  "aria-checked",
  "aria-disabled",
  "tabindex"
];
function TP(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), o = x("var-form-details"), a = _e("ripple"), i = _e("hover");
  return b(), k("div", { class: g(e.n("wrap")) }, [L("div", Xe({
    ref: "radio",
    role: "radio",
    class: e.n(),
    "aria-checked": e.checked,
    "aria-disabled": e.formDisabled || e.disabled
  }, e.$attrs, {
    tabindex: e.tabIndex,
    onClick: n[1] || (n[1] = (...l) => e.handleClick && e.handleClick(...l)),
    onFocus: n[2] || (n[2] = (l) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (l) => e.isFocusing = !1)
  }), [Ke((b(), k("div", {
    class: g(e.classes(e.n("action"), [
      e.checked,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: J({ color: e.checked ? e.checkedColor : e.uncheckedColor })
  }, [e.checked ? (b(), k("span", {
    key: 0,
    class: g(e.n("icon")),
    style: J({ fontSize: e.toSizeUnit(e.iconSize) })
  }, [H(e.$slots, "checked-icon", {}, () => [j(r, { name: "radio-marked" })])], 6)) : (b(), k("span", {
    key: 1,
    class: g(e.n("icon")),
    style: J({ fontSize: e.toSizeUnit(e.iconSize) })
  }, [H(e.$slots, "unchecked-icon", {}, () => [j(r, { name: "radio-blank" })])], 6)), j(t, {
    hovering: !e.disabled && !e.formDisabled && e.hovering,
    focusing: !e.disabled && !e.formDisabled && e.isFocusing
  }, null, 8, ["hovering", "focusing"])], 6)), [[a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    i,
    e.handleHovering,
    "desktop"
  ]]), e.$slots.default ? (b(), k("div", {
    key: 0,
    class: g(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...l) => e.handleTextClick && e.handleTextClick(...l))
  }, [H(e.$slots, "default", { checked: e.checked })], 2)) : q("v-if", !0)], 16, zP), j(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Eg = te({
  name: SP,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarIcon: Je,
    VarFormDetails: Hn,
    VarHoverOverlay: Gn
  },
  inheritAttrs: !1,
  props: zg,
  setup(e) {
    const n = P(), r = P(!1), t = wn(e, "modelValue"), o = C(() => t.value === e.checkedValue), { radioGroup: a, bindRadioGroup: i } = $P(), { hovering: l, handleHovering: s } = ur(), { form: u, bindForm: d } = Kn(), c = C(() => {
      const E = u?.disabled.value || e.disabled, B = o.value, N = a?.hasChecked.value;
      if (e.tabindex != null) return e.tabindex;
      if (!E)
        return a && N && !B ? "-1" : "0";
    }), { errorMessage: f, validateWithTrigger: v, validate: p, resetValidation: h } = Jn(), m = {
      sync: R,
      validate: M,
      resetValidation: h,
      reset: U,
      isFocusing: C(() => r.value),
      move() {
        n.value.focus(), n.value.click();
      },
      moveable() {
        return !u?.disabled.value && !e.disabled && !u?.readonly.value && !e.readonly;
      }
    };
    S(i, m), S(d, m), xe(() => window, "keydown", y), xe(() => window, "keyup", $);
    function y(E) {
      if (!r.value) return;
      const { key: B } = E;
      (B === "Enter" || B === " ") && Ze(E), B === "Enter" && n.value.click();
    }
    function $(E) {
      r.value && E.key === " " && (Ze(E), n.value.click());
    }
    function w(E) {
      Ne(() => {
        const { validateTrigger: B, rules: N, modelValue: A } = e;
        v(B, E, N, A);
      });
    }
    function z(E) {
      return CP(this, null, function* () {
        const { checkedValue: B, onChange: N } = e;
        a && t.value === B || (t.value = E, a?.onToggle(B), yield Ne(), S(N, E), w("onChange"));
      });
    }
    function T(E) {
      const { disabled: B, readonly: N, uncheckedValue: A, checkedValue: I, onClick: F } = e;
      u?.disabled.value || B || (S(F, E), !(u?.readonly.value || N) && z(o.value ? A : I));
    }
    function O() {
      n.value.focus();
    }
    function R(E) {
      const { checkedValue: B, uncheckedValue: N } = e, A = E === B;
      return t.value = A ? B : N, A;
    }
    function U() {
      t.value = e.uncheckedValue, h();
    }
    function M() {
      return p(e.rules, e.modelValue);
    }
    function D(E) {
      const { uncheckedValue: B, checkedValue: N } = e;
      [B, N].includes(E) || (E = o.value ? B : N), z(E);
    }
    return {
      radio: n,
      isFocusing: r,
      checked: o,
      errorMessage: f,
      radioGroupErrorMessage: a?.errorMessage,
      formDisabled: u?.disabled,
      formReadonly: u?.readonly,
      hovering: l,
      tabIndex: c,
      handleHovering: s,
      n: PP,
      classes: OP,
      handleClick: T,
      handleTextClick: O,
      toSizeUnit: ze,
      toggle: D,
      reset: U,
      validate: M,
      resetValidation: h
    };
  }
});
Eg.render = TP;
var Bi = Eg;
de(Bi);
fe(Bi, zg);
var oN = Bi, Co = Bi, { n: EP, classes: IP } = oe("data-table"), BP = ["colspan", "rowspan"], DP = ["disabled"];
function MP(e, n) {
  const r = x("var-checkbox"), t = x("var-radio"), o = x("var-icon"), a = x("maybe-v-node");
  return b(), k("td", Xe({
    class: e.classes(e.n("cell"), e.n("body-cell"), [e.isSelectionColumn(e.cell.column), e.n("selection-cell")], [e.isExpandColumn(e.cell.column), e.n("expand-cell")], [e.cell.column.fixed, e.n("fixed-cell")], [e.shouldRenderLeftFixedShadow(e.cell.columnIndex), e.n("fixed-cell--shadow-right")], [e.shouldRenderRightFixedShadow(e.cell.columnIndex), e.n("fixed-cell--shadow-left")]),
    style: e.style
  }, e.getCellProps(e.bodyRow, e.cell.column), {
    colspan: e.cell.colSpan,
    rowspan: e.cell.rowSpan
  }), [e.isSelectionColumn(e.cell.column) && e.isMultipleSelectionColumn(e.cell.column) ? (b(), we(r, {
    key: 0,
    "var-data-table-cover": "",
    "model-value": e.isRowKeySelected(e.bodyRow.key),
    indeterminate: e.isRowKeyIndeterminate(e.bodyRow.key),
    disabled: !e.isSelectionColumnSelectable(e.cell.column) || !e.isRowSelectable(e.bodyRow.row, e.bodyRow.rowIndex, e.cell.column),
    tabindex: "-1",
    "onUpdate:modelValue": n[0] || (n[0] = (i) => e.toggleRowSelection(e.bodyRow, i))
  }, null, 8, [
    "model-value",
    "indeterminate",
    "disabled"
  ])) : e.isSelectionColumn(e.cell.column) ? (b(), we(t, {
    key: 1,
    "var-data-table-cover": "",
    "model-value": e.isRowKeySelected(e.bodyRow.key),
    disabled: !e.isSelectionColumnSelectable(e.cell.column) || !e.isRowSelectable(e.bodyRow.row, e.bodyRow.rowIndex, e.cell.column),
    tabindex: "-1",
    "onUpdate:modelValue": n[1] || (n[1] = (i) => e.toggleRowSelection(e.bodyRow, i))
  }, null, 8, ["model-value", "disabled"])) : e.isExpandColumn(e.cell.column) ? (b(), k("button", {
    key: 2,
    type: "button",
    tabindex: "-1",
    class: g(e.classes(e.n("expand-trigger"), [e.bodyRow.expanded, e.n("expand-trigger--expanded")])),
    disabled: !e.isRowExpandable(e.bodyRow, e.cell.column),
    onClick: n[2] || (n[2] = (i) => e.toggleRowExpanded(e.bodyRow))
  }, [j(o, {
    "var-data-table-cover": "",
    name: e.bodyRow.expanded ? "chevron-down" : "chevron-right"
  }, null, 8, ["name"])], 10, DP)) : e.tree && e.cell.treeLevel != null ? (b(), k("div", {
    key: 3,
    class: g(e.n("tree-cell")),
    style: J(e.treeStyle)
  }, [e.cell.treeExpandable ? (b(), k("button", {
    key: 0,
    type: "button",
    tabindex: "-1",
    class: g(e.classes(e.n("tree-trigger"), [e.cell.treeExpanded, e.n("tree-trigger--expanded")])),
    onClick: n[3] || (n[3] = (i) => e.toggleTreeRowExpanded(e.bodyRow))
  }, [j(o, {
    "var-data-table-cover": "",
    name: e.cell.treeExpanded ? "chevron-down" : "chevron-right"
  }, null, 8, ["name"])], 2)) : (b(), k("span", {
    key: 1,
    class: g(e.n("tree-indent"))
  }, null, 2)), j(a, {
    is: e.renderCell(e.bodyRow, e.cell.column),
    tag: "div"
  }, null, 8, ["is"])], 6)) : (b(), we(a, {
    key: 4,
    is: e.renderCell(e.bodyRow, e.cell.column),
    tag: "div"
  }, null, 8, ["is"]))], 16, BP);
}
var Ig = te({
  name: "DataTableBodyCell",
  components: {
    MaybeVNode: lr,
    VarCheckbox: ct,
    VarIcon: Je,
    VarRadio: Co
  },
  props: {
    bodyRow: {
      type: Object,
      required: !0
    },
    cell: {
      type: Object,
      required: !0
    },
    style: {
      type: Object,
      required: !0
    },
    tree: {
      type: Boolean,
      required: !0
    },
    isSelectionColumn: {
      type: Function,
      required: !0
    },
    isExpandColumn: {
      type: Function,
      required: !0
    },
    isMultipleSelectionColumn: {
      type: Function,
      required: !0
    },
    isSelectionColumnSelectable: {
      type: Function,
      required: !0
    },
    isRowSelectable: {
      type: Function,
      required: !0
    },
    isRowKeySelected: {
      type: Function,
      required: !0
    },
    isRowKeyIndeterminate: {
      type: Function,
      required: !0
    },
    isRowExpandable: {
      type: Function,
      required: !0
    },
    shouldRenderLeftFixedShadow: {
      type: Function,
      required: !0
    },
    shouldRenderRightFixedShadow: {
      type: Function,
      required: !0
    },
    toggleRowSelection: {
      type: Function,
      required: !0
    },
    toggleRowExpanded: {
      type: Function,
      required: !0
    },
    toggleTreeRowExpanded: {
      type: Function,
      required: !0
    },
    renderCell: {
      type: Function,
      required: !0
    },
    getCellProps: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    return {
      n: EP,
      classes: IP,
      treeStyle: C(() => {
        var n;
        return { paddingInlineStart: `${((n = e.cell.treeLevel) != null ? n : 0) * 20}px` };
      })
    };
  }
});
Ig.render = MP;
var AP = Ig, { n: NP, classes: RP } = oe("data-table"), VP = ["colspan", "rowspan"];
function LP(e, n) {
  const r = x("var-checkbox"), t = x("maybe-v-node"), o = x("var-icon");
  return b(), k("th", {
    class: g(e.classes(e.n("cell"), e.n("header-cell"), [e.isSelectionColumn(e.headerCell.column), e.n("selection-cell")], [e.isExpandColumn(e.headerCell.column), e.n("expand-cell")], [e.headerCell.fixed, e.n("fixed-cell")], [e.shouldRenderLeftFixedShadow(e.headerCell.endLeafColumnIndex), e.n("fixed-cell--shadow-right")], [e.shouldRenderRightFixedShadow(e.headerCell.startLeafColumnIndex), e.n("fixed-cell--shadow-left")])),
    style: J(e.style),
    colspan: e.headerCell.colSpan,
    rowspan: e.headerCell.rowSpan
  }, [e.isSelectionColumn(e.headerCell.column) && e.isMultipleSelectionColumn(e.headerCell.column) ? (b(), we(r, {
    key: 0,
    "var-data-table-cover": "",
    "model-value": e.allCurrentRowsSelected,
    indeterminate: e.someCurrentRowsSelected,
    disabled: !e.isSelectionColumnSelectable(e.headerCell.column) || !e.hasSelectableRows,
    tabindex: "-1",
    "onUpdate:modelValue": e.toggleCurrentSelectableRows
  }, null, 8, [
    "model-value",
    "indeterminate",
    "disabled",
    "onUpdate:modelValue"
  ])) : e.isColumnSortable(e.headerCell.column) ? (b(), k("button", {
    key: 1,
    type: "button",
    class: g(e.classes(e.n("sort-trigger"), e.n(`sort-trigger--align-${e.headerAlign}`), [e.columnSorterOrder, e.n("sort-trigger--active")])),
    style: J(e.sortTriggerStyle),
    onClick: n[0] || (n[0] = (a) => e.toggleColumnSorter(e.headerCell.column.key))
  }, [L("span", { class: g(e.n("sort-trigger-text")) }, [j(t, { is: e.renderHeaderTitle() }, null, 8, ["is"])], 2), L("span", {
    class: g(e.n("sort-trigger-icon")),
    "aria-hidden": "true"
  }, [j(o, {
    name: "chevron-up",
    size: 18,
    "var-data-table-cover": "",
    class: g(e.classes(e.n("sort-trigger-icon-up"), [e.columnSorterOrder === "asc", e.n("sort-trigger-icon--active")]))
  }, null, 8, ["class"]), j(o, {
    name: "chevron-down",
    size: 18,
    "var-data-table-cover": "",
    class: g(e.classes(e.n("sort-trigger-icon-down"), [e.columnSorterOrder === "desc", e.n("sort-trigger-icon--active")]))
  }, null, 8, ["class"])], 2)], 6)) : (b(), we(t, {
    key: 2,
    is: e.renderHeaderTitle()
  }, null, 8, ["is"])), e.isColumnResizable(e.headerCell.column) && e.headerCell.colSpan == null && !e.isLastHeaderColumn(e.headerCell.startLeafColumnIndex) ? (b(), k("button", {
    key: 3,
    type: "button",
    tabindex: "-1",
    class: g(e.n("resize-trigger")),
    onClick: n[1] || (n[1] = Rn(() => {
    }, ["stop"])),
    onMousedown: n[2] || (n[2] = (a) => e.startColumnResize(a, e.headerCell))
  }, null, 34)) : q("v-if", !0)], 14, VP);
}
var Bg = te({
  name: "DataTableHeaderCell",
  components: {
    MaybeVNode: lr,
    VarCheckbox: ct,
    VarIcon: Je
  },
  props: {
    headerCell: {
      type: Object,
      required: !0
    },
    style: {
      type: Object,
      required: !0
    },
    allCurrentRowsSelected: {
      type: Boolean,
      required: !0
    },
    someCurrentRowsSelected: {
      type: Boolean,
      required: !0
    },
    hasSelectableRows: {
      type: Boolean,
      required: !0
    },
    isSelectionColumn: {
      type: Function,
      required: !0
    },
    isExpandColumn: {
      type: Function,
      required: !0
    },
    isMultipleSelectionColumn: {
      type: Function,
      required: !0
    },
    isSelectionColumnSelectable: {
      type: Function,
      required: !0
    },
    isColumnSortable: {
      type: Function,
      required: !0
    },
    getColumnSorterOrder: {
      type: Function,
      required: !0
    },
    toggleColumnSorter: {
      type: Function,
      required: !0
    },
    isColumnResizable: {
      type: Function,
      required: !0
    },
    isLastHeaderColumn: {
      type: Function,
      required: !0
    },
    shouldRenderLeftFixedShadow: {
      type: Function,
      required: !0
    },
    shouldRenderRightFixedShadow: {
      type: Function,
      required: !0
    },
    toggleCurrentSelectableRows: {
      type: Function,
      required: !0
    },
    startColumnResize: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const n = C(() => {
      if (e.isColumnSortable(e.headerCell.column))
        return e.getColumnSorterOrder(e.headerCell.column.key);
    }), r = C(() => {
      var a, i;
      return (i = (a = e.headerCell.column.titleAlign) != null ? a : e.headerCell.column.align) != null ? i : "left";
    }), t = C(() => e.headerCell.colSpan != null && e.headerCell.colSpan > 1 ? {} : {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    });
    function o() {
      const { column: a } = e.headerCell;
      return e.isSelectionColumn(a) || e.isExpandColumn(a) ? "" : ir(a.title);
    }
    return {
      n: NP,
      classes: RP,
      columnSorterOrder: n,
      renderHeaderTitle: o,
      headerAlign: r,
      sortTriggerStyle: t
    };
  }
});
Bg.render = LP;
var FP = Bg, Dg = {
  data: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => []
  },
  rowKey: {
    type: [
      String,
      Number,
      Function
    ],
    default: "id"
  },
  rowProps: { type: [Object, Function] },
  rowClass: { type: [
    String,
    Array,
    Object,
    Function
  ] },
  summary: { type: Function },
  loading: Boolean,
  pagination: {
    type: [Boolean, Object],
    default: !0
  },
  remote: Boolean,
  page: {
    type: Number,
    default: 1
  },
  pageSize: {
    type: Number,
    default: 10
  },
  total: Number,
  maxHeight: [Number, String],
  scrollX: [Number, String],
  sorters: {
    type: Array,
    default: () => []
  },
  sortMode: {
    type: String,
    default: "single"
  },
  tree: Boolean,
  surface: String,
  cascade: {
    type: Boolean,
    default: !0
  },
  childrenKey: {
    type: String,
    default: "children"
  },
  plain: Boolean,
  checkedRowKeys: {
    type: Array,
    default: () => []
  },
  expandedRowKeys: {
    type: Array,
    default: () => []
  },
  expandedTreeRowKeys: {
    type: Array,
    default: () => []
  },
  elevation: {
    type: [
      Boolean,
      Number,
      String
    ],
    default: !0
  },
  cellBordered: Boolean,
  bordered: Boolean,
  tableLayout: {
    type: String,
    default: "auto"
  },
  size: {
    type: String,
    default: "normal"
  },
  "onUpdate:checkedRowKeys": V(),
  "onUpdate:expandedRowKeys": V(),
  "onUpdate:expandedTreeRowKeys": V(),
  "onUpdate:page": V(),
  "onUpdate:pageSize": V(),
  "onUpdate:sorters": V()
};
function Mg(e, n) {
  const r = so(e, () => Array(n).fill(!1));
  return {
    rawMatrix: r,
    isCovered: (t, o) => r[t][o],
    cover: (t, o, a, i) => {
      so(a, (l) => {
        so(i, (s) => {
          l === 0 && s === 0 || (r[t + l][o + s] = !0);
        });
      });
    }
  };
}
function So(e, n, r) {
  const t = e == null ? 1 : Ql(ir(e, r));
  return t <= 0 ? 0 : hn(t, 1, n);
}
var HP = Object.defineProperty, UP = Object.defineProperties, jP = Object.getOwnPropertyDescriptors, ef = Object.getOwnPropertySymbols, YP = Object.prototype.hasOwnProperty, KP = Object.prototype.propertyIsEnumerable, nf = (e, n, r) => n in e ? HP(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, WP = (e, n) => {
  for (var r in n || (n = {})) YP.call(n, r) && nf(e, r, n[r]);
  if (ef)
    for (var r of ef(n)) KP.call(n, r) && nf(e, r, n[r]);
  return e;
}, qP = (e, n) => UP(e, jP(n));
function XP({ columns: e, sourceRows: n, tree: r, collapsedTreeRowKeys: t, expandedRowKeySet: o, firstTreeColumnIndex: a, getRowKey: i, getTreeChildren: l }) {
  const s = C(() => r() ? v(n(), !0) : f(n())), u = C(() => r() ? v(n(), !1) : s.value), d = C(() => {
    const p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
    for (const y of s.value)
      p.set(y.key, y), h.set(y.row, y), y.parentKey != null && m.set(y.key, y.parentKey);
    return {
      rowByKey: p,
      rowByObject: h,
      parentKeyByChild: m
    };
  }), c = C(() => {
    const p = e(), h = u.value.length, m = p.length, y = Mg(h, m);
    return u.value.map(($, w) => {
      const z = [];
      return p.forEach((T, O) => {
        var R, U;
        if (y.isCovered(w, O)) return;
        const M = {
          row: $.row,
          rowIndex: $.rowIndex,
          column: T
        }, D = m - O, E = h - w, B = So(T.colSpan, D, M), N = So(T.rowSpan, E, M);
        if (B === 0 || N === 0) return;
        y.cover(w, O, N, B);
        const A = O === a.value;
        z.push({
          key: `${(U = (R = T.key) != null ? R : T.type) != null ? U : O}-${w}-${O}`,
          columnIndex: O,
          column: T,
          treeLevel: A ? $.level : void 0,
          treeExpandable: A ? $.expandable : void 0,
          treeExpanded: A ? $.treeExpanded : void 0,
          colSpan: B > 1 ? B : void 0,
          rowSpan: N > 1 ? N : void 0
        });
      }), qP(WP({}, $), {
        expanded: o.value.has($.key),
        cells: z
      });
    });
  });
  function f(p) {
    return p.map((h, m) => ({
      key: i(h, m),
      row: h,
      rowIndex: m,
      level: 0,
      expandable: !1,
      treeExpanded: !0
    }));
  }
  function v(p, h) {
    const m = [];
    let y = 0;
    function $(w, z, T, O) {
      for (const R of w) {
        const U = y;
        y += 1;
        const M = i(R, U), D = l(R), E = r() && D.length > 0, B = !E || !t.value.has(M);
        (h || O) && m.push({
          key: M,
          row: R,
          rowIndex: U,
          level: z,
          parentKey: T,
          expandable: E,
          treeExpanded: B
        }), $(D, z + 1, M, O && B);
      }
    }
    return $(p, 0, void 0, !0), m;
  }
  return {
    allFlatRows: s,
    visibleFlatRows: u,
    treeRowMeta: d,
    bodyRows: c
  };
}
function GP({ columns: e, resolvedColumnWidths: n }) {
  const r = C(() => d("left")), t = C(() => d("right")), o = C(() => l("left")), a = C(() => l("right"));
  function i(c, f) {
    var v, p;
    return c === "left" ? {
      left: `${(v = o.value[f]) != null ? v : 0}px`,
      position: "sticky",
      zIndex: 2
    } : c === "right" ? {
      right: `${(p = a.value[f]) != null ? p : 0}px`,
      position: "sticky",
      zIndex: 2
    } : {};
  }
  function l(c) {
    const f = e(), v = n(), p = Array(f.length).fill(void 0);
    let h = 0;
    if (c === "left") {
      for (let m = 0; m < f.length; m += 1)
        f[m].fixed === "left" && (p[m] = h, h += v[m]);
      return p;
    }
    for (let m = f.length - 1; m >= 0; m -= 1)
      f[m].fixed === "right" && (p[m] = h, h += v[m]);
    return p;
  }
  function s(c) {
    return r.value === c;
  }
  function u(c) {
    return t.value === c;
  }
  function d(c) {
    const f = e();
    if (c === "left") {
      for (let v = f.length - 1; v >= 0; v -= 1) if (f[v].fixed === "left") return v;
      return -1;
    }
    for (let v = 0; v < f.length; v += 1) if (f[v].fixed === "right") return v;
    return -1;
  }
  return {
    getFixedStyle: i,
    isFirstRightFixedColumn: u,
    isLastLeftFixedColumn: s,
    leftFixedOffsets: o,
    rightFixedOffsets: a
  };
}
var ZP = Object.defineProperty, JP = Object.defineProperties, QP = Object.getOwnPropertyDescriptors, rf = Object.getOwnPropertySymbols, xP = Object.prototype.hasOwnProperty, _P = Object.prototype.propertyIsEnumerable, tf = (e, n, r) => n in e ? ZP(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, e4 = (e, n) => {
  for (var r in n || (n = {})) xP.call(n, r) && tf(e, r, n[r]);
  if (rf)
    for (var r of rf(n)) _P.call(n, r) && tf(e, r, n[r]);
  return e;
}, n4 = (e, n) => JP(e, QP(n)), r4 = 52;
function t4({ columns: e, isSelectionColumn: n, isExpandColumn: r }) {
  const t = P({});
  let o;
  const a = C(() => e().map((y, $) => {
    var w;
    return (w = f(y, $)) != null ? w : 0;
  })), i = C(() => e().some((y, $) => f(y, $) != null)), l = C(() => a.value.reduce((y, $) => y + $, 0));
  me(e, () => {
    const y = new Set(e().map((w, z) => v(w, z))), $ = {};
    Object.entries(t.value).forEach(([w, z]) => {
      y.has(w) && ($[w] = z);
    }), t.value = $;
  }, { immediate: !0 }), Pt(() => {
    o?.();
  });
  function s(y) {
    return y.resizable === !0;
  }
  function u(y, $) {
    const w = {}, z = c(y, $);
    if (z != null)
      return w.width = ze(z), w.minWidth = ze(z), w.maxWidth = ze(z), w;
    const T = f(y, $);
    T != null && (w.width = ze(T));
    const O = p(y);
    O != null ? w.minWidth = ze(O) : T != null && (w.minWidth = ze(T));
    const R = h(y);
    return R != null && (w.maxWidth = ze(R)), w;
  }
  function d(y, $) {
    var w;
    if (!s($.column)) return;
    y.preventDefault(), y.stopPropagation();
    const z = (w = y.currentTarget) == null ? void 0 : w.closest("th");
    if (!z) return;
    o?.();
    const T = y.clientX, O = z.getBoundingClientRect().width, R = v($.column, $.startLeafColumnIndex);
    document.addEventListener("mousemove", U), document.addEventListener("mouseup", M), o = D;
    function U(E) {
      const B = m($.column, O + E.clientX - T);
      t.value = n4(e4({}, t.value), { [R]: B });
    }
    function M() {
      D();
    }
    function D() {
      document.removeEventListener("mousemove", U), document.removeEventListener("mouseup", M), o = void 0;
    }
  }
  function c(y, $) {
    return t.value[v(y, $)];
  }
  function f(y, $) {
    var w;
    const z = c(y, $);
    if (z != null) return z;
    const T = (w = y.width) != null ? w : n(y) || r(y) ? r4 : void 0;
    if (T != null) return m(y, fn(T));
    const O = p(y);
    if (O != null) return O;
  }
  function v(y, $) {
    var w, z;
    return `${(z = (w = y.key) != null ? w : y.type) != null ? z : "column"}-${$}`;
  }
  function p(y) {
    if (y.minWidth == null) return;
    const $ = fn(y.minWidth), w = h(y);
    return w == null ? $ : Math.min($, w);
  }
  function h(y) {
    if (y.maxWidth != null)
      return fn(y.maxWidth);
  }
  function m(y, $) {
    var w, z;
    return hn($, (w = p(y)) != null ? w : 0, (z = h(y)) != null ? z : Number.POSITIVE_INFINITY);
  }
  return {
    hasResolvedColumnWidth: i,
    resolvedColumnWidths: a,
    totalResolvedColumnWidth: l,
    getColStyle: u,
    isColumnResizable: s,
    startColumnResize: d
  };
}
function o4(e = []) {
  const n = P(), r = P(0), t = P(0);
  me(e, o, {
    immediate: !0,
    flush: "post"
  }), W0(n, o), wr(o);
  function o() {
    Ne(a);
  }
  function a() {
    n.value && i(n.value);
  }
  function i(s) {
    r.value = s.scrollLeft, t.value = Math.max(s.scrollWidth - s.clientWidth, 0);
  }
  function l(s) {
    i(s.currentTarget);
  }
  return {
    container: n,
    scrollLeft: r,
    maxScrollDistance: t,
    handleContainerScroll: l,
    syncContainerScroll: a
  };
}
function a4({ columns: e, expandedRowKeys: n, isExpandColumn: r }) {
  const t = C(() => new Set(n.value)), o = C(() => e().find(r));
  function a(s, u) {
    return u?.expandable ? u.expandable({
      row: s.row,
      rowIndex: s.rowIndex
    }) : !0;
  }
  function i(s) {
    const u = o.value;
    if (!u || !a(s, u)) return;
    const d = new Set(n.value);
    d.has(s.key) ? d.delete(s.key) : d.add(s.key), n.value = [...d];
  }
  function l(s) {
    const u = o.value;
    if (u)
      return u.renderExpand({
        row: s.row,
        rowIndex: s.rowIndex
      });
  }
  return {
    expandedRowKeySet: t,
    isRowExpandable: a,
    toggleRowExpanded: i,
    renderExpandedRow: l
  };
}
function i4({ columns: e, sourceRows: n, summary: r }) {
  return { footRows: C(() => {
    const t = r();
    if (!t) return [];
    const o = qr(t({ data: n() })), a = e(), i = Mg(o.length, a.length);
    return o.map((l, s) => a.flatMap((u, d) => {
      var c, f;
      if (i.isCovered(s, d)) return [];
      const v = (f = (c = u.key) != null ? c : u.type) != null ? f : String(d), p = l[v], h = a.length - d, m = o.length - s, y = So(p?.colSpan, h), $ = So(p?.rowSpan, m);
      return y === 0 || $ === 0 ? [] : (i.cover(s, d, $, y), [{
        key: `${s}-${v}`,
        columnIndex: d,
        column: u,
        value: p?.value,
        colSpan: y > 1 ? y : void 0,
        rowSpan: $ > 1 ? $ : void 0
      }]);
    }));
  }) };
}
function l4({ columns: e }) {
  const n = C(() => o(e())), r = C(() => {
    const s = e(), u = [], d = i(s);
    let c = 0;
    f(s, 0);
    function f(h, m) {
      u[m] || (u[m] = []);
      const y = u[m], $ = c, w = $ + o(h).length - 1;
      let z = $, T = 0;
      return h.forEach((O, R) => {
        if (t(O)) {
          T += v(y, O, m, R);
          return;
        }
        const U = p(y, O, m, w, z);
        U > 1 && (z = c - 1 + U), T += U;
      }), T;
    }
    function v(h, m, y, $) {
      const w = c, z = f(m.children, y + 1), T = c - 1;
      return z === 0 ? 0 : (h.push({
        key: a(m, y, $),
        column: m,
        colSpan: z,
        startLeafColumnIndex: w,
        endLeafColumnIndex: T,
        fixed: l(n.value.slice(w, T + 1))
      }), z);
    }
    function p(h, m, y, $, w) {
      if (c < w)
        return c += 1, 0;
      const z = c, T = $ - z + 1, O = So(m.titleColSpan, T);
      return c += 1, O === 0 ? 0 : (h.push({
        key: a(m, y, z),
        column: m,
        colSpan: O > 1 ? O : void 0,
        rowSpan: d - y > 1 ? d - y : void 0,
        startLeafColumnIndex: z,
        endLeafColumnIndex: z + O - 1,
        fixed: l(n.value.slice(z, z + O))
      }), O);
    }
    return u;
  });
  function t(s) {
    return "children" in s && We(s.children) && s.children.length > 0;
  }
  function o(s) {
    return s.flatMap((u) => t(u) ? o(u.children) : [u]);
  }
  function a(s, u, d) {
    var c, f;
    return `${(f = (c = s.key) != null ? c : s.type) != null ? f : "group"}-header-${u}-${d}`;
  }
  function i(s) {
    return s.length ? Math.max(...s.map((u) => t(u) ? 1 + i(u.children) : 1)) : 0;
  }
  function l(s) {
    if (s.length) {
      if (s.every((u) => u.fixed === "left")) return "left";
      if (s.every((u) => u.fixed === "right")) return "right";
    }
  }
  return {
    normalizedColumns: n,
    headerRows: r,
    isGroupColumn: t
  };
}
var s4 = Object.defineProperty, u4 = Object.defineProperties, d4 = Object.getOwnPropertyDescriptors, of = Object.getOwnPropertySymbols, c4 = Object.prototype.hasOwnProperty, f4 = Object.prototype.propertyIsEnumerable, af = (e, n, r) => n in e ? s4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Hl = (e, n) => {
  for (var r in n || (n = {})) c4.call(n, r) && af(e, r, n[r]);
  if (of)
    for (var r of of(n)) f4.call(n, r) && af(e, r, n[r]);
  return e;
}, lf = (e, n) => u4(e, d4(n)), sf = {
  simple: !1,
  disabled: !1,
  showSizeChanger: !1,
  showQuickJumper: !1,
  maxPagerCount: 5,
  sizeOption: [
    10,
    20,
    50,
    100
  ],
  showTotal: void 0
};
function v4({ pagination: e, remote: n, loading: r, page: t, pageSize: o, total: a, data: i, onUpdatePage: l }) {
  const s = C(() => {
    const p = e();
    return Do(p) ? lf(Hl({}, sf), { disabled: r() }) : lf(Hl(Hl({}, sf), p), { disabled: r() || p.disabled === !0 });
  }), u = C(() => {
    var p;
    return e() === !1 ? i().length : n() ? (p = a()) != null ? p : 0 : i().length;
  }), d = C(() => e() !== !1 && u.value > 0), c = C(() => d.value ? hn(Math.ceil(u.value / o()), 1, Number.MAX_SAFE_INTEGER) : 1), f = C(() => d.value ? hn(t(), 1, c.value) : 1), v = C(() => {
    if (!d.value || n()) return i();
    const p = (f.value - 1) * o();
    return i().slice(p, p + o());
  });
  return me([
    e,
    n,
    a,
    t,
    f
  ], ([p, h, m, y, $]) => {
    p === !1 || h && m == null || y === $ || S(l?.(), $);
  }, { immediate: !0 }), {
    paginationProps: s,
    paginationTotal: u,
    showPagination: d,
    normalizedPage: f,
    pagedData: v
  };
}
var p4 = Object.defineProperty, m4 = Object.defineProperties, g4 = Object.getOwnPropertyDescriptors, uf = Object.getOwnPropertySymbols, h4 = Object.prototype.hasOwnProperty, b4 = Object.prototype.propertyIsEnumerable, df = (e, n, r) => n in e ? p4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, cf = (e, n) => {
  for (var r in n || (n = {})) h4.call(n, r) && df(e, r, n[r]);
  if (uf)
    for (var r of uf(n)) b4.call(n, r) && df(e, r, n[r]);
  return e;
}, ff = (e, n) => m4(e, g4(n));
function y4({ columns: e, tree: n, cascade: r, pagedData: t, allFlatRows: o, treeRowMeta: a, checkedRowKeys: i, isSelectionColumn: l, getTreeChildren: s }) {
  const u = C(() => e().find(l)), d = C(() => n() && r() && !!u.value && m(u.value)), c = C(() => new Set(i.value)), f = C(() => {
    const E = /* @__PURE__ */ new Map(), B = u.value;
    if (!B) return E;
    for (const A of t()) N(A);
    function N(A) {
      const I = a().rowByObject.get(A);
      if (!I) return {
        checked: !1,
        indeterminate: !1,
        selectable: !1
      };
      const F = s(A).map(N), Q = $(A, I.rowIndex, B), X = c.value.has(I.key);
      if (!d.value || F.length === 0) {
        const ne = {
          checked: X,
          indeterminate: !1
        };
        return E.set(I.key, ne), ff(cf({}, ne), { selectable: Q });
      }
      const ae = F.filter((ne) => ne.selectable), Te = ae.length > 0 ? ae.every((ne) => ne.checked) : X, ce = ae.some((ne) => ne.checked || ne.indeterminate), G = {
        checked: Q ? Te : !1,
        indeterminate: ae.length > 0 && !Te && ce
      };
      return E.set(I.key, G), ff(cf({}, G), { selectable: Q || ae.length > 0 });
    }
    return E;
  }), v = C(() => {
    const E = u.value;
    return E ? o().filter((B) => $(B.row, B.rowIndex, E)) : [];
  }), p = C(() => v.value.length > 0 && v.value.every((E) => z(E.key))), h = C(() => v.value.some((E) => z(E.key) || T(E.key)) && !p.value);
  function m(E) {
    return E.multiple !== !1;
  }
  function y(E) {
    return E.selectable !== !1;
  }
  function $(E, B, N) {
    return !N || N.selectable == null || N.selectable === !0 ? !0 : N.selectable === !1 ? !1 : N.selectable({
      row: E,
      rowIndex: B
    });
  }
  function w(E) {
    i.value = E;
  }
  function z(E) {
    var B, N;
    return (N = (B = f.value.get(E)) == null ? void 0 : B.checked) != null ? N : c.value.has(E);
  }
  function T(E) {
    var B, N;
    return (N = (B = f.value.get(E)) == null ? void 0 : B.indeterminate) != null ? N : !1;
  }
  function O(E, B) {
    const N = u.value;
    if (!N || !y(N) || !$(E.row, E.rowIndex, N)) return;
    if (!m(N)) {
      w(B ? [E.key] : i.value.filter((I) => I !== E.key));
      return;
    }
    const A = new Set(i.value);
    if (d.value) {
      for (const I of U(E.row)) B ? A.add(I) : A.delete(I);
      D(A, E.key);
    } else B ? A.add(E.key) : A.delete(E.key);
    w([...A]);
  }
  function R(E) {
    const B = u.value;
    if (!B || !y(B) || !m(B)) return;
    const N = new Set(i.value);
    for (const A of v.value) E ? N.add(A.key) : N.delete(A.key);
    w([...N]);
  }
  function U(E) {
    const B = u.value, N = [];
    if (!B) return N;
    function A(I) {
      const F = a().rowByObject.get(I);
      if (F) {
        $(I, F.rowIndex, B) && N.push(F.key);
        for (const Q of s(I)) A(Q);
      }
    }
    return A(E), N;
  }
  function M(E, B) {
    const N = u.value, A = a().rowByObject.get(E);
    if (!N || !A) return !1;
    const I = $(E, A.rowIndex, N), F = s(E);
    return F.length ? I && F.every((Q) => M(Q, B)) : I ? B.has(A.key) : !0;
  }
  function D(E, B) {
    let N = a().parentKeyByChild.get(B);
    for (; N != null; ) {
      const A = a().rowByKey.get(N);
      if (!A) break;
      M(A.row, E) ? E.add(N) : E.delete(N), N = a().parentKeyByChild.get(N);
    }
  }
  return {
    currentSelectableRows: v,
    allCurrentRowsSelected: p,
    someCurrentRowsSelected: h,
    isMultipleSelectionColumn: m,
    isSelectionColumnSelectable: y,
    isRowSelectable: $,
    isRowKeySelected: z,
    isRowKeyIndeterminate: T,
    toggleRowSelection: O,
    toggleCurrentSelectableRows: R
  };
}
var w4 = Object.defineProperty, k4 = Object.defineProperties, $4 = Object.getOwnPropertyDescriptors, vf = Object.getOwnPropertySymbols, C4 = Object.prototype.hasOwnProperty, S4 = Object.prototype.propertyIsEnumerable, pf = (e, n, r) => n in e ? w4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, P4 = (e, n) => {
  for (var r in n || (n = {})) C4.call(n, r) && pf(e, r, n[r]);
  if (vf)
    for (var r of vf(n)) S4.call(n, r) && pf(e, r, n[r]);
  return e;
}, O4 = (e, n) => k4(e, $4(n));
function z4({ sorters: e, sortMode: n, onUpdateSorters: r }) {
  const t = C(() => e());
  function o(l) {
    var s;
    return l.type == null && !((s = l.children) != null && s.length) && l.sorter === !0;
  }
  function a(l) {
    var s;
    return (s = t.value.find((u) => u.key === l)) == null ? void 0 : s.order;
  }
  function i(l) {
    const s = a(l);
    if (n() === "single") {
      S(r(), s == null ? [{
        key: l,
        order: "asc"
      }] : s === "asc" ? [{
        key: l,
        order: "desc"
      }] : []);
      return;
    }
    if (s == null) {
      S(r(), [...t.value, {
        key: l,
        order: "asc"
      }]);
      return;
    }
    if (s === "asc") {
      S(r(), t.value.map((u) => u.key !== l ? u : O4(P4({}, u), { order: "desc" })));
      return;
    }
    S(r(), t.value.filter((u) => u.key !== l));
  }
  return {
    activeSorters: t,
    isColumnSortable: o,
    getColumnSorterOrder: a,
    toggleColumnSorter: i
  };
}
function T4({ tree: e, data: n, expandedTreeRowKeys: r, getRowKey: t, getTreeChildren: o }) {
  const a = C(() => new Set(r.value)), i = C(() => {
    if (!e()) return /* @__PURE__ */ new Set();
    const d = u(n()), c = /* @__PURE__ */ new Set();
    for (const f of d) a.value.has(f) || c.add(f);
    return c;
  });
  me([n, e], () => {
    s();
  }, { immediate: !0 });
  function l(d) {
    if (!e() || !d.expandable) return;
    const c = new Set(r.value);
    c.has(d.key) ? c.delete(d.key) : c.add(d.key), r.value = [...c];
  }
  function s() {
    if (!e()) {
      r.value = [];
      return;
    }
    const d = u(n());
    r.value = r.value.filter((c) => d.has(c));
  }
  function u(d) {
    const c = /* @__PURE__ */ new Set();
    let f = 0;
    function v(p) {
      for (const h of p) {
        const m = f;
        f += 1;
        const y = o(h);
        y.length > 0 && c.add(t(h, m)), v(y);
      }
    }
    return v(d), c;
  }
  return {
    collapsedTreeRowKeys: i,
    expandedTreeRowKeySet: a,
    toggleTreeRowExpanded: l
  };
}
var E4 = Object.defineProperty, I4 = Object.defineProperties, B4 = Object.getOwnPropertyDescriptors, mf = Object.getOwnPropertySymbols, D4 = Object.prototype.hasOwnProperty, M4 = Object.prototype.propertyIsEnumerable, gf = (e, n, r) => n in e ? E4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, hf = (e, n) => {
  for (var r in n || (n = {})) D4.call(n, r) && gf(e, r, n[r]);
  if (mf)
    for (var r of mf(n)) M4.call(n, r) && gf(e, r, n[r]);
  return e;
}, bf = (e, n) => I4(e, B4(n)), { name: A4, n: N4, classes: R4 } = oe("data-table"), V4 = { key: 0 }, L4 = ["colspan"], F4 = { key: 1 }, H4 = ["colspan", "rowspan"];
function U4(e, n) {
  const r = x("data-table-header-cell"), t = x("data-table-body-cell"), o = x("maybe-v-node"), a = x("var-pagination"), i = x("var-loading");
  return b(), k("div", { class: g(e.classes(e.n(), [!e.plain, e.formatElevation(e.elevation, 1)], e.n("$--box"), [e.surface === "low", e.n("--surface-low")], [e.bordered, e.n("--bordered")], [e.cellBordered, e.n("--cell-bordered")], [e.plain, e.n("--plain")], [e.showPagination, e.n("--with-footer")], e.n(`--${e.size}`))) }, [j(i, { loading: e.loading }, Pr({
    default: ue(() => [L("div", {
      ref: "container",
      class: g(e.classes(e.n("container"), e.n("$--scrollbar"))),
      style: J(e.containerStyle),
      onScroll: n[0] || (n[0] = (...l) => e.handleContainerScroll && e.handleContainerScroll(...l))
    }, [e.columns.length ? (b(), k("table", {
      key: 0,
      class: g(e.n("table")),
      style: J(e.tableStyle)
    }, [
      L("colgroup", null, [(b(!0), k(Be, null, Ye(e.columns, (l, s) => {
        var u, d;
        return b(), k("col", {
          key: (d = (u = l.key) != null ? u : l.type) != null ? d : s,
          style: J(e.getColStyle(l, s))
        }, null, 4);
      }), 128))]),
      L("thead", null, [(b(!0), k(Be, null, Ye(e.headerRows, (l, s) => (b(), k("tr", {
        key: s,
        class: g(e.n("header-row"))
      }, [(b(!0), k(Be, null, Ye(l, (u) => (b(), we(r, {
        key: u.key,
        "header-cell": u,
        style: J(e.getHeaderCellStyle(u)),
        "all-current-rows-selected": e.allCurrentRowsSelected,
        "some-current-rows-selected": e.someCurrentRowsSelected,
        "has-selectable-rows": !!e.currentSelectableRows.length,
        "is-selection-column": e.isSelectionColumn,
        "is-expand-column": e.isExpandColumn,
        "is-multiple-selection-column": e.isMultipleSelectionColumn,
        "is-selection-column-selectable": e.isSelectionColumnSelectable,
        "is-column-sortable": e.isColumnSortable,
        "get-column-sorter-order": e.getColumnSorterOrder,
        "is-column-resizable": e.isColumnResizable,
        "is-last-header-column": e.isLastHeaderColumn,
        "should-render-left-fixed-shadow": e.shouldRenderLeftFixedShadow,
        "should-render-right-fixed-shadow": e.shouldRenderRightFixedShadow,
        "toggle-column-sorter": e.toggleColumnSorter,
        "toggle-current-selectable-rows": e.toggleCurrentSelectableRows,
        "start-column-resize": e.startColumnResize
      }, null, 8, [
        "header-cell",
        "style",
        "all-current-rows-selected",
        "some-current-rows-selected",
        "has-selectable-rows",
        "is-selection-column",
        "is-expand-column",
        "is-multiple-selection-column",
        "is-selection-column-selectable",
        "is-column-sortable",
        "get-column-sorter-order",
        "is-column-resizable",
        "is-last-header-column",
        "should-render-left-fixed-shadow",
        "should-render-right-fixed-shadow",
        "toggle-column-sorter",
        "toggle-current-selectable-rows",
        "start-column-resize"
      ]))), 128))], 2))), 128))]),
      e.bodyRows.length ? (b(), k("tbody", V4, [(b(!0), k(Be, null, Ye(e.bodyRows, (l) => (b(), k(Be, { key: l.key }, [L("tr", Xe({ class: e.classes(e.n("row"), e.getRowClass(l)) }, { ref_for: !0 }, e.getRowProps(l)), [(b(!0), k(Be, null, Ye(l.cells, (s) => (b(), we(t, {
        key: s.key,
        "body-row": l,
        cell: s,
        style: J(e.getBodyCellStyle(s)),
        tree: e.tree,
        "is-selection-column": e.isSelectionColumn,
        "is-expand-column": e.isExpandColumn,
        "is-multiple-selection-column": e.isMultipleSelectionColumn,
        "is-selection-column-selectable": e.isSelectionColumnSelectable,
        "is-row-selectable": e.isRowSelectable,
        "is-row-key-selected": e.isRowKeySelected,
        "is-row-key-indeterminate": e.isRowKeyIndeterminate,
        "is-row-expandable": e.isRowExpandable,
        "should-render-left-fixed-shadow": e.shouldRenderLeftFixedShadow,
        "should-render-right-fixed-shadow": e.shouldRenderRightFixedShadow,
        "toggle-row-selection": e.toggleRowSelection,
        "toggle-row-expanded": e.toggleRowExpanded,
        "toggle-tree-row-expanded": e.toggleTreeRowExpanded,
        "render-cell": e.renderCell,
        "get-cell-props": e.getCellProps
      }, null, 8, [
        "body-row",
        "cell",
        "style",
        "tree",
        "is-selection-column",
        "is-expand-column",
        "is-multiple-selection-column",
        "is-selection-column-selectable",
        "is-row-selectable",
        "is-row-key-selected",
        "is-row-key-indeterminate",
        "is-row-expandable",
        "should-render-left-fixed-shadow",
        "should-render-right-fixed-shadow",
        "toggle-row-selection",
        "toggle-row-expanded",
        "toggle-tree-row-expanded",
        "render-cell",
        "get-cell-props"
      ]))), 128))], 16), l.expanded ? (b(), k("tr", {
        key: 0,
        class: g(e.n("expanded-row"))
      }, [L("td", {
        class: g(e.classes(e.n("cell"), e.n("body-cell"), e.n("expanded-cell"))),
        colspan: e.columns.length
      }, [L("div", { class: g(e.n("expanded-content")) }, [j(o, {
        is: e.renderExpandedRow(l),
        tag: "div"
      }, null, 8, ["is"])], 2)], 10, L4)], 2)) : q("v-if", !0)], 64))), 128))])) : q("v-if", !0),
      e.footRows.length ? (b(), k("tfoot", F4, [(b(!0), k(Be, null, Ye(e.footRows, (l, s) => (b(), k("tr", {
        key: s,
        class: g(e.n("summary-row"))
      }, [(b(!0), k(Be, null, Ye(l, (u) => (b(), k("td", {
        key: u.key,
        class: g(e.classes(e.n("cell"), e.n("summary-cell"), [u.column.fixed, e.n("fixed-cell")], [e.shouldRenderLeftFixedShadow(u.columnIndex), e.n("fixed-cell--shadow-right")], [e.shouldRenderRightFixedShadow(u.columnIndex), e.n("fixed-cell--shadow-left")])),
        style: J(e.getBodyCellStyle(u)),
        colspan: u.colSpan,
        rowspan: u.rowSpan
      }, [j(o, {
        is: u.value,
        tag: "div"
      }, null, 8, ["is"])], 14, H4))), 128))], 2))), 128))])) : q("v-if", !0)
    ], 6)) : q("v-if", !0), e.bodyRows.length ? q("v-if", !0) : (b(), k("div", {
      key: 1,
      class: g(e.n("empty"))
    }, [H(e.$slots, "empty", {}, () => [Le(ve((e.pt ? e.pt : e.t)("dataTableEmptyText")), 1)])], 2))], 38), e.showPagination ? (b(), k("div", {
      key: 0,
      class: g(e.n("footer"))
    }, [H(e.$slots, "footer-prefix"), j(a, {
      "var-data-table-cover": "",
      current: e.normalizedPage,
      size: e.pageSize,
      total: e.paginationTotal,
      simple: e.paginationProps.simple,
      disabled: e.paginationProps.disabled,
      "show-size-changer": e.paginationProps.showSizeChanger,
      "show-quick-jumper": e.paginationProps.showQuickJumper,
      "max-pager-count": e.paginationProps.maxPagerCount,
      "size-option": e.paginationProps.sizeOption,
      "show-total": e.paginationProps.showTotal,
      onChange: e.handlePaginationChange
    }, null, 8, [
      "current",
      "size",
      "total",
      "simple",
      "disabled",
      "show-size-changer",
      "show-quick-jumper",
      "max-pager-count",
      "size-option",
      "show-total",
      "onChange"
    ])], 2)) : q("v-if", !0)]),
    _: 2
  }, [e.$slots["loading-description"] ? {
    name: "description",
    fn: ue(() => [H(e.$slots, "loading-description")]),
    key: "0"
  } : void 0]), 1032, ["loading"])], 2);
}
var Ag = te({
  name: A4,
  components: {
    DataTableBodyCell: AP,
    DataTableHeaderCell: FP,
    VarLoading: Ct,
    VarPagination: za,
    MaybeVNode: lr
  },
  props: Dg,
  setup(e) {
    const { t: n } = kr(), r = wn(e, "checkedRowKeys"), t = wn(e, "expandedRowKeys"), o = wn(e, "expandedTreeRowKeys"), a = wn(e, "page"), i = wn(e, "pageSize"), { collapsedTreeRowKeys: l, toggleTreeRowExpanded: s } = T4({
      tree: () => e.tree,
      data: () => e.data,
      expandedTreeRowKeys: o,
      getRowKey: re,
      getTreeChildren: ye
    }), { normalizedColumns: u, headerRows: d } = l4({ columns: () => e.columns }), { hasResolvedColumnWidth: c, resolvedColumnWidths: f, totalResolvedColumnWidth: v, getColStyle: p, isColumnResizable: h, startColumnResize: m } = t4({
      columns: () => u.value,
      isSelectionColumn: Pe,
      isExpandColumn: Ge
    }), y = C(() => {
      const se = {};
      return e.maxHeight != null && (se.maxHeight = ze(e.maxHeight), se.overflow = "auto"), se.overflowX = "auto", se;
    }), $ = C(() => {
      const se = {
        width: "100%",
        tableLayout: c.value ? "fixed" : e.tableLayout
      };
      return e.scrollX != null && (se.minWidth = ze(e.scrollX)), se;
    }), { getFixedStyle: w, isFirstRightFixedColumn: z, isLastLeftFixedColumn: T } = GP({
      columns: () => u.value,
      resolvedColumnWidths: () => f.value
    }), { getColumnSorterOrder: O, isColumnSortable: R, toggleColumnSorter: U } = z4({
      sorters: () => e.sorters,
      sortMode: () => e.sortMode,
      onUpdateSorters: () => e["onUpdate:sorters"]
    }), { paginationProps: M, paginationTotal: D, showPagination: E, normalizedPage: B, pagedData: N } = v4({
      pagination: () => e.pagination,
      remote: () => e.remote,
      loading: () => e.loading,
      page: () => a.value,
      pageSize: () => i.value,
      total: () => e.total,
      data: () => e.data,
      onUpdatePage: () => (se) => {
        a.value = se;
      }
    }), A = C(() => u.value.findIndex((se) => !Pe(se) && !Ge(se))), { expandedRowKeySet: I, isRowExpandable: F, toggleRowExpanded: Q, renderExpandedRow: X } = a4({
      columns: () => u.value,
      expandedRowKeys: t,
      isExpandColumn: Ge
    }), { allFlatRows: ae, treeRowMeta: Te, bodyRows: ce } = XP({
      collapsedTreeRowKeys: l,
      expandedRowKeySet: I,
      firstTreeColumnIndex: A,
      getRowKey: re,
      getTreeChildren: ye,
      columns: () => u.value,
      sourceRows: () => N.value,
      tree: () => e.tree
    }), { footRows: G } = i4({
      columns: () => u.value,
      sourceRows: () => N.value,
      summary: () => e.summary
    }), { container: ne, scrollLeft: pe, maxScrollDistance: Oe, handleContainerScroll: Y } = o4([
      u,
      ce,
      G,
      v,
      () => e.scrollX
    ]), { currentSelectableRows: ie, allCurrentRowsSelected: Ee, someCurrentRowsSelected: Ue, isMultipleSelectionColumn: nn, isSelectionColumnSelectable: qe, isRowSelectable: en, isRowKeySelected: on, isRowKeyIndeterminate: be, toggleRowSelection: ee, toggleCurrentSelectableRows: K } = y4({
      checkedRowKeys: r,
      isSelectionColumn: Pe,
      getTreeChildren: ye,
      columns: () => u.value,
      tree: () => e.tree,
      cascade: () => e.cascade,
      pagedData: () => N.value,
      allFlatRows: () => ae.value,
      treeRowMeta: () => Te.value
    });
    function re(se, ke) {
      var je;
      return Yn(e.rowKey) ? e.rowKey({
        row: se,
        rowIndex: ke
      }) : (je = se[e.rowKey]) != null ? je : ke;
    }
    function ye(se) {
      const ke = se[e.childrenKey];
      return We(ke) ? ke : [];
    }
    function Pe(se) {
      return se.type === "selection";
    }
    function Ge(se) {
      return se.type === "expand";
    }
    function rn(se, ke) {
      if (!(Pe(ke) || Ge(ke)))
        return ke.render ? ke.render({
          row: se.row,
          rowIndex: se.rowIndex
        }) : se.row[ke.key];
    }
    function mn(se) {
      if (e.rowProps)
        return ir(e.rowProps, {
          row: se.row,
          rowIndex: se.rowIndex
        });
    }
    function Dn(se) {
      if (e.rowClass)
        return ir(e.rowClass, {
          row: se.row,
          rowIndex: se.rowIndex
        });
    }
    function $r(se, ke) {
      if (ke.cellProps)
        return ir(ke.cellProps, {
          row: se.row,
          rowIndex: se.rowIndex
        });
    }
    function or(se) {
      return se ?? "left";
    }
    function Ir(se) {
      return se === u.value.length - 1;
    }
    function Qn(se) {
      return pe.value > 1 && T(se);
    }
    function Re(se) {
      return pe.value < Oe.value - 1 && z(se);
    }
    function sn(se) {
      var ke;
      return bf(hf({ textAlign: or((ke = se.column.titleAlign) != null ? ke : se.column.align) }, w(se.fixed, se.startLeafColumnIndex)), { zIndex: se.fixed ? 3 : 2 });
    }
    function _(se) {
      return bf(hf({ textAlign: or(se.column.align) }, w(se.column.fixed, se.columnIndex)), { zIndex: se.column.fixed ? 1 : void 0 });
    }
    function he(se, ke) {
      a.value = se, i.value = ke;
    }
    return {
      pt: n,
      t: gn,
      container: ne,
      expandedRowKeys: t,
      containerStyle: y,
      paginationProps: M,
      paginationTotal: D,
      showPagination: E,
      normalizedPage: B,
      pageSize: i,
      tableStyle: $,
      columns: u,
      currentSelectableRows: ie,
      allCurrentRowsSelected: Ee,
      someCurrentRowsSelected: Ue,
      headerRows: d,
      bodyRows: ce,
      footRows: G,
      isColumnResizable: h,
      getRowProps: mn,
      getRowClass: Dn,
      getCellProps: $r,
      isSelectionColumn: Pe,
      isExpandColumn: Ge,
      isColumnSortable: R,
      isMultipleSelectionColumn: nn,
      isSelectionColumnSelectable: qe,
      getColumnSorterOrder: O,
      isRowExpandable: F,
      isRowKeyIndeterminate: be,
      isRowKeySelected: on,
      isRowSelectable: en,
      shouldRenderLeftFixedShadow: Qn,
      shouldRenderRightFixedShadow: Re,
      toggleColumnSorter: U,
      toggleCurrentSelectableRows: K,
      toggleRowExpanded: Q,
      toggleTreeRowExpanded: s,
      toggleRowSelection: ee,
      renderCell: rn,
      renderExpandedRow: X,
      getColStyle: p,
      getHeaderCellStyle: sn,
      getBodyCellStyle: _,
      handlePaginationChange: he,
      handleContainerScroll: Y,
      isLastHeaderColumn: Ir,
      startColumnResize: m,
      n: N4,
      classes: R4,
      formatElevation: Pn,
      toSizeUnit: ze
    };
  }
});
Ag.render = U4;
var Di = Ag;
de(Di);
fe(Di, Dg);
var aN = Di, Rs = Di, Ve = Lu({
  Year: "year",
  Month: "month",
  Date: "date"
}), Qe = Lu({
  Year: Ve.Year,
  Month: Ve.Month,
  Day: "day"
}), io = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
], lo = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6"
], Mn = {
  Year: "YYYY",
  Month: "YYYY-MM",
  Day: "YYYY-MM-D",
  DayPadded: "YYYY-MM-DD"
}, Wr = Lu({
  Prev: "prev",
  Next: "next"
}), j4 = Object.defineProperty, yf = Object.getOwnPropertySymbols, Y4 = Object.prototype.hasOwnProperty, K4 = Object.prototype.propertyIsEnumerable, wf = (e, n, r) => n in e ? j4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, W4 = (e, n) => {
  for (var r in n || (n = {})) Y4.call(n, r) && wf(e, r, n[r]);
  if (yf)
    for (var r of yf(n)) K4.call(n, r) && wf(e, r, n[r]);
  return e;
}, xn = Uo(), q4 = 7, X4 = 6, xo = {
  Prev: -1,
  Current: 0,
  Next: 1
}, { n: _o } = oe("day-picker"), { n: kf } = oe("date-picker");
function G4(e, n) {
  const r = x("var-button");
  return b(), k("div", { class: g(e.n()) }, [L("div", { class: g(e.n("content")) }, [j(bn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: ue(() => [(b(), k("div", { key: e.panelKey }, [L("ul", { class: g(e.n("head")) }, [(b(!0), k(Be, null, Ye(e.sortWeekList, (t) => (b(), k("li", { key: t }, ve(e.getDayAbbr(t)), 1))), 128))], 2), L("ul", { class: g(e.n("body")) }, [(b(!0), k(Be, null, Ye(e.days, (t, o) => (b(), k("li", { key: o }, [j(r, Xe({
      type: "primary",
      "var-day-picker-cover": "",
      round: "",
      elevation: e.panelProps.buttonElevation
    }, { ref_for: !0 }, W4({}, e.buttonProps(t)), { onClick: (a) => e.selectDay(t) }), {
      default: ue(() => [Le(ve(t.day), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))], 2)]))]),
    _: 1
  }, 8, ["name"])], 2)], 2);
}
var Ng = te({
  name: "DayPickerPanel",
  components: { VarButton: tr },
  props: {
    selection: {
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
    panelProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-day"],
  setup(e, { emit: n }) {
    const [, , r] = e.current.split("-"), t = P([]), o = P(!1), a = P(0), { t: i } = kr(), l = C(() => e.selection.selectedYear === e.preview.previewYear && e.selection.selectedMonth === e.preview.previewMonth), s = C(() => {
      const O = lo.findIndex((R) => R === e.panelProps.firstDayOfWeek);
      return O === -1 || O === 0 ? [...lo] : [...lo.slice(O), ...lo.slice(0, O)];
    });
    function u(O) {
      var R, U;
      return (U = (R = (i || gn)("datePickerWeekDict")) == null ? void 0 : R[O].abbr) != null ? U : "";
    }
    function d(O, R) {
      return {
        dateValue: O.format(Mn.Day),
        day: O.date(),
        monthOffset: R
      };
    }
    function c() {
      const { preview: { previewMonth: O, previewYear: R } } = e, U = xn(`${R}-${O}-01`), M = U.endOf(Qe.Month), D = U.daysInMonth(), E = Math.max(0, s.value.findIndex((A) => A === `${U.day()}`)), B = X4 * q4 - E - D, N = [];
      for (let A = E; A > 0; A--) N.push(d(U.subtract(A, Qe.Day), xo.Prev));
      for (let A = 1; A <= D; A++) N.push(d(U.date(A), xo.Current));
      for (let A = 1; A <= B; A++) N.push(d(M.add(A, Qe.Day), xo.Next));
      t.value = N;
    }
    function f(O) {
      const { min: R, max: U } = e.panelProps, M = U ? xn(O).isSameOrBefore(xn(U), Qe.Day) : !0, D = R ? xn(O).isSameOrAfter(xn(R), Qe.Day) : !0;
      return M && D;
    }
    function v() {
      const { selectedYear: O, selectedMonth: R, selectedDay: U } = e.selection;
      return O && R && U ? `${O}-${R}-${U}` : void 0;
    }
    function p(O) {
      const R = v();
      return R ? xn(O).isSame(xn(R), Qe.Day) : !1;
    }
    function h(O) {
      const { selection: { selectedDays: R, selectedRangeDays: U }, panelProps: { range: M } } = e;
      if (!M) return R.includes(O);
      if (!U.length) return !1;
      if (U.length === 1) return xn(O).isSame(xn(U[0]), Qe.Day);
      const D = xn(O).isSameOrBefore(xn(U[1]), Qe.Day), E = xn(O).isSameOrAfter(xn(U[0]), Qe.Day);
      return D && E;
    }
    function m(O) {
      const { allowedDates: R } = e.panelProps;
      return !f(O) || (R ? !R(O) : !1);
    }
    function y(O, R, U) {
      const { multiple: M, range: D, showCurrent: E } = e.panelProps;
      return E && xn(O).isSame(xn(e.current), Qe.Day) ? (D || M || l.value) && U ? !0 : D || M ? !R : l.value ? e.selection.selectedDay !== r : !0 : !1;
    }
    function $(O) {
      const { panelProps: { color: R, multiple: U, range: M } } = e, { dateValue: D, monthOffset: E } = O, B = E === xo.Current, N = p(D), A = M || U ? h(D) : N, I = m(D), F = I || (M || U ? !A : !N), Q = y(D, A, I), X = !I && !Q && !A;
      return {
        text: F,
        outline: Q,
        textColor: !I && Q ? R ?? "" : "",
        [`${kf()}-color-cover`]: X,
        class: [_o("button"), {
          [_o("button--usable")]: B,
          [_o("button--adjacent")]: !B
        }],
        disabled: I
      };
    }
    function w(O) {
      o.value = O === Wr.Prev, a.value += O === Wr.Prev ? -1 : 1;
    }
    function z(O) {
      o.value = O === Wr.Prev, a.value += O === Wr.Prev ? -1 : 1;
    }
    function T(O) {
      n("choose-day", O.day, O.monthOffset);
    }
    return En(() => {
      c();
    }), me(() => e.preview, () => {
      c();
    }), {
      n: _o,
      nDate: kf,
      days: t,
      reverse: o,
      panelKey: a,
      sortWeekList: s,
      shiftPreview: w,
      shiftYearPreview: z,
      getDayAbbr: u,
      selectDay: T,
      buttonProps: $
    };
  }
});
Ng.render = G4;
var Z4 = Ng, J4 = Object.defineProperty, $f = Object.getOwnPropertySymbols, Q4 = Object.prototype.hasOwnProperty, x4 = Object.prototype.propertyIsEnumerable, Cf = (e, n, r) => n in e ? J4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, _4 = (e, n) => {
  for (var r in n || (n = {})) Q4.call(n, r) && Cf(e, r, n[r]);
  if ($f)
    for (var r of $f(n)) x4.call(n, r) && Cf(e, r, n[r]);
  return e;
}, Dr = Uo(), { n: Sf } = oe("month-picker"), { n: Pf } = oe("date-picker");
function e3(e, n) {
  const r = x("var-button");
  return b(), k("div", { class: g(e.n()) }, [L("div", { class: g(e.n("content")) }, [j(bn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: ue(() => [(b(), k("ul", { key: e.panelKey }, [(b(!0), k(Be, null, Ye(e.MonthList, (t) => (b(), k("li", { key: t }, [j(r, Xe({
      type: "primary",
      "var-month-picker-cover": "",
      elevation: e.panelProps.buttonElevation
    }, { ref_for: !0 }, _4({}, e.buttonProps(t)), { onClick: (o) => e.selectMonth(t) }), {
      default: ue(() => [Le(ve(e.getMonthAbbr(t)), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))]))]),
    _: 1
  }, 8, ["name"])], 2)], 2);
}
var Rg = te({
  name: "MonthPickerPanel",
  components: { VarButton: tr },
  props: {
    preview: {
      type: Object,
      required: !0
    },
    selection: {
      type: Object,
      required: !0
    },
    panelProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-month"],
  setup(e, { emit: n }) {
    const r = P(!1), t = P(0), { t: o } = kr();
    function a(c) {
      var f, v;
      return (v = (f = (o || gn)("datePickerMonthDict")) == null ? void 0 : f[c].abbr) != null ? v : "";
    }
    function i(c) {
      const { preview: { previewYear: f }, panelProps: { min: v, max: p } } = e, h = `${f}-${c}`, m = p ? Dr(h).isSameOrBefore(Dr(p), Qe.Month) : !0, y = v ? Dr(h).isSameOrAfter(Dr(v), Qe.Month) : !0;
      return m && y;
    }
    function l(c, f) {
      const { preview: { previewYear: v }, selection: { selectedMonth: p, selectedYear: h, selectedMonths: m, selectedRangeMonths: y }, panelProps: { multiple: $, range: w } } = e;
      if (w) {
        if (!y.length) return !1;
        if (y.length === 1) return Dr(c).isSame(Dr(y[0]), Qe.Month);
        const z = Dr(c).isSameOrBefore(Dr(y[1]), Qe.Month), T = Dr(c).isSameOrAfter(Dr(y[0]), Qe.Month);
        return z && T;
      }
      return $ ? m.includes(c) : h === v && p === f;
    }
    function s(c) {
      const { preview: { previewYear: f }, panelProps: { allowedDates: v, color: p, type: h } } = e, m = `${f}-${c}`, y = l(m, c), $ = !i(c) || (h === Ve.Month && v ? !v(m) : !1);
      return {
        outline: !1,
        text: $ || !y,
        color: y && !$ ? p : "",
        textColor: "",
        [`${Pf()}-color-cover`]: !y && !$,
        class: Sf("button"),
        disabled: $
      };
    }
    function u(c) {
      n("choose-month", c);
    }
    function d(c) {
      r.value = c === Wr.Prev, t.value += c === Wr.Prev ? -1 : 1;
    }
    return {
      n: Sf,
      nDate: Pf,
      MonthList: io,
      reverse: r,
      panelKey: t,
      shiftPreview: d,
      buttonProps: s,
      getMonthAbbr: a,
      selectMonth: u
    };
  }
});
Rg.render = e3;
var n3 = Rg, { n: r3 } = oe("date-picker-header");
function t3(e, n) {
  const r = x("var-icon"), t = x("var-button");
  return b(), k("div", { class: g([e.n(), e.n(`--${e.type}`)]) }, [e.type === e.DatePickerUnits.Day ? (b(), k(Be, { key: 0 }, [L("div", { class: g(e.n("nav")) }, [
    j(t, {
      class: g(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[0] || (n[0] = (o) => e.$emit("shift-year-preview", e.ShiftDirections.Prev))
    }, {
      default: ue(() => [j(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class"]),
    j(t, {
      class: g([e.n("text-button"), e.n("year")]),
      "var-date-picker-header-cover": "",
      text: "",
      onClick: n[1] || (n[1] = (o) => e.$emit("open-year-panel"))
    }, {
      default: ue(() => [L("span", { class: g(e.n("year-value")) }, [Le(ve(e.date.previewYear) + " ", 1), j(r, {
        class: g(e.n("text-button-icon")),
        name: "chevron-down"
      }, null, 8, ["class"])], 2)]),
      _: 1
    }, 8, ["class"]),
    j(t, {
      class: g(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[2] || (n[2] = (o) => e.$emit("shift-year-preview", e.ShiftDirections.Next))
    }, {
      default: ue(() => [j(r, { name: "chevron-right" })]),
      _: 1
    }, 8, ["class"])
  ], 2), L("div", { class: g([e.n("nav"), e.n("nav--month")]) }, [
    j(t, {
      class: g(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[3] || (n[3] = (o) => e.$emit("shift-preview", e.ShiftDirections.Prev))
    }, {
      default: ue(() => [j(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class"]),
    j(t, {
      class: g([e.n("text-button"), e.n("month")]),
      "var-date-picker-header-cover": "",
      text: "",
      onClick: n[4] || (n[4] = (o) => e.$emit("open-month-panel"))
    }, {
      default: ue(() => [Le(ve(e.getMonthName()) + " ", 1), j(r, {
        class: g(e.n("text-button-icon")),
        name: "chevron-down"
      }, null, 8, ["class"])]),
      _: 1
    }, 8, ["class"]),
    j(t, {
      class: g(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[5] || (n[5] = (o) => e.$emit("shift-preview", e.ShiftDirections.Next))
    }, {
      default: ue(() => [j(r, { name: "chevron-right" })]),
      _: 1
    }, 8, ["class"])
  ], 2)], 64)) : e.type === e.DatePickerTypes.Month && !e.showPanelToggle ? (b(), k("div", {
    key: 1,
    class: g(e.n("nav"))
  }, [
    j(t, {
      class: g(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[6] || (n[6] = (o) => e.$emit("shift-preview", e.ShiftDirections.Prev))
    }, {
      default: ue(() => [j(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class"]),
    j(t, {
      class: g([e.n("text-button"), e.n("year")]),
      "var-date-picker-header-cover": "",
      text: "",
      onClick: n[7] || (n[7] = (o) => e.$emit("open-year-panel"))
    }, {
      default: ue(() => [L("span", { class: g(e.n("year-value")) }, [Le(ve(e.date.previewYear) + " ", 1), j(r, {
        class: g(e.n("text-button-icon")),
        name: "chevron-down"
      }, null, 8, ["class"])], 2)]),
      _: 1
    }, 8, ["class"]),
    j(t, {
      class: g(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[8] || (n[8] = (o) => e.$emit("shift-preview", e.ShiftDirections.Next))
    }, {
      default: ue(() => [j(r, { name: "chevron-right" })]),
      _: 1
    }, 8, ["class"])
  ], 2)) : (b(), k("div", {
    key: 2,
    class: g([e.n("nav"), e.n(`nav--${e.type}`)])
  }, [
    j(t, {
      class: g(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[9] || (n[9] = (o) => e.$emit("shift-preview", e.ShiftDirections.Prev))
    }, {
      default: ue(() => [j(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class"]),
    e.showPanelToggle ? (b(), we(t, {
      key: 0,
      class: g([e.n("text-button"), e.n("panel-label")]),
      "var-date-picker-header-cover": "",
      text: "",
      onClick: n[10] || (n[10] = (o) => e.$emit("open-date-panel"))
    }, {
      default: ue(() => [Le(ve(e.getPanelLabel()) + " ", 1), j(r, {
        class: g(e.n("text-button-icon")),
        name: "chevron-up"
      }, null, 8, ["class"])]),
      _: 1
    }, 8, ["class"])) : (b(), k("div", {
      key: 1,
      class: g([e.n("text-button"), e.n("panel-label")]),
      "var-date-picker-header-cover": ""
    }, ve(e.getPanelLabel()), 3)),
    j(t, {
      class: g(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[11] || (n[11] = (o) => e.$emit("shift-preview", e.ShiftDirections.Next))
    }, {
      default: ue(() => [j(r, { name: "chevron-right" })]),
      _: 1
    }, 8, ["class"])
  ], 2))], 2);
}
var Vg = te({
  name: "PanelHeader",
  components: {
    VarButton: tr,
    VarIcon: Je
  },
  props: {
    date: {
      type: Object,
      required: !0
    },
    type: {
      type: String,
      default: Ve.Date
    },
    showPanelToggle: Boolean
  },
  emits: [
    "open-date-panel",
    "open-year-panel",
    "open-month-panel",
    "shift-year-preview",
    "shift-preview"
  ],
  setup(e) {
    const { t: n } = kr();
    function r() {
      var o, a, i;
      const l = (o = (n || gn)("datePickerMonthDict")) == null ? void 0 : o[e.date.previewMonth];
      return (n || gn)("lang") === "zh-CN" ? (a = l?.name) != null ? a : "" : (i = l?.abbr) != null ? i : "";
    }
    function t() {
      return e.type === Ve.Month && e.showPanelToggle ? r() : e.date.previewYear;
    }
    return {
      n: r3,
      DatePickerTypes: Ve,
      DatePickerUnits: Qe,
      ShiftDirections: Wr,
      getMonthName: r,
      getPanelLabel: t
    };
  }
});
Vg.render = t3;
var o3 = Vg, Lg = {
  modelValue: [String, Array],
  type: {
    type: String,
    default: Ve.Date
  },
  hint: String,
  fallbackViewDate: String,
  allowedDates: Function,
  color: String,
  titleColor: String,
  elevation: {
    type: [
      Boolean,
      Number,
      String
    ],
    default: !1
  },
  buttonElevation: {
    type: [
      Boolean,
      Number,
      String
    ],
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
  showTitle: {
    type: Boolean,
    default: !0
  },
  readonly: Boolean,
  multiple: Boolean,
  range: Boolean,
  onPreview: V(),
  onChange: V(),
  "onUpdate:modelValue": V()
}, a3 = Object.defineProperty, Of = Object.getOwnPropertySymbols, i3 = Object.prototype.hasOwnProperty, l3 = Object.prototype.propertyIsEnumerable, zf = (e, n, r) => n in e ? a3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, s3 = (e, n) => {
  for (var r in n || (n = {})) i3.call(n, r) && zf(e, r, n[r]);
  if (Of)
    for (var r of Of(n)) l3.call(n, r) && zf(e, r, n[r]);
  return e;
}, Mr = Uo(), { n: Tf } = oe("year-picker"), { n: Ul } = oe("date-picker");
function u3(e, n) {
  const r = x("var-button");
  return b(), k("div", null, [j(bn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: ue(() => [(b(), k("ul", {
      ref: "panel",
      key: e.panelKey,
      class: g(e.n())
    }, [(b(!0), k(Be, null, Ye(e.yearList, (t) => (b(), k("li", { key: t }, [j(r, Xe({
      type: "primary",
      "var-year-picker-cover": "",
      elevation: e.panelProps.buttonElevation
    }, { ref_for: !0 }, s3({}, e.buttonProps(`${t}`)), { onClick: (o) => e.selectYear(t) }), {
      default: ue(() => [Le(ve(t), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))], 2))]),
    _: 1
  }, 8, ["name"])]);
}
var Fg = te({
  name: "YearPickerPanel",
  components: { VarButton: tr },
  props: {
    preview: { type: String },
    selection: {
      type: Object,
      required: !0
    },
    panelProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-year"],
  setup(e, { emit: n }) {
    const r = P(), t = P(!1), o = P(0), a = P(0), i = C(() => {
      if (!e.preview) return [];
      const v = Math.floor(Z(e.preview) / 100 + a.value) * 100;
      return so(100, (p) => Math.max(0, v) + p);
    });
    function l(v) {
      const { panelProps: { min: p, max: h } } = e, m = h ? Mr(v).isSameOrBefore(Mr(h), Qe.Year) : !0, y = p ? Mr(v).isSameOrAfter(Mr(p), Qe.Year) : !0;
      return m && y;
    }
    function s(v) {
      const { selection: { selectedYear: p, selectedYears: h, selectedRangeYears: m }, panelProps: { multiple: y, range: $ } } = e;
      if ($) {
        if (!m.length) return !1;
        if (m.length === 1) return Mr(v).isSame(Mr(m[0]), Qe.Year);
        const w = Mr(v).isSameOrBefore(Mr(m[1]), Qe.Year), z = Mr(v).isSameOrAfter(Mr(m[0]), Qe.Year);
        return w && z;
      }
      return y ? h.includes(v) : p === v;
    }
    function u(v) {
      const { panelProps: { allowedDates: p, color: h, type: m } } = e, y = s(v), $ = !l(v) || (m === Ve.Year && p ? !p(v) : !1);
      return {
        outline: !1,
        text: $ || !y,
        color: y && !$ ? h : "",
        textColor: "",
        [`${Ul()}-color-cover`]: !y && !$,
        class: Tf("button"),
        disabled: $
      };
    }
    function d(v) {
      n("choose-year", v);
    }
    function c() {
      const v = r.value.querySelector(".var-button--primary"), p = r.value.closest(`.${Ul("body")}`);
      if (!v || !p) return;
      const h = p.getBoundingClientRect(), m = v.getBoundingClientRect();
      p.scrollTop += m.top - h.top - (p.clientHeight - m.height) / 2;
    }
    function f(v) {
      const p = v === Wr.Prev;
      p && i.value[0] <= 0 || (t.value = p, o.value += p ? -1 : 1, a.value += p ? -1 : 1);
    }
    return En(c), me(() => e.preview, () => {
      a.value = 0;
    }), {
      n: Tf,
      buttonProps: u,
      panel: r,
      yearList: i,
      reverse: t,
      panelKey: o,
      nDate: Ul,
      selectYear: d,
      shiftPreview: f
    };
  }
});
Fg.render = u3;
var d3 = Fg, { name: c3, n: f3, classes: v3 } = oe("date-picker"), yn = Uo();
function p3(e, n) {
  const r = x("panel-header"), t = x("year-picker-panel"), o = x("month-picker-panel"), a = x("day-picker-panel");
  return b(), k("div", {
    class: g(e.classes(e.n(), e.formatElevation(e.elevation, 2), [!e.showTitle, e.n("--no-title")])),
    onPointerdownCapture: n[4] || (n[4] = Rn(() => {
    }, ["prevent"]))
  }, [
    e.showTitle ? (b(), k("div", {
      key: 0,
      class: g(e.n("title")),
      style: J({ background: e.titleColor || e.color })
    }, [L("div", { class: g(e.n("title-select")) }, [L("div", { class: g(e.n("title-hint")) }, ve(e.titleHint), 3)], 2), L("div", {
      class: g(e.classes(e.n("title-date"), [!e.showYearPanel || e.type === e.DatePickerTypes.Year, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
      onClick: n[0] || (n[0] = (i) => e.switchPanel(e.DatePickerTypes.Date))
    }, [j(bn, { name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey` }, {
      default: ue(() => [e.type === e.DatePickerTypes.Year ? (b(), k("div", { key: `${e.selectionState.selectedYear}` }, [e.range ? H(e.$slots, "range", {
        key: 0,
        choose: e.selectionState.selectedRangeYears
      }, () => [Le(ve(e.yearTitle), 1)]) : e.multiple ? H(e.$slots, "multiple", {
        key: 1,
        choose: e.selectionState.selectedYears
      }, () => [Le(ve(e.yearTitle), 1)]) : H(e.$slots, "year", {
        key: 2,
        year: e.selectionState.selectedYear
      }, () => [Le(ve(e.yearTitle), 1)])])) : e.type === e.DatePickerTypes.Month ? (b(), k("div", { key: `${e.selectionState.selectedYear}${e.selectionState.selectedMonth}` }, [e.range ? H(e.$slots, "range", {
        key: 0,
        choose: e.selectionState.selectedRangeMonths
      }, () => [Le(ve(e.monthTitle), 1)]) : e.multiple ? H(e.$slots, "multiple", {
        key: 1,
        choose: e.selectionState.selectedMonths
      }, () => [Le(ve(e.monthTitle), 1)]) : H(e.$slots, "month", {
        key: 2,
        month: e.selectionState.selectedMonth,
        year: e.selectionState.selectedYear
      }, () => [Le(ve(e.monthTitle), 1)])])) : (b(), k("div", { key: `${e.selectionState.selectedYear}${e.selectionState.selectedMonth}${e.selectionState.selectedDay}` }, [e.range ? H(e.$slots, "range", {
        key: 0,
        choose: e.formattedRangeDays
      }, () => [Le(ve(e.dateTitle), 1)]) : e.multiple ? H(e.$slots, "multiple", {
        key: 1,
        choose: e.selectionState.selectedDays
      }, () => [Le(ve(e.dateTitle), 1)]) : H(e.$slots, "date", yt(Xe({ key: 2 }, e.dateSlotProps)), () => [Le(ve(e.dateTitle), 1)])]))]),
      _: 3
    }, 8, ["name"])], 2)], 6)) : q("v-if", !0),
    L("div", { class: g(e.n("body")) }, [e.panelType ? (b(), we(r, {
      key: 0,
      type: e.headerType,
      date: e.headerPreview,
      "show-panel-toggle": e.type === e.DatePickerTypes.Date && e.panelType !== e.DatePickerTypes.Date,
      onOpenDatePanel: n[1] || (n[1] = (i) => e.switchPanel(e.DatePickerTypes.Date)),
      onOpenYearPanel: n[2] || (n[2] = (i) => e.switchPanel(e.DatePickerTypes.Year)),
      onOpenMonthPanel: n[3] || (n[3] = (i) => e.switchPanel(e.DatePickerTypes.Month)),
      onShiftYearPreview: e.shiftDatePanelYearPreview,
      onShiftPreview: e.shiftCurrentPanelPreview
    }, null, 8, [
      "type",
      "date",
      "show-panel-toggle",
      "onShiftYearPreview",
      "onShiftPreview"
    ])) : q("v-if", !0), L("div", { class: g(e.n("panel")) }, [j(bn, { name: `${e.n()}-panel-fade` }, {
      default: ue(() => [e.panelType === e.DatePickerTypes.Year ? (b(), we(t, {
        key: 0,
        ref: "yearPanelEl",
        "panel-props": e.panelProps,
        selection: e.selectionState,
        preview: e.previewYear,
        onChooseYear: e.selectYearFromPanel
      }, null, 8, [
        "panel-props",
        "selection",
        "preview",
        "onChooseYear"
      ])) : e.panelType === e.DatePickerTypes.Month ? (b(), we(o, {
        key: 1,
        ref: "monthPanelEl",
        selection: e.selectionState,
        preview: e.previewState,
        "panel-props": e.panelProps,
        onChooseMonth: e.selectMonthFromPanel
      }, null, 8, [
        "selection",
        "preview",
        "panel-props",
        "onChooseMonth"
      ])) : e.panelType === e.DatePickerTypes.Date ? (b(), we(a, {
        key: 2,
        ref: "dayPanelEl",
        current: e.currentDate,
        selection: e.selectionState,
        preview: e.previewState,
        "panel-props": e.panelProps,
        onChooseDay: e.selectDayFromPanel
      }, null, 8, [
        "current",
        "selection",
        "preview",
        "panel-props",
        "onChooseDay"
      ])) : q("v-if", !0)]),
      _: 1
    }, 8, ["name"])], 2)], 2),
    e.$slots.actions ? (b(), k("div", {
      key: 1,
      class: g(e.n("actions"))
    }, [H(e.$slots, "actions")], 2)) : q("v-if", !0)
  ], 34);
}
var Hg = te({
  name: c3,
  components: {
    MonthPickerPanel: n3,
    YearPickerPanel: d3,
    DayPickerPanel: Z4,
    PanelHeader: o3
  },
  props: Lg,
  setup(e) {
    const { t: n } = kr(), r = yn().format(Mn.Day), [t, o] = r.split("-"), a = io.find((_) => _ === o), i = P(!1), l = P(!1), s = P(!0), u = C(() => e.range && !s.value), d = P(a), c = P(t), f = P(!1), v = P(null), p = P(null), h = P(null), m = $n({
      selectedMonth: void 0,
      selectedYear: void 0,
      selectedDay: void 0,
      selectedYears: [],
      selectedMonths: [],
      selectedDays: [],
      selectedRangeYears: [],
      selectedRangeMonths: [],
      selectedRangeDays: []
    }), y = C(() => ({
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
    })), $ = C(() => ({
      previewMonth: d.value,
      previewYear: c.value
    })), w = C(() => {
      if (e.type === Ve.Year || i.value) return Ve.Year;
      if (e.type === Ve.Month || l.value) return Ve.Month;
      if (e.type === Ve.Date) return Ve.Date;
    }), z = C(() => w.value === Ve.Date ? Qe.Day : w.value), T = C(() => w.value === Ve.Year ? { previewYear: c.value } : $.value), O = C(() => {
      var _;
      return (_ = e.hint) != null ? _ : Q();
    }), R = C(() => {
      var _;
      const { multiple: he, range: se } = e;
      return se ? m.selectedRangeYears.length ? m.selectedRangeYears.join(" ~ ") : "" : he ? `${m.selectedYears.length}${(n || gn)("datePickerSelected")}` : (_ = m.selectedYear) != null ? _ : "";
    }), U = C(() => {
      var _, he;
      const { multiple: se, range: ke } = e;
      if (ke) return m.selectedRangeMonths.length ? m.selectedRangeMonths.join(" ~ ") : "";
      let je = "";
      return m.selectedMonth && (je = (he = (_ = (n || gn)("datePickerMonthDict")) == null ? void 0 : _[m.selectedMonth].name) != null ? he : ""), se ? `${m.selectedMonths.length}${(n || gn)("datePickerSelected")}` : je;
    }), M = C(() => {
      var _, he, se, ke;
      const { multiple: je, range: cn } = e;
      if (cn) {
        const Tt = m.selectedRangeDays.map((Ml) => yn(Ml).format(Mn.DayPadded));
        return Tt.length ? Tt.join(" ~ ") : "";
      }
      if (je) return `${m.selectedDays.length}${(n || gn)("datePickerSelected")}`;
      if (!m.selectedYear || !m.selectedMonth || !m.selectedDay) return "";
      const Vn = yn(`${m.selectedYear}-${m.selectedMonth}-${m.selectedDay}`).day(), ar = lo.find((Tt) => Tt === `${Vn}`), Zr = (he = (_ = (n || gn)("datePickerWeekDict")) == null ? void 0 : _[ar].name) != null ? he : "", Bl = (ke = (se = (n || gn)("datePickerMonthDict")) == null ? void 0 : se[m.selectedMonth].name) != null ? ke : "", Dl = Gr(m.selectedDay, 2, "0");
      return (n || gn)("lang") === "zh-CN" ? `${m.selectedMonth}-${Dl} ${Zr.slice(0, 3)}` : `${Zr.slice(0, 3)}, ${Bl.slice(0, 3)} ${m.selectedDay}`;
    }), D = C(() => {
      var _, he;
      const se = yn(`${m.selectedYear}-${m.selectedMonth}-${m.selectedDay}`).day(), ke = m.selectedDay ? Gr(m.selectedDay, 2, "0") : "";
      return {
        week: `${se}`,
        year: (_ = m.selectedYear) != null ? _ : "",
        month: (he = m.selectedMonth) != null ? he : "",
        date: ke
      };
    }), E = C(() => m.selectedRangeDays.map((_) => yn(_).format(Mn.DayPadded))), B = C(() => m.selectedYear === c.value), N = C(() => m.selectedMonth === d.value);
    let A = !1;
    me(() => e.modelValue, () => {
      const _ = !A;
      A = !1, I(_);
    }, { immediate: !0 });
    function I(_ = !0) {
      if (!ye()) return;
      const { modelValue: he, type: se } = e;
      if (e.range) {
        if (!We(he)) return;
        s.value = he.length !== 1, $r(he, se, _);
        return;
      }
      if (e.multiple) {
        if (!We(he)) return;
        or(he, se, _);
        return;
      }
      Ir(he, _);
    }
    function F(_) {
      if (_ === Ve.Year) {
        i.value = !0, l.value = !1;
        return;
      }
      if (_ === Ve.Month) {
        i.value = !1, l.value = !0;
        return;
      }
      i.value = !1, l.value = !1;
    }
    function Q() {
      return e.type === Ve.Year ? (n || gn)("datePickerYearHint") : e.type === Ve.Month ? (n || gn)("datePickerMonthHint") : (n || gn)("datePickerHint");
    }
    function X() {
      return w.value === Ve.Year ? v : w.value === Ve.Month ? p : h;
    }
    function ae(_) {
      X().value.shiftPreview(_), w.value === Ve.Date ? re(Qe.Month, _) : w.value === Ve.Month && re(Qe.Year, _);
    }
    function Te(_) {
      h.value.shiftYearPreview(_), re(Qe.Year, _);
    }
    function ce(_) {
      return _ === Ve.Year ? Mn.Year : _ === Ve.Month ? Mn.Month : Mn.Day;
    }
    function G(_) {
      return _ === Ve.Year ? m.selectedRangeYears : _ === Ve.Month ? m.selectedRangeMonths : m.selectedRangeDays;
    }
    function ne(_, he) {
      if (_ === Ve.Year) {
        m.selectedRangeYears = he;
        return;
      }
      if (_ === Ve.Month) {
        m.selectedRangeMonths = he;
        return;
      }
      m.selectedRangeDays = he;
    }
    function pe(_) {
      return _ === Ve.Year ? m.selectedYears : _ === Ve.Month ? m.selectedMonths : m.selectedDays;
    }
    function Oe(_, he) {
      if (_ === Ve.Year) {
        m.selectedYears = he;
        return;
      }
      if (_ === Ve.Month) {
        m.selectedMonths = he;
        return;
      }
      m.selectedDays = he;
    }
    function Y(_) {
      S(e["onUpdate:modelValue"], _), S(e.onChange, _);
    }
    function ie() {
      return e.type === Ve.Date && m.selectedDay ? Z(m.selectedDay) : void 0;
    }
    function Ee() {
      S(e.onPreview, Z(c.value), Z(d.value), ie());
    }
    function Ue(_, he) {
      const se = G(he), ke = s.value ? [_, _] : [se[0], _];
      if (ne(he, ke), s.value = !s.value, !s.value) return;
      const je = yn(ke[0]).isAfter(ke[1]) ? [ke[1], ke[0]] : [...ke];
      Dn(), Y(je);
    }
    function nn(_, he) {
      const se = pe(he), ke = he === Ve.Year ? Mn.Year : he === Ve.Month ? Mn.Month : Mn.DayPadded, je = se.map((ar) => yn(ar).format(ke)), cn = je.findIndex((ar) => ar === _), Vn = cn !== -1;
      Vn && je.splice(cn, 1), Vn || je.push(_), Dn(), Y(je);
    }
    function qe(_, he) {
      if (e.range) {
        Ue(_, he);
        return;
      }
      if (e.multiple) {
        nn(_, he);
        return;
      }
      Dn(), Y(_);
    }
    function en(_, he, se = !0) {
      const { min: ke, max: je, allowedDates: cn } = e, Vn = je ? yn(_).isSameOrBefore(yn(je), he) : !0, ar = ke ? yn(_).isSameOrAfter(yn(ke), he) : !0, Zr = se && cn ? cn(_) : !0;
      return Vn && ar && Zr;
    }
    function on(_, he) {
      return !m.selectedYear || !m.selectedMonth ? !1 : B.value ? _ === Qe.Year ? he < Z(m.selectedYear) : _ === Qe.Month ? he < m.selectedMonth : N.value ? he < Z(m.selectedDay) : m.selectedMonth > d.value : m.selectedYear > c.value;
    }
    function be(_, he = 0) {
      const { readonly: se } = e;
      if (se) return;
      const ke = yn(`${c.value}-${d.value}-01`).add(he, Qe.Month), je = `${ke.format(Mn.Month)}-${_}`;
      en(je, Qe.Day) && (f.value = he !== 0 ? he < 0 : on(Qe.Day, _), he !== 0 && (c.value = ke.format(Mn.Year), d.value = ke.format(Mn.Month).split("-")[1], Ee()), qe(yn(je).format(Mn.DayPadded), Ve.Date));
    }
    function ee(_) {
      const { type: he, readonly: se } = e, ke = `${c.value}-${_}`;
      if (!(se || !en(ke, Qe.Month, he === Ve.Month))) {
        if (f.value = on(Qe.Month, _), he === Ve.Month) {
          qe(ke, Ve.Month), l.value = !1;
          return;
        }
        d.value = _, Ee(), l.value = !1;
      }
    }
    function K(_) {
      const { type: he, readonly: se } = e, ke = `${_}`;
      if (!(se || !en(ke, Qe.Year, he === Ve.Year))) {
        if (f.value = on(Qe.Year, _), he === Ve.Year) {
          qe(ke, Ve.Year), i.value = !1;
          return;
        }
        c.value = `${_}`, Ee(), i.value = !1;
      }
    }
    function re(_, he) {
      const se = he === Wr.Prev ? -1 : 1;
      if (_ === Qe.Year) {
        c.value = `${Z(c.value) + se}`, Ee();
        return;
      }
      let ke = Z(d.value) + se;
      ke < 1 && (c.value = `${Z(c.value) - 1}`, ke = 12), ke > 12 && (c.value = `${Z(c.value) + 1}`, ke = 1), d.value = io.find((je) => Z(je) === ke), Ee();
    }
    function ye() {
      return (e.multiple || e.range) && !We(e.modelValue) ? (At("DatePicker", 'type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && We(e.modelValue) ? (At("DatePicker", 'type of prop "modelValue" should be a String'), !1) : !0;
    }
    function Pe(_) {
      return We(_) ? !1 : _ === "Invalid Date" ? (At("DatePicker", '"modelValue" is an Invalid Date'), !0) : !1;
    }
    function Ge() {
      return e.fallbackViewDate && yn(e.fallbackViewDate).format(Mn.Day) !== "Invalid Date" ? e.fallbackViewDate : yn().format(Mn.Day);
    }
    function rn(_) {
      return _ && !Pe(yn(_).format(Mn.Day)) ? _ : Ge();
    }
    function mn(_, he) {
      const se = ce(he);
      return _.find((ke) => !Pe(yn(ke).format(se)));
    }
    function Dn() {
      A = e.type === Ve.Date || e.range || e.multiple;
    }
    function $r(_, he, se = !0) {
      var ke;
      const je = ce(he), cn = _.map((Vn) => yn(Vn).format(je)).filter((Vn) => !Pe(Vn)).slice(0, 2);
      ne(he, cn), cn.length === 2 && yn(cn[0]).isAfter(cn[1]) && ne(he, [cn[1], cn[0]]), se && Qn((ke = mn(_, he)) != null ? ke : Ge());
    }
    function or(_, he, se = !0) {
      var ke;
      const je = ce(he);
      Oe(he, Jl(_.map((cn) => yn(cn).format(je))).filter((cn) => cn !== "Invalid Date")), se && Qn((ke = mn(_, he)) != null ? ke : Ge());
    }
    function Ir(_, he = !0) {
      if (!_) {
        m.selectedMonth = void 0, m.selectedYear = void 0, m.selectedDay = void 0, he && Qn(Ge());
        return;
      }
      const se = yn(_).format(Mn.Day);
      if (Pe(se)) return;
      const [ke, je, cn] = se.split("-");
      m.selectedMonth = io.find((Vn) => Vn === je), m.selectedYear = ke, m.selectedDay = cn, he && Qn(se);
    }
    function Qn(_) {
      const he = yn(_ || Ge()).format(Mn.Day);
      if (Pe(he)) return;
      const [se, ke] = he.split("-");
      d.value = io.find((je) => je === ke), c.value = se;
    }
    function Re() {
      var _;
      if (i.value = !1, l.value = !1, !e.range && !e.multiple) {
        Qn(rn(e.modelValue));
        return;
      }
      Qn(We(e.modelValue) && (_ = mn(e.modelValue, e.type)) != null ? _ : Ge());
    }
    function sn() {
      i.value = !1, l.value = !1, A = !1, I(!0);
    }
    return {
      yearPanelEl: v,
      monthPanelEl: p,
      dayPanelEl: h,
      reverse: f,
      currentDate: r,
      previewYear: c,
      showYearPanel: i,
      showMonthPanel: l,
      monthTitle: U,
      dateTitle: M,
      yearTitle: R,
      titleHint: O,
      panelType: w,
      headerType: z,
      headerPreview: T,
      selectionState: m,
      previewState: $,
      panelProps: y,
      dateSlotProps: D,
      formattedRangeDays: E,
      n: f3,
      classes: v3,
      switchPanel: F,
      shiftCurrentPanelPreview: ae,
      shiftDatePanelYearPreview: Te,
      selectDayFromPanel: be,
      selectMonthFromPanel: ee,
      selectYearFromPanel: K,
      shiftPreview: re,
      resetPreview: Re,
      syncModelValue: sn,
      rangeSelecting: u,
      formatElevation: Pn,
      DatePickerTypes: Ve
    };
  }
});
Hg.render = p3;
var Mi = Hg;
de(Mi);
fe(Mi, Lg);
var iN = Mi, Ta = Mi, m3 = Object.defineProperty, Ef = Object.getOwnPropertySymbols, g3 = Object.prototype.hasOwnProperty, h3 = Object.prototype.propertyIsEnumerable, If = (e, n, r) => n in e ? m3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, b3 = (e, n) => {
  for (var r in n || (n = {})) g3.call(n, r) && If(e, r, n[r]);
  if (Ef)
    for (var r of Ef(n)) h3.call(n, r) && If(e, r, n[r]);
  return e;
}, Ug = b3({
  modelValue: [
    String,
    Number,
    Date,
    Array
  ],
  type: {
    type: String,
    default: "date"
  },
  format: String,
  valueFormat: { type: String },
  useSeconds: {
    type: Boolean,
    default: !0
  },
  multiple: Boolean,
  range: Boolean,
  separator: {
    type: String,
    default: ", "
  },
  rangeSeparator: {
    type: String,
    default: " ~ "
  },
  allowedDates: Function,
  allowedTimes: Function,
  min: String,
  max: String,
  firstDayOfWeek: {
    type: [String, Number],
    default: 0
  },
  readonly: Boolean,
  disabled: Boolean,
  clearable: Boolean,
  validateTrigger: {
    type: Array,
    default: () => [
      "onInput",
      "onClear",
      "onChange"
    ]
  },
  onFocus: V(),
  onBlur: V(),
  onChange: V(),
  onClear: V(),
  "onUpdate:modelValue": V()
}, Fe(Wa, [
  "size",
  "variant",
  "placeholder",
  "line",
  "hint",
  "textColor",
  "focusColor",
  "blurColor",
  "rules",
  "tabindex"
])), { name: y3, n: Bf, classes: w3 } = oe("date-input-time-select"), k3 = ["aria-disabled", "onClick"];
function $3(e, n) {
  const r = x("var-menu-select");
  return b(), k("div", {
    ref: "root",
    class: g(e.n())
  }, [(b(!0), k(Be, null, Ye(e.segments, (t, o) => (b(), k(Be, { key: t.key }, [o > 0 ? (b(), k("span", {
    key: 0,
    class: g(e.n("separator"))
  }, ":", 2)) : q("v-if", !0), j(r, {
    show: e.openKey === t.key,
    "model-value": t.value,
    options: t.options,
    trigger: "manual",
    placement: "bottom",
    "offset-y": 4,
    scrollable: "",
    "close-on-select": !1,
    "popover-class": e.n("popover"),
    disabled: e.disabled || e.readonly,
    "onUpdate:show": (a) => e.handleUpdateShow(t.key, a),
    "onUpdate:modelValue": (a) => e.selectOption(t.key, a)
  }, {
    default: ue(() => [L("button", {
      type: "button",
      class: g(e.classes(e.n("box"), [e.openKey === t.key, e.n("box--active")], [e.disabled || e.readonly, e.n("box--disabled")])),
      "aria-disabled": e.disabled || e.readonly,
      onMousedown: n[0] || (n[0] = Rn(() => {
      }, ["prevent"])),
      onClick: (a) => e.toggle(t.key)
    }, ve(t.label), 43, k3)]),
    _: 2
  }, 1032, [
    "show",
    "model-value",
    "options",
    "popover-class",
    "disabled",
    "onUpdate:show",
    "onUpdate:modelValue"
  ])], 64))), 128))], 2);
}
var jg = te({
  name: y3,
  components: { VarMenuSelect: Yt },
  props: {
    hour: {
      type: Number,
      default: 0
    },
    minute: {
      type: Number,
      default: 0
    },
    second: {
      type: Number,
      default: 0
    },
    useSeconds: {
      type: Boolean,
      default: !0
    },
    readonly: Boolean,
    disabled: Boolean,
    isHourAllowed: Function,
    isMinuteAllowed: Function,
    isSecondAllowed: Function
  },
  emits: ["change"],
  setup(e, { emit: n }) {
    const r = P(null), t = P(null), o = C(() => {
      const f = [a("hour", e.hour, 24, e.isHourAllowed), a("minute", e.minute, 60, e.isMinuteAllowed)];
      return e.useSeconds && f.push(a("second", e.second, 60, e.isSecondAllowed)), f;
    });
    Tr(() => {
      document.addEventListener("mousedown", d, !0), document.addEventListener("pointerdown", c, !0);
    }), Pt(() => {
      document.removeEventListener("mousedown", d, !0), document.removeEventListener("pointerdown", c, !0);
    });
    function a(f, v, p, h) {
      return {
        key: f,
        value: v,
        label: Gr(`${v}`, 2, "0"),
        options: so(p, (m) => ({
          label: Gr(`${m}`, 2, "0"),
          value: m,
          disabled: h ? !h(m) : !1
        }))
      };
    }
    function i(f) {
      e.disabled || e.readonly || (t.value = t.value === f ? null : f);
    }
    function l(f, v) {
      !v && t.value === f && (t.value = null);
    }
    function s(f, v) {
      const p = {
        hour: e.hour,
        minute: e.minute,
        second: e.second
      };
      p[f] = v, t.value = null, n("change", p, f);
    }
    function u(f) {
      return f ? Array.from(document.querySelectorAll(`.${Bf("popover")}`)).some((v) => v.contains(f)) : !1;
    }
    function d(f) {
      t.value != null && u(f.target) && f.preventDefault();
    }
    function c(f) {
      var v;
      if (t.value == null) return;
      const p = f.target;
      p && ((v = r.value) != null && v.contains(p)) || u(p) || (t.value = null);
    }
    return {
      n: Bf,
      classes: w3,
      root: r,
      openKey: t,
      segments: o,
      toggle: i,
      handleUpdateShow: l,
      selectOption: s
    };
  }
});
jg.render = $3;
var C3 = jg, Ar = {
  Year: "YYYY",
  Month: "YYYY-MM",
  Date: "YYYY-MM-DD",
  Datetime: "YYYY-MM-DD HH:mm:ss",
  DatetimeMinute: "YYYY-MM-DD HH:mm"
}, Nr = Uo(), { name: S3, n: ea, classes: P3 } = oe("date-input");
function O3(e, n) {
  const r = x("var-icon"), t = x("var-input"), o = x("time-select"), a = x("var-date-picker"), i = x("var-menu"), l = x("var-form-details");
  return b(), k("div", { class: g(e.classes(e.n(), e.n("$--box"))) }, [j(i, {
    show: e.showMenu,
    "onUpdate:show": n[5] || (n[5] = (s) => e.showMenu = s),
    "var-date-input-cover": "",
    trigger: "manual",
    placement: "bottom-start",
    disabled: e.disabled || e.readonly || e.formDisabled || e.formReadonly,
    "popover-class": e.menuPopoverClass
  }, {
    menu: ue(() => [L("div", { onPointerdown: n[4] || (n[4] = Rn(() => {
    }, ["prevent"])) }, [j(a, {
      ref: "picker",
      class: g(e.n("picker")),
      "model-value": e.pickerValue,
      type: e.pickerType,
      multiple: e.isMultiple,
      range: e.range,
      "allowed-dates": e.allowedDates,
      min: e.pickerMin,
      max: e.pickerMax,
      "first-day-of-week": e.firstDayOfWeek,
      "show-title": !1,
      elevation: !1,
      onChange: e.handlePickerChange
    }, Pr({ _: 2 }, [e.isDatetime ? {
      name: "actions",
      fn: ue(() => [L("div", { class: g(e.n("datetime")) }, [e.range ? (b(), k("div", {
        key: 0,
        class: g(e.classes(e.n("datetime-row"), e.n("datetime-row--range")))
      }, [
        j(o, {
          hour: e.rangeTimes[0].hour,
          minute: e.rangeTimes[0].minute,
          second: e.rangeTimes[0].second,
          "use-seconds": e.useSeconds,
          readonly: e.readonly || e.formReadonly,
          disabled: e.disabled || e.formDisabled || e.isRangeTimeSelectDisabled,
          "is-hour-allowed": e.startAllowFns.isHourAllowed,
          "is-minute-allowed": e.startAllowFns.isMinuteAllowed,
          "is-second-allowed": e.startAllowFns.isSecondAllowed,
          onChange: n[2] || (n[2] = (s, u) => e.handleRangeTimeChange(0, s, u))
        }, null, 8, [
          "hour",
          "minute",
          "second",
          "use-seconds",
          "readonly",
          "disabled",
          "is-hour-allowed",
          "is-minute-allowed",
          "is-second-allowed"
        ]),
        j(r, {
          class: g(e.n("datetime-arrow")),
          name: "arrow-right"
        }, null, 8, ["class"]),
        j(o, {
          hour: e.rangeTimes[1].hour,
          minute: e.rangeTimes[1].minute,
          second: e.rangeTimes[1].second,
          "use-seconds": e.useSeconds,
          readonly: e.readonly || e.formReadonly,
          disabled: e.disabled || e.formDisabled || e.isRangeTimeSelectDisabled,
          "is-hour-allowed": e.endAllowFns.isHourAllowed,
          "is-minute-allowed": e.endAllowFns.isMinuteAllowed,
          "is-second-allowed": e.endAllowFns.isSecondAllowed,
          onChange: n[3] || (n[3] = (s, u) => e.handleRangeTimeChange(1, s, u))
        }, null, 8, [
          "hour",
          "minute",
          "second",
          "use-seconds",
          "readonly",
          "disabled",
          "is-hour-allowed",
          "is-minute-allowed",
          "is-second-allowed"
        ])
      ], 2)) : (b(), k("div", {
        key: 1,
        class: g(e.n("datetime-row"))
      }, [j(o, {
        hour: e.singleTime.hour,
        minute: e.singleTime.minute,
        second: e.singleTime.second,
        "use-seconds": e.useSeconds,
        readonly: e.readonly || e.formReadonly,
        disabled: e.disabled || e.formDisabled,
        "is-hour-allowed": e.singleAllowFns.isHourAllowed,
        "is-minute-allowed": e.singleAllowFns.isMinuteAllowed,
        "is-second-allowed": e.singleAllowFns.isSecondAllowed,
        onChange: e.handleTimeChange
      }, null, 8, [
        "hour",
        "minute",
        "second",
        "use-seconds",
        "readonly",
        "disabled",
        "is-hour-allowed",
        "is-minute-allowed",
        "is-second-allowed",
        "onChange"
      ])], 2))], 2)]),
      key: "0"
    } : void 0]), 1032, [
      "class",
      "model-value",
      "type",
      "multiple",
      "range",
      "allowed-dates",
      "min",
      "max",
      "first-day-of-week",
      "onChange"
    ])], 32)]),
    default: ue(() => [j(t, {
      ref: "inputEl",
      "model-value": e.displayValue,
      size: e.size,
      variant: e.variant,
      placeholder: e.placeholder,
      line: e.line,
      hint: e.hint,
      "text-color": e.textColor,
      "focus-color": e.focusColor,
      "blur-color": e.blurColor,
      tabindex: e.tabindex,
      disabled: e.disabled || e.formDisabled,
      readonly: e.readonly || e.formReadonly,
      clearable: e.clearable,
      "is-force-focusing-effect": e.isFocusing,
      "is-force-error-effect": !!e.errorMessage,
      "is-show-form-details": !1,
      onFocus: e.handleFocus,
      onBlur: e.handleBlur,
      onClick: e.handleClick,
      onKeydown: e.handleKeydown,
      onClear: e.handleClear,
      onChange: e.handleChange,
      "onUpdate:modelValue": e.handleInput
    }, Pr({
      "clear-icon": ue(({ clear: s }) => [L("span", {
        class: g(e.n("clear-icon-container")),
        onMousedown: n[0] || (n[0] = Rn(() => {
        }, ["stop"])),
        onClick: n[1] || (n[1] = Rn(() => {
        }, ["stop"]))
      }, [H(e.$slots, "clear-icon", { clear: s }, () => [j(r, {
        class: g(e.n("clear-icon")),
        name: "close-circle",
        onClick: s
      }, null, 8, ["class", "onClick"])])], 34)]),
      "append-icon": ue(() => [H(e.$slots, "append-icon", {}, () => [L("span", { class: g(e.n("calendar-icon-container")) }, [j(r, {
        class: g(e.n("calendar-icon")),
        name: "calendar-month-outline"
      }, null, 8, ["class"])], 2)])]),
      _: 2
    }, [e.$slots["prepend-icon"] ? {
      name: "prepend-icon",
      fn: ue(() => [H(e.$slots, "prepend-icon")]),
      key: "0"
    } : void 0, e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: ue(() => [H(e.$slots, "extra-message")]),
      key: "1"
    } : void 0]), 1032, [
      "model-value",
      "size",
      "variant",
      "placeholder",
      "line",
      "hint",
      "text-color",
      "focus-color",
      "blur-color",
      "tabindex",
      "disabled",
      "readonly",
      "clearable",
      "is-force-focusing-effect",
      "is-force-error-effect",
      "onFocus",
      "onBlur",
      "onClick",
      "onKeydown",
      "onClear",
      "onChange",
      "onUpdate:modelValue"
    ])]),
    _: 3
  }, 8, [
    "show",
    "disabled",
    "popover-class"
  ]), j(l, { "error-message": e.errorMessage }, Pr({ _: 2 }, [e.$slots["extra-message"] ? {
    name: "extra-message",
    fn: ue(() => [H(e.$slots, "extra-message")]),
    key: "0"
  } : void 0]), 1032, ["error-message"])], 2);
}
var Yg = te({
  name: S3,
  components: {
    VarIcon: Je,
    VarInput: Lt,
    VarMenu: jt,
    VarFormDetails: Hn,
    VarDatePicker: Ta,
    TimeSelect: C3
  },
  props: Ug,
  setup(e) {
    const n = P(null), r = P(null), t = P(""), o = P(), a = P(!1), i = P(!1), { bindForm: l, form: s } = Kn(), { errorMessage: u, validateWithTrigger: d, validate: c, resetValidation: f } = Jn(), v = C(() => {
      var W;
      return (W = s?.disabled.value) != null ? W : !1;
    }), p = C(() => {
      var W;
      return (W = s?.readonly.value) != null ? W : !1;
    }), h = C(() => e.disabled || v.value), m = C(() => e.readonly || p.value), y = C(() => e.type === "datetime"), $ = C(() => e.multiple && !y.value), w = C(() => $.value || e.range), z = C(() => y.value ? "date" : e.type), T = C(() => ae(e.min)), O = C(() => ae(e.max)), R = C(() => {
      var W;
      return !!((W = r.value) != null && W.rangeSelecting);
    }), U = C(() => y.value && e.range && (R.value || Pe().length < 2)), M = C(() => e.min ? Nr(e.min) : void 0), D = C(() => e.max ? Nr(e.max) : void 0), E = C(() => Te(Pe()[0])), B = C(() => {
      const W = Pe();
      return [Te(W[0]), Te(W[1])];
    }), N = C(() => {
      const W = e.variant === "standard" ? ea("--standard-menu-margin") : e.variant === "filled" ? ea("--filled-menu-margin") : "";
      return [ea("--menu"), W].filter(It).join(" ");
    }), A = C(() => {
      const W = e.range ? e.rangeSeparator : e.separator;
      return t.value.split(W).map((ge) => ge.trim()).filter(It);
    }), I = {
      reset: hd,
      validate: gd,
      resetValidation: f
    };
    me(() => [
      e.modelValue,
      e.format,
      e.valueFormat,
      e.type,
      e.useSeconds,
      e.multiple,
      e.range,
      e.separator,
      e.rangeSeparator
    ], () => rn(), { immediate: !0 }), S(l, I);
    function F(W = e.type) {
      return W === "year" ? Ar.Year : W === "month" ? Ar.Month : W === "datetime" ? e.useSeconds ? Ar.Datetime : Ar.DatetimeMinute : Ar.Date;
    }
    function Q() {
      return y.value ? Ar.Date : F();
    }
    function X() {
      return e.format || F();
    }
    function ae(W) {
      return !W || !y.value ? W : Nr(W).format(Ar.Date);
    }
    function Te(W) {
      var ge, Ae, Ie;
      return {
        hour: (ge = W?.hour()) != null ? ge : 0,
        minute: (Ae = W?.minute()) != null ? Ae : 0,
        second: (Ie = W?.second()) != null ? Ie : 0
      };
    }
    function ce(W) {
      const ge = M.value, Ae = D.value;
      return ge && W.isBefore(ge) ? ge : Ae && W.isAfter(Ae) ? Ae : W;
    }
    function G(W, ge, Ae) {
      function Ie() {
        var an, Ln;
        const Br = ((an = W()) != null ? an : Nr()).format(Ar.Date);
        return (Ln = e.allowedTimes) == null ? void 0 : Ln.call(e, Br, Ae);
      }
      function tn(an, Ln) {
        var Br;
        const Jr = ge(), Et = ((Br = W()) != null ? Br : Nr()).hour(an === "hour" ? Ln : Jr.hour).minute(an === "minute" ? Ln : Jr.minute).second(an === "second" ? Ln : Jr.second), qo = M.value, eo = D.value;
        if (qo && Et.endOf(an).isBefore(qo) || eo && Et.startOf(an).isAfter(eo)) return !1;
        const Cr = Ie();
        return an === "hour" ? Cr?.hours ? Cr.hours(Ln) : !0 : an === "minute" ? Cr?.minutes ? Cr.minutes(Ln, Jr.hour) : !0 : Cr?.seconds ? Cr.seconds(Ln, Jr.minute, Jr.hour) : !0;
      }
      return {
        isHourAllowed: (an) => tn("hour", an),
        isMinuteAllowed: (an) => tn("minute", an),
        isSecondAllowed: (an) => tn("second", an)
      };
    }
    const ne = G(() => Pe()[0], () => E.value), pe = G(() => Pe()[0], () => B.value[0], "start"), Oe = G(() => Pe()[1], () => B.value[1], "end");
    function Y(W, ge) {
      return ce(W.hour(ge.hour).minute(ge.minute).second(ge.second).millisecond(0));
    }
    function ie(W, ge, Ae) {
      return Ae ? [W] : [W, ...Array.from({ length: ge }, (Ie, tn) => tn).filter((Ie) => Ie !== W)];
    }
    function Ee(W, ge) {
      const Ae = M.value, Ie = D.value, tn = W.hour(), an = W.minute(), Ln = W.second();
      return (!Ae || !W.isBefore(Ae)) && (!Ie || !W.isAfter(Ie)) && (!ge.hours || ge.hours(tn)) && (!ge.minutes || ge.minutes(an, tn)) && (!e.useSeconds || !ge.seconds || ge.seconds(Ln, an, tn)) && (!e.allowedDates || e.allowedDates(W.format(Q())));
    }
    function Ue(W, ge, Ae, Ie) {
      var tn, an;
      const Ln = W.format(Ar.Date), Br = (an = (tn = e.allowedTimes) == null ? void 0 : tn.call(e, Ln, Ae)) != null ? an : {}, Jr = ie(ge.hour, 24, Ie === "hour" || Ie === "minute" || Ie === "second");
      for (const Et of Jr) {
        if (Br.hours && !Br.hours(Et)) continue;
        const qo = ie(ge.minute, 60, Ie === "minute" || Ie === "second");
        for (const eo of qo) {
          if (Br.minutes && !Br.minutes(eo, Et)) continue;
          const Cr = e.useSeconds ? ie(ge.second, 60, Ie === "second") : [0];
          for (const f0 of Cr) {
            const bd = W.hour(Et).minute(eo).second(f0).millisecond(0);
            if (Ee(bd, Br)) return bd;
          }
        }
      }
    }
    function nn(W) {
      return e.range ? [...W].sort((ge, Ae) => ge.valueOf() - Ae.valueOf()) : W;
    }
    function qe(W) {
      const ge = nn(W);
      if (e.range)
        return !K(ge[0], "start") || !K(ge[1], "end") ? !1 : (o.value = ge.map((Ie) => Ie.format(Q())), t.value = ge.map((Ie) => Ie.format(X())).join(e.rangeSeparator), mn(ge.map(ye)), !0);
      const [Ae] = ge;
      return K(Ae) ? (o.value = Ae.format(Q()), t.value = Ae.format(X()), mn(ye(Ae)), !0) : !1;
    }
    function en(W, ge) {
      if (h.value || m.value) return;
      const [Ae] = Pe(), Ie = Ae ?? Nr(), tn = ge ? Ue(Ie, W, void 0, ge) : Y(Ie, W);
      tn && qe([tn]);
    }
    function on(W, ge, Ae) {
      if (h.value || m.value) return;
      const Ie = Pe();
      if (Ie.length < 2) return;
      const tn = [...Ie], an = W === 0 ? "start" : "end", Ln = Ae ? Ue(Ie[W], ge, an, Ae) : Y(Ie[W], ge);
      Ln && (tn[W] = Ln, qe(tn));
    }
    function be(W, ge) {
      const Ae = Nr(W, ge, !0);
      return Ae.isValid() ? Ae : void 0;
    }
    function ee(W, ge) {
      var Ae;
      if (!y.value || !e.allowedTimes) return !0;
      const Ie = (Ae = e.allowedTimes(W.format(Ar.Date), ge)) != null ? Ae : {}, tn = W.hour(), an = W.minute(), Ln = W.second();
      return (!Ie.hours || Ie.hours(tn)) && (!Ie.minutes || Ie.minutes(an, tn)) && (!e.useSeconds || !Ie.seconds || Ie.seconds(Ln, an, tn));
    }
    function K(W, ge) {
      const Ae = M.value, Ie = D.value, tn = e.type === "year" ? "year" : e.type === "month" ? "month" : e.type === "date" ? "day" : void 0;
      return !(Ae && (tn ? W.isBefore(Ae, tn) : W.isBefore(Ae)) || Ie && (tn ? W.isAfter(Ie, tn) : W.isAfter(Ie)) || e.allowedDates && !e.allowedDates(W.format(Q())) || !ee(W, ge));
    }
    function re(W) {
      var ge;
      if (!(W == null || W === "")) {
        if (Gl(W) || nr(W)) {
          const Ae = Nr(W);
          return Ae.isValid() ? Ae : void 0;
        }
        return be(W, (ge = e.valueFormat) != null ? ge : X());
      }
    }
    function ye(W) {
      return e.valueFormat === "timestamp" ? W.valueOf() : e.valueFormat === "date" ? W.toDate() : e.valueFormat ? W.format(e.valueFormat) : W.format(X());
    }
    function Pe() {
      if (w.value) return (We(e.modelValue) ? e.modelValue : []).map(re).filter(It);
      const W = We(e.modelValue) ? void 0 : re(e.modelValue);
      return W ? [W] : [];
    }
    function Ge(W) {
      t.value = W.map((ge) => ge.format(X())).join(e.range ? e.rangeSeparator : e.separator);
    }
    function rn() {
      const W = Pe();
      if (w.value) o.value = W.map((ge) => ge.format(Q()));
      else {
        const [ge] = W;
        o.value = ge ? ge.format(Q()) : void 0;
      }
      i.value || Ge(W);
    }
    function mn(W) {
      Td(W, e.modelValue) || (S(e["onUpdate:modelValue"], W), S(e.onChange, W), Dn("onChange"));
    }
    function Dn(W) {
      Ne(() => {
        const { validateTrigger: ge, rules: Ae, modelValue: Ie } = e;
        d(ge, W, Ae, Ie);
      });
    }
    function $r(W) {
      i.value = !0, S(e.onFocus, W), Dn("onFocus");
    }
    function or(W) {
      i.value = !1, a.value = !1, S(e.onBlur, W), Dn("onBlur");
    }
    function Ir() {
      h.value || m.value || (a.value = !0, Ne(() => {
        var W;
        return (W = r.value) == null ? void 0 : W.syncModelValue();
      }), Dn("onClick"));
    }
    function Qn(W) {
      h.value || m.value || W.key !== "Enter" || (Ze(W), a.value = !0, Ne(() => {
        var ge;
        return (ge = r.value) == null ? void 0 : ge.syncModelValue();
      }));
    }
    function Re(W) {
      const ge = be(W, X());
      !ge || !K(ge) || (o.value = ge.format(Q()), mn(ye(ge)));
    }
    function sn() {
      if (e.range ? A.value.length !== 2 : !A.value.length) return;
      const W = A.value.map((Ie) => be(Ie, X()));
      if (W.some((Ie) => !Ie)) return;
      const ge = W.filter(It);
      if (e.range && ge[0].isAfter(ge[1]) || ge.some((Ie, tn) => !K(Ie, e.range ? tn === 0 ? "start" : "end" : void 0))) return;
      const Ae = ge.map(ye);
      o.value = ge.map((Ie) => Ie.format(Q())), mn(Ae);
    }
    function _(W) {
      if (!(h.value || m.value) && W !== t.value) {
        if (t.value = W, W === "") {
          Zr(), mn(ar()), Dn("onInput");
          return;
        }
        w.value ? sn() : Re(W), Dn("onInput");
      }
    }
    function he() {
      h.value || m.value || Ge(Pe());
    }
    function se(W) {
      if (W.length < 2) return;
      const ge = B.value, Ae = W.map((Ie, tn) => {
        var an;
        return Ue(Ie, (an = ge[tn]) != null ? an : Te(), tn === 0 ? "start" : "end");
      });
      Ae.every(It) && qe(Ae.filter(It)) || rn();
    }
    function ke(W) {
      const ge = W.map((Ie) => Nr(Ie, Q(), !0)).filter((Ie) => Ie.isValid());
      if (y.value && e.range) {
        se(ge);
        return;
      }
      const Ae = ge.map(ye);
      t.value = ge.map((Ie) => Ie.format(X())).join(e.range ? e.rangeSeparator : e.separator), mn(Ae);
    }
    function je(W) {
      const ge = Ue(W, E.value);
      ge && qe([ge]) || rn();
    }
    function cn(W) {
      const ge = Nr(W, Q(), !0);
      if (ge.isValid()) {
        if (y.value) {
          je(ge);
          return;
        }
        t.value = ge.format(X()), mn(ye(ge)), w.value || (a.value = !1);
      }
    }
    function Vn(W) {
      if (!(h.value || m.value)) {
        if (o.value = W, We(W)) {
          ke(W);
          return;
        }
        cn(W);
      }
    }
    function ar() {
      return w.value ? [] : void 0;
    }
    function Zr() {
      t.value = "", o.value = w.value ? [] : void 0;
    }
    function Bl() {
      if (h.value || m.value || !e.clearable) return;
      Zr(), a.value = !1;
      const W = ar();
      S(e["onUpdate:modelValue"], W), S(e.onClear, ""), S(e.onChange, W), Dn("onChange"), Dn("onClear");
    }
    function Dl() {
      var W;
      (W = n.value) == null || W.focus();
    }
    function Tt() {
      var W;
      (W = n.value) == null || W.blur();
    }
    function Ml() {
      var W;
      (W = n.value) == null || W.select();
    }
    function gd() {
      return c(e.rules, e.modelValue);
    }
    function hd() {
      const W = ar();
      Zr(), a.value = !1, !Td(e.modelValue, W) && S(e["onUpdate:modelValue"], W), f();
    }
    return {
      inputEl: n,
      picker: r,
      displayValue: t,
      pickerValue: o,
      showMenu: a,
      isFocusing: i,
      rangeSelecting: R,
      isRangeTimeSelectDisabled: U,
      formDisabled: v,
      formReadonly: p,
      errorMessage: u,
      menuPopoverClass: N,
      isDatetime: y,
      isMultiple: $,
      pickerType: z,
      pickerMin: T,
      pickerMax: O,
      singleTime: E,
      rangeTimes: B,
      singleAllowFns: ne,
      startAllowFns: pe,
      endAllowFns: Oe,
      n: ea,
      classes: P3,
      handleTimeChange: en,
      handleRangeTimeChange: on,
      handleFocus: $r,
      handleBlur: or,
      handleClick: Ir,
      handleKeydown: Qn,
      handleInput: _,
      handleChange: he,
      handlePickerChange: Vn,
      handleClear: Bl,
      focus: Dl,
      blur: Tt,
      select: Ml,
      validate: gd,
      resetValidation: f,
      reset: hd
    };
  }
});
Yg.render = O3;
var Ai = Yg;
de(Ai);
fe(Ai, Ug);
var lN = Ai, Vs = Ai, z3 = Object.defineProperty, Df = Object.getOwnPropertySymbols, T3 = Object.prototype.hasOwnProperty, E3 = Object.prototype.propertyIsEnumerable, Mf = (e, n, r) => n in e ? z3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, I3 = (e, n) => {
  for (var r in n || (n = {})) T3.call(n, r) && Mf(e, r, n[r]);
  if (Df)
    for (var r of Df(n)) E3.call(n, r) && Mf(e, r, n[r]);
  return e;
}, Kg = I3({
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
  confirmButtonProps: Object,
  cancelButtonProps: Object,
  confirmButtonLoading: Boolean,
  cancelButtonLoading: Boolean,
  confirmButtonDisabled: Boolean,
  cancelButtonDisabled: Boolean,
  dialogClass: String,
  dialogStyle: Object,
  onBeforeClose: V(),
  onConfirm: V(),
  onCancel: V(),
  "onUpdate:show": V()
}, Fe(Qt, [
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
  "onRouteChange"
])), B3 = Object.defineProperty, D3 = Object.defineProperties, M3 = Object.getOwnPropertyDescriptors, Af = Object.getOwnPropertySymbols, A3 = Object.prototype.hasOwnProperty, N3 = Object.prototype.propertyIsEnumerable, Nf = (e, n, r) => n in e ? B3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ls = (e, n) => {
  for (var r in n || (n = {})) A3.call(n, r) && Nf(e, r, n[r]);
  if (Af)
    for (var r of Af(n)) N3.call(n, r) && Nf(e, r, n[r]);
  return e;
}, Rf = (e, n) => D3(e, M3(n)), { name: R3, n: V3, classes: L3 } = oe("dialog");
function F3(e, n) {
  const r = x("var-button"), t = x("var-popup");
  return b(), we(t, {
    class: g(e.n("popup")),
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
    default: ue(() => [L("div", Xe({
      class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
      style: Ls({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
    }, e.$attrs), [
      L("div", { class: g(e.n("title")) }, [H(e.$slots, "title", {}, () => {
        var o;
        return [Le(ve((o = e.title) != null ? o : (e.pt ? e.pt : e.t)("dialogTitle")), 1)];
      })], 2),
      L("div", {
        class: g(e.n("message")),
        style: J({ textAlign: e.messageAlign })
      }, [H(e.$slots, "default", {}, () => [Le(ve(e.message), 1)])], 6),
      H(e.$slots, "actions", {
        slotClass: e.n("actions"),
        cancel: e.cancel,
        confirm: e.confirm
      }, () => [L("div", { class: g(e.n("actions")) }, [e.cancelButton ? (b(), we(r, Xe({ key: 0 }, e.cancelButtonNormalizedProps, {
        class: e.classes(e.n("button"), e.n("cancel-button"), [e.cancelButtonProps != null, e.n("--with-button-props")]),
        "var-dialog-cover": "",
        onClick: e.cancel
      }), {
        default: ue(() => {
          var o;
          return [Le(ve((o = e.cancelButtonText) != null ? o : (e.pt ? e.pt : e.t)("dialogCancelButtonText")), 1)];
        }),
        _: 1
      }, 16, ["class", "onClick"])) : q("v-if", !0), e.confirmButton ? (b(), we(r, Xe({ key: 1 }, e.confirmButtonNormalizedProps, {
        class: e.classes(e.n("button"), e.n("confirm-button"), [e.confirmButtonProps != null, e.n("--with-button-props")]),
        "var-dialog-cover": "",
        onClick: e.confirm
      }), {
        default: ue(() => {
          var o;
          return [Le(ve((o = e.confirmButtonText) != null ? o : (e.pt ? e.pt : e.t)("dialogConfirmButtonText")), 1)];
        }),
        _: 1
      }, 16, ["class", "onClick"])) : q("v-if", !0)], 2)])
    ], 16)]),
    _: 3
  }, 8, [
    "class",
    "show",
    "overlay",
    "overlay-class",
    "overlay-style",
    "lock-scroll",
    "close-on-click-overlay",
    "teleport",
    "onOpen",
    "onClose",
    "onClosed",
    "onOpened",
    "onKeyEscape",
    "onRouteChange",
    "onClickOverlay"
  ]);
}
var Wg = te({
  name: R3,
  components: {
    VarPopup: ut,
    VarButton: tr
  },
  inheritAttrs: !1,
  props: Kg,
  setup(e) {
    const { t: n } = kr(), r = P(!1), t = P(!1), o = wn(e, "confirmButtonLoading"), a = wn(e, "cancelButtonLoading"), i = wn(e, "confirmButtonDisabled"), l = wn(e, "cancelButtonDisabled"), s = C(() => {
      var m, y, $, w, z, T;
      return Rf(Ls({ text: !0 }, e.confirmButtonProps), {
        textColor: (y = e.confirmButtonTextColor) != null ? y : (m = e.confirmButtonProps) == null ? void 0 : m.textColor,
        color: (w = e.confirmButtonColor) != null ? w : ($ = e.confirmButtonProps) == null ? void 0 : $.color,
        loading: o.value || ((z = e.confirmButtonProps) == null ? void 0 : z.loading),
        disabled: i.value || ((T = e.confirmButtonProps) == null ? void 0 : T.disabled)
      });
    }), u = C(() => {
      var m, y, $, w, z, T;
      return Rf(Ls({ text: !0 }, e.cancelButtonProps), {
        textColor: (y = e.cancelButtonTextColor) != null ? y : (m = e.cancelButtonProps) == null ? void 0 : m.textColor,
        color: (w = e.cancelButtonColor) != null ? w : ($ = e.cancelButtonProps) == null ? void 0 : $.color,
        loading: a.value || ((z = e.cancelButtonProps) == null ? void 0 : z.loading),
        disabled: l.value || ((T = e.cancelButtonProps) == null ? void 0 : T.disabled)
      });
    }), d = {
      confirmButtonLoading: o,
      cancelButtonLoading: a,
      confirmButtonDisabled: i,
      cancelButtonDisabled: l
    };
    me(() => e.show, (m) => {
      r.value = m;
    }, { immediate: !0 }), me(() => e.closeOnClickOverlay, (m) => {
      if (e.onBeforeClose != null) {
        t.value = !1;
        return;
      }
      t.value = m;
    }, { immediate: !0 });
    function c() {
      return S(e["onUpdate:show"], !1);
    }
    function f() {
      const { closeOnClickOverlay: m, onClickOverlay: y, onBeforeClose: $ } = e;
      if (S(y), !!m) {
        if ($ != null) {
          S($, "close", c, d);
          return;
        }
        S(e["onUpdate:show"], !1);
      }
    }
    function v() {
      const { onBeforeClose: m, onConfirm: y } = e;
      if (S(y), m != null) {
        S(m, "confirm", c, d);
        return;
      }
      S(e["onUpdate:show"], !1);
    }
    function p() {
      const { onBeforeClose: m, onCancel: y } = e;
      if (S(y), m != null) {
        S(m, "cancel", c, d);
        return;
      }
      S(e["onUpdate:show"], !1);
    }
    function h() {
      S(e.onKeyEscape), e.closeOnKeyEscape && p();
    }
    return {
      popupShow: r,
      popupCloseOnClickOverlay: t,
      confirmButtonLoading: o,
      cancelButtonLoading: a,
      confirmButtonDisabled: i,
      cancelButtonDisabled: l,
      confirmButtonNormalizedProps: s,
      cancelButtonNormalizedProps: u,
      pt: n,
      t: gn,
      n: V3,
      classes: L3,
      handleClickOverlay: f,
      confirm: v,
      cancel: p,
      toSizeUnit: ze,
      handleKeyEscape: h
    };
  }
});
Wg.render = F3;
var Yo = Wg, H3 = Object.defineProperty, U3 = Object.defineProperties, j3 = Object.getOwnPropertyDescriptors, Vf = Object.getOwnPropertySymbols, Y3 = Object.prototype.hasOwnProperty, K3 = Object.prototype.propertyIsEnumerable, Lf = (e, n, r) => n in e ? H3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, jl = (e, n) => {
  for (var r in n || (n = {})) Y3.call(n, r) && Lf(e, r, n[r]);
  if (Vf)
    for (var r of Vf(n)) K3.call(n, r) && Lf(e, r, n[r]);
  return e;
}, W3 = (e, n) => U3(e, j3(n)), rt, Ea = {};
function q3(e = {}) {
  return Sn(e) ? W3(jl({}, Ea), { message: e }) : jl(jl({}, Ea), e);
}
function ht(e) {
  return Er() ? new Promise((n) => {
    ht.close();
    const r = $n(q3(e));
    r.teleport = "body", rt = r;
    const { unmountInstance: t } = Jt(Yo, r, {
      onConfirm: () => {
        S(r.onConfirm), n("confirm");
      },
      onCancel: () => {
        S(r.onCancel), n("cancel");
      },
      onClose: () => {
        S(r.onClose), n("close");
      },
      onClosed: () => {
        S(r.onClosed), t(), rt === r && (rt = null);
      },
      onRouteChange: () => {
        t(), rt === r && (rt = null);
      },
      "onUpdate:show": (o) => {
        r.show = o;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
ht.setDefaultOptions = function(e) {
  Ea = e;
};
ht.resetDefaultOptions = function() {
  Ea = {};
};
ht.close = function() {
  if (rt != null) {
    const e = rt;
    rt = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
ht.Component = Yo;
de(Yo);
de(Yo, ht);
fe(ht, Kg);
var sN = Yo, Fs = ht, qg = {
  inset: {
    type: [
      Boolean,
      Number,
      String
    ],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: X3, n: G3, classes: Z3 } = oe("divider");
function J3(e, n) {
  return b(), k("div", {
    class: g(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.withPresetInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
    style: J(e.style),
    role: "separator"
  }, [e.vertical ? q("v-if", !0) : H(e.$slots, "default", { key: 0 }, () => [e.description ? (b(), k("span", {
    key: 0,
    class: g(e.n("text"))
  }, ve(e.description), 3)) : q("v-if", !0)])], 6);
}
var Xg = te({
  name: X3,
  props: qg,
  setup(e, { slots: n }) {
    const r = P(!1), t = C(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), o = C(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (Do(i) || l) return { margin: s };
      const u = Z(i), d = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${ze(d)})`,
        left: u > 0 ? ze(d) : ze(0)
      };
    });
    En(a), qt(a);
    function a() {
      const { description: i, vertical: l } = e;
      r.value = (n.default || i != null) && !l;
    }
    return {
      n: G3,
      classes: Z3,
      withText: r,
      style: o,
      withPresetInset: t
    };
  }
});
Xg.render = J3;
var Ni = Xg;
de(Ni);
fe(Ni, qg);
var uN = Ni, Hs = Ni, Gg = {
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
    type: [
      String,
      Object,
      Boolean
    ],
    default: "body"
  },
  onClick: V()
}, Q3 = Object.defineProperty, x3 = Object.defineProperties, _3 = Object.getOwnPropertyDescriptors, Ff = Object.getOwnPropertySymbols, eO = Object.prototype.hasOwnProperty, nO = Object.prototype.propertyIsEnumerable, Hf = (e, n, r) => n in e ? Q3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Uf = (e, n) => {
  for (var r in n || (n = {})) eO.call(n, r) && Hf(e, r, n[r]);
  if (Ff)
    for (var r of Ff(n)) nO.call(n, r) && Hf(e, r, n[r]);
  return e;
}, jf = (e, n) => x3(e, _3(n)), { name: rO, n: tO, classes: oO } = oe("drag");
function aO(e, n) {
  return b(), we(Hr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [L("div", Xe({
    ref: "drag",
    class: e.classes(e.n(), e.n("$--box"), [e.enableTransition, e.n("--transition")]),
    style: { "z-index": e.zIndex }
  }, e.getAttrs(), {
    onTouchstart: n[0] || (n[0] = (...r) => e.handleTouchstart && e.handleTouchstart(...r)),
    onTouchmove: n[1] || (n[1] = (...r) => e.handleTouchmove && e.handleTouchmove(...r)),
    onTouchend: n[2] || (n[2] = (...r) => e.handleTouchend && e.handleTouchend(...r)),
    onTouchcancel: n[3] || (n[3] = (...r) => e.handleTouchend && e.handleTouchend(...r)),
    onClick: n[4] || (n[4] = (...r) => e.handleClick && e.handleClick(...r))
  }), [H(e.$slots, "default")], 16)], 8, ["to", "disabled"]);
}
var Zg = te({
  name: rO,
  inheritAttrs: !1,
  props: Gg,
  setup(e, { attrs: n }) {
    const r = P(null), t = P(0), o = P(0), a = P(!1), i = P(!1), { touching: l, dragging: s, moveX: u, moveY: d, startTouch: c, moveTouch: f, endTouch: v, resetTouch: p } = Zt(), { disabled: h } = zt(), m = $n({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    me(() => e.boundary, D), wr(B), En(() => {
      D(), B();
    });
    function y(A) {
      e.disabled || (c(A), T());
    }
    function $(A) {
      !l.value || e.disabled || (f(A), Ze(A), i.value = !1, a.value = !0, e.direction.includes("x") && (t.value += u.value), e.direction.includes("y") && (o.value += d.value), M());
    }
    function w() {
      e.disabled || (v(), i.value = !0, U());
    }
    function z(A) {
      s.value || S(e.onClick, A);
    }
    function T() {
      const { left: A, top: I } = O();
      t.value = A, o.value = I;
    }
    function O() {
      const A = kn(r.value), I = kn(window), F = A.top - I.top, Q = I.bottom - A.bottom, X = A.left - I.left, ae = I.right - A.right, { width: Te, height: ce } = A, { width: G, height: ne } = I;
      return {
        top: F,
        bottom: Q,
        left: X,
        right: ae,
        width: Te,
        height: ce,
        halfWidth: Te / 2,
        halfHeight: ce / 2,
        windowWidth: G,
        windowHeight: ne
      };
    }
    function R() {
      const A = O(), I = m.left, F = A.windowWidth - m.right - A.width, Q = m.top, X = A.windowHeight - m.bottom - A.height;
      return {
        minX: I,
        minY: Q,
        maxX: I < F ? F : I,
        maxY: Q < X ? X : Q
      };
    }
    function U() {
      if (e.attraction == null) return;
      const { halfWidth: A, halfHeight: I, top: F, bottom: Q, left: X, right: ae } = O(), { minX: Te, minY: ce, maxX: G, maxY: ne } = R(), pe = X + A - m.left, Oe = ae + A - m.right, Y = F + I - m.top, ie = Q + I - m.bottom, Ee = pe <= Oe, Ue = Y <= ie;
      e.attraction.includes("x") && (t.value = Ee ? Te : G), e.attraction.includes("y") && (o.value = Ue ? ce : ne);
    }
    function M() {
      const { minX: A, minY: I, maxX: F, maxY: Q } = R();
      t.value = hn(t.value, A, F), o.value = hn(o.value, I, Q);
    }
    function D() {
      const { top: A = 0, bottom: I = 0, left: F = 0, right: Q = 0 } = e.boundary;
      m.top = fn(A), m.bottom = fn(I), m.left = fn(F), m.right = fn(Q);
    }
    function E() {
      var A;
      const I = (A = n.style) != null ? A : {};
      return jf(Uf({}, n), { style: jf(Uf({}, I), {
        top: a.value ? 0 : I.top,
        left: a.value ? 0 : I.left,
        right: a.value ? "auto" : I.right,
        bottom: a.value ? "auto" : I.bottom,
        transform: a.value ? `translate(${t.value}px, ${o.value}px)` : I.transform
      }) });
    }
    function B() {
      a.value && (T(), M());
    }
    function N() {
      p(), i.value = !1, a.value = !1, t.value = 0, o.value = 0;
    }
    return {
      drag: r,
      x: t,
      y: o,
      enableTransition: i,
      dragging: s,
      teleportDisabled: h,
      n: tO,
      classes: oO,
      getAttrs: E,
      handleTouchstart: y,
      handleTouchmove: $,
      handleTouchend: w,
      handleClick: z,
      resize: B,
      reset: N
    };
  }
});
Zg.render = aO;
var Ri = Zg;
de(Ri);
fe(Ri, Gg);
var dN = Ri, Ia = Ri, Jg = {
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
  reference: [String, Object],
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
    type: [
      String,
      Object,
      Boolean
    ],
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
}, { name: iO, n: lO, classes: sO } = oe("tooltip");
function uO(e, n) {
  return b(), k("div", {
    ref: "host",
    class: g(e.classes(e.n(), e.n("$--box")))
  }, [H(e.$slots, "default"), (b(), we(Hr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [j(bn, {
    name: e.n(),
    onAfterEnter: e.onOpened,
    onAfterLeave: e.handleClosed,
    persisted: ""
  }, {
    default: ue(() => [Ke(L("div", {
      ref: "popover",
      class: g(e.classes(e.n("tooltip"), e.n("$--box"))),
      style: J({ zIndex: e.zIndex }),
      onClick: n[0] || (n[0] = Rn(() => {
      }, ["stop"])),
      onMouseenter: n[1] || (n[1] = (...r) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...r)),
      onMouseleave: n[2] || (n[2] = (...r) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...r))
    }, [L("div", {
      style: J({
        background: e.color,
        color: e.textColor,
        width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.referenceSize.width)) : void 0
      }),
      class: g(e.classes(e.n("content-container"), e.n(`--${e.type}`))),
      role: "tooltip"
    }, [H(e.$slots, "content", {}, () => [Le(ve(e.content), 1)])], 6)], 38), [[yr, e.show]])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]))], 2);
}
var Qg = te({
  name: iO,
  props: Jg,
  setup(e) {
    const { disabled: n } = zt(), { popover: r, host: t, referenceSize: o, show: a, zIndex: i, handlePopoverMouseenter: l, handlePopoverMouseleave: s, handlePopoverClose: u, handleClosed: d, open: c, close: f, resize: v, setReference: p } = xp(e);
    return {
      popover: r,
      host: t,
      referenceSize: o,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: ze,
      n: lO,
      classes: sO,
      handlePopoverClose: u,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: s,
      handleClosed: d,
      resize: v,
      open: c,
      close: f,
      setReference: p
    };
  }
});
Qg.render = uO;
var Vi = Qg;
de(Vi);
fe(Vi, Jg);
var cN = Vi, Ba = Vi, xg = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": V()
}, dO = Object.defineProperty, Yf = Object.getOwnPropertySymbols, cO = Object.prototype.hasOwnProperty, fO = Object.prototype.propertyIsEnumerable, Kf = (e, n, r) => n in e ? dO(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, vO = (e, n) => {
  for (var r in n || (n = {})) cO.call(n, r) && Kf(e, r, n[r]);
  if (Yf)
    for (var r of Yf(n)) fO.call(n, r) && Kf(e, r, n[r]);
  return e;
}, { name: pO, n: mO, classes: gO } = oe("ellipsis"), hO = { key: 0 };
function bO(e, n) {
  const r = x("var-tooltip");
  return b(), we(r, Xe({
    class: e.classes(e.n(), [
      e.lineClamp,
      e.n("--clamp"),
      e.n("--line")
    ], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")]),
    "var-ellipsis-cover": "",
    style: e.rootStyles
  }, e.tooltipProps, { onClick: e.handleClick }), {
    content: ue(() => [H(e.$slots, "tooltip-content", {}, () => {
      var t;
      return [(t = e.tooltipProps) != null && t.content ? (b(), k("span", hO, ve(e.tooltipProps.content), 1)) : H(e.$slots, "default", { key: 1 })];
    })]),
    default: ue(() => [L("span", null, [H(e.$slots, "default")])]),
    _: 3
  }, 16, [
    "class",
    "style",
    "onClick"
  ]);
}
var _g = te({
  name: pO,
  components: { VarTooltip: Ba },
  props: xg,
  setup(e) {
    const n = wn(e, "expand"), r = C(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), t = C(() => e.tooltip === !1 ? { disabled: !0 } : e.tooltip === !0 ? { sameWidth: !0 } : vO({ sameWidth: !0 }, e.tooltip));
    function o() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: t,
      expanding: n,
      rootStyles: r,
      n: mO,
      classes: gO,
      handleClick: o
    };
  }
});
_g.render = bO;
var Li = _g;
de(Li);
fe(Li, xg);
var fN = Li, Us = Li, eh = {
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
  inactiveIconSize: Fe(pn, "size"),
  activeIconSize: Fe(pn, "size"),
  inactiveIconNamespace: Fe(pn, "namespace"),
  activeIconNamespace: Fe(pn, "namespace"),
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
    type: [
      Boolean,
      Number,
      String
    ],
    default: !0
  },
  safeArea: Boolean,
  teleport: {
    type: [
      String,
      Object,
      Boolean
    ],
    default: "body"
  },
  onClick: V(),
  onOpen: V(),
  onOpened: V(),
  onClose: V(),
  onClosed: V(),
  "onUpdate:active": V()
}, { name: yO, classes: Yl, n: cr } = oe("fab"), Fi = te({
  name: yO,
  inheritAttrs: !1,
  props: eh,
  setup(e, { slots: n, attrs: r }) {
    const t = wn(e, "active"), o = P(null), a = P(null);
    me(() => e.trigger, () => {
      t.value = !1;
    }), me(() => e.disabled, () => {
      t.value = !1;
    }), me(() => [
      e.position,
      e.fixed,
      e.top,
      e.bottom,
      e.left,
      e.right
    ], () => {
      var d;
      (d = a.value) == null || d.reset();
    }), Jv(o, "click", s);
    function i(d, c, f) {
      if (d.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (f === 0) {
          S(e.onClick, t.value, d);
          return;
        }
        t.value = c, S(e.onClick, t.value, d), S(t.value ? e.onOpen : e.onClose);
      }
    }
    function l(d, c) {
      e.trigger !== "hover" || e.disabled || c === 0 || (t.value = d, S(t.value ? e.onOpen : e.onClose));
    }
    function s() {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, S(e.onClose));
    }
    function u() {
      return n.trigger ? e.show ? n.trigger({ active: t.value }) : null : Ke(j(tr, {
        "var-fab-cover": !0,
        class: cr("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        iconContainer: !0
      }, { default: () => [j(Je, {
        "var-fab-cover": !0,
        class: Yl([
          t.value,
          cr("trigger-active-icon"),
          cr("trigger-inactive-icon")
        ]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.activeIconSize : e.inactiveIconSize,
        namespace: t.value ? e.activeIconNamespace : e.inactiveIconNamespace,
        transition: 200,
        animationClass: cr("--trigger-icon-animation")
      }, null)] }), [[yr, e.show]]);
    }
    return () => {
      var d;
      const c = Va((d = S(n.default)) != null ? d : []), f = Do(e.drag) ? {} : e.drag;
      return j(Ia, Xe({
        ref: a,
        class: Yl(cr(`--position-${e.position}`), [!e.fixed, cr("--absolute")]),
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
        onClick: (v) => i(v, !t.value, c.length)
      }, r), { default: () => [j("div", {
        class: Yl(cr(), cr(`--direction-${e.direction}`), [e.safeArea, cr("--safe-area")]),
        ref: o,
        onMouseleave: () => l(!1, c.length),
        onMouseenter: () => l(!0, c.length)
      }, [j(bn, { name: cr("--active-transition") }, { default: () => [u()] }), j(bn, {
        name: cr(`--actions-transition-${e.direction}`),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, { default: () => [Ke(j("div", {
        class: cr("actions"),
        onClick: (v) => v.stopPropagation()
      }, [c.map((v) => {
        var p;
        return j("div", {
          class: cr("action"),
          key: (p = v.key) != null ? p : void 0
        }, [v]);
      })]), [[yr, e.show && t.value && c.length]])] })])] });
    };
  }
});
de(Fi);
fe(Fi, eh);
var vN = Fi, js = Fi, nh = {
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
    type: [
      Boolean,
      Number,
      String
    ],
    default: !0
  },
  teleport: {
    type: [
      String,
      Object,
      Boolean
    ],
    default: "body"
  },
  safeArea: Boolean,
  "onUpdate:anchor": V(),
  onAnchorChange: V()
}, { name: wO, n: kO, classes: $O } = oe("floating-panel"), Wf = 100, qf = 0.2;
function CO(e, n) {
  return b(), we(Hr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [L("div", {
    class: g(e.classes(e.n(), [e.safeArea, e.n("--safe-area")], e.formatElevation(e.elevation, 3))),
    style: J({
      height: `${e.toSizeUnit(e.maxAnchor)}`,
      transform: `translateY(calc(100% - ${e.toSizeUnit(e.visibleHeight)}))`,
      transition: e.touching ? "none" : `transform ${e.toNumber(e.duration)}ms var(--floating-panel-transition-timing-function), background-color 0.25s`
    }),
    onTouchstart: n[0] || (n[0] = (...r) => e.handleTouchstart && e.handleTouchstart(...r)),
    onTouchmove: n[1] || (n[1] = (...r) => e.handleTouchmove && e.handleTouchmove(...r)),
    onTouchend: n[2] || (n[2] = (...r) => e.handleTouchend && e.handleTouchend(...r)),
    onTouchcancel: n[3] || (n[3] = (...r) => e.handleTouchend && e.handleTouchend(...r))
  }, [H(e.$slots, "header", {}, () => [L("div", { class: g(e.n("header")) }, [L("div", { class: g(e.n("header-toolbar")) }, null, 2)], 2)]), L("div", {
    ref: "contentRef",
    class: g(e.n("content"))
  }, [H(e.$slots, "default")], 2)], 38)], 8, ["to", "disabled"]);
}
var rh = te({
  name: wO,
  props: nh,
  setup(e) {
    const n = P(0), r = P(null), { height: t } = Y0(), o = C(() => t.value * 0.6), a = wn(e, "anchor", { defaultValue: Wf }), i = C(() => {
      const M = [Wf, o.value], { anchors: D } = e;
      return Or(D) ? M : D;
    }), l = C(() => Math.min(...i.value)), s = C(() => Math.max(...i.value)), { disabled: u } = zt(), { deltaY: d, touching: c, startTouch: f, moveTouch: v, endTouch: p, isReachTop: h, isReachBottom: m } = Zt();
    let y;
    Mo(() => c.value), me(() => a.value, $, { immediate: !0 }), me(() => i.value, () => {
      $(a.value);
    }, { immediate: !0 });
    function $(M) {
      O(M ?? l.value);
    }
    function w(M) {
      f(M), y = n.value;
    }
    function z(M) {
      var D;
      v(M);
      const E = M.target, B = r.value === E || ((D = r.value) == null ? void 0 : D.contains(E));
      if (!(B && !e.contentDraggable)) {
        if (B && e.contentDraggable && n.value >= s.value && !h(r.value)) {
          m(r.value) && Ze(M);
          return;
        }
        O(R(y - d.value)), Ze(M);
      }
    }
    function T() {
      p();
      const M = a.value;
      O(n.value), a.value = n.value, a.value !== M && S(e.onAnchorChange, n.value);
    }
    function O(M) {
      n.value = c.value ? M : U(M);
    }
    function R(M) {
      if (M > s.value) {
        const D = M - s.value;
        return s.value + D * qf;
      }
      if (M < l.value) {
        const D = l.value - M;
        return l.value - D * qf;
      }
      return M;
    }
    function U(M) {
      if (i.value.includes(M)) return M;
      let D = 1 / 0, E = 0;
      return i.value.forEach((B) => {
        const N = Math.abs(B - M);
        N < D && (D = N, E = B);
      }), E;
    }
    return {
      contentRef: r,
      teleportDisabled: u,
      touching: c,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: kO,
      classes: $O,
      toSizeUnit: ze,
      toNumber: Z,
      formatElevation: Pn,
      handleTouchstart: w,
      handleTouchmove: z,
      handleTouchend: T
    };
  }
});
rh.render = CO;
var Hi = rh;
de(Hi);
fe(Hi, nh);
var pN = Hi, Ys = Hi, th = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: V(),
  onReset: V()
}, Xf = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: SO, n: PO } = oe("form");
function OO(e, n) {
  return b(), k("form", {
    class: g(e.n()),
    onSubmit: n[0] || (n[0] = (...r) => e.handleSubmit && e.handleSubmit(...r)),
    onReset: n[1] || (n[1] = (...r) => e.handleReset && e.handleReset(...r))
  }, [H(e.$slots, "default")], 34);
}
var oh = te({
  name: SO,
  props: th,
  setup(e) {
    const n = C(() => e.disabled), r = C(() => e.readonly), { formItems: t, bindFormItems: o } = D1();
    o({
      disabled: n,
      readonly: r
    });
    function a(c) {
      setTimeout(() => {
        const f = dt(c), v = f === window ? 0 : Kd(f);
        go(f, {
          top: Kd(c) - v - fn(e.scrollToErrorOffsetY),
          animation: ss
        });
      }, 300);
    }
    function i(c) {
      return Xf(this, null, function* () {
        Ze(c);
        const f = yield s();
        S(e.onSubmit, f);
      });
    }
    function l(c) {
      Ze(c), u(), S(e.onReset);
    }
    function s() {
      return Xf(this, null, function* () {
        var c;
        const f = yield Promise.all(t.map(({ validate: v }) => v()));
        if (e.scrollToError) {
          const [, v] = E0(f, (h) => h === !1, e.scrollToError), p = v > -1;
          return p && a((c = t[v].instance.proxy) == null ? void 0 : c.$el), !p;
        }
        return f.every((v) => v === !0);
      });
    }
    function u() {
      return t.forEach(({ reset: c }) => c());
    }
    function d() {
      return t.forEach(({ resetValidation: c }) => c());
    }
    return {
      n: PO,
      handleSubmit: i,
      handleReset: l,
      validate: s,
      reset: u,
      resetValidation: d
    };
  }
});
oh.render = OO;
var xt = oh;
xt.useValidation = Jn;
xt.useForm = Kn;
de(xt);
fe(xt, th);
var mN = xt, Ks = xt, ah = {
  highlighter: Object,
  theme: String,
  tag: {
    type: String,
    default: "div"
  }
}, { name: zO, n: TO } = oe("highlighter-provider"), Ui = te({
  name: zO,
  props: ah,
  setup(e, { slots: n }) {
    return HS({
      highlighter: C(() => e.highlighter),
      theme: C(() => e.theme)
    }), () => Fn(e.tag, { class: TO() }, S(n.default));
  }
});
de(Ui);
fe(Ui, ah);
var gN = Ui, Ws = Ui, ih = {
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
}, { name: EO, n: IO, classes: BO } = oe("image"), DO = [
  "alt",
  "title",
  "referrerpolicy",
  "lazy-loading",
  "lazy-error"
], MO = [
  "alt",
  "title",
  "referrerpolicy",
  "src"
];
function AO(e, n) {
  var r;
  const t = _e("lazy"), o = _e("ripple");
  return Ke((b(), k("div", {
    class: g(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
    style: J({
      width: e.toSizeUnit(e.width),
      height: e.toSizeUnit(e.height),
      borderRadius: e.toSizeUnit(e.radius)
    })
  }, [
    e.lazy && !e.showErrorSlot ? Ke((b(), k("img", {
      key: 0,
      role: "img",
      class: g(e.n("image")),
      alt: e.alt,
      title: e.title,
      referrerpolicy: e.referrerpolicy,
      "lazy-loading": e.loading,
      "lazy-error": e.error,
      style: J({
        objectFit: e.fit,
        objectPosition: e.position
      }),
      onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
      onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
    }, null, 46, DO)), [[t, (r = e.src) != null ? r : ""]]) : q("v-if", !0),
    !e.lazy && !e.showErrorSlot ? (b(), k("img", {
      key: 1,
      role: "img",
      class: g(e.n("image")),
      alt: e.alt,
      title: e.title,
      referrerpolicy: e.referrerpolicy,
      style: J({
        objectFit: e.fit,
        objectPosition: e.position
      }),
      src: e.src,
      onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
      onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
      onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
    }, null, 46, MO)) : q("v-if", !0),
    e.showErrorSlot ? H(e.$slots, "error", { key: 2 }) : q("v-if", !0)
  ], 6)), [[o, { disabled: !e.ripple }]]);
}
var lh = te({
  name: EO,
  directives: {
    Lazy: wo,
    Ripple: vn
  },
  props: ih,
  setup(e, { slots: n }) {
    const r = P(!1);
    me(() => e.src, () => {
      r.value = !1;
    });
    function t(i) {
      r.value = !!n.error, S(e.onError, i);
    }
    function o(i) {
      const l = i.currentTarget;
      if (e.lazy) {
        if (l._lazy.state === "success") {
          S(e.onLoad, i);
          return;
        }
        l._lazy.state === "error" && t(i);
      } else S(e.onLoad, i);
    }
    function a(i) {
      S(e.onClick, i);
    }
    return {
      showErrorSlot: r,
      n: IO,
      classes: BO,
      toSizeUnit: ze,
      handleLoad: o,
      handleError: t,
      handleClick: a
    };
  }
});
lh.render = AO;
var ji = lh;
de(ji);
fe(ji, ih);
var hN = ji, qs = ji, ld = {
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
}, Bt = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), NO = 250, RO = 20, { name: VO, n: Gf, classes: LO } = oe("swipe"), FO = ["onClick"];
function HO(e, n) {
  const r = x("var-icon"), t = x("var-button"), o = _e("hover");
  return Ke((b(), k("div", {
    ref: "swipeEl",
    class: g(e.n())
  }, [
    L("div", {
      class: g(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
      style: J({
        width: e.vertical ? void 0 : e.toSizeUnit(e.trackSize),
        height: e.vertical ? e.toSizeUnit(e.trackSize) : void 0,
        transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.trackTranslate)})`,
        transitionDuration: e.lockDuration ? "0ms" : `${e.toNumber(e.duration)}ms`
      }),
      onTouchstart: n[0] || (n[0] = (...a) => e.handleTouchstart && e.handleTouchstart(...a)),
      onTouchmove: n[1] || (n[1] = (...a) => e.handleTouchmove && e.handleTouchmove(...a)),
      onTouchend: n[2] || (n[2] = (...a) => e.handleTouchend && e.handleTouchend(...a))
    }, [H(e.$slots, "default")], 38),
    e.navigation ? H(e.$slots, "prev", yt(Xe({ key: 0 }, {
      index: e.index,
      length: e.length,
      prev: e.prev,
      next: e.next,
      to: e.to,
      hovering: e.hovering
    })), () => [j(bn, { name: e.getNavigationAnimation("prev") }, {
      default: ue(() => [e.navigation === !0 || e.hovering ? (b(), k("div", {
        key: 0,
        class: g(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
      }, [j(t, {
        "var-swipe-cover": "",
        disabled: !e.loop && e.index === 0,
        class: g(e.n("navigation-prev-button")),
        onClick: n[3] || (n[3] = (a) => e.prev())
      }, {
        default: ue(() => [j(r, {
          "var-swipe-cover": "",
          class: g(e.n("navigation-prev-button-icon")),
          name: e.vertical ? "chevron-up" : "chevron-left"
        }, null, 8, ["class", "name"])]),
        _: 1
      }, 8, ["disabled", "class"])], 2)) : q("v-if", !0)]),
      _: 1
    }, 8, ["name"])]) : q("v-if", !0),
    e.navigation ? H(e.$slots, "next", yt(Xe({ key: 1 }, {
      index: e.index,
      length: e.length,
      hovering: e.hovering,
      prev: e.prev,
      next: e.next,
      to: e.to
    })), () => [j(bn, { name: e.getNavigationAnimation("next") }, {
      default: ue(() => [e.navigation === !0 || e.hovering ? (b(), k("div", {
        key: 0,
        class: g(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
      }, [j(t, {
        "var-swipe-cover": "",
        class: g(e.n("navigation-next-button")),
        disabled: !e.loop && e.index === e.length - 1,
        onClick: n[4] || (n[4] = (a) => e.next())
      }, {
        default: ue(() => [j(r, {
          "var-swipe-cover": "",
          class: g(e.n("navigation-next-button-icon")),
          name: e.vertical ? "chevron-down" : "chevron-right"
        }, null, 8, ["class", "name"])]),
        _: 1
      }, 8, ["class", "disabled"])], 2)) : q("v-if", !0)]),
      _: 1
    }, 8, ["name"])]) : q("v-if", !0),
    H(e.$slots, "indicator", yt(Aa({
      index: e.index,
      length: e.length,
      hovering: e.hovering,
      prev: e.prev,
      next: e.next,
      to: e.to
    })), () => [e.indicator && e.length ? (b(), k("div", {
      key: 0,
      class: g(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
    }, [(b(!0), k(Be, null, Ye(e.length, (a, i) => (b(), k("div", {
      key: a,
      class: g(e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
      style: J({ background: e.indicatorColor }),
      onClick: (l) => e.to(i)
    }, null, 14, FO))), 128))], 2)) : q("v-if", !0)])
  ], 2)), [[o, e.handleHovering]]);
}
var sh = te({
  name: VO,
  directives: { Hover: jn },
  components: {
    VarButton: tr,
    VarIcon: Je
  },
  props: ld,
  setup(e) {
    const n = P(null), r = P(0), t = C(() => e.vertical), o = P(0), a = P(0), i = P(!1), l = P(0), s = P(!1), { swipeItems: u, bindSwipeItems: d, length: c } = M1(), { swipeResizeListeners: f, bindSwipeResizeListeners: v } = A1(), { popup: p, bindPopup: h } = sp(), { deltaX: m, deltaY: y, moveX: $, moveY: w, offsetX: z, offsetY: T, touching: O, direction: R, startTime: U, startTouch: M, moveTouch: D, endTouch: E } = Zt(), B = C(() => R.value === (e.vertical ? "vertical" : "horizontal"));
    let N = !1, A = -1;
    d({
      size: r,
      currentIndex: l,
      vertical: t
    }), xe(() => window, "keydown", Ue), S(h, null), S(v, null), me(() => c.value, () => Bt(null, null, function* () {
      yield Xn(), ce(), nn();
    })), p && me(() => p.show.value, (be) => Bt(null, null, function* () {
      be ? (yield Xn(), nn()) : ne();
    })), vt(nn), Gt(ne), wr(nn);
    function I(be) {
      return u.find(({ index: ee }) => ee.value === be);
    }
    function F() {
      e.loop && (a.value >= 0 && I(c.value - 1).setTranslate(-o.value), a.value <= -(o.value - r.value) && I(0).setTranslate(o.value), a.value > -(o.value - r.value) && a.value < 0 && (I(c.value - 1).setTranslate(0), I(0).setTranslate(0)));
    }
    function Q(be) {
      const ee = nr(be) ? be : Math.floor((a.value - r.value / 2) / -r.value), { loop: K } = e;
      return ee <= -1 ? K ? -1 : 0 : ee >= c.value ? K ? c.value : c.value - 1 : ee;
    }
    function X(be) {
      const { loop: ee } = e;
      return be === -1 ? ee ? c.value - 1 : 0 : be === c.value ? ee ? 0 : c.value - 1 : be;
    }
    function ae(be) {
      return e.loop ? be < 0 ? c.value + be : be >= c.value ? be - c.value : be : hn(be, 0, c.value - 1);
    }
    function Te() {
      return Bt(this, null, function* () {
        const be = a.value >= r.value, ee = a.value <= -o.value, K = 0, re = -(o.value - r.value);
        i.value = !0, (be || ee) && (i.value = !0, a.value = ee ? K : re, I(0).setTranslate(0), I(c.value - 1).setTranslate(0)), yield Xn(), i.value = !1;
      });
    }
    function ce() {
      N || (l.value = ae(Z(e.initialIndex)), N = !0);
    }
    function G() {
      const { autoplay: be } = e;
      !be || c.value <= 1 || (ne(), A = window.setTimeout(() => {
        qe(), G();
      }, Z(be)));
    }
    function ne() {
      A && clearTimeout(A);
    }
    function pe(be) {
      return Bt(this, null, function* () {
        c.value <= 1 || !e.touchable || (M(be), ne(), yield Te(), i.value = !0);
      });
    }
    function Oe(be) {
      const { touchable: ee, vertical: K } = e;
      !O.value || !ee || (D(be), B.value && (Ze(be), a.value += K ? w.value : $.value, F()));
    }
    function Y() {
      if (!O.value || (E(), !B.value)) return;
      const { vertical: be, onChange: ee } = e, K = be ? y.value < 0 : m.value < 0, re = be ? T.value : z.value, ye = performance.now() - U.value <= NO && re >= RO ? Q(K ? l.value + 1 : l.value - 1) : Q();
      i.value = !1, a.value = ye * -r.value;
      const Pe = l.value;
      l.value = X(ye), G(), Pe !== l.value && S(ee, l.value);
    }
    function ie(be) {
      e.navigation === "hover" && (s.value = be);
    }
    function Ee(be) {
      return e.navigation !== "hover" ? "" : Gf(`--navigation${e.vertical ? "-vertical" : ""}-${be}-animation`);
    }
    function Ue(be) {
      if (!u.length || u.findIndex(({ isFocusing: K }) => K.value) === -1) return;
      const { key: ee } = be;
      Ze(be), ee === "ArrowLeft" && en(), ee === "ArrowRight" && qe();
    }
    function nn() {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, o.value = r.value * c.value, a.value = l.value * -r.value, u.forEach((be) => {
        be.setTranslate(0);
      }), G(), setTimeout(() => {
        i.value = !1;
      }), f.forEach(({ onResize: be }) => {
        be();
      }));
    }
    function qe(be) {
      return Bt(this, null, function* () {
        if (c.value <= 1) return;
        ce();
        const { loop: ee, onChange: K } = e, re = l.value;
        if (l.value = ae(re + 1), be?.event !== !1 && S(K, l.value), yield Te(), re === c.value - 1 && ee) {
          I(0).setTranslate(o.value), a.value = c.value * -r.value;
          return;
        }
        re !== c.value - 1 && (a.value = l.value * -r.value);
      });
    }
    function en(be) {
      return Bt(this, null, function* () {
        if (c.value <= 1) return;
        ce();
        const { loop: ee, onChange: K } = e, re = l.value;
        if (l.value = ae(re - 1), be?.event !== !1 && S(K, l.value), yield Te(), re === 0 && ee) {
          I(c.value - 1).setTranslate(-o.value), a.value = r.value;
          return;
        }
        re !== 0 && (a.value = l.value * -r.value);
      });
    }
    function on(be, ee) {
      if (c.value <= 1 || be === l.value) return;
      be = be < 0 ? 0 : be, be = be >= c.value ? c.value : be;
      const K = be > l.value ? qe : en, re = Math.abs(be - l.value);
      Array.from({ length: re }).forEach((ye, Pe) => {
        K({ event: Pe === re - 1 ? ee?.event : !1 });
      });
    }
    return {
      length: c,
      index: l,
      swipeEl: n,
      trackSize: o,
      trackTranslate: a,
      lockDuration: i,
      hovering: s,
      n: Gf,
      toSizeUnit: ze,
      classes: LO,
      handleTouchstart: pe,
      handleTouchmove: Oe,
      handleTouchend: Y,
      next: qe,
      prev: en,
      to: on,
      resize: nn,
      toNumber: Z,
      handleHovering: ie,
      getNavigationAnimation: Ee
    };
  }
});
sh.render = HO;
var Yi = sh;
de(Yi);
fe(Yi, ld);
var bN = Yi, Po = Yi;
function UO() {
  const { bindParent: e, index: n, parentProvider: r } = In(Rp);
  return rr(!!e, "SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var { name: jO, n: YO } = oe("swipe-item"), KO = ["aria-hidden"];
function WO(e, n) {
  return b(), k("div", {
    class: g(e.n()),
    style: J({
      width: e.vertical ? void 0 : e.toSizeUnit(e.size),
      height: e.vertical ? e.toSizeUnit(e.size) : void 0,
      transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.translate)})`
    }),
    tabindex: "-1",
    "aria-hidden": e.currentIndex !== e.index,
    onFocus: n[0] || (n[0] = (r) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (r) => e.isFocusing = !1)
  }, [H(e.$slots, "default")], 46, KO);
}
var uh = te({
  name: jO,
  setup() {
    const e = P(0), n = P(!1), { swipe: r, bindSwipe: t, index: o } = UO(), { size: a, currentIndex: i, vertical: l } = r;
    t({
      index: o,
      isFocusing: C(() => n.value),
      setTranslate: s
    });
    function s(u) {
      e.value = u;
    }
    return {
      isFocusing: n,
      size: a,
      index: o,
      currentIndex: i,
      vertical: l,
      translate: e,
      n: YO,
      toSizeUnit: ze
    };
  }
});
uh.render = WO;
var sd = uh;
de(sd);
var yN = sd, Oo = sd, qO = Object.defineProperty, Zf = Object.getOwnPropertySymbols, XO = Object.prototype.hasOwnProperty, GO = Object.prototype.propertyIsEnumerable, Jf = (e, n, r) => n in e ? qO(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Qf = (e, n) => {
  for (var r in n || (n = {})) XO.call(n, r) && Jf(e, r, n[r]);
  if (Zf)
    for (var r of Zf(n)) GO.call(n, r) && Jf(e, r, n[r]);
  return e;
}, dh = Qf(Qf({
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
}, Fe(ld, [
  "loop",
  "indicator",
  "onChange"
])), Fe(Qt, [
  "lockScroll",
  "teleport",
  "closeOnKeyEscape",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onKeyEscape",
  "onRouteChange"
])), { name: ZO, n: xf, classes: JO } = oe("image-preview"), Kl = 12, _f = 200, QO = 350, ev = 200, xO = 500, na = 1, _O = ["onTouchstart"], ez = ["src", "alt"];
function nz(e, n) {
  const r = x("var-swipe-item"), t = x("var-swipe"), o = x("var-icon"), a = x("var-popup");
  return b(), we(a, {
    show: e.show,
    "onUpdate:show": n[3] || (n[3] = (i) => e.show = i),
    "var-image-preview-cover": "",
    class: g(e.n("popup")),
    transition: e.n("$-fade"),
    overlay: !1,
    "close-on-click-overlay": !1,
    "close-on-key-escape": e.closeOnKeyEscape,
    "lock-scroll": e.lockScroll,
    teleport: e.teleport,
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onKeyEscape: e.onKeyEscape,
    onRouteChange: e.onRouteChange
  }, {
    default: ue(() => [
      j(t, Xe({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.toNumber(e.initialIndex),
        loop: e.loop
      }, e.$attrs, { onChange: e.onChange }), {
        default: ue(() => [(b(!0), k(Be, null, Ye(e.images, (i, l) => (b(), we(r, {
          key: i,
          class: g(e.n("swipe-item")),
          "var-image-preview-cover": ""
        }, {
          default: ue(() => [L("div", {
            class: g(e.n("zoom-container")),
            style: J({
              transform: `scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,
              transitionTimingFunction: e.transitionTimingFunction,
              transitionDuration: e.transitionDuration
            }),
            onTouchstart: (s) => e.handleTouchstart(s, l),
            onTouchmove: n[0] || (n[0] = (...s) => e.handleTouchmove && e.handleTouchmove(...s)),
            onTouchend: n[1] || (n[1] = (...s) => e.handleTouchend && e.handleTouchend(...s)),
            onTouchcancel: n[2] || (n[2] = (...s) => e.handleTouchcancel && e.handleTouchcancel(...s))
          }, [L("img", {
            role: "img",
            class: g(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
            src: i,
            alt: i
          }, null, 10, ez)], 46, _O)]),
          _: 2
        }, 1032, ["class"]))), 128))]),
        indicator: ue(({ index: i, length: l }) => [H(e.$slots, "indicator", {
          index: i,
          length: l
        }, () => [e.indicator && e.images.length > 1 ? (b(), k("div", {
          key: 0,
          class: g(e.n("indicators"))
        }, ve(i + 1) + " / " + ve(l), 3)) : q("v-if", !0)])]),
        _: 3
      }, 16, [
        "class",
        "touchable",
        "indicator",
        "initial-index",
        "loop",
        "onChange"
      ]),
      H(e.$slots, "close-icon", {}, () => [e.closeable ? (b(), we(o, {
        key: 0,
        class: g(e.n("close-icon")),
        name: "close-circle",
        "var-image-preview-cover": "",
        onClick: e.close
      }, null, 8, ["class", "onClick"])) : q("v-if", !0)]),
      e.$slots.extra ? (b(), k("div", {
        key: 0,
        class: g(e.n("extra"))
      }, [H(e.$slots, "extra")], 2)) : q("v-if", !0)
    ]),
    _: 3
  }, 8, [
    "show",
    "class",
    "transition",
    "close-on-key-escape",
    "lock-scroll",
    "teleport",
    "onOpen",
    "onClose",
    "onClosed",
    "onOpened",
    "onKeyEscape",
    "onRouteChange"
  ]);
}
var ch = te({
  name: ZO,
  components: {
    VarSwipe: Po,
    VarSwipeItem: Oo,
    VarPopup: ut,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: dh,
  setup(e) {
    const n = wn(e, "show"), r = P(1), t = P(0), o = P(0), a = P(), i = P(), l = P(!0), s = P(null), { moveX: u, moveY: d, distance: c, startTime: f, startTouch: v, moveTouch: p, endTouch: h } = Zt(), m = C(() => {
      const { imagePreventDefault: G, show: ne } = e;
      return ne && G;
    });
    let y = null, $ = null, w = !1;
    const z = {
      start: null,
      prev: null
    };
    xe(() => document, "contextmenu", Q);
    function T(G) {
      r.value = Z(G), l.value = !1, z.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, ev);
    }
    function O() {
      r.value = 1, t.value = 0, o.value = 0, l.value = !0, z.prev = null, a.value = void 0, i.value = void 0;
    }
    function R(G) {
      return z.prev ? c.value <= Kl && performance.now() - f.value <= _f && z.prev === G : !1;
    }
    function U(G) {
      return !G || !z.start || !z.prev ? !1 : c.value <= Kl && performance.now() - f.value < QO && (G === z.start || G.parentNode === z.start);
    }
    function M() {
      h(), window.clearTimeout($), w = !1, z.start = null;
    }
    function D(G) {
      if (h(), window.clearTimeout($), w) {
        w = !1;
        return;
      }
      const ne = U(G.target);
      y = window.setTimeout(() => {
        ne && F(), z.start = null;
      }, _f);
    }
    function E(G, ne) {
      window.clearTimeout(y), window.clearTimeout($);
      const pe = G.currentTarget;
      if (z.start = pe, $ = window.setTimeout(() => {
        w = !0, S(e.onLongPress, ne);
      }, xO), R(pe)) {
        r.value > na ? O() : T(e.zoom);
        return;
      }
      v(G), z.prev = pe;
    }
    function B(G) {
      const { offsetWidth: ne, offsetHeight: pe } = G, { naturalWidth: Oe, naturalHeight: Y } = G.querySelector(`.${xf("image")}`);
      return {
        width: ne,
        height: pe,
        imageRadio: Y / Oe,
        rootRadio: pe / ne,
        zoom: Z(e.zoom)
      };
    }
    function N(G) {
      const { zoom: ne, imageRadio: pe, rootRadio: Oe, width: Y, height: ie } = B(G);
      if (!pe) return 0;
      const Ee = pe > Oe ? ie / pe : Y;
      return Math.max(0, (ne * Ee - Y) / 2) / ne;
    }
    function A(G) {
      const { zoom: ne, imageRadio: pe, rootRadio: Oe, width: Y, height: ie } = B(G);
      if (!pe) return 0;
      const Ee = pe > Oe ? ie : Y * pe;
      return Math.max(0, (ne * Ee - ie) / 2) / ne;
    }
    function I(G) {
      if (!z.prev) return;
      p(G);
      const ne = G.currentTarget;
      if (c.value > Kl && window.clearTimeout($), r.value > na) {
        const pe = N(ne), Oe = A(ne);
        t.value = hn(t.value + u.value, -pe, pe), o.value = hn(o.value + d.value, -Oe, Oe);
      }
      z.prev = ne;
    }
    function F() {
      if (r.value > na) {
        O(), setTimeout(() => S(e["onUpdate:show"], !1), ev);
        return;
      }
      S(e["onUpdate:show"], !1);
    }
    function Q(G) {
      m.value && Ze(G);
    }
    function X(G) {
      var ne;
      (ne = s.value) == null || ne.prev(G);
    }
    function ae(G) {
      var ne;
      (ne = s.value) == null || ne.next(G);
    }
    function Te(G, ne) {
      var pe;
      (pe = s.value) == null || pe.to(G, ne);
    }
    function ce(G) {
      G <= na ? O() : T(G);
    }
    return {
      swipeRef: s,
      isPreventDefault: m,
      show: n,
      scale: r,
      translateX: t,
      translateY: o,
      canSwipe: l,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: xf,
      classes: JO,
      toNumber: Z,
      handleTouchstart: E,
      handleTouchmove: I,
      handleTouchend: D,
      handleTouchcancel: M,
      close: F,
      prev: X,
      next: ae,
      to: Te,
      zoom: ce
    };
  }
});
ch.render = nz;
var Ko = ch, rz = Object.defineProperty, tz = Object.defineProperties, oz = Object.getOwnPropertyDescriptors, nv = Object.getOwnPropertySymbols, az = Object.prototype.hasOwnProperty, iz = Object.prototype.propertyIsEnumerable, rv = (e, n, r) => n in e ? rz(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, ra = (e, n) => {
  for (var r in n || (n = {})) az.call(n, r) && rv(e, r, n[r]);
  if (nv)
    for (var r of nv(n)) iz.call(n, r) && rv(e, r, n[r]);
  return e;
}, tv = (e, n) => tz(e, oz(n)), tt, vo = {};
function lz(e = {}) {
  return Sn(e) ? tv(ra({}, vo), { images: [e] }) : We(e) ? tv(ra({}, vo), { images: e }) : ra(ra({}, vo), e);
}
function bt(e) {
  if (!Er()) return;
  bt.close();
  const n = $n(lz(e));
  n.teleport = "body", tt = n;
  const { unmountInstance: r } = Jt(Ko, n, {
    onClose: () => S(n.onClose),
    onClosed: () => {
      S(n.onClosed), r(), tt === n && (tt = null);
    },
    onRouteChange: () => {
      r(), tt === n && (tt = null);
    },
    "onUpdate:show": (t) => {
      n.show = t;
    }
  });
  n.show = !0;
}
bt.close = () => {
  if (tt != null) {
    const e = tt;
    tt = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
bt.setDefaultOptions = (e) => {
  vo = e;
};
bt.resetDefaultOptions = () => {
  vo = {};
};
bt.Component = Ko;
de(Ko);
de(Ko, bt);
fe(bt, dh);
var wN = Ko, zo = bt, po = {
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
}, ov = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: sz, n: uz, classes: dz } = oe("sticky");
function cz(e, n) {
  return b(), k("div", {
    ref: "stickyEl",
    class: g(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
    style: J({
      zIndex: e.toNumber(e.zIndex),
      top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
      width: e.enableFixedMode ? e.fixedWidth : void 0,
      height: e.enableFixedMode ? e.fixedHeight : void 0
    })
  }, [L("div", {
    ref: "wrapperEl",
    class: g(e.n("wrapper")),
    style: J({
      zIndex: e.toNumber(e.zIndex),
      position: e.enableFixedMode ? "fixed" : void 0,
      width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
      height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
      left: e.enableFixedMode ? e.fixedLeft : void 0,
      top: e.enableFixedMode ? e.fixedTop : void 0
    })
  }, [H(e.$slots, "default")], 6)], 6);
}
var fh = te({
  name: sz,
  props: po,
  setup(e) {
    const n = P(null), r = P(null), t = P(!1), o = P("0px"), a = P("0px"), i = P("auto"), l = P("auto"), s = P("auto"), u = P("auto"), d = C(() => !e.disabled && e.cssMode), c = C(() => !e.disabled && !e.cssMode && t.value), f = C(() => fn(e.offsetTop));
    let v;
    me(() => e.disabled, $), En(() => ov(null, null, function* () {
      yield Xn(), h(), m();
    })), Gt(y), wr($), xe(() => window, "scroll", m);
    function p() {
      const { cssMode: w, disabled: z } = e;
      if (z) return;
      let T = 0;
      if (v && v !== window) {
        const { top: E } = kn(v);
        T = E;
      }
      const O = r.value, R = n.value, { top: U, left: M } = kn(R), D = U - T;
      return D <= f.value ? (w || (i.value = `${R.offsetWidth}px`, l.value = `${R.offsetHeight}px`, o.value = `${T + f.value}px`, a.value = `${M}px`, s.value = `${O.offsetWidth}px`, u.value = `${O.offsetHeight}px`, t.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (t.value = !1, {
        offsetTop: D,
        isFixed: !1
      });
    }
    function h() {
      v = dt(n.value), v !== window && v.addEventListener("scroll", m);
    }
    function m() {
      const w = p();
      w && S(e.onScroll, w.offsetTop, w.isFixed);
    }
    function y() {
      !v || v === window || v.removeEventListener("scroll", m);
    }
    function $() {
      return ov(this, null, function* () {
        t.value = !1, yield it(), p();
      });
    }
    return {
      stickyEl: n,
      wrapperEl: r,
      isFixed: t,
      offsetTop: f,
      fixedTop: o,
      fixedLeft: a,
      fixedWidth: i,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: c,
      n: uz,
      classes: dz,
      resize: $,
      toNumber: Z
    };
  }
});
fh.render = cz;
var Ki = fh;
de(Ki);
fe(Ki, po);
var kN = Ki, To = Ki, vh = { index: [Number, String] }, ph = /* @__PURE__ */ Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function fz() {
  const { bindChildren: e, length: n, childProviders: r } = Bn(ph);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function vz() {
  const { parentProvider: e, index: n, bindParent: r } = In(ph);
  return rr(!!r, "IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var { name: pz, n: mz, classes: gz } = oe("index-anchor");
function hz(e, n) {
  return b(), we(Xt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: "anchorEl",
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode
  }, {
    default: ue(() => [L("div", Xe({ class: e.n() }, e.$attrs), [H(e.$slots, "default", {}, () => [Le(ve(e.name), 1)])], 16)]),
    _: 3
  }, 8, [
    "offset-top",
    "z-index",
    "disabled",
    "css-mode"
  ]);
}
var mh = te({
  name: pz,
  components: { VarSticky: To },
  inheritAttrs: !1,
  props: vh,
  setup(e) {
    const n = P(!1), r = C(() => e.index), t = P(null), { index: o, indexBar: a, bindIndexBar: i } = vz(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: d, zIndex: c } = a;
    i({
      index: o,
      name: r,
      setDisabled: v,
      getOffsetTop: f
    });
    function f() {
      return t.value ? t.value.$el ? t.value.$el.offsetTop : t.value.offsetTop : 0;
    }
    function v(p) {
      n.value = p;
    }
    return {
      n: mz,
      classes: gz,
      name: r,
      anchorEl: t,
      active: l,
      sticky: s,
      zIndex: c,
      disabled: n,
      cssMode: u,
      stickyOffsetTop: d,
      Transition: bn
    };
  }
});
mh.render = hz;
var Wi = mh;
de(Wi);
fe(Wi, vh);
var $N = Wi, Xs = Wi, gh = {
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
}, av = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: bz, n: yz, classes: wz } = oe("index-bar"), kz = ["onClick"];
function $z(e, n) {
  return b(), k("div", {
    ref: "barEl",
    class: g(e.n())
  }, [H(e.$slots, "default"), L("ul", {
    class: g(e.n("anchor-list")),
    style: J({
      zIndex: e.toNumber(e.zIndex) + 2,
      display: e.hideList ? "none" : "block"
    })
  }, [(b(!0), k(Be, null, Ye(e.anchorNameList, (r) => (b(), k("li", {
    key: r,
    class: g(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
    style: J({ color: e.active === r && e.highlightColor ? e.highlightColor : void 0 }),
    onClick: (t) => e.anchorClick({
      anchorName: r,
      manualCall: !0
    })
  }, [H(e.$slots, "anchor-name", { anchorName: r }, () => [Le(ve(r), 1)])], 14, kz))), 128))], 6)], 2);
}
var hh = te({
  name: bz,
  props: gh,
  setup(e) {
    const n = P(""), r = P(null), t = P([]), o = P(), a = C(() => e.sticky), i = C(() => e.stickyCssMode), l = C(() => fn(e.stickyOffsetTop)), s = C(() => e.zIndex), { length: u, indexAnchors: d, bindIndexAnchors: c } = fz();
    let f = null, v = !1;
    const p = {
      active: o,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    me(() => u.value, () => av(null, null, function* () {
      yield Xn(), t.value = d.filter(({ name: O }) => O.value != null).map(({ name: O }) => O.value);
    })), En(w), Pt(z), Ot(() => {
      v = !0, z();
    }), vt(() => {
      !v || o.value === void 0 || ($({
        anchorName: o.value,
        options: { event: !1 }
      }), v = !1);
    }), c(p);
    function h(O, R) {
      const U = Tn(O) ? O.name.value : O;
      U === o.value || U === void 0 || (o.value = U, R?.event !== !1 && S(e.onChange, U));
    }
    function m() {
      const { top: O } = kn(f), { top: R } = kn(r.value);
      return kt(f) - O + R;
    }
    function y() {
      const O = kt(f), R = f === window ? document.body.scrollHeight : f.scrollHeight, U = m();
      d.forEach((M, D) => {
        const E = O - M.getOffsetTop() + l.value - U, B = D === d.length - 1 ? R : d[D + 1].getOffsetTop() - M.getOffsetTop();
        M.setDisabled(!0), E >= 0 && E < B && n.value === "" && (M.setDisabled(!1), h(M));
      });
    }
    function $(O) {
      return av(this, arguments, function* ({ anchorName: R, manualCall: U = !1, options: M }) {
        if (U && S(e.onClick, R), R === o.value && !v) return;
        const D = d.find(({ name: A }) => R === A.value);
        if (!D) return;
        const E = m(), B = D.getOffsetTop() - l.value + E, N = Ru(f);
        n.value = R, h(R, M), yield go(f, {
          left: N,
          top: B,
          animation: cm,
          duration: Z(e.duration)
        }), yield Xn(), n.value = "";
      });
    }
    function w() {
      f = dt(r.value), f.addEventListener("scroll", y);
    }
    function z() {
      f && f.removeEventListener("scroll", y);
    }
    function T(O, R) {
      Vt(() => $({
        anchorName: O,
        options: R
      }));
    }
    return {
      barEl: r,
      active: o,
      zIndex: s,
      anchorNameList: t,
      n: yz,
      classes: wz,
      toNumber: Z,
      scrollTo: T,
      anchorClick: $
    };
  }
});
hh.render = $z;
var qi = hh;
de(qi);
fe(qi, gh);
var CN = qi, Gs = qi, bh = {
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
}, { name: Cz, n: Sz, classes: Pz } = oe("link");
function Oz(e, n) {
  return b(), we(Xt(e.tag), Xe(e.linkProps, {
    class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n(`--${e.type}`), [e.underline !== "none", e.n(`--underline-${e.underline}`)], [e.disabled, e.n("--disabled")], [e.isFocusing && !e.inMobile(), e.n("--focusing")]),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick,
    onFocus: n[0] || (n[0] = (r) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (r) => e.isFocusing = !1)
  }), {
    default: ue(() => [H(e.$slots, "default")]),
    _: 3
  }, 16, [
    "class",
    "style",
    "onClick"
  ]);
}
var yh = te({
  name: Cz,
  props: bh,
  setup(e) {
    const n = P(!1), r = C(() => {
      const { disabled: a, href: i, to: l } = e;
      return a ? "span" : i ? "a" : l ? "router-link" : "a";
    }), t = C(() => {
      const { disabled: a, href: i, target: l, to: s, replace: u, rel: d } = e;
      return a ? {} : i ? {
        href: i,
        target: l,
        rel: d
      } : s ? {
        to: s,
        target: l,
        replace: u
      } : {};
    });
    function o(a) {
      e.disabled || S(e.onClick, a);
    }
    return {
      tag: r,
      linkProps: t,
      isFocusing: n,
      inMobile: pa,
      n: Sz,
      classes: Pz,
      handleClick: o,
      toSizeUnit: ze
    };
  }
});
yh.render = Oz;
var Xi = yh;
de(Xi);
fe(Xi, bh);
var SN = Xi, Zs = Xi, wh = {
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
}, kh = /* @__PURE__ */ Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function zz() {
  const { bindChildren: e, childProviders: n, length: r } = Bn(kh);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
var $h = /* @__PURE__ */ Symbol("TAB_ITEM_BIND_LIST_KEY");
function Tz() {
  const { parentProvider: e, bindParent: n, index: r } = In(kh);
  return rr(!!n, "TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
function Ez() {
  const { childProviders: e, bindChildren: n, length: r } = Bn($h);
  return {
    length: r,
    lists: e,
    bindLists: n
  };
}
function Iz() {
  const { parentProvider: e, bindParent: n, index: r } = In($h);
  return {
    index: r,
    tabItem: e,
    bindTabItem: n
  };
}
var Bz = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: Dz, n: Mz, classes: Az } = oe("list");
function Nz(e, n) {
  const r = x("var-loading"), t = _e("ripple");
  return b(), k("div", {
    ref: "listEl",
    class: g(e.classes(e.n(), e.n("$--box")))
  }, [
    H(e.$slots, "default"),
    e.loading ? H(e.$slots, "loading", { key: 0 }, () => {
      var o;
      return [L("div", { class: g(e.n("loading")) }, [L("div", { class: g(e.n("loading-text")) }, ve((o = e.loadingText) != null ? o : (e.pt ? e.pt : e.t)("listLoadingText")), 3), j(r, {
        size: "mini",
        radius: 10
      })], 2)];
    }) : q("v-if", !0),
    e.finished ? H(e.$slots, "finished", { key: 1 }, () => {
      var o;
      return [L("div", { class: g(e.n("finished")) }, ve((o = e.finishedText) != null ? o : (e.pt ? e.pt : e.t)("listFinishedText")), 3)];
    }) : q("v-if", !0),
    e.error ? H(e.$slots, "error", { key: 2 }, () => {
      var o;
      return [Ke((b(), k("div", {
        class: g(e.n("error")),
        onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
      }, [Le(ve((o = e.errorText) != null ? o : (e.pt ? e.pt : e.t)("listErrorText")), 1)], 2)), [[t]])];
    }) : q("v-if", !0),
    L("div", {
      ref: "detectorEl",
      class: g(e.n("detector"))
    }, null, 2)
  ], 2);
}
var Ch = te({
  name: Dz,
  directives: { Ripple: vn },
  components: { VarLoading: Ct },
  props: wh,
  setup(e) {
    const n = P(null), r = P(null), { tabItem: t, bindTabItem: o } = Iz(), { t: a } = kr();
    let i;
    S(o, {}), t && me(() => t.current.value, d), me(() => [
      e.loading,
      e.error,
      e.finished
    ], d), En(() => {
      i = dt(n.value), i.addEventListener("scroll", d), e.immediateCheck && d();
    }), Gt(u);
    function l() {
      S(e["onUpdate:error"], !1), S(e["onUpdate:loading"], !0), S(e.onLoad);
    }
    function s() {
      const { bottom: c } = kn(i), { bottom: f } = kn(r.value);
      return Math.floor(f) - fn(e.offset) <= c;
    }
    function u() {
      i && i.removeEventListener("scroll", d);
    }
    function d() {
      return Bz(this, null, function* () {
        yield Ne(), !(e.loading || e.finished || e.error || t?.current.value === !1 || !s()) && l();
      });
    }
    return {
      listEl: n,
      detectorEl: r,
      pt: a,
      t: gn,
      isNumber: nr,
      load: l,
      check: d,
      n: Mz,
      classes: Az
    };
  }
});
Ch.render = Nz;
var Gi = Ch;
de(Gi);
fe(Gi, wh);
var PN = Gi, Js = Gi, Rz = {
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
}, { name: Vz, classes: Lz, n: iv } = oe("loading-bar"), Fz = te({
  name: Vz,
  props: Rz,
  setup(e) {
    return () => j("div", {
      class: Lz(iv(), [e.error, iv("--error")]),
      style: {
        zIndex: vr.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: ze(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: ze(e.top),
        transitionDuration: e.transitionDuration == null ? void 0 : `${e.transitionDuration}ms`
      }
    }, null);
  }
}), ud = 200, Sh, Ph, Oh, zh, Zi, lv, Th = {}, Cn = $n({
  value: 0,
  opacity: 0,
  error: !1
});
function Hz(e) {
  Object.assign(Cn, e), Th = e;
}
var Uz = () => {
  Object.keys(Th).forEach((e) => {
    Cn[e] !== void 0 && (Cn[e] = void 0);
  });
}, Eh = () => {
  lv || (lv = !0, Jt(Fz, Cn));
}, dd = () => {
  Sh = window.setTimeout(() => {
    Cn.transitionDuration = void 0, !(Cn.value >= 95) && (Cn.value += Cn.value < 70 ? Math.round(5 * Math.random()) : Math.random(), dd());
  }, 200);
}, cd = () => {
  window.clearTimeout(Sh), window.clearTimeout(Zi), window.clearTimeout(Oh), window.clearTimeout(Ph), window.clearTimeout(zh);
}, Ih = () => {
  cd(), Cn.value = 100, Zi = window.setTimeout(() => {
    Cn.opacity = 0, zh = window.setTimeout(() => {
      Cn.error = !1;
    }, 250);
  }, ud + 100);
}, jz = () => {
  cd(), Cn.error = !1, Cn.value = 0, Cn.transitionDuration = 0, Eh(), Zi = window.setTimeout(() => {
    Cn.opacity = 1;
  }, ud), dd();
}, Yz = () => {
  var e;
  Oh = window.setTimeout(Ih, (e = Cn.finishDelay) != null ? e : 0);
}, Kz = () => {
  cd(), Cn.error = !0, Cn.value === 100 && (Cn.value = 0, Cn.transitionDuration = 0), Eh(), Zi = window.setTimeout(() => {
    Cn.opacity = 1;
  }, ud), dd(), Ph = window.setTimeout(Ih, 300);
}, Bh = {
  start: jz,
  finish: Yz,
  error: Kz,
  setDefaultOptions: Hz,
  resetDefaultOptions: Uz
}, ON = Bh, Qs = Bh, Dh = {
  tag: {
    type: String,
    default: "div"
  },
  locale: {
    type: String,
    default: "zh-CN"
  },
  messages: { type: Object }
}, Wz = Object.defineProperty, qz = Object.defineProperties, Xz = Object.getOwnPropertyDescriptors, sv = Object.getOwnPropertySymbols, Gz = Object.prototype.hasOwnProperty, Zz = Object.prototype.propertyIsEnumerable, uv = (e, n, r) => n in e ? Wz(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Jz = (e, n) => {
  for (var r in n || (n = {})) Gz.call(n, r) && uv(e, r, n[r]);
  if (sv)
    for (var r of sv(n)) Zz.call(n, r) && uv(e, r, n[r]);
  return e;
}, Qz = (e, n) => qz(e, Xz(n)), { name: xz, n: _z } = oe("locale-provider"), Ji = te({
  name: xz,
  props: Dh,
  setup(e, { slots: n }) {
    const r = C(() => {
      var o;
      return Object.entries((o = e.messages) != null ? o : {}).reduce((a, [i, l]) => (a[i] = Qz(Jz({}, l), { lang: i }), a), {});
    });
    oy({ t });
    function t(o) {
      if (mo(r.value, e.locale) && mo(r.value[e.locale], o)) return r.value[e.locale][o];
    }
    return () => Fn(e.tag, { class: _z() }, S(n.default));
  }
});
de(Ji);
fe(Ji, Dh);
var zN = Ji, xs = Ji, Mh = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  option: Object
}, Ah = /* @__PURE__ */ Symbol("SELECT_BIND_OPTION_KEY");
function e6() {
  const { length: e, childProviders: n, bindChildren: r } = Bn(Ah);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function n6() {
  const { index: e, parentProvider: n, bindParent: r } = In(Ah);
  return rr(!!r, "Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var { name: r6, n: t6, classes: o6 } = oe("option"), a6 = ["tabindex"];
function i6(e, n) {
  const r = x("var-checkbox"), t = x("maybe-v-node"), o = x("var-hover-overlay"), a = _e("ripple"), i = _e("hover");
  return Ke((b(), k("div", {
    ref: "root",
    class: g(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
    style: J({ color: e.optionSelected ? e.focusColor : void 0 }),
    tabindex: e.disabled ? void 0 : "-1",
    onFocus: n[2] || (n[2] = (l) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (l) => e.isFocusing = !1),
    onClick: n[4] || (n[4] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    L("div", {
      class: g(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
      style: J({ background: e.optionSelected ? e.focusColor : void 0 })
    }, null, 6),
    e.multiple ? (b(), we(r, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => e.optionSelected = l),
      "checked-color": e.focusColor,
      disabled: e.disabled,
      onClick: n[1] || (n[1] = Rn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, [
      "modelValue",
      "checked-color",
      "disabled",
      "onChange"
    ])) : q("v-if", !0),
    H(e.$slots, "default", { selected: e.optionSelected }, () => [L("div", { class: g(e.classes(e.n("text"), e.n("$--ellipsis"))) }, [j(t, { is: e.labelVNode }, null, 8, ["is"])], 2)]),
    j(o, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 46, a6)), [
    [yr, e.visible],
    [a, { disabled: e.disabled || !e.ripple }],
    [
      i,
      e.handleHovering,
      "desktop"
    ]
  ]);
}
var Nh = te({
  name: r6,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarCheckbox: ct,
    VarHoverOverlay: Gn,
    MaybeVNode: lr
  },
  props: Mh,
  setup(e) {
    const n = P(), r = P(!1), t = P(!1), o = C(() => {
      var I;
      return (I = e.option) != null ? I : {
        label: e.label,
        value: e.value,
        disabled: e.disabled
      };
    }), a = C(() => t.value), i = C(() => e.value), l = C(() => e.disabled), s = C(() => e.ripple), { select: u, bindSelect: d } = n6(), { pattern: c, showMenu: f, filterable: v, multiple: p, focusColor: h, onSelect: m, computeLabel: y, filter: $ } = u, { hovering: w, handleHovering: z } = ur(), T = C(() => {
      var I;
      return Yn(e.label) ? e.label((I = e.option) != null ? I : {
        label: e.label,
        value: e.value,
        disabled: e.disabled
      }, t.value) : e.label;
    }), O = P(!0), R = C(() => !v.value || !c.value ? !0 : $(c.value, o.value)), U = C(() => f.value ? R.value : O.value), M = {
      label: T,
      value: i,
      disabled: l,
      ripple: s,
      selected: a,
      sync: A
    };
    me([() => e.label, () => e.value], y), me(() => [f.value, R.value], () => {
      f.value && (O.value = R.value);
    }, { immediate: !0 }), d(M), xe(() => window, "keydown", E), xe(() => window, "keyup", B);
    function D() {
      e.disabled || N();
    }
    function E(I) {
      r.value && ((I.key === " " || I.key === "Enter") && Ze(I), I.key === "Enter" && n.value.click());
    }
    function B(I) {
      r.value && I.key === " " && (Ze(I), n.value.click());
    }
    function N() {
      p.value && (t.value = !t.value), m(M);
    }
    function A(I) {
      t.value = I;
    }
    return {
      root: n,
      optionSelected: t,
      visible: U,
      multiple: p,
      focusColor: h,
      hovering: w,
      isFocusing: r,
      labelVNode: T,
      n: t6,
      classes: o6,
      handleHovering: z,
      handleClick: D,
      handleSelect: N
    };
  }
});
Nh.render = i6;
var Qi = Nh;
de(Qi);
fe(Qi, Mh);
var TN = Qi, Da = Qi, l6 = Object.defineProperty, s6 = Object.defineProperties, u6 = Object.getOwnPropertyDescriptors, dv = Object.getOwnPropertySymbols, d6 = Object.prototype.hasOwnProperty, c6 = Object.prototype.propertyIsEnumerable, cv = (e, n, r) => n in e ? l6(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, f6 = (e, n) => {
  for (var r in n || (n = {})) d6.call(n, r) && cv(e, r, n[r]);
  if (dv)
    for (var r of dv(n)) c6.call(n, r) && cv(e, r, n[r]);
  return e;
}, v6 = (e, n) => s6(e, u6(n)), Rh = v6(f6({
  modelValue: {
    type: String,
    default: ""
  },
  length: {
    type: [String, Number],
    default: 6
  },
  type: {
    type: String,
    default: "digit"
  },
  mask: Boolean,
  maskSymbol: {
    type: String,
    default: "•"
  },
  cellHeight: {
    type: [String, Number],
    default: 48
  },
  cellMaxWidth: {
    type: [String, Number],
    default: 48
  },
  disabled: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  gutter: {
    type: [String, Number],
    default: 8
  },
  align: {
    type: String,
    default: "center"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onComplete"]
  },
  rules: [
    Array,
    Function,
    Object
  ],
  allowPaste: {
    type: Boolean,
    default: !0
  },
  pasteTransform: Function,
  onInput: V(),
  onClick: V(),
  onPaste: V(),
  onComplete: V(),
  "onUpdate:modelValue": V()
}, Fe(Ro, [
  "textColor",
  "focusColor",
  "blurColor"
])), { variant: {
  type: String,
  default: "outlined"
} }), p6 = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: m6, n: Wl, classes: g6 } = oe("otp-input"), h6 = ["data-index"];
function b6(e, n) {
  const r = x("var-input"), t = x("var-form-details");
  return b(), k("div", {
    ref: "rootEl",
    class: g(e.classes(e.n(), e.n("$--box"), e.n(`--align-${e.align}`))),
    style: J({
      "--otp-input-gutter": e.gutterStyle,
      "--otp-input-cell-height": e.cellHeightStyle,
      "--otp-input-cell-max-width": e.cellMaxWidthStyle
    }),
    onClick: n[1] || (n[1] = (...o) => e.handleClick && e.handleClick(...o)),
    onKeydown: n[2] || (n[2] = (...o) => e.handleKeydown && e.handleKeydown(...o)),
    onPaste: n[3] || (n[3] = (...o) => e.handlePaste && e.handlePaste(...o))
  }, [L("div", { class: g(e.n("cells")) }, [(b(!0), k(Be, null, Ye(e.cellIndexes, (o, a) => (b(), k(Be, { key: a }, [L("div", {
    class: g(e.n("cell")),
    "data-index": a
  }, [j(r, {
    ref_for: !0,
    ref: (i) => e.setInputRef(i, a),
    "model-value": e.getDisplayChar(a),
    type: e.nativeInputType,
    autocomplete: "one-time-code",
    placeholder: "",
    hint: !1,
    variant: e.variant,
    "text-color": e.textColor,
    "focus-color": e.focusColor,
    "blur-color": e.blurColor,
    disabled: e.formDisabled || e.disabled,
    readonly: e.formReadonly || e.readonly,
    inputmode: e.resolvedInputmode,
    "is-force-focusing-effect": e.activeIndex === a,
    "is-force-error-effect": !!e.errorMessage,
    "is-show-form-details": !1,
    onFocus: () => e.handleFocus(a),
    onBlur: n[0] || (n[0] = (i) => e.handleBlur(i)),
    onInput: (i) => e.handleCellInput(a, i)
  }, null, 8, [
    "model-value",
    "type",
    "variant",
    "text-color",
    "focus-color",
    "blur-color",
    "disabled",
    "readonly",
    "inputmode",
    "is-force-focusing-effect",
    "is-force-error-effect",
    "onFocus",
    "onInput"
  ])], 10, h6), e.shouldRenderSeparator(a) ? (b(), k("div", {
    key: 0,
    class: g(e.n("separator"))
  }, [H(e.$slots, "separator", { index: a })], 2)) : q("v-if", !0)], 64))), 128))], 2), j(t, {
    class: g(e.n("details")),
    "var-otp-input-cover": "",
    "error-message": e.errorMessage
  }, null, 8, ["class", "error-message"])], 38);
}
var Vh = te({
  name: m6,
  components: {
    VarFormDetails: Hn,
    VarInput: Vo
  },
  props: Rh,
  setup(e) {
    const n = w0(), r = P(null), t = P([]), o = P(-1), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Jn(), { bindForm: u, form: d } = Kn(), c = C(() => Z(e.length)), f = C(() => {
      var ee;
      return (ee = U(e.maskSymbol)[0]) != null ? ee : "•";
    }), v = C(() => M(e.modelValue)), p = C(() => Array.from({ length: c.value })), h = C(() => ze(e.gutter)), m = C(() => ze(e.cellHeight)), y = C(() => ze(e.cellMaxWidth)), $ = C(() => e.type === "digit" ? "numeric" : void 0), w = C(() => e.type === "digit" ? "tel" : "text"), z = C(() => {
      var ee;
      return (ee = d?.disabled.value) != null ? ee : !1;
    }), T = C(() => {
      var ee;
      return (ee = d?.readonly.value) != null ? ee : !1;
    });
    let O = null, R = !1;
    u?.({
      validate: ce,
      resetValidation: s,
      reset: G
    }), En(() => {
      e.autofocus && ae();
    });
    function U(ee) {
      return Array.from(ee);
    }
    function M(ee) {
      return D(ee).slice(0, c.value);
    }
    function D(ee) {
      switch (e.type) {
        case "digit":
          return ee.replace(/\D+/g, "");
        case "alphanumeric":
          return U(ee).filter((K) => /[A-Za-z0-9]/.test(K)).join("");
        default:
          return ee;
      }
    }
    function E() {
      return U(v.value);
    }
    function B(ee) {
      var K;
      const re = (K = E()[ee]) != null ? K : "";
      return re ? e.mask ? f.value : re : "";
    }
    function N(ee, K) {
      t.value[K] = ee && "$" in ee ? ee : null;
    }
    function A(ee) {
      return ee >= c.value - 1 || !n.separator ? !1 : Va(n.separator({ index: ee })).length > 0;
    }
    function I(ee, K = v.value) {
      Ne(() => {
        i(e.validateTrigger, ee, e.rules, K);
      });
    }
    function F(ee) {
      U(ee).length === c.value && (S(e.onComplete, ee), I("onComplete", ee));
    }
    function Q(ee, K) {
      if (ee === v.value) {
        ne(K);
        return;
      }
      S(e["onUpdate:modelValue"], ee), S(e.onInput, ee), I("onInput", ee), F(ee);
    }
    function X(ee) {
      return p6(this, null, function* () {
        var K, re, ye, Pe, Ge;
        const rn = hn(ee, 0, c.value - 1);
        (re = (K = t.value[rn]) == null ? void 0 : K.focus) == null || re.call(K), yield it(), document.activeElement === ((ye = t.value[rn]) == null ? void 0 : ye.el) && ((Ge = (Pe = t.value[rn]) == null ? void 0 : Pe.select) == null || Ge.call(Pe));
      });
    }
    function ae(ee) {
      X(ee ?? Math.min(E().length, c.value - 1));
    }
    function Te() {
      t.value.forEach((ee) => {
        var K;
        (K = ee?.blur) == null || K.call(ee);
      });
    }
    function ce() {
      return l(e.rules, v.value);
    }
    function G() {
      v.value !== "" && S(e["onUpdate:modelValue"], ""), s();
    }
    function ne(ee) {
      var K;
      const re = (K = t.value[ee]) == null ? void 0 : K.el;
      re && (re.value = B(ee));
    }
    function pe() {
      p.value.forEach((ee, K) => {
        ne(K);
      });
    }
    function Oe(ee) {
      O = ee, !R && (R = !0, Ne(() => {
        R = !1, O != null && (o.value = O, X(O), O = null);
      }));
    }
    function Y(ee, K) {
      const re = E(), ye = hn(ee, 0, re.length), Pe = [...re], Ge = K.slice(0, c.value - ye);
      Ge.forEach((rn, mn) => {
        Pe[ye + mn] = rn;
      }), Q(Pe.join("").slice(0, c.value), ye), Oe(hn(ye + Ge.length, 0, c.value - 1));
    }
    function ie(ee, K = hn(ee, 0, c.value - 1)) {
      const re = E();
      re.splice(ee, 1), Q(re.join(""), ee), Oe(K);
    }
    function Ee(ee) {
      const K = E();
      if (!K[ee]) {
        if (ee <= 0) {
          pe();
          return;
        }
        ie(ee - 1, ee - 1);
        return;
      }
      ie(ee, ee !== K.length - 1 && ee > 0 ? ee - 1 : hn(ee, 0, c.value - 1));
    }
    function Ue(ee) {
      if (e.disabled || z.value) return;
      const K = ee.target, re = K?.closest(`.${Wl("cell")}`), ye = re?.dataset.index;
      S(e.onClick, ee), I("onClick"), ye != null && X(Number(ye));
    }
    function nn(ee) {
      o.value = ee, X(ee);
    }
    function qe(ee) {
      var K;
      const re = ee.relatedTarget;
      (!re || !((K = r.value) != null && K.contains(re))) && (o.value = -1);
    }
    function en(ee, K) {
      const re = U(D(K)), ye = E(), Pe = ee > ye.length;
      if (re.length === 0) {
        if (Pe) {
          Oe(ye.length), ne(ee);
          return;
        }
        K === "" ? ie(ee) : (ne(ee), Oe(ee));
        return;
      }
      if (Pe) {
        Y(ye.length, re);
        return;
      }
      Y(ee, re);
    }
    function on(ee) {
      var K, re;
      if (!e.allowPaste || z.value || T.value || e.disabled || e.readonly) return;
      const ye = (re = (K = ee.clipboardData) == null ? void 0 : K.getData("text")) != null ? re : "";
      if (!ye) return;
      ee.preventDefault();
      const Pe = D(e.pasteTransform ? e.pasteTransform(ye) : ye);
      if (S(e.onPaste, Pe, ee), I("onPaste", Pe), !Pe) {
        pe();
        return;
      }
      Y(0, U(Pe));
    }
    function be(ee) {
      if (z.value || T.value || e.disabled || e.readonly) return;
      const K = ee.target, re = K?.closest(`.${Wl("cell")}`), ye = re?.dataset.index;
      if (ye == null) return;
      const Pe = Number(ye);
      if (ee.key === "Backspace" && E().length > 0) {
        ee.preventDefault(), Ee(Pe);
        return;
      }
      if (ee.key === "ArrowLeft" && Pe > 0) {
        ee.preventDefault(), X(Pe - 1);
        return;
      }
      if (ee.key === "ArrowRight" && Pe < c.value - 1) {
        ee.preventDefault(), X(Pe + 1);
        return;
      }
    }
    return {
      rootEl: r,
      activeIndex: o,
      errorMessage: a,
      formDisabled: z,
      formReadonly: T,
      cellIndexes: p,
      gutterStyle: h,
      cellHeightStyle: m,
      cellMaxWidthStyle: y,
      resolvedInputmode: $,
      nativeInputType: w,
      align: e.align,
      n: Wl,
      classes: g6,
      setInputRef: N,
      getDisplayChar: B,
      shouldRenderSeparator: A,
      handleClick: Ue,
      handleFocus: nn,
      handleBlur: qe,
      handleCellInput: en,
      handleKeydown: be,
      handlePaste: on,
      focus: ae,
      blur: Te,
      reset: G,
      validate: ce,
      resetValidation: s
    };
  }
});
Vh.render = b6;
var xi = Vh;
de(xi);
fe(xi, Rh);
var EN = xi, _s = xi, Lh = {
  show: Boolean,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: [
    String,
    Object,
    Boolean
  ],
  closeOnKeyEscape: {
    type: Boolean,
    default: !0
  },
  onClick: V(),
  onKeyEscape: V(),
  "onUpdate:show": V()
}, { name: y6, n: ta } = oe("overlay"), _i = te({
  name: y6,
  inheritAttrs: !1,
  props: Lh,
  setup(e, { slots: n, attrs: r }) {
    const { zIndex: t } = Ao(() => e.show, 3), { onStackTop: o } = Wu(() => e.show, t), { disabled: a } = zt();
    Mo(() => e.show, () => e.lockScroll), xe(() => window, "keydown", i);
    function i(d) {
      !o() || d.key !== "Escape" || !e.show || (S(e.onKeyEscape), e.closeOnKeyEscape && (Ze(d), S(e["onUpdate:show"], !1)));
    }
    function l() {
      S(e.onClick), S(e["onUpdate:show"], !1);
    }
    function s() {
      return j("div", Xe({
        class: ta(),
        style: { zIndex: t.value - 2 }
      }, r), [j("div", {
        class: ta("overlay"),
        style: { zIndex: t.value - 1 },
        onClick: l
      }, null), j("div", {
        class: ta("content"),
        style: { zIndex: t.value }
      }, [S(n.default)])]);
    }
    function u() {
      return j(bn, { name: ta("--fade") }, { default: () => [e.show && s()] });
    }
    return () => {
      const { teleport: d } = e;
      return d ? j(Hr, {
        to: d,
        disabled: a.value
      }, { default: () => [u()] }) : u();
    };
  }
});
de(_i);
fe(_i, Lh);
var IN = _i, eu = _i, Fh = {
  elevation: {
    type: [
      Boolean,
      Number,
      String
    ],
    default: !1
  },
  ripple: {
    type: [Boolean, Object],
    default: !1
  },
  radius: [Number, String],
  width: [Number, String],
  height: [Number, String],
  round: Boolean,
  inline: Boolean,
  variant: {
    type: String,
    default: "standard"
  },
  surface: String,
  hoverable: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: V()
}, { name: w6, n: k6, classes: $6 } = oe("paper");
function C6(e, n) {
  const r = x("var-hover-overlay"), t = _e("ripple"), o = _e("hover");
  return Ke((b(), k("div", {
    class: g(e.classes(e.n(), e.n("$--box"), [e.variant === "standard", e.formatElevation(e.elevation, 2)], [e.onClick || !e.normalizedHoverable.disabled, e.n("--cursor")], [e.round, e.n("--round")], [e.surfaceLow, e.n("--surface-low")], [e.variant === "outlined", e.n("--outlined")], [e.variant === "filled", e.n("--filled")], [e.inline, e.n("$--inline-flex")])),
    style: J({
      width: e.toSizeUnit(e.width),
      height: e.toSizeUnit(e.height),
      "border-radius": e.toSizeUnit(e.radius)
    }),
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [H(e.$slots, "default"), j(r, {
    hovering: e.normalizedHoverable.disabled ? !1 : e.hovering,
    color: e.normalizedHoverable.color
  }, null, 8, ["hovering", "color"])], 6)), [[t, {
    disabled: e.normalizedRipple.disabled,
    color: e.normalizedRipple.color
  }], [
    o,
    e.handleHovering,
    "desktop"
  ]]);
}
var Hh = te({
  name: w6,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: { VarHoverOverlay: Gn },
  props: Fh,
  setup(e) {
    const n = C(() => e.surface === "low" && e.variant !== "filled"), { hovering: r, handleHovering: t } = ur(), o = C(() => i(e.ripple)), a = C(() => l(e.hoverable));
    function i(u) {
      return Tn(u) ? {
        disabled: !!u.disabled,
        color: u.color
      } : {
        disabled: !u,
        color: void 0
      };
    }
    function l(u) {
      return Tn(u) ? {
        disabled: !!u.disabled,
        color: u.color
      } : {
        disabled: !u,
        color: void 0
      };
    }
    function s(u) {
      S(e.onClick, u);
    }
    return {
      n: k6,
      classes: $6,
      formatElevation: Pn,
      surfaceLow: n,
      normalizedRipple: o,
      normalizedHoverable: a,
      hovering: r,
      handleHovering: t,
      toSizeUnit: ze,
      handleClick: s
    };
  }
});
Hh.render = C6;
var el = Hh;
de(el);
fe(el, Fh);
var BN = el, nu = el, S6 = Object.defineProperty, fv = Object.getOwnPropertySymbols, P6 = Object.prototype.hasOwnProperty, O6 = Object.prototype.propertyIsEnumerable, vv = (e, n, r) => n in e ? S6(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, z6 = (e, n) => {
  for (var r in n || (n = {})) P6.call(n, r) && vv(e, r, n[r]);
  if (fv)
    for (var r of fv(n)) O6.call(n, r) && vv(e, r, n[r]);
  return e;
}, Uh = z6({
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
  dynamic: Boolean,
  onChange: V(),
  onConfirm: V(),
  onCancel: V(),
  "onUpdate:modelValue": V()
}, Fe(Qt, [
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
])), { name: T6, n: E6, classes: I6 } = oe("picker"), pv = 300, B6 = 15, mv = 200, D6 = 1e3, gv = 0, M6 = [
  "onTouchstartPassive",
  "onTouchmove",
  "onTouchend"
], A6 = ["onTransitionend"], N6 = ["onClick"];
function R6(e, n) {
  const r = x("var-button");
  return b(), we(Xt(e.dynamic ? e.n("$-popup") : e.Transition), Xe(e.dynamic ? {
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
  } : null, { "var-picker-cover": "" }), {
    default: ue(() => [L("div", Xe({ class: e.n() }, e.$attrs), [e.toolbar ? (b(), k("div", {
      key: 0,
      class: g(e.n("toolbar"))
    }, [
      H(e.$slots, "cancel", {}, () => [j(r, {
        class: g(e.n("cancel-button")),
        "var-picker-cover": "",
        text: "",
        "text-color": e.cancelButtonTextColor,
        onClick: e.cancel
      }, {
        default: ue(() => {
          var t;
          return [Le(ve((t = e.cancelButtonText) != null ? t : (e.pt ? e.pt : e.t)("pickerCancelButtonText")), 1)];
        }),
        _: 1
      }, 8, [
        "class",
        "text-color",
        "onClick"
      ])]),
      H(e.$slots, "title", {}, () => {
        var t;
        return [L("div", { class: g(e.n("title")) }, ve((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("pickerTitle")), 3)];
      }),
      H(e.$slots, "confirm", {}, () => [j(r, {
        class: g(e.n("confirm-button")),
        text: "",
        "var-picker-cover": "",
        "text-color": e.confirmButtonTextColor,
        onClick: e.confirm
      }, {
        default: ue(() => {
          var t;
          return [Le(ve((t = e.confirmButtonText) != null ? t : (e.pt ? e.pt : e.t)("pickerConfirmButtonText")), 1)];
        }),
        _: 1
      }, 8, [
        "class",
        "text-color",
        "onClick"
      ])])
    ], 2)) : q("v-if", !0), L("div", {
      class: g(e.n("columns")),
      style: J({ height: `${e.columnHeight}px` })
    }, [
      (b(!0), k(Be, null, Ye(e.scrollColumns, (t) => (b(), k("div", {
        key: t.id,
        class: g(e.n("column")),
        onTouchstartPassive: (o) => e.handleTouchstart(o, t),
        onTouchmove: Rn((o) => e.handleTouchmove(o, t), ["prevent"]),
        onTouchend: (o) => e.handleTouchend(t)
      }, [L("div", {
        ref_for: !0,
        ref: (o) => e.setScrollEl(o, t),
        class: g(e.n("scroller")),
        style: J({
          transform: `translateY(${t.translate}px)`,
          transitionDuration: `${t.duration}ms`,
          transitionProperty: t.duration ? "transform" : "none"
        }),
        onTransitionend: (o) => e.handleTransitionend(t)
      }, [(b(!0), k(Be, null, Ye(t.column, (o, a) => (b(), k("div", {
        key: e.getValue(o),
        class: g(e.classes(e.n("option"), o.className)),
        style: J({ height: `${e.optionHeight}px` }),
        onClick: (i) => e.handleClick(t, a)
      }, [L("div", { class: g(e.classes(e.n("text"), o.textClassName)) }, ve(o[e.getOptionKey("text")]), 3)], 14, N6))), 128))], 46, A6)], 42, M6))), 128)),
      L("div", {
        class: g(e.n("picked")),
        style: J({
          top: `${e.center}px`,
          height: `${e.optionHeight}px`
        })
      }, null, 6),
      L("div", {
        class: g(e.n("mask")),
        style: J({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
      }, null, 6)
    ], 6)], 16)]),
    _: 3
  }, 16);
}
var jh = te({
  name: T6,
  components: {
    VarButton: tr,
    VarPopup: ut
  },
  inheritAttrs: !1,
  props: Uh,
  setup(e) {
    const n = wn(e, "modelValue"), r = P([]), t = C(() => Z(e.columnsCount)), o = C(() => fn(e.optionHeight)), a = C(() => fn(e.optionCount)), i = C(() => a.value * o.value / 2 - o.value / 2), l = C(() => a.value * o.value), { prevY: s, moveY: u, dragging: d, startTouch: c, moveTouch: f, endTouch: v } = Zt(), { t: p } = kr();
    let h = [];
    R(), me(() => e.columns, R, { deep: !0 }), me(() => n.value, R);
    function m(Y) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[Y];
    }
    function y(Y) {
      var ie;
      return (ie = Y[m("value")]) != null ? ie : Y[m("text")];
    }
    function $(Y) {
      h = [...Y];
    }
    function w(Y) {
      return (e.columnsCount != null ? Y.slice(0, t.value) : Y).map((ie, Ee) => {
        const Ue = {
          id: gv++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: ie,
          scrollEl: null,
          scrolling: !1
        }, nn = n.value[Ee], qe = Ue.column.findIndex((en) => nn === y(en));
        return Ue.index = qe === -1 ? 0 : qe, A(Ue), Ue;
      });
    }
    function z(Y) {
      const ie = [];
      return T(ie, Y), ie;
    }
    function T(Y, ie, Ee = !0, Ue = 1) {
      var nn;
      if (ie.length && (e.columnsCount == null || Ue <= t.value)) {
        const qe = {
          id: gv++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: ie,
          scrollEl: null,
          scrolling: !1
        };
        if (Y.push(qe), Ee) {
          const en = n.value[Y.length - 1], on = ie.findIndex((be) => en === y(be));
          qe.index = on === -1 ? 0 : on;
        }
        A(qe), T(Y, (nn = qe.column[qe.index][m("children")]) != null ? nn : [], Ee, Ue + 1);
      }
    }
    function O(Y) {
      var ie;
      r.value.splice(r.value.indexOf(Y) + 1), T(r.value, (ie = Y.column[Y.index][m("children")]) != null ? ie : [], !1, r.value.length + 1);
    }
    function R() {
      r.value = e.cascade ? z(e.columns) : w(e.columns);
      const { indexes: Y } = N();
      $(Y);
    }
    function U(Y, ie) {
      ie.scrollEl = Y;
    }
    function M(Y) {
      S(e["onUpdate:show"], Y);
    }
    function D(Y) {
      const ie = i.value - Y.column.length * o.value, Ee = o.value + i.value;
      Y.translate = hn(Y.translate, ie, Ee);
    }
    function E(Y, ie) {
      return $0(Math.round((i.value - ie) / o.value), Y.column);
    }
    function B(Y) {
      return Y.translate = i.value - Y.index * o.value, Y.translate;
    }
    function N() {
      const Y = [], ie = [], Ee = [];
      return r.value.forEach(({ column: Ue, index: nn }) => {
        const qe = Ue[nn];
        Y.push(y(qe)), ie.push(nn), Ee.push(qe);
      }), {
        values: Y,
        indexes: ie,
        options: Ee
      };
    }
    function A(Y, ie = 0) {
      B(Y), Y.duration = ie;
    }
    function I(Y, ie, Ee) {
      Y.translate += Math.abs(ie / Ee) / 3e-3 * (ie < 0 ? -1 : 1);
    }
    function F(Y, ie) {
      d.value || (Y.index = ie, A(Y, mv));
    }
    function Q(Y, ie) {
      ie.touching = !0, ie.translate = Nl(ie.scrollEl), c(Y);
    }
    function X(Y, ie) {
      if (!ie.touching) return;
      f(Y), ie.scrolling = !1, ie.duration = 0, ie.prevY = s.value, ie.translate += u.value, D(ie);
      const Ee = performance.now();
      Ee - ie.momentumTime > pv && (ie.momentumTime = Ee, ie.momentumPrevY = ie.translate);
    }
    function ae(Y) {
      v(), Y.touching = !1, Y.prevY = 0;
      const ie = Y.translate - Y.momentumPrevY, Ee = performance.now() - Y.momentumTime, Ue = Math.abs(ie) >= B6 && Ee <= pv, nn = Y.translate;
      Ue && I(Y, ie, Ee), Y.index = E(Y, Y.translate), A(Y, Ue ? D6 : mv), Y.scrolling = Y.translate !== nn, Y.scrolling || G(Y);
    }
    function Te(Y) {
      Y.scrolling = !1, G(Y);
    }
    function ce() {
      const { indexes: Y } = N();
      return Y.every((ie, Ee) => ie === h[Ee]);
    }
    function G(Y) {
      const { onChange: ie, cascade: Ee } = e;
      if (ce()) return;
      Ee && O(Y);
      const Ue = r.value.some((be) => be.scrolling), nn = r.value.some((be) => be.touching);
      if (Ue || nn) return;
      const { values: qe, indexes: en, options: on } = N();
      $(en), S(ie, qe, en, on), n.value = qe;
    }
    function ne() {
      if (e.cascade) {
        const Y = r.value.find((ie) => ie.scrolling);
        Y && (Y.index = E(Y, Nl(Y.scrollEl)), Y.scrolling = !1, A(Y), O(Y));
      } else r.value.forEach((Y) => {
        Y.index = E(Y, Nl(Y.scrollEl)), A(Y);
      });
    }
    function pe() {
      ne();
      const { values: Y, indexes: ie, options: Ee } = N();
      $(ie), S(e.onConfirm, Y, ie, Ee);
    }
    function Oe() {
      ne();
      const { values: Y, indexes: ie, options: Ee } = N();
      $(ie), S(e.onCancel, Y, ie, Ee);
    }
    return {
      optionHeight: o,
      optionCount: a,
      scrollColumns: r,
      columnHeight: l,
      center: i,
      Transition: bn,
      pt: p,
      t: gn,
      n: E6,
      classes: I6,
      setScrollEl: U,
      getOptionKey: m,
      getValue: y,
      handlePopupUpdateShow: M,
      handleTouchstart: Q,
      handleTouchmove: X,
      handleTouchend: ae,
      handleTransitionend: Te,
      confirm: pe,
      cancel: Oe,
      handleClick: F
    };
  }
});
jh.render = R6;
var Wo = jh, Nt;
function _t(e) {
  return new Promise((n) => {
    _t.close();
    const r = $n(We(e) ? { columns: e } : e);
    r.dynamic = !0, r.teleport = "body", Nt = r;
    function t() {
      Nt === r && (Nt = null);
    }
    const { unmountInstance: o } = Jt(Wo, r, {
      onConfirm: (a, i, l) => {
        S(r.onConfirm, a, i, l), n({
          state: "confirm",
          values: a,
          indexes: i,
          options: l
        }), r.show = !1, t();
      },
      onCancel: (a, i, l) => {
        S(r.onCancel, a, i, l), n({
          state: "cancel",
          values: a,
          indexes: i,
          options: l
        }), r.show = !1, t();
      },
      onClose: () => {
        S(r.onClose), n({ state: "close" }), t();
      },
      onClosed: () => {
        S(r.onClosed), o(), t();
      },
      onRouteChange: () => {
        o(), t();
      },
      "onUpdate:show": (a) => {
        r.show = a;
      }
    });
    r.show = !0;
  });
}
_t.close = function() {
  if (Nt == null) return;
  const e = Nt;
  Nt = null, Ne().then(() => {
    e.show = !1;
  });
};
_t.Component = Wo;
de(Wo);
de(Wo, _t);
fe(_t, Uh);
var DN = Wo, ru = _t, Yh = {
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
}, Dt = 100, oa = 0, jr = 20, hv = 2 * Math.PI * jr, { name: V6, n: L6, classes: F6 } = oe("progress"), H6 = ["aria-valuenow"], U6 = ["viewBox"], j6 = { key: 0 }, Y6 = ["id"], K6 = ["offset", "stop-color"], W6 = [
  "d",
  "stroke-width",
  "stroke-dasharray"
], q6 = [
  "d",
  "stroke-width",
  "stroke-dasharray",
  "stroke-dashoffset"
];
function X6(e, n) {
  return b(), k("div", {
    class: g(e.n()),
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": e.indeterminate ? void 0 : e.mode === "linear" ? e.linearProps.value : e.circleProps.value
  }, [e.mode === "linear" ? (b(), k("div", {
    key: 0,
    class: g(e.n("linear"))
  }, [L("div", {
    class: g(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
    style: J({
      height: e.toSizeUnit(e.lineWidth),
      background: e.trackColor
    })
  }, [e.indeterminate ? (b(), k("div", {
    key: 0,
    class: g(e.n("linear-indeterminate"))
  }, [L("div", {
    class: g(e.classes(e.n(`linear--${e.type}`))),
    style: J({ background: e.progressColor })
  }, null, 6), L("div", {
    class: g(e.classes(e.n(`linear--${e.type}`))),
    style: J({ background: e.progressColor })
  }, null, 6)], 2)) : (b(), k("div", {
    key: 1,
    class: g(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`))),
    style: J({
      background: e.progressColor,
      width: e.linearProps.width
    })
  }, null, 6))], 6), e.label ? (b(), k("div", {
    key: 0,
    class: g(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
  }, [H(e.$slots, "default", {}, () => [Le(ve(e.linearProps.roundValue), 1)])], 2)) : q("v-if", !0)], 2)) : q("v-if", !0), e.mode === "circle" ? (b(), k("div", {
    key: 1,
    class: g(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
    style: J({
      width: e.toSizeUnit(e.size),
      height: e.toSizeUnit(e.size)
    })
  }, [(b(), k("svg", {
    class: g(e.n("circle-svg")),
    viewBox: e.circleProps.viewBox
  }, [
    e.isPlainObject(e.color) ? (b(), k("defs", j6, [L("linearGradient", {
      id: e.id,
      x1: "100%",
      y1: "0%",
      x2: "0%",
      y2: "0%"
    }, [(b(!0), k(Be, null, Ye(e.linearGradientProgress, (r, t) => (b(), k("stop", {
      key: t,
      offset: r,
      "stop-color": e.color[r]
    }, null, 8, K6))), 128))], 8, Y6)])) : q("v-if", !0),
    e.track ? (b(), k("path", {
      key: 1,
      class: g(e.n("circle-background")),
      d: e.circleProps.path,
      fill: "transparent",
      "stroke-width": e.circleProps.strokeWidth,
      "stroke-dasharray": e.CIRCUMFERENCE,
      style: J({ stroke: e.trackColor })
    }, null, 14, W6)) : q("v-if", !0),
    L("path", {
      class: g(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
      d: e.circleProps.path,
      fill: "transparent",
      "stroke-width": e.circleProps.strokeWidth,
      "stroke-dasharray": e.CIRCUMFERENCE,
      "stroke-dashoffset": e.circleProps.strokeOffset,
      style: J({
        stroke: e.progressColor,
        transform: `rotateZ(${e.rotate}deg)`,
        transformOrigin: "50% 50%"
      })
    }, null, 14, q6)
  ], 10, U6)), e.label ? (b(), k("div", {
    key: 0,
    class: g(e.classes(e.n("circle-label"), e.labelClass))
  }, [H(e.$slots, "default", {}, () => [Le(ve(e.circleProps.roundValue), 1)])], 2)) : q("v-if", !0)], 6)) : q("v-if", !0)], 10, H6);
}
var Kh = te({
  name: V6,
  props: Yh,
  setup(e) {
    const n = Qv();
    return {
      id: n,
      linearProps: C(() => {
        const r = Z(e.value), t = hn(r, oa, Dt), o = hn(Math.round(r), oa, Dt);
        return {
          width: `${t}%`,
          roundValue: `${o}%`,
          value: t
        };
      }),
      CIRCUMFERENCE: hv,
      RADIUS: jr,
      circleProps: C(() => {
        const { size: r, lineWidth: t, value: o } = e, a = jr / (1 - fn(t) / fn(r)) * 2, i = `0 0 ${a} ${a}`, l = hn(Math.round(Z(o)), oa, Dt), s = `${(Dt - l) / Dt * hv}`, u = fn(t) / fn(r) * a, d = 0, c = -jr, f = 0, v = -2 * jr, p = `M ${a / 2} ${a / 2} m ${d} ${c} a ${jr} ${jr} 
        0 1 1 ${f} ${-v} a ${jr} ${jr} 0 1 1 ${-f} ${v}`;
        return {
          strokeWidth: u,
          viewBox: i,
          strokeOffset: s,
          roundValue: `${l}%`,
          path: p,
          value: hn(Z(o), oa, Dt)
        };
      }),
      progressColor: C(() => Tn(e.color) ? `url(#${n.value})` : e.color),
      linearGradientProgress: C(() => Object.keys(e.color).sort((r, t) => parseFloat(r) - parseFloat(t))),
      n: L6,
      classes: F6,
      toSizeUnit: ze,
      isPlainObject: Tn
    };
  }
});
Kh.render = X6;
var nl = Kh;
de(nl);
fe(nl, Yh);
var MN = nl, tu = nl, Wh = {
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
}, G6 = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: Z6, n: bv, classes: J6 } = oe("pull-refresh"), yv = 150;
function Q6(e, n) {
  const r = x("var-icon");
  return b(), k("div", {
    ref: "freshNode",
    class: g(e.n()),
    onTouchstart: n[0] || (n[0] = (...t) => e.handleTouchstart && e.handleTouchstart(...t)),
    onTouchend: n[1] || (n[1] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
    onTouchcancel: n[2] || (n[2] = (...t) => e.handleTouchend && e.handleTouchend(...t))
  }, [L("div", {
    ref: "controlNode",
    class: g(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
    style: J(e.controlStyle)
  }, [j(r, {
    name: e.iconName,
    transition: e.ICON_TRANSITION,
    class: g(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
    "var-pull-refresh-cover": ""
  }, null, 8, [
    "name",
    "transition",
    "class"
  ])], 6), H(e.$slots, "default")], 34);
}
var qh = te({
  name: Z6,
  components: { VarIcon: Je },
  props: Wh,
  setup(e) {
    const n = P(0), r = P(null), t = P(null), o = P(0), a = P("-125%"), i = P("arrow-down"), l = P("default"), s = P(!1), u = C(() => Math.abs(2 * n.value)), d = C(() => l.value === "success"), c = C(() => l.value !== "loading" && l.value !== "success" && !e.disabled), f = C(() => ({
      transform: `translate3d(0px, ${Sn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: d.value ? e.successBgColor : e.bgColor,
      color: d.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: p, endTouch: h, isReachTop: m } = Zt();
    let y, $;
    me(() => e.modelValue, (D) => {
      D === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
        a.value = n.value, M();
      }, Z(e.successDuration)));
    }), En(U), xe(r, "touchmove", O);
    function w(D) {
      if (i.value !== D)
        return i.value = D, new Promise((E) => {
          window.setTimeout(E, yv);
        });
    }
    function z(D) {
      ("classList" in y ? y : document.body).classList[D](`${bv()}--lock`);
    }
    function T(D) {
      if (v(D), n.value === 0) {
        const { width: E } = kn(t.value);
        n.value = -(E + E * 0.25);
      }
      $ = dt(D.target);
    }
    function O(D) {
      if (p(D), !c.value || !$ || $ !== y && kt($) > 0 || kt(y) > 0) return;
      m(y) && Ze(D), l.value !== "pulling" && (l.value = "pulling", o.value = D.touches[0].clientY), m(y) && nr(a.value) && a.value > n.value && z("add");
      const E = (D.touches[0].clientY - o.value) / 2 + n.value;
      a.value = E >= u.value ? u.value : E, w(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function R() {
      return G6(this, null, function* () {
        h(), c.value && (s.value = !0, Z(a.value) >= u.value * 0.2 ? (yield w("refresh"), l.value = "loading", a.value = u.value * 0.3, S(e["onUpdate:modelValue"], !0), Ne(() => {
          S(e.onRefresh);
        }), z("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, z("remove");
        }, Z(e.animationDuration))), $ = null);
      });
    }
    function U() {
      y = e.target ? $p(e.target, "PullRefresh") : dt(r.value);
    }
    function M() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, Z(e.animationDuration));
    }
    return {
      ICON_TRANSITION: yv,
      refreshStatus: l,
      freshNode: r,
      controlNode: t,
      iconName: i,
      controlStyle: f,
      isSuccess: d,
      n: bv,
      classes: J6,
      handleTouchstart: T,
      handleTouchmove: O,
      handleTouchend: R
    };
  }
});
qh.render = Q6;
var rl = qh;
de(rl);
fe(rl, Wh);
var AN = rl, ou = rl, Xh = {
  modelValue: {
    type: [
      String,
      Number,
      Boolean,
      Object,
      Array
    ],
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
  ariaLabel: {
    type: String,
    default: ""
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
  rules: [
    Array,
    Function,
    Object
  ],
  onChange: V(),
  "onUpdate:modelValue": V()
}, { name: x6, n: _6, classes: e8 } = oe("radio-group"), n8 = ["aria-label"];
function r8(e, n) {
  const r = x("maybe-v-node"), t = x("var-radio"), o = x("var-form-details");
  return b(), k("div", { class: g(e.n("wrap")) }, [L("div", {
    "aria-label": e.ariaLabel,
    role: "radiogroup",
    class: g(e.classes(e.n(), e.n(`--${e.direction}`)))
  }, [e.options.length ? (b(!0), k(Be, { key: 0 }, Ye(e.options, (a) => (b(), we(t, {
    key: a[e.valueKey],
    "checked-value": a[e.valueKey],
    disabled: a.disabled
  }, {
    default: ue(({ checked: i }) => [j(r, { is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey] }, null, 8, ["is"])]),
    _: 2
  }, 1032, ["checked-value", "disabled"]))), 128)) : q("v-if", !0), H(e.$slots, "default")], 10, n8), j(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Gh = te({
  name: x6,
  components: {
    VarFormDetails: Hn,
    VarRadio: Co,
    MaybeVNode: lr
  },
  props: Xh,
  setup(e) {
    const { length: n, radios: r, bindRadios: t } = kP(), { bindForm: o } = Kn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Jn(), u = C(() => a.value), d = P(!1), c = {
      onToggle: m,
      validate: y,
      reset: $,
      resetValidation: s,
      hasChecked: C(() => d.value),
      errorMessage: u
    };
    me(() => e.modelValue, h), me(() => n.value, h), S(o, c), t(c), xe(() => window, "keydown", f);
    function f(w) {
      const z = r.findIndex(({ isFocusing: T }) => T.value);
      if (z !== -1 && r.some(({ moveable: T }, O) => O === z ? !1 : T())) {
        if ([
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight"
        ].includes(w.key) && Ze(w), w.key === "ArrowUp" || w.key === "ArrowLeft") {
          v(z, "prev");
          return;
        }
        (w.key === "ArrowDown" || w.key === "ArrowRight") && v(z, "next");
      }
    }
    function v(w, z) {
      for (; ; ) {
        z === "prev" ? w-- : w++, w < 0 && (w = r.length - 1), w > r.length - 1 && (w = 0);
        const O = r[w];
        if (O.moveable()) {
          O.move();
          break;
        }
      }
    }
    function p(w) {
      Ne(() => {
        const { validateTrigger: z, rules: T, modelValue: O } = e;
        i(z, w, T, O);
      });
    }
    function h() {
      r.forEach(({ sync: w }) => {
        w(e.modelValue) && (d.value = !0);
      });
    }
    function m(w) {
      S(e["onUpdate:modelValue"], w), S(e.onChange, w), p("onChange");
    }
    function y() {
      return l(e.rules, e.modelValue);
    }
    function $() {
      S(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: _6,
      classes: e8,
      reset: $,
      validate: y,
      resetValidation: s,
      isFunction: Yn
    };
  }
});
Gh.render = r8;
var tl = Gh;
de(tl);
fe(tl, Xh);
var NN = tl, au = tl, Zh = {
  active: {
    type: [Number, String],
    default: 0
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  showLabel: {
    type: Boolean,
    default: !0
  },
  bordered: Boolean,
  onChange: V(),
  "onUpdate:active": V()
}, Jh = /* @__PURE__ */ Symbol("RAIL_NAVIGATION_BIND_RAIL_NAVIGATION_ITEM_KEY");
function t8() {
  const { bindChildren: e } = Bn(Jh);
  return { bindRailNavigationItem: e };
}
var { name: o8, n: a8, classes: i8 } = oe("rail-navigation");
function l8(e, n) {
  return b(), k("aside", Xe({ class: e.classes(e.n(), e.n("$--box"), [e.bordered, e.n("--border")]) }, e.$attrs), [
    e.$slots.start ? (b(), k("div", {
      key: 0,
      class: g(e.n("start"))
    }, [H(e.$slots, "start")], 2)) : q("v-if", !0),
    L("nav", { class: g(e.n("content")) }, [H(e.$slots, "default")], 2),
    e.$slots.end ? (b(), k("div", {
      key: 1,
      class: g(e.n("end"))
    }, [H(e.$slots, "end")], 2)) : q("v-if", !0)
  ], 16);
}
var Qh = te({
  name: o8,
  props: Zh,
  setup(e) {
    const n = C(() => e.active), r = C(() => e.ripple), t = C(() => e.showLabel), { bindRailNavigationItem: o } = t8();
    o({
      active: n,
      ripple: r,
      showLabel: t,
      onToggle: a
    });
    function a(i) {
      n.value !== i && (S(e["onUpdate:active"], i), S(e.onChange, i));
    }
    return {
      n: a8,
      classes: i8
    };
  }
});
Qh.render = l8;
var ol = Qh;
de(ol);
fe(ol, Zh);
var RN = ol, iu = ol, xh = {
  name: [Number, String],
  label: String,
  icon: Fe(pn, "name"),
  namespace: Fe(pn, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  disabled: Boolean,
  onClick: V(),
  onMouseenter: V(),
  onMouseleave: V()
};
function s8() {
  const { parentProvider: e, index: n, bindParent: r } = In(Jh);
  return rr(!!r, "RailNavigationItem", "<var-rail-navigation-item/> must in <var-rail-navigation/>"), {
    index: n,
    railNavigation: e,
    bindRailNavigation: r
  };
}
var u8 = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: d8, n: c8, classes: f8 } = oe("rail-navigation-item"), v8 = {
  type: "primary",
  dot: !0
}, p8 = ["aria-disabled"];
function m8(e, n) {
  const r = x("var-icon"), t = x("var-badge"), o = _e("ripple");
  return Ke((b(), k("div", {
    class: g(e.classes(e.n(), [e.isActive, e.n("--active")], [e.disabled, e.n("--disabled")], [e.ripple && !e.disabled, e.n("--ripple-enabled")], [!e.showLabel, e.n("--icon-only")])),
    style: J({ "--rail-navigation-item-transition-duration-override": e.allowTransition && !e.ripple ? void 0 : "0ms" }),
    "aria-disabled": e.disabled,
    role: "button",
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a)),
    onMouseenter: n[1] || (n[1] = (...a) => e.handleMouseenter && e.handleMouseenter(...a)),
    onMouseleave: n[2] || (n[2] = (...a) => e.handleMouseleave && e.handleMouseleave(...a))
  }, [e.$slots.icon || e.icon ? (b(), k("span", {
    key: 0,
    class: g(e.n("indicator"))
  }, [e.badge ? (b(), we(t, Xe({ key: 0 }, e.badgeProps, {
    class: e.n("badge"),
    "var-rail-navigation-item-cover": ""
  }), {
    default: ue(() => [L("span", { class: g(e.n("icon")) }, [H(e.$slots, "icon", { active: e.isActive }, () => [j(r, {
      name: e.icon,
      namespace: e.namespace
    }, null, 8, ["name", "namespace"])])], 2)]),
    _: 3
  }, 16, ["class"])) : (b(), k("span", {
    key: 1,
    class: g(e.n("icon"))
  }, [H(e.$slots, "icon", { active: e.isActive }, () => [j(r, {
    name: e.icon,
    namespace: e.namespace
  }, null, 8, ["name", "namespace"])])], 2))], 2)) : q("v-if", !0), e.showLabel && (e.$slots.default || e.label) ? (b(), k("span", {
    key: 1,
    class: g(e.n("label"))
  }, [H(e.$slots, "default", { active: e.isActive }, () => [Le(ve(e.label), 1)])], 2)) : q("v-if", !0)], 46, p8)), [[o, { disabled: !e.ripple || e.disabled }]]);
}
var _h = te({
  name: d8,
  components: {
    VarBadge: ko,
    VarIcon: Je
  },
  directives: { Ripple: vn },
  props: xh,
  setup(e) {
    const { index: n, railNavigation: r, bindRailNavigation: t } = s8(), { active: o, ripple: a, showLabel: i, onToggle: l } = r, s = C(() => {
      var h;
      return (h = e.name) != null ? h : n.value;
    }), u = C(() => o.value === s.value), d = C(() => e.badge === !0 ? v8 : e.badge), c = P(!1);
    t(null), Tr(() => u8(null, null, function* () {
      yield Xn(), c.value = !0;
    }));
    function f() {
      e.disabled || (S(e.onClick, s.value), S(l, s.value));
    }
    function v() {
      e.disabled || S(e.onMouseenter, s.value);
    }
    function p() {
      e.disabled || S(e.onMouseleave, s.value);
    }
    return {
      isActive: u,
      badgeProps: d,
      ripple: a,
      showLabel: i,
      allowTransition: c,
      n: c8,
      classes: f8,
      handleClick: f,
      handleMouseenter: v,
      handleMouseleave: p
    };
  }
});
_h.render = m8;
var al = _h;
de(al);
fe(al, xh);
var VN = al, lu = al, eb = {
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
  namespace: Fe(pn, "namespace"),
  emptyIconNamespace: Fe(pn, "namespace"),
  halfIconNamespace: Fe(pn, "namespace"),
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
}, { name: g8, n: to } = oe("rate"), h8 = ["onClick"];
function b8(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), o = x("var-form-details"), a = _e("ripple"), i = _e("hover");
  return b(), k("div", { class: g(e.n("wrap")) }, [L("div", { class: g(e.n()) }, [(b(!0), k(Be, null, Ye(e.toNumber(e.count), (l) => Ke((b(), k("div", {
    key: l,
    style: J(e.getStyle(l)),
    class: g(e.getClass(l)),
    onClick: (s) => e.handleClick(l, s)
  }, [L("span", {
    class: g(e.n("content-icon")),
    style: J({ fontSize: e.toSizeUnit(e.size) })
  }, [H(e.$slots, e.getCurrentState(l).slot, {}, () => [j(r, {
    transition: 0,
    namespace: e.getCurrentState(l).namespace,
    name: e.getCurrentState(l).name
  }, null, 8, ["namespace", "name"])])], 6), j(t, { hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled }, null, 8, ["hovering"])], 14, h8)), [[a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    i,
    e.createHoverHandler(l),
    "desktop"
  ]])), 128))], 2), j(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var nb = te({
  name: g8,
  components: {
    VarIcon: Je,
    VarFormDetails: Hn,
    VarHoverOverlay: Gn
  },
  directives: {
    Ripple: vn,
    Hover: jn
  },
  props: eb,
  setup(e) {
    const n = P(-1), { form: r, bindForm: t } = Kn(), { errorMessage: o, validateWithTrigger: a, validate: i, resetValidation: l } = Jn(), { hovering: s } = ur();
    let u = Z(e.modelValue);
    S(t, {
      reset: $,
      validate: p,
      resetValidation: l
    });
    function d(w) {
      const { count: z, gap: T } = e;
      return {
        color: f(w).color,
        marginRight: w !== Z(z) ? ze(T) : 0
      };
    }
    function c(w) {
      const { name: z, color: T } = f(w);
      return {
        [to("content")]: !0,
        [to("--disabled")]: r?.disabled.value || e.disabled,
        [to("--error")]: o.value,
        [to("--primary")]: z !== e.emptyIcon && !T
      };
    }
    function f(w) {
      const { modelValue: z, disabled: T, disabledColor: O, color: R, half: U, emptyColor: M, icon: D, halfIcon: E, emptyIcon: B, namespace: N, halfIconNamespace: A, emptyIconNamespace: I } = e;
      let F = R;
      return (T || r?.disabled.value) && (F = O), w <= z ? {
        color: F,
        name: D,
        namespace: N,
        slot: "icon"
      } : U && w <= z + 0.5 ? {
        color: F,
        name: E,
        namespace: A,
        slot: "half-icon"
      } : {
        color: T || r?.disabled.value ? O : M,
        name: B,
        namespace: I,
        slot: "empty-icon"
      };
    }
    function v(w, z) {
      const { half: T, clearable: O } = e, { offsetWidth: R } = z.target;
      T && z.offsetX <= Math.floor(R / 2) && (w -= 0.5), u === w && O && (w = 0), u !== w && (S(e["onUpdate:modelValue"], w), S(e.onChange, w)), u = w;
    }
    function p() {
      return i(e.rules, e.modelValue);
    }
    function h() {
      Ne(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function m(w, z) {
      const { readonly: T, disabled: O } = e;
      T || O || r?.disabled.value || r?.readonly.value || (v(w, z), h());
    }
    function y(w) {
      return (z) => {
        n.value = w, s.value = z;
      };
    }
    function $() {
      S(e["onUpdate:modelValue"], 0), l();
    }
    return {
      errorMessage: o,
      formDisabled: r?.disabled,
      formReadonly: r?.readonly,
      hovering: s,
      currentHoveringValue: n,
      getStyle: d,
      getClass: c,
      getCurrentState: f,
      handleClick: m,
      createHoverHandler: y,
      reset: $,
      validate: p,
      resetValidation: l,
      toSizeUnit: ze,
      toNumber: Z,
      n: to
    };
  }
});
nb.render = b8;
var il = nb;
de(il);
fe(il, eb);
var LN = il, su = il, rb = {
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
}, y8 = { viewBox: "-4 -4 32 32" };
function w8(e, n) {
  return b(), k("svg", y8, [...n[0] || (n[0] = [L("path", {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  }, null, -1)])]);
}
var tb = te({});
tb.render = w8;
var k8 = tb, $8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
};
function C8(e, n) {
  return b(), k("svg", $8, [...n[0] || (n[0] = [L("path", { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" }, null, -1)])]);
}
var ob = te({});
ob.render = C8;
var S8 = ob, P8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
};
function O8(e, n) {
  return b(), k("svg", P8, [...n[0] || (n[0] = [L("path", { d: "M11,9H13V7H11M11,20H13V11H11V20Z" }, null, -1)])]);
}
var ab = te({});
ab.render = O8;
var z8 = ab, T8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
};
function E8(e, n) {
  return b(), k("svg", T8, [...n[0] || (n[0] = [L("path", { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" }, null, -1)])]);
}
var ib = te({});
ib.render = E8;
var I8 = ib, { n: B8, classes: D8 } = oe("result");
function M8(e, n) {
  return b(), k(Be, null, [
    L("span", { class: g(e.n("success-cover-left")) }, null, 2),
    L("span", {
      class: g(e.classes(e.n("success-line"), e.n("success-line-tip"))),
      style: J({
        animationDuration: e.animation ? "760ms" : "0ms",
        borderRadius: `calc(${e.borderSize} * 0.625)`
      })
    }, null, 6),
    L("span", {
      class: g(e.classes(e.n("success-line"), e.n("success-line-long"))),
      style: J({
        animationDuration: e.animation ? "770ms" : "0ms",
        borderRadius: `calc(${e.borderSize} * 0.625)`
      })
    }, null, 6),
    L("span", {
      ref: "circle",
      class: g(e.n("success-circle")),
      style: J({
        left: `-${e.borderSize}`,
        top: `-${e.borderSize}`,
        borderWidth: e.borderSize
      })
    }, null, 6),
    L("span", { class: g(e.n("success-line-fix")) }, null, 2),
    L("span", {
      class: g(e.n("success-cover-right")),
      style: J({ animationDuration: e.animation ? "4250ms" : "0ms" })
    }, null, 6)
  ], 64);
}
var lb = te({
  props: {
    animation: { type: Boolean },
    borderSize: { type: String }
  },
  setup() {
    return {
      n: B8,
      classes: D8
    };
  }
});
lb.render = M8;
var A8 = lb, N8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
};
function R8(e, n) {
  return b(), k("svg", N8, [...n[0] || (n[0] = [L("path", { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" }, null, -1)])]);
}
var sb = te({});
sb.render = R8;
var V8 = sb, { name: L8, n: F8, classes: H8 } = oe("result");
function U8(e, n) {
  return b(), k("div", { class: g(e.classes(e.n(), e.n("$--box"))) }, [
    H(e.$slots, "image", {}, () => [e.type ? (b(), k("div", {
      key: 0,
      class: g(e.n("image-container"))
    }, [L("div", {
      class: g(e.classes(e.n("image"), e.n(e.type))),
      style: J({
        width: e.circleSize,
        height: e.circleSize,
        borderWidth: e.borderSize
      })
    }, [(b(), we(Xt(e.type), {
      "border-size": e.borderSize,
      animation: e.animation
    }, null, 8, ["border-size", "animation"]))], 6)], 2)) : q("v-if", !0)]),
    H(e.$slots, "title", {}, () => [e.title ? (b(), k("div", {
      key: 0,
      class: g(e.n("title"))
    }, ve(e.title), 3)) : q("v-if", !0)]),
    H(e.$slots, "description", {}, () => [e.description ? (b(), k("div", {
      key: 0,
      class: g(e.n("description"))
    }, ve(e.description), 3)) : q("v-if", !0)]),
    e.$slots.footer ? (b(), k("div", {
      key: 0,
      class: g(e.n("footer"))
    }, [H(e.$slots, "footer")], 2)) : q("v-if", !0)
  ], 2);
}
var ub = te({
  name: L8,
  components: {
    Info: z8,
    Success: A8,
    Warning: V8,
    Error: S8,
    Question: I8,
    Empty: k8
  },
  props: rb,
  setup(e) {
    return {
      circleSize: C(() => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.9)`),
      borderSize: C(() => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.05)`),
      n: F8,
      classes: H8
    };
  }
});
ub.render = U8;
var ll = ub;
de(ll);
fe(ll, rb);
var FN = ll, uu = ll, db = {
  gutter: {
    type: [
      String,
      Number,
      Array
    ],
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
}, { name: j8, n: Y8, classes: K8 } = oe("row");
function W8(e, n) {
  return b(), k("div", {
    class: g(e.classes(e.n(), e.n("$--box"))),
    style: J({
      justifyContent: e.padStartFlex(e.justify),
      alignItems: e.padStartFlex(e.align),
      margin: `${-e.average[0]}px ${-e.average[1]}px`
    }),
    onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [H(e.$slots, "default")], 6);
}
var cb = te({
  name: j8,
  props: db,
  setup(e) {
    const n = C(() => We(e.gutter) ? e.gutter.map((o) => fn(o) / 2) : [0, fn(e.gutter) / 2]), { bindCols: r } = GS();
    r({ average: n });
    function t(o) {
      S(e.onClick, o);
    }
    return {
      average: n,
      n: Y8,
      classes: K8,
      handleClick: t,
      padStartFlex: ba
    };
  }
});
cb.render = W8;
var sl = cb;
de(sl);
fe(sl, db);
var HN = sl, du = sl, fb = {
  checkedValue: {
    type: [
      String,
      Number,
      Boolean,
      Object,
      Array
    ],
    default: void 0
  },
  disabled: Boolean,
  readonly: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: V()
}, vb = /* @__PURE__ */ Symbol("SEGMENTED_BUTTONS_BIND_BUTTON_KEY");
function q8() {
  const { bindChildren: e, childProviders: n, length: r } = Bn(vb);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function X8() {
  const { bindParent: e, parentProvider: n } = In(vb);
  return rr(!!e, "SegmentedButton", "<var-segmented-button/> must in <var-segmented-buttons/>"), {
    segmentedButtons: n,
    bindSegmentedButtons: e
  };
}
var { name: G8, n: Z8, classes: J8 } = oe("segmented-button"), Q8 = [
  "role",
  "aria-checked",
  "aria-disabled",
  "disabled",
  "tabindex"
];
function x8(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), o = _e("ripple"), a = _e("hover");
  return Ke((b(), k("button", {
    ref: "segmentedButton",
    role: e.segmentedButtons.multiple.value ? "checkbox" : "radio",
    "aria-checked": e.checked,
    "aria-disabled": e.formDisabled || e.disabled || e.formReadonly || e.readonly,
    disabled: e.formDisabled || e.disabled,
    tabindex: e.formDisabled || e.disabled ? void 0 : "0",
    class: g(e.classes(e.n(), e.n("$--box"), e.n(`--${e.segmentedButtons.size.value}`), [
      e.checked,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.formDisabled || e.disabled, e.n("--disabled")])),
    type: "button",
    onClick: n[0] || (n[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onFocus: n[1] || (n[1] = (i) => e.isFocusing = !0),
    onBlur: n[2] || (n[2] = (i) => e.isFocusing = !1)
  }, [L("div", { class: g(e.n("content")) }, [e.segmentedButtons.checkmark.value && e.checked ? H(e.$slots, "checkmark", {
    key: 0,
    checked: e.checked
  }, () => [j(r, {
    class: g(e.n("icon")),
    "var-segmented-button-cover": "",
    name: "check"
  }, null, 8, ["class"])]) : q("v-if", !0), H(e.$slots, "default", { checked: e.checked })], 2), j(t, {
    hovering: !e.formDisabled && !e.disabled && e.hovering,
    focusing: !e.formDisabled && !e.disabled && e.isFocusing
  }, null, 8, ["hovering", "focusing"])], 42, Q8)), [[o, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    a,
    e.handleHovering,
    "desktop"
  ]]);
}
var pb = te({
  name: G8,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarHoverOverlay: Gn,
    VarIcon: Je
  },
  props: fb,
  setup(e) {
    const n = P(), r = P(!1), t = P(!1), { segmentedButtons: o, bindSegmentedButtons: a } = X8(), { hovering: i, handleHovering: l } = ur(), { form: s } = Kn();
    a({
      checked: C(() => t.value),
      disabled: C(() => s?.disabled.value || e.disabled),
      isFocusing: C(() => r.value),
      sync: c,
      toggle: d,
      move: f
    });
    function u(v) {
      s?.disabled.value || e.disabled || (S(e.onClick, v), d());
    }
    function d() {
      s?.disabled.value || e.disabled || s?.readonly.value || e.readonly || o.onClick(e.checkedValue, t.value);
    }
    function c(v) {
      const p = We(v) ? v.includes(e.checkedValue) : v === e.checkedValue;
      return t.value = p, p;
    }
    function f(v) {
      s?.disabled.value || e.disabled || (n.value.focus(), v && !s?.readonly.value && !e.readonly && n.value.click());
    }
    return {
      segmentedButton: n,
      segmentedButtons: o,
      isFocusing: r,
      checked: t,
      formDisabled: s?.disabled,
      formReadonly: s?.readonly,
      hovering: i,
      n: Z8,
      classes: J8,
      handleHovering: l,
      handleClick: u,
      toggle: d
    };
  }
});
pb.render = x8;
var ul = pb;
de(ul);
fe(ul, fb);
var UN = ul, Ma = ul, mb = {
  modelValue: {
    type: [
      String,
      Number,
      Boolean,
      Object,
      Array
    ],
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
  checkmark: {
    type: Boolean,
    default: !0
  },
  size: {
    type: String,
    default: "normal"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: [
    Array,
    Function,
    Object
  ],
  onChange: V(),
  "onUpdate:modelValue": V()
}, { name: _8, n: eT, classes: nT } = oe("segmented-buttons"), rT = ["role"];
function tT(e, n) {
  const r = x("maybe-v-node"), t = x("var-segmented-button"), o = x("var-form-details");
  return b(), k("div", { class: g(e.n("wrap")) }, [L("div", {
    role: e.multiple ? "group" : "radiogroup",
    class: g([e.n(), e.hasError ? e.n("--error") : null])
  }, [e.options.length ? (b(!0), k(Be, { key: 0 }, Ye(e.options, (a) => (b(), we(t, {
    key: e.getOptionValue(a),
    "checked-value": e.getOptionValue(a),
    disabled: a.disabled,
    ripple: a.ripple
  }, {
    default: ue(() => [j(r, { is: e.renderOptionLabel(a) }, null, 8, ["is"])]),
    _: 2
  }, 1032, [
    "checked-value",
    "disabled",
    "ripple"
  ]))), 128)) : q("v-if", !0), H(e.$slots, "default")], 10, rT), j(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var gb = te({
  name: _8,
  components: {
    VarFormDetails: Hn,
    VarSegmentedButton: Ma,
    MaybeVNode: lr
  },
  props: mb,
  setup(e) {
    const { length: n, buttons: r, bindButtons: t } = q8(), { bindForm: o } = Kn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Jn(), u = {
      multiple: C(() => e.multiple),
      checkmark: C(() => e.checkmark),
      size: C(() => e.size),
      onClick: w
    }, d = {
      validate: R,
      reset: U,
      resetValidation: s
    };
    me(() => e.modelValue, z), me(() => n.value, z), t(u), S(o, d), xe(() => window, "keydown", h), xe(() => window, "keyup", m);
    function c() {
      return e.multiple ? We(e.modelValue) ? e.modelValue : [] : e.modelValue;
    }
    function f(M) {
      const D = c();
      return We(D) ? D.includes(M) : D === M;
    }
    function v(M) {
      return ir(M[e.labelKey], M, f(p(M)));
    }
    function p(M) {
      return M[e.valueKey];
    }
    function h(M) {
      const D = r.findIndex(({ isFocusing: E }) => E.value);
      if (D !== -1 && r.some(({ disabled: E }, B) => B === D ? !1 : !E.value)) {
        if (["ArrowLeft", "ArrowRight"].includes(M.key) && M.preventDefault(), (M.key === "Enter" || M.key === " ") && M.preventDefault(), M.key === "ArrowLeft") {
          y(D, "prev");
          return;
        }
        if (M.key === "ArrowRight") {
          y(D, "next");
          return;
        }
        M.key === "Enter" && r[D].toggle();
      }
    }
    function m(M) {
      const D = r.findIndex(({ isFocusing: E }) => E.value);
      D !== -1 && M.key === " " && (M.preventDefault(), r[D].toggle());
    }
    function y(M, D) {
      for (; ; ) {
        M += D === "prev" ? -1 : 1, M < 0 && (M = r.length - 1), M > r.length - 1 && (M = 0);
        const E = r[M];
        if (!E.disabled.value) {
          E.move(!e.multiple);
          break;
        }
      }
    }
    function $(M) {
      Ne(() => {
        i(e.validateTrigger, M, e.rules, c());
      });
    }
    function w(M, D) {
      if ($("onClick"), !e.multiple) {
        if (D) return;
        T(M);
        return;
      }
      const E = c();
      if (D) {
        T(E.filter((B) => B !== M));
        return;
      }
      T([...E, M]);
    }
    function z() {
      const M = c();
      r.forEach(({ sync: D }) => D(M));
    }
    function T(M) {
      S(e["onUpdate:modelValue"], M), S(e.onChange, M), $("onChange");
    }
    const O = C(() => !!a.value);
    function R() {
      return l(e.rules, c());
    }
    function U() {
      S(e["onUpdate:modelValue"], e.multiple ? [] : void 0), s();
    }
    return {
      errorMessage: a,
      n: eT,
      classes: nT,
      renderOptionLabel: v,
      getOptionValue: p,
      hasError: O,
      validate: R,
      reset: U,
      resetValidation: s
    };
  }
});
gb.render = tT;
var dl = gb;
de(dl);
fe(dl, mb);
var jN = dl, cu = dl, oT = Object.defineProperty, wv = Object.getOwnPropertySymbols, aT = Object.prototype.hasOwnProperty, iT = Object.prototype.propertyIsEnumerable, kv = (e, n, r) => n in e ? oT(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, lT = (e, n) => {
  for (var r in n || (n = {})) aT.call(n, r) && kv(e, r, n[r]);
  if (wv)
    for (var r of wv(n)) iT.call(n, r) && kv(e, r, n[r]);
  return e;
}, hb = lT({
  modelValue: {
    type: [
      String,
      Number,
      Boolean,
      Array
    ],
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
    default: () => [
      "onChange",
      "onClear",
      "onClose"
    ]
  },
  rules: [
    Array,
    Function,
    Object
  ],
  tabindex: String,
  filterable: Boolean,
  filter: { type: Function },
  onFocus: V(),
  onBlur: V(),
  onClose: V(),
  onChange: V(),
  onClear: V(),
  "onUpdate:modelValue": V()
}, Fe(Ro, [
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
])), { n: sT, classes: uT } = oe("select");
function dT(e, n) {
  return Ke((b(), k("input", {
    ref: "filterInputRef",
    "onUpdate:modelValue": n[0] || (n[0] = (r) => e.value = r),
    type: "text",
    class: g(e.classes(e.n("filter"), [e.multiple, e.n("filter--multiple")]))
  }, null, 2)), [[Wv, e.value]]);
}
var bb = te({
  name: "VarSelectFilter",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    multiple: Boolean,
    "onUpdate:modelValue": V()
  },
  setup(e) {
    const n = P(), r = C({
      get: () => e.modelValue,
      set: (a) => S(e["onUpdate:modelValue"], a)
    });
    return {
      n: sT,
      classes: uT,
      value: r,
      filterInputRef: n,
      focus: () => {
        var a;
        (a = n.value) == null || a.focus();
      },
      blur: () => {
        var a;
        (a = n.value) == null || a.blur();
      }
    };
  }
});
bb.render = dT;
var cT = bb, $v = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
});
function fT(e, n, r) {
  const t = P(!1);
  let o = null;
  me(() => n.value, () => $v(null, null, function* () {
    l(), n.value && (yield Ne(), i(), a());
  }), { immediate: !0 }), Gt(l);
  function a() {
    var s;
    const u = e.value, d = u?.querySelectorAll(".var-option");
    t.value = d?.length ? Array.from(d).every((c) => Ur(c).display === "none") : !0, (s = r?.onAfterUpdate) == null || s.call(r);
  }
  function i() {
    e.value && (o = new MutationObserver(() => $v(null, null, function* () {
      yield Ne(), a();
    })), o.observe(e.value, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style", "class"]
    }));
  }
  function l() {
    o?.disconnect(), o = null;
  }
  return { showEmpty: t };
}
var vT = 11;
function pT(e) {
  const n = y0(), r = P(0), t = C(() => ({ minWidth: `${Math.max(r.value, vT)}px` })), o = () => {
    var a, i;
    r.value = (i = (a = n.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? i : 0;
  };
  return me(() => Na(e), () => {
    Ne(o);
  }), {
    calculatorRef: n,
    filterStyle: t,
    resize: o
  };
}
var mT = Object.defineProperty, gT = Object.defineProperties, hT = Object.getOwnPropertyDescriptors, Cv = Object.getOwnPropertySymbols, bT = Object.prototype.hasOwnProperty, yT = Object.prototype.propertyIsEnumerable, Sv = (e, n, r) => n in e ? mT(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, wT = (e, n) => {
  for (var r in n || (n = {})) bT.call(n, r) && Sv(e, r, n[r]);
  if (Cv)
    for (var r of Cv(n)) yT.call(n, r) && Sv(e, r, n[r]);
  return e;
}, kT = (e, n) => gT(e, hT(n)), $T = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: CT, n: ST, classes: PT } = oe("select"), OT = ["tabindex"];
function zT(e, n) {
  const r = x("maybe-v-node"), t = x("var-chip"), o = x("var-select-filter"), a = x("var-icon"), i = x("var-field-decorator"), l = x("var-option"), s = x("var-menu"), u = x("var-form-details");
  return b(), k("div", {
    ref: "root",
    class: g(e.n()),
    tabindex: e.tabindex,
    onFocus: n[6] || (n[6] = (...d) => e.handleFocus && e.handleFocus(...d)),
    onBlur: n[7] || (n[7] = (...d) => e.handleRootBlur && e.handleRootBlur(...d))
  }, [j(s, {
    ref: "menuRef",
    show: e.showMenu,
    "onUpdate:show": n[4] || (n[4] = (d) => e.showMenu = d),
    "var-select-cover": "",
    "same-width": "",
    "close-on-click-reference": "",
    "close-on-key-escape": !1,
    class: g(e.n("menu")),
    "popover-class": e.variant === "standard" && e.hint && !e.filterable ? e.n("--standard-menu-margin") : void 0,
    "offset-y": e.offsetY,
    disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
    placement: e.placement,
    "default-style": !1,
    onClickOutside: e.handleClickOutside
  }, {
    menu: ue(() => [L("div", {
      ref: "menuEl",
      class: g(e.classes(e.n("scroller"), e.n("$--scrollbar"), e.n("$-elevation--3")))
    }, [
      e.showEmpty ? H(e.$slots, "empty", { key: 0 }, () => [L("div", { class: g(e.n("empty")) }, ve((e.pt ? e.pt : e.t)("selectEmptyText")), 3)]) : q("v-if", !0),
      e.options.length ? (b(!0), k(Be, { key: 1 }, Ye(e.options, (d) => (b(), we(l, {
        key: d[e.valueKey],
        label: d[e.labelKey],
        value: d[e.valueKey],
        option: d,
        disabled: d.disabled,
        ripple: d.ripple
      }, null, 8, [
        "label",
        "value",
        "option",
        "disabled",
        "ripple"
      ]))), 128)) : q("v-if", !0),
      H(e.$slots, "default")
    ], 2)]),
    default: ue(() => [j(i, yt(Aa({
      value: e.pattern || e.modelValue,
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
      composing: e.isComposing,
      formReadonly: e.formReadonly,
      disabled: e.disabled,
      readonly: e.readonly,
      clearable: e.clearable ? !e.filterable || !e.pattern : !1,
      cursor: e.cursor,
      onClick: e.handleClick,
      onClear: e.handleClear
    })), Pr({
      "append-icon": ue(() => [H(e.$slots, "arrow-icon", {
        focus: e.isFocusing,
        menuOpen: e.showMenu
      }, () => [j(a, {
        class: g(e.classes(e.n("arrow"), [e.showMenu, e.n("--arrow-rotate")])),
        "var-select-cover": "",
        name: "menu-down",
        transition: 300
      }, null, 8, ["class"])]), H(e.$slots, "append-icon")]),
      default: ue(() => [L("div", {
        class: g(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: J({
          textAlign: e.textAlign,
          color: e.textColor
        })
      }, [
        L("div", { class: g(e.classes(e.n("label"), [e.filterable && e.showMenu, e.n("--label-focusing")])) }, [e.isShowSelected() ? H(e.$slots, "selected", { key: 0 }, () => [e.multiple ? (b(), k(Be, { key: 0 }, [e.chip ? (b(), k("div", {
          key: 0,
          class: g(e.n("chips"))
        }, [(b(!0), k(Be, null, Ye(e.labels, (d) => (b(), we(t, {
          key: d,
          class: g(e.n("chip")),
          "var-select-cover": "",
          closeable: "",
          size: "small",
          type: e.errorMessage ? "danger" : void 0,
          onClick: n[0] || (n[0] = Rn(() => {
          }, ["stop"])),
          onClose: () => e.handleClose(d)
        }, {
          default: ue(() => [j(r, { is: d }, null, 8, ["is"])]),
          _: 2
        }, 1032, [
          "class",
          "type",
          "onClose"
        ]))), 128)), e.isShowMultipleFilter() ? (b(), we(o, {
          key: 0,
          ref: "filterRef",
          modelValue: e.pattern,
          "onUpdate:modelValue": n[1] || (n[1] = (d) => e.pattern = d),
          style: J(e.filterStyle),
          multiple: e.multiple,
          onFocus: e.handleFocus,
          onBlur: e.handleRootBlur,
          onInput: e.handleInput,
          onCompositionstart: e.handleCompositionStart,
          onCompositionend: e.handleCompositionEnd
        }, null, 8, [
          "modelValue",
          "style",
          "multiple",
          "onFocus",
          "onBlur",
          "onInput",
          "onCompositionstart",
          "onCompositionend"
        ])) : q("v-if", !0)], 2)) : (b(), k("div", {
          key: 1,
          class: g(e.n("values"))
        }, [(b(!0), k(Be, null, Ye(e.labels, (d, c) => (b(), k(Be, { key: d }, [j(r, { is: d }, null, 8, ["is"]), Le(ve(c !== e.labels.length - 1 ? e.separator : ""), 1)], 64))), 128)), e.isShowMultipleFilter() ? (b(), we(o, {
          key: 0,
          ref: "filterRef",
          modelValue: e.pattern,
          "onUpdate:modelValue": n[2] || (n[2] = (d) => e.pattern = d),
          style: J(kT(wT({}, e.filterStyle), { paddingLeft: e.labels.length ? "4px" : 0 })),
          multiple: e.multiple,
          onFocus: e.handleFocus,
          onBlur: e.handleRootBlur,
          onInput: e.handleInput,
          onCompositionstart: e.handleCompositionStart,
          onCompositionend: e.handleCompositionEnd
        }, null, 8, [
          "modelValue",
          "style",
          "multiple",
          "onFocus",
          "onBlur",
          "onInput",
          "onCompositionstart",
          "onCompositionend"
        ])) : q("v-if", !0)], 2))], 64)) : (b(), we(r, {
          key: 1,
          is: e.label
        }, null, 8, ["is"]))]) : q("v-if", !0)], 2),
        e.enableCustomPlaceholder && !e.pattern ? (b(), k("span", {
          key: 0,
          class: g(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
          style: J({ color: e.placeholderColor })
        }, ve(e.placeholder), 7)) : q("v-if", !0),
        e.isShowSingleFilter() ? (b(), we(o, {
          key: 1,
          ref: "filterRef",
          modelValue: e.pattern,
          "onUpdate:modelValue": n[3] || (n[3] = (d) => e.pattern = d),
          style: J(e.filterStyle),
          onFocus: e.handleFocus,
          onBlur: e.handleRootBlur,
          onInput: e.handleInput,
          onCompositionstart: e.handleCompositionStart,
          onCompositionend: e.handleCompositionEnd
        }, null, 8, [
          "modelValue",
          "style",
          "onFocus",
          "onBlur",
          "onInput",
          "onCompositionstart",
          "onCompositionend"
        ])) : q("v-if", !0),
        e.filterable ? (b(), k("span", {
          key: 2,
          ref: "calculatorRef",
          class: g(e.n("filter-calculator"))
        }, ve(e.pattern), 3)) : q("v-if", !0)
      ], 6)]),
      _: 2
    }, [e.$slots["prepend-icon"] ? {
      name: "prepend-icon",
      fn: ue(() => [H(e.$slots, "prepend-icon")]),
      key: "0"
    } : void 0, e.pattern ? void 0 : {
      name: "clear-icon",
      fn: ue(({ clear: d }) => [H(e.$slots, "clear-icon", { clear: d })]),
      key: "1"
    }]), 1040)]),
    _: 3
  }, 8, [
    "show",
    "class",
    "popover-class",
    "offset-y",
    "disabled",
    "placement",
    "onClickOutside"
  ]), j(u, {
    "error-message": e.errorMessage,
    onClick: n[5] || (n[5] = Rn(() => {
    }, ["stop"]))
  }, null, 8, ["error-message"])], 42, OT);
}
var yb = te({
  name: CT,
  components: {
    VarIcon: Je,
    VarMenu: jt,
    VarChip: $a,
    VarOption: Da,
    VarFieldDecorator: ho,
    VarFormDetails: Hn,
    VarSelectFilter: cT,
    MaybeVNode: lr
  },
  props: hb,
  setup(e) {
    var n;
    const r = P(!1), t = P(!1), o = P(null), a = P(null), i = P(""), l = P(!1), s = C(() => e.filterable), u = C(() => e.multiple), d = C(() => e.focusColor), c = C(() => Or(e.modelValue)), f = C(() => e.disabled || e.readonly ? "" : "pointer"), { bindForm: v, form: p } = Kn(), { length: h, options: m, bindOptions: y } = e6(), { label: $, labels: w, computeLabel: z, getSelectedValue: T } = em({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => m,
      optionProvidersLength: () => h.value
    }), { errorMessage: O, validateWithTrigger: R, validate: U, resetValidation: M } = Jn(), D = C(() => p?.readonly.value || e.readonly), E = C(() => p?.disabled.value || e.disabled), B = P(null), N = P(null), A = C(() => e.variant === "standard" && !e.filterable ? "cover-top" : "bottom"), { t: I } = kr(), F = P(0), Q = C({
      get() {
        return F.value + (A.value === "bottom" ? 2 : 0);
      },
      set(Re) {
        F.value = Re;
      }
    }), X = C(() => {
      const { hint: Re, blurColor: sn, focusColor: _ } = e;
      if (!Re)
        return O.value ? "var(--field-decorator-error-color)" : r.value ? _ || "var(--field-decorator-focus-color)" : sn || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), ae = C(() => !e.hint && Or(e.modelValue)), Te = C(() => {
      var Re;
      if (!E.value)
        return s.value && r.value ? "-1" : (Re = e.tabindex) != null ? Re : "0";
    }), { calculatorRef: ce, filterStyle: G } = pT(i), ne = {
      pattern: C(() => i.value),
      showMenu: C(() => t.value),
      multiple: u,
      filterable: s,
      filter: (n = e.filter) != null ? n : ((Re, sn) => String(sn[e.labelKey]).toLocaleLowerCase().includes(Re.toLocaleLowerCase())),
      focusColor: d,
      computeLabel: z,
      onSelect: re,
      reset: Qn,
      validate: Ir,
      resetValidation: M
    }, { showEmpty: pe } = fT(B, t, { onAfterUpdate: () => {
      var Re;
      return (Re = N.value) == null ? void 0 : Re.resize();
    } });
    let Oe = !1;
    me(() => e.multiple, () => {
      rr(e.multiple && We(e.modelValue), "Select", "The modelValue must be an array when multiple is true");
    }), me(t, (Re) => {
      Re && Ne(Ue);
    }), y(ne), xe(() => window, "keydown", nn), xe(() => window, "keyup", qe), S(v, ne);
    function Y() {
      return s.value && !D.value && !E.value && !u.value;
    }
    function ie() {
      return s.value && !D.value && !E.value && u.value;
    }
    function Ee() {
      return !(c.value && !u.value || !u.value && (i.value || l.value));
    }
    function Ue() {
      var Re;
      Sp(B.value, (Re = B.value) == null ? void 0 : Re.querySelector(".var-option--selected-color"));
    }
    function nn(Re) {
      var sn;
      if (E.value || D.value || !r.value) return;
      const { key: _ } = Re;
      if (_ === " " && !t.value) {
        Ze(Re);
        return;
      }
      if (_ === "Escape" && t.value) {
        o.value.focus(), Ze(Re), t.value = !1;
        return;
      }
      if (_ === "Tab" && t.value) {
        o.value.focus(), Ze(Re), be();
        return;
      }
      if (_ === "Enter" && !t.value) {
        Ze(Re), t.value = !0, (sn = a.value) == null || sn.focus();
        return;
      }
      (_ === "ArrowDown" || _ === "ArrowUp") && t.value && (Ze(Re), Gu(o.value, B.value, _));
    }
    function qe(Re) {
      if (E.value || D.value || t.value || !r.value) return;
      const { key: sn } = Re;
      sn === " " && !t.value && (Ze(Re), t.value = !0);
    }
    function en(Re) {
      Ne(() => {
        const { validateTrigger: sn, rules: _, modelValue: he } = e;
        R(sn, Re, _, he);
      });
    }
    function on() {
      var Re;
      const { disabled: sn, readonly: _, onFocus: he } = e;
      if (!(p?.disabled.value || p?.readonly.value || sn || _)) {
        if (Oe) {
          Oe = !1;
          return;
        }
        Q.value = fn(e.offsetY), $r(), (ie() || Y()) && (Oe = !0, (Re = a.value) == null || Re.focus()), S(he), en("onFocus");
      }
    }
    function be() {
      const { disabled: Re, readonly: sn, onBlur: _ } = e;
      p?.disabled.value || p?.readonly.value || Re || sn || (or(), S(_), en("onBlur"), i.value = "");
    }
    function ee() {
      return $T(this, null, function* () {
        if (Oe) {
          yield Ne(), Oe = !1;
          return;
        }
        t.value || be();
      });
    }
    function K() {
      r.value && be();
    }
    function re(Re) {
      const { disabled: sn, readonly: _, multiple: he, onChange: se } = e;
      if (p?.disabled.value || p?.readonly.value || sn || _) return;
      const ke = T(Re);
      S(e["onUpdate:modelValue"], ke), S(se, ke), en("onChange"), Ne(() => {
        var je;
        return (je = a.value) == null ? void 0 : je.focus();
      }), he || (o.value.focus(), Xn().then(() => {
        t.value = !1, i.value = "";
      }));
    }
    function ye() {
      const { disabled: Re, readonly: sn, multiple: _, clearable: he, onClear: se, onChange: ke } = e;
      if (p?.disabled.value || p?.readonly.value || Re || sn || !he) return;
      const je = _ ? [] : void 0;
      S(e["onUpdate:modelValue"], je), S(se, je), en("onClear"), S(ke, je), en("onChange");
    }
    function Pe(Re) {
      const { disabled: sn, onClick: _ } = e;
      p?.disabled.value || sn || (S(_, Re), en("onClick"));
    }
    function Ge(Re) {
      const { disabled: sn, readonly: _, modelValue: he, onClose: se, onChange: ke } = e;
      if (p?.disabled.value || p?.readonly.value || sn || _) return;
      const je = m.find(({ label: Vn }) => Vn.value === Re), cn = he.filter((Vn) => {
        var ar;
        return Vn !== ((ar = je.value.value) != null ? ar : je.label.value);
      });
      S(e["onUpdate:modelValue"], cn), S(se, cn), en("onClose"), S(ke, cn), en("onChange");
    }
    function rn() {
      t.value = !0;
    }
    function mn() {
      l.value = !0;
    }
    function Dn() {
      l.value = !1;
    }
    function $r() {
      Q.value = fn(e.offsetY), r.value = !0;
    }
    function or() {
      r.value = !1, t.value = !1;
    }
    function Ir() {
      return U(e.rules, e.modelValue);
    }
    function Qn() {
      S(e["onUpdate:modelValue"], e.multiple ? [] : void 0), M();
    }
    return {
      root: o,
      filterRef: a,
      calculatorRef: ce,
      isComposing: l,
      filterStyle: G,
      pattern: i,
      tabindex: Te,
      readonly: D,
      disabled: E,
      offsetY: Q,
      isFocusing: r,
      showMenu: t,
      errorMessage: O,
      formDisabled: p?.disabled,
      formReadonly: p?.readonly,
      label: $,
      labels: w,
      isEmptyModelValue: c,
      menuEl: B,
      menuRef: N,
      placement: A,
      cursor: f,
      placeholderColor: X,
      enableCustomPlaceholder: ae,
      showEmpty: pe,
      t: gn,
      pt: I,
      isFunction: Yn,
      n: ST,
      classes: PT,
      isShowSelected: Ee,
      isShowSingleFilter: Y,
      isShowMultipleFilter: ie,
      handleFocus: on,
      handleBlur: be,
      handleClickOutside: K,
      handleClear: ye,
      handleClick: Pe,
      handleClose: Ge,
      handleRootBlur: ee,
      handleInput: rn,
      handleCompositionStart: mn,
      handleCompositionEnd: Dn,
      reset: Qn,
      validate: Ir,
      resetValidation: M,
      focus: $r,
      blur: or
    };
  }
});
yb.render = zT;
var cl = yb;
de(cl);
fe(cl, hb);
var YN = cl, fu = cl, wb = {
  lineWidth: {
    type: [Number, String],
    default: 2
  },
  strokeStyle: {
    type: String,
    default: "currentColor"
  },
  dataUrlType: {
    type: String,
    default: "png"
  },
  onStart: V(),
  onEnd: V(),
  onSigning: V()
}, { name: TT, n: ET } = oe("signature"), IT = ["height", "width"];
function BT(e, n) {
  return b(), k("div", {
    ref: "root",
    class: g(e.n())
  }, [L("canvas", {
    ref: "canvas",
    height: e.canvasHeight,
    width: e.canvasWidth
  }, null, 8, IT)], 2);
}
var kb = te({
  name: TT,
  props: wb,
  setup(e) {
    const n = P(), r = P(), t = P(0), o = P(0);
    let a = !1, i = null;
    xe(r, "touchstart", s), xe(r, "touchmove", u), xe(r, "touchend", d), wr(l), Tr(l);
    function l() {
      !r.value || !n.value || (i = r.value.getContext("2d"), t.value = n.value.offsetWidth, o.value = n.value.offsetHeight);
    }
    function s(h) {
      !i || !n.value || (h.preventDefault(), a = !0, i.beginPath(), i.lineWidth = Z(e.lineWidth), i.strokeStyle = e.strokeStyle === "currentColor" ? Ur(n.value).color : e.strokeStyle, S(e.onStart));
    }
    function u(h) {
      if (h.preventDefault(), !r.value || !i || !a) return;
      const m = h.touches[0].clientX, y = h.touches[0].clientY, $ = kn(r.value), w = m - $.left, z = y - $.top;
      i.lineTo(w, z), i.stroke(), S(e.onSigning);
    }
    function d(h) {
      a && (h.preventDefault(), a = !1, S(e.onEnd));
    }
    function c(h) {
      return e.dataUrlType === "jpg" ? h.toDataURL("image/jpeg") : h.toDataURL("image/png");
    }
    function f(h) {
      if (!h) return !0;
      const m = document.createElement("canvas");
      return m.width = h.width, m.height = h.height, c(h) === c(m);
    }
    function v() {
      i && (a = !1, i.clearRect(0, 0, t.value, o.value), i.closePath());
    }
    function p() {
      if (r.value)
        return f(r.value) ? "" : c(r.value);
    }
    return {
      root: n,
      canvas: r,
      canvasWidth: t,
      canvasHeight: o,
      n: ET,
      confirm: p,
      reset: v
    };
  }
});
kb.render = BT;
var fl = kb;
de(fl);
fe(fl, wb);
var KN = fl, vu = fl, $b = {
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
}, { name: DT, n: MT, classes: AT } = oe("skeleton");
function NT(e, n) {
  return b(), k("div", { class: g(e.classes(e.n("$--box"), e.n())) }, [
    e.loading ? q("v-if", !0) : (b(), k("div", {
      key: 0,
      class: g(e.n("data"))
    }, [H(e.$slots, "default")], 2)),
    e.loading && !e.fullscreen ? (b(), k("div", {
      key: 1,
      class: g(e.n("content"))
    }, [e.card ? (b(), k("div", {
      key: 0,
      class: g(e.n("card")),
      style: J({ height: e.toSizeUnit(e.cardHeight) })
    }, [L("div", { class: g(e.n("--animation")) }, null, 2)], 6)) : q("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (b(), k("div", {
      key: 1,
      class: g(e.n("article"))
    }, [e.avatar ? (b(), k("div", {
      key: 0,
      class: g(e.n("avatar")),
      style: J({
        width: e.toSizeUnit(e.avatarSize),
        height: e.toSizeUnit(e.avatarSize)
      })
    }, [L("div", { class: g(e.n("--animation")) }, null, 2)], 6)) : q("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (b(), k("div", {
      key: 1,
      class: g(e.n("section"))
    }, [e.title ? (b(), k("div", {
      key: 0,
      class: g(e.n("title")),
      style: J({ width: e.toSizeUnit(e.titleWidth) })
    }, [L("div", { class: g(e.n("--animation")) }, null, 2)], 6)) : q("v-if", !0), (b(!0), k(Be, null, Ye(e.toNumber(e.rows), (r, t) => (b(), k("div", {
      key: r,
      class: g(e.n("row")),
      style: J({ width: e.toSizeUnit(e.rowsWidth[t]) })
    }, [L("div", { class: g(e.n("--animation")) }, null, 2)], 6))), 128))], 2)) : q("v-if", !0)], 2)) : q("v-if", !0)], 2)) : q("v-if", !0),
    e.loading && e.fullscreen ? (b(), k("div", {
      key: 2,
      class: g(e.n("fullscreen")),
      style: J({ zIndex: e.toNumber(e.fullscreenZIndex) })
    }, [L("div", { class: g(e.n("--animation")) }, null, 2)], 6)) : q("v-if", !0)
  ], 2);
}
var Cb = te({
  name: DT,
  props: $b,
  setup: () => ({
    n: MT,
    classes: AT,
    toSizeUnit: ze,
    toNumber: Z
  })
});
Cb.render = NT;
var vl = Cb;
de(vl);
fe(vl, $b);
var WN = vl, pu = vl, On = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(On || {}), Sb = {
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
  rules: [
    Array,
    Function,
    Object
  ],
  onChange: V(),
  onStart: V(),
  onEnd: V(),
  "onUpdate:modelValue": V()
}, { name: RT, n: Pv, classes: VT } = oe("slider"), LT = [
  "tabindex",
  "aria-valuemin",
  "aria-valuemax",
  "aria-valuenow",
  "aria-disabled",
  "aria-valuetext",
  "onTouchstart",
  "onFocusin",
  "onFocusout"
];
function FT(e, n) {
  const r = x("var-hover-overlay"), t = x("var-form-details"), o = _e("hover");
  return b(), k("div", { class: g(e.classes(e.n(e.direction), e.n("$--box"))) }, [L("div", {
    ref: "sliderEl",
    class: g(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
    onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
  }, [L("div", { class: g(e.n(`${e.direction}-track`)) }, [L("div", {
    class: g(e.n(`${e.direction}-track-background`)),
    style: J({
      background: e.trackColor,
      height: e.isVertical ? "100%" : e.toSizeUnit(e.trackHeight),
      width: e.isVertical ? e.toSizeUnit(e.trackHeight) : "100%"
    })
  }, null, 6), L("div", {
    class: g(e.n(`${e.direction}-track-fill`)),
    style: J(e.getFillStyle)
  }, null, 6)], 2), (b(!0), k(Be, null, Ye(e.thumbList, (a) => (b(), k("div", {
    key: a.enumValue,
    class: g(e.n(`${e.direction}-thumb`)),
    style: J(e.thumbStyle(a)),
    tabindex: e.isDisabled ? void 0 : "0",
    role: "slider",
    "aria-valuemin": e.min,
    "aria-valuemax": e.max,
    "aria-valuenow": a.value,
    "aria-disabled": e.isDisabled,
    "aria-valuetext": `${a.text}`,
    onTouchstart: Rn((i) => e.start(i, a.enumValue), ["stop"]),
    onTouchmove: n[0] || (n[0] = Rn((...i) => e.move && e.move(...i), ["stop"])),
    onFocusin: (i) => e.handleFocus(a),
    onFocusout: (i) => e.handleBlur(a)
  }, [H(e.$slots, "button", { currentValue: a.text }, () => [
    Ke(L("div", {
      class: g(e.n(`${e.direction}-thumb-block`)),
      style: J({ background: e.thumbColor })
    }, null, 6), [[
      o,
      (i) => e.hover(i, a),
      "desktop"
    ]]),
    L("div", {
      class: g(e.classes(e.n(`${e.direction}-thumb-ripple`), [e.thumbsProps[a.enumValue].active, e.n(`${e.direction}-thumb-ripple--active`)])),
      style: J({ background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0 })
    }, [j(r, {
      hovering: !e.isDisabled && a.hovering,
      focusing: !e.isDisabled && a.focusing
    }, null, 8, ["hovering", "focusing"])], 6),
    L("div", {
      class: g(e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])),
      style: J({
        background: e.labelColor,
        color: e.labelTextColor,
        height: e.toSizeUnit(e.thumbSize),
        width: e.toSizeUnit(e.thumbSize)
      })
    }, [L("span", null, ve(a.text), 1)], 6)
  ])], 46, LT))), 128))], 2), j(t, {
    "error-message": e.errorMessage,
    class: g(e.n("form")),
    "var-slider-cover": ""
  }, null, 8, ["error-message", "class"])], 2);
}
var Pb = te({
  name: RT,
  components: {
    VarFormDetails: Hn,
    VarHoverOverlay: Gn
  },
  directives: { Hover: jn },
  props: Sb,
  setup(e) {
    const n = P(0), r = P(null), t = P(!1), o = C(() => Z(e.max) - Z(e.min)), a = C(() => n.value / o.value * Z(e.step)), i = C(() => e.disabled || f?.disabled.value), l = C(() => e.readonly || f?.readonly.value), s = C(() => e.direction === "vertical"), u = P(!1), d = P(!1), { bindForm: c, form: f } = Kn(), { errorMessage: v, validateWithTrigger: p, validate: h, resetValidation: m } = Jn(), { hovering: y, handleHovering: $ } = ur(), { hovering: w, handleHovering: z } = ur(), T = C(() => {
      const { modelValue: K, range: re } = e;
      let ye = [];
      return re && We(K) ? ye = [{
        value: F(K[0]),
        enumValue: On.First,
        text: Q(K[0]),
        hovering: y.value,
        focusing: u.value,
        handleHovering: $,
        handleFocusing(Pe) {
          u.value = Pe;
        }
      }, {
        value: F(K[1]),
        enumValue: On.Second,
        text: Q(K[1]),
        hovering: w.value,
        focusing: d.value,
        handleHovering: z,
        handleFocusing(Pe) {
          d.value = Pe;
        }
      }] : nr(K) && (ye = [{
        value: F(K),
        enumValue: On.First,
        text: Q(K),
        hovering: y.value,
        focusing: u.value,
        handleHovering: $,
        handleFocusing(Pe) {
          u.value = Pe;
        }
      }]), ye;
    }), O = C(() => {
      const { activeColor: K, range: re, modelValue: ye } = e, Pe = re && We(ye) ? F(Math.min(ye[0], ye[1])) : 0, Ge = re && We(ye) ? F(Math.max(ye[0], ye[1])) - Pe : F(ye);
      return s.value ? {
        left: "0px",
        height: `${Ge}%`,
        bottom: `${Pe}%`,
        background: K
      } : {
        top: "0px",
        width: `${Ge}%`,
        left: `${Pe}%`,
        background: K
      };
    }), R = $n({
      [On.First]: E(),
      [On.Second]: E()
    });
    let U;
    S(c, {
      reset: qe,
      validate: D,
      resetValidation: m
    }), me([() => e.modelValue, () => e.step], ([K, re]) => {
      !Ee() || !Ue() || t.value || nn(K, Z(re));
    }), me(n, () => nn()), En(() => {
      !Ee() || !Ue() || M();
    }), Pt(ne), xe(() => window, "keydown", on), wr(M);
    function M() {
      n.value = r.value[s.value ? "offsetHeight" : "offsetWidth"];
    }
    function D() {
      return h(e.rules, e.modelValue);
    }
    function E() {
      return {
        startPosition: 0,
        currentOffset: 0,
        active: !1,
        percentValue: 0
      };
    }
    function B() {
      Ne(() => p(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function N(K) {
      const re = K.currentTarget;
      return re ? s.value ? n.value - (K.clientY - kn(re).top) : K.clientX - My(re) : 0;
    }
    function A(K) {
      return {
        [s.value ? "bottom" : "left"]: `${K.value}%`,
        zIndex: R[K.enumValue].active ? 1 : void 0
      };
    }
    function I(K) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : R[K].active;
    }
    function F(K) {
      const { min: re, max: ye } = e;
      return K < Z(re) ? 0 : K > Z(ye) ? 100 : (K - Z(re)) / o.value * 100;
    }
    function Q(K) {
      if (!nr(K)) return 0;
      const re = hn(K, Z(e.min), Z(e.max));
      return parseInt(`${re}`, 10) === re ? re : Z(re.toPrecision(5));
    }
    function X(K, re) {
      i.value || re.handleHovering(K);
    }
    function ae(K) {
      S(e["onUpdate:modelValue"], K), S(e.onChange, K), B();
    }
    function Te(K, re) {
      let ye = [];
      const { step: Pe, range: Ge, modelValue: rn, min: mn } = e, Dn = Z(Pe), $r = Math.round(K / a.value), or = $r * Dn + Z(mn), Ir = R[re].percentValue * Dn + Z(mn);
      R[re].percentValue = $r, Ge && We(rn) && (ye = re === On.First ? [or, rn[1]] : [rn[0], or]), Ir !== or && ae(Ge ? ye.map((Qn) => Q(Qn)) : Q(or));
    }
    function ce(K) {
      if (!e.range) return On.First;
      const re = R[On.First].percentValue * a.value, ye = R[On.Second].percentValue * a.value;
      return Math.abs(K - re) <= Math.abs(K - ye) ? On.First : On.Second;
    }
    function G() {
      document.addEventListener("touchmove", Oe, { passive: !1 }), document.addEventListener("touchend", Y), document.addEventListener("touchcancel", Y);
    }
    function ne() {
      document.removeEventListener("touchmove", Oe), document.removeEventListener("touchend", Y), document.removeEventListener("touchcancel", Y);
    }
    function pe(K, re) {
      if (M(), i.value || (R[re].active = !0), U = re, G(), i.value || l.value) return;
      S(e.onStart), t.value = !0;
      const { clientX: ye, clientY: Pe } = K.touches[0];
      R[re].startPosition = s.value ? Pe : ye;
    }
    function Oe(K) {
      if (Ze(K), i.value || l.value || !t.value) return;
      const { startPosition: re, currentOffset: ye } = R[U], { clientX: Pe, clientY: Ge } = K.touches[0];
      let rn = (s.value ? re - Ge : Pe - re) + ye;
      rn <= 0 ? rn = 0 : rn >= n.value && (rn = n.value), Te(rn, U);
    }
    function Y() {
      ne();
      const { range: K, modelValue: re, onEnd: ye, step: Pe, min: Ge } = e;
      if (i.value || (R[U].active = !1), i.value || l.value) return;
      let rn = [];
      R[U].currentOffset = R[U].percentValue * a.value;
      const mn = R[U].percentValue * Z(Pe) + Z(Ge);
      K && We(re) && (rn = U === On.First ? [mn, re[1]] : [re[0], mn]), S(ye, K ? rn : mn), t.value = !1;
    }
    function ie(K) {
      if (i.value || l.value || K.target.closest(`.${Pv("thumb")}`)) return;
      const re = N(K), ye = ce(re);
      U = ye, Te(re, ye), Y();
    }
    function Ee() {
      return Z(e.step) <= 0 ? (L0("Slider", '"step" should be > 0'), !1) : !0;
    }
    function Ue() {
      const { range: K, modelValue: re } = e;
      return K && !We(re) ? (At("Slider", '"modelValue" should be an Array'), !1) : !K && We(re) ? (At("Slider", '"modelValue" should be a Number'), !1) : K && We(re) && re.length < 2 ? (At("Slider", '"modelValue" should have two value'), !1) : !0;
    }
    function nn(K = e.modelValue, re = Z(e.step)) {
      const ye = (Pe) => {
        const { min: Ge, max: rn } = e;
        return Pe < Z(Ge) ? 0 : Pe > Z(rn) ? o.value / re : (Pe - Z(Ge)) / re;
      };
      e.range && We(K) ? (R[On.First].percentValue = ye(K[0]), R[On.First].currentOffset = R[On.First].percentValue * a.value, R[On.Second].percentValue = ye(K[1]), R[On.Second].currentOffset = R[On.Second].percentValue * a.value) : nr(K) && (R[On.First].currentOffset = ye(K) * a.value);
    }
    function qe() {
      const K = e.range ? [0, 0] : 0;
      S(e["onUpdate:modelValue"], K), m();
    }
    function en(K, re) {
      const ye = Z(e.step);
      return We(re) ? [re[0] + (u.value ? K * ye : 0), re[1] + (d.value ? K * ye : 0)].map(Q) : Q(re + K * ye);
    }
    function on(K) {
      const re = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: ye } = K;
      if (!mo(re, ye) || l.value || i.value || e.range && !u.value && !d.value || !e.range && !u.value) return;
      Ze(K);
      const Pe = re[ye];
      ae(en(Pe, e.modelValue));
    }
    function be(K) {
      i.value || K.handleFocusing(!0);
    }
    function ee(K) {
      K.handleFocusing(!1);
    }
    return {
      sliderEl: r,
      getFillStyle: O,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: R,
      thumbList: T,
      handleFocus: be,
      handleBlur: ee,
      n: Pv,
      classes: VT,
      thumbStyle: A,
      hover: X,
      toSizeUnit: ze,
      toNumber: Z,
      showLabel: I,
      start: pe,
      move: Oe,
      end: Y,
      handleClick: ie
    };
  }
});
Pb.render = FT;
var pl = Pb;
de(pl);
fe(pl, Sb);
var qN = pl, mu = pl, HT = Object.defineProperty, UT = Object.defineProperties, jT = Object.getOwnPropertyDescriptors, Ov = Object.getOwnPropertySymbols, YT = Object.prototype.hasOwnProperty, KT = Object.prototype.propertyIsEnumerable, zv = (e, n, r) => n in e ? HT(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, WT = (e, n) => {
  for (var r in n || (n = {})) YT.call(n, r) && zv(e, r, n[r]);
  if (Ov)
    for (var r of Ov(n)) KT.call(n, r) && zv(e, r, n[r]);
  return e;
}, qT = (e, n) => UT(e, jT(n)), fd = {
  type: String,
  position: {
    type: String,
    default: "top"
  },
  content: [
    String,
    Function,
    Object
  ],
  contentClass: String,
  duration: {
    type: Number,
    default: 3e3
  },
  elevation: {
    type: [
      Boolean,
      String,
      Number
    ],
    default: !0
  },
  vertical: Boolean,
  loadingType: Fe(Yr, "type"),
  loadingSize: Fe(Yr, "size"),
  loadingRadius: Fe(Yr, "radius"),
  loadingColor: qT(WT({}, Fe(Yr, "color")), { default: "currentColor" }),
  lockScroll: Boolean,
  show: Boolean,
  teleport: {
    type: [
      String,
      Object,
      Boolean
    ],
    default: "body"
  },
  forbidClick: Boolean,
  onOpen: V(),
  onOpened: V(),
  onClose: V(),
  onClosed: V(),
  "onUpdate:show": V(),
  _update: String
}, { n: XT, classes: GT } = oe("snackbar"), ZT = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function JT(e, n) {
  const r = x("var-icon"), t = x("var-loading");
  return Ke((b(), k("div", {
    class: g(e.n()),
    style: J({
      pointerEvents: e.isForbidClick ? "auto" : "none",
      zIndex: e.zIndex
    })
  }, [L("div", {
    class: g(e.classes(e.n("wrapper"), e.n(`wrapper-${e.position}`), e.formatElevation(e.elevation, 4), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n(`wrapper-${e.type}`)])),
    style: J({ zIndex: e.zIndex })
  }, [
    L("div", { class: g([e.n("content"), e.contentClass]) }, [H(e.$slots, "default", {}, () => [Le(ve(e.content), 1)])], 2),
    e.iconName || e.type === "loading" || e.$slots.icon ? (b(), k("div", {
      key: 0,
      class: g(e.n("icon"))
    }, [
      e.iconName ? (b(), we(r, {
        key: 0,
        name: e.iconName
      }, null, 8, ["name"])) : q("v-if", !0),
      e.type === "loading" ? (b(), we(t, {
        key: 1,
        type: e.loadingType,
        size: e.loadingSize,
        color: e.loadingColor,
        radius: e.loadingRadius
      }, null, 8, [
        "type",
        "size",
        "color",
        "radius"
      ])) : q("v-if", !0),
      H(e.$slots, "icon")
    ], 2)) : q("v-if", !0),
    e.$slots.action ? (b(), k("div", {
      key: 1,
      class: g(e.n("action"))
    }, [H(e.$slots, "action")], 2)) : q("v-if", !0)
  ], 6)], 6)), [[yr, e.show]]);
}
var Ob = te({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Ct,
    VarIcon: Je
  },
  props: fd,
  setup(e) {
    const n = P(null), { zIndex: r } = Ao(() => e.show, 1);
    Mo(() => e.show, () => e.lockScroll);
    const t = C(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), o = C(() => e.type ? ZT[e.type] : "");
    function a() {
      n.value = setTimeout(() => {
        e.type !== "loading" && S(e["onUpdate:show"], !1);
      }, e.duration);
    }
    return me(() => e.show, (i) => {
      i ? (S(e.onOpen), a()) : (clearTimeout(n.value), S(e.onClose));
    }), me(() => e._update, () => {
      clearTimeout(n.value), a();
    }), En(() => {
      e.show && (S(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: Eb,
      zIndex: r,
      iconName: o,
      isForbidClick: t,
      n: XT,
      classes: GT,
      formatElevation: Pn
    };
  }
});
Ob.render = JT;
var zb = Ob, { name: QT, n: xT } = oe("snackbar");
function _T(e, n) {
  const r = x("var-snackbar-core");
  return b(), we(Hr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [j(bn, {
    name: `${e.n()}-fade`,
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: ue(() => [j(r, Xe(e.$props, { class: e.n("transition") }), Pr({
      default: ue(() => [H(e.$slots, "default")]),
      _: 2
    }, [e.$slots.icon ? {
      name: "icon",
      fn: ue(() => [H(e.$slots, "icon")]),
      key: "0"
    } : void 0, e.$slots.action ? {
      name: "action",
      fn: ue(() => [H(e.$slots, "action")]),
      key: "1"
    } : void 0]), 1040, ["class"])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]);
}
var Tb = te({
  name: QT,
  components: { VarSnackbarCore: zb },
  props: fd,
  setup() {
    const { disabled: e } = zt();
    return {
      disabled: e,
      n: xT
    };
  }
});
Tb.render = _T;
var ml = Tb, e5 = Object.defineProperty, Tv = Object.getOwnPropertySymbols, n5 = Object.prototype.hasOwnProperty, r5 = Object.prototype.propertyIsEnumerable, Ev = (e, n, r) => n in e ? e5(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Eo = (e, n) => {
  for (var r in n || (n = {})) n5.call(n, r) && Ev(e, r, n[r]);
  if (Tv)
    for (var r of Tv(n)) r5.call(n, r) && Ev(e, r, n[r]);
  return e;
}, Eb = [
  "loading",
  "success",
  "warning",
  "info",
  "error"
], Iv = 0, gu = !1, Ib, Io = !1, Bb = {
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
}, br = $n([]), vd = Bb, t5 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, ql = (e) => () => Yn(e) ? e() : e, o5 = { setup() {
  return () => {
    const e = br.map(({ id: n, reactiveSnackOptions: r, _update: t }) => {
      const o = document.querySelector(".var-transition-group");
      r.forbidClick || r.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto");
      const a = Eo({ position: Io ? "relative" : "absolute" }, d5(r.position)), { content: i, icon: l, action: s } = r, u = {
        default: ql(i),
        icon: ql(l),
        action: ql(s)
      };
      return j(zb, Xe(r, {
        key: n,
        style: a,
        "data-id": n,
        _update: t,
        show: r.show,
        "onUpdate:show": (d) => r.show = d
      }), u);
    });
    return j(p0, Xe(t5, {
      style: { zIndex: vr.zIndex },
      onAfterEnter: a5,
      onAfterLeave: i5
    }), { default: () => [e] });
  };
} }, Fr = function(e) {
  const n = s5(e), r = $n(Eo(Eo({}, vd), n));
  r.show = !0, gu || (gu = !0, Ib = Jt(o5).unmountInstance);
  const { length: t } = br, o = {
    id: Iv++,
    reactiveSnackOptions: r
  };
  return t === 0 || Io ? l5(o) : u5(r, `update-${Iv}`), { clear() {
    !Io && br.length ? br[0].reactiveSnackOptions.show = !1 : r.show = !1;
  } };
};
Eb.forEach((e) => {
  Fr[e] = (n) => (Tn(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Fr(n));
});
Fr.allowMultiple = function(e = !1) {
  e !== Io && (br.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Io = e);
};
Fr.clear = function() {
  br.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Fr.setDefaultOptions = function(e) {
  vd = e;
};
Fr.resetDefaultOptions = function() {
  vd = Bb;
};
function a5(e) {
  const n = e.getAttribute("data-id"), r = br.find((t) => t.id === Z(n));
  r && S(r.reactiveSnackOptions.onOpened);
}
function i5(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), r = br.find((t) => t.id === Z(n));
  r && (r.animationEnd = !0, S(r.reactiveSnackOptions.onClosed)), br.every((t) => t.animationEnd) && (S(Ib), br = $n([]), gu = !1);
}
function l5(e) {
  br.push(e);
}
function s5(e = {}) {
  return Sn(e) ? { content: e } : e;
}
function u5(e, n) {
  const [r] = br;
  r.reactiveSnackOptions = Eo(Eo({}, r.reactiveSnackOptions), e), r._update = n;
}
function d5(e = "top") {
  return e === "bottom" ? { top: "85%" } : { top: e === "top" ? "5%" : "45%" };
}
Fr.Component = ml;
de(ml);
de(ml, Fr);
fe(Fr, fd);
var XN = ml, hu = Fr, Db = {
  size: {
    type: [
      String,
      Number,
      Array
    ],
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
function fr(e) {
  return `calc(${e} / 2)`;
}
function c5(e, n, r) {
  const { direction: t, justify: o, index: a, lastIndex: i } = r;
  let l = "0";
  return t === "row" && ([
    "flex-start",
    "center",
    "flex-end",
    "start",
    "end"
  ].includes(o) ? a !== i ? l = `${fr(e)} ${n} ${fr(e)} 0` : l = `${fr(e)} 0` : o === "space-around" ? l = `${fr(e)} ${fr(n)}` : o === "space-between" && (a === 0 ? l = `${fr(e)} ${fr(n)} ${fr(e)} 0` : a === i ? l = `${fr(e)} 0 ${fr(e)} ${fr(n)}` : l = `${fr(e)} ${fr(n)}`)), t === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
var f5 = (e) => [
  "mini",
  "small",
  "normal",
  "large"
].includes(e), { name: v5, n: aa, classes: Bv } = oe("space");
function p5(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : We(e) ? e.map(ze) : [ze(e), ze(e)];
}
var gl = te({
  name: v5,
  props: Db,
  setup(e, { slots: n }) {
    return () => {
      var r;
      const { inline: t, justify: o, align: a, wrap: i, direction: l, size: s } = e, u = (r = S(n.default)) != null ? r : [], [d, c] = p5(s, f5(s)), f = Va(u), v = f.length - 1, p = f.map((h, m) => {
        var y;
        const $ = c5(d, c, {
          direction: l,
          justify: o,
          index: m,
          lastIndex: v
        });
        return j("div", {
          class: Bv([l === "column", aa("--auto")]),
          key: (y = h.key) != null ? y : void 0,
          style: { margin: $ }
        }, [h]);
      });
      return j("div", {
        class: Bv(aa(), aa("$--box"), [t, aa("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: ba(o),
          alignItems: ba(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${d} / 2) 0` : void 0
        }
      }, [p]);
    };
  }
});
de(gl);
fe(gl, Db);
var GN = gl, bu = gl, Mb = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Fe(pn, "name"),
  inactiveIcon: Fe(pn, "name"),
  activeIconNamespace: Fe(pn, "namespace"),
  currentIconNamespace: Fe(pn, "namespace"),
  inactiveIconNamespace: Fe(pn, "namespace")
}, Ab = /* @__PURE__ */ Symbol("STEPS_BIND_STEP_KEY");
function m5() {
  const { bindChildren: e, childProviders: n } = Bn(Ab);
  return {
    step: n,
    bindStep: e
  };
}
function g5() {
  const { parentProvider: e, index: n, bindParent: r } = In(Ab);
  return rr(!!r, "Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var { name: h5, n: b5, classes: y5 } = oe("step"), w5 = { key: 3 };
function k5(e, n) {
  const r = x("var-icon");
  return b(), k("div", { class: g(e.n()) }, [L("div", { class: g(e.n(e.direction)) }, [
    L("div", {
      class: g(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
      style: J({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
      onClick: n[0] || (n[0] = (...t) => e.click && e.click(...t))
    }, [e.isActive ? (b(), k("span", {
      key: 0,
      class: g(e.n("icon"))
    }, [H(e.$slots, "active-icon", {}, () => [j(r, {
      name: e.activeIcon,
      namespace: e.activeIconNamespace
    }, null, 8, ["name", "namespace"])])], 2)) : e.isCurrent && (e.$slots["current-icon"] || e.currentIcon) ? (b(), k("span", {
      key: 1,
      class: g(e.n("icon"))
    }, [H(e.$slots, "current-icon", {}, () => [j(r, {
      name: e.currentIcon,
      namespace: e.currentIconNamespace
    }, null, 8, ["name", "namespace"])])], 2)) : e.$slots["inactive-icon"] || e.inactiveIcon ? (b(), k("span", {
      key: 2,
      class: g(e.n("icon"))
    }, [H(e.$slots, "inactive-icon", {}, () => [j(r, {
      name: e.inactiveIcon,
      namespace: e.inactiveIconNamespace
    }, null, 8, ["name", "namespace"])])], 2)) : (b(), k("span", w5, ve(e.index + 1), 1))], 6),
    e.$slots.default ? (b(), k("div", {
      key: 0,
      class: g(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
      onClick: n[1] || (n[1] = (...t) => e.click && e.click(...t))
    }, [H(e.$slots, "default")], 2)) : q("v-if", !0),
    L("div", { class: g(e.n(`${e.direction}-line`)) }, null, 2)
  ], 2)], 2);
}
var Nb = te({
  name: h5,
  components: { VarIcon: Je },
  props: Mb,
  setup() {
    const { index: e, steps: n, bindSteps: r } = g5(), { active: t, activeColor: o, inactiveColor: a, direction: i, clickStep: l } = n, s = C(() => t.value === e.value), u = C(() => e.value !== -1 && Z(t.value) > e.value);
    r({ index: e });
    function d() {
      return l(e.value);
    }
    return {
      index: e,
      isActive: u,
      isCurrent: s,
      direction: i,
      activeColor: o,
      inactiveColor: a,
      n: b5,
      classes: y5,
      click: d
    };
  }
});
Nb.render = k5;
var hl = Nb;
de(hl);
fe(hl, Mb);
var ZN = hl, yu = hl, Rb = {
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
}, { name: $5, n: C5 } = oe("steps");
function S5(e, n) {
  return b(), k("div", {
    class: g(e.n()),
    style: J({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
  }, [H(e.$slots, "default")], 6);
}
var Vb = te({
  name: $5,
  props: Rb,
  setup(e) {
    const n = C(() => e.active), r = C(() => e.activeColor), t = C(() => e.inactiveColor), o = C(() => e.direction), { bindStep: a } = m5();
    a({
      active: n,
      direction: o,
      activeColor: r,
      inactiveColor: t,
      clickStep: i
    });
    function i(l) {
      S(e.onClickStep, l);
    }
    return { n: C5 };
  }
});
Vb.render = S5;
var bl = Vb;
de(bl);
fe(bl, Rb);
var JN = bl, wu = bl, Lb = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: P5, n: O5 } = oe("style-provider"), yl = te({
  name: P5,
  props: Lb,
  setup(e, { slots: n }) {
    return () => Fn(e.tag, {
      class: O5(),
      style: Cp(e.styleVars)
    }, S(n.default));
  }
}), Fb = "varlet-style-vars";
function Dv() {
  const e = document.head.querySelector(`#${Fb}`);
  e && document.head.removeChild(e);
}
function z5(e) {
  const n = document.createElement("style");
  n.id = Fb, n.innerHTML = e, document.head.appendChild(n);
}
function wl(e) {
  if (e == null) {
    Dv();
    return;
  }
  const n = Cp(e ?? {}), r = Object.entries(n).reduce((t, [o, a]) => (t += `${o}:${a};`, t), `:root:root {
`);
  Dv(), z5(`${r}
}`);
}
wl.Component = yl;
de(yl);
de(yl, wl);
fe(wl, Lb);
var QN = yl, ku = wl, Hb = {
  modelValue: { default: !1 },
  activeValue: { default: !0 },
  inactiveValue: { default: !1 },
  lazyChange: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  loading: Boolean,
  color: String,
  loadingColor: String,
  closeColor: String,
  size: [String, Number],
  variant: Boolean,
  rules: [
    Array,
    Function,
    Object
  ],
  tabindex: String,
  ripple: {
    type: Boolean,
    default: !0
  },
  buttonElevation: {
    type: [
      Boolean,
      String,
      Number
    ],
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
}, { name: T5, n: E5, classes: I5 } = oe("switch"), B5 = ["aria-checked"], D5 = ["tabindex"];
function M5(e, n) {
  const r = x("var-hover-overlay"), t = x("var-form-details"), o = _e("ripple"), a = _e("hover");
  return Ke((b(), k("div", {
    class: g(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [L("div", {
    ref: "switchRef",
    class: g(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
    style: J(e.styleComputed.switch),
    onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
  }, [L("div", {
    style: J(e.styleComputed.track),
    class: g(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
  }, null, 6), Ke((b(), k("div", {
    class: g(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
    style: J(e.styleComputed.ripple),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
  }, [L("div", {
    style: J(e.styleComputed.handle),
    class: g(e.classes(e.n("handle"), e.formatElevation(e.buttonElevation, 2), [e.isActive, e.n("handle--active")], [e.errorMessage && !e.variant, e.n("handle--error")], [e.hovering, e.n("handle--hover")]))
  }, [e.loading ? (b(), k("span", {
    key: 0,
    class: g(e.n("loading")),
    style: J({
      width: e.radius,
      height: e.radius
    })
  }, [...n[3] || (n[3] = [L("svg", { viewBox: "25 25 50 50" }, [L("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })], -1)])], 6)) : q("v-if", !0)], 6), j(r, {
    hovering: e.hovering && !e.disabled && !e.formDisabled,
    focusing: e.isFocusing && !e.disabled && !e.formDisabled
  }, null, 8, ["hovering", "focusing"])], 46, D5)), [[o, { disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly }]])], 6), j(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 10, B5)), [[
    a,
    e.hover,
    "desktop"
  ]]);
}
var Ub = te({
  name: T5,
  components: {
    VarFormDetails: Hn,
    VarHoverOverlay: Gn
  },
  directives: {
    Ripple: vn,
    Hover: jn
  },
  props: Hb,
  setup(e) {
    const n = P(null), r = P(!1), { bindForm: t, form: o } = Kn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Jn(), { hovering: u, handleHovering: d } = ur(), c = C(() => e.modelValue === e.activeValue), f = C(() => {
      const { size: T, color: O, closeColor: R, loadingColor: U, variant: M } = e;
      return {
        handle: {
          width: _n(T),
          height: _n(T),
          backgroundColor: c.value ? O : R,
          color: U
        },
        ripple: {
          left: c.value ? _n(T, 0.5) : `-${_n(T, M ? 1 / 3 : 0.5)}`,
          color: c.value ? O : R || "currentColor",
          width: _n(T, 2),
          height: _n(T, 2)
        },
        track: {
          width: _n(T, M ? 13 / 6 : 1.9),
          height: _n(T, M ? 4 / 3 : 0.72),
          borderRadius: _n(T, 2 / 3),
          filter: c.value || a?.value ? void 0 : `brightness(${M ? 1 : 0.6})`,
          backgroundColor: c.value ? O : R,
          borderWidth: M && !c.value ? _n(T, 1 / 12) : void 0
        },
        switch: {
          width: _n(T, M ? 13 / 6 : 2),
          height: _n(T, M ? 4 / 3 : 1.2)
        }
      };
    }), v = C(() => _n(e.size, 0.8));
    S(t, {
      reset: z,
      validate: m,
      resetValidation: s
    }), xe(() => window, "keydown", p), xe(() => window, "keyup", h);
    function p(T) {
      r.value && ((T.key === " " || T.key === "Enter") && Ze(T), T.key === "Enter" && n.value.click());
    }
    function h(T) {
      !r.value || T.key !== " " || (Ze(T), n.value.click());
    }
    function m() {
      return l(e.rules, e.modelValue);
    }
    function y(T) {
      Ne(() => {
        const { validateTrigger: O, rules: R, modelValue: U } = e;
        i(O, T, R, U);
      });
    }
    function $(T) {
      const { onClick: O, onChange: R, disabled: U, loading: M, readonly: D, activeValue: E, inactiveValue: B, lazyChange: N, "onUpdate:modelValue": A, onBeforeChange: I } = e;
      if (U || o?.disabled.value || (S(O, T), M || D || o?.readonly.value)) return;
      const F = c.value ? B : E;
      N ? S(I, F, (Q) => {
        S(A, Q), y("onLazyChange");
      }) : (S(A, F), S(R, F), y("onChange"));
    }
    function w(T) {
      e.disabled || o?.disabled.value || d(T);
    }
    function z() {
      S(e["onUpdate:modelValue"], e.inactiveValue), s();
    }
    return {
      isActive: c,
      switchRef: n,
      hovering: u,
      isFocusing: r,
      radius: v,
      styleComputed: f,
      errorMessage: a,
      formDisabled: o?.disabled,
      formReadonly: o?.readonly,
      n: E5,
      classes: I5,
      formatElevation: Pn,
      multiplySizeUnit: _n,
      switchActive: $,
      hover: w
    };
  }
});
Ub.render = M5;
var kl = Ub;
de(kl);
fe(kl, Hb);
var xN = kl, $u = kl, jb = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: V()
}, Yb = /* @__PURE__ */ Symbol("TABS_BIND_TAB_KEY");
function A5() {
  const { childProviders: e, bindChildren: n, length: r } = Bn(Yb);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function N5() {
  const { parentProvider: e, bindParent: n, index: r } = In(Yb);
  return rr(!!n, "Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var { name: R5, n: ia, classes: V5 } = oe("tab");
function L5(e, n) {
  const r = _e("ripple");
  return Ke((b(), k("div", {
    ref: "tabEl",
    class: g(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
    style: J({ color: e.computeColorStyle() }),
    onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
  }, [H(e.$slots, "default")], 6)), [[r, { disabled: e.disabled || !e.ripple }]]);
}
var Kb = te({
  name: R5,
  directives: { Ripple: vn },
  props: jb,
  setup(e) {
    const n = P(null), r = C(() => n.value), t = C(() => e.name), o = C(() => e.disabled), { index: a, tabs: i, bindTabs: l } = N5(), { onTabClick: s, active: u, activeColor: d, inactiveColor: c, disabledColor: f, itemDirection: v, resize: p } = i, h = {
      name: t,
      index: a,
      disabled: o,
      element: r
    };
    l(h), me(() => [e.name, e.disabled], p);
    function m() {
      return e.name != null ? u.value === e.name : u.value === a?.value;
    }
    function y() {
      return e.disabled ? f.value : m() ? d.value : c.value;
    }
    function $() {
      return e.disabled ? ia("$-tab--disabled") : m() ? ia("$-tab--active") : ia("$-tab--inactive");
    }
    function w(z) {
      const { disabled: T, name: O, onClick: R } = e;
      T || (S(R, O ?? a.value, z), s(h));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: c,
      itemDirection: v,
      n: ia,
      classes: V5,
      computeColorStyle: y,
      computeColorClass: $,
      handleClick: w
    };
  }
});
Kb.render = L5;
var $l = Kb;
de($l);
fe($l, jb);
var _N = $l, Cu = $l, Wb = { name: [String, Number] }, { name: F5, n: H5, classes: U5 } = oe("tab-item");
function j5(e, n) {
  const r = x("var-swipe-item");
  return b(), we(r, {
    class: g(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: ue(() => [H(e.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}
var qb = te({
  name: F5,
  components: { VarSwipeItem: Oo },
  props: Wb,
  setup(e) {
    const n = P(!1), r = C(() => e.name), { index: t, bindTabsItems: o } = Tz(), { bindLists: a } = Ez(), i = {
      index: t,
      name: r,
      current: C(() => n.value),
      setCurrent: l
    };
    o(i), a(i);
    function l(s) {
      n.value = s;
    }
    return {
      current: n,
      n: H5,
      classes: U5
    };
  }
});
qb.render = j5;
var Cl = qb;
de(Cl);
fe(Cl, Wb);
var e7 = Cl, Su = Cl, Xb = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  scrollerHeight: { type: [Number, String] },
  elevation: {
    type: [
      Boolean,
      Number,
      String
    ],
    default: !0
  },
  surface: String,
  plain: Boolean,
  bordered: Boolean
}, { name: Y5, n: K5, classes: W5 } = oe("table");
function q5(e, n) {
  return b(), k("div", { class: g(e.classes(e.n(), [!e.plain, e.formatElevation(e.elevation, 1)], e.n("$--box"), [e.surfaceLow, e.n("--surface-low")], [e.bordered, e.n("--bordered")], [e.plain, e.n("--plain")])) }, [L("div", {
    class: g(e.classes(e.n("main"), e.n("$--scrollbar"))),
    style: J({ "max-height": e.toSizeUnit(e.scrollerHeight) })
  }, [L("table", {
    class: g(e.n("table")),
    style: J({ width: e.toSizeUnit(e.fullWidth) })
  }, [H(e.$slots, "default")], 6)], 6), e.$slots.footer ? (b(), k("div", {
    key: 0,
    class: g(e.n("footer"))
  }, [H(e.$slots, "footer")], 2)) : q("v-if", !0)], 2);
}
var Gb = te({
  name: Y5,
  props: Xb,
  setup(e) {
    return {
      toSizeUnit: ze,
      n: K5,
      classes: W5,
      formatElevation: Pn,
      surfaceLow: C(() => e.surface === "low"),
      plain: C(() => e.plain)
    };
  }
});
Gb.render = q5;
var Sl = Gb;
de(Sl);
fe(Sl, Xb);
var n7 = Sl, Pu = Sl, Zb = {
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
    type: [
      Boolean,
      String,
      Number
    ],
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
  stickyCssMode: Fe(po, "cssMode"),
  stickyZIndex: Fe(po, "zIndex"),
  offsetTop: Fe(po, "offsetTop"),
  onClick: V(),
  onChange: V(),
  "onUpdate:active": V()
}, Mv = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: X5, n: G5, classes: Z5 } = oe("tabs");
function J5(e, n) {
  return b(), we(Xt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: ue(() => [L("div", Xe({
      class: e.classes(e.n(), e.n("$--box"), e.n(`--item-${e.itemDirection}`), e.n(`--layout-${e.layoutDirection}-padding`), e.formatElevation(e.elevation, 4), [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
      style: { background: e.color }
    }, e.$attrs), [L("div", {
      ref: "scrollerEl",
      class: g(e.classes(e.n("tab-wrap"), [e.localScrollable, e.n(`--layout-${e.layoutDirection}-scrollable`)], e.n(`--layout-${e.layoutDirection}`)))
    }, [H(e.$slots, "default"), L("div", {
      class: g(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
      style: J({
        width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
        height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
        transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
      })
    }, [L("div", {
      class: g(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
      style: J({ background: e.indicatorColor || e.activeColor })
    }, null, 6)], 6)], 2)], 16)]),
    _: 3
  }, 8, [
    "css-mode",
    "offset-top",
    "z-index"
  ]);
}
var Jb = te({
  name: X5,
  components: { VarSticky: To },
  inheritAttrs: !1,
  props: Zb,
  setup(e) {
    const n = P("0px"), r = P("0px"), t = P("0px"), o = P("0px"), a = P(!1), i = P(null), l = C(() => e.active), s = C(() => e.activeColor), u = C(() => e.inactiveColor), d = C(() => e.disabledColor), c = C(() => e.itemDirection), f = P(null), v = C(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: p, bindTabList: h, length: m } = A5();
    h({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: c,
      resize: U,
      onTabClick: y
    }), me(() => m.value, () => Mv(null, null, function* () {
      yield Xn(), U();
    })), me(() => [e.active, e.scrollable], U), vt(U), wr(U);
    function y(D) {
      var E;
      const B = (E = D.name.value) != null ? E : D.index.value, { active: N, onChange: A, onClick: I } = e;
      S(e["onUpdate:active"], B), S(I, B), B !== N && S(A, B);
    }
    function $() {
      return p.find(({ name: D }) => e.active === D.value);
    }
    function w(D) {
      return p.find(({ index: E }) => (D ?? e.active) === E.value);
    }
    function z() {
      if (m.value === 0) return;
      const { active: D } = e;
      if (nr(D)) {
        const E = hn(D, 0, m.value - 1);
        return S(e["onUpdate:active"], E), w(E);
      }
    }
    function T() {
      a.value = e.scrollable === "always" || p.length >= 5;
    }
    function O({ element: D }) {
      const E = D.value;
      E && (e.layoutDirection === "horizontal" ? (n.value = `${E.offsetWidth}px`, t.value = `${E.offsetLeft}px`) : (r.value = `${E.offsetHeight}px`, o.value = `${E.offsetTop}px`));
    }
    function R({ element: D }) {
      if (!a.value) return;
      const E = i.value, B = D.value;
      e.layoutDirection === "horizontal" ? go(E, {
        left: B.offsetLeft + B.offsetWidth / 2 - E.offsetWidth / 2,
        animation: ss
      }) : go(E, {
        top: B.offsetTop + B.offsetHeight / 2 - E.offsetHeight / 2,
        animation: ss
      });
    }
    function U() {
      const D = $() || w() || z();
      !D || D.disabled.value || (T(), O(D), R(D));
    }
    function M() {
      return Mv(this, null, function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
    }
    return {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: t,
      indicatorY: o,
      indicatorPosition: v,
      localScrollable: a,
      scrollerEl: i,
      Transition: bn,
      toSizeUnit: ze,
      n: G5,
      classes: Z5,
      resize: U,
      resizeSticky: M,
      formatElevation: Pn
    };
  }
});
Jb.render = J5;
var Pl = Jb;
de(Pl);
fe(Pl, Zb);
var r7 = Pl, Ou = Pl, Qb = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  animated: {
    type: Boolean,
    default: !0
  },
  loop: Boolean,
  "onUpdate:active": V()
}, Q5 = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: x5, n: _5 } = oe("tabs-items");
function eE(e, n) {
  const r = x("var-swipe");
  return b(), we(r, {
    ref: "swipe",
    class: g(e.n()),
    loop: e.loop,
    duration: e.animated ? void 0 : 0,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: ue(() => [H(e.$slots, "default")]),
    _: 3
  }, 8, [
    "class",
    "loop",
    "duration",
    "touchable",
    "onChange"
  ]);
}
var xb = te({
  name: x5,
  components: { VarSwipe: Po },
  props: Qb,
  setup(e) {
    const n = P(null), { tabItemList: r, bindTabItem: t, length: o } = zz();
    t({}), me(() => e.active, s), me(() => o.value, () => Q5(null, null, function* () {
      yield Xn(), s(e.active);
    }));
    function a(c) {
      return r.find(({ name: f }) => c === f.value);
    }
    function i(c) {
      return r.find(({ index: f }) => c === f.value);
    }
    function l(c) {
      return a(c) || i(c);
    }
    function s(c) {
      var f;
      const v = l(c);
      v && (r.forEach(({ setCurrent: p }) => p(!1)), v.setCurrent(!0), (f = n.value) == null || f.to(v.index.value));
    }
    function u(c) {
      var f;
      const v = r.find(({ index: h }) => h.value === c), p = (f = v.name.value) != null ? f : v.index.value;
      S(e["onUpdate:active"], p);
    }
    function d() {
      return n.value;
    }
    return {
      swipe: n,
      n: _5,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
xb.render = eE;
var Ol = xb;
de(Ol);
fe(Ol, Qb);
var t7 = Ol, zu = Ol;
function pd(e, n) {
  return Object.entries(e).reduce((r, [t, o]) => (r[t] = o.includes("px") ? o.replace(/(\d+(\.\d+)?)px/g, (a, i) => n(i)) : o, r), {});
}
var nE = {
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
}, rE = {
  "--alert-padding": "16px",
  "--alert-border-radius": "4px",
  "--alert-icon-size": "22px",
  "--alert-icon-margin": "1px 12px 0 0",
  "--alert-close-icon-size": "22px",
  "--alert-close-icon-margin": "1px 0 0 12px",
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
}, tE = {
  "--app-bar-color": "#272727",
  "--app-bar-surface-color": "var(--color-surface-container-high)",
  "--app-bar-surface-text-color": "var(--color-inverse-surface)",
  "--app-bar-surface-border-bottom": "thin solid var(--color-outline)",
  "--app-bar-title-padding": "0 12px",
  "--app-bar-title-font-size": "var(--font-size-lg)",
  "--app-bar-text-color": "#fff",
  "--app-bar-height": "54px",
  "--app-bar-left-gap": "6px",
  "--app-bar-right-gap": "6px",
  "--app-bar-border-radius": "4px",
  "--app-bar-font-size": "var(--font-size-lg)",
  "--app-bar-border-bottom": "thin solid var(--color-outline)"
}, oE = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, aE = { "--avatar-group-offset": "-10px" }, iE = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, lE = {
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
}, sE = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, uE = {
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
  "--bottom-navigation-item-variant-icon-margin-bottom": "6px",
  "--bottom-navigation-item-variant-icon-container-height": "30px",
  "--bottom-navigation-item-variant-icon-container-border-radius": "100px",
  "--bottom-navigation-item-variant-icon-container-max-width": "58px"
}, dE = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, cE = {
  "--button-default-color": "#303030",
  "--button-default-filled-color": "#303030",
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
  "--button-fab-size": "56px",
  "--button-fab-border-radius": "16px",
  "--button-mini-height": "20px",
  "--button-small-height": "28px",
  "--button-normal-height": "36px",
  "--button-large-height": "44px",
  "--button-mini-font-size": "var(--font-size-xs)",
  "--button-small-font-size": "var(--font-size-sm)",
  "--button-normal-font-size": "var(--font-size-md)",
  "--button-large-font-size": "var(--font-size-lg)"
}, fE = {
  "--card-title-color": "#ffffff",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa",
  "--card-padding": "0 0 15px 0",
  "--card-background": "var(--color-surface-container-highest)",
  "--card-outlined-background": "transparent",
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
}, vE = {
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
}, pE = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, mE = {
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
}, gE = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, hE = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, bE = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, yE = {
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
}, wE = {
  "--data-table-background": "#303030",
  "--data-table-surface-low-background": "#2a2a2a",
  "--data-table-header-cell-background": "#303030",
  "--data-table-header-cell-text-color": "rgba(255, 255, 255, 0.6)",
  "--data-table-body-cell-text-color": "#fff",
  "--data-table-border-color": "var(--color-outline)",
  "--data-table-row-hover-background": "#3a3a3a",
  "--data-table-surface-low-row-hover-background": "#2a2a2a",
  "--data-table-plain-row-hover-background": "hsla(var(--hsl-on-surface), 0.08)",
  "--data-table-sort-trigger-color": "hsla(var(--hsl-on-surface), 0.5)",
  "--data-table-sort-trigger-active-color": "var(--color-primary)",
  "--data-table-sort-trigger-hover-background": "hsla(var(--hsl-primary), 0.12)",
  "--data-table-empty-text-color": "var(--color-text-disabled)",
  "--data-table-resize-trigger-color": "hsla(var(--hsl-on-surface-variant), 0.36)",
  "--data-table-fixed-shadow-color": "rgba(0, 0, 0, 0.14)",
  "--data-table-border-radius": "2px",
  "--data-table-cell-normal-padding": "8px 16px",
  "--data-table-cell-small-padding": "4px 16px",
  "--data-table-cell-large-padding": "11px 16px",
  "--data-table-selection-cell-normal-padding": "8px 8px",
  "--data-table-selection-cell-small-padding": "4px 8px",
  "--data-table-selection-cell-large-padding": "11px 8px",
  "--data-table-expand-cell-normal-padding": "8px 8px",
  "--data-table-expand-cell-small-padding": "4px 8px",
  "--data-table-expand-cell-large-padding": "11px 8px",
  "--data-table-cell-font-size": "14px",
  "--data-table-header-font-size": "14px",
  "--data-table-header-font-weight": "500",
  "--data-table-row-height": "46px",
  "--data-table-row-small-height": "40px",
  "--data-table-row-large-height": "52px",
  "--data-table-footer-padding": "12px 16px",
  "--data-table-empty-padding": "48px 16px"
}, kE = {
  "--date-input-picker-width": "320px",
  "--date-input-time-select-separator-color": "var(--color-on-surface-variant)",
  "--date-input-time-select-border-color": "var(--color-outline)",
  "--date-input-time-select-active-color": "var(--color-primary)"
}, $E = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--day-picker-adjacent-item-color": "rgba(255, 255, 255, 0.56)",
  "--day-picker-disabled-item-color": "var(--color-text-disabled)",
  "--date-picker-header-color": "#fff",
  "--date-picker-border-radius": "4px",
  "--date-picker-font-size": "var(--font-size-md)",
  "--date-picker-min-width": "290px",
  "--date-picker-title-hint-color": "#aaaaaa",
  "--date-picker-title-hint-font-size": "var(--font-size-md)",
  "--date-picker-title-height": "105px",
  "--date-picker-title-padding": "20px 20px 16px",
  "--date-picker-title-background": "#303030",
  "--date-picker-title-color": "#fff",
  "--date-picker-title-date-height": "48px",
  "--date-picker-title-date-font-size": "34px",
  "--date-picker-title-date-font-weight": "500",
  "--date-picker-title-date-range-font-size": "20px",
  "--date-picker-title-date-justify-content": "normal",
  "--date-picker-body-height": "304px",
  "--date-picker-body-padding-horizontal": "12px",
  "--date-picker-body-padding": "0 var(--date-picker-body-padding-horizontal) 16px",
  "--date-picker-header-padding": "0 0 16px",
  "--date-picker-header-padding-top-no-title": "20px",
  "--date-picker-actions-padding": "10px 20px 20px",
  "--date-picker-header-arrow-filter": "opacity(1)",
  "--month-picker-padding": "0 12px",
  "--month-picker-item-width": "32%",
  "--month-picker-item-height": "46px",
  "--month-picker-item-button-max-width": "140px",
  "--month-picker-item-button-font-weight": "normal",
  "--year-picker-padding": "0 12px",
  "--year-picker-item-width": "32%",
  "--year-picker-item-height": "46px",
  "--year-picker-item-button-max-width": "140px",
  "--year-picker-item-button-font-weight": "normal",
  "--day-picker-content-item-width": "14.28%",
  "--day-picker-content-item-min-height": "21px",
  "--day-picker-content-item-font-size": "var(--font-size-md)",
  "--day-picker-content-item-padding": "2px 0",
  "--day-picker-content-item-button-width": "32px",
  "--day-picker-content-item-button-height": "32px",
  "--day-picker-content-item-button-font-size": "var(--font-size-md)",
  "--day-picker-head-item-font-size": "var(--font-size-md)",
  "--day-picker-head-item-padding": "8px 0",
  "--day-picker-head-item-font-weight": "normal"
}, CE = {
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
}, SE = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, PE = {
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
}, OE = {
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
  "--field-decorator-standard-small-margin-bottom": "0",
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
  "--field-decorator-outlined-small-icon-margin-bottom": "8px",
  "--field-decorator-filled-background-color": "var(--color-surface-container-high)",
  "--field-decorator-filled-border-radius": "4px",
  "--field-decorator-filled-normal-placeholder-hint-top": "4px",
  "--field-decorator-filled-normal-margin-top": "26px",
  "--field-decorator-filled-normal-margin-bottom": "6px",
  "--field-decorator-filled-normal-hint-center-margin-top": "16px",
  "--field-decorator-filled-normal-hint-margin-top": "16px",
  "--field-decorator-filled-normal-non-hint-margin-top": "16px",
  "--field-decorator-filled-normal-non-hint-margin-bottom": "16px",
  "--field-decorator-filled-normal-padding-left": "16px",
  "--field-decorator-filled-normal-padding-right": "16px",
  "--field-decorator-filled-normal-placeholder-space": "4px",
  "--field-decorator-filled-normal-icon-margin-top": "16px",
  "--field-decorator-filled-normal-icon-margin-bottom": "16px",
  "--field-decorator-filled-small-placeholder-hint-top": "2px",
  "--field-decorator-filled-small-margin-top": "18px",
  "--field-decorator-filled-small-margin-bottom": "2px",
  "--field-decorator-filled-small-hint-center-margin-top": "10px",
  "--field-decorator-filled-small-hint-margin-top": "10px",
  "--field-decorator-filled-small-padding-left": "12px",
  "--field-decorator-filled-small-padding-right": "12px",
  "--field-decorator-filled-small-placeholder-space": "2px",
  "--field-decorator-filled-small-icon-margin-top": "10px",
  "--field-decorator-filled-small-icon-margin-bottom": "10px",
  "--field-decorator-filled-small-non-hint-margin-top": "10px",
  "--field-decorator-filled-small-non-hint-margin-bottom": "10px"
}, zE = {
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
}, TE = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, EE = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, IE = { "--icon-size": "20px" }, BE = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, DE = {
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
}, ME = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, AE = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, NE = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, RE = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, VE = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, LE = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
}, FE = {
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
}, HE = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, UE = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, jE = {
  "--otp-input-gutter": "8px",
  "--otp-input-cell-height": "48px",
  "--otp-input-cell-max-width": "48px",
  "--otp-input-input-font-size": "20px"
}, YE = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, KE = {
  "--pagination-text-color": "#fff",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-item-background": "#303030",
  "--pagination-font-size": "var(--font-size-md)",
  "--pagination-active-color": "var(--color-on-primary)",
  "--pagination-active-bg-color": "var(--color-primary)",
  "--pagination-total-margin": "0 10px",
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
  "--pagination-size-padding": "0 4px",
  "--pagination-quick-jumper-margin": "0 10px"
}, WE = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-outlined-background": "transparent",
  "--paper-filled-background": "var(--color-surface-container-highest)",
  "--paper-outline-color": "var(--color-outline)",
  "--paper-border-radius": "4px"
}, qE = {
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
}, XE = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, GE = {
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
}, ZE = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, JE = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, QE = {
  "--rail-navigation-width": "80px",
  "--rail-navigation-background": "var(--color-surface-container-high)",
  "--rail-navigation-border-color": "var(--color-outline)",
  "--rail-navigation-padding": "12px 0",
  "--rail-navigation-start-padding": "4px 0",
  "--rail-navigation-end-padding": "4px 0",
  "--rail-navigation-item-gap": "4px"
}, xE = {
  "--rail-navigation-item-height": "64px",
  "--rail-navigation-item-padding": "6px 4px",
  "--rail-navigation-item-indicator-width": "56px",
  "--rail-navigation-item-indicator-height": "32px",
  "--rail-navigation-item-indicator-hover-background": "transparent",
  "--rail-navigation-item-indicator-pressed-background": "transparent",
  "--rail-navigation-item-indicator-active-background": "transparent",
  "--rail-navigation-item-inactive-text-color": "var(--color-on-surface-variant)",
  "--rail-navigation-item-active-text-color": "var(--color-primary)",
  "--rail-navigation-item-disabled-opacity": "var(--opacity-disabled)",
  "--rail-navigation-item-icon-size": "24px",
  "--rail-navigation-item-label-font-size": "var(--font-size-sm)",
  "--rail-navigation-item-label-line-height": "1.5"
}, _E = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, eI = {
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
}, nI = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, rI = {
  "--segmented-button-text-color": "var(--color-on-surface-variant)",
  "--segmented-button-checked-background": "hsla(var(--hsl-primary), 0.2)",
  "--segmented-button-checked-text-color": "var(--color-primary)",
  "--segmented-button-disabled-background": "var(--color-disabled)",
  "--segmented-button-disabled-color": "var(--color-text-disabled)",
  "--segmented-button-mini-padding": "0 8px",
  "--segmented-button-small-padding": "0 12px",
  "--segmented-button-normal-padding": "0 16px",
  "--segmented-button-large-padding": "0 22px",
  "--segmented-button-mini-height": "20px",
  "--segmented-button-small-height": "28px",
  "--segmented-button-normal-height": "36px",
  "--segmented-button-large-height": "44px",
  "--segmented-button-mini-font-size": "var(--font-size-xs)",
  "--segmented-button-small-font-size": "var(--font-size-sm)",
  "--segmented-button-normal-font-size": "var(--font-size-md)",
  "--segmented-button-large-font-size": "var(--font-size-lg)"
}, tI = {
  "--segmented-buttons-border-color": "var(--color-outline)",
  "--segmented-buttons-border-radius": "4px",
  "--segmented-buttons-border-width": "1px",
  "--segmented-buttons-error-border-color": "var(--color-danger)",
  "--segmented-buttons-error-color": "var(--color-danger)",
  "--segmented-buttons-error-checked-background": "hsla(var(--hsl-danger), 0.12)"
}, oI = {
  "--select-scroller-background": "#272727",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-scroller-border-radius": "2px",
  "--select-chips-margin": "-5px 0 0 0",
  "--select-chips-padding": "2px 0",
  "--select-chip-margin": "5px 5px 0 0",
  "--select-chip-background-color": "#555",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px",
  "--select-empty-text-color": "#aaaaaa",
  "--select-empty-height": "38px",
  "--select-empty-font-size": "14px"
}, aI = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "#fff",
  "--signature-height": "200px",
  "--signature-border-radius": "4px"
}, iI = {
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
}, lI = {
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
}, sI = {
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
}, uI = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, dI = {
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
}, cI = {
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
}, fI = {
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
  "--switch-variant-handle-active-background": "var(--color-on-primary)",
  "--switch-width": "40px",
  "--switch-height": "24px",
  "--switch-track-width": "38px",
  "--switch-track-height": "14.4px",
  "--switch-track-border-radius": "calc(20px * 2 / 3)",
  "--switch-handle-width": "20px",
  "--switch-handle-height": "20px",
  "--switch-ripple-size": "40px",
  "--switch-ripple-left": "-10px",
  "--switch-ripple-active-left": "10px",
  "--switch-loading-size": "16px",
  "--switch-variant-ripple-left": "-4px",
  "--switch-variant-ripple-active-left": "16px"
}, vI = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, pI = {
  "--table-background": "#303030",
  "--table-surface-low-background": "#2a2a2a",
  "--table-plain-row-hover-background": "hsla(var(--hsl-on-surface), 0.08)",
  "--table-surface-low-row-hover-background": "#2a2a2a",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-thead-th-text-align": "left",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#3a3a3a",
  "--table-border-radius": "2px",
  "--table-border": "thin solid var(--color-outline)",
  "--table-thead-border-bottom": "thin solid var(--color-outline)",
  "--table-thead-th-font-size": "14px",
  "--table-thead-th-font-weight": "500",
  "--table-thead-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-td-font-size": "14px",
  "--table-tbody-td-text-align": "left",
  "--table-row-height": "46px",
  "--table-row-padding": "8px 16px",
  "--table-footer-border-top": "thin solid var(--color-outline)"
}, mI = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, gI = {
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
}, hI = {
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
}, bI = {
  "--tree-menu-background": "var(--color-surface-container-high)",
  "--tree-menu-border-color": "var(--color-outline)",
  "--tree-menu-item-text-color": "var(--color-text)",
  "--tree-menu-padding": "8px 0",
  "--tree-menu-item-gap": "0px",
  "--tree-menu-item-height": "40px",
  "--tree-menu-item-padding": "0 16px",
  "--tree-menu-item-border-radius": "0",
  "--tree-menu-item-indent": "16px",
  "--tree-menu-item-icon-size": "22px",
  "--tree-menu-item-icon-margin-right": "24px",
  "--tree-menu-item-label-font-size": "var(--font-size-md)",
  "--tree-menu-item-label-line-height": "1.5",
  "--tree-menu-group-label-height": "32px",
  "--tree-menu-group-label-padding": "0 16px",
  "--tree-menu-group-label-color": "var(--color-on-surface-variant)",
  "--tree-menu-group-label-font-size": "var(--font-size-sm)",
  "--tree-menu-divider-margin": "8px 0",
  "--tree-menu-divider-color": "rgba(255, 255, 255, 0.12)",
  "--tree-menu-item-hover-background": "rgba(255, 255, 255, var(--opacity-hover))",
  "--tree-menu-item-pressed-background": "rgba(255, 255, 255, 0.2)",
  "--tree-menu-item-active-background": "hsla(var(--hsl-primary), 0.1)",
  "--tree-menu-item-active-text-color": "var(--color-primary)",
  "--tree-menu-item-disabled-opacity": "var(--opacity-disabled)",
  "--tree-menu-item-indicator-border-radius": "0",
  "--tree-menu-item-indicator-active-transition-duration": "0ms",
  "--tree-menu-expand-icon-color": "var(--color-on-surface-variant)",
  "--tree-menu-expand-icon-size": "20px"
}, yI = {
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
}, wI = { "--watermark-content-color": "#ffffff" }, kI = Object.defineProperty, Av = Object.getOwnPropertySymbols, $I = Object.prototype.hasOwnProperty, CI = Object.prototype.propertyIsEnumerable, Nv = (e, n, r) => n in e ? kI(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, $e = (e, n) => {
  for (var r in n || (n = {})) $I.call(n, r) && Nv(e, r, n[r]);
  if (Av)
    for (var r of Av(n)) CI.call(n, r) && Nv(e, r, n[r]);
  return e;
}, SI = $e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e($e({
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
}, cE), rE), vE), fE), gI), kE), $E), iI), mI), vI), XE), CE), nE), mE), lE), yI), hE), ZE), fI), dI), KE), pI), OE), JE), pE), rI), tI), SE), qE), tE), uE), LE), eI), dE), oE), AE), GE), UE), wI), HE), FE), aE), iE), sE), bE), yE), wE), QE), xE), PE), zE), TE), EE), IE), BE), DE), ME), jE), NE), RE), VE), YE), WE), _E), nI), lI), sI), uI), cI), hI), bI), oI), gE), aI), PI = {
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
}, OI = {
  "--alert-padding": "16px",
  "--alert-border-radius": "4px",
  "--alert-icon-size": "22px",
  "--alert-icon-margin": "1px 12px 0 0",
  "--alert-close-icon-size": "22px",
  "--alert-close-icon-margin": "1px 0 0 12px",
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
}, zI = {
  "--app-bar-color": "#211F26",
  "--app-bar-surface-color": "var(--color-surface-container)",
  "--app-bar-surface-text-color": "var(--color-inverse-surface)",
  "--app-bar-surface-border-bottom": "thin solid var(--color-outline)",
  "--app-bar-text-color": "var(--color-inverse-surface)",
  "--app-bar-title-padding": "0 12px",
  "--app-bar-title-font-size": "var(--font-size-lg)",
  "--app-bar-height": "54px",
  "--app-bar-left-gap": "6px",
  "--app-bar-right-gap": "6px",
  "--app-bar-border-radius": "4px",
  "--app-bar-font-size": "var(--font-size-lg)",
  "--app-bar-border-bottom": "thin solid var(--color-outline)"
}, TI = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, EI = { "--avatar-group-offset": "-10px" }, II = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, BI = {
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
}, DI = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, MI = {
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
  "--bottom-navigation-item-variant-icon-margin-bottom": "6px",
  "--bottom-navigation-item-variant-icon-container-height": "30px",
  "--bottom-navigation-item-variant-icon-container-border-radius": "100px",
  "--bottom-navigation-item-variant-icon-container-max-width": "58px"
}, AI = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, NI = {
  "--button-default-color": "#3B383E",
  "--button-default-filled-color": "#3B383E",
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
  "--button-fab-size": "56px",
  "--button-fab-border-radius": "16px",
  "--button-mini-height": "20px",
  "--button-small-height": "28px",
  "--button-normal-height": "36px",
  "--button-large-height": "44px",
  "--button-mini-font-size": "var(--font-size-xs)",
  "--button-small-font-size": "var(--font-size-sm)",
  "--button-normal-font-size": "var(--font-size-md)",
  "--button-large-font-size": "var(--font-size-lg)"
}, RI = {
  "--card-border-radius": "12px",
  "--card-background": "var(--color-surface-container-highest)",
  "--card-surface-low-background": "#1c1b1d",
  "--card-outlined-background": "transparent",
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
}, VI = {
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
}, LI = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, FI = {
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
}, HI = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, UI = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, jI = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, YI = {
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
}, KI = {
  "--data-table-background": "var(--color-surface-container-highest)",
  "--data-table-surface-low-background": "#1c1b1d",
  "--data-table-header-cell-background": "var(--color-surface-container-highest)",
  "--data-table-header-cell-text-color": "rgba(255, 255, 255, 0.6)",
  "--data-table-body-cell-text-color": "#fff",
  "--data-table-border-color": "var(--color-outline)",
  "--data-table-row-hover-background": "var(--color-surface-container-high)",
  "--data-table-surface-low-row-hover-background": "var(--color-surface-container-highest)",
  "--data-table-plain-row-hover-background": "hsla(var(--hsl-on-surface), 0.08)",
  "--data-table-sort-trigger-color": "hsla(var(--hsl-on-surface), 0.5)",
  "--data-table-sort-trigger-active-color": "var(--color-primary)",
  "--data-table-sort-trigger-hover-background": "hsla(var(--hsl-primary), 0.12)",
  "--data-table-empty-text-color": "var(--color-text-disabled)",
  "--data-table-resize-trigger-color": "hsla(var(--hsl-on-surface-variant), 0.36)",
  "--data-table-fixed-shadow-color": "rgba(0, 0, 0, 0.14)",
  "--data-table-border-radius": "2px",
  "--data-table-cell-normal-padding": "8px 16px",
  "--data-table-cell-small-padding": "4px 16px",
  "--data-table-cell-large-padding": "11px 16px",
  "--data-table-selection-cell-normal-padding": "8px 8px",
  "--data-table-selection-cell-small-padding": "4px 8px",
  "--data-table-selection-cell-large-padding": "11px 8px",
  "--data-table-expand-cell-normal-padding": "8px 8px",
  "--data-table-expand-cell-small-padding": "4px 8px",
  "--data-table-expand-cell-large-padding": "11px 8px",
  "--data-table-cell-font-size": "14px",
  "--data-table-header-font-size": "14px",
  "--data-table-header-font-weight": "500",
  "--data-table-row-height": "46px",
  "--data-table-row-small-height": "40px",
  "--data-table-row-large-height": "52px",
  "--data-table-footer-padding": "12px 16px",
  "--data-table-empty-padding": "48px 16px"
}, WI = {
  "--date-input-picker-width": "320px",
  "--date-input-time-select-separator-color": "var(--color-on-surface-variant)",
  "--date-input-time-select-border-color": "var(--color-outline)",
  "--date-input-time-select-active-color": "var(--color-primary)"
}, qI = {
  "--date-picker-title-background": "var(--color-surface-container-high)",
  "--date-picker-title-color": "var(--color-inverse-surface)",
  "--date-picker-title-hint-color": "var(--color-on-surface-variant)",
  "--date-picker-body-background-color": "var(--color-surface-container-high)",
  "--date-picker-main-color": "var(--color-inverse-surface)",
  "--date-picker-border-radius": "20px",
  "--date-picker-title-padding": "20px 20px 16px",
  "--date-picker-actions-padding": "10px 20px 20px",
  "--day-picker-head-item-color": "var(--color-inverse-surface)",
  "--day-picker-adjacent-item-color": "hsla(var(--hsl-on-surface-variant), 0.72)",
  "--day-picker-disabled-item-color": "var(--color-text-disabled)",
  "--date-picker-header-arrow-filter": "opacity(1)",
  "--date-picker-header-padding": "0 0 16px",
  "--date-picker-header-padding-top-no-title": "20px",
  "--date-picker-body-height": "304px",
  "--date-picker-body-padding-horizontal": "12px",
  "--date-picker-body-padding": "0 var(--date-picker-body-padding-horizontal) 16px",
  "--date-picker-header-color": "var(--color-on-surface-variant)",
  "--date-picker-font-size": "var(--font-size-md)",
  "--date-picker-min-width": "290px",
  "--date-picker-title-hint-font-size": "var(--font-size-md)",
  "--date-picker-title-height": "105px",
  "--date-picker-title-date-height": "48px",
  "--date-picker-title-date-font-size": "34px",
  "--date-picker-title-date-font-weight": "500",
  "--date-picker-title-date-range-font-size": "20px",
  "--date-picker-title-date-justify-content": "normal",
  "--month-picker-padding": "0 12px",
  "--month-picker-item-width": "32%",
  "--month-picker-item-height": "46px",
  "--month-picker-item-button-max-width": "140px",
  "--month-picker-item-button-font-weight": "normal",
  "--year-picker-padding": "0 12px",
  "--year-picker-item-width": "32%",
  "--year-picker-item-height": "46px",
  "--year-picker-item-button-max-width": "140px",
  "--year-picker-item-button-font-weight": "normal",
  "--day-picker-content-item-width": "14.28%",
  "--day-picker-content-item-min-height": "21px",
  "--day-picker-content-item-font-size": "var(--font-size-md)",
  "--day-picker-content-item-padding": "2px 0",
  "--day-picker-content-item-button-width": "32px",
  "--day-picker-content-item-button-height": "32px",
  "--day-picker-content-item-button-font-size": "var(--font-size-md)",
  "--day-picker-head-item-font-size": "var(--font-size-md)",
  "--day-picker-head-item-padding": "8px 0",
  "--day-picker-head-item-font-weight": "normal"
}, XI = {
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
}, GI = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, ZI = {
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
}, JI = {
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
  "--field-decorator-standard-small-margin-bottom": "0",
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
  "--field-decorator-outlined-small-icon-margin-bottom": "8px",
  "--field-decorator-filled-background-color": "var(--color-surface-container-high)",
  "--field-decorator-filled-border-radius": "4px",
  "--field-decorator-filled-normal-placeholder-hint-top": "4px",
  "--field-decorator-filled-normal-margin-top": "26px",
  "--field-decorator-filled-normal-margin-bottom": "6px",
  "--field-decorator-filled-normal-hint-center-margin-top": "16px",
  "--field-decorator-filled-normal-hint-margin-top": "16px",
  "--field-decorator-filled-normal-non-hint-margin-top": "16px",
  "--field-decorator-filled-normal-non-hint-margin-bottom": "16px",
  "--field-decorator-filled-normal-padding-left": "16px",
  "--field-decorator-filled-normal-padding-right": "16px",
  "--field-decorator-filled-normal-placeholder-space": "4px",
  "--field-decorator-filled-normal-icon-margin-top": "16px",
  "--field-decorator-filled-normal-icon-margin-bottom": "16px",
  "--field-decorator-filled-small-placeholder-hint-top": "2px",
  "--field-decorator-filled-small-margin-top": "18px",
  "--field-decorator-filled-small-margin-bottom": "2px",
  "--field-decorator-filled-small-hint-center-margin-top": "10px",
  "--field-decorator-filled-small-hint-margin-top": "10px",
  "--field-decorator-filled-small-padding-left": "12px",
  "--field-decorator-filled-small-padding-right": "12px",
  "--field-decorator-filled-small-placeholder-space": "2px",
  "--field-decorator-filled-small-icon-margin-top": "10px",
  "--field-decorator-filled-small-icon-margin-bottom": "10px",
  "--field-decorator-filled-small-non-hint-margin-top": "10px",
  "--field-decorator-filled-small-non-hint-margin-bottom": "10px"
}, QI = {
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
}, xI = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, _I = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, eB = { "--icon-size": "20px" }, nB = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, rB = {
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
}, tB = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, oB = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, aB = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, iB = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, lB = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, sB = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, uB = {
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
}, dB = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, cB = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, fB = {
  "--otp-input-gutter": "8px",
  "--otp-input-cell-height": "48px",
  "--otp-input-cell-max-width": "48px",
  "--otp-input-input-font-size": "20px"
}, vB = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, pB = {
  "--pagination-text-color": "#fff",
  "--pagination-item-background": "var(--color-surface-container)",
  "--pagination-font-size": "var(--font-size-md)",
  "--pagination-active-color": "var(--color-on-primary)",
  "--pagination-active-bg-color": "var(--color-primary)",
  "--pagination-hover-bg-color": "rgba(85, 85, 85, 0.15)",
  "--pagination-total-margin": "0 10px",
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
  "--pagination-size-padding": "0 4px",
  "--pagination-quick-jumper-margin": "0 10px"
}, mB = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-surface-low-background": "#1c1b1d",
  "--paper-outlined-background": "transparent",
  "--paper-filled-background": "var(--color-surface-container-highest)",
  "--paper-outline-color": "var(--color-outline)",
  "--paper-border-radius": "12px"
}, gB = {
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
}, hB = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, bB = {
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
}, yB = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, wB = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, kB = {
  "--rail-navigation-width": "80px",
  "--rail-navigation-background": "var(--color-surface-container)",
  "--rail-navigation-border-color": "var(--color-outline)",
  "--rail-navigation-padding": "12px 0",
  "--rail-navigation-start-padding": "4px 0",
  "--rail-navigation-end-padding": "4px 0",
  "--rail-navigation-item-gap": "4px"
}, $B = {
  "--rail-navigation-item-height": "64px",
  "--rail-navigation-item-padding": "6px 4px",
  "--rail-navigation-item-indicator-width": "56px",
  "--rail-navigation-item-indicator-height": "32px",
  "--rail-navigation-item-indicator-hover-background": "rgba(255, 255, 255, 0.08)",
  "--rail-navigation-item-indicator-pressed-background": "rgba(255, 255, 255, 0.12)",
  "--rail-navigation-item-indicator-active-background": "var(--color-info-container)",
  "--rail-navigation-item-inactive-text-color": "var(--color-on-surface-variant)",
  "--rail-navigation-item-active-text-color": "var(--color-on-info-container)",
  "--rail-navigation-item-disabled-opacity": "var(--opacity-disabled)",
  "--rail-navigation-item-icon-size": "24px",
  "--rail-navigation-item-label-font-size": "var(--font-size-sm)",
  "--rail-navigation-item-label-line-height": "1.5"
}, CB = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, SB = {
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
}, PB = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, OB = {
  "--segmented-button-text-color": "var(--color-on-surface-variant)",
  "--segmented-button-checked-background": "var(--color-info-container)",
  "--segmented-button-checked-text-color": "var(--color-on-info-container)",
  "--segmented-button-disabled-background": "var(--color-info-container)",
  "--segmented-button-disabled-color": "var(--color-text-disabled)",
  "--segmented-button-mini-padding": "0 8px",
  "--segmented-button-small-padding": "0 12px",
  "--segmented-button-normal-padding": "0 16px",
  "--segmented-button-large-padding": "0 22px",
  "--segmented-button-mini-height": "20px",
  "--segmented-button-small-height": "28px",
  "--segmented-button-normal-height": "36px",
  "--segmented-button-large-height": "44px",
  "--segmented-button-mini-font-size": "var(--font-size-xs)",
  "--segmented-button-small-font-size": "var(--font-size-sm)",
  "--segmented-button-normal-font-size": "var(--font-size-md)",
  "--segmented-button-large-font-size": "var(--font-size-lg)"
}, zB = {
  "--segmented-buttons-border-color": "#938F99",
  "--segmented-buttons-border-radius": "100px",
  "--segmented-buttons-border-width": "1px",
  "--segmented-buttons-error-border-color": "var(--color-danger)",
  "--segmented-buttons-error-color": "var(--color-danger)",
  "--segmented-buttons-error-checked-background": "hsla(var(--hsl-danger), 0.12)"
}, TB = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chips-margin": "-5px 0 0 0",
  "--select-chips-padding": "2px 0",
  "--select-chip-margin": "5px 5px 0 0",
  "--select-chip-background-color": "var(--color-surface-container-highest)",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px",
  "--select-empty-text-color": "var(--color-on-surface-variant)",
  "--select-empty-height": "38px",
  "--select-empty-font-size": "14px"
}, EB = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "var(--color-inverse-surface)",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, IB = {
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
}, BB = {
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
}, DB = {
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
}, MB = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, AB = {
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
}, NB = {
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
}, RB = {
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
  "--switch-variant-handle-active-background": "var(--color-on-primary)",
  "--switch-width": "40px",
  "--switch-height": "24px",
  "--switch-track-width": "38px",
  "--switch-track-height": "14.4px",
  "--switch-track-border-radius": "calc(20px * 2 / 3)",
  "--switch-handle-width": "20px",
  "--switch-handle-height": "20px",
  "--switch-ripple-size": "40px",
  "--switch-ripple-left": "-10px",
  "--switch-ripple-active-left": "10px",
  "--switch-loading-size": "16px",
  "--switch-variant-ripple-left": "-4px",
  "--switch-variant-ripple-active-left": "16px"
}, VB = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, LB = {
  "--table-background": "var(--color-surface-container-highest)",
  "--table-surface-low-background": "#1c1b1d",
  "--table-plain-row-hover-background": "hsla(var(--hsl-on-surface), 0.08)",
  "--table-surface-low-row-hover-background": "#1c1b1d",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-thead-th-text-align": "left",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "var(--color-surface-container-high)",
  "--table-border-radius": "2px",
  "--table-border": "thin solid var(--color-outline)",
  "--table-thead-border-bottom": "thin solid var(--color-outline)",
  "--table-thead-th-font-size": "14px",
  "--table-thead-th-font-weight": "500",
  "--table-thead-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-td-font-size": "14px",
  "--table-tbody-td-text-align": "left",
  "--table-row-height": "46px",
  "--table-row-padding": "8px 16px",
  "--table-footer-border-top": "thin solid var(--color-outline)"
}, FB = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, HB = {
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
}, UB = {
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
}, jB = {
  "--tree-menu-background": "var(--color-surface-container)",
  "--tree-menu-border-color": "var(--color-outline)",
  "--tree-menu-item-text-color": "var(--color-on-surface-variant)",
  "--tree-menu-padding": "8px 8px",
  "--tree-menu-item-gap": "1px",
  "--tree-menu-item-height": "48px",
  "--tree-menu-item-padding": "0 16px",
  "--tree-menu-item-border-radius": "24px",
  "--tree-menu-item-indent": "24px",
  "--tree-menu-item-icon-size": "24px",
  "--tree-menu-item-icon-margin-right": "12px",
  "--tree-menu-item-label-font-size": "var(--font-size-md)",
  "--tree-menu-item-label-line-height": "1.5",
  "--tree-menu-group-label-height": "32px",
  "--tree-menu-group-label-padding": "0 16px",
  "--tree-menu-group-label-color": "var(--color-on-surface-variant)",
  "--tree-menu-group-label-font-size": "var(--font-size-sm)",
  "--tree-menu-divider-margin": "8px 0",
  "--tree-menu-divider-color": "rgba(255, 255, 255, 0.12)",
  "--tree-menu-item-hover-background": "rgba(255, 255, 255, 0.08)",
  "--tree-menu-item-pressed-background": "rgba(255, 255, 255, 0.12)",
  "--tree-menu-item-active-background": "hsla(var(--hsl-info-container), 0.72)",
  "--tree-menu-item-active-text-color": "var(--color-on-info-container)",
  "--tree-menu-item-disabled-opacity": "var(--opacity-disabled)",
  "--tree-menu-item-indicator-border-radius": "24px",
  "--tree-menu-item-indicator-active-transition-duration": "300ms",
  "--tree-menu-expand-icon-color": "var(--color-on-surface-variant)",
  "--tree-menu-expand-icon-size": "20px"
}, YB = {
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
}, KB = { "--watermark-content-color": "#ffffff" }, WB = Object.defineProperty, Rv = Object.getOwnPropertySymbols, qB = Object.prototype.hasOwnProperty, XB = Object.prototype.propertyIsEnumerable, Vv = (e, n, r) => n in e ? WB(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ce = (e, n) => {
  for (var r in n || (n = {})) qB.call(n, r) && Vv(e, r, n[r]);
  if (Rv)
    for (var r of Rv(n)) XB.call(n, r) && Vv(e, r, n[r]);
  return e;
}, GB = Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce({
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
}, NI), OI), _I), sB), dB), uB), ZI), AI), oB), VI), mB), TI), JI), LI), wB), OB), zB), RI), FI), BI), UB), jB), bB), FB), VB), AB), GI), LB), pB), KB), UI), SB), zI), DI), MI), DB), PI), XI), yB), hB), gB), QI), II), TB), cB), YI), KI), RB), BB), YB), HB), WI), qI), CB), kB), $B), IB), EI), jI), xI), eB), nB), rB), tB), fB), aB), iB), lB), vB), PB), MB), NB), HI), EB), ZB = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, JB = {
  "--alert-padding": "16px",
  "--alert-border-radius": "4px",
  "--alert-icon-size": "22px",
  "--alert-icon-margin": "1px 12px 0 0",
  "--alert-close-icon-size": "22px",
  "--alert-close-icon-margin": "1px 0 0 12px",
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
}, QB = {
  "--app-bar-color": "var(--color-primary)",
  "--app-bar-surface-color": "var(--color-surface-container)",
  "--app-bar-surface-text-color": "var(--color-inverse-surface)",
  "--app-bar-surface-border-bottom": "thin solid var(--color-outline)",
  "--app-bar-title-padding": "0 12px",
  "--app-bar-title-font-size": "var(--font-size-lg)",
  "--app-bar-text-color": "#fff",
  "--app-bar-height": "54px",
  "--app-bar-left-gap": "6px",
  "--app-bar-right-gap": "6px",
  "--app-bar-border-radius": "4px",
  "--app-bar-font-size": "var(--font-size-lg)",
  "--app-bar-border-bottom": "thin solid var(--color-outline)"
}, xB = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, _B = { "--avatar-group-offset": "-10px" }, eD = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, nD = {
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
}, rD = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, tD = {
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
  "--bottom-navigation-item-variant-icon-margin-bottom": "6px",
  "--bottom-navigation-item-variant-icon-container-height": "30px",
  "--bottom-navigation-item-variant-icon-container-border-radius": "100px",
  "--bottom-navigation-item-variant-icon-container-max-width": "58px"
}, oD = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, aD = {
  "--button-default-color": "var(--color-surface-container-low)",
  "--button-default-filled-color": "var(--color-surface-container-high)",
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
  "--button-fab-size": "56px",
  "--button-fab-border-radius": "16px",
  "--button-mini-height": "20px",
  "--button-small-height": "28px",
  "--button-normal-height": "36px",
  "--button-large-height": "44px",
  "--button-mini-font-size": "var(--font-size-xs)",
  "--button-small-font-size": "var(--font-size-sm)",
  "--button-normal-font-size": "var(--font-size-md)",
  "--button-large-font-size": "var(--font-size-lg)"
}, iD = {
  "--card-border-radius": "12px",
  "--card-background": "var(--color-surface-container-low)",
  "--card-surface-low-background": "var(--color-surface-container-low)",
  "--card-outlined-background": "transparent",
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
}, lD = {
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
}, sD = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, uD = {
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
}, dD = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, cD = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, fD = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, vD = {
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
}, pD = {
  "--data-table-background": "var(--color-surface-container-low)",
  "--data-table-surface-low-background": "var(--color-surface-container-low)",
  "--data-table-header-cell-background": "var(--color-surface-container-low)",
  "--data-table-header-cell-text-color": "rgba(0, 0, 0, 0.6)",
  "--data-table-body-cell-text-color": "#555",
  "--data-table-border-color": "var(--color-outline)",
  "--data-table-row-hover-background": "var(--color-surface-container-high)",
  "--data-table-surface-low-row-hover-background": "var(--color-surface-container-highest)",
  "--data-table-plain-row-hover-background": "hsla(var(--hsl-on-surface), 0.04)",
  "--data-table-sort-trigger-color": "hsla(var(--hsl-on-surface), 0.42)",
  "--data-table-sort-trigger-active-color": "var(--color-primary)",
  "--data-table-sort-trigger-hover-background": "hsla(var(--hsl-primary), 0.08)",
  "--data-table-empty-text-color": "var(--color-text-disabled)",
  "--data-table-resize-trigger-color": "hsla(var(--hsl-on-surface-variant), 0.36)",
  "--data-table-fixed-shadow-color": "rgba(0, 0, 0, 0.04)",
  "--data-table-border-radius": "2px",
  "--data-table-cell-normal-padding": "8px 16px",
  "--data-table-cell-small-padding": "4px 16px",
  "--data-table-cell-large-padding": "11px 16px",
  "--data-table-selection-cell-normal-padding": "8px 8px",
  "--data-table-selection-cell-small-padding": "4px 8px",
  "--data-table-selection-cell-large-padding": "11px 8px",
  "--data-table-expand-cell-normal-padding": "8px 8px",
  "--data-table-expand-cell-small-padding": "4px 8px",
  "--data-table-expand-cell-large-padding": "11px 8px",
  "--data-table-cell-font-size": "14px",
  "--data-table-header-font-size": "14px",
  "--data-table-header-font-weight": "500",
  "--data-table-row-height": "46px",
  "--data-table-row-small-height": "40px",
  "--data-table-row-large-height": "52px",
  "--data-table-footer-padding": "12px 16px",
  "--data-table-empty-padding": "48px 16px"
}, mD = {
  "--date-input-picker-width": "320px",
  "--date-input-time-select-separator-color": "var(--color-on-surface-variant)",
  "--date-input-time-select-border-color": "var(--color-outline)",
  "--date-input-time-select-active-color": "var(--color-primary)"
}, gD = {
  "--date-picker-title-background": "var(--color-surface-container-high)",
  "--date-picker-title-color": "#1D1B20",
  "--date-picker-title-hint-color": "var(--color-on-surface-variant)",
  "--date-picker-body-background-color": "var(--color-surface-container-high)",
  "--date-picker-main-color": "#1D1B20",
  "--date-picker-border-radius": "20px",
  "--date-picker-title-padding": "20px 20px 16px",
  "--date-picker-actions-padding": "10px 20px 20px",
  "--day-picker-head-item-color": "#1D1B20",
  "--day-picker-adjacent-item-color": "hsla(var(--hsl-on-surface-variant), 0.72)",
  "--day-picker-disabled-item-color": "var(--color-text-disabled)",
  "--date-picker-header-arrow-filter": "opacity(1)",
  "--date-picker-header-padding": "0 0 16px",
  "--date-picker-header-padding-top-no-title": "20px",
  "--date-picker-body-height": "304px",
  "--date-picker-body-padding-horizontal": "12px",
  "--date-picker-body-padding": "0 var(--date-picker-body-padding-horizontal) 16px",
  "--date-picker-header-color": "var(--color-on-surface-variant)",
  "--date-picker-font-size": "var(--font-size-md)",
  "--date-picker-min-width": "290px",
  "--date-picker-title-hint-font-size": "var(--font-size-md)",
  "--date-picker-title-height": "105px",
  "--date-picker-title-date-height": "48px",
  "--date-picker-title-date-font-size": "34px",
  "--date-picker-title-date-font-weight": "500",
  "--date-picker-title-date-range-font-size": "20px",
  "--date-picker-title-date-justify-content": "normal",
  "--month-picker-padding": "0 12px",
  "--month-picker-item-width": "32%",
  "--month-picker-item-height": "46px",
  "--month-picker-item-button-max-width": "140px",
  "--month-picker-item-button-font-weight": "normal",
  "--year-picker-padding": "0 12px",
  "--year-picker-item-width": "32%",
  "--year-picker-item-height": "46px",
  "--year-picker-item-button-max-width": "140px",
  "--year-picker-item-button-font-weight": "normal",
  "--day-picker-content-item-width": "14.28%",
  "--day-picker-content-item-min-height": "21px",
  "--day-picker-content-item-font-size": "var(--font-size-md)",
  "--day-picker-content-item-padding": "2px 0",
  "--day-picker-content-item-button-width": "32px",
  "--day-picker-content-item-button-height": "32px",
  "--day-picker-content-item-button-font-size": "var(--font-size-md)",
  "--day-picker-head-item-font-size": "var(--font-size-md)",
  "--day-picker-head-item-padding": "8px 0",
  "--day-picker-head-item-font-weight": "normal"
}, hD = {
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
}, bD = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, yD = {
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
}, wD = {
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
  "--field-decorator-standard-small-margin-bottom": "0",
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
  "--field-decorator-outlined-small-icon-margin-bottom": "8px",
  "--field-decorator-filled-background-color": "var(--color-surface-container-high)",
  "--field-decorator-filled-border-radius": "4px",
  "--field-decorator-filled-normal-placeholder-hint-top": "4px",
  "--field-decorator-filled-normal-margin-top": "26px",
  "--field-decorator-filled-normal-margin-bottom": "6px",
  "--field-decorator-filled-normal-hint-center-margin-top": "16px",
  "--field-decorator-filled-normal-hint-margin-top": "16px",
  "--field-decorator-filled-normal-non-hint-margin-top": "16px",
  "--field-decorator-filled-normal-non-hint-margin-bottom": "16px",
  "--field-decorator-filled-normal-padding-left": "16px",
  "--field-decorator-filled-normal-padding-right": "16px",
  "--field-decorator-filled-normal-placeholder-space": "4px",
  "--field-decorator-filled-normal-icon-margin-top": "16px",
  "--field-decorator-filled-normal-icon-margin-bottom": "16px",
  "--field-decorator-filled-small-placeholder-hint-top": "2px",
  "--field-decorator-filled-small-margin-top": "18px",
  "--field-decorator-filled-small-margin-bottom": "2px",
  "--field-decorator-filled-small-hint-center-margin-top": "10px",
  "--field-decorator-filled-small-hint-margin-top": "10px",
  "--field-decorator-filled-small-padding-left": "12px",
  "--field-decorator-filled-small-padding-right": "12px",
  "--field-decorator-filled-small-placeholder-space": "2px",
  "--field-decorator-filled-small-icon-margin-top": "10px",
  "--field-decorator-filled-small-icon-margin-bottom": "10px",
  "--field-decorator-filled-small-non-hint-margin-top": "10px",
  "--field-decorator-filled-small-non-hint-margin-bottom": "10px"
}, kD = {
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
}, $D = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, CD = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, SD = { "--icon-size": "20px" }, PD = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, OD = {
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
}, zD = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, TD = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, ED = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, ID = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, BD = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, DD = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, MD = {
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
}, AD = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, ND = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, RD = {
  "--otp-input-gutter": "8px",
  "--otp-input-cell-height": "48px",
  "--otp-input-cell-max-width": "48px",
  "--otp-input-input-font-size": "20px"
}, VD = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, LD = {
  "--pagination-text-color": "#555",
  "--pagination-font-size": "var(--font-size-md)",
  "--pagination-active-color": "var(--color-on-primary)",
  "--pagination-active-bg-color": "var(--color-primary)",
  "--pagination-hover-bg-color": "rgba(85, 85, 85, 0.15)",
  "--pagination-total-margin": "0 10px",
  "--pagination-total-line-height": "24px",
  "--pagination-item-width": "32px",
  "--pagination-item-height": "32px",
  "--pagination-item-margin": "0 6px",
  "--pagination-item-background": "var(--color-surface-container)",
  "--pagination-item-border-radius": "4px",
  "--pagination-item-simple-border-radius": "50%",
  "--pagination-input-width": "32px",
  "--pagination-disabled-color": "var(--color-text-disabled)",
  "--pagination-bg-disabled-color": "var(--color-disabled)",
  "--pagination-size-line-height": "24px",
  "--pagination-size-padding": "0 4px",
  "--pagination-quick-jumper-margin": "0 10px"
}, FD = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-surface-low-background": "var(--color-surface-container-low)",
  "--paper-outlined-background": "transparent",
  "--paper-filled-background": "var(--color-surface-container-highest)",
  "--paper-outline-color": "var(--color-outline)",
  "--paper-border-radius": "12px"
}, HD = {
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
}, UD = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, jD = {
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
}, YD = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, KD = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, WD = {
  "--rail-navigation-width": "80px",
  "--rail-navigation-background": "var(--color-surface-container)",
  "--rail-navigation-border-color": "var(--color-outline)",
  "--rail-navigation-padding": "12px 0",
  "--rail-navigation-start-padding": "4px 0",
  "--rail-navigation-end-padding": "4px 0",
  "--rail-navigation-item-gap": "4px"
}, qD = {
  "--rail-navigation-item-height": "64px",
  "--rail-navigation-item-padding": "6px 4px",
  "--rail-navigation-item-indicator-width": "56px",
  "--rail-navigation-item-indicator-height": "32px",
  "--rail-navigation-item-indicator-hover-background": "rgba(0, 0, 0, 0.06)",
  "--rail-navigation-item-indicator-pressed-background": "rgba(0, 0, 0, 0.1)",
  "--rail-navigation-item-indicator-active-background": "var(--color-info-container)",
  "--rail-navigation-item-inactive-text-color": "var(--color-on-surface-variant)",
  "--rail-navigation-item-active-text-color": "var(--color-on-info-container)",
  "--rail-navigation-item-disabled-opacity": "var(--opacity-disabled)",
  "--rail-navigation-item-icon-size": "24px",
  "--rail-navigation-item-label-font-size": "var(--font-size-sm)",
  "--rail-navigation-item-label-line-height": "1.5"
}, XD = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, GD = {
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
}, ZD = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, JD = {
  "--segmented-button-text-color": "var(--color-on-surface-variant)",
  "--segmented-button-checked-background": "var(--color-info-container)",
  "--segmented-button-checked-text-color": "var(--color-on-info-container)",
  "--segmented-button-disabled-background": "var(--color-info-container)",
  "--segmented-button-disabled-color": "var(--color-text-disabled)",
  "--segmented-button-mini-padding": "0 8px",
  "--segmented-button-small-padding": "0 12px",
  "--segmented-button-normal-padding": "0 16px",
  "--segmented-button-large-padding": "0 22px",
  "--segmented-button-mini-height": "20px",
  "--segmented-button-small-height": "28px",
  "--segmented-button-normal-height": "36px",
  "--segmented-button-large-height": "44px",
  "--segmented-button-mini-font-size": "var(--font-size-xs)",
  "--segmented-button-small-font-size": "var(--font-size-sm)",
  "--segmented-button-normal-font-size": "var(--font-size-md)",
  "--segmented-button-large-font-size": "var(--font-size-lg)"
}, QD = {
  "--segmented-buttons-border-color": "#79747E",
  "--segmented-buttons-border-radius": "100px",
  "--segmented-buttons-border-width": "1px",
  "--segmented-buttons-error-border-color": "var(--color-danger)",
  "--segmented-buttons-error-color": "var(--color-danger)",
  "--segmented-buttons-error-checked-background": "hsla(var(--hsl-danger), 0.12)"
}, xD = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chips-margin": "-5px 0 0 0",
  "--select-chips-padding": "2px 0",
  "--select-chip-margin": "5px 5px 0 0",
  "--select-chip-background-color": "rgb(218, 212, 219)",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px",
  "--select-empty-text-color": "var(--color-on-surface-variant)",
  "--select-empty-height": "38px",
  "--select-empty-font-size": "14px"
}, _D = {
  "--signature-background-color": "var(--color-surface-container-low)",
  "--signature-stroke-color": "#1D1B20",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, eM = {
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
}, nM = {
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
}, rM = {
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
}, tM = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, oM = {
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
}, aM = {
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
}, iM = {
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
  "--switch-variant-handle-active-background": "var(--color-on-primary)",
  "--switch-width": "40px",
  "--switch-height": "24px",
  "--switch-track-width": "38px",
  "--switch-track-height": "14.4px",
  "--switch-track-border-radius": "calc(20px * 2 / 3)",
  "--switch-handle-width": "20px",
  "--switch-handle-height": "20px",
  "--switch-ripple-size": "40px",
  "--switch-ripple-left": "-10px",
  "--switch-ripple-active-left": "10px",
  "--switch-loading-size": "16px",
  "--switch-variant-ripple-left": "-4px",
  "--switch-variant-ripple-active-left": "16px"
}, lM = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, sM = {
  "--table-background": "var(--color-surface-container-low)",
  "--table-surface-low-background": "var(--color-surface-container-low)",
  "--table-plain-row-hover-background": "hsla(var(--hsl-on-surface), 0.04)",
  "--table-surface-low-row-hover-background": "var(--color-surface-container-highest)",
  "--table-tbody-tr-hover-background": "var(--color-surface-container-high)",
  "--table-border-radius": "2px",
  "--table-border": "thin solid var(--color-outline)",
  "--table-thead-border-bottom": "thin solid var(--color-outline)",
  "--table-thead-th-text-color": "rgba(0, 0, 0, 0.6)",
  "--table-thead-th-text-align": "left",
  "--table-thead-th-font-size": "14px",
  "--table-thead-th-font-weight": "500",
  "--table-thead-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-td-text-color": "#555",
  "--table-tbody-td-font-size": "14px",
  "--table-tbody-td-text-align": "left",
  "--table-row-height": "46px",
  "--table-row-padding": "8px 16px",
  "--table-footer-border-top": "thin solid var(--color-outline)"
}, uM = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, dM = {
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
}, cM = {
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
}, fM = {
  "--tree-menu-background": "var(--color-surface-container)",
  "--tree-menu-border-color": "var(--color-outline)",
  "--tree-menu-item-text-color": "var(--color-on-surface-variant)",
  "--tree-menu-padding": "8px 8px",
  "--tree-menu-item-gap": "1px",
  "--tree-menu-item-height": "48px",
  "--tree-menu-item-padding": "0 16px",
  "--tree-menu-item-border-radius": "24px",
  "--tree-menu-item-indent": "24px",
  "--tree-menu-item-icon-size": "24px",
  "--tree-menu-item-icon-margin-right": "12px",
  "--tree-menu-item-label-font-size": "var(--font-size-md)",
  "--tree-menu-item-label-line-height": "1.5",
  "--tree-menu-group-label-height": "32px",
  "--tree-menu-group-label-padding": "0 16px",
  "--tree-menu-group-label-color": "var(--color-on-surface-variant)",
  "--tree-menu-group-label-font-size": "var(--font-size-sm)",
  "--tree-menu-divider-margin": "8px 0",
  "--tree-menu-divider-color": "rgba(0, 0, 0, 0.12)",
  "--tree-menu-item-hover-background": "rgba(0, 0, 0, 0.06)",
  "--tree-menu-item-pressed-background": "rgba(0, 0, 0, 0.1)",
  "--tree-menu-item-active-background": "hsla(var(--hsl-info-container), 0.72)",
  "--tree-menu-item-active-text-color": "var(--color-on-info-container)",
  "--tree-menu-item-disabled-opacity": "var(--opacity-disabled)",
  "--tree-menu-item-indicator-border-radius": "24px",
  "--tree-menu-item-indicator-active-transition-duration": "300ms",
  "--tree-menu-expand-icon-color": "var(--color-on-surface-variant)",
  "--tree-menu-expand-icon-size": "20px"
}, vM = {
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
}, pM = { "--watermark-content-color": "#808080" }, mM = Object.defineProperty, Lv = Object.getOwnPropertySymbols, gM = Object.prototype.hasOwnProperty, hM = Object.prototype.propertyIsEnumerable, Fv = (e, n, r) => n in e ? mM(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Se = (e, n) => {
  for (var r in n || (n = {})) gM.call(n, r) && Fv(e, r, n[r]);
  if (Lv)
    for (var r of Lv(n)) hM.call(n, r) && Fv(e, r, n[r]);
  return e;
}, bM = Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se({
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
}, aD), JB), CD), DD), AD), MD), yD), oD), TD), lD), FD), xB), wD), sD), KD), JD), QD), iD), uD), cM), fM), uM), lM), sM), cD), GD), rD), tD), rM), ZB), hD), YD), UD), HD), kD), eD), xD), ND), nM), vM), dM), mD), gD), iM), XD), WD), qD), _B), nD), fD), vD), pD), bD), $D), SD), PD), OD), zD), RD), ED), ID), BD), VD), LD), jD), ZD), eM), tM), oM), aM), pM), QB), dD), _D);
function yM(e, n = {}) {
  const { rootFontSize: r = 16, unitPrecision: t = 6 } = n;
  return pd(e, (o) => `${Number((o / r).toFixed(t))}rem`);
}
function wM(e, n = {}) {
  const { viewportWidth: r = 375, viewportUnit: t = "vmin", unitPrecision: o = 6 } = n;
  return pd(e, (a) => `${Number((a / r * 100).toFixed(o))}${t}`);
}
var kM = {
  dark: SI,
  md3Light: bM,
  md3Dark: GB,
  toViewport: wM,
  toRem: yM,
  convert: pd
}, o7 = null, Tu = kM, gr = [
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11"
], er = [
  "00",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23"
], Hv = [
  "00",
  "05",
  "10",
  "15",
  "20",
  "25",
  "30",
  "35",
  "40",
  "45",
  "50",
  "55"
], _b = {
  modelValue: String,
  elevation: {
    type: [
      Boolean,
      Number,
      String
    ],
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
}, e0 = (e, n) => e === "24hr" || n === "am", md = (e, n, r) => {
  const t = gr.findIndex((a) => Z(a) === Z(r)), o = e0(e, n) ? r : er[t];
  return {
    hourStr: o,
    hourNum: Z(o)
  };
}, sr = (e) => {
  const [n, r, t] = e.split(":");
  return {
    hour: Z(n),
    minute: Z(r),
    second: Z(t)
  };
}, n0 = (e) => {
  var n, r;
  const { time: t, format: o, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: d, hourNum: c } = md(o, a, i);
  let f = !1, v = !1;
  if (u.includes(d)) return !0;
  if (l && !s) {
    const { hour: p, minute: h } = sr(l);
    f = p === c && t > h;
  }
  if (!l && s) {
    const { hour: p, minute: h } = sr(s);
    f = p === c && t < h;
  }
  if (l && s) {
    const { hour: p, minute: h } = sr(l), { hour: m, minute: y } = sr(s);
    f = m === c && t < y || p === c && t > h;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (r = e.allowedTime) == null ? void 0 : r.minutes(t)), f || v;
}, r0 = (e) => {
  var n, r;
  const { time: t, format: o, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: d } = e, { hourStr: c, hourNum: f } = md(o, a, i);
  let v = !1, p = !1;
  if (d.includes(c)) return !0;
  if (s && !u) {
    const { hour: h, minute: m, second: y } = sr(s);
    v = h === f && m < l || m === l && t > y;
  }
  if (!s && u) {
    const { hour: h, minute: m, second: y } = sr(u);
    v = h === f && m > l || m === l && t > y;
  }
  if (s && u) {
    const { hour: h, minute: m, second: y } = sr(s), { hour: $, minute: w, second: z } = sr(u);
    v = h === f && m < l || $ === f && w > l || h === f && m === l && t > y || $ === f && w === l && t < z;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(t)), v || p;
}, { n: $M, classes: CM } = oe("time-picker");
function SM(e, n) {
  return b(), k("div", { class: g(e.n("clock")) }, [
    L("div", {
      class: g(e.n("clock-hand")),
      style: J(e.handStyle)
    }, null, 6),
    (b(!0), k(Be, null, Ye(e.timeScales, (r, t) => (b(), k("div", {
      key: r,
      class: g(e.classes(e.n("clock-item"), [e.isActive(t, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
      style: J(e.getStyle(t, r, !1))
    }, ve(r), 7))), 128)),
    e.format === "24hr" && e.type === "hour" ? (b(), k("div", {
      key: 0,
      ref: "inner",
      class: g(e.n("clock-inner"))
    }, [(b(!0), k(Be, null, Ye(e.hours24, (r, t) => (b(), k("div", {
      key: r,
      class: g(e.classes(e.n("clock-item"), [e.isActive(t, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
      style: J(e.getStyle(t, r, !0))
    }, ve(r), 7))), 128))], 2)) : q("v-if", !0)
  ], 2);
}
var t0 = te({
  name: "Clock",
  props: {
    isInner: {
      type: Boolean,
      required: !0
    },
    rad: { type: Number },
    format: {
      type: String,
      default: "ampm"
    },
    allowedTime: { type: Object },
    time: {
      type: Object,
      required: !0
    },
    useSeconds: { type: Boolean },
    preventNextUpdate: { type: Boolean },
    type: {
      type: String,
      default: "hour"
    },
    ampm: {
      type: String,
      default: "am"
    },
    color: { type: String },
    min: { type: String },
    max: { type: String }
  },
  emits: ["update", "change-prevent-update"],
  setup(e, { emit: n }) {
    const r = P(null), t = P([]), o = P([]), a = C(() => ({
      transform: `rotate(${Z(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = C(() => {
      if (e.rad === void 0) return;
      const h = e.rad / 30;
      return h >= 0 ? h : h + 12;
    }), l = C(() => e.type === "hour" ? gr : Hv), s = (h, m) => {
      h = h ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const y = e.type === "minute" ? n0 : r0, $ = {
        time: Z(h),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: Z(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return m && e.type === "minute" && Reflect.deleteProperty($, "minute"), y($);
    }, u = () => {
      if (i.value === void 0) return e.color;
      const h = e.isInner ? er[i.value] : l.value[i.value];
      return l.value === Hv ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : c(h) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, d = (h, m) => m ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), c = (h) => {
      if (e.type === "hour") {
        if (e0(e.format, e.ampm)) return t.value.includes(h);
        const m = gr.findIndex((y) => y === h);
        return o.value.includes(m);
      }
      return s(h, !0);
    }, f = (h, m, y) => {
      const $ = 2 * Math.PI / 12 * h - Math.PI / 2, w = 50 * (1 + Math.cos($)), z = 50 * (1 + Math.sin($)), T = () => d(h, y) ? c(m) ? {
        backgroundColor: "var(--time-picker-clock-item-disable-background)",
        color: "var(--time-picker-clock-item-disable-color)"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: O, color: R } = T();
      return {
        left: `${w}%`,
        top: `${z}%`,
        backgroundColor: O,
        color: R
      };
    }, v = () => {
      const { width: h, height: m } = kn(r.value);
      return {
        width: h,
        height: m
      };
    }, p = () => {
      if (i.value !== void 0)
        return Gr((e.ampm === "am" ? gr : er)[i.value], 2, "0");
    };
    return me([i, () => e.isInner], ([h, m], [y, $]) => {
      if (h === y && m === $ || e.type !== "hour" || i.value === void 0) return;
      const w = m ? er[i.value] : p(), z = e.useSeconds ? `:${e.time.second}` : "", T = `${w}:${e.time.minute}${z}`;
      e.preventNextUpdate || n("update", T), n("change-prevent-update");
    }), me(() => e.rad, (h, m) => {
      if (e.type === "hour" || h === void 0 || m === void 0) return;
      const y = h / 6 >= 0 ? h / 6 : h / 6 + 60;
      if (y === (m / 6 >= 0 ? m / 6 : m / 6 + 60)) return;
      let $;
      const { hourStr: w } = md(e.format, e.ampm, e.time.hour);
      if (e.type === "minute" && ($ = `${w}:${ln().minute(y).format("mm")}${e.useSeconds ? `:${e.time.second}` : ""}`), e.type === "second") {
        const z = ln().second(y).format("ss"), T = e.useSeconds ? `:${z}` : "";
        $ = `${w}:${e.time.minute}${T}`;
      }
      n("update", $);
    }), me([
      () => e.max,
      () => e.min,
      () => e.allowedTime
    ], ([h, m, y]) => {
      if (t.value = [], h && !m) {
        const { hour: $ } = sr(h), w = gr.filter((T) => Z(T) > $), z = er.filter((T) => Z(T) > $);
        t.value = [...w, ...z];
      }
      if (!h && m) {
        const { hour: $ } = sr(m), w = gr.filter((T) => Z(T) < $), z = er.filter((T) => Z(T) < $);
        t.value = [...w, ...z];
      }
      if (h && m) {
        const { hour: $ } = sr(h), { hour: w } = sr(m), z = gr.filter((O) => Z(O) < w || Z(O) > $), T = er.filter((O) => Z(O) < w || Z(O) > $);
        t.value = [...z, ...T];
      }
      if (y?.hours) {
        const { hours: $ } = y, w = gr.filter((T) => !$(Z(T))), z = er.filter((T) => !$(Z(T)));
        t.value = [.../* @__PURE__ */ new Set([
          ...t.value,
          ...w,
          ...z
        ])];
      }
      o.value = t.value.map(($) => er.findIndex((w) => $ === w)).filter(($) => $ >= 0);
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: $M,
      classes: CM,
      hours24: er,
      timeScales: l,
      inner: r,
      handStyle: a,
      disableHour: t,
      isActive: d,
      isDisable: c,
      getSize: v,
      getStyle: f,
      activeItemIndex: i
    };
  }
});
t0.render = SM;
var PM = t0, { name: OM, n: zM, classes: TM } = oe("time-picker");
function EM(e, n) {
  var r;
  const t = x("clock");
  return b(), k("div", {
    ref: "picker",
    class: g(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
  }, [
    L("div", {
      class: g(e.n("title")),
      style: J({ background: e.titleColor || e.color })
    }, [L("div", { class: g(e.n("title-hint")) }, ve((r = e.hint) != null ? r : (e.pt ? e.pt : e.t)("timePickerHint")), 3), L("div", { class: g(e.n("title-time-container")) }, [L("div", { class: g(e.n("title-time")) }, [
      L("div", {
        class: g(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
        onClick: n[0] || (n[0] = (o) => e.checkPanel("hour"))
      }, ve(e.time.hour), 3),
      L("span", { class: g(e.n("title-splitter")) }, ":", 2),
      L("div", {
        class: g(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
        onClick: n[1] || (n[1] = (o) => e.checkPanel("minute"))
      }, ve(e.time.minute), 3),
      e.useSeconds ? (b(), k("span", {
        key: 0,
        class: g(e.n("title-splitter"))
      }, ":", 2)) : q("v-if", !0),
      e.useSeconds ? (b(), k("div", {
        key: 1,
        class: g(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
        onClick: n[2] || (n[2] = (o) => e.checkPanel("second"))
      }, ve(e.time.second), 3)) : q("v-if", !0)
    ], 2), e.format === "ampm" ? (b(), k("div", {
      key: 0,
      class: g(e.n("title-ampm"))
    }, [L("div", {
      class: g(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
      onClick: n[3] || (n[3] = (o) => e.checkAmpm("am"))
    }, " AM ", 2), L("div", {
      class: g(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
      onClick: n[4] || (n[4] = (o) => e.checkAmpm("pm"))
    }, " PM ", 2)], 2)) : q("v-if", !0)], 2)], 6),
    L("div", { class: g(e.n("body")) }, [L("div", {
      ref: "container",
      class: g(e.n("clock-container")),
      onTouchstart: n[5] || (n[5] = (...o) => e.moveHand && e.moveHand(...o)),
      onTouchmove: n[6] || (n[6] = (...o) => e.moveHand && e.moveHand(...o)),
      onTouchend: n[7] || (n[7] = (...o) => e.end && e.end(...o))
    }, [j(bn, { name: `${e.n()}-panel-fade` }, {
      default: ue(() => [(b(), we(t, {
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
      }, null, 8, [
        "type",
        "ampm",
        "color",
        "is-inner",
        "format",
        "allowed-time",
        "rad",
        "time",
        "prevent-next-update",
        "use-seconds",
        "max",
        "min",
        "onUpdate",
        "onChangePreventUpdate"
      ]))]),
      _: 1
    }, 8, ["name"])], 34)], 2),
    e.$slots.actions ? (b(), k("div", {
      key: 0,
      class: g(e.n("actions"))
    }, [H(e.$slots, "actions")], 2)) : q("v-if", !0)
  ], 2);
}
var o0 = te({
  name: OM,
  components: { Clock: PM },
  props: _b,
  setup(e) {
    const n = P(null), r = P(null), t = P(null), o = P(!1), a = P(!1), i = P(!1), l = P(!1), s = P(!1), u = P(!1), d = P(!1), c = P(0), f = P(0), v = P(), p = P("hour"), h = P("am"), m = P({
      hour: "00",
      minute: "00",
      second: "00"
    }), y = $n({
      x: 0,
      y: 0
    }), $ = $n({
      x: [],
      y: []
    }), w = C(() => p.value === "hour" ? v.value : p.value === "minute" ? c.value : f.value), { t: z } = kr();
    me(() => e.modelValue, (G) => {
      if (G === void 0 || G === "") {
        T();
        return;
      }
      const { hour: ne, minute: pe, second: Oe } = sr(G), Y = ln().hour(ne).format("hh"), ie = ln().hour(ne).format("HH"), Ee = ln().minute(pe).format("mm"), Ue = ln().second(Oe).format("ss");
      v.value = (Y === "12" ? 0 : Z(Y)) * 30, c.value = Z(Ee) * 6, f.value = Z(Ue) * 6, m.value = B(G), e.format !== "24hr" && (h.value = Gr(`${ne}`, 2, "0") === ie && er.includes(ie) ? "pm" : "am"), o.value = e.format === "24hr" && er.includes(ie);
    }, { immediate: !0 });
    function T() {
      v.value = void 0, c.value = 0, f.value = 0, m.value = {
        hour: "00",
        minute: "00",
        second: "00"
      }, h.value = "am";
    }
    function O(G) {
      S(e["onUpdate:modelValue"], G), S(e.onChange, G);
    }
    function R(G) {
      return G * 57.29577951308232;
    }
    function U(G) {
      l.value = !1, d.value = !1, p.value = G;
    }
    function M(G) {
      const { disableHour: ne } = t.value, pe = gr.findIndex((Y) => Z(Y) === Z(m.value.hour)), Oe = G === "am" ? gr : er;
      return [...Oe.slice(pe), ...Oe.slice(0, pe)].find((Y, ie) => (a.value = ie !== 0, !ne.includes(Y)));
    }
    function D(G) {
      if (e.readonly) return;
      h.value = G;
      const ne = M(G);
      if (!ne) return;
      const pe = e.useSeconds ? `:${m.value.second}` : "";
      O(`${Gr(ne, 2, "0")}:${m.value.minute}${pe}`);
    }
    function E(G, ne) {
      const pe = G >= $.x[0] && G <= $.x[1], Oe = ne >= $.y[0] && ne <= $.y[1];
      return pe && Oe;
    }
    function B(G) {
      const ne = e.format === "24hr" ? "HH" : "hh", { hour: pe, minute: Oe, second: Y } = sr(G);
      return {
        hour: ln().hour(pe).format(ne),
        minute: ln().minute(Oe).format("mm"),
        second: ln().second(Y).format("ss")
      };
    }
    function N(G) {
      const ne = G / 30;
      return ne >= 0 ? ne : ne + 12;
    }
    function A() {
      const { width: G, height: ne } = t.value.getSize();
      return {
        rangeXMin: y.x - G / 2 - 8,
        rangeXMax: y.x + G / 2 + 8,
        rangeYMin: y.y - ne / 2 - 8,
        rangeYMax: y.y + ne / 2 + 8
      };
    }
    function I(G, ne, pe) {
      const { disableHour: Oe } = t.value;
      i.value = E(G, ne);
      const Y = Math.round(pe / 30) * 30 + 90, ie = N(Y), Ee = o.value ? gr[ie] : er[ie];
      if (Oe.includes(Ee) || (o.value = e.format === "24hr" ? E(G, ne) : !1), o.value !== i.value) return;
      const Ue = o.value || h.value === "pm" ? er[ie] : gr[ie];
      u.value = Oe.includes(Ue), !u.value && (v.value = Y, l.value = !0);
    }
    function F(G) {
      const { disableHour: ne } = t.value, pe = Math.round(G / 6) * 6 + 90;
      d.value = n0({
        time: pe / 6 >= 0 ? pe / 6 : pe / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: m.value.hour,
        max: e.max,
        min: e.min,
        disableHour: ne,
        allowedTime: e.allowedTime
      }), !d.value && (c.value = pe, s.value = !0);
    }
    function Q(G) {
      const { disableHour: ne } = t.value, pe = Math.round(G / 6) * 6 + 90;
      r0({
        time: pe / 6 >= 0 ? pe / 6 : pe / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: m.value.hour,
        minute: Z(m.value.minute),
        max: e.max,
        min: e.min,
        disableHour: ne,
        allowedTime: e.allowedTime
      }) || (f.value = pe);
    }
    function X() {
      const { left: G, top: ne, width: pe, height: Oe } = kn(n.value);
      if (y.x = G + pe / 2, y.y = ne + Oe / 2, p.value === "hour" && e.format === "24hr") {
        const { rangeXMin: Y, rangeXMax: ie, rangeYMin: Ee, rangeYMax: Ue } = A();
        $.x = [Y, ie], $.y = [Ee, Ue];
      }
    }
    function ae(G) {
      if (Ze(G), e.readonly) return;
      X();
      const { clientX: ne, clientY: pe } = G.touches[0], Oe = ne - y.x, Y = pe - y.y, ie = Math.round(R(Math.atan2(Y, Oe)));
      p.value === "hour" ? I(ne, pe, ie) : p.value === "minute" ? F(ie) : Q(ie);
    }
    function Te() {
      if (!e.readonly) {
        if (p.value === "hour" && l.value) {
          p.value = "minute";
          return;
        }
        p.value === "minute" && e.useSeconds && s.value && (p.value = "second");
      }
    }
    function ce() {
      a.value = !1;
    }
    return {
      getRad: w,
      time: m,
      container: n,
      inner: t,
      picker: r,
      isInner: o,
      type: p,
      ampm: h,
      isPreventNextUpdate: a,
      n: zM,
      classes: TM,
      t: gn,
      pt: z,
      moveHand: ae,
      checkPanel: U,
      checkAmpm: D,
      end: Te,
      update: O,
      changePreventUpdate: ce,
      formatElevation: Pn
    };
  }
});
o0.render = EM;
var zl = o0;
de(zl);
fe(zl, _b);
var a7 = zl, Eu = zl, a0 = {
  active: [Number, String],
  options: {
    type: Array,
    default: () => []
  },
  expandedValues: Array,
  valueKey: {
    type: String,
    default: "value"
  },
  labelKey: {
    type: String,
    default: "label"
  },
  iconKey: {
    type: String,
    default: "icon"
  },
  childrenKey: {
    type: String,
    default: "children"
  },
  accordion: Boolean,
  indent: { type: [String, Number] },
  ripple: {
    type: Boolean,
    default: !1
  },
  bordered: Boolean,
  disabled: Boolean,
  onChange: V(),
  "onUpdate:active": V(),
  "onUpdate:expandedValues": V()
}, { n: qn, classes: Uv } = oe("tree-menu");
function IM(e, n) {
  const r = x("maybe-v-node"), t = x("var-tree-menu-option"), o = x("var-collapse-transition");
  return b(), k("div", { class: g(e.n("option")) }, [e.option.type === "divider" ? (b(), k("div", {
    key: 0,
    class: g(e.n("divider"))
  }, null, 2)) : e.option.type === "group" ? (b(), k(Be, { key: 1 }, [j(r, { is: e.renderGroupLabel() }, null, 8, ["is"]), L("div", null, [(b(!0), k(Be, null, Ye(e.option.children, (a) => (b(), we(t, {
    key: a.value,
    option: a,
    ripple: e.ripple,
    onSelect: e.onSelect,
    onToggle: e.onToggle
  }, null, 8, [
    "option",
    "ripple",
    "onSelect",
    "onToggle"
  ]))), 128))])], 64)) : (b(), we(r, {
    key: 2,
    is: e.renderItem()
  }, null, 8, ["is"])), e.option.hasChildren ? (b(), we(o, {
    key: 3,
    expand: e.option.expanded
  }, {
    default: ue(() => [L("div", { class: g(e.n("children")) }, [(b(!0), k(Be, null, Ye(e.option.children, (a) => (b(), we(t, {
      key: a.value,
      option: a,
      ripple: e.ripple,
      onSelect: e.onSelect,
      onToggle: e.onToggle
    }, null, 8, [
      "option",
      "ripple",
      "onSelect",
      "onToggle"
    ]))), 128))], 2)]),
    _: 1
  }, 8, ["expand"])) : q("v-if", !0)], 2);
}
var i0 = te({
  name: "VarTreeMenuOption",
  components: {
    VarCollapseTransition: Ca,
    VarIcon: Je,
    MaybeVNode: lr
  },
  directives: { Ripple: vn },
  props: {
    option: {
      type: Object,
      required: !0
    },
    ripple: Boolean,
    onSelect: V(),
    onToggle: V()
  },
  setup(e) {
    function n() {
      if (!e.option.disabled) {
        if (e.option.hasChildren) {
          S(e.onToggle, e.option);
          return;
        }
        S(e.onSelect, e.option);
      }
    }
    function r() {
      const s = o(), u = e.option.option.render;
      return u ? u({ node: s }, e.option.option, e.option.active) : s;
    }
    function t() {
      const s = i();
      if (s)
        return Fn("div", { class: qn("group-label") }, [Fn(lr, { is: s })]);
    }
    function o() {
      return Ke(Fn("div", {
        class: Uv(qn("item"), [e.option.active, qn("--item-active")], [e.option.activePath, qn("--item-active-path")], [e.option.disabled, qn("--item-disabled")], [e.ripple && !e.option.disabled, qn("--item-ripple-enabled")]),
        style: { "--tree-menu-level": e.option.level },
        onClick: n
      }, [Fn("span", { class: qn("item-indicator") }), Fn("span", { class: qn("item-content") }, [
        a(),
        Fn("span", { class: qn("label") }, [Fn(lr, { is: i() })]),
        l()
      ])]), [[vn, { disabled: !e.ripple || e.option.disabled }]]);
    }
    function a() {
      const s = ir(e.option.icon, e.option.option, e.option.active);
      if (s)
        return Fn("span", { class: qn("icon-container") }, [Sn(s) ? Fn(Je, {
          class: qn("icon"),
          name: s,
          namespace: e.option.option.namespace,
          varTreeMenuCover: ""
        }) : Fn(lr, {
          class: qn("icon"),
          is: s
        })]);
    }
    function i() {
      return ir(e.option.label, e.option.option, e.option.active);
    }
    function l() {
      return e.option.hasChildren ? Fn("span", { class: Uv(qn("expand-icon"), [e.option.expanded, qn("--expand-icon-expanded")]) }, [Fn(Je, {
        name: "chevron-down",
        varTreeMenuCover: ""
      })]) : Fn("span", { class: qn("expand-placeholder") });
    }
    return {
      renderGroupLabel: t,
      renderItem: r,
      n: qn
    };
  }
});
i0.render = IM;
var BM = i0, { name: DM, n: MM, classes: AM } = oe("tree-menu");
function NM(e, n) {
  const r = x("tree-menu-option");
  return b(), k("nav", {
    class: g(e.classes(e.n(), e.n("$--box"), [e.bordered, e.n("--border")])),
    style: J(e.styles)
  }, [
    e.$slots.start ? H(e.$slots, "start", { key: 0 }) : q("v-if", !0),
    (b(!0), k(Be, null, Ye(e.treeMeta.options, (t) => (b(), we(r, {
      key: t.value,
      option: t,
      ripple: e.ripple,
      onSelect: e.handleSelect,
      onToggle: e.handleToggle
    }, null, 8, [
      "option",
      "ripple",
      "onSelect",
      "onToggle"
    ]))), 128)),
    e.$slots.end ? H(e.$slots, "end", { key: 1 }) : q("v-if", !0)
  ], 6);
}
var l0 = te({
  name: DM,
  components: { TreeMenuOption: BM },
  props: a0,
  setup(e) {
    const n = wn(e, "active"), r = wn(e, "expandedValues", { defaultValue: [] }), t = P({
      options: [],
      optionByValue: /* @__PURE__ */ new Map()
    }), o = C(() => e.indent == null ? {} : { "--tree-menu-item-indent": ze(e.indent) });
    me(() => [
      e.options,
      e.valueKey,
      e.labelKey,
      e.iconKey,
      e.childrenKey
    ], () => {
      t.value = a(), i();
    }, { immediate: !0 }), me(() => n.value, (v) => {
      if (v == null) {
        r.value = [];
        return;
      }
      d(v);
    }, { immediate: !0 }), me([
      n,
      r,
      () => e.disabled
    ], () => {
      i();
    }, { immediate: !0 });
    function a() {
      const v = /* @__PURE__ */ new Map(), p = h(e.options);
      p.forEach(m);
      function h(y, $, w = 0) {
        return y.reduce((z, T) => {
          if (T.show === !1) return z;
          const O = T.type, R = T[e.valueKey], U = T[e.childrenKey], M = {
            option: T,
            type: O,
            value: R,
            label: T[e.labelKey],
            icon: T[e.iconKey],
            active: !1,
            activePath: !1,
            disabled: !1,
            expanded: !1,
            hasChildren: !1,
            children: [],
            parent: $,
            level: w
          }, D = O === "group" ? w : w + 1;
          return M.children = We(U) ? h(U, M, D) : [], M.hasChildren = !O && M.children.length > 0, z.push(M), z;
        }, []);
      }
      function m(y) {
        v.set(y.value, y), y.children.forEach(m);
      }
      return {
        options: p,
        optionByValue: v
      };
    }
    function i() {
      var v;
      const p = new Set((v = r.value) != null ? v : []), h = n.value == null ? void 0 : t.value.optionByValue.get(n.value), m = new Set(h ? u(h) : []);
      t.value.options.forEach((y) => {
        l(y, p, m);
      });
    }
    function l(v, p, h) {
      v.active = n.value === v.value, v.activePath = h.has(v.value), v.disabled = e.disabled || !!v.option.disabled, v.expanded = p.has(v.value), v.children.forEach((m) => {
        l(m, p, h);
      });
    }
    function s(v) {
      const p = [];
      function h(m) {
        p.push(m.value), m.children.forEach(h);
      }
      return v.children.forEach(h), p;
    }
    function u(v) {
      const p = [];
      let h = v.parent;
      for (; h; )
        p.push(h.value), h = h.parent;
      return p;
    }
    function d(v) {
      const p = t.value.optionByValue.get(v);
      if (!p) return;
      const h = new Set(r.value);
      u(p).forEach((m) => {
        h.add(m);
      }), r.value = [...h];
    }
    function c(v) {
      n.value !== v.value && (n.value = v.value, S(e.onChange, v.value, v.option));
    }
    function f(v) {
      const p = new Set(r.value);
      if (p.has(v.value)) {
        p.delete(v.value), s(v).forEach((h) => p.delete(h)), r.value = [...p];
        return;
      }
      e.accordion && (v.parent ? v.parent.children : t.value.options).forEach((h) => {
        h.value !== v.value && (p.delete(h.value), s(h).forEach((m) => p.delete(m)));
      }), p.add(v.value), r.value = [...p];
    }
    return {
      n: MM,
      classes: AM,
      treeMeta: t,
      styles: o,
      handleSelect: c,
      handleToggle: f
    };
  }
});
l0.render = NM;
var Tl = l0;
de(Tl);
fe(Tl, a0);
var i7 = Tl, Iu = Tl, s0 = {
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
    type: [
      Boolean,
      Number,
      String
    ],
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
  rules: [
    Array,
    Function,
    Object
  ],
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
}, la = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: RM, n: VM, classes: LM } = oe("uploader"), FM = 0, HM = ["onClick"], UM = ["onClick"], jM = ["src", "alt"], YM = ["tabindex"], KM = [
  "multiple",
  "accept",
  "capture",
  "disabled"
], WM = ["src"];
function qM(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), o = x("var-form-details"), a = x("var-popup"), i = _e("ripple"), l = _e("hover");
  return b(), k("div", { class: g(e.classes(e.n(), e.n("$--box"))) }, [
    L("div", { class: g(e.n("file-list")) }, [(b(!0), k(Be, null, Ye(e.files, (s) => Ke((b(), k("div", {
      key: s.id,
      class: g(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
      onClick: (u) => e.preview(s)
    }, [
      L("div", { class: g(e.n("file-name")) }, ve(s.name || s.url), 3),
      e.removable ? H(e.$slots, "remove-button", {
        key: 0,
        remove: () => {
          e.handleRemove(s);
        }
      }, () => [L("div", {
        class: g(e.n("file-close")),
        onClick: Rn((u) => e.handleRemove(s), ["stop"])
      }, [j(r, {
        class: g(e.n("file-close-icon")),
        "var-uploader-cover": "",
        name: "delete"
      }, null, 8, ["class"])], 10, UM)]) : q("v-if", !0),
      s.cover ? (b(), k("img", {
        key: 1,
        role: "img",
        class: g(e.n("file-cover")),
        style: J({ objectFit: s.fit }),
        src: s.cover,
        alt: s.name
      }, null, 14, jM)) : q("v-if", !0),
      L("div", { class: g(e.n("file-indicator")) }, [L("div", {
        class: g(e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])),
        style: J({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
      }, null, 6)], 2)
    ], 10, HM)), [[i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]])), 128)), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Ke((b(), k("div", {
      key: 0,
      ref: "actionRef",
      class: g(e.classes(e.n("--outline-none"), [!e.$slots.default, `${e.n("action")} ${e.formatElevation(e.elevation, 2)}`], [e.disabled || e.formDisabled, e.n("--disabled")])),
      tabindex: e.disabled || e.formDisabled ? void 0 : "0",
      onClick: n[2] || (n[2] = (...s) => e.handleActionClick && e.handleActionClick(...s)),
      onFocus: n[3] || (n[3] = (s) => e.isFocusing = !0),
      onBlur: n[4] || (n[4] = (s) => e.isFocusing = !1)
    }, [L("input", {
      ref: "input",
      type: "file",
      class: g(e.n("action-input")),
      multiple: e.multiple,
      accept: e.accept,
      capture: e.capture,
      disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
      onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s)),
      onClick: n[1] || (n[1] = Rn(() => {
      }, ["stop"]))
    }, null, 42, KM), H(e.$slots, "default", {}, () => [j(r, {
      class: g(e.n("action-icon")),
      "var-uploader-cover": "",
      name: "plus"
    }, null, 8, ["class"]), j(t, {
      hovering: e.hovering && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly,
      focusing: e.isFocusing && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly
    }, null, 8, ["hovering", "focusing"])])], 42, YM)), [[i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default }], [
      l,
      e.handleHovering,
      "desktop"
    ]]) : q("v-if", !0)], 2),
    j(o, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText
    }, Pr({ _: 2 }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: ue(() => [H(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"]),
    j(a, {
      show: e.showPreview,
      "onUpdate:show": n[5] || (n[5] = (s) => e.showPreview = s),
      class: g(e.n("preview")),
      "var-uploader-cover": "",
      position: "center",
      onClosed: n[6] || (n[6] = (s) => e.currentPreview = null)
    }, {
      default: ue(() => {
        var s, u;
        return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (b(), k("video", {
          key: 0,
          class: g(e.n("preview-video")),
          playsinline: "true",
          "webkit-playsinline": "true",
          "x5-playsinline": "true",
          "x5-video-player-type": "h5",
          "x5-video-player-fullscreen": "false",
          controls: "",
          src: (u = e.currentPreview) == null ? void 0 : u.url
        }, null, 10, WM)) : q("v-if", !0)];
      }),
      _: 1
    }, 8, ["show", "class"])
  ], 2);
}
var u0 = te({
  name: RM,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarIcon: Je,
    VarPopup: ut,
    VarFormDetails: Hn,
    VarHoverOverlay: Gn
  },
  props: s0,
  setup(e) {
    const n = P(!1), r = P(null), t = P(null), o = P(!1), a = P(null), i = C(() => {
      const { maxlength: ce, modelValue: { length: G } } = e;
      return nr(ce) ? `${G} / ${ce}` : "";
    }), { form: l, bindForm: s } = Kn(), { errorMessage: u, validateWithTrigger: d, validate: c, resetValidation: f } = Jn(), { hovering: v, handleHovering: p } = ur(), h = C(() => {
      const { modelValue: ce, hideList: G } = e;
      return G ? [] : ce;
    });
    let m = !1;
    const y = {
      getSuccess: N,
      getError: A,
      getLoading: I
    };
    S(s, {
      validate: ae,
      resetValidation: f,
      reset: Te
    }), xe(() => window, "keydown", $), xe(() => window, "keyup", w), me(() => e.modelValue, () => {
      !m && X("onChange"), m = !1;
    }, { deep: !0 });
    function $(ce) {
      n.value && ((ce.key === " " || ce.key === "Enter") && ce.preventDefault(), ce.key === "Enter" && r.value.click());
    }
    function w(ce) {
      !n.value || ce.key !== " " || (ce.preventDefault(), r.value.click());
    }
    function z(ce) {
      const { disabled: G, previewed: ne, preventDefaultPreview: pe, onPreview: Oe } = e;
      if (l?.disabled.value || G || !ne || (S(Oe, $n(ce)), pe)) return;
      const { url: Y } = ce;
      if (Tc(Y)) {
        zo(Y);
        return;
      }
      Ec(Y) && (a.value = ce, o.value = !0);
    }
    function T(ce) {
      return {
        id: FM++,
        url: "",
        cover: "",
        name: ce.name,
        file: ce,
        progress: 0
      };
    }
    function O(ce) {
      const { files: G } = ce.target;
      return Array.from(G);
    }
    function R(ce) {
      return la(this, null, function* () {
        const G = ce.file;
        if (e.resolveType === "default" && G.type.startsWith("image") || e.resolveType === "data-url") {
          const ne = yield R0(G);
          ce.cover = ne, ce.url = ne;
        }
        return ce;
      });
    }
    function U(ce) {
      return ce.map(R);
    }
    function M(ce) {
      const { onBeforeRead: G } = e;
      return ce.map((ne) => new Promise((pe) => {
        G || pe({
          valid: !0,
          varFile: ne
        });
        const Oe = qr(S(G, $n(ne)));
        Promise.all(Oe).then((Y) => {
          pe({
            valid: Y.every(Boolean),
            varFile: ne
          });
        });
      }));
    }
    function D(ce) {
      return la(this, null, function* () {
        const { maxsize: G, maxlength: ne, modelValue: pe, onOversize: Oe, onAfterRead: Y, onBeforeFilter: ie, readonly: Ee, disabled: Ue } = e;
        if (l?.disabled.value || l?.readonly.value || Ue || Ee) return;
        const nn = (K) => K.filter((re) => re.file.size > Z(G) ? (S(Oe, $n(re)), !1) : !0), qe = (K) => {
          const re = Math.min(K.length, Z(ne) - pe.length);
          return K.slice(0, re);
        }, en = (K) => la(null, null, function* () {
          if (!ie) return K;
          const re = qr(ie);
          for (const ye of re) K = yield ye(K);
          return K;
        });
        let on = O(ce).map(T);
        on = yield en(on), on = G != null ? nn(on) : on, on = ne != null ? qe(on) : on;
        const be = yield Promise.all(U(on)), ee = (yield Promise.all(M(be))).filter(({ valid: K }) => K).map(({ varFile: K }) => K);
        S(e["onUpdate:modelValue"], [...pe, ...ee]), ce.target.value = "", ee.forEach((K) => S(Y, $n(K)));
      });
    }
    function E(ce) {
      return la(this, null, function* () {
        const { disabled: G, readonly: ne, modelValue: pe, onBeforeRemove: Oe, onRemove: Y } = e;
        if (l?.disabled.value || l?.readonly.value || G || ne) return;
        if (Oe) {
          const Ee = qr(S(Oe, $n(ce)));
          if ((yield Promise.all(Ee)).some((Ue) => !Ue)) return;
        }
        const ie = pe.filter((Ee) => Ee !== ce);
        S(Y, $n(ce)), X("onRemove"), S(e["onUpdate:modelValue"], ie);
      });
    }
    function B(ce) {
      if (!(l?.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          S(e.onClickAction, F, ce);
          return;
        }
        F();
      }
    }
    function N() {
      return e.modelValue.filter((ce) => ce.state === "success");
    }
    function A() {
      return e.modelValue.filter((ce) => ce.state === "error");
    }
    function I() {
      return e.modelValue.filter((ce) => ce.state === "loading");
    }
    function F() {
      t.value.click();
    }
    function Q() {
      a.value = null, o.value = !1, zo.close();
    }
    function X(ce) {
      Ne(() => {
        const { validateTrigger: G, rules: ne, modelValue: pe } = e;
        d(G, ce, ne, pe, y);
      });
    }
    function ae() {
      return c(e.rules, e.modelValue, y);
    }
    function Te() {
      m = !0, S(e["onUpdate:modelValue"], []), f();
    }
    return {
      input: t,
      actionRef: r,
      files: h,
      showPreview: o,
      currentPreview: a,
      errorMessage: u,
      maxlengthText: i,
      hovering: v,
      isFocusing: n,
      formDisabled: l?.disabled,
      formReadonly: l?.readonly,
      n: VM,
      classes: LM,
      formatElevation: Pn,
      toNumber: Z,
      handleHovering: p,
      isHTMLSupportVideo: Ec,
      isHTMLSupportImage: Tc,
      preview: z,
      handleChange: D,
      handleRemove: E,
      getSuccess: N,
      getError: A,
      getLoading: I,
      validate: ae,
      resetValidation: f,
      reset: Te,
      chooseFile: F,
      closePreview: Q,
      handleActionClick: B,
      toSizeUnit: ze
    };
  }
});
u0.render = qM;
var El = u0;
de(El);
fe(El, s0);
var l7 = El, Bu = El, d0 = {
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
}, XM = Object.defineProperty, GM = Object.defineProperties, ZM = Object.getOwnPropertyDescriptors, jv = Object.getOwnPropertySymbols, JM = Object.prototype.hasOwnProperty, QM = Object.prototype.propertyIsEnumerable, Yv = (e, n, r) => n in e ? XM(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, xM = (e, n) => {
  for (var r in n || (n = {})) JM.call(n, r) && Yv(e, r, n[r]);
  if (jv)
    for (var r of jv(n)) QM.call(n, r) && Yv(e, r, n[r]);
  return e;
}, _M = (e, n) => GM(e, ZM(n)), eA = (e, n, r) => new Promise((t, o) => {
  var a = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      o(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      o(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((r = r.apply(e, n)).next());
}), { name: nA, n: rA, classes: tA } = oe("watermark"), oA = { ref: "svgRef" }, aA = [
  "viewBox",
  "width",
  "height"
], iA = ["width", "height"], lA = [
  "href",
  "xlink:href",
  "x",
  "y",
  "width",
  "height"
];
function sA(e, n) {
  return b(), k("div", { class: g(e.n()) }, [H(e.$slots, "default"), (b(), we(Hr, {
    to: "body",
    disabled: !e.fullscreen
  }, [L("div", {
    ref: "containerRef",
    class: g(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
    style: J({
      backgroundImage: `url(${e.watermarkUrl})`,
      zIndex: e.zIndex
    })
  }, [Ke(L("div", oA, [(b(), k("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: `0 0 ${e.width + e.gapX} ${e.height + e.gapY}`,
    width: `${e.width + e.gapX}`,
    height: `${e.height + e.gapY}`,
    style: J({
      padding: `0 ${e.gapX}px ${e.gapY}px 0`,
      opacity: e.opacity
    })
  }, [e.showContent() ? (b(), k("foreignObject", {
    key: 0,
    x: "0",
    y: "0",
    width: e.width,
    height: e.height
  }, [L("div", {
    xmlns: "http://www.w3.org/1999/xhtml",
    style: J({
      transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
      transformOrigin: "center"
    })
  }, [H(e.$slots, "content", {}, () => [L("span", { style: J(_M(xM({}, e.font), {
    fontSize: `${e.font.fontSize}px`,
    color: e.textColor
  })) }, ve(e.content), 5)])], 4)], 8, iA)) : q("v-if", !0), !e.$slots.content && e.image ? (b(), k("image", {
    key: 1,
    href: e.imageUrl,
    "xlink:href": e.imageUrl,
    x: e.offsetX,
    y: e.offsetY,
    width: e.width,
    height: e.height,
    style: J({
      transform: `rotate(${e.rotate}deg)`,
      transformOrigin: "center"
    })
  }, null, 12, lA)) : q("v-if", !0)], 12, aA))], 512), [[yr, !1]])], 6)], 8, ["disabled"]))], 2);
}
var c0 = te({
  name: nA,
  props: d0,
  setup(e, { slots: n }) {
    const r = P(""), t = P(""), o = P(""), a = P(null), i = P(null);
    me(() => [
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
    ], c, { deep: !0 }), Tr(c), Bo(d);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return new Promise((f) => {
        const v = document.createElement("canvas"), p = v.getContext("2d"), h = new Image();
        h.crossOrigin = "anonymous", h.referrerPolicy = "no-referrer", h.src = e.image, h.onload = () => {
          v.width = h.width, v.height = h.height, p.drawImage(h, 0, 0), f(v.toDataURL());
        };
      });
    }
    function u(f) {
      const v = new Blob([f], { type: "image/svg+xml" });
      return URL.createObjectURL(v);
    }
    function d() {
      r.value && URL.revokeObjectURL(r.value);
    }
    function c() {
      return eA(this, null, function* () {
        o.value = Ur(i.value).color, e.image && (t.value = yield s()), yield Ne(), d(), r.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: r,
      imageUrl: t,
      textColor: o,
      n: rA,
      classes: tA,
      showContent: l,
      resize: c
    };
  }
});
c0.render = sA;
var Il = c0;
de(Il);
fe(Il, d0);
var s7 = Il, Du = Il, uA = "3.19.0";
function dA(e) {
  ns.install && e.use(ns), rs.install && e.use(rs), ts.install && e.use(ts), is.install && e.use(is), ds.install && e.use(ds), cs.install && e.use(cs), fs.install && e.use(fs), ko.install && e.use(ko), vs.install && e.use(vs), ps.install && e.use(ps), ms.install && e.use(ms), gs.install && e.use(gs), tr.install && e.use(tr), hs.install && e.use(hs), bs.install && e.use(bs), ys.install && e.use(ys), ct.install && e.use(ct), ws.install && e.use(ws), $a.install && e.use($a), $s.install && e.use($s), Cs.install && e.use(Cs), Ss.install && e.use(Ss), Ps.install && e.use(Ps), Ca.install && e.use(Ca), vr.install && e.use(vr), Os.install && e.use(Os), Is.install && e.use(Is), Ns.install && e.use(Ns), Rs.install && e.use(Rs), Vs.install && e.use(Vs), Ta.install && e.use(Ta), Fs.install && e.use(Fs), Hs.install && e.use(Hs), Ia.install && e.use(Ia), Us.install && e.use(Us), js.install && e.use(js), ho.install && e.use(ho), Ys.install && e.use(Ys), Ks.install && e.use(Ks), Hn.install && e.use(Hn), Ws.install && e.use(Ws), jn.install && e.use(jn), Gn.install && e.use(Gn), Je.install && e.use(Je), qs.install && e.use(qs), zo.install && e.use(zo), Xs.install && e.use(Xs), Gs.install && e.use(Gs), Lt.install && e.use(Lt), wo.install && e.use(wo), Zs.install && e.use(Zs), Js.install && e.use(Js), Ct.install && e.use(Ct), Qs.install && e.use(Qs), _l.install && e.use(_l), xs.install && e.use(xs), jt.install && e.use(jt), Ft.install && e.use(Ft), Yt.install && e.use(Yt), Da.install && e.use(Da), _s.install && e.use(_s), eu.install && e.use(eu), za.install && e.use(za), nu.install && e.use(nu), ru.install && e.use(ru), ut.install && e.use(ut), tu.install && e.use(tu), ou.install && e.use(ou), Co.install && e.use(Co), au.install && e.use(au), iu.install && e.use(iu), lu.install && e.use(lu), su.install && e.use(su), uu.install && e.use(uu), vn.install && e.use(vn), du.install && e.use(du), Ma.install && e.use(Ma), cu.install && e.use(cu), fu.install && e.use(fu), vu.install && e.use(vu), pu.install && e.use(pu), mu.install && e.use(mu), hu.install && e.use(hu), bu.install && e.use(bu), yu.install && e.use(yu), wu.install && e.use(wu), To.install && e.use(To), ku.install && e.use(ku), Po.install && e.use(Po), Oo.install && e.use(Oo), $u.install && e.use($u), Cu.install && e.use(Cu), Su.install && e.use(Su), Pu.install && e.use(Pu), Ou.install && e.use(Ou), zu.install && e.use(zu), Tu.install && e.use(Tu), Eu.install && e.use(Eu), Ba.install && e.use(Ba), Iu.install && e.use(Iu), Bu.install && e.use(Bu), Du.install && e.use(Du);
}
var u7 = {
  version: uA,
  install: dA,
  ActionSheet: ns,
  Alert: rs,
  AppBar: ts,
  AutoComplete: is,
  Avatar: ds,
  AvatarGroup: cs,
  BackTop: fs,
  Badge: ko,
  BottomNavigation: vs,
  BottomNavigationItem: ps,
  Breadcrumb: ms,
  Breadcrumbs: gs,
  Button: tr,
  ButtonGroup: hs,
  Card: bs,
  Cell: ys,
  Checkbox: ct,
  CheckboxGroup: ws,
  Chip: $a,
  Code: $s,
  Col: Cs,
  Collapse: Ss,
  CollapseItem: Ps,
  CollapseTransition: Ca,
  Context: vr,
  CountTo: Os,
  Countdown: Is,
  Counter: Ns,
  DataTable: Rs,
  DateInput: Vs,
  DatePicker: Ta,
  Dialog: Fs,
  Divider: Hs,
  Drag: Ia,
  Ellipsis: Us,
  Fab: js,
  FieldDecorator: ho,
  FloatingPanel: Ys,
  Form: Ks,
  FormDetails: Hn,
  HighlighterProvider: Ws,
  Hover: jn,
  HoverOverlay: Gn,
  Icon: Je,
  Image: qs,
  ImagePreview: zo,
  IndexAnchor: Xs,
  IndexBar: Gs,
  Input: Lt,
  Lazy: wo,
  Link: Zs,
  List: Js,
  Loading: Ct,
  LoadingBar: Qs,
  Locale: _l,
  LocaleProvider: xs,
  Menu: jt,
  MenuOption: Ft,
  MenuSelect: Yt,
  Option: Da,
  OtpInput: _s,
  Overlay: eu,
  Pagination: za,
  Paper: nu,
  Picker: ru,
  Popup: ut,
  Progress: tu,
  PullRefresh: ou,
  Radio: Co,
  RadioGroup: au,
  RailNavigation: iu,
  RailNavigationItem: lu,
  Rate: su,
  Result: uu,
  Ripple: vn,
  Row: du,
  SegmentedButton: Ma,
  SegmentedButtons: cu,
  Select: fu,
  Signature: vu,
  Skeleton: pu,
  Slider: mu,
  Snackbar: hu,
  Space: bu,
  Step: yu,
  Steps: wu,
  Sticky: To,
  StyleProvider: ku,
  Swipe: Po,
  SwipeItem: Oo,
  Switch: $u,
  Tab: Cu,
  TabItem: Su,
  Table: Pu,
  Tabs: Ou,
  TabsItems: zu,
  Themes: Tu,
  TimePicker: Eu,
  Tooltip: Ba,
  TreeMenu: Iu,
  Uploader: Bu,
  Watermark: Du
};
export {
  ns as ActionSheet,
  rs as Alert,
  ts as AppBar,
  is as AutoComplete,
  ds as Avatar,
  cs as AvatarGroup,
  fs as BackTop,
  ko as Badge,
  vs as BottomNavigation,
  ps as BottomNavigationItem,
  ms as Breadcrumb,
  gs as Breadcrumbs,
  tr as Button,
  hs as ButtonGroup,
  bs as Card,
  ys as Cell,
  ct as Checkbox,
  ws as CheckboxGroup,
  $a as Chip,
  $s as Code,
  Cs as Col,
  Ss as Collapse,
  Ps as CollapseItem,
  Ca as CollapseTransition,
  vr as Context,
  Os as CountTo,
  Is as Countdown,
  Ns as Counter,
  Rs as DataTable,
  Vs as DateInput,
  Ta as DatePicker,
  Fs as Dialog,
  Hs as Divider,
  Ia as Drag,
  Us as Ellipsis,
  js as Fab,
  ho as FieldDecorator,
  Ys as FloatingPanel,
  Ks as Form,
  Hn as FormDetails,
  Ws as HighlighterProvider,
  jn as Hover,
  Gn as HoverOverlay,
  Je as Icon,
  qs as Image,
  zo as ImagePreview,
  Xs as IndexAnchor,
  Gs as IndexBar,
  Lt as Input,
  wo as Lazy,
  Zs as Link,
  Js as List,
  Ct as Loading,
  Qs as LoadingBar,
  _l as Locale,
  xs as LocaleProvider,
  jt as Menu,
  Ft as MenuOption,
  Yt as MenuSelect,
  Da as Option,
  _s as OtpInput,
  eu as Overlay,
  us as PIXEL,
  za as Pagination,
  nu as Paper,
  ru as Picker,
  ut as Popup,
  tu as Progress,
  ou as PullRefresh,
  Co as Radio,
  au as RadioGroup,
  iu as RailNavigation,
  lu as RailNavigationItem,
  su as Rate,
  uu as Result,
  vn as Ripple,
  du as Row,
  Eb as SNACKBAR_TYPE,
  Ma as SegmentedButton,
  cu as SegmentedButtons,
  fu as Select,
  vu as Signature,
  pu as Skeleton,
  mu as Slider,
  hu as Snackbar,
  bu as Space,
  yu as Step,
  wu as Steps,
  To as Sticky,
  ku as StyleProvider,
  Po as Swipe,
  Oo as SwipeItem,
  $u as Switch,
  Cu as Tab,
  Su as TabItem,
  Pu as Table,
  Ou as Tabs,
  zu as TabsItems,
  Tu as Themes,
  Eu as TimePicker,
  Ba as Tooltip,
  Iu as TreeMenu,
  Bu as Uploader,
  Du as Watermark,
  $A as _ActionSheetComponent,
  CA as _AlertComponent,
  SA as _AppBarComponent,
  DA as _AutoCompleteComponent,
  AA as _AvatarComponent,
  NA as _AvatarGroupComponent,
  LA as _BackTopComponent,
  FA as _BadgeComponent,
  HA as _BottomNavigationComponent,
  UA as _BottomNavigationItemComponent,
  jA as _BreadcrumbComponent,
  YA as _BreadcrumbsComponent,
  VA as _ButtonComponent,
  KA as _ButtonGroupComponent,
  WA as _CardComponent,
  qA as _CellComponent,
  TA as _CheckboxComponent,
  XA as _CheckboxGroupComponent,
  GA as _ChipComponent,
  ZA as _CodeComponent,
  JA as _ColComponent,
  QA as _CollapseComponent,
  xA as _CollapseItemComponent,
  _A as _CollapseTransitionComponent,
  gA as _ContextComponent,
  eN as _CountToComponent,
  nN as _CountdownComponent,
  rN as _CounterComponent,
  aN as _DataTableComponent,
  lN as _DateInputComponent,
  iN as _DatePickerComponent,
  sN as _DialogComponent,
  uN as _DividerComponent,
  dN as _DragComponent,
  fN as _EllipsisComponent,
  vN as _FabComponent,
  OA as _FieldDecoratorComponent,
  pN as _FloatingPanelComponent,
  mN as _FormComponent,
  PA as _FormDetailsComponent,
  gN as _HighlighterProviderComponent,
  yA as _HoverComponent,
  wA as _HoverOverlayComponent,
  kA as _IconComponent,
  hN as _ImageComponent,
  wN as _ImagePreviewComponent,
  $N as _IndexAnchorComponent,
  CN as _IndexBarComponent,
  zA as _InputComponent,
  MA as _LazyComponent,
  SN as _LinkComponent,
  PN as _ListComponent,
  ON as _LoadingBarComponent,
  RA as _LoadingComponent,
  mA as _LocaleComponent,
  zN as _LocaleProviderComponent,
  IA as _MenuComponent,
  EA as _MenuOptionComponent,
  BA as _MenuSelectComponent,
  TN as _OptionComponent,
  EN as _OtpInputComponent,
  IN as _OverlayComponent,
  tN as _PaginationComponent,
  BN as _PaperComponent,
  DN as _PickerComponent,
  hA as _PopupComponent,
  MN as _ProgressComponent,
  AN as _PullRefreshComponent,
  oN as _RadioComponent,
  NN as _RadioGroupComponent,
  RN as _RailNavigationComponent,
  VN as _RailNavigationItemComponent,
  LN as _RateComponent,
  FN as _ResultComponent,
  bA as _RippleComponent,
  HN as _RowComponent,
  UN as _SegmentedButtonComponent,
  jN as _SegmentedButtonsComponent,
  YN as _SelectComponent,
  KN as _SignatureComponent,
  WN as _SkeletonComponent,
  qN as _SliderComponent,
  XN as _SnackbarComponent,
  GN as _SpaceComponent,
  ZN as _StepComponent,
  JN as _StepsComponent,
  kN as _StickyComponent,
  QN as _StyleProviderComponent,
  bN as _SwipeComponent,
  yN as _SwipeItemComponent,
  xN as _SwitchComponent,
  _N as _TabComponent,
  e7 as _TabItemComponent,
  n7 as _TableComponent,
  r7 as _TabsComponent,
  t7 as _TabsItemsComponent,
  o7 as _ThemesComponent,
  a7 as _TimePickerComponent,
  cN as _TooltipComponent,
  i7 as _TreeMenuComponent,
  l7 as _UploaderComponent,
  s7 as _WatermarkComponent,
  zp as actionSheetProps,
  Yu as add,
  Ep as alertProps,
  Bp as appBarProps,
  ym as avatarGroupProps,
  hm as avatarProps,
  Pm as backTopProps,
  zm as badgeProps,
  Dm as bottomNavigationItemProps,
  Em as bottomNavigationProps,
  Am as breadcrumbProps,
  Vm as breadcrumbsProps,
  Fm as buttonGroupProps,
  $m as buttonProps,
  Um as cardProps,
  Ym as cellProps,
  Wm as checkboxGroupProps,
  Hp as checkboxProps,
  Xm as chipProps,
  Zm as codeProps,
  Qm as colProps,
  og as collapseItemProps,
  eg as collapseProps,
  ig as collapseTransitionProps,
  sg as countToProps,
  dg as countdownProps,
  Cg as counterProps,
  tp as currentMessage,
  Dg as dataTableProps,
  Ug as dateInputProps,
  Lg as datePickerProps,
  u7 as default,
  An as defaultLazyOptions,
  Kg as dialogProps,
  qg as dividerProps,
  Gg as dragProps,
  xg as ellipsisProps,
  xv as enUS,
  _v as faIR,
  eh as fabProps,
  Ro as fieldDecoratorProps,
  Mp as formDetailsProps,
  th as formProps,
  wp as hoverOverlayProps,
  pn as iconProps,
  fm as imageCache,
  dh as imagePreviewProps,
  ih as imageProps,
  vh as indexAnchorProps,
  gh as indexBarProps,
  Wa as inputProps,
  dA as install,
  bh as linkProps,
  wh as listProps,
  Rz as loadingBarProps,
  Yr as loadingProps,
  Yp as menuOptionProps,
  Ju as menuProps,
  ya as menuSelectProps,
  op as merge,
  rp as messages,
  Mh as optionProps,
  Rh as otpInputProps,
  Lh as overlayProps,
  Pg as paginationProps,
  Fh as paperProps,
  Uh as pickerProps,
  Qt as popupProps,
  Yh as progressProps,
  Wh as pullRefreshProps,
  Xh as radioGroupProps,
  zg as radioProps,
  xh as railNavigationItemProps,
  Zh as railNavigationProps,
  eb as rateProps,
  rb as resultProps,
  db as rowProps,
  fb as segmentedButtonProps,
  mb as segmentedButtonsProps,
  hb as selectProps,
  wb as signatureProps,
  $b as skeletonProps,
  Sb as sliderProps,
  fd as snackbarProps,
  Db as spaceProps,
  Mb as stepProps,
  Rb as stepsProps,
  po as stickyProps,
  Lb as styleProviderProps,
  ld as swipeProps,
  Hb as switchProps,
  gn as t,
  Wb as tabItemProps,
  jb as tabProps,
  Xb as tableProps,
  Qb as tabsItemsProps,
  Zb as tabsProps,
  _b as timePickerProps,
  Jg as tooltipProps,
  a0 as treeMenuProps,
  s0 as uploaderProps,
  Ku as use,
  ur as useHoverOverlay,
  ju as useLocale,
  uA as version,
  d0 as watermarkProps,
  Hu as zhCN,
  np as zhHK,
  Uu as zhTW
};
