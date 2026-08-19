import { Comment as y0, Fragment as Ie, Teleport as Hr, Transition as bn, TransitionGroup as w0, computed as S, createApp as k0, createBlock as ke, createCommentVNode as X, createElementBlock as k, createElementVNode as L, createSlots as Pr, createTextVNode as Le, createVNode as U, defineComponent as te, getCurrentInstance as Ct, guardReactiveProps as Aa, h as Fn, inject as Nu, isRef as qv, isVNode as $0, mergeProps as Xe, nextTick as Ne, normalizeClass as p, normalizeProps as yt, normalizeStyle as Q, onActivated as vt, onBeforeMount as S0, onBeforeUnmount as Pt, onDeactivated as Ot, onMounted as Tr, onUnmounted as Io, onUpdated as qt, openBlock as b, provide as Ru, reactive as $n, ref as P, renderList as Ye, renderSlot as F, resolveComponent as x, resolveDirective as _e, resolveDynamicComponent as Xt, shallowReactive as C0, shallowRef as P0, toDisplayString as ve, unref as Na, useSlots as O0, vModelText as Xv, vShow as yr, watch as ge, withCtx as se, withDirectives as Ke, withKeys as wd, withModifiers as Nn } from "vue";
function We(e) {
  return Array.isArray(e);
}
function Yn(e) {
  return typeof e == "function";
}
function Pn(e) {
  return typeof e == "string";
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
var z0 = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  }
};
function Gl(e, n) {
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
      return Gl(this.converter, Xo({}, this.attributes, o));
    },
    withConverter: function(o) {
      return Gl(Xo({}, this.converter, o), this.attributes);
    }
  }, {
    attributes: { value: Object.freeze(n) },
    converter: { value: Object.freeze(e) }
  });
}
var SA = Gl(z0, { path: "/" });
function hn(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
function T0(e, n) {
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
var { hasOwnProperty: E0 } = Object.prototype;
function mo(e, n) {
  return E0.call(e, n);
}
function pa() {
  return Er() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
var B0 = Object.prototype.toString;
function I0(e) {
  return B0.call(e);
}
function Tn(e) {
  return I0(e).slice(8, -1);
}
function kd(e) {
  return Tn(e) === "ArrayBuffer";
}
function Do(e) {
  return typeof e == "boolean";
}
function $d(e) {
  return Tn(e) === "DataView";
}
function Zl(e) {
  return Tn(e) === "Date";
}
function Sd(e) {
  return Tn(e) === "DOMException";
}
function Or(e) {
  return e == null || e === "" || We(e) && !e.length;
}
function Cd(e) {
  return Tn(e) === "Error";
}
function Pd(e) {
  return Tn(e) === "Map";
}
function Jl(e) {
  return typeof e == "object" && e !== null;
}
function Sn(e) {
  return Tn(e) === "Object";
}
function Od(e) {
  return Tn(e) === "RegExp";
}
function zd(e) {
  return Tn(e) === "Set";
}
function Td(e) {
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
  ].includes(Tn(e));
}
function D0(e, n, r) {
  const t = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  function a(i, l, s, u) {
    if (r(i, l) === !0 || i === l || i !== i && l !== l) return !0;
    if (!Jl(i) || !Jl(l)) return i === l;
    if (i.constructor !== l.constructor) return !1;
    if (Tn(i) === "String" && Tn(l) === "String" || Tn(i) === "Number" && Tn(l) === "Number" || Tn(i) === "Boolean" && Tn(l) === "Boolean" || Tn(i) === "BigInt" && Tn(l) === "BigInt" || Tn(i) === "Symbol" && Tn(l) === "Symbol") return i.valueOf() === l.valueOf();
    if (Zl(i) && Zl(l)) return i.getTime() === l.getTime();
    if (Od(i) && Od(l)) return i.source === l.source && i.flags === l.flags;
    if (Cd(i) && Cd(l)) return i.name === l.name && i.message === l.message && i.cause === l.cause;
    if (Sd(i) && Sd(l)) return i.name === l.name && i.message === l.message;
    if (Td(i) && Td(l) || $d(i) && $d(l)) {
      if (i.byteLength !== l.byteLength) return !1;
      const d = new Uint8Array(i.buffer), c = new Uint8Array(l.buffer);
      return d.every((f, v) => f === c[v]);
    }
    if (kd(i) && kd(l)) {
      if (i.byteLength !== l.byteLength) return !1;
      const d = new Uint8Array(i), c = new Uint8Array(l);
      return d.every((f, v) => f === c[v]);
    }
    if (s.get(i) === l && u.get(l) === i) return !0;
    if (s.set(i, l), u.set(l, i), Pd(i) && Pd(l) || zd(i) && zd(l)) {
      if (i.size !== l.size) return !1;
      const d = [...i], c = [...l], f = d.every((v, g) => a(v, c[g], s, u));
      return s.delete(i), u.delete(l), f;
    }
    if (We(i) && We(l)) {
      if (i.length !== l.length) return !1;
      const d = i.every((c, f) => a(c, l[f], s, u));
      return s.delete(i), u.delete(l), d;
    }
    if (Sn(i) && Sn(l)) {
      const d = [...Object.keys(i), ...Object.getOwnPropertySymbols(i)], c = [...Object.keys(l), ...Object.getOwnPropertySymbols(l)];
      if (d.length !== c.length) return !1;
      const f = d.every((v) => a(i[v], l[v], s, u));
      return s.delete(i), u.delete(l), f;
    }
    return !1;
  }
  return a(e, n, t, o);
}
function Ed(e, n) {
  return D0(e, n, () => {
  });
}
function tr(e) {
  return typeof e == "number";
}
function Gv(e) {
  return tr(e) || Pn(e) && /^[-+]?\d+$/.test(e);
}
function Bt(e) {
  return !!e;
}
function Zv(e) {
  return e === window;
}
function M0() {
  return Er() && "ontouchstart" in window;
}
function A0(e, n) {
  if (!e) throw new Error(n);
}
function Z(e) {
  return e == null ? 0 : Pn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Do(e) ? Number(e) : e;
}
function Rt(e, n) {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1) return e.splice(r, 1);
  }
}
function Ql(e) {
  return [...new Set(e)];
}
function N0(e, n, r = "start") {
  let t = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && t >= 0 && t <= e.length - 1; ) {
    if (n(e[t], t, e)) return [e[t], t];
    r === "start" ? t++ : t--;
  }
  return [null, -1];
}
function R0(e) {
  return e.filter((n) => n != null);
}
function Wr(e) {
  return We(e) ? e : [e];
}
function ma(e) {
  const n = Ra();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function V0(...e) {
  return e.map((n) => {
    if (We(n)) {
      const [r, t, o = null] = n;
      return r ? t : o;
    }
    return n;
  });
}
function Vu(e) {
  return e = e.replace(/[-_](\w)/g, (n, r) => r.toUpperCase()), e.replace(e.charAt(0), e.charAt(0).toLowerCase());
}
function Jv(e) {
  return e.replace(/([A-Z])/g, " $1").replace(/[_\s]+/g, "-").trim().replace(/^-/, "").toLowerCase();
}
function L0(e) {
  const n = Vu(e);
  return n.replace(n.charAt(0), n.charAt(0).toUpperCase());
}
function F0(e) {
  return (n) => {
    const r = `${e}-${n}`, t = (o) => o ? o[0] === "$" ? o.replace("$", e) : o.startsWith("--") ? `${r}${o}` : `${r}__${o}` : r;
    return {
      name: L0(r),
      n: t,
      classes: V0
    };
  };
}
function Vt(e) {
  const n = Ra();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}
function Gn() {
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
  if (Zv(e)) {
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
function Lu(e) {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}
function kt(e) {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}
function H0(e) {
  const { top: n, bottom: r, left: t, right: o } = kn(e), { width: a, height: i } = kn(window);
  return t <= a && o >= 0 && n <= i && r >= 0;
}
function Ze(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function qr() {
  return new Promise((e) => {
    Vt(e);
  });
}
function Qv(e) {
  return {
    ...e,
    set(n, r) {
      r != null && (Pn(r) || (r = JSON.stringify(r)), e.setItem(n, r));
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
var CA = Qv(Ra().sessionStorage), PA = Qv(Ra().localStorage);
function C(e, ...n) {
  if (We(e)) return e.map((r) => r(...n));
  if (e) return e(...n);
}
function Fu(e, n = 200) {
  let r, t = 0;
  return function o(...a) {
    const i = performance.now(), l = i - t;
    t || (t = i), r && clearTimeout(r), l >= n ? (e.apply(this, a), t = i) : r = setTimeout(() => {
      o.apply(this, a);
    }, n - l);
  };
}
function Hu(e) {
  const n = Object.entries(e).reduce((f, [v, g]) => (f[v] = Sn(g) ? g.value : g, f), {}), r = Object.values(e);
  function t(f) {
    const v = c(f);
    return v?.label ? ir(v.label) : "";
  }
  function o(f) {
    const v = c(f);
    return v?.description ? ir(v.description) : "";
  }
  function a() {
    return r.map((f) => Sn(f) ? f.value : f);
  }
  function i() {
    return r.map((f) => Sn(f) && f.label ? ir(f.label) : "");
  }
  function l() {
    return r.map((f) => Sn(f) && f.description ? ir(f.description) : "");
  }
  function s(f) {
    const v = {};
    for (const g of Object.keys(f)) v[g] = ir(f[g]);
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
    return r.map((f) => Sn(f) ? s(f) : {
      value: f,
      label: "",
      description: ""
    });
  }
  function c(f) {
    return r.find((v) => Sn(v) && v.value === f);
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
function U0(e) {
  const { from: n, to: r, duration: t = 300, frame: o = () => {
  }, timingFunction: a = (w) => w, onStateChange: i = () => {
  } } = e;
  let l = "pending", s = n;
  const u = r - n;
  let d, c, f, v = 0;
  function g() {
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
    start: g,
    pause: h,
    reset: m,
    getState: y
  };
}
function j0(e) {
  return new Promise((n) => {
    const r = new FileReader();
    r.onload = () => {
      n(r.result);
    }, r.readAsDataURL(e);
  });
}
function Y0(e, n, r) {
  return n = hn(n ?? 0, -292, 292), n ? +`${r(`${e}e${n}`)}e${-n}` : r(e);
}
function xl(e, n = 0) {
  return Y0(e, n, Math.floor);
}
function or(e, n, r) {
  return A0(e, `Varlet [${n}]: ${r}`);
}
function K0(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function At(e, n) {
  console.error(`Varlet [${e}]: ${n}`);
}
var W0 = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1;
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
    const g = s(v);
    g && (g.addEventListener(n, r, {
      passive: o,
      capture: a
    }), i = !0);
  }, d = (v) => {
    if (!i || l) return;
    const g = s(v);
    g && (g.removeEventListener(n, r, { capture: a }), i = !1);
  };
  let c;
  qv(e) && (c = ge(() => e.value, (v, g) => {
    d(g), u(v);
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
function xv(e, n, r) {
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
  }), Io(() => {
    n || e();
  });
}
function Uu(e) {
  return e in Ct().provides;
}
function Bn(e) {
  if (!Uu(e)) return {
    index: null,
    parentProvider: null,
    bindParent: null
  };
  const { childInstances: n, collect: r, clear: t, ...o } = Nu(e), a = Ct();
  return {
    index: S(() => n.indexOf(a)),
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
function q0(e) {
  const n = [], r = (t) => {
    if (t?.component) {
      r(t?.component.subTree);
      return;
    }
    We(t?.children) && t.children.forEach((o) => {
      $0(o) && (n.push(o), r(o));
    });
  };
  return r(e), n;
}
function In(e) {
  const n = Ct(), r = $n([]), t = [], o = S(() => r.length), a = () => {
    const u = q0(n.subTree), d = r.map((f, v) => ({
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
    Ru(e, {
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
function X0(e, n) {
  const r = P(!1);
  return ge(e, (t) => {
    n === t && (r.value = !0);
  }, { immediate: !0 }), r;
}
function G0(e, n) {
  if (e > n) return "horizontal";
  if (n > e) return "vertical";
}
function Zt() {
  const e = P(0), n = P(0), r = P(0), t = P(0), o = P(0), a = P(0), i = P(0), l = P(0), s = P(0), u = P(0), d = P(), c = P(!1), f = P(!1), v = P(0), g = P(0);
  let h = null;
  const m = () => {
    e.value = 0, n.value = 0, r.value = 0, t.value = 0, o.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, d.value = void 0, c.value = !1, f.value = !1, v.value = 0, g.value = 0;
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
    distance: g,
    resetTouch: m,
    startTouch: (O) => {
      m();
      const { clientX: R, clientY: H } = O.touches[0];
      e.value = R, n.value = H, i.value = R, l.value = H, c.value = !0, v.value = performance.now(), f.value = !1, h && window.cancelAnimationFrame(h);
    },
    moveTouch: (O) => {
      const { clientX: R, clientY: H } = O.touches[0];
      f.value = !0, r.value = R - e.value, t.value = H - n.value, o.value = Math.abs(r.value), a.value = Math.abs(t.value), g.value = Math.sqrt(o.value ** 2 + a.value ** 2), s.value = R - i.value, u.value = H - l.value, d.value || (d.value = G0(o.value, a.value)), i.value = R, l.value = H;
    },
    endTouch: () => {
      c.value = !1, h = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (O) => kt(O) === 0 && t.value > 0,
    isReachBottom: (O, R = 1) => {
      const { scrollHeight: H, clientHeight: A, scrollTop: D } = O, E = Math.abs(H - D - A);
      return t.value < 0 && E <= R;
    }
  };
}
function _v() {
  const e = Ct(), n = Jv(e.type.name), r = P(void 0);
  return Tr(() => {
    r.value = `${n}-${e.uid}`;
  }), r;
}
function Z0(e = {}) {
  const { initialWidth: n = 0, initialHeight: r = 0 } = e, t = P(n), o = P(r), a = () => {
    Er() && (t.value = window.innerWidth, o.value = window.innerHeight);
  };
  return En(a), wr(a), {
    width: t,
    height: o
  };
}
function yn(e, n, r = {}) {
  const { passive: t = !0, eventName: o, defaultValue: a, emit: i } = r, l = o ?? `onUpdate:${n.toString()}`, s = () => e[n] ?? a;
  if (!t) return S({
    get() {
      return s();
    },
    set(c) {
      i ? i(l, c) : C(e[l], c);
    }
  });
  const u = P(s());
  let d = !0;
  return ge(() => e[n], () => {
    d = !1, u.value = s(), Ne(() => {
      d = !0;
    });
  }), ge(() => u.value, (c) => {
    d && (i ? i(l, c) : C(e[l], c));
  }), u;
}
function J0(e) {
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
    return U0({
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
function ep(e, n) {
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
  qv(e) && (s = ge(() => e.value, () => i(e)));
  const u = () => {
    s?.(), l(), o = !0;
  };
  return En(() => i(e)), Pt(l), Ot(l), u;
}
var Q0 = Object.defineProperty, x0 = Object.defineProperties, _0 = Object.getOwnPropertyDescriptors, Bd = Object.getOwnPropertySymbols, ey = Object.prototype.hasOwnProperty, ny = Object.prototype.propertyIsEnumerable, Id = (e, n, r) => n in e ? Q0(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, _l = (e, n) => {
  for (var r in n || (n = {})) ey.call(n, r) && Id(e, r, n[r]);
  if (Bd)
    for (var r of Bd(n)) ny.call(n, r) && Id(e, r, n[r]);
  return e;
}, ry = (e, n) => x0(e, _0(n)), Dd = (e, n, r) => new Promise((t, o) => {
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
function ue(e, n) {
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
        if (Sn(a)) {
          n[t] = ry(_l({}, a), { default: o });
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
function ty(e) {
  const n = k0(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), r.parentNode && document.body.removeChild(r);
    }
  };
}
function Jt(e, n = {}, r = {}) {
  const { unmount: t } = ty({ setup() {
    return () => Fn(e, _l(_l({}, n), r));
  } });
  return { unmountInstance: t };
}
function Va(e) {
  const n = [];
  return e.forEach((r) => {
    if (r.type !== y0) {
      if (r.type === Ie && We(r.children)) {
        n.push(...Va(r.children));
        return;
      }
      n.push(r);
    }
  }), n;
}
function Md(e) {
  return Sn(e) && Yn(e.safeParseAsync);
}
function oy(e) {
  return Sn(e) && mo(e, "success");
}
function xn() {
  const e = P(""), n = (o, a, i) => Dd(null, null, function* () {
    const l = Wr(o).filter((u) => Md(u) || Yn(u)), s = yield Promise.all(l.map((u) => Md(u) ? u.safeParseAsync(a) : u(a, i)));
    return r(), !s.some((u) => {
      if (oy(u)) {
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
    validateWithTrigger: (o, a, i, l, s) => Dd(null, null, function* () {
      o.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function ay(e) {
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
var oe = F0("var");
function V(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function On(e, n) {
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
    return () => Pn(e.is) ? Fn(e.tag, e.is) : e.is;
  }
}), np = {
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
}, rp = {
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
}, tp = {
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
}, ju = {
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
}, Yu = {
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
}, op = Yu, iy = Object.defineProperty, Ad = Object.getOwnPropertySymbols, ly = Object.prototype.hasOwnProperty, sy = Object.prototype.propertyIsEnumerable, Nd = (e, n, r) => n in e ? iy(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Rd = (e, n) => {
  for (var r in n || (n = {})) ly.call(n, r) && Nd(e, r, n[r]);
  if (Ad)
    for (var r of Ad(n)) sy.call(n, r) && Nd(e, r, n[r]);
  return e;
};
function Ku() {
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
      e.value[i] = Rd(Rd({}, e.value[i]), l), t(i);
    },
    t: (i) => {
      if (mo(n.value, i)) return n.value[i];
    }
  };
}
var { messages: ap, currentMessage: ip, add: Wu, use: qu, merge: lp, t: gn } = Ku();
Wu("zh-CN", ju);
qu("zh-CN");
var OA = {
  zhCN: ju,
  enUS: np,
  zhTW: Yu,
  zhHK: op,
  faIR: rp,
  jaJP: tp,
  messages: ap,
  currentMessage: ip,
  add: Wu,
  use: qu,
  merge: lp,
  t: gn,
  useLocale: Ku
}, es = {
  zhCN: ju,
  enUS: np,
  zhTW: Yu,
  zhHK: op,
  faIR: rp,
  jaJP: tp,
  messages: ap,
  currentMessage: ip,
  add: Wu,
  use: qu,
  merge: lp,
  t: gn,
  useLocale: Ku
}, ns = /* @__PURE__ */ Symbol("LOCALE_PROVIDER_KEY");
function uy(e) {
  Ru(ns, e);
}
function kr() {
  return Uu(ns) ? Nu(ns) : { t: null };
}
var sp = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, zA = $n(sp), vr = $n(sp), { n: Vd } = oe("");
function up() {
  Object.keys(vr.locks).length <= 0 ? document.body.classList.remove(Vd("$--lock")) : document.body.classList.add(Vd("$--lock"));
}
function Go(e) {
  vr.locks[e] = 1, up();
}
function Zo(e) {
  delete vr.locks[e], up();
}
function Mo(e, n) {
  const { uid: r } = Ct();
  n && ge(n, (t) => {
    t === !1 ? Zo(r) : t === !0 && e() === !0 && Go(r);
  }), ge(e, (t) => {
    n && n() === !1 || (t === !0 ? Go(r) : Zo(r));
  }), S0(() => {
    n && n() === !1 || e() === !0 && Go(r);
  }), Io(() => {
    n && n() === !1 || e() === !0 && Zo(r);
  }), vt(() => {
    n && n() === !1 || e() === !0 && Go(r);
  }), Ot(() => {
    n && n() === !1 || e() === !0 && Zo(r);
  });
}
var Qr = [];
function Xu(e, n) {
  const { uid: r } = Ct();
  ge(e, (i) => {
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
  return ge(e, (t) => {
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
}, dp = /* @__PURE__ */ Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function cp() {
  const { bindParent: e, parentProvider: n, index: r } = Bn(dp);
  return {
    index: r,
    popup: n,
    bindPopup: e
  };
}
function dy() {
  const { bindChildren: e, childProviders: n, length: r } = In(dp);
  return {
    length: r,
    popupItems: n,
    bindPopupItems: e
  };
}
var cy = Object.defineProperty, Ld = Object.getOwnPropertySymbols, fy = Object.prototype.hasOwnProperty, vy = Object.prototype.propertyIsEnumerable, Fd = (e, n, r) => n in e ? cy(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, py = (e, n) => {
  for (var r in n || (n = {})) fy.call(n, r) && Fd(e, r, n[r]);
  if (Ld)
    for (var r of Ld(n)) vy.call(n, r) && Fd(e, r, n[r]);
  return e;
}, { name: my, n: mr, classes: Nl } = oe("popup"), La = te({
  name: my,
  inheritAttrs: !1,
  props: Qt,
  setup(e, { slots: n, attrs: r }) {
    const t = X0(() => e.show, !0), { zIndex: o } = Ao(() => e.show, 3), a = S(() => {
      var g;
      return (g = e.zIndex) != null ? g : o.value;
    }), { onStackTop: i } = Xu(() => e.show, a), { disabled: l } = zt(), { bindPopupItems: s } = dy();
    Mo(() => e.show, () => e.lockScroll), ge(() => e.show, (g) => {
      C(g ? e.onOpen : e.onClose);
    }), s({ show: S(() => e.show) }), xe(() => window, "keydown", v), ay(() => C(e.onRouteChange));
    function u() {
      const { closeOnClickOverlay: g, onClickOverlay: h } = e;
      C(h), g && C(e["onUpdate:show"], !1);
    }
    function d() {
      const { overlayClass: g = "", overlayStyle: h } = e;
      return U("div", {
        class: Nl(mr("overlay"), g),
        style: py({ zIndex: a.value - 1 }, h),
        onClick: u
      }, null);
    }
    function c() {
      return Ke(U("div", Xe({
        class: Nl(mr("content"), mr(`--${e.position}`), [e.defaultStyle, mr("--content-background-color")], [e.defaultStyle, mr("$-elevation--3")], [e.safeArea, mr("--safe-area")], [e.safeAreaTop, mr("--safe-area-top")]),
        style: { zIndex: a.value },
        role: "dialog",
        "aria-modal": "true"
      }, r), [t.value && C(n.default)]), [[yr, e.show]]);
    }
    function f() {
      return U(bn, {
        name: mr("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, { default: () => [Ke(U("div", {
        class: Nl(mr("$--box"), mr(), [!e.overlay, mr("--pointer-events-none")]),
        style: { zIndex: a.value - 2 }
      }, [e.overlay && d(), U(bn, { name: e.transition || mr(`$-pop-${e.position}`) }, { default: () => [c()] })]), [[yr, e.show]])] });
    }
    function v(g) {
      !i() || g.key !== "Escape" || !e.show || (C(e.onKeyEscape), e.closeOnKeyEscape && (Ze(g), C(e["onUpdate:show"], !1)));
    }
    return () => {
      const { teleport: g } = e;
      return g ? U(Hr, {
        to: g,
        disabled: l.value
      }, { default: () => [f()] }) : f();
    };
  }
});
ue(La);
fe(La, Qt);
var TA = La, ut = La, gy = Object.defineProperty, hy = Object.defineProperties, by = Object.getOwnPropertyDescriptors, Hd = Object.getOwnPropertySymbols, yy = Object.prototype.hasOwnProperty, wy = Object.prototype.propertyIsEnumerable, Ud = (e, n, r) => n in e ? gy(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, fp = (e, n) => {
  for (var r in n || (n = {})) yy.call(n, r) && Ud(e, r, n[r]);
  if (Hd)
    for (var r of Hd(n)) wy.call(n, r) && Ud(e, r, n[r]);
  return e;
}, ky = (e, n) => hy(e, by(n)), { n: vp } = oe("ripple"), jd = 250;
function $y(e) {
  const { zIndex: n, position: r } = Ur(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Yd(e) {
  return "touches" in e;
}
function Sy(e, n) {
  const { top: r, left: t } = kn(e), { clientWidth: o, clientHeight: a } = e, i = Math.sqrt(o ** 2 + a ** 2) / 2, l = i * 2, s = Yd(n) ? n.touches[0].clientX - t : o / 2, u = Yd(n) ? n.touches[0].clientY - r : a / 2, d = (o - i * 2) / 2, c = (a - i * 2) / 2;
  return {
    x: s - i,
    y: u - i,
    centerX: d,
    centerY: c,
    size: l
  };
}
function Gu(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !vr.enableRipple) return;
  const r = () => {
    n.tasker = null;
    const { x: t, y: o, centerX: a, centerY: i, size: l } = Sy(this, e), s = document.createElement("div");
    s.classList.add(vp()), s.style.opacity = "0", s.style.transform = `translate(${t}px, ${o}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), $y(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(r, 30);
}
function ga() {
  const e = this._ripple, n = () => {
    const r = this.querySelectorAll(`.${vp()}`);
    if (!r.length) return;
    const t = r[r.length - 1], o = jd - performance.now() + Number(t.dataset.createdAt);
    window.setTimeout(() => {
      t.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = t.parentNode) == null ? void 0 : a.removeChild(t);
      }, jd);
    }, o);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function pp() {
  if (!M0() || !vr.enableRipple) return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
var ha = !1;
function Cy(e) {
  ha || !(e.key === " " || e.key === "Enter") || (Gu.call(this, e), ha = !0);
}
function Kd() {
  ha && (ga.call(this), ha = !1);
}
function Py(e, n) {
  var r;
  e._ripple = ky(fp({ tasker: null }, (r = n.value) != null ? r : {}), { removeRipple: ga.bind(e) }), e.addEventListener("touchstart", Gu, { passive: !0 }), e.addEventListener("touchmove", pp, { passive: !0 }), e.addEventListener("dragstart", ga, { passive: !0 }), e.addEventListener("keydown", Cy), e.addEventListener("keyup", Kd), e.addEventListener("blur", Kd), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function Oy(e) {
  e.removeEventListener("touchstart", Gu), e.removeEventListener("touchmove", pp), e.removeEventListener("dragstart", ga), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function zy(e, n) {
  var r, t, o, a, i, l;
  const s = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (t = n.value) == null ? void 0 : t.disabled
  };
  (s.color !== ((o = e._ripple) == null ? void 0 : o.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = fp({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
var mp = {
  mounted: Py,
  unmounted: Oy,
  updated: zy,
  install(e) {
    e.directive("ripple", this);
  }
}, EA = mp, vn = mp;
function gp(e) {
  return e ? !!(e === "desktop" && pa() || e === "mobile" && !pa()) : !1;
}
function Ty(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, t) => {
    const [o, a] = t.split(":").map((i) => i.trim());
    return r[Vu(o)] = a, r;
  }, {}) : {};
}
function Ey(e) {
  const { value: n } = e._hover, r = Ty(e);
  Object.keys(n).forEach((t) => {
    const o = Vu(t);
    n[o] != null && r[o] && (e._hover.rawStyle[o] = r[o]);
  });
}
function Zu(e, n) {
  Object.keys(n).forEach((r) => {
    const t = n[r];
    t != null && (e.style[r] = t);
  });
}
function By(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function hp(e) {
  e?._hover != null && (By(e), Zu(e, e._hover.rawStyle));
}
function bp() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, Yn(e)) {
    e(this._hover.hovering);
    return;
  }
  Zu(this, e);
}
function yp() {
  if (this._hover.hovering = !1, Yn(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  hp(this);
}
function wp(e, n) {
  var r, t;
  const { arg: o, value: a } = n;
  gp(o) || (e._hover = {
    value: a,
    hovering: (t = (r = e._hover) == null ? void 0 : r.hovering) != null ? t : !1,
    rawStyle: {}
  }, Ey(e), e.addEventListener("mouseenter", bp), e.addEventListener("mouseleave", yp));
}
function kp(e, n) {
  gp(n.arg) || (hp(e), e.removeEventListener("mouseenter", bp), e.removeEventListener("mouseleave", yp));
}
function Iy(e, n) {
  e._hover && kp(e, n);
}
function Dy(e, n) {
  return !Yn(n.value) && e._hover.hovering;
}
function My(e, n) {
  wp(e, n), Dy(e, n) && Zu(e, n.value);
}
var $p = {
  mounted: wp,
  unmounted: kp,
  beforeUpdate: Iy,
  updated: My,
  install(e) {
    e.directive("hover", this);
  }
}, BA = $p, jn = $p, Sp = {
  hovering: Boolean,
  focusing: Boolean,
  color: String
}, { name: Ay, n: Ny, classes: Ry } = oe("hover-overlay");
function Vy(e, n) {
  return b(), k("div", {
    class: p(e.classes(e.n(), [e.hovering, e.n("--hovering")], [e.focusing && !e.inMobile(), e.n("--focusing")])),
    style: Q({ color: e.color })
  }, null, 6);
}
var Cp = te({
  name: Ay,
  props: Sp,
  setup: () => ({
    n: Ny,
    classes: Ry,
    inMobile: pa
  })
});
Cp.render = Vy;
var Fa = Cp;
ue(Fa);
fe(Fa, Sp);
function ur() {
  const e = P(!1);
  return {
    hovering: e,
    handleHovering: (r) => {
      e.value = r;
    }
  };
}
var IA = Fa, Zn = Fa;
function Ly(e) {
  const { left: n } = kn(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Wd(e) {
  const { top: n } = kn(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Rl(e) {
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
function Fy(e) {
  const n = [];
  let r = e;
  for (; !Zv(r); )
    r = dt(r), n.push(r);
  return n;
}
function Pp(e, n) {
  if (Pn(e)) {
    const r = document.querySelector(e);
    return or(!!r, n, "target element cannot found"), r;
  }
  return or(Jl(e), n, 'type of prop "target" should be an element object'), e;
}
function Hy() {
  const { width: e, height: n } = kn(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
var Uy = (e) => Pn(e) && e.endsWith("rem"), jy = (e) => Pn(e) && e.endsWith("px") || tr(e), Yy = (e) => Pn(e) && e.endsWith("vw"), Ky = (e) => Pn(e) && e.endsWith("vh"), Wy = (e) => Pn(e) && e.endsWith("vmin"), qy = (e) => Pn(e) && e.endsWith("vmax"), fn = (e) => {
  if (Gv(e)) return Number(e);
  if (jy(e)) return +e.replace("px", "");
  if (!Er()) return 0;
  const { vw: n, vh: r, vMin: t, vMax: o } = Hy();
  if (Yy(e)) return +e.replace("vw", "") * n / 100;
  if (Ky(e)) return +e.replace("vh", "") * r / 100;
  if (Wy(e)) return +e.replace("vmin", "") * t / 100;
  if (qy(e)) return +e.replace("vmax", "") * o / 100;
  if (Uy(e)) {
    const a = +e.replace("rem", ""), i = Ur(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return Pn(e) ? Z(e) : 0;
}, Te = (e) => {
  if (e != null)
    return Gv(e) ? `${e}px` : String(e);
}, nr = (e, n = 1) => {
  if (e == null) return;
  const r = Te(e), t = r.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(r) * n}${t}`;
};
function go(e, { top: n = 0, left: r = 0, duration: t = 300, animation: o }) {
  const a = Date.now(), i = kt(e), l = Lu(e);
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
function Op(e) {
  return Object.entries(e ?? {}).reduce((n, [r, t]) => {
    const o = r.startsWith("--") ? r : `--${Jv(r)}`;
    return n[o] = t, n;
  }, {});
}
function ba(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
function Xy(e) {
  let n = e;
  for (; n && n !== document.documentElement; ) {
    if (Ur(n).display === "none") return !0;
    n = n.parentNode;
  }
  return !1;
}
function zp(e, n) {
  !e || !n || (e.scrollTop = n.offsetTop - e.clientHeight / 2 + n.offsetHeight / 2);
}
var qd = [
  "button",
  "input",
  "select",
  "textarea",
  "[tabindex]",
  "[href]"
].map((e) => `${e}:not([disabled])`).join(", ");
function Ju(e, n, r, t) {
  const o = Array.from(n.querySelectorAll(qd)).filter((s) => !Xy(s));
  if (!o.length) return;
  const a = [e, ...Array.from(e.querySelectorAll(qd))].findIndex((s) => s === document.activeElement) !== -1, i = Array.from(o).findIndex((s) => s === document.activeElement);
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
}, Gy = (e, n, r) => new Promise((t, o) => {
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
}), { name: Zy, n: Jy, classes: Qy } = oe("icon");
function xy(e, n) {
  return b(), ke(Xt(e.isURL(e.name) ? "img" : "i"), {
    class: p(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], `${e.namespace}--set`, [
      e.isURL(e.name),
      e.n("image"),
      `${e.namespace}-${e.nextName}`
    ], [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass])),
    style: Q({
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
var Tp = te({
  name: Zy,
  props: pn,
  setup(e) {
    const n = P(""), r = P(!1);
    ge(() => e.name, t, { immediate: !0 });
    function t(o, a) {
      return Gy(this, null, function* () {
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
      n: Jy,
      classes: Qy,
      isURL: W0,
      toNumber: Z,
      toSizeUnit: Te
    };
  }
});
Tp.render = xy;
var Ha = Tp;
ue(Ha);
fe(Ha, pn);
var DA = Ha, Je = Ha, { name: _y, n: e1, classes: n1 } = oe("action-sheet");
function r1(e, n) {
  const r = x("var-icon"), t = x("maybe-v-node"), o = x("var-hover-overlay"), a = _e("ripple"), i = _e("hover");
  return Ke((b(), k("div", {
    class: p(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
    style: Q({ color: e.color })
  }, [
    e.isString(e.icon) ? (b(), ke(r, {
      key: 0,
      class: p(e.n("action-icon")),
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
      class: p(e.n("action-icon"))
    }, [U(t, { is: e.renderIcon() }, null, 8, ["is"])], 2)) : X("v-if", !0),
    L("div", { class: p(e.n("action-name")) }, ve(e.name), 3),
    U(o, { hovering: e.disabled ? !1 : e.hovering }, null, 8, ["hovering"])
  ], 6)), [[a, { disabled: e.disabled }], [
    i,
    e.handleHovering,
    "desktop"
  ]]);
}
var Ep = te({
  name: _y,
  components: {
    MaybeVNode: lr,
    VarHoverOverlay: Zn,
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
      isString: Pn,
      n: e1,
      classes: n1,
      handleHovering: r,
      renderIcon: t
    };
  }
});
Ep.render = r1;
var t1 = Ep, o1 = Object.defineProperty, Xd = Object.getOwnPropertySymbols, a1 = Object.prototype.hasOwnProperty, i1 = Object.prototype.propertyIsEnumerable, Gd = (e, n, r) => n in e ? o1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, l1 = (e, n) => {
  for (var r in n || (n = {})) a1.call(n, r) && Gd(e, r, n[r]);
  if (Xd)
    for (var r of Xd(n)) i1.call(n, r) && Gd(e, r, n[r]);
  return e;
}, Bp = l1({
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
])), { name: s1, n: u1, classes: d1 } = oe("action-sheet");
function c1(e, n) {
  const r = x("var-action-item"), t = x("var-popup");
  return b(), ke(t, {
    show: e.show,
    "onUpdate:show": n[0] || (n[0] = (o) => e.show = o),
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
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onRouteChange: e.onRouteChange,
    onKeyEscape: e.onKeyEscape
  }, {
    default: se(() => [L("div", Xe({ class: e.classes(e.n(), e.n("$--box")) }, e.$attrs), [F(e.$slots, "title", {}, () => {
      var o;
      return [L("div", { class: p(e.n("title")) }, ve((o = e.title) != null ? o : (e.pt ? e.pt : e.t)("actionSheetTitle")), 3)];
    }), F(e.$slots, "actions", {}, () => [(b(!0), k(Ie, null, Ye(e.actions, (o) => (b(), ke(r, {
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
var Ip = te({
  name: s1,
  directives: { Ripple: vn },
  components: {
    VarPopup: ut,
    VarActionItem: t1
  },
  inheritAttrs: !1,
  props: Bp,
  setup(e) {
    const n = yn(e, "show"), { t: r } = kr();
    function t(o) {
      if (o.disabled) return;
      const { closeOnClickAction: a, onSelect: i } = e;
      C(i, o), a && (n.value = !1);
    }
    return {
      show: n,
      pt: r,
      t: gn,
      n: u1,
      classes: d1,
      handleSelect: t
    };
  }
});
Ip.render = c1;
var No = Ip, f1 = Object.defineProperty, Zd = Object.getOwnPropertySymbols, v1 = Object.prototype.hasOwnProperty, p1 = Object.prototype.propertyIsEnumerable, Jd = (e, n, r) => n in e ? f1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Qd = (e, n) => {
  for (var r in n || (n = {})) v1.call(n, r) && Jd(e, r, n[r]);
  if (Zd)
    for (var r of Zd(n)) p1.call(n, r) && Jd(e, r, n[r]);
  return e;
}, nt, Qu = {};
function m1(e = {}) {
  return Qd(Qd({}, Qu), e);
}
function pt(e) {
  return Er() ? new Promise((n) => {
    pt.close();
    const r = C0(m1(e));
    r.teleport = "body", nt = r;
    const { unmountInstance: t } = Jt(No, r, {
      onSelect: (o) => {
        C(r.onSelect, o), n(o);
      },
      onClose: () => {
        C(r.onClose), n("close");
      },
      onClosed: () => {
        C(r.onClosed), t(), nt === r && (nt = null);
      },
      onRouteChange: () => {
        t(), nt === r && (nt = null);
      },
      "onUpdate:show": (o) => {
        r.show = o;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
pt.setDefaultOptions = function(e) {
  Qu = e;
};
pt.resetDefaultOptions = function() {
  Qu = {};
};
pt.close = function() {
  if (nt != null) {
    const e = nt;
    nt = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
pt.Component = No;
ue(No);
ue(No, pt);
fe(pt, Bp);
var MA = No, rs = pt, Dp = {
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
}, { name: g1, n: h1, classes: b1 } = oe("alert"), y1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  danger: "error"
};
function w1(e, n) {
  const r = x("var-icon");
  return b(), k("div", {
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), e.n(`--${e.type}`), e.formatElevation(e.elevation, 2))),
    style: Q({ "background-color": e.color }),
    role: "alert"
  }, [
    e.isInternalType || e.$slots.icon ? (b(), k("div", {
      key: 0,
      class: p(e.n("icon"))
    }, [F(e.$slots, "icon", {}, () => [e.isInternalType ? (b(), ke(r, {
      key: 0,
      name: e.iconTypeMap[e.type]
    }, null, 8, ["name"])) : X("v-if", !0)])], 2)) : X("v-if", !0),
    F(e.$slots, "content", {}, () => [L("div", { class: p(e.n("content")) }, [e.title || e.$slots.title ? (b(), k("div", {
      key: 0,
      class: p(e.n("title"))
    }, [F(e.$slots, "title", {}, () => [Le(ve(e.title), 1)])], 2)) : X("v-if", !0), e.message || e.$slots.default ? (b(), k("div", {
      key: 1,
      class: p(e.n("message"))
    }, [F(e.$slots, "default", {}, () => [Le(ve(e.message), 1)])], 2)) : X("v-if", !0)], 2)]),
    e.closeable ? (b(), k("div", {
      key: 1,
      class: p(e.n("close-icon")),
      onClick: n[0] || (n[0] = (...t) => e.handleClose && e.handleClose(...t))
    }, [F(e.$slots, "close-icon", {}, () => [U(r, { name: "close-circle" })])], 2)) : X("v-if", !0)
  ], 6);
}
var Mp = te({
  name: g1,
  components: { VarIcon: Je },
  props: Dp,
  setup(e) {
    const n = S(() => [
      "info",
      "success",
      "danger",
      "warning"
    ].includes(e.type));
    function r(t) {
      C(e.onClose, t);
    }
    return {
      n: h1,
      classes: b1,
      iconTypeMap: y1,
      isInternalType: n,
      formatElevation: On,
      handleClose: r
    };
  }
});
Mp.render = w1;
var Ua = Mp;
ue(Ua);
fe(Ua, Dp);
var AA = Ua, ts = Ua, Ap = {
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
}, { name: k1, n: $1, classes: S1 } = oe("app-bar");
function C1(e, n) {
  return b(), k(Ie, null, [L("div", Xe({
    ref: "appBar",
    class: e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.type === "surface", e.n("--surface")], [e.size === "large", e.n("--large")], [e.round, e.n("--round")], [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], e.formatElevation(e.elevation, 3)),
    style: e.rootStyles
  }, e.$attrs), [L("div", { class: p(e.n("toolbar")) }, [
    L("div", { class: p(e.n("left")) }, [F(e.$slots, "left"), e.titlePosition === "left" ? (b(), k("div", {
      key: 0,
      class: p(e.n("title")),
      style: Q({ paddingLeft: e.paddingLeft })
    }, [F(e.$slots, "default", {}, () => [Le(ve(e.title), 1)])], 6)) : X("v-if", !0)], 2),
    e.titlePosition === "center" ? (b(), k("div", {
      key: 0,
      class: p(e.n("title"))
    }, [F(e.$slots, "default", {}, () => [Le(ve(e.title), 1)])], 2)) : X("v-if", !0),
    L("div", { class: p(e.n("right")) }, [e.titlePosition === "right" ? (b(), k("div", {
      key: 0,
      class: p(e.n("title")),
      style: Q({ paddingRight: e.paddingRight })
    }, [F(e.$slots, "default", {}, () => [Le(ve(e.title), 1)])], 6)) : X("v-if", !0), F(e.$slots, "right")], 2)
  ], 2), F(e.$slots, "content")], 16), e.fixed && e.placeholder ? (b(), k("div", {
    key: 0,
    class: p(e.n("placeholder")),
    style: Q({ height: e.placeholderHeight })
  }, null, 6)) : X("v-if", !0)], 64);
}
var Np = te({
  name: k1,
  props: Ap,
  setup(e, { slots: n }) {
    const r = P(null), t = P(), o = P(), a = P(), i = S(() => {
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
      a.value = Te(u);
    }
    return {
      rootStyles: i,
      paddingLeft: t,
      paddingRight: o,
      n: $1,
      classes: S1,
      formatElevation: On,
      appBar: r,
      placeholderHeight: a
    };
  }
});
Np.render = C1;
var ja = Np;
ue(ja);
fe(ja, Ap);
var NA = ja, os = ja, Rp = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: P1, n: O1 } = oe("form-details"), z1 = { key: 0 }, T1 = { key: 0 };
function E1(e, n) {
  return b(), ke(bn, { name: e.n() }, {
    default: se(() => [e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (b(), k("div", {
      key: 0,
      class: p(e.n())
    }, [L("div", { class: p(e.n("error-message")) }, [U(bn, { name: e.n("message") }, {
      default: se(() => [e.errorMessage ? (b(), k("div", z1, ve(e.errorMessage), 1)) : X("v-if", !0)]),
      _: 1
    }, 8, ["name"])], 2), L("div", { class: p(e.n("extra-message")) }, [U(bn, { name: e.n("message") }, {
      default: se(() => [F(e.$slots, "extra-message", {}, () => [e.extraMessage ? (b(), k("div", T1, ve(e.extraMessage), 1)) : X("v-if", !0)])]),
      _: 3
    }, 8, ["name"])], 2)], 2)) : X("v-if", !0)]),
    _: 3
  }, 8, ["name"]);
}
var Vp = te({
  name: P1,
  props: Rp,
  setup: () => ({ n: O1 })
});
Vp.render = E1;
var Ya = Vp;
ue(Ya);
fe(Ya, Rp);
var RA = Ya, Hn = Ya, B1 = Object.defineProperty, I1 = Object.defineProperties, D1 = Object.getOwnPropertyDescriptors, xd = Object.getOwnPropertySymbols, M1 = Object.prototype.hasOwnProperty, A1 = Object.prototype.propertyIsEnumerable, _d = (e, n, r) => n in e ? B1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, N1 = (e, n) => {
  for (var r in n || (n = {})) M1.call(n, r) && _d(e, r, n[r]);
  if (xd)
    for (var r of xd(n)) A1.call(n, r) && _d(e, r, n[r]);
  return e;
}, R1 = (e, n) => I1(e, D1(n)), Lp = /* @__PURE__ */ Symbol("FORM_BIND_FORM_ITEM_KEY");
function Kn() {
  const { parentProvider: e, index: n, bindParent: r } = Bn(Lp), t = Ct();
  return {
    index: n,
    form: e,
    bindForm: r ? (o) => {
      r(R1(N1({}, o), { instance: t }));
    } : null
  };
}
function V1() {
  const { childProviders: e, length: n, bindChildren: r } = In(Lp);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var Fp = /* @__PURE__ */ Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Hp = /* @__PURE__ */ Symbol("SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY");
function L1() {
  const { childProviders: e, length: n, bindChildren: r } = In(Fp);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
function F1() {
  const { childProviders: e, bindChildren: n } = In(Hp);
  return {
    swipeResizeListeners: e,
    bindSwipeResizeListeners: n
  };
}
function H1() {
  const { parentProvider: e, bindParent: n } = Bn(Hp);
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
}, ec = (e, n, r) => new Promise((t, o) => {
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
}), { name: U1, n: Vl, classes: j1 } = oe("field-decorator"), Y1 = ["for"];
function K1(e, n) {
  const r = x("var-icon");
  return b(), k("div", {
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
  }, [L("div", {
    class: p(e.classes(e.n("controller"), [e.isFocusing, e.n("--focus")], [e.isError, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], [!e.line, e.n("--bottom-border-radius")])),
    style: Q({
      color: e.color,
      cursor: e.cursor,
      overflow: e.isFloating ? "visible" : "hidden",
      "--field-decorator-middle-offset-left": e.middleOffsetLeft,
      "--field-decorator-middle-offset-width": e.middleOffsetWidth,
      "--field-decorator-middle-offset-height": e.middleOffsetHeight
    })
  }, [
    L("div", { class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")])) }, [F(e.$slots, "prepend-icon")], 2),
    L("div", {
      ref: "middleEl",
      class: p(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
    }, [F(e.$slots, "default")], 2),
    e.placeholder && e.hint ? (b(), k("label", {
      key: 0,
      class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocusing, e.n("--focus")], [e.hintCenter, e.n("--hint-center")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.isError, e.n("--error")], [e.transitionDisabled, e.n("--transition-disabled")], e.computePlaceholderState())),
      style: Q({ color: e.color }),
      for: e.id
    }, [L("span", null, ve(e.placeholder), 1)], 14, Y1)) : X("v-if", !0),
    L("div", { class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")])) }, [e.clearable && !e.isEmpty(e.value) && !e.readonly && !e.formReadonly ? F(e.$slots, "clear-icon", {
      key: 0,
      clear: e.handleClear
    }, () => [U(r, {
      class: p(e.n("clear-icon")),
      "var-field-decorator-cover": "",
      name: "close-circle",
      onClick: e.handleClear
    }, null, 8, ["class", "onClick"])]) : X("v-if", !0), F(e.$slots, "append-icon")], 2)
  ], 6), e.line ? (b(), k(Ie, { key: 0 }, [e.variant === "outlined" ? (b(), k("fieldset", {
    key: 0,
    class: p(e.classes(e.n("line"), [e.isFocusing, e.n("--line-focus")], [e.isError, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
    style: Q({ borderColor: e.color })
  }, [L("legend", {
    class: p(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
    style: Q({ width: e.legendWidth })
  }, [e.placeholder && e.hint ? (b(), ke(Hr, {
    key: 0,
    to: "body"
  }, [L("span", {
    ref: "placeholderTextEl",
    class: p(e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")]))
  }, ve(e.placeholder), 3)])) : X("v-if", !0)], 6)], 6)) : (b(), k("div", {
    key: 1,
    class: p(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
    style: Q({ background: e.isError ? void 0 : e.blurColor })
  }, [L("div", {
    class: p(e.classes(e.n("dot"), [e.isFocusing, e.n("--line-focus")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
    style: Q({ background: e.isError ? void 0 : e.focusColor })
  }, null, 6)], 6))], 64)) : X("v-if", !0)], 2);
}
var Up = te({
  name: U1,
  components: { VarIcon: Je },
  props: Ro,
  setup(e) {
    const n = P(null), r = P(null), t = P(""), o = P("0px"), a = P("0px"), i = P("0px"), l = P(!0), s = S(() => e.hint && (!Or(e.value) || e.isFocusing)), { popup: u, bindPopup: d } = cp(), { bindSwipeResizeDispatcher: c } = H1();
    let f = 0;
    const v = S(() => e.isError ? void 0 : e.isFocusing ? e.focusColor : e.blurColor);
    wr(() => y(!0)), ep(r, () => y(!0)), En(() => {
      y(), Ne().then(() => {
        l.value = !1;
      });
    }), qt(y), C(d, null), C(c, { onResize() {
      Ne().then(() => y(!0));
    } }), u && ge(() => u.show.value, ($) => ec(null, null, function* () {
      $ && (yield Gn(), y(!0));
    }));
    function g() {
      const { hint: $, value: w, composing: z } = e;
      if (!$ && (!Or(w) || z)) return Vl("--placeholder-hidden");
      if (s.value) return Vl("--placeholder-hint");
    }
    function h($) {
      C(e.onClear, $);
    }
    function m($) {
      C(e.onClick, $);
    }
    function y($ = !1) {
      return ec(this, null, function* () {
        if (!r.value) return;
        $ && (f++, l.value = !0);
        const w = f;
        if (o.value = `${r.value.offsetLeft}px`, a.value = `${r.value.offsetWidth}px`, i.value = `${r.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
          const z = Ur(n.value), T = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
          t.value = `calc(${z.width} * 0.75 + ${T} * 2)`;
        }
        $ && (yield Ne(), yield qr(), w === f && (l.value = !1));
      });
    }
    return {
      placeholderTextEl: n,
      middleEl: r,
      middleOffsetLeft: o,
      middleOffsetWidth: a,
      middleOffsetHeight: i,
      color: v,
      legendWidth: t,
      isFloating: s,
      transitionDisabled: l,
      resize: y,
      computePlaceholderState: g,
      n: Vl,
      classes: j1,
      isEmpty: Or,
      handleClear: h,
      handleClick: m
    };
  }
});
Up.render = K1;
var Ka = Up;
ue(Ka);
fe(Ka, Ro);
var VA = Ka, ho = Ka, W1 = Object.defineProperty, q1 = Object.defineProperties, X1 = Object.getOwnPropertyDescriptors, nc = Object.getOwnPropertySymbols, G1 = Object.prototype.hasOwnProperty, Z1 = Object.prototype.propertyIsEnumerable, rc = (e, n, r) => n in e ? W1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, J1 = (e, n) => {
  for (var r in n || (n = {})) G1.call(n, r) && rc(e, r, n[r]);
  if (nc)
    for (var r of nc(n)) Z1.call(n, r) && rc(e, r, n[r]);
  return e;
}, Q1 = (e, n) => q1(e, X1(n)), Wa = Q1(J1({
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
}), { name: x1, n: _1, classes: ew } = oe("input"), nw = [
  "aria-label",
  "placeholder",
  "enterkeyhint"
], rw = [
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
], tw = [
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
function ow(e, n) {
  const r = x("var-field-decorator"), t = x("var-form-details");
  return b(), k("div", {
    class: p(e.classes(e.n(), e.n("$--box"))),
    onMousedown: n[12] || (n[12] = (...o) => e.handleMousedown && e.handleMousedown(...o))
  }, [U(r, yt(Aa({
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
    "clear-icon": se(({ clear: o }) => [F(e.$slots, "clear-icon", { clear: o })]),
    "append-icon": se(() => [F(e.$slots, "append-icon")]),
    default: se(() => [e.normalizedType === "password" && e.preventAutoFill ? (b(), k("input", {
      key: 0,
      tabindex: "-1",
      "aria-label": e.ariaLabel,
      class: p(e.n("autocomplete")),
      placeholder: e.hint ? void 0 : e.placeholder,
      style: Q({ "--input-placeholder-color": e.placeholderColor }),
      enterkeyhint: e.enterkeyhint
    }, null, 14, nw)) : X("v-if", !0), e.textarea ? (b(), k("textarea", {
      key: 1,
      id: e.id,
      ref: "el",
      "aria-label": e.ariaLabel,
      class: p(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.errorMessage, e.n("--caret-error")])),
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
      style: Q({
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
    }, null, 46, rw)) : (b(), k("input", {
      key: 2,
      id: e.id,
      ref: "el",
      "aria-label": e.ariaLabel,
      class: p(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.errorMessage, e.n("--caret-error")])),
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
      style: Q({
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
    }, null, 46, tw))]),
    _: 2
  }, [e.$slots["prepend-icon"] ? {
    name: "prepend-icon",
    fn: se(() => [F(e.$slots, "prepend-icon")]),
    key: "0"
  } : void 0]), 1040), e.isShowFormDetails ? (b(), ke(t, {
    key: 0,
    "error-message": e.errorMessage,
    "extra-message": e.maxlengthText
  }, Pr({ _: 2 }, [e.$slots["extra-message"] ? {
    name: "extra-message",
    fn: se(() => [F(e.$slots, "extra-message")]),
    key: "0"
  } : void 0]), 1032, ["error-message", "extra-message"])) : X("v-if", !0)], 34);
}
var jp = te({
  name: x1,
  components: {
    VarFormDetails: Hn,
    VarFieldDecorator: ho
  },
  props: Wa,
  setup(e) {
    const n = _v(), r = P(null), t = P(!1), o = P(!1), { bindForm: a, form: i } = Kn(), { errorMessage: l, validateWithTrigger: s, validate: u, resetValidation: d } = xn(), c = S(() => e.disabled || e.readonly ? "" : "text"), f = S(() => e.type === "number" ? "text" : e.type), v = S(() => {
      const { maxlength: G, modelValue: ce } = e;
      return G ? Or(ce) ? `0 / ${G}` : `${String(ce).length}/${G}` : "";
    }), g = S(() => {
      const { hint: G, blurColor: ce, focusColor: me } = e;
      if (!G)
        return l.value ? "var(--field-decorator-error-color)" : t.value ? me || "var(--field-decorator-focus-color)" : ce || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    C(a, {
      reset: N,
      validate: M,
      resetValidation: d
    }), En(() => {
      e.autofocus && I();
    });
    function h(G) {
      Ne(() => {
        const { validateTrigger: ce, rules: me, modelValue: de } = e;
        s(ce, G, me, de);
      });
    }
    function m(G) {
      t.value = !0, C(e.onFocus, G), h("onFocus");
    }
    function y(G) {
      t.value = !1, C(e.onBlur, G), h("onBlur");
    }
    function $(G) {
      const ce = G.target;
      let { value: me } = ce;
      e.type === "number" && (me = A(me));
      const de = E(me);
      return de === e.modelValue && (ce.value = de), de;
    }
    function w() {
      o.value = !0;
    }
    function z(G) {
      o.value && (o.value = !1, G.target.dispatchEvent(new Event("input")));
    }
    function T(G) {
      if (o.value) return;
      const ce = $(G);
      C(e["onUpdate:modelValue"], ce), C(e.onInput, ce, G), h("onInput");
    }
    function O(G) {
      const ce = D($(G));
      e.modelModifiers.trim && C(e["onUpdate:modelValue"], ce), C(e.onChange, ce, G), h("onChange");
    }
    function R() {
      const { disabled: G, readonly: ce, clearable: me, onClear: de } = e;
      i?.disabled.value || i?.readonly.value || G || ce || !me || (C(e["onUpdate:modelValue"], ""), C(de, ""), h("onClear"));
    }
    function H(G) {
      const { disabled: ce, onClick: me } = e;
      i?.disabled.value || ce || (C(me, G), h("onClick"));
    }
    function A(G) {
      const ce = G.indexOf("-"), me = G.indexOf(".");
      return ce > -1 && (G = ce === 0 ? "-" + G.replace(/-/g, "") : G.replace(/-/g, "")), me > -1 && (G = G.slice(0, me + 1) + G.slice(me).replace(/\./g, "")), G.replace(/[^-0-9.]/g, "");
    }
    function D(G) {
      return e.modelModifiers.trim ? G.trim() : G;
    }
    function E(G) {
      return e.maxlength ? G.slice(0, Z(e.maxlength)) : G;
    }
    function B(G) {
      const { disabled: ce } = e;
      i?.disabled.value || ce || G.target === r.value || (I(), Ze(G));
    }
    function N() {
      C(e["onUpdate:modelValue"], ""), d();
    }
    function M() {
      return u(e.rules, e.modelValue);
    }
    function I() {
      var G;
      (G = r.value) == null || G.focus();
    }
    function j() {
      r.value.blur();
    }
    function W() {
      r.value.select();
    }
    return {
      el: r,
      id: n,
      isFocusing: t,
      isComposing: o,
      errorMessage: l,
      placeholderColor: g,
      normalizedType: f,
      cursor: c,
      maxlengthText: v,
      formDisabled: i?.disabled,
      formReadonly: i?.readonly,
      n: _1,
      classes: ew,
      isEmpty: Or,
      handleFocus: m,
      handleBlur: y,
      handleInput: T,
      handleChange: O,
      handleClear: R,
      handleClick: H,
      handleCompositionStart: w,
      handleCompositionEnd: z,
      handleMousedown: B,
      validate: M,
      resetValidation: d,
      reset: N,
      focus: I,
      blur: j,
      select: W
    };
  }
});
jp.render = ow;
var Vo = jp;
ue(Vo);
fe(Vo, Wa);
var LA = Vo, Lt = Vo, Yp = {
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
}, Kp = /* @__PURE__ */ Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function aw() {
  const { bindChildren: e, childProviders: n, length: r } = In(Kp);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function iw() {
  const { bindParent: e, parentProvider: n, index: r } = Bn(Kp);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var tc = (e, n, r) => new Promise((t, o) => {
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
}), { name: lw, n: sw, classes: uw } = oe("checkbox"), dw = [
  "aria-checked",
  "aria-disabled",
  "tabindex"
];
function cw(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), o = x("var-form-details"), a = _e("hover"), i = _e("ripple");
  return b(), k("div", { class: p(e.n("wrap")) }, [L("div", {
    ref: "checkbox",
    role: "checkbox",
    "aria-checked": e.isIndeterminate ? "mixed" : e.checked,
    "aria-disabled": e.formDisabled || e.disabled,
    class: p(e.n()),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocus: n[1] || (n[1] = (l) => e.isFocusing = !0),
    onBlur: n[2] || (n[2] = (l) => e.isFocusing = !1),
    onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
  }, [Ke((b(), k("div", {
    class: p(e.classes(e.n("action"), [
      e.checked || e.isIndeterminate,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: Q({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor })
  }, [
    e.isIndeterminate ? (b(), k("span", {
      key: 0,
      class: p(e.n("icon")),
      style: Q({ fontSize: e.toSizeUnit(e.iconSize) })
    }, [F(e.$slots, "indeterminate-icon", {}, () => [U(r, { name: "minus-box" })])], 6)) : X("v-if", !0),
    e.checked && !e.isIndeterminate ? (b(), k("span", {
      key: 1,
      class: p(e.n("icon")),
      style: Q({ fontSize: e.toSizeUnit(e.iconSize) })
    }, [F(e.$slots, "checked-icon", {}, () => [U(r, { name: "checkbox-marked" })])], 6)) : X("v-if", !0),
    !e.checked && !e.isIndeterminate ? (b(), k("span", {
      key: 2,
      class: p(e.n("icon")),
      style: Q({ fontSize: e.toSizeUnit(e.iconSize) })
    }, [F(e.$slots, "unchecked-icon", {}, () => [U(r, { name: "checkbox-blank-outline" })])], 6)) : X("v-if", !0),
    U(t, {
      hovering: !e.disabled && !e.formDisabled && e.hovering,
      focusing: !e.disabled && !e.formDisabled && e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 6)), [[
    a,
    e.handleHovering,
    "desktop"
  ], [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]]), e.$slots.default ? (b(), k("div", {
    key: 0,
    class: p(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...l) => e.handleTextClick && e.handleTextClick(...l))
  }, [F(e.$slots, "default", { checked: e.checked })], 2)) : X("v-if", !0)], 42, dw), U(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Wp = te({
  name: lw,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarIcon: Je,
    VarFormDetails: Hn,
    VarHoverOverlay: Zn
  },
  props: Yp,
  setup(e) {
    const n = P(null), r = P(!1), t = yn(e, "modelValue"), o = yn(e, "indeterminate"), a = S(() => t.value === e.checkedValue), i = S(() => e.checkedValue), { checkboxGroup: l, bindCheckboxGroup: s } = iw(), { hovering: u, handleHovering: d } = ur(), { form: c, bindForm: f } = Kn(), { errorMessage: v, validateWithTrigger: g, validate: h, resetValidation: m } = xn(), y = {
      checkedValue: i,
      checked: a,
      sync: O,
      validate: E,
      resetValidation: m,
      reset: R
    };
    C(s, y), C(f, y), xe(() => window, "keydown", A), xe(() => window, "keyup", D);
    function $(B) {
      Ne(() => {
        const { validateTrigger: N, rules: M, modelValue: I } = e;
        g(N, B, M, I);
      });
    }
    function w(B) {
      return tc(this, null, function* () {
        const { checkedValue: N, onChange: M } = e;
        t.value = B, B === N ? l?.onChecked(N) : l?.onUnchecked(N), yield Ne(), C(M, B, o.value), $("onChange");
      });
    }
    function z(B) {
      return tc(this, null, function* () {
        const { disabled: N, readonly: M, checkedValue: I, uncheckedValue: j, onClick: W } = e;
        if (c?.disabled.value || N || (C(W, B), c?.readonly.value || M)) return;
        if (o.value === !0) {
          o.value = !1, yield Ne(), C(e.onChange, t.value, o.value), $("onChange");
          return;
        }
        const G = l ? l.checkedCount.value >= Number(l.max.value) : !1;
        !a.value && G || w(a.value ? j : I);
      });
    }
    function T() {
      n.value.focus();
    }
    function O(B) {
      const { checkedValue: N, uncheckedValue: M } = e;
      t.value = B.includes(N) ? N : M;
    }
    function R() {
      t.value = e.uncheckedValue, m();
    }
    function H(B) {
      const { checkedValue: N, uncheckedValue: M } = e;
      [N, M].includes(B) || (B = a.value ? M : N), w(B);
    }
    function A(B) {
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
      n: sw,
      classes: uw,
      handleHovering: d,
      handleClick: z,
      handleTextClick: T,
      toSizeUnit: Te,
      toggle: H,
      reset: R,
      validate: E,
      resetValidation: m
    };
  }
});
Wp.render = cw;
var qa = Wp;
ue(qa);
fe(qa, Yp);
var FA = qa, ct = qa, qp = {
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
}, Xp = /* @__PURE__ */ Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function fw() {
  const { length: e, childProviders: n, bindChildren: r } = In(Xp);
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: r
  };
}
function vw() {
  const { index: e, parentProvider: n, bindParent: r } = Bn(Xp);
  return or(!!r, "MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: r
  };
}
var pw = (e, n, r) => new Promise((t, o) => {
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
}), { name: mw, n: gw, classes: hw } = oe("menu-option"), bw = ["tabindex"];
function yw(e, n) {
  const r = x("var-checkbox"), t = x("maybe-v-node"), o = x("var-icon"), a = x("var-hover-overlay"), i = _e("ripple"), l = _e("hover");
  return Ke((b(), k("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.size}`), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")], [e.childrenTrigger, e.n("--children-trigger")])),
    tabindex: e.disabled ? void 0 : "-1",
    onClick: n[3] || (n[3] = (...s) => e.handleClick && e.handleClick(...s)),
    onFocus: n[4] || (n[4] = (s) => e.isFocusing = !0),
    onBlur: n[5] || (n[5] = (s) => e.isFocusing = !1)
  }, [
    L("div", { class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])) }, null, 2),
    e.multiple ? (b(), ke(r, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (s) => e.optionSelected = s),
      indeterminate: e.optionIndeterminate,
      "onUpdate:indeterminate": n[1] || (n[1] = (s) => e.optionIndeterminate = s),
      disabled: e.disabled,
      onClick: n[2] || (n[2] = Nn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, [
      "modelValue",
      "indeterminate",
      "disabled",
      "onChange"
    ])) : X("v-if", !0),
    F(e.$slots, "default", {}, () => [L("div", { class: p(e.classes(e.n("text"))) }, [U(t, {
      is: e.labelVNode,
      class: p(e.n("$--ellipsis"))
    }, null, 8, ["is", "class"])], 2)]),
    e.childrenTrigger ? (b(), k("div", {
      key: 1,
      class: p(e.n("arrow"))
    }, [U(o, {
      "var-menu-option-cover": "",
      class: p(e.n("arrow-icon")),
      name: "chevron-right"
    }, null, 8, ["class"])], 2)) : X("v-if", !0),
    U(a, {
      hovering: (e.hovering || e.highlight) && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 42, bw)), [[i, { disabled: e.disabled || !e.ripple }], [
    l,
    e.handleHovering,
    "desktop"
  ]]);
}
var Gp = te({
  name: mw,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarCheckbox: ct,
    VarHoverOverlay: Zn,
    VarIcon: Je,
    MaybeVNode: lr
  },
  props: qp,
  setup(e) {
    const n = P(), r = P(), t = P(!1), o = P(!1), a = P(!1), i = S(() => o.value), l = S(() => a.value), s = S(() => e.value), u = S(() => e.disabled), d = S(() => e.ripple), { menuSelect: c, bindMenuSelect: f } = vw(), { size: v, multiple: g, onSelect: h, computeLabel: m } = c, { hovering: y, handleHovering: $ } = ur(), w = S(() => {
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
      sync: A
    };
    ge([() => e.label, () => e.value], m), f(z), xe(() => window, "keydown", O), xe(() => window, "keyup", R);
    function T() {
      if (!e.disabled && !(!g.value && e.childrenTrigger)) {
        if (g.value && a.value) {
          a.value = !1, o.value = !1, h(z);
          return;
        }
        g.value && !a.value && (o.value = !o.value), h(z);
      }
    }
    function O(D) {
      var E;
      !t.value && !((E = r.value) != null && E.isFocusing) || ((D.key === "ArrowRight" || D.key === "ArrowLeft") && (Ze(D), C(e.onKeyArrowX, D.key)), t.value && ((D.key === " " || D.key === "Enter") && Ze(D), D.key === "Enter" && n.value.click()));
    }
    function R(D) {
      t.value && D.key === " " && (Ze(D), n.value.click());
    }
    function H() {
      return pw(this, null, function* () {
        yield Ne(), h(z);
      });
    }
    function A(D, E) {
      o.value = D, Do(E) && (a.value = E);
    }
    return {
      root: n,
      checkbox: r,
      optionSelected: o,
      optionIndeterminate: a,
      size: v,
      multiple: g,
      hovering: y,
      isFocusing: t,
      labelVNode: w,
      n: gw,
      classes: hw,
      handleHovering: $,
      handleClick: T,
      handleSelect: H
    };
  }
});
Gp.render = yw;
var Lo = Gp;
ue(Lo);
fe(Lo, qp);
var HA = Lo, Ft = Lo, xu = {
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
var bo = "bottom", Xa = "right", Ga = "left", ww = "auto", Za = [
  "top",
  bo,
  Xa,
  Ga
], Ja = "start";
var kw = "clippingParents", $w = "viewport", oc = "popper", Sw = "reference", ac = /* @__PURE__ */ Za.reduce(function(e, n) {
  return e.concat([n + "-" + Ja, n + "-end"]);
}, []), Zp = /* @__PURE__ */ [].concat(Za, [ww]).reduce(function(e, n) {
  return e.concat([
    n,
    n + "-" + Ja,
    n + "-end"
  ]);
}, []), Cw = "beforeRead", Pw = "read", Ow = "afterRead", zw = "beforeMain", Tw = "main", Ew = "afterMain", Bw = "beforeWrite", Iw = "write", Dw = "afterWrite", Mw = [
  Cw,
  Pw,
  Ow,
  zw,
  Tw,
  Ew,
  Bw,
  Iw,
  Dw
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
function _u(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof pr(e).ShadowRoot || e instanceof ShadowRoot;
}
function Aw(e) {
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
  return Vr(e) === "html" ? e : e.assignedSlot || e.parentNode || (_u(e) ? e.host : null) || mt(e);
}
function as() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function ic(e) {
  return !hr(e) || Xr(e).position === "fixed" ? null : e.offsetParent;
}
function Nw(e) {
  var n = /firefox/i.test(as());
  if (/Trident/i.test(as()) && hr(e) && Xr(e).position === "fixed")
    return null;
  var r = Qa(e);
  for (_u(r) && (r = r.host); hr(r) && ["html", "body"].indexOf(Vr(r)) < 0; ) {
    var t = Xr(r);
    if (t.transform !== "none" || t.perspective !== "none" || t.contain === "paint" || ["transform", "perspective"].indexOf(t.willChange) !== -1 || n && t.willChange === "filter" || n && t.filter && t.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function ed(e) {
  for (var n = pr(e), r = ic(e); r && Aw(r) && Xr(r).position === "static"; ) r = ic(r);
  return r && (Vr(r) === "html" || Vr(r) === "body" && Xr(r).position === "static") ? n : r || Nw(e) || n;
}
function lt(e) {
  return e.split("-")[0];
}
function yo(e) {
  return e.split("-")[1];
}
var uo = Math.max, lc = Math.min, Ht = Math.round, Rw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Vw(e, n) {
  var r = e.x, t = e.y, o = n.devicePixelRatio || 1;
  return {
    x: Ht(r * o) / o || 0,
    y: Ht(t * o) / o || 0
  };
}
function sc(e) {
  var n, r = e.popper, t = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, c = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, g = i.y, h = g === void 0 ? 0 : g, m = typeof d == "function" ? d({
    x: v,
    y: h
  }) : {
    x: v,
    y: h
  };
  v = m.x, h = m.y;
  var y = i.hasOwnProperty("x"), $ = i.hasOwnProperty("y"), w = Ga, z = "top", T = window;
  if (u) {
    var O = ed(r), R = "clientHeight", H = "clientWidth";
    if (O === pr(r) && (O = mt(r), Xr(O).position !== "static" && l === "absolute" && (R = "scrollHeight", H = "scrollWidth")), O = O, o === "top" || (o === "left" || o === "right") && a === "end") {
      z = bo;
      var A = c && O === T && T.visualViewport ? T.visualViewport.height : O[R];
      h -= A - t.height, h *= s ? 1 : -1;
    }
    if (o === "left" || (o === "top" || o === "bottom") && a === "end") {
      w = Xa;
      var D = c && O === T && T.visualViewport ? T.visualViewport.width : O[H];
      v -= D - t.width, v *= s ? 1 : -1;
    }
  }
  var E = Object.assign({ position: l }, u && Rw), B = d === !0 ? Vw({
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
function Lw(e) {
  var n = e.state, r = e.options, t = r.gpuAcceleration, o = t === void 0 ? !0 : t, a = r.adaptive, i = a === void 0 ? !0 : a, l = r.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: lt(n.placement),
    variation: yo(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: o,
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
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-placement": n.placement });
}
var Jp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Lw,
  data: {}
}, Fw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function sa(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Fw[n];
  });
}
var Hw = {
  start: "end",
  end: "start"
};
function uc(e) {
  return e.replace(/start|end/g, function(n) {
    return Hw[n];
  });
}
function Qp() {
  return !/^((?!chrome|android).)*safari/i.test(as());
}
function Ut(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var t = e.getBoundingClientRect(), o = 1, a = 1;
  n && hr(e) && (o = e.offsetWidth > 0 && Ht(t.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ht(t.height) / e.offsetHeight || 1);
  var i = ($t(e) ? pr(e) : window).visualViewport, l = !Qp() && r, s = (t.left + (l && i ? i.offsetLeft : 0)) / o, u = (t.top + (l && i ? i.offsetTop : 0)) / a, d = t.width / o, c = t.height / a;
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
function nd(e) {
  var n = pr(e);
  return {
    scrollLeft: n.pageXOffset,
    scrollTop: n.pageYOffset
  };
}
function rd(e) {
  return Ut(mt(e)).left + nd(e).scrollLeft;
}
function Uw(e, n) {
  var r = pr(e), t = mt(e), o = r.visualViewport, a = t.clientWidth, i = t.clientHeight, l = 0, s = 0;
  if (o) {
    a = o.width, i = o.height;
    var u = Qp();
    (u || !u && n === "fixed") && (l = o.offsetLeft, s = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + rd(e),
    y: s
  };
}
function jw(e) {
  var n, r = mt(e), t = nd(e), o = (n = e.ownerDocument) == null ? void 0 : n.body, a = uo(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = uo(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -t.scrollLeft + rd(e), s = -t.scrollTop;
  return Xr(o || r).direction === "rtl" && (l += uo(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function td(e) {
  var n = Xr(e), r = n.overflow, t = n.overflowX, o = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + t);
}
function xp(e) {
  return [
    "html",
    "body",
    "#document"
  ].indexOf(Vr(e)) >= 0 ? e.ownerDocument.body : hr(e) && td(e) ? e : xp(Qa(e));
}
function co(e, n) {
  var r;
  n === void 0 && (n = []);
  var t = xp(e), o = t === ((r = e.ownerDocument) == null ? void 0 : r.body), a = pr(t), i = o ? [a].concat(a.visualViewport || [], td(t) ? t : []) : t, l = n.concat(i);
  return o ? l : l.concat(co(Qa(i)));
}
function Yw(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n)) return !0;
  if (r && _u(r)) {
    var t = n;
    do {
      if (t && e.isSameNode(t)) return !0;
      t = t.parentNode || t.host;
    } while (t);
  }
  return !1;
}
function is(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Kw(e, n) {
  var r = Ut(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function dc(e, n, r) {
  return n === "viewport" ? is(Uw(e, r)) : $t(n) ? Kw(n, r) : is(jw(mt(e)));
}
function Ww(e) {
  var n = co(Qa(e)), r = ["absolute", "fixed"].indexOf(Xr(e).position) >= 0 && hr(e) ? ed(e) : e;
  return $t(r) ? n.filter(function(t) {
    return $t(t) && Yw(t, r) && Vr(t) !== "body";
  }) : [];
}
function qw(e, n, r, t) {
  var o = n === "clippingParents" ? Ww(e) : [].concat(n), a = [].concat(o, [r]), i = a[0], l = a.reduce(function(s, u) {
    var d = dc(e, u, t);
    return s.top = uo(d.top, s.top), s.right = lc(d.right, s.right), s.bottom = lc(d.bottom, s.bottom), s.left = uo(d.left, s.left), s;
  }, dc(e, i, t));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Xw(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function _p(e) {
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
  var u = o ? Xw(o) : null;
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
function Gw() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Zw(e) {
  return Object.assign({}, Gw(), e);
}
function Jw(e, n) {
  return n.reduce(function(r, t) {
    return r[t] = e, r;
  }, {});
}
function em(e, n) {
  n === void 0 && (n = {});
  var r = n, t = r.placement, o = t === void 0 ? e.placement : t, a = r.strategy, i = a === void 0 ? e.strategy : a, l = r.boundary, s = l === void 0 ? kw : l, u = r.rootBoundary, d = u === void 0 ? $w : u, c = r.elementContext, f = c === void 0 ? oc : c, v = r.altBoundary, g = v === void 0 ? !1 : v, h = r.padding, m = h === void 0 ? 0 : h, y = Zw(typeof m != "number" ? m : Jw(m, Za)), $ = f === "popper" ? Sw : oc, w = e.rects.popper, z = e.elements[g ? $ : f], T = qw($t(z) ? z : z.contextElement || mt(e.elements.popper), s, d, i), O = Ut(e.elements.reference), R = _p({
    reference: O,
    element: w,
    strategy: "absolute",
    placement: o
  }), H = is(Object.assign({}, w, R)), A = f === "popper" ? H : O, D = {
    top: T.top - A.top + y.top,
    bottom: A.bottom - T.bottom + y.bottom,
    left: T.left - A.left + y.left,
    right: A.right - T.right + y.right
  }, E = e.modifiersData.offset;
  if (f === "popper" && E) {
    var B = E[o];
    Object.keys(D).forEach(function(N) {
      var M = ["right", "bottom"].indexOf(N) >= 0 ? 1 : -1, I = ["top", "bottom"].indexOf(N) >= 0 ? "y" : "x";
      D[N] += B[I] * M;
    });
  }
  return D;
}
function Qw(e, n) {
  n === void 0 && (n = {});
  var r = n, t = r.placement, o = r.boundary, a = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Zp : s, d = yo(t), c = d ? l ? ac : ac.filter(function(g) {
    return yo(g) === d;
  }) : Za, f = c.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = c);
  var v = f.reduce(function(g, h) {
    return g[h] = em(e, {
      placement: h,
      boundary: o,
      rootBoundary: a,
      padding: i
    })[lt(h)], g;
  }, {});
  return Object.keys(v).sort(function(g, h) {
    return v[g] - v[h];
  });
}
function xw(e) {
  if (lt(e) === "auto") return [];
  var n = sa(e);
  return [
    uc(e),
    n,
    uc(n)
  ];
}
function _w(e) {
  var n = e.state, r = e.options, t = e.name;
  if (!n.modifiersData[t]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, c = r.rootBoundary, f = r.altBoundary, v = r.flipVariations, g = v === void 0 ? !0 : v, h = r.allowedAutoPlacements, m = n.options.placement, y = lt(m) === m, $ = s || (y || !g ? [sa(m)] : xw(m)), w = [m].concat($).reduce(function(J, ne) {
      return J.concat(lt(ne) === "auto" ? Qw(n, {
        placement: ne,
        boundary: d,
        rootBoundary: c,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: h
      }) : ne);
    }, []), z = n.rects.reference, T = n.rects.popper, O = /* @__PURE__ */ new Map(), R = !0, H = w[0], A = 0; A < w.length; A++) {
      var D = w[A], E = lt(D), B = yo(D) === Ja, N = ["top", bo].indexOf(E) >= 0, M = N ? "width" : "height", I = em(n, {
        placement: D,
        boundary: d,
        rootBoundary: c,
        altBoundary: f,
        padding: u
      }), j = N ? B ? Xa : Ga : B ? bo : "top";
      z[M] > T[M] && (j = sa(j));
      var W = sa(j), G = [];
      if (a && G.push(I[E] <= 0), l && G.push(I[j] <= 0, I[W] <= 0), G.every(function(J) {
        return J;
      })) {
        H = D, R = !1;
        break;
      }
      O.set(D, G);
    }
    if (R)
      for (var ce = g ? 3 : 1, me = function(ne) {
        var pe = w.find(function(Oe) {
          var Y = O.get(Oe);
          if (Y) return Y.slice(0, ne).every(function(ae) {
            return ae;
          });
        });
        if (pe)
          return H = pe, "break";
      }, de = ce; de > 0 && me(de) !== "break"; de--) ;
    n.placement !== H && (n.modifiersData[t]._skip = !0, n.placement = H, n.reset = !0);
  }
}
var ek = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: _w,
  requiresIfExists: ["offset"],
  data: { _skip: !1 }
};
function nk(e, n, r) {
  var t = lt(e), o = ["left", "top"].indexOf(t) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, n, { placement: e })) : r, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * o, ["left", "right"].indexOf(t) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function rk(e) {
  var n = e.state, r = e.options, t = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, i = Zp.reduce(function(d, c) {
    return d[c] = nk(c, n.rects, a), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[t] = i;
}
var tk = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: rk
};
function ok(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ak(e) {
  return e === pr(e) || !hr(e) ? nd(e) : ok(e);
}
function ik(e) {
  var n = e.getBoundingClientRect(), r = Ht(n.width) / e.offsetWidth || 1, t = Ht(n.height) / e.offsetHeight || 1;
  return r !== 1 || t !== 1;
}
function lk(e, n, r) {
  r === void 0 && (r = !1);
  var t = hr(n), o = hr(n) && ik(n), a = mt(n), i = Ut(e, o, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (t || !t && !r) && ((Vr(n) !== "body" || td(a)) && (l = ak(n)), hr(n) ? (s = Ut(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = rd(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function sk(e) {
  var n = Ut(e), r = e.offsetWidth, t = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - t) <= 1 && (t = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: t
  };
}
function uk(e) {
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
function dk(e) {
  var n = uk(e);
  return Mw.reduce(function(r, t) {
    return r.concat(n.filter(function(o) {
      return o.phase === t;
    }));
  }, []);
}
function ck(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function fk(e) {
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
var cc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function fc() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
  return !n.some(function(t) {
    return !(t && typeof t.getBoundingClientRect == "function");
  });
}
function vk(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, t = r === void 0 ? [] : r, o = n.defaultOptions, a = o === void 0 ? cc : o;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, cc, a),
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
        var w = dk(fk([].concat(t, d.options.modifiers)));
        return d.orderedModifiers = w.filter(function(z) {
          return z.enabled;
        }), g(), v.update();
      },
      forceUpdate: function() {
        if (!f) {
          var y = d.elements, $ = y.reference, w = y.popper;
          if (fc($, w)) {
            d.rects = {
              reference: lk($, ed(w), d.options.strategy === "fixed"),
              popper: sk(w)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(D) {
              return d.modifiersData[D.name] = Object.assign({}, D.data);
            });
            for (var z = 0; z < d.orderedModifiers.length; z++) {
              if (d.reset === !0) {
                d.reset = !1, z = -1;
                continue;
              }
              var T = d.orderedModifiers[z], O = T.fn, R = T.options, H = R === void 0 ? {} : R, A = T.name;
              typeof O == "function" && (d = O({
                state: d,
                options: H,
                name: A,
                instance: v
              }) || d);
            }
          }
        }
      },
      update: ck(function() {
        return new Promise(function(m) {
          v.forceUpdate(), m(d);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!fc(l, s)) return v;
    v.setOptions(u).then(function(m) {
      !f && u.onFirstUpdate && u.onFirstUpdate(m);
    });
    function g() {
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
function pk(e) {
  var n = e.state, r = e.instance, t = e.options, o = t.scroll, a = o === void 0 ? !0 : o, i = t.resize, l = i === void 0 ? !0 : i, s = pr(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Jo);
  }), l && s.addEventListener("resize", r.update, Jo), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Jo);
    }), l && s.removeEventListener("resize", r.update, Jo);
  };
}
var mk = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: pk,
  data: {}
};
function gk(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = _p({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
var hk = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: gk,
  data: {}
};
function bk(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var t = n.styles[r] || {}, o = n.attributes[r] || {}, a = n.elements[r];
    !hr(a) || !Vr(a) || (Object.assign(a.style, t), Object.keys(o).forEach(function(i) {
      var l = o[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function yk(e) {
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
var wk = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: bk,
  effect: yk,
  requires: ["computeStyles"]
}, kk = [
  mk,
  hk,
  Jp,
  wk
], $k = /* @__PURE__ */ vk({ defaultModifiers: kk }), Sk = Object.defineProperty, Ck = Object.defineProperties, Pk = Object.getOwnPropertyDescriptors, vc = Object.getOwnPropertySymbols, Ok = Object.prototype.hasOwnProperty, zk = Object.prototype.propertyIsEnumerable, pc = (e, n, r) => n in e ? Sk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ll = (e, n) => {
  for (var r in n || (n = {})) Ok.call(n, r) && pc(e, r, n[r]);
  if (vc)
    for (var r of vc(n)) zk.call(n, r) && pc(e, r, n[r]);
  return e;
}, Fl = (e, n) => Ck(e, Pk(n)), mc = (e, n, r) => new Promise((t, o) => {
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
function nm(e) {
  const n = P(null), r = P(null), t = P({
    width: 0,
    height: 0
  }), o = yn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(W, G) {
      C(G ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = Ao(() => o.value, 1);
  Xu(() => o.value, a);
  let i = null, l, s = !1, u = !1, d = 0, c = !0;
  xe(() => window, "keydown", N), ge(() => [
    e.offsetX,
    e.offsetY,
    e.placement,
    e.strategy
  ], M), ge(() => e.disabled, j), ge(() => o.value, (W) => {
    W && M();
  }), wr(M), Tr(f), Io(v);
  function f() {
    const W = D();
    i = $k(W, r.value, A()), W.addEventListener("mouseenter", m), W.addEventListener("mouseleave", y), W.addEventListener("click", z), document.addEventListener("click", T);
  }
  function v() {
    const W = D();
    W && (W.removeEventListener("mouseenter", m), W.removeEventListener("mouseleave", y), W.removeEventListener("click", z)), i.destroy(), document.removeEventListener("click", T);
  }
  function g() {
    const W = D();
    if (!W) return;
    const { width: G, height: ce } = Ur(W);
    t.value = {
      width: fn(G),
      height: fn(ce)
    };
  }
  function h() {
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
  function m() {
    e.trigger === "hover" && (u = !0, d++, I());
  }
  function y() {
    return mc(this, null, function* () {
      if (e.trigger !== "hover") return;
      u = !1;
      const W = ++d;
      yield Gn(), !(W !== d || u || s) && j();
    });
  }
  function $() {
    e.trigger === "hover" && (s = !0, d++, e.cascadeOptimization && (c = !1));
  }
  function w() {
    return mc(this, null, function* () {
      if (e.trigger !== "hover") return;
      s = !1;
      const W = ++d;
      yield Gn(), !(W !== d || u || s) && j();
    });
  }
  function z() {
    if (e.trigger === "click") {
      if (e.closeOnClickReference && o.value) {
        j();
        return;
      }
      I();
    }
  }
  function T(W) {
    const G = D();
    if (G && !G.contains(W.target)) {
      if (e.trigger !== "click") return;
      O(), C(e.onClickOutside, W);
    }
  }
  function O() {
    j();
  }
  function R() {
    M(), C(e.onClosed);
  }
  function H() {
    const { offsetX: W, offsetY: G, placement: ce } = e;
    g();
    const me = {
      x: fn(W),
      y: fn(G)
    };
    switch (ce) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: me.x,
          distance: me.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: me.x,
          distance: me.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: me.x,
          distance: me.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: me.x,
          distance: -me.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: me.x,
          distance: -me.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: me.x,
          distance: -me.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: me.y,
          distance: me.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: me.y,
          distance: -me.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: ce,
          skidding: me.y,
          distance: -me.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: ce,
          skidding: me.x,
          distance: -me.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: ce,
          skidding: me.x,
          distance: me.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: ce,
          skidding: me.y,
          distance: me.x
        };
    }
  }
  function A() {
    const { placement: W, skidding: G, distance: ce } = H();
    return {
      placement: W,
      modifiers: [
        Fl(Ll({}, ek), { enabled: o.value }),
        Fl(Ll({}, tk), { options: { offset: [G, ce] } }),
        Fl(Ll({}, Jp), {
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
          fn({ state: me }) {
            me.styles.popper.transformOrigin = h();
          }
        }
      ],
      strategy: e.strategy
    };
  }
  function D() {
    var W, G;
    const ce = (W = l ?? e.reference) != null ? W : n.value;
    return Pn(ce) ? (G = n.value) == null ? void 0 : G.querySelector(ce) : ce;
  }
  function E(W) {
    c = W;
  }
  function B(W) {
    v(), l = W, f();
  }
  function N(W) {
    const { closeOnKeyEscape: G = !1 } = e;
    W.key === "Escape" && G && o.value && (Ze(W), j());
  }
  function M() {
    i.setOptions(A());
  }
  function I() {
    e.disabled || (o.value = !0, C(e["onUpdate:show"], !0));
  }
  function j() {
    c && (o.value = !1, C(e["onUpdate:show"], !1));
  }
  return {
    show: o,
    popover: r,
    zIndex: a,
    host: n,
    referenceSize: t,
    handlePopoverClose: O,
    handlePopoverMouseenter: $,
    handlePopoverMouseleave: w,
    handleClosed: R,
    setReference: B,
    setAllowClose: E,
    resize: M,
    open: I,
    close: j
  };
}
var { name: Tk, n: Ek, classes: Bk } = oe("menu");
function Ik(e, n) {
  return b(), k("div", {
    ref: "host",
    class: p(e.classes(e.n(), e.n("$--box")))
  }, [F(e.$slots, "default"), (b(), ke(Hr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [U(bn, {
    name: e.n(),
    onAfterEnter: e.onOpened,
    onAfterLeave: e.handleClosed,
    persisted: ""
  }, {
    default: se(() => [Ke(L("div", {
      ref: "popover",
      style: Q({
        zIndex: e.zIndex,
        width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.referenceSize.width)) : void 0
      }),
      class: p(e.classes(e.n("menu"), e.n("$--box"), e.n("$--scrollbar"), e.popoverClass, [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
      onClick: n[0] || (n[0] = Nn(() => {
      }, ["stop"])),
      onMouseenter: n[1] || (n[1] = (...r) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...r)),
      onMouseleave: n[2] || (n[2] = (...r) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...r))
    }, [F(e.$slots, "menu")], 38), [[yr, e.show]])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]))], 2);
}
var rm = te({
  name: Tk,
  props: xu,
  setup(e) {
    const { disabled: n } = zt(), { popover: r, host: t, referenceSize: o, show: a, zIndex: i, handlePopoverMouseenter: l, handlePopoverMouseleave: s, handlePopoverClose: u, handleClosed: d, setAllowClose: c, open: f, close: v, resize: g, setReference: h } = nm(e);
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
      formatElevation: On,
      toSizeUnit: Te,
      n: Ek,
      classes: Bk,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: s,
      handlePopoverClose: u,
      handleClosed: d,
      resize: g,
      open: f,
      close: v,
      setReference: h
    };
  }
});
rm.render = Ik;
var Fo = rm;
ue(Fo);
fe(Fo, xu);
var UA = Fo, jt = Fo;
function tm(e) {
  const { multiple: n, modelValue: r, optionProviders: t, optionProvidersLength: o, optionIsIndeterminate: a } = e, i = P(""), l = P([]);
  ge(r, f, { deep: !0 }), ge(o, f);
  function s() {
    const v = n(), g = r();
    v && (l.value = g.map(u)), !v && !Or(g) && (i.value = u(g)), !v && Or(g) && (i.value = "");
  }
  function u(v) {
    var g;
    const h = t();
    let m = h.find(({ value: y }) => y.value === v);
    return m || (m = h.find(({ label: y }) => y.value === v)), (g = m?.label.value) != null ? g : "";
  }
  function d({ value: v, label: g }) {
    var h;
    return (h = v.value) != null ? h : g.value;
  }
  function c(v) {
    const g = n(), h = t();
    return g ? h.filter(({ selected: m }) => m.value).map(d) : d(v);
  }
  function f() {
    const v = n(), g = r(), h = t();
    v ? h.forEach((m) => m.sync(g.includes(d(m)), a ? a(m) : void 0)) : h.forEach((m) => m.sync(g === d(m))), s();
  }
  return {
    label: i,
    labels: l,
    getOptionProviderKey: d,
    computeLabel: s,
    getSelectedValue: c
  };
}
var Dk = Object.defineProperty, Mk = Object.defineProperties, Ak = Object.getOwnPropertyDescriptors, gc = Object.getOwnPropertySymbols, Nk = Object.prototype.hasOwnProperty, Rk = Object.prototype.propertyIsEnumerable, hc = (e, n, r) => n in e ? Dk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Vk = (e, n) => {
  for (var r in n || (n = {})) Nk.call(n, r) && hc(e, r, n[r]);
  if (gc)
    for (var r of gc(n)) Rk.call(n, r) && hc(e, r, n[r]);
  return e;
}, Lk = (e, n) => Mk(e, Ak(n)), ya = Lk(Vk({
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
}, Fe(xu, [
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
])), { onKeyEscape: V() }), Fk = Object.defineProperty, bc = Object.getOwnPropertySymbols, Hk = Object.prototype.hasOwnProperty, Uk = Object.prototype.propertyIsEnumerable, yc = (e, n, r) => n in e ? Fk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, jk = (e, n) => {
  for (var r in n || (n = {})) Hk.call(n, r) && yc(e, r, n[r]);
  if (bc)
    for (var r of bc(n)) Uk.call(n, r) && yc(e, r, n[r]);
  return e;
}, Yk = (e, n, r) => new Promise((t, o) => {
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
}), { name: Kk, n: Wk } = oe("menu-children"), qk = { ref: "menuOptions" };
function Xk(e, n) {
  const r = x("var-menu-option"), t = x("var-menu-children"), o = x("var-menu");
  return b(), ke(o, {
    ref: "menu",
    show: e.show,
    "onUpdate:show": n[1] || (n[1] = (a) => e.show = a),
    trigger: "hover",
    placement: "right-start",
    "cascade-optimization": "",
    "var-menu-children-cover": "",
    class: p(e.n()),
    disabled: e.disabled,
    teleport: !1,
    "close-on-click-reference": !1
  }, Pr({
    default: se(() => [U(r, {
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
    fn: se(() => [L("div", qk, [(b(!0), k(Ie, null, Ye(e.options, (a) => (b(), k(Ie, { key: a[e.valueKey] }, [a[e.childrenKey] ? (b(), ke(t, {
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
    ])) : (b(), ke(r, {
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
var om = te({
  name: Kk,
  components: {
    VarMenu: Fo,
    VarMenuOption: Lo
  },
  props: jk({
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
    ge(() => e.parentShow, (f) => {
      f || (n.value = !1);
    }, { immediate: !0 });
    function i(f) {
      return Yk(this, null, function* () {
        var v;
        C(e.onKeyArrowX, f), f === "ArrowRight" && (C(e.onKeyArrowRightOpen), (v = r.value) == null || v.open(), yield qr(), Ju(r.value.$el, o.value, "ArrowDown"));
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
      (v = a.value) == null || v.forEach((g) => {
        if (g.allowClose(), f == null) {
          g.close();
          return;
        }
        g.option.value !== f.value && g.close();
      });
    }
    function c() {
      C(e.onMouseenter);
    }
    return {
      show: n,
      menu: r,
      trigger: t,
      menuOptions: o,
      menuChildren: a,
      n: Wk,
      close: s,
      handleArrowLeft: l,
      handleArrowRight: i,
      handleMouseenter: c,
      allowClose: u,
      allowChildrenClose: d
    };
  }
});
om.render = Xk;
var Gk = om, Zk = Object.defineProperty, Jk = Object.defineProperties, Qk = Object.getOwnPropertyDescriptors, wc = Object.getOwnPropertySymbols, xk = Object.prototype.hasOwnProperty, _k = Object.prototype.propertyIsEnumerable, kc = (e, n, r) => n in e ? Zk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, e$ = (e, n) => {
  for (var r in n || (n = {})) xk.call(n, r) && kc(e, r, n[r]);
  if (wc)
    for (var r of wc(n)) _k.call(n, r) && kc(e, r, n[r]);
  return e;
}, n$ = (e, n) => Jk(e, Qk(n)), { name: r$, n: t$, classes: o$ } = oe("menu-select");
function a$(e, n) {
  const r = x("var-menu-children"), t = x("var-menu-option"), o = x("var-menu");
  return b(), ke(o, {
    ref: "menu",
    show: e.show,
    "onUpdate:show": n[1] || (n[1] = (a) => e.show = a),
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
    onOpen: e.onOpen,
    onOpened: e.onOpened,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onClickOutside: e.onClickOutside
  }, {
    menu: se(() => [L("div", {
      ref: "menuOptionsRef",
      class: p(e.classes(e.n("menu"), e.n("$--scrollbar"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
    }, [(b(!0), k(Ie, null, Ye(e.options, (a) => (b(), k(Ie, { key: a[e.valueKey] }, [a[e.childrenKey] ? (b(), ke(r, {
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
    ])) : (b(), ke(t, {
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
    ]))], 64))), 128)), F(e.$slots, "options")], 2)]),
    default: se(() => [F(e.$slots, "default")]),
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
var am = te({
  name: r$,
  components: {
    VarMenu: jt,
    VarMenuOption: Ft,
    VarMenuChildren: Gk
  },
  props: ya,
  setup(e) {
    const n = yn(e, "show"), r = P(), t = P(), o = P(), a = S(() => $(e.options)), { menuOptions: i, length: l, bindMenuOptions: s } = fw(), { computeLabel: u, getSelectedValue: d, getOptionProviderKey: c } = tm({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => i,
      optionProvidersLength: () => l.value,
      optionIsIndeterminate(B) {
        var N;
        const M = g(B.value.value);
        if (!M) return !1;
        const I = ((N = M._children) != null ? N : []).filter((W) => !W.disabled), j = I.filter((W) => e.modelValue.includes(W.value));
        return j.length > 0 && j.length < I.length;
      }
    }), f = S(() => {
      const { multiple: B, modelValue: N } = e;
      if (B) return [];
      const M = a.value.find((W) => W.value === N), I = [];
      let j = M?._parent;
      for (; j; )
        I.push(j), j = j._parent;
      return I;
    });
    s({
      size: S(() => e.size),
      multiple: S(() => e.multiple),
      computeLabel: u,
      onSelect: w
    }), ge(n, (B) => {
      B && Ne(v);
    }), xe(() => window, "keydown", T);
    function v() {
      const B = t.value;
      zp(B, B?.querySelector(".var-menu-option--selected-color"));
    }
    function g(B) {
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
      M(B);
      function M(I) {
        I.forEach((j) => {
          N.push(j);
          const W = m(j);
          W && M(W);
        });
      }
      return N;
    }
    function $(B) {
      function N(M, I) {
        return M.map((j) => {
          j = n$(e$({}, j), { _rawOption: j }), I && (j._parent = I);
          const W = m(j);
          if (W) {
            const G = N(W, j);
            j[e.childrenKey] = G, j._children = y(G);
          }
          return j;
        });
      }
      return y(N(B));
    }
    function w(B) {
      var N, M;
      const { multiple: I, closeOnSelect: j } = e, { value: W, label: G, selected: ce, disabled: me, ripple: de } = B, J = g(W.value);
      if (J) {
        const Oe = ((N = J._children) != null ? N : []).filter((Y) => !Y.disabled).map((Y) => Y.value);
        I && ce.value && (i.forEach((Y) => {
          Oe.includes(Y.value.value) && Y.sync(!0, !1);
        }), z(J)), I && !ce.value && (i.forEach((Y) => {
          Oe.includes(Y.value.value) && Y.sync(!1, !1);
        }), z(J));
      }
      const ne = d(B), pe = (M = J?._rawOption) != null ? M : {
        value: W.value,
        label: G.value,
        disabled: me.value,
        ripple: de.value
      };
      C(e.onSelect, c(B), pe), C(e["onUpdate:modelValue"], ne), !I && j && (r.value.$el.focus(), A());
    }
    function z(B) {
      let N = B._parent;
      for (; N; ) {
        const M = h(N.value), I = m(N).filter((G) => !G.disabled), j = I.every((G) => !h(G.value).selected.value), W = I.every((G) => h(G.value).selected.value);
        j ? M.sync(!1, !1) : W ? M.sync(!0, !1) : M.sync(!1, !0), N = N._parent;
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
        r.value.$el.focus(), A(), C(e.onKeyEscape);
        return;
      }
      (N === "ArrowDown" || N === "ArrowUp") && Ju(r.value.$el, t.value, N, (M, I, j) => j ? !0 : O(M) === O(I));
    }
    function O(B) {
      var N, M;
      if (B.classList.contains("var-menu-option--children-trigger")) return (N = B.parentNode) == null ? void 0 : N.parentNode;
      if (B.classList.contains("var-checkbox")) {
        const I = (M = B.parentNode) == null ? void 0 : M.parentNode;
        if (I) return O(I);
      }
      return B.parentNode;
    }
    function R(B) {
      var N;
      (N = o.value) == null || N.forEach((M) => {
        if (M.allowClose(), B == null) {
          M.close();
          return;
        }
        M.option.value !== B.value && M.close();
      });
    }
    function H() {
      var B;
      (B = r.value) == null || B.open();
    }
    function A() {
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
      n: t$,
      classes: o$,
      allowChildrenClose: R,
      formatElevation: On,
      open: H,
      close: A,
      resize: D,
      setReference: E
    };
  }
});
am.render = a$;
var xa = am;
ue(xa);
fe(xa, ya);
var jA = xa, Yt = xa, i$ = Object.defineProperty, $c = Object.getOwnPropertySymbols, l$ = Object.prototype.hasOwnProperty, s$ = Object.prototype.propertyIsEnumerable, Sc = (e, n, r) => n in e ? i$(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, u$ = (e, n) => {
  for (var r in n || (n = {})) l$.call(n, r) && Sc(e, r, n[r]);
  if ($c)
    for (var r of $c(n)) s$.call(n, r) && Sc(e, r, n[r]);
  return e;
}, im = u$({
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
])), Cc = (e, n, r) => new Promise((t, o) => {
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
}), { name: d$, n: c$ } = oe("auto-complete"), f$ = ["tabindex"];
function v$(e, n) {
  const r = x("var-input"), t = x("var-menu-option"), o = x("var-menu-select"), a = x("var-form-details");
  return b(), k("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocusin: n[2] || (n[2] = (...i) => e.focus && e.focus(...i)),
    onClick: n[3] || (n[3] = (...i) => e.handleClick && e.handleClick(...i))
  }, [U(o, {
    show: e.isShowMenuSelect,
    "onUpdate:show": n[1] || (n[1] = (i) => e.isShowMenuSelect = i),
    "same-width": "",
    "auto-complete-cover": "",
    scrollable: "",
    trigger: "manual",
    placement: "bottom",
    disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
    class: p(e.n("menu-select")),
    "popover-class": e.variant === "standard" ? e.n("--standard-menu-margin") : e.variant === "filled" ? e.n("--filled-menu-margin") : "",
    "onUpdate:modelValue": e.handleAutoComplete,
    onKeyEscape: e.handleKeyEscape
  }, {
    options: se(() => [L("div", { class: p(e.n("options")) }, [(b(!0), k(Ie, null, Ye(e.viewOptions, (i) => (b(), ke(t, {
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
    default: se(() => [U(r, Xe({ ref: "input" }, {
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
        fn: se(() => [F(e.$slots, "prepend-icon")]),
        key: "0"
      } : void 0,
      e.$slots["append-icon"] ? {
        name: "append-icon",
        fn: se(() => [F(e.$slots, "append-icon")]),
        key: "1"
      } : void 0,
      e.$slots["clear-icon"] ? {
        name: "clear-icon",
        fn: se(({ clear: i }) => [F(e.$slots, "clear-icon", { clear: i })]),
        key: "2"
      } : void 0,
      e.$slots["extra-message"] ? {
        name: "extra-message",
        fn: se(() => [F(e.$slots, "extra-message")]),
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
  ]), U(a, {
    "error-message": e.errorMessage,
    "extra-message": e.maxlengthText
  }, null, 8, ["error-message", "extra-message"])], 42, f$);
}
var lm = te({
  name: d$,
  components: {
    VarInput: Lt,
    VarMenuSelect: Yt,
    VarMenuOption: Ft,
    VarFormDetails: Hn
  },
  props: im,
  setup(e) {
    const n = P(), r = P(), t = P(!1), o = yn(e, "modelValue"), a = P([]), i = P(!1), l = S(() => {
      const { maxlength: I } = e;
      return I ? Or(o.value) ? `0 / ${I}` : `${String(o.value).length}/${I}` : "";
    }), { errorMessage: s, validateWithTrigger: u, validate: d, resetValidation: c } = xn(), { bindForm: f, form: v } = Kn();
    let g = !1;
    const h = {
      reset: m,
      resetValidation: c,
      validate: y
    };
    xv(() => n.value, "click", () => {
      if (g) {
        g = !1;
        return;
      }
      w();
    }), ge(() => [e.options, t.value], R), C(f, h), xe(() => window, "keydown", O);
    function m() {
      C(e["onUpdate:modelValue"], ""), c();
    }
    function y() {
      return d(e.rules, e.modelValue);
    }
    function $() {
      t.value || e.disabled || v?.disabled.value || (t.value = !0, r.value.focus(), C(e.onFocus), T("onFocus"));
    }
    function w() {
      t.value && (t.value = !1, i.value = !1, r.value.blur(), C(e.onBlur), T("onBlur"));
    }
    function z() {
      i.value || w();
    }
    function T(I) {
      Ne(() => {
        const { validateTrigger: j, rules: W, modelValue: G } = e;
        u(j, I, W, G);
      });
    }
    function O(I) {
      return Cc(this, null, function* () {
        var j;
        if (v?.disabled.value || v?.readonly.value || e.disabled || e.readonly || !t.value || !i.value) return;
        const { key: W } = I;
        if (W === "Tab") {
          Ze(I), n.value.focus(), i.value = !1;
          return;
        }
        if (![
          "ArrowUp",
          "ArrowDown",
          "Enter"
        ].includes(W)) {
          r.value.focus();
          return;
        }
        W === "Enter" && (yield qr(), (j = r.value) == null || j.focus());
      });
    }
    function R() {
      t.value && (i.value = M(o.value)), i.value && (a.value = e.options);
    }
    function H(I, j) {
      R(), C(e.onInput, I, j), T("onInput");
    }
    function A() {
      g = !0, R(), C(e.onClear, o.value), T("onClear");
    }
    function D(I) {
      e.disabled || v?.disabled.value || (C(e.onClick, I), T("onClick"));
    }
    function E(I) {
      C(e.onChange, I), T("onChange");
    }
    function B(I) {
      return Cc(this, null, function* () {
        var j;
        e.maxlength != null && (I = I.slice(0, Z(e.maxlength))), I !== o.value && (o.value = I, C(e.onChange, I), T("onChange")), yield qr(), (j = r.value) == null || j.focus();
      });
    }
    function N() {
      r.value.focus();
    }
    function M(I) {
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
      n: c$,
      handleInput: H,
      handleClear: A,
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
lm.render = v$;
var _a = lm;
ue(_a);
fe(_a, im);
var YA = _a, ls = _a;
var sm = 3600, um = sm * 24, p$ = um * 7, Ho = 1e3, Pc = 60 * Ho, m$ = sm * Ho, g$ = um * Ho, h$ = p$ * Ho, dm = "millisecond", ua = "second", da = "minute", ca = "hour";
var Oc = "week", rt = "month", b$ = "quarter", oo = "year", ao = "date";
var y$ = "Invalid Date", w$ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, k$ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $$ = {
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
}, ss = function(n, r, t) {
  var o = String(n);
  return !o || o.length >= r ? n : "" + Array(r + 1 - o.length).join(t) + n;
}, S$ = function(n) {
  var r = -n.utcOffset(), t = Math.abs(r), o = Math.floor(t / 60), a = t % 60;
  return (r <= 0 ? "+" : "-") + ss(o, 2, "0") + ":" + ss(a, 2, "0");
}, C$ = function e(n, r) {
  if (n.date() < r.date()) return -e(r, n);
  var t = (r.year() - n.year()) * 12 + (r.month() - n.month()), o = n.clone().add(t, rt), a = r - o < 0, i = n.clone().add(t + (a ? -1 : 1), rt);
  return +(-(t + (r - o) / (a ? o - i : i - o)) || 0);
}, P$ = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, O$ = function(n) {
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
}, z$ = function(n) {
  return n === void 0;
}, T$ = {
  s: ss,
  z: S$,
  m: C$,
  a: P$,
  p: O$,
  u: z$
}, fo = "en", wt = {};
wt[fo] = $$;
var cm = "$isDayjsObject", od = function(n) {
  return n instanceof ei || !!(n && n[cm]);
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
  if (od(n)) return n.clone();
  var t = typeof r == "object" ? r : {};
  return t.date = n, t.args = arguments, new ei(t);
}, E$ = function(n, r) {
  return ln(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, dn = T$;
dn.l = wa;
dn.i = od;
dn.w = E$;
var B$ = function(n) {
  var r = n.date, t = n.utc;
  if (r === null) return /* @__PURE__ */ new Date(NaN);
  if (dn.u(r)) return /* @__PURE__ */ new Date();
  if (r instanceof Date) return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var o = r.match(w$);
    if (o) {
      var a = o[2] - 1 || 0, i = (o[7] || "0").substring(0, 3);
      return t ? new Date(Date.UTC(o[1], a, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, i)) : new Date(o[1], a, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, i);
    }
  }
  return new Date(r);
}, ei = /* @__PURE__ */ (function() {
  function e(r) {
    this.$L = wa(r.locale, null, !0), this.parse(r), this.$x = this.$x || r.x || {}, this[cm] = !0;
  }
  var n = e.prototype;
  return n.parse = function(t) {
    this.$d = B$(t), this.init();
  }, n.init = function() {
    var t = this.$d;
    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
  }, n.$utils = function() {
    return dn;
  }, n.isValid = function() {
    return this.$d.toString() !== y$;
  }, n.isSame = function(t, o) {
    var a = ln(t);
    return this.startOf(o) <= a && a <= this.endOf(o);
  }, n.isAfter = function(t, o) {
    return ln(t) < this.startOf(o);
  }, n.isBefore = function(t, o) {
    return this.endOf(o) < ln(t);
  }, n.$g = function(t, o, a) {
    return dn.u(t) ? this[o] : this.set(a, t);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(t, o) {
    var a = this, i = dn.u(o) ? !0 : o, l = dn.p(t), s = function(y, $) {
      var w = dn.w(a.$u ? Date.UTC(a.$y, $, y) : new Date(a.$y, $, y), a);
      return i ? w : w.endOf("day");
    }, u = function(y, $) {
      return dn.w(a.toDate()[y].apply(a.toDate("s"), (i ? [
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
      case rt:
        return i ? s(1, c) : s(0, c + 1);
      case Oc:
        var g = this.$locale().weekStart || 0, h = (d < g ? d + 7 : d) - g;
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
    var a, i = dn.p(t), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a.day = l + "Date", a[ao] = l + "Date", a[rt] = l + "Month", a[oo] = l + "FullYear", a[ca] = l + "Hours", a[da] = l + "Minutes", a[ua] = l + "Seconds", a[dm] = l + "Milliseconds", a)[i], u = i === "day" ? this.$D + (o - this.$W) : o;
    if (i === "month" || i === "year") {
      var d = this.clone().set(ao, 1);
      d.$d[s](u), d.init(), this.$d = d.set(ao, Math.min(this.$D, d.daysInMonth())).$d;
    } else s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(t, o) {
    return this.clone().$set(t, o);
  }, n.get = function(t) {
    return this[dn.p(t)]();
  }, n.add = function(t, o) {
    var a = this, i;
    t = Number(t);
    var l = dn.p(o), s = function(f) {
      var v = ln(a);
      return dn.w(v.date(v.date() + Math.round(f * t)), a);
    };
    if (l === "month") return this.set(rt, this.$M + t);
    if (l === "year") return this.set(oo, this.$y + t);
    if (l === "day") return s(1);
    if (l === "week") return s(7);
    var u = (i = {}, i.minute = 6e4, i.hour = 36e5, i.second = 1e3, i)[l] || 1, d = this.$d.getTime() + t * u;
    return dn.w(d, this);
  }, n.subtract = function(t, o) {
    return this.add(t * -1, o);
  }, n.format = function(t) {
    var o = this, a = this.$locale();
    if (!this.isValid()) return a.invalidDate || "Invalid Date";
    var i = t || "YYYY-MM-DDTHH:mm:ssZ", l = dn.z(this), s = this.$H, u = this.$m, d = this.$M, c = a.weekdays, f = a.months, v = a.meridiem, g = function(w, z, T, O) {
      return w && (w[z] || w(o, i)) || T[z].slice(0, O);
    }, h = function(w) {
      return dn.s(s % 12 || 12, w, "0");
    }, m = v || function($, w, z) {
      var T = $ < 12 ? "AM" : "PM";
      return z ? T.toLowerCase() : T;
    }, y = function(w) {
      switch (w) {
        case "YY":
          return String(o.$y).slice(-2);
        case "YYYY":
          return dn.s(o.$y, 4, "0");
        case "M":
          return d + 1;
        case "MM":
          return dn.s(d + 1, 2, "0");
        case "MMM":
          return g(a.monthsShort, d, f, 3);
        case "MMMM":
          return g(f, d);
        case "D":
          return o.$D;
        case "DD":
          return dn.s(o.$D, 2, "0");
        case "d":
          return String(o.$W);
        case "dd":
          return g(a.weekdaysMin, o.$W, c, 2);
        case "ddd":
          return g(a.weekdaysShort, o.$W, c, 3);
        case "dddd":
          return c[o.$W];
        case "H":
          return String(s);
        case "HH":
          return dn.s(s, 2, "0");
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
          return dn.s(u, 2, "0");
        case "s":
          return String(o.$s);
        case "ss":
          return dn.s(o.$s, 2, "0");
        case "SSS":
          return dn.s(o.$ms, 3, "0");
        case "Z":
          return l;
        default:
          break;
      }
      return null;
    };
    return i.replace(k$, function($, w) {
      return w || y($) || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(t, o, a) {
    var i = this, l = dn.p(o), s = ln(t), u = (s.utcOffset() - this.utcOffset()) * Pc, d = this - s, c = function() {
      return dn.m(i, s);
    }, f;
    switch (l) {
      case oo:
        f = c() / 12;
        break;
      case rt:
        f = c();
        break;
      case b$:
        f = c() / 3;
        break;
      case Oc:
        f = (d - u) / h$;
        break;
      case "day":
        f = (d - u) / g$;
        break;
      case ca:
        f = d / m$;
        break;
      case da:
        f = d / Pc;
        break;
      case ua:
        f = d / Ho;
        break;
      default:
        f = d;
        break;
    }
    return a ? f : dn.a(f);
  }, n.daysInMonth = function() {
    return this.endOf(rt).$D;
  }, n.$locale = function() {
    return wt[this.$L];
  }, n.locale = function(t, o) {
    if (!t) return this.$L;
    var a = this.clone(), i = wa(t, o, !0);
    return i && (a.$L = i), a;
  }, n.clone = function() {
    return dn.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
})(), fm = ei.prototype;
ln.prototype = fm;
[
  ["$ms", dm],
  ["$s", ua],
  ["$m", da],
  ["$H", ca],
  ["$W", "day"],
  ["$M", rt],
  ["$y", oo],
  ["$D", ao]
].forEach(function(e) {
  fm[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ln.extend = function(e, n) {
  return e.$i || (e(n, ei, ln), e.$i = !0), ln;
};
ln.locale = wa;
ln.isDayjs = od;
ln.unix = function(e) {
  return ln(e * 1e3);
};
ln.en = wt[fo];
ln.Ls = wt;
ln.p = {};
var I$ = function(n) {
  return n.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(r, t, o) {
    return t || o.slice(1);
  });
}, D$ = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
}, M$ = function(n, r) {
  return n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t, o, a) {
    var i = a && a.toUpperCase();
    return o || r[a] || D$[a] || I$(r[i]);
  });
}, A$ = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, zc = /\d/, no = /\d\d/, N$ = /\d{3}/, R$ = /\d{4}/, Cr = /\d\d?/, V$ = /[+-]?\d+/, L$ = /[+-]\d\d:?(\d\d)?|Z/, ro = /\d*[^-_:/,()\s\d]+/, st = {}, vm = function(n) {
  return n = +n, n + (n > 68 ? 1900 : 2e3);
};
function F$(e) {
  if (!e || e === "Z") return 0;
  var n = e.match(/([+-]|\d\d)/g), r = +(n[1] * 60) + (+n[2] || 0);
  return r === 0 ? 0 : n[0] === "+" ? -r : r;
}
var qn = function(n) {
  return function(r) {
    this[n] = +r;
  };
}, Tc = [L$, function(e) {
  var n = this.zone || (this.zone = {});
  n.offset = F$(e);
}], Hl = function(n) {
  var r = st[n];
  return r && (r.indexOf ? r : r.s.concat(r.f));
}, Ec = function(n, r) {
  var t, o = st.meridiem;
  if (!o) t = n === (r ? "pm" : "PM");
  else for (var a = 1; a <= 24; a += 1) if (n.indexOf(o(a, 0, r)) > -1) {
    t = a > 12;
    break;
  }
  return t;
}, H$ = {
  A: [ro, function(e) {
    this.afternoon = Ec(e, !1);
  }],
  a: [ro, function(e) {
    this.afternoon = Ec(e, !0);
  }],
  Q: [zc, function(e) {
    this.month = (e - 1) * 3 + 1;
  }],
  S: [zc, function(e) {
    this.milliseconds = +e * 100;
  }],
  SS: [no, function(e) {
    this.milliseconds = +e * 10;
  }],
  SSS: [N$, function(e) {
    this.milliseconds = +e;
  }],
  s: [Cr, qn("seconds")],
  ss: [Cr, qn("seconds")],
  m: [Cr, qn("minutes")],
  mm: [Cr, qn("minutes")],
  H: [Cr, qn("hours")],
  h: [Cr, qn("hours")],
  HH: [Cr, qn("hours")],
  hh: [Cr, qn("hours")],
  D: [Cr, qn("day")],
  DD: [no, qn("day")],
  Do: [ro, function(e) {
    var n = st.ordinal, r = e.match(/\d+/);
    if (this.day = r[0], !!n)
      for (var t = 1; t <= 31; t += 1) n(t).replace(/\[|\]/g, "") === e && (this.day = t);
  }],
  w: [Cr, qn("week")],
  ww: [no, qn("week")],
  M: [Cr, qn("month")],
  MM: [no, qn("month")],
  MMM: [ro, function(e) {
    var n = Hl("months"), r = (Hl("monthsShort") || n.map(function(t) {
      return t.slice(0, 3);
    })).indexOf(e) + 1;
    if (r < 1) throw new Error();
    this.month = r % 12 || r;
  }],
  MMMM: [ro, function(e) {
    var n = Hl("months").indexOf(e) + 1;
    if (n < 1) throw new Error();
    this.month = n % 12 || n;
  }],
  Y: [V$, qn("year")],
  YY: [no, function(e) {
    this.year = vm(e);
  }],
  YYYY: [R$, qn("year")],
  Z: Tc,
  ZZ: Tc
};
function U$(e) {
  var n = e.afternoon;
  if (n !== void 0) {
    var r = e.hours;
    n ? r < 12 && (e.hours += 12) : r === 12 && (e.hours = 0), delete e.afternoon;
  }
}
function j$(e) {
  e = M$(e, st && st.formats);
  for (var n = e.match(A$), r = n.length, t = 0; t < r; t += 1) {
    var o = n[t], a = H$[o], i = a && a[0], l = a && a[1];
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
        var v = f.regex, g = f.parser, h = s.slice(c), m = v.exec(h)[0];
        g.call(u, m), s = s.replace(m, "");
      }
    }
    return U$(u), u;
  };
}
var Y$ = function(n, r, t, o) {
  try {
    if (["x", "X"].indexOf(r) > -1) return /* @__PURE__ */ new Date((r === "X" ? 1e3 : 1) * n);
    var a = j$(r)(n), i = a.year, l = a.month, s = a.day, u = a.hours, d = a.minutes, c = a.seconds, f = a.milliseconds, v = a.zone, g = a.week, h = /* @__PURE__ */ new Date(), m = s || (!i && !l ? h.getDate() : 1), y = i || h.getFullYear(), $ = 0;
    i && !l || ($ = l > 0 ? l - 1 : h.getMonth());
    var w = u || 0, z = d || 0, T = c || 0, O = f || 0;
    if (v) return new Date(Date.UTC(y, $, m, w, z, T, O + v.offset * 60 * 1e3));
    if (t) return new Date(Date.UTC(y, $, m, w, z, T, O));
    var R = new Date(y, $, m, w, z, T, O);
    return g && (R = o(R).week(g).toDate()), R;
  } catch {
    return /* @__PURE__ */ new Date("");
  }
}, K$ = (function(e, n, r) {
  r.p.customParseFormat = !0, e && e.parseTwoDigitYear && (vm = e.parseTwoDigitYear);
  var t = n.prototype, o = t.parse;
  t.parse = function(a) {
    var i = a.date, l = a.utc, s = a.args;
    this.$u = l;
    var u = s[1];
    if (typeof u == "string") {
      var d = s[2] === !0, c = s[3] === !0, f = d || c, v = s[2];
      c && (v = s[2]), st = this.$locale(), !d && v && (st = r.Ls[v]), this.$d = Y$(i, u, l, r), this.init(), v && v !== !0 && (this.$L = this.locale(v).$L), f && i != this.format(u) && (this.$d = /* @__PURE__ */ new Date("")), st = {};
    } else if (u instanceof Array)
      for (var g = u.length, h = 1; h <= g; h += 1) {
        s[1] = u[h - 1];
        var m = r.apply(this, s);
        if (m.isValid()) {
          this.$d = m.$d, this.$L = m.$L, this.init();
          break;
        }
        h === g && (this.$d = /* @__PURE__ */ new Date(""));
      }
    else o.call(this, a);
  };
}), W$ = (function(e, n) {
  n.prototype.isSameOrAfter = function(r, t) {
    return this.isSame(r, t) || this.isAfter(r, t);
  };
}), q$ = (function(e, n) {
  n.prototype.isSameOrBefore = function(r, t) {
    return this.isSame(r, t) || this.isBefore(r, t);
  };
}), Bc = (e) => Pn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, Ic = (e) => Pn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, X$ = (e) => {
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
}, Dc = !1, Uo = () => (Dc || (ln.extend(K$), ln.extend(W$), ln.extend(q$), Dc = !0), ln), us = (e) => e, Mc = (e) => e ** 3, pm = (e) => e < 0.5 ? Mc(e * 2) / 2 : 1 - Mc((1 - e) * 2) / 2, Gr = (e, n, r = "") => {
  if (e === void 0 && (e = ""), e.length >= n) return e;
  const t = n - e.length, o = Math.floor(t / r.length);
  return r.repeat(o) + r.slice(0, t % r.length) + e;
}, G$ = Object.defineProperty, Ac = Object.getOwnPropertySymbols, Z$ = Object.prototype.hasOwnProperty, J$ = Object.prototype.propertyIsEnumerable, Nc = (e, n, r) => n in e ? G$(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Q$ = (e, n) => {
  for (var r in n || (n = {})) Z$.call(n, r) && Nc(e, r, n[r]);
  if (Ac)
    for (var r of Ac(n)) J$.call(n, r) && Nc(e, r, n[r]);
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
}), x$ = "background-image", _$ = "lazy-loading", eS = "lazy-error", Rc = "lazy-attempt", nS = [
  "scroll",
  "wheel",
  "mousewheel",
  "resize",
  "animationend",
  "transitionend",
  "touchmove"
], ds = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Kt = [], ka = [], mm = X$(100), Mn = {
  loading: ds,
  error: ds,
  attempt: 3,
  throttleWait: 300,
  events: nS
}, ad = Fu(jo, Mn.throttleWait);
function ri(e, n) {
  e._lazy.arg === x$ ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function rS(e) {
  e._lazy.loading && ri(e, e._lazy.loading), jo();
}
function tS(e) {
  e._lazy.error && ri(e, e._lazy.error), e._lazy.state = "error", ld(e), jo();
}
function gm(e, n) {
  ri(e, n), e._lazy.state = "success", ld(e), jo();
}
function oS(e) {
  var n;
  ka.includes(e) || (ka.push(e), (n = Mn.events) == null || n.forEach((r) => {
    e.addEventListener(r, ad, { passive: !0 });
  }));
}
function aS() {
  ka.forEach((e) => {
    var n;
    (n = Mn.events) == null || n.forEach((r) => {
      e.removeEventListener(r, ad);
    });
  }), ka.length = 0;
}
function iS(e, n) {
  var r, t;
  const o = {
    loading: (r = e.getAttribute(_$)) != null ? r : Mn.loading,
    error: (t = e.getAttribute(eS)) != null ? t : Mn.error,
    attempt: e.getAttribute(Rc) ? Number(e.getAttribute(Rc)) : Mn.attempt
  };
  e._lazy = Q$({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, o), ri(e, ds), C(Mn.filter, e._lazy);
}
function lS(e, n) {
  const r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, mm.add(n), gm(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? tS(e) : hm(e);
  });
}
function hm(e) {
  if (e._lazy.attemptLock) return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (mm.has(n)) {
    gm(e, n), e._lazy.attemptLock = !1;
    return;
  }
  rS(e), lS(e, n);
}
function id(e) {
  return ni(this, null, function* () {
    yield Gn(), H0(e) && hm(e);
  });
}
function jo() {
  Kt.forEach((e) => id(e));
}
function sS(e) {
  return ni(this, null, function* () {
    !Kt.includes(e) && Kt.push(e), Fy(e).forEach(oS), yield id(e);
  });
}
function ld(e) {
  Rt(Kt, e), Kt.length === 0 && aS();
}
function uS(e, n) {
  const { src: r, arg: t } = e._lazy;
  return r !== n.value || t !== n.arg;
}
function bm(e, n) {
  return ni(this, null, function* () {
    iS(e, n), yield sS(e);
  });
}
function dS(e, n) {
  return ni(this, null, function* () {
    if (!uS(e, n)) {
      Kt.includes(e) && (yield id(e));
      return;
    }
    yield bm(e, n);
  });
}
function cS(e = {}) {
  const { events: n, loading: r, error: t, attempt: o, throttleWait: a, filter: i } = e;
  Mn.events = n ?? Mn.events, Mn.loading = r ?? Mn.loading, Mn.error = t ?? Mn.error, Mn.attempt = o ?? Mn.attempt, Mn.throttleWait = a ?? Mn.throttleWait, Mn.filter = i;
}
var ym = {
  mounted: bm,
  unmounted: ld,
  updated: dS,
  install(e, n) {
    cS(n), ad = Fu(jo, Mn.throttleWait), e.directive("lazy", this);
  }
}, KA = ym, wo = ym, wm = {
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
}, fS = (e) => [
  "mini",
  "small",
  "normal",
  "large"
].includes(e), { name: vS, n: pS, classes: mS } = oe("avatar"), gS = [
  "src",
  "alt",
  "lazy-loading",
  "lazy-error"
], hS = ["src", "alt"];
function bS(e, n) {
  const r = _e("lazy");
  return b(), k("div", {
    ref: "avatarElement",
    class: p(e.classes(e.n(), e.n("$--box"), [e.isInternalSize(e.size), e.n(`--${e.size}`)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")], [e.hoverable, e.n("--hoverable")])),
    style: Q({
      width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
      height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
      borderColor: e.borderColor,
      backgroundColor: e.color
    }),
    onClick: n[3] || (n[3] = (...t) => e.handleClick && e.handleClick(...t))
  }, [e.src ? (b(), k(Ie, { key: 0 }, [e.lazy ? Ke((b(), k("img", {
    key: 0,
    role: "img",
    class: p(e.n("image")),
    src: e.src,
    alt: e.alt,
    style: Q({ objectFit: e.fit }),
    "lazy-loading": e.loading,
    "lazy-error": e.error,
    onLoad: n[0] || (n[0] = (...t) => e.handleLoad && e.handleLoad(...t))
  }, null, 46, gS)), [[r, e.src]]) : (b(), k("img", {
    key: 1,
    role: "img",
    class: p(e.n("image")),
    src: e.src,
    alt: e.alt,
    style: Q({ objectFit: e.fit }),
    onLoad: n[1] || (n[1] = (...t) => e.handleLoad && e.handleLoad(...t)),
    onError: n[2] || (n[2] = (...t) => e.handleError && e.handleError(...t))
  }, null, 46, hS))], 64)) : (b(), k("div", {
    key: 1,
    ref: "textElement",
    class: p(e.n("text")),
    style: Q({ transform: `scale(${e.scale})` })
  }, [F(e.$slots, "default")], 6))], 6);
}
var km = te({
  name: vS,
  directives: { Lazy: wo },
  props: wm,
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
      d ? (u._lazy.state === "success" && C(c, s), u._lazy.state === "error" && C(f, s)) : C(c, s);
    }
    function i(s) {
      C(e.onError, s);
    }
    function l(s) {
      C(e.onClick, s);
    }
    return {
      avatarElement: n,
      textElement: r,
      scale: t,
      n: pS,
      classes: mS,
      isInternalSize: fS,
      toSizeUnit: Te,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
km.render = bS;
var ti = km;
ue(ti);
fe(ti, wm);
var WA = ti, cs = ti, $m = {
  offset: [Number, String],
  vertical: Boolean
}, { name: yS, n: wS, classes: kS } = oe("avatar-group");
function $S(e, n) {
  return b(), k("div", {
    class: p(e.classes(e.n(), [
      e.vertical,
      e.n("--column"),
      e.n("--row")
    ])),
    style: Q(e.rootStyles)
  }, [F(e.$slots, "default")], 6);
}
var Sm = te({
  name: yS,
  props: $m,
  setup(e) {
    return {
      rootStyles: S(() => e.offset == null ? {} : { "--avatar-group-offset": Te(e.offset) }),
      n: wS,
      classes: kS
    };
  }
});
Sm.render = $S;
var oi = Sm;
ue(oi);
fe(oi, $m);
var qA = oi, fs = oi, jr = {
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
}, { name: SS, n: CS, classes: PS } = oe("loading");
function OS(e, n) {
  return b(), k("div", { class: p(e.n()) }, [e.$slots.default ? (b(), k("div", {
    key: 0,
    class: p(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
  }, [F(e.$slots, "default"), e.loading ? (b(), k("div", {
    key: 0,
    class: p(e.n("content-mask"))
  }, null, 2)) : X("v-if", !0)], 2)) : X("v-if", !0), e.isShow ? (b(), k("div", {
    key: 1,
    class: p(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
  }, [
    e.type === "circle" ? (b(), k("div", {
      key: 0,
      class: p(e.n("circle"))
    }, [L("span", {
      class: p(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
      style: Q({
        width: e.multiplySizeUnit(e.radius, 2),
        height: e.multiplySizeUnit(e.radius, 2),
        color: e.color
      })
    }, [...n[0] || (n[0] = [L("svg", { viewBox: "25 25 50 50" }, [L("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })], -1)])], 6)], 2)) : X("v-if", !0),
    (b(!0), k(Ie, null, Ye(e.loadingTypeDict, (r, t) => (b(), k(Ie, { key: t }, [e.type === t ? (b(), k("div", {
      key: 0,
      class: p(e.classes(e.n(t), e.n(`${t}--${e.size}`)))
    }, [(b(!0), k(Ie, null, Ye(r, (o) => (b(), k("div", {
      key: o + t,
      style: Q({ backgroundColor: e.color }),
      class: p(e.classes(e.n(`${t}-item`), e.n(`${t}-item--${e.size}`)))
    }, null, 6))), 128))], 2)) : X("v-if", !0)], 64))), 128)),
    e.$slots.description || e.description ? (b(), k("div", {
      key: 1,
      class: p(e.classes(e.n("description"), e.n(`description--${e.size}`))),
      style: Q({ color: e.color })
    }, [F(e.$slots, "description", {}, () => [Le(ve(e.description), 1)])], 6)) : X("v-if", !0)
  ], 2)) : X("v-if", !0)], 2);
}
var Cm = te({
  name: SS,
  props: jr,
  setup(e, { slots: n }) {
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: S(() => C(n.default) ? e.loading : !0),
      n: CS,
      classes: PS,
      multiplySizeUnit: nr
    };
  }
});
Cm.render = OS;
var ai = Cm;
ue(ai);
fe(ai, jr);
var XA = ai, St = ai, zS = Object.defineProperty, TS = Object.defineProperties, ES = Object.getOwnPropertyDescriptors, Vc = Object.getOwnPropertySymbols, BS = Object.prototype.hasOwnProperty, IS = Object.prototype.propertyIsEnumerable, Lc = (e, n, r) => n in e ? zS(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Fc = (e, n) => {
  for (var r in n || (n = {})) BS.call(n, r) && Lc(e, r, n[r]);
  if (Vc)
    for (var r of Vc(n)) IS.call(n, r) && Lc(e, r, n[r]);
  return e;
}, Hc = (e, n) => TS(e, ES(n)), Pm = {
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
  loadingType: Fe(jr, "type"),
  loadingSize: Hc(Fc({}, Fe(jr, "size")), { default: void 0 }),
  loadingColor: Hc(Fc({}, Fe(jr, "color")), { default: "currentColor" }),
  onClick: V(),
  onTouchstart: V()
}, Om = /* @__PURE__ */ Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function DS() {
  const { bindChildren: e, childProviders: n, length: r } = In(Om);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function MS() {
  const { bindParent: e, parentProvider: n, index: r } = Bn(Om);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var { name: AS, n: NS, classes: RS } = oe("button"), VS = [
  "tabindex",
  "type",
  "disabled"
];
function LS(e, n) {
  const r = x("var-loading"), t = x("var-hover-overlay"), o = _e("ripple"), a = _e("hover");
  return Ke((b(), k("button", {
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.states.size}`), [
      e.block,
      `${e.n("$--flex")} ${e.n("--block")}`,
      e.n("$--inline-flex")
    ], [!e.states.text, e.states.elevation], [!e.states.iconContainer && !e.states.text, e.n(`--${e.states.type}`)], [e.states.text, `${e.n("--text")} ${e.n(`--text-${e.states.type}`)}`], [e.states.iconContainer, e.n(`--icon-container-${e.states.type}`)], [e.states.filledDefault, e.n("--filled-default")], [e.states.elevationDisabled, e.n("--elevation-disabled")], [e.round, e.n("--round")], [e.fab, e.n("--fab")], [e.states.outline, e.n("--outline")], [e.loading || e.pending, e.n("--loading")], [e.disabled, e.n("--disabled")], [e.states.text && e.disabled, e.n("--text-disabled")])),
    tabindex: e.focusable ? void 0 : "-1",
    style: Q({
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
    e.loading || e.pending ? (b(), ke(r, {
      key: 0,
      class: p(e.n("loading")),
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
    ])) : X("v-if", !0),
    L("div", { class: p(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")])) }, [F(e.$slots, "default")], 2),
    U(t, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, VS)), [[o, { disabled: e.disabled || !e.ripple || e.loading || e.pending }], [
    a,
    e.handleHovering,
    "desktop"
  ]]);
}
var zm = te({
  name: AS,
  components: {
    VarLoading: St,
    VarHoverOverlay: Zn
  },
  directives: {
    Ripple: vn,
    Hover: jn
  },
  props: Pm,
  setup(e) {
    const n = P(!1), r = P(!1), { buttonGroup: t } = MS(), { hovering: o, handleHovering: a } = ur(), i = S(() => {
      var c, f, v, g, h, m, y;
      if (!t) return {
        elevation: e.tonal ? "" : On(e.elevation, 2),
        type: (c = e.type) != null ? c : "default",
        size: (f = e.size) != null ? f : "normal",
        color: e.color,
        text: e.text,
        textColor: e.textColor,
        outline: e.outline,
        iconContainer: e.tonal || e.iconContainer,
        elevationDisabled: e.tonal || e.elevation === !1 || Z(e.elevation) === 0,
        filledDefault: (e.type == null || e.type === "default") && (e.elevation === !1 || Z(e.elevation) === 0) && !e.text && !e.outline && !e.tonal && !e.iconContainer
      };
      const { type: $, size: w, color: z, textColor: T, mode: O, elevation: R } = t;
      return {
        elevation: "",
        type: (v = e.type) != null ? v : $.value,
        size: (g = e.size) != null ? g : w.value,
        color: (h = e.color) != null ? h : z.value,
        textColor: (m = e.textColor) != null ? m : T.value,
        text: O.value === "text" || O.value === "outline",
        outline: O.value === "outline",
        iconContainer: O.value === "tonal" || O.value === "icon-container",
        elevationDisabled: O.value === "tonal",
        filledDefault: O.value === "normal" && ((y = e.type) != null ? y : $.value) === "default" && (R.value === !1 || Z(R.value) === 0)
      };
    });
    function l(c) {
      e.autoLoading && (r.value = !0, Promise.all(Wr(c)).then(() => {
        r.value = !1;
      }).catch(() => {
        r.value = !1;
      }));
    }
    function s(c) {
      const { loading: f, disabled: v, onClick: g } = e;
      !g || f || v || r.value || l(C(g, c));
    }
    function u(c) {
      const { loading: f, disabled: v, onTouchstart: g } = e;
      !g || f || v || r.value || l(C(g, c));
    }
    function d() {
      e.focusable && (n.value = !0);
    }
    return {
      pending: r,
      states: i,
      hovering: o,
      isFocusing: n,
      n: NS,
      classes: RS,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      handleFocus: d
    };
  }
});
zm.render = LS;
var ii = zm;
ue(ii);
fe(ii, Pm);
var GA = ii, Jn = ii, Tm = {
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
  size: [Number, String],
  target: [String, Object],
  onClick: V()
}, { name: FS, n: HS, classes: US } = oe("back-top");
function jS(e, n) {
  const r = x("var-icon"), t = x("var-button");
  return b(), ke(Hr, {
    to: "body",
    disabled: e.disabled
  }, [L("div", Xe({
    ref: "backTopEl",
    class: e.classes(e.n(), [e.show, e.n("--active")]),
    style: {
      right: e.toSizeUnit(e.right),
      bottom: e.toSizeUnit(e.bottom),
      "--back-top-button-size": e.toSizeUnit(e.size)
    }
  }, e.$attrs, { onClick: n[0] || (n[0] = Nn((...o) => e.handleClick && e.handleClick(...o), ["stop"])) }), [F(e.$slots, "default", {}, () => [U(t, {
    elevation: e.elevation,
    type: "primary",
    "var-back-top-cover": ""
  }, {
    default: se(() => [U(r, { name: "chevron-up" })]),
    _: 1
  }, 8, ["elevation"])])], 16)], 8, ["disabled"]);
}
var Em = te({
  name: FS,
  components: {
    VarButton: Jn,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: Tm,
  setup(e) {
    const n = P(!1), r = P(null), t = P(!0);
    let o;
    const a = Fu(() => {
      i();
    }, 200);
    Tr(() => {
      s(), u(), i(), t.value = !1;
    }), vt(u), Gt(d);
    function i() {
      n.value = kt(o) >= fn(e.visibilityHeight);
    }
    function l(c) {
      C(e.onClick, c);
      const f = Lu(o);
      go(o, {
        left: f,
        duration: e.duration,
        animation: pm
      });
    }
    function s() {
      o = e.target ? Pp(e.target, "BackTop") : dt(r.value);
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
      toSizeUnit: Te,
      n: HS,
      classes: US,
      handleClick: l
    };
  }
});
Em.render = jS;
var li = Em;
ue(li);
fe(li, Tm);
var ZA = li, vs = li, Bm = {
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
}, YS = Object.defineProperty, Uc = Object.getOwnPropertySymbols, KS = Object.prototype.hasOwnProperty, WS = Object.prototype.propertyIsEnumerable, jc = (e, n, r) => n in e ? YS(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, qS = (e, n) => {
  for (var r in n || (n = {})) KS.call(n, r) && jc(e, r, n[r]);
  if (Uc)
    for (var r of Uc(n)) WS.call(n, r) && jc(e, r, n[r]);
  return e;
}, { name: XS, n: GS, classes: ZS } = oe("badge"), JS = { key: 0 };
function QS(e, n) {
  const r = x("var-icon");
  return b(), k("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [F(e.$slots, "default"), U(bn, {
    name: e.n("$-badge-fade"),
    persisted: ""
  }, {
    default: se(() => [Ke(L("span", Xe({
      class: e.classes(e.n("content"), e.n(`--${e.type}`), [
        e.$slots.default,
        e.n(`--${e.position}`),
        e.n("--offset")
      ], [e.dot, e.n("--dot")], [e.icon || e.$slots.icon, e.n("--icon")]),
      style: qS({ background: e.color }, e.offsetStyle)
    }, e.$attrs), [e.$slots.icon || e.icon ? (b(), k("span", {
      key: 0,
      class: p(e.n("icon"))
    }, [F(e.$slots, "icon", {}, () => [U(r, {
      name: e.icon,
      namespace: e.namespace
    }, null, 8, ["name", "namespace"])])], 2)) : X("v-if", !0), F(e.$slots, "value", {}, () => [!e.$slots.icon && !e.icon && !e.dot ? (b(), k("span", JS, ve(e.value), 1)) : X("v-if", !0)])], 16), [[yr, !e.hidden]])]),
    _: 3
  }, 8, ["name"])], 2);
}
var Im = te({
  name: XS,
  components: { VarIcon: Je },
  inheritAttrs: !1,
  props: Bm,
  setup(e) {
    return {
      value: S(() => {
        const { value: n, maxValue: r } = e;
        return n != null && r != null && Z(n) > Z(r) ? `${r}+` : n;
      }),
      offsetStyle: S(() => ({
        "--badge-offset-y": Te(e.offsetY),
        "--badge-offset-x": Te(e.offsetX)
      })),
      n: GS,
      classes: ZS
    };
  }
});
Im.render = QS;
var si = Im;
ue(si);
fe(si, Bm);
var JA = si, ko = si, Dm = {
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
}, Mm = /* @__PURE__ */ Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function xS() {
  const { childProviders: e, length: n, bindChildren: r } = In(Mm);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
  };
}
var _S = Object.defineProperty, Yc = Object.getOwnPropertySymbols, eC = Object.prototype.hasOwnProperty, nC = Object.prototype.propertyIsEnumerable, Kc = (e, n, r) => n in e ? _S(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Wc = (e, n) => {
  for (var r in n || (n = {})) eC.call(n, r) && Kc(e, r, n[r]);
  if (Yc)
    for (var r of Yc(n)) nC.call(n, r) && Kc(e, r, n[r]);
  return e;
}, { name: rC, n: tC, classes: oC } = oe("bottom-navigation"), { n: ui } = oe("bottom-navigation-item"), qc = ui("--right-half-space"), Xc = ui("--left-half-space"), Gc = ui("--right-space"), aC = { type: "primary" };
function iC(e, n) {
  const r = x("var-button");
  return b(), k(Ie, null, [L("div", Xe({
    ref: "bottomNavigationDom",
    class: e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.bordered || e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")], [e.variant, e.n("--variant")]),
    style: `z-index:${e.zIndex}`
  }, e.$attrs), [F(e.$slots, "default"), e.$slots.fab ? (b(), ke(r, Xe({
    key: 0,
    class: e.classes(e.n("fab"), [
      e.length % 2,
      e.n("--fab-right"),
      e.n("--fab-center")
    ]),
    "var-bottom-navigation__fab": ""
  }, e.fabProps, { onClick: e.handleFabClick }), {
    default: se(() => [F(e.$slots, "fab")]),
    _: 3
  }, 16, ["class", "onClick"])) : X("v-if", !0)], 16), e.fixed && e.placeholder ? (b(), k("div", {
    key: 0,
    class: p(e.n("placeholder")),
    style: Q({ height: e.placeholderHeight })
  }, null, 6)) : X("v-if", !0)], 64);
}
var Am = te({
  name: rC,
  components: { VarButton: Jn },
  props: Dm,
  setup(e, { slots: n }) {
    const r = P(null), t = S(() => e.animated), o = S(() => e.active), a = S(() => e.activeColor), i = S(() => e.inactiveColor), l = S(() => e.variant), s = P(), u = P({}), { length: d, bottomNavigationItems: c, bindBottomNavigationItem: f } = xS();
    f({
      animated: t,
      active: o,
      activeColor: a,
      inactiveColor: i,
      variant: l,
      onToggle: y
    }), ge(() => d.value, v), ge(() => e.fabProps, (D) => {
      u.value = Wc(Wc({}, aC), D);
    }, {
      immediate: !0,
      deep: !0
    }), wr(A), En(() => {
      A(), n.fab && T(d.value);
    }), qt(() => {
      z(), n.fab && T(d.value);
    });
    function v() {
      d.value === 0 || g() || h() || m();
    }
    function g() {
      return c.find(({ name: D }) => o.value === D.value);
    }
    function h() {
      return c.find(({ index: D }) => o.value === D.value);
    }
    function m() {
      tr(o.value) && (o.value < 0 ? C(e["onUpdate:active"], 0) : o.value > d.value - 1 && C(e["onUpdate:active"], d.value - 1));
    }
    function y(D) {
      o.value !== D && (e.onBeforeChange ? $(D) : w(D));
    }
    function $(D) {
      const E = Wr(C(e.onBeforeChange, D));
      Promise.all(E).then((B) => {
        B.every(Boolean) && w(D);
      });
    }
    function w(D) {
      C(e["onUpdate:active"], D), C(e.onChange, D);
    }
    function z() {
      R().forEach((D) => {
        D.classList.remove(qc, Xc, Gc);
      });
    }
    function T(D) {
      const E = R(), B = E.length, N = D % 2 === 0;
      E.forEach((M, I) => {
        O(N, M, I, B);
      });
    }
    function O(D, E, B, N) {
      const M = B === N - 1;
      if (!D && M) {
        E.classList.add(Gc);
        return;
      }
      const I = B === N / 2 - 1, j = B === N / 2;
      I ? E.classList.add(qc) : j && E.classList.add(Xc);
    }
    function R() {
      return Array.from(r.value.querySelectorAll(`.${ui()}`));
    }
    function H() {
      C(e.onFabClick);
    }
    function A() {
      if (!e.fixed || !e.placeholder) return;
      const { height: D } = kn(r.value);
      s.value = Te(D);
    }
    return {
      length: d,
      bottomNavigationDom: r,
      fabProps: u,
      placeholderHeight: s,
      n: tC,
      classes: oC,
      handleFabClick: H
    };
  }
});
Am.render = iC;
var di = Am;
ue(di);
fe(di, Dm);
var QA = di, ps = di, Nm = {
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
function lC() {
  const { parentProvider: e, index: n, bindParent: r } = Bn(Mm);
  return or(!!r, "BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var { name: sC, n: uC, classes: dC } = oe("bottom-navigation-item"), cC = {
  type: "danger",
  dot: !0
};
function fC(e, n) {
  const r = x("var-icon"), t = x("var-badge"), o = _e("ripple");
  return Ke((b(), k("button", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")], [e.animated, e.n("--animated")])),
    style: Q({ color: e.isActive ? e.activeColor : e.inactiveColor }),
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [L("div", { class: p(e.classes(e.n("icon-container"), [e.variant, e.n("--variant-icon-container")], [e.isActive && e.variant, e.n("--variant-active")])) }, [e.badge ? (b(), ke(t, Xe({ key: 0 }, e.badgeProps, {
    class: e.n("badge"),
    "var-bottom-navigation-item-cover": ""
  }), {
    default: se(() => [L("span", { class: p(e.n("icon")) }, [F(e.$slots, "icon", { active: e.isActive }, () => [e.icon ? (b(), ke(r, {
      key: 0,
      name: e.icon,
      namespace: e.namespace
    }, null, 8, ["name", "namespace"])) : X("v-if", !0)])], 2)]),
    _: 3
  }, 16, ["class"])) : e.$slots.icon || e.icon ? (b(), k("span", {
    key: 1,
    class: p(e.n("icon"))
  }, [F(e.$slots, "icon", { active: e.isActive }, () => [e.icon ? (b(), ke(r, {
    key: 0,
    name: e.icon,
    namespace: e.namespace
  }, null, 8, ["name", "namespace"])) : X("v-if", !0)])], 2)) : X("v-if", !0)], 2), L("span", { class: p(e.n("label")) }, [F(e.$slots, "default", {}, () => [Le(ve(e.label), 1)])], 2)], 6)), [[o]]);
}
var Rm = te({
  name: sC,
  components: {
    VarBadge: ko,
    VarIcon: Je
  },
  directives: { Ripple: vn },
  props: Nm,
  setup(e) {
    const { index: n, bottomNavigation: r, bindBottomNavigation: t } = lC(), o = S(() => e.name), a = S(() => [o.value, n.value].includes(s.value)), i = S(() => e.badge === !0 ? cC : e.badge), { animated: l, active: s, activeColor: u, inactiveColor: d, variant: c } = r;
    t({
      name: o,
      index: n
    });
    function f() {
      var v;
      const g = (v = o.value) != null ? v : n.value;
      C(e.onClick, g), C(r.onToggle, g);
    }
    return {
      animated: l,
      activeColor: u,
      inactiveColor: d,
      badgeProps: i,
      isActive: a,
      variant: c,
      n: uC,
      classes: dC,
      handleClick: f
    };
  }
});
Rm.render = fC;
var ci = Rm;
ue(ci);
fe(ci, Nm);
var xA = ci, ms = ci, Vm = {
  separator: String,
  onClick: V()
}, Lm = /* @__PURE__ */ Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function vC() {
  const { childProviders: e, bindChildren: n, length: r } = In(Lm);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function pC() {
  const { parentProvider: e, bindParent: n, index: r } = Bn(Lm);
  return or(!!n, "Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var { name: mC, n: gC, classes: hC } = oe("breadcrumb");
function bC(e, n) {
  return b(), k("div", { class: p(e.n()) }, [L("div", {
    class: p(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
    onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [F(e.$slots, "default")], 2), e.isLast ? X("v-if", !0) : F(e.$slots, "separator", { key: 0 }, () => {
    var r;
    return [L("div", {
      class: p(e.n("separator")),
      "aria-hidden": "true"
    }, ve((r = e.separator) != null ? r : e.parentSeparator), 3)];
  })], 2);
}
var Fm = te({
  name: mC,
  props: Vm,
  setup(e) {
    const { index: n, breadcrumb: r, bindBreadcrumb: t } = pC(), o = S(() => n.value === r.length.value - 1), a = S(() => r.separator.value);
    t(null);
    function i(l) {
      o.value || C(e.onClick, l);
    }
    return {
      n: gC,
      classes: hC,
      isLast: o,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Fm.render = bC;
var fi = Fm;
ue(fi);
fe(fi, Vm);
var _A = fi, gs = fi, Hm = { separator: {
  type: String,
  default: "/"
} }, { name: yC, n: wC } = oe("breadcrumbs");
function kC(e, n) {
  return b(), k("div", {
    class: p(e.n()),
    role: "navigation",
    "aria-label": "Breadcrumbs"
  }, [F(e.$slots, "default")], 2);
}
var Um = te({
  name: yC,
  props: Hm,
  setup(e) {
    const n = S(() => e.separator), { bindBreadcrumbList: r, length: t } = vC();
    return r({
      length: t,
      separator: n
    }), { n: wC };
  }
});
Um.render = kC;
var vi = Um;
ue(vi);
fe(vi, Hm);
var eN = vi, hs = vi, jm = {
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
}, { name: $C, n: SC, classes: CC } = oe("button-group");
function PC(e, n) {
  return b(), k("div", { class: p(e.classes(e.n(), e.n("$--box"), [e.mode, `${e.n(`--mode-${e.mode}`)}`], [
    e.vertical,
    e.n("--vertical"),
    e.n("--horizontal")
  ], [e.mode === "normal", e.formatElevation(e.elevation, 2)])) }, [F(e.$slots, "default")], 2);
}
var Ym = te({
  name: $C,
  props: jm,
  setup(e) {
    const { bindButtons: n } = DS();
    return n({
      elevation: S(() => e.elevation),
      type: S(() => e.type),
      size: S(() => e.size),
      color: S(() => e.color),
      textColor: S(() => e.textColor),
      mode: S(() => e.mode)
    }), {
      n: SC,
      classes: CC,
      formatElevation: On
    };
  }
});
Ym.render = PC;
var pi = Ym;
ue(pi);
fe(pi, jm);
var nN = pi, bs = pi, Km = {
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
}, OC = (e, n, r) => new Promise((t, o) => {
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
}), { name: zC, n: TC, classes: EC } = oe("card"), BC = 500, IC = ["src", "alt"];
function DC(e, n) {
  const r = x("var-hover-overlay"), t = x("var-icon"), o = x("var-button"), a = _e("ripple"), i = _e("hover");
  return Ke((b(), k("div", {
    ref: "card",
    class: p(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.variant === "outlined" || e.outline, e.n("--outline")], [e.variant === "filled", e.n("--filled")], [e.surfaceLow, e.n("--surface-low")], [!e.normalizedHoverable.disabled, e.n("--cursor")], [e.variant === "standard" || e.outline, e.formatElevation(e.elevation, 1)])),
    style: Q({ zIndex: e.floated ? e.zIndex : void 0 }),
    onClick: n[0] || (n[0] = (...l) => e.handleClick && e.handleClick(...l))
  }, [L("div", {
    ref: "cardFloater",
    class: p(e.n("floater")),
    style: Q({
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
    F(e.$slots, "image", {}, () => [e.src ? (b(), k("img", {
      key: 0,
      class: p(e.n("image")),
      style: Q({
        objectFit: e.fit,
        height: e.toSizeUnit(e.imageHeight),
        width: e.toSizeUnit(e.imageWidth)
      }),
      src: e.src,
      alt: e.alt
    }, null, 14, IC)) : X("v-if", !0)]),
    L("div", { class: p(e.n("container")) }, [
      F(e.$slots, "title", { slotClass: e.n("title") }, () => [e.title ? (b(), k("div", {
        key: 0,
        class: p(e.n("title"))
      }, ve(e.title), 3)) : X("v-if", !0)]),
      F(e.$slots, "subtitle", { slotClass: e.n("subtitle") }, () => [e.subtitle ? (b(), k("div", {
        key: 0,
        class: p(e.n("subtitle"))
      }, ve(e.subtitle), 3)) : X("v-if", !0)]),
      e.$slots.default ? (b(), k("div", {
        key: 0,
        class: p(e.n("content"))
      }, [F(e.$slots, "default")], 2)) : X("v-if", !0),
      F(e.$slots, "description", { slotClass: e.n("description") }, () => [e.description ? (b(), k("div", {
        key: 0,
        class: p(e.n("description"))
      }, ve(e.description), 3)) : X("v-if", !0)]),
      e.$slots.extra ? (b(), k("div", {
        key: 1,
        class: p(e.n("footer"))
      }, [F(e.$slots, "extra")], 2)) : X("v-if", !0),
      e.$slots["floating-content"] && !e.isRow ? (b(), k("div", {
        key: 2,
        class: p(e.n("floating-content")),
        style: Q({
          height: e.contentHeight,
          opacity: e.opacity,
          transition: `opacity ${e.floatingDuration * 2}ms`
        })
      }, [F(e.$slots, "floating-content")], 6)) : X("v-if", !0)
    ], 2),
    U(r, {
      hovering: !e.normalizedHoverable.disabled && !e.floated ? e.hovering : !1,
      color: e.normalizedHoverable.color
    }, null, 8, ["hovering", "color"]),
    e.showFloatingButtons ? (b(), k("div", {
      key: 0,
      class: p(e.classes(e.n("floating-buttons"), e.n("$--box"))),
      style: Q({
        zIndex: e.zIndex,
        opacity: e.opacity,
        transition: `opacity ${e.floatingDuration * 2}ms`
      })
    }, [F(e.$slots, "close-button", {}, () => [U(o, {
      "var-card-cover": "",
      class: p(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
      onClick: Nn(e.close, ["stop"])
    }, {
      default: se(() => [U(t, {
        "var-card-cover": "",
        name: "window-close",
        class: p(e.n("close-button-icon"))
      }, null, 8, ["class"])]),
      _: 1
    }, 8, ["class", "onClick"])])], 6)) : X("v-if", !0)
  ], 6), L("div", {
    class: p(e.n("holder")),
    style: Q({
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
var Wm = te({
  name: zC,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarIcon: Je,
    VarButton: Jn,
    VarHoverOverlay: Zn
  },
  props: Km,
  setup(e) {
    const n = P(null), r = P(null), t = P("auto"), o = P("auto"), a = P("100%"), i = P("100%"), l = P("auto"), s = P("auto"), u = P(void 0), d = P("hidden"), c = P("0px"), f = P("0"), v = S(() => e.layout === "row"), g = S(() => e.surface === "low" && e.variant !== "filled"), { hovering: h, handleHovering: m } = ur(), y = P(!1), $ = P(!1), { zIndex: w } = Ao(() => e.floating, 1), z = S(() => B(e.ripple)), T = S(() => N(e.hoverable));
    let O = "auto", R = "auto", H = null;
    const A = P(null);
    let D = !1;
    Mo(() => e.floating, () => !v.value), ge(() => e.floating, (W) => {
      v.value || Ne(() => {
        W ? (D = !0, E()) : D && M();
      });
    }, { immediate: !0 });
    function E() {
      clearTimeout(A.value), clearTimeout(H), A.value = null, A.value = setTimeout(() => OC(null, null, function* () {
        const { width: W, height: G, left: ce, top: me } = kn(n.value);
        t.value = Te(W), o.value = Te(G), a.value = t.value, i.value = o.value, l.value = Te(me), s.value = Te(ce), u.value = "fixed", O = l.value, R = s.value, y.value = !0, yield Gn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", c.value = "auto", f.value = "1", d.value = "auto", $.value = !0;
      }), z.value.disabled ? 0 : BC);
    }
    function B(W) {
      return Sn(W) ? {
        disabled: !!W.disabled,
        color: W.color
      } : {
        disabled: !W,
        color: void 0
      };
    }
    function N(W) {
      return Sn(W) ? {
        disabled: !!W.disabled,
        color: W.color
      } : {
        disabled: !W,
        color: void 0
      };
    }
    function M() {
      clearTimeout(H), clearTimeout(A.value), A.value = null, a.value = t.value, i.value = o.value, l.value = O, s.value = R, c.value = "0px", f.value = "0", y.value = !1, H = setTimeout(() => {
        t.value = "auto", o.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", O = "auto", R = "auto", d.value = "hidden", u.value = void 0, $.value = !1;
      }, e.floatingDuration);
    }
    function I() {
      C(e["onUpdate:floating"], !1);
    }
    function j(W) {
      C(e.onClick, W);
    }
    return {
      card: n,
      cardFloater: r,
      holderWidth: t,
      holderHeight: o,
      floater: A,
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
      surfaceLow: g,
      normalizedRipple: z,
      normalizedHoverable: T,
      hovering: h,
      handleHovering: m,
      showFloatingButtons: y,
      floated: $,
      n: TC,
      classes: EC,
      toSizeUnit: Te,
      close: I,
      formatElevation: On,
      handleClick: j
    };
  }
});
Wm.render = DC;
var mi = Wm;
ue(mi);
fe(mi, Km);
var rN = mi, ys = mi, qm = {
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
}, { name: MC, n: AC, classes: NC } = oe("cell");
function RC(e, n) {
  const r = x("var-icon"), t = _e("ripple");
  return Ke((b(), k("div", {
    class: p(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
    style: Q(e.borderOffsetStyles),
    onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
  }, [
    F(e.$slots, "icon", {}, () => [e.icon ? (b(), k("div", {
      key: 0,
      class: p(e.classes(e.n("icon"), e.iconClass))
    }, [U(r, {
      name: e.icon,
      namespace: e.namespace
    }, null, 8, ["name", "namespace"])], 2)) : X("v-if", !0)]),
    L("div", { class: p(e.n("content")) }, [F(e.$slots, "default", {}, () => [e.title ? (b(), k("div", {
      key: 0,
      class: p(e.classes(e.n("title"), e.titleClass))
    }, ve(e.title), 3)) : X("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (b(), k("div", {
      key: 0,
      class: p(e.classes(e.n("description"), e.descriptionClass))
    }, ve(e.description), 3)) : X("v-if", !0)])], 2),
    e.$slots.extra ? (b(), k("div", {
      key: 0,
      class: p(e.classes(e.n("extra"), e.extraClass))
    }, [F(e.$slots, "extra")], 2)) : X("v-if", !0)
  ], 6)), [[t, { disabled: !e.ripple }]]);
}
var Xm = te({
  name: MC,
  components: { VarIcon: Je },
  directives: { Ripple: vn },
  props: qm,
  setup(e) {
    const n = S(() => e.borderOffset == null ? {} : {
      "--cell-border-left": Te(e.borderOffset),
      "--cell-border-right": Te(e.borderOffset)
    });
    function r(t) {
      C(e.onClick, t);
    }
    return {
      borderOffsetStyles: n,
      n: AC,
      classes: NC,
      toSizeUnit: Te,
      handleClick: r
    };
  }
});
Xm.render = RC;
var gi = Xm;
ue(gi);
fe(gi, qm);
var tN = gi, ws = gi, Gm = {
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
}, { name: VC, n: LC, classes: FC } = oe("checkbox-group");
function HC(e, n) {
  const r = x("maybe-v-node"), t = x("var-checkbox"), o = x("var-form-details");
  return b(), k("div", { class: p(e.n("wrap")) }, [L("div", { class: p(e.classes(e.n(), e.n(`--${e.direction}`))) }, [e.options.length ? (b(!0), k(Ie, { key: 0 }, Ye(e.options, (a) => (b(), ke(t, {
    key: a[e.valueKey],
    "checked-value": a[e.valueKey],
    disabled: a.disabled
  }, {
    default: se(({ checked: i }) => [U(r, { is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey] }, null, 8, ["is"])]),
    _: 2
  }, 1032, ["checked-value", "disabled"]))), 128)) : X("v-if", !0), F(e.$slots, "default")], 2), U(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Zm = te({
  name: VC,
  components: {
    VarFormDetails: Hn,
    VarCheckbox: ct,
    MaybeVNode: lr
  },
  props: Gm,
  setup(e) {
    const n = S(() => e.max), r = S(() => e.modelValue.length), { length: t, checkboxes: o, bindCheckboxes: a } = aw(), { bindForm: i } = Kn(), { errorMessage: l, validateWithTrigger: s, validate: u, resetValidation: d } = xn(), c = {
      max: n,
      checkedCount: r,
      onChecked: g,
      onUnchecked: h,
      validate: z,
      resetValidation: d,
      reset: w,
      errorMessage: S(() => l.value)
    };
    ge(() => e.modelValue, m, { deep: !0 }), ge(() => t.value, m), a(c), C(i, c);
    function f(T) {
      Ne(() => {
        const { validateTrigger: O, rules: R, modelValue: H } = e;
        s(O, T, R, H);
      });
    }
    function v(T) {
      C(e["onUpdate:modelValue"], T), C(e.onChange, T), f("onChange");
    }
    function g(T) {
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
      const T = Ql(o.map(({ checkedValue: O }) => O.value));
      return C(e["onUpdate:modelValue"], T), T;
    }
    function $() {
      const T = Ql(o.filter(({ checked: O }) => !O.value).map(({ checkedValue: O }) => O.value));
      return C(e["onUpdate:modelValue"], T), T;
    }
    function w() {
      C(e["onUpdate:modelValue"], []), d();
    }
    function z() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: LC,
      classes: FC,
      checkAll: y,
      inverseAll: $,
      reset: w,
      validate: z,
      resetValidation: d,
      isFunction: Yn
    };
  }
});
Zm.render = HC;
var hi = Zm;
ue(hi);
fe(hi, Gm);
var oN = hi, ks = hi, Jm = {
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
}, { name: UC, n: xr, classes: jC } = oe("chip");
function YC(e, n) {
  const r = x("var-icon");
  return b(), ke(bn, { name: e.n("$-fade") }, {
    default: se(() => [L("span", Xe({
      class: e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 1), ...e.contentClass),
      style: e.chipStyle
    }, e.$attrs), [
      F(e.$slots, "left"),
      L("span", { class: p(e.n(`text-${e.size}`)) }, [F(e.$slots, "default")], 2),
      F(e.$slots, "right"),
      e.closeable ? (b(), k("span", {
        key: 0,
        class: p(e.n("--close")),
        onClick: n[0] || (n[0] = (...t) => e.handleClose && e.handleClose(...t))
      }, [F(e.$slots, "icon", {}, () => [U(r, {
        name: e.closeIconName,
        namespace: e.namespace
      }, null, 8, ["name", "namespace"])])], 2)) : X("v-if", !0)
    ], 16)]),
    _: 3
  }, 8, ["name"]);
}
var Qm = te({
  name: UC,
  components: { VarIcon: Je },
  inheritAttrs: !1,
  props: Jm,
  setup(e) {
    const n = S(() => {
      const { plain: a, textColor: i, color: l } = e;
      return a ? {
        color: i || l,
        borderColor: l
      } : {
        color: i,
        background: l
      };
    }), r = S(() => {
      const { size: a, block: i, type: l, plain: s, round: u } = e, d = xr(i ? "$--flex" : "$--inline-flex"), c = s ? `${xr("plain")} ${xr(`plain-${l}`)}` : xr(`--${l}`), f = u ? xr("--round") : null;
      return [
        xr(`--${a}`),
        d,
        c,
        f
      ];
    }), t = S(() => {
      var a, i;
      return (i = (a = e.icon) != null ? a : e.iconName) != null ? i : "close-circle";
    });
    function o(a) {
      C(e.onClose, a);
    }
    return {
      chipStyle: n,
      contentClass: r,
      closeIconName: t,
      n: xr,
      classes: jC,
      formatElevation: On,
      handleClose: o
    };
  }
});
Qm.render = YC;
var bi = Qm;
ue(bi);
fe(bi, Jm);
var aN = bi, $a = bi, $s = /* @__PURE__ */ Symbol("HIGHLIGHTER_PROVIDER_KEY");
function KC(e) {
  Ru($s, e);
}
function WC() {
  return Uu($s) ? Nu($s) : {
    highlighter: null,
    theme: null
  };
}
var xm = {
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
}, qC = (e, n, r) => new Promise((t, o) => {
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
}), { name: XC, n: GC, classes: ZC } = oe("code"), JC = ["innerHTML"];
function QC(e, n) {
  return b(), k("div", {
    class: p(e.classes(e.n(), [e.wordWrap, e.n("--word-wrap")])),
    innerHTML: e.highlightedCode
  }, null, 10, JC);
}
var _m = te({
  name: XC,
  props: xm,
  setup(e) {
    const { highlighter: n, theme: r } = WC(), t = P(""), o = S(() => {
      var a;
      return (a = e.theme) != null ? a : r?.value;
    });
    return n && ge(() => [
      n.value,
      e.code,
      e.language,
      o.value,
      e.trim
    ], (a) => qC(null, [a], function* ([i, l, s = "", u = "", d]) {
      i && (t.value = yield i.codeToHtml(d ? l.trim() : l, {
        lang: s,
        theme: u
      }));
    }), { immediate: !0 }), {
      n: GC,
      classes: ZC,
      highlightedCode: t
    };
  }
});
_m.render = QC;
var yi = _m;
ue(yi);
fe(yi, xm);
var iN = yi, Ss = yi, eg = {
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
}, ng = /* @__PURE__ */ Symbol("ROW_BIND_COL_KEY");
function xC() {
  const { length: e, childProviders: n, bindChildren: r } = In(ng);
  return {
    length: e,
    cols: n,
    bindCols: r
  };
}
function _C() {
  const { index: e, bindParent: n, parentProvider: r } = Bn(ng);
  return {
    index: e,
    row: r,
    bindRow: n
  };
}
var { name: e2, n: Qo, classes: n2 } = oe("col");
function r2(e, n) {
  return b(), k("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n(`--span-${e.span}`)], [e.offset, e.n(`--offset-${e.offset}`)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
    style: Q({
      flexDirection: e.direction,
      justifyContent: e.padStartFlex(e.justify),
      alignItems: e.padStartFlex(e.align),
      paddingLeft: e.toSizeUnit(e.padding.left),
      paddingRight: e.toSizeUnit(e.padding.right),
      paddingTop: e.toSizeUnit(e.padding.top),
      paddingBottom: e.toSizeUnit(e.padding.bottom)
    }),
    onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [F(e.$slots, "default")], 6);
}
var rg = te({
  name: e2,
  props: eg,
  setup(e) {
    const n = S(() => Z(e.span)), r = S(() => Z(e.offset)), t = S(() => {
      var s;
      const [u = 0, d = 0] = (s = o?.average.value) != null ? s : [];
      return {
        left: d,
        right: d,
        top: u,
        bottom: u
      };
    }), { row: o, bindRow: a } = _C();
    C(a, null);
    function i(s, u) {
      const d = [];
      if (u == null) return d;
      if (Sn(u)) {
        const { offset: c, span: f } = u;
        return Number(f) >= 0 && d.push(Qo(`--span-${s}-${f}`)), c && d.push(Qo(`--offset-${s}-${c}`)), d;
      }
      return Number(u) >= 0 && d.push(Qo(`--span-${s}-${u}`)), d;
    }
    function l(s) {
      C(e.onClick, s);
    }
    return {
      span: n,
      offset: r,
      padding: t,
      n: Qo,
      classes: n2,
      toNumber: Z,
      toSizeUnit: Te,
      getSize: i,
      handleClick: l,
      padStartFlex: ba
    };
  }
});
rg.render = r2;
var wi = rg;
ue(wi);
fe(wi, eg);
var lN = wi, Cs = wi, tg = {
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
}, og = /* @__PURE__ */ Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function t2() {
  const { childProviders: e, length: n, bindChildren: r } = In(og);
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: r
  };
}
var { name: o2, n: a2 } = oe("collapse");
function i2(e, n) {
  return b(), k("div", { class: p(e.n()) }, [F(e.$slots, "default")], 2);
}
var ag = te({
  name: o2,
  props: tg,
  setup(e) {
    const n = S(() => e.offset), r = S(() => e.divider), t = S(() => e.elevation), o = S(() => e.accordion), a = S(() => Wr(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = t2(), u = {
      offset: n,
      divider: r,
      elevation: t,
      accordion: o,
      updateItem: d
    };
    ge(() => i.value, () => Ne().then(v)), ge(() => e.modelValue, () => Ne().then(v)), s(u);
    function d(h, m) {
      if (e.accordion) {
        c(m ? h : void 0);
        return;
      }
      c(m ? [...a.value, h] : a.value.filter((y) => y !== h));
    }
    function c(h) {
      C(e["onUpdate:modelValue"], h), C(e.onChange, h);
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
      const h = R0(Wr(f()));
      l.forEach((m) => {
        m.init(h.includes(m));
      });
    }
    return {
      divider: r,
      n: a2,
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
ag.render = i2;
var ki = ag;
ue(ki);
fe(ki, tg);
var sN = ki, Ps = ki, Zc = (e, n, r) => new Promise((t, o) => {
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
function ig(e) {
  const { contentEl: n, showContent: r, expand: t } = e;
  let o = !0, a = 0, i = 0;
  ge(t, (f) => {
    const v = ++a;
    Ne(() => {
      f ? s(v) : u(v);
    });
  }, { immediate: !0 });
  function l(f) {
    return f === a;
  }
  function s(f) {
    return Zc(this, null, function* () {
      if (!n.value || (n.value.style.height = "", r.value = !0, yield qr(), !n.value || !l(f))) return;
      const { offsetHeight: v } = n.value;
      n.value.style.height = "0px", yield qr(), !(!n.value || !l(f)) && (n.value.style.height = v + "px", o && (yield Gn(), o && l(f) && d()));
    });
  }
  const u = (f) => Zc(null, null, function* () {
    if (!n.value) return;
    const { offsetHeight: v } = n.value;
    n.value.style.height = v + "px", yield qr(), !(!n.value || !l(f)) && (n.value.style.height = "0px");
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
var lg = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
function l2() {
  const { parentProvider: e, index: n, bindParent: r } = Bn(og);
  return or(!!r, "Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var { name: s2, n: u2, classes: d2 } = oe("collapse-item"), c2 = [
  "aria-expanded",
  "aria-disabled",
  "role"
];
function f2(e, n) {
  const r = x("var-icon");
  return b(), k("div", {
    class: p(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
    style: Q(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
  }, [
    L("div", { class: p(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2))) }, null, 2),
    L("div", {
      class: p(e.classes(e.n("header"), [!e.disabled, e.n("header--cursor-pointer")])),
      "aria-expanded": e.isShow,
      "aria-disabled": e.disabled,
      role: e.accordion ? "tab" : "button",
      onClick: n[0] || (n[0] = (...t) => e.toggle && e.toggle(...t))
    }, [e.$slots.title || e.title ? (b(), k("div", {
      key: 0,
      class: p(e.n("header-title"))
    }, [F(e.$slots, "title", {}, () => [Le(ve(e.title), 1)])], 2)) : X("v-if", !0), L("div", { class: p(e.n("header-icon")) }, [F(e.$slots, "icon", {}, () => [U(r, {
      name: e.icon,
      transition: 250,
      class: p(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
    }, null, 8, ["name", "class"])])], 2)], 10, c2),
    Ke(L("div", {
      ref: "contentEl",
      class: p(e.n("content")),
      onTransitionend: n[1] || (n[1] = (...t) => e.handleTransitionEnd && e.handleTransitionEnd(...t)),
      onTransitionstart: n[2] || (n[2] = (...t) => e.handleTransitionStart && e.handleTransitionStart(...t))
    }, [L("div", { class: p(e.n("content-wrap")) }, [F(e.$slots, "default")], 2)], 34), [[yr, e.showContent]])
  ], 6);
}
var sg = te({
  name: s2,
  components: { VarIcon: Je },
  props: lg,
  setup(e) {
    const n = P(!1), r = P(!1), t = P(null), o = S(() => e.name), a = S(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = l2(), { offset: u, divider: d, elevation: c, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: o,
      disabled: a,
      init: m
    });
    const { handleTransitionEnd: g, handleTransitionStart: h } = ig({
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
      n: u2,
      classes: d2,
      toggle: y,
      formatElevation: On,
      handleTransitionEnd: g,
      handleTransitionStart: h
    };
  }
});
sg.render = f2;
var $i = sg;
ue($i);
fe($i, lg);
var uN = $i, Os = $i, ug = { expand: Boolean }, { name: v2, n: p2 } = oe("collapse-transition");
function m2(e, n) {
  return Ke((b(), k("div", {
    ref: "contentEl",
    class: p(e.n("content")),
    onTransitionend: n[0] || (n[0] = (...r) => e.handleTransitionEnd && e.handleTransitionEnd(...r)),
    onTransitionstart: n[1] || (n[1] = (...r) => e.handleTransitionStart && e.handleTransitionStart(...r))
  }, [F(e.$slots, "default")], 34)), [[yr, e.showContent]]);
}
var dg = te({
  name: v2,
  props: ug,
  setup(e) {
    const n = P(!1), r = P(null), { handleTransitionEnd: t, handleTransitionStart: o } = ig({
      contentEl: r,
      showContent: n,
      expand: S(() => e.expand)
    });
    return {
      showContent: n,
      contentEl: r,
      n: p2,
      handleTransitionEnd: t,
      handleTransitionStart: o
    };
  }
});
dg.render = m2;
var Si = dg;
ue(Si);
fe(Si, ug);
var dN = Si, Sa = Si, cg = {
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
}, { name: g2, n: h2 } = oe("count-to");
function b2(e, n) {
  return b(), k("div", { class: p(e.n()) }, [F(e.$slots, "default", { value: e.value }, () => [Le(ve(e.value), 1)])], 2);
}
var fg = te({
  name: g2,
  props: cg,
  setup(e) {
    const { value: n, reset: r, start: t, pause: o } = J0({
      from: () => Z(e.from),
      to: () => Z(e.to),
      duration: () => Z(e.duration),
      timingFunction: e.timingFunction,
      onFinished() {
        C(e.onEnd);
      }
    }), a = S(() => xl(n.value, Z(e.precision)));
    ge(() => [
      e.from,
      e.to,
      e.duration
    ], i), Tr(i);
    function i() {
      r(), e.autoStart && t();
    }
    return {
      value: a,
      n: h2,
      start: t,
      pause: o,
      reset: i,
      toNumber: Z,
      floor: xl
    };
  }
});
fg.render = b2;
var Ci = fg;
ue(Ci);
fe(Ci, cg);
var cN = Ci, zs = Ci, vg = {
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
}, { name: y2, n: w2 } = oe("countdown"), Ts = 1e3, Es = 60 * Ts, Bs = 60 * Es, Jc = 24 * Bs;
function k2(e, n) {
  return b(), k("div", { class: p(e.n()) }, [F(e.$slots, "default", yt(Aa(e.timeData)), () => [Le(ve(e.showTime), 1)])], 2);
}
var pg = te({
  name: y2,
  props: vg,
  setup(e) {
    const n = P(""), r = P({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let t = 0, o = !1, a = 0, i = 0, l;
    ge(() => e.time, () => {
      v(), e.autoStart && c();
    }), Tr(() => {
      d(), e.autoStart && c();
    }), vt(() => {
      l != null && (o = l, o === !0 && c(!0));
    }), Ot(() => {
      l = o, f();
    }), Io(f);
    function s(g, h) {
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
        g.includes(w) ? g = g.replace(w, Gr(`${m[z]}`, 2, "0")) : m[z + 1] += m[z] * $[z];
      }), g.includes("S")) {
        const w = Gr(`${m[m.length - 1]}`, 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", w) : g.includes("SS") ? g = g.replace("SS", w.slice(0, 2)) : g = g.replace("S", w.slice(0, 1));
      }
      return g;
    }
    function u(g) {
      const h = {
        days: Math.floor(g / Jc),
        hours: Math.floor(g % Jc / Bs),
        minutes: Math.floor(g % Bs / Es),
        seconds: Math.floor(g % Es / Ts),
        milliseconds: Math.floor(g % Ts)
      };
      r.value = h, C(e.onChange, r.value), n.value = s(e.format, h);
    }
    function d() {
      const { time: g, onEnd: h } = e, m = performance.now();
      if (t || (t = m + Z(g)), i = t - m, i < 0 && (i = 0), u(i), i === 0) {
        C(h);
        return;
      }
      o && (a = Vt(d));
    }
    function c(g = !1) {
      o && !g || (o = !0, t = performance.now() + (i || Z(e.time)), d());
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
      n: w2,
      start: c,
      pause: f,
      reset: v
    };
  }
});
pg.render = k2;
var Pi = pg;
ue(Pi);
fe(Pi, vg);
var fN = Pi, Is = Pi, Mt = 9e15, gt = 1e9, Ds = "0123456789abcdef", Ca = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Pa = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Ms = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Mt,
  maxE: Mt,
  crypto: !1
}, mg, Yr, He = !0, Oi = "[DecimalError] ", ft = Oi + "Invalid argument: ", gg = Oi + "Precision limit exceeded", hg = Oi + "crypto unavailable", bg = "[object Decimal]", Qn = Math.floor, An = Math.pow, $2 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, S2 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, C2 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, yg = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, zr = 1e7, Me = 7, P2 = 9007199254740991, O2 = Ca.length - 1, As = Pa.length - 1, ie = { toStringTag: bg };
ie.absoluteValue = ie.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), De(e);
};
ie.ceil = function() {
  return De(new this.constructor(this), this.e + 1, 2);
};
ie.clampedTo = ie.clamp = function(e, n) {
  var r, t = this, o = t.constructor;
  if (e = new o(e), n = new o(n), !e.s || !n.s) return new o(NaN);
  if (e.gt(n)) throw Error(ft + n);
  return r = t.cmp(e), r < 0 ? e : t.cmp(n) > 0 ? n : new o(t);
};
ie.comparedTo = ie.cmp = function(e) {
  var n, r, t, o, a = this, i = a.d, l = (e = new a.constructor(e)).d, s = a.s, u = e.s;
  if (!i || !l) return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0]) return i[0] ? s : l[0] ? -u : 0;
  if (s !== u) return s;
  if (a.e !== e.e) return a.e > e.e ^ s < 0 ? 1 : -1;
  for (t = i.length, o = l.length, n = 0, r = t < o ? t : o; n < r; ++n) if (i[n] !== l[n]) return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return t === o ? 0 : t > o ^ s < 0 ? 1 : -1;
};
ie.cosine = ie.cos = function() {
  var e, n, r = this, t = r.constructor;
  return r.d ? r.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(r.e, r.sd()) + Me, t.rounding = 1, r = z2(t, Cg(t, r)), t.precision = e, t.rounding = n, De(Yr == 2 || Yr == 3 ? r.neg() : r, e, n, !0)) : new t(1) : new t(NaN);
};
ie.cubeRoot = ie.cbrt = function() {
  var e, n, r, t, o, a, i, l, s, u, d = this, c = d.constructor;
  if (!d.isFinite() || d.isZero()) return new c(d);
  for (He = !1, a = d.s * An(d.s * d, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (r = Un(d.d), e = d.e, (a = (e - r.length + 1) % 3) && (r += a == 1 || a == -2 ? "0" : "00"), a = An(r, 1 / 3), e = Qn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? r = "5e" + e : (r = a.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), t = new c(r), t.s = d.s) : t = new c(a.toString()), i = (e = c.precision) + 3; ; )
    if (l = t, s = l.times(l).times(l), u = s.plus(d), t = cn(u.plus(d).times(l), u.plus(s), i + 2, 1), Un(l.d).slice(0, i) === (r = Un(t.d)).slice(0, i))
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
ie.decimalPlaces = ie.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Qn(this.e / Me)) * Me, e = n[e], e) for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
ie.dividedBy = ie.div = function(e) {
  return cn(this, new this.constructor(e));
};
ie.dividedToIntegerBy = ie.divToInt = function(e) {
  var n = this, r = n.constructor;
  return De(cn(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
ie.equals = ie.eq = function(e) {
  return this.cmp(e) === 0;
};
ie.floor = function() {
  return De(new this.constructor(this), this.e + 1, 3);
};
ie.greaterThan = ie.gt = function(e) {
  return this.cmp(e) > 0;
};
ie.greaterThanOrEqualTo = ie.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
ie.hyperbolicCosine = ie.cosh = function() {
  var e, n, r, t, o, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite()) return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero()) return l;
  r = i.precision, t = i.rounding, i.precision = r + Math.max(a.e, a.sd()) + 4, i.rounding = 1, o = a.d.length, o < 32 ? (e = Math.ceil(o / 3), n = (1 / Ti(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = Wt(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(d.minus(s.times(d))));
  return De(a, i.precision = r, i.rounding = t, !0);
};
ie.hyperbolicSine = ie.sinh = function() {
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
ie.hyperbolicTangent = ie.tanh = function() {
  var e, n, r = this, t = r.constructor;
  return r.isFinite() ? r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + 7, t.rounding = 1, cn(r.sinh(), r.cosh(), t.precision = e, t.rounding = n)) : new t(r.s);
};
ie.inverseCosine = ie.acos = function() {
  var e = this, n = e.constructor, r = e.abs().cmp(1), t = n.precision, o = n.rounding;
  return r !== -1 ? r === 0 ? e.isNeg() ? Rr(n, t, o) : new n(0) : new n(NaN) : e.isZero() ? Rr(n, t + 4, o).times(0.5) : (n.precision = t + 6, n.rounding = 1, e = new n(1).minus(e).div(e.plus(1)).sqrt().atan(), n.precision = t, n.rounding = o, e.times(2));
};
ie.inverseHyperbolicCosine = ie.acosh = function() {
  var e, n, r = this, t = r.constructor;
  return r.lte(1) ? new t(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, t.rounding = 1, He = !1, r = r.times(r).minus(1).sqrt().plus(r), He = !0, t.precision = e, t.rounding = n, r.ln()) : new t(r);
};
ie.inverseHyperbolicSine = ie.asinh = function() {
  var e, n, r = this, t = r.constructor;
  return !r.isFinite() || r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, t.rounding = 1, He = !1, r = r.times(r).plus(1).sqrt().plus(r), He = !0, t.precision = e, t.rounding = n, r.ln());
};
ie.inverseHyperbolicTangent = ie.atanh = function() {
  var e, n, r, t, o = this, a = o.constructor;
  return o.isFinite() ? o.e >= 0 ? new a(o.abs().eq(1) ? o.s / 0 : o.isZero() ? o : NaN) : (e = a.precision, n = a.rounding, t = o.sd(), Math.max(t, e) < 2 * -o.e - 1 ? De(new a(o), e, n, !0) : (a.precision = r = t - o.e, o = cn(o.plus(1), new a(1).minus(o), r + e, 1), a.precision = e + 4, a.rounding = 1, o = o.ln(), a.precision = e, a.rounding = n, o.times(0.5))) : new a(NaN);
};
ie.inverseSine = ie.asin = function() {
  var e, n, r, t, o = this, a = o.constructor;
  return o.isZero() ? new a(o) : (n = o.abs().cmp(1), r = a.precision, t = a.rounding, n !== -1 ? n === 0 ? (e = Rr(a, r + 4, t).times(0.5), e.s = o.s, e) : new a(NaN) : (a.precision = r + 6, a.rounding = 1, o = o.div(new a(1).minus(o.times(o)).sqrt().plus(1)).atan(), a.precision = r, a.rounding = t, o.times(2)));
};
ie.inverseTangent = ie.atan = function() {
  var e, n, r, t, o, a, i, l, s, u = this, d = u.constructor, c = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new d(u);
    if (u.abs().eq(1) && c + 4 <= As)
      return i = Rr(d, c + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s) return new d(NaN);
    if (c + 4 <= As)
      return i = Rr(d, c + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = c + 10, d.rounding = 1, r = Math.min(28, l / Me + 2 | 0), e = r; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (He = !1, n = Math.ceil(l / Me), t = 1, s = u.times(u), i = new d(u), o = u; e !== -1; )
    if (o = o.times(s), a = i.minus(o.div(t += 2)), o = o.times(s), i = a.plus(o.div(t += 2)), i.d[n] !== void 0) for (e = n; i.d[e] === a.d[e] && e--; ) ;
  return r && (i = i.times(2 << r - 1)), He = !0, De(i, d.precision = c, d.rounding = f, !0);
};
ie.isFinite = function() {
  return !!this.d;
};
ie.isInteger = ie.isInt = function() {
  return !!this.d && Qn(this.e / Me) > this.d.length - 2;
};
ie.isNaN = function() {
  return !this.s;
};
ie.isNegative = ie.isNeg = function() {
  return this.s < 0;
};
ie.isPositive = ie.isPos = function() {
  return this.s > 0;
};
ie.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
ie.lessThan = ie.lt = function(e) {
  return this.cmp(e) < 0;
};
ie.lessThanOrEqualTo = ie.lte = function(e) {
  return this.cmp(e) < 1;
};
ie.logarithm = ie.log = function(e) {
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
  if (He = !1, l = c + v, i = at(u, l), t = n ? Oa(d, l + 10) : at(e, l), s = cn(i, t, l, 1), $o(s.d, o = c, f)) do
    if (l += 10, i = at(u, l), t = n ? Oa(d, l + 10) : at(e, l), s = cn(i, t, l, 1), !a) {
      +Un(s.d).slice(o + 1, o + 15) + 1 == 1e14 && (s = De(s, c + 1, 0));
      break;
    }
  while ($o(s.d, o += 10, f));
  return He = !0, De(s, c, f);
};
ie.minus = ie.sub = function(e) {
  var n, r, t, o, a, i, l, s, u, d, c, f, v = this, g = v.constructor;
  if (e = new g(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new g(NaN) : v.d ? e.s = -e.s : e = new g(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s)
    return e.s = -e.s, v.plus(e);
  if (u = v.d, f = e.d, l = g.precision, s = g.rounding, !u[0] || !f[0]) {
    if (f[0]) e.s = -e.s;
    else if (u[0]) e = new g(v);
    else return new g(s === 3 ? -0 : 0);
    return He ? De(e, l, s) : e;
  }
  if (r = Qn(e.e / Me), d = Qn(v.e / Me), u = u.slice(), a = d - r, a) {
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
  return u[0] ? (e.d = u, e.e = zi(u, r), He ? De(e, l, s) : e) : new g(s === 3 ? -0 : 0);
};
ie.modulo = ie.mod = function(e) {
  var n, r = this, t = r.constructor;
  return e = new t(e), !r.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || r.d && !r.d[0] ? De(new t(r), t.precision, t.rounding) : (He = !1, t.modulo == 9 ? (n = cn(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = cn(r, e, 0, t.modulo, 1), n = n.times(e), He = !0, r.minus(n));
};
ie.naturalExponential = ie.exp = function() {
  return Ns(this);
};
ie.naturalLogarithm = ie.ln = function() {
  return at(this);
};
ie.negated = ie.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, De(e);
};
ie.plus = ie.add = function(e) {
  var n, r, t, o, a, i, l, s, u, d, c = this, f = c.constructor;
  if (e = new f(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new f(NaN) : c.d || (e = new f(e.d || c.s === e.s ? c : NaN)), e;
  if (c.s != e.s)
    return e.s = -e.s, c.minus(e);
  if (u = c.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(c)), He ? De(e, l, s) : e;
  if (a = Qn(c.e / Me), t = Qn(e.e / Me), u = u.slice(), o = a - t, o) {
    for (o < 0 ? (r = u, o = -o, i = d.length) : (r = d, t = a, i = u.length), a = Math.ceil(l / Me), i = a > i ? a + 1 : i + 1, o > i && (o = i, r.length = 1), r.reverse(); o--; ) r.push(0);
    r.reverse();
  }
  for (i = u.length, o = d.length, i - o < 0 && (o = i, r = d, d = u, u = r), n = 0; o; )
    n = (u[--o] = u[o] + d[o] + n) / zr | 0, u[o] %= zr;
  for (n && (u.unshift(n), ++t), i = u.length; u[--i] == 0; ) u.pop();
  return e.d = u, e.e = zi(u, t), He ? De(e, l, s) : e;
};
ie.precision = ie.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(ft + e);
  return r.d ? (n = wg(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
ie.round = function() {
  var e = this, n = e.constructor;
  return De(new n(e), e.e + 1, n.rounding);
};
ie.sine = ie.sin = function() {
  var e, n, r = this, t = r.constructor;
  return r.isFinite() ? r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(r.e, r.sd()) + Me, t.rounding = 1, r = E2(t, Cg(t, r)), t.precision = e, t.rounding = n, De(Yr > 2 ? r.neg() : r, e, n, !0)) : new t(NaN);
};
ie.squareRoot = ie.sqrt = function() {
  var e, n, r, t, o, a, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0]) return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (He = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = Un(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Qn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), t = new d(n)) : t = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (a = t, t = a.plus(cn(i, a, r + 2, 1)).times(0.5), Un(a.d).slice(0, r) === (n = Un(t.d)).slice(0, r))
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
ie.tangent = ie.tan = function() {
  var e, n, r = this, t = r.constructor;
  return r.isFinite() ? r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + 10, t.rounding = 1, r = r.sin(), r.s = 1, r = cn(r, new t(1).minus(r.times(r)).sqrt(), e + 10, 0), t.precision = e, t.rounding = n, De(Yr == 2 || Yr == 4 ? r.neg() : r, e, n, !0)) : new t(NaN);
};
ie.times = ie.mul = function(e) {
  var n, r, t, o, a, i, l, s, u, d = this, c = d.constructor, f = d.d, v = (e = new c(e)).d;
  if (e.s *= d.s, !f || !f[0] || !v || !v[0]) return new c(!e.s || f && !f[0] && !v || v && !v[0] && !f ? NaN : !f || !v ? e.s / 0 : e.s * 0);
  for (r = Qn(d.e / Me) + Qn(e.e / Me), s = f.length, u = v.length, s < u && (a = f, f = v, v = a, i = s, s = u, u = i), a = [], i = s + u, t = i; t--; ) a.push(0);
  for (t = u; --t >= 0; ) {
    for (n = 0, o = s + t; o > t; )
      l = a[o] + v[t] * f[o - t - 1] + n, a[o--] = l % zr | 0, n = l / zr | 0;
    a[o] = (a[o] + n) % zr | 0;
  }
  for (; !a[--i]; ) a.pop();
  return n ? ++r : a.shift(), e.d = a, e.e = zi(a, r), He ? De(e, c.precision, c.rounding) : e;
};
ie.toBinary = function(e, n) {
  return sd(this, 2, e, n);
};
ie.toDecimalPlaces = ie.toDP = function(e, n) {
  var r = this, t = r.constructor;
  return r = new t(r), e === void 0 ? r : (dr(e, 0, gt), n === void 0 ? n = t.rounding : dr(n, 0, 8), De(r, e + r.e + 1, n));
};
ie.toExponential = function(e, n) {
  var r, t = this, o = t.constructor;
  return e === void 0 ? r = Lr(t, !0) : (dr(e, 0, gt), n === void 0 ? n = o.rounding : dr(n, 0, 8), t = De(new o(t), e + 1, n), r = Lr(t, !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
ie.toFixed = function(e, n) {
  var r, t, o = this, a = o.constructor;
  return e === void 0 ? r = Lr(o) : (dr(e, 0, gt), n === void 0 ? n = a.rounding : dr(n, 0, 8), t = De(new a(o), e + o.e + 1, n), r = Lr(t, !1, e + t.e + 1)), o.isNeg() && !o.isZero() ? "-" + r : r;
};
ie.toFraction = function(e) {
  var n, r, t, o, a, i, l, s, u, d, c, f, v = this, g = v.d, h = v.constructor;
  if (!g) return new h(v);
  if (u = r = new h(1), t = s = new h(0), n = new h(t), a = n.e = wg(g) - v.e - 1, i = a % Me, n.d[0] = An(10, i < 0 ? Me + i : i), e == null) e = a > 0 ? n : u;
  else {
    if (l = new h(e), !l.isInt() || l.lt(u)) throw Error(ft + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (He = !1, l = new h(Un(g)), d = h.precision, h.precision = a = g.length * Me * 2; c = cn(l, n, 0, 1, 1), o = r.plus(c.times(t)), o.cmp(e) != 1; )
    r = t, t = o, o = u, u = s.plus(c.times(o)), s = o, o = n, n = l.minus(c.times(o)), l = o;
  return o = cn(e.minus(r), t, 0, 1, 1), s = s.plus(o.times(u)), r = r.plus(o.times(t)), s.s = u.s = v.s, f = cn(u, t, a, 1).minus(v).abs().cmp(cn(s, r, a, 1).minus(v).abs()) < 1 ? [u, t] : [s, r], h.precision = d, He = !0, f;
};
ie.toHexadecimal = ie.toHex = function(e, n) {
  return sd(this, 16, e, n);
};
ie.toNearest = function(e, n) {
  var r = this, t = r.constructor;
  if (r = new t(r), e == null) {
    if (!r.d) return r;
    e = new t(1), n = t.rounding;
  } else {
    if (e = new t(e), n === void 0 ? n = t.rounding : dr(n, 0, 8), !r.d) return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (He = !1, r = cn(r, e, 0, n, 1).times(e), He = !0, De(r)) : (e.s = r.s, r = e), r;
};
ie.toNumber = function() {
  return +this;
};
ie.toOctal = function(e, n) {
  return sd(this, 8, e, n);
};
ie.toPower = ie.pow = function(e) {
  var n, r, t, o, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new s(An(+l, u));
  if (l = new s(l), l.eq(1)) return l;
  if (t = s.precision, a = s.rounding, e.eq(1)) return De(l, t, a);
  if (n = Qn(e.e / Me), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= P2)
    return o = kg(s, l, r, t), e.s < 0 ? new s(1).div(o) : De(o, t, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1) return new s(NaN);
    if ((e.d[n] & 1) == 0 && (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = An(+l, u), n = r == 0 || !isFinite(r) ? Qn(u * (Math.log("0." + Un(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (He = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), o = Ns(e.times(at(l, t + r)), t), o.d && (o = De(o, t + 5, 1), $o(o.d, t, a) && (n = t + 10, o = De(Ns(e.times(at(l, n + r)), n), n + 5, 1), +Un(o.d).slice(t + 1, t + 15) + 1 == 1e14 && (o = De(o, t + 1, 0)))), o.s = i, He = !0, s.rounding = a, De(o, t, a));
};
ie.toPrecision = function(e, n) {
  var r, t = this, o = t.constructor;
  return e === void 0 ? r = Lr(t, t.e <= o.toExpNeg || t.e >= o.toExpPos) : (dr(e, 1, gt), n === void 0 ? n = o.rounding : dr(n, 0, 8), t = De(new o(t), e, n), r = Lr(t, e <= t.e || t.e <= o.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
ie.toSignificantDigits = ie.toSD = function(e, n) {
  var r = this, t = r.constructor;
  return e === void 0 ? (e = t.precision, n = t.rounding) : (dr(e, 1, gt), n === void 0 ? n = t.rounding : dr(n, 0, 8)), De(new t(r), e, n);
};
ie.toString = function() {
  var e = this, n = e.constructor, r = Lr(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
ie.truncated = ie.trunc = function() {
  return De(new this.constructor(this), this.e + 1, 1);
};
ie.valueOf = ie.toJSON = function() {
  var e = this, n = e.constructor, r = Lr(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Un(e) {
  var n, r, t, o = e.length - 1, a = "", i = e[0];
  if (o > 0) {
    for (a += i, n = 1; n < o; n++)
      t = e[n] + "", r = Me - t.length, r && (a += et(r)), a += t;
    i = e[n], t = i + "", r = Me - t.length, r && (a += et(r));
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
  return --n < 0 ? (n += Me, o = 0) : (o = Math.ceil((n + 1) / Me), n %= Me), a = An(10, Me - n), l = e[o] % a | 0, t == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == a || r > 3 && l + 1 == a / 2) && (e[o + 1] / a / 100 | 0) == An(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[o + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (t || r < 4) && l == 9999 || !t && r > 3 && l == 4999) : i = ((t || r < 4) && l + 1 == a || !t && r > 3 && l + 1 == a / 2) && (e[o + 1] / a / 1e3 | 0) == An(10, n - 3) - 1, i;
}
function fa(e, n, r) {
  for (var t, o = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = o.length; a--; ) o[a] *= n;
    for (o[0] += Ds.indexOf(e.charAt(i++)), t = 0; t < o.length; t++) o[t] > r - 1 && (o[t + 1] === void 0 && (o[t + 1] = 0), o[t + 1] += o[t] / r | 0, o[t] %= r);
  }
  return o.reverse();
}
function z2(e, n) {
  var r, t, o;
  if (n.isZero()) return n;
  t = n.d.length, t < 32 ? (r = Math.ceil(t / 3), o = (1 / Ti(4, r)).toString()) : (r = 16, o = "2.3283064365386962890625e-10"), e.precision += r, n = Wt(e, 1, n.times(o), new e(1));
  for (var a = r; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var cn = /* @__PURE__ */ (function() {
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
    var u, d, c, f, v, g, h, m, y, $, w, z, T, O, R, H, A, D, E, B, N = t.constructor, M = t.s == o.s ? 1 : -1, I = t.d, j = o.d;
    if (!I || !I[0] || !j || !j[0]) return new N(!t.s || !o.s || (I ? j && I[0] == j[0] : !j) ? NaN : I && I[0] == 0 || !j ? M * 0 : M / 0);
    for (s ? (v = 1, d = t.e - o.e) : (s = zr, v = Me, d = Qn(t.e / v) - Qn(o.e / v)), E = j.length, A = I.length, y = new N(M), $ = y.d = [], c = 0; j[c] == (I[c] || 0); c++) ;
    if (j[c] > (I[c] || 0) && d--, a == null ? (O = a = N.precision, i = N.rounding) : l ? O = a + (t.e - o.e) + 1 : O = a, O < 0)
      $.push(1), g = !0;
    else {
      if (O = O / v + 2 | 0, c = 0, E == 1) {
        for (f = 0, j = j[0], O++; (c < A || f) && O--; c++)
          R = f * s + (I[c] || 0), $[c] = R / j | 0, f = R % j | 0;
        g = f || c < A;
      } else {
        for (f = s / (j[0] + 1) | 0, f > 1 && (j = e(j, f, s), I = e(I, f, s), E = j.length, A = I.length), H = E, w = I.slice(0, E), z = w.length; z < E; ) w[z++] = 0;
        B = j.slice(), B.unshift(0), D = j[0], j[1] >= s / 2 && ++D;
        do
          f = 0, u = n(j, w, E, z), u < 0 ? (T = w[0], E != z && (T = T * s + (w[1] || 0)), f = T / D | 0, f > 1 ? (f >= s && (f = s - 1), h = e(j, f, s), m = h.length, z = w.length, u = n(h, w, m, z), u == 1 && (f--, r(h, E < m ? B : j, m, s))) : (f == 0 && (u = f = 1), h = j.slice()), m = h.length, m < z && h.unshift(0), r(w, h, z, s), u == -1 && (z = w.length, u = n(j, w, E, z), u < 1 && (f++, r(w, E < z ? B : j, z, s))), z = w.length) : u === 0 && (f++, w = [0]), $[c++] = f, u && w[0] ? w[z++] = I[H] || 0 : (w = [I[H]], z = 1);
        while ((H++ < A || w[0] !== void 0) && O--);
        g = w[0] !== void 0;
      }
      $[0] || $.shift();
    }
    if (v == 1)
      y.e = d, mg = g;
    else {
      for (c = 1, f = $[0]; f >= 10; f /= 10) c++;
      y.e = c + d * v - 1, De(y, l ? a + y.e + 1 : a, i, g);
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
      a += Me, i = n, d = c[f = 0], s = d / An(10, o - i - 1) % 10 | 0;
    else if (f = Math.ceil((a + 1) / Me), l = c.length, f >= l) if (t) {
      for (; l++ <= f; ) c.push(0);
      d = s = 0, o = 1, a %= Me, i = a - Me + 1;
    } else break e;
    else {
      for (d = l = c[f], o = 1; l >= 10; l /= 10) o++;
      a %= Me, i = a - Me + o, s = i < 0 ? 0 : d / An(10, o - i - 1) % 10 | 0;
    }
    if (t = t || n < 0 || c[f + 1] !== void 0 || (i < 0 ? d : d % An(10, o - i - 1)), u = r < 4 ? (s || t) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || t || r == 6 && (a > 0 ? i > 0 ? d / An(10, o - i) : 0 : c[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !c[0])
      return c.length = 0, u ? (n -= e.e + 1, c[0] = An(10, (Me - n % Me) % Me), e.e = -n || 0) : c[0] = e.e = 0, e;
    if (a == 0 ? (c.length = f, l = 1, f--) : (c.length = f + 1, l = An(10, Me - a), c[f] = i > 0 ? (d / An(10, o - i) % An(10, i) | 0) * l : 0), u) for (; ; ) if (f == 0) {
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
  if (!e.isFinite()) return Sg(e);
  var t, o = e.e, a = Un(e.d), i = a.length;
  return n ? (r && (t = r - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + et(t) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : o < 0 ? (a = "0." + et(-o - 1) + a, r && (t = r - i) > 0 && (a += et(t))) : o >= i ? (a += et(o + 1 - i), r && (t = r - o - 1) > 0 && (a = a + "." + et(t))) : ((t = o + 1) < i && (a = a.slice(0, t) + "." + a.slice(t)), r && (t = r - i) > 0 && (o + 1 === i && (a += "."), a += et(t))), a;
}
function zi(e, n) {
  var r = e[0];
  for (n *= Me; r >= 10; r /= 10) n++;
  return n;
}
function Oa(e, n, r) {
  if (n > O2)
    throw He = !0, r && (e.precision = r), Error(gg);
  return De(new e(Ca), n, 1, !0);
}
function Rr(e, n, r) {
  if (n > As) throw Error(gg);
  return De(new e(Pa), n, r, !0);
}
function wg(e) {
  var n = e.length - 1, r = n * Me + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = e[0]; n >= 10; n /= 10) r++;
  }
  return r;
}
function et(e) {
  for (var n = ""; e--; ) n += "0";
  return n;
}
function kg(e, n, r, t) {
  var o, a = new e(1), i = Math.ceil(t / Me + 4);
  for (He = !1; ; ) {
    if (r % 2 && (a = a.times(n), xc(a.d, i) && (o = !0)), r = Qn(r / 2), r === 0) {
      r = a.d.length - 1, o && a.d[r] === 0 && ++a.d[r];
      break;
    }
    n = n.times(n), xc(n.d, i);
  }
  return He = !0, a;
}
function Qc(e) {
  return e.d[e.d.length - 1] & 1;
}
function $g(e, n, r) {
  for (var t, o, a = new e(n[0]), i = 0; ++i < n.length; ) {
    if (o = new e(n[i]), !o.s) {
      a = o;
      break;
    }
    t = a.cmp(o), (t === r || t === 0 && a.s === r) && (a = o);
  }
  return a;
}
function Ns(e, n) {
  var r, t, o, a, i, l, s, u = 0, d = 0, c = 0, f = e.constructor, v = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (n == null ? (He = !1, s = g) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), c += 5;
  for (t = Math.log(An(2, c)) / Math.LN10 * 2 + 5 | 0, s += t, r = a = i = new f(1), f.precision = s; ; ) {
    if (a = De(a.times(e), s, 1), r = r.times(++d), l = i.plus(cn(a, r, s, 1)), Un(l.d).slice(0, s) === Un(i.d).slice(0, s)) {
      for (o = c; o--; ) i = De(i.times(i), s, 1);
      if (n == null) if (u < 3 && $o(i.d, s - t, v, u))
        f.precision = s += 10, r = a = l = new f(1), d = 0, u++;
      else return De(i, f.precision = g, v, He = !0);
      else
        return f.precision = g, i;
    }
    i = l;
  }
}
function at(e, n) {
  var r, t, o, a, i, l, s, u, d, c, f, v = 1, g = 10, h = e, m = h.d, y = h.constructor, $ = y.rounding, w = y.precision;
  if (h.s < 0 || !m || !m[0] || !h.e && m[0] == 1 && m.length == 1) return new y(m && !m[0] ? -1 / 0 : h.s != 1 ? NaN : m ? 0 : h);
  if (n == null ? (He = !1, d = w) : d = n, y.precision = d += g, r = Un(m), t = r.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; t < 7 && t != 1 || t == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = Un(h.d), t = r.charAt(0), v++;
    a = h.e, t > 1 ? (h = new y("0." + r), a++) : h = new y(t + "." + r.slice(1));
  } else
    return u = Oa(y, d + 2, w).times(a + ""), h = at(new y(t + "." + r.slice(1)), d - g).plus(u), y.precision = w, n == null ? De(h, w, $, He = !0) : h;
  for (c = h, s = i = h = cn(h.minus(1), h.plus(1), d, 1), f = De(h.times(h), d, 1), o = 3; ; ) {
    if (i = De(i.times(f), d, 1), u = s.plus(cn(i, new y(o), d, 1)), Un(u.d).slice(0, d) === Un(s.d).slice(0, d))
      if (s = s.times(2), a !== 0 && (s = s.plus(Oa(y, d + 2, w).times(a + ""))), s = cn(s, new y(v), d, 1), n == null) if ($o(s.d, d - g, $, l))
        y.precision = d += g, u = i = h = cn(c.minus(1), c.plus(1), d, 1), f = De(h.times(h), d, 1), o = l = 1;
      else return De(s, y.precision = w, $, He = !0);
      else
        return y.precision = w, s;
    s = u, o += 2;
  }
}
function Sg(e) {
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
function T2(e, n) {
  var r, t, o, a, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), yg.test(n)) return va(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (S2.test(n))
    r = 16, n = n.toLowerCase();
  else if ($2.test(n)) r = 2;
  else if (C2.test(n)) r = 8;
  else throw Error(ft + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, t = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, o = kg(t, new t(r), a, a * 2)), u = fa(n, r, zr), d = u.length - 1, a = d; u[a] === 0; --a) u.pop();
  return a < 0 ? new t(e.s * 0) : (e.e = zi(u, d), e.d = u, He = !1, i && (e = cn(e, o, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? An(2, s) : it.pow(2, s))), He = !0, e);
}
function E2(e, n) {
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
    if (i = cn(l.times(s), new e(n++ * n++), d, 1), l = o ? t.plus(i) : t.minus(i), t = cn(i.times(s), new e(n++ * n++), d, 1), i = l.plus(t), i.d[c] !== void 0) {
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
function Cg(e, n) {
  var r, t = n.s < 0, o = Rr(e, e.precision, 1), a = o.times(0.5);
  if (n = n.abs(), n.lte(a))
    return Yr = t ? 4 : 1, n;
  if (r = n.divToInt(o), r.isZero()) Yr = t ? 3 : 2;
  else {
    if (n = n.minus(r.times(o)), n.lte(a))
      return Yr = Qc(r) ? t ? 2 : 3 : t ? 4 : 1, n;
    Yr = Qc(r) ? t ? 1 : 4 : t ? 3 : 2;
  }
  return n.minus(o).abs();
}
function sd(e, n, r, t) {
  var o, a, i, l, s, u, d, c, f, v = e.constructor, g = r !== void 0;
  if (g ? (dr(r, 1, gt), t === void 0 ? t = v.rounding : dr(t, 0, 8)) : (r = v.precision, t = v.rounding), !e.isFinite()) d = Sg(e);
  else {
    for (d = Lr(e), i = d.indexOf("."), g ? (o = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : o = n, i >= 0 && (d = d.replace(".", ""), f = new v(1), f.e = d.length - i, f.d = fa(Lr(f), 10, o), f.e = f.d.length), c = fa(d, 10, o), a = s = c.length; c[--s] == 0; ) c.pop();
    if (!c[0]) d = g ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = c, e.e = a, e = cn(e, f, r, t, 0, o), c = e.d, a = e.e, u = mg), i = c[r], l = o / 2, u = u || c[r + 1] !== void 0, u = t < 4 ? (i !== void 0 || u) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : i > l || i === l && (t === 4 || u || t === 6 && c[r - 1] & 1 || t === (e.s < 0 ? 8 : 7)), c.length = r, u) for (; ++c[--r] > o - 1; )
        c[r] = 0, r || (++a, c.unshift(1));
      for (s = c.length; !c[s - 1]; --s) ;
      for (i = 0, d = ""; i < s; i++) d += Ds.charAt(c[i]);
      if (g) {
        if (s > 1) if (n == 16 || n == 8) {
          for (i = n == 16 ? 4 : 3, --s; s % i; s++) d += "0";
          for (c = fa(d, o, n), s = c.length; !c[s - 1]; --s) ;
          for (i = 1, d = "1."; i < s; i++) d += Ds.charAt(c[i]);
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
function xc(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function B2(e) {
  return new this(e).abs();
}
function I2(e) {
  return new this(e).acos();
}
function D2(e) {
  return new this(e).acosh();
}
function M2(e, n) {
  return new this(e).plus(n);
}
function A2(e) {
  return new this(e).asin();
}
function N2(e) {
  return new this(e).asinh();
}
function R2(e) {
  return new this(e).atan();
}
function V2(e) {
  return new this(e).atanh();
}
function L2(e, n) {
  e = new this(e), n = new this(n);
  var r, t = this.precision, o = this.rounding, a = t + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Rr(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Rr(this, t, o) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Rr(this, a, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, r = this.atan(cn(e, n, a, 1)), n = Rr(this, a, 1), this.precision = t, this.rounding = o, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(cn(e, n, a, 1)), r;
}
function F2(e) {
  return new this(e).cbrt();
}
function H2(e) {
  return De(e = new this(e), e.e + 1, 2);
}
function U2(e, n, r) {
  return new this(e).clamp(n, r);
}
function j2(e) {
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
    if (r = a[n], o && (this[r] = Ms[r]), (t = e[r]) !== void 0) if (Qn(t) === t && t >= a[n + 1] && t <= a[n + 2]) this[r] = t;
    else throw Error(ft + r + ": " + t);
  if (r = "crypto", o && (this[r] = Ms[r]), (t = e[r]) !== void 0) if (t === !0 || t === !1 || t === 0 || t === 1) if (t) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[r] = !0;
  else throw Error(hg);
  else this[r] = !1;
  else throw Error(ft + r + ": " + t);
  return this;
}
function Y2(e) {
  return new this(e).cos();
}
function K2(e) {
  return new this(e).cosh();
}
function Pg(e) {
  var n, r, t;
  function o(a) {
    var i, l, s, u = this;
    if (!(u instanceof o)) return new o(a);
    if (u.constructor = o, _c(a)) {
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
      return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), yg.test(a) ? va(u, a) : T2(u, a);
    if (s === "bigint")
      return a < 0 ? (a = -a, u.s = -1) : u.s = 1, va(u, a.toString());
    throw Error(ft + a);
  }
  if (o.prototype = ie, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.EUCLID = 9, o.config = o.set = j2, o.clone = Pg, o.isDecimal = _c, o.abs = B2, o.acos = I2, o.acosh = D2, o.add = M2, o.asin = A2, o.asinh = N2, o.atan = R2, o.atanh = V2, o.atan2 = L2, o.cbrt = F2, o.ceil = H2, o.clamp = U2, o.cos = Y2, o.cosh = K2, o.div = W2, o.exp = q2, o.floor = X2, o.hypot = G2, o.ln = Z2, o.log = J2, o.log10 = x2, o.log2 = Q2, o.max = _2, o.min = eP, o.mod = nP, o.mul = rP, o.pow = tP, o.random = oP, o.round = aP, o.sign = iP, o.sin = lP, o.sinh = sP, o.sqrt = uP, o.sub = dP, o.sum = cP, o.tan = fP, o.tanh = vP, o.trunc = pP, e === void 0 && (e = {}), e && e.defaults !== !0)
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
function W2(e, n) {
  return new this(e).div(n);
}
function q2(e) {
  return new this(e).exp();
}
function X2(e) {
  return De(e = new this(e), e.e + 1, 3);
}
function G2() {
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
function _c(e) {
  return e instanceof it || e && e.toStringTag === bg || !1;
}
function Z2(e) {
  return new this(e).ln();
}
function J2(e, n) {
  return new this(e).log(n);
}
function Q2(e) {
  return new this(e).log(2);
}
function x2(e) {
  return new this(e).log(10);
}
function _2() {
  return $g(this, arguments, -1);
}
function eP() {
  return $g(this, arguments, 1);
}
function nP(e, n) {
  return new this(e).mod(n);
}
function rP(e, n) {
  return new this(e).mul(n);
}
function tP(e, n) {
  return new this(e).pow(n);
}
function oP(e) {
  var n, r, t, o, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : dr(e, 1, gt), t = Math.ceil(e / Me), this.crypto) if (crypto.getRandomValues)
    for (n = crypto.getRandomValues(new Uint32Array(t)); a < t; )
      o = n[a], o >= 429e7 ? n[a] = crypto.getRandomValues(/* @__PURE__ */ new Uint32Array(1))[0] : l[a++] = o % 1e7;
  else if (crypto.randomBytes) {
    for (n = crypto.randomBytes(t *= 4); a < t; )
      o = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), o >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(o % 1e7), a += 4);
    a = t / 4;
  } else throw Error(hg);
  else for (; a < t; ) l[a++] = Math.random() * 1e7 | 0;
  for (t = l[--a], e %= Me, t && e && (o = An(10, Me - e), l[a] = (t / o | 0) * o); l[a] === 0; a--) l.pop();
  if (a < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= Me) l.shift();
    for (t = 1, o = l[0]; o >= 10; o /= 10) t++;
    t < Me && (r -= Me - t);
  }
  return i.e = r, i.d = l, i;
}
function aP(e) {
  return De(e = new this(e), e.e + 1, this.rounding);
}
function iP(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function lP(e) {
  return new this(e).sin();
}
function sP(e) {
  return new this(e).sinh();
}
function uP(e) {
  return new this(e).sqrt();
}
function dP(e, n) {
  return new this(e).sub(n);
}
function cP() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (He = !1; r.s && ++e < n.length; ) r = r.plus(n[e]);
  return He = !0, De(r, this.precision, this.rounding);
}
function fP(e) {
  return new this(e).tan();
}
function vP(e) {
  return new this(e).tanh();
}
function pP(e) {
  return De(e = new this(e), e.e + 1, 1);
}
ie[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = ie.toString;
ie[Symbol.toStringTag] = "Decimal";
var it = ie.constructor = Pg(Ms);
Ca = new it(Ca);
Pa = new it(Pa);
var Og = {
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
}, ef = 100, nf = 600, { name: mP, n: gP, classes: hP } = oe("counter"), bP = [
  "inputmode",
  "readonly",
  "disabled"
];
function yP(e, n) {
  const r = x("var-icon"), t = x("var-button"), o = x("var-form-details");
  return b(), k("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [L("div", Xe({
    class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
    style: { background: e.color }
  }, e.$attrs), [
    U(t, {
      class: p(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
      style: Q({
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
      default: se(() => [U(r, { name: "minus" })]),
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
      class: p(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
      style: Q({
        width: e.toSizeUnit(e.inputWidth),
        fontSize: e.toSizeUnit(e.inputTextSize)
      }),
      inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
      readonly: e.readonly || e.formReadonly,
      disabled: e.disabled || e.formDisabled || e.disableInput,
      onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
    }, null, 46, bP), [[Xv, e.inputValue]]),
    U(t, {
      class: p(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
      style: Q({
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
      default: se(() => [U(r, { name: "plus" })]),
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
  ], 16), U(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var zg = te({
  name: mP,
  components: {
    VarButton: Jn,
    VarIcon: Je,
    VarFormDetails: Hn
  },
  directives: { Ripple: vn },
  inheritAttrs: !1,
  props: Og,
  setup(e) {
    const n = P(""), { bindForm: r, form: t } = Kn(), { errorMessage: o, validateWithTrigger: a, validate: i, resetValidation: l } = xn(), { readonly: s, disabled: u } = t ?? {}, d = S(() => {
      const { max: I, modelValue: j } = e;
      return I != null && Z(j) >= Z(I);
    }), c = S(() => {
      const { min: I, modelValue: j } = e;
      return I != null && Z(j) <= Z(I);
    });
    let f, v, g, h;
    C(r, {
      reset: $,
      validate: m,
      resetValidation: l
    }), ge(() => e.modelValue, (I) => {
      N(w(String(I))), C(e.onChange, Z(I));
    }), N(w(String(e.modelValue)));
    function m() {
      return i(e.rules, e.modelValue);
    }
    function y(I) {
      Ne(() => {
        const { validateTrigger: j, rules: W, modelValue: G } = e;
        a(j, I, W, G);
      });
    }
    function $() {
      const { min: I } = e;
      C(e["onUpdate:modelValue"], I != null ? Z(I) : 0), l();
    }
    function w(I) {
      const { decimalLength: j, max: W, min: G } = e;
      let ce = Z(I);
      return W != null && ce > Z(W) && (ce = Z(W)), G != null && ce < Z(G) && (ce = Z(G)), I = String(ce), j != null && (I = ce.toFixed(Z(j))), I;
    }
    function z(I) {
      const { lazyChange: j, onBeforeChange: W } = e, { value: G } = I.target, ce = w(G);
      j ? C(W, Z(ce), M) : N(ce), y("onInputChange");
    }
    function T() {
      const { disabled: I, readonly: j, disableDecrement: W, decrementButton: G, lazyChange: ce, step: me, modelValue: de, onDecrement: J, onBeforeChange: ne } = e;
      if (u?.value || s?.value || I || j || W || !G || c.value) return;
      const pe = w(new it(Z(de)).minus(new it(Z(me))).toString()), Oe = Z(pe);
      C(J, Oe), ce ? C(ne, Oe, M) : (N(pe), y("onDecrement"));
    }
    function O() {
      const { disabled: I, readonly: j, disableIncrement: W, incrementButton: G, lazyChange: ce, step: me, modelValue: de, onIncrement: J, onBeforeChange: ne } = e;
      if (u?.value || s?.value || I || j || W || !G || d.value) return;
      const pe = w(new it(Z(de)).plus(new it(Z(me))).toString()), Oe = Z(pe);
      C(J, Oe), ce ? C(ne, Oe, M) : (N(pe), y("onIncrement"));
    }
    function R() {
      const { press: I, lazyChange: j } = e;
      !I || j || (h = window.setTimeout(() => {
        B();
      }, nf));
    }
    function H() {
      const { press: I, lazyChange: j } = e;
      !I || j || (g = window.setTimeout(() => {
        E();
      }, nf));
    }
    function A() {
      v && clearTimeout(v), h && clearTimeout(h);
    }
    function D() {
      f && clearTimeout(f), g && clearTimeout(g);
    }
    function E() {
      f = window.setTimeout(() => {
        O(), E();
      }, ef);
    }
    function B() {
      v = window.setTimeout(() => {
        T(), B();
      }, ef);
    }
    function N(I) {
      n.value = I;
      const j = Z(I);
      C(e["onUpdate:modelValue"], j);
    }
    function M(I) {
      N(w(String(I))), y("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: o,
      formDisabled: u,
      formReadonly: s,
      isMax: d,
      isMin: c,
      n: gP,
      classes: hP,
      formatElevation: On,
      validate: m,
      reset: $,
      resetValidation: l,
      handleChange: z,
      decrement: T,
      increment: O,
      pressDecrement: R,
      pressIncrement: H,
      releaseDecrement: A,
      releaseIncrement: D,
      toSizeUnit: Te,
      toNumber: Z
    };
  }
});
zg.render = yP;
var Ei = zg;
ue(Ei);
fe(Ei, Og);
var vN = Ei, Rs = Ei, Tg = {
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
}, { name: wP, n: kP, classes: $P } = oe("pagination"), SP = ["item-mode", "onClick"];
function CP(e, n) {
  const r = x("var-icon"), t = x("var-input"), o = x("var-menu-option"), a = x("var-menu-select"), i = _e("ripple");
  return b(), k("ul", { class: p(e.n()) }, [
    Ke((b(), k("li", {
      class: p(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [
        e.simple,
        e.n("item--simple"),
        e.formatElevation(e.elevation, 2)
      ])),
      onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
    }, [F(e.$slots, "prev", {}, () => [U(r, { name: "chevron-left" })])], 2)), [[i, { disabled: e.current <= 1 || e.disabled }]]),
    e.simple ? (b(), k("li", {
      key: 0,
      class: p(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
    }, [U(t, {
      modelValue: e.simpleCurrentValue,
      "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
      "var-pagination-cover": "",
      variant: "standard",
      hint: !1,
      disabled: e.disabled,
      onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
      onKeydown: n[3] || (n[3] = wd((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
    }, null, 8, ["modelValue", "disabled"]), L("span", null, [Le(" / " + ve(e.pageCount) + " ", 1), L("div", { class: p(e.n("simple-line")) }, null, 2)])], 2)) : (b(!0), k(Ie, { key: 1 }, Ye(e.pageList, (l, s) => Ke((b(), k("li", {
      key: s,
      "item-mode": e.getMode(l, s),
      class: p(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
      onClick: (u) => e.clickItem(l, s)
    }, [Le(ve(l), 1)], 10, SP)), [[i, { disabled: e.disabled }]])), 128)),
    Ke((b(), k("li", {
      class: p(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [
        e.simple,
        e.n("item--simple"),
        e.formatElevation(e.elevation, 2)
      ])),
      onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
    }, [F(e.$slots, "next", {}, () => [U(r, { name: "chevron-right" })])], 2)), [[i, { disabled: e.current >= e.pageCount || e.disabled }]]),
    e.showSizeChanger ? (b(), ke(a, {
      key: 2,
      modelValue: e.size,
      "onUpdate:modelValue": n[5] || (n[5] = (l) => e.size = l),
      placement: "cover-top",
      disabled: e.disabled
    }, {
      options: se(() => [(b(!0), k(Ie, null, Ye(e.sizeOption, (l, s) => (b(), ke(o, {
        key: s,
        value: l,
        onClick: e.clickSize
      }, {
        default: se(() => [Le(ve(l) + ve((e.pt ? e.pt : e.t)("paginationItem")) + " / " + ve((e.pt ? e.pt : e.t)("paginationPage")), 1)]),
        _: 2
      }, 1032, ["value", "onClick"]))), 128))]),
      default: se(() => [L("li", { class: p(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")])) }, [L("div", { class: p(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])) }, [L("span", null, ve(e.size) + ve((e.pt ? e.pt : e.t)("paginationItem")) + " / " + ve((e.pt ? e.pt : e.t)("paginationPage")), 1), U(r, {
        class: p(e.n("size--open-icon")),
        "var-pagination-cover": "",
        name: "menu-down"
      }, null, 8, ["class"])], 2)], 2)]),
      _: 1
    }, 8, ["modelValue", "disabled"])) : X("v-if", !0),
    e.showQuickJumper && !e.simple ? (b(), k("li", {
      key: 3,
      class: p(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
    }, [Le(ve((e.pt ? e.pt : e.t)("paginationJump")) + " ", 1), U(t, {
      modelValue: e.quickJumperValue,
      "onUpdate:modelValue": n[6] || (n[6] = (l) => e.quickJumperValue = l),
      disabled: e.disabled,
      hint: !1,
      variant: "standard",
      "var-pagination-cover": "",
      onBlur: n[7] || (n[7] = (l) => e.setPage("quick", e.quickJumperValue, l)),
      onKeydown: n[8] || (n[8] = wd((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
    }, null, 8, ["modelValue", "disabled"])], 2)) : X("v-if", !0),
    e.totalText ? (b(), k("li", {
      key: 4,
      class: p(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
    }, ve(e.totalText), 3)) : X("v-if", !0)
  ], 2);
}
var Eg = te({
  name: wP,
  components: {
    VarMenuSelect: Yt,
    VarMenuOption: Ft,
    VarIcon: Je,
    VarInput: Lt
  },
  directives: { Ripple: vn },
  props: Tg,
  setup(e) {
    const n = P(""), r = P("1"), t = P(!1), o = P(!1), a = P(Z(e.current) || 1), i = P(Z(e.size) || 10), l = P([]), s = S(() => Math.ceil(e.maxPagerCount / 2)), u = S(() => Math.ceil(Z(e.total) / Z(i.value))), d = S(() => [i.value * (a.value - 1) + 1, Math.min(i.value * a.value, Z(e.total))]), c = S(() => e.showTotal ? e.showTotal(Z(e.total), d.value) : ""), { t: f } = kr();
    ge([() => e.current, () => e.size], ([w, z]) => {
      a.value = Z(w) || 1, i.value = Z(z || 10);
    }), ge([
      a,
      i,
      u
    ], ([w, z, T], [O, R]) => {
      let H = [];
      const { maxPagerCount: A, total: D, onChange: E } = e, B = Math.ceil(Z(D) / Z(R)), N = T - (A - s.value) - 1;
      if (r.value = `${w}`, T - 2 > A) {
        if (O === void 0 || T !== B) for (let M = 2; M < A + 2; M++) H.push(M);
        if (w <= A && w < N) {
          H = [];
          for (let M = 1; M < A + 1; M++) H.push(M + 1);
          t.value = !0, o.value = !1;
        }
        if (w > A && w < N) {
          H = [];
          for (let M = 1; M < A + 1; M++) H.push(w + M - s.value);
          t.value = w === 2 && A === 1, o.value = !1;
        }
        if (w >= N) {
          H = [];
          for (let M = 1; M < A + 1; M++) H.push(T - (A - M) - 1);
          t.value = !1, o.value = !0;
        }
        H = [
          1,
          "...",
          ...H,
          "...",
          T
        ];
      } else for (let M = 1; M <= T; M++) H.push(M);
      l.value = H, O != null && T > 0 && C(E, w, z), C(e["onUpdate:current"], w), C(e["onUpdate:size"], z);
    }, { immediate: !0 });
    function v(w, z) {
      return tr(w) ? !1 : z === 1 ? t.value : o.value;
    }
    function g(w, z) {
      return tr(w) ? "basic" : z === 1 ? "head" : "tail";
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
        tr(w) && (a.value = w);
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
      n: kP,
      classes: $P,
      getMode: g,
      isHideEllipsis: v,
      clickItem: h,
      clickSize: m,
      setPage: $,
      toNumber: Z,
      formatElevation: On
    };
  }
});
Eg.render = CP;
var Bi = Eg;
ue(Bi);
fe(Bi, Tg);
var pN = Bi, za = Bi, Bg = {
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
}, Ig = /* @__PURE__ */ Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function PP() {
  const { bindChildren: e, childProviders: n, length: r } = In(Ig);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function OP() {
  const { bindParent: e, parentProvider: n, index: r } = Bn(Ig);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var zP = (e, n, r) => new Promise((t, o) => {
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
}), { name: TP, n: EP, classes: BP } = oe("radio"), IP = [
  "aria-checked",
  "aria-disabled",
  "tabindex"
];
function DP(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), o = x("var-form-details"), a = _e("ripple"), i = _e("hover");
  return b(), k("div", { class: p(e.n("wrap")) }, [L("div", Xe({
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
    class: p(e.classes(e.n("action"), [
      e.checked,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: Q({ color: e.checked ? e.checkedColor : e.uncheckedColor })
  }, [e.checked ? (b(), k("span", {
    key: 0,
    class: p(e.n("icon")),
    style: Q({ fontSize: e.toSizeUnit(e.iconSize) })
  }, [F(e.$slots, "checked-icon", {}, () => [U(r, { name: "radio-marked" })])], 6)) : (b(), k("span", {
    key: 1,
    class: p(e.n("icon")),
    style: Q({ fontSize: e.toSizeUnit(e.iconSize) })
  }, [F(e.$slots, "unchecked-icon", {}, () => [U(r, { name: "radio-blank" })])], 6)), U(t, {
    hovering: !e.disabled && !e.formDisabled && e.hovering,
    focusing: !e.disabled && !e.formDisabled && e.isFocusing
  }, null, 8, ["hovering", "focusing"])], 6)), [[a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    i,
    e.handleHovering,
    "desktop"
  ]]), e.$slots.default ? (b(), k("div", {
    key: 0,
    class: p(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...l) => e.handleTextClick && e.handleTextClick(...l))
  }, [F(e.$slots, "default", { checked: e.checked })], 2)) : X("v-if", !0)], 16, IP), U(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Dg = te({
  name: TP,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarIcon: Je,
    VarFormDetails: Hn,
    VarHoverOverlay: Zn
  },
  inheritAttrs: !1,
  props: Bg,
  setup(e) {
    const n = P(), r = P(!1), t = yn(e, "modelValue"), o = S(() => t.value === e.checkedValue), { radioGroup: a, bindRadioGroup: i } = OP(), { hovering: l, handleHovering: s } = ur(), { form: u, bindForm: d } = Kn(), c = S(() => {
      const E = u?.disabled.value || e.disabled, B = o.value, N = a?.hasChecked.value;
      if (e.tabindex != null) return e.tabindex;
      if (!E)
        return a && N && !B ? "-1" : "0";
    }), { errorMessage: f, validateWithTrigger: v, validate: g, resetValidation: h } = xn(), m = {
      sync: R,
      validate: A,
      resetValidation: h,
      reset: H,
      isFocusing: S(() => r.value),
      move() {
        n.value.focus(), n.value.click();
      },
      moveable() {
        return !u?.disabled.value && !e.disabled && !u?.readonly.value && !e.readonly;
      }
    };
    C(i, m), C(d, m), xe(() => window, "keydown", y), xe(() => window, "keyup", $);
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
        const { validateTrigger: B, rules: N, modelValue: M } = e;
        v(B, E, N, M);
      });
    }
    function z(E) {
      return zP(this, null, function* () {
        const { checkedValue: B, onChange: N } = e;
        a && t.value === B || (t.value = E, a?.onToggle(B), yield Ne(), C(N, E), w("onChange"));
      });
    }
    function T(E) {
      const { disabled: B, readonly: N, uncheckedValue: M, checkedValue: I, onClick: j } = e;
      u?.disabled.value || B || (C(j, E), !(u?.readonly.value || N) && z(o.value ? M : I));
    }
    function O() {
      n.value.focus();
    }
    function R(E) {
      const { checkedValue: B, uncheckedValue: N } = e, M = E === B;
      return t.value = M ? B : N, M;
    }
    function H() {
      t.value = e.uncheckedValue, h();
    }
    function A() {
      return g(e.rules, e.modelValue);
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
      n: EP,
      classes: BP,
      handleClick: T,
      handleTextClick: O,
      toSizeUnit: Te,
      toggle: D,
      reset: H,
      validate: A,
      resetValidation: h
    };
  }
});
Dg.render = DP;
var Ii = Dg;
ue(Ii);
fe(Ii, Bg);
var mN = Ii, So = Ii, { n: MP, classes: AP } = oe("data-table"), NP = ["colspan", "rowspan"], RP = ["disabled"];
function VP(e, n) {
  const r = x("var-checkbox"), t = x("var-radio"), o = x("var-icon"), a = x("maybe-v-node");
  return b(), k("td", Xe({
    class: e.classes(e.n("cell"), e.n("body-cell"), [e.isSelectionColumn(e.cell.column), e.n("selection-cell")], [e.isExpandColumn(e.cell.column), e.n("expand-cell")], [e.cell.column.fixed, e.n("fixed-cell")], [e.shouldRenderLeftFixedShadow(e.cell.columnIndex), e.n("fixed-cell--shadow-right")], [e.shouldRenderRightFixedShadow(e.cell.columnIndex), e.n("fixed-cell--shadow-left")]),
    style: e.style
  }, e.getCellProps(e.bodyRow, e.cell.column), {
    colspan: e.cell.colSpan,
    rowspan: e.cell.rowSpan
  }), [e.isSelectionColumn(e.cell.column) && e.isMultipleSelectionColumn(e.cell.column) ? (b(), ke(r, {
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
  ])) : e.isSelectionColumn(e.cell.column) ? (b(), ke(t, {
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
    class: p(e.classes(e.n("expand-trigger"), [e.bodyRow.expanded, e.n("expand-trigger--expanded")])),
    disabled: !e.isRowExpandable(e.bodyRow, e.cell.column),
    onClick: n[2] || (n[2] = (i) => e.toggleRowExpanded(e.bodyRow))
  }, [U(o, {
    "var-data-table-cover": "",
    name: e.bodyRow.expanded ? "chevron-down" : "chevron-right"
  }, null, 8, ["name"])], 10, RP)) : e.tree && e.cell.treeLevel != null ? (b(), k("div", {
    key: 3,
    class: p(e.n("tree-cell")),
    style: Q(e.treeStyle)
  }, [e.cell.treeExpandable ? (b(), k("button", {
    key: 0,
    type: "button",
    tabindex: "-1",
    class: p(e.classes(e.n("tree-trigger"), [e.cell.treeExpanded, e.n("tree-trigger--expanded")])),
    onClick: n[3] || (n[3] = (i) => e.toggleTreeRowExpanded(e.bodyRow))
  }, [U(o, {
    "var-data-table-cover": "",
    name: e.cell.treeExpanded ? "chevron-down" : "chevron-right"
  }, null, 8, ["name"])], 2)) : (b(), k("span", {
    key: 1,
    class: p(e.n("tree-indent"))
  }, null, 2)), U(a, {
    is: e.renderCell(e.bodyRow, e.cell.column),
    tag: "div"
  }, null, 8, ["is"])], 6)) : (b(), ke(a, {
    key: 4,
    is: e.renderCell(e.bodyRow, e.cell.column),
    tag: "div"
  }, null, 8, ["is"]))], 16, NP);
}
var Mg = te({
  name: "DataTableBodyCell",
  components: {
    MaybeVNode: lr,
    VarCheckbox: ct,
    VarIcon: Je,
    VarRadio: So
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
    const n = S(() => {
      var r;
      return { paddingInlineStart: `${((r = e.cell.treeLevel) != null ? r : 0) * 20}px` };
    });
    return {
      n: MP,
      classes: AP,
      treeStyle: n
    };
  }
});
Mg.render = VP;
var LP = Mg, { n: FP, classes: HP } = oe("data-table"), UP = ["colspan", "rowspan"];
function jP(e, n) {
  const r = x("var-checkbox"), t = x("maybe-v-node"), o = x("var-icon");
  return b(), k("th", {
    class: p(e.classes(e.n("cell"), e.n("header-cell"), [e.isSelectionColumn(e.headerCell.column), e.n("selection-cell")], [e.isExpandColumn(e.headerCell.column), e.n("expand-cell")], [e.headerCell.fixed, e.n("fixed-cell")], [e.shouldRenderLeftFixedShadow(e.headerCell.endLeafColumnIndex), e.n("fixed-cell--shadow-right")], [e.shouldRenderRightFixedShadow(e.headerCell.startLeafColumnIndex), e.n("fixed-cell--shadow-left")])),
    style: Q(e.style),
    colspan: e.headerCell.colSpan,
    rowspan: e.headerCell.rowSpan
  }, [e.isSelectionColumn(e.headerCell.column) && e.isMultipleSelectionColumn(e.headerCell.column) ? (b(), ke(r, {
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
    class: p(e.classes(e.n("sort-trigger"), e.n(`sort-trigger--align-${e.headerAlign}`), [e.columnSorterOrder, e.n("sort-trigger--active")])),
    style: Q(e.sortTriggerStyle),
    onClick: n[0] || (n[0] = (a) => e.toggleColumnSorter(e.headerCell.column.key))
  }, [L("span", { class: p(e.n("sort-trigger-text")) }, [U(t, { is: e.renderHeaderTitle() }, null, 8, ["is"])], 2), L("span", {
    class: p(e.n("sort-trigger-icon")),
    "aria-hidden": "true"
  }, [U(o, {
    name: "chevron-up",
    size: 18,
    "var-data-table-cover": "",
    class: p(e.classes(e.n("sort-trigger-icon-up"), [e.columnSorterOrder === "asc", e.n("sort-trigger-icon--active")]))
  }, null, 8, ["class"]), U(o, {
    name: "chevron-down",
    size: 18,
    "var-data-table-cover": "",
    class: p(e.classes(e.n("sort-trigger-icon-down"), [e.columnSorterOrder === "desc", e.n("sort-trigger-icon--active")]))
  }, null, 8, ["class"])], 2)], 6)) : (b(), ke(t, {
    key: 2,
    is: e.renderHeaderTitle()
  }, null, 8, ["is"])), e.isColumnResizable(e.headerCell.column) && e.headerCell.colSpan == null && !e.isLastHeaderColumn(e.headerCell.startLeafColumnIndex) ? (b(), k("button", {
    key: 3,
    type: "button",
    tabindex: "-1",
    class: p(e.n("resize-trigger")),
    onClick: n[1] || (n[1] = Nn(() => {
    }, ["stop"])),
    onMousedown: n[2] || (n[2] = (a) => e.startColumnResize(a, e.headerCell))
  }, null, 34)) : X("v-if", !0)], 14, UP);
}
var Ag = te({
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
    const n = S(() => {
      if (e.isColumnSortable(e.headerCell.column))
        return e.getColumnSorterOrder(e.headerCell.column.key);
    }), r = S(() => {
      var a, i;
      return (i = (a = e.headerCell.column.titleAlign) != null ? a : e.headerCell.column.align) != null ? i : "left";
    }), t = S(() => e.headerCell.colSpan != null && e.headerCell.colSpan > 1 ? {} : {
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
      n: FP,
      classes: HP,
      columnSorterOrder: n,
      renderHeaderTitle: o,
      headerAlign: r,
      sortTriggerStyle: t
    };
  }
});
Ag.render = jP;
var YP = Ag, Ng = {
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
function Rg(e, n) {
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
function Co(e, n, r) {
  const t = e == null ? 1 : xl(ir(e, r));
  return t <= 0 ? 0 : hn(t, 1, n);
}
var KP = Object.defineProperty, WP = Object.defineProperties, qP = Object.getOwnPropertyDescriptors, rf = Object.getOwnPropertySymbols, XP = Object.prototype.hasOwnProperty, GP = Object.prototype.propertyIsEnumerable, tf = (e, n, r) => n in e ? KP(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, ZP = (e, n) => {
  for (var r in n || (n = {})) XP.call(n, r) && tf(e, r, n[r]);
  if (rf)
    for (var r of rf(n)) GP.call(n, r) && tf(e, r, n[r]);
  return e;
}, JP = (e, n) => WP(e, qP(n));
function QP({ columns: e, sourceRows: n, tree: r, collapsedTreeRowKeys: t, expandedRowKeySet: o, firstTreeColumnIndex: a, getRowKey: i, getTreeChildren: l }) {
  const s = S(() => r() ? v(n(), !0) : f(n())), u = S(() => r() ? v(n(), !1) : s.value), d = S(() => {
    const g = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
    for (const y of s.value)
      g.set(y.key, y), h.set(y.row, y), y.parentKey != null && m.set(y.key, y.parentKey);
    return {
      rowByKey: g,
      rowByObject: h,
      parentKeyByChild: m
    };
  }), c = S(() => {
    const g = e(), h = u.value.length, m = g.length, y = Rg(h, m);
    return u.value.map(($, w) => {
      const z = [];
      return g.forEach((T, O) => {
        var R, H;
        if (y.isCovered(w, O)) return;
        const A = {
          row: $.row,
          rowIndex: $.rowIndex,
          column: T
        }, D = m - O, E = h - w, B = Co(T.colSpan, D, A), N = Co(T.rowSpan, E, A);
        if (B === 0 || N === 0) return;
        y.cover(w, O, N, B);
        const M = O === a.value;
        z.push({
          key: `${(H = (R = T.key) != null ? R : T.type) != null ? H : O}-${w}-${O}`,
          columnIndex: O,
          column: T,
          treeLevel: M ? $.level : void 0,
          treeExpandable: M ? $.expandable : void 0,
          treeExpanded: M ? $.treeExpanded : void 0,
          colSpan: B > 1 ? B : void 0,
          rowSpan: N > 1 ? N : void 0
        });
      }), JP(ZP({}, $), {
        expanded: o.value.has($.key),
        cells: z
      });
    });
  });
  function f(g) {
    return g.map((h, m) => ({
      key: i(h, m),
      row: h,
      rowIndex: m,
      level: 0,
      expandable: !1,
      treeExpanded: !0
    }));
  }
  function v(g, h) {
    const m = [];
    let y = 0;
    function $(w, z, T, O) {
      for (const R of w) {
        const H = y;
        y += 1;
        const A = i(R, H), D = l(R), E = r() && D.length > 0, B = !E || !t.value.has(A);
        (h || O) && m.push({
          key: A,
          row: R,
          rowIndex: H,
          level: z,
          parentKey: T,
          expandable: E,
          treeExpanded: B
        }), $(D, z + 1, A, O && B);
      }
    }
    return $(g, 0, void 0, !0), m;
  }
  return {
    allFlatRows: s,
    visibleFlatRows: u,
    treeRowMeta: d,
    bodyRows: c
  };
}
function xP({ columns: e, resolvedColumnWidths: n }) {
  const r = S(() => d("left")), t = S(() => d("right")), o = S(() => l("left")), a = S(() => l("right"));
  function i(c, f) {
    var v, g;
    return c === "left" ? {
      left: `${(v = o.value[f]) != null ? v : 0}px`,
      position: "sticky",
      zIndex: 2
    } : c === "right" ? {
      right: `${(g = a.value[f]) != null ? g : 0}px`,
      position: "sticky",
      zIndex: 2
    } : {};
  }
  function l(c) {
    const f = e(), v = n(), g = Array(f.length).fill(void 0);
    let h = 0;
    if (c === "left") {
      for (let m = 0; m < f.length; m += 1)
        f[m].fixed === "left" && (g[m] = h, h += v[m]);
      return g;
    }
    for (let m = f.length - 1; m >= 0; m -= 1)
      f[m].fixed === "right" && (g[m] = h, h += v[m]);
    return g;
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
var _P = Object.defineProperty, e4 = Object.defineProperties, n4 = Object.getOwnPropertyDescriptors, of = Object.getOwnPropertySymbols, r4 = Object.prototype.hasOwnProperty, t4 = Object.prototype.propertyIsEnumerable, af = (e, n, r) => n in e ? _P(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, o4 = (e, n) => {
  for (var r in n || (n = {})) r4.call(n, r) && af(e, r, n[r]);
  if (of)
    for (var r of of(n)) t4.call(n, r) && af(e, r, n[r]);
  return e;
}, a4 = (e, n) => e4(e, n4(n)), i4 = 52;
function l4({ columns: e, isSelectionColumn: n, isExpandColumn: r }) {
  const t = P({});
  let o;
  const a = S(() => e().map((y, $) => {
    var w;
    return (w = f(y, $)) != null ? w : 0;
  })), i = S(() => e().some((y, $) => f(y, $) != null)), l = S(() => a.value.reduce((y, $) => y + $, 0));
  ge(e, () => {
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
      return w.width = Te(z), w.minWidth = Te(z), w.maxWidth = Te(z), w;
    const T = f(y, $);
    T != null && (w.width = Te(T));
    const O = g(y);
    O != null ? w.minWidth = Te(O) : T != null && (w.minWidth = Te(T));
    const R = h(y);
    return R != null && (w.maxWidth = Te(R)), w;
  }
  function d(y, $) {
    var w;
    if (!s($.column)) return;
    y.preventDefault(), y.stopPropagation();
    const z = (w = y.currentTarget) == null ? void 0 : w.closest("th");
    if (!z) return;
    o?.();
    const T = y.clientX, O = z.getBoundingClientRect().width, R = v($.column, $.startLeafColumnIndex);
    document.addEventListener("mousemove", H), document.addEventListener("mouseup", A), o = D;
    function H(E) {
      const B = m($.column, O + E.clientX - T);
      t.value = a4(o4({}, t.value), { [R]: B });
    }
    function A() {
      D();
    }
    function D() {
      document.removeEventListener("mousemove", H), document.removeEventListener("mouseup", A), o = void 0;
    }
  }
  function c(y, $) {
    return t.value[v(y, $)];
  }
  function f(y, $) {
    var w;
    const z = c(y, $);
    if (z != null) return z;
    const T = (w = y.width) != null ? w : n(y) || r(y) ? i4 : void 0;
    if (T != null) return m(y, fn(T));
    const O = g(y);
    if (O != null) return O;
  }
  function v(y, $) {
    var w, z;
    return `${(z = (w = y.key) != null ? w : y.type) != null ? z : "column"}-${$}`;
  }
  function g(y) {
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
    return hn($, (w = g(y)) != null ? w : 0, (z = h(y)) != null ? z : Number.POSITIVE_INFINITY);
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
function s4(e = []) {
  const n = P(), r = P(0), t = P(0);
  ge(e, o, {
    immediate: !0,
    flush: "post"
  }), ep(n, o), wr(o);
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
function u4({ columns: e, expandedRowKeys: n, isExpandColumn: r }) {
  const t = S(() => new Set(n.value)), o = S(() => e().find(r));
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
function d4({ columns: e, sourceRows: n, summary: r }) {
  return { footRows: S(() => {
    const t = r();
    if (!t) return [];
    const o = Wr(t({ data: n() })), a = e(), i = Rg(o.length, a.length);
    return o.map((l, s) => a.flatMap((u, d) => {
      var c, f;
      if (i.isCovered(s, d)) return [];
      const v = (f = (c = u.key) != null ? c : u.type) != null ? f : String(d), g = l[v], h = a.length - d, m = o.length - s, y = Co(g?.colSpan, h), $ = Co(g?.rowSpan, m);
      return y === 0 || $ === 0 ? [] : (i.cover(s, d, $, y), [{
        key: `${s}-${v}`,
        columnIndex: d,
        column: u,
        value: g?.value,
        colSpan: y > 1 ? y : void 0,
        rowSpan: $ > 1 ? $ : void 0
      }]);
    }));
  }) };
}
function c4({ columns: e }) {
  const n = S(() => o(e())), r = S(() => {
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
        const H = g(y, O, m, w, z);
        H > 1 && (z = c - 1 + H), T += H;
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
    function g(h, m, y, $, w) {
      if (c < w)
        return c += 1, 0;
      const z = c, T = $ - z + 1, O = Co(m.titleColSpan, T);
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
var f4 = Object.defineProperty, v4 = Object.defineProperties, p4 = Object.getOwnPropertyDescriptors, lf = Object.getOwnPropertySymbols, m4 = Object.prototype.hasOwnProperty, g4 = Object.prototype.propertyIsEnumerable, sf = (e, n, r) => n in e ? f4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ul = (e, n) => {
  for (var r in n || (n = {})) m4.call(n, r) && sf(e, r, n[r]);
  if (lf)
    for (var r of lf(n)) g4.call(n, r) && sf(e, r, n[r]);
  return e;
}, uf = (e, n) => v4(e, p4(n)), df = {
  simple: !1,
  elevation: !0,
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
function h4({ pagination: e, remote: n, loading: r, plain: t, page: o, pageSize: a, total: i, data: l, onUpdatePage: s }) {
  const u = S(() => {
    var h;
    const m = e();
    return Do(m) ? uf(Ul({}, df), {
      elevation: t() ? 1 : !0,
      disabled: r()
    }) : uf(Ul(Ul({}, df), m), {
      elevation: (h = m.elevation) != null ? h : t() ? 1 : !0,
      disabled: r() || m.disabled === !0
    });
  }), d = S(() => {
    var h;
    return e() === !1 ? l().length : n() ? (h = i()) != null ? h : 0 : l().length;
  }), c = S(() => e() !== !1 && d.value > 0), f = S(() => c.value ? hn(Math.ceil(d.value / a()), 1, Number.MAX_SAFE_INTEGER) : 1), v = S(() => c.value ? hn(o(), 1, f.value) : 1), g = S(() => {
    if (!c.value || n()) return l();
    const h = (v.value - 1) * a();
    return l().slice(h, h + a());
  });
  return ge([
    e,
    n,
    i,
    o,
    v
  ], ([h, m, y, $, w]) => {
    h === !1 || m && y == null || $ === w || C(s?.(), w);
  }, { immediate: !0 }), {
    paginationProps: u,
    paginationTotal: d,
    showPagination: c,
    normalizedPage: v,
    pagedData: g
  };
}
var b4 = Object.defineProperty, y4 = Object.defineProperties, w4 = Object.getOwnPropertyDescriptors, cf = Object.getOwnPropertySymbols, k4 = Object.prototype.hasOwnProperty, $4 = Object.prototype.propertyIsEnumerable, ff = (e, n, r) => n in e ? b4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, vf = (e, n) => {
  for (var r in n || (n = {})) k4.call(n, r) && ff(e, r, n[r]);
  if (cf)
    for (var r of cf(n)) $4.call(n, r) && ff(e, r, n[r]);
  return e;
}, pf = (e, n) => y4(e, w4(n));
function S4({ columns: e, tree: n, cascade: r, pagedData: t, allFlatRows: o, treeRowMeta: a, checkedRowKeys: i, isSelectionColumn: l, getTreeChildren: s }) {
  const u = S(() => e().find(l)), d = S(() => n() && r() && !!u.value && m(u.value)), c = S(() => new Set(i.value)), f = S(() => {
    const E = /* @__PURE__ */ new Map(), B = u.value;
    if (!B) return E;
    for (const M of t()) N(M);
    function N(M) {
      const I = a().rowByObject.get(M);
      if (!I) return {
        checked: !1,
        indeterminate: !1,
        selectable: !1
      };
      const j = s(M).map(N), W = $(M, I.rowIndex, B), G = c.value.has(I.key);
      if (!d.value || j.length === 0) {
        const ne = {
          checked: G,
          indeterminate: !1
        };
        return E.set(I.key, ne), pf(vf({}, ne), { selectable: W });
      }
      const ce = j.filter((ne) => ne.selectable), me = ce.length > 0 ? ce.every((ne) => ne.checked) : G, de = ce.some((ne) => ne.checked || ne.indeterminate), J = {
        checked: W ? me : !1,
        indeterminate: ce.length > 0 && !me && de
      };
      return E.set(I.key, J), pf(vf({}, J), { selectable: W || ce.length > 0 });
    }
    return E;
  }), v = S(() => {
    const E = u.value;
    return E ? o().filter((B) => $(B.row, B.rowIndex, E)) : [];
  }), g = S(() => v.value.length > 0 && v.value.every((E) => z(E.key))), h = S(() => v.value.some((E) => z(E.key) || T(E.key)) && !g.value);
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
    const M = new Set(i.value);
    if (d.value) {
      for (const I of H(E.row)) B ? M.add(I) : M.delete(I);
      D(M, E.key);
    } else B ? M.add(E.key) : M.delete(E.key);
    w([...M]);
  }
  function R(E) {
    const B = u.value;
    if (!B || !y(B) || !m(B)) return;
    const N = new Set(i.value);
    for (const M of v.value) E ? N.add(M.key) : N.delete(M.key);
    w([...N]);
  }
  function H(E) {
    const B = u.value, N = [];
    if (!B) return N;
    function M(I) {
      const j = a().rowByObject.get(I);
      if (j) {
        $(I, j.rowIndex, B) && N.push(j.key);
        for (const W of s(I)) M(W);
      }
    }
    return M(E), N;
  }
  function A(E, B) {
    const N = u.value, M = a().rowByObject.get(E);
    if (!N || !M) return !1;
    const I = $(E, M.rowIndex, N), j = s(E);
    return j.length ? I && j.every((W) => A(W, B)) : I ? B.has(M.key) : !0;
  }
  function D(E, B) {
    let N = a().parentKeyByChild.get(B);
    for (; N != null; ) {
      const M = a().rowByKey.get(N);
      if (!M) break;
      A(M.row, E) ? E.add(N) : E.delete(N), N = a().parentKeyByChild.get(N);
    }
  }
  return {
    currentSelectableRows: v,
    allCurrentRowsSelected: g,
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
var C4 = Object.defineProperty, P4 = Object.defineProperties, O4 = Object.getOwnPropertyDescriptors, mf = Object.getOwnPropertySymbols, z4 = Object.prototype.hasOwnProperty, T4 = Object.prototype.propertyIsEnumerable, gf = (e, n, r) => n in e ? C4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, E4 = (e, n) => {
  for (var r in n || (n = {})) z4.call(n, r) && gf(e, r, n[r]);
  if (mf)
    for (var r of mf(n)) T4.call(n, r) && gf(e, r, n[r]);
  return e;
}, B4 = (e, n) => P4(e, O4(n));
function I4({ sorters: e, sortMode: n, onUpdateSorters: r }) {
  const t = S(() => e());
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
      C(r(), s == null ? [{
        key: l,
        order: "asc"
      }] : s === "asc" ? [{
        key: l,
        order: "desc"
      }] : []);
      return;
    }
    if (s == null) {
      C(r(), [...t.value, {
        key: l,
        order: "asc"
      }]);
      return;
    }
    if (s === "asc") {
      C(r(), t.value.map((u) => u.key !== l ? u : B4(E4({}, u), { order: "desc" })));
      return;
    }
    C(r(), t.value.filter((u) => u.key !== l));
  }
  return {
    activeSorters: t,
    isColumnSortable: o,
    getColumnSorterOrder: a,
    toggleColumnSorter: i
  };
}
function D4({ tree: e, data: n, expandedTreeRowKeys: r, getRowKey: t, getTreeChildren: o }) {
  const a = S(() => new Set(r.value)), i = S(() => {
    if (!e()) return /* @__PURE__ */ new Set();
    const d = u(n()), c = /* @__PURE__ */ new Set();
    for (const f of d) a.value.has(f) || c.add(f);
    return c;
  });
  ge([n, e], () => {
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
    function v(g) {
      for (const h of g) {
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
var M4 = Object.defineProperty, A4 = Object.defineProperties, N4 = Object.getOwnPropertyDescriptors, hf = Object.getOwnPropertySymbols, R4 = Object.prototype.hasOwnProperty, V4 = Object.prototype.propertyIsEnumerable, bf = (e, n, r) => n in e ? M4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, yf = (e, n) => {
  for (var r in n || (n = {})) R4.call(n, r) && bf(e, r, n[r]);
  if (hf)
    for (var r of hf(n)) V4.call(n, r) && bf(e, r, n[r]);
  return e;
}, wf = (e, n) => A4(e, N4(n)), { name: L4, n: F4, classes: H4 } = oe("data-table"), U4 = { key: 0 }, j4 = ["colspan"], Y4 = { key: 1 }, K4 = ["colspan", "rowspan"];
function W4(e, n) {
  const r = x("data-table-header-cell"), t = x("data-table-body-cell"), o = x("maybe-v-node"), a = x("var-pagination"), i = x("var-loading");
  return b(), k("div", { class: p(e.classes(e.n(), [!e.plain, e.formatElevation(e.elevation, 1)], e.n("$--box"), [e.surface === "low", e.n("--surface-low")], [e.bordered, e.n("--bordered")], [e.cellBordered, e.n("--cell-bordered")], [e.plain, e.n("--plain")], [e.showPagination, e.n("--with-footer")], e.n(`--${e.size}`))) }, [U(i, { loading: e.loading }, Pr({
    default: se(() => [L("div", {
      ref: "container",
      class: p(e.classes(e.n("container"), e.n("$--scrollbar"))),
      style: Q(e.containerStyle),
      onScroll: n[0] || (n[0] = (...l) => e.handleContainerScroll && e.handleContainerScroll(...l))
    }, [e.columns.length ? (b(), k("table", {
      key: 0,
      class: p(e.n("table")),
      style: Q(e.tableStyle)
    }, [
      L("colgroup", null, [(b(!0), k(Ie, null, Ye(e.columns, (l, s) => {
        var u, d;
        return b(), k("col", {
          key: (d = (u = l.key) != null ? u : l.type) != null ? d : s,
          style: Q(e.getColStyle(l, s))
        }, null, 4);
      }), 128))]),
      L("thead", null, [(b(!0), k(Ie, null, Ye(e.headerRows, (l, s) => (b(), k("tr", {
        key: s,
        class: p(e.n("header-row"))
      }, [(b(!0), k(Ie, null, Ye(l, (u) => (b(), ke(r, {
        key: u.key,
        "header-cell": u,
        style: Q(e.getHeaderCellStyle(u)),
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
      e.bodyRows.length ? (b(), k("tbody", U4, [(b(!0), k(Ie, null, Ye(e.bodyRows, (l) => (b(), k(Ie, { key: l.key }, [L("tr", Xe({ class: e.classes(e.n("row"), e.getRowClass(l)) }, { ref_for: !0 }, e.getRowProps(l)), [(b(!0), k(Ie, null, Ye(l.cells, (s) => (b(), ke(t, {
        key: s.key,
        "body-row": l,
        cell: s,
        style: Q(e.getBodyCellStyle(s)),
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
        class: p(e.n("expanded-row"))
      }, [L("td", {
        class: p(e.classes(e.n("cell"), e.n("body-cell"), e.n("expanded-cell"))),
        colspan: e.columns.length
      }, [L("div", { class: p(e.n("expanded-content")) }, [U(o, {
        is: e.renderExpandedRow(l),
        tag: "div"
      }, null, 8, ["is"])], 2)], 10, j4)], 2)) : X("v-if", !0)], 64))), 128))])) : X("v-if", !0),
      e.footRows.length ? (b(), k("tfoot", Y4, [(b(!0), k(Ie, null, Ye(e.footRows, (l, s) => (b(), k("tr", {
        key: s,
        class: p(e.n("summary-row"))
      }, [(b(!0), k(Ie, null, Ye(l, (u) => (b(), k("td", {
        key: u.key,
        class: p(e.classes(e.n("cell"), e.n("summary-cell"), [u.column.fixed, e.n("fixed-cell")], [e.shouldRenderLeftFixedShadow(u.columnIndex), e.n("fixed-cell--shadow-right")], [e.shouldRenderRightFixedShadow(u.columnIndex), e.n("fixed-cell--shadow-left")])),
        style: Q(e.getBodyCellStyle(u)),
        colspan: u.colSpan,
        rowspan: u.rowSpan
      }, [U(o, {
        is: u.value,
        tag: "div"
      }, null, 8, ["is"])], 14, K4))), 128))], 2))), 128))])) : X("v-if", !0)
    ], 6)) : X("v-if", !0), e.bodyRows.length ? X("v-if", !0) : (b(), k("div", {
      key: 1,
      class: p(e.n("empty"))
    }, [F(e.$slots, "empty", {}, () => [Le(ve((e.pt ? e.pt : e.t)("dataTableEmptyText")), 1)])], 2))], 38), e.showPagination ? (b(), k("div", {
      key: 0,
      class: p(e.n("footer"))
    }, [F(e.$slots, "footer-prefix"), U(a, {
      "var-data-table-cover": "",
      current: e.normalizedPage,
      size: e.pageSize,
      total: e.paginationTotal,
      simple: e.paginationProps.simple,
      elevation: e.paginationProps.elevation,
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
      "elevation",
      "disabled",
      "show-size-changer",
      "show-quick-jumper",
      "max-pager-count",
      "size-option",
      "show-total",
      "onChange"
    ])], 2)) : X("v-if", !0)]),
    _: 2
  }, [e.$slots["loading-description"] ? {
    name: "description",
    fn: se(() => [F(e.$slots, "loading-description")]),
    key: "0"
  } : void 0]), 1032, ["loading"])], 2);
}
var Vg = te({
  name: L4,
  components: {
    DataTableBodyCell: LP,
    DataTableHeaderCell: YP,
    VarLoading: St,
    VarPagination: za,
    MaybeVNode: lr
  },
  props: Ng,
  setup(e) {
    const { t: n } = kr(), r = yn(e, "checkedRowKeys"), t = yn(e, "expandedRowKeys"), o = yn(e, "expandedTreeRowKeys"), a = yn(e, "page"), i = yn(e, "pageSize"), { collapsedTreeRowKeys: l, toggleTreeRowExpanded: s } = D4({
      tree: () => e.tree,
      data: () => e.data,
      expandedTreeRowKeys: o,
      getRowKey: re,
      getTreeChildren: we
    }), { normalizedColumns: u, headerRows: d } = c4({ columns: () => e.columns }), { hasResolvedColumnWidth: c, resolvedColumnWidths: f, totalResolvedColumnWidth: v, getColStyle: g, isColumnResizable: h, startColumnResize: m } = l4({
      columns: () => u.value,
      isSelectionColumn: ze,
      isExpandColumn: Ge
    }), y = S(() => {
      const le = {};
      return e.maxHeight != null && (le.maxHeight = Te(e.maxHeight), le.overflow = "auto"), le.overflowX = "auto", le;
    }), $ = S(() => {
      const le = {
        width: "100%",
        tableLayout: c.value ? "fixed" : e.tableLayout
      };
      return e.scrollX != null && (le.minWidth = Te(e.scrollX)), le;
    }), { getFixedStyle: w, isFirstRightFixedColumn: z, isLastLeftFixedColumn: T } = xP({
      columns: () => u.value,
      resolvedColumnWidths: () => f.value
    }), { getColumnSorterOrder: O, isColumnSortable: R, toggleColumnSorter: H } = I4({
      sorters: () => e.sorters,
      sortMode: () => e.sortMode,
      onUpdateSorters: () => e["onUpdate:sorters"]
    }), { paginationProps: A, paginationTotal: D, showPagination: E, normalizedPage: B, pagedData: N } = h4({
      pagination: () => e.pagination,
      remote: () => e.remote,
      loading: () => e.loading,
      plain: () => e.plain,
      page: () => a.value,
      pageSize: () => i.value,
      total: () => e.total,
      data: () => e.data,
      onUpdatePage: () => (le) => {
        a.value = le;
      }
    }), M = S(() => u.value.findIndex((le) => !ze(le) && !Ge(le))), { expandedRowKeySet: I, isRowExpandable: j, toggleRowExpanded: W, renderExpandedRow: G } = u4({
      columns: () => u.value,
      expandedRowKeys: t,
      isExpandColumn: Ge
    }), { allFlatRows: ce, treeRowMeta: me, bodyRows: de } = QP({
      collapsedTreeRowKeys: l,
      expandedRowKeySet: I,
      firstTreeColumnIndex: M,
      getRowKey: re,
      getTreeChildren: we,
      columns: () => u.value,
      sourceRows: () => N.value,
      tree: () => e.tree
    }), { footRows: J } = d4({
      columns: () => u.value,
      sourceRows: () => N.value,
      summary: () => e.summary
    }), { container: ne, scrollLeft: pe, maxScrollDistance: Oe, handleContainerScroll: Y } = s4([
      u,
      de,
      J,
      v,
      () => e.scrollX
    ]), { currentSelectableRows: ae, allCurrentRowsSelected: Ee, someCurrentRowsSelected: Ue, isMultipleSelectionColumn: nn, isSelectionColumnSelectable: qe, isRowSelectable: en, isRowKeySelected: on, isRowKeyIndeterminate: ye, toggleRowSelection: ee, toggleCurrentSelectableRows: K } = S4({
      checkedRowKeys: r,
      isSelectionColumn: ze,
      getTreeChildren: we,
      columns: () => u.value,
      tree: () => e.tree,
      cascade: () => e.cascade,
      pagedData: () => N.value,
      allFlatRows: () => ce.value,
      treeRowMeta: () => me.value
    });
    function re(le, $e) {
      var je;
      return Yn(e.rowKey) ? e.rowKey({
        row: le,
        rowIndex: $e
      }) : (je = le[e.rowKey]) != null ? je : $e;
    }
    function we(le) {
      const $e = le[e.childrenKey];
      return We($e) ? $e : [];
    }
    function ze(le) {
      return le.type === "selection";
    }
    function Ge(le) {
      return le.type === "expand";
    }
    function rn(le, $e) {
      if (!(ze($e) || Ge($e)))
        return $e.render ? $e.render({
          row: le.row,
          rowIndex: le.rowIndex
        }) : le.row[$e.key];
    }
    function mn(le) {
      if (e.rowProps)
        return ir(e.rowProps, {
          row: le.row,
          rowIndex: le.rowIndex
        });
    }
    function Dn(le) {
      if (e.rowClass)
        return ir(e.rowClass, {
          row: le.row,
          rowIndex: le.rowIndex
        });
    }
    function $r(le, $e) {
      if ($e.cellProps)
        return ir($e.cellProps, {
          row: le.row,
          rowIndex: le.rowIndex
        });
    }
    function ar(le) {
      return le ?? "left";
    }
    function Br(le) {
      return le === u.value.length - 1;
    }
    function _n(le) {
      return pe.value > 1 && T(le);
    }
    function Re(le) {
      return pe.value < Oe.value - 1 && z(le);
    }
    function sn(le) {
      var $e;
      return wf(yf({ textAlign: ar(($e = le.column.titleAlign) != null ? $e : le.column.align) }, w(le.fixed, le.startLeafColumnIndex)), { zIndex: le.fixed ? 3 : 2 });
    }
    function _(le) {
      return wf(yf({ textAlign: ar(le.column.align) }, w(le.column.fixed, le.columnIndex)), { zIndex: le.column.fixed ? 1 : void 0 });
    }
    function be(le, $e) {
      a.value = le, i.value = $e;
    }
    return {
      pt: n,
      t: gn,
      container: ne,
      expandedRowKeys: t,
      containerStyle: y,
      paginationProps: A,
      paginationTotal: D,
      showPagination: E,
      normalizedPage: B,
      pageSize: i,
      tableStyle: $,
      columns: u,
      currentSelectableRows: ae,
      allCurrentRowsSelected: Ee,
      someCurrentRowsSelected: Ue,
      headerRows: d,
      bodyRows: de,
      footRows: J,
      isColumnResizable: h,
      getRowProps: mn,
      getRowClass: Dn,
      getCellProps: $r,
      isSelectionColumn: ze,
      isExpandColumn: Ge,
      isColumnSortable: R,
      isMultipleSelectionColumn: nn,
      isSelectionColumnSelectable: qe,
      getColumnSorterOrder: O,
      isRowExpandable: j,
      isRowKeyIndeterminate: ye,
      isRowKeySelected: on,
      isRowSelectable: en,
      shouldRenderLeftFixedShadow: _n,
      shouldRenderRightFixedShadow: Re,
      toggleColumnSorter: H,
      toggleCurrentSelectableRows: K,
      toggleRowExpanded: W,
      toggleTreeRowExpanded: s,
      toggleRowSelection: ee,
      renderCell: rn,
      renderExpandedRow: G,
      getColStyle: g,
      getHeaderCellStyle: sn,
      getBodyCellStyle: _,
      handlePaginationChange: be,
      handleContainerScroll: Y,
      isLastHeaderColumn: Br,
      startColumnResize: m,
      n: F4,
      classes: H4,
      formatElevation: On,
      toSizeUnit: Te
    };
  }
});
Vg.render = W4;
var Di = Vg;
ue(Di);
fe(Di, Ng);
var gN = Di, Vs = Di, Ve = Hu({
  Year: "year",
  Month: "month",
  Date: "date"
}), Qe = Hu({
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
], Ln = {
  Year: "YYYY",
  Month: "YYYY-MM",
  Day: "YYYY-MM-DD"
}, Kr = Hu({
  Prev: "prev",
  Next: "next"
}), q4 = Object.defineProperty, kf = Object.getOwnPropertySymbols, X4 = Object.prototype.hasOwnProperty, G4 = Object.prototype.propertyIsEnumerable, $f = (e, n, r) => n in e ? q4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Z4 = (e, n) => {
  for (var r in n || (n = {})) X4.call(n, r) && $f(e, r, n[r]);
  if (kf)
    for (var r of kf(n)) G4.call(n, r) && $f(e, r, n[r]);
  return e;
}, er = Uo(), J4 = 7, Q4 = 6, xo = {
  Prev: -1,
  Current: 0,
  Next: 1
}, { n: _o } = oe("day-picker"), { n: Sf } = oe("date-picker");
function x4(e, n) {
  const r = x("var-button");
  return b(), k("div", { class: p(e.n()) }, [L("div", { class: p(e.n("content")) }, [U(bn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: se(() => [(b(), k("div", { key: e.panelKey }, [L("ul", { class: p(e.n("head")) }, [(b(!0), k(Ie, null, Ye(e.sortWeekList, (t) => (b(), k("li", { key: t }, ve(e.getDayAbbr(t)), 1))), 128))], 2), L("ul", { class: p(e.n("body")) }, [(b(!0), k(Ie, null, Ye(e.days, (t, o) => (b(), k("li", { key: o }, [U(r, Xe({
      type: "primary",
      "var-day-picker-cover": "",
      round: "",
      elevation: e.panelProps.buttonElevation
    }, { ref_for: !0 }, Z4({}, e.buttonProps(t)), { onClick: (a) => e.selectDay(t) }), {
      default: se(() => [Le(ve(t.day), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))], 2)]))]),
    _: 1
  }, 8, ["name"])], 2)], 2);
}
var Lg = te({
  name: "DayPickerPanel",
  components: { VarButton: Jn },
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
    const [, , r] = e.current.split("-"), t = P([]), o = P(!1), a = P(0), { t: i } = kr(), l = S(() => e.selection.selectedYear === e.preview.previewYear && e.selection.selectedMonth === e.preview.previewMonth), s = S(() => {
      const O = lo.findIndex((R) => R === e.panelProps.firstDayOfWeek);
      return O === -1 || O === 0 ? [...lo] : [...lo.slice(O), ...lo.slice(0, O)];
    });
    function u(O) {
      var R, H;
      return (H = (R = (i || gn)("datePickerWeekDict")) == null ? void 0 : R[O].abbr) != null ? H : "";
    }
    function d(O, R) {
      return {
        dateValue: O.format(Ln.Day),
        day: O.date(),
        monthOffset: R
      };
    }
    function c() {
      const { preview: { previewMonth: O, previewYear: R } } = e, H = er(`${R}-${O}-01`), A = H.endOf(Qe.Month), D = H.daysInMonth(), E = Math.max(0, s.value.findIndex((M) => M === `${H.day()}`)), B = Q4 * J4 - E - D, N = [];
      for (let M = E; M > 0; M--) N.push(d(H.subtract(M, Qe.Day), xo.Prev));
      for (let M = 1; M <= D; M++) N.push(d(H.date(M), xo.Current));
      for (let M = 1; M <= B; M++) N.push(d(A.add(M, Qe.Day), xo.Next));
      t.value = N;
    }
    function f(O) {
      const { min: R, max: H } = e.panelProps, A = H ? er(O).isSameOrBefore(er(H), Qe.Day) : !0, D = R ? er(O).isSameOrAfter(er(R), Qe.Day) : !0;
      return A && D;
    }
    function v() {
      const { selectedYear: O, selectedMonth: R, selectedDay: H } = e.selection;
      return O && R && H ? `${O}-${R}-${H}` : void 0;
    }
    function g(O) {
      const R = v();
      return R ? er(O).isSame(er(R), Qe.Day) : !1;
    }
    function h(O) {
      const { selection: { selectedDays: R, selectedRangeDays: H }, panelProps: { range: A } } = e;
      if (!A) return R.includes(O);
      if (!H.length) return !1;
      if (H.length === 1) return er(O).isSame(er(H[0]), Qe.Day);
      const D = er(O).isSameOrBefore(er(H[1]), Qe.Day), E = er(O).isSameOrAfter(er(H[0]), Qe.Day);
      return D && E;
    }
    function m(O) {
      const { allowedDates: R } = e.panelProps;
      return !f(O) || (R ? !R(O) : !1);
    }
    function y(O, R, H) {
      const { multiple: A, range: D, showCurrent: E } = e.panelProps;
      return E && er(O).isSame(er(e.current), Qe.Day) ? (D || A || l.value) && H ? !0 : D || A ? !R : l.value ? e.selection.selectedDay !== r : !0 : !1;
    }
    function $(O) {
      const { panelProps: { color: R, multiple: H, range: A } } = e, { dateValue: D, monthOffset: E } = O, B = E === xo.Current, N = g(D), M = A || H ? h(D) : N, I = m(D), j = I || (A || H ? !M : !N), W = y(D, M, I), G = !I && !W && !M;
      return {
        text: j,
        outline: W,
        textColor: !I && W ? R ?? "" : "",
        [`${Sf()}-color-cover`]: G,
        class: [_o("button"), {
          [_o("button--usable")]: B,
          [_o("button--adjacent")]: !B
        }],
        disabled: I
      };
    }
    function w(O) {
      o.value = O === Kr.Prev, a.value += O === Kr.Prev ? -1 : 1;
    }
    function z(O) {
      o.value = O === Kr.Prev, a.value += O === Kr.Prev ? -1 : 1;
    }
    function T(O) {
      n("choose-day", O.day, O.monthOffset);
    }
    return En(() => {
      c();
    }), ge(() => e.preview, () => {
      c();
    }), {
      n: _o,
      nDate: Sf,
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
Lg.render = x4;
var _4 = Lg, e3 = Object.defineProperty, Cf = Object.getOwnPropertySymbols, n3 = Object.prototype.hasOwnProperty, r3 = Object.prototype.propertyIsEnumerable, Pf = (e, n, r) => n in e ? e3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, t3 = (e, n) => {
  for (var r in n || (n = {})) n3.call(n, r) && Pf(e, r, n[r]);
  if (Cf)
    for (var r of Cf(n)) r3.call(n, r) && Pf(e, r, n[r]);
  return e;
}, Dr = Uo(), { n: Of } = oe("month-picker"), { n: zf } = oe("date-picker");
function o3(e, n) {
  const r = x("var-button");
  return b(), k("div", { class: p(e.n()) }, [L("div", { class: p(e.n("content")) }, [U(bn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: se(() => [(b(), k("ul", { key: e.panelKey }, [(b(!0), k(Ie, null, Ye(e.MonthList, (t) => (b(), k("li", { key: t }, [U(r, Xe({
      type: "primary",
      "var-month-picker-cover": "",
      elevation: e.panelProps.buttonElevation
    }, { ref_for: !0 }, t3({}, e.buttonProps(t)), { onClick: (o) => e.selectMonth(t) }), {
      default: se(() => [Le(ve(e.getMonthAbbr(t)), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))]))]),
    _: 1
  }, 8, ["name"])], 2)], 2);
}
var Fg = te({
  name: "MonthPickerPanel",
  components: { VarButton: Jn },
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
      const { preview: { previewYear: f }, panelProps: { min: v, max: g } } = e, h = `${f}-${c}`, m = g ? Dr(h).isSameOrBefore(Dr(g), Qe.Month) : !0, y = v ? Dr(h).isSameOrAfter(Dr(v), Qe.Month) : !0;
      return m && y;
    }
    function l(c, f) {
      const { preview: { previewYear: v }, selection: { selectedMonth: g, selectedYear: h, selectedMonths: m, selectedRangeMonths: y }, panelProps: { multiple: $, range: w } } = e;
      if (w) {
        if (!y.length) return !1;
        if (y.length === 1) return Dr(c).isSame(Dr(y[0]), Qe.Month);
        const z = Dr(c).isSameOrBefore(Dr(y[1]), Qe.Month), T = Dr(c).isSameOrAfter(Dr(y[0]), Qe.Month);
        return z && T;
      }
      return $ ? m.includes(c) : h === v && g === f;
    }
    function s(c) {
      const { preview: { previewYear: f }, panelProps: { allowedDates: v, color: g, type: h } } = e, m = `${f}-${c}`, y = l(m, c), $ = !i(c) || (h === Ve.Month && v ? !v(m) : !1);
      return {
        outline: !1,
        text: $ || !y,
        color: y && !$ ? g : "",
        textColor: "",
        [`${zf()}-color-cover`]: !y && !$,
        class: Of("button"),
        disabled: $
      };
    }
    function u(c) {
      n("choose-month", c);
    }
    function d(c) {
      r.value = c === Kr.Prev, t.value += c === Kr.Prev ? -1 : 1;
    }
    return {
      n: Of,
      nDate: zf,
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
Fg.render = o3;
var a3 = Fg, { n: i3 } = oe("date-picker-header");
function l3(e, n) {
  const r = x("var-icon"), t = x("var-button");
  return b(), k("div", { class: p([e.n(), e.n(`--${e.type}`)]) }, [e.type === e.DatePickerUnits.Day ? (b(), k(Ie, { key: 0 }, [L("div", { class: p(e.n("nav")) }, [
    U(t, {
      class: p(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[0] || (n[0] = (o) => e.$emit("shift-year-preview", e.ShiftDirections.Prev))
    }, {
      default: se(() => [U(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class"]),
    U(t, {
      class: p([e.n("text-button"), e.n("year")]),
      "var-date-picker-header-cover": "",
      text: "",
      onClick: n[1] || (n[1] = (o) => e.$emit("open-year-panel"))
    }, {
      default: se(() => [L("span", { class: p(e.n("year-value")) }, [Le(ve(e.date.previewYear) + " ", 1), U(r, {
        class: p(e.n("text-button-icon")),
        name: "chevron-down"
      }, null, 8, ["class"])], 2)]),
      _: 1
    }, 8, ["class"]),
    U(t, {
      class: p(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[2] || (n[2] = (o) => e.$emit("shift-year-preview", e.ShiftDirections.Next))
    }, {
      default: se(() => [U(r, { name: "chevron-right" })]),
      _: 1
    }, 8, ["class"])
  ], 2), L("div", { class: p([e.n("nav"), e.n("nav--month")]) }, [
    U(t, {
      class: p(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[3] || (n[3] = (o) => e.$emit("shift-preview", e.ShiftDirections.Prev))
    }, {
      default: se(() => [U(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class"]),
    U(t, {
      class: p([e.n("text-button"), e.n("month")]),
      "var-date-picker-header-cover": "",
      text: "",
      onClick: n[4] || (n[4] = (o) => e.$emit("open-month-panel"))
    }, {
      default: se(() => [Le(ve(e.getMonthName()) + " ", 1), U(r, {
        class: p(e.n("text-button-icon")),
        name: "chevron-down"
      }, null, 8, ["class"])]),
      _: 1
    }, 8, ["class"]),
    U(t, {
      class: p(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[5] || (n[5] = (o) => e.$emit("shift-preview", e.ShiftDirections.Next))
    }, {
      default: se(() => [U(r, { name: "chevron-right" })]),
      _: 1
    }, 8, ["class"])
  ], 2)], 64)) : e.type === e.DatePickerTypes.Month && !e.showPanelToggle ? (b(), k("div", {
    key: 1,
    class: p(e.n("nav"))
  }, [
    U(t, {
      class: p(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[6] || (n[6] = (o) => e.$emit("shift-preview", e.ShiftDirections.Prev))
    }, {
      default: se(() => [U(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class"]),
    U(t, {
      class: p([e.n("text-button"), e.n("year")]),
      "var-date-picker-header-cover": "",
      text: "",
      onClick: n[7] || (n[7] = (o) => e.$emit("open-year-panel"))
    }, {
      default: se(() => [L("span", { class: p(e.n("year-value")) }, [Le(ve(e.date.previewYear) + " ", 1), U(r, {
        class: p(e.n("text-button-icon")),
        name: "chevron-down"
      }, null, 8, ["class"])], 2)]),
      _: 1
    }, 8, ["class"]),
    U(t, {
      class: p(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[8] || (n[8] = (o) => e.$emit("shift-preview", e.ShiftDirections.Next))
    }, {
      default: se(() => [U(r, { name: "chevron-right" })]),
      _: 1
    }, 8, ["class"])
  ], 2)) : (b(), k("div", {
    key: 2,
    class: p([e.n("nav"), e.n(`nav--${e.type}`)])
  }, [
    U(t, {
      class: p(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[9] || (n[9] = (o) => e.$emit("shift-preview", e.ShiftDirections.Prev))
    }, {
      default: se(() => [U(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class"]),
    e.showPanelToggle ? (b(), ke(t, {
      key: 0,
      class: p([e.n("text-button"), e.n("panel-label")]),
      "var-date-picker-header-cover": "",
      text: "",
      onClick: n[10] || (n[10] = (o) => e.$emit("open-date-panel"))
    }, {
      default: se(() => [Le(ve(e.getPanelLabel()) + " ", 1), U(r, {
        class: p(e.n("text-button-icon")),
        name: "chevron-up"
      }, null, 8, ["class"])]),
      _: 1
    }, 8, ["class"])) : (b(), k("div", {
      key: 1,
      class: p([e.n("text-button"), e.n("panel-label")]),
      "var-date-picker-header-cover": ""
    }, ve(e.getPanelLabel()), 3)),
    U(t, {
      class: p(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[11] || (n[11] = (o) => e.$emit("shift-preview", e.ShiftDirections.Next))
    }, {
      default: se(() => [U(r, { name: "chevron-right" })]),
      _: 1
    }, 8, ["class"])
  ], 2))], 2);
}
var Hg = te({
  name: "PanelHeader",
  components: {
    VarButton: Jn,
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
      n: i3,
      DatePickerTypes: Ve,
      DatePickerUnits: Qe,
      ShiftDirections: Kr,
      getMonthName: r,
      getPanelLabel: t
    };
  }
});
Hg.render = l3;
var s3 = Hg, Ug = {
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
}, u3 = Object.defineProperty, Tf = Object.getOwnPropertySymbols, d3 = Object.prototype.hasOwnProperty, c3 = Object.prototype.propertyIsEnumerable, Ef = (e, n, r) => n in e ? u3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, f3 = (e, n) => {
  for (var r in n || (n = {})) d3.call(n, r) && Ef(e, r, n[r]);
  if (Tf)
    for (var r of Tf(n)) c3.call(n, r) && Ef(e, r, n[r]);
  return e;
}, Mr = Uo(), { n: Bf } = oe("year-picker"), { n: jl } = oe("date-picker");
function v3(e, n) {
  const r = x("var-button");
  return b(), k("div", null, [U(bn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: se(() => [(b(), k("ul", {
      ref: "panel",
      key: e.panelKey,
      class: p(e.n())
    }, [(b(!0), k(Ie, null, Ye(e.yearList, (t) => (b(), k("li", { key: t }, [U(r, Xe({
      type: "primary",
      "var-year-picker-cover": "",
      elevation: e.panelProps.buttonElevation
    }, { ref_for: !0 }, f3({}, e.buttonProps(`${t}`)), { onClick: (o) => e.selectYear(t) }), {
      default: se(() => [Le(ve(t), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))], 2))]),
    _: 1
  }, 8, ["name"])]);
}
var jg = te({
  name: "YearPickerPanel",
  components: { VarButton: Jn },
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
    const r = P(), t = P(!1), o = P(0), a = P(0), i = S(() => {
      if (!e.preview) return [];
      const v = Math.floor(Z(e.preview) / 100 + a.value) * 100;
      return so(100, (g) => Math.max(0, v) + g);
    });
    function l(v) {
      const { panelProps: { min: g, max: h } } = e, m = h ? Mr(v).isSameOrBefore(Mr(h), Qe.Year) : !0, y = g ? Mr(v).isSameOrAfter(Mr(g), Qe.Year) : !0;
      return m && y;
    }
    function s(v) {
      const { selection: { selectedYear: g, selectedYears: h, selectedRangeYears: m }, panelProps: { multiple: y, range: $ } } = e;
      if ($) {
        if (!m.length) return !1;
        if (m.length === 1) return Mr(v).isSame(Mr(m[0]), Qe.Year);
        const w = Mr(v).isSameOrBefore(Mr(m[1]), Qe.Year), z = Mr(v).isSameOrAfter(Mr(m[0]), Qe.Year);
        return w && z;
      }
      return y ? h.includes(v) : g === v;
    }
    function u(v) {
      const { panelProps: { allowedDates: g, color: h, type: m } } = e, y = s(v), $ = !l(v) || (m === Ve.Year && g ? !g(v) : !1);
      return {
        outline: !1,
        text: $ || !y,
        color: y && !$ ? h : "",
        textColor: "",
        [`${jl()}-color-cover`]: !y && !$,
        class: Bf("button"),
        disabled: $
      };
    }
    function d(v) {
      n("choose-year", v);
    }
    function c() {
      const v = r.value.querySelector(".var-button--primary"), g = r.value.closest(`.${jl("body")}`);
      if (!v || !g) return;
      const h = g.getBoundingClientRect(), m = v.getBoundingClientRect();
      g.scrollTop += m.top - h.top - (g.clientHeight - m.height) / 2;
    }
    function f(v) {
      const g = v === Kr.Prev;
      g && i.value[0] <= 0 || (t.value = g, o.value += g ? -1 : 1, a.value += g ? -1 : 1);
    }
    return En(c), ge(() => e.preview, () => {
      a.value = 0;
    }), {
      n: Bf,
      buttonProps: u,
      panel: r,
      yearList: i,
      reverse: t,
      panelKey: o,
      nDate: jl,
      selectYear: d,
      shiftPreview: f
    };
  }
});
jg.render = v3;
var p3 = jg, { name: m3, n: g3, classes: h3 } = oe("date-picker"), wn = Uo();
function b3(e, n) {
  const r = x("panel-header"), t = x("year-picker-panel"), o = x("month-picker-panel"), a = x("day-picker-panel");
  return b(), k("div", {
    class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2), [!e.showTitle, e.n("--no-title")])),
    onPointerdownCapture: n[4] || (n[4] = Nn(() => {
    }, ["prevent"]))
  }, [
    e.showTitle ? (b(), k("div", {
      key: 0,
      class: p(e.n("title")),
      style: Q({ background: e.titleColor || e.color })
    }, [L("div", { class: p(e.n("title-select")) }, [L("div", { class: p(e.n("title-hint")) }, ve(e.titleHint), 3)], 2), L("div", {
      class: p(e.classes(e.n("title-date"), [!e.showYearPanel || e.type === e.DatePickerTypes.Year, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
      onClick: n[0] || (n[0] = (i) => e.switchPanel(e.DatePickerTypes.Date))
    }, [U(bn, { name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey` }, {
      default: se(() => [e.type === e.DatePickerTypes.Year ? (b(), k("div", { key: `${e.selectionState.selectedYear}` }, [e.range ? F(e.$slots, "range", {
        key: 0,
        choose: e.selectionState.selectedRangeYears
      }, () => [Le(ve(e.yearTitle), 1)]) : e.multiple ? F(e.$slots, "multiple", {
        key: 1,
        choose: e.selectionState.selectedYears
      }, () => [Le(ve(e.yearTitle), 1)]) : F(e.$slots, "year", {
        key: 2,
        year: e.selectionState.selectedYear
      }, () => [Le(ve(e.yearTitle), 1)])])) : e.type === e.DatePickerTypes.Month ? (b(), k("div", { key: `${e.selectionState.selectedYear}${e.selectionState.selectedMonth}` }, [e.range ? F(e.$slots, "range", {
        key: 0,
        choose: e.selectionState.selectedRangeMonths
      }, () => [Le(ve(e.monthTitle), 1)]) : e.multiple ? F(e.$slots, "multiple", {
        key: 1,
        choose: e.selectionState.selectedMonths
      }, () => [Le(ve(e.monthTitle), 1)]) : F(e.$slots, "month", {
        key: 2,
        month: e.selectionState.selectedMonth,
        year: e.selectionState.selectedYear
      }, () => [Le(ve(e.monthTitle), 1)])])) : (b(), k("div", { key: `${e.selectionState.selectedYear}${e.selectionState.selectedMonth}${e.selectionState.selectedDay}` }, [e.range ? F(e.$slots, "range", {
        key: 0,
        choose: e.formattedRangeDays
      }, () => [Le(ve(e.dateTitle), 1)]) : e.multiple ? F(e.$slots, "multiple", {
        key: 1,
        choose: e.selectionState.selectedDays
      }, () => [Le(ve(e.dateTitle), 1)]) : F(e.$slots, "date", yt(Xe({ key: 2 }, e.dateSlotProps)), () => [Le(ve(e.dateTitle), 1)])]))]),
      _: 3
    }, 8, ["name"])], 2)], 6)) : X("v-if", !0),
    L("div", { class: p(e.n("body")) }, [e.panelType ? (b(), ke(r, {
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
    ])) : X("v-if", !0), L("div", { class: p(e.n("panel")) }, [U(bn, { name: `${e.n()}-panel-fade` }, {
      default: se(() => [e.panelType === e.DatePickerTypes.Year ? (b(), ke(t, {
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
      ])) : e.panelType === e.DatePickerTypes.Month ? (b(), ke(o, {
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
      ])) : e.panelType === e.DatePickerTypes.Date ? (b(), ke(a, {
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
      ])) : X("v-if", !0)]),
      _: 1
    }, 8, ["name"])], 2)], 2),
    e.$slots.actions ? (b(), k("div", {
      key: 1,
      class: p(e.n("actions"))
    }, [F(e.$slots, "actions")], 2)) : X("v-if", !0)
  ], 34);
}
var Yg = te({
  name: m3,
  components: {
    MonthPickerPanel: a3,
    YearPickerPanel: p3,
    DayPickerPanel: _4,
    PanelHeader: s3
  },
  props: Ug,
  setup(e) {
    const { t: n } = kr(), r = wn().format(Ln.Day), [t, o] = r.split("-"), a = io.find((_) => _ === o), i = P(!1), l = P(!1), s = P(!0), u = S(() => e.range && !s.value), d = P(a), c = P(t), f = P(!1), v = P(null), g = P(null), h = P(null), m = $n({
      selectedMonth: void 0,
      selectedYear: void 0,
      selectedDay: void 0,
      selectedYears: [],
      selectedMonths: [],
      selectedDays: [],
      selectedRangeYears: [],
      selectedRangeMonths: [],
      selectedRangeDays: []
    }), y = S(() => ({
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
    })), $ = S(() => ({
      previewMonth: d.value,
      previewYear: c.value
    })), w = S(() => {
      if (e.type === Ve.Year || i.value) return Ve.Year;
      if (e.type === Ve.Month || l.value) return Ve.Month;
      if (e.type === Ve.Date) return Ve.Date;
    }), z = S(() => w.value === Ve.Date ? Qe.Day : w.value), T = S(() => w.value === Ve.Year ? { previewYear: c.value } : $.value), O = S(() => {
      var _;
      return (_ = e.hint) != null ? _ : W();
    }), R = S(() => {
      var _;
      const { multiple: be, range: le } = e;
      return le ? m.selectedRangeYears.length ? m.selectedRangeYears.join(" ~ ") : "" : be ? `${m.selectedYears.length}${(n || gn)("datePickerSelected")}` : (_ = m.selectedYear) != null ? _ : "";
    }), H = S(() => {
      var _, be;
      const { multiple: le, range: $e } = e;
      if ($e) return m.selectedRangeMonths.length ? m.selectedRangeMonths.join(" ~ ") : "";
      let je = "";
      return m.selectedMonth && (je = (be = (_ = (n || gn)("datePickerMonthDict")) == null ? void 0 : _[m.selectedMonth].name) != null ? be : ""), le ? `${m.selectedMonths.length}${(n || gn)("datePickerSelected")}` : je;
    }), A = S(() => {
      var _, be, le, $e;
      const { multiple: je, range: un } = e;
      if (un) {
        const Tt = m.selectedRangeDays.map((Al) => wn(Al).format(Ln.Day));
        return Tt.length ? Tt.join(" ~ ") : "";
      }
      if (je) return `${m.selectedDays.length}${(n || gn)("datePickerSelected")}`;
      if (!m.selectedYear || !m.selectedMonth || !m.selectedDay) return "";
      const Rn = wn(`${m.selectedYear}-${m.selectedMonth}-${m.selectedDay}`).day(), Wn = lo.find((Tt) => Tt === `${Rn}`), Zr = (be = (_ = (n || gn)("datePickerWeekDict")) == null ? void 0 : _[Wn].name) != null ? be : "", Dl = ($e = (le = (n || gn)("datePickerMonthDict")) == null ? void 0 : le[m.selectedMonth].name) != null ? $e : "", Ml = Gr(m.selectedDay, 2, "0");
      return (n || gn)("lang") === "zh-CN" ? `${m.selectedMonth}-${Ml} ${Zr.slice(0, 3)}` : `${Zr.slice(0, 3)}, ${Dl.slice(0, 3)} ${Z(m.selectedDay)}`;
    }), D = S(() => {
      var _, be;
      const le = wn(`${m.selectedYear}-${m.selectedMonth}-${m.selectedDay}`).day(), $e = m.selectedDay ? Gr(m.selectedDay, 2, "0") : "";
      return {
        week: `${le}`,
        year: (_ = m.selectedYear) != null ? _ : "",
        month: (be = m.selectedMonth) != null ? be : "",
        date: $e
      };
    }), E = S(() => m.selectedRangeDays.map((_) => wn(_).format(Ln.Day))), B = S(() => m.selectedYear === c.value), N = S(() => m.selectedMonth === d.value);
    let M = !1;
    ge(() => e.modelValue, () => {
      const _ = !M;
      M = !1, I(_);
    }, { immediate: !0 });
    function I(_ = !0) {
      if (!we()) return;
      const { modelValue: be, type: le } = e;
      if (e.range) {
        if (!We(be)) return;
        s.value = be.length !== 1, $r(be, le, _);
        return;
      }
      if (e.multiple) {
        if (!We(be)) return;
        ar(be, le, _);
        return;
      }
      Br(be, _);
    }
    function j(_) {
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
    function W() {
      return e.type === Ve.Year ? (n || gn)("datePickerYearHint") : e.type === Ve.Month ? (n || gn)("datePickerMonthHint") : (n || gn)("datePickerHint");
    }
    function G() {
      return w.value === Ve.Year ? v : w.value === Ve.Month ? g : h;
    }
    function ce(_) {
      G().value.shiftPreview(_), w.value === Ve.Date ? re(Qe.Month, _) : w.value === Ve.Month && re(Qe.Year, _);
    }
    function me(_) {
      h.value.shiftYearPreview(_), re(Qe.Year, _);
    }
    function de(_) {
      return _ === Ve.Year ? Ln.Year : _ === Ve.Month ? Ln.Month : Ln.Day;
    }
    function J(_) {
      return _ === Ve.Year ? m.selectedRangeYears : _ === Ve.Month ? m.selectedRangeMonths : m.selectedRangeDays;
    }
    function ne(_, be) {
      if (_ === Ve.Year) {
        m.selectedRangeYears = be;
        return;
      }
      if (_ === Ve.Month) {
        m.selectedRangeMonths = be;
        return;
      }
      m.selectedRangeDays = be;
    }
    function pe(_) {
      return _ === Ve.Year ? m.selectedYears : _ === Ve.Month ? m.selectedMonths : m.selectedDays;
    }
    function Oe(_, be) {
      if (_ === Ve.Year) {
        m.selectedYears = be;
        return;
      }
      if (_ === Ve.Month) {
        m.selectedMonths = be;
        return;
      }
      m.selectedDays = be;
    }
    function Y(_) {
      C(e["onUpdate:modelValue"], _), C(e.onChange, _);
    }
    function ae() {
      return e.type === Ve.Date && m.selectedDay ? Z(m.selectedDay) : void 0;
    }
    function Ee() {
      C(e.onPreview, Z(c.value), Z(d.value), ae());
    }
    function Ue(_, be) {
      const le = J(be), $e = s.value ? [_, _] : [le[0], _];
      if (ne(be, $e), s.value = !s.value, !s.value) return;
      const je = wn($e[0]).isAfter($e[1]) ? [$e[1], $e[0]] : [...$e];
      Dn(), Y(je);
    }
    function nn(_, be) {
      const le = pe(be), $e = be === Ve.Year ? Ln.Year : be === Ve.Month ? Ln.Month : Ln.Day, je = le.map((Wn) => wn(Wn).format($e)), un = je.findIndex((Wn) => Wn === _), Rn = un !== -1;
      Rn && je.splice(un, 1), Rn || je.push(_), Dn(), Y(je);
    }
    function qe(_, be) {
      if (e.range) {
        Ue(_, be);
        return;
      }
      if (e.multiple) {
        nn(_, be);
        return;
      }
      Dn(), Y(_);
    }
    function en(_, be, le = !0) {
      const { min: $e, max: je, allowedDates: un } = e, Rn = je ? wn(_).isSameOrBefore(wn(je), be) : !0, Wn = $e ? wn(_).isSameOrAfter(wn($e), be) : !0, Zr = le && un ? un(_) : !0;
      return Rn && Wn && Zr;
    }
    function on(_, be) {
      return !m.selectedYear || !m.selectedMonth ? !1 : B.value ? _ === Qe.Year ? be < Z(m.selectedYear) : _ === Qe.Month ? be < m.selectedMonth : N.value ? be < Z(m.selectedDay) : m.selectedMonth > d.value : m.selectedYear > c.value;
    }
    function ye(_, be = 0) {
      const { readonly: le } = e;
      if (le) return;
      const $e = wn(`${c.value}-${d.value}-01`).add(be, Qe.Month), je = $e.date(_).format(Ln.Day);
      en(je, Qe.Day) && (f.value = be !== 0 ? be < 0 : on(Qe.Day, _), be !== 0 && (c.value = $e.format(Ln.Year), d.value = $e.format(Ln.Month).split("-")[1], Ee()), qe(je, Ve.Date));
    }
    function ee(_) {
      const { type: be, readonly: le } = e, $e = `${c.value}-${_}`;
      if (!(le || !en($e, Qe.Month, be === Ve.Month))) {
        if (f.value = on(Qe.Month, _), be === Ve.Month) {
          qe($e, Ve.Month), l.value = !1;
          return;
        }
        d.value = _, Ee(), l.value = !1;
      }
    }
    function K(_) {
      const { type: be, readonly: le } = e, $e = `${_}`;
      if (!(le || !en($e, Qe.Year, be === Ve.Year))) {
        if (f.value = on(Qe.Year, _), be === Ve.Year) {
          qe($e, Ve.Year), i.value = !1;
          return;
        }
        c.value = `${_}`, Ee(), i.value = !1;
      }
    }
    function re(_, be) {
      const le = be === Kr.Prev ? -1 : 1;
      if (_ === Qe.Year) {
        c.value = `${Z(c.value) + le}`, Ee();
        return;
      }
      let $e = Z(d.value) + le;
      $e < 1 && (c.value = `${Z(c.value) - 1}`, $e = 12), $e > 12 && (c.value = `${Z(c.value) + 1}`, $e = 1), d.value = io.find((je) => Z(je) === $e), Ee();
    }
    function we() {
      return (e.multiple || e.range) && !We(e.modelValue) ? (At("DatePicker", 'type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && We(e.modelValue) ? (At("DatePicker", 'type of prop "modelValue" should be a String'), !1) : !0;
    }
    function ze(_) {
      return We(_) ? !1 : _ === "Invalid Date" ? (At("DatePicker", '"modelValue" is an Invalid Date'), !0) : !1;
    }
    function Ge() {
      return e.fallbackViewDate && wn(e.fallbackViewDate).format(Ln.Day) !== "Invalid Date" ? e.fallbackViewDate : wn().format(Ln.Day);
    }
    function rn(_) {
      return _ && !ze(wn(_).format(Ln.Day)) ? _ : Ge();
    }
    function mn(_, be) {
      const le = de(be);
      return _.find(($e) => !ze(wn($e).format(le)));
    }
    function Dn() {
      M = e.type === Ve.Date || e.range || e.multiple;
    }
    function $r(_, be, le = !0) {
      var $e;
      const je = de(be), un = _.map((Rn) => wn(Rn).format(je)).filter((Rn) => !ze(Rn)).slice(0, 2);
      ne(be, un), un.length === 2 && wn(un[0]).isAfter(un[1]) && ne(be, [un[1], un[0]]), le && _n(($e = mn(_, be)) != null ? $e : Ge());
    }
    function ar(_, be, le = !0) {
      var $e;
      const je = de(be);
      Oe(be, Ql(_.map((un) => wn(un).format(je))).filter((un) => un !== "Invalid Date")), le && _n(($e = mn(_, be)) != null ? $e : Ge());
    }
    function Br(_, be = !0) {
      if (!_) {
        m.selectedMonth = void 0, m.selectedYear = void 0, m.selectedDay = void 0, be && _n(Ge());
        return;
      }
      const le = wn(_).format(Ln.Day);
      if (ze(le)) return;
      const [$e, je, un] = le.split("-"), Rn = io.find((Wn) => Wn === je);
      m.selectedMonth = Rn, m.selectedYear = $e, m.selectedDay = un, be && _n(le);
    }
    function _n(_) {
      const be = wn(_ || Ge()).format(Ln.Day);
      if (ze(be)) return;
      const [le, $e] = be.split("-"), je = io.find((un) => un === $e);
      d.value = je, c.value = le;
    }
    function Re() {
      var _;
      if (i.value = !1, l.value = !1, !e.range && !e.multiple) {
        _n(rn(e.modelValue));
        return;
      }
      _n(We(e.modelValue) && (_ = mn(e.modelValue, e.type)) != null ? _ : Ge());
    }
    function sn() {
      i.value = !1, l.value = !1, M = !1, I(!0);
    }
    return {
      yearPanelEl: v,
      monthPanelEl: g,
      dayPanelEl: h,
      reverse: f,
      currentDate: r,
      previewYear: c,
      showYearPanel: i,
      showMonthPanel: l,
      monthTitle: H,
      dateTitle: A,
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
      n: g3,
      classes: h3,
      switchPanel: j,
      shiftCurrentPanelPreview: ce,
      shiftDatePanelYearPreview: me,
      selectDayFromPanel: ye,
      selectMonthFromPanel: ee,
      selectYearFromPanel: K,
      shiftPreview: re,
      resetPreview: Re,
      syncModelValue: sn,
      rangeSelecting: u,
      formatElevation: On,
      DatePickerTypes: Ve
    };
  }
});
Yg.render = b3;
var Mi = Yg;
ue(Mi);
fe(Mi, Ug);
var hN = Mi, Ta = Mi, y3 = Object.defineProperty, If = Object.getOwnPropertySymbols, w3 = Object.prototype.hasOwnProperty, k3 = Object.prototype.propertyIsEnumerable, Df = (e, n, r) => n in e ? y3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, $3 = (e, n) => {
  for (var r in n || (n = {})) w3.call(n, r) && Df(e, r, n[r]);
  if (If)
    for (var r of If(n)) k3.call(n, r) && Df(e, r, n[r]);
  return e;
}, Kg = $3({
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
])), { name: S3, n: Mf, classes: C3 } = oe("date-input-time-select"), P3 = ["aria-disabled", "onClick"];
function O3(e, n) {
  const r = x("var-menu-select");
  return b(), k("div", {
    ref: "root",
    class: p(e.n())
  }, [(b(!0), k(Ie, null, Ye(e.segments, (t, o) => (b(), k(Ie, { key: t.key }, [o > 0 ? (b(), k("span", {
    key: 0,
    class: p(e.n("separator"))
  }, ":", 2)) : X("v-if", !0), U(r, {
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
    default: se(() => [L("button", {
      type: "button",
      class: p(e.classes(e.n("box"), [e.openKey === t.key, e.n("box--active")], [e.disabled || e.readonly, e.n("box--disabled")])),
      "aria-disabled": e.disabled || e.readonly,
      onMousedown: n[0] || (n[0] = Nn(() => {
      }, ["prevent"])),
      onClick: (a) => e.toggle(t.key)
    }, ve(t.label), 43, P3)]),
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
var Wg = te({
  name: S3,
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
    const r = P(null), t = P(null), o = S(() => {
      const f = [a("hour", e.hour, 24, e.isHourAllowed), a("minute", e.minute, 60, e.isMinuteAllowed)];
      return e.useSeconds && f.push(a("second", e.second, 60, e.isSecondAllowed)), f;
    });
    Tr(() => {
      document.addEventListener("mousedown", d, !0), document.addEventListener("pointerdown", c, !0);
    }), Pt(() => {
      document.removeEventListener("mousedown", d, !0), document.removeEventListener("pointerdown", c, !0);
    });
    function a(f, v, g, h) {
      return {
        key: f,
        value: v,
        label: Gr(`${v}`, 2, "0"),
        options: so(g, (m) => ({
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
      const g = {
        hour: e.hour,
        minute: e.minute,
        second: e.second
      };
      g[f] = v, t.value = null, n("change", g, f);
    }
    function u(f) {
      return f ? Array.from(document.querySelectorAll(`.${Mf("popover")}`)).some((v) => v.contains(f)) : !1;
    }
    function d(f) {
      t.value != null && u(f.target) && f.preventDefault();
    }
    function c(f) {
      var v;
      if (t.value == null) return;
      const g = f.target;
      g && ((v = r.value) != null && v.contains(g)) || u(g) || (t.value = null);
    }
    return {
      n: Mf,
      classes: C3,
      root: r,
      openKey: t,
      segments: o,
      toggle: i,
      handleUpdateShow: l,
      selectOption: s
    };
  }
});
Wg.render = O3;
var z3 = Wg, Ar = {
  Year: "YYYY",
  Month: "YYYY-MM",
  Date: "YYYY-MM-DD",
  Datetime: "YYYY-MM-DD HH:mm:ss",
  DatetimeMinute: "YYYY-MM-DD HH:mm"
}, Nr = Uo(), { name: T3, n: ea, classes: E3 } = oe("date-input");
function B3(e, n) {
  const r = x("var-icon"), t = x("var-input"), o = x("time-select"), a = x("var-date-picker"), i = x("var-menu"), l = x("var-form-details");
  return b(), k("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [U(i, {
    show: e.showMenu,
    "onUpdate:show": n[5] || (n[5] = (s) => e.showMenu = s),
    "var-date-input-cover": "",
    trigger: "manual",
    placement: "bottom-start",
    disabled: e.disabled || e.readonly || e.formDisabled || e.formReadonly,
    "popover-class": e.menuPopoverClass
  }, {
    menu: se(() => [L("div", { onPointerdown: n[4] || (n[4] = Nn(() => {
    }, ["prevent"])) }, [U(a, {
      ref: "picker",
      class: p(e.n("picker")),
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
      fn: se(() => [L("div", { class: p(e.n("datetime")) }, [e.range ? (b(), k("div", {
        key: 0,
        class: p(e.classes(e.n("datetime-row"), e.n("datetime-row--range")))
      }, [
        U(o, {
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
        U(r, {
          class: p(e.n("datetime-arrow")),
          name: "arrow-right"
        }, null, 8, ["class"]),
        U(o, {
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
        class: p(e.n("datetime-row"))
      }, [U(o, {
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
    default: se(() => [U(t, {
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
      "clear-icon": se(({ clear: s }) => [L("span", {
        class: p(e.n("clear-icon-container")),
        onMousedown: n[0] || (n[0] = Nn(() => {
        }, ["stop"])),
        onClick: n[1] || (n[1] = Nn(() => {
        }, ["stop"]))
      }, [F(e.$slots, "clear-icon", { clear: s }, () => [U(r, {
        class: p(e.n("clear-icon")),
        name: "close-circle",
        onClick: s
      }, null, 8, ["class", "onClick"])])], 34)]),
      "append-icon": se(() => [F(e.$slots, "append-icon", {}, () => [L("span", { class: p(e.n("calendar-icon-container")) }, [U(r, {
        class: p(e.n("calendar-icon")),
        name: "calendar-month-outline"
      }, null, 8, ["class"])], 2)])]),
      _: 2
    }, [e.$slots["prepend-icon"] ? {
      name: "prepend-icon",
      fn: se(() => [F(e.$slots, "prepend-icon")]),
      key: "0"
    } : void 0, e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: se(() => [F(e.$slots, "extra-message")]),
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
  ]), U(l, { "error-message": e.errorMessage }, Pr({ _: 2 }, [e.$slots["extra-message"] ? {
    name: "extra-message",
    fn: se(() => [F(e.$slots, "extra-message")]),
    key: "0"
  } : void 0]), 1032, ["error-message"])], 2);
}
var qg = te({
  name: T3,
  components: {
    VarIcon: Je,
    VarInput: Lt,
    VarMenu: jt,
    VarFormDetails: Hn,
    VarDatePicker: Ta,
    TimeSelect: z3
  },
  props: Kg,
  setup(e) {
    const n = P(null), r = P(null), t = P(""), o = P(), a = P(!1), i = P(!1), { bindForm: l, form: s } = Kn(), { errorMessage: u, validateWithTrigger: d, validate: c, resetValidation: f } = xn(), v = S(() => {
      var q;
      return (q = s?.disabled.value) != null ? q : !1;
    }), g = S(() => {
      var q;
      return (q = s?.readonly.value) != null ? q : !1;
    }), h = S(() => e.disabled || v.value), m = S(() => e.readonly || g.value), y = S(() => e.type === "datetime"), $ = S(() => e.multiple && !y.value), w = S(() => $.value || e.range), z = S(() => y.value ? "date" : e.type), T = S(() => ce(e.min)), O = S(() => ce(e.max)), R = S(() => {
      var q;
      return !!((q = r.value) != null && q.rangeSelecting);
    }), H = S(() => y.value && e.range && (R.value || ze().length < 2)), A = S(() => e.min ? Nr(e.min) : void 0), D = S(() => e.max ? Nr(e.max) : void 0), E = S(() => me(ze()[0])), B = S(() => {
      const q = ze();
      return [me(q[0]), me(q[1])];
    }), N = S(() => {
      const q = e.variant === "standard" ? ea("--standard-menu-margin") : e.variant === "filled" ? ea("--filled-menu-margin") : "";
      return [ea("--menu"), q].filter(Bt).join(" ");
    }), M = S(() => {
      const q = e.range ? e.rangeSeparator : e.separator;
      return t.value.split(q).map((he) => he.trim()).filter(Bt);
    }), I = {
      reset: bd,
      validate: hd,
      resetValidation: f
    };
    ge(() => [
      e.modelValue,
      e.format,
      e.valueFormat,
      e.type,
      e.useSeconds,
      e.multiple,
      e.range,
      e.separator,
      e.rangeSeparator
    ], () => rn(), { immediate: !0 }), C(l, I);
    function j(q = e.type) {
      return q === "year" ? Ar.Year : q === "month" ? Ar.Month : q === "datetime" ? e.useSeconds ? Ar.Datetime : Ar.DatetimeMinute : Ar.Date;
    }
    function W() {
      return y.value ? Ar.Date : j();
    }
    function G() {
      return e.format || j();
    }
    function ce(q) {
      return !q || !y.value ? q : Nr(q).format(Ar.Date);
    }
    function me(q) {
      var he, Ae, Be;
      return {
        hour: (he = q?.hour()) != null ? he : 0,
        minute: (Ae = q?.minute()) != null ? Ae : 0,
        second: (Be = q?.second()) != null ? Be : 0
      };
    }
    function de(q) {
      const he = A.value, Ae = D.value;
      return he && q.isBefore(he) ? he : Ae && q.isAfter(Ae) ? Ae : q;
    }
    function J(q, he, Ae) {
      function Be() {
        var an, Vn;
        const Ir = ((an = q()) != null ? an : Nr()).format(Ar.Date);
        return (Vn = e.allowedTimes) == null ? void 0 : Vn.call(e, Ir, Ae);
      }
      function tn(an, Vn) {
        var Ir;
        const Jr = he(), Et = ((Ir = q()) != null ? Ir : Nr()).hour(an === "hour" ? Vn : Jr.hour).minute(an === "minute" ? Vn : Jr.minute).second(an === "second" ? Vn : Jr.second), qo = A.value, eo = D.value;
        if (qo && Et.endOf(an).isBefore(qo) || eo && Et.startOf(an).isAfter(eo)) return !1;
        const Sr = Be();
        return an === "hour" ? Sr?.hours ? Sr.hours(Vn) : !0 : an === "minute" ? Sr?.minutes ? Sr.minutes(Vn, Jr.hour) : !0 : Sr?.seconds ? Sr.seconds(Vn, Jr.minute, Jr.hour) : !0;
      }
      return {
        isHourAllowed: (an) => tn("hour", an),
        isMinuteAllowed: (an) => tn("minute", an),
        isSecondAllowed: (an) => tn("second", an)
      };
    }
    const ne = J(() => ze()[0], () => E.value), pe = J(() => ze()[0], () => B.value[0], "start"), Oe = J(() => ze()[1], () => B.value[1], "end");
    function Y(q, he) {
      return de(q.hour(he.hour).minute(he.minute).second(he.second).millisecond(0));
    }
    function ae(q, he, Ae) {
      return Ae ? [q] : [q, ...Array.from({ length: he }, (Be, tn) => tn).filter((Be) => Be !== q)];
    }
    function Ee(q, he) {
      const Ae = A.value, Be = D.value, tn = q.hour(), an = q.minute(), Vn = q.second();
      return (!Ae || !q.isBefore(Ae)) && (!Be || !q.isAfter(Be)) && (!he.hours || he.hours(tn)) && (!he.minutes || he.minutes(an, tn)) && (!e.useSeconds || !he.seconds || he.seconds(Vn, an, tn)) && (!e.allowedDates || e.allowedDates(q.format(W())));
    }
    function Ue(q, he, Ae, Be) {
      var tn, an;
      const Vn = q.format(Ar.Date), Ir = (an = (tn = e.allowedTimes) == null ? void 0 : tn.call(e, Vn, Ae)) != null ? an : {}, Jr = ae(he.hour, 24, Be === "hour" || Be === "minute" || Be === "second");
      for (const Et of Jr) {
        if (Ir.hours && !Ir.hours(Et)) continue;
        const qo = ae(he.minute, 60, Be === "minute" || Be === "second");
        for (const eo of qo) {
          if (Ir.minutes && !Ir.minutes(eo, Et)) continue;
          const Sr = e.useSeconds ? ae(he.second, 60, Be === "second") : [0];
          for (const b0 of Sr) {
            const yd = q.hour(Et).minute(eo).second(b0).millisecond(0);
            if (Ee(yd, Ir)) return yd;
          }
        }
      }
    }
    function nn(q) {
      return e.range ? [...q].sort((he, Ae) => he.valueOf() - Ae.valueOf()) : q;
    }
    function qe(q) {
      const he = nn(q);
      if (e.range)
        return !K(he[0], "start") || !K(he[1], "end") ? !1 : (o.value = he.map((Be) => Be.format(W())), t.value = he.map((Be) => Be.format(G())).join(e.rangeSeparator), mn(he.map(we)), !0);
      const [Ae] = he;
      return K(Ae) ? (o.value = Ae.format(W()), t.value = Ae.format(G()), mn(we(Ae)), !0) : !1;
    }
    function en(q, he) {
      if (h.value || m.value) return;
      const [Ae] = ze(), Be = Ae ?? Nr(), tn = he ? Ue(Be, q, void 0, he) : Y(Be, q);
      tn && qe([tn]);
    }
    function on(q, he, Ae) {
      if (h.value || m.value) return;
      const Be = ze();
      if (Be.length < 2) return;
      const tn = [...Be], an = q === 0 ? "start" : "end", Vn = Ae ? Ue(Be[q], he, an, Ae) : Y(Be[q], he);
      Vn && (tn[q] = Vn, qe(tn));
    }
    function ye(q, he) {
      const Ae = Nr(q, he, !0);
      return Ae.isValid() ? Ae : void 0;
    }
    function ee(q, he) {
      var Ae;
      if (!y.value || !e.allowedTimes) return !0;
      const Be = (Ae = e.allowedTimes(q.format(Ar.Date), he)) != null ? Ae : {}, tn = q.hour(), an = q.minute(), Vn = q.second();
      return (!Be.hours || Be.hours(tn)) && (!Be.minutes || Be.minutes(an, tn)) && (!e.useSeconds || !Be.seconds || Be.seconds(Vn, an, tn));
    }
    function K(q, he) {
      const Ae = A.value, Be = D.value, tn = e.type === "year" ? "year" : e.type === "month" ? "month" : e.type === "date" ? "day" : void 0;
      return !(Ae && (tn ? q.isBefore(Ae, tn) : q.isBefore(Ae)) || Be && (tn ? q.isAfter(Be, tn) : q.isAfter(Be)) || e.allowedDates && !e.allowedDates(q.format(W())) || !ee(q, he));
    }
    function re(q) {
      var he;
      if (!(q == null || q === "")) {
        if (Zl(q) || tr(q)) {
          const Ae = Nr(q);
          return Ae.isValid() ? Ae : void 0;
        }
        return ye(q, (he = e.valueFormat) != null ? he : G());
      }
    }
    function we(q) {
      return e.valueFormat === "timestamp" ? q.valueOf() : e.valueFormat === "date" ? q.toDate() : e.valueFormat ? q.format(e.valueFormat) : q.format(G());
    }
    function ze() {
      if (w.value) return (We(e.modelValue) ? e.modelValue : []).map(re).filter(Bt);
      const q = We(e.modelValue) ? void 0 : re(e.modelValue);
      return q ? [q] : [];
    }
    function Ge(q) {
      t.value = q.map((he) => he.format(G())).join(e.range ? e.rangeSeparator : e.separator);
    }
    function rn() {
      const q = ze();
      if (w.value) o.value = q.map((he) => he.format(W()));
      else {
        const [he] = q;
        o.value = he ? he.format(W()) : void 0;
      }
      i.value || Ge(q);
    }
    function mn(q) {
      Ed(q, e.modelValue) || (C(e["onUpdate:modelValue"], q), C(e.onChange, q), Dn("onChange"));
    }
    function Dn(q) {
      Ne(() => {
        const { validateTrigger: he, rules: Ae, modelValue: Be } = e;
        d(he, q, Ae, Be);
      });
    }
    function $r(q) {
      i.value = !0, C(e.onFocus, q), Dn("onFocus");
    }
    function ar(q) {
      i.value = !1, a.value = !1, C(e.onBlur, q), Dn("onBlur");
    }
    function Br() {
      h.value || m.value || (a.value = !0, Ne(() => {
        var q;
        return (q = r.value) == null ? void 0 : q.syncModelValue();
      }), Dn("onClick"));
    }
    function _n(q) {
      h.value || m.value || q.key !== "Enter" || (Ze(q), a.value = !0, Ne(() => {
        var he;
        return (he = r.value) == null ? void 0 : he.syncModelValue();
      }));
    }
    function Re(q) {
      const he = ye(q, G());
      !he || !K(he) || (o.value = he.format(W()), mn(we(he)));
    }
    function sn() {
      if (e.range ? M.value.length !== 2 : !M.value.length) return;
      const q = M.value.map((Be) => ye(Be, G()));
      if (q.some((Be) => !Be)) return;
      const he = q.filter(Bt);
      if (e.range && he[0].isAfter(he[1]) || he.some((Be, tn) => !K(Be, e.range ? tn === 0 ? "start" : "end" : void 0))) return;
      const Ae = he.map(we);
      o.value = he.map((Be) => Be.format(W())), mn(Ae);
    }
    function _(q) {
      if (!(h.value || m.value) && q !== t.value) {
        if (t.value = q, q === "") {
          Zr(), mn(Wn()), Dn("onInput");
          return;
        }
        w.value ? sn() : Re(q), Dn("onInput");
      }
    }
    function be() {
      h.value || m.value || Ge(ze());
    }
    function le(q) {
      if (q.length < 2) return;
      const he = B.value, Ae = q.map((Be, tn) => {
        var an;
        return Ue(Be, (an = he[tn]) != null ? an : me(), tn === 0 ? "start" : "end");
      });
      Ae.every(Bt) && qe(Ae.filter(Bt)) || rn();
    }
    function $e(q) {
      const he = q.map((Be) => Nr(Be, W(), !0)).filter((Be) => Be.isValid());
      if (y.value && e.range) {
        le(he);
        return;
      }
      const Ae = he.map(we);
      t.value = he.map((Be) => Be.format(G())).join(e.range ? e.rangeSeparator : e.separator), mn(Ae);
    }
    function je(q) {
      const he = Ue(q, E.value);
      he && qe([he]) || rn();
    }
    function un(q) {
      const he = Nr(q, W(), !0);
      if (he.isValid()) {
        if (y.value) {
          je(he);
          return;
        }
        t.value = he.format(G()), mn(we(he)), w.value || (a.value = !1);
      }
    }
    function Rn(q) {
      if (!(h.value || m.value)) {
        if (o.value = q, We(q)) {
          $e(q);
          return;
        }
        un(q);
      }
    }
    function Wn() {
      return w.value ? [] : void 0;
    }
    function Zr() {
      t.value = "", o.value = w.value ? [] : void 0;
    }
    function Dl() {
      if (h.value || m.value || !e.clearable) return;
      Zr(), a.value = !1;
      const q = Wn();
      C(e["onUpdate:modelValue"], q), C(e.onClear, ""), C(e.onChange, q), Dn("onChange"), Dn("onClear");
    }
    function Ml() {
      var q;
      (q = n.value) == null || q.focus();
    }
    function Tt() {
      var q;
      (q = n.value) == null || q.blur();
    }
    function Al() {
      var q;
      (q = n.value) == null || q.select();
    }
    function hd() {
      return c(e.rules, e.modelValue);
    }
    function bd() {
      const q = Wn();
      Zr(), a.value = !1, !Ed(e.modelValue, q) && C(e["onUpdate:modelValue"], q), f();
    }
    return {
      inputEl: n,
      picker: r,
      displayValue: t,
      pickerValue: o,
      showMenu: a,
      isFocusing: i,
      rangeSelecting: R,
      isRangeTimeSelectDisabled: H,
      formDisabled: v,
      formReadonly: g,
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
      classes: E3,
      handleTimeChange: en,
      handleRangeTimeChange: on,
      handleFocus: $r,
      handleBlur: ar,
      handleClick: Br,
      handleKeydown: _n,
      handleInput: _,
      handleChange: be,
      handlePickerChange: Rn,
      handleClear: Dl,
      focus: Ml,
      blur: Tt,
      select: Al,
      validate: hd,
      resetValidation: f,
      reset: bd
    };
  }
});
qg.render = B3;
var Ai = qg;
ue(Ai);
fe(Ai, Kg);
var bN = Ai, Ls = Ai, I3 = Object.defineProperty, Af = Object.getOwnPropertySymbols, D3 = Object.prototype.hasOwnProperty, M3 = Object.prototype.propertyIsEnumerable, Nf = (e, n, r) => n in e ? I3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, A3 = (e, n) => {
  for (var r in n || (n = {})) D3.call(n, r) && Nf(e, r, n[r]);
  if (Af)
    for (var r of Af(n)) M3.call(n, r) && Nf(e, r, n[r]);
  return e;
}, Xg = A3({
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
])), N3 = Object.defineProperty, R3 = Object.defineProperties, V3 = Object.getOwnPropertyDescriptors, Rf = Object.getOwnPropertySymbols, L3 = Object.prototype.hasOwnProperty, F3 = Object.prototype.propertyIsEnumerable, Vf = (e, n, r) => n in e ? N3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Fs = (e, n) => {
  for (var r in n || (n = {})) L3.call(n, r) && Vf(e, r, n[r]);
  if (Rf)
    for (var r of Rf(n)) F3.call(n, r) && Vf(e, r, n[r]);
  return e;
}, Lf = (e, n) => R3(e, V3(n)), { name: H3, n: U3, classes: j3 } = oe("dialog");
function Y3(e, n) {
  const r = x("var-button"), t = x("var-popup");
  return b(), ke(t, {
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
    default: se(() => [L("div", Xe({
      class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
      style: Fs({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
    }, e.$attrs), [
      L("div", { class: p(e.n("title")) }, [F(e.$slots, "title", {}, () => {
        var o;
        return [Le(ve((o = e.title) != null ? o : (e.pt ? e.pt : e.t)("dialogTitle")), 1)];
      })], 2),
      L("div", {
        class: p(e.n("message")),
        style: Q({ textAlign: e.messageAlign })
      }, [F(e.$slots, "default", {}, () => [Le(ve(e.message), 1)])], 6),
      F(e.$slots, "actions", {
        slotClass: e.n("actions"),
        cancel: e.cancel,
        confirm: e.confirm
      }, () => [L("div", { class: p(e.n("actions")) }, [e.cancelButton ? (b(), ke(r, Xe({ key: 0 }, e.cancelButtonNormalizedProps, {
        class: e.classes(e.n("button"), e.n("cancel-button"), [e.cancelButtonProps != null, e.n("--with-button-props")]),
        "var-dialog-cover": "",
        onClick: e.cancel
      }), {
        default: se(() => {
          var o;
          return [Le(ve((o = e.cancelButtonText) != null ? o : (e.pt ? e.pt : e.t)("dialogCancelButtonText")), 1)];
        }),
        _: 1
      }, 16, ["class", "onClick"])) : X("v-if", !0), e.confirmButton ? (b(), ke(r, Xe({ key: 1 }, e.confirmButtonNormalizedProps, {
        class: e.classes(e.n("button"), e.n("confirm-button"), [e.confirmButtonProps != null, e.n("--with-button-props")]),
        "var-dialog-cover": "",
        onClick: e.confirm
      }), {
        default: se(() => {
          var o;
          return [Le(ve((o = e.confirmButtonText) != null ? o : (e.pt ? e.pt : e.t)("dialogConfirmButtonText")), 1)];
        }),
        _: 1
      }, 16, ["class", "onClick"])) : X("v-if", !0)], 2)])
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
var Gg = te({
  name: H3,
  components: {
    VarPopup: ut,
    VarButton: Jn
  },
  inheritAttrs: !1,
  props: Xg,
  setup(e) {
    const { t: n } = kr(), r = P(!1), t = P(!1), o = yn(e, "confirmButtonLoading"), a = yn(e, "cancelButtonLoading"), i = yn(e, "confirmButtonDisabled"), l = yn(e, "cancelButtonDisabled"), s = S(() => {
      var m, y, $, w, z, T;
      return Lf(Fs({ text: !0 }, e.confirmButtonProps), {
        textColor: (y = e.confirmButtonTextColor) != null ? y : (m = e.confirmButtonProps) == null ? void 0 : m.textColor,
        color: (w = e.confirmButtonColor) != null ? w : ($ = e.confirmButtonProps) == null ? void 0 : $.color,
        loading: o.value || ((z = e.confirmButtonProps) == null ? void 0 : z.loading),
        disabled: i.value || ((T = e.confirmButtonProps) == null ? void 0 : T.disabled)
      });
    }), u = S(() => {
      var m, y, $, w, z, T;
      return Lf(Fs({ text: !0 }, e.cancelButtonProps), {
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
    ge(() => e.show, (m) => {
      r.value = m;
    }, { immediate: !0 }), ge(() => e.closeOnClickOverlay, (m) => {
      if (e.onBeforeClose != null) {
        t.value = !1;
        return;
      }
      t.value = m;
    }, { immediate: !0 });
    function c() {
      return C(e["onUpdate:show"], !1);
    }
    function f() {
      const { closeOnClickOverlay: m, onClickOverlay: y, onBeforeClose: $ } = e;
      if (C(y), !!m) {
        if ($ != null) {
          C($, "close", c, d);
          return;
        }
        C(e["onUpdate:show"], !1);
      }
    }
    function v() {
      const { onBeforeClose: m, onConfirm: y } = e;
      if (C(y), m != null) {
        C(m, "confirm", c, d);
        return;
      }
      C(e["onUpdate:show"], !1);
    }
    function g() {
      const { onBeforeClose: m, onCancel: y } = e;
      if (C(y), m != null) {
        C(m, "cancel", c, d);
        return;
      }
      C(e["onUpdate:show"], !1);
    }
    function h() {
      C(e.onKeyEscape), e.closeOnKeyEscape && g();
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
      n: U3,
      classes: j3,
      handleClickOverlay: f,
      confirm: v,
      cancel: g,
      toSizeUnit: Te,
      handleKeyEscape: h
    };
  }
});
Gg.render = Y3;
var Yo = Gg, K3 = Object.defineProperty, W3 = Object.defineProperties, q3 = Object.getOwnPropertyDescriptors, Ff = Object.getOwnPropertySymbols, X3 = Object.prototype.hasOwnProperty, G3 = Object.prototype.propertyIsEnumerable, Hf = (e, n, r) => n in e ? K3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Yl = (e, n) => {
  for (var r in n || (n = {})) X3.call(n, r) && Hf(e, r, n[r]);
  if (Ff)
    for (var r of Ff(n)) G3.call(n, r) && Hf(e, r, n[r]);
  return e;
}, Z3 = (e, n) => W3(e, q3(n)), tt, Ea = {};
function J3(e = {}) {
  return Pn(e) ? Z3(Yl({}, Ea), { message: e }) : Yl(Yl({}, Ea), e);
}
function ht(e) {
  return Er() ? new Promise((n) => {
    ht.close();
    const r = $n(J3(e));
    r.teleport = "body", tt = r;
    const { unmountInstance: t } = Jt(Yo, r, {
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
        C(r.onClosed), t(), tt === r && (tt = null);
      },
      onRouteChange: () => {
        t(), tt === r && (tt = null);
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
  if (tt != null) {
    const e = tt;
    tt = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
ht.Component = Yo;
ue(Yo);
ue(Yo, ht);
fe(ht, Xg);
var yN = Yo, Hs = ht, Zg = {
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
}, { name: Q3, n: x3, classes: _3 } = oe("divider");
function eO(e, n) {
  return b(), k("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.withPresetInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
    style: Q(e.style),
    role: "separator"
  }, [e.vertical ? X("v-if", !0) : F(e.$slots, "default", { key: 0 }, () => [e.description ? (b(), k("span", {
    key: 0,
    class: p(e.n("text"))
  }, ve(e.description), 3)) : X("v-if", !0)])], 6);
}
var Jg = te({
  name: Q3,
  props: Zg,
  setup(e, { slots: n }) {
    const r = P(!1), t = S(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), o = S(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (Do(i) || l) return { margin: s };
      const u = Z(i), d = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${Te(d)})`,
        left: u > 0 ? Te(d) : Te(0)
      };
    });
    En(a), qt(a);
    function a() {
      const { description: i, vertical: l } = e;
      r.value = (n.default || i != null) && !l;
    }
    return {
      n: x3,
      classes: _3,
      withText: r,
      style: o,
      withPresetInset: t
    };
  }
});
Jg.render = eO;
var Ni = Jg;
ue(Ni);
fe(Ni, Zg);
var wN = Ni, Us = Ni, Qg = {
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
}, nO = Object.defineProperty, rO = Object.defineProperties, tO = Object.getOwnPropertyDescriptors, Uf = Object.getOwnPropertySymbols, oO = Object.prototype.hasOwnProperty, aO = Object.prototype.propertyIsEnumerable, jf = (e, n, r) => n in e ? nO(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Yf = (e, n) => {
  for (var r in n || (n = {})) oO.call(n, r) && jf(e, r, n[r]);
  if (Uf)
    for (var r of Uf(n)) aO.call(n, r) && jf(e, r, n[r]);
  return e;
}, Kf = (e, n) => rO(e, tO(n)), { name: iO, n: lO, classes: sO } = oe("drag");
function uO(e, n) {
  return b(), ke(Hr, {
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
  }), [F(e.$slots, "default")], 16)], 8, ["to", "disabled"]);
}
var xg = te({
  name: iO,
  inheritAttrs: !1,
  props: Qg,
  setup(e, { attrs: n }) {
    const r = P(null), t = P(0), o = P(0), a = P(!1), i = P(!1), { touching: l, dragging: s, moveX: u, moveY: d, startTouch: c, moveTouch: f, endTouch: v, resetTouch: g } = Zt(), { disabled: h } = zt(), m = $n({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    ge(() => e.boundary, D), wr(B), En(() => {
      D(), B();
    });
    function y(M) {
      e.disabled || (c(M), T());
    }
    function $(M) {
      !l.value || e.disabled || (f(M), Ze(M), i.value = !1, a.value = !0, e.direction.includes("x") && (t.value += u.value), e.direction.includes("y") && (o.value += d.value), A());
    }
    function w() {
      e.disabled || (v(), i.value = !0, H());
    }
    function z(M) {
      s.value || C(e.onClick, M);
    }
    function T() {
      const { left: M, top: I } = O();
      t.value = M, o.value = I;
    }
    function O() {
      const M = kn(r.value), I = kn(window), j = M.top - I.top, W = I.bottom - M.bottom, G = M.left - I.left, ce = I.right - M.right, { width: me, height: de } = M, { width: J, height: ne } = I;
      return {
        top: j,
        bottom: W,
        left: G,
        right: ce,
        width: me,
        height: de,
        halfWidth: me / 2,
        halfHeight: de / 2,
        windowWidth: J,
        windowHeight: ne
      };
    }
    function R() {
      const M = O(), I = m.left, j = M.windowWidth - m.right - M.width, W = m.top, G = M.windowHeight - m.bottom - M.height;
      return {
        minX: I,
        minY: W,
        maxX: I < j ? j : I,
        maxY: W < G ? G : W
      };
    }
    function H() {
      if (e.attraction == null) return;
      const { halfWidth: M, halfHeight: I, top: j, bottom: W, left: G, right: ce } = O(), { minX: me, minY: de, maxX: J, maxY: ne } = R(), pe = G + M - m.left, Oe = ce + M - m.right, Y = j + I - m.top, ae = W + I - m.bottom, Ee = pe <= Oe, Ue = Y <= ae;
      e.attraction.includes("x") && (t.value = Ee ? me : J), e.attraction.includes("y") && (o.value = Ue ? de : ne);
    }
    function A() {
      const { minX: M, minY: I, maxX: j, maxY: W } = R();
      t.value = hn(t.value, M, j), o.value = hn(o.value, I, W);
    }
    function D() {
      const { top: M = 0, bottom: I = 0, left: j = 0, right: W = 0 } = e.boundary;
      m.top = fn(M), m.bottom = fn(I), m.left = fn(j), m.right = fn(W);
    }
    function E() {
      var M;
      const I = (M = n.style) != null ? M : {};
      return Kf(Yf({}, n), { style: Kf(Yf({}, I), {
        top: a.value ? 0 : I.top,
        left: a.value ? 0 : I.left,
        right: a.value ? "auto" : I.right,
        bottom: a.value ? "auto" : I.bottom,
        transform: a.value ? `translate(${t.value}px, ${o.value}px)` : I.transform
      }) });
    }
    function B() {
      a.value && (T(), A());
    }
    function N() {
      g(), i.value = !1, a.value = !1, t.value = 0, o.value = 0;
    }
    return {
      drag: r,
      x: t,
      y: o,
      enableTransition: i,
      dragging: s,
      teleportDisabled: h,
      n: lO,
      classes: sO,
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
xg.render = uO;
var Ri = xg;
ue(Ri);
fe(Ri, Qg);
var kN = Ri, Ba = Ri, _g = {
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
}, { name: dO, n: cO, classes: fO } = oe("tooltip");
function vO(e, n) {
  return b(), k("div", {
    ref: "host",
    class: p(e.classes(e.n(), e.n("$--box")))
  }, [F(e.$slots, "default"), (b(), ke(Hr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [U(bn, {
    name: e.n(),
    onAfterEnter: e.onOpened,
    onAfterLeave: e.handleClosed,
    persisted: ""
  }, {
    default: se(() => [Ke(L("div", {
      ref: "popover",
      class: p(e.classes(e.n("tooltip"), e.n("$--box"))),
      style: Q({ zIndex: e.zIndex }),
      onClick: n[0] || (n[0] = Nn(() => {
      }, ["stop"])),
      onMouseenter: n[1] || (n[1] = (...r) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...r)),
      onMouseleave: n[2] || (n[2] = (...r) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...r))
    }, [L("div", {
      style: Q({
        background: e.color,
        color: e.textColor,
        width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.referenceSize.width)) : void 0
      }),
      class: p(e.classes(e.n("content-container"), e.n(`--${e.type}`))),
      role: "tooltip"
    }, [F(e.$slots, "content", {}, () => [Le(ve(e.content), 1)])], 6)], 38), [[yr, e.show]])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]))], 2);
}
var eh = te({
  name: dO,
  props: _g,
  setup(e) {
    const { disabled: n } = zt(), { popover: r, host: t, referenceSize: o, show: a, zIndex: i, handlePopoverMouseenter: l, handlePopoverMouseleave: s, handlePopoverClose: u, handleClosed: d, open: c, close: f, resize: v, setReference: g } = nm(e);
    return {
      popover: r,
      host: t,
      referenceSize: o,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: Te,
      n: cO,
      classes: fO,
      handlePopoverClose: u,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: s,
      handleClosed: d,
      resize: v,
      open: c,
      close: f,
      setReference: g
    };
  }
});
eh.render = vO;
var Vi = eh;
ue(Vi);
fe(Vi, _g);
var $N = Vi, Ia = Vi, nh = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": V()
}, pO = Object.defineProperty, Wf = Object.getOwnPropertySymbols, mO = Object.prototype.hasOwnProperty, gO = Object.prototype.propertyIsEnumerable, qf = (e, n, r) => n in e ? pO(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, hO = (e, n) => {
  for (var r in n || (n = {})) mO.call(n, r) && qf(e, r, n[r]);
  if (Wf)
    for (var r of Wf(n)) gO.call(n, r) && qf(e, r, n[r]);
  return e;
}, { name: bO, n: yO, classes: wO } = oe("ellipsis"), kO = { key: 0 };
function $O(e, n) {
  const r = x("var-tooltip");
  return b(), ke(r, Xe({
    class: e.classes(e.n(), [
      e.lineClamp,
      e.n("--clamp"),
      e.n("--line")
    ], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")]),
    "var-ellipsis-cover": "",
    style: e.rootStyles
  }, e.tooltipProps, { onClick: e.handleClick }), {
    content: se(() => [F(e.$slots, "tooltip-content", {}, () => {
      var t;
      return [(t = e.tooltipProps) != null && t.content ? (b(), k("span", kO, ve(e.tooltipProps.content), 1)) : F(e.$slots, "default", { key: 1 })];
    })]),
    default: se(() => [L("span", null, [F(e.$slots, "default")])]),
    _: 3
  }, 16, [
    "class",
    "style",
    "onClick"
  ]);
}
var rh = te({
  name: bO,
  components: { VarTooltip: Ia },
  props: nh,
  setup(e) {
    const n = yn(e, "expand"), r = S(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), t = S(() => e.tooltip === !1 ? { disabled: !0 } : e.tooltip === !0 ? { sameWidth: !0 } : hO({ sameWidth: !0 }, e.tooltip));
    function o() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: t,
      expanding: n,
      rootStyles: r,
      n: yO,
      classes: wO,
      handleClick: o
    };
  }
});
rh.render = $O;
var Li = rh;
ue(Li);
fe(Li, nh);
var SN = Li, js = Li, th = {
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
}, { name: SO, classes: Kl, n: cr } = oe("fab"), Fi = te({
  name: SO,
  inheritAttrs: !1,
  props: th,
  setup(e, { slots: n, attrs: r }) {
    const t = yn(e, "active"), o = P(null), a = P(null);
    ge(() => e.trigger, () => {
      t.value = !1;
    }), ge(() => e.disabled, () => {
      t.value = !1;
    }), ge(() => [
      e.position,
      e.fixed,
      e.top,
      e.bottom,
      e.left,
      e.right
    ], () => {
      var d;
      (d = a.value) == null || d.reset();
    }), xv(o, "click", s);
    function i(d, c, f) {
      if (d.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (f === 0) {
          C(e.onClick, t.value, d);
          return;
        }
        t.value = c, C(e.onClick, t.value, d), C(t.value ? e.onOpen : e.onClose);
      }
    }
    function l(d, c) {
      e.trigger !== "hover" || e.disabled || c === 0 || (t.value = d, C(t.value ? e.onOpen : e.onClose));
    }
    function s() {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, C(e.onClose));
    }
    function u() {
      return n.trigger ? e.show ? n.trigger({ active: t.value }) : null : Ke(U(Jn, {
        "var-fab-cover": !0,
        class: cr("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        iconContainer: !0
      }, { default: () => [U(Je, {
        "var-fab-cover": !0,
        class: Kl([
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
      const c = Va((d = C(n.default)) != null ? d : []), f = Do(e.drag) ? {} : e.drag;
      return U(Ba, Xe({
        ref: a,
        class: Kl(cr(`--position-${e.position}`), [!e.fixed, cr("--absolute")]),
        style: {
          top: Te(e.top),
          bottom: Te(e.bottom),
          left: Te(e.left),
          right: Te(e.right)
        },
        zIndex: e.zIndex,
        teleport: e.teleport,
        disabled: e.disabled || !e.drag || !e.fixed,
        direction: f.direction,
        attraction: f.attraction,
        boundary: f.boundary,
        onClick: (v) => i(v, !t.value, c.length)
      }, r), { default: () => [U("div", {
        class: Kl(cr(), cr(`--direction-${e.direction}`), [e.safeArea, cr("--safe-area")]),
        ref: o,
        onMouseleave: () => l(!1, c.length),
        onMouseenter: () => l(!0, c.length)
      }, [U(bn, { name: cr("--active-transition") }, { default: () => [u()] }), U(bn, {
        name: cr(`--actions-transition-${e.direction}`),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, { default: () => [Ke(U("div", {
        class: cr("actions"),
        onClick: (v) => v.stopPropagation()
      }, [c.map((v) => {
        var g;
        return U("div", {
          class: cr("action"),
          key: (g = v.key) != null ? g : void 0
        }, [v]);
      })]), [[yr, e.show && t.value && c.length]])] })])] });
    };
  }
});
ue(Fi);
fe(Fi, th);
var CN = Fi, Ys = Fi, oh = {
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
}, { name: CO, n: PO, classes: OO } = oe("floating-panel"), Xf = 100, Gf = 0.2;
function zO(e, n) {
  return b(), ke(Hr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [L("div", {
    class: p(e.classes(e.n(), [e.safeArea, e.n("--safe-area")], e.formatElevation(e.elevation, 3))),
    style: Q({
      height: `${e.toSizeUnit(e.maxAnchor)}`,
      transform: `translateY(calc(100% - ${e.toSizeUnit(e.visibleHeight)}))`,
      transition: e.touching ? "none" : `transform ${e.toNumber(e.duration)}ms var(--floating-panel-transition-timing-function), background-color 0.25s`
    }),
    onTouchstart: n[0] || (n[0] = (...r) => e.handleTouchstart && e.handleTouchstart(...r)),
    onTouchmove: n[1] || (n[1] = (...r) => e.handleTouchmove && e.handleTouchmove(...r)),
    onTouchend: n[2] || (n[2] = (...r) => e.handleTouchend && e.handleTouchend(...r)),
    onTouchcancel: n[3] || (n[3] = (...r) => e.handleTouchend && e.handleTouchend(...r))
  }, [F(e.$slots, "header", {}, () => [L("div", { class: p(e.n("header")) }, [L("div", { class: p(e.n("header-toolbar")) }, null, 2)], 2)]), L("div", {
    ref: "contentRef",
    class: p(e.n("content"))
  }, [F(e.$slots, "default")], 2)], 38)], 8, ["to", "disabled"]);
}
var ah = te({
  name: CO,
  props: oh,
  setup(e) {
    const n = P(0), r = P(null), { height: t } = Z0(), o = S(() => t.value * 0.6), a = yn(e, "anchor", { defaultValue: Xf }), i = S(() => {
      const A = [Xf, o.value], { anchors: D } = e;
      return Or(D) ? A : D;
    }), l = S(() => Math.min(...i.value)), s = S(() => Math.max(...i.value)), { disabled: u } = zt(), { deltaY: d, touching: c, startTouch: f, moveTouch: v, endTouch: g, isReachTop: h, isReachBottom: m } = Zt();
    let y;
    Mo(() => c.value), ge(() => a.value, $, { immediate: !0 }), ge(() => i.value, () => {
      $(a.value);
    }, { immediate: !0 });
    function $(A) {
      O(A ?? l.value);
    }
    function w(A) {
      f(A), y = n.value;
    }
    function z(A) {
      var D;
      v(A);
      const E = A.target, B = r.value === E || ((D = r.value) == null ? void 0 : D.contains(E));
      if (!(B && !e.contentDraggable)) {
        if (B && e.contentDraggable && n.value >= s.value && !h(r.value)) {
          m(r.value) && Ze(A);
          return;
        }
        O(R(y - d.value)), Ze(A);
      }
    }
    function T() {
      g();
      const A = a.value;
      O(n.value), a.value = n.value, a.value !== A && C(e.onAnchorChange, n.value);
    }
    function O(A) {
      n.value = c.value ? A : H(A);
    }
    function R(A) {
      if (A > s.value) {
        const D = A - s.value;
        return s.value + D * Gf;
      }
      if (A < l.value) {
        const D = l.value - A;
        return l.value - D * Gf;
      }
      return A;
    }
    function H(A) {
      if (i.value.includes(A)) return A;
      let D = 1 / 0, E = 0;
      return i.value.forEach((B) => {
        const N = Math.abs(B - A);
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
      n: PO,
      classes: OO,
      toSizeUnit: Te,
      toNumber: Z,
      formatElevation: On,
      handleTouchstart: w,
      handleTouchmove: z,
      handleTouchend: T
    };
  }
});
ah.render = zO;
var Hi = ah;
ue(Hi);
fe(Hi, oh);
var PN = Hi, Ks = Hi, ih = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: V(),
  onReset: V()
}, Zf = (e, n, r) => new Promise((t, o) => {
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
}), { name: TO, n: EO } = oe("form");
function BO(e, n) {
  return b(), k("form", {
    class: p(e.n()),
    onSubmit: n[0] || (n[0] = (...r) => e.handleSubmit && e.handleSubmit(...r)),
    onReset: n[1] || (n[1] = (...r) => e.handleReset && e.handleReset(...r))
  }, [F(e.$slots, "default")], 34);
}
var lh = te({
  name: TO,
  props: ih,
  setup(e) {
    const n = S(() => e.disabled), r = S(() => e.readonly), { formItems: t, bindFormItems: o } = V1();
    o({
      disabled: n,
      readonly: r
    });
    function a(c) {
      setTimeout(() => {
        const f = dt(c), v = f === window ? 0 : Wd(f);
        go(f, {
          top: Wd(c) - v - fn(e.scrollToErrorOffsetY),
          animation: us
        });
      }, 300);
    }
    function i(c) {
      return Zf(this, null, function* () {
        Ze(c);
        const f = yield s();
        C(e.onSubmit, f);
      });
    }
    function l(c) {
      Ze(c), u(), C(e.onReset);
    }
    function s() {
      return Zf(this, null, function* () {
        var c;
        const f = yield Promise.all(t.map(({ validate: v }) => v()));
        if (e.scrollToError) {
          const [, v] = N0(f, (h) => h === !1, e.scrollToError), g = v > -1;
          return g && a((c = t[v].instance.proxy) == null ? void 0 : c.$el), !g;
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
      n: EO,
      handleSubmit: i,
      handleReset: l,
      validate: s,
      reset: u,
      resetValidation: d
    };
  }
});
lh.render = BO;
var xt = lh;
xt.useValidation = xn;
xt.useForm = Kn;
ue(xt);
fe(xt, ih);
var ON = xt, Ws = xt, sh = {
  highlighter: Object,
  theme: String,
  tag: {
    type: String,
    default: "div"
  }
}, { name: IO, n: DO } = oe("highlighter-provider"), Ui = te({
  name: IO,
  props: sh,
  setup(e, { slots: n }) {
    return KC({
      highlighter: S(() => e.highlighter),
      theme: S(() => e.theme)
    }), () => Fn(e.tag, { class: DO() }, C(n.default));
  }
});
ue(Ui);
fe(Ui, sh);
var zN = Ui, qs = Ui, uh = {
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
}, { name: MO, n: AO, classes: NO } = oe("image"), RO = [
  "alt",
  "title",
  "referrerpolicy",
  "lazy-loading",
  "lazy-error"
], VO = [
  "alt",
  "title",
  "referrerpolicy",
  "src"
];
function LO(e, n) {
  var r;
  const t = _e("lazy"), o = _e("ripple");
  return Ke((b(), k("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
    style: Q({
      width: e.toSizeUnit(e.width),
      height: e.toSizeUnit(e.height),
      borderRadius: e.toSizeUnit(e.radius)
    })
  }, [
    e.lazy && !e.showErrorSlot ? Ke((b(), k("img", {
      key: 0,
      role: "img",
      class: p(e.n("image")),
      alt: e.alt,
      title: e.title,
      referrerpolicy: e.referrerpolicy,
      "lazy-loading": e.loading,
      "lazy-error": e.error,
      style: Q({
        objectFit: e.fit,
        objectPosition: e.position
      }),
      onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
      onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
    }, null, 46, RO)), [[t, (r = e.src) != null ? r : ""]]) : X("v-if", !0),
    !e.lazy && !e.showErrorSlot ? (b(), k("img", {
      key: 1,
      role: "img",
      class: p(e.n("image")),
      alt: e.alt,
      title: e.title,
      referrerpolicy: e.referrerpolicy,
      style: Q({
        objectFit: e.fit,
        objectPosition: e.position
      }),
      src: e.src,
      onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
      onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
      onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
    }, null, 46, VO)) : X("v-if", !0),
    e.showErrorSlot ? F(e.$slots, "error", { key: 2 }) : X("v-if", !0)
  ], 6)), [[o, { disabled: !e.ripple }]]);
}
var dh = te({
  name: MO,
  directives: {
    Lazy: wo,
    Ripple: vn
  },
  props: uh,
  setup(e, { slots: n }) {
    const r = P(!1);
    ge(() => e.src, () => {
      r.value = !1;
    });
    function t(i) {
      r.value = !!n.error, C(e.onError, i);
    }
    function o(i) {
      const l = i.currentTarget;
      if (e.lazy) {
        if (l._lazy.state === "success") {
          C(e.onLoad, i);
          return;
        }
        l._lazy.state === "error" && t(i);
      } else C(e.onLoad, i);
    }
    function a(i) {
      C(e.onClick, i);
    }
    return {
      showErrorSlot: r,
      n: AO,
      classes: NO,
      toSizeUnit: Te,
      handleLoad: o,
      handleError: t,
      handleClick: a
    };
  }
});
dh.render = LO;
var ji = dh;
ue(ji);
fe(ji, uh);
var TN = ji, Xs = ji, ud = {
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
}, It = (e, n, r) => new Promise((t, o) => {
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
}), FO = 250, HO = 20, { name: UO, n: Jf, classes: jO } = oe("swipe"), YO = ["onClick"];
function KO(e, n) {
  const r = x("var-icon"), t = x("var-button"), o = _e("hover");
  return Ke((b(), k("div", {
    ref: "swipeEl",
    class: p(e.n())
  }, [
    L("div", {
      class: p(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
      style: Q({
        width: e.vertical ? void 0 : e.toSizeUnit(e.trackSize),
        height: e.vertical ? e.toSizeUnit(e.trackSize) : void 0,
        transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.trackTranslate)})`,
        transitionDuration: e.lockDuration ? "0ms" : `${e.toNumber(e.duration)}ms`
      }),
      onTouchstart: n[0] || (n[0] = (...a) => e.handleTouchstart && e.handleTouchstart(...a)),
      onTouchmove: n[1] || (n[1] = (...a) => e.handleTouchmove && e.handleTouchmove(...a)),
      onTouchend: n[2] || (n[2] = (...a) => e.handleTouchend && e.handleTouchend(...a))
    }, [F(e.$slots, "default")], 38),
    e.navigation ? F(e.$slots, "prev", yt(Xe({ key: 0 }, {
      index: e.index,
      length: e.length,
      prev: e.prev,
      next: e.next,
      to: e.to,
      hovering: e.hovering
    })), () => [U(bn, { name: e.getNavigationAnimation("prev") }, {
      default: se(() => [e.navigation === !0 || e.hovering ? (b(), k("div", {
        key: 0,
        class: p(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
      }, [U(t, {
        "var-swipe-cover": "",
        disabled: !e.loop && e.index === 0,
        class: p(e.n("navigation-prev-button")),
        onClick: n[3] || (n[3] = (a) => e.prev())
      }, {
        default: se(() => [U(r, {
          "var-swipe-cover": "",
          class: p(e.n("navigation-prev-button-icon")),
          name: e.vertical ? "chevron-up" : "chevron-left"
        }, null, 8, ["class", "name"])]),
        _: 1
      }, 8, ["disabled", "class"])], 2)) : X("v-if", !0)]),
      _: 1
    }, 8, ["name"])]) : X("v-if", !0),
    e.navigation ? F(e.$slots, "next", yt(Xe({ key: 1 }, {
      index: e.index,
      length: e.length,
      hovering: e.hovering,
      prev: e.prev,
      next: e.next,
      to: e.to
    })), () => [U(bn, { name: e.getNavigationAnimation("next") }, {
      default: se(() => [e.navigation === !0 || e.hovering ? (b(), k("div", {
        key: 0,
        class: p(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
      }, [U(t, {
        "var-swipe-cover": "",
        class: p(e.n("navigation-next-button")),
        disabled: !e.loop && e.index === e.length - 1,
        onClick: n[4] || (n[4] = (a) => e.next())
      }, {
        default: se(() => [U(r, {
          "var-swipe-cover": "",
          class: p(e.n("navigation-next-button-icon")),
          name: e.vertical ? "chevron-down" : "chevron-right"
        }, null, 8, ["class", "name"])]),
        _: 1
      }, 8, ["class", "disabled"])], 2)) : X("v-if", !0)]),
      _: 1
    }, 8, ["name"])]) : X("v-if", !0),
    F(e.$slots, "indicator", yt(Aa({
      index: e.index,
      length: e.length,
      hovering: e.hovering,
      prev: e.prev,
      next: e.next,
      to: e.to
    })), () => [e.indicator && e.length ? (b(), k("div", {
      key: 0,
      class: p(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
    }, [(b(!0), k(Ie, null, Ye(e.length, (a, i) => (b(), k("div", {
      key: a,
      class: p(e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
      style: Q({ background: e.indicatorColor }),
      onClick: (l) => e.to(i)
    }, null, 14, YO))), 128))], 2)) : X("v-if", !0)])
  ], 2)), [[o, e.handleHovering]]);
}
var ch = te({
  name: UO,
  directives: { Hover: jn },
  components: {
    VarButton: Jn,
    VarIcon: Je
  },
  props: ud,
  setup(e) {
    const n = P(null), r = P(0), t = S(() => e.vertical), o = P(0), a = P(0), i = P(!1), l = P(0), s = P(!1), { swipeItems: u, bindSwipeItems: d, length: c } = L1(), { swipeResizeListeners: f, bindSwipeResizeListeners: v } = F1(), { popup: g, bindPopup: h } = cp(), { deltaX: m, deltaY: y, moveX: $, moveY: w, offsetX: z, offsetY: T, touching: O, direction: R, startTime: H, startTouch: A, moveTouch: D, endTouch: E } = Zt(), B = S(() => R.value === (e.vertical ? "vertical" : "horizontal"));
    let N = !1, M = -1;
    d({
      size: r,
      currentIndex: l,
      vertical: t
    }), xe(() => window, "keydown", Ue), C(h, null), C(v, null), ge(() => c.value, () => It(null, null, function* () {
      yield Gn(), de(), nn();
    })), g && ge(() => g.show.value, (ye) => It(null, null, function* () {
      ye ? (yield Gn(), nn()) : ne();
    })), vt(nn), Gt(ne), wr(nn);
    function I(ye) {
      return u.find(({ index: ee }) => ee.value === ye);
    }
    function j() {
      e.loop && (a.value >= 0 && I(c.value - 1).setTranslate(-o.value), a.value <= -(o.value - r.value) && I(0).setTranslate(o.value), a.value > -(o.value - r.value) && a.value < 0 && (I(c.value - 1).setTranslate(0), I(0).setTranslate(0)));
    }
    function W(ye) {
      const ee = tr(ye) ? ye : Math.floor((a.value - r.value / 2) / -r.value), { loop: K } = e;
      return ee <= -1 ? K ? -1 : 0 : ee >= c.value ? K ? c.value : c.value - 1 : ee;
    }
    function G(ye) {
      const { loop: ee } = e;
      return ye === -1 ? ee ? c.value - 1 : 0 : ye === c.value ? ee ? 0 : c.value - 1 : ye;
    }
    function ce(ye) {
      return e.loop ? ye < 0 ? c.value + ye : ye >= c.value ? ye - c.value : ye : hn(ye, 0, c.value - 1);
    }
    function me() {
      return It(this, null, function* () {
        const ye = a.value >= r.value, ee = a.value <= -o.value, K = 0, re = -(o.value - r.value);
        i.value = !0, (ye || ee) && (i.value = !0, a.value = ee ? K : re, I(0).setTranslate(0), I(c.value - 1).setTranslate(0)), yield Gn(), i.value = !1;
      });
    }
    function de() {
      N || (l.value = ce(Z(e.initialIndex)), N = !0);
    }
    function J() {
      const { autoplay: ye } = e;
      !ye || c.value <= 1 || (ne(), M = window.setTimeout(() => {
        qe(), J();
      }, Z(ye)));
    }
    function ne() {
      M && clearTimeout(M);
    }
    function pe(ye) {
      return It(this, null, function* () {
        c.value <= 1 || !e.touchable || (A(ye), ne(), yield me(), i.value = !0);
      });
    }
    function Oe(ye) {
      const { touchable: ee, vertical: K } = e;
      !O.value || !ee || (D(ye), B.value && (Ze(ye), a.value += K ? w.value : $.value, j()));
    }
    function Y() {
      if (!O.value || (E(), !B.value)) return;
      const { vertical: ye, onChange: ee } = e, K = ye ? y.value < 0 : m.value < 0, re = ye ? T.value : z.value, we = performance.now() - H.value <= FO && re >= HO ? W(K ? l.value + 1 : l.value - 1) : W();
      i.value = !1, a.value = we * -r.value;
      const ze = l.value;
      l.value = G(we), J(), ze !== l.value && C(ee, l.value);
    }
    function ae(ye) {
      e.navigation === "hover" && (s.value = ye);
    }
    function Ee(ye) {
      return e.navigation !== "hover" ? "" : Jf(`--navigation${e.vertical ? "-vertical" : ""}-${ye}-animation`);
    }
    function Ue(ye) {
      if (!u.length || u.findIndex(({ isFocusing: K }) => K.value) === -1) return;
      const { key: ee } = ye;
      Ze(ye), ee === "ArrowLeft" && en(), ee === "ArrowRight" && qe();
    }
    function nn() {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, o.value = r.value * c.value, a.value = l.value * -r.value, u.forEach((ye) => {
        ye.setTranslate(0);
      }), J(), setTimeout(() => {
        i.value = !1;
      }), f.forEach(({ onResize: ye }) => {
        ye();
      }));
    }
    function qe(ye) {
      return It(this, null, function* () {
        if (c.value <= 1) return;
        de();
        const { loop: ee, onChange: K } = e, re = l.value;
        if (l.value = ce(re + 1), ye?.event !== !1 && C(K, l.value), yield me(), re === c.value - 1 && ee) {
          I(0).setTranslate(o.value), a.value = c.value * -r.value;
          return;
        }
        re !== c.value - 1 && (a.value = l.value * -r.value);
      });
    }
    function en(ye) {
      return It(this, null, function* () {
        if (c.value <= 1) return;
        de();
        const { loop: ee, onChange: K } = e, re = l.value;
        if (l.value = ce(re - 1), ye?.event !== !1 && C(K, l.value), yield me(), re === 0 && ee) {
          I(c.value - 1).setTranslate(-o.value), a.value = r.value;
          return;
        }
        re !== 0 && (a.value = l.value * -r.value);
      });
    }
    function on(ye, ee) {
      if (c.value <= 1 || ye === l.value) return;
      ye = ye < 0 ? 0 : ye, ye = ye >= c.value ? c.value : ye;
      const K = ye > l.value ? qe : en, re = Math.abs(ye - l.value);
      Array.from({ length: re }).forEach((we, ze) => {
        K({ event: ze === re - 1 ? ee?.event : !1 });
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
      n: Jf,
      toSizeUnit: Te,
      classes: jO,
      handleTouchstart: pe,
      handleTouchmove: Oe,
      handleTouchend: Y,
      next: qe,
      prev: en,
      to: on,
      resize: nn,
      toNumber: Z,
      handleHovering: ae,
      getNavigationAnimation: Ee
    };
  }
});
ch.render = KO;
var Yi = ch;
ue(Yi);
fe(Yi, ud);
var EN = Yi, Po = Yi;
function WO() {
  const { bindParent: e, index: n, parentProvider: r } = Bn(Fp);
  return or(!!e, "SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var { name: qO, n: XO } = oe("swipe-item"), GO = ["aria-hidden"];
function ZO(e, n) {
  return b(), k("div", {
    class: p(e.n()),
    style: Q({
      width: e.vertical ? void 0 : e.toSizeUnit(e.size),
      height: e.vertical ? e.toSizeUnit(e.size) : void 0,
      transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.translate)})`
    }),
    tabindex: "-1",
    "aria-hidden": e.currentIndex !== e.index,
    onFocus: n[0] || (n[0] = (r) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (r) => e.isFocusing = !1)
  }, [F(e.$slots, "default")], 46, GO);
}
var fh = te({
  name: qO,
  setup() {
    const e = P(0), n = P(!1), { swipe: r, bindSwipe: t, index: o } = WO(), { size: a, currentIndex: i, vertical: l } = r;
    t({
      index: o,
      isFocusing: S(() => n.value),
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
      n: XO,
      toSizeUnit: Te
    };
  }
});
fh.render = ZO;
var dd = fh;
ue(dd);
var BN = dd, Oo = dd, JO = Object.defineProperty, Qf = Object.getOwnPropertySymbols, QO = Object.prototype.hasOwnProperty, xO = Object.prototype.propertyIsEnumerable, xf = (e, n, r) => n in e ? JO(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, _f = (e, n) => {
  for (var r in n || (n = {})) QO.call(n, r) && xf(e, r, n[r]);
  if (Qf)
    for (var r of Qf(n)) xO.call(n, r) && xf(e, r, n[r]);
  return e;
}, vh = _f(_f({
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
}, Fe(ud, [
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
])), { name: _O, n: ev, classes: ez } = oe("image-preview"), Wl = 12, nv = 200, nz = 350, rv = 200, rz = 500, na = 1, tz = ["onTouchstart"], oz = ["src", "alt"];
function az(e, n) {
  const r = x("var-swipe-item"), t = x("var-swipe"), o = x("var-icon"), a = x("var-button"), i = x("var-popup");
  return b(), ke(i, {
    show: e.show,
    "onUpdate:show": n[3] || (n[3] = (l) => e.show = l),
    "var-image-preview-cover": "",
    class: p(e.n("popup")),
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
    default: se(() => [
      U(t, Xe({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.toNumber(e.initialIndex),
        loop: e.loop
      }, e.$attrs, { onChange: e.onChange }), {
        default: se(() => [(b(!0), k(Ie, null, Ye(e.images, (l, s) => (b(), ke(r, {
          key: l,
          class: p(e.n("swipe-item")),
          "var-image-preview-cover": ""
        }, {
          default: se(() => [L("div", {
            class: p(e.n("zoom-container")),
            style: Q({
              transform: `scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,
              transitionTimingFunction: e.transitionTimingFunction,
              transitionDuration: e.transitionDuration
            }),
            onTouchstart: (u) => e.handleTouchstart(u, s),
            onTouchmove: n[0] || (n[0] = (...u) => e.handleTouchmove && e.handleTouchmove(...u)),
            onTouchend: n[1] || (n[1] = (...u) => e.handleTouchend && e.handleTouchend(...u)),
            onTouchcancel: n[2] || (n[2] = (...u) => e.handleTouchcancel && e.handleTouchcancel(...u))
          }, [L("img", {
            role: "img",
            class: p(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
            src: l,
            alt: l
          }, null, 10, oz)], 46, tz)]),
          _: 2
        }, 1032, ["class"]))), 128))]),
        indicator: se(({ index: l, length: s }) => [F(e.$slots, "indicator", {
          index: l,
          length: s
        }, () => [e.indicator && e.images.length > 1 ? (b(), k("div", {
          key: 0,
          class: p(e.n("indicators"))
        }, ve(l + 1) + " / " + ve(s), 3)) : X("v-if", !0)])]),
        _: 3
      }, 16, [
        "class",
        "touchable",
        "indicator",
        "initial-index",
        "loop",
        "onChange"
      ]),
      F(e.$slots, "close-icon", {}, () => [e.closeable ? (b(), ke(a, {
        key: 0,
        class: p(e.n("close-icon")),
        text: "",
        round: "",
        "var-image-preview-cover": "",
        onClick: e.close
      }, {
        default: se(() => [U(o, {
          class: p(e.n("close-icon-image")),
          name: "window-close"
        }, null, 8, ["class"])]),
        _: 1
      }, 8, ["class", "onClick"])) : X("v-if", !0)]),
      e.$slots.extra ? (b(), k("div", {
        key: 0,
        class: p(e.n("extra"))
      }, [F(e.$slots, "extra")], 2)) : X("v-if", !0)
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
var ph = te({
  name: _O,
  components: {
    VarButton: Jn,
    VarSwipe: Po,
    VarSwipeItem: Oo,
    VarPopup: ut,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: vh,
  setup(e) {
    const n = yn(e, "show"), r = P(1), t = P(0), o = P(0), a = P(), i = P(), l = P(!0), s = P(null), { moveX: u, moveY: d, distance: c, startTime: f, startTouch: v, moveTouch: g, endTouch: h } = Zt(), m = S(() => {
      const { imagePreventDefault: J, show: ne } = e;
      return ne && J;
    });
    let y = null, $ = null, w = !1;
    const z = {
      start: null,
      prev: null
    };
    xe(() => document, "contextmenu", W);
    function T(J) {
      r.value = Z(J), l.value = !1, z.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, rv);
    }
    function O() {
      r.value = 1, t.value = 0, o.value = 0, l.value = !0, z.prev = null, a.value = void 0, i.value = void 0;
    }
    function R(J) {
      return z.prev ? c.value <= Wl && performance.now() - f.value <= nv && z.prev === J : !1;
    }
    function H(J) {
      return !J || !z.start || !z.prev ? !1 : c.value <= Wl && performance.now() - f.value < nz && (J === z.start || J.parentNode === z.start);
    }
    function A() {
      h(), window.clearTimeout($), w = !1, z.start = null;
    }
    function D(J) {
      if (h(), window.clearTimeout($), w) {
        w = !1;
        return;
      }
      const ne = H(J.target);
      y = window.setTimeout(() => {
        ne && j(), z.start = null;
      }, nv);
    }
    function E(J, ne) {
      window.clearTimeout(y), window.clearTimeout($);
      const pe = J.currentTarget;
      if (z.start = pe, $ = window.setTimeout(() => {
        w = !0, C(e.onLongPress, ne);
      }, rz), R(pe)) {
        r.value > na ? O() : T(e.zoom);
        return;
      }
      v(J), z.prev = pe;
    }
    function B(J) {
      const { offsetWidth: ne, offsetHeight: pe } = J, { naturalWidth: Oe, naturalHeight: Y } = J.querySelector(`.${ev("image")}`);
      return {
        width: ne,
        height: pe,
        imageRadio: Y / Oe,
        rootRadio: pe / ne,
        zoom: Z(e.zoom)
      };
    }
    function N(J) {
      const { zoom: ne, imageRadio: pe, rootRadio: Oe, width: Y, height: ae } = B(J);
      if (!pe) return 0;
      const Ee = pe > Oe ? ae / pe : Y;
      return Math.max(0, (ne * Ee - Y) / 2) / ne;
    }
    function M(J) {
      const { zoom: ne, imageRadio: pe, rootRadio: Oe, width: Y, height: ae } = B(J);
      if (!pe) return 0;
      const Ee = pe > Oe ? ae : Y * pe;
      return Math.max(0, (ne * Ee - ae) / 2) / ne;
    }
    function I(J) {
      if (!z.prev) return;
      g(J);
      const ne = J.currentTarget;
      if (c.value > Wl && window.clearTimeout($), r.value > na) {
        const pe = N(ne), Oe = M(ne);
        t.value = hn(t.value + u.value, -pe, pe), o.value = hn(o.value + d.value, -Oe, Oe);
      }
      z.prev = ne;
    }
    function j() {
      if (r.value > na) {
        O(), setTimeout(() => C(e["onUpdate:show"], !1), rv);
        return;
      }
      C(e["onUpdate:show"], !1);
    }
    function W(J) {
      m.value && Ze(J);
    }
    function G(J) {
      var ne;
      (ne = s.value) == null || ne.prev(J);
    }
    function ce(J) {
      var ne;
      (ne = s.value) == null || ne.next(J);
    }
    function me(J, ne) {
      var pe;
      (pe = s.value) == null || pe.to(J, ne);
    }
    function de(J) {
      J <= na ? O() : T(J);
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
      n: ev,
      classes: ez,
      toNumber: Z,
      handleTouchstart: E,
      handleTouchmove: I,
      handleTouchend: D,
      handleTouchcancel: A,
      close: j,
      prev: G,
      next: ce,
      to: me,
      zoom: de
    };
  }
});
ph.render = az;
var Ko = ph, iz = Object.defineProperty, lz = Object.defineProperties, sz = Object.getOwnPropertyDescriptors, tv = Object.getOwnPropertySymbols, uz = Object.prototype.hasOwnProperty, dz = Object.prototype.propertyIsEnumerable, ov = (e, n, r) => n in e ? iz(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, ra = (e, n) => {
  for (var r in n || (n = {})) uz.call(n, r) && ov(e, r, n[r]);
  if (tv)
    for (var r of tv(n)) dz.call(n, r) && ov(e, r, n[r]);
  return e;
}, av = (e, n) => lz(e, sz(n)), ot, vo = {};
function cz(e = {}) {
  return Pn(e) ? av(ra({}, vo), { images: [e] }) : We(e) ? av(ra({}, vo), { images: e }) : ra(ra({}, vo), e);
}
function bt(e) {
  if (!Er()) return;
  bt.close();
  const n = $n(cz(e));
  n.teleport = "body", ot = n;
  const { unmountInstance: r } = Jt(Ko, n, {
    onClose: () => C(n.onClose),
    onClosed: () => {
      C(n.onClosed), r(), ot === n && (ot = null);
    },
    onRouteChange: () => {
      r(), ot === n && (ot = null);
    },
    "onUpdate:show": (t) => {
      n.show = t;
    }
  });
  n.show = !0;
}
bt.close = () => {
  if (ot != null) {
    const e = ot;
    ot = null, Ne().then(() => {
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
ue(Ko);
ue(Ko, bt);
fe(bt, vh);
var IN = Ko, zo = bt, po = {
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
}, iv = (e, n, r) => new Promise((t, o) => {
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
}), { name: fz, n: vz, classes: pz } = oe("sticky");
function mz(e, n) {
  return b(), k("div", {
    ref: "stickyEl",
    class: p(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
    style: Q({
      zIndex: e.toNumber(e.zIndex),
      top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
      width: e.enableFixedMode ? e.fixedWidth : void 0,
      height: e.enableFixedMode ? e.fixedHeight : void 0
    })
  }, [L("div", {
    ref: "wrapperEl",
    class: p(e.n("wrapper")),
    style: Q({
      zIndex: e.toNumber(e.zIndex),
      position: e.enableFixedMode ? "fixed" : void 0,
      width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
      height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
      left: e.enableFixedMode ? e.fixedLeft : void 0,
      top: e.enableFixedMode ? e.fixedTop : void 0
    })
  }, [F(e.$slots, "default")], 6)], 6);
}
var mh = te({
  name: fz,
  props: po,
  setup(e) {
    const n = P(null), r = P(null), t = P(!1), o = P("0px"), a = P("0px"), i = P("auto"), l = P("auto"), s = P("auto"), u = P("auto"), d = S(() => !e.disabled && e.cssMode), c = S(() => !e.disabled && !e.cssMode && t.value), f = S(() => fn(e.offsetTop));
    let v;
    ge(() => e.disabled, $), En(() => iv(null, null, function* () {
      yield Gn(), h(), m();
    })), Gt(y), wr($), xe(() => window, "scroll", m);
    function g() {
      const { cssMode: w, disabled: z } = e;
      if (z) return;
      let T = 0;
      if (v && v !== window) {
        const { top: E } = kn(v);
        T = E;
      }
      const O = r.value, R = n.value, { top: H, left: A } = kn(R), D = H - T;
      return D <= f.value ? (w || (i.value = `${R.offsetWidth}px`, l.value = `${R.offsetHeight}px`, o.value = `${T + f.value}px`, a.value = `${A}px`, s.value = `${O.offsetWidth}px`, u.value = `${O.offsetHeight}px`, t.value = !0), {
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
      const w = g();
      w && C(e.onScroll, w.offsetTop, w.isFixed);
    }
    function y() {
      !v || v === window || v.removeEventListener("scroll", m);
    }
    function $() {
      return iv(this, null, function* () {
        t.value = !1, yield qr(), g();
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
      n: vz,
      classes: pz,
      resize: $,
      toNumber: Z
    };
  }
});
mh.render = mz;
var Ki = mh;
ue(Ki);
fe(Ki, po);
var DN = Ki, To = Ki, gh = { index: [Number, String] }, hh = /* @__PURE__ */ Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function gz() {
  const { bindChildren: e, length: n, childProviders: r } = In(hh);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function hz() {
  const { parentProvider: e, index: n, bindParent: r } = Bn(hh);
  return or(!!r, "IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var { name: bz, n: yz, classes: wz } = oe("index-anchor");
function kz(e, n) {
  return b(), ke(Xt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: "anchorEl",
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode
  }, {
    default: se(() => [L("div", Xe({ class: e.n() }, e.$attrs), [F(e.$slots, "default", {}, () => [Le(ve(e.name), 1)])], 16)]),
    _: 3
  }, 8, [
    "offset-top",
    "z-index",
    "disabled",
    "css-mode"
  ]);
}
var bh = te({
  name: bz,
  components: { VarSticky: To },
  inheritAttrs: !1,
  props: gh,
  setup(e) {
    const n = P(!1), r = S(() => e.index), t = P(null), { index: o, indexBar: a, bindIndexBar: i } = hz(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: d, zIndex: c } = a;
    i({
      index: o,
      name: r,
      setDisabled: v,
      getOffsetTop: f
    });
    function f() {
      return t.value ? t.value.$el ? t.value.$el.offsetTop : t.value.offsetTop : 0;
    }
    function v(g) {
      n.value = g;
    }
    return {
      n: yz,
      classes: wz,
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
bh.render = kz;
var Wi = bh;
ue(Wi);
fe(Wi, gh);
var MN = Wi, Gs = Wi, yh = {
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
}, lv = (e, n, r) => new Promise((t, o) => {
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
}), { name: $z, n: Sz, classes: Cz } = oe("index-bar"), Pz = ["onClick"];
function Oz(e, n) {
  return b(), k("div", {
    ref: "barEl",
    class: p(e.n())
  }, [F(e.$slots, "default"), L("ul", {
    class: p(e.n("anchor-list")),
    style: Q({
      zIndex: e.toNumber(e.zIndex) + 2,
      display: e.hideList ? "none" : "block"
    })
  }, [(b(!0), k(Ie, null, Ye(e.anchorNameList, (r) => (b(), k("li", {
    key: r,
    class: p(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
    style: Q({ color: e.active === r && e.highlightColor ? e.highlightColor : void 0 }),
    onClick: (t) => e.anchorClick({
      anchorName: r,
      manualCall: !0
    })
  }, [F(e.$slots, "anchor-name", { anchorName: r }, () => [Le(ve(r), 1)])], 14, Pz))), 128))], 6)], 2);
}
var wh = te({
  name: $z,
  props: yh,
  setup(e) {
    const n = P(""), r = P(null), t = P([]), o = P(), a = S(() => e.sticky), i = S(() => e.stickyCssMode), l = S(() => fn(e.stickyOffsetTop)), s = S(() => e.zIndex), { length: u, indexAnchors: d, bindIndexAnchors: c } = gz();
    let f = null, v = !1;
    const g = {
      active: o,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    ge(() => u.value, () => lv(null, null, function* () {
      yield Gn(), t.value = d.filter(({ name: O }) => O.value != null).map(({ name: O }) => O.value);
    })), En(w), Pt(z), Ot(() => {
      v = !0, z();
    }), vt(() => {
      !v || o.value === void 0 || ($({
        anchorName: o.value,
        options: { event: !1 }
      }), v = !1);
    }), c(g);
    function h(O, R) {
      const H = Sn(O) ? O.name.value : O;
      H === o.value || H === void 0 || (o.value = H, R?.event !== !1 && C(e.onChange, H));
    }
    function m() {
      const { top: O } = kn(f), { top: R } = kn(r.value);
      return kt(f) - O + R;
    }
    function y() {
      const O = kt(f), R = f === window ? document.body.scrollHeight : f.scrollHeight, H = m();
      d.forEach((A, D) => {
        const E = A.getOffsetTop(), B = O - E + l.value - H, N = D === d.length - 1 ? R : d[D + 1].getOffsetTop() - A.getOffsetTop();
        A.setDisabled(!0), B >= 0 && B < N && n.value === "" && (A.setDisabled(!1), h(A));
      });
    }
    function $(O) {
      return lv(this, arguments, function* ({ anchorName: R, manualCall: H = !1, options: A }) {
        if (H && C(e.onClick, R), R === o.value && !v) return;
        const D = d.find(({ name: M }) => R === M.value);
        if (!D) return;
        const E = m(), B = D.getOffsetTop() - l.value + E, N = Lu(f);
        n.value = R, h(R, A), yield go(f, {
          left: N,
          top: B,
          animation: pm,
          duration: Z(e.duration)
        }), yield Gn(), n.value = "";
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
      n: Sz,
      classes: Cz,
      toNumber: Z,
      scrollTo: T,
      anchorClick: $
    };
  }
});
wh.render = Oz;
var qi = wh;
ue(qi);
fe(qi, yh);
var AN = qi, Zs = qi, kh = {
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
}, { name: zz, n: Tz, classes: Ez } = oe("link");
function Bz(e, n) {
  return b(), ke(Xt(e.tag), Xe(e.linkProps, {
    class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n(`--${e.type}`), [e.underline !== "none", e.n(`--underline-${e.underline}`)], [e.disabled, e.n("--disabled")], [e.isFocusing && !e.inMobile(), e.n("--focusing")]),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick,
    onFocus: n[0] || (n[0] = (r) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (r) => e.isFocusing = !1)
  }), {
    default: se(() => [F(e.$slots, "default")]),
    _: 3
  }, 16, [
    "class",
    "style",
    "onClick"
  ]);
}
var $h = te({
  name: zz,
  props: kh,
  setup(e) {
    const n = P(!1), r = S(() => {
      const { disabled: a, href: i, to: l } = e;
      return a ? "span" : i ? "a" : l ? "router-link" : "a";
    }), t = S(() => {
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
      e.disabled || C(e.onClick, a);
    }
    return {
      tag: r,
      linkProps: t,
      isFocusing: n,
      inMobile: pa,
      n: Tz,
      classes: Ez,
      handleClick: o,
      toSizeUnit: Te
    };
  }
});
$h.render = Bz;
var Xi = $h;
ue(Xi);
fe(Xi, kh);
var NN = Xi, Js = Xi, Sh = {
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
}, Ch = /* @__PURE__ */ Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Iz() {
  const { bindChildren: e, childProviders: n, length: r } = In(Ch);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
var Ph = /* @__PURE__ */ Symbol("TAB_ITEM_BIND_LIST_KEY");
function Dz() {
  const { parentProvider: e, bindParent: n, index: r } = Bn(Ch);
  return or(!!n, "TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
function Mz() {
  const { childProviders: e, bindChildren: n, length: r } = In(Ph);
  return {
    length: r,
    lists: e,
    bindLists: n
  };
}
function Az() {
  const { parentProvider: e, bindParent: n, index: r } = Bn(Ph);
  return {
    index: r,
    tabItem: e,
    bindTabItem: n
  };
}
var Nz = (e, n, r) => new Promise((t, o) => {
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
}), { name: Rz, n: Vz, classes: Lz } = oe("list");
function Fz(e, n) {
  const r = x("var-loading"), t = _e("ripple");
  return b(), k("div", {
    ref: "listEl",
    class: p(e.classes(e.n(), e.n("$--box")))
  }, [
    F(e.$slots, "default"),
    e.loading ? F(e.$slots, "loading", { key: 0 }, () => {
      var o;
      return [L("div", { class: p(e.n("loading")) }, [L("div", { class: p(e.n("loading-text")) }, ve((o = e.loadingText) != null ? o : (e.pt ? e.pt : e.t)("listLoadingText")), 3), U(r, {
        size: "mini",
        radius: 10
      })], 2)];
    }) : X("v-if", !0),
    e.finished ? F(e.$slots, "finished", { key: 1 }, () => {
      var o;
      return [L("div", { class: p(e.n("finished")) }, ve((o = e.finishedText) != null ? o : (e.pt ? e.pt : e.t)("listFinishedText")), 3)];
    }) : X("v-if", !0),
    e.error ? F(e.$slots, "error", { key: 2 }, () => {
      var o;
      return [Ke((b(), k("div", {
        class: p(e.n("error")),
        onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
      }, [Le(ve((o = e.errorText) != null ? o : (e.pt ? e.pt : e.t)("listErrorText")), 1)], 2)), [[t]])];
    }) : X("v-if", !0),
    L("div", {
      ref: "detectorEl",
      class: p(e.n("detector"))
    }, null, 2)
  ], 2);
}
var Oh = te({
  name: Rz,
  directives: { Ripple: vn },
  components: { VarLoading: St },
  props: Sh,
  setup(e) {
    const n = P(null), r = P(null), { tabItem: t, bindTabItem: o } = Az(), { t: a } = kr();
    let i;
    C(o, {}), t && ge(() => t.current.value, d), ge(() => [
      e.loading,
      e.error,
      e.finished
    ], d), En(() => {
      i = dt(n.value), i.addEventListener("scroll", d), e.immediateCheck && d();
    }), Gt(u);
    function l() {
      C(e["onUpdate:error"], !1), C(e["onUpdate:loading"], !0), C(e.onLoad);
    }
    function s() {
      const { bottom: c } = kn(i), { bottom: f } = kn(r.value);
      return Math.floor(f) - fn(e.offset) <= c;
    }
    function u() {
      i && i.removeEventListener("scroll", d);
    }
    function d() {
      return Nz(this, null, function* () {
        yield Ne(), !(e.loading || e.finished || e.error || t?.current.value === !1 || !s()) && l();
      });
    }
    return {
      listEl: n,
      detectorEl: r,
      pt: a,
      t: gn,
      isNumber: tr,
      load: l,
      check: d,
      n: Vz,
      classes: Lz
    };
  }
});
Oh.render = Fz;
var Gi = Oh;
ue(Gi);
fe(Gi, Sh);
var RN = Gi, Qs = Gi, Hz = {
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
}, { name: Uz, classes: jz, n: sv } = oe("loading-bar"), Yz = te({
  name: Uz,
  props: Hz,
  setup(e) {
    return () => U("div", {
      class: jz(sv(), [e.error, sv("--error")]),
      style: {
        zIndex: vr.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: Te(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: Te(e.top),
        transitionDuration: e.transitionDuration == null ? void 0 : `${e.transitionDuration}ms`
      }
    }, null);
  }
}), zh = 200, Th, Eh, Bh, Ih, Zi, uv, Dh = {}, Cn = $n({
  value: 0,
  opacity: 0,
  error: !1
});
function Kz(e) {
  Object.assign(Cn, e), Dh = e;
}
var Wz = () => {
  Object.keys(Dh).forEach((e) => {
    Cn[e] !== void 0 && (Cn[e] = void 0);
  });
}, Mh = () => {
  uv || (uv = !0, Jt(Yz, Cn));
}, cd = () => {
  Th = window.setTimeout(() => {
    Cn.transitionDuration = void 0, !(Cn.value >= 95) && (Cn.value += Cn.value < 70 ? Math.round(5 * Math.random()) : Math.random(), cd());
  }, 200);
}, fd = () => {
  window.clearTimeout(Th), window.clearTimeout(Zi), window.clearTimeout(Bh), window.clearTimeout(Eh), window.clearTimeout(Ih);
}, Ah = () => {
  fd(), Cn.value = 100, Zi = window.setTimeout(() => {
    Cn.opacity = 0, Ih = window.setTimeout(() => {
      Cn.error = !1;
    }, 250);
  }, 300);
}, qz = () => {
  fd(), Cn.error = !1, Cn.value = 0, Cn.transitionDuration = 0, Mh(), Zi = window.setTimeout(() => {
    Cn.opacity = 1;
  }, zh), cd();
}, Xz = () => {
  var e;
  Bh = window.setTimeout(Ah, (e = Cn.finishDelay) != null ? e : 0);
}, Gz = () => {
  fd(), Cn.error = !0, Cn.value === 100 && (Cn.value = 0, Cn.transitionDuration = 0), Mh(), Zi = window.setTimeout(() => {
    Cn.opacity = 1;
  }, zh), cd(), Eh = window.setTimeout(Ah, 300);
}, Nh = {
  start: qz,
  finish: Xz,
  error: Gz,
  setDefaultOptions: Kz,
  resetDefaultOptions: Wz
}, VN = Nh, xs = Nh, Rh = {
  tag: {
    type: String,
    default: "div"
  },
  locale: {
    type: String,
    default: "zh-CN"
  },
  messages: { type: Object }
}, Zz = Object.defineProperty, Jz = Object.defineProperties, Qz = Object.getOwnPropertyDescriptors, dv = Object.getOwnPropertySymbols, xz = Object.prototype.hasOwnProperty, _z = Object.prototype.propertyIsEnumerable, cv = (e, n, r) => n in e ? Zz(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, e6 = (e, n) => {
  for (var r in n || (n = {})) xz.call(n, r) && cv(e, r, n[r]);
  if (dv)
    for (var r of dv(n)) _z.call(n, r) && cv(e, r, n[r]);
  return e;
}, n6 = (e, n) => Jz(e, Qz(n)), { name: r6, n: t6 } = oe("locale-provider"), Ji = te({
  name: r6,
  props: Rh,
  setup(e, { slots: n }) {
    const r = S(() => {
      var o;
      return Object.entries((o = e.messages) != null ? o : {}).reduce((a, [i, l]) => (a[i] = n6(e6({}, l), { lang: i }), a), {});
    });
    uy({ t });
    function t(o) {
      if (mo(r.value, e.locale) && mo(r.value[e.locale], o)) return r.value[e.locale][o];
    }
    return () => Fn(e.tag, { class: t6() }, C(n.default));
  }
});
ue(Ji);
fe(Ji, Rh);
var LN = Ji, _s = Ji, Vh = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  option: Object
}, Lh = /* @__PURE__ */ Symbol("SELECT_BIND_OPTION_KEY");
function o6() {
  const { length: e, childProviders: n, bindChildren: r } = In(Lh);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function a6() {
  const { index: e, parentProvider: n, bindParent: r } = Bn(Lh);
  return or(!!r, "Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var { name: i6, n: l6, classes: s6 } = oe("option"), u6 = ["tabindex"];
function d6(e, n) {
  const r = x("var-checkbox"), t = x("maybe-v-node"), o = x("var-hover-overlay"), a = _e("ripple"), i = _e("hover");
  return Ke((b(), k("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
    style: Q({ color: e.optionSelected ? e.focusColor : void 0 }),
    tabindex: e.disabled ? void 0 : "-1",
    onFocus: n[2] || (n[2] = (l) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (l) => e.isFocusing = !1),
    onClick: n[4] || (n[4] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    L("div", {
      class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
      style: Q({ background: e.optionSelected ? e.focusColor : void 0 })
    }, null, 6),
    e.multiple ? (b(), ke(r, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => e.optionSelected = l),
      "checked-color": e.focusColor,
      disabled: e.disabled,
      onClick: n[1] || (n[1] = Nn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, [
      "modelValue",
      "checked-color",
      "disabled",
      "onChange"
    ])) : X("v-if", !0),
    F(e.$slots, "default", { selected: e.optionSelected }, () => [L("div", { class: p(e.classes(e.n("text"), e.n("$--ellipsis"))) }, [U(t, { is: e.labelVNode }, null, 8, ["is"])], 2)]),
    U(o, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 46, u6)), [
    [yr, e.visible],
    [a, { disabled: e.disabled || !e.ripple }],
    [
      i,
      e.handleHovering,
      "desktop"
    ]
  ]);
}
var Fh = te({
  name: i6,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarCheckbox: ct,
    VarHoverOverlay: Zn,
    MaybeVNode: lr
  },
  props: Vh,
  setup(e) {
    const n = P(), r = P(!1), t = P(!1), o = S(() => {
      var I;
      return (I = e.option) != null ? I : {
        label: e.label,
        value: e.value,
        disabled: e.disabled
      };
    }), a = S(() => t.value), i = S(() => e.value), l = S(() => e.disabled), s = S(() => e.ripple), { select: u, bindSelect: d } = a6(), { pattern: c, showMenu: f, filterable: v, multiple: g, focusColor: h, onSelect: m, computeLabel: y, filter: $ } = u, { hovering: w, handleHovering: z } = ur(), T = S(() => {
      var I;
      return Yn(e.label) ? e.label((I = e.option) != null ? I : {
        label: e.label,
        value: e.value,
        disabled: e.disabled
      }, t.value) : e.label;
    }), O = P(!0), R = S(() => !v.value || !c.value ? !0 : $(c.value, o.value)), H = S(() => f.value ? R.value : O.value), A = {
      label: T,
      value: i,
      disabled: l,
      ripple: s,
      selected: a,
      sync: M
    };
    ge([() => e.label, () => e.value], y), ge(() => [f.value, R.value], () => {
      f.value && (O.value = R.value);
    }, { immediate: !0 }), d(A), xe(() => window, "keydown", E), xe(() => window, "keyup", B);
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
      g.value && (t.value = !t.value), m(A);
    }
    function M(I) {
      t.value = I;
    }
    return {
      root: n,
      optionSelected: t,
      visible: H,
      multiple: g,
      focusColor: h,
      hovering: w,
      isFocusing: r,
      labelVNode: T,
      n: l6,
      classes: s6,
      handleHovering: z,
      handleClick: D,
      handleSelect: N
    };
  }
});
Fh.render = d6;
var Qi = Fh;
ue(Qi);
fe(Qi, Vh);
var FN = Qi, Da = Qi, c6 = Object.defineProperty, f6 = Object.defineProperties, v6 = Object.getOwnPropertyDescriptors, fv = Object.getOwnPropertySymbols, p6 = Object.prototype.hasOwnProperty, m6 = Object.prototype.propertyIsEnumerable, vv = (e, n, r) => n in e ? c6(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, g6 = (e, n) => {
  for (var r in n || (n = {})) p6.call(n, r) && vv(e, r, n[r]);
  if (fv)
    for (var r of fv(n)) m6.call(n, r) && vv(e, r, n[r]);
  return e;
}, h6 = (e, n) => f6(e, v6(n)), Hh = h6(g6({
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
} }), b6 = (e, n, r) => new Promise((t, o) => {
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
}), { name: y6, n: ql, classes: w6 } = oe("otp-input"), k6 = ["data-index"];
function $6(e, n) {
  const r = x("var-input"), t = x("var-form-details");
  return b(), k("div", {
    ref: "rootEl",
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--align-${e.align}`))),
    style: Q({
      "--otp-input-gutter": e.gutterStyle,
      "--otp-input-cell-height": e.cellHeightStyle,
      "--otp-input-cell-max-width": e.cellMaxWidthStyle
    }),
    onClick: n[1] || (n[1] = (...o) => e.handleClick && e.handleClick(...o)),
    onKeydown: n[2] || (n[2] = (...o) => e.handleKeydown && e.handleKeydown(...o)),
    onPaste: n[3] || (n[3] = (...o) => e.handlePaste && e.handlePaste(...o))
  }, [L("div", { class: p(e.n("cells")) }, [(b(!0), k(Ie, null, Ye(e.cellIndexes, (o, a) => (b(), k(Ie, { key: a }, [L("div", {
    class: p(e.n("cell")),
    "data-index": a
  }, [U(r, {
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
  ])], 10, k6), e.shouldRenderSeparator(a) ? (b(), k("div", {
    key: 0,
    class: p(e.n("separator"))
  }, [F(e.$slots, "separator", { index: a })], 2)) : X("v-if", !0)], 64))), 128))], 2), U(t, {
    class: p(e.n("details")),
    "var-otp-input-cover": "",
    "error-message": e.errorMessage
  }, null, 8, ["class", "error-message"])], 38);
}
var Uh = te({
  name: y6,
  components: {
    VarFormDetails: Hn,
    VarInput: Vo
  },
  props: Hh,
  setup(e) {
    const n = O0(), r = P(null), t = P([]), o = P(-1), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = xn(), { bindForm: u, form: d } = Kn(), c = S(() => Z(e.length)), f = S(() => {
      var ee;
      return (ee = H(e.maskSymbol)[0]) != null ? ee : "•";
    }), v = S(() => A(e.modelValue)), g = S(() => Array.from({ length: c.value })), h = S(() => Te(e.gutter)), m = S(() => Te(e.cellHeight)), y = S(() => Te(e.cellMaxWidth)), $ = S(() => e.type === "digit" ? "numeric" : void 0), w = S(() => e.type === "digit" ? "tel" : "text"), z = S(() => {
      var ee;
      return (ee = d?.disabled.value) != null ? ee : !1;
    }), T = S(() => {
      var ee;
      return (ee = d?.readonly.value) != null ? ee : !1;
    });
    let O = null, R = !1;
    u?.({
      validate: de,
      resetValidation: s,
      reset: J
    }), En(() => {
      e.autofocus && ce();
    });
    function H(ee) {
      return Array.from(ee);
    }
    function A(ee) {
      return D(ee).slice(0, c.value);
    }
    function D(ee) {
      switch (e.type) {
        case "digit":
          return ee.replace(/\D+/g, "");
        case "alphanumeric":
          return H(ee).filter((K) => /[A-Za-z0-9]/.test(K)).join("");
        default:
          return ee;
      }
    }
    function E() {
      return H(v.value);
    }
    function B(ee) {
      var K;
      const re = (K = E()[ee]) != null ? K : "";
      return re ? e.mask ? f.value : re : "";
    }
    function N(ee, K) {
      t.value[K] = ee && "$" in ee ? ee : null;
    }
    function M(ee) {
      return ee >= c.value - 1 || !n.separator ? !1 : Va(n.separator({ index: ee })).length > 0;
    }
    function I(ee, K = v.value) {
      Ne(() => {
        i(e.validateTrigger, ee, e.rules, K);
      });
    }
    function j(ee) {
      H(ee).length === c.value && (C(e.onComplete, ee), I("onComplete", ee));
    }
    function W(ee, K) {
      if (ee === v.value) {
        ne(K);
        return;
      }
      C(e["onUpdate:modelValue"], ee), C(e.onInput, ee), I("onInput", ee), j(ee);
    }
    function G(ee) {
      return b6(this, null, function* () {
        var K, re, we, ze, Ge;
        const rn = hn(ee, 0, c.value - 1);
        (re = (K = t.value[rn]) == null ? void 0 : K.focus) == null || re.call(K), yield qr(), document.activeElement === ((we = t.value[rn]) == null ? void 0 : we.el) && ((Ge = (ze = t.value[rn]) == null ? void 0 : ze.select) == null || Ge.call(ze));
      });
    }
    function ce(ee) {
      G(ee ?? Math.min(E().length, c.value - 1));
    }
    function me() {
      t.value.forEach((ee) => {
        var K;
        (K = ee?.blur) == null || K.call(ee);
      });
    }
    function de() {
      return l(e.rules, v.value);
    }
    function J() {
      v.value !== "" && C(e["onUpdate:modelValue"], ""), s();
    }
    function ne(ee) {
      var K;
      const re = (K = t.value[ee]) == null ? void 0 : K.el;
      re && (re.value = B(ee));
    }
    function pe() {
      g.value.forEach((ee, K) => {
        ne(K);
      });
    }
    function Oe(ee) {
      O = ee, !R && (R = !0, Ne(() => {
        R = !1, O != null && (o.value = O, G(O), O = null);
      }));
    }
    function Y(ee, K) {
      const re = E(), we = hn(ee, 0, re.length), ze = [...re], Ge = K.slice(0, c.value - we);
      Ge.forEach((rn, mn) => {
        ze[we + mn] = rn;
      }), W(ze.join("").slice(0, c.value), we), Oe(hn(we + Ge.length, 0, c.value - 1));
    }
    function ae(ee, K = hn(ee, 0, c.value - 1)) {
      const re = E();
      re.splice(ee, 1), W(re.join(""), ee), Oe(K);
    }
    function Ee(ee) {
      const K = E();
      if (!K[ee]) {
        if (ee <= 0) {
          pe();
          return;
        }
        ae(ee - 1, ee - 1);
        return;
      }
      ae(ee, ee !== K.length - 1 && ee > 0 ? ee - 1 : hn(ee, 0, c.value - 1));
    }
    function Ue(ee) {
      if (e.disabled || z.value) return;
      const K = ee.target, re = K?.closest(`.${ql("cell")}`), we = re?.dataset.index;
      C(e.onClick, ee), I("onClick"), we != null && G(Number(we));
    }
    function nn(ee) {
      o.value = ee, G(ee);
    }
    function qe(ee) {
      var K;
      const re = ee.relatedTarget;
      (!re || !((K = r.value) != null && K.contains(re))) && (o.value = -1);
    }
    function en(ee, K) {
      const re = H(D(K)), we = E(), ze = ee > we.length;
      if (re.length === 0) {
        if (ze) {
          Oe(we.length), ne(ee);
          return;
        }
        K === "" ? ae(ee) : (ne(ee), Oe(ee));
        return;
      }
      if (ze) {
        Y(we.length, re);
        return;
      }
      Y(ee, re);
    }
    function on(ee) {
      var K, re;
      if (!e.allowPaste || z.value || T.value || e.disabled || e.readonly) return;
      const we = (re = (K = ee.clipboardData) == null ? void 0 : K.getData("text")) != null ? re : "";
      if (!we) return;
      ee.preventDefault();
      const ze = D(e.pasteTransform ? e.pasteTransform(we) : we);
      if (C(e.onPaste, ze, ee), I("onPaste", ze), !ze) {
        pe();
        return;
      }
      Y(0, H(ze));
    }
    function ye(ee) {
      if (z.value || T.value || e.disabled || e.readonly) return;
      const K = ee.target, re = K?.closest(`.${ql("cell")}`), we = re?.dataset.index;
      if (we == null) return;
      const ze = Number(we);
      if (ee.key === "Backspace" && E().length > 0) {
        ee.preventDefault(), Ee(ze);
        return;
      }
      if (ee.key === "ArrowLeft" && ze > 0) {
        ee.preventDefault(), G(ze - 1);
        return;
      }
      if (ee.key === "ArrowRight" && ze < c.value - 1) {
        ee.preventDefault(), G(ze + 1);
        return;
      }
    }
    return {
      rootEl: r,
      activeIndex: o,
      errorMessage: a,
      formDisabled: z,
      formReadonly: T,
      cellIndexes: g,
      gutterStyle: h,
      cellHeightStyle: m,
      cellMaxWidthStyle: y,
      resolvedInputmode: $,
      nativeInputType: w,
      align: e.align,
      n: ql,
      classes: w6,
      setInputRef: N,
      getDisplayChar: B,
      shouldRenderSeparator: M,
      handleClick: Ue,
      handleFocus: nn,
      handleBlur: qe,
      handleCellInput: en,
      handleKeydown: ye,
      handlePaste: on,
      focus: ce,
      blur: me,
      reset: J,
      validate: de,
      resetValidation: s
    };
  }
});
Uh.render = $6;
var xi = Uh;
ue(xi);
fe(xi, Hh);
var HN = xi, eu = xi, jh = {
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
}, { name: S6, n: ta } = oe("overlay"), _i = te({
  name: S6,
  inheritAttrs: !1,
  props: jh,
  setup(e, { slots: n, attrs: r }) {
    const { zIndex: t } = Ao(() => e.show, 3), { onStackTop: o } = Xu(() => e.show, t), { disabled: a } = zt();
    Mo(() => e.show, () => e.lockScroll), xe(() => window, "keydown", i);
    function i(d) {
      !o() || d.key !== "Escape" || !e.show || (C(e.onKeyEscape), e.closeOnKeyEscape && (Ze(d), C(e["onUpdate:show"], !1)));
    }
    function l() {
      C(e.onClick), C(e["onUpdate:show"], !1);
    }
    function s() {
      return U("div", Xe({
        class: ta(),
        style: { zIndex: t.value - 2 }
      }, r), [U("div", {
        class: ta("overlay"),
        style: { zIndex: t.value - 1 },
        onClick: l
      }, null), U("div", {
        class: ta("content"),
        style: { zIndex: t.value }
      }, [C(n.default)])]);
    }
    function u() {
      return U(bn, { name: ta("--fade") }, { default: () => [e.show && s()] });
    }
    return () => {
      const { teleport: d } = e;
      return d ? U(Hr, {
        to: d,
        disabled: a.value
      }, { default: () => [u()] }) : u();
    };
  }
});
ue(_i);
fe(_i, jh);
var UN = _i, nu = _i, Yh = {
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
  active: {
    type: [Boolean, Object],
    default: !1
  },
  disabled: Boolean,
  onClick: V()
}, { name: C6, n: P6, classes: O6 } = oe("paper");
function z6(e, n) {
  const r = x("var-hover-overlay"), t = _e("ripple"), o = _e("hover");
  return Ke((b(), k("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.variant === "standard", e.formatElevation(e.elevation, 2)], [!e.disabled && (e.onClick || !e.normalizedHoverable.disabled), e.n("--cursor")], [e.disabled, e.n("--disabled")], [!e.disabled && e.normalizedActive.enabled, e.n("--active")], [e.round, e.n("--round")], [e.surfaceLow, e.n("--surface-low")], [e.variant === "outlined", e.n("--outlined")], [e.variant === "filled", e.n("--filled")], [e.inline, e.n("$--inline-flex")])),
    style: Q({
      width: e.toSizeUnit(e.width),
      height: e.toSizeUnit(e.height),
      "border-radius": e.toSizeUnit(e.radius),
      "--paper-active-color": e.normalizedActive.color
    }),
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [
    F(e.$slots, "default"),
    U(r, {
      class: p(e.n("active-overlay")),
      hovering: !e.disabled && e.normalizedActive.enabled
    }, null, 8, ["class", "hovering"]),
    U(r, {
      hovering: !e.disabled && !e.normalizedHoverable.disabled ? e.hovering : !1,
      color: e.normalizedHoverable.color
    }, null, 8, ["hovering", "color"])
  ], 6)), [[t, {
    disabled: e.disabled || e.normalizedRipple.disabled,
    color: e.normalizedRipple.color
  }], [
    o,
    e.handleHovering,
    "desktop"
  ]]);
}
var Kh = te({
  name: C6,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: { VarHoverOverlay: Zn },
  props: Yh,
  setup(e) {
    const n = S(() => e.surface === "low" && e.variant !== "filled"), { hovering: r, handleHovering: t } = ur(), o = S(() => l(e.ripple)), a = S(() => s(e.hoverable)), i = S(() => u(e.active));
    function l(c) {
      return Sn(c) ? {
        disabled: !!c.disabled,
        color: c.color
      } : {
        disabled: !c,
        color: void 0
      };
    }
    function s(c) {
      return Sn(c) ? {
        disabled: !!c.disabled,
        color: c.color
      } : {
        disabled: !c,
        color: void 0
      };
    }
    function u(c) {
      return Sn(c) ? {
        enabled: !0,
        color: c.color
      } : {
        enabled: c,
        color: void 0
      };
    }
    function d(c) {
      e.disabled || C(e.onClick, c);
    }
    return {
      n: P6,
      classes: O6,
      formatElevation: On,
      surfaceLow: n,
      normalizedRipple: o,
      normalizedHoverable: a,
      normalizedActive: i,
      hovering: r,
      handleHovering: t,
      toSizeUnit: Te,
      handleClick: d
    };
  }
});
Kh.render = z6;
var el = Kh;
ue(el);
fe(el, Yh);
var jN = el, ru = el, T6 = Object.defineProperty, pv = Object.getOwnPropertySymbols, E6 = Object.prototype.hasOwnProperty, B6 = Object.prototype.propertyIsEnumerable, mv = (e, n, r) => n in e ? T6(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, I6 = (e, n) => {
  for (var r in n || (n = {})) E6.call(n, r) && mv(e, r, n[r]);
  if (pv)
    for (var r of pv(n)) B6.call(n, r) && mv(e, r, n[r]);
  return e;
}, Wh = I6({
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
])), { name: D6, n: M6, classes: A6 } = oe("picker"), gv = 300, N6 = 15, hv = 200, R6 = 1e3, bv = 0, V6 = [
  "onTouchstartPassive",
  "onTouchmove",
  "onTouchend"
], L6 = ["onTransitionend"], F6 = ["onClick"];
function H6(e, n) {
  const r = x("var-button");
  return b(), ke(Xt(e.dynamic ? e.n("$-popup") : e.Transition), Xe(e.dynamic ? {
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
    default: se(() => [L("div", Xe({ class: e.n() }, e.$attrs), [e.toolbar ? (b(), k("div", {
      key: 0,
      class: p(e.n("toolbar"))
    }, [
      F(e.$slots, "cancel", {}, () => [U(r, {
        class: p(e.n("cancel-button")),
        "var-picker-cover": "",
        text: "",
        "text-color": e.cancelButtonTextColor,
        onClick: e.cancel
      }, {
        default: se(() => {
          var t;
          return [Le(ve((t = e.cancelButtonText) != null ? t : (e.pt ? e.pt : e.t)("pickerCancelButtonText")), 1)];
        }),
        _: 1
      }, 8, [
        "class",
        "text-color",
        "onClick"
      ])]),
      F(e.$slots, "title", {}, () => {
        var t;
        return [L("div", { class: p(e.n("title")) }, ve((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("pickerTitle")), 3)];
      }),
      F(e.$slots, "confirm", {}, () => [U(r, {
        class: p(e.n("confirm-button")),
        text: "",
        "var-picker-cover": "",
        "text-color": e.confirmButtonTextColor,
        onClick: e.confirm
      }, {
        default: se(() => {
          var t;
          return [Le(ve((t = e.confirmButtonText) != null ? t : (e.pt ? e.pt : e.t)("pickerConfirmButtonText")), 1)];
        }),
        _: 1
      }, 8, [
        "class",
        "text-color",
        "onClick"
      ])])
    ], 2)) : X("v-if", !0), L("div", {
      class: p(e.n("columns")),
      style: Q({ height: `${e.columnHeight}px` })
    }, [
      (b(!0), k(Ie, null, Ye(e.scrollColumns, (t) => (b(), k("div", {
        key: t.id,
        class: p(e.n("column")),
        onTouchstartPassive: (o) => e.handleTouchstart(o, t),
        onTouchmove: Nn((o) => e.handleTouchmove(o, t), ["prevent"]),
        onTouchend: (o) => e.handleTouchend(t)
      }, [L("div", {
        ref_for: !0,
        ref: (o) => e.setScrollEl(o, t),
        class: p(e.n("scroller")),
        style: Q({
          transform: `translateY(${t.translate}px)`,
          transitionDuration: `${t.duration}ms`,
          transitionProperty: t.duration ? "transform" : "none"
        }),
        onTransitionend: (o) => e.handleTransitionend(t)
      }, [(b(!0), k(Ie, null, Ye(t.column, (o, a) => (b(), k("div", {
        key: e.getValue(o),
        class: p(e.classes(e.n("option"), o.className)),
        style: Q({ height: `${e.optionHeight}px` }),
        onClick: (i) => e.handleClick(t, a)
      }, [L("div", { class: p(e.classes(e.n("text"), o.textClassName)) }, ve(o[e.getOptionKey("text")]), 3)], 14, F6))), 128))], 46, L6)], 42, V6))), 128)),
      L("div", {
        class: p(e.n("picked")),
        style: Q({
          top: `${e.center}px`,
          height: `${e.optionHeight}px`
        })
      }, null, 6),
      L("div", {
        class: p(e.n("mask")),
        style: Q({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
      }, null, 6)
    ], 6)], 16)]),
    _: 3
  }, 16);
}
var qh = te({
  name: D6,
  components: {
    VarButton: Jn,
    VarPopup: ut
  },
  inheritAttrs: !1,
  props: Wh,
  setup(e) {
    const n = yn(e, "modelValue"), r = P([]), t = S(() => Z(e.columnsCount)), o = S(() => fn(e.optionHeight)), a = S(() => fn(e.optionCount)), i = S(() => a.value * o.value / 2 - o.value / 2), l = S(() => a.value * o.value), { prevY: s, moveY: u, dragging: d, startTouch: c, moveTouch: f, endTouch: v } = Zt(), { t: g } = kr();
    let h = [];
    R(), ge(() => e.columns, R, { deep: !0 }), ge(() => n.value, R);
    function m(Y) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[Y];
    }
    function y(Y) {
      var ae;
      return (ae = Y[m("value")]) != null ? ae : Y[m("text")];
    }
    function $(Y) {
      h = [...Y];
    }
    function w(Y) {
      return (e.columnsCount != null ? Y.slice(0, t.value) : Y).map((ae, Ee) => {
        const Ue = {
          id: bv++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: ae,
          scrollEl: null,
          scrolling: !1
        }, nn = n.value[Ee], qe = Ue.column.findIndex((en) => nn === y(en));
        return Ue.index = qe === -1 ? 0 : qe, M(Ue), Ue;
      });
    }
    function z(Y) {
      const ae = [];
      return T(ae, Y), ae;
    }
    function T(Y, ae, Ee = !0, Ue = 1) {
      var nn;
      if (ae.length && (e.columnsCount == null || Ue <= t.value)) {
        const qe = {
          id: bv++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: ae,
          scrollEl: null,
          scrolling: !1
        };
        if (Y.push(qe), Ee) {
          const en = n.value[Y.length - 1], on = ae.findIndex((ye) => en === y(ye));
          qe.index = on === -1 ? 0 : on;
        }
        M(qe), T(Y, (nn = qe.column[qe.index][m("children")]) != null ? nn : [], Ee, Ue + 1);
      }
    }
    function O(Y) {
      var ae;
      r.value.splice(r.value.indexOf(Y) + 1), T(r.value, (ae = Y.column[Y.index][m("children")]) != null ? ae : [], !1, r.value.length + 1);
    }
    function R() {
      r.value = e.cascade ? z(e.columns) : w(e.columns);
      const { indexes: Y } = N();
      $(Y);
    }
    function H(Y, ae) {
      ae.scrollEl = Y;
    }
    function A(Y) {
      C(e["onUpdate:show"], Y);
    }
    function D(Y) {
      const ae = i.value - Y.column.length * o.value, Ee = o.value + i.value;
      Y.translate = hn(Y.translate, ae, Ee);
    }
    function E(Y, ae) {
      return T0(Math.round((i.value - ae) / o.value), Y.column);
    }
    function B(Y) {
      return Y.translate = i.value - Y.index * o.value, Y.translate;
    }
    function N() {
      const Y = [], ae = [], Ee = [];
      return r.value.forEach(({ column: Ue, index: nn }) => {
        const qe = Ue[nn];
        Y.push(y(qe)), ae.push(nn), Ee.push(qe);
      }), {
        values: Y,
        indexes: ae,
        options: Ee
      };
    }
    function M(Y, ae = 0) {
      B(Y), Y.duration = ae;
    }
    function I(Y, ae, Ee) {
      Y.translate += Math.abs(ae / Ee) / 3e-3 * (ae < 0 ? -1 : 1);
    }
    function j(Y, ae) {
      d.value || (Y.index = ae, M(Y, hv));
    }
    function W(Y, ae) {
      ae.touching = !0, ae.translate = Rl(ae.scrollEl), c(Y);
    }
    function G(Y, ae) {
      if (!ae.touching) return;
      f(Y), ae.scrolling = !1, ae.duration = 0, ae.prevY = s.value, ae.translate += u.value, D(ae);
      const Ee = performance.now();
      Ee - ae.momentumTime > gv && (ae.momentumTime = Ee, ae.momentumPrevY = ae.translate);
    }
    function ce(Y) {
      v(), Y.touching = !1, Y.prevY = 0;
      const ae = Y.translate - Y.momentumPrevY, Ee = performance.now() - Y.momentumTime, Ue = Math.abs(ae) >= N6 && Ee <= gv, nn = Y.translate;
      Ue && I(Y, ae, Ee), Y.index = E(Y, Y.translate), M(Y, Ue ? R6 : hv), Y.scrolling = Y.translate !== nn, Y.scrolling || J(Y);
    }
    function me(Y) {
      Y.scrolling = !1, J(Y);
    }
    function de() {
      const { indexes: Y } = N();
      return Y.every((ae, Ee) => ae === h[Ee]);
    }
    function J(Y) {
      const { onChange: ae, cascade: Ee } = e;
      if (de()) return;
      Ee && O(Y);
      const Ue = r.value.some((ye) => ye.scrolling), nn = r.value.some((ye) => ye.touching);
      if (Ue || nn) return;
      const { values: qe, indexes: en, options: on } = N();
      $(en), C(ae, qe, en, on), n.value = qe;
    }
    function ne() {
      if (e.cascade) {
        const Y = r.value.find((ae) => ae.scrolling);
        Y && (Y.index = E(Y, Rl(Y.scrollEl)), Y.scrolling = !1, M(Y), O(Y));
      } else r.value.forEach((Y) => {
        Y.index = E(Y, Rl(Y.scrollEl)), M(Y);
      });
    }
    function pe() {
      ne();
      const { values: Y, indexes: ae, options: Ee } = N();
      $(ae), C(e.onConfirm, Y, ae, Ee);
    }
    function Oe() {
      ne();
      const { values: Y, indexes: ae, options: Ee } = N();
      $(ae), C(e.onCancel, Y, ae, Ee);
    }
    return {
      optionHeight: o,
      optionCount: a,
      scrollColumns: r,
      columnHeight: l,
      center: i,
      Transition: bn,
      pt: g,
      t: gn,
      n: M6,
      classes: A6,
      setScrollEl: H,
      getOptionKey: m,
      getValue: y,
      handlePopupUpdateShow: A,
      handleTouchstart: W,
      handleTouchmove: G,
      handleTouchend: ce,
      handleTransitionend: me,
      confirm: pe,
      cancel: Oe,
      handleClick: j
    };
  }
});
qh.render = H6;
var Wo = qh, Nt;
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
        C(r.onConfirm, a, i, l), n({
          state: "confirm",
          values: a,
          indexes: i,
          options: l
        }), r.show = !1, t();
      },
      onCancel: (a, i, l) => {
        C(r.onCancel, a, i, l), n({
          state: "cancel",
          values: a,
          indexes: i,
          options: l
        }), r.show = !1, t();
      },
      onClose: () => {
        C(r.onClose), n({ state: "close" }), t();
      },
      onClosed: () => {
        C(r.onClosed), o(), t();
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
ue(Wo);
ue(Wo, _t);
fe(_t, Wh);
var YN = Wo, tu = _t, Xh = {
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
}, Dt = 100, oa = 0, _r = 20, yv = 2 * Math.PI * _r, { name: U6, n: j6, classes: Y6 } = oe("progress"), K6 = ["aria-valuenow"], W6 = ["viewBox"], q6 = { key: 0 }, X6 = ["id"], G6 = ["offset", "stop-color"], Z6 = [
  "d",
  "stroke-width",
  "stroke-dasharray"
], J6 = [
  "d",
  "stroke-width",
  "stroke-dasharray",
  "stroke-dashoffset"
];
function Q6(e, n) {
  return b(), k("div", {
    class: p(e.n()),
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": e.indeterminate ? void 0 : e.mode === "linear" ? e.linearProps.value : e.circleProps.value
  }, [e.mode === "linear" ? (b(), k("div", {
    key: 0,
    class: p(e.n("linear"))
  }, [L("div", {
    class: p(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
    style: Q({
      height: e.toSizeUnit(e.lineWidth),
      background: e.trackColor
    })
  }, [e.indeterminate ? (b(), k("div", {
    key: 0,
    class: p(e.n("linear-indeterminate"))
  }, [L("div", {
    class: p(e.classes(e.n(`linear--${e.type}`))),
    style: Q({ background: e.progressColor })
  }, null, 6), L("div", {
    class: p(e.classes(e.n(`linear--${e.type}`))),
    style: Q({ background: e.progressColor })
  }, null, 6)], 2)) : (b(), k("div", {
    key: 1,
    class: p(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`))),
    style: Q({
      background: e.progressColor,
      width: e.linearProps.width
    })
  }, null, 6))], 6), e.label ? (b(), k("div", {
    key: 0,
    class: p(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
  }, [F(e.$slots, "default", {}, () => [Le(ve(e.linearProps.roundValue), 1)])], 2)) : X("v-if", !0)], 2)) : X("v-if", !0), e.mode === "circle" ? (b(), k("div", {
    key: 1,
    class: p(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
    style: Q({
      width: e.toSizeUnit(e.size),
      height: e.toSizeUnit(e.size)
    })
  }, [(b(), k("svg", {
    class: p(e.n("circle-svg")),
    viewBox: e.circleProps.viewBox
  }, [
    e.isPlainObject(e.color) ? (b(), k("defs", q6, [L("linearGradient", {
      id: e.id,
      x1: "100%",
      y1: "0%",
      x2: "0%",
      y2: "0%"
    }, [(b(!0), k(Ie, null, Ye(e.linearGradientProgress, (r, t) => (b(), k("stop", {
      key: t,
      offset: r,
      "stop-color": e.color[r]
    }, null, 8, G6))), 128))], 8, X6)])) : X("v-if", !0),
    e.track ? (b(), k("path", {
      key: 1,
      class: p(e.n("circle-background")),
      d: e.circleProps.path,
      fill: "transparent",
      "stroke-width": e.circleProps.strokeWidth,
      "stroke-dasharray": e.CIRCUMFERENCE,
      style: Q({ stroke: e.trackColor })
    }, null, 14, Z6)) : X("v-if", !0),
    L("path", {
      class: p(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
      d: e.circleProps.path,
      fill: "transparent",
      "stroke-width": e.circleProps.strokeWidth,
      "stroke-dasharray": e.CIRCUMFERENCE,
      "stroke-dashoffset": e.circleProps.strokeOffset,
      style: Q({
        stroke: e.progressColor,
        transform: `rotateZ(${e.rotate}deg)`,
        transformOrigin: "50% 50%"
      })
    }, null, 14, J6)
  ], 10, W6)), e.label ? (b(), k("div", {
    key: 0,
    class: p(e.classes(e.n("circle-label"), e.labelClass))
  }, [F(e.$slots, "default", {}, () => [Le(ve(e.circleProps.roundValue), 1)])], 2)) : X("v-if", !0)], 6)) : X("v-if", !0)], 10, K6);
}
var Gh = te({
  name: U6,
  props: Xh,
  setup(e) {
    const n = _v(), r = S(() => {
      const i = Z(e.value), l = hn(i, oa, Dt), s = hn(Math.round(i), oa, Dt);
      return {
        width: `${l}%`,
        roundValue: `${s}%`,
        value: l
      };
    }), t = S(() => {
      const { size: i, lineWidth: l, value: s } = e, u = _r / (1 - fn(l) / fn(i)) * 2, d = `0 0 ${u} ${u}`, c = hn(Math.round(Z(s)), oa, Dt), f = `${(Dt - c) / Dt * yv}`, v = fn(l) / fn(i) * u, g = 0, h = -20, m = 0, y = -2 * _r, $ = `M ${u / 2} ${u / 2} m ${g} ${h} a ${_r} ${_r} 
        0 1 1 ${m} 40 a ${_r} ${_r} 0 1 1 0 ${y}`;
      return {
        strokeWidth: v,
        viewBox: d,
        strokeOffset: f,
        roundValue: `${c}%`,
        path: $,
        value: hn(Z(s), oa, Dt)
      };
    }), o = S(() => Sn(e.color) ? `url(#${n.value})` : e.color), a = S(() => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l)));
    return {
      id: n,
      linearProps: r,
      CIRCUMFERENCE: yv,
      RADIUS: _r,
      circleProps: t,
      progressColor: o,
      linearGradientProgress: a,
      n: j6,
      classes: Y6,
      toSizeUnit: Te,
      isPlainObject: Sn
    };
  }
});
Gh.render = Q6;
var nl = Gh;
ue(nl);
fe(nl, Xh);
var KN = nl, ou = nl, Zh = {
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
}, x6 = (e, n, r) => new Promise((t, o) => {
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
}), { name: _6, n: wv, classes: e8 } = oe("pull-refresh"), kv = 150;
function n8(e, n) {
  const r = x("var-icon");
  return b(), k("div", {
    ref: "freshNode",
    class: p(e.n()),
    onTouchstart: n[0] || (n[0] = (...t) => e.handleTouchstart && e.handleTouchstart(...t)),
    onTouchend: n[1] || (n[1] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
    onTouchcancel: n[2] || (n[2] = (...t) => e.handleTouchend && e.handleTouchend(...t))
  }, [L("div", {
    ref: "controlNode",
    class: p(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
    style: Q(e.controlStyle)
  }, [U(r, {
    name: e.iconName,
    transition: e.ICON_TRANSITION,
    class: p(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
    "var-pull-refresh-cover": ""
  }, null, 8, [
    "name",
    "transition",
    "class"
  ])], 6), F(e.$slots, "default")], 34);
}
var Jh = te({
  name: _6,
  components: { VarIcon: Je },
  props: Zh,
  setup(e) {
    const n = P(0), r = P(null), t = P(null), o = P(0), a = P("-125%"), i = P("arrow-down"), l = P("default"), s = P(!1), u = S(() => Math.abs(2 * n.value)), d = S(() => l.value === "success"), c = S(() => l.value !== "loading" && l.value !== "success" && !e.disabled), f = S(() => ({
      transform: `translate3d(0px, ${Pn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: d.value ? e.successBgColor : e.bgColor,
      color: d.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: g, endTouch: h, isReachTop: m } = Zt();
    let y, $;
    ge(() => e.modelValue, (D) => {
      D === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
        a.value = n.value, A();
      }, Z(e.successDuration)));
    }), En(H), xe(r, "touchmove", O);
    function w(D) {
      if (i.value !== D)
        return i.value = D, new Promise((E) => {
          window.setTimeout(E, kv);
        });
    }
    function z(D) {
      ("classList" in y ? y : document.body).classList[D](`${wv()}--lock`);
    }
    function T(D) {
      if (v(D), n.value === 0) {
        const { width: E } = kn(t.value);
        n.value = -(E + E * 0.25);
      }
      $ = dt(D.target);
    }
    function O(D) {
      if (g(D), !c.value || !$ || $ !== y && kt($) > 0 || kt(y) > 0) return;
      m(y) && Ze(D), l.value !== "pulling" && (l.value = "pulling", o.value = D.touches[0].clientY), m(y) && tr(a.value) && a.value > n.value && z("add");
      const E = (D.touches[0].clientY - o.value) / 2 + n.value;
      a.value = E >= u.value ? u.value : E, w(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function R() {
      return x6(this, null, function* () {
        h(), c.value && (s.value = !0, Z(a.value) >= u.value * 0.2 ? (yield w("refresh"), l.value = "loading", a.value = u.value * 0.3, C(e["onUpdate:modelValue"], !0), Ne(() => {
          C(e.onRefresh);
        }), z("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, z("remove");
        }, Z(e.animationDuration))), $ = null);
      });
    }
    function H() {
      y = e.target ? Pp(e.target, "PullRefresh") : dt(r.value);
    }
    function A() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, Z(e.animationDuration));
    }
    return {
      ICON_TRANSITION: kv,
      refreshStatus: l,
      freshNode: r,
      controlNode: t,
      iconName: i,
      controlStyle: f,
      isSuccess: d,
      n: wv,
      classes: e8,
      handleTouchstart: T,
      handleTouchmove: O,
      handleTouchend: R
    };
  }
});
Jh.render = n8;
var rl = Jh;
ue(rl);
fe(rl, Zh);
var WN = rl, au = rl, Qh = {
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
}, { name: r8, n: t8, classes: o8 } = oe("radio-group"), a8 = ["aria-label"];
function i8(e, n) {
  const r = x("maybe-v-node"), t = x("var-radio"), o = x("var-form-details");
  return b(), k("div", { class: p(e.n("wrap")) }, [L("div", {
    "aria-label": e.ariaLabel,
    role: "radiogroup",
    class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
  }, [e.options.length ? (b(!0), k(Ie, { key: 0 }, Ye(e.options, (a) => (b(), ke(t, {
    key: a[e.valueKey],
    "checked-value": a[e.valueKey],
    disabled: a.disabled
  }, {
    default: se(({ checked: i }) => [U(r, { is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey] }, null, 8, ["is"])]),
    _: 2
  }, 1032, ["checked-value", "disabled"]))), 128)) : X("v-if", !0), F(e.$slots, "default")], 10, a8), U(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var xh = te({
  name: r8,
  components: {
    VarFormDetails: Hn,
    VarRadio: So,
    MaybeVNode: lr
  },
  props: Qh,
  setup(e) {
    const { length: n, radios: r, bindRadios: t } = PP(), { bindForm: o } = Kn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = xn(), u = S(() => a.value), d = P(!1), c = {
      onToggle: m,
      validate: y,
      reset: $,
      resetValidation: s,
      hasChecked: S(() => d.value),
      errorMessage: u
    };
    ge(() => e.modelValue, h), ge(() => n.value, h), C(o, c), t(c), xe(() => window, "keydown", f);
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
    function g(w) {
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
      C(e["onUpdate:modelValue"], w), C(e.onChange, w), g("onChange");
    }
    function y() {
      return l(e.rules, e.modelValue);
    }
    function $() {
      C(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: t8,
      classes: o8,
      reset: $,
      validate: y,
      resetValidation: s,
      isFunction: Yn
    };
  }
});
xh.render = i8;
var tl = xh;
ue(tl);
fe(tl, Qh);
var qN = tl, iu = tl, _h = {
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
}, eb = /* @__PURE__ */ Symbol("RAIL_NAVIGATION_BIND_RAIL_NAVIGATION_ITEM_KEY");
function l8() {
  const { bindChildren: e } = In(eb);
  return { bindRailNavigationItem: e };
}
var { name: s8, n: u8, classes: d8 } = oe("rail-navigation");
function c8(e, n) {
  return b(), k("aside", Xe({ class: e.classes(e.n(), e.n("$--box"), [e.bordered, e.n("--border")]) }, e.$attrs), [
    e.$slots.start ? (b(), k("div", {
      key: 0,
      class: p(e.n("start"))
    }, [F(e.$slots, "start")], 2)) : X("v-if", !0),
    L("nav", { class: p(e.n("content")) }, [F(e.$slots, "default")], 2),
    e.$slots.end ? (b(), k("div", {
      key: 1,
      class: p(e.n("end"))
    }, [F(e.$slots, "end")], 2)) : X("v-if", !0)
  ], 16);
}
var nb = te({
  name: s8,
  props: _h,
  setup(e) {
    const n = S(() => e.active), r = S(() => e.ripple), t = S(() => e.showLabel), { bindRailNavigationItem: o } = l8();
    o({
      active: n,
      ripple: r,
      showLabel: t,
      onToggle: a
    });
    function a(i) {
      n.value !== i && (C(e["onUpdate:active"], i), C(e.onChange, i));
    }
    return {
      n: u8,
      classes: d8
    };
  }
});
nb.render = c8;
var ol = nb;
ue(ol);
fe(ol, _h);
var XN = ol, lu = ol, rb = {
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
function f8() {
  const { parentProvider: e, index: n, bindParent: r } = Bn(eb);
  return or(!!r, "RailNavigationItem", "<var-rail-navigation-item/> must in <var-rail-navigation/>"), {
    index: n,
    railNavigation: e,
    bindRailNavigation: r
  };
}
var v8 = (e, n, r) => new Promise((t, o) => {
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
}), { name: p8, n: m8, classes: g8 } = oe("rail-navigation-item"), h8 = {
  type: "primary",
  dot: !0
}, b8 = ["aria-disabled"];
function y8(e, n) {
  const r = x("var-icon"), t = x("var-badge"), o = _e("ripple");
  return Ke((b(), k("div", {
    class: p(e.classes(e.n(), [e.isActive, e.n("--active")], [e.disabled, e.n("--disabled")], [e.ripple && !e.disabled, e.n("--ripple-enabled")], [!e.showLabel, e.n("--icon-only")])),
    style: Q({ "--rail-navigation-item-transition-duration-override": e.allowTransition && !e.ripple ? void 0 : "0ms" }),
    "aria-disabled": e.disabled,
    role: "button",
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a)),
    onMouseenter: n[1] || (n[1] = (...a) => e.handleMouseenter && e.handleMouseenter(...a)),
    onMouseleave: n[2] || (n[2] = (...a) => e.handleMouseleave && e.handleMouseleave(...a))
  }, [e.$slots.icon || e.icon ? (b(), k("span", {
    key: 0,
    class: p(e.n("indicator"))
  }, [e.badge ? (b(), ke(t, Xe({ key: 0 }, e.badgeProps, {
    class: e.n("badge"),
    "var-rail-navigation-item-cover": ""
  }), {
    default: se(() => [L("span", { class: p(e.n("icon")) }, [F(e.$slots, "icon", { active: e.isActive }, () => [U(r, {
      name: e.icon,
      namespace: e.namespace
    }, null, 8, ["name", "namespace"])])], 2)]),
    _: 3
  }, 16, ["class"])) : (b(), k("span", {
    key: 1,
    class: p(e.n("icon"))
  }, [F(e.$slots, "icon", { active: e.isActive }, () => [U(r, {
    name: e.icon,
    namespace: e.namespace
  }, null, 8, ["name", "namespace"])])], 2))], 2)) : X("v-if", !0), e.showLabel && (e.$slots.default || e.label) ? (b(), k("span", {
    key: 1,
    class: p(e.n("label"))
  }, [F(e.$slots, "default", { active: e.isActive }, () => [Le(ve(e.label), 1)])], 2)) : X("v-if", !0)], 46, b8)), [[o, { disabled: !e.ripple || e.disabled }]]);
}
var tb = te({
  name: p8,
  components: {
    VarBadge: ko,
    VarIcon: Je
  },
  directives: { Ripple: vn },
  props: rb,
  setup(e) {
    const { index: n, railNavigation: r, bindRailNavigation: t } = f8(), { active: o, ripple: a, showLabel: i, onToggle: l } = r, s = S(() => {
      var h;
      return (h = e.name) != null ? h : n.value;
    }), u = S(() => o.value === s.value), d = S(() => e.badge === !0 ? h8 : e.badge), c = P(!1);
    t(null), Tr(() => v8(null, null, function* () {
      yield Gn(), c.value = !0;
    }));
    function f() {
      e.disabled || (C(e.onClick, s.value), C(l, s.value));
    }
    function v() {
      e.disabled || C(e.onMouseenter, s.value);
    }
    function g() {
      e.disabled || C(e.onMouseleave, s.value);
    }
    return {
      isActive: u,
      badgeProps: d,
      ripple: a,
      showLabel: i,
      allowTransition: c,
      n: m8,
      classes: g8,
      handleClick: f,
      handleMouseenter: v,
      handleMouseleave: g
    };
  }
});
tb.render = y8;
var al = tb;
ue(al);
fe(al, rb);
var GN = al, su = al, ob = {
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
}, { name: w8, n: to } = oe("rate"), k8 = ["onClick"];
function $8(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), o = x("var-form-details"), a = _e("ripple"), i = _e("hover");
  return b(), k("div", { class: p(e.n("wrap")) }, [L("div", { class: p(e.n()) }, [(b(!0), k(Ie, null, Ye(e.toNumber(e.count), (l) => Ke((b(), k("div", {
    key: l,
    style: Q(e.getStyle(l)),
    class: p(e.getClass(l)),
    onClick: (s) => e.handleClick(l, s)
  }, [L("span", {
    class: p(e.n("content-icon")),
    style: Q({ fontSize: e.toSizeUnit(e.size) })
  }, [F(e.$slots, e.getCurrentState(l).slot, {}, () => [U(r, {
    transition: 0,
    namespace: e.getCurrentState(l).namespace,
    name: e.getCurrentState(l).name
  }, null, 8, ["namespace", "name"])])], 6), U(t, { hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled }, null, 8, ["hovering"])], 14, k8)), [[a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    i,
    e.createHoverHandler(l),
    "desktop"
  ]])), 128))], 2), U(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var ab = te({
  name: w8,
  components: {
    VarIcon: Je,
    VarFormDetails: Hn,
    VarHoverOverlay: Zn
  },
  directives: {
    Ripple: vn,
    Hover: jn
  },
  props: ob,
  setup(e) {
    const n = P(-1), { form: r, bindForm: t } = Kn(), { errorMessage: o, validateWithTrigger: a, validate: i, resetValidation: l } = xn(), { hovering: s } = ur();
    let u = Z(e.modelValue);
    C(t, {
      reset: $,
      validate: g,
      resetValidation: l
    });
    function d(w) {
      const { count: z, gap: T } = e;
      return {
        color: f(w).color,
        marginRight: w !== Z(z) ? Te(T) : 0
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
      const { modelValue: z, disabled: T, disabledColor: O, color: R, half: H, emptyColor: A, icon: D, halfIcon: E, emptyIcon: B, namespace: N, halfIconNamespace: M, emptyIconNamespace: I } = e;
      let j = R;
      return (T || r?.disabled.value) && (j = O), w <= z ? {
        color: j,
        name: D,
        namespace: N,
        slot: "icon"
      } : H && w <= z + 0.5 ? {
        color: j,
        name: E,
        namespace: M,
        slot: "half-icon"
      } : {
        color: T || r?.disabled.value ? O : A,
        name: B,
        namespace: I,
        slot: "empty-icon"
      };
    }
    function v(w, z) {
      const { half: T, clearable: O } = e, { offsetWidth: R } = z.target;
      T && z.offsetX <= Math.floor(R / 2) && (w -= 0.5), u === w && O && (w = 0), u !== w && (C(e["onUpdate:modelValue"], w), C(e.onChange, w)), u = w;
    }
    function g() {
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
      C(e["onUpdate:modelValue"], 0), l();
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
      validate: g,
      resetValidation: l,
      toSizeUnit: Te,
      toNumber: Z,
      n: to
    };
  }
});
ab.render = $8;
var il = ab;
ue(il);
fe(il, ob);
var ZN = il, uu = il, ib = {
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
}, S8 = { viewBox: "-4 -4 32 32" };
function C8(e, n) {
  return b(), k("svg", S8, [...n[0] || (n[0] = [L("path", {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  }, null, -1)])]);
}
var lb = te({});
lb.render = C8;
var P8 = lb, O8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
};
function z8(e, n) {
  return b(), k("svg", O8, [...n[0] || (n[0] = [L("path", { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" }, null, -1)])]);
}
var sb = te({});
sb.render = z8;
var T8 = sb, E8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
};
function B8(e, n) {
  return b(), k("svg", E8, [...n[0] || (n[0] = [L("path", { d: "M11,9H13V7H11M11,20H13V11H11V20Z" }, null, -1)])]);
}
var ub = te({});
ub.render = B8;
var I8 = ub, D8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
};
function M8(e, n) {
  return b(), k("svg", D8, [...n[0] || (n[0] = [L("path", { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" }, null, -1)])]);
}
var db = te({});
db.render = M8;
var A8 = db, { n: N8, classes: R8 } = oe("result");
function V8(e, n) {
  return b(), k(Ie, null, [
    L("span", { class: p(e.n("success-cover-left")) }, null, 2),
    L("span", {
      class: p(e.classes(e.n("success-line"), e.n("success-line-tip"))),
      style: Q({
        animationDuration: e.animation ? "760ms" : "0ms",
        borderRadius: `calc(${e.borderSize} * 0.625)`
      })
    }, null, 6),
    L("span", {
      class: p(e.classes(e.n("success-line"), e.n("success-line-long"))),
      style: Q({
        animationDuration: e.animation ? "770ms" : "0ms",
        borderRadius: `calc(${e.borderSize} * 0.625)`
      })
    }, null, 6),
    L("span", {
      ref: "circle",
      class: p(e.n("success-circle")),
      style: Q({
        left: `-${e.borderSize}`,
        top: `-${e.borderSize}`,
        borderWidth: e.borderSize
      })
    }, null, 6),
    L("span", { class: p(e.n("success-line-fix")) }, null, 2),
    L("span", {
      class: p(e.n("success-cover-right")),
      style: Q({ animationDuration: e.animation ? "4250ms" : "0ms" })
    }, null, 6)
  ], 64);
}
var cb = te({
  props: {
    animation: { type: Boolean },
    borderSize: { type: String }
  },
  setup() {
    return {
      n: N8,
      classes: R8
    };
  }
});
cb.render = V8;
var L8 = cb, F8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
};
function H8(e, n) {
  return b(), k("svg", F8, [...n[0] || (n[0] = [L("path", { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" }, null, -1)])]);
}
var fb = te({});
fb.render = H8;
var U8 = fb, { name: j8, n: Y8, classes: K8 } = oe("result");
function W8(e, n) {
  return b(), k("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [
    F(e.$slots, "image", {}, () => [e.type ? (b(), k("div", {
      key: 0,
      class: p(e.n("image-container"))
    }, [L("div", {
      class: p(e.classes(e.n("image"), e.n(e.type))),
      style: Q({
        width: e.circleSize,
        height: e.circleSize,
        borderWidth: e.borderSize
      })
    }, [(b(), ke(Xt(e.type), {
      "border-size": e.borderSize,
      animation: e.animation
    }, null, 8, ["border-size", "animation"]))], 6)], 2)) : X("v-if", !0)]),
    F(e.$slots, "title", {}, () => [e.title ? (b(), k("div", {
      key: 0,
      class: p(e.n("title"))
    }, ve(e.title), 3)) : X("v-if", !0)]),
    F(e.$slots, "description", {}, () => [e.description ? (b(), k("div", {
      key: 0,
      class: p(e.n("description"))
    }, ve(e.description), 3)) : X("v-if", !0)]),
    e.$slots.footer ? (b(), k("div", {
      key: 0,
      class: p(e.n("footer"))
    }, [F(e.$slots, "footer")], 2)) : X("v-if", !0)
  ], 2);
}
var vb = te({
  name: j8,
  components: {
    Info: I8,
    Success: L8,
    Warning: U8,
    Error: T8,
    Question: A8,
    Empty: P8
  },
  props: ib,
  setup(e) {
    return {
      circleSize: S(() => `calc(${e.imageSize ? Te(e.imageSize) : "var(--result-image-size)"} * 0.9)`),
      borderSize: S(() => `calc(${e.imageSize ? Te(e.imageSize) : "var(--result-image-size)"} * 0.05)`),
      n: Y8,
      classes: K8
    };
  }
});
vb.render = W8;
var ll = vb;
ue(ll);
fe(ll, ib);
var JN = ll, du = ll, pb = {
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
}, { name: q8, n: X8, classes: G8 } = oe("row");
function Z8(e, n) {
  return b(), k("div", {
    class: p(e.classes(e.n(), e.n("$--box"))),
    style: Q({
      justifyContent: e.padStartFlex(e.justify),
      alignItems: e.padStartFlex(e.align),
      margin: `${-e.average[0]}px ${-e.average[1]}px`
    }),
    onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [F(e.$slots, "default")], 6);
}
var mb = te({
  name: q8,
  props: pb,
  setup(e) {
    const n = S(() => We(e.gutter) ? e.gutter.map((o) => fn(o) / 2) : [0, fn(e.gutter) / 2]), { bindCols: r } = xC();
    r({ average: n });
    function t(o) {
      C(e.onClick, o);
    }
    return {
      average: n,
      n: X8,
      classes: G8,
      handleClick: t,
      padStartFlex: ba
    };
  }
});
mb.render = Z8;
var sl = mb;
ue(sl);
fe(sl, pb);
var QN = sl, cu = sl, gb = {
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
}, hb = /* @__PURE__ */ Symbol("SEGMENTED_BUTTONS_BIND_BUTTON_KEY");
function J8() {
  const { bindChildren: e, childProviders: n, length: r } = In(hb);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function Q8() {
  const { bindParent: e, parentProvider: n } = Bn(hb);
  return or(!!e, "SegmentedButton", "<var-segmented-button/> must in <var-segmented-buttons/>"), {
    segmentedButtons: n,
    bindSegmentedButtons: e
  };
}
var { name: x8, n: _8, classes: eT } = oe("segmented-button"), nT = [
  "role",
  "aria-checked",
  "aria-disabled",
  "disabled",
  "tabindex"
];
function rT(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), o = _e("ripple"), a = _e("hover");
  return Ke((b(), k("button", {
    ref: "segmentedButton",
    role: e.segmentedButtons.multiple.value ? "checkbox" : "radio",
    "aria-checked": e.checked,
    "aria-disabled": e.formDisabled || e.disabled || e.formReadonly || e.readonly,
    disabled: e.formDisabled || e.disabled,
    tabindex: e.formDisabled || e.disabled ? void 0 : "0",
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.segmentedButtons.size.value}`), [
      e.checked,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.formDisabled || e.disabled, e.n("--disabled")])),
    type: "button",
    onClick: n[0] || (n[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onFocus: n[1] || (n[1] = (i) => e.isFocusing = !0),
    onBlur: n[2] || (n[2] = (i) => e.isFocusing = !1)
  }, [L("div", { class: p(e.n("content")) }, [e.segmentedButtons.checkmark.value && e.checked ? F(e.$slots, "checkmark", {
    key: 0,
    checked: e.checked
  }, () => [U(r, {
    class: p(e.n("icon")),
    "var-segmented-button-cover": "",
    name: "check"
  }, null, 8, ["class"])]) : X("v-if", !0), F(e.$slots, "default", { checked: e.checked })], 2), U(t, {
    hovering: !e.formDisabled && !e.disabled && e.hovering,
    focusing: !e.formDisabled && !e.disabled && e.isFocusing
  }, null, 8, ["hovering", "focusing"])], 42, nT)), [[o, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    a,
    e.handleHovering,
    "desktop"
  ]]);
}
var bb = te({
  name: x8,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarHoverOverlay: Zn,
    VarIcon: Je
  },
  props: gb,
  setup(e) {
    const n = P(), r = P(!1), t = P(!1), { segmentedButtons: o, bindSegmentedButtons: a } = Q8(), { hovering: i, handleHovering: l } = ur(), { form: s } = Kn();
    a({
      checked: S(() => t.value),
      disabled: S(() => s?.disabled.value || e.disabled),
      isFocusing: S(() => r.value),
      sync: c,
      toggle: d,
      move: f
    });
    function u(v) {
      s?.disabled.value || e.disabled || (C(e.onClick, v), d());
    }
    function d() {
      s?.disabled.value || e.disabled || s?.readonly.value || e.readonly || o.onClick(e.checkedValue, t.value);
    }
    function c(v) {
      const g = We(v) ? v.includes(e.checkedValue) : v === e.checkedValue;
      return t.value = g, g;
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
      n: _8,
      classes: eT,
      handleHovering: l,
      handleClick: u,
      toggle: d
    };
  }
});
bb.render = rT;
var ul = bb;
ue(ul);
fe(ul, gb);
var xN = ul, Ma = ul, yb = {
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
}, { name: tT, n: oT, classes: aT } = oe("segmented-buttons"), iT = ["role"];
function lT(e, n) {
  const r = x("maybe-v-node"), t = x("var-segmented-button"), o = x("var-form-details");
  return b(), k("div", { class: p(e.n("wrap")) }, [L("div", {
    role: e.multiple ? "group" : "radiogroup",
    class: p([e.n(), e.hasError ? e.n("--error") : null])
  }, [e.options.length ? (b(!0), k(Ie, { key: 0 }, Ye(e.options, (a) => (b(), ke(t, {
    key: e.getOptionValue(a),
    "checked-value": e.getOptionValue(a),
    disabled: a.disabled,
    ripple: a.ripple
  }, {
    default: se(() => [U(r, { is: e.renderOptionLabel(a) }, null, 8, ["is"])]),
    _: 2
  }, 1032, [
    "checked-value",
    "disabled",
    "ripple"
  ]))), 128)) : X("v-if", !0), F(e.$slots, "default")], 10, iT), U(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var wb = te({
  name: tT,
  components: {
    VarFormDetails: Hn,
    VarSegmentedButton: Ma,
    MaybeVNode: lr
  },
  props: yb,
  setup(e) {
    const { length: n, buttons: r, bindButtons: t } = J8(), { bindForm: o } = Kn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = xn(), u = {
      multiple: S(() => e.multiple),
      checkmark: S(() => e.checkmark),
      size: S(() => e.size),
      onClick: w
    }, d = {
      validate: R,
      reset: H,
      resetValidation: s
    };
    ge(() => e.modelValue, z), ge(() => n.value, z), t(u), C(o, d), xe(() => window, "keydown", h), xe(() => window, "keyup", m);
    function c() {
      return e.multiple ? We(e.modelValue) ? e.modelValue : [] : e.modelValue;
    }
    function f(A) {
      const D = c();
      return We(D) ? D.includes(A) : D === A;
    }
    function v(A) {
      return ir(A[e.labelKey], A, f(g(A)));
    }
    function g(A) {
      return A[e.valueKey];
    }
    function h(A) {
      const D = r.findIndex(({ isFocusing: E }) => E.value);
      if (D !== -1 && r.some(({ disabled: E }, B) => B === D ? !1 : !E.value)) {
        if (["ArrowLeft", "ArrowRight"].includes(A.key) && A.preventDefault(), (A.key === "Enter" || A.key === " ") && A.preventDefault(), A.key === "ArrowLeft") {
          y(D, "prev");
          return;
        }
        if (A.key === "ArrowRight") {
          y(D, "next");
          return;
        }
        A.key === "Enter" && r[D].toggle();
      }
    }
    function m(A) {
      const D = r.findIndex(({ isFocusing: E }) => E.value);
      D !== -1 && A.key === " " && (A.preventDefault(), r[D].toggle());
    }
    function y(A, D) {
      for (; ; ) {
        A += D === "prev" ? -1 : 1, A < 0 && (A = r.length - 1), A > r.length - 1 && (A = 0);
        const E = r[A];
        if (!E.disabled.value) {
          E.move(!e.multiple);
          break;
        }
      }
    }
    function $(A) {
      Ne(() => {
        i(e.validateTrigger, A, e.rules, c());
      });
    }
    function w(A, D) {
      if ($("onClick"), !e.multiple) {
        if (D) return;
        T(A);
        return;
      }
      const E = c();
      if (D) {
        T(E.filter((B) => B !== A));
        return;
      }
      T([...E, A]);
    }
    function z() {
      const A = c();
      r.forEach(({ sync: D }) => D(A));
    }
    function T(A) {
      C(e["onUpdate:modelValue"], A), C(e.onChange, A), $("onChange");
    }
    const O = S(() => !!a.value);
    function R() {
      return l(e.rules, c());
    }
    function H() {
      C(e["onUpdate:modelValue"], e.multiple ? [] : void 0), s();
    }
    return {
      errorMessage: a,
      n: oT,
      classes: aT,
      renderOptionLabel: v,
      getOptionValue: g,
      hasError: O,
      validate: R,
      reset: H,
      resetValidation: s
    };
  }
});
wb.render = lT;
var dl = wb;
ue(dl);
fe(dl, yb);
var _N = dl, fu = dl, sT = Object.defineProperty, $v = Object.getOwnPropertySymbols, uT = Object.prototype.hasOwnProperty, dT = Object.prototype.propertyIsEnumerable, Sv = (e, n, r) => n in e ? sT(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, cT = (e, n) => {
  for (var r in n || (n = {})) uT.call(n, r) && Sv(e, r, n[r]);
  if ($v)
    for (var r of $v(n)) dT.call(n, r) && Sv(e, r, n[r]);
  return e;
}, kb = cT({
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
])), { n: fT, classes: vT } = oe("select");
function pT(e, n) {
  return Ke((b(), k("input", {
    ref: "filterInputRef",
    "onUpdate:modelValue": n[0] || (n[0] = (r) => e.value = r),
    type: "text",
    class: p(e.classes(e.n("filter"), [e.multiple, e.n("filter--multiple")]))
  }, null, 2)), [[Xv, e.value]]);
}
var $b = te({
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
    const n = P(), r = S({
      get: () => e.modelValue,
      set: (a) => C(e["onUpdate:modelValue"], a)
    });
    return {
      n: fT,
      classes: vT,
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
$b.render = pT;
var mT = $b, Cv = (e, n, r) => new Promise((t, o) => {
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
function gT(e, n, r) {
  const t = P(!1);
  let o = null;
  ge(() => n.value, () => Cv(null, null, function* () {
    l(), n.value && (yield Ne(), i(), a());
  }), { immediate: !0 }), Gt(l);
  function a() {
    var s;
    const u = e.value, d = u?.querySelectorAll(".var-option");
    t.value = d?.length ? Array.from(d).every((c) => Ur(c).display === "none") : !0, (s = r?.onAfterUpdate) == null || s.call(r);
  }
  function i() {
    e.value && (o = new MutationObserver(() => Cv(null, null, function* () {
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
var hT = 11;
function bT(e) {
  const n = P0(), r = P(0), t = S(() => ({ minWidth: `${Math.max(r.value, hT)}px` })), o = () => {
    var a, i;
    r.value = (i = (a = n.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? i : 0;
  };
  return ge(() => Na(e), () => {
    Ne(o);
  }), {
    calculatorRef: n,
    filterStyle: t,
    resize: o
  };
}
var yT = Object.defineProperty, wT = Object.defineProperties, kT = Object.getOwnPropertyDescriptors, Pv = Object.getOwnPropertySymbols, $T = Object.prototype.hasOwnProperty, ST = Object.prototype.propertyIsEnumerable, Ov = (e, n, r) => n in e ? yT(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, CT = (e, n) => {
  for (var r in n || (n = {})) $T.call(n, r) && Ov(e, r, n[r]);
  if (Pv)
    for (var r of Pv(n)) ST.call(n, r) && Ov(e, r, n[r]);
  return e;
}, PT = (e, n) => wT(e, kT(n)), OT = (e, n, r) => new Promise((t, o) => {
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
}), { name: zT, n: TT, classes: ET } = oe("select"), BT = ["tabindex"];
function IT(e, n) {
  const r = x("maybe-v-node"), t = x("var-chip"), o = x("var-select-filter"), a = x("var-icon"), i = x("var-field-decorator"), l = x("var-option"), s = x("var-menu"), u = x("var-form-details");
  return b(), k("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.tabindex,
    onFocus: n[6] || (n[6] = (...d) => e.handleFocus && e.handleFocus(...d)),
    onBlur: n[7] || (n[7] = (...d) => e.handleRootBlur && e.handleRootBlur(...d))
  }, [U(s, {
    ref: "menuRef",
    show: e.showMenu,
    "onUpdate:show": n[4] || (n[4] = (d) => e.showMenu = d),
    "var-select-cover": "",
    "same-width": "",
    "close-on-click-reference": "",
    "close-on-key-escape": !1,
    class: p(e.n("menu")),
    "popover-class": e.variant === "standard" && e.hint && !e.filterable ? e.n("--standard-menu-margin") : void 0,
    "offset-y": e.offsetY,
    disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
    placement: e.placement,
    "default-style": !1,
    onClickOutside: e.handleClickOutside
  }, {
    menu: se(() => [L("div", {
      ref: "menuEl",
      class: p(e.classes(e.n("scroller"), e.n("$--scrollbar"), e.n("$-elevation--3")))
    }, [
      e.showEmpty ? F(e.$slots, "empty", { key: 0 }, () => [L("div", { class: p(e.n("empty")) }, ve((e.pt ? e.pt : e.t)("selectEmptyText")), 3)]) : X("v-if", !0),
      e.options.length ? (b(!0), k(Ie, { key: 1 }, Ye(e.options, (d) => (b(), ke(l, {
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
      ]))), 128)) : X("v-if", !0),
      F(e.$slots, "default")
    ], 2)]),
    default: se(() => [U(i, yt(Aa({
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
      "append-icon": se(() => [F(e.$slots, "arrow-icon", {
        focus: e.isFocusing,
        menuOpen: e.showMenu
      }, () => [U(a, {
        class: p(e.classes(e.n("arrow"), [e.showMenu, e.n("--arrow-rotate")])),
        "var-select-cover": "",
        name: "menu-down",
        transition: 300
      }, null, 8, ["class"])]), F(e.$slots, "append-icon")]),
      default: se(() => [L("div", {
        class: p(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: Q({
          textAlign: e.textAlign,
          color: e.textColor
        })
      }, [
        L("div", { class: p(e.classes(e.n("label"), [e.filterable && e.showMenu, e.n("--label-focusing")])) }, [e.isShowSelected() ? F(e.$slots, "selected", { key: 0 }, () => [e.multiple ? (b(), k(Ie, { key: 0 }, [e.chip ? (b(), k("div", {
          key: 0,
          class: p(e.n("chips"))
        }, [(b(!0), k(Ie, null, Ye(e.labels, (d) => (b(), ke(t, {
          key: d,
          class: p(e.n("chip")),
          "var-select-cover": "",
          closeable: "",
          size: "small",
          type: e.errorMessage ? "danger" : void 0,
          onClick: n[0] || (n[0] = Nn(() => {
          }, ["stop"])),
          onClose: () => e.handleClose(d)
        }, {
          default: se(() => [U(r, { is: d }, null, 8, ["is"])]),
          _: 2
        }, 1032, [
          "class",
          "type",
          "onClose"
        ]))), 128)), e.isShowMultipleFilter() ? (b(), ke(o, {
          key: 0,
          ref: "filterRef",
          modelValue: e.pattern,
          "onUpdate:modelValue": n[1] || (n[1] = (d) => e.pattern = d),
          style: Q(e.filterStyle),
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
        ])) : X("v-if", !0)], 2)) : (b(), k("div", {
          key: 1,
          class: p(e.n("values"))
        }, [(b(!0), k(Ie, null, Ye(e.labels, (d, c) => (b(), k(Ie, { key: d }, [U(r, { is: d }, null, 8, ["is"]), Le(ve(c !== e.labels.length - 1 ? e.separator : ""), 1)], 64))), 128)), e.isShowMultipleFilter() ? (b(), ke(o, {
          key: 0,
          ref: "filterRef",
          modelValue: e.pattern,
          "onUpdate:modelValue": n[2] || (n[2] = (d) => e.pattern = d),
          style: Q(PT(CT({}, e.filterStyle), { paddingLeft: e.labels.length ? "4px" : 0 })),
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
        ])) : X("v-if", !0)], 2))], 64)) : (b(), ke(r, {
          key: 1,
          is: e.label
        }, null, 8, ["is"]))]) : X("v-if", !0)], 2),
        e.enableCustomPlaceholder && !e.pattern ? (b(), k("span", {
          key: 0,
          class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
          style: Q({ color: e.placeholderColor })
        }, ve(e.placeholder), 7)) : X("v-if", !0),
        e.isShowSingleFilter() ? (b(), ke(o, {
          key: 1,
          ref: "filterRef",
          modelValue: e.pattern,
          "onUpdate:modelValue": n[3] || (n[3] = (d) => e.pattern = d),
          style: Q(e.filterStyle),
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
        ])) : X("v-if", !0),
        e.filterable ? (b(), k("span", {
          key: 2,
          ref: "calculatorRef",
          class: p(e.n("filter-calculator"))
        }, ve(e.pattern), 3)) : X("v-if", !0)
      ], 6)]),
      _: 2
    }, [e.$slots["prepend-icon"] ? {
      name: "prepend-icon",
      fn: se(() => [F(e.$slots, "prepend-icon")]),
      key: "0"
    } : void 0, e.pattern ? void 0 : {
      name: "clear-icon",
      fn: se(({ clear: d }) => [F(e.$slots, "clear-icon", { clear: d })]),
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
  ]), U(u, {
    "error-message": e.errorMessage,
    onClick: n[5] || (n[5] = Nn(() => {
    }, ["stop"]))
  }, null, 8, ["error-message"])], 42, BT);
}
var Sb = te({
  name: zT,
  components: {
    VarIcon: Je,
    VarMenu: jt,
    VarChip: $a,
    VarOption: Da,
    VarFieldDecorator: ho,
    VarFormDetails: Hn,
    VarSelectFilter: mT,
    MaybeVNode: lr
  },
  props: kb,
  setup(e) {
    var n;
    const r = P(!1), t = P(!1), o = P(null), a = P(null), i = P(""), l = P(!1), s = S(() => e.filterable), u = S(() => e.multiple), d = S(() => e.focusColor), c = S(() => Or(e.modelValue)), f = S(() => e.disabled || e.readonly ? "" : "pointer"), { bindForm: v, form: g } = Kn(), { length: h, options: m, bindOptions: y } = o6(), { label: $, labels: w, computeLabel: z, getSelectedValue: T } = tm({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => m,
      optionProvidersLength: () => h.value
    }), { errorMessage: O, validateWithTrigger: R, validate: H, resetValidation: A } = xn(), D = S(() => g?.readonly.value || e.readonly), E = S(() => g?.disabled.value || e.disabled), B = P(null), N = P(null), M = S(() => e.variant === "standard" && !e.filterable ? "cover-top" : "bottom"), { t: I } = kr(), j = P(0), W = S({
      get() {
        return j.value + (M.value === "bottom" ? 2 : 0);
      },
      set(Re) {
        j.value = Re;
      }
    }), G = S(() => {
      const { hint: Re, blurColor: sn, focusColor: _ } = e;
      if (!Re)
        return O.value ? "var(--field-decorator-error-color)" : r.value ? _ || "var(--field-decorator-focus-color)" : sn || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), ce = S(() => !e.hint && Or(e.modelValue)), me = S(() => {
      var Re;
      if (!E.value)
        return s.value && r.value ? "-1" : (Re = e.tabindex) != null ? Re : "0";
    }), { calculatorRef: de, filterStyle: J } = bT(i), ne = {
      pattern: S(() => i.value),
      showMenu: S(() => t.value),
      multiple: u,
      filterable: s,
      filter: (n = e.filter) != null ? n : ((Re, sn) => String(sn[e.labelKey]).toLocaleLowerCase().includes(Re.toLocaleLowerCase())),
      focusColor: d,
      computeLabel: z,
      onSelect: re,
      reset: _n,
      validate: Br,
      resetValidation: A
    }, { showEmpty: pe } = gT(B, t, { onAfterUpdate: () => {
      var Re;
      return (Re = N.value) == null ? void 0 : Re.resize();
    } });
    let Oe = !1;
    ge(() => e.multiple, () => {
      or(e.multiple && We(e.modelValue), "Select", "The modelValue must be an array when multiple is true");
    }), ge(t, (Re) => {
      Re && Ne(Ue);
    }), y(ne), xe(() => window, "keydown", nn), xe(() => window, "keyup", qe), C(v, ne);
    function Y() {
      return s.value && !D.value && !E.value && !u.value;
    }
    function ae() {
      return s.value && !D.value && !E.value && u.value;
    }
    function Ee() {
      return !(c.value && !u.value || !u.value && (i.value || l.value));
    }
    function Ue() {
      var Re;
      zp(B.value, (Re = B.value) == null ? void 0 : Re.querySelector(".var-option--selected-color"));
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
        o.value.focus(), Ze(Re), ye();
        return;
      }
      if (_ === "Enter" && !t.value) {
        Ze(Re), t.value = !0, (sn = a.value) == null || sn.focus();
        return;
      }
      (_ === "ArrowDown" || _ === "ArrowUp") && t.value && (Ze(Re), Ju(o.value, B.value, _));
    }
    function qe(Re) {
      if (E.value || D.value || t.value || !r.value) return;
      const { key: sn } = Re;
      sn === " " && !t.value && (Ze(Re), t.value = !0);
    }
    function en(Re) {
      Ne(() => {
        const { validateTrigger: sn, rules: _, modelValue: be } = e;
        R(sn, Re, _, be);
      });
    }
    function on() {
      var Re;
      const { disabled: sn, readonly: _, onFocus: be } = e;
      if (!(g?.disabled.value || g?.readonly.value || sn || _)) {
        if (Oe) {
          Oe = !1;
          return;
        }
        W.value = fn(e.offsetY), $r(), (ae() || Y()) && (Oe = !0, (Re = a.value) == null || Re.focus()), C(be), en("onFocus");
      }
    }
    function ye() {
      const { disabled: Re, readonly: sn, onBlur: _ } = e;
      g?.disabled.value || g?.readonly.value || Re || sn || (ar(), C(_), en("onBlur"), i.value = "");
    }
    function ee() {
      return OT(this, null, function* () {
        if (Oe) {
          yield Ne(), Oe = !1;
          return;
        }
        t.value || ye();
      });
    }
    function K() {
      r.value && ye();
    }
    function re(Re) {
      const { disabled: sn, readonly: _, multiple: be, onChange: le } = e;
      if (g?.disabled.value || g?.readonly.value || sn || _) return;
      const $e = T(Re);
      C(e["onUpdate:modelValue"], $e), C(le, $e), en("onChange"), Ne(() => {
        var je;
        return (je = a.value) == null ? void 0 : je.focus();
      }), be || (o.value.focus(), Gn().then(() => {
        t.value = !1, i.value = "";
      }));
    }
    function we() {
      const { disabled: Re, readonly: sn, multiple: _, clearable: be, onClear: le, onChange: $e } = e;
      if (g?.disabled.value || g?.readonly.value || Re || sn || !be) return;
      const je = _ ? [] : void 0;
      C(e["onUpdate:modelValue"], je), C(le, je), en("onClear"), C($e, je), en("onChange");
    }
    function ze(Re) {
      const { disabled: sn, onClick: _ } = e;
      g?.disabled.value || sn || (C(_, Re), en("onClick"));
    }
    function Ge(Re) {
      const { disabled: sn, readonly: _, modelValue: be, onClose: le, onChange: $e } = e;
      if (g?.disabled.value || g?.readonly.value || sn || _) return;
      const je = m.find(({ label: Rn }) => Rn.value === Re), un = be.filter((Rn) => {
        var Wn;
        return Rn !== ((Wn = je.value.value) != null ? Wn : je.label.value);
      });
      C(e["onUpdate:modelValue"], un), C(le, un), en("onClose"), C($e, un), en("onChange");
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
      W.value = fn(e.offsetY), r.value = !0;
    }
    function ar() {
      r.value = !1, t.value = !1;
    }
    function Br() {
      return H(e.rules, e.modelValue);
    }
    function _n() {
      C(e["onUpdate:modelValue"], e.multiple ? [] : void 0), A();
    }
    return {
      root: o,
      filterRef: a,
      calculatorRef: de,
      isComposing: l,
      filterStyle: J,
      pattern: i,
      tabindex: me,
      readonly: D,
      disabled: E,
      offsetY: W,
      isFocusing: r,
      showMenu: t,
      errorMessage: O,
      formDisabled: g?.disabled,
      formReadonly: g?.readonly,
      label: $,
      labels: w,
      isEmptyModelValue: c,
      menuEl: B,
      menuRef: N,
      placement: M,
      cursor: f,
      placeholderColor: G,
      enableCustomPlaceholder: ce,
      showEmpty: pe,
      t: gn,
      pt: I,
      isFunction: Yn,
      n: TT,
      classes: ET,
      isShowSelected: Ee,
      isShowSingleFilter: Y,
      isShowMultipleFilter: ae,
      handleFocus: on,
      handleBlur: ye,
      handleClickOutside: K,
      handleClear: we,
      handleClick: ze,
      handleClose: Ge,
      handleRootBlur: ee,
      handleInput: rn,
      handleCompositionStart: mn,
      handleCompositionEnd: Dn,
      reset: _n,
      validate: Br,
      resetValidation: A,
      focus: $r,
      blur: ar
    };
  }
});
Sb.render = IT;
var cl = Sb;
ue(cl);
fe(cl, kb);
var e7 = cl, vu = cl, Cb = { type: {
  type: String,
  default: "default"
} }, { name: DT, n: MT, classes: AT } = oe("shimmer-text");
function NT(e, n) {
  return b(), k("span", { class: p(e.classes(e.n(), e.n(`--${e.type}`))) }, [F(e.$slots, "default")], 2);
}
var Pb = te({
  name: DT,
  props: Cb,
  setup() {
    return {
      n: MT,
      classes: AT
    };
  }
});
Pb.render = NT;
var fl = Pb;
ue(fl);
fe(fl, Cb);
var n7 = fl, pu = fl, Ob = {
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
}, { name: RT, n: VT } = oe("signature"), LT = ["height", "width"];
function FT(e, n) {
  return b(), k("div", {
    ref: "root",
    class: p(e.n())
  }, [L("canvas", {
    ref: "canvas",
    height: e.canvasHeight,
    width: e.canvasWidth
  }, null, 8, LT)], 2);
}
var zb = te({
  name: RT,
  props: Ob,
  setup(e) {
    const n = P(), r = P(), t = P(0), o = P(0);
    let a = !1, i = null;
    xe(r, "touchstart", s), xe(r, "touchmove", u), xe(r, "touchend", d), wr(l), Tr(l);
    function l() {
      !r.value || !n.value || (i = r.value.getContext("2d"), t.value = n.value.offsetWidth, o.value = n.value.offsetHeight);
    }
    function s(h) {
      !i || !n.value || (h.preventDefault(), a = !0, i.beginPath(), i.lineWidth = Z(e.lineWidth), i.strokeStyle = e.strokeStyle === "currentColor" ? Ur(n.value).color : e.strokeStyle, C(e.onStart));
    }
    function u(h) {
      if (h.preventDefault(), !r.value || !i || !a) return;
      const m = h.touches[0].clientX, y = h.touches[0].clientY, $ = kn(r.value), w = m - $.left, z = y - $.top;
      i.lineTo(w, z), i.stroke(), C(e.onSigning);
    }
    function d(h) {
      a && (h.preventDefault(), a = !1, C(e.onEnd));
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
    function g() {
      if (r.value)
        return f(r.value) ? "" : c(r.value);
    }
    return {
      root: n,
      canvas: r,
      canvasWidth: t,
      canvasHeight: o,
      n: VT,
      confirm: g,
      reset: v
    };
  }
});
zb.render = FT;
var vl = zb;
ue(vl);
fe(vl, Ob);
var r7 = vl, mu = vl, Tb = {
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
}, { name: HT, n: UT, classes: jT } = oe("skeleton");
function YT(e, n) {
  return b(), k("div", { class: p(e.classes(e.n("$--box"), e.n())) }, [
    e.loading ? X("v-if", !0) : (b(), k("div", {
      key: 0,
      class: p(e.n("data"))
    }, [F(e.$slots, "default")], 2)),
    e.loading && !e.fullscreen ? (b(), k("div", {
      key: 1,
      class: p(e.n("content"))
    }, [e.card ? (b(), k("div", {
      key: 0,
      class: p(e.n("card")),
      style: Q({ height: e.toSizeUnit(e.cardHeight) })
    }, [L("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : X("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (b(), k("div", {
      key: 1,
      class: p(e.n("article"))
    }, [e.avatar ? (b(), k("div", {
      key: 0,
      class: p(e.n("avatar")),
      style: Q({
        width: e.toSizeUnit(e.avatarSize),
        height: e.toSizeUnit(e.avatarSize)
      })
    }, [L("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : X("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (b(), k("div", {
      key: 1,
      class: p(e.n("section"))
    }, [e.title ? (b(), k("div", {
      key: 0,
      class: p(e.n("title")),
      style: Q({ width: e.toSizeUnit(e.titleWidth) })
    }, [L("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : X("v-if", !0), (b(!0), k(Ie, null, Ye(e.toNumber(e.rows), (r, t) => (b(), k("div", {
      key: r,
      class: p(e.n("row")),
      style: Q({ width: e.toSizeUnit(e.rowsWidth[t]) })
    }, [L("div", { class: p(e.n("--animation")) }, null, 2)], 6))), 128))], 2)) : X("v-if", !0)], 2)) : X("v-if", !0)], 2)) : X("v-if", !0),
    e.loading && e.fullscreen ? (b(), k("div", {
      key: 2,
      class: p(e.n("fullscreen")),
      style: Q({ zIndex: e.toNumber(e.fullscreenZIndex) })
    }, [L("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : X("v-if", !0)
  ], 2);
}
var Eb = te({
  name: HT,
  props: Tb,
  setup: () => ({
    n: UT,
    classes: jT,
    toSizeUnit: Te,
    toNumber: Z
  })
});
Eb.render = YT;
var pl = Eb;
ue(pl);
fe(pl, Tb);
var t7 = pl, gu = pl, zn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(zn || {}), Bb = {
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
}, { name: KT, n: zv, classes: WT } = oe("slider"), qT = [
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
function XT(e, n) {
  const r = x("var-hover-overlay"), t = x("var-form-details"), o = _e("hover");
  return b(), k("div", { class: p(e.classes(e.n(e.direction), e.n("$--box"))) }, [L("div", {
    ref: "sliderEl",
    class: p(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
    onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
  }, [L("div", { class: p(e.n(`${e.direction}-track`)) }, [L("div", {
    class: p(e.n(`${e.direction}-track-background`)),
    style: Q({
      background: e.trackColor,
      height: e.isVertical ? "100%" : e.toSizeUnit(e.trackHeight),
      width: e.isVertical ? e.toSizeUnit(e.trackHeight) : "100%"
    })
  }, null, 6), L("div", {
    class: p(e.n(`${e.direction}-track-fill`)),
    style: Q(e.getFillStyle)
  }, null, 6)], 2), (b(!0), k(Ie, null, Ye(e.thumbList, (a) => (b(), k("div", {
    key: a.enumValue,
    class: p(e.n(`${e.direction}-thumb`)),
    style: Q(e.thumbStyle(a)),
    tabindex: e.isDisabled ? void 0 : "0",
    role: "slider",
    "aria-valuemin": e.min,
    "aria-valuemax": e.max,
    "aria-valuenow": a.value,
    "aria-disabled": e.isDisabled,
    "aria-valuetext": `${a.text}`,
    onTouchstart: Nn((i) => e.start(i, a.enumValue), ["stop"]),
    onTouchmove: n[0] || (n[0] = Nn((...i) => e.move && e.move(...i), ["stop"])),
    onFocusin: (i) => e.handleFocus(a),
    onFocusout: (i) => e.handleBlur(a)
  }, [F(e.$slots, "button", { currentValue: a.text }, () => [
    Ke(L("div", {
      class: p(e.n(`${e.direction}-thumb-block`)),
      style: Q({ background: e.thumbColor })
    }, null, 6), [[
      o,
      (i) => e.hover(i, a),
      "desktop"
    ]]),
    L("div", {
      class: p(e.classes(e.n(`${e.direction}-thumb-ripple`), [e.thumbsProps[a.enumValue].active, e.n(`${e.direction}-thumb-ripple--active`)])),
      style: Q({ background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0 })
    }, [U(r, {
      hovering: !e.isDisabled && a.hovering,
      focusing: !e.isDisabled && a.focusing
    }, null, 8, ["hovering", "focusing"])], 6),
    L("div", {
      class: p(e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])),
      style: Q({
        background: e.labelColor,
        color: e.labelTextColor,
        height: e.toSizeUnit(e.thumbSize),
        width: e.toSizeUnit(e.thumbSize)
      })
    }, [L("span", null, ve(a.text), 1)], 6)
  ])], 46, qT))), 128))], 2), U(t, {
    "error-message": e.errorMessage,
    class: p(e.n("form")),
    "var-slider-cover": ""
  }, null, 8, ["error-message", "class"])], 2);
}
var Ib = te({
  name: KT,
  components: {
    VarFormDetails: Hn,
    VarHoverOverlay: Zn
  },
  directives: { Hover: jn },
  props: Bb,
  setup(e) {
    const n = P(0), r = P(null), t = P(!1), o = S(() => Z(e.max) - Z(e.min)), a = S(() => n.value / o.value * Z(e.step)), i = S(() => e.disabled || f?.disabled.value), l = S(() => e.readonly || f?.readonly.value), s = S(() => e.direction === "vertical"), u = P(!1), d = P(!1), { bindForm: c, form: f } = Kn(), { errorMessage: v, validateWithTrigger: g, validate: h, resetValidation: m } = xn(), { hovering: y, handleHovering: $ } = ur(), { hovering: w, handleHovering: z } = ur(), T = S(() => {
      const { modelValue: K, range: re } = e;
      let we = [];
      return re && We(K) ? we = [{
        value: j(K[0]),
        enumValue: zn.First,
        text: W(K[0]),
        hovering: y.value,
        focusing: u.value,
        handleHovering: $,
        handleFocusing(ze) {
          u.value = ze;
        }
      }, {
        value: j(K[1]),
        enumValue: zn.Second,
        text: W(K[1]),
        hovering: w.value,
        focusing: d.value,
        handleHovering: z,
        handleFocusing(ze) {
          d.value = ze;
        }
      }] : tr(K) && (we = [{
        value: j(K),
        enumValue: zn.First,
        text: W(K),
        hovering: y.value,
        focusing: u.value,
        handleHovering: $,
        handleFocusing(ze) {
          u.value = ze;
        }
      }]), we;
    }), O = S(() => {
      const { activeColor: K, range: re, modelValue: we } = e, ze = re && We(we) ? j(Math.min(we[0], we[1])) : 0, Ge = re && We(we) ? j(Math.max(we[0], we[1])) - ze : j(we);
      return s.value ? {
        left: "0px",
        height: `${Ge}%`,
        bottom: `${ze}%`,
        background: K
      } : {
        top: "0px",
        width: `${Ge}%`,
        left: `${ze}%`,
        background: K
      };
    }), R = $n({
      [zn.First]: E(),
      [zn.Second]: E()
    });
    let H;
    C(c, {
      reset: qe,
      validate: D,
      resetValidation: m
    }), ge([() => e.modelValue, () => e.step], ([K, re]) => {
      !Ee() || !Ue() || t.value || nn(K, Z(re));
    }), ge(n, () => nn()), En(() => {
      !Ee() || !Ue() || A();
    }), Pt(ne), xe(() => window, "keydown", on), wr(A);
    function A() {
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
      Ne(() => g(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function N(K) {
      const re = K.currentTarget;
      return re ? s.value ? n.value - (K.clientY - kn(re).top) : K.clientX - Ly(re) : 0;
    }
    function M(K) {
      return {
        [s.value ? "bottom" : "left"]: `${K.value}%`,
        zIndex: R[K.enumValue].active ? 1 : void 0
      };
    }
    function I(K) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : R[K].active;
    }
    function j(K) {
      const { min: re, max: we } = e;
      return K < Z(re) ? 0 : K > Z(we) ? 100 : (K - Z(re)) / o.value * 100;
    }
    function W(K) {
      if (!tr(K)) return 0;
      const re = hn(K, Z(e.min), Z(e.max));
      return parseInt(`${re}`, 10) === re ? re : Z(re.toPrecision(5));
    }
    function G(K, re) {
      i.value || re.handleHovering(K);
    }
    function ce(K) {
      C(e["onUpdate:modelValue"], K), C(e.onChange, K), B();
    }
    function me(K, re) {
      let we = [];
      const { step: ze, range: Ge, modelValue: rn, min: mn } = e, Dn = Z(ze), $r = Math.round(K / a.value), ar = $r * Dn + Z(mn), Br = R[re].percentValue * Dn + Z(mn);
      R[re].percentValue = $r, Ge && We(rn) && (we = re === zn.First ? [ar, rn[1]] : [rn[0], ar]), Br !== ar && ce(Ge ? we.map((_n) => W(_n)) : W(ar));
    }
    function de(K) {
      if (!e.range) return zn.First;
      const re = R[zn.First].percentValue * a.value, we = R[zn.Second].percentValue * a.value;
      return Math.abs(K - re) <= Math.abs(K - we) ? zn.First : zn.Second;
    }
    function J() {
      document.addEventListener("touchmove", Oe, { passive: !1 }), document.addEventListener("touchend", Y), document.addEventListener("touchcancel", Y);
    }
    function ne() {
      document.removeEventListener("touchmove", Oe), document.removeEventListener("touchend", Y), document.removeEventListener("touchcancel", Y);
    }
    function pe(K, re) {
      if (A(), i.value || (R[re].active = !0), H = re, J(), i.value || l.value) return;
      C(e.onStart), t.value = !0;
      const { clientX: we, clientY: ze } = K.touches[0];
      R[re].startPosition = s.value ? ze : we;
    }
    function Oe(K) {
      if (Ze(K), i.value || l.value || !t.value) return;
      const { startPosition: re, currentOffset: we } = R[H], { clientX: ze, clientY: Ge } = K.touches[0];
      let rn = (s.value ? re - Ge : ze - re) + we;
      rn <= 0 ? rn = 0 : rn >= n.value && (rn = n.value), me(rn, H);
    }
    function Y() {
      ne();
      const { range: K, modelValue: re, onEnd: we, step: ze, min: Ge } = e;
      if (i.value || (R[H].active = !1), i.value || l.value) return;
      let rn = [];
      R[H].currentOffset = R[H].percentValue * a.value;
      const mn = R[H].percentValue * Z(ze) + Z(Ge);
      K && We(re) && (rn = H === zn.First ? [mn, re[1]] : [re[0], mn]), C(we, K ? rn : mn), t.value = !1;
    }
    function ae(K) {
      if (i.value || l.value || K.target.closest(`.${zv("thumb")}`)) return;
      const re = N(K), we = de(re);
      H = we, me(re, we), Y();
    }
    function Ee() {
      return Z(e.step) <= 0 ? (K0("Slider", '"step" should be > 0'), !1) : !0;
    }
    function Ue() {
      const { range: K, modelValue: re } = e;
      return K && !We(re) ? (At("Slider", '"modelValue" should be an Array'), !1) : !K && We(re) ? (At("Slider", '"modelValue" should be a Number'), !1) : K && We(re) && re.length < 2 ? (At("Slider", '"modelValue" should have two value'), !1) : !0;
    }
    function nn(K = e.modelValue, re = Z(e.step)) {
      const we = (ze) => {
        const { min: Ge, max: rn } = e;
        return ze < Z(Ge) ? 0 : ze > Z(rn) ? o.value / re : (ze - Z(Ge)) / re;
      };
      e.range && We(K) ? (R[zn.First].percentValue = we(K[0]), R[zn.First].currentOffset = R[zn.First].percentValue * a.value, R[zn.Second].percentValue = we(K[1]), R[zn.Second].currentOffset = R[zn.Second].percentValue * a.value) : tr(K) && (R[zn.First].currentOffset = we(K) * a.value);
    }
    function qe() {
      const K = e.range ? [0, 0] : 0;
      C(e["onUpdate:modelValue"], K), m();
    }
    function en(K, re) {
      const we = Z(e.step);
      return We(re) ? [re[0] + (u.value ? K * we : 0), re[1] + (d.value ? K * we : 0)].map(W) : W(re + K * we);
    }
    function on(K) {
      const re = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: we } = K;
      if (!mo(re, we) || l.value || i.value || e.range && !u.value && !d.value || !e.range && !u.value) return;
      Ze(K);
      const ze = re[we];
      ce(en(ze, e.modelValue));
    }
    function ye(K) {
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
      handleFocus: ye,
      handleBlur: ee,
      n: zv,
      classes: WT,
      thumbStyle: M,
      hover: G,
      toSizeUnit: Te,
      toNumber: Z,
      showLabel: I,
      start: pe,
      move: Oe,
      end: Y,
      handleClick: ae
    };
  }
});
Ib.render = XT;
var ml = Ib;
ue(ml);
fe(ml, Bb);
var o7 = ml, hu = ml, GT = Object.defineProperty, ZT = Object.defineProperties, JT = Object.getOwnPropertyDescriptors, Tv = Object.getOwnPropertySymbols, QT = Object.prototype.hasOwnProperty, xT = Object.prototype.propertyIsEnumerable, Ev = (e, n, r) => n in e ? GT(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, _T = (e, n) => {
  for (var r in n || (n = {})) QT.call(n, r) && Ev(e, r, n[r]);
  if (Tv)
    for (var r of Tv(n)) xT.call(n, r) && Ev(e, r, n[r]);
  return e;
}, e5 = (e, n) => ZT(e, JT(n)), vd = {
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
  loadingType: Fe(jr, "type"),
  loadingSize: Fe(jr, "size"),
  loadingRadius: Fe(jr, "radius"),
  loadingColor: e5(_T({}, Fe(jr, "color")), { default: "currentColor" }),
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
}, { n: n5, classes: r5 } = oe("snackbar"), t5 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function o5(e, n) {
  const r = x("var-icon"), t = x("var-loading");
  return Ke((b(), k("div", {
    class: p(e.n()),
    style: Q({
      pointerEvents: e.isForbidClick ? "auto" : "none",
      zIndex: e.zIndex
    })
  }, [L("div", {
    class: p(e.classes(e.n("wrapper"), e.n(`wrapper-${e.position}`), e.formatElevation(e.elevation, 4), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n(`wrapper-${e.type}`)])),
    style: Q({ zIndex: e.zIndex })
  }, [
    L("div", { class: p([e.n("content"), e.contentClass]) }, [F(e.$slots, "default", {}, () => [Le(ve(e.content), 1)])], 2),
    e.iconName || e.type === "loading" || e.$slots.icon ? (b(), k("div", {
      key: 0,
      class: p(e.n("icon"))
    }, [
      e.iconName ? (b(), ke(r, {
        key: 0,
        name: e.iconName
      }, null, 8, ["name"])) : X("v-if", !0),
      e.type === "loading" ? (b(), ke(t, {
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
      ])) : X("v-if", !0),
      F(e.$slots, "icon")
    ], 2)) : X("v-if", !0),
    e.$slots.action ? (b(), k("div", {
      key: 1,
      class: p(e.n("action"))
    }, [F(e.$slots, "action")], 2)) : X("v-if", !0)
  ], 6)], 6)), [[yr, e.show]]);
}
var Db = te({
  name: "VarSnackbarCore",
  components: {
    VarLoading: St,
    VarIcon: Je
  },
  props: vd,
  setup(e) {
    const n = P(null), { zIndex: r } = Ao(() => e.show, 1);
    Mo(() => e.show, () => e.lockScroll);
    const t = S(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), o = S(() => e.type ? t5[e.type] : "");
    function a() {
      n.value = setTimeout(() => {
        e.type !== "loading" && C(e["onUpdate:show"], !1);
      }, e.duration);
    }
    return ge(() => e.show, (i) => {
      i ? (C(e.onOpen), a()) : (clearTimeout(n.value), C(e.onClose));
    }), ge(() => e._update, () => {
      clearTimeout(n.value), a();
    }), En(() => {
      e.show && (C(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: Nb,
      zIndex: r,
      iconName: o,
      isForbidClick: t,
      n: n5,
      classes: r5,
      formatElevation: On
    };
  }
});
Db.render = o5;
var Mb = Db, { name: a5, n: i5 } = oe("snackbar");
function l5(e, n) {
  const r = x("var-snackbar-core");
  return b(), ke(Hr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [U(bn, {
    name: `${e.n()}-fade`,
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: se(() => [U(r, Xe(e.$props, { class: e.n("transition") }), Pr({
      default: se(() => [F(e.$slots, "default")]),
      _: 2
    }, [e.$slots.icon ? {
      name: "icon",
      fn: se(() => [F(e.$slots, "icon")]),
      key: "0"
    } : void 0, e.$slots.action ? {
      name: "action",
      fn: se(() => [F(e.$slots, "action")]),
      key: "1"
    } : void 0]), 1040, ["class"])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]);
}
var Ab = te({
  name: a5,
  components: { VarSnackbarCore: Mb },
  props: vd,
  setup() {
    const { disabled: e } = zt();
    return {
      disabled: e,
      n: i5
    };
  }
});
Ab.render = l5;
var gl = Ab, s5 = Object.defineProperty, Bv = Object.getOwnPropertySymbols, u5 = Object.prototype.hasOwnProperty, d5 = Object.prototype.propertyIsEnumerable, Iv = (e, n, r) => n in e ? s5(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Eo = (e, n) => {
  for (var r in n || (n = {})) u5.call(n, r) && Iv(e, r, n[r]);
  if (Bv)
    for (var r of Bv(n)) d5.call(n, r) && Iv(e, r, n[r]);
  return e;
}, Nb = [
  "loading",
  "success",
  "warning",
  "info",
  "error"
], Dv = 0, bu = !1, Rb, Bo = !1, Vb = {
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
}, br = $n([]), pd = Vb, c5 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Xl = (e) => () => Yn(e) ? e() : e, f5 = { setup() {
  return () => {
    const e = br.map(({ id: n, reactiveSnackOptions: r, _update: t }) => {
      const o = document.querySelector(".var-transition-group");
      r.forbidClick || r.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto");
      const a = Eo({ position: Bo ? "relative" : "absolute" }, b5(r.position)), { content: i, icon: l, action: s } = r, u = {
        default: Xl(i),
        icon: Xl(l),
        action: Xl(s)
      };
      return U(Mb, Xe(r, {
        key: n,
        style: a,
        "data-id": n,
        _update: t,
        show: r.show,
        "onUpdate:show": (d) => r.show = d
      }), u);
    });
    return U(w0, Xe(c5, {
      style: { zIndex: vr.zIndex },
      onAfterEnter: v5,
      onAfterLeave: p5
    }), { default: () => [e] });
  };
} }, Fr = function(e) {
  const n = g5(e), r = $n(Eo(Eo({}, pd), n));
  r.show = !0, bu || (bu = !0, Rb = Jt(f5).unmountInstance);
  const { length: t } = br, o = {
    id: Dv++,
    reactiveSnackOptions: r
  };
  return t === 0 || Bo ? m5(o) : h5(r, `update-${Dv}`), { clear() {
    !Bo && br.length ? br[0].reactiveSnackOptions.show = !1 : r.show = !1;
  } };
};
Nb.forEach((e) => {
  Fr[e] = (n) => (Sn(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Fr(n));
});
Fr.allowMultiple = function(e = !1) {
  e !== Bo && (br.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Bo = e);
};
Fr.clear = function() {
  br.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Fr.setDefaultOptions = function(e) {
  pd = e;
};
Fr.resetDefaultOptions = function() {
  pd = Vb;
};
function v5(e) {
  const n = e.getAttribute("data-id"), r = br.find((t) => t.id === Z(n));
  r && C(r.reactiveSnackOptions.onOpened);
}
function p5(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), r = br.find((t) => t.id === Z(n));
  r && (r.animationEnd = !0, C(r.reactiveSnackOptions.onClosed)), br.every((t) => t.animationEnd) && (C(Rb), br = $n([]), bu = !1);
}
function m5(e) {
  br.push(e);
}
function g5(e = {}) {
  return Pn(e) ? { content: e } : e;
}
function h5(e, n) {
  const [r] = br;
  r.reactiveSnackOptions = Eo(Eo({}, r.reactiveSnackOptions), e), r._update = n;
}
function b5(e = "top") {
  return e === "bottom" ? { top: "85%" } : { top: e === "top" ? "5%" : "45%" };
}
Fr.Component = gl;
ue(gl);
ue(gl, Fr);
fe(Fr, vd);
var a7 = gl, yu = Fr, Lb = {
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
function y5(e, n, r) {
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
var w5 = (e) => [
  "mini",
  "small",
  "normal",
  "large"
].includes(e), { name: k5, n: aa, classes: Mv } = oe("space");
function $5(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : We(e) ? e.map(Te) : [Te(e), Te(e)];
}
var hl = te({
  name: k5,
  props: Lb,
  setup(e, { slots: n }) {
    return () => {
      var r;
      const { inline: t, justify: o, align: a, wrap: i, direction: l, size: s } = e, u = (r = C(n.default)) != null ? r : [], [d, c] = $5(s, w5(s)), f = Va(u), v = f.length - 1, g = f.map((h, m) => {
        var y;
        const $ = y5(d, c, {
          direction: l,
          justify: o,
          index: m,
          lastIndex: v
        });
        return U("div", {
          class: Mv([l === "column", aa("--auto")]),
          key: (y = h.key) != null ? y : void 0,
          style: { margin: $ }
        }, [h]);
      });
      return U("div", {
        class: Mv(aa(), aa("$--box"), [t, aa("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: ba(o),
          alignItems: ba(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${d} / 2) 0` : void 0
        }
      }, [g]);
    };
  }
});
ue(hl);
fe(hl, Lb);
var i7 = hl, wu = hl, Fb = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Fe(pn, "name"),
  inactiveIcon: Fe(pn, "name"),
  activeIconNamespace: Fe(pn, "namespace"),
  currentIconNamespace: Fe(pn, "namespace"),
  inactiveIconNamespace: Fe(pn, "namespace")
}, Hb = /* @__PURE__ */ Symbol("STEPS_BIND_STEP_KEY");
function S5() {
  const { bindChildren: e, childProviders: n } = In(Hb);
  return {
    step: n,
    bindStep: e
  };
}
function C5() {
  const { parentProvider: e, index: n, bindParent: r } = Bn(Hb);
  return or(!!r, "Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var { name: P5, n: O5, classes: z5 } = oe("step"), T5 = { key: 3 };
function E5(e, n) {
  const r = x("var-icon");
  return b(), k("div", { class: p(e.n()) }, [L("div", { class: p(e.n(e.direction)) }, [
    L("div", {
      class: p(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
      style: Q({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
      onClick: n[0] || (n[0] = (...t) => e.click && e.click(...t))
    }, [e.isActive ? (b(), k("span", {
      key: 0,
      class: p(e.n("icon"))
    }, [F(e.$slots, "active-icon", {}, () => [U(r, {
      name: e.activeIcon,
      namespace: e.activeIconNamespace
    }, null, 8, ["name", "namespace"])])], 2)) : e.isCurrent && (e.$slots["current-icon"] || e.currentIcon) ? (b(), k("span", {
      key: 1,
      class: p(e.n("icon"))
    }, [F(e.$slots, "current-icon", {}, () => [U(r, {
      name: e.currentIcon,
      namespace: e.currentIconNamespace
    }, null, 8, ["name", "namespace"])])], 2)) : e.$slots["inactive-icon"] || e.inactiveIcon ? (b(), k("span", {
      key: 2,
      class: p(e.n("icon"))
    }, [F(e.$slots, "inactive-icon", {}, () => [U(r, {
      name: e.inactiveIcon,
      namespace: e.inactiveIconNamespace
    }, null, 8, ["name", "namespace"])])], 2)) : (b(), k("span", T5, ve(e.index + 1), 1))], 6),
    e.$slots.default ? (b(), k("div", {
      key: 0,
      class: p(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
      onClick: n[1] || (n[1] = (...t) => e.click && e.click(...t))
    }, [F(e.$slots, "default")], 2)) : X("v-if", !0),
    L("div", { class: p(e.n(`${e.direction}-line`)) }, null, 2)
  ], 2)], 2);
}
var Ub = te({
  name: P5,
  components: { VarIcon: Je },
  props: Fb,
  setup() {
    const { index: e, steps: n, bindSteps: r } = C5(), { active: t, activeColor: o, inactiveColor: a, direction: i, clickStep: l } = n, s = S(() => t.value === e.value), u = S(() => e.value !== -1 && Z(t.value) > e.value);
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
      n: O5,
      classes: z5,
      click: d
    };
  }
});
Ub.render = E5;
var bl = Ub;
ue(bl);
fe(bl, Fb);
var l7 = bl, ku = bl, jb = {
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
}, { name: B5, n: I5 } = oe("steps");
function D5(e, n) {
  return b(), k("div", {
    class: p(e.n()),
    style: Q({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
  }, [F(e.$slots, "default")], 6);
}
var Yb = te({
  name: B5,
  props: jb,
  setup(e) {
    const n = S(() => e.active), r = S(() => e.activeColor), t = S(() => e.inactiveColor), o = S(() => e.direction), { bindStep: a } = S5();
    a({
      active: n,
      direction: o,
      activeColor: r,
      inactiveColor: t,
      clickStep: i
    });
    function i(l) {
      C(e.onClickStep, l);
    }
    return { n: I5 };
  }
});
Yb.render = D5;
var yl = Yb;
ue(yl);
fe(yl, jb);
var s7 = yl, $u = yl, Kb = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: M5, n: A5 } = oe("style-provider"), wl = te({
  name: M5,
  props: Kb,
  setup(e, { slots: n }) {
    return () => Fn(e.tag, {
      class: A5(),
      style: Op(e.styleVars)
    }, C(n.default));
  }
}), Wb = "varlet-style-vars";
function Av() {
  const e = document.head.querySelector(`#${Wb}`);
  e && document.head.removeChild(e);
}
function N5(e) {
  const n = document.createElement("style");
  n.id = Wb, n.innerHTML = e, document.head.appendChild(n);
}
function kl(e) {
  if (e == null) {
    Av();
    return;
  }
  const n = Op(e ?? {}), r = Object.entries(n).reduce((t, [o, a]) => (t += `${o}:${a};`, t), `:root:root {
`);
  Av(), N5(`${r}
}`);
}
kl.Component = wl;
ue(wl);
ue(wl, kl);
fe(kl, Kb);
var u7 = wl, Su = kl, qb = {
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
}, { name: R5, n: V5, classes: L5 } = oe("switch"), F5 = ["aria-checked"], H5 = ["tabindex"];
function U5(e, n) {
  const r = x("var-hover-overlay"), t = x("var-form-details"), o = _e("ripple"), a = _e("hover");
  return Ke((b(), k("div", {
    class: p(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [L("div", {
    ref: "switchRef",
    class: p(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
    style: Q(e.styleComputed.switch),
    onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
  }, [L("div", {
    style: Q(e.styleComputed.track),
    class: p(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
  }, null, 6), Ke((b(), k("div", {
    class: p(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
    style: Q(e.styleComputed.ripple),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
  }, [L("div", {
    style: Q(e.styleComputed.handle),
    class: p(e.classes(e.n("handle"), e.formatElevation(e.buttonElevation, 2), [e.isActive, e.n("handle--active")], [e.errorMessage && !e.variant, e.n("handle--error")], [e.hovering, e.n("handle--hover")]))
  }, [e.loading ? (b(), k("span", {
    key: 0,
    class: p(e.n("loading")),
    style: Q({
      width: e.radius,
      height: e.radius
    })
  }, [...n[3] || (n[3] = [L("svg", { viewBox: "25 25 50 50" }, [L("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })], -1)])], 6)) : X("v-if", !0)], 6), U(r, {
    hovering: e.hovering && !e.disabled && !e.formDisabled,
    focusing: e.isFocusing && !e.disabled && !e.formDisabled
  }, null, 8, ["hovering", "focusing"])], 46, H5)), [[o, { disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly }]])], 6), U(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 10, F5)), [[
    a,
    e.hover,
    "desktop"
  ]]);
}
var Xb = te({
  name: R5,
  components: {
    VarFormDetails: Hn,
    VarHoverOverlay: Zn
  },
  directives: {
    Ripple: vn,
    Hover: jn
  },
  props: qb,
  setup(e) {
    const n = P(null), r = P(!1), { bindForm: t, form: o } = Kn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = xn(), { hovering: u, handleHovering: d } = ur(), c = S(() => e.modelValue === e.activeValue), f = S(() => {
      const { size: T, color: O, closeColor: R, loadingColor: H, variant: A } = e;
      return {
        handle: {
          width: nr(T),
          height: nr(T),
          backgroundColor: c.value ? O : R,
          color: H
        },
        ripple: {
          left: c.value ? nr(T, 0.5) : `-${nr(T, A ? 1 / 3 : 0.5)}`,
          color: c.value ? O : R || "currentColor",
          width: nr(T, 2),
          height: nr(T, 2)
        },
        track: {
          width: nr(T, A ? 13 / 6 : 1.9),
          height: nr(T, A ? 4 / 3 : 0.72),
          borderRadius: nr(T, 2 / 3),
          filter: c.value || a?.value ? void 0 : `brightness(${A ? 1 : 0.6})`,
          backgroundColor: c.value ? O : R,
          borderWidth: A && !c.value ? nr(T, 1 / 12) : void 0
        },
        switch: {
          width: nr(T, A ? 13 / 6 : 2),
          height: nr(T, A ? 4 / 3 : 1.2)
        }
      };
    }), v = S(() => nr(e.size, 0.8));
    C(t, {
      reset: z,
      validate: m,
      resetValidation: s
    }), xe(() => window, "keydown", g), xe(() => window, "keyup", h);
    function g(T) {
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
        const { validateTrigger: O, rules: R, modelValue: H } = e;
        i(O, T, R, H);
      });
    }
    function $(T) {
      const { onClick: O, onChange: R, disabled: H, loading: A, readonly: D, activeValue: E, inactiveValue: B, lazyChange: N, "onUpdate:modelValue": M, onBeforeChange: I } = e;
      if (H || o?.disabled.value || (C(O, T), A || D || o?.readonly.value)) return;
      const j = c.value ? B : E;
      N ? C(I, j, (W) => {
        C(M, W), y("onLazyChange");
      }) : (C(M, j), C(R, j), y("onChange"));
    }
    function w(T) {
      e.disabled || o?.disabled.value || d(T);
    }
    function z() {
      C(e["onUpdate:modelValue"], e.inactiveValue), s();
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
      n: V5,
      classes: L5,
      formatElevation: On,
      multiplySizeUnit: nr,
      switchActive: $,
      hover: w
    };
  }
});
Xb.render = U5;
var $l = Xb;
ue($l);
fe($l, qb);
var d7 = $l, Cu = $l, Gb = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: V()
}, Zb = /* @__PURE__ */ Symbol("TABS_BIND_TAB_KEY");
function j5() {
  const { childProviders: e, bindChildren: n, length: r } = In(Zb);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Y5() {
  const { parentProvider: e, bindParent: n, index: r } = Bn(Zb);
  return or(!!n, "Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var { name: K5, n: ia, classes: W5 } = oe("tab");
function q5(e, n) {
  const r = _e("ripple");
  return Ke((b(), k("div", {
    ref: "tabEl",
    class: p(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
    style: Q({ color: e.computeColorStyle() }),
    onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
  }, [F(e.$slots, "default")], 6)), [[r, { disabled: e.disabled || !e.ripple }]]);
}
var Jb = te({
  name: K5,
  directives: { Ripple: vn },
  props: Gb,
  setup(e) {
    const n = P(null), r = S(() => n.value), t = S(() => e.name), o = S(() => e.disabled), { index: a, tabs: i, bindTabs: l } = Y5(), { onTabClick: s, active: u, activeColor: d, inactiveColor: c, disabledColor: f, itemDirection: v, resize: g } = i, h = {
      name: t,
      index: a,
      disabled: o,
      element: r
    };
    l(h), ge(() => [e.name, e.disabled], g);
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
      T || (C(R, O ?? a.value, z), s(h));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: c,
      itemDirection: v,
      n: ia,
      classes: W5,
      computeColorStyle: y,
      computeColorClass: $,
      handleClick: w
    };
  }
});
Jb.render = q5;
var Sl = Jb;
ue(Sl);
fe(Sl, Gb);
var c7 = Sl, Pu = Sl, Qb = { name: [String, Number] }, { name: X5, n: G5, classes: Z5 } = oe("tab-item");
function J5(e, n) {
  const r = x("var-swipe-item");
  return b(), ke(r, {
    class: p(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: se(() => [F(e.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}
var xb = te({
  name: X5,
  components: { VarSwipeItem: Oo },
  props: Qb,
  setup(e) {
    const n = P(!1), r = S(() => e.name), { index: t, bindTabsItems: o } = Dz(), { bindLists: a } = Mz(), i = {
      index: t,
      name: r,
      current: S(() => n.value),
      setCurrent: l
    };
    o(i), a(i);
    function l(s) {
      n.value = s;
    }
    return {
      current: n,
      n: G5,
      classes: Z5
    };
  }
});
xb.render = J5;
var Cl = xb;
ue(Cl);
fe(Cl, Qb);
var f7 = Cl, Ou = Cl, _b = {
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
}, { name: Q5, n: x5, classes: _5 } = oe("table");
function eE(e, n) {
  return b(), k("div", { class: p(e.classes(e.n(), [!e.plain, e.formatElevation(e.elevation, 1)], e.n("$--box"), [e.surfaceLow, e.n("--surface-low")], [e.bordered, e.n("--bordered")], [e.plain, e.n("--plain")])) }, [L("div", {
    class: p(e.classes(e.n("main"), e.n("$--scrollbar"))),
    style: Q({ "max-height": e.toSizeUnit(e.scrollerHeight) })
  }, [L("table", {
    class: p(e.n("table")),
    style: Q({ width: e.toSizeUnit(e.fullWidth) })
  }, [F(e.$slots, "default")], 6)], 6), e.$slots.footer ? (b(), k("div", {
    key: 0,
    class: p(e.n("footer"))
  }, [F(e.$slots, "footer")], 2)) : X("v-if", !0)], 2);
}
var e0 = te({
  name: Q5,
  props: _b,
  setup(e) {
    const n = S(() => e.surface === "low");
    return {
      toSizeUnit: Te,
      n: x5,
      classes: _5,
      formatElevation: On,
      surfaceLow: n,
      plain: S(() => e.plain)
    };
  }
});
e0.render = eE;
var Pl = e0;
ue(Pl);
fe(Pl, _b);
var v7 = Pl, zu = Pl, n0 = {
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
}, Nv = (e, n, r) => new Promise((t, o) => {
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
}), { name: nE, n: rE, classes: tE } = oe("tabs");
function oE(e, n) {
  return b(), ke(Xt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: se(() => [L("div", Xe({
      class: e.classes(e.n(), e.n("$--box"), e.n(`--item-${e.itemDirection}`), e.n(`--layout-${e.layoutDirection}-padding`), e.formatElevation(e.elevation, 4), [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
      style: { background: e.color }
    }, e.$attrs), [L("div", {
      ref: "scrollerEl",
      class: p(e.classes(e.n("tab-wrap"), [e.localScrollable, e.n(`--layout-${e.layoutDirection}-scrollable`)], e.n(`--layout-${e.layoutDirection}`)))
    }, [F(e.$slots, "default"), L("div", {
      class: p(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
      style: Q({
        width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
        height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
        transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
      })
    }, [L("div", {
      class: p(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
      style: Q({ background: e.indicatorColor || e.activeColor })
    }, null, 6)], 6)], 2)], 16)]),
    _: 3
  }, 8, [
    "css-mode",
    "offset-top",
    "z-index"
  ]);
}
var r0 = te({
  name: nE,
  components: { VarSticky: To },
  inheritAttrs: !1,
  props: n0,
  setup(e) {
    const n = P("0px"), r = P("0px"), t = P("0px"), o = P("0px"), a = P(!1), i = P(null), l = S(() => e.active), s = S(() => e.activeColor), u = S(() => e.inactiveColor), d = S(() => e.disabledColor), c = S(() => e.itemDirection), f = P(null), v = S(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: g, bindTabList: h, length: m } = j5();
    h({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: c,
      resize: H,
      onTabClick: y
    }), ge(() => m.value, () => Nv(null, null, function* () {
      yield Gn(), H();
    })), ge(() => [e.active, e.scrollable], H), vt(H), wr(H);
    function y(D) {
      var E;
      const B = (E = D.name.value) != null ? E : D.index.value, { active: N, onChange: M, onClick: I } = e;
      C(e["onUpdate:active"], B), C(I, B), B !== N && C(M, B);
    }
    function $() {
      return g.find(({ name: D }) => e.active === D.value);
    }
    function w(D) {
      return g.find(({ index: E }) => (D ?? e.active) === E.value);
    }
    function z() {
      if (m.value === 0) return;
      const { active: D } = e;
      if (tr(D)) {
        const E = hn(D, 0, m.value - 1);
        return C(e["onUpdate:active"], E), w(E);
      }
    }
    function T() {
      a.value = e.scrollable === "always" || g.length >= 5;
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
        animation: us
      }) : go(E, {
        top: B.offsetTop + B.offsetHeight / 2 - E.offsetHeight / 2,
        animation: us
      });
    }
    function H() {
      const D = $() || w() || z();
      !D || D.disabled.value || (T(), O(D), R(D));
    }
    function A() {
      return Nv(this, null, function* () {
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
      toSizeUnit: Te,
      n: rE,
      classes: tE,
      resize: H,
      resizeSticky: A,
      formatElevation: On
    };
  }
});
r0.render = oE;
var Ol = r0;
ue(Ol);
fe(Ol, n0);
var p7 = Ol, Tu = Ol, t0 = {
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
}, aE = (e, n, r) => new Promise((t, o) => {
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
}), { name: iE, n: lE } = oe("tabs-items");
function sE(e, n) {
  const r = x("var-swipe");
  return b(), ke(r, {
    ref: "swipe",
    class: p(e.n()),
    loop: e.loop,
    duration: e.animated ? void 0 : 0,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: se(() => [F(e.$slots, "default")]),
    _: 3
  }, 8, [
    "class",
    "loop",
    "duration",
    "touchable",
    "onChange"
  ]);
}
var o0 = te({
  name: iE,
  components: { VarSwipe: Po },
  props: t0,
  setup(e) {
    const n = P(null), { tabItemList: r, bindTabItem: t, length: o } = Iz();
    t({}), ge(() => e.active, s), ge(() => o.value, () => aE(null, null, function* () {
      yield Gn(), s(e.active);
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
      v && (r.forEach(({ setCurrent: g }) => g(!1)), v.setCurrent(!0), (f = n.value) == null || f.to(v.index.value));
    }
    function u(c) {
      var f;
      const v = r.find(({ index: h }) => h.value === c), g = (f = v.name.value) != null ? f : v.index.value;
      C(e["onUpdate:active"], g);
    }
    function d() {
      return n.value;
    }
    return {
      swipe: n,
      n: lE,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
o0.render = sE;
var zl = o0;
ue(zl);
fe(zl, t0);
var m7 = zl, Eu = zl;
function md(e, n) {
  return Object.entries(e).reduce((r, [t, o]) => (r[t] = o.includes("px") ? o.replace(/(\d+(\.\d+)?)px/g, (a, i) => n(i)) : o, r), {});
}
var uE = {
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
}, dE = {
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
}, cE = {
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
}, fE = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, vE = { "--avatar-group-offset": "-10px" }, pE = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, mE = {
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
}, gE = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, hE = {
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
}, bE = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, yE = {
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
}, wE = {
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
}, kE = {
  "--cell-description-color": "#aaa",
  "--cell-color": "var(--color-text)",
  "--cell-font-size": "var(--font-size-md)",
  "--cell-title-line-height": "1.5",
  "--cell-description-font-size": "var(--font-size-sm)",
  "--cell-description-line-height": "1.5",
  "--cell-description-margin-top": "4px",
  "--cell-padding": "10px 12px",
  "--cell-min-height": "40px",
  "--cell-border-color": "var(--color-outline)",
  "--cell-border-left": "12px",
  "--cell-border-right": "12px",
  "--cell-icon-right": "8px",
  "--cell-extra-left": "8px"
}, $E = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, SE = {
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
}, CE = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, PE = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, OE = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, zE = {
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
}, TE = {
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
}, EE = {
  "--date-input-picker-width": "320px",
  "--date-input-time-select-separator-color": "var(--color-on-surface-variant)",
  "--date-input-time-select-border-color": "var(--color-outline)",
  "--date-input-time-select-active-color": "var(--color-primary)"
}, BE = {
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
}, IE = {
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
}, DE = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, ME = {
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
}, AE = {
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
}, NE = {
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
}, RE = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, VE = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, LE = { "--icon-size": "20px" }, FE = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "8px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, HE = {
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
}, UE = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, jE = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, YE = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, KE = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, WE = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, qE = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
}, XE = {
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
}, GE = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, ZE = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, JE = {
  "--otp-input-gutter": "8px",
  "--otp-input-cell-height": "48px",
  "--otp-input-cell-max-width": "48px",
  "--otp-input-input-font-size": "20px"
}, QE = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, xE = {
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
}, _E = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-outlined-background": "transparent",
  "--paper-filled-background": "var(--color-surface-container-highest)",
  "--paper-outline-color": "var(--color-outline)",
  "--paper-border-radius": "4px",
  "--paper-active-color": "var(--color-primary)",
  "--paper-active-opacity": "0.2"
}, eB = {
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
}, nB = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, rB = {
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
}, tB = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, oB = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, aB = {
  "--rail-navigation-width": "80px",
  "--rail-navigation-background": "var(--color-surface-container-high)",
  "--rail-navigation-border-color": "var(--color-outline)",
  "--rail-navigation-padding": "12px 0",
  "--rail-navigation-start-padding": "4px 0",
  "--rail-navigation-end-padding": "4px 0",
  "--rail-navigation-item-gap": "4px"
}, iB = {
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
}, lB = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, sB = {
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
}, uB = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, dB = {
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
}, cB = {
  "--segmented-buttons-border-color": "var(--color-outline)",
  "--segmented-buttons-border-radius": "4px",
  "--segmented-buttons-border-width": "1px",
  "--segmented-buttons-error-border-color": "var(--color-danger)",
  "--segmented-buttons-error-color": "var(--color-danger)",
  "--segmented-buttons-error-checked-background": "hsla(var(--hsl-danger), 0.12)"
}, fB = {
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
}, vB = {
  "--shimmer-text-color": "var(--color-on-surface-variant)",
  "--shimmer-text-highlight-color": "#000",
  "--shimmer-text-duration": "1.4s",
  "--shimmer-text-angle": "100deg"
}, pB = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "#fff",
  "--signature-height": "200px",
  "--signature-border-radius": "4px"
}, mB = {
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
}, gB = {
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
}, hB = {
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
}, bB = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, yB = {
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
}, wB = {
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
}, kB = {
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
}, $B = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, SB = {
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
}, CB = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, PB = {
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
}, OB = {
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
}, zB = {
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
}, TB = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030",
  "--uploader-outlined-background": "transparent",
  "--uploader-filled-background": "var(--color-surface-container-highest)",
  "--uploader-outline-color": "var(--color-outline)",
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
}, EB = { "--watermark-content-color": "#ffffff" }, BB = Object.defineProperty, Rv = Object.getOwnPropertySymbols, IB = Object.prototype.hasOwnProperty, DB = Object.prototype.propertyIsEnumerable, Vv = (e, n, r) => n in e ? BB(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Se = (e, n) => {
  for (var r in n || (n = {})) IB.call(n, r) && Vv(e, r, n[r]);
  if (Rv)
    for (var r of Rv(n)) DB.call(n, r) && Vv(e, r, n[r]);
  return e;
}, MB = Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(Se({
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
}, yE), dE), kE), wE), PB), EE), BE), mB), CB), $B), nB), IE), uE), SE), mE), TB), PE), tB), kB), yB), xE), SB), AE), oB), $E), dB), cB), DE), eB), cE), hE), qE), sB), bE), fE), jE), rB), ZE), EB), GE), XE), vE), pE), gE), OE), zE), TE), aB), iB), ME), NE), RE), VE), LE), FE), HE), UE), JE), YE), KE), WE), QE), _E), lB), uB), gB), hB), bB), wB), OB), zB), fB), CE), vB), pB), AB = {
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
}, NB = {
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
}, RB = {
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
}, VB = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, LB = { "--avatar-group-offset": "-10px" }, FB = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, HB = {
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
}, UB = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, jB = {
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
}, YB = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, KB = {
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
}, WB = {
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
}, qB = {
  "--cell-description-color": "var(--color-on-surface-variant)",
  "--cell-color": "var(--color-text)",
  "--cell-font-size": "var(--font-size-md)",
  "--cell-title-line-height": "1.5",
  "--cell-description-font-size": "var(--font-size-sm)",
  "--cell-description-line-height": "1.5",
  "--cell-description-margin-top": "4px",
  "--cell-padding": "10px 12px",
  "--cell-min-height": "40px",
  "--cell-border-color": "var(--color-outline)",
  "--cell-border-left": "12px",
  "--cell-border-right": "12px",
  "--cell-icon-right": "8px",
  "--cell-extra-left": "8px"
}, XB = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, GB = {
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
}, ZB = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, JB = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, QB = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, xB = {
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
}, _B = {
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
}, eI = {
  "--date-input-picker-width": "320px",
  "--date-input-time-select-separator-color": "var(--color-on-surface-variant)",
  "--date-input-time-select-border-color": "var(--color-outline)",
  "--date-input-time-select-active-color": "var(--color-primary)"
}, nI = {
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
}, rI = {
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
}, tI = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, oI = {
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
}, aI = {
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
}, iI = {
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
}, lI = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, sI = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, uI = { "--icon-size": "20px" }, dI = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "8px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, cI = {
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
}, fI = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, vI = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, pI = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, mI = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, gI = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, hI = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, bI = {
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
}, yI = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, wI = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, kI = {
  "--otp-input-gutter": "8px",
  "--otp-input-cell-height": "48px",
  "--otp-input-cell-max-width": "48px",
  "--otp-input-input-font-size": "20px"
}, $I = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, SI = {
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
}, CI = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-surface-low-background": "#1c1b1d",
  "--paper-outlined-background": "transparent",
  "--paper-filled-background": "var(--color-surface-container-highest)",
  "--paper-outline-color": "var(--color-outline)",
  "--paper-border-radius": "12px",
  "--paper-active-color": "var(--color-primary)",
  "--paper-active-opacity": "0.2"
}, PI = {
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
}, OI = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, zI = {
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
}, TI = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, EI = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, BI = {
  "--rail-navigation-width": "80px",
  "--rail-navigation-background": "var(--color-surface-container)",
  "--rail-navigation-border-color": "var(--color-outline)",
  "--rail-navigation-padding": "12px 0",
  "--rail-navigation-start-padding": "4px 0",
  "--rail-navigation-end-padding": "4px 0",
  "--rail-navigation-item-gap": "4px"
}, II = {
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
}, DI = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, MI = {
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
}, AI = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, NI = {
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
}, RI = {
  "--segmented-buttons-border-color": "#938F99",
  "--segmented-buttons-border-radius": "100px",
  "--segmented-buttons-border-width": "1px",
  "--segmented-buttons-error-border-color": "var(--color-danger)",
  "--segmented-buttons-error-color": "var(--color-danger)",
  "--segmented-buttons-error-checked-background": "hsla(var(--hsl-danger), 0.12)"
}, VI = {
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
}, LI = {
  "--shimmer-text-color": "var(--color-on-surface-variant)",
  "--shimmer-text-highlight-color": "#000",
  "--shimmer-text-duration": "1.4s",
  "--shimmer-text-angle": "100deg"
}, FI = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "var(--color-inverse-surface)",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, HI = {
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
}, UI = {
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
}, jI = {
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
}, YI = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, KI = {
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
}, WI = {
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
}, qI = {
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
}, XI = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, GI = {
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
}, ZI = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, JI = {
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
}, QI = {
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
}, xI = {
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
}, _I = {
  "--uploader-file-border-radius": "8px",
  "--uploader-action-background": "var(--color-surface-container-highest)",
  "--uploader-file-name-background": "var(--color-surface-container-highest)",
  "--uploader-file-cover-background": "var(--color-surface-container-highest)",
  "--uploader-outlined-background": "transparent",
  "--uploader-filled-background": "var(--color-surface-container-highest)",
  "--uploader-outline-color": "var(--color-outline)",
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
}, eD = { "--watermark-content-color": "#ffffff" }, nD = Object.defineProperty, Lv = Object.getOwnPropertySymbols, rD = Object.prototype.hasOwnProperty, tD = Object.prototype.propertyIsEnumerable, Fv = (e, n, r) => n in e ? nD(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ce = (e, n) => {
  for (var r in n || (n = {})) rD.call(n, r) && Fv(e, r, n[r]);
  if (Lv)
    for (var r of Lv(n)) tD.call(n, r) && Fv(e, r, n[r]);
  return e;
}, oD = Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce({
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
}, KB), NB), sI), hI), yI), bI), oI), YB), vI), qB), CI), VB), aI), XB), EI), NI), RI), WB), GB), HB), QI), xI), zI), ZI), XI), KI), tI), GI), SI), eD), JB), MI), RB), UB), jB), jI), AB), rI), TI), OI), PI), iI), FB), VI), wI), xB), _B), qI), UI), _I), JI), eI), nI), DI), BI), II), HI), LB), QB), lI), uI), dI), cI), fI), kI), pI), mI), gI), $I), AI), YI), WI), ZB), LI), FI), aD = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, iD = {
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
}, lD = {
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
}, sD = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, uD = { "--avatar-group-offset": "-10px" }, dD = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, cD = {
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
}, fD = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, vD = {
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
}, pD = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, mD = {
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
}, gD = {
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
}, hD = {
  "--cell-description-color": "var(--color-on-surface-variant)",
  "--cell-color": "var(--color-text)",
  "--cell-font-size": "var(--font-size-md)",
  "--cell-title-line-height": "1.5",
  "--cell-description-font-size": "var(--font-size-sm)",
  "--cell-description-line-height": "1.5",
  "--cell-description-margin-top": "4px",
  "--cell-padding": "10px 12px",
  "--cell-min-height": "40px",
  "--cell-border-color": "var(--color-outline)",
  "--cell-border-left": "12px",
  "--cell-border-right": "12px",
  "--cell-icon-right": "8px",
  "--cell-extra-left": "8px"
}, bD = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, yD = {
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
}, wD = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, kD = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, $D = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, SD = {
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
}, CD = {
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
}, PD = {
  "--date-input-picker-width": "320px",
  "--date-input-time-select-separator-color": "var(--color-on-surface-variant)",
  "--date-input-time-select-border-color": "var(--color-outline)",
  "--date-input-time-select-active-color": "var(--color-primary)"
}, OD = {
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
}, zD = {
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
}, TD = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, ED = {
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
}, BD = {
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
}, ID = {
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
}, DD = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, MD = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, AD = { "--icon-size": "20px" }, ND = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "8px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, RD = {
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
}, VD = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, LD = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, FD = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, HD = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, UD = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, jD = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, YD = {
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
}, KD = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, WD = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, qD = {
  "--otp-input-gutter": "8px",
  "--otp-input-cell-height": "48px",
  "--otp-input-cell-max-width": "48px",
  "--otp-input-input-font-size": "20px"
}, XD = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, GD = {
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
}, ZD = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-surface-low-background": "var(--color-surface-container-low)",
  "--paper-outlined-background": "transparent",
  "--paper-filled-background": "var(--color-surface-container-highest)",
  "--paper-outline-color": "var(--color-outline)",
  "--paper-border-radius": "12px",
  "--paper-active-color": "var(--color-primary)",
  "--paper-active-opacity": "0.2"
}, JD = {
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
}, QD = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, xD = {
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
}, _D = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, eM = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, nM = {
  "--rail-navigation-width": "80px",
  "--rail-navigation-background": "var(--color-surface-container)",
  "--rail-navigation-border-color": "var(--color-outline)",
  "--rail-navigation-padding": "12px 0",
  "--rail-navigation-start-padding": "4px 0",
  "--rail-navigation-end-padding": "4px 0",
  "--rail-navigation-item-gap": "4px"
}, rM = {
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
}, tM = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, oM = {
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
}, aM = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, iM = {
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
}, lM = {
  "--segmented-buttons-border-color": "#79747E",
  "--segmented-buttons-border-radius": "100px",
  "--segmented-buttons-border-width": "1px",
  "--segmented-buttons-error-border-color": "var(--color-danger)",
  "--segmented-buttons-error-color": "var(--color-danger)",
  "--segmented-buttons-error-checked-background": "hsla(var(--hsl-danger), 0.12)"
}, sM = {
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
}, uM = {
  "--shimmer-text-color": "var(--color-on-surface-variant)",
  "--shimmer-text-highlight-color": "#fff",
  "--shimmer-text-duration": "1.4s",
  "--shimmer-text-angle": "100deg"
}, dM = {
  "--signature-background-color": "var(--color-surface-container-low)",
  "--signature-stroke-color": "#1D1B20",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, cM = {
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
}, fM = {
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
}, vM = {
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
}, pM = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, mM = {
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
}, gM = {
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
}, hM = {
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
}, bM = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, yM = {
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
}, wM = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, kM = {
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
}, $M = {
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
}, SM = {
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
}, CM = {
  "--uploader-file-border-radius": "8px",
  "--uploader-action-background": "var(--color-surface-container-low)",
  "--uploader-file-name-background": "var(--color-surface-container-low)",
  "--uploader-file-cover-background": "var(--color-surface-container-low)",
  "--uploader-outlined-background": "transparent",
  "--uploader-filled-background": "var(--color-surface-container-highest)",
  "--uploader-outline-color": "var(--color-outline)",
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
}, PM = { "--watermark-content-color": "#808080" }, OM = Object.defineProperty, Hv = Object.getOwnPropertySymbols, zM = Object.prototype.hasOwnProperty, TM = Object.prototype.propertyIsEnumerable, Uv = (e, n, r) => n in e ? OM(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Pe = (e, n) => {
  for (var r in n || (n = {})) zM.call(n, r) && Uv(e, r, n[r]);
  if (Hv)
    for (var r of Hv(n)) TM.call(n, r) && Uv(e, r, n[r]);
  return e;
}, EM = Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe({
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
}, mD), iD), MD), jD), KD), YD), ED), pD), LD), hD), ZD), sD), BD), bD), eM), iM), lM), gD), yD), $M), SM), wM), bM), yM), kD), oM), fD), vD), vM), aD), zD), _D), QD), JD), ID), dD), sM), WD), fM), CM), kM), PD), OD), hM), tM), nM), rM), uD), cD), $D), SD), CD), TD), DD), AD), ND), RD), VD), qD), FD), HD), UD), XD), GD), xD), aM), cM), pM), mM), gM), PM), lD), wD), uM), dM);
function BM(e, n = {}) {
  const { rootFontSize: r = 16, unitPrecision: t = 6 } = n;
  return md(e, (o) => `${Number((o / r).toFixed(t))}rem`);
}
function IM(e, n = {}) {
  const { viewportWidth: r = 375, viewportUnit: t = "vmin", unitPrecision: o = 6 } = n;
  return md(e, (a) => `${Number((a / r * 100).toFixed(o))}${t}`);
}
var DM = {
  dark: MB,
  md3Light: EM,
  md3Dark: oD,
  toViewport: IM,
  toRem: BM,
  convert: md
}, g7 = null, Bu = DM, gr = [
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
], rr = [
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
], jv = [
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
], a0 = {
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
}, i0 = (e, n) => e === "24hr" || n === "am", gd = (e, n, r) => {
  const t = gr.findIndex((a) => Z(a) === Z(r)), o = i0(e, n) ? r : rr[t];
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
}, l0 = (e) => {
  var n, r;
  const { time: t, format: o, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: d, hourNum: c } = gd(o, a, i);
  let f = !1, v = !1;
  if (u.includes(d)) return !0;
  if (l && !s) {
    const { hour: g, minute: h } = sr(l);
    f = g === c && t > h;
  }
  if (!l && s) {
    const { hour: g, minute: h } = sr(s);
    f = g === c && t < h;
  }
  if (l && s) {
    const { hour: g, minute: h } = sr(l), { hour: m, minute: y } = sr(s);
    f = m === c && t < y || g === c && t > h;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (r = e.allowedTime) == null ? void 0 : r.minutes(t)), f || v;
}, s0 = (e) => {
  var n, r;
  const { time: t, format: o, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: d } = e, { hourStr: c, hourNum: f } = gd(o, a, i);
  let v = !1, g = !1;
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
  return (n = e.allowedTime) != null && n.seconds && (g = (r = e.allowedTime) == null ? void 0 : r.seconds(t)), v || g;
}, { n: MM, classes: AM } = oe("time-picker");
function NM(e, n) {
  return b(), k("div", { class: p(e.n("clock")) }, [
    L("div", {
      class: p(e.n("clock-hand")),
      style: Q(e.handStyle)
    }, null, 6),
    (b(!0), k(Ie, null, Ye(e.timeScales, (r, t) => (b(), k("div", {
      key: r,
      class: p(e.classes(e.n("clock-item"), [e.isActive(t, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
      style: Q(e.getStyle(t, r, !1))
    }, ve(r), 7))), 128)),
    e.format === "24hr" && e.type === "hour" ? (b(), k("div", {
      key: 0,
      ref: "inner",
      class: p(e.n("clock-inner"))
    }, [(b(!0), k(Ie, null, Ye(e.hours24, (r, t) => (b(), k("div", {
      key: r,
      class: p(e.classes(e.n("clock-item"), [e.isActive(t, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
      style: Q(e.getStyle(t, r, !0))
    }, ve(r), 7))), 128))], 2)) : X("v-if", !0)
  ], 2);
}
var u0 = te({
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
    const r = P(null), t = P([]), o = P([]), a = S(() => ({
      transform: `rotate(${Z(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = S(() => {
      if (e.rad === void 0) return;
      const h = e.rad / 30;
      return h >= 0 ? h : h + 12;
    }), l = S(() => e.type === "hour" ? gr : jv), s = (h, m) => {
      h = h ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const y = e.type === "minute" ? l0 : s0, $ = {
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
      const h = e.isInner ? rr[i.value] : l.value[i.value];
      return l.value === jv ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : c(h) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, d = (h, m) => m ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), c = (h) => {
      if (e.type === "hour") {
        if (i0(e.format, e.ampm)) return t.value.includes(h);
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
    }, g = () => {
      if (i.value !== void 0)
        return Gr((e.ampm === "am" ? gr : rr)[i.value], 2, "0");
    };
    return ge([i, () => e.isInner], ([h, m], [y, $]) => {
      if (h === y && m === $ || e.type !== "hour" || i.value === void 0) return;
      const w = m ? rr[i.value] : g(), z = e.useSeconds ? `:${e.time.second}` : "", T = `${w}:${e.time.minute}${z}`;
      e.preventNextUpdate || n("update", T), n("change-prevent-update");
    }), ge(() => e.rad, (h, m) => {
      if (e.type === "hour" || h === void 0 || m === void 0) return;
      const y = h / 6 >= 0 ? h / 6 : h / 6 + 60;
      if (y === (m / 6 >= 0 ? m / 6 : m / 6 + 60)) return;
      let $;
      const { hourStr: w } = gd(e.format, e.ampm, e.time.hour);
      if (e.type === "minute" && ($ = `${w}:${ln().minute(y).format("mm")}${e.useSeconds ? `:${e.time.second}` : ""}`), e.type === "second") {
        const z = ln().second(y).format("ss"), T = e.useSeconds ? `:${z}` : "";
        $ = `${w}:${e.time.minute}${T}`;
      }
      n("update", $);
    }), ge([
      () => e.max,
      () => e.min,
      () => e.allowedTime
    ], ([h, m, y]) => {
      if (t.value = [], h && !m) {
        const { hour: $ } = sr(h), w = gr.filter((T) => Z(T) > $), z = rr.filter((T) => Z(T) > $);
        t.value = [...w, ...z];
      }
      if (!h && m) {
        const { hour: $ } = sr(m), w = gr.filter((T) => Z(T) < $), z = rr.filter((T) => Z(T) < $);
        t.value = [...w, ...z];
      }
      if (h && m) {
        const { hour: $ } = sr(h), { hour: w } = sr(m), z = gr.filter((O) => Z(O) < w || Z(O) > $), T = rr.filter((O) => Z(O) < w || Z(O) > $);
        t.value = [...z, ...T];
      }
      if (y?.hours) {
        const { hours: $ } = y, w = gr.filter((T) => !$(Z(T))), z = rr.filter((T) => !$(Z(T)));
        t.value = [.../* @__PURE__ */ new Set([
          ...t.value,
          ...w,
          ...z
        ])];
      }
      o.value = t.value.map(($) => rr.findIndex((w) => $ === w)).filter(($) => $ >= 0);
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: MM,
      classes: AM,
      hours24: rr,
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
u0.render = NM;
var RM = u0, { name: VM, n: LM, classes: FM } = oe("time-picker");
function HM(e, n) {
  var r;
  const t = x("clock");
  return b(), k("div", {
    ref: "picker",
    class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
  }, [
    L("div", {
      class: p(e.n("title")),
      style: Q({ background: e.titleColor || e.color })
    }, [L("div", { class: p(e.n("title-hint")) }, ve((r = e.hint) != null ? r : (e.pt ? e.pt : e.t)("timePickerHint")), 3), L("div", { class: p(e.n("title-time-container")) }, [L("div", { class: p(e.n("title-time")) }, [
      L("div", {
        class: p(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
        onClick: n[0] || (n[0] = (o) => e.checkPanel("hour"))
      }, ve(e.time.hour), 3),
      L("span", { class: p(e.n("title-splitter")) }, ":", 2),
      L("div", {
        class: p(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
        onClick: n[1] || (n[1] = (o) => e.checkPanel("minute"))
      }, ve(e.time.minute), 3),
      e.useSeconds ? (b(), k("span", {
        key: 0,
        class: p(e.n("title-splitter"))
      }, ":", 2)) : X("v-if", !0),
      e.useSeconds ? (b(), k("div", {
        key: 1,
        class: p(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
        onClick: n[2] || (n[2] = (o) => e.checkPanel("second"))
      }, ve(e.time.second), 3)) : X("v-if", !0)
    ], 2), e.format === "ampm" ? (b(), k("div", {
      key: 0,
      class: p(e.n("title-ampm"))
    }, [L("div", {
      class: p(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
      onClick: n[3] || (n[3] = (o) => e.checkAmpm("am"))
    }, " AM ", 2), L("div", {
      class: p(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
      onClick: n[4] || (n[4] = (o) => e.checkAmpm("pm"))
    }, " PM ", 2)], 2)) : X("v-if", !0)], 2)], 6),
    L("div", { class: p(e.n("body")) }, [L("div", {
      ref: "container",
      class: p(e.n("clock-container")),
      onTouchstart: n[5] || (n[5] = (...o) => e.moveHand && e.moveHand(...o)),
      onTouchmove: n[6] || (n[6] = (...o) => e.moveHand && e.moveHand(...o)),
      onTouchend: n[7] || (n[7] = (...o) => e.end && e.end(...o))
    }, [U(bn, { name: `${e.n()}-panel-fade` }, {
      default: se(() => [(b(), ke(t, {
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
      class: p(e.n("actions"))
    }, [F(e.$slots, "actions")], 2)) : X("v-if", !0)
  ], 2);
}
var d0 = te({
  name: VM,
  components: { Clock: RM },
  props: a0,
  setup(e) {
    const n = P(null), r = P(null), t = P(null), o = P(!1), a = P(!1), i = P(!1), l = P(!1), s = P(!1), u = P(!1), d = P(!1), c = P(0), f = P(0), v = P(), g = P("hour"), h = P("am"), m = P({
      hour: "00",
      minute: "00",
      second: "00"
    }), y = $n({
      x: 0,
      y: 0
    }), $ = $n({
      x: [],
      y: []
    }), w = S(() => g.value === "hour" ? v.value : g.value === "minute" ? c.value : f.value), { t: z } = kr();
    ge(() => e.modelValue, (J) => {
      if (J === void 0 || J === "") {
        T();
        return;
      }
      const { hour: ne, minute: pe, second: Oe } = sr(J), Y = ln().hour(ne).format("hh"), ae = ln().hour(ne).format("HH"), Ee = ln().minute(pe).format("mm"), Ue = ln().second(Oe).format("ss");
      v.value = (Y === "12" ? 0 : Z(Y)) * 30, c.value = Z(Ee) * 6, f.value = Z(Ue) * 6, m.value = B(J), e.format !== "24hr" && (h.value = Gr(`${ne}`, 2, "0") === ae && rr.includes(ae) ? "pm" : "am"), o.value = e.format === "24hr" && rr.includes(ae);
    }, { immediate: !0 });
    function T() {
      v.value = void 0, c.value = 0, f.value = 0, m.value = {
        hour: "00",
        minute: "00",
        second: "00"
      }, h.value = "am";
    }
    function O(J) {
      C(e["onUpdate:modelValue"], J), C(e.onChange, J);
    }
    function R(J) {
      return J * 57.29577951308232;
    }
    function H(J) {
      l.value = !1, d.value = !1, g.value = J;
    }
    function A(J) {
      const { disableHour: ne } = t.value, pe = gr.findIndex((Y) => Z(Y) === Z(m.value.hour)), Oe = J === "am" ? gr : rr;
      return [...Oe.slice(pe), ...Oe.slice(0, pe)].find((Y, ae) => (a.value = ae !== 0, !ne.includes(Y)));
    }
    function D(J) {
      if (e.readonly) return;
      h.value = J;
      const ne = A(J);
      if (!ne) return;
      const pe = e.useSeconds ? `:${m.value.second}` : "";
      O(`${Gr(ne, 2, "0")}:${m.value.minute}${pe}`);
    }
    function E(J, ne) {
      const pe = J >= $.x[0] && J <= $.x[1], Oe = ne >= $.y[0] && ne <= $.y[1];
      return pe && Oe;
    }
    function B(J) {
      const ne = e.format === "24hr" ? "HH" : "hh", { hour: pe, minute: Oe, second: Y } = sr(J);
      return {
        hour: ln().hour(pe).format(ne),
        minute: ln().minute(Oe).format("mm"),
        second: ln().second(Y).format("ss")
      };
    }
    function N(J) {
      const ne = J / 30;
      return ne >= 0 ? ne : ne + 12;
    }
    function M() {
      const { width: J, height: ne } = t.value.getSize();
      return {
        rangeXMin: y.x - J / 2 - 8,
        rangeXMax: y.x + J / 2 + 8,
        rangeYMin: y.y - ne / 2 - 8,
        rangeYMax: y.y + ne / 2 + 8
      };
    }
    function I(J, ne, pe) {
      const { disableHour: Oe } = t.value;
      i.value = E(J, ne);
      const Y = Math.round(pe / 30) * 30 + 90, ae = N(Y), Ee = o.value ? gr[ae] : rr[ae];
      if (Oe.includes(Ee) || (o.value = e.format === "24hr" ? E(J, ne) : !1), o.value !== i.value) return;
      const Ue = o.value || h.value === "pm" ? rr[ae] : gr[ae];
      u.value = Oe.includes(Ue), !u.value && (v.value = Y, l.value = !0);
    }
    function j(J) {
      const { disableHour: ne } = t.value, pe = Math.round(J / 6) * 6 + 90, Oe = {
        time: pe / 6 >= 0 ? pe / 6 : pe / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: m.value.hour,
        max: e.max,
        min: e.min,
        disableHour: ne,
        allowedTime: e.allowedTime
      };
      d.value = l0(Oe), !d.value && (c.value = pe, s.value = !0);
    }
    function W(J) {
      const { disableHour: ne } = t.value, pe = Math.round(J / 6) * 6 + 90;
      s0({
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
    function G() {
      const { left: J, top: ne, width: pe, height: Oe } = kn(n.value);
      if (y.x = J + pe / 2, y.y = ne + Oe / 2, g.value === "hour" && e.format === "24hr") {
        const { rangeXMin: Y, rangeXMax: ae, rangeYMin: Ee, rangeYMax: Ue } = M();
        $.x = [Y, ae], $.y = [Ee, Ue];
      }
    }
    function ce(J) {
      if (Ze(J), e.readonly) return;
      G();
      const { clientX: ne, clientY: pe } = J.touches[0], Oe = ne - y.x, Y = pe - y.y, ae = Math.round(R(Math.atan2(Y, Oe)));
      g.value === "hour" ? I(ne, pe, ae) : g.value === "minute" ? j(ae) : W(ae);
    }
    function me() {
      if (!e.readonly) {
        if (g.value === "hour" && l.value) {
          g.value = "minute";
          return;
        }
        g.value === "minute" && e.useSeconds && s.value && (g.value = "second");
      }
    }
    function de() {
      a.value = !1;
    }
    return {
      getRad: w,
      time: m,
      container: n,
      inner: t,
      picker: r,
      isInner: o,
      type: g,
      ampm: h,
      isPreventNextUpdate: a,
      n: LM,
      classes: FM,
      t: gn,
      pt: z,
      moveHand: ce,
      checkPanel: H,
      checkAmpm: D,
      end: me,
      update: O,
      changePreventUpdate: de,
      formatElevation: On
    };
  }
});
d0.render = HM;
var Tl = d0;
ue(Tl);
fe(Tl, a0);
var h7 = Tl, Iu = Tl, c0 = {
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
}, { n: Xn, classes: Yv } = oe("tree-menu");
function UM(e, n) {
  const r = x("maybe-v-node"), t = x("var-tree-menu-option"), o = x("var-collapse-transition");
  return b(), k("div", { class: p(e.n("option")) }, [e.option.type === "divider" ? (b(), k("div", {
    key: 0,
    class: p(e.n("divider"))
  }, null, 2)) : e.option.type === "group" ? (b(), k(Ie, { key: 1 }, [U(r, { is: e.renderGroupLabel() }, null, 8, ["is"]), L("div", null, [(b(!0), k(Ie, null, Ye(e.option.children, (a) => (b(), ke(t, {
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
  ]))), 128))])], 64)) : (b(), ke(r, {
    key: 2,
    is: e.renderItem()
  }, null, 8, ["is"])), e.option.hasChildren ? (b(), ke(o, {
    key: 3,
    expand: e.option.expanded
  }, {
    default: se(() => [L("div", { class: p(e.n("children")) }, [(b(!0), k(Ie, null, Ye(e.option.children, (a) => (b(), ke(t, {
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
  }, 8, ["expand"])) : X("v-if", !0)], 2);
}
var f0 = te({
  name: "VarTreeMenuOption",
  components: {
    VarCollapseTransition: Sa,
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
          C(e.onToggle, e.option);
          return;
        }
        C(e.onSelect, e.option);
      }
    }
    function r() {
      const s = o(), u = e.option.option.render;
      return u ? u({ node: s }, e.option.option, e.option.active) : s;
    }
    function t() {
      const s = i();
      if (s)
        return Fn("div", { class: Xn("group-label") }, [Fn(lr, { is: s })]);
    }
    function o() {
      return Ke(Fn("div", {
        class: Yv(Xn("item"), [e.option.active, Xn("--item-active")], [e.option.activePath, Xn("--item-active-path")], [e.option.disabled, Xn("--item-disabled")], [e.ripple && !e.option.disabled, Xn("--item-ripple-enabled")]),
        style: { "--tree-menu-level": e.option.level },
        onClick: n
      }, [Fn("span", { class: Xn("item-indicator") }), Fn("span", { class: Xn("item-content") }, [
        a(),
        Fn("span", { class: Xn("label") }, [Fn(lr, { is: i() })]),
        l()
      ])]), [[vn, { disabled: !e.ripple || e.option.disabled }]]);
    }
    function a() {
      const s = ir(e.option.icon, e.option.option, e.option.active);
      if (s)
        return Fn("span", { class: Xn("icon-container") }, [Pn(s) ? Fn(Je, {
          class: Xn("icon"),
          name: s,
          namespace: e.option.option.namespace,
          varTreeMenuCover: ""
        }) : Fn(lr, {
          class: Xn("icon"),
          is: s
        })]);
    }
    function i() {
      return ir(e.option.label, e.option.option, e.option.active);
    }
    function l() {
      return e.option.hasChildren ? Fn("span", { class: Yv(Xn("expand-icon"), [e.option.expanded, Xn("--expand-icon-expanded")]) }, [Fn(Je, {
        name: "chevron-down",
        varTreeMenuCover: ""
      })]) : Fn("span", { class: Xn("expand-placeholder") });
    }
    return {
      renderGroupLabel: t,
      renderItem: r,
      n: Xn
    };
  }
});
f0.render = UM;
var jM = f0, { name: YM, n: KM, classes: WM } = oe("tree-menu");
function qM(e, n) {
  const r = x("tree-menu-option");
  return b(), k("nav", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.bordered, e.n("--border")])),
    style: Q(e.styles)
  }, [
    e.$slots.start ? F(e.$slots, "start", { key: 0 }) : X("v-if", !0),
    (b(!0), k(Ie, null, Ye(e.treeMeta.options, (t) => (b(), ke(r, {
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
    e.$slots.end ? F(e.$slots, "end", { key: 1 }) : X("v-if", !0)
  ], 6);
}
var v0 = te({
  name: YM,
  components: { TreeMenuOption: jM },
  props: c0,
  setup(e) {
    const n = yn(e, "active"), r = yn(e, "expandedValues", { defaultValue: [] }), t = P({
      options: [],
      optionByValue: /* @__PURE__ */ new Map()
    }), o = S(() => e.indent == null ? {} : { "--tree-menu-item-indent": Te(e.indent) });
    ge(() => [
      e.options,
      e.valueKey,
      e.labelKey,
      e.iconKey,
      e.childrenKey
    ], () => {
      t.value = a(), i();
    }, { immediate: !0 }), ge(() => n.value, (v) => {
      if (v == null) {
        r.value = [];
        return;
      }
      d(v);
    }, { immediate: !0 }), ge([
      n,
      r,
      () => e.disabled
    ], () => {
      i();
    }, { immediate: !0 });
    function a() {
      const v = /* @__PURE__ */ new Map(), g = h(e.options);
      g.forEach(m);
      function h(y, $, w = 0) {
        return y.reduce((z, T) => {
          if (T.show === !1) return z;
          const O = T.type, R = T[e.valueKey], H = T[e.childrenKey], A = {
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
          return A.children = We(H) ? h(H, A, D) : [], A.hasChildren = !O && A.children.length > 0, z.push(A), z;
        }, []);
      }
      function m(y) {
        v.set(y.value, y), y.children.forEach(m);
      }
      return {
        options: g,
        optionByValue: v
      };
    }
    function i() {
      var v;
      const g = new Set((v = r.value) != null ? v : []), h = n.value == null ? void 0 : t.value.optionByValue.get(n.value), m = new Set(h ? u(h) : []);
      t.value.options.forEach((y) => {
        l(y, g, m);
      });
    }
    function l(v, g, h) {
      v.active = n.value === v.value, v.activePath = h.has(v.value), v.disabled = e.disabled || !!v.option.disabled, v.expanded = g.has(v.value), v.children.forEach((m) => {
        l(m, g, h);
      });
    }
    function s(v) {
      const g = [];
      function h(m) {
        g.push(m.value), m.children.forEach(h);
      }
      return v.children.forEach(h), g;
    }
    function u(v) {
      const g = [];
      let h = v.parent;
      for (; h; )
        g.push(h.value), h = h.parent;
      return g;
    }
    function d(v) {
      const g = t.value.optionByValue.get(v);
      if (!g) return;
      const h = new Set(r.value);
      u(g).forEach((m) => {
        h.add(m);
      }), r.value = [...h];
    }
    function c(v) {
      n.value !== v.value && (n.value = v.value, C(e.onChange, v.value, v.option));
    }
    function f(v) {
      const g = new Set(r.value);
      if (g.has(v.value)) {
        g.delete(v.value), s(v).forEach((h) => g.delete(h)), r.value = [...g];
        return;
      }
      e.accordion && (v.parent ? v.parent.children : t.value.options).forEach((h) => {
        h.value !== v.value && (g.delete(h.value), s(h).forEach((m) => g.delete(m)));
      }), g.add(v.value), r.value = [...g];
    }
    return {
      n: KM,
      classes: WM,
      treeMeta: t,
      styles: o,
      handleSelect: c,
      handleToggle: f
    };
  }
});
v0.render = qM;
var El = v0;
ue(El);
fe(El, c0);
var b7 = El, Du = El, p0 = {
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
  variant: {
    type: String,
    default: "standard"
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
}), { name: XM, n: GM, classes: ZM } = oe("uploader"), JM = 0, QM = ["onClick"], xM = ["onClick"], _M = ["src", "alt"], eA = ["tabindex"], nA = [
  "multiple",
  "accept",
  "capture",
  "disabled"
], rA = ["src"];
function tA(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), o = x("var-form-details"), a = x("var-popup"), i = _e("ripple"), l = _e("hover");
  return b(), k("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [
    L("div", { class: p(e.n("file-list")) }, [(b(!0), k(Ie, null, Ye(e.files, (s) => Ke((b(), k("div", {
      key: s.id,
      class: p(e.classes(e.n("file"), [e.variant === "standard", e.formatElevation(e.elevation, 2)], [e.variant === "outlined", e.n("--outlined")], [e.variant === "filled", e.n("--filled")], [s.state === "loading", e.n("--loading")])),
      onClick: (u) => e.preview(s)
    }, [
      L("div", { class: p(e.n("file-name")) }, ve(s.name || s.url), 3),
      e.removable ? F(e.$slots, "remove-button", {
        key: 0,
        remove: () => {
          e.handleRemove(s);
        }
      }, () => [L("div", {
        class: p(e.n("file-close")),
        onClick: Nn((u) => e.handleRemove(s), ["stop"])
      }, [U(r, {
        class: p(e.n("file-close-icon")),
        "var-uploader-cover": "",
        name: "delete"
      }, null, 8, ["class"])], 10, xM)]) : X("v-if", !0),
      s.cover ? (b(), k("img", {
        key: 1,
        role: "img",
        class: p(e.n("file-cover")),
        style: Q({ objectFit: s.fit }),
        src: s.cover,
        alt: s.name
      }, null, 14, _M)) : X("v-if", !0),
      L("div", { class: p(e.n("file-indicator")) }, [L("div", {
        class: p(e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])),
        style: Q({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
      }, null, 6)], 2)
    ], 10, QM)), [[i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]])), 128)), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Ke((b(), k("div", {
      key: 0,
      ref: "actionRef",
      class: p(e.classes(e.n("--outline-none"), [!e.$slots.default, e.n("action")], [!e.$slots.default && e.variant === "standard", e.formatElevation(e.elevation, 2)], [!e.$slots.default && e.variant === "outlined", e.n("--outlined")], [!e.$slots.default && e.variant === "filled", e.n("--filled")], [e.disabled || e.formDisabled, e.n("--disabled")])),
      tabindex: e.disabled || e.formDisabled ? void 0 : "0",
      onClick: n[2] || (n[2] = (...s) => e.handleActionClick && e.handleActionClick(...s)),
      onFocus: n[3] || (n[3] = (s) => e.isFocusing = !0),
      onBlur: n[4] || (n[4] = (s) => e.isFocusing = !1)
    }, [L("input", {
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
    }, null, 42, nA), F(e.$slots, "default", {}, () => [U(r, {
      class: p(e.n("action-icon")),
      "var-uploader-cover": "",
      name: "plus"
    }, null, 8, ["class"]), U(t, {
      hovering: e.hovering && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly,
      focusing: e.isFocusing && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly
    }, null, 8, ["hovering", "focusing"])])], 42, eA)), [[i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default }], [
      l,
      e.handleHovering,
      "desktop"
    ]]) : X("v-if", !0)], 2),
    U(o, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText
    }, Pr({ _: 2 }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: se(() => [F(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"]),
    U(a, {
      show: e.showPreview,
      "onUpdate:show": n[5] || (n[5] = (s) => e.showPreview = s),
      class: p(e.n("preview")),
      "var-uploader-cover": "",
      position: "center",
      onClosed: n[6] || (n[6] = (s) => e.currentPreview = null)
    }, {
      default: se(() => {
        var s, u;
        return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (b(), k("video", {
          key: 0,
          class: p(e.n("preview-video")),
          playsinline: "true",
          "webkit-playsinline": "true",
          "x5-playsinline": "true",
          "x5-video-player-type": "h5",
          "x5-video-player-fullscreen": "false",
          controls: "",
          src: (u = e.currentPreview) == null ? void 0 : u.url
        }, null, 10, rA)) : X("v-if", !0)];
      }),
      _: 1
    }, 8, ["show", "class"])
  ], 2);
}
var m0 = te({
  name: XM,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarIcon: Je,
    VarPopup: ut,
    VarFormDetails: Hn,
    VarHoverOverlay: Zn
  },
  props: p0,
  setup(e) {
    const n = P(!1), r = P(null), t = P(null), o = P(!1), a = P(null), i = S(() => {
      const { maxlength: de, modelValue: { length: J } } = e;
      return tr(de) ? `${J} / ${de}` : "";
    }), { form: l, bindForm: s } = Kn(), { errorMessage: u, validateWithTrigger: d, validate: c, resetValidation: f } = xn(), { hovering: v, handleHovering: g } = ur(), h = S(() => {
      const { modelValue: de, hideList: J } = e;
      return J ? [] : de;
    });
    let m = !1;
    const y = {
      getSuccess: N,
      getError: M,
      getLoading: I
    };
    C(s, {
      validate: ce,
      resetValidation: f,
      reset: me
    }), xe(() => window, "keydown", $), xe(() => window, "keyup", w), ge(() => e.modelValue, () => {
      !m && G("onChange"), m = !1;
    }, { deep: !0 });
    function $(de) {
      n.value && ((de.key === " " || de.key === "Enter") && de.preventDefault(), de.key === "Enter" && r.value.click());
    }
    function w(de) {
      !n.value || de.key !== " " || (de.preventDefault(), r.value.click());
    }
    function z(de) {
      const { disabled: J, previewed: ne, preventDefaultPreview: pe, onPreview: Oe } = e;
      if (l?.disabled.value || J || !ne || (C(Oe, $n(de)), pe)) return;
      const { url: Y } = de;
      if (Bc(Y)) {
        zo(Y);
        return;
      }
      Ic(Y) && (a.value = de, o.value = !0);
    }
    function T(de) {
      return {
        id: JM++,
        url: "",
        cover: "",
        name: de.name,
        file: de,
        progress: 0
      };
    }
    function O(de) {
      const { files: J } = de.target;
      return Array.from(J);
    }
    function R(de) {
      return la(this, null, function* () {
        const J = de.file;
        if (e.resolveType === "default" && J.type.startsWith("image") || e.resolveType === "data-url") {
          const ne = yield j0(J);
          de.cover = ne, de.url = ne;
        }
        return de;
      });
    }
    function H(de) {
      return de.map(R);
    }
    function A(de) {
      const { onBeforeRead: J } = e;
      return de.map((ne) => new Promise((pe) => {
        J || pe({
          valid: !0,
          varFile: ne
        });
        const Oe = Wr(C(J, $n(ne)));
        Promise.all(Oe).then((Y) => {
          pe({
            valid: Y.every(Boolean),
            varFile: ne
          });
        });
      }));
    }
    function D(de) {
      return la(this, null, function* () {
        const { maxsize: J, maxlength: ne, modelValue: pe, onOversize: Oe, onAfterRead: Y, onBeforeFilter: ae, readonly: Ee, disabled: Ue } = e;
        if (l?.disabled.value || l?.readonly.value || Ue || Ee) return;
        const nn = (K) => K.filter((re) => re.file.size > Z(J) ? (C(Oe, $n(re)), !1) : !0), qe = (K) => {
          const re = Math.min(K.length, Z(ne) - pe.length);
          return K.slice(0, re);
        }, en = (K) => la(null, null, function* () {
          if (!ae) return K;
          const re = Wr(ae);
          for (const we of re) K = yield we(K);
          return K;
        });
        let on = O(de).map(T);
        on = yield en(on), on = J != null ? nn(on) : on, on = ne != null ? qe(on) : on;
        const ye = yield Promise.all(H(on)), ee = (yield Promise.all(A(ye))).filter(({ valid: K }) => K).map(({ varFile: K }) => K);
        C(e["onUpdate:modelValue"], [...pe, ...ee]), de.target.value = "", ee.forEach((K) => C(Y, $n(K)));
      });
    }
    function E(de) {
      return la(this, null, function* () {
        const { disabled: J, readonly: ne, modelValue: pe, onBeforeRemove: Oe, onRemove: Y } = e;
        if (l?.disabled.value || l?.readonly.value || J || ne) return;
        if (Oe) {
          const Ee = Wr(C(Oe, $n(de)));
          if ((yield Promise.all(Ee)).some((Ue) => !Ue)) return;
        }
        const ae = pe.filter((Ee) => Ee !== de);
        C(Y, $n(de)), G("onRemove"), C(e["onUpdate:modelValue"], ae);
      });
    }
    function B(de) {
      if (!(l?.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          C(e.onClickAction, j, de);
          return;
        }
        j();
      }
    }
    function N() {
      return e.modelValue.filter((de) => de.state === "success");
    }
    function M() {
      return e.modelValue.filter((de) => de.state === "error");
    }
    function I() {
      return e.modelValue.filter((de) => de.state === "loading");
    }
    function j() {
      t.value.click();
    }
    function W() {
      a.value = null, o.value = !1, zo.close();
    }
    function G(de) {
      Ne(() => {
        const { validateTrigger: J, rules: ne, modelValue: pe } = e;
        d(J, de, ne, pe, y);
      });
    }
    function ce() {
      return c(e.rules, e.modelValue, y);
    }
    function me() {
      m = !0, C(e["onUpdate:modelValue"], []), f();
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
      n: GM,
      classes: ZM,
      formatElevation: On,
      toNumber: Z,
      handleHovering: g,
      isHTMLSupportVideo: Ic,
      isHTMLSupportImage: Bc,
      preview: z,
      handleChange: D,
      handleRemove: E,
      getSuccess: N,
      getError: M,
      getLoading: I,
      validate: ce,
      resetValidation: f,
      reset: me,
      chooseFile: j,
      closePreview: W,
      handleActionClick: B,
      toSizeUnit: Te
    };
  }
});
m0.render = tA;
var Bl = m0;
ue(Bl);
fe(Bl, p0);
var y7 = Bl, Mu = Bl, g0 = {
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
}, oA = Object.defineProperty, aA = Object.defineProperties, iA = Object.getOwnPropertyDescriptors, Kv = Object.getOwnPropertySymbols, lA = Object.prototype.hasOwnProperty, sA = Object.prototype.propertyIsEnumerable, Wv = (e, n, r) => n in e ? oA(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, uA = (e, n) => {
  for (var r in n || (n = {})) lA.call(n, r) && Wv(e, r, n[r]);
  if (Kv)
    for (var r of Kv(n)) sA.call(n, r) && Wv(e, r, n[r]);
  return e;
}, dA = (e, n) => aA(e, iA(n)), cA = (e, n, r) => new Promise((t, o) => {
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
}), { name: fA, n: vA, classes: pA } = oe("watermark"), mA = { ref: "svgRef" }, gA = [
  "viewBox",
  "width",
  "height"
], hA = ["width", "height"], bA = [
  "href",
  "xlink:href",
  "x",
  "y",
  "width",
  "height"
];
function yA(e, n) {
  return b(), k("div", { class: p(e.n()) }, [F(e.$slots, "default"), (b(), ke(Hr, {
    to: "body",
    disabled: !e.fullscreen
  }, [L("div", {
    ref: "containerRef",
    class: p(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
    style: Q({
      backgroundImage: `url(${e.watermarkUrl})`,
      zIndex: e.zIndex
    })
  }, [Ke(L("div", mA, [(b(), k("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: `0 0 ${e.width + e.gapX} ${e.height + e.gapY}`,
    width: `${e.width + e.gapX}`,
    height: `${e.height + e.gapY}`,
    style: Q({
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
    style: Q({
      transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
      transformOrigin: "center"
    })
  }, [F(e.$slots, "content", {}, () => [L("span", { style: Q(dA(uA({}, e.font), {
    fontSize: `${e.font.fontSize}px`,
    color: e.textColor
  })) }, ve(e.content), 5)])], 4)], 8, hA)) : X("v-if", !0), !e.$slots.content && e.image ? (b(), k("image", {
    key: 1,
    href: e.imageUrl,
    "xlink:href": e.imageUrl,
    x: e.offsetX,
    y: e.offsetY,
    width: e.width,
    height: e.height,
    style: Q({
      transform: `rotate(${e.rotate}deg)`,
      transformOrigin: "center"
    })
  }, null, 12, bA)) : X("v-if", !0)], 12, gA))], 512), [[yr, !1]])], 6)], 8, ["disabled"]))], 2);
}
var h0 = te({
  name: fA,
  props: g0,
  setup(e, { slots: n }) {
    const r = P(""), t = P(""), o = P(""), a = P(null), i = P(null);
    ge(() => [
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
    ], c, { deep: !0 }), Tr(c), Io(d);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return new Promise((f) => {
        const v = document.createElement("canvas"), g = v.getContext("2d"), h = new Image();
        h.crossOrigin = "anonymous", h.referrerPolicy = "no-referrer", h.src = e.image, h.onload = () => {
          v.width = h.width, v.height = h.height, g.drawImage(h, 0, 0), f(v.toDataURL());
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
      return cA(this, null, function* () {
        o.value = Ur(i.value).color, e.image && (t.value = yield s()), yield Ne(), d(), r.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: r,
      imageUrl: t,
      textColor: o,
      n: vA,
      classes: pA,
      showContent: l,
      resize: c
    };
  }
});
h0.render = yA;
var Il = h0;
ue(Il);
fe(Il, g0);
var w7 = Il, Au = Il, wA = "3.20.6";
function kA(e) {
  rs.install && e.use(rs), ts.install && e.use(ts), os.install && e.use(os), ls.install && e.use(ls), cs.install && e.use(cs), fs.install && e.use(fs), vs.install && e.use(vs), ko.install && e.use(ko), ps.install && e.use(ps), ms.install && e.use(ms), gs.install && e.use(gs), hs.install && e.use(hs), Jn.install && e.use(Jn), bs.install && e.use(bs), ys.install && e.use(ys), ws.install && e.use(ws), ct.install && e.use(ct), ks.install && e.use(ks), $a.install && e.use($a), Ss.install && e.use(Ss), Cs.install && e.use(Cs), Ps.install && e.use(Ps), Os.install && e.use(Os), Sa.install && e.use(Sa), vr.install && e.use(vr), zs.install && e.use(zs), Is.install && e.use(Is), Rs.install && e.use(Rs), Vs.install && e.use(Vs), Ls.install && e.use(Ls), Ta.install && e.use(Ta), Hs.install && e.use(Hs), Us.install && e.use(Us), Ba.install && e.use(Ba), js.install && e.use(js), Ys.install && e.use(Ys), ho.install && e.use(ho), Ks.install && e.use(Ks), Ws.install && e.use(Ws), Hn.install && e.use(Hn), qs.install && e.use(qs), jn.install && e.use(jn), Zn.install && e.use(Zn), Je.install && e.use(Je), Xs.install && e.use(Xs), zo.install && e.use(zo), Gs.install && e.use(Gs), Zs.install && e.use(Zs), Lt.install && e.use(Lt), wo.install && e.use(wo), Js.install && e.use(Js), Qs.install && e.use(Qs), St.install && e.use(St), xs.install && e.use(xs), es.install && e.use(es), _s.install && e.use(_s), jt.install && e.use(jt), Ft.install && e.use(Ft), Yt.install && e.use(Yt), Da.install && e.use(Da), eu.install && e.use(eu), nu.install && e.use(nu), za.install && e.use(za), ru.install && e.use(ru), tu.install && e.use(tu), ut.install && e.use(ut), ou.install && e.use(ou), au.install && e.use(au), So.install && e.use(So), iu.install && e.use(iu), lu.install && e.use(lu), su.install && e.use(su), uu.install && e.use(uu), du.install && e.use(du), vn.install && e.use(vn), cu.install && e.use(cu), Ma.install && e.use(Ma), fu.install && e.use(fu), vu.install && e.use(vu), pu.install && e.use(pu), mu.install && e.use(mu), gu.install && e.use(gu), hu.install && e.use(hu), yu.install && e.use(yu), wu.install && e.use(wu), ku.install && e.use(ku), $u.install && e.use($u), To.install && e.use(To), Su.install && e.use(Su), Po.install && e.use(Po), Oo.install && e.use(Oo), Cu.install && e.use(Cu), Pu.install && e.use(Pu), Ou.install && e.use(Ou), zu.install && e.use(zu), Tu.install && e.use(Tu), Eu.install && e.use(Eu), Bu.install && e.use(Bu), Iu.install && e.use(Iu), Ia.install && e.use(Ia), Du.install && e.use(Du), Mu.install && e.use(Mu), Au.install && e.use(Au);
}
var k7 = {
  version: wA,
  install: kA,
  ActionSheet: rs,
  Alert: ts,
  AppBar: os,
  AutoComplete: ls,
  Avatar: cs,
  AvatarGroup: fs,
  BackTop: vs,
  Badge: ko,
  BottomNavigation: ps,
  BottomNavigationItem: ms,
  Breadcrumb: gs,
  Breadcrumbs: hs,
  Button: Jn,
  ButtonGroup: bs,
  Card: ys,
  Cell: ws,
  Checkbox: ct,
  CheckboxGroup: ks,
  Chip: $a,
  Code: Ss,
  Col: Cs,
  Collapse: Ps,
  CollapseItem: Os,
  CollapseTransition: Sa,
  Context: vr,
  CountTo: zs,
  Countdown: Is,
  Counter: Rs,
  DataTable: Vs,
  DateInput: Ls,
  DatePicker: Ta,
  Dialog: Hs,
  Divider: Us,
  Drag: Ba,
  Ellipsis: js,
  Fab: Ys,
  FieldDecorator: ho,
  FloatingPanel: Ks,
  Form: Ws,
  FormDetails: Hn,
  HighlighterProvider: qs,
  Hover: jn,
  HoverOverlay: Zn,
  Icon: Je,
  Image: Xs,
  ImagePreview: zo,
  IndexAnchor: Gs,
  IndexBar: Zs,
  Input: Lt,
  Lazy: wo,
  Link: Js,
  List: Qs,
  Loading: St,
  LoadingBar: xs,
  Locale: es,
  LocaleProvider: _s,
  Menu: jt,
  MenuOption: Ft,
  MenuSelect: Yt,
  Option: Da,
  OtpInput: eu,
  Overlay: nu,
  Pagination: za,
  Paper: ru,
  Picker: tu,
  Popup: ut,
  Progress: ou,
  PullRefresh: au,
  Radio: So,
  RadioGroup: iu,
  RailNavigation: lu,
  RailNavigationItem: su,
  Rate: uu,
  Result: du,
  Ripple: vn,
  Row: cu,
  SegmentedButton: Ma,
  SegmentedButtons: fu,
  Select: vu,
  ShimmerText: pu,
  Signature: mu,
  Skeleton: gu,
  Slider: hu,
  Snackbar: yu,
  Space: wu,
  Step: ku,
  Steps: $u,
  Sticky: To,
  StyleProvider: Su,
  Swipe: Po,
  SwipeItem: Oo,
  Switch: Cu,
  Tab: Pu,
  TabItem: Ou,
  Table: zu,
  Tabs: Tu,
  TabsItems: Eu,
  Themes: Bu,
  TimePicker: Iu,
  Tooltip: Ia,
  TreeMenu: Du,
  Uploader: Mu,
  Watermark: Au
};
export {
  rs as ActionSheet,
  ts as Alert,
  os as AppBar,
  ls as AutoComplete,
  cs as Avatar,
  fs as AvatarGroup,
  vs as BackTop,
  ko as Badge,
  ps as BottomNavigation,
  ms as BottomNavigationItem,
  gs as Breadcrumb,
  hs as Breadcrumbs,
  Jn as Button,
  bs as ButtonGroup,
  ys as Card,
  ws as Cell,
  ct as Checkbox,
  ks as CheckboxGroup,
  $a as Chip,
  Ss as Code,
  Cs as Col,
  Ps as Collapse,
  Os as CollapseItem,
  Sa as CollapseTransition,
  vr as Context,
  zs as CountTo,
  Is as Countdown,
  Rs as Counter,
  Vs as DataTable,
  Ls as DateInput,
  Ta as DatePicker,
  Hs as Dialog,
  Us as Divider,
  Ba as Drag,
  js as Ellipsis,
  Ys as Fab,
  ho as FieldDecorator,
  Ks as FloatingPanel,
  Ws as Form,
  Hn as FormDetails,
  qs as HighlighterProvider,
  jn as Hover,
  Zn as HoverOverlay,
  Je as Icon,
  Xs as Image,
  zo as ImagePreview,
  Gs as IndexAnchor,
  Zs as IndexBar,
  Lt as Input,
  wo as Lazy,
  Js as Link,
  Qs as List,
  St as Loading,
  xs as LoadingBar,
  es as Locale,
  _s as LocaleProvider,
  jt as Menu,
  Ft as MenuOption,
  Yt as MenuSelect,
  Da as Option,
  eu as OtpInput,
  nu as Overlay,
  ds as PIXEL,
  za as Pagination,
  ru as Paper,
  tu as Picker,
  ut as Popup,
  ou as Progress,
  au as PullRefresh,
  So as Radio,
  iu as RadioGroup,
  lu as RailNavigation,
  su as RailNavigationItem,
  uu as Rate,
  du as Result,
  vn as Ripple,
  cu as Row,
  Nb as SNACKBAR_TYPE,
  Ma as SegmentedButton,
  fu as SegmentedButtons,
  vu as Select,
  pu as ShimmerText,
  mu as Signature,
  gu as Skeleton,
  hu as Slider,
  yu as Snackbar,
  wu as Space,
  ku as Step,
  $u as Steps,
  To as Sticky,
  Su as StyleProvider,
  Po as Swipe,
  Oo as SwipeItem,
  Cu as Switch,
  Pu as Tab,
  Ou as TabItem,
  zu as Table,
  Tu as Tabs,
  Eu as TabsItems,
  Bu as Themes,
  Iu as TimePicker,
  Ia as Tooltip,
  Du as TreeMenu,
  Mu as Uploader,
  Au as Watermark,
  MA as _ActionSheetComponent,
  AA as _AlertComponent,
  NA as _AppBarComponent,
  YA as _AutoCompleteComponent,
  WA as _AvatarComponent,
  qA as _AvatarGroupComponent,
  ZA as _BackTopComponent,
  JA as _BadgeComponent,
  QA as _BottomNavigationComponent,
  xA as _BottomNavigationItemComponent,
  _A as _BreadcrumbComponent,
  eN as _BreadcrumbsComponent,
  GA as _ButtonComponent,
  nN as _ButtonGroupComponent,
  rN as _CardComponent,
  tN as _CellComponent,
  FA as _CheckboxComponent,
  oN as _CheckboxGroupComponent,
  aN as _ChipComponent,
  iN as _CodeComponent,
  lN as _ColComponent,
  sN as _CollapseComponent,
  uN as _CollapseItemComponent,
  dN as _CollapseTransitionComponent,
  zA as _ContextComponent,
  cN as _CountToComponent,
  fN as _CountdownComponent,
  vN as _CounterComponent,
  gN as _DataTableComponent,
  bN as _DateInputComponent,
  hN as _DatePickerComponent,
  yN as _DialogComponent,
  wN as _DividerComponent,
  kN as _DragComponent,
  SN as _EllipsisComponent,
  CN as _FabComponent,
  VA as _FieldDecoratorComponent,
  PN as _FloatingPanelComponent,
  ON as _FormComponent,
  RA as _FormDetailsComponent,
  zN as _HighlighterProviderComponent,
  BA as _HoverComponent,
  IA as _HoverOverlayComponent,
  DA as _IconComponent,
  TN as _ImageComponent,
  IN as _ImagePreviewComponent,
  MN as _IndexAnchorComponent,
  AN as _IndexBarComponent,
  LA as _InputComponent,
  KA as _LazyComponent,
  NN as _LinkComponent,
  RN as _ListComponent,
  VN as _LoadingBarComponent,
  XA as _LoadingComponent,
  OA as _LocaleComponent,
  LN as _LocaleProviderComponent,
  UA as _MenuComponent,
  HA as _MenuOptionComponent,
  jA as _MenuSelectComponent,
  FN as _OptionComponent,
  HN as _OtpInputComponent,
  UN as _OverlayComponent,
  pN as _PaginationComponent,
  jN as _PaperComponent,
  YN as _PickerComponent,
  TA as _PopupComponent,
  KN as _ProgressComponent,
  WN as _PullRefreshComponent,
  mN as _RadioComponent,
  qN as _RadioGroupComponent,
  XN as _RailNavigationComponent,
  GN as _RailNavigationItemComponent,
  ZN as _RateComponent,
  JN as _ResultComponent,
  EA as _RippleComponent,
  QN as _RowComponent,
  xN as _SegmentedButtonComponent,
  _N as _SegmentedButtonsComponent,
  e7 as _SelectComponent,
  n7 as _ShimmerTextComponent,
  r7 as _SignatureComponent,
  t7 as _SkeletonComponent,
  o7 as _SliderComponent,
  a7 as _SnackbarComponent,
  i7 as _SpaceComponent,
  l7 as _StepComponent,
  s7 as _StepsComponent,
  DN as _StickyComponent,
  u7 as _StyleProviderComponent,
  EN as _SwipeComponent,
  BN as _SwipeItemComponent,
  d7 as _SwitchComponent,
  c7 as _TabComponent,
  f7 as _TabItemComponent,
  v7 as _TableComponent,
  p7 as _TabsComponent,
  m7 as _TabsItemsComponent,
  g7 as _ThemesComponent,
  h7 as _TimePickerComponent,
  $N as _TooltipComponent,
  b7 as _TreeMenuComponent,
  y7 as _UploaderComponent,
  w7 as _WatermarkComponent,
  Bp as actionSheetProps,
  Wu as add,
  Dp as alertProps,
  Ap as appBarProps,
  $m as avatarGroupProps,
  wm as avatarProps,
  Tm as backTopProps,
  Bm as badgeProps,
  Nm as bottomNavigationItemProps,
  Dm as bottomNavigationProps,
  Vm as breadcrumbProps,
  Hm as breadcrumbsProps,
  jm as buttonGroupProps,
  Pm as buttonProps,
  Km as cardProps,
  qm as cellProps,
  Gm as checkboxGroupProps,
  Yp as checkboxProps,
  Jm as chipProps,
  xm as codeProps,
  eg as colProps,
  lg as collapseItemProps,
  tg as collapseProps,
  ug as collapseTransitionProps,
  cg as countToProps,
  vg as countdownProps,
  Og as counterProps,
  ip as currentMessage,
  Ng as dataTableProps,
  Kg as dateInputProps,
  Ug as datePickerProps,
  k7 as default,
  Mn as defaultLazyOptions,
  Xg as dialogProps,
  Zg as dividerProps,
  Qg as dragProps,
  nh as ellipsisProps,
  np as enUS,
  rp as faIR,
  th as fabProps,
  Ro as fieldDecoratorProps,
  Rp as formDetailsProps,
  ih as formProps,
  Sp as hoverOverlayProps,
  pn as iconProps,
  mm as imageCache,
  vh as imagePreviewProps,
  uh as imageProps,
  gh as indexAnchorProps,
  yh as indexBarProps,
  Wa as inputProps,
  kA as install,
  kh as linkProps,
  Sh as listProps,
  Hz as loadingBarProps,
  jr as loadingProps,
  qp as menuOptionProps,
  xu as menuProps,
  ya as menuSelectProps,
  lp as merge,
  ap as messages,
  Vh as optionProps,
  Hh as otpInputProps,
  jh as overlayProps,
  Tg as paginationProps,
  Yh as paperProps,
  Wh as pickerProps,
  Qt as popupProps,
  Xh as progressProps,
  Zh as pullRefreshProps,
  Qh as radioGroupProps,
  Bg as radioProps,
  rb as railNavigationItemProps,
  _h as railNavigationProps,
  ob as rateProps,
  ib as resultProps,
  pb as rowProps,
  gb as segmentedButtonProps,
  yb as segmentedButtonsProps,
  kb as selectProps,
  Cb as shimmerTextProps,
  Ob as signatureProps,
  Tb as skeletonProps,
  Bb as sliderProps,
  vd as snackbarProps,
  Lb as spaceProps,
  Fb as stepProps,
  jb as stepsProps,
  po as stickyProps,
  Kb as styleProviderProps,
  ud as swipeProps,
  qb as switchProps,
  gn as t,
  Qb as tabItemProps,
  Gb as tabProps,
  _b as tableProps,
  t0 as tabsItemsProps,
  n0 as tabsProps,
  a0 as timePickerProps,
  _g as tooltipProps,
  c0 as treeMenuProps,
  p0 as uploaderProps,
  qu as use,
  ur as useHoverOverlay,
  Ku as useLocale,
  wA as version,
  g0 as watermarkProps,
  ju as zhCN,
  op as zhHK,
  Yu as zhTW
};
