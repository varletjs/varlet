import { Comment as w0, Fragment as De, Teleport as Hr, Transition as bn, TransitionGroup as k0, computed as S, createApp as $0, createBlock as ke, createCommentVNode as X, createElementBlock as k, createElementVNode as L, createSlots as Pr, createTextVNode as Le, createVNode as U, defineComponent as te, getCurrentInstance as Ct, guardReactiveProps as Aa, h as Fn, inject as Nu, isRef as Xv, isVNode as S0, mergeProps as qe, nextTick as Ne, normalizeClass as p, normalizeProps as yt, normalizeStyle as J, onActivated as ft, onBeforeMount as C0, onBeforeUnmount as Pt, onDeactivated as Ot, onMounted as Tr, onUnmounted as Xt, onUpdated as zt, openBlock as b, provide as Ru, reactive as $n, ref as O, renderList as Ye, renderSlot as F, resolveComponent as x, resolveDirective as _e, resolveDynamicComponent as Gt, shallowReactive as P0, shallowRef as Gv, toDisplayString as ve, unref as Na, useSlots as O0, vModelText as Zv, vShow as yr, watch as me, withCtx as se, withDirectives as We, withKeys as kd, withModifiers as Nn } from "vue";
function Ke(e) {
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
var wA = Gl(z0, { path: "/" });
function hn(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
function T0(e, n) {
  return hn(e, 0, n.length - 1);
}
function uo(e, n) {
  return Array.from({ length: e }, (r, t) => n(t));
}
function Er() {
  return typeof window < "u";
}
function Ra() {
  return typeof globalThis < "u" ? globalThis : Er() ? window : typeof global < "u" ? global : self;
}
var { hasOwnProperty: E0 } = Object.prototype;
function go(e, n) {
  return E0.call(e, n);
}
function pa() {
  return Er() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
var B0 = Object.prototype.toString;
function D0(e) {
  return B0.call(e);
}
function En(e) {
  return D0(e).slice(8, -1);
}
function $d(e) {
  return En(e) === "ArrayBuffer";
}
function Io(e) {
  return typeof e == "boolean";
}
function Sd(e) {
  return En(e) === "DataView";
}
function Zl(e) {
  return En(e) === "Date";
}
function Cd(e) {
  return En(e) === "DOMException";
}
function Or(e) {
  return e == null || e === "" || Ke(e) && !e.length;
}
function Pd(e) {
  return En(e) === "Error";
}
function Od(e) {
  return En(e) === "Map";
}
function Jl(e) {
  return typeof e == "object" && e !== null;
}
function Sn(e) {
  return En(e) === "Object";
}
function zd(e) {
  return En(e) === "RegExp";
}
function Td(e) {
  return En(e) === "Set";
}
function Ed(e) {
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
  ].includes(En(e));
}
function I0(e, n, r) {
  const t = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  function a(i, l, s, u) {
    if (r(i, l) === !0 || i === l || i !== i && l !== l) return !0;
    if (!Jl(i) || !Jl(l)) return i === l;
    if (i.constructor !== l.constructor) return !1;
    if (En(i) === "String" && En(l) === "String" || En(i) === "Number" && En(l) === "Number" || En(i) === "Boolean" && En(l) === "Boolean" || En(i) === "BigInt" && En(l) === "BigInt" || En(i) === "Symbol" && En(l) === "Symbol") return i.valueOf() === l.valueOf();
    if (Zl(i) && Zl(l)) return i.getTime() === l.getTime();
    if (zd(i) && zd(l)) return i.source === l.source && i.flags === l.flags;
    if (Pd(i) && Pd(l)) return i.name === l.name && i.message === l.message && i.cause === l.cause;
    if (Cd(i) && Cd(l)) return i.name === l.name && i.message === l.message;
    if (Ed(i) && Ed(l) || Sd(i) && Sd(l)) {
      if (i.byteLength !== l.byteLength) return !1;
      const d = new Uint8Array(i.buffer), c = new Uint8Array(l.buffer);
      return d.every((f, v) => f === c[v]);
    }
    if ($d(i) && $d(l)) {
      if (i.byteLength !== l.byteLength) return !1;
      const d = new Uint8Array(i), c = new Uint8Array(l);
      return d.every((f, v) => f === c[v]);
    }
    if (s.get(i) === l && u.get(l) === i) return !0;
    if (s.set(i, l), u.set(l, i), Od(i) && Od(l) || Td(i) && Td(l)) {
      if (i.size !== l.size) return !1;
      const d = [...i], c = [...l], f = d.every((v, g) => a(v, c[g], s, u));
      return s.delete(i), u.delete(l), f;
    }
    if (Ke(i) && Ke(l)) {
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
function Bd(e, n) {
  return I0(e, n, () => {
  });
}
function tr(e) {
  return typeof e == "number";
}
function Jv(e) {
  return tr(e) || Pn(e) && /^[-+]?\d+$/.test(e);
}
function Dt(e) {
  return !!e;
}
function Qv(e) {
  return e === window;
}
function M0() {
  return Er() && "ontouchstart" in window;
}
function A0(e, n) {
  if (!e) throw new Error(n);
}
function Z(e) {
  return e == null ? 0 : Pn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Io(e) ? Number(e) : e;
}
function Vt(e, n) {
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
function Kr(e) {
  return Ke(e) ? e : [e];
}
function ma(e) {
  const n = Ra();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function V0(...e) {
  return e.map((n) => {
    if (Ke(n)) {
      const [r, t, o = null] = n;
      return r ? t : o;
    }
    return n;
  });
}
function Vu(e) {
  return e = e.replace(/[-_](\w)/g, (n, r) => r.toUpperCase()), e.replace(e.charAt(0), e.charAt(0).toLowerCase());
}
function xv(e) {
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
function Lt(e) {
  const n = Ra();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}
function Gn() {
  return new Promise((e) => {
    Lt(() => {
      Lt(e);
    });
  });
}
function Ur(e) {
  return window.getComputedStyle(e);
}
function kn(e) {
  if (Qv(e)) {
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
    Lt(e);
  });
}
function _v(e) {
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
var kA = _v(Ra().sessionStorage), $A = _v(Ra().localStorage);
function C(e, ...n) {
  if (Ke(e)) return e.map((r) => r(...n));
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
  }, timingFunction: a = (y) => y, onStateChange: i = () => {
  } } = e;
  let l = "pending", s = n;
  const u = r - n;
  let d, c, f, v = 0;
  function g() {
    if (l === "running" || l === "finished") return;
    $("running");
    const y = performance.now();
    c = c ?? y, v += f != null ? y - f : 0, f = void 0, z();
    function z() {
      d = Lt(() => {
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
  function w() {
    return l;
  }
  function $(y) {
    l = y, i(y);
  }
  return {
    start: g,
    pause: h,
    reset: m,
    getState: w
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
function W0(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function Nt(e, n) {
  console.error(`Varlet [${e}]: ${n}`);
}
var K0 = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1;
function On(e) {
  let n = !1;
  Tr(() => {
    e(), Ne(() => {
      n = !0;
    });
  }), ft(() => {
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
  Xv(e) && (c = me(() => e.value, (v, g) => {
    d(g), u(v);
  }));
  const f = () => {
    c?.(), d(e), l = !0;
  };
  return On(() => {
    u(e);
  }), Pt(() => {
    d(e);
  }), Ot(() => {
    d(e);
  }), f;
}
function ep(e, n, r) {
  if (!Er()) return;
  xe(document, n, (o) => {
    const a = Yn(e) ? e() : Na(e);
    a && !a.contains(o.target) && r(o);
  });
}
function Zt(e) {
  let n = !1;
  Ot(() => {
    n = !0, e();
  }), Xt(() => {
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
    Ke(t?.children) && t.children.forEach((o) => {
      S0(o) && (n.push(o), r(o));
    });
  };
  return r(e), n;
}
function Dn(e) {
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
    Vt(r, u), Vt(t, d);
  }, s = (u) => {
    Ru(e, {
      childInstances: r,
      collect: i,
      clear: l,
      ...u
    });
  };
  return zt(a), {
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
  const r = O(!1);
  return me(e, (t) => {
    n === t && (r.value = !0);
  }, { immediate: !0 }), r;
}
function G0(e, n) {
  if (e > n) return "horizontal";
  if (n > e) return "vertical";
}
function Jt() {
  const e = O(0), n = O(0), r = O(0), t = O(0), o = O(0), a = O(0), i = O(0), l = O(0), s = O(0), u = O(0), d = O(), c = O(!1), f = O(!1), v = O(0), g = O(0);
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
    startTouch: (P) => {
      m();
      const { clientX: R, clientY: H } = P.touches[0];
      e.value = R, n.value = H, i.value = R, l.value = H, c.value = !0, v.value = performance.now(), f.value = !1, h && window.cancelAnimationFrame(h);
    },
    moveTouch: (P) => {
      const { clientX: R, clientY: H } = P.touches[0];
      f.value = !0, r.value = R - e.value, t.value = H - n.value, o.value = Math.abs(r.value), a.value = Math.abs(t.value), g.value = Math.sqrt(o.value ** 2 + a.value ** 2), s.value = R - i.value, u.value = H - l.value, d.value || (d.value = G0(o.value, a.value)), i.value = R, l.value = H;
    },
    endTouch: () => {
      c.value = !1, h = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (P) => kt(P) === 0 && t.value > 0,
    isReachBottom: (P, R = 1) => {
      const { scrollHeight: H, clientHeight: A, scrollTop: I } = P, E = Math.abs(H - I - A);
      return t.value < 0 && E <= R;
    }
  };
}
function np() {
  const e = Ct(), n = xv(e.type.name), r = O(void 0);
  return Tr(() => {
    r.value = `${n}-${e.uid}`;
  }), r;
}
function Z0(e = {}) {
  const { initialWidth: n = 0, initialHeight: r = 0 } = e, t = O(n), o = O(r), a = () => {
    Er() && (t.value = window.innerWidth, o.value = window.innerHeight);
  };
  return On(a), wr(a), {
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
  const u = O(s());
  let d = !0;
  return me(() => e[n], () => {
    d = !1, u.value = s(), Ne(() => {
      d = !0;
    });
  }), me(() => u.value, (c) => {
    d && (i ? i(l, c) : C(e[l], c));
  }), u;
}
function J0(e) {
  const n = O(o(e.from)), r = O("pending");
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
function ju(e, n) {
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
  Xv(e) && (s = me(() => e.value, () => i(e)));
  const u = () => {
    s?.(), l(), o = !0;
  };
  return On(() => i(e)), Pt(l), Ot(l), u;
}
var Q0 = Object.defineProperty, x0 = Object.defineProperties, _0 = Object.getOwnPropertyDescriptors, Dd = Object.getOwnPropertySymbols, ey = Object.prototype.hasOwnProperty, ny = Object.prototype.propertyIsEnumerable, Id = (e, n, r) => n in e ? Q0(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, _l = (e, n) => {
  for (var r in n || (n = {})) ey.call(n, r) && Id(e, r, n[r]);
  if (Dd)
    for (var r of Dd(n)) ny.call(n, r) && Id(e, r, n[r]);
  return e;
}, ry = (e, n) => x0(e, _0(n)), Md = (e, n, r) => new Promise((t, o) => {
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
  return Ke(n) ? n.reduce((r, t) => (r[t] = e[t], r), {}) : e[n];
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
  const n = $0(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), r.parentNode && document.body.removeChild(r);
    }
  };
}
function Qt(e, n = {}, r = {}) {
  const { unmount: t } = ty({ setup() {
    return () => Fn(e, _l(_l({}, n), r));
  } });
  return { unmountInstance: t };
}
function Va(e) {
  const n = [];
  return e.forEach((r) => {
    if (r.type !== w0) {
      if (r.type === De && Ke(r.children)) {
        n.push(...Va(r.children));
        return;
      }
      n.push(r);
    }
  }), n;
}
function Ad(e) {
  return Sn(e) && Yn(e.safeParseAsync);
}
function oy(e) {
  return Sn(e) && go(e, "success");
}
function xn() {
  const e = O(""), n = (o, a, i) => Md(null, null, function* () {
    const l = Kr(o).filter((u) => Ad(u) || Yn(u)), s = yield Promise.all(l.map((u) => Ad(u) ? u.safeParseAsync(a) : u(a, i)));
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
    validateWithTrigger: (o, a, i, l, s) => Md(null, null, function* () {
      o.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function ay(e) {
  xe(() => window, "hashchange", e), xe(() => window, "popstate", e);
}
function Tt() {
  const e = O(!1);
  return ft(() => {
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
function zn(e, n) {
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
}), rp = {
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
}, tp = {
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
}, op = {
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
}, Yu = {
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
}, Wu = {
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
}, ap = Wu, iy = Object.defineProperty, Nd = Object.getOwnPropertySymbols, ly = Object.prototype.hasOwnProperty, sy = Object.prototype.propertyIsEnumerable, Rd = (e, n, r) => n in e ? iy(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Vd = (e, n) => {
  for (var r in n || (n = {})) ly.call(n, r) && Rd(e, r, n[r]);
  if (Nd)
    for (var r of Nd(n)) sy.call(n, r) && Rd(e, r, n[r]);
  return e;
};
function Ku() {
  const e = O({}), n = O({}), r = (i, l) => {
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
      e.value[i] = Vd(Vd({}, e.value[i]), l), t(i);
    },
    t: (i) => {
      if (go(n.value, i)) return n.value[i];
    }
  };
}
var { messages: ip, currentMessage: lp, add: qu, use: Xu, merge: sp, t: gn } = Ku();
qu("zh-CN", Yu);
Xu("zh-CN");
var SA = {
  zhCN: Yu,
  enUS: rp,
  zhTW: Wu,
  zhHK: ap,
  faIR: tp,
  jaJP: op,
  messages: ip,
  currentMessage: lp,
  add: qu,
  use: Xu,
  merge: sp,
  t: gn,
  useLocale: Ku
}, es = {
  zhCN: Yu,
  enUS: rp,
  zhTW: Wu,
  zhHK: ap,
  faIR: tp,
  jaJP: op,
  messages: ip,
  currentMessage: lp,
  add: qu,
  use: Xu,
  merge: sp,
  t: gn,
  useLocale: Ku
}, ns = /* @__PURE__ */ Symbol("LOCALE_PROVIDER_KEY");
function uy(e) {
  Ru(ns, e);
}
function kr() {
  return Uu(ns) ? Nu(ns) : { t: null };
}
var up = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, CA = $n(up), vr = $n(up), { n: Ld } = oe("");
function dp() {
  Object.keys(vr.locks).length <= 0 ? document.body.classList.remove(Ld("$--lock")) : document.body.classList.add(Ld("$--lock"));
}
function Go(e) {
  vr.locks[e] = 1, dp();
}
function Zo(e) {
  delete vr.locks[e], dp();
}
function Mo(e, n) {
  const { uid: r } = Ct();
  n && me(n, (t) => {
    t === !1 ? Zo(r) : t === !0 && e() === !0 && Go(r);
  }), me(e, (t) => {
    n && n() === !1 || (t === !0 ? Go(r) : Zo(r));
  }), C0(() => {
    n && n() === !1 || e() === !0 && Go(r);
  }), Xt(() => {
    n && n() === !1 || e() === !0 && Zo(r);
  }), ft(() => {
    n && n() === !1 || e() === !0 && Go(r);
  }), Ot(() => {
    n && n() === !1 || e() === !0 && Zo(r);
  });
}
var Qr = [];
function Gu(e, n) {
  const { uid: r } = Ct();
  me(e, (i) => {
    i && !a(r) ? o() : setTimeout(() => {
      Vt(Qr, a(r));
    });
  }), On(() => {
    e() && o();
  }), Zt(() => {
    Vt(Qr, a(r));
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
  const r = O(vr.zIndex);
  return me(e, (t) => {
    t && (vr.zIndex += n, r.value = vr.zIndex);
  }, { immediate: !0 }), { zIndex: r };
}
var xt = {
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
}, cp = /* @__PURE__ */ Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function fp() {
  const { bindParent: e, parentProvider: n, index: r } = Bn(cp);
  return {
    index: r,
    popup: n,
    bindPopup: e
  };
}
function dy() {
  const { bindChildren: e, childProviders: n, length: r } = Dn(cp);
  return {
    length: r,
    popupItems: n,
    bindPopupItems: e
  };
}
var cy = Object.defineProperty, Fd = Object.getOwnPropertySymbols, fy = Object.prototype.hasOwnProperty, vy = Object.prototype.propertyIsEnumerable, Hd = (e, n, r) => n in e ? cy(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, py = (e, n) => {
  for (var r in n || (n = {})) fy.call(n, r) && Hd(e, r, n[r]);
  if (Fd)
    for (var r of Fd(n)) vy.call(n, r) && Hd(e, r, n[r]);
  return e;
}, { name: my, n: mr, classes: Nl } = oe("popup"), La = te({
  name: my,
  inheritAttrs: !1,
  props: xt,
  setup(e, { slots: n, attrs: r }) {
    const t = X0(() => e.show, !0), { zIndex: o } = Ao(() => e.show, 3), a = S(() => {
      var g;
      return (g = e.zIndex) != null ? g : o.value;
    }), { onStackTop: i } = Gu(() => e.show, a), { disabled: l } = Tt(), { bindPopupItems: s } = dy();
    Mo(() => e.show, () => e.lockScroll), me(() => e.show, (g) => {
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
      return We(U("div", qe({
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
      }, { default: () => [We(U("div", {
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
fe(La, xt);
var PA = La, st = La, gy = Object.defineProperty, hy = Object.defineProperties, by = Object.getOwnPropertyDescriptors, Ud = Object.getOwnPropertySymbols, yy = Object.prototype.hasOwnProperty, wy = Object.prototype.propertyIsEnumerable, jd = (e, n, r) => n in e ? gy(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, vp = (e, n) => {
  for (var r in n || (n = {})) yy.call(n, r) && jd(e, r, n[r]);
  if (Ud)
    for (var r of Ud(n)) wy.call(n, r) && jd(e, r, n[r]);
  return e;
}, ky = (e, n) => hy(e, by(n)), { n: pp } = oe("ripple"), Yd = 250;
function $y(e) {
  const { zIndex: n, position: r } = Ur(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Wd(e) {
  return "touches" in e;
}
function Sy(e, n) {
  const { top: r, left: t } = kn(e), { clientWidth: o, clientHeight: a } = e, i = Math.sqrt(o ** 2 + a ** 2) / 2, l = i * 2, s = Wd(n) ? n.touches[0].clientX - t : o / 2, u = Wd(n) ? n.touches[0].clientY - r : a / 2, d = (o - i * 2) / 2, c = (a - i * 2) / 2;
  return {
    x: s - i,
    y: u - i,
    centerX: d,
    centerY: c,
    size: l
  };
}
function Zu(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !vr.enableRipple) return;
  const r = () => {
    n.tasker = null;
    const { x: t, y: o, centerX: a, centerY: i, size: l } = Sy(this, e), s = document.createElement("div");
    s.classList.add(pp()), s.style.opacity = "0", s.style.transform = `translate(${t}px, ${o}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), $y(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(r, 30);
}
function ga() {
  const e = this._ripple, n = () => {
    const r = this.querySelectorAll(`.${pp()}`);
    if (!r.length) return;
    const t = r[r.length - 1], o = Yd - performance.now() + Number(t.dataset.createdAt);
    window.setTimeout(() => {
      t.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = t.parentNode) == null ? void 0 : a.removeChild(t);
      }, Yd);
    }, o);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function mp() {
  if (!M0() || !vr.enableRipple) return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
var ha = !1;
function Cy(e) {
  ha || !(e.key === " " || e.key === "Enter") || (Zu.call(this, e), ha = !0);
}
function Kd() {
  ha && (ga.call(this), ha = !1);
}
function Py(e, n) {
  var r;
  e._ripple = ky(vp({ tasker: null }, (r = n.value) != null ? r : {}), { removeRipple: ga.bind(e) }), e.addEventListener("touchstart", Zu, { passive: !0 }), e.addEventListener("touchmove", mp, { passive: !0 }), e.addEventListener("dragstart", ga, { passive: !0 }), e.addEventListener("keydown", Cy), e.addEventListener("keyup", Kd), e.addEventListener("blur", Kd), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function Oy(e) {
  e.removeEventListener("touchstart", Zu), e.removeEventListener("touchmove", mp), e.removeEventListener("dragstart", ga), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function zy(e, n) {
  var r, t, o, a, i, l;
  const s = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (t = n.value) == null ? void 0 : t.disabled
  };
  (s.color !== ((o = e._ripple) == null ? void 0 : o.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = vp({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
var gp = {
  mounted: Py,
  unmounted: Oy,
  updated: zy,
  install(e) {
    e.directive("ripple", this);
  }
}, OA = gp, vn = gp;
function hp(e) {
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
function Ju(e, n) {
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
function bp(e) {
  e?._hover != null && (By(e), Ju(e, e._hover.rawStyle));
}
function yp() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, Yn(e)) {
    e(this._hover.hovering);
    return;
  }
  Ju(this, e);
}
function wp() {
  if (this._hover.hovering = !1, Yn(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  bp(this);
}
function kp(e, n) {
  var r, t;
  const { arg: o, value: a } = n;
  hp(o) || (e._hover = {
    value: a,
    hovering: (t = (r = e._hover) == null ? void 0 : r.hovering) != null ? t : !1,
    rawStyle: {}
  }, Ey(e), e.addEventListener("mouseenter", yp), e.addEventListener("mouseleave", wp));
}
function $p(e, n) {
  hp(n.arg) || (bp(e), e.removeEventListener("mouseenter", yp), e.removeEventListener("mouseleave", wp));
}
function Dy(e, n) {
  e._hover && $p(e, n);
}
function Iy(e, n) {
  return !Yn(n.value) && e._hover.hovering;
}
function My(e, n) {
  kp(e, n), Iy(e, n) && Ju(e, n.value);
}
var Sp = {
  mounted: kp,
  unmounted: $p,
  beforeUpdate: Dy,
  updated: My,
  install(e) {
    e.directive("hover", this);
  }
}, zA = Sp, jn = Sp, Cp = {
  hovering: Boolean,
  focusing: Boolean,
  color: String
}, { name: Ay, n: Ny, classes: Ry } = oe("hover-overlay");
function Vy(e, n) {
  return b(), k("div", {
    class: p(e.classes(e.n(), [e.hovering, e.n("--hovering")], [e.focusing && !e.inMobile(), e.n("--focusing")])),
    style: J({ color: e.color })
  }, null, 6);
}
var Pp = te({
  name: Ay,
  props: Cp,
  setup: () => ({
    n: Ny,
    classes: Ry,
    inMobile: pa
  })
});
Pp.render = Vy;
var Fa = Pp;
ue(Fa);
fe(Fa, Cp);
function ur() {
  const e = O(!1);
  return {
    hovering: e,
    handleHovering: (r) => {
      e.value = r;
    }
  };
}
var TA = Fa, Zn = Fa;
function Ly(e) {
  const { left: n } = kn(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function qd(e) {
  const { top: n } = kn(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Rl(e) {
  const { transform: n } = Ur(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function ut(e) {
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
  for (; !Qv(r); )
    r = ut(r), n.push(r);
  return n;
}
function Op(e, n) {
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
var Uy = (e) => Pn(e) && e.endsWith("rem"), jy = (e) => Pn(e) && e.endsWith("px") || tr(e), Yy = (e) => Pn(e) && e.endsWith("vw"), Wy = (e) => Pn(e) && e.endsWith("vh"), Ky = (e) => Pn(e) && e.endsWith("vmin"), qy = (e) => Pn(e) && e.endsWith("vmax"), fn = (e) => {
  if (Jv(e)) return Number(e);
  if (jy(e)) return +e.replace("px", "");
  if (!Er()) return 0;
  const { vw: n, vh: r, vMin: t, vMax: o } = Hy();
  if (Yy(e)) return +e.replace("vw", "") * n / 100;
  if (Wy(e)) return +e.replace("vh", "") * r / 100;
  if (Ky(e)) return +e.replace("vmin", "") * t / 100;
  if (qy(e)) return +e.replace("vmax", "") * o / 100;
  if (Uy(e)) {
    const a = +e.replace("rem", ""), i = Ur(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return Pn(e) ? Z(e) : 0;
}, Te = (e) => {
  if (e != null)
    return Jv(e) ? `${e}px` : String(e);
}, nr = (e, n = 1) => {
  if (e == null) return;
  const r = Te(e), t = r.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(r) * n}${t}`;
};
function ho(e, { top: n = 0, left: r = 0, duration: t = 300, animation: o }) {
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
function zp(e) {
  return Object.entries(e ?? {}).reduce((n, [r, t]) => {
    const o = r.startsWith("--") ? r : `--${xv(r)}`;
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
function Tp(e, n) {
  !e || !n || (e.scrollTop = n.offsetTop - e.clientHeight / 2 + n.offsetHeight / 2);
}
var Xd = [
  "button",
  "input",
  "select",
  "textarea",
  "[tabindex]",
  "[href]"
].map((e) => `${e}:not([disabled])`).join(", ");
function Qu(e, n, r, t) {
  const o = Array.from(n.querySelectorAll(Xd)).filter((s) => !Xy(s));
  if (!o.length) return;
  const a = [e, ...Array.from(e.querySelectorAll(Xd))].findIndex((s) => s === document.activeElement) !== -1, i = Array.from(o).findIndex((s) => s === document.activeElement);
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
  return b(), ke(Gt(e.isURL(e.name) ? "img" : "i"), {
    class: p(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], `${e.namespace}--set`, [
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
var Ep = te({
  name: Zy,
  props: pn,
  setup(e) {
    const n = O(""), r = O(!1);
    me(() => e.name, t, { immediate: !0 });
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
      isURL: K0,
      toNumber: Z,
      toSizeUnit: Te
    };
  }
});
Ep.render = xy;
var Ha = Ep;
ue(Ha);
fe(Ha, pn);
var EA = Ha, Je = Ha, { name: _y, n: e1, classes: n1 } = oe("action-sheet");
function r1(e, n) {
  const r = x("var-icon"), t = x("maybe-v-node"), o = x("var-hover-overlay"), a = _e("ripple"), i = _e("hover");
  return We((b(), k("div", {
    class: p(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
    style: J({ color: e.color })
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
var Bp = te({
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
Bp.render = r1;
var t1 = Bp, o1 = Object.defineProperty, Gd = Object.getOwnPropertySymbols, a1 = Object.prototype.hasOwnProperty, i1 = Object.prototype.propertyIsEnumerable, Zd = (e, n, r) => n in e ? o1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, l1 = (e, n) => {
  for (var r in n || (n = {})) a1.call(n, r) && Zd(e, r, n[r]);
  if (Gd)
    for (var r of Gd(n)) i1.call(n, r) && Zd(e, r, n[r]);
  return e;
}, Dp = l1({
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
}, Fe(xt, [
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
    default: se(() => [L("div", qe({ class: e.classes(e.n(), e.n("$--box")) }, e.$attrs), [F(e.$slots, "title", {}, () => {
      var o;
      return [L("div", { class: p(e.n("title")) }, ve((o = e.title) != null ? o : (e.pt ? e.pt : e.t)("actionSheetTitle")), 3)];
    }), F(e.$slots, "actions", {}, () => [(b(!0), k(De, null, Ye(e.actions, (o) => (b(), ke(r, {
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
    VarPopup: st,
    VarActionItem: t1
  },
  inheritAttrs: !1,
  props: Dp,
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
var No = Ip, f1 = Object.defineProperty, Jd = Object.getOwnPropertySymbols, v1 = Object.prototype.hasOwnProperty, p1 = Object.prototype.propertyIsEnumerable, Qd = (e, n, r) => n in e ? f1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, xd = (e, n) => {
  for (var r in n || (n = {})) v1.call(n, r) && Qd(e, r, n[r]);
  if (Jd)
    for (var r of Jd(n)) p1.call(n, r) && Qd(e, r, n[r]);
  return e;
}, et, xu = {};
function m1(e = {}) {
  return xd(xd({}, xu), e);
}
function vt(e) {
  return Er() ? new Promise((n) => {
    vt.close();
    const r = P0(m1(e));
    r.teleport = "body", et = r;
    const { unmountInstance: t } = Qt(No, r, {
      onSelect: (o) => {
        C(r.onSelect, o), n(o);
      },
      onClose: () => {
        C(r.onClose), n("close");
      },
      onClosed: () => {
        C(r.onClosed), t(), et === r && (et = null);
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
vt.setDefaultOptions = function(e) {
  xu = e;
};
vt.resetDefaultOptions = function() {
  xu = {};
};
vt.close = function() {
  if (et != null) {
    const e = et;
    et = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
vt.Component = No;
ue(No);
ue(No, vt);
fe(vt, Dp);
var BA = No, rs = vt, Mp = {
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
    style: J({ "background-color": e.color }),
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
var Ap = te({
  name: g1,
  components: { VarIcon: Je },
  props: Mp,
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
      formatElevation: zn,
      handleClose: r
    };
  }
});
Ap.render = w1;
var Ua = Ap;
ue(Ua);
fe(Ua, Mp);
var DA = Ua, ts = Ua, Np = {
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
  return b(), k(De, null, [L("div", qe({
    ref: "appBar",
    class: e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.type === "surface", e.n("--surface")], [e.size === "large", e.n("--large")], [e.round, e.n("--round")], [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], e.formatElevation(e.elevation, 3)),
    style: e.rootStyles
  }, e.$attrs), [L("div", { class: p(e.n("toolbar")) }, [
    L("div", { class: p(e.n("left")) }, [F(e.$slots, "left"), e.titlePosition === "left" ? (b(), k("div", {
      key: 0,
      class: p(e.n("title")),
      style: J({ paddingLeft: e.paddingLeft })
    }, [F(e.$slots, "default", {}, () => [Le(ve(e.title), 1)])], 6)) : X("v-if", !0)], 2),
    e.titlePosition === "center" ? (b(), k("div", {
      key: 0,
      class: p(e.n("title"))
    }, [F(e.$slots, "default", {}, () => [Le(ve(e.title), 1)])], 2)) : X("v-if", !0),
    L("div", { class: p(e.n("right")) }, [e.titlePosition === "right" ? (b(), k("div", {
      key: 0,
      class: p(e.n("title")),
      style: J({ paddingRight: e.paddingRight })
    }, [F(e.$slots, "default", {}, () => [Le(ve(e.title), 1)])], 6)) : X("v-if", !0), F(e.$slots, "right")], 2)
  ], 2), F(e.$slots, "content")], 16), e.fixed && e.placeholder ? (b(), k("div", {
    key: 0,
    class: p(e.n("placeholder")),
    style: J({ height: e.placeholderHeight })
  }, null, 6)) : X("v-if", !0)], 64);
}
var Rp = te({
  name: k1,
  props: Np,
  setup(e, { slots: n }) {
    const r = O(null), t = O(), o = O(), a = O(), i = S(() => {
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
    wr(s), On(() => {
      l(), s();
    }), zt(l);
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
      formatElevation: zn,
      appBar: r,
      placeholderHeight: a
    };
  }
});
Rp.render = C1;
var ja = Rp;
ue(ja);
fe(ja, Np);
var IA = ja, os = ja, Vp = {
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
var Lp = te({
  name: P1,
  props: Vp,
  setup: () => ({ n: O1 })
});
Lp.render = E1;
var Ya = Lp;
ue(Ya);
fe(Ya, Vp);
var MA = Ya, Hn = Ya, B1 = Object.defineProperty, D1 = Object.defineProperties, I1 = Object.getOwnPropertyDescriptors, _d = Object.getOwnPropertySymbols, M1 = Object.prototype.hasOwnProperty, A1 = Object.prototype.propertyIsEnumerable, ec = (e, n, r) => n in e ? B1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, N1 = (e, n) => {
  for (var r in n || (n = {})) M1.call(n, r) && ec(e, r, n[r]);
  if (_d)
    for (var r of _d(n)) A1.call(n, r) && ec(e, r, n[r]);
  return e;
}, R1 = (e, n) => D1(e, I1(n)), Fp = /* @__PURE__ */ Symbol("FORM_BIND_FORM_ITEM_KEY");
function Wn() {
  const { parentProvider: e, index: n, bindParent: r } = Bn(Fp), t = Ct();
  return {
    index: n,
    form: e,
    bindForm: r ? (o) => {
      r(R1(N1({}, o), { instance: t }));
    } : null
  };
}
function V1() {
  const { childProviders: e, length: n, bindChildren: r } = Dn(Fp);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var Hp = /* @__PURE__ */ Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Up = /* @__PURE__ */ Symbol("SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY");
function L1() {
  const { childProviders: e, length: n, bindChildren: r } = Dn(Hp);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
function F1() {
  const { childProviders: e, bindChildren: n } = Dn(Up);
  return {
    swipeResizeListeners: e,
    bindSwipeResizeListeners: n
  };
}
function H1() {
  const { parentProvider: e, bindParent: n } = Bn(Up);
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
}, nc = (e, n, r) => new Promise((t, o) => {
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
function W1(e, n) {
  const r = x("var-icon");
  return b(), k("div", {
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
  }, [L("div", {
    class: p(e.classes(e.n("controller"), [e.isFocusing, e.n("--focus")], [e.isError, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], [!e.line, e.n("--bottom-border-radius")])),
    style: J({
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
      style: J({ color: e.color }),
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
  ], 6), e.line ? (b(), k(De, { key: 0 }, [e.variant === "outlined" ? (b(), k("fieldset", {
    key: 0,
    class: p(e.classes(e.n("line"), [e.isFocusing, e.n("--line-focus")], [e.isError, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
    style: J({ borderColor: e.color })
  }, [L("legend", {
    class: p(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
    style: J({ width: e.legendWidth })
  }, [e.placeholder && e.hint ? (b(), ke(Hr, {
    key: 0,
    to: "body"
  }, [L("span", {
    ref: "placeholderTextEl",
    class: p(e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")]))
  }, ve(e.placeholder), 3)])) : X("v-if", !0)], 6)], 6)) : (b(), k("div", {
    key: 1,
    class: p(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
    style: J({ background: e.isError ? void 0 : e.blurColor })
  }, [L("div", {
    class: p(e.classes(e.n("dot"), [e.isFocusing, e.n("--line-focus")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
    style: J({ background: e.isError ? void 0 : e.focusColor })
  }, null, 6)], 6))], 64)) : X("v-if", !0)], 2);
}
var jp = te({
  name: U1,
  components: { VarIcon: Je },
  props: Ro,
  setup(e) {
    const n = O(null), r = O(null), t = O(""), o = O("0px"), a = O("0px"), i = O("0px"), l = O(!0), s = S(() => e.hint && (!Or(e.value) || e.isFocusing)), { popup: u, bindPopup: d } = fp(), { bindSwipeResizeDispatcher: c } = H1();
    let f = 0;
    const v = S(() => e.isError ? void 0 : e.isFocusing ? e.focusColor : e.blurColor);
    wr(() => w(!0)), ju(r, () => w(!0)), On(() => {
      w(), Ne().then(() => {
        l.value = !1;
      });
    }), zt(w), C(d, null), C(c, { onResize() {
      Ne().then(() => w(!0));
    } }), u && me(() => u.show.value, ($) => nc(null, null, function* () {
      $ && (yield Gn(), w(!0));
    }));
    function g() {
      const { hint: $, value: y, composing: z } = e;
      if (!$ && (!Or(y) || z)) return Vl("--placeholder-hidden");
      if (s.value) return Vl("--placeholder-hint");
    }
    function h($) {
      C(e.onClear, $);
    }
    function m($) {
      C(e.onClick, $);
    }
    function w($ = !1) {
      return nc(this, null, function* () {
        if (!r.value) return;
        $ && (f++, l.value = !0);
        const y = f;
        if (o.value = `${r.value.offsetLeft}px`, a.value = `${r.value.offsetWidth}px`, i.value = `${r.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
          const z = Ur(n.value), T = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
          t.value = `calc(${z.width} * 0.75 + ${T} * 2)`;
        }
        $ && (yield Ne(), yield qr(), y === f && (l.value = !1));
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
      resize: w,
      computePlaceholderState: g,
      n: Vl,
      classes: j1,
      isEmpty: Or,
      handleClear: h,
      handleClick: m
    };
  }
});
jp.render = W1;
var Wa = jp;
ue(Wa);
fe(Wa, Ro);
var AA = Wa, bo = Wa, K1 = Object.defineProperty, q1 = Object.defineProperties, X1 = Object.getOwnPropertyDescriptors, rc = Object.getOwnPropertySymbols, G1 = Object.prototype.hasOwnProperty, Z1 = Object.prototype.propertyIsEnumerable, tc = (e, n, r) => n in e ? K1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, J1 = (e, n) => {
  for (var r in n || (n = {})) G1.call(n, r) && tc(e, r, n[r]);
  if (rc)
    for (var r of rc(n)) Z1.call(n, r) && tc(e, r, n[r]);
  return e;
}, Q1 = (e, n) => q1(e, X1(n)), Ka = Q1(J1({
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
      style: J({ "--input-placeholder-color": e.placeholderColor }),
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
var Yp = te({
  name: x1,
  components: {
    VarFormDetails: Hn,
    VarFieldDecorator: bo
  },
  props: Ka,
  setup(e) {
    const n = np(), r = O(null), t = O(!1), o = O(!1), { bindForm: a, form: i } = Wn(), { errorMessage: l, validateWithTrigger: s, validate: u, resetValidation: d } = xn(), c = S(() => e.disabled || e.readonly ? "" : "text"), f = S(() => e.type === "number" ? "text" : e.type), v = S(() => {
      const { maxlength: G, modelValue: ce } = e;
      return G ? Or(ce) ? `0 / ${G}` : `${String(ce).length}/${G}` : "";
    }), g = S(() => {
      const { hint: G, blurColor: ce, focusColor: ge } = e;
      if (!G)
        return l.value ? "var(--field-decorator-error-color)" : t.value ? ge || "var(--field-decorator-focus-color)" : ce || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    C(a, {
      reset: N,
      validate: M,
      resetValidation: d
    }), On(() => {
      e.autofocus && D();
    });
    function h(G) {
      Ne(() => {
        const { validateTrigger: ce, rules: ge, modelValue: de } = e;
        s(ce, G, ge, de);
      });
    }
    function m(G) {
      t.value = !0, C(e.onFocus, G), h("onFocus");
    }
    function w(G) {
      t.value = !1, C(e.onBlur, G), h("onBlur");
    }
    function $(G) {
      const ce = G.target;
      let { value: ge } = ce;
      e.type === "number" && (ge = A(ge));
      const de = E(ge);
      return de === e.modelValue && (ce.value = de), de;
    }
    function y() {
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
    function P(G) {
      const ce = I($(G));
      e.modelModifiers.trim && C(e["onUpdate:modelValue"], ce), C(e.onChange, ce, G), h("onChange");
    }
    function R() {
      const { disabled: G, readonly: ce, clearable: ge, onClear: de } = e;
      i?.disabled.value || i?.readonly.value || G || ce || !ge || (C(e["onUpdate:modelValue"], ""), C(de, ""), h("onClear"));
    }
    function H(G) {
      const { disabled: ce, onClick: ge } = e;
      i?.disabled.value || ce || (C(ge, G), h("onClick"));
    }
    function A(G) {
      const ce = G.indexOf("-"), ge = G.indexOf(".");
      return ce > -1 && (G = ce === 0 ? "-" + G.replace(/-/g, "") : G.replace(/-/g, "")), ge > -1 && (G = G.slice(0, ge + 1) + G.slice(ge).replace(/\./g, "")), G.replace(/[^-0-9.]/g, "");
    }
    function I(G) {
      return e.modelModifiers.trim ? G.trim() : G;
    }
    function E(G) {
      return e.maxlength ? G.slice(0, Z(e.maxlength)) : G;
    }
    function B(G) {
      const { disabled: ce } = e;
      i?.disabled.value || ce || G.target === r.value || (D(), Ze(G));
    }
    function N() {
      C(e["onUpdate:modelValue"], ""), d();
    }
    function M() {
      return u(e.rules, e.modelValue);
    }
    function D() {
      var G;
      (G = r.value) == null || G.focus();
    }
    function j() {
      r.value.blur();
    }
    function K() {
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
      handleBlur: w,
      handleInput: T,
      handleChange: P,
      handleClear: R,
      handleClick: H,
      handleCompositionStart: y,
      handleCompositionEnd: z,
      handleMousedown: B,
      validate: M,
      resetValidation: d,
      reset: N,
      focus: D,
      blur: j,
      select: K
    };
  }
});
Yp.render = ow;
var Vo = Yp;
ue(Vo);
fe(Vo, Ka);
var NA = Vo, Ft = Vo, Wp = {
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
  const { bindChildren: e, childProviders: n, length: r } = Dn(Kp);
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
var oc = (e, n, r) => new Promise((t, o) => {
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
  }, [We((b(), k("div", {
    class: p(e.classes(e.n("action"), [
      e.checked || e.isIndeterminate,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: J({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor })
  }, [
    e.isIndeterminate ? (b(), k("span", {
      key: 0,
      class: p(e.n("icon")),
      style: J({ fontSize: e.toSizeUnit(e.iconSize) })
    }, [F(e.$slots, "indeterminate-icon", {}, () => [U(r, { name: "minus-box" })])], 6)) : X("v-if", !0),
    e.checked && !e.isIndeterminate ? (b(), k("span", {
      key: 1,
      class: p(e.n("icon")),
      style: J({ fontSize: e.toSizeUnit(e.iconSize) })
    }, [F(e.$slots, "checked-icon", {}, () => [U(r, { name: "checkbox-marked" })])], 6)) : X("v-if", !0),
    !e.checked && !e.isIndeterminate ? (b(), k("span", {
      key: 2,
      class: p(e.n("icon")),
      style: J({ fontSize: e.toSizeUnit(e.iconSize) })
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
var qp = te({
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
  props: Wp,
  setup(e) {
    const n = O(null), r = O(!1), t = yn(e, "modelValue"), o = yn(e, "indeterminate"), a = S(() => t.value === e.checkedValue), i = S(() => e.checkedValue), { checkboxGroup: l, bindCheckboxGroup: s } = iw(), { hovering: u, handleHovering: d } = ur(), { form: c, bindForm: f } = Wn(), { errorMessage: v, validateWithTrigger: g, validate: h, resetValidation: m } = xn(), w = {
      checkedValue: i,
      checked: a,
      sync: P,
      validate: E,
      resetValidation: m,
      reset: R
    };
    C(s, w), C(f, w), xe(() => window, "keydown", A), xe(() => window, "keyup", I);
    function $(B) {
      Ne(() => {
        const { validateTrigger: N, rules: M, modelValue: D } = e;
        g(N, B, M, D);
      });
    }
    function y(B) {
      return oc(this, null, function* () {
        const { checkedValue: N, onChange: M } = e;
        t.value = B, B === N ? l?.onChecked(N) : l?.onUnchecked(N), yield Ne(), C(M, B, o.value), $("onChange");
      });
    }
    function z(B) {
      return oc(this, null, function* () {
        const { disabled: N, readonly: M, checkedValue: D, uncheckedValue: j, onClick: K } = e;
        if (c?.disabled.value || N || (C(K, B), c?.readonly.value || M)) return;
        if (o.value === !0) {
          o.value = !1, yield Ne(), C(e.onChange, t.value, o.value), $("onChange");
          return;
        }
        const G = l ? l.checkedCount.value >= Number(l.max.value) : !1;
        !a.value && G || y(a.value ? j : D);
      });
    }
    function T() {
      n.value.focus();
    }
    function P(B) {
      const { checkedValue: N, uncheckedValue: M } = e;
      t.value = B.includes(N) ? N : M;
    }
    function R() {
      t.value = e.uncheckedValue, m();
    }
    function H(B) {
      const { checkedValue: N, uncheckedValue: M } = e;
      [N, M].includes(B) || (B = a.value ? M : N), y(B);
    }
    function A(B) {
      if (!r.value) return;
      const { key: N } = B;
      (N === "Enter" || N === " ") && Ze(B), N === "Enter" && n.value.click();
    }
    function I(B) {
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
qp.render = cw;
var qa = qp;
ue(qa);
fe(qa, Wp);
var RA = qa, dt = qa, Xp = {
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
}, Gp = /* @__PURE__ */ Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function fw() {
  const { length: e, childProviders: n, bindChildren: r } = Dn(Gp);
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: r
  };
}
function vw() {
  const { index: e, parentProvider: n, bindParent: r } = Bn(Gp);
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
  return We((b(), k("div", {
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
var Zp = te({
  name: mw,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarCheckbox: dt,
    VarHoverOverlay: Zn,
    VarIcon: Je,
    MaybeVNode: lr
  },
  props: Xp,
  setup(e) {
    const n = O(), r = O(), t = O(!1), o = O(!1), a = O(!1), i = S(() => o.value), l = S(() => a.value), s = S(() => e.value), u = S(() => e.disabled), d = S(() => e.ripple), { menuSelect: c, bindMenuSelect: f } = vw(), { size: v, multiple: g, onSelect: h, computeLabel: m } = c, { hovering: w, handleHovering: $ } = ur(), y = S(() => {
      var I;
      return Yn(e.label) ? e.label((I = e.option) != null ? I : {
        label: e.label,
        value: e.value,
        disabled: e.disabled,
        ripple: e.ripple
      }, o.value) : e.label;
    }), z = {
      label: y,
      value: s,
      selected: i,
      disabled: u,
      ripple: d,
      indeterminate: l,
      sync: A
    };
    me([() => e.label, () => e.value], m), f(z), xe(() => window, "keydown", P), xe(() => window, "keyup", R);
    function T() {
      if (!e.disabled && !(!g.value && e.childrenTrigger)) {
        if (g.value && a.value) {
          a.value = !1, o.value = !1, h(z);
          return;
        }
        g.value && !a.value && (o.value = !o.value), h(z);
      }
    }
    function P(I) {
      var E;
      !t.value && !((E = r.value) != null && E.isFocusing) || ((I.key === "ArrowRight" || I.key === "ArrowLeft") && (Ze(I), C(e.onKeyArrowX, I.key)), t.value && ((I.key === " " || I.key === "Enter") && Ze(I), I.key === "Enter" && n.value.click()));
    }
    function R(I) {
      t.value && I.key === " " && (Ze(I), n.value.click());
    }
    function H() {
      return pw(this, null, function* () {
        yield Ne(), h(z);
      });
    }
    function A(I, E) {
      o.value = I, Io(E) && (a.value = E);
    }
    return {
      root: n,
      checkbox: r,
      optionSelected: o,
      optionIndeterminate: a,
      size: v,
      multiple: g,
      hovering: w,
      isFocusing: t,
      labelVNode: y,
      n: gw,
      classes: hw,
      handleHovering: $,
      handleClick: T,
      handleSelect: H
    };
  }
});
Zp.render = yw;
var Lo = Zp;
ue(Lo);
fe(Lo, Xp);
var VA = Lo, Ht = Lo, _u = {
  radius: {
    type: String,
    default: "normal"
  },
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
var yo = "bottom", Xa = "right", Ga = "left", ww = "auto", Za = [
  "top",
  yo,
  Xa,
  Ga
], Ja = "start";
var kw = "clippingParents", $w = "viewport", ac = "popper", Sw = "reference", ic = /* @__PURE__ */ Za.reduce(function(e, n) {
  return e.concat([n + "-" + Ja, n + "-end"]);
}, []), Jp = /* @__PURE__ */ [].concat(Za, [ww]).reduce(function(e, n) {
  return e.concat([
    n,
    n + "-" + Ja,
    n + "-end"
  ]);
}, []), Cw = "beforeRead", Pw = "read", Ow = "afterRead", zw = "beforeMain", Tw = "main", Ew = "afterMain", Bw = "beforeWrite", Dw = "write", Iw = "afterWrite", Mw = [
  Cw,
  Pw,
  Ow,
  zw,
  Tw,
  Ew,
  Bw,
  Dw,
  Iw
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
function ed(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof pr(e).ShadowRoot || e instanceof ShadowRoot;
}
function Aw(e) {
  return [
    "table",
    "td",
    "th"
  ].indexOf(Vr(e)) >= 0;
}
function pt(e) {
  return (($t(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Qa(e) {
  return Vr(e) === "html" ? e : e.assignedSlot || e.parentNode || (ed(e) ? e.host : null) || pt(e);
}
function as() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function lc(e) {
  return !hr(e) || Xr(e).position === "fixed" ? null : e.offsetParent;
}
function Nw(e) {
  var n = /firefox/i.test(as());
  if (/Trident/i.test(as()) && hr(e) && Xr(e).position === "fixed")
    return null;
  var r = Qa(e);
  for (ed(r) && (r = r.host); hr(r) && ["html", "body"].indexOf(Vr(r)) < 0; ) {
    var t = Xr(r);
    if (t.transform !== "none" || t.perspective !== "none" || t.contain === "paint" || ["transform", "perspective"].indexOf(t.willChange) !== -1 || n && t.willChange === "filter" || n && t.filter && t.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function nd(e) {
  for (var n = pr(e), r = lc(e); r && Aw(r) && Xr(r).position === "static"; ) r = lc(r);
  return r && (Vr(r) === "html" || Vr(r) === "body" && Xr(r).position === "static") ? n : r || Nw(e) || n;
}
function it(e) {
  return e.split("-")[0];
}
function wo(e) {
  return e.split("-")[1];
}
var co = Math.max, sc = Math.min, Ut = Math.round, Rw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Vw(e, n) {
  var r = e.x, t = e.y, o = n.devicePixelRatio || 1;
  return {
    x: Ut(r * o) / o || 0,
    y: Ut(t * o) / o || 0
  };
}
function uc(e) {
  var n, r = e.popper, t = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, c = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, g = i.y, h = g === void 0 ? 0 : g, m = typeof d == "function" ? d({
    x: v,
    y: h
  }) : {
    x: v,
    y: h
  };
  v = m.x, h = m.y;
  var w = i.hasOwnProperty("x"), $ = i.hasOwnProperty("y"), y = Ga, z = "top", T = window;
  if (u) {
    var P = nd(r), R = "clientHeight", H = "clientWidth";
    if (P === pr(r) && (P = pt(r), Xr(P).position !== "static" && l === "absolute" && (R = "scrollHeight", H = "scrollWidth")), P = P, o === "top" || (o === "left" || o === "right") && a === "end") {
      z = yo;
      var A = c && P === T && T.visualViewport ? T.visualViewport.height : P[R];
      h -= A - t.height, h *= s ? 1 : -1;
    }
    if (o === "left" || (o === "top" || o === "bottom") && a === "end") {
      y = Xa;
      var I = c && P === T && T.visualViewport ? T.visualViewport.width : P[H];
      v -= I - t.width, v *= s ? 1 : -1;
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
    return Object.assign({}, E, (N = {}, N[z] = $ ? "0" : "", N[y] = w ? "0" : "", N.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + h + "px)" : "translate3d(" + v + "px, " + h + "px, 0)", N));
  }
  return Object.assign({}, E, (n = {}, n[z] = $ ? h + "px" : "", n[y] = w ? v + "px" : "", n.transform = "", n));
}
function Lw(e) {
  var n = e.state, r = e.options, t = r.gpuAcceleration, o = t === void 0 ? !0 : t, a = r.adaptive, i = a === void 0 ? !0 : a, l = r.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: it(n.placement),
    variation: wo(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: o,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, uc(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, uc(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-placement": n.placement });
}
var Qp = {
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
function dc(e) {
  return e.replace(/start|end/g, function(n) {
    return Hw[n];
  });
}
function xp() {
  return !/^((?!chrome|android).)*safari/i.test(as());
}
function jt(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var t = e.getBoundingClientRect(), o = 1, a = 1;
  n && hr(e) && (o = e.offsetWidth > 0 && Ut(t.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ut(t.height) / e.offsetHeight || 1);
  var i = ($t(e) ? pr(e) : window).visualViewport, l = !xp() && r, s = (t.left + (l && i ? i.offsetLeft : 0)) / o, u = (t.top + (l && i ? i.offsetTop : 0)) / a, d = t.width / o, c = t.height / a;
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
function rd(e) {
  var n = pr(e);
  return {
    scrollLeft: n.pageXOffset,
    scrollTop: n.pageYOffset
  };
}
function td(e) {
  return jt(pt(e)).left + rd(e).scrollLeft;
}
function Uw(e, n) {
  var r = pr(e), t = pt(e), o = r.visualViewport, a = t.clientWidth, i = t.clientHeight, l = 0, s = 0;
  if (o) {
    a = o.width, i = o.height;
    var u = xp();
    (u || !u && n === "fixed") && (l = o.offsetLeft, s = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + td(e),
    y: s
  };
}
function jw(e) {
  var n, r = pt(e), t = rd(e), o = (n = e.ownerDocument) == null ? void 0 : n.body, a = co(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = co(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -t.scrollLeft + td(e), s = -t.scrollTop;
  return Xr(o || r).direction === "rtl" && (l += co(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function od(e) {
  var n = Xr(e), r = n.overflow, t = n.overflowX, o = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + t);
}
function _p(e) {
  return [
    "html",
    "body",
    "#document"
  ].indexOf(Vr(e)) >= 0 ? e.ownerDocument.body : hr(e) && od(e) ? e : _p(Qa(e));
}
function fo(e, n) {
  var r;
  n === void 0 && (n = []);
  var t = _p(e), o = t === ((r = e.ownerDocument) == null ? void 0 : r.body), a = pr(t), i = o ? [a].concat(a.visualViewport || [], od(t) ? t : []) : t, l = n.concat(i);
  return o ? l : l.concat(fo(Qa(i)));
}
function Yw(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n)) return !0;
  if (r && ed(r)) {
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
function Ww(e, n) {
  var r = jt(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function cc(e, n, r) {
  return n === "viewport" ? is(Uw(e, r)) : $t(n) ? Ww(n, r) : is(jw(pt(e)));
}
function Kw(e) {
  var n = fo(Qa(e)), r = ["absolute", "fixed"].indexOf(Xr(e).position) >= 0 && hr(e) ? nd(e) : e;
  return $t(r) ? n.filter(function(t) {
    return $t(t) && Yw(t, r) && Vr(t) !== "body";
  }) : [];
}
function qw(e, n, r, t) {
  var o = n === "clippingParents" ? Kw(e) : [].concat(n), a = [].concat(o, [r]), i = a[0], l = a.reduce(function(s, u) {
    var d = cc(e, u, t);
    return s.top = co(d.top, s.top), s.right = sc(d.right, s.right), s.bottom = sc(d.bottom, s.bottom), s.left = co(d.left, s.left), s;
  }, cc(e, i, t));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Xw(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function em(e) {
  var n = e.reference, r = e.element, t = e.placement, o = t ? it(t) : null, a = t ? wo(t) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (o) {
    case "top":
      s = {
        x: i,
        y: n.y - r.height
      };
      break;
    case yo:
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
function nm(e, n) {
  n === void 0 && (n = {});
  var r = n, t = r.placement, o = t === void 0 ? e.placement : t, a = r.strategy, i = a === void 0 ? e.strategy : a, l = r.boundary, s = l === void 0 ? kw : l, u = r.rootBoundary, d = u === void 0 ? $w : u, c = r.elementContext, f = c === void 0 ? ac : c, v = r.altBoundary, g = v === void 0 ? !1 : v, h = r.padding, m = h === void 0 ? 0 : h, w = Zw(typeof m != "number" ? m : Jw(m, Za)), $ = f === "popper" ? Sw : ac, y = e.rects.popper, z = e.elements[g ? $ : f], T = qw($t(z) ? z : z.contextElement || pt(e.elements.popper), s, d, i), P = jt(e.elements.reference), R = em({
    reference: P,
    element: y,
    strategy: "absolute",
    placement: o
  }), H = is(Object.assign({}, y, R)), A = f === "popper" ? H : P, I = {
    top: T.top - A.top + w.top,
    bottom: A.bottom - T.bottom + w.bottom,
    left: T.left - A.left + w.left,
    right: A.right - T.right + w.right
  }, E = e.modifiersData.offset;
  if (f === "popper" && E) {
    var B = E[o];
    Object.keys(I).forEach(function(N) {
      var M = ["right", "bottom"].indexOf(N) >= 0 ? 1 : -1, D = ["top", "bottom"].indexOf(N) >= 0 ? "y" : "x";
      I[N] += B[D] * M;
    });
  }
  return I;
}
function Qw(e, n) {
  n === void 0 && (n = {});
  var r = n, t = r.placement, o = r.boundary, a = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Jp : s, d = wo(t), c = d ? l ? ic : ic.filter(function(g) {
    return wo(g) === d;
  }) : Za, f = c.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = c);
  var v = f.reduce(function(g, h) {
    return g[h] = nm(e, {
      placement: h,
      boundary: o,
      rootBoundary: a,
      padding: i
    })[it(h)], g;
  }, {});
  return Object.keys(v).sort(function(g, h) {
    return v[g] - v[h];
  });
}
function xw(e) {
  if (it(e) === "auto") return [];
  var n = sa(e);
  return [
    dc(e),
    n,
    dc(n)
  ];
}
function _w(e) {
  var n = e.state, r = e.options, t = e.name;
  if (!n.modifiersData[t]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, c = r.rootBoundary, f = r.altBoundary, v = r.flipVariations, g = v === void 0 ? !0 : v, h = r.allowedAutoPlacements, m = n.options.placement, w = it(m) === m, $ = s || (w || !g ? [sa(m)] : xw(m)), y = [m].concat($).reduce(function(Q, ne) {
      return Q.concat(it(ne) === "auto" ? Qw(n, {
        placement: ne,
        boundary: d,
        rootBoundary: c,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: h
      }) : ne);
    }, []), z = n.rects.reference, T = n.rects.popper, P = /* @__PURE__ */ new Map(), R = !0, H = y[0], A = 0; A < y.length; A++) {
      var I = y[A], E = it(I), B = wo(I) === Ja, N = ["top", yo].indexOf(E) >= 0, M = N ? "width" : "height", D = nm(n, {
        placement: I,
        boundary: d,
        rootBoundary: c,
        altBoundary: f,
        padding: u
      }), j = N ? B ? Xa : Ga : B ? yo : "top";
      z[M] > T[M] && (j = sa(j));
      var K = sa(j), G = [];
      if (a && G.push(D[E] <= 0), l && G.push(D[j] <= 0, D[K] <= 0), G.every(function(Q) {
        return Q;
      })) {
        H = I, R = !1;
        break;
      }
      P.set(I, G);
    }
    if (R)
      for (var ce = g ? 3 : 1, ge = function(ne) {
        var pe = y.find(function($e) {
          var W = P.get($e);
          if (W) return W.slice(0, ne).every(function(ae) {
            return ae;
          });
        });
        if (pe)
          return H = pe, "break";
      }, de = ce; de > 0 && ge(de) !== "break"; de--) ;
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
  var t = it(e), o = ["left", "top"].indexOf(t) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, n, { placement: e })) : r, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * o, ["left", "right"].indexOf(t) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function rk(e) {
  var n = e.state, r = e.options, t = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, i = Jp.reduce(function(d, c) {
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
  return e === pr(e) || !hr(e) ? rd(e) : ok(e);
}
function ik(e) {
  var n = e.getBoundingClientRect(), r = Ut(n.width) / e.offsetWidth || 1, t = Ut(n.height) / e.offsetHeight || 1;
  return r !== 1 || t !== 1;
}
function lk(e, n, r) {
  r === void 0 && (r = !1);
  var t = hr(n), o = hr(n) && ik(n), a = pt(n), i = jt(e, o, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (t || !t && !r) && ((Vr(n) !== "body" || od(a)) && (l = ak(n)), hr(n) ? (s = jt(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = td(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function sk(e) {
  var n = jt(e), r = e.offsetWidth, t = e.offsetHeight;
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
var fc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function vc() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
  return !n.some(function(t) {
    return !(t && typeof t.getBoundingClientRect == "function");
  });
}
function vk(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, t = r === void 0 ? [] : r, o = n.defaultOptions, a = o === void 0 ? fc : o;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var d = {
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
    }, c = [], f = !1, v = {
      state: d,
      setOptions: function(w) {
        var $ = typeof w == "function" ? w(d.options) : w;
        h(), d.options = Object.assign({}, a, d.options, $), d.scrollParents = {
          reference: $t(l) ? fo(l) : l.contextElement ? fo(l.contextElement) : [],
          popper: fo(s)
        };
        var y = dk(fk([].concat(t, d.options.modifiers)));
        return d.orderedModifiers = y.filter(function(z) {
          return z.enabled;
        }), g(), v.update();
      },
      forceUpdate: function() {
        if (!f) {
          var w = d.elements, $ = w.reference, y = w.popper;
          if (vc($, y)) {
            d.rects = {
              reference: lk($, nd(y), d.options.strategy === "fixed"),
              popper: sk(y)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(I) {
              return d.modifiersData[I.name] = Object.assign({}, I.data);
            });
            for (var z = 0; z < d.orderedModifiers.length; z++) {
              if (d.reset === !0) {
                d.reset = !1, z = -1;
                continue;
              }
              var T = d.orderedModifiers[z], P = T.fn, R = T.options, H = R === void 0 ? {} : R, A = T.name;
              typeof P == "function" && (d = P({
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
    if (!vc(l, s)) return v;
    v.setOptions(u).then(function(m) {
      !f && u.onFirstUpdate && u.onFirstUpdate(m);
    });
    function g() {
      d.orderedModifiers.forEach(function(m) {
        var w = m.name, $ = m.options, y = $ === void 0 ? {} : $, z = m.effect;
        if (typeof z == "function") {
          var T = z({
            state: d,
            name: w,
            instance: v,
            options: y
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
  n.modifiersData[r] = em({
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
  Qp,
  wk
], $k = /* @__PURE__ */ vk({ defaultModifiers: kk }), Sk = Object.defineProperty, Ck = Object.defineProperties, Pk = Object.getOwnPropertyDescriptors, pc = Object.getOwnPropertySymbols, Ok = Object.prototype.hasOwnProperty, zk = Object.prototype.propertyIsEnumerable, mc = (e, n, r) => n in e ? Sk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ll = (e, n) => {
  for (var r in n || (n = {})) Ok.call(n, r) && mc(e, r, n[r]);
  if (pc)
    for (var r of pc(n)) zk.call(n, r) && mc(e, r, n[r]);
  return e;
}, Fl = (e, n) => Ck(e, Pk(n)), gc = (e, n, r) => new Promise((t, o) => {
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
function rm(e) {
  const n = O(null), r = O(null), t = O({
    width: 0,
    height: 0
  }), o = yn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(K, G) {
      C(G ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = Ao(() => o.value, 1);
  Gu(() => o.value, a);
  let i = null, l, s = !1, u = !1, d = 0, c = !0;
  xe(() => window, "keydown", N), me(() => [
    e.offsetX,
    e.offsetY,
    e.placement,
    e.strategy
  ], M), me(() => e.disabled, j), me(() => o.value, (K) => {
    K && M();
  }), wr(M), Tr(f), Xt(v);
  function f() {
    const K = I();
    i = $k(K, r.value, A()), K.addEventListener("mouseenter", m), K.addEventListener("mouseleave", w), K.addEventListener("click", z), document.addEventListener("click", T);
  }
  function v() {
    const K = I();
    K && (K.removeEventListener("mouseenter", m), K.removeEventListener("mouseleave", w), K.removeEventListener("click", z)), i.destroy(), document.removeEventListener("click", T);
  }
  function g() {
    const K = I();
    if (!K) return;
    const { width: G, height: ce } = Ur(K);
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
    e.trigger === "hover" && (u = !0, d++, D());
  }
  function w() {
    return gc(this, null, function* () {
      if (e.trigger !== "hover") return;
      u = !1;
      const K = ++d;
      yield Gn(), !(K !== d || u || s) && j();
    });
  }
  function $() {
    e.trigger === "hover" && (s = !0, d++, e.cascadeOptimization && (c = !1));
  }
  function y() {
    return gc(this, null, function* () {
      if (e.trigger !== "hover") return;
      s = !1;
      const K = ++d;
      yield Gn(), !(K !== d || u || s) && j();
    });
  }
  function z() {
    if (e.trigger === "click") {
      if (e.closeOnClickReference && o.value) {
        j();
        return;
      }
      D();
    }
  }
  function T(K) {
    const G = I();
    if (G && !G.contains(K.target)) {
      if (e.trigger !== "click") return;
      P(), C(e.onClickOutside, K);
    }
  }
  function P() {
    j();
  }
  function R() {
    M(), C(e.onClosed);
  }
  function H() {
    const { offsetX: K, offsetY: G, placement: ce } = e;
    g();
    const ge = {
      x: fn(K),
      y: fn(G)
    };
    switch (ce) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: ge.x,
          distance: ge.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: ge.x,
          distance: ge.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: ge.x,
          distance: ge.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: ge.x,
          distance: -ge.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: ge.x,
          distance: -ge.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: ge.x,
          distance: -ge.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: ge.y,
          distance: ge.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: ge.y,
          distance: -ge.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: ce,
          skidding: ge.y,
          distance: -ge.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: ce,
          skidding: ge.x,
          distance: -ge.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: ce,
          skidding: ge.x,
          distance: ge.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: ce,
          skidding: ge.y,
          distance: ge.x
        };
    }
  }
  function A() {
    const { placement: K, skidding: G, distance: ce } = H();
    return {
      placement: K,
      modifiers: [
        Fl(Ll({}, ek), { enabled: o.value }),
        Fl(Ll({}, tk), { options: { offset: [G, ce] } }),
        Fl(Ll({}, Qp), {
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
          fn({ state: ge }) {
            ge.styles.popper.transformOrigin = h();
          }
        }
      ],
      strategy: e.strategy
    };
  }
  function I() {
    var K, G;
    const ce = (K = l ?? e.reference) != null ? K : n.value;
    return Pn(ce) ? (G = n.value) == null ? void 0 : G.querySelector(ce) : ce;
  }
  function E(K) {
    c = K;
  }
  function B(K) {
    v(), l = K, f();
  }
  function N(K) {
    const { closeOnKeyEscape: G = !1 } = e;
    K.key === "Escape" && G && o.value && (Ze(K), j());
  }
  function M() {
    i.setOptions(A());
  }
  function D() {
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
    handlePopoverClose: P,
    handlePopoverMouseenter: $,
    handlePopoverMouseleave: y,
    handleClosed: R,
    setReference: B,
    setAllowClose: E,
    resize: M,
    open: D,
    close: j
  };
}
var { name: Tk, n: Ek, classes: Bk } = oe("menu");
function Dk(e, n) {
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
    default: se(() => [We(L("div", {
      ref: "popover",
      style: J({
        zIndex: e.zIndex,
        width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.referenceSize.width)) : void 0
      }),
      class: p(e.classes(e.n("menu"), e.n("$--box"), e.n("$--scrollbar"), [e.radius !== "normal", e.n(`--radius-${e.radius}`)], e.popoverClass, [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
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
var tm = te({
  name: Tk,
  props: _u,
  setup(e) {
    const { disabled: n } = Tt(), { popover: r, host: t, referenceSize: o, show: a, zIndex: i, handlePopoverMouseenter: l, handlePopoverMouseleave: s, handlePopoverClose: u, handleClosed: d, setAllowClose: c, open: f, close: v, resize: g, setReference: h } = rm(e);
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
      formatElevation: zn,
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
tm.render = Dk;
var Fo = tm;
ue(Fo);
fe(Fo, _u);
var LA = Fo, Yt = Fo;
function om(e) {
  const { multiple: n, modelValue: r, optionProviders: t, optionProvidersLength: o, optionIsIndeterminate: a } = e, i = O(""), l = O([]);
  me(r, f, { deep: !0 }), me(o, f);
  function s() {
    const v = n(), g = r();
    v && (l.value = g.map(u)), !v && !Or(g) && (i.value = u(g)), !v && Or(g) && (i.value = "");
  }
  function u(v) {
    var g;
    const h = t();
    let m = h.find(({ value: w }) => w.value === v);
    return m || (m = h.find(({ label: w }) => w.value === v)), (g = m?.label.value) != null ? g : "";
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
var Ik = Object.defineProperty, Mk = Object.defineProperties, Ak = Object.getOwnPropertyDescriptors, hc = Object.getOwnPropertySymbols, Nk = Object.prototype.hasOwnProperty, Rk = Object.prototype.propertyIsEnumerable, bc = (e, n, r) => n in e ? Ik(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Vk = (e, n) => {
  for (var r in n || (n = {})) Nk.call(n, r) && bc(e, r, n[r]);
  if (hc)
    for (var r of hc(n)) Rk.call(n, r) && bc(e, r, n[r]);
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
}, Fe(_u, [
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
  "radius",
  "elevation",
  "popoverClass",
  "closeOnClickReference",
  "onOpen",
  "onOpened",
  "onClose",
  "onClosed",
  "onClickOutside",
  "onUpdate:show"
])), { onKeyEscape: V() }), Fk = Object.defineProperty, yc = Object.getOwnPropertySymbols, Hk = Object.prototype.hasOwnProperty, Uk = Object.prototype.propertyIsEnumerable, wc = (e, n, r) => n in e ? Fk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, jk = (e, n) => {
  for (var r in n || (n = {})) Hk.call(n, r) && wc(e, r, n[r]);
  if (yc)
    for (var r of yc(n)) Uk.call(n, r) && wc(e, r, n[r]);
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
}), { name: Wk, n: Kk } = oe("menu-children");
function qk(e, n) {
  const r = x("var-menu-option"), t = x("var-menu-children"), o = x("var-menu");
  return b(), ke(o, {
    ref: "menu",
    show: e.show,
    "onUpdate:show": n[1] || (n[1] = (a) => e.show = a),
    trigger: "hover",
    placement: "right-start",
    "cascade-optimization": "",
    "var-menu-children-cover": "",
    class: p([e.n(), e.radius !== "normal" ? e.n(`--menu-radius-${e.radius}`) : void 0]),
    disabled: e.disabled,
    radius: e.radius,
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
    fn: se(() => [L("div", qe({ ref: "menuOptions" }, e.radius !== "normal" ? { class: e.n(`--radius-${e.radius}`) } : {}), [(b(!0), k(De, null, Ye(e.options, (a) => (b(), k(De, { key: a[e.valueKey] }, [a[e.childrenKey] ? (b(), ke(t, {
      key: 0,
      ref_for: !0,
      ref: "menuChildren",
      "parent-show": e.show,
      option: a,
      options: a[e.childrenKey],
      "highlight-options": e.highlightOptions,
      disabled: a.disabled,
      radius: e.radius,
      onKeyArrowX: e.handleArrowLeft,
      onKeyArrowRightOpen: (i) => e.allowChildrenClose(a),
      onMouseenter: (i) => e.allowChildrenClose(a)
    }, null, 8, [
      "parent-show",
      "option",
      "options",
      "highlight-options",
      "disabled",
      "radius",
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
    ]))], 64))), 128))], 16)]),
    key: "0"
  } : void 0]), 1032, [
    "show",
    "class",
    "disabled",
    "radius"
  ]);
}
var am = te({
  name: Wk,
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
    "childrenKey",
    "radius"
  ])),
  setup(e) {
    const n = O(!1), r = O(), t = O(), o = O(), a = O();
    me(() => e.parentShow, (f) => {
      f || (n.value = !1);
    }, { immediate: !0 });
    function i(f) {
      return Yk(this, null, function* () {
        var v;
        C(e.onKeyArrowX, f), f === "ArrowRight" && (C(e.onKeyArrowRightOpen), (v = r.value) == null || v.open(), yield qr(), Qu(r.value.$el, o.value, "ArrowDown"));
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
      n: Kk,
      close: s,
      handleArrowLeft: l,
      handleArrowRight: i,
      handleMouseenter: c,
      allowClose: u,
      allowChildrenClose: d
    };
  }
});
am.render = qk;
var Xk = am, Gk = Object.defineProperty, Zk = Object.defineProperties, Jk = Object.getOwnPropertyDescriptors, kc = Object.getOwnPropertySymbols, Qk = Object.prototype.hasOwnProperty, xk = Object.prototype.propertyIsEnumerable, $c = (e, n, r) => n in e ? Gk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, _k = (e, n) => {
  for (var r in n || (n = {})) Qk.call(n, r) && $c(e, r, n[r]);
  if (kc)
    for (var r of kc(n)) xk.call(n, r) && $c(e, r, n[r]);
  return e;
}, e$ = (e, n) => Zk(e, Jk(n)), { name: n$, n: r$, classes: t$ } = oe("menu-select");
function o$(e, n) {
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
    radius: e.radius,
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
      class: p(e.classes(e.n("menu"), e.n("$--scrollbar"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")], [e.radius !== "normal", e.n(`--radius-${e.radius}`)]))
    }, [(b(!0), k(De, null, Ye(e.options, (a) => (b(), k(De, { key: a[e.valueKey] }, [a[e.childrenKey] ? (b(), ke(r, {
      key: 0,
      ref_for: !0,
      ref: "menuChildren",
      "parent-show": e.show,
      option: a,
      options: a[e.childrenKey],
      "highlight-options": e.highlightOptions,
      disabled: a.disabled,
      radius: e.radius,
      onKeyArrowRightOpen: (i) => e.allowChildrenClose(a),
      onMouseenter: (i) => e.allowChildrenClose(a)
    }, null, 8, [
      "parent-show",
      "option",
      "options",
      "highlight-options",
      "disabled",
      "radius",
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
    "radius",
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
var im = te({
  name: n$,
  components: {
    VarMenu: Yt,
    VarMenuOption: Ht,
    VarMenuChildren: Xk
  },
  props: ya,
  setup(e) {
    const n = yn(e, "show"), r = O(), t = O(), o = O(), a = S(() => $(e.options)), { menuOptions: i, length: l, bindMenuOptions: s } = fw(), { computeLabel: u, getSelectedValue: d, getOptionProviderKey: c } = om({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => i,
      optionProvidersLength: () => l.value,
      optionIsIndeterminate(B) {
        var N;
        const M = g(B.value.value);
        if (!M) return !1;
        const D = ((N = M._children) != null ? N : []).filter((K) => !K.disabled), j = D.filter((K) => e.modelValue.includes(K.value));
        return j.length > 0 && j.length < D.length;
      }
    }), f = S(() => {
      const { multiple: B, modelValue: N } = e;
      if (B) return [];
      const M = a.value.find((K) => K.value === N), D = [];
      let j = M?._parent;
      for (; j; )
        D.push(j), j = j._parent;
      return D;
    });
    s({
      size: S(() => e.size),
      multiple: S(() => e.multiple),
      computeLabel: u,
      onSelect: y
    }), me(n, (B) => {
      B && Ne(v);
    }), xe(() => window, "keydown", T);
    function v() {
      const B = t.value;
      Tp(B, B?.querySelector(".var-menu-option--selected-color"));
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
    function w(B) {
      const N = [];
      M(B);
      function M(D) {
        D.forEach((j) => {
          N.push(j);
          const K = m(j);
          K && M(K);
        });
      }
      return N;
    }
    function $(B) {
      function N(M, D) {
        return M.map((j) => {
          j = e$(_k({}, j), { _rawOption: j }), D && (j._parent = D);
          const K = m(j);
          if (K) {
            const G = N(K, j);
            j[e.childrenKey] = G, j._children = w(G);
          }
          return j;
        });
      }
      return w(N(B));
    }
    function y(B) {
      var N, M;
      const { multiple: D, closeOnSelect: j } = e, { value: K, label: G, selected: ce, disabled: ge, ripple: de } = B, Q = g(K.value);
      if (Q) {
        const $e = ((N = Q._children) != null ? N : []).filter((W) => !W.disabled).map((W) => W.value);
        D && ce.value && (i.forEach((W) => {
          $e.includes(W.value.value) && W.sync(!0, !1);
        }), z(Q)), D && !ce.value && (i.forEach((W) => {
          $e.includes(W.value.value) && W.sync(!1, !1);
        }), z(Q));
      }
      const ne = d(B), pe = (M = Q?._rawOption) != null ? M : {
        value: K.value,
        label: G.value,
        disabled: ge.value,
        ripple: de.value
      };
      C(e.onSelect, c(B), pe), C(e["onUpdate:modelValue"], ne), !D && j && (r.value.$el.focus(), A());
    }
    function z(B) {
      let N = B._parent;
      for (; N; ) {
        const M = h(N.value), D = m(N).filter((G) => !G.disabled), j = D.every((G) => !h(G.value).selected.value), K = D.every((G) => h(G.value).selected.value);
        j ? M.sync(!1, !1) : K ? M.sync(!0, !1) : M.sync(!1, !0), N = N._parent;
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
      (N === "ArrowDown" || N === "ArrowUp") && Qu(r.value.$el, t.value, N, (M, D, j) => j ? !0 : P(M) === P(D));
    }
    function P(B) {
      var N, M;
      if (B.classList.contains("var-menu-option--children-trigger")) return (N = B.parentNode) == null ? void 0 : N.parentNode;
      if (B.classList.contains("var-checkbox")) {
        const D = (M = B.parentNode) == null ? void 0 : M.parentNode;
        if (D) return P(D);
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
    function I() {
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
      n: r$,
      classes: t$,
      allowChildrenClose: R,
      formatElevation: zn,
      open: H,
      close: A,
      resize: I,
      setReference: E
    };
  }
});
im.render = o$;
var xa = im;
ue(xa);
fe(xa, ya);
var FA = xa, Wt = xa, a$ = Object.defineProperty, Sc = Object.getOwnPropertySymbols, i$ = Object.prototype.hasOwnProperty, l$ = Object.prototype.propertyIsEnumerable, Cc = (e, n, r) => n in e ? a$(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, s$ = (e, n) => {
  for (var r in n || (n = {})) i$.call(n, r) && Cc(e, r, n[r]);
  if (Sc)
    for (var r of Sc(n)) l$.call(n, r) && Cc(e, r, n[r]);
  return e;
}, lm = s$({
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
  menuRadius: {
    type: String,
    default: "normal"
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
}, Fe(Ka, [
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
])), Pc = (e, n, r) => new Promise((t, o) => {
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
}), { name: u$, n: d$ } = oe("auto-complete"), c$ = ["tabindex"];
function f$(e, n) {
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
    radius: e.menuRadius,
    disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
    class: p(e.n("menu-select")),
    "popover-class": e.variant === "standard" ? e.n("--standard-menu-margin") : e.variant === "filled" ? e.n("--filled-menu-margin") : "",
    "onUpdate:modelValue": e.handleAutoComplete,
    onKeyEscape: e.handleKeyEscape
  }, {
    options: se(() => [L("div", { class: p(e.n("options")) }, [(b(!0), k(De, null, Ye(e.viewOptions, (i) => (b(), ke(t, {
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
    default: se(() => [U(r, qe({ ref: "input" }, {
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
    "radius",
    "disabled",
    "class",
    "popover-class",
    "onUpdate:modelValue",
    "onKeyEscape"
  ]), U(a, {
    "error-message": e.errorMessage,
    "extra-message": e.maxlengthText
  }, null, 8, ["error-message", "extra-message"])], 42, c$);
}
var sm = te({
  name: u$,
  components: {
    VarInput: Ft,
    VarMenuSelect: Wt,
    VarMenuOption: Ht,
    VarFormDetails: Hn
  },
  props: lm,
  setup(e) {
    const n = O(), r = O(), t = O(!1), o = yn(e, "modelValue"), a = O([]), i = O(!1), l = S(() => {
      const { maxlength: D } = e;
      return D ? Or(o.value) ? `0 / ${D}` : `${String(o.value).length}/${D}` : "";
    }), { errorMessage: s, validateWithTrigger: u, validate: d, resetValidation: c } = xn(), { bindForm: f, form: v } = Wn();
    let g = !1;
    const h = {
      reset: m,
      resetValidation: c,
      validate: w
    };
    ep(() => n.value, "click", () => {
      if (g) {
        g = !1;
        return;
      }
      y();
    }), me(() => [e.options, t.value], R), C(f, h), xe(() => window, "keydown", P);
    function m() {
      C(e["onUpdate:modelValue"], ""), c();
    }
    function w() {
      return d(e.rules, e.modelValue);
    }
    function $() {
      t.value || e.disabled || v?.disabled.value || (t.value = !0, r.value.focus(), C(e.onFocus), T("onFocus"));
    }
    function y() {
      t.value && (t.value = !1, i.value = !1, r.value.blur(), C(e.onBlur), T("onBlur"));
    }
    function z() {
      i.value || y();
    }
    function T(D) {
      Ne(() => {
        const { validateTrigger: j, rules: K, modelValue: G } = e;
        u(j, D, K, G);
      });
    }
    function P(D) {
      return Pc(this, null, function* () {
        var j;
        if (v?.disabled.value || v?.readonly.value || e.disabled || e.readonly || !t.value || !i.value) return;
        const { key: K } = D;
        if (K === "Tab") {
          Ze(D), n.value.focus(), i.value = !1;
          return;
        }
        if (![
          "ArrowUp",
          "ArrowDown",
          "Enter"
        ].includes(K)) {
          r.value.focus();
          return;
        }
        K === "Enter" && (yield qr(), (j = r.value) == null || j.focus());
      });
    }
    function R() {
      t.value && (i.value = M(o.value)), i.value && (a.value = e.options);
    }
    function H(D, j) {
      R(), C(e.onInput, D, j), T("onInput");
    }
    function A() {
      g = !0, R(), C(e.onClear, o.value), T("onClear");
    }
    function I(D) {
      e.disabled || v?.disabled.value || (C(e.onClick, D), T("onClick"));
    }
    function E(D) {
      C(e.onChange, D), T("onChange");
    }
    function B(D) {
      return Pc(this, null, function* () {
        var j;
        e.maxlength != null && (D = D.slice(0, Z(e.maxlength))), D !== o.value && (o.value = D, C(e.onChange, D), T("onChange")), yield qr(), (j = r.value) == null || j.focus();
      });
    }
    function N() {
      r.value.focus();
    }
    function M(D) {
      return e.disabled || e.readonly || v?.disabled.value || v?.readonly.value ? !1 : e.options.length > 0 && (e.getShow != null ? e.getShow(D) : D.length > 0);
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
      n: d$,
      handleInput: H,
      handleClear: A,
      handleClick: I,
      handleChange: E,
      handleBlur: z,
      handleKeyEscape: N,
      handleAutoComplete: B,
      reset: m,
      validate: w,
      resetValidation: c,
      blur: y,
      focus: $
    };
  }
});
sm.render = f$;
var _a = sm;
ue(_a);
fe(_a, lm);
var HA = _a, ls = _a;
var um = 3600, dm = um * 24, v$ = dm * 7, Ho = 1e3, Oc = 60 * Ho, p$ = um * Ho, m$ = dm * Ho, g$ = v$ * Ho, cm = "millisecond", ua = "second", da = "minute", ca = "hour";
var zc = "week", nt = "month", h$ = "quarter", ao = "year", io = "date";
var b$ = "Invalid Date", y$ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w$ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, k$ = {
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
}, $$ = function(n) {
  var r = -n.utcOffset(), t = Math.abs(r), o = Math.floor(t / 60), a = t % 60;
  return (r <= 0 ? "+" : "-") + ss(o, 2, "0") + ":" + ss(a, 2, "0");
}, S$ = function e(n, r) {
  if (n.date() < r.date()) return -e(r, n);
  var t = (r.year() - n.year()) * 12 + (r.month() - n.month()), o = n.clone().add(t, nt), a = r - o < 0, i = n.clone().add(t + (a ? -1 : 1), nt);
  return +(-(t + (r - o) / (a ? o - i : i - o)) || 0);
}, C$ = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, P$ = function(n) {
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
}, O$ = function(n) {
  return n === void 0;
}, z$ = {
  s: ss,
  z: $$,
  m: S$,
  a: C$,
  p: P$,
  u: O$
}, vo = "en", wt = {};
wt[vo] = k$;
var fm = "$isDayjsObject", ad = function(n) {
  return n instanceof ei || !!(n && n[fm]);
}, wa = function e(n, r, t) {
  var o;
  if (!n) return vo;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    wt[a] && (o = a), r && (wt[a] = r, o = a);
    var i = n.split("-");
    if (!o && i.length > 1) return e(i[0]);
  } else {
    var l = n.name;
    wt[l] = n, o = l;
  }
  return !t && o && (vo = o), o || !t && vo;
}, ln = function(n, r) {
  if (ad(n)) return n.clone();
  var t = typeof r == "object" ? r : {};
  return t.date = n, t.args = arguments, new ei(t);
}, T$ = function(n, r) {
  return ln(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, dn = z$;
dn.l = wa;
dn.i = ad;
dn.w = T$;
var E$ = function(n) {
  var r = n.date, t = n.utc;
  if (r === null) return /* @__PURE__ */ new Date(NaN);
  if (dn.u(r)) return /* @__PURE__ */ new Date();
  if (r instanceof Date) return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var o = r.match(y$);
    if (o) {
      var a = o[2] - 1 || 0, i = (o[7] || "0").substring(0, 3);
      return t ? new Date(Date.UTC(o[1], a, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, i)) : new Date(o[1], a, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, i);
    }
  }
  return new Date(r);
}, ei = /* @__PURE__ */ (function() {
  function e(r) {
    this.$L = wa(r.locale, null, !0), this.parse(r), this.$x = this.$x || r.x || {}, this[fm] = !0;
  }
  var n = e.prototype;
  return n.parse = function(t) {
    this.$d = E$(t), this.init();
  }, n.init = function() {
    var t = this.$d;
    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
  }, n.$utils = function() {
    return dn;
  }, n.isValid = function() {
    return this.$d.toString() !== b$;
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
    var a = this, i = dn.u(o) ? !0 : o, l = dn.p(t), s = function(w, $) {
      var y = dn.w(a.$u ? Date.UTC(a.$y, $, w) : new Date(a.$y, $, w), a);
      return i ? y : y.endOf("day");
    }, u = function(w, $) {
      return dn.w(a.toDate()[w].apply(a.toDate("s"), (i ? [
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
      case ao:
        return i ? s(1, 0) : s(31, 11);
      case nt:
        return i ? s(1, c) : s(0, c + 1);
      case zc:
        var g = this.$locale().weekStart || 0, h = (d < g ? d + 7 : d) - g;
        return s(i ? f - h : f + (6 - h), c);
      case "day":
      case io:
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
    var a, i = dn.p(t), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a.day = l + "Date", a[io] = l + "Date", a[nt] = l + "Month", a[ao] = l + "FullYear", a[ca] = l + "Hours", a[da] = l + "Minutes", a[ua] = l + "Seconds", a[cm] = l + "Milliseconds", a)[i], u = i === "day" ? this.$D + (o - this.$W) : o;
    if (i === "month" || i === "year") {
      var d = this.clone().set(io, 1);
      d.$d[s](u), d.init(), this.$d = d.set(io, Math.min(this.$D, d.daysInMonth())).$d;
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
    if (l === "month") return this.set(nt, this.$M + t);
    if (l === "year") return this.set(ao, this.$y + t);
    if (l === "day") return s(1);
    if (l === "week") return s(7);
    var u = (i = {}, i.minute = 6e4, i.hour = 36e5, i.second = 1e3, i)[l] || 1, d = this.$d.getTime() + t * u;
    return dn.w(d, this);
  }, n.subtract = function(t, o) {
    return this.add(t * -1, o);
  }, n.format = function(t) {
    var o = this, a = this.$locale();
    if (!this.isValid()) return a.invalidDate || "Invalid Date";
    var i = t || "YYYY-MM-DDTHH:mm:ssZ", l = dn.z(this), s = this.$H, u = this.$m, d = this.$M, c = a.weekdays, f = a.months, v = a.meridiem, g = function(y, z, T, P) {
      return y && (y[z] || y(o, i)) || T[z].slice(0, P);
    }, h = function(y) {
      return dn.s(s % 12 || 12, y, "0");
    }, m = v || function($, y, z) {
      var T = $ < 12 ? "AM" : "PM";
      return z ? T.toLowerCase() : T;
    }, w = function(y) {
      switch (y) {
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
      }
      return null;
    };
    return i.replace(w$, function($, y) {
      return y || w($) || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(t, o, a) {
    var i = this, l = dn.p(o), s = ln(t), u = (s.utcOffset() - this.utcOffset()) * Oc, d = this - s, c = function() {
      return dn.m(i, s);
    }, f;
    switch (l) {
      case ao:
        f = c() / 12;
        break;
      case nt:
        f = c();
        break;
      case h$:
        f = c() / 3;
        break;
      case zc:
        f = (d - u) / g$;
        break;
      case "day":
        f = (d - u) / m$;
        break;
      case ca:
        f = d / p$;
        break;
      case da:
        f = d / Oc;
        break;
      case ua:
        f = d / Ho;
        break;
      default:
        f = d;
    }
    return a ? f : dn.a(f);
  }, n.daysInMonth = function() {
    return this.endOf(nt).$D;
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
})(), vm = ei.prototype;
ln.prototype = vm;
[
  ["$ms", cm],
  ["$s", ua],
  ["$m", da],
  ["$H", ca],
  ["$W", "day"],
  ["$M", nt],
  ["$y", ao],
  ["$D", io]
].forEach(function(e) {
  vm[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ln.extend = function(e, n) {
  return e.$i || (e(n, ei, ln), e.$i = !0), ln;
};
ln.locale = wa;
ln.isDayjs = ad;
ln.unix = function(e) {
  return ln(e * 1e3);
};
ln.en = wt[vo];
ln.Ls = wt;
ln.p = {};
var B$ = function(n) {
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
}, I$ = function(n, r) {
  return n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t, o, a) {
    var i = a && a.toUpperCase();
    return o || r[a] || D$[a] || B$(r[i]);
  });
}, M$ = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, Tc = /\d/, ro = /\d\d/, A$ = /\d{3}/, N$ = /\d{4}/, Cr = /\d\d?/, R$ = /[+-]?\d+/, V$ = /[+-]\d\d:?(\d\d)?|Z/, to = /\d*[^-_:/,()\s\d]+/, lt = {}, pm = function(n) {
  return n = +n, n + (n > 68 ? 1900 : 2e3);
};
function L$(e) {
  if (!e || e === "Z") return 0;
  var n = e.match(/([+-]|\d\d)/g), r = +(n[1] * 60) + (+n[2] || 0);
  return r === 0 ? 0 : n[0] === "+" ? -r : r;
}
var qn = function(n) {
  return function(r) {
    this[n] = +r;
  };
}, Ec = [V$, function(e) {
  var n = this.zone || (this.zone = {});
  n.offset = L$(e);
}], Hl = function(n) {
  var r = lt[n];
  return r && (r.indexOf ? r : r.s.concat(r.f));
}, Bc = function(n, r) {
  var t, o = lt.meridiem;
  if (!o) t = n === (r ? "pm" : "PM");
  else for (var a = 1; a <= 24; a += 1) if (n.indexOf(o(a, 0, r)) > -1) {
    t = a > 12;
    break;
  }
  return t;
}, F$ = {
  A: [to, function(e) {
    this.afternoon = Bc(e, !1);
  }],
  a: [to, function(e) {
    this.afternoon = Bc(e, !0);
  }],
  Q: [Tc, function(e) {
    this.month = (e - 1) * 3 + 1;
  }],
  S: [Tc, function(e) {
    this.milliseconds = +e * 100;
  }],
  SS: [ro, function(e) {
    this.milliseconds = +e * 10;
  }],
  SSS: [A$, function(e) {
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
  DD: [ro, qn("day")],
  Do: [to, function(e) {
    var n = lt.ordinal, r = e.match(/\d+/);
    if (this.day = r[0], !!n)
      for (var t = 1; t <= 31; t += 1) n(t).replace(/\[|\]/g, "") === e && (this.day = t);
  }],
  w: [Cr, qn("week")],
  ww: [ro, qn("week")],
  M: [Cr, qn("month")],
  MM: [ro, qn("month")],
  MMM: [to, function(e) {
    var n = Hl("months"), r = (Hl("monthsShort") || n.map(function(t) {
      return t.slice(0, 3);
    })).indexOf(e) + 1;
    if (r < 1) throw new Error();
    this.month = r % 12 || r;
  }],
  MMMM: [to, function(e) {
    var n = Hl("months").indexOf(e) + 1;
    if (n < 1) throw new Error();
    this.month = n % 12 || n;
  }],
  Y: [R$, qn("year")],
  YY: [ro, function(e) {
    this.year = pm(e);
  }],
  YYYY: [N$, qn("year")],
  Z: Ec,
  ZZ: Ec
};
function H$(e) {
  var n = e.afternoon;
  if (n !== void 0) {
    var r = e.hours;
    n ? r < 12 && (e.hours += 12) : r === 12 && (e.hours = 0), delete e.afternoon;
  }
}
function U$(e) {
  e = I$(e, lt && lt.formats);
  for (var n = e.match(M$), r = n.length, t = 0; t < r; t += 1) {
    var o = n[t], a = F$[o], i = a && a[0], l = a && a[1];
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
    return H$(u), u;
  };
}
var j$ = function(n, r, t, o) {
  try {
    if (["x", "X"].indexOf(r) > -1) return /* @__PURE__ */ new Date((r === "X" ? 1e3 : 1) * n);
    var a = U$(r)(n), i = a.year, l = a.month, s = a.day, u = a.hours, d = a.minutes, c = a.seconds, f = a.milliseconds, v = a.zone, g = a.week, h = /* @__PURE__ */ new Date(), m = s || (!i && !l ? h.getDate() : 1), w = i || h.getFullYear(), $ = 0;
    i && !l || ($ = l > 0 ? l - 1 : h.getMonth());
    var y = u || 0, z = d || 0, T = c || 0, P = f || 0;
    if (v) return new Date(Date.UTC(w, $, m, y, z, T, P + v.offset * 60 * 1e3));
    if (t) return new Date(Date.UTC(w, $, m, y, z, T, P));
    var R = new Date(w, $, m, y, z, T, P);
    return g && (R = o(R).week(g).toDate()), R;
  } catch {
    return /* @__PURE__ */ new Date("");
  }
}, Y$ = (function(e, n, r) {
  r.p.customParseFormat = !0, e && e.parseTwoDigitYear && (pm = e.parseTwoDigitYear);
  var t = n.prototype, o = t.parse;
  t.parse = function(a) {
    var i = a.date, l = a.utc, s = a.args;
    this.$u = l;
    var u = s[1];
    if (typeof u == "string") {
      var d = s[2] === !0, c = s[3] === !0, f = d || c, v = s[2];
      c && (v = s[2]), lt = this.$locale(), !d && v && (lt = r.Ls[v]), this.$d = j$(i, u, l, r), this.init(), v && v !== !0 && (this.$L = this.locale(v).$L), f && i != this.format(u) && (this.$d = /* @__PURE__ */ new Date("")), lt = {};
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
}), K$ = (function(e, n) {
  n.prototype.isSameOrBefore = function(r, t) {
    return this.isSame(r, t) || this.isBefore(r, t);
  };
}), Dc = (e) => Pn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, Ic = (e) => Pn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, q$ = (e) => {
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
      this.has(r) && Vt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Mc = !1, Uo = () => (Mc || (ln.extend(Y$), ln.extend(W$), ln.extend(K$), Mc = !0), ln), us = (e) => e, Ac = (e) => e ** 3, mm = (e) => e < 0.5 ? Ac(e * 2) / 2 : 1 - Ac((1 - e) * 2) / 2, Gr = (e, n, r = "") => {
  if (e === void 0 && (e = ""), e.length >= n) return e;
  const t = n - e.length, o = Math.floor(t / r.length);
  return r.repeat(o) + r.slice(0, t % r.length) + e;
}, X$ = Object.defineProperty, Nc = Object.getOwnPropertySymbols, G$ = Object.prototype.hasOwnProperty, Z$ = Object.prototype.propertyIsEnumerable, Rc = (e, n, r) => n in e ? X$(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, J$ = (e, n) => {
  for (var r in n || (n = {})) G$.call(n, r) && Rc(e, r, n[r]);
  if (Nc)
    for (var r of Nc(n)) Z$.call(n, r) && Rc(e, r, n[r]);
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
}), Q$ = "background-image", x$ = "lazy-loading", _$ = "lazy-error", Vc = "lazy-attempt", eS = [
  "scroll",
  "wheel",
  "mousewheel",
  "resize",
  "animationend",
  "transitionend",
  "touchmove"
], ds = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Kt = [], ka = [], gm = q$(100), Mn = {
  loading: ds,
  error: ds,
  attempt: 3,
  throttleWait: 300,
  events: eS
}, id = Fu(jo, Mn.throttleWait);
function ri(e, n) {
  e._lazy.arg === Q$ ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function nS(e) {
  e._lazy.loading && ri(e, e._lazy.loading), jo();
}
function rS(e) {
  e._lazy.error && ri(e, e._lazy.error), e._lazy.state = "error", sd(e), jo();
}
function hm(e, n) {
  ri(e, n), e._lazy.state = "success", sd(e), jo();
}
function tS(e) {
  var n;
  ka.includes(e) || (ka.push(e), (n = Mn.events) == null || n.forEach((r) => {
    e.addEventListener(r, id, { passive: !0 });
  }));
}
function oS() {
  ka.forEach((e) => {
    var n;
    (n = Mn.events) == null || n.forEach((r) => {
      e.removeEventListener(r, id);
    });
  }), ka.length = 0;
}
function aS(e, n) {
  var r, t;
  const o = {
    loading: (r = e.getAttribute(x$)) != null ? r : Mn.loading,
    error: (t = e.getAttribute(_$)) != null ? t : Mn.error,
    attempt: e.getAttribute(Vc) ? Number(e.getAttribute(Vc)) : Mn.attempt
  };
  e._lazy = J$({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, o), ri(e, ds), C(Mn.filter, e._lazy);
}
function iS(e, n) {
  const r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, gm.add(n), hm(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? rS(e) : bm(e);
  });
}
function bm(e) {
  if (e._lazy.attemptLock) return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (gm.has(n)) {
    hm(e, n), e._lazy.attemptLock = !1;
    return;
  }
  nS(e), iS(e, n);
}
function ld(e) {
  return ni(this, null, function* () {
    yield Gn(), H0(e) && bm(e);
  });
}
function jo() {
  Kt.forEach((e) => ld(e));
}
function lS(e) {
  return ni(this, null, function* () {
    !Kt.includes(e) && Kt.push(e), Fy(e).forEach(tS), yield ld(e);
  });
}
function sd(e) {
  Vt(Kt, e), Kt.length === 0 && oS();
}
function sS(e, n) {
  const { src: r, arg: t } = e._lazy;
  return r !== n.value || t !== n.arg;
}
function ym(e, n) {
  return ni(this, null, function* () {
    aS(e, n), yield lS(e);
  });
}
function uS(e, n) {
  return ni(this, null, function* () {
    if (!sS(e, n)) {
      Kt.includes(e) && (yield ld(e));
      return;
    }
    yield ym(e, n);
  });
}
function dS(e = {}) {
  const { events: n, loading: r, error: t, attempt: o, throttleWait: a, filter: i } = e;
  Mn.events = n ?? Mn.events, Mn.loading = r ?? Mn.loading, Mn.error = t ?? Mn.error, Mn.attempt = o ?? Mn.attempt, Mn.throttleWait = a ?? Mn.throttleWait, Mn.filter = i;
}
var wm = {
  mounted: ym,
  unmounted: sd,
  updated: uS,
  install(e, n) {
    dS(n), id = Fu(jo, Mn.throttleWait), e.directive("lazy", this);
  }
}, UA = wm, ko = wm, km = {
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
}, cS = (e) => [
  "mini",
  "small",
  "normal",
  "large"
].includes(e), { name: fS, n: vS, classes: pS } = oe("avatar"), mS = [
  "src",
  "alt",
  "lazy-loading",
  "lazy-error"
], gS = ["src", "alt"];
function hS(e, n) {
  const r = _e("lazy");
  return b(), k("div", {
    ref: "avatarElement",
    class: p(e.classes(e.n(), e.n("$--box"), [e.isInternalSize(e.size), e.n(`--${e.size}`)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")], [e.hoverable, e.n("--hoverable")])),
    style: J({
      width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
      height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
      borderColor: e.borderColor,
      backgroundColor: e.color
    }),
    onClick: n[3] || (n[3] = (...t) => e.handleClick && e.handleClick(...t))
  }, [e.src ? (b(), k(De, { key: 0 }, [e.lazy ? We((b(), k("img", {
    key: 0,
    role: "img",
    class: p(e.n("image")),
    src: e.src,
    alt: e.alt,
    style: J({ objectFit: e.fit }),
    "lazy-loading": e.loading,
    "lazy-error": e.error,
    onLoad: n[0] || (n[0] = (...t) => e.handleLoad && e.handleLoad(...t))
  }, null, 46, mS)), [[r, e.src]]) : (b(), k("img", {
    key: 1,
    role: "img",
    class: p(e.n("image")),
    src: e.src,
    alt: e.alt,
    style: J({ objectFit: e.fit }),
    onLoad: n[1] || (n[1] = (...t) => e.handleLoad && e.handleLoad(...t)),
    onError: n[2] || (n[2] = (...t) => e.handleError && e.handleError(...t))
  }, null, 46, gS))], 64)) : (b(), k("div", {
    key: 1,
    ref: "textElement",
    class: p(e.n("text")),
    style: J({ transform: `scale(${e.scale})` })
  }, [F(e.$slots, "default")], 6))], 6);
}
var $m = te({
  name: fS,
  directives: { Lazy: ko },
  props: km,
  setup(e) {
    const n = O(null), r = O(null), t = O(1);
    On(o), zt(o);
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
      n: vS,
      classes: pS,
      isInternalSize: cS,
      toSizeUnit: Te,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
$m.render = hS;
var ti = $m;
ue(ti);
fe(ti, km);
var jA = ti, cs = ti, Sm = {
  offset: [Number, String],
  vertical: Boolean
}, { name: bS, n: yS, classes: wS } = oe("avatar-group");
function kS(e, n) {
  return b(), k("div", {
    class: p(e.classes(e.n(), [
      e.vertical,
      e.n("--column"),
      e.n("--row")
    ])),
    style: J(e.rootStyles)
  }, [F(e.$slots, "default")], 6);
}
var Cm = te({
  name: bS,
  props: Sm,
  setup(e) {
    return {
      rootStyles: S(() => e.offset == null ? {} : { "--avatar-group-offset": Te(e.offset) }),
      n: yS,
      classes: wS
    };
  }
});
Cm.render = kS;
var oi = Cm;
ue(oi);
fe(oi, Sm);
var YA = oi, fs = oi, jr = {
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
}, { name: $S, n: SS, classes: CS } = oe("loading");
function PS(e, n) {
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
    })], -1)])], 6)], 2)) : X("v-if", !0),
    (b(!0), k(De, null, Ye(e.loadingTypeDict, (r, t) => (b(), k(De, { key: t }, [e.type === t ? (b(), k("div", {
      key: 0,
      class: p(e.classes(e.n(t), e.n(`${t}--${e.size}`)))
    }, [(b(!0), k(De, null, Ye(r, (o) => (b(), k("div", {
      key: o + t,
      style: J({ backgroundColor: e.color }),
      class: p(e.classes(e.n(`${t}-item`), e.n(`${t}-item--${e.size}`)))
    }, null, 6))), 128))], 2)) : X("v-if", !0)], 64))), 128)),
    e.$slots.description || e.description ? (b(), k("div", {
      key: 1,
      class: p(e.classes(e.n("description"), e.n(`description--${e.size}`))),
      style: J({ color: e.color })
    }, [F(e.$slots, "description", {}, () => [Le(ve(e.description), 1)])], 6)) : X("v-if", !0)
  ], 2)) : X("v-if", !0)], 2);
}
var Pm = te({
  name: $S,
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
      n: SS,
      classes: CS,
      multiplySizeUnit: nr
    };
  }
});
Pm.render = PS;
var ai = Pm;
ue(ai);
fe(ai, jr);
var WA = ai, St = ai, OS = Object.defineProperty, zS = Object.defineProperties, TS = Object.getOwnPropertyDescriptors, Lc = Object.getOwnPropertySymbols, ES = Object.prototype.hasOwnProperty, BS = Object.prototype.propertyIsEnumerable, Fc = (e, n, r) => n in e ? OS(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Hc = (e, n) => {
  for (var r in n || (n = {})) ES.call(n, r) && Fc(e, r, n[r]);
  if (Lc)
    for (var r of Lc(n)) BS.call(n, r) && Fc(e, r, n[r]);
  return e;
}, Uc = (e, n) => zS(e, TS(n)), Om = {
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
  loadingSize: Uc(Hc({}, Fe(jr, "size")), { default: void 0 }),
  loadingColor: Uc(Hc({}, Fe(jr, "color")), { default: "currentColor" }),
  onClick: V(),
  onTouchstart: V()
}, zm = /* @__PURE__ */ Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function DS() {
  const { bindChildren: e, childProviders: n, length: r } = Dn(zm);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function IS() {
  const { bindParent: e, parentProvider: n, index: r } = Bn(zm);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var { name: MS, n: AS, classes: NS } = oe("button"), RS = [
  "tabindex",
  "type",
  "disabled"
];
function VS(e, n) {
  const r = x("var-loading"), t = x("var-hover-overlay"), o = _e("ripple"), a = _e("hover");
  return We((b(), k("button", {
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.states.size}`), [
      e.block,
      `${e.n("$--flex")} ${e.n("--block")}`,
      e.n("$--inline-flex")
    ], [!e.states.text, e.states.elevation], [!e.states.iconContainer && !e.states.text, e.n(`--${e.states.type}`)], [e.states.text, `${e.n("--text")} ${e.n(`--text-${e.states.type}`)}`], [e.states.iconContainer, e.n(`--icon-container-${e.states.type}`)], [e.states.filledDefault, e.n("--filled-default")], [e.states.elevationDisabled, e.n("--elevation-disabled")], [e.round, e.n("--round")], [e.fab, e.n("--fab")], [e.states.outline, e.n("--outline")], [e.loading || e.pending, e.n("--loading")], [e.disabled, e.n("--disabled")], [e.states.text && e.disabled, e.n("--text-disabled")])),
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
  ], 46, RS)), [[o, { disabled: e.disabled || !e.ripple || e.loading || e.pending }], [
    a,
    e.handleHovering,
    "desktop"
  ]]);
}
var Tm = te({
  name: MS,
  components: {
    VarLoading: St,
    VarHoverOverlay: Zn
  },
  directives: {
    Ripple: vn,
    Hover: jn
  },
  props: Om,
  setup(e) {
    const n = O(!1), r = O(!1), { buttonGroup: t } = IS(), { hovering: o, handleHovering: a } = ur(), i = S(() => {
      var c, f, v, g, h, m, w;
      if (!t) return {
        elevation: e.tonal ? "" : zn(e.elevation, 2),
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
      const { type: $, size: y, color: z, textColor: T, mode: P, elevation: R } = t;
      return {
        elevation: "",
        type: (v = e.type) != null ? v : $.value,
        size: (g = e.size) != null ? g : y.value,
        color: (h = e.color) != null ? h : z.value,
        textColor: (m = e.textColor) != null ? m : T.value,
        text: P.value === "text" || P.value === "outline",
        outline: P.value === "outline",
        iconContainer: P.value === "tonal" || P.value === "icon-container",
        elevationDisabled: P.value === "tonal",
        filledDefault: P.value === "normal" && ((w = e.type) != null ? w : $.value) === "default" && (R.value === !1 || Z(R.value) === 0)
      };
    });
    function l(c) {
      e.autoLoading && (r.value = !0, Promise.all(Kr(c)).then(() => {
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
      n: AS,
      classes: NS,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      handleFocus: d
    };
  }
});
Tm.render = VS;
var ii = Tm;
ue(ii);
fe(ii, Om);
var KA = ii, Jn = ii, Em = {
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
}, { name: LS, n: FS, classes: HS } = oe("back-top");
function US(e, n) {
  const r = x("var-icon"), t = x("var-button");
  return b(), ke(Hr, {
    to: "body",
    disabled: e.disabled
  }, [L("div", qe({
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
var Bm = te({
  name: LS,
  components: {
    VarButton: Jn,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: Em,
  setup(e) {
    const n = O(!1), r = O(null), t = O(!0);
    let o;
    const a = Fu(() => {
      i();
    }, 200);
    Tr(() => {
      s(), u(), i(), t.value = !1;
    }), ft(u), Zt(d);
    function i() {
      n.value = kt(o) >= fn(e.visibilityHeight);
    }
    function l(c) {
      C(e.onClick, c);
      const f = Lu(o);
      ho(o, {
        left: f,
        duration: e.duration,
        animation: mm
      });
    }
    function s() {
      o = e.target ? Op(e.target, "BackTop") : ut(r.value);
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
      n: FS,
      classes: HS,
      handleClick: l
    };
  }
});
Bm.render = US;
var li = Bm;
ue(li);
fe(li, Em);
var qA = li, vs = li, Dm = {
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
}, jS = Object.defineProperty, jc = Object.getOwnPropertySymbols, YS = Object.prototype.hasOwnProperty, WS = Object.prototype.propertyIsEnumerable, Yc = (e, n, r) => n in e ? jS(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, KS = (e, n) => {
  for (var r in n || (n = {})) YS.call(n, r) && Yc(e, r, n[r]);
  if (jc)
    for (var r of jc(n)) WS.call(n, r) && Yc(e, r, n[r]);
  return e;
}, { name: qS, n: XS, classes: GS } = oe("badge"), ZS = { key: 0 };
function JS(e, n) {
  const r = x("var-icon");
  return b(), k("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [F(e.$slots, "default"), U(bn, {
    name: e.n("$-badge-fade"),
    persisted: ""
  }, {
    default: se(() => [We(L("span", qe({
      class: e.classes(e.n("content"), e.n(`--${e.type}`), [
        e.$slots.default,
        e.n(`--${e.position}`),
        e.n("--offset")
      ], [e.dot, e.n("--dot")], [e.icon || e.$slots.icon, e.n("--icon")]),
      style: KS({ background: e.color }, e.offsetStyle)
    }, e.$attrs), [e.$slots.icon || e.icon ? (b(), k("span", {
      key: 0,
      class: p(e.n("icon"))
    }, [F(e.$slots, "icon", {}, () => [U(r, {
      name: e.icon,
      namespace: e.namespace
    }, null, 8, ["name", "namespace"])])], 2)) : X("v-if", !0), F(e.$slots, "value", {}, () => [!e.$slots.icon && !e.icon && !e.dot ? (b(), k("span", ZS, ve(e.value), 1)) : X("v-if", !0)])], 16), [[yr, !e.hidden]])]),
    _: 3
  }, 8, ["name"])], 2);
}
var Im = te({
  name: qS,
  components: { VarIcon: Je },
  inheritAttrs: !1,
  props: Dm,
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
      n: XS,
      classes: GS
    };
  }
});
Im.render = JS;
var si = Im;
ue(si);
fe(si, Dm);
var XA = si, $o = si, Mm = {
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
}, Am = /* @__PURE__ */ Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function QS() {
  const { childProviders: e, length: n, bindChildren: r } = Dn(Am);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
  };
}
var xS = Object.defineProperty, Wc = Object.getOwnPropertySymbols, _S = Object.prototype.hasOwnProperty, eC = Object.prototype.propertyIsEnumerable, Kc = (e, n, r) => n in e ? xS(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, qc = (e, n) => {
  for (var r in n || (n = {})) _S.call(n, r) && Kc(e, r, n[r]);
  if (Wc)
    for (var r of Wc(n)) eC.call(n, r) && Kc(e, r, n[r]);
  return e;
}, { name: nC, n: rC, classes: tC } = oe("bottom-navigation"), { n: ui } = oe("bottom-navigation-item"), Xc = ui("--right-half-space"), Gc = ui("--left-half-space"), Zc = ui("--right-space"), oC = { type: "primary" };
function aC(e, n) {
  const r = x("var-button");
  return b(), k(De, null, [L("div", qe({
    ref: "bottomNavigationDom",
    class: e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.bordered || e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")], [e.variant, e.n("--variant")]),
    style: `z-index:${e.zIndex}`
  }, e.$attrs), [F(e.$slots, "default"), e.$slots.fab ? (b(), ke(r, qe({
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
    style: J({ height: e.placeholderHeight })
  }, null, 6)) : X("v-if", !0)], 64);
}
var Nm = te({
  name: nC,
  components: { VarButton: Jn },
  props: Mm,
  setup(e, { slots: n }) {
    const r = O(null), t = S(() => e.animated), o = S(() => e.active), a = S(() => e.activeColor), i = S(() => e.inactiveColor), l = S(() => e.variant), s = O(), u = O({}), { length: d, bottomNavigationItems: c, bindBottomNavigationItem: f } = QS();
    f({
      animated: t,
      active: o,
      activeColor: a,
      inactiveColor: i,
      variant: l,
      onToggle: w
    }), me(() => d.value, v), me(() => e.fabProps, (I) => {
      u.value = qc(qc({}, oC), I);
    }, {
      immediate: !0,
      deep: !0
    }), wr(A), On(() => {
      A(), n.fab && T(d.value);
    }), zt(() => {
      z(), n.fab && T(d.value);
    });
    function v() {
      d.value === 0 || g() || h() || m();
    }
    function g() {
      return c.find(({ name: I }) => o.value === I.value);
    }
    function h() {
      return c.find(({ index: I }) => o.value === I.value);
    }
    function m() {
      tr(o.value) && (o.value < 0 ? C(e["onUpdate:active"], 0) : o.value > d.value - 1 && C(e["onUpdate:active"], d.value - 1));
    }
    function w(I) {
      o.value !== I && (e.onBeforeChange ? $(I) : y(I));
    }
    function $(I) {
      const E = Kr(C(e.onBeforeChange, I));
      Promise.all(E).then((B) => {
        B.every(Boolean) && y(I);
      });
    }
    function y(I) {
      C(e["onUpdate:active"], I), C(e.onChange, I);
    }
    function z() {
      R().forEach((I) => {
        I.classList.remove(Xc, Gc, Zc);
      });
    }
    function T(I) {
      const E = R(), B = E.length, N = I % 2 === 0;
      E.forEach((M, D) => {
        P(N, M, D, B);
      });
    }
    function P(I, E, B, N) {
      const M = B === N - 1;
      if (!I && M) {
        E.classList.add(Zc);
        return;
      }
      const D = B === N / 2 - 1, j = B === N / 2;
      D ? E.classList.add(Xc) : j && E.classList.add(Gc);
    }
    function R() {
      return Array.from(r.value.querySelectorAll(`.${ui()}`));
    }
    function H() {
      C(e.onFabClick);
    }
    function A() {
      if (!e.fixed || !e.placeholder) return;
      const { height: I } = kn(r.value);
      s.value = Te(I);
    }
    return {
      length: d,
      bottomNavigationDom: r,
      fabProps: u,
      placeholderHeight: s,
      n: rC,
      classes: tC,
      handleFabClick: H
    };
  }
});
Nm.render = aC;
var di = Nm;
ue(di);
fe(di, Mm);
var GA = di, ps = di, Rm = {
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
function iC() {
  const { parentProvider: e, index: n, bindParent: r } = Bn(Am);
  return or(!!r, "BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var { name: lC, n: sC, classes: uC } = oe("bottom-navigation-item"), dC = {
  type: "danger",
  dot: !0
};
function cC(e, n) {
  const r = x("var-icon"), t = x("var-badge"), o = _e("ripple");
  return We((b(), k("button", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")], [e.animated, e.n("--animated")])),
    style: J({ color: e.isActive ? e.activeColor : e.inactiveColor }),
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [L("div", { class: p(e.classes(e.n("icon-container"), [e.variant, e.n("--variant-icon-container")], [e.isActive && e.variant, e.n("--variant-active")])) }, [e.badge ? (b(), ke(t, qe({ key: 0 }, e.badgeProps, {
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
var Vm = te({
  name: lC,
  components: {
    VarBadge: $o,
    VarIcon: Je
  },
  directives: { Ripple: vn },
  props: Rm,
  setup(e) {
    const { index: n, bottomNavigation: r, bindBottomNavigation: t } = iC(), o = S(() => e.name), a = S(() => [o.value, n.value].includes(s.value)), i = S(() => e.badge === !0 ? dC : e.badge), { animated: l, active: s, activeColor: u, inactiveColor: d, variant: c } = r;
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
      n: sC,
      classes: uC,
      handleClick: f
    };
  }
});
Vm.render = cC;
var ci = Vm;
ue(ci);
fe(ci, Rm);
var ZA = ci, ms = ci, Lm = {
  separator: String,
  onClick: V()
}, Fm = /* @__PURE__ */ Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function fC() {
  const { childProviders: e, bindChildren: n, length: r } = Dn(Fm);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function vC() {
  const { parentProvider: e, bindParent: n, index: r } = Bn(Fm);
  return or(!!n, "Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var { name: pC, n: mC, classes: gC } = oe("breadcrumb");
function hC(e, n) {
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
var Hm = te({
  name: pC,
  props: Lm,
  setup(e) {
    const { index: n, breadcrumb: r, bindBreadcrumb: t } = vC(), o = S(() => n.value === r.length.value - 1), a = S(() => r.separator.value);
    t(null);
    function i(l) {
      o.value || C(e.onClick, l);
    }
    return {
      n: mC,
      classes: gC,
      isLast: o,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Hm.render = hC;
var fi = Hm;
ue(fi);
fe(fi, Lm);
var JA = fi, gs = fi, Um = { separator: {
  type: String,
  default: "/"
} }, { name: bC, n: yC } = oe("breadcrumbs");
function wC(e, n) {
  return b(), k("div", {
    class: p(e.n()),
    role: "navigation",
    "aria-label": "Breadcrumbs"
  }, [F(e.$slots, "default")], 2);
}
var jm = te({
  name: bC,
  props: Um,
  setup(e) {
    const n = S(() => e.separator), { bindBreadcrumbList: r, length: t } = fC();
    return r({
      length: t,
      separator: n
    }), { n: yC };
  }
});
jm.render = wC;
var vi = jm;
ue(vi);
fe(vi, Um);
var QA = vi, hs = vi, Ym = {
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
}, { name: kC, n: $C, classes: SC } = oe("button-group");
function CC(e, n) {
  return b(), k("div", { class: p(e.classes(e.n(), e.n("$--box"), [e.mode, `${e.n(`--mode-${e.mode}`)}`], [
    e.vertical,
    e.n("--vertical"),
    e.n("--horizontal")
  ], [e.mode === "normal", e.formatElevation(e.elevation, 2)])) }, [F(e.$slots, "default")], 2);
}
var Wm = te({
  name: kC,
  props: Ym,
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
      n: $C,
      classes: SC,
      formatElevation: zn
    };
  }
});
Wm.render = CC;
var pi = Wm;
ue(pi);
fe(pi, Ym);
var xA = pi, bs = pi, Km = {
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
}, PC = (e, n, r) => new Promise((t, o) => {
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
}), { name: OC, n: zC, classes: TC } = oe("card"), EC = 500, BC = ["src", "alt"];
function DC(e, n) {
  const r = x("var-hover-overlay"), t = x("var-icon"), o = x("var-button"), a = _e("ripple"), i = _e("hover");
  return We((b(), k("div", {
    ref: "card",
    class: p(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.variant === "outlined" || e.outline, e.n("--outline")], [e.variant === "filled", e.n("--filled")], [e.surfaceLow, e.n("--surface-low")], [!e.normalizedHoverable.disabled, e.n("--cursor")], [e.variant === "standard" || e.outline, e.formatElevation(e.elevation, 1)])),
    style: J({ zIndex: e.floated ? e.zIndex : void 0 }),
    onClick: n[0] || (n[0] = (...l) => e.handleClick && e.handleClick(...l))
  }, [L("div", {
    ref: "cardFloater",
    class: p(e.n("floater")),
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
    F(e.$slots, "image", {}, () => [e.src ? (b(), k("img", {
      key: 0,
      class: p(e.n("image")),
      style: J({
        objectFit: e.fit,
        height: e.toSizeUnit(e.imageHeight),
        width: e.toSizeUnit(e.imageWidth)
      }),
      src: e.src,
      alt: e.alt
    }, null, 14, BC)) : X("v-if", !0)]),
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
        style: J({
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
      style: J({
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
var qm = te({
  name: OC,
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
    const n = O(null), r = O(null), t = O("auto"), o = O("auto"), a = O("100%"), i = O("100%"), l = O("auto"), s = O("auto"), u = O(void 0), d = O("hidden"), c = O("0px"), f = O("0"), v = S(() => e.layout === "row"), g = S(() => e.surface === "low" && e.variant !== "filled"), { hovering: h, handleHovering: m } = ur(), w = O(!1), $ = O(!1), { zIndex: y } = Ao(() => e.floating, 1), z = S(() => B(e.ripple)), T = S(() => N(e.hoverable));
    let P = "auto", R = "auto", H = null;
    const A = O(null);
    let I = !1;
    Mo(() => e.floating, () => !v.value), me(() => e.floating, (K) => {
      v.value || Ne(() => {
        K ? (I = !0, E()) : I && M();
      });
    }, { immediate: !0 });
    function E() {
      clearTimeout(A.value), clearTimeout(H), A.value = null, A.value = setTimeout(() => PC(null, null, function* () {
        const { width: K, height: G, left: ce, top: ge } = kn(n.value);
        t.value = Te(K), o.value = Te(G), a.value = t.value, i.value = o.value, l.value = Te(ge), s.value = Te(ce), u.value = "fixed", P = l.value, R = s.value, w.value = !0, yield Gn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", c.value = "auto", f.value = "1", d.value = "auto", $.value = !0;
      }), z.value.disabled ? 0 : EC);
    }
    function B(K) {
      return Sn(K) ? {
        disabled: !!K.disabled,
        color: K.color
      } : {
        disabled: !K,
        color: void 0
      };
    }
    function N(K) {
      return Sn(K) ? {
        disabled: !!K.disabled,
        color: K.color
      } : {
        disabled: !K,
        color: void 0
      };
    }
    function M() {
      clearTimeout(H), clearTimeout(A.value), A.value = null, a.value = t.value, i.value = o.value, l.value = P, s.value = R, c.value = "0px", f.value = "0", w.value = !1, H = setTimeout(() => {
        t.value = "auto", o.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", P = "auto", R = "auto", d.value = "hidden", u.value = void 0, $.value = !1;
      }, e.floatingDuration);
    }
    function D() {
      C(e["onUpdate:floating"], !1);
    }
    function j(K) {
      C(e.onClick, K);
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
      zIndex: y,
      isRow: v,
      surfaceLow: g,
      normalizedRipple: z,
      normalizedHoverable: T,
      hovering: h,
      handleHovering: m,
      showFloatingButtons: w,
      floated: $,
      n: zC,
      classes: TC,
      toSizeUnit: Te,
      close: D,
      formatElevation: zn,
      handleClick: j
    };
  }
});
qm.render = DC;
var mi = qm;
ue(mi);
fe(mi, Km);
var _A = mi, ys = mi, Xm = {
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
}, { name: IC, n: MC, classes: AC } = oe("cell");
function NC(e, n) {
  const r = x("var-icon"), t = _e("ripple");
  return We((b(), k("div", {
    class: p(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
    style: J(e.borderOffsetStyles),
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
var Gm = te({
  name: IC,
  components: { VarIcon: Je },
  directives: { Ripple: vn },
  props: Xm,
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
      n: MC,
      classes: AC,
      toSizeUnit: Te,
      handleClick: r
    };
  }
});
Gm.render = NC;
var gi = Gm;
ue(gi);
fe(gi, Xm);
var eN = gi, ws = gi, Zm = {
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
}, { name: RC, n: VC, classes: LC } = oe("checkbox-group");
function FC(e, n) {
  const r = x("maybe-v-node"), t = x("var-checkbox"), o = x("var-form-details");
  return b(), k("div", { class: p(e.n("wrap")) }, [L("div", { class: p(e.classes(e.n(), e.n(`--${e.direction}`))) }, [e.options.length ? (b(!0), k(De, { key: 0 }, Ye(e.options, (a) => (b(), ke(t, {
    key: a[e.valueKey],
    "checked-value": a[e.valueKey],
    disabled: a.disabled
  }, {
    default: se(({ checked: i }) => [U(r, { is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey] }, null, 8, ["is"])]),
    _: 2
  }, 1032, ["checked-value", "disabled"]))), 128)) : X("v-if", !0), F(e.$slots, "default")], 2), U(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Jm = te({
  name: RC,
  components: {
    VarFormDetails: Hn,
    VarCheckbox: dt,
    MaybeVNode: lr
  },
  props: Zm,
  setup(e) {
    const n = S(() => e.max), r = S(() => e.modelValue.length), { length: t, checkboxes: o, bindCheckboxes: a } = aw(), { bindForm: i } = Wn(), { errorMessage: l, validateWithTrigger: s, validate: u, resetValidation: d } = xn(), c = {
      max: n,
      checkedCount: r,
      onChecked: g,
      onUnchecked: h,
      validate: z,
      resetValidation: d,
      reset: y,
      errorMessage: S(() => l.value)
    };
    me(() => e.modelValue, m, { deep: !0 }), me(() => t.value, m), a(c), C(i, c);
    function f(T) {
      Ne(() => {
        const { validateTrigger: P, rules: R, modelValue: H } = e;
        s(P, T, R, H);
      });
    }
    function v(T) {
      C(e["onUpdate:modelValue"], T), C(e.onChange, T), f("onChange");
    }
    function g(T) {
      const { modelValue: P } = e;
      P.includes(T) || v([...P, T]);
    }
    function h(T) {
      const { modelValue: P } = e;
      P.includes(T) && v(P.filter((R) => R !== T));
    }
    function m() {
      o.forEach(({ sync: T }) => T(e.modelValue));
    }
    function w() {
      const T = o.map(({ checkedValue: R }) => R.value), P = Ql(T);
      return C(e["onUpdate:modelValue"], P), P;
    }
    function $() {
      const T = o.filter(({ checked: R }) => !R.value).map(({ checkedValue: R }) => R.value), P = Ql(T);
      return C(e["onUpdate:modelValue"], P), P;
    }
    function y() {
      C(e["onUpdate:modelValue"], []), d();
    }
    function z() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: VC,
      classes: LC,
      checkAll: w,
      inverseAll: $,
      reset: y,
      validate: z,
      resetValidation: d,
      isFunction: Yn
    };
  }
});
Jm.render = FC;
var hi = Jm;
ue(hi);
fe(hi, Zm);
var nN = hi, ks = hi, Qm = {
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
}, { name: HC, n: xr, classes: UC } = oe("chip");
function jC(e, n) {
  const r = x("var-icon");
  return b(), ke(bn, { name: e.n("$-fade") }, {
    default: se(() => [L("span", qe({
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
var xm = te({
  name: HC,
  components: { VarIcon: Je },
  inheritAttrs: !1,
  props: Qm,
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
      classes: UC,
      formatElevation: zn,
      handleClose: o
    };
  }
});
xm.render = jC;
var bi = xm;
ue(bi);
fe(bi, Qm);
var rN = bi, $a = bi, $s = /* @__PURE__ */ Symbol("HIGHLIGHTER_PROVIDER_KEY");
function YC(e) {
  Ru($s, e);
}
function WC() {
  return Uu($s) ? Nu($s) : {
    highlighter: null,
    theme: null
  };
}
var _m = {
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
}, KC = (e, n, r) => new Promise((t, o) => {
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
}), { name: qC, n: XC, classes: GC } = oe("code"), ZC = ["innerHTML"];
function JC(e, n) {
  return b(), k("div", {
    class: p(e.classes(e.n(), [e.wordWrap, e.n("--word-wrap")])),
    innerHTML: e.highlightedCode
  }, null, 10, ZC);
}
var eg = te({
  name: qC,
  props: _m,
  setup(e) {
    const { highlighter: n, theme: r } = WC(), t = O(""), o = S(() => {
      var a;
      return (a = e.theme) != null ? a : r?.value;
    });
    return n && me(() => [
      n.value,
      e.code,
      e.language,
      o.value,
      e.trim
    ], (a) => KC(null, [a], function* ([i, l, s = "", u = "", d]) {
      i && (t.value = yield i.codeToHtml(d ? l.trim() : l, {
        lang: s,
        theme: u
      }));
    }), { immediate: !0 }), {
      n: XC,
      classes: GC,
      highlightedCode: t
    };
  }
});
eg.render = JC;
var yi = eg;
ue(yi);
fe(yi, _m);
var tN = yi, Ss = yi, ng = {
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
}, rg = /* @__PURE__ */ Symbol("ROW_BIND_COL_KEY");
function QC() {
  const { length: e, childProviders: n, bindChildren: r } = Dn(rg);
  return {
    length: e,
    cols: n,
    bindCols: r
  };
}
function xC() {
  const { index: e, bindParent: n, parentProvider: r } = Bn(rg);
  return {
    index: e,
    row: r,
    bindRow: n
  };
}
var { name: _C, n: Qo, classes: e2 } = oe("col");
function n2(e, n) {
  return b(), k("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n(`--span-${e.span}`)], [e.offset, e.n(`--offset-${e.offset}`)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
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
  }, [F(e.$slots, "default")], 6);
}
var tg = te({
  name: _C,
  props: ng,
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
    }), { row: o, bindRow: a } = xC();
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
      classes: e2,
      toNumber: Z,
      toSizeUnit: Te,
      getSize: i,
      handleClick: l,
      padStartFlex: ba
    };
  }
});
tg.render = n2;
var wi = tg;
ue(wi);
fe(wi, ng);
var oN = wi, Cs = wi, og = {
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
}, ag = /* @__PURE__ */ Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function r2() {
  const { childProviders: e, length: n, bindChildren: r } = Dn(ag);
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: r
  };
}
var { name: t2, n: o2 } = oe("collapse");
function a2(e, n) {
  return b(), k("div", { class: p(e.n()) }, [F(e.$slots, "default")], 2);
}
var ig = te({
  name: t2,
  props: og,
  setup(e) {
    const n = S(() => e.offset), r = S(() => e.divider), t = S(() => e.elevation), o = S(() => e.accordion), a = S(() => Kr(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = r2(), u = {
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
      c(m ? [...a.value, h] : a.value.filter((w) => w !== h));
    }
    function c(h) {
      C(e["onUpdate:modelValue"], h), C(e.onChange, h);
    }
    function f() {
      if (e.accordion) {
        const [w] = a.value;
        if (w == null) return;
        const $ = l.find(({ name: y }) => w === y.value);
        return $ ?? l.find(({ index: y, name: z }) => z.value == null && w === y.value);
      }
      const h = l.filter(({ name: w }) => w.value != null && a.value.includes(w.value)), m = l.filter(({ index: w, name: $ }) => $.value == null && a.value.includes(w.value));
      return [...h, ...m];
    }
    function v() {
      const h = R0(Kr(f()));
      l.forEach((m) => {
        m.init(h.includes(m));
      });
    }
    return {
      divider: r,
      n: o2,
      toggleAll: (h) => {
        e.accordion || c(l.filter((m) => {
          var w;
          const $ = (w = m.name.value) != null ? w : m.index.value, y = a.value.includes($);
          return h.skipDisabled && m.disabled.value ? y : h.expand === "inverse" ? !y : h.expand;
        }).map((m) => {
          var w;
          return (w = m.name.value) != null ? w : m.index.value;
        }));
      }
    };
  }
});
ig.render = a2;
var ki = ig;
ue(ki);
fe(ki, og);
var aN = ki, Ps = ki, Jc = (e, n, r) => new Promise((t, o) => {
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
function lg(e) {
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
    return Jc(this, null, function* () {
      if (!n.value || (n.value.style.height = "", r.value = !0, yield qr(), !n.value || !l(f))) return;
      const { offsetHeight: v } = n.value;
      n.value.style.height = "0px", yield qr(), !(!n.value || !l(f)) && (n.value.style.height = v + "px", o && (yield Gn(), o && l(f) && d()));
    });
  }
  const u = (f) => Jc(null, null, function* () {
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
var sg = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
function i2() {
  const { parentProvider: e, index: n, bindParent: r } = Bn(ag);
  return or(!!r, "Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var { name: l2, n: s2, classes: u2 } = oe("collapse-item"), d2 = [
  "aria-expanded",
  "aria-disabled",
  "role"
];
function c2(e, n) {
  const r = x("var-icon");
  return b(), k("div", {
    class: p(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
    style: J(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
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
    }, null, 8, ["name", "class"])])], 2)], 10, d2),
    We(L("div", {
      ref: "contentEl",
      class: p(e.n("content")),
      onTransitionend: n[1] || (n[1] = (...t) => e.handleTransitionEnd && e.handleTransitionEnd(...t)),
      onTransitionstart: n[2] || (n[2] = (...t) => e.handleTransitionStart && e.handleTransitionStart(...t))
    }, [L("div", { class: p(e.n("content-wrap")) }, [F(e.$slots, "default")], 2)], 34), [[yr, e.showContent]])
  ], 6);
}
var ug = te({
  name: l2,
  components: { VarIcon: Je },
  props: sg,
  setup(e) {
    const n = O(!1), r = O(!1), t = O(null), o = S(() => e.name), a = S(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = i2(), { offset: u, divider: d, elevation: c, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: o,
      disabled: a,
      init: m
    });
    const { handleTransitionEnd: g, handleTransitionStart: h } = lg({
      contentEl: t,
      showContent: r,
      expand: n
    });
    function m($) {
      n.value = $;
    }
    function w() {
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
      n: s2,
      classes: u2,
      toggle: w,
      formatElevation: zn,
      handleTransitionEnd: g,
      handleTransitionStart: h
    };
  }
});
ug.render = c2;
var $i = ug;
ue($i);
fe($i, sg);
var iN = $i, Os = $i, dg = { expand: Boolean }, { name: f2, n: v2 } = oe("collapse-transition");
function p2(e, n) {
  return We((b(), k("div", {
    ref: "contentEl",
    class: p(e.n("content")),
    onTransitionend: n[0] || (n[0] = (...r) => e.handleTransitionEnd && e.handleTransitionEnd(...r)),
    onTransitionstart: n[1] || (n[1] = (...r) => e.handleTransitionStart && e.handleTransitionStart(...r))
  }, [F(e.$slots, "default")], 34)), [[yr, e.showContent]]);
}
var cg = te({
  name: f2,
  props: dg,
  setup(e) {
    const n = O(!1), r = O(null), t = S(() => e.expand), { handleTransitionEnd: o, handleTransitionStart: a } = lg({
      contentEl: r,
      showContent: n,
      expand: t
    });
    return {
      showContent: n,
      contentEl: r,
      n: v2,
      handleTransitionEnd: o,
      handleTransitionStart: a
    };
  }
});
cg.render = p2;
var Si = cg;
ue(Si);
fe(Si, dg);
var lN = Si, Sa = Si, fg = {
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
}, { name: m2, n: g2 } = oe("count-to");
function h2(e, n) {
  return b(), k("div", { class: p(e.n()) }, [F(e.$slots, "default", { value: e.value }, () => [Le(ve(e.value), 1)])], 2);
}
var vg = te({
  name: m2,
  props: fg,
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
      n: g2,
      start: t,
      pause: o,
      reset: i,
      toNumber: Z,
      floor: xl
    };
  }
});
vg.render = h2;
var Ci = vg;
ue(Ci);
fe(Ci, fg);
var sN = Ci, zs = Ci, pg = {
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
}, { name: b2, n: y2 } = oe("countdown"), Ts = 1e3, Es = 60 * Ts, Bs = 60 * Es, Qc = 24 * Bs;
function w2(e, n) {
  return b(), k("div", { class: p(e.n()) }, [F(e.$slots, "default", yt(Aa(e.timeData)), () => [Le(ve(e.showTime), 1)])], 2);
}
var mg = te({
  name: b2,
  props: pg,
  setup(e) {
    const n = O(""), r = O({
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
    }), ft(() => {
      l != null && (o = l, o === !0 && c(!0));
    }), Ot(() => {
      l = o, f();
    }), Xt(f);
    function s(g, h) {
      const m = Object.values(h), w = [
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
      if (w.forEach((y, z) => {
        g.includes(y) ? g = g.replace(y, Gr(`${m[z]}`, 2, "0")) : m[z + 1] += m[z] * $[z];
      }), g.includes("S")) {
        const y = Gr(`${m[m.length - 1]}`, 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", y) : g.includes("SS") ? g = g.replace("SS", y.slice(0, 2)) : g = g.replace("S", y.slice(0, 1));
      }
      return g;
    }
    function u(g) {
      const h = {
        days: Math.floor(g / Qc),
        hours: Math.floor(g % Qc / Bs),
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
      o && (a = Lt(d));
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
      n: y2,
      start: c,
      pause: f,
      reset: v
    };
  }
});
mg.render = w2;
var Pi = mg;
ue(Pi);
fe(Pi, pg);
var uN = Pi, Ds = Pi, At = 9e15, mt = 1e9, Is = "0123456789abcdef", Ca = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Pa = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Ms = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -At,
  maxE: At,
  crypto: !1
}, gg, Yr, He = !0, Oi = "[DecimalError] ", ct = Oi + "Invalid argument: ", hg = Oi + "Precision limit exceeded", bg = Oi + "crypto unavailable", yg = "[object Decimal]", Qn = Math.floor, An = Math.pow, k2 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, $2 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, S2 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, wg = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, zr = 1e7, Me = 7, C2 = 9007199254740991, P2 = Ca.length - 1, As = Pa.length - 1, ie = { toStringTag: yg };
ie.absoluteValue = ie.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), Ie(e);
};
ie.ceil = function() {
  return Ie(new this.constructor(this), this.e + 1, 2);
};
ie.clampedTo = ie.clamp = function(e, n) {
  var r, t = this, o = t.constructor;
  if (e = new o(e), n = new o(n), !e.s || !n.s) return new o(NaN);
  if (e.gt(n)) throw Error(ct + n);
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
  return r.d ? r.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(r.e, r.sd()) + Me, t.rounding = 1, r = O2(t, Pg(t, r)), t.precision = e, t.rounding = n, Ie(Yr == 2 || Yr == 3 ? r.neg() : r, e, n, !0)) : new t(1) : new t(NaN);
};
ie.cubeRoot = ie.cbrt = function() {
  var e, n, r, t, o, a, i, l, s, u, d = this, c = d.constructor;
  if (!d.isFinite() || d.isZero()) return new c(d);
  for (He = !1, a = d.s * An(d.s * d, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (r = Un(d.d), e = d.e, (a = (e - r.length + 1) % 3) && (r += a == 1 || a == -2 ? "0" : "00"), a = An(r, 1 / 3), e = Qn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? r = "5e" + e : (r = a.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), t = new c(r), t.s = d.s) : t = new c(a.toString()), i = (e = c.precision) + 3; ; )
    if (l = t, s = l.times(l).times(l), u = s.plus(d), t = cn(u.plus(d).times(l), u.plus(s), i + 2, 1), Un(l.d).slice(0, i) === (r = Un(t.d)).slice(0, i))
      if (r = r.slice(i - 3, i + 1), r == "9999" || !o && r == "4999") {
        if (!o && (Ie(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          t = l;
          break;
        }
        i += 4, o = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (Ie(t, e + 1, 1), n = !t.times(t).times(t).eq(d));
        break;
      }
  return He = !0, Ie(t, e, c.rounding, n);
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
  return Ie(cn(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
ie.equals = ie.eq = function(e) {
  return this.cmp(e) === 0;
};
ie.floor = function() {
  return Ie(new this.constructor(this), this.e + 1, 3);
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
  r = i.precision, t = i.rounding, i.precision = r + Math.max(a.e, a.sd()) + 4, i.rounding = 1, o = a.d.length, o < 32 ? (e = Math.ceil(o / 3), n = (1 / Ti(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = qt(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(d.minus(s.times(d))));
  return Ie(a, i.precision = r, i.rounding = t, !0);
};
ie.hyperbolicSine = ie.sinh = function() {
  var e, n, r, t, o = this, a = o.constructor;
  if (!o.isFinite() || o.isZero()) return new a(o);
  if (n = a.precision, r = a.rounding, a.precision = n + Math.max(o.e, o.sd()) + 4, a.rounding = 1, t = o.d.length, t < 3) o = qt(a, 2, o, o, !0);
  else {
    e = 1.4 * Math.sqrt(t), e = e > 16 ? 16 : e | 0, o = o.times(1 / Ti(5, e)), o = qt(a, 2, o, o, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = o.times(o), o = o.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = r, Ie(o, n, r, !0);
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
  return o.isFinite() ? o.e >= 0 ? new a(o.abs().eq(1) ? o.s / 0 : o.isZero() ? o : NaN) : (e = a.precision, n = a.rounding, t = o.sd(), Math.max(t, e) < 2 * -o.e - 1 ? Ie(new a(o), e, n, !0) : (a.precision = r = t - o.e, o = cn(o.plus(1), new a(1).minus(o), r + e, 1), a.precision = e + 4, a.rounding = 1, o = o.ln(), a.precision = e, a.rounding = n, o.times(0.5))) : new a(NaN);
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
  return r && (i = i.times(2 << r - 1)), He = !0, Ie(i, d.precision = c, d.rounding = f, !0);
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
  if (n)
    if (r.length > 1) a = !0;
    else {
      for (o = r[0]; o % 10 === 0; ) o /= 10;
      a = o !== 1;
    }
  if (He = !1, l = c + v, i = ot(u, l), t = n ? Oa(d, l + 10) : ot(e, l), s = cn(i, t, l, 1), So(s.d, o = c, f)) do
    if (l += 10, i = ot(u, l), t = n ? Oa(d, l + 10) : ot(e, l), s = cn(i, t, l, 1), !a) {
      +Un(s.d).slice(o + 1, o + 15) + 1 == 1e14 && (s = Ie(s, c + 1, 0));
      break;
    }
  while (So(s.d, o += 10, f));
  return He = !0, Ie(s, c, f);
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
    return He ? Ie(e, l, s) : e;
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
  return u[0] ? (e.d = u, e.e = zi(u, r), He ? Ie(e, l, s) : e) : new g(s === 3 ? -0 : 0);
};
ie.modulo = ie.mod = function(e) {
  var n, r = this, t = r.constructor;
  return e = new t(e), !r.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || r.d && !r.d[0] ? Ie(new t(r), t.precision, t.rounding) : (He = !1, t.modulo == 9 ? (n = cn(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = cn(r, e, 0, t.modulo, 1), n = n.times(e), He = !0, r.minus(n));
};
ie.naturalExponential = ie.exp = function() {
  return Ns(this);
};
ie.naturalLogarithm = ie.ln = function() {
  return ot(this);
};
ie.negated = ie.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, Ie(e);
};
ie.plus = ie.add = function(e) {
  var n, r, t, o, a, i, l, s, u, d, c = this, f = c.constructor;
  if (e = new f(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new f(NaN) : c.d || (e = new f(e.d || c.s === e.s ? c : NaN)), e;
  if (c.s != e.s)
    return e.s = -e.s, c.minus(e);
  if (u = c.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(c)), He ? Ie(e, l, s) : e;
  if (a = Qn(c.e / Me), t = Qn(e.e / Me), u = u.slice(), o = a - t, o) {
    for (o < 0 ? (r = u, o = -o, i = d.length) : (r = d, t = a, i = u.length), a = Math.ceil(l / Me), i = a > i ? a + 1 : i + 1, o > i && (o = i, r.length = 1), r.reverse(); o--; ) r.push(0);
    r.reverse();
  }
  for (i = u.length, o = d.length, i - o < 0 && (o = i, r = d, d = u, u = r), n = 0; o; )
    n = (u[--o] = u[o] + d[o] + n) / zr | 0, u[o] %= zr;
  for (n && (u.unshift(n), ++t), i = u.length; u[--i] == 0; ) u.pop();
  return e.d = u, e.e = zi(u, t), He ? Ie(e, l, s) : e;
};
ie.precision = ie.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(ct + e);
  return r.d ? (n = kg(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
ie.round = function() {
  var e = this, n = e.constructor;
  return Ie(new n(e), e.e + 1, n.rounding);
};
ie.sine = ie.sin = function() {
  var e, n, r = this, t = r.constructor;
  return r.isFinite() ? r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(r.e, r.sd()) + Me, t.rounding = 1, r = T2(t, Pg(t, r)), t.precision = e, t.rounding = n, Ie(Yr > 2 ? r.neg() : r, e, n, !0)) : new t(NaN);
};
ie.squareRoot = ie.sqrt = function() {
  var e, n, r, t, o, a, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0]) return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (He = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = Un(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Qn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), t = new d(n)) : t = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (a = t, t = a.plus(cn(i, a, r + 2, 1)).times(0.5), Un(a.d).slice(0, r) === (n = Un(t.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !o && n == "4999") {
        if (!o && (Ie(a, s + 1, 0), a.times(a).eq(i))) {
          t = a;
          break;
        }
        r += 4, o = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (Ie(t, s + 1, 1), e = !t.times(t).eq(i));
        break;
      }
  return He = !0, Ie(t, s, d.rounding, e);
};
ie.tangent = ie.tan = function() {
  var e, n, r = this, t = r.constructor;
  return r.isFinite() ? r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + 10, t.rounding = 1, r = r.sin(), r.s = 1, r = cn(r, new t(1).minus(r.times(r)).sqrt(), e + 10, 0), t.precision = e, t.rounding = n, Ie(Yr == 2 || Yr == 4 ? r.neg() : r, e, n, !0)) : new t(NaN);
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
  return n ? ++r : a.shift(), e.d = a, e.e = zi(a, r), He ? Ie(e, c.precision, c.rounding) : e;
};
ie.toBinary = function(e, n) {
  return ud(this, 2, e, n);
};
ie.toDecimalPlaces = ie.toDP = function(e, n) {
  var r = this, t = r.constructor;
  return r = new t(r), e === void 0 ? r : (dr(e, 0, mt), n === void 0 ? n = t.rounding : dr(n, 0, 8), Ie(r, e + r.e + 1, n));
};
ie.toExponential = function(e, n) {
  var r, t = this, o = t.constructor;
  return e === void 0 ? r = Lr(t, !0) : (dr(e, 0, mt), n === void 0 ? n = o.rounding : dr(n, 0, 8), t = Ie(new o(t), e + 1, n), r = Lr(t, !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
ie.toFixed = function(e, n) {
  var r, t, o = this, a = o.constructor;
  return e === void 0 ? r = Lr(o) : (dr(e, 0, mt), n === void 0 ? n = a.rounding : dr(n, 0, 8), t = Ie(new a(o), e + o.e + 1, n), r = Lr(t, !1, e + t.e + 1)), o.isNeg() && !o.isZero() ? "-" + r : r;
};
ie.toFraction = function(e) {
  var n, r, t, o, a, i, l, s, u, d, c, f, v = this, g = v.d, h = v.constructor;
  if (!g) return new h(v);
  if (u = r = new h(1), t = s = new h(0), n = new h(t), a = n.e = kg(g) - v.e - 1, i = a % Me, n.d[0] = An(10, i < 0 ? Me + i : i), e == null) e = a > 0 ? n : u;
  else {
    if (l = new h(e), !l.isInt() || l.lt(u)) throw Error(ct + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (He = !1, l = new h(Un(g)), d = h.precision, h.precision = a = g.length * Me * 2; c = cn(l, n, 0, 1, 1), o = r.plus(c.times(t)), o.cmp(e) != 1; )
    r = t, t = o, o = u, u = s.plus(c.times(o)), s = o, o = n, n = l.minus(c.times(o)), l = o;
  return o = cn(e.minus(r), t, 0, 1, 1), s = s.plus(o.times(u)), r = r.plus(o.times(t)), s.s = u.s = v.s, f = cn(u, t, a, 1).minus(v).abs().cmp(cn(s, r, a, 1).minus(v).abs()) < 1 ? [u, t] : [s, r], h.precision = d, He = !0, f;
};
ie.toHexadecimal = ie.toHex = function(e, n) {
  return ud(this, 16, e, n);
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
  return e.d[0] ? (He = !1, r = cn(r, e, 0, n, 1).times(e), He = !0, Ie(r)) : (e.s = r.s, r = e), r;
};
ie.toNumber = function() {
  return +this;
};
ie.toOctal = function(e, n) {
  return ud(this, 8, e, n);
};
ie.toPower = ie.pow = function(e) {
  var n, r, t, o, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new s(An(+l, u));
  if (l = new s(l), l.eq(1)) return l;
  if (t = s.precision, a = s.rounding, e.eq(1)) return Ie(l, t, a);
  if (n = Qn(e.e / Me), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= C2)
    return o = $g(s, l, r, t), e.s < 0 ? new s(1).div(o) : Ie(o, t, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1) return new s(NaN);
    if ((e.d[n] & 1) == 0 && (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = An(+l, u), n = r == 0 || !isFinite(r) ? Qn(u * (Math.log("0." + Un(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (He = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), o = Ns(e.times(ot(l, t + r)), t), o.d && (o = Ie(o, t + 5, 1), So(o.d, t, a) && (n = t + 10, o = Ie(Ns(e.times(ot(l, n + r)), n), n + 5, 1), +Un(o.d).slice(t + 1, t + 15) + 1 == 1e14 && (o = Ie(o, t + 1, 0)))), o.s = i, He = !0, s.rounding = a, Ie(o, t, a));
};
ie.toPrecision = function(e, n) {
  var r, t = this, o = t.constructor;
  return e === void 0 ? r = Lr(t, t.e <= o.toExpNeg || t.e >= o.toExpPos) : (dr(e, 1, mt), n === void 0 ? n = o.rounding : dr(n, 0, 8), t = Ie(new o(t), e, n), r = Lr(t, e <= t.e || t.e <= o.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
ie.toSignificantDigits = ie.toSD = function(e, n) {
  var r = this, t = r.constructor;
  return e === void 0 ? (e = t.precision, n = t.rounding) : (dr(e, 1, mt), n === void 0 ? n = t.rounding : dr(n, 0, 8)), Ie(new t(r), e, n);
};
ie.toString = function() {
  var e = this, n = e.constructor, r = Lr(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
ie.truncated = ie.trunc = function() {
  return Ie(new this.constructor(this), this.e + 1, 1);
};
ie.valueOf = ie.toJSON = function() {
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
  if (e !== ~~e || e < n || e > r) throw Error(ct + e);
}
function So(e, n, r, t) {
  for (var o, a = e[0], i, l; a >= 10; a /= 10) --n;
  return --n < 0 ? (n += Me, o = 0) : (o = Math.ceil((n + 1) / Me), n %= Me), a = An(10, Me - n), l = e[o] % a | 0, t == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == a || r > 3 && l + 1 == a / 2) && (e[o + 1] / a / 100 | 0) == An(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[o + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (t || r < 4) && l == 9999 || !t && r > 3 && l == 4999) : i = ((t || r < 4) && l + 1 == a || !t && r > 3 && l + 1 == a / 2) && (e[o + 1] / a / 1e3 | 0) == An(10, n - 3) - 1, i;
}
function fa(e, n, r) {
  for (var t, o = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = o.length; a--; ) o[a] *= n;
    for (o[0] += Is.indexOf(e.charAt(i++)), t = 0; t < o.length; t++) o[t] > r - 1 && (o[t + 1] === void 0 && (o[t + 1] = 0), o[t + 1] += o[t] / r | 0, o[t] %= r);
  }
  return o.reverse();
}
function O2(e, n) {
  var r, t, o;
  if (n.isZero()) return n;
  t = n.d.length, t < 32 ? (r = Math.ceil(t / 3), o = (1 / Ti(4, r)).toString()) : (r = 16, o = "2.3283064365386962890625e-10"), e.precision += r, n = qt(e, 1, n.times(o), new e(1));
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
    var u, d, c, f, v, g, h, m, w, $, y, z, T, P, R, H, A, I, E, B, N = t.constructor, M = t.s == o.s ? 1 : -1, D = t.d, j = o.d;
    if (!D || !D[0] || !j || !j[0]) return new N(!t.s || !o.s || (D ? j && D[0] == j[0] : !j) ? NaN : D && D[0] == 0 || !j ? M * 0 : M / 0);
    for (s ? (v = 1, d = t.e - o.e) : (s = zr, v = Me, d = Qn(t.e / v) - Qn(o.e / v)), E = j.length, A = D.length, w = new N(M), $ = w.d = [], c = 0; j[c] == (D[c] || 0); c++) ;
    if (j[c] > (D[c] || 0) && d--, a == null ? (P = a = N.precision, i = N.rounding) : l ? P = a + (t.e - o.e) + 1 : P = a, P < 0)
      $.push(1), g = !0;
    else {
      if (P = P / v + 2 | 0, c = 0, E == 1) {
        for (f = 0, j = j[0], P++; (c < A || f) && P--; c++)
          R = f * s + (D[c] || 0), $[c] = R / j | 0, f = R % j | 0;
        g = f || c < A;
      } else {
        for (f = s / (j[0] + 1) | 0, f > 1 && (j = e(j, f, s), D = e(D, f, s), E = j.length, A = D.length), H = E, y = D.slice(0, E), z = y.length; z < E; ) y[z++] = 0;
        B = j.slice(), B.unshift(0), I = j[0], j[1] >= s / 2 && ++I;
        do
          f = 0, u = n(j, y, E, z), u < 0 ? (T = y[0], E != z && (T = T * s + (y[1] || 0)), f = T / I | 0, f > 1 ? (f >= s && (f = s - 1), h = e(j, f, s), m = h.length, z = y.length, u = n(h, y, m, z), u == 1 && (f--, r(h, E < m ? B : j, m, s))) : (f == 0 && (u = f = 1), h = j.slice()), m = h.length, m < z && h.unshift(0), r(y, h, z, s), u == -1 && (z = y.length, u = n(j, y, E, z), u < 1 && (f++, r(y, E < z ? B : j, z, s))), z = y.length) : u === 0 && (f++, y = [0]), $[c++] = f, u && y[0] ? y[z++] = D[H] || 0 : (y = [D[H]], z = 1);
        while ((H++ < A || y[0] !== void 0) && P--);
        g = y[0] !== void 0;
      }
      $[0] || $.shift();
    }
    if (v == 1)
      w.e = d, gg = g;
    else {
      for (c = 1, f = $[0]; f >= 10; f /= 10) c++;
      w.e = c + d * v - 1, Ie(w, l ? a + w.e + 1 : a, i, g);
    }
    return w;
  };
})();
function Ie(e, n, r, t) {
  var o, a, i, l, s, u, d, c, f, v = e.constructor;
  e: if (n != null) {
    if (c = e.d, !c) return e;
    for (o = 1, l = c[0]; l >= 10; l /= 10) o++;
    if (a = n - o, a < 0)
      a += Me, i = n, d = c[f = 0], s = d / An(10, o - i - 1) % 10 | 0;
    else if (f = Math.ceil((a + 1) / Me), l = c.length, f >= l)
      if (t) {
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
  if (!e.isFinite()) return Cg(e);
  var t, o = e.e, a = Un(e.d), i = a.length;
  return n ? (r && (t = r - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + _r(t) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : o < 0 ? (a = "0." + _r(-o - 1) + a, r && (t = r - i) > 0 && (a += _r(t))) : o >= i ? (a += _r(o + 1 - i), r && (t = r - o - 1) > 0 && (a = a + "." + _r(t))) : ((t = o + 1) < i && (a = a.slice(0, t) + "." + a.slice(t)), r && (t = r - i) > 0 && (o + 1 === i && (a += "."), a += _r(t))), a;
}
function zi(e, n) {
  var r = e[0];
  for (n *= Me; r >= 10; r /= 10) n++;
  return n;
}
function Oa(e, n, r) {
  if (n > P2)
    throw He = !0, r && (e.precision = r), Error(hg);
  return Ie(new e(Ca), n, 1, !0);
}
function Rr(e, n, r) {
  if (n > As) throw Error(hg);
  return Ie(new e(Pa), n, r, !0);
}
function kg(e) {
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
function $g(e, n, r, t) {
  var o, a = new e(1), i = Math.ceil(t / Me + 4);
  for (He = !1; ; ) {
    if (r % 2 && (a = a.times(n), _c(a.d, i) && (o = !0)), r = Qn(r / 2), r === 0) {
      r = a.d.length - 1, o && a.d[r] === 0 && ++a.d[r];
      break;
    }
    n = n.times(n), _c(n.d, i);
  }
  return He = !0, a;
}
function xc(e) {
  return e.d[e.d.length - 1] & 1;
}
function Sg(e, n, r) {
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
    if (a = Ie(a.times(e), s, 1), r = r.times(++d), l = i.plus(cn(a, r, s, 1)), Un(l.d).slice(0, s) === Un(i.d).slice(0, s)) {
      for (o = c; o--; ) i = Ie(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && So(i.d, s - t, v, u))
          f.precision = s += 10, r = a = l = new f(1), d = 0, u++;
        else return Ie(i, f.precision = g, v, He = !0);
      else
        return f.precision = g, i;
    }
    i = l;
  }
}
function ot(e, n) {
  var r, t, o, a, i, l, s, u, d, c, f, v = 1, g = 10, h = e, m = h.d, w = h.constructor, $ = w.rounding, y = w.precision;
  if (h.s < 0 || !m || !m[0] || !h.e && m[0] == 1 && m.length == 1) return new w(m && !m[0] ? -1 / 0 : h.s != 1 ? NaN : m ? 0 : h);
  if (n == null ? (He = !1, d = y) : d = n, w.precision = d += g, r = Un(m), t = r.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; t < 7 && t != 1 || t == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = Un(h.d), t = r.charAt(0), v++;
    a = h.e, t > 1 ? (h = new w("0." + r), a++) : h = new w(t + "." + r.slice(1));
  } else
    return u = Oa(w, d + 2, y).times(a + ""), h = ot(new w(t + "." + r.slice(1)), d - g).plus(u), w.precision = y, n == null ? Ie(h, y, $, He = !0) : h;
  for (c = h, s = i = h = cn(h.minus(1), h.plus(1), d, 1), f = Ie(h.times(h), d, 1), o = 3; ; ) {
    if (i = Ie(i.times(f), d, 1), u = s.plus(cn(i, new w(o), d, 1)), Un(u.d).slice(0, d) === Un(s.d).slice(0, d))
      if (s = s.times(2), a !== 0 && (s = s.plus(Oa(w, d + 2, y).times(a + ""))), s = cn(s, new w(v), d, 1), n == null)
        if (So(s.d, d - g, $, l))
          w.precision = d += g, u = i = h = cn(c.minus(1), c.plus(1), d, 1), f = Ie(h.times(h), d, 1), o = l = 1;
        else return Ie(s, w.precision = y, $, He = !0);
      else
        return w.precision = y, s;
    s = u, o += 2;
  }
}
function Cg(e) {
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
function z2(e, n) {
  var r, t, o, a, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), wg.test(n)) return va(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if ($2.test(n))
    r = 16, n = n.toLowerCase();
  else if (k2.test(n)) r = 2;
  else if (S2.test(n)) r = 8;
  else throw Error(ct + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, t = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, o = $g(t, new t(r), a, a * 2)), u = fa(n, r, zr), d = u.length - 1, a = d; u[a] === 0; --a) u.pop();
  return a < 0 ? new t(e.s * 0) : (e.e = zi(u, d), e.d = u, He = !1, i && (e = cn(e, o, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? An(2, s) : at.pow(2, s))), He = !0, e);
}
function T2(e, n) {
  var r, t = n.d.length;
  if (t < 3) return n.isZero() ? n : qt(e, 2, n, n);
  r = 1.4 * Math.sqrt(t), r = r > 16 ? 16 : r | 0, n = n.times(1 / Ti(5, r)), n = qt(e, 2, n, n);
  for (var o, a = new e(5), i = new e(16), l = new e(20); r--; )
    o = n.times(n), n = n.times(a.plus(o.times(i.times(o).minus(l))));
  return n;
}
function qt(e, n, r, t, o) {
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
function Pg(e, n) {
  var r, t = n.s < 0, o = Rr(e, e.precision, 1), a = o.times(0.5);
  if (n = n.abs(), n.lte(a))
    return Yr = t ? 4 : 1, n;
  if (r = n.divToInt(o), r.isZero()) Yr = t ? 3 : 2;
  else {
    if (n = n.minus(r.times(o)), n.lte(a))
      return Yr = xc(r) ? t ? 2 : 3 : t ? 4 : 1, n;
    Yr = xc(r) ? t ? 1 : 4 : t ? 3 : 2;
  }
  return n.minus(o).abs();
}
function ud(e, n, r, t) {
  var o, a, i, l, s, u, d, c, f, v = e.constructor, g = r !== void 0;
  if (g ? (dr(r, 1, mt), t === void 0 ? t = v.rounding : dr(t, 0, 8)) : (r = v.precision, t = v.rounding), !e.isFinite()) d = Cg(e);
  else {
    for (d = Lr(e), i = d.indexOf("."), g ? (o = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : o = n, i >= 0 && (d = d.replace(".", ""), f = new v(1), f.e = d.length - i, f.d = fa(Lr(f), 10, o), f.e = f.d.length), c = fa(d, 10, o), a = s = c.length; c[--s] == 0; ) c.pop();
    if (!c[0]) d = g ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = c, e.e = a, e = cn(e, f, r, t, 0, o), c = e.d, a = e.e, u = gg), i = c[r], l = o / 2, u = u || c[r + 1] !== void 0, u = t < 4 ? (i !== void 0 || u) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : i > l || i === l && (t === 4 || u || t === 6 && c[r - 1] & 1 || t === (e.s < 0 ? 8 : 7)), c.length = r, u) for (; ++c[--r] > o - 1; )
        c[r] = 0, r || (++a, c.unshift(1));
      for (s = c.length; !c[s - 1]; --s) ;
      for (i = 0, d = ""; i < s; i++) d += Is.charAt(c[i]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++) d += "0";
            for (c = fa(d, o, n), s = c.length; !c[s - 1]; --s) ;
            for (i = 1, d = "1."; i < s; i++) d += Is.charAt(c[i]);
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
function _c(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function E2(e) {
  return new this(e).abs();
}
function B2(e) {
  return new this(e).acos();
}
function D2(e) {
  return new this(e).acosh();
}
function I2(e, n) {
  return new this(e).plus(n);
}
function M2(e) {
  return new this(e).asin();
}
function A2(e) {
  return new this(e).asinh();
}
function N2(e) {
  return new this(e).atan();
}
function R2(e) {
  return new this(e).atanh();
}
function V2(e, n) {
  e = new this(e), n = new this(n);
  var r, t = this.precision, o = this.rounding, a = t + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Rr(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Rr(this, t, o) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Rr(this, a, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, r = this.atan(cn(e, n, a, 1)), n = Rr(this, a, 1), this.precision = t, this.rounding = o, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(cn(e, n, a, 1)), r;
}
function L2(e) {
  return new this(e).cbrt();
}
function F2(e) {
  return Ie(e = new this(e), e.e + 1, 2);
}
function H2(e, n, r) {
  return new this(e).clamp(n, r);
}
function U2(e) {
  if (!e || typeof e != "object") throw Error(Oi + "Object expected");
  var n, r, t, o = e.defaults === !0, a = [
    "precision",
    1,
    mt,
    "rounding",
    0,
    8,
    "toExpNeg",
    -At,
    0,
    "toExpPos",
    0,
    At,
    "maxE",
    0,
    At,
    "minE",
    -At,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (r = a[n], o && (this[r] = Ms[r]), (t = e[r]) !== void 0)
      if (Qn(t) === t && t >= a[n + 1] && t <= a[n + 2]) this[r] = t;
      else throw Error(ct + r + ": " + t);
  if (r = "crypto", o && (this[r] = Ms[r]), (t = e[r]) !== void 0)
    if (t === !0 || t === !1 || t === 0 || t === 1)
      if (t)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[r] = !0;
        else throw Error(bg);
      else this[r] = !1;
    else throw Error(ct + r + ": " + t);
  return this;
}
function j2(e) {
  return new this(e).cos();
}
function Y2(e) {
  return new this(e).cosh();
}
function Og(e) {
  var n, r, t;
  function o(a) {
    var i, l, s, u = this;
    if (!(u instanceof o)) return new o(a);
    if (u.constructor = o, ef(a)) {
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
      return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), wg.test(a) ? va(u, a) : z2(u, a);
    if (s === "bigint")
      return a < 0 ? (a = -a, u.s = -1) : u.s = 1, va(u, a.toString());
    throw Error(ct + a);
  }
  if (o.prototype = ie, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.EUCLID = 9, o.config = o.set = U2, o.clone = Og, o.isDecimal = ef, o.abs = E2, o.acos = B2, o.acosh = D2, o.add = I2, o.asin = M2, o.asinh = A2, o.atan = N2, o.atanh = R2, o.atan2 = V2, o.cbrt = L2, o.ceil = F2, o.clamp = H2, o.cos = j2, o.cosh = Y2, o.div = W2, o.exp = K2, o.floor = q2, o.hypot = X2, o.ln = G2, o.log = Z2, o.log10 = Q2, o.log2 = J2, o.max = x2, o.min = _2, o.mod = eP, o.mul = nP, o.pow = rP, o.random = tP, o.round = oP, o.sign = aP, o.sin = iP, o.sinh = lP, o.sqrt = sP, o.sub = uP, o.sum = dP, o.tan = cP, o.tanh = fP, o.trunc = vP, e === void 0 && (e = {}), e && e.defaults !== !0)
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
function K2(e) {
  return new this(e).exp();
}
function q2(e) {
  return Ie(e = new this(e), e.e + 1, 3);
}
function X2() {
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
function ef(e) {
  return e instanceof at || e && e.toStringTag === yg || !1;
}
function G2(e) {
  return new this(e).ln();
}
function Z2(e, n) {
  return new this(e).log(n);
}
function J2(e) {
  return new this(e).log(2);
}
function Q2(e) {
  return new this(e).log(10);
}
function x2() {
  return Sg(this, arguments, -1);
}
function _2() {
  return Sg(this, arguments, 1);
}
function eP(e, n) {
  return new this(e).mod(n);
}
function nP(e, n) {
  return new this(e).mul(n);
}
function rP(e, n) {
  return new this(e).pow(n);
}
function tP(e) {
  var n, r, t, o, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : dr(e, 1, mt), t = Math.ceil(e / Me), this.crypto) if (crypto.getRandomValues)
    for (n = crypto.getRandomValues(new Uint32Array(t)); a < t; )
      o = n[a], o >= 429e7 ? n[a] = crypto.getRandomValues(/* @__PURE__ */ new Uint32Array(1))[0] : l[a++] = o % 1e7;
  else if (crypto.randomBytes) {
    for (n = crypto.randomBytes(t *= 4); a < t; )
      o = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), o >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(o % 1e7), a += 4);
    a = t / 4;
  } else throw Error(bg);
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
function oP(e) {
  return Ie(e = new this(e), e.e + 1, this.rounding);
}
function aP(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function iP(e) {
  return new this(e).sin();
}
function lP(e) {
  return new this(e).sinh();
}
function sP(e) {
  return new this(e).sqrt();
}
function uP(e, n) {
  return new this(e).sub(n);
}
function dP() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (He = !1; r.s && ++e < n.length; ) r = r.plus(n[e]);
  return He = !0, Ie(r, this.precision, this.rounding);
}
function cP(e) {
  return new this(e).tan();
}
function fP(e) {
  return new this(e).tanh();
}
function vP(e) {
  return Ie(e = new this(e), e.e + 1, 1);
}
ie[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = ie.toString;
ie[Symbol.toStringTag] = "Decimal";
var at = ie.constructor = Og(Ms);
Ca = new at(Ca);
Pa = new at(Pa);
var zg = {
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
}, nf = 100, rf = 600, { name: pP, n: mP, classes: gP } = oe("counter"), hP = [
  "inputmode",
  "readonly",
  "disabled"
];
function bP(e, n) {
  const r = x("var-icon"), t = x("var-button"), o = x("var-form-details");
  return b(), k("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [L("div", qe({
    class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
    style: { background: e.color }
  }, e.$attrs), [
    U(t, {
      class: p(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
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
    We(L("input", {
      "onUpdate:modelValue": n[0] || (n[0] = (a) => e.inputValue = a),
      class: p(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
      style: J({
        width: e.toSizeUnit(e.inputWidth),
        fontSize: e.toSizeUnit(e.inputTextSize)
      }),
      inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
      readonly: e.readonly || e.formReadonly,
      disabled: e.disabled || e.formDisabled || e.disableInput,
      onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
    }, null, 46, hP), [[Zv, e.inputValue]]),
    U(t, {
      class: p(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
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
var Tg = te({
  name: pP,
  components: {
    VarButton: Jn,
    VarIcon: Je,
    VarFormDetails: Hn
  },
  directives: { Ripple: vn },
  inheritAttrs: !1,
  props: zg,
  setup(e) {
    const n = O(""), { bindForm: r, form: t } = Wn(), { errorMessage: o, validateWithTrigger: a, validate: i, resetValidation: l } = xn(), { readonly: s, disabled: u } = t ?? {}, d = S(() => {
      const { max: D, modelValue: j } = e;
      return D != null && Z(j) >= Z(D);
    }), c = S(() => {
      const { min: D, modelValue: j } = e;
      return D != null && Z(j) <= Z(D);
    });
    let f, v, g, h;
    C(r, {
      reset: $,
      validate: m,
      resetValidation: l
    }), me(() => e.modelValue, (D) => {
      N(y(String(D))), C(e.onChange, Z(D));
    }), N(y(String(e.modelValue)));
    function m() {
      return i(e.rules, e.modelValue);
    }
    function w(D) {
      Ne(() => {
        const { validateTrigger: j, rules: K, modelValue: G } = e;
        a(j, D, K, G);
      });
    }
    function $() {
      const { min: D } = e;
      C(e["onUpdate:modelValue"], D != null ? Z(D) : 0), l();
    }
    function y(D) {
      const { decimalLength: j, max: K, min: G } = e;
      let ce = Z(D);
      return K != null && ce > Z(K) && (ce = Z(K)), G != null && ce < Z(G) && (ce = Z(G)), D = String(ce), j != null && (D = ce.toFixed(Z(j))), D;
    }
    function z(D) {
      const { lazyChange: j, onBeforeChange: K } = e, { value: G } = D.target, ce = y(G);
      j ? C(K, Z(ce), M) : N(ce), w("onInputChange");
    }
    function T() {
      const { disabled: D, readonly: j, disableDecrement: K, decrementButton: G, lazyChange: ce, step: ge, modelValue: de, onDecrement: Q, onBeforeChange: ne } = e;
      if (u?.value || s?.value || D || j || K || !G || c.value) return;
      const pe = y(new at(Z(de)).minus(new at(Z(ge))).toString()), $e = Z(pe);
      C(Q, $e), ce ? C(ne, $e, M) : (N(pe), w("onDecrement"));
    }
    function P() {
      const { disabled: D, readonly: j, disableIncrement: K, incrementButton: G, lazyChange: ce, step: ge, modelValue: de, onIncrement: Q, onBeforeChange: ne } = e;
      if (u?.value || s?.value || D || j || K || !G || d.value) return;
      const pe = y(new at(Z(de)).plus(new at(Z(ge))).toString()), $e = Z(pe);
      C(Q, $e), ce ? C(ne, $e, M) : (N(pe), w("onIncrement"));
    }
    function R() {
      const { press: D, lazyChange: j } = e;
      !D || j || (h = window.setTimeout(() => {
        B();
      }, rf));
    }
    function H() {
      const { press: D, lazyChange: j } = e;
      !D || j || (g = window.setTimeout(() => {
        E();
      }, rf));
    }
    function A() {
      v && clearTimeout(v), h && clearTimeout(h);
    }
    function I() {
      f && clearTimeout(f), g && clearTimeout(g);
    }
    function E() {
      f = window.setTimeout(() => {
        P(), E();
      }, nf);
    }
    function B() {
      v = window.setTimeout(() => {
        T(), B();
      }, nf);
    }
    function N(D) {
      n.value = D;
      const j = Z(D);
      C(e["onUpdate:modelValue"], j);
    }
    function M(D) {
      N(y(String(D))), w("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: o,
      formDisabled: u,
      formReadonly: s,
      isMax: d,
      isMin: c,
      n: mP,
      classes: gP,
      formatElevation: zn,
      validate: m,
      reset: $,
      resetValidation: l,
      handleChange: z,
      decrement: T,
      increment: P,
      pressDecrement: R,
      pressIncrement: H,
      releaseDecrement: A,
      releaseIncrement: I,
      toSizeUnit: Te,
      toNumber: Z
    };
  }
});
Tg.render = bP;
var Ei = Tg;
ue(Ei);
fe(Ei, zg);
var dN = Ei, Rs = Ei, Eg = {
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
}, { name: yP, n: wP, classes: kP } = oe("pagination"), $P = ["item-mode", "onClick"];
function SP(e, n) {
  const r = x("var-icon"), t = x("var-input"), o = x("var-menu-option"), a = x("var-menu-select"), i = _e("ripple");
  return b(), k("ul", { class: p(e.n()) }, [
    We((b(), k("li", {
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
      onKeydown: n[3] || (n[3] = kd((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
    }, null, 8, ["modelValue", "disabled"]), L("span", null, [Le(" / " + ve(e.pageCount) + " ", 1), L("div", { class: p(e.n("simple-line")) }, null, 2)])], 2)) : (b(!0), k(De, { key: 1 }, Ye(e.pageList, (l, s) => We((b(), k("li", {
      key: s,
      "item-mode": e.getMode(l, s),
      class: p(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
      onClick: (u) => e.clickItem(l, s)
    }, [Le(ve(l), 1)], 10, $P)), [[i, { disabled: e.disabled }]])), 128)),
    We((b(), k("li", {
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
      options: se(() => [(b(!0), k(De, null, Ye(e.sizeOption, (l, s) => (b(), ke(o, {
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
      onKeydown: n[8] || (n[8] = kd((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
    }, null, 8, ["modelValue", "disabled"])], 2)) : X("v-if", !0),
    e.totalText ? (b(), k("li", {
      key: 4,
      class: p(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
    }, ve(e.totalText), 3)) : X("v-if", !0)
  ], 2);
}
var Bg = te({
  name: yP,
  components: {
    VarMenuSelect: Wt,
    VarMenuOption: Ht,
    VarIcon: Je,
    VarInput: Ft
  },
  directives: { Ripple: vn },
  props: Eg,
  setup(e) {
    const n = O(""), r = O("1"), t = O(!1), o = O(!1), a = O(Z(e.current) || 1), i = O(Z(e.size) || 10), l = O([]), s = S(() => Math.ceil(e.maxPagerCount / 2)), u = S(() => Math.ceil(Z(e.total) / Z(i.value))), d = S(() => [i.value * (a.value - 1) + 1, Math.min(i.value * a.value, Z(e.total))]), c = S(() => e.showTotal ? e.showTotal(Z(e.total), d.value) : ""), { t: f } = kr();
    me([() => e.current, () => e.size], ([y, z]) => {
      a.value = Z(y) || 1, i.value = Z(z || 10);
    }), me([
      a,
      i,
      u
    ], ([y, z, T], [P, R]) => {
      let H = [];
      const { maxPagerCount: A, total: I, onChange: E } = e, B = Math.ceil(Z(I) / Z(R)), N = T - (A - s.value) - 1;
      if (r.value = `${y}`, T - 2 > A) {
        if (P === void 0 || T !== B) for (let M = 2; M < A + 2; M++) H.push(M);
        if (y <= A && y < N) {
          H = [];
          for (let M = 1; M < A + 1; M++) H.push(M + 1);
          t.value = !0, o.value = !1;
        }
        if (y > A && y < N) {
          H = [];
          for (let M = 1; M < A + 1; M++) H.push(y + M - s.value);
          t.value = y === 2 && A === 1, o.value = !1;
        }
        if (y >= N) {
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
      l.value = H, P != null && T > 0 && C(E, y, z), C(e["onUpdate:current"], y), C(e["onUpdate:size"], z);
    }, { immediate: !0 });
    function v(y, z) {
      return tr(y) ? !1 : z === 1 ? t.value : o.value;
    }
    function g(y, z) {
      return tr(y) ? "basic" : z === 1 ? "head" : "tail";
    }
    function h(y, z) {
      if (!(y === a.value || e.disabled)) {
        if (y === "...") {
          a.value = z === 1 ? Math.max(a.value - e.maxPagerCount, 1) : Math.min(a.value + e.maxPagerCount, u.value);
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
        tr(y) && (a.value = y);
      }
    }
    function m() {
      const y = w(a.value);
      r.value = String(y), a.value = y;
    }
    function w(y) {
      return y > u.value ? u.value : y < 1 ? 1 : y;
    }
    function $(y, z, T) {
      T.target.blur();
      const P = w(Z(z));
      r.value = String(P), a.value = P, y === "quick" && (n.value = "");
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
      n: wP,
      classes: kP,
      getMode: g,
      isHideEllipsis: v,
      clickItem: h,
      clickSize: m,
      setPage: $,
      toNumber: Z,
      formatElevation: zn
    };
  }
});
Bg.render = SP;
var Bi = Bg;
ue(Bi);
fe(Bi, Eg);
var cN = Bi, za = Bi, Dg = {
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
function CP() {
  const { bindChildren: e, childProviders: n, length: r } = Dn(Ig);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function PP() {
  const { bindParent: e, parentProvider: n, index: r } = Bn(Ig);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var OP = (e, n, r) => new Promise((t, o) => {
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
}), { name: zP, n: TP, classes: EP } = oe("radio"), BP = [
  "aria-checked",
  "aria-disabled",
  "tabindex"
];
function DP(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), o = x("var-form-details"), a = _e("ripple"), i = _e("hover");
  return b(), k("div", { class: p(e.n("wrap")) }, [L("div", qe({
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
  }), [We((b(), k("div", {
    class: p(e.classes(e.n("action"), [
      e.checked,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: J({ color: e.checked ? e.checkedColor : e.uncheckedColor })
  }, [e.checked ? (b(), k("span", {
    key: 0,
    class: p(e.n("icon")),
    style: J({ fontSize: e.toSizeUnit(e.iconSize) })
  }, [F(e.$slots, "checked-icon", {}, () => [U(r, { name: "radio-marked" })])], 6)) : (b(), k("span", {
    key: 1,
    class: p(e.n("icon")),
    style: J({ fontSize: e.toSizeUnit(e.iconSize) })
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
  }, [F(e.$slots, "default", { checked: e.checked })], 2)) : X("v-if", !0)], 16, BP), U(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Mg = te({
  name: zP,
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
  props: Dg,
  setup(e) {
    const n = O(), r = O(!1), t = yn(e, "modelValue"), o = S(() => t.value === e.checkedValue), { radioGroup: a, bindRadioGroup: i } = PP(), { hovering: l, handleHovering: s } = ur(), { form: u, bindForm: d } = Wn(), c = S(() => {
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
    C(i, m), C(d, m), xe(() => window, "keydown", w), xe(() => window, "keyup", $);
    function w(E) {
      if (!r.value) return;
      const { key: B } = E;
      (B === "Enter" || B === " ") && Ze(E), B === "Enter" && n.value.click();
    }
    function $(E) {
      r.value && E.key === " " && (Ze(E), n.value.click());
    }
    function y(E) {
      Ne(() => {
        const { validateTrigger: B, rules: N, modelValue: M } = e;
        v(B, E, N, M);
      });
    }
    function z(E) {
      return OP(this, null, function* () {
        const { checkedValue: B, onChange: N } = e;
        a && t.value === B || (t.value = E, a?.onToggle(B), yield Ne(), C(N, E), y("onChange"));
      });
    }
    function T(E) {
      const { disabled: B, readonly: N, uncheckedValue: M, checkedValue: D, onClick: j } = e;
      u?.disabled.value || B || (C(j, E), !(u?.readonly.value || N) && z(o.value ? M : D));
    }
    function P() {
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
    function I(E) {
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
      n: TP,
      classes: EP,
      handleClick: T,
      handleTextClick: P,
      toSizeUnit: Te,
      toggle: I,
      reset: H,
      validate: A,
      resetValidation: h
    };
  }
});
Mg.render = DP;
var Di = Mg;
ue(Di);
fe(Di, Dg);
var fN = Di, Co = Di, { n: IP, classes: MP } = oe("data-table"), AP = ["colspan", "rowspan"], NP = ["disabled"];
function RP(e, n) {
  const r = x("var-checkbox"), t = x("var-radio"), o = x("var-icon"), a = x("maybe-v-node");
  return b(), k("td", qe({
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
  }, null, 8, ["name"])], 10, NP)) : e.tree && e.cell.treeLevel != null ? (b(), k("div", {
    key: 3,
    class: p(e.n("tree-cell")),
    style: J(e.treeStyle)
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
  }, null, 8, ["is"]))], 16, AP);
}
var Ag = te({
  name: "DataTableBodyCell",
  components: {
    MaybeVNode: lr,
    VarCheckbox: dt,
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
    const n = S(() => {
      var r;
      return { paddingInlineStart: `${((r = e.cell.treeLevel) != null ? r : 0) * 20}px` };
    });
    return {
      n: IP,
      classes: MP,
      treeStyle: n
    };
  }
});
Ag.render = RP;
var VP = Ag, { n: LP, classes: FP } = oe("data-table"), HP = ["colspan", "rowspan"];
function UP(e, n) {
  const r = x("var-checkbox"), t = x("maybe-v-node"), o = x("var-icon");
  return b(), k("th", {
    class: p(e.classes(e.n("cell"), e.n("header-cell"), [e.isSelectionColumn(e.headerCell.column), e.n("selection-cell")], [e.isExpandColumn(e.headerCell.column), e.n("expand-cell")], [e.headerCell.fixed, e.n("fixed-cell")], [e.shouldRenderLeftFixedShadow(e.headerCell.endLeafColumnIndex), e.n("fixed-cell--shadow-right")], [e.shouldRenderRightFixedShadow(e.headerCell.startLeafColumnIndex), e.n("fixed-cell--shadow-left")])),
    style: J(e.style),
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
    style: J(e.sortTriggerStyle),
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
  }, null, 34)) : X("v-if", !0)], 14, HP);
}
var Ng = te({
  name: "DataTableHeaderCell",
  components: {
    MaybeVNode: lr,
    VarCheckbox: dt,
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
      n: LP,
      classes: FP,
      columnSorterOrder: n,
      renderHeaderTitle: o,
      headerAlign: r,
      sortTriggerStyle: t
    };
  }
});
Ng.render = UP;
var jP = Ng, Rg = {
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
function Vg(e, n) {
  const r = uo(e, () => Array(n).fill(!1));
  return {
    rawMatrix: r,
    isCovered: (t, o) => r[t][o],
    cover: (t, o, a, i) => {
      uo(a, (l) => {
        uo(i, (s) => {
          l === 0 && s === 0 || (r[t + l][o + s] = !0);
        });
      });
    }
  };
}
function Po(e, n, r) {
  const t = e == null ? 1 : xl(ir(e, r));
  return t <= 0 ? 0 : hn(t, 1, n);
}
var YP = Object.defineProperty, WP = Object.defineProperties, KP = Object.getOwnPropertyDescriptors, tf = Object.getOwnPropertySymbols, qP = Object.prototype.hasOwnProperty, XP = Object.prototype.propertyIsEnumerable, of = (e, n, r) => n in e ? YP(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, GP = (e, n) => {
  for (var r in n || (n = {})) qP.call(n, r) && of(e, r, n[r]);
  if (tf)
    for (var r of tf(n)) XP.call(n, r) && of(e, r, n[r]);
  return e;
}, ZP = (e, n) => WP(e, KP(n));
function JP({ columns: e, sourceRows: n, tree: r, collapsedTreeRowKeys: t, expandedRowKeySet: o, firstTreeColumnIndex: a, getRowKey: i, getTreeChildren: l }) {
  const s = S(() => r() ? v(n(), !0) : f(n())), u = S(() => r() ? v(n(), !1) : s.value), d = S(() => {
    const g = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
    for (const w of s.value)
      g.set(w.key, w), h.set(w.row, w), w.parentKey != null && m.set(w.key, w.parentKey);
    return {
      rowByKey: g,
      rowByObject: h,
      parentKeyByChild: m
    };
  }), c = S(() => {
    const g = e(), h = u.value.length, m = g.length, w = Vg(h, m);
    return u.value.map(($, y) => {
      const z = [];
      return g.forEach((T, P) => {
        var R, H;
        if (w.isCovered(y, P)) return;
        const A = {
          row: $.row,
          rowIndex: $.rowIndex,
          column: T
        }, I = m - P, E = h - y, B = Po(T.colSpan, I, A), N = Po(T.rowSpan, E, A);
        if (B === 0 || N === 0) return;
        w.cover(y, P, N, B);
        const M = P === a.value;
        z.push({
          key: `${(H = (R = T.key) != null ? R : T.type) != null ? H : P}-${y}-${P}`,
          columnIndex: P,
          column: T,
          treeLevel: M ? $.level : void 0,
          treeExpandable: M ? $.expandable : void 0,
          treeExpanded: M ? $.treeExpanded : void 0,
          colSpan: B > 1 ? B : void 0,
          rowSpan: N > 1 ? N : void 0
        });
      }), ZP(GP({}, $), {
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
    let w = 0;
    function $(y, z, T, P) {
      for (const R of y) {
        const H = w;
        w += 1;
        const A = i(R, H), I = l(R), E = r() && I.length > 0, B = !E || !t.value.has(A);
        (h || P) && m.push({
          key: A,
          row: R,
          rowIndex: H,
          level: z,
          parentKey: T,
          expandable: E,
          treeExpanded: B
        }), $(I, z + 1, A, P && B);
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
function QP({ columns: e, resolvedColumnWidths: n }) {
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
var xP = Object.defineProperty, _P = Object.defineProperties, e4 = Object.getOwnPropertyDescriptors, af = Object.getOwnPropertySymbols, n4 = Object.prototype.hasOwnProperty, r4 = Object.prototype.propertyIsEnumerable, lf = (e, n, r) => n in e ? xP(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, t4 = (e, n) => {
  for (var r in n || (n = {})) n4.call(n, r) && lf(e, r, n[r]);
  if (af)
    for (var r of af(n)) r4.call(n, r) && lf(e, r, n[r]);
  return e;
}, o4 = (e, n) => _P(e, e4(n)), a4 = 52;
function i4({ columns: e, isSelectionColumn: n, isExpandColumn: r }) {
  const t = O({});
  let o;
  const a = S(() => e().map((w, $) => {
    var y;
    return (y = f(w, $)) != null ? y : 0;
  })), i = S(() => e().some((w, $) => f(w, $) != null)), l = S(() => a.value.reduce((w, $) => w + $, 0));
  me(e, () => {
    const w = new Set(e().map((y, z) => v(y, z))), $ = {};
    Object.entries(t.value).forEach(([y, z]) => {
      w.has(y) && ($[y] = z);
    }), t.value = $;
  }, { immediate: !0 }), Pt(() => {
    o?.();
  });
  function s(w) {
    return w.resizable === !0;
  }
  function u(w, $) {
    const y = {}, z = c(w, $);
    if (z != null)
      return y.width = Te(z), y.minWidth = Te(z), y.maxWidth = Te(z), y;
    const T = f(w, $);
    T != null && (y.width = Te(T));
    const P = g(w);
    P != null ? y.minWidth = Te(P) : T != null && (y.minWidth = Te(T));
    const R = h(w);
    return R != null && (y.maxWidth = Te(R)), y;
  }
  function d(w, $) {
    var y;
    if (!s($.column)) return;
    w.preventDefault(), w.stopPropagation();
    const z = (y = w.currentTarget) == null ? void 0 : y.closest("th");
    if (!z) return;
    o?.();
    const T = w.clientX, P = z.getBoundingClientRect().width, R = v($.column, $.startLeafColumnIndex);
    document.addEventListener("mousemove", H), document.addEventListener("mouseup", A), o = I;
    function H(E) {
      const B = m($.column, P + E.clientX - T);
      t.value = o4(t4({}, t.value), { [R]: B });
    }
    function A() {
      I();
    }
    function I() {
      document.removeEventListener("mousemove", H), document.removeEventListener("mouseup", A), o = void 0;
    }
  }
  function c(w, $) {
    return t.value[v(w, $)];
  }
  function f(w, $) {
    var y;
    const z = c(w, $);
    if (z != null) return z;
    const T = (y = w.width) != null ? y : n(w) || r(w) ? a4 : void 0;
    if (T != null) return m(w, fn(T));
    const P = g(w);
    if (P != null) return P;
  }
  function v(w, $) {
    var y, z;
    return `${(z = (y = w.key) != null ? y : w.type) != null ? z : "column"}-${$}`;
  }
  function g(w) {
    if (w.minWidth == null) return;
    const $ = fn(w.minWidth), y = h(w);
    return y == null ? $ : Math.min($, y);
  }
  function h(w) {
    if (w.maxWidth != null)
      return fn(w.maxWidth);
  }
  function m(w, $) {
    var y, z;
    const T = (y = g(w)) != null ? y : 0, P = (z = h(w)) != null ? z : Number.POSITIVE_INFINITY;
    return hn($, T, P);
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
function l4(e = []) {
  const n = O(), r = O(0), t = O(0);
  me(e, o, {
    immediate: !0,
    flush: "post"
  }), ju(n, o), wr(o);
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
function s4({ columns: e, expandedRowKeys: n, isExpandColumn: r }) {
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
function u4({ columns: e, sourceRows: n, summary: r }) {
  return { footRows: S(() => {
    const t = r();
    if (!t) return [];
    const o = t({ data: n() }), a = Kr(o), i = e(), l = Vg(a.length, i.length);
    return a.map((s, u) => i.flatMap((d, c) => {
      var f, v;
      if (l.isCovered(u, c)) return [];
      const g = (v = (f = d.key) != null ? f : d.type) != null ? v : String(c), h = s[g], m = i.length - c, w = a.length - u, $ = Po(h?.colSpan, m), y = Po(h?.rowSpan, w);
      return $ === 0 || y === 0 ? [] : (l.cover(u, c, y, $), [{
        key: `${u}-${g}`,
        columnIndex: c,
        column: d,
        value: h?.value,
        colSpan: $ > 1 ? $ : void 0,
        rowSpan: y > 1 ? y : void 0
      }]);
    }));
  }) };
}
function d4({ columns: e }) {
  const n = S(() => o(e())), r = S(() => {
    const s = e(), u = [], d = i(s);
    let c = 0;
    f(s, 0);
    function f(h, m) {
      u[m] || (u[m] = []);
      const w = u[m], $ = c, y = $ + o(h).length - 1;
      let z = $, T = 0;
      return h.forEach((P, R) => {
        if (t(P)) {
          T += v(w, P, m, R);
          return;
        }
        const H = g(w, P, m, y, z);
        H > 1 && (z = c - 1 + H), T += H;
      }), T;
    }
    function v(h, m, w, $) {
      const y = c, z = f(m.children, w + 1), T = c - 1;
      return z === 0 ? 0 : (h.push({
        key: a(m, w, $),
        column: m,
        colSpan: z,
        startLeafColumnIndex: y,
        endLeafColumnIndex: T,
        fixed: l(n.value.slice(y, T + 1))
      }), z);
    }
    function g(h, m, w, $, y) {
      if (c < y)
        return c += 1, 0;
      const z = c, T = $ - z + 1, P = Po(m.titleColSpan, T);
      return c += 1, P === 0 ? 0 : (h.push({
        key: a(m, w, z),
        column: m,
        colSpan: P > 1 ? P : void 0,
        rowSpan: d - w > 1 ? d - w : void 0,
        startLeafColumnIndex: z,
        endLeafColumnIndex: z + P - 1,
        fixed: l(n.value.slice(z, z + P))
      }), P);
    }
    return u;
  });
  function t(s) {
    return "children" in s && Ke(s.children) && s.children.length > 0;
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
var c4 = Object.defineProperty, f4 = Object.defineProperties, v4 = Object.getOwnPropertyDescriptors, sf = Object.getOwnPropertySymbols, p4 = Object.prototype.hasOwnProperty, m4 = Object.prototype.propertyIsEnumerable, uf = (e, n, r) => n in e ? c4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ul = (e, n) => {
  for (var r in n || (n = {})) p4.call(n, r) && uf(e, r, n[r]);
  if (sf)
    for (var r of sf(n)) m4.call(n, r) && uf(e, r, n[r]);
  return e;
}, df = (e, n) => f4(e, v4(n)), cf = {
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
function g4({ pagination: e, remote: n, loading: r, plain: t, page: o, pageSize: a, total: i, data: l, onUpdatePage: s }) {
  const u = S(() => {
    var h;
    const m = e();
    return Io(m) ? df(Ul({}, cf), {
      elevation: t() ? 1 : !0,
      disabled: r()
    }) : df(Ul(Ul({}, cf), m), {
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
  return me([
    e,
    n,
    i,
    o,
    v
  ], ([h, m, w, $, y]) => {
    h === !1 || m && w == null || $ === y || C(s?.(), y);
  }, { immediate: !0 }), {
    paginationProps: u,
    paginationTotal: d,
    showPagination: c,
    normalizedPage: v,
    pagedData: g
  };
}
var h4 = Object.defineProperty, b4 = Object.defineProperties, y4 = Object.getOwnPropertyDescriptors, ff = Object.getOwnPropertySymbols, w4 = Object.prototype.hasOwnProperty, k4 = Object.prototype.propertyIsEnumerable, vf = (e, n, r) => n in e ? h4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, pf = (e, n) => {
  for (var r in n || (n = {})) w4.call(n, r) && vf(e, r, n[r]);
  if (ff)
    for (var r of ff(n)) k4.call(n, r) && vf(e, r, n[r]);
  return e;
}, mf = (e, n) => b4(e, y4(n));
function $4({ columns: e, tree: n, cascade: r, pagedData: t, allFlatRows: o, treeRowMeta: a, checkedRowKeys: i, isSelectionColumn: l, getTreeChildren: s }) {
  const u = S(() => e().find(l)), d = S(() => n() && r() && !!u.value && m(u.value)), c = S(() => new Set(i.value)), f = S(() => {
    const E = /* @__PURE__ */ new Map(), B = u.value;
    if (!B) return E;
    for (const M of t()) N(M);
    function N(M) {
      const D = a().rowByObject.get(M);
      if (!D) return {
        checked: !1,
        indeterminate: !1,
        selectable: !1
      };
      const j = s(M).map(N), K = $(M, D.rowIndex, B), G = c.value.has(D.key);
      if (!d.value || j.length === 0) {
        const ne = {
          checked: G,
          indeterminate: !1
        };
        return E.set(D.key, ne), mf(pf({}, ne), { selectable: K });
      }
      const ce = j.filter((ne) => ne.selectable), ge = ce.length > 0 ? ce.every((ne) => ne.checked) : G, de = ce.some((ne) => ne.checked || ne.indeterminate), Q = {
        checked: K ? ge : !1,
        indeterminate: ce.length > 0 && !ge && de
      };
      return E.set(D.key, Q), mf(pf({}, Q), { selectable: K || ce.length > 0 });
    }
    return E;
  }), v = S(() => {
    const E = u.value;
    return E ? o().filter((B) => $(B.row, B.rowIndex, E)) : [];
  }), g = S(() => v.value.length > 0 && v.value.every((E) => z(E.key))), h = S(() => v.value.some((E) => z(E.key) || T(E.key)) && !g.value);
  function m(E) {
    return E.multiple !== !1;
  }
  function w(E) {
    return E.selectable !== !1;
  }
  function $(E, B, N) {
    return !N || N.selectable == null || N.selectable === !0 ? !0 : N.selectable === !1 ? !1 : N.selectable({
      row: E,
      rowIndex: B
    });
  }
  function y(E) {
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
  function P(E, B) {
    const N = u.value;
    if (!N || !w(N) || !$(E.row, E.rowIndex, N)) return;
    if (!m(N)) {
      y(B ? [E.key] : i.value.filter((D) => D !== E.key));
      return;
    }
    const M = new Set(i.value);
    if (d.value) {
      for (const D of H(E.row)) B ? M.add(D) : M.delete(D);
      I(M, E.key);
    } else B ? M.add(E.key) : M.delete(E.key);
    y([...M]);
  }
  function R(E) {
    const B = u.value;
    if (!B || !w(B) || !m(B)) return;
    const N = new Set(i.value);
    for (const M of v.value) E ? N.add(M.key) : N.delete(M.key);
    y([...N]);
  }
  function H(E) {
    const B = u.value, N = [];
    if (!B) return N;
    function M(D) {
      const j = a().rowByObject.get(D);
      if (j) {
        $(D, j.rowIndex, B) && N.push(j.key);
        for (const K of s(D)) M(K);
      }
    }
    return M(E), N;
  }
  function A(E, B) {
    const N = u.value, M = a().rowByObject.get(E);
    if (!N || !M) return !1;
    const D = $(E, M.rowIndex, N), j = s(E);
    return j.length ? D && j.every((K) => A(K, B)) : D ? B.has(M.key) : !0;
  }
  function I(E, B) {
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
    isSelectionColumnSelectable: w,
    isRowSelectable: $,
    isRowKeySelected: z,
    isRowKeyIndeterminate: T,
    toggleRowSelection: P,
    toggleCurrentSelectableRows: R
  };
}
var S4 = Object.defineProperty, C4 = Object.defineProperties, P4 = Object.getOwnPropertyDescriptors, gf = Object.getOwnPropertySymbols, O4 = Object.prototype.hasOwnProperty, z4 = Object.prototype.propertyIsEnumerable, hf = (e, n, r) => n in e ? S4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, T4 = (e, n) => {
  for (var r in n || (n = {})) O4.call(n, r) && hf(e, r, n[r]);
  if (gf)
    for (var r of gf(n)) z4.call(n, r) && hf(e, r, n[r]);
  return e;
}, E4 = (e, n) => C4(e, P4(n));
function B4({ sorters: e, sortMode: n, onUpdateSorters: r }) {
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
      C(r(), t.value.map((u) => u.key !== l ? u : E4(T4({}, u), { order: "desc" })));
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
    function v(g) {
      for (const h of g) {
        const m = f;
        f += 1;
        const w = o(h);
        w.length > 0 && c.add(t(h, m)), v(w);
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
var I4 = Object.defineProperty, M4 = Object.defineProperties, A4 = Object.getOwnPropertyDescriptors, bf = Object.getOwnPropertySymbols, N4 = Object.prototype.hasOwnProperty, R4 = Object.prototype.propertyIsEnumerable, yf = (e, n, r) => n in e ? I4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, wf = (e, n) => {
  for (var r in n || (n = {})) N4.call(n, r) && yf(e, r, n[r]);
  if (bf)
    for (var r of bf(n)) R4.call(n, r) && yf(e, r, n[r]);
  return e;
}, kf = (e, n) => M4(e, A4(n)), { name: V4, n: L4, classes: F4 } = oe("data-table"), H4 = { key: 0 }, U4 = ["colspan"], j4 = { key: 1 }, Y4 = ["colspan", "rowspan"];
function W4(e, n) {
  const r = x("data-table-header-cell"), t = x("data-table-body-cell"), o = x("maybe-v-node"), a = x("var-pagination"), i = x("var-loading");
  return b(), k("div", { class: p(e.classes(e.n(), [!e.plain, e.formatElevation(e.elevation, 1)], e.n("$--box"), [e.surface === "low", e.n("--surface-low")], [e.bordered, e.n("--bordered")], [e.cellBordered, e.n("--cell-bordered")], [e.plain, e.n("--plain")], [e.showPagination, e.n("--with-footer")], e.n(`--${e.size}`))) }, [U(i, { loading: e.loading }, Pr({
    default: se(() => [L("div", {
      ref: "container",
      class: p(e.classes(e.n("container"), e.n("$--scrollbar"))),
      style: J(e.containerStyle),
      onScroll: n[0] || (n[0] = (...l) => e.handleContainerScroll && e.handleContainerScroll(...l))
    }, [e.columns.length ? (b(), k("table", {
      key: 0,
      class: p(e.n("table")),
      style: J(e.tableStyle)
    }, [
      L("colgroup", null, [(b(!0), k(De, null, Ye(e.columns, (l, s) => {
        var u, d;
        return b(), k("col", {
          key: (d = (u = l.key) != null ? u : l.type) != null ? d : s,
          style: J(e.getColStyle(l, s))
        }, null, 4);
      }), 128))]),
      L("thead", null, [(b(!0), k(De, null, Ye(e.headerRows, (l, s) => (b(), k("tr", {
        key: s,
        class: p(e.n("header-row"))
      }, [(b(!0), k(De, null, Ye(l, (u) => (b(), ke(r, {
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
      e.bodyRows.length ? (b(), k("tbody", H4, [(b(!0), k(De, null, Ye(e.bodyRows, (l) => (b(), k(De, { key: l.key }, [L("tr", qe({ class: e.classes(e.n("row"), e.getRowClass(l)) }, { ref_for: !0 }, e.getRowProps(l)), [(b(!0), k(De, null, Ye(l.cells, (s) => (b(), ke(t, {
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
        class: p(e.n("expanded-row"))
      }, [L("td", {
        class: p(e.classes(e.n("cell"), e.n("body-cell"), e.n("expanded-cell"))),
        colspan: e.columns.length
      }, [L("div", { class: p(e.n("expanded-content")) }, [U(o, {
        is: e.renderExpandedRow(l),
        tag: "div"
      }, null, 8, ["is"])], 2)], 10, U4)], 2)) : X("v-if", !0)], 64))), 128))])) : X("v-if", !0),
      e.footRows.length ? (b(), k("tfoot", j4, [(b(!0), k(De, null, Ye(e.footRows, (l, s) => (b(), k("tr", {
        key: s,
        class: p(e.n("summary-row"))
      }, [(b(!0), k(De, null, Ye(l, (u) => (b(), k("td", {
        key: u.key,
        class: p(e.classes(e.n("cell"), e.n("summary-cell"), [u.column.fixed, e.n("fixed-cell")], [e.shouldRenderLeftFixedShadow(u.columnIndex), e.n("fixed-cell--shadow-right")], [e.shouldRenderRightFixedShadow(u.columnIndex), e.n("fixed-cell--shadow-left")])),
        style: J(e.getBodyCellStyle(u)),
        colspan: u.colSpan,
        rowspan: u.rowSpan
      }, [U(o, {
        is: u.value,
        tag: "div"
      }, null, 8, ["is"])], 14, Y4))), 128))], 2))), 128))])) : X("v-if", !0)
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
var Lg = te({
  name: V4,
  components: {
    DataTableBodyCell: VP,
    DataTableHeaderCell: jP,
    VarLoading: St,
    VarPagination: za,
    MaybeVNode: lr
  },
  props: Rg,
  setup(e) {
    const { t: n } = kr(), r = yn(e, "checkedRowKeys"), t = yn(e, "expandedRowKeys"), o = yn(e, "expandedTreeRowKeys"), a = yn(e, "page"), i = yn(e, "pageSize"), { collapsedTreeRowKeys: l, toggleTreeRowExpanded: s } = D4({
      tree: () => e.tree,
      data: () => e.data,
      expandedTreeRowKeys: o,
      getRowKey: re,
      getTreeChildren: we
    }), { normalizedColumns: u, headerRows: d } = d4({ columns: () => e.columns }), { hasResolvedColumnWidth: c, resolvedColumnWidths: f, totalResolvedColumnWidth: v, getColStyle: g, isColumnResizable: h, startColumnResize: m } = i4({
      columns: () => u.value,
      isSelectionColumn: ze,
      isExpandColumn: Ge
    }), w = S(() => {
      const le = {};
      return e.maxHeight != null && (le.maxHeight = Te(e.maxHeight), le.overflow = "auto"), le.overflowX = "auto", le;
    }), $ = S(() => {
      const le = {
        width: "100%",
        tableLayout: c.value ? "fixed" : e.tableLayout
      };
      return e.scrollX != null && (le.minWidth = Te(e.scrollX)), le;
    }), { getFixedStyle: y, isFirstRightFixedColumn: z, isLastLeftFixedColumn: T } = QP({
      columns: () => u.value,
      resolvedColumnWidths: () => f.value
    }), { getColumnSorterOrder: P, isColumnSortable: R, toggleColumnSorter: H } = B4({
      sorters: () => e.sorters,
      sortMode: () => e.sortMode,
      onUpdateSorters: () => e["onUpdate:sorters"]
    }), { paginationProps: A, paginationTotal: I, showPagination: E, normalizedPage: B, pagedData: N } = g4({
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
    }), M = S(() => u.value.findIndex((le) => !ze(le) && !Ge(le))), { expandedRowKeySet: D, isRowExpandable: j, toggleRowExpanded: K, renderExpandedRow: G } = s4({
      columns: () => u.value,
      expandedRowKeys: t,
      isExpandColumn: Ge
    }), { allFlatRows: ce, treeRowMeta: ge, bodyRows: de } = JP({
      collapsedTreeRowKeys: l,
      expandedRowKeySet: D,
      firstTreeColumnIndex: M,
      getRowKey: re,
      getTreeChildren: we,
      columns: () => u.value,
      sourceRows: () => N.value,
      tree: () => e.tree
    }), { footRows: Q } = u4({
      columns: () => u.value,
      sourceRows: () => N.value,
      summary: () => e.summary
    }), { container: ne, scrollLeft: pe, maxScrollDistance: $e, handleContainerScroll: W } = l4([
      u,
      de,
      Q,
      v,
      () => e.scrollX
    ]), { currentSelectableRows: ae, allCurrentRowsSelected: Ee, someCurrentRowsSelected: Ue, isMultipleSelectionColumn: nn, isSelectionColumnSelectable: Xe, isRowSelectable: en, isRowKeySelected: on, isRowKeyIndeterminate: ye, toggleRowSelection: ee, toggleCurrentSelectableRows: Y } = $4({
      checkedRowKeys: r,
      isSelectionColumn: ze,
      getTreeChildren: we,
      columns: () => u.value,
      tree: () => e.tree,
      cascade: () => e.cascade,
      pagedData: () => N.value,
      allFlatRows: () => ce.value,
      treeRowMeta: () => ge.value
    });
    function re(le, Se) {
      var je;
      return Yn(e.rowKey) ? e.rowKey({
        row: le,
        rowIndex: Se
      }) : (je = le[e.rowKey]) != null ? je : Se;
    }
    function we(le) {
      const Se = le[e.childrenKey];
      return Ke(Se) ? Se : [];
    }
    function ze(le) {
      return le.type === "selection";
    }
    function Ge(le) {
      return le.type === "expand";
    }
    function rn(le, Se) {
      if (!(ze(Se) || Ge(Se)))
        return Se.render ? Se.render({
          row: le.row,
          rowIndex: le.rowIndex
        }) : le.row[Se.key];
    }
    function mn(le) {
      if (e.rowProps)
        return ir(e.rowProps, {
          row: le.row,
          rowIndex: le.rowIndex
        });
    }
    function In(le) {
      if (e.rowClass)
        return ir(e.rowClass, {
          row: le.row,
          rowIndex: le.rowIndex
        });
    }
    function $r(le, Se) {
      if (Se.cellProps)
        return ir(Se.cellProps, {
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
      return pe.value < $e.value - 1 && z(le);
    }
    function sn(le) {
      var Se;
      return kf(wf({ textAlign: ar((Se = le.column.titleAlign) != null ? Se : le.column.align) }, y(le.fixed, le.startLeafColumnIndex)), { zIndex: le.fixed ? 3 : 2 });
    }
    function _(le) {
      return kf(wf({ textAlign: ar(le.column.align) }, y(le.column.fixed, le.columnIndex)), { zIndex: le.column.fixed ? 1 : void 0 });
    }
    function be(le, Se) {
      a.value = le, i.value = Se;
    }
    return {
      pt: n,
      t: gn,
      container: ne,
      expandedRowKeys: t,
      containerStyle: w,
      paginationProps: A,
      paginationTotal: I,
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
      footRows: Q,
      isColumnResizable: h,
      getRowProps: mn,
      getRowClass: In,
      getCellProps: $r,
      isSelectionColumn: ze,
      isExpandColumn: Ge,
      isColumnSortable: R,
      isMultipleSelectionColumn: nn,
      isSelectionColumnSelectable: Xe,
      getColumnSorterOrder: P,
      isRowExpandable: j,
      isRowKeyIndeterminate: ye,
      isRowKeySelected: on,
      isRowSelectable: en,
      shouldRenderLeftFixedShadow: _n,
      shouldRenderRightFixedShadow: Re,
      toggleColumnSorter: H,
      toggleCurrentSelectableRows: Y,
      toggleRowExpanded: K,
      toggleTreeRowExpanded: s,
      toggleRowSelection: ee,
      renderCell: rn,
      renderExpandedRow: G,
      getColStyle: g,
      getHeaderCellStyle: sn,
      getBodyCellStyle: _,
      handlePaginationChange: be,
      handleContainerScroll: W,
      isLastHeaderColumn: Br,
      startColumnResize: m,
      n: L4,
      classes: F4,
      formatElevation: zn,
      toSizeUnit: Te
    };
  }
});
Lg.render = W4;
var Ii = Lg;
ue(Ii);
fe(Ii, Rg);
var vN = Ii, Vs = Ii, Ve = Hu({
  Year: "year",
  Month: "month",
  Date: "date"
}), Qe = Hu({
  Year: Ve.Year,
  Month: Ve.Month,
  Day: "day"
}), lo = [
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
], so = [
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
}, Wr = Hu({
  Prev: "prev",
  Next: "next"
}), K4 = Object.defineProperty, $f = Object.getOwnPropertySymbols, q4 = Object.prototype.hasOwnProperty, X4 = Object.prototype.propertyIsEnumerable, Sf = (e, n, r) => n in e ? K4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, G4 = (e, n) => {
  for (var r in n || (n = {})) q4.call(n, r) && Sf(e, r, n[r]);
  if ($f)
    for (var r of $f(n)) X4.call(n, r) && Sf(e, r, n[r]);
  return e;
}, er = Uo(), xo = {
  Prev: -1,
  Current: 0,
  Next: 1
}, { n: _o } = oe("day-picker"), { n: Cf } = oe("date-picker");
function Z4(e, n) {
  const r = x("var-button");
  return b(), k("div", { class: p(e.n()) }, [L("div", { class: p(e.n("content")) }, [U(bn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: se(() => [(b(), k("div", { key: e.panelKey }, [L("ul", { class: p(e.n("head")) }, [(b(!0), k(De, null, Ye(e.sortWeekList, (t) => (b(), k("li", { key: t }, ve(e.getDayAbbr(t)), 1))), 128))], 2), L("ul", { class: p(e.n("body")) }, [(b(!0), k(De, null, Ye(e.days, (t, o) => (b(), k("li", { key: o }, [U(r, qe({
      type: "primary",
      "var-day-picker-cover": "",
      round: "",
      elevation: e.panelProps.buttonElevation
    }, { ref_for: !0 }, G4({}, e.buttonProps(t)), { onClick: (a) => e.selectDay(t) }), {
      default: se(() => [Le(ve(t.day), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))], 2)]))]),
    _: 1
  }, 8, ["name"])], 2)], 2);
}
var Fg = te({
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
    const [, , r] = e.current.split("-"), t = O([]), o = O(!1), a = O(0), { t: i } = kr(), l = S(() => e.selection.selectedYear === e.preview.previewYear && e.selection.selectedMonth === e.preview.previewMonth), s = S(() => {
      const P = so.findIndex((R) => R === e.panelProps.firstDayOfWeek);
      return P === -1 || P === 0 ? [...so] : [...so.slice(P), ...so.slice(0, P)];
    });
    function u(P) {
      var R, H;
      return (H = (R = (i || gn)("datePickerWeekDict")) == null ? void 0 : R[P].abbr) != null ? H : "";
    }
    function d(P, R) {
      return {
        dateValue: P.format(Ln.Day),
        day: P.date(),
        monthOffset: R
      };
    }
    function c() {
      const { preview: { previewMonth: P, previewYear: R } } = e, H = er(`${R}-${P}-01`), A = H.endOf(Qe.Month), I = H.daysInMonth(), E = Math.max(0, s.value.findIndex((M) => M === `${H.day()}`)), B = 42 - E - I, N = [];
      for (let M = E; M > 0; M--) N.push(d(H.subtract(M, Qe.Day), xo.Prev));
      for (let M = 1; M <= I; M++) N.push(d(H.date(M), xo.Current));
      for (let M = 1; M <= B; M++) N.push(d(A.add(M, Qe.Day), xo.Next));
      t.value = N;
    }
    function f(P) {
      const { min: R, max: H } = e.panelProps, A = H ? er(P).isSameOrBefore(er(H), Qe.Day) : !0, I = R ? er(P).isSameOrAfter(er(R), Qe.Day) : !0;
      return A && I;
    }
    function v() {
      const { selectedYear: P, selectedMonth: R, selectedDay: H } = e.selection;
      return P && R && H ? `${P}-${R}-${H}` : void 0;
    }
    function g(P) {
      const R = v();
      return R ? er(P).isSame(er(R), Qe.Day) : !1;
    }
    function h(P) {
      const { selection: { selectedDays: R, selectedRangeDays: H }, panelProps: { range: A } } = e;
      if (!A) return R.includes(P);
      if (!H.length) return !1;
      if (H.length === 1) return er(P).isSame(er(H[0]), Qe.Day);
      const I = er(P).isSameOrBefore(er(H[1]), Qe.Day), E = er(P).isSameOrAfter(er(H[0]), Qe.Day);
      return I && E;
    }
    function m(P) {
      const { allowedDates: R } = e.panelProps;
      return !f(P) || (R ? !R(P) : !1);
    }
    function w(P, R, H) {
      const { multiple: A, range: I, showCurrent: E } = e.panelProps;
      return E && er(P).isSame(er(e.current), Qe.Day) ? (I || A || l.value) && H ? !0 : I || A ? !R : l.value ? e.selection.selectedDay !== r : !0 : !1;
    }
    function $(P) {
      const { panelProps: { color: R, multiple: H, range: A } } = e, { dateValue: I, monthOffset: E } = P, B = E === xo.Current, N = g(I), M = A || H ? h(I) : N, D = m(I), j = D || (A || H ? !M : !N), K = w(I, M, D), G = !D && !K && !M;
      return {
        text: j,
        outline: K,
        textColor: !D && K ? R ?? "" : "",
        [`${Cf()}-color-cover`]: G,
        class: [_o("button"), {
          [_o("button--usable")]: B,
          [_o("button--adjacent")]: !B
        }],
        disabled: D
      };
    }
    function y(P) {
      o.value = P === Wr.Prev, a.value += P === Wr.Prev ? -1 : 1;
    }
    function z(P) {
      o.value = P === Wr.Prev, a.value += P === Wr.Prev ? -1 : 1;
    }
    function T(P) {
      n("choose-day", P.day, P.monthOffset);
    }
    return On(() => {
      c();
    }), me(() => e.preview, () => {
      c();
    }), {
      n: _o,
      nDate: Cf,
      days: t,
      reverse: o,
      panelKey: a,
      sortWeekList: s,
      shiftPreview: y,
      shiftYearPreview: z,
      getDayAbbr: u,
      selectDay: T,
      buttonProps: $
    };
  }
});
Fg.render = Z4;
var J4 = Fg, Q4 = Object.defineProperty, Pf = Object.getOwnPropertySymbols, x4 = Object.prototype.hasOwnProperty, _4 = Object.prototype.propertyIsEnumerable, Of = (e, n, r) => n in e ? Q4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, e3 = (e, n) => {
  for (var r in n || (n = {})) x4.call(n, r) && Of(e, r, n[r]);
  if (Pf)
    for (var r of Pf(n)) _4.call(n, r) && Of(e, r, n[r]);
  return e;
}, Ir = Uo(), { n: zf } = oe("month-picker"), { n: Tf } = oe("date-picker");
function n3(e, n) {
  const r = x("var-button");
  return b(), k("div", { class: p(e.n()) }, [L("div", { class: p(e.n("content")) }, [U(bn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: se(() => [(b(), k("ul", { key: e.panelKey }, [(b(!0), k(De, null, Ye(e.MonthList, (t) => (b(), k("li", { key: t }, [U(r, qe({
      type: "primary",
      "var-month-picker-cover": "",
      elevation: e.panelProps.buttonElevation
    }, { ref_for: !0 }, e3({}, e.buttonProps(t)), { onClick: (o) => e.selectMonth(t) }), {
      default: se(() => [Le(ve(e.getMonthAbbr(t)), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))]))]),
    _: 1
  }, 8, ["name"])], 2)], 2);
}
var Hg = te({
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
    const r = O(!1), t = O(0), { t: o } = kr();
    function a(c) {
      var f, v;
      return (v = (f = (o || gn)("datePickerMonthDict")) == null ? void 0 : f[c].abbr) != null ? v : "";
    }
    function i(c) {
      const { preview: { previewYear: f }, panelProps: { min: v, max: g } } = e, h = `${f}-${c}`, m = g ? Ir(h).isSameOrBefore(Ir(g), Qe.Month) : !0, w = v ? Ir(h).isSameOrAfter(Ir(v), Qe.Month) : !0;
      return m && w;
    }
    function l(c, f) {
      const { preview: { previewYear: v }, selection: { selectedMonth: g, selectedYear: h, selectedMonths: m, selectedRangeMonths: w }, panelProps: { multiple: $, range: y } } = e;
      if (y) {
        if (!w.length) return !1;
        if (w.length === 1) return Ir(c).isSame(Ir(w[0]), Qe.Month);
        const z = Ir(c).isSameOrBefore(Ir(w[1]), Qe.Month), T = Ir(c).isSameOrAfter(Ir(w[0]), Qe.Month);
        return z && T;
      }
      return $ ? m.includes(c) : h === v && g === f;
    }
    function s(c) {
      const { preview: { previewYear: f }, panelProps: { allowedDates: v, color: g, type: h } } = e, m = `${f}-${c}`, w = l(m, c), $ = !i(c) || (h === Ve.Month && v ? !v(m) : !1);
      return {
        outline: !1,
        text: $ || !w,
        color: w && !$ ? g : "",
        textColor: "",
        [`${Tf()}-color-cover`]: !w && !$,
        class: zf("button"),
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
      n: zf,
      nDate: Tf,
      MonthList: lo,
      reverse: r,
      panelKey: t,
      shiftPreview: d,
      buttonProps: s,
      getMonthAbbr: a,
      selectMonth: u
    };
  }
});
Hg.render = n3;
var r3 = Hg, { n: t3 } = oe("date-picker-header");
function o3(e, n) {
  const r = x("var-icon"), t = x("var-button");
  return b(), k("div", { class: p([e.n(), e.n(`--${e.type}`)]) }, [e.type === e.DatePickerUnits.Day ? (b(), k(De, { key: 0 }, [L("div", { class: p(e.n("nav")) }, [
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
var Ug = te({
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
      n: t3,
      DatePickerTypes: Ve,
      DatePickerUnits: Qe,
      ShiftDirections: Wr,
      getMonthName: r,
      getPanelLabel: t
    };
  }
});
Ug.render = o3;
var a3 = Ug, jg = {
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
}, i3 = Object.defineProperty, Ef = Object.getOwnPropertySymbols, l3 = Object.prototype.hasOwnProperty, s3 = Object.prototype.propertyIsEnumerable, Bf = (e, n, r) => n in e ? i3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, u3 = (e, n) => {
  for (var r in n || (n = {})) l3.call(n, r) && Bf(e, r, n[r]);
  if (Ef)
    for (var r of Ef(n)) s3.call(n, r) && Bf(e, r, n[r]);
  return e;
}, Mr = Uo(), { n: Df } = oe("year-picker"), { n: jl } = oe("date-picker");
function d3(e, n) {
  const r = x("var-button");
  return b(), k("div", null, [U(bn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: se(() => [(b(), k("ul", {
      ref: "panel",
      key: e.panelKey,
      class: p(e.n())
    }, [(b(!0), k(De, null, Ye(e.yearList, (t) => (b(), k("li", { key: t }, [U(r, qe({
      type: "primary",
      "var-year-picker-cover": "",
      elevation: e.panelProps.buttonElevation
    }, { ref_for: !0 }, u3({}, e.buttonProps(`${t}`)), { onClick: (o) => e.selectYear(t) }), {
      default: se(() => [Le(ve(t), 1)]),
      _: 2
    }, 1040, ["elevation", "onClick"])]))), 128))], 2))]),
    _: 1
  }, 8, ["name"])]);
}
var Yg = te({
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
    const r = O(), t = O(!1), o = O(0), a = O(0), i = S(() => {
      if (!e.preview) return [];
      const v = Math.floor(Z(e.preview) / 100 + a.value) * 100;
      return uo(100, (g) => Math.max(0, v) + g);
    });
    function l(v) {
      const { panelProps: { min: g, max: h } } = e, m = h ? Mr(v).isSameOrBefore(Mr(h), Qe.Year) : !0, w = g ? Mr(v).isSameOrAfter(Mr(g), Qe.Year) : !0;
      return m && w;
    }
    function s(v) {
      const { selection: { selectedYear: g, selectedYears: h, selectedRangeYears: m }, panelProps: { multiple: w, range: $ } } = e;
      if ($) {
        if (!m.length) return !1;
        if (m.length === 1) return Mr(v).isSame(Mr(m[0]), Qe.Year);
        const y = Mr(v).isSameOrBefore(Mr(m[1]), Qe.Year), z = Mr(v).isSameOrAfter(Mr(m[0]), Qe.Year);
        return y && z;
      }
      return w ? h.includes(v) : g === v;
    }
    function u(v) {
      const { panelProps: { allowedDates: g, color: h, type: m } } = e, w = s(v), $ = !l(v) || (m === Ve.Year && g ? !g(v) : !1);
      return {
        outline: !1,
        text: $ || !w,
        color: w && !$ ? h : "",
        textColor: "",
        [`${jl()}-color-cover`]: !w && !$,
        class: Df("button"),
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
      const g = v === Wr.Prev;
      g && i.value[0] <= 0 || (t.value = g, o.value += g ? -1 : 1, a.value += g ? -1 : 1);
    }
    return On(c), me(() => e.preview, () => {
      a.value = 0;
    }), {
      n: Df,
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
Yg.render = d3;
var c3 = Yg, { name: f3, n: v3, classes: p3 } = oe("date-picker"), wn = Uo();
function m3(e, n) {
  const r = x("panel-header"), t = x("year-picker-panel"), o = x("month-picker-panel"), a = x("day-picker-panel");
  return b(), k("div", {
    class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2), [!e.showTitle, e.n("--no-title")])),
    onPointerdownCapture: n[4] || (n[4] = Nn(() => {
    }, ["prevent"]))
  }, [
    e.showTitle ? (b(), k("div", {
      key: 0,
      class: p(e.n("title")),
      style: J({ background: e.titleColor || e.color })
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
      }, () => [Le(ve(e.dateTitle), 1)]) : F(e.$slots, "date", yt(qe({ key: 2 }, e.dateSlotProps)), () => [Le(ve(e.dateTitle), 1)])]))]),
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
var Wg = te({
  name: f3,
  components: {
    MonthPickerPanel: r3,
    YearPickerPanel: c3,
    DayPickerPanel: J4,
    PanelHeader: a3
  },
  props: jg,
  setup(e) {
    const { t: n } = kr(), r = wn().format(Ln.Day), [t, o] = r.split("-"), a = lo.find((_) => _ === o), i = O(!1), l = O(!1), s = O(!0), u = S(() => e.range && !s.value), d = O(a), c = O(t), f = O(!1), v = O(null), g = O(null), h = O(null), m = $n({
      selectedMonth: void 0,
      selectedYear: void 0,
      selectedDay: void 0,
      selectedYears: [],
      selectedMonths: [],
      selectedDays: [],
      selectedRangeYears: [],
      selectedRangeMonths: [],
      selectedRangeDays: []
    }), w = S(() => ({
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
    })), y = S(() => {
      if (e.type === Ve.Year || i.value) return Ve.Year;
      if (e.type === Ve.Month || l.value) return Ve.Month;
      if (e.type === Ve.Date) return Ve.Date;
    }), z = S(() => y.value === Ve.Date ? Qe.Day : y.value), T = S(() => y.value === Ve.Year ? { previewYear: c.value } : $.value), P = S(() => {
      var _;
      return (_ = e.hint) != null ? _ : K();
    }), R = S(() => {
      var _;
      const { multiple: be, range: le } = e;
      return le ? m.selectedRangeYears.length ? m.selectedRangeYears.join(" ~ ") : "" : be ? `${m.selectedYears.length}${(n || gn)("datePickerSelected")}` : (_ = m.selectedYear) != null ? _ : "";
    }), H = S(() => {
      var _, be;
      const { multiple: le, range: Se } = e;
      if (Se) return m.selectedRangeMonths.length ? m.selectedRangeMonths.join(" ~ ") : "";
      let je = "";
      return m.selectedMonth && (je = (be = (_ = (n || gn)("datePickerMonthDict")) == null ? void 0 : _[m.selectedMonth].name) != null ? be : ""), le ? `${m.selectedMonths.length}${(n || gn)("datePickerSelected")}` : je;
    }), A = S(() => {
      var _, be, le, Se;
      const { multiple: je, range: un } = e;
      if (un) {
        const Et = m.selectedRangeDays.map((Al) => wn(Al).format(Ln.Day));
        return Et.length ? Et.join(" ~ ") : "";
      }
      if (je) return `${m.selectedDays.length}${(n || gn)("datePickerSelected")}`;
      if (!m.selectedYear || !m.selectedMonth || !m.selectedDay) return "";
      const Rn = wn(`${m.selectedYear}-${m.selectedMonth}-${m.selectedDay}`).day(), Kn = so.find((Et) => Et === `${Rn}`), Zr = (be = (_ = (n || gn)("datePickerWeekDict")) == null ? void 0 : _[Kn].name) != null ? be : "", Il = (Se = (le = (n || gn)("datePickerMonthDict")) == null ? void 0 : le[m.selectedMonth].name) != null ? Se : "", Ml = Gr(m.selectedDay, 2, "0");
      return (n || gn)("lang") === "zh-CN" ? `${m.selectedMonth}-${Ml} ${Zr.slice(0, 3)}` : `${Zr.slice(0, 3)}, ${Il.slice(0, 3)} ${Z(m.selectedDay)}`;
    }), I = S(() => {
      var _, be;
      const le = wn(`${m.selectedYear}-${m.selectedMonth}-${m.selectedDay}`).day(), Se = m.selectedDay ? Gr(m.selectedDay, 2, "0") : "";
      return {
        week: `${le}`,
        year: (_ = m.selectedYear) != null ? _ : "",
        month: (be = m.selectedMonth) != null ? be : "",
        date: Se
      };
    }), E = S(() => m.selectedRangeDays.map((_) => wn(_).format(Ln.Day))), B = S(() => m.selectedYear === c.value), N = S(() => m.selectedMonth === d.value);
    let M = !1;
    me(() => e.modelValue, () => {
      const _ = !M;
      M = !1, D(_);
    }, { immediate: !0 });
    function D(_ = !0) {
      if (!we()) return;
      const { modelValue: be, type: le } = e;
      if (e.range) {
        if (!Ke(be)) return;
        s.value = be.length !== 1, $r(be, le, _);
        return;
      }
      if (e.multiple) {
        if (!Ke(be)) return;
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
    function K() {
      return e.type === Ve.Year ? (n || gn)("datePickerYearHint") : e.type === Ve.Month ? (n || gn)("datePickerMonthHint") : (n || gn)("datePickerHint");
    }
    function G() {
      return y.value === Ve.Year ? v : y.value === Ve.Month ? g : h;
    }
    function ce(_) {
      G().value.shiftPreview(_), y.value === Ve.Date ? re(Qe.Month, _) : y.value === Ve.Month && re(Qe.Year, _);
    }
    function ge(_) {
      h.value.shiftYearPreview(_), re(Qe.Year, _);
    }
    function de(_) {
      return _ === Ve.Year ? Ln.Year : _ === Ve.Month ? Ln.Month : Ln.Day;
    }
    function Q(_) {
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
    function $e(_, be) {
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
    function W(_) {
      C(e["onUpdate:modelValue"], _), C(e.onChange, _);
    }
    function ae() {
      return e.type === Ve.Date && m.selectedDay ? Z(m.selectedDay) : void 0;
    }
    function Ee() {
      C(e.onPreview, Z(c.value), Z(d.value), ae());
    }
    function Ue(_, be) {
      const le = Q(be), Se = s.value ? [_, _] : [le[0], _];
      if (ne(be, Se), s.value = !s.value, !s.value) return;
      const je = wn(Se[0]).isAfter(Se[1]) ? [Se[1], Se[0]] : [...Se];
      In(), W(je);
    }
    function nn(_, be) {
      const le = pe(be), Se = be === Ve.Year ? Ln.Year : be === Ve.Month ? Ln.Month : Ln.Day, je = le.map((Kn) => wn(Kn).format(Se)), un = je.findIndex((Kn) => Kn === _), Rn = un !== -1;
      Rn && je.splice(un, 1), Rn || je.push(_), In(), W(je);
    }
    function Xe(_, be) {
      if (e.range) {
        Ue(_, be);
        return;
      }
      if (e.multiple) {
        nn(_, be);
        return;
      }
      In(), W(_);
    }
    function en(_, be, le = !0) {
      const { min: Se, max: je, allowedDates: un } = e, Rn = je ? wn(_).isSameOrBefore(wn(je), be) : !0, Kn = Se ? wn(_).isSameOrAfter(wn(Se), be) : !0, Zr = le && un ? un(_) : !0;
      return Rn && Kn && Zr;
    }
    function on(_, be) {
      return !m.selectedYear || !m.selectedMonth ? !1 : B.value ? _ === Qe.Year ? be < Z(m.selectedYear) : _ === Qe.Month ? be < m.selectedMonth : N.value ? be < Z(m.selectedDay) : m.selectedMonth > d.value : m.selectedYear > c.value;
    }
    function ye(_, be = 0) {
      const { readonly: le } = e;
      if (le) return;
      const Se = wn(`${c.value}-${d.value}-01`).add(be, Qe.Month), je = Se.date(_).format(Ln.Day);
      en(je, Qe.Day) && (f.value = be !== 0 ? be < 0 : on(Qe.Day, _), be !== 0 && (c.value = Se.format(Ln.Year), d.value = Se.format(Ln.Month).split("-")[1], Ee()), Xe(je, Ve.Date));
    }
    function ee(_) {
      const { type: be, readonly: le } = e, Se = `${c.value}-${_}`;
      if (!(le || !en(Se, Qe.Month, be === Ve.Month))) {
        if (f.value = on(Qe.Month, _), be === Ve.Month) {
          Xe(Se, Ve.Month), l.value = !1;
          return;
        }
        d.value = _, Ee(), l.value = !1;
      }
    }
    function Y(_) {
      const { type: be, readonly: le } = e, Se = `${_}`;
      if (!(le || !en(Se, Qe.Year, be === Ve.Year))) {
        if (f.value = on(Qe.Year, _), be === Ve.Year) {
          Xe(Se, Ve.Year), i.value = !1;
          return;
        }
        c.value = `${_}`, Ee(), i.value = !1;
      }
    }
    function re(_, be) {
      const le = be === Wr.Prev ? -1 : 1;
      if (_ === Qe.Year) {
        c.value = `${Z(c.value) + le}`, Ee();
        return;
      }
      let Se = Z(d.value) + le;
      Se < 1 && (c.value = `${Z(c.value) - 1}`, Se = 12), Se > 12 && (c.value = `${Z(c.value) + 1}`, Se = 1), d.value = lo.find((je) => Z(je) === Se), Ee();
    }
    function we() {
      return (e.multiple || e.range) && !Ke(e.modelValue) ? (Nt("DatePicker", 'type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ke(e.modelValue) ? (Nt("DatePicker", 'type of prop "modelValue" should be a String'), !1) : !0;
    }
    function ze(_) {
      return Ke(_) ? !1 : _ === "Invalid Date" ? (Nt("DatePicker", '"modelValue" is an Invalid Date'), !0) : !1;
    }
    function Ge() {
      return e.fallbackViewDate && wn(e.fallbackViewDate).format(Ln.Day) !== "Invalid Date" ? e.fallbackViewDate : wn().format(Ln.Day);
    }
    function rn(_) {
      return _ && !ze(wn(_).format(Ln.Day)) ? _ : Ge();
    }
    function mn(_, be) {
      const le = de(be);
      return _.find((Se) => !ze(wn(Se).format(le)));
    }
    function In() {
      M = e.type === Ve.Date || e.range || e.multiple;
    }
    function $r(_, be, le = !0) {
      var Se;
      const je = de(be), un = _.map((Rn) => wn(Rn).format(je)).filter((Rn) => !ze(Rn)).slice(0, 2);
      ne(be, un), un.length === 2 && wn(un[0]).isAfter(un[1]) && ne(be, [un[1], un[0]]), le && _n((Se = mn(_, be)) != null ? Se : Ge());
    }
    function ar(_, be, le = !0) {
      var Se;
      const je = de(be);
      $e(be, Ql(_.map((un) => wn(un).format(je))).filter((un) => un !== "Invalid Date")), le && _n((Se = mn(_, be)) != null ? Se : Ge());
    }
    function Br(_, be = !0) {
      if (!_) {
        m.selectedMonth = void 0, m.selectedYear = void 0, m.selectedDay = void 0, be && _n(Ge());
        return;
      }
      const le = wn(_).format(Ln.Day);
      if (ze(le)) return;
      const [Se, je, un] = le.split("-"), Rn = lo.find((Kn) => Kn === je);
      m.selectedMonth = Rn, m.selectedYear = Se, m.selectedDay = un, be && _n(le);
    }
    function _n(_) {
      const be = wn(_ || Ge()).format(Ln.Day);
      if (ze(be)) return;
      const [le, Se] = be.split("-"), je = lo.find((un) => un === Se);
      d.value = je, c.value = le;
    }
    function Re() {
      var _;
      if (i.value = !1, l.value = !1, !e.range && !e.multiple) {
        _n(rn(e.modelValue));
        return;
      }
      _n(Ke(e.modelValue) && (_ = mn(e.modelValue, e.type)) != null ? _ : Ge());
    }
    function sn() {
      i.value = !1, l.value = !1, M = !1, D(!0);
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
      titleHint: P,
      panelType: y,
      headerType: z,
      headerPreview: T,
      selectionState: m,
      previewState: $,
      panelProps: w,
      dateSlotProps: I,
      formattedRangeDays: E,
      n: v3,
      classes: p3,
      switchPanel: j,
      shiftCurrentPanelPreview: ce,
      shiftDatePanelYearPreview: ge,
      selectDayFromPanel: ye,
      selectMonthFromPanel: ee,
      selectYearFromPanel: Y,
      shiftPreview: re,
      resetPreview: Re,
      syncModelValue: sn,
      rangeSelecting: u,
      formatElevation: zn,
      DatePickerTypes: Ve
    };
  }
});
Wg.render = m3;
var Mi = Wg;
ue(Mi);
fe(Mi, jg);
var pN = Mi, Ta = Mi, g3 = Object.defineProperty, If = Object.getOwnPropertySymbols, h3 = Object.prototype.hasOwnProperty, b3 = Object.prototype.propertyIsEnumerable, Mf = (e, n, r) => n in e ? g3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, y3 = (e, n) => {
  for (var r in n || (n = {})) h3.call(n, r) && Mf(e, r, n[r]);
  if (If)
    for (var r of If(n)) b3.call(n, r) && Mf(e, r, n[r]);
  return e;
}, Kg = y3({
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
}, Fe(Ka, [
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
])), { name: w3, n: Af, classes: k3 } = oe("date-input-time-select"), $3 = ["aria-disabled", "onClick"];
function S3(e, n) {
  const r = x("var-menu-select");
  return b(), k("div", {
    ref: "root",
    class: p(e.n())
  }, [(b(!0), k(De, null, Ye(e.segments, (t, o) => (b(), k(De, { key: t.key }, [o > 0 ? (b(), k("span", {
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
    }, ve(t.label), 43, $3)]),
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
var qg = te({
  name: w3,
  components: { VarMenuSelect: Wt },
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
    const r = O(null), t = O(null), o = S(() => {
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
        options: uo(g, (m) => ({
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
      return f ? Array.from(document.querySelectorAll(`.${Af("popover")}`)).some((v) => v.contains(f)) : !1;
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
      n: Af,
      classes: k3,
      root: r,
      openKey: t,
      segments: o,
      toggle: i,
      handleUpdateShow: l,
      selectOption: s
    };
  }
});
qg.render = S3;
var C3 = qg, Ar = {
  Year: "YYYY",
  Month: "YYYY-MM",
  Date: "YYYY-MM-DD",
  Datetime: "YYYY-MM-DD HH:mm:ss",
  DatetimeMinute: "YYYY-MM-DD HH:mm"
}, Nr = Uo(), { name: P3, n: ea, classes: O3 } = oe("date-input");
function z3(e, n) {
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
var Xg = te({
  name: P3,
  components: {
    VarIcon: Je,
    VarInput: Ft,
    VarMenu: Yt,
    VarFormDetails: Hn,
    VarDatePicker: Ta,
    TimeSelect: C3
  },
  props: Kg,
  setup(e) {
    const n = O(null), r = O(null), t = O(""), o = O(), a = O(!1), i = O(!1), { bindForm: l, form: s } = Wn(), { errorMessage: u, validateWithTrigger: d, validate: c, resetValidation: f } = xn(), v = S(() => {
      var q;
      return (q = s?.disabled.value) != null ? q : !1;
    }), g = S(() => {
      var q;
      return (q = s?.readonly.value) != null ? q : !1;
    }), h = S(() => e.disabled || v.value), m = S(() => e.readonly || g.value), w = S(() => e.type === "datetime"), $ = S(() => e.multiple && !w.value), y = S(() => $.value || e.range), z = S(() => w.value ? "date" : e.type), T = S(() => ce(e.min)), P = S(() => ce(e.max)), R = S(() => {
      var q;
      return !!((q = r.value) != null && q.rangeSelecting);
    }), H = S(() => w.value && e.range && (R.value || ze().length < 2)), A = S(() => e.min ? Nr(e.min) : void 0), I = S(() => e.max ? Nr(e.max) : void 0), E = S(() => ge(ze()[0])), B = S(() => {
      const q = ze();
      return [ge(q[0]), ge(q[1])];
    }), N = S(() => {
      const q = e.variant === "standard" ? ea("--standard-menu-margin") : e.variant === "filled" ? ea("--filled-menu-margin") : "";
      return [ea("--menu"), q].filter(Dt).join(" ");
    }), M = S(() => {
      const q = e.range ? e.rangeSeparator : e.separator;
      return t.value.split(q).map((he) => he.trim()).filter(Dt);
    }), D = {
      reset: yd,
      validate: bd,
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
    ], () => rn(), { immediate: !0 }), C(l, D);
    function j(q = e.type) {
      return q === "year" ? Ar.Year : q === "month" ? Ar.Month : q === "datetime" ? e.useSeconds ? Ar.Datetime : Ar.DatetimeMinute : Ar.Date;
    }
    function K() {
      return w.value ? Ar.Date : j();
    }
    function G() {
      return e.format || j();
    }
    function ce(q) {
      return !q || !w.value ? q : Nr(q).format(Ar.Date);
    }
    function ge(q) {
      var he, Ae, Be;
      return {
        hour: (he = q?.hour()) != null ? he : 0,
        minute: (Ae = q?.minute()) != null ? Ae : 0,
        second: (Be = q?.second()) != null ? Be : 0
      };
    }
    function de(q) {
      const he = A.value, Ae = I.value;
      return he && q.isBefore(he) ? he : Ae && q.isAfter(Ae) ? Ae : q;
    }
    function Q(q, he, Ae) {
      function Be() {
        var an, Vn;
        const Dr = ((an = q()) != null ? an : Nr()).format(Ar.Date);
        return (Vn = e.allowedTimes) == null ? void 0 : Vn.call(e, Dr, Ae);
      }
      function tn(an, Vn) {
        var Dr;
        const Jr = he(), Bt = ((Dr = q()) != null ? Dr : Nr()).hour(an === "hour" ? Vn : Jr.hour).minute(an === "minute" ? Vn : Jr.minute).second(an === "second" ? Vn : Jr.second), qo = A.value, no = I.value;
        if (qo && Bt.endOf(an).isBefore(qo) || no && Bt.startOf(an).isAfter(no)) return !1;
        const Sr = Be();
        return an === "hour" ? Sr?.hours ? Sr.hours(Vn) : !0 : an === "minute" ? Sr?.minutes ? Sr.minutes(Vn, Jr.hour) : !0 : Sr?.seconds ? Sr.seconds(Vn, Jr.minute, Jr.hour) : !0;
      }
      return {
        isHourAllowed: (an) => tn("hour", an),
        isMinuteAllowed: (an) => tn("minute", an),
        isSecondAllowed: (an) => tn("second", an)
      };
    }
    const ne = Q(() => ze()[0], () => E.value), pe = Q(() => ze()[0], () => B.value[0], "start"), $e = Q(() => ze()[1], () => B.value[1], "end");
    function W(q, he) {
      return de(q.hour(he.hour).minute(he.minute).second(he.second).millisecond(0));
    }
    function ae(q, he, Ae) {
      return Ae ? [q] : [q, ...Array.from({ length: he }, (Be, tn) => tn).filter((Be) => Be !== q)];
    }
    function Ee(q, he) {
      const Ae = A.value, Be = I.value, tn = q.hour(), an = q.minute(), Vn = q.second();
      return (!Ae || !q.isBefore(Ae)) && (!Be || !q.isAfter(Be)) && (!he.hours || he.hours(tn)) && (!he.minutes || he.minutes(an, tn)) && (!e.useSeconds || !he.seconds || he.seconds(Vn, an, tn)) && (!e.allowedDates || e.allowedDates(q.format(K())));
    }
    function Ue(q, he, Ae, Be) {
      var tn, an;
      const Vn = q.format(Ar.Date), Dr = (an = (tn = e.allowedTimes) == null ? void 0 : tn.call(e, Vn, Ae)) != null ? an : {}, Jr = ae(he.hour, 24, Be === "hour" || Be === "minute" || Be === "second");
      for (const Bt of Jr) {
        if (Dr.hours && !Dr.hours(Bt)) continue;
        const qo = ae(he.minute, 60, Be === "minute" || Be === "second");
        for (const no of qo) {
          if (Dr.minutes && !Dr.minutes(no, Bt)) continue;
          const Sr = e.useSeconds ? ae(he.second, 60, Be === "second") : [0];
          for (const y0 of Sr) {
            const wd = q.hour(Bt).minute(no).second(y0).millisecond(0);
            if (Ee(wd, Dr)) return wd;
          }
        }
      }
    }
    function nn(q) {
      return e.range ? [...q].sort((he, Ae) => he.valueOf() - Ae.valueOf()) : q;
    }
    function Xe(q) {
      const he = nn(q);
      if (e.range)
        return !Y(he[0], "start") || !Y(he[1], "end") ? !1 : (o.value = he.map((Be) => Be.format(K())), t.value = he.map((Be) => Be.format(G())).join(e.rangeSeparator), mn(he.map(we)), !0);
      const [Ae] = he;
      return Y(Ae) ? (o.value = Ae.format(K()), t.value = Ae.format(G()), mn(we(Ae)), !0) : !1;
    }
    function en(q, he) {
      if (h.value || m.value) return;
      const [Ae] = ze(), Be = Ae ?? Nr(), tn = he ? Ue(Be, q, void 0, he) : W(Be, q);
      tn && Xe([tn]);
    }
    function on(q, he, Ae) {
      if (h.value || m.value) return;
      const Be = ze();
      if (Be.length < 2) return;
      const tn = [...Be], an = q === 0 ? "start" : "end", Vn = Ae ? Ue(Be[q], he, an, Ae) : W(Be[q], he);
      Vn && (tn[q] = Vn, Xe(tn));
    }
    function ye(q, he) {
      const Ae = Nr(q, he, !0);
      return Ae.isValid() ? Ae : void 0;
    }
    function ee(q, he) {
      var Ae;
      if (!w.value || !e.allowedTimes) return !0;
      const Be = (Ae = e.allowedTimes(q.format(Ar.Date), he)) != null ? Ae : {}, tn = q.hour(), an = q.minute(), Vn = q.second();
      return (!Be.hours || Be.hours(tn)) && (!Be.minutes || Be.minutes(an, tn)) && (!e.useSeconds || !Be.seconds || Be.seconds(Vn, an, tn));
    }
    function Y(q, he) {
      const Ae = A.value, Be = I.value, tn = e.type === "year" ? "year" : e.type === "month" ? "month" : e.type === "date" ? "day" : void 0;
      return !(Ae && (tn ? q.isBefore(Ae, tn) : q.isBefore(Ae)) || Be && (tn ? q.isAfter(Be, tn) : q.isAfter(Be)) || e.allowedDates && !e.allowedDates(q.format(K())) || !ee(q, he));
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
      if (y.value) return (Ke(e.modelValue) ? e.modelValue : []).map(re).filter(Dt);
      const q = Ke(e.modelValue) ? void 0 : re(e.modelValue);
      return q ? [q] : [];
    }
    function Ge(q) {
      t.value = q.map((he) => he.format(G())).join(e.range ? e.rangeSeparator : e.separator);
    }
    function rn() {
      const q = ze();
      if (y.value) o.value = q.map((he) => he.format(K()));
      else {
        const [he] = q;
        o.value = he ? he.format(K()) : void 0;
      }
      i.value || Ge(q);
    }
    function mn(q) {
      Bd(q, e.modelValue) || (C(e["onUpdate:modelValue"], q), C(e.onChange, q), In("onChange"));
    }
    function In(q) {
      Ne(() => {
        const { validateTrigger: he, rules: Ae, modelValue: Be } = e;
        d(he, q, Ae, Be);
      });
    }
    function $r(q) {
      i.value = !0, C(e.onFocus, q), In("onFocus");
    }
    function ar(q) {
      i.value = !1, a.value = !1, C(e.onBlur, q), In("onBlur");
    }
    function Br() {
      h.value || m.value || (a.value = !0, Ne(() => {
        var q;
        return (q = r.value) == null ? void 0 : q.syncModelValue();
      }), In("onClick"));
    }
    function _n(q) {
      h.value || m.value || q.key !== "Enter" || (Ze(q), a.value = !0, Ne(() => {
        var he;
        return (he = r.value) == null ? void 0 : he.syncModelValue();
      }));
    }
    function Re(q) {
      const he = ye(q, G());
      !he || !Y(he) || (o.value = he.format(K()), mn(we(he)));
    }
    function sn() {
      if (e.range ? M.value.length !== 2 : !M.value.length) return;
      const q = M.value.map((Be) => ye(Be, G()));
      if (q.some((Be) => !Be)) return;
      const he = q.filter(Dt);
      if (e.range && he[0].isAfter(he[1]) || he.some((Be, tn) => !Y(Be, e.range ? tn === 0 ? "start" : "end" : void 0))) return;
      const Ae = he.map(we);
      o.value = he.map((Be) => Be.format(K())), mn(Ae);
    }
    function _(q) {
      if (!(h.value || m.value) && q !== t.value) {
        if (t.value = q, q === "") {
          Zr(), mn(Kn()), In("onInput");
          return;
        }
        y.value ? sn() : Re(q), In("onInput");
      }
    }
    function be() {
      h.value || m.value || Ge(ze());
    }
    function le(q) {
      if (q.length < 2) return;
      const he = B.value, Ae = q.map((Be, tn) => {
        var an;
        return Ue(Be, (an = he[tn]) != null ? an : ge(), tn === 0 ? "start" : "end");
      });
      Ae.every(Dt) && Xe(Ae.filter(Dt)) || rn();
    }
    function Se(q) {
      const he = q.map((Be) => Nr(Be, K(), !0)).filter((Be) => Be.isValid());
      if (w.value && e.range) {
        le(he);
        return;
      }
      const Ae = he.map(we);
      t.value = he.map((Be) => Be.format(G())).join(e.range ? e.rangeSeparator : e.separator), mn(Ae);
    }
    function je(q) {
      const he = Ue(q, E.value);
      he && Xe([he]) || rn();
    }
    function un(q) {
      const he = Nr(q, K(), !0);
      if (he.isValid()) {
        if (w.value) {
          je(he);
          return;
        }
        t.value = he.format(G()), mn(we(he)), y.value || (a.value = !1);
      }
    }
    function Rn(q) {
      if (!(h.value || m.value)) {
        if (o.value = q, Ke(q)) {
          Se(q);
          return;
        }
        un(q);
      }
    }
    function Kn() {
      return y.value ? [] : void 0;
    }
    function Zr() {
      t.value = "", o.value = y.value ? [] : void 0;
    }
    function Il() {
      if (h.value || m.value || !e.clearable) return;
      Zr(), a.value = !1;
      const q = Kn();
      C(e["onUpdate:modelValue"], q), C(e.onClear, ""), C(e.onChange, q), In("onChange"), In("onClear");
    }
    function Ml() {
      var q;
      (q = n.value) == null || q.focus();
    }
    function Et() {
      var q;
      (q = n.value) == null || q.blur();
    }
    function Al() {
      var q;
      (q = n.value) == null || q.select();
    }
    function bd() {
      return c(e.rules, e.modelValue);
    }
    function yd() {
      const q = Kn();
      Zr(), a.value = !1, !Bd(e.modelValue, q) && C(e["onUpdate:modelValue"], q), f();
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
      isDatetime: w,
      isMultiple: $,
      pickerType: z,
      pickerMin: T,
      pickerMax: P,
      singleTime: E,
      rangeTimes: B,
      singleAllowFns: ne,
      startAllowFns: pe,
      endAllowFns: $e,
      n: ea,
      classes: O3,
      handleTimeChange: en,
      handleRangeTimeChange: on,
      handleFocus: $r,
      handleBlur: ar,
      handleClick: Br,
      handleKeydown: _n,
      handleInput: _,
      handleChange: be,
      handlePickerChange: Rn,
      handleClear: Il,
      focus: Ml,
      blur: Et,
      select: Al,
      validate: bd,
      resetValidation: f,
      reset: yd
    };
  }
});
Xg.render = z3;
var Ai = Xg;
ue(Ai);
fe(Ai, Kg);
var mN = Ai, Ls = Ai, T3 = Object.defineProperty, Nf = Object.getOwnPropertySymbols, E3 = Object.prototype.hasOwnProperty, B3 = Object.prototype.propertyIsEnumerable, Rf = (e, n, r) => n in e ? T3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, D3 = (e, n) => {
  for (var r in n || (n = {})) E3.call(n, r) && Rf(e, r, n[r]);
  if (Nf)
    for (var r of Nf(n)) B3.call(n, r) && Rf(e, r, n[r]);
  return e;
}, Gg = D3({
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
}, Fe(xt, [
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
])), I3 = Object.defineProperty, M3 = Object.defineProperties, A3 = Object.getOwnPropertyDescriptors, Vf = Object.getOwnPropertySymbols, N3 = Object.prototype.hasOwnProperty, R3 = Object.prototype.propertyIsEnumerable, Lf = (e, n, r) => n in e ? I3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Fs = (e, n) => {
  for (var r in n || (n = {})) N3.call(n, r) && Lf(e, r, n[r]);
  if (Vf)
    for (var r of Vf(n)) R3.call(n, r) && Lf(e, r, n[r]);
  return e;
}, Ff = (e, n) => M3(e, A3(n)), { name: V3, n: L3, classes: F3 } = oe("dialog");
function H3(e, n) {
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
    default: se(() => [L("div", qe({
      class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
      style: Fs({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
    }, e.$attrs), [
      L("div", { class: p(e.n("title")) }, [F(e.$slots, "title", {}, () => {
        var o;
        return [Le(ve((o = e.title) != null ? o : (e.pt ? e.pt : e.t)("dialogTitle")), 1)];
      })], 2),
      L("div", {
        class: p(e.n("message")),
        style: J({ textAlign: e.messageAlign })
      }, [F(e.$slots, "default", {}, () => [Le(ve(e.message), 1)])], 6),
      F(e.$slots, "actions", {
        slotClass: e.n("actions"),
        cancel: e.cancel,
        confirm: e.confirm
      }, () => [L("div", { class: p(e.n("actions")) }, [e.cancelButton ? (b(), ke(r, qe({ key: 0 }, e.cancelButtonNormalizedProps, {
        class: e.classes(e.n("button"), e.n("cancel-button"), [e.cancelButtonProps != null, e.n("--with-button-props")]),
        "var-dialog-cover": "",
        onClick: e.cancel
      }), {
        default: se(() => {
          var o;
          return [Le(ve((o = e.cancelButtonText) != null ? o : (e.pt ? e.pt : e.t)("dialogCancelButtonText")), 1)];
        }),
        _: 1
      }, 16, ["class", "onClick"])) : X("v-if", !0), e.confirmButton ? (b(), ke(r, qe({ key: 1 }, e.confirmButtonNormalizedProps, {
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
var Zg = te({
  name: V3,
  components: {
    VarPopup: st,
    VarButton: Jn
  },
  inheritAttrs: !1,
  props: Gg,
  setup(e) {
    const { t: n } = kr(), r = O(!1), t = O(!1), o = yn(e, "confirmButtonLoading"), a = yn(e, "cancelButtonLoading"), i = yn(e, "confirmButtonDisabled"), l = yn(e, "cancelButtonDisabled"), s = S(() => {
      var m, w, $, y, z, T;
      return Ff(Fs({ text: !0 }, e.confirmButtonProps), {
        textColor: (w = e.confirmButtonTextColor) != null ? w : (m = e.confirmButtonProps) == null ? void 0 : m.textColor,
        color: (y = e.confirmButtonColor) != null ? y : ($ = e.confirmButtonProps) == null ? void 0 : $.color,
        loading: o.value || ((z = e.confirmButtonProps) == null ? void 0 : z.loading),
        disabled: i.value || ((T = e.confirmButtonProps) == null ? void 0 : T.disabled)
      });
    }), u = S(() => {
      var m, w, $, y, z, T;
      return Ff(Fs({ text: !0 }, e.cancelButtonProps), {
        textColor: (w = e.cancelButtonTextColor) != null ? w : (m = e.cancelButtonProps) == null ? void 0 : m.textColor,
        color: (y = e.cancelButtonColor) != null ? y : ($ = e.cancelButtonProps) == null ? void 0 : $.color,
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
      return C(e["onUpdate:show"], !1);
    }
    function f() {
      const { closeOnClickOverlay: m, onClickOverlay: w, onBeforeClose: $ } = e;
      if (C(w), !!m) {
        if ($ != null) {
          C($, "close", c, d);
          return;
        }
        C(e["onUpdate:show"], !1);
      }
    }
    function v() {
      const { onBeforeClose: m, onConfirm: w } = e;
      if (C(w), m != null) {
        C(m, "confirm", c, d);
        return;
      }
      C(e["onUpdate:show"], !1);
    }
    function g() {
      const { onBeforeClose: m, onCancel: w } = e;
      if (C(w), m != null) {
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
      n: L3,
      classes: F3,
      handleClickOverlay: f,
      confirm: v,
      cancel: g,
      toSizeUnit: Te,
      handleKeyEscape: h
    };
  }
});
Zg.render = H3;
var Yo = Zg, U3 = Object.defineProperty, j3 = Object.defineProperties, Y3 = Object.getOwnPropertyDescriptors, Hf = Object.getOwnPropertySymbols, W3 = Object.prototype.hasOwnProperty, K3 = Object.prototype.propertyIsEnumerable, Uf = (e, n, r) => n in e ? U3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Yl = (e, n) => {
  for (var r in n || (n = {})) W3.call(n, r) && Uf(e, r, n[r]);
  if (Hf)
    for (var r of Hf(n)) K3.call(n, r) && Uf(e, r, n[r]);
  return e;
}, q3 = (e, n) => j3(e, Y3(n)), rt, Ea = {};
function X3(e = {}) {
  return Pn(e) ? q3(Yl({}, Ea), { message: e }) : Yl(Yl({}, Ea), e);
}
function gt(e) {
  return Er() ? new Promise((n) => {
    gt.close();
    const r = X3(e), t = $n(r);
    t.teleport = "body", rt = t;
    const { unmountInstance: o } = Qt(Yo, t, {
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
        C(t.onClosed), o(), rt === t && (rt = null);
      },
      onRouteChange: () => {
        o(), rt === t && (rt = null);
      },
      "onUpdate:show": (a) => {
        t.show = a;
      }
    });
    t.show = !0;
  }) : Promise.resolve();
}
gt.setDefaultOptions = function(e) {
  Ea = e;
};
gt.resetDefaultOptions = function() {
  Ea = {};
};
gt.close = function() {
  if (rt != null) {
    const e = rt;
    rt = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
gt.Component = Yo;
ue(Yo);
ue(Yo, gt);
fe(gt, Gg);
var gN = Yo, Hs = gt, Jg = {
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
}, { name: G3, n: Z3, classes: J3 } = oe("divider");
function Q3(e, n) {
  return b(), k("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.withPresetInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
    style: J(e.style),
    role: "separator"
  }, [e.vertical ? X("v-if", !0) : F(e.$slots, "default", { key: 0 }, () => [e.description ? (b(), k("span", {
    key: 0,
    class: p(e.n("text"))
  }, ve(e.description), 3)) : X("v-if", !0)])], 6);
}
var Qg = te({
  name: G3,
  props: Jg,
  setup(e, { slots: n }) {
    const r = O(!1), t = S(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), o = S(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (Io(i) || l) return { margin: s };
      const u = Z(i), d = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${Te(d)})`,
        left: u > 0 ? Te(d) : Te(0)
      };
    });
    On(a), zt(a);
    function a() {
      const { description: i, vertical: l } = e;
      r.value = (n.default || i != null) && !l;
    }
    return {
      n: Z3,
      classes: J3,
      withText: r,
      style: o,
      withPresetInset: t
    };
  }
});
Qg.render = Q3;
var Ni = Qg;
ue(Ni);
fe(Ni, Jg);
var hN = Ni, Us = Ni, xg = {
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
}, x3 = Object.defineProperty, _3 = Object.defineProperties, eO = Object.getOwnPropertyDescriptors, jf = Object.getOwnPropertySymbols, nO = Object.prototype.hasOwnProperty, rO = Object.prototype.propertyIsEnumerable, Yf = (e, n, r) => n in e ? x3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Wf = (e, n) => {
  for (var r in n || (n = {})) nO.call(n, r) && Yf(e, r, n[r]);
  if (jf)
    for (var r of jf(n)) rO.call(n, r) && Yf(e, r, n[r]);
  return e;
}, Kf = (e, n) => _3(e, eO(n)), { name: tO, n: oO, classes: aO } = oe("drag");
function iO(e, n) {
  return b(), ke(Hr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [L("div", qe({
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
var _g = te({
  name: tO,
  inheritAttrs: !1,
  props: xg,
  setup(e, { attrs: n }) {
    const r = O(null), t = O(0), o = O(0), a = O(!1), i = O(!1), { touching: l, dragging: s, moveX: u, moveY: d, startTouch: c, moveTouch: f, endTouch: v, resetTouch: g } = Jt(), { disabled: h } = Tt(), m = $n({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    me(() => e.boundary, I), wr(B), On(() => {
      I(), B();
    });
    function w(M) {
      e.disabled || (c(M), T());
    }
    function $(M) {
      !l.value || e.disabled || (f(M), Ze(M), i.value = !1, a.value = !0, e.direction.includes("x") && (t.value += u.value), e.direction.includes("y") && (o.value += d.value), A());
    }
    function y() {
      e.disabled || (v(), i.value = !0, H());
    }
    function z(M) {
      s.value || C(e.onClick, M);
    }
    function T() {
      const { left: M, top: D } = P();
      t.value = M, o.value = D;
    }
    function P() {
      const M = kn(r.value), D = kn(window), j = M.top - D.top, K = D.bottom - M.bottom, G = M.left - D.left, ce = D.right - M.right, { width: ge, height: de } = M, { width: Q, height: ne } = D;
      return {
        top: j,
        bottom: K,
        left: G,
        right: ce,
        width: ge,
        height: de,
        halfWidth: ge / 2,
        halfHeight: de / 2,
        windowWidth: Q,
        windowHeight: ne
      };
    }
    function R() {
      const M = P(), D = m.left, j = M.windowWidth - m.right - M.width, K = m.top, G = M.windowHeight - m.bottom - M.height;
      return {
        minX: D,
        minY: K,
        maxX: D < j ? j : D,
        maxY: K < G ? G : K
      };
    }
    function H() {
      if (e.attraction == null) return;
      const { halfWidth: M, halfHeight: D, top: j, bottom: K, left: G, right: ce } = P(), { minX: ge, minY: de, maxX: Q, maxY: ne } = R(), pe = G + M - m.left, $e = ce + M - m.right, W = j + D - m.top, ae = K + D - m.bottom, Ee = pe <= $e, Ue = W <= ae;
      e.attraction.includes("x") && (t.value = Ee ? ge : Q), e.attraction.includes("y") && (o.value = Ue ? de : ne);
    }
    function A() {
      const { minX: M, minY: D, maxX: j, maxY: K } = R();
      t.value = hn(t.value, M, j), o.value = hn(o.value, D, K);
    }
    function I() {
      const { top: M = 0, bottom: D = 0, left: j = 0, right: K = 0 } = e.boundary;
      m.top = fn(M), m.bottom = fn(D), m.left = fn(j), m.right = fn(K);
    }
    function E() {
      var M;
      const D = (M = n.style) != null ? M : {};
      return Kf(Wf({}, n), { style: Kf(Wf({}, D), {
        top: a.value ? 0 : D.top,
        left: a.value ? 0 : D.left,
        right: a.value ? "auto" : D.right,
        bottom: a.value ? "auto" : D.bottom,
        transform: a.value ? `translate(${t.value}px, ${o.value}px)` : D.transform
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
      n: oO,
      classes: aO,
      getAttrs: E,
      handleTouchstart: w,
      handleTouchmove: $,
      handleTouchend: y,
      handleClick: z,
      resize: B,
      reset: N
    };
  }
});
_g.render = iO;
var Ri = _g;
ue(Ri);
fe(Ri, xg);
var bN = Ri, Ba = Ri, eh = {
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
}, { name: lO, n: sO, classes: uO } = oe("tooltip");
function dO(e, n) {
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
    default: se(() => [We(L("div", {
      ref: "popover",
      class: p(e.classes(e.n("tooltip"), e.n("$--box"))),
      style: J({ zIndex: e.zIndex }),
      onClick: n[0] || (n[0] = Nn(() => {
      }, ["stop"])),
      onMouseenter: n[1] || (n[1] = (...r) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...r)),
      onMouseleave: n[2] || (n[2] = (...r) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...r))
    }, [L("div", {
      style: J({
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
var nh = te({
  name: lO,
  props: eh,
  setup(e) {
    const { disabled: n } = Tt(), { popover: r, host: t, referenceSize: o, show: a, zIndex: i, handlePopoverMouseenter: l, handlePopoverMouseleave: s, handlePopoverClose: u, handleClosed: d, open: c, close: f, resize: v, setReference: g } = rm(e);
    return {
      popover: r,
      host: t,
      referenceSize: o,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: Te,
      n: sO,
      classes: uO,
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
nh.render = dO;
var Vi = nh;
ue(Vi);
fe(Vi, eh);
var yN = Vi, Da = Vi, rh = {
  expand: Boolean,
  expandTrigger: String,
  expandableOnOverflow: Boolean,
  lineClamp: [Number, String],
  tooltipOnOverflow: Boolean,
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": V()
}, cO = Object.defineProperty, qf = Object.getOwnPropertySymbols, fO = Object.prototype.hasOwnProperty, vO = Object.prototype.propertyIsEnumerable, Xf = (e, n, r) => n in e ? cO(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, pO = (e, n) => {
  for (var r in n || (n = {})) fO.call(n, r) && Xf(e, r, n[r]);
  if (qf)
    for (var r of qf(n)) vO.call(n, r) && Xf(e, r, n[r]);
  return e;
}, { name: mO, n: gO, classes: hO } = oe("ellipsis"), bO = { key: 0 };
function yO(e, n) {
  const r = x("var-tooltip");
  return b(), ke(r, qe({
    ref: "rootRef",
    class: e.classes(e.n(), [
      e.lineClamp,
      e.n("--clamp"),
      e.n("--line")
    ], [e.clickable, e.n("--cursor")], [e.expanding, e.n("--expand")]),
    "var-ellipsis-cover": "",
    style: e.rootStyles
  }, e.tooltipProps, { onClick: e.handleClick }), {
    content: se(() => [F(e.$slots, "tooltip-content", {}, () => {
      var t;
      return [(t = e.tooltipProps) != null && t.content ? (b(), k("span", bO, ve(e.tooltipProps.content), 1)) : F(e.$slots, "default", { key: 1 })];
    })]),
    default: se(() => [L("span", null, [F(e.$slots, "default")])]),
    _: 3
  }, 16, [
    "class",
    "style",
    "onClick"
  ]);
}
var th = te({
  name: mO,
  components: { VarTooltip: Da },
  props: rh,
  setup(e) {
    const n = O(null), r = O(!1), t = yn(e, "expand");
    let o;
    const a = S(() => !!e.expandTrigger && (!e.expandableOnOverflow || r.value || t.value)), i = S(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), l = S(() => e.tooltip === !1 || e.tooltipOnOverflow && !r.value ? { disabled: !0 } : e.tooltip === !0 ? { sameWidth: !0 } : pO({ sameWidth: !0 }, e.tooltip));
    function s() {
      var f;
      return n.value ? (f = n.value.$el) != null ? f : n.value : null;
    }
    function u() {
      const f = s();
      if (!f) return;
      const v = e.lineClamp ? f.scrollHeight > f.clientHeight : f.scrollWidth > f.clientWidth;
      v !== r.value && (r.value = v);
    }
    function d() {
      a.value && (t.value = !t.value);
    }
    function c(f) {
      var v;
      const g = (v = f[0]) == null ? void 0 : v.contentRect.width;
      g !== void 0 && g !== o && o !== void 0 && e.expandableOnOverflow && t.value && (t.value = !1), o = g, u();
    }
    return ju(s, c), me(() => e.lineClamp, u), On(u), zt(u), {
      rootRef: n,
      truncated: r,
      clickable: a,
      tooltipProps: l,
      expanding: t,
      rootStyles: i,
      n: gO,
      classes: hO,
      handleClick: d,
      handleResize: c
    };
  }
});
th.render = yO;
var Li = th;
ue(Li);
fe(Li, rh);
var wN = Li, js = Li, oh = {
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
}, { name: wO, classes: Wl, n: cr } = oe("fab"), Fi = te({
  name: wO,
  inheritAttrs: !1,
  props: oh,
  setup(e, { slots: n, attrs: r }) {
    const t = yn(e, "active"), o = O(null), a = O(null);
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
    }), ep(o, "click", s);
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
      return n.trigger ? e.show ? n.trigger({ active: t.value }) : null : We(U(Jn, {
        "var-fab-cover": !0,
        class: cr("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        iconContainer: !0
      }, { default: () => [U(Je, {
        "var-fab-cover": !0,
        class: Wl([
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
      const c = Va((d = C(n.default)) != null ? d : []), f = Io(e.drag) ? {} : e.drag;
      return U(Ba, qe({
        ref: a,
        class: Wl(cr(`--position-${e.position}`), [!e.fixed, cr("--absolute")]),
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
        class: Wl(cr(), cr(`--direction-${e.direction}`), [e.safeArea, cr("--safe-area")]),
        ref: o,
        onMouseleave: () => l(!1, c.length),
        onMouseenter: () => l(!0, c.length)
      }, [U(bn, { name: cr("--active-transition") }, { default: () => [u()] }), U(bn, {
        name: cr(`--actions-transition-${e.direction}`),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, { default: () => [We(U("div", {
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
fe(Fi, oh);
var kN = Fi, Ys = Fi, ah = {
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
}, { name: kO, n: $O, classes: SO } = oe("floating-panel"), Gf = 100, Zf = 0.2;
function CO(e, n) {
  return b(), ke(Hr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [L("div", {
    class: p(e.classes(e.n(), [e.safeArea, e.n("--safe-area")], e.formatElevation(e.elevation, 3))),
    style: J({
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
var ih = te({
  name: kO,
  props: ah,
  setup(e) {
    const n = O(0), r = O(null), { height: t } = Z0(), o = S(() => t.value * 0.6), a = yn(e, "anchor", { defaultValue: Gf }), i = S(() => {
      const A = [Gf, o.value], { anchors: I } = e;
      return Or(I) ? A : I;
    }), l = S(() => Math.min(...i.value)), s = S(() => Math.max(...i.value)), { disabled: u } = Tt(), { deltaY: d, touching: c, startTouch: f, moveTouch: v, endTouch: g, isReachTop: h, isReachBottom: m } = Jt();
    let w;
    Mo(() => c.value), me(() => a.value, $, { immediate: !0 }), me(() => i.value, () => {
      $(a.value);
    }, { immediate: !0 });
    function $(A) {
      P(A ?? l.value);
    }
    function y(A) {
      f(A), w = n.value;
    }
    function z(A) {
      var I;
      v(A);
      const E = A.target, B = r.value === E || ((I = r.value) == null ? void 0 : I.contains(E));
      if (!(B && !e.contentDraggable)) {
        if (B && e.contentDraggable && n.value >= s.value && !h(r.value)) {
          m(r.value) && Ze(A);
          return;
        }
        P(R(w - d.value)), Ze(A);
      }
    }
    function T() {
      g();
      const A = a.value;
      P(n.value), a.value = n.value, a.value !== A && C(e.onAnchorChange, n.value);
    }
    function P(A) {
      n.value = c.value ? A : H(A);
    }
    function R(A) {
      if (A > s.value) {
        const I = A - s.value;
        return s.value + I * Zf;
      }
      if (A < l.value) {
        const I = l.value - A;
        return l.value - I * Zf;
      }
      return A;
    }
    function H(A) {
      if (i.value.includes(A)) return A;
      let I = 1 / 0, E = 0;
      return i.value.forEach((B) => {
        const N = Math.abs(B - A);
        N < I && (I = N, E = B);
      }), E;
    }
    return {
      contentRef: r,
      teleportDisabled: u,
      touching: c,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: $O,
      classes: SO,
      toSizeUnit: Te,
      toNumber: Z,
      formatElevation: zn,
      handleTouchstart: y,
      handleTouchmove: z,
      handleTouchend: T
    };
  }
});
ih.render = CO;
var Hi = ih;
ue(Hi);
fe(Hi, ah);
var $N = Hi, Ws = Hi, lh = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: V(),
  onReset: V()
}, Jf = (e, n, r) => new Promise((t, o) => {
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
}), { name: PO, n: OO } = oe("form");
function zO(e, n) {
  return b(), k("form", {
    class: p(e.n()),
    onSubmit: n[0] || (n[0] = (...r) => e.handleSubmit && e.handleSubmit(...r)),
    onReset: n[1] || (n[1] = (...r) => e.handleReset && e.handleReset(...r))
  }, [F(e.$slots, "default")], 34);
}
var sh = te({
  name: PO,
  props: lh,
  setup(e) {
    const n = S(() => e.disabled), r = S(() => e.readonly), { formItems: t, bindFormItems: o } = V1();
    o({
      disabled: n,
      readonly: r
    });
    function a(c) {
      setTimeout(() => {
        const f = ut(c), v = f === window ? 0 : qd(f), g = qd(c) - v - fn(e.scrollToErrorOffsetY);
        ho(f, {
          top: g,
          animation: us
        });
      }, 300);
    }
    function i(c) {
      return Jf(this, null, function* () {
        Ze(c);
        const f = yield s();
        C(e.onSubmit, f);
      });
    }
    function l(c) {
      Ze(c), u(), C(e.onReset);
    }
    function s() {
      return Jf(this, null, function* () {
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
      n: OO,
      handleSubmit: i,
      handleReset: l,
      validate: s,
      reset: u,
      resetValidation: d
    };
  }
});
sh.render = zO;
var _t = sh;
_t.useValidation = xn;
_t.useForm = Wn;
ue(_t);
fe(_t, lh);
var SN = _t, Ks = _t, uh = {
  highlighter: Object,
  theme: String,
  tag: {
    type: String,
    default: "div"
  }
}, { name: TO, n: EO } = oe("highlighter-provider"), Ui = te({
  name: TO,
  props: uh,
  setup(e, { slots: n }) {
    const r = S(() => e.highlighter), t = S(() => e.theme);
    return YC({
      highlighter: r,
      theme: t
    }), () => Fn(e.tag, { class: EO() }, C(n.default));
  }
});
ue(Ui);
fe(Ui, uh);
var CN = Ui, qs = Ui, dh = {
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
}, { name: BO, n: DO, classes: IO } = oe("image"), MO = [
  "alt",
  "title",
  "referrerpolicy",
  "lazy-loading",
  "lazy-error"
], AO = [
  "alt",
  "title",
  "referrerpolicy",
  "src"
];
function NO(e, n) {
  var r;
  const t = _e("lazy"), o = _e("ripple");
  return We((b(), k("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
    style: J({
      width: e.toSizeUnit(e.width),
      height: e.toSizeUnit(e.height),
      borderRadius: e.toSizeUnit(e.radius)
    })
  }, [
    e.lazy && !e.showErrorSlot ? We((b(), k("img", {
      key: 0,
      role: "img",
      class: p(e.n("image")),
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
    }, null, 46, MO)), [[t, (r = e.src) != null ? r : ""]]) : X("v-if", !0),
    !e.lazy && !e.showErrorSlot ? (b(), k("img", {
      key: 1,
      role: "img",
      class: p(e.n("image")),
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
    }, null, 46, AO)) : X("v-if", !0),
    e.showErrorSlot ? F(e.$slots, "error", { key: 2 }) : X("v-if", !0)
  ], 6)), [[o, { disabled: !e.ripple }]]);
}
var ch = te({
  name: BO,
  directives: {
    Lazy: ko,
    Ripple: vn
  },
  props: dh,
  setup(e, { slots: n }) {
    const r = O(!1);
    me(() => e.src, () => {
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
      n: DO,
      classes: IO,
      toSizeUnit: Te,
      handleLoad: o,
      handleError: t,
      handleClick: a
    };
  }
});
ch.render = NO;
var ji = ch;
ue(ji);
fe(ji, dh);
var PN = ji, Xs = ji, dd = {
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
}), RO = 250, VO = 20, { name: LO, n: Qf, classes: FO } = oe("swipe"), HO = ["onClick"];
function UO(e, n) {
  const r = x("var-icon"), t = x("var-button"), o = _e("hover");
  return We((b(), k("div", {
    ref: "swipeEl",
    class: p(e.n())
  }, [
    L("div", {
      class: p(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
      style: J({
        width: e.vertical ? void 0 : e.toSizeUnit(e.trackSize),
        height: e.vertical ? e.toSizeUnit(e.trackSize) : void 0,
        transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.trackTranslate)})`,
        transitionDuration: e.lockDuration ? "0ms" : `${e.toNumber(e.duration)}ms`
      }),
      onTouchstart: n[0] || (n[0] = (...a) => e.handleTouchstart && e.handleTouchstart(...a)),
      onTouchmove: n[1] || (n[1] = (...a) => e.handleTouchmove && e.handleTouchmove(...a)),
      onTouchend: n[2] || (n[2] = (...a) => e.handleTouchend && e.handleTouchend(...a))
    }, [F(e.$slots, "default")], 38),
    e.navigation ? F(e.$slots, "prev", yt(qe({ key: 0 }, {
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
    e.navigation ? F(e.$slots, "next", yt(qe({ key: 1 }, {
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
    }, [(b(!0), k(De, null, Ye(e.length, (a, i) => (b(), k("div", {
      key: a,
      class: p(e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
      style: J({ background: e.indicatorColor }),
      onClick: (l) => e.to(i)
    }, null, 14, HO))), 128))], 2)) : X("v-if", !0)])
  ], 2)), [[o, e.handleHovering]]);
}
var fh = te({
  name: LO,
  directives: { Hover: jn },
  components: {
    VarButton: Jn,
    VarIcon: Je
  },
  props: dd,
  setup(e) {
    const n = O(null), r = O(0), t = S(() => e.vertical), o = O(0), a = O(0), i = O(!1), l = O(0), s = O(!1), { swipeItems: u, bindSwipeItems: d, length: c } = L1(), { swipeResizeListeners: f, bindSwipeResizeListeners: v } = F1(), { popup: g, bindPopup: h } = fp(), { deltaX: m, deltaY: w, moveX: $, moveY: y, offsetX: z, offsetY: T, touching: P, direction: R, startTime: H, startTouch: A, moveTouch: I, endTouch: E } = Jt(), B = S(() => R.value === (e.vertical ? "vertical" : "horizontal"));
    let N = !1, M = -1;
    d({
      size: r,
      currentIndex: l,
      vertical: t
    }), xe(() => window, "keydown", Ue), C(h, null), C(v, null), me(() => c.value, () => It(null, null, function* () {
      yield Gn(), de(), nn();
    })), g && me(() => g.show.value, (ye) => It(null, null, function* () {
      ye ? (yield Gn(), nn()) : ne();
    })), ft(nn), Zt(ne), wr(nn);
    function D(ye) {
      return u.find(({ index: ee }) => ee.value === ye);
    }
    function j() {
      e.loop && (a.value >= 0 && D(c.value - 1).setTranslate(-o.value), a.value <= -(o.value - r.value) && D(0).setTranslate(o.value), a.value > -(o.value - r.value) && a.value < 0 && (D(c.value - 1).setTranslate(0), D(0).setTranslate(0)));
    }
    function K(ye) {
      const ee = tr(ye) ? ye : Math.floor((a.value - r.value / 2) / -r.value), { loop: Y } = e;
      return ee <= -1 ? Y ? -1 : 0 : ee >= c.value ? Y ? c.value : c.value - 1 : ee;
    }
    function G(ye) {
      const { loop: ee } = e;
      return ye === -1 ? ee ? c.value - 1 : 0 : ye === c.value ? ee ? 0 : c.value - 1 : ye;
    }
    function ce(ye) {
      return e.loop ? ye < 0 ? c.value + ye : ye >= c.value ? ye - c.value : ye : hn(ye, 0, c.value - 1);
    }
    function ge() {
      return It(this, null, function* () {
        const ye = a.value >= r.value, ee = a.value <= -o.value, Y = 0, re = -(o.value - r.value);
        i.value = !0, (ye || ee) && (i.value = !0, a.value = ee ? Y : re, D(0).setTranslate(0), D(c.value - 1).setTranslate(0)), yield Gn(), i.value = !1;
      });
    }
    function de() {
      N || (l.value = ce(Z(e.initialIndex)), N = !0);
    }
    function Q() {
      const { autoplay: ye } = e;
      !ye || c.value <= 1 || (ne(), M = window.setTimeout(() => {
        Xe(), Q();
      }, Z(ye)));
    }
    function ne() {
      M && clearTimeout(M);
    }
    function pe(ye) {
      return It(this, null, function* () {
        c.value <= 1 || !e.touchable || (A(ye), ne(), yield ge(), i.value = !0);
      });
    }
    function $e(ye) {
      const { touchable: ee, vertical: Y } = e;
      !P.value || !ee || (I(ye), B.value && (Ze(ye), a.value += Y ? y.value : $.value, j()));
    }
    function W() {
      if (!P.value || (E(), !B.value)) return;
      const { vertical: ye, onChange: ee } = e, Y = ye ? w.value < 0 : m.value < 0, re = ye ? T.value : z.value, we = performance.now() - H.value <= RO && re >= VO ? K(Y ? l.value + 1 : l.value - 1) : K();
      i.value = !1, a.value = we * -r.value;
      const ze = l.value;
      l.value = G(we), Q(), ze !== l.value && C(ee, l.value);
    }
    function ae(ye) {
      e.navigation === "hover" && (s.value = ye);
    }
    function Ee(ye) {
      return e.navigation !== "hover" ? "" : Qf(`--navigation${e.vertical ? "-vertical" : ""}-${ye}-animation`);
    }
    function Ue(ye) {
      if (!u.length || u.findIndex(({ isFocusing: Y }) => Y.value) === -1) return;
      const { key: ee } = ye;
      Ze(ye), ee === "ArrowLeft" && en(), ee === "ArrowRight" && Xe();
    }
    function nn() {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, o.value = r.value * c.value, a.value = l.value * -r.value, u.forEach((ye) => {
        ye.setTranslate(0);
      }), Q(), setTimeout(() => {
        i.value = !1;
      }), f.forEach(({ onResize: ye }) => {
        ye();
      }));
    }
    function Xe(ye) {
      return It(this, null, function* () {
        if (c.value <= 1) return;
        de();
        const { loop: ee, onChange: Y } = e, re = l.value;
        if (l.value = ce(re + 1), ye?.event !== !1 && C(Y, l.value), yield ge(), re === c.value - 1 && ee) {
          D(0).setTranslate(o.value), a.value = c.value * -r.value;
          return;
        }
        re !== c.value - 1 && (a.value = l.value * -r.value);
      });
    }
    function en(ye) {
      return It(this, null, function* () {
        if (c.value <= 1) return;
        de();
        const { loop: ee, onChange: Y } = e, re = l.value;
        if (l.value = ce(re - 1), ye?.event !== !1 && C(Y, l.value), yield ge(), re === 0 && ee) {
          D(c.value - 1).setTranslate(-o.value), a.value = r.value;
          return;
        }
        re !== 0 && (a.value = l.value * -r.value);
      });
    }
    function on(ye, ee) {
      if (c.value <= 1 || ye === l.value) return;
      ye = ye < 0 ? 0 : ye, ye = ye >= c.value ? c.value : ye;
      const Y = ye > l.value ? Xe : en, re = Math.abs(ye - l.value);
      Array.from({ length: re }).forEach((we, ze) => {
        Y({ event: ze === re - 1 ? ee?.event : !1 });
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
      n: Qf,
      toSizeUnit: Te,
      classes: FO,
      handleTouchstart: pe,
      handleTouchmove: $e,
      handleTouchend: W,
      next: Xe,
      prev: en,
      to: on,
      resize: nn,
      toNumber: Z,
      handleHovering: ae,
      getNavigationAnimation: Ee
    };
  }
});
fh.render = UO;
var Yi = fh;
ue(Yi);
fe(Yi, dd);
var ON = Yi, Oo = Yi;
function jO() {
  const { bindParent: e, index: n, parentProvider: r } = Bn(Hp);
  return or(!!e, "SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var { name: YO, n: WO } = oe("swipe-item"), KO = ["aria-hidden"];
function qO(e, n) {
  return b(), k("div", {
    class: p(e.n()),
    style: J({
      width: e.vertical ? void 0 : e.toSizeUnit(e.size),
      height: e.vertical ? e.toSizeUnit(e.size) : void 0,
      transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.translate)})`
    }),
    tabindex: "-1",
    "aria-hidden": e.currentIndex !== e.index,
    onFocus: n[0] || (n[0] = (r) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (r) => e.isFocusing = !1)
  }, [F(e.$slots, "default")], 46, KO);
}
var vh = te({
  name: YO,
  setup() {
    const e = O(0), n = O(!1), { swipe: r, bindSwipe: t, index: o } = jO(), { size: a, currentIndex: i, vertical: l } = r;
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
      n: WO,
      toSizeUnit: Te
    };
  }
});
vh.render = qO;
var cd = vh;
ue(cd);
var zN = cd, zo = cd, XO = Object.defineProperty, xf = Object.getOwnPropertySymbols, GO = Object.prototype.hasOwnProperty, ZO = Object.prototype.propertyIsEnumerable, _f = (e, n, r) => n in e ? XO(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, ev = (e, n) => {
  for (var r in n || (n = {})) GO.call(n, r) && _f(e, r, n[r]);
  if (xf)
    for (var r of xf(n)) ZO.call(n, r) && _f(e, r, n[r]);
  return e;
}, ph = ev(ev({
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
}, Fe(dd, [
  "loop",
  "indicator",
  "onChange"
])), Fe(xt, [
  "lockScroll",
  "teleport",
  "closeOnKeyEscape",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onKeyEscape",
  "onRouteChange"
])), { name: JO, n: nv, classes: QO } = oe("image-preview"), Kl = 12, rv = 200, xO = 350, tv = 200, _O = 500, na = 1, ez = ["onTouchstart"], nz = ["src", "alt"];
function rz(e, n) {
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
      U(t, qe({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.toNumber(e.initialIndex),
        loop: e.loop
      }, e.$attrs, { onChange: e.onChange }), {
        default: se(() => [(b(!0), k(De, null, Ye(e.images, (l, s) => (b(), ke(r, {
          key: l,
          class: p(e.n("swipe-item")),
          "var-image-preview-cover": ""
        }, {
          default: se(() => [L("div", {
            class: p(e.n("zoom-container")),
            style: J({
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
          }, null, 10, nz)], 46, ez)]),
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
var mh = te({
  name: JO,
  components: {
    VarButton: Jn,
    VarSwipe: Oo,
    VarSwipeItem: zo,
    VarPopup: st,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: ph,
  setup(e) {
    const n = yn(e, "show"), r = O(1), t = O(0), o = O(0), a = O(), i = O(), l = O(!0), s = O(null), { moveX: u, moveY: d, distance: c, startTime: f, startTouch: v, moveTouch: g, endTouch: h } = Jt(), m = S(() => {
      const { imagePreventDefault: Q, show: ne } = e;
      return ne && Q;
    });
    let w = null, $ = null, y = !1;
    const z = {
      start: null,
      prev: null
    };
    xe(() => document, "contextmenu", K);
    function T(Q) {
      r.value = Z(Q), l.value = !1, z.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, tv);
    }
    function P() {
      r.value = 1, t.value = 0, o.value = 0, l.value = !0, z.prev = null, a.value = void 0, i.value = void 0;
    }
    function R(Q) {
      return z.prev ? c.value <= Kl && performance.now() - f.value <= rv && z.prev === Q : !1;
    }
    function H(Q) {
      return !Q || !z.start || !z.prev ? !1 : c.value <= Kl && performance.now() - f.value < xO && (Q === z.start || Q.parentNode === z.start);
    }
    function A() {
      h(), window.clearTimeout($), y = !1, z.start = null;
    }
    function I(Q) {
      if (h(), window.clearTimeout($), y) {
        y = !1;
        return;
      }
      const ne = H(Q.target);
      w = window.setTimeout(() => {
        ne && j(), z.start = null;
      }, rv);
    }
    function E(Q, ne) {
      window.clearTimeout(w), window.clearTimeout($);
      const pe = Q.currentTarget;
      if (z.start = pe, $ = window.setTimeout(() => {
        y = !0, C(e.onLongPress, ne);
      }, _O), R(pe)) {
        r.value > na ? P() : T(e.zoom);
        return;
      }
      v(Q), z.prev = pe;
    }
    function B(Q) {
      const { offsetWidth: ne, offsetHeight: pe } = Q, { naturalWidth: $e, naturalHeight: W } = Q.querySelector(`.${nv("image")}`);
      return {
        width: ne,
        height: pe,
        imageRadio: W / $e,
        rootRadio: pe / ne,
        zoom: Z(e.zoom)
      };
    }
    function N(Q) {
      const { zoom: ne, imageRadio: pe, rootRadio: $e, width: W, height: ae } = B(Q);
      if (!pe) return 0;
      const Ee = pe > $e ? ae / pe : W;
      return Math.max(0, (ne * Ee - W) / 2) / ne;
    }
    function M(Q) {
      const { zoom: ne, imageRadio: pe, rootRadio: $e, width: W, height: ae } = B(Q);
      if (!pe) return 0;
      const Ee = pe > $e ? ae : W * pe;
      return Math.max(0, (ne * Ee - ae) / 2) / ne;
    }
    function D(Q) {
      if (!z.prev) return;
      g(Q);
      const ne = Q.currentTarget;
      if (c.value > Kl && window.clearTimeout($), r.value > na) {
        const pe = N(ne), $e = M(ne);
        t.value = hn(t.value + u.value, -pe, pe), o.value = hn(o.value + d.value, -$e, $e);
      }
      z.prev = ne;
    }
    function j() {
      if (r.value > na) {
        P(), setTimeout(() => C(e["onUpdate:show"], !1), tv);
        return;
      }
      C(e["onUpdate:show"], !1);
    }
    function K(Q) {
      m.value && Ze(Q);
    }
    function G(Q) {
      var ne;
      (ne = s.value) == null || ne.prev(Q);
    }
    function ce(Q) {
      var ne;
      (ne = s.value) == null || ne.next(Q);
    }
    function ge(Q, ne) {
      var pe;
      (pe = s.value) == null || pe.to(Q, ne);
    }
    function de(Q) {
      Q <= na ? P() : T(Q);
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
      n: nv,
      classes: QO,
      toNumber: Z,
      handleTouchstart: E,
      handleTouchmove: D,
      handleTouchend: I,
      handleTouchcancel: A,
      close: j,
      prev: G,
      next: ce,
      to: ge,
      zoom: de
    };
  }
});
mh.render = rz;
var Wo = mh, tz = Object.defineProperty, oz = Object.defineProperties, az = Object.getOwnPropertyDescriptors, ov = Object.getOwnPropertySymbols, iz = Object.prototype.hasOwnProperty, lz = Object.prototype.propertyIsEnumerable, av = (e, n, r) => n in e ? tz(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, ra = (e, n) => {
  for (var r in n || (n = {})) iz.call(n, r) && av(e, r, n[r]);
  if (ov)
    for (var r of ov(n)) lz.call(n, r) && av(e, r, n[r]);
  return e;
}, iv = (e, n) => oz(e, az(n)), tt, po = {};
function sz(e = {}) {
  return Pn(e) ? iv(ra({}, po), { images: [e] }) : Ke(e) ? iv(ra({}, po), { images: e }) : ra(ra({}, po), e);
}
function ht(e) {
  if (!Er()) return;
  ht.close();
  const n = sz(e), r = $n(n);
  r.teleport = "body", tt = r;
  const { unmountInstance: t } = Qt(Wo, r, {
    onClose: () => C(r.onClose),
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
}
ht.close = () => {
  if (tt != null) {
    const e = tt;
    tt = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
ht.setDefaultOptions = (e) => {
  po = e;
};
ht.resetDefaultOptions = () => {
  po = {};
};
ht.Component = Wo;
ue(Wo);
ue(Wo, ht);
fe(ht, ph);
var TN = Wo, To = ht, mo = {
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
}), { name: uz, n: dz, classes: cz } = oe("sticky");
function fz(e, n) {
  return b(), k("div", {
    ref: "stickyEl",
    class: p(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
    style: J({
      zIndex: e.toNumber(e.zIndex),
      top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
      width: e.enableFixedMode ? e.fixedWidth : void 0,
      height: e.enableFixedMode ? e.fixedHeight : void 0
    })
  }, [L("div", {
    ref: "wrapperEl",
    class: p(e.n("wrapper")),
    style: J({
      zIndex: e.toNumber(e.zIndex),
      position: e.enableFixedMode ? "fixed" : void 0,
      width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
      height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
      left: e.enableFixedMode ? e.fixedLeft : void 0,
      top: e.enableFixedMode ? e.fixedTop : void 0
    })
  }, [F(e.$slots, "default")], 6)], 6);
}
var gh = te({
  name: uz,
  props: mo,
  setup(e) {
    const n = O(null), r = O(null), t = O(!1), o = O("0px"), a = O("0px"), i = O("auto"), l = O("auto"), s = O("auto"), u = O("auto"), d = S(() => !e.disabled && e.cssMode), c = S(() => !e.disabled && !e.cssMode && t.value), f = S(() => fn(e.offsetTop));
    let v;
    me(() => e.disabled, $), On(() => lv(null, null, function* () {
      yield Gn(), h(), m();
    })), Zt(w), wr($), xe(() => window, "scroll", m);
    function g() {
      const { cssMode: y, disabled: z } = e;
      if (z) return;
      let T = 0;
      if (v && v !== window) {
        const { top: E } = kn(v);
        T = E;
      }
      const P = r.value, R = n.value, { top: H, left: A } = kn(R), I = H - T;
      return I <= f.value ? (y || (i.value = `${R.offsetWidth}px`, l.value = `${R.offsetHeight}px`, o.value = `${T + f.value}px`, a.value = `${A}px`, s.value = `${P.offsetWidth}px`, u.value = `${P.offsetHeight}px`, t.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (t.value = !1, {
        offsetTop: I,
        isFixed: !1
      });
    }
    function h() {
      v = ut(n.value), v !== window && v.addEventListener("scroll", m);
    }
    function m() {
      const y = g();
      y && C(e.onScroll, y.offsetTop, y.isFixed);
    }
    function w() {
      !v || v === window || v.removeEventListener("scroll", m);
    }
    function $() {
      return lv(this, null, function* () {
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
      n: dz,
      classes: cz,
      resize: $,
      toNumber: Z
    };
  }
});
gh.render = fz;
var Wi = gh;
ue(Wi);
fe(Wi, mo);
var EN = Wi, Eo = Wi, hh = { index: [Number, String] }, bh = /* @__PURE__ */ Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function vz() {
  const { bindChildren: e, length: n, childProviders: r } = Dn(bh);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function pz() {
  const { parentProvider: e, index: n, bindParent: r } = Bn(bh);
  return or(!!r, "IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var { name: mz, n: gz, classes: hz } = oe("index-anchor");
function bz(e, n) {
  return b(), ke(Gt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: "anchorEl",
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode
  }, {
    default: se(() => [L("div", qe({ class: e.n() }, e.$attrs), [F(e.$slots, "default", {}, () => [Le(ve(e.name), 1)])], 16)]),
    _: 3
  }, 8, [
    "offset-top",
    "z-index",
    "disabled",
    "css-mode"
  ]);
}
var yh = te({
  name: mz,
  components: { VarSticky: Eo },
  inheritAttrs: !1,
  props: hh,
  setup(e) {
    const n = O(!1), r = S(() => e.index), t = O(null), { index: o, indexBar: a, bindIndexBar: i } = pz(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: d, zIndex: c } = a;
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
      n: gz,
      classes: hz,
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
yh.render = bz;
var Ki = yh;
ue(Ki);
fe(Ki, hh);
var BN = Ki, Gs = Ki, wh = {
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
}, sv = (e, n, r) => new Promise((t, o) => {
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
}), { name: yz, n: wz, classes: kz } = oe("index-bar"), $z = ["onClick"];
function Sz(e, n) {
  return b(), k("div", {
    ref: "barEl",
    class: p(e.n())
  }, [F(e.$slots, "default"), L("ul", {
    class: p(e.n("anchor-list")),
    style: J({
      zIndex: e.toNumber(e.zIndex) + 2,
      display: e.hideList ? "none" : "block"
    })
  }, [(b(!0), k(De, null, Ye(e.anchorNameList, (r) => (b(), k("li", {
    key: r,
    class: p(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
    style: J({ color: e.active === r && e.highlightColor ? e.highlightColor : void 0 }),
    onClick: (t) => e.anchorClick({
      anchorName: r,
      manualCall: !0
    })
  }, [F(e.$slots, "anchor-name", { anchorName: r }, () => [Le(ve(r), 1)])], 14, $z))), 128))], 6)], 2);
}
var kh = te({
  name: yz,
  props: wh,
  setup(e) {
    const n = O(""), r = O(null), t = O([]), o = O(), a = S(() => e.sticky), i = S(() => e.stickyCssMode), l = S(() => fn(e.stickyOffsetTop)), s = S(() => e.zIndex), { length: u, indexAnchors: d, bindIndexAnchors: c } = vz();
    let f = null, v = !1;
    const g = {
      active: o,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    me(() => u.value, () => sv(null, null, function* () {
      yield Gn(), t.value = d.filter(({ name: P }) => P.value != null).map(({ name: P }) => P.value);
    })), On(y), Pt(z), Ot(() => {
      v = !0, z();
    }), ft(() => {
      !v || o.value === void 0 || ($({
        anchorName: o.value,
        options: { event: !1 }
      }), v = !1);
    }), c(g);
    function h(P, R) {
      const H = Sn(P) ? P.name.value : P;
      H === o.value || H === void 0 || (o.value = H, R?.event !== !1 && C(e.onChange, H));
    }
    function m() {
      const { top: P } = kn(f), { top: R } = kn(r.value);
      return kt(f) - P + R;
    }
    function w() {
      const P = kt(f), R = f === window ? document.body.scrollHeight : f.scrollHeight, H = m();
      d.forEach((A, I) => {
        const E = A.getOffsetTop(), B = P - E + l.value - H, N = I === d.length - 1 ? R : d[I + 1].getOffsetTop() - A.getOffsetTop();
        A.setDisabled(!0), B >= 0 && B < N && n.value === "" && (A.setDisabled(!1), h(A));
      });
    }
    function $(P) {
      return sv(this, arguments, function* ({ anchorName: R, manualCall: H = !1, options: A }) {
        if (H && C(e.onClick, R), R === o.value && !v) return;
        const I = d.find(({ name: M }) => R === M.value);
        if (!I) return;
        const E = m(), B = I.getOffsetTop() - l.value + E, N = Lu(f);
        n.value = R, h(R, A), yield ho(f, {
          left: N,
          top: B,
          animation: mm,
          duration: Z(e.duration)
        }), yield Gn(), n.value = "";
      });
    }
    function y() {
      f = ut(r.value), f.addEventListener("scroll", w);
    }
    function z() {
      f && f.removeEventListener("scroll", w);
    }
    function T(P, R) {
      Lt(() => $({
        anchorName: P,
        options: R
      }));
    }
    return {
      barEl: r,
      active: o,
      zIndex: s,
      anchorNameList: t,
      n: wz,
      classes: kz,
      toNumber: Z,
      scrollTo: T,
      anchorClick: $
    };
  }
});
kh.render = Sz;
var qi = kh;
ue(qi);
fe(qi, wh);
var DN = qi, Zs = qi, $h = {
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
}, { name: Cz, n: Pz, classes: Oz } = oe("link");
function zz(e, n) {
  return b(), ke(Gt(e.tag), qe(e.linkProps, {
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
var Sh = te({
  name: Cz,
  props: $h,
  setup(e) {
    const n = O(!1), r = S(() => {
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
      n: Pz,
      classes: Oz,
      handleClick: o,
      toSizeUnit: Te
    };
  }
});
Sh.render = zz;
var Xi = Sh;
ue(Xi);
fe(Xi, $h);
var IN = Xi, Js = Xi, Ch = {
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
}, Ph = /* @__PURE__ */ Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Tz() {
  const { bindChildren: e, childProviders: n, length: r } = Dn(Ph);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
var Oh = /* @__PURE__ */ Symbol("TAB_ITEM_BIND_LIST_KEY");
function Ez() {
  const { parentProvider: e, bindParent: n, index: r } = Bn(Ph);
  return or(!!n, "TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
function Bz() {
  const { childProviders: e, bindChildren: n, length: r } = Dn(Oh);
  return {
    length: r,
    lists: e,
    bindLists: n
  };
}
function Dz() {
  const { parentProvider: e, bindParent: n, index: r } = Bn(Oh);
  return {
    index: r,
    tabItem: e,
    bindTabItem: n
  };
}
var Iz = (e, n, r) => new Promise((t, o) => {
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
}), { name: Mz, n: Az, classes: Nz } = oe("list");
function Rz(e, n) {
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
      return [We((b(), k("div", {
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
var zh = te({
  name: Mz,
  directives: { Ripple: vn },
  components: { VarLoading: St },
  props: Ch,
  setup(e) {
    const n = O(null), r = O(null), { tabItem: t, bindTabItem: o } = Dz(), { t: a } = kr();
    let i;
    C(o, {}), t && me(() => t.current.value, d), me(() => [
      e.loading,
      e.error,
      e.finished
    ], d), On(() => {
      i = ut(n.value), i.addEventListener("scroll", d), e.immediateCheck && d();
    }), Zt(u);
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
      return Iz(this, null, function* () {
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
      n: Az,
      classes: Nz
    };
  }
});
zh.render = Rz;
var Gi = zh;
ue(Gi);
fe(Gi, Ch);
var MN = Gi, Qs = Gi, Vz = {
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
}, { name: Lz, classes: Fz, n: uv } = oe("loading-bar"), Hz = te({
  name: Lz,
  props: Vz,
  setup(e) {
    return () => U("div", {
      class: Fz(uv(), [e.error, uv("--error")]),
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
}), Th = 200, Eh, Bh, Dh, Ih, Zi, dv, Mh = {}, Cn = $n({
  value: 0,
  opacity: 0,
  error: !1
});
function Uz(e) {
  Object.assign(Cn, e), Mh = e;
}
var jz = () => {
  Object.keys(Mh).forEach((e) => {
    Cn[e] !== void 0 && (Cn[e] = void 0);
  });
}, Ah = () => {
  dv || (dv = !0, Qt(Hz, Cn));
}, fd = () => {
  Eh = window.setTimeout(() => {
    Cn.transitionDuration = void 0, !(Cn.value >= 95) && (Cn.value += Cn.value < 70 ? Math.round(5 * Math.random()) : Math.random(), fd());
  }, 200);
}, vd = () => {
  window.clearTimeout(Eh), window.clearTimeout(Zi), window.clearTimeout(Dh), window.clearTimeout(Bh), window.clearTimeout(Ih);
}, Nh = () => {
  vd(), Cn.value = 100, Zi = window.setTimeout(() => {
    Cn.opacity = 0, Ih = window.setTimeout(() => {
      Cn.error = !1;
    }, 250);
  }, 300);
}, Yz = () => {
  vd(), Cn.error = !1, Cn.value = 0, Cn.transitionDuration = 0, Ah(), Zi = window.setTimeout(() => {
    Cn.opacity = 1;
  }, Th), fd();
}, Wz = () => {
  var e;
  Dh = window.setTimeout(Nh, (e = Cn.finishDelay) != null ? e : 0);
}, Kz = () => {
  vd(), Cn.error = !0, Cn.value === 100 && (Cn.value = 0, Cn.transitionDuration = 0), Ah(), Zi = window.setTimeout(() => {
    Cn.opacity = 1;
  }, Th), fd(), Bh = window.setTimeout(Nh, 300);
}, Rh = {
  start: Yz,
  finish: Wz,
  error: Kz,
  setDefaultOptions: Uz,
  resetDefaultOptions: jz
}, AN = Rh, xs = Rh, Vh = {
  tag: {
    type: String,
    default: "div"
  },
  locale: {
    type: String,
    default: "zh-CN"
  },
  messages: { type: Object }
}, qz = Object.defineProperty, Xz = Object.defineProperties, Gz = Object.getOwnPropertyDescriptors, cv = Object.getOwnPropertySymbols, Zz = Object.prototype.hasOwnProperty, Jz = Object.prototype.propertyIsEnumerable, fv = (e, n, r) => n in e ? qz(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Qz = (e, n) => {
  for (var r in n || (n = {})) Zz.call(n, r) && fv(e, r, n[r]);
  if (cv)
    for (var r of cv(n)) Jz.call(n, r) && fv(e, r, n[r]);
  return e;
}, xz = (e, n) => Xz(e, Gz(n)), { name: _z, n: e6 } = oe("locale-provider"), Ji = te({
  name: _z,
  props: Vh,
  setup(e, { slots: n }) {
    const r = S(() => {
      var o;
      return Object.entries((o = e.messages) != null ? o : {}).reduce((a, [i, l]) => (a[i] = xz(Qz({}, l), { lang: i }), a), {});
    });
    uy({ t });
    function t(o) {
      if (go(r.value, e.locale) && go(r.value[e.locale], o)) return r.value[e.locale][o];
    }
    return () => Fn(e.tag, { class: e6() }, C(n.default));
  }
});
ue(Ji);
fe(Ji, Vh);
var NN = Ji, _s = Ji, Lh = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  option: Object
}, Fh = /* @__PURE__ */ Symbol("SELECT_BIND_OPTION_KEY");
function n6() {
  const { length: e, childProviders: n, bindChildren: r } = Dn(Fh);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function r6() {
  const { index: e, parentProvider: n, bindParent: r } = Bn(Fh);
  return or(!!r, "Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var { name: t6, n: o6, classes: a6 } = oe("option"), i6 = ["tabindex"];
function l6(e, n) {
  const r = x("var-checkbox"), t = x("maybe-v-node"), o = x("var-hover-overlay"), a = _e("ripple"), i = _e("hover");
  return We((b(), k("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
    style: J({ color: e.optionSelected ? e.focusColor : void 0 }),
    tabindex: e.disabled ? void 0 : "-1",
    onFocus: n[2] || (n[2] = (l) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (l) => e.isFocusing = !1),
    onClick: n[4] || (n[4] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    L("div", {
      class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
      style: J({ background: e.optionSelected ? e.focusColor : void 0 })
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
  ], 46, i6)), [
    [yr, e.visible],
    [a, { disabled: e.disabled || !e.ripple }],
    [
      i,
      e.handleHovering,
      "desktop"
    ]
  ]);
}
var Hh = te({
  name: t6,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarCheckbox: dt,
    VarHoverOverlay: Zn,
    MaybeVNode: lr
  },
  props: Lh,
  setup(e) {
    const n = O(), r = O(!1), t = O(!1), o = S(() => {
      var D;
      return (D = e.option) != null ? D : {
        label: e.label,
        value: e.value,
        disabled: e.disabled
      };
    }), a = S(() => t.value), i = S(() => e.value), l = S(() => e.disabled), s = S(() => e.ripple), { select: u, bindSelect: d } = r6(), { pattern: c, showMenu: f, filterable: v, multiple: g, focusColor: h, onSelect: m, computeLabel: w, filter: $ } = u, { hovering: y, handleHovering: z } = ur(), T = S(() => {
      var D;
      return Yn(e.label) ? e.label((D = e.option) != null ? D : {
        label: e.label,
        value: e.value,
        disabled: e.disabled
      }, t.value) : e.label;
    }), P = O(!0), R = S(() => !v.value || !c.value ? !0 : $(c.value, o.value)), H = S(() => f.value ? R.value : P.value), A = {
      label: T,
      value: i,
      disabled: l,
      ripple: s,
      selected: a,
      sync: M
    };
    me([() => e.label, () => e.value], w), me(() => [f.value, R.value], () => {
      f.value && (P.value = R.value);
    }, { immediate: !0 }), d(A), xe(() => window, "keydown", E), xe(() => window, "keyup", B);
    function I() {
      e.disabled || N();
    }
    function E(D) {
      r.value && ((D.key === " " || D.key === "Enter") && Ze(D), D.key === "Enter" && n.value.click());
    }
    function B(D) {
      r.value && D.key === " " && (Ze(D), n.value.click());
    }
    function N() {
      g.value && (t.value = !t.value), m(A);
    }
    function M(D) {
      t.value = D;
    }
    return {
      root: n,
      optionSelected: t,
      visible: H,
      multiple: g,
      focusColor: h,
      hovering: y,
      isFocusing: r,
      labelVNode: T,
      n: o6,
      classes: a6,
      handleHovering: z,
      handleClick: I,
      handleSelect: N
    };
  }
});
Hh.render = l6;
var Qi = Hh;
ue(Qi);
fe(Qi, Lh);
var RN = Qi, Ia = Qi, s6 = Object.defineProperty, u6 = Object.defineProperties, d6 = Object.getOwnPropertyDescriptors, vv = Object.getOwnPropertySymbols, c6 = Object.prototype.hasOwnProperty, f6 = Object.prototype.propertyIsEnumerable, pv = (e, n, r) => n in e ? s6(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, v6 = (e, n) => {
  for (var r in n || (n = {})) c6.call(n, r) && pv(e, r, n[r]);
  if (vv)
    for (var r of vv(n)) f6.call(n, r) && pv(e, r, n[r]);
  return e;
}, p6 = (e, n) => u6(e, d6(n)), Uh = p6(v6({
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
} }), m6 = (e, n, r) => new Promise((t, o) => {
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
}), { name: g6, n: ql, classes: h6 } = oe("otp-input"), b6 = ["data-index"];
function y6(e, n) {
  const r = x("var-input"), t = x("var-form-details");
  return b(), k("div", {
    ref: "rootEl",
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--align-${e.align}`))),
    style: J({
      "--otp-input-gutter": e.gutterStyle,
      "--otp-input-cell-height": e.cellHeightStyle,
      "--otp-input-cell-max-width": e.cellMaxWidthStyle
    }),
    onClick: n[1] || (n[1] = (...o) => e.handleClick && e.handleClick(...o)),
    onKeydown: n[2] || (n[2] = (...o) => e.handleKeydown && e.handleKeydown(...o)),
    onPaste: n[3] || (n[3] = (...o) => e.handlePaste && e.handlePaste(...o))
  }, [L("div", { class: p(e.n("cells")) }, [(b(!0), k(De, null, Ye(e.cellIndexes, (o, a) => (b(), k(De, { key: a }, [L("div", {
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
  ])], 10, b6), e.shouldRenderSeparator(a) ? (b(), k("div", {
    key: 0,
    class: p(e.n("separator"))
  }, [F(e.$slots, "separator", { index: a })], 2)) : X("v-if", !0)], 64))), 128))], 2), U(t, {
    class: p(e.n("details")),
    "var-otp-input-cover": "",
    "error-message": e.errorMessage
  }, null, 8, ["class", "error-message"])], 38);
}
var jh = te({
  name: g6,
  components: {
    VarFormDetails: Hn,
    VarInput: Vo
  },
  props: Uh,
  setup(e) {
    const n = O0(), r = O(null), t = O([]), o = O(-1), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = xn(), { bindForm: u, form: d } = Wn(), c = S(() => Z(e.length)), f = S(() => {
      var ee;
      return (ee = H(e.maskSymbol)[0]) != null ? ee : "•";
    }), v = S(() => A(e.modelValue)), g = S(() => Array.from({ length: c.value })), h = S(() => Te(e.gutter)), m = S(() => Te(e.cellHeight)), w = S(() => Te(e.cellMaxWidth)), $ = S(() => e.type === "digit" ? "numeric" : void 0), y = S(() => e.type === "digit" ? "tel" : "text"), z = S(() => {
      var ee;
      return (ee = d?.disabled.value) != null ? ee : !1;
    }), T = S(() => {
      var ee;
      return (ee = d?.readonly.value) != null ? ee : !1;
    });
    let P = null, R = !1;
    u?.({
      validate: de,
      resetValidation: s,
      reset: Q
    }), On(() => {
      e.autofocus && ce();
    });
    function H(ee) {
      return Array.from(ee);
    }
    function A(ee) {
      return I(ee).slice(0, c.value);
    }
    function I(ee) {
      switch (e.type) {
        case "digit":
          return ee.replace(/\D+/g, "");
        case "alphanumeric":
          return H(ee).filter((Y) => /[A-Za-z0-9]/.test(Y)).join("");
        default:
          return ee;
      }
    }
    function E() {
      return H(v.value);
    }
    function B(ee) {
      var Y;
      const re = (Y = E()[ee]) != null ? Y : "";
      return re ? e.mask ? f.value : re : "";
    }
    function N(ee, Y) {
      t.value[Y] = ee && "$" in ee ? ee : null;
    }
    function M(ee) {
      if (ee >= c.value - 1 || !n.separator) return !1;
      const Y = n.separator({ index: ee });
      return Va(Y).length > 0;
    }
    function D(ee, Y = v.value) {
      Ne(() => {
        i(e.validateTrigger, ee, e.rules, Y);
      });
    }
    function j(ee) {
      H(ee).length === c.value && (C(e.onComplete, ee), D("onComplete", ee));
    }
    function K(ee, Y) {
      if (ee === v.value) {
        ne(Y);
        return;
      }
      C(e["onUpdate:modelValue"], ee), C(e.onInput, ee), D("onInput", ee), j(ee);
    }
    function G(ee) {
      return m6(this, null, function* () {
        var Y, re, we, ze, Ge;
        const rn = hn(ee, 0, c.value - 1);
        (re = (Y = t.value[rn]) == null ? void 0 : Y.focus) == null || re.call(Y), yield qr(), document.activeElement === ((we = t.value[rn]) == null ? void 0 : we.el) && ((Ge = (ze = t.value[rn]) == null ? void 0 : ze.select) == null || Ge.call(ze));
      });
    }
    function ce(ee) {
      G(ee ?? Math.min(E().length, c.value - 1));
    }
    function ge() {
      t.value.forEach((ee) => {
        var Y;
        (Y = ee?.blur) == null || Y.call(ee);
      });
    }
    function de() {
      return l(e.rules, v.value);
    }
    function Q() {
      v.value !== "" && C(e["onUpdate:modelValue"], ""), s();
    }
    function ne(ee) {
      var Y;
      const re = (Y = t.value[ee]) == null ? void 0 : Y.el;
      re && (re.value = B(ee));
    }
    function pe() {
      g.value.forEach((ee, Y) => {
        ne(Y);
      });
    }
    function $e(ee) {
      P = ee, !R && (R = !0, Ne(() => {
        R = !1, P != null && (o.value = P, G(P), P = null);
      }));
    }
    function W(ee, Y) {
      const re = E(), we = hn(ee, 0, re.length), ze = [...re], Ge = Y.slice(0, c.value - we);
      Ge.forEach((rn, mn) => {
        ze[we + mn] = rn;
      }), K(ze.join("").slice(0, c.value), we), $e(hn(we + Ge.length, 0, c.value - 1));
    }
    function ae(ee, Y = hn(ee, 0, c.value - 1)) {
      const re = E();
      re.splice(ee, 1), K(re.join(""), ee), $e(Y);
    }
    function Ee(ee) {
      const Y = E();
      if (!Y[ee]) {
        if (ee <= 0) {
          pe();
          return;
        }
        ae(ee - 1, ee - 1);
        return;
      }
      ae(ee, ee !== Y.length - 1 && ee > 0 ? ee - 1 : hn(ee, 0, c.value - 1));
    }
    function Ue(ee) {
      if (e.disabled || z.value) return;
      const Y = ee.target, re = Y?.closest(`.${ql("cell")}`), we = re?.dataset.index;
      C(e.onClick, ee), D("onClick"), we != null && G(Number(we));
    }
    function nn(ee) {
      o.value = ee, G(ee);
    }
    function Xe(ee) {
      var Y;
      const re = ee.relatedTarget;
      (!re || !((Y = r.value) != null && Y.contains(re))) && (o.value = -1);
    }
    function en(ee, Y) {
      const re = H(I(Y)), we = E(), ze = ee > we.length;
      if (re.length === 0) {
        if (ze) {
          $e(we.length), ne(ee);
          return;
        }
        Y === "" ? ae(ee) : (ne(ee), $e(ee));
        return;
      }
      if (ze) {
        W(we.length, re);
        return;
      }
      W(ee, re);
    }
    function on(ee) {
      var Y, re;
      if (!e.allowPaste || z.value || T.value || e.disabled || e.readonly) return;
      const we = (re = (Y = ee.clipboardData) == null ? void 0 : Y.getData("text")) != null ? re : "";
      if (!we) return;
      ee.preventDefault();
      const ze = I(e.pasteTransform ? e.pasteTransform(we) : we);
      if (C(e.onPaste, ze, ee), D("onPaste", ze), !ze) {
        pe();
        return;
      }
      W(0, H(ze));
    }
    function ye(ee) {
      if (z.value || T.value || e.disabled || e.readonly) return;
      const Y = ee.target, re = Y?.closest(`.${ql("cell")}`), we = re?.dataset.index;
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
      cellMaxWidthStyle: w,
      resolvedInputmode: $,
      nativeInputType: y,
      align: e.align,
      n: ql,
      classes: h6,
      setInputRef: N,
      getDisplayChar: B,
      shouldRenderSeparator: M,
      handleClick: Ue,
      handleFocus: nn,
      handleBlur: Xe,
      handleCellInput: en,
      handleKeydown: ye,
      handlePaste: on,
      focus: ce,
      blur: ge,
      reset: Q,
      validate: de,
      resetValidation: s
    };
  }
});
jh.render = y6;
var xi = jh;
ue(xi);
fe(xi, Uh);
var VN = xi, eu = xi, Yh = {
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
}, { name: w6, n: ta } = oe("overlay"), _i = te({
  name: w6,
  inheritAttrs: !1,
  props: Yh,
  setup(e, { slots: n, attrs: r }) {
    const { zIndex: t } = Ao(() => e.show, 3), { onStackTop: o } = Gu(() => e.show, t), { disabled: a } = Tt();
    Mo(() => e.show, () => e.lockScroll), xe(() => window, "keydown", i);
    function i(d) {
      !o() || d.key !== "Escape" || !e.show || (C(e.onKeyEscape), e.closeOnKeyEscape && (Ze(d), C(e["onUpdate:show"], !1)));
    }
    function l() {
      C(e.onClick), C(e["onUpdate:show"], !1);
    }
    function s() {
      return U("div", qe({
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
fe(_i, Yh);
var LN = _i, nu = _i, Wh = {
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
}, { name: k6, n: $6, classes: S6 } = oe("paper");
function C6(e, n) {
  const r = x("var-hover-overlay"), t = _e("ripple"), o = _e("hover");
  return We((b(), k("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.variant === "standard", e.formatElevation(e.elevation, 2)], [!e.disabled && (e.onClick || !e.normalizedHoverable.disabled), e.n("--cursor")], [e.disabled, e.n("--disabled")], [!e.disabled && e.normalizedActive.enabled, e.n("--active")], [e.round, e.n("--round")], [e.surfaceLow, e.n("--surface-low")], [e.variant === "outlined", e.n("--outlined")], [e.variant === "filled", e.n("--filled")], [e.inline, e.n("$--inline-flex")])),
    style: J({
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
  name: k6,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: { VarHoverOverlay: Zn },
  props: Wh,
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
      n: $6,
      classes: S6,
      formatElevation: zn,
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
Kh.render = C6;
var el = Kh;
ue(el);
fe(el, Wh);
var FN = el, ru = el, P6 = Object.defineProperty, mv = Object.getOwnPropertySymbols, O6 = Object.prototype.hasOwnProperty, z6 = Object.prototype.propertyIsEnumerable, gv = (e, n, r) => n in e ? P6(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, T6 = (e, n) => {
  for (var r in n || (n = {})) O6.call(n, r) && gv(e, r, n[r]);
  if (mv)
    for (var r of mv(n)) z6.call(n, r) && gv(e, r, n[r]);
  return e;
}, qh = T6({
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
}, Fe(xt, [
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
])), { name: E6, n: B6, classes: D6 } = oe("picker"), hv = 300, I6 = 15, bv = 200, M6 = 1e3, yv = 0, A6 = [
  "onTouchstartPassive",
  "onTouchmove",
  "onTouchend"
], N6 = ["onTransitionend"], R6 = ["onClick"];
function V6(e, n) {
  const r = x("var-button");
  return b(), ke(Gt(e.dynamic ? e.n("$-popup") : e.Transition), qe(e.dynamic ? {
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
    default: se(() => [L("div", qe({ class: e.n() }, e.$attrs), [e.toolbar ? (b(), k("div", {
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
      style: J({ height: `${e.columnHeight}px` })
    }, [
      (b(!0), k(De, null, Ye(e.scrollColumns, (t) => (b(), k("div", {
        key: t.id,
        class: p(e.n("column")),
        onTouchstartPassive: (o) => e.handleTouchstart(o, t),
        onTouchmove: Nn((o) => e.handleTouchmove(o, t), ["prevent"]),
        onTouchend: (o) => e.handleTouchend(t)
      }, [L("div", {
        ref_for: !0,
        ref: (o) => e.setScrollEl(o, t),
        class: p(e.n("scroller")),
        style: J({
          transform: `translateY(${t.translate}px)`,
          transitionDuration: `${t.duration}ms`,
          transitionProperty: t.duration ? "transform" : "none"
        }),
        onTransitionend: (o) => e.handleTransitionend(t)
      }, [(b(!0), k(De, null, Ye(t.column, (o, a) => (b(), k("div", {
        key: e.getValue(o),
        class: p(e.classes(e.n("option"), o.className)),
        style: J({ height: `${e.optionHeight}px` }),
        onClick: (i) => e.handleClick(t, a)
      }, [L("div", { class: p(e.classes(e.n("text"), o.textClassName)) }, ve(o[e.getOptionKey("text")]), 3)], 14, R6))), 128))], 46, N6)], 42, A6))), 128)),
      L("div", {
        class: p(e.n("picked")),
        style: J({
          top: `${e.center}px`,
          height: `${e.optionHeight}px`
        })
      }, null, 6),
      L("div", {
        class: p(e.n("mask")),
        style: J({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
      }, null, 6)
    ], 6)], 16)]),
    _: 3
  }, 16);
}
var Xh = te({
  name: E6,
  components: {
    VarButton: Jn,
    VarPopup: st
  },
  inheritAttrs: !1,
  props: qh,
  setup(e) {
    const n = yn(e, "modelValue"), r = O([]), t = S(() => Z(e.columnsCount)), o = S(() => fn(e.optionHeight)), a = S(() => fn(e.optionCount)), i = S(() => a.value * o.value / 2 - o.value / 2), l = S(() => a.value * o.value), { prevY: s, moveY: u, dragging: d, startTouch: c, moveTouch: f, endTouch: v } = Jt(), { t: g } = kr();
    let h = [];
    R(), me(() => e.columns, R, { deep: !0 }), me(() => n.value, R);
    function m(W) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[W];
    }
    function w(W) {
      var ae;
      return (ae = W[m("value")]) != null ? ae : W[m("text")];
    }
    function $(W) {
      h = [...W];
    }
    function y(W) {
      return (e.columnsCount != null ? W.slice(0, t.value) : W).map((ae, Ee) => {
        const Ue = {
          id: yv++,
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
        }, nn = n.value[Ee], Xe = Ue.column.findIndex((en) => nn === w(en));
        return Ue.index = Xe === -1 ? 0 : Xe, M(Ue), Ue;
      });
    }
    function z(W) {
      const ae = [];
      return T(ae, W), ae;
    }
    function T(W, ae, Ee = !0, Ue = 1) {
      var nn;
      if (ae.length && (e.columnsCount == null || Ue <= t.value)) {
        const Xe = {
          id: yv++,
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
        if (W.push(Xe), Ee) {
          const en = n.value[W.length - 1], on = ae.findIndex((ye) => en === w(ye));
          Xe.index = on === -1 ? 0 : on;
        }
        M(Xe), T(W, (nn = Xe.column[Xe.index][m("children")]) != null ? nn : [], Ee, Ue + 1);
      }
    }
    function P(W) {
      var ae;
      r.value.splice(r.value.indexOf(W) + 1), T(r.value, (ae = W.column[W.index][m("children")]) != null ? ae : [], !1, r.value.length + 1);
    }
    function R() {
      r.value = e.cascade ? z(e.columns) : y(e.columns);
      const { indexes: W } = N();
      $(W);
    }
    function H(W, ae) {
      ae.scrollEl = W;
    }
    function A(W) {
      C(e["onUpdate:show"], W);
    }
    function I(W) {
      const ae = i.value - W.column.length * o.value, Ee = o.value + i.value;
      W.translate = hn(W.translate, ae, Ee);
    }
    function E(W, ae) {
      const Ee = Math.round((i.value - ae) / o.value);
      return T0(Ee, W.column);
    }
    function B(W) {
      return W.translate = i.value - W.index * o.value, W.translate;
    }
    function N() {
      const W = [], ae = [], Ee = [];
      return r.value.forEach(({ column: Ue, index: nn }) => {
        const Xe = Ue[nn];
        W.push(w(Xe)), ae.push(nn), Ee.push(Xe);
      }), {
        values: W,
        indexes: ae,
        options: Ee
      };
    }
    function M(W, ae = 0) {
      B(W), W.duration = ae;
    }
    function D(W, ae, Ee) {
      W.translate += Math.abs(ae / Ee) / 3e-3 * (ae < 0 ? -1 : 1);
    }
    function j(W, ae) {
      d.value || (W.index = ae, M(W, bv));
    }
    function K(W, ae) {
      ae.touching = !0, ae.translate = Rl(ae.scrollEl), c(W);
    }
    function G(W, ae) {
      if (!ae.touching) return;
      f(W), ae.scrolling = !1, ae.duration = 0, ae.prevY = s.value, ae.translate += u.value, I(ae);
      const Ee = performance.now();
      Ee - ae.momentumTime > hv && (ae.momentumTime = Ee, ae.momentumPrevY = ae.translate);
    }
    function ce(W) {
      v(), W.touching = !1, W.prevY = 0;
      const ae = W.translate - W.momentumPrevY, Ee = performance.now() - W.momentumTime, Ue = Math.abs(ae) >= I6 && Ee <= hv, nn = W.translate;
      Ue && D(W, ae, Ee), W.index = E(W, W.translate), M(W, Ue ? M6 : bv), W.scrolling = W.translate !== nn, W.scrolling || Q(W);
    }
    function ge(W) {
      W.scrolling = !1, Q(W);
    }
    function de() {
      const { indexes: W } = N();
      return W.every((ae, Ee) => ae === h[Ee]);
    }
    function Q(W) {
      const { onChange: ae, cascade: Ee } = e;
      if (de()) return;
      Ee && P(W);
      const Ue = r.value.some((ye) => ye.scrolling), nn = r.value.some((ye) => ye.touching);
      if (Ue || nn) return;
      const { values: Xe, indexes: en, options: on } = N();
      $(en), C(ae, Xe, en, on), n.value = Xe;
    }
    function ne() {
      if (e.cascade) {
        const W = r.value.find((ae) => ae.scrolling);
        W && (W.index = E(W, Rl(W.scrollEl)), W.scrolling = !1, M(W), P(W));
      } else r.value.forEach((W) => {
        W.index = E(W, Rl(W.scrollEl)), M(W);
      });
    }
    function pe() {
      ne();
      const { values: W, indexes: ae, options: Ee } = N();
      $(ae), C(e.onConfirm, W, ae, Ee);
    }
    function $e() {
      ne();
      const { values: W, indexes: ae, options: Ee } = N();
      $(ae), C(e.onCancel, W, ae, Ee);
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
      n: B6,
      classes: D6,
      setScrollEl: H,
      getOptionKey: m,
      getValue: w,
      handlePopupUpdateShow: A,
      handleTouchstart: K,
      handleTouchmove: G,
      handleTouchend: ce,
      handleTransitionend: ge,
      confirm: pe,
      cancel: $e,
      handleClick: j
    };
  }
});
Xh.render = V6;
var Ko = Xh, Rt;
function eo(e) {
  return new Promise((n) => {
    eo.close();
    const r = Ke(e) ? { columns: e } : e, t = $n(r);
    t.dynamic = !0, t.teleport = "body", Rt = t;
    function o() {
      Rt === t && (Rt = null);
    }
    const { unmountInstance: a } = Qt(Ko, t, {
      onConfirm: (i, l, s) => {
        C(t.onConfirm, i, l, s), n({
          state: "confirm",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, o();
      },
      onCancel: (i, l, s) => {
        C(t.onCancel, i, l, s), n({
          state: "cancel",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, o();
      },
      onClose: () => {
        C(t.onClose), n({ state: "close" }), o();
      },
      onClosed: () => {
        C(t.onClosed), a(), o();
      },
      onRouteChange: () => {
        a(), o();
      },
      "onUpdate:show": (i) => {
        t.show = i;
      }
    });
    t.show = !0;
  });
}
eo.close = function() {
  if (Rt == null) return;
  const e = Rt;
  Rt = null, Ne().then(() => {
    e.show = !1;
  });
};
eo.Component = Ko;
ue(Ko);
ue(Ko, eo);
fe(eo, qh);
var HN = Ko, tu = eo, Gh = {
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
}, Mt = 100, oa = 0, bt = 20, wv = 2 * Math.PI * bt, { name: L6, n: F6, classes: H6 } = oe("progress"), U6 = ["aria-valuenow"], j6 = ["viewBox"], Y6 = { key: 0 }, W6 = ["id"], K6 = ["offset", "stop-color"], q6 = [
  "d",
  "stroke-width",
  "stroke-dasharray"
], X6 = [
  "d",
  "stroke-width",
  "stroke-dasharray",
  "stroke-dashoffset"
];
function G6(e, n) {
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
    style: J({
      height: e.toSizeUnit(e.lineWidth),
      background: e.trackColor
    })
  }, [e.indeterminate ? (b(), k("div", {
    key: 0,
    class: p(e.n("linear-indeterminate"))
  }, [L("div", {
    class: p(e.classes(e.n(`linear--${e.type}`))),
    style: J({ background: e.progressColor })
  }, null, 6), L("div", {
    class: p(e.classes(e.n(`linear--${e.type}`))),
    style: J({ background: e.progressColor })
  }, null, 6)], 2)) : (b(), k("div", {
    key: 1,
    class: p(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`))),
    style: J({
      background: e.progressColor,
      width: e.linearProps.width
    })
  }, null, 6))], 6), e.label ? (b(), k("div", {
    key: 0,
    class: p(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
  }, [F(e.$slots, "default", {}, () => [Le(ve(e.linearProps.roundValue), 1)])], 2)) : X("v-if", !0)], 2)) : X("v-if", !0), e.mode === "circle" ? (b(), k("div", {
    key: 1,
    class: p(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
    style: J({
      width: e.toSizeUnit(e.size),
      height: e.toSizeUnit(e.size)
    })
  }, [(b(), k("svg", {
    class: p(e.n("circle-svg")),
    viewBox: e.circleProps.viewBox
  }, [
    e.isPlainObject(e.color) ? (b(), k("defs", Y6, [L("linearGradient", {
      id: e.id,
      x1: "100%",
      y1: "0%",
      x2: "0%",
      y2: "0%"
    }, [(b(!0), k(De, null, Ye(e.linearGradientProgress, (r, t) => (b(), k("stop", {
      key: t,
      offset: r,
      "stop-color": e.color[r]
    }, null, 8, K6))), 128))], 8, W6)])) : X("v-if", !0),
    e.track ? (b(), k("path", {
      key: 1,
      class: p(e.n("circle-background")),
      d: e.circleProps.path,
      fill: "transparent",
      "stroke-width": e.circleProps.strokeWidth,
      "stroke-dasharray": e.CIRCUMFERENCE,
      style: J({ stroke: e.trackColor })
    }, null, 14, q6)) : X("v-if", !0),
    L("path", {
      class: p(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
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
    }, null, 14, X6)
  ], 10, j6)), e.label ? (b(), k("div", {
    key: 0,
    class: p(e.classes(e.n("circle-label"), e.labelClass))
  }, [F(e.$slots, "default", {}, () => [Le(ve(e.circleProps.roundValue), 1)])], 2)) : X("v-if", !0)], 6)) : X("v-if", !0)], 10, U6);
}
var Zh = te({
  name: L6,
  props: Gh,
  setup(e) {
    const n = np(), r = S(() => {
      const i = Z(e.value), l = hn(i, oa, Mt), s = hn(Math.round(i), oa, Mt);
      return {
        width: `${l}%`,
        roundValue: `${s}%`,
        value: l
      };
    }), t = S(() => {
      const { size: i, lineWidth: l, value: s } = e, u = bt / (1 - fn(l) / fn(i)) * 2, d = `0 0 ${u} ${u}`, c = hn(Math.round(Z(s)), oa, Mt), f = `${(Mt - c) / Mt * wv}`, v = fn(l) / fn(i) * u, g = `M ${u / 2} ${u / 2} m 0 -20 a ${bt} ${bt} 
        0 1 1 0 40 a ${bt} ${bt} 0 1 1 0 -40`;
      return {
        strokeWidth: v,
        viewBox: d,
        strokeOffset: f,
        roundValue: `${c}%`,
        path: g,
        value: hn(Z(s), oa, Mt)
      };
    }), o = S(() => Sn(e.color) ? `url(#${n.value})` : e.color), a = S(() => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l)));
    return {
      id: n,
      linearProps: r,
      CIRCUMFERENCE: wv,
      RADIUS: bt,
      circleProps: t,
      progressColor: o,
      linearGradientProgress: a,
      n: F6,
      classes: H6,
      toSizeUnit: Te,
      isPlainObject: Sn
    };
  }
});
Zh.render = G6;
var nl = Zh;
ue(nl);
fe(nl, Gh);
var UN = nl, ou = nl, Jh = {
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
}, Z6 = (e, n, r) => new Promise((t, o) => {
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
}), { name: J6, n: kv, classes: Q6 } = oe("pull-refresh"), $v = 150;
function x6(e, n) {
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
    style: J(e.controlStyle)
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
var Qh = te({
  name: J6,
  components: { VarIcon: Je },
  props: Jh,
  setup(e) {
    const n = O(0), r = O(null), t = O(null), o = O(0), a = O("-125%"), i = O("arrow-down"), l = O("default"), s = O(!1), u = S(() => Math.abs(2 * n.value)), d = S(() => l.value === "success"), c = S(() => l.value !== "loading" && l.value !== "success" && !e.disabled), f = S(() => ({
      transform: `translate3d(0px, ${Pn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: d.value ? e.successBgColor : e.bgColor,
      color: d.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: g, endTouch: h, isReachTop: m } = Jt();
    let w, $;
    me(() => e.modelValue, (I) => {
      I === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
        a.value = n.value, A();
      }, Z(e.successDuration)));
    }), On(H), xe(r, "touchmove", P);
    function y(I) {
      if (i.value !== I)
        return i.value = I, new Promise((E) => {
          window.setTimeout(E, $v);
        });
    }
    function z(I) {
      ("classList" in w ? w : document.body).classList[I](`${kv()}--lock`);
    }
    function T(I) {
      if (v(I), n.value === 0) {
        const { width: E } = kn(t.value);
        n.value = -(E + E * 0.25);
      }
      $ = ut(I.target);
    }
    function P(I) {
      if (g(I), !c.value || !$ || $ !== w && kt($) > 0 || kt(w) > 0) return;
      m(w) && Ze(I), l.value !== "pulling" && (l.value = "pulling", o.value = I.touches[0].clientY), m(w) && tr(a.value) && a.value > n.value && z("add");
      const E = (I.touches[0].clientY - o.value) / 2 + n.value;
      a.value = E >= u.value ? u.value : E, y(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function R() {
      return Z6(this, null, function* () {
        h(), c.value && (s.value = !0, Z(a.value) >= u.value * 0.2 ? (yield y("refresh"), l.value = "loading", a.value = u.value * 0.3, C(e["onUpdate:modelValue"], !0), Ne(() => {
          C(e.onRefresh);
        }), z("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, z("remove");
        }, Z(e.animationDuration))), $ = null);
      });
    }
    function H() {
      w = e.target ? Op(e.target, "PullRefresh") : ut(r.value);
    }
    function A() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, Z(e.animationDuration));
    }
    return {
      ICON_TRANSITION: $v,
      refreshStatus: l,
      freshNode: r,
      controlNode: t,
      iconName: i,
      controlStyle: f,
      isSuccess: d,
      n: kv,
      classes: Q6,
      handleTouchstart: T,
      handleTouchmove: P,
      handleTouchend: R
    };
  }
});
Qh.render = x6;
var rl = Qh;
ue(rl);
fe(rl, Jh);
var jN = rl, au = rl, xh = {
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
}, { name: _6, n: e8, classes: n8 } = oe("radio-group"), r8 = ["aria-label"];
function t8(e, n) {
  const r = x("maybe-v-node"), t = x("var-radio"), o = x("var-form-details");
  return b(), k("div", { class: p(e.n("wrap")) }, [L("div", {
    "aria-label": e.ariaLabel,
    role: "radiogroup",
    class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
  }, [e.options.length ? (b(!0), k(De, { key: 0 }, Ye(e.options, (a) => (b(), ke(t, {
    key: a[e.valueKey],
    "checked-value": a[e.valueKey],
    disabled: a.disabled
  }, {
    default: se(({ checked: i }) => [U(r, { is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey] }, null, 8, ["is"])]),
    _: 2
  }, 1032, ["checked-value", "disabled"]))), 128)) : X("v-if", !0), F(e.$slots, "default")], 10, r8), U(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var _h = te({
  name: _6,
  components: {
    VarFormDetails: Hn,
    VarRadio: Co,
    MaybeVNode: lr
  },
  props: xh,
  setup(e) {
    const { length: n, radios: r, bindRadios: t } = CP(), { bindForm: o } = Wn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = xn(), u = S(() => a.value), d = O(!1), c = {
      onToggle: m,
      validate: w,
      reset: $,
      resetValidation: s,
      hasChecked: S(() => d.value),
      errorMessage: u
    };
    me(() => e.modelValue, h), me(() => n.value, h), C(o, c), t(c), xe(() => window, "keydown", f);
    function f(y) {
      const z = r.findIndex(({ isFocusing: T }) => T.value);
      if (z !== -1 && r.some(({ moveable: T }, P) => P === z ? !1 : T())) {
        if ([
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight"
        ].includes(y.key) && Ze(y), y.key === "ArrowUp" || y.key === "ArrowLeft") {
          v(z, "prev");
          return;
        }
        (y.key === "ArrowDown" || y.key === "ArrowRight") && v(z, "next");
      }
    }
    function v(y, z) {
      for (; ; ) {
        z === "prev" ? y-- : y++, y < 0 && (y = r.length - 1), y > r.length - 1 && (y = 0);
        const P = r[y];
        if (P.moveable()) {
          P.move();
          break;
        }
      }
    }
    function g(y) {
      Ne(() => {
        const { validateTrigger: z, rules: T, modelValue: P } = e;
        i(z, y, T, P);
      });
    }
    function h() {
      r.forEach(({ sync: y }) => {
        y(e.modelValue) && (d.value = !0);
      });
    }
    function m(y) {
      C(e["onUpdate:modelValue"], y), C(e.onChange, y), g("onChange");
    }
    function w() {
      return l(e.rules, e.modelValue);
    }
    function $() {
      C(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: e8,
      classes: n8,
      reset: $,
      validate: w,
      resetValidation: s,
      isFunction: Yn
    };
  }
});
_h.render = t8;
var tl = _h;
ue(tl);
fe(tl, xh);
var YN = tl, iu = tl, eb = {
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
}, nb = /* @__PURE__ */ Symbol("RAIL_NAVIGATION_BIND_RAIL_NAVIGATION_ITEM_KEY");
function o8() {
  const { bindChildren: e } = Dn(nb);
  return { bindRailNavigationItem: e };
}
var { name: a8, n: i8, classes: l8 } = oe("rail-navigation");
function s8(e, n) {
  return b(), k("aside", qe({ class: e.classes(e.n(), e.n("$--box"), [e.bordered, e.n("--border")]) }, e.$attrs), [
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
var rb = te({
  name: a8,
  props: eb,
  setup(e) {
    const n = S(() => e.active), r = S(() => e.ripple), t = S(() => e.showLabel), { bindRailNavigationItem: o } = o8();
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
      n: i8,
      classes: l8
    };
  }
});
rb.render = s8;
var ol = rb;
ue(ol);
fe(ol, eb);
var WN = ol, lu = ol, tb = {
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
function u8() {
  const { parentProvider: e, index: n, bindParent: r } = Bn(nb);
  return or(!!r, "RailNavigationItem", "<var-rail-navigation-item/> must in <var-rail-navigation/>"), {
    index: n,
    railNavigation: e,
    bindRailNavigation: r
  };
}
var d8 = (e, n, r) => new Promise((t, o) => {
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
}), { name: c8, n: f8, classes: v8 } = oe("rail-navigation-item"), p8 = {
  type: "primary",
  dot: !0
}, m8 = ["aria-disabled"];
function g8(e, n) {
  const r = x("var-icon"), t = x("var-badge"), o = _e("ripple");
  return We((b(), k("div", {
    class: p(e.classes(e.n(), [e.isActive, e.n("--active")], [e.disabled, e.n("--disabled")], [e.ripple && !e.disabled, e.n("--ripple-enabled")], [!e.showLabel, e.n("--icon-only")])),
    style: J({ "--rail-navigation-item-transition-duration-override": e.allowTransition && !e.ripple ? void 0 : "0ms" }),
    "aria-disabled": e.disabled,
    role: "button",
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a)),
    onMouseenter: n[1] || (n[1] = (...a) => e.handleMouseenter && e.handleMouseenter(...a)),
    onMouseleave: n[2] || (n[2] = (...a) => e.handleMouseleave && e.handleMouseleave(...a))
  }, [e.$slots.icon || e.icon ? (b(), k("span", {
    key: 0,
    class: p(e.n("indicator"))
  }, [e.badge ? (b(), ke(t, qe({ key: 0 }, e.badgeProps, {
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
  }, [F(e.$slots, "default", { active: e.isActive }, () => [Le(ve(e.label), 1)])], 2)) : X("v-if", !0)], 46, m8)), [[o, { disabled: !e.ripple || e.disabled }]]);
}
var ob = te({
  name: c8,
  components: {
    VarBadge: $o,
    VarIcon: Je
  },
  directives: { Ripple: vn },
  props: tb,
  setup(e) {
    const { index: n, railNavigation: r, bindRailNavigation: t } = u8(), { active: o, ripple: a, showLabel: i, onToggle: l } = r, s = S(() => {
      var h;
      return (h = e.name) != null ? h : n.value;
    }), u = S(() => o.value === s.value), d = S(() => e.badge === !0 ? p8 : e.badge), c = O(!1);
    t(null), Tr(() => d8(null, null, function* () {
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
      n: f8,
      classes: v8,
      handleClick: f,
      handleMouseenter: v,
      handleMouseleave: g
    };
  }
});
ob.render = g8;
var al = ob;
ue(al);
fe(al, tb);
var KN = al, su = al, ab = {
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
}, { name: h8, n: oo } = oe("rate"), b8 = ["onClick"];
function y8(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), o = x("var-form-details"), a = _e("ripple"), i = _e("hover");
  return b(), k("div", { class: p(e.n("wrap")) }, [L("div", { class: p(e.n()) }, [(b(!0), k(De, null, Ye(e.toNumber(e.count), (l) => We((b(), k("div", {
    key: l,
    style: J(e.getStyle(l)),
    class: p(e.getClass(l)),
    onClick: (s) => e.handleClick(l, s)
  }, [L("span", {
    class: p(e.n("content-icon")),
    style: J({ fontSize: e.toSizeUnit(e.size) })
  }, [F(e.$slots, e.getCurrentState(l).slot, {}, () => [U(r, {
    transition: 0,
    namespace: e.getCurrentState(l).namespace,
    name: e.getCurrentState(l).name
  }, null, 8, ["namespace", "name"])])], 6), U(t, { hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled }, null, 8, ["hovering"])], 14, b8)), [[a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    i,
    e.createHoverHandler(l),
    "desktop"
  ]])), 128))], 2), U(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var ib = te({
  name: h8,
  components: {
    VarIcon: Je,
    VarFormDetails: Hn,
    VarHoverOverlay: Zn
  },
  directives: {
    Ripple: vn,
    Hover: jn
  },
  props: ab,
  setup(e) {
    const n = O(-1), { form: r, bindForm: t } = Wn(), { errorMessage: o, validateWithTrigger: a, validate: i, resetValidation: l } = xn(), { hovering: s } = ur();
    let u = Z(e.modelValue);
    C(t, {
      reset: $,
      validate: g,
      resetValidation: l
    });
    function d(y) {
      const { count: z, gap: T } = e;
      return {
        color: f(y).color,
        marginRight: y !== Z(z) ? Te(T) : 0
      };
    }
    function c(y) {
      const { name: z, color: T } = f(y);
      return {
        [oo("content")]: !0,
        [oo("--disabled")]: r?.disabled.value || e.disabled,
        [oo("--error")]: o.value,
        [oo("--primary")]: z !== e.emptyIcon && !T
      };
    }
    function f(y) {
      const { modelValue: z, disabled: T, disabledColor: P, color: R, half: H, emptyColor: A, icon: I, halfIcon: E, emptyIcon: B, namespace: N, halfIconNamespace: M, emptyIconNamespace: D } = e;
      let j = R;
      return (T || r?.disabled.value) && (j = P), y <= z ? {
        color: j,
        name: I,
        namespace: N,
        slot: "icon"
      } : H && y <= z + 0.5 ? {
        color: j,
        name: E,
        namespace: M,
        slot: "half-icon"
      } : {
        color: T || r?.disabled.value ? P : A,
        name: B,
        namespace: D,
        slot: "empty-icon"
      };
    }
    function v(y, z) {
      const { half: T, clearable: P } = e, { offsetWidth: R } = z.target;
      T && z.offsetX <= Math.floor(R / 2) && (y -= 0.5), u === y && P && (y = 0), u !== y && (C(e["onUpdate:modelValue"], y), C(e.onChange, y)), u = y;
    }
    function g() {
      return i(e.rules, e.modelValue);
    }
    function h() {
      Ne(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function m(y, z) {
      const { readonly: T, disabled: P } = e;
      T || P || r?.disabled.value || r?.readonly.value || (v(y, z), h());
    }
    function w(y) {
      return (z) => {
        n.value = y, s.value = z;
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
      createHoverHandler: w,
      reset: $,
      validate: g,
      resetValidation: l,
      toSizeUnit: Te,
      toNumber: Z,
      n: oo
    };
  }
});
ib.render = y8;
var il = ib;
ue(il);
fe(il, ab);
var qN = il, uu = il, lb = {
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
}, w8 = { viewBox: "-4 -4 32 32" };
function k8(e, n) {
  return b(), k("svg", w8, [...n[0] || (n[0] = [L("path", {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  }, null, -1)])]);
}
var sb = te({});
sb.render = k8;
var $8 = sb, S8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
};
function C8(e, n) {
  return b(), k("svg", S8, [...n[0] || (n[0] = [L("path", { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" }, null, -1)])]);
}
var ub = te({});
ub.render = C8;
var P8 = ub, O8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
};
function z8(e, n) {
  return b(), k("svg", O8, [...n[0] || (n[0] = [L("path", { d: "M11,9H13V7H11M11,20H13V11H11V20Z" }, null, -1)])]);
}
var db = te({});
db.render = z8;
var T8 = db, E8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
};
function B8(e, n) {
  return b(), k("svg", E8, [...n[0] || (n[0] = [L("path", { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" }, null, -1)])]);
}
var cb = te({});
cb.render = B8;
var D8 = cb, { n: I8, classes: M8 } = oe("result");
function A8(e, n) {
  return b(), k(De, null, [
    L("span", { class: p(e.n("success-cover-left")) }, null, 2),
    L("span", {
      class: p(e.classes(e.n("success-line"), e.n("success-line-tip"))),
      style: J({
        animationDuration: e.animation ? "760ms" : "0ms",
        borderRadius: `calc(${e.borderSize} * 0.625)`
      })
    }, null, 6),
    L("span", {
      class: p(e.classes(e.n("success-line"), e.n("success-line-long"))),
      style: J({
        animationDuration: e.animation ? "770ms" : "0ms",
        borderRadius: `calc(${e.borderSize} * 0.625)`
      })
    }, null, 6),
    L("span", {
      ref: "circle",
      class: p(e.n("success-circle")),
      style: J({
        left: `-${e.borderSize}`,
        top: `-${e.borderSize}`,
        borderWidth: e.borderSize
      })
    }, null, 6),
    L("span", { class: p(e.n("success-line-fix")) }, null, 2),
    L("span", {
      class: p(e.n("success-cover-right")),
      style: J({ animationDuration: e.animation ? "4250ms" : "0ms" })
    }, null, 6)
  ], 64);
}
var fb = te({
  props: {
    animation: { type: Boolean },
    borderSize: { type: String }
  },
  setup() {
    return {
      n: I8,
      classes: M8
    };
  }
});
fb.render = A8;
var N8 = fb, R8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
};
function V8(e, n) {
  return b(), k("svg", R8, [...n[0] || (n[0] = [L("path", { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" }, null, -1)])]);
}
var vb = te({});
vb.render = V8;
var L8 = vb, { name: F8, n: H8, classes: U8 } = oe("result");
function j8(e, n) {
  return b(), k("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [
    F(e.$slots, "image", {}, () => [e.type ? (b(), k("div", {
      key: 0,
      class: p(e.n("image-container"))
    }, [L("div", {
      class: p(e.classes(e.n("image"), e.n(e.type))),
      style: J({
        width: e.circleSize,
        height: e.circleSize,
        borderWidth: e.borderSize
      })
    }, [(b(), ke(Gt(e.type), {
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
var pb = te({
  name: F8,
  components: {
    Info: T8,
    Success: N8,
    Warning: L8,
    Error: P8,
    Question: D8,
    Empty: $8
  },
  props: lb,
  setup(e) {
    return {
      circleSize: S(() => `calc(${e.imageSize ? Te(e.imageSize) : "var(--result-image-size)"} * 0.9)`),
      borderSize: S(() => `calc(${e.imageSize ? Te(e.imageSize) : "var(--result-image-size)"} * 0.05)`),
      n: H8,
      classes: U8
    };
  }
});
pb.render = j8;
var ll = pb;
ue(ll);
fe(ll, lb);
var XN = ll, du = ll, mb = {
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
}, { name: Y8, n: W8, classes: K8 } = oe("row");
function q8(e, n) {
  return b(), k("div", {
    class: p(e.classes(e.n(), e.n("$--box"))),
    style: J({
      justifyContent: e.padStartFlex(e.justify),
      alignItems: e.padStartFlex(e.align),
      margin: `${-e.average[0]}px ${-e.average[1]}px`
    }),
    onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [F(e.$slots, "default")], 6);
}
var gb = te({
  name: Y8,
  props: mb,
  setup(e) {
    const n = S(() => Ke(e.gutter) ? e.gutter.map((o) => fn(o) / 2) : [0, fn(e.gutter) / 2]), { bindCols: r } = QC();
    r({ average: n });
    function t(o) {
      C(e.onClick, o);
    }
    return {
      average: n,
      n: W8,
      classes: K8,
      handleClick: t,
      padStartFlex: ba
    };
  }
});
gb.render = q8;
var sl = gb;
ue(sl);
fe(sl, mb);
var GN = sl, cu = sl, hb = {
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
}, bb = /* @__PURE__ */ Symbol("SEGMENTED_BUTTONS_BIND_BUTTON_KEY");
function X8() {
  const { bindChildren: e, childProviders: n, length: r } = Dn(bb);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function G8() {
  const { bindParent: e, parentProvider: n } = Bn(bb);
  return or(!!e, "SegmentedButton", "<var-segmented-button/> must in <var-segmented-buttons/>"), {
    segmentedButtons: n,
    bindSegmentedButtons: e
  };
}
var { name: Z8, n: J8, classes: Q8 } = oe("segmented-button"), x8 = [
  "role",
  "aria-checked",
  "aria-disabled",
  "disabled",
  "tabindex"
];
function _8(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), o = _e("ripple"), a = _e("hover");
  return We((b(), k("button", {
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
  }, null, 8, ["hovering", "focusing"])], 42, x8)), [[o, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    a,
    e.handleHovering,
    "desktop"
  ]]);
}
var yb = te({
  name: Z8,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarHoverOverlay: Zn,
    VarIcon: Je
  },
  props: hb,
  setup(e) {
    const n = O(), r = O(!1), t = O(!1), { segmentedButtons: o, bindSegmentedButtons: a } = G8(), { hovering: i, handleHovering: l } = ur(), { form: s } = Wn();
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
      const g = Ke(v) ? v.includes(e.checkedValue) : v === e.checkedValue;
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
      n: J8,
      classes: Q8,
      handleHovering: l,
      handleClick: u,
      toggle: d
    };
  }
});
yb.render = _8;
var ul = yb;
ue(ul);
fe(ul, hb);
var ZN = ul, Ma = ul, wb = {
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
}, { name: eT, n: nT, classes: rT } = oe("segmented-buttons"), tT = ["role"];
function oT(e, n) {
  const r = x("maybe-v-node"), t = x("var-segmented-button"), o = x("var-form-details");
  return b(), k("div", { class: p(e.n("wrap")) }, [L("div", {
    role: e.multiple ? "group" : "radiogroup",
    class: p([e.n(), e.hasError ? e.n("--error") : null])
  }, [e.options.length ? (b(!0), k(De, { key: 0 }, Ye(e.options, (a) => (b(), ke(t, {
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
  ]))), 128)) : X("v-if", !0), F(e.$slots, "default")], 10, tT), U(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var kb = te({
  name: eT,
  components: {
    VarFormDetails: Hn,
    VarSegmentedButton: Ma,
    MaybeVNode: lr
  },
  props: wb,
  setup(e) {
    const { length: n, buttons: r, bindButtons: t } = X8(), { bindForm: o } = Wn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = xn(), u = {
      multiple: S(() => e.multiple),
      checkmark: S(() => e.checkmark),
      size: S(() => e.size),
      onClick: y
    }, d = {
      validate: R,
      reset: H,
      resetValidation: s
    };
    me(() => e.modelValue, z), me(() => n.value, z), t(u), C(o, d), xe(() => window, "keydown", h), xe(() => window, "keyup", m);
    function c() {
      return e.multiple ? Ke(e.modelValue) ? e.modelValue : [] : e.modelValue;
    }
    function f(A) {
      const I = c();
      return Ke(I) ? I.includes(A) : I === A;
    }
    function v(A) {
      return ir(A[e.labelKey], A, f(g(A)));
    }
    function g(A) {
      return A[e.valueKey];
    }
    function h(A) {
      const I = r.findIndex(({ isFocusing: E }) => E.value);
      if (I !== -1 && r.some(({ disabled: E }, B) => B === I ? !1 : !E.value)) {
        if (["ArrowLeft", "ArrowRight"].includes(A.key) && A.preventDefault(), (A.key === "Enter" || A.key === " ") && A.preventDefault(), A.key === "ArrowLeft") {
          w(I, "prev");
          return;
        }
        if (A.key === "ArrowRight") {
          w(I, "next");
          return;
        }
        A.key === "Enter" && r[I].toggle();
      }
    }
    function m(A) {
      const I = r.findIndex(({ isFocusing: E }) => E.value);
      I !== -1 && A.key === " " && (A.preventDefault(), r[I].toggle());
    }
    function w(A, I) {
      for (; ; ) {
        A += I === "prev" ? -1 : 1, A < 0 && (A = r.length - 1), A > r.length - 1 && (A = 0);
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
    function y(A, I) {
      if ($("onClick"), !e.multiple) {
        if (I) return;
        T(A);
        return;
      }
      const E = c();
      if (I) {
        T(E.filter((B) => B !== A));
        return;
      }
      T([...E, A]);
    }
    function z() {
      const A = c();
      r.forEach(({ sync: I }) => I(A));
    }
    function T(A) {
      C(e["onUpdate:modelValue"], A), C(e.onChange, A), $("onChange");
    }
    const P = S(() => !!a.value);
    function R() {
      return l(e.rules, c());
    }
    function H() {
      C(e["onUpdate:modelValue"], e.multiple ? [] : void 0), s();
    }
    return {
      errorMessage: a,
      n: nT,
      classes: rT,
      renderOptionLabel: v,
      getOptionValue: g,
      hasError: P,
      validate: R,
      reset: H,
      resetValidation: s
    };
  }
});
kb.render = oT;
var dl = kb;
ue(dl);
fe(dl, wb);
var JN = dl, fu = dl, aT = Object.defineProperty, Sv = Object.getOwnPropertySymbols, iT = Object.prototype.hasOwnProperty, lT = Object.prototype.propertyIsEnumerable, Cv = (e, n, r) => n in e ? aT(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, sT = (e, n) => {
  for (var r in n || (n = {})) iT.call(n, r) && Cv(e, r, n[r]);
  if (Sv)
    for (var r of Sv(n)) lT.call(n, r) && Cv(e, r, n[r]);
  return e;
}, $b = sT({
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
  menuRadius: {
    type: String,
    default: "normal"
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
])), { n: uT, classes: dT } = oe("select");
function cT(e, n) {
  return We((b(), k("input", {
    ref: "filterInputRef",
    "onUpdate:modelValue": n[0] || (n[0] = (r) => e.value = r),
    type: "text",
    class: p(e.classes(e.n("filter"), [e.multiple, e.n("filter--multiple")]))
  }, null, 2)), [[Zv, e.value]]);
}
var Sb = te({
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
    const n = O(), r = S({
      get: () => e.modelValue,
      set: (a) => C(e["onUpdate:modelValue"], a)
    });
    return {
      n: uT,
      classes: dT,
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
Sb.render = cT;
var fT = Sb, Pv = (e, n, r) => new Promise((t, o) => {
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
function vT(e, n, r) {
  const t = O(!1);
  let o = null;
  me(() => n.value, () => Pv(null, null, function* () {
    l(), n.value && (yield Ne(), i(), a());
  }), { immediate: !0 }), Zt(l);
  function a() {
    var s;
    const u = e.value, d = u?.querySelectorAll(".var-option");
    t.value = d?.length ? Array.from(d).every((c) => Ur(c).display === "none") : !0, (s = r?.onAfterUpdate) == null || s.call(r);
  }
  function i() {
    e.value && (o = new MutationObserver(() => Pv(null, null, function* () {
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
var pT = 11;
function mT(e) {
  const n = Gv(), r = O(0), t = S(() => ({ minWidth: `${Math.max(r.value, pT)}px` })), o = () => {
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
var gT = Object.defineProperty, hT = Object.defineProperties, bT = Object.getOwnPropertyDescriptors, Ov = Object.getOwnPropertySymbols, yT = Object.prototype.hasOwnProperty, wT = Object.prototype.propertyIsEnumerable, zv = (e, n, r) => n in e ? gT(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, kT = (e, n) => {
  for (var r in n || (n = {})) yT.call(n, r) && zv(e, r, n[r]);
  if (Ov)
    for (var r of Ov(n)) wT.call(n, r) && zv(e, r, n[r]);
  return e;
}, $T = (e, n) => hT(e, bT(n)), ST = (e, n, r) => new Promise((t, o) => {
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
}), { name: CT, n: PT, classes: OT } = oe("select"), zT = ["tabindex"];
function TT(e, n) {
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
    radius: e.menuRadius,
    disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
    placement: e.placement,
    "default-style": !1,
    onClickOutside: e.handleClickOutside
  }, {
    menu: se(() => [L("div", {
      ref: "menuEl",
      class: p(e.classes(e.n("scroller"), e.n("$--scrollbar"), e.n("$-elevation--3"), [e.menuRadius !== "normal", e.n(`--menu-radius-${e.menuRadius}`)]))
    }, [
      e.showEmpty ? F(e.$slots, "empty", { key: 0 }, () => [L("div", { class: p(e.n("empty")) }, ve((e.pt ? e.pt : e.t)("selectEmptyText")), 3)]) : X("v-if", !0),
      e.options.length ? (b(!0), k(De, { key: 1 }, Ye(e.options, (d) => (b(), ke(l, {
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
        style: J({
          textAlign: e.textAlign,
          color: e.textColor
        })
      }, [
        L("div", { class: p(e.classes(e.n("label"), [e.filterable && e.showMenu, e.n("--label-focusing")])) }, [e.isShowSelected() ? F(e.$slots, "selected", { key: 0 }, () => [e.multiple ? (b(), k(De, { key: 0 }, [e.chip ? (b(), k("div", {
          key: 0,
          class: p(e.n("chips"))
        }, [(b(!0), k(De, null, Ye(e.labels, (d) => (b(), ke(t, {
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
        ])) : X("v-if", !0)], 2)) : (b(), k("div", {
          key: 1,
          class: p(e.n("values"))
        }, [(b(!0), k(De, null, Ye(e.labels, (d, c) => (b(), k(De, { key: d }, [U(r, { is: d }, null, 8, ["is"]), Le(ve(c !== e.labels.length - 1 ? e.separator : ""), 1)], 64))), 128)), e.isShowMultipleFilter() ? (b(), ke(o, {
          key: 0,
          ref: "filterRef",
          modelValue: e.pattern,
          "onUpdate:modelValue": n[2] || (n[2] = (d) => e.pattern = d),
          style: J($T(kT({}, e.filterStyle), { paddingLeft: e.labels.length ? "4px" : 0 })),
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
          style: J({ color: e.placeholderColor })
        }, ve(e.placeholder), 7)) : X("v-if", !0),
        e.isShowSingleFilter() ? (b(), ke(o, {
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
    "radius",
    "disabled",
    "placement",
    "onClickOutside"
  ]), U(u, {
    "error-message": e.errorMessage,
    onClick: n[5] || (n[5] = Nn(() => {
    }, ["stop"]))
  }, null, 8, ["error-message"])], 42, zT);
}
var Cb = te({
  name: CT,
  components: {
    VarIcon: Je,
    VarMenu: Yt,
    VarChip: $a,
    VarOption: Ia,
    VarFieldDecorator: bo,
    VarFormDetails: Hn,
    VarSelectFilter: fT,
    MaybeVNode: lr
  },
  props: $b,
  setup(e) {
    var n;
    const r = O(!1), t = O(!1), o = O(null), a = O(null), i = O(""), l = O(!1), s = S(() => e.filterable), u = S(() => e.multiple), d = S(() => e.focusColor), c = S(() => Or(e.modelValue)), f = S(() => e.disabled || e.readonly ? "" : "pointer"), { bindForm: v, form: g } = Wn(), { length: h, options: m, bindOptions: w } = n6(), { label: $, labels: y, computeLabel: z, getSelectedValue: T } = om({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => m,
      optionProvidersLength: () => h.value
    }), { errorMessage: P, validateWithTrigger: R, validate: H, resetValidation: A } = xn(), I = S(() => g?.readonly.value || e.readonly), E = S(() => g?.disabled.value || e.disabled), B = O(null), N = O(null), M = S(() => e.variant === "standard" && !e.filterable ? "cover-top" : "bottom"), { t: D } = kr(), j = O(0), K = S({
      get() {
        return j.value + (M.value === "bottom" ? 2 : 0);
      },
      set(Re) {
        j.value = Re;
      }
    }), G = S(() => {
      const { hint: Re, blurColor: sn, focusColor: _ } = e;
      if (!Re)
        return P.value ? "var(--field-decorator-error-color)" : r.value ? _ || "var(--field-decorator-focus-color)" : sn || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), ce = S(() => !e.hint && Or(e.modelValue)), ge = S(() => {
      var Re;
      if (!E.value)
        return s.value && r.value ? "-1" : (Re = e.tabindex) != null ? Re : "0";
    }), { calculatorRef: de, filterStyle: Q } = mT(i), ne = {
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
    }, { showEmpty: pe } = vT(B, t, { onAfterUpdate: () => {
      var Re;
      return (Re = N.value) == null ? void 0 : Re.resize();
    } });
    let $e = !1;
    me(() => e.multiple, () => {
      or(e.multiple && Ke(e.modelValue), "Select", "The modelValue must be an array when multiple is true");
    }), me(t, (Re) => {
      Re && Ne(Ue);
    }), w(ne), xe(() => window, "keydown", nn), xe(() => window, "keyup", Xe), C(v, ne);
    function W() {
      return s.value && !I.value && !E.value && !u.value;
    }
    function ae() {
      return s.value && !I.value && !E.value && u.value;
    }
    function Ee() {
      return !(c.value && !u.value || !u.value && (i.value || l.value));
    }
    function Ue() {
      var Re;
      Tp(B.value, (Re = B.value) == null ? void 0 : Re.querySelector(".var-option--selected-color"));
    }
    function nn(Re) {
      var sn;
      if (E.value || I.value || !r.value) return;
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
      (_ === "ArrowDown" || _ === "ArrowUp") && t.value && (Ze(Re), Qu(o.value, B.value, _));
    }
    function Xe(Re) {
      if (E.value || I.value || t.value || !r.value) return;
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
        if ($e) {
          $e = !1;
          return;
        }
        K.value = fn(e.offsetY), $r(), (ae() || W()) && ($e = !0, (Re = a.value) == null || Re.focus()), C(be), en("onFocus");
      }
    }
    function ye() {
      const { disabled: Re, readonly: sn, onBlur: _ } = e;
      g?.disabled.value || g?.readonly.value || Re || sn || (ar(), C(_), en("onBlur"), i.value = "");
    }
    function ee() {
      return ST(this, null, function* () {
        if ($e) {
          yield Ne(), $e = !1;
          return;
        }
        t.value || ye();
      });
    }
    function Y() {
      r.value && ye();
    }
    function re(Re) {
      const { disabled: sn, readonly: _, multiple: be, onChange: le } = e;
      if (g?.disabled.value || g?.readonly.value || sn || _) return;
      const Se = T(Re);
      C(e["onUpdate:modelValue"], Se), C(le, Se), en("onChange"), Ne(() => {
        var je;
        return (je = a.value) == null ? void 0 : je.focus();
      }), be || (o.value.focus(), Gn().then(() => {
        t.value = !1, i.value = "";
      }));
    }
    function we() {
      const { disabled: Re, readonly: sn, multiple: _, clearable: be, onClear: le, onChange: Se } = e;
      if (g?.disabled.value || g?.readonly.value || Re || sn || !be) return;
      const je = _ ? [] : void 0;
      C(e["onUpdate:modelValue"], je), C(le, je), en("onClear"), C(Se, je), en("onChange");
    }
    function ze(Re) {
      const { disabled: sn, onClick: _ } = e;
      g?.disabled.value || sn || (C(_, Re), en("onClick"));
    }
    function Ge(Re) {
      const { disabled: sn, readonly: _, modelValue: be, onClose: le, onChange: Se } = e;
      if (g?.disabled.value || g?.readonly.value || sn || _) return;
      const je = m.find(({ label: Rn }) => Rn.value === Re), un = be.filter((Rn) => {
        var Kn;
        return Rn !== ((Kn = je.value.value) != null ? Kn : je.label.value);
      });
      C(e["onUpdate:modelValue"], un), C(le, un), en("onClose"), C(Se, un), en("onChange");
    }
    function rn() {
      t.value = !0;
    }
    function mn() {
      l.value = !0;
    }
    function In() {
      l.value = !1;
    }
    function $r() {
      K.value = fn(e.offsetY), r.value = !0;
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
      filterStyle: Q,
      pattern: i,
      tabindex: ge,
      readonly: I,
      disabled: E,
      offsetY: K,
      isFocusing: r,
      showMenu: t,
      errorMessage: P,
      formDisabled: g?.disabled,
      formReadonly: g?.readonly,
      label: $,
      labels: y,
      isEmptyModelValue: c,
      menuEl: B,
      menuRef: N,
      placement: M,
      cursor: f,
      placeholderColor: G,
      enableCustomPlaceholder: ce,
      showEmpty: pe,
      t: gn,
      pt: D,
      isFunction: Yn,
      n: PT,
      classes: OT,
      isShowSelected: Ee,
      isShowSingleFilter: W,
      isShowMultipleFilter: ae,
      handleFocus: on,
      handleBlur: ye,
      handleClickOutside: Y,
      handleClear: we,
      handleClick: ze,
      handleClose: Ge,
      handleRootBlur: ee,
      handleInput: rn,
      handleCompositionStart: mn,
      handleCompositionEnd: In,
      reset: _n,
      validate: Br,
      resetValidation: A,
      focus: $r,
      blur: ar
    };
  }
});
Cb.render = TT;
var cl = Cb;
ue(cl);
fe(cl, $b);
var QN = cl, vu = cl, Pb = { type: {
  type: String,
  default: "default"
} }, { name: ET, n: BT, classes: DT } = oe("shimmer-text");
function IT(e, n) {
  return b(), k("span", { class: p(e.classes(e.n(), e.n(`--${e.type}`))) }, [F(e.$slots, "default")], 2);
}
var Ob = te({
  name: ET,
  props: Pb,
  setup() {
    return {
      n: BT,
      classes: DT
    };
  }
});
Ob.render = IT;
var fl = Ob;
ue(fl);
fe(fl, Pb);
var xN = fl, pu = fl, zb = {
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
}, { name: MT, n: AT } = oe("signature"), NT = ["height", "width"];
function RT(e, n) {
  return b(), k("div", {
    ref: "root",
    class: p(e.n())
  }, [L("canvas", {
    ref: "canvas",
    height: e.canvasHeight,
    width: e.canvasWidth
  }, null, 8, NT)], 2);
}
var Tb = te({
  name: MT,
  props: zb,
  setup(e) {
    const n = O(), r = O(), t = O(0), o = O(0);
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
      const m = h.touches[0].clientX, w = h.touches[0].clientY, $ = kn(r.value), y = m - $.left, z = w - $.top;
      i.lineTo(y, z), i.stroke(), C(e.onSigning);
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
      n: AT,
      confirm: g,
      reset: v
    };
  }
});
Tb.render = RT;
var vl = Tb;
ue(vl);
fe(vl, zb);
var _N = vl, mu = vl, Eb = {
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
}, { name: VT, n: LT, classes: FT } = oe("skeleton");
function HT(e, n) {
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
      style: J({ height: e.toSizeUnit(e.cardHeight) })
    }, [L("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : X("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (b(), k("div", {
      key: 1,
      class: p(e.n("article"))
    }, [e.avatar ? (b(), k("div", {
      key: 0,
      class: p(e.n("avatar")),
      style: J({
        width: e.toSizeUnit(e.avatarSize),
        height: e.toSizeUnit(e.avatarSize)
      })
    }, [L("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : X("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (b(), k("div", {
      key: 1,
      class: p(e.n("section"))
    }, [e.title ? (b(), k("div", {
      key: 0,
      class: p(e.n("title")),
      style: J({ width: e.toSizeUnit(e.titleWidth) })
    }, [L("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : X("v-if", !0), (b(!0), k(De, null, Ye(e.toNumber(e.rows), (r, t) => (b(), k("div", {
      key: r,
      class: p(e.n("row")),
      style: J({ width: e.toSizeUnit(e.rowsWidth[t]) })
    }, [L("div", { class: p(e.n("--animation")) }, null, 2)], 6))), 128))], 2)) : X("v-if", !0)], 2)) : X("v-if", !0)], 2)) : X("v-if", !0),
    e.loading && e.fullscreen ? (b(), k("div", {
      key: 2,
      class: p(e.n("fullscreen")),
      style: J({ zIndex: e.toNumber(e.fullscreenZIndex) })
    }, [L("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : X("v-if", !0)
  ], 2);
}
var Bb = te({
  name: VT,
  props: Eb,
  setup: () => ({
    n: LT,
    classes: FT,
    toSizeUnit: Te,
    toNumber: Z
  })
});
Bb.render = HT;
var pl = Bb;
ue(pl);
fe(pl, Eb);
var e7 = pl, gu = pl, Tn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(Tn || {}), Db = {
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
}, { name: UT, n: Tv, classes: jT } = oe("slider"), YT = [
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
function WT(e, n) {
  const r = x("var-hover-overlay"), t = x("var-form-details"), o = _e("hover");
  return b(), k("div", { class: p(e.classes(e.n(e.direction), e.n("$--box"))) }, [L("div", {
    ref: "sliderEl",
    class: p(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
    onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
  }, [L("div", { class: p(e.n(`${e.direction}-track`)) }, [L("div", {
    class: p(e.n(`${e.direction}-track-background`)),
    style: J({
      background: e.trackColor,
      height: e.isVertical ? "100%" : e.toSizeUnit(e.trackHeight),
      width: e.isVertical ? e.toSizeUnit(e.trackHeight) : "100%"
    })
  }, null, 6), L("div", {
    class: p(e.n(`${e.direction}-track-fill`)),
    style: J(e.getFillStyle)
  }, null, 6)], 2), (b(!0), k(De, null, Ye(e.thumbList, (a) => (b(), k("div", {
    key: a.enumValue,
    class: p(e.n(`${e.direction}-thumb`)),
    style: J(e.thumbStyle(a)),
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
    We(L("div", {
      class: p(e.n(`${e.direction}-thumb-block`)),
      style: J({ background: e.thumbColor })
    }, null, 6), [[
      o,
      (i) => e.hover(i, a),
      "desktop"
    ]]),
    L("div", {
      class: p(e.classes(e.n(`${e.direction}-thumb-ripple`), [e.thumbsProps[a.enumValue].active, e.n(`${e.direction}-thumb-ripple--active`)])),
      style: J({ background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0 })
    }, [U(r, {
      hovering: !e.isDisabled && a.hovering,
      focusing: !e.isDisabled && a.focusing
    }, null, 8, ["hovering", "focusing"])], 6),
    L("div", {
      class: p(e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])),
      style: J({
        background: e.labelColor,
        color: e.labelTextColor,
        height: e.toSizeUnit(e.thumbSize),
        width: e.toSizeUnit(e.thumbSize)
      })
    }, [L("span", null, ve(a.text), 1)], 6)
  ])], 46, YT))), 128))], 2), U(t, {
    "error-message": e.errorMessage,
    class: p(e.n("form")),
    "var-slider-cover": ""
  }, null, 8, ["error-message", "class"])], 2);
}
var Ib = te({
  name: UT,
  components: {
    VarFormDetails: Hn,
    VarHoverOverlay: Zn
  },
  directives: { Hover: jn },
  props: Db,
  setup(e) {
    const n = O(0), r = O(null), t = O(!1), o = S(() => Z(e.max) - Z(e.min)), a = S(() => n.value / o.value * Z(e.step)), i = S(() => e.disabled || f?.disabled.value), l = S(() => e.readonly || f?.readonly.value), s = S(() => e.direction === "vertical"), u = O(!1), d = O(!1), { bindForm: c, form: f } = Wn(), { errorMessage: v, validateWithTrigger: g, validate: h, resetValidation: m } = xn(), { hovering: w, handleHovering: $ } = ur(), { hovering: y, handleHovering: z } = ur(), T = S(() => {
      const { modelValue: Y, range: re } = e;
      let we = [];
      return re && Ke(Y) ? we = [{
        value: j(Y[0]),
        enumValue: Tn.First,
        text: K(Y[0]),
        hovering: w.value,
        focusing: u.value,
        handleHovering: $,
        handleFocusing(ze) {
          u.value = ze;
        }
      }, {
        value: j(Y[1]),
        enumValue: Tn.Second,
        text: K(Y[1]),
        hovering: y.value,
        focusing: d.value,
        handleHovering: z,
        handleFocusing(ze) {
          d.value = ze;
        }
      }] : tr(Y) && (we = [{
        value: j(Y),
        enumValue: Tn.First,
        text: K(Y),
        hovering: w.value,
        focusing: u.value,
        handleHovering: $,
        handleFocusing(ze) {
          u.value = ze;
        }
      }]), we;
    }), P = S(() => {
      const { activeColor: Y, range: re, modelValue: we } = e, ze = re && Ke(we) ? j(Math.min(we[0], we[1])) : 0, Ge = re && Ke(we) ? j(Math.max(we[0], we[1])) - ze : j(we);
      return s.value ? {
        left: "0px",
        height: `${Ge}%`,
        bottom: `${ze}%`,
        background: Y
      } : {
        top: "0px",
        width: `${Ge}%`,
        left: `${ze}%`,
        background: Y
      };
    }), R = $n({
      [Tn.First]: E(),
      [Tn.Second]: E()
    });
    let H;
    C(c, {
      reset: Xe,
      validate: I,
      resetValidation: m
    }), me([() => e.modelValue, () => e.step], ([Y, re]) => {
      !Ee() || !Ue() || t.value || nn(Y, Z(re));
    }), me(n, () => nn()), On(() => {
      !Ee() || !Ue() || A();
    }), Pt(ne), xe(() => window, "keydown", on), wr(A);
    function A() {
      n.value = r.value[s.value ? "offsetHeight" : "offsetWidth"];
    }
    function I() {
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
    function N(Y) {
      const re = Y.currentTarget;
      return re ? s.value ? n.value - (Y.clientY - kn(re).top) : Y.clientX - Ly(re) : 0;
    }
    function M(Y) {
      return {
        [s.value ? "bottom" : "left"]: `${Y.value}%`,
        zIndex: R[Y.enumValue].active ? 1 : void 0
      };
    }
    function D(Y) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : R[Y].active;
    }
    function j(Y) {
      const { min: re, max: we } = e;
      return Y < Z(re) ? 0 : Y > Z(we) ? 100 : (Y - Z(re)) / o.value * 100;
    }
    function K(Y) {
      if (!tr(Y)) return 0;
      const re = hn(Y, Z(e.min), Z(e.max));
      return parseInt(`${re}`, 10) === re ? re : Z(re.toPrecision(5));
    }
    function G(Y, re) {
      i.value || re.handleHovering(Y);
    }
    function ce(Y) {
      C(e["onUpdate:modelValue"], Y), C(e.onChange, Y), B();
    }
    function ge(Y, re) {
      let we = [];
      const { step: ze, range: Ge, modelValue: rn, min: mn } = e, In = Z(ze), $r = Math.round(Y / a.value), ar = $r * In + Z(mn), Br = R[re].percentValue * In + Z(mn);
      R[re].percentValue = $r, Ge && Ke(rn) && (we = re === Tn.First ? [ar, rn[1]] : [rn[0], ar]), Br !== ar && ce(Ge ? we.map((_n) => K(_n)) : K(ar));
    }
    function de(Y) {
      if (!e.range) return Tn.First;
      const re = R[Tn.First].percentValue * a.value, we = R[Tn.Second].percentValue * a.value;
      return Math.abs(Y - re) <= Math.abs(Y - we) ? Tn.First : Tn.Second;
    }
    function Q() {
      document.addEventListener("touchmove", $e, { passive: !1 }), document.addEventListener("touchend", W), document.addEventListener("touchcancel", W);
    }
    function ne() {
      document.removeEventListener("touchmove", $e), document.removeEventListener("touchend", W), document.removeEventListener("touchcancel", W);
    }
    function pe(Y, re) {
      if (A(), i.value || (R[re].active = !0), H = re, Q(), i.value || l.value) return;
      C(e.onStart), t.value = !0;
      const { clientX: we, clientY: ze } = Y.touches[0];
      R[re].startPosition = s.value ? ze : we;
    }
    function $e(Y) {
      if (Ze(Y), i.value || l.value || !t.value) return;
      const { startPosition: re, currentOffset: we } = R[H], { clientX: ze, clientY: Ge } = Y.touches[0];
      let rn = (s.value ? re - Ge : ze - re) + we;
      rn <= 0 ? rn = 0 : rn >= n.value && (rn = n.value), ge(rn, H);
    }
    function W() {
      ne();
      const { range: Y, modelValue: re, onEnd: we, step: ze, min: Ge } = e;
      if (i.value || (R[H].active = !1), i.value || l.value) return;
      let rn = [];
      R[H].currentOffset = R[H].percentValue * a.value;
      const mn = R[H].percentValue * Z(ze) + Z(Ge);
      Y && Ke(re) && (rn = H === Tn.First ? [mn, re[1]] : [re[0], mn]), C(we, Y ? rn : mn), t.value = !1;
    }
    function ae(Y) {
      if (i.value || l.value || Y.target.closest(`.${Tv("thumb")}`)) return;
      const re = N(Y), we = de(re);
      H = we, ge(re, we), W();
    }
    function Ee() {
      return Z(e.step) <= 0 ? (W0("Slider", '"step" should be > 0'), !1) : !0;
    }
    function Ue() {
      const { range: Y, modelValue: re } = e;
      return Y && !Ke(re) ? (Nt("Slider", '"modelValue" should be an Array'), !1) : !Y && Ke(re) ? (Nt("Slider", '"modelValue" should be a Number'), !1) : Y && Ke(re) && re.length < 2 ? (Nt("Slider", '"modelValue" should have two value'), !1) : !0;
    }
    function nn(Y = e.modelValue, re = Z(e.step)) {
      const we = (ze) => {
        const { min: Ge, max: rn } = e;
        return ze < Z(Ge) ? 0 : ze > Z(rn) ? o.value / re : (ze - Z(Ge)) / re;
      };
      e.range && Ke(Y) ? (R[Tn.First].percentValue = we(Y[0]), R[Tn.First].currentOffset = R[Tn.First].percentValue * a.value, R[Tn.Second].percentValue = we(Y[1]), R[Tn.Second].currentOffset = R[Tn.Second].percentValue * a.value) : tr(Y) && (R[Tn.First].currentOffset = we(Y) * a.value);
    }
    function Xe() {
      const Y = e.range ? [0, 0] : 0;
      C(e["onUpdate:modelValue"], Y), m();
    }
    function en(Y, re) {
      const we = Z(e.step);
      return Ke(re) ? [re[0] + (u.value ? Y * we : 0), re[1] + (d.value ? Y * we : 0)].map(K) : K(re + Y * we);
    }
    function on(Y) {
      const re = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: we } = Y;
      if (!go(re, we) || l.value || i.value || e.range && !u.value && !d.value || !e.range && !u.value) return;
      Ze(Y);
      const ze = re[we];
      ce(en(ze, e.modelValue));
    }
    function ye(Y) {
      i.value || Y.handleFocusing(!0);
    }
    function ee(Y) {
      Y.handleFocusing(!1);
    }
    return {
      sliderEl: r,
      getFillStyle: P,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: R,
      thumbList: T,
      handleFocus: ye,
      handleBlur: ee,
      n: Tv,
      classes: jT,
      thumbStyle: M,
      hover: G,
      toSizeUnit: Te,
      toNumber: Z,
      showLabel: D,
      start: pe,
      move: $e,
      end: W,
      handleClick: ae
    };
  }
});
Ib.render = WT;
var ml = Ib;
ue(ml);
fe(ml, Db);
var n7 = ml, hu = ml, KT = Object.defineProperty, qT = Object.defineProperties, XT = Object.getOwnPropertyDescriptors, Ev = Object.getOwnPropertySymbols, GT = Object.prototype.hasOwnProperty, ZT = Object.prototype.propertyIsEnumerable, Bv = (e, n, r) => n in e ? KT(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, JT = (e, n) => {
  for (var r in n || (n = {})) GT.call(n, r) && Bv(e, r, n[r]);
  if (Ev)
    for (var r of Ev(n)) ZT.call(n, r) && Bv(e, r, n[r]);
  return e;
}, QT = (e, n) => qT(e, XT(n)), pd = {
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
  progress: Boolean,
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
  loadingColor: QT(JT({}, Fe(jr, "color")), { default: "currentColor" }),
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
}, { n: xT, classes: _T } = oe("snackbar"), e5 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function n5(e, n) {
  var r;
  const t = x("var-icon"), o = x("var-loading");
  return We((b(), k("div", {
    class: p(e.n()),
    style: J({
      pointerEvents: e.isForbidClick ? "auto" : "none",
      zIndex: e.zIndex
    })
  }, [L("div", {
    class: p(e.classes(e.n("wrapper"), e.n(`wrapper-${e.position}`), e.formatElevation(e.elevation, 4), [e.vertical, e.n("vertical")], [e.showProgress, e.n("wrapper--progress")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n(`wrapper-${e.type}`)])),
    style: J({ zIndex: e.zIndex })
  }, [
    L("div", { class: p([e.n("content"), e.contentClass]) }, [F(e.$slots, "default", {}, () => [Le(ve(e.content), 1)])], 2),
    e.iconName || e.type === "loading" || e.$slots.icon ? (b(), k("div", {
      key: 0,
      class: p(e.n("icon"))
    }, [
      e.iconName ? (b(), ke(t, {
        key: 0,
        name: e.iconName
      }, null, 8, ["name"])) : X("v-if", !0),
      e.type === "loading" ? (b(), ke(o, {
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
    }, [F(e.$slots, "action")], 2)) : X("v-if", !0),
    e.showProgress ? (b(), k("div", {
      key: (r = e.countdown) == null ? void 0 : r.id,
      class: p(e.n("progress")),
      "aria-hidden": "true"
    }, [L("div", {
      class: p(e.n("progress-bar")),
      style: J(e.progressStyle)
    }, null, 6)], 2)) : X("v-if", !0)
  ], 6)], 6)), [[yr, e.show]]);
}
var Mb = te({
  name: "VarSnackbarCore",
  components: {
    VarLoading: St,
    VarIcon: Je
  },
  props: pd,
  setup(e) {
    let n, r = 0;
    const t = Gv(), { zIndex: o } = Ao(() => e.show, 1);
    Mo(() => e.show, () => e.lockScroll);
    const a = S(() => {
      const { type: c, forbidClick: f } = e;
      return c === "loading" || f;
    }), i = S(() => e.type ? e5[e.type] : ""), l = S(() => e.progress && t.value !== void 0 && t.value.duration > 0 && Number.isFinite(t.value.duration)), s = S(() => {
      if (!e.progress || !t.value) return;
      const { duration: c, startedAt: f } = t.value;
      return {
        animationDuration: `${c}ms`,
        animationDelay: `${-Math.max(0, Date.now() - f)}ms`
      };
    });
    function u() {
      clearTimeout(n), n = void 0, t.value = void 0;
    }
    function d() {
      u(), !(!e.show || e.type === "loading") && (t.value = {
        id: r++,
        duration: e.duration,
        startedAt: Date.now()
      }, n = setTimeout(() => {
        u(), C(e["onUpdate:show"], !1);
      }, e.duration));
    }
    return me(() => e.show, (c) => {
      C(c ? e.onOpen : e.onClose);
    }), me([
      () => e.show,
      () => e.type === "loading",
      () => e._update
    ], d), On(() => {
      e.show && (C(e.onOpen), d());
    }), Xt(u), {
      SNACKBAR_TYPE: Rb,
      zIndex: o,
      iconName: i,
      isForbidClick: a,
      countdown: t,
      showProgress: l,
      progressStyle: s,
      n: xT,
      classes: _T,
      formatElevation: zn
    };
  }
});
Mb.render = n5;
var Ab = Mb, { name: r5, n: t5 } = oe("snackbar");
function o5(e, n) {
  const r = x("var-snackbar-core");
  return b(), ke(Hr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [U(bn, {
    name: `${e.n()}-fade`,
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: se(() => [U(r, qe(e.$props, { class: e.n("transition") }), Pr({
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
var Nb = te({
  name: r5,
  components: { VarSnackbarCore: Ab },
  props: pd,
  setup() {
    const { disabled: e } = Tt();
    return {
      disabled: e,
      n: t5
    };
  }
});
Nb.render = o5;
var gl = Nb, a5 = Object.defineProperty, Dv = Object.getOwnPropertySymbols, i5 = Object.prototype.hasOwnProperty, l5 = Object.prototype.propertyIsEnumerable, Iv = (e, n, r) => n in e ? a5(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Bo = (e, n) => {
  for (var r in n || (n = {})) i5.call(n, r) && Iv(e, r, n[r]);
  if (Dv)
    for (var r of Dv(n)) l5.call(n, r) && Iv(e, r, n[r]);
  return e;
}, Rb = [
  "loading",
  "success",
  "warning",
  "info",
  "error"
], Mv = 0, bu = !1, Vb, Do = !1, Lb = {
  type: void 0,
  content: "",
  icon: "",
  action: "",
  position: "top",
  duration: 3e3,
  progress: !1,
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
}, br = $n([]), md = Lb, s5 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Xl = (e) => () => Yn(e) ? e() : e, u5 = { setup() {
  return () => {
    const e = br.map(({ id: n, reactiveSnackOptions: r, _update: t }) => {
      const o = document.querySelector(".var-transition-group");
      r.forbidClick || r.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto");
      const a = Bo({ position: Do ? "relative" : "absolute" }, m5(r.position)), { content: i, icon: l, action: s } = r, u = {
        default: Xl(i),
        icon: Xl(l),
        action: Xl(s)
      };
      return U(Ab, qe(r, {
        key: n,
        style: a,
        "data-id": n,
        _update: t,
        show: r.show,
        "onUpdate:show": (d) => r.show = d
      }), u);
    });
    return U(k0, qe(s5, {
      style: { zIndex: vr.zIndex },
      onAfterEnter: d5,
      onAfterLeave: c5
    }), { default: () => [e] });
  };
} }, Fr = function(e) {
  const n = v5(e), r = $n(Bo(Bo({}, md), n));
  r.show = !0, bu || (bu = !0, Vb = Qt(u5).unmountInstance);
  const { length: t } = br, o = {
    id: Mv++,
    reactiveSnackOptions: r
  };
  return t === 0 || Do ? f5(o) : p5(r, `update-${Mv}`), { clear() {
    !Do && br.length ? br[0].reactiveSnackOptions.show = !1 : r.show = !1;
  } };
};
Rb.forEach((e) => {
  Fr[e] = (n) => (Sn(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Fr(n));
});
Fr.allowMultiple = function(e = !1) {
  e !== Do && (br.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Do = e);
};
Fr.clear = function() {
  br.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Fr.setDefaultOptions = function(e) {
  md = e;
};
Fr.resetDefaultOptions = function() {
  md = Lb;
};
function d5(e) {
  const n = e.getAttribute("data-id"), r = br.find((t) => t.id === Z(n));
  r && C(r.reactiveSnackOptions.onOpened);
}
function c5(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), r = br.find((t) => t.id === Z(n));
  r && (r.animationEnd = !0, C(r.reactiveSnackOptions.onClosed)), br.every((t) => t.animationEnd) && (C(Vb), br = $n([]), bu = !1);
}
function f5(e) {
  br.push(e);
}
function v5(e = {}) {
  return Pn(e) ? { content: e } : e;
}
function p5(e, n) {
  const [r] = br;
  r.reactiveSnackOptions = Bo(Bo({}, r.reactiveSnackOptions), e), r._update = n;
}
function m5(e = "top") {
  return e === "bottom" ? { top: "85%" } : { top: e === "top" ? "5%" : "45%" };
}
Fr.Component = gl;
ue(gl);
ue(gl, Fr);
fe(Fr, pd);
var r7 = gl, yu = Fr, Fb = {
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
function g5(e, n, r) {
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
var h5 = (e) => [
  "mini",
  "small",
  "normal",
  "large"
].includes(e), { name: b5, n: aa, classes: Av } = oe("space");
function y5(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Ke(e) ? e.map(Te) : [Te(e), Te(e)];
}
var hl = te({
  name: b5,
  props: Fb,
  setup(e, { slots: n }) {
    return () => {
      var r;
      const { inline: t, justify: o, align: a, wrap: i, direction: l, size: s } = e, u = (r = C(n.default)) != null ? r : [], [d, c] = y5(s, h5(s)), f = Va(u), v = f.length - 1, g = f.map((h, m) => {
        var w;
        const $ = g5(d, c, {
          direction: l,
          justify: o,
          index: m,
          lastIndex: v
        });
        return U("div", {
          class: Av([l === "column", aa("--auto")]),
          key: (w = h.key) != null ? w : void 0,
          style: { margin: $ }
        }, [h]);
      });
      return U("div", {
        class: Av(aa(), aa("$--box"), [t, aa("--inline")]),
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
fe(hl, Fb);
var t7 = hl, wu = hl, Hb = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Fe(pn, "name"),
  inactiveIcon: Fe(pn, "name"),
  activeIconNamespace: Fe(pn, "namespace"),
  currentIconNamespace: Fe(pn, "namespace"),
  inactiveIconNamespace: Fe(pn, "namespace")
}, Ub = /* @__PURE__ */ Symbol("STEPS_BIND_STEP_KEY");
function w5() {
  const { bindChildren: e, childProviders: n } = Dn(Ub);
  return {
    step: n,
    bindStep: e
  };
}
function k5() {
  const { parentProvider: e, index: n, bindParent: r } = Bn(Ub);
  return or(!!r, "Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var { name: $5, n: S5, classes: C5 } = oe("step"), P5 = { key: 3 };
function O5(e, n) {
  const r = x("var-icon");
  return b(), k("div", { class: p(e.n()) }, [L("div", { class: p(e.n(e.direction)) }, [
    L("div", {
      class: p(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
      style: J({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
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
    }, null, 8, ["name", "namespace"])])], 2)) : (b(), k("span", P5, ve(e.index + 1), 1))], 6),
    e.$slots.default ? (b(), k("div", {
      key: 0,
      class: p(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
      onClick: n[1] || (n[1] = (...t) => e.click && e.click(...t))
    }, [F(e.$slots, "default")], 2)) : X("v-if", !0),
    L("div", { class: p(e.n(`${e.direction}-line`)) }, null, 2)
  ], 2)], 2);
}
var jb = te({
  name: $5,
  components: { VarIcon: Je },
  props: Hb,
  setup() {
    const { index: e, steps: n, bindSteps: r } = k5(), { active: t, activeColor: o, inactiveColor: a, direction: i, clickStep: l } = n, s = S(() => t.value === e.value), u = S(() => e.value !== -1 && Z(t.value) > e.value);
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
      n: S5,
      classes: C5,
      click: d
    };
  }
});
jb.render = O5;
var bl = jb;
ue(bl);
fe(bl, Hb);
var o7 = bl, ku = bl, Yb = {
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
}, { name: z5, n: T5 } = oe("steps");
function E5(e, n) {
  return b(), k("div", {
    class: p(e.n()),
    style: J({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
  }, [F(e.$slots, "default")], 6);
}
var Wb = te({
  name: z5,
  props: Yb,
  setup(e) {
    const n = S(() => e.active), r = S(() => e.activeColor), t = S(() => e.inactiveColor), o = S(() => e.direction), { bindStep: a } = w5();
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
    return { n: T5 };
  }
});
Wb.render = E5;
var yl = Wb;
ue(yl);
fe(yl, Yb);
var a7 = yl, $u = yl, Kb = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: B5, n: D5 } = oe("style-provider"), wl = te({
  name: B5,
  props: Kb,
  setup(e, { slots: n }) {
    return () => Fn(e.tag, {
      class: D5(),
      style: zp(e.styleVars)
    }, C(n.default));
  }
}), qb = "varlet-style-vars";
function Nv() {
  const e = document.head.querySelector(`#${qb}`);
  e && document.head.removeChild(e);
}
function I5(e) {
  const n = document.createElement("style");
  n.id = qb, n.innerHTML = e, document.head.appendChild(n);
}
function kl(e) {
  if (e == null) {
    Nv();
    return;
  }
  const n = zp(e ?? {}), r = Object.entries(n).reduce((t, [o, a]) => (t += `${o}:${a};`, t), `:root:root {
`);
  Nv(), I5(`${r}
}`);
}
kl.Component = wl;
ue(wl);
ue(wl, kl);
fe(kl, Kb);
var i7 = wl, Su = kl, Xb = {
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
}, { name: M5, n: A5, classes: N5 } = oe("switch"), R5 = ["aria-checked"], V5 = ["tabindex"];
function L5(e, n) {
  const r = x("var-hover-overlay"), t = x("var-form-details"), o = _e("ripple"), a = _e("hover");
  return We((b(), k("div", {
    class: p(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [L("div", {
    ref: "switchRef",
    class: p(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
    style: J(e.styleComputed.switch),
    onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
  }, [L("div", {
    style: J(e.styleComputed.track),
    class: p(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
  }, null, 6), We((b(), k("div", {
    class: p(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
    style: J(e.styleComputed.ripple),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
  }, [L("div", {
    style: J(e.styleComputed.handle),
    class: p(e.classes(e.n("handle"), e.formatElevation(e.buttonElevation, 2), [e.isActive, e.n("handle--active")], [e.errorMessage && !e.variant, e.n("handle--error")], [e.hovering, e.n("handle--hover")]))
  }, [e.loading ? (b(), k("span", {
    key: 0,
    class: p(e.n("loading")),
    style: J({
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
  }, null, 8, ["hovering", "focusing"])], 46, V5)), [[o, { disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly }]])], 6), U(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 10, R5)), [[
    a,
    e.hover,
    "desktop"
  ]]);
}
var Gb = te({
  name: M5,
  components: {
    VarFormDetails: Hn,
    VarHoverOverlay: Zn
  },
  directives: {
    Ripple: vn,
    Hover: jn
  },
  props: Xb,
  setup(e) {
    const n = O(null), r = O(!1), { bindForm: t, form: o } = Wn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = xn(), { hovering: u, handleHovering: d } = ur(), c = S(() => e.modelValue === e.activeValue), f = S(() => {
      const { size: T, color: P, closeColor: R, loadingColor: H, variant: A } = e;
      return {
        handle: {
          width: nr(T),
          height: nr(T),
          backgroundColor: c.value ? P : R,
          color: H
        },
        ripple: {
          left: c.value ? nr(T, 0.5) : `-${nr(T, A ? 1 / 3 : 0.5)}`,
          color: c.value ? P : R || "currentColor",
          width: nr(T, 2),
          height: nr(T, 2)
        },
        track: {
          width: nr(T, A ? 13 / 6 : 1.9),
          height: nr(T, A ? 4 / 3 : 0.72),
          borderRadius: nr(T, 2 / 3),
          filter: c.value || a?.value ? void 0 : `brightness(${A ? 1 : 0.6})`,
          backgroundColor: c.value ? P : R,
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
    function w(T) {
      Ne(() => {
        const { validateTrigger: P, rules: R, modelValue: H } = e;
        i(P, T, R, H);
      });
    }
    function $(T) {
      const { onClick: P, onChange: R, disabled: H, loading: A, readonly: I, activeValue: E, inactiveValue: B, lazyChange: N, "onUpdate:modelValue": M, onBeforeChange: D } = e;
      if (H || o?.disabled.value || (C(P, T), A || I || o?.readonly.value)) return;
      const j = c.value ? B : E;
      N ? C(D, j, (K) => {
        C(M, K), w("onLazyChange");
      }) : (C(M, j), C(R, j), w("onChange"));
    }
    function y(T) {
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
      n: A5,
      classes: N5,
      formatElevation: zn,
      multiplySizeUnit: nr,
      switchActive: $,
      hover: y
    };
  }
});
Gb.render = L5;
var $l = Gb;
ue($l);
fe($l, Xb);
var l7 = $l, Cu = $l, Zb = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: V()
}, Jb = /* @__PURE__ */ Symbol("TABS_BIND_TAB_KEY");
function F5() {
  const { childProviders: e, bindChildren: n, length: r } = Dn(Jb);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function H5() {
  const { parentProvider: e, bindParent: n, index: r } = Bn(Jb);
  return or(!!n, "Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var { name: U5, n: ia, classes: j5 } = oe("tab");
function Y5(e, n) {
  const r = _e("ripple");
  return We((b(), k("div", {
    ref: "tabEl",
    class: p(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
    style: J({ color: e.computeColorStyle() }),
    onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
  }, [F(e.$slots, "default")], 6)), [[r, { disabled: e.disabled || !e.ripple }]]);
}
var Qb = te({
  name: U5,
  directives: { Ripple: vn },
  props: Zb,
  setup(e) {
    const n = O(null), r = S(() => n.value), t = S(() => e.name), o = S(() => e.disabled), { index: a, tabs: i, bindTabs: l } = H5(), { onTabClick: s, active: u, activeColor: d, inactiveColor: c, disabledColor: f, itemDirection: v, resize: g } = i, h = {
      name: t,
      index: a,
      disabled: o,
      element: r
    };
    l(h), me(() => [e.name, e.disabled], g);
    function m() {
      return e.name != null ? u.value === e.name : u.value === a?.value;
    }
    function w() {
      return e.disabled ? f.value : m() ? d.value : c.value;
    }
    function $() {
      return e.disabled ? ia("$-tab--disabled") : m() ? ia("$-tab--active") : ia("$-tab--inactive");
    }
    function y(z) {
      const { disabled: T, name: P, onClick: R } = e;
      T || (C(R, P ?? a.value, z), s(h));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: c,
      itemDirection: v,
      n: ia,
      classes: j5,
      computeColorStyle: w,
      computeColorClass: $,
      handleClick: y
    };
  }
});
Qb.render = Y5;
var Sl = Qb;
ue(Sl);
fe(Sl, Zb);
var s7 = Sl, Pu = Sl, xb = { name: [String, Number] }, { name: W5, n: K5, classes: q5 } = oe("tab-item");
function X5(e, n) {
  const r = x("var-swipe-item");
  return b(), ke(r, {
    class: p(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: se(() => [F(e.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}
var _b = te({
  name: W5,
  components: { VarSwipeItem: zo },
  props: xb,
  setup(e) {
    const n = O(!1), r = S(() => e.name), { index: t, bindTabsItems: o } = Ez(), { bindLists: a } = Bz(), i = {
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
      n: K5,
      classes: q5
    };
  }
});
_b.render = X5;
var Cl = _b;
ue(Cl);
fe(Cl, xb);
var u7 = Cl, Ou = Cl, e0 = {
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
}, { name: G5, n: Z5, classes: J5 } = oe("table");
function Q5(e, n) {
  return b(), k("div", { class: p(e.classes(e.n(), [!e.plain, e.formatElevation(e.elevation, 1)], e.n("$--box"), [e.surfaceLow, e.n("--surface-low")], [e.bordered, e.n("--bordered")], [e.plain, e.n("--plain")])) }, [L("div", {
    class: p(e.classes(e.n("main"), e.n("$--scrollbar"))),
    style: J({ "max-height": e.toSizeUnit(e.scrollerHeight) })
  }, [L("table", {
    class: p(e.n("table")),
    style: J({ width: e.toSizeUnit(e.fullWidth) })
  }, [F(e.$slots, "default")], 6)], 6), e.$slots.footer ? (b(), k("div", {
    key: 0,
    class: p(e.n("footer"))
  }, [F(e.$slots, "footer")], 2)) : X("v-if", !0)], 2);
}
var n0 = te({
  name: G5,
  props: e0,
  setup(e) {
    const n = S(() => e.surface === "low");
    return {
      toSizeUnit: Te,
      n: Z5,
      classes: J5,
      formatElevation: zn,
      surfaceLow: n,
      plain: S(() => e.plain)
    };
  }
});
n0.render = Q5;
var Pl = n0;
ue(Pl);
fe(Pl, e0);
var d7 = Pl, zu = Pl, r0 = {
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
  stickyCssMode: Fe(mo, "cssMode"),
  stickyZIndex: Fe(mo, "zIndex"),
  offsetTop: Fe(mo, "offsetTop"),
  onClick: V(),
  onChange: V(),
  "onUpdate:active": V()
}, Rv = (e, n, r) => new Promise((t, o) => {
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
}), { name: x5, n: _5, classes: eE } = oe("tabs");
function nE(e, n) {
  return b(), ke(Gt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: se(() => [L("div", qe({
      class: e.classes(e.n(), e.n("$--box"), e.n(`--item-${e.itemDirection}`), e.n(`--layout-${e.layoutDirection}-padding`), e.formatElevation(e.elevation, 4), [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
      style: { background: e.color }
    }, e.$attrs), [L("div", {
      ref: "scrollerEl",
      class: p(e.classes(e.n("tab-wrap"), [e.localScrollable, e.n(`--layout-${e.layoutDirection}-scrollable`)], e.n(`--layout-${e.layoutDirection}`)))
    }, [F(e.$slots, "default"), L("div", {
      class: p(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
      style: J({
        width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
        height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
        transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
      })
    }, [L("div", {
      class: p(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
      style: J({ background: e.indicatorColor || e.activeColor })
    }, null, 6)], 6)], 2)], 16)]),
    _: 3
  }, 8, [
    "css-mode",
    "offset-top",
    "z-index"
  ]);
}
var t0 = te({
  name: x5,
  components: { VarSticky: Eo },
  inheritAttrs: !1,
  props: r0,
  setup(e) {
    const n = O("0px"), r = O("0px"), t = O("0px"), o = O("0px"), a = O(!1), i = O(null), l = S(() => e.active), s = S(() => e.activeColor), u = S(() => e.inactiveColor), d = S(() => e.disabledColor), c = S(() => e.itemDirection), f = O(null), v = S(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: g, bindTabList: h, length: m } = F5();
    h({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: c,
      resize: H,
      onTabClick: w
    }), me(() => m.value, () => Rv(null, null, function* () {
      yield Gn(), H();
    })), me(() => [e.active, e.scrollable], H), ft(H), wr(H);
    function w(I) {
      var E;
      const B = (E = I.name.value) != null ? E : I.index.value, { active: N, onChange: M, onClick: D } = e;
      C(e["onUpdate:active"], B), C(D, B), B !== N && C(M, B);
    }
    function $() {
      return g.find(({ name: I }) => e.active === I.value);
    }
    function y(I) {
      return g.find(({ index: E }) => (I ?? e.active) === E.value);
    }
    function z() {
      if (m.value === 0) return;
      const { active: I } = e;
      if (tr(I)) {
        const E = hn(I, 0, m.value - 1);
        return C(e["onUpdate:active"], E), y(E);
      }
    }
    function T() {
      a.value = e.scrollable === "always" || g.length >= 5;
    }
    function P({ element: I }) {
      const E = I.value;
      E && (e.layoutDirection === "horizontal" ? (n.value = `${E.offsetWidth}px`, t.value = `${E.offsetLeft}px`) : (r.value = `${E.offsetHeight}px`, o.value = `${E.offsetTop}px`));
    }
    function R({ element: I }) {
      if (!a.value) return;
      const E = i.value, B = I.value;
      if (e.layoutDirection === "horizontal") {
        const N = B.offsetLeft + B.offsetWidth / 2 - E.offsetWidth / 2;
        ho(E, {
          left: N,
          animation: us
        });
      } else {
        const N = B.offsetTop + B.offsetHeight / 2 - E.offsetHeight / 2;
        ho(E, {
          top: N,
          animation: us
        });
      }
    }
    function H() {
      const I = $() || y() || z();
      !I || I.disabled.value || (T(), P(I), R(I));
    }
    function A() {
      return Rv(this, null, function* () {
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
      n: _5,
      classes: eE,
      resize: H,
      resizeSticky: A,
      formatElevation: zn
    };
  }
});
t0.render = nE;
var Ol = t0;
ue(Ol);
fe(Ol, r0);
var c7 = Ol, Tu = Ol, o0 = {
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
}, rE = (e, n, r) => new Promise((t, o) => {
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
}), { name: tE, n: oE } = oe("tabs-items");
function aE(e, n) {
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
var a0 = te({
  name: tE,
  components: { VarSwipe: Oo },
  props: o0,
  setup(e) {
    const n = O(null), { tabItemList: r, bindTabItem: t, length: o } = Tz();
    t({}), me(() => e.active, s), me(() => o.value, () => rE(null, null, function* () {
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
      n: oE,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
a0.render = aE;
var zl = a0;
ue(zl);
fe(zl, o0);
var f7 = zl, Eu = zl;
function gd(e, n) {
  return Object.entries(e).reduce((r, [t, o]) => (r[t] = o.includes("px") ? o.replace(/(\d+(\.\d+)?)px/g, (a, i) => n(i)) : o, r), {});
}
var iE = {
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
}, lE = {
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
}, sE = {
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
}, uE = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, dE = { "--avatar-group-offset": "-10px" }, cE = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, fE = {
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
}, vE = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, pE = {
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
}, mE = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, gE = {
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
}, hE = {
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
}, bE = {
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
}, yE = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, wE = {
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
}, kE = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, $E = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, SE = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, CE = {
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
}, PE = {
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
}, OE = {
  "--date-input-picker-width": "320px",
  "--date-input-time-select-separator-color": "var(--color-on-surface-variant)",
  "--date-input-time-select-border-color": "var(--color-outline)",
  "--date-input-time-select-active-color": "var(--color-primary)"
}, zE = {
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
}, TE = {
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
}, EE = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, BE = {
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
}, DE = {
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
}, IE = {
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
}, ME = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, AE = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, NE = { "--icon-size": "20px" }, RE = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "8px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, VE = {
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
}, LE = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, FE = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, HE = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, UE = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, jE = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, YE = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px",
  "--menu-large-border-radius": "8px"
}, WE = {
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
}, KE = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px",
  "--menu-select-menu-large-border-radius": "8px"
}, qE = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, XE = {
  "--otp-input-gutter": "8px",
  "--otp-input-cell-height": "48px",
  "--otp-input-cell-max-width": "48px",
  "--otp-input-input-font-size": "20px"
}, GE = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, ZE = {
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
}, JE = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-outlined-background": "transparent",
  "--paper-filled-background": "var(--color-surface-container-highest)",
  "--paper-outline-color": "var(--color-outline)",
  "--paper-border-radius": "4px",
  "--paper-active-color": "var(--color-primary)",
  "--paper-active-opacity": "0.2"
}, QE = {
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
}, xE = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, _E = {
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
}, eB = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, nB = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, rB = {
  "--rail-navigation-width": "80px",
  "--rail-navigation-background": "var(--color-surface-container-high)",
  "--rail-navigation-border-color": "var(--color-outline)",
  "--rail-navigation-padding": "12px 0",
  "--rail-navigation-start-padding": "4px 0",
  "--rail-navigation-end-padding": "4px 0",
  "--rail-navigation-item-gap": "4px"
}, tB = {
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
}, oB = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, aB = {
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
}, iB = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, lB = {
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
}, sB = {
  "--segmented-buttons-border-color": "var(--color-outline)",
  "--segmented-buttons-border-radius": "4px",
  "--segmented-buttons-border-width": "1px",
  "--segmented-buttons-error-border-color": "var(--color-danger)",
  "--segmented-buttons-error-color": "var(--color-danger)",
  "--segmented-buttons-error-checked-background": "hsla(var(--hsl-danger), 0.12)"
}, uB = {
  "--select-scroller-background": "#272727",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-scroller-border-radius": "2px",
  "--select-scroller-large-border-radius": "8px",
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
}, dB = {
  "--shimmer-text-color": "var(--color-on-surface-variant)",
  "--shimmer-text-highlight-color": "#000",
  "--shimmer-text-duration": "1.4s",
  "--shimmer-text-angle": "100deg"
}, cB = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "#fff",
  "--signature-height": "200px",
  "--signature-border-radius": "4px"
}, fB = {
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
}, vB = {
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
}, pB = {
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
}, mB = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, gB = {
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
}, hB = {
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
}, bB = {
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
}, yB = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, wB = {
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
}, kB = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, $B = {
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
}, SB = {
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
}, CB = {
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
}, PB = {
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
}, OB = { "--watermark-content-color": "#ffffff" }, zB = Object.defineProperty, Vv = Object.getOwnPropertySymbols, TB = Object.prototype.hasOwnProperty, EB = Object.prototype.propertyIsEnumerable, Lv = (e, n, r) => n in e ? zB(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ce = (e, n) => {
  for (var r in n || (n = {})) TB.call(n, r) && Lv(e, r, n[r]);
  if (Vv)
    for (var r of Vv(n)) EB.call(n, r) && Lv(e, r, n[r]);
  return e;
}, BB = Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce({
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
}, gE), lE), bE), hE), $B), OE), zE), fB), kB), yB), xE), TE), iE), wE), fE), PB), $E), eB), bB), gB), ZE), wB), DE), nB), yE), lB), sB), EE), QE), sE), pE), YE), aB), mE), uE), FE), _E), qE), OB), KE), WE), dE), cE), vE), SE), CE), PE), rB), tB), BE), IE), ME), AE), NE), RE), VE), LE), XE), HE), UE), jE), GE), JE), oB), iB), vB), pB), mB), hB), SB), CB), uB), kE), dB), cB), DB = {
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
}, IB = {
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
}, MB = {
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
}, AB = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, NB = { "--avatar-group-offset": "-10px" }, RB = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, VB = {
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
}, LB = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, FB = {
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
}, HB = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, UB = {
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
}, jB = {
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
}, YB = {
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
}, WB = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, KB = {
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
}, qB = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, XB = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, GB = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, ZB = {
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
}, JB = {
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
}, QB = {
  "--date-input-picker-width": "320px",
  "--date-input-time-select-separator-color": "var(--color-on-surface-variant)",
  "--date-input-time-select-border-color": "var(--color-outline)",
  "--date-input-time-select-active-color": "var(--color-primary)"
}, xB = {
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
}, _B = {
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
}, eD = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, nD = {
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
}, rD = {
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
}, tD = {
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
}, oD = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, aD = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, iD = { "--icon-size": "20px" }, lD = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "8px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, sD = {
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
}, uD = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, dD = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, cD = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, fD = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, vD = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, pD = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px",
  "--menu-large-border-radius": "16px"
}, mD = {
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
}, gD = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-large-border-radius": "16px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, hD = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, bD = {
  "--otp-input-gutter": "8px",
  "--otp-input-cell-height": "48px",
  "--otp-input-cell-max-width": "48px",
  "--otp-input-input-font-size": "20px"
}, yD = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, wD = {
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
}, kD = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-surface-low-background": "#1c1b1d",
  "--paper-outlined-background": "transparent",
  "--paper-filled-background": "var(--color-surface-container-highest)",
  "--paper-outline-color": "var(--color-outline)",
  "--paper-border-radius": "12px",
  "--paper-active-color": "var(--color-primary)",
  "--paper-active-opacity": "0.2"
}, $D = {
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
}, SD = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, CD = {
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
}, PD = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, OD = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, zD = {
  "--rail-navigation-width": "80px",
  "--rail-navigation-background": "var(--color-surface-container)",
  "--rail-navigation-border-color": "var(--color-outline)",
  "--rail-navigation-padding": "12px 0",
  "--rail-navigation-start-padding": "4px 0",
  "--rail-navigation-end-padding": "4px 0",
  "--rail-navigation-item-gap": "4px"
}, TD = {
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
}, ED = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, BD = {
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
}, DD = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, ID = {
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
}, MD = {
  "--segmented-buttons-border-color": "#938F99",
  "--segmented-buttons-border-radius": "100px",
  "--segmented-buttons-border-width": "1px",
  "--segmented-buttons-error-border-color": "var(--color-danger)",
  "--segmented-buttons-error-color": "var(--color-danger)",
  "--segmented-buttons-error-checked-background": "hsla(var(--hsl-danger), 0.12)"
}, AD = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-large-border-radius": "16px",
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
}, ND = {
  "--shimmer-text-color": "var(--color-on-surface-variant)",
  "--shimmer-text-highlight-color": "#000",
  "--shimmer-text-duration": "1.4s",
  "--shimmer-text-angle": "100deg"
}, RD = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "var(--color-inverse-surface)",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, VD = {
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
}, LD = {
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
}, FD = {
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
}, HD = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, UD = {
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
}, jD = {
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
}, YD = {
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
}, WD = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, KD = {
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
}, qD = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, XD = {
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
}, GD = {
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
}, ZD = {
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
}, JD = {
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
}, QD = { "--watermark-content-color": "#ffffff" }, xD = Object.defineProperty, Fv = Object.getOwnPropertySymbols, _D = Object.prototype.hasOwnProperty, eI = Object.prototype.propertyIsEnumerable, Hv = (e, n, r) => n in e ? xD(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Pe = (e, n) => {
  for (var r in n || (n = {})) _D.call(n, r) && Hv(e, r, n[r]);
  if (Fv)
    for (var r of Fv(n)) eI.call(n, r) && Hv(e, r, n[r]);
  return e;
}, nI = Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe({
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
}, UB), IB), aD), pD), gD), mD), nD), HB), dD), YB), kD), AB), rD), WB), OD), ID), MD), jB), KB), VB), GD), ZD), CD), qD), WD), UD), eD), KD), wD), QD), XB), BD), MB), LB), FB), FD), DB), _B), PD), SD), $D), tD), RB), AD), hD), ZB), JB), YD), LD), JD), XD), QB), xB), ED), zD), TD), VD), NB), GB), oD), iD), lD), sD), uD), bD), cD), fD), vD), yD), DD), HD), jD), qB), ND), RD), rI = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, tI = {
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
}, oI = {
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
}, aI = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, iI = { "--avatar-group-offset": "-10px" }, lI = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, sI = {
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
}, uI = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, dI = {
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
}, cI = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, fI = {
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
}, vI = {
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
}, pI = {
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
}, mI = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, gI = {
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
}, hI = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, bI = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, yI = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, wI = {
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
}, kI = {
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
}, $I = {
  "--date-input-picker-width": "320px",
  "--date-input-time-select-separator-color": "var(--color-on-surface-variant)",
  "--date-input-time-select-border-color": "var(--color-outline)",
  "--date-input-time-select-active-color": "var(--color-primary)"
}, SI = {
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
}, CI = {
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
}, PI = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, OI = {
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
}, zI = {
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
}, TI = {
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
}, EI = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, BI = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, DI = { "--icon-size": "20px" }, II = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "8px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, MI = {
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
}, AI = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, NI = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, RI = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, VI = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, LI = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, FI = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px",
  "--menu-large-border-radius": "16px"
}, HI = {
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
}, UI = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-large-border-radius": "16px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, jI = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, YI = {
  "--otp-input-gutter": "8px",
  "--otp-input-cell-height": "48px",
  "--otp-input-cell-max-width": "48px",
  "--otp-input-input-font-size": "20px"
}, WI = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, KI = {
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
}, qI = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-surface-low-background": "var(--color-surface-container-low)",
  "--paper-outlined-background": "transparent",
  "--paper-filled-background": "var(--color-surface-container-highest)",
  "--paper-outline-color": "var(--color-outline)",
  "--paper-border-radius": "12px",
  "--paper-active-color": "var(--color-primary)",
  "--paper-active-opacity": "0.2"
}, XI = {
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
}, GI = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, ZI = {
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
}, JI = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, QI = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, xI = {
  "--rail-navigation-width": "80px",
  "--rail-navigation-background": "var(--color-surface-container)",
  "--rail-navigation-border-color": "var(--color-outline)",
  "--rail-navigation-padding": "12px 0",
  "--rail-navigation-start-padding": "4px 0",
  "--rail-navigation-end-padding": "4px 0",
  "--rail-navigation-item-gap": "4px"
}, _I = {
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
}, eM = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, nM = {
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
}, rM = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, tM = {
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
}, oM = {
  "--segmented-buttons-border-color": "#79747E",
  "--segmented-buttons-border-radius": "100px",
  "--segmented-buttons-border-width": "1px",
  "--segmented-buttons-error-border-color": "var(--color-danger)",
  "--segmented-buttons-error-color": "var(--color-danger)",
  "--segmented-buttons-error-checked-background": "hsla(var(--hsl-danger), 0.12)"
}, aM = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-large-border-radius": "16px",
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
}, iM = {
  "--shimmer-text-color": "var(--color-on-surface-variant)",
  "--shimmer-text-highlight-color": "#fff",
  "--shimmer-text-duration": "1.4s",
  "--shimmer-text-angle": "100deg"
}, lM = {
  "--signature-background-color": "var(--color-surface-container-low)",
  "--signature-stroke-color": "#1D1B20",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, sM = {
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
}, uM = {
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
}, dM = {
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
}, cM = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, fM = {
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
}, vM = {
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
}, pM = {
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
}, mM = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, gM = {
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
}, hM = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, bM = {
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
}, yM = {
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
}, wM = {
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
}, kM = {
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
}, $M = { "--watermark-content-color": "#808080" }, SM = Object.defineProperty, Uv = Object.getOwnPropertySymbols, CM = Object.prototype.hasOwnProperty, PM = Object.prototype.propertyIsEnumerable, jv = (e, n, r) => n in e ? SM(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Oe = (e, n) => {
  for (var r in n || (n = {})) CM.call(n, r) && jv(e, r, n[r]);
  if (Uv)
    for (var r of Uv(n)) PM.call(n, r) && jv(e, r, n[r]);
  return e;
}, OM = Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe({
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
}, fI), tI), BI), FI), UI), HI), OI), cI), NI), pI), qI), aI), zI), mI), QI), tM), oM), vI), gI), yM), wM), hM), mM), gM), bI), nM), uI), dI), dM), rI), CI), JI), GI), XI), TI), lI), aM), jI), uM), kM), bM), $I), SI), pM), eM), xI), _I), iI), sI), yI), wI), kI), PI), EI), DI), II), MI), AI), YI), RI), VI), LI), WI), KI), ZI), rM), sM), cM), fM), vM), $M), oI), hI), iM), lM);
function zM(e, n = {}) {
  const { rootFontSize: r = 16, unitPrecision: t = 6 } = n;
  return gd(e, (o) => `${Number((o / r).toFixed(t))}rem`);
}
function TM(e, n = {}) {
  const { viewportWidth: r = 375, viewportUnit: t = "vmin", unitPrecision: o = 6 } = n;
  return gd(e, (a) => `${Number((a / r * 100).toFixed(o))}${t}`);
}
var EM = {
  dark: BB,
  md3Light: OM,
  md3Dark: nI,
  toViewport: TM,
  toRem: zM,
  convert: gd
}, v7 = null, Bu = EM, gr = [
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
], Yv = [
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
], i0 = {
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
}, l0 = (e, n) => e === "24hr" || n === "am", hd = (e, n, r) => {
  const t = gr.findIndex((a) => Z(a) === Z(r)), o = l0(e, n) ? r : rr[t];
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
}, s0 = (e) => {
  var n, r;
  const { time: t, format: o, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: d, hourNum: c } = hd(o, a, i);
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
    const { hour: g, minute: h } = sr(l), { hour: m, minute: w } = sr(s);
    f = m === c && t < w || g === c && t > h;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (r = e.allowedTime) == null ? void 0 : r.minutes(t)), f || v;
}, u0 = (e) => {
  var n, r;
  const { time: t, format: o, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: d } = e, { hourStr: c, hourNum: f } = hd(o, a, i);
  let v = !1, g = !1;
  if (d.includes(c)) return !0;
  if (s && !u) {
    const { hour: h, minute: m, second: w } = sr(s);
    v = h === f && m < l || m === l && t > w;
  }
  if (!s && u) {
    const { hour: h, minute: m, second: w } = sr(u);
    v = h === f && m > l || m === l && t > w;
  }
  if (s && u) {
    const { hour: h, minute: m, second: w } = sr(s), { hour: $, minute: y, second: z } = sr(u);
    v = h === f && m < l || $ === f && y > l || h === f && m === l && t > w || $ === f && y === l && t < z;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (r = e.allowedTime) == null ? void 0 : r.seconds(t)), v || g;
}, { n: BM, classes: DM } = oe("time-picker");
function IM(e, n) {
  return b(), k("div", { class: p(e.n("clock")) }, [
    L("div", {
      class: p(e.n("clock-hand")),
      style: J(e.handStyle)
    }, null, 6),
    (b(!0), k(De, null, Ye(e.timeScales, (r, t) => (b(), k("div", {
      key: r,
      class: p(e.classes(e.n("clock-item"), [e.isActive(t, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
      style: J(e.getStyle(t, r, !1))
    }, ve(r), 7))), 128)),
    e.format === "24hr" && e.type === "hour" ? (b(), k("div", {
      key: 0,
      ref: "inner",
      class: p(e.n("clock-inner"))
    }, [(b(!0), k(De, null, Ye(e.hours24, (r, t) => (b(), k("div", {
      key: r,
      class: p(e.classes(e.n("clock-item"), [e.isActive(t, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
      style: J(e.getStyle(t, r, !0))
    }, ve(r), 7))), 128))], 2)) : X("v-if", !0)
  ], 2);
}
var d0 = te({
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
    const r = O(null), t = O([]), o = O([]), a = S(() => ({
      transform: `rotate(${Z(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = S(() => {
      if (e.rad === void 0) return;
      const h = e.rad / 30;
      return h >= 0 ? h : h + 12;
    }), l = S(() => e.type === "hour" ? gr : Yv), s = (h, m) => {
      h = h ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const w = e.type === "minute" ? s0 : u0, $ = {
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
      return m && e.type === "minute" && Reflect.deleteProperty($, "minute"), w($);
    }, u = () => {
      if (i.value === void 0) return e.color;
      const h = e.isInner ? rr[i.value] : l.value[i.value];
      return l.value === Yv ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : c(h) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, d = (h, m) => m ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), c = (h) => {
      if (e.type === "hour") {
        if (l0(e.format, e.ampm)) return t.value.includes(h);
        const m = gr.findIndex((w) => w === h);
        return o.value.includes(m);
      }
      return s(h, !0);
    }, f = (h, m, w) => {
      const $ = 2 * Math.PI / 12 * h - Math.PI / 2, y = 50 * (1 + Math.cos($)), z = 50 * (1 + Math.sin($)), T = () => d(h, w) ? c(m) ? {
        backgroundColor: "var(--time-picker-clock-item-disable-background)",
        color: "var(--time-picker-clock-item-disable-color)"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: P, color: R } = T();
      return {
        left: `${y}%`,
        top: `${z}%`,
        backgroundColor: P,
        color: R
      };
    }, v = () => {
      const { width: h, height: m } = kn(r.value);
      return {
        width: h,
        height: m
      };
    }, g = () => {
      if (i.value === void 0) return;
      const h = e.ampm === "am" ? gr : rr;
      return Gr(h[i.value], 2, "0");
    };
    return me([i, () => e.isInner], ([h, m], [w, $]) => {
      if (h === w && m === $ || e.type !== "hour" || i.value === void 0) return;
      const y = m ? rr[i.value] : g(), z = e.useSeconds ? `:${e.time.second}` : "", T = `${y}:${e.time.minute}${z}`;
      e.preventNextUpdate || n("update", T), n("change-prevent-update");
    }), me(() => e.rad, (h, m) => {
      if (e.type === "hour" || h === void 0 || m === void 0) return;
      const w = h / 6 >= 0 ? h / 6 : h / 6 + 60;
      if (w === (m / 6 >= 0 ? m / 6 : m / 6 + 60)) return;
      let $;
      const { hourStr: y } = hd(e.format, e.ampm, e.time.hour);
      if (e.type === "minute" && ($ = `${y}:${ln().minute(w).format("mm")}${e.useSeconds ? `:${e.time.second}` : ""}`), e.type === "second") {
        const z = ln().second(w).format("ss"), T = e.useSeconds ? `:${z}` : "";
        $ = `${y}:${e.time.minute}${T}`;
      }
      n("update", $);
    }), me([
      () => e.max,
      () => e.min,
      () => e.allowedTime
    ], ([h, m, w]) => {
      if (t.value = [], h && !m) {
        const { hour: $ } = sr(h), y = gr.filter((T) => Z(T) > $), z = rr.filter((T) => Z(T) > $);
        t.value = [...y, ...z];
      }
      if (!h && m) {
        const { hour: $ } = sr(m), y = gr.filter((T) => Z(T) < $), z = rr.filter((T) => Z(T) < $);
        t.value = [...y, ...z];
      }
      if (h && m) {
        const { hour: $ } = sr(h), { hour: y } = sr(m), z = gr.filter((P) => Z(P) < y || Z(P) > $), T = rr.filter((P) => Z(P) < y || Z(P) > $);
        t.value = [...z, ...T];
      }
      if (w?.hours) {
        const { hours: $ } = w, y = gr.filter((T) => !$(Z(T))), z = rr.filter((T) => !$(Z(T)));
        t.value = [.../* @__PURE__ */ new Set([
          ...t.value,
          ...y,
          ...z
        ])];
      }
      o.value = t.value.map(($) => rr.findIndex((y) => $ === y)).filter(($) => $ >= 0);
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: BM,
      classes: DM,
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
d0.render = IM;
var MM = d0, { name: AM, n: NM, classes: RM } = oe("time-picker");
function VM(e, n) {
  var r;
  const t = x("clock");
  return b(), k("div", {
    ref: "picker",
    class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
  }, [
    L("div", {
      class: p(e.n("title")),
      style: J({ background: e.titleColor || e.color })
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
var c0 = te({
  name: AM,
  components: { Clock: MM },
  props: i0,
  setup(e) {
    const n = O(null), r = O(null), t = O(null), o = O(!1), a = O(!1), i = O(!1), l = O(!1), s = O(!1), u = O(!1), d = O(!1), c = O(0), f = O(0), v = O(), g = O("hour"), h = O("am"), m = O({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = $n({
      x: 0,
      y: 0
    }), $ = $n({
      x: [],
      y: []
    }), y = S(() => g.value === "hour" ? v.value : g.value === "minute" ? c.value : f.value), { t: z } = kr();
    me(() => e.modelValue, (Q) => {
      if (Q === void 0 || Q === "") {
        T();
        return;
      }
      const { hour: ne, minute: pe, second: $e } = sr(Q), W = ln().hour(ne).format("hh"), ae = ln().hour(ne).format("HH"), Ee = ln().minute(pe).format("mm"), Ue = ln().second($e).format("ss");
      v.value = (W === "12" ? 0 : Z(W)) * 30, c.value = Z(Ee) * 6, f.value = Z(Ue) * 6, m.value = B(Q), e.format !== "24hr" && (h.value = Gr(`${ne}`, 2, "0") === ae && rr.includes(ae) ? "pm" : "am"), o.value = e.format === "24hr" && rr.includes(ae);
    }, { immediate: !0 });
    function T() {
      v.value = void 0, c.value = 0, f.value = 0, m.value = {
        hour: "00",
        minute: "00",
        second: "00"
      }, h.value = "am";
    }
    function P(Q) {
      C(e["onUpdate:modelValue"], Q), C(e.onChange, Q);
    }
    function R(Q) {
      return Q * 57.29577951308232;
    }
    function H(Q) {
      l.value = !1, d.value = !1, g.value = Q;
    }
    function A(Q) {
      const { disableHour: ne } = t.value, pe = gr.findIndex((W) => Z(W) === Z(m.value.hour)), $e = Q === "am" ? gr : rr;
      return [...$e.slice(pe), ...$e.slice(0, pe)].find((W, ae) => (a.value = ae !== 0, !ne.includes(W)));
    }
    function I(Q) {
      if (e.readonly) return;
      h.value = Q;
      const ne = A(Q);
      if (!ne) return;
      const pe = e.useSeconds ? `:${m.value.second}` : "";
      P(`${Gr(ne, 2, "0")}:${m.value.minute}${pe}`);
    }
    function E(Q, ne) {
      const pe = Q >= $.x[0] && Q <= $.x[1], $e = ne >= $.y[0] && ne <= $.y[1];
      return pe && $e;
    }
    function B(Q) {
      const ne = e.format === "24hr" ? "HH" : "hh", { hour: pe, minute: $e, second: W } = sr(Q);
      return {
        hour: ln().hour(pe).format(ne),
        minute: ln().minute($e).format("mm"),
        second: ln().second(W).format("ss")
      };
    }
    function N(Q) {
      const ne = Q / 30;
      return ne >= 0 ? ne : ne + 12;
    }
    function M() {
      const { width: Q, height: ne } = t.value.getSize();
      return {
        rangeXMin: w.x - Q / 2 - 8,
        rangeXMax: w.x + Q / 2 + 8,
        rangeYMin: w.y - ne / 2 - 8,
        rangeYMax: w.y + ne / 2 + 8
      };
    }
    function D(Q, ne, pe) {
      const { disableHour: $e } = t.value;
      i.value = E(Q, ne);
      const W = Math.round(pe / 30) * 30 + 90, ae = N(W), Ee = o.value ? gr[ae] : rr[ae];
      if ($e.includes(Ee) || (o.value = e.format === "24hr" ? E(Q, ne) : !1), o.value !== i.value) return;
      const Ue = o.value || h.value === "pm" ? rr[ae] : gr[ae];
      u.value = $e.includes(Ue), !u.value && (v.value = W, l.value = !0);
    }
    function j(Q) {
      const { disableHour: ne } = t.value, pe = Math.round(Q / 6) * 6 + 90, $e = {
        time: pe / 6 >= 0 ? pe / 6 : pe / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: m.value.hour,
        max: e.max,
        min: e.min,
        disableHour: ne,
        allowedTime: e.allowedTime
      };
      d.value = s0($e), !d.value && (c.value = pe, s.value = !0);
    }
    function K(Q) {
      const { disableHour: ne } = t.value, pe = Math.round(Q / 6) * 6 + 90, $e = {
        time: pe / 6 >= 0 ? pe / 6 : pe / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: m.value.hour,
        minute: Z(m.value.minute),
        max: e.max,
        min: e.min,
        disableHour: ne,
        allowedTime: e.allowedTime
      };
      u0($e) || (f.value = pe);
    }
    function G() {
      const { left: Q, top: ne, width: pe, height: $e } = kn(n.value);
      if (w.x = Q + pe / 2, w.y = ne + $e / 2, g.value === "hour" && e.format === "24hr") {
        const { rangeXMin: W, rangeXMax: ae, rangeYMin: Ee, rangeYMax: Ue } = M();
        $.x = [W, ae], $.y = [Ee, Ue];
      }
    }
    function ce(Q) {
      if (Ze(Q), e.readonly) return;
      G();
      const { clientX: ne, clientY: pe } = Q.touches[0], $e = ne - w.x, W = pe - w.y, ae = Math.round(R(Math.atan2(W, $e)));
      g.value === "hour" ? D(ne, pe, ae) : g.value === "minute" ? j(ae) : K(ae);
    }
    function ge() {
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
      getRad: y,
      time: m,
      container: n,
      inner: t,
      picker: r,
      isInner: o,
      type: g,
      ampm: h,
      isPreventNextUpdate: a,
      n: NM,
      classes: RM,
      t: gn,
      pt: z,
      moveHand: ce,
      checkPanel: H,
      checkAmpm: I,
      end: ge,
      update: P,
      changePreventUpdate: de,
      formatElevation: zn
    };
  }
});
c0.render = VM;
var Tl = c0;
ue(Tl);
fe(Tl, i0);
var p7 = Tl, Du = Tl, f0 = {
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
}, { n: Xn, classes: Wv } = oe("tree-menu");
function LM(e, n) {
  const r = x("maybe-v-node"), t = x("var-tree-menu-option"), o = x("var-collapse-transition");
  return b(), k("div", { class: p(e.n("option")) }, [e.option.type === "divider" ? (b(), k("div", {
    key: 0,
    class: p(e.n("divider"))
  }, null, 2)) : e.option.type === "group" ? (b(), k(De, { key: 1 }, [U(r, { is: e.renderGroupLabel() }, null, 8, ["is"]), L("div", null, [(b(!0), k(De, null, Ye(e.option.children, (a) => (b(), ke(t, {
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
    default: se(() => [L("div", { class: p(e.n("children")) }, [(b(!0), k(De, null, Ye(e.option.children, (a) => (b(), ke(t, {
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
var v0 = te({
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
      return We(Fn("div", {
        class: Wv(Xn("item"), [e.option.active, Xn("--item-active")], [e.option.activePath, Xn("--item-active-path")], [e.option.disabled, Xn("--item-disabled")], [e.ripple && !e.option.disabled, Xn("--item-ripple-enabled")]),
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
      return e.option.hasChildren ? Fn("span", { class: Wv(Xn("expand-icon"), [e.option.expanded, Xn("--expand-icon-expanded")]) }, [Fn(Je, {
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
v0.render = LM;
var FM = v0, { name: HM, n: UM, classes: jM } = oe("tree-menu");
function YM(e, n) {
  const r = x("tree-menu-option");
  return b(), k("nav", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.bordered, e.n("--border")])),
    style: J(e.styles)
  }, [
    e.$slots.start ? F(e.$slots, "start", { key: 0 }) : X("v-if", !0),
    (b(!0), k(De, null, Ye(e.treeMeta.options, (t) => (b(), ke(r, {
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
var p0 = te({
  name: HM,
  components: { TreeMenuOption: FM },
  props: f0,
  setup(e) {
    const n = yn(e, "active"), r = yn(e, "expandedValues", { defaultValue: [] }), t = O({
      options: [],
      optionByValue: /* @__PURE__ */ new Map()
    }), o = S(() => e.indent == null ? {} : { "--tree-menu-item-indent": Te(e.indent) });
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
      const v = /* @__PURE__ */ new Map(), g = h(e.options);
      g.forEach(m);
      function h(w, $, y = 0) {
        return w.reduce((z, T) => {
          if (T.show === !1) return z;
          const P = T.type, R = T[e.valueKey], H = T[e.childrenKey], A = {
            option: T,
            type: P,
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
            level: y
          }, I = P === "group" ? y : y + 1;
          return A.children = Ke(H) ? h(H, A, I) : [], A.hasChildren = !P && A.children.length > 0, z.push(A), z;
        }, []);
      }
      function m(w) {
        v.set(w.value, w), w.children.forEach(m);
      }
      return {
        options: g,
        optionByValue: v
      };
    }
    function i() {
      var v;
      const g = new Set((v = r.value) != null ? v : []), h = n.value == null ? void 0 : t.value.optionByValue.get(n.value), m = new Set(h ? u(h) : []);
      t.value.options.forEach((w) => {
        l(w, g, m);
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
      n: UM,
      classes: jM,
      treeMeta: t,
      styles: o,
      handleSelect: c,
      handleToggle: f
    };
  }
});
p0.render = YM;
var El = p0;
ue(El);
fe(El, f0);
var m7 = El, Iu = El, m0 = {
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
}), { name: WM, n: KM, classes: qM } = oe("uploader"), XM = 0, GM = ["onClick"], ZM = ["onClick"], JM = ["src", "alt"], QM = ["tabindex"], xM = [
  "multiple",
  "accept",
  "capture",
  "disabled"
], _M = ["src"];
function eA(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), o = x("var-form-details"), a = x("var-popup"), i = _e("ripple"), l = _e("hover");
  return b(), k("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [
    L("div", { class: p(e.n("file-list")) }, [(b(!0), k(De, null, Ye(e.files, (s) => We((b(), k("div", {
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
      }, null, 8, ["class"])], 10, ZM)]) : X("v-if", !0),
      s.cover ? (b(), k("img", {
        key: 1,
        role: "img",
        class: p(e.n("file-cover")),
        style: J({ objectFit: s.fit }),
        src: s.cover,
        alt: s.name
      }, null, 14, JM)) : X("v-if", !0),
      L("div", { class: p(e.n("file-indicator")) }, [L("div", {
        class: p(e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])),
        style: J({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
      }, null, 6)], 2)
    ], 10, GM)), [[i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]])), 128)), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? We((b(), k("div", {
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
    }, null, 42, xM), F(e.$slots, "default", {}, () => [U(r, {
      class: p(e.n("action-icon")),
      "var-uploader-cover": "",
      name: "plus"
    }, null, 8, ["class"]), U(t, {
      hovering: e.hovering && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly,
      focusing: e.isFocusing && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly
    }, null, 8, ["hovering", "focusing"])])], 42, QM)), [[i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default }], [
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
        }, null, 10, _M)) : X("v-if", !0)];
      }),
      _: 1
    }, 8, ["show", "class"])
  ], 2);
}
var g0 = te({
  name: WM,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarIcon: Je,
    VarPopup: st,
    VarFormDetails: Hn,
    VarHoverOverlay: Zn
  },
  props: m0,
  setup(e) {
    const n = O(!1), r = O(null), t = O(null), o = O(!1), a = O(null), i = S(() => {
      const { maxlength: de, modelValue: { length: Q } } = e;
      return tr(de) ? `${Q} / ${de}` : "";
    }), { form: l, bindForm: s } = Wn(), { errorMessage: u, validateWithTrigger: d, validate: c, resetValidation: f } = xn(), { hovering: v, handleHovering: g } = ur(), h = S(() => {
      const { modelValue: de, hideList: Q } = e;
      return Q ? [] : de;
    });
    let m = !1;
    const w = {
      getSuccess: N,
      getError: M,
      getLoading: D
    };
    C(s, {
      validate: ce,
      resetValidation: f,
      reset: ge
    }), xe(() => window, "keydown", $), xe(() => window, "keyup", y), me(() => e.modelValue, () => {
      !m && G("onChange"), m = !1;
    }, { deep: !0 });
    function $(de) {
      n.value && ((de.key === " " || de.key === "Enter") && de.preventDefault(), de.key === "Enter" && r.value.click());
    }
    function y(de) {
      !n.value || de.key !== " " || (de.preventDefault(), r.value.click());
    }
    function z(de) {
      const { disabled: Q, previewed: ne, preventDefaultPreview: pe, onPreview: $e } = e;
      if (l?.disabled.value || Q || !ne || (C($e, $n(de)), pe)) return;
      const { url: W } = de;
      if (Dc(W)) {
        To(W);
        return;
      }
      Ic(W) && (a.value = de, o.value = !0);
    }
    function T(de) {
      return {
        id: XM++,
        url: "",
        cover: "",
        name: de.name,
        file: de,
        progress: 0
      };
    }
    function P(de) {
      const { files: Q } = de.target;
      return Array.from(Q);
    }
    function R(de) {
      return la(this, null, function* () {
        const Q = de.file;
        if (e.resolveType === "default" && Q.type.startsWith("image") || e.resolveType === "data-url") {
          const ne = yield j0(Q);
          de.cover = ne, de.url = ne;
        }
        return de;
      });
    }
    function H(de) {
      return de.map(R);
    }
    function A(de) {
      const { onBeforeRead: Q } = e;
      return de.map((ne) => new Promise((pe) => {
        Q || pe({
          valid: !0,
          varFile: ne
        });
        const $e = Kr(C(Q, $n(ne)));
        Promise.all($e).then((W) => {
          pe({
            valid: W.every(Boolean),
            varFile: ne
          });
        });
      }));
    }
    function I(de) {
      return la(this, null, function* () {
        const { maxsize: Q, maxlength: ne, modelValue: pe, onOversize: $e, onAfterRead: W, onBeforeFilter: ae, readonly: Ee, disabled: Ue } = e;
        if (l?.disabled.value || l?.readonly.value || Ue || Ee) return;
        const nn = (Y) => Y.filter((re) => re.file.size > Z(Q) ? (C($e, $n(re)), !1) : !0), Xe = (Y) => {
          const re = Math.min(Y.length, Z(ne) - pe.length);
          return Y.slice(0, re);
        }, en = (Y) => la(null, null, function* () {
          if (!ae) return Y;
          const re = Kr(ae);
          for (const we of re) Y = yield we(Y);
          return Y;
        });
        let on = P(de).map(T);
        on = yield en(on), on = Q != null ? nn(on) : on, on = ne != null ? Xe(on) : on;
        const ye = yield Promise.all(H(on)), ee = (yield Promise.all(A(ye))).filter(({ valid: Y }) => Y).map(({ varFile: Y }) => Y);
        C(e["onUpdate:modelValue"], [...pe, ...ee]), de.target.value = "", ee.forEach((Y) => C(W, $n(Y)));
      });
    }
    function E(de) {
      return la(this, null, function* () {
        const { disabled: Q, readonly: ne, modelValue: pe, onBeforeRemove: $e, onRemove: W } = e;
        if (l?.disabled.value || l?.readonly.value || Q || ne) return;
        if ($e) {
          const Ee = Kr(C($e, $n(de)));
          if ((yield Promise.all(Ee)).some((Ue) => !Ue)) return;
        }
        const ae = pe.filter((Ee) => Ee !== de);
        C(W, $n(de)), G("onRemove"), C(e["onUpdate:modelValue"], ae);
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
    function D() {
      return e.modelValue.filter((de) => de.state === "loading");
    }
    function j() {
      t.value.click();
    }
    function K() {
      a.value = null, o.value = !1, To.close();
    }
    function G(de) {
      Ne(() => {
        const { validateTrigger: Q, rules: ne, modelValue: pe } = e;
        d(Q, de, ne, pe, w);
      });
    }
    function ce() {
      return c(e.rules, e.modelValue, w);
    }
    function ge() {
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
      n: KM,
      classes: qM,
      formatElevation: zn,
      toNumber: Z,
      handleHovering: g,
      isHTMLSupportVideo: Ic,
      isHTMLSupportImage: Dc,
      preview: z,
      handleChange: I,
      handleRemove: E,
      getSuccess: N,
      getError: M,
      getLoading: D,
      validate: ce,
      resetValidation: f,
      reset: ge,
      chooseFile: j,
      closePreview: K,
      handleActionClick: B,
      toSizeUnit: Te
    };
  }
});
g0.render = eA;
var Bl = g0;
ue(Bl);
fe(Bl, m0);
var g7 = Bl, Mu = Bl, h0 = {
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
}, nA = Object.defineProperty, rA = Object.defineProperties, tA = Object.getOwnPropertyDescriptors, Kv = Object.getOwnPropertySymbols, oA = Object.prototype.hasOwnProperty, aA = Object.prototype.propertyIsEnumerable, qv = (e, n, r) => n in e ? nA(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, iA = (e, n) => {
  for (var r in n || (n = {})) oA.call(n, r) && qv(e, r, n[r]);
  if (Kv)
    for (var r of Kv(n)) aA.call(n, r) && qv(e, r, n[r]);
  return e;
}, lA = (e, n) => rA(e, tA(n)), sA = (e, n, r) => new Promise((t, o) => {
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
}), { name: uA, n: dA, classes: cA } = oe("watermark"), fA = { ref: "svgRef" }, vA = [
  "viewBox",
  "width",
  "height"
], pA = ["width", "height"], mA = [
  "href",
  "xlink:href",
  "x",
  "y",
  "width",
  "height"
];
function gA(e, n) {
  return b(), k("div", { class: p(e.n()) }, [F(e.$slots, "default"), (b(), ke(Hr, {
    to: "body",
    disabled: !e.fullscreen
  }, [L("div", {
    ref: "containerRef",
    class: p(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
    style: J({
      backgroundImage: `url(${e.watermarkUrl})`,
      zIndex: e.zIndex
    })
  }, [We(L("div", fA, [(b(), k("svg", {
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
  }, [F(e.$slots, "content", {}, () => [L("span", { style: J(lA(iA({}, e.font), {
    fontSize: `${e.font.fontSize}px`,
    color: e.textColor
  })) }, ve(e.content), 5)])], 4)], 8, pA)) : X("v-if", !0), !e.$slots.content && e.image ? (b(), k("image", {
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
  }, null, 12, mA)) : X("v-if", !0)], 12, vA))], 512), [[yr, !1]])], 6)], 8, ["disabled"]))], 2);
}
var b0 = te({
  name: uA,
  props: h0,
  setup(e, { slots: n }) {
    const r = O(""), t = O(""), o = O(""), a = O(null), i = O(null);
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
    ], c, { deep: !0 }), Tr(c), Xt(d);
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
      return sA(this, null, function* () {
        o.value = Ur(i.value).color, e.image && (t.value = yield s()), yield Ne(), d(), r.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: r,
      imageUrl: t,
      textColor: o,
      n: dA,
      classes: cA,
      showContent: l,
      resize: c
    };
  }
});
b0.render = gA;
var Dl = b0;
ue(Dl);
fe(Dl, h0);
var h7 = Dl, Au = Dl, hA = "3.20.9";
function bA(e) {
  rs.install && e.use(rs), ts.install && e.use(ts), os.install && e.use(os), ls.install && e.use(ls), cs.install && e.use(cs), fs.install && e.use(fs), vs.install && e.use(vs), $o.install && e.use($o), ps.install && e.use(ps), ms.install && e.use(ms), gs.install && e.use(gs), hs.install && e.use(hs), Jn.install && e.use(Jn), bs.install && e.use(bs), ys.install && e.use(ys), ws.install && e.use(ws), dt.install && e.use(dt), ks.install && e.use(ks), $a.install && e.use($a), Ss.install && e.use(Ss), Cs.install && e.use(Cs), Ps.install && e.use(Ps), Os.install && e.use(Os), Sa.install && e.use(Sa), vr.install && e.use(vr), zs.install && e.use(zs), Ds.install && e.use(Ds), Rs.install && e.use(Rs), Vs.install && e.use(Vs), Ls.install && e.use(Ls), Ta.install && e.use(Ta), Hs.install && e.use(Hs), Us.install && e.use(Us), Ba.install && e.use(Ba), js.install && e.use(js), Ys.install && e.use(Ys), bo.install && e.use(bo), Ws.install && e.use(Ws), Ks.install && e.use(Ks), Hn.install && e.use(Hn), qs.install && e.use(qs), jn.install && e.use(jn), Zn.install && e.use(Zn), Je.install && e.use(Je), Xs.install && e.use(Xs), To.install && e.use(To), Gs.install && e.use(Gs), Zs.install && e.use(Zs), Ft.install && e.use(Ft), ko.install && e.use(ko), Js.install && e.use(Js), Qs.install && e.use(Qs), St.install && e.use(St), xs.install && e.use(xs), es.install && e.use(es), _s.install && e.use(_s), Yt.install && e.use(Yt), Ht.install && e.use(Ht), Wt.install && e.use(Wt), Ia.install && e.use(Ia), eu.install && e.use(eu), nu.install && e.use(nu), za.install && e.use(za), ru.install && e.use(ru), tu.install && e.use(tu), st.install && e.use(st), ou.install && e.use(ou), au.install && e.use(au), Co.install && e.use(Co), iu.install && e.use(iu), lu.install && e.use(lu), su.install && e.use(su), uu.install && e.use(uu), du.install && e.use(du), vn.install && e.use(vn), cu.install && e.use(cu), Ma.install && e.use(Ma), fu.install && e.use(fu), vu.install && e.use(vu), pu.install && e.use(pu), mu.install && e.use(mu), gu.install && e.use(gu), hu.install && e.use(hu), yu.install && e.use(yu), wu.install && e.use(wu), ku.install && e.use(ku), $u.install && e.use($u), Eo.install && e.use(Eo), Su.install && e.use(Su), Oo.install && e.use(Oo), zo.install && e.use(zo), Cu.install && e.use(Cu), Pu.install && e.use(Pu), Ou.install && e.use(Ou), zu.install && e.use(zu), Tu.install && e.use(Tu), Eu.install && e.use(Eu), Bu.install && e.use(Bu), Du.install && e.use(Du), Da.install && e.use(Da), Iu.install && e.use(Iu), Mu.install && e.use(Mu), Au.install && e.use(Au);
}
var b7 = {
  version: hA,
  install: bA,
  ActionSheet: rs,
  Alert: ts,
  AppBar: os,
  AutoComplete: ls,
  Avatar: cs,
  AvatarGroup: fs,
  BackTop: vs,
  Badge: $o,
  BottomNavigation: ps,
  BottomNavigationItem: ms,
  Breadcrumb: gs,
  Breadcrumbs: hs,
  Button: Jn,
  ButtonGroup: bs,
  Card: ys,
  Cell: ws,
  Checkbox: dt,
  CheckboxGroup: ks,
  Chip: $a,
  Code: Ss,
  Col: Cs,
  Collapse: Ps,
  CollapseItem: Os,
  CollapseTransition: Sa,
  Context: vr,
  CountTo: zs,
  Countdown: Ds,
  Counter: Rs,
  DataTable: Vs,
  DateInput: Ls,
  DatePicker: Ta,
  Dialog: Hs,
  Divider: Us,
  Drag: Ba,
  Ellipsis: js,
  Fab: Ys,
  FieldDecorator: bo,
  FloatingPanel: Ws,
  Form: Ks,
  FormDetails: Hn,
  HighlighterProvider: qs,
  Hover: jn,
  HoverOverlay: Zn,
  Icon: Je,
  Image: Xs,
  ImagePreview: To,
  IndexAnchor: Gs,
  IndexBar: Zs,
  Input: Ft,
  Lazy: ko,
  Link: Js,
  List: Qs,
  Loading: St,
  LoadingBar: xs,
  Locale: es,
  LocaleProvider: _s,
  Menu: Yt,
  MenuOption: Ht,
  MenuSelect: Wt,
  Option: Ia,
  OtpInput: eu,
  Overlay: nu,
  Pagination: za,
  Paper: ru,
  Picker: tu,
  Popup: st,
  Progress: ou,
  PullRefresh: au,
  Radio: Co,
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
  Sticky: Eo,
  StyleProvider: Su,
  Swipe: Oo,
  SwipeItem: zo,
  Switch: Cu,
  Tab: Pu,
  TabItem: Ou,
  Table: zu,
  Tabs: Tu,
  TabsItems: Eu,
  Themes: Bu,
  TimePicker: Du,
  Tooltip: Da,
  TreeMenu: Iu,
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
  $o as Badge,
  ps as BottomNavigation,
  ms as BottomNavigationItem,
  gs as Breadcrumb,
  hs as Breadcrumbs,
  Jn as Button,
  bs as ButtonGroup,
  ys as Card,
  ws as Cell,
  dt as Checkbox,
  ks as CheckboxGroup,
  $a as Chip,
  Ss as Code,
  Cs as Col,
  Ps as Collapse,
  Os as CollapseItem,
  Sa as CollapseTransition,
  vr as Context,
  zs as CountTo,
  Ds as Countdown,
  Rs as Counter,
  Vs as DataTable,
  Ls as DateInput,
  Ta as DatePicker,
  Hs as Dialog,
  Us as Divider,
  Ba as Drag,
  js as Ellipsis,
  Ys as Fab,
  bo as FieldDecorator,
  Ws as FloatingPanel,
  Ks as Form,
  Hn as FormDetails,
  qs as HighlighterProvider,
  jn as Hover,
  Zn as HoverOverlay,
  Je as Icon,
  Xs as Image,
  To as ImagePreview,
  Gs as IndexAnchor,
  Zs as IndexBar,
  Ft as Input,
  ko as Lazy,
  Js as Link,
  Qs as List,
  St as Loading,
  xs as LoadingBar,
  es as Locale,
  _s as LocaleProvider,
  Yt as Menu,
  Ht as MenuOption,
  Wt as MenuSelect,
  Ia as Option,
  eu as OtpInput,
  nu as Overlay,
  ds as PIXEL,
  za as Pagination,
  ru as Paper,
  tu as Picker,
  st as Popup,
  ou as Progress,
  au as PullRefresh,
  Co as Radio,
  iu as RadioGroup,
  lu as RailNavigation,
  su as RailNavigationItem,
  uu as Rate,
  du as Result,
  vn as Ripple,
  cu as Row,
  Rb as SNACKBAR_TYPE,
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
  Eo as Sticky,
  Su as StyleProvider,
  Oo as Swipe,
  zo as SwipeItem,
  Cu as Switch,
  Pu as Tab,
  Ou as TabItem,
  zu as Table,
  Tu as Tabs,
  Eu as TabsItems,
  Bu as Themes,
  Du as TimePicker,
  Da as Tooltip,
  Iu as TreeMenu,
  Mu as Uploader,
  Au as Watermark,
  BA as _ActionSheetComponent,
  DA as _AlertComponent,
  IA as _AppBarComponent,
  HA as _AutoCompleteComponent,
  jA as _AvatarComponent,
  YA as _AvatarGroupComponent,
  qA as _BackTopComponent,
  XA as _BadgeComponent,
  GA as _BottomNavigationComponent,
  ZA as _BottomNavigationItemComponent,
  JA as _BreadcrumbComponent,
  QA as _BreadcrumbsComponent,
  KA as _ButtonComponent,
  xA as _ButtonGroupComponent,
  _A as _CardComponent,
  eN as _CellComponent,
  RA as _CheckboxComponent,
  nN as _CheckboxGroupComponent,
  rN as _ChipComponent,
  tN as _CodeComponent,
  oN as _ColComponent,
  aN as _CollapseComponent,
  iN as _CollapseItemComponent,
  lN as _CollapseTransitionComponent,
  CA as _ContextComponent,
  sN as _CountToComponent,
  uN as _CountdownComponent,
  dN as _CounterComponent,
  vN as _DataTableComponent,
  mN as _DateInputComponent,
  pN as _DatePickerComponent,
  gN as _DialogComponent,
  hN as _DividerComponent,
  bN as _DragComponent,
  wN as _EllipsisComponent,
  kN as _FabComponent,
  AA as _FieldDecoratorComponent,
  $N as _FloatingPanelComponent,
  SN as _FormComponent,
  MA as _FormDetailsComponent,
  CN as _HighlighterProviderComponent,
  zA as _HoverComponent,
  TA as _HoverOverlayComponent,
  EA as _IconComponent,
  PN as _ImageComponent,
  TN as _ImagePreviewComponent,
  BN as _IndexAnchorComponent,
  DN as _IndexBarComponent,
  NA as _InputComponent,
  UA as _LazyComponent,
  IN as _LinkComponent,
  MN as _ListComponent,
  AN as _LoadingBarComponent,
  WA as _LoadingComponent,
  SA as _LocaleComponent,
  NN as _LocaleProviderComponent,
  LA as _MenuComponent,
  VA as _MenuOptionComponent,
  FA as _MenuSelectComponent,
  RN as _OptionComponent,
  VN as _OtpInputComponent,
  LN as _OverlayComponent,
  cN as _PaginationComponent,
  FN as _PaperComponent,
  HN as _PickerComponent,
  PA as _PopupComponent,
  UN as _ProgressComponent,
  jN as _PullRefreshComponent,
  fN as _RadioComponent,
  YN as _RadioGroupComponent,
  WN as _RailNavigationComponent,
  KN as _RailNavigationItemComponent,
  qN as _RateComponent,
  XN as _ResultComponent,
  OA as _RippleComponent,
  GN as _RowComponent,
  ZN as _SegmentedButtonComponent,
  JN as _SegmentedButtonsComponent,
  QN as _SelectComponent,
  xN as _ShimmerTextComponent,
  _N as _SignatureComponent,
  e7 as _SkeletonComponent,
  n7 as _SliderComponent,
  r7 as _SnackbarComponent,
  t7 as _SpaceComponent,
  o7 as _StepComponent,
  a7 as _StepsComponent,
  EN as _StickyComponent,
  i7 as _StyleProviderComponent,
  ON as _SwipeComponent,
  zN as _SwipeItemComponent,
  l7 as _SwitchComponent,
  s7 as _TabComponent,
  u7 as _TabItemComponent,
  d7 as _TableComponent,
  c7 as _TabsComponent,
  f7 as _TabsItemsComponent,
  v7 as _ThemesComponent,
  p7 as _TimePickerComponent,
  yN as _TooltipComponent,
  m7 as _TreeMenuComponent,
  g7 as _UploaderComponent,
  h7 as _WatermarkComponent,
  Dp as actionSheetProps,
  qu as add,
  Mp as alertProps,
  Np as appBarProps,
  Sm as avatarGroupProps,
  km as avatarProps,
  Em as backTopProps,
  Dm as badgeProps,
  Rm as bottomNavigationItemProps,
  Mm as bottomNavigationProps,
  Lm as breadcrumbProps,
  Um as breadcrumbsProps,
  Ym as buttonGroupProps,
  Om as buttonProps,
  Km as cardProps,
  Xm as cellProps,
  Zm as checkboxGroupProps,
  Wp as checkboxProps,
  Qm as chipProps,
  _m as codeProps,
  ng as colProps,
  sg as collapseItemProps,
  og as collapseProps,
  dg as collapseTransitionProps,
  fg as countToProps,
  pg as countdownProps,
  zg as counterProps,
  lp as currentMessage,
  Rg as dataTableProps,
  Kg as dateInputProps,
  jg as datePickerProps,
  b7 as default,
  Mn as defaultLazyOptions,
  Gg as dialogProps,
  Jg as dividerProps,
  xg as dragProps,
  rh as ellipsisProps,
  rp as enUS,
  tp as faIR,
  oh as fabProps,
  Ro as fieldDecoratorProps,
  Vp as formDetailsProps,
  lh as formProps,
  Cp as hoverOverlayProps,
  pn as iconProps,
  gm as imageCache,
  ph as imagePreviewProps,
  dh as imageProps,
  hh as indexAnchorProps,
  wh as indexBarProps,
  Ka as inputProps,
  bA as install,
  $h as linkProps,
  Ch as listProps,
  Vz as loadingBarProps,
  jr as loadingProps,
  Xp as menuOptionProps,
  _u as menuProps,
  ya as menuSelectProps,
  sp as merge,
  ip as messages,
  Lh as optionProps,
  Uh as otpInputProps,
  Yh as overlayProps,
  Eg as paginationProps,
  Wh as paperProps,
  qh as pickerProps,
  xt as popupProps,
  Gh as progressProps,
  Jh as pullRefreshProps,
  xh as radioGroupProps,
  Dg as radioProps,
  tb as railNavigationItemProps,
  eb as railNavigationProps,
  ab as rateProps,
  lb as resultProps,
  mb as rowProps,
  hb as segmentedButtonProps,
  wb as segmentedButtonsProps,
  $b as selectProps,
  Pb as shimmerTextProps,
  zb as signatureProps,
  Eb as skeletonProps,
  Db as sliderProps,
  pd as snackbarProps,
  Fb as spaceProps,
  Hb as stepProps,
  Yb as stepsProps,
  mo as stickyProps,
  Kb as styleProviderProps,
  dd as swipeProps,
  Xb as switchProps,
  gn as t,
  xb as tabItemProps,
  Zb as tabProps,
  e0 as tableProps,
  o0 as tabsItemsProps,
  r0 as tabsProps,
  i0 as timePickerProps,
  eh as tooltipProps,
  f0 as treeMenuProps,
  m0 as uploaderProps,
  Xu as use,
  ur as useHoverOverlay,
  Ku as useLocale,
  hA as version,
  h0 as watermarkProps,
  Yu as zhCN,
  ap as zhHK,
  Wu as zhTW
};
