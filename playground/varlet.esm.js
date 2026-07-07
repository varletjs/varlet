import { Comment as m0, Fragment as Be, Teleport as Ur, Transition as bn, TransitionGroup as g0, computed as C, createApp as h0, createBlock as we, createCommentVNode as q, createElementBlock as k, createElementVNode as L, createSlots as Pr, createTextVNode as Le, createVNode as j, defineComponent as te, getCurrentInstance as St, guardReactiveProps as Aa, h as Fn, inject as Mu, isRef as Wv, isVNode as b0, mergeProps as Xe, nextTick as Ne, normalizeClass as m, normalizeProps as yt, normalizeStyle as J, onActivated as vt, onBeforeMount as y0, onBeforeUnmount as Pt, onDeactivated as Ot, onMounted as Tr, onUnmounted as Bo, onUpdated as qt, openBlock as b, provide as Au, reactive as $n, ref as P, renderList as Ye, renderSlot as U, resolveComponent as x, resolveDirective as _e, resolveDynamicComponent as Xt, shallowReactive as w0, shallowRef as k0, toDisplayString as ve, unref as Na, useSlots as $0, vModelText as qv, vShow as yr, watch as me, withCtx as ue, withDirectives as Ke, withKeys as yd, withModifiers as Rn } from "vue";
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
var C0 = {
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
var fA = Xl(C0, { path: "/" });
function hn(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
function S0(e, n) {
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
var { hasOwnProperty: P0 } = Object.prototype;
function mo(e, n) {
  return P0.call(e, n);
}
function pa() {
  return Er() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
var O0 = Object.prototype.toString;
function z0(e) {
  return O0.call(e);
}
function zn(e) {
  return z0(e).slice(8, -1);
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
function T0(e, n, r) {
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
  return T0(e, n, () => {
  });
}
function nr(e) {
  return typeof e == "number";
}
function Xv(e) {
  return nr(e) || Sn(e) && /^[-+]?\d+$/.test(e);
}
function It(e) {
  return !!e;
}
function Gv(e) {
  return e === window;
}
function E0() {
  return Er() && "ontouchstart" in window;
}
function I0(e, n) {
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
function B0(e, n, r = "start") {
  let t = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && t >= 0 && t <= e.length - 1; ) {
    if (n(e[t], t, e)) return [e[t], t];
    r === "start" ? t++ : t--;
  }
  return [null, -1];
}
function D0(e) {
  return e.filter((n) => n != null);
}
function qr(e) {
  return We(e) ? e : [e];
}
function ma(e) {
  const n = Ra();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function M0(...e) {
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
function Zv(e) {
  return e.replace(/([A-Z])/g, " $1").replace(/[_\s]+/g, "-").trim().replace(/^-/, "").toLowerCase();
}
function A0(e) {
  const n = Nu(e);
  return n.replace(n.charAt(0), n.charAt(0).toUpperCase());
}
function N0(e) {
  return (n) => {
    const r = `${e}-${n}`, t = (o) => o ? o[0] === "$" ? o.replace("$", e) : o.startsWith("--") ? `${r}${o}` : `${r}__${o}` : r;
    return {
      name: A0(r),
      n: t,
      classes: M0
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
function Hr(e) {
  return window.getComputedStyle(e);
}
function kn(e) {
  if (Gv(e)) {
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
function R0(e) {
  const { top: n, bottom: r, left: t, right: o } = kn(e), { width: a, height: i } = kn(window);
  return t <= a && o >= 0 && n <= i && r >= 0;
}
function Ze(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function Xr() {
  return new Promise((e) => {
    Vt(e);
  });
}
function Jv(e) {
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
var vA = Jv(Ra().sessionStorage), pA = Jv(Ra().localStorage);
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
function V0(e) {
  const { from: n, to: r, duration: t = 300, frame: o = () => {
  }, timingFunction: a = (y) => y, onStateChange: i = () => {
  } } = e;
  let l = "pending", s = n;
  const u = r - n;
  let d, c, f, v = 0;
  function p() {
    if (l === "running" || l === "finished") return;
    $("running");
    const y = performance.now();
    c = c ?? y, v += f != null ? y - f : 0, f = void 0, O();
    function O() {
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
        }), O();
      });
    }
  }
  function h() {
    l === "running" && (ma(d), $("paused"), f = performance.now());
  }
  function g() {
    ma(d), $("pending"), s = n, d = void 0, c = void 0, f = void 0, v = 0;
  }
  function w() {
    return l;
  }
  function $(y) {
    l = y, i(y);
  }
  return {
    start: p,
    pause: h,
    reset: g,
    getState: w
  };
}
function L0(e) {
  return new Promise((n) => {
    const r = new FileReader();
    r.onload = () => {
      n(r.result);
    }, r.readAsDataURL(e);
  });
}
function F0(e, n, r) {
  return n = hn(n ?? 0, -292, 292), n ? +`${r(`${e}e${n}`)}e${-n}` : r(e);
}
function Ql(e, n = 0) {
  return F0(e, n, Math.floor);
}
function rr(e, n, r) {
  return I0(e, `Varlet [${n}]: ${r}`);
}
function U0(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function At(e, n) {
  console.error(`Varlet [${e}]: ${n}`);
}
var H0 = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1;
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
  Wv(e) && (c = me(() => e.value, (v, p) => {
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
function Qv(e, n, r) {
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
function j0(e) {
  const n = [], r = (t) => {
    if (t?.component) {
      r(t?.component.subTree);
      return;
    }
    We(t?.children) && t.children.forEach((o) => {
      b0(o) && (n.push(o), r(o));
    });
  };
  return r(e), n;
}
function Bn(e) {
  const n = St(), r = $n([]), t = [], o = C(() => r.length), a = () => {
    const u = j0(n.subTree), d = r.map((f, v) => ({
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
function Y0(e, n) {
  const r = P(!1);
  return me(e, (t) => {
    n === t && (r.value = !0);
  }, { immediate: !0 }), r;
}
function K0(e, n) {
  if (e > n) return "horizontal";
  if (n > e) return "vertical";
}
function Zt() {
  const e = P(0), n = P(0), r = P(0), t = P(0), o = P(0), a = P(0), i = P(0), l = P(0), s = P(0), u = P(0), d = P(), c = P(!1), f = P(!1), v = P(0), p = P(0);
  let h = null;
  const g = () => {
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
    resetTouch: g,
    startTouch: (z) => {
      g();
      const { clientX: R, clientY: H } = z.touches[0];
      e.value = R, n.value = H, i.value = R, l.value = H, c.value = !0, v.value = performance.now(), f.value = !1, h && window.cancelAnimationFrame(h);
    },
    moveTouch: (z) => {
      const { clientX: R, clientY: H } = z.touches[0];
      f.value = !0, r.value = R - e.value, t.value = H - n.value, o.value = Math.abs(r.value), a.value = Math.abs(t.value), p.value = Math.sqrt(o.value ** 2 + a.value ** 2), s.value = R - i.value, u.value = H - l.value, d.value || (d.value = K0(o.value, a.value)), i.value = R, l.value = H;
    },
    endTouch: () => {
      c.value = !1, h = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (z) => kt(z) === 0 && t.value > 0,
    isReachBottom: (z, R = 1) => {
      const { scrollHeight: H, clientHeight: M, scrollTop: D } = z, E = Math.abs(H - D - M);
      return t.value < 0 && E <= R;
    }
  };
}
function xv() {
  const e = St(), n = Zv(e.type.name), r = P(void 0);
  return Tr(() => {
    r.value = `${n}-${e.uid}`;
  }), r;
}
function W0(e = {}) {
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
function q0(e) {
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
    return V0({
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
function _v(e, n) {
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
  Wv(e) && (s = me(() => e.value, () => i(e)));
  const u = () => {
    s?.(), l(), o = !0;
  };
  return En(() => i(e)), Pt(l), Ot(l), u;
}
var X0 = Object.defineProperty, G0 = Object.defineProperties, Z0 = Object.getOwnPropertyDescriptors, Ed = Object.getOwnPropertySymbols, J0 = Object.prototype.hasOwnProperty, Q0 = Object.prototype.propertyIsEnumerable, Id = (e, n, r) => n in e ? X0(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, xl = (e, n) => {
  for (var r in n || (n = {})) J0.call(n, r) && Id(e, r, n[r]);
  if (Ed)
    for (var r of Ed(n)) Q0.call(n, r) && Id(e, r, n[r]);
  return e;
}, x0 = (e, n) => G0(e, Z0(n)), Bd = (e, n, r) => new Promise((t, o) => {
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
          n[t] = x0(xl({}, a), { default: o });
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
function _0(e) {
  const n = h0(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), r.parentNode && document.body.removeChild(r);
    }
  };
}
function Jt(e, n = {}, r = {}) {
  const { unmount: t } = _0({ setup() {
    return () => Fn(e, xl(xl({}, n), r));
  } });
  return { unmountInstance: t };
}
function Va(e) {
  const n = [];
  return e.forEach((r) => {
    if (r.type !== m0) {
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
function ey(e) {
  return Tn(e) && mo(e, "success");
}
function Jn() {
  const e = P(""), n = (o, a, i) => Bd(null, null, function* () {
    const l = qr(o).filter((u) => Dd(u) || Yn(u)), s = yield Promise.all(l.map((u) => Dd(u) ? u.safeParseAsync(a) : u(a, i)));
    return r(), !s.some((u) => {
      if (ey(u)) {
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
function ny(e) {
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
var oe = N0("var");
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
}), ep = {
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
}, np = {
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
}, rp = {
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
}, Uu = {
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
}, Hu = {
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
}, tp = Hu, ry = Object.defineProperty, Md = Object.getOwnPropertySymbols, ty = Object.prototype.hasOwnProperty, oy = Object.prototype.propertyIsEnumerable, Ad = (e, n, r) => n in e ? ry(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Nd = (e, n) => {
  for (var r in n || (n = {})) ty.call(n, r) && Ad(e, r, n[r]);
  if (Md)
    for (var r of Md(n)) oy.call(n, r) && Ad(e, r, n[r]);
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
var { messages: op, currentMessage: ap, add: Yu, use: Ku, merge: ip, t: gn } = ju();
Yu("zh-CN", Uu);
Ku("zh-CN");
var mA = {
  zhCN: Uu,
  enUS: ep,
  zhTW: Hu,
  zhHK: tp,
  faIR: np,
  jaJP: rp,
  messages: op,
  currentMessage: ap,
  add: Yu,
  use: Ku,
  merge: ip,
  t: gn,
  useLocale: ju
}, _l = {
  zhCN: Uu,
  enUS: ep,
  zhTW: Hu,
  zhHK: tp,
  faIR: np,
  jaJP: rp,
  messages: op,
  currentMessage: ap,
  add: Yu,
  use: Ku,
  merge: ip,
  t: gn,
  useLocale: ju
}, es = /* @__PURE__ */ Symbol("LOCALE_PROVIDER_KEY");
function ay(e) {
  Au(es, e);
}
function kr() {
  return Fu(es) ? Mu(es) : { t: null };
}
var lp = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, gA = $n(lp), vr = $n(lp), { n: Rd } = oe("");
function sp() {
  Object.keys(vr.locks).length <= 0 ? document.body.classList.remove(Rd("$--lock")) : document.body.classList.add(Rd("$--lock"));
}
function Go(e) {
  vr.locks[e] = 1, sp();
}
function Zo(e) {
  delete vr.locks[e], sp();
}
function Mo(e, n) {
  const { uid: r } = St();
  n && me(n, (t) => {
    t === !1 ? Zo(r) : t === !0 && e() === !0 && Go(r);
  }), me(e, (t) => {
    n && n() === !1 || (t === !0 ? Go(r) : Zo(r));
  }), y0(() => {
    n && n() === !1 || e() === !0 && Go(r);
  }), Bo(() => {
    n && n() === !1 || e() === !0 && Zo(r);
  }), vt(() => {
    n && n() === !1 || e() === !0 && Go(r);
  }), Ot(() => {
    n && n() === !1 || e() === !0 && Zo(r);
  });
}
var xr = [];
function Wu(e, n) {
  const { uid: r } = St();
  me(e, (i) => {
    i && !a(r) ? o() : setTimeout(() => {
      Rt(xr, a(r));
    });
  }), En(() => {
    e() && o();
  }), Gt(() => {
    Rt(xr, a(r));
  });
  function t() {
    return xr.length === 0 ? !0 : (xr.sort((i, l) => i.zIndex.value - l.zIndex.value), xr[xr.length - 1].uid === r);
  }
  function o() {
    a(r) || xr.push({
      uid: r,
      zIndex: n
    });
  }
  function a(i) {
    return xr.find((l) => l.uid === i);
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
}, up = /* @__PURE__ */ Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function dp() {
  const { bindParent: e, parentProvider: n, index: r } = In(up);
  return {
    index: r,
    popup: n,
    bindPopup: e
  };
}
function iy() {
  const { bindChildren: e, childProviders: n, length: r } = Bn(up);
  return {
    length: r,
    popupItems: n,
    bindPopupItems: e
  };
}
var ly = Object.defineProperty, Vd = Object.getOwnPropertySymbols, sy = Object.prototype.hasOwnProperty, uy = Object.prototype.propertyIsEnumerable, Ld = (e, n, r) => n in e ? ly(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, dy = (e, n) => {
  for (var r in n || (n = {})) sy.call(n, r) && Ld(e, r, n[r]);
  if (Vd)
    for (var r of Vd(n)) uy.call(n, r) && Ld(e, r, n[r]);
  return e;
}, { name: cy, n: mr, classes: Al } = oe("popup"), La = te({
  name: cy,
  inheritAttrs: !1,
  props: Qt,
  setup(e, { slots: n, attrs: r }) {
    const t = Y0(() => e.show, !0), { zIndex: o } = Ao(() => e.show, 3), a = C(() => {
      var p;
      return (p = e.zIndex) != null ? p : o.value;
    }), { onStackTop: i } = Wu(() => e.show, a), { disabled: l } = zt(), { bindPopupItems: s } = iy();
    Mo(() => e.show, () => e.lockScroll), me(() => e.show, (p) => {
      S(p ? e.onOpen : e.onClose);
    }), s({ show: C(() => e.show) }), xe(() => window, "keydown", v), ny(() => S(e.onRouteChange));
    function u() {
      const { closeOnClickOverlay: p, onClickOverlay: h } = e;
      S(h), p && S(e["onUpdate:show"], !1);
    }
    function d() {
      const { overlayClass: p = "", overlayStyle: h } = e;
      return j("div", {
        class: Al(mr("overlay"), p),
        style: dy({ zIndex: a.value - 1 }, h),
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
      return p ? j(Ur, {
        to: p,
        disabled: l.value
      }, { default: () => [f()] }) : f();
    };
  }
});
de(La);
fe(La, Qt);
var hA = La, ut = La, fy = Object.defineProperty, vy = Object.defineProperties, py = Object.getOwnPropertyDescriptors, Fd = Object.getOwnPropertySymbols, my = Object.prototype.hasOwnProperty, gy = Object.prototype.propertyIsEnumerable, Ud = (e, n, r) => n in e ? fy(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, cp = (e, n) => {
  for (var r in n || (n = {})) my.call(n, r) && Ud(e, r, n[r]);
  if (Fd)
    for (var r of Fd(n)) gy.call(n, r) && Ud(e, r, n[r]);
  return e;
}, hy = (e, n) => vy(e, py(n)), { n: fp } = oe("ripple"), Hd = 250;
function by(e) {
  const { zIndex: n, position: r } = Hr(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function jd(e) {
  return "touches" in e;
}
function yy(e, n) {
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
    const { x: t, y: o, centerX: a, centerY: i, size: l } = yy(this, e), s = document.createElement("div");
    s.classList.add(fp()), s.style.opacity = "0", s.style.transform = `translate(${t}px, ${o}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), by(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(r, 30);
}
function ga() {
  const e = this._ripple, n = () => {
    const r = this.querySelectorAll(`.${fp()}`);
    if (!r.length) return;
    const t = r[r.length - 1], o = Hd - performance.now() + Number(t.dataset.createdAt);
    window.setTimeout(() => {
      t.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = t.parentNode) == null ? void 0 : a.removeChild(t);
      }, Hd);
    }, o);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function vp() {
  if (!E0() || !vr.enableRipple) return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
var ha = !1;
function wy(e) {
  ha || !(e.key === " " || e.key === "Enter") || (qu.call(this, e), ha = !0);
}
function Yd() {
  ha && (ga.call(this), ha = !1);
}
function ky(e, n) {
  var r;
  e._ripple = hy(cp({ tasker: null }, (r = n.value) != null ? r : {}), { removeRipple: ga.bind(e) }), e.addEventListener("touchstart", qu, { passive: !0 }), e.addEventListener("touchmove", vp, { passive: !0 }), e.addEventListener("dragstart", ga, { passive: !0 }), e.addEventListener("keydown", wy), e.addEventListener("keyup", Yd), e.addEventListener("blur", Yd), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function $y(e) {
  e.removeEventListener("touchstart", qu), e.removeEventListener("touchmove", vp), e.removeEventListener("dragstart", ga), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function Cy(e, n) {
  var r, t, o, a, i, l;
  const s = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (t = n.value) == null ? void 0 : t.disabled
  };
  (s.color !== ((o = e._ripple) == null ? void 0 : o.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = cp({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
var pp = {
  mounted: ky,
  unmounted: $y,
  updated: Cy,
  install(e) {
    e.directive("ripple", this);
  }
}, bA = pp, vn = pp;
function mp(e) {
  return e ? !!(e === "desktop" && pa() || e === "mobile" && !pa()) : !1;
}
function Sy(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, t) => {
    const [o, a] = t.split(":").map((i) => i.trim());
    return r[Nu(o)] = a, r;
  }, {}) : {};
}
function Py(e) {
  const { value: n } = e._hover, r = Sy(e);
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
function Oy(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function gp(e) {
  e?._hover != null && (Oy(e), Xu(e, e._hover.rawStyle));
}
function hp() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, Yn(e)) {
    e(this._hover.hovering);
    return;
  }
  Xu(this, e);
}
function bp() {
  if (this._hover.hovering = !1, Yn(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  gp(this);
}
function yp(e, n) {
  var r, t;
  const { arg: o, value: a } = n;
  mp(o) || (e._hover = {
    value: a,
    hovering: (t = (r = e._hover) == null ? void 0 : r.hovering) != null ? t : !1,
    rawStyle: {}
  }, Py(e), e.addEventListener("mouseenter", hp), e.addEventListener("mouseleave", bp));
}
function wp(e, n) {
  mp(n.arg) || (gp(e), e.removeEventListener("mouseenter", hp), e.removeEventListener("mouseleave", bp));
}
function zy(e, n) {
  e._hover && wp(e, n);
}
function Ty(e, n) {
  return !Yn(n.value) && e._hover.hovering;
}
function Ey(e, n) {
  yp(e, n), Ty(e, n) && Xu(e, n.value);
}
var kp = {
  mounted: yp,
  unmounted: wp,
  beforeUpdate: zy,
  updated: Ey,
  install(e) {
    e.directive("hover", this);
  }
}, yA = kp, jn = kp, $p = {
  hovering: Boolean,
  focusing: Boolean,
  color: String
}, { name: Iy, n: By, classes: Dy } = oe("hover-overlay");
function My(e, n) {
  return b(), k("div", {
    class: m(e.classes(e.n(), [e.hovering, e.n("--hovering")], [e.focusing && !e.inMobile(), e.n("--focusing")])),
    style: J({ color: e.color })
  }, null, 6);
}
var Cp = te({
  name: Iy,
  props: $p,
  setup: () => ({
    n: By,
    classes: Dy,
    inMobile: pa
  })
});
Cp.render = My;
var Fa = Cp;
de(Fa);
fe(Fa, $p);
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
function Ay(e) {
  const { left: n } = kn(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Kd(e) {
  const { top: n } = kn(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Nl(e) {
  const { transform: n } = Hr(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function dt(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const r = /(scroll|auto)/, { overflowY: t, overflow: o } = Hr(n);
    if (r.test(t) || r.test(o)) return n;
  }
  return window;
}
function Ny(e) {
  const n = [];
  let r = e;
  for (; !Gv(r); )
    r = dt(r), n.push(r);
  return n;
}
function Sp(e, n) {
  if (Sn(e)) {
    const r = document.querySelector(e);
    return rr(!!r, n, "target element cannot found"), r;
  }
  return rr(Zl(e), n, 'type of prop "target" should be an element object'), e;
}
function Ry() {
  const { width: e, height: n } = kn(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
var Vy = (e) => Sn(e) && e.endsWith("rem"), Ly = (e) => Sn(e) && e.endsWith("px") || nr(e), Fy = (e) => Sn(e) && e.endsWith("vw"), Uy = (e) => Sn(e) && e.endsWith("vh"), Hy = (e) => Sn(e) && e.endsWith("vmin"), jy = (e) => Sn(e) && e.endsWith("vmax"), fn = (e) => {
  if (Xv(e)) return Number(e);
  if (Ly(e)) return +e.replace("px", "");
  if (!Er()) return 0;
  const { vw: n, vh: r, vMin: t, vMax: o } = Ry();
  if (Fy(e)) return +e.replace("vw", "") * n / 100;
  if (Uy(e)) return +e.replace("vh", "") * r / 100;
  if (Hy(e)) return +e.replace("vmin", "") * t / 100;
  if (jy(e)) return +e.replace("vmax", "") * o / 100;
  if (Vy(e)) {
    const a = +e.replace("rem", ""), i = Hr(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return Sn(e) ? Z(e) : 0;
}, ze = (e) => {
  if (e != null)
    return Xv(e) ? `${e}px` : String(e);
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
function Pp(e) {
  return Object.entries(e ?? {}).reduce((n, [r, t]) => {
    const o = r.startsWith("--") ? r : `--${Zv(r)}`;
    return n[o] = t, n;
  }, {});
}
function ba(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
function Yy(e) {
  let n = e;
  for (; n && n !== document.documentElement; ) {
    if (Hr(n).display === "none") return !0;
    n = n.parentNode;
  }
  return !1;
}
function Op(e, n) {
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
  const o = Array.from(n.querySelectorAll(Wd)).filter((s) => !Yy(s));
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
}, Ky = (e, n, r) => new Promise((t, o) => {
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
}), { name: Wy, n: qy, classes: Xy } = oe("icon");
function Gy(e, n) {
  return b(), we(Xt(e.isURL(e.name) ? "img" : "i"), {
    class: m(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], `${e.namespace}--set`, [
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
var zp = te({
  name: Wy,
  props: pn,
  setup(e) {
    const n = P(""), r = P(!1);
    me(() => e.name, t, { immediate: !0 });
    function t(o, a) {
      return Ky(this, null, function* () {
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
      n: qy,
      classes: Xy,
      isURL: H0,
      toNumber: Z,
      toSizeUnit: ze
    };
  }
});
zp.render = Gy;
var Ua = zp;
de(Ua);
fe(Ua, pn);
var kA = Ua, Je = Ua, { name: Zy, n: Jy, classes: Qy } = oe("action-sheet");
function xy(e, n) {
  const r = x("var-icon"), t = x("maybe-v-node"), o = x("var-hover-overlay"), a = _e("ripple"), i = _e("hover");
  return Ke((b(), k("div", {
    class: m(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
    style: J({ color: e.color })
  }, [
    e.isString(e.icon) ? (b(), we(r, {
      key: 0,
      class: m(e.n("action-icon")),
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
      class: m(e.n("action-icon"))
    }, [j(t, { is: e.renderIcon() }, null, 8, ["is"])], 2)) : q("v-if", !0),
    L("div", { class: m(e.n("action-name")) }, ve(e.name), 3),
    j(o, { hovering: e.disabled ? !1 : e.hovering }, null, 8, ["hovering"])
  ], 6)), [[a, { disabled: e.disabled }], [
    i,
    e.handleHovering,
    "desktop"
  ]]);
}
var Tp = te({
  name: Zy,
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
      n: Jy,
      classes: Qy,
      handleHovering: r,
      renderIcon: t
    };
  }
});
Tp.render = xy;
var _y = Tp, e1 = Object.defineProperty, qd = Object.getOwnPropertySymbols, n1 = Object.prototype.hasOwnProperty, r1 = Object.prototype.propertyIsEnumerable, Xd = (e, n, r) => n in e ? e1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, t1 = (e, n) => {
  for (var r in n || (n = {})) n1.call(n, r) && Xd(e, r, n[r]);
  if (qd)
    for (var r of qd(n)) r1.call(n, r) && Xd(e, r, n[r]);
  return e;
}, Ep = t1({
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
])), { name: o1, n: a1, classes: i1 } = oe("action-sheet");
function l1(e, n) {
  const r = x("var-action-item"), t = x("var-popup");
  return b(), we(t, {
    show: e.show,
    "onUpdate:show": n[0] || (n[0] = (o) => e.show = o),
    position: "bottom",
    class: m(e.n("popup-radius")),
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
    default: ue(() => [L("div", Xe({ class: e.classes(e.n(), e.n("$--box")) }, e.$attrs), [U(e.$slots, "title", {}, () => {
      var o;
      return [L("div", { class: m(e.n("title")) }, ve((o = e.title) != null ? o : (e.pt ? e.pt : e.t)("actionSheetTitle")), 3)];
    }), U(e.$slots, "actions", {}, () => [(b(!0), k(Be, null, Ye(e.actions, (o) => (b(), we(r, {
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
  name: o1,
  directives: { Ripple: vn },
  components: {
    VarPopup: ut,
    VarActionItem: _y
  },
  inheritAttrs: !1,
  props: Ep,
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
      n: a1,
      classes: i1,
      handleSelect: t
    };
  }
});
Ip.render = l1;
var No = Ip, s1 = Object.defineProperty, Gd = Object.getOwnPropertySymbols, u1 = Object.prototype.hasOwnProperty, d1 = Object.prototype.propertyIsEnumerable, Zd = (e, n, r) => n in e ? s1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Jd = (e, n) => {
  for (var r in n || (n = {})) u1.call(n, r) && Zd(e, r, n[r]);
  if (Gd)
    for (var r of Gd(n)) d1.call(n, r) && Zd(e, r, n[r]);
  return e;
}, nt, Zu = {};
function c1(e = {}) {
  return Jd(Jd({}, Zu), e);
}
function pt(e) {
  return Er() ? new Promise((n) => {
    pt.close();
    const r = w0(c1(e));
    r.teleport = "body", nt = r;
    const { unmountInstance: t } = Jt(No, r, {
      onSelect: (o) => {
        S(r.onSelect, o), n(o);
      },
      onClose: () => {
        S(r.onClose), n("close");
      },
      onClosed: () => {
        S(r.onClosed), t(), nt === r && (nt = null);
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
  Zu = e;
};
pt.resetDefaultOptions = function() {
  Zu = {};
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
de(No);
de(No, pt);
fe(pt, Ep);
var $A = No, ns = pt, Bp = {
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
}, { name: f1, n: v1, classes: p1 } = oe("alert"), m1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  danger: "error"
};
function g1(e, n) {
  const r = x("var-icon");
  return b(), k("div", {
    class: m(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), e.n(`--${e.type}`), e.formatElevation(e.elevation, 2))),
    style: J({ "background-color": e.color }),
    role: "alert"
  }, [
    e.isInternalType || e.$slots.icon ? (b(), k("div", {
      key: 0,
      class: m(e.n("icon"))
    }, [U(e.$slots, "icon", {}, () => [e.isInternalType ? (b(), we(r, {
      key: 0,
      name: e.iconTypeMap[e.type]
    }, null, 8, ["name"])) : q("v-if", !0)])], 2)) : q("v-if", !0),
    U(e.$slots, "content", {}, () => [L("div", { class: m(e.n("content")) }, [e.title || e.$slots.title ? (b(), k("div", {
      key: 0,
      class: m(e.n("title"))
    }, [U(e.$slots, "title", {}, () => [Le(ve(e.title), 1)])], 2)) : q("v-if", !0), e.message || e.$slots.default ? (b(), k("div", {
      key: 1,
      class: m(e.n("message"))
    }, [U(e.$slots, "default", {}, () => [Le(ve(e.message), 1)])], 2)) : q("v-if", !0)], 2)]),
    e.closeable ? (b(), k("div", {
      key: 1,
      class: m(e.n("close-icon")),
      onClick: n[0] || (n[0] = (...t) => e.handleClose && e.handleClose(...t))
    }, [U(e.$slots, "close-icon", {}, () => [j(r, { name: "close-circle" })])], 2)) : q("v-if", !0)
  ], 6);
}
var Dp = te({
  name: f1,
  components: { VarIcon: Je },
  props: Bp,
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
      n: v1,
      classes: p1,
      iconTypeMap: m1,
      isInternalType: n,
      formatElevation: Pn,
      handleClose: r
    };
  }
});
Dp.render = g1;
var Ha = Dp;
de(Ha);
fe(Ha, Bp);
var CA = Ha, rs = Ha, Mp = {
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
}, { name: h1, n: b1, classes: y1 } = oe("app-bar");
function w1(e, n) {
  return b(), k(Be, null, [L("div", Xe({
    ref: "appBar",
    class: e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.type === "surface", e.n("--surface")], [e.size === "large", e.n("--large")], [e.round, e.n("--round")], [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], e.formatElevation(e.elevation, 3)),
    style: e.rootStyles
  }, e.$attrs), [L("div", { class: m(e.n("toolbar")) }, [
    L("div", { class: m(e.n("left")) }, [U(e.$slots, "left"), e.titlePosition === "left" ? (b(), k("div", {
      key: 0,
      class: m(e.n("title")),
      style: J({ paddingLeft: e.paddingLeft })
    }, [U(e.$slots, "default", {}, () => [Le(ve(e.title), 1)])], 6)) : q("v-if", !0)], 2),
    e.titlePosition === "center" ? (b(), k("div", {
      key: 0,
      class: m(e.n("title"))
    }, [U(e.$slots, "default", {}, () => [Le(ve(e.title), 1)])], 2)) : q("v-if", !0),
    L("div", { class: m(e.n("right")) }, [e.titlePosition === "right" ? (b(), k("div", {
      key: 0,
      class: m(e.n("title")),
      style: J({ paddingRight: e.paddingRight })
    }, [U(e.$slots, "default", {}, () => [Le(ve(e.title), 1)])], 6)) : q("v-if", !0), U(e.$slots, "right")], 2)
  ], 2), U(e.$slots, "content")], 16), e.fixed && e.placeholder ? (b(), k("div", {
    key: 0,
    class: m(e.n("placeholder")),
    style: J({ height: e.placeholderHeight })
  }, null, 6)) : q("v-if", !0)], 64);
}
var Ap = te({
  name: h1,
  props: Mp,
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
      n: b1,
      classes: y1,
      formatElevation: Pn,
      appBar: r,
      placeholderHeight: a
    };
  }
});
Ap.render = w1;
var ja = Ap;
de(ja);
fe(ja, Mp);
var SA = ja, ts = ja, Np = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: k1, n: $1 } = oe("form-details"), C1 = { key: 0 }, S1 = { key: 0 };
function P1(e, n) {
  return b(), we(bn, { name: e.n() }, {
    default: ue(() => [e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (b(), k("div", {
      key: 0,
      class: m(e.n())
    }, [L("div", { class: m(e.n("error-message")) }, [j(bn, { name: e.n("message") }, {
      default: ue(() => [e.errorMessage ? (b(), k("div", C1, ve(e.errorMessage), 1)) : q("v-if", !0)]),
      _: 1
    }, 8, ["name"])], 2), L("div", { class: m(e.n("extra-message")) }, [j(bn, { name: e.n("message") }, {
      default: ue(() => [U(e.$slots, "extra-message", {}, () => [e.extraMessage ? (b(), k("div", S1, ve(e.extraMessage), 1)) : q("v-if", !0)])]),
      _: 3
    }, 8, ["name"])], 2)], 2)) : q("v-if", !0)]),
    _: 3
  }, 8, ["name"]);
}
var Rp = te({
  name: k1,
  props: Np,
  setup: () => ({ n: $1 })
});
Rp.render = P1;
var Ya = Rp;
de(Ya);
fe(Ya, Np);
var PA = Ya, Un = Ya, O1 = Object.defineProperty, z1 = Object.defineProperties, T1 = Object.getOwnPropertyDescriptors, Qd = Object.getOwnPropertySymbols, E1 = Object.prototype.hasOwnProperty, I1 = Object.prototype.propertyIsEnumerable, xd = (e, n, r) => n in e ? O1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, B1 = (e, n) => {
  for (var r in n || (n = {})) E1.call(n, r) && xd(e, r, n[r]);
  if (Qd)
    for (var r of Qd(n)) I1.call(n, r) && xd(e, r, n[r]);
  return e;
}, D1 = (e, n) => z1(e, T1(n)), Vp = /* @__PURE__ */ Symbol("FORM_BIND_FORM_ITEM_KEY");
function Kn() {
  const { parentProvider: e, index: n, bindParent: r } = In(Vp), t = St();
  return {
    index: n,
    form: e,
    bindForm: r ? (o) => {
      r(D1(B1({}, o), { instance: t }));
    } : null
  };
}
function M1() {
  const { childProviders: e, length: n, bindChildren: r } = Bn(Vp);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var Lp = /* @__PURE__ */ Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Fp = /* @__PURE__ */ Symbol("SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY");
function A1() {
  const { childProviders: e, length: n, bindChildren: r } = Bn(Lp);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
function N1() {
  const { childProviders: e, bindChildren: n } = Bn(Fp);
  return {
    swipeResizeListeners: e,
    bindSwipeResizeListeners: n
  };
}
function R1() {
  const { parentProvider: e, bindParent: n } = In(Fp);
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
}, _d = (e, n, r) => new Promise((t, o) => {
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
function U1(e, n) {
  const r = x("var-icon");
  return b(), k("div", {
    class: m(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
  }, [L("div", {
    class: m(e.classes(e.n("controller"), [e.isFocusing, e.n("--focus")], [e.isError, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], [!e.line, e.n("--bottom-border-radius")])),
    style: J({
      color: e.color,
      cursor: e.cursor,
      overflow: e.isFloating ? "visible" : "hidden",
      "--field-decorator-middle-offset-left": e.middleOffsetLeft,
      "--field-decorator-middle-offset-width": e.middleOffsetWidth,
      "--field-decorator-middle-offset-height": e.middleOffsetHeight
    })
  }, [
    L("div", { class: m(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")])) }, [U(e.$slots, "prepend-icon")], 2),
    L("div", {
      ref: "middleEl",
      class: m(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
    }, [U(e.$slots, "default")], 2),
    e.placeholder && e.hint ? (b(), k("label", {
      key: 0,
      class: m(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocusing, e.n("--focus")], [e.hintCenter, e.n("--hint-center")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.isError, e.n("--error")], [e.transitionDisabled, e.n("--transition-disabled")], e.computePlaceholderState())),
      style: J({ color: e.color }),
      for: e.id
    }, [L("span", null, ve(e.placeholder), 1)], 14, F1)) : q("v-if", !0),
    L("div", { class: m(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")])) }, [e.clearable && !e.isEmpty(e.value) && !e.readonly && !e.formReadonly ? U(e.$slots, "clear-icon", {
      key: 0,
      clear: e.handleClear
    }, () => [j(r, {
      class: m(e.n("clear-icon")),
      "var-field-decorator-cover": "",
      name: "close-circle",
      onClick: e.handleClear
    }, null, 8, ["class", "onClick"])]) : q("v-if", !0), U(e.$slots, "append-icon")], 2)
  ], 6), e.line ? (b(), k(Be, { key: 0 }, [e.variant === "outlined" ? (b(), k("fieldset", {
    key: 0,
    class: m(e.classes(e.n("line"), [e.isFocusing, e.n("--line-focus")], [e.isError, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
    style: J({ borderColor: e.color })
  }, [L("legend", {
    class: m(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
    style: J({ width: e.legendWidth })
  }, [e.placeholder && e.hint ? (b(), we(Ur, {
    key: 0,
    to: "body"
  }, [L("span", {
    ref: "placeholderTextEl",
    class: m(e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")]))
  }, ve(e.placeholder), 3)])) : q("v-if", !0)], 6)], 6)) : (b(), k("div", {
    key: 1,
    class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
    style: J({ background: e.isError ? void 0 : e.blurColor })
  }, [L("div", {
    class: m(e.classes(e.n("dot"), [e.isFocusing, e.n("--line-focus")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
    style: J({ background: e.isError ? void 0 : e.focusColor })
  }, null, 6)], 6))], 64)) : q("v-if", !0)], 2);
}
var Up = te({
  name: V1,
  components: { VarIcon: Je },
  props: Ro,
  setup(e) {
    const n = P(null), r = P(null), t = P(""), o = P("0px"), a = P("0px"), i = P("0px"), l = P(!0), s = C(() => e.hint && (!Or(e.value) || e.isFocusing)), { popup: u, bindPopup: d } = dp(), { bindSwipeResizeDispatcher: c } = R1();
    let f = 0;
    const v = C(() => e.isError ? void 0 : e.isFocusing ? e.focusColor : e.blurColor);
    wr(() => w(!0)), _v(r, () => w(!0)), En(() => {
      w(), Ne().then(() => {
        l.value = !1;
      });
    }), qt(w), S(d, null), S(c, { onResize() {
      Ne().then(() => w(!0));
    } }), u && me(() => u.show.value, ($) => _d(null, null, function* () {
      $ && (yield Xn(), w(!0));
    }));
    function p() {
      const { hint: $, value: y, composing: O } = e;
      if (!$ && (!Or(y) || O)) return Rl("--placeholder-hidden");
      if (s.value) return Rl("--placeholder-hint");
    }
    function h($) {
      S(e.onClear, $);
    }
    function g($) {
      S(e.onClick, $);
    }
    function w($ = !1) {
      return _d(this, null, function* () {
        if (!r.value) return;
        $ && (f++, l.value = !0);
        const y = f;
        if (o.value = `${r.value.offsetLeft}px`, a.value = `${r.value.offsetWidth}px`, i.value = `${r.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
          const O = Hr(n.value), T = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
          t.value = `calc(${O.width} * 0.75 + ${T} * 2)`;
        }
        $ && (yield Ne(), yield Xr(), y === f && (l.value = !1));
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
      computePlaceholderState: p,
      n: Rl,
      classes: L1,
      isEmpty: Or,
      handleClear: h,
      handleClick: g
    };
  }
});
Up.render = U1;
var Ka = Up;
de(Ka);
fe(Ka, Ro);
var OA = Ka, ho = Ka, H1 = Object.defineProperty, j1 = Object.defineProperties, Y1 = Object.getOwnPropertyDescriptors, ec = Object.getOwnPropertySymbols, K1 = Object.prototype.hasOwnProperty, W1 = Object.prototype.propertyIsEnumerable, nc = (e, n, r) => n in e ? H1(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, q1 = (e, n) => {
  for (var r in n || (n = {})) K1.call(n, r) && nc(e, r, n[r]);
  if (ec)
    for (var r of ec(n)) W1.call(n, r) && nc(e, r, n[r]);
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
    class: m(e.classes(e.n(), e.n("$--box"))),
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
    "clear-icon": ue(({ clear: o }) => [U(e.$slots, "clear-icon", { clear: o })]),
    "append-icon": ue(() => [U(e.$slots, "append-icon")]),
    default: ue(() => [e.normalizedType === "password" && e.preventAutoFill ? (b(), k("input", {
      key: 0,
      tabindex: "-1",
      "aria-label": e.ariaLabel,
      class: m(e.n("autocomplete")),
      placeholder: e.hint ? void 0 : e.placeholder,
      style: J({ "--input-placeholder-color": e.placeholderColor }),
      enterkeyhint: e.enterkeyhint
    }, null, 14, Q1)) : q("v-if", !0), e.textarea ? (b(), k("textarea", {
      key: 1,
      id: e.id,
      ref: "el",
      "aria-label": e.ariaLabel,
      class: m(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.errorMessage, e.n("--caret-error")])),
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
      class: m(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.errorMessage, e.n("--caret-error")])),
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
    fn: ue(() => [U(e.$slots, "prepend-icon")]),
    key: "0"
  } : void 0]), 1040), e.isShowFormDetails ? (b(), we(t, {
    key: 0,
    "error-message": e.errorMessage,
    "extra-message": e.maxlengthText
  }, Pr({ _: 2 }, [e.$slots["extra-message"] ? {
    name: "extra-message",
    fn: ue(() => [U(e.$slots, "extra-message")]),
    key: "0"
  } : void 0]), 1032, ["error-message", "extra-message"])) : q("v-if", !0)], 34);
}
var Hp = te({
  name: G1,
  components: {
    VarFormDetails: Un,
    VarFieldDecorator: ho
  },
  props: Wa,
  setup(e) {
    const n = xv(), r = P(null), t = P(!1), o = P(!1), { bindForm: a, form: i } = Kn(), { errorMessage: l, validateWithTrigger: s, validate: u, resetValidation: d } = Jn(), c = C(() => e.disabled || e.readonly ? "" : "text"), f = C(() => e.type === "number" ? "text" : e.type), v = C(() => {
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
    function g(X) {
      t.value = !0, S(e.onFocus, X), h("onFocus");
    }
    function w(X) {
      t.value = !1, S(e.onBlur, X), h("onBlur");
    }
    function $(X) {
      const ae = X.target;
      let { value: Te } = ae;
      e.type === "number" && (Te = M(Te));
      const ce = E(Te);
      return ce === e.modelValue && (ae.value = ce), ce;
    }
    function y() {
      o.value = !0;
    }
    function O(X) {
      o.value && (o.value = !1, X.target.dispatchEvent(new Event("input")));
    }
    function T(X) {
      if (o.value) return;
      const ae = $(X);
      S(e["onUpdate:modelValue"], ae), S(e.onInput, ae, X), h("onInput");
    }
    function z(X) {
      const ae = D($(X));
      e.modelModifiers.trim && S(e["onUpdate:modelValue"], ae), S(e.onChange, ae, X), h("onChange");
    }
    function R() {
      const { disabled: X, readonly: ae, clearable: Te, onClear: ce } = e;
      i?.disabled.value || i?.readonly.value || X || ae || !Te || (S(e["onUpdate:modelValue"], ""), S(ce, ""), h("onClear"));
    }
    function H(X) {
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
      handleFocus: g,
      handleBlur: w,
      handleInput: T,
      handleChange: z,
      handleClear: R,
      handleClick: H,
      handleCompositionStart: y,
      handleCompositionEnd: O,
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
Hp.render = ew;
var Vo = Hp;
de(Vo);
fe(Vo, Wa);
var zA = Vo, Lt = Vo, jp = {
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
}, Yp = /* @__PURE__ */ Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function nw() {
  const { bindChildren: e, childProviders: n, length: r } = Bn(Yp);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function rw() {
  const { bindParent: e, parentProvider: n, index: r } = In(Yp);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var rc = (e, n, r) => new Promise((t, o) => {
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
  return b(), k("div", { class: m(e.n("wrap")) }, [L("div", {
    ref: "checkbox",
    role: "checkbox",
    "aria-checked": e.isIndeterminate ? "mixed" : e.checked,
    "aria-disabled": e.formDisabled || e.disabled,
    class: m(e.n()),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocus: n[1] || (n[1] = (l) => e.isFocusing = !0),
    onBlur: n[2] || (n[2] = (l) => e.isFocusing = !1),
    onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
  }, [Ke((b(), k("div", {
    class: m(e.classes(e.n("action"), [
      e.checked || e.isIndeterminate,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: J({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor })
  }, [
    e.isIndeterminate ? (b(), k("span", {
      key: 0,
      class: m(e.n("icon")),
      style: J({ fontSize: e.toSizeUnit(e.iconSize) })
    }, [U(e.$slots, "indeterminate-icon", {}, () => [j(r, { name: "minus-box" })])], 6)) : q("v-if", !0),
    e.checked && !e.isIndeterminate ? (b(), k("span", {
      key: 1,
      class: m(e.n("icon")),
      style: J({ fontSize: e.toSizeUnit(e.iconSize) })
    }, [U(e.$slots, "checked-icon", {}, () => [j(r, { name: "checkbox-marked" })])], 6)) : q("v-if", !0),
    !e.checked && !e.isIndeterminate ? (b(), k("span", {
      key: 2,
      class: m(e.n("icon")),
      style: J({ fontSize: e.toSizeUnit(e.iconSize) })
    }, [U(e.$slots, "unchecked-icon", {}, () => [j(r, { name: "checkbox-blank-outline" })])], 6)) : q("v-if", !0),
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
    class: m(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...l) => e.handleTextClick && e.handleTextClick(...l))
  }, [U(e.$slots, "default", { checked: e.checked })], 2)) : q("v-if", !0)], 42, iw), j(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Kp = te({
  name: tw,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarIcon: Je,
    VarFormDetails: Un,
    VarHoverOverlay: Gn
  },
  props: jp,
  setup(e) {
    const n = P(null), r = P(!1), t = wn(e, "modelValue"), o = wn(e, "indeterminate"), a = C(() => t.value === e.checkedValue), i = C(() => e.checkedValue), { checkboxGroup: l, bindCheckboxGroup: s } = rw(), { hovering: u, handleHovering: d } = ur(), { form: c, bindForm: f } = Kn(), { errorMessage: v, validateWithTrigger: p, validate: h, resetValidation: g } = Jn(), w = {
      checkedValue: i,
      checked: a,
      sync: z,
      validate: E,
      resetValidation: g,
      reset: R
    };
    S(s, w), S(f, w), xe(() => window, "keydown", M), xe(() => window, "keyup", D);
    function $(B) {
      Ne(() => {
        const { validateTrigger: N, rules: A, modelValue: I } = e;
        p(N, B, A, I);
      });
    }
    function y(B) {
      return rc(this, null, function* () {
        const { checkedValue: N, onChange: A } = e;
        t.value = B, B === N ? l?.onChecked(N) : l?.onUnchecked(N), yield Ne(), S(A, B, o.value), $("onChange");
      });
    }
    function O(B) {
      return rc(this, null, function* () {
        const { disabled: N, readonly: A, checkedValue: I, uncheckedValue: F, onClick: Q } = e;
        if (c?.disabled.value || N || (S(Q, B), c?.readonly.value || A)) return;
        if (o.value === !0) {
          o.value = !1, yield Ne(), S(e.onChange, t.value, o.value), $("onChange");
          return;
        }
        const X = l ? l.checkedCount.value >= Number(l.max.value) : !1;
        !a.value && X || y(a.value ? F : I);
      });
    }
    function T() {
      n.value.focus();
    }
    function z(B) {
      const { checkedValue: N, uncheckedValue: A } = e;
      t.value = B.includes(N) ? N : A;
    }
    function R() {
      t.value = e.uncheckedValue, g();
    }
    function H(B) {
      const { checkedValue: N, uncheckedValue: A } = e;
      [N, A].includes(B) || (B = a.value ? A : N), y(B);
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
      handleClick: O,
      handleTextClick: T,
      toSizeUnit: ze,
      toggle: H,
      reset: R,
      validate: E,
      resetValidation: g
    };
  }
});
Kp.render = lw;
var qa = Kp;
de(qa);
fe(qa, jp);
var TA = qa, ct = qa, Wp = {
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
}, qp = /* @__PURE__ */ Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function sw() {
  const { length: e, childProviders: n, bindChildren: r } = Bn(qp);
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: r
  };
}
function uw() {
  const { index: e, parentProvider: n, bindParent: r } = In(qp);
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
    class: m(e.classes(e.n(), e.n("$--box"), e.n(`--${e.size}`), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")], [e.childrenTrigger, e.n("--children-trigger")])),
    tabindex: e.disabled ? void 0 : "-1",
    onClick: n[3] || (n[3] = (...s) => e.handleClick && e.handleClick(...s)),
    onFocus: n[4] || (n[4] = (s) => e.isFocusing = !0),
    onBlur: n[5] || (n[5] = (s) => e.isFocusing = !1)
  }, [
    L("div", { class: m(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])) }, null, 2),
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
    U(e.$slots, "default", {}, () => [L("div", { class: m(e.classes(e.n("text"))) }, [j(t, {
      is: e.labelVNode,
      class: m(e.n("$--ellipsis"))
    }, null, 8, ["is", "class"])], 2)]),
    e.childrenTrigger ? (b(), k("div", {
      key: 1,
      class: m(e.n("arrow"))
    }, [j(o, {
      "var-menu-option-cover": "",
      class: m(e.n("arrow-icon")),
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
var Xp = te({
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
  props: Wp,
  setup(e) {
    const n = P(), r = P(), t = P(!1), o = P(!1), a = P(!1), i = C(() => o.value), l = C(() => a.value), s = C(() => e.value), u = C(() => e.disabled), d = C(() => e.ripple), { menuSelect: c, bindMenuSelect: f } = uw(), { size: v, multiple: p, onSelect: h, computeLabel: g } = c, { hovering: w, handleHovering: $ } = ur(), y = C(() => {
      var D;
      return Yn(e.label) ? e.label((D = e.option) != null ? D : {
        label: e.label,
        value: e.value,
        disabled: e.disabled,
        ripple: e.ripple
      }, o.value) : e.label;
    }), O = {
      label: y,
      value: s,
      selected: i,
      disabled: u,
      ripple: d,
      indeterminate: l,
      sync: M
    };
    me([() => e.label, () => e.value], g), f(O), xe(() => window, "keydown", z), xe(() => window, "keyup", R);
    function T() {
      if (!e.disabled && !(!p.value && e.childrenTrigger)) {
        if (p.value && a.value) {
          a.value = !1, o.value = !1, h(O);
          return;
        }
        p.value && !a.value && (o.value = !o.value), h(O);
      }
    }
    function z(D) {
      var E;
      !t.value && !((E = r.value) != null && E.isFocusing) || ((D.key === "ArrowRight" || D.key === "ArrowLeft") && (Ze(D), S(e.onKeyArrowX, D.key)), t.value && ((D.key === " " || D.key === "Enter") && Ze(D), D.key === "Enter" && n.value.click()));
    }
    function R(D) {
      t.value && D.key === " " && (Ze(D), n.value.click());
    }
    function H() {
      return dw(this, null, function* () {
        yield Ne(), h(O);
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
      hovering: w,
      isFocusing: t,
      labelVNode: y,
      n: fw,
      classes: vw,
      handleHovering: $,
      handleClick: T,
      handleSelect: H
    };
  }
});
Xp.render = mw;
var Lo = Xp;
de(Lo);
fe(Lo, Wp);
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
var hw = "clippingParents", bw = "viewport", tc = "popper", yw = "reference", oc = /* @__PURE__ */ Za.reduce(function(e, n) {
  return e.concat([n + "-" + Ja, n + "-end"]);
}, []), Gp = /* @__PURE__ */ [].concat(Za, [gw]).reduce(function(e, n) {
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
function Gr(e) {
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
function ac(e) {
  return !hr(e) || Gr(e).position === "fixed" ? null : e.offsetParent;
}
function Bw(e) {
  var n = /firefox/i.test(os());
  if (/Trident/i.test(os()) && hr(e) && Gr(e).position === "fixed")
    return null;
  var r = Qa(e);
  for (Qu(r) && (r = r.host); hr(r) && ["html", "body"].indexOf(Vr(r)) < 0; ) {
    var t = Gr(r);
    if (t.transform !== "none" || t.perspective !== "none" || t.contain === "paint" || ["transform", "perspective"].indexOf(t.willChange) !== -1 || n && t.willChange === "filter" || n && t.filter && t.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function xu(e) {
  for (var n = pr(e), r = ac(e); r && Iw(r) && Gr(r).position === "static"; ) r = ac(r);
  return r && (Vr(r) === "html" || Vr(r) === "body" && Gr(r).position === "static") ? n : r || Bw(e) || n;
}
function lt(e) {
  return e.split("-")[0];
}
function yo(e) {
  return e.split("-")[1];
}
var uo = Math.max, ic = Math.min, Ut = Math.round, Dw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Mw(e, n) {
  var r = e.x, t = e.y, o = n.devicePixelRatio || 1;
  return {
    x: Ut(r * o) / o || 0,
    y: Ut(t * o) / o || 0
  };
}
function lc(e) {
  var n, r = e.popper, t = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, c = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, p = i.y, h = p === void 0 ? 0 : p, g = typeof d == "function" ? d({
    x: v,
    y: h
  }) : {
    x: v,
    y: h
  };
  v = g.x, h = g.y;
  var w = i.hasOwnProperty("x"), $ = i.hasOwnProperty("y"), y = Ga, O = "top", T = window;
  if (u) {
    var z = xu(r), R = "clientHeight", H = "clientWidth";
    if (z === pr(r) && (z = mt(r), Gr(z).position !== "static" && l === "absolute" && (R = "scrollHeight", H = "scrollWidth")), z = z, o === "top" || (o === "left" || o === "right") && a === "end") {
      O = bo;
      var M = c && z === T && T.visualViewport ? T.visualViewport.height : z[R];
      h -= M - t.height, h *= s ? 1 : -1;
    }
    if (o === "left" || (o === "top" || o === "bottom") && a === "end") {
      y = Xa;
      var D = c && z === T && T.visualViewport ? T.visualViewport.width : z[H];
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
    return Object.assign({}, E, (N = {}, N[O] = $ ? "0" : "", N[y] = w ? "0" : "", N.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + h + "px)" : "translate3d(" + v + "px, " + h + "px, 0)", N));
  }
  return Object.assign({}, E, (n = {}, n[O] = $ ? h + "px" : "", n[y] = w ? v + "px" : "", n.transform = "", n));
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
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, lc(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, lc(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, { "data-popper-placement": n.placement });
}
var Zp = {
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
function sc(e) {
  return e.replace(/start|end/g, function(n) {
    return Rw[n];
  });
}
function Jp() {
  return !/^((?!chrome|android).)*safari/i.test(os());
}
function Ht(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var t = e.getBoundingClientRect(), o = 1, a = 1;
  n && hr(e) && (o = e.offsetWidth > 0 && Ut(t.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ut(t.height) / e.offsetHeight || 1);
  var i = ($t(e) ? pr(e) : window).visualViewport, l = !Jp() && r, s = (t.left + (l && i ? i.offsetLeft : 0)) / o, u = (t.top + (l && i ? i.offsetTop : 0)) / a, d = t.width / o, c = t.height / a;
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
  return Ht(mt(e)).left + _u(e).scrollLeft;
}
function Vw(e, n) {
  var r = pr(e), t = mt(e), o = r.visualViewport, a = t.clientWidth, i = t.clientHeight, l = 0, s = 0;
  if (o) {
    a = o.width, i = o.height;
    var u = Jp();
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
  return Gr(o || r).direction === "rtl" && (l += uo(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function nd(e) {
  var n = Gr(e), r = n.overflow, t = n.overflowX, o = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + t);
}
function Qp(e) {
  return [
    "html",
    "body",
    "#document"
  ].indexOf(Vr(e)) >= 0 ? e.ownerDocument.body : hr(e) && nd(e) ? e : Qp(Qa(e));
}
function co(e, n) {
  var r;
  n === void 0 && (n = []);
  var t = Qp(e), o = t === ((r = e.ownerDocument) == null ? void 0 : r.body), a = pr(t), i = o ? [a].concat(a.visualViewport || [], nd(t) ? t : []) : t, l = n.concat(i);
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
function Uw(e, n) {
  var r = Ht(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function uc(e, n, r) {
  return n === "viewport" ? as(Vw(e, r)) : $t(n) ? Uw(n, r) : as(Lw(mt(e)));
}
function Hw(e) {
  var n = co(Qa(e)), r = ["absolute", "fixed"].indexOf(Gr(e).position) >= 0 && hr(e) ? xu(e) : e;
  return $t(r) ? n.filter(function(t) {
    return $t(t) && Fw(t, r) && Vr(t) !== "body";
  }) : [];
}
function jw(e, n, r, t) {
  var o = n === "clippingParents" ? Hw(e) : [].concat(n), a = [].concat(o, [r]), i = a[0], l = a.reduce(function(s, u) {
    var d = uc(e, u, t);
    return s.top = uo(d.top, s.top), s.right = ic(d.right, s.right), s.bottom = ic(d.bottom, s.bottom), s.left = uo(d.left, s.left), s;
  }, uc(e, i, t));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Yw(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function xp(e) {
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
function _p(e, n) {
  n === void 0 && (n = {});
  var r = n, t = r.placement, o = t === void 0 ? e.placement : t, a = r.strategy, i = a === void 0 ? e.strategy : a, l = r.boundary, s = l === void 0 ? hw : l, u = r.rootBoundary, d = u === void 0 ? bw : u, c = r.elementContext, f = c === void 0 ? tc : c, v = r.altBoundary, p = v === void 0 ? !1 : v, h = r.padding, g = h === void 0 ? 0 : h, w = Ww(typeof g != "number" ? g : qw(g, Za)), $ = f === "popper" ? yw : tc, y = e.rects.popper, O = e.elements[p ? $ : f], T = jw($t(O) ? O : O.contextElement || mt(e.elements.popper), s, d, i), z = Ht(e.elements.reference), R = xp({
    reference: z,
    element: y,
    strategy: "absolute",
    placement: o
  }), H = as(Object.assign({}, y, R)), M = f === "popper" ? H : z, D = {
    top: T.top - M.top + w.top,
    bottom: M.bottom - T.bottom + w.bottom,
    left: T.left - M.left + w.left,
    right: M.right - T.right + w.right
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
  var r = n, t = r.placement, o = r.boundary, a = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Gp : s, d = yo(t), c = d ? l ? oc : oc.filter(function(p) {
    return yo(p) === d;
  }) : Za, f = c.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = c);
  var v = f.reduce(function(p, h) {
    return p[h] = _p(e, {
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
    sc(e),
    n,
    sc(n)
  ];
}
function Zw(e) {
  var n = e.state, r = e.options, t = e.name;
  if (!n.modifiersData[t]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, c = r.rootBoundary, f = r.altBoundary, v = r.flipVariations, p = v === void 0 ? !0 : v, h = r.allowedAutoPlacements, g = n.options.placement, w = lt(g) === g, $ = s || (w || !p ? [sa(g)] : Gw(g)), y = [g].concat($).reduce(function(G, ne) {
      return G.concat(lt(ne) === "auto" ? Xw(n, {
        placement: ne,
        boundary: d,
        rootBoundary: c,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: h
      }) : ne);
    }, []), O = n.rects.reference, T = n.rects.popper, z = /* @__PURE__ */ new Map(), R = !0, H = y[0], M = 0; M < y.length; M++) {
      var D = y[M], E = lt(D), B = yo(D) === Ja, N = ["top", bo].indexOf(E) >= 0, A = N ? "width" : "height", I = _p(n, {
        placement: D,
        boundary: d,
        rootBoundary: c,
        altBoundary: f,
        padding: u
      }), F = N ? B ? Xa : Ga : B ? bo : "top";
      O[A] > T[A] && (F = sa(F));
      var Q = sa(F), X = [];
      if (a && X.push(I[E] <= 0), l && X.push(I[F] <= 0, I[Q] <= 0), X.every(function(G) {
        return G;
      })) {
        H = D, R = !1;
        break;
      }
      z.set(D, X);
    }
    if (R)
      for (var ae = p ? 3 : 1, Te = function(ne) {
        var pe = y.find(function(Oe) {
          var Y = z.get(Oe);
          if (Y) return Y.slice(0, ne).every(function(ie) {
            return ie;
          });
        });
        if (pe)
          return H = pe, "break";
      }, ce = ae; ce > 0 && Te(ce) !== "break"; ce--) ;
    n.placement !== H && (n.modifiersData[t]._skip = !0, n.placement = H, n.reset = !0);
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
  var n = e.state, r = e.options, t = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, i = Gp.reduce(function(d, c) {
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
  var n = e.getBoundingClientRect(), r = Ut(n.width) / e.offsetWidth || 1, t = Ut(n.height) / e.offsetHeight || 1;
  return r !== 1 || t !== 1;
}
function tk(e, n, r) {
  r === void 0 && (r = !1);
  var t = hr(n), o = hr(n) && rk(n), a = mt(n), i = Ht(e, o, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (t || !t && !r) && ((Vr(n) !== "body" || nd(a)) && (l = nk(n)), hr(n) ? (s = Ht(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = ed(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function ok(e) {
  var n = Ht(e), r = e.offsetWidth, t = e.offsetHeight;
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
var dc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function cc() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
  return !n.some(function(t) {
    return !(t && typeof t.getBoundingClientRect == "function");
  });
}
function uk(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, t = r === void 0 ? [] : r, o = n.defaultOptions, a = o === void 0 ? dc : o;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, dc, a),
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
          reference: $t(l) ? co(l) : l.contextElement ? co(l.contextElement) : [],
          popper: co(s)
        };
        var y = ik(sk([].concat(t, d.options.modifiers)));
        return d.orderedModifiers = y.filter(function(O) {
          return O.enabled;
        }), p(), v.update();
      },
      forceUpdate: function() {
        if (!f) {
          var w = d.elements, $ = w.reference, y = w.popper;
          if (cc($, y)) {
            d.rects = {
              reference: tk($, xu(y), d.options.strategy === "fixed"),
              popper: ok(y)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(D) {
              return d.modifiersData[D.name] = Object.assign({}, D.data);
            });
            for (var O = 0; O < d.orderedModifiers.length; O++) {
              if (d.reset === !0) {
                d.reset = !1, O = -1;
                continue;
              }
              var T = d.orderedModifiers[O], z = T.fn, R = T.options, H = R === void 0 ? {} : R, M = T.name;
              typeof z == "function" && (d = z({
                state: d,
                options: H,
                name: M,
                instance: v
              }) || d);
            }
          }
        }
      },
      update: lk(function() {
        return new Promise(function(g) {
          v.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!cc(l, s)) return v;
    v.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function p() {
      d.orderedModifiers.forEach(function(g) {
        var w = g.name, $ = g.options, y = $ === void 0 ? {} : $, O = g.effect;
        if (typeof O == "function") {
          var T = O({
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
      c.forEach(function(g) {
        return g();
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
  n.modifiersData[r] = xp({
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
  Zp,
  gk
], bk = /* @__PURE__ */ uk({ defaultModifiers: hk }), yk = Object.defineProperty, wk = Object.defineProperties, kk = Object.getOwnPropertyDescriptors, fc = Object.getOwnPropertySymbols, $k = Object.prototype.hasOwnProperty, Ck = Object.prototype.propertyIsEnumerable, vc = (e, n, r) => n in e ? yk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Vl = (e, n) => {
  for (var r in n || (n = {})) $k.call(n, r) && vc(e, r, n[r]);
  if (fc)
    for (var r of fc(n)) Ck.call(n, r) && vc(e, r, n[r]);
  return e;
}, Ll = (e, n) => wk(e, kk(n)), pc = (e, n, r) => new Promise((t, o) => {
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
function em(e) {
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
    i = bk(F, r.value, H()), F.addEventListener("mouseenter", h), F.addEventListener("mouseleave", g), F.addEventListener("click", y), document.addEventListener("click", O);
  }
  function f() {
    const F = M();
    F && (F.removeEventListener("mouseenter", h), F.removeEventListener("mouseleave", g), F.removeEventListener("click", y)), i.destroy(), document.removeEventListener("click", O);
  }
  function v() {
    const F = M();
    if (!F) return;
    const { width: Q, height: X } = Hr(F);
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
  function g() {
    return pc(this, null, function* () {
      e.trigger === "hover" && (u = !1, yield Xn(), !s && I());
    });
  }
  function w() {
    e.trigger === "hover" && (s = !0, e.cascadeOptimization && (d = !1));
  }
  function $() {
    return pc(this, null, function* () {
      e.trigger === "hover" && (s = !1, yield Xn(), !u && I());
    });
  }
  function y() {
    if (e.trigger === "click") {
      if (e.closeOnClickReference && o.value) {
        I();
        return;
      }
      A();
    }
  }
  function O(F) {
    const Q = M();
    if (Q && !Q.contains(F.target)) {
      if (e.trigger !== "click") return;
      T(), S(e.onClickOutside, F);
    }
  }
  function T() {
    I();
  }
  function z() {
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
  function H() {
    const { placement: F, skidding: Q, distance: X } = R();
    return {
      placement: F,
      modifiers: [
        Ll(Vl({}, Jw), { enabled: o.value }),
        Ll(Vl({}, _w), { options: { offset: [Q, X] } }),
        Ll(Vl({}, Zp), {
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
    i.setOptions(H());
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
    handlePopoverMouseenter: w,
    handlePopoverMouseleave: $,
    handleClosed: z,
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
    class: m(e.classes(e.n(), e.n("$--box")))
  }, [U(e.$slots, "default"), (b(), we(Ur, {
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
      class: m(e.classes(e.n("menu"), e.n("$--box"), e.n("$--scrollbar"), e.popoverClass, [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
      onClick: n[0] || (n[0] = Rn(() => {
      }, ["stop"])),
      onMouseenter: n[1] || (n[1] = (...r) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...r)),
      onMouseleave: n[2] || (n[2] = (...r) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...r))
    }, [U(e.$slots, "menu")], 38), [[yr, e.show]])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]))], 2);
}
var nm = te({
  name: Sk,
  props: Ju,
  setup(e) {
    const { disabled: n } = zt(), { popover: r, host: t, referenceSize: o, show: a, zIndex: i, handlePopoverMouseenter: l, handlePopoverMouseleave: s, handlePopoverClose: u, handleClosed: d, setAllowClose: c, open: f, close: v, resize: p, setReference: h } = em(e);
    function g() {
      c(!0);
    }
    return {
      popover: r,
      host: t,
      referenceSize: o,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      allowClose: g,
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
nm.render = zk;
var Fo = nm;
de(Fo);
fe(Fo, Ju);
var IA = Fo, jt = Fo;
function rm(e) {
  const { multiple: n, modelValue: r, optionProviders: t, optionProvidersLength: o, optionIsIndeterminate: a } = e, i = P(""), l = P([]);
  me(r, f, { deep: !0 }), me(o, f);
  function s() {
    const v = n(), p = r();
    v && (l.value = p.map(u)), !v && !Or(p) && (i.value = u(p)), !v && Or(p) && (i.value = "");
  }
  function u(v) {
    var p;
    const h = t();
    let g = h.find(({ value: w }) => w.value === v);
    return g || (g = h.find(({ label: w }) => w.value === v)), (p = g?.label.value) != null ? p : "";
  }
  function d({ value: v, label: p }) {
    var h;
    return (h = v.value) != null ? h : p.value;
  }
  function c(v) {
    const p = n(), h = t();
    return p ? h.filter(({ selected: g }) => g.value).map(d) : d(v);
  }
  function f() {
    const v = n(), p = r(), h = t();
    v ? h.forEach((g) => g.sync(p.includes(d(g)), a ? a(g) : void 0)) : h.forEach((g) => g.sync(p === d(g))), s();
  }
  return {
    label: i,
    labels: l,
    getOptionProviderKey: d,
    computeLabel: s,
    getSelectedValue: c
  };
}
var Tk = Object.defineProperty, Ek = Object.defineProperties, Ik = Object.getOwnPropertyDescriptors, mc = Object.getOwnPropertySymbols, Bk = Object.prototype.hasOwnProperty, Dk = Object.prototype.propertyIsEnumerable, gc = (e, n, r) => n in e ? Tk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Mk = (e, n) => {
  for (var r in n || (n = {})) Bk.call(n, r) && gc(e, r, n[r]);
  if (mc)
    for (var r of mc(n)) Dk.call(n, r) && gc(e, r, n[r]);
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
])), { onKeyEscape: V() }), Nk = Object.defineProperty, hc = Object.getOwnPropertySymbols, Rk = Object.prototype.hasOwnProperty, Vk = Object.prototype.propertyIsEnumerable, bc = (e, n, r) => n in e ? Nk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Lk = (e, n) => {
  for (var r in n || (n = {})) Rk.call(n, r) && bc(e, r, n[r]);
  if (hc)
    for (var r of hc(n)) Vk.call(n, r) && bc(e, r, n[r]);
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
}), { name: Uk, n: Hk } = oe("menu-children"), jk = { ref: "menuOptions" };
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
    class: m(e.n()),
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
var tm = te({
  name: Uk,
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
        S(e.onKeyArrowX, f), f === "ArrowRight" && (S(e.onKeyArrowRightOpen), (v = r.value) == null || v.open(), yield Xr(), Gu(r.value.$el, o.value, "ArrowDown"));
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
      n: Hk,
      close: s,
      handleArrowLeft: l,
      handleArrowRight: i,
      handleMouseenter: c,
      allowClose: u,
      allowChildrenClose: d
    };
  }
});
tm.render = Yk;
var Kk = tm, Wk = Object.defineProperty, qk = Object.defineProperties, Xk = Object.getOwnPropertyDescriptors, yc = Object.getOwnPropertySymbols, Gk = Object.prototype.hasOwnProperty, Zk = Object.prototype.propertyIsEnumerable, wc = (e, n, r) => n in e ? Wk(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Jk = (e, n) => {
  for (var r in n || (n = {})) Gk.call(n, r) && wc(e, r, n[r]);
  if (yc)
    for (var r of yc(n)) Zk.call(n, r) && wc(e, r, n[r]);
  return e;
}, Qk = (e, n) => qk(e, Xk(n)), { name: xk, n: _k, classes: e$ } = oe("menu-select");
function n$(e, n) {
  const r = x("var-menu-children"), t = x("var-menu-option"), o = x("var-menu");
  return b(), we(o, {
    ref: "menu",
    show: e.show,
    "onUpdate:show": n[1] || (n[1] = (a) => e.show = a),
    tabindex: "-1",
    class: m(e.n()),
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
      class: m(e.classes(e.n("menu"), e.n("$--scrollbar"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
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
    ]))], 64))), 128)), U(e.$slots, "options")], 2)]),
    default: ue(() => [U(e.$slots, "default")]),
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
var om = te({
  name: xk,
  components: {
    VarMenu: jt,
    VarMenuOption: Ft,
    VarMenuChildren: Kk
  },
  props: ya,
  setup(e) {
    const n = wn(e, "show"), r = P(), t = P(), o = P(), a = C(() => $(e.options)), { menuOptions: i, length: l, bindMenuOptions: s } = sw(), { computeLabel: u, getSelectedValue: d, getOptionProviderKey: c } = rm({
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
      onSelect: y
    }), me(n, (B) => {
      B && Ne(v);
    }), xe(() => window, "keydown", T);
    function v() {
      const B = t.value;
      Op(B, B?.querySelector(".var-menu-option--selected-color"));
    }
    function p(B) {
      return a.value.find((N) => N.value === B);
    }
    function h(B) {
      return i.find((N) => N.value.value === B);
    }
    function g(B) {
      return B[e.childrenKey];
    }
    function w(B) {
      const N = [];
      A(B);
      function A(I) {
        I.forEach((F) => {
          N.push(F);
          const Q = g(F);
          Q && A(Q);
        });
      }
      return N;
    }
    function $(B) {
      function N(A, I) {
        return A.map((F) => {
          F = Qk(Jk({}, F), { _rawOption: F }), I && (F._parent = I);
          const Q = g(F);
          if (Q) {
            const X = N(Q, F);
            F[e.childrenKey] = X, F._children = w(X);
          }
          return F;
        });
      }
      return w(N(B));
    }
    function y(B) {
      var N, A;
      const { multiple: I, closeOnSelect: F } = e, { value: Q, label: X, selected: ae, disabled: Te, ripple: ce } = B, G = p(Q.value);
      if (G) {
        const Oe = ((N = G._children) != null ? N : []).filter((Y) => !Y.disabled).map((Y) => Y.value);
        I && ae.value && (i.forEach((Y) => {
          Oe.includes(Y.value.value) && Y.sync(!0, !1);
        }), O(G)), I && !ae.value && (i.forEach((Y) => {
          Oe.includes(Y.value.value) && Y.sync(!1, !1);
        }), O(G));
      }
      const ne = d(B), pe = (A = G?._rawOption) != null ? A : {
        value: Q.value,
        label: X.value,
        disabled: Te.value,
        ripple: ce.value
      };
      S(e.onSelect, c(B), pe), S(e["onUpdate:modelValue"], ne), !I && F && (r.value.$el.focus(), M());
    }
    function O(B) {
      let N = B._parent;
      for (; N; ) {
        const A = h(N.value), I = g(N).filter((X) => !X.disabled), F = I.every((X) => !h(X.value).selected.value), Q = I.every((X) => h(X.value).selected.value);
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
      (N === "ArrowDown" || N === "ArrowUp") && Gu(r.value.$el, t.value, N, (A, I, F) => F ? !0 : z(A) === z(I));
    }
    function z(B) {
      var N, A;
      if (B.classList.contains("var-menu-option--children-trigger")) return (N = B.parentNode) == null ? void 0 : N.parentNode;
      if (B.classList.contains("var-checkbox")) {
        const I = (A = B.parentNode) == null ? void 0 : A.parentNode;
        if (I) return z(I);
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
    function H() {
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
      open: H,
      close: M,
      resize: D,
      setReference: E
    };
  }
});
om.render = n$;
var xa = om;
de(xa);
fe(xa, ya);
var BA = xa, Yt = xa, r$ = Object.defineProperty, kc = Object.getOwnPropertySymbols, t$ = Object.prototype.hasOwnProperty, o$ = Object.prototype.propertyIsEnumerable, $c = (e, n, r) => n in e ? r$(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, a$ = (e, n) => {
  for (var r in n || (n = {})) t$.call(n, r) && $c(e, r, n[r]);
  if (kc)
    for (var r of kc(n)) o$.call(n, r) && $c(e, r, n[r]);
  return e;
}, am = a$({
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
}), { name: i$, n: l$ } = oe("auto-complete"), s$ = ["tabindex"];
function u$(e, n) {
  const r = x("var-input"), t = x("var-menu-option"), o = x("var-menu-select"), a = x("var-form-details");
  return b(), k("div", {
    ref: "root",
    class: m(e.n()),
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
    class: m(e.n("menu-select")),
    "popover-class": e.variant === "standard" ? e.n("--standard-menu-margin") : e.variant === "filled" ? e.n("--filled-menu-margin") : "",
    "onUpdate:modelValue": e.handleAutoComplete,
    onKeyEscape: e.handleKeyEscape
  }, {
    options: ue(() => [L("div", { class: m(e.n("options")) }, [(b(!0), k(Be, null, Ye(e.viewOptions, (i) => (b(), we(t, {
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
        fn: ue(() => [U(e.$slots, "prepend-icon")]),
        key: "0"
      } : void 0,
      e.$slots["append-icon"] ? {
        name: "append-icon",
        fn: ue(() => [U(e.$slots, "append-icon")]),
        key: "1"
      } : void 0,
      e.$slots["clear-icon"] ? {
        name: "clear-icon",
        fn: ue(({ clear: i }) => [U(e.$slots, "clear-icon", { clear: i })]),
        key: "2"
      } : void 0,
      e.$slots["extra-message"] ? {
        name: "extra-message",
        fn: ue(() => [U(e.$slots, "extra-message")]),
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
var im = te({
  name: i$,
  components: {
    VarInput: Lt,
    VarMenuSelect: Yt,
    VarMenuOption: Ft,
    VarFormDetails: Un
  },
  props: am,
  setup(e) {
    const n = P(), r = P(), t = P(!1), o = wn(e, "modelValue"), a = P([]), i = P(!1), l = C(() => {
      const { maxlength: I } = e;
      return I ? Or(o.value) ? `0 / ${I}` : `${String(o.value).length}/${I}` : "";
    }), { errorMessage: s, validateWithTrigger: u, validate: d, resetValidation: c } = Jn(), { bindForm: f, form: v } = Kn();
    let p = !1;
    const h = {
      reset: g,
      resetValidation: c,
      validate: w
    };
    Qv(() => n.value, "click", () => {
      if (p) {
        p = !1;
        return;
      }
      y();
    }), me(() => [e.options, t.value], R), S(f, h), xe(() => window, "keydown", z);
    function g() {
      S(e["onUpdate:modelValue"], ""), c();
    }
    function w() {
      return d(e.rules, e.modelValue);
    }
    function $() {
      t.value || e.disabled || v?.disabled.value || (t.value = !0, r.value.focus(), S(e.onFocus), T("onFocus"));
    }
    function y() {
      t.value && (t.value = !1, i.value = !1, r.value.blur(), S(e.onBlur), T("onBlur"));
    }
    function O() {
      i.value || y();
    }
    function T(I) {
      Ne(() => {
        const { validateTrigger: F, rules: Q, modelValue: X } = e;
        u(F, I, Q, X);
      });
    }
    function z(I) {
      return Cc(this, null, function* () {
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
        Q === "Enter" && (yield Xr(), (F = r.value) == null || F.focus());
      });
    }
    function R() {
      t.value && (i.value = A(o.value)), i.value && (a.value = e.options);
    }
    function H(I, F) {
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
      return Cc(this, null, function* () {
        var F;
        e.maxlength != null && (I = I.slice(0, Z(e.maxlength))), I !== o.value && (o.value = I, S(e.onChange, I), T("onChange")), yield Xr(), (F = r.value) == null || F.focus();
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
      handleInput: H,
      handleClear: M,
      handleClick: D,
      handleChange: E,
      handleBlur: O,
      handleKeyEscape: N,
      handleAutoComplete: B,
      reset: g,
      validate: w,
      resetValidation: c,
      blur: y,
      focus: $
    };
  }
});
im.render = u$;
var _a = im;
de(_a);
fe(_a, am);
var DA = _a, is = _a;
var lm = 3600, sm = lm * 24, d$ = sm * 7, Uo = 1e3, Sc = 60 * Uo, c$ = lm * Uo, f$ = sm * Uo, v$ = d$ * Uo, um = "millisecond", ua = "second", da = "minute", ca = "hour";
var Pc = "week", rt = "month", p$ = "quarter", oo = "year", ao = "date";
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
  var t = (r.year() - n.year()) * 12 + (r.month() - n.month()), o = n.clone().add(t, rt), a = r - o < 0, i = n.clone().add(t + (a ? -1 : 1), rt);
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
var dm = "$isDayjsObject", rd = function(n) {
  return n instanceof ei || !!(n && n[dm]);
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
    this.$L = wa(r.locale, null, !0), this.parse(r), this.$x = this.$x || r.x || {}, this[dm] = !0;
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
    var a = this, i = un.u(o) ? !0 : o, l = un.p(t), s = function(w, $) {
      var y = un.w(a.$u ? Date.UTC(a.$y, $, w) : new Date(a.$y, $, w), a);
      return i ? y : y.endOf("day");
    }, u = function(w, $) {
      return un.w(a.toDate()[w].apply(a.toDate("s"), (i ? [
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
      case Pc:
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
    var a, i = un.p(t), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a.day = l + "Date", a[ao] = l + "Date", a[rt] = l + "Month", a[oo] = l + "FullYear", a[ca] = l + "Hours", a[da] = l + "Minutes", a[ua] = l + "Seconds", a[um] = l + "Milliseconds", a)[i], u = i === "day" ? this.$D + (o - this.$W) : o;
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
    if (l === "month") return this.set(rt, this.$M + t);
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
    var i = t || "YYYY-MM-DDTHH:mm:ssZ", l = un.z(this), s = this.$H, u = this.$m, d = this.$M, c = a.weekdays, f = a.months, v = a.meridiem, p = function(y, O, T, z) {
      return y && (y[O] || y(o, i)) || T[O].slice(0, z);
    }, h = function(y) {
      return un.s(s % 12 || 12, y, "0");
    }, g = v || function($, y, O) {
      var T = $ < 12 ? "AM" : "PM";
      return O ? T.toLowerCase() : T;
    }, w = function(y) {
      switch (y) {
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
          return g(s, u, !0);
        case "A":
          return g(s, u, !1);
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
    return i.replace(h$, function($, y) {
      return y || w($) || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(t, o, a) {
    var i = this, l = un.p(o), s = ln(t), u = (s.utcOffset() - this.utcOffset()) * Sc, d = this - s, c = function() {
      return un.m(i, s);
    }, f;
    switch (l) {
      case oo:
        f = c() / 12;
        break;
      case rt:
        f = c();
        break;
      case p$:
        f = c() / 3;
        break;
      case Pc:
        f = (d - u) / v$;
        break;
      case "day":
        f = (d - u) / f$;
        break;
      case ca:
        f = d / c$;
        break;
      case da:
        f = d / Sc;
        break;
      case ua:
        f = d / Uo;
        break;
      default:
        f = d;
        break;
    }
    return a ? f : un.a(f);
  }, n.daysInMonth = function() {
    return this.endOf(rt).$D;
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
})(), cm = ei.prototype;
ln.prototype = cm;
[
  ["$ms", um],
  ["$s", ua],
  ["$m", da],
  ["$H", ca],
  ["$W", "day"],
  ["$M", rt],
  ["$y", oo],
  ["$D", ao]
].forEach(function(e) {
  cm[e[1]] = function(n) {
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
}, I$ = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, Oc = /\d/, no = /\d\d/, B$ = /\d{3}/, D$ = /\d{4}/, Sr = /\d\d?/, M$ = /[+-]?\d+/, A$ = /[+-]\d\d:?(\d\d)?|Z/, ro = /\d*[^-_:/,()\s\d]+/, st = {}, fm = function(n) {
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
}, zc = [A$, function(e) {
  var n = this.zone || (this.zone = {});
  n.offset = N$(e);
}], Fl = function(n) {
  var r = st[n];
  return r && (r.indexOf ? r : r.s.concat(r.f));
}, Tc = function(n, r) {
  var t, o = st.meridiem;
  if (!o) t = n === (r ? "pm" : "PM");
  else for (var a = 1; a <= 24; a += 1) if (n.indexOf(o(a, 0, r)) > -1) {
    t = a > 12;
    break;
  }
  return t;
}, R$ = {
  A: [ro, function(e) {
    this.afternoon = Tc(e, !1);
  }],
  a: [ro, function(e) {
    this.afternoon = Tc(e, !0);
  }],
  Q: [Oc, function(e) {
    this.month = (e - 1) * 3 + 1;
  }],
  S: [Oc, function(e) {
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
    this.year = fm(e);
  }],
  YYYY: [D$, Wn("year")],
  Z: zc,
  ZZ: zc
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
        var v = f.regex, p = f.parser, h = s.slice(c), g = v.exec(h)[0];
        p.call(u, g), s = s.replace(g, "");
      }
    }
    return V$(u), u;
  };
}
var F$ = function(n, r, t, o) {
  try {
    if (["x", "X"].indexOf(r) > -1) return /* @__PURE__ */ new Date((r === "X" ? 1e3 : 1) * n);
    var a = L$(r)(n), i = a.year, l = a.month, s = a.day, u = a.hours, d = a.minutes, c = a.seconds, f = a.milliseconds, v = a.zone, p = a.week, h = /* @__PURE__ */ new Date(), g = s || (!i && !l ? h.getDate() : 1), w = i || h.getFullYear(), $ = 0;
    i && !l || ($ = l > 0 ? l - 1 : h.getMonth());
    var y = u || 0, O = d || 0, T = c || 0, z = f || 0;
    if (v) return new Date(Date.UTC(w, $, g, y, O, T, z + v.offset * 60 * 1e3));
    if (t) return new Date(Date.UTC(w, $, g, y, O, T, z));
    var R = new Date(w, $, g, y, O, T, z);
    return p && (R = o(R).week(p).toDate()), R;
  } catch {
    return /* @__PURE__ */ new Date("");
  }
}, U$ = (function(e, n, r) {
  r.p.customParseFormat = !0, e && e.parseTwoDigitYear && (fm = e.parseTwoDigitYear);
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
        var g = r.apply(this, s);
        if (g.isValid()) {
          this.$d = g.$d, this.$L = g.$L, this.init();
          break;
        }
        h === p && (this.$d = /* @__PURE__ */ new Date(""));
      }
    else o.call(this, a);
  };
}), H$ = (function(e, n) {
  n.prototype.isSameOrAfter = function(r, t) {
    return this.isSame(r, t) || this.isAfter(r, t);
  };
}), j$ = (function(e, n) {
  n.prototype.isSameOrBefore = function(r, t) {
    return this.isSame(r, t) || this.isBefore(r, t);
  };
}), Ec = (e) => Sn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, Ic = (e) => Sn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, Y$ = (e) => {
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
}, Bc = !1, Ho = () => (Bc || (ln.extend(U$), ln.extend(H$), ln.extend(j$), Bc = !0), ln), ss = (e) => e, Dc = (e) => e ** 3, vm = (e) => e < 0.5 ? Dc(e * 2) / 2 : 1 - Dc((1 - e) * 2) / 2, Zr = (e, n, r = "") => {
  if (e === void 0 && (e = ""), e.length >= n) return e;
  const t = n - e.length, o = Math.floor(t / r.length);
  return r.repeat(o) + r.slice(0, t % r.length) + e;
}, K$ = Object.defineProperty, Mc = Object.getOwnPropertySymbols, W$ = Object.prototype.hasOwnProperty, q$ = Object.prototype.propertyIsEnumerable, Ac = (e, n, r) => n in e ? K$(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, X$ = (e, n) => {
  for (var r in n || (n = {})) W$.call(n, r) && Ac(e, r, n[r]);
  if (Mc)
    for (var r of Mc(n)) q$.call(n, r) && Ac(e, r, n[r]);
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
}), G$ = "background-image", Z$ = "lazy-loading", J$ = "lazy-error", Nc = "lazy-attempt", Q$ = [
  "scroll",
  "wheel",
  "mousewheel",
  "resize",
  "animationend",
  "transitionend",
  "touchmove"
], us = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Kt = [], ka = [], pm = Y$(100), An = {
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
function mm(e, n) {
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
    attempt: e.getAttribute(Nc) ? Number(e.getAttribute(Nc)) : An.attempt
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
    e._lazy.attemptLock = !1, pm.add(n), mm(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? _$(e) : gm(e);
  });
}
function gm(e) {
  if (e._lazy.attemptLock) return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (pm.has(n)) {
    mm(e, n), e._lazy.attemptLock = !1;
    return;
  }
  x$(e), tC(e, n);
}
function od(e) {
  return ni(this, null, function* () {
    yield Xn(), R0(e) && gm(e);
  });
}
function jo() {
  Kt.forEach((e) => od(e));
}
function oC(e) {
  return ni(this, null, function* () {
    !Kt.includes(e) && Kt.push(e), Ny(e).forEach(eC), yield od(e);
  });
}
function ad(e) {
  Rt(Kt, e), Kt.length === 0 && nC();
}
function aC(e, n) {
  const { src: r, arg: t } = e._lazy;
  return r !== n.value || t !== n.arg;
}
function hm(e, n) {
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
    yield hm(e, n);
  });
}
function lC(e = {}) {
  const { events: n, loading: r, error: t, attempt: o, throttleWait: a, filter: i } = e;
  An.events = n ?? An.events, An.loading = r ?? An.loading, An.error = t ?? An.error, An.attempt = o ?? An.attempt, An.throttleWait = a ?? An.throttleWait, An.filter = i;
}
var bm = {
  mounted: hm,
  unmounted: ad,
  updated: iC,
  install(e, n) {
    lC(n), td = Vu(jo, An.throttleWait), e.directive("lazy", this);
  }
}, MA = bm, wo = bm, ym = {
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
    class: m(e.classes(e.n(), e.n("$--box"), [e.isInternalSize(e.size), e.n(`--${e.size}`)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")], [e.hoverable, e.n("--hoverable")])),
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
    class: m(e.n("image")),
    src: e.src,
    alt: e.alt,
    style: J({ objectFit: e.fit }),
    "lazy-loading": e.loading,
    "lazy-error": e.error,
    onLoad: n[0] || (n[0] = (...t) => e.handleLoad && e.handleLoad(...t))
  }, null, 46, fC)), [[r, e.src]]) : (b(), k("img", {
    key: 1,
    role: "img",
    class: m(e.n("image")),
    src: e.src,
    alt: e.alt,
    style: J({ objectFit: e.fit }),
    onLoad: n[1] || (n[1] = (...t) => e.handleLoad && e.handleLoad(...t)),
    onError: n[2] || (n[2] = (...t) => e.handleError && e.handleError(...t))
  }, null, 46, vC))], 64)) : (b(), k("div", {
    key: 1,
    ref: "textElement",
    class: m(e.n("text")),
    style: J({ transform: `scale(${e.scale})` })
  }, [U(e.$slots, "default")], 6))], 6);
}
var wm = te({
  name: uC,
  directives: { Lazy: wo },
  props: ym,
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
wm.render = pC;
var ti = wm;
de(ti);
fe(ti, ym);
var AA = ti, ds = ti, km = {
  offset: [Number, String],
  vertical: Boolean
}, { name: mC, n: gC, classes: hC } = oe("avatar-group");
function bC(e, n) {
  return b(), k("div", {
    class: m(e.classes(e.n(), [
      e.vertical,
      e.n("--column"),
      e.n("--row")
    ])),
    style: J(e.rootStyles)
  }, [U(e.$slots, "default")], 6);
}
var $m = te({
  name: mC,
  props: km,
  setup(e) {
    return {
      rootStyles: C(() => e.offset == null ? {} : { "--avatar-group-offset": ze(e.offset) }),
      n: gC,
      classes: hC
    };
  }
});
$m.render = bC;
var oi = $m;
de(oi);
fe(oi, km);
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
  return b(), k("div", { class: m(e.n()) }, [e.$slots.default ? (b(), k("div", {
    key: 0,
    class: m(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
  }, [U(e.$slots, "default"), e.loading ? (b(), k("div", {
    key: 0,
    class: m(e.n("content-mask"))
  }, null, 2)) : q("v-if", !0)], 2)) : q("v-if", !0), e.isShow ? (b(), k("div", {
    key: 1,
    class: m(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
  }, [
    e.type === "circle" ? (b(), k("div", {
      key: 0,
      class: m(e.n("circle"))
    }, [L("span", {
      class: m(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
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
      class: m(e.classes(e.n(t), e.n(`${t}--${e.size}`)))
    }, [(b(!0), k(Be, null, Ye(r, (o) => (b(), k("div", {
      key: o + t,
      style: J({ backgroundColor: e.color }),
      class: m(e.classes(e.n(`${t}-item`), e.n(`${t}-item--${e.size}`)))
    }, null, 6))), 128))], 2)) : q("v-if", !0)], 64))), 128)),
    e.$slots.description || e.description ? (b(), k("div", {
      key: 1,
      class: m(e.classes(e.n("description"), e.n(`description--${e.size}`))),
      style: J({ color: e.color })
    }, [U(e.$slots, "description", {}, () => [Le(ve(e.description), 1)])], 6)) : q("v-if", !0)
  ], 2)) : q("v-if", !0)], 2);
}
var Cm = te({
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
Cm.render = $C;
var ai = Cm;
de(ai);
fe(ai, Yr);
var RA = ai, Ct = ai, CC = Object.defineProperty, SC = Object.defineProperties, PC = Object.getOwnPropertyDescriptors, Rc = Object.getOwnPropertySymbols, OC = Object.prototype.hasOwnProperty, zC = Object.prototype.propertyIsEnumerable, Vc = (e, n, r) => n in e ? CC(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Lc = (e, n) => {
  for (var r in n || (n = {})) OC.call(n, r) && Vc(e, r, n[r]);
  if (Rc)
    for (var r of Rc(n)) zC.call(n, r) && Vc(e, r, n[r]);
  return e;
}, Fc = (e, n) => SC(e, PC(n)), Sm = {
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
  loadingSize: Fc(Lc({}, Fe(Yr, "size")), { default: void 0 }),
  loadingColor: Fc(Lc({}, Fe(Yr, "color")), { default: "currentColor" }),
  onClick: V(),
  onTouchstart: V()
}, Pm = /* @__PURE__ */ Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function TC() {
  const { bindChildren: e, childProviders: n, length: r } = Bn(Pm);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function EC() {
  const { bindParent: e, parentProvider: n, index: r } = In(Pm);
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
    class: m(e.classes(e.n(), e.n("$--box"), e.n(`--${e.states.size}`), [
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
      class: m(e.n("loading")),
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
    L("div", { class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")])) }, [U(e.$slots, "default")], 2),
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
var Om = te({
  name: IC,
  components: {
    VarLoading: Ct,
    VarHoverOverlay: Gn
  },
  directives: {
    Ripple: vn,
    Hover: jn
  },
  props: Sm,
  setup(e) {
    const n = P(!1), r = P(!1), { buttonGroup: t } = EC(), { hovering: o, handleHovering: a } = ur(), i = C(() => {
      var f, v, p, h, g, w, $;
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
      const { type: y, size: O, color: T, textColor: z, mode: R, elevation: H } = t;
      return {
        elevation: "",
        type: (p = e.type) != null ? p : y.value,
        size: (h = e.size) != null ? h : O.value,
        color: (g = e.color) != null ? g : T.value,
        textColor: (w = e.textColor) != null ? w : z.value,
        text: R.value === "text" || R.value === "outline",
        outline: R.value === "outline",
        iconContainer: R.value === "tonal" || R.value === "icon-container",
        filledDefault: R.value === "normal" && (($ = e.type) != null ? $ : y.value) === "default" && c(H.value)
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
Om.render = AC;
var ii = Om;
de(ii);
fe(ii, Sm);
var VA = ii, tr = ii, zm = {
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
}, { name: NC, n: RC, classes: VC } = oe("back-top");
function LC(e, n) {
  const r = x("var-icon"), t = x("var-button");
  return b(), we(Ur, {
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
  }, e.$attrs, { onClick: n[0] || (n[0] = Rn((...o) => e.handleClick && e.handleClick(...o), ["stop"])) }), [U(e.$slots, "default", {}, () => [j(t, {
    elevation: e.elevation,
    type: "primary",
    "var-back-top-cover": ""
  }, {
    default: ue(() => [j(r, { name: "chevron-up" })]),
    _: 1
  }, 8, ["elevation"])])], 16)], 8, ["disabled"]);
}
var Tm = te({
  name: NC,
  components: {
    VarButton: tr,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: zm,
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
        animation: vm
      });
    }
    function s() {
      o = e.target ? Sp(e.target, "BackTop") : dt(r.value);
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
Tm.render = LC;
var li = Tm;
de(li);
fe(li, zm);
var LA = li, fs = li, Em = {
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
}, FC = Object.defineProperty, Uc = Object.getOwnPropertySymbols, UC = Object.prototype.hasOwnProperty, HC = Object.prototype.propertyIsEnumerable, Hc = (e, n, r) => n in e ? FC(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, jC = (e, n) => {
  for (var r in n || (n = {})) UC.call(n, r) && Hc(e, r, n[r]);
  if (Uc)
    for (var r of Uc(n)) HC.call(n, r) && Hc(e, r, n[r]);
  return e;
}, { name: YC, n: KC, classes: WC } = oe("badge"), qC = { key: 0 };
function XC(e, n) {
  const r = x("var-icon");
  return b(), k("div", { class: m(e.classes(e.n(), e.n("$--box"))) }, [U(e.$slots, "default"), j(bn, {
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
      class: m(e.n("icon"))
    }, [U(e.$slots, "icon", {}, () => [j(r, {
      name: e.icon,
      namespace: e.namespace
    }, null, 8, ["name", "namespace"])])], 2)) : q("v-if", !0), U(e.$slots, "value", {}, () => [!e.$slots.icon && !e.icon && !e.dot ? (b(), k("span", qC, ve(e.value), 1)) : q("v-if", !0)])], 16), [[yr, !e.hidden]])]),
    _: 3
  }, 8, ["name"])], 2);
}
var Im = te({
  name: YC,
  components: { VarIcon: Je },
  inheritAttrs: !1,
  props: Em,
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
Im.render = XC;
var si = Im;
de(si);
fe(si, Em);
var FA = si, ko = si, Bm = {
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
}, Dm = /* @__PURE__ */ Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function GC() {
  const { childProviders: e, length: n, bindChildren: r } = Bn(Dm);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
  };
}
var ZC = Object.defineProperty, jc = Object.getOwnPropertySymbols, JC = Object.prototype.hasOwnProperty, QC = Object.prototype.propertyIsEnumerable, Yc = (e, n, r) => n in e ? ZC(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Kc = (e, n) => {
  for (var r in n || (n = {})) JC.call(n, r) && Yc(e, r, n[r]);
  if (jc)
    for (var r of jc(n)) QC.call(n, r) && Yc(e, r, n[r]);
  return e;
}, { name: xC, n: _C, classes: eS } = oe("bottom-navigation"), { n: ui } = oe("bottom-navigation-item"), Wc = ui("--right-half-space"), qc = ui("--left-half-space"), Xc = ui("--right-space"), nS = { type: "primary" };
function rS(e, n) {
  const r = x("var-button");
  return b(), k(Be, null, [L("div", Xe({
    ref: "bottomNavigationDom",
    class: e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.bordered || e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")], [e.variant, e.n("--variant")]),
    style: `z-index:${e.zIndex}`
  }, e.$attrs), [U(e.$slots, "default"), e.$slots.fab ? (b(), we(r, Xe({
    key: 0,
    class: e.classes(e.n("fab"), [
      e.length % 2,
      e.n("--fab-right"),
      e.n("--fab-center")
    ]),
    "var-bottom-navigation__fab": ""
  }, e.fabProps, { onClick: e.handleFabClick }), {
    default: ue(() => [U(e.$slots, "fab")]),
    _: 3
  }, 16, ["class", "onClick"])) : q("v-if", !0)], 16), e.fixed && e.placeholder ? (b(), k("div", {
    key: 0,
    class: m(e.n("placeholder")),
    style: J({ height: e.placeholderHeight })
  }, null, 6)) : q("v-if", !0)], 64);
}
var Mm = te({
  name: xC,
  components: { VarButton: tr },
  props: Bm,
  setup(e, { slots: n }) {
    const r = P(null), t = C(() => e.animated), o = C(() => e.active), a = C(() => e.activeColor), i = C(() => e.inactiveColor), l = C(() => e.variant), s = P(), u = P({}), { length: d, bottomNavigationItems: c, bindBottomNavigationItem: f } = GC();
    f({
      animated: t,
      active: o,
      activeColor: a,
      inactiveColor: i,
      variant: l,
      onToggle: w
    }), me(() => d.value, v), me(() => e.fabProps, (D) => {
      u.value = Kc(Kc({}, nS), D);
    }, {
      immediate: !0,
      deep: !0
    }), wr(M), En(() => {
      M(), n.fab && T(d.value);
    }), qt(() => {
      O(), n.fab && T(d.value);
    });
    function v() {
      d.value === 0 || p() || h() || g();
    }
    function p() {
      return c.find(({ name: D }) => o.value === D.value);
    }
    function h() {
      return c.find(({ index: D }) => o.value === D.value);
    }
    function g() {
      nr(o.value) && (o.value < 0 ? S(e["onUpdate:active"], 0) : o.value > d.value - 1 && S(e["onUpdate:active"], d.value - 1));
    }
    function w(D) {
      o.value !== D && (e.onBeforeChange ? $(D) : y(D));
    }
    function $(D) {
      const E = qr(S(e.onBeforeChange, D));
      Promise.all(E).then((B) => {
        B.every(Boolean) && y(D);
      });
    }
    function y(D) {
      S(e["onUpdate:active"], D), S(e.onChange, D);
    }
    function O() {
      R().forEach((D) => {
        D.classList.remove(Wc, qc, Xc);
      });
    }
    function T(D) {
      const E = R(), B = E.length, N = D % 2 === 0;
      E.forEach((A, I) => {
        z(N, A, I, B);
      });
    }
    function z(D, E, B, N) {
      const A = B === N - 1;
      if (!D && A) {
        E.classList.add(Xc);
        return;
      }
      const I = B === N / 2 - 1, F = B === N / 2;
      I ? E.classList.add(Wc) : F && E.classList.add(qc);
    }
    function R() {
      return Array.from(r.value.querySelectorAll(`.${ui()}`));
    }
    function H() {
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
      handleFabClick: H
    };
  }
});
Mm.render = rS;
var di = Mm;
de(di);
fe(di, Bm);
var UA = di, vs = di, Am = {
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
  const { parentProvider: e, index: n, bindParent: r } = In(Dm);
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
    class: m(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")], [e.animated, e.n("--animated")])),
    style: J({ color: e.isActive ? e.activeColor : e.inactiveColor }),
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [L("div", { class: m(e.classes(e.n("icon-container"), [e.variant, e.n("--variant-icon-container")], [e.isActive && e.variant, e.n("--variant-active")])) }, [e.badge ? (b(), we(t, Xe({ key: 0 }, e.badgeProps, {
    class: e.n("badge"),
    "var-bottom-navigation-item-cover": ""
  }), {
    default: ue(() => [L("span", { class: m(e.n("icon")) }, [U(e.$slots, "icon", { active: e.isActive }, () => [e.icon ? (b(), we(r, {
      key: 0,
      name: e.icon,
      namespace: e.namespace
    }, null, 8, ["name", "namespace"])) : q("v-if", !0)])], 2)]),
    _: 3
  }, 16, ["class"])) : e.$slots.icon || e.icon ? (b(), k("span", {
    key: 1,
    class: m(e.n("icon"))
  }, [U(e.$slots, "icon", { active: e.isActive }, () => [e.icon ? (b(), we(r, {
    key: 0,
    name: e.icon,
    namespace: e.namespace
  }, null, 8, ["name", "namespace"])) : q("v-if", !0)])], 2)) : q("v-if", !0)], 2), L("span", { class: m(e.n("label")) }, [U(e.$slots, "default", {}, () => [Le(ve(e.label), 1)])], 2)], 6)), [[o]]);
}
var Nm = te({
  name: oS,
  components: {
    VarBadge: ko,
    VarIcon: Je
  },
  directives: { Ripple: vn },
  props: Am,
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
Nm.render = sS;
var ci = Nm;
de(ci);
fe(ci, Am);
var HA = ci, ps = ci, Rm = {
  separator: String,
  onClick: V()
}, Vm = /* @__PURE__ */ Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function uS() {
  const { childProviders: e, bindChildren: n, length: r } = Bn(Vm);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function dS() {
  const { parentProvider: e, bindParent: n, index: r } = In(Vm);
  return rr(!!n, "Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var { name: cS, n: fS, classes: vS } = oe("breadcrumb");
function pS(e, n) {
  return b(), k("div", { class: m(e.n()) }, [L("div", {
    class: m(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
    onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [U(e.$slots, "default")], 2), e.isLast ? q("v-if", !0) : U(e.$slots, "separator", { key: 0 }, () => {
    var r;
    return [L("div", {
      class: m(e.n("separator")),
      "aria-hidden": "true"
    }, ve((r = e.separator) != null ? r : e.parentSeparator), 3)];
  })], 2);
}
var Lm = te({
  name: cS,
  props: Rm,
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
Lm.render = pS;
var fi = Lm;
de(fi);
fe(fi, Rm);
var jA = fi, ms = fi, Fm = { separator: {
  type: String,
  default: "/"
} }, { name: mS, n: gS } = oe("breadcrumbs");
function hS(e, n) {
  return b(), k("div", {
    class: m(e.n()),
    role: "navigation",
    "aria-label": "Breadcrumbs"
  }, [U(e.$slots, "default")], 2);
}
var Um = te({
  name: mS,
  props: Fm,
  setup(e) {
    const n = C(() => e.separator), { bindBreadcrumbList: r, length: t } = uS();
    return r({
      length: t,
      separator: n
    }), { n: gS };
  }
});
Um.render = hS;
var vi = Um;
de(vi);
fe(vi, Fm);
var YA = vi, gs = vi, Hm = {
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
  return b(), k("div", { class: m(e.classes(e.n(), e.n("$--box"), [e.mode, `${e.n(`--mode-${e.mode}`)}`], [
    e.vertical,
    e.n("--vertical"),
    e.n("--horizontal")
  ], [e.mode === "normal", e.formatElevation(e.elevation, 2)])) }, [U(e.$slots, "default")], 2);
}
var jm = te({
  name: bS,
  props: Hm,
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
jm.render = kS;
var pi = jm;
de(pi);
fe(pi, Hm);
var KA = pi, hs = pi, Ym = {
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
    class: m(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.variant === "outlined" || e.outline, e.n("--outline")], [e.variant === "filled", e.n("--filled")], [e.surfaceLow, e.n("--surface-low")], [!e.normalizedHoverable.disabled, e.n("--cursor")], [e.variant === "standard" || e.outline, e.formatElevation(e.elevation, 1)])),
    style: J({ zIndex: e.floated ? e.zIndex : void 0 }),
    onClick: n[0] || (n[0] = (...l) => e.handleClick && e.handleClick(...l))
  }, [L("div", {
    ref: "cardFloater",
    class: m(e.n("floater")),
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
    U(e.$slots, "image", {}, () => [e.src ? (b(), k("img", {
      key: 0,
      class: m(e.n("image")),
      style: J({
        objectFit: e.fit,
        height: e.toSizeUnit(e.imageHeight),
        width: e.toSizeUnit(e.imageWidth)
      }),
      src: e.src,
      alt: e.alt
    }, null, 14, zS)) : q("v-if", !0)]),
    L("div", { class: m(e.n("container")) }, [
      U(e.$slots, "title", { slotClass: e.n("title") }, () => [e.title ? (b(), k("div", {
        key: 0,
        class: m(e.n("title"))
      }, ve(e.title), 3)) : q("v-if", !0)]),
      U(e.$slots, "subtitle", { slotClass: e.n("subtitle") }, () => [e.subtitle ? (b(), k("div", {
        key: 0,
        class: m(e.n("subtitle"))
      }, ve(e.subtitle), 3)) : q("v-if", !0)]),
      e.$slots.default ? (b(), k("div", {
        key: 0,
        class: m(e.n("content"))
      }, [U(e.$slots, "default")], 2)) : q("v-if", !0),
      U(e.$slots, "description", { slotClass: e.n("description") }, () => [e.description ? (b(), k("div", {
        key: 0,
        class: m(e.n("description"))
      }, ve(e.description), 3)) : q("v-if", !0)]),
      e.$slots.extra ? (b(), k("div", {
        key: 1,
        class: m(e.n("footer"))
      }, [U(e.$slots, "extra")], 2)) : q("v-if", !0),
      e.$slots["floating-content"] && !e.isRow ? (b(), k("div", {
        key: 2,
        class: m(e.n("floating-content")),
        style: J({
          height: e.contentHeight,
          opacity: e.opacity,
          transition: `opacity ${e.floatingDuration * 2}ms`
        })
      }, [U(e.$slots, "floating-content")], 6)) : q("v-if", !0)
    ], 2),
    j(r, {
      hovering: !e.normalizedHoverable.disabled && !e.floated ? e.hovering : !1,
      color: e.normalizedHoverable.color
    }, null, 8, ["hovering", "color"]),
    e.showFloatingButtons ? (b(), k("div", {
      key: 0,
      class: m(e.classes(e.n("floating-buttons"), e.n("$--box"))),
      style: J({
        zIndex: e.zIndex,
        opacity: e.opacity,
        transition: `opacity ${e.floatingDuration * 2}ms`
      })
    }, [U(e.$slots, "close-button", {}, () => [j(o, {
      "var-card-cover": "",
      class: m(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
      onClick: Rn(e.close, ["stop"])
    }, {
      default: ue(() => [j(t, {
        "var-card-cover": "",
        name: "window-close",
        class: m(e.n("close-button-icon"))
      }, null, 8, ["class"])]),
      _: 1
    }, 8, ["class", "onClick"])])], 6)) : q("v-if", !0)
  ], 6), L("div", {
    class: m(e.n("holder")),
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
var Km = te({
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
  props: Ym,
  setup(e) {
    const n = P(null), r = P(null), t = P("auto"), o = P("auto"), a = P("100%"), i = P("100%"), l = P("auto"), s = P("auto"), u = P(void 0), d = P("hidden"), c = P("0px"), f = P("0"), v = C(() => e.layout === "row"), p = C(() => e.surface === "low" && e.variant !== "filled"), { hovering: h, handleHovering: g } = ur(), w = P(!1), $ = P(!1), { zIndex: y } = Ao(() => e.floating, 1), O = C(() => B(e.ripple)), T = C(() => N(e.hoverable));
    let z = "auto", R = "auto", H = null;
    const M = P(null);
    let D = !1;
    Mo(() => e.floating, () => !v.value), me(() => e.floating, (Q) => {
      v.value || Ne(() => {
        Q ? (D = !0, E()) : D && A();
      });
    }, { immediate: !0 });
    function E() {
      clearTimeout(M.value), clearTimeout(H), M.value = null, M.value = setTimeout(() => $S(null, null, function* () {
        const { width: Q, height: X, left: ae, top: Te } = kn(n.value);
        t.value = ze(Q), o.value = ze(X), a.value = t.value, i.value = o.value, l.value = ze(Te), s.value = ze(ae), u.value = "fixed", z = l.value, R = s.value, w.value = !0, yield Xn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", c.value = "auto", f.value = "1", d.value = "auto", $.value = !0;
      }), O.value.disabled ? 0 : OS);
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
      clearTimeout(H), clearTimeout(M.value), M.value = null, a.value = t.value, i.value = o.value, l.value = z, s.value = R, c.value = "0px", f.value = "0", w.value = !1, H = setTimeout(() => {
        t.value = "auto", o.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", z = "auto", R = "auto", d.value = "hidden", u.value = void 0, $.value = !1;
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
      zIndex: y,
      isRow: v,
      surfaceLow: p,
      normalizedRipple: O,
      normalizedHoverable: T,
      hovering: h,
      handleHovering: g,
      showFloatingButtons: w,
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
Km.render = TS;
var mi = Km;
de(mi);
fe(mi, Ym);
var WA = mi, bs = mi, Wm = {
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
    class: m(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
    style: J(e.borderOffsetStyles),
    onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
  }, [
    U(e.$slots, "icon", {}, () => [e.icon ? (b(), k("div", {
      key: 0,
      class: m(e.classes(e.n("icon"), e.iconClass))
    }, [j(r, {
      name: e.icon,
      namespace: e.namespace
    }, null, 8, ["name", "namespace"])], 2)) : q("v-if", !0)]),
    L("div", { class: m(e.n("content")) }, [U(e.$slots, "default", {}, () => [e.title ? (b(), k("div", {
      key: 0,
      class: m(e.classes(e.n("title"), e.titleClass))
    }, ve(e.title), 3)) : q("v-if", !0)]), U(e.$slots, "description", {}, () => [e.description ? (b(), k("div", {
      key: 0,
      class: m(e.classes(e.n("description"), e.descriptionClass))
    }, ve(e.description), 3)) : q("v-if", !0)])], 2),
    e.$slots.extra ? (b(), k("div", {
      key: 0,
      class: m(e.classes(e.n("extra"), e.extraClass))
    }, [U(e.$slots, "extra")], 2)) : q("v-if", !0)
  ], 6)), [[t, { disabled: !e.ripple }]]);
}
var qm = te({
  name: ES,
  components: { VarIcon: Je },
  directives: { Ripple: vn },
  props: Wm,
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
qm.render = DS;
var gi = qm;
de(gi);
fe(gi, Wm);
var qA = gi, ys = gi, Xm = {
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
  return b(), k("div", { class: m(e.n("wrap")) }, [L("div", { class: m(e.classes(e.n(), e.n(`--${e.direction}`))) }, [e.options.length ? (b(!0), k(Be, { key: 0 }, Ye(e.options, (a) => (b(), we(t, {
    key: a[e.valueKey],
    "checked-value": a[e.valueKey],
    disabled: a.disabled
  }, {
    default: ue(({ checked: i }) => [j(r, { is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey] }, null, 8, ["is"])]),
    _: 2
  }, 1032, ["checked-value", "disabled"]))), 128)) : q("v-if", !0), U(e.$slots, "default")], 2), j(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Gm = te({
  name: MS,
  components: {
    VarFormDetails: Un,
    VarCheckbox: ct,
    MaybeVNode: lr
  },
  props: Xm,
  setup(e) {
    const n = C(() => e.max), r = C(() => e.modelValue.length), { length: t, checkboxes: o, bindCheckboxes: a } = nw(), { bindForm: i } = Kn(), { errorMessage: l, validateWithTrigger: s, validate: u, resetValidation: d } = Jn(), c = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: h,
      validate: O,
      resetValidation: d,
      reset: y,
      errorMessage: C(() => l.value)
    };
    me(() => e.modelValue, g, { deep: !0 }), me(() => t.value, g), a(c), S(i, c);
    function f(T) {
      Ne(() => {
        const { validateTrigger: z, rules: R, modelValue: H } = e;
        s(z, T, R, H);
      });
    }
    function v(T) {
      S(e["onUpdate:modelValue"], T), S(e.onChange, T), f("onChange");
    }
    function p(T) {
      const { modelValue: z } = e;
      z.includes(T) || v([...z, T]);
    }
    function h(T) {
      const { modelValue: z } = e;
      z.includes(T) && v(z.filter((R) => R !== T));
    }
    function g() {
      o.forEach(({ sync: T }) => T(e.modelValue));
    }
    function w() {
      const T = Jl(o.map(({ checkedValue: z }) => z.value));
      return S(e["onUpdate:modelValue"], T), T;
    }
    function $() {
      const T = Jl(o.filter(({ checked: z }) => !z.value).map(({ checkedValue: z }) => z.value));
      return S(e["onUpdate:modelValue"], T), T;
    }
    function y() {
      S(e["onUpdate:modelValue"], []), d();
    }
    function O() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: AS,
      classes: NS,
      checkAll: w,
      inverseAll: $,
      reset: y,
      validate: O,
      resetValidation: d,
      isFunction: Yn
    };
  }
});
Gm.render = RS;
var hi = Gm;
de(hi);
fe(hi, Xm);
var XA = hi, ws = hi, Zm = {
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
}, { name: VS, n: _r, classes: LS } = oe("chip");
function FS(e, n) {
  const r = x("var-icon");
  return b(), we(bn, { name: e.n("$-fade") }, {
    default: ue(() => [L("span", Xe({
      class: e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 1), ...e.contentClass),
      style: e.chipStyle
    }, e.$attrs), [
      U(e.$slots, "left"),
      L("span", { class: m(e.n(`text-${e.size}`)) }, [U(e.$slots, "default")], 2),
      U(e.$slots, "right"),
      e.closeable ? (b(), k("span", {
        key: 0,
        class: m(e.n("--close")),
        onClick: n[0] || (n[0] = (...t) => e.handleClose && e.handleClose(...t))
      }, [U(e.$slots, "icon", {}, () => [j(r, {
        name: e.closeIconName,
        namespace: e.namespace
      }, null, 8, ["name", "namespace"])])], 2)) : q("v-if", !0)
    ], 16)]),
    _: 3
  }, 8, ["name"]);
}
var Jm = te({
  name: VS,
  components: { VarIcon: Je },
  inheritAttrs: !1,
  props: Zm,
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
      const { size: a, block: i, type: l, plain: s, round: u } = e, d = _r(i ? "$--flex" : "$--inline-flex"), c = s ? `${_r("plain")} ${_r(`plain-${l}`)}` : _r(`--${l}`), f = u ? _r("--round") : null;
      return [
        _r(`--${a}`),
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
      n: _r,
      classes: LS,
      formatElevation: Pn,
      handleClose: o
    };
  }
});
Jm.render = FS;
var bi = Jm;
de(bi);
fe(bi, Zm);
var GA = bi, $a = bi, ks = /* @__PURE__ */ Symbol("HIGHLIGHTER_PROVIDER_KEY");
function US(e) {
  Au(ks, e);
}
function HS() {
  return Fu(ks) ? Mu(ks) : {
    highlighter: null,
    theme: null
  };
}
var Qm = {
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
    class: m(e.classes(e.n(), [e.wordWrap, e.n("--word-wrap")])),
    innerHTML: e.highlightedCode
  }, null, 10, qS);
}
var xm = te({
  name: YS,
  props: Qm,
  setup(e) {
    const { highlighter: n, theme: r } = HS(), t = P(""), o = C(() => {
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
xm.render = XS;
var yi = xm;
de(yi);
fe(yi, Qm);
var ZA = yi, $s = yi, _m = {
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
}, eg = /* @__PURE__ */ Symbol("ROW_BIND_COL_KEY");
function GS() {
  const { length: e, childProviders: n, bindChildren: r } = Bn(eg);
  return {
    length: e,
    cols: n,
    bindCols: r
  };
}
function ZS() {
  const { index: e, bindParent: n, parentProvider: r } = In(eg);
  return {
    index: e,
    row: r,
    bindRow: n
  };
}
var { name: JS, n: Qo, classes: QS } = oe("col");
function xS(e, n) {
  return b(), k("div", {
    class: m(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n(`--span-${e.span}`)], [e.offset, e.n(`--offset-${e.offset}`)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
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
  }, [U(e.$slots, "default")], 6);
}
var ng = te({
  name: JS,
  props: _m,
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
ng.render = xS;
var wi = ng;
de(wi);
fe(wi, _m);
var JA = wi, Cs = wi, rg = {
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
}, tg = /* @__PURE__ */ Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function _S() {
  const { childProviders: e, length: n, bindChildren: r } = Bn(tg);
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: r
  };
}
var { name: e2, n: n2 } = oe("collapse");
function r2(e, n) {
  return b(), k("div", { class: m(e.n()) }, [U(e.$slots, "default")], 2);
}
var og = te({
  name: e2,
  props: rg,
  setup(e) {
    const n = C(() => e.offset), r = C(() => e.divider), t = C(() => e.elevation), o = C(() => e.accordion), a = C(() => qr(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = _S(), u = {
      offset: n,
      divider: r,
      elevation: t,
      accordion: o,
      updateItem: d
    };
    me(() => i.value, () => Ne().then(v)), me(() => e.modelValue, () => Ne().then(v)), s(u);
    function d(h, g) {
      if (e.accordion) {
        c(g ? h : void 0);
        return;
      }
      c(g ? [...a.value, h] : a.value.filter((w) => w !== h));
    }
    function c(h) {
      S(e["onUpdate:modelValue"], h), S(e.onChange, h);
    }
    function f() {
      if (e.accordion) {
        const [w] = a.value;
        if (w == null) return;
        const $ = l.find(({ name: y }) => w === y.value);
        return $ ?? l.find(({ index: y, name: O }) => O.value == null && w === y.value);
      }
      const h = l.filter(({ name: w }) => w.value != null && a.value.includes(w.value)), g = l.filter(({ index: w, name: $ }) => $.value == null && a.value.includes(w.value));
      return [...h, ...g];
    }
    function v() {
      const h = D0(qr(f()));
      l.forEach((g) => {
        g.init(h.includes(g));
      });
    }
    return {
      divider: r,
      n: n2,
      toggleAll: (h) => {
        e.accordion || c(l.filter((g) => {
          var w;
          const $ = (w = g.name.value) != null ? w : g.index.value, y = a.value.includes($);
          return h.skipDisabled && g.disabled.value ? y : h.expand === "inverse" ? !y : h.expand;
        }).map((g) => {
          var w;
          return (w = g.name.value) != null ? w : g.index.value;
        }));
      }
    };
  }
});
og.render = r2;
var ki = og;
de(ki);
fe(ki, rg);
var QA = ki, Ss = ki, Gc = (e, n, r) => new Promise((t, o) => {
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
function ag(e) {
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
    return Gc(this, null, function* () {
      if (!n.value || (n.value.style.height = "", r.value = !0, yield Xr(), !n.value || !l(f))) return;
      const { offsetHeight: v } = n.value;
      n.value.style.height = "0px", yield Xr(), !(!n.value || !l(f)) && (n.value.style.height = v + "px", o && (yield Xn(), o && l(f) && d()));
    });
  }
  const u = (f) => Gc(null, null, function* () {
    if (!n.value) return;
    const { offsetHeight: v } = n.value;
    n.value.style.height = v + "px", yield Xr(), !(!n.value || !l(f)) && (n.value.style.height = "0px");
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
var ig = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
function t2() {
  const { parentProvider: e, index: n, bindParent: r } = In(tg);
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
    class: m(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
    style: J(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
  }, [
    L("div", { class: m(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2))) }, null, 2),
    L("div", {
      class: m(e.classes(e.n("header"), [!e.disabled, e.n("header--cursor-pointer")])),
      "aria-expanded": e.isShow,
      "aria-disabled": e.disabled,
      role: e.accordion ? "tab" : "button",
      onClick: n[0] || (n[0] = (...t) => e.toggle && e.toggle(...t))
    }, [e.$slots.title || e.title ? (b(), k("div", {
      key: 0,
      class: m(e.n("header-title"))
    }, [U(e.$slots, "title", {}, () => [Le(ve(e.title), 1)])], 2)) : q("v-if", !0), L("div", { class: m(e.n("header-icon")) }, [U(e.$slots, "icon", {}, () => [j(r, {
      name: e.icon,
      transition: 250,
      class: m(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
    }, null, 8, ["name", "class"])])], 2)], 10, l2),
    Ke(L("div", {
      ref: "contentEl",
      class: m(e.n("content")),
      onTransitionend: n[1] || (n[1] = (...t) => e.handleTransitionEnd && e.handleTransitionEnd(...t)),
      onTransitionstart: n[2] || (n[2] = (...t) => e.handleTransitionStart && e.handleTransitionStart(...t))
    }, [L("div", { class: m(e.n("content-wrap")) }, [U(e.$slots, "default")], 2)], 34), [[yr, e.showContent]])
  ], 6);
}
var lg = te({
  name: o2,
  components: { VarIcon: Je },
  props: ig,
  setup(e) {
    const n = P(!1), r = P(!1), t = P(null), o = C(() => e.name), a = C(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = t2(), { offset: u, divider: d, elevation: c, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: o,
      disabled: a,
      init: g
    });
    const { handleTransitionEnd: p, handleTransitionStart: h } = ag({
      contentEl: t,
      showContent: r,
      expand: n
    });
    function g($) {
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
      n: a2,
      classes: i2,
      toggle: w,
      formatElevation: Pn,
      handleTransitionEnd: p,
      handleTransitionStart: h
    };
  }
});
lg.render = s2;
var $i = lg;
de($i);
fe($i, ig);
var xA = $i, Ps = $i, sg = { expand: Boolean }, { name: u2, n: d2 } = oe("collapse-transition");
function c2(e, n) {
  return Ke((b(), k("div", {
    ref: "contentEl",
    class: m(e.n("content")),
    onTransitionend: n[0] || (n[0] = (...r) => e.handleTransitionEnd && e.handleTransitionEnd(...r)),
    onTransitionstart: n[1] || (n[1] = (...r) => e.handleTransitionStart && e.handleTransitionStart(...r))
  }, [U(e.$slots, "default")], 34)), [[yr, e.showContent]]);
}
var ug = te({
  name: u2,
  props: sg,
  setup(e) {
    const n = P(!1), r = P(null), { handleTransitionEnd: t, handleTransitionStart: o } = ag({
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
ug.render = c2;
var Ci = ug;
de(Ci);
fe(Ci, sg);
var _A = Ci, Ca = Ci, dg = {
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
  return b(), k("div", { class: m(e.n()) }, [U(e.$slots, "default", { value: e.value }, () => [Le(ve(e.value), 1)])], 2);
}
var cg = te({
  name: f2,
  props: dg,
  setup(e) {
    const { value: n, reset: r, start: t, pause: o } = q0({
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
cg.render = p2;
var Si = cg;
de(Si);
fe(Si, dg);
var eN = Si, Os = Si, fg = {
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
}, { name: m2, n: g2 } = oe("countdown"), zs = 1e3, Ts = 60 * zs, Es = 60 * Ts, Zc = 24 * Es;
function h2(e, n) {
  return b(), k("div", { class: m(e.n()) }, [U(e.$slots, "default", yt(Aa(e.timeData)), () => [Le(ve(e.showTime), 1)])], 2);
}
var vg = te({
  name: m2,
  props: fg,
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
      const g = Object.values(h), w = [
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
      if (w.forEach((y, O) => {
        p.includes(y) ? p = p.replace(y, Zr(`${g[O]}`, 2, "0")) : g[O + 1] += g[O] * $[O];
      }), p.includes("S")) {
        const y = Zr(`${g[g.length - 1]}`, 3, "0");
        p.includes("SSS") ? p = p.replace("SSS", y) : p.includes("SS") ? p = p.replace("SS", y.slice(0, 2)) : p = p.replace("S", y.slice(0, 1));
      }
      return p;
    }
    function u(p) {
      const h = {
        days: Math.floor(p / Zc),
        hours: Math.floor(p % Zc / Es),
        minutes: Math.floor(p % Es / Ts),
        seconds: Math.floor(p % Ts / zs),
        milliseconds: Math.floor(p % zs)
      };
      r.value = h, S(e.onChange, r.value), n.value = s(e.format, h);
    }
    function d() {
      const { time: p, onEnd: h } = e, g = performance.now();
      if (t || (t = g + Z(p)), i = t - g, i < 0 && (i = 0), u(i), i === 0) {
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
vg.render = h2;
var Pi = vg;
de(Pi);
fe(Pi, fg);
var nN = Pi, Is = Pi, Mt = 9e15, gt = 1e9, Bs = "0123456789abcdef", Sa = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Pa = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Ds = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Mt,
  maxE: Mt,
  crypto: !1
}, pg, Kr, Ue = !0, Oi = "[DecimalError] ", ft = Oi + "Invalid argument: ", mg = Oi + "Precision limit exceeded", gg = Oi + "crypto unavailable", hg = "[object Decimal]", Zn = Math.floor, Nn = Math.pow, b2 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, y2 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, w2 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, bg = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, zr = 1e7, Me = 7, k2 = 9007199254740991, $2 = Sa.length - 1, Ms = Pa.length - 1, le = { toStringTag: hg };
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
  return r.d ? r.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(r.e, r.sd()) + Me, t.rounding = 1, r = C2(t, Cg(t, r)), t.precision = e, t.rounding = n, De(Kr == 2 || Kr == 3 ? r.neg() : r, e, n, !0)) : new t(1) : new t(NaN);
};
le.cubeRoot = le.cbrt = function() {
  var e, n, r, t, o, a, i, l, s, u, d = this, c = d.constructor;
  if (!d.isFinite() || d.isZero()) return new c(d);
  for (Ue = !1, a = d.s * Nn(d.s * d, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (r = Hn(d.d), e = d.e, (a = (e - r.length + 1) % 3) && (r += a == 1 || a == -2 ? "0" : "00"), a = Nn(r, 1 / 3), e = Zn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? r = "5e" + e : (r = a.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), t = new c(r), t.s = d.s) : t = new c(a.toString()), i = (e = c.precision) + 3; ; )
    if (l = t, s = l.times(l).times(l), u = s.plus(d), t = dn(u.plus(d).times(l), u.plus(s), i + 2, 1), Hn(l.d).slice(0, i) === (r = Hn(t.d)).slice(0, i))
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
  return Ue = !0, De(t, e, c.rounding, n);
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
  return r.lte(1) ? new t(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, t.rounding = 1, Ue = !1, r = r.times(r).minus(1).sqrt().plus(r), Ue = !0, t.precision = e, t.rounding = n, r.ln()) : new t(r);
};
le.inverseHyperbolicSine = le.asinh = function() {
  var e, n, r = this, t = r.constructor;
  return !r.isFinite() || r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, t.rounding = 1, Ue = !1, r = r.times(r).plus(1).sqrt().plus(r), Ue = !0, t.precision = e, t.rounding = n, r.ln());
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
  for (Ue = !1, n = Math.ceil(l / Me), t = 1, s = u.times(u), i = new d(u), o = u; e !== -1; )
    if (o = o.times(s), a = i.minus(o.div(t += 2)), o = o.times(s), i = a.plus(o.div(t += 2)), i.d[n] !== void 0) for (e = n; i.d[e] === a.d[e] && e--; ) ;
  return r && (i = i.times(2 << r - 1)), Ue = !0, De(i, d.precision = c, d.rounding = f, !0);
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
  if (Ue = !1, l = c + v, i = at(u, l), t = n ? Oa(d, l + 10) : at(e, l), s = dn(i, t, l, 1), $o(s.d, o = c, f)) do
    if (l += 10, i = at(u, l), t = n ? Oa(d, l + 10) : at(e, l), s = dn(i, t, l, 1), !a) {
      +Hn(s.d).slice(o + 1, o + 15) + 1 == 1e14 && (s = De(s, c + 1, 0));
      break;
    }
  while ($o(s.d, o += 10, f));
  return Ue = !0, De(s, c, f);
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
    return Ue ? De(e, l, s) : e;
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
  return u[0] ? (e.d = u, e.e = zi(u, r), Ue ? De(e, l, s) : e) : new p(s === 3 ? -0 : 0);
};
le.modulo = le.mod = function(e) {
  var n, r = this, t = r.constructor;
  return e = new t(e), !r.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || r.d && !r.d[0] ? De(new t(r), t.precision, t.rounding) : (Ue = !1, t.modulo == 9 ? (n = dn(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = dn(r, e, 0, t.modulo, 1), n = n.times(e), Ue = !0, r.minus(n));
};
le.naturalExponential = le.exp = function() {
  return As(this);
};
le.naturalLogarithm = le.ln = function() {
  return at(this);
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
    return d[0] || (e = new f(c)), Ue ? De(e, l, s) : e;
  if (a = Zn(c.e / Me), t = Zn(e.e / Me), u = u.slice(), o = a - t, o) {
    for (o < 0 ? (r = u, o = -o, i = d.length) : (r = d, t = a, i = u.length), a = Math.ceil(l / Me), i = a > i ? a + 1 : i + 1, o > i && (o = i, r.length = 1), r.reverse(); o--; ) r.push(0);
    r.reverse();
  }
  for (i = u.length, o = d.length, i - o < 0 && (o = i, r = d, d = u, u = r), n = 0; o; )
    n = (u[--o] = u[o] + d[o] + n) / zr | 0, u[o] %= zr;
  for (n && (u.unshift(n), ++t), i = u.length; u[--i] == 0; ) u.pop();
  return e.d = u, e.e = zi(u, t), Ue ? De(e, l, s) : e;
};
le.precision = le.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(ft + e);
  return r.d ? (n = yg(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
le.round = function() {
  var e = this, n = e.constructor;
  return De(new n(e), e.e + 1, n.rounding);
};
le.sine = le.sin = function() {
  var e, n, r = this, t = r.constructor;
  return r.isFinite() ? r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(r.e, r.sd()) + Me, t.rounding = 1, r = P2(t, Cg(t, r)), t.precision = e, t.rounding = n, De(Kr > 2 ? r.neg() : r, e, n, !0)) : new t(NaN);
};
le.squareRoot = le.sqrt = function() {
  var e, n, r, t, o, a, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0]) return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (Ue = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = Hn(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Zn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), t = new d(n)) : t = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (a = t, t = a.plus(dn(i, a, r + 2, 1)).times(0.5), Hn(a.d).slice(0, r) === (n = Hn(t.d)).slice(0, r))
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
  return Ue = !0, De(t, s, d.rounding, e);
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
  return n ? ++r : a.shift(), e.d = a, e.e = zi(a, r), Ue ? De(e, c.precision, c.rounding) : e;
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
  if (u = r = new h(1), t = s = new h(0), n = new h(t), a = n.e = yg(p) - v.e - 1, i = a % Me, n.d[0] = Nn(10, i < 0 ? Me + i : i), e == null) e = a > 0 ? n : u;
  else {
    if (l = new h(e), !l.isInt() || l.lt(u)) throw Error(ft + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Ue = !1, l = new h(Hn(p)), d = h.precision, h.precision = a = p.length * Me * 2; c = dn(l, n, 0, 1, 1), o = r.plus(c.times(t)), o.cmp(e) != 1; )
    r = t, t = o, o = u, u = s.plus(c.times(o)), s = o, o = n, n = l.minus(c.times(o)), l = o;
  return o = dn(e.minus(r), t, 0, 1, 1), s = s.plus(o.times(u)), r = r.plus(o.times(t)), s.s = u.s = v.s, f = dn(u, t, a, 1).minus(v).abs().cmp(dn(s, r, a, 1).minus(v).abs()) < 1 ? [u, t] : [s, r], h.precision = d, Ue = !0, f;
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
  return e.d[0] ? (Ue = !1, r = dn(r, e, 0, n, 1).times(e), Ue = !0, De(r)) : (e.s = r.s, r = e), r;
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
    return o = wg(s, l, r, t), e.s < 0 ? new s(1).div(o) : De(o, t, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1) return new s(NaN);
    if ((e.d[n] & 1) == 0 && (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = Nn(+l, u), n = r == 0 || !isFinite(r) ? Zn(u * (Math.log("0." + Hn(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Ue = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), o = As(e.times(at(l, t + r)), t), o.d && (o = De(o, t + 5, 1), $o(o.d, t, a) && (n = t + 10, o = De(As(e.times(at(l, n + r)), n), n + 5, 1), +Hn(o.d).slice(t + 1, t + 15) + 1 == 1e14 && (o = De(o, t + 1, 0)))), o.s = i, Ue = !0, s.rounding = a, De(o, t, a));
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
function Hn(e) {
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
    var u, d, c, f, v, p, h, g, w, $, y, O, T, z, R, H, M, D, E, B, N = t.constructor, A = t.s == o.s ? 1 : -1, I = t.d, F = o.d;
    if (!I || !I[0] || !F || !F[0]) return new N(!t.s || !o.s || (I ? F && I[0] == F[0] : !F) ? NaN : I && I[0] == 0 || !F ? A * 0 : A / 0);
    for (s ? (v = 1, d = t.e - o.e) : (s = zr, v = Me, d = Zn(t.e / v) - Zn(o.e / v)), E = F.length, M = I.length, w = new N(A), $ = w.d = [], c = 0; F[c] == (I[c] || 0); c++) ;
    if (F[c] > (I[c] || 0) && d--, a == null ? (z = a = N.precision, i = N.rounding) : l ? z = a + (t.e - o.e) + 1 : z = a, z < 0)
      $.push(1), p = !0;
    else {
      if (z = z / v + 2 | 0, c = 0, E == 1) {
        for (f = 0, F = F[0], z++; (c < M || f) && z--; c++)
          R = f * s + (I[c] || 0), $[c] = R / F | 0, f = R % F | 0;
        p = f || c < M;
      } else {
        for (f = s / (F[0] + 1) | 0, f > 1 && (F = e(F, f, s), I = e(I, f, s), E = F.length, M = I.length), H = E, y = I.slice(0, E), O = y.length; O < E; ) y[O++] = 0;
        B = F.slice(), B.unshift(0), D = F[0], F[1] >= s / 2 && ++D;
        do
          f = 0, u = n(F, y, E, O), u < 0 ? (T = y[0], E != O && (T = T * s + (y[1] || 0)), f = T / D | 0, f > 1 ? (f >= s && (f = s - 1), h = e(F, f, s), g = h.length, O = y.length, u = n(h, y, g, O), u == 1 && (f--, r(h, E < g ? B : F, g, s))) : (f == 0 && (u = f = 1), h = F.slice()), g = h.length, g < O && h.unshift(0), r(y, h, O, s), u == -1 && (O = y.length, u = n(F, y, E, O), u < 1 && (f++, r(y, E < O ? B : F, O, s))), O = y.length) : u === 0 && (f++, y = [0]), $[c++] = f, u && y[0] ? y[O++] = I[H] || 0 : (y = [I[H]], O = 1);
        while ((H++ < M || y[0] !== void 0) && z--);
        p = y[0] !== void 0;
      }
      $[0] || $.shift();
    }
    if (v == 1)
      w.e = d, pg = p;
    else {
      for (c = 1, f = $[0]; f >= 10; f /= 10) c++;
      w.e = c + d * v - 1, De(w, l ? a + w.e + 1 : a, i, p);
    }
    return w;
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
  return Ue && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e;
}
function Lr(e, n, r) {
  if (!e.isFinite()) return $g(e);
  var t, o = e.e, a = Hn(e.d), i = a.length;
  return n ? (r && (t = r - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + et(t) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : o < 0 ? (a = "0." + et(-o - 1) + a, r && (t = r - i) > 0 && (a += et(t))) : o >= i ? (a += et(o + 1 - i), r && (t = r - o - 1) > 0 && (a = a + "." + et(t))) : ((t = o + 1) < i && (a = a.slice(0, t) + "." + a.slice(t)), r && (t = r - i) > 0 && (o + 1 === i && (a += "."), a += et(t))), a;
}
function zi(e, n) {
  var r = e[0];
  for (n *= Me; r >= 10; r /= 10) n++;
  return n;
}
function Oa(e, n, r) {
  if (n > $2)
    throw Ue = !0, r && (e.precision = r), Error(mg);
  return De(new e(Sa), n, 1, !0);
}
function Rr(e, n, r) {
  if (n > Ms) throw Error(mg);
  return De(new e(Pa), n, r, !0);
}
function yg(e) {
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
function wg(e, n, r, t) {
  var o, a = new e(1), i = Math.ceil(t / Me + 4);
  for (Ue = !1; ; ) {
    if (r % 2 && (a = a.times(n), Qc(a.d, i) && (o = !0)), r = Zn(r / 2), r === 0) {
      r = a.d.length - 1, o && a.d[r] === 0 && ++a.d[r];
      break;
    }
    n = n.times(n), Qc(n.d, i);
  }
  return Ue = !0, a;
}
function Jc(e) {
  return e.d[e.d.length - 1] & 1;
}
function kg(e, n, r) {
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
  for (n == null ? (Ue = !1, s = p) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), c += 5;
  for (t = Math.log(Nn(2, c)) / Math.LN10 * 2 + 5 | 0, s += t, r = a = i = new f(1), f.precision = s; ; ) {
    if (a = De(a.times(e), s, 1), r = r.times(++d), l = i.plus(dn(a, r, s, 1)), Hn(l.d).slice(0, s) === Hn(i.d).slice(0, s)) {
      for (o = c; o--; ) i = De(i.times(i), s, 1);
      if (n == null) if (u < 3 && $o(i.d, s - t, v, u))
        f.precision = s += 10, r = a = l = new f(1), d = 0, u++;
      else return De(i, f.precision = p, v, Ue = !0);
      else
        return f.precision = p, i;
    }
    i = l;
  }
}
function at(e, n) {
  var r, t, o, a, i, l, s, u, d, c, f, v = 1, p = 10, h = e, g = h.d, w = h.constructor, $ = w.rounding, y = w.precision;
  if (h.s < 0 || !g || !g[0] || !h.e && g[0] == 1 && g.length == 1) return new w(g && !g[0] ? -1 / 0 : h.s != 1 ? NaN : g ? 0 : h);
  if (n == null ? (Ue = !1, d = y) : d = n, w.precision = d += p, r = Hn(g), t = r.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; t < 7 && t != 1 || t == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = Hn(h.d), t = r.charAt(0), v++;
    a = h.e, t > 1 ? (h = new w("0." + r), a++) : h = new w(t + "." + r.slice(1));
  } else
    return u = Oa(w, d + 2, y).times(a + ""), h = at(new w(t + "." + r.slice(1)), d - p).plus(u), w.precision = y, n == null ? De(h, y, $, Ue = !0) : h;
  for (c = h, s = i = h = dn(h.minus(1), h.plus(1), d, 1), f = De(h.times(h), d, 1), o = 3; ; ) {
    if (i = De(i.times(f), d, 1), u = s.plus(dn(i, new w(o), d, 1)), Hn(u.d).slice(0, d) === Hn(s.d).slice(0, d))
      if (s = s.times(2), a !== 0 && (s = s.plus(Oa(w, d + 2, y).times(a + ""))), s = dn(s, new w(v), d, 1), n == null) if ($o(s.d, d - p, $, l))
        w.precision = d += p, u = i = h = dn(c.minus(1), c.plus(1), d, 1), f = De(h.times(h), d, 1), o = l = 1;
      else return De(s, w.precision = y, $, Ue = !0);
      else
        return w.precision = y, s;
    s = u, o += 2;
  }
}
function $g(e) {
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
    e.d.push(+n), Ue && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function S2(e, n) {
  var r, t, o, a, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), bg.test(n)) return va(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (y2.test(n))
    r = 16, n = n.toLowerCase();
  else if (b2.test(n)) r = 2;
  else if (w2.test(n)) r = 8;
  else throw Error(ft + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, t = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, o = wg(t, new t(r), a, a * 2)), u = fa(n, r, zr), d = u.length - 1, a = d; u[a] === 0; --a) u.pop();
  return a < 0 ? new t(e.s * 0) : (e.e = zi(u, d), e.d = u, Ue = !1, i && (e = dn(e, o, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Nn(2, s) : it.pow(2, s))), Ue = !0, e);
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
  for (Ue = !1, s = r.times(r), l = new e(t); ; ) {
    if (i = dn(l.times(s), new e(n++ * n++), d, 1), l = o ? t.plus(i) : t.minus(i), t = dn(i.times(s), new e(n++ * n++), d, 1), i = l.plus(t), i.d[c] !== void 0) {
      for (a = c; i.d[a] === l.d[a] && a--; ) ;
      if (a == -1) break;
    }
    a = l, l = t, t = i, i = a, u++;
  }
  return Ue = !0, i.d.length = c + 1, i;
}
function Ti(e, n) {
  for (var r = e; --n; ) r *= e;
  return r;
}
function Cg(e, n) {
  var r, t = n.s < 0, o = Rr(e, e.precision, 1), a = o.times(0.5);
  if (n = n.abs(), n.lte(a))
    return Kr = t ? 4 : 1, n;
  if (r = n.divToInt(o), r.isZero()) Kr = t ? 3 : 2;
  else {
    if (n = n.minus(r.times(o)), n.lte(a))
      return Kr = Jc(r) ? t ? 2 : 3 : t ? 4 : 1, n;
    Kr = Jc(r) ? t ? 1 : 4 : t ? 3 : 2;
  }
  return n.minus(o).abs();
}
function id(e, n, r, t) {
  var o, a, i, l, s, u, d, c, f, v = e.constructor, p = r !== void 0;
  if (p ? (dr(r, 1, gt), t === void 0 ? t = v.rounding : dr(t, 0, 8)) : (r = v.precision, t = v.rounding), !e.isFinite()) d = $g(e);
  else {
    for (d = Lr(e), i = d.indexOf("."), p ? (o = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : o = n, i >= 0 && (d = d.replace(".", ""), f = new v(1), f.e = d.length - i, f.d = fa(Lr(f), 10, o), f.e = f.d.length), c = fa(d, 10, o), a = s = c.length; c[--s] == 0; ) c.pop();
    if (!c[0]) d = p ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = c, e.e = a, e = dn(e, f, r, t, 0, o), c = e.d, a = e.e, u = pg), i = c[r], l = o / 2, u = u || c[r + 1] !== void 0, u = t < 4 ? (i !== void 0 || u) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : i > l || i === l && (t === 4 || u || t === 6 && c[r - 1] & 1 || t === (e.s < 0 ? 8 : 7)), c.length = r, u) for (; ++c[--r] > o - 1; )
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
function Qc(e, n) {
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
  else throw Error(gg);
  else this[r] = !1;
  else throw Error(ft + r + ": " + t);
  return this;
}
function F2(e) {
  return new this(e).cos();
}
function U2(e) {
  return new this(e).cosh();
}
function Sg(e) {
  var n, r, t;
  function o(a) {
    var i, l, s, u = this;
    if (!(u instanceof o)) return new o(a);
    if (u.constructor = o, xc(a)) {
      u.s = a.s, Ue ? !a.d || a.e > o.maxE ? (u.e = NaN, u.d = null) : a.e < o.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (s = typeof a, s === "number") {
      if (a === 0) {
        u.s = 1 / a < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, u.s = -1) : u.s = 1, a === ~~a && a < 1e7) {
        for (i = 0, l = a; l >= 10; l /= 10) i++;
        Ue ? i > o.maxE ? (u.e = NaN, u.d = null) : i < o.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [a]) : (u.e = i, u.d = [a]);
        return;
      }
      if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return va(u, a.toString());
    }
    if (s === "string")
      return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), bg.test(a) ? va(u, a) : S2(u, a);
    if (s === "bigint")
      return a < 0 ? (a = -a, u.s = -1) : u.s = 1, va(u, a.toString());
    throw Error(ft + a);
  }
  if (o.prototype = le, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.EUCLID = 9, o.config = o.set = L2, o.clone = Sg, o.isDecimal = xc, o.abs = O2, o.acos = z2, o.acosh = T2, o.add = E2, o.asin = I2, o.asinh = B2, o.atan = D2, o.atanh = M2, o.atan2 = A2, o.cbrt = N2, o.ceil = R2, o.clamp = V2, o.cos = F2, o.cosh = U2, o.div = H2, o.exp = j2, o.floor = Y2, o.hypot = K2, o.ln = W2, o.log = q2, o.log10 = G2, o.log2 = X2, o.max = Z2, o.min = J2, o.mod = Q2, o.mul = x2, o.pow = _2, o.random = eP, o.round = nP, o.sign = rP, o.sin = tP, o.sinh = oP, o.sqrt = aP, o.sub = iP, o.sum = lP, o.tan = sP, o.tanh = uP, o.trunc = dP, e === void 0 && (e = {}), e && e.defaults !== !0)
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
function H2(e, n) {
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
  for (Ue = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return Ue = !0, new this(1 / 0);
      r = n;
    }
  return Ue = !0, r.sqrt();
}
function xc(e) {
  return e instanceof it || e && e.toStringTag === hg || !1;
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
  return kg(this, arguments, -1);
}
function J2() {
  return kg(this, arguments, 1);
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
  } else throw Error(gg);
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
  for (Ue = !1; r.s && ++e < n.length; ) r = r.plus(n[e]);
  return Ue = !0, De(r, this.precision, this.rounding);
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
var it = le.constructor = Sg(Ds);
Sa = new it(Sa);
Pa = new it(Pa);
var Pg = {
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
}, _c = 100, ef = 600, { name: cP, n: fP, classes: vP } = oe("counter"), pP = [
  "inputmode",
  "readonly",
  "disabled"
];
function mP(e, n) {
  const r = x("var-icon"), t = x("var-button"), o = x("var-form-details");
  return b(), k("div", { class: m(e.classes(e.n(), e.n("$--box"))) }, [L("div", Xe({
    class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
    style: { background: e.color }
  }, e.$attrs), [
    j(t, {
      class: m(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
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
      class: m(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
      style: J({
        width: e.toSizeUnit(e.inputWidth),
        fontSize: e.toSizeUnit(e.inputTextSize)
      }),
      inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
      readonly: e.readonly || e.formReadonly,
      disabled: e.disabled || e.formDisabled || e.disableInput,
      onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
    }, null, 46, pP), [[qv, e.inputValue]]),
    j(t, {
      class: m(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
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
var Og = te({
  name: cP,
  components: {
    VarButton: tr,
    VarIcon: Je,
    VarFormDetails: Un
  },
  directives: { Ripple: vn },
  inheritAttrs: !1,
  props: Pg,
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
      validate: g,
      resetValidation: l
    }), me(() => e.modelValue, (I) => {
      N(y(String(I))), S(e.onChange, Z(I));
    }), N(y(String(e.modelValue)));
    function g() {
      return i(e.rules, e.modelValue);
    }
    function w(I) {
      Ne(() => {
        const { validateTrigger: F, rules: Q, modelValue: X } = e;
        a(F, I, Q, X);
      });
    }
    function $() {
      const { min: I } = e;
      S(e["onUpdate:modelValue"], I != null ? Z(I) : 0), l();
    }
    function y(I) {
      const { decimalLength: F, max: Q, min: X } = e;
      let ae = Z(I);
      return Q != null && ae > Z(Q) && (ae = Z(Q)), X != null && ae < Z(X) && (ae = Z(X)), I = String(ae), F != null && (I = ae.toFixed(Z(F))), I;
    }
    function O(I) {
      const { lazyChange: F, onBeforeChange: Q } = e, { value: X } = I.target, ae = y(X);
      F ? S(Q, Z(ae), A) : N(ae), w("onInputChange");
    }
    function T() {
      const { disabled: I, readonly: F, disableDecrement: Q, decrementButton: X, lazyChange: ae, step: Te, modelValue: ce, onDecrement: G, onBeforeChange: ne } = e;
      if (u?.value || s?.value || I || F || Q || !X || c.value) return;
      const pe = y(new it(Z(ce)).minus(new it(Z(Te))).toString()), Oe = Z(pe);
      S(G, Oe), ae ? S(ne, Oe, A) : (N(pe), w("onDecrement"));
    }
    function z() {
      const { disabled: I, readonly: F, disableIncrement: Q, incrementButton: X, lazyChange: ae, step: Te, modelValue: ce, onIncrement: G, onBeforeChange: ne } = e;
      if (u?.value || s?.value || I || F || Q || !X || d.value) return;
      const pe = y(new it(Z(ce)).plus(new it(Z(Te))).toString()), Oe = Z(pe);
      S(G, Oe), ae ? S(ne, Oe, A) : (N(pe), w("onIncrement"));
    }
    function R() {
      const { press: I, lazyChange: F } = e;
      !I || F || (h = window.setTimeout(() => {
        B();
      }, ef));
    }
    function H() {
      const { press: I, lazyChange: F } = e;
      !I || F || (p = window.setTimeout(() => {
        E();
      }, ef));
    }
    function M() {
      v && clearTimeout(v), h && clearTimeout(h);
    }
    function D() {
      f && clearTimeout(f), p && clearTimeout(p);
    }
    function E() {
      f = window.setTimeout(() => {
        z(), E();
      }, _c);
    }
    function B() {
      v = window.setTimeout(() => {
        T(), B();
      }, _c);
    }
    function N(I) {
      n.value = I;
      const F = Z(I);
      S(e["onUpdate:modelValue"], F);
    }
    function A(I) {
      N(y(String(I))), w("onLazyChange");
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
      validate: g,
      reset: $,
      resetValidation: l,
      handleChange: O,
      decrement: T,
      increment: z,
      pressDecrement: R,
      pressIncrement: H,
      releaseDecrement: M,
      releaseIncrement: D,
      toSizeUnit: ze,
      toNumber: Z
    };
  }
});
Og.render = mP;
var Ei = Og;
de(Ei);
fe(Ei, Pg);
var rN = Ei, Ns = Ei, zg = {
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
  return b(), k("ul", { class: m(e.n()) }, [
    Ke((b(), k("li", {
      class: m(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [
        e.simple,
        e.n("item--simple"),
        e.formatElevation(e.elevation, 2)
      ])),
      onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
    }, [U(e.$slots, "prev", {}, () => [j(r, { name: "chevron-left" })])], 2)), [[i, { disabled: e.current <= 1 || e.disabled }]]),
    e.simple ? (b(), k("li", {
      key: 0,
      class: m(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
    }, [j(t, {
      modelValue: e.simpleCurrentValue,
      "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
      "var-pagination-cover": "",
      variant: "standard",
      hint: !1,
      disabled: e.disabled,
      onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
      onKeydown: n[3] || (n[3] = yd((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
    }, null, 8, ["modelValue", "disabled"]), L("span", null, [Le(" / " + ve(e.pageCount) + " ", 1), L("div", { class: m(e.n("simple-line")) }, null, 2)])], 2)) : (b(!0), k(Be, { key: 1 }, Ye(e.pageList, (l, s) => Ke((b(), k("li", {
      key: s,
      "item-mode": e.getMode(l, s),
      class: m(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
      onClick: (u) => e.clickItem(l, s)
    }, [Le(ve(l), 1)], 10, yP)), [[i, { disabled: e.disabled }]])), 128)),
    Ke((b(), k("li", {
      class: m(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [
        e.simple,
        e.n("item--simple"),
        e.formatElevation(e.elevation, 2)
      ])),
      onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
    }, [U(e.$slots, "next", {}, () => [j(r, { name: "chevron-right" })])], 2)), [[i, { disabled: e.current >= e.pageCount || e.disabled }]]),
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
      default: ue(() => [L("li", { class: m(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")])) }, [L("div", { class: m(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])) }, [L("span", null, ve(e.size) + ve((e.pt ? e.pt : e.t)("paginationItem")) + " / " + ve((e.pt ? e.pt : e.t)("paginationPage")), 1), j(r, {
        class: m(e.n("size--open-icon")),
        "var-pagination-cover": "",
        name: "menu-down"
      }, null, 8, ["class"])], 2)], 2)]),
      _: 1
    }, 8, ["modelValue", "disabled"])) : q("v-if", !0),
    e.showQuickJumper && !e.simple ? (b(), k("li", {
      key: 3,
      class: m(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
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
      class: m(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
    }, ve(e.totalText), 3)) : q("v-if", !0)
  ], 2);
}
var Tg = te({
  name: gP,
  components: {
    VarMenuSelect: Yt,
    VarMenuOption: Ft,
    VarIcon: Je,
    VarInput: Lt
  },
  directives: { Ripple: vn },
  props: zg,
  setup(e) {
    const n = P(""), r = P("1"), t = P(!1), o = P(!1), a = P(Z(e.current) || 1), i = P(Z(e.size) || 10), l = P([]), s = C(() => Math.ceil(e.maxPagerCount / 2)), u = C(() => Math.ceil(Z(e.total) / Z(i.value))), d = C(() => [i.value * (a.value - 1) + 1, Math.min(i.value * a.value, Z(e.total))]), c = C(() => e.showTotal ? e.showTotal(Z(e.total), d.value) : ""), { t: f } = kr();
    me([() => e.current, () => e.size], ([y, O]) => {
      a.value = Z(y) || 1, i.value = Z(O || 10);
    }), me([
      a,
      i,
      u
    ], ([y, O, T], [z, R]) => {
      let H = [];
      const { maxPagerCount: M, total: D, onChange: E } = e, B = Math.ceil(Z(D) / Z(R)), N = T - (M - s.value) - 1;
      if (r.value = `${y}`, T - 2 > M) {
        if (z === void 0 || T !== B) for (let A = 2; A < M + 2; A++) H.push(A);
        if (y <= M && y < N) {
          H = [];
          for (let A = 1; A < M + 1; A++) H.push(A + 1);
          t.value = !0, o.value = !1;
        }
        if (y > M && y < N) {
          H = [];
          for (let A = 1; A < M + 1; A++) H.push(y + A - s.value);
          t.value = y === 2 && M === 1, o.value = !1;
        }
        if (y >= N) {
          H = [];
          for (let A = 1; A < M + 1; A++) H.push(T - (M - A) - 1);
          t.value = !1, o.value = !0;
        }
        H = [
          1,
          "...",
          ...H,
          "...",
          T
        ];
      } else for (let A = 1; A <= T; A++) H.push(A);
      l.value = H, z != null && T > 0 && S(E, y, O), S(e["onUpdate:current"], y), S(e["onUpdate:size"], O);
    }, { immediate: !0 });
    function v(y, O) {
      return nr(y) ? !1 : O === 1 ? t.value : o.value;
    }
    function p(y, O) {
      return nr(y) ? "basic" : O === 1 ? "head" : "tail";
    }
    function h(y, O) {
      if (!(y === a.value || e.disabled)) {
        if (y === "...") {
          a.value = O === 1 ? Math.max(a.value - e.maxPagerCount, 1) : Math.min(a.value + e.maxPagerCount, u.value);
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
        nr(y) && (a.value = y);
      }
    }
    function g() {
      const y = w(a.value);
      r.value = String(y), a.value = y;
    }
    function w(y) {
      return y > u.value ? u.value : y < 1 ? 1 : y;
    }
    function $(y, O, T) {
      T.target.blur();
      const z = w(Z(O));
      r.value = String(z), a.value = z, y === "quick" && (n.value = "");
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
      clickSize: g,
      setPage: $,
      toNumber: Z,
      formatElevation: Pn
    };
  }
});
Tg.render = wP;
var Ii = Tg;
de(Ii);
fe(Ii, zg);
var tN = Ii, za = Ii, Eg = {
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
function kP() {
  const { bindChildren: e, childProviders: n, length: r } = Bn(Ig);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function $P() {
  const { bindParent: e, parentProvider: n, index: r } = In(Ig);
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
  return b(), k("div", { class: m(e.n("wrap")) }, [L("div", Xe({
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
    class: m(e.classes(e.n("action"), [
      e.checked,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: J({ color: e.checked ? e.checkedColor : e.uncheckedColor })
  }, [e.checked ? (b(), k("span", {
    key: 0,
    class: m(e.n("icon")),
    style: J({ fontSize: e.toSizeUnit(e.iconSize) })
  }, [U(e.$slots, "checked-icon", {}, () => [j(r, { name: "radio-marked" })])], 6)) : (b(), k("span", {
    key: 1,
    class: m(e.n("icon")),
    style: J({ fontSize: e.toSizeUnit(e.iconSize) })
  }, [U(e.$slots, "unchecked-icon", {}, () => [j(r, { name: "radio-blank" })])], 6)), j(t, {
    hovering: !e.disabled && !e.formDisabled && e.hovering,
    focusing: !e.disabled && !e.formDisabled && e.isFocusing
  }, null, 8, ["hovering", "focusing"])], 6)), [[a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    i,
    e.handleHovering,
    "desktop"
  ]]), e.$slots.default ? (b(), k("div", {
    key: 0,
    class: m(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    onClick: n[0] || (n[0] = (...l) => e.handleTextClick && e.handleTextClick(...l))
  }, [U(e.$slots, "default", { checked: e.checked })], 2)) : q("v-if", !0)], 16, zP), j(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Bg = te({
  name: SP,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarIcon: Je,
    VarFormDetails: Un,
    VarHoverOverlay: Gn
  },
  inheritAttrs: !1,
  props: Eg,
  setup(e) {
    const n = P(), r = P(!1), t = wn(e, "modelValue"), o = C(() => t.value === e.checkedValue), { radioGroup: a, bindRadioGroup: i } = $P(), { hovering: l, handleHovering: s } = ur(), { form: u, bindForm: d } = Kn(), c = C(() => {
      const E = u?.disabled.value || e.disabled, B = o.value, N = a?.hasChecked.value;
      if (e.tabindex != null) return e.tabindex;
      if (!E)
        return a && N && !B ? "-1" : "0";
    }), { errorMessage: f, validateWithTrigger: v, validate: p, resetValidation: h } = Jn(), g = {
      sync: R,
      validate: M,
      resetValidation: h,
      reset: H,
      isFocusing: C(() => r.value),
      move() {
        n.value.focus(), n.value.click();
      },
      moveable() {
        return !u?.disabled.value && !e.disabled && !u?.readonly.value && !e.readonly;
      }
    };
    S(i, g), S(d, g), xe(() => window, "keydown", w), xe(() => window, "keyup", $);
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
        const { validateTrigger: B, rules: N, modelValue: A } = e;
        v(B, E, N, A);
      });
    }
    function O(E) {
      return CP(this, null, function* () {
        const { checkedValue: B, onChange: N } = e;
        a && t.value === B || (t.value = E, a?.onToggle(B), yield Ne(), S(N, E), y("onChange"));
      });
    }
    function T(E) {
      const { disabled: B, readonly: N, uncheckedValue: A, checkedValue: I, onClick: F } = e;
      u?.disabled.value || B || (S(F, E), !(u?.readonly.value || N) && O(o.value ? A : I));
    }
    function z() {
      n.value.focus();
    }
    function R(E) {
      const { checkedValue: B, uncheckedValue: N } = e, A = E === B;
      return t.value = A ? B : N, A;
    }
    function H() {
      t.value = e.uncheckedValue, h();
    }
    function M() {
      return p(e.rules, e.modelValue);
    }
    function D(E) {
      const { uncheckedValue: B, checkedValue: N } = e;
      [B, N].includes(E) || (E = o.value ? B : N), O(E);
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
      handleTextClick: z,
      toSizeUnit: ze,
      toggle: D,
      reset: H,
      validate: M,
      resetValidation: h
    };
  }
});
Bg.render = TP;
var Bi = Bg;
de(Bi);
fe(Bi, Eg);
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
    class: m(e.classes(e.n("expand-trigger"), [e.bodyRow.expanded, e.n("expand-trigger--expanded")])),
    disabled: !e.isRowExpandable(e.bodyRow, e.cell.column),
    onClick: n[2] || (n[2] = (i) => e.toggleRowExpanded(e.bodyRow))
  }, [j(o, {
    "var-data-table-cover": "",
    name: e.bodyRow.expanded ? "chevron-down" : "chevron-right"
  }, null, 8, ["name"])], 10, DP)) : e.tree && e.cell.treeLevel != null ? (b(), k("div", {
    key: 3,
    class: m(e.n("tree-cell")),
    style: J(e.treeStyle)
  }, [e.cell.treeExpandable ? (b(), k("button", {
    key: 0,
    type: "button",
    tabindex: "-1",
    class: m(e.classes(e.n("tree-trigger"), [e.cell.treeExpanded, e.n("tree-trigger--expanded")])),
    onClick: n[3] || (n[3] = (i) => e.toggleTreeRowExpanded(e.bodyRow))
  }, [j(o, {
    "var-data-table-cover": "",
    name: e.cell.treeExpanded ? "chevron-down" : "chevron-right"
  }, null, 8, ["name"])], 2)) : (b(), k("span", {
    key: 1,
    class: m(e.n("tree-indent"))
  }, null, 2)), j(a, {
    is: e.renderCell(e.bodyRow, e.cell.column),
    tag: "div"
  }, null, 8, ["is"])], 6)) : (b(), we(a, {
    key: 4,
    is: e.renderCell(e.bodyRow, e.cell.column),
    tag: "div"
  }, null, 8, ["is"]))], 16, BP);
}
var Dg = te({
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
Dg.render = MP;
var AP = Dg, { n: NP, classes: RP } = oe("data-table"), VP = ["colspan", "rowspan"];
function LP(e, n) {
  const r = x("var-checkbox"), t = x("maybe-v-node"), o = x("var-icon");
  return b(), k("th", {
    class: m(e.classes(e.n("cell"), e.n("header-cell"), [e.isSelectionColumn(e.headerCell.column), e.n("selection-cell")], [e.isExpandColumn(e.headerCell.column), e.n("expand-cell")], [e.headerCell.fixed, e.n("fixed-cell")], [e.shouldRenderLeftFixedShadow(e.headerCell.endLeafColumnIndex), e.n("fixed-cell--shadow-right")], [e.shouldRenderRightFixedShadow(e.headerCell.startLeafColumnIndex), e.n("fixed-cell--shadow-left")])),
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
    class: m(e.classes(e.n("sort-trigger"), e.n(`sort-trigger--align-${e.headerAlign}`), [e.columnSorterOrder, e.n("sort-trigger--active")])),
    style: J(e.sortTriggerStyle),
    onClick: n[0] || (n[0] = (a) => e.toggleColumnSorter(e.headerCell.column.key))
  }, [L("span", { class: m(e.n("sort-trigger-text")) }, [j(t, { is: e.renderHeaderTitle() }, null, 8, ["is"])], 2), L("span", {
    class: m(e.n("sort-trigger-icon")),
    "aria-hidden": "true"
  }, [j(o, {
    name: "chevron-up",
    size: 18,
    "var-data-table-cover": "",
    class: m(e.classes(e.n("sort-trigger-icon-up"), [e.columnSorterOrder === "asc", e.n("sort-trigger-icon--active")]))
  }, null, 8, ["class"]), j(o, {
    name: "chevron-down",
    size: 18,
    "var-data-table-cover": "",
    class: m(e.classes(e.n("sort-trigger-icon-down"), [e.columnSorterOrder === "desc", e.n("sort-trigger-icon--active")]))
  }, null, 8, ["class"])], 2)], 6)) : (b(), we(t, {
    key: 2,
    is: e.renderHeaderTitle()
  }, null, 8, ["is"])), e.isColumnResizable(e.headerCell.column) && e.headerCell.colSpan == null && !e.isLastHeaderColumn(e.headerCell.startLeafColumnIndex) ? (b(), k("button", {
    key: 3,
    type: "button",
    tabindex: "-1",
    class: m(e.n("resize-trigger")),
    onClick: n[1] || (n[1] = Rn(() => {
    }, ["stop"])),
    onMousedown: n[2] || (n[2] = (a) => e.startColumnResize(a, e.headerCell))
  }, null, 34)) : q("v-if", !0)], 14, VP);
}
var Mg = te({
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
Mg.render = LP;
var FP = Mg, Ag = {
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
function Ng(e, n) {
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
var UP = Object.defineProperty, HP = Object.defineProperties, jP = Object.getOwnPropertyDescriptors, nf = Object.getOwnPropertySymbols, YP = Object.prototype.hasOwnProperty, KP = Object.prototype.propertyIsEnumerable, rf = (e, n, r) => n in e ? UP(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, WP = (e, n) => {
  for (var r in n || (n = {})) YP.call(n, r) && rf(e, r, n[r]);
  if (nf)
    for (var r of nf(n)) KP.call(n, r) && rf(e, r, n[r]);
  return e;
}, qP = (e, n) => HP(e, jP(n));
function XP({ columns: e, sourceRows: n, tree: r, collapsedTreeRowKeys: t, expandedRowKeySet: o, firstTreeColumnIndex: a, getRowKey: i, getTreeChildren: l }) {
  const s = C(() => r() ? v(n(), !0) : f(n())), u = C(() => r() ? v(n(), !1) : s.value), d = C(() => {
    const p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map();
    for (const w of s.value)
      p.set(w.key, w), h.set(w.row, w), w.parentKey != null && g.set(w.key, w.parentKey);
    return {
      rowByKey: p,
      rowByObject: h,
      parentKeyByChild: g
    };
  }), c = C(() => {
    const p = e(), h = u.value.length, g = p.length, w = Ng(h, g);
    return u.value.map(($, y) => {
      const O = [];
      return p.forEach((T, z) => {
        var R, H;
        if (w.isCovered(y, z)) return;
        const M = {
          row: $.row,
          rowIndex: $.rowIndex,
          column: T
        }, D = g - z, E = h - y, B = So(T.colSpan, D, M), N = So(T.rowSpan, E, M);
        if (B === 0 || N === 0) return;
        w.cover(y, z, N, B);
        const A = z === a.value;
        O.push({
          key: `${(H = (R = T.key) != null ? R : T.type) != null ? H : z}-${y}-${z}`,
          columnIndex: z,
          column: T,
          treeLevel: A ? $.level : void 0,
          treeExpandable: A ? $.expandable : void 0,
          treeExpanded: A ? $.treeExpanded : void 0,
          colSpan: B > 1 ? B : void 0,
          rowSpan: N > 1 ? N : void 0
        });
      }), qP(WP({}, $), {
        expanded: o.value.has($.key),
        cells: O
      });
    });
  });
  function f(p) {
    return p.map((h, g) => ({
      key: i(h, g),
      row: h,
      rowIndex: g,
      level: 0,
      expandable: !1,
      treeExpanded: !0
    }));
  }
  function v(p, h) {
    const g = [];
    let w = 0;
    function $(y, O, T, z) {
      for (const R of y) {
        const H = w;
        w += 1;
        const M = i(R, H), D = l(R), E = r() && D.length > 0, B = !E || !t.value.has(M);
        (h || z) && g.push({
          key: M,
          row: R,
          rowIndex: H,
          level: O,
          parentKey: T,
          expandable: E,
          treeExpanded: B
        }), $(D, O + 1, M, z && B);
      }
    }
    return $(p, 0, void 0, !0), g;
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
      for (let g = 0; g < f.length; g += 1)
        f[g].fixed === "left" && (p[g] = h, h += v[g]);
      return p;
    }
    for (let g = f.length - 1; g >= 0; g -= 1)
      f[g].fixed === "right" && (p[g] = h, h += v[g]);
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
var ZP = Object.defineProperty, JP = Object.defineProperties, QP = Object.getOwnPropertyDescriptors, tf = Object.getOwnPropertySymbols, xP = Object.prototype.hasOwnProperty, _P = Object.prototype.propertyIsEnumerable, of = (e, n, r) => n in e ? ZP(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, e4 = (e, n) => {
  for (var r in n || (n = {})) xP.call(n, r) && of(e, r, n[r]);
  if (tf)
    for (var r of tf(n)) _P.call(n, r) && of(e, r, n[r]);
  return e;
}, n4 = (e, n) => JP(e, QP(n)), r4 = 52;
function t4({ columns: e, isSelectionColumn: n, isExpandColumn: r }) {
  const t = P({});
  let o;
  const a = C(() => e().map((w, $) => {
    var y;
    return (y = f(w, $)) != null ? y : 0;
  })), i = C(() => e().some((w, $) => f(w, $) != null)), l = C(() => a.value.reduce((w, $) => w + $, 0));
  me(e, () => {
    const w = new Set(e().map((y, O) => v(y, O))), $ = {};
    Object.entries(t.value).forEach(([y, O]) => {
      w.has(y) && ($[y] = O);
    }), t.value = $;
  }, { immediate: !0 }), Pt(() => {
    o?.();
  });
  function s(w) {
    return w.resizable === !0;
  }
  function u(w, $) {
    const y = {}, O = c(w, $);
    if (O != null)
      return y.width = ze(O), y.minWidth = ze(O), y.maxWidth = ze(O), y;
    const T = f(w, $);
    T != null && (y.width = ze(T));
    const z = p(w);
    z != null ? y.minWidth = ze(z) : T != null && (y.minWidth = ze(T));
    const R = h(w);
    return R != null && (y.maxWidth = ze(R)), y;
  }
  function d(w, $) {
    var y;
    if (!s($.column)) return;
    w.preventDefault(), w.stopPropagation();
    const O = (y = w.currentTarget) == null ? void 0 : y.closest("th");
    if (!O) return;
    o?.();
    const T = w.clientX, z = O.getBoundingClientRect().width, R = v($.column, $.startLeafColumnIndex);
    document.addEventListener("mousemove", H), document.addEventListener("mouseup", M), o = D;
    function H(E) {
      const B = g($.column, z + E.clientX - T);
      t.value = n4(e4({}, t.value), { [R]: B });
    }
    function M() {
      D();
    }
    function D() {
      document.removeEventListener("mousemove", H), document.removeEventListener("mouseup", M), o = void 0;
    }
  }
  function c(w, $) {
    return t.value[v(w, $)];
  }
  function f(w, $) {
    var y;
    const O = c(w, $);
    if (O != null) return O;
    const T = (y = w.width) != null ? y : n(w) || r(w) ? r4 : void 0;
    if (T != null) return g(w, fn(T));
    const z = p(w);
    if (z != null) return z;
  }
  function v(w, $) {
    var y, O;
    return `${(O = (y = w.key) != null ? y : w.type) != null ? O : "column"}-${$}`;
  }
  function p(w) {
    if (w.minWidth == null) return;
    const $ = fn(w.minWidth), y = h(w);
    return y == null ? $ : Math.min($, y);
  }
  function h(w) {
    if (w.maxWidth != null)
      return fn(w.maxWidth);
  }
  function g(w, $) {
    var y, O;
    return hn($, (y = p(w)) != null ? y : 0, (O = h(w)) != null ? O : Number.POSITIVE_INFINITY);
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
  }), _v(n, o), wr(o);
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
    const o = qr(t({ data: n() })), a = e(), i = Ng(o.length, a.length);
    return o.map((l, s) => a.flatMap((u, d) => {
      var c, f;
      if (i.isCovered(s, d)) return [];
      const v = (f = (c = u.key) != null ? c : u.type) != null ? f : String(d), p = l[v], h = a.length - d, g = o.length - s, w = So(p?.colSpan, h), $ = So(p?.rowSpan, g);
      return w === 0 || $ === 0 ? [] : (i.cover(s, d, $, w), [{
        key: `${s}-${v}`,
        columnIndex: d,
        column: u,
        value: p?.value,
        colSpan: w > 1 ? w : void 0,
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
    function f(h, g) {
      u[g] || (u[g] = []);
      const w = u[g], $ = c, y = $ + o(h).length - 1;
      let O = $, T = 0;
      return h.forEach((z, R) => {
        if (t(z)) {
          T += v(w, z, g, R);
          return;
        }
        const H = p(w, z, g, y, O);
        H > 1 && (O = c - 1 + H), T += H;
      }), T;
    }
    function v(h, g, w, $) {
      const y = c, O = f(g.children, w + 1), T = c - 1;
      return O === 0 ? 0 : (h.push({
        key: a(g, w, $),
        column: g,
        colSpan: O,
        startLeafColumnIndex: y,
        endLeafColumnIndex: T,
        fixed: l(n.value.slice(y, T + 1))
      }), O);
    }
    function p(h, g, w, $, y) {
      if (c < y)
        return c += 1, 0;
      const O = c, T = $ - O + 1, z = So(g.titleColSpan, T);
      return c += 1, z === 0 ? 0 : (h.push({
        key: a(g, w, O),
        column: g,
        colSpan: z > 1 ? z : void 0,
        rowSpan: d - w > 1 ? d - w : void 0,
        startLeafColumnIndex: O,
        endLeafColumnIndex: O + z - 1,
        fixed: l(n.value.slice(O, O + z))
      }), z);
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
var s4 = Object.defineProperty, u4 = Object.defineProperties, d4 = Object.getOwnPropertyDescriptors, af = Object.getOwnPropertySymbols, c4 = Object.prototype.hasOwnProperty, f4 = Object.prototype.propertyIsEnumerable, lf = (e, n, r) => n in e ? s4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ul = (e, n) => {
  for (var r in n || (n = {})) c4.call(n, r) && lf(e, r, n[r]);
  if (af)
    for (var r of af(n)) f4.call(n, r) && lf(e, r, n[r]);
  return e;
}, sf = (e, n) => u4(e, d4(n)), uf = {
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
    return Do(p) ? sf(Ul({}, uf), { disabled: r() }) : sf(Ul(Ul({}, uf), p), { disabled: r() || p.disabled === !0 });
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
  ], ([p, h, g, w, $]) => {
    p === !1 || h && g == null || w === $ || S(l?.(), $);
  }, { immediate: !0 }), {
    paginationProps: s,
    paginationTotal: u,
    showPagination: d,
    normalizedPage: f,
    pagedData: v
  };
}
var p4 = Object.defineProperty, m4 = Object.defineProperties, g4 = Object.getOwnPropertyDescriptors, df = Object.getOwnPropertySymbols, h4 = Object.prototype.hasOwnProperty, b4 = Object.prototype.propertyIsEnumerable, cf = (e, n, r) => n in e ? p4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, ff = (e, n) => {
  for (var r in n || (n = {})) h4.call(n, r) && cf(e, r, n[r]);
  if (df)
    for (var r of df(n)) b4.call(n, r) && cf(e, r, n[r]);
  return e;
}, vf = (e, n) => m4(e, g4(n));
function y4({ columns: e, tree: n, cascade: r, pagedData: t, allFlatRows: o, treeRowMeta: a, checkedRowKeys: i, isSelectionColumn: l, getTreeChildren: s }) {
  const u = C(() => e().find(l)), d = C(() => n() && r() && !!u.value && g(u.value)), c = C(() => new Set(i.value)), f = C(() => {
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
        return E.set(I.key, ne), vf(ff({}, ne), { selectable: Q });
      }
      const ae = F.filter((ne) => ne.selectable), Te = ae.length > 0 ? ae.every((ne) => ne.checked) : X, ce = ae.some((ne) => ne.checked || ne.indeterminate), G = {
        checked: Q ? Te : !1,
        indeterminate: ae.length > 0 && !Te && ce
      };
      return E.set(I.key, G), vf(ff({}, G), { selectable: Q || ae.length > 0 });
    }
    return E;
  }), v = C(() => {
    const E = u.value;
    return E ? o().filter((B) => $(B.row, B.rowIndex, E)) : [];
  }), p = C(() => v.value.length > 0 && v.value.every((E) => O(E.key))), h = C(() => v.value.some((E) => O(E.key) || T(E.key)) && !p.value);
  function g(E) {
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
  function O(E) {
    var B, N;
    return (N = (B = f.value.get(E)) == null ? void 0 : B.checked) != null ? N : c.value.has(E);
  }
  function T(E) {
    var B, N;
    return (N = (B = f.value.get(E)) == null ? void 0 : B.indeterminate) != null ? N : !1;
  }
  function z(E, B) {
    const N = u.value;
    if (!N || !w(N) || !$(E.row, E.rowIndex, N)) return;
    if (!g(N)) {
      y(B ? [E.key] : i.value.filter((I) => I !== E.key));
      return;
    }
    const A = new Set(i.value);
    if (d.value) {
      for (const I of H(E.row)) B ? A.add(I) : A.delete(I);
      D(A, E.key);
    } else B ? A.add(E.key) : A.delete(E.key);
    y([...A]);
  }
  function R(E) {
    const B = u.value;
    if (!B || !w(B) || !g(B)) return;
    const N = new Set(i.value);
    for (const A of v.value) E ? N.add(A.key) : N.delete(A.key);
    y([...N]);
  }
  function H(E) {
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
    isMultipleSelectionColumn: g,
    isSelectionColumnSelectable: w,
    isRowSelectable: $,
    isRowKeySelected: O,
    isRowKeyIndeterminate: T,
    toggleRowSelection: z,
    toggleCurrentSelectableRows: R
  };
}
var w4 = Object.defineProperty, k4 = Object.defineProperties, $4 = Object.getOwnPropertyDescriptors, pf = Object.getOwnPropertySymbols, C4 = Object.prototype.hasOwnProperty, S4 = Object.prototype.propertyIsEnumerable, mf = (e, n, r) => n in e ? w4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, P4 = (e, n) => {
  for (var r in n || (n = {})) C4.call(n, r) && mf(e, r, n[r]);
  if (pf)
    for (var r of pf(n)) S4.call(n, r) && mf(e, r, n[r]);
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
        const g = f;
        f += 1;
        const w = o(h);
        w.length > 0 && c.add(t(h, g)), v(w);
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
var E4 = Object.defineProperty, I4 = Object.defineProperties, B4 = Object.getOwnPropertyDescriptors, gf = Object.getOwnPropertySymbols, D4 = Object.prototype.hasOwnProperty, M4 = Object.prototype.propertyIsEnumerable, hf = (e, n, r) => n in e ? E4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, bf = (e, n) => {
  for (var r in n || (n = {})) D4.call(n, r) && hf(e, r, n[r]);
  if (gf)
    for (var r of gf(n)) M4.call(n, r) && hf(e, r, n[r]);
  return e;
}, yf = (e, n) => I4(e, B4(n)), { name: A4, n: N4, classes: R4 } = oe("data-table"), V4 = { key: 0 }, L4 = ["colspan"], F4 = { key: 1 }, U4 = ["colspan", "rowspan"];
function H4(e, n) {
  const r = x("data-table-header-cell"), t = x("data-table-body-cell"), o = x("maybe-v-node"), a = x("var-pagination"), i = x("var-loading");
  return b(), k("div", { class: m(e.classes(e.n(), [!e.plain, e.formatElevation(e.elevation, 1)], e.n("$--box"), [e.surface === "low", e.n("--surface-low")], [e.bordered, e.n("--bordered")], [e.cellBordered, e.n("--cell-bordered")], [e.plain, e.n("--plain")], [e.showPagination, e.n("--with-footer")], e.n(`--${e.size}`))) }, [j(i, { loading: e.loading }, Pr({
    default: ue(() => [L("div", {
      ref: "container",
      class: m(e.classes(e.n("container"), e.n("$--scrollbar"))),
      style: J(e.containerStyle),
      onScroll: n[0] || (n[0] = (...l) => e.handleContainerScroll && e.handleContainerScroll(...l))
    }, [e.columns.length ? (b(), k("table", {
      key: 0,
      class: m(e.n("table")),
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
        class: m(e.n("header-row"))
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
        class: m(e.n("expanded-row"))
      }, [L("td", {
        class: m(e.classes(e.n("cell"), e.n("body-cell"), e.n("expanded-cell"))),
        colspan: e.columns.length
      }, [L("div", { class: m(e.n("expanded-content")) }, [j(o, {
        is: e.renderExpandedRow(l),
        tag: "div"
      }, null, 8, ["is"])], 2)], 10, L4)], 2)) : q("v-if", !0)], 64))), 128))])) : q("v-if", !0),
      e.footRows.length ? (b(), k("tfoot", F4, [(b(!0), k(Be, null, Ye(e.footRows, (l, s) => (b(), k("tr", {
        key: s,
        class: m(e.n("summary-row"))
      }, [(b(!0), k(Be, null, Ye(l, (u) => (b(), k("td", {
        key: u.key,
        class: m(e.classes(e.n("cell"), e.n("summary-cell"), [u.column.fixed, e.n("fixed-cell")], [e.shouldRenderLeftFixedShadow(u.columnIndex), e.n("fixed-cell--shadow-right")], [e.shouldRenderRightFixedShadow(u.columnIndex), e.n("fixed-cell--shadow-left")])),
        style: J(e.getBodyCellStyle(u)),
        colspan: u.colSpan,
        rowspan: u.rowSpan
      }, [j(o, {
        is: u.value,
        tag: "div"
      }, null, 8, ["is"])], 14, U4))), 128))], 2))), 128))])) : q("v-if", !0)
    ], 6)) : q("v-if", !0), e.bodyRows.length ? q("v-if", !0) : (b(), k("div", {
      key: 1,
      class: m(e.n("empty"))
    }, [U(e.$slots, "empty", {}, () => [Le(ve((e.pt ? e.pt : e.t)("dataTableEmptyText")), 1)])], 2))], 38), e.showPagination ? (b(), k("div", {
      key: 0,
      class: m(e.n("footer"))
    }, [U(e.$slots, "footer-prefix"), j(a, {
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
    fn: ue(() => [U(e.$slots, "loading-description")]),
    key: "0"
  } : void 0]), 1032, ["loading"])], 2);
}
var Rg = te({
  name: A4,
  components: {
    DataTableBodyCell: AP,
    DataTableHeaderCell: FP,
    VarLoading: Ct,
    VarPagination: za,
    MaybeVNode: lr
  },
  props: Ag,
  setup(e) {
    const { t: n } = kr(), r = wn(e, "checkedRowKeys"), t = wn(e, "expandedRowKeys"), o = wn(e, "expandedTreeRowKeys"), a = wn(e, "page"), i = wn(e, "pageSize"), { collapsedTreeRowKeys: l, toggleTreeRowExpanded: s } = T4({
      tree: () => e.tree,
      data: () => e.data,
      expandedTreeRowKeys: o,
      getRowKey: re,
      getTreeChildren: ye
    }), { normalizedColumns: u, headerRows: d } = l4({ columns: () => e.columns }), { hasResolvedColumnWidth: c, resolvedColumnWidths: f, totalResolvedColumnWidth: v, getColStyle: p, isColumnResizable: h, startColumnResize: g } = t4({
      columns: () => u.value,
      isSelectionColumn: Pe,
      isExpandColumn: Ge
    }), w = C(() => {
      const se = {};
      return e.maxHeight != null && (se.maxHeight = ze(e.maxHeight), se.overflow = "auto"), se.overflowX = "auto", se;
    }), $ = C(() => {
      const se = {
        width: "100%",
        tableLayout: c.value ? "fixed" : e.tableLayout
      };
      return e.scrollX != null && (se.minWidth = ze(e.scrollX)), se;
    }), { getFixedStyle: y, isFirstRightFixedColumn: O, isLastLeftFixedColumn: T } = GP({
      columns: () => u.value,
      resolvedColumnWidths: () => f.value
    }), { getColumnSorterOrder: z, isColumnSortable: R, toggleColumnSorter: H } = z4({
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
    ]), { currentSelectableRows: ie, allCurrentRowsSelected: Ee, someCurrentRowsSelected: He, isMultipleSelectionColumn: nn, isSelectionColumnSelectable: qe, isRowSelectable: en, isRowKeySelected: on, isRowKeyIndeterminate: be, toggleRowSelection: ee, toggleCurrentSelectableRows: K } = y4({
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
      return pe.value < Oe.value - 1 && O(se);
    }
    function sn(se) {
      var ke;
      return yf(bf({ textAlign: or((ke = se.column.titleAlign) != null ? ke : se.column.align) }, y(se.fixed, se.startLeafColumnIndex)), { zIndex: se.fixed ? 3 : 2 });
    }
    function _(se) {
      return yf(bf({ textAlign: or(se.column.align) }, y(se.column.fixed, se.columnIndex)), { zIndex: se.column.fixed ? 1 : void 0 });
    }
    function he(se, ke) {
      a.value = se, i.value = ke;
    }
    return {
      pt: n,
      t: gn,
      container: ne,
      expandedRowKeys: t,
      containerStyle: w,
      paginationProps: M,
      paginationTotal: D,
      showPagination: E,
      normalizedPage: B,
      pageSize: i,
      tableStyle: $,
      columns: u,
      currentSelectableRows: ie,
      allCurrentRowsSelected: Ee,
      someCurrentRowsSelected: He,
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
      getColumnSorterOrder: z,
      isRowExpandable: F,
      isRowKeyIndeterminate: be,
      isRowKeySelected: on,
      isRowSelectable: en,
      shouldRenderLeftFixedShadow: Qn,
      shouldRenderRightFixedShadow: Re,
      toggleColumnSorter: H,
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
      startColumnResize: g,
      n: N4,
      classes: R4,
      formatElevation: Pn,
      toSizeUnit: ze
    };
  }
});
Rg.render = H4;
var Di = Rg;
de(Di);
fe(Di, Ag);
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
}), j4 = Object.defineProperty, wf = Object.getOwnPropertySymbols, Y4 = Object.prototype.hasOwnProperty, K4 = Object.prototype.propertyIsEnumerable, kf = (e, n, r) => n in e ? j4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, W4 = (e, n) => {
  for (var r in n || (n = {})) Y4.call(n, r) && kf(e, r, n[r]);
  if (wf)
    for (var r of wf(n)) K4.call(n, r) && kf(e, r, n[r]);
  return e;
}, xn = Ho(), q4 = 7, X4 = 6, xo = {
  Prev: -1,
  Current: 0,
  Next: 1
}, { n: _o } = oe("day-picker"), { n: $f } = oe("date-picker");
function G4(e, n) {
  const r = x("var-button");
  return b(), k("div", { class: m(e.n()) }, [L("div", { class: m(e.n("content")) }, [j(bn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: ue(() => [(b(), k("div", { key: e.panelKey }, [L("ul", { class: m(e.n("head")) }, [(b(!0), k(Be, null, Ye(e.sortWeekList, (t) => (b(), k("li", { key: t }, ve(e.getDayAbbr(t)), 1))), 128))], 2), L("ul", { class: m(e.n("body")) }, [(b(!0), k(Be, null, Ye(e.days, (t, o) => (b(), k("li", { key: o }, [j(r, Xe({
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
var Vg = te({
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
      const z = lo.findIndex((R) => R === e.panelProps.firstDayOfWeek);
      return z === -1 || z === 0 ? [...lo] : [...lo.slice(z), ...lo.slice(0, z)];
    });
    function u(z) {
      var R, H;
      return (H = (R = (i || gn)("datePickerWeekDict")) == null ? void 0 : R[z].abbr) != null ? H : "";
    }
    function d(z, R) {
      return {
        dateValue: z.format(Mn.Day),
        day: z.date(),
        monthOffset: R
      };
    }
    function c() {
      const { preview: { previewMonth: z, previewYear: R } } = e, H = xn(`${R}-${z}-01`), M = H.endOf(Qe.Month), D = H.daysInMonth(), E = Math.max(0, s.value.findIndex((A) => A === `${H.day()}`)), B = X4 * q4 - E - D, N = [];
      for (let A = E; A > 0; A--) N.push(d(H.subtract(A, Qe.Day), xo.Prev));
      for (let A = 1; A <= D; A++) N.push(d(H.date(A), xo.Current));
      for (let A = 1; A <= B; A++) N.push(d(M.add(A, Qe.Day), xo.Next));
      t.value = N;
    }
    function f(z) {
      const { min: R, max: H } = e.panelProps, M = H ? xn(z).isSameOrBefore(xn(H), Qe.Day) : !0, D = R ? xn(z).isSameOrAfter(xn(R), Qe.Day) : !0;
      return M && D;
    }
    function v() {
      const { selectedYear: z, selectedMonth: R, selectedDay: H } = e.selection;
      return z && R && H ? `${z}-${R}-${H}` : void 0;
    }
    function p(z) {
      const R = v();
      return R ? xn(z).isSame(xn(R), Qe.Day) : !1;
    }
    function h(z) {
      const { selection: { selectedDays: R, selectedRangeDays: H }, panelProps: { range: M } } = e;
      if (!M) return R.includes(z);
      if (!H.length) return !1;
      if (H.length === 1) return xn(z).isSame(xn(H[0]), Qe.Day);
      const D = xn(z).isSameOrBefore(xn(H[1]), Qe.Day), E = xn(z).isSameOrAfter(xn(H[0]), Qe.Day);
      return D && E;
    }
    function g(z) {
      const { allowedDates: R } = e.panelProps;
      return !f(z) || (R ? !R(z) : !1);
    }
    function w(z, R, H) {
      const { multiple: M, range: D, showCurrent: E } = e.panelProps;
      return E && xn(z).isSame(xn(e.current), Qe.Day) ? (D || M || l.value) && H ? !0 : D || M ? !R : l.value ? e.selection.selectedDay !== r : !0 : !1;
    }
    function $(z) {
      const { panelProps: { color: R, multiple: H, range: M } } = e, { dateValue: D, monthOffset: E } = z, B = E === xo.Current, N = p(D), A = M || H ? h(D) : N, I = g(D), F = I || (M || H ? !A : !N), Q = w(D, A, I), X = !I && !Q && !A;
      return {
        text: F,
        outline: Q,
        textColor: !I && Q ? R ?? "" : "",
        [`${$f()}-color-cover`]: X,
        class: [_o("button"), {
          [_o("button--usable")]: B,
          [_o("button--adjacent")]: !B
        }],
        disabled: I
      };
    }
    function y(z) {
      o.value = z === Wr.Prev, a.value += z === Wr.Prev ? -1 : 1;
    }
    function O(z) {
      o.value = z === Wr.Prev, a.value += z === Wr.Prev ? -1 : 1;
    }
    function T(z) {
      n("choose-day", z.day, z.monthOffset);
    }
    return En(() => {
      c();
    }), me(() => e.preview, () => {
      c();
    }), {
      n: _o,
      nDate: $f,
      days: t,
      reverse: o,
      panelKey: a,
      sortWeekList: s,
      shiftPreview: y,
      shiftYearPreview: O,
      getDayAbbr: u,
      selectDay: T,
      buttonProps: $
    };
  }
});
Vg.render = G4;
var Z4 = Vg, J4 = Object.defineProperty, Cf = Object.getOwnPropertySymbols, Q4 = Object.prototype.hasOwnProperty, x4 = Object.prototype.propertyIsEnumerable, Sf = (e, n, r) => n in e ? J4(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, _4 = (e, n) => {
  for (var r in n || (n = {})) Q4.call(n, r) && Sf(e, r, n[r]);
  if (Cf)
    for (var r of Cf(n)) x4.call(n, r) && Sf(e, r, n[r]);
  return e;
}, Dr = Ho(), { n: Pf } = oe("month-picker"), { n: Of } = oe("date-picker");
function e3(e, n) {
  const r = x("var-button");
  return b(), k("div", { class: m(e.n()) }, [L("div", { class: m(e.n("content")) }, [j(bn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
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
var Lg = te({
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
      const { preview: { previewYear: f }, panelProps: { min: v, max: p } } = e, h = `${f}-${c}`, g = p ? Dr(h).isSameOrBefore(Dr(p), Qe.Month) : !0, w = v ? Dr(h).isSameOrAfter(Dr(v), Qe.Month) : !0;
      return g && w;
    }
    function l(c, f) {
      const { preview: { previewYear: v }, selection: { selectedMonth: p, selectedYear: h, selectedMonths: g, selectedRangeMonths: w }, panelProps: { multiple: $, range: y } } = e;
      if (y) {
        if (!w.length) return !1;
        if (w.length === 1) return Dr(c).isSame(Dr(w[0]), Qe.Month);
        const O = Dr(c).isSameOrBefore(Dr(w[1]), Qe.Month), T = Dr(c).isSameOrAfter(Dr(w[0]), Qe.Month);
        return O && T;
      }
      return $ ? g.includes(c) : h === v && p === f;
    }
    function s(c) {
      const { preview: { previewYear: f }, panelProps: { allowedDates: v, color: p, type: h } } = e, g = `${f}-${c}`, w = l(g, c), $ = !i(c) || (h === Ve.Month && v ? !v(g) : !1);
      return {
        outline: !1,
        text: $ || !w,
        color: w && !$ ? p : "",
        textColor: "",
        [`${Of()}-color-cover`]: !w && !$,
        class: Pf("button"),
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
      n: Pf,
      nDate: Of,
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
Lg.render = e3;
var n3 = Lg, { n: r3 } = oe("date-picker-header");
function t3(e, n) {
  const r = x("var-icon"), t = x("var-button");
  return b(), k("div", { class: m([e.n(), e.n(`--${e.type}`)]) }, [e.type === e.DatePickerUnits.Day ? (b(), k(Be, { key: 0 }, [L("div", { class: m(e.n("nav")) }, [
    j(t, {
      class: m(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[0] || (n[0] = (o) => e.$emit("shift-year-preview", e.ShiftDirections.Prev))
    }, {
      default: ue(() => [j(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class"]),
    j(t, {
      class: m([e.n("text-button"), e.n("year")]),
      "var-date-picker-header-cover": "",
      text: "",
      onClick: n[1] || (n[1] = (o) => e.$emit("open-year-panel"))
    }, {
      default: ue(() => [L("span", { class: m(e.n("year-value")) }, [Le(ve(e.date.previewYear) + " ", 1), j(r, {
        class: m(e.n("text-button-icon")),
        name: "chevron-down"
      }, null, 8, ["class"])], 2)]),
      _: 1
    }, 8, ["class"]),
    j(t, {
      class: m(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[2] || (n[2] = (o) => e.$emit("shift-year-preview", e.ShiftDirections.Next))
    }, {
      default: ue(() => [j(r, { name: "chevron-right" })]),
      _: 1
    }, 8, ["class"])
  ], 2), L("div", { class: m([e.n("nav"), e.n("nav--month")]) }, [
    j(t, {
      class: m(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[3] || (n[3] = (o) => e.$emit("shift-preview", e.ShiftDirections.Prev))
    }, {
      default: ue(() => [j(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class"]),
    j(t, {
      class: m([e.n("text-button"), e.n("month")]),
      "var-date-picker-header-cover": "",
      text: "",
      onClick: n[4] || (n[4] = (o) => e.$emit("open-month-panel"))
    }, {
      default: ue(() => [Le(ve(e.getMonthName()) + " ", 1), j(r, {
        class: m(e.n("text-button-icon")),
        name: "chevron-down"
      }, null, 8, ["class"])]),
      _: 1
    }, 8, ["class"]),
    j(t, {
      class: m(e.n("arrow")),
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
    class: m(e.n("nav"))
  }, [
    j(t, {
      class: m(e.n("arrow")),
      "var-date-picker-header-cover": "",
      round: "",
      text: "",
      onClick: n[6] || (n[6] = (o) => e.$emit("shift-preview", e.ShiftDirections.Prev))
    }, {
      default: ue(() => [j(r, { name: "chevron-left" })]),
      _: 1
    }, 8, ["class"]),
    j(t, {
      class: m([e.n("text-button"), e.n("year")]),
      "var-date-picker-header-cover": "",
      text: "",
      onClick: n[7] || (n[7] = (o) => e.$emit("open-year-panel"))
    }, {
      default: ue(() => [L("span", { class: m(e.n("year-value")) }, [Le(ve(e.date.previewYear) + " ", 1), j(r, {
        class: m(e.n("text-button-icon")),
        name: "chevron-down"
      }, null, 8, ["class"])], 2)]),
      _: 1
    }, 8, ["class"]),
    j(t, {
      class: m(e.n("arrow")),
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
    class: m([e.n("nav"), e.n(`nav--${e.type}`)])
  }, [
    j(t, {
      class: m(e.n("arrow")),
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
      class: m([e.n("text-button"), e.n("panel-label")]),
      "var-date-picker-header-cover": "",
      text: "",
      onClick: n[10] || (n[10] = (o) => e.$emit("open-date-panel"))
    }, {
      default: ue(() => [Le(ve(e.getPanelLabel()) + " ", 1), j(r, {
        class: m(e.n("text-button-icon")),
        name: "chevron-up"
      }, null, 8, ["class"])]),
      _: 1
    }, 8, ["class"])) : (b(), k("div", {
      key: 1,
      class: m([e.n("text-button"), e.n("panel-label")]),
      "var-date-picker-header-cover": ""
    }, ve(e.getPanelLabel()), 3)),
    j(t, {
      class: m(e.n("arrow")),
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
var Fg = te({
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
Fg.render = t3;
var o3 = Fg, Ug = {
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
}, a3 = Object.defineProperty, zf = Object.getOwnPropertySymbols, i3 = Object.prototype.hasOwnProperty, l3 = Object.prototype.propertyIsEnumerable, Tf = (e, n, r) => n in e ? a3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, s3 = (e, n) => {
  for (var r in n || (n = {})) i3.call(n, r) && Tf(e, r, n[r]);
  if (zf)
    for (var r of zf(n)) l3.call(n, r) && Tf(e, r, n[r]);
  return e;
}, Mr = Ho(), { n: Ef } = oe("year-picker"), { n: Hl } = oe("date-picker");
function u3(e, n) {
  const r = x("var-button");
  return b(), k("div", null, [j(bn, { name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex` }, {
    default: ue(() => [(b(), k("ul", {
      ref: "panel",
      key: e.panelKey,
      class: m(e.n())
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
var Hg = te({
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
      const { panelProps: { min: p, max: h } } = e, g = h ? Mr(v).isSameOrBefore(Mr(h), Qe.Year) : !0, w = p ? Mr(v).isSameOrAfter(Mr(p), Qe.Year) : !0;
      return g && w;
    }
    function s(v) {
      const { selection: { selectedYear: p, selectedYears: h, selectedRangeYears: g }, panelProps: { multiple: w, range: $ } } = e;
      if ($) {
        if (!g.length) return !1;
        if (g.length === 1) return Mr(v).isSame(Mr(g[0]), Qe.Year);
        const y = Mr(v).isSameOrBefore(Mr(g[1]), Qe.Year), O = Mr(v).isSameOrAfter(Mr(g[0]), Qe.Year);
        return y && O;
      }
      return w ? h.includes(v) : p === v;
    }
    function u(v) {
      const { panelProps: { allowedDates: p, color: h, type: g } } = e, w = s(v), $ = !l(v) || (g === Ve.Year && p ? !p(v) : !1);
      return {
        outline: !1,
        text: $ || !w,
        color: w && !$ ? h : "",
        textColor: "",
        [`${Hl()}-color-cover`]: !w && !$,
        class: Ef("button"),
        disabled: $
      };
    }
    function d(v) {
      n("choose-year", v);
    }
    function c() {
      const v = r.value.querySelector(".var-button--primary"), p = r.value.closest(`.${Hl("body")}`);
      if (!v || !p) return;
      const h = p.getBoundingClientRect(), g = v.getBoundingClientRect();
      p.scrollTop += g.top - h.top - (p.clientHeight - g.height) / 2;
    }
    function f(v) {
      const p = v === Wr.Prev;
      p && i.value[0] <= 0 || (t.value = p, o.value += p ? -1 : 1, a.value += p ? -1 : 1);
    }
    return En(c), me(() => e.preview, () => {
      a.value = 0;
    }), {
      n: Ef,
      buttonProps: u,
      panel: r,
      yearList: i,
      reverse: t,
      panelKey: o,
      nDate: Hl,
      selectYear: d,
      shiftPreview: f
    };
  }
});
Hg.render = u3;
var d3 = Hg, { name: c3, n: f3, classes: v3 } = oe("date-picker"), yn = Ho();
function p3(e, n) {
  const r = x("panel-header"), t = x("year-picker-panel"), o = x("month-picker-panel"), a = x("day-picker-panel");
  return b(), k("div", {
    class: m(e.classes(e.n(), e.formatElevation(e.elevation, 2), [!e.showTitle, e.n("--no-title")])),
    onPointerdownCapture: n[4] || (n[4] = Rn(() => {
    }, ["prevent"]))
  }, [
    e.showTitle ? (b(), k("div", {
      key: 0,
      class: m(e.n("title")),
      style: J({ background: e.titleColor || e.color })
    }, [L("div", { class: m(e.n("title-select")) }, [L("div", { class: m(e.n("title-hint")) }, ve(e.titleHint), 3)], 2), L("div", {
      class: m(e.classes(e.n("title-date"), [!e.showYearPanel || e.type === e.DatePickerTypes.Year, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
      onClick: n[0] || (n[0] = (i) => e.switchPanel(e.DatePickerTypes.Date))
    }, [j(bn, { name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey` }, {
      default: ue(() => [e.type === e.DatePickerTypes.Year ? (b(), k("div", { key: `${e.selectionState.selectedYear}` }, [e.range ? U(e.$slots, "range", {
        key: 0,
        choose: e.selectionState.selectedRangeYears
      }, () => [Le(ve(e.yearTitle), 1)]) : e.multiple ? U(e.$slots, "multiple", {
        key: 1,
        choose: e.selectionState.selectedYears
      }, () => [Le(ve(e.yearTitle), 1)]) : U(e.$slots, "year", {
        key: 2,
        year: e.selectionState.selectedYear
      }, () => [Le(ve(e.yearTitle), 1)])])) : e.type === e.DatePickerTypes.Month ? (b(), k("div", { key: `${e.selectionState.selectedYear}${e.selectionState.selectedMonth}` }, [e.range ? U(e.$slots, "range", {
        key: 0,
        choose: e.selectionState.selectedRangeMonths
      }, () => [Le(ve(e.monthTitle), 1)]) : e.multiple ? U(e.$slots, "multiple", {
        key: 1,
        choose: e.selectionState.selectedMonths
      }, () => [Le(ve(e.monthTitle), 1)]) : U(e.$slots, "month", {
        key: 2,
        month: e.selectionState.selectedMonth,
        year: e.selectionState.selectedYear
      }, () => [Le(ve(e.monthTitle), 1)])])) : (b(), k("div", { key: `${e.selectionState.selectedYear}${e.selectionState.selectedMonth}${e.selectionState.selectedDay}` }, [e.range ? U(e.$slots, "range", {
        key: 0,
        choose: e.formattedRangeDays
      }, () => [Le(ve(e.dateTitle), 1)]) : e.multiple ? U(e.$slots, "multiple", {
        key: 1,
        choose: e.selectionState.selectedDays
      }, () => [Le(ve(e.dateTitle), 1)]) : U(e.$slots, "date", yt(Xe({ key: 2 }, e.dateSlotProps)), () => [Le(ve(e.dateTitle), 1)])]))]),
      _: 3
    }, 8, ["name"])], 2)], 6)) : q("v-if", !0),
    L("div", { class: m(e.n("body")) }, [e.panelType ? (b(), we(r, {
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
    ])) : q("v-if", !0), L("div", { class: m(e.n("panel")) }, [j(bn, { name: `${e.n()}-panel-fade` }, {
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
      class: m(e.n("actions"))
    }, [U(e.$slots, "actions")], 2)) : q("v-if", !0)
  ], 34);
}
var jg = te({
  name: c3,
  components: {
    MonthPickerPanel: n3,
    YearPickerPanel: d3,
    DayPickerPanel: Z4,
    PanelHeader: o3
  },
  props: Ug,
  setup(e) {
    const { t: n } = kr(), r = yn().format(Mn.Day), [t, o] = r.split("-"), a = io.find((_) => _ === o), i = P(!1), l = P(!1), s = P(!0), u = C(() => e.range && !s.value), d = P(a), c = P(t), f = P(!1), v = P(null), p = P(null), h = P(null), g = $n({
      selectedMonth: void 0,
      selectedYear: void 0,
      selectedDay: void 0,
      selectedYears: [],
      selectedMonths: [],
      selectedDays: [],
      selectedRangeYears: [],
      selectedRangeMonths: [],
      selectedRangeDays: []
    }), w = C(() => ({
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
    })), y = C(() => {
      if (e.type === Ve.Year || i.value) return Ve.Year;
      if (e.type === Ve.Month || l.value) return Ve.Month;
      if (e.type === Ve.Date) return Ve.Date;
    }), O = C(() => y.value === Ve.Date ? Qe.Day : y.value), T = C(() => y.value === Ve.Year ? { previewYear: c.value } : $.value), z = C(() => {
      var _;
      return (_ = e.hint) != null ? _ : Q();
    }), R = C(() => {
      var _;
      const { multiple: he, range: se } = e;
      return se ? g.selectedRangeYears.length ? g.selectedRangeYears.join(" ~ ") : "" : he ? `${g.selectedYears.length}${(n || gn)("datePickerSelected")}` : (_ = g.selectedYear) != null ? _ : "";
    }), H = C(() => {
      var _, he;
      const { multiple: se, range: ke } = e;
      if (ke) return g.selectedRangeMonths.length ? g.selectedRangeMonths.join(" ~ ") : "";
      let je = "";
      return g.selectedMonth && (je = (he = (_ = (n || gn)("datePickerMonthDict")) == null ? void 0 : _[g.selectedMonth].name) != null ? he : ""), se ? `${g.selectedMonths.length}${(n || gn)("datePickerSelected")}` : je;
    }), M = C(() => {
      var _, he, se, ke;
      const { multiple: je, range: cn } = e;
      if (cn) {
        const Tt = g.selectedRangeDays.map((Ml) => yn(Ml).format(Mn.DayPadded));
        return Tt.length ? Tt.join(" ~ ") : "";
      }
      if (je) return `${g.selectedDays.length}${(n || gn)("datePickerSelected")}`;
      if (!g.selectedYear || !g.selectedMonth || !g.selectedDay) return "";
      const Vn = yn(`${g.selectedYear}-${g.selectedMonth}-${g.selectedDay}`).day(), ar = lo.find((Tt) => Tt === `${Vn}`), Jr = (he = (_ = (n || gn)("datePickerWeekDict")) == null ? void 0 : _[ar].name) != null ? he : "", Bl = (ke = (se = (n || gn)("datePickerMonthDict")) == null ? void 0 : se[g.selectedMonth].name) != null ? ke : "", Dl = Zr(g.selectedDay, 2, "0");
      return (n || gn)("lang") === "zh-CN" ? `${g.selectedMonth}-${Dl} ${Jr.slice(0, 3)}` : `${Jr.slice(0, 3)}, ${Bl.slice(0, 3)} ${g.selectedDay}`;
    }), D = C(() => {
      var _, he;
      const se = yn(`${g.selectedYear}-${g.selectedMonth}-${g.selectedDay}`).day(), ke = g.selectedDay ? Zr(g.selectedDay, 2, "0") : "";
      return {
        week: `${se}`,
        year: (_ = g.selectedYear) != null ? _ : "",
        month: (he = g.selectedMonth) != null ? he : "",
        date: ke
      };
    }), E = C(() => g.selectedRangeDays.map((_) => yn(_).format(Mn.DayPadded))), B = C(() => g.selectedYear === c.value), N = C(() => g.selectedMonth === d.value);
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
      return y.value === Ve.Year ? v : y.value === Ve.Month ? p : h;
    }
    function ae(_) {
      X().value.shiftPreview(_), y.value === Ve.Date ? re(Qe.Month, _) : y.value === Ve.Month && re(Qe.Year, _);
    }
    function Te(_) {
      h.value.shiftYearPreview(_), re(Qe.Year, _);
    }
    function ce(_) {
      return _ === Ve.Year ? Mn.Year : _ === Ve.Month ? Mn.Month : Mn.Day;
    }
    function G(_) {
      return _ === Ve.Year ? g.selectedRangeYears : _ === Ve.Month ? g.selectedRangeMonths : g.selectedRangeDays;
    }
    function ne(_, he) {
      if (_ === Ve.Year) {
        g.selectedRangeYears = he;
        return;
      }
      if (_ === Ve.Month) {
        g.selectedRangeMonths = he;
        return;
      }
      g.selectedRangeDays = he;
    }
    function pe(_) {
      return _ === Ve.Year ? g.selectedYears : _ === Ve.Month ? g.selectedMonths : g.selectedDays;
    }
    function Oe(_, he) {
      if (_ === Ve.Year) {
        g.selectedYears = he;
        return;
      }
      if (_ === Ve.Month) {
        g.selectedMonths = he;
        return;
      }
      g.selectedDays = he;
    }
    function Y(_) {
      S(e["onUpdate:modelValue"], _), S(e.onChange, _);
    }
    function ie() {
      return e.type === Ve.Date && g.selectedDay ? Z(g.selectedDay) : void 0;
    }
    function Ee() {
      S(e.onPreview, Z(c.value), Z(d.value), ie());
    }
    function He(_, he) {
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
        He(_, he);
        return;
      }
      if (e.multiple) {
        nn(_, he);
        return;
      }
      Dn(), Y(_);
    }
    function en(_, he, se = !0) {
      const { min: ke, max: je, allowedDates: cn } = e, Vn = je ? yn(_).isSameOrBefore(yn(je), he) : !0, ar = ke ? yn(_).isSameOrAfter(yn(ke), he) : !0, Jr = se && cn ? cn(_) : !0;
      return Vn && ar && Jr;
    }
    function on(_, he) {
      return !g.selectedYear || !g.selectedMonth ? !1 : B.value ? _ === Qe.Year ? he < Z(g.selectedYear) : _ === Qe.Month ? he < g.selectedMonth : N.value ? he < Z(g.selectedDay) : g.selectedMonth > d.value : g.selectedYear > c.value;
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
        g.selectedMonth = void 0, g.selectedYear = void 0, g.selectedDay = void 0, he && Qn(Ge());
        return;
      }
      const se = yn(_).format(Mn.Day);
      if (Pe(se)) return;
      const [ke, je, cn] = se.split("-");
      g.selectedMonth = io.find((Vn) => Vn === je), g.selectedYear = ke, g.selectedDay = cn, he && Qn(se);
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
      monthTitle: H,
      dateTitle: M,
      yearTitle: R,
      titleHint: z,
      panelType: y,
      headerType: O,
      headerPreview: T,
      selectionState: g,
      previewState: $,
      panelProps: w,
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
jg.render = p3;
var Mi = jg;
de(Mi);
fe(Mi, Ug);
var iN = Mi, Ta = Mi, m3 = Object.defineProperty, If = Object.getOwnPropertySymbols, g3 = Object.prototype.hasOwnProperty, h3 = Object.prototype.propertyIsEnumerable, Bf = (e, n, r) => n in e ? m3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, b3 = (e, n) => {
  for (var r in n || (n = {})) g3.call(n, r) && Bf(e, r, n[r]);
  if (If)
    for (var r of If(n)) h3.call(n, r) && Bf(e, r, n[r]);
  return e;
}, Yg = b3({
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
])), { name: y3, n: Df, classes: w3 } = oe("date-input-time-select"), k3 = ["aria-disabled", "onClick"];
function $3(e, n) {
  const r = x("var-menu-select");
  return b(), k("div", {
    ref: "root",
    class: m(e.n())
  }, [(b(!0), k(Be, null, Ye(e.segments, (t, o) => (b(), k(Be, { key: t.key }, [o > 0 ? (b(), k("span", {
    key: 0,
    class: m(e.n("separator"))
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
      class: m(e.classes(e.n("box"), [e.openKey === t.key, e.n("box--active")], [e.disabled || e.readonly, e.n("box--disabled")])),
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
var Kg = te({
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
        label: Zr(`${v}`, 2, "0"),
        options: so(p, (g) => ({
          label: Zr(`${g}`, 2, "0"),
          value: g,
          disabled: h ? !h(g) : !1
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
      return f ? Array.from(document.querySelectorAll(`.${Df("popover")}`)).some((v) => v.contains(f)) : !1;
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
      n: Df,
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
Kg.render = $3;
var C3 = Kg, Ar = {
  Year: "YYYY",
  Month: "YYYY-MM",
  Date: "YYYY-MM-DD",
  Datetime: "YYYY-MM-DD HH:mm:ss",
  DatetimeMinute: "YYYY-MM-DD HH:mm"
}, Nr = Ho(), { name: S3, n: ea, classes: P3 } = oe("date-input");
function O3(e, n) {
  const r = x("var-icon"), t = x("var-input"), o = x("time-select"), a = x("var-date-picker"), i = x("var-menu"), l = x("var-form-details");
  return b(), k("div", { class: m(e.classes(e.n(), e.n("$--box"))) }, [j(i, {
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
      class: m(e.n("picker")),
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
      fn: ue(() => [L("div", { class: m(e.n("datetime")) }, [e.range ? (b(), k("div", {
        key: 0,
        class: m(e.classes(e.n("datetime-row"), e.n("datetime-row--range")))
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
          class: m(e.n("datetime-arrow")),
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
        class: m(e.n("datetime-row"))
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
        class: m(e.n("clear-icon-container")),
        onMousedown: n[0] || (n[0] = Rn(() => {
        }, ["stop"])),
        onClick: n[1] || (n[1] = Rn(() => {
        }, ["stop"]))
      }, [U(e.$slots, "clear-icon", { clear: s }, () => [j(r, {
        class: m(e.n("clear-icon")),
        name: "close-circle",
        onClick: s
      }, null, 8, ["class", "onClick"])])], 34)]),
      "append-icon": ue(() => [U(e.$slots, "append-icon", {}, () => [L("span", { class: m(e.n("calendar-icon-container")) }, [j(r, {
        class: m(e.n("calendar-icon")),
        name: "calendar-month-outline"
      }, null, 8, ["class"])], 2)])]),
      _: 2
    }, [e.$slots["prepend-icon"] ? {
      name: "prepend-icon",
      fn: ue(() => [U(e.$slots, "prepend-icon")]),
      key: "0"
    } : void 0, e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: ue(() => [U(e.$slots, "extra-message")]),
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
    fn: ue(() => [U(e.$slots, "extra-message")]),
    key: "0"
  } : void 0]), 1032, ["error-message"])], 2);
}
var Wg = te({
  name: S3,
  components: {
    VarIcon: Je,
    VarInput: Lt,
    VarMenu: jt,
    VarFormDetails: Un,
    VarDatePicker: Ta,
    TimeSelect: C3
  },
  props: Yg,
  setup(e) {
    const n = P(null), r = P(null), t = P(""), o = P(), a = P(!1), i = P(!1), { bindForm: l, form: s } = Kn(), { errorMessage: u, validateWithTrigger: d, validate: c, resetValidation: f } = Jn(), v = C(() => {
      var W;
      return (W = s?.disabled.value) != null ? W : !1;
    }), p = C(() => {
      var W;
      return (W = s?.readonly.value) != null ? W : !1;
    }), h = C(() => e.disabled || v.value), g = C(() => e.readonly || p.value), w = C(() => e.type === "datetime"), $ = C(() => e.multiple && !w.value), y = C(() => $.value || e.range), O = C(() => w.value ? "date" : e.type), T = C(() => ae(e.min)), z = C(() => ae(e.max)), R = C(() => {
      var W;
      return !!((W = r.value) != null && W.rangeSelecting);
    }), H = C(() => w.value && e.range && (R.value || Pe().length < 2)), M = C(() => e.min ? Nr(e.min) : void 0), D = C(() => e.max ? Nr(e.max) : void 0), E = C(() => Te(Pe()[0])), B = C(() => {
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
      return w.value ? Ar.Date : F();
    }
    function X() {
      return e.format || F();
    }
    function ae(W) {
      return !W || !w.value ? W : Nr(W).format(Ar.Date);
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
        const Qr = ge(), Et = ((Br = W()) != null ? Br : Nr()).hour(an === "hour" ? Ln : Qr.hour).minute(an === "minute" ? Ln : Qr.minute).second(an === "second" ? Ln : Qr.second), qo = M.value, eo = D.value;
        if (qo && Et.endOf(an).isBefore(qo) || eo && Et.startOf(an).isAfter(eo)) return !1;
        const Cr = Ie();
        return an === "hour" ? Cr?.hours ? Cr.hours(Ln) : !0 : an === "minute" ? Cr?.minutes ? Cr.minutes(Ln, Qr.hour) : !0 : Cr?.seconds ? Cr.seconds(Ln, Qr.minute, Qr.hour) : !0;
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
    function He(W, ge, Ae, Ie) {
      var tn, an;
      const Ln = W.format(Ar.Date), Br = (an = (tn = e.allowedTimes) == null ? void 0 : tn.call(e, Ln, Ae)) != null ? an : {}, Qr = ie(ge.hour, 24, Ie === "hour" || Ie === "minute" || Ie === "second");
      for (const Et of Qr) {
        if (Br.hours && !Br.hours(Et)) continue;
        const qo = ie(ge.minute, 60, Ie === "minute" || Ie === "second");
        for (const eo of qo) {
          if (Br.minutes && !Br.minutes(eo, Et)) continue;
          const Cr = e.useSeconds ? ie(ge.second, 60, Ie === "second") : [0];
          for (const p0 of Cr) {
            const bd = W.hour(Et).minute(eo).second(p0).millisecond(0);
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
      if (h.value || g.value) return;
      const [Ae] = Pe(), Ie = Ae ?? Nr(), tn = ge ? He(Ie, W, void 0, ge) : Y(Ie, W);
      tn && qe([tn]);
    }
    function on(W, ge, Ae) {
      if (h.value || g.value) return;
      const Ie = Pe();
      if (Ie.length < 2) return;
      const tn = [...Ie], an = W === 0 ? "start" : "end", Ln = Ae ? He(Ie[W], ge, an, Ae) : Y(Ie[W], ge);
      Ln && (tn[W] = Ln, qe(tn));
    }
    function be(W, ge) {
      const Ae = Nr(W, ge, !0);
      return Ae.isValid() ? Ae : void 0;
    }
    function ee(W, ge) {
      var Ae;
      if (!w.value || !e.allowedTimes) return !0;
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
      if (y.value) return (We(e.modelValue) ? e.modelValue : []).map(re).filter(It);
      const W = We(e.modelValue) ? void 0 : re(e.modelValue);
      return W ? [W] : [];
    }
    function Ge(W) {
      t.value = W.map((ge) => ge.format(X())).join(e.range ? e.rangeSeparator : e.separator);
    }
    function rn() {
      const W = Pe();
      if (y.value) o.value = W.map((ge) => ge.format(Q()));
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
      h.value || g.value || (a.value = !0, Ne(() => {
        var W;
        return (W = r.value) == null ? void 0 : W.syncModelValue();
      }), Dn("onClick"));
    }
    function Qn(W) {
      h.value || g.value || W.key !== "Enter" || (Ze(W), a.value = !0, Ne(() => {
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
      if (!(h.value || g.value) && W !== t.value) {
        if (t.value = W, W === "") {
          Jr(), mn(ar()), Dn("onInput");
          return;
        }
        y.value ? sn() : Re(W), Dn("onInput");
      }
    }
    function he() {
      h.value || g.value || Ge(Pe());
    }
    function se(W) {
      if (W.length < 2) return;
      const ge = B.value, Ae = W.map((Ie, tn) => {
        var an;
        return He(Ie, (an = ge[tn]) != null ? an : Te(), tn === 0 ? "start" : "end");
      });
      Ae.every(It) && qe(Ae.filter(It)) || rn();
    }
    function ke(W) {
      const ge = W.map((Ie) => Nr(Ie, Q(), !0)).filter((Ie) => Ie.isValid());
      if (w.value && e.range) {
        se(ge);
        return;
      }
      const Ae = ge.map(ye);
      t.value = ge.map((Ie) => Ie.format(X())).join(e.range ? e.rangeSeparator : e.separator), mn(Ae);
    }
    function je(W) {
      const ge = He(W, E.value);
      ge && qe([ge]) || rn();
    }
    function cn(W) {
      const ge = Nr(W, Q(), !0);
      if (ge.isValid()) {
        if (w.value) {
          je(ge);
          return;
        }
        t.value = ge.format(X()), mn(ye(ge)), y.value || (a.value = !1);
      }
    }
    function Vn(W) {
      if (!(h.value || g.value)) {
        if (o.value = W, We(W)) {
          ke(W);
          return;
        }
        cn(W);
      }
    }
    function ar() {
      return y.value ? [] : void 0;
    }
    function Jr() {
      t.value = "", o.value = y.value ? [] : void 0;
    }
    function Bl() {
      if (h.value || g.value || !e.clearable) return;
      Jr(), a.value = !1;
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
      Jr(), a.value = !1, !Td(e.modelValue, W) && S(e["onUpdate:modelValue"], W), f();
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
      formReadonly: p,
      errorMessage: u,
      menuPopoverClass: N,
      isDatetime: w,
      isMultiple: $,
      pickerType: O,
      pickerMin: T,
      pickerMax: z,
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
Wg.render = O3;
var Ai = Wg;
de(Ai);
fe(Ai, Yg);
var lN = Ai, Vs = Ai, z3 = Object.defineProperty, Mf = Object.getOwnPropertySymbols, T3 = Object.prototype.hasOwnProperty, E3 = Object.prototype.propertyIsEnumerable, Af = (e, n, r) => n in e ? z3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, I3 = (e, n) => {
  for (var r in n || (n = {})) T3.call(n, r) && Af(e, r, n[r]);
  if (Mf)
    for (var r of Mf(n)) E3.call(n, r) && Af(e, r, n[r]);
  return e;
}, qg = I3({
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
])), B3 = Object.defineProperty, D3 = Object.defineProperties, M3 = Object.getOwnPropertyDescriptors, Nf = Object.getOwnPropertySymbols, A3 = Object.prototype.hasOwnProperty, N3 = Object.prototype.propertyIsEnumerable, Rf = (e, n, r) => n in e ? B3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ls = (e, n) => {
  for (var r in n || (n = {})) A3.call(n, r) && Rf(e, r, n[r]);
  if (Nf)
    for (var r of Nf(n)) N3.call(n, r) && Rf(e, r, n[r]);
  return e;
}, Vf = (e, n) => D3(e, M3(n)), { name: R3, n: V3, classes: L3 } = oe("dialog");
function F3(e, n) {
  const r = x("var-button"), t = x("var-popup");
  return b(), we(t, {
    class: m(e.n("popup")),
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
      L("div", { class: m(e.n("title")) }, [U(e.$slots, "title", {}, () => {
        var o;
        return [Le(ve((o = e.title) != null ? o : (e.pt ? e.pt : e.t)("dialogTitle")), 1)];
      })], 2),
      L("div", {
        class: m(e.n("message")),
        style: J({ textAlign: e.messageAlign })
      }, [U(e.$slots, "default", {}, () => [Le(ve(e.message), 1)])], 6),
      U(e.$slots, "actions", {
        slotClass: e.n("actions"),
        cancel: e.cancel,
        confirm: e.confirm
      }, () => [L("div", { class: m(e.n("actions")) }, [e.cancelButton ? (b(), we(r, Xe({ key: 0 }, e.cancelButtonNormalizedProps, {
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
var Xg = te({
  name: R3,
  components: {
    VarPopup: ut,
    VarButton: tr
  },
  inheritAttrs: !1,
  props: qg,
  setup(e) {
    const { t: n } = kr(), r = P(!1), t = P(!1), o = wn(e, "confirmButtonLoading"), a = wn(e, "cancelButtonLoading"), i = wn(e, "confirmButtonDisabled"), l = wn(e, "cancelButtonDisabled"), s = C(() => {
      var g, w, $, y, O, T;
      return Vf(Ls({ text: !0 }, e.confirmButtonProps), {
        textColor: (w = e.confirmButtonTextColor) != null ? w : (g = e.confirmButtonProps) == null ? void 0 : g.textColor,
        color: (y = e.confirmButtonColor) != null ? y : ($ = e.confirmButtonProps) == null ? void 0 : $.color,
        loading: o.value || ((O = e.confirmButtonProps) == null ? void 0 : O.loading),
        disabled: i.value || ((T = e.confirmButtonProps) == null ? void 0 : T.disabled)
      });
    }), u = C(() => {
      var g, w, $, y, O, T;
      return Vf(Ls({ text: !0 }, e.cancelButtonProps), {
        textColor: (w = e.cancelButtonTextColor) != null ? w : (g = e.cancelButtonProps) == null ? void 0 : g.textColor,
        color: (y = e.cancelButtonColor) != null ? y : ($ = e.cancelButtonProps) == null ? void 0 : $.color,
        loading: a.value || ((O = e.cancelButtonProps) == null ? void 0 : O.loading),
        disabled: l.value || ((T = e.cancelButtonProps) == null ? void 0 : T.disabled)
      });
    }), d = {
      confirmButtonLoading: o,
      cancelButtonLoading: a,
      confirmButtonDisabled: i,
      cancelButtonDisabled: l
    };
    me(() => e.show, (g) => {
      r.value = g;
    }, { immediate: !0 }), me(() => e.closeOnClickOverlay, (g) => {
      if (e.onBeforeClose != null) {
        t.value = !1;
        return;
      }
      t.value = g;
    }, { immediate: !0 });
    function c() {
      return S(e["onUpdate:show"], !1);
    }
    function f() {
      const { closeOnClickOverlay: g, onClickOverlay: w, onBeforeClose: $ } = e;
      if (S(w), !!g) {
        if ($ != null) {
          S($, "close", c, d);
          return;
        }
        S(e["onUpdate:show"], !1);
      }
    }
    function v() {
      const { onBeforeClose: g, onConfirm: w } = e;
      if (S(w), g != null) {
        S(g, "confirm", c, d);
        return;
      }
      S(e["onUpdate:show"], !1);
    }
    function p() {
      const { onBeforeClose: g, onCancel: w } = e;
      if (S(w), g != null) {
        S(g, "cancel", c, d);
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
Xg.render = F3;
var Yo = Xg, U3 = Object.defineProperty, H3 = Object.defineProperties, j3 = Object.getOwnPropertyDescriptors, Lf = Object.getOwnPropertySymbols, Y3 = Object.prototype.hasOwnProperty, K3 = Object.prototype.propertyIsEnumerable, Ff = (e, n, r) => n in e ? U3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, jl = (e, n) => {
  for (var r in n || (n = {})) Y3.call(n, r) && Ff(e, r, n[r]);
  if (Lf)
    for (var r of Lf(n)) K3.call(n, r) && Ff(e, r, n[r]);
  return e;
}, W3 = (e, n) => H3(e, j3(n)), tt, Ea = {};
function q3(e = {}) {
  return Sn(e) ? W3(jl({}, Ea), { message: e }) : jl(jl({}, Ea), e);
}
function ht(e) {
  return Er() ? new Promise((n) => {
    ht.close();
    const r = $n(q3(e));
    r.teleport = "body", tt = r;
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
        S(r.onClosed), t(), tt === r && (tt = null);
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
de(Yo);
de(Yo, ht);
fe(ht, qg);
var sN = Yo, Fs = ht, Gg = {
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
    class: m(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.withPresetInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
    style: J(e.style),
    role: "separator"
  }, [e.vertical ? q("v-if", !0) : U(e.$slots, "default", { key: 0 }, () => [e.description ? (b(), k("span", {
    key: 0,
    class: m(e.n("text"))
  }, ve(e.description), 3)) : q("v-if", !0)])], 6);
}
var Zg = te({
  name: X3,
  props: Gg,
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
Zg.render = J3;
var Ni = Zg;
de(Ni);
fe(Ni, Gg);
var uN = Ni, Us = Ni, Jg = {
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
}, Q3 = Object.defineProperty, x3 = Object.defineProperties, _3 = Object.getOwnPropertyDescriptors, Uf = Object.getOwnPropertySymbols, eO = Object.prototype.hasOwnProperty, nO = Object.prototype.propertyIsEnumerable, Hf = (e, n, r) => n in e ? Q3(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, jf = (e, n) => {
  for (var r in n || (n = {})) eO.call(n, r) && Hf(e, r, n[r]);
  if (Uf)
    for (var r of Uf(n)) nO.call(n, r) && Hf(e, r, n[r]);
  return e;
}, Yf = (e, n) => x3(e, _3(n)), { name: rO, n: tO, classes: oO } = oe("drag");
function aO(e, n) {
  return b(), we(Ur, {
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
  }), [U(e.$slots, "default")], 16)], 8, ["to", "disabled"]);
}
var Qg = te({
  name: rO,
  inheritAttrs: !1,
  props: Jg,
  setup(e, { attrs: n }) {
    const r = P(null), t = P(0), o = P(0), a = P(!1), i = P(!1), { touching: l, dragging: s, moveX: u, moveY: d, startTouch: c, moveTouch: f, endTouch: v, resetTouch: p } = Zt(), { disabled: h } = zt(), g = $n({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    me(() => e.boundary, D), wr(B), En(() => {
      D(), B();
    });
    function w(A) {
      e.disabled || (c(A), T());
    }
    function $(A) {
      !l.value || e.disabled || (f(A), Ze(A), i.value = !1, a.value = !0, e.direction.includes("x") && (t.value += u.value), e.direction.includes("y") && (o.value += d.value), M());
    }
    function y() {
      e.disabled || (v(), i.value = !0, H());
    }
    function O(A) {
      s.value || S(e.onClick, A);
    }
    function T() {
      const { left: A, top: I } = z();
      t.value = A, o.value = I;
    }
    function z() {
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
      const A = z(), I = g.left, F = A.windowWidth - g.right - A.width, Q = g.top, X = A.windowHeight - g.bottom - A.height;
      return {
        minX: I,
        minY: Q,
        maxX: I < F ? F : I,
        maxY: Q < X ? X : Q
      };
    }
    function H() {
      if (e.attraction == null) return;
      const { halfWidth: A, halfHeight: I, top: F, bottom: Q, left: X, right: ae } = z(), { minX: Te, minY: ce, maxX: G, maxY: ne } = R(), pe = X + A - g.left, Oe = ae + A - g.right, Y = F + I - g.top, ie = Q + I - g.bottom, Ee = pe <= Oe, He = Y <= ie;
      e.attraction.includes("x") && (t.value = Ee ? Te : G), e.attraction.includes("y") && (o.value = He ? ce : ne);
    }
    function M() {
      const { minX: A, minY: I, maxX: F, maxY: Q } = R();
      t.value = hn(t.value, A, F), o.value = hn(o.value, I, Q);
    }
    function D() {
      const { top: A = 0, bottom: I = 0, left: F = 0, right: Q = 0 } = e.boundary;
      g.top = fn(A), g.bottom = fn(I), g.left = fn(F), g.right = fn(Q);
    }
    function E() {
      var A;
      const I = (A = n.style) != null ? A : {};
      return Yf(jf({}, n), { style: Yf(jf({}, I), {
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
      handleTouchstart: w,
      handleTouchmove: $,
      handleTouchend: y,
      handleClick: O,
      resize: B,
      reset: N
    };
  }
});
Qg.render = aO;
var Ri = Qg;
de(Ri);
fe(Ri, Jg);
var dN = Ri, Ia = Ri, xg = {
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
    class: m(e.classes(e.n(), e.n("$--box")))
  }, [U(e.$slots, "default"), (b(), we(Ur, {
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
      class: m(e.classes(e.n("tooltip"), e.n("$--box"))),
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
      class: m(e.classes(e.n("content-container"), e.n(`--${e.type}`))),
      role: "tooltip"
    }, [U(e.$slots, "content", {}, () => [Le(ve(e.content), 1)])], 6)], 38), [[yr, e.show]])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]))], 2);
}
var _g = te({
  name: iO,
  props: xg,
  setup(e) {
    const { disabled: n } = zt(), { popover: r, host: t, referenceSize: o, show: a, zIndex: i, handlePopoverMouseenter: l, handlePopoverMouseleave: s, handlePopoverClose: u, handleClosed: d, open: c, close: f, resize: v, setReference: p } = em(e);
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
_g.render = uO;
var Vi = _g;
de(Vi);
fe(Vi, xg);
var cN = Vi, Ba = Vi, eh = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": V()
}, dO = Object.defineProperty, Kf = Object.getOwnPropertySymbols, cO = Object.prototype.hasOwnProperty, fO = Object.prototype.propertyIsEnumerable, Wf = (e, n, r) => n in e ? dO(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, vO = (e, n) => {
  for (var r in n || (n = {})) cO.call(n, r) && Wf(e, r, n[r]);
  if (Kf)
    for (var r of Kf(n)) fO.call(n, r) && Wf(e, r, n[r]);
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
    content: ue(() => [U(e.$slots, "tooltip-content", {}, () => {
      var t;
      return [(t = e.tooltipProps) != null && t.content ? (b(), k("span", hO, ve(e.tooltipProps.content), 1)) : U(e.$slots, "default", { key: 1 })];
    })]),
    default: ue(() => [L("span", null, [U(e.$slots, "default")])]),
    _: 3
  }, 16, [
    "class",
    "style",
    "onClick"
  ]);
}
var nh = te({
  name: pO,
  components: { VarTooltip: Ba },
  props: eh,
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
nh.render = bO;
var Li = nh;
de(Li);
fe(Li, eh);
var fN = Li, Hs = Li, rh = {
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
  props: rh,
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
    }), Qv(o, "click", s);
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
fe(Fi, rh);
var vN = Fi, js = Fi, th = {
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
}, { name: wO, n: kO, classes: $O } = oe("floating-panel"), qf = 100, Xf = 0.2;
function CO(e, n) {
  return b(), we(Ur, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [L("div", {
    class: m(e.classes(e.n(), [e.safeArea, e.n("--safe-area")], e.formatElevation(e.elevation, 3))),
    style: J({
      height: `${e.toSizeUnit(e.maxAnchor)}`,
      transform: `translateY(calc(100% - ${e.toSizeUnit(e.visibleHeight)}))`,
      transition: e.touching ? "none" : `transform ${e.toNumber(e.duration)}ms var(--floating-panel-transition-timing-function), background-color 0.25s`
    }),
    onTouchstart: n[0] || (n[0] = (...r) => e.handleTouchstart && e.handleTouchstart(...r)),
    onTouchmove: n[1] || (n[1] = (...r) => e.handleTouchmove && e.handleTouchmove(...r)),
    onTouchend: n[2] || (n[2] = (...r) => e.handleTouchend && e.handleTouchend(...r)),
    onTouchcancel: n[3] || (n[3] = (...r) => e.handleTouchend && e.handleTouchend(...r))
  }, [U(e.$slots, "header", {}, () => [L("div", { class: m(e.n("header")) }, [L("div", { class: m(e.n("header-toolbar")) }, null, 2)], 2)]), L("div", {
    ref: "contentRef",
    class: m(e.n("content"))
  }, [U(e.$slots, "default")], 2)], 38)], 8, ["to", "disabled"]);
}
var oh = te({
  name: wO,
  props: th,
  setup(e) {
    const n = P(0), r = P(null), { height: t } = W0(), o = C(() => t.value * 0.6), a = wn(e, "anchor", { defaultValue: qf }), i = C(() => {
      const M = [qf, o.value], { anchors: D } = e;
      return Or(D) ? M : D;
    }), l = C(() => Math.min(...i.value)), s = C(() => Math.max(...i.value)), { disabled: u } = zt(), { deltaY: d, touching: c, startTouch: f, moveTouch: v, endTouch: p, isReachTop: h, isReachBottom: g } = Zt();
    let w;
    Mo(() => c.value), me(() => a.value, $, { immediate: !0 }), me(() => i.value, () => {
      $(a.value);
    }, { immediate: !0 });
    function $(M) {
      z(M ?? l.value);
    }
    function y(M) {
      f(M), w = n.value;
    }
    function O(M) {
      var D;
      v(M);
      const E = M.target, B = r.value === E || ((D = r.value) == null ? void 0 : D.contains(E));
      if (!(B && !e.contentDraggable)) {
        if (B && e.contentDraggable && n.value >= s.value && !h(r.value)) {
          g(r.value) && Ze(M);
          return;
        }
        z(R(w - d.value)), Ze(M);
      }
    }
    function T() {
      p();
      const M = a.value;
      z(n.value), a.value = n.value, a.value !== M && S(e.onAnchorChange, n.value);
    }
    function z(M) {
      n.value = c.value ? M : H(M);
    }
    function R(M) {
      if (M > s.value) {
        const D = M - s.value;
        return s.value + D * Xf;
      }
      if (M < l.value) {
        const D = l.value - M;
        return l.value - D * Xf;
      }
      return M;
    }
    function H(M) {
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
      handleTouchstart: y,
      handleTouchmove: O,
      handleTouchend: T
    };
  }
});
oh.render = CO;
var Ui = oh;
de(Ui);
fe(Ui, th);
var pN = Ui, Ys = Ui, ah = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: V(),
  onReset: V()
}, Gf = (e, n, r) => new Promise((t, o) => {
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
    class: m(e.n()),
    onSubmit: n[0] || (n[0] = (...r) => e.handleSubmit && e.handleSubmit(...r)),
    onReset: n[1] || (n[1] = (...r) => e.handleReset && e.handleReset(...r))
  }, [U(e.$slots, "default")], 34);
}
var ih = te({
  name: SO,
  props: ah,
  setup(e) {
    const n = C(() => e.disabled), r = C(() => e.readonly), { formItems: t, bindFormItems: o } = M1();
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
      return Gf(this, null, function* () {
        Ze(c);
        const f = yield s();
        S(e.onSubmit, f);
      });
    }
    function l(c) {
      Ze(c), u(), S(e.onReset);
    }
    function s() {
      return Gf(this, null, function* () {
        var c;
        const f = yield Promise.all(t.map(({ validate: v }) => v()));
        if (e.scrollToError) {
          const [, v] = B0(f, (h) => h === !1, e.scrollToError), p = v > -1;
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
ih.render = OO;
var xt = ih;
xt.useValidation = Jn;
xt.useForm = Kn;
de(xt);
fe(xt, ah);
var mN = xt, Ks = xt, lh = {
  highlighter: Object,
  theme: String,
  tag: {
    type: String,
    default: "div"
  }
}, { name: zO, n: TO } = oe("highlighter-provider"), Hi = te({
  name: zO,
  props: lh,
  setup(e, { slots: n }) {
    return US({
      highlighter: C(() => e.highlighter),
      theme: C(() => e.theme)
    }), () => Fn(e.tag, { class: TO() }, S(n.default));
  }
});
de(Hi);
fe(Hi, lh);
var gN = Hi, Ws = Hi, sh = {
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
    class: m(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
    style: J({
      width: e.toSizeUnit(e.width),
      height: e.toSizeUnit(e.height),
      borderRadius: e.toSizeUnit(e.radius)
    })
  }, [
    e.lazy && !e.showErrorSlot ? Ke((b(), k("img", {
      key: 0,
      role: "img",
      class: m(e.n("image")),
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
      class: m(e.n("image")),
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
    e.showErrorSlot ? U(e.$slots, "error", { key: 2 }) : q("v-if", !0)
  ], 6)), [[o, { disabled: !e.ripple }]]);
}
var uh = te({
  name: EO,
  directives: {
    Lazy: wo,
    Ripple: vn
  },
  props: sh,
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
uh.render = AO;
var ji = uh;
de(ji);
fe(ji, sh);
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
}), NO = 250, RO = 20, { name: VO, n: Zf, classes: LO } = oe("swipe"), FO = ["onClick"];
function UO(e, n) {
  const r = x("var-icon"), t = x("var-button"), o = _e("hover");
  return Ke((b(), k("div", {
    ref: "swipeEl",
    class: m(e.n())
  }, [
    L("div", {
      class: m(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
      style: J({
        width: e.vertical ? void 0 : e.toSizeUnit(e.trackSize),
        height: e.vertical ? e.toSizeUnit(e.trackSize) : void 0,
        transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.trackTranslate)})`,
        transitionDuration: e.lockDuration ? "0ms" : `${e.toNumber(e.duration)}ms`
      }),
      onTouchstart: n[0] || (n[0] = (...a) => e.handleTouchstart && e.handleTouchstart(...a)),
      onTouchmove: n[1] || (n[1] = (...a) => e.handleTouchmove && e.handleTouchmove(...a)),
      onTouchend: n[2] || (n[2] = (...a) => e.handleTouchend && e.handleTouchend(...a))
    }, [U(e.$slots, "default")], 38),
    e.navigation ? U(e.$slots, "prev", yt(Xe({ key: 0 }, {
      index: e.index,
      length: e.length,
      prev: e.prev,
      next: e.next,
      to: e.to,
      hovering: e.hovering
    })), () => [j(bn, { name: e.getNavigationAnimation("prev") }, {
      default: ue(() => [e.navigation === !0 || e.hovering ? (b(), k("div", {
        key: 0,
        class: m(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
      }, [j(t, {
        "var-swipe-cover": "",
        disabled: !e.loop && e.index === 0,
        class: m(e.n("navigation-prev-button")),
        onClick: n[3] || (n[3] = (a) => e.prev())
      }, {
        default: ue(() => [j(r, {
          "var-swipe-cover": "",
          class: m(e.n("navigation-prev-button-icon")),
          name: e.vertical ? "chevron-up" : "chevron-left"
        }, null, 8, ["class", "name"])]),
        _: 1
      }, 8, ["disabled", "class"])], 2)) : q("v-if", !0)]),
      _: 1
    }, 8, ["name"])]) : q("v-if", !0),
    e.navigation ? U(e.$slots, "next", yt(Xe({ key: 1 }, {
      index: e.index,
      length: e.length,
      hovering: e.hovering,
      prev: e.prev,
      next: e.next,
      to: e.to
    })), () => [j(bn, { name: e.getNavigationAnimation("next") }, {
      default: ue(() => [e.navigation === !0 || e.hovering ? (b(), k("div", {
        key: 0,
        class: m(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
      }, [j(t, {
        "var-swipe-cover": "",
        class: m(e.n("navigation-next-button")),
        disabled: !e.loop && e.index === e.length - 1,
        onClick: n[4] || (n[4] = (a) => e.next())
      }, {
        default: ue(() => [j(r, {
          "var-swipe-cover": "",
          class: m(e.n("navigation-next-button-icon")),
          name: e.vertical ? "chevron-down" : "chevron-right"
        }, null, 8, ["class", "name"])]),
        _: 1
      }, 8, ["class", "disabled"])], 2)) : q("v-if", !0)]),
      _: 1
    }, 8, ["name"])]) : q("v-if", !0),
    U(e.$slots, "indicator", yt(Aa({
      index: e.index,
      length: e.length,
      hovering: e.hovering,
      prev: e.prev,
      next: e.next,
      to: e.to
    })), () => [e.indicator && e.length ? (b(), k("div", {
      key: 0,
      class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
    }, [(b(!0), k(Be, null, Ye(e.length, (a, i) => (b(), k("div", {
      key: a,
      class: m(e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
      style: J({ background: e.indicatorColor }),
      onClick: (l) => e.to(i)
    }, null, 14, FO))), 128))], 2)) : q("v-if", !0)])
  ], 2)), [[o, e.handleHovering]]);
}
var dh = te({
  name: VO,
  directives: { Hover: jn },
  components: {
    VarButton: tr,
    VarIcon: Je
  },
  props: ld,
  setup(e) {
    const n = P(null), r = P(0), t = C(() => e.vertical), o = P(0), a = P(0), i = P(!1), l = P(0), s = P(!1), { swipeItems: u, bindSwipeItems: d, length: c } = A1(), { swipeResizeListeners: f, bindSwipeResizeListeners: v } = N1(), { popup: p, bindPopup: h } = dp(), { deltaX: g, deltaY: w, moveX: $, moveY: y, offsetX: O, offsetY: T, touching: z, direction: R, startTime: H, startTouch: M, moveTouch: D, endTouch: E } = Zt(), B = C(() => R.value === (e.vertical ? "vertical" : "horizontal"));
    let N = !1, A = -1;
    d({
      size: r,
      currentIndex: l,
      vertical: t
    }), xe(() => window, "keydown", He), S(h, null), S(v, null), me(() => c.value, () => Bt(null, null, function* () {
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
      !z.value || !ee || (D(be), B.value && (Ze(be), a.value += K ? y.value : $.value, F()));
    }
    function Y() {
      if (!z.value || (E(), !B.value)) return;
      const { vertical: be, onChange: ee } = e, K = be ? w.value < 0 : g.value < 0, re = be ? T.value : O.value, ye = performance.now() - H.value <= NO && re >= RO ? Q(K ? l.value + 1 : l.value - 1) : Q();
      i.value = !1, a.value = ye * -r.value;
      const Pe = l.value;
      l.value = X(ye), G(), Pe !== l.value && S(ee, l.value);
    }
    function ie(be) {
      e.navigation === "hover" && (s.value = be);
    }
    function Ee(be) {
      return e.navigation !== "hover" ? "" : Zf(`--navigation${e.vertical ? "-vertical" : ""}-${be}-animation`);
    }
    function He(be) {
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
      n: Zf,
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
dh.render = UO;
var Yi = dh;
de(Yi);
fe(Yi, ld);
var bN = Yi, Po = Yi;
function HO() {
  const { bindParent: e, index: n, parentProvider: r } = In(Lp);
  return rr(!!e, "SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var { name: jO, n: YO } = oe("swipe-item"), KO = ["aria-hidden"];
function WO(e, n) {
  return b(), k("div", {
    class: m(e.n()),
    style: J({
      width: e.vertical ? void 0 : e.toSizeUnit(e.size),
      height: e.vertical ? e.toSizeUnit(e.size) : void 0,
      transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.translate)})`
    }),
    tabindex: "-1",
    "aria-hidden": e.currentIndex !== e.index,
    onFocus: n[0] || (n[0] = (r) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (r) => e.isFocusing = !1)
  }, [U(e.$slots, "default")], 46, KO);
}
var ch = te({
  name: jO,
  setup() {
    const e = P(0), n = P(!1), { swipe: r, bindSwipe: t, index: o } = HO(), { size: a, currentIndex: i, vertical: l } = r;
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
ch.render = WO;
var sd = ch;
de(sd);
var yN = sd, Oo = sd, qO = Object.defineProperty, Jf = Object.getOwnPropertySymbols, XO = Object.prototype.hasOwnProperty, GO = Object.prototype.propertyIsEnumerable, Qf = (e, n, r) => n in e ? qO(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, xf = (e, n) => {
  for (var r in n || (n = {})) XO.call(n, r) && Qf(e, r, n[r]);
  if (Jf)
    for (var r of Jf(n)) GO.call(n, r) && Qf(e, r, n[r]);
  return e;
}, fh = xf(xf({
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
])), { name: ZO, n: _f, classes: JO } = oe("image-preview"), Kl = 12, ev = 200, QO = 350, nv = 200, xO = 500, na = 1, _O = ["onTouchstart"], ez = ["src", "alt"];
function nz(e, n) {
  const r = x("var-swipe-item"), t = x("var-swipe"), o = x("var-icon"), a = x("var-popup");
  return b(), we(a, {
    show: e.show,
    "onUpdate:show": n[3] || (n[3] = (i) => e.show = i),
    "var-image-preview-cover": "",
    class: m(e.n("popup")),
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
          class: m(e.n("swipe-item")),
          "var-image-preview-cover": ""
        }, {
          default: ue(() => [L("div", {
            class: m(e.n("zoom-container")),
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
            class: m(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
            src: i,
            alt: i
          }, null, 10, ez)], 46, _O)]),
          _: 2
        }, 1032, ["class"]))), 128))]),
        indicator: ue(({ index: i, length: l }) => [U(e.$slots, "indicator", {
          index: i,
          length: l
        }, () => [e.indicator && e.images.length > 1 ? (b(), k("div", {
          key: 0,
          class: m(e.n("indicators"))
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
      U(e.$slots, "close-icon", {}, () => [e.closeable ? (b(), we(o, {
        key: 0,
        class: m(e.n("close-icon")),
        name: "close-circle",
        "var-image-preview-cover": "",
        onClick: e.close
      }, null, 8, ["class", "onClick"])) : q("v-if", !0)]),
      e.$slots.extra ? (b(), k("div", {
        key: 0,
        class: m(e.n("extra"))
      }, [U(e.$slots, "extra")], 2)) : q("v-if", !0)
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
var vh = te({
  name: ZO,
  components: {
    VarSwipe: Po,
    VarSwipeItem: Oo,
    VarPopup: ut,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: fh,
  setup(e) {
    const n = wn(e, "show"), r = P(1), t = P(0), o = P(0), a = P(), i = P(), l = P(!0), s = P(null), { moveX: u, moveY: d, distance: c, startTime: f, startTouch: v, moveTouch: p, endTouch: h } = Zt(), g = C(() => {
      const { imagePreventDefault: G, show: ne } = e;
      return ne && G;
    });
    let w = null, $ = null, y = !1;
    const O = {
      start: null,
      prev: null
    };
    xe(() => document, "contextmenu", Q);
    function T(G) {
      r.value = Z(G), l.value = !1, O.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, nv);
    }
    function z() {
      r.value = 1, t.value = 0, o.value = 0, l.value = !0, O.prev = null, a.value = void 0, i.value = void 0;
    }
    function R(G) {
      return O.prev ? c.value <= Kl && performance.now() - f.value <= ev && O.prev === G : !1;
    }
    function H(G) {
      return !G || !O.start || !O.prev ? !1 : c.value <= Kl && performance.now() - f.value < QO && (G === O.start || G.parentNode === O.start);
    }
    function M() {
      h(), window.clearTimeout($), y = !1, O.start = null;
    }
    function D(G) {
      if (h(), window.clearTimeout($), y) {
        y = !1;
        return;
      }
      const ne = H(G.target);
      w = window.setTimeout(() => {
        ne && F(), O.start = null;
      }, ev);
    }
    function E(G, ne) {
      window.clearTimeout(w), window.clearTimeout($);
      const pe = G.currentTarget;
      if (O.start = pe, $ = window.setTimeout(() => {
        y = !0, S(e.onLongPress, ne);
      }, xO), R(pe)) {
        r.value > na ? z() : T(e.zoom);
        return;
      }
      v(G), O.prev = pe;
    }
    function B(G) {
      const { offsetWidth: ne, offsetHeight: pe } = G, { naturalWidth: Oe, naturalHeight: Y } = G.querySelector(`.${_f("image")}`);
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
      if (!O.prev) return;
      p(G);
      const ne = G.currentTarget;
      if (c.value > Kl && window.clearTimeout($), r.value > na) {
        const pe = N(ne), Oe = A(ne);
        t.value = hn(t.value + u.value, -pe, pe), o.value = hn(o.value + d.value, -Oe, Oe);
      }
      O.prev = ne;
    }
    function F() {
      if (r.value > na) {
        z(), setTimeout(() => S(e["onUpdate:show"], !1), nv);
        return;
      }
      S(e["onUpdate:show"], !1);
    }
    function Q(G) {
      g.value && Ze(G);
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
      G <= na ? z() : T(G);
    }
    return {
      swipeRef: s,
      isPreventDefault: g,
      show: n,
      scale: r,
      translateX: t,
      translateY: o,
      canSwipe: l,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: _f,
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
vh.render = nz;
var Ko = vh, rz = Object.defineProperty, tz = Object.defineProperties, oz = Object.getOwnPropertyDescriptors, rv = Object.getOwnPropertySymbols, az = Object.prototype.hasOwnProperty, iz = Object.prototype.propertyIsEnumerable, tv = (e, n, r) => n in e ? rz(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, ra = (e, n) => {
  for (var r in n || (n = {})) az.call(n, r) && tv(e, r, n[r]);
  if (rv)
    for (var r of rv(n)) iz.call(n, r) && tv(e, r, n[r]);
  return e;
}, ov = (e, n) => tz(e, oz(n)), ot, vo = {};
function lz(e = {}) {
  return Sn(e) ? ov(ra({}, vo), { images: [e] }) : We(e) ? ov(ra({}, vo), { images: e }) : ra(ra({}, vo), e);
}
function bt(e) {
  if (!Er()) return;
  bt.close();
  const n = $n(lz(e));
  n.teleport = "body", ot = n;
  const { unmountInstance: r } = Jt(Ko, n, {
    onClose: () => S(n.onClose),
    onClosed: () => {
      S(n.onClosed), r(), ot === n && (ot = null);
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
de(Ko);
de(Ko, bt);
fe(bt, fh);
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
}), { name: sz, n: uz, classes: dz } = oe("sticky");
function cz(e, n) {
  return b(), k("div", {
    ref: "stickyEl",
    class: m(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
    style: J({
      zIndex: e.toNumber(e.zIndex),
      top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
      width: e.enableFixedMode ? e.fixedWidth : void 0,
      height: e.enableFixedMode ? e.fixedHeight : void 0
    })
  }, [L("div", {
    ref: "wrapperEl",
    class: m(e.n("wrapper")),
    style: J({
      zIndex: e.toNumber(e.zIndex),
      position: e.enableFixedMode ? "fixed" : void 0,
      width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
      height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
      left: e.enableFixedMode ? e.fixedLeft : void 0,
      top: e.enableFixedMode ? e.fixedTop : void 0
    })
  }, [U(e.$slots, "default")], 6)], 6);
}
var ph = te({
  name: sz,
  props: po,
  setup(e) {
    const n = P(null), r = P(null), t = P(!1), o = P("0px"), a = P("0px"), i = P("auto"), l = P("auto"), s = P("auto"), u = P("auto"), d = C(() => !e.disabled && e.cssMode), c = C(() => !e.disabled && !e.cssMode && t.value), f = C(() => fn(e.offsetTop));
    let v;
    me(() => e.disabled, $), En(() => av(null, null, function* () {
      yield Xn(), h(), g();
    })), Gt(w), wr($), xe(() => window, "scroll", g);
    function p() {
      const { cssMode: y, disabled: O } = e;
      if (O) return;
      let T = 0;
      if (v && v !== window) {
        const { top: E } = kn(v);
        T = E;
      }
      const z = r.value, R = n.value, { top: H, left: M } = kn(R), D = H - T;
      return D <= f.value ? (y || (i.value = `${R.offsetWidth}px`, l.value = `${R.offsetHeight}px`, o.value = `${T + f.value}px`, a.value = `${M}px`, s.value = `${z.offsetWidth}px`, u.value = `${z.offsetHeight}px`, t.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (t.value = !1, {
        offsetTop: D,
        isFixed: !1
      });
    }
    function h() {
      v = dt(n.value), v !== window && v.addEventListener("scroll", g);
    }
    function g() {
      const y = p();
      y && S(e.onScroll, y.offsetTop, y.isFixed);
    }
    function w() {
      !v || v === window || v.removeEventListener("scroll", g);
    }
    function $() {
      return av(this, null, function* () {
        t.value = !1, yield Xr(), p();
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
ph.render = cz;
var Ki = ph;
de(Ki);
fe(Ki, po);
var kN = Ki, To = Ki, mh = { index: [Number, String] }, gh = /* @__PURE__ */ Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function fz() {
  const { bindChildren: e, length: n, childProviders: r } = Bn(gh);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function vz() {
  const { parentProvider: e, index: n, bindParent: r } = In(gh);
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
    default: ue(() => [L("div", Xe({ class: e.n() }, e.$attrs), [U(e.$slots, "default", {}, () => [Le(ve(e.name), 1)])], 16)]),
    _: 3
  }, 8, [
    "offset-top",
    "z-index",
    "disabled",
    "css-mode"
  ]);
}
var hh = te({
  name: pz,
  components: { VarSticky: To },
  inheritAttrs: !1,
  props: mh,
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
hh.render = hz;
var Wi = hh;
de(Wi);
fe(Wi, mh);
var $N = Wi, Xs = Wi, bh = {
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
}), { name: bz, n: yz, classes: wz } = oe("index-bar"), kz = ["onClick"];
function $z(e, n) {
  return b(), k("div", {
    ref: "barEl",
    class: m(e.n())
  }, [U(e.$slots, "default"), L("ul", {
    class: m(e.n("anchor-list")),
    style: J({
      zIndex: e.toNumber(e.zIndex) + 2,
      display: e.hideList ? "none" : "block"
    })
  }, [(b(!0), k(Be, null, Ye(e.anchorNameList, (r) => (b(), k("li", {
    key: r,
    class: m(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
    style: J({ color: e.active === r && e.highlightColor ? e.highlightColor : void 0 }),
    onClick: (t) => e.anchorClick({
      anchorName: r,
      manualCall: !0
    })
  }, [U(e.$slots, "anchor-name", { anchorName: r }, () => [Le(ve(r), 1)])], 14, kz))), 128))], 6)], 2);
}
var yh = te({
  name: bz,
  props: bh,
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
    me(() => u.value, () => iv(null, null, function* () {
      yield Xn(), t.value = d.filter(({ name: z }) => z.value != null).map(({ name: z }) => z.value);
    })), En(y), Pt(O), Ot(() => {
      v = !0, O();
    }), vt(() => {
      !v || o.value === void 0 || ($({
        anchorName: o.value,
        options: { event: !1 }
      }), v = !1);
    }), c(p);
    function h(z, R) {
      const H = Tn(z) ? z.name.value : z;
      H === o.value || H === void 0 || (o.value = H, R?.event !== !1 && S(e.onChange, H));
    }
    function g() {
      const { top: z } = kn(f), { top: R } = kn(r.value);
      return kt(f) - z + R;
    }
    function w() {
      const z = kt(f), R = f === window ? document.body.scrollHeight : f.scrollHeight, H = g();
      d.forEach((M, D) => {
        const E = z - M.getOffsetTop() + l.value - H, B = D === d.length - 1 ? R : d[D + 1].getOffsetTop() - M.getOffsetTop();
        M.setDisabled(!0), E >= 0 && E < B && n.value === "" && (M.setDisabled(!1), h(M));
      });
    }
    function $(z) {
      return iv(this, arguments, function* ({ anchorName: R, manualCall: H = !1, options: M }) {
        if (H && S(e.onClick, R), R === o.value && !v) return;
        const D = d.find(({ name: A }) => R === A.value);
        if (!D) return;
        const E = g(), B = D.getOffsetTop() - l.value + E, N = Ru(f);
        n.value = R, h(R, M), yield go(f, {
          left: N,
          top: B,
          animation: vm,
          duration: Z(e.duration)
        }), yield Xn(), n.value = "";
      });
    }
    function y() {
      f = dt(r.value), f.addEventListener("scroll", w);
    }
    function O() {
      f && f.removeEventListener("scroll", w);
    }
    function T(z, R) {
      Vt(() => $({
        anchorName: z,
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
yh.render = $z;
var qi = yh;
de(qi);
fe(qi, bh);
var CN = qi, Gs = qi, wh = {
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
    default: ue(() => [U(e.$slots, "default")]),
    _: 3
  }, 16, [
    "class",
    "style",
    "onClick"
  ]);
}
var kh = te({
  name: Cz,
  props: wh,
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
kh.render = Oz;
var Xi = kh;
de(Xi);
fe(Xi, wh);
var SN = Xi, Zs = Xi, $h = {
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
function zz() {
  const { bindChildren: e, childProviders: n, length: r } = Bn(Ch);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
var Sh = /* @__PURE__ */ Symbol("TAB_ITEM_BIND_LIST_KEY");
function Tz() {
  const { parentProvider: e, bindParent: n, index: r } = In(Ch);
  return rr(!!n, "TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
function Ez() {
  const { childProviders: e, bindChildren: n, length: r } = Bn(Sh);
  return {
    length: r,
    lists: e,
    bindLists: n
  };
}
function Iz() {
  const { parentProvider: e, bindParent: n, index: r } = In(Sh);
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
    class: m(e.classes(e.n(), e.n("$--box")))
  }, [
    U(e.$slots, "default"),
    e.loading ? U(e.$slots, "loading", { key: 0 }, () => {
      var o;
      return [L("div", { class: m(e.n("loading")) }, [L("div", { class: m(e.n("loading-text")) }, ve((o = e.loadingText) != null ? o : (e.pt ? e.pt : e.t)("listLoadingText")), 3), j(r, {
        size: "mini",
        radius: 10
      })], 2)];
    }) : q("v-if", !0),
    e.finished ? U(e.$slots, "finished", { key: 1 }, () => {
      var o;
      return [L("div", { class: m(e.n("finished")) }, ve((o = e.finishedText) != null ? o : (e.pt ? e.pt : e.t)("listFinishedText")), 3)];
    }) : q("v-if", !0),
    e.error ? U(e.$slots, "error", { key: 2 }, () => {
      var o;
      return [Ke((b(), k("div", {
        class: m(e.n("error")),
        onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
      }, [Le(ve((o = e.errorText) != null ? o : (e.pt ? e.pt : e.t)("listErrorText")), 1)], 2)), [[t]])];
    }) : q("v-if", !0),
    L("div", {
      ref: "detectorEl",
      class: m(e.n("detector"))
    }, null, 2)
  ], 2);
}
var Ph = te({
  name: Dz,
  directives: { Ripple: vn },
  components: { VarLoading: Ct },
  props: $h,
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
Ph.render = Nz;
var Gi = Ph;
de(Gi);
fe(Gi, $h);
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
}, { name: Vz, classes: Lz, n: lv } = oe("loading-bar"), Fz = te({
  name: Vz,
  props: Rz,
  setup(e) {
    return () => j("div", {
      class: Lz(lv(), [e.error, lv("--error")]),
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
}), ud = 200, Oh, zh, Th, Eh, Zi, sv, Ih = {}, Cn = $n({
  value: 0,
  opacity: 0,
  error: !1
});
function Uz(e) {
  Object.assign(Cn, e), Ih = e;
}
var Hz = () => {
  Object.keys(Ih).forEach((e) => {
    Cn[e] !== void 0 && (Cn[e] = void 0);
  });
}, Bh = () => {
  sv || (sv = !0, Jt(Fz, Cn));
}, dd = () => {
  Oh = window.setTimeout(() => {
    Cn.transitionDuration = void 0, !(Cn.value >= 95) && (Cn.value += Cn.value < 70 ? Math.round(5 * Math.random()) : Math.random(), dd());
  }, 200);
}, cd = () => {
  window.clearTimeout(Oh), window.clearTimeout(Zi), window.clearTimeout(Th), window.clearTimeout(zh), window.clearTimeout(Eh);
}, Dh = () => {
  cd(), Cn.value = 100, Zi = window.setTimeout(() => {
    Cn.opacity = 0, Eh = window.setTimeout(() => {
      Cn.error = !1;
    }, 250);
  }, ud + 100);
}, jz = () => {
  cd(), Cn.error = !1, Cn.value = 0, Cn.transitionDuration = 0, Bh(), Zi = window.setTimeout(() => {
    Cn.opacity = 1;
  }, ud), dd();
}, Yz = () => {
  var e;
  Th = window.setTimeout(Dh, (e = Cn.finishDelay) != null ? e : 0);
}, Kz = () => {
  cd(), Cn.error = !0, Cn.value === 100 && (Cn.value = 0, Cn.transitionDuration = 0), Bh(), Zi = window.setTimeout(() => {
    Cn.opacity = 1;
  }, ud), dd(), zh = window.setTimeout(Dh, 300);
}, Mh = {
  start: jz,
  finish: Yz,
  error: Kz,
  setDefaultOptions: Uz,
  resetDefaultOptions: Hz
}, ON = Mh, Qs = Mh, Ah = {
  tag: {
    type: String,
    default: "div"
  },
  locale: {
    type: String,
    default: "zh-CN"
  },
  messages: { type: Object }
}, Wz = Object.defineProperty, qz = Object.defineProperties, Xz = Object.getOwnPropertyDescriptors, uv = Object.getOwnPropertySymbols, Gz = Object.prototype.hasOwnProperty, Zz = Object.prototype.propertyIsEnumerable, dv = (e, n, r) => n in e ? Wz(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Jz = (e, n) => {
  for (var r in n || (n = {})) Gz.call(n, r) && dv(e, r, n[r]);
  if (uv)
    for (var r of uv(n)) Zz.call(n, r) && dv(e, r, n[r]);
  return e;
}, Qz = (e, n) => qz(e, Xz(n)), { name: xz, n: _z } = oe("locale-provider"), Ji = te({
  name: xz,
  props: Ah,
  setup(e, { slots: n }) {
    const r = C(() => {
      var o;
      return Object.entries((o = e.messages) != null ? o : {}).reduce((a, [i, l]) => (a[i] = Qz(Jz({}, l), { lang: i }), a), {});
    });
    ay({ t });
    function t(o) {
      if (mo(r.value, e.locale) && mo(r.value[e.locale], o)) return r.value[e.locale][o];
    }
    return () => Fn(e.tag, { class: _z() }, S(n.default));
  }
});
de(Ji);
fe(Ji, Ah);
var zN = Ji, xs = Ji, Nh = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  option: Object
}, Rh = /* @__PURE__ */ Symbol("SELECT_BIND_OPTION_KEY");
function e6() {
  const { length: e, childProviders: n, bindChildren: r } = Bn(Rh);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function n6() {
  const { index: e, parentProvider: n, bindParent: r } = In(Rh);
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
    class: m(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
    style: J({ color: e.optionSelected ? e.focusColor : void 0 }),
    tabindex: e.disabled ? void 0 : "-1",
    onFocus: n[2] || (n[2] = (l) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (l) => e.isFocusing = !1),
    onClick: n[4] || (n[4] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    L("div", {
      class: m(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
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
    U(e.$slots, "default", { selected: e.optionSelected }, () => [L("div", { class: m(e.classes(e.n("text"), e.n("$--ellipsis"))) }, [j(t, { is: e.labelVNode }, null, 8, ["is"])], 2)]),
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
var Vh = te({
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
  props: Nh,
  setup(e) {
    const n = P(), r = P(!1), t = P(!1), o = C(() => {
      var I;
      return (I = e.option) != null ? I : {
        label: e.label,
        value: e.value,
        disabled: e.disabled
      };
    }), a = C(() => t.value), i = C(() => e.value), l = C(() => e.disabled), s = C(() => e.ripple), { select: u, bindSelect: d } = n6(), { pattern: c, showMenu: f, filterable: v, multiple: p, focusColor: h, onSelect: g, computeLabel: w, filter: $ } = u, { hovering: y, handleHovering: O } = ur(), T = C(() => {
      var I;
      return Yn(e.label) ? e.label((I = e.option) != null ? I : {
        label: e.label,
        value: e.value,
        disabled: e.disabled
      }, t.value) : e.label;
    }), z = P(!0), R = C(() => !v.value || !c.value ? !0 : $(c.value, o.value)), H = C(() => f.value ? R.value : z.value), M = {
      label: T,
      value: i,
      disabled: l,
      ripple: s,
      selected: a,
      sync: A
    };
    me([() => e.label, () => e.value], w), me(() => [f.value, R.value], () => {
      f.value && (z.value = R.value);
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
      p.value && (t.value = !t.value), g(M);
    }
    function A(I) {
      t.value = I;
    }
    return {
      root: n,
      optionSelected: t,
      visible: H,
      multiple: p,
      focusColor: h,
      hovering: y,
      isFocusing: r,
      labelVNode: T,
      n: t6,
      classes: o6,
      handleHovering: O,
      handleClick: D,
      handleSelect: N
    };
  }
});
Vh.render = i6;
var Qi = Vh;
de(Qi);
fe(Qi, Nh);
var TN = Qi, Da = Qi, l6 = Object.defineProperty, s6 = Object.defineProperties, u6 = Object.getOwnPropertyDescriptors, cv = Object.getOwnPropertySymbols, d6 = Object.prototype.hasOwnProperty, c6 = Object.prototype.propertyIsEnumerable, fv = (e, n, r) => n in e ? l6(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, f6 = (e, n) => {
  for (var r in n || (n = {})) d6.call(n, r) && fv(e, r, n[r]);
  if (cv)
    for (var r of cv(n)) c6.call(n, r) && fv(e, r, n[r]);
  return e;
}, v6 = (e, n) => s6(e, u6(n)), Lh = v6(f6({
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
    class: m(e.classes(e.n(), e.n("$--box"), e.n(`--align-${e.align}`))),
    style: J({
      "--otp-input-gutter": e.gutterStyle,
      "--otp-input-cell-height": e.cellHeightStyle,
      "--otp-input-cell-max-width": e.cellMaxWidthStyle
    }),
    onClick: n[1] || (n[1] = (...o) => e.handleClick && e.handleClick(...o)),
    onKeydown: n[2] || (n[2] = (...o) => e.handleKeydown && e.handleKeydown(...o)),
    onPaste: n[3] || (n[3] = (...o) => e.handlePaste && e.handlePaste(...o))
  }, [L("div", { class: m(e.n("cells")) }, [(b(!0), k(Be, null, Ye(e.cellIndexes, (o, a) => (b(), k(Be, { key: a }, [L("div", {
    class: m(e.n("cell")),
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
    class: m(e.n("separator"))
  }, [U(e.$slots, "separator", { index: a })], 2)) : q("v-if", !0)], 64))), 128))], 2), j(t, {
    class: m(e.n("details")),
    "var-otp-input-cover": "",
    "error-message": e.errorMessage
  }, null, 8, ["class", "error-message"])], 38);
}
var Fh = te({
  name: m6,
  components: {
    VarFormDetails: Un,
    VarInput: Vo
  },
  props: Lh,
  setup(e) {
    const n = $0(), r = P(null), t = P([]), o = P(-1), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Jn(), { bindForm: u, form: d } = Kn(), c = C(() => Z(e.length)), f = C(() => {
      var ee;
      return (ee = H(e.maskSymbol)[0]) != null ? ee : "•";
    }), v = C(() => M(e.modelValue)), p = C(() => Array.from({ length: c.value })), h = C(() => ze(e.gutter)), g = C(() => ze(e.cellHeight)), w = C(() => ze(e.cellMaxWidth)), $ = C(() => e.type === "digit" ? "numeric" : void 0), y = C(() => e.type === "digit" ? "tel" : "text"), O = C(() => {
      var ee;
      return (ee = d?.disabled.value) != null ? ee : !1;
    }), T = C(() => {
      var ee;
      return (ee = d?.readonly.value) != null ? ee : !1;
    });
    let z = null, R = !1;
    u?.({
      validate: ce,
      resetValidation: s,
      reset: G
    }), En(() => {
      e.autofocus && ae();
    });
    function H(ee) {
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
    function A(ee) {
      return ee >= c.value - 1 || !n.separator ? !1 : Va(n.separator({ index: ee })).length > 0;
    }
    function I(ee, K = v.value) {
      Ne(() => {
        i(e.validateTrigger, ee, e.rules, K);
      });
    }
    function F(ee) {
      H(ee).length === c.value && (S(e.onComplete, ee), I("onComplete", ee));
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
        (re = (K = t.value[rn]) == null ? void 0 : K.focus) == null || re.call(K), yield Xr(), document.activeElement === ((ye = t.value[rn]) == null ? void 0 : ye.el) && ((Ge = (Pe = t.value[rn]) == null ? void 0 : Pe.select) == null || Ge.call(Pe));
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
      z = ee, !R && (R = !0, Ne(() => {
        R = !1, z != null && (o.value = z, X(z), z = null);
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
    function He(ee) {
      if (e.disabled || O.value) return;
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
      const re = H(D(K)), ye = E(), Pe = ee > ye.length;
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
      if (!e.allowPaste || O.value || T.value || e.disabled || e.readonly) return;
      const ye = (re = (K = ee.clipboardData) == null ? void 0 : K.getData("text")) != null ? re : "";
      if (!ye) return;
      ee.preventDefault();
      const Pe = D(e.pasteTransform ? e.pasteTransform(ye) : ye);
      if (S(e.onPaste, Pe, ee), I("onPaste", Pe), !Pe) {
        pe();
        return;
      }
      Y(0, H(Pe));
    }
    function be(ee) {
      if (O.value || T.value || e.disabled || e.readonly) return;
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
      formDisabled: O,
      formReadonly: T,
      cellIndexes: p,
      gutterStyle: h,
      cellHeightStyle: g,
      cellMaxWidthStyle: w,
      resolvedInputmode: $,
      nativeInputType: y,
      align: e.align,
      n: Wl,
      classes: g6,
      setInputRef: N,
      getDisplayChar: B,
      shouldRenderSeparator: A,
      handleClick: He,
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
Fh.render = b6;
var xi = Fh;
de(xi);
fe(xi, Lh);
var EN = xi, _s = xi, Uh = {
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
  props: Uh,
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
      return d ? j(Ur, {
        to: d,
        disabled: a.value
      }, { default: () => [u()] }) : u();
    };
  }
});
de(_i);
fe(_i, Uh);
var IN = _i, eu = _i, Hh = {
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
    class: m(e.classes(e.n(), e.n("$--box"), [e.variant === "standard", e.formatElevation(e.elevation, 2)], [e.onClick || !e.normalizedHoverable.disabled, e.n("--cursor")], [e.round, e.n("--round")], [e.surfaceLow, e.n("--surface-low")], [e.variant === "outlined", e.n("--outlined")], [e.variant === "filled", e.n("--filled")], [e.inline, e.n("$--inline-flex")])),
    style: J({
      width: e.toSizeUnit(e.width),
      height: e.toSizeUnit(e.height),
      "border-radius": e.toSizeUnit(e.radius)
    }),
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [U(e.$slots, "default"), j(r, {
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
var jh = te({
  name: w6,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: { VarHoverOverlay: Gn },
  props: Hh,
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
jh.render = C6;
var el = jh;
de(el);
fe(el, Hh);
var BN = el, nu = el, S6 = Object.defineProperty, vv = Object.getOwnPropertySymbols, P6 = Object.prototype.hasOwnProperty, O6 = Object.prototype.propertyIsEnumerable, pv = (e, n, r) => n in e ? S6(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, z6 = (e, n) => {
  for (var r in n || (n = {})) P6.call(n, r) && pv(e, r, n[r]);
  if (vv)
    for (var r of vv(n)) O6.call(n, r) && pv(e, r, n[r]);
  return e;
}, Yh = z6({
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
])), { name: T6, n: E6, classes: I6 } = oe("picker"), mv = 300, B6 = 15, gv = 200, D6 = 1e3, hv = 0, M6 = [
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
      class: m(e.n("toolbar"))
    }, [
      U(e.$slots, "cancel", {}, () => [j(r, {
        class: m(e.n("cancel-button")),
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
      U(e.$slots, "title", {}, () => {
        var t;
        return [L("div", { class: m(e.n("title")) }, ve((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("pickerTitle")), 3)];
      }),
      U(e.$slots, "confirm", {}, () => [j(r, {
        class: m(e.n("confirm-button")),
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
      class: m(e.n("columns")),
      style: J({ height: `${e.columnHeight}px` })
    }, [
      (b(!0), k(Be, null, Ye(e.scrollColumns, (t) => (b(), k("div", {
        key: t.id,
        class: m(e.n("column")),
        onTouchstartPassive: (o) => e.handleTouchstart(o, t),
        onTouchmove: Rn((o) => e.handleTouchmove(o, t), ["prevent"]),
        onTouchend: (o) => e.handleTouchend(t)
      }, [L("div", {
        ref_for: !0,
        ref: (o) => e.setScrollEl(o, t),
        class: m(e.n("scroller")),
        style: J({
          transform: `translateY(${t.translate}px)`,
          transitionDuration: `${t.duration}ms`,
          transitionProperty: t.duration ? "transform" : "none"
        }),
        onTransitionend: (o) => e.handleTransitionend(t)
      }, [(b(!0), k(Be, null, Ye(t.column, (o, a) => (b(), k("div", {
        key: e.getValue(o),
        class: m(e.classes(e.n("option"), o.className)),
        style: J({ height: `${e.optionHeight}px` }),
        onClick: (i) => e.handleClick(t, a)
      }, [L("div", { class: m(e.classes(e.n("text"), o.textClassName)) }, ve(o[e.getOptionKey("text")]), 3)], 14, N6))), 128))], 46, A6)], 42, M6))), 128)),
      L("div", {
        class: m(e.n("picked")),
        style: J({
          top: `${e.center}px`,
          height: `${e.optionHeight}px`
        })
      }, null, 6),
      L("div", {
        class: m(e.n("mask")),
        style: J({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
      }, null, 6)
    ], 6)], 16)]),
    _: 3
  }, 16);
}
var Kh = te({
  name: T6,
  components: {
    VarButton: tr,
    VarPopup: ut
  },
  inheritAttrs: !1,
  props: Yh,
  setup(e) {
    const n = wn(e, "modelValue"), r = P([]), t = C(() => Z(e.columnsCount)), o = C(() => fn(e.optionHeight)), a = C(() => fn(e.optionCount)), i = C(() => a.value * o.value / 2 - o.value / 2), l = C(() => a.value * o.value), { prevY: s, moveY: u, dragging: d, startTouch: c, moveTouch: f, endTouch: v } = Zt(), { t: p } = kr();
    let h = [];
    R(), me(() => e.columns, R, { deep: !0 }), me(() => n.value, R);
    function g(Y) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[Y];
    }
    function w(Y) {
      var ie;
      return (ie = Y[g("value")]) != null ? ie : Y[g("text")];
    }
    function $(Y) {
      h = [...Y];
    }
    function y(Y) {
      return (e.columnsCount != null ? Y.slice(0, t.value) : Y).map((ie, Ee) => {
        const He = {
          id: hv++,
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
        }, nn = n.value[Ee], qe = He.column.findIndex((en) => nn === w(en));
        return He.index = qe === -1 ? 0 : qe, A(He), He;
      });
    }
    function O(Y) {
      const ie = [];
      return T(ie, Y), ie;
    }
    function T(Y, ie, Ee = !0, He = 1) {
      var nn;
      if (ie.length && (e.columnsCount == null || He <= t.value)) {
        const qe = {
          id: hv++,
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
          const en = n.value[Y.length - 1], on = ie.findIndex((be) => en === w(be));
          qe.index = on === -1 ? 0 : on;
        }
        A(qe), T(Y, (nn = qe.column[qe.index][g("children")]) != null ? nn : [], Ee, He + 1);
      }
    }
    function z(Y) {
      var ie;
      r.value.splice(r.value.indexOf(Y) + 1), T(r.value, (ie = Y.column[Y.index][g("children")]) != null ? ie : [], !1, r.value.length + 1);
    }
    function R() {
      r.value = e.cascade ? O(e.columns) : y(e.columns);
      const { indexes: Y } = N();
      $(Y);
    }
    function H(Y, ie) {
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
      return S0(Math.round((i.value - ie) / o.value), Y.column);
    }
    function B(Y) {
      return Y.translate = i.value - Y.index * o.value, Y.translate;
    }
    function N() {
      const Y = [], ie = [], Ee = [];
      return r.value.forEach(({ column: He, index: nn }) => {
        const qe = He[nn];
        Y.push(w(qe)), ie.push(nn), Ee.push(qe);
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
      d.value || (Y.index = ie, A(Y, gv));
    }
    function Q(Y, ie) {
      ie.touching = !0, ie.translate = Nl(ie.scrollEl), c(Y);
    }
    function X(Y, ie) {
      if (!ie.touching) return;
      f(Y), ie.scrolling = !1, ie.duration = 0, ie.prevY = s.value, ie.translate += u.value, D(ie);
      const Ee = performance.now();
      Ee - ie.momentumTime > mv && (ie.momentumTime = Ee, ie.momentumPrevY = ie.translate);
    }
    function ae(Y) {
      v(), Y.touching = !1, Y.prevY = 0;
      const ie = Y.translate - Y.momentumPrevY, Ee = performance.now() - Y.momentumTime, He = Math.abs(ie) >= B6 && Ee <= mv, nn = Y.translate;
      He && I(Y, ie, Ee), Y.index = E(Y, Y.translate), A(Y, He ? D6 : gv), Y.scrolling = Y.translate !== nn, Y.scrolling || G(Y);
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
      Ee && z(Y);
      const He = r.value.some((be) => be.scrolling), nn = r.value.some((be) => be.touching);
      if (He || nn) return;
      const { values: qe, indexes: en, options: on } = N();
      $(en), S(ie, qe, en, on), n.value = qe;
    }
    function ne() {
      if (e.cascade) {
        const Y = r.value.find((ie) => ie.scrolling);
        Y && (Y.index = E(Y, Nl(Y.scrollEl)), Y.scrolling = !1, A(Y), z(Y));
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
      setScrollEl: H,
      getOptionKey: g,
      getValue: w,
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
Kh.render = R6;
var Wo = Kh, Nt;
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
fe(_t, Yh);
var DN = Wo, ru = _t, Wh = {
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
}, Dt = 100, oa = 0, jr = 20, bv = 2 * Math.PI * jr, { name: V6, n: L6, classes: F6 } = oe("progress"), U6 = ["aria-valuenow"], H6 = ["viewBox"], j6 = { key: 0 }, Y6 = ["id"], K6 = ["offset", "stop-color"], W6 = [
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
    class: m(e.n()),
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": e.indeterminate ? void 0 : e.mode === "linear" ? e.linearProps.value : e.circleProps.value
  }, [e.mode === "linear" ? (b(), k("div", {
    key: 0,
    class: m(e.n("linear"))
  }, [L("div", {
    class: m(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
    style: J({
      height: e.toSizeUnit(e.lineWidth),
      background: e.trackColor
    })
  }, [e.indeterminate ? (b(), k("div", {
    key: 0,
    class: m(e.n("linear-indeterminate"))
  }, [L("div", {
    class: m(e.classes(e.n(`linear--${e.type}`))),
    style: J({ background: e.progressColor })
  }, null, 6), L("div", {
    class: m(e.classes(e.n(`linear--${e.type}`))),
    style: J({ background: e.progressColor })
  }, null, 6)], 2)) : (b(), k("div", {
    key: 1,
    class: m(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`))),
    style: J({
      background: e.progressColor,
      width: e.linearProps.width
    })
  }, null, 6))], 6), e.label ? (b(), k("div", {
    key: 0,
    class: m(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
  }, [U(e.$slots, "default", {}, () => [Le(ve(e.linearProps.roundValue), 1)])], 2)) : q("v-if", !0)], 2)) : q("v-if", !0), e.mode === "circle" ? (b(), k("div", {
    key: 1,
    class: m(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
    style: J({
      width: e.toSizeUnit(e.size),
      height: e.toSizeUnit(e.size)
    })
  }, [(b(), k("svg", {
    class: m(e.n("circle-svg")),
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
      class: m(e.n("circle-background")),
      d: e.circleProps.path,
      fill: "transparent",
      "stroke-width": e.circleProps.strokeWidth,
      "stroke-dasharray": e.CIRCUMFERENCE,
      style: J({ stroke: e.trackColor })
    }, null, 14, W6)) : q("v-if", !0),
    L("path", {
      class: m(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
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
  ], 10, H6)), e.label ? (b(), k("div", {
    key: 0,
    class: m(e.classes(e.n("circle-label"), e.labelClass))
  }, [U(e.$slots, "default", {}, () => [Le(ve(e.circleProps.roundValue), 1)])], 2)) : q("v-if", !0)], 6)) : q("v-if", !0)], 10, U6);
}
var qh = te({
  name: V6,
  props: Wh,
  setup(e) {
    const n = xv();
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
      CIRCUMFERENCE: bv,
      RADIUS: jr,
      circleProps: C(() => {
        const { size: r, lineWidth: t, value: o } = e, a = jr / (1 - fn(t) / fn(r)) * 2, i = `0 0 ${a} ${a}`, l = hn(Math.round(Z(o)), oa, Dt), s = `${(Dt - l) / Dt * bv}`, u = fn(t) / fn(r) * a, d = 0, c = -jr, f = 0, v = -2 * jr, p = `M ${a / 2} ${a / 2} m ${d} ${c} a ${jr} ${jr} 
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
qh.render = X6;
var nl = qh;
de(nl);
fe(nl, Wh);
var MN = nl, tu = nl, Xh = {
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
}), { name: Z6, n: yv, classes: J6 } = oe("pull-refresh"), wv = 150;
function Q6(e, n) {
  const r = x("var-icon");
  return b(), k("div", {
    ref: "freshNode",
    class: m(e.n()),
    onTouchstart: n[0] || (n[0] = (...t) => e.handleTouchstart && e.handleTouchstart(...t)),
    onTouchend: n[1] || (n[1] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
    onTouchcancel: n[2] || (n[2] = (...t) => e.handleTouchend && e.handleTouchend(...t))
  }, [L("div", {
    ref: "controlNode",
    class: m(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
    style: J(e.controlStyle)
  }, [j(r, {
    name: e.iconName,
    transition: e.ICON_TRANSITION,
    class: m(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
    "var-pull-refresh-cover": ""
  }, null, 8, [
    "name",
    "transition",
    "class"
  ])], 6), U(e.$slots, "default")], 34);
}
var Gh = te({
  name: Z6,
  components: { VarIcon: Je },
  props: Xh,
  setup(e) {
    const n = P(0), r = P(null), t = P(null), o = P(0), a = P("-125%"), i = P("arrow-down"), l = P("default"), s = P(!1), u = C(() => Math.abs(2 * n.value)), d = C(() => l.value === "success"), c = C(() => l.value !== "loading" && l.value !== "success" && !e.disabled), f = C(() => ({
      transform: `translate3d(0px, ${Sn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: d.value ? e.successBgColor : e.bgColor,
      color: d.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: p, endTouch: h, isReachTop: g } = Zt();
    let w, $;
    me(() => e.modelValue, (D) => {
      D === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
        a.value = n.value, M();
      }, Z(e.successDuration)));
    }), En(H), xe(r, "touchmove", z);
    function y(D) {
      if (i.value !== D)
        return i.value = D, new Promise((E) => {
          window.setTimeout(E, wv);
        });
    }
    function O(D) {
      ("classList" in w ? w : document.body).classList[D](`${yv()}--lock`);
    }
    function T(D) {
      if (v(D), n.value === 0) {
        const { width: E } = kn(t.value);
        n.value = -(E + E * 0.25);
      }
      $ = dt(D.target);
    }
    function z(D) {
      if (p(D), !c.value || !$ || $ !== w && kt($) > 0 || kt(w) > 0) return;
      g(w) && Ze(D), l.value !== "pulling" && (l.value = "pulling", o.value = D.touches[0].clientY), g(w) && nr(a.value) && a.value > n.value && O("add");
      const E = (D.touches[0].clientY - o.value) / 2 + n.value;
      a.value = E >= u.value ? u.value : E, y(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function R() {
      return G6(this, null, function* () {
        h(), c.value && (s.value = !0, Z(a.value) >= u.value * 0.2 ? (yield y("refresh"), l.value = "loading", a.value = u.value * 0.3, S(e["onUpdate:modelValue"], !0), Ne(() => {
          S(e.onRefresh);
        }), O("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, O("remove");
        }, Z(e.animationDuration))), $ = null);
      });
    }
    function H() {
      w = e.target ? Sp(e.target, "PullRefresh") : dt(r.value);
    }
    function M() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, Z(e.animationDuration));
    }
    return {
      ICON_TRANSITION: wv,
      refreshStatus: l,
      freshNode: r,
      controlNode: t,
      iconName: i,
      controlStyle: f,
      isSuccess: d,
      n: yv,
      classes: J6,
      handleTouchstart: T,
      handleTouchmove: z,
      handleTouchend: R
    };
  }
});
Gh.render = Q6;
var rl = Gh;
de(rl);
fe(rl, Xh);
var AN = rl, ou = rl, Zh = {
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
  return b(), k("div", { class: m(e.n("wrap")) }, [L("div", {
    "aria-label": e.ariaLabel,
    role: "radiogroup",
    class: m(e.classes(e.n(), e.n(`--${e.direction}`)))
  }, [e.options.length ? (b(!0), k(Be, { key: 0 }, Ye(e.options, (a) => (b(), we(t, {
    key: a[e.valueKey],
    "checked-value": a[e.valueKey],
    disabled: a.disabled
  }, {
    default: ue(({ checked: i }) => [j(r, { is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey] }, null, 8, ["is"])]),
    _: 2
  }, 1032, ["checked-value", "disabled"]))), 128)) : q("v-if", !0), U(e.$slots, "default")], 10, n8), j(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var Jh = te({
  name: x6,
  components: {
    VarFormDetails: Un,
    VarRadio: Co,
    MaybeVNode: lr
  },
  props: Zh,
  setup(e) {
    const { length: n, radios: r, bindRadios: t } = kP(), { bindForm: o } = Kn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Jn(), u = C(() => a.value), d = P(!1), c = {
      onToggle: g,
      validate: w,
      reset: $,
      resetValidation: s,
      hasChecked: C(() => d.value),
      errorMessage: u
    };
    me(() => e.modelValue, h), me(() => n.value, h), S(o, c), t(c), xe(() => window, "keydown", f);
    function f(y) {
      const O = r.findIndex(({ isFocusing: T }) => T.value);
      if (O !== -1 && r.some(({ moveable: T }, z) => z === O ? !1 : T())) {
        if ([
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight"
        ].includes(y.key) && Ze(y), y.key === "ArrowUp" || y.key === "ArrowLeft") {
          v(O, "prev");
          return;
        }
        (y.key === "ArrowDown" || y.key === "ArrowRight") && v(O, "next");
      }
    }
    function v(y, O) {
      for (; ; ) {
        O === "prev" ? y-- : y++, y < 0 && (y = r.length - 1), y > r.length - 1 && (y = 0);
        const z = r[y];
        if (z.moveable()) {
          z.move();
          break;
        }
      }
    }
    function p(y) {
      Ne(() => {
        const { validateTrigger: O, rules: T, modelValue: z } = e;
        i(O, y, T, z);
      });
    }
    function h() {
      r.forEach(({ sync: y }) => {
        y(e.modelValue) && (d.value = !0);
      });
    }
    function g(y) {
      S(e["onUpdate:modelValue"], y), S(e.onChange, y), p("onChange");
    }
    function w() {
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
      validate: w,
      resetValidation: s,
      isFunction: Yn
    };
  }
});
Jh.render = r8;
var tl = Jh;
de(tl);
fe(tl, Zh);
var NN = tl, au = tl, Qh = {
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
}, xh = /* @__PURE__ */ Symbol("RAIL_NAVIGATION_BIND_RAIL_NAVIGATION_ITEM_KEY");
function t8() {
  const { bindChildren: e } = Bn(xh);
  return { bindRailNavigationItem: e };
}
var { name: o8, n: a8, classes: i8 } = oe("rail-navigation");
function l8(e, n) {
  return b(), k("aside", Xe({ class: e.classes(e.n(), e.n("$--box"), [e.bordered, e.n("--border")]) }, e.$attrs), [
    e.$slots.start ? (b(), k("div", {
      key: 0,
      class: m(e.n("start"))
    }, [U(e.$slots, "start")], 2)) : q("v-if", !0),
    L("nav", { class: m(e.n("content")) }, [U(e.$slots, "default")], 2),
    e.$slots.end ? (b(), k("div", {
      key: 1,
      class: m(e.n("end"))
    }, [U(e.$slots, "end")], 2)) : q("v-if", !0)
  ], 16);
}
var _h = te({
  name: o8,
  props: Qh,
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
_h.render = l8;
var ol = _h;
de(ol);
fe(ol, Qh);
var RN = ol, iu = ol, eb = {
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
  const { parentProvider: e, index: n, bindParent: r } = In(xh);
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
    class: m(e.classes(e.n(), [e.isActive, e.n("--active")], [e.disabled, e.n("--disabled")], [e.ripple && !e.disabled, e.n("--ripple-enabled")], [!e.showLabel, e.n("--icon-only")])),
    style: J({ "--rail-navigation-item-transition-duration-override": e.allowTransition && !e.ripple ? void 0 : "0ms" }),
    "aria-disabled": e.disabled,
    role: "button",
    onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a)),
    onMouseenter: n[1] || (n[1] = (...a) => e.handleMouseenter && e.handleMouseenter(...a)),
    onMouseleave: n[2] || (n[2] = (...a) => e.handleMouseleave && e.handleMouseleave(...a))
  }, [e.$slots.icon || e.icon ? (b(), k("span", {
    key: 0,
    class: m(e.n("indicator"))
  }, [e.badge ? (b(), we(t, Xe({ key: 0 }, e.badgeProps, {
    class: e.n("badge"),
    "var-rail-navigation-item-cover": ""
  }), {
    default: ue(() => [L("span", { class: m(e.n("icon")) }, [U(e.$slots, "icon", { active: e.isActive }, () => [j(r, {
      name: e.icon,
      namespace: e.namespace
    }, null, 8, ["name", "namespace"])])], 2)]),
    _: 3
  }, 16, ["class"])) : (b(), k("span", {
    key: 1,
    class: m(e.n("icon"))
  }, [U(e.$slots, "icon", { active: e.isActive }, () => [j(r, {
    name: e.icon,
    namespace: e.namespace
  }, null, 8, ["name", "namespace"])])], 2))], 2)) : q("v-if", !0), e.showLabel && (e.$slots.default || e.label) ? (b(), k("span", {
    key: 1,
    class: m(e.n("label"))
  }, [U(e.$slots, "default", { active: e.isActive }, () => [Le(ve(e.label), 1)])], 2)) : q("v-if", !0)], 46, p8)), [[o, { disabled: !e.ripple || e.disabled }]]);
}
var nb = te({
  name: d8,
  components: {
    VarBadge: ko,
    VarIcon: Je
  },
  directives: { Ripple: vn },
  props: eb,
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
nb.render = m8;
var al = nb;
de(al);
fe(al, eb);
var VN = al, lu = al, rb = {
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
  return b(), k("div", { class: m(e.n("wrap")) }, [L("div", { class: m(e.n()) }, [(b(!0), k(Be, null, Ye(e.toNumber(e.count), (l) => Ke((b(), k("div", {
    key: l,
    style: J(e.getStyle(l)),
    class: m(e.getClass(l)),
    onClick: (s) => e.handleClick(l, s)
  }, [L("span", {
    class: m(e.n("content-icon")),
    style: J({ fontSize: e.toSizeUnit(e.size) })
  }, [U(e.$slots, e.getCurrentState(l).slot, {}, () => [j(r, {
    transition: 0,
    namespace: e.getCurrentState(l).namespace,
    name: e.getCurrentState(l).name
  }, null, 8, ["namespace", "name"])])], 6), j(t, { hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled }, null, 8, ["hovering"])], 14, h8)), [[a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    i,
    e.createHoverHandler(l),
    "desktop"
  ]])), 128))], 2), j(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var tb = te({
  name: g8,
  components: {
    VarIcon: Je,
    VarFormDetails: Un,
    VarHoverOverlay: Gn
  },
  directives: {
    Ripple: vn,
    Hover: jn
  },
  props: rb,
  setup(e) {
    const n = P(-1), { form: r, bindForm: t } = Kn(), { errorMessage: o, validateWithTrigger: a, validate: i, resetValidation: l } = Jn(), { hovering: s } = ur();
    let u = Z(e.modelValue);
    S(t, {
      reset: $,
      validate: p,
      resetValidation: l
    });
    function d(y) {
      const { count: O, gap: T } = e;
      return {
        color: f(y).color,
        marginRight: y !== Z(O) ? ze(T) : 0
      };
    }
    function c(y) {
      const { name: O, color: T } = f(y);
      return {
        [to("content")]: !0,
        [to("--disabled")]: r?.disabled.value || e.disabled,
        [to("--error")]: o.value,
        [to("--primary")]: O !== e.emptyIcon && !T
      };
    }
    function f(y) {
      const { modelValue: O, disabled: T, disabledColor: z, color: R, half: H, emptyColor: M, icon: D, halfIcon: E, emptyIcon: B, namespace: N, halfIconNamespace: A, emptyIconNamespace: I } = e;
      let F = R;
      return (T || r?.disabled.value) && (F = z), y <= O ? {
        color: F,
        name: D,
        namespace: N,
        slot: "icon"
      } : H && y <= O + 0.5 ? {
        color: F,
        name: E,
        namespace: A,
        slot: "half-icon"
      } : {
        color: T || r?.disabled.value ? z : M,
        name: B,
        namespace: I,
        slot: "empty-icon"
      };
    }
    function v(y, O) {
      const { half: T, clearable: z } = e, { offsetWidth: R } = O.target;
      T && O.offsetX <= Math.floor(R / 2) && (y -= 0.5), u === y && z && (y = 0), u !== y && (S(e["onUpdate:modelValue"], y), S(e.onChange, y)), u = y;
    }
    function p() {
      return i(e.rules, e.modelValue);
    }
    function h() {
      Ne(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function g(y, O) {
      const { readonly: T, disabled: z } = e;
      T || z || r?.disabled.value || r?.readonly.value || (v(y, O), h());
    }
    function w(y) {
      return (O) => {
        n.value = y, s.value = O;
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
      handleClick: g,
      createHoverHandler: w,
      reset: $,
      validate: p,
      resetValidation: l,
      toSizeUnit: ze,
      toNumber: Z,
      n: to
    };
  }
});
tb.render = b8;
var il = tb;
de(il);
fe(il, rb);
var LN = il, su = il, ob = {
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
var ab = te({});
ab.render = w8;
var k8 = ab, $8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
};
function C8(e, n) {
  return b(), k("svg", $8, [...n[0] || (n[0] = [L("path", { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" }, null, -1)])]);
}
var ib = te({});
ib.render = C8;
var S8 = ib, P8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
};
function O8(e, n) {
  return b(), k("svg", P8, [...n[0] || (n[0] = [L("path", { d: "M11,9H13V7H11M11,20H13V11H11V20Z" }, null, -1)])]);
}
var lb = te({});
lb.render = O8;
var z8 = lb, T8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
};
function E8(e, n) {
  return b(), k("svg", T8, [...n[0] || (n[0] = [L("path", { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" }, null, -1)])]);
}
var sb = te({});
sb.render = E8;
var I8 = sb, { n: B8, classes: D8 } = oe("result");
function M8(e, n) {
  return b(), k(Be, null, [
    L("span", { class: m(e.n("success-cover-left")) }, null, 2),
    L("span", {
      class: m(e.classes(e.n("success-line"), e.n("success-line-tip"))),
      style: J({
        animationDuration: e.animation ? "760ms" : "0ms",
        borderRadius: `calc(${e.borderSize} * 0.625)`
      })
    }, null, 6),
    L("span", {
      class: m(e.classes(e.n("success-line"), e.n("success-line-long"))),
      style: J({
        animationDuration: e.animation ? "770ms" : "0ms",
        borderRadius: `calc(${e.borderSize} * 0.625)`
      })
    }, null, 6),
    L("span", {
      ref: "circle",
      class: m(e.n("success-circle")),
      style: J({
        left: `-${e.borderSize}`,
        top: `-${e.borderSize}`,
        borderWidth: e.borderSize
      })
    }, null, 6),
    L("span", { class: m(e.n("success-line-fix")) }, null, 2),
    L("span", {
      class: m(e.n("success-cover-right")),
      style: J({ animationDuration: e.animation ? "4250ms" : "0ms" })
    }, null, 6)
  ], 64);
}
var ub = te({
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
ub.render = M8;
var A8 = ub, N8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
};
function R8(e, n) {
  return b(), k("svg", N8, [...n[0] || (n[0] = [L("path", { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" }, null, -1)])]);
}
var db = te({});
db.render = R8;
var V8 = db, { name: L8, n: F8, classes: U8 } = oe("result");
function H8(e, n) {
  return b(), k("div", { class: m(e.classes(e.n(), e.n("$--box"))) }, [
    U(e.$slots, "image", {}, () => [e.type ? (b(), k("div", {
      key: 0,
      class: m(e.n("image-container"))
    }, [L("div", {
      class: m(e.classes(e.n("image"), e.n(e.type))),
      style: J({
        width: e.circleSize,
        height: e.circleSize,
        borderWidth: e.borderSize
      })
    }, [(b(), we(Xt(e.type), {
      "border-size": e.borderSize,
      animation: e.animation
    }, null, 8, ["border-size", "animation"]))], 6)], 2)) : q("v-if", !0)]),
    U(e.$slots, "title", {}, () => [e.title ? (b(), k("div", {
      key: 0,
      class: m(e.n("title"))
    }, ve(e.title), 3)) : q("v-if", !0)]),
    U(e.$slots, "description", {}, () => [e.description ? (b(), k("div", {
      key: 0,
      class: m(e.n("description"))
    }, ve(e.description), 3)) : q("v-if", !0)]),
    e.$slots.footer ? (b(), k("div", {
      key: 0,
      class: m(e.n("footer"))
    }, [U(e.$slots, "footer")], 2)) : q("v-if", !0)
  ], 2);
}
var cb = te({
  name: L8,
  components: {
    Info: z8,
    Success: A8,
    Warning: V8,
    Error: S8,
    Question: I8,
    Empty: k8
  },
  props: ob,
  setup(e) {
    return {
      circleSize: C(() => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.9)`),
      borderSize: C(() => `calc(${e.imageSize ? ze(e.imageSize) : "var(--result-image-size)"} * 0.05)`),
      n: F8,
      classes: U8
    };
  }
});
cb.render = H8;
var ll = cb;
de(ll);
fe(ll, ob);
var FN = ll, uu = ll, fb = {
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
    class: m(e.classes(e.n(), e.n("$--box"))),
    style: J({
      justifyContent: e.padStartFlex(e.justify),
      alignItems: e.padStartFlex(e.align),
      margin: `${-e.average[0]}px ${-e.average[1]}px`
    }),
    onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [U(e.$slots, "default")], 6);
}
var vb = te({
  name: j8,
  props: fb,
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
vb.render = W8;
var sl = vb;
de(sl);
fe(sl, fb);
var UN = sl, du = sl, pb = {
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
}, mb = /* @__PURE__ */ Symbol("SEGMENTED_BUTTONS_BIND_BUTTON_KEY");
function q8() {
  const { bindChildren: e, childProviders: n, length: r } = Bn(mb);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function X8() {
  const { bindParent: e, parentProvider: n } = In(mb);
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
    class: m(e.classes(e.n(), e.n("$--box"), e.n(`--${e.segmentedButtons.size.value}`), [
      e.checked,
      e.n("--checked"),
      e.n("--unchecked")
    ], [e.formDisabled || e.disabled, e.n("--disabled")])),
    type: "button",
    onClick: n[0] || (n[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onFocus: n[1] || (n[1] = (i) => e.isFocusing = !0),
    onBlur: n[2] || (n[2] = (i) => e.isFocusing = !1)
  }, [L("div", { class: m(e.n("content")) }, [e.segmentedButtons.checkmark.value && e.checked ? U(e.$slots, "checkmark", {
    key: 0,
    checked: e.checked
  }, () => [j(r, {
    class: m(e.n("icon")),
    "var-segmented-button-cover": "",
    name: "check"
  }, null, 8, ["class"])]) : q("v-if", !0), U(e.$slots, "default", { checked: e.checked })], 2), j(t, {
    hovering: !e.formDisabled && !e.disabled && e.hovering,
    focusing: !e.formDisabled && !e.disabled && e.isFocusing
  }, null, 8, ["hovering", "focusing"])], 42, Q8)), [[o, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }], [
    a,
    e.handleHovering,
    "desktop"
  ]]);
}
var gb = te({
  name: G8,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarHoverOverlay: Gn,
    VarIcon: Je
  },
  props: pb,
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
gb.render = x8;
var ul = gb;
de(ul);
fe(ul, pb);
var HN = ul, Ma = ul, hb = {
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
  return b(), k("div", { class: m(e.n("wrap")) }, [L("div", {
    role: e.multiple ? "group" : "radiogroup",
    class: m([e.n(), e.hasError ? e.n("--error") : null])
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
  ]))), 128)) : q("v-if", !0), U(e.$slots, "default")], 10, rT), j(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])], 2);
}
var bb = te({
  name: _8,
  components: {
    VarFormDetails: Un,
    VarSegmentedButton: Ma,
    MaybeVNode: lr
  },
  props: hb,
  setup(e) {
    const { length: n, buttons: r, bindButtons: t } = q8(), { bindForm: o } = Kn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Jn(), u = {
      multiple: C(() => e.multiple),
      checkmark: C(() => e.checkmark),
      size: C(() => e.size),
      onClick: y
    }, d = {
      validate: R,
      reset: H,
      resetValidation: s
    };
    me(() => e.modelValue, O), me(() => n.value, O), t(u), S(o, d), xe(() => window, "keydown", h), xe(() => window, "keyup", g);
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
          w(D, "prev");
          return;
        }
        if (M.key === "ArrowRight") {
          w(D, "next");
          return;
        }
        M.key === "Enter" && r[D].toggle();
      }
    }
    function g(M) {
      const D = r.findIndex(({ isFocusing: E }) => E.value);
      D !== -1 && M.key === " " && (M.preventDefault(), r[D].toggle());
    }
    function w(M, D) {
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
    function y(M, D) {
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
    function O() {
      const M = c();
      r.forEach(({ sync: D }) => D(M));
    }
    function T(M) {
      S(e["onUpdate:modelValue"], M), S(e.onChange, M), $("onChange");
    }
    const z = C(() => !!a.value);
    function R() {
      return l(e.rules, c());
    }
    function H() {
      S(e["onUpdate:modelValue"], e.multiple ? [] : void 0), s();
    }
    return {
      errorMessage: a,
      n: eT,
      classes: nT,
      renderOptionLabel: v,
      getOptionValue: p,
      hasError: z,
      validate: R,
      reset: H,
      resetValidation: s
    };
  }
});
bb.render = tT;
var dl = bb;
de(dl);
fe(dl, hb);
var jN = dl, cu = dl, oT = Object.defineProperty, kv = Object.getOwnPropertySymbols, aT = Object.prototype.hasOwnProperty, iT = Object.prototype.propertyIsEnumerable, $v = (e, n, r) => n in e ? oT(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, lT = (e, n) => {
  for (var r in n || (n = {})) aT.call(n, r) && $v(e, r, n[r]);
  if (kv)
    for (var r of kv(n)) iT.call(n, r) && $v(e, r, n[r]);
  return e;
}, yb = lT({
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
    class: m(e.classes(e.n("filter"), [e.multiple, e.n("filter--multiple")]))
  }, null, 2)), [[qv, e.value]]);
}
var wb = te({
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
wb.render = dT;
var cT = wb, Cv = (e, n, r) => new Promise((t, o) => {
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
  me(() => n.value, () => Cv(null, null, function* () {
    l(), n.value && (yield Ne(), i(), a());
  }), { immediate: !0 }), Gt(l);
  function a() {
    var s;
    const u = e.value, d = u?.querySelectorAll(".var-option");
    t.value = d?.length ? Array.from(d).every((c) => Hr(c).display === "none") : !0, (s = r?.onAfterUpdate) == null || s.call(r);
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
var vT = 11;
function pT(e) {
  const n = k0(), r = P(0), t = C(() => ({ minWidth: `${Math.max(r.value, vT)}px` })), o = () => {
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
var mT = Object.defineProperty, gT = Object.defineProperties, hT = Object.getOwnPropertyDescriptors, Sv = Object.getOwnPropertySymbols, bT = Object.prototype.hasOwnProperty, yT = Object.prototype.propertyIsEnumerable, Pv = (e, n, r) => n in e ? mT(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, wT = (e, n) => {
  for (var r in n || (n = {})) bT.call(n, r) && Pv(e, r, n[r]);
  if (Sv)
    for (var r of Sv(n)) yT.call(n, r) && Pv(e, r, n[r]);
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
    class: m(e.n()),
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
    class: m(e.n("menu")),
    "popover-class": e.variant === "standard" && e.hint && !e.filterable ? e.n("--standard-menu-margin") : void 0,
    "offset-y": e.offsetY,
    disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
    placement: e.placement,
    "default-style": !1,
    onClickOutside: e.handleClickOutside
  }, {
    menu: ue(() => [L("div", {
      ref: "menuEl",
      class: m(e.classes(e.n("scroller"), e.n("$--scrollbar"), e.n("$-elevation--3")))
    }, [
      e.showEmpty ? U(e.$slots, "empty", { key: 0 }, () => [L("div", { class: m(e.n("empty")) }, ve((e.pt ? e.pt : e.t)("selectEmptyText")), 3)]) : q("v-if", !0),
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
      U(e.$slots, "default")
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
      "append-icon": ue(() => [U(e.$slots, "arrow-icon", {
        focus: e.isFocusing,
        menuOpen: e.showMenu
      }, () => [j(a, {
        class: m(e.classes(e.n("arrow"), [e.showMenu, e.n("--arrow-rotate")])),
        "var-select-cover": "",
        name: "menu-down",
        transition: 300
      }, null, 8, ["class"])]), U(e.$slots, "append-icon")]),
      default: ue(() => [L("div", {
        class: m(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: J({
          textAlign: e.textAlign,
          color: e.textColor
        })
      }, [
        L("div", { class: m(e.classes(e.n("label"), [e.filterable && e.showMenu, e.n("--label-focusing")])) }, [e.isShowSelected() ? U(e.$slots, "selected", { key: 0 }, () => [e.multiple ? (b(), k(Be, { key: 0 }, [e.chip ? (b(), k("div", {
          key: 0,
          class: m(e.n("chips"))
        }, [(b(!0), k(Be, null, Ye(e.labels, (d) => (b(), we(t, {
          key: d,
          class: m(e.n("chip")),
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
          class: m(e.n("values"))
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
          class: m(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
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
          class: m(e.n("filter-calculator"))
        }, ve(e.pattern), 3)) : q("v-if", !0)
      ], 6)]),
      _: 2
    }, [e.$slots["prepend-icon"] ? {
      name: "prepend-icon",
      fn: ue(() => [U(e.$slots, "prepend-icon")]),
      key: "0"
    } : void 0, e.pattern ? void 0 : {
      name: "clear-icon",
      fn: ue(({ clear: d }) => [U(e.$slots, "clear-icon", { clear: d })]),
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
var kb = te({
  name: CT,
  components: {
    VarIcon: Je,
    VarMenu: jt,
    VarChip: $a,
    VarOption: Da,
    VarFieldDecorator: ho,
    VarFormDetails: Un,
    VarSelectFilter: cT,
    MaybeVNode: lr
  },
  props: yb,
  setup(e) {
    var n;
    const r = P(!1), t = P(!1), o = P(null), a = P(null), i = P(""), l = P(!1), s = C(() => e.filterable), u = C(() => e.multiple), d = C(() => e.focusColor), c = C(() => Or(e.modelValue)), f = C(() => e.disabled || e.readonly ? "" : "pointer"), { bindForm: v, form: p } = Kn(), { length: h, options: g, bindOptions: w } = e6(), { label: $, labels: y, computeLabel: O, getSelectedValue: T } = rm({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => g,
      optionProvidersLength: () => h.value
    }), { errorMessage: z, validateWithTrigger: R, validate: H, resetValidation: M } = Jn(), D = C(() => p?.readonly.value || e.readonly), E = C(() => p?.disabled.value || e.disabled), B = P(null), N = P(null), A = C(() => e.variant === "standard" && !e.filterable ? "cover-top" : "bottom"), { t: I } = kr(), F = P(0), Q = C({
      get() {
        return F.value + (A.value === "bottom" ? 2 : 0);
      },
      set(Re) {
        F.value = Re;
      }
    }), X = C(() => {
      const { hint: Re, blurColor: sn, focusColor: _ } = e;
      if (!Re)
        return z.value ? "var(--field-decorator-error-color)" : r.value ? _ || "var(--field-decorator-focus-color)" : sn || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
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
      computeLabel: O,
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
      Re && Ne(He);
    }), w(ne), xe(() => window, "keydown", nn), xe(() => window, "keyup", qe), S(v, ne);
    function Y() {
      return s.value && !D.value && !E.value && !u.value;
    }
    function ie() {
      return s.value && !D.value && !E.value && u.value;
    }
    function Ee() {
      return !(c.value && !u.value || !u.value && (i.value || l.value));
    }
    function He() {
      var Re;
      Op(B.value, (Re = B.value) == null ? void 0 : Re.querySelector(".var-option--selected-color"));
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
      const je = g.find(({ label: Vn }) => Vn.value === Re), cn = he.filter((Vn) => {
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
      return H(e.rules, e.modelValue);
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
      errorMessage: z,
      formDisabled: p?.disabled,
      formReadonly: p?.readonly,
      label: $,
      labels: y,
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
kb.render = zT;
var cl = kb;
de(cl);
fe(cl, yb);
var YN = cl, fu = cl, $b = {
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
    class: m(e.n())
  }, [L("canvas", {
    ref: "canvas",
    height: e.canvasHeight,
    width: e.canvasWidth
  }, null, 8, IT)], 2);
}
var Cb = te({
  name: TT,
  props: $b,
  setup(e) {
    const n = P(), r = P(), t = P(0), o = P(0);
    let a = !1, i = null;
    xe(r, "touchstart", s), xe(r, "touchmove", u), xe(r, "touchend", d), wr(l), Tr(l);
    function l() {
      !r.value || !n.value || (i = r.value.getContext("2d"), t.value = n.value.offsetWidth, o.value = n.value.offsetHeight);
    }
    function s(h) {
      !i || !n.value || (h.preventDefault(), a = !0, i.beginPath(), i.lineWidth = Z(e.lineWidth), i.strokeStyle = e.strokeStyle === "currentColor" ? Hr(n.value).color : e.strokeStyle, S(e.onStart));
    }
    function u(h) {
      if (h.preventDefault(), !r.value || !i || !a) return;
      const g = h.touches[0].clientX, w = h.touches[0].clientY, $ = kn(r.value), y = g - $.left, O = w - $.top;
      i.lineTo(y, O), i.stroke(), S(e.onSigning);
    }
    function d(h) {
      a && (h.preventDefault(), a = !1, S(e.onEnd));
    }
    function c(h) {
      return e.dataUrlType === "jpg" ? h.toDataURL("image/jpeg") : h.toDataURL("image/png");
    }
    function f(h) {
      if (!h) return !0;
      const g = document.createElement("canvas");
      return g.width = h.width, g.height = h.height, c(h) === c(g);
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
Cb.render = BT;
var fl = Cb;
de(fl);
fe(fl, $b);
var KN = fl, vu = fl, Sb = {
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
  return b(), k("div", { class: m(e.classes(e.n("$--box"), e.n())) }, [
    e.loading ? q("v-if", !0) : (b(), k("div", {
      key: 0,
      class: m(e.n("data"))
    }, [U(e.$slots, "default")], 2)),
    e.loading && !e.fullscreen ? (b(), k("div", {
      key: 1,
      class: m(e.n("content"))
    }, [e.card ? (b(), k("div", {
      key: 0,
      class: m(e.n("card")),
      style: J({ height: e.toSizeUnit(e.cardHeight) })
    }, [L("div", { class: m(e.n("--animation")) }, null, 2)], 6)) : q("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (b(), k("div", {
      key: 1,
      class: m(e.n("article"))
    }, [e.avatar ? (b(), k("div", {
      key: 0,
      class: m(e.n("avatar")),
      style: J({
        width: e.toSizeUnit(e.avatarSize),
        height: e.toSizeUnit(e.avatarSize)
      })
    }, [L("div", { class: m(e.n("--animation")) }, null, 2)], 6)) : q("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (b(), k("div", {
      key: 1,
      class: m(e.n("section"))
    }, [e.title ? (b(), k("div", {
      key: 0,
      class: m(e.n("title")),
      style: J({ width: e.toSizeUnit(e.titleWidth) })
    }, [L("div", { class: m(e.n("--animation")) }, null, 2)], 6)) : q("v-if", !0), (b(!0), k(Be, null, Ye(e.toNumber(e.rows), (r, t) => (b(), k("div", {
      key: r,
      class: m(e.n("row")),
      style: J({ width: e.toSizeUnit(e.rowsWidth[t]) })
    }, [L("div", { class: m(e.n("--animation")) }, null, 2)], 6))), 128))], 2)) : q("v-if", !0)], 2)) : q("v-if", !0)], 2)) : q("v-if", !0),
    e.loading && e.fullscreen ? (b(), k("div", {
      key: 2,
      class: m(e.n("fullscreen")),
      style: J({ zIndex: e.toNumber(e.fullscreenZIndex) })
    }, [L("div", { class: m(e.n("--animation")) }, null, 2)], 6)) : q("v-if", !0)
  ], 2);
}
var Pb = te({
  name: DT,
  props: Sb,
  setup: () => ({
    n: MT,
    classes: AT,
    toSizeUnit: ze,
    toNumber: Z
  })
});
Pb.render = NT;
var vl = Pb;
de(vl);
fe(vl, Sb);
var WN = vl, pu = vl, On = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(On || {}), Ob = {
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
}, { name: RT, n: Ov, classes: VT } = oe("slider"), LT = [
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
  return b(), k("div", { class: m(e.classes(e.n(e.direction), e.n("$--box"))) }, [L("div", {
    ref: "sliderEl",
    class: m(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
    onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
  }, [L("div", { class: m(e.n(`${e.direction}-track`)) }, [L("div", {
    class: m(e.n(`${e.direction}-track-background`)),
    style: J({
      background: e.trackColor,
      height: e.isVertical ? "100%" : e.toSizeUnit(e.trackHeight),
      width: e.isVertical ? e.toSizeUnit(e.trackHeight) : "100%"
    })
  }, null, 6), L("div", {
    class: m(e.n(`${e.direction}-track-fill`)),
    style: J(e.getFillStyle)
  }, null, 6)], 2), (b(!0), k(Be, null, Ye(e.thumbList, (a) => (b(), k("div", {
    key: a.enumValue,
    class: m(e.n(`${e.direction}-thumb`)),
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
  }, [U(e.$slots, "button", { currentValue: a.text }, () => [
    Ke(L("div", {
      class: m(e.n(`${e.direction}-thumb-block`)),
      style: J({ background: e.thumbColor })
    }, null, 6), [[
      o,
      (i) => e.hover(i, a),
      "desktop"
    ]]),
    L("div", {
      class: m(e.classes(e.n(`${e.direction}-thumb-ripple`), [e.thumbsProps[a.enumValue].active, e.n(`${e.direction}-thumb-ripple--active`)])),
      style: J({ background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0 })
    }, [j(r, {
      hovering: !e.isDisabled && a.hovering,
      focusing: !e.isDisabled && a.focusing
    }, null, 8, ["hovering", "focusing"])], 6),
    L("div", {
      class: m(e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])),
      style: J({
        background: e.labelColor,
        color: e.labelTextColor,
        height: e.toSizeUnit(e.thumbSize),
        width: e.toSizeUnit(e.thumbSize)
      })
    }, [L("span", null, ve(a.text), 1)], 6)
  ])], 46, LT))), 128))], 2), j(t, {
    "error-message": e.errorMessage,
    class: m(e.n("form")),
    "var-slider-cover": ""
  }, null, 8, ["error-message", "class"])], 2);
}
var zb = te({
  name: RT,
  components: {
    VarFormDetails: Un,
    VarHoverOverlay: Gn
  },
  directives: { Hover: jn },
  props: Ob,
  setup(e) {
    const n = P(0), r = P(null), t = P(!1), o = C(() => Z(e.max) - Z(e.min)), a = C(() => n.value / o.value * Z(e.step)), i = C(() => e.disabled || f?.disabled.value), l = C(() => e.readonly || f?.readonly.value), s = C(() => e.direction === "vertical"), u = P(!1), d = P(!1), { bindForm: c, form: f } = Kn(), { errorMessage: v, validateWithTrigger: p, validate: h, resetValidation: g } = Jn(), { hovering: w, handleHovering: $ } = ur(), { hovering: y, handleHovering: O } = ur(), T = C(() => {
      const { modelValue: K, range: re } = e;
      let ye = [];
      return re && We(K) ? ye = [{
        value: F(K[0]),
        enumValue: On.First,
        text: Q(K[0]),
        hovering: w.value,
        focusing: u.value,
        handleHovering: $,
        handleFocusing(Pe) {
          u.value = Pe;
        }
      }, {
        value: F(K[1]),
        enumValue: On.Second,
        text: Q(K[1]),
        hovering: y.value,
        focusing: d.value,
        handleHovering: O,
        handleFocusing(Pe) {
          d.value = Pe;
        }
      }] : nr(K) && (ye = [{
        value: F(K),
        enumValue: On.First,
        text: Q(K),
        hovering: w.value,
        focusing: u.value,
        handleHovering: $,
        handleFocusing(Pe) {
          u.value = Pe;
        }
      }]), ye;
    }), z = C(() => {
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
    let H;
    S(c, {
      reset: qe,
      validate: D,
      resetValidation: g
    }), me([() => e.modelValue, () => e.step], ([K, re]) => {
      !Ee() || !He() || t.value || nn(K, Z(re));
    }), me(n, () => nn()), En(() => {
      !Ee() || !He() || M();
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
      return re ? s.value ? n.value - (K.clientY - kn(re).top) : K.clientX - Ay(re) : 0;
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
      if (M(), i.value || (R[re].active = !0), H = re, G(), i.value || l.value) return;
      S(e.onStart), t.value = !0;
      const { clientX: ye, clientY: Pe } = K.touches[0];
      R[re].startPosition = s.value ? Pe : ye;
    }
    function Oe(K) {
      if (Ze(K), i.value || l.value || !t.value) return;
      const { startPosition: re, currentOffset: ye } = R[H], { clientX: Pe, clientY: Ge } = K.touches[0];
      let rn = (s.value ? re - Ge : Pe - re) + ye;
      rn <= 0 ? rn = 0 : rn >= n.value && (rn = n.value), Te(rn, H);
    }
    function Y() {
      ne();
      const { range: K, modelValue: re, onEnd: ye, step: Pe, min: Ge } = e;
      if (i.value || (R[H].active = !1), i.value || l.value) return;
      let rn = [];
      R[H].currentOffset = R[H].percentValue * a.value;
      const mn = R[H].percentValue * Z(Pe) + Z(Ge);
      K && We(re) && (rn = H === On.First ? [mn, re[1]] : [re[0], mn]), S(ye, K ? rn : mn), t.value = !1;
    }
    function ie(K) {
      if (i.value || l.value || K.target.closest(`.${Ov("thumb")}`)) return;
      const re = N(K), ye = ce(re);
      H = ye, Te(re, ye), Y();
    }
    function Ee() {
      return Z(e.step) <= 0 ? (U0("Slider", '"step" should be > 0'), !1) : !0;
    }
    function He() {
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
      S(e["onUpdate:modelValue"], K), g();
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
      getFillStyle: z,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: R,
      thumbList: T,
      handleFocus: be,
      handleBlur: ee,
      n: Ov,
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
zb.render = FT;
var pl = zb;
de(pl);
fe(pl, Ob);
var qN = pl, mu = pl, UT = Object.defineProperty, HT = Object.defineProperties, jT = Object.getOwnPropertyDescriptors, zv = Object.getOwnPropertySymbols, YT = Object.prototype.hasOwnProperty, KT = Object.prototype.propertyIsEnumerable, Tv = (e, n, r) => n in e ? UT(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, WT = (e, n) => {
  for (var r in n || (n = {})) YT.call(n, r) && Tv(e, r, n[r]);
  if (zv)
    for (var r of zv(n)) KT.call(n, r) && Tv(e, r, n[r]);
  return e;
}, qT = (e, n) => HT(e, jT(n)), fd = {
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
    class: m(e.n()),
    style: J({
      pointerEvents: e.isForbidClick ? "auto" : "none",
      zIndex: e.zIndex
    })
  }, [L("div", {
    class: m(e.classes(e.n("wrapper"), e.n(`wrapper-${e.position}`), e.formatElevation(e.elevation, 4), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n(`wrapper-${e.type}`)])),
    style: J({ zIndex: e.zIndex })
  }, [
    L("div", { class: m([e.n("content"), e.contentClass]) }, [U(e.$slots, "default", {}, () => [Le(ve(e.content), 1)])], 2),
    e.iconName || e.type === "loading" || e.$slots.icon ? (b(), k("div", {
      key: 0,
      class: m(e.n("icon"))
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
      U(e.$slots, "icon")
    ], 2)) : q("v-if", !0),
    e.$slots.action ? (b(), k("div", {
      key: 1,
      class: m(e.n("action"))
    }, [U(e.$slots, "action")], 2)) : q("v-if", !0)
  ], 6)], 6)), [[yr, e.show]]);
}
var Tb = te({
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
      SNACKBAR_TYPE: Bb,
      zIndex: r,
      iconName: o,
      isForbidClick: t,
      n: XT,
      classes: GT,
      formatElevation: Pn
    };
  }
});
Tb.render = JT;
var Eb = Tb, { name: QT, n: xT } = oe("snackbar");
function _T(e, n) {
  const r = x("var-snackbar-core");
  return b(), we(Ur, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [j(bn, {
    name: `${e.n()}-fade`,
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: ue(() => [j(r, Xe(e.$props, { class: e.n("transition") }), Pr({
      default: ue(() => [U(e.$slots, "default")]),
      _: 2
    }, [e.$slots.icon ? {
      name: "icon",
      fn: ue(() => [U(e.$slots, "icon")]),
      key: "0"
    } : void 0, e.$slots.action ? {
      name: "action",
      fn: ue(() => [U(e.$slots, "action")]),
      key: "1"
    } : void 0]), 1040, ["class"])]),
    _: 3
  }, 8, [
    "name",
    "onAfterEnter",
    "onAfterLeave"
  ])], 8, ["to", "disabled"]);
}
var Ib = te({
  name: QT,
  components: { VarSnackbarCore: Eb },
  props: fd,
  setup() {
    const { disabled: e } = zt();
    return {
      disabled: e,
      n: xT
    };
  }
});
Ib.render = _T;
var ml = Ib, e5 = Object.defineProperty, Ev = Object.getOwnPropertySymbols, n5 = Object.prototype.hasOwnProperty, r5 = Object.prototype.propertyIsEnumerable, Iv = (e, n, r) => n in e ? e5(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Eo = (e, n) => {
  for (var r in n || (n = {})) n5.call(n, r) && Iv(e, r, n[r]);
  if (Ev)
    for (var r of Ev(n)) r5.call(n, r) && Iv(e, r, n[r]);
  return e;
}, Bb = [
  "loading",
  "success",
  "warning",
  "info",
  "error"
], Bv = 0, gu = !1, Db, Io = !1, Mb = {
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
}, br = $n([]), vd = Mb, t5 = {
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
      return j(Eb, Xe(r, {
        key: n,
        style: a,
        "data-id": n,
        _update: t,
        show: r.show,
        "onUpdate:show": (d) => r.show = d
      }), u);
    });
    return j(g0, Xe(t5, {
      style: { zIndex: vr.zIndex },
      onAfterEnter: a5,
      onAfterLeave: i5
    }), { default: () => [e] });
  };
} }, Fr = function(e) {
  const n = s5(e), r = $n(Eo(Eo({}, vd), n));
  r.show = !0, gu || (gu = !0, Db = Jt(o5).unmountInstance);
  const { length: t } = br, o = {
    id: Bv++,
    reactiveSnackOptions: r
  };
  return t === 0 || Io ? l5(o) : u5(r, `update-${Bv}`), { clear() {
    !Io && br.length ? br[0].reactiveSnackOptions.show = !1 : r.show = !1;
  } };
};
Bb.forEach((e) => {
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
  vd = Mb;
};
function a5(e) {
  const n = e.getAttribute("data-id"), r = br.find((t) => t.id === Z(n));
  r && S(r.reactiveSnackOptions.onOpened);
}
function i5(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), r = br.find((t) => t.id === Z(n));
  r && (r.animationEnd = !0, S(r.reactiveSnackOptions.onClosed)), br.every((t) => t.animationEnd) && (S(Db), br = $n([]), gu = !1);
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
var XN = ml, hu = Fr, Ab = {
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
].includes(e), { name: v5, n: aa, classes: Dv } = oe("space");
function p5(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : We(e) ? e.map(ze) : [ze(e), ze(e)];
}
var gl = te({
  name: v5,
  props: Ab,
  setup(e, { slots: n }) {
    return () => {
      var r;
      const { inline: t, justify: o, align: a, wrap: i, direction: l, size: s } = e, u = (r = S(n.default)) != null ? r : [], [d, c] = p5(s, f5(s)), f = Va(u), v = f.length - 1, p = f.map((h, g) => {
        var w;
        const $ = c5(d, c, {
          direction: l,
          justify: o,
          index: g,
          lastIndex: v
        });
        return j("div", {
          class: Dv([l === "column", aa("--auto")]),
          key: (w = h.key) != null ? w : void 0,
          style: { margin: $ }
        }, [h]);
      });
      return j("div", {
        class: Dv(aa(), aa("$--box"), [t, aa("--inline")]),
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
fe(gl, Ab);
var GN = gl, bu = gl, Nb = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Fe(pn, "name"),
  inactiveIcon: Fe(pn, "name"),
  activeIconNamespace: Fe(pn, "namespace"),
  currentIconNamespace: Fe(pn, "namespace"),
  inactiveIconNamespace: Fe(pn, "namespace")
}, Rb = /* @__PURE__ */ Symbol("STEPS_BIND_STEP_KEY");
function m5() {
  const { bindChildren: e, childProviders: n } = Bn(Rb);
  return {
    step: n,
    bindStep: e
  };
}
function g5() {
  const { parentProvider: e, index: n, bindParent: r } = In(Rb);
  return rr(!!r, "Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var { name: h5, n: b5, classes: y5 } = oe("step"), w5 = { key: 3 };
function k5(e, n) {
  const r = x("var-icon");
  return b(), k("div", { class: m(e.n()) }, [L("div", { class: m(e.n(e.direction)) }, [
    L("div", {
      class: m(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
      style: J({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
      onClick: n[0] || (n[0] = (...t) => e.click && e.click(...t))
    }, [e.isActive ? (b(), k("span", {
      key: 0,
      class: m(e.n("icon"))
    }, [U(e.$slots, "active-icon", {}, () => [j(r, {
      name: e.activeIcon,
      namespace: e.activeIconNamespace
    }, null, 8, ["name", "namespace"])])], 2)) : e.isCurrent && (e.$slots["current-icon"] || e.currentIcon) ? (b(), k("span", {
      key: 1,
      class: m(e.n("icon"))
    }, [U(e.$slots, "current-icon", {}, () => [j(r, {
      name: e.currentIcon,
      namespace: e.currentIconNamespace
    }, null, 8, ["name", "namespace"])])], 2)) : e.$slots["inactive-icon"] || e.inactiveIcon ? (b(), k("span", {
      key: 2,
      class: m(e.n("icon"))
    }, [U(e.$slots, "inactive-icon", {}, () => [j(r, {
      name: e.inactiveIcon,
      namespace: e.inactiveIconNamespace
    }, null, 8, ["name", "namespace"])])], 2)) : (b(), k("span", w5, ve(e.index + 1), 1))], 6),
    e.$slots.default ? (b(), k("div", {
      key: 0,
      class: m(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
      onClick: n[1] || (n[1] = (...t) => e.click && e.click(...t))
    }, [U(e.$slots, "default")], 2)) : q("v-if", !0),
    L("div", { class: m(e.n(`${e.direction}-line`)) }, null, 2)
  ], 2)], 2);
}
var Vb = te({
  name: h5,
  components: { VarIcon: Je },
  props: Nb,
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
Vb.render = k5;
var hl = Vb;
de(hl);
fe(hl, Nb);
var ZN = hl, yu = hl, Lb = {
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
    class: m(e.n()),
    style: J({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
  }, [U(e.$slots, "default")], 6);
}
var Fb = te({
  name: $5,
  props: Lb,
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
Fb.render = S5;
var bl = Fb;
de(bl);
fe(bl, Lb);
var JN = bl, wu = bl, Ub = {
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
  props: Ub,
  setup(e, { slots: n }) {
    return () => Fn(e.tag, {
      class: O5(),
      style: Pp(e.styleVars)
    }, S(n.default));
  }
}), Hb = "varlet-style-vars";
function Mv() {
  const e = document.head.querySelector(`#${Hb}`);
  e && document.head.removeChild(e);
}
function z5(e) {
  const n = document.createElement("style");
  n.id = Hb, n.innerHTML = e, document.head.appendChild(n);
}
function wl(e) {
  if (e == null) {
    Mv();
    return;
  }
  const n = Pp(e ?? {}), r = Object.entries(n).reduce((t, [o, a]) => (t += `${o}:${a};`, t), `:root:root {
`);
  Mv(), z5(`${r}
}`);
}
wl.Component = yl;
de(yl);
de(yl, wl);
fe(wl, Ub);
var QN = yl, ku = wl, jb = {
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
    class: m(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [L("div", {
    ref: "switchRef",
    class: m(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
    style: J(e.styleComputed.switch),
    onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
  }, [L("div", {
    style: J(e.styleComputed.track),
    class: m(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
  }, null, 6), Ke((b(), k("div", {
    class: m(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
    style: J(e.styleComputed.ripple),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
  }, [L("div", {
    style: J(e.styleComputed.handle),
    class: m(e.classes(e.n("handle"), e.formatElevation(e.buttonElevation, 2), [e.isActive, e.n("handle--active")], [e.errorMessage && !e.variant, e.n("handle--error")], [e.hovering, e.n("handle--hover")]))
  }, [e.loading ? (b(), k("span", {
    key: 0,
    class: m(e.n("loading")),
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
var Yb = te({
  name: T5,
  components: {
    VarFormDetails: Un,
    VarHoverOverlay: Gn
  },
  directives: {
    Ripple: vn,
    Hover: jn
  },
  props: jb,
  setup(e) {
    const n = P(null), r = P(!1), { bindForm: t, form: o } = Kn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Jn(), { hovering: u, handleHovering: d } = ur(), c = C(() => e.modelValue === e.activeValue), f = C(() => {
      const { size: T, color: z, closeColor: R, loadingColor: H, variant: M } = e;
      return {
        handle: {
          width: _n(T),
          height: _n(T),
          backgroundColor: c.value ? z : R,
          color: H
        },
        ripple: {
          left: c.value ? _n(T, 0.5) : `-${_n(T, M ? 1 / 3 : 0.5)}`,
          color: c.value ? z : R || "currentColor",
          width: _n(T, 2),
          height: _n(T, 2)
        },
        track: {
          width: _n(T, M ? 13 / 6 : 1.9),
          height: _n(T, M ? 4 / 3 : 0.72),
          borderRadius: _n(T, 2 / 3),
          filter: c.value || a?.value ? void 0 : `brightness(${M ? 1 : 0.6})`,
          backgroundColor: c.value ? z : R,
          borderWidth: M && !c.value ? _n(T, 1 / 12) : void 0
        },
        switch: {
          width: _n(T, M ? 13 / 6 : 2),
          height: _n(T, M ? 4 / 3 : 1.2)
        }
      };
    }), v = C(() => _n(e.size, 0.8));
    S(t, {
      reset: O,
      validate: g,
      resetValidation: s
    }), xe(() => window, "keydown", p), xe(() => window, "keyup", h);
    function p(T) {
      r.value && ((T.key === " " || T.key === "Enter") && Ze(T), T.key === "Enter" && n.value.click());
    }
    function h(T) {
      !r.value || T.key !== " " || (Ze(T), n.value.click());
    }
    function g() {
      return l(e.rules, e.modelValue);
    }
    function w(T) {
      Ne(() => {
        const { validateTrigger: z, rules: R, modelValue: H } = e;
        i(z, T, R, H);
      });
    }
    function $(T) {
      const { onClick: z, onChange: R, disabled: H, loading: M, readonly: D, activeValue: E, inactiveValue: B, lazyChange: N, "onUpdate:modelValue": A, onBeforeChange: I } = e;
      if (H || o?.disabled.value || (S(z, T), M || D || o?.readonly.value)) return;
      const F = c.value ? B : E;
      N ? S(I, F, (Q) => {
        S(A, Q), w("onLazyChange");
      }) : (S(A, F), S(R, F), w("onChange"));
    }
    function y(T) {
      e.disabled || o?.disabled.value || d(T);
    }
    function O() {
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
      hover: y
    };
  }
});
Yb.render = M5;
var kl = Yb;
de(kl);
fe(kl, jb);
var xN = kl, $u = kl, Kb = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: V()
}, Wb = /* @__PURE__ */ Symbol("TABS_BIND_TAB_KEY");
function A5() {
  const { childProviders: e, bindChildren: n, length: r } = Bn(Wb);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function N5() {
  const { parentProvider: e, bindParent: n, index: r } = In(Wb);
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
    class: m(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
    style: J({ color: e.computeColorStyle() }),
    onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
  }, [U(e.$slots, "default")], 6)), [[r, { disabled: e.disabled || !e.ripple }]]);
}
var qb = te({
  name: R5,
  directives: { Ripple: vn },
  props: Kb,
  setup(e) {
    const n = P(null), r = C(() => n.value), t = C(() => e.name), o = C(() => e.disabled), { index: a, tabs: i, bindTabs: l } = N5(), { onTabClick: s, active: u, activeColor: d, inactiveColor: c, disabledColor: f, itemDirection: v, resize: p } = i, h = {
      name: t,
      index: a,
      disabled: o,
      element: r
    };
    l(h), me(() => [e.name, e.disabled], p);
    function g() {
      return e.name != null ? u.value === e.name : u.value === a?.value;
    }
    function w() {
      return e.disabled ? f.value : g() ? d.value : c.value;
    }
    function $() {
      return e.disabled ? ia("$-tab--disabled") : g() ? ia("$-tab--active") : ia("$-tab--inactive");
    }
    function y(O) {
      const { disabled: T, name: z, onClick: R } = e;
      T || (S(R, z ?? a.value, O), s(h));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: c,
      itemDirection: v,
      n: ia,
      classes: V5,
      computeColorStyle: w,
      computeColorClass: $,
      handleClick: y
    };
  }
});
qb.render = L5;
var $l = qb;
de($l);
fe($l, Kb);
var _N = $l, Cu = $l, Xb = { name: [String, Number] }, { name: F5, n: U5, classes: H5 } = oe("tab-item");
function j5(e, n) {
  const r = x("var-swipe-item");
  return b(), we(r, {
    class: m(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: ue(() => [U(e.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}
var Gb = te({
  name: F5,
  components: { VarSwipeItem: Oo },
  props: Xb,
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
      n: U5,
      classes: H5
    };
  }
});
Gb.render = j5;
var Cl = Gb;
de(Cl);
fe(Cl, Xb);
var e7 = Cl, Su = Cl, Zb = {
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
  return b(), k("div", { class: m(e.classes(e.n(), [!e.plain, e.formatElevation(e.elevation, 1)], e.n("$--box"), [e.surfaceLow, e.n("--surface-low")], [e.bordered, e.n("--bordered")], [e.plain, e.n("--plain")])) }, [L("div", {
    class: m(e.classes(e.n("main"), e.n("$--scrollbar"))),
    style: J({ "max-height": e.toSizeUnit(e.scrollerHeight) })
  }, [L("table", {
    class: m(e.n("table")),
    style: J({ width: e.toSizeUnit(e.fullWidth) })
  }, [U(e.$slots, "default")], 6)], 6), e.$slots.footer ? (b(), k("div", {
    key: 0,
    class: m(e.n("footer"))
  }, [U(e.$slots, "footer")], 2)) : q("v-if", !0)], 2);
}
var Jb = te({
  name: Y5,
  props: Zb,
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
Jb.render = q5;
var Sl = Jb;
de(Sl);
fe(Sl, Zb);
var n7 = Sl, Pu = Sl, Qb = {
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
}, Av = (e, n, r) => new Promise((t, o) => {
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
      class: m(e.classes(e.n("tab-wrap"), [e.localScrollable, e.n(`--layout-${e.layoutDirection}-scrollable`)], e.n(`--layout-${e.layoutDirection}`)))
    }, [U(e.$slots, "default"), L("div", {
      class: m(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
      style: J({
        width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
        height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
        transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
      })
    }, [L("div", {
      class: m(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
      style: J({ background: e.indicatorColor || e.activeColor })
    }, null, 6)], 6)], 2)], 16)]),
    _: 3
  }, 8, [
    "css-mode",
    "offset-top",
    "z-index"
  ]);
}
var xb = te({
  name: X5,
  components: { VarSticky: To },
  inheritAttrs: !1,
  props: Qb,
  setup(e) {
    const n = P("0px"), r = P("0px"), t = P("0px"), o = P("0px"), a = P(!1), i = P(null), l = C(() => e.active), s = C(() => e.activeColor), u = C(() => e.inactiveColor), d = C(() => e.disabledColor), c = C(() => e.itemDirection), f = P(null), v = C(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: p, bindTabList: h, length: g } = A5();
    h({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: c,
      resize: H,
      onTabClick: w
    }), me(() => g.value, () => Av(null, null, function* () {
      yield Xn(), H();
    })), me(() => [e.active, e.scrollable], H), vt(H), wr(H);
    function w(D) {
      var E;
      const B = (E = D.name.value) != null ? E : D.index.value, { active: N, onChange: A, onClick: I } = e;
      S(e["onUpdate:active"], B), S(I, B), B !== N && S(A, B);
    }
    function $() {
      return p.find(({ name: D }) => e.active === D.value);
    }
    function y(D) {
      return p.find(({ index: E }) => (D ?? e.active) === E.value);
    }
    function O() {
      if (g.value === 0) return;
      const { active: D } = e;
      if (nr(D)) {
        const E = hn(D, 0, g.value - 1);
        return S(e["onUpdate:active"], E), y(E);
      }
    }
    function T() {
      a.value = e.scrollable === "always" || p.length >= 5;
    }
    function z({ element: D }) {
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
    function H() {
      const D = $() || y() || O();
      !D || D.disabled.value || (T(), z(D), R(D));
    }
    function M() {
      return Av(this, null, function* () {
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
      resize: H,
      resizeSticky: M,
      formatElevation: Pn
    };
  }
});
xb.render = J5;
var Pl = xb;
de(Pl);
fe(Pl, Qb);
var r7 = Pl, Ou = Pl, _b = {
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
    class: m(e.n()),
    loop: e.loop,
    duration: e.animated ? void 0 : 0,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: ue(() => [U(e.$slots, "default")]),
    _: 3
  }, 8, [
    "class",
    "loop",
    "duration",
    "touchable",
    "onChange"
  ]);
}
var e0 = te({
  name: x5,
  components: { VarSwipe: Po },
  props: _b,
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
e0.render = eE;
var Ol = e0;
de(Ol);
fe(Ol, _b);
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
}, UE = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, HE = {
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
}, wI = { "--watermark-content-color": "#ffffff" }, kI = Object.defineProperty, Nv = Object.getOwnPropertySymbols, $I = Object.prototype.hasOwnProperty, CI = Object.prototype.propertyIsEnumerable, Rv = (e, n, r) => n in e ? kI(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, $e = (e, n) => {
  for (var r in n || (n = {})) $I.call(n, r) && Rv(e, r, n[r]);
  if (Nv)
    for (var r of Nv(n)) CI.call(n, r) && Rv(e, r, n[r]);
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
}, cE), rE), vE), fE), gI), kE), $E), iI), mI), vI), XE), CE), nE), mE), lE), yI), hE), ZE), fI), dI), KE), pI), OE), JE), pE), rI), tI), SE), qE), tE), uE), LE), eI), dE), oE), AE), GE), HE), wI), UE), FE), aE), iE), sE), bE), yE), wE), QE), xE), PE), zE), TE), EE), IE), BE), DE), ME), jE), NE), RE), VE), YE), WE), _E), nI), lI), sI), uI), cI), hI), bI), oI), gE), aI), PI = {
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
}, UI = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, HI = {
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
}, UB = {
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
}, HB = {
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
}, KB = { "--watermark-content-color": "#ffffff" }, WB = Object.defineProperty, Vv = Object.getOwnPropertySymbols, qB = Object.prototype.hasOwnProperty, XB = Object.prototype.propertyIsEnumerable, Lv = (e, n, r) => n in e ? WB(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Ce = (e, n) => {
  for (var r in n || (n = {})) qB.call(n, r) && Lv(e, r, n[r]);
  if (Vv)
    for (var r of Vv(n)) XB.call(n, r) && Lv(e, r, n[r]);
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
}, NI), OI), _I), sB), dB), uB), ZI), AI), oB), VI), mB), TI), JI), LI), wB), OB), zB), RI), FI), BI), HB), jB), bB), FB), VB), AB), GI), LB), pB), KB), HI), SB), zI), DI), MI), DB), PI), XI), yB), hB), gB), QI), II), TB), cB), YI), KI), RB), BB), YB), UB), WI), qI), CB), kB), $B), IB), EI), jI), xI), eB), nB), rB), tB), fB), aB), iB), lB), vB), PB), MB), NB), UI), EB), ZB = {
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
}, UD = {
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
}, HD = {
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
}, pM = { "--watermark-content-color": "#808080" }, mM = Object.defineProperty, Fv = Object.getOwnPropertySymbols, gM = Object.prototype.hasOwnProperty, hM = Object.prototype.propertyIsEnumerable, Uv = (e, n, r) => n in e ? mM(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, Se = (e, n) => {
  for (var r in n || (n = {})) gM.call(n, r) && Uv(e, r, n[r]);
  if (Fv)
    for (var r of Fv(n)) hM.call(n, r) && Uv(e, r, n[r]);
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
}, aD), JB), CD), DD), AD), MD), yD), oD), TD), lD), FD), xB), wD), sD), KD), JD), QD), iD), uD), cM), fM), uM), lM), sM), cD), GD), rD), tD), rM), ZB), hD), YD), HD), UD), kD), eD), xD), ND), nM), vM), dM), mD), gD), iM), XD), WD), qD), _B), nD), fD), vD), pD), bD), $D), SD), PD), OD), zD), RD), ED), ID), BD), VD), LD), jD), ZD), eM), tM), oM), aM), pM), QB), dD), _D);
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
], n0 = {
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
}, r0 = (e, n) => e === "24hr" || n === "am", md = (e, n, r) => {
  const t = gr.findIndex((a) => Z(a) === Z(r)), o = r0(e, n) ? r : er[t];
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
}, t0 = (e) => {
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
    const { hour: p, minute: h } = sr(l), { hour: g, minute: w } = sr(s);
    f = g === c && t < w || p === c && t > h;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (r = e.allowedTime) == null ? void 0 : r.minutes(t)), f || v;
}, o0 = (e) => {
  var n, r;
  const { time: t, format: o, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: d } = e, { hourStr: c, hourNum: f } = md(o, a, i);
  let v = !1, p = !1;
  if (d.includes(c)) return !0;
  if (s && !u) {
    const { hour: h, minute: g, second: w } = sr(s);
    v = h === f && g < l || g === l && t > w;
  }
  if (!s && u) {
    const { hour: h, minute: g, second: w } = sr(u);
    v = h === f && g > l || g === l && t > w;
  }
  if (s && u) {
    const { hour: h, minute: g, second: w } = sr(s), { hour: $, minute: y, second: O } = sr(u);
    v = h === f && g < l || $ === f && y > l || h === f && g === l && t > w || $ === f && y === l && t < O;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(t)), v || p;
}, { n: $M, classes: CM } = oe("time-picker");
function SM(e, n) {
  return b(), k("div", { class: m(e.n("clock")) }, [
    L("div", {
      class: m(e.n("clock-hand")),
      style: J(e.handStyle)
    }, null, 6),
    (b(!0), k(Be, null, Ye(e.timeScales, (r, t) => (b(), k("div", {
      key: r,
      class: m(e.classes(e.n("clock-item"), [e.isActive(t, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
      style: J(e.getStyle(t, r, !1))
    }, ve(r), 7))), 128)),
    e.format === "24hr" && e.type === "hour" ? (b(), k("div", {
      key: 0,
      ref: "inner",
      class: m(e.n("clock-inner"))
    }, [(b(!0), k(Be, null, Ye(e.hours24, (r, t) => (b(), k("div", {
      key: r,
      class: m(e.classes(e.n("clock-item"), [e.isActive(t, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
      style: J(e.getStyle(t, r, !0))
    }, ve(r), 7))), 128))], 2)) : q("v-if", !0)
  ], 2);
}
var a0 = te({
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
    }), l = C(() => e.type === "hour" ? gr : Hv), s = (h, g) => {
      h = h ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const w = e.type === "minute" ? t0 : o0, $ = {
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
      return g && e.type === "minute" && Reflect.deleteProperty($, "minute"), w($);
    }, u = () => {
      if (i.value === void 0) return e.color;
      const h = e.isInner ? er[i.value] : l.value[i.value];
      return l.value === Hv ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : c(h) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, d = (h, g) => g ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), c = (h) => {
      if (e.type === "hour") {
        if (r0(e.format, e.ampm)) return t.value.includes(h);
        const g = gr.findIndex((w) => w === h);
        return o.value.includes(g);
      }
      return s(h, !0);
    }, f = (h, g, w) => {
      const $ = 2 * Math.PI / 12 * h - Math.PI / 2, y = 50 * (1 + Math.cos($)), O = 50 * (1 + Math.sin($)), T = () => d(h, w) ? c(g) ? {
        backgroundColor: "var(--time-picker-clock-item-disable-background)",
        color: "var(--time-picker-clock-item-disable-color)"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: z, color: R } = T();
      return {
        left: `${y}%`,
        top: `${O}%`,
        backgroundColor: z,
        color: R
      };
    }, v = () => {
      const { width: h, height: g } = kn(r.value);
      return {
        width: h,
        height: g
      };
    }, p = () => {
      if (i.value !== void 0)
        return Zr((e.ampm === "am" ? gr : er)[i.value], 2, "0");
    };
    return me([i, () => e.isInner], ([h, g], [w, $]) => {
      if (h === w && g === $ || e.type !== "hour" || i.value === void 0) return;
      const y = g ? er[i.value] : p(), O = e.useSeconds ? `:${e.time.second}` : "", T = `${y}:${e.time.minute}${O}`;
      e.preventNextUpdate || n("update", T), n("change-prevent-update");
    }), me(() => e.rad, (h, g) => {
      if (e.type === "hour" || h === void 0 || g === void 0) return;
      const w = h / 6 >= 0 ? h / 6 : h / 6 + 60;
      if (w === (g / 6 >= 0 ? g / 6 : g / 6 + 60)) return;
      let $;
      const { hourStr: y } = md(e.format, e.ampm, e.time.hour);
      if (e.type === "minute" && ($ = `${y}:${ln().minute(w).format("mm")}${e.useSeconds ? `:${e.time.second}` : ""}`), e.type === "second") {
        const O = ln().second(w).format("ss"), T = e.useSeconds ? `:${O}` : "";
        $ = `${y}:${e.time.minute}${T}`;
      }
      n("update", $);
    }), me([
      () => e.max,
      () => e.min,
      () => e.allowedTime
    ], ([h, g, w]) => {
      if (t.value = [], h && !g) {
        const { hour: $ } = sr(h), y = gr.filter((T) => Z(T) > $), O = er.filter((T) => Z(T) > $);
        t.value = [...y, ...O];
      }
      if (!h && g) {
        const { hour: $ } = sr(g), y = gr.filter((T) => Z(T) < $), O = er.filter((T) => Z(T) < $);
        t.value = [...y, ...O];
      }
      if (h && g) {
        const { hour: $ } = sr(h), { hour: y } = sr(g), O = gr.filter((z) => Z(z) < y || Z(z) > $), T = er.filter((z) => Z(z) < y || Z(z) > $);
        t.value = [...O, ...T];
      }
      if (w?.hours) {
        const { hours: $ } = w, y = gr.filter((T) => !$(Z(T))), O = er.filter((T) => !$(Z(T)));
        t.value = [.../* @__PURE__ */ new Set([
          ...t.value,
          ...y,
          ...O
        ])];
      }
      o.value = t.value.map(($) => er.findIndex((y) => $ === y)).filter(($) => $ >= 0);
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
a0.render = SM;
var PM = a0, { name: OM, n: zM, classes: TM } = oe("time-picker");
function EM(e, n) {
  var r;
  const t = x("clock");
  return b(), k("div", {
    ref: "picker",
    class: m(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
  }, [
    L("div", {
      class: m(e.n("title")),
      style: J({ background: e.titleColor || e.color })
    }, [L("div", { class: m(e.n("title-hint")) }, ve((r = e.hint) != null ? r : (e.pt ? e.pt : e.t)("timePickerHint")), 3), L("div", { class: m(e.n("title-time-container")) }, [L("div", { class: m(e.n("title-time")) }, [
      L("div", {
        class: m(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
        onClick: n[0] || (n[0] = (o) => e.checkPanel("hour"))
      }, ve(e.time.hour), 3),
      L("span", { class: m(e.n("title-splitter")) }, ":", 2),
      L("div", {
        class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
        onClick: n[1] || (n[1] = (o) => e.checkPanel("minute"))
      }, ve(e.time.minute), 3),
      e.useSeconds ? (b(), k("span", {
        key: 0,
        class: m(e.n("title-splitter"))
      }, ":", 2)) : q("v-if", !0),
      e.useSeconds ? (b(), k("div", {
        key: 1,
        class: m(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
        onClick: n[2] || (n[2] = (o) => e.checkPanel("second"))
      }, ve(e.time.second), 3)) : q("v-if", !0)
    ], 2), e.format === "ampm" ? (b(), k("div", {
      key: 0,
      class: m(e.n("title-ampm"))
    }, [L("div", {
      class: m(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
      onClick: n[3] || (n[3] = (o) => e.checkAmpm("am"))
    }, " AM ", 2), L("div", {
      class: m(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
      onClick: n[4] || (n[4] = (o) => e.checkAmpm("pm"))
    }, " PM ", 2)], 2)) : q("v-if", !0)], 2)], 6),
    L("div", { class: m(e.n("body")) }, [L("div", {
      ref: "container",
      class: m(e.n("clock-container")),
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
      class: m(e.n("actions"))
    }, [U(e.$slots, "actions")], 2)) : q("v-if", !0)
  ], 2);
}
var i0 = te({
  name: OM,
  components: { Clock: PM },
  props: n0,
  setup(e) {
    const n = P(null), r = P(null), t = P(null), o = P(!1), a = P(!1), i = P(!1), l = P(!1), s = P(!1), u = P(!1), d = P(!1), c = P(0), f = P(0), v = P(), p = P("hour"), h = P("am"), g = P({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = $n({
      x: 0,
      y: 0
    }), $ = $n({
      x: [],
      y: []
    }), y = C(() => p.value === "hour" ? v.value : p.value === "minute" ? c.value : f.value), { t: O } = kr();
    me(() => e.modelValue, (G) => {
      if (G === void 0 || G === "") {
        T();
        return;
      }
      const { hour: ne, minute: pe, second: Oe } = sr(G), Y = ln().hour(ne).format("hh"), ie = ln().hour(ne).format("HH"), Ee = ln().minute(pe).format("mm"), He = ln().second(Oe).format("ss");
      v.value = (Y === "12" ? 0 : Z(Y)) * 30, c.value = Z(Ee) * 6, f.value = Z(He) * 6, g.value = B(G), e.format !== "24hr" && (h.value = Zr(`${ne}`, 2, "0") === ie && er.includes(ie) ? "pm" : "am"), o.value = e.format === "24hr" && er.includes(ie);
    }, { immediate: !0 });
    function T() {
      v.value = void 0, c.value = 0, f.value = 0, g.value = {
        hour: "00",
        minute: "00",
        second: "00"
      }, h.value = "am";
    }
    function z(G) {
      S(e["onUpdate:modelValue"], G), S(e.onChange, G);
    }
    function R(G) {
      return G * 57.29577951308232;
    }
    function H(G) {
      l.value = !1, d.value = !1, p.value = G;
    }
    function M(G) {
      const { disableHour: ne } = t.value, pe = gr.findIndex((Y) => Z(Y) === Z(g.value.hour)), Oe = G === "am" ? gr : er;
      return [...Oe.slice(pe), ...Oe.slice(0, pe)].find((Y, ie) => (a.value = ie !== 0, !ne.includes(Y)));
    }
    function D(G) {
      if (e.readonly) return;
      h.value = G;
      const ne = M(G);
      if (!ne) return;
      const pe = e.useSeconds ? `:${g.value.second}` : "";
      z(`${Zr(ne, 2, "0")}:${g.value.minute}${pe}`);
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
        rangeXMin: w.x - G / 2 - 8,
        rangeXMax: w.x + G / 2 + 8,
        rangeYMin: w.y - ne / 2 - 8,
        rangeYMax: w.y + ne / 2 + 8
      };
    }
    function I(G, ne, pe) {
      const { disableHour: Oe } = t.value;
      i.value = E(G, ne);
      const Y = Math.round(pe / 30) * 30 + 90, ie = N(Y), Ee = o.value ? gr[ie] : er[ie];
      if (Oe.includes(Ee) || (o.value = e.format === "24hr" ? E(G, ne) : !1), o.value !== i.value) return;
      const He = o.value || h.value === "pm" ? er[ie] : gr[ie];
      u.value = Oe.includes(He), !u.value && (v.value = Y, l.value = !0);
    }
    function F(G) {
      const { disableHour: ne } = t.value, pe = Math.round(G / 6) * 6 + 90;
      d.value = t0({
        time: pe / 6 >= 0 ? pe / 6 : pe / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: ne,
        allowedTime: e.allowedTime
      }), !d.value && (c.value = pe, s.value = !0);
    }
    function Q(G) {
      const { disableHour: ne } = t.value, pe = Math.round(G / 6) * 6 + 90;
      o0({
        time: pe / 6 >= 0 ? pe / 6 : pe / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: g.value.hour,
        minute: Z(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: ne,
        allowedTime: e.allowedTime
      }) || (f.value = pe);
    }
    function X() {
      const { left: G, top: ne, width: pe, height: Oe } = kn(n.value);
      if (w.x = G + pe / 2, w.y = ne + Oe / 2, p.value === "hour" && e.format === "24hr") {
        const { rangeXMin: Y, rangeXMax: ie, rangeYMin: Ee, rangeYMax: He } = A();
        $.x = [Y, ie], $.y = [Ee, He];
      }
    }
    function ae(G) {
      if (Ze(G), e.readonly) return;
      X();
      const { clientX: ne, clientY: pe } = G.touches[0], Oe = ne - w.x, Y = pe - w.y, ie = Math.round(R(Math.atan2(Y, Oe)));
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
      getRad: y,
      time: g,
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
      pt: O,
      moveHand: ae,
      checkPanel: H,
      checkAmpm: D,
      end: Te,
      update: z,
      changePreventUpdate: ce,
      formatElevation: Pn
    };
  }
});
i0.render = EM;
var zl = i0;
de(zl);
fe(zl, n0);
var a7 = zl, Eu = zl, l0 = {
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
}, { n: qn, classes: jv } = oe("tree-menu");
function IM(e, n) {
  const r = x("maybe-v-node"), t = x("var-tree-menu-option"), o = x("var-collapse-transition");
  return b(), k("div", { class: m(e.n("option")) }, [e.option.type === "divider" ? (b(), k("div", {
    key: 0,
    class: m(e.n("divider"))
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
    default: ue(() => [L("div", { class: m(e.n("children")) }, [(b(!0), k(Be, null, Ye(e.option.children, (a) => (b(), we(t, {
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
var s0 = te({
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
        class: jv(qn("item"), [e.option.active, qn("--item-active")], [e.option.activePath, qn("--item-active-path")], [e.option.disabled, qn("--item-disabled")], [e.ripple && !e.option.disabled, qn("--item-ripple-enabled")]),
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
      return e.option.hasChildren ? Fn("span", { class: jv(qn("expand-icon"), [e.option.expanded, qn("--expand-icon-expanded")]) }, [Fn(Je, {
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
s0.render = IM;
var BM = s0, { name: DM, n: MM, classes: AM } = oe("tree-menu");
function NM(e, n) {
  const r = x("tree-menu-option");
  return b(), k("nav", {
    class: m(e.classes(e.n(), e.n("$--box"), [e.bordered, e.n("--border")])),
    style: J(e.styles)
  }, [
    e.$slots.start ? U(e.$slots, "start", { key: 0 }) : q("v-if", !0),
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
    e.$slots.end ? U(e.$slots, "end", { key: 1 }) : q("v-if", !0)
  ], 6);
}
var u0 = te({
  name: DM,
  components: { TreeMenuOption: BM },
  props: l0,
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
      p.forEach(g);
      function h(w, $, y = 0) {
        return w.reduce((O, T) => {
          if (T.show === !1) return O;
          const z = T.type, R = T[e.valueKey], H = T[e.childrenKey], M = {
            option: T,
            type: z,
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
          }, D = z === "group" ? y : y + 1;
          return M.children = We(H) ? h(H, M, D) : [], M.hasChildren = !z && M.children.length > 0, O.push(M), O;
        }, []);
      }
      function g(w) {
        v.set(w.value, w), w.children.forEach(g);
      }
      return {
        options: p,
        optionByValue: v
      };
    }
    function i() {
      var v;
      const p = new Set((v = r.value) != null ? v : []), h = n.value == null ? void 0 : t.value.optionByValue.get(n.value), g = new Set(h ? u(h) : []);
      t.value.options.forEach((w) => {
        l(w, p, g);
      });
    }
    function l(v, p, h) {
      v.active = n.value === v.value, v.activePath = h.has(v.value), v.disabled = e.disabled || !!v.option.disabled, v.expanded = p.has(v.value), v.children.forEach((g) => {
        l(g, p, h);
      });
    }
    function s(v) {
      const p = [];
      function h(g) {
        p.push(g.value), g.children.forEach(h);
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
      u(p).forEach((g) => {
        h.add(g);
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
        h.value !== v.value && (p.delete(h.value), s(h).forEach((g) => p.delete(g)));
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
u0.render = NM;
var Tl = u0;
de(Tl);
fe(Tl, l0);
var i7 = Tl, Iu = Tl, d0 = {
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
}), { name: RM, n: VM, classes: LM } = oe("uploader"), FM = 0, UM = ["onClick"], HM = ["onClick"], jM = ["src", "alt"], YM = ["tabindex"], KM = [
  "multiple",
  "accept",
  "capture",
  "disabled"
], WM = ["src"];
function qM(e, n) {
  const r = x("var-icon"), t = x("var-hover-overlay"), o = x("var-form-details"), a = x("var-popup"), i = _e("ripple"), l = _e("hover");
  return b(), k("div", { class: m(e.classes(e.n(), e.n("$--box"))) }, [
    L("div", { class: m(e.n("file-list")) }, [(b(!0), k(Be, null, Ye(e.files, (s) => Ke((b(), k("div", {
      key: s.id,
      class: m(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
      onClick: (u) => e.preview(s)
    }, [
      L("div", { class: m(e.n("file-name")) }, ve(s.name || s.url), 3),
      e.removable ? U(e.$slots, "remove-button", {
        key: 0,
        remove: () => {
          e.handleRemove(s);
        }
      }, () => [L("div", {
        class: m(e.n("file-close")),
        onClick: Rn((u) => e.handleRemove(s), ["stop"])
      }, [j(r, {
        class: m(e.n("file-close-icon")),
        "var-uploader-cover": "",
        name: "delete"
      }, null, 8, ["class"])], 10, HM)]) : q("v-if", !0),
      s.cover ? (b(), k("img", {
        key: 1,
        role: "img",
        class: m(e.n("file-cover")),
        style: J({ objectFit: s.fit }),
        src: s.cover,
        alt: s.name
      }, null, 14, jM)) : q("v-if", !0),
      L("div", { class: m(e.n("file-indicator")) }, [L("div", {
        class: m(e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])),
        style: J({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
      }, null, 6)], 2)
    ], 10, UM)), [[i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]])), 128)), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Ke((b(), k("div", {
      key: 0,
      ref: "actionRef",
      class: m(e.classes(e.n("--outline-none"), [!e.$slots.default, `${e.n("action")} ${e.formatElevation(e.elevation, 2)}`], [e.disabled || e.formDisabled, e.n("--disabled")])),
      tabindex: e.disabled || e.formDisabled ? void 0 : "0",
      onClick: n[2] || (n[2] = (...s) => e.handleActionClick && e.handleActionClick(...s)),
      onFocus: n[3] || (n[3] = (s) => e.isFocusing = !0),
      onBlur: n[4] || (n[4] = (s) => e.isFocusing = !1)
    }, [L("input", {
      ref: "input",
      type: "file",
      class: m(e.n("action-input")),
      multiple: e.multiple,
      accept: e.accept,
      capture: e.capture,
      disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
      onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s)),
      onClick: n[1] || (n[1] = Rn(() => {
      }, ["stop"]))
    }, null, 42, KM), U(e.$slots, "default", {}, () => [j(r, {
      class: m(e.n("action-icon")),
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
      fn: ue(() => [U(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"]),
    j(a, {
      show: e.showPreview,
      "onUpdate:show": n[5] || (n[5] = (s) => e.showPreview = s),
      class: m(e.n("preview")),
      "var-uploader-cover": "",
      position: "center",
      onClosed: n[6] || (n[6] = (s) => e.currentPreview = null)
    }, {
      default: ue(() => {
        var s, u;
        return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (b(), k("video", {
          key: 0,
          class: m(e.n("preview-video")),
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
var c0 = te({
  name: RM,
  directives: {
    Ripple: vn,
    Hover: jn
  },
  components: {
    VarIcon: Je,
    VarPopup: ut,
    VarFormDetails: Un,
    VarHoverOverlay: Gn
  },
  props: d0,
  setup(e) {
    const n = P(!1), r = P(null), t = P(null), o = P(!1), a = P(null), i = C(() => {
      const { maxlength: ce, modelValue: { length: G } } = e;
      return nr(ce) ? `${G} / ${ce}` : "";
    }), { form: l, bindForm: s } = Kn(), { errorMessage: u, validateWithTrigger: d, validate: c, resetValidation: f } = Jn(), { hovering: v, handleHovering: p } = ur(), h = C(() => {
      const { modelValue: ce, hideList: G } = e;
      return G ? [] : ce;
    });
    let g = !1;
    const w = {
      getSuccess: N,
      getError: A,
      getLoading: I
    };
    S(s, {
      validate: ae,
      resetValidation: f,
      reset: Te
    }), xe(() => window, "keydown", $), xe(() => window, "keyup", y), me(() => e.modelValue, () => {
      !g && X("onChange"), g = !1;
    }, { deep: !0 });
    function $(ce) {
      n.value && ((ce.key === " " || ce.key === "Enter") && ce.preventDefault(), ce.key === "Enter" && r.value.click());
    }
    function y(ce) {
      !n.value || ce.key !== " " || (ce.preventDefault(), r.value.click());
    }
    function O(ce) {
      const { disabled: G, previewed: ne, preventDefaultPreview: pe, onPreview: Oe } = e;
      if (l?.disabled.value || G || !ne || (S(Oe, $n(ce)), pe)) return;
      const { url: Y } = ce;
      if (Ec(Y)) {
        zo(Y);
        return;
      }
      Ic(Y) && (a.value = ce, o.value = !0);
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
    function z(ce) {
      const { files: G } = ce.target;
      return Array.from(G);
    }
    function R(ce) {
      return la(this, null, function* () {
        const G = ce.file;
        if (e.resolveType === "default" && G.type.startsWith("image") || e.resolveType === "data-url") {
          const ne = yield L0(G);
          ce.cover = ne, ce.url = ne;
        }
        return ce;
      });
    }
    function H(ce) {
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
        const { maxsize: G, maxlength: ne, modelValue: pe, onOversize: Oe, onAfterRead: Y, onBeforeFilter: ie, readonly: Ee, disabled: He } = e;
        if (l?.disabled.value || l?.readonly.value || He || Ee) return;
        const nn = (K) => K.filter((re) => re.file.size > Z(G) ? (S(Oe, $n(re)), !1) : !0), qe = (K) => {
          const re = Math.min(K.length, Z(ne) - pe.length);
          return K.slice(0, re);
        }, en = (K) => la(null, null, function* () {
          if (!ie) return K;
          const re = qr(ie);
          for (const ye of re) K = yield ye(K);
          return K;
        });
        let on = z(ce).map(T);
        on = yield en(on), on = G != null ? nn(on) : on, on = ne != null ? qe(on) : on;
        const be = yield Promise.all(H(on)), ee = (yield Promise.all(M(be))).filter(({ valid: K }) => K).map(({ varFile: K }) => K);
        S(e["onUpdate:modelValue"], [...pe, ...ee]), ce.target.value = "", ee.forEach((K) => S(Y, $n(K)));
      });
    }
    function E(ce) {
      return la(this, null, function* () {
        const { disabled: G, readonly: ne, modelValue: pe, onBeforeRemove: Oe, onRemove: Y } = e;
        if (l?.disabled.value || l?.readonly.value || G || ne) return;
        if (Oe) {
          const Ee = qr(S(Oe, $n(ce)));
          if ((yield Promise.all(Ee)).some((He) => !He)) return;
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
        d(G, ce, ne, pe, w);
      });
    }
    function ae() {
      return c(e.rules, e.modelValue, w);
    }
    function Te() {
      g = !0, S(e["onUpdate:modelValue"], []), f();
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
      isHTMLSupportVideo: Ic,
      isHTMLSupportImage: Ec,
      preview: O,
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
c0.render = qM;
var El = c0;
de(El);
fe(El, d0);
var l7 = El, Bu = El, f0 = {
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
}, XM = Object.defineProperty, GM = Object.defineProperties, ZM = Object.getOwnPropertyDescriptors, Yv = Object.getOwnPropertySymbols, JM = Object.prototype.hasOwnProperty, QM = Object.prototype.propertyIsEnumerable, Kv = (e, n, r) => n in e ? XM(e, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[n] = r, xM = (e, n) => {
  for (var r in n || (n = {})) JM.call(n, r) && Kv(e, r, n[r]);
  if (Yv)
    for (var r of Yv(n)) QM.call(n, r) && Kv(e, r, n[r]);
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
  return b(), k("div", { class: m(e.n()) }, [U(e.$slots, "default"), (b(), we(Ur, {
    to: "body",
    disabled: !e.fullscreen
  }, [L("div", {
    ref: "containerRef",
    class: m(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
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
  }, [U(e.$slots, "content", {}, () => [L("span", { style: J(_M(xM({}, e.font), {
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
var v0 = te({
  name: nA,
  props: f0,
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
        o.value = Hr(i.value).color, e.image && (t.value = yield s()), yield Ne(), d(), r.value = u(a.value.innerHTML);
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
v0.render = sA;
var Il = v0;
de(Il);
fe(Il, f0);
var s7 = Il, Du = Il, uA = "3.19.2";
function dA(e) {
  ns.install && e.use(ns), rs.install && e.use(rs), ts.install && e.use(ts), is.install && e.use(is), ds.install && e.use(ds), cs.install && e.use(cs), fs.install && e.use(fs), ko.install && e.use(ko), vs.install && e.use(vs), ps.install && e.use(ps), ms.install && e.use(ms), gs.install && e.use(gs), tr.install && e.use(tr), hs.install && e.use(hs), bs.install && e.use(bs), ys.install && e.use(ys), ct.install && e.use(ct), ws.install && e.use(ws), $a.install && e.use($a), $s.install && e.use($s), Cs.install && e.use(Cs), Ss.install && e.use(Ss), Ps.install && e.use(Ps), Ca.install && e.use(Ca), vr.install && e.use(vr), Os.install && e.use(Os), Is.install && e.use(Is), Ns.install && e.use(Ns), Rs.install && e.use(Rs), Vs.install && e.use(Vs), Ta.install && e.use(Ta), Fs.install && e.use(Fs), Us.install && e.use(Us), Ia.install && e.use(Ia), Hs.install && e.use(Hs), js.install && e.use(js), ho.install && e.use(ho), Ys.install && e.use(Ys), Ks.install && e.use(Ks), Un.install && e.use(Un), Ws.install && e.use(Ws), jn.install && e.use(jn), Gn.install && e.use(Gn), Je.install && e.use(Je), qs.install && e.use(qs), zo.install && e.use(zo), Xs.install && e.use(Xs), Gs.install && e.use(Gs), Lt.install && e.use(Lt), wo.install && e.use(wo), Zs.install && e.use(Zs), Js.install && e.use(Js), Ct.install && e.use(Ct), Qs.install && e.use(Qs), _l.install && e.use(_l), xs.install && e.use(xs), jt.install && e.use(jt), Ft.install && e.use(Ft), Yt.install && e.use(Yt), Da.install && e.use(Da), _s.install && e.use(_s), eu.install && e.use(eu), za.install && e.use(za), nu.install && e.use(nu), ru.install && e.use(ru), ut.install && e.use(ut), tu.install && e.use(tu), ou.install && e.use(ou), Co.install && e.use(Co), au.install && e.use(au), iu.install && e.use(iu), lu.install && e.use(lu), su.install && e.use(su), uu.install && e.use(uu), vn.install && e.use(vn), du.install && e.use(du), Ma.install && e.use(Ma), cu.install && e.use(cu), fu.install && e.use(fu), vu.install && e.use(vu), pu.install && e.use(pu), mu.install && e.use(mu), hu.install && e.use(hu), bu.install && e.use(bu), yu.install && e.use(yu), wu.install && e.use(wu), To.install && e.use(To), ku.install && e.use(ku), Po.install && e.use(Po), Oo.install && e.use(Oo), $u.install && e.use($u), Cu.install && e.use(Cu), Su.install && e.use(Su), Pu.install && e.use(Pu), Ou.install && e.use(Ou), zu.install && e.use(zu), Tu.install && e.use(Tu), Eu.install && e.use(Eu), Ba.install && e.use(Ba), Iu.install && e.use(Iu), Bu.install && e.use(Bu), Du.install && e.use(Du);
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
  Divider: Us,
  Drag: Ia,
  Ellipsis: Hs,
  Fab: js,
  FieldDecorator: ho,
  FloatingPanel: Ys,
  Form: Ks,
  FormDetails: Un,
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
  Us as Divider,
  Ia as Drag,
  Hs as Ellipsis,
  js as Fab,
  ho as FieldDecorator,
  Ys as FloatingPanel,
  Ks as Form,
  Un as FormDetails,
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
  Bb as SNACKBAR_TYPE,
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
  UA as _BottomNavigationComponent,
  HA as _BottomNavigationItemComponent,
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
  UN as _RowComponent,
  HN as _SegmentedButtonComponent,
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
  Ep as actionSheetProps,
  Yu as add,
  Bp as alertProps,
  Mp as appBarProps,
  km as avatarGroupProps,
  ym as avatarProps,
  zm as backTopProps,
  Em as badgeProps,
  Am as bottomNavigationItemProps,
  Bm as bottomNavigationProps,
  Rm as breadcrumbProps,
  Fm as breadcrumbsProps,
  Hm as buttonGroupProps,
  Sm as buttonProps,
  Ym as cardProps,
  Wm as cellProps,
  Xm as checkboxGroupProps,
  jp as checkboxProps,
  Zm as chipProps,
  Qm as codeProps,
  _m as colProps,
  ig as collapseItemProps,
  rg as collapseProps,
  sg as collapseTransitionProps,
  dg as countToProps,
  fg as countdownProps,
  Pg as counterProps,
  ap as currentMessage,
  Ag as dataTableProps,
  Yg as dateInputProps,
  Ug as datePickerProps,
  u7 as default,
  An as defaultLazyOptions,
  qg as dialogProps,
  Gg as dividerProps,
  Jg as dragProps,
  eh as ellipsisProps,
  ep as enUS,
  np as faIR,
  rh as fabProps,
  Ro as fieldDecoratorProps,
  Np as formDetailsProps,
  ah as formProps,
  $p as hoverOverlayProps,
  pn as iconProps,
  pm as imageCache,
  fh as imagePreviewProps,
  sh as imageProps,
  mh as indexAnchorProps,
  bh as indexBarProps,
  Wa as inputProps,
  dA as install,
  wh as linkProps,
  $h as listProps,
  Rz as loadingBarProps,
  Yr as loadingProps,
  Wp as menuOptionProps,
  Ju as menuProps,
  ya as menuSelectProps,
  ip as merge,
  op as messages,
  Nh as optionProps,
  Lh as otpInputProps,
  Uh as overlayProps,
  zg as paginationProps,
  Hh as paperProps,
  Yh as pickerProps,
  Qt as popupProps,
  Wh as progressProps,
  Xh as pullRefreshProps,
  Zh as radioGroupProps,
  Eg as radioProps,
  eb as railNavigationItemProps,
  Qh as railNavigationProps,
  rb as rateProps,
  ob as resultProps,
  fb as rowProps,
  pb as segmentedButtonProps,
  hb as segmentedButtonsProps,
  yb as selectProps,
  $b as signatureProps,
  Sb as skeletonProps,
  Ob as sliderProps,
  fd as snackbarProps,
  Ab as spaceProps,
  Nb as stepProps,
  Lb as stepsProps,
  po as stickyProps,
  Ub as styleProviderProps,
  ld as swipeProps,
  jb as switchProps,
  gn as t,
  Xb as tabItemProps,
  Kb as tabProps,
  Zb as tableProps,
  _b as tabsItemsProps,
  Qb as tabsProps,
  n0 as timePickerProps,
  xg as tooltipProps,
  l0 as treeMenuProps,
  d0 as uploaderProps,
  Ku as use,
  ur as useHoverOverlay,
  ju as useLocale,
  uA as version,
  f0 as watermarkProps,
  Uu as zhCN,
  tp as zhHK,
  Hu as zhTW
};
