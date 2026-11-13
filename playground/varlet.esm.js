import { Comment as w0, Fragment as Be, Teleport as Hr, Transition as bn, TransitionGroup as k0, computed as S, createApp as $0, createBlock as ke, createCommentVNode as X, createElementBlock as k, createElementVNode as L, createSlots as Pr, createTextVNode as Le, createVNode as U, defineComponent as te, getCurrentInstance as Ct, guardReactiveProps as Ao, h as Fn, inject as Nu, isRef as Xv, isVNode as S0, mergeProps as qe, nextTick as Ne, normalizeClass as p, normalizeProps as yt, normalizeStyle as J, onActivated as ft, onBeforeMount as C0, onBeforeUnmount as Pt, onDeactivated as Ot, onMounted as Tr, onUnmounted as Xt, onUpdated as zt, openBlock as b, provide as Ru, reactive as $n, ref as O, renderList as Ye, renderSlot as F, resolveComponent as x, resolveDirective as _e, resolveDynamicComponent as Gt, shallowReactive as P0, shallowRef as Gv, toDisplayString as ve, unref as No, useSlots as O0, vModelText as Zv, vShow as yr, watch as me, withCtx as se, withDirectives as We, withKeys as kd, withModifiers as Nn } from "vue";
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
function qa(e) {
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
  function r(a, o, i) {
    if (!(typeof document > "u")) {
      i = qa({}, n, i), typeof i.expires == "number" && (i.expires = new Date(Date.now() + i.expires * 864e5)), i.expires && (i.expires = i.expires.toUTCString()), a = encodeURIComponent(a).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var l = "";
      for (var s in i)
        i[s] && (l += "; " + s, i[s] !== !0 && (l += "=" + i[s].split(";")[0]));
      return document.cookie = a + "=" + e.write(o, a) + l;
    }
  }
  function t(a) {
    if (!(typeof document > "u" || arguments.length && !a)) {
      for (var o = document.cookie ? document.cookie.split("; ") : [], i = {}, l = 0; l < o.length; l++) {
        var s = o[l].split("="), u = s.slice(1).join("=");
        try {
          var d = decodeURIComponent(s[0]);
          if (i[d] = e.read(u, d), a === d) break;
        } catch {
        }
      }
      return a ? i[a] : i;
    }
  }
  return Object.create({
    set: r,
    get: t,
    remove: function(a, o) {
      r(a, "", qa({}, o, { expires: -1 }));
    },
    withAttributes: function(a) {
      return Gl(this.converter, qa({}, this.attributes, a));
    },
    withConverter: function(a) {
      return Gl(qa({}, this.converter, a), this.attributes);
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
function ua(e, n) {
  return Array.from({ length: e }, (r, t) => n(t));
}
function Er() {
  return typeof window < "u";
}
function Ro() {
  return typeof globalThis < "u" ? globalThis : Er() ? window : typeof global < "u" ? global : self;
}
var { hasOwnProperty: E0 } = Object.prototype;
function ma(e, n) {
  return E0.call(e, n);
}
function po() {
  return Er() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
var D0 = Object.prototype.toString;
function B0(e) {
  return D0.call(e);
}
function En(e) {
  return B0(e).slice(8, -1);
}
function $d(e) {
  return En(e) === "ArrayBuffer";
}
function Ba(e) {
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
  const t = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
  function o(i, l, s, u) {
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
      const d = [...i], c = [...l], f = d.every((v, g) => o(v, c[g], s, u));
      return s.delete(i), u.delete(l), f;
    }
    if (Ke(i) && Ke(l)) {
      if (i.length !== l.length) return !1;
      const d = i.every((c, f) => o(c, l[f], s, u));
      return s.delete(i), u.delete(l), d;
    }
    if (Sn(i) && Sn(l)) {
      const d = [...Object.keys(i), ...Object.getOwnPropertySymbols(i)], c = [...Object.keys(l), ...Object.getOwnPropertySymbols(l)];
      if (d.length !== c.length) return !1;
      const f = d.every((v) => o(i[v], l[v], s, u));
      return s.delete(i), u.delete(l), f;
    }
    return !1;
  }
  return o(e, n, t, a);
}
function Dd(e, n) {
  return I0(e, n, () => {
  });
}
function tr(e) {
  return typeof e == "number";
}
function Jv(e) {
  return tr(e) || Pn(e) && /^[-+]?\d+$/.test(e);
}
function Bt(e) {
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
  return e == null ? 0 : Pn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Ba(e) ? Number(e) : e;
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
function mo(e) {
  const n = Ro();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function V0(...e) {
  return e.map((n) => {
    if (Ke(n)) {
      const [r, t, a = null] = n;
      return r ? t : a;
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
    const r = `${e}-${n}`, t = (a) => a ? a[0] === "$" ? a.replace("$", e) : a.startsWith("--") ? `${r}${a}` : `${r}__${a}` : r;
    return {
      name: L0(r),
      n: t,
      classes: V0
    };
  };
}
function Lt(e) {
  const n = Ro();
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
  const { top: n, bottom: r, left: t, right: a } = kn(e), { width: o, height: i } = kn(window);
  return t <= o && a >= 0 && n <= i && r >= 0;
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
var kA = _v(Ro().sessionStorage), $A = _v(Ro().localStorage);
function C(e, ...n) {
  if (Ke(e)) return e.map((r) => r(...n));
  if (e) return e(...n);
}
function Fu(e, n = 200) {
  let r, t = 0;
  return function a(...o) {
    const i = performance.now(), l = i - t;
    t || (t = i), r && clearTimeout(r), l >= n ? (e.apply(this, o), t = i) : r = setTimeout(() => {
      a.apply(this, o);
    }, n - l);
  };
}
function Hu(e) {
  const n = Object.entries(e).reduce((f, [v, g]) => (f[v] = Sn(g) ? g.value : g, f), {}), r = Object.values(e);
  function t(f) {
    const v = c(f);
    return v?.label ? ir(v.label) : "";
  }
  function a(f) {
    const v = c(f);
    return v?.description ? ir(v.description) : "";
  }
  function o() {
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
    values: o,
    label: t,
    description: a,
    labels: i,
    descriptions: l,
    option: u,
    options: d
  };
}
function U0(e) {
  const { from: n, to: r, duration: t = 300, frame: a = () => {
  }, timingFunction: o = (y) => y, onStateChange: i = () => {
  } } = e;
  let l = "pending", s = n;
  const u = r - n;
  let d, c, f, v = 0;
  function g() {
    if (l === "running" || l === "finished") return;
    $("running");
    const y = performance.now();
    c = c ?? y, v += f != null ? y - f : 0, f = void 0, T();
    function T() {
      d = Lt(() => {
        const z = hn((performance.now() - c - v) / t, 0, 1);
        if (s = u * o(z) + n, z >= 1) {
          $("finished"), a({
            value: r,
            done: !0
          });
          return;
        }
        a({
          value: s,
          done: !1
        }), T();
      });
    }
  }
  function h() {
    l === "running" && (mo(d), $("paused"), f = performance.now());
  }
  function m() {
    mo(d), $("pending"), s = n, d = void 0, c = void 0, f = void 0, v = 0;
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
function ar(e, n, r) {
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
  const { passive: a = !1, capture: o = !1 } = t;
  let i = !1, l = !1;
  const s = (v) => Yn(v) ? v() : No(v), u = (v) => {
    if (i || l) return;
    const g = s(v);
    g && (g.addEventListener(n, r, {
      passive: a,
      capture: o
    }), i = !0);
  }, d = (v) => {
    if (!i || l) return;
    const g = s(v);
    g && (g.removeEventListener(n, r, { capture: o }), i = !1);
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
  xe(document, n, (a) => {
    const o = Yn(e) ? e() : No(e);
    o && !o.contains(a.target) && r(a);
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
function Dn(e) {
  if (!Uu(e)) return {
    index: null,
    parentProvider: null,
    bindParent: null
  };
  const { childInstances: n, collect: r, clear: t, ...a } = Nu(e), o = Ct();
  return {
    index: S(() => n.indexOf(o)),
    parentProvider: a,
    bindParent: (s) => {
      Tr(() => {
        Ne().then(() => {
          r(o, s);
        });
      }), Pt(() => {
        Ne().then(() => {
          t(o, s);
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
    Ke(t?.children) && t.children.forEach((a) => {
      S0(a) && (n.push(a), r(a));
    });
  };
  return r(e), n;
}
function Bn(e) {
  const n = Ct(), r = $n([]), t = [], a = S(() => r.length), o = () => {
    const u = q0(n.subTree), d = r.map((f, v) => ({
      instance: f,
      provider: t[v]
    })), c = (f) => {
      const v = u.indexOf(f.vnode);
      return v === -1 ? Number.MAX_SAFE_INTEGER : v;
    };
    d.sort((f, v) => c(f.instance) - c(v.instance)), r.splice(0, r.length, ...d.map(({ instance: f }) => f)), t.splice(0, t.length, ...d.map(({ provider: f }) => f));
  }, i = (u, d) => {
    r.push(u), t.push(d), o();
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
  return zt(o), {
    length: a,
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
  const e = O(0), n = O(0), r = O(0), t = O(0), a = O(0), o = O(0), i = O(0), l = O(0), s = O(0), u = O(0), d = O(), c = O(!1), f = O(!1), v = O(0), g = O(0);
  let h = null;
  const m = () => {
    e.value = 0, n.value = 0, r.value = 0, t.value = 0, a.value = 0, o.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, d.value = void 0, c.value = !1, f.value = !1, v.value = 0, g.value = 0;
  };
  return {
    startX: e,
    startY: n,
    deltaX: r,
    deltaY: t,
    offsetX: a,
    offsetY: o,
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
      const { clientX: N, clientY: H } = P.touches[0];
      e.value = N, n.value = H, i.value = N, l.value = H, c.value = !0, v.value = performance.now(), f.value = !1, h && window.cancelAnimationFrame(h);
    },
    moveTouch: (P) => {
      const { clientX: N, clientY: H } = P.touches[0];
      f.value = !0, r.value = N - e.value, t.value = H - n.value, a.value = Math.abs(r.value), o.value = Math.abs(t.value), g.value = Math.sqrt(a.value ** 2 + o.value ** 2), s.value = N - i.value, u.value = H - l.value, d.value || (d.value = G0(a.value, o.value)), i.value = N, l.value = H;
    },
    endTouch: () => {
      c.value = !1, h = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (P) => kt(P) === 0 && t.value > 0,
    isReachBottom: (P, N = 1) => {
      const { scrollHeight: H, clientHeight: M, scrollTop: R } = P, E = Math.abs(H - R - M);
      return t.value < 0 && E <= N;
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
  const { initialWidth: n = 0, initialHeight: r = 0 } = e, t = O(n), a = O(r), o = () => {
    Er() && (t.value = window.innerWidth, a.value = window.innerHeight);
  };
  return On(o), wr(o), {
    width: t,
    height: a
  };
}
function yn(e, n, r = {}) {
  const { passive: t = !0, eventName: a, defaultValue: o, emit: i } = r, l = a ?? `onUpdate:${n.toString()}`, s = () => e[n] ?? o;
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
  const n = O(a(e.from)), r = O("pending");
  let t = s();
  function a(u) {
    return Yn(u) ? u() : u;
  }
  function o() {
    t.reset(), n.value = a(e.from), r.value = "pending", t = s();
  }
  function i() {
    t.start();
  }
  function l() {
    t.pause();
  }
  function s() {
    return U0({
      from: a(e.from),
      to: a(e.to),
      duration: e.duration ? a(e.duration) : 300,
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
    reset: o
  };
}
function ju(e, n) {
  if (!Er() || typeof ResizeObserver > "u") return;
  let r, t, a = !1;
  const o = (d) => Yn(d) ? d() : No(d), i = (d) => {
    if (a) return;
    const c = o(d);
    !c || c === t || (l(), r = new ResizeObserver(n), r.observe(c), t = c);
  }, l = () => {
    r?.disconnect(), r = void 0, t = void 0;
  };
  let s;
  Xv(e) && (s = me(() => e.value, () => i(e)));
  const u = () => {
    s?.(), l(), a = !0;
  };
  return On(() => i(e)), Pt(l), Ot(l), u;
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
}, ry = (e, n) => x0(e, _0(n)), Md = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
});
function Fe(e, n) {
  return Ke(n) ? n.reduce((r, t) => (r[t] = e[t], r), {}) : e[n];
}
function ue(e, n) {
  const r = n ?? e;
  return r.install = function(t) {
    const { name: a } = e;
    a && t.component(a, e);
  }, r;
}
function fe(e, n) {
  e.setPropsDefaults = function(r) {
    Object.entries(r).forEach(([t, a]) => {
      const o = n[t];
      if (o != null) {
        if (Sn(o)) {
          n[t] = ry(_l({}, o), { default: a });
          return;
        }
        n[t] = {
          type: o,
          default: a
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
function Vo(e) {
  const n = [];
  return e.forEach((r) => {
    if (r.type !== w0) {
      if (r.type === Be && Ke(r.children)) {
        n.push(...Vo(r.children));
        return;
      }
      n.push(r);
    }
  }), n;
}
function Ad(e) {
  return Sn(e) && Yn(e.safeParseAsync);
}
function ay(e) {
  return Sn(e) && ma(e, "success");
}
function xn() {
  const e = O(""), n = (a, o, i) => Md(null, null, function* () {
    const l = Kr(a).filter((u) => Ad(u) || Yn(u)), s = yield Promise.all(l.map((u) => Ad(u) ? u.safeParseAsync(o) : u(o, i)));
    return r(), !s.some((u) => {
      if (ay(u)) {
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
    validateWithTrigger: (a, o, i, l, s) => Md(null, null, function* () {
      a.includes(o) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function oy(e) {
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
var ae = F0("var");
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
}, ap = {
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
}, op = Wu, iy = Object.defineProperty, Nd = Object.getOwnPropertySymbols, ly = Object.prototype.hasOwnProperty, sy = Object.prototype.propertyIsEnumerable, Rd = (e, n, r) => n in e ? iy(e, n, {
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
      if (ma(n.value, i)) return n.value[i];
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
  zhHK: op,
  faIR: tp,
  jaJP: ap,
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
  zhHK: op,
  faIR: tp,
  jaJP: ap,
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
}, CA = $n(up), vr = $n(up), { n: Ld } = ae("");
function dp() {
  Object.keys(vr.locks).length <= 0 ? document.body.classList.remove(Ld("$--lock")) : document.body.classList.add(Ld("$--lock"));
}
function Xa(e) {
  vr.locks[e] = 1, dp();
}
function Ga(e) {
  delete vr.locks[e], dp();
}
function Ia(e, n) {
  const { uid: r } = Ct();
  n && me(n, (t) => {
    t === !1 ? Ga(r) : t === !0 && e() === !0 && Xa(r);
  }), me(e, (t) => {
    n && n() === !1 || (t === !0 ? Xa(r) : Ga(r));
  }), C0(() => {
    n && n() === !1 || e() === !0 && Xa(r);
  }), Xt(() => {
    n && n() === !1 || e() === !0 && Ga(r);
  }), ft(() => {
    n && n() === !1 || e() === !0 && Xa(r);
  }), Ot(() => {
    n && n() === !1 || e() === !0 && Ga(r);
  });
}
var Qr = [];
function Gu(e, n) {
  const { uid: r } = Ct();
  me(e, (i) => {
    i && !o(r) ? a() : setTimeout(() => {
      Vt(Qr, o(r));
    });
  }), On(() => {
    e() && a();
  }), Zt(() => {
    Vt(Qr, o(r));
  });
  function t() {
    return Qr.length === 0 ? !0 : (Qr.sort((i, l) => i.zIndex.value - l.zIndex.value), Qr[Qr.length - 1].uid === r);
  }
  function a() {
    o(r) || Qr.push({
      uid: r,
      zIndex: n
    });
  }
  function o(i) {
    return Qr.find((l) => l.uid === i);
  }
  return { onStackTop: t };
}
function Ma(e, n) {
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
  const { bindParent: e, parentProvider: n, index: r } = Dn(cp);
  return {
    index: r,
    popup: n,
    bindPopup: e
  };
}
function dy() {
  const { bindChildren: e, childProviders: n, length: r } = Bn(cp);
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
}, { name: my, n: mr, classes: Nl } = ae("popup"), Lo = te({
  name: my,
  inheritAttrs: !1,
  props: xt,
  setup(e, { slots: n, attrs: r }) {
    const t = X0(() => e.show, !0), { zIndex: a } = Ma(() => e.show, 3), o = S(() => {
      var g;
      return (g = e.zIndex) != null ? g : a.value;
    }), { onStackTop: i } = Gu(() => e.show, o), { disabled: l } = Tt(), { bindPopupItems: s } = dy();
    Ia(() => e.show, () => e.lockScroll), me(() => e.show, (g) => {
      C(g ? e.onOpen : e.onClose);
    }), s({ show: S(() => e.show) }), xe(() => window, "keydown", v), oy(() => C(e.onRouteChange));
    function u() {
      const { closeOnClickOverlay: g, onClickOverlay: h } = e;
      C(h), g && C(e["onUpdate:show"], !1);
    }
    function d() {
      const { overlayClass: g = "", overlayStyle: h } = e;
      return U("div", {
        class: Nl(mr("overlay"), g),
        style: py({ zIndex: o.value - 1 }, h),
        onClick: u
      }, null);
    }
    function c() {
      return We(U("div", qe({
        class: Nl(mr("content"), mr(`--${e.position}`), [e.defaultStyle, mr("--content-background-color")], [e.defaultStyle, mr("$-elevation--3")], [e.safeArea, mr("--safe-area")], [e.safeAreaTop, mr("--safe-area-top")]),
        style: { zIndex: o.value },
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
        style: { zIndex: o.value - 2 }
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
ue(Lo);
fe(Lo, xt);
var PA = Lo, st = Lo, gy = Object.defineProperty, hy = Object.defineProperties, by = Object.getOwnPropertyDescriptors, Ud = Object.getOwnPropertySymbols, yy = Object.prototype.hasOwnProperty, wy = Object.prototype.propertyIsEnumerable, jd = (e, n, r) => n in e ? gy(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, vp = (e, n) => {
  for (var r in n || (n = {})) yy.call(n, r) && jd(e, r, n[r]);
  if (Ud)
    for (var r of Ud(n)) wy.call(n, r) && jd(e, r, n[r]);
  return e;
}, ky = (e, n) => hy(e, by(n)), { n: pp } = ae("ripple"), Yd = 250;
function $y(e) {
  const { zIndex: n, position: r } = Ur(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Wd(e) {
  return "touches" in e;
}
function Sy(e, n) {
  const { top: r, left: t } = kn(e), { clientWidth: a, clientHeight: o } = e, i = Math.sqrt(a ** 2 + o ** 2) / 2, l = i * 2, s = Wd(n) ? n.touches[0].clientX - t : a / 2, u = Wd(n) ? n.touches[0].clientY - r : o / 2, d = (a - i * 2) / 2, c = (o - i * 2) / 2;
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
    const { x: t, y: a, centerX: o, centerY: i, size: l } = Sy(this, e), s = document.createElement("div");
    s.classList.add(pp()), s.style.opacity = "0", s.style.transform = `translate(${t}px, ${a}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), $y(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${o}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(r, 30);
}
function go() {
  const e = this._ripple, n = () => {
    const r = this.querySelectorAll(`.${pp()}`);
    if (!r.length) return;
    const t = r[r.length - 1], a = Yd - performance.now() + Number(t.dataset.createdAt);
    window.setTimeout(() => {
      t.style.opacity = "0", window.setTimeout(() => {
        var o;
        return (o = t.parentNode) == null ? void 0 : o.removeChild(t);
      }, Yd);
    }, a);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function mp() {
  if (!M0() || !vr.enableRipple) return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
var ho = !1;
function Cy(e) {
  ho || !(e.key === " " || e.key === "Enter") || (Zu.call(this, e), ho = !0);
}
function Kd() {
  ho && (go.call(this), ho = !1);
}
function Py(e, n) {
  var r;
  e._ripple = ky(vp({ tasker: null }, (r = n.value) != null ? r : {}), { removeRipple: go.bind(e) }), e.addEventListener("touchstart", Zu, { passive: !0 }), e.addEventListener("touchmove", mp, { passive: !0 }), e.addEventListener("dragstart", go, { passive: !0 }), e.addEventListener("keydown", Cy), e.addEventListener("keyup", Kd), e.addEventListener("blur", Kd), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function Oy(e) {
  e.removeEventListener("touchstart", Zu), e.removeEventListener("touchmove", mp), e.removeEventListener("dragstart", go), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function zy(e, n) {
  var r, t, a, o, i, l;
  const s = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (t = n.value) == null ? void 0 : t.disabled
  };
  (s.color !== ((a = e._ripple) == null ? void 0 : a.color) || s.disabled !== ((o = e._ripple) == null ? void 0 : o.disabled)) && (e._ripple = vp({
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
  return e ? !!(e === "desktop" && po() || e === "mobile" && !po()) : !1;
}
function Ty(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, t) => {
    const [a, o] = t.split(":").map((i) => i.trim());
    return r[Vu(a)] = o, r;
  }, {}) : {};
}
function Ey(e) {
  const { value: n } = e._hover, r = Ty(e);
  Object.keys(n).forEach((t) => {
    const a = Vu(t);
    n[a] != null && r[a] && (e._hover.rawStyle[a] = r[a]);
  });
}
function Ju(e, n) {
  Object.keys(n).forEach((r) => {
    const t = n[r];
    t != null && (e.style[r] = t);
  });
}
function Dy(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function bp(e) {
  e?._hover != null && (Dy(e), Ju(e, e._hover.rawStyle));
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
  const { arg: a, value: o } = n;
  hp(a) || (e._hover = {
    value: o,
    hovering: (t = (r = e._hover) == null ? void 0 : r.hovering) != null ? t : !1,
    rawStyle: {}
  }, Ey(e), e.addEventListener("mouseenter", yp), e.addEventListener("mouseleave", wp));
}
function $p(e, n) {
  hp(n.arg) || (bp(e), e.removeEventListener("mouseenter", yp), e.removeEventListener("mouseleave", wp));
}
function By(e, n) {
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
  beforeUpdate: By,
  updated: My,
  install(e) {
    e.directive("hover", this);
  }
}, zA = Sp, jn = Sp, Cp = {
  hovering: Boolean,
  focusing: Boolean,
  color: String
}, { name: Ay, n: Ny, classes: Ry } = ae("hover-overlay");
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
    inMobile: po
  })
});
Pp.render = Vy;
var Fo = Pp;
ue(Fo);
fe(Fo, Cp);
function ur() {
  const e = O(!1);
  return {
    hovering: e,
    handleHovering: (r) => {
      e.value = r;
    }
  };
}
var TA = Fo, Zn = Fo;
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
    const r = /(scroll|auto)/, { overflowY: t, overflow: a } = Ur(n);
    if (r.test(t) || r.test(a)) return n;
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
    return ar(!!r, n, "target element cannot found"), r;
  }
  return ar(Jl(e), n, 'type of prop "target" should be an element object'), e;
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
  const { vw: n, vh: r, vMin: t, vMax: a } = Hy();
  if (Yy(e)) return +e.replace("vw", "") * n / 100;
  if (Wy(e)) return +e.replace("vh", "") * r / 100;
  if (Ky(e)) return +e.replace("vmin", "") * t / 100;
  if (qy(e)) return +e.replace("vmax", "") * a / 100;
  if (Uy(e)) {
    const o = +e.replace("rem", ""), i = Ur(document.documentElement).fontSize;
    return o * parseFloat(i);
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
function ga(e, { top: n = 0, left: r = 0, duration: t = 300, animation: a }) {
  const o = Date.now(), i = kt(e), l = Lu(e);
  return new Promise((s) => {
    const u = () => {
      const d = (Date.now() - o) / t;
      if (d < 1) {
        const c = i + (n - i) * a(d), f = l + (r - l) * a(d);
        e.scrollTo(f, c), requestAnimationFrame(u);
      } else
        e.scrollTo(r, n), s();
    };
    requestAnimationFrame(u);
  });
}
function zp(e) {
  return Object.entries(e ?? {}).reduce((n, [r, t]) => {
    const a = r.startsWith("--") ? r : `--${xv(r)}`;
    return n[a] = t, n;
  }, {});
}
function bo(e) {
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
  const a = Array.from(n.querySelectorAll(Xd)).filter((s) => !Xy(s));
  if (!a.length) return;
  const o = [e, ...Array.from(e.querySelectorAll(Xd))].findIndex((s) => s === document.activeElement) !== -1, i = Array.from(a).findIndex((s) => s === document.activeElement);
  if (r === "ArrowDown") {
    if (o && i === -1 || i === a.length - 1) {
      l(a[0]);
      return;
    }
    if (i !== -1 && i < a.length - 1) {
      l(a[i + 1]);
      return;
    }
  }
  if (r === "ArrowUp") {
    if (o && i === -1 || i === 0) {
      l(a[a.length - 1]);
      return;
    }
    i > 0 && l(a[i - 1]);
  }
  function l(s) {
    t && !t(document.activeElement, s, o) || s.focus();
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
}, Gy = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: Zy, n: Jy, classes: Qy } = ae("icon");
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
    function t(a, o) {
      return Gy(this, null, function* () {
        const { transition: i } = e;
        if (o == null || Z(i) === 0) {
          n.value = a;
          return;
        }
        r.value = !0, yield Ne(), setTimeout(() => {
          o != null && (n.value = a), r.value = !1;
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
var Ho = Ep;
ue(Ho);
fe(Ho, pn);
var EA = Ho, Je = Ho, { name: _y, n: e1, classes: n1 } = ae("action-sheet");
function r1(e, n) {
  const r = x("var-icon"), t = x("maybe-v-node"), a = x("var-hover-overlay"), o = _e("ripple"), i = _e("hover");
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
    U(a, { hovering: e.disabled ? !1 : e.hovering }, null, 8, ["hovering"])
  ], 6)), [[o, { disabled: e.disabled }], [
    i,
    e.handleHovering,
    "desktop"
  ]]);
}
var Dp = te({
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
Dp.render = r1;
var t1 = Dp, a1 = Object.defineProperty, Gd = Object.getOwnPropertySymbols, o1 = Object.prototype.hasOwnProperty, i1 = Object.prototype.propertyIsEnumerable, Zd = (e, n, r) => n in e ? a1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, l1 = (e, n) => {
  for (var r in n || (n = {})) o1.call(n, r) && Zd(e, r, n[r]);
  if (Gd)
    for (var r of Gd(n)) i1.call(n, r) && Zd(e, r, n[r]);
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
])), { name: s1, n: u1, classes: d1 } = ae("action-sheet");
function c1(e, n) {
  const r = x("var-action-item"), t = x("var-popup");
  return b(), ke(t, {
    show: e.show,
    "onUpdate:show": n[0] || (n[0] = (a) => e.show = a),
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
      var a;
      return [L("div", { class: p(e.n("title")) }, ve((a = e.title) != null ? a : (e.pt ? e.pt : e.t)("actionSheetTitle")), 3)];
    }), F(e.$slots, "actions", {}, () => [(b(!0), k(Be, null, Ye(e.actions, (a) => (b(), ke(r, {
      key: a.name,
      name: a.name,
      namespace: a.namespace,
      icon: a.icon,
      "icon-size": a.iconSize,
      "class-name": a.className,
      color: a.color,
      onClick: (o) => e.handleSelect(a)
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
  props: Bp,
  setup(e) {
    const n = yn(e, "show"), { t: r } = kr();
    function t(a) {
      if (a.disabled) return;
      const { closeOnClickAction: o, onSelect: i } = e;
      C(i, a), o && (n.value = !1);
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
var Aa = Ip, f1 = Object.defineProperty, Jd = Object.getOwnPropertySymbols, v1 = Object.prototype.hasOwnProperty, p1 = Object.prototype.propertyIsEnumerable, Qd = (e, n, r) => n in e ? f1(e, n, {
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
    const { unmountInstance: t } = Qt(Aa, r, {
      onSelect: (a) => {
        C(r.onSelect, a), n(a);
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
      "onUpdate:show": (a) => {
        r.show = a;
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
vt.Component = Aa;
ue(Aa);
ue(Aa, vt);
fe(vt, Bp);
var DA = Aa, rs = vt, Mp = {
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
}, { name: g1, n: h1, classes: b1 } = ae("alert"), y1 = {
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
var Uo = Ap;
ue(Uo);
fe(Uo, Mp);
var BA = Uo, ts = Uo, Np = {
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
}, { name: k1, n: $1, classes: S1 } = ae("app-bar");
function C1(e, n) {
  return b(), k(Be, null, [L("div", qe({
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
    const r = O(null), t = O(), a = O(), o = O(), i = S(() => {
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
      t.value = n.left ? 0 : void 0, a.value = n.right ? 0 : void 0;
    }
    function s() {
      if (!e.fixed || !e.placeholder) return;
      const { height: u } = kn(r.value);
      o.value = Te(u);
    }
    return {
      rootStyles: i,
      paddingLeft: t,
      paddingRight: a,
      n: $1,
      classes: S1,
      formatElevation: zn,
      appBar: r,
      placeholderHeight: o
    };
  }
});
Rp.render = C1;
var jo = Rp;
ue(jo);
fe(jo, Np);
var IA = jo, as = jo, Vp = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: P1, n: O1 } = ae("form-details"), z1 = { key: 0 }, T1 = { key: 0 };
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
var Yo = Lp;
ue(Yo);
fe(Yo, Vp);
var MA = Yo, Hn = Yo, D1 = Object.defineProperty, B1 = Object.defineProperties, I1 = Object.getOwnPropertyDescriptors, _d = Object.getOwnPropertySymbols, M1 = Object.prototype.hasOwnProperty, A1 = Object.prototype.propertyIsEnumerable, ec = (e, n, r) => n in e ? D1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, N1 = (e, n) => {
  for (var r in n || (n = {})) M1.call(n, r) && ec(e, r, n[r]);
  if (_d)
    for (var r of _d(n)) A1.call(n, r) && ec(e, r, n[r]);
  return e;
}, R1 = (e, n) => B1(e, I1(n)), Fp = /* @__PURE__ */ Symbol("FORM_BIND_FORM_ITEM_KEY");
function Wn() {
  const { parentProvider: e, index: n, bindParent: r } = Dn(Fp), t = Ct();
  return {
    index: n,
    form: e,
    bindForm: r ? (a) => {
      r(R1(N1({}, a), { instance: t }));
    } : null
  };
}
function V1() {
  const { childProviders: e, length: n, bindChildren: r } = Bn(Fp);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var Hp = /* @__PURE__ */ Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Up = /* @__PURE__ */ Symbol("SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY");
function L1() {
  const { childProviders: e, length: n, bindChildren: r } = Bn(Hp);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
function F1() {
  const { childProviders: e, bindChildren: n } = Bn(Up);
  return {
    swipeResizeListeners: e,
    bindSwipeResizeListeners: n
  };
}
function H1() {
  const { parentProvider: e, bindParent: n } = Dn(Up);
  return {
    swipeResizeDispatcher: e,
    bindSwipeResizeDispatcher: n
  };
}
var Na = {
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
}, nc = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: U1, n: Vl, classes: j1 } = ae("field-decorator"), Y1 = ["for"];
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
  ], 6), e.line ? (b(), k(Be, { key: 0 }, [e.variant === "outlined" ? (b(), k("fieldset", {
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
  props: Na,
  setup(e) {
    const n = O(null), r = O(null), t = O(""), a = O("0px"), o = O("0px"), i = O("0px"), l = O(!0), s = S(() => e.hint && (!Or(e.value) || e.isFocusing)), { popup: u, bindPopup: d } = fp(), { bindSwipeResizeDispatcher: c } = H1();
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
      const { hint: $, value: y, composing: T } = e;
      if (!$ && (!Or(y) || T)) return Vl("--placeholder-hidden");
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
        if (a.value = `${r.value.offsetLeft}px`, o.value = `${r.value.offsetWidth}px`, i.value = `${r.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
          const T = Ur(n.value), z = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
          t.value = `calc(${T.width} * 0.75 + ${z} * 2)`;
        }
        $ && (yield Ne(), yield qr(), y === f && (l.value = !1));
      });
    }
    return {
      placeholderTextEl: n,
      middleEl: r,
      middleOffsetLeft: a,
      middleOffsetWidth: o,
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
var Wo = jp;
ue(Wo);
fe(Wo, Na);
var AA = Wo, ha = Wo, K1 = Object.defineProperty, q1 = Object.defineProperties, X1 = Object.getOwnPropertyDescriptors, rc = Object.getOwnPropertySymbols, G1 = Object.prototype.hasOwnProperty, Z1 = Object.prototype.propertyIsEnumerable, tc = (e, n, r) => n in e ? K1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, J1 = (e, n) => {
  for (var r in n || (n = {})) G1.call(n, r) && tc(e, r, n[r]);
  if (rc)
    for (var r of rc(n)) Z1.call(n, r) && tc(e, r, n[r]);
  return e;
}, Q1 = (e, n) => q1(e, X1(n)), Ko = Q1(J1({
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
}, Fe(Na, [
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
}), { name: x1, n: _1, classes: ew } = ae("input"), nw = [
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
function aw(e, n) {
  const r = x("var-field-decorator"), t = x("var-form-details");
  return b(), k("div", {
    class: p(e.classes(e.n(), e.n("$--box"))),
    onMousedown: n[12] || (n[12] = (...a) => e.handleMousedown && e.handleMousedown(...a))
  }, [U(r, yt(Ao({
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
    "clear-icon": se(({ clear: a }) => [F(e.$slots, "clear-icon", { clear: a })]),
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
      onFocus: n[0] || (n[0] = (...a) => e.handleFocus && e.handleFocus(...a)),
      onBlur: n[1] || (n[1] = (...a) => e.handleBlur && e.handleBlur(...a)),
      onInput: n[2] || (n[2] = (...a) => e.handleInput && e.handleInput(...a)),
      onChange: n[3] || (n[3] = (...a) => e.handleChange && e.handleChange(...a)),
      onCompositionstart: n[4] || (n[4] = (...a) => e.handleCompositionStart && e.handleCompositionStart(...a)),
      onCompositionend: n[5] || (n[5] = (...a) => e.handleCompositionEnd && e.handleCompositionEnd(...a))
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
      onFocus: n[6] || (n[6] = (...a) => e.handleFocus && e.handleFocus(...a)),
      onBlur: n[7] || (n[7] = (...a) => e.handleBlur && e.handleBlur(...a)),
      onInput: n[8] || (n[8] = (...a) => e.handleInput && e.handleInput(...a)),
      onChange: n[9] || (n[9] = (...a) => e.handleChange && e.handleChange(...a)),
      onCompositionstart: n[10] || (n[10] = (...a) => e.handleCompositionStart && e.handleCompositionStart(...a)),
      onCompositionend: n[11] || (n[11] = (...a) => e.handleCompositionEnd && e.handleCompositionEnd(...a))
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
    VarFieldDecorator: ha
  },
  props: Ko,
  setup(e) {
    const n = np(), r = O(null), t = O(!1), a = O(!1), { bindForm: o, form: i } = Wn(), { errorMessage: l, validateWithTrigger: s, validate: u, resetValidation: d } = xn(), c = S(() => e.disabled || e.readonly ? "" : "text"), f = S(() => e.type === "number" ? "text" : e.type), v = S(() => {
      const { maxlength: G, modelValue: ce } = e;
      return G ? Or(ce) ? `0 / ${G}` : `${String(ce).length}/${G}` : "";
    }), g = S(() => {
      const { hint: G, blurColor: ce, focusColor: ge } = e;
      if (!G)
        return l.value ? "var(--field-decorator-error-color)" : t.value ? ge || "var(--field-decorator-focus-color)" : ce || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    C(o, {
      reset: A,
      validate: I,
      resetValidation: d
    }), On(() => {
      e.autofocus && B();
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
      e.type === "number" && (ge = M(ge));
      const de = E(ge);
      return de === e.modelValue && (ce.value = de), de;
    }
    function y() {
      a.value = !0;
    }
    function T(G) {
      a.value && (a.value = !1, G.target.dispatchEvent(new Event("input")));
    }
    function z(G) {
      if (a.value) return;
      const ce = $(G);
      C(e["onUpdate:modelValue"], ce), C(e.onInput, ce, G), h("onInput");
    }
    function P(G) {
      const ce = R($(G));
      e.modelModifiers.trim && C(e["onUpdate:modelValue"], ce), C(e.onChange, ce, G), h("onChange");
    }
    function N() {
      const { disabled: G, readonly: ce, clearable: ge, onClear: de } = e;
      i?.disabled.value || i?.readonly.value || G || ce || !ge || (C(e["onUpdate:modelValue"], ""), C(de, ""), h("onClear"));
    }
    function H(G) {
      const { disabled: ce, onClick: ge } = e;
      i?.disabled.value || ce || (C(ge, G), h("onClick"));
    }
    function M(G) {
      const ce = G.indexOf("-"), ge = G.indexOf(".");
      return ce > -1 && (G = ce === 0 ? "-" + G.replace(/-/g, "") : G.replace(/-/g, "")), ge > -1 && (G = G.slice(0, ge + 1) + G.slice(ge).replace(/\./g, "")), G.replace(/[^-0-9.]/g, "");
    }
    function R(G) {
      return e.modelModifiers.trim ? G.trim() : G;
    }
    function E(G) {
      return e.maxlength ? G.slice(0, Z(e.maxlength)) : G;
    }
    function D(G) {
      const { disabled: ce } = e;
      i?.disabled.value || ce || G.target === r.value || (B(), Ze(G));
    }
    function A() {
      C(e["onUpdate:modelValue"], ""), d();
    }
    function I() {
      return u(e.rules, e.modelValue);
    }
    function B() {
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
      isComposing: a,
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
      handleInput: z,
      handleChange: P,
      handleClear: N,
      handleClick: H,
      handleCompositionStart: y,
      handleCompositionEnd: T,
      handleMousedown: D,
      validate: I,
      resetValidation: d,
      reset: A,
      focus: B,
      blur: j,
      select: K
    };
  }
});
Yp.render = aw;
var Ra = Yp;
ue(Ra);
fe(Ra, Ko);
var NA = Ra, Ft = Ra, Wp = {
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
function ow() {
  const { bindChildren: e, childProviders: n, length: r } = Bn(Kp);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function iw() {
  const { bindParent: e, parentProvider: n, index: r } = Dn(Kp);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var ac = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: lw, n: sw, classes: uw } = ae("checkbox"), dw = [
  "aria-checked",
  "aria-disabled",
  "tabindex"
];
function cw(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), a = x("var-form-details"), o = _e("hover"), i = _e("ripple");
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
    o,
    e.handleHovering,
    "desktop"
  ], [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]]), e.$slots.default ? (b(), k("div", {
    key: 0,
    class: p(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...l) => e.handleTextClick && e.handleTextClick(...l))
  }, [F(e.$slots, "default", { checked: e.checked })], 2)) : X("v-if", !0)], 42, dw), U(a, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
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
    const n = O(null), r = O(!1), t = yn(e, "modelValue"), a = yn(e, "indeterminate"), o = S(() => t.value === e.checkedValue), i = S(() => e.checkedValue), { checkboxGroup: l, bindCheckboxGroup: s } = iw(), { hovering: u, handleHovering: d } = ur(), { form: c, bindForm: f } = Wn(), { errorMessage: v, validateWithTrigger: g, validate: h, resetValidation: m } = xn(), w = {
      checkedValue: i,
      checked: o,
      sync: P,
      validate: E,
      resetValidation: m,
      reset: N
    };
    C(s, w), C(f, w), xe(() => window, "keydown", M), xe(() => window, "keyup", R);
    function $(D) {
      Ne(() => {
        const { validateTrigger: A, rules: I, modelValue: B } = e;
        g(A, D, I, B);
      });
    }
    function y(D) {
      return ac(this, null, function* () {
        const { checkedValue: A, onChange: I } = e;
        t.value = D, D === A ? l?.onChecked(A) : l?.onUnchecked(A), yield Ne(), C(I, D, a.value), $("onChange");
      });
    }
    function T(D) {
      return ac(this, null, function* () {
        const { disabled: A, readonly: I, checkedValue: B, uncheckedValue: j, onClick: K } = e;
        if (c?.disabled.value || A || (C(K, D), c?.readonly.value || I)) return;
        if (a.value === !0) {
          a.value = !1, yield Ne(), C(e.onChange, t.value, a.value), $("onChange");
          return;
        }
        const G = l ? l.checkedCount.value >= Number(l.max.value) : !1;
        !o.value && G || y(o.value ? j : B);
      });
    }
    function z() {
      n.value.focus();
    }
    function P(D) {
      const { checkedValue: A, uncheckedValue: I } = e;
      t.value = D.includes(A) ? A : I;
    }
    function N() {
      t.value = e.uncheckedValue, m();
    }
    function H(D) {
      const { checkedValue: A, uncheckedValue: I } = e;
      [A, I].includes(D) || (D = o.value ? I : A), y(D);
    }
    function M(D) {
      if (!r.value) return;
      const { key: A } = D;
      (A === "Enter" || A === " ") && Ze(D), A === "Enter" && n.value.click();
    }
    function R(D) {
      r.value && D.key === " " && (Ze(D), n.value.click());
    }
    function E() {
      return h(e.rules, e.modelValue);
    }
    return {
      checkbox: n,
      isFocusing: r,
      isIndeterminate: a,
      checked: o,
      errorMessage: v,
      checkboxGroupErrorMessage: l?.errorMessage,
      formDisabled: c?.disabled,
      formReadonly: c?.readonly,
      hovering: u,
      n: sw,
      classes: uw,
      handleHovering: d,
      handleClick: T,
      handleTextClick: z,
      toSizeUnit: Te,
      toggle: H,
      reset: N,
      validate: E,
      resetValidation: m
    };
  }
});
qp.render = cw;
var qo = qp;
ue(qo);
fe(qo, Wp);
var RA = qo, dt = qo, Xp = {
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
  const { length: e, childProviders: n, bindChildren: r } = Bn(Gp);
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: r
  };
}
function vw() {
  const { index: e, parentProvider: n, bindParent: r } = Dn(Gp);
  return ar(!!r, "MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: r
  };
}
var pw = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: mw, n: gw, classes: hw } = ae("menu-option"), bw = ["tabindex"];
function yw(e, n) {
  const r = x("var-checkbox"), t = x("maybe-v-node"), a = x("var-icon"), o = x("var-hover-overlay"), i = _e("ripple"), l = _e("hover");
  return We((b(), k("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.size}`), [e.optionSelected, e.n("--selected-color")], [e.interactionDisabled, e.n("--disabled")], [e.childrenTrigger, e.n("--children-trigger")])),
    tabindex: e.interactionDisabled ? void 0 : "-1",
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
      disabled: e.interactionDisabled,
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
    }, [U(a, {
      "var-menu-option-cover": "",
      class: p(e.n("arrow-icon")),
      name: "chevron-right"
    }, null, 8, ["class"])], 2)) : X("v-if", !0),
    U(o, {
      hovering: (e.hovering || e.highlight) && !e.interactionDisabled,
      focusing: e.isFocusing && !e.interactionDisabled
    }, null, 8, ["hovering", "focusing"])
  ], 42, bw)), [[i, { disabled: e.interactionDisabled || !e.ripple }], [
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
    const n = O(), r = O(), t = O(!1), a = O(!1), o = O(!1), i = S(() => a.value), l = S(() => o.value), s = S(() => e.value), u = S(() => e.disabled), d = S(() => e.ripple), { menuSelect: c, bindMenuSelect: f } = vw(), { size: v, multiple: g, onSelect: h, computeLabel: m } = c, w = S(() => c.disabled.value || u.value), { hovering: $, handleHovering: y } = ur(), T = S(() => {
      var E;
      return Yn(e.label) ? e.label((E = e.option) != null ? E : {
        label: e.label,
        value: e.value,
        disabled: e.disabled,
        ripple: e.ripple
      }, a.value) : e.label;
    }), z = {
      label: T,
      value: s,
      selected: i,
      disabled: u,
      ripple: d,
      indeterminate: l,
      sync: R
    };
    me([() => e.label, () => e.value], m), f(z), xe(() => window, "keydown", N), xe(() => window, "keyup", H);
    function P() {
      if (!w.value && !(!g.value && e.childrenTrigger)) {
        if (g.value && o.value) {
          o.value = !1, a.value = !1, h(z);
          return;
        }
        g.value && !o.value && (a.value = !a.value), h(z);
      }
    }
    function N(E) {
      var D;
      !t.value && !((D = r.value) != null && D.isFocusing) || ((E.key === "ArrowRight" || E.key === "ArrowLeft") && (Ze(E), C(e.onKeyArrowX, E.key)), t.value && ((E.key === " " || E.key === "Enter") && Ze(E), E.key === "Enter" && n.value.click()));
    }
    function H(E) {
      t.value && E.key === " " && (Ze(E), n.value.click());
    }
    function M() {
      return pw(this, null, function* () {
        yield Ne(), h(z);
      });
    }
    function R(E, D) {
      a.value = E, Ba(D) && (o.value = D);
    }
    return {
      root: n,
      checkbox: r,
      optionSelected: a,
      optionIndeterminate: o,
      interactionDisabled: w,
      size: v,
      multiple: g,
      hovering: $,
      isFocusing: t,
      labelVNode: T,
      n: gw,
      classes: hw,
      handleHovering: y,
      handleClick: P,
      handleSelect: M
    };
  }
});
Zp.render = yw;
var Va = Zp;
ue(Va);
fe(Va, Xp);
var VA = Va, Ht = Va, _u = {
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
var ba = "bottom", Xo = "right", Go = "left", ww = "auto", Zo = [
  "top",
  ba,
  Xo,
  Go
], Jo = "start";
var kw = "clippingParents", $w = "viewport", oc = "popper", Sw = "reference", ic = /* @__PURE__ */ Zo.reduce(function(e, n) {
  return e.concat([n + "-" + Jo, n + "-end"]);
}, []), Jp = /* @__PURE__ */ [].concat(Zo, [ww]).reduce(function(e, n) {
  return e.concat([
    n,
    n + "-" + Jo,
    n + "-end"
  ]);
}, []), Cw = "beforeRead", Pw = "read", Ow = "afterRead", zw = "beforeMain", Tw = "main", Ew = "afterMain", Dw = "beforeWrite", Bw = "write", Iw = "afterWrite", Mw = [
  Cw,
  Pw,
  Ow,
  zw,
  Tw,
  Ew,
  Dw,
  Bw,
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
function Qo(e) {
  return Vr(e) === "html" ? e : e.assignedSlot || e.parentNode || (ed(e) ? e.host : null) || pt(e);
}
function os() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function lc(e) {
  return !hr(e) || Xr(e).position === "fixed" ? null : e.offsetParent;
}
function Nw(e) {
  var n = /firefox/i.test(os());
  if (/Trident/i.test(os()) && hr(e) && Xr(e).position === "fixed")
    return null;
  var r = Qo(e);
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
function ya(e) {
  return e.split("-")[1];
}
var da = Math.max, sc = Math.min, Ut = Math.round, Rw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Vw(e, n) {
  var r = e.x, t = e.y, a = n.devicePixelRatio || 1;
  return {
    x: Ut(r * a) / a || 0,
    y: Ut(t * a) / a || 0
  };
}
function uc(e) {
  var n, r = e.popper, t = e.popperRect, a = e.placement, o = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, c = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, g = i.y, h = g === void 0 ? 0 : g, m = typeof d == "function" ? d({
    x: v,
    y: h
  }) : {
    x: v,
    y: h
  };
  v = m.x, h = m.y;
  var w = i.hasOwnProperty("x"), $ = i.hasOwnProperty("y"), y = Go, T = "top", z = window;
  if (u) {
    var P = nd(r), N = "clientHeight", H = "clientWidth";
    if (P === pr(r) && (P = pt(r), Xr(P).position !== "static" && l === "absolute" && (N = "scrollHeight", H = "scrollWidth")), P = P, a === "top" || (a === "left" || a === "right") && o === "end") {
      T = ba;
      var M = c && P === z && z.visualViewport ? z.visualViewport.height : P[N];
      h -= M - t.height, h *= s ? 1 : -1;
    }
    if (a === "left" || (a === "top" || a === "bottom") && o === "end") {
      y = Xo;
      var R = c && P === z && z.visualViewport ? z.visualViewport.width : P[H];
      v -= R - t.width, v *= s ? 1 : -1;
    }
  }
  var E = Object.assign({ position: l }, u && Rw), D = d === !0 ? Vw({
    x: v,
    y: h
  }, pr(r)) : {
    x: v,
    y: h
  };
  if (v = D.x, h = D.y, s) {
    var A;
    return Object.assign({}, E, (A = {}, A[T] = $ ? "0" : "", A[y] = w ? "0" : "", A.transform = (z.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + h + "px)" : "translate3d(" + v + "px, " + h + "px, 0)", A));
  }
  return Object.assign({}, E, (n = {}, n[T] = $ ? h + "px" : "", n[y] = w ? v + "px" : "", n.transform = "", n));
}
function Lw(e) {
  var n = e.state, r = e.options, t = r.gpuAcceleration, a = t === void 0 ? !0 : t, o = r.adaptive, i = o === void 0 ? !0 : o, l = r.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: it(n.placement),
    variation: ya(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: a,
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
function lo(e) {
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
  return !/^((?!chrome|android).)*safari/i.test(os());
}
function jt(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var t = e.getBoundingClientRect(), a = 1, o = 1;
  n && hr(e) && (a = e.offsetWidth > 0 && Ut(t.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ut(t.height) / e.offsetHeight || 1);
  var i = ($t(e) ? pr(e) : window).visualViewport, l = !xp() && r, s = (t.left + (l && i ? i.offsetLeft : 0)) / a, u = (t.top + (l && i ? i.offsetTop : 0)) / o, d = t.width / a, c = t.height / o;
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
  var r = pr(e), t = pt(e), a = r.visualViewport, o = t.clientWidth, i = t.clientHeight, l = 0, s = 0;
  if (a) {
    o = a.width, i = a.height;
    var u = xp();
    (u || !u && n === "fixed") && (l = a.offsetLeft, s = a.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: l + td(e),
    y: s
  };
}
function jw(e) {
  var n, r = pt(e), t = rd(e), a = (n = e.ownerDocument) == null ? void 0 : n.body, o = da(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), i = da(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), l = -t.scrollLeft + td(e), s = -t.scrollTop;
  return Xr(a || r).direction === "rtl" && (l += da(r.clientWidth, a ? a.clientWidth : 0) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function ad(e) {
  var n = Xr(e), r = n.overflow, t = n.overflowX, a = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + t);
}
function _p(e) {
  return [
    "html",
    "body",
    "#document"
  ].indexOf(Vr(e)) >= 0 ? e.ownerDocument.body : hr(e) && ad(e) ? e : _p(Qo(e));
}
function ca(e, n) {
  var r;
  n === void 0 && (n = []);
  var t = _p(e), a = t === ((r = e.ownerDocument) == null ? void 0 : r.body), o = pr(t), i = a ? [o].concat(o.visualViewport || [], ad(t) ? t : []) : t, l = n.concat(i);
  return a ? l : l.concat(ca(Qo(i)));
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
  var n = ca(Qo(e)), r = ["absolute", "fixed"].indexOf(Xr(e).position) >= 0 && hr(e) ? nd(e) : e;
  return $t(r) ? n.filter(function(t) {
    return $t(t) && Yw(t, r) && Vr(t) !== "body";
  }) : [];
}
function qw(e, n, r, t) {
  var a = n === "clippingParents" ? Kw(e) : [].concat(n), o = [].concat(a, [r]), i = o[0], l = o.reduce(function(s, u) {
    var d = cc(e, u, t);
    return s.top = da(d.top, s.top), s.right = sc(d.right, s.right), s.bottom = sc(d.bottom, s.bottom), s.left = da(d.left, s.left), s;
  }, cc(e, i, t));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Xw(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function em(e) {
  var n = e.reference, r = e.element, t = e.placement, a = t ? it(t) : null, o = t ? ya(t) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (a) {
    case "top":
      s = {
        x: i,
        y: n.y - r.height
      };
      break;
    case ba:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case Xo:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case Go:
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
  var u = a ? Xw(a) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case Jo:
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
  var r = n, t = r.placement, a = t === void 0 ? e.placement : t, o = r.strategy, i = o === void 0 ? e.strategy : o, l = r.boundary, s = l === void 0 ? kw : l, u = r.rootBoundary, d = u === void 0 ? $w : u, c = r.elementContext, f = c === void 0 ? oc : c, v = r.altBoundary, g = v === void 0 ? !1 : v, h = r.padding, m = h === void 0 ? 0 : h, w = Zw(typeof m != "number" ? m : Jw(m, Zo)), $ = f === "popper" ? Sw : oc, y = e.rects.popper, T = e.elements[g ? $ : f], z = qw($t(T) ? T : T.contextElement || pt(e.elements.popper), s, d, i), P = jt(e.elements.reference), N = em({
    reference: P,
    element: y,
    strategy: "absolute",
    placement: a
  }), H = is(Object.assign({}, y, N)), M = f === "popper" ? H : P, R = {
    top: z.top - M.top + w.top,
    bottom: M.bottom - z.bottom + w.bottom,
    left: z.left - M.left + w.left,
    right: M.right - z.right + w.right
  }, E = e.modifiersData.offset;
  if (f === "popper" && E) {
    var D = E[a];
    Object.keys(R).forEach(function(A) {
      var I = ["right", "bottom"].indexOf(A) >= 0 ? 1 : -1, B = ["top", "bottom"].indexOf(A) >= 0 ? "y" : "x";
      R[A] += D[B] * I;
    });
  }
  return R;
}
function Qw(e, n) {
  n === void 0 && (n = {});
  var r = n, t = r.placement, a = r.boundary, o = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Jp : s, d = ya(t), c = d ? l ? ic : ic.filter(function(g) {
    return ya(g) === d;
  }) : Zo, f = c.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = c);
  var v = f.reduce(function(g, h) {
    return g[h] = nm(e, {
      placement: h,
      boundary: a,
      rootBoundary: o,
      padding: i
    })[it(h)], g;
  }, {});
  return Object.keys(v).sort(function(g, h) {
    return v[g] - v[h];
  });
}
function xw(e) {
  if (it(e) === "auto") return [];
  var n = lo(e);
  return [
    dc(e),
    n,
    dc(n)
  ];
}
function _w(e) {
  var n = e.state, r = e.options, t = e.name;
  if (!n.modifiersData[t]._skip) {
    for (var a = r.mainAxis, o = a === void 0 ? !0 : a, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, c = r.rootBoundary, f = r.altBoundary, v = r.flipVariations, g = v === void 0 ? !0 : v, h = r.allowedAutoPlacements, m = n.options.placement, w = it(m) === m, $ = s || (w || !g ? [lo(m)] : xw(m)), y = [m].concat($).reduce(function(Q, ne) {
      return Q.concat(it(ne) === "auto" ? Qw(n, {
        placement: ne,
        boundary: d,
        rootBoundary: c,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: h
      }) : ne);
    }, []), T = n.rects.reference, z = n.rects.popper, P = /* @__PURE__ */ new Map(), N = !0, H = y[0], M = 0; M < y.length; M++) {
      var R = y[M], E = it(R), D = ya(R) === Jo, A = ["top", ba].indexOf(E) >= 0, I = A ? "width" : "height", B = nm(n, {
        placement: R,
        boundary: d,
        rootBoundary: c,
        altBoundary: f,
        padding: u
      }), j = A ? D ? Xo : Go : D ? ba : "top";
      T[I] > z[I] && (j = lo(j));
      var K = lo(j), G = [];
      if (o && G.push(B[E] <= 0), l && G.push(B[j] <= 0, B[K] <= 0), G.every(function(Q) {
        return Q;
      })) {
        H = R, N = !1;
        break;
      }
      P.set(R, G);
    }
    if (N)
      for (var ce = g ? 3 : 1, ge = function(ne) {
        var pe = y.find(function($e) {
          var W = P.get($e);
          if (W) return W.slice(0, ne).every(function(oe) {
            return oe;
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
  var t = it(e), a = ["left", "top"].indexOf(t) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, { placement: e })) : r, i = o[0], l = o[1];
  return i = i || 0, l = (l || 0) * a, ["left", "right"].indexOf(t) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function rk(e) {
  var n = e.state, r = e.options, t = e.name, a = r.offset, o = a === void 0 ? [0, 0] : a, i = Jp.reduce(function(d, c) {
    return d[c] = nk(c, n.rects, o), d;
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
function ak(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ok(e) {
  return e === pr(e) || !hr(e) ? rd(e) : ak(e);
}
function ik(e) {
  var n = e.getBoundingClientRect(), r = Ut(n.width) / e.offsetWidth || 1, t = Ut(n.height) / e.offsetHeight || 1;
  return r !== 1 || t !== 1;
}
function lk(e, n, r) {
  r === void 0 && (r = !1);
  var t = hr(n), a = hr(n) && ik(n), o = pt(n), i = jt(e, a, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (t || !t && !r) && ((Vr(n) !== "body" || ad(o)) && (l = ok(n)), hr(n) ? (s = jt(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = td(o))), {
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
  e.forEach(function(o) {
    n.set(o.name, o);
  });
  function a(o) {
    r.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach(function(i) {
      if (!r.has(i)) {
        var l = n.get(i);
        l && a(l);
      }
    }), t.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || a(o);
  }), t;
}
function dk(e) {
  var n = uk(e);
  return Mw.reduce(function(r, t) {
    return r.concat(n.filter(function(a) {
      return a.phase === t;
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
    var a = r[t.name];
    return r[t.name] = a ? Object.assign({}, a, t, {
      options: Object.assign({}, a.options, t.options),
      data: Object.assign({}, a.data, t.data)
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
  var n = e, r = n.defaultModifiers, t = r === void 0 ? [] : r, a = n.defaultOptions, o = a === void 0 ? fc : a;
  return function(l, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, fc, o),
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
        h(), d.options = Object.assign({}, o, d.options, $), d.scrollParents = {
          reference: $t(l) ? ca(l) : l.contextElement ? ca(l.contextElement) : [],
          popper: ca(s)
        };
        var y = dk(fk([].concat(t, d.options.modifiers)));
        return d.orderedModifiers = y.filter(function(T) {
          return T.enabled;
        }), g(), v.update();
      },
      forceUpdate: function() {
        if (!f) {
          var w = d.elements, $ = w.reference, y = w.popper;
          if (vc($, y)) {
            d.rects = {
              reference: lk($, nd(y), d.options.strategy === "fixed"),
              popper: sk(y)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(R) {
              return d.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var T = 0; T < d.orderedModifiers.length; T++) {
              if (d.reset === !0) {
                d.reset = !1, T = -1;
                continue;
              }
              var z = d.orderedModifiers[T], P = z.fn, N = z.options, H = N === void 0 ? {} : N, M = z.name;
              typeof P == "function" && (d = P({
                state: d,
                options: H,
                name: M,
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
        var w = m.name, $ = m.options, y = $ === void 0 ? {} : $, T = m.effect;
        if (typeof T == "function") {
          var z = T({
            state: d,
            name: w,
            instance: v,
            options: y
          });
          c.push(z || function() {
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
var Za = { passive: !0 };
function pk(e) {
  var n = e.state, r = e.instance, t = e.options, a = t.scroll, o = a === void 0 ? !0 : a, i = t.resize, l = i === void 0 ? !0 : i, s = pr(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Za);
  }), l && s.addEventListener("resize", r.update, Za), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Za);
    }), l && s.removeEventListener("resize", r.update, Za);
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
    var t = n.styles[r] || {}, a = n.attributes[r] || {}, o = n.elements[r];
    !hr(o) || !Vr(o) || (Object.assign(o.style, t), Object.keys(a).forEach(function(i) {
      var l = a[i];
      l === !1 ? o.removeAttribute(i) : o.setAttribute(i, l === !0 ? "" : l);
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
      var a = n.elements[t], o = n.attributes[t] || {}, i = Object.keys(n.styles.hasOwnProperty(t) ? n.styles[t] : r[t]).reduce(function(l, s) {
        return l[s] = "", l;
      }, {});
      !hr(a) || !Vr(a) || (Object.assign(a.style, i), Object.keys(o).forEach(function(l) {
        a.removeAttribute(l);
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
}, Fl = (e, n) => Ck(e, Pk(n)), gc = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
});
function rm(e) {
  const n = O(null), r = O(null), t = O({
    width: 0,
    height: 0
  }), a = yn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(K, G) {
      C(G ? e.onOpen : e.onClose);
    }
  }), { zIndex: o } = Ma(() => a.value, 1);
  Gu(() => a.value, o);
  let i = null, l, s = !1, u = !1, d = 0, c = !0;
  xe(() => window, "keydown", A), me(() => [
    e.offsetX,
    e.offsetY,
    e.placement,
    e.strategy
  ], I), me(() => e.disabled, j), me(() => a.value, (K) => {
    K && I();
  }), wr(I), Tr(f), Xt(v);
  function f() {
    const K = R();
    i = $k(K, r.value, M()), K.addEventListener("mouseenter", m), K.addEventListener("mouseleave", w), K.addEventListener("click", T), document.addEventListener("click", z);
  }
  function v() {
    const K = R();
    K && (K.removeEventListener("mouseenter", m), K.removeEventListener("mouseleave", w), K.removeEventListener("click", T)), i.destroy(), document.removeEventListener("click", z);
  }
  function g() {
    const K = R();
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
    e.trigger === "hover" && (u = !0, d++, B());
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
  function T() {
    if (e.trigger === "click") {
      if (e.closeOnClickReference && a.value) {
        j();
        return;
      }
      B();
    }
  }
  function z(K) {
    const G = R();
    if (G && !G.contains(K.target)) {
      if (e.trigger !== "click") return;
      P(), C(e.onClickOutside, K);
    }
  }
  function P() {
    j();
  }
  function N() {
    I(), C(e.onClosed);
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
  function M() {
    const { placement: K, skidding: G, distance: ce } = H();
    return {
      placement: K,
      modifiers: [
        Fl(Ll({}, ek), { enabled: a.value }),
        Fl(Ll({}, tk), { options: { offset: [G, ce] } }),
        Fl(Ll({}, Qp), {
          options: {
            adaptive: !1,
            gpuAcceleration: !1
          },
          enabled: a.value
        }),
        {
          name: "applyTransformOrigin",
          enabled: a.value,
          phase: "beforeWrite",
          fn({ state: ge }) {
            ge.styles.popper.transformOrigin = h();
          }
        }
      ],
      strategy: e.strategy
    };
  }
  function R() {
    var K, G;
    const ce = (K = l ?? e.reference) != null ? K : n.value;
    return Pn(ce) ? (G = n.value) == null ? void 0 : G.querySelector(ce) : ce;
  }
  function E(K) {
    c = K;
  }
  function D(K) {
    v(), l = K, f();
  }
  function A(K) {
    const { closeOnKeyEscape: G = !1 } = e;
    K.key === "Escape" && G && a.value && (Ze(K), j());
  }
  function I() {
    i.setOptions(M());
  }
  function B() {
    e.disabled || (a.value = !0, C(e["onUpdate:show"], !0));
  }
  function j() {
    c && (a.value = !1, C(e["onUpdate:show"], !1));
  }
  return {
    show: a,
    popover: r,
    zIndex: o,
    host: n,
    referenceSize: t,
    handlePopoverClose: P,
    handlePopoverMouseenter: $,
    handlePopoverMouseleave: y,
    handleClosed: N,
    setReference: D,
    setAllowClose: E,
    resize: I,
    open: B,
    close: j
  };
}
var { name: Tk, n: Ek, classes: Dk } = ae("menu");
function Bk(e, n) {
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
    const { disabled: n } = Tt(), { popover: r, host: t, referenceSize: a, show: o, zIndex: i, handlePopoverMouseenter: l, handlePopoverMouseleave: s, handlePopoverClose: u, handleClosed: d, setAllowClose: c, open: f, close: v, resize: g, setReference: h } = rm(e);
    function m() {
      c(!0);
    }
    return {
      popover: r,
      host: t,
      referenceSize: a,
      show: o,
      zIndex: i,
      teleportDisabled: n,
      allowClose: m,
      formatElevation: zn,
      toSizeUnit: Te,
      n: Ek,
      classes: Dk,
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
tm.render = Bk;
var La = tm;
ue(La);
fe(La, _u);
var LA = La, Yt = La;
function am(e) {
  const { multiple: n, modelValue: r, optionProviders: t, optionProvidersLength: a, optionIsIndeterminate: o } = e, i = O(""), l = O([]);
  me(r, f, { deep: !0 }), me(a, f);
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
    v ? h.forEach((m) => m.sync(g.includes(d(m)), o ? o(m) : void 0)) : h.forEach((m) => m.sync(g === d(m))), s();
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
}, Lk = (e, n) => Mk(e, Ak(n)), yo = Lk(Vk({
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
}, Yk = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: Wk, n: Kk } = ae("menu-children");
function qk(e, n) {
  const r = x("var-menu-option"), t = x("var-menu-children"), a = x("var-menu");
  return b(), ke(a, {
    ref: "menu",
    show: e.show,
    "onUpdate:show": n[1] || (n[1] = (o) => e.show = o),
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
      highlight: e.highlightOptions.some((o) => o.value === e.option.value),
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
    fn: se(() => [L("div", qe({ ref: "menuOptions" }, e.radius !== "normal" ? { class: e.n(`--radius-${e.radius}`) } : {}), [(b(!0), k(Be, null, Ye(e.options, (o) => (b(), k(Be, { key: o[e.valueKey] }, [o[e.childrenKey] ? (b(), ke(t, {
      key: 0,
      ref_for: !0,
      ref: "menuChildren",
      "parent-show": e.show,
      option: o,
      options: o[e.childrenKey],
      "highlight-options": e.highlightOptions,
      disabled: o.disabled,
      radius: e.radius,
      onKeyArrowX: e.handleArrowLeft,
      onKeyArrowRightOpen: (i) => e.allowChildrenClose(o),
      onMouseenter: (i) => e.allowChildrenClose(o)
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
      label: o[e.labelKey],
      value: o[e.valueKey],
      option: o,
      ripple: o.ripple,
      disabled: o.disabled,
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
var om = te({
  name: Wk,
  components: {
    VarMenu: La,
    VarMenuOption: Va
  },
  props: jk({
    parentShow: Boolean,
    disabled: Boolean,
    option: {
      type: Object,
      required: !0
    },
    highlightOptions: Fe(yo, "options"),
    onKeyArrowX: V(),
    onKeyArrowRightOpen: V(),
    onMouseenter: V()
  }, Fe(yo, [
    "options",
    "valueKey",
    "labelKey",
    "childrenKey",
    "radius"
  ])),
  setup(e) {
    const n = O(!1), r = O(), t = O(), a = O(), o = O();
    me(() => e.parentShow, (f) => {
      f || (n.value = !1);
    }, { immediate: !0 });
    function i(f) {
      return Yk(this, null, function* () {
        var v;
        C(e.onKeyArrowX, f), f === "ArrowRight" && (C(e.onKeyArrowRightOpen), (v = r.value) == null || v.open(), yield qr(), Qu(r.value.$el, a.value, "ArrowDown"));
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
      (v = o.value) == null || v.forEach((g) => {
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
      menuOptions: a,
      menuChildren: o,
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
om.render = qk;
var Xk = om, Gk = Object.defineProperty, Zk = Object.defineProperties, Jk = Object.getOwnPropertyDescriptors, kc = Object.getOwnPropertySymbols, Qk = Object.prototype.hasOwnProperty, xk = Object.prototype.propertyIsEnumerable, $c = (e, n, r) => n in e ? Gk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, _k = (e, n) => {
  for (var r in n || (n = {})) Qk.call(n, r) && $c(e, r, n[r]);
  if (kc)
    for (var r of kc(n)) xk.call(n, r) && $c(e, r, n[r]);
  return e;
}, e$ = (e, n) => Zk(e, Jk(n)), { name: n$, n: r$, classes: t$ } = ae("menu-select");
function a$(e, n) {
  const r = x("var-menu-children"), t = x("var-menu-option"), a = x("var-menu");
  return b(), ke(a, {
    ref: "menu",
    show: e.show,
    "onUpdate:show": n[1] || (n[1] = (o) => e.show = o),
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
    }, [(b(!0), k(Be, null, Ye(e.options, (o) => (b(), k(Be, { key: o[e.valueKey] }, [o[e.childrenKey] ? (b(), ke(r, {
      key: 0,
      ref_for: !0,
      ref: "menuChildren",
      "parent-show": e.show,
      option: o,
      options: o[e.childrenKey],
      "highlight-options": e.highlightOptions,
      disabled: o.disabled,
      radius: e.radius,
      onKeyArrowRightOpen: (i) => e.allowChildrenClose(o),
      onMouseenter: (i) => e.allowChildrenClose(o)
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
      label: o[e.labelKey],
      value: o[e.valueKey],
      option: o,
      ripple: o.ripple,
      disabled: o.disabled,
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
  props: yo,
  setup(e) {
    const n = yn(e, "show"), r = O(), t = O(), a = O(), o = S(() => $(e.options)), { menuOptions: i, length: l, bindMenuOptions: s } = fw(), { computeLabel: u, getSelectedValue: d, getOptionProviderKey: c } = am({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => i,
      optionProvidersLength: () => l.value,
      optionIsIndeterminate(D) {
        var A;
        const I = g(D.value.value);
        if (!I) return !1;
        const B = ((A = I._children) != null ? A : []).filter((K) => !K.disabled), j = B.filter((K) => e.modelValue.includes(K.value));
        return j.length > 0 && j.length < B.length;
      }
    }), f = S(() => {
      const { multiple: D, modelValue: A } = e;
      if (D) return [];
      const I = o.value.find((K) => K.value === A), B = [];
      let j = I?._parent;
      for (; j; )
        B.push(j), j = j._parent;
      return B;
    });
    s({
      disabled: S(() => e.disabled),
      size: S(() => e.size),
      multiple: S(() => e.multiple),
      computeLabel: u,
      onSelect: y
    }), me(n, (D) => {
      D && Ne(v);
    }), xe(() => window, "keydown", z);
    function v() {
      const D = t.value;
      Tp(D, D?.querySelector(".var-menu-option--selected-color"));
    }
    function g(D) {
      return o.value.find((A) => A.value === D);
    }
    function h(D) {
      return i.find((A) => A.value.value === D);
    }
    function m(D) {
      return D[e.childrenKey];
    }
    function w(D) {
      const A = [];
      I(D);
      function I(B) {
        B.forEach((j) => {
          A.push(j);
          const K = m(j);
          K && I(K);
        });
      }
      return A;
    }
    function $(D) {
      function A(I, B) {
        return I.map((j) => {
          j = e$(_k({}, j), { _rawOption: j }), B && (j._parent = B);
          const K = m(j);
          if (K) {
            const G = A(K, j);
            j[e.childrenKey] = G, j._children = w(G);
          }
          return j;
        });
      }
      return w(A(D));
    }
    function y(D) {
      var A, I;
      if (e.disabled) return;
      const { multiple: B, closeOnSelect: j } = e, { value: K, label: G, selected: ce, disabled: ge, ripple: de } = D, Q = g(K.value);
      if (Q) {
        const $e = ((A = Q._children) != null ? A : []).filter((W) => !W.disabled).map((W) => W.value);
        B && ce.value && (i.forEach((W) => {
          $e.includes(W.value.value) && W.sync(!0, !1);
        }), T(Q)), B && !ce.value && (i.forEach((W) => {
          $e.includes(W.value.value) && W.sync(!1, !1);
        }), T(Q));
      }
      const ne = d(D), pe = (I = Q?._rawOption) != null ? I : {
        value: K.value,
        label: G.value,
        disabled: ge.value,
        ripple: de.value
      };
      C(e.onSelect, c(D), pe), C(e["onUpdate:modelValue"], ne), !B && j && (r.value.$el.focus(), M());
    }
    function T(D) {
      let A = D._parent;
      for (; A; ) {
        const I = h(A.value), B = m(A).filter((G) => !G.disabled), j = B.every((G) => !h(G.value).selected.value), K = B.every((G) => h(G.value).selected.value);
        j ? I.sync(!1, !1) : K ? I.sync(!0, !1) : I.sync(!1, !0), A = A._parent;
      }
    }
    function z(D) {
      if (e.disabled || !n.value) return;
      const { key: A } = D;
      if ([
        "Escape",
        "ArrowDown",
        "ArrowUp"
      ].includes(A) && Ze(D), A === "Escape") {
        r.value.$el.focus(), M(), C(e.onKeyEscape);
        return;
      }
      (A === "ArrowDown" || A === "ArrowUp") && Qu(r.value.$el, t.value, A, (I, B, j) => j ? !0 : P(I) === P(B));
    }
    function P(D) {
      var A, I;
      if (D.classList.contains("var-menu-option--children-trigger")) return (A = D.parentNode) == null ? void 0 : A.parentNode;
      if (D.classList.contains("var-checkbox")) {
        const B = (I = D.parentNode) == null ? void 0 : I.parentNode;
        if (B) return P(B);
      }
      return D.parentNode;
    }
    function N(D) {
      var A;
      (A = a.value) == null || A.forEach((I) => {
        if (I.allowClose(), D == null) {
          I.close();
          return;
        }
        I.option.value !== D.value && I.close();
      });
    }
    function H() {
      var D;
      (D = r.value) == null || D.open();
    }
    function M() {
      var D;
      (D = r.value) == null || D.close();
    }
    function R() {
      var D;
      (D = r.value) == null || D.resize();
    }
    function E(D) {
      var A;
      (A = r.value) == null || A.setReference(D);
    }
    return {
      show: n,
      menu: r,
      menuOptionsRef: t,
      menuChildren: a,
      highlightOptions: f,
      n: r$,
      classes: t$,
      allowChildrenClose: N,
      formatElevation: zn,
      open: H,
      close: M,
      resize: R,
      setReference: E
    };
  }
});
im.render = a$;
var xo = im;
ue(xo);
fe(xo, yo);
var FA = xo, Wt = xo, o$ = Object.defineProperty, Sc = Object.getOwnPropertySymbols, i$ = Object.prototype.hasOwnProperty, l$ = Object.prototype.propertyIsEnumerable, Cc = (e, n, r) => n in e ? o$(e, n, {
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
}, Fe(Ko, [
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
])), Pc = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: u$, n: d$ } = ae("auto-complete"), c$ = ["tabindex"];
function f$(e, n) {
  const r = x("var-input"), t = x("var-menu-option"), a = x("var-menu-select"), o = x("var-form-details");
  return b(), k("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocusin: n[2] || (n[2] = (...i) => e.focus && e.focus(...i)),
    onClick: n[3] || (n[3] = (...i) => e.handleClick && e.handleClick(...i))
  }, [U(a, {
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
    options: se(() => [L("div", { class: p(e.n("options")) }, [(b(!0), k(Be, null, Ye(e.viewOptions, (i) => (b(), ke(t, {
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
  ]), U(o, {
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
    const n = O(), r = O(), t = O(!1), a = yn(e, "modelValue"), o = O([]), i = O(!1), l = S(() => {
      const { maxlength: B } = e;
      return B ? Or(a.value) ? `0 / ${B}` : `${String(a.value).length}/${B}` : "";
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
    }), me(() => [e.options, t.value], N), C(f, h), xe(() => window, "keydown", P);
    function m() {
      C(e["onUpdate:modelValue"], ""), c();
    }
    function w() {
      return d(e.rules, e.modelValue);
    }
    function $() {
      t.value || e.disabled || v?.disabled.value || (t.value = !0, r.value.focus(), C(e.onFocus), z("onFocus"));
    }
    function y() {
      t.value && (t.value = !1, i.value = !1, r.value.blur(), C(e.onBlur), z("onBlur"));
    }
    function T() {
      i.value || y();
    }
    function z(B) {
      Ne(() => {
        const { validateTrigger: j, rules: K, modelValue: G } = e;
        u(j, B, K, G);
      });
    }
    function P(B) {
      return Pc(this, null, function* () {
        var j;
        if (v?.disabled.value || v?.readonly.value || e.disabled || e.readonly || !t.value || !i.value) return;
        const { key: K } = B;
        if (K === "Tab") {
          Ze(B), n.value.focus(), i.value = !1;
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
    function N() {
      t.value && (i.value = I(a.value)), i.value && (o.value = e.options);
    }
    function H(B, j) {
      N(), C(e.onInput, B, j), z("onInput");
    }
    function M() {
      g = !0, N(), C(e.onClear, a.value), z("onClear");
    }
    function R(B) {
      e.disabled || v?.disabled.value || (C(e.onClick, B), z("onClick"));
    }
    function E(B) {
      C(e.onChange, B), z("onChange");
    }
    function D(B) {
      return Pc(this, null, function* () {
        var j;
        e.maxlength != null && (B = B.slice(0, Z(e.maxlength))), B !== a.value && (a.value = B, C(e.onChange, B), z("onChange")), yield qr(), (j = r.value) == null || j.focus();
      });
    }
    function A() {
      r.value.focus();
    }
    function I(B) {
      return e.disabled || e.readonly || v?.disabled.value || v?.readonly.value ? !1 : e.options.length > 0 && (e.getShow != null ? e.getShow(B) : B.length > 0);
    }
    return {
      root: n,
      input: r,
      value: a,
      isShowMenuSelect: i,
      viewOptions: o,
      isFocusing: t,
      formDisabled: v?.disabled,
      formReadonly: v?.readonly,
      errorMessage: s,
      maxlengthText: l,
      n: d$,
      handleInput: H,
      handleClear: M,
      handleClick: R,
      handleChange: E,
      handleBlur: T,
      handleKeyEscape: A,
      handleAutoComplete: D,
      reset: m,
      validate: w,
      resetValidation: c,
      blur: y,
      focus: $
    };
  }
});
sm.render = f$;
var _o = sm;
ue(_o);
fe(_o, lm);
var HA = _o, ls = _o;
var um = 3600, dm = um * 24, v$ = dm * 7, Fa = 1e3, Oc = 60 * Fa, p$ = um * Fa, m$ = dm * Fa, g$ = v$ * Fa, cm = "millisecond", so = "second", uo = "minute", co = "hour";
var zc = "week", nt = "month", h$ = "quarter", oa = "year", ia = "date";
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
  var a = String(n);
  return !a || a.length >= r ? n : "" + Array(r + 1 - a.length).join(t) + n;
}, $$ = function(n) {
  var r = -n.utcOffset(), t = Math.abs(r), a = Math.floor(t / 60), o = t % 60;
  return (r <= 0 ? "+" : "-") + ss(a, 2, "0") + ":" + ss(o, 2, "0");
}, S$ = function e(n, r) {
  if (n.date() < r.date()) return -e(r, n);
  var t = (r.year() - n.year()) * 12 + (r.month() - n.month()), a = n.clone().add(t, nt), o = r - a < 0, i = n.clone().add(t + (o ? -1 : 1), nt);
  return +(-(t + (r - a) / (o ? a - i : i - a)) || 0);
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
}, fa = "en", wt = {};
wt[fa] = k$;
var fm = "$isDayjsObject", od = function(n) {
  return n instanceof ei || !!(n && n[fm]);
}, wo = function e(n, r, t) {
  var a;
  if (!n) return fa;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    wt[o] && (a = o), r && (wt[o] = r, a = o);
    var i = n.split("-");
    if (!a && i.length > 1) return e(i[0]);
  } else {
    var l = n.name;
    wt[l] = n, a = l;
  }
  return !t && a && (fa = a), a || !t && fa;
}, ln = function(n, r) {
  if (od(n)) return n.clone();
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
dn.l = wo;
dn.i = od;
dn.w = T$;
var E$ = function(n) {
  var r = n.date, t = n.utc;
  if (r === null) return /* @__PURE__ */ new Date(NaN);
  if (dn.u(r)) return /* @__PURE__ */ new Date();
  if (r instanceof Date) return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var a = r.match(y$);
    if (a) {
      var o = a[2] - 1 || 0, i = (a[7] || "0").substring(0, 3);
      return t ? new Date(Date.UTC(a[1], o, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, i)) : new Date(a[1], o, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, i);
    }
  }
  return new Date(r);
}, ei = /* @__PURE__ */ (function() {
  function e(r) {
    this.$L = wo(r.locale, null, !0), this.parse(r), this.$x = this.$x || r.x || {}, this[fm] = !0;
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
  }, n.isSame = function(t, a) {
    var o = ln(t);
    return this.startOf(a) <= o && o <= this.endOf(a);
  }, n.isAfter = function(t, a) {
    return ln(t) < this.startOf(a);
  }, n.isBefore = function(t, a) {
    return this.endOf(a) < ln(t);
  }, n.$g = function(t, a, o) {
    return dn.u(t) ? this[a] : this.set(o, t);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(t, a) {
    var o = this, i = dn.u(a) ? !0 : a, l = dn.p(t), s = function(w, $) {
      var y = dn.w(o.$u ? Date.UTC(o.$y, $, w) : new Date(o.$y, $, w), o);
      return i ? y : y.endOf("day");
    }, u = function(w, $) {
      return dn.w(o.toDate()[w].apply(o.toDate("s"), (i ? [
        0,
        0,
        0,
        0
      ] : [
        23,
        59,
        59,
        999
      ]).slice($)), o);
    }, d = this.$W, c = this.$M, f = this.$D, v = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case oa:
        return i ? s(1, 0) : s(31, 11);
      case nt:
        return i ? s(1, c) : s(0, c + 1);
      case zc:
        var g = this.$locale().weekStart || 0, h = (d < g ? d + 7 : d) - g;
        return s(i ? f - h : f + (6 - h), c);
      case "day":
      case ia:
        return u(v + "Hours", 0);
      case co:
        return u(v + "Minutes", 1);
      case uo:
        return u(v + "Seconds", 2);
      case so:
        return u(v + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(t) {
    return this.startOf(t, !1);
  }, n.$set = function(t, a) {
    var o, i = dn.p(t), l = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o.day = l + "Date", o[ia] = l + "Date", o[nt] = l + "Month", o[oa] = l + "FullYear", o[co] = l + "Hours", o[uo] = l + "Minutes", o[so] = l + "Seconds", o[cm] = l + "Milliseconds", o)[i], u = i === "day" ? this.$D + (a - this.$W) : a;
    if (i === "month" || i === "year") {
      var d = this.clone().set(ia, 1);
      d.$d[s](u), d.init(), this.$d = d.set(ia, Math.min(this.$D, d.daysInMonth())).$d;
    } else s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(t, a) {
    return this.clone().$set(t, a);
  }, n.get = function(t) {
    return this[dn.p(t)]();
  }, n.add = function(t, a) {
    var o = this, i;
    t = Number(t);
    var l = dn.p(a), s = function(f) {
      var v = ln(o);
      return dn.w(v.date(v.date() + Math.round(f * t)), o);
    };
    if (l === "month") return this.set(nt, this.$M + t);
    if (l === "year") return this.set(oa, this.$y + t);
    if (l === "day") return s(1);
    if (l === "week") return s(7);
    var u = (i = {}, i.minute = 6e4, i.hour = 36e5, i.second = 1e3, i)[l] || 1, d = this.$d.getTime() + t * u;
    return dn.w(d, this);
  }, n.subtract = function(t, a) {
    return this.add(t * -1, a);
  }, n.format = function(t) {
    var a = this, o = this.$locale();
    if (!this.isValid()) return o.invalidDate || "Invalid Date";
    var i = t || "YYYY-MM-DDTHH:mm:ssZ", l = dn.z(this), s = this.$H, u = this.$m, d = this.$M, c = o.weekdays, f = o.months, v = o.meridiem, g = function(y, T, z, P) {
      return y && (y[T] || y(a, i)) || z[T].slice(0, P);
    }, h = function(y) {
      return dn.s(s % 12 || 12, y, "0");
    }, m = v || function($, y, T) {
      var z = $ < 12 ? "AM" : "PM";
      return T ? z.toLowerCase() : z;
    }, w = function(y) {
      switch (y) {
        case "YY":
          return String(a.$y).slice(-2);
        case "YYYY":
          return dn.s(a.$y, 4, "0");
        case "M":
          return d + 1;
        case "MM":
          return dn.s(d + 1, 2, "0");
        case "MMM":
          return g(o.monthsShort, d, f, 3);
        case "MMMM":
          return g(f, d);
        case "D":
          return a.$D;
        case "DD":
          return dn.s(a.$D, 2, "0");
        case "d":
          return String(a.$W);
        case "dd":
          return g(o.weekdaysMin, a.$W, c, 2);
        case "ddd":
          return g(o.weekdaysShort, a.$W, c, 3);
        case "dddd":
          return c[a.$W];
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
          return String(a.$s);
        case "ss":
          return dn.s(a.$s, 2, "0");
        case "SSS":
          return dn.s(a.$ms, 3, "0");
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
  }, n.diff = function(t, a, o) {
    var i = this, l = dn.p(a), s = ln(t), u = (s.utcOffset() - this.utcOffset()) * Oc, d = this - s, c = function() {
      return dn.m(i, s);
    }, f;
    switch (l) {
      case oa:
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
      case co:
        f = d / p$;
        break;
      case uo:
        f = d / Oc;
        break;
      case so:
        f = d / Fa;
        break;
      default:
        f = d;
    }
    return o ? f : dn.a(f);
  }, n.daysInMonth = function() {
    return this.endOf(nt).$D;
  }, n.$locale = function() {
    return wt[this.$L];
  }, n.locale = function(t, a) {
    if (!t) return this.$L;
    var o = this.clone(), i = wo(t, a, !0);
    return i && (o.$L = i), o;
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
  ["$s", so],
  ["$m", uo],
  ["$H", co],
  ["$W", "day"],
  ["$M", nt],
  ["$y", oa],
  ["$D", ia]
].forEach(function(e) {
  vm[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ln.extend = function(e, n) {
  return e.$i || (e(n, ei, ln), e.$i = !0), ln;
};
ln.locale = wo;
ln.isDayjs = od;
ln.unix = function(e) {
  return ln(e * 1e3);
};
ln.en = wt[fa];
ln.Ls = wt;
ln.p = {};
var D$ = function(n) {
  return n.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(r, t, a) {
    return t || a.slice(1);
  });
}, B$ = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
}, I$ = function(n, r) {
  return n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t, a, o) {
    var i = o && o.toUpperCase();
    return a || r[o] || B$[o] || D$(r[i]);
  });
}, M$ = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, Tc = /\d/, ra = /\d\d/, A$ = /\d{3}/, N$ = /\d{4}/, Cr = /\d\d?/, R$ = /[+-]?\d+/, V$ = /[+-]\d\d:?(\d\d)?|Z/, ta = /\d*[^-_:/,()\s\d]+/, lt = {}, pm = function(n) {
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
}, Dc = function(n, r) {
  var t, a = lt.meridiem;
  if (!a) t = n === (r ? "pm" : "PM");
  else for (var o = 1; o <= 24; o += 1) if (n.indexOf(a(o, 0, r)) > -1) {
    t = o > 12;
    break;
  }
  return t;
}, F$ = {
  A: [ta, function(e) {
    this.afternoon = Dc(e, !1);
  }],
  a: [ta, function(e) {
    this.afternoon = Dc(e, !0);
  }],
  Q: [Tc, function(e) {
    this.month = (e - 1) * 3 + 1;
  }],
  S: [Tc, function(e) {
    this.milliseconds = +e * 100;
  }],
  SS: [ra, function(e) {
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
  DD: [ra, qn("day")],
  Do: [ta, function(e) {
    var n = lt.ordinal, r = e.match(/\d+/);
    if (this.day = r[0], !!n)
      for (var t = 1; t <= 31; t += 1) n(t).replace(/\[|\]/g, "") === e && (this.day = t);
  }],
  w: [Cr, qn("week")],
  ww: [ra, qn("week")],
  M: [Cr, qn("month")],
  MM: [ra, qn("month")],
  MMM: [ta, function(e) {
    var n = Hl("months"), r = (Hl("monthsShort") || n.map(function(t) {
      return t.slice(0, 3);
    })).indexOf(e) + 1;
    if (r < 1) throw new Error();
    this.month = r % 12 || r;
  }],
  MMMM: [ta, function(e) {
    var n = Hl("months").indexOf(e) + 1;
    if (n < 1) throw new Error();
    this.month = n % 12 || n;
  }],
  Y: [R$, qn("year")],
  YY: [ra, function(e) {
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
    var a = n[t], o = F$[a], i = o && o[0], l = o && o[1];
    l ? n[t] = {
      regex: i,
      parser: l
    } : n[t] = a.replace(/^\[|\]$/g, "");
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
var j$ = function(n, r, t, a) {
  try {
    if (["x", "X"].indexOf(r) > -1) return /* @__PURE__ */ new Date((r === "X" ? 1e3 : 1) * n);
    var o = U$(r)(n), i = o.year, l = o.month, s = o.day, u = o.hours, d = o.minutes, c = o.seconds, f = o.milliseconds, v = o.zone, g = o.week, h = /* @__PURE__ */ new Date(), m = s || (!i && !l ? h.getDate() : 1), w = i || h.getFullYear(), $ = 0;
    i && !l || ($ = l > 0 ? l - 1 : h.getMonth());
    var y = u || 0, T = d || 0, z = c || 0, P = f || 0;
    if (v) return new Date(Date.UTC(w, $, m, y, T, z, P + v.offset * 60 * 1e3));
    if (t) return new Date(Date.UTC(w, $, m, y, T, z, P));
    var N = new Date(w, $, m, y, T, z, P);
    return g && (N = a(N).week(g).toDate()), N;
  } catch {
    return /* @__PURE__ */ new Date("");
  }
}, Y$ = (function(e, n, r) {
  r.p.customParseFormat = !0, e && e.parseTwoDigitYear && (pm = e.parseTwoDigitYear);
  var t = n.prototype, a = t.parse;
  t.parse = function(o) {
    var i = o.date, l = o.utc, s = o.args;
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
    else a.call(this, o);
  };
}), W$ = (function(e, n) {
  n.prototype.isSameOrAfter = function(r, t) {
    return this.isSame(r, t) || this.isAfter(r, t);
  };
}), K$ = (function(e, n) {
  n.prototype.isSameOrBefore = function(r, t) {
    return this.isSame(r, t) || this.isBefore(r, t);
  };
}), Bc = (e) => Pn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, Ic = (e) => Pn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, q$ = (e) => {
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
}, Mc = !1, Ha = () => (Mc || (ln.extend(Y$), ln.extend(W$), ln.extend(K$), Mc = !0), ln), us = (e) => e, Ac = (e) => e ** 3, mm = (e) => e < 0.5 ? Ac(e * 2) / 2 : 1 - Ac((1 - e) * 2) / 2, Gr = (e, n, r = "") => {
  if (e === void 0 && (e = ""), e.length >= n) return e;
  const t = n - e.length, a = Math.floor(t / r.length);
  return r.repeat(a) + r.slice(0, t % r.length) + e;
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
}, ni = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), Q$ = "background-image", x$ = "lazy-loading", _$ = "lazy-error", Vc = "lazy-attempt", eS = [
  "scroll",
  "wheel",
  "mousewheel",
  "resize",
  "animationend",
  "transitionend",
  "touchmove"
], ds = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Kt = [], ko = [], gm = q$(100), Mn = {
  loading: ds,
  error: ds,
  attempt: 3,
  throttleWait: 300,
  events: eS
}, id = Fu(Ua, Mn.throttleWait);
function ri(e, n) {
  e._lazy.arg === Q$ ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function nS(e) {
  e._lazy.loading && ri(e, e._lazy.loading), Ua();
}
function rS(e) {
  e._lazy.error && ri(e, e._lazy.error), e._lazy.state = "error", sd(e), Ua();
}
function hm(e, n) {
  ri(e, n), e._lazy.state = "success", sd(e), Ua();
}
function tS(e) {
  var n;
  ko.includes(e) || (ko.push(e), (n = Mn.events) == null || n.forEach((r) => {
    e.addEventListener(r, id, { passive: !0 });
  }));
}
function aS() {
  ko.forEach((e) => {
    var n;
    (n = Mn.events) == null || n.forEach((r) => {
      e.removeEventListener(r, id);
    });
  }), ko.length = 0;
}
function oS(e, n) {
  var r, t;
  const a = {
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
  }, a), ri(e, ds), C(Mn.filter, e._lazy);
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
function Ua() {
  Kt.forEach((e) => ld(e));
}
function lS(e) {
  return ni(this, null, function* () {
    !Kt.includes(e) && Kt.push(e), Fy(e).forEach(tS), yield ld(e);
  });
}
function sd(e) {
  Vt(Kt, e), Kt.length === 0 && aS();
}
function sS(e, n) {
  const { src: r, arg: t } = e._lazy;
  return r !== n.value || t !== n.arg;
}
function ym(e, n) {
  return ni(this, null, function* () {
    oS(e, n), yield lS(e);
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
  const { events: n, loading: r, error: t, attempt: a, throttleWait: o, filter: i } = e;
  Mn.events = n ?? Mn.events, Mn.loading = r ?? Mn.loading, Mn.error = t ?? Mn.error, Mn.attempt = a ?? Mn.attempt, Mn.throttleWait = o ?? Mn.throttleWait, Mn.filter = i;
}
var wm = {
  mounted: ym,
  unmounted: sd,
  updated: uS,
  install(e, n) {
    dS(n), id = Fu(Ua, Mn.throttleWait), e.directive("lazy", this);
  }
}, UA = wm, wa = wm, km = {
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
].includes(e), { name: fS, n: vS, classes: pS } = ae("avatar"), mS = [
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
  }, [e.src ? (b(), k(Be, { key: 0 }, [e.lazy ? We((b(), k("img", {
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
  directives: { Lazy: wa },
  props: km,
  setup(e) {
    const n = O(null), r = O(null), t = O(1);
    On(a), zt(a);
    function a() {
      if (!n.value || !r.value) {
        t.value = 1;
        return;
      }
      const s = n.value.offsetWidth, u = r.value.offsetWidth;
      s > u ? t.value = 1 : t.value = s / u;
    }
    function o(s) {
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
      handleLoad: o,
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
}, { name: bS, n: yS, classes: wS } = ae("avatar-group");
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
var ai = Cm;
ue(ai);
fe(ai, Sm);
var YA = ai, fs = ai, jr = {
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
}, { name: $S, n: SS, classes: CS } = ae("loading");
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
    (b(!0), k(Be, null, Ye(e.loadingTypeDict, (r, t) => (b(), k(Be, { key: t }, [e.type === t ? (b(), k("div", {
      key: 0,
      class: p(e.classes(e.n(t), e.n(`${t}--${e.size}`)))
    }, [(b(!0), k(Be, null, Ye(r, (a) => (b(), k("div", {
      key: a + t,
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
var oi = Pm;
ue(oi);
fe(oi, jr);
var WA = oi, St = oi, OS = Object.defineProperty, zS = Object.defineProperties, TS = Object.getOwnPropertyDescriptors, Lc = Object.getOwnPropertySymbols, ES = Object.prototype.hasOwnProperty, DS = Object.prototype.propertyIsEnumerable, Fc = (e, n, r) => n in e ? OS(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Hc = (e, n) => {
  for (var r in n || (n = {})) ES.call(n, r) && Fc(e, r, n[r]);
  if (Lc)
    for (var r of Lc(n)) DS.call(n, r) && Fc(e, r, n[r]);
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
function BS() {
  const { bindChildren: e, childProviders: n, length: r } = Bn(zm);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function IS() {
  const { bindParent: e, parentProvider: n, index: r } = Dn(zm);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var { name: MS, n: AS, classes: NS } = ae("button"), RS = [
  "tabindex",
  "type",
  "disabled"
];
function VS(e, n) {
  const r = x("var-loading"), t = x("var-hover-overlay"), a = _e("ripple"), o = _e("hover");
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
  ], 46, RS)), [[a, { disabled: e.disabled || !e.ripple || e.loading || e.pending }], [
    o,
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
    const n = O(!1), r = O(!1), { buttonGroup: t } = IS(), { hovering: a, handleHovering: o } = ur(), i = S(() => {
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
      const { type: $, size: y, color: T, textColor: z, mode: P, elevation: N } = t;
      return {
        elevation: "",
        type: (v = e.type) != null ? v : $.value,
        size: (g = e.size) != null ? g : y.value,
        color: (h = e.color) != null ? h : T.value,
        textColor: (m = e.textColor) != null ? m : z.value,
        text: P.value === "text" || P.value === "outline",
        outline: P.value === "outline",
        iconContainer: P.value === "tonal" || P.value === "icon-container",
        elevationDisabled: P.value === "tonal",
        filledDefault: P.value === "normal" && ((w = e.type) != null ? w : $.value) === "default" && (N.value === !1 || Z(N.value) === 0)
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
      hovering: a,
      isFocusing: n,
      n: AS,
      classes: NS,
      handleHovering: o,
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
}, { name: LS, n: FS, classes: HS } = ae("back-top");
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
  }, e.$attrs, { onClick: n[0] || (n[0] = Nn((...a) => e.handleClick && e.handleClick(...a), ["stop"])) }), [F(e.$slots, "default", {}, () => [U(t, {
    elevation: e.elevation,
    type: "primary",
    "var-back-top-cover": ""
  }, {
    default: se(() => [U(r, { name: "chevron-up" })]),
    _: 1
  }, 8, ["elevation"])])], 16)], 8, ["disabled"]);
}
var Dm = te({
  name: LS,
  components: {
    VarButton: Jn,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: Em,
  setup(e) {
    const n = O(!1), r = O(null), t = O(!0);
    let a;
    const o = Fu(() => {
      i();
    }, 200);
    Tr(() => {
      s(), u(), i(), t.value = !1;
    }), ft(u), Zt(d);
    function i() {
      n.value = kt(a) >= fn(e.visibilityHeight);
    }
    function l(c) {
      C(e.onClick, c);
      const f = Lu(a);
      ga(a, {
        left: f,
        duration: e.duration,
        animation: mm
      });
    }
    function s() {
      a = e.target ? Op(e.target, "BackTop") : ut(r.value);
    }
    function u() {
      a.addEventListener("scroll", o);
    }
    function d() {
      a && a.removeEventListener("scroll", o);
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
Dm.render = US;
var li = Dm;
ue(li);
fe(li, Em);
var qA = li, vs = li, Bm = {
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
}, { name: qS, n: XS, classes: GS } = ae("badge"), ZS = { key: 0 };
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
      n: XS,
      classes: GS
    };
  }
});
Im.render = JS;
var si = Im;
ue(si);
fe(si, Bm);
var XA = si, ka = si, Mm = {
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
  const { childProviders: e, length: n, bindChildren: r } = Bn(Am);
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
}, { name: nC, n: rC, classes: tC } = ae("bottom-navigation"), { n: ui } = ae("bottom-navigation-item"), Xc = ui("--right-half-space"), Gc = ui("--left-half-space"), Zc = ui("--right-space"), aC = { type: "primary" };
function oC(e, n) {
  const r = x("var-button");
  return b(), k(Be, null, [L("div", qe({
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
    const r = O(null), t = S(() => e.animated), a = S(() => e.active), o = S(() => e.activeColor), i = S(() => e.inactiveColor), l = S(() => e.variant), s = O(), u = O({}), { length: d, bottomNavigationItems: c, bindBottomNavigationItem: f } = QS();
    f({
      animated: t,
      active: a,
      activeColor: o,
      inactiveColor: i,
      variant: l,
      onToggle: w
    }), me(() => d.value, v), me(() => e.fabProps, (R) => {
      u.value = qc(qc({}, aC), R);
    }, {
      immediate: !0,
      deep: !0
    }), wr(M), On(() => {
      M(), n.fab && z(d.value);
    }), zt(() => {
      T(), n.fab && z(d.value);
    });
    function v() {
      d.value === 0 || g() || h() || m();
    }
    function g() {
      return c.find(({ name: R }) => a.value === R.value);
    }
    function h() {
      return c.find(({ index: R }) => a.value === R.value);
    }
    function m() {
      tr(a.value) && (a.value < 0 ? C(e["onUpdate:active"], 0) : a.value > d.value - 1 && C(e["onUpdate:active"], d.value - 1));
    }
    function w(R) {
      a.value !== R && (e.onBeforeChange ? $(R) : y(R));
    }
    function $(R) {
      const E = Kr(C(e.onBeforeChange, R));
      Promise.all(E).then((D) => {
        D.every(Boolean) && y(R);
      });
    }
    function y(R) {
      C(e["onUpdate:active"], R), C(e.onChange, R);
    }
    function T() {
      N().forEach((R) => {
        R.classList.remove(Xc, Gc, Zc);
      });
    }
    function z(R) {
      const E = N(), D = E.length, A = R % 2 === 0;
      E.forEach((I, B) => {
        P(A, I, B, D);
      });
    }
    function P(R, E, D, A) {
      const I = D === A - 1;
      if (!R && I) {
        E.classList.add(Zc);
        return;
      }
      const B = D === A / 2 - 1, j = D === A / 2;
      B ? E.classList.add(Xc) : j && E.classList.add(Gc);
    }
    function N() {
      return Array.from(r.value.querySelectorAll(`.${ui()}`));
    }
    function H() {
      C(e.onFabClick);
    }
    function M() {
      if (!e.fixed || !e.placeholder) return;
      const { height: R } = kn(r.value);
      s.value = Te(R);
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
Nm.render = oC;
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
  const { parentProvider: e, index: n, bindParent: r } = Dn(Am);
  return ar(!!r, "BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var { name: lC, n: sC, classes: uC } = ae("bottom-navigation-item"), dC = {
  type: "danger",
  dot: !0
};
function cC(e, n) {
  const r = x("var-icon"), t = x("var-badge"), a = _e("ripple");
  return We((b(), k("button", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")], [e.animated, e.n("--animated")])),
    style: J({ color: e.isActive ? e.activeColor : e.inactiveColor }),
    onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
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
  }, null, 8, ["name", "namespace"])) : X("v-if", !0)])], 2)) : X("v-if", !0)], 2), L("span", { class: p(e.n("label")) }, [F(e.$slots, "default", {}, () => [Le(ve(e.label), 1)])], 2)], 6)), [[a]]);
}
var Vm = te({
  name: lC,
  components: {
    VarBadge: ka,
    VarIcon: Je
  },
  directives: { Ripple: vn },
  props: Rm,
  setup(e) {
    const { index: n, bottomNavigation: r, bindBottomNavigation: t } = iC(), a = S(() => e.name), o = S(() => [a.value, n.value].includes(s.value)), i = S(() => e.badge === !0 ? dC : e.badge), { animated: l, active: s, activeColor: u, inactiveColor: d, variant: c } = r;
    t({
      name: a,
      index: n
    });
    function f() {
      var v;
      const g = (v = a.value) != null ? v : n.value;
      C(e.onClick, g), C(r.onToggle, g);
    }
    return {
      animated: l,
      activeColor: u,
      inactiveColor: d,
      badgeProps: i,
      isActive: o,
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
  const { childProviders: e, bindChildren: n, length: r } = Bn(Fm);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function vC() {
  const { parentProvider: e, bindParent: n, index: r } = Dn(Fm);
  return ar(!!n, "Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var { name: pC, n: mC, classes: gC } = ae("breadcrumb");
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
    const { index: n, breadcrumb: r, bindBreadcrumb: t } = vC(), a = S(() => n.value === r.length.value - 1), o = S(() => r.separator.value);
    t(null);
    function i(l) {
      a.value || C(e.onClick, l);
    }
    return {
      n: mC,
      classes: gC,
      isLast: a,
      parentSeparator: o,
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
} }, { name: bC, n: yC } = ae("breadcrumbs");
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
}, { name: kC, n: $C, classes: SC } = ae("button-group");
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
    const { bindButtons: n } = BS();
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
}, PC = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: OC, n: zC, classes: TC } = ae("card"), EC = 500, DC = ["src", "alt"];
function BC(e, n) {
  const r = x("var-hover-overlay"), t = x("var-icon"), a = x("var-button"), o = _e("ripple"), i = _e("hover");
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
    }, null, 14, DC)) : X("v-if", !0)]),
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
    }, [F(e.$slots, "close-button", {}, () => [U(a, {
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
  }, null, 6)], 6)), [[o, {
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
    const n = O(null), r = O(null), t = O("auto"), a = O("auto"), o = O("100%"), i = O("100%"), l = O("auto"), s = O("auto"), u = O(void 0), d = O("hidden"), c = O("0px"), f = O("0"), v = S(() => e.layout === "row"), g = S(() => e.surface === "low" && e.variant !== "filled"), { hovering: h, handleHovering: m } = ur(), w = O(!1), $ = O(!1), { zIndex: y } = Ma(() => e.floating, 1), T = S(() => D(e.ripple)), z = S(() => A(e.hoverable));
    let P = "auto", N = "auto", H = null;
    const M = O(null);
    let R = !1;
    Ia(() => e.floating, () => !v.value), me(() => e.floating, (K) => {
      v.value || Ne(() => {
        K ? (R = !0, E()) : R && I();
      });
    }, { immediate: !0 });
    function E() {
      clearTimeout(M.value), clearTimeout(H), M.value = null, M.value = setTimeout(() => PC(null, null, function* () {
        const { width: K, height: G, left: ce, top: ge } = kn(n.value);
        t.value = Te(K), a.value = Te(G), o.value = t.value, i.value = a.value, l.value = Te(ge), s.value = Te(ce), u.value = "fixed", P = l.value, N = s.value, w.value = !0, yield Gn(), l.value = "0", s.value = "0", o.value = "100vw", i.value = "100vh", c.value = "auto", f.value = "1", d.value = "auto", $.value = !0;
      }), T.value.disabled ? 0 : EC);
    }
    function D(K) {
      return Sn(K) ? {
        disabled: !!K.disabled,
        color: K.color
      } : {
        disabled: !K,
        color: void 0
      };
    }
    function A(K) {
      return Sn(K) ? {
        disabled: !!K.disabled,
        color: K.color
      } : {
        disabled: !K,
        color: void 0
      };
    }
    function I() {
      clearTimeout(H), clearTimeout(M.value), M.value = null, o.value = t.value, i.value = a.value, l.value = P, s.value = N, c.value = "0px", f.value = "0", w.value = !1, H = setTimeout(() => {
        t.value = "auto", a.value = "auto", o.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", P = "auto", N = "auto", d.value = "hidden", u.value = void 0, $.value = !1;
      }, e.floatingDuration);
    }
    function B() {
      C(e["onUpdate:floating"], !1);
    }
    function j(K) {
      C(e.onClick, K);
    }
    return {
      card: n,
      cardFloater: r,
      holderWidth: t,
      holderHeight: a,
      floater: M,
      floaterWidth: o,
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
      normalizedRipple: T,
      normalizedHoverable: z,
      hovering: h,
      handleHovering: m,
      showFloatingButtons: w,
      floated: $,
      n: zC,
      classes: TC,
      toSizeUnit: Te,
      close: B,
      formatElevation: zn,
      handleClick: j
    };
  }
});
qm.render = BC;
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
}, { name: IC, n: MC, classes: AC } = ae("cell");
function NC(e, n) {
  const r = x("var-icon"), t = _e("ripple");
  return We((b(), k("div", {
    class: p(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
    style: J(e.borderOffsetStyles),
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
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
}, { name: RC, n: VC, classes: LC } = ae("checkbox-group");
function FC(e, n) {
  const r = x("maybe-v-node"), t = x("var-checkbox"), a = x("var-form-details");
  return b(), k("div", { class: p(e.n("wrap")) }, [L("div", { class: p(e.classes(e.n(), e.n(`--${e.direction}`))) }, [e.options.length ? (b(!0), k(Be, { key: 0 }, Ye(e.options, (o) => (b(), ke(t, {
    key: o[e.valueKey],
    "checked-value": o[e.valueKey],
    disabled: o.disabled
  }, {
    default: se(({ checked: i }) => [U(r, { is: e.isFunction(o[e.labelKey]) ? o[e.labelKey](o, i) : o[e.labelKey] }, null, 8, ["is"])]),
    _: 2
  }, 1032, ["checked-value", "disabled"]))), 128)) : X("v-if", !0), F(e.$slots, "default")], 2), U(a, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
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
    const n = S(() => e.max), r = S(() => e.modelValue.length), { length: t, checkboxes: a, bindCheckboxes: o } = ow(), { bindForm: i } = Wn(), { errorMessage: l, validateWithTrigger: s, validate: u, resetValidation: d } = xn(), c = {
      max: n,
      checkedCount: r,
      onChecked: g,
      onUnchecked: h,
      validate: T,
      resetValidation: d,
      reset: y,
      errorMessage: S(() => l.value)
    };
    me(() => e.modelValue, m, { deep: !0 }), me(() => t.value, m), o(c), C(i, c);
    function f(z) {
      Ne(() => {
        const { validateTrigger: P, rules: N, modelValue: H } = e;
        s(P, z, N, H);
      });
    }
    function v(z) {
      C(e["onUpdate:modelValue"], z), C(e.onChange, z), f("onChange");
    }
    function g(z) {
      const { modelValue: P } = e;
      P.includes(z) || v([...P, z]);
    }
    function h(z) {
      const { modelValue: P } = e;
      P.includes(z) && v(P.filter((N) => N !== z));
    }
    function m() {
      a.forEach(({ sync: z }) => z(e.modelValue));
    }
    function w() {
      const z = a.map(({ checkedValue: N }) => N.value), P = Ql(z);
      return C(e["onUpdate:modelValue"], P), P;
    }
    function $() {
      const z = a.filter(({ checked: N }) => !N.value).map(({ checkedValue: N }) => N.value), P = Ql(z);
      return C(e["onUpdate:modelValue"], P), P;
    }
    function y() {
      C(e["onUpdate:modelValue"], []), d();
    }
    function T() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: VC,
      classes: LC,
      checkAll: w,
      inverseAll: $,
      reset: y,
      validate: T,
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
}, { name: HC, n: xr, classes: UC } = ae("chip");
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
      const { plain: o, textColor: i, color: l } = e;
      return o ? {
        color: i || l,
        borderColor: l
      } : {
        color: i,
        background: l
      };
    }), r = S(() => {
      const { size: o, block: i, type: l, plain: s, round: u } = e, d = xr(i ? "$--flex" : "$--inline-flex"), c = s ? `${xr("plain")} ${xr(`plain-${l}`)}` : xr(`--${l}`), f = u ? xr("--round") : null;
      return [
        xr(`--${o}`),
        d,
        c,
        f
      ];
    }), t = S(() => {
      var o, i;
      return (i = (o = e.icon) != null ? o : e.iconName) != null ? i : "close-circle";
    });
    function a(o) {
      C(e.onClose, o);
    }
    return {
      chipStyle: n,
      contentClass: r,
      closeIconName: t,
      n: xr,
      classes: UC,
      formatElevation: zn,
      handleClose: a
    };
  }
});
xm.render = jC;
var bi = xm;
ue(bi);
fe(bi, Qm);
var rN = bi, $o = bi, $s = /* @__PURE__ */ Symbol("HIGHLIGHTER_PROVIDER_KEY");
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
}, KC = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: qC, n: XC, classes: GC } = ae("code"), ZC = ["innerHTML"];
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
    const { highlighter: n, theme: r } = WC(), t = O(""), a = S(() => {
      var o;
      return (o = e.theme) != null ? o : r?.value;
    });
    return n && me(() => [
      n.value,
      e.code,
      e.language,
      a.value,
      e.trim
    ], (o) => KC(null, [o], function* ([i, l, s = "", u = "", d]) {
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
  const { length: e, childProviders: n, bindChildren: r } = Bn(rg);
  return {
    length: e,
    cols: n,
    bindCols: r
  };
}
function xC() {
  const { index: e, bindParent: n, parentProvider: r } = Dn(rg);
  return {
    index: e,
    row: r,
    bindRow: n
  };
}
var { name: _C, n: Ja, classes: e2 } = ae("col");
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
      const [u = 0, d = 0] = (s = a?.average.value) != null ? s : [];
      return {
        left: d,
        right: d,
        top: u,
        bottom: u
      };
    }), { row: a, bindRow: o } = xC();
    C(o, null);
    function i(s, u) {
      const d = [];
      if (u == null) return d;
      if (Sn(u)) {
        const { offset: c, span: f } = u;
        return Number(f) >= 0 && d.push(Ja(`--span-${s}-${f}`)), c && d.push(Ja(`--offset-${s}-${c}`)), d;
      }
      return Number(u) >= 0 && d.push(Ja(`--span-${s}-${u}`)), d;
    }
    function l(s) {
      C(e.onClick, s);
    }
    return {
      span: n,
      offset: r,
      padding: t,
      n: Ja,
      classes: e2,
      toNumber: Z,
      toSizeUnit: Te,
      getSize: i,
      handleClick: l,
      padStartFlex: bo
    };
  }
});
tg.render = n2;
var wi = tg;
ue(wi);
fe(wi, ng);
var aN = wi, Cs = wi, ag = {
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
function r2() {
  const { childProviders: e, length: n, bindChildren: r } = Bn(og);
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: r
  };
}
var { name: t2, n: a2 } = ae("collapse");
function o2(e, n) {
  return b(), k("div", { class: p(e.n()) }, [F(e.$slots, "default")], 2);
}
var ig = te({
  name: t2,
  props: ag,
  setup(e) {
    const n = S(() => e.offset), r = S(() => e.divider), t = S(() => e.elevation), a = S(() => e.accordion), o = S(() => Kr(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = r2(), u = {
      offset: n,
      divider: r,
      elevation: t,
      accordion: a,
      updateItem: d
    };
    me(() => i.value, () => Ne().then(v)), me(() => e.modelValue, () => Ne().then(v)), s(u);
    function d(h, m) {
      if (e.accordion) {
        c(m ? h : void 0);
        return;
      }
      c(m ? [...o.value, h] : o.value.filter((w) => w !== h));
    }
    function c(h) {
      C(e["onUpdate:modelValue"], h), C(e.onChange, h);
    }
    function f() {
      if (e.accordion) {
        const [w] = o.value;
        if (w == null) return;
        const $ = l.find(({ name: y }) => w === y.value);
        return $ ?? l.find(({ index: y, name: T }) => T.value == null && w === y.value);
      }
      const h = l.filter(({ name: w }) => w.value != null && o.value.includes(w.value)), m = l.filter(({ index: w, name: $ }) => $.value == null && o.value.includes(w.value));
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
      n: a2,
      toggleAll: (h) => {
        e.accordion || c(l.filter((m) => {
          var w;
          const $ = (w = m.name.value) != null ? w : m.index.value, y = o.value.includes($);
          return h.skipDisabled && m.disabled.value ? y : h.expand === "inverse" ? !y : h.expand;
        }).map((m) => {
          var w;
          return (w = m.name.value) != null ? w : m.index.value;
        }));
      }
    };
  }
});
ig.render = o2;
var ki = ig;
ue(ki);
fe(ki, ag);
var oN = ki, Ps = ki, Jc = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
});
function lg(e) {
  const { contentEl: n, showContent: r, expand: t } = e;
  let a = !0, o = 0, i = 0;
  me(t, (f) => {
    const v = ++o;
    Ne(() => {
      f ? s(v) : u(v);
    });
  }, { immediate: !0 });
  function l(f) {
    return f === o;
  }
  function s(f) {
    return Jc(this, null, function* () {
      if (!n.value || (n.value.style.height = "", r.value = !0, yield qr(), !n.value || !l(f))) return;
      const { offsetHeight: v } = n.value;
      n.value.style.height = "0px", yield qr(), !(!n.value || !l(f)) && (n.value.style.height = v + "px", a && (yield Gn(), a && l(f) && d()));
    });
  }
  const u = (f) => Jc(null, null, function* () {
    if (!n.value) return;
    const { offsetHeight: v } = n.value;
    n.value.style.height = v + "px", yield qr(), !(!n.value || !l(f)) && (n.value.style.height = "0px");
  }), d = (f) => {
    f && (f.target !== n.value || f.propertyName !== "height") || f && i !== o || (t.value || (r.value = !1), n.value.style.height = "");
  };
  return {
    handleTransitionEnd: d,
    handleTransitionStart: (f) => {
      f && (f.target !== n.value || f.propertyName !== "height") || (i = o, a = !1);
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
  const { parentProvider: e, index: n, bindParent: r } = Dn(og);
  return ar(!!r, "Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var { name: l2, n: s2, classes: u2 } = ae("collapse-item"), d2 = [
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
    const n = O(!1), r = O(!1), t = O(null), a = S(() => e.name), o = S(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = i2(), { offset: u, divider: d, elevation: c, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: a,
      disabled: o,
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
var iN = $i, Os = $i, dg = { expand: Boolean }, { name: f2, n: v2 } = ae("collapse-transition");
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
    const n = O(!1), r = O(null), t = S(() => e.expand), { handleTransitionEnd: a, handleTransitionStart: o } = lg({
      contentEl: r,
      showContent: n,
      expand: t
    });
    return {
      showContent: n,
      contentEl: r,
      n: v2,
      handleTransitionEnd: a,
      handleTransitionStart: o
    };
  }
});
cg.render = p2;
var Si = cg;
ue(Si);
fe(Si, dg);
var lN = Si, So = Si, fg = {
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
}, { name: m2, n: g2 } = ae("count-to");
function h2(e, n) {
  return b(), k("div", { class: p(e.n()) }, [F(e.$slots, "default", { value: e.value }, () => [Le(ve(e.value), 1)])], 2);
}
var vg = te({
  name: m2,
  props: fg,
  setup(e) {
    const { value: n, reset: r, start: t, pause: a } = J0({
      from: () => Z(e.from),
      to: () => Z(e.to),
      duration: () => Z(e.duration),
      timingFunction: e.timingFunction,
      onFinished() {
        C(e.onEnd);
      }
    }), o = S(() => xl(n.value, Z(e.precision)));
    me(() => [
      e.from,
      e.to,
      e.duration
    ], i), Tr(i);
    function i() {
      r(), e.autoStart && t();
    }
    return {
      value: o,
      n: g2,
      start: t,
      pause: a,
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
}, { name: b2, n: y2 } = ae("countdown"), Ts = 1e3, Es = 60 * Ts, Ds = 60 * Es, Qc = 24 * Ds;
function w2(e, n) {
  return b(), k("div", { class: p(e.n()) }, [F(e.$slots, "default", yt(Ao(e.timeData)), () => [Le(ve(e.showTime), 1)])], 2);
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
    let t = 0, a = !1, o = 0, i = 0, l;
    me(() => e.time, () => {
      v(), e.autoStart && c();
    }), Tr(() => {
      d(), e.autoStart && c();
    }), ft(() => {
      l != null && (a = l, a === !0 && c(!0));
    }), Ot(() => {
      l = a, f();
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
      if (w.forEach((y, T) => {
        g.includes(y) ? g = g.replace(y, Gr(`${m[T]}`, 2, "0")) : m[T + 1] += m[T] * $[T];
      }), g.includes("S")) {
        const y = Gr(`${m[m.length - 1]}`, 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", y) : g.includes("SS") ? g = g.replace("SS", y.slice(0, 2)) : g = g.replace("S", y.slice(0, 1));
      }
      return g;
    }
    function u(g) {
      const h = {
        days: Math.floor(g / Qc),
        hours: Math.floor(g % Qc / Ds),
        minutes: Math.floor(g % Ds / Es),
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
      a && (o = Lt(d));
    }
    function c(g = !1) {
      a && !g || (a = !0, t = performance.now() + (i || Z(e.time)), d());
    }
    function f() {
      a = !1, mo(o);
    }
    function v() {
      t = 0, a = !1, mo(o), d();
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
var uN = Pi, Bs = Pi, At = 9e15, mt = 1e9, Is = "0123456789abcdef", Co = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Po = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Ms = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -At,
  maxE: At,
  crypto: !1
}, gg, Yr, He = !0, Oi = "[DecimalError] ", ct = Oi + "Invalid argument: ", hg = Oi + "Precision limit exceeded", bg = Oi + "crypto unavailable", yg = "[object Decimal]", Qn = Math.floor, An = Math.pow, k2 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, $2 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, S2 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, wg = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, zr = 1e7, Me = 7, C2 = 9007199254740991, P2 = Co.length - 1, As = Po.length - 1, ie = { toStringTag: yg };
ie.absoluteValue = ie.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), Ie(e);
};
ie.ceil = function() {
  return Ie(new this.constructor(this), this.e + 1, 2);
};
ie.clampedTo = ie.clamp = function(e, n) {
  var r, t = this, a = t.constructor;
  if (e = new a(e), n = new a(n), !e.s || !n.s) return new a(NaN);
  if (e.gt(n)) throw Error(ct + n);
  return r = t.cmp(e), r < 0 ? e : t.cmp(n) > 0 ? n : new a(t);
};
ie.comparedTo = ie.cmp = function(e) {
  var n, r, t, a, o = this, i = o.d, l = (e = new o.constructor(e)).d, s = o.s, u = e.s;
  if (!i || !l) return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0]) return i[0] ? s : l[0] ? -u : 0;
  if (s !== u) return s;
  if (o.e !== e.e) return o.e > e.e ^ s < 0 ? 1 : -1;
  for (t = i.length, a = l.length, n = 0, r = t < a ? t : a; n < r; ++n) if (i[n] !== l[n]) return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return t === a ? 0 : t > a ^ s < 0 ? 1 : -1;
};
ie.cosine = ie.cos = function() {
  var e, n, r = this, t = r.constructor;
  return r.d ? r.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(r.e, r.sd()) + Me, t.rounding = 1, r = O2(t, Pg(t, r)), t.precision = e, t.rounding = n, Ie(Yr == 2 || Yr == 3 ? r.neg() : r, e, n, !0)) : new t(1) : new t(NaN);
};
ie.cubeRoot = ie.cbrt = function() {
  var e, n, r, t, a, o, i, l, s, u, d = this, c = d.constructor;
  if (!d.isFinite() || d.isZero()) return new c(d);
  for (He = !1, o = d.s * An(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Un(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = An(r, 1 / 3), e = Qn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), t = new c(r), t.s = d.s) : t = new c(o.toString()), i = (e = c.precision) + 3; ; )
    if (l = t, s = l.times(l).times(l), u = s.plus(d), t = cn(u.plus(d).times(l), u.plus(s), i + 2, 1), Un(l.d).slice(0, i) === (r = Un(t.d)).slice(0, i))
      if (r = r.slice(i - 3, i + 1), r == "9999" || !a && r == "4999") {
        if (!a && (Ie(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          t = l;
          break;
        }
        i += 4, a = 1;
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
  var e, n, r, t, a, o = this, i = o.constructor, l = new i(1);
  if (!o.isFinite()) return new i(o.s ? 1 / 0 : NaN);
  if (o.isZero()) return l;
  r = i.precision, t = i.rounding, i.precision = r + Math.max(o.e, o.sd()) + 4, i.rounding = 1, a = o.d.length, a < 32 ? (e = Math.ceil(a / 3), n = (1 / Ti(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = qt(i, 1, o.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = o.times(o), o = l.minus(s.times(d.minus(s.times(d))));
  return Ie(o, i.precision = r, i.rounding = t, !0);
};
ie.hyperbolicSine = ie.sinh = function() {
  var e, n, r, t, a = this, o = a.constructor;
  if (!a.isFinite() || a.isZero()) return new o(a);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(a.e, a.sd()) + 4, o.rounding = 1, t = a.d.length, t < 3) a = qt(o, 2, a, a, !0);
  else {
    e = 1.4 * Math.sqrt(t), e = e > 16 ? 16 : e | 0, a = a.times(1 / Ti(5, e)), a = qt(o, 2, a, a, !0);
    for (var i, l = new o(5), s = new o(16), u = new o(20); e--; )
      i = a.times(a), a = a.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return o.precision = n, o.rounding = r, Ie(a, n, r, !0);
};
ie.hyperbolicTangent = ie.tanh = function() {
  var e, n, r = this, t = r.constructor;
  return r.isFinite() ? r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + 7, t.rounding = 1, cn(r.sinh(), r.cosh(), t.precision = e, t.rounding = n)) : new t(r.s);
};
ie.inverseCosine = ie.acos = function() {
  var e = this, n = e.constructor, r = e.abs().cmp(1), t = n.precision, a = n.rounding;
  return r !== -1 ? r === 0 ? e.isNeg() ? Rr(n, t, a) : new n(0) : new n(NaN) : e.isZero() ? Rr(n, t + 4, a).times(0.5) : (n.precision = t + 6, n.rounding = 1, e = new n(1).minus(e).div(e.plus(1)).sqrt().atan(), n.precision = t, n.rounding = a, e.times(2));
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
  var e, n, r, t, a = this, o = a.constructor;
  return a.isFinite() ? a.e >= 0 ? new o(a.abs().eq(1) ? a.s / 0 : a.isZero() ? a : NaN) : (e = o.precision, n = o.rounding, t = a.sd(), Math.max(t, e) < 2 * -a.e - 1 ? Ie(new o(a), e, n, !0) : (o.precision = r = t - a.e, a = cn(a.plus(1), new o(1).minus(a), r + e, 1), o.precision = e + 4, o.rounding = 1, a = a.ln(), o.precision = e, o.rounding = n, a.times(0.5))) : new o(NaN);
};
ie.inverseSine = ie.asin = function() {
  var e, n, r, t, a = this, o = a.constructor;
  return a.isZero() ? new o(a) : (n = a.abs().cmp(1), r = o.precision, t = o.rounding, n !== -1 ? n === 0 ? (e = Rr(o, r + 4, t).times(0.5), e.s = a.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, a = a.div(new o(1).minus(a.times(a)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = t, a.times(2)));
};
ie.inverseTangent = ie.atan = function() {
  var e, n, r, t, a, o, i, l, s, u = this, d = u.constructor, c = d.precision, f = d.rounding;
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
  for (He = !1, n = Math.ceil(l / Me), t = 1, s = u.times(u), i = new d(u), a = u; e !== -1; )
    if (a = a.times(s), o = i.minus(a.div(t += 2)), a = a.times(s), i = o.plus(a.div(t += 2)), i.d[n] !== void 0) for (e = n; i.d[e] === o.d[e] && e--; ) ;
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
  var n, r, t, a, o, i, l, s, u = this, d = u.constructor, c = d.precision, f = d.rounding, v = 5;
  if (e == null)
    e = new d(10), n = !0;
  else {
    if (e = new d(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1)) return new d(NaN);
    n = e.eq(10);
  }
  if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1)) return new d(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (n)
    if (r.length > 1) o = !0;
    else {
      for (a = r[0]; a % 10 === 0; ) a /= 10;
      o = a !== 1;
    }
  if (He = !1, l = c + v, i = at(u, l), t = n ? Oo(d, l + 10) : at(e, l), s = cn(i, t, l, 1), $a(s.d, a = c, f)) do
    if (l += 10, i = at(u, l), t = n ? Oo(d, l + 10) : at(e, l), s = cn(i, t, l, 1), !o) {
      +Un(s.d).slice(a + 1, a + 15) + 1 == 1e14 && (s = Ie(s, c + 1, 0));
      break;
    }
  while ($a(s.d, a += 10, f));
  return He = !0, Ie(s, c, f);
};
ie.minus = ie.sub = function(e) {
  var n, r, t, a, o, i, l, s, u, d, c, f, v = this, g = v.constructor;
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
  if (r = Qn(e.e / Me), d = Qn(v.e / Me), u = u.slice(), o = d - r, o) {
    for (c = o < 0, c ? (n = u, o = -o, i = f.length) : (n = f, r = d, i = u.length), t = Math.max(Math.ceil(l / Me), i) + 2, o > t && (o = t, n.length = 1), n.reverse(), t = o; t--; ) n.push(0);
    n.reverse();
  } else {
    for (t = u.length, i = f.length, c = t < i, c && (i = t), t = 0; t < i; t++) if (u[t] != f[t]) {
      c = u[t] < f[t];
      break;
    }
    o = 0;
  }
  for (c && (n = u, u = f, f = n, e.s = -e.s), i = u.length, t = f.length - i; t > 0; --t) u[i++] = 0;
  for (t = f.length; t > o; ) {
    if (u[--t] < f[t]) {
      for (a = t; a && u[--a] === 0; ) u[a] = zr - 1;
      --u[a], u[t] += zr;
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
  return at(this);
};
ie.negated = ie.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, Ie(e);
};
ie.plus = ie.add = function(e) {
  var n, r, t, a, o, i, l, s, u, d, c = this, f = c.constructor;
  if (e = new f(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new f(NaN) : c.d || (e = new f(e.d || c.s === e.s ? c : NaN)), e;
  if (c.s != e.s)
    return e.s = -e.s, c.minus(e);
  if (u = c.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(c)), He ? Ie(e, l, s) : e;
  if (o = Qn(c.e / Me), t = Qn(e.e / Me), u = u.slice(), a = o - t, a) {
    for (a < 0 ? (r = u, a = -a, i = d.length) : (r = d, t = o, i = u.length), o = Math.ceil(l / Me), i = o > i ? o + 1 : i + 1, a > i && (a = i, r.length = 1), r.reverse(); a--; ) r.push(0);
    r.reverse();
  }
  for (i = u.length, a = d.length, i - a < 0 && (a = i, r = d, d = u, u = r), n = 0; a; )
    n = (u[--a] = u[a] + d[a] + n) / zr | 0, u[a] %= zr;
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
  var e, n, r, t, a, o, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0]) return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (He = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = Un(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Qn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), t = new d(n)) : t = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = t, t = o.plus(cn(i, o, r + 2, 1)).times(0.5), Un(o.d).slice(0, r) === (n = Un(t.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !a && n == "4999") {
        if (!a && (Ie(o, s + 1, 0), o.times(o).eq(i))) {
          t = o;
          break;
        }
        r += 4, a = 1;
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
  var n, r, t, a, o, i, l, s, u, d = this, c = d.constructor, f = d.d, v = (e = new c(e)).d;
  if (e.s *= d.s, !f || !f[0] || !v || !v[0]) return new c(!e.s || f && !f[0] && !v || v && !v[0] && !f ? NaN : !f || !v ? e.s / 0 : e.s * 0);
  for (r = Qn(d.e / Me) + Qn(e.e / Me), s = f.length, u = v.length, s < u && (o = f, f = v, v = o, i = s, s = u, u = i), o = [], i = s + u, t = i; t--; ) o.push(0);
  for (t = u; --t >= 0; ) {
    for (n = 0, a = s + t; a > t; )
      l = o[a] + v[t] * f[a - t - 1] + n, o[a--] = l % zr | 0, n = l / zr | 0;
    o[a] = (o[a] + n) % zr | 0;
  }
  for (; !o[--i]; ) o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = zi(o, r), He ? Ie(e, c.precision, c.rounding) : e;
};
ie.toBinary = function(e, n) {
  return ud(this, 2, e, n);
};
ie.toDecimalPlaces = ie.toDP = function(e, n) {
  var r = this, t = r.constructor;
  return r = new t(r), e === void 0 ? r : (dr(e, 0, mt), n === void 0 ? n = t.rounding : dr(n, 0, 8), Ie(r, e + r.e + 1, n));
};
ie.toExponential = function(e, n) {
  var r, t = this, a = t.constructor;
  return e === void 0 ? r = Lr(t, !0) : (dr(e, 0, mt), n === void 0 ? n = a.rounding : dr(n, 0, 8), t = Ie(new a(t), e + 1, n), r = Lr(t, !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
ie.toFixed = function(e, n) {
  var r, t, a = this, o = a.constructor;
  return e === void 0 ? r = Lr(a) : (dr(e, 0, mt), n === void 0 ? n = o.rounding : dr(n, 0, 8), t = Ie(new o(a), e + a.e + 1, n), r = Lr(t, !1, e + t.e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
ie.toFraction = function(e) {
  var n, r, t, a, o, i, l, s, u, d, c, f, v = this, g = v.d, h = v.constructor;
  if (!g) return new h(v);
  if (u = r = new h(1), t = s = new h(0), n = new h(t), o = n.e = kg(g) - v.e - 1, i = o % Me, n.d[0] = An(10, i < 0 ? Me + i : i), e == null) e = o > 0 ? n : u;
  else {
    if (l = new h(e), !l.isInt() || l.lt(u)) throw Error(ct + l);
    e = l.gt(n) ? o > 0 ? n : u : l;
  }
  for (He = !1, l = new h(Un(g)), d = h.precision, h.precision = o = g.length * Me * 2; c = cn(l, n, 0, 1, 1), a = r.plus(c.times(t)), a.cmp(e) != 1; )
    r = t, t = a, a = u, u = s.plus(c.times(a)), s = a, a = n, n = l.minus(c.times(a)), l = a;
  return a = cn(e.minus(r), t, 0, 1, 1), s = s.plus(a.times(u)), r = r.plus(a.times(t)), s.s = u.s = v.s, f = cn(u, t, o, 1).minus(v).abs().cmp(cn(s, r, o, 1).minus(v).abs()) < 1 ? [u, t] : [s, r], h.precision = d, He = !0, f;
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
  var n, r, t, a, o, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new s(An(+l, u));
  if (l = new s(l), l.eq(1)) return l;
  if (t = s.precision, o = s.rounding, e.eq(1)) return Ie(l, t, o);
  if (n = Qn(e.e / Me), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= C2)
    return a = $g(s, l, r, t), e.s < 0 ? new s(1).div(a) : Ie(a, t, o);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1) return new s(NaN);
    if ((e.d[n] & 1) == 0 && (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = An(+l, u), n = r == 0 || !isFinite(r) ? Qn(u * (Math.log("0." + Un(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (He = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), a = Ns(e.times(at(l, t + r)), t), a.d && (a = Ie(a, t + 5, 1), $a(a.d, t, o) && (n = t + 10, a = Ie(Ns(e.times(at(l, n + r)), n), n + 5, 1), +Un(a.d).slice(t + 1, t + 15) + 1 == 1e14 && (a = Ie(a, t + 1, 0)))), a.s = i, He = !0, s.rounding = o, Ie(a, t, o));
};
ie.toPrecision = function(e, n) {
  var r, t = this, a = t.constructor;
  return e === void 0 ? r = Lr(t, t.e <= a.toExpNeg || t.e >= a.toExpPos) : (dr(e, 1, mt), n === void 0 ? n = a.rounding : dr(n, 0, 8), t = Ie(new a(t), e, n), r = Lr(t, e <= t.e || t.e <= a.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + r : r;
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
  var n, r, t, a = e.length - 1, o = "", i = e[0];
  if (a > 0) {
    for (o += i, n = 1; n < a; n++)
      t = e[n] + "", r = Me - t.length, r && (o += _r(r)), o += t;
    i = e[n], t = i + "", r = Me - t.length, r && (o += _r(r));
  } else if (i === 0) return "0";
  for (; i % 10 === 0; ) i /= 10;
  return o + i;
}
function dr(e, n, r) {
  if (e !== ~~e || e < n || e > r) throw Error(ct + e);
}
function $a(e, n, r, t) {
  for (var a, o = e[0], i, l; o >= 10; o /= 10) --n;
  return --n < 0 ? (n += Me, a = 0) : (a = Math.ceil((n + 1) / Me), n %= Me), o = An(10, Me - n), l = e[a] % o | 0, t == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == o || r > 3 && l + 1 == o / 2) && (e[a + 1] / o / 100 | 0) == An(10, n - 2) - 1 || (l == o / 2 || l == 0) && (e[a + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (t || r < 4) && l == 9999 || !t && r > 3 && l == 4999) : i = ((t || r < 4) && l + 1 == o || !t && r > 3 && l + 1 == o / 2) && (e[a + 1] / o / 1e3 | 0) == An(10, n - 3) - 1, i;
}
function fo(e, n, r) {
  for (var t, a = [0], o, i = 0, l = e.length; i < l; ) {
    for (o = a.length; o--; ) a[o] *= n;
    for (a[0] += Is.indexOf(e.charAt(i++)), t = 0; t < a.length; t++) a[t] > r - 1 && (a[t + 1] === void 0 && (a[t + 1] = 0), a[t + 1] += a[t] / r | 0, a[t] %= r);
  }
  return a.reverse();
}
function O2(e, n) {
  var r, t, a;
  if (n.isZero()) return n;
  t = n.d.length, t < 32 ? (r = Math.ceil(t / 3), a = (1 / Ti(4, r)).toString()) : (r = 16, a = "2.3283064365386962890625e-10"), e.precision += r, n = qt(e, 1, n.times(a), new e(1));
  for (var o = r; o--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var cn = /* @__PURE__ */ (function() {
  function e(t, a, o) {
    var i, l = 0, s = t.length;
    for (t = t.slice(); s--; )
      i = t[s] * a + l, t[s] = i % o | 0, l = i / o | 0;
    return l && t.unshift(l), t;
  }
  function n(t, a, o, i) {
    var l, s;
    if (o != i) s = o > i ? 1 : -1;
    else for (l = s = 0; l < o; l++) if (t[l] != a[l]) {
      s = t[l] > a[l] ? 1 : -1;
      break;
    }
    return s;
  }
  function r(t, a, o, i) {
    for (var l = 0; o--; )
      t[o] -= l, l = t[o] < a[o] ? 1 : 0, t[o] = l * i + t[o] - a[o];
    for (; !t[0] && t.length > 1; ) t.shift();
  }
  return function(t, a, o, i, l, s) {
    var u, d, c, f, v, g, h, m, w, $, y, T, z, P, N, H, M, R, E, D, A = t.constructor, I = t.s == a.s ? 1 : -1, B = t.d, j = a.d;
    if (!B || !B[0] || !j || !j[0]) return new A(!t.s || !a.s || (B ? j && B[0] == j[0] : !j) ? NaN : B && B[0] == 0 || !j ? I * 0 : I / 0);
    for (s ? (v = 1, d = t.e - a.e) : (s = zr, v = Me, d = Qn(t.e / v) - Qn(a.e / v)), E = j.length, M = B.length, w = new A(I), $ = w.d = [], c = 0; j[c] == (B[c] || 0); c++) ;
    if (j[c] > (B[c] || 0) && d--, o == null ? (P = o = A.precision, i = A.rounding) : l ? P = o + (t.e - a.e) + 1 : P = o, P < 0)
      $.push(1), g = !0;
    else {
      if (P = P / v + 2 | 0, c = 0, E == 1) {
        for (f = 0, j = j[0], P++; (c < M || f) && P--; c++)
          N = f * s + (B[c] || 0), $[c] = N / j | 0, f = N % j | 0;
        g = f || c < M;
      } else {
        for (f = s / (j[0] + 1) | 0, f > 1 && (j = e(j, f, s), B = e(B, f, s), E = j.length, M = B.length), H = E, y = B.slice(0, E), T = y.length; T < E; ) y[T++] = 0;
        D = j.slice(), D.unshift(0), R = j[0], j[1] >= s / 2 && ++R;
        do
          f = 0, u = n(j, y, E, T), u < 0 ? (z = y[0], E != T && (z = z * s + (y[1] || 0)), f = z / R | 0, f > 1 ? (f >= s && (f = s - 1), h = e(j, f, s), m = h.length, T = y.length, u = n(h, y, m, T), u == 1 && (f--, r(h, E < m ? D : j, m, s))) : (f == 0 && (u = f = 1), h = j.slice()), m = h.length, m < T && h.unshift(0), r(y, h, T, s), u == -1 && (T = y.length, u = n(j, y, E, T), u < 1 && (f++, r(y, E < T ? D : j, T, s))), T = y.length) : u === 0 && (f++, y = [0]), $[c++] = f, u && y[0] ? y[T++] = B[H] || 0 : (y = [B[H]], T = 1);
        while ((H++ < M || y[0] !== void 0) && P--);
        g = y[0] !== void 0;
      }
      $[0] || $.shift();
    }
    if (v == 1)
      w.e = d, gg = g;
    else {
      for (c = 1, f = $[0]; f >= 10; f /= 10) c++;
      w.e = c + d * v - 1, Ie(w, l ? o + w.e + 1 : o, i, g);
    }
    return w;
  };
})();
function Ie(e, n, r, t) {
  var a, o, i, l, s, u, d, c, f, v = e.constructor;
  e: if (n != null) {
    if (c = e.d, !c) return e;
    for (a = 1, l = c[0]; l >= 10; l /= 10) a++;
    if (o = n - a, o < 0)
      o += Me, i = n, d = c[f = 0], s = d / An(10, a - i - 1) % 10 | 0;
    else if (f = Math.ceil((o + 1) / Me), l = c.length, f >= l)
      if (t) {
        for (; l++ <= f; ) c.push(0);
        d = s = 0, a = 1, o %= Me, i = o - Me + 1;
      } else break e;
    else {
      for (d = l = c[f], a = 1; l >= 10; l /= 10) a++;
      o %= Me, i = o - Me + a, s = i < 0 ? 0 : d / An(10, a - i - 1) % 10 | 0;
    }
    if (t = t || n < 0 || c[f + 1] !== void 0 || (i < 0 ? d : d % An(10, a - i - 1)), u = r < 4 ? (s || t) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || t || r == 6 && (o > 0 ? i > 0 ? d / An(10, a - i) : 0 : c[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !c[0])
      return c.length = 0, u ? (n -= e.e + 1, c[0] = An(10, (Me - n % Me) % Me), e.e = -n || 0) : c[0] = e.e = 0, e;
    if (o == 0 ? (c.length = f, l = 1, f--) : (c.length = f + 1, l = An(10, Me - o), c[f] = i > 0 ? (d / An(10, a - i) % An(10, i) | 0) * l : 0), u) for (; ; ) if (f == 0) {
      for (o = 1, i = c[0]; i >= 10; i /= 10) o++;
      for (i = c[0] += l, l = 1; i >= 10; i /= 10) l++;
      o != l && (e.e++, c[0] == zr && (c[0] = 1));
      break;
    } else {
      if (c[f] += l, c[f] != zr) break;
      c[f--] = 0, l = 1;
    }
    for (o = c.length; c[--o] === 0; ) c.pop();
  }
  return He && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e;
}
function Lr(e, n, r) {
  if (!e.isFinite()) return Cg(e);
  var t, a = e.e, o = Un(e.d), i = o.length;
  return n ? (r && (t = r - i) > 0 ? o = o.charAt(0) + "." + o.slice(1) + _r(t) : i > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : a < 0 ? (o = "0." + _r(-a - 1) + o, r && (t = r - i) > 0 && (o += _r(t))) : a >= i ? (o += _r(a + 1 - i), r && (t = r - a - 1) > 0 && (o = o + "." + _r(t))) : ((t = a + 1) < i && (o = o.slice(0, t) + "." + o.slice(t)), r && (t = r - i) > 0 && (a + 1 === i && (o += "."), o += _r(t))), o;
}
function zi(e, n) {
  var r = e[0];
  for (n *= Me; r >= 10; r /= 10) n++;
  return n;
}
function Oo(e, n, r) {
  if (n > P2)
    throw He = !0, r && (e.precision = r), Error(hg);
  return Ie(new e(Co), n, 1, !0);
}
function Rr(e, n, r) {
  if (n > As) throw Error(hg);
  return Ie(new e(Po), n, r, !0);
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
  var a, o = new e(1), i = Math.ceil(t / Me + 4);
  for (He = !1; ; ) {
    if (r % 2 && (o = o.times(n), _c(o.d, i) && (a = !0)), r = Qn(r / 2), r === 0) {
      r = o.d.length - 1, a && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), _c(n.d, i);
  }
  return He = !0, o;
}
function xc(e) {
  return e.d[e.d.length - 1] & 1;
}
function Sg(e, n, r) {
  for (var t, a, o = new e(n[0]), i = 0; ++i < n.length; ) {
    if (a = new e(n[i]), !a.s) {
      o = a;
      break;
    }
    t = o.cmp(a), (t === r || t === 0 && o.s === r) && (o = a);
  }
  return o;
}
function Ns(e, n) {
  var r, t, a, o, i, l, s, u = 0, d = 0, c = 0, f = e.constructor, v = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (n == null ? (He = !1, s = g) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), c += 5;
  for (t = Math.log(An(2, c)) / Math.LN10 * 2 + 5 | 0, s += t, r = o = i = new f(1), f.precision = s; ; ) {
    if (o = Ie(o.times(e), s, 1), r = r.times(++d), l = i.plus(cn(o, r, s, 1)), Un(l.d).slice(0, s) === Un(i.d).slice(0, s)) {
      for (a = c; a--; ) i = Ie(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && $a(i.d, s - t, v, u))
          f.precision = s += 10, r = o = l = new f(1), d = 0, u++;
        else return Ie(i, f.precision = g, v, He = !0);
      else
        return f.precision = g, i;
    }
    i = l;
  }
}
function at(e, n) {
  var r, t, a, o, i, l, s, u, d, c, f, v = 1, g = 10, h = e, m = h.d, w = h.constructor, $ = w.rounding, y = w.precision;
  if (h.s < 0 || !m || !m[0] || !h.e && m[0] == 1 && m.length == 1) return new w(m && !m[0] ? -1 / 0 : h.s != 1 ? NaN : m ? 0 : h);
  if (n == null ? (He = !1, d = y) : d = n, w.precision = d += g, r = Un(m), t = r.charAt(0), Math.abs(o = h.e) < 15e14) {
    for (; t < 7 && t != 1 || t == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = Un(h.d), t = r.charAt(0), v++;
    o = h.e, t > 1 ? (h = new w("0." + r), o++) : h = new w(t + "." + r.slice(1));
  } else
    return u = Oo(w, d + 2, y).times(o + ""), h = at(new w(t + "." + r.slice(1)), d - g).plus(u), w.precision = y, n == null ? Ie(h, y, $, He = !0) : h;
  for (c = h, s = i = h = cn(h.minus(1), h.plus(1), d, 1), f = Ie(h.times(h), d, 1), a = 3; ; ) {
    if (i = Ie(i.times(f), d, 1), u = s.plus(cn(i, new w(a), d, 1)), Un(u.d).slice(0, d) === Un(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Oo(w, d + 2, y).times(o + ""))), s = cn(s, new w(v), d, 1), n == null)
        if ($a(s.d, d - g, $, l))
          w.precision = d += g, u = i = h = cn(c.minus(1), c.plus(1), d, 1), f = Ie(h.times(h), d, 1), a = l = 1;
        else return Ie(s, w.precision = y, $, He = !0);
      else
        return w.precision = y, s;
    s = u, a += 2;
  }
}
function Cg(e) {
  return String(e.s * e.s / 0);
}
function vo(e, n) {
  var r, t, a;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (t = n.search(/e/i)) > 0 ? (r < 0 && (r = t), r += +n.slice(t + 1), n = n.substring(0, t)) : r < 0 && (r = n.length), t = 0; n.charCodeAt(t) === 48; t++) ;
  for (a = n.length; n.charCodeAt(a - 1) === 48; --a) ;
  if (n = n.slice(t, a), n) {
    if (a -= t, e.e = r = r - t - 1, e.d = [], t = (r + 1) % Me, r < 0 && (t += Me), t < a) {
      for (t && e.d.push(+n.slice(0, t)), a -= Me; t < a; ) e.d.push(+n.slice(t, t += Me));
      n = n.slice(t), t = Me - n.length;
    } else t -= a;
    for (; t--; ) n += "0";
    e.d.push(+n), He && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function z2(e, n) {
  var r, t, a, o, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), wg.test(n)) return vo(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if ($2.test(n))
    r = 16, n = n.toLowerCase();
  else if (k2.test(n)) r = 2;
  else if (S2.test(n)) r = 8;
  else throw Error(ct + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), i = o >= 0, t = e.constructor, i && (n = n.replace(".", ""), l = n.length, o = l - o, a = $g(t, new t(r), o, o * 2)), u = fo(n, r, zr), d = u.length - 1, o = d; u[o] === 0; --o) u.pop();
  return o < 0 ? new t(e.s * 0) : (e.e = zi(u, d), e.d = u, He = !1, i && (e = cn(e, a, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? An(2, s) : ot.pow(2, s))), He = !0, e);
}
function T2(e, n) {
  var r, t = n.d.length;
  if (t < 3) return n.isZero() ? n : qt(e, 2, n, n);
  r = 1.4 * Math.sqrt(t), r = r > 16 ? 16 : r | 0, n = n.times(1 / Ti(5, r)), n = qt(e, 2, n, n);
  for (var a, o = new e(5), i = new e(16), l = new e(20); r--; )
    a = n.times(n), n = n.times(o.plus(a.times(i.times(a).minus(l))));
  return n;
}
function qt(e, n, r, t, a) {
  var o, i, l, s, u = 1, d = e.precision, c = Math.ceil(d / Me);
  for (He = !1, s = r.times(r), l = new e(t); ; ) {
    if (i = cn(l.times(s), new e(n++ * n++), d, 1), l = a ? t.plus(i) : t.minus(i), t = cn(i.times(s), new e(n++ * n++), d, 1), i = l.plus(t), i.d[c] !== void 0) {
      for (o = c; i.d[o] === l.d[o] && o--; ) ;
      if (o == -1) break;
    }
    o = l, l = t, t = i, i = o, u++;
  }
  return He = !0, i.d.length = c + 1, i;
}
function Ti(e, n) {
  for (var r = e; --n; ) r *= e;
  return r;
}
function Pg(e, n) {
  var r, t = n.s < 0, a = Rr(e, e.precision, 1), o = a.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Yr = t ? 4 : 1, n;
  if (r = n.divToInt(a), r.isZero()) Yr = t ? 3 : 2;
  else {
    if (n = n.minus(r.times(a)), n.lte(o))
      return Yr = xc(r) ? t ? 2 : 3 : t ? 4 : 1, n;
    Yr = xc(r) ? t ? 1 : 4 : t ? 3 : 2;
  }
  return n.minus(a).abs();
}
function ud(e, n, r, t) {
  var a, o, i, l, s, u, d, c, f, v = e.constructor, g = r !== void 0;
  if (g ? (dr(r, 1, mt), t === void 0 ? t = v.rounding : dr(t, 0, 8)) : (r = v.precision, t = v.rounding), !e.isFinite()) d = Cg(e);
  else {
    for (d = Lr(e), i = d.indexOf("."), g ? (a = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : a = n, i >= 0 && (d = d.replace(".", ""), f = new v(1), f.e = d.length - i, f.d = fo(Lr(f), 10, a), f.e = f.d.length), c = fo(d, 10, a), o = s = c.length; c[--s] == 0; ) c.pop();
    if (!c[0]) d = g ? "0p+0" : "0";
    else {
      if (i < 0 ? o-- : (e = new v(e), e.d = c, e.e = o, e = cn(e, f, r, t, 0, a), c = e.d, o = e.e, u = gg), i = c[r], l = a / 2, u = u || c[r + 1] !== void 0, u = t < 4 ? (i !== void 0 || u) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : i > l || i === l && (t === 4 || u || t === 6 && c[r - 1] & 1 || t === (e.s < 0 ? 8 : 7)), c.length = r, u) for (; ++c[--r] > a - 1; )
        c[r] = 0, r || (++o, c.unshift(1));
      for (s = c.length; !c[s - 1]; --s) ;
      for (i = 0, d = ""; i < s; i++) d += Is.charAt(c[i]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++) d += "0";
            for (c = fo(d, a, n), s = c.length; !c[s - 1]; --s) ;
            for (i = 1, d = "1."; i < s; i++) d += Is.charAt(c[i]);
          } else d = d.charAt(0) + "." + d.slice(1);
        d = d + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; ) d = "0" + d;
        d = "0." + d;
      } else if (++o > s) for (o -= s; o--; ) d += "0";
      else o < s && (d = d.slice(0, o) + "." + d.slice(o));
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
function D2(e) {
  return new this(e).acos();
}
function B2(e) {
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
  var r, t = this.precision, a = this.rounding, o = t + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Rr(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Rr(this, t, a) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Rr(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(cn(e, n, o, 1)), n = Rr(this, o, 1), this.precision = t, this.rounding = a, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(cn(e, n, o, 1)), r;
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
  var n, r, t, a = e.defaults === !0, o = [
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
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], a && (this[r] = Ms[r]), (t = e[r]) !== void 0)
      if (Qn(t) === t && t >= o[n + 1] && t <= o[n + 2]) this[r] = t;
      else throw Error(ct + r + ": " + t);
  if (r = "crypto", a && (this[r] = Ms[r]), (t = e[r]) !== void 0)
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
  function a(o) {
    var i, l, s, u = this;
    if (!(u instanceof a)) return new a(o);
    if (u.constructor = a, ef(o)) {
      u.s = o.s, He ? !o.d || o.e > a.maxE ? (u.e = NaN, u.d = null) : o.e < a.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (s = typeof o, s === "number") {
      if (o === 0) {
        u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
        for (i = 0, l = o; l >= 10; l /= 10) i++;
        He ? i > a.maxE ? (u.e = NaN, u.d = null) : i < a.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [o]) : (u.e = i, u.d = [o]);
        return;
      }
      if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return vo(u, o.toString());
    }
    if (s === "string")
      return (l = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (l === 43 && (o = o.slice(1)), u.s = 1), wg.test(o) ? vo(u, o) : z2(u, o);
    if (s === "bigint")
      return o < 0 ? (o = -o, u.s = -1) : u.s = 1, vo(u, o.toString());
    throw Error(ct + o);
  }
  if (a.prototype = ie, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.EUCLID = 9, a.config = a.set = U2, a.clone = Og, a.isDecimal = ef, a.abs = E2, a.acos = D2, a.acosh = B2, a.add = I2, a.asin = M2, a.asinh = A2, a.atan = N2, a.atanh = R2, a.atan2 = V2, a.cbrt = L2, a.ceil = F2, a.clamp = H2, a.cos = j2, a.cosh = Y2, a.div = W2, a.exp = K2, a.floor = q2, a.hypot = X2, a.ln = G2, a.log = Z2, a.log10 = Q2, a.log2 = J2, a.max = x2, a.min = _2, a.mod = eP, a.mul = nP, a.pow = rP, a.random = tP, a.round = aP, a.sign = oP, a.sin = iP, a.sinh = lP, a.sqrt = sP, a.sub = uP, a.sum = dP, a.tan = cP, a.tanh = fP, a.trunc = vP, e === void 0 && (e = {}), e && e.defaults !== !0)
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
  return a.config(e), a;
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
  return e instanceof ot || e && e.toStringTag === yg || !1;
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
  var n, r, t, a, o = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : dr(e, 1, mt), t = Math.ceil(e / Me), this.crypto) if (crypto.getRandomValues)
    for (n = crypto.getRandomValues(new Uint32Array(t)); o < t; )
      a = n[o], a >= 429e7 ? n[o] = crypto.getRandomValues(/* @__PURE__ */ new Uint32Array(1))[0] : l[o++] = a % 1e7;
  else if (crypto.randomBytes) {
    for (n = crypto.randomBytes(t *= 4); o < t; )
      a = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), a >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (l.push(a % 1e7), o += 4);
    o = t / 4;
  } else throw Error(bg);
  else for (; o < t; ) l[o++] = Math.random() * 1e7 | 0;
  for (t = l[--o], e %= Me, t && e && (a = An(10, Me - e), l[o] = (t / a | 0) * a); l[o] === 0; o--) l.pop();
  if (o < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= Me) l.shift();
    for (t = 1, a = l[0]; a >= 10; a /= 10) t++;
    t < Me && (r -= Me - t);
  }
  return i.e = r, i.d = l, i;
}
function aP(e) {
  return Ie(e = new this(e), e.e + 1, this.rounding);
}
function oP(e) {
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
var ot = ie.constructor = Og(Ms);
Co = new ot(Co);
Po = new ot(Po);
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
}, nf = 100, rf = 600, { name: pP, n: mP, classes: gP } = ae("counter"), hP = [
  "inputmode",
  "readonly",
  "disabled"
];
function bP(e, n) {
  const r = x("var-icon"), t = x("var-button"), a = x("var-form-details");
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
      "onUpdate:modelValue": n[0] || (n[0] = (o) => e.inputValue = o),
      class: p(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
      style: J({
        width: e.toSizeUnit(e.inputWidth),
        fontSize: e.toSizeUnit(e.inputTextSize)
      }),
      inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
      readonly: e.readonly || e.formReadonly,
      disabled: e.disabled || e.formDisabled || e.disableInput,
      onChange: n[1] || (n[1] = (...o) => e.handleChange && e.handleChange(...o))
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
  ], 16), U(a, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
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
    const n = O(""), { bindForm: r, form: t } = Wn(), { errorMessage: a, validateWithTrigger: o, validate: i, resetValidation: l } = xn(), { readonly: s, disabled: u } = t ?? {}, d = S(() => {
      const { max: B, modelValue: j } = e;
      return B != null && Z(j) >= Z(B);
    }), c = S(() => {
      const { min: B, modelValue: j } = e;
      return B != null && Z(j) <= Z(B);
    });
    let f, v, g, h;
    C(r, {
      reset: $,
      validate: m,
      resetValidation: l
    }), me(() => e.modelValue, (B) => {
      A(y(String(B))), C(e.onChange, Z(B));
    }), A(y(String(e.modelValue)));
    function m() {
      return i(e.rules, e.modelValue);
    }
    function w(B) {
      Ne(() => {
        const { validateTrigger: j, rules: K, modelValue: G } = e;
        o(j, B, K, G);
      });
    }
    function $() {
      const { min: B } = e;
      C(e["onUpdate:modelValue"], B != null ? Z(B) : 0), l();
    }
    function y(B) {
      const { decimalLength: j, max: K, min: G } = e;
      let ce = Z(B);
      return K != null && ce > Z(K) && (ce = Z(K)), G != null && ce < Z(G) && (ce = Z(G)), B = String(ce), j != null && (B = ce.toFixed(Z(j))), B;
    }
    function T(B) {
      const { lazyChange: j, onBeforeChange: K } = e, { value: G } = B.target, ce = y(G);
      j ? C(K, Z(ce), I) : A(ce), w("onInputChange");
    }
    function z() {
      const { disabled: B, readonly: j, disableDecrement: K, decrementButton: G, lazyChange: ce, step: ge, modelValue: de, onDecrement: Q, onBeforeChange: ne } = e;
      if (u?.value || s?.value || B || j || K || !G || c.value) return;
      const pe = y(new ot(Z(de)).minus(new ot(Z(ge))).toString()), $e = Z(pe);
      C(Q, $e), ce ? C(ne, $e, I) : (A(pe), w("onDecrement"));
    }
    function P() {
      const { disabled: B, readonly: j, disableIncrement: K, incrementButton: G, lazyChange: ce, step: ge, modelValue: de, onIncrement: Q, onBeforeChange: ne } = e;
      if (u?.value || s?.value || B || j || K || !G || d.value) return;
      const pe = y(new ot(Z(de)).plus(new ot(Z(ge))).toString()), $e = Z(pe);
      C(Q, $e), ce ? C(ne, $e, I) : (A(pe), w("onIncrement"));
    }
    function N() {
      const { press: B, lazyChange: j } = e;
      !B || j || (h = window.setTimeout(() => {
        D();
      }, rf));
    }
    function H() {
      const { press: B, lazyChange: j } = e;
      !B || j || (g = window.setTimeout(() => {
        E();
      }, rf));
    }
    function M() {
      v && clearTimeout(v), h && clearTimeout(h);
    }
    function R() {
      f && clearTimeout(f), g && clearTimeout(g);
    }
    function E() {
      f = window.setTimeout(() => {
        P(), E();
      }, nf);
    }
    function D() {
      v = window.setTimeout(() => {
        z(), D();
      }, nf);
    }
    function A(B) {
      n.value = B;
      const j = Z(B);
      C(e["onUpdate:modelValue"], j);
    }
    function I(B) {
      A(y(String(B))), w("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: a,
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
      handleChange: T,
      decrement: z,
      increment: P,
      pressDecrement: N,
      pressIncrement: H,
      releaseDecrement: M,
      releaseIncrement: R,
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
}, { name: yP, n: wP, classes: kP } = ae("pagination"), $P = ["item-mode", "onClick"];
function SP(e, n) {
  const r = x("var-icon"), t = x("var-input"), a = x("var-menu-option"), o = x("var-menu-select"), i = _e("ripple");
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
    }, null, 8, ["modelValue", "disabled"]), L("span", null, [Le(" / " + ve(e.pageCount) + " ", 1), L("div", { class: p(e.n("simple-line")) }, null, 2)])], 2)) : (b(!0), k(Be, { key: 1 }, Ye(e.pageList, (l, s) => We((b(), k("li", {
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
    e.showSizeChanger ? (b(), ke(o, {
      key: 2,
      modelValue: e.size,
      "onUpdate:modelValue": n[5] || (n[5] = (l) => e.size = l),
      placement: "cover-top",
      disabled: e.disabled
    }, {
      options: se(() => [(b(!0), k(Be, null, Ye(e.sizeOption, (l, s) => (b(), ke(a, {
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
var Dg = te({
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
    const n = O(""), r = O("1"), t = O(!1), a = O(!1), o = O(Z(e.current) || 1), i = O(Z(e.size) || 10), l = O([]), s = S(() => Math.ceil(e.maxPagerCount / 2)), u = S(() => Math.ceil(Z(e.total) / Z(i.value))), d = S(() => [i.value * (o.value - 1) + 1, Math.min(i.value * o.value, Z(e.total))]), c = S(() => e.showTotal ? e.showTotal(Z(e.total), d.value) : ""), { t: f } = kr();
    me([() => e.current, () => e.size], ([y, T]) => {
      o.value = Z(y) || 1, i.value = Z(T || 10);
    }), me([
      o,
      i,
      u
    ], ([y, T, z], [P, N]) => {
      let H = [];
      const { maxPagerCount: M, total: R, onChange: E } = e, D = Math.ceil(Z(R) / Z(N)), A = z - (M - s.value) - 1;
      if (r.value = `${y}`, z - 2 > M) {
        if (P === void 0 || z !== D) for (let I = 2; I < M + 2; I++) H.push(I);
        if (y <= M && y < A) {
          H = [];
          for (let I = 1; I < M + 1; I++) H.push(I + 1);
          t.value = !0, a.value = !1;
        }
        if (y > M && y < A) {
          H = [];
          for (let I = 1; I < M + 1; I++) H.push(y + I - s.value);
          t.value = y === 2 && M === 1, a.value = !1;
        }
        if (y >= A) {
          H = [];
          for (let I = 1; I < M + 1; I++) H.push(z - (M - I) - 1);
          t.value = !1, a.value = !0;
        }
        H = [
          1,
          "...",
          ...H,
          "...",
          z
        ];
      } else for (let I = 1; I <= z; I++) H.push(I);
      l.value = H, P != null && z > 0 && C(E, y, T), C(e["onUpdate:current"], y), C(e["onUpdate:size"], T);
    }, { immediate: !0 });
    function v(y, T) {
      return tr(y) ? !1 : T === 1 ? t.value : a.value;
    }
    function g(y, T) {
      return tr(y) ? "basic" : T === 1 ? "head" : "tail";
    }
    function h(y, T) {
      if (!(y === o.value || e.disabled)) {
        if (y === "...") {
          o.value = T === 1 ? Math.max(o.value - e.maxPagerCount, 1) : Math.min(o.value + e.maxPagerCount, u.value);
          return;
        }
        if (y === "prev") {
          o.value = w(o.value - 1);
          return;
        }
        if (y === "next") {
          o.value = w(o.value + 1);
          return;
        }
        tr(y) && (o.value = y);
      }
    }
    function m() {
      const y = w(o.value);
      r.value = String(y), o.value = y;
    }
    function w(y) {
      return y > u.value ? u.value : y < 1 ? 1 : y;
    }
    function $(y, T, z) {
      z.target.blur();
      const P = w(Z(T));
      r.value = String(P), o.value = P, y === "quick" && (n.value = "");
    }
    return {
      current: o,
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
Dg.render = SP;
var Di = Dg;
ue(Di);
fe(Di, Eg);
var cN = Di, zo = Di, Bg = {
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
  const { bindChildren: e, childProviders: n, length: r } = Bn(Ig);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function PP() {
  const { bindParent: e, parentProvider: n, index: r } = Dn(Ig);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var OP = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: zP, n: TP, classes: EP } = ae("radio"), DP = [
  "aria-checked",
  "aria-disabled",
  "tabindex"
];
function BP(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), a = x("var-form-details"), o = _e("ripple"), i = _e("hover");
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
  }, null, 8, ["hovering", "focusing"])], 6)), [[o, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    i,
    e.handleHovering,
    "desktop"
  ]]), e.$slots.default ? (b(), k("div", {
    key: 0,
    class: p(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...l) => e.handleTextClick && e.handleTextClick(...l))
  }, [F(e.$slots, "default", { checked: e.checked })], 2)) : X("v-if", !0)], 16, DP), U(a, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
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
  props: Bg,
  setup(e) {
    const n = O(), r = O(!1), t = yn(e, "modelValue"), a = S(() => t.value === e.checkedValue), { radioGroup: o, bindRadioGroup: i } = PP(), { hovering: l, handleHovering: s } = ur(), { form: u, bindForm: d } = Wn(), c = S(() => {
      const E = u?.disabled.value || e.disabled, D = a.value, A = o?.hasChecked.value;
      if (e.tabindex != null) return e.tabindex;
      if (!E)
        return o && A && !D ? "-1" : "0";
    }), { errorMessage: f, validateWithTrigger: v, validate: g, resetValidation: h } = xn(), m = {
      sync: N,
      validate: M,
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
      const { key: D } = E;
      (D === "Enter" || D === " ") && Ze(E), D === "Enter" && n.value.click();
    }
    function $(E) {
      r.value && E.key === " " && (Ze(E), n.value.click());
    }
    function y(E) {
      Ne(() => {
        const { validateTrigger: D, rules: A, modelValue: I } = e;
        v(D, E, A, I);
      });
    }
    function T(E) {
      return OP(this, null, function* () {
        const { checkedValue: D, onChange: A } = e;
        o && t.value === D || (t.value = E, o?.onToggle(D), yield Ne(), C(A, E), y("onChange"));
      });
    }
    function z(E) {
      const { disabled: D, readonly: A, uncheckedValue: I, checkedValue: B, onClick: j } = e;
      u?.disabled.value || D || (C(j, E), !(u?.readonly.value || A) && T(a.value ? I : B));
    }
    function P() {
      n.value.focus();
    }
    function N(E) {
      const { checkedValue: D, uncheckedValue: A } = e, I = E === D;
      return t.value = I ? D : A, I;
    }
    function H() {
      t.value = e.uncheckedValue, h();
    }
    function M() {
      return g(e.rules, e.modelValue);
    }
    function R(E) {
      const { uncheckedValue: D, checkedValue: A } = e;
      [D, A].includes(E) || (E = a.value ? D : A), T(E);
    }
    return {
      radio: n,
      isFocusing: r,
      checked: a,
      errorMessage: f,
      radioGroupErrorMessage: o?.errorMessage,
      formDisabled: u?.disabled,
      formReadonly: u?.readonly,
      hovering: l,
      tabIndex: c,
      handleHovering: s,
      n: TP,
      classes: EP,
      handleClick: z,
      handleTextClick: P,
      toSizeUnit: Te,
      toggle: R,
      reset: H,
      validate: M,
      resetValidation: h
    };
  }
});
Mg.render = BP;
var Bi = Mg;
ue(Bi);
fe(Bi, Bg);
var fN = Bi, Sa = Bi, { n: IP, classes: MP } = ae("data-table"), AP = ["colspan", "rowspan"], NP = ["disabled"];
function RP(e, n) {
  const r = x("var-checkbox"), t = x("var-radio"), a = x("var-icon"), o = x("maybe-v-node");
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
  }, [U(a, {
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
  }, [U(a, {
    "var-data-table-cover": "",
    name: e.cell.treeExpanded ? "chevron-down" : "chevron-right"
  }, null, 8, ["name"])], 2)) : (b(), k("span", {
    key: 1,
    class: p(e.n("tree-indent"))
  }, null, 2)), U(o, {
    is: e.renderCell(e.bodyRow, e.cell.column),
    tag: "div"
  }, null, 8, ["is"])], 6)) : (b(), ke(o, {
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
    VarRadio: Sa
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
var VP = Ag, { n: LP, classes: FP } = ae("data-table"), HP = ["colspan", "rowspan"];
function UP(e, n) {
  const r = x("var-checkbox"), t = x("maybe-v-node"), a = x("var-icon");
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
    onClick: n[0] || (n[0] = (o) => e.toggleColumnSorter(e.headerCell.column.key))
  }, [L("span", { class: p(e.n("sort-trigger-text")) }, [U(t, { is: e.renderHeaderTitle() }, null, 8, ["is"])], 2), L("span", {
    class: p(e.n("sort-trigger-icon")),
    "aria-hidden": "true"
  }, [U(a, {
    name: "chevron-up",
    size: 18,
    "var-data-table-cover": "",
    class: p(e.classes(e.n("sort-trigger-icon-up"), [e.columnSorterOrder === "asc", e.n("sort-trigger-icon--active")]))
  }, null, 8, ["class"]), U(a, {
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
    onMousedown: n[2] || (n[2] = (o) => e.startColumnResize(o, e.headerCell))
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
      var o, i;
      return (i = (o = e.headerCell.column.titleAlign) != null ? o : e.headerCell.column.align) != null ? i : "left";
    }), t = S(() => e.headerCell.colSpan != null && e.headerCell.colSpan > 1 ? {} : {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    });
    function a() {
      const { column: o } = e.headerCell;
      return e.isSelectionColumn(o) || e.isExpandColumn(o) ? "" : ir(o.title);
    }
    return {
      n: LP,
      classes: FP,
      columnSorterOrder: n,
      renderHeaderTitle: a,
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
  const r = ua(e, () => Array(n).fill(!1));
  return {
    rawMatrix: r,
    isCovered: (t, a) => r[t][a],
    cover: (t, a, o, i) => {
      ua(o, (l) => {
        ua(i, (s) => {
          l === 0 && s === 0 || (r[t + l][a + s] = !0);
        });
      });
    }
  };
}
function Ca(e, n, r) {
  const t = e == null ? 1 : xl(ir(e, r));
  return t <= 0 ? 0 : hn(t, 1, n);
}
var YP = Object.defineProperty, WP = Object.defineProperties, KP = Object.getOwnPropertyDescriptors, tf = Object.getOwnPropertySymbols, qP = Object.prototype.hasOwnProperty, XP = Object.prototype.propertyIsEnumerable, af = (e, n, r) => n in e ? YP(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, GP = (e, n) => {
  for (var r in n || (n = {})) qP.call(n, r) && af(e, r, n[r]);
  if (tf)
    for (var r of tf(n)) XP.call(n, r) && af(e, r, n[r]);
  return e;
}, ZP = (e, n) => WP(e, KP(n));
function JP({ columns: e, sourceRows: n, tree: r, collapsedTreeRowKeys: t, expandedRowKeySet: a, firstTreeColumnIndex: o, getRowKey: i, getTreeChildren: l }) {
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
      const T = [];
      return g.forEach((z, P) => {
        var N, H;
        if (w.isCovered(y, P)) return;
        const M = {
          row: $.row,
          rowIndex: $.rowIndex,
          column: z
        }, R = m - P, E = h - y, D = Ca(z.colSpan, R, M), A = Ca(z.rowSpan, E, M);
        if (D === 0 || A === 0) return;
        w.cover(y, P, A, D);
        const I = P === o.value;
        T.push({
          key: `${(H = (N = z.key) != null ? N : z.type) != null ? H : P}-${y}-${P}`,
          columnIndex: P,
          column: z,
          treeLevel: I ? $.level : void 0,
          treeExpandable: I ? $.expandable : void 0,
          treeExpanded: I ? $.treeExpanded : void 0,
          colSpan: D > 1 ? D : void 0,
          rowSpan: A > 1 ? A : void 0
        });
      }), ZP(GP({}, $), {
        expanded: a.value.has($.key),
        cells: T
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
    function $(y, T, z, P) {
      for (const N of y) {
        const H = w;
        w += 1;
        const M = i(N, H), R = l(N), E = r() && R.length > 0, D = !E || !t.value.has(M);
        (h || P) && m.push({
          key: M,
          row: N,
          rowIndex: H,
          level: T,
          parentKey: z,
          expandable: E,
          treeExpanded: D
        }), $(R, T + 1, M, P && D);
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
  const r = S(() => d("left")), t = S(() => d("right")), a = S(() => l("left")), o = S(() => l("right"));
  function i(c, f) {
    var v, g;
    return c === "left" ? {
      left: `${(v = a.value[f]) != null ? v : 0}px`,
      position: "sticky",
      zIndex: 2
    } : c === "right" ? {
      right: `${(g = o.value[f]) != null ? g : 0}px`,
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
    leftFixedOffsets: a,
    rightFixedOffsets: o
  };
}
var xP = Object.defineProperty, _P = Object.defineProperties, e4 = Object.getOwnPropertyDescriptors, of = Object.getOwnPropertySymbols, n4 = Object.prototype.hasOwnProperty, r4 = Object.prototype.propertyIsEnumerable, lf = (e, n, r) => n in e ? xP(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, t4 = (e, n) => {
  for (var r in n || (n = {})) n4.call(n, r) && lf(e, r, n[r]);
  if (of)
    for (var r of of(n)) r4.call(n, r) && lf(e, r, n[r]);
  return e;
}, a4 = (e, n) => _P(e, e4(n)), o4 = 52;
function i4({ columns: e, isSelectionColumn: n, isExpandColumn: r }) {
  const t = O({});
  let a;
  const o = S(() => e().map((w, $) => {
    var y;
    return (y = f(w, $)) != null ? y : 0;
  })), i = S(() => e().some((w, $) => f(w, $) != null)), l = S(() => o.value.reduce((w, $) => w + $, 0));
  me(e, () => {
    const w = new Set(e().map((y, T) => v(y, T))), $ = {};
    Object.entries(t.value).forEach(([y, T]) => {
      w.has(y) && ($[y] = T);
    }), t.value = $;
  }, { immediate: !0 }), Pt(() => {
    a?.();
  });
  function s(w) {
    return w.resizable === !0;
  }
  function u(w, $) {
    const y = {}, T = c(w, $);
    if (T != null)
      return y.width = Te(T), y.minWidth = Te(T), y.maxWidth = Te(T), y;
    const z = f(w, $);
    z != null && (y.width = Te(z));
    const P = g(w);
    P != null ? y.minWidth = Te(P) : z != null && (y.minWidth = Te(z));
    const N = h(w);
    return N != null && (y.maxWidth = Te(N)), y;
  }
  function d(w, $) {
    var y;
    if (!s($.column)) return;
    w.preventDefault(), w.stopPropagation();
    const T = (y = w.currentTarget) == null ? void 0 : y.closest("th");
    if (!T) return;
    a?.();
    const z = w.clientX, P = T.getBoundingClientRect().width, N = v($.column, $.startLeafColumnIndex);
    document.addEventListener("mousemove", H), document.addEventListener("mouseup", M), a = R;
    function H(E) {
      const D = m($.column, P + E.clientX - z);
      t.value = a4(t4({}, t.value), { [N]: D });
    }
    function M() {
      R();
    }
    function R() {
      document.removeEventListener("mousemove", H), document.removeEventListener("mouseup", M), a = void 0;
    }
  }
  function c(w, $) {
    return t.value[v(w, $)];
  }
  function f(w, $) {
    var y;
    const T = c(w, $);
    if (T != null) return T;
    const z = (y = w.width) != null ? y : n(w) || r(w) ? o4 : void 0;
    if (z != null) return m(w, fn(z));
    const P = g(w);
    if (P != null) return P;
  }
  function v(w, $) {
    var y, T;
    return `${(T = (y = w.key) != null ? y : w.type) != null ? T : "column"}-${$}`;
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
    var y, T;
    const z = (y = g(w)) != null ? y : 0, P = (T = h(w)) != null ? T : Number.POSITIVE_INFINITY;
    return hn($, z, P);
  }
  return {
    hasResolvedColumnWidth: i,
    resolvedColumnWidths: o,
    totalResolvedColumnWidth: l,
    getColStyle: u,
    isColumnResizable: s,
    startColumnResize: d
  };
}
function l4(e = []) {
  const n = O(), r = O(0), t = O(0);
  me(e, a, {
    immediate: !0,
    flush: "post"
  }), ju(n, a), wr(a);
  function a() {
    Ne(o);
  }
  function o() {
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
    syncContainerScroll: o
  };
}
function s4({ columns: e, expandedRowKeys: n, isExpandColumn: r }) {
  const t = S(() => new Set(n.value)), a = S(() => e().find(r));
  function o(s, u) {
    return u?.expandable ? u.expandable({
      row: s.row,
      rowIndex: s.rowIndex
    }) : !0;
  }
  function i(s) {
    const u = a.value;
    if (!u || !o(s, u)) return;
    const d = new Set(n.value);
    d.has(s.key) ? d.delete(s.key) : d.add(s.key), n.value = [...d];
  }
  function l(s) {
    const u = a.value;
    if (u)
      return u.renderExpand({
        row: s.row,
        rowIndex: s.rowIndex
      });
  }
  return {
    expandedRowKeySet: t,
    isRowExpandable: o,
    toggleRowExpanded: i,
    renderExpandedRow: l
  };
}
function u4({ columns: e, sourceRows: n, summary: r }) {
  return { footRows: S(() => {
    const t = r();
    if (!t) return [];
    const a = t({ data: n() }), o = Kr(a), i = e(), l = Vg(o.length, i.length);
    return o.map((s, u) => i.flatMap((d, c) => {
      var f, v;
      if (l.isCovered(u, c)) return [];
      const g = (v = (f = d.key) != null ? f : d.type) != null ? v : String(c), h = s[g], m = i.length - c, w = o.length - u, $ = Ca(h?.colSpan, m), y = Ca(h?.rowSpan, w);
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
  const n = S(() => a(e())), r = S(() => {
    const s = e(), u = [], d = i(s);
    let c = 0;
    f(s, 0);
    function f(h, m) {
      u[m] || (u[m] = []);
      const w = u[m], $ = c, y = $ + a(h).length - 1;
      let T = $, z = 0;
      return h.forEach((P, N) => {
        if (t(P)) {
          z += v(w, P, m, N);
          return;
        }
        const H = g(w, P, m, y, T);
        H > 1 && (T = c - 1 + H), z += H;
      }), z;
    }
    function v(h, m, w, $) {
      const y = c, T = f(m.children, w + 1), z = c - 1;
      return T === 0 ? 0 : (h.push({
        key: o(m, w, $),
        column: m,
        colSpan: T,
        startLeafColumnIndex: y,
        endLeafColumnIndex: z,
        fixed: l(n.value.slice(y, z + 1))
      }), T);
    }
    function g(h, m, w, $, y) {
      if (c < y)
        return c += 1, 0;
      const T = c, z = $ - T + 1, P = Ca(m.titleColSpan, z);
      return c += 1, P === 0 ? 0 : (h.push({
        key: o(m, w, T),
        column: m,
        colSpan: P > 1 ? P : void 0,
        rowSpan: d - w > 1 ? d - w : void 0,
        startLeafColumnIndex: T,
        endLeafColumnIndex: T + P - 1,
        fixed: l(n.value.slice(T, T + P))
      }), P);
    }
    return u;
  });
  function t(s) {
    return "children" in s && Ke(s.children) && s.children.length > 0;
  }
  function a(s) {
    return s.flatMap((u) => t(u) ? a(u.children) : [u]);
  }
  function o(s, u, d) {
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
function g4({ pagination: e, remote: n, loading: r, plain: t, page: a, pageSize: o, total: i, data: l, onUpdatePage: s }) {
  const u = S(() => {
    var h;
    const m = e();
    return Ba(m) ? df(Ul({}, cf), {
      elevation: t() ? 1 : !0,
      disabled: r()
    }) : df(Ul(Ul({}, cf), m), {
      elevation: (h = m.elevation) != null ? h : t() ? 1 : !0,
      disabled: r() || m.disabled === !0
    });
  }), d = S(() => {
    var h;
    return e() === !1 ? l().length : n() ? (h = i()) != null ? h : 0 : l().length;
  }), c = S(() => e() !== !1 && d.value > 0), f = S(() => c.value ? hn(Math.ceil(d.value / o()), 1, Number.MAX_SAFE_INTEGER) : 1), v = S(() => c.value ? hn(a(), 1, f.value) : 1), g = S(() => {
    if (!c.value || n()) return l();
    const h = (v.value - 1) * o();
    return l().slice(h, h + o());
  });
  return me([
    e,
    n,
    i,
    a,
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
function $4({ columns: e, tree: n, cascade: r, pagedData: t, allFlatRows: a, treeRowMeta: o, checkedRowKeys: i, isSelectionColumn: l, getTreeChildren: s }) {
  const u = S(() => e().find(l)), d = S(() => n() && r() && !!u.value && m(u.value)), c = S(() => new Set(i.value)), f = S(() => {
    const E = /* @__PURE__ */ new Map(), D = u.value;
    if (!D) return E;
    for (const I of t()) A(I);
    function A(I) {
      const B = o().rowByObject.get(I);
      if (!B) return {
        checked: !1,
        indeterminate: !1,
        selectable: !1
      };
      const j = s(I).map(A), K = $(I, B.rowIndex, D), G = c.value.has(B.key);
      if (!d.value || j.length === 0) {
        const ne = {
          checked: G,
          indeterminate: !1
        };
        return E.set(B.key, ne), mf(pf({}, ne), { selectable: K });
      }
      const ce = j.filter((ne) => ne.selectable), ge = ce.length > 0 ? ce.every((ne) => ne.checked) : G, de = ce.some((ne) => ne.checked || ne.indeterminate), Q = {
        checked: K ? ge : !1,
        indeterminate: ce.length > 0 && !ge && de
      };
      return E.set(B.key, Q), mf(pf({}, Q), { selectable: K || ce.length > 0 });
    }
    return E;
  }), v = S(() => {
    const E = u.value;
    return E ? a().filter((D) => $(D.row, D.rowIndex, E)) : [];
  }), g = S(() => v.value.length > 0 && v.value.every((E) => T(E.key))), h = S(() => v.value.some((E) => T(E.key) || z(E.key)) && !g.value);
  function m(E) {
    return E.multiple !== !1;
  }
  function w(E) {
    return E.selectable !== !1;
  }
  function $(E, D, A) {
    return !A || A.selectable == null || A.selectable === !0 ? !0 : A.selectable === !1 ? !1 : A.selectable({
      row: E,
      rowIndex: D
    });
  }
  function y(E) {
    i.value = E;
  }
  function T(E) {
    var D, A;
    return (A = (D = f.value.get(E)) == null ? void 0 : D.checked) != null ? A : c.value.has(E);
  }
  function z(E) {
    var D, A;
    return (A = (D = f.value.get(E)) == null ? void 0 : D.indeterminate) != null ? A : !1;
  }
  function P(E, D) {
    const A = u.value;
    if (!A || !w(A) || !$(E.row, E.rowIndex, A)) return;
    if (!m(A)) {
      y(D ? [E.key] : i.value.filter((B) => B !== E.key));
      return;
    }
    const I = new Set(i.value);
    if (d.value) {
      for (const B of H(E.row)) D ? I.add(B) : I.delete(B);
      R(I, E.key);
    } else D ? I.add(E.key) : I.delete(E.key);
    y([...I]);
  }
  function N(E) {
    const D = u.value;
    if (!D || !w(D) || !m(D)) return;
    const A = new Set(i.value);
    for (const I of v.value) E ? A.add(I.key) : A.delete(I.key);
    y([...A]);
  }
  function H(E) {
    const D = u.value, A = [];
    if (!D) return A;
    function I(B) {
      const j = o().rowByObject.get(B);
      if (j) {
        $(B, j.rowIndex, D) && A.push(j.key);
        for (const K of s(B)) I(K);
      }
    }
    return I(E), A;
  }
  function M(E, D) {
    const A = u.value, I = o().rowByObject.get(E);
    if (!A || !I) return !1;
    const B = $(E, I.rowIndex, A), j = s(E);
    return j.length ? B && j.every((K) => M(K, D)) : B ? D.has(I.key) : !0;
  }
  function R(E, D) {
    let A = o().parentKeyByChild.get(D);
    for (; A != null; ) {
      const I = o().rowByKey.get(A);
      if (!I) break;
      M(I.row, E) ? E.add(A) : E.delete(A), A = o().parentKeyByChild.get(A);
    }
  }
  return {
    currentSelectableRows: v,
    allCurrentRowsSelected: g,
    someCurrentRowsSelected: h,
    isMultipleSelectionColumn: m,
    isSelectionColumnSelectable: w,
    isRowSelectable: $,
    isRowKeySelected: T,
    isRowKeyIndeterminate: z,
    toggleRowSelection: P,
    toggleCurrentSelectableRows: N
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
function D4({ sorters: e, sortMode: n, onUpdateSorters: r }) {
  const t = S(() => e());
  function a(l) {
    var s;
    return l.type == null && !((s = l.children) != null && s.length) && l.sorter === !0;
  }
  function o(l) {
    var s;
    return (s = t.value.find((u) => u.key === l)) == null ? void 0 : s.order;
  }
  function i(l) {
    const s = o(l);
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
    isColumnSortable: a,
    getColumnSorterOrder: o,
    toggleColumnSorter: i
  };
}
function B4({ tree: e, data: n, expandedTreeRowKeys: r, getRowKey: t, getTreeChildren: a }) {
  const o = S(() => new Set(r.value)), i = S(() => {
    if (!e()) return /* @__PURE__ */ new Set();
    const d = u(n()), c = /* @__PURE__ */ new Set();
    for (const f of d) o.value.has(f) || c.add(f);
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
        const w = a(h);
        w.length > 0 && c.add(t(h, m)), v(w);
      }
    }
    return v(d), c;
  }
  return {
    collapsedTreeRowKeys: i,
    expandedTreeRowKeySet: o,
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
}, kf = (e, n) => M4(e, A4(n)), { name: V4, n: L4, classes: F4 } = ae("data-table"), H4 = { key: 0 }, U4 = ["colspan"], j4 = { key: 1 }, Y4 = ["colspan", "rowspan"];
function W4(e, n) {
  const r = x("data-table-header-cell"), t = x("data-table-body-cell"), a = x("maybe-v-node"), o = x("var-pagination"), i = x("var-loading");
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
      L("colgroup", null, [(b(!0), k(Be, null, Ye(e.columns, (l, s) => {
        var u, d;
        return b(), k("col", {
          key: (d = (u = l.key) != null ? u : l.type) != null ? d : s,
          style: J(e.getColStyle(l, s))
        }, null, 4);
      }), 128))]),
      L("thead", null, [(b(!0), k(Be, null, Ye(e.headerRows, (l, s) => (b(), k("tr", {
        key: s,
        class: p(e.n("header-row"))
      }, [(b(!0), k(Be, null, Ye(l, (u) => (b(), ke(r, {
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
      e.bodyRows.length ? (b(), k("tbody", H4, [(b(!0), k(Be, null, Ye(e.bodyRows, (l) => (b(), k(Be, { key: l.key }, [L("tr", qe({ class: e.classes(e.n("row"), e.getRowClass(l)) }, { ref_for: !0 }, e.getRowProps(l)), [(b(!0), k(Be, null, Ye(l.cells, (s) => (b(), ke(t, {
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
      }, [L("div", { class: p(e.n("expanded-content")) }, [U(a, {
        is: e.renderExpandedRow(l),
        tag: "div"
      }, null, 8, ["is"])], 2)], 10, U4)], 2)) : X("v-if", !0)], 64))), 128))])) : X("v-if", !0),
      e.footRows.length ? (b(), k("tfoot", j4, [(b(!0), k(Be, null, Ye(e.footRows, (l, s) => (b(), k("tr", {
        key: s,
        class: p(e.n("summary-row"))
      }, [(b(!0), k(Be, null, Ye(l, (u) => (b(), k("td", {
        key: u.key,
        class: p(e.classes(e.n("cell"), e.n("summary-cell"), [u.column.fixed, e.n("fixed-cell")], [e.shouldRenderLeftFixedShadow(u.columnIndex), e.n("fixed-cell--shadow-right")], [e.shouldRenderRightFixedShadow(u.columnIndex), e.n("fixed-cell--shadow-left")])),
        style: J(e.getBodyCellStyle(u)),
        colspan: u.colSpan,
        rowspan: u.rowSpan
      }, [U(a, {
        is: u.value,
        tag: "div"
      }, null, 8, ["is"])], 14, Y4))), 128))], 2))), 128))])) : X("v-if", !0)
    ], 6)) : X("v-if", !0), e.bodyRows.length ? X("v-if", !0) : (b(), k("div", {
      key: 1,
      class: p(e.n("empty"))
    }, [F(e.$slots, "empty", {}, () => [Le(ve((e.pt ? e.pt : e.t)("dataTableEmptyText")), 1)])], 2))], 38), e.showPagination ? (b(), k("div", {
      key: 0,
      class: p(e.n("footer"))
    }, [F(e.$slots, "footer-prefix"), U(o, {
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
    VarPagination: zo,
    MaybeVNode: lr
  },
  props: Rg,
  setup(e) {
    const { t: n } = kr(), r = yn(e, "checkedRowKeys"), t = yn(e, "expandedRowKeys"), a = yn(e, "expandedTreeRowKeys"), o = yn(e, "page"), i = yn(e, "pageSize"), { collapsedTreeRowKeys: l, toggleTreeRowExpanded: s } = B4({
      tree: () => e.tree,
      data: () => e.data,
      expandedTreeRowKeys: a,
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
    }), { getFixedStyle: y, isFirstRightFixedColumn: T, isLastLeftFixedColumn: z } = QP({
      columns: () => u.value,
      resolvedColumnWidths: () => f.value
    }), { getColumnSorterOrder: P, isColumnSortable: N, toggleColumnSorter: H } = D4({
      sorters: () => e.sorters,
      sortMode: () => e.sortMode,
      onUpdateSorters: () => e["onUpdate:sorters"]
    }), { paginationProps: M, paginationTotal: R, showPagination: E, normalizedPage: D, pagedData: A } = g4({
      pagination: () => e.pagination,
      remote: () => e.remote,
      loading: () => e.loading,
      plain: () => e.plain,
      page: () => o.value,
      pageSize: () => i.value,
      total: () => e.total,
      data: () => e.data,
      onUpdatePage: () => (le) => {
        o.value = le;
      }
    }), I = S(() => u.value.findIndex((le) => !ze(le) && !Ge(le))), { expandedRowKeySet: B, isRowExpandable: j, toggleRowExpanded: K, renderExpandedRow: G } = s4({
      columns: () => u.value,
      expandedRowKeys: t,
      isExpandColumn: Ge
    }), { allFlatRows: ce, treeRowMeta: ge, bodyRows: de } = JP({
      collapsedTreeRowKeys: l,
      expandedRowKeySet: B,
      firstTreeColumnIndex: I,
      getRowKey: re,
      getTreeChildren: we,
      columns: () => u.value,
      sourceRows: () => A.value,
      tree: () => e.tree
    }), { footRows: Q } = u4({
      columns: () => u.value,
      sourceRows: () => A.value,
      summary: () => e.summary
    }), { container: ne, scrollLeft: pe, maxScrollDistance: $e, handleContainerScroll: W } = l4([
      u,
      de,
      Q,
      v,
      () => e.scrollX
    ]), { currentSelectableRows: oe, allCurrentRowsSelected: Ee, someCurrentRowsSelected: Ue, isMultipleSelectionColumn: nn, isSelectionColumnSelectable: Xe, isRowSelectable: en, isRowKeySelected: an, isRowKeyIndeterminate: ye, toggleRowSelection: _, toggleCurrentSelectableRows: Y } = $4({
      checkedRowKeys: r,
      isSelectionColumn: ze,
      getTreeChildren: we,
      columns: () => u.value,
      tree: () => e.tree,
      cascade: () => e.cascade,
      pagedData: () => A.value,
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
    function or(le) {
      return le ?? "left";
    }
    function Dr(le) {
      return le === u.value.length - 1;
    }
    function _n(le) {
      return pe.value > 1 && z(le);
    }
    function Re(le) {
      return pe.value < $e.value - 1 && T(le);
    }
    function sn(le) {
      var Se;
      return kf(wf({ textAlign: or((Se = le.column.titleAlign) != null ? Se : le.column.align) }, y(le.fixed, le.startLeafColumnIndex)), { zIndex: le.fixed ? 3 : 2 });
    }
    function ee(le) {
      return kf(wf({ textAlign: or(le.column.align) }, y(le.column.fixed, le.columnIndex)), { zIndex: le.column.fixed ? 1 : void 0 });
    }
    function be(le, Se) {
      o.value = le, i.value = Se;
    }
    return {
      pt: n,
      t: gn,
      container: ne,
      expandedRowKeys: t,
      containerStyle: w,
      paginationProps: M,
      paginationTotal: R,
      showPagination: E,
      normalizedPage: D,
      pageSize: i,
      tableStyle: $,
      columns: u,
      currentSelectableRows: oe,
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
      isColumnSortable: N,
      isMultipleSelectionColumn: nn,
      isSelectionColumnSelectable: Xe,
      getColumnSorterOrder: P,
      isRowExpandable: j,
      isRowKeyIndeterminate: ye,
      isRowKeySelected: an,
      isRowSelectable: en,
      shouldRenderLeftFixedShadow: _n,
      shouldRenderRightFixedShadow: Re,
      toggleColumnSorter: H,
      toggleCurrentSelectableRows: Y,
      toggleRowExpanded: K,
      toggleTreeRowExpanded: s,
      toggleRowSelection: _,
      renderCell: rn,
      renderExpandedRow: G,
      getColStyle: g,
      getHeaderCellStyle: sn,
      getBodyCellStyle: ee,
      handlePaginationChange: be,
      handleContainerScroll: W,
      isLastHeaderColumn: Dr,
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
}), la = [
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
], sa = [
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
}, er = Ha(), Qa = {
  Prev: -1,
  Current: 0,
  Next: 1
}, { n: xa } = ae("day-picker"), { n: Cf } = ae("date-picker");
function Z4(e, n) {
  const r = x("var-button");
  return b(), k("div", { class: p(e.n()) }, [L("div", { class: p(e.n("content")) }, [U(bn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: se(() => [(b(), k("div", { key: e.panelKey }, [L("ul", { class: p(e.n("head")) }, [(b(!0), k(Be, null, Ye(e.sortWeekList, (t) => (b(), k("li", { key: t }, ve(e.getDayAbbr(t)), 1))), 128))], 2), L("ul", { class: p(e.n("body")) }, [(b(!0), k(Be, null, Ye(e.days, (t, a) => (b(), k("li", { key: a }, [U(r, qe({
      type: "primary",
      "var-day-picker-cover": "",
      round: "",
      elevation: e.panelProps.buttonElevation
    }, { ref_for: !0 }, G4({}, e.buttonProps(t)), { onClick: (o) => e.selectDay(t) }), {
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
    const [, , r] = e.current.split("-"), t = O([]), a = O(!1), o = O(0), { t: i } = kr(), l = S(() => e.selection.selectedYear === e.preview.previewYear && e.selection.selectedMonth === e.preview.previewMonth), s = S(() => {
      const P = sa.findIndex((N) => N === e.panelProps.firstDayOfWeek);
      return P === -1 || P === 0 ? [...sa] : [...sa.slice(P), ...sa.slice(0, P)];
    });
    function u(P) {
      var N, H;
      return (H = (N = (i || gn)("datePickerWeekDict")) == null ? void 0 : N[P].abbr) != null ? H : "";
    }
    function d(P, N) {
      return {
        dateValue: P.format(Ln.Day),
        day: P.date(),
        monthOffset: N
      };
    }
    function c() {
      const { preview: { previewMonth: P, previewYear: N } } = e, H = er(`${N}-${P}-01`), M = H.endOf(Qe.Month), R = H.daysInMonth(), E = Math.max(0, s.value.findIndex((I) => I === `${H.day()}`)), D = 42 - E - R, A = [];
      for (let I = E; I > 0; I--) A.push(d(H.subtract(I, Qe.Day), Qa.Prev));
      for (let I = 1; I <= R; I++) A.push(d(H.date(I), Qa.Current));
      for (let I = 1; I <= D; I++) A.push(d(M.add(I, Qe.Day), Qa.Next));
      t.value = A;
    }
    function f(P) {
      const { min: N, max: H } = e.panelProps, M = H ? er(P).isSameOrBefore(er(H), Qe.Day) : !0, R = N ? er(P).isSameOrAfter(er(N), Qe.Day) : !0;
      return M && R;
    }
    function v() {
      const { selectedYear: P, selectedMonth: N, selectedDay: H } = e.selection;
      return P && N && H ? `${P}-${N}-${H}` : void 0;
    }
    function g(P) {
      const N = v();
      return N ? er(P).isSame(er(N), Qe.Day) : !1;
    }
    function h(P) {
      const { selection: { selectedDays: N, selectedRangeDays: H }, panelProps: { range: M } } = e;
      if (!M) return N.includes(P);
      if (!H.length) return !1;
      if (H.length === 1) return er(P).isSame(er(H[0]), Qe.Day);
      const R = er(P).isSameOrBefore(er(H[1]), Qe.Day), E = er(P).isSameOrAfter(er(H[0]), Qe.Day);
      return R && E;
    }
    function m(P) {
      const { allowedDates: N } = e.panelProps;
      return !f(P) || (N ? !N(P) : !1);
    }
    function w(P, N, H) {
      const { multiple: M, range: R, showCurrent: E } = e.panelProps;
      return E && er(P).isSame(er(e.current), Qe.Day) ? (R || M || l.value) && H ? !0 : R || M ? !N : l.value ? e.selection.selectedDay !== r : !0 : !1;
    }
    function $(P) {
      const { panelProps: { color: N, multiple: H, range: M } } = e, { dateValue: R, monthOffset: E } = P, D = E === Qa.Current, A = g(R), I = M || H ? h(R) : A, B = m(R), j = B || (M || H ? !I : !A), K = w(R, I, B), G = !B && !K && !I;
      return {
        text: j,
        outline: K,
        textColor: !B && K ? N ?? "" : "",
        [`${Cf()}-color-cover`]: G,
        class: [xa("button"), {
          [xa("button--usable")]: D,
          [xa("button--adjacent")]: !D
        }],
        disabled: B
      };
    }
    function y(P) {
      a.value = P === Wr.Prev, o.value += P === Wr.Prev ? -1 : 1;
    }
    function T(P) {
      a.value = P === Wr.Prev, o.value += P === Wr.Prev ? -1 : 1;
    }
    function z(P) {
      n("choose-day", P.day, P.monthOffset);
    }
    return On(() => {
      c();
    }), me(() => e.preview, () => {
      c();
    }), {
      n: xa,
      nDate: Cf,
      days: t,
      reverse: a,
      panelKey: o,
      sortWeekList: s,
      shiftPreview: y,
      shiftYearPreview: T,
      getDayAbbr: u,
      selectDay: z,
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
}, Ir = Ha(), { n: zf } = ae("month-picker"), { n: Tf } = ae("date-picker");
function n3(e, n) {
  const r = x("var-button");
  return b(), k("div", { class: p(e.n()) }, [L("div", { class: p(e.n("content")) }, [U(bn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: se(() => [(b(), k("ul", { key: e.panelKey }, [(b(!0), k(Be, null, Ye(e.MonthList, (t) => (b(), k("li", { key: t }, [U(r, qe({
      type: "primary",
      "var-month-picker-cover": "",
      elevation: e.panelProps.buttonElevation
    }, { ref_for: !0 }, e3({}, e.buttonProps(t)), { onClick: (a) => e.selectMonth(t) }), {
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
    const r = O(!1), t = O(0), { t: a } = kr();
    function o(c) {
      var f, v;
      return (v = (f = (a || gn)("datePickerMonthDict")) == null ? void 0 : f[c].abbr) != null ? v : "";
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
        const T = Ir(c).isSameOrBefore(Ir(w[1]), Qe.Month), z = Ir(c).isSameOrAfter(Ir(w[0]), Qe.Month);
        return T && z;
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
      MonthList: la,
      reverse: r,
      panelKey: t,
      shiftPreview: d,
      buttonProps: s,
      getMonthAbbr: o,
      selectMonth: u
    };
  }
});
Hg.render = n3;
var r3 = Hg, { n: t3 } = ae("date-picker-header");
function a3(e, n) {
  const r = x("var-icon"), t = x("var-button");
  return b(), k("div", { class: p([e.n(), e.n(`--${e.type}`)]) }, [e.type === e.DatePickerUnits.Day ? (b(), k(Be, { key: 0 }, [L("div", { class: p(e.n("nav")) }, [
    U(t, {
      class: p(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[0] || (n[0] = (a) => e.$emit("shift-year-preview", e.ShiftDirections.Prev))
    }, {
      default: se(() => [U(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class"]),
    U(t, {
      class: p([e.n("text-button"), e.n("year")]),
      "var-date-picker-header-cover": "",
      text: "",
      onClick: n[1] || (n[1] = (a) => e.$emit("open-year-panel"))
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
      onClick: n[2] || (n[2] = (a) => e.$emit("shift-year-preview", e.ShiftDirections.Next))
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
      onClick: n[3] || (n[3] = (a) => e.$emit("shift-preview", e.ShiftDirections.Prev))
    }, {
      default: se(() => [U(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class"]),
    U(t, {
      class: p([e.n("text-button"), e.n("month")]),
      "var-date-picker-header-cover": "",
      text: "",
      onClick: n[4] || (n[4] = (a) => e.$emit("open-month-panel"))
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
      onClick: n[5] || (n[5] = (a) => e.$emit("shift-preview", e.ShiftDirections.Next))
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
      onClick: n[6] || (n[6] = (a) => e.$emit("shift-preview", e.ShiftDirections.Prev))
    }, {
      default: se(() => [U(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class"]),
    U(t, {
      class: p([e.n("text-button"), e.n("year")]),
      "var-date-picker-header-cover": "",
      text: "",
      onClick: n[7] || (n[7] = (a) => e.$emit("open-year-panel"))
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
      onClick: n[8] || (n[8] = (a) => e.$emit("shift-preview", e.ShiftDirections.Next))
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
      onClick: n[9] || (n[9] = (a) => e.$emit("shift-preview", e.ShiftDirections.Prev))
    }, {
      default: se(() => [U(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class"]),
    e.showPanelToggle ? (b(), ke(t, {
      key: 0,
      class: p([e.n("text-button"), e.n("panel-label")]),
      "var-date-picker-header-cover": "",
      text: "",
      onClick: n[10] || (n[10] = (a) => e.$emit("open-date-panel"))
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
      onClick: n[11] || (n[11] = (a) => e.$emit("shift-preview", e.ShiftDirections.Next))
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
      var a, o, i;
      const l = (a = (n || gn)("datePickerMonthDict")) == null ? void 0 : a[e.date.previewMonth];
      return (n || gn)("lang") === "zh-CN" ? (o = l?.name) != null ? o : "" : (i = l?.abbr) != null ? i : "";
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
Ug.render = a3;
var o3 = Ug, jg = {
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
}, i3 = Object.defineProperty, Ef = Object.getOwnPropertySymbols, l3 = Object.prototype.hasOwnProperty, s3 = Object.prototype.propertyIsEnumerable, Df = (e, n, r) => n in e ? i3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, u3 = (e, n) => {
  for (var r in n || (n = {})) l3.call(n, r) && Df(e, r, n[r]);
  if (Ef)
    for (var r of Ef(n)) s3.call(n, r) && Df(e, r, n[r]);
  return e;
}, Mr = Ha(), { n: Bf } = ae("year-picker"), { n: jl } = ae("date-picker");
function d3(e, n) {
  const r = x("var-button");
  return b(), k("div", null, [U(bn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: se(() => [(b(), k("ul", {
      ref: "panel",
      key: e.panelKey,
      class: p(e.n())
    }, [(b(!0), k(Be, null, Ye(e.yearList, (t) => (b(), k("li", { key: t }, [U(r, qe({
      type: "primary",
      "var-year-picker-cover": "",
      elevation: e.panelProps.buttonElevation
    }, { ref_for: !0 }, u3({}, e.buttonProps(`${t}`)), { onClick: (a) => e.selectYear(t) }), {
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
    const r = O(), t = O(!1), a = O(0), o = O(0), i = S(() => {
      if (!e.preview) return [];
      const v = Math.floor(Z(e.preview) / 100 + o.value) * 100;
      return ua(100, (g) => Math.max(0, v) + g);
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
        const y = Mr(v).isSameOrBefore(Mr(m[1]), Qe.Year), T = Mr(v).isSameOrAfter(Mr(m[0]), Qe.Year);
        return y && T;
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
      const g = v === Wr.Prev;
      g && i.value[0] <= 0 || (t.value = g, a.value += g ? -1 : 1, o.value += g ? -1 : 1);
    }
    return On(c), me(() => e.preview, () => {
      o.value = 0;
    }), {
      n: Bf,
      buttonProps: u,
      panel: r,
      yearList: i,
      reverse: t,
      panelKey: a,
      nDate: jl,
      selectYear: d,
      shiftPreview: f
    };
  }
});
Yg.render = d3;
var c3 = Yg, { name: f3, n: v3, classes: p3 } = ae("date-picker"), wn = Ha();
function m3(e, n) {
  const r = x("panel-header"), t = x("year-picker-panel"), a = x("month-picker-panel"), o = x("day-picker-panel");
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
      ])) : e.panelType === e.DatePickerTypes.Month ? (b(), ke(a, {
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
      ])) : e.panelType === e.DatePickerTypes.Date ? (b(), ke(o, {
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
    PanelHeader: o3
  },
  props: jg,
  setup(e) {
    const { t: n } = kr(), r = wn().format(Ln.Day), [t, a] = r.split("-"), o = la.find((ee) => ee === a), i = O(!1), l = O(!1), s = O(!0), u = S(() => e.range && !s.value), d = O(o), c = O(t), f = O(!1), v = O(null), g = O(null), h = O(null), m = $n({
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
    }), T = S(() => y.value === Ve.Date ? Qe.Day : y.value), z = S(() => y.value === Ve.Year ? { previewYear: c.value } : $.value), P = S(() => {
      var ee;
      return (ee = e.hint) != null ? ee : K();
    }), N = S(() => {
      var ee;
      const { multiple: be, range: le } = e;
      return le ? m.selectedRangeYears.length ? m.selectedRangeYears.join(" ~ ") : "" : be ? `${m.selectedYears.length}${(n || gn)("datePickerSelected")}` : (ee = m.selectedYear) != null ? ee : "";
    }), H = S(() => {
      var ee, be;
      const { multiple: le, range: Se } = e;
      if (Se) return m.selectedRangeMonths.length ? m.selectedRangeMonths.join(" ~ ") : "";
      let je = "";
      return m.selectedMonth && (je = (be = (ee = (n || gn)("datePickerMonthDict")) == null ? void 0 : ee[m.selectedMonth].name) != null ? be : ""), le ? `${m.selectedMonths.length}${(n || gn)("datePickerSelected")}` : je;
    }), M = S(() => {
      var ee, be, le, Se;
      const { multiple: je, range: un } = e;
      if (un) {
        const Et = m.selectedRangeDays.map((Al) => wn(Al).format(Ln.Day));
        return Et.length ? Et.join(" ~ ") : "";
      }
      if (je) return `${m.selectedDays.length}${(n || gn)("datePickerSelected")}`;
      if (!m.selectedYear || !m.selectedMonth || !m.selectedDay) return "";
      const Rn = wn(`${m.selectedYear}-${m.selectedMonth}-${m.selectedDay}`).day(), Kn = sa.find((Et) => Et === `${Rn}`), Zr = (be = (ee = (n || gn)("datePickerWeekDict")) == null ? void 0 : ee[Kn].name) != null ? be : "", Il = (Se = (le = (n || gn)("datePickerMonthDict")) == null ? void 0 : le[m.selectedMonth].name) != null ? Se : "", Ml = Gr(m.selectedDay, 2, "0");
      return (n || gn)("lang") === "zh-CN" ? `${m.selectedMonth}-${Ml} ${Zr.slice(0, 3)}` : `${Zr.slice(0, 3)}, ${Il.slice(0, 3)} ${Z(m.selectedDay)}`;
    }), R = S(() => {
      var ee, be;
      const le = wn(`${m.selectedYear}-${m.selectedMonth}-${m.selectedDay}`).day(), Se = m.selectedDay ? Gr(m.selectedDay, 2, "0") : "";
      return {
        week: `${le}`,
        year: (ee = m.selectedYear) != null ? ee : "",
        month: (be = m.selectedMonth) != null ? be : "",
        date: Se
      };
    }), E = S(() => m.selectedRangeDays.map((ee) => wn(ee).format(Ln.Day))), D = S(() => m.selectedYear === c.value), A = S(() => m.selectedMonth === d.value);
    let I = !1;
    me(() => e.modelValue, () => {
      const ee = !I;
      I = !1, B(ee);
    }, { immediate: !0 });
    function B(ee = !0) {
      if (!we()) return;
      const { modelValue: be, type: le } = e;
      if (e.range) {
        if (!Ke(be)) return;
        s.value = be.length !== 1, $r(be, le, ee);
        return;
      }
      if (e.multiple) {
        if (!Ke(be)) return;
        or(be, le, ee);
        return;
      }
      Dr(be, ee);
    }
    function j(ee) {
      if (ee === Ve.Year) {
        i.value = !0, l.value = !1;
        return;
      }
      if (ee === Ve.Month) {
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
    function ce(ee) {
      G().value.shiftPreview(ee), y.value === Ve.Date ? re(Qe.Month, ee) : y.value === Ve.Month && re(Qe.Year, ee);
    }
    function ge(ee) {
      h.value.shiftYearPreview(ee), re(Qe.Year, ee);
    }
    function de(ee) {
      return ee === Ve.Year ? Ln.Year : ee === Ve.Month ? Ln.Month : Ln.Day;
    }
    function Q(ee) {
      return ee === Ve.Year ? m.selectedRangeYears : ee === Ve.Month ? m.selectedRangeMonths : m.selectedRangeDays;
    }
    function ne(ee, be) {
      if (ee === Ve.Year) {
        m.selectedRangeYears = be;
        return;
      }
      if (ee === Ve.Month) {
        m.selectedRangeMonths = be;
        return;
      }
      m.selectedRangeDays = be;
    }
    function pe(ee) {
      return ee === Ve.Year ? m.selectedYears : ee === Ve.Month ? m.selectedMonths : m.selectedDays;
    }
    function $e(ee, be) {
      if (ee === Ve.Year) {
        m.selectedYears = be;
        return;
      }
      if (ee === Ve.Month) {
        m.selectedMonths = be;
        return;
      }
      m.selectedDays = be;
    }
    function W(ee) {
      C(e["onUpdate:modelValue"], ee), C(e.onChange, ee);
    }
    function oe() {
      return e.type === Ve.Date && m.selectedDay ? Z(m.selectedDay) : void 0;
    }
    function Ee() {
      C(e.onPreview, Z(c.value), Z(d.value), oe());
    }
    function Ue(ee, be) {
      const le = Q(be), Se = s.value ? [ee, ee] : [le[0], ee];
      if (ne(be, Se), s.value = !s.value, !s.value) return;
      const je = wn(Se[0]).isAfter(Se[1]) ? [Se[1], Se[0]] : [...Se];
      In(), W(je);
    }
    function nn(ee, be) {
      const le = pe(be), Se = be === Ve.Year ? Ln.Year : be === Ve.Month ? Ln.Month : Ln.Day, je = le.map((Kn) => wn(Kn).format(Se)), un = je.findIndex((Kn) => Kn === ee), Rn = un !== -1;
      Rn && je.splice(un, 1), Rn || je.push(ee), In(), W(je);
    }
    function Xe(ee, be) {
      if (e.range) {
        Ue(ee, be);
        return;
      }
      if (e.multiple) {
        nn(ee, be);
        return;
      }
      In(), W(ee);
    }
    function en(ee, be, le = !0) {
      const { min: Se, max: je, allowedDates: un } = e, Rn = je ? wn(ee).isSameOrBefore(wn(je), be) : !0, Kn = Se ? wn(ee).isSameOrAfter(wn(Se), be) : !0, Zr = le && un ? un(ee) : !0;
      return Rn && Kn && Zr;
    }
    function an(ee, be) {
      return !m.selectedYear || !m.selectedMonth ? !1 : D.value ? ee === Qe.Year ? be < Z(m.selectedYear) : ee === Qe.Month ? be < m.selectedMonth : A.value ? be < Z(m.selectedDay) : m.selectedMonth > d.value : m.selectedYear > c.value;
    }
    function ye(ee, be = 0) {
      const { readonly: le } = e;
      if (le) return;
      const Se = wn(`${c.value}-${d.value}-01`).add(be, Qe.Month), je = Se.date(ee).format(Ln.Day);
      en(je, Qe.Day) && (f.value = be !== 0 ? be < 0 : an(Qe.Day, ee), be !== 0 && (c.value = Se.format(Ln.Year), d.value = Se.format(Ln.Month).split("-")[1], Ee()), Xe(je, Ve.Date));
    }
    function _(ee) {
      const { type: be, readonly: le } = e, Se = `${c.value}-${ee}`;
      if (!(le || !en(Se, Qe.Month, be === Ve.Month))) {
        if (f.value = an(Qe.Month, ee), be === Ve.Month) {
          Xe(Se, Ve.Month), l.value = !1;
          return;
        }
        d.value = ee, Ee(), l.value = !1;
      }
    }
    function Y(ee) {
      const { type: be, readonly: le } = e, Se = `${ee}`;
      if (!(le || !en(Se, Qe.Year, be === Ve.Year))) {
        if (f.value = an(Qe.Year, ee), be === Ve.Year) {
          Xe(Se, Ve.Year), i.value = !1;
          return;
        }
        c.value = `${ee}`, Ee(), i.value = !1;
      }
    }
    function re(ee, be) {
      const le = be === Wr.Prev ? -1 : 1;
      if (ee === Qe.Year) {
        c.value = `${Z(c.value) + le}`, Ee();
        return;
      }
      let Se = Z(d.value) + le;
      Se < 1 && (c.value = `${Z(c.value) - 1}`, Se = 12), Se > 12 && (c.value = `${Z(c.value) + 1}`, Se = 1), d.value = la.find((je) => Z(je) === Se), Ee();
    }
    function we() {
      return (e.multiple || e.range) && !Ke(e.modelValue) ? (Nt("DatePicker", 'type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ke(e.modelValue) ? (Nt("DatePicker", 'type of prop "modelValue" should be a String'), !1) : !0;
    }
    function ze(ee) {
      return Ke(ee) ? !1 : ee === "Invalid Date" ? (Nt("DatePicker", '"modelValue" is an Invalid Date'), !0) : !1;
    }
    function Ge() {
      return e.fallbackViewDate && wn(e.fallbackViewDate).format(Ln.Day) !== "Invalid Date" ? e.fallbackViewDate : wn().format(Ln.Day);
    }
    function rn(ee) {
      return ee && !ze(wn(ee).format(Ln.Day)) ? ee : Ge();
    }
    function mn(ee, be) {
      const le = de(be);
      return ee.find((Se) => !ze(wn(Se).format(le)));
    }
    function In() {
      I = e.type === Ve.Date || e.range || e.multiple;
    }
    function $r(ee, be, le = !0) {
      var Se;
      const je = de(be), un = ee.map((Rn) => wn(Rn).format(je)).filter((Rn) => !ze(Rn)).slice(0, 2);
      ne(be, un), un.length === 2 && wn(un[0]).isAfter(un[1]) && ne(be, [un[1], un[0]]), le && _n((Se = mn(ee, be)) != null ? Se : Ge());
    }
    function or(ee, be, le = !0) {
      var Se;
      const je = de(be);
      $e(be, Ql(ee.map((un) => wn(un).format(je))).filter((un) => un !== "Invalid Date")), le && _n((Se = mn(ee, be)) != null ? Se : Ge());
    }
    function Dr(ee, be = !0) {
      if (!ee) {
        m.selectedMonth = void 0, m.selectedYear = void 0, m.selectedDay = void 0, be && _n(Ge());
        return;
      }
      const le = wn(ee).format(Ln.Day);
      if (ze(le)) return;
      const [Se, je, un] = le.split("-"), Rn = la.find((Kn) => Kn === je);
      m.selectedMonth = Rn, m.selectedYear = Se, m.selectedDay = un, be && _n(le);
    }
    function _n(ee) {
      const be = wn(ee || Ge()).format(Ln.Day);
      if (ze(be)) return;
      const [le, Se] = be.split("-"), je = la.find((un) => un === Se);
      d.value = je, c.value = le;
    }
    function Re() {
      var ee;
      if (i.value = !1, l.value = !1, !e.range && !e.multiple) {
        _n(rn(e.modelValue));
        return;
      }
      _n(Ke(e.modelValue) && (ee = mn(e.modelValue, e.type)) != null ? ee : Ge());
    }
    function sn() {
      i.value = !1, l.value = !1, I = !1, B(!0);
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
      dateTitle: M,
      yearTitle: N,
      titleHint: P,
      panelType: y,
      headerType: T,
      headerPreview: z,
      selectionState: m,
      previewState: $,
      panelProps: w,
      dateSlotProps: R,
      formattedRangeDays: E,
      n: v3,
      classes: p3,
      switchPanel: j,
      shiftCurrentPanelPreview: ce,
      shiftDatePanelYearPreview: ge,
      selectDayFromPanel: ye,
      selectMonthFromPanel: _,
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
var pN = Mi, To = Mi, g3 = Object.defineProperty, If = Object.getOwnPropertySymbols, h3 = Object.prototype.hasOwnProperty, b3 = Object.prototype.propertyIsEnumerable, Mf = (e, n, r) => n in e ? g3(e, n, {
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
}, Fe(Ko, [
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
])), { name: w3, n: Af, classes: k3 } = ae("date-input-time-select"), $3 = ["aria-disabled", "onClick"];
function S3(e, n) {
  const r = x("var-menu-select");
  return b(), k("div", {
    ref: "root",
    class: p(e.n())
  }, [(b(!0), k(Be, null, Ye(e.segments, (t, a) => (b(), k(Be, { key: t.key }, [a > 0 ? (b(), k("span", {
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
    "onUpdate:show": (o) => e.handleUpdateShow(t.key, o),
    "onUpdate:modelValue": (o) => e.selectOption(t.key, o)
  }, {
    default: se(() => [L("button", {
      type: "button",
      class: p(e.classes(e.n("box"), [e.openKey === t.key, e.n("box--active")], [e.disabled || e.readonly, e.n("box--disabled")])),
      "aria-disabled": e.disabled || e.readonly,
      onMousedown: n[0] || (n[0] = Nn(() => {
      }, ["prevent"])),
      onClick: (o) => e.toggle(t.key)
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
    const r = O(null), t = O(null), a = S(() => {
      const f = [o("hour", e.hour, 24, e.isHourAllowed), o("minute", e.minute, 60, e.isMinuteAllowed)];
      return e.useSeconds && f.push(o("second", e.second, 60, e.isSecondAllowed)), f;
    });
    Tr(() => {
      document.addEventListener("mousedown", d, !0), document.addEventListener("pointerdown", c, !0);
    }), Pt(() => {
      document.removeEventListener("mousedown", d, !0), document.removeEventListener("pointerdown", c, !0);
    });
    function o(f, v, g, h) {
      return {
        key: f,
        value: v,
        label: Gr(`${v}`, 2, "0"),
        options: ua(g, (m) => ({
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
      segments: a,
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
}, Nr = Ha(), { name: P3, n: _a, classes: O3 } = ae("date-input");
function z3(e, n) {
  const r = x("var-icon"), t = x("var-input"), a = x("time-select"), o = x("var-date-picker"), i = x("var-menu"), l = x("var-form-details");
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
    }, ["prevent"])) }, [U(o, {
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
        U(a, {
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
        U(a, {
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
      }, [U(a, {
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
    VarDatePicker: To,
    TimeSelect: C3
  },
  props: Kg,
  setup(e) {
    const n = O(null), r = O(null), t = O(""), a = O(), o = O(!1), i = O(!1), { bindForm: l, form: s } = Wn(), { errorMessage: u, validateWithTrigger: d, validate: c, resetValidation: f } = xn(), v = S(() => {
      var q;
      return (q = s?.disabled.value) != null ? q : !1;
    }), g = S(() => {
      var q;
      return (q = s?.readonly.value) != null ? q : !1;
    }), h = S(() => e.disabled || v.value), m = S(() => e.readonly || g.value), w = S(() => e.type === "datetime"), $ = S(() => e.multiple && !w.value), y = S(() => $.value || e.range), T = S(() => w.value ? "date" : e.type), z = S(() => ce(e.min)), P = S(() => ce(e.max)), N = S(() => {
      var q;
      return !!((q = r.value) != null && q.rangeSelecting);
    }), H = S(() => w.value && e.range && (N.value || ze().length < 2)), M = S(() => e.min ? Nr(e.min) : void 0), R = S(() => e.max ? Nr(e.max) : void 0), E = S(() => ge(ze()[0])), D = S(() => {
      const q = ze();
      return [ge(q[0]), ge(q[1])];
    }), A = S(() => {
      const q = e.variant === "standard" ? _a("--standard-menu-margin") : e.variant === "filled" ? _a("--filled-menu-margin") : "";
      return [_a("--menu"), q].filter(Bt).join(" ");
    }), I = S(() => {
      const q = e.range ? e.rangeSeparator : e.separator;
      return t.value.split(q).map((he) => he.trim()).filter(Bt);
    }), B = {
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
    ], () => rn(), { immediate: !0 }), C(l, B);
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
      var he, Ae, De;
      return {
        hour: (he = q?.hour()) != null ? he : 0,
        minute: (Ae = q?.minute()) != null ? Ae : 0,
        second: (De = q?.second()) != null ? De : 0
      };
    }
    function de(q) {
      const he = M.value, Ae = R.value;
      return he && q.isBefore(he) ? he : Ae && q.isAfter(Ae) ? Ae : q;
    }
    function Q(q, he, Ae) {
      function De() {
        var on, Vn;
        const Br = ((on = q()) != null ? on : Nr()).format(Ar.Date);
        return (Vn = e.allowedTimes) == null ? void 0 : Vn.call(e, Br, Ae);
      }
      function tn(on, Vn) {
        var Br;
        const Jr = he(), Dt = ((Br = q()) != null ? Br : Nr()).hour(on === "hour" ? Vn : Jr.hour).minute(on === "minute" ? Vn : Jr.minute).second(on === "second" ? Vn : Jr.second), Ka = M.value, na = R.value;
        if (Ka && Dt.endOf(on).isBefore(Ka) || na && Dt.startOf(on).isAfter(na)) return !1;
        const Sr = De();
        return on === "hour" ? Sr?.hours ? Sr.hours(Vn) : !0 : on === "minute" ? Sr?.minutes ? Sr.minutes(Vn, Jr.hour) : !0 : Sr?.seconds ? Sr.seconds(Vn, Jr.minute, Jr.hour) : !0;
      }
      return {
        isHourAllowed: (on) => tn("hour", on),
        isMinuteAllowed: (on) => tn("minute", on),
        isSecondAllowed: (on) => tn("second", on)
      };
    }
    const ne = Q(() => ze()[0], () => E.value), pe = Q(() => ze()[0], () => D.value[0], "start"), $e = Q(() => ze()[1], () => D.value[1], "end");
    function W(q, he) {
      return de(q.hour(he.hour).minute(he.minute).second(he.second).millisecond(0));
    }
    function oe(q, he, Ae) {
      return Ae ? [q] : [q, ...Array.from({ length: he }, (De, tn) => tn).filter((De) => De !== q)];
    }
    function Ee(q, he) {
      const Ae = M.value, De = R.value, tn = q.hour(), on = q.minute(), Vn = q.second();
      return (!Ae || !q.isBefore(Ae)) && (!De || !q.isAfter(De)) && (!he.hours || he.hours(tn)) && (!he.minutes || he.minutes(on, tn)) && (!e.useSeconds || !he.seconds || he.seconds(Vn, on, tn)) && (!e.allowedDates || e.allowedDates(q.format(K())));
    }
    function Ue(q, he, Ae, De) {
      var tn, on;
      const Vn = q.format(Ar.Date), Br = (on = (tn = e.allowedTimes) == null ? void 0 : tn.call(e, Vn, Ae)) != null ? on : {}, Jr = oe(he.hour, 24, De === "hour" || De === "minute" || De === "second");
      for (const Dt of Jr) {
        if (Br.hours && !Br.hours(Dt)) continue;
        const Ka = oe(he.minute, 60, De === "minute" || De === "second");
        for (const na of Ka) {
          if (Br.minutes && !Br.minutes(na, Dt)) continue;
          const Sr = e.useSeconds ? oe(he.second, 60, De === "second") : [0];
          for (const y0 of Sr) {
            const wd = q.hour(Dt).minute(na).second(y0).millisecond(0);
            if (Ee(wd, Br)) return wd;
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
        return !Y(he[0], "start") || !Y(he[1], "end") ? !1 : (a.value = he.map((De) => De.format(K())), t.value = he.map((De) => De.format(G())).join(e.rangeSeparator), mn(he.map(we)), !0);
      const [Ae] = he;
      return Y(Ae) ? (a.value = Ae.format(K()), t.value = Ae.format(G()), mn(we(Ae)), !0) : !1;
    }
    function en(q, he) {
      if (h.value || m.value) return;
      const [Ae] = ze(), De = Ae ?? Nr(), tn = he ? Ue(De, q, void 0, he) : W(De, q);
      tn && Xe([tn]);
    }
    function an(q, he, Ae) {
      if (h.value || m.value) return;
      const De = ze();
      if (De.length < 2) return;
      const tn = [...De], on = q === 0 ? "start" : "end", Vn = Ae ? Ue(De[q], he, on, Ae) : W(De[q], he);
      Vn && (tn[q] = Vn, Xe(tn));
    }
    function ye(q, he) {
      const Ae = Nr(q, he, !0);
      return Ae.isValid() ? Ae : void 0;
    }
    function _(q, he) {
      var Ae;
      if (!w.value || !e.allowedTimes) return !0;
      const De = (Ae = e.allowedTimes(q.format(Ar.Date), he)) != null ? Ae : {}, tn = q.hour(), on = q.minute(), Vn = q.second();
      return (!De.hours || De.hours(tn)) && (!De.minutes || De.minutes(on, tn)) && (!e.useSeconds || !De.seconds || De.seconds(Vn, on, tn));
    }
    function Y(q, he) {
      const Ae = M.value, De = R.value, tn = e.type === "year" ? "year" : e.type === "month" ? "month" : e.type === "date" ? "day" : void 0;
      return !(Ae && (tn ? q.isBefore(Ae, tn) : q.isBefore(Ae)) || De && (tn ? q.isAfter(De, tn) : q.isAfter(De)) || e.allowedDates && !e.allowedDates(q.format(K())) || !_(q, he));
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
      if (y.value) return (Ke(e.modelValue) ? e.modelValue : []).map(re).filter(Bt);
      const q = Ke(e.modelValue) ? void 0 : re(e.modelValue);
      return q ? [q] : [];
    }
    function Ge(q) {
      t.value = q.map((he) => he.format(G())).join(e.range ? e.rangeSeparator : e.separator);
    }
    function rn() {
      const q = ze();
      if (y.value) a.value = q.map((he) => he.format(K()));
      else {
        const [he] = q;
        a.value = he ? he.format(K()) : void 0;
      }
      i.value || Ge(q);
    }
    function mn(q) {
      Dd(q, e.modelValue) || (C(e["onUpdate:modelValue"], q), C(e.onChange, q), In("onChange"));
    }
    function In(q) {
      Ne(() => {
        const { validateTrigger: he, rules: Ae, modelValue: De } = e;
        d(he, q, Ae, De);
      });
    }
    function $r(q) {
      i.value = !0, C(e.onFocus, q), In("onFocus");
    }
    function or(q) {
      i.value = !1, o.value = !1, C(e.onBlur, q), In("onBlur");
    }
    function Dr() {
      h.value || m.value || (o.value = !0, Ne(() => {
        var q;
        return (q = r.value) == null ? void 0 : q.syncModelValue();
      }), In("onClick"));
    }
    function _n(q) {
      h.value || m.value || q.key !== "Enter" || (Ze(q), o.value = !0, Ne(() => {
        var he;
        return (he = r.value) == null ? void 0 : he.syncModelValue();
      }));
    }
    function Re(q) {
      const he = ye(q, G());
      !he || !Y(he) || (a.value = he.format(K()), mn(we(he)));
    }
    function sn() {
      if (e.range ? I.value.length !== 2 : !I.value.length) return;
      const q = I.value.map((De) => ye(De, G()));
      if (q.some((De) => !De)) return;
      const he = q.filter(Bt);
      if (e.range && he[0].isAfter(he[1]) || he.some((De, tn) => !Y(De, e.range ? tn === 0 ? "start" : "end" : void 0))) return;
      const Ae = he.map(we);
      a.value = he.map((De) => De.format(K())), mn(Ae);
    }
    function ee(q) {
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
      const he = D.value, Ae = q.map((De, tn) => {
        var on;
        return Ue(De, (on = he[tn]) != null ? on : ge(), tn === 0 ? "start" : "end");
      });
      Ae.every(Bt) && Xe(Ae.filter(Bt)) || rn();
    }
    function Se(q) {
      const he = q.map((De) => Nr(De, K(), !0)).filter((De) => De.isValid());
      if (w.value && e.range) {
        le(he);
        return;
      }
      const Ae = he.map(we);
      t.value = he.map((De) => De.format(G())).join(e.range ? e.rangeSeparator : e.separator), mn(Ae);
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
        t.value = he.format(G()), mn(we(he)), y.value || (o.value = !1);
      }
    }
    function Rn(q) {
      if (!(h.value || m.value)) {
        if (a.value = q, Ke(q)) {
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
      t.value = "", a.value = y.value ? [] : void 0;
    }
    function Il() {
      if (h.value || m.value || !e.clearable) return;
      Zr(), o.value = !1;
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
      Zr(), o.value = !1, !Dd(e.modelValue, q) && C(e["onUpdate:modelValue"], q), f();
    }
    return {
      inputEl: n,
      picker: r,
      displayValue: t,
      pickerValue: a,
      showMenu: o,
      isFocusing: i,
      rangeSelecting: N,
      isRangeTimeSelectDisabled: H,
      formDisabled: v,
      formReadonly: g,
      errorMessage: u,
      menuPopoverClass: A,
      isDatetime: w,
      isMultiple: $,
      pickerType: T,
      pickerMin: z,
      pickerMax: P,
      singleTime: E,
      rangeTimes: D,
      singleAllowFns: ne,
      startAllowFns: pe,
      endAllowFns: $e,
      n: _a,
      classes: O3,
      handleTimeChange: en,
      handleRangeTimeChange: an,
      handleFocus: $r,
      handleBlur: or,
      handleClick: Dr,
      handleKeydown: _n,
      handleInput: ee,
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
var mN = Ai, Ls = Ai, T3 = Object.defineProperty, Nf = Object.getOwnPropertySymbols, E3 = Object.prototype.hasOwnProperty, D3 = Object.prototype.propertyIsEnumerable, Rf = (e, n, r) => n in e ? T3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, B3 = (e, n) => {
  for (var r in n || (n = {})) E3.call(n, r) && Rf(e, r, n[r]);
  if (Nf)
    for (var r of Nf(n)) D3.call(n, r) && Rf(e, r, n[r]);
  return e;
}, Gg = B3({
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
}, Ff = (e, n) => M3(e, A3(n)), { name: V3, n: L3, classes: F3 } = ae("dialog");
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
        var a;
        return [Le(ve((a = e.title) != null ? a : (e.pt ? e.pt : e.t)("dialogTitle")), 1)];
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
          var a;
          return [Le(ve((a = e.cancelButtonText) != null ? a : (e.pt ? e.pt : e.t)("dialogCancelButtonText")), 1)];
        }),
        _: 1
      }, 16, ["class", "onClick"])) : X("v-if", !0), e.confirmButton ? (b(), ke(r, qe({ key: 1 }, e.confirmButtonNormalizedProps, {
        class: e.classes(e.n("button"), e.n("confirm-button"), [e.confirmButtonProps != null, e.n("--with-button-props")]),
        "var-dialog-cover": "",
        onClick: e.confirm
      }), {
        default: se(() => {
          var a;
          return [Le(ve((a = e.confirmButtonText) != null ? a : (e.pt ? e.pt : e.t)("dialogConfirmButtonText")), 1)];
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
    const { t: n } = kr(), r = O(!1), t = O(!1), a = yn(e, "confirmButtonLoading"), o = yn(e, "cancelButtonLoading"), i = yn(e, "confirmButtonDisabled"), l = yn(e, "cancelButtonDisabled"), s = S(() => {
      var m, w, $, y, T, z;
      return Ff(Fs({ text: !0 }, e.confirmButtonProps), {
        textColor: (w = e.confirmButtonTextColor) != null ? w : (m = e.confirmButtonProps) == null ? void 0 : m.textColor,
        color: (y = e.confirmButtonColor) != null ? y : ($ = e.confirmButtonProps) == null ? void 0 : $.color,
        loading: a.value || ((T = e.confirmButtonProps) == null ? void 0 : T.loading),
        disabled: i.value || ((z = e.confirmButtonProps) == null ? void 0 : z.disabled)
      });
    }), u = S(() => {
      var m, w, $, y, T, z;
      return Ff(Fs({ text: !0 }, e.cancelButtonProps), {
        textColor: (w = e.cancelButtonTextColor) != null ? w : (m = e.cancelButtonProps) == null ? void 0 : m.textColor,
        color: (y = e.cancelButtonColor) != null ? y : ($ = e.cancelButtonProps) == null ? void 0 : $.color,
        loading: o.value || ((T = e.cancelButtonProps) == null ? void 0 : T.loading),
        disabled: l.value || ((z = e.cancelButtonProps) == null ? void 0 : z.disabled)
      });
    }), d = {
      confirmButtonLoading: a,
      cancelButtonLoading: o,
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
      confirmButtonLoading: a,
      cancelButtonLoading: o,
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
var ja = Zg, U3 = Object.defineProperty, j3 = Object.defineProperties, Y3 = Object.getOwnPropertyDescriptors, Hf = Object.getOwnPropertySymbols, W3 = Object.prototype.hasOwnProperty, K3 = Object.prototype.propertyIsEnumerable, Uf = (e, n, r) => n in e ? U3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Yl = (e, n) => {
  for (var r in n || (n = {})) W3.call(n, r) && Uf(e, r, n[r]);
  if (Hf)
    for (var r of Hf(n)) K3.call(n, r) && Uf(e, r, n[r]);
  return e;
}, q3 = (e, n) => j3(e, Y3(n)), rt, Eo = {};
function X3(e = {}) {
  return Pn(e) ? q3(Yl({}, Eo), { message: e }) : Yl(Yl({}, Eo), e);
}
function gt(e) {
  return Er() ? new Promise((n) => {
    gt.close();
    const r = X3(e), t = $n(r);
    t.teleport = "body", rt = t;
    const { unmountInstance: a } = Qt(ja, t, {
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
        C(t.onClosed), a(), rt === t && (rt = null);
      },
      onRouteChange: () => {
        a(), rt === t && (rt = null);
      },
      "onUpdate:show": (o) => {
        t.show = o;
      }
    });
    t.show = !0;
  }) : Promise.resolve();
}
gt.setDefaultOptions = function(e) {
  Eo = e;
};
gt.resetDefaultOptions = function() {
  Eo = {};
};
gt.close = function() {
  if (rt != null) {
    const e = rt;
    rt = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
gt.Component = ja;
ue(ja);
ue(ja, gt);
fe(gt, Gg);
var gN = ja, Hs = gt, Jg = {
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
}, { name: G3, n: Z3, classes: J3 } = ae("divider");
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
    }), a = S(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (Ba(i) || l) return { margin: s };
      const u = Z(i), d = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${Te(d)})`,
        left: u > 0 ? Te(d) : Te(0)
      };
    });
    On(o), zt(o);
    function o() {
      const { description: i, vertical: l } = e;
      r.value = (n.default || i != null) && !l;
    }
    return {
      n: Z3,
      classes: J3,
      withText: r,
      style: a,
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
}, Kf = (e, n) => _3(e, eO(n)), { name: tO, n: aO, classes: oO } = ae("drag");
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
    const r = O(null), t = O(0), a = O(0), o = O(!1), i = O(!1), { touching: l, dragging: s, moveX: u, moveY: d, startTouch: c, moveTouch: f, endTouch: v, resetTouch: g } = Jt(), { disabled: h } = Tt(), m = $n({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    me(() => e.boundary, R), wr(D), On(() => {
      R(), D();
    });
    function w(I) {
      e.disabled || (c(I), z());
    }
    function $(I) {
      !l.value || e.disabled || (f(I), Ze(I), i.value = !1, o.value = !0, e.direction.includes("x") && (t.value += u.value), e.direction.includes("y") && (a.value += d.value), M());
    }
    function y() {
      e.disabled || (v(), i.value = !0, H());
    }
    function T(I) {
      s.value || C(e.onClick, I);
    }
    function z() {
      const { left: I, top: B } = P();
      t.value = I, a.value = B;
    }
    function P() {
      const I = kn(r.value), B = kn(window), j = I.top - B.top, K = B.bottom - I.bottom, G = I.left - B.left, ce = B.right - I.right, { width: ge, height: de } = I, { width: Q, height: ne } = B;
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
    function N() {
      const I = P(), B = m.left, j = I.windowWidth - m.right - I.width, K = m.top, G = I.windowHeight - m.bottom - I.height;
      return {
        minX: B,
        minY: K,
        maxX: B < j ? j : B,
        maxY: K < G ? G : K
      };
    }
    function H() {
      if (e.attraction == null) return;
      const { halfWidth: I, halfHeight: B, top: j, bottom: K, left: G, right: ce } = P(), { minX: ge, minY: de, maxX: Q, maxY: ne } = N(), pe = G + I - m.left, $e = ce + I - m.right, W = j + B - m.top, oe = K + B - m.bottom, Ee = pe <= $e, Ue = W <= oe;
      e.attraction.includes("x") && (t.value = Ee ? ge : Q), e.attraction.includes("y") && (a.value = Ue ? de : ne);
    }
    function M() {
      const { minX: I, minY: B, maxX: j, maxY: K } = N();
      t.value = hn(t.value, I, j), a.value = hn(a.value, B, K);
    }
    function R() {
      const { top: I = 0, bottom: B = 0, left: j = 0, right: K = 0 } = e.boundary;
      m.top = fn(I), m.bottom = fn(B), m.left = fn(j), m.right = fn(K);
    }
    function E() {
      var I;
      const B = (I = n.style) != null ? I : {};
      return Kf(Wf({}, n), { style: Kf(Wf({}, B), {
        top: o.value ? 0 : B.top,
        left: o.value ? 0 : B.left,
        right: o.value ? "auto" : B.right,
        bottom: o.value ? "auto" : B.bottom,
        transform: o.value ? `translate(${t.value}px, ${a.value}px)` : B.transform
      }) });
    }
    function D() {
      o.value && (z(), M());
    }
    function A() {
      g(), i.value = !1, o.value = !1, t.value = 0, a.value = 0;
    }
    return {
      drag: r,
      x: t,
      y: a,
      enableTransition: i,
      dragging: s,
      teleportDisabled: h,
      n: aO,
      classes: oO,
      getAttrs: E,
      handleTouchstart: w,
      handleTouchmove: $,
      handleTouchend: y,
      handleClick: T,
      resize: D,
      reset: A
    };
  }
});
_g.render = iO;
var Ri = _g;
ue(Ri);
fe(Ri, xg);
var bN = Ri, Do = Ri, eh = {
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
}, { name: lO, n: sO, classes: uO } = ae("tooltip");
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
    const { disabled: n } = Tt(), { popover: r, host: t, referenceSize: a, show: o, zIndex: i, handlePopoverMouseenter: l, handlePopoverMouseleave: s, handlePopoverClose: u, handleClosed: d, open: c, close: f, resize: v, setReference: g } = rm(e);
    return {
      popover: r,
      host: t,
      referenceSize: a,
      show: o,
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
var yN = Vi, Bo = Vi, rh = {
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
}, { name: mO, n: gO, classes: hO } = ae("ellipsis"), bO = { key: 0 };
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
  components: { VarTooltip: Bo },
  props: rh,
  setup(e) {
    const n = O(null), r = O(!1), t = yn(e, "expand");
    let a;
    const o = S(() => !!e.expandTrigger && (!e.expandableOnOverflow || r.value || t.value)), i = S(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), l = S(() => e.tooltip === !1 || e.tooltipOnOverflow && !r.value ? { disabled: !0 } : e.tooltip === !0 ? { sameWidth: !0 } : pO({ sameWidth: !0 }, e.tooltip));
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
      o.value && (t.value = !t.value);
    }
    function c(f) {
      var v;
      const g = (v = f[0]) == null ? void 0 : v.contentRect.width;
      g !== void 0 && g !== a && a !== void 0 && e.expandableOnOverflow && t.value && (t.value = !1), a = g, u();
    }
    return ju(s, c), me(() => e.lineClamp, u), On(u), zt(u), {
      rootRef: n,
      truncated: r,
      clickable: o,
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
var wN = Li, js = Li, ah = {
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
}, { name: wO, classes: Wl, n: cr } = ae("fab"), Fi = te({
  name: wO,
  inheritAttrs: !1,
  props: ah,
  setup(e, { slots: n, attrs: r }) {
    const t = yn(e, "active"), a = O(null), o = O(null);
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
      (d = o.value) == null || d.reset();
    }), ep(a, "click", s);
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
      const c = Vo((d = C(n.default)) != null ? d : []), f = Ba(e.drag) ? {} : e.drag;
      return U(Do, qe({
        ref: o,
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
        ref: a,
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
fe(Fi, ah);
var kN = Fi, Ys = Fi, oh = {
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
}, { name: kO, n: $O, classes: SO } = ae("floating-panel"), Gf = 100, Zf = 0.2;
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
  props: oh,
  setup(e) {
    const n = O(0), r = O(null), { height: t } = Z0(), a = S(() => t.value * 0.6), o = yn(e, "anchor", { defaultValue: Gf }), i = S(() => {
      const M = [Gf, a.value], { anchors: R } = e;
      return Or(R) ? M : R;
    }), l = S(() => Math.min(...i.value)), s = S(() => Math.max(...i.value)), { disabled: u } = Tt(), { deltaY: d, touching: c, startTouch: f, moveTouch: v, endTouch: g, isReachTop: h, isReachBottom: m } = Jt();
    let w;
    Ia(() => c.value), me(() => o.value, $, { immediate: !0 }), me(() => i.value, () => {
      $(o.value);
    }, { immediate: !0 });
    function $(M) {
      P(M ?? l.value);
    }
    function y(M) {
      f(M), w = n.value;
    }
    function T(M) {
      var R;
      v(M);
      const E = M.target, D = r.value === E || ((R = r.value) == null ? void 0 : R.contains(E));
      if (!(D && !e.contentDraggable)) {
        if (D && e.contentDraggable && n.value >= s.value && !h(r.value)) {
          m(r.value) && Ze(M);
          return;
        }
        P(N(w - d.value)), Ze(M);
      }
    }
    function z() {
      g();
      const M = o.value;
      P(n.value), o.value = n.value, o.value !== M && C(e.onAnchorChange, n.value);
    }
    function P(M) {
      n.value = c.value ? M : H(M);
    }
    function N(M) {
      if (M > s.value) {
        const R = M - s.value;
        return s.value + R * Zf;
      }
      if (M < l.value) {
        const R = l.value - M;
        return l.value - R * Zf;
      }
      return M;
    }
    function H(M) {
      if (i.value.includes(M)) return M;
      let R = 1 / 0, E = 0;
      return i.value.forEach((D) => {
        const A = Math.abs(D - M);
        A < R && (R = A, E = D);
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
      handleTouchmove: T,
      handleTouchend: z
    };
  }
});
ih.render = CO;
var Hi = ih;
ue(Hi);
fe(Hi, oh);
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
}, Jf = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: PO, n: OO } = ae("form");
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
    const n = S(() => e.disabled), r = S(() => e.readonly), { formItems: t, bindFormItems: a } = V1();
    a({
      disabled: n,
      readonly: r
    });
    function o(c) {
      setTimeout(() => {
        const f = ut(c), v = f === window ? 0 : qd(f), g = qd(c) - v - fn(e.scrollToErrorOffsetY);
        ga(f, {
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
          return g && o((c = t[v].instance.proxy) == null ? void 0 : c.$el), !g;
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
}, { name: TO, n: EO } = ae("highlighter-provider"), Ui = te({
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
}, { name: DO, n: BO, classes: IO } = ae("image"), MO = [
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
  const t = _e("lazy"), a = _e("ripple");
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
      onLoad: n[0] || (n[0] = (...o) => e.handleLoad && e.handleLoad(...o)),
      onClick: n[1] || (n[1] = (...o) => e.handleClick && e.handleClick(...o))
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
      onLoad: n[2] || (n[2] = (...o) => e.handleLoad && e.handleLoad(...o)),
      onError: n[3] || (n[3] = (...o) => e.handleError && e.handleError(...o)),
      onClick: n[4] || (n[4] = (...o) => e.handleClick && e.handleClick(...o))
    }, null, 46, AO)) : X("v-if", !0),
    e.showErrorSlot ? F(e.$slots, "error", { key: 2 }) : X("v-if", !0)
  ], 6)), [[a, { disabled: !e.ripple }]]);
}
var ch = te({
  name: DO,
  directives: {
    Lazy: wa,
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
    function a(i) {
      const l = i.currentTarget;
      if (e.lazy) {
        if (l._lazy.state === "success") {
          C(e.onLoad, i);
          return;
        }
        l._lazy.state === "error" && t(i);
      } else C(e.onLoad, i);
    }
    function o(i) {
      C(e.onClick, i);
    }
    return {
      showErrorSlot: r,
      n: BO,
      classes: IO,
      toSizeUnit: Te,
      handleLoad: a,
      handleError: t,
      handleClick: o
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
}, It = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), RO = 250, VO = 20, { name: LO, n: Qf, classes: FO } = ae("swipe"), HO = ["onClick"];
function UO(e, n) {
  const r = x("var-icon"), t = x("var-button"), a = _e("hover");
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
      onTouchstart: n[0] || (n[0] = (...o) => e.handleTouchstart && e.handleTouchstart(...o)),
      onTouchmove: n[1] || (n[1] = (...o) => e.handleTouchmove && e.handleTouchmove(...o)),
      onTouchend: n[2] || (n[2] = (...o) => e.handleTouchend && e.handleTouchend(...o))
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
        onClick: n[3] || (n[3] = (o) => e.prev())
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
        onClick: n[4] || (n[4] = (o) => e.next())
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
    F(e.$slots, "indicator", yt(Ao({
      index: e.index,
      length: e.length,
      hovering: e.hovering,
      prev: e.prev,
      next: e.next,
      to: e.to
    })), () => [e.indicator && e.length ? (b(), k("div", {
      key: 0,
      class: p(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
    }, [(b(!0), k(Be, null, Ye(e.length, (o, i) => (b(), k("div", {
      key: o,
      class: p(e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
      style: J({ background: e.indicatorColor }),
      onClick: (l) => e.to(i)
    }, null, 14, HO))), 128))], 2)) : X("v-if", !0)])
  ], 2)), [[a, e.handleHovering]]);
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
    const n = O(null), r = O(0), t = S(() => e.vertical), a = O(0), o = O(0), i = O(!1), l = O(0), s = O(!1), { swipeItems: u, bindSwipeItems: d, length: c } = L1(), { swipeResizeListeners: f, bindSwipeResizeListeners: v } = F1(), { popup: g, bindPopup: h } = fp(), { deltaX: m, deltaY: w, moveX: $, moveY: y, offsetX: T, offsetY: z, touching: P, direction: N, startTime: H, startTouch: M, moveTouch: R, endTouch: E } = Jt(), D = S(() => N.value === (e.vertical ? "vertical" : "horizontal"));
    let A = !1, I = -1;
    d({
      size: r,
      currentIndex: l,
      vertical: t
    }), xe(() => window, "keydown", Ue), C(h, null), C(v, null), me(() => c.value, () => It(null, null, function* () {
      yield Gn(), de(), nn();
    })), g && me(() => g.show.value, (ye) => It(null, null, function* () {
      ye ? (yield Gn(), nn()) : ne();
    })), ft(nn), Zt(ne), wr(nn);
    function B(ye) {
      return u.find(({ index: _ }) => _.value === ye);
    }
    function j() {
      e.loop && (o.value >= 0 && B(c.value - 1).setTranslate(-a.value), o.value <= -(a.value - r.value) && B(0).setTranslate(a.value), o.value > -(a.value - r.value) && o.value < 0 && (B(c.value - 1).setTranslate(0), B(0).setTranslate(0)));
    }
    function K(ye) {
      const _ = tr(ye) ? ye : Math.floor((o.value - r.value / 2) / -r.value), { loop: Y } = e;
      return _ <= -1 ? Y ? -1 : 0 : _ >= c.value ? Y ? c.value : c.value - 1 : _;
    }
    function G(ye) {
      const { loop: _ } = e;
      return ye === -1 ? _ ? c.value - 1 : 0 : ye === c.value ? _ ? 0 : c.value - 1 : ye;
    }
    function ce(ye) {
      return e.loop ? ye < 0 ? c.value + ye : ye >= c.value ? ye - c.value : ye : hn(ye, 0, c.value - 1);
    }
    function ge() {
      return It(this, null, function* () {
        const ye = o.value >= r.value, _ = o.value <= -a.value, Y = 0, re = -(a.value - r.value);
        i.value = !0, (ye || _) && (i.value = !0, o.value = _ ? Y : re, B(0).setTranslate(0), B(c.value - 1).setTranslate(0)), yield Gn(), i.value = !1;
      });
    }
    function de() {
      A || (l.value = ce(Z(e.initialIndex)), A = !0);
    }
    function Q() {
      const { autoplay: ye } = e;
      !ye || c.value <= 1 || (ne(), I = window.setTimeout(() => {
        Xe(), Q();
      }, Z(ye)));
    }
    function ne() {
      I && clearTimeout(I);
    }
    function pe(ye) {
      return It(this, null, function* () {
        c.value <= 1 || !e.touchable || (M(ye), ne(), yield ge(), i.value = !0);
      });
    }
    function $e(ye) {
      const { touchable: _, vertical: Y } = e;
      !P.value || !_ || (R(ye), D.value && (Ze(ye), o.value += Y ? y.value : $.value, j()));
    }
    function W() {
      if (!P.value || (E(), !D.value)) return;
      const { vertical: ye, onChange: _ } = e, Y = ye ? w.value < 0 : m.value < 0, re = ye ? z.value : T.value, we = performance.now() - H.value <= RO && re >= VO ? K(Y ? l.value + 1 : l.value - 1) : K();
      i.value = !1, o.value = we * -r.value;
      const ze = l.value;
      l.value = G(we), Q(), ze !== l.value && C(_, l.value);
    }
    function oe(ye) {
      e.navigation === "hover" && (s.value = ye);
    }
    function Ee(ye) {
      return e.navigation !== "hover" ? "" : Qf(`--navigation${e.vertical ? "-vertical" : ""}-${ye}-animation`);
    }
    function Ue(ye) {
      if (!u.length || u.findIndex(({ isFocusing: Y }) => Y.value) === -1) return;
      const { key: _ } = ye;
      Ze(ye), _ === "ArrowLeft" && en(), _ === "ArrowRight" && Xe();
    }
    function nn() {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, a.value = r.value * c.value, o.value = l.value * -r.value, u.forEach((ye) => {
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
        const { loop: _, onChange: Y } = e, re = l.value;
        if (l.value = ce(re + 1), ye?.event !== !1 && C(Y, l.value), yield ge(), re === c.value - 1 && _) {
          B(0).setTranslate(a.value), o.value = c.value * -r.value;
          return;
        }
        re !== c.value - 1 && (o.value = l.value * -r.value);
      });
    }
    function en(ye) {
      return It(this, null, function* () {
        if (c.value <= 1) return;
        de();
        const { loop: _, onChange: Y } = e, re = l.value;
        if (l.value = ce(re - 1), ye?.event !== !1 && C(Y, l.value), yield ge(), re === 0 && _) {
          B(c.value - 1).setTranslate(-a.value), o.value = r.value;
          return;
        }
        re !== 0 && (o.value = l.value * -r.value);
      });
    }
    function an(ye, _) {
      if (c.value <= 1 || ye === l.value) return;
      ye = ye < 0 ? 0 : ye, ye = ye >= c.value ? c.value : ye;
      const Y = ye > l.value ? Xe : en, re = Math.abs(ye - l.value);
      Array.from({ length: re }).forEach((we, ze) => {
        Y({ event: ze === re - 1 ? _?.event : !1 });
      });
    }
    return {
      length: c,
      index: l,
      swipeEl: n,
      trackSize: a,
      trackTranslate: o,
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
      to: an,
      resize: nn,
      toNumber: Z,
      handleHovering: oe,
      getNavigationAnimation: Ee
    };
  }
});
fh.render = UO;
var Yi = fh;
ue(Yi);
fe(Yi, dd);
var ON = Yi, Pa = Yi;
function jO() {
  const { bindParent: e, index: n, parentProvider: r } = Dn(Hp);
  return ar(!!e, "SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var { name: YO, n: WO } = ae("swipe-item"), KO = ["aria-hidden"];
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
    const e = O(0), n = O(!1), { swipe: r, bindSwipe: t, index: a } = jO(), { size: o, currentIndex: i, vertical: l } = r;
    t({
      index: a,
      isFocusing: S(() => n.value),
      setTranslate: s
    });
    function s(u) {
      e.value = u;
    }
    return {
      isFocusing: n,
      size: o,
      index: a,
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
var zN = cd, Oa = cd, XO = Object.defineProperty, xf = Object.getOwnPropertySymbols, GO = Object.prototype.hasOwnProperty, ZO = Object.prototype.propertyIsEnumerable, _f = (e, n, r) => n in e ? XO(e, n, {
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
])), { name: JO, n: nv, classes: QO } = ae("image-preview"), Kl = 12, rv = 200, xO = 350, tv = 200, _O = 500, eo = 1, ez = ["onTouchstart"], nz = ["src", "alt"];
function rz(e, n) {
  const r = x("var-swipe-item"), t = x("var-swipe"), a = x("var-icon"), o = x("var-button"), i = x("var-popup");
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
        default: se(() => [(b(!0), k(Be, null, Ye(e.images, (l, s) => (b(), ke(r, {
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
      F(e.$slots, "close-icon", {}, () => [e.closeable ? (b(), ke(o, {
        key: 0,
        class: p(e.n("close-icon")),
        text: "",
        round: "",
        "var-image-preview-cover": "",
        onClick: e.close
      }, {
        default: se(() => [U(a, {
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
    VarSwipe: Pa,
    VarSwipeItem: Oa,
    VarPopup: st,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: ph,
  setup(e) {
    const n = yn(e, "show"), r = O(1), t = O(0), a = O(0), o = O(), i = O(), l = O(!0), s = O(null), { moveX: u, moveY: d, distance: c, startTime: f, startTouch: v, moveTouch: g, endTouch: h } = Jt(), m = S(() => {
      const { imagePreventDefault: Q, show: ne } = e;
      return ne && Q;
    });
    let w = null, $ = null, y = !1;
    const T = {
      start: null,
      prev: null
    };
    xe(() => document, "contextmenu", K);
    function z(Q) {
      r.value = Z(Q), l.value = !1, T.prev = null, window.setTimeout(() => {
        o.value = "linear", i.value = "0s";
      }, tv);
    }
    function P() {
      r.value = 1, t.value = 0, a.value = 0, l.value = !0, T.prev = null, o.value = void 0, i.value = void 0;
    }
    function N(Q) {
      return T.prev ? c.value <= Kl && performance.now() - f.value <= rv && T.prev === Q : !1;
    }
    function H(Q) {
      return !Q || !T.start || !T.prev ? !1 : c.value <= Kl && performance.now() - f.value < xO && (Q === T.start || Q.parentNode === T.start);
    }
    function M() {
      h(), window.clearTimeout($), y = !1, T.start = null;
    }
    function R(Q) {
      if (h(), window.clearTimeout($), y) {
        y = !1;
        return;
      }
      const ne = H(Q.target);
      w = window.setTimeout(() => {
        ne && j(), T.start = null;
      }, rv);
    }
    function E(Q, ne) {
      window.clearTimeout(w), window.clearTimeout($);
      const pe = Q.currentTarget;
      if (T.start = pe, $ = window.setTimeout(() => {
        y = !0, C(e.onLongPress, ne);
      }, _O), N(pe)) {
        r.value > eo ? P() : z(e.zoom);
        return;
      }
      v(Q), T.prev = pe;
    }
    function D(Q) {
      const { offsetWidth: ne, offsetHeight: pe } = Q, { naturalWidth: $e, naturalHeight: W } = Q.querySelector(`.${nv("image")}`);
      return {
        width: ne,
        height: pe,
        imageRadio: W / $e,
        rootRadio: pe / ne,
        zoom: Z(e.zoom)
      };
    }
    function A(Q) {
      const { zoom: ne, imageRadio: pe, rootRadio: $e, width: W, height: oe } = D(Q);
      if (!pe) return 0;
      const Ee = pe > $e ? oe / pe : W;
      return Math.max(0, (ne * Ee - W) / 2) / ne;
    }
    function I(Q) {
      const { zoom: ne, imageRadio: pe, rootRadio: $e, width: W, height: oe } = D(Q);
      if (!pe) return 0;
      const Ee = pe > $e ? oe : W * pe;
      return Math.max(0, (ne * Ee - oe) / 2) / ne;
    }
    function B(Q) {
      if (!T.prev) return;
      g(Q);
      const ne = Q.currentTarget;
      if (c.value > Kl && window.clearTimeout($), r.value > eo) {
        const pe = A(ne), $e = I(ne);
        t.value = hn(t.value + u.value, -pe, pe), a.value = hn(a.value + d.value, -$e, $e);
      }
      T.prev = ne;
    }
    function j() {
      if (r.value > eo) {
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
      Q <= eo ? P() : z(Q);
    }
    return {
      swipeRef: s,
      isPreventDefault: m,
      show: n,
      scale: r,
      translateX: t,
      translateY: a,
      canSwipe: l,
      transitionTimingFunction: o,
      transitionDuration: i,
      n: nv,
      classes: QO,
      toNumber: Z,
      handleTouchstart: E,
      handleTouchmove: B,
      handleTouchend: R,
      handleTouchcancel: M,
      close: j,
      prev: G,
      next: ce,
      to: ge,
      zoom: de
    };
  }
});
mh.render = rz;
var Ya = mh, tz = Object.defineProperty, az = Object.defineProperties, oz = Object.getOwnPropertyDescriptors, av = Object.getOwnPropertySymbols, iz = Object.prototype.hasOwnProperty, lz = Object.prototype.propertyIsEnumerable, ov = (e, n, r) => n in e ? tz(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, no = (e, n) => {
  for (var r in n || (n = {})) iz.call(n, r) && ov(e, r, n[r]);
  if (av)
    for (var r of av(n)) lz.call(n, r) && ov(e, r, n[r]);
  return e;
}, iv = (e, n) => az(e, oz(n)), tt, va = {};
function sz(e = {}) {
  return Pn(e) ? iv(no({}, va), { images: [e] }) : Ke(e) ? iv(no({}, va), { images: e }) : no(no({}, va), e);
}
function ht(e) {
  if (!Er()) return;
  ht.close();
  const n = sz(e), r = $n(n);
  r.teleport = "body", tt = r;
  const { unmountInstance: t } = Qt(Ya, r, {
    onClose: () => C(r.onClose),
    onClosed: () => {
      C(r.onClosed), t(), tt === r && (tt = null);
    },
    onRouteChange: () => {
      t(), tt === r && (tt = null);
    },
    "onUpdate:show": (a) => {
      r.show = a;
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
  va = e;
};
ht.resetDefaultOptions = () => {
  va = {};
};
ht.Component = Ya;
ue(Ya);
ue(Ya, ht);
fe(ht, ph);
var TN = Ya, za = ht, pa = {
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
}, lv = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: uz, n: dz, classes: cz } = ae("sticky");
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
  props: pa,
  setup(e) {
    const n = O(null), r = O(null), t = O(!1), a = O("0px"), o = O("0px"), i = O("auto"), l = O("auto"), s = O("auto"), u = O("auto"), d = S(() => !e.disabled && e.cssMode), c = S(() => !e.disabled && !e.cssMode && t.value), f = S(() => fn(e.offsetTop));
    let v;
    me(() => e.disabled, $), On(() => lv(null, null, function* () {
      yield Gn(), h(), m();
    })), Zt(w), wr($), xe(() => window, "scroll", m);
    function g() {
      const { cssMode: y, disabled: T } = e;
      if (T) return;
      let z = 0;
      if (v && v !== window) {
        const { top: E } = kn(v);
        z = E;
      }
      const P = r.value, N = n.value, { top: H, left: M } = kn(N), R = H - z;
      return R <= f.value ? (y || (i.value = `${N.offsetWidth}px`, l.value = `${N.offsetHeight}px`, a.value = `${z + f.value}px`, o.value = `${M}px`, s.value = `${P.offsetWidth}px`, u.value = `${P.offsetHeight}px`, t.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (t.value = !1, {
        offsetTop: R,
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
      fixedTop: a,
      fixedLeft: o,
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
fe(Wi, pa);
var EN = Wi, Ta = Wi, hh = { index: [Number, String] }, bh = /* @__PURE__ */ Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function vz() {
  const { bindChildren: e, length: n, childProviders: r } = Bn(bh);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function pz() {
  const { parentProvider: e, index: n, bindParent: r } = Dn(bh);
  return ar(!!r, "IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var { name: mz, n: gz, classes: hz } = ae("index-anchor");
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
  components: { VarSticky: Ta },
  inheritAttrs: !1,
  props: hh,
  setup(e) {
    const n = O(!1), r = S(() => e.index), t = O(null), { index: a, indexBar: o, bindIndexBar: i } = pz(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: d, zIndex: c } = o;
    i({
      index: a,
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
var DN = Ki, Gs = Ki, wh = {
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
}, sv = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: yz, n: wz, classes: kz } = ae("index-bar"), $z = ["onClick"];
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
  }, [(b(!0), k(Be, null, Ye(e.anchorNameList, (r) => (b(), k("li", {
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
    const n = O(""), r = O(null), t = O([]), a = O(), o = S(() => e.sticky), i = S(() => e.stickyCssMode), l = S(() => fn(e.stickyOffsetTop)), s = S(() => e.zIndex), { length: u, indexAnchors: d, bindIndexAnchors: c } = vz();
    let f = null, v = !1;
    const g = {
      active: a,
      sticky: o,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    me(() => u.value, () => sv(null, null, function* () {
      yield Gn(), t.value = d.filter(({ name: P }) => P.value != null).map(({ name: P }) => P.value);
    })), On(y), Pt(T), Ot(() => {
      v = !0, T();
    }), ft(() => {
      !v || a.value === void 0 || ($({
        anchorName: a.value,
        options: { event: !1 }
      }), v = !1);
    }), c(g);
    function h(P, N) {
      const H = Sn(P) ? P.name.value : P;
      H === a.value || H === void 0 || (a.value = H, N?.event !== !1 && C(e.onChange, H));
    }
    function m() {
      const { top: P } = kn(f), { top: N } = kn(r.value);
      return kt(f) - P + N;
    }
    function w() {
      const P = kt(f), N = f === window ? document.body.scrollHeight : f.scrollHeight, H = m();
      d.forEach((M, R) => {
        const E = M.getOffsetTop(), D = P - E + l.value - H, A = R === d.length - 1 ? N : d[R + 1].getOffsetTop() - M.getOffsetTop();
        M.setDisabled(!0), D >= 0 && D < A && n.value === "" && (M.setDisabled(!1), h(M));
      });
    }
    function $(P) {
      return sv(this, arguments, function* ({ anchorName: N, manualCall: H = !1, options: M }) {
        if (H && C(e.onClick, N), N === a.value && !v) return;
        const R = d.find(({ name: I }) => N === I.value);
        if (!R) return;
        const E = m(), D = R.getOffsetTop() - l.value + E, A = Lu(f);
        n.value = N, h(N, M), yield ga(f, {
          left: A,
          top: D,
          animation: mm,
          duration: Z(e.duration)
        }), yield Gn(), n.value = "";
      });
    }
    function y() {
      f = ut(r.value), f.addEventListener("scroll", w);
    }
    function T() {
      f && f.removeEventListener("scroll", w);
    }
    function z(P, N) {
      Lt(() => $({
        anchorName: P,
        options: N
      }));
    }
    return {
      barEl: r,
      active: a,
      zIndex: s,
      anchorNameList: t,
      n: wz,
      classes: kz,
      toNumber: Z,
      scrollTo: z,
      anchorClick: $
    };
  }
});
kh.render = Sz;
var qi = kh;
ue(qi);
fe(qi, wh);
var BN = qi, Zs = qi, $h = {
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
}, { name: Cz, n: Pz, classes: Oz } = ae("link");
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
      const { disabled: o, href: i, to: l } = e;
      return o ? "span" : i ? "a" : l ? "router-link" : "a";
    }), t = S(() => {
      const { disabled: o, href: i, target: l, to: s, replace: u, rel: d } = e;
      return o ? {} : i ? {
        href: i,
        target: l,
        rel: d
      } : s ? {
        to: s,
        target: l,
        replace: u
      } : {};
    });
    function a(o) {
      e.disabled || C(e.onClick, o);
    }
    return {
      tag: r,
      linkProps: t,
      isFocusing: n,
      inMobile: po,
      n: Pz,
      classes: Oz,
      handleClick: a,
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
  const { bindChildren: e, childProviders: n, length: r } = Bn(Ph);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
var Oh = /* @__PURE__ */ Symbol("TAB_ITEM_BIND_LIST_KEY");
function Ez() {
  const { parentProvider: e, bindParent: n, index: r } = Dn(Ph);
  return ar(!!n, "TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
function Dz() {
  const { childProviders: e, bindChildren: n, length: r } = Bn(Oh);
  return {
    length: r,
    lists: e,
    bindLists: n
  };
}
function Bz() {
  const { parentProvider: e, bindParent: n, index: r } = Dn(Oh);
  return {
    index: r,
    tabItem: e,
    bindTabItem: n
  };
}
var Iz = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: Mz, n: Az, classes: Nz } = ae("list");
function Rz(e, n) {
  const r = x("var-loading"), t = _e("ripple");
  return b(), k("div", {
    ref: "listEl",
    class: p(e.classes(e.n(), e.n("$--box")))
  }, [
    F(e.$slots, "default"),
    e.loading ? F(e.$slots, "loading", { key: 0 }, () => {
      var a;
      return [L("div", { class: p(e.n("loading")) }, [L("div", { class: p(e.n("loading-text")) }, ve((a = e.loadingText) != null ? a : (e.pt ? e.pt : e.t)("listLoadingText")), 3), U(r, {
        size: "mini",
        radius: 10
      })], 2)];
    }) : X("v-if", !0),
    e.finished ? F(e.$slots, "finished", { key: 1 }, () => {
      var a;
      return [L("div", { class: p(e.n("finished")) }, ve((a = e.finishedText) != null ? a : (e.pt ? e.pt : e.t)("listFinishedText")), 3)];
    }) : X("v-if", !0),
    e.error ? F(e.$slots, "error", { key: 2 }, () => {
      var a;
      return [We((b(), k("div", {
        class: p(e.n("error")),
        onClick: n[0] || (n[0] = (...o) => e.load && e.load(...o))
      }, [Le(ve((a = e.errorText) != null ? a : (e.pt ? e.pt : e.t)("listErrorText")), 1)], 2)), [[t]])];
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
    const n = O(null), r = O(null), { tabItem: t, bindTabItem: a } = Bz(), { t: o } = kr();
    let i;
    C(a, {}), t && me(() => t.current.value, d), me(() => [
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
      pt: o,
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
}, { name: Lz, classes: Fz, n: uv } = ae("loading-bar"), Hz = te({
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
}), Th = 200, Eh, Dh, Bh, Ih, Zi, dv, Mh = {}, Cn = $n({
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
  window.clearTimeout(Eh), window.clearTimeout(Zi), window.clearTimeout(Bh), window.clearTimeout(Dh), window.clearTimeout(Ih);
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
  Bh = window.setTimeout(Nh, (e = Cn.finishDelay) != null ? e : 0);
}, Kz = () => {
  vd(), Cn.error = !0, Cn.value === 100 && (Cn.value = 0, Cn.transitionDuration = 0), Ah(), Zi = window.setTimeout(() => {
    Cn.opacity = 1;
  }, Th), fd(), Dh = window.setTimeout(Nh, 300);
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
}, xz = (e, n) => Xz(e, Gz(n)), { name: _z, n: e6 } = ae("locale-provider"), Ji = te({
  name: _z,
  props: Vh,
  setup(e, { slots: n }) {
    const r = S(() => {
      var a;
      return Object.entries((a = e.messages) != null ? a : {}).reduce((o, [i, l]) => (o[i] = xz(Qz({}, l), { lang: i }), o), {});
    });
    uy({ t });
    function t(a) {
      if (ma(r.value, e.locale) && ma(r.value[e.locale], a)) return r.value[e.locale][a];
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
  const { length: e, childProviders: n, bindChildren: r } = Bn(Fh);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function r6() {
  const { index: e, parentProvider: n, bindParent: r } = Dn(Fh);
  return ar(!!r, "Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var { name: t6, n: a6, classes: o6 } = ae("option"), i6 = ["tabindex"];
function l6(e, n) {
  const r = x("var-checkbox"), t = x("maybe-v-node"), a = x("var-hover-overlay"), o = _e("ripple"), i = _e("hover");
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
    U(a, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 46, i6)), [
    [yr, e.visible],
    [o, { disabled: e.disabled || !e.ripple }],
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
    const n = O(), r = O(!1), t = O(!1), a = S(() => {
      var B;
      return (B = e.option) != null ? B : {
        label: e.label,
        value: e.value,
        disabled: e.disabled
      };
    }), o = S(() => t.value), i = S(() => e.value), l = S(() => e.disabled), s = S(() => e.ripple), { select: u, bindSelect: d } = r6(), { pattern: c, showMenu: f, filterable: v, multiple: g, focusColor: h, onSelect: m, computeLabel: w, filter: $ } = u, { hovering: y, handleHovering: T } = ur(), z = S(() => {
      var B;
      return Yn(e.label) ? e.label((B = e.option) != null ? B : {
        label: e.label,
        value: e.value,
        disabled: e.disabled
      }, t.value) : e.label;
    }), P = O(!0), N = S(() => !v.value || !c.value ? !0 : $(c.value, a.value)), H = S(() => f.value ? N.value : P.value), M = {
      label: z,
      value: i,
      disabled: l,
      ripple: s,
      selected: o,
      sync: I
    };
    me([() => e.label, () => e.value], w), me(() => [f.value, N.value], () => {
      f.value && (P.value = N.value);
    }, { immediate: !0 }), d(M), xe(() => window, "keydown", E), xe(() => window, "keyup", D);
    function R() {
      e.disabled || A();
    }
    function E(B) {
      r.value && ((B.key === " " || B.key === "Enter") && Ze(B), B.key === "Enter" && n.value.click());
    }
    function D(B) {
      r.value && B.key === " " && (Ze(B), n.value.click());
    }
    function A() {
      g.value && (t.value = !t.value), m(M);
    }
    function I(B) {
      t.value = B;
    }
    return {
      root: n,
      optionSelected: t,
      visible: H,
      multiple: g,
      focusColor: h,
      hovering: y,
      isFocusing: r,
      labelVNode: z,
      n: a6,
      classes: o6,
      handleHovering: T,
      handleClick: R,
      handleSelect: A
    };
  }
});
Hh.render = l6;
var Qi = Hh;
ue(Qi);
fe(Qi, Lh);
var RN = Qi, Io = Qi, s6 = Object.defineProperty, u6 = Object.defineProperties, d6 = Object.getOwnPropertyDescriptors, vv = Object.getOwnPropertySymbols, c6 = Object.prototype.hasOwnProperty, f6 = Object.prototype.propertyIsEnumerable, pv = (e, n, r) => n in e ? s6(e, n, {
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
}, Fe(Na, [
  "textColor",
  "focusColor",
  "blurColor"
])), { variant: {
  type: String,
  default: "outlined"
} }), m6 = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: g6, n: ql, classes: h6 } = ae("otp-input"), b6 = ["data-index"];
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
    onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a)),
    onKeydown: n[2] || (n[2] = (...a) => e.handleKeydown && e.handleKeydown(...a)),
    onPaste: n[3] || (n[3] = (...a) => e.handlePaste && e.handlePaste(...a))
  }, [L("div", { class: p(e.n("cells")) }, [(b(!0), k(Be, null, Ye(e.cellIndexes, (a, o) => (b(), k(Be, { key: o }, [L("div", {
    class: p(e.n("cell")),
    "data-index": o
  }, [U(r, {
    ref_for: !0,
    ref: (i) => e.setInputRef(i, o),
    "model-value": e.getDisplayChar(o),
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
    "is-force-focusing-effect": e.activeIndex === o,
    "is-force-error-effect": !!e.errorMessage,
    "is-show-form-details": !1,
    onFocus: () => e.handleFocus(o),
    onBlur: n[0] || (n[0] = (i) => e.handleBlur(i)),
    onInput: (i) => e.handleCellInput(o, i)
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
  ])], 10, b6), e.shouldRenderSeparator(o) ? (b(), k("div", {
    key: 0,
    class: p(e.n("separator"))
  }, [F(e.$slots, "separator", { index: o })], 2)) : X("v-if", !0)], 64))), 128))], 2), U(t, {
    class: p(e.n("details")),
    "var-otp-input-cover": "",
    "error-message": e.errorMessage
  }, null, 8, ["class", "error-message"])], 38);
}
var jh = te({
  name: g6,
  components: {
    VarFormDetails: Hn,
    VarInput: Ra
  },
  props: Uh,
  setup(e) {
    const n = O0(), r = O(null), t = O([]), a = O(-1), { errorMessage: o, validateWithTrigger: i, validate: l, resetValidation: s } = xn(), { bindForm: u, form: d } = Wn(), c = S(() => Z(e.length)), f = S(() => {
      var _;
      return (_ = H(e.maskSymbol)[0]) != null ? _ : "•";
    }), v = S(() => M(e.modelValue)), g = S(() => Array.from({ length: c.value })), h = S(() => Te(e.gutter)), m = S(() => Te(e.cellHeight)), w = S(() => Te(e.cellMaxWidth)), $ = S(() => e.type === "digit" ? "numeric" : void 0), y = S(() => e.type === "digit" ? "tel" : "text"), T = S(() => {
      var _;
      return (_ = d?.disabled.value) != null ? _ : !1;
    }), z = S(() => {
      var _;
      return (_ = d?.readonly.value) != null ? _ : !1;
    });
    let P = null, N = !1;
    u?.({
      validate: de,
      resetValidation: s,
      reset: Q
    }), On(() => {
      e.autofocus && ce();
    });
    function H(_) {
      return Array.from(_);
    }
    function M(_) {
      return R(_).slice(0, c.value);
    }
    function R(_) {
      switch (e.type) {
        case "digit":
          return _.replace(/\D+/g, "");
        case "alphanumeric":
          return H(_).filter((Y) => /[A-Za-z0-9]/.test(Y)).join("");
        default:
          return _;
      }
    }
    function E() {
      return H(v.value);
    }
    function D(_) {
      var Y;
      const re = (Y = E()[_]) != null ? Y : "";
      return re ? e.mask ? f.value : re : "";
    }
    function A(_, Y) {
      t.value[Y] = _ && "$" in _ ? _ : null;
    }
    function I(_) {
      if (_ >= c.value - 1 || !n.separator) return !1;
      const Y = n.separator({ index: _ });
      return Vo(Y).length > 0;
    }
    function B(_, Y = v.value) {
      Ne(() => {
        i(e.validateTrigger, _, e.rules, Y);
      });
    }
    function j(_) {
      H(_).length === c.value && (C(e.onComplete, _), B("onComplete", _));
    }
    function K(_, Y) {
      if (_ === v.value) {
        ne(Y);
        return;
      }
      C(e["onUpdate:modelValue"], _), C(e.onInput, _), B("onInput", _), j(_);
    }
    function G(_) {
      return m6(this, null, function* () {
        var Y, re, we, ze, Ge;
        const rn = hn(_, 0, c.value - 1);
        (re = (Y = t.value[rn]) == null ? void 0 : Y.focus) == null || re.call(Y), yield qr(), document.activeElement === ((we = t.value[rn]) == null ? void 0 : we.el) && ((Ge = (ze = t.value[rn]) == null ? void 0 : ze.select) == null || Ge.call(ze));
      });
    }
    function ce(_) {
      G(_ ?? Math.min(E().length, c.value - 1));
    }
    function ge() {
      t.value.forEach((_) => {
        var Y;
        (Y = _?.blur) == null || Y.call(_);
      });
    }
    function de() {
      return l(e.rules, v.value);
    }
    function Q() {
      v.value !== "" && C(e["onUpdate:modelValue"], ""), s();
    }
    function ne(_) {
      var Y;
      const re = (Y = t.value[_]) == null ? void 0 : Y.el;
      re && (re.value = D(_));
    }
    function pe() {
      g.value.forEach((_, Y) => {
        ne(Y);
      });
    }
    function $e(_) {
      P = _, !N && (N = !0, Ne(() => {
        N = !1, P != null && (a.value = P, G(P), P = null);
      }));
    }
    function W(_, Y) {
      const re = E(), we = hn(_, 0, re.length), ze = [...re], Ge = Y.slice(0, c.value - we);
      Ge.forEach((rn, mn) => {
        ze[we + mn] = rn;
      }), K(ze.join("").slice(0, c.value), we), $e(hn(we + Ge.length, 0, c.value - 1));
    }
    function oe(_, Y = hn(_, 0, c.value - 1)) {
      const re = E();
      re.splice(_, 1), K(re.join(""), _), $e(Y);
    }
    function Ee(_) {
      const Y = E();
      if (!Y[_]) {
        if (_ <= 0) {
          pe();
          return;
        }
        oe(_ - 1, _ - 1);
        return;
      }
      oe(_, _ !== Y.length - 1 && _ > 0 ? _ - 1 : hn(_, 0, c.value - 1));
    }
    function Ue(_) {
      if (e.disabled || T.value) return;
      const Y = _.target, re = Y?.closest(`.${ql("cell")}`), we = re?.dataset.index;
      C(e.onClick, _), B("onClick"), we != null && G(Number(we));
    }
    function nn(_) {
      a.value = _, G(_);
    }
    function Xe(_) {
      var Y;
      const re = _.relatedTarget;
      (!re || !((Y = r.value) != null && Y.contains(re))) && (a.value = -1);
    }
    function en(_, Y) {
      const re = H(R(Y)), we = E(), ze = _ > we.length;
      if (re.length === 0) {
        if (ze) {
          $e(we.length), ne(_);
          return;
        }
        Y === "" ? oe(_) : (ne(_), $e(_));
        return;
      }
      if (ze) {
        W(we.length, re);
        return;
      }
      W(_, re);
    }
    function an(_) {
      var Y, re;
      if (!e.allowPaste || T.value || z.value || e.disabled || e.readonly) {
        _.preventDefault();
        return;
      }
      const we = (re = (Y = _.clipboardData) == null ? void 0 : Y.getData("text")) != null ? re : "";
      if (!we) return;
      _.preventDefault();
      const ze = R(e.pasteTransform ? e.pasteTransform(we) : we);
      if (C(e.onPaste, ze, _), B("onPaste", ze), !ze) {
        pe();
        return;
      }
      W(0, H(ze));
    }
    function ye(_) {
      if (T.value || z.value || e.disabled || e.readonly) return;
      const Y = _.target, re = Y?.closest(`.${ql("cell")}`), we = re?.dataset.index;
      if (we == null) return;
      const ze = Number(we);
      if (_.key === "Backspace" && E().length > 0) {
        _.preventDefault(), Ee(ze);
        return;
      }
      if (_.key === "ArrowLeft" && ze > 0) {
        _.preventDefault(), G(ze - 1);
        return;
      }
      if (_.key === "ArrowRight" && ze < c.value - 1) {
        _.preventDefault(), G(ze + 1);
        return;
      }
    }
    return {
      rootEl: r,
      activeIndex: a,
      errorMessage: o,
      formDisabled: T,
      formReadonly: z,
      cellIndexes: g,
      gutterStyle: h,
      cellHeightStyle: m,
      cellMaxWidthStyle: w,
      resolvedInputmode: $,
      nativeInputType: y,
      align: e.align,
      n: ql,
      classes: h6,
      setInputRef: A,
      getDisplayChar: D,
      shouldRenderSeparator: I,
      handleClick: Ue,
      handleFocus: nn,
      handleBlur: Xe,
      handleCellInput: en,
      handleKeydown: ye,
      handlePaste: an,
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
}, { name: w6, n: ro } = ae("overlay"), _i = te({
  name: w6,
  inheritAttrs: !1,
  props: Yh,
  setup(e, { slots: n, attrs: r }) {
    const { zIndex: t } = Ma(() => e.show, 3), { onStackTop: a } = Gu(() => e.show, t), { disabled: o } = Tt();
    Ia(() => e.show, () => e.lockScroll), xe(() => window, "keydown", i);
    function i(d) {
      !a() || d.key !== "Escape" || !e.show || (C(e.onKeyEscape), e.closeOnKeyEscape && (Ze(d), C(e["onUpdate:show"], !1)));
    }
    function l() {
      C(e.onClick), C(e["onUpdate:show"], !1);
    }
    function s() {
      return U("div", qe({
        class: ro(),
        style: { zIndex: t.value - 2 }
      }, r), [U("div", {
        class: ro("overlay"),
        style: { zIndex: t.value - 1 },
        onClick: l
      }, null), U("div", {
        class: ro("content"),
        style: { zIndex: t.value }
      }, [C(n.default)])]);
    }
    function u() {
      return U(bn, { name: ro("--fade") }, { default: () => [e.show && s()] });
    }
    return () => {
      const { teleport: d } = e;
      return d ? U(Hr, {
        to: d,
        disabled: o.value
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
}, { name: k6, n: $6, classes: S6 } = ae("paper");
function C6(e, n) {
  const r = x("var-hover-overlay"), t = _e("ripple"), a = _e("hover");
  return We((b(), k("div", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.variant === "standard", e.formatElevation(e.elevation, 2)], [!e.disabled && (e.onClick || !e.normalizedHoverable.disabled), e.n("--cursor")], [e.disabled, e.n("--disabled")], [!e.disabled && e.normalizedActive.enabled, e.n("--active")], [e.round, e.n("--round")], [e.surfaceLow, e.n("--surface-low")], [e.variant === "outlined", e.n("--outlined")], [e.variant === "filled", e.n("--filled")], [e.inline, e.n("$--inline-flex")])),
    style: J({
      width: e.toSizeUnit(e.width),
      height: e.toSizeUnit(e.height),
      "border-radius": e.toSizeUnit(e.radius),
      "--paper-active-color": e.normalizedActive.color
    }),
    onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
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
    a,
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
    const n = S(() => e.surface === "low" && e.variant !== "filled"), { hovering: r, handleHovering: t } = ur(), a = S(() => l(e.ripple)), o = S(() => s(e.hoverable)), i = S(() => u(e.active));
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
      normalizedRipple: a,
      normalizedHoverable: o,
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
])), { name: E6, n: D6, classes: B6 } = ae("picker"), hv = 300, I6 = 15, bv = 200, M6 = 1e3, yv = 0, A6 = [
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
      (b(!0), k(Be, null, Ye(e.scrollColumns, (t) => (b(), k("div", {
        key: t.id,
        class: p(e.n("column")),
        onTouchstartPassive: (a) => e.handleTouchstart(a, t),
        onTouchmove: Nn((a) => e.handleTouchmove(a, t), ["prevent"]),
        onTouchend: (a) => e.handleTouchend(t)
      }, [L("div", {
        ref_for: !0,
        ref: (a) => e.setScrollEl(a, t),
        class: p(e.n("scroller")),
        style: J({
          transform: `translateY(${t.translate}px)`,
          transitionDuration: `${t.duration}ms`,
          transitionProperty: t.duration ? "transform" : "none"
        }),
        onTransitionend: (a) => e.handleTransitionend(t)
      }, [(b(!0), k(Be, null, Ye(t.column, (a, o) => (b(), k("div", {
        key: e.getValue(a),
        class: p(e.classes(e.n("option"), a.className)),
        style: J({ height: `${e.optionHeight}px` }),
        onClick: (i) => e.handleClick(t, o)
      }, [L("div", { class: p(e.classes(e.n("text"), a.textClassName)) }, ve(a[e.getOptionKey("text")]), 3)], 14, R6))), 128))], 46, N6)], 42, A6))), 128)),
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
    const n = yn(e, "modelValue"), r = O([]), t = S(() => Z(e.columnsCount)), a = S(() => fn(e.optionHeight)), o = S(() => fn(e.optionCount)), i = S(() => o.value * a.value / 2 - a.value / 2), l = S(() => o.value * a.value), { prevY: s, moveY: u, dragging: d, startTouch: c, moveTouch: f, endTouch: v } = Jt(), { t: g } = kr();
    let h = [];
    N(), me(() => e.columns, N, { deep: !0 }), me(() => n.value, N);
    function m(W) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[W];
    }
    function w(W) {
      var oe;
      return (oe = W[m("value")]) != null ? oe : W[m("text")];
    }
    function $(W) {
      h = [...W];
    }
    function y(W) {
      return (e.columnsCount != null ? W.slice(0, t.value) : W).map((oe, Ee) => {
        const Ue = {
          id: yv++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: oe,
          scrollEl: null,
          scrolling: !1
        }, nn = n.value[Ee], Xe = Ue.column.findIndex((en) => nn === w(en));
        return Ue.index = Xe === -1 ? 0 : Xe, I(Ue), Ue;
      });
    }
    function T(W) {
      const oe = [];
      return z(oe, W), oe;
    }
    function z(W, oe, Ee = !0, Ue = 1) {
      var nn;
      if (oe.length && (e.columnsCount == null || Ue <= t.value)) {
        const Xe = {
          id: yv++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: oe,
          scrollEl: null,
          scrolling: !1
        };
        if (W.push(Xe), Ee) {
          const en = n.value[W.length - 1], an = oe.findIndex((ye) => en === w(ye));
          Xe.index = an === -1 ? 0 : an;
        }
        I(Xe), z(W, (nn = Xe.column[Xe.index][m("children")]) != null ? nn : [], Ee, Ue + 1);
      }
    }
    function P(W) {
      var oe;
      r.value.splice(r.value.indexOf(W) + 1), z(r.value, (oe = W.column[W.index][m("children")]) != null ? oe : [], !1, r.value.length + 1);
    }
    function N() {
      r.value = e.cascade ? T(e.columns) : y(e.columns);
      const { indexes: W } = A();
      $(W);
    }
    function H(W, oe) {
      oe.scrollEl = W;
    }
    function M(W) {
      C(e["onUpdate:show"], W);
    }
    function R(W) {
      const oe = i.value - W.column.length * a.value, Ee = a.value + i.value;
      W.translate = hn(W.translate, oe, Ee);
    }
    function E(W, oe) {
      const Ee = Math.round((i.value - oe) / a.value);
      return T0(Ee, W.column);
    }
    function D(W) {
      return W.translate = i.value - W.index * a.value, W.translate;
    }
    function A() {
      const W = [], oe = [], Ee = [];
      return r.value.forEach(({ column: Ue, index: nn }) => {
        const Xe = Ue[nn];
        W.push(w(Xe)), oe.push(nn), Ee.push(Xe);
      }), {
        values: W,
        indexes: oe,
        options: Ee
      };
    }
    function I(W, oe = 0) {
      D(W), W.duration = oe;
    }
    function B(W, oe, Ee) {
      W.translate += Math.abs(oe / Ee) / 3e-3 * (oe < 0 ? -1 : 1);
    }
    function j(W, oe) {
      d.value || (W.index = oe, I(W, bv));
    }
    function K(W, oe) {
      oe.touching = !0, oe.translate = Rl(oe.scrollEl), c(W);
    }
    function G(W, oe) {
      if (!oe.touching) return;
      f(W), oe.scrolling = !1, oe.duration = 0, oe.prevY = s.value, oe.translate += u.value, R(oe);
      const Ee = performance.now();
      Ee - oe.momentumTime > hv && (oe.momentumTime = Ee, oe.momentumPrevY = oe.translate);
    }
    function ce(W) {
      v(), W.touching = !1, W.prevY = 0;
      const oe = W.translate - W.momentumPrevY, Ee = performance.now() - W.momentumTime, Ue = Math.abs(oe) >= I6 && Ee <= hv, nn = W.translate;
      Ue && B(W, oe, Ee), W.index = E(W, W.translate), I(W, Ue ? M6 : bv), W.scrolling = W.translate !== nn, W.scrolling || Q(W);
    }
    function ge(W) {
      W.scrolling = !1, Q(W);
    }
    function de() {
      const { indexes: W } = A();
      return W.every((oe, Ee) => oe === h[Ee]);
    }
    function Q(W) {
      const { onChange: oe, cascade: Ee } = e;
      if (de()) return;
      Ee && P(W);
      const Ue = r.value.some((ye) => ye.scrolling), nn = r.value.some((ye) => ye.touching);
      if (Ue || nn) return;
      const { values: Xe, indexes: en, options: an } = A();
      $(en), C(oe, Xe, en, an), n.value = Xe;
    }
    function ne() {
      if (e.cascade) {
        const W = r.value.find((oe) => oe.scrolling);
        W && (W.index = E(W, Rl(W.scrollEl)), W.scrolling = !1, I(W), P(W));
      } else r.value.forEach((W) => {
        W.index = E(W, Rl(W.scrollEl)), I(W);
      });
    }
    function pe() {
      ne();
      const { values: W, indexes: oe, options: Ee } = A();
      $(oe), C(e.onConfirm, W, oe, Ee);
    }
    function $e() {
      ne();
      const { values: W, indexes: oe, options: Ee } = A();
      $(oe), C(e.onCancel, W, oe, Ee);
    }
    return {
      optionHeight: a,
      optionCount: o,
      scrollColumns: r,
      columnHeight: l,
      center: i,
      Transition: bn,
      pt: g,
      t: gn,
      n: D6,
      classes: B6,
      setScrollEl: H,
      getOptionKey: m,
      getValue: w,
      handlePopupUpdateShow: M,
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
var Wa = Xh, Rt;
function ea(e) {
  return new Promise((n) => {
    ea.close();
    const r = Ke(e) ? { columns: e } : e, t = $n(r);
    t.dynamic = !0, t.teleport = "body", Rt = t;
    function a() {
      Rt === t && (Rt = null);
    }
    const { unmountInstance: o } = Qt(Wa, t, {
      onConfirm: (i, l, s) => {
        C(t.onConfirm, i, l, s), n({
          state: "confirm",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, a();
      },
      onCancel: (i, l, s) => {
        C(t.onCancel, i, l, s), n({
          state: "cancel",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, a();
      },
      onClose: () => {
        C(t.onClose), n({ state: "close" }), a();
      },
      onClosed: () => {
        C(t.onClosed), o(), a();
      },
      onRouteChange: () => {
        o(), a();
      },
      "onUpdate:show": (i) => {
        t.show = i;
      }
    });
    t.show = !0;
  });
}
ea.close = function() {
  if (Rt == null) return;
  const e = Rt;
  Rt = null, Ne().then(() => {
    e.show = !1;
  });
};
ea.Component = Wa;
ue(Wa);
ue(Wa, ea);
fe(ea, qh);
var HN = Wa, tu = ea, Gh = {
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
}, Mt = 100, to = 0, bt = 20, wv = 2 * Math.PI * bt, { name: L6, n: F6, classes: H6 } = ae("progress"), U6 = ["aria-valuenow"], j6 = ["viewBox"], Y6 = { key: 0 }, W6 = ["id"], K6 = ["offset", "stop-color"], q6 = [
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
    }, [(b(!0), k(Be, null, Ye(e.linearGradientProgress, (r, t) => (b(), k("stop", {
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
      const i = Z(e.value), l = hn(i, to, Mt), s = hn(Math.round(i), to, Mt);
      return {
        width: `${l}%`,
        roundValue: `${s}%`,
        value: l
      };
    }), t = S(() => {
      const { size: i, lineWidth: l, value: s } = e, u = bt / (1 - fn(l) / fn(i)) * 2, d = `0 0 ${u} ${u}`, c = hn(Math.round(Z(s)), to, Mt), f = `${(Mt - c) / Mt * wv}`, v = fn(l) / fn(i) * u, g = `M ${u / 2} ${u / 2} m 0 -20 a ${bt} ${bt} 
        0 1 1 0 40 a ${bt} ${bt} 0 1 1 0 -40`;
      return {
        strokeWidth: v,
        viewBox: d,
        strokeOffset: f,
        roundValue: `${c}%`,
        path: g,
        value: hn(Z(s), to, Mt)
      };
    }), a = S(() => Sn(e.color) ? `url(#${n.value})` : e.color), o = S(() => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l)));
    return {
      id: n,
      linearProps: r,
      CIRCUMFERENCE: wv,
      RADIUS: bt,
      circleProps: t,
      progressColor: a,
      linearGradientProgress: o,
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
var UN = nl, au = nl, Jh = {
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
}, Z6 = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: J6, n: kv, classes: Q6 } = ae("pull-refresh"), $v = 150;
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
    const n = O(0), r = O(null), t = O(null), a = O(0), o = O("-125%"), i = O("arrow-down"), l = O("default"), s = O(!1), u = S(() => Math.abs(2 * n.value)), d = S(() => l.value === "success"), c = S(() => l.value !== "loading" && l.value !== "success" && !e.disabled), f = S(() => ({
      transform: `translate3d(0px, ${Pn(o.value) ? o.value : `${o.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: d.value ? e.successBgColor : e.bgColor,
      color: d.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: g, endTouch: h, isReachTop: m } = Jt();
    let w, $;
    me(() => e.modelValue, (R) => {
      R === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = n.value, M();
      }, Z(e.successDuration)));
    }), On(H), xe(r, "touchmove", P);
    function y(R) {
      if (i.value !== R)
        return i.value = R, new Promise((E) => {
          window.setTimeout(E, $v);
        });
    }
    function T(R) {
      ("classList" in w ? w : document.body).classList[R](`${kv()}--lock`);
    }
    function z(R) {
      if (v(R), n.value === 0) {
        const { width: E } = kn(t.value);
        n.value = -(E + E * 0.25);
      }
      $ = ut(R.target);
    }
    function P(R) {
      if (g(R), !c.value || !$ || $ !== w && kt($) > 0 || kt(w) > 0) return;
      m(w) && Ze(R), l.value !== "pulling" && (l.value = "pulling", a.value = R.touches[0].clientY), m(w) && tr(o.value) && o.value > n.value && T("add");
      const E = (R.touches[0].clientY - a.value) / 2 + n.value;
      o.value = E >= u.value ? u.value : E, y(o.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function N() {
      return Z6(this, null, function* () {
        h(), c.value && (s.value = !0, Z(o.value) >= u.value * 0.2 ? (yield y("refresh"), l.value = "loading", o.value = u.value * 0.3, C(e["onUpdate:modelValue"], !0), Ne(() => {
          C(e.onRefresh);
        }), T("remove")) : (l.value = "loosing", i.value = "arrow-down", o.value = n.value, setTimeout(() => {
          s.value = !1, T("remove");
        }, Z(e.animationDuration))), $ = null);
      });
    }
    function H() {
      w = e.target ? Op(e.target, "PullRefresh") : ut(r.value);
    }
    function M() {
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
      handleTouchstart: z,
      handleTouchmove: P,
      handleTouchend: N
    };
  }
});
Qh.render = x6;
var rl = Qh;
ue(rl);
fe(rl, Jh);
var jN = rl, ou = rl, xh = {
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
}, { name: _6, n: e8, classes: n8 } = ae("radio-group"), r8 = ["aria-label"];
function t8(e, n) {
  const r = x("maybe-v-node"), t = x("var-radio"), a = x("var-form-details");
  return b(), k("div", { class: p(e.n("wrap")) }, [L("div", {
    "aria-label": e.ariaLabel,
    role: "radiogroup",
    class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
  }, [e.options.length ? (b(!0), k(Be, { key: 0 }, Ye(e.options, (o) => (b(), ke(t, {
    key: o[e.valueKey],
    "checked-value": o[e.valueKey],
    disabled: o.disabled
  }, {
    default: se(({ checked: i }) => [U(r, { is: e.isFunction(o[e.labelKey]) ? o[e.labelKey](o, i) : o[e.labelKey] }, null, 8, ["is"])]),
    _: 2
  }, 1032, ["checked-value", "disabled"]))), 128)) : X("v-if", !0), F(e.$slots, "default")], 10, r8), U(a, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var _h = te({
  name: _6,
  components: {
    VarFormDetails: Hn,
    VarRadio: Sa,
    MaybeVNode: lr
  },
  props: xh,
  setup(e) {
    const { length: n, radios: r, bindRadios: t } = CP(), { bindForm: a } = Wn(), { errorMessage: o, validateWithTrigger: i, validate: l, resetValidation: s } = xn(), u = S(() => o.value), d = O(!1), c = {
      onToggle: m,
      validate: w,
      reset: $,
      resetValidation: s,
      hasChecked: S(() => d.value),
      errorMessage: u
    };
    me(() => e.modelValue, h), me(() => n.value, h), C(a, c), t(c), xe(() => window, "keydown", f);
    function f(y) {
      const T = r.findIndex(({ isFocusing: z }) => z.value);
      if (T !== -1 && r.some(({ moveable: z }, P) => P === T ? !1 : z())) {
        if ([
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight"
        ].includes(y.key) && Ze(y), y.key === "ArrowUp" || y.key === "ArrowLeft") {
          v(T, "prev");
          return;
        }
        (y.key === "ArrowDown" || y.key === "ArrowRight") && v(T, "next");
      }
    }
    function v(y, T) {
      for (; ; ) {
        T === "prev" ? y-- : y++, y < 0 && (y = r.length - 1), y > r.length - 1 && (y = 0);
        const P = r[y];
        if (P.moveable()) {
          P.move();
          break;
        }
      }
    }
    function g(y) {
      Ne(() => {
        const { validateTrigger: T, rules: z, modelValue: P } = e;
        i(T, y, z, P);
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
      errorMessage: o,
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
function a8() {
  const { bindChildren: e } = Bn(nb);
  return { bindRailNavigationItem: e };
}
var { name: o8, n: i8, classes: l8 } = ae("rail-navigation");
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
  name: o8,
  props: eb,
  setup(e) {
    const n = S(() => e.active), r = S(() => e.ripple), t = S(() => e.showLabel), { bindRailNavigationItem: a } = a8();
    a({
      active: n,
      ripple: r,
      showLabel: t,
      onToggle: o
    });
    function o(i) {
      n.value !== i && (C(e["onUpdate:active"], i), C(e.onChange, i));
    }
    return {
      n: i8,
      classes: l8
    };
  }
});
rb.render = s8;
var al = rb;
ue(al);
fe(al, eb);
var WN = al, lu = al, tb = {
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
  const { parentProvider: e, index: n, bindParent: r } = Dn(nb);
  return ar(!!r, "RailNavigationItem", "<var-rail-navigation-item/> must in <var-rail-navigation/>"), {
    index: n,
    railNavigation: e,
    bindRailNavigation: r
  };
}
var d8 = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: c8, n: f8, classes: v8 } = ae("rail-navigation-item"), p8 = {
  type: "primary",
  dot: !0
}, m8 = ["aria-disabled"];
function g8(e, n) {
  const r = x("var-icon"), t = x("var-badge"), a = _e("ripple");
  return We((b(), k("div", {
    class: p(e.classes(e.n(), [e.isActive, e.n("--active")], [e.disabled, e.n("--disabled")], [e.ripple && !e.disabled, e.n("--ripple-enabled")], [!e.showLabel, e.n("--icon-only")])),
    style: J({ "--rail-navigation-item-transition-duration-override": e.allowTransition && !e.ripple ? void 0 : "0ms" }),
    "aria-disabled": e.disabled,
    role: "button",
    onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o)),
    onMouseenter: n[1] || (n[1] = (...o) => e.handleMouseenter && e.handleMouseenter(...o)),
    onMouseleave: n[2] || (n[2] = (...o) => e.handleMouseleave && e.handleMouseleave(...o))
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
  }, [F(e.$slots, "default", { active: e.isActive }, () => [Le(ve(e.label), 1)])], 2)) : X("v-if", !0)], 46, m8)), [[a, { disabled: !e.ripple || e.disabled }]]);
}
var ab = te({
  name: c8,
  components: {
    VarBadge: ka,
    VarIcon: Je
  },
  directives: { Ripple: vn },
  props: tb,
  setup(e) {
    const { index: n, railNavigation: r, bindRailNavigation: t } = u8(), { active: a, ripple: o, showLabel: i, onToggle: l } = r, s = S(() => {
      var h;
      return (h = e.name) != null ? h : n.value;
    }), u = S(() => a.value === s.value), d = S(() => e.badge === !0 ? p8 : e.badge), c = O(!1);
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
      ripple: o,
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
ab.render = g8;
var ol = ab;
ue(ol);
fe(ol, tb);
var KN = ol, su = ol, ob = {
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
}, { name: h8, n: aa } = ae("rate"), b8 = ["onClick"];
function y8(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), a = x("var-form-details"), o = _e("ripple"), i = _e("hover");
  return b(), k("div", { class: p(e.n("wrap")) }, [L("div", { class: p(e.n()) }, [(b(!0), k(Be, null, Ye(e.toNumber(e.count), (l) => We((b(), k("div", {
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
  }, null, 8, ["namespace", "name"])])], 6), U(t, { hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled }, null, 8, ["hovering"])], 14, b8)), [[o, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    i,
    e.createHoverHandler(l),
    "desktop"
  ]])), 128))], 2), U(a, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
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
  props: ob,
  setup(e) {
    const n = O(-1), { form: r, bindForm: t } = Wn(), { errorMessage: a, validateWithTrigger: o, validate: i, resetValidation: l } = xn(), { hovering: s } = ur();
    let u = Z(e.modelValue);
    C(t, {
      reset: $,
      validate: g,
      resetValidation: l
    });
    function d(y) {
      const { count: T, gap: z } = e;
      return {
        color: f(y).color,
        marginRight: y !== Z(T) ? Te(z) : 0
      };
    }
    function c(y) {
      const { name: T, color: z } = f(y);
      return {
        [aa("content")]: !0,
        [aa("--disabled")]: r?.disabled.value || e.disabled,
        [aa("--error")]: a.value,
        [aa("--primary")]: T !== e.emptyIcon && !z
      };
    }
    function f(y) {
      const { modelValue: T, disabled: z, disabledColor: P, color: N, half: H, emptyColor: M, icon: R, halfIcon: E, emptyIcon: D, namespace: A, halfIconNamespace: I, emptyIconNamespace: B } = e;
      let j = N;
      return (z || r?.disabled.value) && (j = P), y <= T ? {
        color: j,
        name: R,
        namespace: A,
        slot: "icon"
      } : H && y <= T + 0.5 ? {
        color: j,
        name: E,
        namespace: I,
        slot: "half-icon"
      } : {
        color: z || r?.disabled.value ? P : M,
        name: D,
        namespace: B,
        slot: "empty-icon"
      };
    }
    function v(y, T) {
      const { half: z, clearable: P } = e, { offsetWidth: N } = T.target;
      z && T.offsetX <= Math.floor(N / 2) && (y -= 0.5), u === y && P && (y = 0), u !== y && (C(e["onUpdate:modelValue"], y), C(e.onChange, y)), u = y;
    }
    function g() {
      return i(e.rules, e.modelValue);
    }
    function h() {
      Ne(() => o(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function m(y, T) {
      const { readonly: z, disabled: P } = e;
      z || P || r?.disabled.value || r?.readonly.value || (v(y, T), h());
    }
    function w(y) {
      return (T) => {
        n.value = y, s.value = T;
      };
    }
    function $() {
      C(e["onUpdate:modelValue"], 0), l();
    }
    return {
      errorMessage: a,
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
      n: aa
    };
  }
});
ib.render = y8;
var il = ib;
ue(il);
fe(il, ob);
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
function D8(e, n) {
  return b(), k("svg", E8, [...n[0] || (n[0] = [L("path", { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" }, null, -1)])]);
}
var cb = te({});
cb.render = D8;
var B8 = cb, { n: I8, classes: M8 } = ae("result");
function A8(e, n) {
  return b(), k(Be, null, [
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
var L8 = vb, { name: F8, n: H8, classes: U8 } = ae("result");
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
    Question: B8,
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
}, { name: Y8, n: W8, classes: K8 } = ae("row");
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
    const n = S(() => Ke(e.gutter) ? e.gutter.map((a) => fn(a) / 2) : [0, fn(e.gutter) / 2]), { bindCols: r } = QC();
    r({ average: n });
    function t(a) {
      C(e.onClick, a);
    }
    return {
      average: n,
      n: W8,
      classes: K8,
      handleClick: t,
      padStartFlex: bo
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
  const { bindChildren: e, childProviders: n, length: r } = Bn(bb);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function G8() {
  const { bindParent: e, parentProvider: n } = Dn(bb);
  return ar(!!e, "SegmentedButton", "<var-segmented-button/> must in <var-segmented-buttons/>"), {
    segmentedButtons: n,
    bindSegmentedButtons: e
  };
}
var { name: Z8, n: J8, classes: Q8 } = ae("segmented-button"), x8 = [
  "role",
  "aria-checked",
  "aria-disabled",
  "disabled",
  "tabindex"
];
function _8(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), a = _e("ripple"), o = _e("hover");
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
  }, null, 8, ["hovering", "focusing"])], 42, x8)), [[a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    o,
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
    const n = O(), r = O(!1), t = O(!1), { segmentedButtons: a, bindSegmentedButtons: o } = G8(), { hovering: i, handleHovering: l } = ur(), { form: s } = Wn();
    o({
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
      s?.disabled.value || e.disabled || s?.readonly.value || e.readonly || a.onClick(e.checkedValue, t.value);
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
      segmentedButtons: a,
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
var ZN = ul, Mo = ul, wb = {
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
}, { name: eT, n: nT, classes: rT } = ae("segmented-buttons"), tT = ["role"];
function aT(e, n) {
  const r = x("maybe-v-node"), t = x("var-segmented-button"), a = x("var-form-details");
  return b(), k("div", { class: p(e.n("wrap")) }, [L("div", {
    role: e.multiple ? "group" : "radiogroup",
    class: p([e.n(), e.hasError ? e.n("--error") : null])
  }, [e.options.length ? (b(!0), k(Be, { key: 0 }, Ye(e.options, (o) => (b(), ke(t, {
    key: e.getOptionValue(o),
    "checked-value": e.getOptionValue(o),
    disabled: o.disabled,
    ripple: o.ripple
  }, {
    default: se(() => [U(r, { is: e.renderOptionLabel(o) }, null, 8, ["is"])]),
    _: 2
  }, 1032, [
    "checked-value",
    "disabled",
    "ripple"
  ]))), 128)) : X("v-if", !0), F(e.$slots, "default")], 10, tT), U(a, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var kb = te({
  name: eT,
  components: {
    VarFormDetails: Hn,
    VarSegmentedButton: Mo,
    MaybeVNode: lr
  },
  props: wb,
  setup(e) {
    const { length: n, buttons: r, bindButtons: t } = X8(), { bindForm: a } = Wn(), { errorMessage: o, validateWithTrigger: i, validate: l, resetValidation: s } = xn(), u = {
      multiple: S(() => e.multiple),
      checkmark: S(() => e.checkmark),
      size: S(() => e.size),
      onClick: y
    }, d = {
      validate: N,
      reset: H,
      resetValidation: s
    };
    me(() => e.modelValue, T), me(() => n.value, T), t(u), C(a, d), xe(() => window, "keydown", h), xe(() => window, "keyup", m);
    function c() {
      return e.multiple ? Ke(e.modelValue) ? e.modelValue : [] : e.modelValue;
    }
    function f(M) {
      const R = c();
      return Ke(R) ? R.includes(M) : R === M;
    }
    function v(M) {
      return ir(M[e.labelKey], M, f(g(M)));
    }
    function g(M) {
      return M[e.valueKey];
    }
    function h(M) {
      const R = r.findIndex(({ isFocusing: E }) => E.value);
      if (R !== -1 && r.some(({ disabled: E }, D) => D === R ? !1 : !E.value)) {
        if (["ArrowLeft", "ArrowRight"].includes(M.key) && M.preventDefault(), (M.key === "Enter" || M.key === " ") && M.preventDefault(), M.key === "ArrowLeft") {
          w(R, "prev");
          return;
        }
        if (M.key === "ArrowRight") {
          w(R, "next");
          return;
        }
        M.key === "Enter" && r[R].toggle();
      }
    }
    function m(M) {
      const R = r.findIndex(({ isFocusing: E }) => E.value);
      R !== -1 && M.key === " " && (M.preventDefault(), r[R].toggle());
    }
    function w(M, R) {
      for (; ; ) {
        M += R === "prev" ? -1 : 1, M < 0 && (M = r.length - 1), M > r.length - 1 && (M = 0);
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
    function y(M, R) {
      if ($("onClick"), !e.multiple) {
        if (R) return;
        z(M);
        return;
      }
      const E = c();
      if (R) {
        z(E.filter((D) => D !== M));
        return;
      }
      z([...E, M]);
    }
    function T() {
      const M = c();
      r.forEach(({ sync: R }) => R(M));
    }
    function z(M) {
      C(e["onUpdate:modelValue"], M), C(e.onChange, M), $("onChange");
    }
    const P = S(() => !!o.value);
    function N() {
      return l(e.rules, c());
    }
    function H() {
      C(e["onUpdate:modelValue"], e.multiple ? [] : void 0), s();
    }
    return {
      errorMessage: o,
      n: nT,
      classes: rT,
      renderOptionLabel: v,
      getOptionValue: g,
      hasError: P,
      validate: N,
      reset: H,
      resetValidation: s
    };
  }
});
kb.render = aT;
var dl = kb;
ue(dl);
fe(dl, wb);
var JN = dl, fu = dl, oT = Object.defineProperty, Sv = Object.getOwnPropertySymbols, iT = Object.prototype.hasOwnProperty, lT = Object.prototype.propertyIsEnumerable, Cv = (e, n, r) => n in e ? oT(e, n, {
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
}, Fe(Na, [
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
])), { n: uT, classes: dT } = ae("select");
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
      set: (o) => C(e["onUpdate:modelValue"], o)
    });
    return {
      n: uT,
      classes: dT,
      value: r,
      filterInputRef: n,
      focus: () => {
        var o;
        (o = n.value) == null || o.focus();
      },
      blur: () => {
        var o;
        (o = n.value) == null || o.blur();
      }
    };
  }
});
Sb.render = cT;
var fT = Sb, Pv = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
});
function vT(e, n, r) {
  const t = O(!1);
  let a = null;
  me(() => n.value, () => Pv(null, null, function* () {
    l(), n.value && (yield Ne(), i(), o());
  }), { immediate: !0 }), Zt(l);
  function o() {
    var s;
    const u = e.value, d = u?.querySelectorAll(".var-option");
    t.value = d?.length ? Array.from(d).every((c) => Ur(c).display === "none") : !0, (s = r?.onAfterUpdate) == null || s.call(r);
  }
  function i() {
    e.value && (a = new MutationObserver(() => Pv(null, null, function* () {
      yield Ne(), o();
    })), a.observe(e.value, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style", "class"]
    }));
  }
  function l() {
    a?.disconnect(), a = null;
  }
  return { showEmpty: t };
}
var pT = 11;
function mT(e) {
  const n = Gv(), r = O(0), t = S(() => ({ minWidth: `${Math.max(r.value, pT)}px` })), a = () => {
    var o, i;
    r.value = (i = (o = n.value) == null ? void 0 : o.getBoundingClientRect().width) != null ? i : 0;
  };
  return me(() => No(e), () => {
    Ne(a);
  }), {
    calculatorRef: n,
    filterStyle: t,
    resize: a
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
}, $T = (e, n) => hT(e, bT(n)), ST = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: CT, n: PT, classes: OT } = ae("select"), zT = ["tabindex"];
function TT(e, n) {
  const r = x("maybe-v-node"), t = x("var-chip"), a = x("var-select-filter"), o = x("var-icon"), i = x("var-field-decorator"), l = x("var-option"), s = x("var-menu"), u = x("var-form-details");
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
      e.options.length ? (b(!0), k(Be, { key: 1 }, Ye(e.options, (d) => (b(), ke(l, {
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
    default: se(() => [U(i, yt(Ao({
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
      }, () => [U(o, {
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
        L("div", { class: p(e.classes(e.n("label"), [e.filterable && e.showMenu, e.n("--label-focusing")])) }, [e.isShowSelected() ? F(e.$slots, "selected", { key: 0 }, () => [e.multiple ? (b(), k(Be, { key: 0 }, [e.chip ? (b(), k("div", {
          key: 0,
          class: p(e.n("chips"))
        }, [(b(!0), k(Be, null, Ye(e.labels, (d) => (b(), ke(t, {
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
        ]))), 128)), e.isShowMultipleFilter() ? (b(), ke(a, {
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
        }, [(b(!0), k(Be, null, Ye(e.labels, (d, c) => (b(), k(Be, { key: d }, [U(r, { is: d }, null, 8, ["is"]), Le(ve(c !== e.labels.length - 1 ? e.separator : ""), 1)], 64))), 128)), e.isShowMultipleFilter() ? (b(), ke(a, {
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
        e.isShowSingleFilter() ? (b(), ke(a, {
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
    VarChip: $o,
    VarOption: Io,
    VarFieldDecorator: ha,
    VarFormDetails: Hn,
    VarSelectFilter: fT,
    MaybeVNode: lr
  },
  props: $b,
  setup(e) {
    var n;
    const r = O(!1), t = O(!1), a = O(null), o = O(null), i = O(""), l = O(!1), s = S(() => e.filterable), u = S(() => e.multiple), d = S(() => e.focusColor), c = S(() => Or(e.modelValue)), f = S(() => e.disabled || e.readonly ? "" : "pointer"), { bindForm: v, form: g } = Wn(), { length: h, options: m, bindOptions: w } = n6(), { label: $, labels: y, computeLabel: T, getSelectedValue: z } = am({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => m,
      optionProvidersLength: () => h.value
    }), { errorMessage: P, validateWithTrigger: N, validate: H, resetValidation: M } = xn(), R = S(() => g?.readonly.value || e.readonly), E = S(() => g?.disabled.value || e.disabled), D = O(null), A = O(null), I = S(() => e.variant === "standard" && !e.filterable ? "cover-top" : "bottom"), { t: B } = kr(), j = O(0), K = S({
      get() {
        return j.value + (I.value === "bottom" ? 2 : 0);
      },
      set(Re) {
        j.value = Re;
      }
    }), G = S(() => {
      const { hint: Re, blurColor: sn, focusColor: ee } = e;
      if (!Re)
        return P.value ? "var(--field-decorator-error-color)" : r.value ? ee || "var(--field-decorator-focus-color)" : sn || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
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
      computeLabel: T,
      onSelect: re,
      reset: _n,
      validate: Dr,
      resetValidation: M
    }, { showEmpty: pe } = vT(D, t, { onAfterUpdate: () => {
      var Re;
      return (Re = A.value) == null ? void 0 : Re.resize();
    } });
    let $e = !1;
    me(() => e.multiple, () => {
      ar(e.multiple && Ke(e.modelValue), "Select", "The modelValue must be an array when multiple is true");
    }), me(t, (Re) => {
      Re && Ne(Ue);
    }), w(ne), xe(() => window, "keydown", nn), xe(() => window, "keyup", Xe), C(v, ne);
    function W() {
      return s.value && !R.value && !E.value && !u.value;
    }
    function oe() {
      return s.value && !R.value && !E.value && u.value;
    }
    function Ee() {
      return !(c.value && !u.value || !u.value && (i.value || l.value));
    }
    function Ue() {
      var Re;
      Tp(D.value, (Re = D.value) == null ? void 0 : Re.querySelector(".var-option--selected-color"));
    }
    function nn(Re) {
      var sn;
      if (E.value || R.value || !r.value) return;
      const { key: ee } = Re;
      if (ee === " " && !t.value) {
        Ze(Re);
        return;
      }
      if (ee === "Escape" && t.value) {
        a.value.focus(), Ze(Re), t.value = !1;
        return;
      }
      if (ee === "Tab" && t.value) {
        a.value.focus(), Ze(Re), ye();
        return;
      }
      if (ee === "Enter" && !t.value) {
        Ze(Re), t.value = !0, (sn = o.value) == null || sn.focus();
        return;
      }
      (ee === "ArrowDown" || ee === "ArrowUp") && t.value && (Ze(Re), Qu(a.value, D.value, ee));
    }
    function Xe(Re) {
      if (E.value || R.value || t.value || !r.value) return;
      const { key: sn } = Re;
      sn === " " && !t.value && (Ze(Re), t.value = !0);
    }
    function en(Re) {
      Ne(() => {
        const { validateTrigger: sn, rules: ee, modelValue: be } = e;
        N(sn, Re, ee, be);
      });
    }
    function an() {
      var Re;
      const { disabled: sn, readonly: ee, onFocus: be } = e;
      if (!(g?.disabled.value || g?.readonly.value || sn || ee)) {
        if ($e) {
          $e = !1;
          return;
        }
        K.value = fn(e.offsetY), $r(), (oe() || W()) && ($e = !0, (Re = o.value) == null || Re.focus()), C(be), en("onFocus");
      }
    }
    function ye() {
      const { disabled: Re, readonly: sn, onBlur: ee } = e;
      g?.disabled.value || g?.readonly.value || Re || sn || (or(), C(ee), en("onBlur"), i.value = "");
    }
    function _() {
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
      const { disabled: sn, readonly: ee, multiple: be, onChange: le } = e;
      if (g?.disabled.value || g?.readonly.value || sn || ee) return;
      const Se = z(Re);
      C(e["onUpdate:modelValue"], Se), C(le, Se), en("onChange"), Ne(() => {
        var je;
        return (je = o.value) == null ? void 0 : je.focus();
      }), be || (a.value.focus(), Gn().then(() => {
        t.value = !1, i.value = "";
      }));
    }
    function we() {
      const { disabled: Re, readonly: sn, multiple: ee, clearable: be, onClear: le, onChange: Se } = e;
      if (g?.disabled.value || g?.readonly.value || Re || sn || !be) return;
      const je = ee ? [] : void 0;
      C(e["onUpdate:modelValue"], je), C(le, je), en("onClear"), C(Se, je), en("onChange");
    }
    function ze(Re) {
      const { disabled: sn, onClick: ee } = e;
      g?.disabled.value || sn || (C(ee, Re), en("onClick"));
    }
    function Ge(Re) {
      const { disabled: sn, readonly: ee, modelValue: be, onClose: le, onChange: Se } = e;
      if (g?.disabled.value || g?.readonly.value || sn || ee) return;
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
    function or() {
      r.value = !1, t.value = !1;
    }
    function Dr() {
      return H(e.rules, e.modelValue);
    }
    function _n() {
      C(e["onUpdate:modelValue"], e.multiple ? [] : void 0), M();
    }
    return {
      root: a,
      filterRef: o,
      calculatorRef: de,
      isComposing: l,
      filterStyle: Q,
      pattern: i,
      tabindex: ge,
      readonly: R,
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
      menuEl: D,
      menuRef: A,
      placement: I,
      cursor: f,
      placeholderColor: G,
      enableCustomPlaceholder: ce,
      showEmpty: pe,
      t: gn,
      pt: B,
      isFunction: Yn,
      n: PT,
      classes: OT,
      isShowSelected: Ee,
      isShowSingleFilter: W,
      isShowMultipleFilter: oe,
      handleFocus: an,
      handleBlur: ye,
      handleClickOutside: Y,
      handleClear: we,
      handleClick: ze,
      handleClose: Ge,
      handleRootBlur: _,
      handleInput: rn,
      handleCompositionStart: mn,
      handleCompositionEnd: In,
      reset: _n,
      validate: Dr,
      resetValidation: M,
      focus: $r,
      blur: or
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
} }, { name: ET, n: DT, classes: BT } = ae("shimmer-text");
function IT(e, n) {
  return b(), k("span", { class: p(e.classes(e.n(), e.n(`--${e.type}`))) }, [F(e.$slots, "default")], 2);
}
var Ob = te({
  name: ET,
  props: Pb,
  setup() {
    return {
      n: DT,
      classes: BT
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
}, { name: MT, n: AT } = ae("signature"), NT = ["height", "width"];
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
    const n = O(), r = O(), t = O(0), a = O(0);
    let o = !1, i = null;
    xe(r, "touchstart", s), xe(r, "touchmove", u), xe(r, "touchend", d), wr(l), Tr(l);
    function l() {
      !r.value || !n.value || (i = r.value.getContext("2d"), t.value = n.value.offsetWidth, a.value = n.value.offsetHeight);
    }
    function s(h) {
      !i || !n.value || (h.preventDefault(), o = !0, i.beginPath(), i.lineWidth = Z(e.lineWidth), i.strokeStyle = e.strokeStyle === "currentColor" ? Ur(n.value).color : e.strokeStyle, C(e.onStart));
    }
    function u(h) {
      if (h.preventDefault(), !r.value || !i || !o) return;
      const m = h.touches[0].clientX, w = h.touches[0].clientY, $ = kn(r.value), y = m - $.left, T = w - $.top;
      i.lineTo(y, T), i.stroke(), C(e.onSigning);
    }
    function d(h) {
      o && (h.preventDefault(), o = !1, C(e.onEnd));
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
      i && (o = !1, i.clearRect(0, 0, t.value, a.value), i.closePath());
    }
    function g() {
      if (r.value)
        return f(r.value) ? "" : c(r.value);
    }
    return {
      root: n,
      canvas: r,
      canvasWidth: t,
      canvasHeight: a,
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
}, { name: VT, n: LT, classes: FT } = ae("skeleton");
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
    }, [L("div", { class: p(e.n("--animation")) }, null, 2)], 6)) : X("v-if", !0), (b(!0), k(Be, null, Ye(e.toNumber(e.rows), (r, t) => (b(), k("div", {
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
var Db = te({
  name: VT,
  props: Eb,
  setup: () => ({
    n: LT,
    classes: FT,
    toSizeUnit: Te,
    toNumber: Z
  })
});
Db.render = HT;
var pl = Db;
ue(pl);
fe(pl, Eb);
var e7 = pl, gu = pl, Tn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(Tn || {}), Bb = {
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
}, { name: UT, n: Tv, classes: jT } = ae("slider"), YT = [
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
  const r = x("var-hover-overlay"), t = x("var-form-details"), a = _e("hover");
  return b(), k("div", { class: p(e.classes(e.n(e.direction), e.n("$--box"))) }, [L("div", {
    ref: "sliderEl",
    class: p(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
    onClick: n[1] || (n[1] = (...o) => e.handleClick && e.handleClick(...o))
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
  }, null, 6)], 2), (b(!0), k(Be, null, Ye(e.thumbList, (o) => (b(), k("div", {
    key: o.enumValue,
    class: p(e.n(`${e.direction}-thumb`)),
    style: J(e.thumbStyle(o)),
    tabindex: e.isDisabled ? void 0 : "0",
    role: "slider",
    "aria-valuemin": e.min,
    "aria-valuemax": e.max,
    "aria-valuenow": o.value,
    "aria-disabled": e.isDisabled,
    "aria-valuetext": `${o.text}`,
    onTouchstart: Nn((i) => e.start(i, o.enumValue), ["stop"]),
    onTouchmove: n[0] || (n[0] = Nn((...i) => e.move && e.move(...i), ["stop"])),
    onFocusin: (i) => e.handleFocus(o),
    onFocusout: (i) => e.handleBlur(o)
  }, [F(e.$slots, "button", { currentValue: o.text }, () => [
    We(L("div", {
      class: p(e.n(`${e.direction}-thumb-block`)),
      style: J({ background: e.thumbColor })
    }, null, 6), [[
      a,
      (i) => e.hover(i, o),
      "desktop"
    ]]),
    L("div", {
      class: p(e.classes(e.n(`${e.direction}-thumb-ripple`), [e.thumbsProps[o.enumValue].active, e.n(`${e.direction}-thumb-ripple--active`)])),
      style: J({ background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0 })
    }, [U(r, {
      hovering: !e.isDisabled && o.hovering,
      focusing: !e.isDisabled && o.focusing
    }, null, 8, ["hovering", "focusing"])], 6),
    L("div", {
      class: p(e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(o.enumValue), e.n(`${e.direction}-thumb-label--active`)])),
      style: J({
        background: e.labelColor,
        color: e.labelTextColor,
        height: e.toSizeUnit(e.thumbSize),
        width: e.toSizeUnit(e.thumbSize)
      })
    }, [L("span", null, ve(o.text), 1)], 6)
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
  props: Bb,
  setup(e) {
    const n = O(0), r = O(null), t = O(!1), a = S(() => Z(e.max) - Z(e.min)), o = S(() => n.value / a.value * Z(e.step)), i = S(() => e.disabled || f?.disabled.value), l = S(() => e.readonly || f?.readonly.value), s = S(() => e.direction === "vertical"), u = O(!1), d = O(!1), { bindForm: c, form: f } = Wn(), { errorMessage: v, validateWithTrigger: g, validate: h, resetValidation: m } = xn(), { hovering: w, handleHovering: $ } = ur(), { hovering: y, handleHovering: T } = ur(), z = S(() => {
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
        handleHovering: T,
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
    }), N = $n({
      [Tn.First]: E(),
      [Tn.Second]: E()
    });
    let H;
    C(c, {
      reset: Xe,
      validate: R,
      resetValidation: m
    }), me([() => e.modelValue, () => e.step], ([Y, re]) => {
      !Ee() || !Ue() || t.value || nn(Y, Z(re));
    }), me(n, () => nn()), On(() => {
      !Ee() || !Ue() || M();
    }), Pt(ne), xe(() => window, "keydown", an), wr(M);
    function M() {
      n.value = r.value[s.value ? "offsetHeight" : "offsetWidth"];
    }
    function R() {
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
    function D() {
      Ne(() => g(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function A(Y) {
      const re = Y.currentTarget;
      return re ? s.value ? n.value - (Y.clientY - kn(re).top) : Y.clientX - Ly(re) : 0;
    }
    function I(Y) {
      return {
        [s.value ? "bottom" : "left"]: `${Y.value}%`,
        zIndex: N[Y.enumValue].active ? 1 : void 0
      };
    }
    function B(Y) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : N[Y].active;
    }
    function j(Y) {
      const { min: re, max: we } = e;
      return Y < Z(re) ? 0 : Y > Z(we) ? 100 : (Y - Z(re)) / a.value * 100;
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
      C(e["onUpdate:modelValue"], Y), C(e.onChange, Y), D();
    }
    function ge(Y, re) {
      let we = [];
      const { step: ze, range: Ge, modelValue: rn, min: mn } = e, In = Z(ze), $r = Math.round(Y / o.value), or = $r * In + Z(mn), Dr = N[re].percentValue * In + Z(mn);
      N[re].percentValue = $r, Ge && Ke(rn) && (we = re === Tn.First ? [or, rn[1]] : [rn[0], or]), Dr !== or && ce(Ge ? we.map((_n) => K(_n)) : K(or));
    }
    function de(Y) {
      if (!e.range) return Tn.First;
      const re = N[Tn.First].percentValue * o.value, we = N[Tn.Second].percentValue * o.value;
      return Math.abs(Y - re) <= Math.abs(Y - we) ? Tn.First : Tn.Second;
    }
    function Q() {
      document.addEventListener("touchmove", $e, { passive: !1 }), document.addEventListener("touchend", W), document.addEventListener("touchcancel", W);
    }
    function ne() {
      document.removeEventListener("touchmove", $e), document.removeEventListener("touchend", W), document.removeEventListener("touchcancel", W);
    }
    function pe(Y, re) {
      if (M(), i.value || (N[re].active = !0), H = re, Q(), i.value || l.value) return;
      C(e.onStart), t.value = !0;
      const { clientX: we, clientY: ze } = Y.touches[0];
      N[re].startPosition = s.value ? ze : we;
    }
    function $e(Y) {
      if (Ze(Y), i.value || l.value || !t.value) return;
      const { startPosition: re, currentOffset: we } = N[H], { clientX: ze, clientY: Ge } = Y.touches[0];
      let rn = (s.value ? re - Ge : ze - re) + we;
      rn <= 0 ? rn = 0 : rn >= n.value && (rn = n.value), ge(rn, H);
    }
    function W() {
      ne();
      const { range: Y, modelValue: re, onEnd: we, step: ze, min: Ge } = e;
      if (i.value || (N[H].active = !1), i.value || l.value) return;
      let rn = [];
      N[H].currentOffset = N[H].percentValue * o.value;
      const mn = N[H].percentValue * Z(ze) + Z(Ge);
      Y && Ke(re) && (rn = H === Tn.First ? [mn, re[1]] : [re[0], mn]), C(we, Y ? rn : mn), t.value = !1;
    }
    function oe(Y) {
      if (i.value || l.value || Y.target.closest(`.${Tv("thumb")}`)) return;
      const re = A(Y), we = de(re);
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
        return ze < Z(Ge) ? 0 : ze > Z(rn) ? a.value / re : (ze - Z(Ge)) / re;
      };
      e.range && Ke(Y) ? (N[Tn.First].percentValue = we(Y[0]), N[Tn.First].currentOffset = N[Tn.First].percentValue * o.value, N[Tn.Second].percentValue = we(Y[1]), N[Tn.Second].currentOffset = N[Tn.Second].percentValue * o.value) : tr(Y) && (N[Tn.First].currentOffset = we(Y) * o.value);
    }
    function Xe() {
      const Y = e.range ? [0, 0] : 0;
      C(e["onUpdate:modelValue"], Y), m();
    }
    function en(Y, re) {
      const we = Z(e.step);
      return Ke(re) ? [re[0] + (u.value ? Y * we : 0), re[1] + (d.value ? Y * we : 0)].map(K) : K(re + Y * we);
    }
    function an(Y) {
      const re = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: we } = Y;
      if (!ma(re, we) || l.value || i.value || e.range && !u.value && !d.value || !e.range && !u.value) return;
      Ze(Y);
      const ze = re[we];
      ce(en(ze, e.modelValue));
    }
    function ye(Y) {
      i.value || Y.handleFocusing(!0);
    }
    function _(Y) {
      Y.handleFocusing(!1);
    }
    return {
      sliderEl: r,
      getFillStyle: P,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: N,
      thumbList: z,
      handleFocus: ye,
      handleBlur: _,
      n: Tv,
      classes: jT,
      thumbStyle: I,
      hover: G,
      toSizeUnit: Te,
      toNumber: Z,
      showLabel: B,
      start: pe,
      move: $e,
      end: W,
      handleClick: oe
    };
  }
});
Ib.render = WT;
var ml = Ib;
ue(ml);
fe(ml, Bb);
var n7 = ml, hu = ml, KT = Object.defineProperty, qT = Object.defineProperties, XT = Object.getOwnPropertyDescriptors, Ev = Object.getOwnPropertySymbols, GT = Object.prototype.hasOwnProperty, ZT = Object.prototype.propertyIsEnumerable, Dv = (e, n, r) => n in e ? KT(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, JT = (e, n) => {
  for (var r in n || (n = {})) GT.call(n, r) && Dv(e, r, n[r]);
  if (Ev)
    for (var r of Ev(n)) ZT.call(n, r) && Dv(e, r, n[r]);
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
}, { n: xT, classes: _T } = ae("snackbar"), e5 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function n5(e, n) {
  var r;
  const t = x("var-icon"), a = x("var-loading");
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
      e.type === "loading" ? (b(), ke(a, {
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
    const t = Gv(), { zIndex: a } = Ma(() => e.show, 1);
    Ia(() => e.show, () => e.lockScroll);
    const o = S(() => {
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
      zIndex: a,
      iconName: i,
      isForbidClick: o,
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
var Ab = Mb, { name: r5, n: t5 } = ae("snackbar");
function a5(e, n) {
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
Nb.render = a5;
var gl = Nb, o5 = Object.defineProperty, Bv = Object.getOwnPropertySymbols, i5 = Object.prototype.hasOwnProperty, l5 = Object.prototype.propertyIsEnumerable, Iv = (e, n, r) => n in e ? o5(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ea = (e, n) => {
  for (var r in n || (n = {})) i5.call(n, r) && Iv(e, r, n[r]);
  if (Bv)
    for (var r of Bv(n)) l5.call(n, r) && Iv(e, r, n[r]);
  return e;
}, Rb = [
  "loading",
  "success",
  "warning",
  "info",
  "error"
], Mv = 0, bu = !1, Vb, Da = !1, Lb = {
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
      const a = document.querySelector(".var-transition-group");
      r.forbidClick || r.type === "loading" ? a.classList.add("var-pointer-auto") : a.classList.remove("var-pointer-auto");
      const o = Ea({ position: Da ? "relative" : "absolute" }, m5(r.position)), { content: i, icon: l, action: s } = r, u = {
        default: Xl(i),
        icon: Xl(l),
        action: Xl(s)
      };
      return U(Ab, qe(r, {
        key: n,
        style: o,
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
  const n = v5(e), r = $n(Ea(Ea({}, md), n));
  r.show = !0, bu || (bu = !0, Vb = Qt(u5).unmountInstance);
  const { length: t } = br, a = {
    id: Mv++,
    reactiveSnackOptions: r
  };
  return t === 0 || Da ? f5(a) : p5(r, `update-${Mv}`), { clear() {
    !Da && br.length ? br[0].reactiveSnackOptions.show = !1 : r.show = !1;
  } };
};
Rb.forEach((e) => {
  Fr[e] = (n) => (Sn(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Fr(n));
});
Fr.allowMultiple = function(e = !1) {
  e !== Da && (br.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Da = e);
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
  r.reactiveSnackOptions = Ea(Ea({}, r.reactiveSnackOptions), e), r._update = n;
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
  const { direction: t, justify: a, index: o, lastIndex: i } = r;
  let l = "0";
  return t === "row" && ([
    "flex-start",
    "center",
    "flex-end",
    "start",
    "end"
  ].includes(a) ? o !== i ? l = `${fr(e)} ${n} ${fr(e)} 0` : l = `${fr(e)} 0` : a === "space-around" ? l = `${fr(e)} ${fr(n)}` : a === "space-between" && (o === 0 ? l = `${fr(e)} ${fr(n)} ${fr(e)} 0` : o === i ? l = `${fr(e)} 0 ${fr(e)} ${fr(n)}` : l = `${fr(e)} ${fr(n)}`)), t === "column" && o !== i && (l = `0 0 ${e} 0`), l;
}
var h5 = (e) => [
  "mini",
  "small",
  "normal",
  "large"
].includes(e), { name: b5, n: ao, classes: Av } = ae("space");
function y5(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Ke(e) ? e.map(Te) : [Te(e), Te(e)];
}
var hl = te({
  name: b5,
  props: Fb,
  setup(e, { slots: n }) {
    return () => {
      var r;
      const { inline: t, justify: a, align: o, wrap: i, direction: l, size: s } = e, u = (r = C(n.default)) != null ? r : [], [d, c] = y5(s, h5(s)), f = Vo(u), v = f.length - 1, g = f.map((h, m) => {
        var w;
        const $ = g5(d, c, {
          direction: l,
          justify: a,
          index: m,
          lastIndex: v
        });
        return U("div", {
          class: Av([l === "column", ao("--auto")]),
          key: (w = h.key) != null ? w : void 0,
          style: { margin: $ }
        }, [h]);
      });
      return U("div", {
        class: Av(ao(), ao("$--box"), [t, ao("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: bo(a),
          alignItems: bo(o),
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
  const { bindChildren: e, childProviders: n } = Bn(Ub);
  return {
    step: n,
    bindStep: e
  };
}
function k5() {
  const { parentProvider: e, index: n, bindParent: r } = Dn(Ub);
  return ar(!!r, "Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var { name: $5, n: S5, classes: C5 } = ae("step"), P5 = { key: 3 };
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
    const { index: e, steps: n, bindSteps: r } = k5(), { active: t, activeColor: a, inactiveColor: o, direction: i, clickStep: l } = n, s = S(() => t.value === e.value), u = S(() => e.value !== -1 && Z(t.value) > e.value);
    r({ index: e });
    function d() {
      return l(e.value);
    }
    return {
      index: e,
      isActive: u,
      isCurrent: s,
      direction: i,
      activeColor: a,
      inactiveColor: o,
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
var a7 = bl, ku = bl, Yb = {
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
}, { name: z5, n: T5 } = ae("steps");
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
    const n = S(() => e.active), r = S(() => e.activeColor), t = S(() => e.inactiveColor), a = S(() => e.direction), { bindStep: o } = w5();
    o({
      active: n,
      direction: a,
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
var o7 = yl, $u = yl, Kb = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: D5, n: B5 } = ae("style-provider"), wl = te({
  name: D5,
  props: Kb,
  setup(e, { slots: n }) {
    return () => Fn(e.tag, {
      class: B5(),
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
  const n = zp(e ?? {}), r = Object.entries(n).reduce((t, [a, o]) => (t += `${a}:${o};`, t), `:root:root {
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
}, { name: M5, n: A5, classes: N5 } = ae("switch"), R5 = ["aria-checked"], V5 = ["tabindex"];
function L5(e, n) {
  const r = x("var-hover-overlay"), t = x("var-form-details"), a = _e("ripple"), o = _e("hover");
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
  }, null, 8, ["hovering", "focusing"])], 46, V5)), [[a, { disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly }]])], 6), U(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 10, R5)), [[
    o,
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
    const n = O(null), r = O(!1), { bindForm: t, form: a } = Wn(), { errorMessage: o, validateWithTrigger: i, validate: l, resetValidation: s } = xn(), { hovering: u, handleHovering: d } = ur(), c = S(() => e.modelValue === e.activeValue), f = S(() => {
      const { size: z, color: P, closeColor: N, loadingColor: H, variant: M } = e;
      return {
        handle: {
          width: nr(z),
          height: nr(z),
          backgroundColor: c.value ? P : N,
          color: H
        },
        ripple: {
          left: c.value ? nr(z, 0.5) : `-${nr(z, M ? 1 / 3 : 0.5)}`,
          color: c.value ? P : N || "currentColor",
          width: nr(z, 2),
          height: nr(z, 2)
        },
        track: {
          width: nr(z, M ? 13 / 6 : 1.9),
          height: nr(z, M ? 4 / 3 : 0.72),
          borderRadius: nr(z, 2 / 3),
          filter: c.value || o?.value ? void 0 : `brightness(${M ? 1 : 0.6})`,
          backgroundColor: c.value ? P : N,
          borderWidth: M && !c.value ? nr(z, 1 / 12) : void 0
        },
        switch: {
          width: nr(z, M ? 13 / 6 : 2),
          height: nr(z, M ? 4 / 3 : 1.2)
        }
      };
    }), v = S(() => nr(e.size, 0.8));
    C(t, {
      reset: T,
      validate: m,
      resetValidation: s
    }), xe(() => window, "keydown", g), xe(() => window, "keyup", h);
    function g(z) {
      r.value && ((z.key === " " || z.key === "Enter") && Ze(z), z.key === "Enter" && n.value.click());
    }
    function h(z) {
      !r.value || z.key !== " " || (Ze(z), n.value.click());
    }
    function m() {
      return l(e.rules, e.modelValue);
    }
    function w(z) {
      Ne(() => {
        const { validateTrigger: P, rules: N, modelValue: H } = e;
        i(P, z, N, H);
      });
    }
    function $(z) {
      const { onClick: P, onChange: N, disabled: H, loading: M, readonly: R, activeValue: E, inactiveValue: D, lazyChange: A, "onUpdate:modelValue": I, onBeforeChange: B } = e;
      if (H || a?.disabled.value || (C(P, z), M || R || a?.readonly.value)) return;
      const j = c.value ? D : E;
      A ? C(B, j, (K) => {
        C(I, K), w("onLazyChange");
      }) : (C(I, j), C(N, j), w("onChange"));
    }
    function y(z) {
      e.disabled || a?.disabled.value || d(z);
    }
    function T() {
      C(e["onUpdate:modelValue"], e.inactiveValue), s();
    }
    return {
      isActive: c,
      switchRef: n,
      hovering: u,
      isFocusing: r,
      radius: v,
      styleComputed: f,
      errorMessage: o,
      formDisabled: a?.disabled,
      formReadonly: a?.readonly,
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
  const { childProviders: e, bindChildren: n, length: r } = Bn(Jb);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function H5() {
  const { parentProvider: e, bindParent: n, index: r } = Dn(Jb);
  return ar(!!n, "Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var { name: U5, n: oo, classes: j5 } = ae("tab");
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
    const n = O(null), r = S(() => n.value), t = S(() => e.name), a = S(() => e.disabled), { index: o, tabs: i, bindTabs: l } = H5(), { onTabClick: s, active: u, activeColor: d, inactiveColor: c, disabledColor: f, itemDirection: v, resize: g } = i, h = {
      name: t,
      index: o,
      disabled: a,
      element: r
    };
    l(h), me(() => [e.name, e.disabled], g);
    function m() {
      return e.name != null ? u.value === e.name : u.value === o?.value;
    }
    function w() {
      return e.disabled ? f.value : m() ? d.value : c.value;
    }
    function $() {
      return e.disabled ? oo("$-tab--disabled") : m() ? oo("$-tab--active") : oo("$-tab--inactive");
    }
    function y(T) {
      const { disabled: z, name: P, onClick: N } = e;
      z || (C(N, P ?? o.value, T), s(h));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: c,
      itemDirection: v,
      n: oo,
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
var s7 = Sl, Pu = Sl, xb = { name: [String, Number] }, { name: W5, n: K5, classes: q5 } = ae("tab-item");
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
  components: { VarSwipeItem: Oa },
  props: xb,
  setup(e) {
    const n = O(!1), r = S(() => e.name), { index: t, bindTabsItems: a } = Ez(), { bindLists: o } = Dz(), i = {
      index: t,
      name: r,
      current: S(() => n.value),
      setCurrent: l
    };
    a(i), o(i);
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
}, { name: G5, n: Z5, classes: J5 } = ae("table");
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
  indicatorVariant: {
    type: String,
    default: "full"
  },
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
  stickyCssMode: Fe(pa, "cssMode"),
  stickyZIndex: Fe(pa, "zIndex"),
  offsetTop: Fe(pa, "offsetTop"),
  onClick: V(),
  onChange: V(),
  "onUpdate:active": V()
}, Rv = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: x5, n: _5, classes: eE } = ae("tabs");
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
      class: p(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`), [e.indicatorVariant === "short", e.n("--indicator-short")])),
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
  components: { VarSticky: Ta },
  inheritAttrs: !1,
  props: r0,
  setup(e) {
    const n = O("0px"), r = O("0px"), t = O("0px"), a = O("0px"), o = O(!1), i = O(null), l = S(() => e.active), s = S(() => e.activeColor), u = S(() => e.inactiveColor), d = S(() => e.disabledColor), c = S(() => e.itemDirection), f = O(null), v = S(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: g, bindTabList: h, length: m } = F5();
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
    function w(R) {
      var E;
      const D = (E = R.name.value) != null ? E : R.index.value, { active: A, onChange: I, onClick: B } = e;
      C(e["onUpdate:active"], D), C(B, D), D !== A && C(I, D);
    }
    function $() {
      return g.find(({ name: R }) => e.active === R.value);
    }
    function y(R) {
      return g.find(({ index: E }) => (R ?? e.active) === E.value);
    }
    function T() {
      if (m.value === 0) return;
      const { active: R } = e;
      if (tr(R)) {
        const E = hn(R, 0, m.value - 1);
        return C(e["onUpdate:active"], E), y(E);
      }
    }
    function z() {
      o.value = e.scrollable === "always" || g.length >= 5;
    }
    function P({ element: R }) {
      const E = R.value;
      E && (e.layoutDirection === "horizontal" ? (n.value = `${E.offsetWidth}px`, t.value = `${E.offsetLeft}px`) : (r.value = `${E.offsetHeight}px`, a.value = `${E.offsetTop}px`));
    }
    function N({ element: R }) {
      if (!o.value) return;
      const E = i.value, D = R.value;
      if (e.layoutDirection === "horizontal") {
        const A = D.offsetLeft + D.offsetWidth / 2 - E.offsetWidth / 2;
        ga(E, {
          left: A,
          animation: us
        });
      } else {
        const A = D.offsetTop + D.offsetHeight / 2 - E.offsetHeight / 2;
        ga(E, {
          top: A,
          animation: us
        });
      }
    }
    function H() {
      const R = $() || y() || T();
      !R || R.disabled.value || (z(), P(R), N(R));
    }
    function M() {
      return Rv(this, null, function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
    }
    return {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: t,
      indicatorY: a,
      indicatorPosition: v,
      localScrollable: o,
      scrollerEl: i,
      Transition: bn,
      toSizeUnit: Te,
      n: _5,
      classes: eE,
      resize: H,
      resizeSticky: M,
      formatElevation: zn
    };
  }
});
t0.render = nE;
var Ol = t0;
ue(Ol);
fe(Ol, r0);
var c7 = Ol, Tu = Ol, a0 = {
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
}, rE = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: tE, n: aE } = ae("tabs-items");
function oE(e, n) {
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
  name: tE,
  components: { VarSwipe: Pa },
  props: a0,
  setup(e) {
    const n = O(null), { tabItemList: r, bindTabItem: t, length: a } = Tz();
    t({}), me(() => e.active, s), me(() => a.value, () => rE(null, null, function* () {
      yield Gn(), s(e.active);
    }));
    function o(c) {
      return r.find(({ name: f }) => c === f.value);
    }
    function i(c) {
      return r.find(({ index: f }) => c === f.value);
    }
    function l(c) {
      return o(c) || i(c);
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
      n: aE,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
o0.render = oE;
var zl = o0;
ue(zl);
fe(zl, a0);
var f7 = zl, Eu = zl;
function gd(e, n) {
  return Object.entries(e).reduce((r, [t, a]) => (r[t] = a.includes("px") ? a.replace(/(\d+(\.\d+)?)px/g, (o, i) => n(i)) : a, r), {});
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
}, DE = {
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
}, BE = {
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
}, eD = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, nD = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, rD = {
  "--rail-navigation-width": "80px",
  "--rail-navigation-background": "var(--color-surface-container-high)",
  "--rail-navigation-border-color": "var(--color-outline)",
  "--rail-navigation-padding": "12px 0",
  "--rail-navigation-start-padding": "4px 0",
  "--rail-navigation-end-padding": "4px 0",
  "--rail-navigation-item-gap": "4px"
}, tD = {
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
}, aD = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, oD = {
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
}, iD = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, lD = {
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
}, sD = {
  "--segmented-buttons-border-color": "var(--color-outline)",
  "--segmented-buttons-border-radius": "4px",
  "--segmented-buttons-border-width": "1px",
  "--segmented-buttons-error-border-color": "var(--color-danger)",
  "--segmented-buttons-error-color": "var(--color-danger)",
  "--segmented-buttons-error-checked-background": "hsla(var(--hsl-danger), 0.12)"
}, uD = {
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
}, dD = {
  "--shimmer-text-color": "var(--color-on-surface-variant)",
  "--shimmer-text-highlight-color": "#000",
  "--shimmer-text-duration": "1.4s",
  "--shimmer-text-angle": "100deg"
}, cD = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "#fff",
  "--signature-height": "200px",
  "--signature-border-radius": "4px"
}, fD = {
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
}, vD = {
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
}, pD = {
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
}, mD = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, gD = {
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
}, hD = {
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
}, bD = {
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
}, yD = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, wD = {
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
}, kD = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%",
  "--tabs-short-indicator-size": "3px",
  "--tabs-short-indicator-inner-size": "32px",
  "--tabs-short-indicator-border-radius": "3px"
}, $D = {
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
}, SD = {
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
}, CD = {
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
}, PD = {
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
}, OD = { "--watermark-content-color": "#ffffff" }, zD = Object.defineProperty, Vv = Object.getOwnPropertySymbols, TD = Object.prototype.hasOwnProperty, ED = Object.prototype.propertyIsEnumerable, Lv = (e, n, r) => n in e ? zD(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ce = (e, n) => {
  for (var r in n || (n = {})) TD.call(n, r) && Lv(e, r, n[r]);
  if (Vv)
    for (var r of Vv(n)) ED.call(n, r) && Lv(e, r, n[r]);
  return e;
}, DD = Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce({
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
}, gE), lE), bE), hE), $D), OE), zE), fD), kD), yD), xE), TE), iE), wE), fE), PD), $E), eD), bD), gD), ZE), wD), BE), nD), yE), lD), sD), EE), QE), sE), pE), YE), oD), mE), uE), FE), _E), qE), OD), KE), WE), dE), cE), vE), SE), CE), PE), rD), tD), DE), IE), ME), AE), NE), RE), VE), LE), XE), HE), UE), jE), GE), JE), aD), iD), vD), pD), mD), hD), SD), CD), uD), kE), dD), cD), BD = {
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
}, ID = {
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
}, MD = {
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
}, AD = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, ND = { "--avatar-group-offset": "-10px" }, RD = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, VD = {
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
}, LD = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, FD = {
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
}, HD = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, UD = {
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
}, jD = {
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
}, YD = {
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
}, WD = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, KD = {
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
}, qD = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, XD = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, GD = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, ZD = {
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
}, JD = {
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
}, QD = {
  "--date-input-picker-width": "320px",
  "--date-input-time-select-separator-color": "var(--color-on-surface-variant)",
  "--date-input-time-select-border-color": "var(--color-outline)",
  "--date-input-time-select-active-color": "var(--color-primary)"
}, xD = {
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
}, _D = {
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
}, eB = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, nB = {
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
}, rB = {
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
}, tB = {
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
}, aB = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, oB = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, iB = { "--icon-size": "20px" }, lB = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "8px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, sB = {
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
}, uB = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, dB = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, cB = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, fB = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, vB = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, pB = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px",
  "--menu-large-border-radius": "16px"
}, mB = {
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
}, gB = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-large-border-radius": "16px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, hB = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, bB = {
  "--otp-input-gutter": "8px",
  "--otp-input-cell-height": "48px",
  "--otp-input-cell-max-width": "48px",
  "--otp-input-input-font-size": "20px"
}, yB = { "--overlay-background-color": "rgba(0, 0, 0, 0.6)" }, wB = {
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
}, kB = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-surface-low-background": "#1c1b1d",
  "--paper-outlined-background": "transparent",
  "--paper-filled-background": "var(--color-surface-container-highest)",
  "--paper-outline-color": "var(--color-outline)",
  "--paper-border-radius": "12px",
  "--paper-active-color": "var(--color-primary)",
  "--paper-active-opacity": "0.2"
}, $B = {
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
}, SB = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, CB = {
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
}, PB = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, OB = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, zB = {
  "--rail-navigation-width": "80px",
  "--rail-navigation-background": "var(--color-surface-container)",
  "--rail-navigation-border-color": "var(--color-outline)",
  "--rail-navigation-padding": "12px 0",
  "--rail-navigation-start-padding": "4px 0",
  "--rail-navigation-end-padding": "4px 0",
  "--rail-navigation-item-gap": "4px"
}, TB = {
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
}, EB = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, DB = {
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
}, BB = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, IB = {
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
}, MB = {
  "--segmented-buttons-border-color": "#938F99",
  "--segmented-buttons-border-radius": "100px",
  "--segmented-buttons-border-width": "1px",
  "--segmented-buttons-error-border-color": "var(--color-danger)",
  "--segmented-buttons-error-color": "var(--color-danger)",
  "--segmented-buttons-error-checked-background": "hsla(var(--hsl-danger), 0.12)"
}, AB = {
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
}, NB = {
  "--shimmer-text-color": "var(--color-on-surface-variant)",
  "--shimmer-text-highlight-color": "#000",
  "--shimmer-text-duration": "1.4s",
  "--shimmer-text-angle": "100deg"
}, RB = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "var(--color-inverse-surface)",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, VB = {
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
}, LB = {
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
}, FB = {
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
}, HB = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, UB = {
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
}, jB = {
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
}, YB = {
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
}, WB = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, KB = {
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
}, qB = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%",
  "--tabs-short-indicator-size": "3px",
  "--tabs-short-indicator-inner-size": "32px",
  "--tabs-short-indicator-border-radius": "3px"
}, XB = {
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
}, GB = {
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
}, ZB = {
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
}, JB = {
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
}, QB = { "--watermark-content-color": "#ffffff" }, xB = Object.defineProperty, Fv = Object.getOwnPropertySymbols, _B = Object.prototype.hasOwnProperty, eI = Object.prototype.propertyIsEnumerable, Hv = (e, n, r) => n in e ? xB(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Pe = (e, n) => {
  for (var r in n || (n = {})) _B.call(n, r) && Hv(e, r, n[r]);
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
}, UD), ID), oB), pB), gB), mB), nB), HD), dB), YD), kB), AD), rB), WD), OB), IB), MB), jD), KD), VD), GB), ZB), CB), qB), WB), UB), eB), KB), wB), QB), XD), DB), MD), LD), FD), FB), BD), _D), PB), SB), $B), tB), RD), AB), hB), ZD), JD), YB), LB), JB), XB), QD), xD), EB), zB), TB), VB), ND), GD), aB), iB), lB), sB), uB), bB), cB), fB), vB), yB), BB), HB), jB), qD), NB), RB), rI = {
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
}, aI = {
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
}, oI = {
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
}, DI = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, BI = { "--icon-size": "20px" }, II = {
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
}, aM = {
  "--segmented-buttons-border-color": "#79747E",
  "--segmented-buttons-border-radius": "100px",
  "--segmented-buttons-border-width": "1px",
  "--segmented-buttons-error-border-color": "var(--color-danger)",
  "--segmented-buttons-error-color": "var(--color-danger)",
  "--segmented-buttons-error-checked-background": "hsla(var(--hsl-danger), 0.12)"
}, oM = {
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
  "--tabs-indicator-inner-size": "100%",
  "--tabs-short-indicator-size": "3px",
  "--tabs-short-indicator-inner-size": "32px",
  "--tabs-short-indicator-border-radius": "3px"
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
}, fI), tI), DI), FI), UI), HI), OI), cI), NI), pI), qI), oI), zI), mI), QI), tM), aM), vI), gI), yM), wM), hM), mM), gM), bI), nM), uI), dI), dM), rI), CI), JI), GI), XI), TI), lI), oM), jI), uM), kM), bM), $I), SI), pM), eM), xI), _I), iI), sI), yI), wI), kI), PI), EI), BI), II), MI), AI), YI), RI), VI), LI), WI), KI), ZI), rM), sM), cM), fM), vM), $M), aI), hI), iM), lM);
function zM(e, n = {}) {
  const { rootFontSize: r = 16, unitPrecision: t = 6 } = n;
  return gd(e, (a) => `${Number((a / r).toFixed(t))}rem`);
}
function TM(e, n = {}) {
  const { viewportWidth: r = 375, viewportUnit: t = "vmin", unitPrecision: a = 6 } = n;
  return gd(e, (o) => `${Number((o / r * 100).toFixed(a))}${t}`);
}
var EM = {
  dark: DD,
  md3Light: OM,
  md3Dark: nI,
  toViewport: TM,
  toRem: zM,
  convert: gd
}, v7 = null, Du = EM, gr = [
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
  const t = gr.findIndex((o) => Z(o) === Z(r)), a = l0(e, n) ? r : rr[t];
  return {
    hourStr: a,
    hourNum: Z(a)
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
  const { time: t, format: a, ampm: o, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: d, hourNum: c } = hd(a, o, i);
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
  const { time: t, format: a, ampm: o, hour: i, minute: l, max: s, min: u, disableHour: d } = e, { hourStr: c, hourNum: f } = hd(a, o, i);
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
    const { hour: h, minute: m, second: w } = sr(s), { hour: $, minute: y, second: T } = sr(u);
    v = h === f && m < l || $ === f && y > l || h === f && m === l && t > w || $ === f && y === l && t < T;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (r = e.allowedTime) == null ? void 0 : r.seconds(t)), v || g;
}, { n: DM, classes: BM } = ae("time-picker");
function IM(e, n) {
  return b(), k("div", { class: p(e.n("clock")) }, [
    L("div", {
      class: p(e.n("clock-hand")),
      style: J(e.handStyle)
    }, null, 6),
    (b(!0), k(Be, null, Ye(e.timeScales, (r, t) => (b(), k("div", {
      key: r,
      class: p(e.classes(e.n("clock-item"), [e.isActive(t, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
      style: J(e.getStyle(t, r, !1))
    }, ve(r), 7))), 128)),
    e.format === "24hr" && e.type === "hour" ? (b(), k("div", {
      key: 0,
      ref: "inner",
      class: p(e.n("clock-inner"))
    }, [(b(!0), k(Be, null, Ye(e.hours24, (r, t) => (b(), k("div", {
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
    const r = O(null), t = O([]), a = O([]), o = S(() => ({
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
        return a.value.includes(m);
      }
      return s(h, !0);
    }, f = (h, m, w) => {
      const $ = 2 * Math.PI / 12 * h - Math.PI / 2, y = 50 * (1 + Math.cos($)), T = 50 * (1 + Math.sin($)), z = () => d(h, w) ? c(m) ? {
        backgroundColor: "var(--time-picker-clock-item-disable-background)",
        color: "var(--time-picker-clock-item-disable-color)"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: P, color: N } = z();
      return {
        left: `${y}%`,
        top: `${T}%`,
        backgroundColor: P,
        color: N
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
      const y = m ? rr[i.value] : g(), T = e.useSeconds ? `:${e.time.second}` : "", z = `${y}:${e.time.minute}${T}`;
      e.preventNextUpdate || n("update", z), n("change-prevent-update");
    }), me(() => e.rad, (h, m) => {
      if (e.type === "hour" || h === void 0 || m === void 0) return;
      const w = h / 6 >= 0 ? h / 6 : h / 6 + 60;
      if (w === (m / 6 >= 0 ? m / 6 : m / 6 + 60)) return;
      let $;
      const { hourStr: y } = hd(e.format, e.ampm, e.time.hour);
      if (e.type === "minute" && ($ = `${y}:${ln().minute(w).format("mm")}${e.useSeconds ? `:${e.time.second}` : ""}`), e.type === "second") {
        const T = ln().second(w).format("ss"), z = e.useSeconds ? `:${T}` : "";
        $ = `${y}:${e.time.minute}${z}`;
      }
      n("update", $);
    }), me([
      () => e.max,
      () => e.min,
      () => e.allowedTime
    ], ([h, m, w]) => {
      if (t.value = [], h && !m) {
        const { hour: $ } = sr(h), y = gr.filter((z) => Z(z) > $), T = rr.filter((z) => Z(z) > $);
        t.value = [...y, ...T];
      }
      if (!h && m) {
        const { hour: $ } = sr(m), y = gr.filter((z) => Z(z) < $), T = rr.filter((z) => Z(z) < $);
        t.value = [...y, ...T];
      }
      if (h && m) {
        const { hour: $ } = sr(h), { hour: y } = sr(m), T = gr.filter((P) => Z(P) < y || Z(P) > $), z = rr.filter((P) => Z(P) < y || Z(P) > $);
        t.value = [...T, ...z];
      }
      if (w?.hours) {
        const { hours: $ } = w, y = gr.filter((z) => !$(Z(z))), T = rr.filter((z) => !$(Z(z)));
        t.value = [.../* @__PURE__ */ new Set([
          ...t.value,
          ...y,
          ...T
        ])];
      }
      a.value = t.value.map(($) => rr.findIndex((y) => $ === y)).filter(($) => $ >= 0);
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: DM,
      classes: BM,
      hours24: rr,
      timeScales: l,
      inner: r,
      handStyle: o,
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
var MM = d0, { name: AM, n: NM, classes: RM } = ae("time-picker");
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
        onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
      }, ve(e.time.hour), 3),
      L("span", { class: p(e.n("title-splitter")) }, ":", 2),
      L("div", {
        class: p(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
        onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
      }, ve(e.time.minute), 3),
      e.useSeconds ? (b(), k("span", {
        key: 0,
        class: p(e.n("title-splitter"))
      }, ":", 2)) : X("v-if", !0),
      e.useSeconds ? (b(), k("div", {
        key: 1,
        class: p(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
        onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
      }, ve(e.time.second), 3)) : X("v-if", !0)
    ], 2), e.format === "ampm" ? (b(), k("div", {
      key: 0,
      class: p(e.n("title-ampm"))
    }, [L("div", {
      class: p(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
      onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
    }, " AM ", 2), L("div", {
      class: p(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
      onClick: n[4] || (n[4] = (a) => e.checkAmpm("pm"))
    }, " PM ", 2)], 2)) : X("v-if", !0)], 2)], 6),
    L("div", { class: p(e.n("body")) }, [L("div", {
      ref: "container",
      class: p(e.n("clock-container")),
      onTouchstart: n[5] || (n[5] = (...a) => e.moveHand && e.moveHand(...a)),
      onTouchmove: n[6] || (n[6] = (...a) => e.moveHand && e.moveHand(...a)),
      onTouchend: n[7] || (n[7] = (...a) => e.end && e.end(...a))
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
    const n = O(null), r = O(null), t = O(null), a = O(!1), o = O(!1), i = O(!1), l = O(!1), s = O(!1), u = O(!1), d = O(!1), c = O(0), f = O(0), v = O(), g = O("hour"), h = O("am"), m = O({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = $n({
      x: 0,
      y: 0
    }), $ = $n({
      x: [],
      y: []
    }), y = S(() => g.value === "hour" ? v.value : g.value === "minute" ? c.value : f.value), { t: T } = kr();
    me(() => e.modelValue, (Q) => {
      if (Q === void 0 || Q === "") {
        z();
        return;
      }
      const { hour: ne, minute: pe, second: $e } = sr(Q), W = ln().hour(ne).format("hh"), oe = ln().hour(ne).format("HH"), Ee = ln().minute(pe).format("mm"), Ue = ln().second($e).format("ss");
      v.value = (W === "12" ? 0 : Z(W)) * 30, c.value = Z(Ee) * 6, f.value = Z(Ue) * 6, m.value = D(Q), e.format !== "24hr" && (h.value = Gr(`${ne}`, 2, "0") === oe && rr.includes(oe) ? "pm" : "am"), a.value = e.format === "24hr" && rr.includes(oe);
    }, { immediate: !0 });
    function z() {
      v.value = void 0, c.value = 0, f.value = 0, m.value = {
        hour: "00",
        minute: "00",
        second: "00"
      }, h.value = "am";
    }
    function P(Q) {
      C(e["onUpdate:modelValue"], Q), C(e.onChange, Q);
    }
    function N(Q) {
      return Q * 57.29577951308232;
    }
    function H(Q) {
      l.value = !1, d.value = !1, g.value = Q;
    }
    function M(Q) {
      const { disableHour: ne } = t.value, pe = gr.findIndex((W) => Z(W) === Z(m.value.hour)), $e = Q === "am" ? gr : rr;
      return [...$e.slice(pe), ...$e.slice(0, pe)].find((W, oe) => (o.value = oe !== 0, !ne.includes(W)));
    }
    function R(Q) {
      if (e.readonly) return;
      h.value = Q;
      const ne = M(Q);
      if (!ne) return;
      const pe = e.useSeconds ? `:${m.value.second}` : "";
      P(`${Gr(ne, 2, "0")}:${m.value.minute}${pe}`);
    }
    function E(Q, ne) {
      const pe = Q >= $.x[0] && Q <= $.x[1], $e = ne >= $.y[0] && ne <= $.y[1];
      return pe && $e;
    }
    function D(Q) {
      const ne = e.format === "24hr" ? "HH" : "hh", { hour: pe, minute: $e, second: W } = sr(Q);
      return {
        hour: ln().hour(pe).format(ne),
        minute: ln().minute($e).format("mm"),
        second: ln().second(W).format("ss")
      };
    }
    function A(Q) {
      const ne = Q / 30;
      return ne >= 0 ? ne : ne + 12;
    }
    function I() {
      const { width: Q, height: ne } = t.value.getSize();
      return {
        rangeXMin: w.x - Q / 2 - 8,
        rangeXMax: w.x + Q / 2 + 8,
        rangeYMin: w.y - ne / 2 - 8,
        rangeYMax: w.y + ne / 2 + 8
      };
    }
    function B(Q, ne, pe) {
      const { disableHour: $e } = t.value;
      i.value = E(Q, ne);
      const W = Math.round(pe / 30) * 30 + 90, oe = A(W), Ee = a.value ? gr[oe] : rr[oe];
      if ($e.includes(Ee) || (a.value = e.format === "24hr" ? E(Q, ne) : !1), a.value !== i.value) return;
      const Ue = a.value || h.value === "pm" ? rr[oe] : gr[oe];
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
        const { rangeXMin: W, rangeXMax: oe, rangeYMin: Ee, rangeYMax: Ue } = I();
        $.x = [W, oe], $.y = [Ee, Ue];
      }
    }
    function ce(Q) {
      if (Ze(Q), e.readonly) return;
      G();
      const { clientX: ne, clientY: pe } = Q.touches[0], $e = ne - w.x, W = pe - w.y, oe = Math.round(N(Math.atan2(W, $e)));
      g.value === "hour" ? B(ne, pe, oe) : g.value === "minute" ? j(oe) : K(oe);
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
      o.value = !1;
    }
    return {
      getRad: y,
      time: m,
      container: n,
      inner: t,
      picker: r,
      isInner: a,
      type: g,
      ampm: h,
      isPreventNextUpdate: o,
      n: NM,
      classes: RM,
      t: gn,
      pt: T,
      moveHand: ce,
      checkPanel: H,
      checkAmpm: R,
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
var p7 = Tl, Bu = Tl, f0 = {
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
}, { n: Xn, classes: Wv } = ae("tree-menu");
function LM(e, n) {
  const r = x("maybe-v-node"), t = x("var-tree-menu-option"), a = x("var-collapse-transition");
  return b(), k("div", { class: p(e.n("option")) }, [e.option.type === "divider" ? (b(), k("div", {
    key: 0,
    class: p(e.n("divider"))
  }, null, 2)) : e.option.type === "group" ? (b(), k(Be, { key: 1 }, [U(r, { is: e.renderGroupLabel() }, null, 8, ["is"]), L("div", null, [(b(!0), k(Be, null, Ye(e.option.children, (o) => (b(), ke(t, {
    key: o.value,
    option: o,
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
  }, null, 8, ["is"])), e.option.hasChildren ? (b(), ke(a, {
    key: 3,
    expand: e.option.expanded
  }, {
    default: se(() => [L("div", { class: p(e.n("children")) }, [(b(!0), k(Be, null, Ye(e.option.children, (o) => (b(), ke(t, {
      key: o.value,
      option: o,
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
    VarCollapseTransition: So,
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
      const s = a(), u = e.option.option.render;
      return u ? u({ node: s }, e.option.option, e.option.active) : s;
    }
    function t() {
      const s = i();
      if (s)
        return Fn("div", { class: Xn("group-label") }, [Fn(lr, { is: s })]);
    }
    function a() {
      return We(Fn("div", {
        class: Wv(Xn("item"), [e.option.active, Xn("--item-active")], [e.option.activePath, Xn("--item-active-path")], [e.option.disabled, Xn("--item-disabled")], [e.ripple && !e.option.disabled, Xn("--item-ripple-enabled")]),
        style: { "--tree-menu-level": e.option.level },
        onClick: n
      }, [Fn("span", { class: Xn("item-indicator") }), Fn("span", { class: Xn("item-content") }, [
        o(),
        Fn("span", { class: Xn("label") }, [Fn(lr, { is: i() })]),
        l()
      ])]), [[vn, { disabled: !e.ripple || e.option.disabled }]]);
    }
    function o() {
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
var FM = v0, { name: HM, n: UM, classes: jM } = ae("tree-menu");
function YM(e, n) {
  const r = x("tree-menu-option");
  return b(), k("nav", {
    class: p(e.classes(e.n(), e.n("$--box"), [e.bordered, e.n("--border")])),
    style: J(e.styles)
  }, [
    e.$slots.start ? F(e.$slots, "start", { key: 0 }) : X("v-if", !0),
    (b(!0), k(Be, null, Ye(e.treeMeta.options, (t) => (b(), ke(r, {
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
    }), a = S(() => e.indent == null ? {} : { "--tree-menu-item-indent": Te(e.indent) });
    me(() => [
      e.options,
      e.valueKey,
      e.labelKey,
      e.iconKey,
      e.childrenKey
    ], () => {
      t.value = o(), i();
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
    function o() {
      const v = /* @__PURE__ */ new Map(), g = h(e.options);
      g.forEach(m);
      function h(w, $, y = 0) {
        return w.reduce((T, z) => {
          if (z.show === !1) return T;
          const P = z.type, N = z[e.valueKey], H = z[e.childrenKey], M = {
            option: z,
            type: P,
            value: N,
            label: z[e.labelKey],
            icon: z[e.iconKey],
            active: !1,
            activePath: !1,
            disabled: !1,
            expanded: !1,
            hasChildren: !1,
            children: [],
            parent: $,
            level: y
          }, R = P === "group" ? y : y + 1;
          return M.children = Ke(H) ? h(H, M, R) : [], M.hasChildren = !P && M.children.length > 0, T.push(M), T;
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
      styles: a,
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
}, io = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: WM, n: KM, classes: qM } = ae("uploader"), XM = 0, GM = ["onClick"], ZM = ["onClick"], JM = ["src", "alt"], QM = ["tabindex"], xM = [
  "multiple",
  "accept",
  "capture",
  "disabled"
], _M = ["src"];
function eA(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), a = x("var-form-details"), o = x("var-popup"), i = _e("ripple"), l = _e("hover");
  return b(), k("div", { class: p(e.classes(e.n(), e.n("$--box"))) }, [
    L("div", { class: p(e.n("file-list")) }, [(b(!0), k(Be, null, Ye(e.files, (s) => We((b(), k("div", {
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
    U(a, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText
    }, Pr({ _: 2 }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: se(() => [F(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"]),
    U(o, {
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
    const n = O(!1), r = O(null), t = O(null), a = O(!1), o = O(null), i = S(() => {
      const { maxlength: de, modelValue: { length: Q } } = e;
      return tr(de) ? `${Q} / ${de}` : "";
    }), { form: l, bindForm: s } = Wn(), { errorMessage: u, validateWithTrigger: d, validate: c, resetValidation: f } = xn(), { hovering: v, handleHovering: g } = ur(), h = S(() => {
      const { modelValue: de, hideList: Q } = e;
      return Q ? [] : de;
    });
    let m = !1;
    const w = {
      getSuccess: A,
      getError: I,
      getLoading: B
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
    function T(de) {
      const { disabled: Q, previewed: ne, preventDefaultPreview: pe, onPreview: $e } = e;
      if (l?.disabled.value || Q || !ne || (C($e, $n(de)), pe)) return;
      const { url: W } = de;
      if (Bc(W)) {
        za(W);
        return;
      }
      Ic(W) && (o.value = de, a.value = !0);
    }
    function z(de) {
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
    function N(de) {
      return io(this, null, function* () {
        const Q = de.file;
        if (e.resolveType === "default" && Q.type.startsWith("image") || e.resolveType === "data-url") {
          const ne = yield j0(Q);
          de.cover = ne, de.url = ne;
        }
        return de;
      });
    }
    function H(de) {
      return de.map(N);
    }
    function M(de) {
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
    function R(de) {
      return io(this, null, function* () {
        const { maxsize: Q, maxlength: ne, modelValue: pe, onOversize: $e, onAfterRead: W, onBeforeFilter: oe, readonly: Ee, disabled: Ue } = e;
        if (l?.disabled.value || l?.readonly.value || Ue || Ee) return;
        const nn = (Y) => Y.filter((re) => re.file.size > Z(Q) ? (C($e, $n(re)), !1) : !0), Xe = (Y) => {
          const re = Math.min(Y.length, Z(ne) - pe.length);
          return Y.slice(0, re);
        }, en = (Y) => io(null, null, function* () {
          if (!oe) return Y;
          const re = Kr(oe);
          for (const we of re) Y = yield we(Y);
          return Y;
        });
        let an = P(de).map(z);
        an = yield en(an), an = Q != null ? nn(an) : an, an = ne != null ? Xe(an) : an;
        const ye = yield Promise.all(H(an)), _ = (yield Promise.all(M(ye))).filter(({ valid: Y }) => Y).map(({ varFile: Y }) => Y);
        C(e["onUpdate:modelValue"], [...pe, ..._]), de.target.value = "", _.forEach((Y) => C(W, $n(Y)));
      });
    }
    function E(de) {
      return io(this, null, function* () {
        const { disabled: Q, readonly: ne, modelValue: pe, onBeforeRemove: $e, onRemove: W } = e;
        if (l?.disabled.value || l?.readonly.value || Q || ne) return;
        if ($e) {
          const Ee = Kr(C($e, $n(de)));
          if ((yield Promise.all(Ee)).some((Ue) => !Ue)) return;
        }
        const oe = pe.filter((Ee) => Ee !== de);
        C(W, $n(de)), G("onRemove"), C(e["onUpdate:modelValue"], oe);
      });
    }
    function D(de) {
      if (!(l?.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          C(e.onClickAction, j, de);
          return;
        }
        j();
      }
    }
    function A() {
      return e.modelValue.filter((de) => de.state === "success");
    }
    function I() {
      return e.modelValue.filter((de) => de.state === "error");
    }
    function B() {
      return e.modelValue.filter((de) => de.state === "loading");
    }
    function j() {
      t.value.click();
    }
    function K() {
      o.value = null, a.value = !1, za.close();
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
      showPreview: a,
      currentPreview: o,
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
      isHTMLSupportImage: Bc,
      preview: T,
      handleChange: R,
      handleRemove: E,
      getSuccess: A,
      getError: I,
      getLoading: B,
      validate: ce,
      resetValidation: f,
      reset: ge,
      chooseFile: j,
      closePreview: K,
      handleActionClick: D,
      toSizeUnit: Te
    };
  }
});
g0.render = eA;
var Dl = g0;
ue(Dl);
fe(Dl, m0);
var g7 = Dl, Mu = Dl, h0 = {
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
}, nA = Object.defineProperty, rA = Object.defineProperties, tA = Object.getOwnPropertyDescriptors, Kv = Object.getOwnPropertySymbols, aA = Object.prototype.hasOwnProperty, oA = Object.prototype.propertyIsEnumerable, qv = (e, n, r) => n in e ? nA(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, iA = (e, n) => {
  for (var r in n || (n = {})) aA.call(n, r) && qv(e, r, n[r]);
  if (Kv)
    for (var r of Kv(n)) oA.call(n, r) && qv(e, r, n[r]);
  return e;
}, lA = (e, n) => rA(e, tA(n)), sA = (e, n, r) => new Promise((t, a) => {
  var o = (s) => {
    try {
      l(r.next(s));
    } catch (u) {
      a(u);
    }
  }, i = (s) => {
    try {
      l(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(o, i);
  l((r = r.apply(e, n)).next());
}), { name: uA, n: dA, classes: cA } = ae("watermark"), fA = { ref: "svgRef" }, vA = [
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
    const r = O(""), t = O(""), a = O(""), o = O(null), i = O(null);
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
        a.value = Ur(i.value).color, e.image && (t.value = yield s()), yield Ne(), d(), r.value = u(o.value.innerHTML);
      });
    }
    return {
      svgRef: o,
      containerRef: i,
      watermarkUrl: r,
      imageUrl: t,
      textColor: a,
      n: dA,
      classes: cA,
      showContent: l,
      resize: c
    };
  }
});
b0.render = gA;
var Bl = b0;
ue(Bl);
fe(Bl, h0);
var h7 = Bl, Au = Bl, hA = "3.20.11";
function bA(e) {
  rs.install && e.use(rs), ts.install && e.use(ts), as.install && e.use(as), ls.install && e.use(ls), cs.install && e.use(cs), fs.install && e.use(fs), vs.install && e.use(vs), ka.install && e.use(ka), ps.install && e.use(ps), ms.install && e.use(ms), gs.install && e.use(gs), hs.install && e.use(hs), Jn.install && e.use(Jn), bs.install && e.use(bs), ys.install && e.use(ys), ws.install && e.use(ws), dt.install && e.use(dt), ks.install && e.use(ks), $o.install && e.use($o), Ss.install && e.use(Ss), Cs.install && e.use(Cs), Ps.install && e.use(Ps), Os.install && e.use(Os), So.install && e.use(So), vr.install && e.use(vr), zs.install && e.use(zs), Bs.install && e.use(Bs), Rs.install && e.use(Rs), Vs.install && e.use(Vs), Ls.install && e.use(Ls), To.install && e.use(To), Hs.install && e.use(Hs), Us.install && e.use(Us), Do.install && e.use(Do), js.install && e.use(js), Ys.install && e.use(Ys), ha.install && e.use(ha), Ws.install && e.use(Ws), Ks.install && e.use(Ks), Hn.install && e.use(Hn), qs.install && e.use(qs), jn.install && e.use(jn), Zn.install && e.use(Zn), Je.install && e.use(Je), Xs.install && e.use(Xs), za.install && e.use(za), Gs.install && e.use(Gs), Zs.install && e.use(Zs), Ft.install && e.use(Ft), wa.install && e.use(wa), Js.install && e.use(Js), Qs.install && e.use(Qs), St.install && e.use(St), xs.install && e.use(xs), es.install && e.use(es), _s.install && e.use(_s), Yt.install && e.use(Yt), Ht.install && e.use(Ht), Wt.install && e.use(Wt), Io.install && e.use(Io), eu.install && e.use(eu), nu.install && e.use(nu), zo.install && e.use(zo), ru.install && e.use(ru), tu.install && e.use(tu), st.install && e.use(st), au.install && e.use(au), ou.install && e.use(ou), Sa.install && e.use(Sa), iu.install && e.use(iu), lu.install && e.use(lu), su.install && e.use(su), uu.install && e.use(uu), du.install && e.use(du), vn.install && e.use(vn), cu.install && e.use(cu), Mo.install && e.use(Mo), fu.install && e.use(fu), vu.install && e.use(vu), pu.install && e.use(pu), mu.install && e.use(mu), gu.install && e.use(gu), hu.install && e.use(hu), yu.install && e.use(yu), wu.install && e.use(wu), ku.install && e.use(ku), $u.install && e.use($u), Ta.install && e.use(Ta), Su.install && e.use(Su), Pa.install && e.use(Pa), Oa.install && e.use(Oa), Cu.install && e.use(Cu), Pu.install && e.use(Pu), Ou.install && e.use(Ou), zu.install && e.use(zu), Tu.install && e.use(Tu), Eu.install && e.use(Eu), Du.install && e.use(Du), Bu.install && e.use(Bu), Bo.install && e.use(Bo), Iu.install && e.use(Iu), Mu.install && e.use(Mu), Au.install && e.use(Au);
}
var b7 = {
  version: hA,
  install: bA,
  ActionSheet: rs,
  Alert: ts,
  AppBar: as,
  AutoComplete: ls,
  Avatar: cs,
  AvatarGroup: fs,
  BackTop: vs,
  Badge: ka,
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
  Chip: $o,
  Code: Ss,
  Col: Cs,
  Collapse: Ps,
  CollapseItem: Os,
  CollapseTransition: So,
  Context: vr,
  CountTo: zs,
  Countdown: Bs,
  Counter: Rs,
  DataTable: Vs,
  DateInput: Ls,
  DatePicker: To,
  Dialog: Hs,
  Divider: Us,
  Drag: Do,
  Ellipsis: js,
  Fab: Ys,
  FieldDecorator: ha,
  FloatingPanel: Ws,
  Form: Ks,
  FormDetails: Hn,
  HighlighterProvider: qs,
  Hover: jn,
  HoverOverlay: Zn,
  Icon: Je,
  Image: Xs,
  ImagePreview: za,
  IndexAnchor: Gs,
  IndexBar: Zs,
  Input: Ft,
  Lazy: wa,
  Link: Js,
  List: Qs,
  Loading: St,
  LoadingBar: xs,
  Locale: es,
  LocaleProvider: _s,
  Menu: Yt,
  MenuOption: Ht,
  MenuSelect: Wt,
  Option: Io,
  OtpInput: eu,
  Overlay: nu,
  Pagination: zo,
  Paper: ru,
  Picker: tu,
  Popup: st,
  Progress: au,
  PullRefresh: ou,
  Radio: Sa,
  RadioGroup: iu,
  RailNavigation: lu,
  RailNavigationItem: su,
  Rate: uu,
  Result: du,
  Ripple: vn,
  Row: cu,
  SegmentedButton: Mo,
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
  Sticky: Ta,
  StyleProvider: Su,
  Swipe: Pa,
  SwipeItem: Oa,
  Switch: Cu,
  Tab: Pu,
  TabItem: Ou,
  Table: zu,
  Tabs: Tu,
  TabsItems: Eu,
  Themes: Du,
  TimePicker: Bu,
  Tooltip: Bo,
  TreeMenu: Iu,
  Uploader: Mu,
  Watermark: Au
};
export {
  rs as ActionSheet,
  ts as Alert,
  as as AppBar,
  ls as AutoComplete,
  cs as Avatar,
  fs as AvatarGroup,
  vs as BackTop,
  ka as Badge,
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
  $o as Chip,
  Ss as Code,
  Cs as Col,
  Ps as Collapse,
  Os as CollapseItem,
  So as CollapseTransition,
  vr as Context,
  zs as CountTo,
  Bs as Countdown,
  Rs as Counter,
  Vs as DataTable,
  Ls as DateInput,
  To as DatePicker,
  Hs as Dialog,
  Us as Divider,
  Do as Drag,
  js as Ellipsis,
  Ys as Fab,
  ha as FieldDecorator,
  Ws as FloatingPanel,
  Ks as Form,
  Hn as FormDetails,
  qs as HighlighterProvider,
  jn as Hover,
  Zn as HoverOverlay,
  Je as Icon,
  Xs as Image,
  za as ImagePreview,
  Gs as IndexAnchor,
  Zs as IndexBar,
  Ft as Input,
  wa as Lazy,
  Js as Link,
  Qs as List,
  St as Loading,
  xs as LoadingBar,
  es as Locale,
  _s as LocaleProvider,
  Yt as Menu,
  Ht as MenuOption,
  Wt as MenuSelect,
  Io as Option,
  eu as OtpInput,
  nu as Overlay,
  ds as PIXEL,
  zo as Pagination,
  ru as Paper,
  tu as Picker,
  st as Popup,
  au as Progress,
  ou as PullRefresh,
  Sa as Radio,
  iu as RadioGroup,
  lu as RailNavigation,
  su as RailNavigationItem,
  uu as Rate,
  du as Result,
  vn as Ripple,
  cu as Row,
  Rb as SNACKBAR_TYPE,
  Mo as SegmentedButton,
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
  Ta as Sticky,
  Su as StyleProvider,
  Pa as Swipe,
  Oa as SwipeItem,
  Cu as Switch,
  Pu as Tab,
  Ou as TabItem,
  zu as Table,
  Tu as Tabs,
  Eu as TabsItems,
  Du as Themes,
  Bu as TimePicker,
  Bo as Tooltip,
  Iu as TreeMenu,
  Mu as Uploader,
  Au as Watermark,
  DA as _ActionSheetComponent,
  BA as _AlertComponent,
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
  aN as _ColComponent,
  oN as _CollapseComponent,
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
  DN as _IndexAnchorComponent,
  BN as _IndexBarComponent,
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
  a7 as _StepComponent,
  o7 as _StepsComponent,
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
  Bp as actionSheetProps,
  qu as add,
  Mp as alertProps,
  Np as appBarProps,
  Sm as avatarGroupProps,
  km as avatarProps,
  Em as backTopProps,
  Bm as badgeProps,
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
  ag as collapseProps,
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
  ah as fabProps,
  Na as fieldDecoratorProps,
  Vp as formDetailsProps,
  lh as formProps,
  Cp as hoverOverlayProps,
  pn as iconProps,
  gm as imageCache,
  ph as imagePreviewProps,
  dh as imageProps,
  hh as indexAnchorProps,
  wh as indexBarProps,
  Ko as inputProps,
  bA as install,
  $h as linkProps,
  Ch as listProps,
  Vz as loadingBarProps,
  jr as loadingProps,
  Xp as menuOptionProps,
  _u as menuProps,
  yo as menuSelectProps,
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
  Bg as radioProps,
  tb as railNavigationItemProps,
  eb as railNavigationProps,
  ob as rateProps,
  lb as resultProps,
  mb as rowProps,
  hb as segmentedButtonProps,
  wb as segmentedButtonsProps,
  $b as selectProps,
  Pb as shimmerTextProps,
  zb as signatureProps,
  Eb as skeletonProps,
  Bb as sliderProps,
  pd as snackbarProps,
  Fb as spaceProps,
  Hb as stepProps,
  Yb as stepsProps,
  pa as stickyProps,
  Kb as styleProviderProps,
  dd as swipeProps,
  Xb as switchProps,
  gn as t,
  xb as tabItemProps,
  Zb as tabProps,
  e0 as tableProps,
  a0 as tabsItemsProps,
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
  op as zhHK,
  Wu as zhTW
};
