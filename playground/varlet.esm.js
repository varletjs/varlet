import { onMounted as ko, nextTick as je, onActivated as Ho, computed as E, ref as w, watch as de, isRef as tb, onBeforeUnmount as fa, onDeactivated as Ct, onUnmounted as nr, getCurrentInstance as nt, inject as Xs, unref as Gs, reactive as on, provide as Zs, isVNode as rb, defineComponent as ee, h as or, Comment as ab, Fragment as Ne, createApp as ib, onBeforeMount as lb, createVNode as G, Teleport as co, Transition as nn, withDirectives as Fe, vShow as xn, mergeProps as Ke, createElementBlock as P, openBlock as g, normalizeClass as p, createBlock as ye, resolveDynamicComponent as St, normalizeStyle as X, resolveComponent as x, resolveDirective as Xe, createCommentVNode as K, createElementVNode as F, toDisplayString as ie, withCtx as ce, renderSlot as H, renderList as Ze, createTextVNode as Ae, onUpdated as tr, normalizeProps as Go, guardReactiveProps as pa, createSlots as Jo, withModifiers as Un, vModelText as Tf, withKeys as Wu, shallowRef as sb, TransitionGroup as ub } from "vue";
function Js(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(n, o) {
    var t = e.get(n);
    t ? t.push(o) : e.set(n, [o]);
  }, off: function(n, o) {
    var t = e.get(n);
    t && (o ? t.splice(t.indexOf(o) >>> 0, 1) : e.set(n, []));
  }, emit: function(n, o) {
    var t = e.get(n);
    t && t.slice().map(function(r) {
      r(o);
    }), (t = e.get("*")) && t.slice().map(function(r) {
      r(n, o);
    });
  } };
}
const cb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Js
}, Symbol.toStringTag, { value: "Module" }));
var Qs = Object.defineProperty, db = Object.defineProperties, fb = Object.getOwnPropertyDescriptor, pb = Object.getOwnPropertyDescriptors, vb = Object.getOwnPropertyNames, Ku = Object.getOwnPropertySymbols, Bf = Object.prototype.hasOwnProperty, mb = Object.prototype.propertyIsEnumerable, qu = (e, n, o) => n in e ? Qs(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Df = (e, n) => {
  for (var o in n || (n = {}))
    Bf.call(n, o) && qu(e, o, n[o]);
  if (Ku)
    for (var o of Ku(n))
      mb.call(n, o) && qu(e, o, n[o]);
  return e;
}, If = (e, n) => db(e, pb(n)), Af = (e, n) => {
  for (var o in n)
    Qs(e, o, { get: n[o], enumerable: !0 });
}, hb = (e, n, o, t) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let r of vb(n))
      !Bf.call(e, r) && r !== o && Qs(e, r, { get: () => n[r], enumerable: !(t = fb(n, r)) || t.enumerable });
  return e;
}, Mf = (e, n, o) => (hb(e, n, "default"), o), Nf = {};
Af(Nf, {
  NOOP: () => t0,
  assert: () => Yf,
  at: () => rr,
  baseRound: () => ba,
  call: () => k,
  camelize: () => ma,
  cancelAnimationFrame: () => pt,
  ceil: () => m0,
  chunk: () => Ib,
  clamp: () => Cn,
  clampArrayRange: () => Vf,
  classes: () => nu,
  cloneDeep: () => r0,
  cloneDeepWith: () => op,
  copyText: () => Gf,
  createNamespaceFn: () => tu,
  createStorage: () => ha,
  debounce: () => o0,
  delay: () => gb,
  difference: () => Vb,
  differenceWith: () => Gr,
  doubleRaf: () => bn,
  download: () => np,
  ensurePrefix: () => qb,
  ensureSuffix: () => Xb,
  find: () => Wf,
  floor: () => ml,
  genNumberKey: () => Db,
  genStringKey: () => Zb,
  getAllParentScroller: () => Jf,
  getGlobalThis: () => ar,
  getParentScroller: () => ru,
  getRect: () => tn,
  getScrollLeft: () => lr,
  getScrollTop: () => yo,
  getStyle: () => Wn,
  groupBy: () => Fb,
  hasOwn: () => Qo,
  inBrowser: () => ro,
  inMobile: () => Ut,
  inViewport: () => au,
  intersection: () => Rb,
  intersectionWith: () => qf,
  isArray: () => Ye,
  isArrayBuffer: () => Fr,
  isBlob: () => zb,
  isBoolean: () => ir,
  isDOMException: () => Hr,
  isDataView: () => Lr,
  isDate: () => Ur,
  isEmpty: () => Zn,
  isEmptyPlainObject: () => Tb,
  isEqual: () => wb,
  isEqualWith: () => Lf,
  isError: () => Kr,
  isFile: () => Ob,
  isFunction: () => gn,
  isMap: () => jr,
  isNonEmptyArray: () => kb,
  isNullish: () => $b,
  isNumber: () => Bn,
  isNumeric: () => _s,
  isObject: () => bo,
  isPlainObject: () => Hn,
  isPrimitive: () => Eb,
  isPromise: () => Cb,
  isRegExp: () => Wr,
  isSet: () => Yr,
  isString: () => dn,
  isSymbol: () => Sb,
  isTruthy: () => Pb,
  isTypedArray: () => qr,
  isWeakMap: () => Uf,
  isWeakSet: () => Hf,
  isWindow: () => va,
  kebabCase: () => ou,
  localStorage: () => _f,
  lowerFirst: () => Jb,
  mapObject: () => Wb,
  maxBy: () => s0,
  mean: () => d0,
  meanBy: () => f0,
  merge: () => a0,
  mergeWith: () => tp,
  minBy: () => u0,
  mitt: () => Js,
  motion: () => iu,
  normalizeToArray: () => mo,
  objectToString: () => Ff,
  omit: () => jb,
  omitBy: () => Yb,
  once: () => n0,
  pascalCase: () => Zf,
  pick: () => Ub,
  pickBy: () => Hb,
  prettyJSONObject: () => Qf,
  preventDefault: () => Re,
  promiseWithResolvers: () => Kb,
  raf: () => ho,
  randomColor: () => xb,
  randomNumber: () => Rf,
  randomString: () => _b,
  removeArrayBlank: () => Kf,
  removeArrayEmpty: () => Nb,
  removeItem: () => No,
  requestAnimationFrame: () => Vo,
  round: () => v0,
  sample: () => p0,
  sessionStorage: () => xf,
  shuffle: () => Mb,
  slash: () => e0,
  sum: () => ap,
  sumBy: () => ip,
  sumHash: () => c0,
  supportTouch: () => jf,
  throttle: () => ga,
  times: () => bb,
  toArrayBuffer: () => i0,
  toDataURL: () => rp,
  toNumber: () => j,
  toRawType: () => Je,
  toText: () => l0,
  toTypeString: () => xs,
  toggleItem: () => Ab,
  tryParseJSON: () => ep,
  uniq: () => vl,
  uniqBy: () => Xr,
  upperFirst: () => Qb,
  xor: () => Lb,
  xorWith: () => Xf
});
function rr(e, n) {
  if (e.length)
    return n < 0 && (n += e.length), e[n];
}
function Cn(e, n, o) {
  return Math.min(o, Math.max(n, e));
}
function Vf(e, n) {
  return Cn(e, 0, n.length - 1);
}
function gb(e) {
  return new Promise((n) => {
    setTimeout(n, e);
  });
}
function Rf(e = 0, n = 100) {
  return Math.floor(Math.random() * (n - e + 1)) + e;
}
function bb(e, n) {
  return Array.from({ length: e }, (o, t) => n(t));
}
function ro() {
  return typeof window < "u";
}
function ar() {
  return typeof globalThis < "u" ? globalThis : ro() ? window : typeof global < "u" ? global : self;
}
var { hasOwnProperty: yb } = Object.prototype;
function Qo(e, n) {
  return yb.call(e, n);
}
function Ut() {
  return ro() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function Ye(e) {
  return Array.isArray(e);
}
var Ff = Object.prototype.toString;
function xs(e) {
  return Ff.call(e);
}
function Je(e) {
  return xs(e).slice(8, -1);
}
function Fr(e) {
  return Je(e) === "ArrayBuffer";
}
function ir(e) {
  return typeof e == "boolean";
}
function Lr(e) {
  return Je(e) === "DataView";
}
function Ur(e) {
  return Je(e) === "Date";
}
function Hr(e) {
  return Je(e) === "DOMException";
}
function Zn(e) {
  return e == null || e === "" || Ye(e) && !e.length;
}
function jr(e) {
  return Je(e) === "Map";
}
function Hn(e) {
  return Je(e) === "Object";
}
function Yr(e) {
  return Je(e) === "Set";
}
function bo(e) {
  return typeof e == "object" && e !== null;
}
function Wr(e) {
  return Je(e) === "RegExp";
}
function Kr(e) {
  return Je(e) === "Error";
}
function qr(e) {
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
  ].includes(Je(e));
}
function Lf(e, n, o) {
  const t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  function a(i, l, s, u) {
    if (o(i, l) === !0 || i === l || i !== i && l !== l)
      return !0;
    if (!bo(i) || !bo(l))
      return i === l;
    if (i.constructor !== l.constructor)
      return !1;
    if (Je(i) === "String" && Je(l) === "String" || Je(i) === "Number" && Je(l) === "Number" || Je(i) === "Boolean" && Je(l) === "Boolean" || Je(i) === "BigInt" && Je(l) === "BigInt" || Je(i) === "Symbol" && Je(l) === "Symbol")
      return i.valueOf() === l.valueOf();
    if (Ur(i) && Ur(l))
      return i.getTime() === l.getTime();
    if (Wr(i) && Wr(l))
      return i.source === l.source && i.flags === l.flags;
    if (Kr(i) && Kr(l))
      return i.name === l.name && i.message === l.message && i.cause === l.cause;
    if (Hr(i) && Hr(l))
      return i.name === l.name && i.message === l.message;
    if (qr(i) && qr(l) || Lr(i) && Lr(l)) {
      if (i.byteLength !== l.byteLength)
        return !1;
      const d = new Uint8Array(i.buffer), f = new Uint8Array(l.buffer);
      return d.every((v, m) => v === f[m]);
    }
    if (Fr(i) && Fr(l)) {
      if (i.byteLength !== l.byteLength)
        return !1;
      const d = new Uint8Array(i), f = new Uint8Array(l);
      return d.every((v, m) => v === f[m]);
    }
    if (s.get(i) === l && u.get(l) === i)
      return !0;
    if (s.set(i, l), u.set(l, i), jr(i) && jr(l) || Yr(i) && Yr(l)) {
      if (i.size !== l.size)
        return !1;
      const d = [...i], f = [...l], v = d.every((m, h) => a(m, f[h], s, u));
      return s.delete(i), u.delete(l), v;
    }
    if (Ye(i) && Ye(l)) {
      if (i.length !== l.length)
        return !1;
      const d = i.every((f, v) => a(f, l[v], s, u));
      return s.delete(i), u.delete(l), d;
    }
    if (Hn(i) && Hn(l)) {
      const d = [...Object.keys(i), ...Object.getOwnPropertySymbols(i)], f = [...Object.keys(l), ...Object.getOwnPropertySymbols(l)];
      if (d.length !== f.length)
        return !1;
      const v = d.every(
        (m) => a(i[m], l[m], s, u)
      );
      return s.delete(i), u.delete(l), v;
    }
    return !1;
  }
  return a(e, n, t, r);
}
function wb(e, n) {
  return Lf(e, n, () => {
  });
}
function gn(e) {
  return typeof e == "function";
}
function kb(e) {
  return Ye(e) && !!e.length;
}
function $b(e) {
  return e == null;
}
function Bn(e) {
  return typeof e == "number";
}
function dn(e) {
  return typeof e == "string";
}
function _s(e) {
  return Bn(e) || dn(e) && /^[-+]?\d+$/.test(e);
}
function Cb(e) {
  return bo(e) && gn(e.then) && gn(e.catch);
}
function Sb(e) {
  return typeof e == "symbol";
}
function Pb(e) {
  return !!e;
}
function Uf(e) {
  return Je(e) === "WeakMap";
}
function Hf(e) {
  return Je(e) === "WeakSet";
}
function va(e) {
  return e === window;
}
function jf() {
  return ro() && "ontouchstart" in window;
}
function Ob(e) {
  return Je(e) === "File";
}
function zb(e) {
  return Je(e) === "Blob";
}
function Eb(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function Tb(e) {
  return Hn(e) && Object.keys(e).length === 0 && Object.getOwnPropertySymbols(e).length === 0;
}
function Yf(e, n) {
  if (!e)
    throw new Error(n);
}
function j(e) {
  return e == null ? 0 : dn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : ir(e) ? Number(e) : e;
}
var Bb = 0;
function Db() {
  return Bb++;
}
function Ib(e, n = 1) {
  n = Cn(n, 1, e.length);
  const o = [];
  let t = 0;
  for (; t < e.length; )
    o.push(e.slice(t, t + n)), t += n;
  return o;
}
function No(e, n) {
  if (e.length) {
    const o = e.indexOf(n);
    if (o > -1)
      return e.splice(o, 1);
  }
}
function Ab(e, n) {
  return e.includes(n) ? No(e, n) : e.push(n), e;
}
function vl(e) {
  return [...new Set(e)];
}
function Xr(e, n) {
  return e.reduce((o, t) => (o.findIndex((a) => n(t, a)) === -1 && o.push(t), o), []);
}
function Wf(e, n, o = "start") {
  let t = o === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && t >= 0 && t <= e.length - 1; ) {
    if (n(e[t], t, e))
      return [e[t], t];
    o === "start" ? t++ : t--;
  }
  return [null, -1];
}
function Mb(e) {
  for (let n = e.length - 1; n > 0; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [e[n], e[o]] = [e[o], e[n]];
  }
  return e;
}
function Kf(e) {
  return e.filter((n) => n != null);
}
function Nb(e) {
  return e.filter((n) => n != null && n !== "");
}
function mo(e) {
  return Ye(e) ? e : [e];
}
function Gr(e, ...n) {
  const o = rr(n, -1), t = n.slice(0, -1).reduce((r, a) => [...r, ...a], []);
  return e.filter((r) => !t.some((a) => o(r, a)));
}
function Vb(e, ...n) {
  return Gr(e, ...n, (o, t) => o === t);
}
function qf(...e) {
  const n = rr(e, -1), o = e.slice(0, -1);
  if (o.length === 0)
    return [];
  if (o.length === 1)
    return Xr(o[0], n);
  function t(r, a) {
    return r.filter((i) => a.some((l) => n(i, l)));
  }
  return Xr(
    o.reduce((r, a) => t(r, a)),
    n
  );
}
function Rb(...e) {
  return qf(...e, (n, o) => n === o);
}
function Fb(e, n) {
  return e.reduce(
    (o, t) => {
      var r;
      const a = n(t);
      return ((r = o[a]) != null ? r : o[a] = []).push(t), o;
    },
    {}
  );
}
function Xf(...e) {
  const n = rr(e, -1), o = e.slice(0, -1);
  return Xr(
    o.reduce((t, r) => [...Gr(t, r, n), ...Gr(r, t, n)]),
    n
  );
}
function Lb(...e) {
  return Xf(...e, (n, o) => n === o);
}
function Ub(e, n) {
  return n.reduce(
    (o, t) => (o[t] = e[t], o),
    {}
  );
}
function Hb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((t, r) => {
    const a = e[r];
    return n(a, r) && (t[r] = a), t;
  }, {});
}
function jb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce(
    (t, r) => (n.includes(r) || (t[r] = e[r]), t),
    {}
  );
}
function Yb(e, n) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)].reduce((t, r) => {
    const a = e[r];
    return n(a, r) || (t[r] = a), t;
  }, {});
}
function Wb(e, n) {
  return Object.entries(e).reduce(
    (o, [t, r]) => {
      const a = n(t, r);
      if (Ye(a)) {
        const [i, l] = a;
        o[i] = l;
      }
      return o;
    },
    {}
  );
}
function Kb() {
  let e, n;
  return { promise: new Promise((t, r) => {
    e = t, n = r;
  }), resolve: e, reject: n };
}
var eu = {};
Af(eu, {
  cancelAnimationFrame: () => pt,
  classes: () => nu,
  copyText: () => Gf,
  createNamespaceFn: () => tu,
  createStorage: () => ha,
  doubleRaf: () => bn,
  download: () => np,
  getAllParentScroller: () => Jf,
  getParentScroller: () => ru,
  getRect: () => tn,
  getScrollLeft: () => lr,
  getScrollTop: () => yo,
  getStyle: () => Wn,
  inViewport: () => au,
  localStorage: () => _f,
  mitt: () => Js,
  motion: () => iu,
  prettyJSONObject: () => Qf,
  preventDefault: () => Re,
  raf: () => ho,
  requestAnimationFrame: () => Vo,
  sessionStorage: () => xf,
  tryParseJSON: () => ep
});
function pt(e) {
  const n = ar();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function nu(...e) {
  return e.map((n) => {
    if (Ye(n)) {
      const [o, t, r = null] = n;
      return o ? t : r;
    }
    return n;
  });
}
function Gf(e) {
  if (!e)
    return;
  const n = document.createElement("textarea");
  n.value = e, n.style.position = "fixed", n.style.opacity = "0", document.body.appendChild(n), n.select(), document.execCommand("copy"), document.body.removeChild(n);
}
function ma(e) {
  return e = e.replace(/-(\w)/g, (n, o) => o.toUpperCase()), e.replace(e.charAt(0), e.charAt(0).toLowerCase());
}
function qb(e, n) {
  return e.startsWith(n) ? e : n + e;
}
function Xb(e, n) {
  return e.endsWith(n) ? e : e + n;
}
var Gb = 0;
function Zb() {
  return `generated-key-${Gb++}`;
}
function ou(e) {
  return e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
}
function Zf(e) {
  return ma(e).replace(e.charAt(0), e.charAt(0).toUpperCase());
}
function Jb(e) {
  return e.charAt(0).toLowerCase() + e.slice(1);
}
function Qb(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function xb() {
  const e = "0123456789abcdef";
  let n = "#";
  for (let o = 0; o < 6; o++)
    n += e[Math.floor(Math.random() * 16)];
  return n;
}
function _b(e = 10) {
  let n = o();
  for (; n.length < e; )
    n += o();
  function o() {
    return Math.random().toString(36).slice(2);
  }
  return n.slice(0, e);
}
function e0(e) {
  return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
}
function tu(e) {
  return (n) => {
    const o = `${e}-${n}`, t = (r) => r ? r[0] === "$" ? r.replace("$", e) : r.startsWith("--") ? `${o}${r}` : `${o}__${r}` : o;
    return {
      name: Zf(o),
      n: t,
      classes: nu
    };
  };
}
function Vo(e) {
  const n = ar();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}
function bn() {
  return new Promise((e) => {
    Vo(() => {
      Vo(e);
    });
  });
}
function Wn(e) {
  return window.getComputedStyle(e);
}
function ru(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const o = /(scroll|auto)/, { overflowY: t, overflow: r } = Wn(n);
    if (o.test(t) || o.test(r))
      return n;
  }
  return window;
}
function Jf(e) {
  const n = [];
  let o = e;
  for (; !va(o); )
    o = ru(o), n.push(o);
  return n;
}
function tn(e) {
  if (va(e)) {
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
    return If(Df({}, t), {
      toJSON: () => t
    });
  }
  return e.getBoundingClientRect();
}
function lr(e) {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}
function yo(e) {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}
function au(e) {
  const { top: n, bottom: o, left: t, right: r } = tn(e), { width: a, height: i } = tn(window), l = t <= a && r >= 0, s = n <= i && o >= 0;
  return l && s;
}
function Qf(e) {
  return JSON.stringify(e, null, 2);
}
function Re(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function ho() {
  return new Promise((e) => {
    Vo(e);
  });
}
function ha(e) {
  return If(Df({}, e), {
    set(n, o) {
      o != null && (dn(o) || (o = JSON.stringify(o)), e.setItem(n, o));
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
var xf = ha(ar().sessionStorage), _f = ha(ar().localStorage);
function ep(e) {
  try {
    return JSON.parse(e);
  } catch {
    return;
  }
}
function np(e, n = "file") {
  const o = document.createElement("a");
  o.style.display = "none", o.href = dn(e) ? e : URL.createObjectURL(e), o.download = n, document.body.appendChild(o), o.click(), URL.revokeObjectURL(o.href), document.body.removeChild(o);
}
function iu(e) {
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
  let c, d, f, v = 0;
  function m() {
    if (l === "running" || l === "finished")
      return;
    $("running");
    const b = performance.now();
    d = d ?? b, v += f != null ? b - f : 0, f = void 0, S();
    function S() {
      c = Vo(() => {
        const O = performance.now() - d - v, V = Cn(O / t, 0, 1);
        if (s = u * a(V) + n, V >= 1) {
          $("finished"), r({ value: o, done: !0 });
          return;
        }
        r({ value: s, done: !1 }), S();
      });
    }
  }
  function h() {
    l === "running" && (pt(c), $("paused"), f = performance.now());
  }
  function y() {
    pt(c), $("pending"), s = n, c = void 0, d = void 0, f = void 0, v = 0;
  }
  function C() {
    return l;
  }
  function $(b) {
    l = b, i(b);
  }
  return {
    start: m,
    pause: h,
    reset: y,
    getState: C
  };
}
Mf(eu, cb);
Mf(Nf, eu);
function k(e, ...n) {
  if (Ye(e))
    return e.map((o) => o(...n));
  if (e)
    return e(...n);
}
function n0(e) {
  let n = !1, o;
  return function(...t) {
    return n || (n = !0, o = e.apply(this, t)), o;
  };
}
function o0(e, n = 0) {
  let o;
  return function(...t) {
    o && clearTimeout(o), o = setTimeout(() => {
      e.apply(this, t);
    }, n);
  };
}
function ga(e, n = 200) {
  let o, t = 0;
  return function r(...a) {
    const i = performance.now(), l = i - t;
    t || (t = i), o && clearTimeout(o), l >= n ? (e.apply(this, a), t = i) : o = setTimeout(() => {
      r.apply(this, a);
    }, n - l);
  };
}
function t0() {
}
function op(e, n) {
  const o = /* @__PURE__ */ new WeakMap();
  function t(i, l) {
    const s = n(i);
    if (s !== void 0)
      return s;
    if (!bo(i))
      return i;
    if (l.has(i))
      return l.get(i);
    if (Ur(i))
      return new Date(i);
    if (Wr(i))
      return new RegExp(i);
    if (jr(i)) {
      const u = /* @__PURE__ */ new Map();
      return l.set(i, u), i.forEach((c, d) => {
        u.set(t(d, l), t(c, l));
      }), u;
    }
    if (Yr(i)) {
      const u = /* @__PURE__ */ new Set();
      return l.set(i, u), i.forEach((c) => {
        u.add(t(c, l));
      }), u;
    }
    if (Je(i) === "String" || Je(i) === "Number" || Je(i) === "Boolean")
      return a(i, i.valueOf());
    if (Uf(i) || Hf(i) || Kr(i) || Hr(i))
      return {};
    if (qr(i))
      return a(i, r(i.buffer), i.byteOffset, i.length);
    if (Lr(i))
      return a(i, r(i.buffer), i.byteOffset, i.byteLength);
    if (Fr(i))
      return r(i);
    if (Ye(i)) {
      const u = [];
      return l.set(i, u), i.forEach((c, d) => {
        u[d] = t(c, l);
      }), u;
    }
    if (Hn(i)) {
      const u = Object.create(Reflect.getPrototypeOf(i));
      return l.set(i, u), [...Object.keys(i), ...Object.getOwnPropertySymbols(i)].forEach((d) => {
        u[d] = t(i[d], l);
      }), u;
    }
    return i;
  }
  function r(i) {
    const l = new ArrayBuffer(i.byteLength);
    return new Uint8Array(l).set(new Uint8Array(i)), l;
  }
  function a(i, ...l) {
    return new i.constructor(...l);
  }
  return t(e, o);
}
function r0(e) {
  return op(e, () => {
  });
}
function tp(e, ...n) {
  const o = rr(n, -1), t = [e, ...n.slice(0, -1)];
  let r = t.length - 1, a = t[r];
  for (; r; )
    a = i(t[r - 1], a, o), r--;
  function i(l, s, u) {
    function c(d, f) {
      for (const v in f)
        if (Qo(f, v)) {
          const m = f[v], h = d[v], y = u(h, m, v, l, s);
          y !== void 0 ? d[v] = y : bo(m) ? bo(h) ? d[v] = c(h, m) : d[v] = c(Ye(m) ? [] : {}, m) : d[v] = m;
        }
      return d;
    }
    return c(l, s);
  }
  return a;
}
function a0(e, ...n) {
  return tp(e, ...n, () => {
  });
}
function i0(e) {
  return new Promise((n) => {
    const o = new FileReader();
    o.onload = () => {
      n(o.result);
    }, o.readAsArrayBuffer(e);
  });
}
function rp(e) {
  return new Promise((n) => {
    const o = new FileReader();
    o.onload = () => {
      n(o.result);
    }, o.readAsDataURL(e);
  });
}
function l0(e) {
  return new Promise((n) => {
    const o = new FileReader();
    o.onload = () => {
      n(o.result);
    }, o.readAsText(e);
  });
}
function s0(e, n) {
  if (e.length)
    return e.reduce((o, t) => n(o) > n(t) ? o : t, e[0]);
}
function u0(e, n) {
  if (e.length)
    return e.reduce((o, t) => n(o) < n(t) ? o : t, e[0]);
}
function ap(e) {
  return e.reduce((n, o) => n + o, 0);
}
function ip(e, n) {
  return e.reduce((o, t) => o + n(t), 0);
}
function c0(e) {
  function n(t, r) {
    for (let a = 0; a < r.length; a++) {
      const i = r.charCodeAt(a);
      t = (t << 5) - t + i, t |= 0;
    }
    return t < 0 ? t * -2 : t;
  }
  function o(t, r, a, i) {
    return t = n(t, a), t = n(t, xs(r)), t = n(t, typeof r), r === null ? n(t, "null") : r === void 0 ? n(t, "undefined") : bo(r) || gn(r) ? i.includes(r) ? n(t, `[Circular]${a}`) : (i.push(r), t = Object.keys(r).sort().reduce((l, s) => o(l, r[s], s, i), t), gn(r.valueOf) ? n(t, String(r.valueOf())) : t) : n(t, r.toString());
  }
  return o(0, e, "", []).toString(16).padStart(8, "0");
}
function d0(e) {
  return ap(e) / e.length;
}
function f0(e, n) {
  return ip(e, n) / e.length;
}
function p0(e) {
  if (e.length)
    return e[Rf(0, e.length - 1)];
}
function v0(e, n = 0) {
  return ba(e, n, Math.round);
}
function ba(e, n = 0, o) {
  return n = Cn(n, -292, 292), n ? +`${o(`${e}e${n}`)}e${-n}` : o(e);
}
function ml(e, n = 0) {
  return ba(e, n, Math.floor);
}
function m0(e, n = 0) {
  return ba(e, n, Math.ceil);
}
function jn(e, n, o) {
  return Yf(e, `Varlet [${n}]: ${o}`);
}
function h0(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function dt(e, n) {
  console.error(`Varlet [${e}]: ${n}`);
}
var g0 = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, b0 = Object.defineProperty, Zr = Object.getOwnPropertySymbols, lp = Object.prototype.hasOwnProperty, sp = Object.prototype.propertyIsEnumerable, Xu = (e, n, o) => n in e ? b0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, y0 = (e, n) => {
  for (var o in n || (n = {}))
    lp.call(n, o) && Xu(e, o, n[o]);
  if (Zr)
    for (var o of Zr(n))
      sp.call(n, o) && Xu(e, o, n[o]);
  return e;
}, w0 = (e, n) => {
  var o = {};
  for (var t in e)
    lp.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && Zr)
    for (var t of Zr(e))
      n.indexOf(t) < 0 && sp.call(e, t) && (o[t] = e[t]);
  return o;
};
function yn(e) {
  let n = !1;
  ko(() => {
    e(), je(() => {
      n = !0;
    });
  }), Ho(() => {
    n && e();
  });
}
function We(e, n, o, t = {}) {
  if (!ro())
    return;
  const { passive: r = !1, capture: a = !1 } = t;
  let i = !1, l = !1;
  const s = (v) => gn(v) ? v() : Gs(v), u = (v) => {
    if (i || l)
      return;
    const m = s(v);
    m && (m.addEventListener(n, o, {
      passive: r,
      capture: a
    }), i = !0);
  }, c = (v) => {
    if (!i || l)
      return;
    const m = s(v);
    m && (m.removeEventListener(n, o, {
      capture: a
    }), i = !1);
  };
  let d;
  tb(e) && (d = de(
    () => e.value,
    (v, m) => {
      c(m), u(v);
    }
  ));
  const f = () => {
    d?.(), c(e), l = !0;
  };
  return yn(() => {
    u(e);
  }), fa(() => {
    c(e);
  }), Ct(() => {
    c(e);
  }), f;
}
function up(e, n, o) {
  if (!ro())
    return;
  We(document, n, (r) => {
    const a = gn(e) ? e() : Gs(e);
    a && !a.contains(r.target) && o(r);
  });
}
function Pt(e) {
  let n = !1;
  Ct(() => {
    n = !0, e();
  }), nr(() => {
    n || e();
  });
}
function lu(e) {
  const n = nt();
  return e in n.provides;
}
function wn(e) {
  if (!lu(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const o = Xs(e), { childInstances: t, collect: r, clear: a } = o, i = w0(o, ["childInstances", "collect", "clear"]), l = nt();
  return {
    index: E(() => t.indexOf(l)),
    parentProvider: i,
    bindParent: (c) => {
      ko(() => {
        je().then(() => {
          r(l, c);
        });
      }), fa(() => {
        je().then(() => {
          a(l, c);
        });
      });
    }
  };
}
function k0(e) {
  const n = [], o = (t) => {
    if (t?.component) {
      o(t?.component.subTree);
      return;
    }
    Ye(t?.children) && t.children.forEach((r) => {
      rb(r) && (n.push(r), o(r));
    });
  };
  return o(e), n;
}
function kn(e) {
  const n = nt(), o = on([]), t = [], r = E(() => o.length), a = () => {
    const u = k0(n.subTree);
    o.sort((c, d) => u.indexOf(c.vnode) - u.indexOf(d.vnode));
  }, i = (u, c) => {
    o.push(u), t.push(c), a();
  }, l = (u, c) => {
    No(o, u), No(t, c);
  };
  return {
    length: r,
    childProviders: t,
    bindChildren: (u) => {
      Zs(e, y0({
        childInstances: o,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function ao(e) {
  We(() => window, "resize", e, { passive: !0 }), We(() => window, "orientationchange", e, { passive: !0 });
}
function $0(e, n) {
  const o = w(!1);
  return de(
    e,
    (t) => {
      n === t && (o.value = !0);
    },
    { immediate: !0 }
  ), o;
}
function C0(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function Ot() {
  const e = w(0), n = w(0), o = w(0), t = w(0), r = w(0), a = w(0), i = w(0), l = w(0), s = w(0), u = w(0), c = w(), d = w(!1), f = w(!1), v = w(0), m = w(0);
  let h = null;
  const y = () => {
    e.value = 0, n.value = 0, o.value = 0, t.value = 0, r.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, c.value = void 0, d.value = !1, f.value = !1, v.value = 0, m.value = 0;
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
    distance: m,
    resetTouch: y,
    startTouch: (O) => {
      y();
      const { clientX: V, clientY: D } = O.touches[0];
      e.value = V, n.value = D, i.value = V, l.value = D, d.value = !0, v.value = performance.now(), f.value = !1, h && window.cancelAnimationFrame(h);
    },
    moveTouch: (O) => {
      const { clientX: V, clientY: D } = O.touches[0];
      f.value = !0, o.value = V - e.value, t.value = D - n.value, r.value = Math.abs(o.value), a.value = Math.abs(t.value), m.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = V - i.value, u.value = D - l.value, c.value || (c.value = C0(r.value, a.value)), i.value = V, l.value = D;
    },
    endTouch: () => {
      d.value = !1, h = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (O) => yo(O) === 0 && t.value > 0,
    isReachBottom: (O, V = 1) => {
      const { scrollHeight: D, clientHeight: M, scrollTop: W } = O, N = Math.abs(D - W - M);
      return t.value < 0 && N <= V;
    }
  };
}
function cp() {
  const e = nt(), n = ou(e.type.name), o = w(void 0);
  return ko(() => {
    o.value = `${n}-${e.uid}`;
  }), o;
}
function S0(e = {}) {
  const { initialWidth: n = 0, initialHeight: o = 0 } = e, t = w(n), r = w(o), a = () => {
    ro() && (t.value = window.innerWidth, r.value = window.innerHeight);
  };
  return yn(a), ao(a), {
    width: t,
    height: r
  };
}
function Pn(e, n, o = {}) {
  const { passive: t = !0, eventName: r, defaultValue: a, emit: i } = o, l = r ?? `onUpdate:${n.toString()}`, s = () => {
    var d;
    return (d = e[n]) != null ? d : a;
  };
  if (!t)
    return E({
      get() {
        return s();
      },
      set(d) {
        i ? i(l, d) : k(e[l], d);
      }
    });
  const u = w(s());
  let c = !0;
  return de(
    () => e[n],
    () => {
      c = !1, u.value = s(), je(() => {
        c = !0;
      });
    }
  ), de(
    () => u.value,
    (d) => {
      c && (i ? i(l, d) : k(e[l], d));
    }
  ), u;
}
function P0(e) {
  const n = w(r(e.from)), o = w("pending");
  let t = s();
  function r(u) {
    return gn(u) ? u() : u;
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
    return iu({
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
var O0 = Object.defineProperty, z0 = Object.defineProperties, E0 = Object.getOwnPropertyDescriptors, Gu = Object.getOwnPropertySymbols, T0 = Object.prototype.hasOwnProperty, B0 = Object.prototype.propertyIsEnumerable, Zu = (e, n, o) => n in e ? O0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, hl = (e, n) => {
  for (var o in n || (n = {}))
    T0.call(n, o) && Zu(e, o, n[o]);
  if (Gu)
    for (var o of Gu(n))
      B0.call(n, o) && Zu(e, o, n[o]);
  return e;
}, D0 = (e, n) => z0(e, E0(n)), Ju = (e, n, o) => new Promise((t, r) => {
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
function re(e, n) {
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
        if (Hn(a)) {
          n[t] = D0(hl({}, a), {
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
function I0(e) {
  const n = ib(e), o = document.createElement("div");
  return document.body.appendChild(o), {
    instance: n.mount(o),
    unmount() {
      n.unmount(), o.parentNode && document.body.removeChild(o);
    }
  };
}
function zt(e, n = {}, o = {}) {
  const t = {
    setup() {
      return () => or(e, hl(hl({}, n), o));
    }
  }, { unmount: r } = I0(t);
  return { unmountInstance: r };
}
function su(e) {
  const n = [];
  return e.forEach((o) => {
    if (o.type !== ab) {
      if (o.type === Ne && Ye(o.children)) {
        n.push(...su(o.children));
        return;
      }
      n.push(o);
    }
  }), n;
}
function Qu(e) {
  return Hn(e) && gn(e.safeParseAsync);
}
function A0(e) {
  return Hn(e) && Qo(e, "success");
}
function Kn() {
  const e = w(""), n = (r, a, i) => Ju(this, null, function* () {
    const l = mo(r).filter((u) => Qu(u) || gn(u)), s = yield Promise.all(
      l.map((u) => Qu(u) ? u.safeParseAsync(a) : u(a, i))
    );
    return o(), !s.some((u) => {
      if (A0(u)) {
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
    validateWithTrigger: (r, a, i, l, s) => Ju(this, null, function* () {
      r.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function M0(e) {
  We(() => window, "hashchange", e), We(() => window, "popstate", e);
}
function ot() {
  const e = w(!1);
  return Ho(() => {
    e.value = !1;
  }), Ct(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
const ne = tu("var");
function L(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function vn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
const sr = ee({
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
    return () => dn(e.is) ? or(e.tag, e.is) : e.is;
  }
});
var dp = {
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
  timePickerHint: "SELECT TIME",
  // select
  selectEmptyText: "No Data"
}, fp = {
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
  timePickerHint: "انتخاب زمان",
  // select
  selectEmptyText: "داده‌ای وجود ندارد"
}, pp = {
  // Dialog
  dialogTitle: "確認",
  dialogConfirmButtonText: "確認",
  dialogCancelButtonText: "キャンセル",
  // ActionSheet
  actionSheetTitle: "いずれかを選択",
  // List
  listLoadingText: "読み込み中",
  listFinishedText: "以上です",
  listErrorText: "読み込み失敗",
  // Picker
  pickerTitle: "選択してください",
  pickerConfirmButtonText: "確認",
  pickerCancelButtonText: "キャンセル",
  // date-picker
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
  // pagination
  paginationItem: "件",
  paginationPage: "ページ",
  paginationJump: "ジャンプ",
  // time-picker
  timePickerHint: "時間を選択",
  // select
  selectEmptyText: "データがありません"
}, uu = {
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
  timePickerHint: "选择时间",
  // select
  selectEmptyText: "暂无数据"
}, cu = {
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
  datePickerHint: "選擇日期",
  // pagination
  paginationItem: "條",
  paginationPage: "頁",
  paginationJump: "前往",
  // time-picker
  timePickerHint: "選擇時間",
  // select
  selectEmptyText: "暫無數據"
}, vp = cu, N0 = Object.defineProperty, xu = Object.getOwnPropertySymbols, V0 = Object.prototype.hasOwnProperty, R0 = Object.prototype.propertyIsEnumerable, _u = (e, n, o) => n in e ? N0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ec = (e, n) => {
  for (var o in n || (n = {}))
    V0.call(n, o) && _u(e, o, n[o]);
  if (xu)
    for (var o of xu(n))
      R0.call(n, o) && _u(e, o, n[o]);
  return e;
};
function du() {
  const e = w({}), n = w({}), o = (i, l) => {
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
      e.value[i] = ec(ec({}, e.value[i]), l), t(i);
    },
    t: (i) => {
      if (Qo(n.value, i))
        return n.value[i];
    }
  };
}
const { messages: mp, currentMessage: hp, add: fu, use: pu, merge: gp, t: an } = du();
fu("zh-CN", uu);
pu("zh-CN");
const WB = {
  zhCN: uu,
  enUS: dp,
  zhTW: cu,
  zhHK: vp,
  faIR: fp,
  jaJP: pp,
  messages: mp,
  currentMessage: hp,
  add: fu,
  use: pu,
  merge: gp,
  t: an,
  useLocale: du
};
var gl = {
  zhCN: uu,
  enUS: dp,
  zhTW: cu,
  zhHK: vp,
  faIR: fp,
  jaJP: pp,
  messages: mp,
  currentMessage: hp,
  add: fu,
  use: pu,
  merge: gp,
  t: an,
  useLocale: du
};
const bl = Symbol("LOCALE_PROVIDER_KEY");
function F0(e) {
  Zs(bl, e);
}
function io() {
  return lu(bl) ? Xs(bl) : { t: null };
}
const bp = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, KB = on(bp);
var Ln = on(bp);
const { n: nc } = ne("");
function yp() {
  Object.keys(Ln.locks).length <= 0 ? document.body.classList.remove(nc("$--lock")) : document.body.classList.add(nc("$--lock"));
}
function br(e) {
  Ln.locks[e] = 1, yp();
}
function yr(e) {
  delete Ln.locks[e], yp();
}
function ur(e, n) {
  const { uid: o } = nt();
  n && de(n, (t) => {
    t === !1 ? yr(o) : t === !0 && e() === !0 && br(o);
  }), de(e, (t) => {
    n && n() === !1 || (t === !0 ? br(o) : yr(o));
  }), lb(() => {
    n && n() === !1 || e() === !0 && br(o);
  }), nr(() => {
    n && n() === !1 || e() === !0 && yr(o);
  }), Ho(() => {
    n && n() === !1 || e() === !0 && br(o);
  }), Ct(() => {
    n && n() === !1 || e() === !0 && yr(o);
  });
}
const Co = [];
function vu(e, n) {
  const { uid: o } = nt();
  de(e, (i) => {
    i && !a(o) ? r() : setTimeout(() => {
      No(Co, a(o));
    });
  }), yn(() => {
    e() && r();
  }), Pt(() => {
    No(Co, a(o));
  });
  function t() {
    return Co.length === 0 ? !0 : (Co.sort((i, l) => i.zIndex.value - l.zIndex.value), Co[Co.length - 1].uid === o);
  }
  function r() {
    a(o) || Co.push({ uid: o, zIndex: n });
  }
  function a(i) {
    return Co.find((l) => l.uid === i);
  }
  return {
    onStackTop: t
  };
}
function cr(e, n) {
  const o = w(Ln.zIndex);
  return de(
    e,
    (t) => {
      t && (Ln.zIndex += n, o.value = Ln.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: o };
}
const Et = {
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
}, wp = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function kp() {
  const { bindParent: e, parentProvider: n, index: o } = wn(wp);
  return {
    index: o,
    popup: n,
    bindPopup: e
  };
}
function L0() {
  const { bindChildren: e, childProviders: n, length: o } = kn(wp);
  return {
    length: o,
    popupItems: n,
    bindPopupItems: e
  };
}
var U0 = Object.defineProperty, oc = Object.getOwnPropertySymbols, H0 = Object.prototype.hasOwnProperty, j0 = Object.prototype.propertyIsEnumerable, tc = (e, n, o) => n in e ? U0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Y0 = (e, n) => {
  for (var o in n || (n = {}))
    H0.call(n, o) && tc(e, o, n[o]);
  if (oc)
    for (var o of oc(n))
      j0.call(n, o) && tc(e, o, n[o]);
  return e;
};
const {
  name: W0,
  n: Xn,
  classes: rl
} = ne("popup");
var ya = ee({
  name: W0,
  inheritAttrs: !1,
  props: Et,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = $0(() => e.show, !0), {
      zIndex: r
    } = cr(() => e.show, 3), a = E(() => {
      var m;
      return (m = e.zIndex) != null ? m : r.value;
    }), {
      onStackTop: i
    } = vu(() => e.show, a), {
      disabled: l
    } = ot(), {
      bindPopupItems: s
    } = L0();
    ur(() => e.show, () => e.lockScroll), de(() => e.show, (m) => {
      k(m ? e.onOpen : e.onClose);
    }), s({
      show: E(() => e.show)
    }), We(() => window, "keydown", v), M0(() => k(e.onRouteChange));
    function u() {
      const {
        closeOnClickOverlay: m,
        onClickOverlay: h
      } = e;
      k(h), m && k(e["onUpdate:show"], !1);
    }
    function c() {
      const {
        overlayClass: m = "",
        overlayStyle: h
      } = e;
      return G("div", {
        class: rl(Xn("overlay"), m),
        style: Y0({
          zIndex: a.value - 1
        }, h),
        onClick: u
      }, null);
    }
    function d() {
      return Fe(G("div", Ke({
        class: rl(Xn("content"), Xn(`--${e.position}`), [e.defaultStyle, Xn("--content-background-color")], [e.defaultStyle, Xn("$-elevation--3")], [e.safeArea, Xn("--safe-area")], [e.safeAreaTop, Xn("--safe-area-top")]),
        style: {
          zIndex: a.value
        },
        role: "dialog",
        "aria-modal": "true"
      }, o), [t.value && k(n.default)]), [[xn, e.show]]);
    }
    function f() {
      return G(nn, {
        name: Xn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Fe(G("div", {
          class: rl(Xn("$--box"), Xn(), [!e.overlay, Xn("--pointer-events-none")]),
          style: {
            zIndex: a.value - 2
          }
        }, [e.overlay && c(), G(nn, {
          name: e.transition || Xn(`$-pop-${e.position}`)
        }, {
          default: () => [d()]
        })]), [[xn, e.show]])]
      });
    }
    function v(m) {
      !i() || m.key !== "Escape" || !e.show || (k(e.onKeyEscape), e.closeOnKeyEscape && (Re(m), k(e["onUpdate:show"], !1)));
    }
    return () => {
      const {
        teleport: m
      } = e;
      return m ? G(co, {
        to: m,
        disabled: l.value
      }, {
        default: () => [f()]
      }) : f();
    };
  }
});
re(ya);
le(ya, Et);
const qB = ya;
var Ro = ya, K0 = Object.defineProperty, q0 = Object.defineProperties, X0 = Object.getOwnPropertyDescriptors, rc = Object.getOwnPropertySymbols, G0 = Object.prototype.hasOwnProperty, Z0 = Object.prototype.propertyIsEnumerable, ac = (e, n, o) => n in e ? K0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, $p = (e, n) => {
  for (var o in n || (n = {}))
    G0.call(n, o) && ac(e, o, n[o]);
  if (rc)
    for (var o of rc(n))
      Z0.call(n, o) && ac(e, o, n[o]);
  return e;
}, J0 = (e, n) => q0(e, X0(n));
const { n: Cp } = ne("ripple"), ic = 250;
function Q0(e) {
  const { zIndex: n, position: o } = Wn(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", o === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function lc(e) {
  return "touches" in e;
}
function x0(e, n) {
  const { top: o, left: t } = tn(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = lc(n) ? n.touches[0].clientX - t : r / 2, u = lc(n) ? n.touches[0].clientY - o : a / 2, c = (r - i * 2) / 2, d = (a - i * 2) / 2, f = s - i, v = u - i;
  return { x: f, y: v, centerX: c, centerY: d, size: l };
}
function mu(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !Ln.enableRipple)
    return;
  const o = () => {
    n.tasker = null;
    const { x: t, y: r, centerX: a, centerY: i, size: l } = x0(this, e), s = document.createElement("div");
    s.classList.add(Cp()), s.style.opacity = "0", s.style.transform = `translate(${t}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Q0(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(o, 30);
}
function Jr() {
  const e = this._ripple, n = () => {
    const o = this.querySelectorAll(`.${Cp()}`);
    if (!o.length)
      return;
    const t = o[o.length - 1], r = ic - performance.now() + Number(t.dataset.createdAt);
    window.setTimeout(() => {
      t.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = t.parentNode) == null ? void 0 : a.removeChild(t);
      }, ic);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Sp() {
  if (!jf() || !Ln.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
let Qr = !1;
function _0(e) {
  Qr || !(e.key === " " || e.key === "Enter") || (mu.call(this, e), Qr = !0);
}
function sc() {
  Qr && (Jr.call(this), Qr = !1);
}
function ey(e, n) {
  var o;
  e._ripple = J0($p({
    tasker: null
  }, (o = n.value) != null ? o : {}), {
    removeRipple: Jr.bind(e)
  }), e.addEventListener("touchstart", mu, { passive: !0 }), e.addEventListener("touchmove", Sp, { passive: !0 }), e.addEventListener("dragstart", Jr, { passive: !0 }), e.addEventListener("keydown", _0), e.addEventListener("keyup", sc), e.addEventListener("blur", sc), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function ny(e) {
  e.removeEventListener("touchstart", mu), e.removeEventListener("touchmove", Sp), e.removeEventListener("dragstart", Jr), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function oy(e, n) {
  var o, t, r, a, i, l;
  const s = {
    color: (o = n.value) == null ? void 0 : o.color,
    disabled: (t = n.value) == null ? void 0 : t.disabled
  };
  (s.color !== ((r = e._ripple) == null ? void 0 : r.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = $p({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const Pp = {
  mounted: ey,
  unmounted: ny,
  updated: oy,
  install(e) {
    e.directive("ripple", this);
  }
}, XB = Pp;
var sn = Pp;
function Op(e) {
  return e ? !!(e === "desktop" && Ut() || e === "mobile" && !Ut()) : !1;
}
function ty(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce(
    (o, t) => {
      const [r, a] = t.split(":").map((i) => i.trim());
      return o[ma(r)] = a, o;
    },
    {}
  ) : {};
}
function ry(e) {
  const { value: n } = e._hover, o = ty(e);
  Object.keys(n).forEach((t) => {
    const r = ma(t);
    n[r] != null && o[r] && (e._hover.rawStyle[r] = o[r]);
  });
}
function hu(e, n) {
  Object.keys(n).forEach((o) => {
    const t = n[o];
    t != null && (e.style[o] = t);
  });
}
function ay(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function zp(e) {
  e?._hover != null && (ay(e), hu(e, e._hover.rawStyle));
}
function Ep() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, gn(e)) {
    e(this._hover.hovering);
    return;
  }
  hu(this, e);
}
function Tp() {
  if (this._hover.hovering = !1, gn(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  zp(this);
}
function Bp(e, n) {
  var o, t;
  const { arg: r, value: a } = n;
  Op(r) || (e._hover = {
    value: a,
    hovering: (t = (o = e._hover) == null ? void 0 : o.hovering) != null ? t : !1,
    rawStyle: {}
  }, ry(e), e.addEventListener("mouseenter", Ep), e.addEventListener("mouseleave", Tp));
}
function Dp(e, n) {
  Op(n.arg) || (zp(e), e.removeEventListener("mouseenter", Ep), e.removeEventListener("mouseleave", Tp));
}
function iy(e, n) {
  e._hover && Dp(e, n);
}
function ly(e, n) {
  return !gn(n.value) && e._hover.hovering;
}
function sy(e, n) {
  Bp(e, n), ly(e, n) && hu(e, n.value);
}
const Ip = {
  mounted: Bp,
  unmounted: Dp,
  beforeUpdate: iy,
  updated: sy,
  install(e) {
    e.directive("hover", this);
  }
}, GB = Ip;
var Nn = Ip;
const Ap = {
  hovering: Boolean,
  focusing: Boolean
}, { name: uy, n: cy, classes: dy } = ne("hover-overlay");
function fy(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.hovering, e.n("--hovering")], [e.focusing && !e.inMobile(), e.n("--focusing")]))
    },
    null,
    2
    /* CLASS */
  );
}
const Mp = ee({
  name: uy,
  props: Ap,
  setup: () => ({
    n: cy,
    classes: dy,
    inMobile: Ut
  })
});
Mp.render = fy;
var wa = Mp;
re(wa);
le(wa, Ap);
function to() {
  const e = w(!1);
  return {
    hovering: e,
    handleHovering: (o) => {
      e.value = o;
    }
  };
}
const ZB = wa;
var Yn = wa;
function py(e) {
  const { left: n } = tn(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function uc(e) {
  const { top: n } = tn(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function al(e) {
  const { transform: n } = Wn(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Fo(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const o = /(scroll|auto)/, { overflowY: t, overflow: r } = Wn(n);
    if (o.test(t) || o.test(r))
      return n;
  }
  return window;
}
function vy(e) {
  const n = [];
  let o = e;
  for (; !va(o); )
    o = Fo(o), n.push(o);
  return n;
}
function Np(e, n) {
  if (dn(e)) {
    const o = document.querySelector(e);
    return jn(!!o, n, "target element cannot found"), o;
  }
  return jn(bo(e), n, 'type of prop "target" should be an element object'), e;
}
function my() {
  const { width: e, height: n } = tn(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const hy = (e) => dn(e) && e.endsWith("rem"), gy = (e) => dn(e) && e.endsWith("px") || Bn(e), by = (e) => dn(e) && e.endsWith("vw"), yy = (e) => dn(e) && e.endsWith("vh"), wy = (e) => dn(e) && e.endsWith("vmin"), ky = (e) => dn(e) && e.endsWith("vmax"), rn = (e) => {
  if (_s(e))
    return Number(e);
  if (gy(e))
    return +e.replace("px", "");
  if (!ro())
    return 0;
  const { vw: n, vh: o, vMin: t, vMax: r } = my();
  if (by(e))
    return +e.replace("vw", "") * n / 100;
  if (yy(e))
    return +e.replace("vh", "") * o / 100;
  if (wy(e))
    return +e.replace("vmin", "") * t / 100;
  if (ky(e))
    return +e.replace("vmax", "") * r / 100;
  if (hy(e)) {
    const a = +e.replace("rem", ""), i = Wn(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return dn(e) ? j(e) : 0;
}, Ee = (e) => {
  if (e != null)
    return _s(e) ? `${e}px` : String(e);
}, En = (e, n = 1) => {
  if (e == null)
    return;
  const o = Ee(e), t = o.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(o) * n}${t}`;
};
function Ht(e, { top: n = 0, left: o = 0, duration: t = 300, animation: r }) {
  const a = Date.now(), i = yo(e), l = lr(e);
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
function Vp(e) {
  return Object.entries(e ?? {}).reduce((n, [o, t]) => {
    const r = o.startsWith("--") ? o : `--${ou(o)}`;
    return n[r] = t, n;
  }, {});
}
function xr(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
function $y(e) {
  let n = e;
  for (; n && n !== document.documentElement; ) {
    if (Wn(n).display === "none")
      return !0;
    n = n.parentNode;
  }
  return !1;
}
const cc = ["button", "input", "select", "textarea", "[tabindex]", "[href]"].map((e) => `${e}:not([disabled])`).join(", ");
function gu(e, n, o, t) {
  const r = Array.from(n.querySelectorAll(cc)).filter(
    (s) => !$y(s)
  );
  if (!r.length)
    return;
  const a = [e, ...Array.from(e.querySelectorAll(cc))].findIndex(
    (s) => s === document.activeElement
  ) !== -1, i = Array.from(r).findIndex((s) => s === document.activeElement);
  if (o === "ArrowDown") {
    if (a && i === -1 || i === r.length - 1) {
      l(r[0]);
      return;
    }
    if (i !== -1 && i < r.length - 1) {
      l(r[i + 1]);
      return;
    }
  }
  if (o === "ArrowUp") {
    if (a && i === -1 || i === 0) {
      l(r[r.length - 1]);
      return;
    }
    i > 0 && l(r[i - 1]);
  }
  function l(s) {
    t && !t(document.activeElement, s, a) || s.focus();
  }
}
const ln = {
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
var Cy = (e, n, o) => new Promise((t, r) => {
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
const { name: Sy, n: Py, classes: Oy } = ne("icon");
function zy(e, n) {
  return g(), ye(St(e.isURL(e.name) ? "img" : "i"), {
    class: p(
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
const Rp = ee({
  name: Sy,
  props: ln,
  setup(e) {
    const n = w(""), o = w(!1);
    de(() => e.name, t, { immediate: !0 });
    function t(r, a) {
      return Cy(this, null, function* () {
        const { transition: i } = e;
        if (a == null || j(i) === 0) {
          n.value = r;
          return;
        }
        o.value = !0, yield je(), setTimeout(() => {
          a != null && (n.value = r), o.value = !1;
        }, j(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: o,
      n: Py,
      classes: Oy,
      isURL: g0,
      toNumber: j,
      toSizeUnit: Ee
    };
  }
});
Rp.render = zy;
var ka = Rp;
re(ka);
le(ka, ln);
const JB = ka;
var Qe = ka;
const { name: Ey, n: Ty, classes: By } = ne("action-sheet");
function Dy(e, n) {
  const o = x("var-icon"), t = x("var-hover-overlay"), r = Xe("ripple"), a = Xe("hover");
  return Fe((g(), P(
    "div",
    {
      class: p(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
      style: X({ color: e.color })
    },
    [
      e.icon ? (g(), ye(o, {
        key: 0,
        "var-action-sheet-cover": "",
        class: p(e.n("action-icon")),
        namespace: e.namespace,
        name: e.icon,
        size: e.iconSize
      }, null, 8, ["class", "namespace", "name", "size"])) : K("v-if", !0),
      F(
        "div",
        {
          class: p(e.n("action-name"))
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
const Fp = ee({
  name: Ey,
  components: {
    VarHoverOverlay: Yn,
    VarIcon: Qe
  },
  directives: { Ripple: sn, Hover: Nn },
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
    const { hovering: e, handleHovering: n } = to();
    return {
      hovering: e,
      n: Ty,
      classes: By,
      handleHovering: n
    };
  }
});
Fp.render = Dy;
var Iy = Fp, Ay = Object.defineProperty, dc = Object.getOwnPropertySymbols, My = Object.prototype.hasOwnProperty, Ny = Object.prototype.propertyIsEnumerable, fc = (e, n, o) => n in e ? Ay(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Vy = (e, n) => {
  for (var o in n || (n = {}))
    My.call(n, o) && fc(e, o, n[o]);
  if (dc)
    for (var o of dc(n))
      Ny.call(n, o) && fc(e, o, n[o]);
  return e;
};
const Lp = Vy({
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
}, Me(Et, [
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
])), { name: Ry, n: Fy, classes: Ly } = ne("action-sheet");
function Uy(e, n) {
  const o = x("var-action-item"), t = x("var-popup");
  return g(), ye(t, {
    show: e.show,
    "onUpdate:show": n[0] || (n[0] = (r) => e.show = r),
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
    default: ce(() => [
      F(
        "div",
        Ke({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          H(e.$slots, "title", {}, () => {
            var r;
            return [
              F(
                "div",
                {
                  class: p(e.n("title"))
                },
                ie((r = e.title) != null ? r : (e.pt ? e.pt : e.t)("actionSheetTitle")),
                3
                /* TEXT, CLASS */
              )
            ];
          }),
          H(e.$slots, "actions", {}, () => [
            (g(!0), P(
              Ne,
              null,
              Ze(e.actions, (r) => (g(), ye(o, {
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
  }, 8, ["show", "class", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "close-on-key-escape", "teleport", "safe-area", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onKeyEscape"]);
}
const Up = ee({
  name: Ry,
  directives: { Ripple: sn },
  components: {
    VarPopup: Ro,
    VarActionItem: Iy
  },
  inheritAttrs: !1,
  props: Lp,
  setup(e) {
    const n = Pn(e, "show"), { t: o } = io();
    function t(r) {
      if (r.disabled)
        return;
      const { closeOnClickAction: a, onSelect: i } = e;
      k(i, r), a && (n.value = !1);
    }
    return {
      show: n,
      pt: o,
      t: an,
      n: Fy,
      classes: Ly,
      handleSelect: t
    };
  }
});
Up.render = Uy;
var dr = Up, Hy = Object.defineProperty, pc = Object.getOwnPropertySymbols, jy = Object.prototype.hasOwnProperty, Yy = Object.prototype.propertyIsEnumerable, vc = (e, n, o) => n in e ? Hy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, mc = (e, n) => {
  for (var o in n || (n = {}))
    jy.call(n, o) && vc(e, o, n[o]);
  if (pc)
    for (var o of pc(n))
      Yy.call(n, o) && vc(e, o, n[o]);
  return e;
};
let Eo, bu = {};
function Wy(e = {}) {
  return mc(mc({}, bu), e);
}
function jo(e) {
  return ro() ? new Promise((n) => {
    jo.close();
    const o = on(Wy(e));
    o.teleport = "body", Eo = o;
    const { unmountInstance: t } = zt(dr, o, {
      onSelect: (r) => {
        k(o.onSelect, r), n(r);
      },
      onClose: () => {
        k(o.onClose), n("close");
      },
      onClosed: () => {
        k(o.onClosed), t(), Eo === o && (Eo = null);
      },
      onRouteChange: () => {
        t(), Eo === o && (Eo = null);
      },
      "onUpdate:show": (r) => {
        o.show = r;
      }
    });
    o.show = !0;
  }) : Promise.resolve();
}
jo.setDefaultOptions = function(e) {
  bu = e;
};
jo.resetDefaultOptions = function() {
  bu = {};
};
jo.close = function() {
  if (Eo != null) {
    const e = Eo;
    Eo = null, je().then(() => {
      e.show = !1;
    });
  }
};
jo.Component = dr;
re(dr);
re(dr, jo);
le(jo, Lp);
const QB = dr;
var yl = jo;
const Hp = {
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
  onClose: L()
}, { name: Ky, n: qy, classes: Xy } = ne("alert"), Gy = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  danger: "error"
};
function Zy(e, n) {
  const o = x("var-icon");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), e.n(`--${e.type}`), e.formatElevation(e.elevation, 2))),
      style: X({
        "background-color": e.color
      }),
      role: "alert"
    },
    [
      e.isInternalType || e.$slots.icon ? (g(), P(
        "div",
        {
          key: 0,
          class: p(e.n("icon"))
        },
        [
          H(e.$slots, "icon", {}, () => [
            e.isInternalType ? (g(), ye(o, {
              key: 0,
              name: e.iconTypeMap[e.type]
            }, null, 8, ["name"])) : K("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      )) : K("v-if", !0),
      H(e.$slots, "content", {}, () => [
        F(
          "div",
          {
            class: p(e.n("content"))
          },
          [
            e.title || e.$slots.title ? (g(), P(
              "div",
              {
                key: 0,
                class: p(e.n("title"))
              },
              [
                H(e.$slots, "title", {}, () => [
                  Ae(
                    ie(e.title),
                    1
                    /* TEXT */
                  )
                ])
              ],
              2
              /* CLASS */
            )) : K("v-if", !0),
            e.message || e.$slots.default ? (g(), P(
              "div",
              {
                key: 1,
                class: p(e.n("message"))
              },
              [
                H(e.$slots, "default", {}, () => [
                  Ae(
                    ie(e.message),
                    1
                    /* TEXT */
                  )
                ])
              ],
              2
              /* CLASS */
            )) : K("v-if", !0)
          ],
          2
          /* CLASS */
        )
      ]),
      e.closeable ? (g(), P(
        "div",
        {
          key: 1,
          class: p(e.n("close-icon")),
          onClick: n[0] || (n[0] = (...t) => e.handleClose && e.handleClose(...t))
        },
        [
          H(e.$slots, "close-icon", {}, () => [
            G(o, { name: "close-circle" })
          ])
        ],
        2
        /* CLASS */
      )) : K("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  );
}
const jp = ee({
  name: Ky,
  components: {
    VarIcon: Qe
  },
  props: Hp,
  setup(e) {
    const n = E(() => ["info", "success", "danger", "warning"].includes(e.type));
    function o(t) {
      k(e.onClose, t);
    }
    return {
      n: qy,
      classes: Xy,
      iconTypeMap: Gy,
      isInternalType: n,
      formatElevation: vn,
      handleClose: o
    };
  }
});
jp.render = Zy;
var $a = jp;
re($a);
le($a, Hp);
const xB = $a;
var wl = $a;
const Yp = {
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
}, { name: Jy, n: Qy, classes: xy } = ne("app-bar");
function _y(e, n) {
  return g(), P(
    Ne,
    null,
    [
      F(
        "div",
        Ke({
          ref: "appBar",
          class: e.classes(
            e.n(),
            e.n("$--box"),
            [e.safeAreaTop, e.n("--safe-area-top")],
            [e.round, e.n("--round")],
            [e.fixed, e.n("--fixed")],
            [e.border, e.n("--border")],
            e.formatElevation(e.elevation, 3)
          ),
          style: e.rootStyles
        }, e.$attrs),
        [
          F(
            "div",
            {
              class: p(e.n("toolbar"))
            },
            [
              F(
                "div",
                {
                  class: p(e.n("left"))
                },
                [
                  H(e.$slots, "left"),
                  e.titlePosition === "left" ? (g(), P(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: X({ paddingLeft: e.paddingLeft })
                    },
                    [
                      H(e.$slots, "default", {}, () => [
                        Ae(
                          ie(e.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : K("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              e.titlePosition === "center" ? (g(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("title"))
                },
                [
                  H(e.$slots, "default", {}, () => [
                    Ae(
                      ie(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )) : K("v-if", !0),
              F(
                "div",
                {
                  class: p(e.n("right"))
                },
                [
                  e.titlePosition === "right" ? (g(), P(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: X({ paddingRight: e.paddingRight })
                    },
                    [
                      H(e.$slots, "default", {}, () => [
                        Ae(
                          ie(e.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : K("v-if", !0),
                  H(e.$slots, "right")
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          ),
          H(e.$slots, "content")
        ],
        16
        /* FULL_PROPS */
      ),
      e.fixed && e.placeholder ? (g(), P(
        "div",
        {
          key: 0,
          class: p(e.n("placeholder")),
          style: X({ height: e.placeholderHeight })
        },
        null,
        6
        /* CLASS, STYLE */
      )) : K("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const Wp = ee({
  name: Jy,
  props: Yp,
  setup(e, { slots: n }) {
    const o = w(null), t = w(), r = w(), a = w(), i = E(() => {
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
    ao(s), yn(() => {
      l(), s();
    }), tr(l);
    function l() {
      t.value = n.left ? 0 : void 0, r.value = n.right ? 0 : void 0;
    }
    function s() {
      if (!e.fixed || !e.placeholder)
        return;
      const { height: u } = tn(o.value);
      a.value = Ee(u);
    }
    return {
      rootStyles: i,
      paddingLeft: t,
      paddingRight: r,
      n: Qy,
      classes: xy,
      formatElevation: vn,
      appBar: o,
      placeholderHeight: a
    };
  }
});
Wp.render = _y;
var Ca = Wp;
re(Ca);
le(Ca, Yp);
const _B = Ca;
var kl = Ca;
const Kp = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: e1, n: n1 } = ne("form-details"), o1 = { key: 0 }, t1 = { key: 0 };
function r1(e, n) {
  return g(), ye(nn, {
    name: e.n()
  }, {
    default: ce(() => [
      e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (g(), P(
        "div",
        {
          key: 0,
          class: p(e.n())
        },
        [
          F(
            "div",
            {
              class: p(e.n("error-message"))
            },
            [
              G(nn, {
                name: e.n("message")
              }, {
                default: ce(() => [
                  e.errorMessage ? (g(), P(
                    "div",
                    o1,
                    ie(e.errorMessage),
                    1
                    /* TEXT */
                  )) : K("v-if", !0)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          ),
          F(
            "div",
            {
              class: p(e.n("extra-message"))
            },
            [
              G(nn, {
                name: e.n("message")
              }, {
                default: ce(() => [
                  H(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (g(), P(
                      "div",
                      t1,
                      ie(e.extraMessage),
                      1
                      /* TEXT */
                    )) : K("v-if", !0)
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
      )) : K("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const qp = ee({
  name: e1,
  props: Kp,
  setup: () => ({ n: n1 })
});
qp.render = r1;
var Sa = qp;
re(Sa);
le(Sa, Kp);
const eD = Sa;
var Dn = Sa, a1 = Object.defineProperty, i1 = Object.defineProperties, l1 = Object.getOwnPropertyDescriptors, hc = Object.getOwnPropertySymbols, s1 = Object.prototype.hasOwnProperty, u1 = Object.prototype.propertyIsEnumerable, gc = (e, n, o) => n in e ? a1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, c1 = (e, n) => {
  for (var o in n || (n = {}))
    s1.call(n, o) && gc(e, o, n[o]);
  if (hc)
    for (var o of hc(n))
      u1.call(n, o) && gc(e, o, n[o]);
  return e;
}, d1 = (e, n) => i1(e, l1(n));
const Xp = Symbol("FORM_BIND_FORM_ITEM_KEY");
function qn() {
  const { parentProvider: e, index: n, bindParent: o } = wn(Xp), t = nt();
  return {
    index: n,
    form: e,
    bindForm: o ? (a) => {
      o(d1(c1({}, a), { instance: t }));
    } : null
  };
}
function f1() {
  const { childProviders: e, length: n, bindChildren: o } = kn(Xp);
  return {
    length: n,
    formItems: e,
    bindFormItems: o
  };
}
const Gp = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Zp = Symbol(
  "SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY"
);
function p1() {
  const { childProviders: e, length: n, bindChildren: o } = kn(
    Gp
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: o
  };
}
function v1() {
  const { childProviders: e, bindChildren: n } = kn(
    Zp
  );
  return {
    swipeResizeListeners: e,
    bindSwipeResizeListeners: n
  };
}
function m1() {
  const { parentProvider: e, bindParent: n } = wn(
    Zp
  );
  return {
    swipeResizeDispatcher: e,
    bindSwipeResizeDispatcher: n
  };
}
const Pa = {
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
  disabled: Boolean,
  clearable: Boolean,
  cursor: String,
  composing: Boolean,
  onClick: L(),
  onClear: L()
};
var h1 = (e, n, o) => new Promise((t, r) => {
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
const { name: g1, n: il, classes: b1 } = ne("field-decorator"), y1 = ["for"];
function w1(e, n) {
  const o = x("var-icon");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      F(
        "div",
        {
          class: p(
            e.classes(
              e.n("controller"),
              [e.isFocusing, e.n("--focus")],
              [e.isError, e.n("--error")],
              [e.formDisabled || e.disabled, e.n("--disabled")],
              [!e.line, e.n("--bottom-border-radius")]
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
          F(
            "div",
            {
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              H(e.$slots, "prepend-icon")
            ],
            2
            /* CLASS */
          ),
          F(
            "div",
            {
              ref: "middleEl",
              class: p(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
            },
            [
              H(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          e.placeholder && e.hint ? (g(), P("label", {
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
            style: X({ color: e.color }),
            for: e.id
          }, [
            F(
              "span",
              null,
              ie(e.placeholder),
              1
              /* TEXT */
            )
          ], 14, y1)) : K("v-if", !0),
          F(
            "div",
            {
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              e.clearable && !e.isEmpty(e.value) ? H(e.$slots, "clear-icon", {
                key: 0,
                clear: e.handleClear
              }, () => [
                G(o, {
                  class: p(e.n("clear-icon")),
                  "var-field-decorator-cover": "",
                  name: "close-circle",
                  onClick: e.handleClear
                }, null, 8, ["class", "onClick"])
              ]) : K("v-if", !0),
              H(e.$slots, "append-icon")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.line ? (g(), P(
        Ne,
        { key: 0 },
        [
          e.variant === "outlined" ? (g(), P(
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
              style: X({ borderColor: e.color })
            },
            [
              F(
                "legend",
                {
                  class: p(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
                  style: X({ width: e.legendWidth })
                },
                [
                  e.placeholder && e.hint ? (g(), ye(co, {
                    key: 0,
                    to: "body"
                  }, [
                    F(
                      "span",
                      {
                        ref: "placeholderTextEl",
                        class: p(
                          e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")])
                        )
                      },
                      ie(e.placeholder),
                      3
                      /* TEXT, CLASS */
                    )
                  ])) : K("v-if", !0)
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : (g(), P(
            "div",
            {
              key: 1,
              class: p(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.isError, e.n("--line-error")])),
              style: X({ background: e.isError ? void 0 : e.blurColor })
            },
            [
              F(
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
      )) : K("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Jp = ee({
  name: g1,
  components: { VarIcon: Qe },
  props: Pa,
  setup(e) {
    const n = w(null), o = w(null), t = w(""), r = w("0px"), a = w("0px"), i = w("0px"), l = w(!0), s = E(() => e.hint && (!Zn(e.value) || e.isFocusing)), { popup: u, bindPopup: c } = kp(), { bindSwipeResizeDispatcher: d } = m1(), f = E(
      () => e.isError ? void 0 : e.isFocusing ? e.focusColor : e.blurColor
    );
    ao(y), yn(() => {
      y(), je().then(() => {
        l.value = !1;
      });
    }), tr(y), k(c, null), k(d, {
      onResize() {
        je().then(y);
      }
    }), u && de(
      () => u.show.value,
      (C) => h1(this, null, function* () {
        C && (yield bn(), y());
      })
    );
    function v() {
      const { hint: C, value: $, composing: b } = e;
      if (!C && (!Zn($) || b))
        return il("--placeholder-hidden");
      if (s.value)
        return il("--placeholder-hint");
    }
    function m(C) {
      k(e.onClear, C);
    }
    function h(C) {
      k(e.onClick, C);
    }
    function y() {
      if (r.value = `${o.value.offsetLeft}px`, a.value = `${o.value.offsetWidth}px`, i.value = `${o.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
        const C = Wn(n.value), $ = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
        t.value = `calc(${C.width} * 0.75 + ${$} * 2)`;
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
      resize: y,
      computePlaceholderState: v,
      n: il,
      classes: b1,
      isEmpty: Zn,
      handleClear: m,
      handleClick: h
    };
  }
});
Jp.render = w1;
var Oa = Jp;
re(Oa);
le(Oa, Pa);
const nD = Oa;
var jt = Oa, k1 = Object.defineProperty, $1 = Object.defineProperties, C1 = Object.getOwnPropertyDescriptors, bc = Object.getOwnPropertySymbols, S1 = Object.prototype.hasOwnProperty, P1 = Object.prototype.propertyIsEnumerable, yc = (e, n, o) => n in e ? k1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, O1 = (e, n) => {
  for (var o in n || (n = {}))
    S1.call(n, o) && yc(e, o, n[o]);
  if (bc)
    for (var o of bc(n))
      P1.call(n, o) && yc(e, o, n[o]);
  return e;
}, z1 = (e, n) => $1(e, C1(n));
const yu = z1(O1({
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
  rules: [Array, Function, Object],
  enterkeyhint: String,
  preventAutoFill: {
    type: Boolean,
    default: !0
  },
  inputmode: String,
  tabindex: String,
  onFocus: L(),
  onBlur: L(),
  onInput: L(),
  onChange: L(),
  onClear: L(),
  "onUpdate:modelValue": L()
}, Me(Pa, [
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
}), { name: E1, n: T1, classes: B1 } = ne("input"), D1 = ["aria-label", "placeholder", "enterkeyhint"], I1 = ["id", "aria-label", "autocomplete", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode", "tabindex"], A1 = ["id", "aria-label", "autocomplete", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "tabindex", "inputmode"];
function M1(e, n) {
  const o = x("var-field-decorator"), t = x("var-form-details");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[12] || (n[12] = (...r) => e.handleMousedown && e.handleMousedown(...r))
    },
    [
      G(
        o,
        Go(pa({
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
          disabled: e.disabled,
          clearable: e.clearable,
          cursor: e.cursor,
          composing: e.isComposing,
          hintCenter: !e.textarea,
          onClick: e.handleClick,
          onClear: e.handleClear
        })),
        Jo({
          "clear-icon": ce(({ clear: r }) => [
            H(e.$slots, "clear-icon", { clear: r })
          ]),
          "append-icon": ce(() => [
            H(e.$slots, "append-icon")
          ]),
          default: ce(() => [
            e.normalizedType === "password" && e.preventAutoFill ? (g(), P("input", {
              key: 0,
              tabindex: "-1",
              "aria-label": e.ariaLabel,
              class: p(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: X({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, D1)) : K("v-if", !0),
            e.textarea ? (g(), P("textarea", {
              key: 1,
              id: e.id,
              ref: "el",
              "aria-label": e.ariaLabel,
              class: p(
                e.classes(
                  e.n("input"),
                  e.n("--textarea"),
                  [e.formDisabled || e.disabled, e.n("--disabled")],
                  [e.errorMessage, e.n("--error")],
                  [e.errorMessage, e.n("--caret-error")]
                )
              ),
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
            }, null, 46, I1)) : (g(), P("input", {
              key: 2,
              id: e.id,
              ref: "el",
              "aria-label": e.ariaLabel,
              class: p(
                e.classes(
                  e.n("input"),
                  [e.formDisabled || e.disabled, e.n("--disabled")],
                  [e.errorMessage, e.n("--error")],
                  [e.errorMessage, e.n("--caret-error")]
                )
              ),
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
            }, null, 46, A1))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: ce(() => [
              H(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      ),
      e.isShowFormDetails ? (g(), ye(t, {
        key: 0,
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, Jo({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: ce(() => [
            H(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"])) : K("v-if", !0)
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Qp = ee({
  name: E1,
  components: {
    VarFormDetails: Dn,
    VarFieldDecorator: jt
  },
  props: yu,
  setup(e) {
    const n = cp(), o = w(null), t = w(!1), r = w(!1), { bindForm: a, form: i } = qn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Kn(), d = E(() => e.disabled || e.readonly ? "" : "text"), f = E(() => e.type === "number" ? "text" : e.type), v = E(() => {
      const { maxlength: q, modelValue: ve } = e;
      return q ? Zn(ve) ? `0 / ${q}` : `${String(ve).length}/${q}` : "";
    }), m = E(() => {
      const { hint: q, blurColor: ve, focusColor: Pe } = e;
      if (!q)
        return l.value ? "var(--field-decorator-error-color)" : t.value ? Pe || "var(--field-decorator-focus-color)" : ve || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    k(a, {
      reset: I,
      validate: R,
      resetValidation: c
    }), yn(() => {
      e.autofocus && T();
    });
    function y(q) {
      je(() => {
        const { validateTrigger: ve, rules: Pe, modelValue: U } = e;
        s(ve, q, Pe, U);
      });
    }
    function C(q) {
      t.value = !0, k(e.onFocus, q), y("onFocus");
    }
    function $(q) {
      t.value = !1, k(e.onBlur, q), y("onBlur");
    }
    function b(q) {
      const ve = q.target;
      let { value: Pe } = ve;
      e.type === "number" && (Pe = W(Pe));
      const U = z(Pe);
      return U === e.modelValue && (ve.value = U), U;
    }
    function S() {
      r.value = !0;
    }
    function B(q) {
      r.value && (r.value = !1, q.target.dispatchEvent(new Event("input")));
    }
    function O(q) {
      if (r.value)
        return;
      const ve = b(q);
      k(e["onUpdate:modelValue"], ve), k(e.onInput, ve, q), y("onInput");
    }
    function V(q) {
      const ve = N(b(q));
      e.modelModifiers.trim && k(e["onUpdate:modelValue"], ve), k(e.onChange, ve, q), y("onChange");
    }
    function D() {
      const { disabled: q, readonly: ve, clearable: Pe, onClear: U } = e;
      i?.disabled.value || i?.readonly.value || q || ve || !Pe || (k(e["onUpdate:modelValue"], ""), k(U, ""), y("onClear"));
    }
    function M(q) {
      const { disabled: ve, onClick: Pe } = e;
      i?.disabled.value || ve || (k(Pe, q), y("onClick"));
    }
    function W(q) {
      const ve = q.indexOf("-"), Pe = q.indexOf(".");
      return ve > -1 && (q = ve === 0 ? "-" + q.replace(/-/g, "") : q.replace(/-/g, "")), Pe > -1 && (q = q.slice(0, Pe + 1) + q.slice(Pe).replace(/\./g, "")), q.replace(/[^-0-9.]/g, "");
    }
    function N(q) {
      return e.modelModifiers.trim ? q.trim() : q;
    }
    function z(q) {
      return e.maxlength ? q.slice(0, j(e.maxlength)) : q;
    }
    function A(q) {
      const { disabled: ve } = e;
      i?.disabled.value || ve || q.target === o.value || (T(), Re(q));
    }
    function I() {
      k(e["onUpdate:modelValue"], ""), c();
    }
    function R() {
      return u(e.rules, e.modelValue);
    }
    function T() {
      var q;
      (q = o.value) == null || q.focus();
    }
    function J() {
      o.value.blur();
    }
    function fe() {
      o.value.select();
    }
    return {
      el: o,
      id: n,
      isFocusing: t,
      isComposing: r,
      errorMessage: l,
      placeholderColor: m,
      normalizedType: f,
      cursor: d,
      maxlengthText: v,
      formDisabled: i?.disabled,
      formReadonly: i?.readonly,
      n: T1,
      classes: B1,
      isEmpty: Zn,
      handleFocus: C,
      handleBlur: $,
      handleInput: O,
      handleChange: V,
      handleClear: D,
      handleClick: M,
      handleCompositionStart: S,
      handleCompositionEnd: B,
      handleMousedown: A,
      validate: R,
      resetValidation: c,
      reset: I,
      focus: T,
      blur: J,
      select: fe
    };
  }
});
Qp.render = M1;
var za = Qp;
re(za);
le(za, yu);
const oD = za;
var Yt = za;
const xp = {
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
  rules: [Array, Function, Object],
  onClick: L(),
  onChange: L(),
  "onUpdate:modelValue": L(),
  "onUpdate:indeterminate": L()
}, _p = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function N1() {
  const { bindChildren: e, childProviders: n, length: o } = kn(
    _p
  );
  return {
    length: o,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function V1() {
  const { bindParent: e, parentProvider: n, index: o } = wn(
    _p
  );
  return {
    index: o,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
const { name: R1, n: F1, classes: L1 } = ne("checkbox"), U1 = ["aria-checked", "aria-disabled", "tabindex"];
function H1(e, n) {
  const o = x("var-icon"), t = x("var-hover-overlay"), r = x("var-form-details"), a = Xe("hover"), i = Xe("ripple");
  return g(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      F("div", {
        ref: "checkbox",
        role: "checkbox",
        "aria-checked": e.isIndeterminate ? "mixed" : e.checked,
        "aria-disabled": e.formDisabled || e.disabled,
        class: p(e.n()),
        tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
        onFocus: n[1] || (n[1] = (l) => e.isFocusing = !0),
        onBlur: n[2] || (n[2] = (l) => e.isFocusing = !1),
        onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
      }, [
        Fe((g(), P(
          "div",
          {
            class: p(
              e.classes(
                e.n("action"),
                [e.checked || e.isIndeterminate, e.n("--checked"), e.n("--unchecked")],
                [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                [e.formDisabled || e.disabled, e.n("--disabled")]
              )
            ),
            style: X({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor })
          },
          [
            e.isIndeterminate ? H(e.$slots, "indeterminate-icon", { key: 0 }, () => [
              G(o, {
                class: p(e.n("icon")),
                name: "minus-box",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : K("v-if", !0),
            e.checked && !e.isIndeterminate ? H(e.$slots, "checked-icon", { key: 1 }, () => [
              G(o, {
                class: p(e.n("icon")),
                name: "checkbox-marked",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : K("v-if", !0),
            !e.checked && !e.isIndeterminate ? H(e.$slots, "unchecked-icon", { key: 2 }, () => [
              G(o, {
                class: p(e.n("icon")),
                name: "checkbox-blank-outline",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : K("v-if", !0),
            G(t, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ],
          6
          /* CLASS, STYLE */
        )), [
          [a, e.handleHovering, "desktop"],
          [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]
        ]),
        e.$slots.default ? (g(), P(
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
            onClick: n[0] || (n[0] = (...l) => e.handleTextClick && e.handleTextClick(...l))
          },
          [
            H(e.$slots, "default", { checked: e.checked })
          ],
          2
          /* CLASS */
        )) : K("v-if", !0)
      ], 42, U1),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const ev = ee({
  name: R1,
  directives: { Ripple: sn, Hover: Nn },
  components: {
    VarIcon: Qe,
    VarFormDetails: Dn,
    VarHoverOverlay: Yn
  },
  props: xp,
  setup(e) {
    const n = w(null), o = w(!1), t = Pn(e, "modelValue"), r = Pn(e, "indeterminate"), a = E(() => t.value === e.checkedValue), i = E(() => e.checkedValue), { checkboxGroup: l, bindCheckboxGroup: s } = V1(), { hovering: u, handleHovering: c } = to(), { form: d, bindForm: f } = qn(), {
      errorMessage: v,
      validateWithTrigger: m,
      validate: h,
      // expose
      resetValidation: y
    } = Kn(), C = {
      checkedValue: i,
      checked: a,
      sync: O,
      validate: N,
      resetValidation: y,
      reset: V
    };
    k(s, C), k(f, C), We(() => window, "keydown", M), We(() => window, "keyup", W);
    function $(z) {
      je(() => {
        const { validateTrigger: A, rules: I, modelValue: R } = e;
        m(A, z, I, R);
      });
    }
    function b(z) {
      const { checkedValue: A, onChange: I } = e;
      t.value = z, k(I, t.value, r.value), $("onChange"), z === A ? l?.onChecked(A) : l?.onUnchecked(A);
    }
    function S(z) {
      const { disabled: A, readonly: I, checkedValue: R, uncheckedValue: T, onClick: J } = e;
      if (d?.disabled.value || A || (k(J, z), d?.readonly.value || I))
        return;
      if (r.value === !0) {
        r.value = !1, k(e.onChange, t.value, r.value), $("onChange");
        return;
      }
      const fe = l ? l.checkedCount.value >= Number(l.max.value) : !1;
      !a.value && fe || b(a.value ? T : R);
    }
    function B() {
      n.value.focus();
    }
    function O(z) {
      const { checkedValue: A, uncheckedValue: I } = e;
      t.value = z.includes(A) ? A : I;
    }
    function V() {
      t.value = e.uncheckedValue, y();
    }
    function D(z) {
      const { checkedValue: A, uncheckedValue: I } = e;
      ![A, I].includes(z) && (z = a.value ? I : A), b(z);
    }
    function M(z) {
      if (!o.value)
        return;
      const { key: A } = z;
      (A === "Enter" || A === " ") && Re(z), A === "Enter" && n.value.click();
    }
    function W(z) {
      o.value && z.key === " " && (Re(z), n.value.click());
    }
    function N() {
      return h(e.rules, e.modelValue);
    }
    return {
      checkbox: n,
      isFocusing: o,
      isIndeterminate: r,
      checked: a,
      errorMessage: v,
      checkboxGroupErrorMessage: l?.errorMessage,
      formDisabled: d?.disabled,
      formReadonly: d?.readonly,
      hovering: u,
      n: F1,
      classes: L1,
      handleHovering: c,
      handleClick: S,
      handleTextClick: B,
      toggle: D,
      reset: V,
      validate: N,
      resetValidation: y
    };
  }
});
ev.render = H1;
var Ea = ev;
re(Ea);
le(Ea, xp);
const tD = Ea;
var vt = Ea;
const nv = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  // internal start
  option: Object,
  childrenTrigger: Boolean,
  highlight: Boolean,
  onKeyArrowX: L()
  // internal end
}, ov = Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function j1() {
  const { length: e, childProviders: n, bindChildren: o } = kn(
    ov
  );
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: o
  };
}
function Y1() {
  const { index: e, parentProvider: n, bindParent: o } = wn(
    ov
  );
  return jn(!!o, "MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: o
  };
}
var W1 = (e, n, o) => new Promise((t, r) => {
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
const { name: K1, n: q1, classes: X1 } = ne("menu-option"), G1 = ["tabindex"];
function Z1(e, n) {
  const o = x("var-checkbox"), t = x("maybe-v-node"), r = x("var-icon"), a = x("var-hover-overlay"), i = Xe("ripple"), l = Xe("hover");
  return Fe((g(), P("div", {
    ref: "root",
    class: p(
      e.classes(
        e.n(),
        e.n("$--box"),
        e.n(`--${e.size}`),
        [e.optionSelected, e.n("--selected-color")],
        [e.disabled, e.n("--disabled")],
        [e.childrenTrigger, e.n("--children-trigger")]
      )
    ),
    tabindex: e.disabled ? void 0 : "-1",
    onClick: n[3] || (n[3] = (...s) => e.handleClick && e.handleClick(...s)),
    onFocus: n[4] || (n[4] = (s) => e.isFocusing = !0),
    onBlur: n[5] || (n[5] = (s) => e.isFocusing = !1)
  }, [
    F(
      "div",
      {
        class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")]))
      },
      null,
      2
      /* CLASS */
    ),
    e.multiple ? (g(), ye(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (s) => e.optionSelected = s),
      indeterminate: e.optionIndeterminate,
      "onUpdate:indeterminate": n[1] || (n[1] = (s) => e.optionIndeterminate = s),
      disabled: e.disabled,
      onClick: n[2] || (n[2] = Un(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "indeterminate", "disabled", "onChange"])) : K("v-if", !0),
    H(e.$slots, "default", {}, () => [
      F(
        "div",
        {
          class: p(e.classes(e.n("text")))
        },
        [
          G(t, {
            is: e.labelVNode,
            class: p(e.n("$--ellipsis"))
          }, null, 8, ["is", "class"])
        ],
        2
        /* CLASS */
      )
    ]),
    e.childrenTrigger ? (g(), P(
      "div",
      {
        key: 1,
        class: p(e.n("arrow"))
      },
      [
        G(r, {
          "var-menu-option-cover": "",
          class: p(e.n("arrow-icon")),
          name: "chevron-right"
        }, null, 8, ["class"])
      ],
      2
      /* CLASS */
    )) : K("v-if", !0),
    G(a, {
      hovering: (e.hovering || e.highlight) && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 42, G1)), [
    [i, { disabled: e.disabled || !e.ripple }],
    [l, e.handleHovering, "desktop"]
  ]);
}
const tv = ee({
  name: K1,
  directives: { Ripple: sn, Hover: Nn },
  components: {
    VarCheckbox: vt,
    VarHoverOverlay: Yn,
    VarIcon: Qe,
    MaybeVNode: sr
  },
  props: nv,
  setup(e) {
    const n = w(), o = w(), t = w(!1), r = w(!1), a = w(!1), i = E(() => r.value), l = E(() => a.value), s = E(() => e.value), u = E(() => e.disabled), c = E(() => e.ripple), { menuSelect: d, bindMenuSelect: f } = Y1(), { size: v, multiple: m, onSelect: h, computeLabel: y } = d, { hovering: C, handleHovering: $ } = to(), b = E(
      () => {
        var W;
        return gn(e.label) ? e.label(
          (W = e.option) != null ? W : {
            label: e.label,
            value: e.value,
            disabled: e.disabled,
            ripple: e.ripple
          },
          r.value
        ) : e.label;
      }
    ), S = {
      label: b,
      value: s,
      selected: i,
      disabled: u,
      ripple: c,
      indeterminate: l,
      sync: M
    };
    de([() => e.label, () => e.value], y), f(S), We(() => window, "keydown", O), We(() => window, "keyup", V);
    function B() {
      if (!e.disabled && !(!m.value && e.childrenTrigger)) {
        if (m.value && a.value) {
          a.value = !1, r.value = !1, h(S);
          return;
        }
        m.value && !a.value && (r.value = !r.value), h(S);
      }
    }
    function O(W) {
      var N;
      !t.value && !((N = o.value) != null && N.isFocusing) || ((W.key === "ArrowRight" || W.key === "ArrowLeft") && (Re(W), k(e.onKeyArrowX, W.key)), t.value && ((W.key === " " || W.key === "Enter") && Re(W), W.key === "Enter" && n.value.click()));
    }
    function V(W) {
      t.value && W.key === " " && (Re(W), n.value.click());
    }
    function D() {
      return W1(this, null, function* () {
        yield je(), h(S);
      });
    }
    function M(W, N) {
      r.value = W, ir(N) && (a.value = N);
    }
    return {
      root: n,
      checkbox: o,
      optionSelected: r,
      optionIndeterminate: a,
      size: v,
      multiple: m,
      hovering: C,
      isFocusing: t,
      labelVNode: b,
      n: q1,
      classes: X1,
      handleHovering: $,
      handleClick: B,
      handleSelect: D
    };
  }
});
tv.render = Z1;
var fr = tv;
re(fr);
le(fr, nv);
const rD = fr;
var mt = fr;
const wu = {
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
  "onUpdate:show": L(),
  // internal start
  cascadeOptimization: Boolean
  // internal end
};
var go = "top", Lo = "bottom", xo = "right", Ao = "left", ku = "auto", Ta = [go, Lo, xo, Ao], Ba = "start", Wt = "end", J1 = "clippingParents", rv = "viewport", It = "popper", Q1 = "reference", wc = /* @__PURE__ */ Ta.reduce(function(e, n) {
  return e.concat([n + "-" + Ba, n + "-" + Wt]);
}, []), av = /* @__PURE__ */ [].concat(Ta, [ku]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Ba, n + "-" + Wt]);
}, []), x1 = "beforeRead", _1 = "read", ew = "afterRead", nw = "beforeMain", ow = "main", tw = "afterMain", rw = "beforeWrite", aw = "write", iw = "afterWrite", lw = [x1, _1, ew, nw, ow, tw, rw, aw, iw];
function _n(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function lo(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function wo(e) {
  return _n(e).getComputedStyle(e);
}
function _o(e) {
  var n = _n(e).Element;
  return e instanceof n || e instanceof Element;
}
function Jn(e) {
  var n = _n(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function $u(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = _n(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function sw(e) {
  return ["table", "td", "th"].indexOf(lo(e)) >= 0;
}
function Yo(e) {
  return ((_o(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Da(e) {
  return lo(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    ($u(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Yo(e)
  );
}
function $l() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function kc(e) {
  return !Jn(e) || // https://github.com/popperjs/popper-core/issues/837
  wo(e).position === "fixed" ? null : e.offsetParent;
}
function uw(e) {
  var n = /firefox/i.test($l()), o = /Trident/i.test($l());
  if (o && Jn(e)) {
    var t = wo(e);
    if (t.position === "fixed")
      return null;
  }
  var r = Da(e);
  for ($u(r) && (r = r.host); Jn(r) && ["html", "body"].indexOf(lo(r)) < 0; ) {
    var a = wo(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function Cu(e) {
  for (var n = _n(e), o = kc(e); o && sw(o) && wo(o).position === "static"; )
    o = kc(o);
  return o && (lo(o) === "html" || lo(o) === "body" && wo(o).position === "static") ? n : o || uw(e) || n;
}
function Mo(e) {
  return e.split("-")[0];
}
function Kt(e) {
  return e.split("-")[1];
}
var Nt = Math.max, $c = Math.min, ht = Math.round, cw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function dw(e) {
  var n = e.x, o = e.y, t = window, r = t.devicePixelRatio || 1;
  return {
    x: ht(n * r) / r || 0,
    y: ht(o * r) / r || 0
  };
}
function Cc(e) {
  var n, o = e.popper, t = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, m = i.y, h = m === void 0 ? 0 : m, y = typeof c == "function" ? c({
    x: v,
    y: h
  }) : {
    x: v,
    y: h
  };
  v = y.x, h = y.y;
  var C = i.hasOwnProperty("x"), $ = i.hasOwnProperty("y"), b = Ao, S = go, B = window;
  if (u) {
    var O = Cu(o), V = "clientHeight", D = "clientWidth";
    if (O === _n(o) && (O = Yo(o), wo(O).position !== "static" && l === "absolute" && (V = "scrollHeight", D = "scrollWidth")), O = O, r === go || (r === Ao || r === xo) && a === Wt) {
      S = Lo;
      var M = d && O === B && B.visualViewport ? B.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[V]
      );
      h -= M - t.height, h *= s ? 1 : -1;
    }
    if (r === Ao || (r === go || r === Lo) && a === Wt) {
      b = xo;
      var W = d && O === B && B.visualViewport ? B.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[D]
      );
      v -= W - t.width, v *= s ? 1 : -1;
    }
  }
  var N = Object.assign({
    position: l
  }, u && cw), z = c === !0 ? dw({
    x: v,
    y: h
  }) : {
    x: v,
    y: h
  };
  if (v = z.x, h = z.y, s) {
    var A;
    return Object.assign({}, N, (A = {}, A[S] = $ ? "0" : "", A[b] = C ? "0" : "", A.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + h + "px)" : "translate3d(" + v + "px, " + h + "px, 0)", A));
  }
  return Object.assign({}, N, (n = {}, n[S] = $ ? h + "px" : "", n[b] = C ? v + "px" : "", n.transform = "", n));
}
function fw(e) {
  var n = e.state, o = e.options, t = o.gpuAcceleration, r = t === void 0 ? !0 : t, a = o.adaptive, i = a === void 0 ? !0 : a, l = o.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: Mo(n.placement),
    variation: Kt(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: r,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Cc(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Cc(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const iv = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: fw,
  data: {}
};
var pw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Mr(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return pw[n];
  });
}
var vw = {
  start: "end",
  end: "start"
};
function Sc(e) {
  return e.replace(/start|end/g, function(n) {
    return vw[n];
  });
}
function lv() {
  return !/^((?!chrome|android).)*safari/i.test($l());
}
function gt(e, n, o) {
  n === void 0 && (n = !1), o === void 0 && (o = !1);
  var t = e.getBoundingClientRect(), r = 1, a = 1;
  n && Jn(e) && (r = e.offsetWidth > 0 && ht(t.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ht(t.height) / e.offsetHeight || 1);
  var i = _o(e) ? _n(e) : window, l = i.visualViewport, s = !lv() && o, u = (t.left + (s && l ? l.offsetLeft : 0)) / r, c = (t.top + (s && l ? l.offsetTop : 0)) / a, d = t.width / r, f = t.height / a;
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
function Su(e) {
  var n = _n(e), o = n.pageXOffset, t = n.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: t
  };
}
function Pu(e) {
  return gt(Yo(e)).left + Su(e).scrollLeft;
}
function mw(e, n) {
  var o = _n(e), t = Yo(e), r = o.visualViewport, a = t.clientWidth, i = t.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = lv();
    (u || !u && n === "fixed") && (l = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + Pu(e),
    y: s
  };
}
function hw(e) {
  var n, o = Yo(e), t = Su(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = Nt(o.scrollWidth, o.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = Nt(o.scrollHeight, o.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -t.scrollLeft + Pu(e), s = -t.scrollTop;
  return wo(r || o).direction === "rtl" && (l += Nt(o.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function Ou(e) {
  var n = wo(e), o = n.overflow, t = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + r + t);
}
function sv(e) {
  return ["html", "body", "#document"].indexOf(lo(e)) >= 0 ? e.ownerDocument.body : Jn(e) && Ou(e) ? e : sv(Da(e));
}
function Vt(e, n) {
  var o;
  n === void 0 && (n = []);
  var t = sv(e), r = t === ((o = e.ownerDocument) == null ? void 0 : o.body), a = _n(t), i = r ? [a].concat(a.visualViewport || [], Ou(t) ? t : []) : t, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Vt(Da(i)))
  );
}
function gw(e, n) {
  var o = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (o && $u(o)) {
    var t = n;
    do {
      if (t && e.isSameNode(t))
        return !0;
      t = t.parentNode || t.host;
    } while (t);
  }
  return !1;
}
function Cl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function bw(e, n) {
  var o = gt(e, !1, n === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function Pc(e, n, o) {
  return n === rv ? Cl(mw(e, o)) : _o(n) ? bw(n, o) : Cl(hw(Yo(e)));
}
function yw(e) {
  var n = Vt(Da(e)), o = ["absolute", "fixed"].indexOf(wo(e).position) >= 0, t = o && Jn(e) ? Cu(e) : e;
  return _o(t) ? n.filter(function(r) {
    return _o(r) && gw(r, t) && lo(r) !== "body";
  }) : [];
}
function ww(e, n, o, t) {
  var r = n === "clippingParents" ? yw(e) : [].concat(n), a = [].concat(r, [o]), i = a[0], l = a.reduce(function(s, u) {
    var c = Pc(e, u, t);
    return s.top = Nt(c.top, s.top), s.right = $c(c.right, s.right), s.bottom = $c(c.bottom, s.bottom), s.left = Nt(c.left, s.left), s;
  }, Pc(e, i, t));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function kw(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function uv(e) {
  var n = e.reference, o = e.element, t = e.placement, r = t ? Mo(t) : null, a = t ? Kt(t) : null, i = n.x + n.width / 2 - o.width / 2, l = n.y + n.height / 2 - o.height / 2, s;
  switch (r) {
    case go:
      s = {
        x: i,
        y: n.y - o.height
      };
      break;
    case Lo:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case xo:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case Ao:
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
  var u = r ? kw(r) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Ba:
        s[u] = s[u] - (n[c] / 2 - o[c] / 2);
        break;
      case Wt:
        s[u] = s[u] + (n[c] / 2 - o[c] / 2);
        break;
    }
  }
  return s;
}
function $w() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Cw(e) {
  return Object.assign({}, $w(), e);
}
function Sw(e, n) {
  return n.reduce(function(o, t) {
    return o[t] = e, o;
  }, {});
}
function cv(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = t === void 0 ? e.placement : t, a = o.strategy, i = a === void 0 ? e.strategy : a, l = o.boundary, s = l === void 0 ? J1 : l, u = o.rootBoundary, c = u === void 0 ? rv : u, d = o.elementContext, f = d === void 0 ? It : d, v = o.altBoundary, m = v === void 0 ? !1 : v, h = o.padding, y = h === void 0 ? 0 : h, C = Cw(typeof y != "number" ? y : Sw(y, Ta)), $ = f === It ? Q1 : It, b = e.rects.popper, S = e.elements[m ? $ : f], B = ww(_o(S) ? S : S.contextElement || Yo(e.elements.popper), s, c, i), O = gt(e.elements.reference), V = uv({
    reference: O,
    element: b,
    placement: r
  }), D = Cl(Object.assign({}, b, V)), M = f === It ? D : O, W = {
    top: B.top - M.top + C.top,
    bottom: M.bottom - B.bottom + C.bottom,
    left: B.left - M.left + C.left,
    right: M.right - B.right + C.right
  }, N = e.modifiersData.offset;
  if (f === It && N) {
    var z = N[r];
    Object.keys(W).forEach(function(A) {
      var I = [xo, Lo].indexOf(A) >= 0 ? 1 : -1, R = [go, Lo].indexOf(A) >= 0 ? "y" : "x";
      W[A] += z[R] * I;
    });
  }
  return W;
}
function Pw(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = o.boundary, a = o.rootBoundary, i = o.padding, l = o.flipVariations, s = o.allowedAutoPlacements, u = s === void 0 ? av : s, c = Kt(t), d = c ? l ? wc : wc.filter(function(m) {
    return Kt(m) === c;
  }) : Ta, f = d.filter(function(m) {
    return u.indexOf(m) >= 0;
  });
  f.length === 0 && (f = d);
  var v = f.reduce(function(m, h) {
    return m[h] = cv(e, {
      placement: h,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[Mo(h)], m;
  }, {});
  return Object.keys(v).sort(function(m, h) {
    return v[m] - v[h];
  });
}
function Ow(e) {
  if (Mo(e) === ku)
    return [];
  var n = Mr(e);
  return [Sc(e), n, Sc(n)];
}
function zw(e) {
  var n = e.state, o = e.options, t = e.name;
  if (!n.modifiersData[t]._skip) {
    for (var r = o.mainAxis, a = r === void 0 ? !0 : r, i = o.altAxis, l = i === void 0 ? !0 : i, s = o.fallbackPlacements, u = o.padding, c = o.boundary, d = o.rootBoundary, f = o.altBoundary, v = o.flipVariations, m = v === void 0 ? !0 : v, h = o.allowedAutoPlacements, y = n.options.placement, C = Mo(y), $ = C === y, b = s || ($ || !m ? [Mr(y)] : Ow(y)), S = [y].concat(b).reduce(function(te, pe) {
      return te.concat(Mo(pe) === ku ? Pw(n, {
        placement: pe,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: m,
        allowedAutoPlacements: h
      }) : pe);
    }, []), B = n.rects.reference, O = n.rects.popper, V = /* @__PURE__ */ new Map(), D = !0, M = S[0], W = 0; W < S.length; W++) {
      var N = S[W], z = Mo(N), A = Kt(N) === Ba, I = [go, Lo].indexOf(z) >= 0, R = I ? "width" : "height", T = cv(n, {
        placement: N,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), J = I ? A ? xo : Ao : A ? Lo : go;
      B[R] > O[R] && (J = Mr(J));
      var fe = Mr(J), q = [];
      if (a && q.push(T[z] <= 0), l && q.push(T[J] <= 0, T[fe] <= 0), q.every(function(te) {
        return te;
      })) {
        M = N, D = !1;
        break;
      }
      V.set(N, q);
    }
    if (D)
      for (var ve = m ? 3 : 1, Pe = function(pe) {
        var Y = S.find(function(Z) {
          var $e = V.get(Z);
          if ($e)
            return $e.slice(0, pe).every(function(Ve) {
              return Ve;
            });
        });
        if (Y)
          return M = Y, "break";
      }, U = ve; U > 0; U--) {
        var Q = Pe(U);
        if (Q === "break") break;
      }
    n.placement !== M && (n.modifiersData[t]._skip = !0, n.placement = M, n.reset = !0);
  }
}
const Ew = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: zw,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Tw(e, n, o) {
  var t = Mo(e), r = [Ao, go].indexOf(t) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, n, {
    placement: e
  })) : o, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * r, [Ao, xo].indexOf(t) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function Bw(e) {
  var n = e.state, o = e.options, t = e.name, r = o.offset, a = r === void 0 ? [0, 0] : r, i = av.reduce(function(c, d) {
    return c[d] = Tw(d, n.rects, a), c;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[t] = i;
}
const Dw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Bw
};
function Iw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Aw(e) {
  return e === _n(e) || !Jn(e) ? Su(e) : Iw(e);
}
function Mw(e) {
  var n = e.getBoundingClientRect(), o = ht(n.width) / e.offsetWidth || 1, t = ht(n.height) / e.offsetHeight || 1;
  return o !== 1 || t !== 1;
}
function Nw(e, n, o) {
  o === void 0 && (o = !1);
  var t = Jn(n), r = Jn(n) && Mw(n), a = Yo(n), i = gt(e, r, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (t || !t && !o) && ((lo(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ou(a)) && (l = Aw(n)), Jn(n) ? (s = gt(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = Pu(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function Vw(e) {
  var n = gt(e), o = e.offsetWidth, t = e.offsetHeight;
  return Math.abs(n.width - o) <= 1 && (o = n.width), Math.abs(n.height - t) <= 1 && (t = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: t
  };
}
function Rw(e) {
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
function Fw(e) {
  var n = Rw(e);
  return lw.reduce(function(o, t) {
    return o.concat(n.filter(function(r) {
      return r.phase === t;
    }));
  }, []);
}
function Lw(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(o) {
      Promise.resolve().then(function() {
        n = void 0, o(e());
      });
    })), n;
  };
}
function Uw(e) {
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
var Oc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function zc() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  return !n.some(function(t) {
    return !(t && typeof t.getBoundingClientRect == "function");
  });
}
function Hw(e) {
  e === void 0 && (e = {});
  var n = e, o = n.defaultModifiers, t = o === void 0 ? [] : o, r = n.defaultOptions, a = r === void 0 ? Oc : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Oc, a),
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
        var $ = typeof C == "function" ? C(c.options) : C;
        h(), c.options = Object.assign({}, a, c.options, $), c.scrollParents = {
          reference: _o(l) ? Vt(l) : l.contextElement ? Vt(l.contextElement) : [],
          popper: Vt(s)
        };
        var b = Fw(Uw([].concat(t, c.options.modifiers)));
        return c.orderedModifiers = b.filter(function(S) {
          return S.enabled;
        }), m(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var C = c.elements, $ = C.reference, b = C.popper;
          if (zc($, b)) {
            c.rects = {
              reference: Nw($, Cu(b), c.options.strategy === "fixed"),
              popper: Vw(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(W) {
              return c.modifiersData[W.name] = Object.assign({}, W.data);
            });
            for (var S = 0; S < c.orderedModifiers.length; S++) {
              if (c.reset === !0) {
                c.reset = !1, S = -1;
                continue;
              }
              var B = c.orderedModifiers[S], O = B.fn, V = B.options, D = V === void 0 ? {} : V, M = B.name;
              typeof O == "function" && (c = O({
                state: c,
                options: D,
                name: M,
                instance: v
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Lw(function() {
        return new Promise(function(y) {
          v.forceUpdate(), y(c);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!zc(l, s))
      return v;
    v.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function m() {
      c.orderedModifiers.forEach(function(y) {
        var C = y.name, $ = y.options, b = $ === void 0 ? {} : $, S = y.effect;
        if (typeof S == "function") {
          var B = S({
            state: c,
            name: C,
            instance: v,
            options: b
          }), O = function() {
          };
          d.push(B || O);
        }
      });
    }
    function h() {
      d.forEach(function(y) {
        return y();
      }), d = [];
    }
    return v;
  };
}
var wr = {
  passive: !0
};
function jw(e) {
  var n = e.state, o = e.instance, t = e.options, r = t.scroll, a = r === void 0 ? !0 : r, i = t.resize, l = i === void 0 ? !0 : i, s = _n(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", o.update, wr);
  }), l && s.addEventListener("resize", o.update, wr), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", o.update, wr);
    }), l && s.removeEventListener("resize", o.update, wr);
  };
}
const Yw = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: jw,
  data: {}
};
function Ww(e) {
  var n = e.state, o = e.name;
  n.modifiersData[o] = uv({
    reference: n.rects.reference,
    element: n.rects.popper,
    placement: n.placement
  });
}
const Kw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ww,
  data: {}
};
function qw(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(o) {
    var t = n.styles[o] || {}, r = n.attributes[o] || {}, a = n.elements[o];
    !Jn(a) || !lo(a) || (Object.assign(a.style, t), Object.keys(r).forEach(function(i) {
      var l = r[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function Xw(e) {
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
      !Jn(r) || !lo(r) || (Object.assign(r.style, l), Object.keys(a).forEach(function(s) {
        r.removeAttribute(s);
      }));
    });
  };
}
const Gw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: qw,
  effect: Xw,
  requires: ["computeStyles"]
};
var Zw = [Yw, Kw, iv, Gw], Jw = /* @__PURE__ */ Hw({
  defaultModifiers: Zw
}), Qw = Object.defineProperty, xw = Object.defineProperties, _w = Object.getOwnPropertyDescriptors, Ec = Object.getOwnPropertySymbols, ek = Object.prototype.hasOwnProperty, nk = Object.prototype.propertyIsEnumerable, Tc = (e, n, o) => n in e ? Qw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ll = (e, n) => {
  for (var o in n || (n = {}))
    ek.call(n, o) && Tc(e, o, n[o]);
  if (Ec)
    for (var o of Ec(n))
      nk.call(n, o) && Tc(e, o, n[o]);
  return e;
}, sl = (e, n) => xw(e, _w(n)), Bc = (e, n, o) => new Promise((t, r) => {
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
function dv(e) {
  const n = w(null), o = w(null), t = w({ width: 0, height: 0 }), r = Pn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(T, J) {
      k(J ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = cr(() => r.value, 1);
  vu(() => r.value, a);
  let i = null, l, s = !1, u = !1, c = !0;
  We(() => window, "keydown", z), de(() => [e.offsetX, e.offsetY, e.placement, e.strategy], A), de(() => e.disabled, R), de(
    () => r.value,
    (T) => {
      T && A();
    }
  ), ao(A), ko(d), nr(f);
  function d() {
    const T = M();
    i = Jw(T, o.value, D()), T.addEventListener("mouseenter", h), T.addEventListener("mouseleave", y), T.addEventListener("click", b), document.addEventListener("click", S);
  }
  function f() {
    const T = M();
    T && (T.removeEventListener("mouseenter", h), T.removeEventListener("mouseleave", y), T.removeEventListener("click", b)), i.destroy(), document.removeEventListener("click", S);
  }
  function v() {
    const T = M();
    if (!T)
      return;
    const { width: J, height: fe } = Wn(T);
    t.value = {
      width: rn(J),
      height: rn(fe)
    };
  }
  function m() {
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
    e.trigger === "hover" && (u = !0, I());
  }
  function y() {
    return Bc(this, null, function* () {
      e.trigger === "hover" && (u = !1, yield bn(), !s && R());
    });
  }
  function C() {
    e.trigger === "hover" && (s = !0, e.cascadeOptimization && (c = !1));
  }
  function $() {
    return Bc(this, null, function* () {
      e.trigger === "hover" && (s = !1, yield bn(), !u && R());
    });
  }
  function b() {
    if (e.trigger === "click") {
      if (e.closeOnClickReference && r.value) {
        R();
        return;
      }
      I();
    }
  }
  function S(T) {
    const J = M();
    if (J && !J.contains(T.target)) {
      if (e.trigger !== "click")
        return;
      B(), k(e.onClickOutside, T);
    }
  }
  function B() {
    R();
  }
  function O() {
    A(), k(e.onClosed);
  }
  function V() {
    const { offsetX: T, offsetY: J, placement: fe } = e;
    v();
    const q = {
      x: rn(T),
      y: rn(J)
    };
    switch (fe) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: q.x,
          distance: q.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: q.x,
          distance: q.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: q.x,
          distance: q.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: q.x,
          distance: -q.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: q.x,
          distance: -q.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: q.x,
          distance: -q.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: q.y,
          distance: q.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: q.y,
          distance: -q.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: fe,
          skidding: q.y,
          distance: -q.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: fe,
          skidding: q.x,
          distance: -q.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: fe,
          skidding: q.x,
          distance: q.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: fe,
          skidding: q.y,
          distance: q.x
        };
    }
  }
  function D() {
    const { placement: T, skidding: J, distance: fe } = V(), q = [
      sl(ll({}, Ew), {
        enabled: r.value
      }),
      sl(ll({}, Dw), {
        options: {
          offset: [J, fe]
        }
      }),
      sl(ll({}, iv), {
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
        fn({ state: ve }) {
          ve.styles.popper.transformOrigin = m();
        }
      }
    ];
    return {
      placement: T,
      modifiers: q,
      strategy: e.strategy
    };
  }
  function M() {
    var T, J;
    const fe = (T = l ?? e.reference) != null ? T : n.value;
    return dn(fe) ? (J = n.value) == null ? void 0 : J.querySelector(fe) : fe;
  }
  function W(T) {
    c = T;
  }
  function N(T) {
    f(), l = T, d();
  }
  function z(T) {
    const { closeOnKeyEscape: J = !1 } = e;
    T.key === "Escape" && J && r.value && (Re(T), R());
  }
  function A() {
    i.setOptions(D());
  }
  function I() {
    e.disabled || (r.value = !0, k(e["onUpdate:show"], !0));
  }
  function R() {
    c && (r.value = !1, k(e["onUpdate:show"], !1));
  }
  return {
    show: r,
    popover: o,
    zIndex: a,
    host: n,
    referenceSize: t,
    handlePopoverClose: B,
    handlePopoverMouseenter: C,
    handlePopoverMouseleave: $,
    handleClosed: O,
    setReference: N,
    setAllowClose: W,
    resize: A,
    open: I,
    close: R
  };
}
const { name: ok, n: tk, classes: rk } = ne("menu");
function ak(e, n) {
  return g(), P(
    "div",
    {
      ref: "host",
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      H(e.$slots, "default"),
      (g(), ye(co, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        G(nn, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: ce(() => [
            Fe(F(
              "div",
              {
                ref: "popover",
                style: X({
                  zIndex: e.zIndex,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.referenceSize.width)) : void 0
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
                onClick: n[0] || (n[0] = Un(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                H(e.$slots, "menu")
              ],
              38
              /* CLASS, STYLE, NEED_HYDRATION */
            ), [
              [xn, e.show]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["name", "onAfterEnter", "onAfterLeave"])
      ], 8, ["to", "disabled"]))
    ],
    2
    /* CLASS */
  );
}
const fv = ee({
  name: ok,
  props: wu,
  setup(e) {
    const { disabled: n } = ot(), {
      popover: o,
      host: t,
      referenceSize: r,
      show: a,
      zIndex: i,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: s,
      handlePopoverClose: u,
      handleClosed: c,
      setAllowClose: d,
      // expose
      open: f,
      // expose
      close: v,
      // expose
      resize: m,
      // expose
      setReference: h
    } = dv(e);
    function y() {
      d(!0);
    }
    return {
      popover: o,
      host: t,
      referenceSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      allowClose: y,
      formatElevation: vn,
      toSizeUnit: Ee,
      n: tk,
      classes: rk,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: s,
      handlePopoverClose: u,
      handleClosed: c,
      resize: m,
      open: f,
      close: v,
      setReference: h
    };
  }
});
fv.render = ak;
var pr = fv;
re(pr);
le(pr, wu);
const aD = pr;
var qt = pr;
function pv(e) {
  const {
    multiple: n,
    modelValue: o,
    optionProviders: t,
    optionProvidersLength: r,
    optionIsIndeterminate: a
  } = e, i = w(""), l = w([]);
  de(o, f, { deep: !0 }), de(r, f);
  function s() {
    const v = n(), m = o();
    v && (l.value = m.map(u)), !v && !Zn(m) && (i.value = u(m)), !v && Zn(m) && (i.value = "");
  }
  function u(v) {
    var m;
    const h = t();
    let y = h.find(({ value: C }) => C.value === v);
    return y || (y = h.find(({ label: C }) => C.value === v)), (m = y?.label.value) != null ? m : "";
  }
  function c({ value: v, label: m }) {
    var h;
    return (h = v.value) != null ? h : m.value;
  }
  function d(v) {
    const m = n(), h = t();
    return m ? h.filter(({ selected: y }) => y.value).map(c) : c(v);
  }
  function f() {
    const v = n(), m = o(), h = t();
    v ? h.forEach(
      (y) => y.sync(
        m.includes(c(y)),
        a ? a(y) : void 0
      )
    ) : h.forEach((y) => y.sync(m === c(y))), s();
  }
  return {
    label: i,
    labels: l,
    getOptionProviderKey: c,
    computeLabel: s,
    getSelectedValue: d
  };
}
var ik = Object.defineProperty, lk = Object.defineProperties, sk = Object.getOwnPropertyDescriptors, Dc = Object.getOwnPropertySymbols, uk = Object.prototype.hasOwnProperty, ck = Object.prototype.propertyIsEnumerable, Ic = (e, n, o) => n in e ? ik(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, dk = (e, n) => {
  for (var o in n || (n = {}))
    uk.call(n, o) && Ic(e, o, n[o]);
  if (Dc)
    for (var o of Dc(n))
      ck.call(n, o) && Ic(e, o, n[o]);
  return e;
}, fk = (e, n) => lk(e, sk(n));
const _r = fk(dk({
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
  "onUpdate:modelValue": L(),
  onSelect: L()
}, Me(wu, [
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
  onKeyEscape: L()
  // internal end
});
var pk = Object.defineProperty, Ac = Object.getOwnPropertySymbols, vk = Object.prototype.hasOwnProperty, mk = Object.prototype.propertyIsEnumerable, Mc = (e, n, o) => n in e ? pk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, hk = (e, n) => {
  for (var o in n || (n = {}))
    vk.call(n, o) && Mc(e, o, n[o]);
  if (Ac)
    for (var o of Ac(n))
      mk.call(n, o) && Mc(e, o, n[o]);
  return e;
}, gk = (e, n, o) => new Promise((t, r) => {
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
const { name: bk, n: yk } = ne("menu-children"), wk = { ref: "menuOptions" };
function kk(e, n) {
  const o = x("var-menu-option"), t = x("var-menu-children"), r = x("var-menu");
  return g(), ye(r, {
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
  }, Jo({
    default: ce(() => [
      G(o, {
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
      }, null, 8, ["label", "value", "option", "ripple", "disabled", "highlight", "onKeyArrowX", "onMouseenter"])
    ]),
    _: 2
    /* DYNAMIC */
  }, [
    e.options.length ? {
      name: "menu",
      fn: ce(() => [
        F(
          "div",
          wk,
          [
            (g(!0), P(
              Ne,
              null,
              Ze(e.options, (a) => (g(), P(
                Ne,
                {
                  key: a[e.valueKey]
                },
                [
                  a[e.childrenKey] ? (g(), ye(t, {
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
                  }, null, 8, ["parent-show", "option", "options", "highlight-options", "disabled", "onKeyArrowX", "onKeyArrowRightOpen", "onMouseenter"])) : (g(), ye(o, {
                    key: 1,
                    label: a[e.labelKey],
                    value: a[e.valueKey],
                    option: a,
                    ripple: a.ripple,
                    disabled: a.disabled,
                    onKeyArrowX: e.handleArrowLeft,
                    onMouseenter: n[0] || (n[0] = (i) => e.allowChildrenClose())
                  }, null, 8, ["label", "value", "option", "ripple", "disabled", "onKeyArrowX"]))
                ],
                64
                /* STABLE_FRAGMENT */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          512
          /* NEED_PATCH */
        )
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["show", "class", "disabled"]);
}
const vv = ee({
  name: bk,
  components: {
    VarMenu: pr,
    VarMenuOption: fr
  },
  props: hk({
    parentShow: Boolean,
    disabled: Boolean,
    option: {
      type: Object,
      required: !0
    },
    highlightOptions: Me(_r, "options"),
    onKeyArrowX: L(),
    onKeyArrowRightOpen: L(),
    onMouseenter: L()
  }, Me(_r, ["options", "valueKey", "labelKey", "childrenKey"])),
  setup(e) {
    const n = w(!1), o = w(), t = w(), r = w(), a = w();
    de(
      () => e.parentShow,
      (f) => {
        f || (n.value = !1);
      },
      { immediate: !0 }
    );
    function i(f) {
      return gk(this, null, function* () {
        var v;
        k(e.onKeyArrowX, f), f === "ArrowRight" && (k(e.onKeyArrowRightOpen), (v = o.value) == null || v.open(), yield ho(), gu(o.value.$el, r.value, "ArrowDown"));
      });
    }
    function l(f) {
      var v;
      f === "ArrowLeft" && (u(), s(), (v = t.value) == null || v.$el.focus());
    }
    function s() {
      var f;
      (f = o.value) == null || f.close();
    }
    function u() {
      var f;
      (f = o.value) == null || f.allowClose();
    }
    function c(f) {
      var v;
      (v = a.value) == null || v.forEach((m) => {
        if (m.allowClose(), f == null) {
          m.close();
          return;
        }
        m.option.value !== f.value && m.close();
      });
    }
    function d() {
      k(e.onMouseenter);
    }
    return {
      show: n,
      menu: o,
      trigger: t,
      menuOptions: r,
      menuChildren: a,
      n: yk,
      close: s,
      handleArrowLeft: l,
      handleArrowRight: i,
      handleMouseenter: d,
      allowClose: u,
      allowChildrenClose: c
    };
  }
});
vv.render = kk;
var $k = vv, Ck = Object.defineProperty, Sk = Object.defineProperties, Pk = Object.getOwnPropertyDescriptors, Nc = Object.getOwnPropertySymbols, Ok = Object.prototype.hasOwnProperty, zk = Object.prototype.propertyIsEnumerable, Vc = (e, n, o) => n in e ? Ck(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ek = (e, n) => {
  for (var o in n || (n = {}))
    Ok.call(n, o) && Vc(e, o, n[o]);
  if (Nc)
    for (var o of Nc(n))
      zk.call(n, o) && Vc(e, o, n[o]);
  return e;
}, Tk = (e, n) => Sk(e, Pk(n));
const { name: Bk, n: Dk, classes: Ik } = ne("menu-select");
function Ak(e, n) {
  const o = x("var-menu-children"), t = x("var-menu-option"), r = x("var-menu");
  return g(), ye(r, {
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
    menu: ce(() => [
      F(
        "div",
        {
          ref: "menuOptionsRef",
          class: p(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
        },
        [
          (g(!0), P(
            Ne,
            null,
            Ze(e.options, (a) => (g(), P(
              Ne,
              {
                key: a[e.valueKey]
              },
              [
                a[e.childrenKey] ? (g(), ye(o, {
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
                }, null, 8, ["parent-show", "option", "options", "highlight-options", "disabled", "onKeyArrowRightOpen", "onMouseenter"])) : (g(), ye(t, {
                  key: 1,
                  label: a[e.labelKey],
                  value: a[e.valueKey],
                  option: a,
                  ripple: a.ripple,
                  disabled: a.disabled,
                  onMouseenter: n[0] || (n[0] = (i) => e.allowChildrenClose())
                }, null, 8, ["label", "value", "option", "ripple", "disabled"]))
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          H(e.$slots, "options")
        ],
        2
        /* CLASS */
      )
    ]),
    default: ce(() => [
      H(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show", "class", "disabled", "trigger", "reference", "placement", "strategy", "offset-x", "offset-y", "teleport", "same-width", "elevation", "popover-class", "close-on-click-reference", "onOpen", "onOpened", "onClose", "onClosed", "onClickOutside"]);
}
const mv = ee({
  name: Bk,
  components: { VarMenu: qt, VarMenuOption: mt, VarMenuChildren: $k },
  props: _r,
  setup(e) {
    const n = Pn(e, "show"), o = w(), t = w(), r = w(), a = E(() => $(e.options)), { menuOptions: i, length: l, bindMenuOptions: s } = j1(), { computeLabel: u, getSelectedValue: c, getOptionProviderKey: d } = pv({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => i,
      optionProvidersLength: () => l.value,
      optionIsIndeterminate(z) {
        var A;
        const I = m(z.value.value);
        if (!I)
          return !1;
        const R = ((A = I._children) != null ? A : []).filter((J) => !J.disabled), T = R.filter((J) => e.modelValue.includes(J.value));
        return T.length > 0 && T.length < R.length;
      }
    }), f = E(() => {
      const { multiple: z, modelValue: A } = e;
      if (z)
        return [];
      const I = a.value.find((J) => J.value === A), R = [];
      let T = I?._parent;
      for (; T; )
        R.push(T), T = T._parent;
      return R;
    }), v = {
      size: E(() => e.size),
      multiple: E(() => e.multiple),
      computeLabel: u,
      onSelect: b
    };
    s(v), We(() => window, "keydown", B);
    function m(z) {
      return a.value.find((A) => A.value === z);
    }
    function h(z) {
      return i.find((A) => A.value.value === z);
    }
    function y(z) {
      return z[e.childrenKey];
    }
    function C(z) {
      const A = [];
      I(z);
      function I(R) {
        R.forEach((T) => {
          A.push(T);
          const J = y(T);
          J && I(J);
        });
      }
      return A;
    }
    function $(z) {
      function A(I, R) {
        return I.map((T) => {
          T = Tk(Ek({}, T), { _rawOption: T }), R && (T._parent = R);
          const J = y(T);
          if (J) {
            const fe = A(J, T);
            T[e.childrenKey] = fe, T._children = C(fe);
          }
          return T;
        });
      }
      return C(A(z));
    }
    function b(z) {
      var A, I;
      const { multiple: R, closeOnSelect: T } = e, { value: J, label: fe, selected: q, disabled: ve, ripple: Pe } = z, U = m(J.value);
      if (U) {
        const pe = ((A = U._children) != null ? A : []).filter((Y) => !Y.disabled).map((Y) => Y.value);
        R && q.value && (i.forEach((Y) => {
          pe.includes(Y.value.value) && Y.sync(!0, !1);
        }), S(U)), R && !q.value && (i.forEach((Y) => {
          pe.includes(Y.value.value) && Y.sync(!1, !1);
        }), S(U));
      }
      const Q = c(z), te = (I = U?._rawOption) != null ? I : {
        value: J.value,
        label: fe.value,
        disabled: ve.value,
        ripple: Pe.value
      };
      k(e.onSelect, d(z), te), k(e["onUpdate:modelValue"], Q), !R && T && (o.value.$el.focus(), M());
    }
    function S(z) {
      let A = z._parent;
      for (; A; ) {
        const I = h(A.value), R = y(A).filter((fe) => !fe.disabled), T = R.every((fe) => !h(fe.value).selected.value), J = R.every((fe) => h(fe.value).selected.value);
        T ? I.sync(!1, !1) : J ? I.sync(!0, !1) : I.sync(!1, !0), A = A._parent;
      }
    }
    function B(z) {
      if (e.disabled || !n.value)
        return;
      const { key: A } = z;
      if (["Escape", "ArrowDown", "ArrowUp"].includes(A) && Re(z), A === "Escape") {
        o.value.$el.focus(), M(), k(e.onKeyEscape);
        return;
      }
      (A === "ArrowDown" || A === "ArrowUp") && gu(
        o.value.$el,
        t.value,
        A,
        (I, R, T) => T ? !0 : O(I) === O(R)
      );
    }
    function O(z) {
      var A, I;
      if (z.classList.contains("var-menu-option--children-trigger"))
        return (A = z.parentNode) == null ? void 0 : A.parentNode;
      if (z.classList.contains("var-checkbox")) {
        const R = (I = z.parentNode) == null ? void 0 : I.parentNode;
        if (R)
          return O(R);
      }
      return z.parentNode;
    }
    function V(z) {
      var A;
      (A = r.value) == null || A.forEach((I) => {
        if (I.allowClose(), z == null) {
          I.close();
          return;
        }
        I.option.value !== z.value && I.close();
      });
    }
    function D() {
      var z;
      (z = o.value) == null || z.open();
    }
    function M() {
      var z;
      (z = o.value) == null || z.close();
    }
    function W() {
      var z;
      (z = o.value) == null || z.resize();
    }
    function N(z) {
      var A;
      (A = o.value) == null || A.setReference(z);
    }
    return {
      show: n,
      menu: o,
      menuOptionsRef: t,
      menuChildren: r,
      highlightOptions: f,
      n: Dk,
      classes: Ik,
      allowChildrenClose: V,
      formatElevation: vn,
      open: D,
      close: M,
      resize: W,
      setReference: N
    };
  }
});
mv.render = Ak;
var Ia = mv;
re(Ia);
le(Ia, _r);
const iD = Ia;
var Xt = Ia, Mk = Object.defineProperty, Rc = Object.getOwnPropertySymbols, Nk = Object.prototype.hasOwnProperty, Vk = Object.prototype.propertyIsEnumerable, Fc = (e, n, o) => n in e ? Mk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Rk = (e, n) => {
  for (var o in n || (n = {}))
    Nk.call(n, o) && Fc(e, o, n[o]);
  if (Rc)
    for (var o of Rc(n))
      Vk.call(n, o) && Fc(e, o, n[o]);
  return e;
};
const hv = Rk({
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
  onFocus: L(),
  onBlur: L(),
  onInput: L(),
  onChange: L(),
  onClear: L(),
  onClick: L(),
  "onUpdate:modelValue": L()
}, Me(yu, [
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
]));
var Lc = (e, n, o) => new Promise((t, r) => {
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
const { name: Fk, n: Lk } = ne("auto-complete"), Uk = ["tabindex"];
function Hk(e, n) {
  const o = x("var-input"), t = x("var-menu-option"), r = x("var-menu-select"), a = x("var-form-details");
  return g(), P("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
    onFocusin: n[2] || (n[2] = (...i) => e.focus && e.focus(...i)),
    onClick: n[3] || (n[3] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    G(r, {
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
      options: ce(() => [
        F(
          "div",
          {
            class: p(e.n("options"))
          },
          [
            (g(!0), P(
              Ne,
              null,
              Ze(e.viewOptions, (i) => (g(), ye(t, {
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
        G(o, Ke({ ref: "input" }, {
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
        }), Jo({
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: ce(() => [
              H(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots["append-icon"] ? {
            name: "append-icon",
            fn: ce(() => [
              H(e.$slots, "append-icon")
            ]),
            key: "1"
          } : void 0,
          e.$slots["clear-icon"] ? {
            name: "clear-icon",
            fn: ce(({ clear: i }) => [
              H(e.$slots, "clear-icon", { clear: i })
            ]),
            key: "2"
          } : void 0,
          e.$slots["extra-message"] ? {
            name: "extra-message",
            fn: ce(() => [
              H(e.$slots, "extra-message")
            ]),
            key: "3"
          } : void 0
        ]), 1040, ["modelValue", "is-force-focusing-effect", "is-force-error-effect", "tabindex", "onInput", "onBlur", "onClear", "onChange"])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "disabled", "class", "popover-class", "onUpdate:modelValue", "onKeyEscape"]),
    G(a, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText
    }, null, 8, ["error-message", "extra-message"])
  ], 42, Uk);
}
const gv = ee({
  name: Fk,
  components: {
    VarInput: Yt,
    VarMenuSelect: Xt,
    VarMenuOption: mt,
    VarFormDetails: Dn
  },
  props: hv,
  setup(e) {
    const n = w(), o = w(), t = w(!1), r = Pn(e, "modelValue"), a = w([]), i = w(!1), l = E(() => {
      const { maxlength: R } = e;
      return R ? Zn(r.value) ? `0 / ${R}` : `${String(r.value).length}/${R}` : "";
    }), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: c,
      // expose
      resetValidation: d
    } = Kn(), { bindForm: f, form: v } = qn();
    let m = !1;
    const h = {
      reset: y,
      resetValidation: d,
      validate: C
    };
    up(
      () => n.value,
      "click",
      () => {
        if (m) {
          m = !1;
          return;
        }
        b();
      }
    ), de(() => [e.options, t.value], V), k(f, h), We(() => window, "keydown", O);
    function y() {
      k(e["onUpdate:modelValue"], ""), d();
    }
    function C() {
      return c(e.rules, e.modelValue);
    }
    function $() {
      t.value || e.disabled || v?.disabled.value || (t.value = !0, o.value.focus(), k(e.onFocus), B("onFocus"));
    }
    function b() {
      t.value && (t.value = !1, i.value = !1, o.value.blur(), k(e.onBlur), B("onBlur"));
    }
    function S() {
      i.value || b();
    }
    function B(R) {
      je(() => {
        const { validateTrigger: T, rules: J, modelValue: fe } = e;
        u(T, R, J, fe);
      });
    }
    function O(R) {
      return Lc(this, null, function* () {
        var T;
        if (v?.disabled.value || v?.readonly.value || e.disabled || e.readonly || !t.value || !i.value)
          return;
        const { key: J } = R;
        if (J === "Tab") {
          Re(R), n.value.focus(), i.value = !1;
          return;
        }
        if (!["ArrowUp", "ArrowDown", "Enter"].includes(J)) {
          o.value.focus();
          return;
        }
        J === "Enter" && (yield ho(), (T = o.value) == null || T.focus());
      });
    }
    function V() {
      t.value && (i.value = I(r.value)), i.value && (a.value = e.options);
    }
    function D(R, T) {
      V(), k(e.onInput, R, T), B("onInput");
    }
    function M() {
      m = !0, V(), k(e.onClear, r.value), B("onClear");
    }
    function W(R) {
      e.disabled || v?.disabled.value || (k(e.onClick, R), B("onClick"));
    }
    function N(R) {
      k(e.onChange, R), B("onChange");
    }
    function z(R) {
      return Lc(this, null, function* () {
        var T;
        e.maxlength != null && (R = R.slice(0, j(e.maxlength))), R !== r.value && (r.value = R, k(e.onChange, R), B("onChange")), yield ho(), (T = o.value) == null || T.focus();
      });
    }
    function A() {
      o.value.focus();
    }
    function I(R) {
      return e.disabled || e.readonly || v?.disabled.value || v?.readonly.value ? !1 : e.options.length > 0 && (e.getShow != null ? e.getShow(R) : R.length > 0);
    }
    return {
      root: n,
      input: o,
      value: r,
      isShowMenuSelect: i,
      viewOptions: a,
      isFocusing: t,
      formDisabled: v?.disabled,
      formReadonly: v?.readonly,
      errorMessage: s,
      maxlengthText: l,
      n: Lk,
      handleInput: D,
      handleClear: M,
      handleClick: W,
      handleChange: N,
      handleBlur: S,
      handleKeyEscape: A,
      handleAutoComplete: z,
      reset: y,
      validate: C,
      resetValidation: d,
      blur: b,
      focus: $
    };
  }
});
gv.render = Hk;
var Aa = gv;
re(Aa);
le(Aa, hv);
const lD = Aa;
var Sl = Aa;
const Uc = (e) => dn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, Hc = (e) => dn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, jk = (e) => {
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
      this.has(o) && No(this.cache, o);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Pl = (e) => e, jc = (e) => e ** 3, bv = (e) => e < 0.5 ? jc(e * 2) / 2 : 1 - jc((1 - e) * 2) / 2, et = (e, n, o = "") => {
  if (e === void 0 && (e = ""), e.length >= n)
    return e;
  const t = n - e.length, r = Math.floor(t / o.length);
  return o.repeat(r) + o.slice(0, t % o.length) + e;
};
var Yk = Object.defineProperty, Yc = Object.getOwnPropertySymbols, Wk = Object.prototype.hasOwnProperty, Kk = Object.prototype.propertyIsEnumerable, Wc = (e, n, o) => n in e ? Yk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, qk = (e, n) => {
  for (var o in n || (n = {}))
    Wk.call(n, o) && Wc(e, o, n[o]);
  if (Yc)
    for (var o of Yc(n))
      Kk.call(n, o) && Wc(e, o, n[o]);
  return e;
}, Ma = (e, n, o) => new Promise((t, r) => {
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
const Xk = "background-image", Gk = "lazy-loading", Zk = "lazy-error", Kc = "lazy-attempt", Jk = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Ol = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", bt = [], ea = [], yv = jk(100), mn = {
  loading: Ol,
  error: Ol,
  attempt: 3,
  throttleWait: 300,
  events: Jk
};
let zu = ga(vr, mn.throttleWait);
function Na(e, n) {
  e._lazy.arg === Xk ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function Qk(e) {
  e._lazy.loading && Na(e, e._lazy.loading), vr();
}
function xk(e) {
  e._lazy.error && Na(e, e._lazy.error), e._lazy.state = "error", Tu(e), vr();
}
function wv(e, n) {
  Na(e, n), e._lazy.state = "success", Tu(e), vr();
}
function _k(e) {
  var n;
  ea.includes(e) || (ea.push(e), (n = mn.events) == null || n.forEach((o) => {
    e.addEventListener(o, zu, { passive: !0 });
  }));
}
function e$() {
  ea.forEach((e) => {
    var n;
    (n = mn.events) == null || n.forEach((o) => {
      e.removeEventListener(o, zu);
    });
  }), ea.length = 0;
}
function n$(e, n) {
  var o, t;
  const r = {
    loading: (o = e.getAttribute(Gk)) != null ? o : mn.loading,
    error: (t = e.getAttribute(Zk)) != null ? t : mn.error,
    attempt: e.getAttribute(Kc) ? Number(e.getAttribute(Kc)) : mn.attempt
  };
  e._lazy = qk({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), Na(e, Ol), k(mn.filter, e._lazy);
}
function o$(e, n) {
  const o = new Image();
  o.src = n, e._lazy.preloadImage = o, o.addEventListener("load", () => {
    e._lazy.attemptLock = !1, yv.add(n), wv(e, n);
  }), o.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? xk(e) : kv(e);
  });
}
function kv(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (yv.has(n)) {
    wv(e, n), e._lazy.attemptLock = !1;
    return;
  }
  Qk(e), o$(e, n);
}
function Eu(e) {
  return Ma(this, null, function* () {
    yield bn(), au(e) && kv(e);
  });
}
function vr() {
  bt.forEach((e) => Eu(e));
}
function t$(e) {
  return Ma(this, null, function* () {
    !bt.includes(e) && bt.push(e), vy(e).forEach(_k), yield Eu(e);
  });
}
function Tu(e) {
  No(bt, e), bt.length === 0 && e$();
}
function r$(e, n) {
  const { src: o, arg: t } = e._lazy;
  return o !== n.value || t !== n.arg;
}
function $v(e, n) {
  return Ma(this, null, function* () {
    n$(e, n), yield t$(e);
  });
}
function a$(e, n) {
  return Ma(this, null, function* () {
    if (!r$(e, n)) {
      bt.includes(e) && (yield Eu(e));
      return;
    }
    yield $v(e, n);
  });
}
function i$(e = {}) {
  const { events: n, loading: o, error: t, attempt: r, throttleWait: a, filter: i } = e;
  mn.events = n ?? mn.events, mn.loading = o ?? mn.loading, mn.error = t ?? mn.error, mn.attempt = r ?? mn.attempt, mn.throttleWait = a ?? mn.throttleWait, mn.filter = i;
}
const Cv = {
  mounted: $v,
  unmounted: Tu,
  updated: a$,
  install(e, n) {
    i$(n), zu = ga(vr, mn.throttleWait), e.directive("lazy", this);
  }
}, sD = Cv;
var Gt = Cv;
const Sv = {
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
}, l$ = (e) => ["mini", "small", "normal", "large"].includes(e), { name: s$, n: u$, classes: c$ } = ne("avatar"), d$ = ["src", "alt", "lazy-loading", "lazy-error"], f$ = ["src", "alt"];
function p$(e, n) {
  const o = Xe("lazy");
  return g(), P(
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
      style: X({
        width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      e.src ? (g(), P(
        Ne,
        { key: 0 },
        [
          e.lazy ? Fe((g(), P("img", {
            key: 0,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: X({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...t) => e.handleLoad && e.handleLoad(...t))
          }, null, 46, d$)), [
            [o, e.src]
          ]) : (g(), P("img", {
            key: 1,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: X({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...t) => e.handleLoad && e.handleLoad(...t)),
            onError: n[2] || (n[2] = (...t) => e.handleError && e.handleError(...t))
          }, null, 46, f$))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (g(), P(
        "div",
        {
          key: 1,
          ref: "textElement",
          class: p(e.n("text")),
          style: X({ transform: `scale(${e.scale})` })
        },
        [
          H(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const Pv = ee({
  name: s$,
  directives: { Lazy: Gt },
  props: Sv,
  setup(e) {
    const n = w(null), o = w(null), t = w(1);
    yn(r), tr(r);
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
      c ? (u._lazy.state === "success" && k(d, s), u._lazy.state === "error" && k(f, s)) : k(d, s);
    }
    function i(s) {
      k(e.onError, s);
    }
    function l(s) {
      k(e.onClick, s);
    }
    return {
      avatarElement: n,
      textElement: o,
      scale: t,
      n: u$,
      classes: c$,
      isInternalSize: l$,
      toSizeUnit: Ee,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
Pv.render = p$;
var Va = Pv;
re(Va);
le(Va, Sv);
const uD = Va;
var zl = Va;
const Ov = {
  offset: [Number, String],
  vertical: Boolean
}, { name: v$, n: m$, classes: h$ } = ne("avatar-group");
function g$(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: X(e.rootStyles)
    },
    [
      H(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const zv = ee({
  name: v$,
  props: Ov,
  setup(e) {
    return {
      rootStyles: E(() => e.offset == null ? {} : {
        "--avatar-group-offset": Ee(e.offset)
      }),
      n: m$,
      classes: h$
    };
  }
});
zv.render = g$;
var Ra = zv;
re(Ra);
le(Ra, Ov);
const cD = Ra;
var El = Ra;
const po = {
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
}, { name: b$, n: y$, classes: w$ } = ne("loading");
function k$(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      e.$slots.default ? (g(), P(
        "div",
        {
          key: 0,
          class: p(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
        },
        [
          H(e.$slots, "default"),
          e.loading ? (g(), P(
            "div",
            {
              key: 0,
              class: p(e.n("content-mask"))
            },
            null,
            2
            /* CLASS */
          )) : K("v-if", !0)
        ],
        2
        /* CLASS */
      )) : K("v-if", !0),
      e.isShow ? (g(), P(
        "div",
        {
          key: 1,
          class: p(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
        },
        [
          e.type === "circle" ? (g(), P(
            "div",
            {
              key: 0,
              class: p(e.n("circle"))
            },
            [
              F(
                "span",
                {
                  class: p(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
                  style: X({
                    width: e.multiplySizeUnit(e.radius, 2),
                    height: e.multiplySizeUnit(e.radius, 2),
                    color: e.color
                  })
                },
                [...n[0] || (n[0] = [
                  F(
                    "svg",
                    { viewBox: "25 25 50 50" },
                    [
                      F("circle", {
                        cx: "50",
                        cy: "50",
                        r: "20",
                        fill: "none"
                      })
                    ],
                    -1
                    /* CACHED */
                  )
                ])],
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )) : K("v-if", !0),
          (g(!0), P(
            Ne,
            null,
            Ze(e.loadingTypeDict, (o, t) => (g(), P(
              Ne,
              { key: t },
              [
                e.type === t ? (g(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.classes(e.n(t), e.n(`${t}--${e.size}`)))
                  },
                  [
                    (g(!0), P(
                      Ne,
                      null,
                      Ze(o, (r) => (g(), P(
                        "div",
                        {
                          key: r + t,
                          style: X({ backgroundColor: e.color }),
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
                )) : K("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          e.$slots.description || e.description ? (g(), P(
            "div",
            {
              key: 1,
              class: p(e.classes(e.n("description"), e.n(`description--${e.size}`))),
              style: X({ color: e.color })
            },
            [
              H(e.$slots, "description", {}, () => [
                Ae(
                  ie(e.description),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : K("v-if", !0)
        ],
        2
        /* CLASS */
      )) : K("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Ev = ee({
  name: b$,
  props: po,
  setup(e, { slots: n }) {
    const o = E(() => k(n.default) ? e.loading : !0);
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: o,
      n: y$,
      classes: w$,
      multiplySizeUnit: En
    };
  }
});
Ev.render = k$;
var Fa = Ev;
re(Fa);
le(Fa, po);
const dD = Fa;
var yt = Fa, $$ = Object.defineProperty, C$ = Object.defineProperties, S$ = Object.getOwnPropertyDescriptors, qc = Object.getOwnPropertySymbols, P$ = Object.prototype.hasOwnProperty, O$ = Object.prototype.propertyIsEnumerable, Xc = (e, n, o) => n in e ? $$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Gc = (e, n) => {
  for (var o in n || (n = {}))
    P$.call(n, o) && Xc(e, o, n[o]);
  if (qc)
    for (var o of qc(n))
      O$.call(n, o) && Xc(e, o, n[o]);
  return e;
}, Zc = (e, n) => C$(e, S$(n));
const Tv = {
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
  loadingType: Me(po, "type"),
  loadingSize: Zc(Gc({}, Me(po, "size")), {
    default: void 0
  }),
  loadingColor: Zc(Gc({}, Me(po, "color")), {
    default: "currentColor"
  }),
  onClick: L(),
  onTouchstart: L()
}, Bv = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function z$() {
  const { bindChildren: e, childProviders: n, length: o } = kn(Bv);
  return {
    length: o,
    buttons: n,
    bindButtons: e
  };
}
function E$() {
  const { bindParent: e, parentProvider: n, index: o } = wn(Bv);
  return {
    index: o,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: T$, n: B$, classes: D$ } = ne("button"), I$ = ["tabindex", "type", "disabled"];
function A$(e, n) {
  const o = x("var-loading"), t = x("var-hover-overlay"), r = Xe("ripple"), a = Xe("hover");
  return Fe((g(), P("button", {
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
    e.loading || e.pending ? (g(), ye(o, {
      key: 0,
      class: p(e.n("loading")),
      "var-button-cover": "",
      color: e.loadingColor,
      type: e.loadingType,
      size: e.loadingSize || e.states.size,
      radius: e.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : K("v-if", !0),
    F(
      "div",
      {
        class: p(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [
        H(e.$slots, "default")
      ],
      2
      /* CLASS */
    ),
    G(t, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, I$)), [
    [r, { disabled: e.disabled || !e.ripple || e.loading || e.pending }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const Dv = ee({
  name: T$,
  components: {
    VarLoading: yt,
    VarHoverOverlay: Yn
  },
  directives: { Ripple: sn, Hover: Nn },
  props: Tv,
  setup(e) {
    const n = w(!1), o = w(!1), { buttonGroup: t } = E$(), { hovering: r, handleHovering: a } = to(), i = E(() => {
      var d, f, v, m, h, y;
      if (!t)
        return {
          elevation: vn(e.elevation, 2),
          type: (d = e.type) != null ? d : "default",
          size: (f = e.size) != null ? f : "normal",
          color: e.color,
          text: e.text,
          textColor: e.textColor,
          outline: e.outline,
          iconContainer: e.iconContainer
        };
      const { type: C, size: $, color: b, textColor: S, mode: B } = t;
      return {
        elevation: "",
        type: (v = e.type) != null ? v : C.value,
        size: (m = e.size) != null ? m : $.value,
        color: (h = e.color) != null ? h : b.value,
        textColor: (y = e.textColor) != null ? y : S.value,
        text: B.value === "text" || B.value === "outline",
        outline: B.value === "outline",
        iconContainer: B.value === "icon-container"
      };
    });
    function l(d) {
      e.autoLoading && (o.value = !0, Promise.all(mo(d)).then(() => {
        o.value = !1;
      }).catch(() => {
        o.value = !1;
      }));
    }
    function s(d) {
      const { loading: f, disabled: v, onClick: m } = e;
      !m || f || v || o.value || l(k(m, d));
    }
    function u(d) {
      const { loading: f, disabled: v, onTouchstart: m } = e;
      !m || f || v || o.value || l(k(m, d));
    }
    function c() {
      e.focusable && (n.value = !0);
    }
    return {
      pending: o,
      states: i,
      hovering: r,
      isFocusing: n,
      n: B$,
      classes: D$,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      handleFocus: c
    };
  }
});
Dv.render = A$;
var La = Dv;
re(La);
le(La, Tv);
const fD = La;
var In = La;
const Iv = {
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
}, { name: M$, n: N$, classes: V$ } = ne("back-top");
function R$(e, n) {
  const o = x("var-icon"), t = x("var-button");
  return g(), ye(co, {
    to: "body",
    disabled: e.disabled
  }, [
    F(
      "div",
      Ke({
        ref: "backTopEl",
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Un((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
      }),
      [
        H(e.$slots, "default", {}, () => [
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
const Av = ee({
  name: M$,
  components: {
    VarButton: In,
    VarIcon: Qe
  },
  inheritAttrs: !1,
  props: Iv,
  setup(e) {
    const n = w(!1), o = w(null), t = w(!0);
    let r;
    const a = ga(() => {
      i();
    }, 200);
    ko(() => {
      s(), u(), i(), t.value = !1;
    }), Ho(u), Pt(c);
    function i() {
      n.value = yo(r) >= rn(e.visibilityHeight);
    }
    function l(d) {
      k(e.onClick, d);
      const f = lr(r);
      Ht(r, {
        left: f,
        duration: e.duration,
        animation: bv
      });
    }
    function s() {
      r = e.target ? Np(e.target, "BackTop") : Fo(o.value);
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
      toSizeUnit: Ee,
      n: N$,
      classes: V$,
      handleClick: l
    };
  }
});
Av.render = R$;
var Ua = Av;
re(Ua);
le(Ua, Iv);
const pD = Ua;
var Tl = Ua;
const Mv = {
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
  icon: Me(ln, "name"),
  namespace: Me(ln, "namespace"),
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
var F$ = Object.defineProperty, Jc = Object.getOwnPropertySymbols, L$ = Object.prototype.hasOwnProperty, U$ = Object.prototype.propertyIsEnumerable, Qc = (e, n, o) => n in e ? F$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, H$ = (e, n) => {
  for (var o in n || (n = {}))
    L$.call(n, o) && Qc(e, o, n[o]);
  if (Jc)
    for (var o of Jc(n))
      U$.call(n, o) && Qc(e, o, n[o]);
  return e;
};
const { name: j$, n: Y$, classes: W$ } = ne("badge"), K$ = { key: 0 };
function q$(e, n) {
  const o = x("var-icon");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      H(e.$slots, "default"),
      G(nn, {
        name: e.n("$-badge-fade"),
        persisted: ""
      }, {
        default: ce(() => [
          Fe(F(
            "span",
            Ke({
              class: e.classes(
                e.n("content"),
                e.n(`--${e.type}`),
                [e.$slots.default, e.n(`--${e.position}`), e.n("--offset")],
                [e.dot, e.n("--dot")],
                [e.icon, e.n("--icon")]
              ),
              style: H$({ background: e.color }, e.offsetStyle)
            }, e.$attrs),
            [
              e.icon ? (g(), ye(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-badge-cover": "",
                name: e.icon,
                namespace: e.namespace
              }, null, 8, ["class", "name", "namespace"])) : K("v-if", !0),
              H(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (g(), P(
                  "span",
                  K$,
                  ie(e.value),
                  1
                  /* TEXT */
                )) : K("v-if", !0)
              ])
            ],
            16
            /* FULL_PROPS */
          ), [
            [xn, !e.hidden]
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
const Nv = ee({
  name: j$,
  components: { VarIcon: Qe },
  inheritAttrs: !1,
  props: Mv,
  setup(e) {
    const n = E(() => {
      const { value: t, maxValue: r } = e;
      return t != null && r != null && j(t) > j(r) ? `${r}+` : t;
    }), o = E(() => ({
      "--badge-offset-y": Ee(e.offsetY),
      "--badge-offset-x": Ee(e.offsetX)
    }));
    return {
      value: n,
      offsetStyle: o,
      n: Y$,
      classes: W$
    };
  }
});
Nv.render = q$;
var Ha = Nv;
re(Ha);
le(Ha, Mv);
const vD = Ha;
var na = Ha;
const Vv = {
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
}, Rv = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function X$() {
  const { childProviders: e, length: n, bindChildren: o } = kn(
    Rv
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: o
  };
}
var G$ = Object.defineProperty, xc = Object.getOwnPropertySymbols, Z$ = Object.prototype.hasOwnProperty, J$ = Object.prototype.propertyIsEnumerable, _c = (e, n, o) => n in e ? G$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ed = (e, n) => {
  for (var o in n || (n = {}))
    Z$.call(n, o) && _c(e, o, n[o]);
  if (xc)
    for (var o of xc(n))
      J$.call(n, o) && _c(e, o, n[o]);
  return e;
};
const { name: Q$, n: x$, classes: _$ } = ne("bottom-navigation"), { n: ja } = ne("bottom-navigation-item"), nd = ja("--right-half-space"), od = ja("--left-half-space"), td = ja("--right-space"), eC = {
  type: "primary"
};
function nC(e, n) {
  const o = x("var-button");
  return g(), P(
    Ne,
    null,
    [
      F(
        "div",
        Ke({
          ref: "bottomNavigationDom",
          class: e.classes(
            e.n(),
            e.n("$--box"),
            [e.fixed, e.n("--fixed")],
            [e.border, e.n("--border")],
            [e.safeArea, e.n("--safe-area")],
            [e.variant, e.n("--variant")]
          ),
          style: `z-index:${e.zIndex}`
        }, e.$attrs),
        [
          H(e.$slots, "default"),
          e.$slots.fab ? (g(), ye(o, Ke({
            key: 0,
            class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
            "var-bottom-navigation__fab": ""
          }, e.fabProps, { onClick: e.handleFabClick }), {
            default: ce(() => [
              H(e.$slots, "fab")
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class", "onClick"])) : K("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      ),
      e.fixed && e.placeholder ? (g(), P(
        "div",
        {
          key: 0,
          class: p(e.n("placeholder")),
          style: X({ height: e.placeholderHeight })
        },
        null,
        6
        /* CLASS, STYLE */
      )) : K("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const Fv = ee({
  name: Q$,
  components: { VarButton: In },
  props: Vv,
  setup(e, { slots: n }) {
    const o = w(null), t = E(() => e.animated), r = E(() => e.active), a = E(() => e.activeColor), i = E(() => e.inactiveColor), l = E(() => e.variant), s = w(), u = w({}), { length: c, bottomNavigationItems: d, bindBottomNavigationItem: f } = X$();
    f({
      animated: t,
      active: r,
      activeColor: a,
      inactiveColor: i,
      variant: l,
      onToggle: $
    }), de(() => c.value, m), de(
      () => e.fabProps,
      (N) => {
        u.value = ed(ed({}, eC), N);
      },
      { immediate: !0, deep: !0 }
    ), ao(W), yn(() => {
      W(), n.fab && O(c.value);
    }), tr(() => {
      B(), n.fab && O(c.value);
    });
    function m() {
      c.value === 0 || h() || y() || C();
    }
    function h() {
      return d.find(({ name: N }) => r.value === N.value);
    }
    function y() {
      return d.find(({ index: N }) => r.value === N.value);
    }
    function C() {
      Bn(r.value) && (r.value < 0 ? k(e["onUpdate:active"], 0) : r.value > c.value - 1 && k(e["onUpdate:active"], c.value - 1));
    }
    function $(N) {
      r.value !== N && (e.onBeforeChange ? b(N) : S(N));
    }
    function b(N) {
      const z = mo(k(e.onBeforeChange, N));
      Promise.all(z).then((A) => {
        A.every(Boolean) && S(N);
      });
    }
    function S(N) {
      k(e["onUpdate:active"], N), k(e.onChange, N);
    }
    function B() {
      D().forEach((z) => {
        z.classList.remove(nd, od, td);
      });
    }
    function O(N) {
      const z = D(), A = z.length, I = N % 2 === 0;
      z.forEach((R, T) => {
        V(I, R, T, A);
      });
    }
    function V(N, z, A, I) {
      const R = A === I - 1;
      if (!N && R) {
        z.classList.add(td);
        return;
      }
      const T = A === I / 2 - 1, J = A === I / 2;
      T ? z.classList.add(nd) : J && z.classList.add(od);
    }
    function D() {
      return Array.from(o.value.querySelectorAll(`.${ja()}`));
    }
    function M() {
      k(e.onFabClick);
    }
    function W() {
      if (!e.fixed || !e.placeholder)
        return;
      const { height: N } = tn(o.value);
      s.value = Ee(N);
    }
    return {
      length: c,
      bottomNavigationDom: o,
      fabProps: u,
      placeholderHeight: s,
      n: x$,
      classes: _$,
      handleFabClick: M
    };
  }
});
Fv.render = nC;
var Ya = Fv;
re(Ya);
le(Ya, Vv);
const mD = Ya;
var Bl = Ya;
const Lv = {
  name: String,
  label: String,
  icon: Me(ln, "name"),
  namespace: Me(ln, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: L()
};
function oC() {
  const { parentProvider: e, index: n, bindParent: o } = wn(
    Rv
  );
  return jn(!!o, "BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: o
  };
}
const { name: tC, n: rC, classes: aC } = ne("bottom-navigation-item"), iC = {
  type: "danger",
  dot: !0
};
function lC(e, n) {
  const o = x("var-icon"), t = x("var-badge"), r = Xe("ripple");
  return Fe((g(), P(
    "button",
    {
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.variant, e.n("--variant-padding")],
          [e.isActive && !e.variant, e.n("--active")],
          [e.animated, e.n("--animated")]
        )
      ),
      style: X({
        color: e.isActive ? e.activeColor : e.inactiveColor
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      F(
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
          e.badge ? (g(), ye(t, Ke({ key: 0 }, e.badgeProps, {
            class: e.n("badge"),
            "var-bottom-navigation-item-cover": ""
          }), {
            default: ce(() => [
              H(e.$slots, "icon", { active: e.isActive }, () => [
                e.icon ? (g(), ye(o, {
                  key: 0,
                  name: e.icon,
                  namespace: e.namespace,
                  class: p(e.n("icon")),
                  "var-bottom-navigation-item-cover": ""
                }, null, 8, ["name", "namespace", "class"])) : K("v-if", !0)
              ])
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class"])) : H(e.$slots, "icon", {
            key: 1,
            active: e.isActive
          }, () => [
            e.icon ? (g(), ye(o, {
              key: 0,
              name: e.icon,
              namespace: e.namespace,
              class: p(e.n("icon")),
              "var-bottom-navigation-item-cover": ""
            }, null, 8, ["name", "namespace", "class"])) : K("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      F(
        "span",
        {
          class: p(e.n("label"))
        },
        [
          H(e.$slots, "default", {}, () => [
            Ae(
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
const Uv = ee({
  name: tC,
  components: {
    VarBadge: na,
    VarIcon: Qe
  },
  directives: { Ripple: sn },
  props: Lv,
  setup(e) {
    const n = E(() => e.name), o = E(() => [n.value, r.value].includes(s.value)), t = E(() => e.badge === !0 ? iC : e.badge), { index: r, bottomNavigation: a, bindBottomNavigation: i } = oC(), { animated: l, active: s, activeColor: u, inactiveColor: c, variant: d } = a;
    i({
      name: n,
      index: r
    });
    function v() {
      var m;
      const h = (m = n.value) != null ? m : r.value;
      k(e.onClick, h), k(a.onToggle, h);
    }
    return {
      animated: l,
      activeColor: u,
      inactiveColor: c,
      badgeProps: t,
      isActive: o,
      variant: d,
      n: rC,
      classes: aC,
      handleClick: v
    };
  }
});
Uv.render = lC;
var Wa = Uv;
re(Wa);
le(Wa, Lv);
const hD = Wa;
var Dl = Wa;
const Hv = {
  separator: String,
  onClick: L()
}, jv = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function sC() {
  const { childProviders: e, bindChildren: n, length: o } = kn(
    jv
  );
  return {
    length: o,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function uC() {
  const { parentProvider: e, bindParent: n, index: o } = wn(
    jv
  );
  return jn(!!n, "Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: o,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: cC, n: dC, classes: fC } = ne("breadcrumb");
function pC(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      F(
        "div",
        {
          class: p(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
          onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
        },
        [
          H(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      e.isLast ? K("v-if", !0) : H(e.$slots, "separator", { key: 0 }, () => {
        var o;
        return [
          F(
            "div",
            {
              class: p(e.n("separator")),
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
const Yv = ee({
  name: cC,
  props: Hv,
  setup(e) {
    const { index: n, breadcrumb: o, bindBreadcrumb: t } = uC(), r = E(() => n.value === o.length.value - 1), a = E(() => o.separator.value);
    t(null);
    function i(l) {
      r.value || k(e.onClick, l);
    }
    return {
      n: dC,
      classes: fC,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Yv.render = pC;
var Ka = Yv;
re(Ka);
le(Ka, Hv);
const gD = Ka;
var Il = Ka;
const Wv = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: vC, n: mC } = ne("breadcrumbs");
function hC(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.n()),
      role: "navigation",
      "aria-label": "Breadcrumbs"
    },
    [
      H(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Kv = ee({
  name: vC,
  props: Wv,
  setup(e) {
    const n = E(() => e.separator), { bindBreadcrumbList: o, length: t } = sC();
    return o({
      length: t,
      separator: n
    }), { n: mC };
  }
});
Kv.render = hC;
var qa = Kv;
re(qa);
le(qa, Wv);
const bD = qa;
var Al = qa;
const qv = {
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
}, { name: gC, n: bC, classes: yC } = ne("button-group");
function wC(e, n) {
  return g(), P(
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
      H(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Xv = ee({
  name: gC,
  props: qv,
  setup(e) {
    const { bindButtons: n } = z$(), o = {
      elevation: E(() => e.elevation),
      type: E(() => e.type),
      size: E(() => e.size),
      color: E(() => e.color),
      textColor: E(() => e.textColor),
      mode: E(() => e.mode)
    };
    return n(o), {
      n: bC,
      classes: yC,
      formatElevation: vn
    };
  }
});
Xv.render = wC;
var Xa = Xv;
re(Xa);
le(Xa, qv);
const yD = Xa;
var Ml = Xa;
const Gv = {
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
  onClick: L(),
  "onUpdate:floating": L(),
  /**
   * @deprecated use outlined variant instead
   */
  outline: Boolean
};
var kC = (e, n, o) => new Promise((t, r) => {
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
const { name: $C, n: CC, classes: SC } = ne("card"), PC = 500, OC = ["src", "alt"];
function zC(e, n) {
  const o = x("var-icon"), t = x("var-button"), r = Xe("ripple");
  return Fe((g(), P(
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
      style: X({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      F(
        "div",
        {
          ref: "cardFloater",
          class: p(e.n("floater")),
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
          H(e.$slots, "image", {}, () => [
            e.src ? (g(), P("img", {
              key: 0,
              class: p(e.n("image")),
              style: X({
                objectFit: e.fit,
                height: e.toSizeUnit(e.imageHeight),
                width: e.toSizeUnit(e.imageWidth)
              }),
              src: e.src,
              alt: e.alt
            }, null, 14, OC)) : K("v-if", !0)
          ]),
          F(
            "div",
            {
              class: p(e.n("container"))
            },
            [
              H(e.$slots, "title", {
                slotClass: e.n("title")
              }, () => [
                e.title ? (g(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("title"))
                  },
                  ie(e.title),
                  3
                  /* TEXT, CLASS */
                )) : K("v-if", !0)
              ]),
              H(e.$slots, "subtitle", {
                slotClass: e.n("subtitle")
              }, () => [
                e.subtitle ? (g(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("subtitle"))
                  },
                  ie(e.subtitle),
                  3
                  /* TEXT, CLASS */
                )) : K("v-if", !0)
              ]),
              e.$slots.default ? (g(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("content"))
                },
                [
                  H(e.$slots, "default")
                ],
                2
                /* CLASS */
              )) : K("v-if", !0),
              H(e.$slots, "description", {
                slotClass: e.n("description")
              }, () => [
                e.description ? (g(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("description"))
                  },
                  ie(e.description),
                  3
                  /* TEXT, CLASS */
                )) : K("v-if", !0)
              ]),
              e.$slots.extra ? (g(), P(
                "div",
                {
                  key: 1,
                  class: p(e.n("footer"))
                },
                [
                  H(e.$slots, "extra")
                ],
                2
                /* CLASS */
              )) : K("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (g(), P(
                "div",
                {
                  key: 2,
                  class: p(e.n("floating-content")),
                  style: X({
                    height: e.contentHeight,
                    opacity: e.opacity,
                    transition: `opacity ${e.floatingDuration * 2}ms`
                  })
                },
                [
                  H(e.$slots, "floating-content")
                ],
                6
                /* CLASS, STYLE */
              )) : K("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.showFloatingButtons ? (g(), P(
            "div",
            {
              key: 0,
              class: p(e.classes(e.n("floating-buttons"), e.n("$--box"))),
              style: X({
                zIndex: e.zIndex,
                opacity: e.opacity,
                transition: `opacity ${e.floatingDuration * 2}ms`
              })
            },
            [
              H(e.$slots, "close-button", {}, () => [
                G(t, {
                  "var-card-cover": "",
                  class: p(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
                  onClick: Un(e.close, ["stop"])
                }, {
                  default: ce(() => [
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
          )) : K("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      ),
      F(
        "div",
        {
          class: p(e.n("holder")),
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
const Zv = ee({
  name: $C,
  directives: { Ripple: sn },
  components: {
    VarIcon: Qe,
    VarButton: In
  },
  props: Gv,
  setup(e) {
    const n = w(null), o = w(null), t = w("auto"), r = w("auto"), a = w("100%"), i = w("100%"), l = w("auto"), s = w("auto"), u = w(void 0), c = w("hidden"), d = w("0px"), f = w("0"), v = E(() => e.layout === "row"), m = w(!1), h = w(!1), { zIndex: y } = cr(() => e.floating, 1);
    let C = "auto", $ = "auto", b = null;
    const S = w(null);
    ur(
      () => e.floating,
      () => !v.value
    ), de(
      () => e.floating,
      (M) => {
        v.value || je(() => {
          M ? B() : O();
        });
      },
      { immediate: !0 }
    );
    function B() {
      clearTimeout(S.value), clearTimeout(b), S.value = null, S.value = setTimeout(
        () => kC(this, null, function* () {
          const { width: M, height: W, left: N, top: z } = tn(n.value);
          t.value = Ee(M), r.value = Ee(W), a.value = t.value, i.value = r.value, l.value = Ee(z), s.value = Ee(N), u.value = "fixed", C = l.value, $ = s.value, m.value = !0, yield bn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", d.value = "auto", f.value = "1", c.value = "auto", h.value = !0;
        }),
        e.ripple ? PC : 0
      );
    }
    function O() {
      clearTimeout(b), clearTimeout(S.value), S.value = null, a.value = t.value, i.value = r.value, l.value = C, s.value = $, d.value = "0px", f.value = "0", m.value = !1, b = setTimeout(() => {
        t.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", C = "auto", $ = "auto", c.value = "hidden", u.value = void 0, h.value = !1;
      }, e.floatingDuration);
    }
    function V() {
      k(e["onUpdate:floating"], !1);
    }
    function D(M) {
      k(e.onClick, M);
    }
    return {
      card: n,
      cardFloater: o,
      holderWidth: t,
      holderHeight: r,
      floater: S,
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
      showFloatingButtons: m,
      floated: h,
      n: CC,
      classes: SC,
      toSizeUnit: Ee,
      close: V,
      formatElevation: vn,
      handleClick: D
    };
  }
});
Zv.render = zC;
var Ga = Zv;
re(Ga);
le(Ga, Gv);
const wD = Ga;
var Nl = Ga;
const Jv = {
  title: String,
  icon: Me(ln, "name"),
  namespace: Me(ln, "namespace"),
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: L()
}, { name: EC, n: TC, classes: BC } = ne("cell");
function DC(e, n) {
  const o = x("var-icon"), t = Xe("ripple");
  return Fe((g(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: X(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      H(e.$slots, "icon", {}, () => [
        e.icon ? (g(), P(
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
        )) : K("v-if", !0)
      ]),
      F(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          H(e.$slots, "default", {}, () => [
            e.title ? (g(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("title"), e.titleClass))
              },
              ie(e.title),
              3
              /* TEXT, CLASS */
            )) : K("v-if", !0)
          ]),
          H(e.$slots, "description", {}, () => [
            e.description ? (g(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("description"), e.descriptionClass))
              },
              ie(e.description),
              3
              /* TEXT, CLASS */
            )) : K("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      e.$slots.extra ? (g(), P(
        "div",
        {
          key: 0,
          class: p(e.classes(e.n("extra"), e.extraClass))
        },
        [
          H(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : K("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: !e.ripple }]
  ]);
}
const Qv = ee({
  name: EC,
  components: { VarIcon: Qe },
  directives: { Ripple: sn },
  props: Jv,
  setup(e) {
    const n = E(() => e.borderOffset == null ? {} : {
      "--cell-border-left": Ee(e.borderOffset),
      "--cell-border-right": Ee(e.borderOffset)
    });
    function o(t) {
      k(e.onClick, t);
    }
    return {
      borderOffsetStyles: n,
      n: TC,
      classes: BC,
      toSizeUnit: Ee,
      handleClick: o
    };
  }
});
Qv.render = DC;
var Za = Qv;
re(Za);
le(Za, Jv);
const kD = Za;
var Vl = Za;
const xv = {
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
  onChange: L(),
  "onUpdate:modelValue": L()
}, { name: IC, n: AC, classes: MC } = ne("checkbox-group");
function NC(e, n) {
  const o = x("maybe-v-node"), t = x("var-checkbox"), r = x("var-form-details");
  return g(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      F(
        "div",
        {
          class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          e.options.length ? (g(!0), P(
            Ne,
            { key: 0 },
            Ze(e.options, (a) => (g(), ye(t, {
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
          )) : K("v-if", !0),
          H(e.$slots, "default")
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
const _v = ee({
  name: IC,
  components: { VarFormDetails: Dn, VarCheckbox: vt, MaybeVNode: sr },
  props: xv,
  setup(e) {
    const n = E(() => e.max), o = E(() => e.modelValue.length), { length: t, checkboxes: r, bindCheckboxes: a } = N1(), { bindForm: i } = qn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Kn(), d = E(() => l.value), f = {
      max: n,
      checkedCount: o,
      onChecked: h,
      onUnchecked: y,
      validate: B,
      resetValidation: c,
      reset: S,
      errorMessage: d
    };
    de(() => e.modelValue, C, { deep: !0 }), de(() => t.value, C), a(f), k(i, f);
    function v(O) {
      je(() => {
        const { validateTrigger: V, rules: D, modelValue: M } = e;
        s(V, O, D, M);
      });
    }
    function m(O) {
      k(e["onUpdate:modelValue"], O), k(e.onChange, O), v("onChange");
    }
    function h(O) {
      const { modelValue: V } = e;
      V.includes(O) || m([...V, O]);
    }
    function y(O) {
      const { modelValue: V } = e;
      V.includes(O) && m(V.filter((D) => D !== O));
    }
    function C() {
      r.forEach(({ sync: O }) => O(e.modelValue));
    }
    function $() {
      const O = r.map(({ checkedValue: D }) => D.value), V = vl(O);
      return k(e["onUpdate:modelValue"], V), V;
    }
    function b() {
      const O = r.filter(({ checked: D }) => !D.value).map(({ checkedValue: D }) => D.value), V = vl(O);
      return k(e["onUpdate:modelValue"], V), V;
    }
    function S() {
      k(e["onUpdate:modelValue"], []), c();
    }
    function B() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: AC,
      classes: MC,
      checkAll: $,
      inverseAll: b,
      reset: S,
      validate: B,
      resetValidation: c,
      isFunction: gn
    };
  }
});
_v.render = NC;
var Ja = _v;
re(Ja);
le(Ja, xv);
const $D = Ja;
var Rl = Ja;
const em = {
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
  iconName: Me(ln, "name"),
  namespace: Me(ln, "namespace"),
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
}, { name: VC, n: So, classes: RC } = ne("chip");
function FC(e, n) {
  const o = x("var-icon");
  return g(), ye(nn, {
    name: e.n("$-fade")
  }, {
    default: ce(() => [
      F(
        "span",
        Ke({
          class: e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 1), ...e.contentClass),
          style: e.chipStyle
        }, e.$attrs),
        [
          H(e.$slots, "left"),
          F(
            "span",
            {
              class: p(e.n(`text-${e.size}`))
            },
            [
              H(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          H(e.$slots, "right"),
          e.closeable ? (g(), P(
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
          )) : K("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const nm = ee({
  name: VC,
  components: {
    VarIcon: Qe
  },
  inheritAttrs: !1,
  props: em,
  setup(e) {
    const n = E(() => {
      const { plain: r, textColor: a, color: i } = e;
      return r ? {
        color: a || i,
        borderColor: i
      } : {
        color: a,
        background: i
      };
    }), o = E(() => {
      const { size: r, block: a, type: i, plain: l, round: s } = e, u = So(a ? "$--flex" : "$--inline-flex"), c = l ? `${So("plain")} ${So(`plain-${i}`)}` : So(`--${i}`), d = s ? So("--round") : null;
      return [So(`--${r}`), u, c, d];
    });
    function t(r) {
      k(e.onClose, r);
    }
    return {
      chipStyle: n,
      contentClass: o,
      n: So,
      classes: RC,
      formatElevation: vn,
      handleClose: t
    };
  }
});
nm.render = FC;
var Qa = nm;
re(Qa);
le(Qa, em);
const CD = Qa;
var oa = Qa;
const Fl = Symbol("HIGHLIGHTER_PROVIDER_KEY");
function LC(e) {
  Zs(Fl, e);
}
function UC() {
  return lu(Fl) ? Xs(Fl) : { highlighter: null, theme: null };
}
const om = {
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
};
var HC = (e, n, o) => new Promise((t, r) => {
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
const { name: jC, n: YC, classes: WC } = ne("code"), KC = ["innerHTML"];
function qC(e, n) {
  return g(), P("div", {
    class: p(e.classes(e.n(), [e.wordWrap, e.n("--word-wrap")])),
    innerHTML: e.highlightedCode
  }, null, 10, KC);
}
const tm = ee({
  name: jC,
  props: om,
  setup(e) {
    const { highlighter: n, theme: o } = UC(), t = w(""), r = E(() => {
      var a;
      return (a = e.theme) != null ? a : o?.value;
    });
    return n && de(
      () => [n.value, e.code, e.language, r.value, e.trim],
      (a) => HC(this, [a], function* ([i, l, s = "", u = "", c]) {
        i && (t.value = yield i.codeToHtml(c ? l.trim() : l, { lang: s, theme: u }));
      }),
      { immediate: !0 }
    ), {
      n: YC,
      classes: WC,
      highlightedCode: t
    };
  }
});
tm.render = qC;
var xa = tm;
re(xa);
le(xa, om);
const SD = xa;
var Ll = xa;
const rm = {
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
}, am = Symbol("ROW_BIND_COL_KEY");
function XC() {
  const { length: e, childProviders: n, bindChildren: o } = kn(am);
  return {
    length: e,
    cols: n,
    bindCols: o
  };
}
function GC() {
  const { index: e, bindParent: n, parentProvider: o } = wn(am);
  return {
    index: e,
    row: o,
    bindRow: n
  };
}
const { name: ZC, n: kr, classes: JC } = ne("col");
function QC(e, n) {
  return g(), P(
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
      H(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const im = ee({
  name: ZC,
  props: rm,
  setup(e) {
    const n = E(() => j(e.span)), o = E(() => j(e.offset)), t = E(() => {
      var s;
      const [u = 0, c = 0] = (s = r?.average.value) != null ? s : [];
      return { left: c, right: c, top: u, bottom: u };
    }), { row: r, bindRow: a } = GC();
    k(a, null);
    function i(s, u) {
      const c = [];
      if (u == null)
        return c;
      if (Hn(u)) {
        const { offset: d, span: f } = u;
        return Number(f) >= 0 && c.push(kr(`--span-${s}-${f}`)), d && c.push(kr(`--offset-${s}-${d}`)), c;
      }
      return Number(u) >= 0 && c.push(kr(`--span-${s}-${u}`)), c;
    }
    function l(s) {
      k(e.onClick, s);
    }
    return {
      span: n,
      offset: o,
      padding: t,
      n: kr,
      classes: JC,
      toNumber: j,
      toSizeUnit: Ee,
      getSize: i,
      handleClick: l,
      padStartFlex: xr
    };
  }
});
im.render = QC;
var _a = im;
re(_a);
le(_a, rm);
const PD = _a;
var Ul = _a;
const lm = {
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
}, sm = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function xC() {
  const { childProviders: e, length: n, bindChildren: o } = kn(
    sm
  );
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: o
  };
}
const { name: _C, n: eS } = ne("collapse");
function nS(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      H(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const um = ee({
  name: _C,
  props: lm,
  setup(e) {
    const n = E(() => e.offset), o = E(() => e.divider), t = E(() => e.elevation), r = E(() => e.accordion), a = E(() => mo(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = xC(), u = {
      offset: n,
      divider: o,
      elevation: t,
      accordion: r,
      updateItem: c
    };
    de(
      () => i.value,
      () => je().then(v)
    ), de(
      () => e.modelValue,
      () => je().then(v)
    ), s(u);
    function c(h, y) {
      if (e.accordion) {
        d(y ? h : void 0);
        return;
      }
      const C = y ? [...a.value, h] : a.value.filter(($) => $ !== h);
      d(C);
    }
    function d(h) {
      k(e["onUpdate:modelValue"], h), k(e.onChange, h);
    }
    function f() {
      if (e.accordion) {
        const [C] = a.value;
        if (C == null)
          return;
        const $ = l.find(({ name: b }) => C === b.value);
        return $ ?? l.find(({ index: b, name: S }) => S.value == null && C === b.value);
      }
      const h = l.filter(
        ({ name: C }) => C.value != null && a.value.includes(C.value)
      ), y = l.filter(
        ({ index: C, name: $ }) => $.value == null && a.value.includes(C.value)
      );
      return [...h, ...y];
    }
    function v() {
      const h = Kf(mo(f()));
      l.forEach((y) => {
        y.init(h.includes(y));
      });
    }
    return {
      divider: o,
      n: eS,
      toggleAll: (h) => {
        if (e.accordion)
          return;
        const C = l.filter(($) => {
          var b;
          const S = (b = $.name.value) != null ? b : $.index.value, B = a.value.includes(S);
          return h.skipDisabled && $.disabled.value ? B : h.expand === "inverse" ? !B : h.expand;
        }).map(($) => {
          var b;
          return (b = $.name.value) != null ? b : $.index.value;
        });
        d(C);
      }
    };
  }
});
um.render = nS;
var ei = um;
re(ei);
le(ei, lm);
const OD = ei;
var Hl = ei, rd = (e, n, o) => new Promise((t, r) => {
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
function cm(e) {
  const { contentEl: n, showContent: o, expand: t } = e;
  let r = !0;
  de(
    t,
    (u) => {
      je(() => {
        u ? a() : i();
      });
    },
    { immediate: !0 }
  );
  function a() {
    return rd(this, null, function* () {
      if (!n.value || (n.value.style.height = "", o.value = !0, yield ho(), !n.value))
        return;
      const { offsetHeight: u } = n.value;
      n.value.style.height = "0px", yield ho(), n.value && (n.value.style.height = u + "px", r && (yield bn(), r && l()));
    });
  }
  const i = () => rd(this, null, function* () {
    if (!n.value)
      return;
    const { offsetHeight: u } = n.value;
    n.value.style.height = u + "px", yield ho(), n.value.style.height = "0px";
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
const dm = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
function oS() {
  const { parentProvider: e, index: n, bindParent: o } = wn(
    sm
  );
  return jn(!!o, "Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: o
  };
}
const { name: tS, n: rS, classes: aS } = ne("collapse-item"), iS = ["aria-expanded", "aria-disabled", "role"];
function lS(e, n) {
  const o = x("var-icon");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: X(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
    },
    [
      F(
        "div",
        {
          class: p(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
        },
        null,
        2
        /* CLASS */
      ),
      F("div", {
        class: p(e.classes(e.n("header"), [!e.disabled, e.n("header--cursor-pointer")])),
        "aria-expanded": e.isShow,
        "aria-disabled": e.disabled,
        role: e.accordion ? "tab" : "button",
        onClick: n[0] || (n[0] = (...t) => e.toggle && e.toggle(...t))
      }, [
        e.$slots.title || e.title ? (g(), P(
          "div",
          {
            key: 0,
            class: p(e.n("header-title"))
          },
          [
            H(e.$slots, "title", {}, () => [
              Ae(
                ie(e.title),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : K("v-if", !0),
        F(
          "div",
          {
            class: p(e.n("header-icon"))
          },
          [
            H(e.$slots, "icon", {}, () => [
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
      ], 10, iS),
      Fe(F(
        "div",
        {
          ref: "contentEl",
          class: p(e.n("content")),
          onTransitionend: n[1] || (n[1] = (...t) => e.handleTransitionEnd && e.handleTransitionEnd(...t)),
          onTransitionstart: n[2] || (n[2] = (...t) => e.handleTransitionStart && e.handleTransitionStart(...t))
        },
        [
          F(
            "div",
            {
              class: p(e.n("content-wrap"))
            },
            [
              H(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        34
        /* CLASS, NEED_HYDRATION */
      ), [
        [xn, e.showContent]
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const fm = ee({
  name: tS,
  components: {
    VarIcon: Qe
  },
  props: dm,
  setup(e) {
    const n = w(!1), o = w(!1), t = w(null), r = E(() => e.name), a = E(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = oS(), { offset: u, divider: c, elevation: d, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: r,
      disabled: a,
      init: C
    });
    const { handleTransitionEnd: h, handleTransitionStart: y } = cm({
      contentEl: t,
      showContent: o,
      expand: n
    });
    function C(b) {
      n.value = b;
    }
    function $() {
      var b;
      e.disabled || v((b = e.name) != null ? b : i.value, !n.value);
    }
    return {
      isShow: n,
      showContent: o,
      offset: u,
      divider: c,
      elevation: d,
      contentEl: t,
      accordion: f,
      n: rS,
      classes: aS,
      toggle: $,
      formatElevation: vn,
      handleTransitionEnd: h,
      handleTransitionStart: y
    };
  }
});
fm.render = lS;
var ni = fm;
re(ni);
le(ni, dm);
const zD = ni;
var jl = ni;
const pm = {
  expand: Boolean
}, { name: sS, n: uS } = ne("collapse-transition");
function cS(e, n) {
  return Fe((g(), P(
    "div",
    {
      ref: "contentEl",
      class: p(e.n("content")),
      onTransitionend: n[0] || (n[0] = (...o) => e.handleTransitionEnd && e.handleTransitionEnd(...o)),
      onTransitionstart: n[1] || (n[1] = (...o) => e.handleTransitionStart && e.handleTransitionStart(...o))
    },
    [
      H(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  )), [
    [xn, e.showContent]
  ]);
}
const vm = ee({
  name: sS,
  props: pm,
  setup(e) {
    const n = w(!1), o = w(null), t = E(() => e.expand), { handleTransitionEnd: r, handleTransitionStart: a } = cm({
      contentEl: o,
      showContent: n,
      expand: t
    });
    return {
      showContent: n,
      contentEl: o,
      n: uS,
      handleTransitionEnd: r,
      handleTransitionStart: a
    };
  }
});
vm.render = cS;
var oi = vm;
re(oi);
le(oi, pm);
const ED = oi;
var Yl = oi;
const mm = {
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
  onEnd: L()
}, { name: dS, n: fS } = ne("count-to");
function pS(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      H(e.$slots, "default", { value: e.value }, () => [
        Ae(
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
const hm = ee({
  name: dS,
  props: mm,
  setup(e) {
    const {
      value: n,
      reset: o,
      // expose
      start: t,
      // expose
      pause: r
    } = P0({
      from: () => j(e.from),
      to: () => j(e.to),
      duration: () => j(e.duration),
      timingFunction: e.timingFunction,
      onFinished() {
        k(e.onEnd);
      }
    }), a = E(() => ml(n.value, j(e.precision)));
    de(() => [e.from, e.to, e.duration], i), ko(i);
    function i() {
      o(), e.autoStart && t();
    }
    return {
      value: a,
      n: fS,
      start: t,
      pause: r,
      reset: i,
      toNumber: j,
      floor: ml
    };
  }
});
hm.render = pS;
var ti = hm;
re(ti);
le(ti, mm);
const TD = ti;
var Wl = ti;
const gm = {
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
}, { name: vS, n: mS } = ne("countdown"), Kl = 1e3, ql = 60 * Kl, Xl = 60 * ql, ad = 24 * Xl;
function hS(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      H(e.$slots, "default", Go(pa(e.timeData)), () => [
        Ae(
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
const bm = ee({
  name: vS,
  props: gm,
  setup(e) {
    const n = w(""), o = w({
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
    ), ko(() => {
      c(), e.autoStart && d();
    }), Ho(() => {
      l != null && (r = l, r === !0 && d(!0));
    }), Ct(() => {
      l = r, f();
    }), nr(f);
    function s(m, h) {
      const y = Object.values(h), C = ["DD", "HH", "mm", "ss"], $ = [24, 60, 60, 1e3];
      if (C.forEach((b, S) => {
        m.includes(b) ? m = m.replace(b, et(`${y[S]}`, 2, "0")) : y[S + 1] += y[S] * $[S];
      }), m.includes("S")) {
        const b = et(`${y[y.length - 1]}`, 3, "0");
        m.includes("SSS") ? m = m.replace("SSS", b) : m.includes("SS") ? m = m.replace("SS", b.slice(0, 2)) : m = m.replace("S", b.slice(0, 1));
      }
      return m;
    }
    function u(m) {
      const h = Math.floor(m / ad), y = Math.floor(m % ad / Xl), C = Math.floor(m % Xl / ql), $ = Math.floor(m % ql / Kl), b = Math.floor(m % Kl), S = {
        days: h,
        hours: y,
        minutes: C,
        seconds: $,
        milliseconds: b
      };
      o.value = S, k(e.onChange, o.value), n.value = s(e.format, S);
    }
    function c() {
      const { time: m, onEnd: h } = e, y = performance.now();
      if (t || (t = y + j(m)), i = t - y, i < 0 && (i = 0), u(i), i === 0) {
        k(h);
        return;
      }
      r && (a = Vo(c));
    }
    function d(m = !1) {
      r && !m || (r = !0, t = performance.now() + (i || j(e.time)), c());
    }
    function f() {
      r = !1, pt(a);
    }
    function v() {
      t = 0, r = !1, pt(a), c();
    }
    return {
      showTime: n,
      timeData: o,
      n: mS,
      start: d,
      pause: f,
      reset: v
    };
  }
});
bm.render = hS;
var ri = bm;
re(ri);
le(ri, gm);
const BD = ri;
var Gl = ri;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var it = 9e15, Wo = 1e9, Zl = "0123456789abcdef", ta = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", ra = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Jl = {
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
  minE: -it,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: it,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, ym, vo, Te = !0, ai = "[DecimalError] ", Uo = ai + "Invalid argument: ", wm = ai + "Precision limit exceeded", km = ai + "crypto unavailable", $m = "[object Decimal]", On = Math.floor, hn = Math.pow, gS = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, bS = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, yS = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Cm = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, oo = 1e7, ze = 7, wS = 9007199254740991, kS = ta.length - 1, Ql = ra.length - 1, _ = { toStringTag: $m };
_.absoluteValue = _.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), Se(e);
};
_.ceil = function() {
  return Se(new this.constructor(this), this.e + 1, 2);
};
_.clampedTo = _.clamp = function(e, n) {
  var o, t = this, r = t.constructor;
  if (e = new r(e), n = new r(n), !e.s || !n.s) return new r(NaN);
  if (e.gt(n)) throw Error(Uo + n);
  return o = t.cmp(e), o < 0 ? e : t.cmp(n) > 0 ? n : new r(t);
};
_.comparedTo = _.cmp = function(e) {
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
_.cosine = _.cos = function() {
  var e, n, o = this, t = o.constructor;
  return o.d ? o.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + ze, t.rounding = 1, o = $S(t, Em(t, o)), t.precision = e, t.rounding = n, Se(vo == 2 || vo == 3 ? o.neg() : o, e, n, !0)) : new t(1) : new t(NaN);
};
_.cubeRoot = _.cbrt = function() {
  var e, n, o, t, r, a, i, l, s, u, c = this, d = c.constructor;
  if (!c.isFinite() || c.isZero()) return new d(c);
  for (Te = !1, a = c.s * hn(c.s * c, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (o = Sn(c.d), e = c.e, (a = (e - o.length + 1) % 3) && (o += a == 1 || a == -2 ? "0" : "00"), a = hn(o, 1 / 3), e = On((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? o = "5e" + e : (o = a.toExponential(), o = o.slice(0, o.indexOf("e") + 1) + e), t = new d(o), t.s = c.s) : t = new d(a.toString()), i = (e = d.precision) + 3; ; )
    if (l = t, s = l.times(l).times(l), u = s.plus(c), t = en(u.plus(c).times(l), u.plus(s), i + 2, 1), Sn(l.d).slice(0, i) === (o = Sn(t.d)).slice(0, i))
      if (o = o.slice(i - 3, i + 1), o == "9999" || !r && o == "4999") {
        if (!r && (Se(l, e + 1, 0), l.times(l).times(l).eq(c))) {
          t = l;
          break;
        }
        i += 4, r = 1;
      } else {
        (!+o || !+o.slice(1) && o.charAt(0) == "5") && (Se(t, e + 1, 1), n = !t.times(t).times(t).eq(c));
        break;
      }
  return Te = !0, Se(t, e, d.rounding, n);
};
_.decimalPlaces = _.dp = function() {
  var e, n = this.d, o = NaN;
  if (n) {
    if (e = n.length - 1, o = (e - On(this.e / ze)) * ze, e = n[e], e) for (; e % 10 == 0; e /= 10) o--;
    o < 0 && (o = 0);
  }
  return o;
};
_.dividedBy = _.div = function(e) {
  return en(this, new this.constructor(e));
};
_.dividedToIntegerBy = _.divToInt = function(e) {
  var n = this, o = n.constructor;
  return Se(en(n, new o(e), 0, 1, 1), o.precision, o.rounding);
};
_.equals = _.eq = function(e) {
  return this.cmp(e) === 0;
};
_.floor = function() {
  return Se(new this.constructor(this), this.e + 1, 3);
};
_.greaterThan = _.gt = function(e) {
  return this.cmp(e) > 0;
};
_.greaterThanOrEqualTo = _.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
_.hyperbolicCosine = _.cosh = function() {
  var e, n, o, t, r, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite()) return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero()) return l;
  o = i.precision, t = i.rounding, i.precision = o + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / li(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = wt(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, c = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(c.minus(s.times(c))));
  return Se(a, i.precision = o, i.rounding = t, !0);
};
_.hyperbolicSine = _.sinh = function() {
  var e, n, o, t, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero()) return new a(r);
  if (n = a.precision, o = a.rounding, a.precision = n + Math.max(r.e, r.sd()) + 4, a.rounding = 1, t = r.d.length, t < 3)
    r = wt(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(t), e = e > 16 ? 16 : e | 0, r = r.times(1 / li(5, e)), r = wt(a, 2, r, r, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = r.times(r), r = r.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = o, Se(r, n, o, !0);
};
_.hyperbolicTangent = _.tanh = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 7, t.rounding = 1, en(o.sinh(), o.cosh(), t.precision = e, t.rounding = n)) : new t(o.s);
};
_.inverseCosine = _.acos = function() {
  var e, n = this, o = n.constructor, t = n.abs().cmp(1), r = o.precision, a = o.rounding;
  return t !== -1 ? t === 0 ? n.isNeg() ? no(o, r, a) : new o(0) : new o(NaN) : n.isZero() ? no(o, r + 4, a).times(0.5) : (o.precision = r + 6, o.rounding = 1, n = n.asin(), e = no(o, r + 4, a).times(0.5), o.precision = r, o.rounding = a, e.minus(n));
};
_.inverseHyperbolicCosine = _.acosh = function() {
  var e, n, o = this, t = o.constructor;
  return o.lte(1) ? new t(o.eq(1) ? 0 : NaN) : o.isFinite() ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(Math.abs(o.e), o.sd()) + 4, t.rounding = 1, Te = !1, o = o.times(o).minus(1).sqrt().plus(o), Te = !0, t.precision = e, t.rounding = n, o.ln()) : new t(o);
};
_.inverseHyperbolicSine = _.asinh = function() {
  var e, n, o = this, t = o.constructor;
  return !o.isFinite() || o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 2 * Math.max(Math.abs(o.e), o.sd()) + 6, t.rounding = 1, Te = !1, o = o.times(o).plus(1).sqrt().plus(o), Te = !0, t.precision = e, t.rounding = n, o.ln());
};
_.inverseHyperbolicTangent = _.atanh = function() {
  var e, n, o, t, r = this, a = r.constructor;
  return r.isFinite() ? r.e >= 0 ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = a.precision, n = a.rounding, t = r.sd(), Math.max(t, e) < 2 * -r.e - 1 ? Se(new a(r), e, n, !0) : (a.precision = o = t - r.e, r = en(r.plus(1), new a(1).minus(r), o + e, 1), a.precision = e + 4, a.rounding = 1, r = r.ln(), a.precision = e, a.rounding = n, r.times(0.5))) : new a(NaN);
};
_.inverseSine = _.asin = function() {
  var e, n, o, t, r = this, a = r.constructor;
  return r.isZero() ? new a(r) : (n = r.abs().cmp(1), o = a.precision, t = a.rounding, n !== -1 ? n === 0 ? (e = no(a, o + 4, t).times(0.5), e.s = r.s, e) : new a(NaN) : (a.precision = o + 6, a.rounding = 1, r = r.div(new a(1).minus(r.times(r)).sqrt().plus(1)).atan(), a.precision = o, a.rounding = t, r.times(2)));
};
_.inverseTangent = _.atan = function() {
  var e, n, o, t, r, a, i, l, s, u = this, c = u.constructor, d = c.precision, f = c.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new c(u);
    if (u.abs().eq(1) && d + 4 <= Ql)
      return i = no(c, d + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s) return new c(NaN);
    if (d + 4 <= Ql)
      return i = no(c, d + 4, f).times(0.5), i.s = u.s, i;
  }
  for (c.precision = l = d + 10, c.rounding = 1, o = Math.min(28, l / ze + 2 | 0), e = o; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (Te = !1, n = Math.ceil(l / ze), t = 1, s = u.times(u), i = new c(u), r = u; e !== -1; )
    if (r = r.times(s), a = i.minus(r.div(t += 2)), r = r.times(s), i = a.plus(r.div(t += 2)), i.d[n] !== void 0) for (e = n; i.d[e] === a.d[e] && e--; ) ;
  return o && (i = i.times(2 << o - 1)), Te = !0, Se(i, c.precision = d, c.rounding = f, !0);
};
_.isFinite = function() {
  return !!this.d;
};
_.isInteger = _.isInt = function() {
  return !!this.d && On(this.e / ze) > this.d.length - 2;
};
_.isNaN = function() {
  return !this.s;
};
_.isNegative = _.isNeg = function() {
  return this.s < 0;
};
_.isPositive = _.isPos = function() {
  return this.s > 0;
};
_.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
_.lessThan = _.lt = function(e) {
  return this.cmp(e) < 0;
};
_.lessThanOrEqualTo = _.lte = function(e) {
  return this.cmp(e) < 1;
};
_.logarithm = _.log = function(e) {
  var n, o, t, r, a, i, l, s, u = this, c = u.constructor, d = c.precision, f = c.rounding, v = 5;
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
  if (Te = !1, l = d + v, i = Do(u, l), t = n ? aa(c, l + 10) : Do(e, l), s = en(i, t, l, 1), Zt(s.d, r = d, f))
    do
      if (l += 10, i = Do(u, l), t = n ? aa(c, l + 10) : Do(e, l), s = en(i, t, l, 1), !a) {
        +Sn(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = Se(s, d + 1, 0));
        break;
      }
    while (Zt(s.d, r += 10, f));
  return Te = !0, Se(s, d, f);
};
_.minus = _.sub = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, m = v.constructor;
  if (e = new m(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new m(NaN) : v.d ? e.s = -e.s : e = new m(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s)
    return e.s = -e.s, v.plus(e);
  if (u = v.d, f = e.d, l = m.precision, s = m.rounding, !u[0] || !f[0]) {
    if (f[0]) e.s = -e.s;
    else if (u[0]) e = new m(v);
    else return new m(s === 3 ? -0 : 0);
    return Te ? Se(e, l, s) : e;
  }
  if (o = On(e.e / ze), c = On(v.e / ze), u = u.slice(), a = c - o, a) {
    for (d = a < 0, d ? (n = u, a = -a, i = f.length) : (n = f, o = c, i = u.length), t = Math.max(Math.ceil(l / ze), i) + 2, a > t && (a = t, n.length = 1), n.reverse(), t = a; t--; ) n.push(0);
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
      for (r = t; r && u[--r] === 0; ) u[r] = oo - 1;
      --u[r], u[t] += oo;
    }
    u[t] -= f[t];
  }
  for (; u[--i] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --o;
  return u[0] ? (e.d = u, e.e = ii(u, o), Te ? Se(e, l, s) : e) : new m(s === 3 ? -0 : 0);
};
_.modulo = _.mod = function(e) {
  var n, o = this, t = o.constructor;
  return e = new t(e), !o.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || o.d && !o.d[0] ? Se(new t(o), t.precision, t.rounding) : (Te = !1, t.modulo == 9 ? (n = en(o, e.abs(), 0, 3, 1), n.s *= e.s) : n = en(o, e, 0, t.modulo, 1), n = n.times(e), Te = !0, o.minus(n));
};
_.naturalExponential = _.exp = function() {
  return xl(this);
};
_.naturalLogarithm = _.ln = function() {
  return Do(this);
};
_.negated = _.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, Se(e);
};
_.plus = _.add = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d = this, f = d.constructor;
  if (e = new f(e), !d.d || !e.d)
    return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
  if (d.s != e.s)
    return e.s = -e.s, d.minus(e);
  if (u = d.d, c = e.d, l = f.precision, s = f.rounding, !u[0] || !c[0])
    return c[0] || (e = new f(d)), Te ? Se(e, l, s) : e;
  if (a = On(d.e / ze), t = On(e.e / ze), u = u.slice(), r = a - t, r) {
    for (r < 0 ? (o = u, r = -r, i = c.length) : (o = c, t = a, i = u.length), a = Math.ceil(l / ze), i = a > i ? a + 1 : i + 1, r > i && (r = i, o.length = 1), o.reverse(); r--; ) o.push(0);
    o.reverse();
  }
  for (i = u.length, r = c.length, i - r < 0 && (r = i, o = c, c = u, u = o), n = 0; r; )
    n = (u[--r] = u[r] + c[r] + n) / oo | 0, u[r] %= oo;
  for (n && (u.unshift(n), ++t), i = u.length; u[--i] == 0; ) u.pop();
  return e.d = u, e.e = ii(u, t), Te ? Se(e, l, s) : e;
};
_.precision = _.sd = function(e) {
  var n, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Uo + e);
  return o.d ? (n = Sm(o.d), e && o.e + 1 > n && (n = o.e + 1)) : n = NaN, n;
};
_.round = function() {
  var e = this, n = e.constructor;
  return Se(new n(e), e.e + 1, n.rounding);
};
_.sine = _.sin = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + ze, t.rounding = 1, o = SS(t, Em(t, o)), t.precision = e, t.rounding = n, Se(vo > 2 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
_.squareRoot = _.sqrt = function() {
  var e, n, o, t, r, a, i = this, l = i.d, s = i.e, u = i.s, c = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new c(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (Te = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = Sn(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = On((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), t = new c(n)) : t = new c(u.toString()), o = (s = c.precision) + 3; ; )
    if (a = t, t = a.plus(en(i, a, o + 2, 1)).times(0.5), Sn(a.d).slice(0, o) === (n = Sn(t.d)).slice(0, o))
      if (n = n.slice(o - 3, o + 1), n == "9999" || !r && n == "4999") {
        if (!r && (Se(a, s + 1, 0), a.times(a).eq(i))) {
          t = a;
          break;
        }
        o += 4, r = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (Se(t, s + 1, 1), e = !t.times(t).eq(i));
        break;
      }
  return Te = !0, Se(t, s, c.rounding, e);
};
_.tangent = _.tan = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 10, t.rounding = 1, o = o.sin(), o.s = 1, o = en(o, new t(1).minus(o.times(o)).sqrt(), e + 10, 0), t.precision = e, t.rounding = n, Se(vo == 2 || vo == 4 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
_.times = _.mul = function(e) {
  var n, o, t, r, a, i, l, s, u, c = this, d = c.constructor, f = c.d, v = (e = new d(e)).d;
  if (e.s *= c.s, !f || !f[0] || !v || !v[0])
    return new d(!e.s || f && !f[0] && !v || v && !v[0] && !f ? NaN : !f || !v ? e.s / 0 : e.s * 0);
  for (o = On(c.e / ze) + On(e.e / ze), s = f.length, u = v.length, s < u && (a = f, f = v, v = a, i = s, s = u, u = i), a = [], i = s + u, t = i; t--; ) a.push(0);
  for (t = u; --t >= 0; ) {
    for (n = 0, r = s + t; r > t; )
      l = a[r] + v[t] * f[r - t - 1] + n, a[r--] = l % oo | 0, n = l / oo | 0;
    a[r] = (a[r] + n) % oo | 0;
  }
  for (; !a[--i]; ) a.pop();
  return n ? ++o : a.shift(), e.d = a, e.e = ii(a, o), Te ? Se(e, d.precision, d.rounding) : e;
};
_.toBinary = function(e, n) {
  return Bu(this, 2, e, n);
};
_.toDecimalPlaces = _.toDP = function(e, n) {
  var o = this, t = o.constructor;
  return o = new t(o), e === void 0 ? o : (Vn(e, 0, Wo), n === void 0 ? n = t.rounding : Vn(n, 0, 8), Se(o, e + o.e + 1, n));
};
_.toExponential = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = so(t, !0) : (Vn(e, 0, Wo), n === void 0 ? n = r.rounding : Vn(n, 0, 8), t = Se(new r(t), e + 1, n), o = so(t, !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
_.toFixed = function(e, n) {
  var o, t, r = this, a = r.constructor;
  return e === void 0 ? o = so(r) : (Vn(e, 0, Wo), n === void 0 ? n = a.rounding : Vn(n, 0, 8), t = Se(new a(r), e + r.e + 1, n), o = so(t, !1, e + t.e + 1)), r.isNeg() && !r.isZero() ? "-" + o : o;
};
_.toFraction = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, m = v.d, h = v.constructor;
  if (!m) return new h(v);
  if (u = o = new h(1), t = s = new h(0), n = new h(t), a = n.e = Sm(m) - v.e - 1, i = a % ze, n.d[0] = hn(10, i < 0 ? ze + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new h(e), !l.isInt() || l.lt(u)) throw Error(Uo + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Te = !1, l = new h(Sn(m)), c = h.precision, h.precision = a = m.length * ze * 2; d = en(l, n, 0, 1, 1), r = o.plus(d.times(t)), r.cmp(e) != 1; )
    o = t, t = r, r = u, u = s.plus(d.times(r)), s = r, r = n, n = l.minus(d.times(r)), l = r;
  return r = en(e.minus(o), t, 0, 1, 1), s = s.plus(r.times(u)), o = o.plus(r.times(t)), s.s = u.s = v.s, f = en(u, t, a, 1).minus(v).abs().cmp(en(s, o, a, 1).minus(v).abs()) < 1 ? [u, t] : [s, o], h.precision = c, Te = !0, f;
};
_.toHexadecimal = _.toHex = function(e, n) {
  return Bu(this, 16, e, n);
};
_.toNearest = function(e, n) {
  var o = this, t = o.constructor;
  if (o = new t(o), e == null) {
    if (!o.d) return o;
    e = new t(1), n = t.rounding;
  } else {
    if (e = new t(e), n === void 0 ? n = t.rounding : Vn(n, 0, 8), !o.d) return e.s ? o : e;
    if (!e.d)
      return e.s && (e.s = o.s), e;
  }
  return e.d[0] ? (Te = !1, o = en(o, e, 0, n, 1).times(e), Te = !0, Se(o)) : (e.s = o.s, o = e), o;
};
_.toNumber = function() {
  return +this;
};
_.toOctal = function(e, n) {
  return Bu(this, 8, e, n);
};
_.toPower = _.pow = function(e) {
  var n, o, t, r, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0]) return new s(hn(+l, u));
  if (l = new s(l), l.eq(1)) return l;
  if (t = s.precision, a = s.rounding, e.eq(1)) return Se(l, t, a);
  if (n = On(e.e / ze), n >= e.d.length - 1 && (o = u < 0 ? -u : u) <= wS)
    return r = Pm(s, l, o, t), e.s < 0 ? new s(1).div(r) : Se(r, t, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1) return new s(NaN);
    if ((e.d[n] & 1) == 0 && (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return o = hn(+l, u), n = o == 0 || !isFinite(o) ? On(u * (Math.log("0." + Sn(l.d)) / Math.LN10 + l.e + 1)) : new s(o + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Te = !1, s.rounding = l.s = 1, o = Math.min(12, (n + "").length), r = xl(e.times(Do(l, t + o)), t), r.d && (r = Se(r, t + 5, 1), Zt(r.d, t, a) && (n = t + 10, r = Se(xl(e.times(Do(l, n + o)), n), n + 5, 1), +Sn(r.d).slice(t + 1, t + 15) + 1 == 1e14 && (r = Se(r, t + 1, 0)))), r.s = i, Te = !0, s.rounding = a, Se(r, t, a));
};
_.toPrecision = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = so(t, t.e <= r.toExpNeg || t.e >= r.toExpPos) : (Vn(e, 1, Wo), n === void 0 ? n = r.rounding : Vn(n, 0, 8), t = Se(new r(t), e, n), o = so(t, e <= t.e || t.e <= r.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
_.toSignificantDigits = _.toSD = function(e, n) {
  var o = this, t = o.constructor;
  return e === void 0 ? (e = t.precision, n = t.rounding) : (Vn(e, 1, Wo), n === void 0 ? n = t.rounding : Vn(n, 0, 8)), Se(new t(o), e, n);
};
_.toString = function() {
  var e = this, n = e.constructor, o = so(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + o : o;
};
_.truncated = _.trunc = function() {
  return Se(new this.constructor(this), this.e + 1, 1);
};
_.valueOf = _.toJSON = function() {
  var e = this, n = e.constructor, o = so(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + o : o;
};
function Sn(e) {
  var n, o, t, r = e.length - 1, a = "", i = e[0];
  if (r > 0) {
    for (a += i, n = 1; n < r; n++)
      t = e[n] + "", o = ze - t.length, o && (a += Po(o)), a += t;
    i = e[n], t = i + "", o = ze - t.length, o && (a += Po(o));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; ) i /= 10;
  return a + i;
}
function Vn(e, n, o) {
  if (e !== ~~e || e < n || e > o)
    throw Error(Uo + e);
}
function Zt(e, n, o, t) {
  var r, a, i, l;
  for (a = e[0]; a >= 10; a /= 10) --n;
  return --n < 0 ? (n += ze, r = 0) : (r = Math.ceil((n + 1) / ze), n %= ze), a = hn(10, ze - n), l = e[r] % a | 0, t == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = o < 4 && l == 99999 || o > 3 && l == 49999 || l == 5e4 || l == 0) : i = (o < 4 && l + 1 == a || o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == hn(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[r + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (t || o < 4) && l == 9999 || !t && o > 3 && l == 4999) : i = ((t || o < 4) && l + 1 == a || !t && o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == hn(10, n - 3) - 1, i;
}
function Nr(e, n, o) {
  for (var t, r = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = r.length; a--; ) r[a] *= n;
    for (r[0] += Zl.indexOf(e.charAt(i++)), t = 0; t < r.length; t++)
      r[t] > o - 1 && (r[t + 1] === void 0 && (r[t + 1] = 0), r[t + 1] += r[t] / o | 0, r[t] %= o);
  }
  return r.reverse();
}
function $S(e, n) {
  var o, t, r;
  if (n.isZero()) return n;
  t = n.d.length, t < 32 ? (o = Math.ceil(t / 3), r = (1 / li(4, o)).toString()) : (o = 16, r = "2.3283064365386962890625e-10"), e.precision += o, n = wt(e, 1, n.times(r), new e(1));
  for (var a = o; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= o, n;
}
var en = /* @__PURE__ */ (function() {
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
    var u, c, d, f, v, m, h, y, C, $, b, S, B, O, V, D, M, W, N, z, A = t.constructor, I = t.s == r.s ? 1 : -1, R = t.d, T = r.d;
    if (!R || !R[0] || !T || !T[0])
      return new A(
        // Return NaN if either NaN, or both Infinity or 0.
        !t.s || !r.s || (R ? T && R[0] == T[0] : !T) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          R && R[0] == 0 || !T ? I * 0 : I / 0
        )
      );
    for (s ? (v = 1, c = t.e - r.e) : (s = oo, v = ze, c = On(t.e / v) - On(r.e / v)), N = T.length, M = R.length, C = new A(I), $ = C.d = [], d = 0; T[d] == (R[d] || 0); d++) ;
    if (T[d] > (R[d] || 0) && c--, a == null ? (O = a = A.precision, i = A.rounding) : l ? O = a + (t.e - r.e) + 1 : O = a, O < 0)
      $.push(1), m = !0;
    else {
      if (O = O / v + 2 | 0, d = 0, N == 1) {
        for (f = 0, T = T[0], O++; (d < M || f) && O--; d++)
          V = f * s + (R[d] || 0), $[d] = V / T | 0, f = V % T | 0;
        m = f || d < M;
      } else {
        for (f = s / (T[0] + 1) | 0, f > 1 && (T = e(T, f, s), R = e(R, f, s), N = T.length, M = R.length), D = N, b = R.slice(0, N), S = b.length; S < N; ) b[S++] = 0;
        z = T.slice(), z.unshift(0), W = T[0], T[1] >= s / 2 && ++W;
        do
          f = 0, u = n(T, b, N, S), u < 0 ? (B = b[0], N != S && (B = B * s + (b[1] || 0)), f = B / W | 0, f > 1 ? (f >= s && (f = s - 1), h = e(T, f, s), y = h.length, S = b.length, u = n(h, b, y, S), u == 1 && (f--, o(h, N < y ? z : T, y, s))) : (f == 0 && (u = f = 1), h = T.slice()), y = h.length, y < S && h.unshift(0), o(b, h, S, s), u == -1 && (S = b.length, u = n(T, b, N, S), u < 1 && (f++, o(b, N < S ? z : T, S, s))), S = b.length) : u === 0 && (f++, b = [0]), $[d++] = f, u && b[0] ? b[S++] = R[D] || 0 : (b = [R[D]], S = 1);
        while ((D++ < M || b[0] !== void 0) && O--);
        m = b[0] !== void 0;
      }
      $[0] || $.shift();
    }
    if (v == 1)
      C.e = c, ym = m;
    else {
      for (d = 1, f = $[0]; f >= 10; f /= 10) d++;
      C.e = d + c * v - 1, Se(C, l ? a + C.e + 1 : a, i, m);
    }
    return C;
  };
})();
function Se(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, v = e.constructor;
  e: if (n != null) {
    if (d = e.d, !d) return e;
    for (r = 1, l = d[0]; l >= 10; l /= 10) r++;
    if (a = n - r, a < 0)
      a += ze, i = n, c = d[f = 0], s = c / hn(10, r - i - 1) % 10 | 0;
    else if (f = Math.ceil((a + 1) / ze), l = d.length, f >= l)
      if (t) {
        for (; l++ <= f; ) d.push(0);
        c = s = 0, r = 1, a %= ze, i = a - ze + 1;
      } else
        break e;
    else {
      for (c = l = d[f], r = 1; l >= 10; l /= 10) r++;
      a %= ze, i = a - ze + r, s = i < 0 ? 0 : c / hn(10, r - i - 1) % 10 | 0;
    }
    if (t = t || n < 0 || d[f + 1] !== void 0 || (i < 0 ? c : c % hn(10, r - i - 1)), u = o < 4 ? (s || t) && (o == 0 || o == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (o == 4 || t || o == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (a > 0 ? i > 0 ? c / hn(10, r - i) : 0 : d[f - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !d[0])
      return d.length = 0, u ? (n -= e.e + 1, d[0] = hn(10, (ze - n % ze) % ze), e.e = -n || 0) : d[0] = e.e = 0, e;
    if (a == 0 ? (d.length = f, l = 1, f--) : (d.length = f + 1, l = hn(10, ze - a), d[f] = i > 0 ? (c / hn(10, r - i) % hn(10, i) | 0) * l : 0), u)
      for (; ; )
        if (f == 0) {
          for (a = 1, i = d[0]; i >= 10; i /= 10) a++;
          for (i = d[0] += l, l = 1; i >= 10; i /= 10) l++;
          a != l && (e.e++, d[0] == oo && (d[0] = 1));
          break;
        } else {
          if (d[f] += l, d[f] != oo) break;
          d[f--] = 0, l = 1;
        }
    for (a = d.length; d[--a] === 0; ) d.pop();
  }
  return Te && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e;
}
function so(e, n, o) {
  if (!e.isFinite()) return zm(e);
  var t, r = e.e, a = Sn(e.d), i = a.length;
  return n ? (o && (t = o - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Po(t) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + Po(-r - 1) + a, o && (t = o - i) > 0 && (a += Po(t))) : r >= i ? (a += Po(r + 1 - i), o && (t = o - r - 1) > 0 && (a = a + "." + Po(t))) : ((t = r + 1) < i && (a = a.slice(0, t) + "." + a.slice(t)), o && (t = o - i) > 0 && (r + 1 === i && (a += "."), a += Po(t))), a;
}
function ii(e, n) {
  var o = e[0];
  for (n *= ze; o >= 10; o /= 10) n++;
  return n;
}
function aa(e, n, o) {
  if (n > kS)
    throw Te = !0, o && (e.precision = o), Error(wm);
  return Se(new e(ta), n, 1, !0);
}
function no(e, n, o) {
  if (n > Ql) throw Error(wm);
  return Se(new e(ra), n, o, !0);
}
function Sm(e) {
  var n = e.length - 1, o = n * ze + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10) o--;
    for (n = e[0]; n >= 10; n /= 10) o++;
  }
  return o;
}
function Po(e) {
  for (var n = ""; e--; ) n += "0";
  return n;
}
function Pm(e, n, o, t) {
  var r, a = new e(1), i = Math.ceil(t / ze + 4);
  for (Te = !1; ; ) {
    if (o % 2 && (a = a.times(n), ld(a.d, i) && (r = !0)), o = On(o / 2), o === 0) {
      o = a.d.length - 1, r && a.d[o] === 0 && ++a.d[o];
      break;
    }
    n = n.times(n), ld(n.d, i);
  }
  return Te = !0, a;
}
function id(e) {
  return e.d[e.d.length - 1] & 1;
}
function Om(e, n, o) {
  for (var t, r = new e(n[0]), a = 0; ++a < n.length; )
    if (t = new e(n[a]), t.s)
      r[o](t) && (r = t);
    else {
      r = t;
      break;
    }
  return r;
}
function xl(e, n) {
  var o, t, r, a, i, l, s, u = 0, c = 0, d = 0, f = e.constructor, v = f.rounding, m = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (n == null ? (Te = !1, s = m) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), d += 5;
  for (t = Math.log(hn(2, d)) / Math.LN10 * 2 + 5 | 0, s += t, o = a = i = new f(1), f.precision = s; ; ) {
    if (a = Se(a.times(e), s, 1), o = o.times(++c), l = i.plus(en(a, o, s, 1)), Sn(l.d).slice(0, s) === Sn(i.d).slice(0, s)) {
      for (r = d; r--; ) i = Se(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Zt(i.d, s - t, v, u))
          f.precision = s += 10, o = a = l = new f(1), c = 0, u++;
        else
          return Se(i, f.precision = m, v, Te = !0);
      else
        return f.precision = m, i;
    }
    i = l;
  }
}
function Do(e, n) {
  var o, t, r, a, i, l, s, u, c, d, f, v = 1, m = 10, h = e, y = h.d, C = h.constructor, $ = C.rounding, b = C.precision;
  if (h.s < 0 || !y || !y[0] || !h.e && y[0] == 1 && y.length == 1)
    return new C(y && !y[0] ? -1 / 0 : h.s != 1 ? NaN : y ? 0 : h);
  if (n == null ? (Te = !1, c = b) : c = n, C.precision = c += m, o = Sn(y), t = o.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; t < 7 && t != 1 || t == 1 && o.charAt(1) > 3; )
      h = h.times(e), o = Sn(h.d), t = o.charAt(0), v++;
    a = h.e, t > 1 ? (h = new C("0." + o), a++) : h = new C(t + "." + o.slice(1));
  } else
    return u = aa(C, c + 2, b).times(a + ""), h = Do(new C(t + "." + o.slice(1)), c - m).plus(u), C.precision = b, n == null ? Se(h, b, $, Te = !0) : h;
  for (d = h, s = i = h = en(h.minus(1), h.plus(1), c, 1), f = Se(h.times(h), c, 1), r = 3; ; ) {
    if (i = Se(i.times(f), c, 1), u = s.plus(en(i, new C(r), c, 1)), Sn(u.d).slice(0, c) === Sn(s.d).slice(0, c))
      if (s = s.times(2), a !== 0 && (s = s.plus(aa(C, c + 2, b).times(a + ""))), s = en(s, new C(v), c, 1), n == null)
        if (Zt(s.d, c - m, $, l))
          C.precision = c += m, u = i = h = en(d.minus(1), d.plus(1), c, 1), f = Se(h.times(h), c, 1), r = l = 1;
        else
          return Se(s, C.precision = b, $, Te = !0);
      else
        return C.precision = b, s;
    s = u, r += 2;
  }
}
function zm(e) {
  return String(e.s * e.s / 0);
}
function _l(e, n) {
  var o, t, r;
  for ((o = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (t = n.search(/e/i)) > 0 ? (o < 0 && (o = t), o += +n.slice(t + 1), n = n.substring(0, t)) : o < 0 && (o = n.length), t = 0; n.charCodeAt(t) === 48; t++) ;
  for (r = n.length; n.charCodeAt(r - 1) === 48; --r) ;
  if (n = n.slice(t, r), n) {
    if (r -= t, e.e = o = o - t - 1, e.d = [], t = (o + 1) % ze, o < 0 && (t += ze), t < r) {
      for (t && e.d.push(+n.slice(0, t)), r -= ze; t < r; ) e.d.push(+n.slice(t, t += ze));
      n = n.slice(t), t = ze - n.length;
    } else
      t -= r;
    for (; t--; ) n += "0";
    e.d.push(+n), Te && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function CS(e, n) {
  var o, t, r, a, i, l, s, u, c;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Cm.test(n)) return _l(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (bS.test(n))
    o = 16, n = n.toLowerCase();
  else if (gS.test(n))
    o = 2;
  else if (yS.test(n))
    o = 8;
  else
    throw Error(Uo + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, t = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = Pm(t, new t(o), a, a * 2)), u = Nr(n, o, oo), c = u.length - 1, a = c; u[a] === 0; --a) u.pop();
  return a < 0 ? new t(e.s * 0) : (e.e = ii(u, c), e.d = u, Te = !1, i && (e = en(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? hn(2, s) : Io.pow(2, s))), Te = !0, e);
}
function SS(e, n) {
  var o, t = n.d.length;
  if (t < 3)
    return n.isZero() ? n : wt(e, 2, n, n);
  o = 1.4 * Math.sqrt(t), o = o > 16 ? 16 : o | 0, n = n.times(1 / li(5, o)), n = wt(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), l = new e(20); o--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(l))));
  return n;
}
function wt(e, n, o, t, r) {
  var a, i, l, s, u = e.precision, c = Math.ceil(u / ze);
  for (Te = !1, s = o.times(o), l = new e(t); ; ) {
    if (i = en(l.times(s), new e(n++ * n++), u, 1), l = r ? t.plus(i) : t.minus(i), t = en(i.times(s), new e(n++ * n++), u, 1), i = l.plus(t), i.d[c] !== void 0) {
      for (a = c; i.d[a] === l.d[a] && a--; ) ;
      if (a == -1) break;
    }
    a = l, l = t, t = i, i = a;
  }
  return Te = !0, i.d.length = c + 1, i;
}
function li(e, n) {
  for (var o = e; --n; ) o *= e;
  return o;
}
function Em(e, n) {
  var o, t = n.s < 0, r = no(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return vo = t ? 4 : 1, n;
  if (o = n.divToInt(r), o.isZero())
    vo = t ? 3 : 2;
  else {
    if (n = n.minus(o.times(r)), n.lte(a))
      return vo = id(o) ? t ? 2 : 3 : t ? 4 : 1, n;
    vo = id(o) ? t ? 1 : 4 : t ? 3 : 2;
  }
  return n.minus(r).abs();
}
function Bu(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, v = e.constructor, m = o !== void 0;
  if (m ? (Vn(o, 1, Wo), t === void 0 ? t = v.rounding : Vn(t, 0, 8)) : (o = v.precision, t = v.rounding), !e.isFinite())
    c = zm(e);
  else {
    for (c = so(e), i = c.indexOf("."), m ? (r = 2, n == 16 ? o = o * 4 - 3 : n == 8 && (o = o * 3 - 2)) : r = n, i >= 0 && (c = c.replace(".", ""), f = new v(1), f.e = c.length - i, f.d = Nr(so(f), 10, r), f.e = f.d.length), d = Nr(c, 10, r), a = s = d.length; d[--s] == 0; ) d.pop();
    if (!d[0])
      c = m ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = d, e.e = a, e = en(e, f, o, t, 0, r), d = e.d, a = e.e, u = ym), i = d[o], l = r / 2, u = u || d[o + 1] !== void 0, u = t < 4 ? (i !== void 0 || u) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : i > l || i === l && (t === 4 || u || t === 6 && d[o - 1] & 1 || t === (e.s < 0 ? 8 : 7)), d.length = o, u)
        for (; ++d[--o] > r - 1; )
          d[o] = 0, o || (++a, d.unshift(1));
      for (s = d.length; !d[s - 1]; --s) ;
      for (i = 0, c = ""; i < s; i++) c += Zl.charAt(d[i]);
      if (m) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++) c += "0";
            for (d = Nr(c, r, n), s = d.length; !d[s - 1]; --s) ;
            for (i = 1, c = "1."; i < s; i++) c += Zl.charAt(d[i]);
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
function ld(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function PS(e) {
  return new this(e).abs();
}
function OS(e) {
  return new this(e).acos();
}
function zS(e) {
  return new this(e).acosh();
}
function ES(e, n) {
  return new this(e).plus(n);
}
function TS(e) {
  return new this(e).asin();
}
function BS(e) {
  return new this(e).asinh();
}
function DS(e) {
  return new this(e).atan();
}
function IS(e) {
  return new this(e).atanh();
}
function AS(e, n) {
  e = new this(e), n = new this(n);
  var o, t = this.precision, r = this.rounding, a = t + 4;
  return !e.s || !n.s ? o = new this(NaN) : !e.d && !n.d ? (o = no(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), o.s = e.s) : !n.d || e.isZero() ? (o = n.s < 0 ? no(this, t, r) : new this(0), o.s = e.s) : !e.d || n.isZero() ? (o = no(this, a, 1).times(0.5), o.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, o = this.atan(en(e, n, a, 1)), n = no(this, a, 1), this.precision = t, this.rounding = r, o = e.s < 0 ? o.minus(n) : o.plus(n)) : o = this.atan(en(e, n, a, 1)), o;
}
function MS(e) {
  return new this(e).cbrt();
}
function NS(e) {
  return Se(e = new this(e), e.e + 1, 2);
}
function VS(e, n, o) {
  return new this(e).clamp(n, o);
}
function RS(e) {
  if (!e || typeof e != "object") throw Error(ai + "Object expected");
  var n, o, t, r = e.defaults === !0, a = [
    "precision",
    1,
    Wo,
    "rounding",
    0,
    8,
    "toExpNeg",
    -it,
    0,
    "toExpPos",
    0,
    it,
    "maxE",
    0,
    it,
    "minE",
    -it,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (o = a[n], r && (this[o] = Jl[o]), (t = e[o]) !== void 0)
      if (On(t) === t && t >= a[n + 1] && t <= a[n + 2]) this[o] = t;
      else throw Error(Uo + o + ": " + t);
  if (o = "crypto", r && (this[o] = Jl[o]), (t = e[o]) !== void 0)
    if (t === !0 || t === !1 || t === 0 || t === 1)
      if (t)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[o] = !0;
        else
          throw Error(km);
      else
        this[o] = !1;
    else
      throw Error(Uo + o + ": " + t);
  return this;
}
function FS(e) {
  return new this(e).cos();
}
function LS(e) {
  return new this(e).cosh();
}
function Tm(e) {
  var n, o, t;
  function r(a) {
    var i, l, s, u = this;
    if (!(u instanceof r)) return new r(a);
    if (u.constructor = r, sd(a)) {
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
      return _l(u, a.toString());
    } else if (s !== "string")
      throw Error(Uo + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), Cm.test(a) ? _l(u, a) : CS(u, a);
  }
  if (r.prototype = _, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = RS, r.clone = Tm, r.isDecimal = sd, r.abs = PS, r.acos = OS, r.acosh = zS, r.add = ES, r.asin = TS, r.asinh = BS, r.atan = DS, r.atanh = IS, r.atan2 = AS, r.cbrt = MS, r.ceil = NS, r.clamp = VS, r.cos = FS, r.cosh = LS, r.div = US, r.exp = HS, r.floor = jS, r.hypot = YS, r.ln = WS, r.log = KS, r.log10 = XS, r.log2 = qS, r.max = GS, r.min = ZS, r.mod = JS, r.mul = QS, r.pow = xS, r.random = _S, r.round = e6, r.sign = n6, r.sin = o6, r.sinh = t6, r.sqrt = r6, r.sub = a6, r.sum = i6, r.tan = l6, r.tanh = s6, r.trunc = u6, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (t = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < t.length; ) e.hasOwnProperty(o = t[n++]) || (e[o] = this[o]);
  return r.config(e), r;
}
function US(e, n) {
  return new this(e).div(n);
}
function HS(e) {
  return new this(e).exp();
}
function jS(e) {
  return Se(e = new this(e), e.e + 1, 3);
}
function YS() {
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
function sd(e) {
  return e instanceof Io || e && e.toStringTag === $m || !1;
}
function WS(e) {
  return new this(e).ln();
}
function KS(e, n) {
  return new this(e).log(n);
}
function qS(e) {
  return new this(e).log(2);
}
function XS(e) {
  return new this(e).log(10);
}
function GS() {
  return Om(this, arguments, "lt");
}
function ZS() {
  return Om(this, arguments, "gt");
}
function JS(e, n) {
  return new this(e).mod(n);
}
function QS(e, n) {
  return new this(e).mul(n);
}
function xS(e, n) {
  return new this(e).pow(n);
}
function _S(e) {
  var n, o, t, r, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : Vn(e, 1, Wo), t = Math.ceil(e / ze), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(t)); a < t; )
        r = n[a], r >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(t *= 4); a < t; )
        r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(r % 1e7), a += 4);
      a = t / 4;
    } else
      throw Error(km);
  else for (; a < t; ) l[a++] = Math.random() * 1e7 | 0;
  for (t = l[--a], e %= ze, t && e && (r = hn(10, ze - e), l[a] = (t / r | 0) * r); l[a] === 0; a--) l.pop();
  if (a < 0)
    o = 0, l = [0];
  else {
    for (o = -1; l[0] === 0; o -= ze) l.shift();
    for (t = 1, r = l[0]; r >= 10; r /= 10) t++;
    t < ze && (o -= ze - t);
  }
  return i.e = o, i.d = l, i;
}
function e6(e) {
  return Se(e = new this(e), e.e + 1, this.rounding);
}
function n6(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function o6(e) {
  return new this(e).sin();
}
function t6(e) {
  return new this(e).sinh();
}
function r6(e) {
  return new this(e).sqrt();
}
function a6(e, n) {
  return new this(e).sub(n);
}
function i6() {
  var e = 0, n = arguments, o = new this(n[e]);
  for (Te = !1; o.s && ++e < n.length; ) o = o.plus(n[e]);
  return Te = !0, Se(o, this.precision, this.rounding);
}
function l6(e) {
  return new this(e).tan();
}
function s6(e) {
  return new this(e).tanh();
}
function u6(e) {
  return Se(e = new this(e), e.e + 1, 1);
}
_[Symbol.for("nodejs.util.inspect.custom")] = _.toString;
_[Symbol.toStringTag] = "Decimal";
var Io = _.constructor = Tm(Jl);
ta = new Io(ta);
ra = new Io(ra);
const Bm = {
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
  onBeforeChange: L(),
  onChange: L(),
  onIncrement: L(),
  onDecrement: L(),
  "onUpdate:modelValue": L()
}, ud = 100, cd = 600, { name: c6, n: d6, classes: f6 } = ne("counter"), p6 = ["inputmode", "readonly", "disabled"];
function v6(e, n) {
  const o = x("var-icon"), t = x("var-button"), r = x("var-form-details");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      F(
        "div",
        Ke({
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
          Fe(F("input", {
            "onUpdate:modelValue": n[0] || (n[0] = (a) => e.inputValue = a),
            class: p(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
            style: X({
              width: e.toSizeUnit(e.inputWidth),
              fontSize: e.toSizeUnit(e.inputTextSize)
            }),
            inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
            readonly: e.readonly || e.formReadonly,
            disabled: e.disabled || e.formDisabled || e.disableInput,
            onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
          }, null, 46, p6), [
            [Tf, e.inputValue]
          ]),
          G(t, {
            class: p(
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
const Dm = ee({
  name: c6,
  components: {
    VarButton: In,
    VarIcon: Qe,
    VarFormDetails: Dn
  },
  directives: { Ripple: sn },
  inheritAttrs: !1,
  props: Bm,
  setup(e) {
    const n = w(""), { bindForm: o, form: t } = qn(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = Kn(), { readonly: s, disabled: u } = t ?? {}, c = E(() => {
      const { max: T, modelValue: J } = e;
      return T != null && j(J) >= j(T);
    }), d = E(() => {
      const { min: T, modelValue: J } = e;
      return T != null && j(J) <= j(T);
    });
    let f, v, m, h;
    k(o, {
      reset: b,
      validate: C,
      resetValidation: l
    }), de(
      () => e.modelValue,
      (T) => {
        I(S(String(T))), k(e.onChange, j(T));
      }
    ), I(S(String(e.modelValue)));
    function C() {
      return i(e.rules, e.modelValue);
    }
    function $(T) {
      je(() => {
        const { validateTrigger: J, rules: fe, modelValue: q } = e;
        a(J, T, fe, q);
      });
    }
    function b() {
      const { min: T } = e;
      k(e["onUpdate:modelValue"], T != null ? j(T) : 0), l();
    }
    function S(T) {
      const { decimalLength: J, max: fe, min: q } = e;
      let ve = j(T);
      return fe != null && ve > j(fe) && (ve = j(fe)), q != null && ve < j(q) && (ve = j(q)), T = String(ve), J != null && (T = ve.toFixed(j(J))), T;
    }
    function B(T) {
      const { lazyChange: J, onBeforeChange: fe } = e, { value: q } = T.target, ve = S(q);
      J ? k(fe, j(ve), R) : I(ve), $("onInputChange");
    }
    function O() {
      const {
        disabled: T,
        readonly: J,
        disableDecrement: fe,
        decrementButton: q,
        lazyChange: ve,
        step: Pe,
        modelValue: U,
        onDecrement: Q,
        onBeforeChange: te
      } = e;
      if (u?.value || s?.value || T || J || fe || !q || d.value)
        return;
      const pe = new Io(j(U)).minus(new Io(j(Pe))).toString(), Y = S(pe), Z = j(Y);
      k(Q, Z), ve ? k(te, Z, R) : (I(Y), $("onDecrement"));
    }
    function V() {
      const {
        disabled: T,
        readonly: J,
        disableIncrement: fe,
        incrementButton: q,
        lazyChange: ve,
        step: Pe,
        modelValue: U,
        onIncrement: Q,
        onBeforeChange: te
      } = e;
      if (u?.value || s?.value || T || J || fe || !q || c.value)
        return;
      const pe = new Io(j(U)).plus(new Io(j(Pe))).toString(), Y = S(pe), Z = j(Y);
      k(Q, Z), ve ? k(te, Z, R) : (I(Y), $("onIncrement"));
    }
    function D() {
      const { press: T, lazyChange: J } = e;
      !T || J || (h = window.setTimeout(() => {
        A();
      }, cd));
    }
    function M() {
      const { press: T, lazyChange: J } = e;
      !T || J || (m = window.setTimeout(() => {
        z();
      }, cd));
    }
    function W() {
      v && clearTimeout(v), h && clearTimeout(h);
    }
    function N() {
      f && clearTimeout(f), m && clearTimeout(m);
    }
    function z() {
      f = window.setTimeout(() => {
        V(), z();
      }, ud);
    }
    function A() {
      v = window.setTimeout(() => {
        O(), A();
      }, ud);
    }
    function I(T) {
      n.value = T;
      const J = j(T);
      k(e["onUpdate:modelValue"], J);
    }
    function R(T) {
      I(S(String(T))), $("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: s,
      isMax: c,
      isMin: d,
      n: d6,
      classes: f6,
      formatElevation: vn,
      validate: C,
      reset: b,
      resetValidation: l,
      handleChange: B,
      decrement: O,
      increment: V,
      pressDecrement: D,
      pressIncrement: M,
      releaseDecrement: W,
      releaseIncrement: N,
      toSizeUnit: Ee,
      toNumber: j
    };
  }
});
Dm.render = v6;
var si = Dm;
re(si);
le(si, Bm);
const DD = si;
var es = si, Im = 60, Am = Im * 60, Mm = Am * 24, m6 = Mm * 7, kt = 1e3, ul = Im * kt, dd = Am * kt, h6 = Mm * kt, g6 = m6 * kt, Du = "millisecond", lt = "second", st = "minute", ut = "hour", Oo = "day", Vr = "week", eo = "month", Nm = "quarter", zo = "year", ct = "date", b6 = "YYYY-MM-DDTHH:mm:ssZ", fd = "Invalid Date", y6 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w6 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const k6 = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ns = function(n, o, t) {
  var r = String(n);
  return !r || r.length >= o ? n : "" + Array(o + 1 - r.length).join(t) + n;
}, $6 = function(n) {
  var o = -n.utcOffset(), t = Math.abs(o), r = Math.floor(t / 60), a = t % 60;
  return (o <= 0 ? "+" : "-") + ns(r, 2, "0") + ":" + ns(a, 2, "0");
}, C6 = function e(n, o) {
  if (n.date() < o.date()) return -e(o, n);
  var t = (o.year() - n.year()) * 12 + (o.month() - n.month()), r = n.clone().add(t, eo), a = o - r < 0, i = n.clone().add(t + (a ? -1 : 1), eo);
  return +(-(t + (o - r) / (a ? r - i : i - r)) || 0);
}, S6 = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, P6 = function(n) {
  var o = {
    M: eo,
    y: zo,
    w: Vr,
    d: Oo,
    D: ct,
    h: ut,
    m: st,
    s: lt,
    ms: Du,
    Q: Nm
  };
  return o[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, O6 = function(n) {
  return n === void 0;
};
const z6 = {
  s: ns,
  z: $6,
  m: C6,
  a: S6,
  p: P6,
  u: O6
};
var Rt = "en", Zo = {};
Zo[Rt] = k6;
var Iu = function(n) {
  return n instanceof ui;
}, ia = function e(n, o, t) {
  var r;
  if (!n) return Rt;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    Zo[a] && (r = a), o && (Zo[a] = o, r = a);
    var i = n.split("-");
    if (!r && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    Zo[l] = n, r = l;
  }
  return !t && r && (Rt = r), r || !t && Rt;
}, ue = function(n, o) {
  if (Iu(n))
    return n.clone();
  var t = typeof o == "object" ? o : {};
  return t.date = n, t.args = arguments, new ui(t);
}, E6 = function(n, o) {
  return ue(n, {
    locale: o.$L,
    utc: o.$u,
    x: o.$x,
    $offset: o.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, _e = z6;
_e.l = ia;
_e.i = Iu;
_e.w = E6;
var T6 = function(n) {
  var o = n.date, t = n.utc;
  if (o === null) return /* @__PURE__ */ new Date(NaN);
  if (_e.u(o)) return /* @__PURE__ */ new Date();
  if (o instanceof Date) return new Date(o);
  if (typeof o == "string" && !/Z$/i.test(o)) {
    var r = o.match(y6);
    if (r) {
      var a = r[2] - 1 || 0, i = (r[7] || "0").substring(0, 3);
      return t ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
    }
  }
  return new Date(o);
}, ui = /* @__PURE__ */ (function() {
  function e(o) {
    this.$L = ia(o.locale, null, !0), this.parse(o);
  }
  var n = e.prototype;
  return n.parse = function(t) {
    this.$d = T6(t), this.$x = t.x || {}, this.init();
  }, n.init = function() {
    var t = this.$d;
    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
  }, n.$utils = function() {
    return _e;
  }, n.isValid = function() {
    return this.$d.toString() !== fd;
  }, n.isSame = function(t, r) {
    var a = ue(t);
    return this.startOf(r) <= a && a <= this.endOf(r);
  }, n.isAfter = function(t, r) {
    return ue(t) < this.startOf(r);
  }, n.isBefore = function(t, r) {
    return this.endOf(r) < ue(t);
  }, n.$g = function(t, r, a) {
    return _e.u(t) ? this[r] : this.set(a, t);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(t, r) {
    var a = this, i = _e.u(r) ? !0 : r, l = _e.p(t), s = function(C, $) {
      var b = _e.w(a.$u ? Date.UTC(a.$y, $, C) : new Date(a.$y, $, C), a);
      return i ? b : b.endOf(Oo);
    }, u = function(C, $) {
      var b = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return _e.w(a.toDate()[C].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? b : S).slice($)
      ), a);
    }, c = this.$W, d = this.$M, f = this.$D, v = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case zo:
        return i ? s(1, 0) : s(31, 11);
      case eo:
        return i ? s(1, d) : s(0, d + 1);
      case Vr: {
        var m = this.$locale().weekStart || 0, h = (c < m ? c + 7 : c) - m;
        return s(i ? f - h : f + (6 - h), d);
      }
      case Oo:
      case ct:
        return u(v + "Hours", 0);
      case ut:
        return u(v + "Minutes", 1);
      case st:
        return u(v + "Seconds", 2);
      case lt:
        return u(v + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(t) {
    return this.startOf(t, !1);
  }, n.$set = function(t, r) {
    var a, i = _e.p(t), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[Oo] = l + "Date", a[ct] = l + "Date", a[eo] = l + "Month", a[zo] = l + "FullYear", a[ut] = l + "Hours", a[st] = l + "Minutes", a[lt] = l + "Seconds", a[Du] = l + "Milliseconds", a)[i], u = i === Oo ? this.$D + (r - this.$W) : r;
    if (i === eo || i === zo) {
      var c = this.clone().set(ct, 1);
      c.$d[s](u), c.init(), this.$d = c.set(ct, Math.min(this.$D, c.daysInMonth())).$d;
    } else s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(t, r) {
    return this.clone().$set(t, r);
  }, n.get = function(t) {
    return this[_e.p(t)]();
  }, n.add = function(t, r) {
    var a = this, i;
    t = Number(t);
    var l = _e.p(r), s = function(f) {
      var v = ue(a);
      return _e.w(v.date(v.date() + Math.round(f * t)), a);
    };
    if (l === eo)
      return this.set(eo, this.$M + t);
    if (l === zo)
      return this.set(zo, this.$y + t);
    if (l === Oo)
      return s(1);
    if (l === Vr)
      return s(7);
    var u = (i = {}, i[st] = ul, i[ut] = dd, i[lt] = kt, i)[l] || 1, c = this.$d.getTime() + t * u;
    return _e.w(c, this);
  }, n.subtract = function(t, r) {
    return this.add(t * -1, r);
  }, n.format = function(t) {
    var r = this, a = this.$locale();
    if (!this.isValid()) return a.invalidDate || fd;
    var i = t || b6, l = _e.z(this), s = this.$H, u = this.$m, c = this.$M, d = a.weekdays, f = a.months, v = a.meridiem, m = function(b, S, B, O) {
      return b && (b[S] || b(r, i)) || B[S].slice(0, O);
    }, h = function(b) {
      return _e.s(s % 12 || 12, b, "0");
    }, y = v || function($, b, S) {
      var B = $ < 12 ? "AM" : "PM";
      return S ? B.toLowerCase() : B;
    }, C = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: c + 1,
      MM: _e.s(c + 1, 2, "0"),
      MMM: m(a.monthsShort, c, f, 3),
      MMMM: m(f, c),
      D: this.$D,
      DD: _e.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: m(a.weekdaysMin, this.$W, d, 2),
      ddd: m(a.weekdaysShort, this.$W, d, 3),
      dddd: d[this.$W],
      H: String(s),
      HH: _e.s(s, 2, "0"),
      h: h(1),
      hh: h(2),
      a: y(s, u, !0),
      A: y(s, u, !1),
      m: String(u),
      mm: _e.s(u, 2, "0"),
      s: String(this.$s),
      ss: _e.s(this.$s, 2, "0"),
      SSS: _e.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(w6, function($, b) {
      return b || C[$] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(t, r, a) {
    var i, l = _e.p(r), s = ue(t), u = (s.utcOffset() - this.utcOffset()) * ul, c = this - s, d = _e.m(this, s);
    return d = (i = {}, i[zo] = d / 12, i[eo] = d, i[Nm] = d / 3, i[Vr] = (c - u) / g6, i[Oo] = (c - u) / h6, i[ut] = c / dd, i[st] = c / ul, i[lt] = c / kt, i)[l] || c, a ? d : _e.a(d);
  }, n.daysInMonth = function() {
    return this.endOf(eo).$D;
  }, n.$locale = function() {
    return Zo[this.$L];
  }, n.locale = function(t, r) {
    if (!t) return this.$L;
    var a = this.clone(), i = ia(t, r, !0);
    return i && (a.$L = i), a;
  }, n.clone = function() {
    return _e.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
})(), Vm = ui.prototype;
ue.prototype = Vm;
[["$ms", Du], ["$s", lt], ["$m", st], ["$H", ut], ["$W", Oo], ["$M", eo], ["$y", zo], ["$D", ct]].forEach(function(e) {
  Vm[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ue.extend = function(e, n) {
  return e.$i || (e(n, ui, ue), e.$i = !0), ue;
};
ue.locale = ia;
ue.isDayjs = Iu;
ue.unix = function(e) {
  return ue(e * 1e3);
};
ue.en = Zo[Rt];
ue.Ls = Zo;
ue.p = {};
const Rr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], Mt = ["0", "1", "2", "3", "4", "5", "6"], Rm = {
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
}, Fm = (function(e, n) {
  n.prototype.isSameOrAfter = function(o, t) {
    return this.isSame(o, t) || this.isAfter(o, t);
  };
}), Lm = (function(e, n) {
  n.prototype.isSameOrBefore = function(o, t) {
    return this.isSame(o, t) || this.isBefore(o, t);
  };
}), { n: B6 } = ne("date-picker-header");
function D6(e, n) {
  const o = x("var-icon"), t = x("var-button");
  return g(), P(
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
        default: ce(() => [
          G(o, { name: "chevron-left" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class", "disabled"]),
      F(
        "div",
        {
          class: p(e.n("value")),
          onClick: n[1] || (n[1] = (r) => e.$emit("check-panel"))
        },
        [
          G(nn, {
            name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (g(), P(
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
        class: p(e.n("arrow")),
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
const Um = ee({
  name: "PanelHeader",
  components: {
    VarButton: In,
    VarIcon: Qe
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
    const o = w(!1), t = w(0), { t: r } = io(), a = E(() => {
      var l;
      const { date: s, type: u } = e, { previewMonth: c, previewYear: d } = s;
      if (u === "year")
        return d;
      if (u === "month")
        return j(d) + t.value;
      const f = (l = (r || an)("datePickerMonthDict")) == null ? void 0 : l[c].name;
      return (r || an)("lang") === "zh-CN" ? `${d} ${f}` : `${f} ${d}`;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (n("check-date", l), o.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return de(
      () => e.date,
      () => {
        t.value = 0;
      }
    ), {
      n: B6,
      reverse: o,
      showDate: a,
      checkDate: i
    };
  }
});
Um.render = D6;
var Au = Um, I6 = Object.defineProperty, pd = Object.getOwnPropertySymbols, A6 = Object.prototype.hasOwnProperty, M6 = Object.prototype.propertyIsEnumerable, vd = (e, n, o) => n in e ? I6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, N6 = (e, n) => {
  for (var o in n || (n = {}))
    A6.call(n, o) && vd(e, o, n[o]);
  if (pd)
    for (var o of pd(n))
      M6.call(n, o) && vd(e, o, n[o]);
  return e;
};
ue.extend(Lm);
ue.extend(Fm);
const { n: tt, classes: V6 } = ne("day-picker"), { n: $r } = ne("date-picker");
function R6(e, n) {
  const o = x("panel-header"), t = x("var-button");
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      F(
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
          G(nn, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (g(), P("div", { key: e.panelKey }, [
                F(
                  "ul",
                  {
                    class: p(e.n("head"))
                  },
                  [
                    (g(!0), P(
                      Ne,
                      null,
                      Ze(e.sortWeekList, (r) => (g(), P(
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
                F(
                  "ul",
                  {
                    class: p(e.n("body"))
                  },
                  [
                    (g(!0), P(
                      Ne,
                      null,
                      Ze(e.days, (r, a) => (g(), P("li", { key: a }, [
                        G(t, Ke({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation
                        }, { ref_for: !0 }, N6({}, e.buttonProps(r)), {
                          onClick: (i) => e.chooseDay(r, i)
                        }), {
                          default: ce(() => [
                            Ae(
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
const Hm = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: In,
    PanelHeader: Au
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
    const [o, t, r] = e.current.split("-"), a = w([]), i = w(!1), l = w(0), s = w(null), u = on({
      left: !1,
      right: !1
    }), { t: c } = io(), d = E(
      () => e.preview.previewYear === o && e.preview.previewMonth === t
    ), f = E(
      () => e.choose.chooseYear === e.preview.previewYear && e.choose.chooseMonth === e.preview.previewMonth
    ), v = E(() => {
      const D = Mt.findIndex((M) => M === e.componentProps.firstDayOfWeek);
      return D === -1 || D === 0 ? Mt : [...Mt.slice(D), ...Mt.slice(0, D)];
    }), m = (D) => {
      var M, W;
      return (W = (M = (c || an)("datePickerWeekDict")) == null ? void 0 : M[D].abbr) != null ? W : "";
    }, h = (D) => D > 0 ? D : "", y = () => {
      const {
        preview: { previewMonth: D, previewYear: M }
      } = e, W = ue(`${M}-${D}`).daysInMonth(), N = ue(`${M}-${D}-01`).day(), z = v.value.findIndex((A) => A === `${N}`);
      a.value = [...Array(z).fill(-1), ...Array.from(Array(W + 1).keys())].filter((A) => A);
    }, C = () => {
      const {
        preview: { previewYear: D, previewMonth: M },
        componentProps: { max: W, min: N }
      } = e;
      if (W) {
        const z = `${D}-${j(M) + 1}`;
        u.right = !ue(z).isSameOrBefore(ue(W), "month");
      }
      if (N) {
        const z = `${D}-${j(M) - 1}`;
        u.left = !ue(z).isSameOrAfter(ue(N), "month");
      }
    }, $ = (D) => {
      const {
        preview: { previewYear: M, previewMonth: W },
        componentProps: { min: N, max: z }
      } = e;
      let A = !0, I = !0;
      const R = `${M}-${W}-${D}`;
      return z && (A = ue(R).isSameOrBefore(ue(z), "day")), N && (I = ue(R).isSameOrAfter(ue(N), "day")), A && I;
    }, b = (D) => {
      const {
        choose: { chooseDays: M, chooseRangeDay: W },
        componentProps: { range: N }
      } = e;
      if (N) {
        if (!W.length)
          return !1;
        const z = ue(D).isSameOrBefore(ue(W[1]), "day"), A = ue(D).isSameOrAfter(ue(W[0]), "day");
        return z && A;
      }
      return M.includes(D);
    }, S = (D) => {
      if (D < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: tt("button"),
          disabled: !0
        };
      const {
        choose: { chooseDay: M },
        preview: { previewYear: W, previewMonth: N },
        componentProps: { allowedDates: z, color: A, multiple: I, range: R }
      } = e, T = `${W}-${N}-${D}`, J = () => R || I ? b(T) : j(M) === D && f.value, q = $(D) ? z ? !z(T) : !1 : !0, ve = () => q ? !0 : R || I ? !b(T) : !f.value || j(M) !== D, Pe = () => d.value && j(r) === D && e.componentProps.showCurrent ? (R || I || f.value) && q ? !0 : R || I ? !b(T) : f.value ? M !== r : !0 : !1, U = () => q ? "" : Pe() ? A ?? "" : J() ? "" : `${$r()}-color-cover`, Q = U().startsWith($r());
      return {
        text: ve(),
        outline: Pe(),
        textColor: Q ? "" : U(),
        [`${$r()}-color-cover`]: Q,
        class: V6(tt("button"), tt("button--usable"), [q, tt("button--disabled")]),
        disabled: q
      };
    }, B = (D) => {
      i.value = D === "prev", l.value += D === "prev" ? -1 : 1, n("check-preview", "month", D);
    }, O = (D, M) => {
      M.currentTarget.classList.contains(tt("button--disabled")) || n("choose-day", D);
    }, V = (D) => {
      s.value.checkDate(D);
    };
    return yn(() => {
      y(), C();
    }), de(
      () => e.preview,
      () => {
        y(), C();
      }
    ), de(() => [e.componentProps.max, e.componentProps.min], C), {
      n: tt,
      nDate: $r,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: v,
      panelBtnDisabled: u,
      forwardRef: V,
      filterDay: h,
      getDayAbbr: m,
      checkDate: B,
      chooseDay: O,
      buttonProps: S
    };
  }
});
Hm.render = R6;
var F6 = Hm, L6 = Object.defineProperty, md = Object.getOwnPropertySymbols, U6 = Object.prototype.hasOwnProperty, H6 = Object.prototype.propertyIsEnumerable, hd = (e, n, o) => n in e ? L6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, j6 = (e, n) => {
  for (var o in n || (n = {}))
    U6.call(n, o) && hd(e, o, n[o]);
  if (md)
    for (var o of md(n))
      H6.call(n, o) && hd(e, o, n[o]);
  return e;
};
ue.extend(Lm);
ue.extend(Fm);
const { n: Cr, classes: Y6 } = ne("month-picker"), { n: Sr } = ne("date-picker");
function W6(e, n) {
  const o = x("panel-header"), t = x("var-button");
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      F(
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
          G(nn, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ce(() => [
              (g(), P("ul", { key: e.panelKey }, [
                (g(!0), P(
                  Ne,
                  null,
                  Ze(e.MONTH_LIST, (r) => (g(), P("li", { key: r }, [
                    G(t, Ke({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation
                    }, { ref_for: !0 }, j6({}, e.buttonProps(r)), {
                      onClick: (a) => e.chooseMonth(r, a)
                    }), {
                      default: ce(() => [
                        Ae(
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
const jm = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: In,
    PanelHeader: Au
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
    const [o, t] = e.current.split("-"), r = w(!1), a = w(0), i = w(null), l = on({
      left: !1,
      right: !1
    }), { t: s } = io(), u = E(() => e.choose.chooseYear === e.preview.previewYear), c = E(() => e.preview.previewYear === o), d = ($) => {
      var b, S;
      return (S = (b = (s || an)("datePickerMonthDict")) == null ? void 0 : b[$].abbr) != null ? S : "";
    }, f = ($) => {
      const {
        preview: { previewYear: b },
        componentProps: { min: S, max: B }
      } = e;
      let O = !0, V = !0;
      const D = `${b}-${$}`;
      return B && (O = ue(D).isSameOrBefore(ue(B), "month")), S && (V = ue(D).isSameOrAfter(ue(S), "month")), O && V;
    }, v = ($) => {
      const {
        choose: { chooseMonths: b, chooseDays: S, chooseRangeMonth: B },
        componentProps: { type: O, range: V }
      } = e;
      if (V) {
        if (!B.length)
          return !1;
        const D = ue($).isSameOrBefore(ue(B[1]), "month"), M = ue($).isSameOrAfter(ue(B[0]), "month");
        return D && M;
      }
      return O === "month" ? b.includes($) : S.some((D) => D.includes($));
    }, m = ($) => {
      const {
        choose: { chooseMonth: b },
        preview: { previewYear: S },
        componentProps: { allowedDates: B, color: O, multiple: V, range: D }
      } = e, M = `${S}-${$}`, W = () => D || V ? v(M) : b === $ && u.value, z = f($) ? B ? !B(M) : !1 : !0, A = () => z ? !0 : D || V ? !v(M) : !u.value || b !== $, I = () => c.value && t === $ && e.componentProps.showCurrent ? (D || V || u.value) && z ? !0 : D || V ? !v(M) : u.value ? b !== t : !0 : !1, R = () => z ? "" : I() ? O ?? "" : W() ? "" : `${Sr()}-color-cover`, T = R().startsWith(Sr());
      return {
        outline: I(),
        text: A(),
        color: A() ? "" : O,
        textColor: T ? "" : R(),
        [`${Sr()}-color-cover`]: T,
        class: Y6(Cr("button"), [z, Cr("button--disabled")]),
        disabled: z
      };
    }, h = ($, b) => {
      b.currentTarget.classList.contains(Cr("button--disabled")) || n("choose-month", $);
    }, y = ($) => {
      r.value = $ === "prev", a.value += $ === "prev" ? -1 : 1, n("check-preview", "year", $);
    }, C = ($) => {
      i.value.checkDate($);
    };
    return de(
      () => [e.preview.previewYear, e.componentProps.max, e.componentProps.min],
      ([$, b, S]) => {
        b && (l.right = !ue(`${j($) + 1}`).isSameOrBefore(ue(b), "year")), S && (l.left = !ue(`${j($) - 1}`).isSameOrAfter(ue(S), "year"));
      },
      { immediate: !0 }
    ), {
      n: Cr,
      nDate: Sr,
      t: an,
      MONTH_LIST: Rr,
      headerEl: i,
      reverse: r,
      panelKey: a,
      panelBtnDisabled: l,
      forwardRef: C,
      buttonProps: m,
      getMonthAbbr: d,
      chooseMonth: h,
      checkDate: y
    };
  }
});
jm.render = W6;
var K6 = jm;
const Ft = {
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
var gd = (e, n, o) => new Promise((t, r) => {
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
const { name: q6, n: X6, classes: G6 } = ne("sticky");
function Z6(e, n) {
  return g(), P(
    "div",
    {
      ref: "stickyEl",
      class: p(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      style: X({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [
      F(
        "div",
        {
          ref: "wrapperEl",
          class: p(e.n("wrapper")),
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
          H(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const Ym = ee({
  name: q6,
  props: Ft,
  setup(e) {
    const n = w(null), o = w(null), t = w(!1), r = w("0px"), a = w("0px"), i = w("auto"), l = w("auto"), s = w("auto"), u = w("auto"), c = E(() => !e.disabled && e.cssMode), d = E(() => !e.disabled && !e.cssMode && t.value), f = E(() => rn(e.offsetTop));
    let v;
    de(() => e.disabled, $), yn(() => gd(this, null, function* () {
      yield bn(), h(), y();
    })), Pt(C), ao($), We(() => window, "scroll", y);
    function m() {
      const { cssMode: b, disabled: S } = e;
      if (S)
        return;
      let B = 0;
      if (v && v !== window) {
        const { top: N } = tn(v);
        B = N;
      }
      const O = o.value, V = n.value, { top: D, left: M } = tn(V), W = D - B;
      return W <= f.value ? (b || (i.value = `${V.offsetWidth}px`, l.value = `${V.offsetHeight}px`, r.value = `${B + f.value}px`, a.value = `${M}px`, s.value = `${O.offsetWidth}px`, u.value = `${O.offsetHeight}px`, t.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (t.value = !1, {
        offsetTop: W,
        isFixed: !1
      });
    }
    function h() {
      v = Fo(n.value), v !== window && v.addEventListener("scroll", y);
    }
    function y() {
      const b = m();
      b && k(e.onScroll, b.offsetTop, b.isFixed);
    }
    function C() {
      !v || v === window || v.removeEventListener("scroll", y);
    }
    function $() {
      return gd(this, null, function* () {
        t.value = !1, yield ho(), m();
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
      n: X6,
      classes: G6,
      resize: $,
      toNumber: j
    };
  }
});
Ym.render = Z6;
var ci = Ym;
re(ci);
le(ci, Ft);
const ID = ci;
var $t = ci, J6 = Object.defineProperty, bd = Object.getOwnPropertySymbols, Q6 = Object.prototype.hasOwnProperty, x6 = Object.prototype.propertyIsEnumerable, yd = (e, n, o) => n in e ? J6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, _6 = (e, n) => {
  for (var o in n || (n = {}))
    Q6.call(n, o) && yd(e, o, n[o]);
  if (bd)
    for (var o of bd(n))
      x6.call(n, o) && yd(e, o, n[o]);
  return e;
};
const { n: Pr, classes: wd } = ne("year-picker"), { n: Or } = ne("date-picker");
function eP(e, n) {
  const o = x("panel-header"), t = x("var-sticky"), r = x("var-button");
  return g(), P("div", null, [
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
    G(nn, {
      name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
    }, {
      default: ce(() => [
        (g(), P(
          "ul",
          {
            ref: "panel",
            key: e.panelKey,
            class: p(e.n())
          },
          [
            (g(!0), P(
              Ne,
              null,
              Ze(e.yearList, (a) => (g(), P("li", { key: a }, [
                G(r, Ke({
                  type: "primary",
                  "var-year-picker-cover": "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, { ref_for: !0 }, _6({}, e.buttonProps(`${a}`)), {
                  onClick: (i) => e.chooseYear(a, i)
                }), {
                  default: ce(() => [
                    Ae(
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
const Wm = ee({
  name: "YearPickerPanel",
  components: {
    VarButton: In,
    VarSticky: $t,
    PanelHeader: Au
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
    const [o] = e.current.split("-"), t = w(), r = w(null), a = w(!1), i = w(0), l = w(0), s = on({
      left: !1,
      right: !1
    }), u = E(() => {
      if (!e.preview)
        return [];
      const C = Math.floor(j(e.preview) / 100 + l.value) * 100;
      return Array.from(Array(100), ($, b) => Math.max(0, C) + b);
    }), c = (C) => {
      const {
        choose: { chooseMonths: $, chooseDays: b, chooseYears: S, chooseRangeYear: B },
        componentProps: { type: O, range: V }
      } = e;
      if (V) {
        if (!B.length)
          return !1;
        const D = ue(C).isSameOrBefore(ue(B[1]), "year"), M = ue(C).isSameOrAfter(ue(B[0]), "year");
        return D && M;
      }
      return O === "year" ? S.includes(C) : O === "month" ? $.some((D) => D.includes(C)) : b.some((D) => D.includes(C));
    }, d = (C) => {
      const {
        componentProps: { min: $, max: b }
      } = e, S = b ? ue(C).isSameOrBefore(ue(b), "year") : !0, B = $ ? ue(C).isSameOrAfter(ue($), "year") : !0;
      return S && B;
    }, f = (C) => {
      const {
        choose: { chooseYear: $ },
        componentProps: { allowedDates: b, color: S, multiple: B, range: O }
      } = e, V = () => O || B ? c(C) : $ === C, M = d(C) ? b ? !b(C) : !1 : !0, W = () => M ? !0 : O || B ? !c(C) : $ !== C, N = () => o === C && e.componentProps.showCurrent ? (O || B) && M ? !0 : O || B ? !c(C) : $ !== o : !1, z = () => M ? "" : N() ? S ?? "" : V() ? "" : `${Or()}-color-cover`, A = z().startsWith(Or());
      return {
        outline: N(),
        text: W(),
        color: W() ? "" : S,
        textColor: A ? "" : z(),
        [`${Or()}-color-cover`]: A,
        class: wd(Pr("button"), [M, Pr("button--disabled")]),
        disabled: M
      };
    }, v = (C, $) => {
      $.currentTarget.classList.contains(Pr("button--disabled")) || n("choose-year", C);
    }, m = () => {
      var C;
      const $ = (C = t.value.querySelector(".var-button--primary")) != null ? C : t.value.querySelector(".var-button--outline");
      $?.scrollIntoView({
        block: "center"
      });
    }, h = (C) => {
      const $ = C === "prev";
      a.value = $, i.value += $ ? -1 : 1, l.value += $ ? -1 : 1;
    }, y = (C) => {
      r.value.checkDate(C);
    };
    return yn(m), de(
      () => e.preview,
      () => {
        l.value = 0;
      }
    ), de(
      () => [u.value, e.componentProps.max, e.componentProps.min],
      (C) => {
        const [$, b, S] = C;
        b && (s.right = !ue(`${j($[$.length - 1])}`).isSameOrBefore(ue(b), "year")), S && (s.left = !ue(`${j($[0])}`).isSameOrAfter(ue(S), "year")), j($[0] <= 0) && (s.left = !1);
      },
      {
        immediate: !0
      }
    ), {
      n: Pr,
      classes: wd,
      buttonProps: f,
      panel: t,
      headerEl: r,
      yearList: u,
      reverse: a,
      panelKey: i,
      panelBtnDisabled: s,
      nDate: Or,
      checkDate: h,
      chooseYear: v,
      forwardRef: y,
      toNumber: j
    };
  }
});
Wm.render = eP;
var nP = Wm, oP = (e, n, o) => new Promise((t, r) => {
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
const { name: tP, n: rP, classes: aP } = ne("date-picker");
function iP(e, n) {
  var o;
  const t = x("year-picker-panel"), r = x("month-picker-panel"), a = x("day-picker-panel");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      F(
        "div",
        {
          class: p(e.n("title")),
          style: X({ background: e.titleColor || e.color })
        },
        [
          F(
            "div",
            {
              class: p(e.n("title-select"))
            },
            [
              F(
                "div",
                {
                  class: p(e.n("title-hint"))
                },
                ie((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("datePickerHint")),
                3
                /* TEXT, CLASS */
              ),
              e.type !== "year" ? (g(), P(
                "div",
                {
                  key: 0,
                  class: p(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
                  onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
                },
                [
                  H(e.$slots, "year", { year: e.chooseYear }, () => [
                    Ae(
                      ie(e.chooseYear),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )) : K("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          F(
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
              G(nn, {
                name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey`
              }, {
                default: ce(() => [
                  e.type === "year" ? (g(), P("div", {
                    key: `${e.chooseYear}`
                  }, [
                    e.range ? H(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeYear
                    }, () => [
                      Ae(
                        ie(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? H(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseYears
                    }, () => [
                      Ae(
                        ie(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : H(e.$slots, "year", {
                      key: 2,
                      year: e.chooseYear
                    }, () => [
                      Ae(
                        ie(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : e.type === "month" ? (g(), P("div", {
                    key: `${e.chooseYear}${e.chooseMonth}`
                  }, [
                    e.range ? H(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeMonth
                    }, () => [
                      Ae(
                        ie(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? H(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseMonths
                    }, () => [
                      Ae(
                        ie(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : H(e.$slots, "month", {
                      key: 2,
                      month: e.chooseMonth,
                      year: e.chooseYear
                    }, () => [
                      Ae(
                        ie(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : (g(), P("div", {
                    key: `${e.chooseYear}${e.chooseMonth}${e.chooseDay}`
                  }, [
                    e.range ? H(e.$slots, "range", {
                      key: 0,
                      choose: e.formatRange
                    }, () => [
                      Ae(
                        ie(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? H(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseDays
                    }, () => [
                      Ae(
                        ie(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : H(e.$slots, "date", Go(Ke({ key: 2 }, e.slotProps)), () => [
                      Ae(
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
      F(
        "div",
        {
          class: p(e.n("body")),
          onTouchstart: n[2] || (n[2] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
          onTouchmove: n[3] || (n[3] = (...i) => e.handleTouchmove && e.handleTouchmove(...i)),
          onTouchend: n[4] || (n[4] = (...i) => e.handleTouchend && e.handleTouchend(...i))
        },
        [
          G(nn, {
            name: `${e.n()}-panel-fade`
          }, {
            default: ce(() => [
              e.getPanelType === "year" ? (g(), ye(t, {
                key: 0,
                ref: "yearPanelEl",
                choose: e.getChoose,
                current: e.currentDate,
                "component-props": e.componentProps,
                preview: e.previewYear,
                onChooseYear: e.getChooseYear
              }, null, 8, ["choose", "current", "component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (g(), ye(r, {
                key: 1,
                ref: "monthPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "click-year": () => e.clickEl("year"),
                "component-props": e.componentProps,
                onChooseMonth: e.getChooseMonth,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (g(), ye(a, {
                key: 2,
                ref: "dayPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "component-props": e.componentProps,
                "click-month": () => e.clickEl("month"),
                onChooseDay: e.getChooseDay,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : K("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        34
        /* CLASS, NEED_HYDRATION */
      ),
      e.$slots.actions ? (g(), P(
        "div",
        {
          key: 0,
          class: p(e.n("actions"))
        },
        [
          H(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : K("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Km = ee({
  name: tP,
  components: {
    MonthPickerPanel: K6,
    YearPickerPanel: nP,
    DayPickerPanel: F6
  },
  props: Rm,
  setup(e) {
    const { t: n } = io(), o = ue().format("YYYY-MM-D"), [t, r] = o.split("-"), a = Rr.find((ae) => ae === r), i = w(!1), l = w(!1), s = w(!0), u = w(), c = w(), d = w(), f = w(a), v = w(t), m = w(!1), h = w([]), y = w([]), C = w([]), $ = w([]), b = w([]), S = w([]), B = w(null), O = w(null), V = w(null), D = E(() => ({
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
    })), M = E(() => ({
      chooseMonth: u.value,
      chooseYear: c.value,
      chooseDay: d.value,
      chooseYears: h.value,
      chooseMonths: y.value,
      chooseDays: C.value,
      chooseRangeYear: $.value,
      chooseRangeMonth: b.value,
      chooseRangeDay: S.value
    })), W = E(() => ({
      previewMonth: f.value,
      previewYear: v.value
    })), N = E(() => {
      var ae;
      const { multiple: ke, range: Oe } = e;
      return Oe ? $.value.length ? `${$.value[0]} ~ ${$.value[1]}` : "" : ke ? `${h.value.length}${(n || an)("datePickerSelected")}` : (ae = c.value) != null ? ae : "";
    }), z = E(() => {
      var ae, ke;
      const { multiple: Oe, range: Ue } = e;
      if (Ue)
        return b.value.length ? `${b.value[0]} ~ ${b.value[1]}` : "";
      let He = "";
      return u.value && (He = (ke = (ae = (n || an)("datePickerMonthDict")) == null ? void 0 : ae[u.value].name) != null ? ke : ""), Oe ? `${y.value.length}${(n || an)("datePickerSelected")}` : He;
    }), A = E(() => {
      var ae, ke, Oe, Ue;
      const { multiple: He, range: Ce } = e;
      if (Ce) {
        const zn = S.value.map((Dt) => ue(Dt).format("YYYY-MM-DD"));
        return zn.length ? `${zn[0]} ~ ${zn[1]}` : "";
      }
      if (He)
        return `${C.value.length}${(n || an)("datePickerSelected")}`;
      if (!c.value || !u.value || !d.value)
        return "";
      const Ie = ue(`${c.value}-${u.value}-${d.value}`).day(), De = Mt.find((zn) => zn === `${Ie}`), $n = (ke = (ae = (n || an)("datePickerWeekDict")) == null ? void 0 : ae[De].name) != null ? ke : "", Xo = (Ue = (Oe = (n || an)("datePickerMonthDict")) == null ? void 0 : Oe[u.value].name) != null ? Ue : "", $o = et(d.value, 2, "0");
      return (n || an)("lang") === "zh-CN" ? `${u.value}-${$o} ${$n.slice(0, 3)}` : `${$n.slice(0, 3)}, ${Xo.slice(0, 3)} ${d.value}`;
    }), I = E(() => e.type === "year" || i.value ? "year" : e.type === "month" || l.value ? "month" : e.type === "date" ? "date" : ""), R = E(() => !e.touchable || !I.value), T = E(() => {
      var ae, ke;
      const Oe = ue(`${c.value}-${u.value}-${d.value}`).day(), Ue = d.value ? et(d.value, 2, "0") : "";
      return {
        week: `${Oe}`,
        year: (ae = c.value) != null ? ae : "",
        month: (ke = u.value) != null ? ke : "",
        date: Ue
      };
    }), J = E(
      () => M.value.chooseRangeDay.map((ae) => ue(ae).format("YYYY-MM-DD"))
    ), fe = E(() => c.value === v.value), q = E(() => u.value === f.value);
    let ve = 0, Pe = 0, U = "", Q;
    de(
      () => e.modelValue,
      (ae) => {
        if (!(!qe() || oe(ae)))
          if (e.range) {
            if (!Ye(ae))
              return;
            s.value = ae.length !== 1, se(ae, e.type);
          } else if (e.multiple) {
            if (!Ye(ae))
              return;
            we(ae, e.type);
          } else
            Be(ae);
      },
      { immediate: !0 }
    ), de(I, xe);
    function te(ae) {
      ae === "year" ? i.value = !0 : ae === "month" ? l.value = !0 : (i.value = !1, l.value = !1);
    }
    function pe(ae) {
      if (R.value)
        return;
      const { clientX: ke, clientY: Oe } = ae.touches[0];
      ve = ke, Pe = Oe;
    }
    function Y(ae, ke) {
      return ae >= ke && ae > 20 ? "x" : "y";
    }
    function Z(ae) {
      if (R.value)
        return;
      const { clientX: ke, clientY: Oe } = ae.touches[0], Ue = ke - ve, He = Oe - Pe;
      Q = Y(Math.abs(Ue), Math.abs(He)), U = Ue > 0 ? "prev" : "next";
    }
    function $e() {
      return oP(this, null, function* () {
        if (R.value || Q !== "x")
          return;
        const ae = I.value === "year" ? B : I.value === "month" ? O : V;
        yield bn(), ae.value.forwardRef(U), xe();
      });
    }
    function Ve(ae, ke) {
      const Oe = ke === "year" ? $ : ke === "month" ? b : S;
      if (Oe.value = s.value ? [ae, ae] : [Oe.value[0], ae], s.value = !s.value, s.value) {
        const He = ue(Oe.value[0]).isAfter(Oe.value[1]) ? [Oe.value[1], Oe.value[0]] : [...Oe.value];
        k(e["onUpdate:modelValue"], He), k(e.onChange, He);
      }
    }
    function Ge(ae, ke) {
      const Oe = ke === "year" ? h : ke === "month" ? y : C, Ue = ke === "year" ? "YYYY" : ke === "month" ? "YYYY-MM" : "YYYY-MM-DD", He = Oe.value.map((Ie) => ue(Ie).format(Ue)), Ce = He.findIndex((Ie) => Ie === ae);
      Ce === -1 ? He.push(ae) : He.splice(Ce, 1), k(e["onUpdate:modelValue"], He), k(e.onChange, He);
    }
    function Le(ae, ke) {
      return !c.value || !u.value ? !1 : fe.value ? ae === "year" ? ke < j(c.value) : ae === "month" ? ke < u.value : q.value ? ke < j(d.value) : u.value > f.value : c.value > v.value;
    }
    function fn(ae) {
      const { readonly: ke, range: Oe, multiple: Ue, onChange: He, "onUpdate:modelValue": Ce } = e;
      if (ae < 0 || ke)
        return;
      m.value = Le("day", ae);
      const Ie = `${v.value}-${f.value}-${ae}`, De = ue(Ie).format("YYYY-MM-DD");
      Oe ? Ve(De, "day") : Ue ? Ge(De, "day") : (k(Ce, De), k(He, De));
    }
    function un(ae) {
      const { type: ke, readonly: Oe, range: Ue, multiple: He, onChange: Ce, onPreview: Ie, "onUpdate:modelValue": De } = e;
      if (m.value = Le("month", ae), ke === "month" && !Oe) {
        const $n = `${v.value}-${ae}`;
        Ue ? Ve($n, "month") : He ? Ge($n, "month") : (k(De, $n), k(Ce, $n));
      } else
        f.value = ae, k(
          Ie,
          j(v.value),
          j(f.value),
          ke === "date" ? j(d.value) : void 0
        );
      l.value = !1;
    }
    function An(ae) {
      const { type: ke, readonly: Oe, range: Ue, multiple: He, onChange: Ce, onPreview: Ie, "onUpdate:modelValue": De } = e;
      m.value = Le("year", ae), ke === "year" && !Oe ? Ue ? Ve(`${ae}`, "year") : He ? Ge(`${ae}`, "year") : (k(De, `${ae}`), k(Ce, `${ae}`)) : (v.value = `${ae}`, k(
        Ie,
        j(v.value),
        j(f.value),
        ke === "date" ? j(d.value) : void 0
      )), i.value = !1;
    }
    function me(ae, ke) {
      const Oe = ke === "prev" ? -1 : 1;
      if (ae === "year")
        v.value = `${j(v.value) + Oe}`;
      else {
        let Ue = j(f.value) + Oe;
        Ue < 1 && (v.value = `${j(v.value) - 1}`, Ue = 12), Ue > 12 && (v.value = `${j(v.value) + 1}`, Ue = 1), f.value = Rr.find((He) => j(He) === Ue);
      }
      k(
        e.onPreview,
        j(v.value),
        j(f.value),
        e.type === "date" ? j(d.value) : void 0
      );
    }
    function qe() {
      return (e.multiple || e.range) && !Ye(e.modelValue) ? (dt("DatePicker", 'type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ye(e.modelValue) ? (dt("DatePicker", 'type of prop "modelValue" should be a String'), !1) : !0;
    }
    function oe(ae) {
      return Ye(ae) ? !1 : ae === "Invalid Date" ? (dt("DatePicker", '"modelValue" is an Invalid Date'), !0) : !1;
    }
    function se(ae, ke) {
      const Oe = ke === "year" ? $ : ke === "month" ? b : S, Ue = ke === "year" ? "YYYY" : ke === "month" ? "YYYY-MM" : "YYYY-MM-D", He = ae.map((De) => ue(De).format(Ue)).slice(0, 2);
      if (Oe.value.some((De) => oe(De)))
        return;
      Oe.value = He;
      const Ie = ue(Oe.value[0]).isAfter(Oe.value[1]);
      Oe.value.length === 2 && Ie && (Oe.value = [Oe.value[1], Oe.value[0]]);
    }
    function we(ae, ke) {
      const Oe = ke === "year" ? h : ke === "month" ? y : C, Ue = ke === "year" ? "YYYY" : ke === "month" ? "YYYY-MM" : "YYYY-MM-D", He = Array.from(new Set(ae.map((Ce) => ue(Ce).format(Ue))));
      Oe.value = He.filter((Ce) => Ce !== "Invalid Date");
    }
    function Be(ae) {
      const Oe = (ae ? ue(ae) : ue()).format("YYYY-MM-D");
      if (oe(Oe))
        return;
      const [Ue, He, Ce] = Oe.split("-"), Ie = Rr.find((De) => De === He);
      u.value = Ie, c.value = Ue, d.value = Ce, f.value = Ie, v.value = Ue;
    }
    function xe() {
      Pe = 0, ve = 0, U = "", Q = void 0;
    }
    return {
      yearPanelEl: B,
      monthPanelEl: O,
      dayPanelEl: V,
      reverse: m,
      currentDate: o,
      chooseMonth: u,
      chooseYear: c,
      chooseDay: d,
      previewYear: v,
      isYearPanel: i,
      isMonthPanel: l,
      getMonthTitle: z,
      getDateTitle: A,
      getYearTitle: N,
      getPanelType: I,
      getChoose: M,
      getPreview: W,
      componentProps: D,
      slotProps: T,
      formatRange: J,
      pt: n,
      t: an,
      n: rP,
      classes: aP,
      clickEl: te,
      handleTouchstart: pe,
      handleTouchmove: Z,
      handleTouchend: $e,
      getChooseDay: fn,
      getChooseMonth: un,
      getChooseYear: An,
      checkPreview: me,
      formatElevation: vn
    };
  }
});
Km.render = iP;
var di = Km;
re(di);
le(di, Rm);
const AD = di;
var os = di, lP = Object.defineProperty, kd = Object.getOwnPropertySymbols, sP = Object.prototype.hasOwnProperty, uP = Object.prototype.propertyIsEnumerable, $d = (e, n, o) => n in e ? lP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, cP = (e, n) => {
  for (var o in n || (n = {}))
    sP.call(n, o) && $d(e, o, n[o]);
  if (kd)
    for (var o of kd(n))
      uP.call(n, o) && $d(e, o, n[o]);
  return e;
};
const qm = cP({
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
  confirmButtonLoading: Boolean,
  cancelButtonLoading: Boolean,
  confirmButtonDisabled: Boolean,
  cancelButtonDisabled: Boolean,
  dialogClass: String,
  dialogStyle: Object,
  onBeforeClose: L(),
  onConfirm: L(),
  onCancel: L(),
  "onUpdate:show": L()
}, Me(Et, [
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
var dP = Object.defineProperty, Cd = Object.getOwnPropertySymbols, fP = Object.prototype.hasOwnProperty, pP = Object.prototype.propertyIsEnumerable, Sd = (e, n, o) => n in e ? dP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, vP = (e, n) => {
  for (var o in n || (n = {}))
    fP.call(n, o) && Sd(e, o, n[o]);
  if (Cd)
    for (var o of Cd(n))
      pP.call(n, o) && Sd(e, o, n[o]);
  return e;
};
const { name: mP, n: hP, classes: gP } = ne("dialog");
function bP(e, n) {
  const o = x("var-button"), t = x("var-popup");
  return g(), ye(t, {
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
      F(
        "div",
        Ke({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: vP({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          F(
            "div",
            {
              class: p(e.n("title"))
            },
            [
              H(e.$slots, "title", {}, () => {
                var r;
                return [
                  Ae(
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
          F(
            "div",
            {
              class: p(e.n("message")),
              style: X({ textAlign: e.messageAlign })
            },
            [
              H(e.$slots, "default", {}, () => [
                Ae(
                  ie(e.message),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          ),
          H(e.$slots, "actions", {
            slotClass: e.n("actions"),
            cancel: e.cancel,
            confirm: e.confirm
          }, () => [
            F(
              "div",
              {
                class: p(e.n("actions"))
              },
              [
                e.cancelButton ? (g(), ye(o, {
                  key: 0,
                  class: p(e.classes(e.n("button"), e.n("cancel-button"))),
                  "var-dialog-cover": "",
                  text: "",
                  "text-color": e.cancelButtonTextColor,
                  color: e.cancelButtonColor,
                  loading: e.cancelButtonLoading,
                  disabled: e.cancelButtonDisabled,
                  onClick: e.cancel
                }, {
                  default: ce(() => {
                    var r;
                    return [
                      Ae(
                        ie((r = e.cancelButtonText) != null ? r : (e.pt ? e.pt : e.t)("dialogCancelButtonText")),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "text-color", "color", "loading", "disabled", "onClick"])) : K("v-if", !0),
                e.confirmButton ? (g(), ye(o, {
                  key: 1,
                  class: p(e.classes(e.n("button"), e.n("confirm-button"))),
                  "var-dialog-cover": "",
                  text: "",
                  "text-color": e.confirmButtonTextColor,
                  color: e.confirmButtonColor,
                  loading: e.confirmButtonLoading,
                  disabled: e.confirmButtonDisabled,
                  onClick: e.confirm
                }, {
                  default: ce(() => {
                    var r;
                    return [
                      Ae(
                        ie((r = e.confirmButtonText) != null ? r : (e.pt ? e.pt : e.t)("dialogConfirmButtonText")),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "text-color", "color", "loading", "disabled", "onClick"])) : K("v-if", !0)
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
const Xm = ee({
  name: mP,
  components: {
    VarPopup: Ro,
    VarButton: In
  },
  inheritAttrs: !1,
  props: qm,
  setup(e) {
    const { t: n } = io(), o = w(!1), t = w(!1), r = Pn(e, "confirmButtonLoading"), a = Pn(e, "cancelButtonLoading"), i = Pn(e, "confirmButtonDisabled"), l = Pn(e, "cancelButtonDisabled"), s = {
      confirmButtonLoading: r,
      cancelButtonLoading: a,
      confirmButtonDisabled: i,
      cancelButtonDisabled: l
    };
    de(
      () => e.show,
      (m) => {
        o.value = m;
      },
      { immediate: !0 }
    ), de(
      () => e.closeOnClickOverlay,
      (m) => {
        if (e.onBeforeClose != null) {
          t.value = !1;
          return;
        }
        t.value = m;
      },
      { immediate: !0 }
    );
    function u() {
      return k(e["onUpdate:show"], !1);
    }
    function c() {
      const { closeOnClickOverlay: m, onClickOverlay: h, onBeforeClose: y } = e;
      if (k(h), !!m) {
        if (y != null) {
          k(y, "close", u, s);
          return;
        }
        k(e["onUpdate:show"], !1);
      }
    }
    function d() {
      const { onBeforeClose: m, onConfirm: h } = e;
      if (k(h), m != null) {
        k(m, "confirm", u, s);
        return;
      }
      k(e["onUpdate:show"], !1);
    }
    function f() {
      const { onBeforeClose: m, onCancel: h } = e;
      if (k(h), m != null) {
        k(m, "cancel", u, s);
        return;
      }
      k(e["onUpdate:show"], !1);
    }
    function v() {
      k(e.onKeyEscape), e.closeOnKeyEscape && f();
    }
    return {
      popupShow: o,
      popupCloseOnClickOverlay: t,
      confirmButtonLoading: r,
      cancelButtonLoading: a,
      confirmButtonDisabled: i,
      cancelButtonDisabled: l,
      pt: n,
      t: an,
      n: hP,
      classes: gP,
      handleClickOverlay: c,
      confirm: d,
      cancel: f,
      toSizeUnit: Ee,
      handleKeyEscape: v
    };
  }
});
Xm.render = bP;
var mr = Xm, yP = Object.defineProperty, wP = Object.defineProperties, kP = Object.getOwnPropertyDescriptors, Pd = Object.getOwnPropertySymbols, $P = Object.prototype.hasOwnProperty, CP = Object.prototype.propertyIsEnumerable, Od = (e, n, o) => n in e ? yP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, cl = (e, n) => {
  for (var o in n || (n = {}))
    $P.call(n, o) && Od(e, o, n[o]);
  if (Pd)
    for (var o of Pd(n))
      CP.call(n, o) && Od(e, o, n[o]);
  return e;
}, SP = (e, n) => wP(e, kP(n));
let To, la = {};
function PP(e = {}) {
  return dn(e) ? SP(cl({}, la), { message: e }) : cl(cl({}, la), e);
}
function Ko(e) {
  return ro() ? new Promise((n) => {
    Ko.close();
    const o = PP(e), t = on(o);
    t.teleport = "body", To = t;
    const { unmountInstance: r } = zt(mr, t, {
      onConfirm: () => {
        k(t.onConfirm), n("confirm");
      },
      onCancel: () => {
        k(t.onCancel), n("cancel");
      },
      onClose: () => {
        k(t.onClose), n("close");
      },
      onClosed: () => {
        k(t.onClosed), r(), To === t && (To = null);
      },
      onRouteChange: () => {
        r(), To === t && (To = null);
      },
      "onUpdate:show": (a) => {
        t.show = a;
      }
    });
    t.show = !0;
  }) : Promise.resolve();
}
Ko.setDefaultOptions = function(e) {
  la = e;
};
Ko.resetDefaultOptions = function() {
  la = {};
};
Ko.close = function() {
  if (To != null) {
    const e = To;
    To = null, je().then(() => {
      e.show = !1;
    });
  }
};
Ko.Component = mr;
re(mr);
re(mr, Ko);
le(Ko, qm);
const MD = mr;
var ts = Ko;
const Gm = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: OP, n: zP, classes: EP } = ne("divider");
function TP(e, n) {
  return g(), P(
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
      style: X(e.style),
      role: "separator"
    },
    [
      e.vertical ? K("v-if", !0) : H(e.$slots, "default", { key: 0 }, () => [
        e.description ? (g(), P(
          "span",
          {
            key: 0,
            class: p(e.n("text"))
          },
          ie(e.description),
          3
          /* TEXT, CLASS */
        )) : K("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const Zm = ee({
  name: OP,
  props: Gm,
  setup(e, { slots: n }) {
    const o = w(!1), t = E(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = E(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (ir(i) || l)
        return { margin: s };
      const u = j(i), c = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${Ee(c)})`,
        left: u > 0 ? Ee(c) : Ee(0)
      };
    });
    yn(a), tr(a);
    function a() {
      const { description: i, vertical: l } = e;
      o.value = (n.default || i != null) && !l;
    }
    return {
      n: zP,
      classes: EP,
      withText: o,
      style: r,
      withPresetInset: t
    };
  }
});
Zm.render = TP;
var fi = Zm;
re(fi);
le(fi, Gm);
const ND = fi;
var rs = fi;
const Jm = {
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
var BP = Object.defineProperty, DP = Object.defineProperties, IP = Object.getOwnPropertyDescriptors, zd = Object.getOwnPropertySymbols, AP = Object.prototype.hasOwnProperty, MP = Object.prototype.propertyIsEnumerable, Ed = (e, n, o) => n in e ? BP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Td = (e, n) => {
  for (var o in n || (n = {}))
    AP.call(n, o) && Ed(e, o, n[o]);
  if (zd)
    for (var o of zd(n))
      MP.call(n, o) && Ed(e, o, n[o]);
  return e;
}, Bd = (e, n) => DP(e, IP(n));
const { name: NP, n: VP, classes: RP } = ne("drag");
function FP(e, n) {
  return g(), ye(co, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    F(
      "div",
      Ke({
        ref: "drag",
        class: e.classes(e.n(), e.n("$--box"), [e.enableTransition, e.n("--transition")]),
        style: {
          "z-index": e.zIndex
        }
      }, e.getAttrs(), {
        onTouchstart: n[0] || (n[0] = (...o) => e.handleTouchstart && e.handleTouchstart(...o)),
        onTouchmove: n[1] || (n[1] = (...o) => e.handleTouchmove && e.handleTouchmove(...o)),
        onTouchend: n[2] || (n[2] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
        onTouchcancel: n[3] || (n[3] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
        onClick: n[4] || (n[4] = (...o) => e.handleClick && e.handleClick(...o))
      }),
      [
        H(e.$slots, "default")
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["to", "disabled"]);
}
const Qm = ee({
  name: NP,
  inheritAttrs: !1,
  props: Jm,
  setup(e, { attrs: n }) {
    const o = w(null), t = w(0), r = w(0), a = w(!1), i = w(!1), { touching: l, dragging: s, moveX: u, moveY: c, startTouch: d, moveTouch: f, endTouch: v, resetTouch: m } = Ot(), { disabled: h } = ot(), y = on({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    de(() => e.boundary, W), ao(z), yn(() => {
      W(), z();
    });
    function C(I) {
      e.disabled || (d(I), B());
    }
    function $(I) {
      !l.value || e.disabled || (f(I), Re(I), i.value = !1, a.value = !0, e.direction.includes("x") && (t.value += u.value), e.direction.includes("y") && (r.value += c.value), M());
    }
    function b() {
      e.disabled || (v(), i.value = !0, D());
    }
    function S(I) {
      s.value || k(e.onClick, I);
    }
    function B() {
      const { left: I, top: R } = O();
      t.value = I, r.value = R;
    }
    function O() {
      const I = tn(o.value), R = tn(window), T = I.top - R.top, J = R.bottom - I.bottom, fe = I.left - R.left, q = R.right - I.right, { width: ve, height: Pe } = I, { width: U, height: Q } = R;
      return {
        top: T,
        bottom: J,
        left: fe,
        right: q,
        width: ve,
        height: Pe,
        halfWidth: ve / 2,
        halfHeight: Pe / 2,
        windowWidth: U,
        windowHeight: Q
      };
    }
    function V() {
      const I = O(), R = y.left, T = I.windowWidth - y.right - I.width, J = y.top, fe = I.windowHeight - y.bottom - I.height;
      return {
        minX: R,
        minY: J,
        // fallback the drag element overflows boundary
        maxX: R < T ? T : R,
        maxY: J < fe ? fe : J
      };
    }
    function D() {
      if (e.attraction == null)
        return;
      const { halfWidth: I, halfHeight: R, top: T, bottom: J, left: fe, right: q } = O(), { minX: ve, minY: Pe, maxX: U, maxY: Q } = V(), te = fe + I - y.left, pe = q + I - y.right, Y = T + R - y.top, Z = J + R - y.bottom, $e = te <= pe, Ve = Y <= Z;
      e.attraction.includes("x") && (t.value = $e ? ve : U), e.attraction.includes("y") && (r.value = Ve ? Pe : Q);
    }
    function M() {
      const { minX: I, minY: R, maxX: T, maxY: J } = V();
      t.value = Cn(t.value, I, T), r.value = Cn(r.value, R, J);
    }
    function W() {
      const { top: I = 0, bottom: R = 0, left: T = 0, right: J = 0 } = e.boundary;
      y.top = rn(I), y.bottom = rn(R), y.left = rn(T), y.right = rn(J);
    }
    function N() {
      var I;
      const R = (I = n.style) != null ? I : {};
      return Bd(Td({}, n), {
        style: Bd(Td({}, R), {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: a.value ? 0 : R.top,
          left: a.value ? 0 : R.left,
          right: a.value ? "auto" : R.right,
          bottom: a.value ? "auto" : R.bottom,
          transform: a.value ? `translate(${t.value}px, ${r.value}px)` : R.transform
        })
      });
    }
    function z() {
      a.value && (B(), M());
    }
    function A() {
      m(), i.value = !1, a.value = !1, t.value = 0, r.value = 0;
    }
    return {
      drag: o,
      x: t,
      y: r,
      enableTransition: i,
      dragging: s,
      teleportDisabled: h,
      n: VP,
      classes: RP,
      getAttrs: N,
      handleTouchstart: C,
      handleTouchmove: $,
      handleTouchend: b,
      handleClick: S,
      resize: z,
      reset: A
    };
  }
});
Qm.render = FP;
var pi = Qm;
re(pi);
le(pi, Jm);
const VD = pi;
var sa = pi;
const xm = {
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
}, { name: LP, n: UP, classes: HP } = ne("tooltip");
function jP(e, n) {
  return g(), P(
    "div",
    {
      ref: "host",
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      H(e.$slots, "default"),
      (g(), ye(co, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        G(nn, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: ce(() => [
            Fe(F(
              "div",
              {
                ref: "popover",
                class: p(e.classes(e.n("tooltip"), e.n("$--box"))),
                style: X({ zIndex: e.zIndex }),
                onClick: n[0] || (n[0] = Un(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                F(
                  "div",
                  {
                    style: X({
                      background: e.color,
                      color: e.textColor,
                      width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.referenceSize.width)) : void 0
                    }),
                    class: p(e.classes(e.n("content-container"), e.n(`--${e.type}`))),
                    role: "tooltip"
                  },
                  [
                    H(e.$slots, "content", {}, () => [
                      Ae(
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
              [xn, e.show]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["name", "onAfterEnter", "onAfterLeave"])
      ], 8, ["to", "disabled"]))
    ],
    2
    /* CLASS */
  );
}
const _m = ee({
  name: LP,
  props: xm,
  setup(e) {
    const { disabled: n } = ot(), {
      popover: o,
      host: t,
      referenceSize: r,
      show: a,
      zIndex: i,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: s,
      handlePopoverClose: u,
      handleClosed: c,
      // expose
      open: d,
      // expose
      close: f,
      // expose
      resize: v,
      // expose
      setReference: m
    } = dv(e);
    return {
      popover: o,
      host: t,
      referenceSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: Ee,
      n: UP,
      classes: HP,
      handlePopoverClose: u,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: s,
      handleClosed: c,
      resize: v,
      open: d,
      close: f,
      setReference: m
    };
  }
});
_m.render = jP;
var vi = _m;
re(vi);
le(vi, xm);
const RD = vi;
var ua = vi;
const eh = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": L()
};
var YP = Object.defineProperty, Dd = Object.getOwnPropertySymbols, WP = Object.prototype.hasOwnProperty, KP = Object.prototype.propertyIsEnumerable, Id = (e, n, o) => n in e ? YP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, qP = (e, n) => {
  for (var o in n || (n = {}))
    WP.call(n, o) && Id(e, o, n[o]);
  if (Dd)
    for (var o of Dd(n))
      KP.call(n, o) && Id(e, o, n[o]);
  return e;
};
const { name: XP, n: GP, classes: ZP } = ne("ellipsis"), JP = { key: 0 };
function QP(e, n) {
  const o = x("var-tooltip");
  return g(), ye(o, Ke({
    class: e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")]),
    "var-ellipsis-cover": "",
    style: e.rootStyles
  }, e.tooltipProps, { onClick: e.handleClick }), {
    content: ce(() => [
      H(e.$slots, "tooltip-content", {}, () => {
        var t;
        return [
          (t = e.tooltipProps) != null && t.content ? (g(), P(
            "span",
            JP,
            ie(e.tooltipProps.content),
            1
            /* TEXT */
          )) : H(e.$slots, "default", { key: 1 })
        ];
      })
    ]),
    default: ce(() => [
      F("span", null, [
        H(e.$slots, "default")
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const nh = ee({
  name: XP,
  components: { VarTooltip: ua },
  props: eh,
  setup(e) {
    const n = Pn(e, "expand"), o = E(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), t = E(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : qP({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: t,
      expanding: n,
      rootStyles: o,
      n: GP,
      classes: ZP,
      handleClick: r
    };
  }
});
nh.render = QP;
var mi = nh;
re(mi);
le(mi, eh);
const FD = mi;
var as = mi;
const oh = {
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
  inactiveIconSize: Me(ln, "size"),
  activeIconSize: Me(ln, "size"),
  inactiveIconNamespace: Me(ln, "namespace"),
  activeIconNamespace: Me(ln, "namespace"),
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
  name: xP,
  classes: dl,
  n: Rn
} = ne("fab");
var hi = ee({
  name: xP,
  inheritAttrs: !1,
  props: oh,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = Pn(e, "active"), r = w(null), a = w(null);
    de(() => e.trigger, () => {
      t.value = !1;
    }), de(() => e.disabled, () => {
      t.value = !1;
    }), de(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var c;
      (c = a.value) == null || c.reset();
    }), up(r, "click", s);
    function i(c, d, f) {
      if (c.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (f === 0) {
          k(e.onClick, t.value, c);
          return;
        }
        t.value = d, k(e.onClick, t.value, c), k(t.value ? e.onOpen : e.onClose);
      }
    }
    function l(c, d) {
      e.trigger !== "hover" || e.disabled || d === 0 || (t.value = c, k(t.value ? e.onOpen : e.onClose));
    }
    function s() {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, k(e.onClose));
    }
    function u() {
      return n.trigger ? e.show ? n.trigger({
        active: t.value
      }) : null : Fe(G(In, {
        "var-fab-cover": !0,
        class: Rn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        iconContainer: !0
      }, {
        default: () => [G(Qe, {
          "var-fab-cover": !0,
          class: dl([t.value, Rn("trigger-active-icon"), Rn("trigger-inactive-icon")]),
          name: t.value ? e.activeIcon : e.inactiveIcon,
          size: t.value ? e.activeIconSize : e.inactiveIconSize,
          namespace: t.value ? e.activeIconNamespace : e.inactiveIconNamespace,
          transition: 200,
          animationClass: Rn("--trigger-icon-animation")
        }, null)]
      }), [[xn, e.show]]);
    }
    return () => {
      var c;
      const d = su((c = k(n.default)) != null ? c : []), f = ir(e.drag) ? {} : e.drag;
      return G(sa, Ke({
        ref: a,
        class: dl(Rn(`--position-${e.position}`), [!e.fixed, Rn("--absolute")]),
        style: {
          top: Ee(e.top),
          bottom: Ee(e.bottom),
          left: Ee(e.left),
          right: Ee(e.right)
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
          class: dl(Rn(), Rn(`--direction-${e.direction}`), [e.safeArea, Rn("--safe-area")]),
          ref: r,
          onMouseleave: () => l(!1, d.length),
          onMouseenter: () => l(!0, d.length)
        }, [G(nn, {
          name: Rn("--active-transition")
        }, {
          default: () => [u()]
        }), G(nn, {
          name: Rn(`--actions-transition-${e.direction}`),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Fe(G("div", {
            class: Rn("actions"),
            onClick: (v) => v.stopPropagation()
          }, [d.map((v) => {
            var m;
            return G("div", {
              class: Rn("action"),
              key: (m = v.key) != null ? m : void 0
            }, [v]);
          })]), [[xn, e.show && t.value && d.length]])]
        })])]
      });
    };
  }
});
re(hi);
le(hi, oh);
const LD = hi;
var is = hi;
const th = {
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
}, { name: _P, n: e4, classes: n4 } = ne("floating-panel"), Ad = 100, Md = 0.2;
function o4(e, n) {
  return g(), ye(co, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    F(
      "div",
      {
        class: p(e.classes(e.n(), [e.safeArea, e.n("--safe-area")], e.formatElevation(e.elevation, 3))),
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
        H(e.$slots, "header", {}, () => [
          F(
            "div",
            {
              class: p(e.n("header"))
            },
            [
              F(
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
        F(
          "div",
          {
            ref: "contentRef",
            class: p(e.n("content"))
          },
          [
            H(e.$slots, "default")
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
const rh = ee({
  name: _P,
  props: th,
  setup(e) {
    const n = w(0), o = w(null), { height: t } = S0(), r = E(() => t.value * 0.6), a = Pn(e, "anchor", { defaultValue: Ad }), i = E(() => {
      const M = [Ad, r.value], { anchors: W } = e;
      return Zn(W) ? M : W;
    }), l = E(() => Math.min(...i.value)), s = E(() => Math.max(...i.value)), { disabled: u } = ot(), { deltaY: c, touching: d, startTouch: f, moveTouch: v, endTouch: m, isReachTop: h, isReachBottom: y } = Ot();
    let C;
    ur(() => d.value), de(() => a.value, $, { immediate: !0 }), de(
      () => i.value,
      () => {
        $(a.value);
      },
      { immediate: !0 }
    );
    function $(M) {
      O(M ?? l.value);
    }
    function b(M) {
      f(M), C = n.value;
    }
    function S(M) {
      var W;
      v(M);
      const N = M.target, z = o.value === N || ((W = o.value) == null ? void 0 : W.contains(N));
      if (z && !e.contentDraggable)
        return;
      if (z && e.contentDraggable && n.value >= s.value && !h(o.value)) {
        y(o.value) && Re(M);
        return;
      }
      const A = C - c.value;
      O(V(A)), Re(M);
    }
    function B() {
      m();
      const M = a.value;
      O(n.value), a.value = n.value, a.value !== M && k(e.onAnchorChange, n.value);
    }
    function O(M) {
      n.value = d.value ? M : D(M);
    }
    function V(M) {
      if (M > s.value) {
        const W = M - s.value;
        return s.value + W * Md;
      }
      if (M < l.value) {
        const W = l.value - M;
        return l.value - W * Md;
      }
      return M;
    }
    function D(M) {
      if (i.value.includes(M))
        return M;
      let W = 1 / 0, N = 0;
      return i.value.forEach((z) => {
        const A = Math.abs(z - M);
        A < W && (W = A, N = z);
      }), N;
    }
    return {
      contentRef: o,
      teleportDisabled: u,
      touching: d,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: e4,
      classes: n4,
      toSizeUnit: Ee,
      toNumber: j,
      formatElevation: vn,
      handleTouchstart: b,
      handleTouchmove: S,
      handleTouchend: B
    };
  }
});
rh.render = o4;
var gi = rh;
re(gi);
le(gi, th);
const UD = gi;
var ls = gi;
const ah = {
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
var Nd = (e, n, o) => new Promise((t, r) => {
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
const { name: t4, n: r4 } = ne("form");
function a4(e, n) {
  return g(), P(
    "form",
    {
      class: p(e.n()),
      onSubmit: n[0] || (n[0] = (...o) => e.handleSubmit && e.handleSubmit(...o)),
      onReset: n[1] || (n[1] = (...o) => e.handleReset && e.handleReset(...o))
    },
    [
      H(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const ih = ee({
  name: t4,
  props: ah,
  setup(e) {
    const n = E(() => e.disabled), o = E(() => e.readonly), { formItems: t, bindFormItems: r } = f1();
    r({
      disabled: n,
      readonly: o
    });
    function i(f) {
      setTimeout(() => {
        const v = Fo(f), m = v === window ? 0 : uc(v), h = uc(f) - m - rn(e.scrollToErrorOffsetY);
        Ht(v, {
          top: h,
          animation: Pl
        });
      }, 300);
    }
    function l(f) {
      return Nd(this, null, function* () {
        Re(f);
        const v = yield u();
        k(e.onSubmit, v);
      });
    }
    function s(f) {
      Re(f), c(), k(e.onReset);
    }
    function u() {
      return Nd(this, null, function* () {
        var f;
        const v = yield Promise.all(t.map(({ validate: m }) => m()));
        if (e.scrollToError) {
          const [, m] = Wf(v, (y) => y === !1, e.scrollToError), h = m > -1;
          if (h) {
            const y = (f = t[m].instance.proxy) == null ? void 0 : f.$el;
            i(y);
          }
          return !h;
        }
        return v.every((m) => m === !0);
      });
    }
    function c() {
      return t.forEach(({ reset: f }) => f());
    }
    function d() {
      return t.forEach(({ resetValidation: f }) => f());
    }
    return {
      n: r4,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: c,
      resetValidation: d
    };
  }
});
ih.render = a4;
var Tt = ih;
Tt.useValidation = Kn;
Tt.useForm = qn;
re(Tt);
le(Tt, ah);
const HD = Tt;
var ss = Tt;
const lh = {
  highlighter: Object,
  theme: String,
  tag: {
    type: String,
    default: "div"
  }
}, { name: i4, n: l4 } = ne("highlighter-provider"), s4 = ee({
  name: i4,
  props: lh,
  setup(e, { slots: n }) {
    const o = E(() => e.highlighter), t = E(() => e.theme);
    return LC({ highlighter: o, theme: t }), () => or(
      e.tag,
      {
        class: l4()
      },
      k(n.default)
    );
  }
});
var bi = s4;
re(bi);
le(bi, lh);
const jD = bi;
var us = bi;
const sh = {
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
}, { name: u4, n: c4, classes: d4 } = ne("image"), f4 = ["alt", "title", "referrerpolicy", "lazy-loading", "lazy-error"], p4 = ["alt", "title", "referrerpolicy", "src"];
function v4(e, n) {
  var o;
  const t = Xe("lazy"), r = Xe("ripple");
  return Fe((g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: X({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [
      e.lazy && !e.showErrorSlot ? Fe((g(), P("img", {
        key: 0,
        role: "img",
        class: p(e.n("image")),
        alt: e.alt,
        title: e.title,
        referrerpolicy: e.referrerpolicy,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: X({ objectFit: e.fit, objectPosition: e.position }),
        onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, f4)), [
        [t, (o = e.src) != null ? o : ""]
      ]) : K("v-if", !0),
      !e.lazy && !e.showErrorSlot ? (g(), P("img", {
        key: 1,
        role: "img",
        class: p(e.n("image")),
        alt: e.alt,
        title: e.title,
        referrerpolicy: e.referrerpolicy,
        style: X({ objectFit: e.fit, objectPosition: e.position }),
        src: e.src,
        onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
        onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, p4)) : K("v-if", !0),
      e.showErrorSlot ? H(e.$slots, "error", { key: 2 }) : K("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const uh = ee({
  name: u4,
  directives: {
    Lazy: Gt,
    Ripple: sn
  },
  props: sh,
  setup(e, { slots: n }) {
    const o = w(!1);
    de(
      () => e.src,
      () => {
        o.value = !1;
      }
    );
    function t(i) {
      o.value = !!n.error, k(e.onError, i);
    }
    function r(i) {
      const l = i.currentTarget;
      if (e.lazy) {
        if (l._lazy.state === "success") {
          k(e.onLoad, i);
          return;
        }
        l._lazy.state === "error" && t(i);
      } else
        k(e.onLoad, i);
    }
    function a(i) {
      k(e.onClick, i);
    }
    return {
      showErrorSlot: o,
      n: c4,
      classes: d4,
      toSizeUnit: Ee,
      handleLoad: r,
      handleError: t,
      handleClick: a
    };
  }
});
uh.render = v4;
var yi = uh;
re(yi);
le(yi, sh);
const YD = yi;
var cs = yi;
const Mu = {
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
var rt = (e, n, o) => new Promise((t, r) => {
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
const m4 = 250, h4 = 20, { name: g4, n: Vd, classes: b4 } = ne("swipe"), y4 = ["onClick"];
function w4(e, n) {
  const o = x("var-icon"), t = x("var-button"), r = Xe("hover");
  return Fe((g(), P(
    "div",
    {
      ref: "swipeEl",
      class: p(e.n())
    },
    [
      F(
        "div",
        {
          class: p(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
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
          H(e.$slots, "default")
        ],
        38
        /* CLASS, STYLE, NEED_HYDRATION */
      ),
      e.navigation ? H(e.$slots, "prev", Go(Ke({ key: 0 }, {
        index: e.index,
        length: e.length,
        prev: e.prev,
        next: e.next,
        to: e.to,
        hovering: e.hovering
      })), () => [
        G(nn, {
          name: e.getNavigationAnimation("prev")
        }, {
          default: ce(() => [
            e.navigation === !0 || e.hovering ? (g(), P(
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
                  default: ce(() => [
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
            )) : K("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : K("v-if", !0),
      e.navigation ? H(e.$slots, "next", Go(Ke({ key: 1 }, {
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        G(nn, {
          name: e.getNavigationAnimation("next")
        }, {
          default: ce(() => [
            e.navigation === !0 || e.hovering ? (g(), P(
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
                  default: ce(() => [
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
            )) : K("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : K("v-if", !0),
      H(e.$slots, "indicator", Go(pa({
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        e.indicator && e.length ? (g(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
          },
          [
            (g(!0), P(
              Ne,
              null,
              Ze(e.length, (a, i) => (g(), P("div", {
                key: a,
                class: p(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: X({ background: e.indicatorColor }),
                onClick: (l) => e.to(i)
              }, null, 14, y4))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )) : K("v-if", !0)
      ])
    ],
    2
    /* CLASS */
  )), [
    [r, e.handleHovering]
  ]);
}
const ch = ee({
  name: g4,
  directives: { Hover: Nn },
  components: { VarButton: In, VarIcon: Qe },
  props: Mu,
  setup(e) {
    const n = w(null), o = w(0), t = E(() => e.vertical), r = w(0), a = w(0), i = w(!1), l = w(0), s = w(!1), { swipeItems: u, bindSwipeItems: c, length: d } = p1(), { swipeResizeListeners: f, bindSwipeResizeListeners: v } = v1(), { popup: m, bindPopup: h } = kp(), {
      deltaX: y,
      deltaY: C,
      moveX: $,
      moveY: b,
      offsetX: S,
      offsetY: B,
      touching: O,
      direction: V,
      startTime: D,
      startTouch: M,
      moveTouch: W,
      endTouch: N
    } = Ot(), z = E(() => V.value === (e.vertical ? "vertical" : "horizontal"));
    let A = !1, I = -1;
    c({
      size: o,
      currentIndex: l,
      vertical: t
    }), We(() => window, "keydown", Ge), k(h, null), k(v, null), de(
      () => d.value,
      () => rt(this, null, function* () {
        yield bn(), U(), Le();
      })
    ), m && de(
      () => m.show.value,
      (me) => rt(this, null, function* () {
        me ? (yield bn(), Le()) : te();
      })
    ), Ho(Le), Pt(te), ao(Le);
    function T(me) {
      return u.find(({ index: qe }) => qe.value === me);
    }
    function J() {
      e.loop && (a.value >= 0 && T(d.value - 1).setTranslate(-r.value), a.value <= -(r.value - o.value) && T(0).setTranslate(r.value), a.value > -(r.value - o.value) && a.value < 0 && (T(d.value - 1).setTranslate(0), T(0).setTranslate(0)));
    }
    function fe(me) {
      const qe = Bn(me) ? me : Math.floor((a.value - o.value / 2) / -o.value), { loop: oe } = e;
      return qe <= -1 ? oe ? -1 : 0 : qe >= d.value ? oe ? d.value : d.value - 1 : qe;
    }
    function q(me) {
      const { loop: qe } = e;
      return me === -1 ? qe ? d.value - 1 : 0 : me === d.value ? qe ? 0 : d.value - 1 : me;
    }
    function ve(me) {
      return e.loop ? me < 0 ? d.value + me : me >= d.value ? me - d.value : me : Cn(me, 0, d.value - 1);
    }
    function Pe() {
      return rt(this, null, function* () {
        const me = a.value >= o.value, qe = a.value <= -r.value, oe = 0, se = -(r.value - o.value);
        i.value = !0, (me || qe) && (i.value = !0, a.value = qe ? oe : se, T(0).setTranslate(0), T(d.value - 1).setTranslate(0)), yield bn(), i.value = !1;
      });
    }
    function U() {
      A || (l.value = ve(j(e.initialIndex)), A = !0);
    }
    function Q() {
      const { autoplay: me } = e;
      !me || d.value <= 1 || (te(), I = window.setTimeout(() => {
        fn(), Q();
      }, j(me)));
    }
    function te() {
      I && clearTimeout(I);
    }
    function pe(me) {
      return rt(this, null, function* () {
        d.value <= 1 || !e.touchable || (M(me), te(), yield Pe(), i.value = !0);
      });
    }
    function Y(me) {
      const { touchable: qe, vertical: oe } = e;
      !O.value || !qe || (W(me), z.value && (Re(me), a.value += oe ? b.value : $.value, J()));
    }
    function Z() {
      if (!O.value || (N(), !z.value))
        return;
      const { vertical: me, onChange: qe } = e, oe = me ? C.value < 0 : y.value < 0, se = me ? B.value : S.value, Be = performance.now() - D.value <= m4 && se >= h4 ? fe(oe ? l.value + 1 : l.value - 1) : fe();
      i.value = !1, a.value = Be * -o.value;
      const xe = l.value;
      l.value = q(Be), Q(), xe !== l.value && k(qe, l.value);
    }
    function $e(me) {
      e.navigation === "hover" && (s.value = me);
    }
    function Ve(me) {
      return e.navigation !== "hover" ? "" : Vd(`--navigation${e.vertical ? "-vertical" : ""}-${me}-animation`);
    }
    function Ge(me) {
      if (!u.length || u.findIndex(({ isFocusing: se }) => se.value) === -1)
        return;
      const { key: oe } = me;
      Re(me), oe === "ArrowLeft" && un(), oe === "ArrowRight" && fn();
    }
    function Le() {
      n.value && (i.value = !0, o.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = o.value * d.value, a.value = l.value * -o.value, u.forEach((me) => {
        me.setTranslate(0);
      }), Q(), setTimeout(() => {
        i.value = !1;
      }), f.forEach(({ onResize: me }) => {
        me();
      }));
    }
    function fn(me) {
      return rt(this, null, function* () {
        if (d.value <= 1)
          return;
        U();
        const { loop: qe, onChange: oe } = e, se = l.value;
        if (l.value = ve(se + 1), me?.event !== !1 && k(oe, l.value), yield Pe(), se === d.value - 1 && qe) {
          T(0).setTranslate(r.value), a.value = d.value * -o.value;
          return;
        }
        se !== d.value - 1 && (a.value = l.value * -o.value);
      });
    }
    function un(me) {
      return rt(this, null, function* () {
        if (d.value <= 1)
          return;
        U();
        const { loop: qe, onChange: oe } = e, se = l.value;
        if (l.value = ve(se - 1), me?.event !== !1 && k(oe, l.value), yield Pe(), se === 0 && qe) {
          T(d.value - 1).setTranslate(-r.value), a.value = o.value;
          return;
        }
        se !== 0 && (a.value = l.value * -o.value);
      });
    }
    function An(me, qe) {
      if (d.value <= 1 || me === l.value)
        return;
      me = me < 0 ? 0 : me, me = me >= d.value ? d.value : me;
      const oe = me > l.value ? fn : un, se = Math.abs(me - l.value);
      Array.from({ length: se }).forEach((we, Be) => {
        oe({ event: Be === se - 1 ? qe?.event : !1 });
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
      n: Vd,
      toSizeUnit: Ee,
      classes: b4,
      handleTouchstart: pe,
      handleTouchmove: Y,
      handleTouchend: Z,
      next: fn,
      prev: un,
      to: An,
      resize: Le,
      toNumber: j,
      handleHovering: $e,
      getNavigationAnimation: Ve
    };
  }
});
ch.render = w4;
var wi = ch;
re(wi);
le(wi, Mu);
const WD = wi;
var Jt = wi;
function k4() {
  const { bindParent: e, index: n, parentProvider: o } = wn(Gp);
  return jn(!!e, "SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: o,
    bindSwipe: e
  };
}
const { name: $4, n: C4 } = ne("swipe-item"), S4 = ["aria-hidden"];
function P4(e, n) {
  return g(), P("div", {
    class: p(e.n()),
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
    H(e.$slots, "default")
  ], 46, S4);
}
const dh = ee({
  name: $4,
  setup() {
    const e = w(0), n = w(!1), { swipe: o, bindSwipe: t, index: r } = k4(), { size: a, currentIndex: i, vertical: l } = o, s = {
      index: r,
      isFocusing: E(() => n.value),
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
      n: C4,
      toSizeUnit: Ee
    };
  }
});
dh.render = P4;
var Nu = dh;
re(Nu);
const KD = Nu;
var Qt = Nu, O4 = Object.defineProperty, Rd = Object.getOwnPropertySymbols, z4 = Object.prototype.hasOwnProperty, E4 = Object.prototype.propertyIsEnumerable, Fd = (e, n, o) => n in e ? O4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ld = (e, n) => {
  for (var o in n || (n = {}))
    z4.call(n, o) && Fd(e, o, n[o]);
  if (Rd)
    for (var o of Rd(n))
      E4.call(n, o) && Fd(e, o, n[o]);
  return e;
};
const fh = Ld(Ld({
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
}, Me(Mu, ["loop", "indicator", "onChange"])), Me(Et, [
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
])), { name: T4, n: Ud, classes: B4 } = ne("image-preview"), fl = 12, Hd = 200, D4 = 350, jd = 200, I4 = 500, zr = 1, A4 = ["onTouchstart"], M4 = ["src", "alt"];
function N4(e, n) {
  const o = x("var-swipe-item"), t = x("var-swipe"), r = x("var-icon"), a = x("var-popup");
  return g(), ye(a, {
    show: e.show,
    "onUpdate:show": n[3] || (n[3] = (i) => e.show = i),
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
    default: ce(() => [
      G(t, Ke({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.toNumber(e.initialIndex),
        loop: e.loop
      }, e.$attrs, { onChange: e.onChange }), {
        default: ce(() => [
          (g(!0), P(
            Ne,
            null,
            Ze(e.images, (i, l) => (g(), ye(o, {
              key: i,
              class: p(e.n("swipe-item")),
              "var-image-preview-cover": ""
            }, {
              default: ce(() => [
                F("div", {
                  class: p(e.n("zoom-container")),
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
                  F("img", {
                    role: "img",
                    class: p(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                    src: i,
                    alt: i
                  }, null, 10, M4)
                ], 46, A4)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        indicator: ce(({ index: i, length: l }) => [
          H(e.$slots, "indicator", {
            index: i,
            length: l
          }, () => [
            e.indicator && e.images.length > 1 ? (g(), P(
              "div",
              {
                key: 0,
                class: p(e.n("indicators"))
              },
              ie(i + 1) + " / " + ie(l),
              3
              /* TEXT, CLASS */
            )) : K("v-if", !0)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]),
      H(e.$slots, "close-icon", {}, () => [
        e.closeable ? (g(), ye(r, {
          key: 0,
          class: p(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        }, null, 8, ["class", "onClick"])) : K("v-if", !0)
      ]),
      e.$slots.extra ? (g(), P(
        "div",
        {
          key: 0,
          class: p(e.n("extra"))
        },
        [
          H(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : K("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show", "class", "transition", "close-on-key-escape", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onKeyEscape", "onRouteChange"]);
}
const ph = ee({
  name: T4,
  components: {
    VarSwipe: Jt,
    VarSwipeItem: Qt,
    VarPopup: Ro,
    VarIcon: Qe
  },
  inheritAttrs: !1,
  props: fh,
  setup(e) {
    const n = Pn(e, "show"), o = w(1), t = w(0), r = w(0), a = w(), i = w(), l = w(!0), s = w(null), { moveX: u, moveY: c, distance: d, startTime: f, startTouch: v, moveTouch: m, endTouch: h } = Ot(), y = E(() => {
      const { imagePreventDefault: U, show: Q } = e;
      return Q && U;
    });
    let C = null, $ = null, b = !1;
    const S = {
      start: null,
      prev: null
    };
    We(() => document, "contextmenu", J);
    function B(U) {
      o.value = j(U), l.value = !1, S.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, jd);
    }
    function O() {
      o.value = 1, t.value = 0, r.value = 0, l.value = !0, S.prev = null, a.value = void 0, i.value = void 0;
    }
    function V(U) {
      return S.prev ? d.value <= fl && performance.now() - f.value <= Hd && S.prev === U : !1;
    }
    function D(U) {
      return !U || !S.start || !S.prev ? !1 : d.value <= fl && performance.now() - f.value < D4 && (U === S.start || U.parentNode === S.start);
    }
    function M() {
      h(), window.clearTimeout($), b = !1, S.start = null;
    }
    function W(U) {
      if (h(), window.clearTimeout($), b) {
        b = !1;
        return;
      }
      const Q = D(U.target);
      C = window.setTimeout(() => {
        Q && T(), S.start = null;
      }, Hd);
    }
    function N(U, Q) {
      window.clearTimeout(C), window.clearTimeout($);
      const te = U.currentTarget;
      if (S.start = te, $ = window.setTimeout(() => {
        b = !0, k(e.onLongPress, Q);
      }, I4), V(te)) {
        o.value > zr ? O() : B(e.zoom);
        return;
      }
      v(U), S.prev = te;
    }
    function z(U) {
      const { offsetWidth: Q, offsetHeight: te } = U, { naturalWidth: pe, naturalHeight: Y } = U.querySelector(`.${Ud("image")}`);
      return {
        width: Q,
        height: te,
        imageRadio: Y / pe,
        rootRadio: te / Q,
        zoom: j(e.zoom)
      };
    }
    function A(U) {
      const { zoom: Q, imageRadio: te, rootRadio: pe, width: Y, height: Z } = z(U);
      if (!te)
        return 0;
      const $e = te > pe ? Z / te : Y;
      return Math.max(0, (Q * $e - Y) / 2) / Q;
    }
    function I(U) {
      const { zoom: Q, imageRadio: te, rootRadio: pe, width: Y, height: Z } = z(U);
      if (!te)
        return 0;
      const $e = te > pe ? Z : Y * te;
      return Math.max(0, (Q * $e - Z) / 2) / Q;
    }
    function R(U) {
      if (!S.prev)
        return;
      m(U);
      const Q = U.currentTarget;
      if (d.value > fl && window.clearTimeout($), o.value > zr) {
        const te = A(Q), pe = I(Q);
        t.value = Cn(t.value + u.value, -te, te), r.value = Cn(r.value + c.value, -pe, pe);
      }
      S.prev = Q;
    }
    function T() {
      if (o.value > zr) {
        O(), setTimeout(() => k(e["onUpdate:show"], !1), jd);
        return;
      }
      k(e["onUpdate:show"], !1);
    }
    function J(U) {
      y.value && Re(U);
    }
    function fe(U) {
      var Q;
      (Q = s.value) == null || Q.prev(U);
    }
    function q(U) {
      var Q;
      (Q = s.value) == null || Q.next(U);
    }
    function ve(U, Q) {
      var te;
      (te = s.value) == null || te.to(U, Q);
    }
    function Pe(U) {
      U <= zr ? O() : B(U);
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
      n: Ud,
      classes: B4,
      toNumber: j,
      handleTouchstart: N,
      handleTouchmove: R,
      handleTouchend: W,
      handleTouchcancel: M,
      close: T,
      prev: fe,
      next: q,
      to: ve,
      zoom: Pe
    };
  }
});
ph.render = N4;
var hr = ph, V4 = Object.defineProperty, R4 = Object.defineProperties, F4 = Object.getOwnPropertyDescriptors, Yd = Object.getOwnPropertySymbols, L4 = Object.prototype.hasOwnProperty, U4 = Object.prototype.propertyIsEnumerable, Wd = (e, n, o) => n in e ? V4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Er = (e, n) => {
  for (var o in n || (n = {}))
    L4.call(n, o) && Wd(e, o, n[o]);
  if (Yd)
    for (var o of Yd(n))
      U4.call(n, o) && Wd(e, o, n[o]);
  return e;
}, Kd = (e, n) => R4(e, F4(n));
let Bo, Lt = {};
function H4(e = {}) {
  return dn(e) ? Kd(Er({}, Lt), { images: [e] }) : Ye(e) ? Kd(Er({}, Lt), { images: e }) : Er(Er({}, Lt), e);
}
function qo(e) {
  if (!ro())
    return;
  qo.close();
  const n = H4(e), o = on(n);
  o.teleport = "body", Bo = o;
  const { unmountInstance: t } = zt(hr, o, {
    onClose: () => k(o.onClose),
    onClosed: () => {
      k(o.onClosed), t(), Bo === o && (Bo = null);
    },
    onRouteChange: () => {
      t(), Bo === o && (Bo = null);
    },
    "onUpdate:show": (r) => {
      o.show = r;
    }
  });
  o.show = !0;
}
qo.close = () => {
  if (Bo != null) {
    const e = Bo;
    Bo = null, je().then(() => {
      e.show = !1;
    });
  }
};
qo.setDefaultOptions = (e) => {
  Lt = e;
};
qo.resetDefaultOptions = () => {
  Lt = {};
};
qo.Component = hr;
re(hr);
re(hr, qo);
le(qo, fh);
const qD = hr;
var xt = qo;
const vh = {
  index: [Number, String]
}, mh = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function j4() {
  const { bindChildren: e, length: n, childProviders: o } = kn(
    mh
  );
  return {
    length: n,
    indexAnchors: o,
    bindIndexAnchors: e
  };
}
function Y4() {
  const { parentProvider: e, index: n, bindParent: o } = wn(
    mh
  );
  return jn(!!o, "IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: o
  };
}
const { name: W4, n: K4, classes: q4 } = ne("index-anchor");
function X4(e, n) {
  return g(), ye(St(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: "anchorEl",
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode
  }, {
    default: ce(() => [
      F(
        "div",
        Ke({
          class: e.n()
        }, e.$attrs),
        [
          H(e.$slots, "default", {}, () => [
            Ae(
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
const hh = ee({
  name: W4,
  components: { VarSticky: $t },
  inheritAttrs: !1,
  props: vh,
  setup(e) {
    const n = w(!1), o = E(() => e.index), t = w(null), { index: r, indexBar: a, bindIndexBar: i } = Y4(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: c, zIndex: d } = a;
    i({
      index: r,
      name: o,
      setDisabled: m,
      getOffsetTop: v
    });
    function v() {
      return t.value ? t.value.$el ? t.value.$el.offsetTop : t.value.offsetTop : 0;
    }
    function m(h) {
      n.value = h;
    }
    return {
      n: K4,
      classes: q4,
      name: o,
      anchorEl: t,
      active: l,
      sticky: s,
      zIndex: d,
      disabled: n,
      cssMode: u,
      stickyOffsetTop: c,
      Transition: nn
    };
  }
});
hh.render = X4;
var ki = hh;
re(ki);
le(ki, vh);
const XD = ki;
var ds = ki;
const gh = {
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
var qd = (e, n, o) => new Promise((t, r) => {
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
const { name: G4, n: Z4, classes: J4 } = ne("index-bar"), Q4 = ["onClick"];
function x4(e, n) {
  return g(), P(
    "div",
    {
      ref: "barEl",
      class: p(e.n())
    },
    [
      H(e.$slots, "default"),
      F(
        "ul",
        {
          class: p(e.n("anchor-list")),
          style: X({ zIndex: e.toNumber(e.zIndex) + 2, display: e.hideList ? "none" : "block" })
        },
        [
          (g(!0), P(
            Ne,
            null,
            Ze(e.anchorNameList, (o) => (g(), P("li", {
              key: o,
              class: p(e.classes(e.n("anchor-item"), [e.active === o, e.n("anchor-item--active")])),
              style: X({ color: e.active === o && e.highlightColor ? e.highlightColor : void 0 }),
              onClick: (t) => e.anchorClick({ anchorName: o, manualCall: !0 })
            }, [
              H(e.$slots, "anchor-name", { anchorName: o }, () => [
                Ae(
                  ie(o),
                  1
                  /* TEXT */
                )
              ])
            ], 14, Q4))),
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
const bh = ee({
  name: G4,
  props: gh,
  setup(e) {
    const n = w(""), o = w(null), t = w([]), r = w(), a = E(() => e.sticky), i = E(() => e.stickyCssMode), l = E(() => rn(e.stickyOffsetTop)), s = E(() => e.zIndex), { length: u, indexAnchors: c, bindIndexAnchors: d } = j4();
    let f = null, v = !1;
    const m = {
      active: r,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    de(
      () => u.value,
      () => qd(this, null, function* () {
        yield bn(), t.value = c.filter(({ name: O }) => O.value != null).map(({ name: O }) => O.value);
      })
    ), yn(b), fa(S), Ct(() => {
      v = !0, S();
    }), Ho(() => {
      !v || r.value === void 0 || ($({
        anchorName: r.value,
        options: { event: !1 }
      }), v = !1);
    }), d(m);
    function h(O, V) {
      const D = Hn(O) ? O.name.value : O;
      D === r.value || D === void 0 || (r.value = D, V?.event !== !1 && k(e.onChange, D));
    }
    function y() {
      const { top: O } = tn(f), { top: V } = tn(o.value);
      return yo(f) - O + V;
    }
    function C() {
      const O = yo(f), V = f === window ? document.body.scrollHeight : f.scrollHeight, D = y();
      c.forEach((M, W) => {
        const N = M.getOffsetTop(), z = O - N + l.value - D, A = W === c.length - 1 ? V : c[W + 1].getOffsetTop() - M.getOffsetTop();
        M.setDisabled(!0), z >= 0 && z < A && n.value === "" && (M.setDisabled(!1), h(M));
      });
    }
    function $(O) {
      return qd(this, arguments, function* ({ anchorName: V, manualCall: D = !1, options: M }) {
        if (D && k(e.onClick, V), V === r.value && !v)
          return;
        const W = c.find(({ name: R }) => V === R.value);
        if (!W)
          return;
        const N = y(), A = W.getOffsetTop() - l.value + N, I = lr(f);
        n.value = V, h(V, M), yield Ht(f, {
          left: I,
          top: A,
          animation: bv,
          duration: j(e.duration)
        }), yield bn(), n.value = "";
      });
    }
    function b() {
      f = Fo(o.value), f.addEventListener("scroll", C);
    }
    function S() {
      f && f.removeEventListener("scroll", C);
    }
    function B(O, V) {
      Vo(() => $({ anchorName: O, options: V }));
    }
    return {
      barEl: o,
      active: r,
      zIndex: s,
      anchorNameList: t,
      n: Z4,
      classes: J4,
      toNumber: j,
      scrollTo: B,
      anchorClick: $
    };
  }
});
bh.render = x4;
var $i = bh;
re($i);
le($i, gh);
const GD = $i;
var fs = $i;
const yh = {
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
}, { name: _4, n: eO, classes: nO } = ne("link");
function oO(e, n) {
  return g(), ye(St(e.tag), Ke(e.linkProps, {
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
      H(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const wh = ee({
  name: _4,
  props: yh,
  setup(e) {
    const n = w(!1), o = E(() => {
      const { disabled: a, href: i, to: l } = e;
      return a ? "span" : i ? "a" : l ? "router-link" : "a";
    }), t = E(() => {
      const { disabled: a, href: i, target: l, to: s, replace: u, rel: c } = e;
      return a ? {} : i ? { href: i, target: l, rel: c } : s ? { to: s, target: l, replace: u } : {};
    });
    function r(a) {
      e.disabled || k(e.onClick, a);
    }
    return {
      tag: o,
      linkProps: t,
      isFocusing: n,
      inMobile: Ut,
      n: eO,
      classes: nO,
      handleClick: r,
      toSizeUnit: Ee
    };
  }
});
wh.render = oO;
var Ci = wh;
re(Ci);
le(Ci, yh);
const ZD = Ci;
var ps = Ci;
const kh = {
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
}, $h = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function tO() {
  const { bindChildren: e, childProviders: n, length: o } = kn(
    $h
  );
  return {
    length: o,
    tabItemList: n,
    bindTabItem: e
  };
}
const Ch = Symbol("TAB_ITEM_BIND_LIST_KEY");
function rO() {
  const { parentProvider: e, bindParent: n, index: o } = wn(
    $h
  );
  return jn(!!n, "TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: o,
    tabsItems: e,
    bindTabsItems: n
  };
}
function aO() {
  const { childProviders: e, bindChildren: n, length: o } = kn(Ch);
  return {
    length: o,
    lists: e,
    bindLists: n
  };
}
function iO() {
  const { parentProvider: e, bindParent: n, index: o } = wn(Ch);
  return {
    index: o,
    tabItem: e,
    bindTabItem: n
  };
}
var lO = (e, n, o) => new Promise((t, r) => {
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
const { name: sO, n: uO, classes: cO } = ne("list");
function dO(e, n) {
  const o = x("var-loading"), t = Xe("ripple");
  return g(), P(
    "div",
    {
      ref: "listEl",
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      H(e.$slots, "default"),
      e.loading ? H(e.$slots, "loading", { key: 0 }, () => {
        var r;
        return [
          F(
            "div",
            {
              class: p(e.n("loading"))
            },
            [
              F(
                "div",
                {
                  class: p(e.n("loading-text"))
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
      }) : K("v-if", !0),
      e.finished ? H(e.$slots, "finished", { key: 1 }, () => {
        var r;
        return [
          F(
            "div",
            {
              class: p(e.n("finished"))
            },
            ie((r = e.finishedText) != null ? r : (e.pt ? e.pt : e.t)("listFinishedText")),
            3
            /* TEXT, CLASS */
          )
        ];
      }) : K("v-if", !0),
      e.error ? H(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          Fe((g(), P(
            "div",
            {
              class: p(e.n("error")),
              onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
            },
            [
              Ae(
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
      }) : K("v-if", !0),
      F(
        "div",
        {
          ref: "detectorEl",
          class: p(e.n("detector"))
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
const Sh = ee({
  name: sO,
  directives: { Ripple: sn },
  components: { VarLoading: yt },
  props: kh,
  setup(e) {
    const n = w(null), o = w(null), { tabItem: t, bindTabItem: r } = iO(), { t: a } = io();
    let i;
    k(r, {}), t && de(() => t.current.value, c), de(() => [e.loading, e.error, e.finished], c), yn(() => {
      i = Fo(n.value), i.addEventListener("scroll", c), e.immediateCheck && c();
    }), Pt(u);
    function l() {
      k(e["onUpdate:error"], !1), k(e["onUpdate:loading"], !0), k(e.onLoad);
    }
    function s() {
      const { bottom: d } = tn(i), { bottom: f } = tn(o.value);
      return Math.floor(f) - rn(e.offset) <= d;
    }
    function u() {
      i && i.removeEventListener("scroll", c);
    }
    function c() {
      return lO(this, null, function* () {
        yield je(), !(e.loading || e.finished || e.error || t?.current.value === !1 || !s()) && l();
      });
    }
    return {
      listEl: n,
      detectorEl: o,
      pt: a,
      t: an,
      isNumber: Bn,
      load: l,
      check: c,
      n: uO,
      classes: cO
    };
  }
});
Sh.render = dO;
var Si = Sh;
re(Si);
le(Si, kh);
const JD = Si;
var vs = Si;
const fO = {
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
  name: pO,
  classes: vO,
  n: Xd
} = ne("loading-bar");
var mO = ee({
  name: pO,
  props: fO,
  setup(e) {
    return () => G("div", {
      class: vO(Xd(), [e.error, Xd("--error")]),
      style: {
        zIndex: Ln.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: Ee(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: Ee(e.top),
        transitionDuration: e.transitionDuration == null ? void 0 : `${e.transitionDuration}ms`
      }
    }, null);
  }
});
const Vu = 200;
let Ph, Oh, zh, Eh, Pi, Gd, Th = {};
const hO = {
  value: 0,
  opacity: 0,
  error: !1
}, cn = on(hO);
function gO(e) {
  Object.assign(cn, e), Th = e;
}
const bO = () => {
  Object.keys(Th).forEach((e) => {
    cn[e] !== void 0 && (cn[e] = void 0);
  });
}, Bh = () => {
  Gd || (Gd = !0, zt(mO, cn));
}, Ru = () => {
  Ph = window.setTimeout(() => {
    cn.transitionDuration = void 0, !(cn.value >= 95) && (cn.value += cn.value < 70 ? Math.round(5 * Math.random()) : Math.random(), Ru());
  }, 200);
}, Fu = () => {
  window.clearTimeout(Ph), window.clearTimeout(Pi), window.clearTimeout(zh), window.clearTimeout(Oh), window.clearTimeout(Eh);
}, Dh = () => {
  Fu(), cn.value = 100, Pi = window.setTimeout(() => {
    cn.opacity = 0, Eh = window.setTimeout(() => {
      cn.error = !1;
    }, 250);
  }, Vu + 100);
}, yO = () => {
  Fu(), cn.error = !1, cn.value = 0, cn.transitionDuration = 0, Bh(), Pi = window.setTimeout(() => {
    cn.opacity = 1;
  }, Vu), Ru();
}, wO = () => {
  var e;
  zh = window.setTimeout(Dh, (e = cn.finishDelay) != null ? e : 0);
}, kO = () => {
  Fu(), cn.error = !0, cn.value === 100 && (cn.value = 0, cn.transitionDuration = 0), Bh(), Pi = window.setTimeout(() => {
    cn.opacity = 1;
  }, Vu), Ru(), Oh = window.setTimeout(Dh, 300);
}, Ih = {
  start: yO,
  finish: wO,
  error: kO,
  setDefaultOptions: gO,
  resetDefaultOptions: bO
}, QD = Ih;
var ms = Ih;
const Ah = {
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
var $O = Object.defineProperty, CO = Object.defineProperties, SO = Object.getOwnPropertyDescriptors, Zd = Object.getOwnPropertySymbols, PO = Object.prototype.hasOwnProperty, OO = Object.prototype.propertyIsEnumerable, Jd = (e, n, o) => n in e ? $O(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, zO = (e, n) => {
  for (var o in n || (n = {}))
    PO.call(n, o) && Jd(e, o, n[o]);
  if (Zd)
    for (var o of Zd(n))
      OO.call(n, o) && Jd(e, o, n[o]);
  return e;
}, EO = (e, n) => CO(e, SO(n));
const { name: TO, n: BO } = ne("locale-provider"), DO = ee({
  name: TO,
  props: Ah,
  setup(e, { slots: n }) {
    const o = E(
      () => {
        var r;
        return Object.entries((r = e.messages) != null ? r : {}).reduce(
          (a, [i, l]) => (a[i] = EO(zO({}, l), {
            lang: i
          }), a),
          {}
        );
      }
    );
    F0({
      t
    });
    function t(r) {
      if (Qo(o.value, e.locale) && Qo(o.value[e.locale], r))
        return o.value[e.locale][r];
    }
    return () => or(
      e.tag,
      {
        class: BO()
      },
      k(n.default)
    );
  }
});
var Oi = DO;
re(Oi);
le(Oi, Ah);
const xD = Oi;
var hs = Oi;
const Mh = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  // internal
  option: Object
}, Nh = Symbol("SELECT_BIND_OPTION_KEY");
function IO() {
  const { length: e, childProviders: n, bindChildren: o } = kn(Nh);
  return {
    length: e,
    options: n,
    bindOptions: o
  };
}
function AO() {
  const { index: e, parentProvider: n, bindParent: o } = wn(Nh);
  return jn(!!o, "Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: o
  };
}
const { name: MO, n: NO, classes: VO } = ne("option"), RO = ["tabindex"];
function FO(e, n) {
  const o = x("var-checkbox"), t = x("maybe-v-node"), r = x("var-hover-overlay"), a = Xe("ripple"), i = Xe("hover");
  return Fe((g(), P("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
    style: X({
      color: e.optionSelected ? e.focusColor : void 0
    }),
    tabindex: e.disabled ? void 0 : "-1",
    onFocus: n[2] || (n[2] = (l) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (l) => e.isFocusing = !1),
    onClick: n[4] || (n[4] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    F(
      "div",
      {
        class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: X({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ),
    e.multiple ? (g(), ye(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => e.optionSelected = l),
      "checked-color": e.focusColor,
      disabled: e.disabled,
      onClick: n[1] || (n[1] = Un(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "checked-color", "disabled", "onChange"])) : K("v-if", !0),
    H(e.$slots, "default", { selected: e.optionSelected }, () => [
      F(
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
  ], 46, RO)), [
    [xn, e.visible],
    [a, { disabled: e.disabled || !e.ripple }],
    [i, e.handleHovering, "desktop"]
  ]);
}
const Vh = ee({
  name: MO,
  directives: { Ripple: sn, Hover: Nn },
  components: {
    VarCheckbox: vt,
    VarHoverOverlay: Yn,
    MaybeVNode: sr
  },
  props: Mh,
  setup(e) {
    const n = w(), o = w(!1), t = w(!1), r = E(
      () => {
        var R;
        return (R = e.option) != null ? R : {
          label: e.label,
          value: e.value,
          disabled: e.disabled
        };
      }
    ), a = E(() => t.value), i = E(() => e.value), l = E(() => e.disabled), s = E(() => e.ripple), { select: u, bindSelect: c } = AO(), { pattern: d, showMenu: f, filterable: v, multiple: m, focusColor: h, onSelect: y, computeLabel: C, filter: $ } = u, { hovering: b, handleHovering: S } = to(), B = E(
      () => {
        var R;
        return gn(e.label) ? e.label(
          (R = e.option) != null ? R : {
            label: e.label,
            value: e.value,
            disabled: e.disabled
          },
          t.value
        ) : e.label;
      }
    ), O = w(!0), V = E(() => !v.value || !d.value ? !0 : $(d.value, r.value)), D = E(() => f.value ? V.value : O.value), M = {
      label: B,
      value: i,
      disabled: l,
      ripple: s,
      selected: a,
      sync: I
    };
    de([() => e.label, () => e.value], C), de(
      () => [f.value, V.value],
      () => {
        f.value && (O.value = V.value);
      },
      { immediate: !0 }
    ), c(M), We(() => window, "keydown", N), We(() => window, "keyup", z);
    function W() {
      e.disabled || A();
    }
    function N(R) {
      o.value && ((R.key === " " || R.key === "Enter") && Re(R), R.key === "Enter" && n.value.click());
    }
    function z(R) {
      o.value && R.key === " " && (Re(R), n.value.click());
    }
    function A() {
      m.value && (t.value = !t.value), y(M);
    }
    function I(R) {
      t.value = R;
    }
    return {
      root: n,
      optionSelected: t,
      visible: D,
      multiple: m,
      focusColor: h,
      hovering: b,
      isFocusing: o,
      labelVNode: B,
      n: NO,
      classes: VO,
      handleHovering: S,
      handleClick: W,
      handleSelect: A
    };
  }
});
Vh.render = FO;
var zi = Vh;
re(zi);
le(zi, Mh);
const _D = zi;
var ca = zi;
const Rh = {
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
  name: LO,
  n: Tr
} = ne("overlay");
var Ei = ee({
  name: LO,
  inheritAttrs: !1,
  props: Rh,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const {
      zIndex: t
    } = cr(() => e.show, 3), {
      onStackTop: r
    } = vu(() => e.show, t), {
      disabled: a
    } = ot();
    ur(() => e.show, () => e.lockScroll), We(() => window, "keydown", i);
    function i(c) {
      !r() || c.key !== "Escape" || !e.show || (k(e.onKeyEscape), e.closeOnKeyEscape && (Re(c), k(e["onUpdate:show"], !1)));
    }
    function l() {
      k(e.onClick), k(e["onUpdate:show"], !1);
    }
    function s() {
      return G("div", Ke({
        class: Tr(),
        style: {
          zIndex: t.value - 2
        }
      }, o), [G("div", {
        class: Tr("overlay"),
        style: {
          zIndex: t.value - 1
        },
        onClick: l
      }, null), G("div", {
        class: Tr("content"),
        style: {
          zIndex: t.value
        }
      }, [k(n.default)])]);
    }
    function u() {
      return G(nn, {
        name: Tr("--fade")
      }, {
        default: () => [e.show && s()]
      });
    }
    return () => {
      const {
        teleport: c
      } = e;
      return c ? G(co, {
        to: c,
        disabled: a.value
      }, {
        default: () => [u()]
      }) : u();
    };
  }
});
re(Ei);
le(Ei, Rh);
const eI = Ei;
var gs = Ei;
const Fh = {
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
}, { name: UO, n: HO, classes: jO } = ne("pagination"), YO = ["item-mode", "onClick"];
function WO(e, n) {
  const o = x("var-icon"), t = x("var-input"), r = x("var-menu-option"), a = x("var-menu-select"), i = Xe("ripple");
  return g(), P(
    "ul",
    {
      class: p(e.n())
    },
    [
      Fe((g(), P(
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
          H(e.$slots, "prev", {}, () => [
            G(o, { name: "chevron-left" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current <= 1 || e.disabled }]
      ]),
      e.simple ? (g(), P(
        "li",
        {
          key: 0,
          class: p(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
        },
        [
          G(t, {
            modelValue: e.simpleCurrentValue,
            "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
            "var-pagination-cover": "",
            variant: "standard",
            hint: !1,
            disabled: e.disabled,
            onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
            onKeydown: n[3] || (n[3] = Wu((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"]),
          F("span", null, [
            Ae(
              " / " + ie(e.pageCount) + " ",
              1
              /* TEXT */
            ),
            F(
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
      )) : (g(!0), P(
        Ne,
        { key: 1 },
        Ze(e.pageList, (l, s) => Fe((g(), P("li", {
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
          Ae(
            ie(l),
            1
            /* TEXT */
          )
        ], 10, YO)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Fe((g(), P(
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
          H(e.$slots, "next", {}, () => [
            G(o, { name: "chevron-right" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current >= e.pageCount || e.disabled }]
      ]),
      e.showSizeChanger ? (g(), ye(a, {
        key: 2,
        modelValue: e.size,
        "onUpdate:modelValue": n[5] || (n[5] = (l) => e.size = l),
        placement: "cover-top",
        disabled: e.disabled
      }, {
        options: ce(() => [
          (g(!0), P(
            Ne,
            null,
            Ze(e.sizeOption, (l, s) => (g(), ye(r, {
              key: s,
              value: l,
              onClick: e.clickSize
            }, {
              default: ce(() => [
                Ae(
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
          F(
            "li",
            {
              class: p(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
            },
            [
              F(
                "div",
                {
                  class: p(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")]))
                },
                [
                  F(
                    "span",
                    null,
                    ie(e.size) + ie((e.pt ? e.pt : e.t)("paginationItem")) + " / " + ie((e.pt ? e.pt : e.t)("paginationPage")),
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
            ],
            2
            /* CLASS */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled"])) : K("v-if", !0),
      e.showQuickJumper && !e.simple ? (g(), P(
        "li",
        {
          key: 3,
          class: p(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
        },
        [
          Ae(
            ie((e.pt ? e.pt : e.t)("paginationJump")) + " ",
            1
            /* TEXT */
          ),
          G(t, {
            modelValue: e.quickJumperValue,
            "onUpdate:modelValue": n[6] || (n[6] = (l) => e.quickJumperValue = l),
            disabled: e.disabled,
            hint: !1,
            variant: "standard",
            "var-pagination-cover": "",
            onBlur: n[7] || (n[7] = (l) => e.setPage("quick", e.quickJumperValue, l)),
            onKeydown: n[8] || (n[8] = Wu((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : K("v-if", !0),
      e.totalText ? (g(), P(
        "li",
        {
          key: 4,
          class: p(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
        },
        ie(e.totalText),
        3
        /* TEXT, CLASS */
      )) : K("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Lh = ee({
  name: UO,
  components: {
    VarMenuSelect: Xt,
    VarMenuOption: mt,
    VarIcon: Qe,
    VarInput: Yt
  },
  directives: { Ripple: sn },
  props: Fh,
  setup(e) {
    const n = w(""), o = w("1"), t = w(!1), r = w(!1), a = w(j(e.current) || 1), i = w(j(e.size) || 10), l = w([]), s = E(() => Math.ceil(e.maxPagerCount / 2)), u = E(() => Math.ceil(j(e.total) / j(i.value))), c = E(() => {
      const b = i.value * (a.value - 1) + 1, S = Math.min(i.value * a.value, j(e.total));
      return [b, S];
    }), d = E(() => e.showTotal ? e.showTotal(j(e.total), c.value) : ""), { t: f } = io();
    de([() => e.current, () => e.size], ([b, S]) => {
      a.value = j(b) || 1, i.value = j(S || 10);
    }), de(
      [a, i, u],
      ([b, S, B], [O, V]) => {
        let D = [];
        const { maxPagerCount: M, total: W, onChange: N } = e, z = Math.ceil(j(W) / j(V)), A = B - (M - s.value) - 1;
        if (o.value = `${b}`, B - 2 > M) {
          if (O === void 0 || B !== z)
            for (let I = 2; I < M + 2; I++)
              D.push(I);
          if (b <= M && b < A) {
            D = [];
            for (let I = 1; I < M + 1; I++)
              D.push(I + 1);
            t.value = !0, r.value = !1;
          }
          if (b > M && b < A) {
            D = [];
            for (let I = 1; I < M + 1; I++)
              D.push(b + I - s.value);
            t.value = b === 2 && M === 1, r.value = !1;
          }
          if (b >= A) {
            D = [];
            for (let I = 1; I < M + 1; I++)
              D.push(B - (M - I) - 1);
            t.value = !1, r.value = !0;
          }
          D = [1, "...", ...D, "...", B];
        } else
          for (let I = 1; I <= B; I++)
            D.push(I);
        l.value = D, O != null && B > 0 && k(N, b, S), k(e["onUpdate:current"], b), k(e["onUpdate:size"], S);
      },
      {
        immediate: !0
      }
    );
    function v(b, S) {
      return Bn(b) ? !1 : S === 1 ? t.value : r.value;
    }
    function m(b, S) {
      return Bn(b) ? "basic" : S === 1 ? "head" : "tail";
    }
    function h(b, S) {
      if (!(b === a.value || e.disabled)) {
        if (b === "...") {
          a.value = S === 1 ? Math.max(a.value - e.maxPagerCount, 1) : Math.min(a.value + e.maxPagerCount, u.value);
          return;
        }
        if (b === "prev") {
          a.value = C(a.value - 1);
          return;
        }
        if (b === "next") {
          a.value = C(a.value + 1);
          return;
        }
        Bn(b) && (a.value = b);
      }
    }
    function y() {
      const b = C(a.value);
      o.value = String(b), a.value = b;
    }
    function C(b) {
      return b > u.value ? u.value : b < 1 ? 1 : b;
    }
    function $(b, S, B) {
      B.target.blur();
      const O = C(j(S));
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
      t: an,
      n: HO,
      classes: jO,
      getMode: m,
      isHideEllipsis: v,
      clickItem: h,
      clickSize: y,
      setPage: $,
      toNumber: j,
      formatElevation: vn
    };
  }
});
Lh.render = WO;
var Ti = Lh;
re(Ti);
le(Ti, Fh);
const nI = Ti;
var bs = Ti;
const Uh = {
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
}, { name: KO, n: qO, classes: XO } = ne("paper");
function GO(e, n) {
  const o = Xe("ripple");
  return Fe((g(), P(
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
      style: X({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      H(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: !e.ripple }]
  ]);
}
const Hh = ee({
  name: KO,
  directives: { Ripple: sn },
  props: Uh,
  setup(e) {
    function n(o) {
      k(e.onClick, o);
    }
    return {
      n: qO,
      classes: XO,
      formatElevation: vn,
      toSizeUnit: Ee,
      handleClick: n
    };
  }
});
Hh.render = GO;
var Bi = Hh;
re(Bi);
le(Bi, Uh);
const oI = Bi;
var ys = Bi, ZO = Object.defineProperty, Qd = Object.getOwnPropertySymbols, JO = Object.prototype.hasOwnProperty, QO = Object.prototype.propertyIsEnumerable, xd = (e, n, o) => n in e ? ZO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, xO = (e, n) => {
  for (var o in n || (n = {}))
    JO.call(n, o) && xd(e, o, n[o]);
  if (Qd)
    for (var o of Qd(n))
      QO.call(n, o) && xd(e, o, n[o]);
  return e;
};
const jh = xO({
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
}, Me(Et, [
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
])), { name: _O, n: ez, classes: nz } = ne("picker"), _d = 300, oz = 15, ef = 200, tz = 1e3;
let nf = 0;
const rz = ["onTouchstartPassive", "onTouchmove", "onTouchend"], az = ["onTransitionend"], iz = ["onClick"];
function lz(e, n) {
  const o = x("var-button");
  return g(), ye(
    St(e.dynamic ? e.n("$-popup") : e.Transition),
    Ke(
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
        F(
          "div",
          Ke({
            class: e.n()
          }, e.$attrs),
          [
            e.toolbar ? (g(), P(
              "div",
              {
                key: 0,
                class: p(e.n("toolbar"))
              },
              [
                H(e.$slots, "cancel", {}, () => [
                  G(o, {
                    class: p(e.n("cancel-button")),
                    "var-picker-cover": "",
                    text: "",
                    "text-color": e.cancelButtonTextColor,
                    onClick: e.cancel
                  }, {
                    default: ce(() => {
                      var t;
                      return [
                        Ae(
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
                H(e.$slots, "title", {}, () => {
                  var t;
                  return [
                    F(
                      "div",
                      {
                        class: p(e.n("title"))
                      },
                      ie((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("pickerTitle")),
                      3
                      /* TEXT, CLASS */
                    )
                  ];
                }),
                H(e.$slots, "confirm", {}, () => [
                  G(o, {
                    class: p(e.n("confirm-button")),
                    text: "",
                    "var-picker-cover": "",
                    "text-color": e.confirmButtonTextColor,
                    onClick: e.confirm
                  }, {
                    default: ce(() => {
                      var t;
                      return [
                        Ae(
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
            )) : K("v-if", !0),
            F(
              "div",
              {
                class: p(e.n("columns")),
                style: X({ height: `${e.columnHeight}px` })
              },
              [
                (g(!0), P(
                  Ne,
                  null,
                  Ze(e.scrollColumns, (t) => (g(), P("div", {
                    key: t.id,
                    class: p(e.n("column")),
                    onTouchstartPassive: (r) => e.handleTouchstart(r, t),
                    onTouchmove: Un((r) => e.handleTouchmove(r, t), ["prevent"]),
                    onTouchend: (r) => e.handleTouchend(t)
                  }, [
                    F("div", {
                      ref_for: !0,
                      ref: (r) => e.setScrollEl(r, t),
                      class: p(e.n("scroller")),
                      style: X({
                        transform: `translateY(${t.translate}px)`,
                        transitionDuration: `${t.duration}ms`,
                        transitionProperty: t.duration ? "transform" : "none"
                      }),
                      onTransitionend: (r) => e.handleTransitionend(t)
                    }, [
                      (g(!0), P(
                        Ne,
                        null,
                        Ze(t.column, (r, a) => (g(), P("div", {
                          key: e.getValue(r),
                          class: p(e.classes(e.n("option"), r.className)),
                          style: X({ height: `${e.optionHeight}px` }),
                          onClick: (i) => e.handleClick(t, a)
                        }, [
                          F(
                            "div",
                            {
                              class: p(e.classes(e.n("text"), r.textClassName))
                            },
                            ie(r[e.getOptionKey("text")]),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 14, iz))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, az)
                  ], 42, rz))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                F(
                  "div",
                  {
                    class: p(e.n("picked")),
                    style: X({
                      top: `${e.center}px`,
                      height: `${e.optionHeight}px`
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                F(
                  "div",
                  {
                    class: p(e.n("mask")),
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
const Yh = ee({
  name: _O,
  components: {
    VarButton: In,
    VarPopup: Ro
  },
  inheritAttrs: !1,
  props: jh,
  setup(e) {
    const n = Pn(e, "modelValue"), o = w([]), t = E(() => j(e.columnsCount)), r = E(() => rn(e.optionHeight)), a = E(() => rn(e.optionCount)), i = E(() => a.value * r.value / 2 - r.value / 2), l = E(() => a.value * r.value), { prevY: s, moveY: u, dragging: c, startTouch: d, moveTouch: f, endTouch: v } = Ot(), { t: m } = io();
    let h = [];
    V(), de(() => e.columns, V, { deep: !0 }), de(() => n.value, V);
    function y(Y) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[Y];
    }
    function C(Y) {
      var Z;
      return (Z = Y[y("value")]) != null ? Z : Y[y("text")];
    }
    function $(Y) {
      h = [...Y];
    }
    function b(Y) {
      return (e.columnsCount != null ? Y.slice(0, t.value) : Y).map(($e, Ve) => {
        const Ge = {
          id: nf++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: $e,
          scrollEl: null,
          scrolling: !1
        }, Le = n.value[Ve], fn = Ge.column.findIndex((un) => Le === C(un));
        return Ge.index = fn === -1 ? 0 : fn, I(Ge), Ge;
      });
    }
    function S(Y) {
      const Z = [];
      return B(Z, Y), Z;
    }
    function B(Y, Z, $e = !0, Ve = 1) {
      var Ge;
      if (Z.length && (e.columnsCount == null || Ve <= t.value)) {
        const Le = {
          id: nf++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: i.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: Z,
          scrollEl: null,
          scrolling: !1
        };
        if (Y.push(Le), $e) {
          const fn = n.value[Y.length - 1], un = Z.findIndex((An) => fn === C(An));
          Le.index = un === -1 ? 0 : un;
        }
        I(Le), B(
          Y,
          (Ge = Le.column[Le.index][y("children")]) != null ? Ge : [],
          $e,
          Ve + 1
        );
      }
    }
    function O(Y) {
      var Z;
      o.value.splice(o.value.indexOf(Y) + 1), B(
        o.value,
        (Z = Y.column[Y.index][y("children")]) != null ? Z : [],
        !1,
        o.value.length + 1
      );
    }
    function V() {
      o.value = e.cascade ? S(e.columns) : b(e.columns);
      const { indexes: Y } = A();
      $(Y);
    }
    function D(Y, Z) {
      Z.scrollEl = Y;
    }
    function M(Y) {
      k(e["onUpdate:show"], Y);
    }
    function W(Y) {
      const Z = i.value - Y.column.length * r.value, $e = r.value + i.value;
      Y.translate = Cn(Y.translate, Z, $e);
    }
    function N(Y, Z) {
      const $e = Math.round((i.value - Z) / r.value);
      return Vf($e, Y.column);
    }
    function z(Y) {
      return Y.translate = i.value - Y.index * r.value, Y.translate;
    }
    function A() {
      const Y = [], Z = [], $e = [];
      return o.value.forEach(({ column: Ve, index: Ge }) => {
        const Le = Ve[Ge];
        Y.push(C(Le)), Z.push(Ge), $e.push(Le);
      }), {
        values: Y,
        indexes: Z,
        options: $e
      };
    }
    function I(Y, Z = 0) {
      z(Y), Y.duration = Z;
    }
    function R(Y, Z, $e) {
      Y.translate += Math.abs(Z / $e) / 3e-3 * (Z < 0 ? -1 : 1);
    }
    function T(Y, Z) {
      c.value || (Y.index = Z, I(Y, ef));
    }
    function J(Y, Z) {
      Z.touching = !0, Z.translate = al(Z.scrollEl), d(Y);
    }
    function fe(Y, Z) {
      if (!Z.touching)
        return;
      f(Y), Z.scrolling = !1, Z.duration = 0, Z.prevY = s.value, Z.translate += u.value, W(Z);
      const $e = performance.now();
      $e - Z.momentumTime > _d && (Z.momentumTime = $e, Z.momentumPrevY = Z.translate);
    }
    function q(Y) {
      v(), Y.touching = !1, Y.prevY = 0;
      const Z = Y.translate - Y.momentumPrevY, $e = performance.now() - Y.momentumTime, Ve = Math.abs(Z) >= oz && $e <= _d, Ge = Y.translate;
      Ve && R(Y, Z, $e), Y.index = N(Y, Y.translate), I(Y, Ve ? tz : ef), Y.scrolling = Y.translate !== Ge, Y.scrolling || U(Y);
    }
    function ve(Y) {
      Y.scrolling = !1, U(Y);
    }
    function Pe() {
      const { indexes: Y } = A();
      return Y.every((Z, $e) => Z === h[$e]);
    }
    function U(Y) {
      const { onChange: Z, cascade: $e } = e;
      if (Pe())
        return;
      $e && O(Y);
      const Ve = o.value.some((An) => An.scrolling), Ge = o.value.some((An) => An.touching);
      if (Ve || Ge)
        return;
      const { values: Le, indexes: fn, options: un } = A();
      $(fn), k(Z, Le, fn, un), n.value = Le;
    }
    function Q() {
      if (e.cascade) {
        const Y = o.value.find((Z) => Z.scrolling);
        Y && (Y.index = N(Y, al(Y.scrollEl)), Y.scrolling = !1, I(Y), O(Y));
      } else
        o.value.forEach((Y) => {
          Y.index = N(Y, al(Y.scrollEl)), I(Y);
        });
    }
    function te() {
      Q();
      const { values: Y, indexes: Z, options: $e } = A();
      $(Z), k(e.onConfirm, Y, Z, $e);
    }
    function pe() {
      Q();
      const { values: Y, indexes: Z, options: $e } = A();
      $(Z), k(e.onCancel, Y, Z, $e);
    }
    return {
      optionHeight: r,
      optionCount: a,
      scrollColumns: o,
      columnHeight: l,
      center: i,
      Transition: nn,
      pt: m,
      t: an,
      n: ez,
      classes: nz,
      setScrollEl: D,
      getOptionKey: y,
      getValue: C,
      handlePopupUpdateShow: M,
      handleTouchstart: J,
      handleTouchmove: fe,
      handleTouchend: q,
      handleTransitionend: ve,
      confirm: te,
      cancel: pe,
      handleClick: T
    };
  }
});
Yh.render = lz;
var gr = Yh;
let ft;
function Bt(e) {
  return new Promise((n) => {
    Bt.close();
    const o = Ye(e) ? { columns: e } : e, t = on(o);
    t.dynamic = !0, t.teleport = "body", ft = t;
    function r() {
      ft === t && (ft = null);
    }
    const { unmountInstance: a } = zt(gr, t, {
      onConfirm: (i, l, s) => {
        k(t.onConfirm, i, l, s), n({
          state: "confirm",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, r();
      },
      onCancel: (i, l, s) => {
        k(t.onCancel, i, l, s), n({
          state: "cancel",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, r();
      },
      onClose: () => {
        k(t.onClose), n({
          state: "close"
        }), r();
      },
      onClosed: () => {
        k(t.onClosed), a(), r();
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
Bt.close = function() {
  if (ft == null)
    return;
  const e = ft;
  ft = null, je().then(() => {
    e.show = !1;
  });
};
Bt.Component = gr;
re(gr);
re(gr, Bt);
le(Bt, jh);
const tI = gr;
var ws = Bt;
const Wh = {
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
}, at = 100, Br = 0, fo = 20, of = 2 * Math.PI * fo, { name: sz, n: uz, classes: cz } = ne("progress"), dz = ["aria-valuenow"], fz = ["viewBox"], pz = { key: 0 }, vz = ["id"], mz = ["offset", "stop-color"], hz = ["d", "stroke-width", "stroke-dasharray"], gz = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function bz(e, n) {
  return g(), P("div", {
    class: p(e.n()),
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": e.indeterminate ? void 0 : e.mode === "linear" ? e.linearProps.value : e.circleProps.value
  }, [
    e.mode === "linear" ? (g(), P(
      "div",
      {
        key: 0,
        class: p(e.n("linear"))
      },
      [
        F(
          "div",
          {
            class: p(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
            style: X({ height: e.toSizeUnit(e.lineWidth), background: e.trackColor })
          },
          [
            e.indeterminate ? (g(), P(
              "div",
              {
                key: 0,
                class: p(e.n("linear-indeterminate"))
              },
              [
                F(
                  "div",
                  {
                    class: p(e.classes(e.n(`linear--${e.type}`))),
                    style: X({ background: e.progressColor })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                F(
                  "div",
                  {
                    class: p(e.classes(e.n(`linear--${e.type}`))),
                    style: X({ background: e.progressColor })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                )
              ],
              2
              /* CLASS */
            )) : (g(), P(
              "div",
              {
                key: 1,
                class: p(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`))),
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
        e.label ? (g(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
          },
          [
            H(e.$slots, "default", {}, () => [
              Ae(
                ie(e.linearProps.roundValue),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : K("v-if", !0)
      ],
      2
      /* CLASS */
    )) : K("v-if", !0),
    e.mode === "circle" ? (g(), P(
      "div",
      {
        key: 1,
        class: p(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: X({ width: e.toSizeUnit(e.size), height: e.toSizeUnit(e.size) })
      },
      [
        (g(), P("svg", {
          class: p(e.n("circle-svg")),
          viewBox: e.circleProps.viewBox
        }, [
          e.isPlainObject(e.color) ? (g(), P("defs", pz, [
            F("linearGradient", {
              id: e.id,
              x1: "100%",
              y1: "0%",
              x2: "0%",
              y2: "0%"
            }, [
              (g(!0), P(
                Ne,
                null,
                Ze(e.linearGradientProgress, (o, t) => (g(), P("stop", {
                  key: t,
                  offset: o,
                  "stop-color": e.color[o]
                }, null, 8, mz))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, vz)
          ])) : K("v-if", !0),
          e.track ? (g(), P("path", {
            key: 1,
            class: p(e.n("circle-background")),
            d: e.circleProps.path,
            fill: "transparent",
            "stroke-width": e.circleProps.strokeWidth,
            "stroke-dasharray": e.CIRCUMFERENCE,
            style: X({
              stroke: e.trackColor
            })
          }, null, 14, hz)) : K("v-if", !0),
          F("path", {
            class: p(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
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
          }, null, 14, gz)
        ], 10, fz)),
        e.label ? (g(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("circle-label"), e.labelClass))
          },
          [
            H(e.$slots, "default", {}, () => [
              Ae(
                ie(e.circleProps.roundValue),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : K("v-if", !0)
      ],
      6
      /* CLASS, STYLE */
    )) : K("v-if", !0)
  ], 10, dz);
}
const Kh = ee({
  name: sz,
  props: Wh,
  setup(e) {
    const n = cp(), o = E(() => {
      const i = j(e.value), l = Cn(i, Br, at), s = Cn(Math.round(i), Br, at);
      return {
        width: `${l}%`,
        roundValue: `${s}%`,
        value: l
      };
    }), t = E(() => {
      const { size: i, lineWidth: l, value: s } = e, u = fo / (1 - rn(l) / rn(i)) * 2, c = `0 0 ${u} ${u}`, d = Cn(Math.round(j(s)), Br, at), f = `${(at - d) / at * of}`, v = rn(l) / rn(i) * u, m = 0, h = -fo, y = 0, C = -2 * fo, $ = `M ${u / 2} ${u / 2} m ${m} ${h} a ${fo} ${fo} 
        0 1 1 ${y} ${-C} a ${fo} ${fo} 0 1 1 ${-y} ${C}`;
      return {
        strokeWidth: v,
        viewBox: c,
        strokeOffset: f,
        roundValue: `${d}%`,
        path: $,
        value: Cn(j(s), Br, at)
      };
    }), r = E(() => Hn(e.color) ? `url(#${n.value})` : e.color), a = E(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: o,
      CIRCUMFERENCE: of,
      RADIUS: fo,
      circleProps: t,
      progressColor: r,
      linearGradientProgress: a,
      n: uz,
      classes: cz,
      toSizeUnit: Ee,
      isPlainObject: Hn
    };
  }
});
Kh.render = bz;
var Di = Kh;
re(Di);
le(Di, Wh);
const rI = Di;
var ks = Di;
const qh = {
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
const { name: wz, n: tf, classes: kz } = ne("pull-refresh"), rf = 150;
function $z(e, n) {
  const o = x("var-icon");
  return g(), P(
    "div",
    {
      ref: "freshNode",
      class: p(e.n()),
      onTouchstart: n[0] || (n[0] = (...t) => e.handleTouchstart && e.handleTouchstart(...t)),
      onTouchend: n[1] || (n[1] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
      onTouchcancel: n[2] || (n[2] = (...t) => e.handleTouchend && e.handleTouchend(...t))
    },
    [
      F(
        "div",
        {
          ref: "controlNode",
          class: p(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
          style: X(e.controlStyle)
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
      H(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Xh = ee({
  name: wz,
  components: { VarIcon: Qe },
  props: qh,
  setup(e) {
    const n = w(0), o = w(null), t = w(null), r = w(0), a = w("-125%"), i = w("arrow-down"), l = w("default"), s = w(!1), u = E(() => Math.abs(2 * n.value)), c = E(() => l.value === "success"), d = E(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = E(() => ({
      transform: `translate3d(0px, ${dn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: c.value ? e.successBgColor : e.bgColor,
      color: c.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: m, endTouch: h, isReachTop: y } = Ot();
    let C, $;
    de(
      () => e.modelValue,
      (W) => {
        W === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, M();
        }, j(e.successDuration)));
      }
    ), yn(D), We(o, "touchmove", O);
    function b(W) {
      if (i.value !== W)
        return i.value = W, new Promise((N) => {
          window.setTimeout(N, rf);
        });
    }
    function S(W) {
      ("classList" in C ? C : document.body).classList[W](`${tf()}--lock`);
    }
    function B(W) {
      if (v(W), n.value === 0) {
        const { width: N } = tn(t.value);
        n.value = -(N + N * 0.25);
      }
      $ = Fo(W.target);
    }
    function O(W) {
      if (m(W), !d.value || !$ || $ !== C && yo($) > 0 || yo(C) > 0)
        return;
      y(C) && Re(W), l.value !== "pulling" && (l.value = "pulling", r.value = W.touches[0].clientY), y(C) && Bn(a.value) && a.value > n.value && S("add");
      const z = (W.touches[0].clientY - r.value) / 2 + n.value;
      a.value = z >= u.value ? u.value : z, b(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function V() {
      return yz(this, null, function* () {
        h(), d.value && (s.value = !0, j(a.value) >= u.value * 0.2 ? (yield b("refresh"), l.value = "loading", a.value = u.value * 0.3, k(e["onUpdate:modelValue"], !0), je(() => {
          k(e.onRefresh);
        }), S("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, S("remove");
        }, j(e.animationDuration))), $ = null);
      });
    }
    function D() {
      C = e.target ? Np(e.target, "PullRefresh") : Fo(o.value);
    }
    function M() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, j(e.animationDuration));
    }
    return {
      ICON_TRANSITION: rf,
      refreshStatus: l,
      freshNode: o,
      controlNode: t,
      iconName: i,
      controlStyle: f,
      isSuccess: c,
      n: tf,
      classes: kz,
      handleTouchstart: B,
      handleTouchmove: O,
      handleTouchend: V
    };
  }
});
Xh.render = $z;
var Ii = Xh;
re(Ii);
le(Ii, qh);
const aI = Ii;
var $s = Ii;
const Gh = {
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
  rules: [Array, Function, Object],
  onClick: L(),
  onChange: L(),
  "onUpdate:modelValue": L()
}, Zh = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function Cz() {
  const { bindChildren: e, childProviders: n, length: o } = kn(
    Zh
  );
  return {
    length: o,
    radios: n,
    bindRadios: e
  };
}
function Sz() {
  const { bindParent: e, parentProvider: n, index: o } = wn(Zh);
  return {
    index: o,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: Pz, n: Oz, classes: zz } = ne("radio"), Ez = ["aria-checked", "aria-disabled", "tabindex"];
function Tz(e, n) {
  const o = x("var-icon"), t = x("var-hover-overlay"), r = x("var-form-details"), a = Xe("ripple"), i = Xe("hover");
  return g(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      F("div", Ke({
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
      }), [
        Fe((g(), P(
          "div",
          {
            class: p(
              e.classes(
                e.n("action"),
                [e.checked, e.n("--checked"), e.n("--unchecked")],
                [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")],
                [e.formDisabled || e.disabled, e.n("--disabled")]
              )
            ),
            style: X({ color: e.checked ? e.checkedColor : e.uncheckedColor })
          },
          [
            e.checked ? H(e.$slots, "checked-icon", { key: 0 }, () => [
              G(o, {
                class: p(e.n("icon")),
                "var-radio-cover": "",
                name: "radio-marked",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]) : H(e.$slots, "unchecked-icon", { key: 1 }, () => [
              G(o, {
                class: p(e.n("icon")),
                "var-radio-cover": "",
                name: "radio-blank",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]),
            G(t, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ],
          6
          /* CLASS, STYLE */
        )), [
          [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
          [i, e.handleHovering, "desktop"]
        ]),
        e.$slots.default ? (g(), P(
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
            onClick: n[0] || (n[0] = (...l) => e.handleTextClick && e.handleTextClick(...l))
          },
          [
            H(e.$slots, "default", { checked: e.checked })
          ],
          2
          /* CLASS */
        )) : K("v-if", !0)
      ], 16, Ez),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Jh = ee({
  name: Pz,
  directives: { Ripple: sn, Hover: Nn },
  components: {
    VarIcon: Qe,
    VarFormDetails: Dn,
    VarHoverOverlay: Yn
  },
  inheritAttrs: !1,
  props: Gh,
  setup(e) {
    const n = w(), o = w(!1), t = Pn(e, "modelValue"), r = E(() => t.value === e.checkedValue), { radioGroup: a, bindRadioGroup: i } = Sz(), { hovering: l, handleHovering: s } = to(), { form: u, bindForm: c } = qn(), d = E(() => {
      const N = u?.disabled.value || e.disabled, z = r.value, A = a?.hasChecked.value;
      if (e.tabindex != null)
        return e.tabindex;
      if (!N)
        return a && A && !z ? "-1" : "0";
    }), {
      errorMessage: f,
      validateWithTrigger: v,
      validate: m,
      // expose
      resetValidation: h
    } = Kn(), y = {
      sync: V,
      validate: M,
      resetValidation: h,
      reset: D,
      isFocusing: E(() => o.value),
      // keyboard arrow move
      move() {
        n.value.focus(), n.value.click();
      },
      moveable() {
        return !u?.disabled.value && !e.disabled && !u?.readonly.value && !e.readonly;
      }
    };
    k(i, y), k(c, y), We(() => window, "keydown", C), We(() => window, "keyup", $);
    function C(N) {
      if (!o.value)
        return;
      const { key: z } = N;
      (z === "Enter" || z === " ") && Re(N), z === "Enter" && n.value.click();
    }
    function $(N) {
      o.value && N.key === " " && (Re(N), n.value.click());
    }
    function b(N) {
      je(() => {
        const { validateTrigger: z, rules: A, modelValue: I } = e;
        v(z, N, A, I);
      });
    }
    function S(N) {
      const { checkedValue: z, onChange: A } = e;
      a && t.value === z || (t.value = N, k(A, t.value), a?.onToggle(z), b("onChange"));
    }
    function B(N) {
      const { disabled: z, readonly: A, uncheckedValue: I, checkedValue: R, onClick: T } = e;
      u?.disabled.value || z || (k(T, N), !(u?.readonly.value || A) && S(r.value ? I : R));
    }
    function O() {
      n.value.focus();
    }
    function V(N) {
      const { checkedValue: z, uncheckedValue: A } = e, I = N === z;
      return t.value = I ? z : A, I;
    }
    function D() {
      t.value = e.uncheckedValue, h();
    }
    function M() {
      return m(e.rules, e.modelValue);
    }
    function W(N) {
      const { uncheckedValue: z, checkedValue: A } = e;
      ![z, A].includes(N) && (N = r.value ? z : A), S(N);
    }
    return {
      radio: n,
      isFocusing: o,
      checked: r,
      errorMessage: f,
      radioGroupErrorMessage: a?.errorMessage,
      formDisabled: u?.disabled,
      formReadonly: u?.readonly,
      hovering: l,
      tabIndex: d,
      handleHovering: s,
      n: Oz,
      classes: zz,
      handleClick: B,
      handleTextClick: O,
      toggle: W,
      reset: D,
      validate: M,
      resetValidation: h
    };
  }
});
Jh.render = Tz;
var Ai = Jh;
re(Ai);
le(Ai, Gh);
const iI = Ai;
var da = Ai;
const Qh = {
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
  rules: [Array, Function, Object],
  onChange: L(),
  "onUpdate:modelValue": L()
}, { name: Bz, n: Dz, classes: Iz } = ne("radio-group"), Az = ["aria-label"];
function Mz(e, n) {
  const o = x("maybe-v-node"), t = x("var-radio"), r = x("var-form-details");
  return g(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      F("div", {
        "aria-label": e.ariaLabel,
        role: "radiogroup",
        class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
      }, [
        e.options.length ? (g(!0), P(
          Ne,
          { key: 0 },
          Ze(e.options, (a) => (g(), ye(t, {
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
        )) : K("v-if", !0),
        H(e.$slots, "default")
      ], 10, Az),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const xh = ee({
  name: Bz,
  components: { VarFormDetails: Dn, VarRadio: da, MaybeVNode: sr },
  props: Qh,
  setup(e) {
    const { length: n, radios: o, bindRadios: t } = Cz(), { bindForm: r } = qn(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = Kn(), u = E(() => a.value), c = w(!1), d = {
      onToggle: y,
      validate: C,
      reset: $,
      resetValidation: s,
      hasChecked: E(() => c.value),
      errorMessage: u
    };
    de(() => e.modelValue, h), de(() => n.value, h), k(r, d), t(d), We(() => window, "keydown", f);
    function f(b) {
      const S = o.findIndex(({ isFocusing: O }) => O.value);
      if (!(S === -1 || !o.some(({ moveable: O }, V) => V === S ? !1 : O()))) {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(b.key) && Re(b), b.key === "ArrowUp" || b.key === "ArrowLeft") {
          v(S, "prev");
          return;
        }
        (b.key === "ArrowDown" || b.key === "ArrowRight") && v(S, "next");
      }
    }
    function v(b, S) {
      for (; ; ) {
        S === "prev" ? b-- : b++, b < 0 && (b = o.length - 1), b > o.length - 1 && (b = 0);
        const O = o[b];
        if (O.moveable()) {
          O.move();
          break;
        }
      }
    }
    function m(b) {
      je(() => {
        const { validateTrigger: S, rules: B, modelValue: O } = e;
        i(S, b, B, O);
      });
    }
    function h() {
      o.forEach(({ sync: b }) => {
        b(e.modelValue) && (c.value = !0);
      });
    }
    function y(b) {
      k(e["onUpdate:modelValue"], b), k(e.onChange, b), m("onChange");
    }
    function C() {
      return l(e.rules, e.modelValue);
    }
    function $() {
      k(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: Dz,
      classes: Iz,
      reset: $,
      validate: C,
      resetValidation: s,
      isFunction: gn
    };
  }
});
xh.render = Mz;
var Mi = xh;
re(Mi);
le(Mi, Qh);
const lI = Mi;
var Cs = Mi;
const _h = {
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
  namespace: Me(ln, "namespace"),
  emptyIconNamespace: Me(ln, "namespace"),
  halfIconNamespace: Me(ln, "namespace"),
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
}, { name: Nz, n: At } = ne("rate"), Vz = ["onClick"];
function Rz(e, n) {
  const o = x("var-icon"), t = x("var-hover-overlay"), r = x("var-form-details"), a = Xe("ripple"), i = Xe("hover");
  return g(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      F(
        "div",
        {
          class: p(e.n())
        },
        [
          (g(!0), P(
            Ne,
            null,
            Ze(e.toNumber(e.count), (l) => Fe((g(), P("div", {
              key: l,
              style: X(e.getStyle(l)),
              class: p(e.getClass(l)),
              onClick: (s) => e.handleClick(l, s)
            }, [
              G(o, {
                class: p(e.n("content-icon")),
                "var-rate-cover": "",
                transition: 0,
                namespace: e.getCurrentState(l).namespace,
                name: e.getCurrentState(l).name,
                style: X({ fontSize: e.toSizeUnit(e.size) })
              }, null, 8, ["class", "namespace", "name", "style"]),
              G(t, {
                hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
              }, null, 8, ["hovering"])
            ], 14, Vz)), [
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
const eg = ee({
  name: Nz,
  components: {
    VarIcon: Qe,
    VarFormDetails: Dn,
    VarHoverOverlay: Yn
  },
  directives: { Ripple: sn, Hover: Nn },
  props: _h,
  setup(e) {
    const n = w(-1), { form: o, bindForm: t } = qn(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = Kn(), { hovering: s } = to();
    let u = j(e.modelValue);
    k(t, {
      reset: b,
      validate: h,
      resetValidation: l
    });
    function d(S) {
      const { count: B, gap: O } = e;
      return {
        color: v(S).color,
        marginRight: S !== j(B) ? Ee(O) : 0
      };
    }
    function f(S) {
      const { name: B, color: O } = v(S);
      return {
        [At("content")]: !0,
        [At("--disabled")]: o?.disabled.value || e.disabled,
        [At("--error")]: r.value,
        [At("--primary")]: B !== e.emptyIcon && !O
      };
    }
    function v(S) {
      const {
        modelValue: B,
        disabled: O,
        disabledColor: V,
        color: D,
        half: M,
        emptyColor: W,
        icon: N,
        halfIcon: z,
        emptyIcon: A,
        namespace: I,
        halfIconNamespace: R,
        emptyIconNamespace: T
      } = e;
      let J = D;
      return (O || o?.disabled.value) && (J = V), S <= B ? { color: J, name: N, namespace: I } : M && S <= B + 0.5 ? { color: J, name: z, namespace: R } : {
        color: O || o?.disabled.value ? V : W,
        name: A,
        namespace: T
      };
    }
    function m(S, B) {
      const { half: O, clearable: V } = e, { offsetWidth: D } = B.target;
      O && B.offsetX <= Math.floor(D / 2) && (S -= 0.5), u === S && V && (S = 0), u !== S && (k(e["onUpdate:modelValue"], S), k(e.onChange, S)), u = S;
    }
    function h() {
      return i(e.rules, e.modelValue);
    }
    function y() {
      je(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function C(S, B) {
      const { readonly: O, disabled: V } = e;
      O || V || o?.disabled.value || o?.readonly.value || (m(S, B), y());
    }
    function $(S) {
      return (B) => {
        n.value = S, s.value = B;
      };
    }
    function b() {
      k(e["onUpdate:modelValue"], 0), l();
    }
    return {
      errorMessage: r,
      formDisabled: o?.disabled,
      formReadonly: o?.readonly,
      hovering: s,
      currentHoveringValue: n,
      getStyle: d,
      getClass: f,
      getCurrentState: v,
      handleClick: C,
      createHoverHandler: $,
      reset: b,
      validate: h,
      resetValidation: l,
      toSizeUnit: Ee,
      toNumber: j,
      n: At
    };
  }
});
eg.render = Rz;
var Ni = eg;
re(Ni);
le(Ni, _h);
const sI = Ni;
var Ss = Ni;
const ng = {
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
}, Fz = { viewBox: "-4 -4 32 32" };
function Lz(e, n) {
  return g(), P("svg", Fz, [...n[0] || (n[0] = [
    F(
      "path",
      {
        fill: "currentColor",
        d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
      },
      null,
      -1
      /* CACHED */
    )
  ])]);
}
const og = ee({});
og.render = Lz;
var Uz = og;
const Hz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
};
function jz(e, n) {
  return g(), P("svg", Hz, [...n[0] || (n[0] = [
    F(
      "path",
      { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
      null,
      -1
      /* CACHED */
    )
  ])]);
}
const tg = ee({});
tg.render = jz;
var Yz = tg;
const Wz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
};
function Kz(e, n) {
  return g(), P("svg", Wz, [...n[0] || (n[0] = [
    F(
      "path",
      { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
      null,
      -1
      /* CACHED */
    )
  ])]);
}
const rg = ee({});
rg.render = Kz;
var qz = rg;
const Xz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
};
function Gz(e, n) {
  return g(), P("svg", Xz, [...n[0] || (n[0] = [
    F(
      "path",
      { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
      null,
      -1
      /* CACHED */
    )
  ])]);
}
const ag = ee({});
ag.render = Gz;
var Zz = ag;
const { n: Jz, classes: Qz } = ne("result");
function xz(e, n) {
  return g(), P(
    Ne,
    null,
    [
      F(
        "span",
        {
          class: p(e.n("success-cover-left"))
        },
        null,
        2
        /* CLASS */
      ),
      F(
        "span",
        {
          class: p(e.classes(e.n("success-line"), e.n("success-line-tip"))),
          style: X({
            animationDuration: e.animation ? "760ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      F(
        "span",
        {
          class: p(e.classes(e.n("success-line"), e.n("success-line-long"))),
          style: X({
            animationDuration: e.animation ? "770ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      F(
        "span",
        {
          ref: "circle",
          class: p(e.n("success-circle")),
          style: X({ left: `-${e.borderSize}`, top: `-${e.borderSize}`, borderWidth: e.borderSize })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      F(
        "span",
        {
          class: p(e.n("success-line-fix"))
        },
        null,
        2
        /* CLASS */
      ),
      F(
        "span",
        {
          class: p(e.n("success-cover-right")),
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
const ig = ee({
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
      n: Jz,
      classes: Qz
    };
  }
});
ig.render = xz;
var _z = ig;
const e2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
};
function n2(e, n) {
  return g(), P("svg", e2, [...n[0] || (n[0] = [
    F(
      "path",
      { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
      null,
      -1
      /* CACHED */
    )
  ])]);
}
const lg = ee({});
lg.render = n2;
var o2 = lg;
const { name: t2, n: r2, classes: a2 } = ne("result");
function i2(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      H(e.$slots, "image", {}, () => [
        e.type ? (g(), P(
          "div",
          {
            key: 0,
            class: p(e.n("image-container"))
          },
          [
            F(
              "div",
              {
                class: p(e.classes(e.n("image"), e.n(e.type))),
                style: X({
                  width: e.circleSize,
                  height: e.circleSize,
                  borderWidth: e.borderSize
                })
              },
              [
                (g(), ye(St(e.type), {
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
        )) : K("v-if", !0)
      ]),
      H(e.$slots, "title", {}, () => [
        e.title ? (g(), P(
          "div",
          {
            key: 0,
            class: p(e.n("title"))
          },
          ie(e.title),
          3
          /* TEXT, CLASS */
        )) : K("v-if", !0)
      ]),
      H(e.$slots, "description", {}, () => [
        e.description ? (g(), P(
          "div",
          {
            key: 0,
            class: p(e.n("description"))
          },
          ie(e.description),
          3
          /* TEXT, CLASS */
        )) : K("v-if", !0)
      ]),
      e.$slots.footer ? (g(), P(
        "div",
        {
          key: 0,
          class: p(e.n("footer"))
        },
        [
          H(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : K("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const sg = ee({
  name: t2,
  components: {
    Info: qz,
    Success: _z,
    Warning: o2,
    Error: Yz,
    Question: Zz,
    Empty: Uz
  },
  props: ng,
  setup(e) {
    const n = E(
      () => `calc(${e.imageSize ? Ee(e.imageSize) : "var(--result-image-size)"} * 0.9)`
    ), o = E(
      () => `calc(${e.imageSize ? Ee(e.imageSize) : "var(--result-image-size)"} * 0.05)`
    );
    return {
      circleSize: n,
      borderSize: o,
      n: r2,
      classes: a2
    };
  }
});
sg.render = i2;
var Vi = sg;
re(Vi);
le(Vi, ng);
const uI = Vi;
var Ps = Vi;
const ug = {
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
}, { name: l2, n: s2, classes: u2 } = ne("row");
function c2(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      style: X({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: `${-e.average[0]}px ${-e.average[1]}px`
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      H(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const cg = ee({
  name: l2,
  props: ug,
  setup(e) {
    const n = E(
      () => Ye(e.gutter) ? e.gutter.map((r) => rn(r) / 2) : [0, rn(e.gutter) / 2]
    ), { bindCols: o } = XC();
    o({ average: n });
    function t(r) {
      k(e.onClick, r);
    }
    return {
      average: n,
      n: s2,
      classes: u2,
      handleClick: t,
      padStartFlex: xr
    };
  }
});
cg.render = c2;
var Ri = cg;
re(Ri);
le(Ri, ug);
const cI = Ri;
var Os = Ri, d2 = Object.defineProperty, af = Object.getOwnPropertySymbols, f2 = Object.prototype.hasOwnProperty, p2 = Object.prototype.propertyIsEnumerable, lf = (e, n, o) => n in e ? d2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, v2 = (e, n) => {
  for (var o in n || (n = {}))
    f2.call(n, o) && lf(e, o, n[o]);
  if (af)
    for (var o of af(n))
      p2.call(n, o) && lf(e, o, n[o]);
  return e;
};
const dg = v2({
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
  tabindex: String,
  filterable: Boolean,
  filter: {
    type: Function
  },
  onFocus: L(),
  onBlur: L(),
  onClose: L(),
  onChange: L(),
  onClear: L(),
  "onUpdate:modelValue": L()
}, Me(Pa, [
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
])), { n: m2, classes: h2 } = ne("select");
function g2(e, n) {
  return Fe((g(), P(
    "input",
    {
      ref: "filterInputRef",
      "onUpdate:modelValue": n[0] || (n[0] = (o) => e.value = o),
      type: "text",
      class: p(e.classes(e.n("filter"), [e.multiple, e.n("filter--multiple")]))
    },
    null,
    2
    /* CLASS */
  )), [
    [Tf, e.value]
  ]);
}
const fg = ee({
  name: "VarSelectFilter",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    multiple: Boolean,
    "onUpdate:modelValue": L()
  },
  setup(e) {
    const n = w(), o = E({
      get: () => e.modelValue,
      set: (a) => k(e["onUpdate:modelValue"], a)
    });
    return {
      n: m2,
      classes: h2,
      value: o,
      filterInputRef: n,
      // expose
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
fg.render = g2;
var b2 = fg, sf = (e, n, o) => new Promise((t, r) => {
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
function y2(e, n, o) {
  const t = w(!1);
  let r = null;
  de(
    () => n.value,
    () => sf(this, null, function* () {
      l(), n.value && (yield je(), i(), a());
    }),
    { immediate: !0 }
  ), Pt(l);
  function a() {
    var s;
    const u = e.value, c = u?.querySelectorAll(".var-option");
    t.value = c?.length ? Array.from(c).every((d) => Wn(d).display === "none") : !0, (s = o?.onAfterUpdate) == null || s.call(o);
  }
  function i() {
    e.value && (r = new MutationObserver(() => sf(this, null, function* () {
      yield je(), a();
    })), r.observe(e.value, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style", "class"]
    }));
  }
  function l() {
    r?.disconnect(), r = null;
  }
  return {
    showEmpty: t
  };
}
const w2 = 11;
function k2(e) {
  const n = sb(), o = w(0), t = E(() => ({
    minWidth: `${Math.max(o.value, w2)}px`
  })), r = () => {
    var a, i;
    o.value = (i = (a = n.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? i : 0;
  };
  return de(
    () => Gs(e),
    () => {
      je(r);
    }
  ), {
    calculatorRef: n,
    filterStyle: t,
    resize: r
  };
}
var $2 = Object.defineProperty, C2 = Object.defineProperties, S2 = Object.getOwnPropertyDescriptors, uf = Object.getOwnPropertySymbols, P2 = Object.prototype.hasOwnProperty, O2 = Object.prototype.propertyIsEnumerable, cf = (e, n, o) => n in e ? $2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, z2 = (e, n) => {
  for (var o in n || (n = {}))
    P2.call(n, o) && cf(e, o, n[o]);
  if (uf)
    for (var o of uf(n))
      O2.call(n, o) && cf(e, o, n[o]);
  return e;
}, E2 = (e, n) => C2(e, S2(n)), T2 = (e, n, o) => new Promise((t, r) => {
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
const { name: B2, n: D2, classes: I2 } = ne("select"), A2 = ["tabindex"];
function M2(e, n) {
  const o = x("maybe-v-node"), t = x("var-chip"), r = x("var-select-filter"), a = x("var-icon"), i = x("var-field-decorator"), l = x("var-option"), s = x("var-menu"), u = x("var-form-details");
  return g(), P("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.tabindex,
    onFocus: n[6] || (n[6] = (...c) => e.handleFocus && e.handleFocus(...c)),
    onBlur: n[7] || (n[7] = (...c) => e.handleRootBlur && e.handleRootBlur(...c))
  }, [
    G(s, {
      ref: "menuRef",
      show: e.showMenu,
      "onUpdate:show": n[4] || (n[4] = (c) => e.showMenu = c),
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
      menu: ce(() => [
        F(
          "div",
          {
            ref: "menuEl",
            class: p(e.classes(e.n("scroller"), e.n("$-elevation--3")))
          },
          [
            e.showEmpty ? H(e.$slots, "empty", { key: 0 }, () => [
              F(
                "div",
                {
                  class: p(e.n("empty"))
                },
                ie((e.pt ? e.pt : e.t)("selectEmptyText")),
                3
                /* TEXT, CLASS */
              )
            ]) : K("v-if", !0),
            e.options.length ? (g(!0), P(
              Ne,
              { key: 1 },
              Ze(e.options, (c) => (g(), ye(l, {
                key: c[e.valueKey],
                label: c[e.labelKey],
                value: c[e.valueKey],
                option: c,
                disabled: c.disabled,
                ripple: c.ripple
              }, null, 8, ["label", "value", "option", "disabled", "ripple"]))),
              128
              /* KEYED_FRAGMENT */
            )) : K("v-if", !0),
            H(e.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ]),
      default: ce(() => [
        G(
          i,
          Go(pa({
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
            disabled: e.disabled,
            clearable: e.clearable ? !e.filterable || !e.pattern : !1,
            cursor: e.cursor,
            onClick: e.handleClick,
            onClear: e.handleClear
          })),
          Jo({
            "append-icon": ce(() => [
              H(e.$slots, "arrow-icon", {
                focus: e.isFocusing,
                menuOpen: e.showMenu
              }, () => [
                G(a, {
                  class: p(e.classes(e.n("arrow"), [e.showMenu, e.n("--arrow-rotate")])),
                  "var-select-cover": "",
                  name: "menu-down",
                  transition: 300
                }, null, 8, ["class"])
              ]),
              H(e.$slots, "append-icon")
            ]),
            default: ce(() => [
              F(
                "div",
                {
                  class: p(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                  style: X({
                    textAlign: e.textAlign,
                    color: e.textColor
                  })
                },
                [
                  F(
                    "div",
                    {
                      class: p(e.classes(e.n("label"), [e.filterable && e.showMenu, e.n("--label-focusing")]))
                    },
                    [
                      e.isShowSelected() ? H(e.$slots, "selected", { key: 0 }, () => [
                        e.multiple ? (g(), P(
                          Ne,
                          { key: 0 },
                          [
                            e.chip ? (g(), P(
                              "div",
                              {
                                key: 0,
                                class: p(e.n("chips"))
                              },
                              [
                                (g(!0), P(
                                  Ne,
                                  null,
                                  Ze(e.labels, (c) => (g(), ye(t, {
                                    key: c,
                                    class: p(e.n("chip")),
                                    "var-select-cover": "",
                                    closeable: "",
                                    size: "small",
                                    type: e.errorMessage ? "danger" : void 0,
                                    onClick: n[0] || (n[0] = Un(() => {
                                    }, ["stop"])),
                                    onClose: () => e.handleClose(c)
                                  }, {
                                    default: ce(() => [
                                      G(o, { is: c }, null, 8, ["is"])
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  }, 1032, ["class", "type", "onClose"]))),
                                  128
                                  /* KEYED_FRAGMENT */
                                )),
                                e.isShowMultipleFilter() ? (g(), ye(r, {
                                  key: 0,
                                  ref: "filterRef",
                                  modelValue: e.pattern,
                                  "onUpdate:modelValue": n[1] || (n[1] = (c) => e.pattern = c),
                                  style: X(e.filterStyle),
                                  multiple: e.multiple,
                                  onFocus: e.handleFocus,
                                  onBlur: e.handleRootBlur,
                                  onInput: e.handleInput,
                                  onCompositionstart: e.handleCompositionStart,
                                  onCompositionend: e.handleCompositionEnd
                                }, null, 8, ["modelValue", "style", "multiple", "onFocus", "onBlur", "onInput", "onCompositionstart", "onCompositionend"])) : K("v-if", !0)
                              ],
                              2
                              /* CLASS */
                            )) : (g(), P(
                              "div",
                              {
                                key: 1,
                                class: p(e.n("values"))
                              },
                              [
                                (g(!0), P(
                                  Ne,
                                  null,
                                  Ze(e.labels, (c, d) => (g(), P(
                                    Ne,
                                    { key: c },
                                    [
                                      G(o, { is: c }, null, 8, ["is"]),
                                      Ae(
                                        ie(d !== e.labels.length - 1 ? e.separator : ""),
                                        1
                                        /* TEXT */
                                      )
                                    ],
                                    64
                                    /* STABLE_FRAGMENT */
                                  ))),
                                  128
                                  /* KEYED_FRAGMENT */
                                )),
                                e.isShowMultipleFilter() ? (g(), ye(r, {
                                  key: 0,
                                  ref: "filterRef",
                                  modelValue: e.pattern,
                                  "onUpdate:modelValue": n[2] || (n[2] = (c) => e.pattern = c),
                                  style: X(E2(z2({}, e.filterStyle), { paddingLeft: e.labels.length ? "4px" : 0 })),
                                  multiple: e.multiple,
                                  onFocus: e.handleFocus,
                                  onBlur: e.handleRootBlur,
                                  onInput: e.handleInput,
                                  onCompositionstart: e.handleCompositionStart,
                                  onCompositionend: e.handleCompositionEnd
                                }, null, 8, ["modelValue", "style", "multiple", "onFocus", "onBlur", "onInput", "onCompositionstart", "onCompositionend"])) : K("v-if", !0)
                              ],
                              2
                              /* CLASS */
                            ))
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        )) : (g(), ye(o, {
                          key: 1,
                          is: e.label
                        }, null, 8, ["is"]))
                      ]) : K("v-if", !0)
                    ],
                    2
                    /* CLASS */
                  ),
                  e.enableCustomPlaceholder && !e.pattern ? (g(), P(
                    "span",
                    {
                      key: 0,
                      class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                      style: X({ color: e.placeholderColor })
                    },
                    ie(e.placeholder),
                    7
                    /* TEXT, CLASS, STYLE */
                  )) : K("v-if", !0),
                  e.isShowSingleFilter() ? (g(), ye(r, {
                    key: 1,
                    ref: "filterRef",
                    modelValue: e.pattern,
                    "onUpdate:modelValue": n[3] || (n[3] = (c) => e.pattern = c),
                    style: X(e.filterStyle),
                    onFocus: e.handleFocus,
                    onBlur: e.handleRootBlur,
                    onInput: e.handleInput,
                    onCompositionstart: e.handleCompositionStart,
                    onCompositionend: e.handleCompositionEnd
                  }, null, 8, ["modelValue", "style", "onFocus", "onBlur", "onInput", "onCompositionstart", "onCompositionend"])) : K("v-if", !0),
                  e.filterable ? (g(), P(
                    "span",
                    {
                      key: 2,
                      ref: "calculatorRef",
                      class: p(e.n("filter-calculator"))
                    },
                    ie(e.pattern),
                    3
                    /* TEXT, CLASS */
                  )) : K("v-if", !0)
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
                H(e.$slots, "prepend-icon")
              ]),
              key: "0"
            } : void 0,
            e.pattern ? void 0 : {
              name: "clear-icon",
              fn: ce(({ clear: c }) => [
                H(e.$slots, "clear-icon", { clear: c })
              ]),
              key: "1"
            }
          ]),
          1040
          /* FULL_PROPS, DYNAMIC_SLOTS */
        )
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "class", "popover-class", "offset-y", "disabled", "placement", "onClickOutside"]),
    G(u, {
      "error-message": e.errorMessage,
      onClick: n[5] || (n[5] = Un(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])
  ], 42, A2);
}
const pg = ee({
  name: B2,
  components: {
    VarIcon: Qe,
    VarMenu: qt,
    VarChip: oa,
    VarOption: ca,
    VarFieldDecorator: jt,
    VarFormDetails: Dn,
    VarSelectFilter: b2,
    MaybeVNode: sr
  },
  props: dg,
  setup(e) {
    var n;
    const o = w(!1), t = w(!1), r = w(null), a = w(null), i = w(""), l = w(!1), s = E(() => e.filterable), u = E(() => e.multiple), c = E(() => e.focusColor), d = E(() => Zn(e.modelValue)), f = E(() => e.disabled || e.readonly ? "" : "pointer"), { bindForm: v, form: m } = qn(), { length: h, options: y, bindOptions: C } = IO(), { label: $, labels: b, computeLabel: S, getSelectedValue: B } = pv({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => y,
      optionProvidersLength: () => h.value
    }), {
      errorMessage: O,
      validateWithTrigger: V,
      validate: D,
      // expose
      resetValidation: M
    } = Kn(), W = E(() => m?.readonly.value || e.readonly), N = E(() => m?.disabled.value || e.disabled), z = w(null), A = w(null), I = E(() => e.variant === "standard" && !e.filterable ? "cover-top" : "bottom"), { t: R } = io(), T = w(0), J = E({
      get() {
        return T.value + (I.value === "bottom" ? 2 : 0);
      },
      set(Ce) {
        T.value = Ce;
      }
    }), fe = E(() => {
      const { hint: Ce, blurColor: Ie, focusColor: De } = e;
      if (!Ce)
        return O.value ? "var(--field-decorator-error-color)" : o.value ? De || "var(--field-decorator-focus-color)" : Ie || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), q = E(() => !e.hint && Zn(e.modelValue)), ve = E(() => {
      var Ce;
      if (!N.value)
        return s.value && o.value ? "-1" : (Ce = e.tabindex) != null ? Ce : "0";
    }), { calculatorRef: Pe, filterStyle: U } = k2(i), Q = {
      pattern: E(() => i.value),
      showMenu: E(() => t.value),
      multiple: u,
      filterable: s,
      filter: (n = e.filter) != null ? n : (Ce, Ie) => String(Ie[e.labelKey]).toLocaleLowerCase().includes(Ce.toLocaleLowerCase()),
      focusColor: c,
      computeLabel: S,
      onSelect: qe,
      reset: He,
      validate: Ue,
      resetValidation: M
    }, { showEmpty: te } = y2(z, t, {
      onAfterUpdate: () => {
        var Ce;
        return (Ce = A.value) == null ? void 0 : Ce.resize();
      }
    });
    let pe = !1;
    de(
      () => e.multiple,
      () => {
        jn(
          e.multiple && Ye(e.modelValue),
          "Select",
          "The modelValue must be an array when multiple is true"
        );
      }
    ), C(Q), We(() => window, "keydown", Ve), We(() => window, "keyup", Ge), k(v, Q);
    function Y() {
      return s.value && !W.value && !N.value && !u.value;
    }
    function Z() {
      return s.value && !W.value && !N.value && u.value;
    }
    function $e() {
      return !(d.value && !u.value || !u.value && (i.value || l.value));
    }
    function Ve(Ce) {
      var Ie;
      if (N.value || W.value || !o.value)
        return;
      const { key: De } = Ce;
      if (De === " " && !t.value) {
        Re(Ce);
        return;
      }
      if (De === "Escape" && t.value) {
        r.value.focus(), Re(Ce), t.value = !1;
        return;
      }
      if (De === "Tab" && t.value) {
        r.value.focus(), Re(Ce), un();
        return;
      }
      if (De === "Enter" && !t.value) {
        Re(Ce), t.value = !0, (Ie = a.value) == null || Ie.focus();
        return;
      }
      (De === "ArrowDown" || De === "ArrowUp") && t.value && (Re(Ce), gu(r.value, z.value, De));
    }
    function Ge(Ce) {
      if (N.value || W.value || t.value || !o.value)
        return;
      const { key: Ie } = Ce;
      Ie === " " && !t.value && (Re(Ce), t.value = !0);
    }
    function Le(Ce) {
      je(() => {
        const { validateTrigger: Ie, rules: De, modelValue: $n } = e;
        V(Ie, Ce, De, $n);
      });
    }
    function fn() {
      var Ce;
      const { disabled: Ie, readonly: De, onFocus: $n } = e;
      if (!(m?.disabled.value || m?.readonly.value || Ie || De)) {
        if (pe) {
          pe = !1;
          return;
        }
        J.value = rn(e.offsetY), ke(), (Z() || Y()) && (pe = !0, (Ce = a.value) == null || Ce.focus()), k($n), Le("onFocus");
      }
    }
    function un() {
      const { disabled: Ce, readonly: Ie, onBlur: De } = e;
      m?.disabled.value || m?.readonly.value || Ce || Ie || (Oe(), k(De), Le("onBlur"), i.value = "");
    }
    function An() {
      return T2(this, null, function* () {
        if (pe) {
          yield je(), pe = !1;
          return;
        }
        t.value || un();
      });
    }
    function me() {
      o.value && un();
    }
    function qe(Ce) {
      const { disabled: Ie, readonly: De, multiple: $n, onChange: Xo } = e;
      if (m?.disabled.value || m?.readonly.value || Ie || De)
        return;
      const $o = B(Ce);
      k(e["onUpdate:modelValue"], $o), k(Xo, $o), Le("onChange"), je(() => {
        var zn;
        return (zn = a.value) == null ? void 0 : zn.focus();
      }), $n || (r.value.focus(), bn().then(() => {
        t.value = !1, i.value = "";
      }));
    }
    function oe() {
      const { disabled: Ce, readonly: Ie, multiple: De, clearable: $n, onClear: Xo, onChange: $o } = e;
      if (m?.disabled.value || m?.readonly.value || Ce || Ie || !$n)
        return;
      const zn = De ? [] : void 0;
      k(e["onUpdate:modelValue"], zn), k(Xo, zn), Le("onClear"), k($o, zn), Le("onChange");
    }
    function se(Ce) {
      const { disabled: Ie, onClick: De } = e;
      m?.disabled.value || Ie || (k(De, Ce), Le("onClick"));
    }
    function we(Ce) {
      const { disabled: Ie, readonly: De, modelValue: $n, onClose: Xo, onChange: $o } = e;
      if (m?.disabled.value || m?.readonly.value || Ie || De)
        return;
      const zn = y.find(({ label: tl }) => tl.value === Ce), Dt = $n.filter(
        (tl) => {
          var Yu;
          return tl !== ((Yu = zn.value.value) != null ? Yu : zn.label.value);
        }
      );
      k(e["onUpdate:modelValue"], Dt), k(Xo, Dt), Le("onClose"), k($o, Dt), Le("onChange");
    }
    function Be() {
      t.value = !0;
    }
    function xe() {
      l.value = !0;
    }
    function ae() {
      l.value = !1;
    }
    function ke() {
      J.value = rn(e.offsetY), o.value = !0;
    }
    function Oe() {
      o.value = !1, t.value = !1;
    }
    function Ue() {
      return D(e.rules, e.modelValue);
    }
    function He() {
      k(e["onUpdate:modelValue"], e.multiple ? [] : void 0), M();
    }
    return {
      root: r,
      filterRef: a,
      calculatorRef: Pe,
      isComposing: l,
      filterStyle: U,
      pattern: i,
      tabindex: ve,
      readonly: W,
      disabled: N,
      offsetY: J,
      isFocusing: o,
      showMenu: t,
      errorMessage: O,
      formDisabled: m?.disabled,
      formReadonly: m?.readonly,
      label: $,
      labels: b,
      isEmptyModelValue: d,
      menuEl: z,
      menuRef: A,
      placement: I,
      cursor: f,
      placeholderColor: fe,
      enableCustomPlaceholder: q,
      showEmpty: te,
      t: an,
      pt: R,
      isFunction: gn,
      n: D2,
      classes: I2,
      isShowSelected: $e,
      isShowSingleFilter: Y,
      isShowMultipleFilter: Z,
      handleFocus: fn,
      handleBlur: un,
      handleClickOutside: me,
      handleClear: oe,
      handleClick: se,
      handleClose: we,
      handleRootBlur: An,
      handleInput: Be,
      handleCompositionStart: xe,
      handleCompositionEnd: ae,
      reset: He,
      validate: Ue,
      resetValidation: M,
      focus: ke,
      blur: Oe
    };
  }
});
pg.render = M2;
var Fi = pg;
re(Fi);
le(Fi, dg);
const dI = Fi;
var zs = Fi;
const vg = {
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
  onStart: L(),
  onEnd: L(),
  onSigning: L()
}, { name: N2, n: V2 } = ne("signature"), R2 = ["height", "width"];
function F2(e, n) {
  return g(), P(
    "div",
    {
      ref: "root",
      class: p(e.n())
    },
    [
      F("canvas", {
        ref: "canvas",
        height: e.canvasHeight,
        width: e.canvasWidth
      }, null, 8, R2)
    ],
    2
    /* CLASS */
  );
}
const mg = ee({
  name: N2,
  props: vg,
  setup(e) {
    const n = w(), o = w(), t = w(0), r = w(0);
    let a = !1, i = null;
    We(o, "touchstart", s), We(o, "touchmove", u), We(o, "touchend", c), ao(l), ko(l);
    function l() {
      !o.value || !n.value || (i = o.value.getContext("2d"), t.value = n.value.offsetWidth, r.value = n.value.offsetHeight);
    }
    function s(h) {
      !i || !n.value || (h.preventDefault(), a = !0, i.beginPath(), i.lineWidth = j(e.lineWidth), i.strokeStyle = e.strokeStyle === "currentColor" ? Wn(n.value).color : e.strokeStyle, k(e.onStart));
    }
    function u(h) {
      if (h.preventDefault(), !o.value || !i || !a)
        return;
      const y = h.touches[0].clientX, C = h.touches[0].clientY, $ = tn(o.value), b = y - $.left, S = C - $.top;
      i.lineTo(b, S), i.stroke(), k(e.onSigning);
    }
    function c(h) {
      a && (h.preventDefault(), a = !1, k(e.onEnd));
    }
    function d(h) {
      switch (e.dataUrlType) {
        case "jpg":
          return h.toDataURL("image/jpeg");
        default:
          return h.toDataURL("image/png");
      }
    }
    function f(h) {
      if (!h)
        return !0;
      const y = document.createElement("canvas");
      return y.width = h.width, y.height = h.height, d(h) === d(y);
    }
    function v() {
      i && (a = !1, i.clearRect(0, 0, t.value, r.value), i.closePath());
    }
    function m() {
      if (o.value)
        return f(o.value) ? "" : d(o.value);
    }
    return {
      root: n,
      canvas: o,
      canvasWidth: t,
      canvasHeight: r,
      n: V2,
      confirm: m,
      reset: v
    };
  }
});
mg.render = F2;
var Li = mg;
re(Li);
le(Li, vg);
const fI = Li;
var Es = Li;
const hg = {
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
}, { name: L2, n: U2, classes: H2 } = ne("skeleton");
function j2(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? K("v-if", !0) : (g(), P(
        "div",
        {
          key: 0,
          class: p(e.n("data"))
        },
        [
          H(e.$slots, "default")
        ],
        2
        /* CLASS */
      )),
      e.loading && !e.fullscreen ? (g(), P(
        "div",
        {
          key: 1,
          class: p(e.n("content"))
        },
        [
          e.card ? (g(), P(
            "div",
            {
              key: 0,
              class: p(e.n("card")),
              style: X({ height: e.toSizeUnit(e.cardHeight) })
            },
            [
              F(
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
          )) : K("v-if", !0),
          e.avatar || e.title || e.toNumber(e.rows) > 0 ? (g(), P(
            "div",
            {
              key: 1,
              class: p(e.n("article"))
            },
            [
              e.avatar ? (g(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("avatar")),
                  style: X({
                    width: e.toSizeUnit(e.avatarSize),
                    height: e.toSizeUnit(e.avatarSize)
                  })
                },
                [
                  F(
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
              )) : K("v-if", !0),
              e.title || e.toNumber(e.rows) > 0 ? (g(), P(
                "div",
                {
                  key: 1,
                  class: p(e.n("section"))
                },
                [
                  e.title ? (g(), P(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: X({ width: e.toSizeUnit(e.titleWidth) })
                    },
                    [
                      F(
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
                  )) : K("v-if", !0),
                  (g(!0), P(
                    Ne,
                    null,
                    Ze(e.toNumber(e.rows), (o, t) => (g(), P(
                      "div",
                      {
                        key: o,
                        class: p(e.n("row")),
                        style: X({ width: e.toSizeUnit(e.rowsWidth[t]) })
                      },
                      [
                        F(
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
              )) : K("v-if", !0)
            ],
            2
            /* CLASS */
          )) : K("v-if", !0)
        ],
        2
        /* CLASS */
      )) : K("v-if", !0),
      e.loading && e.fullscreen ? (g(), P(
        "div",
        {
          key: 2,
          class: p(e.n("fullscreen")),
          style: X({ zIndex: e.toNumber(e.fullscreenZIndex) })
        },
        [
          F(
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
      )) : K("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const gg = ee({
  name: L2,
  props: hg,
  setup: () => ({
    n: U2,
    classes: H2,
    toSizeUnit: Ee,
    toNumber: j
  })
});
gg.render = j2;
var Ui = gg;
re(Ui);
le(Ui, hg);
const pI = Ui;
var Ts = Ui, pn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(pn || {});
const bg = {
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
  onChange: L(),
  onStart: L(),
  onEnd: L(),
  "onUpdate:modelValue": L()
}, { name: Y2, n: df, classes: W2 } = ne("slider"), K2 = ["tabindex", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-disabled", "aria-valuetext", "onTouchstart", "onFocusin", "onFocusout"];
function q2(e, n) {
  const o = x("var-hover-overlay"), t = x("var-form-details"), r = Xe("hover");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [
      F(
        "div",
        {
          ref: "sliderEl",
          class: p(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
          onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
        },
        [
          F(
            "div",
            {
              class: p(e.n(`${e.direction}-track`))
            },
            [
              F(
                "div",
                {
                  class: p(e.n(`${e.direction}-track-background`)),
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
              F(
                "div",
                {
                  class: p(e.n(`${e.direction}-track-fill`)),
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
          (g(!0), P(
            Ne,
            null,
            Ze(e.thumbList, (a) => (g(), P("div", {
              key: a.enumValue,
              class: p(e.n(`${e.direction}-thumb`)),
              style: X(e.thumbStyle(a)),
              tabindex: e.isDisabled ? void 0 : "0",
              role: "slider",
              "aria-valuemin": e.min,
              "aria-valuemax": e.max,
              "aria-valuenow": a.value,
              "aria-disabled": e.isDisabled,
              "aria-valuetext": `${a.text}`,
              onTouchstart: Un((i) => e.start(i, a.enumValue), ["stop"]),
              onTouchmove: n[0] || (n[0] = Un((...i) => e.move && e.move(...i), ["stop"])),
              onFocusin: (i) => e.handleFocus(a),
              onFocusout: (i) => e.handleBlur(a)
            }, [
              H(e.$slots, "button", {
                currentValue: a.text
              }, () => [
                Fe(F(
                  "div",
                  {
                    class: p(e.n(`${e.direction}-thumb-block`)),
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
                F(
                  "div",
                  {
                    class: p(
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
                F(
                  "div",
                  {
                    class: p(
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
                    F(
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
            ], 46, K2))),
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
const yg = ee({
  name: Y2,
  components: {
    VarFormDetails: Dn,
    VarHoverOverlay: Yn
  },
  directives: { Hover: Nn },
  props: bg,
  setup(e) {
    const n = w(0), o = w(null), t = w(!1), r = E(() => j(e.max) - j(e.min)), a = E(() => n.value / r.value * j(e.step)), i = E(() => e.disabled || f?.disabled.value), l = E(() => e.readonly || f?.readonly.value), s = E(() => e.direction === "vertical"), u = w(!1), c = w(!1), { bindForm: d, form: f } = qn(), { errorMessage: v, validateWithTrigger: m, validate: h, resetValidation: y } = Kn(), { hovering: C, handleHovering: $ } = to(), { hovering: b, handleHovering: S } = to(), B = E(() => {
      const { modelValue: oe, range: se } = e;
      let we = [];
      return se && Ye(oe) ? we = [
        {
          value: J(oe[0]),
          enumValue: pn.First,
          text: fe(oe[0]),
          hovering: C.value,
          focusing: u.value,
          handleHovering: $,
          handleFocusing(Be) {
            u.value = Be;
          }
        },
        {
          value: J(oe[1]),
          enumValue: pn.Second,
          text: fe(oe[1]),
          hovering: b.value,
          focusing: c.value,
          handleHovering: S,
          handleFocusing(Be) {
            c.value = Be;
          }
        }
      ] : Bn(oe) && (we = [
        {
          value: J(oe),
          enumValue: pn.First,
          text: fe(oe),
          hovering: C.value,
          focusing: u.value,
          handleHovering: $,
          handleFocusing(Be) {
            u.value = Be;
          }
        }
      ]), we;
    }), O = E(() => {
      const { activeColor: oe, range: se, modelValue: we } = e, Be = se && Ye(we) ? J(Math.min(we[0], we[1])) : 0, xe = se && Ye(we) ? J(Math.max(we[0], we[1])) - Be : J(we);
      return s.value ? {
        left: "0px",
        height: `${xe}%`,
        bottom: `${Be}%`,
        background: oe
      } : {
        top: "0px",
        width: `${xe}%`,
        left: `${Be}%`,
        background: oe
      };
    }), V = on({
      [pn.First]: z(),
      [pn.Second]: z()
    });
    let D;
    k(d, {
      reset: fn,
      validate: N,
      resetValidation: y
    }), de([() => e.modelValue, () => e.step], ([oe, se]) => {
      !Ve() || !Ge() || t.value || Le(oe, j(se));
    }), de(n, () => Le()), yn(() => {
      !Ve() || !Ge() || W();
    }), fa(te), We(() => window, "keydown", An), ao(W);
    function W() {
      n.value = o.value[s.value ? "offsetHeight" : "offsetWidth"];
    }
    function N() {
      return h(e.rules, e.modelValue);
    }
    function z() {
      return {
        startPosition: 0,
        currentOffset: 0,
        active: !1,
        percentValue: 0
      };
    }
    function A() {
      je(() => m(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function I(oe) {
      const se = oe.currentTarget;
      return se ? s.value ? n.value - (oe.clientY - tn(se).top) : oe.clientX - py(se) : 0;
    }
    function R(oe) {
      return {
        [s.value ? "bottom" : "left"]: `${oe.value}%`,
        zIndex: V[oe.enumValue].active ? 1 : void 0
      };
    }
    function T(oe) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : V[oe].active;
    }
    function J(oe) {
      const { min: se, max: we } = e;
      return oe < j(se) ? 0 : oe > j(we) ? 100 : (oe - j(se)) / r.value * 100;
    }
    function fe(oe) {
      if (!Bn(oe))
        return 0;
      const se = Cn(oe, j(e.min), j(e.max));
      return parseInt(`${se}`, 10) === se ? se : j(se.toPrecision(5));
    }
    function q(oe, se) {
      i.value || se.handleHovering(oe);
    }
    function ve(oe) {
      k(e.onChange, oe), k(e["onUpdate:modelValue"], oe), A();
    }
    function Pe(oe, se) {
      let we = [];
      const { step: Be, range: xe, modelValue: ae, min: ke } = e, Oe = j(Be), Ue = Math.round(oe / a.value), He = Ue * Oe + j(ke), Ce = V[se].percentValue * Oe + j(ke);
      if (V[se].percentValue = Ue, xe && Ye(ae) && (we = se === pn.First ? [He, ae[1]] : [ae[0], He]), Ce !== He) {
        const Ie = xe ? we.map((De) => fe(De)) : fe(He);
        ve(Ie);
      }
    }
    function U(oe) {
      if (!e.range)
        return pn.First;
      const se = V[pn.First].percentValue * a.value, we = V[pn.Second].percentValue * a.value, Be = Math.abs(oe - se), xe = Math.abs(oe - we);
      return Be <= xe ? pn.First : pn.Second;
    }
    function Q() {
      document.addEventListener("touchmove", Y, { passive: !1 }), document.addEventListener("touchend", Z), document.addEventListener("touchcancel", Z);
    }
    function te() {
      document.removeEventListener("touchmove", Y), document.removeEventListener("touchend", Z), document.removeEventListener("touchcancel", Z);
    }
    function pe(oe, se) {
      if (W(), i.value || (V[se].active = !0), D = se, Q(), i.value || l.value)
        return;
      k(e.onStart), t.value = !0;
      const { clientX: we, clientY: Be } = oe.touches[0];
      V[se].startPosition = s.value ? Be : we;
    }
    function Y(oe) {
      if (Re(oe), i.value || l.value || !t.value)
        return;
      const { startPosition: se, currentOffset: we } = V[D], { clientX: Be, clientY: xe } = oe.touches[0];
      let ae = (s.value ? se - xe : Be - se) + we;
      ae <= 0 ? ae = 0 : ae >= n.value && (ae = n.value), Pe(ae, D);
    }
    function Z() {
      te();
      const { range: oe, modelValue: se, onEnd: we, step: Be, min: xe } = e;
      if (i.value || (V[D].active = !1), i.value || l.value)
        return;
      let ae = [];
      V[D].currentOffset = V[D].percentValue * a.value;
      const ke = V[D].percentValue * j(Be) + j(xe);
      oe && Ye(se) && (ae = D === pn.First ? [ke, se[1]] : [se[0], ke]), k(we, oe ? ae : ke), t.value = !1;
    }
    function $e(oe) {
      if (i.value || l.value || oe.target.closest(`.${df("thumb")}`))
        return;
      const se = I(oe), we = U(se);
      D = we, Pe(se, we), Z();
    }
    function Ve() {
      return j(e.step) <= 0 ? (h0("Slider", '"step" should be > 0'), !1) : !0;
    }
    function Ge() {
      const { range: oe, modelValue: se } = e;
      return oe && !Ye(se) ? (dt("Slider", '"modelValue" should be an Array'), !1) : !oe && Ye(se) ? (dt("Slider", '"modelValue" should be a Number'), !1) : oe && Ye(se) && se.length < 2 ? (dt("Slider", '"modelValue" should have two value'), !1) : !0;
    }
    function Le(oe = e.modelValue, se = j(e.step)) {
      const we = (Be) => {
        const { min: xe, max: ae } = e;
        return Be < j(xe) ? 0 : Be > j(ae) ? r.value / se : (Be - j(xe)) / se;
      };
      e.range && Ye(oe) ? (V[pn.First].percentValue = we(oe[0]), V[pn.First].currentOffset = V[pn.First].percentValue * a.value, V[pn.Second].percentValue = we(oe[1]), V[pn.Second].currentOffset = V[pn.Second].percentValue * a.value) : Bn(oe) && (V[pn.First].currentOffset = we(oe) * a.value);
    }
    function fn() {
      const oe = e.range ? [0, 0] : 0;
      k(e["onUpdate:modelValue"], oe), y();
    }
    function un(oe, se) {
      const we = j(e.step);
      if (Ye(se)) {
        const Be = se[0] + (u.value ? oe * we : 0), xe = se[1] + (c.value ? oe * we : 0);
        return [Be, xe].map(fe);
      }
      return fe(se + oe * we);
    }
    function An(oe) {
      const se = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: we } = oe;
      if (!Qo(se, we) || l.value || i.value || e.range && !u.value && !c.value || !e.range && !u.value)
        return;
      Re(oe);
      const Be = se[we], xe = un(Be, e.modelValue);
      ve(xe);
    }
    function me(oe) {
      i.value || oe.handleFocusing(!0);
    }
    function qe(oe) {
      oe.handleFocusing(!1);
    }
    return {
      sliderEl: o,
      getFillStyle: O,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: V,
      thumbList: B,
      handleFocus: me,
      handleBlur: qe,
      n: df,
      classes: W2,
      thumbStyle: R,
      hover: q,
      toSizeUnit: Ee,
      toNumber: j,
      showLabel: T,
      start: pe,
      move: Y,
      end: Z,
      handleClick: $e
    };
  }
});
yg.render = q2;
var Hi = yg;
re(Hi);
le(Hi, bg);
const vI = Hi;
var Bs = Hi, X2 = Object.defineProperty, G2 = Object.defineProperties, Z2 = Object.getOwnPropertyDescriptors, ff = Object.getOwnPropertySymbols, J2 = Object.prototype.hasOwnProperty, Q2 = Object.prototype.propertyIsEnumerable, pf = (e, n, o) => n in e ? X2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, x2 = (e, n) => {
  for (var o in n || (n = {}))
    J2.call(n, o) && pf(e, o, n[o]);
  if (ff)
    for (var o of ff(n))
      Q2.call(n, o) && pf(e, o, n[o]);
  return e;
}, _2 = (e, n) => G2(e, Z2(n));
const Lu = {
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
  loadingType: Me(po, "type"),
  loadingSize: Me(po, "size"),
  loadingRadius: Me(po, "radius"),
  loadingColor: _2(x2({}, Me(po, "color")), {
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
}, { n: e3, classes: n3 } = ne("snackbar"), o3 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function t3(e, n) {
  const o = x("var-icon"), t = x("var-loading");
  return Fe((g(), P(
    "div",
    {
      class: p(e.n()),
      style: X({ pointerEvents: e.isForbidClick ? "auto" : "none", zIndex: e.zIndex })
    },
    [
      F(
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
          style: X({ zIndex: e.zIndex })
        },
        [
          F(
            "div",
            {
              class: p([e.n("content"), e.contentClass])
            },
            [
              H(e.$slots, "default", {}, () => [
                Ae(
                  ie(e.content),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          e.iconName || e.type === "loading" || e.$slots.icon ? (g(), P(
            "div",
            {
              key: 0,
              class: p(e.n("icon"))
            },
            [
              e.iconName ? (g(), ye(o, {
                key: 0,
                name: e.iconName
              }, null, 8, ["name"])) : K("v-if", !0),
              e.type === "loading" ? (g(), ye(t, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : K("v-if", !0),
              H(e.$slots, "icon")
            ],
            2
            /* CLASS */
          )) : K("v-if", !0),
          e.$slots.action ? (g(), P(
            "div",
            {
              key: 1,
              class: p(e.n("action"))
            },
            [
              H(e.$slots, "action")
            ],
            2
            /* CLASS */
          )) : K("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [xn, e.show]
  ]);
}
const wg = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: yt,
    VarIcon: Qe
  },
  props: Lu,
  setup(e) {
    const n = w(null), { zIndex: o } = cr(() => e.show, 1);
    ur(
      () => e.show,
      () => e.lockScroll
    );
    const t = E(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), r = E(() => e.type ? o3[e.type] : "");
    function a() {
      n.value = setTimeout(() => {
        e.type !== "loading" && k(e["onUpdate:show"], !1);
      }, e.duration);
    }
    return de(
      () => e.show,
      (i) => {
        i ? (k(e.onOpen), a()) : (clearTimeout(n.value), k(e.onClose));
      }
    ), de(
      () => e._update,
      () => {
        clearTimeout(n.value), a();
      }
    ), yn(() => {
      e.show && (k(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: Cg,
      zIndex: o,
      iconName: r,
      isForbidClick: t,
      n: e3,
      classes: n3,
      formatElevation: vn
    };
  }
});
wg.render = t3;
var kg = wg;
const { name: r3, n: a3 } = ne("snackbar");
function i3(e, n) {
  const o = x("var-snackbar-core");
  return g(), ye(co, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [
    G(nn, {
      name: `${e.n()}-fade`,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: ce(() => [
        G(o, Ke(e.$props, {
          class: e.n("transition")
        }), Jo({
          default: ce(() => [
            H(e.$slots, "default")
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots.icon ? {
            name: "icon",
            fn: ce(() => [
              H(e.$slots, "icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots.action ? {
            name: "action",
            fn: ce(() => [
              H(e.$slots, "action")
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
const $g = ee({
  name: r3,
  components: { VarSnackbarCore: kg },
  props: Lu,
  setup() {
    const { disabled: e } = ot();
    return {
      disabled: e,
      n: a3
    };
  }
});
$g.render = i3;
var ji = $g, l3 = Object.defineProperty, vf = Object.getOwnPropertySymbols, s3 = Object.prototype.hasOwnProperty, u3 = Object.prototype.propertyIsEnumerable, mf = (e, n, o) => n in e ? l3(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, _t = (e, n) => {
  for (var o in n || (n = {}))
    s3.call(n, o) && mf(e, o, n[o]);
  if (vf)
    for (var o of vf(n))
      u3.call(n, o) && mf(e, o, n[o]);
  return e;
};
const Cg = ["loading", "success", "warning", "info", "error"];
let hf = 0, Ds = !1, Sg, er = !1;
const Pg = {
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
let Qn = on([]), Uu = Pg;
const c3 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, pl = (e) => () => gn(e) ? e() : e, d3 = {
  setup() {
    return () => {
      const e = Qn.map(({
        id: n,
        reactiveSnackOptions: o,
        _update: t
      }) => {
        const r = document.querySelector(".var-transition-group");
        o.forbidClick || o.type === "loading" ? r.classList.add("var-pointer-auto") : r.classList.remove("var-pointer-auto");
        const a = _t({
          position: er ? "relative" : "absolute"
        }, g3(o.position)), {
          content: i,
          icon: l,
          action: s
        } = o, u = {
          default: pl(i),
          icon: pl(l),
          action: pl(s)
        };
        return G(kg, Ke(o, {
          key: n,
          style: a,
          "data-id": n,
          _update: t,
          show: o.show,
          "onUpdate:show": (c) => o.show = c
        }), u);
      });
      return G(ub, Ke(c3, {
        style: {
          zIndex: Ln.zIndex
        },
        onAfterEnter: f3,
        onAfterLeave: p3
      }), {
        default: () => [e]
      });
    };
  }
}, uo = function(e) {
  const n = m3(e), o = on(_t(_t({}, Uu), n));
  o.show = !0, Ds || (Ds = !0, Sg = zt(d3).unmountInstance);
  const {
    length: t
  } = Qn, r = {
    id: hf++,
    reactiveSnackOptions: o
  };
  if (t === 0 || er)
    v3(r);
  else {
    const a = `update-${hf}`;
    h3(o, a);
  }
  return {
    clear() {
      !er && Qn.length ? Qn[0].reactiveSnackOptions.show = !1 : o.show = !1;
    }
  };
};
Cg.forEach((e) => {
  uo[e] = (n) => (Hn(n) ? n.type = e : n = {
    content: n,
    type: e
  }, uo(n));
});
uo.allowMultiple = function(e = !1) {
  e !== er && (Qn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), er = e);
};
uo.clear = function() {
  Qn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
uo.setDefaultOptions = function(e) {
  Uu = e;
};
uo.resetDefaultOptions = function() {
  Uu = Pg;
};
function f3(e) {
  const n = e.getAttribute("data-id"), o = Qn.find((t) => t.id === j(n));
  o && k(o.reactiveSnackOptions.onOpened);
}
function p3(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), o = Qn.find((r) => r.id === j(n));
  o && (o.animationEnd = !0, k(o.reactiveSnackOptions.onClosed)), Qn.every((r) => r.animationEnd) && (k(Sg), Qn = on([]), Ds = !1);
}
function v3(e) {
  Qn.push(e);
}
function m3(e = {}) {
  return dn(e) ? {
    content: e
  } : e;
}
function h3(e, n) {
  const [o] = Qn;
  o.reactiveSnackOptions = _t(_t({}, o.reactiveSnackOptions), e), o._update = n;
}
function g3(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
uo.Component = ji;
re(ji);
re(ji, uo);
le(uo, Lu);
const mI = ji;
var Is = uo;
const Og = {
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
function Fn(e) {
  return `calc(${e} / 2)`;
}
function b3(e, n, o) {
  const { direction: t, justify: r, index: a, lastIndex: i } = o;
  let l = "0";
  return t === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? l = `${Fn(e)} ${n} ${Fn(e)} 0` : l = `${Fn(e)} 0` : r === "space-around" ? l = `${Fn(e)} ${Fn(n)}` : r === "space-between" && (a === 0 ? l = `${Fn(e)} ${Fn(n)} ${Fn(e)} 0` : a === i ? l = `${Fn(e)} 0 ${Fn(e)} ${Fn(n)}` : l = `${Fn(e)} ${Fn(n)}`)), t === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const y3 = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: w3,
  n: Dr,
  classes: gf
} = ne("space");
function k3(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Ye(e) ? e.map(Ee) : [Ee(e), Ee(e)];
}
var Yi = ee({
  name: w3,
  props: Og,
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
      } = e, u = (o = k(n.default)) != null ? o : [], [c, d] = k3(s, y3(s)), f = su(u), v = f.length - 1, m = f.map((h, y) => {
        var C;
        const $ = b3(c, d, {
          direction: l,
          justify: r,
          index: y,
          lastIndex: v
        });
        return G("div", {
          class: gf([l === "column", Dr("--auto")]),
          key: (C = h.key) != null ? C : void 0,
          style: {
            margin: $
          }
        }, [h]);
      });
      return G("div", {
        class: gf(Dr(), Dr("$--box"), [t, Dr("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: xr(r),
          alignItems: xr(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${c} / 2) 0` : void 0
        }
      }, [m]);
    };
  }
});
re(Yi);
le(Yi, Og);
const hI = Yi;
var As = Yi;
const zg = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Me(ln, "name"),
  inactiveIcon: Me(ln, "name"),
  activeIconNamespace: Me(ln, "namespace"),
  currentIconNamespace: Me(ln, "namespace"),
  inactiveIconNamespace: Me(ln, "namespace")
}, Eg = Symbol("STEPS_BIND_STEP_KEY");
function $3() {
  const { bindChildren: e, childProviders: n } = kn(Eg);
  return {
    step: n,
    bindStep: e
  };
}
function C3() {
  const { parentProvider: e, index: n, bindParent: o } = wn(Eg);
  return jn(!!o, "Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: o
  };
}
const { name: S3, n: P3, classes: O3 } = ne("step"), z3 = { key: 3 };
function E3(e, n) {
  const o = x("var-icon");
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      F(
        "div",
        {
          class: p(e.n(e.direction))
        },
        [
          F(
            "div",
            {
              class: p(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
              style: X({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
              onClick: n[0] || (n[0] = (...t) => e.click && e.click(...t))
            },
            [
              e.isActive ? (g(), ye(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.activeIcon,
                namespace: e.activeIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.isCurrent && e.currentIcon ? (g(), ye(o, {
                key: 1,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon,
                namespace: e.currentIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.inactiveIcon ? (g(), ye(o, {
                key: 2,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon,
                namespace: e.inactiveIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : (g(), P(
                "span",
                z3,
                ie(e.index + 1),
                1
                /* TEXT */
              ))
            ],
            6
            /* CLASS, STYLE */
          ),
          e.$slots.default ? (g(), P(
            "div",
            {
              key: 0,
              class: p(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
              onClick: n[1] || (n[1] = (...t) => e.click && e.click(...t))
            },
            [
              H(e.$slots, "default")
            ],
            2
            /* CLASS */
          )) : K("v-if", !0),
          F(
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
const Tg = ee({
  name: S3,
  components: { VarIcon: Qe },
  props: zg,
  setup() {
    const { index: e, steps: n, bindSteps: o } = C3(), { active: t, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = E(() => t.value === e.value), u = E(() => e.value !== -1 && j(t.value) > e.value);
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
      n: P3,
      classes: O3,
      click: d
    };
  }
});
Tg.render = E3;
var Wi = Tg;
re(Wi);
le(Wi, zg);
const gI = Wi;
var Ms = Wi;
const Bg = {
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
}, { name: T3, n: B3 } = ne("steps");
function D3(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.n()),
      style: X({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
    },
    [
      H(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Dg = ee({
  name: T3,
  props: Bg,
  setup(e) {
    const n = E(() => e.active), o = E(() => e.activeColor), t = E(() => e.inactiveColor), r = E(() => e.direction), { bindStep: a } = $3();
    a({
      active: n,
      direction: r,
      activeColor: o,
      inactiveColor: t,
      clickStep: l
    });
    function l(s) {
      k(e.onClickStep, s);
    }
    return { n: B3 };
  }
});
Dg.render = D3;
var Ki = Dg;
re(Ki);
le(Ki, Bg);
const bI = Ki;
var Ns = Ki;
const Ig = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: I3, n: A3 } = ne("style-provider"), M3 = ee({
  name: I3,
  props: Ig,
  setup(e, { slots: n }) {
    return () => or(
      e.tag,
      {
        class: A3(),
        style: Vp(e.styleVars)
      },
      k(n.default)
    );
  }
});
var qi = M3;
const Ag = "varlet-style-vars";
function bf() {
  const e = document.head.querySelector(`#${Ag}`);
  e && document.head.removeChild(e);
}
function N3(e) {
  const n = document.createElement("style");
  n.id = Ag, n.innerHTML = e, document.head.appendChild(n);
}
function Xi(e) {
  if (e == null) {
    bf();
    return;
  }
  const n = Vp(e ?? {}), o = Object.entries(n).reduce((t, [r, a]) => (t += `${r}:${a};`, t), `:root:root {
`);
  bf(), N3(`${o}
}`);
}
Xi.Component = qi;
re(qi);
re(qi, Xi);
le(Xi, Ig);
const yI = qi;
var Vs = Xi;
const Mg = {
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
  tabindex: String,
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
}, { name: V3, n: R3, classes: F3 } = ne("switch"), L3 = ["aria-checked"], U3 = ["tabindex"];
function H3(e, n) {
  const o = x("var-hover-overlay"), t = x("var-form-details"), r = Xe("ripple"), a = Xe("hover");
  return Fe((g(), P("div", {
    class: p(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [
    F(
      "div",
      {
        ref: "switchRef",
        class: p(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
        style: X(e.styleComputed.switch),
        onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
      },
      [
        F(
          "div",
          {
            style: X(e.styleComputed.track),
            class: p(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
          },
          null,
          6
          /* CLASS, STYLE */
        ),
        Fe((g(), P("div", {
          class: p(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
          style: X(e.styleComputed.ripple),
          tabindex: e.tabindex == null ? e.disabled || e.formDisabled ? void 0 : "0" : e.tabindex,
          onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
          onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
        }, [
          F(
            "div",
            {
              style: X(e.styleComputed.handle),
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
              e.loading ? (g(), P(
                "span",
                {
                  key: 0,
                  class: p(e.n("loading")),
                  style: X({
                    width: e.radius,
                    height: e.radius
                  })
                },
                [...n[3] || (n[3] = [
                  F(
                    "svg",
                    { viewBox: "25 25 50 50" },
                    [
                      F("circle", {
                        cx: "50",
                        cy: "50",
                        r: "20",
                        fill: "none"
                      })
                    ],
                    -1
                    /* CACHED */
                  )
                ])],
                6
                /* CLASS, STYLE */
              )) : K("v-if", !0)
            ],
            6
            /* CLASS, STYLE */
          ),
          G(o, {
            hovering: e.hovering && !e.disabled && !e.formDisabled,
            focusing: e.isFocusing && !e.disabled && !e.formDisabled
          }, null, 8, ["hovering", "focusing"])
        ], 46, U3)), [
          [r, {
            disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly
          }]
        ])
      ],
      6
      /* CLASS, STYLE */
    ),
    G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
  ], 10, L3)), [
    [a, e.hover, "desktop"]
  ]);
}
const Ng = ee({
  name: V3,
  components: {
    VarFormDetails: Dn,
    VarHoverOverlay: Yn
  },
  directives: { Ripple: sn, Hover: Nn },
  props: Mg,
  setup(e) {
    const n = w(null), o = w(!1), { bindForm: t, form: r } = qn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Kn(), { hovering: u, handleHovering: c } = to(), d = E(() => e.modelValue === e.activeValue), f = E(() => {
      const { size: O, color: V, closeColor: D, loadingColor: M, variant: W } = e;
      return {
        handle: {
          width: En(O),
          height: En(O),
          backgroundColor: d.value ? V : D,
          color: M
        },
        ripple: {
          left: d.value ? En(O, 0.5) : `-${En(O, W ? 1 / 3 : 0.5)}`,
          color: d.value ? V : D || "currentColor",
          width: En(O, 2),
          height: En(O, 2)
        },
        track: {
          width: En(O, W ? 13 / 6 : 1.9),
          height: En(O, W ? 4 / 3 : 0.72),
          borderRadius: En(O, 2 / 3),
          filter: d.value || a?.value ? void 0 : `brightness(${W ? 1 : 0.6})`,
          backgroundColor: d.value ? V : D,
          borderWidth: W && !d.value ? En(O, 1 / 12) : void 0
        },
        switch: {
          width: En(O, W ? 13 / 6 : 2),
          height: En(O, W ? 4 / 3 : 1.2)
        }
      };
    }), v = E(() => En(e.size, 0.8));
    k(t, {
      reset: B,
      validate: C,
      resetValidation: s
    }), We(() => window, "keydown", h), We(() => window, "keyup", y);
    function h(O) {
      o.value && ((O.key === " " || O.key === "Enter") && Re(O), O.key === "Enter" && n.value.click());
    }
    function y(O) {
      !o.value || O.key !== " " || (Re(O), n.value.click());
    }
    function C() {
      return l(e.rules, e.modelValue);
    }
    function $(O) {
      je(() => {
        const { validateTrigger: V, rules: D, modelValue: M } = e;
        i(V, O, D, M);
      });
    }
    function b(O) {
      const {
        onClick: V,
        onChange: D,
        disabled: M,
        loading: W,
        readonly: N,
        activeValue: z,
        inactiveValue: A,
        lazyChange: I,
        "onUpdate:modelValue": R,
        onBeforeChange: T
      } = e;
      if (M || r?.disabled.value || (k(V, O), W || N || r?.readonly.value))
        return;
      const J = d.value ? A : z;
      I ? k(T, J, (fe) => {
        k(R, fe), $("onLazyChange");
      }) : (k(D, J), k(R, J), $("onChange"));
    }
    function S(O) {
      e.disabled || r?.disabled.value || c(O);
    }
    function B() {
      k(e["onUpdate:modelValue"], e.inactiveValue), s();
    }
    return {
      isActive: d,
      switchRef: n,
      hovering: u,
      isFocusing: o,
      radius: v,
      styleComputed: f,
      errorMessage: a,
      formDisabled: r?.disabled,
      formReadonly: r?.readonly,
      n: R3,
      classes: F3,
      formatElevation: vn,
      multiplySizeUnit: En,
      switchActive: b,
      hover: S
    };
  }
});
Ng.render = H3;
var Gi = Ng;
re(Gi);
le(Gi, Mg);
const wI = Gi;
var Rs = Gi;
const Vg = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: L()
}, Rg = Symbol("TABS_BIND_TAB_KEY");
function j3() {
  const { childProviders: e, bindChildren: n, length: o } = kn(Rg);
  return {
    length: o,
    tabList: e,
    bindTabList: n
  };
}
function Y3() {
  const { parentProvider: e, bindParent: n, index: o } = wn(Rg);
  return jn(!!n, "Tab", "<var-tab/> must in <var-tabs/>"), {
    index: o,
    tabs: e,
    bindTabs: n
  };
}
const { name: W3, n: Ir, classes: K3 } = ne("tab");
function q3(e, n) {
  const o = Xe("ripple");
  return Fe((g(), P(
    "div",
    {
      ref: "tabEl",
      class: p(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
      style: X({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      H(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: e.disabled || !e.ripple }]
  ]);
}
const Fg = ee({
  name: W3,
  directives: { Ripple: sn },
  props: Vg,
  setup(e) {
    const n = w(null), o = E(() => n.value), t = E(() => e.name), r = E(() => e.disabled), { index: a, tabs: i, bindTabs: l } = Y3(), { onTabClick: s, active: u, activeColor: c, inactiveColor: d, disabledColor: f, itemDirection: v, resize: m } = i, h = {
      name: t,
      index: a,
      disabled: r,
      element: o
    };
    l(h), de(() => [e.name, e.disabled], m);
    function y() {
      return e.name != null ? u.value === e.name : u.value === a?.value;
    }
    function C() {
      return e.disabled ? f.value : y() ? c.value : d.value;
    }
    function $() {
      return e.disabled ? Ir("$-tab--disabled") : y() ? Ir("$-tab--active") : Ir("$-tab--inactive");
    }
    function b(S) {
      const { disabled: B, name: O, onClick: V } = e;
      B || (k(V, O ?? a.value, S), s(h));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: c,
      inactiveColor: d,
      itemDirection: v,
      n: Ir,
      classes: K3,
      computeColorStyle: C,
      computeColorClass: $,
      handleClick: b
    };
  }
});
Fg.render = q3;
var Zi = Fg;
re(Zi);
le(Zi, Vg);
const kI = Zi;
var Fs = Zi;
const Lg = {
  name: [String, Number]
}, { name: X3, n: G3, classes: Z3 } = ne("tab-item");
function J3(e, n) {
  const o = x("var-swipe-item");
  return g(), ye(o, {
    class: p(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: ce(() => [
      H(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
const Ug = ee({
  name: X3,
  components: { VarSwipeItem: Qt },
  props: Lg,
  setup(e) {
    const n = w(!1), o = E(() => e.name), { index: t, bindTabsItems: r } = rO(), { bindLists: a } = aO(), i = {
      index: t,
      name: o,
      current: E(() => n.value),
      setCurrent: l
    };
    r(i), a(i);
    function l(s) {
      n.value = s;
    }
    return {
      current: n,
      n: G3,
      classes: Z3
    };
  }
});
Ug.render = J3;
var Ji = Ug;
re(Ji);
le(Ji, Lg);
const $I = Ji;
var Ls = Ji;
const Hg = {
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
}, { name: Q3, n: x3, classes: _3 } = ne("table");
function e8(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [
      F(
        "div",
        {
          class: p(e.n("main")),
          style: X({ "max-height": e.toSizeUnit(e.scrollerHeight) })
        },
        [
          F(
            "table",
            {
              class: p(e.n("table")),
              style: X({ width: e.toSizeUnit(e.fullWidth) })
            },
            [
              H(e.$slots, "default")
            ],
            6
            /* CLASS, STYLE */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.$slots.footer ? (g(), P(
        "div",
        {
          key: 0,
          class: p(e.n("footer"))
        },
        [
          H(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : K("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const jg = ee({
  name: Q3,
  props: Hg,
  setup: () => ({
    toSizeUnit: Ee,
    n: x3,
    classes: _3,
    formatElevation: vn
  })
});
jg.render = e8;
var Qi = jg;
re(Qi);
le(Qi, Hg);
const CI = Qi;
var Us = Qi;
const Yg = {
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
  stickyCssMode: Me(Ft, "cssMode"),
  stickyZIndex: Me(Ft, "zIndex"),
  offsetTop: Me(Ft, "offsetTop"),
  onClick: L(),
  onChange: L(),
  "onUpdate:active": L()
};
var yf = (e, n, o) => new Promise((t, r) => {
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
const { name: n8, n: o8, classes: t8 } = ne("tabs");
function r8(e, n) {
  return g(), ye(St(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: ce(() => [
      F(
        "div",
        Ke({
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
          F(
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
              H(e.$slots, "default"),
              F(
                "div",
                {
                  class: p(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
                  style: X({
                    width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                    height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                    transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
                  })
                },
                [
                  F(
                    "div",
                    {
                      class: p(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
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
const Wg = ee({
  name: n8,
  components: { VarSticky: $t },
  inheritAttrs: !1,
  props: Yg,
  setup(e) {
    const n = w("0px"), o = w("0px"), t = w("0px"), r = w("0px"), a = w(!1), i = w(null), l = E(() => e.active), s = E(() => e.activeColor), u = E(() => e.inactiveColor), c = E(() => e.disabledColor), d = E(() => e.itemDirection), f = w(null), v = E(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: m, bindTabList: h, length: y } = j3();
    h({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: c,
      itemDirection: d,
      resize: M,
      onTabClick: $
    }), de(
      () => y.value,
      () => yf(this, null, function* () {
        yield bn(), M();
      })
    ), de(() => [e.active, e.scrollable], M), Ho(M), ao(M);
    function $(N) {
      var z;
      const A = (z = N.name.value) != null ? z : N.index.value, { active: I, onChange: R, onClick: T } = e;
      k(e["onUpdate:active"], A), k(T, A), A !== I && k(R, A);
    }
    function b() {
      return m.find(({ name: N }) => e.active === N.value);
    }
    function S(N) {
      return m.find(({ index: z }) => (N ?? e.active) === z.value);
    }
    function B() {
      if (y.value === 0)
        return;
      const { active: N } = e;
      if (Bn(N)) {
        const z = Cn(N, 0, y.value - 1);
        return k(e["onUpdate:active"], z), S(z);
      }
    }
    function O() {
      a.value = e.scrollable === "always" || m.length >= 5;
    }
    function V({ element: N }) {
      const z = N.value;
      z && (e.layoutDirection === "horizontal" ? (n.value = `${z.offsetWidth}px`, t.value = `${z.offsetLeft}px`) : (o.value = `${z.offsetHeight}px`, r.value = `${z.offsetTop}px`));
    }
    function D({ element: N }) {
      if (!a.value)
        return;
      const z = i.value, A = N.value;
      if (e.layoutDirection === "horizontal") {
        const I = A.offsetLeft + A.offsetWidth / 2 - z.offsetWidth / 2;
        Ht(z, {
          left: I,
          animation: Pl
        });
      } else {
        const I = A.offsetTop + A.offsetHeight / 2 - z.offsetHeight / 2;
        Ht(z, {
          top: I,
          animation: Pl
        });
      }
    }
    function M() {
      const N = b() || S() || B();
      !N || N.disabled.value || (O(), V(N), D(N));
    }
    function W() {
      return yf(this, null, function* () {
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
      Transition: nn,
      toSizeUnit: Ee,
      n: o8,
      classes: t8,
      resize: M,
      resizeSticky: W,
      formatElevation: vn
    };
  }
});
Wg.render = r8;
var xi = Wg;
re(xi);
le(xi, Yg);
const SI = xi;
var Hs = xi;
const Kg = {
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
  "onUpdate:active": L()
};
var a8 = (e, n, o) => new Promise((t, r) => {
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
const { name: i8, n: l8 } = ne("tabs-items");
function s8(e, n) {
  const o = x("var-swipe");
  return g(), ye(o, {
    ref: "swipe",
    class: p(e.n()),
    loop: e.loop,
    duration: e.animated ? void 0 : 0,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: ce(() => [
      H(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "duration", "touchable", "onChange"]);
}
const qg = ee({
  name: i8,
  components: { VarSwipe: Jt },
  props: Kg,
  setup(e) {
    const n = w(null), { tabItemList: o, bindTabItem: t, length: r } = tO();
    t({}), de(() => e.active, s), de(
      () => r.value,
      () => a8(this, null, function* () {
        yield bn(), s(e.active);
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
      v && (o.forEach(({ setCurrent: m }) => m(!1)), v.setCurrent(!0), (f = n.value) == null || f.to(v.index.value));
    }
    function u(d) {
      var f;
      const v = o.find(({ index: h }) => h.value === d), m = (f = v.name.value) != null ? f : v.index.value;
      k(e["onUpdate:active"], m);
    }
    function c() {
      return n.value;
    }
    return {
      swipe: n,
      n: l8,
      handleSwipeChange: u,
      getSwipe: c
    };
  }
});
qg.render = s8;
var _i = qg;
re(_i);
le(_i, Kg);
const PI = _i;
var js = _i;
function Hu(e, n) {
  return Object.entries(e).reduce((o, [t, r]) => (o[t] = r.includes("px") ? r.replace(/(\d+(\.\d+)?)px/g, (a, i) => n(i)) : r, o), {});
}
var u8 = {
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
}, c8 = {
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
}, d8 = {
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
}, f8 = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, p8 = {
  "--avatar-group-offset": "-10px"
}, v8 = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, m8 = {
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
}, h8 = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, g8 = {
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
}, b8 = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, y8 = {
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
}, w8 = {
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
}, k8 = {
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
}, $8 = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, C8 = {
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
}, S8 = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, P8 = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, O8 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, z8 = {
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
}, E8 = {
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
}, T8 = {
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
}, B8 = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, D8 = {
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
}, I8 = {
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
}, A8 = {
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
}, M8 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, N8 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, V8 = {
  "--icon-size": "20px"
}, R8 = {
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
}, L8 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, U8 = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, H8 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, j8 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, Y8 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, W8 = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
}, K8 = {
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
}, q8 = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, X8 = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, G8 = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, Z8 = {
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
}, J8 = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "4px"
}, Q8 = {
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
}, x8 = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, _8 = {
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
}, eE = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, nE = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, oE = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, tE = {
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
}, rE = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, aE = {
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
}, iE = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "#fff",
  "--signature-height": "200px",
  "--signature-border-radius": "4px"
}, lE = {
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
}, sE = {
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
}, uE = {
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
}, cE = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, dE = {
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
}, fE = {
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
}, pE = {
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
}, vE = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, mE = {
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
}, hE = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, gE = {
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
}, bE = {
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
}, yE = {
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
}, wE = {
  "--watermark-content-color": "#ffffff"
}, kE = Object.defineProperty, wf = Object.getOwnPropertySymbols, $E = Object.prototype.hasOwnProperty, CE = Object.prototype.propertyIsEnumerable, kf = (e, n, o) => n in e ? kE(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, he = (e, n) => {
  for (var o in n || (n = {}))
    $E.call(n, o) && kf(e, o, n[o]);
  if (wf)
    for (var o of wf(n))
      CE.call(n, o) && kf(e, o, n[o]);
  return e;
}, SE = he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he({
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
}, y8), c8), k8), w8), gE), E8), lE), hE), vE), x8), T8), u8), C8), m8), yE), P8), eE), pE), dE), Z8), mE), I8), nE), $8), B8), Q8), d8), g8), W8), tE), b8), f8), U8), _8), X8), wE), q8), K8), p8), v8), h8), O8), z8), D8), A8), M8), N8), V8), R8), F8), L8), H8), j8), Y8), G8), J8), oE), rE), sE), uE), cE), fE), bE), aE), S8), iE), PE = {
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
}, OE = {
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
}, zE = {
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
}, EE = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, TE = {
  "--avatar-group-offset": "-10px"
}, BE = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, DE = {
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
}, IE = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, AE = {
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
}, ME = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, NE = {
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
}, VE = {
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
}, RE = {
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
}, FE = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, LE = {
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
}, UE = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, HE = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, jE = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, YE = {
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
}, WE = {
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
}, KE = {
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
}, qE = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, XE = {
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
}, GE = {
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
}, ZE = {
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
}, JE = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, QE = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, xE = {
  "--icon-size": "20px"
}, _E = {
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
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, tT = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, rT = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, aT = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, iT = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, lT = {
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
}, sT = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, uT = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, cT = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, dT = {
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
}, fT = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "12px"
}, pT = {
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
}, vT = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, mT = {
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
}, hT = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, gT = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, bT = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, yT = {
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
}, wT = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, kT = {
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
}, $T = {
  "--signature-background-color": "var(--color-surface-container-highest)",
  "--signature-stroke-color": "var(--color-inverse-surface)",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, CT = {
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
}, ST = {
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
}, PT = {
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
}, OT = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, zT = {
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
}, ET = {
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
}, TT = {
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
}, BT = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, DT = {
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
}, IT = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, AT = {
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
}, MT = {
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
}, NT = {
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
}, VT = {
  "--watermark-content-color": "#ffffff"
}, RT = Object.defineProperty, $f = Object.getOwnPropertySymbols, FT = Object.prototype.hasOwnProperty, LT = Object.prototype.propertyIsEnumerable, Cf = (e, n, o) => n in e ? RT(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ge = (e, n) => {
  for (var o in n || (n = {}))
    FT.call(n, o) && Cf(e, o, n[o]);
  if ($f)
    for (var o of $f(n))
      LT.call(n, o) && Cf(e, o, n[o]);
  return e;
}, UT = ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge({
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
}, NE), OE), QE), iT), sT), lT), XE), ME), oT), RE), fT), EE), GE), FE), gT), VE), LE), DE), MT), mT), IT), BT), zT), qE), DT), dT), VT), HE), yT), zE), IE), AE), PT), PE), KE), hT), vT), pT), ZE), BE), kT), uT), YE), TT), ST), NT), AT), WE), bT), CT), TE), jE), JE), xE), _E), eT), nT), tT), rT), aT), cT), wT), OT), ET), UE), $T), HT = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, jT = {
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
}, YT = {
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
}, WT = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, KT = {
  "--avatar-group-offset": "-10px"
}, qT = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, XT = {
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
}, GT = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, ZT = {
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
}, JT = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, QT = {
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
}, xT = {
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
}, _T = {
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
}, e5 = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, n5 = {
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
}, o5 = {
  "--code-font-size": "14px",
  "--code-line-height": "1.7"
}, t5 = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, r5 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, a5 = {
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
}, i5 = {
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
}, l5 = {
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
}, s5 = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, u5 = {
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
}, c5 = {
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
}, d5 = {
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
}, f5 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, p5 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, v5 = {
  "--icon-size": "20px"
}, m5 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, h5 = {
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
}, g5 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, b5 = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, y5 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, w5 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, k5 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, $5 = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, C5 = {
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
}, S5 = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, P5 = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, O5 = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, z5 = {
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
  "--pagination-item-background": "#fff",
  "--pagination-item-border-radius": "4px",
  "--pagination-item-simple-border-radius": "50%",
  "--pagination-input-width": "32px",
  "--pagination-disabled-color": "var(--color-text-disabled)",
  "--pagination-bg-disabled-color": "var(--color-disabled)",
  "--pagination-size-line-height": "24px",
  "--pagination-size-padding": "0 4px",
  "--pagination-quick-jumper-margin": "0 10px"
}, E5 = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-border-radius": "12px"
}, T5 = {
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
}, B5 = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, D5 = {
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
}, I5 = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, A5 = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, M5 = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, N5 = {
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
}, V5 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, R5 = {
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
}, F5 = {
  "--signature-background-color": "var(--color-surface-container-low)",
  "--signature-stroke-color": "#1D1B20",
  "--signature-height": "200px",
  "--signature-border-radius": "12px"
}, L5 = {
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
}, U5 = {
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
}, H5 = {
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
}, j5 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, Y5 = {
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
}, W5 = {
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
}, K5 = {
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
}, q5 = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, X5 = {
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
}, G5 = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, Z5 = {
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
}, J5 = {
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
}, Q5 = {
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
}, x5 = {
  "--watermark-content-color": "#808080"
}, _5 = Object.defineProperty, Sf = Object.getOwnPropertySymbols, eB = Object.prototype.hasOwnProperty, nB = Object.prototype.propertyIsEnumerable, Pf = (e, n, o) => n in e ? _5(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, be = (e, n) => {
  for (var o in n || (n = {}))
    eB.call(n, o) && Pf(e, o, n[o]);
  if (Sf)
    for (var o of Sf(n))
      nB.call(n, o) && Pf(e, o, n[o]);
  return e;
}, oB = be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be({
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
}, QT), jT), p5), $5), S5), C5), u5), JT), b5), _T), E5), WT), c5), e5), A5), xT), n5), J5), G5), q5), X5), t5), N5), GT), ZT), H5), HT), l5), I5), B5), T5), d5), qT), R5), P5), U5), Q5), Z5), i5), K5), M5), KT), XT), r5), a5), s5), f5), v5), m5), h5), g5), y5), w5), k5), O5), z5), D5), V5), L5), j5), Y5), W5), x5), YT), o5), F5);
function tB(e, n = {}) {
  const { rootFontSize: o = 16, unitPrecision: t = 6 } = n;
  return Hu(e, (r) => `${Number((r / o).toFixed(t))}rem`);
}
function rB(e, n = {}) {
  const { viewportWidth: o = 375, viewportUnit: t = "vmin", unitPrecision: r = 6 } = n;
  return Hu(e, (a) => `${Number((a / o * 100).toFixed(r))}${t}`);
}
const aB = { dark: SE, md3Light: oB, md3Dark: UT, toViewport: rB, toRem: tB, convert: Hu }, OI = null;
var Ys = aB;
const Gn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Tn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Of = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], Xg = {
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
}, Gg = (e, n) => e === "24hr" || n === "am", ju = (e, n, o) => {
  const t = Gn.findIndex((a) => j(a) === j(o)), r = Gg(e, n) ? o : Tn[t];
  return {
    hourStr: r,
    hourNum: j(r)
  };
}, Mn = (e) => {
  const [n, o, t] = e.split(":");
  return {
    hour: j(n),
    minute: j(o),
    second: j(t)
  };
}, Zg = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: c, hourNum: d } = ju(r, a, i);
  let f = !1, v = !1;
  if (u.includes(c))
    return !0;
  if (l && !s) {
    const { hour: m, minute: h } = Mn(l);
    f = m === d && t > h;
  }
  if (!l && s) {
    const { hour: m, minute: h } = Mn(s);
    f = m === d && t < h;
  }
  if (l && s) {
    const { hour: m, minute: h } = Mn(l), { hour: y, minute: C } = Mn(s);
    f = y === d && t < C || m === d && t > h;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (o = e.allowedTime) == null ? void 0 : o.minutes(t)), f || v;
}, Jg = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: c } = e, { hourStr: d, hourNum: f } = ju(r, a, i);
  let v = !1, m = !1;
  if (c.includes(d))
    return !0;
  if (s && !u) {
    const { hour: h, minute: y, second: C } = Mn(s);
    v = h === f && y < l || y === l && t > C;
  }
  if (!s && u) {
    const { hour: h, minute: y, second: C } = Mn(u);
    v = h === f && y > l || y === l && t > C;
  }
  if (s && u) {
    const { hour: h, minute: y, second: C } = Mn(s), { hour: $, minute: b, second: S } = Mn(u);
    v = h === f && y < l || $ === f && b > l || h === f && y === l && t > C || $ === f && b === l && t < S;
  }
  return (n = e.allowedTime) != null && n.seconds && (m = (o = e.allowedTime) == null ? void 0 : o.seconds(t)), v || m;
}, { n: iB, classes: lB } = ne("time-picker");
function sB(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.n("clock"))
    },
    [
      F(
        "div",
        {
          class: p(e.n("clock-hand")),
          style: X(e.handStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      (g(!0), P(
        Ne,
        null,
        Ze(e.timeScales, (o, t) => (g(), P(
          "div",
          {
            key: o,
            class: p(
              e.classes(
                e.n("clock-item"),
                [e.isActive(t, !1), e.n("clock-item--active")],
                [e.isDisable(o), e.n("clock-item--disable")]
              )
            ),
            style: X(e.getStyle(t, o, !1))
          },
          ie(o),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      )),
      e.format === "24hr" && e.type === "hour" ? (g(), P(
        "div",
        {
          key: 0,
          ref: "inner",
          class: p(e.n("clock-inner"))
        },
        [
          (g(!0), P(
            Ne,
            null,
            Ze(e.hours24, (o, t) => (g(), P(
              "div",
              {
                key: o,
                class: p(
                  e.classes(
                    e.n("clock-item"),
                    [e.isActive(t, !0), e.n("clock-item--active")],
                    [e.isDisable(o), e.n("clock-item--disable")]
                  )
                ),
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
      )) : K("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Qg = ee({
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
    const o = w(null), t = w([]), r = w([]), a = E(() => ({
      transform: `rotate(${j(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = E(() => {
      if (e.rad === void 0)
        return;
      const h = e.rad / 30;
      return h >= 0 ? h : h + 12;
    }), l = E(() => e.type === "hour" ? Gn : Of), s = (h, y) => {
      h = h ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const C = e.type === "minute" ? Zg : Jg, $ = {
        time: j(h),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: j(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return y && e.type === "minute" && Reflect.deleteProperty($, "minute"), C($);
    }, u = () => {
      if (i.value === void 0)
        return e.color;
      const h = e.isInner ? Tn[i.value] : l.value[i.value];
      return l.value === Of ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : d(h) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, c = (h, y) => y ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), d = (h) => {
      if (e.type === "hour") {
        if (Gg(e.format, e.ampm))
          return t.value.includes(h);
        const y = Gn.findIndex((C) => C === h);
        return r.value.includes(y);
      }
      return s(h, !0);
    }, f = (h, y, C) => {
      const $ = 2 * Math.PI / 12 * h - Math.PI / 2, b = 50 * (1 + Math.cos($)), S = 50 * (1 + Math.sin($)), B = () => c(h, C) ? d(y) ? {
        backgroundColor: "var(--time-picker-clock-item-disable-background)",
        color: "var(--time-picker-clock-item-disable-color)"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: O, color: V } = B();
      return {
        left: `${b}%`,
        top: `${S}%`,
        backgroundColor: O,
        color: V
      };
    }, v = () => {
      const { width: h, height: y } = tn(o.value);
      return {
        width: h,
        height: y
      };
    }, m = () => {
      if (i.value === void 0)
        return;
      const h = e.ampm === "am" ? Gn : Tn;
      return et(h[i.value], 2, "0");
    };
    return de([i, () => e.isInner], ([h, y], [C, $]) => {
      if (h === C && y === $ || e.type !== "hour" || i.value === void 0)
        return;
      const S = y ? Tn[i.value] : m(), B = e.useSeconds ? `:${e.time.second}` : "", O = `${S}:${e.time.minute}${B}`;
      e.preventNextUpdate || n("update", O), n("change-prevent-update");
    }), de(
      () => e.rad,
      (h, y) => {
        if (e.type === "hour" || h === void 0 || y === void 0)
          return;
        const C = h / 6 >= 0 ? h / 6 : h / 6 + 60, $ = y / 6 >= 0 ? y / 6 : y / 6 + 60;
        if (C === $)
          return;
        let b;
        const { hourStr: S } = ju(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const B = ue().minute(C).format("mm"), O = e.useSeconds ? `:${e.time.second}` : "";
          b = `${S}:${B}${O}`;
        }
        if (e.type === "second") {
          const B = ue().second(C).format("ss"), O = e.useSeconds ? `:${B}` : "";
          b = `${S}:${e.time.minute}${O}`;
        }
        n("update", b);
      }
    ), de(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([h, y, C]) => {
        if (t.value = [], h && !y) {
          const { hour: $ } = Mn(h), b = Gn.filter((B) => j(B) > $), S = Tn.filter((B) => j(B) > $);
          t.value = [...b, ...S];
        }
        if (!h && y) {
          const { hour: $ } = Mn(y), b = Gn.filter((B) => j(B) < $), S = Tn.filter((B) => j(B) < $);
          t.value = [...b, ...S];
        }
        if (h && y) {
          const { hour: $ } = Mn(h), { hour: b } = Mn(y), S = Gn.filter((O) => j(O) < b || j(O) > $), B = Tn.filter((O) => j(O) < b || j(O) > $);
          t.value = [...S, ...B];
        }
        if (C?.hours) {
          const { hours: $ } = C, b = Gn.filter((B) => !$(j(B))), S = Tn.filter((B) => !$(j(B)));
          t.value = [.../* @__PURE__ */ new Set([...t.value, ...b, ...S])];
        }
        r.value = t.value.map(($) => Tn.findIndex((b) => $ === b)).filter(($) => $ >= 0);
      },
      { immediate: !0, deep: !0 }
    ), {
      n: iB,
      classes: lB,
      hours24: Tn,
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
Qg.render = sB;
var uB = Qg;
const { name: cB, n: dB, classes: fB } = ne("time-picker");
function pB(e, n) {
  var o;
  const t = x("clock");
  return g(), P(
    "div",
    {
      ref: "picker",
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      F(
        "div",
        {
          class: p(e.n("title")),
          style: X({ background: e.titleColor || e.color })
        },
        [
          F(
            "div",
            {
              class: p(e.n("title-hint"))
            },
            ie((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("timePickerHint")),
            3
            /* TEXT, CLASS */
          ),
          F(
            "div",
            {
              class: p(e.n("title-time-container"))
            },
            [
              F(
                "div",
                {
                  class: p(e.n("title-time"))
                },
                [
                  F(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
                      onClick: n[0] || (n[0] = (r) => e.checkPanel("hour"))
                    },
                    ie(e.time.hour),
                    3
                    /* TEXT, CLASS */
                  ),
                  F(
                    "span",
                    {
                      class: p(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  ),
                  F(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
                      onClick: n[1] || (n[1] = (r) => e.checkPanel("minute"))
                    },
                    ie(e.time.minute),
                    3
                    /* TEXT, CLASS */
                  ),
                  e.useSeconds ? (g(), P(
                    "span",
                    {
                      key: 0,
                      class: p(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  )) : K("v-if", !0),
                  e.useSeconds ? (g(), P(
                    "div",
                    {
                      key: 1,
                      class: p(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
                      onClick: n[2] || (n[2] = (r) => e.checkPanel("second"))
                    },
                    ie(e.time.second),
                    3
                    /* TEXT, CLASS */
                  )) : K("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              e.format === "ampm" ? (g(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("title-ampm"))
                },
                [
                  F(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
                      onClick: n[3] || (n[3] = (r) => e.checkAmpm("am"))
                    },
                    " AM ",
                    2
                    /* CLASS */
                  ),
                  F(
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
              )) : K("v-if", !0)
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      F(
        "div",
        {
          class: p(e.n("body"))
        },
        [
          F(
            "div",
            {
              ref: "container",
              class: p(e.n("clock-container")),
              onTouchstart: n[5] || (n[5] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchmove: n[6] || (n[6] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchend: n[7] || (n[7] = (...r) => e.end && e.end(...r))
            },
            [
              G(nn, {
                name: `${e.n()}-panel-fade`
              }, {
                default: ce(() => [
                  (g(), ye(t, {
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
      e.$slots.actions ? (g(), P(
        "div",
        {
          key: 0,
          class: p(e.n("actions"))
        },
        [
          H(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : K("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const xg = ee({
  name: cB,
  components: { Clock: uB },
  props: Xg,
  setup(e) {
    const n = w(null), o = w(null), t = w(null), r = w(!1), a = w(!1), i = w(!1), l = w(!1), s = w(!1), u = w(!1), c = w(!1), d = w(0), f = w(0), v = w(), m = w("hour"), h = w("am"), y = w({
      hour: "00",
      minute: "00",
      second: "00"
    }), C = on({
      x: 0,
      y: 0
    }), $ = on({
      x: [],
      y: []
    }), b = E(() => m.value === "hour" ? v.value : m.value === "minute" ? d.value : f.value), { t: S } = io();
    de(
      () => e.modelValue,
      (U) => {
        if (U === void 0 || U === "") {
          B();
          return;
        }
        const { hour: Q, minute: te, second: pe } = Mn(U), Y = ue().hour(Q).format("hh"), Z = ue().hour(Q).format("HH"), $e = ue().minute(te).format("mm"), Ve = ue().second(pe).format("ss");
        v.value = (Y === "12" ? 0 : j(Y)) * 30, d.value = j($e) * 6, f.value = j(Ve) * 6, y.value = z(U), e.format !== "24hr" && (h.value = et(`${Q}`, 2, "0") === Z && Tn.includes(Z) ? "pm" : "am"), r.value = e.format === "24hr" && Tn.includes(Z);
      },
      { immediate: !0 }
    );
    function B() {
      v.value = void 0, d.value = 0, f.value = 0, y.value = {
        hour: "00",
        minute: "00",
        second: "00"
      }, h.value = "am";
    }
    function O(U) {
      k(e["onUpdate:modelValue"], U), k(e.onChange, U);
    }
    function V(U) {
      return U * 57.29577951308232;
    }
    function D(U) {
      l.value = !1, c.value = !1, m.value = U;
    }
    function M(U) {
      const { disableHour: Q } = t.value, te = Gn.findIndex((Z) => j(Z) === j(y.value.hour)), pe = U === "am" ? Gn : Tn;
      return [...pe.slice(te), ...pe.slice(0, te)].find((Z, $e) => (a.value = $e !== 0, !Q.includes(Z)));
    }
    function W(U) {
      if (e.readonly)
        return;
      h.value = U;
      const Q = M(U);
      if (!Q)
        return;
      const te = e.useSeconds ? `:${y.value.second}` : "", pe = `${et(Q, 2, "0")}:${y.value.minute}${te}`;
      O(pe);
    }
    function N(U, Q) {
      const te = U >= $.x[0] && U <= $.x[1], pe = Q >= $.y[0] && Q <= $.y[1];
      return te && pe;
    }
    function z(U) {
      const Q = e.format === "24hr" ? "HH" : "hh", { hour: te, minute: pe, second: Y } = Mn(U);
      return {
        hour: ue().hour(te).format(Q),
        minute: ue().minute(pe).format("mm"),
        second: ue().second(Y).format("ss")
      };
    }
    function A(U) {
      const Q = U / 30;
      return Q >= 0 ? Q : Q + 12;
    }
    function I() {
      const { width: U, height: Q } = t.value.getSize(), te = C.x - U / 2 - 8, pe = C.x + U / 2 + 8, Y = C.y - Q / 2 - 8, Z = C.y + Q / 2 + 8;
      return {
        rangeXMin: te,
        rangeXMax: pe,
        rangeYMin: Y,
        rangeYMax: Z
      };
    }
    function R(U, Q, te) {
      const { disableHour: pe } = t.value;
      i.value = N(U, Q);
      const Y = Math.round(te / 30) * 30 + 90, Z = A(Y), $e = r.value ? Gn[Z] : Tn[Z];
      if (pe.includes($e) || (r.value = e.format === "24hr" ? N(U, Q) : !1), r.value !== i.value)
        return;
      const Ve = r.value || h.value === "pm" ? Tn[Z] : Gn[Z];
      u.value = pe.includes(Ve), !u.value && (v.value = Y, l.value = !0);
    }
    function T(U) {
      const { disableHour: Q } = t.value, te = Math.round(U / 6) * 6 + 90, Y = {
        time: te / 6 >= 0 ? te / 6 : te / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Q,
        allowedTime: e.allowedTime
      };
      c.value = Zg(Y), !c.value && (d.value = te, s.value = !0);
    }
    function J(U) {
      const { disableHour: Q } = t.value, te = Math.round(U / 6) * 6 + 90, Y = {
        time: te / 6 >= 0 ? te / 6 : te / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: y.value.hour,
        minute: j(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Q,
        allowedTime: e.allowedTime
      };
      Jg(Y) || (f.value = te);
    }
    function fe() {
      const { left: U, top: Q, width: te, height: pe } = tn(n.value);
      if (C.x = U + te / 2, C.y = Q + pe / 2, m.value === "hour" && e.format === "24hr") {
        const { rangeXMin: Y, rangeXMax: Z, rangeYMin: $e, rangeYMax: Ve } = I();
        $.x = [Y, Z], $.y = [$e, Ve];
      }
    }
    function q(U) {
      if (Re(U), e.readonly)
        return;
      fe();
      const { clientX: Q, clientY: te } = U.touches[0], pe = Q - C.x, Y = te - C.y, Z = Math.round(V(Math.atan2(Y, pe)));
      m.value === "hour" ? R(Q, te, Z) : m.value === "minute" ? T(Z) : J(Z);
    }
    function ve() {
      if (!e.readonly) {
        if (m.value === "hour" && l.value) {
          m.value = "minute";
          return;
        }
        m.value === "minute" && e.useSeconds && s.value && (m.value = "second");
      }
    }
    function Pe() {
      a.value = !1;
    }
    return {
      getRad: b,
      time: y,
      container: n,
      inner: t,
      picker: o,
      isInner: r,
      type: m,
      ampm: h,
      isPreventNextUpdate: a,
      n: dB,
      classes: fB,
      t: an,
      pt: S,
      moveHand: q,
      checkPanel: D,
      checkAmpm: W,
      end: ve,
      update: O,
      changePreventUpdate: Pe,
      formatElevation: vn
    };
  }
});
xg.render = pB;
var el = xg;
re(el);
le(el, Xg);
const zI = el;
var Ws = el;
const _g = {
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
var Ar = (e, n, o) => new Promise((t, r) => {
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
const { name: vB, n: mB, classes: hB } = ne("uploader");
let gB = 0;
const bB = ["onClick"], yB = ["onClick"], wB = ["src", "alt"], kB = ["tabindex"], $B = ["multiple", "accept", "capture", "disabled"], CB = ["src"];
function SB(e, n) {
  const o = x("var-icon"), t = x("var-hover-overlay"), r = x("var-form-details"), a = x("var-popup"), i = Xe("ripple"), l = Xe("hover");
  return g(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      F(
        "div",
        {
          class: p(e.n("file-list"))
        },
        [
          (g(!0), P(
            Ne,
            null,
            Ze(e.files, (s) => Fe((g(), P("div", {
              key: s.id,
              class: p(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
              onClick: (u) => e.preview(s)
            }, [
              F(
                "div",
                {
                  class: p(e.n("file-name"))
                },
                ie(s.name || s.url),
                3
                /* TEXT, CLASS */
              ),
              e.removable ? H(e.$slots, "remove-button", {
                key: 0,
                remove: () => {
                  e.handleRemove(s);
                }
              }, () => [
                F("div", {
                  class: p(e.n("file-close")),
                  onClick: Un((u) => e.handleRemove(s), ["stop"])
                }, [
                  G(o, {
                    class: p(e.n("file-close-icon")),
                    "var-uploader-cover": "",
                    name: "delete"
                  }, null, 8, ["class"])
                ], 10, yB)
              ]) : K("v-if", !0),
              s.cover ? (g(), P("img", {
                key: 1,
                role: "img",
                class: p(e.n("file-cover")),
                style: X({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, wB)) : K("v-if", !0),
              F(
                "div",
                {
                  class: p(e.n("file-indicator"))
                },
                [
                  F(
                    "div",
                    {
                      class: p(
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
            ], 10, bB)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Fe((g(), P("div", {
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
            F("input", {
              ref: "input",
              type: "file",
              class: p(e.n("action-input")),
              multiple: e.multiple,
              accept: e.accept,
              capture: e.capture,
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
              onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s)),
              onClick: n[1] || (n[1] = Un(() => {
              }, ["stop"]))
            }, null, 42, $B),
            H(e.$slots, "default", {}, () => [
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
          ], 42, kB)), [
            [i, {
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default
            }],
            [l, e.handleHovering, "desktop"]
          ]) : K("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      G(r, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, Jo({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: ce(() => [
            H(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"]),
      G(a, {
        show: e.showPreview,
        "onUpdate:show": n[5] || (n[5] = (s) => e.showPreview = s),
        class: p(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        onClosed: n[6] || (n[6] = (s) => e.currentPreview = null)
      }, {
        default: ce(() => {
          var s, u;
          return [
            e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (g(), P("video", {
              key: 0,
              class: p(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (u = e.currentPreview) == null ? void 0 : u.url
            }, null, 10, CB)) : K("v-if", !0)
          ];
        }),
        _: 1
        /* STABLE */
      }, 8, ["show", "class"])
    ],
    2
    /* CLASS */
  );
}
const eb = ee({
  name: vB,
  directives: { Ripple: sn, Hover: Nn },
  components: {
    VarIcon: Qe,
    VarPopup: Ro,
    VarFormDetails: Dn,
    VarHoverOverlay: Yn
  },
  props: _g,
  setup(e) {
    const n = w(!1), o = w(null), t = w(null), r = w(!1), a = w(null), i = E(() => {
      const {
        maxlength: U,
        modelValue: { length: Q }
      } = e;
      return Bn(U) ? `${Q} / ${U}` : "";
    }), { form: l, bindForm: s } = qn(), {
      errorMessage: u,
      validateWithTrigger: c,
      validate: d,
      // expose
      resetValidation: f
    } = Kn(), { hovering: v, handleHovering: m } = to(), h = E(() => {
      const { modelValue: U, hideList: Q } = e;
      return Q ? [] : U;
    });
    let y = !1;
    const C = {
      getSuccess: I,
      getError: R,
      getLoading: T
    };
    k(s, {
      validate: ve,
      resetValidation: f,
      reset: Pe
    }), We(() => window, "keydown", b), We(() => window, "keyup", S), de(
      () => e.modelValue,
      () => {
        !y && q("onChange"), y = !1;
      },
      { deep: !0 }
    );
    function b(U) {
      n.value && ((U.key === " " || U.key === "Enter") && U.preventDefault(), U.key === "Enter" && o.value.click());
    }
    function S(U) {
      !n.value || U.key !== " " || (U.preventDefault(), o.value.click());
    }
    function B(U) {
      const { disabled: Q, previewed: te, preventDefaultPreview: pe, onPreview: Y } = e;
      if (l?.disabled.value || Q || !te || (k(Y, on(U)), pe))
        return;
      const { url: Z } = U;
      if (Uc(Z)) {
        xt(Z);
        return;
      }
      Hc(Z) && (a.value = U, r.value = !0);
    }
    function O(U) {
      return {
        id: gB++,
        url: "",
        cover: "",
        name: U.name,
        file: U,
        progress: 0
      };
    }
    function V(U) {
      const Q = U.target, { files: te } = Q;
      return Array.from(te);
    }
    function D(U) {
      return Ar(this, null, function* () {
        const Q = U.file;
        if (e.resolveType === "default" && Q.type.startsWith("image") || e.resolveType === "data-url") {
          const pe = yield rp(Q);
          U.cover = pe, U.url = pe;
        }
        return U;
      });
    }
    function M(U) {
      return U.map(D);
    }
    function W(U) {
      const { onBeforeRead: Q } = e;
      return U.map(
        (te) => new Promise((pe) => {
          Q || pe({
            valid: !0,
            varFile: te
          });
          const Y = mo(k(Q, on(te)));
          Promise.all(Y).then((Z) => {
            pe({
              valid: Z.every(Boolean),
              varFile: te
            });
          });
        })
      );
    }
    function N(U) {
      return Ar(this, null, function* () {
        const { maxsize: Q, maxlength: te, modelValue: pe, onOversize: Y, onAfterRead: Z, onBeforeFilter: $e, readonly: Ve, disabled: Ge } = e;
        if (l?.disabled.value || l?.readonly.value || Ge || Ve)
          return;
        const Le = (we) => we.filter((Be) => Be.file.size > j(Q) ? (k(Y, on(Be)), !1) : !0), fn = (we) => {
          const Be = Math.min(we.length, j(te) - pe.length);
          return we.slice(0, Be);
        }, un = (we) => Ar(this, null, function* () {
          if (!$e)
            return we;
          const Be = mo($e);
          for (const xe of Be)
            we = yield xe(we);
          return we;
        });
        let me = V(U).map(O);
        me = yield un(me), me = Q != null ? Le(me) : me, me = te != null ? fn(me) : me;
        const qe = yield Promise.all(M(me)), se = (yield Promise.all(W(qe))).filter(({ valid: we }) => we).map(({ varFile: we }) => we);
        k(e["onUpdate:modelValue"], [...pe, ...se]), U.target.value = "", se.forEach((we) => k(Z, on(we)));
      });
    }
    function z(U) {
      return Ar(this, null, function* () {
        const { disabled: Q, readonly: te, modelValue: pe, onBeforeRemove: Y, onRemove: Z } = e;
        if (l?.disabled.value || l?.readonly.value || Q || te)
          return;
        if (Y) {
          const Ve = mo(k(Y, on(U)));
          if ((yield Promise.all(Ve)).some((Ge) => !Ge))
            return;
        }
        const $e = pe.filter((Ve) => Ve !== U);
        k(Z, on(U)), q("onRemove"), k(e["onUpdate:modelValue"], $e);
      });
    }
    function A(U) {
      if (!(l?.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          k(e.onClickAction, J, U);
          return;
        }
        J();
      }
    }
    function I() {
      return e.modelValue.filter((U) => U.state === "success");
    }
    function R() {
      return e.modelValue.filter((U) => U.state === "error");
    }
    function T() {
      return e.modelValue.filter((U) => U.state === "loading");
    }
    function J() {
      t.value.click();
    }
    function fe() {
      a.value = null, r.value = !1, xt.close();
    }
    function q(U) {
      je(() => {
        const { validateTrigger: Q, rules: te, modelValue: pe } = e;
        c(Q, U, te, pe, C);
      });
    }
    function ve() {
      return d(e.rules, e.modelValue, C);
    }
    function Pe() {
      y = !0, k(e["onUpdate:modelValue"], []), f();
    }
    return {
      input: t,
      actionRef: o,
      files: h,
      showPreview: r,
      currentPreview: a,
      errorMessage: u,
      maxlengthText: i,
      hovering: v,
      isFocusing: n,
      formDisabled: l?.disabled,
      formReadonly: l?.readonly,
      n: mB,
      classes: hB,
      formatElevation: vn,
      toNumber: j,
      handleHovering: m,
      isHTMLSupportVideo: Hc,
      isHTMLSupportImage: Uc,
      preview: B,
      handleChange: N,
      handleRemove: z,
      getSuccess: I,
      getError: R,
      getLoading: T,
      validate: ve,
      resetValidation: f,
      reset: Pe,
      chooseFile: J,
      closePreview: fe,
      handleActionClick: A,
      toSizeUnit: Ee
    };
  }
});
eb.render = SB;
var nl = eb;
re(nl);
le(nl, _g);
const EI = nl;
var Ks = nl;
const nb = {
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
var PB = Object.defineProperty, OB = Object.defineProperties, zB = Object.getOwnPropertyDescriptors, zf = Object.getOwnPropertySymbols, EB = Object.prototype.hasOwnProperty, TB = Object.prototype.propertyIsEnumerable, Ef = (e, n, o) => n in e ? PB(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, BB = (e, n) => {
  for (var o in n || (n = {}))
    EB.call(n, o) && Ef(e, o, n[o]);
  if (zf)
    for (var o of zf(n))
      TB.call(n, o) && Ef(e, o, n[o]);
  return e;
}, DB = (e, n) => OB(e, zB(n)), IB = (e, n, o) => new Promise((t, r) => {
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
const { name: AB, n: MB, classes: NB } = ne("watermark"), VB = { ref: "svgRef" }, RB = ["viewBox", "width", "height"], FB = ["width", "height"], LB = ["href", "xlink:href", "x", "y", "width", "height"];
function UB(e, n) {
  return g(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      H(e.$slots, "default"),
      (g(), ye(co, {
        to: "body",
        disabled: !e.fullscreen
      }, [
        F(
          "div",
          {
            ref: "containerRef",
            class: p(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
            style: X({
              backgroundImage: `url(${e.watermarkUrl})`,
              zIndex: e.zIndex
            })
          },
          [
            Fe(F(
              "div",
              VB,
              [
                (g(), P("svg", {
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
                  e.showContent() ? (g(), P("foreignObject", {
                    key: 0,
                    x: "0",
                    y: "0",
                    width: e.width,
                    height: e.height
                  }, [
                    F(
                      "div",
                      {
                        xmlns: "http://www.w3.org/1999/xhtml",
                        style: X({
                          transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
                          transformOrigin: "center"
                        })
                      },
                      [
                        H(e.$slots, "content", {}, () => [
                          F(
                            "span",
                            {
                              style: X(DB(BB({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
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
                  ], 8, FB)) : K("v-if", !0),
                  !e.$slots.content && e.image ? (g(), P("image", {
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
                  }, null, 12, LB)) : K("v-if", !0)
                ], 12, RB))
              ],
              512
              /* NEED_PATCH */
            ), [
              [xn, !1]
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
const ob = ee({
  name: AB,
  props: nb,
  setup(e, { slots: n }) {
    const o = w(""), t = w(""), r = w(""), a = w(null), i = w(null);
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
    ), ko(d), nr(c);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return new Promise((f) => {
        const v = document.createElement("canvas"), m = v.getContext("2d"), h = new Image();
        h.crossOrigin = "anonymous", h.referrerPolicy = "no-referrer", h.src = e.image, h.onload = () => {
          v.width = h.width, v.height = h.height, m.drawImage(h, 0, 0), f(v.toDataURL());
        };
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
      return IB(this, null, function* () {
        r.value = Wn(i.value).color, e.image && (t.value = yield s()), yield je(), c(), o.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: o,
      imageUrl: t,
      textColor: r,
      n: MB,
      classes: NB,
      showContent: l,
      resize: d
    };
  }
});
ob.render = UB;
var ol = ob;
re(ol);
le(ol, nb);
const TI = ol;
var qs = ol;
const HB = "3.14.0";
function jB(e) {
  yl.install && e.use(yl), wl.install && e.use(wl), kl.install && e.use(kl), Sl.install && e.use(Sl), zl.install && e.use(zl), El.install && e.use(El), Tl.install && e.use(Tl), na.install && e.use(na), Bl.install && e.use(Bl), Dl.install && e.use(Dl), Il.install && e.use(Il), Al.install && e.use(Al), In.install && e.use(In), Ml.install && e.use(Ml), Nl.install && e.use(Nl), Vl.install && e.use(Vl), vt.install && e.use(vt), Rl.install && e.use(Rl), oa.install && e.use(oa), Ll.install && e.use(Ll), Ul.install && e.use(Ul), Hl.install && e.use(Hl), jl.install && e.use(jl), Yl.install && e.use(Yl), Ln.install && e.use(Ln), Wl.install && e.use(Wl), Gl.install && e.use(Gl), es.install && e.use(es), os.install && e.use(os), ts.install && e.use(ts), rs.install && e.use(rs), sa.install && e.use(sa), as.install && e.use(as), is.install && e.use(is), jt.install && e.use(jt), ls.install && e.use(ls), ss.install && e.use(ss), Dn.install && e.use(Dn), us.install && e.use(us), Nn.install && e.use(Nn), Yn.install && e.use(Yn), Qe.install && e.use(Qe), cs.install && e.use(cs), xt.install && e.use(xt), ds.install && e.use(ds), fs.install && e.use(fs), Yt.install && e.use(Yt), Gt.install && e.use(Gt), ps.install && e.use(ps), vs.install && e.use(vs), yt.install && e.use(yt), ms.install && e.use(ms), gl.install && e.use(gl), hs.install && e.use(hs), qt.install && e.use(qt), mt.install && e.use(mt), Xt.install && e.use(Xt), ca.install && e.use(ca), gs.install && e.use(gs), bs.install && e.use(bs), ys.install && e.use(ys), ws.install && e.use(ws), Ro.install && e.use(Ro), ks.install && e.use(ks), $s.install && e.use($s), da.install && e.use(da), Cs.install && e.use(Cs), Ss.install && e.use(Ss), Ps.install && e.use(Ps), sn.install && e.use(sn), Os.install && e.use(Os), zs.install && e.use(zs), Es.install && e.use(Es), Ts.install && e.use(Ts), Bs.install && e.use(Bs), Is.install && e.use(Is), As.install && e.use(As), Ms.install && e.use(Ms), Ns.install && e.use(Ns), $t.install && e.use($t), Vs.install && e.use(Vs), Jt.install && e.use(Jt), Qt.install && e.use(Qt), Rs.install && e.use(Rs), Fs.install && e.use(Fs), Ls.install && e.use(Ls), Us.install && e.use(Us), Hs.install && e.use(Hs), js.install && e.use(js), Ys.install && e.use(Ys), Ws.install && e.use(Ws), ua.install && e.use(ua), Ks.install && e.use(Ks), qs.install && e.use(qs);
}
const BI = {
  version: HB,
  install: jB,
  ActionSheet: yl,
  Alert: wl,
  AppBar: kl,
  AutoComplete: Sl,
  Avatar: zl,
  AvatarGroup: El,
  BackTop: Tl,
  Badge: na,
  BottomNavigation: Bl,
  BottomNavigationItem: Dl,
  Breadcrumb: Il,
  Breadcrumbs: Al,
  Button: In,
  ButtonGroup: Ml,
  Card: Nl,
  Cell: Vl,
  Checkbox: vt,
  CheckboxGroup: Rl,
  Chip: oa,
  Code: Ll,
  Col: Ul,
  Collapse: Hl,
  CollapseItem: jl,
  CollapseTransition: Yl,
  Context: Ln,
  CountTo: Wl,
  Countdown: Gl,
  Counter: es,
  DatePicker: os,
  Dialog: ts,
  Divider: rs,
  Drag: sa,
  Ellipsis: as,
  Fab: is,
  FieldDecorator: jt,
  FloatingPanel: ls,
  Form: ss,
  FormDetails: Dn,
  HighlighterProvider: us,
  Hover: Nn,
  HoverOverlay: Yn,
  Icon: Qe,
  Image: cs,
  ImagePreview: xt,
  IndexAnchor: ds,
  IndexBar: fs,
  Input: Yt,
  Lazy: Gt,
  Link: ps,
  List: vs,
  Loading: yt,
  LoadingBar: ms,
  Locale: gl,
  LocaleProvider: hs,
  Menu: qt,
  MenuOption: mt,
  MenuSelect: Xt,
  Option: ca,
  Overlay: gs,
  Pagination: bs,
  Paper: ys,
  Picker: ws,
  Popup: Ro,
  Progress: ks,
  PullRefresh: $s,
  Radio: da,
  RadioGroup: Cs,
  Rate: Ss,
  Result: Ps,
  Ripple: sn,
  Row: Os,
  Select: zs,
  Signature: Es,
  Skeleton: Ts,
  Slider: Bs,
  Snackbar: Is,
  Space: As,
  Step: Ms,
  Steps: Ns,
  Sticky: $t,
  StyleProvider: Vs,
  Swipe: Jt,
  SwipeItem: Qt,
  Switch: Rs,
  Tab: Fs,
  TabItem: Ls,
  Table: Us,
  Tabs: Hs,
  TabsItems: js,
  Themes: Ys,
  TimePicker: Ws,
  Tooltip: ua,
  Uploader: Ks,
  Watermark: qs
};
export {
  yl as ActionSheet,
  wl as Alert,
  kl as AppBar,
  Sl as AutoComplete,
  zl as Avatar,
  El as AvatarGroup,
  Tl as BackTop,
  na as Badge,
  Bl as BottomNavigation,
  Dl as BottomNavigationItem,
  Il as Breadcrumb,
  Al as Breadcrumbs,
  In as Button,
  Ml as ButtonGroup,
  Nl as Card,
  Vl as Cell,
  vt as Checkbox,
  Rl as CheckboxGroup,
  oa as Chip,
  Ll as Code,
  Ul as Col,
  Hl as Collapse,
  jl as CollapseItem,
  Yl as CollapseTransition,
  Ln as Context,
  Wl as CountTo,
  Gl as Countdown,
  es as Counter,
  os as DatePicker,
  ts as Dialog,
  rs as Divider,
  sa as Drag,
  as as Ellipsis,
  is as Fab,
  jt as FieldDecorator,
  ls as FloatingPanel,
  ss as Form,
  Dn as FormDetails,
  us as HighlighterProvider,
  Nn as Hover,
  Yn as HoverOverlay,
  Qe as Icon,
  cs as Image,
  xt as ImagePreview,
  ds as IndexAnchor,
  fs as IndexBar,
  Yt as Input,
  Gt as Lazy,
  ps as Link,
  vs as List,
  yt as Loading,
  ms as LoadingBar,
  gl as Locale,
  hs as LocaleProvider,
  qt as Menu,
  mt as MenuOption,
  Xt as MenuSelect,
  ca as Option,
  gs as Overlay,
  Ol as PIXEL,
  bs as Pagination,
  ys as Paper,
  ws as Picker,
  Ro as Popup,
  ks as Progress,
  $s as PullRefresh,
  da as Radio,
  Cs as RadioGroup,
  Ss as Rate,
  Ps as Result,
  sn as Ripple,
  Os as Row,
  Cg as SNACKBAR_TYPE,
  zs as Select,
  Es as Signature,
  Ts as Skeleton,
  Bs as Slider,
  Is as Snackbar,
  As as Space,
  Ms as Step,
  Ns as Steps,
  $t as Sticky,
  Vs as StyleProvider,
  Jt as Swipe,
  Qt as SwipeItem,
  Rs as Switch,
  Fs as Tab,
  Ls as TabItem,
  Us as Table,
  Hs as Tabs,
  js as TabsItems,
  Ys as Themes,
  Ws as TimePicker,
  ua as Tooltip,
  Ks as Uploader,
  qs as Watermark,
  QB as _ActionSheetComponent,
  xB as _AlertComponent,
  _B as _AppBarComponent,
  lD as _AutoCompleteComponent,
  uD as _AvatarComponent,
  cD as _AvatarGroupComponent,
  pD as _BackTopComponent,
  vD as _BadgeComponent,
  mD as _BottomNavigationComponent,
  hD as _BottomNavigationItemComponent,
  gD as _BreadcrumbComponent,
  bD as _BreadcrumbsComponent,
  fD as _ButtonComponent,
  yD as _ButtonGroupComponent,
  wD as _CardComponent,
  kD as _CellComponent,
  tD as _CheckboxComponent,
  $D as _CheckboxGroupComponent,
  CD as _ChipComponent,
  SD as _CodeComponent,
  PD as _ColComponent,
  OD as _CollapseComponent,
  zD as _CollapseItemComponent,
  ED as _CollapseTransitionComponent,
  KB as _ContextComponent,
  TD as _CountToComponent,
  BD as _CountdownComponent,
  DD as _CounterComponent,
  AD as _DatePickerComponent,
  MD as _DialogComponent,
  ND as _DividerComponent,
  VD as _DragComponent,
  FD as _EllipsisComponent,
  LD as _FabComponent,
  nD as _FieldDecoratorComponent,
  UD as _FloatingPanelComponent,
  HD as _FormComponent,
  eD as _FormDetailsComponent,
  jD as _HighlighterProviderComponent,
  GB as _HoverComponent,
  ZB as _HoverOverlayComponent,
  JB as _IconComponent,
  YD as _ImageComponent,
  qD as _ImagePreviewComponent,
  XD as _IndexAnchorComponent,
  GD as _IndexBarComponent,
  oD as _InputComponent,
  sD as _LazyComponent,
  ZD as _LinkComponent,
  JD as _ListComponent,
  QD as _LoadingBarComponent,
  dD as _LoadingComponent,
  WB as _LocaleComponent,
  xD as _LocaleProviderComponent,
  aD as _MenuComponent,
  rD as _MenuOptionComponent,
  iD as _MenuSelectComponent,
  _D as _OptionComponent,
  eI as _OverlayComponent,
  nI as _PaginationComponent,
  oI as _PaperComponent,
  tI as _PickerComponent,
  qB as _PopupComponent,
  rI as _ProgressComponent,
  aI as _PullRefreshComponent,
  iI as _RadioComponent,
  lI as _RadioGroupComponent,
  sI as _RateComponent,
  uI as _ResultComponent,
  XB as _RippleComponent,
  cI as _RowComponent,
  dI as _SelectComponent,
  fI as _SignatureComponent,
  pI as _SkeletonComponent,
  vI as _SliderComponent,
  mI as _SnackbarComponent,
  hI as _SpaceComponent,
  gI as _StepComponent,
  bI as _StepsComponent,
  ID as _StickyComponent,
  yI as _StyleProviderComponent,
  WD as _SwipeComponent,
  KD as _SwipeItemComponent,
  wI as _SwitchComponent,
  kI as _TabComponent,
  $I as _TabItemComponent,
  CI as _TableComponent,
  SI as _TabsComponent,
  PI as _TabsItemsComponent,
  OI as _ThemesComponent,
  zI as _TimePickerComponent,
  RD as _TooltipComponent,
  EI as _UploaderComponent,
  TI as _WatermarkComponent,
  Lp as actionSheetProps,
  fu as add,
  Hp as alertProps,
  Yp as appBarProps,
  Ov as avatarGroupProps,
  Sv as avatarProps,
  Iv as backTopProps,
  Mv as badgeProps,
  Lv as bottomNavigationItemProps,
  Vv as bottomNavigationProps,
  Hv as breadcrumbProps,
  Wv as breadcrumbsProps,
  qv as buttonGroupProps,
  Tv as buttonProps,
  Gv as cardProps,
  Jv as cellProps,
  xv as checkboxGroupProps,
  xp as checkboxProps,
  em as chipProps,
  om as codeProps,
  rm as colProps,
  dm as collapseItemProps,
  lm as collapseProps,
  pm as collapseTransitionProps,
  mm as countToProps,
  gm as countdownProps,
  Bm as counterProps,
  hp as currentMessage,
  Rm as datePickerProps,
  BI as default,
  mn as defaultLazyOptions,
  qm as dialogProps,
  Gm as dividerProps,
  Jm as dragProps,
  eh as ellipsisProps,
  dp as enUS,
  fp as faIR,
  oh as fabProps,
  Pa as fieldDecoratorProps,
  Kp as formDetailsProps,
  ah as formProps,
  Ap as hoverOverlayProps,
  ln as iconProps,
  yv as imageCache,
  fh as imagePreviewProps,
  sh as imageProps,
  vh as indexAnchorProps,
  gh as indexBarProps,
  yu as inputProps,
  jB as install,
  yh as linkProps,
  kh as listProps,
  fO as loadingBarProps,
  po as loadingProps,
  nv as menuOptionProps,
  wu as menuProps,
  _r as menuSelectProps,
  gp as merge,
  mp as messages,
  Mh as optionProps,
  Rh as overlayProps,
  Fh as paginationProps,
  Uh as paperProps,
  jh as pickerProps,
  Et as popupProps,
  Wh as progressProps,
  qh as pullRefreshProps,
  Qh as radioGroupProps,
  Gh as radioProps,
  _h as rateProps,
  ng as resultProps,
  ug as rowProps,
  dg as selectProps,
  vg as signatureProps,
  hg as skeletonProps,
  bg as sliderProps,
  Lu as snackbarProps,
  Og as spaceProps,
  zg as stepProps,
  Bg as stepsProps,
  Ft as stickyProps,
  Ig as styleProviderProps,
  Mu as swipeProps,
  Mg as switchProps,
  an as t,
  Lg as tabItemProps,
  Vg as tabProps,
  Hg as tableProps,
  Kg as tabsItemsProps,
  Yg as tabsProps,
  Xg as timePickerProps,
  xm as tooltipProps,
  _g as uploaderProps,
  pu as use,
  to as useHoverOverlay,
  du as useLocale,
  HB as version,
  nb as watermarkProps,
  uu as zhCN,
  vp as zhHK,
  cu as zhTW
};
